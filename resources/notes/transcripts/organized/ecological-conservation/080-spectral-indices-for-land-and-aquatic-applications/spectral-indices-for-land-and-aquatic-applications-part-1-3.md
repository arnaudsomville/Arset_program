# Spectral Indices for Land and Aquatic Applications, Part 1/3

`https://www.youtube.com/watch?v=vAtm_rkKrlM` · id 78 · 1:19:07 · module 3 — 080-spectral-indices-for-land-and-aquatic-applications

[00:01] thank you all for joining us for part one of our training series spectral indices for land and Aquatic
[00:07] applications my name is Amber McCullum and I will be joined by my colleagues Britney bury Juan Torres Perez and
[00:14] sativa Cruz throughout the duration of this training series as mentioned we have a fantastic rset training team here for ecological
[00:22] conservation and I wanted to introduce each of us with our photos as well since this is an introductory
[00:30] series and it might be the first time you're hearing about rset or taking an rset training I wanted to briefly
[00:36] highlight our program rset provides accessible relevant and cost-free training on remote sensing satellit sensors methods and tools we offer
[00:45] trainings in each of these thematic areas and have trainings from introductory level to Advanced all of our trainings are freely
[00:53] available and most are provided online to a global audience and remain accessible even after the series has
[00:59] ended Ed some of our more in-depth trainings are provided in person all of our trainings have materials available
[01:06] in Spanish and some even have live Spanish sessions you can find more about our program here on the website
[01:16] listed so now a quick overview of what you can expect in our training series spectral industry indices from
[01:26] multispectral imagery are extensively used globally to monitor landscape Dynamics and this is one of my favorite visualizations from NASA where we can
[01:37] monitor things like the biosphere yearly cycle I like to call this the breathing Earth and what this shows is over the
[01:46] course of the Year vegetation dynamics of ndvi where in the summer the spring and summer you see green up and S and um
[01:56] Green in the Northern Hemisphere and then sence in the fall where the vegetation dies down in the in the
[02:03] winter um and you can also see the Dynamics of the ocean here um with the chlorophyll as
[02:15] well during this training we aim to provide an overview of commonly used spectral indices for aquatic and land
[02:22] applications we will discuss examples of spectral Indy calculations with a diverse set of sensors including lanet Sentinel 2 and the harmonized L Sentinel
[02:33] 2 data sets for each session we will also have demos doing index calculations you using Google Earth
[02:41] engine since this is an introductory training we only have one prerequisite which includes our fundamentals of remote sensing which you can view here
[02:50] or having equivalent experience we hope that you can all achieve these learning objectives through the course of our three-part
[02:58] series with we hope you'll be able to recognize commonly used spectral indices in land and Aquatic environments
[03:05] distinguish between spectral indices to select the best suited for given landscape of interest and compute spectral IND index calculations over
[03:16] appropriate areas of interest and acquire spectral index products from a variety of sources so here we are in part one of
[03:25] the training where we will focus on an overview of what spectral indices are and and we'll highlight the normalized
[03:31] difference vegetation index or ndvi in part two my colleagues Juan and Britney will discuss commonly used spectral indices for aquatic
[03:41] applications and then finally in part three Britney will highlight additional landbased spectral indices please note that we will have one homework that will
[03:49] be made available during the last session on November 9th this will be a simple Google form that must be
[03:56] completed 2 weeks after it's posted by November 23rd if you can attend all the live sessions and complete the homework by the due
[04:04] date you'll receive a certificate of completion about 2 months afterwards so please be patient for this SE session in
[04:12] particular first I will give an overview of the spectral prop properties of multispectral passive imagery and then
[04:19] we'll discuss what is a spectral index then we will talk more specifically about the normalized difference vegetation index or ndvi and I will
[04:28] identify a few um ndvi data products and then Britney will um provide that demo of calculating ndvi in Google Earth
[04:39] engine please put your questions in the question box and we will address them at the end of the webinar you can ask your
[04:46] questions as we go and then we will try to get to as many as we can after the
[04:50] webinar if the questions are not answered during session we're going to also have a Q&A document that we post on
[04:57] the training website um about week after the each session is over so briefly I'd like to First review
[05:05] the spectral properties of imagery which will help ensure we all understand how spectral indices are calculated for this series we are
[05:14] primarily focusing on passive satellite imagery which means that the majority of the data are collected in the visible
[05:21] portion of the electromagnetic spectrum and this is the light that we can see we all satellites also collect some data in
[05:30] the infrared and the microwave portions where our eyes cannot see and the satellites measure reflected energy or
[05:38] solar radiation from the Earth's surface along these frequencies so the reflected solar radiation is measured by the satellite
[05:47] in various wavelengths solar radiation passes through the atmosphere hits a Target such as a forest or water or
[05:55] building and then those objects reflect and absorb energy energ in different wavelengths this is a simplified example
[06:05] of what happens with electromagnetic energy for green vegetation the figure on the left shows incoming radiation in the visible so
[06:14] this is blue green and red and the near infrared wavelengths B is blue G is green R is red and I is near infrared
[06:24] blue and red wavelengths are absorbed by Green vegetation and the green and near INF red wavelengths are reflected this
[06:31] is primarily because of the chlorophyll in the leaves so we see vegetation as green because we only see reflected
[06:38] energy in the visible wavelengths we can see green but we cannot see the infrared every surface on Earth Earth
[06:47] reflects and absorbs energy in a different manner for optical imagery the sensors are capturing similar data that
[06:54] we can see with our eyes in the visible portion and then in the infrared and near infrared and mid infrared so each
[07:03] object on the ground produces this unique spectral signature in each of these uh wavelength bands that we are
[07:11] that the satellite is measuring so here in this um figure you can see a typical vegetation signature
[07:17] in green that has a small reflectance peak in the green portion and a really high reflectance peak in the near
[07:25] infrared infrared portion soil alternatively tends to have a steadily increasing reflectance value in the visible and and near infrared and
[07:35] then water in blue show tends to absorb most of its energy therefore the reflectance is fairly low throughout
[07:42] with a small peak in the blue in this figure you can also see the bands of a
[07:48] typical lanat um 8 image in Gray so Within These bands we receive one value of reflected energy based on that object
[08:00] so that brings us to spectral resolution which is the ability of a sensor to define wavelength intervals or ranges
[08:07] when we use the word band we are referencing a wavelength range and how the satellite is making the distinctions
[08:13] between different ranges so each band represents a portion of the electromagnetic spectrum and if you have reflection of an object at different
[08:22] wavelengths you can use band math or simple calculations to identify differences differences when we have multispectral imagery likely we have blue green red
[08:35] near infrared and midinfrared so with a satellite image we get one value for each wavelength range for each each
[08:43] pixel we can then stack the layers to view the imagery we can also use the values for different layers at the same
[08:50] location on Earth to identify things like vegetation Health here you can see a comparison of the bands of lanet 7
[08:59] 8 and 9 and Sentinel 2 so for Lan 8 and 9 for example Those sensors have 11
[09:05] bands or wavelength ranges where data are collected the band number and the corresponding portion of the electromagnetic spectrum are shown here
[09:15] like band two is blue band Three is green band four is red and so on the gray parts of this figure are called the
[09:22] atmospheric Windows where the satellite can actually collect the reflected energy from the ground so now that we understand what types of
[09:33] information are being collected now let's talk more specifically about how to use that information through spectral indices as we have discussed
[09:44] multispectral remotely sensed imagery contains a combination of bands that creates a composite image that can be used for interpretation and Analysis
[09:54] with multispectral imagery the individual bands in the band composite can be transform to gain certain features and patterns or to make things
[10:02] stand out better this is done with a mathematical equation applied to each spectral band of an image for each pixel
[10:11] simple ratios between the reflectance of the land surface can be used to highlight representations of ground objects like
[10:19] vegetation the benefit of these band ratios is that they are often simple broadly app applicable across different
[10:26] types of imagery and they reduce the effects of the atmosphere the instrument noise and the sun angle these indices can also allow
[10:36] for consistent estimates of things like vegetation Health across space and time there are more than 100 vegetation
[10:45] indices that have been derived from multispectral multispectral imagery so there are many applications of spectral indices and throughout this
[10:55] series we'll give you an example of some um just to name a few we've mentioned vegetation Health um these can also be
[11:02] used for burned area mapping and fire severity um we could look at things like water content biophysical parameters
[11:09] geologic mapping and much more so as we discussed today ndvi specifically is one of the most widely
[11:18] used vegetation indices in the world and has been used as a state of vegetation over many different spatial and temporal
[11:26] resolutions vegetation health is generally a measure of the amount of the reflected near infrared light with healthier vegetation reflecting more
[11:36] near infrared light than unhealthy vegetation so we can use ndvi to monitor things like crop Health phenology it can
[11:44] be a used as a drought indicator it can help us better understand Leaf area index and even carbon
[11:54] monitoring here are the spectral indices that we will cover over the course of this training series series So today
[12:00] we're really focusing on ndvi um in the next session we'll be focused on those aquatic indices that
[12:07] are most commonly used and then in part three we'll come back to our land indices and talk a little bit more in
[12:15] depth about some of these other um maybe less commonly used but still broadly applicable U landbased indices so today we'll focus on the ND
[12:29] VI so what is ndvi as you recall when sunlight strikes plant leaves in the chlorophyll in those
[12:37] the chlorophyll in those leaves strongly absorbs the blue and the red and the cell structure of the leaves reflects
[12:44] green and strongly reflects near infrared light this is portrayed in the graphic along the top so the two key
[12:53] wavelengths for ndvi are the red the portion that is absorbed primarily by healthy vegetation and then the near
[13:01] infrared the portion that is highly reflected ndvi is the relationship between the red and the near infrared
[13:12] wavelengths the actual formula is shown here the values of ndvi for an individual pixel range from1 to 1 any
[13:21] pixel between1 and zero means no vegetation and pixels that have values closer to one indicate the highest
[13:28] possible density of green leaves the picture here on the right shows that healthy green vegetation absorbs most of
[13:36] the visible light and only 8% is reflected unhealthy sparse or sessing vegetation reflects more visible light and Less near infrared light so you can
[13:49] see the difference in the resulting ndvi values in the in the image here so the green vegetation has a value value a
[13:56] little closer to one in this example it's 72 while the brown vegetation has a value a little closer to zero here it's
[14:08] .14 plant phology is the annual Dynamic of vegetation greenness and it can also be tracked using vegetation indices in
[14:17] the graph on the top you can see the progression of vegetation Dynamics as the seasons change in North America
[14:24] early in the year which which is winter um there are no leaves on the trees resulting in low ndvi values when spring
[14:33] arrives the vegetation greens up and ndvi increases until it peaks in the summer then vegetation sesses and the
[14:40] plants lose their leaves and the ndvi decline and you can see this major difference in um the North American
[14:48] image images on the bottom and this is really what we showed with that first beautiful visualization of our breathing
[14:55] Earth and the changes in ndvi over the course of the year ndvi anomalies are often used to show
[15:03] current vegetation patterns relative to long-term averages this can be calculated by subtracting the long-term mean from the current value and is often
[15:13] done on a monthly basis for example if the anomaly is negative this indicates that vegetation is less green than
[15:20] normal which may be indicative of drought-like drought-like conditions in the example shown here you can see ndvi anomalies in the
[15:28] southwestern us which experienced severe drought in the early 2000s the brown areas indicate a decrease in greenness
[15:37] for 2000 to 2003 compared to a long-term average when calculating ndvi using lat this figure can be used as a reference
[15:49] to remember which bands to use band four or the Red Band and band five or the near infrared band for lense 8 and n and
[15:58] the this is a little different for um lanat 7 so for lanat 7 it's bands three and
[16:06] four for Sentinel 2 we often use bands four and8 for the ndvi calculation shown here so to give you a sense of how this
[16:18] calculation looks on the ground imagine that each of these gray squares is a pixel and we are interested in doing
[16:25] ndvi calculation for one of the pixels and let's just say we want to look at this one on the bottom right the near
[16:32] infrared value for this pixel is 0.144 and the red value it for this pixel is 0.344 given those values we will take
[16:47] the near infrared value minus the red and then divide that by the near infrared Value Plus the red value and we
[16:54] get an ndvi value of 538 and this is indicating healthy vegetation so you could apply the same
[17:04] calculation for an entire image using the near infrared and red values for each individual pixel pixel and generate
[17:11] an entire new ndvi layer so this shows you a bit more visually of how those NE infrared and red values are used on a
[17:20] pixel by pixel basis to examine ndvi over a large region by applying that same calculation across each
[17:30] pixel now to give you an example of an application of ndvi I wanted to briefly show you a project that was conducted by
[17:38] NASA develop and this is a Workforce Development program where teams of interns work with partner agencies to
[17:46] solve some environmental monitoring or mapping issue in this example a team from NASA Goddard um had um advisers
[17:55] here from Argentina and they were really interested in early Harvest information that helps guide agricultural commodity Assessments in Argentina and provide
[18:07] valuable planning information to identify potentially food in Secure region regions they could use be used to anticipate transportation and storage
[18:17] demand predict price fluctu fluctuations and and project commodity Trends however crop yield estimates are currently subjective based on on
[18:29] interviews with qualified informants so in partnership with the Buenos arys gra Grain Exchange um the team used a
[18:37] variety of NASA Earth observations and Google Earth engine to monitor vegetation growth so the first component of this work was to produce spatial and
[18:48] temporal maps of of temperature precipitation soil moisture and the ndvi to allow users to visualize the influence of the Region's climate and
[18:59] weather on the vegetation following that part of the project the team developed an autor regressive model to predict ndvi several
[19:09] months in advance lastly the team created a linear regression model of crop yield and ndvi for soybeans corn
[19:17] and wheat and input the forecasted ndvi to generate a predicted crop yield output the ndvi forecasting model
[19:26] produced accurate predictions at 2 4 and 6 months lead time when examining the most recent growing season in the crop
[19:34] yield model soybeans exhibited moderately strong correlation and wheat and wheat had a consistent weak correlation and cor corn varied from
[19:43] weak to strong um but this information was vital for monitoring vegetation growth and identifying areas of high
[19:51] growth and allocating resources to areas of lower growth to maximize crop yields so just one result from that project
[20:00] this slide shows an example of the ndvi vegetation index variable from modus um from July 2020 to June
[20:11] 2021 the mean monthly mean ndvi was measured and the green line on the plot shows the averages for this
[20:19] season and then the gray shows the 10year average um for ndvi values throughout this Zone the map on the
[20:28] right shows the maximum ndvi values from July 20th to June 2021 and this is shown as a maximum
[20:37] value rather than an average value to provide a visual for the most active growing growing regions um and then after the this first
[20:46] P portion of the work the the team conducted the ndvi portion of the forecasting and if you'd like to learn
[20:53] anything else about this project there's a link to the um project information here as well but it gives you at least
[21:00] an example of how the nvi could really be useful in forecasting and modeling and looking at vegetation Health as it
[21:08] may pertain to things like crops so in this final portion of the session I wanted to briefly highlight a
[21:17] few commonly used ndvi products standard ndvi and evi products are available from modus data and are generated every 16 days at 250 M spal
[21:30] spatial resolution the algorithm chooses the best available pixel from all the Acquisitions in a 16-day period the
[21:39] criteria is used to um limit clouds low view angle and um the highest nvi evi value the collection's names are listed
[21:49] here and the data are available by the land processes distributed active archive Center or lpac and a variety of
[21:58] other places like um Earth data search and open dat veers has similar vegetation indices such as ndvi evi and a newer evi 2
[22:11] algorithm um where the best pixel is selected over a 16-day acquisition period at 500 meter resolution and the
[22:18] v's products are designed in a very similar way as the the modus products and um are available in similar places
[22:26] as well there are also lanat n DVI products available and these are upon request from the USGS Earth Resources and
[22:36] observation and Science Center um and there will also be a few new products available via the satellite needs
[22:42] working group which I will mention briefly as well there is also this unique product of vegetation index and phenology and
[22:51] these are global data sets that were created using avhrr and modus data and this was developed to provide consistent
[22:59] measurements of ndvi and evi over 30 years and this is produced in collaboration with the University of
[23:07] Arizona in session three my colleague Britney will provide a review of some of the exciting new products available from
[23:14] the satellite needs working group so I just wanted to mention this here um they've identified um new data products
[23:22] that will be available very soon and we'll talk about um a lot of those products again in session
[23:29] three so now I'll hand it over to my colleague Britney who will provide a Google Earth engine demonstration of
[23:37] ndvi calculations so over to you Britney thank you Amber yeah uh here in Google Earth engine today we will be
[23:51] calculating uh the ndvi with a couple different data sets we'll be using both lanat 9 and sentinal too for the
[23:59] calculation we're also going to explore some pre-made readily available ndvi products from viers and teram modus so
[24:10] with that being said we can just dive in and get started so here at the start of
[24:15] the script uh we are just creating a title for the map window I'm looking here at line 18 we're just creating the
[24:22] variable title and we're just you know creating that title part one exploring DVI we have the font weight the font
[24:30] size and the position on the map and then here on line 25 we're just adding that title to our map just a quick
[24:37] little code just to remind us what we're doing here in this section that I'm highlighting right here down below so
[24:43] we've added that just to get us started and now moving into the more sciency aspect part one calculating ndvi over
[24:52] the real Selenas in Mexico with Lance at 9 so the first thing that we're going to do is here on line 32 and we are
[25:01] creating this region of Interest also known as an Roi and so this variable which we've called roore one is our first geometry
[25:12] and so that geometry here down below it's this big blue square that I drew ahead of time and this is just over the
[25:21] real dist L enough that we're working with um so I drew that and that's what we're going to be looking at in this
[25:27] first section but if you are working with this data set later and you want to change this
[25:34] region of Interest instead of going all throughout the code and changing it over and over again you can just change it
[25:40] from geometry to whatever your own geometry your own asset whatever and it should continue throughout the code
[25:47] under under roi1 you can change this this region of Interest without too much trouble throughout your code if you'd like to
[25:54] change that at another time but for now now we just have our region of Interest one and it's this this nice big blue
[26:01] square that we drew over the real disos all right so getting into the functions uh creating scale factors and
[26:10] Cloud masking for lanet 9 we're going to start on line 36 here by creating a function that applies a scale factor to
[26:20] our imagery here online 35 I have a nice link that sort of goes into what scale factors are and why you want use them
[26:28] with lat level two SS products um basically the calculations are multiplying by this value and adding by
[26:35] this value for the different bands so I use this function to apply those scale factors and this function created and
[26:44] we're going to use it later in our code and we're going to create another function to mask out clouds from our
[26:50] lanat 9 data here on line 44 and the name of this function is mask l9f are for Lance at 9 surface
[26:59] reflectant and here we are using the QA pixel band lens at 9 pixel quality assessment band and we are selecting
[27:08] cloud and Cloud Shadow pixels and we are setting them to zero indicating clear conditions so this function here just
[27:17] takes any pixel that's potentially a cloud or a cloud Shadow when it's removing them from our image collection
[27:22] so that way we have nice cloud-free data that we're working with for all of our different calculations
[27:29] so here we've just created these functions so far we haven't applied them yet so here we're actually using the
[27:35] functions and loading our image collection itself on line 59 and that's VAR variable L9 l. 9 so we are loading
[27:46] this l. 9 imagery right here and I can even just copy this specific little title for it and if I paste it up here
[27:58] and click on it here we have all this different information from the Google athenion data set data collection all
[28:04] about lat n imagery we have a nice description we have a nice uh sort of chart here all about the different
[28:12] bands we have all of its image properties and we're going to be referring back to this band section in a
[28:18] second when we start to calculate the ndvi but I just wanted to let you know that this is something that's available
[28:23] that you can always check out and read more about each of the data sets that we're using throughout the training
[28:27] today and the rest of the the training itself so here so far we've just loaded it and then on line 60 we are filtering
[28:38] by the date for this whole landat image collection we've just selected all of July July 2022 and here on line 61 we are using
[28:47] filter bounds to filter by that region of Interest boundary that geometry that we talked about earlier which is
[28:54] filtering by that region and here online 62 and 63 with map we are applying those scale factor and Cloud mask functions
[29:05] that we created so even though we created them up above on these lines we are applying them to our image
[29:12] collection itself using map on line 62 and 63 and here on line 64 we are taking the median values for all of those
[29:20] pixels and we are going from an image collection to a nice image that we're going to use on our map later so we're
[29:25] just taking the median of all values all right so here on line 66 we are using that nice ro1 Ro iore one
[29:39] variable and we are clipping our imagery specifically to the geometry so we filtered by it before but now we are
[29:46] specifically filtering it to or sorry we are specifically clipping it to this nice square area of interest that we're
[29:54] going to be exploring in a minute here and so so we are just clipping it using L9 do clip this do clip function we're
[30:03] naming it RDS for real disena all right so here the exciting part here uh on line 71 we are going to
[30:14] be calculating ndvi over our region of Interest so we have that equation the formula for ndvi itself here on line 70
[30:24] in the equation in case you need a refresher is near infrared minus red divided by near infrared plus
[30:33] red so uh how do you know which are the correct bands for near infared and red on the satellite and sensor that you're
[30:41] working with you can do that here in Google Earth engine by just looking at that band tab looking at this big chart
[30:48] so here you can see that they all have different names blue green here we go our first uh Red Band here here that's
[30:58] band 4 also known as srore B4 so that's one of the bands that we're going to be working with and then
[31:06] the near infrared band is the following one band five which goes by the name srore band five so surface reflectance
[31:16] band five and surface reflectance band four and I've noted that here on line 71 just as a reminder srb5 is near INF
[31:25] fored and srore B4 is the Red Band for lands at n specifically so to calculate the mdvi
[31:35] here on line 72 we are creating the variable called L9 ndvi lat 9 ndvi and we're using that
[31:44] RDS that you know clipped area of Interest our region of Interest with the lanat 9 imagery and we're using this
[31:52] function here normalized difference so that's the that might be new here so to explore that I'm going to open up the
[32:01] docs Tab and I'm going to type in normalized difference and you can see right here we're working on an image so
[32:09] it's e. image you can see it's normalized difference and here it's all the information about it you can see it
[32:18] computes the normalized difference between two bands and then the normalized difference is computed at and here you can say first band minus 2
[32:31] divided by that first band plus the 2 and so this equation here perfectly matches the ndvi formula here with the
[32:42] near in for red minus the red divided by the near fored plus the red the first minus the second divided by the first
[32:50] plus the second so this normalized difference function that we're going to be using works for the ndvi calculation
[33:01] I definitely want everyone here to note that even though uh this normalized difference function works for ndvi and a
[33:09] couple other formulas and indices that we're working with not every remote sensing based indices is this exact
[33:17] formula with different bands a lot of different remote sensing indices out there are more complicated they involve
[33:24] more than just two bands so you can't always use do normalized difference for any band calculation that you want so
[33:32] make sure that if you are using just the simple normalized difference function here in Google Earth engine that the
[33:38] function that you're working with is just the first band minus second band divided by the first band plus the
[33:44] second band other than that um you can either calculate indes by hand and there's a lot of different examples for
[33:51] that online but for today we are just using normalized difference because that formula does work for ndbi so that being said the two bands
[34:00] that we're working with the near infrared is srb5 and then the red band is srb4 so here on line 72 we've calculated ndvi
[34:10] just using that function which is great all right so here on line 75 we are setting the visual parameters
[34:21] so as we discussed in the presentation ndvi is on a scale from -1 to 1 for values and we've selected this palette
[34:30] from white to Green that's what we're going to have down below our enbi is going to be
[34:35] visually from 1 to 1 and then from white to Green for our color values and then we are adding it to our
[34:43] map as a layer here on line 78 using L line ndvi with the visual parameters n DVI viz and we have named it lat n n DVI
[34:56] and and then here on line 81 we have just used a map. censor object and then we selected our object
[35:06] L9 ndbi in the zoom layer 12 we did that so when you run the code it automatically zooms to this uh this
[35:14] layer that we created instead of having to zoom in from you know a worldwide view it zooms right to where we want
[35:19] which is very helpful and that is what we have down here as our first layer this landat 9 and
[35:27] this is what we're looking at a nice ndvi over the real day Selenas and you can turn on the satellite view if you
[35:34] want and you can sort of change the opacity of this layer and you can see how the difference in
[35:46] vegetation changes with the different types of uh difference in vegetation in the nvi changes with the difference in land cover and the
[35:58] difference in vegetation over this area you can see that the water is a very light color cuz it's not vegetation you
[36:06] can see like you know very thick vegetation is a nice dark green you can see the different mangroves and whatnot
[36:12] are different color green you can really zoom in and see the differences here um it's all very
[36:20] interesting and something fun to explore right so something that we also added added here on line 84 is we are printing the
[36:30] minimum and maximum ndvi values in our region of Interest so earlier we were talking about how the ndvi itself is
[36:40] usually on a scale from negative 1 to one however most regions of interest do not reach the full range of negative 1
[36:49] to one for the values in that area most are usually uh close or the there's a big difference intive 1 to one and they
[36:59] don't meet those that full range so what we're doing here on line 84 is we are using the reducer min max over our
[37:10] geometry and we are just printing what the Min and Max and DVI values are we're just printing that with line 91 and so
[37:19] that here on our console tab that shows the actual Min and Max values so this uh in the real disiness
[37:28] geometry that we have their region of Interest the minimum and maximum values are not netive -1 to 1 but they're
[37:34] actually negative 0.996 and 0.997 so if you want you can always sort of I'm just going to copy and paste the
[37:47] first couple lines here on line 75 where we set the visual parameters I'm going to replace the
[37:54] minimum with the printed minimum here I'm going to replace the maximum to the actual maximum here so
[38:02] instead of negative -1 and one we have the Min and Max from our region itself and it's very close toga1 and one for
[38:11] sure um however other areas of interest that we're going to be working with are not on that scale of negative 1 to one
[38:18] and you'll see a much larger difference in um the the color palette and the variability between the greens and the whites in your region
[38:29] of Interest below so right now now that it's loaded from 0 negative 0.999 and the maximum of 0.997 there's a
[38:40] subtle difference um in how things look but you'll definitely see more of a difference as we continue to do that
[38:45] with our other regions of Interest both today and next week and the week after with the training but that's it for our first
[38:54] region of Interest so moving on to part two we are going to be calculating ndbi over witch Kansas with Sentinel 2 so
[39:04] we're moving to a new region of interest and we're moving to a new uh satellite and sensor which is very
[39:11] exciting so following a very similar uh process as we did before we're going to start by selecting our new region of
[39:21] Interest our new Roi and that's with our geometry 2 just a second geometry that I've drawn over wit Kansas again if you
[39:29] want to change your geometry on your own at another time you would do that right here with geometry to on this line
[39:38] 97 but from there working with a new data set means that we're going to be creating a new Cloud mask so we're going
[39:45] to start here on line 105 by creating the function mask S2 clouds so we're going to start by
[39:55] selecting the QA 60 band from sensal 2 and similar to what we did in lanat 9 we
[40:03] are selecting the cloud in the Cirus um bit masks and we are selecting or setting them to zero just as before with
[40:11] our Cloud mask we want clear conditions we don't want any pixels that could be cloudbased we want very cloud-free
[40:19] imagery for of the calculations and visualizations that we're going to be creating So This Cloud masking function
[40:26] here online 105 has been created and then we are using it uh starting on Line 120 where we load the
[40:36] Sentinel 2 data and we start filtering and things like that so we start with the variable S2 Sentinel 2 and so let me
[40:46] just copy this information about Sentinel Sentinel 2 and I'll just paste that and it's this first section here this first one top
[40:56] one that comes up so here in the description it's all this information about Sentinel 2 all of
[41:03] the different bands that we're going to be working with again we're going to refer back to this when we're
[41:07] calculating ndvi there's also lots of uh information about the image property and everything everything else so working with Sentinel 2 we're
[41:17] going to start by filtering the date um again just July 2022 we're filtering by the bounds we're
[41:24] filtering by roi2 that second geometry I drew over Witchita Kansas that's what we're going to filter to and then we are
[41:32] filtering out uh the least cloudy pixels that we have less than 20% cloudy and then from there applying our Cloud mask
[41:40] that we created above with DOT uh dot map with mask S2 clouds that function we created here on line
[41:49] 105 and then similar as we did in our last section we are using the median of those values to make in image of our
[41:58] study study area all right so here online 1129 we are using that variable roi2 to clip our land sat line imagery we
[42:10] selected above to the geometry that we drew over Kansas and we are just naming that variable Kansas just a nice you
[42:18] know cookie cutter clip of the geometry that we drew over Kansas and that's what we're we're selecting and then start
[42:26] here we will be calculating that ndvi over cansas so the ndvi formula is the same as before near infrared minus red
[42:37] and then it is divided by near infrared plus red so what are the ne infrared and red bands on
[42:45] Sentinel selecting this area here and going to the band section we can see that the Red Band on
[42:53] Sentinel uh 2 is is band 4 so and it's just known as B4 and then the near infrared on
[43:03] Sentinel 2 that band is band 8 also known as B8 so and I noted that here B8 is the
[43:12] near INF for Red Band and B4 is the Red Band and we are calculating that nbii right on line
[43:19] 134 with the variable S2 n DVI we are just calculating via the do normalized difference function in
[43:28] listing band 8 and band four as our near infrared and red bands for the ndbi and here we are setting those
[43:37] visual parameters on line 137 the -1 to1 values and then the pallet of white and green we're going to
[43:46] change those later but for now we're just going to start with the negative 1: one for our total area of
[43:52] interest and then we are adding that map uh to to our layer as S2 ndvi we're applying those visual parameters and we
[44:01] are naming it Sentinel 2 ndvi and here on line 134 um we are changing the center object
[44:09] for our code so previously we have been looking at three dis lenus but now I want you to go to line 143 sorry and 143
[44:21] and we're going to get rid of those two slash marks that you see at the beginning of code so I want to make sure
[44:28] that when we run the code to see which talk hands is that online 143 that map do Center object is you
[44:36] know this colorful sort of purple color you can see everything because if you have the slashes in front of it and it's
[44:42] all green that means it's commented out so that code won't run and we need to be able to run this line 143 so that way
[44:51] our Mac down below here will sort of Zoom to wiah Kansas and we can look at it so once line
[44:59] 143 is able to run meaning there's no slash marks at the beginning of it or anything and it's nice and you know got
[45:06] a little bit of color we going to hit run and so now our code should be looking at bunch of Agriculture over wi
[45:17] all all canive and so now we can look at that that so even change it to the satellites you
[45:26] see the different types of vegetation here you can see Witchita right there in the sort of lighter green
[45:33] colors cuz there's not as much vegetation and then you can see this Reservoir here it's a very light color
[45:39] because it's just water and then you can see all the different types of Agriculture and farmland and all the
[45:46] different values here lots of vibrant dark and light greens and you can even see the river here and the lighter color
[45:54] so that's all really cool and fun to expl explore um but similar as we did uh with the L at 9 imagery we printed the
[46:03] Min and the max because the values themselves probably don't range from negative 1 to one and in our console
[46:09] here where we printed it you can see the values actually range the minimum value of the ndvi over witch Kansas is
[46:21] 0.397 and the maximum value is 0.72 7 so we're going to go back up to line line 137 here where we set the visual
[46:33] parameters and I'm going to change the minimum minimum from1 to the true minimum value in our region and I'm going to do the same
[46:44] thing with the max I'm just going to take the first three numbers after the decimal point but so I'm going to hit run again and
[46:53] you're going to see that the visuals ation it's going to be less of a uniform green and there's going to be a little
[46:59] more variation between the colors in our palette so I hit run and so yeah now if you look you can
[47:10] see that the reservoir is a little bit lighter you can see a lot more variation here in the vegetation than you could
[47:18] before because we just changed the Min and the max to more accurately reflect the Min and Max values
[47:26] uh in our pallet so you can see I think there's a very visual difference here and you're
[47:31] going to see um a very big difference in the different demonstrations we do in the next couple of weeks but make sure
[47:38] that when you do run your ndvi that your visualizations visualizations match the the Minimax for your study
[47:45] area rather than just negative 1 to one one so I find that all very exciting and I
[47:52] hope you do too and another thing we're going going to explore in this last section here is
[47:59] the prepared ndvi data sets so we're going to start with teram modus and this is a 16-day average and it's at
[48:08] 250 meter resolution so right now here below at which talk Kani this is I believe a 20 meter
[48:15] resolution but when we add the teram modus information we'll see what 250 M looks like and I can even hear online
[48:25] 100 59 copy the teram modus data set and paste it up here and we can look at this
[48:32] there's a nice users guide there's um documents that you can read about and here you can see the bands and again
[48:40] we're not looking at the near infrared and red bands we're just looking at the ndvi band because that's already been
[48:46] calculated for us which is very very handy so we're going to close that and you can see here instead of having to
[48:55] filter out clouds and apply scale factors and calculate the ndvi ourself all we have to do for this data set is
[49:02] load it filter it to the dates that we want and select that nvv band and then from there you're just setting those
[49:09] visual parameters and adding it to our map here on line 171 so I will turn on that layer it's
[49:18] known as parotis ndvi and here you can see the difference between the spatial resolution you can see this is Kansas uh at a 20 meter
[49:29] resolution and this is it at a 250 meter resolution however it had a lot less uh calculation on our end it's
[49:38] readymade even if the resolution is a little bit more difficult but it is great because it's worldwide coverage
[49:45] for that data set so if you want to do less sort of calculation on your end and
[49:50] you just want to work with these pre-made data sets teram modus is a great great option and then and we also have the V
[49:58] product here starting on line 173 and this is another 16-day data set at 500 meter resolution and so I can
[50:09] just copy this here and then paste it up top and so this is our 16-day indices we
[50:18] have a lot of nice information some links to different user guides in the website and similar to before we're not
[50:25] not working with the red band and whatnot we're just working with the ndvi band because it's already been
[50:33] calculated so we are just loading that data set filtering by the dates selecting that ntvi band and then just
[50:40] taking the median values and then from here we're selecting those visual parameters and applying it to our map or
[50:47] adding it to our map here on line 187 and let me just zoom into witchar Kansas again just to see the
[50:57] difference so now I'll turn on the v's ndvi layer and this is it at 500 M resolution you can see the difference in
[51:07] the values so this is the V ndvi this is the teram modus ndvi and then this is the Sentinel 2
[51:17] ndvi but similar as before a lot less calculation on us our the user R end of things and you can see a lot of the
[51:24] different changes in the vegetation with that worldwide coverage which is very handy all right and that is the end of
[51:34] this script right now so um I hope you Eno this I hope you enjoyed this demonstration you're able to use it and
[51:42] with that being said I think we can go back to the presentation all right thank you Britney
[51:51] so much for that great demonstration and we as Britney mentioned we have the code available for anyone who wants to test
[51:58] some of these out on their own as well so to summarize for today every surface on Earth reflects and absorbs energy in
[52:07] different ways using this information from different bands of a satellite image can help us better understand the
[52:14] features on earth a spectral index is a mathematical equation that is applied over the various spectral bands of an
[52:21] image per pixel simple band ratios that highlight a specific process or property on the land surface and the ndvi is the most
[52:31] commonly used vegetation index globally and it's a simple ratio between the near infrared and the red bands and there are
[52:38] many other spectral indices that can be used for aquatic and land applications so please stay tuned and then looking ahead at next
[52:47] week um we will be talking about things like the normalized difference turbidity index the normalized difference chlorophyll index and the normalized
[52:56] difference aquatic vegetation index as a reminder we will have one homework assignment and that will not be
[53:04] available on the website until November 9th you will see um a link to access a Google form on the course website this
[53:12] will be due on November 20 23rd and to receive a certificate of completion you must attend all three webinars and
[53:20] complete the homework by the due date and those certificates will be sent out about 2 months after the end of the
[53:26] course so please reach out to myself or my team with any additional questions and you can also follow us on Twitter
[53:35] you can check out the arset website and then you can also visit our sister programs develop and
[53:41] severe so I want to thank you all so much for your time today and if we have
[53:46] some time we will now move into the question and answer portion of the training thank you so
[53:54] much all right so now we are here in the Q&A portion just give us a moment as we move
[54:05] over to the Q&A document um and as we mentioned um we've gotten a lot of questions today um and we won't be able
[54:13] to get to all of them um during the session but we will try to go through the majority of these questions and make
[54:19] this document available on the course website um afterwards so if you're question get answered um come back in
[54:28] about a week or two and check the website and and maybe you'll see your answer on there as well um so we'll
[54:34] we'll go through a few of these now um and get to as many as we can so question
[54:40] one a really good question um how do spectral indices help with atmospheric conditions instrument noise and Sun
[54:47] angle um the really great thing about spectral indices is that there are simple ratios between two um different
[54:55] wavelength ranges and so you're really looking at the the ratio value through that calculation you're not necessarily
[55:03] interested in say the the actual values of top of atmosphere or surface reflectance directly um so long as you
[55:12] are using um the wavelengths from the same image that shouldn't create an issue for you in terms of um the effects
[55:20] of the atmosphere instrument noise and Sun angle I will say that um I recommend using surface reflectant um if that's
[55:28] available um for example from lanat um when doing these calculations if possible question two would ndvi be a
[55:37] good index for monitoring irrigation areas uh yes ndvi is one of the most commonly used indices for monitoring
[55:45] vegetation and as we mentioned and we highlighted throughout this session that can be done with a variety of sensors so
[55:51] long as you have a red band and a near infrared band you can do this calcul um so lanet sentinol for example um and
[55:59] the other great thing is that it can also be done with drone um drone imagery or commercial imagery if you um have
[56:07] both of those bands so for example if you um are interested in a small irrigated field and you have the ability
[56:15] to fly a drone that has a red band and a near infrared band um you you're going
[56:21] to get much um increased spatial resolution on the ground for really identifying um differences in your crop
[56:30] Health across your field um it might be a little challenging with say something like Lancet if your if your field is
[56:38] small so um I also wanted to mention that another metric that is often used to um identify things like uh plant
[56:49] water stress or water use on irrigated Fields as evapo transpiration or ET and that can be be derived from lat and a
[56:56] variety of models okay question three ndbi shows healthy vegetation can we categorize or classify the forest based on its NBI
[57:06] value say like primary Forest secondary forest in the tropics so I would say the ndvi is usually used to identify
[57:15] relative health of vegetation so it can be used for looking at um restoration or degradation of forest systems it's often
[57:23] not used for identifying the type of forest however there has been some research that has tried to identify
[57:31] General ranges of ndvi values for primary Forest versus secondary Forest um so you could look into that as well
[57:40] um when doing that kind of analyses I would really recommend some groundbased information so um taking spectral
[57:47] measurements on the ground in these various forests to um calibrate or to to check uh what those values the
[57:55] corresponding values then would look like from the satellite so um that's a little bit uh I would say higher um in
[58:03] terms of the type of analysis that you're doing I do believe it's possible but um it's sort of on the the edge of
[58:10] the research I believe okay question three how can the ranges of ndvi be divided into different classes to assess health and density at
[58:20] which value does the actual vegetation measurement start and how do the ranges differ in different satellites so um the
[58:27] ndvi value is from 1 to 1 negative values are usually things like water man-made structures rocks clouds snow
[58:35] bare soil is usually within 0.1 to 02 and then plants always have positive values between 0 2 and one um and this
[58:44] is really going to vary depending on um your landscape so generally healthy dense vegetation should be above 0.5
[58:53] sparse vegetation will fall between 2 and5 um but as I mentioned it's really important to understand your system um
[59:04] you need to understand the seasonality of the plants um to really understand how to compare nvi values in different
[59:12] places and across different times um and I will say that that we will mention some other um vegetation indices that
[59:20] are really useful in say very dense regions um for example we'll talk about the enhanced vegetation index um that's
[59:29] really good for dense U tropical forest and then the Savvy is the soil adjusted vegetation index and that's really good
[59:38] for sparer areas desert areas and we'll talk about that during our third um session of this training series um and
[59:46] in terms of the final question the the ra the ranges will be the same across different satellites because again it's
[59:53] just a ratio so you're always going to be using you know two lat uh bands or two Sentinel
[1:00:00] bands in your calculation you're never going to say like combine a lanat red with a sentinel 2 ND or a NE infrared
[1:00:09] that's not going to be how you ever do your calculation so the the ranges should be the same um because it's a
[1:00:16] ratio okay uh next question question five does the difference in resolution affect the accuracy When comparing different years
[1:00:27] for example if I compare data from 1987 with a lower resolution than 2004 um as a result of the advances in technology
[1:00:35] so I guess my answer to this is somewhat so it really again depends on the landscape right so if you if you have an
[1:00:42] ndvi value for say a 250 meter resolution image that you know is further back in time that's one ndvi
[1:00:52] value for that really large region um as compared to say maybe a 30 m um you know one value for a 30 m area in
[1:01:02] more recent um technology and and satellites and sensors although I will say lanat has the 30 m resolution going
[1:01:09] back really far so that's one benefit of using the lanat data so it depends on your area if you have a really
[1:01:18] heterogeneous landscape and you are covering an area that is dense forest and and more sparse uh vegetation or bare soil
[1:01:28] within a 250 M pixel then you're you're going to say have a lower ndvi value than if your entire 250 meter pixel is
[1:01:38] in a dense forest so it really again depends on the questions you're asking the landscape you're looking at and um
[1:01:45] you know what you're trying to do with the ndvi so um so certainly higher spatial resolution is generally um more
[1:01:54] use ful um for these types of calculations okay question six um are lanet 7 and DVI values comparable
[1:02:06] with lanet 8 and N values despite small differences so um they yes they are very similar um you can take a look at slide
[1:02:18] 32 for um the uh the actual value use so the um the red bands are exactly the
[1:02:30] same well very very similar and the near infrared um are just a little different so if you look at slide 32 you can
[1:02:37] actually see what those values are but they are comparable across them um again when you calculate the ndvi you're going
[1:02:43] to be doing it with you know the red and near infrared bands from lanet 7 and if you do it another time you're
[1:02:51] going to be using the you know bands from lancets 8 n but um if you're comparing across time and you're using
[1:02:57] lat 7 earlier in the record and then L sets 8 and N later in the record the
[1:03:01] ndvi values will be very comparable okay question seven is there a significant accuracy Improvement when applying normalized
[1:03:16] difference indices to level two and level um one images so I would use the level two images when they are available
[1:03:26] those are just processed at a higher level and generally considered more accurate um you know taking out some of
[1:03:32] the effects of the the sensor again it's a ratio so it probably doesn't make that big of a difference um but my uh my
[1:03:41] go-to is always using level two images if I can okay so the next question asks about the let's see question eight from which
[1:03:54] website will I find recent modus and DVI data um so if you take a look at slide
[1:04:00] 40 of um the slides today you can see there are a variety of places to obtain those modus nvi and evi products um you
[1:04:09] can look at the I think the easiest place to go as a starting point is Earth data search that um Earth data search
[1:04:16] has tons of different um um satellite imagery available um you can also use things like appears which we didn't
[1:04:23] highl in a lot of um depth here but the great thing about appears is you can actually do some analysis prior to
[1:04:31] downloading imagery um you can select a pixel or you can select a um geometry and create some um graphs and analyze
[1:04:42] those graphs all within the appears interface prior to downloading imagery if that's of interest to you and I
[1:04:48] believe the the modus ndvi and evi products are available on Earth engine too through the um Earth engine catalog
[1:04:55] as well so um there are a variety of places that you can go and it really kind of again depends on what your use
[1:05:02] for them are and if you want to do analyses you know in the cloud using these um um options from some of the the
[1:05:11] dacks um or if you just want to download the imagery and analyze it yourself in like a qis or an argis again it's it's
[1:05:19] really up to you and how um how you want to use the the data um and then question
[1:05:29] nine nine um okay it sounds like it looks like we're getting to some of the questions about the the the code but the short
[1:05:38] answer to question n is it possible to share these scripts of ndvi extraction is yes so the code for the link to the
[1:05:47] code is on slide 45 I believe um and anyone can access that it's freely available um you just need to have an
[1:05:56] earth Engine account so you can you can run that script you can use that script you can copy and paste that script into
[1:06:04] your own modify it for your region of interest if you are um you know a coder and you're familiar with Earth engine
[1:06:11] then um go for it it's available okay question 10 does everyone use the same Cloud masks um maybe I'll
[1:06:22] pause here and see if my colleague Britney would like to respond to that because I think she might have um added
[1:06:28] some of this text here hi can everyone hear me okay hear you thanks great um yeah so I
[1:06:45] assume you mean do you apply the same Cloud masks to different satellite and sensors and the answer is no how you
[1:06:54] math clouds is specific to the satellite or sensor that you're using even different versions uh in the case of
[1:07:03] lat um so for example in today we created a function to mask out clouds in the entire image
[1:07:13] collection uh in or for each image collection with both lanat and Sentinel 2 and we did that with lanat using the
[1:07:23] QA pi pixel band and that's an entire band dedicated to identifying objects in the pixels so you can mask out things
[1:07:31] like clouds and water um and we just use that band two mask out clouds and Cloud Shadow and whatnot and then we do the
[1:07:38] same thing for Sentinel 2A but we use the the Q60 band so they are specific to satellite in
[1:07:45] sensors um I would definitely recommend you know looking at literature um seeing what the common method is and of course
[1:07:53] reading the uh the guides that you know USGS releases for lat and whatnot to see which band specifically they recommend
[1:08:05] to use for cloud masking and whatnot I hope that helps great thank you Britney okay moving on to question 11
[1:08:18] can I use ndvi data and CDL data I want to extract ndvi according to CDL is it
[1:08:26] possible I am taking a wild guess here and assuming that this person is talking about the cropland data layer the
[1:08:35] CDL um and I'm not really familiar with the um how you can analyze and use those data I
[1:08:48] do know that the cropland data layer is available um for the United States this provides um estimates of the crop type
[1:08:58] over the entire us um I believe on a yearly basis going back to 1997 um I'm not sure if you can actually
[1:09:08] extract any ndvi values from the cropland data layer my assumption is that it is just the um the type crop
[1:09:18] types available such as like corn or cotton or rice um I assume that they use ndvi in order to make those
[1:09:27] classifications and distinctions um but this is a USDA product it's not an ASA product so um my suggestion would maybe
[1:09:34] be to contact UM someone from the USDA who is creating those data sets um to get a little bit more information about
[1:09:44] that um and I'll just paste the uh the cropland data layer visualization visualization uh website here I'll just put that in
[1:09:57] the in the document for you as well I'm assuming they use ndvi but I'm not sure if that's like a product
[1:10:05] available you could you could certainly you you know obtain ndvi data from me from one of the sources that we mentioned here or
[1:10:14] calculate it yourself um using Earth engine and then compare it to the cropland data layer if that's what is of
[1:10:23] Interest okay so the next question um also refers to the Earth engine tutorial the question is in the
[1:10:34] GE tutorial since it's level two data are these bands atmospherically corrected do all spectral indices work with atmospherically corrected bands as
[1:10:43] opposed to top of atmospheric bands Britney do you want to take that one uh yeah sure um so there are
[1:10:56] definitely many different times types of like levels of data atmosphere correction and it all depends on the the
[1:11:04] sensor that you're using and the data products the uh imagery that you're using as well so the ones that we use
[1:11:11] today I can provide links to the actual descriptions or you can look at it in Google or engine but I will leave the
[1:11:18] link here right in the question that you can refer back to and you'll be able to see to what extent it's been
[1:11:25] atmospherically corrected but the answer essentially is yes for our purposes that we use today it is um and then for
[1:11:33] spectral indices and the bands being correct um you want to make sure that whatever uh sensor that you're using has
[1:11:43] the bands that are necessary for the wavelength so you don't want to be performing like an ndvi over something
[1:11:52] that doesn't have a red band for example example um and I think Amber mentioned that earlier talking about like you don't
[1:11:59] want to mix banss from other satellites and sensor so just making sure that you match the spectral indices that you plan
[1:12:05] on using with the sensor that has the correct bands for that formula for that spectral spectral indices um and we'll be going over that
[1:12:16] in the next two uh webinars as well part two and three where we you know go through and
[1:12:22] check that the the band values are correct with the the different bands that we need for the
[1:12:28] indices that we'll be calculating I hope that was helpful Amber sativa if there's anything else you'd like to add in addition to that
[1:12:36] please feel free yeah that that's all great Britney thank you for that reply um and it looks like so I think we're
[1:12:46] going to go um for about three more minutes I know we're 12 minutes past the um the hour here so thanks to everyone
[1:12:53] who stayed on with us so maybe we will try to answer two more questions um and then end the session for today um
[1:13:02] Britney do do you want to go ahead and take question 13 as well yeah sure so it looks like question
[1:13:11] 13 is are the variable names K sensitive in Google Earth engine min max with the max being capitalized equals minmax all
[1:13:20] lowercase um so for the name of the variable that you create it is case sensitive where you name a
[1:13:29] variable something like you know lat 9 and then you rename another variable later in your code lat 9 again the code
[1:13:39] will ReRe itself and the latest version of a variable name will become that variable um that is specific to Google
[1:13:48] exension if that's what you mean by variable names I noticed you use the example Min map Max that's not exactly a
[1:13:55] variable that's a function within Google Earth engine and that is also very case sensitive so when you use things like uh
[1:14:05] different functions like dot min max dot you know Center object dot whatever um Google Earth engine does follow the sort
[1:14:14] of you know language of the first word in that function or the first part of that function being lowercase and the
[1:14:23] second word being uppercase so you'll see a lot of the time in Google Earth engine when you use functions it
[1:14:29] typically follows this sort of same pattern of like first sentence being lowercase second sentence having an uppercase first letter um and that is
[1:14:39] common to the the coding language itself if you're in the Google attention interface and you go to the
[1:14:47] documentation tab it should be on the upper left that shows you all of Google attentions functions a nice description
[1:14:54] I think we looked at it today using normalized difference so when you're coding Google attention will sometimes
[1:15:00] tell you if a function doesn't exist and sometimes it's just because of situations like forgetting to Capital
[1:15:06] capitalize the the second word so I would make sure that when you're coding you know use the documentation tab look
[1:15:13] at how exactly they want each of the letters to be capitalized or UNC capitalized and that you are using the
[1:15:20] the function that you hope you're using thanks Britney appreciate that um so go ahead and answer this final question
[1:15:31] question 14 um and then we'll end for today but we'll try to get to some of your other questions that have been put
[1:15:36] in the the document as well um this is a really good question um the question is I'd love to be able to fill in a form
[1:15:44] about code parameters and Earth engine I wish there was a non-code interface um so we're not googlers so uh you know
[1:15:53] maybe take that that comment up with with Google but I will say that um there is this uh cool feature or application
[1:16:02] called G map um and there is still some coding that you have to do but from my
[1:16:08] understanding is you can create um sort of point-and-click functionality that sits on top of the earth engine interface um to run some
[1:16:17] types of functions so I've put in a link there um that you might want to check out Britney I don't know if youve ever
[1:16:23] used this I've never actually used it but I've seen some presentations and um um some tutorials on it um the other
[1:16:30] thing I wanted to mention is that there are other tools out there um like climate engine and um the these tools
[1:16:40] are sort of apis that are built on top of Earth engine that um are also pointand click calculations um climate
[1:16:50] engine has a lot of the lanet data has ndvi has a lot of indices in there it's
[1:16:55] globally available you can go in and point and click and do some analyses there um and then um I think Fiona uh
[1:17:03] Gregory in the chat had uh put in another option for some noncode um Earth engine functionality so I know this is a
[1:17:12] great community and I'm sure many of you use Earth engine um for a lot of these functions so um yeah help each other out
[1:17:21] provide those resources where we don't know of them or they they're not available um Britney is there anything
[1:17:26] else you want to add to in response to question 14 um no I would just say that I've
[1:17:34] heard a lot about GE map the creator of it uh also has a YouTube channel where they post a lot of different uh
[1:17:41] tutorials and their own training so I definitely recommend checking that out fantastic thank you so much um
[1:17:51] Britney and my my other rset colleagues on the back end here who are you know making the show run smoothly for us uh
[1:18:00] we really appreciate all this work um as I mentioned we will um continue to review these questions you all have
[1:18:06] posed here um do our best to answer them and we'll be posting the Q&A um online within about a week or so you can come
[1:18:15] back to that similarly for the recordings check back in you know give us a few days give us a week or so um
[1:18:23] and those will all be made available for you to watch um prior you know um coming back to certain things that you might
[1:18:29] have had questions on things like that um and do please join us for the next two sessions so um next week at the same
[1:18:38] time we are going to be reviewing um aquatic indices um my colleague Juan Torres Perez um will be giving that
[1:18:45] lecture and then Britney will be walking us through another Earth engine demonstration um so do please join us
[1:18:52] again for for next week and have a great rest of your day thank you so much
