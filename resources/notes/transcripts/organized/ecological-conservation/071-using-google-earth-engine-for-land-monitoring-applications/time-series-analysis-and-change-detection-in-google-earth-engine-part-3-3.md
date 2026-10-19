# Time Series Analysis and Change Detection in Google Earth Engine, Part 3/3

`https://www.youtube.com/watch?v=RqVselZ5hKM` · id 158 · 2:15:40 · module 4 — Module 071 - Using Google Earth Engine for Land Monitoring Applications

[00:03] hello everyone and welcome to our final session of the google earth engine for land monitoring application series
[00:10] uh my name is zach benson and i'm based out of the nasa ames research center in california along with my colleagues who
[00:16] are joining me for this training juan torres perez and amber mccullum so before we get started with today's
[00:30] session i just want to cover some logistical reminders that you might already be familiar with uh this series includes two sorry three
[00:37] two hour sessions as mentioned and today is the final session of the series series and after each live session recordings
[00:45] are posted to the training webpage so if you didn't have the opportunity to join every single one of the sessions um
[00:52] you can definitely watch the recordings i'm on our website and those are also posted on youtube for your later viewing
[00:58] i mean there's one google form homework due on july 14th for this series and i've provided the link to the
[01:04] webpage here on the slide and uh we'll have a q a session at the end of today's webinar but we're not
[01:11] able to get to your question or if you have any questions after the session is over over definitely please feel free to email us
[01:17] at the addresses we've provided here and here's just a quick reminder of the topics we've covered in the first two
[01:28] sessions of the series um in session one we went over the basics of google earth engine um calculating a set of
[01:35] vegetation indices in the javascript api and then we took a quick look at the available python api in google colab for
[01:42] anyone who might be interested in using python to engage with google earth engine engine and in session two we covered the basics
[01:49] of land classification and accuracy assessment assessment and then completed a supervised land classification of cumberland county maine
[01:57] maine in the google earth engine javascript api so for today we'll go over the basics of time series analysis and landscape
[02:10] change detection um and then complete an activity using tools in google earth engine to examine changes in vegetation
[02:17] cover um over a number of years and i mentioned our names earlier um but here's just some pictures of the rset
[02:23] eco team so that you can put faces to names okay so here's just a quick overview of
[02:34] what we'll be covering today first i'll go through some slides to make sure we're all on the same page
[02:40] with at least the basics of time series and change detection analysis and we'll also cover some methods that
[02:46] we can use in google earth engine to complete these types of analysis and then we'll transition to the ge code
[02:54] editor and i'll walk you all through a basic time series and change detection activity examining vegetation change
[03:01] over a large landscape and this activity will include landsat data retrieval imagery prep calculation of a vegetation index across
[03:10] an image collection over a series of years change detection using visual analysis and and image differencing and visual analysis
[03:20] of the and data visualization and as usual we'll wrap up with a q a session so we
[03:29] can answer any questions that you might have all right so let's get started with our time series analysis and change
[03:39] detection overview i'm kind of similar to the land classification and accuracy assessment session we won't be completing an exhaustive
[03:47] overview today since both of these topics are are rather extensive but we'll focus our efforts on what you
[03:54] need to know for this session and i'll also point you in the direction of past our set trainings where you can
[04:00] learn more about time series and change detection all right so as many of you are likely aware the
[04:11] use of multiple satellite images over time allows us to identify various types of change on the ground
[04:18] and when these changes happen over a series of days months or years the use of many different images allows us to
[04:24] view the progression of these changes so this is particularly useful for things like gradual changes like a
[04:31] decrease in forest health due to mountain pine beetle infestation for example example and there's also the advantage of having
[04:38] a long record of satellite imagery from sensors sensors like landsat and modis with landsat representing 40 plus years of data i'm
[04:46] in modis providing uh 20 plus years of data data and time series analysis has become more prevalent in recent years with the
[04:54] advent of cloud computing like google earth engine and improved processing and the use of google earth engine for
[05:02] time series analysis is particularly prevalent uh given that large data records like the landsat and modis datasets i just mentioned are already
[05:11] available within the gee data catalog so time series analysis looks at landscape change as a dynamic process
[05:26] occurring over a number of months years and and so on mapping land over these time scales allows us to better understand things
[05:35] like trends and land cover change and patterns in vegetation growth and some common uses for time series analysis
[05:41] that you're likely familiar with are the identification of urban expansion uh mapping deforestation and monitoring post-fire conditions
[05:50] and we have an example of this last use here on the slide uh remote sensing scientists have been
[05:56] monitoring post fire recovery in the yellowstone national park for uh decades after a series of lightning and human
[06:04] caused fires consumed vast stretches of the park and here you can see the use of a normalized difference vegetation index
[06:12] to track post-fire vegetation recovery in the area over the course of 30 years and with this example it's really
[06:19] important to recognize that the necessary time scale for your own analysis will be different depending on the type of disturbance um or change
[06:27] that you're interested in and in this case case a long time series is necessary to capture the recovery of the landscape
[06:44] now let's talk about some of the imagery selection criteria for completing your own time series analysis images should be collected around the
[06:52] same time of day to reduce differences in sun angle and ideally images from different years should be within the same month or
[07:00] season to avoid seasonal and phenological differences in imagery for example if you choose an image in the dry season
[07:08] and an image in the rainy season assuming you can find one that is cloud-free cloud-free then you'll see differences in
[07:15] vegetation greenness due to different precipitation amounts rather than actual change in land cover so similar to this even if you choose
[07:25] images from the same time of year you need to be aware of different annual precipitation amounts for those
[07:30] particular years so if one year experienced extreme drought and one year experienced normal rainfall you'll be seeing differences in
[07:38] vegetation and and land cover type due to the differences in rainfall so those are just some important caveats
[07:46] and and ways of thinking that you'll want to keep in mind as we continue to discuss time series
[07:52] and we also have an example here of ndvi anomalies uh in the southwestern u.s and these anomalies uh compare yearly
[08:00] ndvi to a long-term average across years to detect variations in the time series noting noting that that certain years have particularly low or
[08:12] unhealthy vegetation and we'll talk more about this type of analysis a little bit later on there are a variety of different types
[08:25] of time series analysis which we'll briefly cover we can view annual or seasonal trends such as patterns in vegetation phenology
[08:34] and we can also view gradual changes like i mentioned earlier um this is things like vegetation degradation
[08:41] resulting from say a pine beetle infestation or disease and then we can also examine abrupt changes which is something like a forest
[08:48] fire a large disturbance that creates time creates change very quickly and anomalies can provide us with information about how landscapes may
[08:58] vary from average conditions like drought-related impacts seen only in particular years so we can generate environmental descriptors and parameters
[09:09] as well to evaluate changes in things like like species habitats so we'll go over each of these different
[09:16] types of time series analysis over the next few slides so in our first type of time series
[09:26] analysis analysis we can use a yearly time step to evaluate annual trends occurring over a number of years
[09:34] now this type of analysis focuses on the use of years as a unit for describing change and variation
[09:40] and an annual time series can include as many years as are available or as many years as you'd like to include
[09:47] and i use this phrasing because typically the the limiting factor in a time series analysis is in fact data
[09:52] availability availability and mapping of annual trends can be useful for assessing land cover changes over long time periods
[10:01] and here's a really good example of this on the slide of land use land cover change it's a
[10:07] time series completed for the yangtze river estuary region and as you can see this relatively lengthy time series has maps that are
[10:17] made from 1985 to 2016 i mean these maps do a really great job of monitoring the growth of impervious surface
[10:25] um over the entire time series in the region and this is usually something that we associate with human development
[10:31] so you can see this is a little bit more of a gradual change that we're able to observe over a number
[10:36] of years so time series like this provides us with a lot of information about uh how land cover type has changed
[10:42] over a number of decades so in our next type of time series analysis we're concerned with seasonal
[10:52] trends these trends are often driven by environmental factors like temperature or precipitation and seasonal time series can describe
[11:01] variation within a year and also identify differences in seasonal patterns between years so an example here on the right
[11:10] you can see changes in seasonal snow cover with modus imagery from the winter to summer months in the
[11:16] himalayas himalayas and these maps display the percentage of time that a pixel was snow covered during each season
[11:25] and that's using that modis data from 2000 to 2008 and it will likely come as no surprise
[11:31] to you that most of the snow cover occurs in winter months as you can see on the map
[11:36] at the top so a time series analysis like this is really good at detecting those changes that you could see within a year that
[11:43] end up being due to seasonal factors so when we think about landscape change we usually frame this change as either
[11:58] gradual or abrupt and gradual changes are those that occur over a longer period of time like over the course of months or years
[12:07] while abrupt changes take place quickly and are often marked by distinct change in the land surface so we provided some examples of both
[12:15] change types gradual changes can be due to things like land degradation insect infestation disease and forced recovery from a
[12:26] disturbance event and abrupt changes to the land surface can be due to things like wildfires deforestation or rapid urban development
[12:35] so the figure on the right shows a time series plot of ndvi for a site in yellowstone national park
[12:41] from our previous example and the plot shows an abrupt decrease in vegetation vegetation due to fire events and then a gradual
[12:49] increase in vegetation as regrowth and recovery take place after the fire and we'll make a time series line graph
[12:56] similar to this uh during our activity in the javascript api this is also a really good example of
[13:02] how change might work in your landscape sometimes you don't just have gradual change or abrupt change an abrupt change
[13:09] can then prompt gradual change like in this case where the abrupt change in land cover is due
[13:15] to fire and then we see gradual changes due to vegetation regrowth afterward so our next type of change is determined
[13:29] through the identification of anomalies and anomalies are essentially the difference from average conditions and in a time series a long-term average
[13:39] is established by compiling data from the entire time series over the total number of dates or years
[13:47] that are available within that time series series so once a data set of average conditions is calculated
[13:54] and analysts can difference images from individual years with the average to determine how much a single year might
[14:00] vary from that mean and there are a couple of different ways to do this but that's generally kind of
[14:05] our first example of assessing an anomaly which is really just comparing a distinct year to that long-term mean
[14:13] so an example of this is the image you can see on the slide from the food and
[14:17] agricultural organization of the united nations nations which indicates ndvi anomalies from march 2019 and ndvi values from this year were
[14:30] compared to a long-term average of of those ndvi ndvi values over the entire time series of data available to that
[14:37] organization organization so you can see in the legend uh that different colors correspond to varying degrees of difference between 2019
[14:45] and the long-term average so something like this could be used to identify a drought and how that might affect
[14:52] current and future food security so essentially use these anomalies as a way to examine how different a single year is
[15:02] from from the compilation of all of the average data from all of the data points that we have
[15:08] within our date within our time series so satellite images can also be used to generate maps of environmental
[15:21] descriptors and parameters and these descriptors can act as a kind of of proxy for management needs like those
[15:29] shown here related to wildlife habitat health health and in this example dynamic habitat indices were created from modis data
[15:37] collected from 2003 to 2014 to provide information about vegetation health along with other habitat metrics like productivity
[15:46] productivity perennial cover and the degree of vegetation seasonality and these dynamic habitat indices or dhis uh capture seasonal variations in energy
[15:57] that species can use in the form of food that are useful metrics in the understanding of bird species richness
[16:05] so using time series analysis in this way can be an excellent method for characterizing those environmental parameters kind of most important to
[16:14] your study system or area so i hope this this discussion has given you some perspectives on the usefulness
[16:23] of time series analysis for land monitoring uh but as you know we're really interested in exploring ways that
[16:29] we can do this in google earth engine so as i mentioned earlier uh ge maintains a huge catalog of data
[16:36] spanning a number of years with global coverage so you can take advantage of this data accessibility uh
[16:42] to complete time series analysis at daily monthly yearly time steps time steps and kind of so on depending on
[16:48] your own needs so using the google earth engine api uh we're able to filter and compile these data sets
[16:57] according to our chosen specifications and use this data to assess land cover calculate environmental parameters and ultimately
[17:07] visualize and communicate the change you identify over time so here we have an example of ndvi plotted in google earth engine over
[17:19] three different landscape types from 2010 to 2019 and plotting a time series like this is is a useful method to identify seasonal and
[17:31] yearly fluctuations in vegetation presence and greenness i mean we'll show you a simplified version of this in our
[17:38] activity um but that's all to say that plots like this and and other types of data visualizations um some of which
[17:43] we'll go over in google earth engine are really great way to kind of display this time series analysis in a
[17:49] way that's meaningful and easily communicated to whatever audience you might be interested in working with now i thought this was worth mentioning
[18:03] um if any of you are familiar with the landsat based detection of trends in distribution and recovery algorithm or
[18:11] land trender as it's most commonly referred to and and you probably heard it um as land trend or more than that that's
[18:18] spelling out of the acronym um but you might want to take a look at its implementation in ge
[18:25] land trender temporally segments a time series of images by extracting the spectral trajectories of change over time and it's worth noting that the use
[18:34] of land trender in ge simplifies a lot of the pre-processing steps and can really make implementation of this algorithm easier compared to
[18:43] other platforms i mean we won't be going more in depth on lan trender during this session but i
[18:48] definitely encourage you to take a look at the link i've provided on the slide this will take you to kind of an intro
[18:54] tutorial of implementing land trender in google earth engine okay so now let's transition to our overview of change detection
[19:12] uh change in satellite imagery generally refers to the conversion of the landscape from one dominant feature type
[19:18] to another and examples of that include similar disturbance factors that we covered earlier and that's things like changes
[19:26] in tree cover due to abrupt changes like wildfires or land clearing urbanization and land degradation due to
[19:36] over grazing um many of the things that we we also covered for the time series analysis section since these two um
[19:42] types of analysis are so um intertwined so with satellite imagery we can answer questions like where and when has
[19:51] changed taken place how much and what kind of change has occurred and what are the cycles and
[19:57] trends of change so the example here on the slide shows the urban expansion of ulanvitar mongolia and you'll notice that many
[20:05] instances of change detection feature images that are relatively far apart on the time series uh like how in this case
[20:13] the imagery used is from 2001 to 2014 and it's usually a little bit easier to note change this way which really makes
[20:22] sense since more opportunity for change has occurred in the time between the images images since they're further apart on that time
[20:29] series so to further characterize change detection we group changes into three major types the first is directional change like
[20:46] urban development uh the second is cyclic change uh like seasonal plant phenology phenology um and the last is multi-directional
[20:54] change uh things like deforestation and regeneration and there are also several broad categories of change that you can detect
[21:03] with satellite imagery and those include a change in shape or size of land cover type patches um
[21:10] um something like urbanization analysis for example like we saw in the previous slide is a really good example of this
[21:17] as well as slow changes in cover type which are more difficult to detect than abrupt changes like those due to
[21:25] wildfire or deforestation and we can also detect slow changes in the condition of a single cover type
[21:33] like say forced degradation due to insects and disease like we've mentioned before and this type of change detection can be
[21:42] easy or difficult kind of depending on the extent of damage to that single cover type and lastly
[21:50] we can also look at changes in the timing and extent of seasonal processes such as decreased rainfall and its
[21:58] effects on vegetation all right so the way we detect change in the landscape landscape using satellite imagery is by detecting
[22:12] changes in the spectral values of pixels and pixels will have different values before and after changes have occurred
[22:20] we went into this in a little bit more detail i'm covering spectral signatures in the last session so hopefully you
[22:26] remember remember kind of what the plot on the right is but in this example we see that healthy
[22:32] vegetation vegetation represented by the green line has high reflectance in the near infrared but low reflectance in the
[22:40] shortwave infrared but burned areas are the opposite with low reflectance in the near infrared and higher reflectance in the shortwave
[22:49] infrared infrared and so this is just an example of of our use of spectral signatures to complete
[22:56] this this change detection time series analysis analysis so you can use that information um specifically in this case
[23:03] not only to detect burn areas but detect the severity of burns as well so if we take that
[23:12] knowledge of the spectral information further we can use the spectral properties of a cover type like burned
[23:18] vegetation in this case to detect it and compare it to conditions in previous time periods so in this example we use the normalized
[23:27] burn ratio or nbr to identify burned areas areas so nbr uses remote sensing data at the near infrared and short wave infrared to
[23:37] identify burned land surface and so if we calculate the nvr uh before a fire and then after a fire
[23:45] we can difference the images to detect land surface changes uh due to burning and you can see here on the slide uh the
[23:52] difference to nbr or dnvr shows those areas uh changed by fire and we can ultimately use this to assess
[24:01] foreign severity so we'll go further into um image differencing like this i'm a little bit further later on but i just wanted to go
[24:09] ahead and give you a quick kind of applied example of how change detection works works um and extra points if you remember nbr
[24:16] from our fire series so there are a series of common goals when it comes to change detection
[24:27] we complete change detection analysis to both identify the location of change as well as the type of change
[24:35] and we also try our best to quantify change change providing some sort of area metric or frequency of change metric
[24:42] and we want to assess the results of our change detection analysis in order to hypothesize about why this change may
[24:48] have occurred and so that said it's much easier to locate and quantify change than it is to
[24:54] identify the cause of change so here are some suggestions for completing change detection analysis you'll want a multi-temporal data set
[25:10] that's basically to say you want a data set that has a sufficient time series for detecting change
[25:16] and when selecting data each image within your time series should ideally come from the same sensor and have the same spatial resolution
[25:25] and imagery should also ideally be collected at similar times of day days of the year and seasons
[25:33] and you'll also want cloud-free data that's hopefully gone through radiometric and atmosphere correction and it's important to keep these factors
[25:42] in mind uh because you need to minimize changes due to data characteristics characteristics that you're not interested in um things like cloud cover
[25:51] or aerosol interference um so that you can identify the changes that you are interested in so basically you want to control for any
[25:59] factors that might influence the accuracy of your change detection and you'll notice that a lot of these
[26:05] these suggestions are similar to time series analysis time series analysis and change detection have a lot of the same uh data
[26:11] requirements and you'll you'll kind of note that they're kind of inextricably linked in this case all right so it's also important to
[26:23] consider the class of the change you're attempting to identify identify so if you're looking at between class
[26:30] changes you're typically evaluating the change of one land class to another basically asking the question has the
[26:38] pixel changed and what has it changed too too um an example of this is uh conversion of forest to agricultural
[26:46] lands lands but within class changes on the other hand hand allow us to ask the question how much
[26:52] and in what direction has a pixel changed so this basically means that you're assessing change within a class
[26:59] like changing a vegetation index value and in our ge exercise we'll be looking at within class change
[27:06] of a vegetation index uh to assess vegetation degradation and so while this isn't the same as change detection between classes we
[27:14] assume that the degradation of vegetation or reduction or increase in our vegetation index values values results from cover change due to things
[27:25] like human development drought and agriculture so there are many ways to detect change in imagery but for our purposes today
[27:42] we'll only be looking at two of these methods methods the first is visual analysis which is a
[27:48] pretty simple process of comparing satellite imagery at different time steps steps um a rather extreme example of this um
[27:55] here on the slide is an abrupt landscape disturbance like the mount st helens eruption that you can see here in the time series
[28:03] displayed displayed and these uh types of changes are often obvious enough uh to be delineated purely by looking at say something like
[28:12] true color imagery image differencing however uses raster calculation methods to difference pixel values um from different times or from average
[28:23] conditions and we'll go over that a little bit further later on so we'll go ahead and just finish up our
[28:32] discussion of visual analysis on this slide slide a visual analysis usually is usually um completed by just a simple visual
[28:40] comparison comparison hand digitization um and uh the use of band combinations to identify change so like i mentioned before um this is
[28:51] often best for large changes uh like the shape or size of large uh cover type patches patches it's definitely not as good for subtle
[29:00] changes changes for things like land degradation so this method also doesn't necessarily take advantage of the spectral
[29:10] responsive cover types in the same way that something like image differencing might and this example here shows the hand
[29:17] digitization of deforestation patches in peru peru and for our ge activity we'll calculate our vegetation index um
[29:26] and kind of simply compare maps from different years to to visualize change and that'll be kind of our our type of
[29:31] visual analysis that we complete during the session okay so let's talk about the other method that we're interested in
[29:41] um the image differencing method works by simply taking a single band from two different dates of imagery and
[29:49] subtracting one from the other resulting in a difference or change image that highlights areas of change um this method can also be used to
[29:58] difference a single year and an average of the time series uh to examine how one year might differ from a long term
[30:04] average average and this is kind of uh our pseudo-anomaly analysis in this case so this can help you assess where a
[30:13] single year may fall in terms of uh the mean condition and whether or not you're seeing normal variation or true change
[30:24] so the change image consists of positive and negative values where changes occurred and zero values where no change
[30:31] has occurred so the advantage to this approach is that it can detect subtle changes but sometimes it can be a little bit
[30:37] difficult to interpret here's an example breakdown of how image differencing differencing works on the pixel level by simply taking a single band from two
[30:51] different dates of imagery and subtracting one from the other resulting in a change image and as you can see
[30:58] differencing takes place pixel by pixel making change detection uh delineation more specific and the change image consists of as i
[31:07] mentioned before positive and negative values where change has occurred and zero values where no change has occurred
[31:15] so image differencing can be particularly useful for examining change in continuous indices i mean we're going to do some of this
[31:22] within our ge activity so here's a quick example of image differencing using a normalized difference water index or ndwi
[31:41] you can see the true color images here from from 2018 and 2019 on the right and uh the ndwi is calculated using
[31:51] green and near infrared bands uh for both of those dates um and then the images are differenced using that new
[31:57] ndwi band so the differenced image highlights flooding in blues and greens on the difference image showing us just how
[32:07] different a water inundation was between these two dates so i'm not going to show you much more
[32:13] of this uh because as i mentioned before we're going to be visualizing a lot of this um during our activity um
[32:18] and that's kind of where we're going to wrap up um our overview sections today so i know that was a bit of a crash
[32:26] course though um really just to get us all on the same page for uh the activity today um so i've provided links to
[32:33] relevant past trainings here um if you're interested in learning more about time series analysis and change detection uh definitely take a look at
[32:41] our investigating time series of satellite imagery um and change detection for land cover mapping trainings trainings both are available on our website
[32:52] and i've also included the link to our remote sensing for mangroves in support of the un's sustainable development
[32:58] goals training i provided this last time too but i just wanted to reiterate that this training is a great option to look at if you're
[33:07] interested in data visualization in ge and in this case it's particularly relevant to time series and change
[33:15] detection and just like last time i wanted to point you in the direction of a few links on the ge developers website um
[33:29] there are a number of guides tutorials and example scripts on there that you might find useful for your own work um
[33:34] and i've included links specifically for the image collection charts uh time series animation um land trender in case
[33:41] you're interested in implementing that in ge um as well as the mathematical operators pages um which are featured heavily in our
[33:49] image differencing and anomaly maps that we're going to create so i've also provided the link to the
[33:55] full list of guides and tutorials made available by the developers and this can be a really great place to kind of get
[34:00] started with geu or develop some of the knowledge that you've learned within this series okay so we're finished with the overview
[34:14] and we're going to go ahead and transition over to the javascript api for our activity in ge
[34:21] uh you'll want to use the link on this slide um to follow along in the javascript api um so you can either grab
[34:28] that from the slides pd or the pdf of slides slides or i believe it's gonna be posted in the
[34:34] chat if it hasn't been already so if you weren't able to sign up for a google earth engine account for whatever
[34:40] reason no worries um you can definitely follow along on screen um but if you want to explore the activities uh from
[34:46] the series later you'll need to make an account account okay so i'll just go ahead and move over
[34:52] to screen mirroring alright so hopefully you were all able to grab that link from the the pdf
[35:02] slides um or from the chat so that you can follow along i mean you just plug that url right into your browser um if
[35:09] you already have a google earth engine account you're already logged in um you should be all good to go um with the
[35:14] code for today um so we're just gonna go over a couple of the different parts of uh google earth engine and particularly
[35:23] this interface uh with the javascript api api um you'll probably remember a lot of this information um because we went over
[35:31] a quick overview in session one and then and brittany uh went over um an overview of everything in session
[35:37] two as well but we'll just go ahead and look at everything one more time all right oh my god
[35:51] there we go okay okay awesome so you'll notice within um the interface you have a couple of different
[36:00] windows windows um um the first being uh the one with the tab scripts docs and assets here
[36:06] and for scripts you can kind of see my my messy series of folders and scripts this is where you're going to organize
[36:12] all of your different codes and so this is basically like a file directory format where you can organize
[36:20] all the codes that you're working on it'll keep track of your imports and it's just a really good place to to
[36:26] keep track of everything um it's also where you can save your code so that you can share it later um
[36:33] things like that you can also access uh repositories from this window as well um those that are shared with you
[36:39] to get scripts from other people working in ge so docs is basically where we can filter for methods if
[36:48] you're looking for a certain function that you might be interested in for example say you wanted to clip
[36:55] a map to specific bounds you could type in in clip here and it basically just goes through some
[37:02] of the the functions that you can use for your own purposes um and this in this case it clips to an
[37:08] image eclipse an image to a geometry or feature so um if you're really kind of stumped on what function
[37:15] to use or you want to even go through a list of what's available in google earth engine
[37:20] engine um definitely take a look at this docs tab tab and then we also have our assets tab um which basically just
[37:29] shows all of the assets that we have uploaded in my case this is a lot of shape files that i've used in the past
[37:34] um just for my own purposes and you can also upload assets um that includes your own imagery um in geotiff
[37:41] format or a couple of other formats as well i mean you can also upload um table information things like shape
[37:51] files csv files of your own data okay and you'll remember this main code editor window which basically has all of the code that
[38:05] you'll be working on down here where we edit the code as well as any imports that are within your code here
[38:11] up top and this is things like geometries that we use to define our study areas or do clips or establish
[38:19] points within the code and you'll note that in the section too you can save your code here's the run button up
[38:27] here for when we want to run our code and you can also reset that which basically just brings it back to the
[38:32] beginning beginning and also some information about apps and so this get link button is particularly useful for any
[38:40] collaboration that you want to do that's basically the button that i just pressed to get this link for you all um it just
[38:45] provides a link of a snapshot of the code as is um so that you can share with
[38:50] anyone you might be interested in working with all right and the next window over here and we
[38:59] have our inspector tab which basically allows us to just click anywhere on a map that we say i've added to
[39:07] the map viewer um to see any metadata and information about the values of that layer and we also have the console
[39:15] which we use to print information about metadata and this is where our line graph is going to show up today
[39:21] it's where our the the time series gif that we create is going to be displayed as well
[39:27] and then we also have our tasks tab and you can see a variety of export functions uh
[39:33] attempting to work for our session today um you can see here i finally got this one to work for us
[39:40] and this is basically um any task that you've coded into your code editor um that needs to be externally confirmed so
[39:46] in this case when i was uh completing an export of a map um i coded that into the code editor and
[39:53] then it popped up here and then i was able to click run on the side and we'll
[39:56] we'll show this in more depth um as we go through the activity all right and you're all probably still familiar with
[40:05] the map viewer this is just where we view um all of the work that we're doing uh within the code editor we can add map
[40:11] layers here to visualize them uh we can explore the different layers that we calculate calculate um and we can also establish different
[40:18] geometries here um with different buttons so we could say say we wanted to create a new layer um that could either
[40:25] be a point where we could establish a point here um we can establish a line line um if that's if that's something that
[40:34] you find useful uh polygons as well as well as a rectangle and that's actually something that i use to establish our study area
[40:42] today so we'll take a look a look at that a little bit later okay actually i'm just going to trash that
[40:56] and so that's just me deleting a a geometry that i created to show you this example um
[41:01] we also have uh our search bar which is really useful for searching data sets um for example say you're interested in
[41:07] using sentinel imagery oops let's fix that sentinel imagery um you can see all the different sentinel data types here so you may be
[41:15] interested in working with sar data um you can click on that and it'll provide you with all of the
[41:20] information from the data catalog um to decide whether or not this is data you might want to use it has banned
[41:25] information it gives you information about the image properties um and then you can also kind of just
[41:31] copy and paste this snippet right here if you'd like to import the collection into your code editor
[41:38] okay all right so we'll go ahead and get started this is going to work the same as it did
[41:49] last time so everything is currently commented out um um in the code editor and we're just going
[41:57] to uncomment as we go through each line of the code so as a reminder you can either
[42:05] backspace these flash marks to uncomment code um or something that's probably a little bit easier for you would be to highlight
[42:13] code so we'll just go ahead and highlight highlight is this lines five and six so if you want to highlight that um on a
[42:22] windows machine you can use control slash to uncomment um i have a mac so i'm gonna use command slash
[42:28] and so you just want to use that control slash or command flash to uncomment everything that you've highlighted and
[42:34] if you do that again it just recommends the code all right so we'll go ahead and leave
[42:40] that uncommented and then we'll go ahead and get started with our import of landsat imagery so in this first variable that we're
[42:50] creating here in line five um we're establishing the variable um image collection um for our uses of a
[42:57] collection of imagery um in the work that we're going to be doing and when we just say
[43:02] uh variable image collection equals um this function here uh ee.image collection which then calls this landsat data set of surface
[43:12] reflectance that we're interested in and to give you some context about where this comes from we'll just do a quick copy paste search
[43:20] you don't need to do this long i think you can just look on the screen so we'll just search that data set
[43:26] we'll go ahead and click on it and we can see uh usgs land surface reflectance tier one
[43:33] and so we got this information here i mean we'll come back to this briefly um um when we look at some of the band
[43:40] information that we're interested in okay so in this this first variable establishment where we're looking at creating image
[43:50] collection and so as i mentioned uh what we're doing for that is calling in this landsat surface reflectance data set and
[43:57] then we're using the dot filter bounds function on line 6 to filter the bounds to our study area
[44:04] so study area is just a geometry that you can see up here up top of our study
[44:10] area um it's a polygon that i've created um just so that we can spatially filter our data and create some maps
[44:19] and so i'll just show you this real quick i used just the the rectangle draw function right here
[44:25] we'll just take a look at our study area it's basically just a rectangle around uh region of interest in this case it's
[44:30] on the border of brazil and bolivia i mean we're going to be looking at some changes in vegetation in the amazon
[44:43] so you can kind of create those polygons for whatever region of interest you might have um you
[44:48] can also filter to a shape file like we did in the last session if that's something that is of interest to you
[44:57] all right so we'll go ahead and uncomment lines 8 through 20. and so this is where we're going to do
[45:11] some filtering uh for quality of pixels i'm using a function you might remember this uh similar method from
[45:18] uh last session we're using kind of the same uh cloud masking technique um with the surface reflectance data so
[45:25] just to give you a little bit more context we're using uh qa pixels within this data set
[45:34] so we can take a look at the bands so surface reflectance data is processed to level two and with that processing
[45:42] comes comes a series of bands that are used for quality control and so we'll look here we have a lot of
[45:49] reflectance bands that you might already be familiar with um that are just different different uh portions of the electromagnetic
[45:55] spectrum spectrum and then we have this pixel qa band which we use to mask out things like
[46:03] uh cloud shadow cloud those are the things we're most interested in in this case um so you can
[46:09] see here in pixel qa bit mask you have different numbered bits uh corresponding to the type of um quality interference
[46:18] so we're interested in bits three for cloud shadow and bit five for cloud and so we're gonna use these parts of
[46:26] the the pixel qa band to filter imagery for clouds and cloud shadow shadow okay so to do this we'll start in line eight
[46:40] so we create a function uh called mask l8sr um and we're creating that mask for image collection
[46:48] which we've we've just established up here and so what we're going to do is first create a
[46:56] variable called shadow cloud bitmask and that's here in line nine and so for this uh we use the bitwise shift left
[47:07] operator i mean we select pixels um that have a pixel qa value of three as you can see here
[47:16] and three corresponds to pixels that have cloud shadow in them um and then we kind of do the same thing uh for cloud's
[47:24] bitmask bitmask looking specifically at clouds so we use that shift operator again to select pixels with a 5 which in this
[47:34] case corresponds to pixels with clouds in them so we're basically just selecting those pixels that have cloud shadow in them with cloud shadow
[47:43] bit mask and uh clouds within them which is clouds bit mask and once we establish those variables
[47:52] um we create a variable qa which just selects the band within our image collection that we'll be working
[48:00] in which is that pixel qa band that we we looked at um in the data catalog right
[48:12] right so we create another variable mask which uses uh that variable q a um to use the function uh bitwise and
[48:25] basically selecting um the bit information that we've collected for cloud shadow in a cloud shadow cloud shadow bitmask
[48:33] and and putting that equal to zero um which will take them out of our imagery imagery and we do the same thing with this and
[48:43] function function doing exactly the same process for our clouds bit mask so we're doing here by equaling these to zero
[48:52] is essentially taking them out of our imagery imagery providing us with images that have clear conditions and
[49:00] should hopefully not be influenced by cloud shadow or clouds and so within the function we update our mask
[49:11] with this new mask information um um and then we return the mask image by ten thousand uh dividing by ten thousand
[49:21] uh to scale um this uh for reflectance and then we select the bands that we're interested in we've just gone ahead and
[49:31] selected um a number of useful bands within uh the landsat data some of which we won't be using for this activity
[49:39] um and then we copy the properties from our image collection so that we can prefer preserve this
[49:47] system time start property that we'll use to filter by time so hopefully that was a useful useful overview of what we're doing in lines 8
[49:58] through 20. um so with that function that we've established that mask l8 sr we're then able to use that to filter
[50:08] clouds and cloud shadow from our image collection which is really useful for maintaining maintaining high quality calculations and
[50:18] transformations of that data all right so we'll go ahead and move on to the next section so you want to
[50:29] uncomment lines 25 through through [Music] [Music] there we go lines lines what was that line 25 through 38 just as
[50:42] a reminder that's command slash or control slash and so in this step of the code we're making a list of years
[50:53] so that we can filter the collection based off of a specific year time scale and so for our purposes we're interested in say
[51:04] summer imagery so we'll be filtering um each year of landsat data um from uh 2014 to 2020 since we're only
[51:14] working with landsat 8 um and our hope is to just pick out the summer months of that and basically
[51:20] reduce that to a median or take the median of all of those pixels over that time period
[51:28] so our first step in doing this on line 25 is establishing the variable step list list which uses this list dot sequence
[51:35] function um to essentially um um create a list that includes all of the years that we're interested in working
[51:42] with so that's 2014 to 2020. i mean you'll note that the landsat 8 time series starts in
[51:48] 2013. 2013 but we went ahead and just capped it at those seven years of landsat 8 data
[51:56] so we'll create another variable which will allow us to filter filter the image collection that we established earlier
[52:03] on on here at the beginning of our code so in line 27 we use var filter collection
[52:11] collection and we make that equal to step list which is the list that we created here to call years 2014 to 2020
[52:20] and then we use that information to map a function across our collection and so in this case we're creating a function that's
[52:29] going to do a lot of things for us it's going to filter data seasonally providing us with a
[52:36] median image of landsat data for summer months within each of our target years and so we'll take a closer look at this
[52:48] function here and so the function itself is filtering for start date and end date which we establish here i mean those are just
[52:59] dates from uh year month day and in our case we're not interested in necessarily establishing a specific year since we're
[53:05] already filtering for those with a step list and year and so we're interested in just getting all of the data from may 1st to
[53:20] september 15th for each year of landsat data that we're interested in and so we establish these variables
[53:28] start date and end date oops start date and end date um to do this and then we create another variable
[53:37] that's composite i which then uses some of these variables that we've established in the function function to then apply some of this information
[53:47] to to our image collection so we note within the entire establishment of variable composite i um we're calling in the image collection
[53:58] and we're filtering by date we established start date and end date up here in lines 28 and 29
[54:05] but in line 30 um we're doing that filter date function start date and date we're also applying with the dot map
[54:13] function function our mask l8 sr which is if you remember our mask from earlier which is going to mask out
[54:23] uh cloud shadow and uh clouds themselves within all of the landsat pixels that we're using and so once that masking is complete
[54:33] we're going to have the function reduce each of the image collections so that's all of the imagery that we have
[54:42] from from may 1st to september 15th in each of the years we're going to have the function
[54:49] calculate a median value for all of that imagery which provides us with this nice median image from a single season
[54:57] within a year and then we're going to make sure to use the dot set function um mentioning the system time start
[55:05] property and start date so that we're able to filter our image collection using this time information now we're going to use the return
[55:13] function on composite i to apply this function awesome so in line 37 we then establish the variable yearly
[55:32] composites composites which is equal to the image collection um filter collection and so you'll note here we establish
[55:41] that variable here and that's basically just our image collection filtered based off of the parameters that we've given it here in this filter
[55:49] function um from lines 27 to 35 and so these yearly composites are masked for clouds and cloud shadow
[56:00] they're seasonal median images for summer and years from 2014 to 2020 and we've also made sure to preserve
[56:10] some of the properties that we'll need to use to filter those images from the image collection later on
[56:18] and we just have a print function here on line 38 which is going to give us a
[56:21] quick look at uh the composites that we created created so you're going to want to go ahead and
[56:27] click well actually let me make sure your console tab is open let's see and then go ahead and run your imagery
[56:37] or sorry run your code all right so let's take a quick look at this this so this is just what we printed here in
[56:49] line 38 um it basically lists it as an image collection so we have seven elements which is what we were looking for that's
[56:58] uh seven median images from 2014 to 2020 only selecting for summer months and you'll note all of these
[57:09] images are sorted by the index property which is just from zero to six and you can see that within each of
[57:16] these images there are nine bands and those are just all the bands that are kind of available to us
[57:23] readily within landsat and and if there's any other metadata that you might be interested in you can take a look here and you can
[57:31] also see that when you're when you're working with the bands uh it's uh these are how you refer to them in
[57:36] the code so if you want to work with band 1 band 2 band 3 this is how you
[57:40] would include that within your code so this is just a quick check to make sure that our filtering and compositing
[57:46] worked well and so with that we have successfully created a series of median composites for the years of interest that we have
[57:56] which are 2014 to 2020. okay okay so within this next step we'll go ahead and look at line 40
[58:11] and we're going to be adding an enhanced vegetation index function and we're going to apply it across our
[58:16] image collection you might remember the enhanced vegetation index from our first gee activity and the enhanced vegetation index is
[58:26] kind of just another vegetation index that you can use in addition to something like ndvi the reason that we're using it in this case
[58:33] is that it's usually a little bit better at working in densely vegetated areas like somewhere um in like say uh
[58:40] forested areas in the amazon like we'll be working with and so i've gone ahead and included the
[58:47] evi calculation here and so you'll note there's a number of constants here but the band information that the evi is
[58:56] using is uh the near infrared the red um as well as the blue bands within this calculation
[59:06] all right so let's go ahead and uncomment lines 42 oops let me i like that better lines 42 to 51.
[59:20] so we start by establishing a function for calculating our evi which is basically what this function is doing
[59:26] right here so we create the variable evi image so that we can select for the bands that
[59:35] we're interested in using for this calculation so image dot select is used to call the bands that are already
[59:46] available within the collection and we're interested in bands five four and two two which in this case are the near infrared
[59:53] red and blue and then we go ahead and name them um according to uh the information that
[1:00:00] we have here in our equation and then once we've established that we create another variable and then we're just going to go ahead
[1:00:08] and name evi image again um because we won't necessarily need to use this variable again so we'll just go ahead
[1:00:13] and rename it and then we'll establish an expression based off of this band information that we've already collected
[1:00:23] um so that we can calculate our edi so you'll note here that when you're using the dot expression function
[1:00:30] you can write out that uh equation in a way that's a lot less complicated than some of the
[1:00:35] mathematical operators in google earth engine so here in line 45 you can see on that we have the equation written out
[1:00:43] i'm similar to how it is in uh line 41. um this is just an easier way to
[1:00:48] complete some of your calculations um i i personally prefer using expressions like this when i'm doing um more
[1:00:54] complicated raster calculations just because um some of the mathematical operators can get like a little confusing and and this way just ends up
[1:01:01] being a little bit more clear to anyone who might be looking at your code all right so in order for google earth engine to
[1:01:12] know which bands to use uh for this calculation um we're establishing essentially all of the variables within um our equation here
[1:01:21] we're saying that near in the expression equals our selected band of of near infrared that we established earlier on in the
[1:01:30] function in line 43 and then we're just doing the same for red and blue as well and then we're renaming this function
[1:01:38] edi edi because this function is going to map over all of our yearly composites and then we're turning
[1:01:48] that as image.adbands evi so this is what's going to add an edi band to each of our yearly composites
[1:01:57] across the image collection and so we'll go ahead and uncomment lines 53 to oops there we go we'll go ahead and uncomment
[1:02:13] lines 53-55 and so as i mentioned this is just where we're going to add the function the edi function that
[1:02:24] we created i'm going to apply it to our yearly composites image collection and so what this function is doing is
[1:02:30] essentially adding that evi band i mean making sure all of the appropriate or it's actually adding the um
[1:02:36] evi evi calculations to the band that we added awesome awesome and so we'll go ahead and uncomment line
[1:02:46] 57 57 and you know you can you can also do this by just backspacing on those slashes
[1:02:54] and we're just going to do a simple print function of yearly composites after we've added um that evi band i'm
[1:03:00] just to take a look at uh what that looks like so we'll go ahead and click run
[1:03:08] awesome so we'll take a look at some of this information here let's see type features so there's still um seven
[1:03:17] elements within the image collection uh but you'll note that instead of nine bands like we had previously and we now
[1:03:24] have ten bands and this includes um the evi band added here at the end with the index value nine
[1:03:34] and so the the nice thing about google earth engine is we don't necessarily have to refer to this band um by that
[1:03:39] index value of nine we can just use its list name to call it in the future all right so i'll just collapse that
[1:03:52] okay okay so go ahead and move on to the next section whoops so we're going to want to
[1:04:02] uncomment line 60 and so with this line we're establishing the variable edi collection and we're having that equal to uh the
[1:04:13] selected band within yearly composites of edi so essentially what we're doing with this is making an image collection
[1:04:20] called evi collection um that includes only the evi band for each of the yearly composites and that'll just
[1:04:27] make make it easier for us to work with that edi band as we continue through the code
[1:04:38] okay so we'll go ahead and uncomment lines 63 to 67. whoops whoops actually no that's 64 to 67. you can
[1:04:56] just go ahead and add uh the comment uh slashes back in there just type two slashes into 63 uh line 63 to get that
[1:05:03] out of there and so in line 64 um this is our first example of essentially just establishing
[1:05:10] a variable and in this case var uh y2014 for year 2014 um that will allow us to pull out just
[1:05:19] the 2014 image from the edi collection um so that we can uh create a map of just the the simple evi calculated um
[1:05:27] for 2014. so you'll see here where we're using the filter date function with the edi collection to just filter
[1:05:37] for for dates in 2014 there's only one image within the collection that has uh 2014 in it but we go ahead and cl select for
[1:05:46] that first image which is just the only 2014 image that we have and then we clip that
[1:05:52] to our study area and so it's important to note that in this edi collection we only have that
[1:05:59] evi band so when we go to map this it's just going to uh go ahead and show us the edi
[1:06:07] so with that i've got quite a bit of lines for this to add every map to the map viewer so you can go ahead
[1:06:14] and uncomment lines 68 to 82 um and that gets us our filtering of the evi collection for dates from 2015
[1:06:26] uh to 2018. i'm doing the same thing selecting that that that image per year from the image collection
[1:06:35] clipping to the study area like you can see here on line 82 and then we're just going to finish up
[1:06:41] this process for for uh 2019 and 2020. so we'll go ahead and uncomment uh lines 84 to 92.
[1:06:51] remember that's control slash or command slash to uncomment all right and so now that we have all of our we
[1:07:00] have variables uh kind of picking out the evi uh band from each of our years and let's take a look
[1:07:07] um at one of those years we'll go ahead and take a look at y20 which is just our 2020 imagery
[1:07:14] go ahead and click run all right so we have that as an image here here and we'll take a look at 2020 composite
[1:07:25] image see so as we know there's only one band so this was a successful um kind of uh
[1:07:33] pluck out of our edi collection taking only um a single year so that we can then map those individually
[1:07:43] great so i'll go ahead and collapse that and then we're this next step is going to be adding maps to our map viewer of
[1:07:51] each of the evi calculations per year so we'll go ahead and uncomment lines 94 to 102 and in line 94 we're just creating a
[1:08:06] variable that's going to set the parameters for our mapping so with that we create evi params just
[1:08:13] for uh the parameters that we're interested in using to display the data so you have a min and a max value as
[1:08:19] well as a palette we're keeping the palette very simple um this time around um with just white and green as our
[1:08:26] palette colors and then to add all of the map layers i'm sure there's a different loop way
[1:08:31] you could do this but i think for our purposes purposes of just understanding how this works you
[1:08:35] essentially use the same function for each year so we're using the map.addlayer function we're saying we want to take the evi
[1:08:44] band band from y 2014 and then we want to display that map using the evi params variable that we we
[1:08:52] talked about here in line 94 and then we're basically just naming that layer with this section here so as you can see
[1:08:59] i've made it 2014 to 2020 evi and so let's go ahead and run this now this is quite a bit of processing to
[1:09:11] do so don't don't be wary if it takes a little while it's actually loading pretty quickly just nice
[1:09:17] and so these are all of our evi maps per year populating here in the map viewer so we'll go ahead and let those load
[1:09:26] fully fully and so you can see here in the map viewer that displays in this layers tab
[1:09:33] and you can click on or off each of the layers layers the one at the top is the one that's
[1:09:38] going to be shown on your screen so as we click through these we'll work our way down to 2014
[1:09:46] and we'll get a look at that 2014 evi so we're going to do a quick zoom in
[1:09:52] and we're going to take a little bit closer of a look at our edi results this is kind of a simple version of the
[1:10:00] the visual analysis that we mentioned before before but we'll go ahead and just keep 2014 and as we click on new
[1:10:11] years years we can see locations of change we can see areas that have more or less vegetation for whatever reason
[1:10:21] and you can see that a lot of that change isn't necessarily abrupt a lot of it is gradual
[1:10:26] as we kind of click through each of these images to look at them and you can do some of this exploration
[1:10:32] on your own um looking at each of the the maps that we've added um just to to see how the years vary
[1:10:39] from one another and then we'll go ahead and finish off with 20 20. so i'm gonna for the purposes of of seeing that
[1:10:49] change from 2014 to 2020 i'm just going to click off 2019 2019 sorry 2015-2019 here with the transparency slider um we
[1:11:00] can can make the 20 20 layer more transparent and it takes a little bit to load sometimes
[1:11:07] sometimes but but we can see here the change isn't necessarily abrupt but we note different areas where we
[1:11:16] have seen change so you can see that with something like this with a visual analysis of change we do notice
[1:11:22] changes kind of throughout the image we can we can compare different years visually but this isn't necessarily where we would want to stop
[1:11:30] this is really good data visualization we're taking a time series of maps i mean just displaying evi over a time
[1:11:37] series and which can be really great for looking at change on a year-to-year basis basis but it's not necessarily the best for
[1:11:43] identifying a change between distinct dates or changes from an average evi things like that but since we have all of these maps
[1:11:52] i want to go ahead and show you how to export a map to drive um and any map that you export will at default
[1:12:02] export to um or export as a tiff file which is something that's pretty easy to use in
[1:12:08] most gis platforms and something that's pretty appropriate for evi as well so in this case we only
[1:12:14] have one band and it exists on a continuous continuous value scale so that's something that is really easy to work with and to format
[1:12:21] and just kind of import to whatever gis you might want to and so we're going to go ahead and
[1:12:26] uncomment lines 105 through 107. and we're going to establish the variable why 2014 section so you'll notice
[1:12:39] that in my tasks window i had a couple of my exports i'm just not work they were just
[1:12:44] a little too large um there are other ways that you can change change the properties of the image you can make
[1:12:49] them lower resolution so they export better but i wanted to show you just a way of you know segmenting um one of
[1:12:56] your data layers so that you can preserve that 30 meter pixel resolution that you get from landsat
[1:13:03] landsat so when we establish this variable uh y2014 section in line 105 and we make that equal to our edi collection
[1:13:11] filtered for 2014. that's just me reestablishing that um that y2014 value for our own purposes um so that we can use it to just export a
[1:13:21] section of the full data layer and so we'll uncomment lines 109 through 114 and here you can see the export function
[1:13:34] is being used to export uh the image to drive and so we select the image here in
[1:13:39] line 1010 and sorry 110. um we give it a description which is basically just what it's going to name
[1:13:46] it and we give a scale which we've selected is 30 i'm for the 30 meter resolution of landsat
[1:13:51] pixels and then we set the max pixels this is actually kind of a max pixel value that you can
[1:13:57] that that ge will export ads so if you have anything higher than this um you'll likely have an export issue but let's go
[1:14:05] ahead and click run to run that and you'll see uh the export doesn't pop up in the console it pops up in tasks
[1:14:17] and you can go ahead and click run once you're ready for that export to happen so i've already i've already done this
[1:14:25] once once this in this case with the function we used it'll export to your google drive and so you can have your task name which
[1:14:34] we already established in the code this is where you can change um any resolution that you might want to
[1:14:41] so say you have a really large landsat based map at 30 meter resolution um you can always adjust the resolution here um
[1:14:49] if you want to export the whole thing and you and you don't care about that that loss of resolution but we've
[1:14:54] established that 30 meter pixel um here for landsat and you can also change that to where you would like
[1:15:02] uh to export it here we've selected drive already so we're just going to leave that we can always put that in
[1:15:06] cloud storage or you can actually just export it as an earth engine asset automatically automatically you can establish your drive folder here
[1:15:15] and you can also rename that file if you would like to and then you just have to click run
[1:15:21] to go ahead and export that image and so for that i should have probably mentioned this earlier but for that
[1:15:30] we're just using the the clip section so if you'll see here in line 107 i've just clipped uh this 2014
[1:15:40] edi layer um to this geometry section that you can see here on the map viewer um i really just did this so that we
[1:15:47] could get a successful export so once you run this export it should be successful since the image area is small
[1:15:52] enough it'll still be at 30 meter pixels i mean you can kind of explore that exported tiff file um yourself and say
[1:15:59] something like arcgis or qgis at your own leisure okay go ahead and turn this geometry off all right
[1:16:12] so the next thing that we want to do um something that we mentioned um uh within our presentation
[1:16:18] is is create a line chart to display evi time series for selected points and then we're going to display that
[1:16:26] chart in the console over here on the right of the screen so go ahead and uncomment lines 118 to 124.
[1:16:39] so here we're establishing the variable chart chart and then we're using uh the ui.chart.image.series function and essentially what this is doing is
[1:16:52] uh creating a function that will allow us to display a chart of the image over a time series
[1:16:58] um according to whatever image collection we select so so to filter this i've i've gone ahead and
[1:17:06] put our image collection here in line 119 i'm at the evi selection or sorry edi collection uh selecting for
[1:17:14] that evi band because we're interested in a time series of the enhanced vegetation index in line 20.
[1:17:22] we establish the region as roi and this is just a point that i have put onto the map using this this point tool
[1:17:29] right here it's in my geometry imports it should be in yours too you can turn it on here
[1:17:34] roi is just a point that i've selected i'm within our study area that we would like to examine uh
[1:17:40] the time series of and so this will give us us a single pixel perspective on change i'm at our selected point
[1:17:48] so we're selecting the scale at 30 because we're using landsat data and then using the set options function
[1:17:55] to just title that chart uh 0.1 evi over time time and then when we go to view that chart
[1:18:02] um in line 124 we'll just print the chart uh the the variable that we've established up here
[1:18:09] in line 118 and that will show us a time series of evi at that single pixel so i'm going to go ahead and recommend
[1:18:18] that you uncomment lines 126 to 132 as well this is just the exact same code but for
[1:18:26] a different point i wanted to show you a couple of different uh pixels with this um and that's with our roi2
[1:18:33] and that geometry can be seen we might have to zoom out there we go and that geometry can be
[1:18:43] seen lower within the study area so we have one point in uh priscilla and another in bolivia
[1:18:52] so so once you've uncommented that lines 126 132 we can go ahead and click run right right which will give us
[1:19:12] a time series at each of the points that we've established so you can see here we have
[1:19:19] the edi value on the y-axis and then our our time scale on the x-axis so you'll note that evi changes over
[1:19:29] time at this pixel and you can see that time scale going from 2014 to 2020. so you'll note that in this case
[1:19:40] we see a decrease in evi which we would expect to represent some sort of vegetation degradation or change in uh development
[1:19:49] or cover type in point two we have a different curve um which has some less abrupt changes in edi over
[1:19:57] time time um represented here by a curve that's not quite as abrupt as the one above and this is really to just show you how
[1:20:06] you can use google earth engine to kind of inspect a time series of of any parameter that you're interested in um
[1:20:12] in google earth engine and you can create these plots that help you visualize that change over time and then
[1:20:18] you can also click that button right there on each of the charts to blow that up into a different
[1:20:23] [Music] [Music] window and then you can also download it as a csv svg or even download it as a png if
[1:20:31] you're just interested in displaying the graph graph so it's a really easy way to go ahead and
[1:20:36] and show some of your time series information awesome all right and so we'll go ahead and move on to
[1:20:47] something that's a that's a little more um um fun we're going to create a time series gif of the edi maps uh this can be a
[1:20:53] really engaging way to display some of your data um i can tell you how many times uh partners that we've worked with
[1:20:59] have been interested in in these really simple visualizations that just uh provide us with like a dynamic way of
[1:21:05] looking at some of the changes that we see over time um so we'll go ahead and uncomment lines
[1:21:10] 137 through 145. oops oops actually and make sure you comment out line 139 i just want to uncomment
[1:21:21] everything um but we'll go ahead and look back at line 137 so we'll establish the variable text
[1:21:30] which is essentially us just using the require function to call in a package created by another scientist
[1:21:39] who makes all of his uh packages available available on github and we're essentially calling in this package so that we can use
[1:21:47] it to uh visualize um the dates on each of our gif images so we call in this package um so that
[1:21:55] we're able um to provide text with each of the the different images that go into the gif so we'll have kind of a counter
[1:22:01] that goes through 2014 to 2020 using this package so the first thing we want to do in line
[1:22:08] 40 is to create a year property and this property is what we're going to use to display that text
[1:22:14] on the screen and so we create the variable year names in line 140 and then we use that list
[1:22:20] function again to create a list of years that we would like to display in our gif image
[1:22:27] image and then we create another variable called evi with year which is basically us just mapping a function over the edi collection
[1:22:39] that pulls in these year titles so that they can be a property of each of the the images with an edi collection
[1:22:49] so basically what this function is doing is using dot map to map the function over every image within
[1:22:56] the edi collection assigning it to a specific year so that we can filter for that and use it for the text in our
[1:23:03] gif gif so go ahead and uncomment line 147 and we'll go ahead and run this whoops there we go
[1:23:17] we'll scroll below our charts so we're going to look at the edi with year collection you'll note it still has
[1:23:27] seven elements which is all seven of our edi banned images but then you'll note if we look further
[1:23:33] in at the properties we now have this year property which is listed as 2020. and that just is is useful for us in
[1:23:41] filtering the data and like i said the the package that we're using requires this type of property um to name it um
[1:23:48] a specific year on the screen and so we'll go on to defining our gift visualization uh parameters
[1:23:56] so go ahead and uncomment lines 150 through through 155 155 and we're going to establish a series of
[1:24:05] parameters using the variable gif params and basically what we're doing with this is filtering for a region
[1:24:11] basically basically the bounds of the gif will exist within our study area i mean they'll basically be clipped to
[1:24:18] the study area dimensions which essentially just changes the size of the gif itself and you can kind of play
[1:24:24] around with this pick whatever works best for you here in line 152 and in line 153 we select the frames per
[1:24:31] second and so this is how quickly the gif gif will tick through all of the different uh images it's given
[1:24:40] so for our purposes we're interested in a quick gif that will show two frames per second so this is two maps shown per
[1:24:46] second within the gif and then for the format we're just establishing it as gif so to label our images which is why we
[1:24:58] called in that package we're going to go ahead and uncomment lines 158 to 164. and we're going to establish the
[1:25:08] variable annotations i mean this is basically just so that we can can include text um on each of the images
[1:25:16] that the gif will tick through i'm basically just providing year so that year text will exist in position
[1:25:23] bottom which basically just means it'll be at the bottom of the gif i mean you can play around with offset and margin
[1:25:28] um to decide exactly what the placement of that text is uh per image within the gif um we've just
[1:25:35] included some presets here and then this is the property that you're using to annotate which is year
[1:25:43] so so you'll remember that we created uh that property within each of um our edi images and we'll use that property to uh
[1:25:52] display display uh your information on each of the images that the gif will go through through and then for the scale
[1:26:01] um um this is just a a basic uh scaling section that you can also kind of tool
[1:26:05] around with it changes um some of the size and positioning of of the text that you're interested in including
[1:26:13] all right so with that we'll go ahead and map all of these parameters and functions that we've established
[1:26:21] for our gif over our time series so go ahead and uncomment lines 168 to 169 169 and we're going to create the variable
[1:26:32] time series gif which will basically um be us using that edi with year collection um which essentially is just our edi
[1:26:41] image collection but with this new uh year property and then we're gonna map our function over it which is essentially
[1:26:53] the text function that we've imported from the package as well as defined with the parameters of our edi maps as well as our study
[1:27:03] area um also selecting for those annotations that we want and so it's important to note that this
[1:27:09] annotate image function is uh written by the the provider of this package um so we're essentially calling that package
[1:27:16] which we established way at the beginning of our gift code right right oops here we go right here in line 137
[1:27:26] um this is just us calling on the package that we've imported with var dot sorry with var text
[1:27:33] okay so back to line 169 and so with that function we're then mapping those annotations over each of
[1:27:40] our gif images okay and we'll go ahead and print print the gif url to the console and basically what this does is um
[1:27:52] select for our time series gif uh the dot get video thumb url um basically calls it as a gif image and then we'll
[1:28:01] use our gif params variable to establish the parameters of that git and so this will spit out a url at us but we also
[1:28:08] want to render that gif in the console so in line 176 go ahead and uncomment and we'll print
[1:28:18] a ui thumbnail of our time series gif with gif parameters so let's go ahead and run that
[1:28:36] i'll scroll down to everything that we've printed in the console it'll take a little while for the
[1:28:42] thumbnail to generate and as you can see it's taking the maps a little bit of time as well
[1:28:47] keep in mind we're doing a lot of processing here so these things are going to take a little bit of time
[1:28:58] and so we'll give that a second there we go and so here you can see our gif
[1:29:05] displaying each of our evi maps from 2014 to 2020 noting change in specific areas and that's just a really cool way to to
[1:29:17] display some of your time series maps you can also click on this link here that we printed
[1:29:24] and it will give you your gif in another window and one really nice thing about this too is that you can just right
[1:29:28] click and then save image as and when you save images make sure you're just saving it as a gif image and then you'll
[1:29:33] have the gif just downloaded on your computer for use kind of anywhere you need it okay okay so now that we've gone through some of
[1:29:42] our our visualizations of uh time series we're gonna move on to uh the image differencing that we
[1:29:50] discussed earlier um for change detection detection so we're going to start off with a simple image difference between uh 2020
[1:29:58] sorry 29 2014 and 2020. so uncomment line 179 and so for this we're creating the variable simple image diff
[1:30:10] which equals our year 2014 edi subtracted subtracted by year 2020 and this is one of the mathematical operators within google
[1:30:21] earth engine dot subtract um so we just used that pretty easily to subtract the 2020 image from the 2014 image and this is just
[1:30:32] subtracting that evi band and so we'll go ahead and establish our visualization parameters for that so we'll start with var diff params um
[1:30:48] where we establish a min a max as well as a palette we're going to keep it pretty simple here again
[1:30:55] uh with green yellow and red and then we're going to add the map layer layer to the map
[1:31:03] using the map.ad layer function so we're mapping simple image difference applying the difference parameters and then just titling it here 2014 2020
[1:31:13] image difference and so we're not going to quite hit run yet we're going to go ahead and
[1:31:18] uncomment uncomment lines lines uh 185 through 188 and in line 1 185 we're going to establish uh the year mean
[1:31:32] uh which is us calculating a mean over over uh the entire evi collection so basically what we're doing here is
[1:31:39] calling in the edi collection and then just using dot mean uh with empty parentheses um to reduce the entire edi
[1:31:47] collection to a mean which will result in a mean evi image labeled y mean and so line 186
[1:31:57] we'll establish the variable average image diff which is going to allow us to subtract 2020 2020 from the mean of all the years put
[1:32:07] together together so this is another interesting way to look at change detection looking at how one year differs from the average of all
[1:32:16] of your time series i mean it can be a really good interesting way to detect change i would also mention that you'd
[1:32:21] probably want like a few more years than we have here um we're just showing you how some of these functions work in a
[1:32:26] simplistic way um but kind of the more years you can have in your in your average of whatever
[1:32:31] parameter you're looking at the better so in line 188 we're just going to add that to the map as well
[1:32:39] so that's our average image difference with the difference parameters i mean we're going to title that 2020 difference from average
[1:32:48] so we'll go ahead and run these at this point we're asking cooler attention to do quite a bit of
[1:32:56] processing so um don't be afraid of things take a little bit longer all right i'm just going to really quickly turn
[1:33:12] off off these geometry points in the viewer all right so you can see here we have first our difference from average but
[1:33:20] first we're going to take a look at the 2014-2020 image difference and we're going to zoom in
[1:33:26] to look at areas of change in evi between 2014 and 2020. so it's important to note that when you
[1:33:34] zoom in and out that's going to cause each of the layers to reload and sometimes recalculate um so it might
[1:33:40] take a little bit of time we can actually go ahead and take these off off so they're not taking up any of the
[1:33:46] processing power awesome so this first difference image is just our difference uh from 2014 to 2020 and you can see here
[1:33:58] um areas in red typically account for differences that indicate a decrease in edi whereas uh the opposite is true for green i
[1:34:09] believe so we can see here various uh locations of change uh throughout the map map um um they're not quite as drastic as you
[1:34:17] might expect if you were just doing a visual inspection um so it's really good to do this kind of image differencing to
[1:34:22] get a better perspective on actual change change and then we'll go ahead and look at our 2020 difference from average image
[1:34:29] so this is just the difference of our 2020 evi from an average of all of the evis from
[1:34:35] 2014 um to 2020. you can see it varies even less from the average and there's less change from
[1:34:43] that average as well which we would kind of expect when looking at an average as opposed to
[1:34:49] a single date and you can kind of zoom around look at these areas of change and do some exploring of these data
[1:34:58] layers yourself as well and so for the last thing that we're going to do you know we're running up
[1:35:02] close on time we're going to complete one more type of change detection visualization so go ahead and uncomment lines 192
[1:35:16] to 202 and so what we're doing here is a standard anomalies analysis or z-score anomaly analysis um and the
[1:35:27] first thing that we have to do for that is calculate the standard deviation across the evi collection because that's
[1:35:33] one of the other um pieces we're going to need to calculate this z-score so you'll note here i've i've included
[1:35:41] the formula for the z-score it's a single year minus the mean of all the years and then divided by the standard
[1:35:48] deviation of all the years and so this is a really valuable way of looking at anomaly analysis because uh
[1:35:55] the value of a z-score or the standard anomaly um can tell you how many standard deviations you are away from the mean
[1:36:03] and if a z-score is equal to zero um it's on the mean a positive z-score indicates uh
[1:36:10] that the raw score is higher than the mean average and a negative z-score reveals the raw score is below the mean
[1:36:16] average so this tells you how your change varies from the mean whether it's the value is higher than the mean or
[1:36:24] lower than the mean so we'll go ahead and start in line 192 with var standard image which is where
[1:36:33] we'll just calculate the standard deviation and we're basically using these functions here uh calling in the evi
[1:36:40] collection and then reducing by standard deviation to calculate our standard deviation and then in line 193 um i've labeled this as anomaly 2020 um
[1:36:52] and i've included um these variables at two year time steps so we're starting at 2014 here on line
[1:36:59] 196 um and then going to 2016 2018 and 2020 2020 and so if you look at the
[1:37:08] mathematical operators in line 193 you can see that we're subtracting the 2020 image edi uh by the mean of all the years put
[1:37:19] together and then we're dividing by the standard deviation of all of the images images and so we complete this calculation um
[1:37:29] three more times in 194 195 and 196 for different years and then we can go ahead and
[1:37:40] visualize uh this type of anomaly analysis um on our maps so we start with 198 establishing the
[1:37:47] parameters that we want to use to map these we have a min and a max and we kept the palette
[1:37:53] simple once again with just red yellow and green red would typically indicate negative change yellow would be
[1:38:01] closeness to say the zero or closeness to the mean and green is higher than that mean value
[1:38:09] and then we'll use the map.addlayer function to add each of these um um anomaly analyses for 2014 to 2020
[1:38:19] and we do this by calling each of the variables that we've established up here previously previously using our anam params that we've
[1:38:29] established in line 198 and then just naming each layer uh 2020 anomaly 2018 anomaly and and so forth
[1:38:38] so we'll go ahead and run that and like i did before i'm probably going to click off some of these edi images
[1:38:57] just to make the loading a little bit easier this this there we go so we have our anomaly images from
[1:39:09] 2014 to 2020 and basically what these are showing is variation from the mean of all of the images
[1:39:16] in evi per each of the years we've selected so you'll note that uh there's anomalies throughout 2014 it varies from the mean
[1:39:27] it's usually uh more positive in terms of edi it looks like which would indicate that it has
[1:39:34] vegetation presence at these green areas that might not exist quite so much in the uh mean image and then as we click through
[1:39:43] we can see how this changes per year 2016 has quite a bit of variation from the mean remember that that variation is
[1:39:49] represented by the red and the green and then 2018 a little bit less variation than than 2016 from the mean
[1:39:58] and then 2020 quite a bit of variation from the mean and so we can also compare this to say
[1:40:06] uh our 2020 edi map so if we want to take a look at the 2020 anomaly and how that
[1:40:12] matches up with the measure of evi in this area we can do some interesting overlays that can show us
[1:40:18] areas that may have been degraded or had decreases in edi um solely in 2020 as opposed to
[1:40:27] um in other years so it's gonna be a really good way to examine um the location of change um the
[1:40:34] amount of that change as well and we have a static number of pixels within each of these um
[1:40:40] different images within all of our anomaly analysis and so i hope that that is a good intro
[1:40:46] individualizing change detection for you in uh ge using mostly uh mathematical operators um image differencing um in
[1:40:56] ways of just looking at variation like we did here with um our our z-score anomaly analysis with that um that kind of wraps up our
[1:41:06] code demo i hope that you were able to follow along i hope that some of this was helpful
[1:41:10] um we know that this is a little bit of a simple example just using one band of
[1:41:14] a vegetation index um but we were hoping that that would uh allow you to follow along better with all of the different
[1:41:20] things that we've done within the code uh because we created our uh vegetation map our edi maps we
[1:41:27] created um anomaly maps difference to image maps um we showed you how to plot a time series of a single pixel in a
[1:41:34] chart chart and then we also showed you how to create that gif for communicating some of your time
[1:41:39] series analysis as well so so hopefully you all found this helpful and we'll go ahead and transition back
[1:41:47] to the slides for finishing off the session okay um so now that we've finished our activity let's go over a quick summary
[1:42:03] of what we learned today to start with uh we went over time series analysis explaining why creating
[1:42:10] a time series of satellite data over a number of dates weeks months seasons and years is effective in monitoring landscape
[1:42:18] change change and we examined the implementation of change detection to identify gradual and abrupt changes in the landscape
[1:42:27] in our activity we saw how ge can be used as kind of an all-in-one platform for filtering and compiling large data
[1:42:35] sets at various time sets time steps completing raster calculations and visualizing data so during our code walkthrough we completed a simple time
[1:42:45] series analysis by calculating a vegetation index across a collection of images compiled annually i'm showing our results within the gee
[1:42:54] interface interface and we also completed a change detection analysis using visual inspection methods and image differencing techniques
[1:43:06] so for those interested in a certificate of completion for this series there's one homework assignment answers must be submitted via google form
[1:43:15] which can be accessed from the training page on the rset website and the due date for the homework
[1:43:20] assignments is july 14th so this is two weeks after the close of the webinar series a certificate of completion will be
[1:43:29] awarded to those who won attend all of the live webinars and two complete the homework assignment uh by the deadline
[1:43:35] of july 14th and you'll receive a certificate approximately two months after the completion of the course um from
[1:43:41] mereness martens and here's our contact info again uh just in case you have any questions about today's session that we're not
[1:43:53] able to cover in the q a and we've also provided links to the training page uh the rsat website um and to our social
[1:44:00] media and we really encourage you to follow us on twitter to stay informed about upcoming trainings and events
[1:44:09] and with that i just want to thank all of you for joining us for this series we
[1:44:12] really hope that you were able to attend all of the sessions um and we would love your feedback on future ge trainings
[1:44:19] that you might be interested in and once again i also want to thank brittany beaudry from the nasa develop program for all
[1:44:26] her contributions to the series um and i also want to thank john dilger from the spatial informatics group and abigail
[1:44:32] behrenblit from nasa goddard who helped us with our javascript api activities and so now we'll go ahead and move on to
[1:44:39] our q a session all right hello everyone um let's go ahead ahead and get started with questions
[1:44:52] um we'll wait a second to screen mirror the q a doc perfect awesome awesome so we're also joined by uh abigail
[1:45:00] behrenblitt and john dildger so abigail john if uh you'd like to contribute to any of these answers please feel free to
[1:45:06] just jump in um and i'll probably have some of my own questions for you as we go through this q a doc
[1:45:14] i mean you'll know we don't have too much time for questions but we're going to try and answer questions for the the
[1:45:19] next 30 minutes or so um so let's just go ahead and jump right in so question one
[1:45:25] could you please uh better explore the differences between linear regression reducer types applied over image collections do they
[1:45:32] provide different results uh slope fare values uh error band for example things like that um um so essentially if you use a different
[1:45:41] reducer reducer you're going to get a different result and choosing a reducer depends on the statistical needs of your project and so
[1:45:47] it's really kind of up to you as to how you reduce um within our examples we were mostly using reducers as a way to
[1:45:53] average um or provide a median um so you might have some other needs with your own uh work
[1:46:01] um so just definitely take a look at this ge developer page that we've linked here and it goes into detail about
[1:46:06] reducers and there's also a link on that page that will take you to specific information about regression
[1:46:13] reducers which you seem to be pretty interested in okay okay question two is there any quota or limit for
[1:46:25] computing power per gee user and how long may analyses like the one on slide 11 take to process uh on google earth
[1:46:33] engine engine um so there is a user limit for processing on google earth engine and you'll receive an error if you've
[1:46:40] reached this limit it'll pop up right in your console um and processing time in google earth engine is usually much
[1:46:46] quicker than that of your own computer um it can it can't necessarily i can't necessarily speak to the time it would
[1:46:51] take for a project like the one on slide 11 process but i wouldn't imagine processing time per land cover map
[1:46:59] would would vary that much from say our land cover example in the last session just given the size of that study area
[1:47:06] however i think the the whole time series might take a while to process um and in any uh case like this like if
[1:47:12] you're reaching that memory limit error um you might just need to run the classification a year or a few years at
[1:47:18] a time um to avoid any of those processing memory limits um and and kind of with anything that you're trying to
[1:47:25] process or export um you can always just kind of split up the the very steps of your analysis just
[1:47:31] to not reach that memory limit or receive that error all right question three how do we harmonize the analysis when
[1:47:47] using let's say a combination of landsat 5 and 8 in a time series analysis um so there is in fact a method for
[1:47:55] harmonizing data from different sensors in the landsat series using google earth engine engine and this is usually seen as like an etm
[1:48:01] plus plus to oli harmonization that's the example that's provided by the ge developers and so i provided a link here to how
[1:48:11] they do that within a tutorial so i would say rather than me telling you exactly how that
[1:48:16] works works you could definitely just follow this tutorial link and um um and see how the ge developers would
[1:48:22] recommend you do something like that all right so question four uh the graph showing 1986 values of ndvi
[1:48:35] which data set is used to get uh for 1986 ndvi values so i believe you're referring to
[1:48:41] um the fire plot that was on the slide where we were talking about gradual versus abrupt changes
[1:48:50] and so in this case uh the data comes from landsat and ndvi and one important thing to note is that
[1:48:57] there is 30 meter landsat data going all the way back to 1982 um so that's why you're seeing such a
[1:49:03] large time series here um the fire event in question in that case happened i believe in uh
[1:49:09] 1988 so it looks like they used some data from before the fire event and then did the full-time series plotting all
[1:49:14] the way to forest recovery all right question five how do you conduct multi-day land cover classification in google earth engine or
[1:49:29] land cover change detection uh do you need training data for each of these dates and i think abigail you might have
[1:49:37] answered this question if you'd like to take it away yeah i can chime in um so if you're
[1:49:43] trying to run a classification for two different years or a few different years you do need individual training data for
[1:49:49] each of those dates um however if you're trying to compare um a start date and an end date and then
[1:49:57] look at trends in between there are methods for integrating tools like lan trainer trainer and that can help automate your
[1:50:06] classification classification so i've included links to two papers um it's code that i haven't worked through myself but these are
[1:50:14] some good resources to start to help figure out that process awesome thanks abigail great so question number six
[1:50:28] let's see not sure if this will be covered but is it possible to show or send a link to code to export the image
[1:50:33] results oh yes so we did actually go through this today with our export function i mean if you'll remember we
[1:50:40] actually only um exported a segment of our total map just because of that memory timeout that we
[1:50:46] mentioned mentioned previously in some of our questions but once you complete that export um we usually do like an export to drive i
[1:50:54] mean that's just a place where then we're able to to download that tiff um once you have that tiff on your computer
[1:51:00] you can use that in any desktop gis that you're interested in like qgis envy like you mentioned
[1:51:05] in arcgis as well and the the default for an export in um google earth engine is going to be a
[1:51:11] geotiff file which are some of the easiest files to work with in desktop gis all right question seven is it possible
[1:51:30] to demonstrate an ndvi chart for big area changes over the years so yes um i've provided a link here um from slide
[1:51:38] 16 which if you'll remember that was the modis ndvi uh line chart example that we gave so you can take a look at that
[1:51:47] page yourself and then for any areas that you're interested in kind of getting say like an average time series
[1:51:54] of so say you have a certain plot that you would like an average ndvi for um you can actually use the the process
[1:52:01] that we um um used within our activity today um but just replace your um geometry from a
[1:52:08] point to a polygon and then that chart will just display an average over the pixels within that polygon and we'll
[1:52:14] talk about that a little bit later as well because i think another question asked asked ask that more specifically
[1:52:25] okay question eight could you recommend methods for object-based change detection as opposed to pixel-based change detection so
[1:52:36] so obviously you'll note that within this uh within this series we kind of favored that pixel-based approach but if you're
[1:52:41] interested in object-based change detection or even object-based land classification really good place to start with this is going to be
[1:52:50] the object-based methods page on the ge website so i've provided that link there and then abigail john i don't know if you have
[1:52:58] any other comments on this if you've if you've done any object-based analysis in ge okay i know yeah i don't have much to
[1:53:08] add sorry awesome no that's okay just wanted to check yeah i think we we tend to favor
[1:53:12] that pixel-based approach just because it um gives us a little bit more fine scale picture of what change is
[1:53:17] happening okay question nine is it possible to set a seed within ge for analysis involving random components
[1:53:28] uh that you would like to repeat exactly um so i think uh with this question what you're asking about is uh some of the
[1:53:36] random sampling that happens within the the the within ge maybe this is for uh uh last session potentially um i think
[1:53:47] in this case uh we probably want you to email us just to get a little bit more into what your
[1:53:52] question is um but i think one thing to note is that when you're looking for a random selection of say data points or
[1:54:01] a random selection of say decision trees or something like that um that's something that google earth engine is going to do on a case-by-case
[1:54:08] basis um if you want the same uh repeat say the same refeed in the seeds as well
[1:54:13] i don't actually know how you might be able to do that so we can take a closer look at that
[1:54:19] unless anybody else would like to add to that that hey zach yeah i have a question i have
[1:54:24] an answer for that awesome so if you're running um like any of the sort of classifications like a random forest like that there is
[1:54:33] a parameter for a seed um so you can set that to you know whatever number you want and
[1:54:40] then if as long as you're using that same number um um you know it should repeat exactly the
[1:54:47] same same uh if you leave it blank then it will i think just define a random seed and then you'll
[1:54:54] always get different results but yeah you can set a seed for certain if not all classifiers know you came for random forest
[1:55:07] okay awesome thanks john all right so question 10 how do you use multiple data sets to create your image collection i'm an
[1:55:18] abigail i think you took this answer i did so there are a couple different methods so say you want to
[1:55:26] um um use a median image so a mosaic image that you've already created you can use e-image.com
[1:55:34] e-image.com cat which will concatenate those composites so in the past i've used this to concatenate a landsat composite and a sentinel
[1:55:42] composite for a random forest classification and then there's also merge if you're trying to merge image collections
[1:55:50] collections so for example when you're harmonizing a few different landsat sensors this is the type of code you would use
[1:55:58] just e dot image collection and then within those parentheses uh a few different versions of merge awesome thanks abigail
[1:56:10] all right question 11 what does it mean when it says this asset is deprecated when you hover over the landsat name so
[1:56:17] unfortunately um with with the google earth engine data catalog updating um as quickly as it does new data sets are always coming out um
[1:56:26] especially with landsat um as they keep up with some of the processing standards from usgs um so a new landsat data set just came
[1:56:33] out um so future support for the landsat data set that we used here um won't necessarily be happening so deprecated
[1:56:40] just means that there is essentially a newer data set that will be supported in the future and that you should likely
[1:56:46] transition over to um this just recently happened um i just saw a tweet today from a colleague mentioning that
[1:56:53] everyone should potentially update their collins of landsat imagery into google earth engine so we just weren't necessarily able to
[1:57:00] incorporate that into this activity but fortunately that doesn't make a huge difference in the code that we went over
[1:57:06] um you'll still be able to use the the deprecated data set like we have here and that's still landsat surface
[1:57:12] reflectance data which which works well for our purposes and the only things that you'll need to change if you want to use the
[1:57:20] new landsat level 2 surface reflectance data product from collection two which i've provided a link for here is to just change um the
[1:57:29] image collection that you're importing at the very beginning of the code uh that name of the image collection that
[1:57:34] you import and then you'll also just wanna update um the names of your bands that you're using within the code and
[1:57:40] then then just the cloud cloud shadow bit masking so there's not a whole lot to update with incorporating a new a new data set
[1:57:50] like that because it's still landsat data data but that's just something important to keep in mind so good catch
[1:58:00] all right question 12. how do you know when to divide by 10 000 to scale for reflectance do you ever
[1:58:09] need to divide by different number what does it mean to scale for reflectance and abigail i think you also took this
[1:58:15] one yes i did um um so it depends on the sensor and you can find the information about how to scale
[1:58:23] it on um usually whichever um government organization or mission the sensors associated with so for example for landsat i've included a link for
[1:58:35] where you would find the information on the proper um scaling to for reflectance and essentially when we're scaling for reflectance it's
[1:58:45] scaling the data set to absolute units and that allows for um um direct comparison to other data sets
[1:58:58] can i add something to that as well oh yeah yeah please um um also uh the images in earth engine are scaled
[1:59:09] differently for processing reasons i imagine so anytime you have an image collection for like landsat or sentinel 2 uh if you
[1:59:21] search it in the search bar you can look at the properties for each band and if there's a scaling factor on it it should
[1:59:28] be reported there as well awesome thanks john all right question 13 is the step list function acting
[1:59:42] analogous to a for loop uh like years 20 14 to 2020 uh to do this for every year
[1:59:49] um so this is actually something that uh john helped us with uh basically assigning uh years to each of our images within an
[1:59:57] image collection um so john if you would like to take this as well i'll turn it over to you
[2:00:06] i muted myself yeah you can think of it as a for loop uh you know in in functionality it is a for
[2:00:15] loop um but it's it's different in that it uses um mapping mapping a mapping function on it which is um
[2:00:28] scalable acro for uh and works in earth engine engine um um [Music] [Music] essentially i mean word of warning don't
[2:00:37] use traditional for loops in earth they don't work very well and typically break break but you can think of mapping as a
[2:00:49] for loop so it's essentially just saying for every every item in a list do something did that answer the question yeah i
[2:01:01] think that's great thanks for answering that awesome so question 14 in line 28 for the function year where did year come
[2:01:11] from from how do i find where the variable is defined um so if i wanted to filter by
[2:01:15] something else such as month where would i go to find those options there um i need to go back and take a
[2:01:22] look at that in the code real quick just to see what you're referring to filter by year
[2:01:30] yeah so in in line 28 basically what that that year is referring to is just um the
[2:01:39] any year within that image collection so in this case we were really interested in filtering for filtering our data from uh may 1st to
[2:01:48] september 15th for each of our years um so rather than giving like a specific year there um
[2:01:57] for our our start date and end date filters um we just put year there which just indicates every year
[2:02:03] between those months and dates i believe okay so question 15. is it possible to plot a chart with
[2:02:20] multiple data sets uh for example different precipitation products on the same chart um so yes um in the cases that i'm aware
[2:02:28] of you would essentially just be plotting multiple bands from an image collection collection so an example of that can be found
[2:02:35] here on this image collection charts page that i got from the google developers website and so in that case similar to how we
[2:02:44] charted for our evi band you can add multiple bands to any line uh chart that you're interested in creating
[2:02:57] all right question 16. is there a way to control the resolution of output images in the image collection
[2:03:06] um from within the functions so yes there is i think a good place to start is looking at some of the scaling
[2:03:12] information from google earth engine but in the case of exporting an image you can basically just adjust that scale
[2:03:20] line that we had so for example in line 112 of our code in the activity you could just change
[2:03:26] the scale to something other than 30 um to scale the exported image differently kind of to your specifications and then
[2:03:32] when you do say like an export or anything like that there's also the option to change the
[2:03:36] scaling there and then in terms of other types of scaling abigail and john if you have any thoughts on that
[2:03:44] feel free so so just to tap onto that the idea of scale this engine is kind of uh
[2:04:00] nebulous if you will so if you're looking at an image in like the the it is adjusting the scale as you zoom in
[2:04:10] and zoom out so you can see you know you might see like strange artifacts or different values will show up will not
[2:04:20] show up but like it will be visualized differently based on your zoom level um but when you export it as long as you
[2:04:28] whatever you define your scale as is what it will be exported and computed at um um so just something something to know
[2:04:39] yeah there is definitely a way to define a set scale in earth engine but typically typically you would only want to do that
[2:04:53] if you're just checking to make sure um um you know your images are working the way you want them to have
[2:05:01] the scale you'll export because if you set set it to like 30 meter resolution and zoom out
[2:05:09] uh you know to the entire world you'll get a memory error because that's a lot of pixels
[2:05:18] awesome thanks john okay so question 17. i hope that we were able to answer this for you uh during
[2:05:26] the session uh but if not the question was is there an undo i accidentally just raised five lines of code um so yes
[2:05:33] there is if you end up accidentally erasing any any lines of your code you can always just hit control z
[2:05:40] um on windows and then command z on mac to undo it's kind of similar to other um
[2:05:46] platforms or softwares that you might be familiar with um so in that case yes definitely just um
[2:05:52] hit the control z or command c depending on your machine to do that undo okay question 18. is there a citable
[2:06:02] reference background publication for this methodology that is being presented so so unfortunately there's not a specific background publication for this
[2:06:10] methodology um this activity is honestly just a compilation of techniques and functions meant to give you a really
[2:06:17] broad overview of how to manipulate um data within google earth engine um so we got into a lot of functions within the
[2:06:25] code to show you basically what's possible with an earth engine especially as it relates to time series analysis
[2:06:30] and change detection um but you should really always make sure that you're doing your own research on when you're
[2:06:35] completing analysis um to see what works best best for your study system and also what's most scientifically sound for your
[2:06:43] purposes because this definitely isn't kind of like a one-size-fits-all methodology for sure um this is just us
[2:06:48] showing you some techniques that you might find useful in your own work um i've provided a couple of example
[2:06:54] publications um used when creating this code um and and uh you can see them here one is for edi
[2:07:02] that's the vegetation index that we used and another is for that standard anomaly calculation calculation and we also have a citation for the
[2:07:10] training on the web page if you're interested in citing that more specifically awesome awesome so question 19
[2:07:27] can you not just clip the entire collection at once instead of year by year and abigail i think you took
[2:07:33] this this answer so feel free to go ahead yeah and um hopefully i understood their question correctly um
[2:07:40] yeah before you mosaic um your image collection into an image you can use filter bounds and that will
[2:07:48] bound the entire collection to a certain area area um depending on the data you're working with it may not match exactly with your
[2:07:56] study area that's why clip is kind of nice um but it's kind of like you you use either
[2:08:03] of these commands depending on if you're using an image collection or an image um um so hopefully that
[2:08:11] that answers the question um and and uh uh john or zack feel free to add anything to that
[2:08:21] yeah i think that that's a great answer to that thanks abigail or john did you want to say something
[2:08:26] uh yeah just real quick i'm about to hop off uh that's exactly correct and i i would
[2:08:32] just mention that clipping images is a sort of computationally expensive um function to run so ideally you know you only want to
[2:08:46] try to clip your image once once uh uh typically at the end of your process so like
[2:08:56] like it's easier it's easier more beneficial to just run your analysis on like your image collection that's been filtered
[2:09:04] and then clip it once at the end to visualize it or just for exporting um um and you know even if you do stuff like
[2:09:13] you clip every image in your image collection then do your analysis um in the background i think most of the
[2:09:20] time ge uh uh notices that and then moves it to the end end um um but yeah that's just a performance
[2:09:29] booster booster awesome thanks john and thanks so much for joining today and for all your help love it
[2:09:38] um zach i think i took this this next one as well if you want me to keep going
[2:09:42] awesome definitely um so in the code the part you choose the ebi image for each year's line 60
[2:09:49] through 69. is it easier to do this in a loop or is it not possible i have more
[2:09:54] than 30 years of images it will be complicated to write this for each year so as mentioned before
[2:10:01] earth engine doesn't really have loops per se so what i would do here is write a function that adds the year of data
[2:10:09] collection as a band to the collection and then for each image that's included in that collection you'll just have
[2:10:17] the year then you would write an additional function or maybe as part of a larger function function that would calculate the median or mean
[2:10:28] evi for that year um and this is something that you could export um you could filter this into a table um
[2:10:38] and get the information that way so that would be another another option that's a great suggestion abigail thank
[2:10:46] you all right question 21 is it possible to export the image collection collection all the images that are part of the time
[2:10:58] series at the same time um so you could try exporting the image collection collection um um but there's a high likelihood that you
[2:11:06] would exceed the user memory limit for the export function itself um so if you run into this issue at any time it's
[2:11:11] kind of similar to what we've discussed before you can always just separate your exports into sections to download them
[2:11:17] incrementally incrementally um and that's just something to keep in mind like i think a lot of people like to use
[2:11:22] google earth engine as a way to filter their imagery to access imagery um it's a little bit easier than some of the
[2:11:28] platforms that exist um um and and i think it's also important to note that in the case that you're just looking for
[2:11:37] a series of images within an image collection really kind of just splitting up that export um doesn't necessarily uh
[2:11:44] matter for the end result of uh your uh imagery collection um that you can then ultimately use in whatever
[2:11:52] type of gis you're interested in using after that all right question 22 where is the legend why not use
[2:12:07] different colors to show different features more clearly rather than just different shades of green or is this
[2:12:13] possible so we went over coding a legend uh in the interface last session um it's quite a
[2:12:19] bit of code so we didn't include it um in this session for time reasons as you could see we we kind of really pushed
[2:12:26] the the timing on the the code session of of of this section of the training um however uh
[2:12:33] you could also look back at session two two to see how this was done basically just coding a legend into the
[2:12:39] user interface for you to look at um in this case we used such a simple color scale partially for this reason um so
[2:12:46] that we could just interpret changes on our maps a little bit more easily i mean that was purely for visualization
[2:12:51] reasons i mean you can play around with more complex color palettes in your own work and for our purposes this was just a
[2:12:59] more basic example so we really tried to keep it simple um and another good example of implementing
[2:13:05] a more complex color scale is within that that session two training um where we provided that legend for a land
[2:13:11] classification all right question 23 when displaying each layer like you did with each year of edi are the layers
[2:13:22] overlapping so that you can see the actual overlap okay so i think that first question kind of gets at what
[2:13:29] question 23 was um trying to explain um so basically the short answer to this is that uh the layers that you have checked
[2:13:36] on google earth engine uh the one at the top that is checked is going to be the
[2:13:40] only layer that displays um within your map viewer the others will be layered underneath it um it's not like an
[2:13:47] additive process of including changes over time on a single map um it's just each of those single images layered one
[2:13:53] on top of the other but you can adjust the transparency there to show where some of those changes are or to compare
[2:13:58] images images and i think question 24 will probably be our last um because we're already a little bit over on time
[2:14:06] but question 24 is in ge how can we create line charts of time series over polygons areas
[2:14:14] or lines rather than points so i think i mentioned this a little bit earlier but if you
[2:14:19] want to use a polygon or a line for for uh the the line chart creation you can
[2:14:28] always just create another geometry kind of on top of everything that we had already done within this activity um so
[2:14:34] you can use those geometry tools that we we took a look at today um to either draw say a rectangle
[2:14:40] you could create your own polygon you can create a line um and then you just replace uh the geometries
[2:14:47] in lines 120 and 128 where we created both of our charts today and you just replace those geometries
[2:14:54] ro i think this roi and roi2 um you just replace those with your chosen geometry and so when you do something like a
[2:15:01] polygon polygon line chart that's going to take basically an average of all of those pixels within your polygon to then plot
[2:15:08] that line graph awesome and i think with that we'll go ahead and wrap things up for our gee for land monitoring series um
[2:15:21] and we hope you all got something out of it um if we weren't able to get to your
[2:15:24] questions today definitely take a look back at the website once we post the q a doc um and also feel free to email us
[2:15:30] but thanks all so much for joining um over the past three weeks we really appreciate it
