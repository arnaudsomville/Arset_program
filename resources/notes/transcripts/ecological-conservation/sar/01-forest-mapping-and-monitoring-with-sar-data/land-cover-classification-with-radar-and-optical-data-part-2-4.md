# Land Cover Classification with Radar and Optical Data, Part 2/4

`https://www.youtube.com/watch?v=raXA3gnb94Q` · id 138 · 2:02:03 · module 96 — Forest Mapping and Monitoring with SAR Data

[00:02] thank you all for joining us today for the second session of forest mapping and monitoring with sar data
[00:09] today we'll be we will be discussing land cover classification my name is amber mccullum and i will be
[00:15] your presenter alongside erica potus who will be walking you through the exercise we also have erica and juan torres-perez
[00:24] presenting the spanish session as well sean mccartney helped us create and edit the series for this training we will have four
[00:36] two-hour sessions we had our first session on tuesday may 12th 12th and we will have sessions three and four
[00:44] on may 19th and 21st next week we are presenting the same content in two different live sessions in both
[00:53] english and spanish note that you only need to attend one session per day and you can find all the course
[01:00] materials on the website listed here after each session we will have a question and answer portion feel free to type your questions into
[01:10] the chat box along the way and we will try to get to as many as possible at the
[01:15] end end we will also post the questions and answers on our website after the training training if we don't get to a question you can
[01:24] also email myself or my colleagues erica and juan at our email addresses listed here we will have one follow-on homework that
[01:35] will be available on the course website this will cover content from the lecture as well as from exercises on google
[01:42] earth engine which we are highlighting throughout this training to receive credit for the homework you must submit all answers via google forms
[01:52] by the deadline which is thursday june 4th so two weeks from the last session the link to the homework will be
[02:00] available during the final session on may 21st to receive a certificate of completion you must attend all four live webinars
[02:08] and complete the homework it takes some time to process these certificates so you can expect to receive them about two months after the
[02:16] completion of the course the two course prerequisites are the introduction to synthetic aperture rater webinar webinar and the advanced webinar sar for land
[02:29] cover applications and you can see the link to both of those here as usual you can find all the course
[02:37] materials for this training on the website and this includes a pdf of the presentation in both english and spanish
[02:44] a link to view the recording of each week's webinar and eventually the link to the homework here's a general overview of the course
[02:55] on tuesday we reviewed time series analysis with sar data today we will discuss land coverage and next week we will discuss mangrove
[03:05] mapping and calculating forest and height we hope that by the end of the session you will be able to
[03:13] identify the unique attributes of radar and optical data explain the benefits and limitations to radar and optical data for forest
[03:23] mapping mapping understand the basics of land cover classification using both radar and optical data and finally the ability to conduct a
[03:33] land cover classification using landsat and sentinel-1 data in google earth engine and this will be our exercise
[03:40] portion for today since we'll be conducting a land cover classification using both optical and radar data let's start with a brief
[03:51] review of optical data every surface on earth reflects and absorbs energy in a different manner for optical imagery the sensors are
[04:03] capturing similar data that we can see with our eyes in the visible portion of the electromagnetic spectrum
[04:10] and some portions we cannot see in the infrared infrared so each object on the ground produces a
[04:17] unique signature of the amount of reflection or absorption of each wavelength we call this the spectral signature
[04:27] for example vegetation when it's green and healthy absorbs blue and red and green and infrared so this is why we see
[04:37] plants as green so we can obtain the reflectance values of different land cover types across the visible and infrared portions
[04:48] of the electromagnetic spectrum to create signatures like the figure you see here in green you can see a typical
[04:59] vegetation signature that has a small reflectance peak in the green portion of the spectrum and a very
[05:08] high peak in the near infrared portion of the spectrum soil tends to have a steadily decreasing reflectance value in the visible and
[05:17] near infrared which you can see here in the brown line and water tends to absorb most energy
[05:26] therefore the low throughout with um a small peak in the blue that you can see here so now that we've reviewed how objects
[05:38] interact with solar radiation the next thing to understand is how the satellites and sensors collect that information
[05:48] passive remote sensing such as landsat depends on the sun as the sole source of illumination solar radiation passes through the
[05:58] atmosphere atmosphere hits a target surface such as a forest water or built up area like the example
[06:06] shown here and the energy is either transmitted absorbed or reflected as we previously discussed different materials reflect and absorb different
[06:18] wavelengths and then the satellite sensors collect the reflected radiation in these various wavelengths when we display the imagery from these
[06:31] sensors we choose three color channels to display the nomenclature here is a little confusing so bear with me
[06:40] for the first example if we put the red band in the red color channel the green band in the green channel and
[06:47] the blue band in the blue we see a natural color image like the image that you see on the top right here
[06:56] and this is how you view imagery in things like google earth engine which we'll be using later
[07:04] remote sensing specialists also like to change which bands or wavelengths we look at to put into specific color channels
[07:12] so that features on the ground become more apparent for example we mentioned that healthy vegetation reflects a lot in the near
[07:21] infrared infrared so if we put the near-infrared band into the red channel the vegetation will appear bright red as shown in this
[07:30] second image this is what we often call false color similarly similarly if we put the near infrared
[07:38] band into the green channel the vegetation appears very bright green as you can see in the bottom image here
[07:47] so these are just some techniques that we like to use to display imagery and identify different features more clearly
[07:56] for this exercise and throughout this training we will really focus on the natural color image but i wanted to make you aware of
[08:05] these different variations that we can look at throughout the imagery so when we create a land cover
[08:12] classification classification we take groups of pixels that have similar spectral signatures such as all of the healthy vegetation
[08:22] and categorize them into classes like water forest urban agriculture etc there are many techniques that we use
[08:35] for land cover classification generally classification requires assessment of the statistics of the pixels in the image such as the minimum reflectance in each
[08:46] band band and the maximum the mean and standard deviation deviation we can then plot this information such as the reflectance values from two
[08:56] specific bands or wavelength ranges to identify groups of land cover types like the figures shown here on the right
[09:06] all the pixels that fall within a designated range of those statistics are grouped and given class labels
[09:14] this can be done in a supervised or unsupervised manner with the supervised classification the user provides training data or ground
[09:24] truth to assist in the classification with an unsupervised algorithm the computer generally iterates on the classes and eventually finds the best
[09:35] fit or the best groups of classes for this series we will be using the random forest classification algorithm
[09:47] which is one of the most popular for land cover classification the computer creates an ensemble model where it chooses a random subset of
[09:56] pixels pixels and assigns them a class based on their spectral information and then iterates on this process many
[10:03] times times as we just reviewed in the previous slides slides this is the similar model that that that the computer runs to conduct the
[10:14] classification classification the algorithm also sets aside one-third of the pixels to assess error this is a type of supervised learning in
[10:24] the form of decision trees like those that you can see here as with any classification algorithm there are pros and cons
[10:37] there is no need to prune or cut back on your data because because this algorithm does that automatically
[10:45] pruning is a technique in machine learning and search algorithms that reduces the size of decision trees by
[10:51] removing sections of the tree that provide little power pruning reduces the complexity of the final classifier and hence improves the
[11:03] predictive accuracy by the reduction of overfitting overfitting therefore overfitting is not generally a problem problem and the algorithm is not sensitive to
[11:14] outliers outliers because of this decision tree model it's also really easy to parameterize the training data or the correctly
[11:25] identified pixels are really important to this algorithm as it uses only the spectral range of those data to run the classification
[11:36] while these slides presented a really brief overview of land cover classification classification i also suggest that if you have
[11:45] additional questions or interest in this portion of our presentation you can take a look at previous arset courses
[11:55] that we have for the land management application area for land cover classification and accuracy assessment and we talk about these themes much more
[12:05] thoroughly throughout those so do go back to the rsat website and take a look at those as well
[12:15] while we have described the benefits and applications of the use of optical data for land cover classification there are
[12:21] also some disadvantages disadvantages when monitoring vegetation over small regions the spatial resolution of nasa data for example 30 meters from landsat
[12:35] may not be able to discern the level of detail you need on the ground this will necessitate broad classes of
[12:43] land cover where you cannot differentiate species of vegetation additionally the spectral information of these sensors is not sensitive to variations in
[12:58] different different vegetation species for example and in those kinds of classifications you would need something like a hyper spectral
[13:07] sensor to differentiate those additionally in tropical regions it may be difficult to obtain cloud-free images for your analysis
[13:18] and optical data does not penetrate clouds smoke or forest canopy we'll talk about this a little later as
[13:24] well well so it's really important to be aware of these limitations and and consider this when using optical or
[13:34] radar data individually or side by side for your types of classification so now that we've discussed optical data and land cover
[13:47] classification classification a little bit let's now compare optical and radar data force monitoring using remote sensing is
[14:00] an important aspect of many international and regional to protect forest resources such as the framework convention of
[14:09] climate change reducing emissions from deforestation or forest degradation also known as red plus tracking deforestation rates on an
[14:20] annual basis and developing early warning systems of forest loss often from illegal activity is really critical to these
[14:31] optical datasets have long been the primary data used for this type of monitoring monitoring yet sar data has now become operational
[14:40] and offers unique advantages one of these advantages is the ability to observe the surface of the earth regardless of whether it is
[14:50] day or night and almost during almost any type of weather condition condition the latter is particularly useful for
[14:58] tropical countries which tend to have continuous cloud cover and very limited availability of optical data so as we previously discussed optical
[15:11] image images obtain data in the visible and infrared portions of the electromagnetic spectrum as you can see in this figure here
[15:23] while radar data collect is collected at much larger wavelengths in the microwave portion of the spectrum that you can
[15:29] also see in this image because optical sensors mostly collect data in the visible portion and only obtain passive reflected energy
[15:40] they really only function in the daytime there are some exceptions for this for nasa data like the thermal bands of the modis and
[15:51] veer sensors that can be used to detect nighttime wildfires but this is generally the case for optical sensors
[16:00] microwaves or radar data on the other hand can penetrate clouds and vegetation can data can be collected at any time
[16:11] the main difference between optical and radar data for land cover mapping is that optical is sensitive to the
[16:18] spectral properties of the vegetation and soil while radar is sensitive to the structure and the moisture content of
[16:26] the land surface radar is essentially sensitive to the bulk of the vegetation or biomass and the geometry and moisture content of
[16:36] the vegetation and soil thus the information provided by radar is different than that provided by optical sensors
[16:46] with optical you can get things like the normalized difference vegetation index or the ndvi or the enhanced vegetation index or evi
[16:56] as an indicator of vegetation health using using multiple bands and calculating a ratio well with radar you cannot
[17:07] and another difference is that optical data are available from visible to infrared wavelengths several bands of data which can offer
[17:16] different information on land cover characteristics based on those spectral reflectance properties that we discussed earlier radar on the other hand usually consists
[17:28] of one to two bands of data and at most four bands as a last point optical sensors only see
[17:36] surface tops because the canopy blocks whatever whatever is underneath this limits characterizing land cover unless the characteristics of the top of
[17:45] the canopy are highly correlated with what is underneath with radar the signal can penetrate through the canopy depending on the
[17:55] wavelength wavelength and provide information on the vegetation and soil below so here we have a list of the advantages
[18:06] and disadvantages of radar remote sensing sensing two of the greatest advantages of radar over optical is that since radar is
[18:15] active active meaning that it has its own illumination it can observe the surface of the earth during either day or night conditions
[18:24] another great advantage is that radar observations can be done almost under almost any type of weather condition
[18:31] like we mentioned previously making radar really useful for regions that are consistently cloud covered like the tropics
[18:42] also the radar signal can penetrate through the vegetation canopy while optical only sees the very top in addition with radar remote sensing
[18:52] there are minimal to no atmospheric effects or corrections needed whereas the optical data are affected by the atmosphere and need to
[19:02] be corrected for that finally radar is very sensitive to the moisture properties of the surface and to the structure
[19:12] whereas the optical is only sensitive to those spectral characteristics one of the greatest issues with radar data is that sometimes it's difficult to
[19:23] interpret interpret also radar images are characterized by speckle speckle which is a salt and pepper effect that
[19:31] makes it difficult to interpret the image image however there are ways to address this through filtering as erica talked about during our last
[19:41] session session finally the presence of topography introduces distortions in the radar which need to be accounted for
[19:50] and as a final comment historic sar images tend to have low temporal repeat on the order of 40 plus days
[20:00] so that means that it's imaging the same place on earth every 40 days or longer so so make that makes the availability of a
[20:10] time series of data scarce however this is changing with new satellites and sensors such as sentinel 1 which has a 12-day repeat time
[20:24] given these attributes of radar data there are a number of applications for using radar for land cover mapping and
[20:30] monitoring monitoring and these include mapping forests wetlands biomass monitoring disturbance such as fires or selective logging or monitoring changes such as
[20:43] deforestation and reforestation there are added advantages of utilizing these unique features of both optical and radar data to
[20:56] improve upon our land cover classification and that's what we'll be doing today with our exercise using both data sets can provide more
[21:06] detailed characterization of land cover changes changes for example optical data can be used to identify broad classes of land cover or change
[21:18] and then radar can be used to identify the attributes of those classes like surface roughness or soil moisture
[21:27] this can be especially useful for agriculture agriculture forest disturbance and land degradation here vegetation health indices such as
[21:38] the ndvi we mentioned earlier can be used in conjunction with plat plant structure and volume data available from the radar
[21:49] so these are all things to keep in mind when conducting a land cover classification and monitoring change in
[21:55] your region now i'll hand it over to my colleague erica potis who will be walking you through our google earth engine land
[22:04] cover classification exercise so over to you erica great thank you very much amber so let's get started with this demo
[22:16] and we are going to be focusing in the same area as the previous demo the time series demo this is an area in brazil in
[22:25] the state of rondonia and let's just start out by visualizing the sentinel one data so what you do here
[22:41] is you go up to the the box up here and you type in sentinel one and and you click on it and it'll tell you all
[22:55] of the details of the sentinel sar data that's on google earth engine the entire database so there's a description
[23:03] talks about the bands the different polarizations resolutions image prop properties terms of use so what's important here
[23:14] is that the the sentinel one images that are on google earth engine they are image analysis they're analysis ready these images so
[23:29] they have been processed already and there's been a thermal noise removal that has been applied to them
[23:37] radiometric calibration and terrain correction so the only thing that needs to be done to these images is to apply a speckle
[23:46] filter filter one thing to note is that the values are in decibels so that means it's a log
[23:55] 10 value all right so that's very important and to remember that the values are already in decibels
[24:04] okay okay and so the optical images that we're going to use are from landsat 8. so if you want to learn more about the
[24:14] the metadata and characteristics of that data set just type in landsat 8 up here click on the search window oops
[24:25] landsat 8 click on the search window and there are a number of different landsat 8 images or data sets
[24:40] and the one we want to select is the is this one the landsat 8 surface reflectance tier 1
[24:52] okay so again again there's all sorts of information about the data set and and bands bands and image properties
[25:07] okay so let's get started then so now it's we talked about the sentinel one data set that we'll be using and we've talked
[25:16] about the landsat data eight data set that we will be using the first thing we want to do is
[25:24] identify our area of interest so so what we want to do is we want to go here
[25:37] we select the draw align icon on the top left select that and then let's our area of interest is more or less
[25:51] it doesn't have to be exact what you draw uh uh is more or less this area and then what you'll do is
[26:02] let's rename that because the the the default name i just created a new one i didn't mean to do that so let's go
[26:11] ahead and delete it and then the one that that i just created the default name is geometry so let's call it roi or region
[26:19] of interest okay so that's our area of interest and then the next thing we do is we filter
[26:32] the sentinel1 data sets database okay or bv images so let's just copy this code and we paste it up here
[26:50] okay so what this does is we are querying querying the the sentinel one database on google earth engine and this
[26:59] is the name of that database okay so this is here's we're querying it and and we are filtering according to instrument
[27:09] mode so the images that we're filtering for are iw which is interferometric white swath and those are
[27:16] the images we want to use because that's those are the acquisitions the primary acquisitions over land and then we want to filter for bb
[27:27] polarization polarization descending pass 10 meter resolution we want to filter according to the area that we just defined the roi
[27:39] and select vv and then we want to print here the images that fall within our area of interest okay
[27:50] and then we go back and we want to repeat the same thing but for vh for the vh polarization so it's the same
[28:02] code code you come back and we paste it and here we are filtering the exact same thing except to vh
[28:12] all right then the next thing we do is is we will let's make sure you save your code
[28:24] and then we run it and what we get here is going to be this is telling us that over this region
[28:41] of interest within the entire data sentinel one database on google earth engine there's 631 vv images and
[28:51] and 627 627 ph ph all right so now what we want to do is we don't want to work with that entire
[28:59] database so we filter it to a certain date date by a date range so so we copy this code
[29:12] and and paste it here so now what we're doing is we're taking all of those images that fall within our
[29:22] region of interest or somewhere within our region of interest and we filter that by date and and in this case we're setting the date
[29:32] to be between between august first first 2019 to august 10 2019 so we're doing that filtering by
[29:42] date for both vv and vh so the next thing we do is we we add the images to
[30:02] layers to the layers bar okay in order to be able to visualize the images so let's go let's do this
[30:16] okay so what we're doing here is we're saying all right whatever was was whatever image coverage for
[30:27] the bv polarization for the date specified here add that to the layers bar and add the vh coverage as well for that
[30:38] specific specific date range okay okay and so let's just save and then run so if you go to your layers bar up here
[30:53] on the top right of your map and you click on sar vv you will you will have the image displayed
[31:05] and you can see that there are two images at least within this time frame you can clearly see here
[31:21] and then let's take a look at bh okay okay now in order to what we've done here is
[31:33] we've we've we've indicated how we want that image displayed the stretch of the values but you can change that so if you go to
[31:43] you click here on the cog wheel you can change that that that that's that's that that value the stretch of the values
[31:54] so we say 27 instead of 25 it's it's not as dark there's a larger range to which
[32:06] the image display the values in the image image displayed are stretched all right so the next thing we do
[32:18] we've got our sentinel one images identified the next thing we do is we work now with the optical images and bringing those
[32:28] now the first thing we want to do is to create a mask mask for the areas where there's
[32:38] shadow shadow and where there are clouds okay so let's just copy this code and and paste it
[32:58] so the landsat 8 images they have a quality band that identifies where there's cloud where there are clouds and where there's
[33:12] shadow due to the clouds so basically what we're doing here is we are are creating a mask using those two
[33:22] quality flags clouds and and shadows and then we we extract the images from the landsat 8 database okay
[33:46] so the landsat 8 collection this is what it's called so we're pouring that collection for the this time period which is the
[33:55] same as the sentinel one and and we are acquiring it for images that fall within our area of
[34:05] interest interest and we're applying this mask that that we've created right with the quality flags flags and then we're printing here on the
[34:17] console the number of images that were identified for our area of interest okay so let's just save
[34:30] and let's run we have if you click here it indicates that there are two images for for the area identified
[34:49] okay so the other thing we want to do is we want to calculate ndvi because we're going to use this
[34:55] as an information layer to inform the classifier all right so what we do is just copy this
[35:05] code and then paste it so what we're doing here is since there are two images over our area of interest
[35:14] we're calculating the mean and and creating one image called comp and then ndvi is being calculated from
[35:24] that that comp image that we just identified so bands 5 and band four and then we're creating a composite
[35:33] image that has the original bands in the landsat 8 image and it's got the ndvi image as well
[35:43] so the next thing we want to do is we want to add these images to the layer
[35:49] bar bar and what we do is we copy this go back and then paste that code and what this does is again it's adding
[36:01] this composite image into the layer bar and what we're doing is we are just displaying band 4 band 3 band 2. so
[36:12] save save and and let's run this there you go so if you click on the cog wheel and
[36:24] optical optical and you select let's select one band you'll see that you've got all of the landsat
[36:34] bands so it's one bantu one through seven seven and then bands 10 and 11 and then you've got ndvi so if you want
[36:42] to just say view the ndvi image say let's let's specify the range so that's the ndvi image
[37:05] okay okay so now let's go back to our rgb and one thing we can do is just visualize this image
[37:45] and you can overlay the sar image over it it to really kind of see or understand the
[37:52] some of the differences so so let's just zoom in remember the dark areas in the tsar image are areas with very very low
[38:06] vegetation vegetation and and or bare and the higher the back scatter the more vegetation there is in that
[38:17] area so let's just overlay zoom in a little more so you can see all kinds of interesting
[38:39] things here so for example if you take a look at this area you see it's slightly lower
[38:53] backscatter this area in here than this area and you can see that in the optical image there is a slightly darker green
[39:04] tone in that area however however if you take a look at this area for example example it's
[39:16] it's it's it's a slightly lower tone than this area out here but when you overlay the optical image
[39:27] the green tones are are higher okay so it's good to do a visual comparison now remember that this is just these are
[40:00] just bands um um four three and two in the optical all right so the next thing we want to do we've
[40:21] got both of our images sentinel 1 and the landsat 8 load identified and and the next thing we do is we apply a
[40:33] speckle filter to the radar images okay so so we copy that and this is just a an average that we're calculating it's a
[41:06] smoothing filter and then let's copy this to display the filtered images okay okay so so save save and run so what we're doing here is we
[41:23] are adding the the filtered the sar filter images onto the layers bar okay both the bb and the
[41:32] bh so let's let's just bring this up and let's zoom in so you can see the difference
[42:06] okay so let's overlay the unfiltered image so that's the unfiltered image and and this is the filtered image
[42:23] unfiltered unfiltered and filtered right so you see that that speckle has been reduced in the filtered image
[42:33] considerably but you do lose spatial detail and that is just part of the nature of applying a
[42:48] speckle filter unless you do some sort of time series averaging averaging all right so so the next step
[43:03] is we've got our images they're ready now what we need to do is we need to select training data remember we're
[43:14] going to be applying a random force classifier and this is a based on a supervised classification approach so that means
[43:24] we need to identify training areas in our image okay so the way you identify training areas is
[43:34] is the same way you selected that the roi okay so let's just identify a training area let's go through one example here
[43:46] you go to the draw a shape icon on the top left of the map select that and select new layer
[43:56] okay so let's uh train for open water and let's just draw a polygon to identify areas that are characteristic of open
[44:15] water water along this river and it's good to select a couple of polygons it's really not so much about
[44:37] how many polygons you select because you could have a polygon that's a thousand pixels or or a polygon that's
[44:45] eight pixels so it's what you want to do is have a good statistical representation representation or sampling of that class
[44:55] okay so that means you want a couple of hundred pixels at least so just just make sure
[45:02] there and since we are going to be using those same training areas for our optical image let's just make sure that
[45:23] the training areas that are selected overlap with the optical image okay okay so all of the training areas along the
[45:33] river for open water that we've selected are also within the optical image all right so now what we'll do is you go to into
[45:54] geometry imports you click on the cog wheel and let's rename this this is our first class and i will rename it
[46:04] open water and and prefer water to be bright blue so i will change that and under geometry
[46:15] click on that and then select feature collection collection and then select add properties so what you want to do is you want to
[46:24] this is the feature collection called land cover all of the classes that we'll be selecting identify are going to be under the feature
[46:33] collection called land cover and then the value is one so this is our first class so let's just
[46:42] say okay all right so then what i've done has been to identify areas based on the back scatter intensity based on what
[46:56] we know about the backscatter characteristics so we know that areas that are very dark dark are areas where
[47:05] there is little to no vegetation vegetation so the next thing we want to do is we want to
[47:13] train a second class and to do that you go to again go to the draw a polygon option okay and we will
[47:27] identify a new new layer and let's call this second class bare fields fields and just make them red
[47:43] are bare fields again under geometry go to feature collection collection at property so all of the classes that
[47:51] we're identifying they're under the feature collection called land cover this is the second class that we identify so it will be number two class
[48:00] number two okay okay so so let's go and we know from the backscatter characteristics that of radar
[48:12] that the areas that are very dark are areas where there's low very either very low vegetation or the fields are bare
[48:21] so let's pick some of these areas where we see very very low back scatter and so let's
[48:40] there that's our first training our first polygon within their fields let's find another very dark area again make sure that the
[48:52] training classes that you're selecting are also within the optical images because we will use those same training
[49:01] classes for the optical images okay to train the optical classifier so here's another one of those so let's
[49:11] draw another polygon in here here's another one so we have three how about here okay so we identified four polygons here
[49:59] and then you go ahead and define another class so let's click on new layer and the way i've done this example has just
[50:13] been been based on the radar backscatter intensity right so we're starting out with with very dark and we're moving our way up
[50:25] defining different classes depending on the their intensity right so let's just name the next class i'll just call it vegetation
[50:35] one one vegetation one again again feature collection land cover and this is the third class that we're identifying
[50:48] all right so the next thing i do is i'll identify the next class on backscatter values that are slightly
[51:00] higher higher than the previous class so let's say this area here and by the way if you want to see the
[51:15] value of a pixel just go to inspector and and click on inspector up here in the window
[51:22] in the top right and then if you anywhere you click oops oops just make sure you deselect
[51:31] there so anywhere you click there there anywhere you click you will get the values for everything that you
[51:44] have under layers all of your images under layers so in this case we have the vh filtered
[51:50] image image and for that particular pixel that i clicked on minus 21db okay so if you click here over water
[52:00] minus 33 db if we click here here somewhere here minus 23 dv okay okay so so if you want to see the values and get a
[52:18] sense of the the the values of this different areas just use the inspector okay so what i've done it has been to identify
[52:32] uh four different types of vegetation classes with different back scatters so the higher the vegetation training training class the higher the back scatter and
[52:43] the highest back scatter would be forest all right so the next thing that we do is is we've identified the classes
[52:58] then we need to merge the feature collections and to do that copy this code and and we will
[53:12] paste it so we're here in line 69 so we paste it and i'll just deselect it from my code
[53:27] so what we're doing is we're merging we're taking all of the classes that we identified in this case
[53:33] seven classes open water bare fields vegetation one two three four and then forest okay so we're merging that into we're calling
[53:45] it new fc new feature collection all right so then the next step is is to to classify the image so what we'll be
[53:56] doing is we'll be classifying just the sar image first then just the uh the optical image and then we'll be running a
[54:06] classification with both of them so let's run the first classification on the sar the sentinel saw image
[54:15] and the first thing we do is we create the the training data from sentinel one so let's just copy this code and then paste
[54:26] it i've got it here already so i'll just deselect and so what this is doing is this is
[54:41] saying okay create create the training statistics based on these classes um um uh overlaid on the sentinel sar images
[54:57] the the filtered sar images vh and vv okay all right so the next thing we do is
[55:08] we've created our training statistics from the sar data and and we take those statistics those training data sets
[55:22] and we uh basically train the random force classifier with those training data sets all right so i'll just deselect
[55:45] and basically we are calling the random forest classifier up here that's what we're doing so we're training we're
[55:54] creating a training data set that features the training sets the training classes and and we we are using the land cover feature
[56:09] collection collection and the vh and vv bands bands okay and then once we train that classifier then we
[56:21] run the classifier and this is just a one-line piece of code here you copy this this and you paste it
[56:29] will deselect it in my case and so what we're doing is we're running this classifier on bands which is we're
[56:39] using both bb and bh and and we are calling the classification classified okay so that's our uh
[56:50] classification image so the next thing we want to do is we want to then display those results the classification results
[57:01] and let's just deselect this so this is all in the powerpoint um you copy this is the code
[57:09] and so what this code is doing is it's adding that that image with the classification results it's called classified
[57:18] to the layers as a band in the layers bar okay so we've got the classified image and
[57:24] basically we're assigning a color to each of the classes that we identified identified okay okay so let's save this and we run it
[57:40] so this is the result this is the classified backscatter image pv and vh and and if you go to the layers bar
[57:58] it's sar classification and let's just zoom in a little bit so if we zoom in we can see the results
[58:07] and remember so these are the different classes barefields barefields in red and then increasing increasing level of vegetation with these different
[58:19] vegetation classes that i defined and then forest has the highest level of backscatter and if you zoom in there are some issues
[58:37] there's still some effect of this speckle okay so let's uh and you can then overlay the sar vh image to
[59:01] just to visually see the patterns that it picked up okay so one thing that we want to do
[59:11] as with any classification result you want to assess the accuracy so the next thing we do is
[59:19] we we create a compute we're going to create a confusion matrix and we're going to also calculate the
[59:29] the accuracy of the results all right so we copy and paste that code and so let's just
[59:40] put it here and so what this is doing is it is calculating the generating a confusion matrix
[59:57] based on the the the classifier right so the training classes that we selected and it's generating that the accuracy results
[1:00:09] based on the training classes now this is not a true accuracy result because we're actually running the accuracy
[1:00:23] calculations calculations based on the training data in order to get a true accuracy results you need to
[1:00:31] select a new set of um um polygons and those are your validation areas areas okay so so we what we're doing here is we're
[1:00:43] just running it on the the training areas okay but this is just to show you how you
[1:00:53] can generate a confusion matrix and your accuracy results so here on the console on the right there is a window
[1:01:03] that has your your error matrix and just click on it to open it and here we have our seven
[1:01:13] classes that we trained uh uh so so disregard the the zero and and the way you read this is so for the
[1:01:24] first class and that was open water there there we identified 8668 pixels as training classes and they
[1:01:33] were all classified correctly okay so in terms of the overall accuracy the overall accuracy is 93.5 now that's only based on the training
[1:01:48] data so it's not really the true accuracy accuracy to again to determine the true accuracy you need to pick an independent set
[1:01:57] of of pixels all right so the next thing we do is we apply the classification to the landsat image
[1:02:12] only only so in order to run the classifier on the landsat image the first thing we need to
[1:02:18] do is we need to take those polygons those training polygons that we identified we need to overlay them on the landsat
[1:02:28] image image all right so so what we do is is you copy this code and paste it on the window and here i've
[1:02:39] deselected it already so what we're saying is we want to overlay it and use these these bands bands one through seven as well as
[1:02:48] ndvi ndvi to generate our training class statistics right so so so we're calling this training l8 for
[1:03:00] landsat 8 okay so we are defining the bands here and and um this is the the new f the the new feature collection
[1:03:13] that's called land color right right so then we go ahead and we train the classifier it's the same steps that we
[1:03:21] applied for the sar image classification so we train the classifier again it's random forest the features are the training the
[1:03:33] landsat 8 based on the bands that we've identified here and you can change that you can experiment all you want here and just
[1:03:42] use a handful of bands or you can add other bands too so for example you can also add
[1:03:50] a dm if you like okay so in this case we we're just using bands one two seven as well as ndvi
[1:03:58] and then we run the classification okay okay so the new classification the landsat classification is called classified l8
[1:04:09] and it's being run on the bands identified up here and the training uh uh from that we had already
[1:04:20] i the training classes that we had identified and we had extracted those statistics over these bands that we identify here
[1:04:30] okay so we run that and we display the new results the classification results in the layers band in the layers bar
[1:04:43] so in addition let's also go ahead and calculate that confusion matrix and the accuracy of our classification
[1:04:52] so it's the same code as what was used for the sarc classification here i've just deselected it and we are specifying
[1:04:59] that this is based on the landsat 8 classification so so let's save save and we run it
[1:05:48] okay so let's deselect the sar classification select the optical classification and zoom in select optical so you will notice that this is
[1:06:12] this is cleaner when you compare it to the sar based classification you don't have the the the speckle
[1:06:23] effect even though with the sar we did apply a filter it is a generally a cleaner classification
[1:06:33] and then you can compare the results by overlaying overlaying the sar classification to it and remember if you've forgotten that
[1:06:44] the color interpretation it's right here under geometry imports you can see the different colors assigned to the different
[1:06:52] vegetation classes okay okay so so that's the tsar classification that's the optical classification now if you let's take a look at the
[1:07:20] error matrix for landsat 8 you can understand where there's been confusion this is again based on the training classes
[1:07:34] and then the overall accuracy is 97.5 percent all right so the last part here is we've ran a classification of just the sar
[1:07:58] just the optical now we're running the random force classifier on on both the optical and the sar
[1:08:08] so to do that again again let's go back to our powerpoint so so what we need to do now is overlay our
[1:08:27] training points on both the optical and the sar data sets and so let's just you copy that code
[1:08:36] i've got it here already so i'm just going to deselect it and what i'm saying here is
[1:08:49] now we are going to be using the a landsat image we're using bands one through seven as
[1:09:00] well as ndvi in the landsat image and we're using the sar dv vh filtered images okay so the next thing we do is we train that
[1:09:14] classifier so we train the random force classifier and we run the classification so now here i'm calling the classification
[1:09:36] it's called classified both and let's display the results and create a confusion matrix so make sure you save
[1:09:59] and you run all right so in the layers bar you'll have our the new image the new classified
[1:10:30] image optical star classification so let's just select that and what we've done i forgot to mention one additional thing that we've done
[1:10:40] here has been to clip the classification display to clip it to the area that overlaps between both images
[1:10:54] so we've created a mask identifying the common areas the common overlap areas between the tsar and the landsat image
[1:11:04] and and the classification result of both of those are over that clip area so you can then compare both of them by
[1:11:45] overlaying the optical optical classification on the optical sar classification and there are some some differences and then you can also
[1:12:01] overlay the sar classification so that's the sar and that's the optical sore so that's the sarc classification
[1:12:20] the optical sar classification and then if you want to assess your results you've got the error matrix
[1:12:36] matrix printed out here as well as the the accuracy so what this is indicating is that the
[1:12:48] accuracy when you use both images is slightly higher than just using the optical image so that concludes our exercise
[1:13:05] and and in in review uh uh i've shown you here how to load sentinel images landsat images how
[1:13:15] to run a classification a supervised classification using random forest on each image how to assess its accuracy
[1:13:24] even though as you know you actually have to pick independent validation areas to have a correct assessment of the accuracy of your
[1:13:35] classification classification and then i showed you how to run random forest using both the landsat and the saw image
[1:13:46] so that concludes this demo and now we will begin our q a session before we go into the q a i just want to
[1:13:57] want to remind you that the next session is next tuesday the same time and it will be on mangrove mapping using
[1:14:06] sar sar and then next thursday we'll have our final session that will be on forced height estimation
[1:14:13] and that one will be by a guest lecturer professor paul cicada from university of massachusetts at amherst
[1:14:25] so please go ahead and type in your questions into the chat box i will be answering as many questions as
[1:14:33] i can and all questions and answers will be posted on the rsa training website following the conclusion of the course
[1:14:47] great so what we've done is we've compiled the questions that you've been already typing in the check
[1:14:55] and we put them in this google doc that you see on the screen so we'll be going through them a lot of
[1:15:02] really great questions before i get to the questions i'd like to to give a quick thank you to
[1:15:11] zachary benston gina kova and john dilger for their help with the code in google earth engine and i'd also like to make an
[1:15:22] announcement that the link to the code is in the pdf presentation so we've updated the code from last week sorry from last
[1:15:32] tuesday as well and you will see the link to that code as well so go ahead and download the new version of
[1:15:43] the presentation the time series presentation if you want access to the to the code to the demo that we went
[1:15:50] through through all right so let's get started with with the questions is sar imagery good for monitoring
[1:16:02] forest sanitation okay that's an interesting question i'm not sure what is meant by forest sanitation sanitation specifically
[1:16:17] um perhaps this person can send that clarification in the chat box okay okay question number two i can't wait for
[1:16:27] google earth engine however my google earth engine login details won't work can you guys help with google earth
[1:16:34] engine login yeah sorry we cannot help with that i mean that is independent of us uh but you can check the google earth
[1:16:43] engine help webpage and see what sort of assistance you can get usually the login is approved within 24 hours
[1:16:54] question number three will sentinel toolbox load on 32-bit windows machines that's a good question i don't have a
[1:17:01] windows machine so uh and much less a 32-bit one i i know uh what you need to do is go to the page
[1:17:09] where you can download the sentinel toolbox and it will tell you what the the computer requirements uh to run the software
[1:17:22] question four as you mentioned supervised and unsupervised classification algorithm how about hybrid approach in comparison with the
[1:17:30] two mentioned methods could it yield a better results yeah possibly especially in a case like this for example i uh i
[1:17:39] didn't have a validation data or training data so if you don't have good ground ground data reference data
[1:17:49] what you can do is uh you can generate say a first cut cut of of the different
[1:17:58] clusters say in in your image based on a backscatter or reflectance so you can do that through an
[1:18:06] unsupervised classification approach and then use that to train a a supervised supervised classifier classifier okay so you take those those clusters
[1:18:19] however many classes you define in your unsupervised classification and then you can use those to inform the
[1:18:28] the the training classes for your supervised classification okay and and dr mccollum has also added to this
[1:18:41] question so there are also techniques that address spatial dependence such as the impact of topography on land cover types
[1:18:54] and you can do this by adding something like a dm to your classification algorithm and and and she's included a link here to a
[1:19:06] hybrid approach okay so we move on to the next question okay so the question is which one method
[1:19:36] is recommended in the area of atmospheric element classification into homogeneous regions such as rainfall regions hmm yeah i don't this
[1:19:57] question question i don't understand either atmospheric elements classification maybe this person can clarify i mean we're looking
[1:20:06] at land cover here but maybe if you want to identify land cover according to different regional patterns right in
[1:20:29] say rainfall you might want to look at areas that are greener greener or areas that have higher ndvi or higher
[1:20:37] vegetation can forest question number six can forest monitoring be done with dual pull i'm finding that quad pole is great for
[1:20:50] forest cover classification boards but is more temporarily limited than doable that is correct i mean that's what we
[1:20:58] did here i think this person might have typed in the question before the demo but as you saw we've done this
[1:21:05] classification classification using vv and vh do we need to worry about topographic corrections for radar yes definitely
[1:21:17] but but in the case of the radar imagery that's on the google earth engine it's been already
[1:21:25] corrected for topography so there's a terrain correction that has been applied to the imagery if you're processing that your data so
[1:21:35] say for example you download the data through the alaska satellite facility and you need to run the processing steps on the imagery
[1:21:45] then one of the things you need to do is you need to apply a terrain correction to correct for topography
[1:21:54] and you would do this using the sentinel toolbox question eight can we import training sites to google earth engine
[1:22:08] for land classification collected by gps from the field if so how do we import the training sites
[1:22:17] i i i believe you can there are different ways of importing your own imagery and data sets and
[1:22:24] vector files into google earth engine i don't specifically i've never done this so i don't have any code with me but if you
[1:22:38] send me an email i'd be happy to probably point you somewhere online where there's a code to do this
[1:22:51] and you might want to also do a search for for google earth engine forms i'm sure there
[1:22:58] are many forums online where people discuss discuss what sort of things you can do with google earth engine or
[1:23:07] what sort of roadblocks they've been running into and people share their experience so those are always really good
[1:23:14] resources resources question number nine one of the limitations of optical is the inability of penetrating smoke and cloud
[1:23:23] but we can't we eliminate this limitation by taking landsat images taken in the dry season yeah absolutely you can
[1:23:32] but in some places believe it or not uh you don't even get good imagery in the or clear images in the dry season
[1:23:42] and so some areas are limited remember the the um um if you take into account the repeat pass
[1:23:52] of landsat which is about every two weeks um um yeah some areas are are just not clear and and so that's where
[1:24:03] radar can become very very useful now if you're looking at dynamic processes it's even more useful to have
[1:24:11] radar so if say you want to look at like recent recent deforestation or or something that occurs in a relatively
[1:24:21] short time frame then radar is is extremely useful because sometimes to have a clear optical image it might take months if
[1:24:29] even okay okay and and another example is if you're looking at like monitoring agriculture you um you
[1:24:48] need to take into account the seasonality and think about the dates when the imagery is obtained all right
[1:24:56] so so let's go on to the next question it's been stated that radar can penetrate through the soil yes it has
[1:25:04] been stated so can radar help us know different types of soil if so how hmm yeah that um that it it cannot it's
[1:25:17] it's such a fine difference it just don't the the radar signal just does not have that level of sensitivity
[1:25:25] so radar can tell you the amount of water in the soil even that is uh uh is not straightforward but the different
[1:25:35] types of soil that's that's tough you need some uh you need to inform a model for that
[1:25:46] okay question 11. in the slide 21 could you explain a little more when radar which is sensitive to structure and the
[1:25:56] topographic difference cause distortions in the data i have doubt because the structure can be natural comes from the topography so
[1:26:07] both ideas can exchange and cause confusion okay so i think what this person means is when you have topography in areas of
[1:26:23] topography you might have say high back scatter and these areas can be confused sometimes with things like inundated
[1:26:34] vegetation so i think that's what this person is referring to okay question number 12 why not sentinel 2 and sentinel 1 what
[1:27:02] motivates the use of landsat 8 knowing the difference in both temporal and spatial resolution yeah that's a
[1:27:10] great point and sentinel 2 is really a great option as well for optical data and could be used in a
[1:27:17] similar manner to the way we we use the landsat 8 what we just chose landsat 8 for this
[1:27:23] example you can easily the idea behind this code is for you to learn how to do the process right so the idea here is
[1:27:31] for you to be able to take this code and modify it to your specific needs to your
[1:27:36] specific region of interest time frame etc just replace landsat 8 with sentinel 2 and run it and explore
[1:27:44] too here we used you saw all of the bands that we defined using landsat 8 you can just
[1:27:51] use a handful of those bands you can pull in a dm if you like there are many
[1:27:56] things that you can do explore but i think you have the tools here to start exploring you know how to
[1:28:03] composite an image so you create one image that has multiple images in it you can do many things now
[1:28:12] okay so so things to consider obviously when you're choosing the imagery is the time period available of available data the
[1:28:28] spatial and spectral resolution and the repeat time of the sensor so when you go back in time let's
[1:28:37] landsat landsat is very useful because it goes way back it goes back decades why is descending past important what is
[1:28:49] the purpose of filtering by descending orbital paths that's a good question there tend to be more images in the
[1:28:56] descending pass so that was really kind of trial and error there were more images in the descending pass
[1:29:02] for the for the area for that area but but if you're not finding images in the descending pass do a filter for the
[1:29:10] ascending and see what's there one thing to to always keep in mind do not mix them if you're doing an analysis a
[1:29:17] classification time series whatever you're doing do not mix descending and ascending ascending keep them separate so either work with
[1:29:25] descending or work with ascending radar is highly affected by topography hence is radar data applicable to make lancome recovery
[1:29:39] in areas with undulating topographies you might have some errors in areas especially with complex topography undulating topography
[1:29:56] your land cover is going to look a little different so you need to train accordingly a forest in an area where
[1:30:02] you have topography might look different than a forest and a flat area okay so you need to train accordingly
[1:30:11] question 15. if you're in an area where terrain creates a shadow how would you automatically automatically delineate shadow and sar you can
[1:30:20] identify it in the landsat 8 but wondering if you could do that in sar yeah that's a great question you can do
[1:30:27] that using a dm so you can use a dm basically to based on areas where you have complex
[1:30:44] topography and based on areas where it's a very very low back scatter at the at the noise floor
[1:30:52] then you can just mask those areas out as shadow question 16 are there any radar data sets or systems
[1:31:01] available for the 1980s or 1990s to create a time series from 1980s until now now yes that's another really great question
[1:31:13] i invite you to go to the alaska satellite facility and and they have a a a number of different sar data sets
[1:31:25] and and some of them you can download for free there's one over select areas okay so there's one
[1:31:35] that is called jers one that was a japanese l-band sar sensor that flew in the 90s in space
[1:31:47] and and i i believe this data is available over select areas okay and you might want to explore
[1:31:56] there's also ers data that's data from a um c-band sensor from the european space agency that flew in the 90s and 2000s
[1:32:08] and there is select ers data over certain parts of the world that you can download for free so just go and
[1:32:18] explore explore you can draw your area of interest and explore what sort of radar data is available over the time period that
[1:32:27] you're interested in while question 17 while setting the dates for filtering do we know to first check the availability of data
[1:32:39] for the dates we select or is data available at any dates in all areas yeah so remember sentinel 1 has a
[1:32:48] 12 day repeat pass so so setting the dates for filtering is a bit of a trial and error thing if you set
[1:32:58] one date um you know you've got a couple of days there um almost two weeks where you don't have coverage
[1:33:05] right so uh you you want to set a a range of dates to see what sort of coverage you
[1:33:11] have well you might want to start with three days maybe that there's coverage during those three days
[1:33:18] days or so at some point during those three days days so yeah this is a trial and error just
[1:33:25] setting those dates okay question 18 can we be made a supervised classification with an average image from a temporal interval
[1:33:40] yes actually that's another way so you saw that with the applying the speckle filter you have some level of spatial
[1:33:51] resolution degradation and that's going to depend on the size of the speckle filter window now now another way to do it is you can just do
[1:34:02] a a a if you have a time series you can do a time series average and that's gonna
[1:34:09] reduce your speckle now if you have things changing in your image though you know during this time
[1:34:16] series then i i you're going to lose it's going to get averaged out so if you have images where you've got an
[1:34:23] increase in vegetation or loss and vegetation if you average everything out you're going to lose some of that
[1:34:29] information okay question 19 how can we add another dm of better resolution than srtm so what i suggest is go into google
[1:34:41] earth engine up in that that search window on the top and just do a search for dm and see what's
[1:34:47] available there might be a dm that's available available for your specific area that's not global so just search and there are ways to
[1:34:59] upload your own dm if you have one onto google earth engine question question 20. 20. can we mask the vector file here in
[1:35:17] google earth engine to limit our analysis with precise roi boundaries yes i i believe you can i um
[1:35:35] i think i know what you're asking uh i think so this might be similar to what we did in the time series demo
[1:35:44] where we created an extra mask and calculated statistics within that area or can you create a vector file i and i or
[1:36:12] you could upload a vector file um to google earth engine question 21 is there literature you can
[1:36:24] connect this with about the smoothing filter and how it changes the data how does the loss of spatial detail affect
[1:36:31] your study um yeah there are there there is um literature out there on different speckle filters and there are a number of different ones
[1:36:46] uh uh here is uh we we've put in two references here uh one is on modis data but the second
[1:37:02] one i i uh uh you can explore both of these uh you can also send me an email and i
[1:37:12] can send you some references on specific smoothing filters but you can see in the example we we did when you see
[1:37:21] them side by side there is spatial resolution lost again you can explore running your classification classification just on the unspeckled
[1:37:32] sar images and see how that translates into your final classification what is the best polarization for agriculture monitoring
[1:37:46] yeah so this depends on the type of crop etc we had a great guest lecture in one of our rsa webinars and she
[1:37:59] talked about this the different polarizations for different types of crops crops and so we invite you to explore
[1:38:07] that webinar it's called exploiting star to monitor agriculture and that was done back in last year 2019.
[1:38:19] question 23 is there a minimum size for a training polygon what if the training samples are known
[1:38:27] how can you bring them in so yeah there is a minimum size in the sense that you don't want to select a
[1:38:34] polygon that has 2 pixels or 4 pixels but but you want to have have select one you want to have a training area
[1:38:51] that has at least 10 pixels okay 10 or 20 pixels if your areas are that small then you want to
[1:39:01] select several polygons because you want to have overall for each training area a couple of hundred pixels remember you
[1:39:08] want each training area or training class to be well characterized statistically okay question 24 great question how can you
[1:39:33] be sure that those dark areas are bare soil and not for example water yes that is a common common source of
[1:39:41] confusion with radar and and uh uh that's where optical comes in you overlay the optical image and it's clear
[1:39:50] it'll be um clear clearer or much clearer whether that is a bare soil or whether it's water
[1:40:03] especially in this case where we're not using ground reference data so so we rely on some other source to really
[1:40:16] identify these different areas question 25 i mean how much training data is sufficient are there any rules does it
[1:40:29] depend on the application uh as i said i don't you want a good statistical representation of each training class so
[1:40:43] at least i would say 200 300 pixels for each class if not more more okay okay can we estimate above ground tree
[1:40:55] biomass using google earth engine sar data yeah this is another great question there are algorithms out there
[1:41:08] on how to estimate above ground tree biomass biomass it's not straightforward in the sense that it's not
[1:41:16] um um it's not an ndvi equation for example it is there is a certain level of complexity to calculate or estimate
[1:41:26] above ground biomass there is a tutorial out there however i'm not sure if if if this has been done with google earth
[1:41:38] engine engine or if it can be done with google earth engine pixel values question 27 pixel values
[1:41:47] for optical imagery are reflectance which value is displayed in radar images in db so the values in the radar images are
[1:41:59] backscatter backscatter which are displayed in decibel so they're power units question 28 what are can be the criteria to decide
[1:42:15] which polarization to use for the classification when our focus is on vegetation choosing one over the other
[1:42:20] will affect the accuracy of the classification yeah that's a good question so listen hv the cross pole is better to detect
[1:42:29] vegetation okay the presence of vegetation tends to be better and and um um choosing one over the other you know the
[1:42:38] nice thing about using random forest is that uh uh you don't run into this problem of degrading your results
[1:42:53] whenever you have a layer uh an image that maybe is not helping that much okay that's the nice thing about random force
[1:43:02] if you're using something like maximum likelihood if you have an image that's adding noise or that's not helping very much
[1:43:10] that you're going to see that in the final classification and you want to remove that image with
[1:43:16] random force that's not such a big issue the problem with random force might be if you have many images that are highly
[1:43:24] correlated correlated then you kind of want to reduce your number of images that especially the ones that are highly
[1:43:33] correlated where the information content is very similar so what you need to do or what you should do
[1:43:41] is explore right so run this classification with one one polarization polarization uh versus the other and see what the
[1:43:51] results are run it with both polarizations polarizations and see what the results are and if they vary significantly
[1:44:03] okay question 21 29 why don't you specify random force parameters like the number of trees brag fraction etc
[1:44:11] yeah good point there are many parameters that you can specify in random forest and and this is just to get you started and for
[1:44:22] you to have the code uh you can play around with these parameters and see see how well
[1:44:32] uh or what sort of results you get in your classification but this is certainly something that you should all
[1:44:38] be aware of is that there are options that you can set for for for this classifier that might influence
[1:44:46] your classification results question 30 as you select pixels for a training set do you want to pick ones
[1:44:56] that appear to be pure this is they are visually homogeneous or you know location is water forest etc
[1:45:03] but display some spectral variation like water water uh with a smooth surface glint that it is better to put all types of water into
[1:45:14] a single training class yes okay i i like to have try to have my classes relatively relatively pure obviously there is some homogeneity
[1:45:27] in the class if you have say water that has roughness on it that has a lot of roughness on it
[1:45:36] um you might want to just call it rough water as a just a different training class call it
[1:45:43] rough water and then as this person mentions then you can combine them so i personally uh like to
[1:46:03] uh uh just select different ones so even if it's water like smooth water or calm water versus
[1:46:12] rough water and then you can always combine the classes in your final classification okay question 31 can the same code be
[1:46:26] run for high resolution satellite data such as lisiv lisiv and does google earth engine allow to access lists
[1:46:35] oh lissa four um yeah i'm not so i'm not familiar with this data set you you uh you'll want to
[1:46:43] look and do a search in google earth engine on top see if this data set is already
[1:46:49] housed within google earth engine you can adapt this code for any other data set set okay what you need to do is just
[1:46:57] redefine your area of interest your dates dates your training classes and the data sets that you're using
[1:47:12] is there any book available where i can find different spectral reflection backscatter radiation from different features available on earth
[1:47:22] um i can't speak for spectral reflection backscatter though um i i'm not sure if there's a book
[1:47:39] available the thing about backscatter is your same class might vary yeah the the the back scatter of a forest
[1:47:49] might vary in different parts of the world okay and it depends on the structure of the forest on the vegetation water content
[1:47:58] depends on many things uh whether it's frozen or not so so if you want just general values the
[1:48:11] range might be quite broad question 33 how can we do canopy moisture level using sar data yeah there are some
[1:48:31] studies that people are looking at vegetation water content not canopy just vegetation water content content it's it's complex
[1:48:48] but there are some studies out there that are looking at this question 34 can you point me to a method
[1:48:58] to avoid or assess autocorrelation issues between training data and validation i can't think of any but for sure there must be yeah there
[1:49:24] must be many different ways to check how well your training data correlates with your validation data question 35 other than trading each data
[1:49:41] separately separately is it possible to make a fusion of both sentinel 1 and landsat 8 and then apply
[1:49:47] the classification if yes how which polarizations to use and what is the extra information to expect out of
[1:49:54] fusion fusion yeah yeah there are some publications out there very few have tried doing fusion because at that point you're you're
[1:50:08] integrating the information content from from radar and optical so really the two main ways of running a
[1:50:20] classification with both optical and radar are either you use them together right in in a classify each you know
[1:50:29] you feed the classifier with the optical image and then the radar image and you write generator classification
[1:50:36] or another way is you generate a classification from each one and then based on the classification you
[1:50:46] you can generate a new classification based on the unique information content that's present in each of those
[1:50:55] classifications can one run an unsupervised classification in google earth engine i believe you can yes how will you export the classified map
[1:51:13] for further reference and map composition composition great question so there is an export at the end um if
[1:51:21] you you download the pdf the the the pdf has a chart there uh with instructions on how to export
[1:51:32] your image and also when you access the google code in the presentation that google code will have it will include
[1:51:42] an export option at the end question 38 may i be able to import a shapefile with training validation data
[1:51:52] into google earth engine i believe you can yes i've never done it but i believe you can import
[1:51:57] a vector file question 39 can we do object-based classification with sar data yes you can you can do object-based
[1:52:12] classifications cancer data be used as an alternative for lidar for calculating tree high yeah great question that's a really really good
[1:52:26] question question actually the last webinar in this series is going to be focused on calculating forest heights so this is a
[1:52:35] very timely question and that webinar is going to be next thursday thursday and we'll have a guest speaker professor
[1:52:42] paul cicada from university of massachusetts at amherst so so i believe in his presentation he will be
[1:52:50] doing some comparisons with leider to show what the differences are but yes you can use our data as an alternative for lidar
[1:53:02] okay so uh we have a couple of more minutes and i'm gonna pick some questions here from the window directly
[1:53:26] let's see can we use random points instead for training data um so here's the thing anytime you run a
[1:53:51] supervised classification right the better the training data the better your classification results so you want to have your training data
[1:54:00] the ideal thing is to have some sort of reference reference ground data or use some sort of validated product to
[1:54:09] generate your training data as well as your validation data so random points what you can do is just run an
[1:54:18] unsupervised classification and then use that to inform your uh your training any recommended books for learning more
[1:54:34] about random forest i'm not sure about books but there are plenty of articles online about random forest
[1:54:52] is it possible to determine forest fire by this way um um yes so this is a method that's been
[1:55:07] presented here and if you train accordingly you you just need to train to what you're interested in select your
[1:55:16] training classes and and if it's if you're specifically looking at forest fires then then yes if you train
[1:55:27] accordingly you can apply this okay okay how specific can we be in classifying distinct vegetation crops versus biomass
[1:55:53] yeah yeah this is uh this is something that i suggest you look at that webinar on agriculture
[1:56:03] and and you can identify some crops biomass is an estimation and there are some errors obviously in the estimation
[1:56:14] of biomass but there are ways of doing it as i said it's complex i will be including uh some reference
[1:56:24] material of other tutorials and online sources there's an excellent online source called the sar handbook handbook and it's got a series of different
[1:56:34] chapters focused on different topics looking at degradation looking at estimating biomass for example example and there's some hands-on
[1:56:45] examples some tutorials on on how to do these things okay okay this is a good question why only using
[1:57:04] backscatter to select training datas and not optical imagery yeah that's a good question that's just based on
[1:57:12] on uh my familiarity with interpreting uh radar radar and and you can use optical imagery and or you can overlay
[1:57:22] both of them and select the training areas accordingly right ideally you'll use some reference data some some validated as i
[1:57:33] mentioned uh ground reference data does the accuracy vary if we select new polygons for accuracy assessments yeah
[1:57:48] absolutely so remember we're running the accuracy assessments here based on the training data really what you want to do
[1:57:55] is you want to select an independent set of polygons and run the accuracy on those i mean
[1:58:02] that will give you a a good uh a a a much better better characterization of your accuracy so it
[1:58:14] is going to vary it's going to be lower here our accuracies were quite high um but for training data it's it's going
[1:58:21] to be lower here's a question which band has greater penetration through the dense canopy uh it'll be l-band
[1:58:35] so l-band is available from 2006 through 2011. 2011. uh that's uh it's global there's global coverage of l-band data you can download
[1:58:45] those images through the alaska satellite facility are there other any alternatives beside this focal mean filter to reduce sparkle
[1:58:55] and star data available in google earth and yet there are some there are other codes that have been written that apply
[1:59:02] other speckle filters i'd be happy to share those with you if you send an email okay okay [Music]
[1:59:25] is the part of the code used for clipping the sar data to optical data missing from the pdf might very well be
[1:59:32] missing from the pdf so we will update that thank you for making us aware of that if we download sorry image and process
[1:59:50] that arcgis would there be a difference in accuracy or not um um i i'm not sure i understand this question
[2:00:04] you can download the star image and you can run all of this analysis you can download the landsat image you can
[2:00:09] download the sentinel image and then you can do all of this in arcgis arcgis if you use the training data sets and if
[2:00:18] you use the same classifier the accuracy should be the same okay so we're we're up here at the top of the hour
[2:00:37] uh just to okay so we will be getting to your questions the ones that we weren't able
[2:00:47] to answer here because of lack of time we will get to these questions on the google doc and we will post this
[2:00:54] google doc online in a couple of days okay okay uh uh so so thank you thank you all very much for
[2:01:05] your interest for your enthusiasm for all the questions and stay tuned we have two more we have
[2:01:12] mapping mangroves on tuesday same time and then estimating forest height on thursday same time thursday tuesday and thursday of next week
[2:01:25] wishing you all a great day await a great weekend and see you next week and one more thing the homework a lot of you
[2:01:33] have been asking about the homework we will announce the homework at the end of the webinar so at the end of that fourth
[2:01:39] uh webinar uh next thursday we will be announcing the homework there will be one homework only and it will be based on all of the
[2:01:47] material covered and some of the demos stay tuned thank you very much bye-bye
