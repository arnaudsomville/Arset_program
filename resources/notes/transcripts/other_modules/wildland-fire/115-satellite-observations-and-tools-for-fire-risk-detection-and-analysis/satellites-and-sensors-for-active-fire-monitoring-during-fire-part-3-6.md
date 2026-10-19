# Satellites and Sensors for Active Fire Monitoring (During-Fire), Part 3/6

`https://www.youtube.com/watch?v=AYehqG1j508` · id 87 · 2:19:49 · module 124 — Satellite Observations and Tools for Fire Risk, Detection, and Analysis

[00:02] welcome back everyone um this is uh a spring webinar series by nasa rc program on satellite observation
[00:12] for predicting detecting and analyzing fire activity we have already gone through uh pre-fire conditions uh including climate
[00:22] cloggy hydrology and vegetation which means we have learnt about what is burning and and how the climate and hydrological and
[00:33] vegetation is affecting those burning areas in different parts of the world and what data and tools tools available from the nasa
[00:43] to actually assess those pre-fire condition and maybe have assessment of a risk assessment of fire in different
[00:50] parts of the world so that that is what we covered in session one and section two uh today we are going to start what is
[00:58] happening uh during the fire so we have two session lined up for that session three today where we will introduce the active fire
[01:07] detection and once the fire actually emits this smoke particles in the atmosphere how to track them how to
[01:15] detect them and how to monitor using various satellite data so i will talk about that and my colleague in the next session will
[01:24] talk more on how we take those information and put in the model for forecasting and so on in session
[01:32] 5 and 6 post fire condition will be discussed discussed so so like i said today's session will uh
[01:41] discuss discuss uh the active fire and smoke product uh my name is pawan gupta you can see here in the picture
[01:49] i'm a senior scientist here at usr at nasa marshall specified center in huntsville alabama and my colleague dr melanie follett cook
[01:58] now and dr anna prados they are at nasa goddard space flight center in maryland and uh they both will be talking in
[02:06] session 4 and anna will actually do the same session 3 and 4 in a special spanish language in the afternoon hours
[02:16] so so before we start i just want to brief again show this slide throughout this webinar series
[02:23] we are focusing uh on three main case studies three main fire events one in the western u.s
[02:31] during august september of 2020 another one was agriculture fires in sub-saharan africa region again during the same period in last
[02:41] year and then we are also discussing some of the fire which happens uh in southern mexico uh in year 2019 during
[02:49] the dry summer time so we will keep most of our analysis around three three case studies but we will also show
[02:56] examples of others parts of the world as it comes in different parts of the presentation presentation so let's start today's presentation um
[03:07] today i'm going to talk about fire smoke and aerosol monitoring from space the learning objective for this specific
[03:15] talk talk are to understand the different ways in fact where fire can be detected using various satellite observations
[03:23] uh identify and download satellite detected fire data sets from various nasa and nasa data centers and then understands our
[03:34] available smoke and aerosol data sets uh again derived from the satellite and how to use them for monitoring air quality during a
[03:43] specific fire event so first i'm going to start with the fire and smoke detection so this is more
[03:51] on a visible site so when we say fire what comes to your mind and to to actually get a visual perspective of
[04:01] that i just use the word fires in google search image and when i see the first several image comes up
[04:10] the the shows the fire images taken by people on the ground by aircraft and even satellite images
[04:18] such as this one and this one and this one comes up very quickly and the fires appears
[04:25] very differently from different depending on where and how the pictures is taken and what is burning on the
[04:31] ground so the idea here is that satellites are an integral part of monitoring fires all around the world
[04:40] for quite some time and that's what we are going to talk so i'm going to just keep briefly give you a few more
[04:46] examples examples of these searches uh on on internet so when i type the forest fires i see these
[04:54] pictures mostly taken by people on the ground big light you can see a lot of larger areas
[05:03] are burning big trees are burning these are typically wild fires of forest fires and again the satellite data comes up in this image
[05:11] search in first 10 20 images so which again again reiterate that the satellite is an integral part of
[05:18] monitoring these events similarly when you type the agriculture fires again you can see a very complete different pictures from this these fires
[05:26] are small they are burning on fields for a smaller time window they emit the smoke which is kind of creates a hazy
[05:34] sky around those and again satellite uh images uh shows up wherever there are actually fires as detection as the red spot in those
[05:46] images images uh there is another kind of burning called best burning or the garbage burning and it happens in many
[05:53] parts of the world and these are typically very isolated fires small in size and here you can see
[06:02] the most of these images are taken by people on the ground so there is a very limited capability from the satellite
[06:09] actually to detect these fires there are some commercial satellite which are having very high resolution or some of
[06:15] the land mapping satellite like landsat which can actually detect some of these fires but their frequency is very
[06:22] limited so we in this throughout the series series we are not going to actually talk a lot
[06:28] about these west burning fires okay so now we have seen these pictures which gives us a visual
[06:37] uh perspective of what fire looks like to a human eye now when it comes to the automatic detection from the satellite
[06:47] we rely on three different piece of information uh one is the smoke definitely if there is a fire there is a
[06:53] smoke smoke and and these smoke can be detected by the satellite using different uh methods and typically
[07:03] they appears grayish in colors again depending on what kind of fuel is burning those colors can change and
[07:09] we'll see some examples so the smoke is one way in which we can detect if there is fires
[07:16] another one is temperature anomaly means you saw in the previous pictures whenever there are fires uh the temperature of the landscape and the
[07:26] surrounding increases and that if we can detect that change in temperature in those pixels in those land areas then we can actually
[07:35] identify some of those fires those change in temperature can happen because of the other regions also and we'll discuss those as we go along
[07:45] and how to identify those things and remove from the fire detection data that we'll discuss later and then the third
[07:52] one is the light so now whenever there are fire there is also light emits in most cases unless it is this molding
[08:00] type of fires and that light we have satellite capabilities now where actually we can pictures pictures earth on a regular interval to detect
[08:11] these lights and typically these are done done and during night time daytime is not suitable for those kind of pictures
[08:19] because because because of the sunlight so during the night time we take these pictures of night lights and sometime in areas where
[08:30] we don't expect artificial light the fire lights can actually come up and if we can we can detect those that's
[08:40] another source of information to identify fires and satellite imageries during the night time so let's look up
[08:48] the different satellites and different system sensors which are out there in in various earth orbits and which are
[08:57] providing information on both smoke and fire detection so what you see here is uh uh several of these satellites have been
[09:07] already introduced in session one and two two to do other tasks so i will not get into
[09:14] the details but briefly want to mention there are two uh types of satellite which we typically use one is called leo
[09:22] low earth orbiting satellites and the examples include modis two of the models one makes measurement in morning modes
[09:30] terra and what is aqua in the afternoon and the good thing about the mod is is it has been around for almost 20 years
[09:37] so we have 20 years of the data records from that but it's 20 years and the satellite is becoming old so it's
[09:44] going to uh it going to phase out pretty soon so the new generation to continue that observation the new generation of
[09:52] satellites satellites or sensors called veers is available since 2012 there are currently two years which are award both
[10:01] of them make measurement in the afternoon and they provide high quality fire detection information twice a day one in during data and one
[10:11] during lifetime and then you have a another set of satellites like landsat sentinel which are very high resolution
[10:19] uh in in their special resolution but their frequency of repeat uh observations are limited so a combination of number of different
[10:29] satellites uh difficult really available to actually detect this measurement the the the limitation of leo is that they only
[10:40] provide one measurement during daytime and one measurement during night time but the advantage is that they have a
[10:46] global coverage the other type of satellites called geo or geostationary satellites again there are a number of examples here
[10:55] the geostationary typically makes measurement over certain region and they are deployed by individual countries to primarily primarily manage or observe the weather condition
[11:08] and disaster conditions in that particular country or region the advantage of geostationary is that they provide very frequent measurement
[11:16] from minutes to our temporal resolution but they are typically lower in a special resolution compared to leo and only have a regional
[11:26] coverage as compared to global coverage so one of the sensor which is we are going to use in our presentation from
[11:35] the jio is called abi advanced baseline imager it is very similar to modis or beers in many sense and there are
[11:44] differences and we will discuss them as we go along now one of the uh piece of information or imagery which
[11:53] we often use from the satellite is called true color imageries and this is very very useful in
[12:00] manually or visually detecting visible smoke smoke and this true color image is a nothing but called it is also called rgb
[12:10] because it is a combination of these three uh spectral band where satellite is making measurement red green and blue in case
[12:20] of modis these are the three wavelength 0.66 micron point five five micron and point four seven micron in case of the
[12:27] viewers uh the web bands are similar uh but there may be a little bit different in the specific wavelength
[12:36] but the advantage of this visible uh rgb image or true color image is that it shows the features
[12:44] in this image in the same way as we will look out through our human eyes so cloud will
[12:51] look white water will look darker in colors colors or the smoke particle will look either gray or brown is uh depending on their
[13:01] color so these this true color images uh can be a critical source of information for manually seeing where things are
[13:10] happening all around the globe and where the smokes is traveling here are some examples of those three case studies as i mentioned
[13:21] earlier uh how the visual smokes looks intro color image again these are taken from the viewers instrument uh
[13:29] and we will go through this tool called world view in little bit and see how you can actually access these images so the
[13:37] first one is uh september 11 2020 taken over western u.s showing thick plume of smoke actually coming out
[13:46] from these different fires and if you look carefully you can see that there are different source of
[13:51] fires which are actually putting out a smoke and the the way the wind direction is that the most of this smoke is
[13:59] transporting over ocean and um but the if you i if you see clearly that the smoke is very grayish very thick and
[14:09] this is uh mainly from the forest fire or the wildfires in the middle you have august 19 2020 case over jambia in uh
[14:19] southern central africa where you can see a graze uh layer of haze now and this is very different than
[14:27] what you see in western u.s these are the agriculture fires or open burning happens in that part of the world almost
[14:34] every year during the season and this happens to actually clear the land to prepare for the next crop and these are
[14:44] typically small fields uh burning for a very short period of time so they generate generate a smoke but the smoke amount is less and
[14:53] they appears more transparent as compared to the wildfire smoke and then the last you have a similar
[15:01] wife combination of wildfires and open burning happening in mexico city mexico southern mexico around may 10 on 2019
[15:12] uh you can again see there are several smoked layer of hazel sky along the coast side and on north of the
[15:20] mexico city where the fires are burning so these are just some examples of of different views of smoke in true color
[15:30] imageries imageries now let's talk about this uh data sets or the what we call active fire product
[15:38] so typically in satellite community all the data sets are called product but basically they are data sets
[15:46] uh so there are three which are listed here one is from modis again there are two modes
[15:52] model 4 is uh model for a1 and my df 401 these are from modis tera and aqua
[16:03] this is from the viirs and then you have avi fdc from vs these products are available in near real time means
[16:13] within 2-3 hours of satellite overpass time and they're also available for for historical data in past years or past 10 years so for example
[16:25] modis is available for past 20 years veers from sumi npp is available for last nine years uh similarly api is
[16:34] available for last two three years so once you put all this data on a map you will see a map like this and this is
[16:40] just a one month map of fire detection by the viewers and if you look at this map it
[16:46] looks like the most of the world is on fire and this is a little bit uh misleading in the sense it is not really
[16:54] like that it's the way the fire information is displayed on the map uh it appears that way but we when we go to the world view
[17:03] i'll show you so many specific areas and then you will see that it's not that the entire area is burning but there are so
[17:09] many small or large fires happening and when you put those information on the map it appears like
[17:16] the world is on fire okay so let's look a little bit more into into uh details of what these uh fire data
[17:26] sets are and how different sensors can be used to assess different aspect of those fires so fire detection are basically
[17:38] uh these are um as we learned earlier and from satellite imagery the satellite images are consist of pixels so pixel is
[17:48] the smallest unit in a satellite imagery and it is defined as the certain piece of land area or ocean area
[17:58] on the surface of earth so in case of modis it is one by one square kilometer in case of weirs uh there are two
[18:06] different resolution for wears but the most often we use 375 meter by 375 meter square meter so veers is higher
[18:14] resolution as compared to modis and the pixel size in abi is two by two square kilometer and these
[18:22] resolutions are defined for the noddy position um and this can change as we go to the edge of the
[18:30] satellite swath now these fire data not only contain the active fires but they can also detect the volcanic signatures so
[18:40] that is another type of fire identified in the datasets now as you can see here that the modis resolution
[18:48] is coarser or lower compared to the wears so because of this higher special resolution of weirs often bears detects
[18:58] three to four times more fire than mode is slowly and you can just see an example here
[19:05] on the right side this is again from the zambia and the central uh southern africa africa uh
[19:12] uh on august 12 2020 modi's aqua image which is make measurement around 1 30 in the afternoon and within 15 minutes of
[19:22] modi's modi's viewers on sumi and pp satellite actually visit the same place and they detect the fire so now if you
[19:30] compare the top image with the bottom you see that the virus is detecting lot more fires again
[19:36] because of its higher special resolution it is able to detect some of the smaller fires which are missed by modis because
[19:44] of the coarser resolution and also uh modis uh may account uh a few smaller pixels within one square kilometer uh uh as one
[19:57] fire pixel as compared to rears will tell them there are three different uh fires and we'll see that a little bit
[20:04] more when we go to the exercise but this is uh advantage of using viewers as compared to modis
[20:12] now let's look how this thermal anomaly or rectifier or fire hotspot algorithm works in principle so all of this satellite does make
[20:23] measurement in many different spectral channels we call them bands spectral bands and the idea is that all the features in earth atmosphere
[20:34] system response uh in a little bit different ways in different spectral channels so if we have measurement in many channels
[20:43] many bands or many bands of solar spectrum then we will be able to uh uh get a lot more piece of information
[20:53] about certain things in this case we are talking about the fires so the first thing we do is mask the water and mass
[21:00] the cloud pixels so if there are water and there is a cloud then we basically say okay this is a cloud or water and we
[21:07] will not be able to detect any fire in those case so this is done using thresholds on temperature brightness
[21:14] temperature or reflectance and these thresholds vary between day time and night time okay so that is the
[21:22] first task second is detection of fire actually itself to do that there is a fixed threshold used on the
[21:30] brightness temperature on the fireband um to identify the potential fire pixels so the fireband is typically located
[21:39] around four micro micrometer um it varies little bit uh between different sensors but that is typical typical uh central wavelength and again it use
[21:50] uh complementary channels means there are 11 micron channel there are other channels which are used to actually uh
[21:59] further enhance the uh algorithm to detect this fires automatically and we'll go get into those channel little bit
[22:08] later later once you detect the fire you want to make sure that this is the fire and this
[22:14] is not a false alarm false alarm means if you detect a fire based on the threshold of brightness temperature then
[22:22] that brightness temperature can happens also because of the other region for example if there is a huge solar panel
[22:29] form sitting in california and that can produce very high temperature same as the fire temperature and you will say oh there is a fire but
[22:38] in reality it is really a solar farm solar panel form so to detect those to make sure that there are checks and
[22:47] balance in the algorithms we check for the background we checks for these fire free targeted which are typically
[22:56] constant constant like coastal region deserts sometimes very clear forest with the high reflectance and some artificial objects such as
[23:07] solar panels solar form buildings we have to remove them from the data set so that that is kind of a big picture
[23:16] fire algorithm how it works now here are some more details again i'm not going to get into all the details
[23:24] here but this is a more like a reference slide and if you need to really learn more about that that link will provide
[23:30] you a lot more details on the fire detection algorithm but in brief we use all these different
[23:36] channels uh to do different perform different tasks uh in process to make detect the fires and may confirm that it
[23:46] is fire and not something else uh this is specifically for modis uh c6 means this is the latest collection six
[23:54] version of the algorithm uh uh and then similar uh channels are used for the viewers the the base algorithm between modis and
[24:04] weirs are almost same uh the channels because there are some differences between different channels between modis and
[24:11] weirs there can be few differences so as you can note here one thing is that veers has two fire channels one is at
[24:18] 375 meter the channel i4 355 to 393 micrometer and then the m13 band which is a 750 meter resolution
[24:30] which has to 4.1 micrometer range so these two bands are simultaneously used to get actified data uh at both resolution uh
[24:42] of course because of the higher resolution of 375 meter it produce more number of fires uh compared to 750 meter
[24:49] resolution resolution okay so let's look a little bit more on this uh hotspots or rectifier data or thermal
[24:59] anomalies so when i say these words they all mean sense actified data or thermal anomalies or hot spots they are all
[25:07] considered as same terminology for the rectifier detection so the limitation one of the limitation is the fall
[25:14] positive what is false positive sometime what happens as i was explaining earlier there are some features on the lens
[25:23] surface on the earth surface which can provide similar signal as an active fire such as so in those cases uh satellite automated
[25:34] algorithm will say this is a active fire but there are check and balance to actually remove those
[25:43] as as using a complementary data sets of either land classifications or building information or certain satellite geometry information to make
[25:54] sure those are not false positive uh sometimes large fire emissions due to the thickest smoke what is that so if
[26:02] you have a very thick smoke like i was showing earlier in case of california the entire area is covered with the
[26:10] blanket of smoke in those case what happens is that the the temp the satellite is not able to detect the land
[26:17] temperature correctly and that in those cases uh it is more likely that the algorithm will miss those location or detecting those fires
[26:26] if it is underneath those big bloom it's just like acting as a cloud and then the large exercise so as i was
[26:34] mentioning earlier i have shown an example to compare between models and weirs uh they have a relatively larger size pixel so in case
[26:45] of modis it's one by one kilometer in case of abi it's two by two square kilometer and this size actually changes
[26:53] modus modus size can go to up to force four by four kilometer at the edge of the swath avi
[27:00] can go up to 19 by 19 square kilometer right edge of the disk and if this pixel
[27:07] size is too big and if there is not enough signal from the fires if the fire size is very small then this sensor will
[27:15] miss those fires so people um the algorithm folks at the nasa and other agencies are always looking to validate this uh data
[27:28] how much we are actually accurate all around the world and uh they do the validation studies they use
[27:36] uh much higher resolution satellite data another source of information for example example landsat special resolution is 30 meter
[27:45] or sentinel is 10 meter and there are other sensors which have higher spatial resolution such as ester
[27:51] and they use those data sets to actually collocate with this coarser resolution datasets to identify what we missed in those
[28:01] modes data obvious data or what we have not missed and when they did this kind of validation studies they found that
[28:08] the false alarm rate or it is typically called commission error is about 1.2 percent so if you're detecting about 100
[28:16] fires fires there is a chance that out of 100 you have one or two fires or false alarms
[28:23] means they are not really fires but they are detected again if you want to learn more about
[28:29] the limitations and accuracies and the algorithm itself these are the two links here for both modis and weirs
[28:38] and we can go over that you can go over the to get more details on these two algorithms and data products
[28:48] so so another term i want to define uh often uh in literatures in media and people are interested is how
[28:57] many fires are burning right and that is typically called fire counts so what is fire count so the fire count is basically number of
[29:07] hot spots or satellite pixels detected by particular satellite or sensor sensor in certain regions so for example in
[29:16] this image if i draw a box over this state of washington or oregon or california and count all the pixels which are
[29:30] classified as fire by particular satellite algorithm then that will become my fire count you will also have
[29:37] to see whether you want to do this fire counts on certain time windows so whether within last one hour how many
[29:45] files were detected or in last 24 hour how many files were detected or in last one year or one month so you can play
[29:54] that game and because of this different needs from the users uh the data product itself does not count this file what it
[30:02] gives you is latitude longitude and time of the those detection and using that information you can do that
[30:10] by yourself and we'll see that once you get to the exercise part you can also actually count the fires
[30:17] for individual irregular polynomial polygons such as country borders district borders state or county or for entire continents so
[30:28] again depending on your need you can make those fire count calculation calculation by yourself and it is a relatively
[30:36] simple process okay so let's uh look these three case studies uh which i have been telling earlier earlier we
[30:46] looked the rgb or true color images for these three cases uh now what i have done is i have
[30:54] superimposed superimposed the detected file as a red dot on those images and this we have done using the
[31:02] world view so we will look um go to the world view and look these uh case studies little bit more in these data
[31:09] sets and how to display that and evaluate these files in the world view so this is the world view website
[31:19] the link is given this is a screenshot of the home page so we will take take i'll take you to the world view website
[31:28] and then we will do a quick tour to the side so so now let's look at the you know some of
[31:42] these data sets which we talked both true color images the smoke image histories and some of the
[31:50] the fire actifier detection data the hot spot product and how to access them so we are going
[31:56] to use a nasa tool called nasa worldview and the way i remember is just go to the search and then type nasa
[32:06] worldview and the first link it will show up as a nasa worldview i'll just click on that
[32:13] and it will take me to the home page of this tool and you can close this pop-up window
[32:20] here basically this is showing a lot of information about what is inside and a lot of different cases studies which
[32:25] they are put together for you so i'm going to just close this and i will click on right most corner
[32:33] information and there is about and if you want to know about this tool i'll just briefly read the first
[32:42] paragraph so that you kind of understand what this tool is so it's basically a tool tool uh which where you can browse
[32:51] uh near real time full resolution satellite imageries and data layers and also you can download some of these data
[32:59] and there are about 900 different data layers available so it's not limited to only fires or air quality in general
[33:08] all aspect of earth system planet earth are actually available whether it's disaster precipitation temperature land use type
[33:19] climate variables anything so there are 900 different data layers and the one of the biggest advantage of world view is that most of
[33:29] the information is available within two to three hours of its uh satellites overpass uh more recently they also have
[33:37] added some of the geostationary satellite data which means you get more than one measurement per day so there's a lot of information
[33:46] in this tool available and not only for near real time but the historical data also are archived so you can read more about this
[33:55] uh using this information i just want to show few more things on the information information it is an open source code so if anybody
[34:05] wants to duplicate this in their own data layers they can download the code and there are a
[34:13] few other tutorials and other kind of information is available through this one one now again on the since we are on here on
[34:20] the top right corner you can take a snapshot you can actually change the projection uh there are three
[34:27] different projection and you can create a a link link whatever you are seeing on your screen it will create a link to
[34:36] to that and you can copy that link you can shorten you can share on social media so these are some of the tools
[34:42] available in the world view on the bottom is a date date control tablet tape where you can actually change the date
[34:53] this arrow will take you back and forth in days it will change by one day you can directly change the date here by
[35:00] typing typing you can change the date again here again by typing or using the arrow so i'm going to just go 2020
[35:11] remember when you first time open it will always displace latest image for that day so you will
[35:18] have to if you are going back in time you will have to change the date date so i will change the date to
[35:24] september 2020 and let's say 11 that was the that was the image which we were looking earlier
[35:31] for the fires in western us you can also move this slider to change the date uh if you want to
[35:40] change the unit of this display you can change by year month and day this plus and minus science will allow
[35:48] you to zoom in and out or certain area so you can go plus we'll zoom in to that area and
[35:54] minuses zoom out with this area now the most important part of this world view is this um
[36:01] left hand panel top right top left corner and there are three different tabs here layers events and data so the one which
[36:09] we are going to focus more on is called layers now in the layers when it by default
[36:16] there are two types of groups of layer one is called base layers in base layer we have four different satellite sensors
[36:23] for which we have true color images are available one is called terra modis which makes measurement in the morning
[36:30] aqua modis which makes measurement in the afternoon veers on sumi npp after note measurement and there is another beers on noah 20
[36:40] which makes uh 1240 measurements so these two viewers makes measurement within 50 minute of each others and the two models makes
[36:47] measurement within three hours of each other so you can based on your requirement you can choose which sensor you want to use as a base
[36:56] layer layer one advantage i want to tell between modis and weirs is that you can see these
[37:03] big gaps in the satellite imagery so this is image from september 19 and you can see this huge black spot in the
[37:11] middle of the globe uh around the equator these are called orbital gaps so you will see these in case of both mod
[37:19] is either its modis aqua or modis again this i symbol you see a line if it is line it means
[37:26] it is closed the layer is not displaying if the eyes is open it means the image is going to display and you
[37:34] can display more than one layer at a time time um but the layer which is on the top will
[37:41] appear actually so this is more disappoint disappoint now if i switch to the viewers then you will see that
[37:48] viirs does not have those black lines right black spots which is there in the in case of modis so
[37:55] this is modis this is beers so the reason is that the weir swath is little bit larger about 3000 kilometer
[38:03] compared to modis which is 2330 kilometer and that allows larger coverage and actually it's overlapping with the orbits in case so some of the
[38:13] data which we are going to look is will focus on the beers mostly so let's focus in
[38:19] in uh western us california washington and that part of the region that's where we are doing the case studies
[38:26] um i have displayed the beers image for september 19 let's go to september 11 the image which
[38:33] we were looking earlier and you can see [Music] [Music] uh uh so so this is true color image you will see
[38:41] the clouds are appearing very bright white so you can easily identify them there's a land surface and this
[38:48] particular features which is actually a smoke plume transporting our ocean is really really thickest room and there
[38:59] may be some underneath cloud uh that is no plume but on the top of the from the
[39:03] satellite it looks like a smoke and they are coming out from different fires fires and we will see in a minute how to load
[39:11] them now on the overlay uh you have some uh uh some of the legends some layers like places name
[39:20] which will allow you to navigate through the different parts of the world um to identify where you are on the earth
[39:28] and then there is a coastline and border so if you want to see the borders in the
[39:33] state and countries this will allow you to do that now now you can also use there is a search
[39:41] option on the top right you can put some name name city name like san francisco right and it will take you to the san
[39:50] francisco and zoom into that area you can also put the latitude launched it here and it will take you to that
[39:57] place again i'm going to zoom out and and just focus on the entire west coast okay okay now we are going to add some layers so
[40:09] aid layers once i click that a pop-up window will appears and what it does is it it separate those 900 data layers which i
[40:19] was telling earlier into different categories categories and these categories are defined by by disaster name hazard type or the science
[40:30] discipline for example atmosphere biosphere biosphere cryospheres are featured some of these featured stories so we are going to just
[40:39] stick to the first one hazard and disaster and since we are talking about the fires and air quality we'll just
[40:46] stick to this particular window now in this if you look uh there is a product which we were
[40:51] discussing earlier called fires and thermal anomalies i click on that once you click on that you will see several
[40:58] options here so these are the different satellite you remember we talked about two modes to wears wears so these are the different
[41:09] satellite which you can select so so i'm going to select aqua modis and now again you can see there is a
[41:18] layer which says day and night means it's combined day and night and then it says day and night so i will just for
[41:24] time being i'm going to to show few things i'll just select day and night both similarly i'll click on the weird
[41:31] sumi np beers them review once you select them you can also read details about those product how you got
[41:54] the reference guide and everything on the right side so there's a lot of information available here in addition to these layer uh i'm going
[42:03] to also select select another parameter called aerosol optical depth uh which we will talk about a little bit later part
[42:12] of the presentation but since we are on the world view i just want to show an example again many
[42:18] different sensors which provide aerosol optical depth so i'm going to just stick to sumi npp viewers and the first one i
[42:25] will pick and we will discuss what these different layers are a little bit but just for a sec world view again you can
[42:32] read what is that optical depth what details available algorithm all kind of information is available here once you selected all
[42:40] those make sure you have this right sign and then you go on the top right corner click that
[42:47] cross sign and just close that all the layers which you have selected they should appear on the
[42:56] overlay window here and by default all of them will be displayed on the uh your top of those
[43:04] your base layer now i'm going to just close them just so that we can see one layer at a time
[43:10] what it means okay so right now it is just displaying the rgb or the true color images from sumi
[43:18] npp you can actually close that also if you just don't want that kind of background you can just have this nice
[43:25] black background so let's use this background for time being and then we'll come back to the circular image so
[43:32] first first we will display aqua modis this is aqua modis so all the red dots started appearing in this region and you can
[43:41] actually if you want to see a bigger global view you can look at this and you will see a lot of fires happening during
[43:49] the same time in this part of africa there were a lot of fire in amazon other parts of the
[43:54] world but let's get back to the san francisco or the california area here here in the western u.s
[44:03] so you see these fires now let me this is aqua modest means these are afternoon fire detection during the day time and
[44:12] again again these are the night time fires so you can see one thing is very clearly some of these
[44:19] fires are seen in night time but not in the daytime so there can be two things happens one is either these
[44:27] uh fires started late in the day and they are more active in the night time or or sensor is not able to detect them
[44:37] because of not of the enough signals so always nighttime file detection is better than the daytime okay now if i close the modis
[44:47] fire layer and and display the viirs file so this is weir's daytime layer and this is modis data and this so
[44:57] you can see the difference this is modis this is vs modis and vs you can see clearly
[45:05] because of the higher special resolution viewers is detecting lot more fires compared to and both are daytime
[45:14] and remember both are making measurement within 15 minutes of each other so it is not like they are um mechanism and
[45:21] several hours apart so the one thing which we were noticing earlier between uh just modis terra and
[45:28] aqua or the modis day and night we were thinking that it may happen as those fires started late
[45:36] but actually that is not the case because veers at the same time within 15 minutes detected these fires which were
[45:44] not actually detected by modis data m5 so it means because of the higher special resolution vs were able to detect these fires so
[45:57] each of these red dot is one fire so you can actually zoom in for example here you see a cluster
[46:06] cluster of files or line of fires right for example you can zoom in in any of this area you will see these
[46:13] dots are very small right and if you click on each of these dots then a window will pop up and that will
[46:21] window will give you exact location of those fires where the price is detected in terms of their latitude longitude it
[46:29] will also provide all of the active fire data actually which will download little bit later in the presentation
[46:37] like brightness temperature those temperature threshold i was telling you earlier in the algorithm fire ready to power which actually allow us to
[46:47] know how big the fire is how intense the fire is the intensity of fires and it is defined
[46:52] in megabot and then there are other uh type of information like how big the pixel size uh is in long time so if you
[47:01] multiply these two number you will get uh area of the pixel which where the fires is detected and then whether this
[47:08] file was day or night time since we are already looking daytime image so it's a data and fire wrong and then the
[47:14] confidence level right so algorithm will tell you whether it's very confident in detecting the fires or nominal or high so this was considered
[47:23] as a nominal and then there are other information information available for time of the observation date of the version and all this
[47:31] date and time information is available in utc gmt time so if you need to convert that into your local time you
[47:38] will make you will have to make that correction okay so let's go get back to this uh
[47:45] we already looked the differences between modis and viirs capabilities and we also looked the differences between the uh day and night now let me just
[47:54] show from the viewers alone how the day and night things work so this is vs night time and this is weir's daytime so
[48:02] you can see that night time has little bit more fires and some of the other um so for example this is night time and
[48:12] then let me close and this is day 10 so you can see that the density of the fire
[48:16] within that area is little bit less in daytime fire detection because night time there is a strong signal the
[48:25] contrast is higher and that is why it is easier to detect more fires in light also in addition to that you can see
[48:33] that some of the files which are detected in daytime for example this is specifier here here here they are
[48:40] actually not detected in the nighttime image so this fire is gone in night time so that maybe
[48:46] there may be some uh small fires happening happening uh which were just burning for few hours and gone uh so the night time is not
[48:54] able to detect those fires so this is just california again and again if you look the global map
[49:01] like i was saying earlier it looks like the entire world is on fire but again you can zoom into this specific area
[49:08] another case study which we were talking is from zambia again if you look this map it looks like the whole region
[49:17] is burning right but it is not so again you zoom in and in the country you will
[49:21] see there are so many fires but these are very small agriculture fires few square kilometer of land is burning and
[49:30] providing enough signal to detect it as a a virus virus again again we learned about the fire count earlier
[49:38] so if you actually help if you actually count all the red dots in certain box for example let's say
[49:48] this box right let's let's assume this is your box right so you you can actually calculate the number of fires
[50:00] in this box and that will become fire count unfortunately this tool does not allow you to do that but we will see
[50:07] that that in other ways how to do that okay now let me show you uh some of the
[50:17] rgbs little bit closely uh for that region um so we are going back to and allow the sumi npt gears again i was
[50:27] showing you the difference between the agriculture fire and forest fires the smoke is very thin and if you actually zoom into the
[50:36] smaller area then you can see that there are so many small smoke plumes coming out from these fires and we can actually
[50:44] superimpose the fire detection on these and you will see many of these smoke plumes are corresponds to those fire locations
[50:55] where the fires are happening currently now now we are going to move on and do a take a look of another tool uh called
[51:09] fire information for resource management system system forms forms this is a tool tool by nasa it allows you to download some of the
[51:21] fire data which we looked in the world view view and do more further analysis so again to
[51:31] to to get into the tool i will follow the same process and we will actually [Music] [Music] type
[51:42] type nasa nasa and the tools name is forms so once you type nasa forms the first website comes
[51:49] up for information for resource management system and once i click on that it will take me to the home page so
[51:58] [Music] [Music] click on the forms map and then it will take me to this website so this is their home page
[52:09] and and what you see some of those capabilities which we saw in the world view is similar here but it is a dedicated tool
[52:18] for fire monitoring so it has a little bit more information than what view is allowing you to do so again uh the in
[52:27] terms of the features are very similar you have on the right side a panel where you can
[52:33] select different data layers so you know first quick view is going to allow you to see one day data or past 24-hour data
[52:44] and then uh you can select like we saw earlier there are four different satellite sensors which are available
[52:51] for fire detection two mode is two viewers you can select which one you want to use i'm going to for sake of
[52:57] this this demo i'm going to just select mode is the viirs sumi npp and then you can also there are
[53:06] background layer and overlay which are available which you can display so again it's very similar to what you see
[53:13] in world view the only difference here is the by default the base layer here is a surface reflectance product
[53:21] and you can actually change that so these are the layers you can actually change what you want
[53:27] i think the blue marble is by default but you can change the street which you cannot do in world view so if
[53:34] you are more interested in the physical location you can also change to some other other light gray dark gray
[53:42] it does have a little bit more pictures to show in the background what is that will probably sometime helps you
[53:50] but what is burning underneath okay so again once you open this is going to be your view but if you click on the
[53:57] advanced advanced it does allow you a little bit more uh the advanced features allow you to go
[54:04] back in time so uh we are just going to go back to to september of 2020 and the september 11 case when we were
[54:14] looking some of the fires in california and west coast and in africa and then um again you can select which
[54:23] layer you want to display here so and now this tool allow you to display accumulated data for up to 30 days so
[54:33] right now it is displaying for one day but you can change that to two days three days
[54:38] and up to 31 days so and you can do that change actually also by just selecting this
[54:47] this window here but remember this only allows you to display data for up to 30 days only so
[54:54] you can see a lot more fires are displayed displayed as you started accumulating those files for not many days
[55:02] and as you go on short numeric days less number of files are going to be displayed here
[55:07] okay okay so i'm going to just do the one day one right now for time being another aspect of display here is a
[55:16] uh graded product and if you go down on this panel there is gridded fire hotspot if you click here again you can select
[55:25] whether you want right now it does not have vs from nova 20 which is available on the user file
[55:32] but it has more is a quarter and you assume so i'm going to select vs mpp and
[55:37] what this graded product does is basically it counts the number of fires in quarter degree by quarter degree
[55:46] latitude of longitude box so you make a box so for example if i zoom into california here again
[55:55] the fires which we were looking earlier right right so you see this each box this is about
[56:03] quarter degree by quarter degree in latitude and longitude and they are color coded by number of fires which are
[56:10] detected in that period so this is fire count which i was explaining earlier and this color scale is given here so it
[56:19] varies from 0 to 100 but the red color is not really restricted to 100 anything above 100 is also red color and this is
[56:27] for for one day only now you can change this also also to 10 days so you will see suddenly
[56:35] the number of fires will increase now it is almost 4 000 fires in this particular grid box or 171 files for this grid box
[56:45] so you can change that depending on your requirement uh one day it will show only for one day how many
[56:54] files were detected so this is a nice feature of forms that in certain cases you can actually
[57:01] calculate the fire counts but again this is fixed grid of quarter degree by quarter degree so you
[57:08] cannot change that now there is another nice tool uh which i want to show here there's a burnt area product also
[57:16] available but i will not discuss that little bit more because you will be going to introduce this product more in
[57:22] uh session five and six we will see this tool at that time but let's go back to this quick view and i want to show a
[57:32] couple of more features from that so i will display the data let's see sorry we can go to the
[57:40] advanced view itself and remove the graded data and there are certain tools available here one is called measure so if you
[57:49] click on the measure you can actually measure the area or the distance between fires in different units so let's say i
[57:57] want to actually see how big area is burning burning around this particular area so let me click actually let me zoom in first to
[58:07] this particular area right i want to calculate how much area is burning uh and again this is a very
[58:14] rough estimate this is not same as the burnt area but this is a quick and dirty way to get a sense of how much area is
[58:20] burning so you click on the area and then basically start mapping this area where the fire is burning
[58:32] and you can make any any kind of irregular polygon in this one and it will calculate the area underneath
[58:42] that polygon so i'm just making a drop here here thing so if all the area which is burning in
[58:51] this region is about 33 square kilometer and you can change in hectares so it's almost like 3 000 hectares
[59:01] of land burning and again this is not same as burnt area remember this is just an error of estimate how
[59:09] the things are happening so this is one visual part of forms now let's move on to the other parts of forms which are
[59:18] more critical for downloading and analyzing the data so again if you go here on the left side
[59:25] this this is the one which you were looking so far they have a very specific site for u.s
[59:30] and canada and there is little bit more information you can browse that and then click on the
[59:36] actifier data so this is where you download the data again lot of information is available they divided the world in different
[59:46] parts which are displayed here in different colors south asia central america alaska so you can actually download the
[59:55] data in three different format shape files google earth kmz file which you can display in google earth
[1:00:04] earth and then the text file csv which you can open in the excel so we are going to work with this
[1:00:10] excel shape files to look some of these data and you can download the world canada or any of the files uh now
[1:00:19] there are three different ways in which the data is available uh mode is one kilometer when i say mode
[1:00:25] is it include both tera and aqua and then the weir sony npp and weirs know r20 r20 uh
[1:00:33] uh you can download the data for past 24 hours or you can download the data for past 48 hours or past seven days so this
[1:00:41] is rectifier data for real-time application uh so let me just download one of the file actually and i have
[1:00:48] already downloaded the file i'm going to just open that for you to save the time and when you download
[1:00:56] and open the file in excel it looks like this uh i i'm not sure whether you can
[1:01:01] see it clearly or not let me just increase the zoom level so when you open that file you will see this piece of
[1:01:08] information latitude longitude brightness temperature scan and track these are the size of the pixel where the fire is detected so
[1:01:17] again if you multiply the two of them you will get the pixel area this is the date of equation means when the fire is
[1:01:24] detected again in utc utc time or gmt name of the satellite so again remember the instrument is mode is same
[1:01:34] but there are two satellites terra morning and aqua so depending on which satellite detected and then the confidence level it varies
[1:01:41] from 0 to 100 close to 100 is better confidence close to 0 is lower confidence confidence there's some other information which is
[1:01:50] used in the algorithm version number temperature temperature this frp is the parameter which tells you the in megawatt the intensity of the fires
[1:01:59] it will tell you whether it's daytime or night time demons daytime and for night time and the type of fires is also
[1:02:06] defined so if it is vegetation this is zero if it is non-vegetation then some other number is given and all that information you
[1:02:14] can find in the user guide so this is how the data will look when you download from here
[1:02:20] now this is one way of getting near real-time data but there are other ways to get the
[1:02:27] there is a fire alert also so you can sign up by entering your email and then create a request create file inlet so it
[1:02:36] will tell you uh name where you want to country area you can select uh and how you want to get the
[1:02:44] alerts that will give you an automatic fire alert so let's get back to the operational site site and then
[1:02:57] archive download this is another thing i want to show you is if you want to download the data from past year past
[1:03:04] month or for several years together this is where you go one of the things they have done nicely
[1:03:10] here is you can actually download the yearly summary of uh entire country data so again separated by modis
[1:03:19] and beers uh modis is starting from 2000 to 2019 again 2020 data are not yet processed in this
[1:03:27] format but you can get those data another way i will show you in a minute you can get all the countries as a file
[1:03:34] or you can click on the year and just select individual countries so for example example uh one of the cases today which we were
[1:03:42] doing was from zambia you can search zambia here is zambia you can click on this file it's 16 mb file
[1:03:50] and it will download in the data format will be the exactly the same which we saw saw earlier
[1:03:56] earlier now one more thing uh we can do from this data file which we were downloading earlier is
[1:04:03] the fire count calculation right so let's say uh you want to calculate how many number of files are there so you
[1:04:09] can actually put do a quick excel trick where you filter the data and then you can put the range of
[1:04:21] latitude and longitude here and based on that range you can actually count how many files so for example on
[1:04:30] this particular day for this particular files there were 11 fires which were detected by both and notice now you can
[1:04:37] say i want to just see what how many files were detected by aqua only so i select the aqua and then it will tell me
[1:04:44] okay there were uh eight fires for aqua and the remaining three words together you can similarly do separation
[1:04:51] by day and night so there are many different ways in which you can do this is just simple example using the excel
[1:04:58] spreadsheet but you can try to program in python or any other language you're familiar and you can use some of the gis
[1:05:05] tool also to do similar tasks okay okay so this is where you download the countrywide file but uh let me show you
[1:05:16] another way to download more specific data data while creating a create new request so when you go to the create new request
[1:05:25] you select whether you want the worldwide data or individual country data or the custom region region right so if you do the custom reason it
[1:05:34] will select it will get to it to the map and let's say i want to download the
[1:05:38] data from this reason so i will draw a polygon or a draw a custom box here over this
[1:05:48] region and i'm showing you just because we are going to use this data a little bit later
[1:05:53] to show a case study so you will download the data for this save and then it actually took the
[1:06:00] boundaries of that long here and provided now you can select the source of the data whether it's modis data or
[1:06:06] viewers sumi npp or no 120 so i'm going to just say sony npp you can select the
[1:06:11] date again we were working with the august and september data so i'll just select august 1 and then
[1:06:21] 2020 september september 30. again there is no restriction here you can select 20 years it's just the data volume become large
[1:06:32] uh when you do now you can select the output file like i said earlier there are three different formats um in
[1:06:38] downloading uh instead of kmz they provide the json which is more useful for displaying on web services so
[1:06:47] comma separated csv and then you put your email address and and submit and once you submit your records
[1:06:56] will appear here you will get an email with the link of downloading data you should get two email one is the
[1:07:03] notification that you submitted your order with the details and the second ones the data is ready which typically
[1:07:10] happens within within few minutes uh depending on data volume maybe a few hours but and then you will download the data and
[1:07:19] analyze in the same way as we are doing if you click on the web service it will
[1:07:24] provide you all the details about how you can display these data in more automated fashion on your own website or
[1:07:32] on your own tools so there's lot of information available here for different purposes so again this is
[1:07:40] a really nice tool to analyze the data and i'll show you a case study as we move on
[1:07:46] using the data from this one website okay so let's move on to the next topic which is smoke detection we did talk
[1:07:56] about that little bit uh from the visual perspective using the world view and rgb image but i want to
[1:08:03] get a little bit more into how we do that in automatic sense and what are the data sets available to
[1:08:10] actually do more in automatic fashions or quantitative ways so so again again as we saw in the world view
[1:08:19] depending on what kind of fuel is burning and depending on how big the fire is what is
[1:08:27] background level is what kind of particle they are emitting where they are in the atmospheres satellite satellite spectral response
[1:08:39] will be a different it means the true color images can appear different or those features will appear either
[1:08:46] different in colors or shape or their spectrum so in this we have uh four different example on the
[1:08:56] top left we already saw that case from the small fires in zombia where the smoke appears more transparent
[1:09:03] but more of hazy on the right you see those wildfire smoke plumes which we saw in case of
[1:09:10] california california on the top on the bottom left you see in another example which we haven't seen
[1:09:16] earlier is a smoke from the oil fires and this is from the iraq and since the oil fire oil is very fires
[1:09:25] are dominated the emissions are dominated by the black particles of black carbon which are very absorbing in
[1:09:32] nature in this wavelength where we are making these rgbs they appear very dark and black in colors similarly you have another
[1:09:40] example over bangladesh in india where the smoke is actually mixed with the local pollution coming from the urban
[1:09:49] and that is creating a kind of a smog type features which appears as a haze haze in this satellite image so this
[1:09:59] different different color color actually allow us to get some more details about these fires here is another example how we use
[1:10:12] different bands or different spectral information information to detect the smoke from the satellite so on the left these images are created
[1:10:21] using the landsat satellite on the left you have a rgb the true color image where you can see the smoke land surface
[1:10:29] features features again we use the image image three bands red green and blue to create the image on the left on the right
[1:10:40] you have the same lens measurement taken at the same place by the same satellite but in different
[1:10:47] spectral channel or the band we assigned 1.6 micron to red channel 1.2 to green channel and 2.1 micron to
[1:10:56] blue chain now remember these are all smaller wavelength for the in the left on the right all of them are higher
[1:11:03] wavelength means they are larger than one micrometer so now you can see that the smoke is almost not visible
[1:11:10] on the right image which was very prominent on the left size image and you can't see actually land underneath it
[1:11:17] but you can see the land underneath uh the right image and the reason for that the smoke particles are typically very
[1:11:24] small so the response more to the smaller wavelength compared to the larger wavelength in the larger wavelength most of them are typically
[1:11:34] uh uh transparent and that actually so if we have a measurement of these in different wavelength bands
[1:11:42] we can actually using the combination of these bands we can use this information to make more automated decision and that's what we
[1:11:50] are going to do next so here is just an example of how the spectral signature or the spectral response varies by
[1:12:01] different features so when you have to detect the smoke as we saw in the earlier algorithm discussion
[1:12:09] that we need to make sure we are separating other features so sometime smoke can be actually easily mixed with the dust in other
[1:12:20] aerosols particles so we need to make sure we have that information uh and there are clear uh space right means uh
[1:12:28] there is no smoke or does there may be some other type of aerosols are available there or there is nothing
[1:12:33] there so so to do that uh what you see here on the left again this is taken from a
[1:12:41] data product which we are going to discuss later on and the details of this data product is defined in this document
[1:12:48] pdf which is given the link here uh what you see here on the left is the reflectance measured in 412 nanometer on
[1:12:57] the x-axis and the ratio of 412 to 414 nanometer which is a blue channel on the y-axis
[1:13:05] y-axis and there are three different types of features which are manually picked to make this plot now
[1:13:13] one is the clear sky blue means it shows very um very small reflectance between 16 percent but the ratio of the blue
[1:13:23] 412 to the 440 is very high larger than 1.24 and then the smoke which is the red color pixels and then
[1:13:31] the dust on the right so both smoke and dust shows high values of 412 right but if you see
[1:13:38] the ratio the ratio is kind of separating the two the ratio the and the the difference in
[1:13:45] this ratio is a function of the absolute value in 400 so it is decreasing or we can in other words we can say the
[1:13:52] contrast between smoke and dust is changing as a function of reflectance in 400 so this this kind of information
[1:14:02] this kind of separation in a spectral space space allow us to actually automatically detect uh put those
[1:14:10] threshold values uh to detect this smoke and dust automatically in the satellite imageries now using this left side we can actually
[1:14:20] separate the clear versus smoke and dust but it will may be difficult to separate smoke and dust so for that if you see
[1:14:29] um um remember earlier the dust particles are larger in size typically larger than one micron micron whereas the smoke particles are smaller
[1:14:39] they are typically smaller than one micron or some micron particles so again you have 412 on x-axis and
[1:14:48] reflectance and 2.1 micron channel so again you remember earlier landsat image we were looking that smoke is almost transparent to this 2.1
[1:14:58] micron channel and that is what happening you can see all those red pixels which are classified as smoke they are having very
[1:15:06] low reflectance less than 2 percent clear sky is also having very low reflectance in 2.1 micron whereas the
[1:15:13] dust which are larger in size particle size is pretty big they are responding very well to 2.1 micron channels so now
[1:15:21] use use combining the spectral information from these three channels not only we can actually separate smoke and dust particles from the clear sky
[1:15:31] but we can also separate them individually between dust and smoke and that is exactly what this product is
[1:15:38] doing while calculating these two parameters called absorbing aerosol index index and this is defined by this equation
[1:15:47] which is nothing but those ratios which we saw earlier but it is defined in logarithmic scales and
[1:15:53] this r is reflectance in those channel as measured by the satellite and the r dash is a
[1:16:01] clear sky reflectance which is calculated using a ready-to-transfer calculation for rayleigh scattering so this is uh this
[1:16:10] whole quantity is called absorbing aerosol index when the value of this aai is positive it means there are
[1:16:18] absorbing aerosol in aerosols present in the image and and but it both dust and smoke can be absorbing so
[1:16:27] uh alone this will not help you to distinguish between smoke and dust it will help you to distinguish between
[1:16:33] absorbing and non-absorbing type of particle particle so there is another parameter which is calculated called smoke dust
[1:16:41] discrimination index and this is based on the another figure which we i showed earlier the ratio of 412 to 2.2 micron
[1:16:48] channel because again dust is responding to 2.1 whereas the smoke is transparent transparent to 2.2 micron channel again
[1:16:56] it is on logarithmic scales defined in very same way as aai so together these if you put thresholds on aai and dsdi
[1:17:07] then we can actually not only define uh dust separate the dust and smoke but we can also quantify their thickness so again
[1:17:18] all of the details are given in this documented which is activity and published papers and here on this image is just showing
[1:17:26] an august 15 2020 case from again from the fires and in in in northern u.s uh here uh dust aerosol
[1:17:37] index and the smoke aerosol index are defined here again the magenta color shows the strength or the thickness of
[1:17:44] the the smoke and we look some more examples so all this uh aai dsdi and some of these detection flags are
[1:17:55] stored in a data set called aerosol detection product and this is from the noaa noaa so the data is available through
[1:18:04] another website which i will show you in a minute it includes those aerosol index it also include flag means that it basically
[1:18:11] tell you whether it's a dust or a smoke or clear or cloud or a snow or a volcanic ash flame it
[1:18:18] also gives you the quality flag whether how much the algorithm is because we make several assumptions while making
[1:18:25] this calculation and as you saw in the scatter plot there can be overlaps on a spectral signature between different
[1:18:33] classes such as smoke and dust and those can create some of the issues in certain viewing angles for the
[1:18:40] satellite and certain other environmental condition so so we we based on those assumption and based on the encountered conditions we assign a
[1:18:51] flag which is called low medium and high high means you are very confident low means you are less confident so this
[1:18:58] data is all stored in this file uh the example file name is given this comes in a net cdf format unfortunately
[1:19:05] this does not come in a ascii file because the data volume is pretty large each of this pixel is 375 meter
[1:19:14] big so there's a lot of pixels and and this data you can download from the noaa you can also display this uh smoke and
[1:19:23] dust product from a several visualization tool one is called aerosol watch which is earlier i showed you uh the data can be downloaded from
[1:19:33] noaa class the link is given here and there is some r set training material which we have done earlier
[1:19:40] you can also visualize this uh on a j star mapper which is a very similar to world view
[1:19:48] but designed by noah and this tool actually allow you to display uh some of this uh data product which are
[1:19:57] uh came out from the noaa on aerosols fires smoke and few others including the tropomy so i will not go
[1:20:06] through the tool but it is very simple very similar to world view you should be able to display uh the data easily here
[1:20:14] okay now let's move on to the aerosols data which are the one which i introduced earlier during the worldview aerosol optical
[1:20:25] depth so what is aerosol optical so it is defined it's an optical property of aerosols and it is defined for the entire column of
[1:20:34] the atmosphere from the surface to top of the atmosphere again we have a lot of training material on this specific topic
[1:20:41] on our side website so if you need to look little bit more details please browse the training material
[1:20:48] and we will be able to help you to point out those specific uh here is the technical definition of
[1:20:54] aerosol optical depth expressed the quantity of light at certain wavelength so it is always defined at certain wavelength removed by
[1:21:02] aerosols from the beam by scattering and absorption during its spots to at medium so basically in bottom line as
[1:21:10] as as light penetrate from upper atmosphere to the lower atmosphere all these aerosols particles are present in the atmosphere
[1:21:18] which interact with that light and some of that light is actually lost in the space either by absorption or by
[1:21:25] scattering and basically how much light is lost or taken out by this particle is nothing but defined by quantity called
[1:21:34] aerosol optical depth this is a mathematical term here m is a solution in the angle function of
[1:21:39] solar zenith it defines it's also called air mass and basically tells where the sun in the horizon
[1:21:50] horizon aerosol optical depth is also called aod or aot in short form t stands for thickness uh typically most sensor
[1:21:58] reported at 550 nanometer and it's a unit less quantity so aerosol optical depth either you can get from the ground measurement called
[1:22:07] sun photometer here examples are given there are huge network i will show you in a minute uh or you can get from the
[1:22:14] satellite satellite now since we're talking about the air quality so there is a another term in air quality community we
[1:22:22] often use to define the amount of particle in the atmosphere is called pm 2.5 mass concentration and there are
[1:22:30] similarities and differences between aerosol optical depth npm 2.5 and i want to to make sure we understand that so again
[1:22:39] like i mentioned earlier aerosol optical depth is defined for the entire column of the atmosphere uh whereas the surface pm 2.5 which is
[1:22:47] measured at the ground is only near the surface layer the nearest layer of the atmosphere atmosphere close to the instrument aerosol optical
[1:22:59] depth is averaged over certain area so in this case if depending on what resolution we are using the data sets
[1:23:06] are available in different resolution i'll show you uh but it represents larger special averaging over uh over
[1:23:14] earth surface whereas the pm 2.5 is measured at as a point location so it represent only point measurement
[1:23:21] uh aerosol optical depth is a optical quantity so it represents how the light interact with the aerosols
[1:23:29] and it represent all size and shape range of particles whereas this pm 2.5 are are specifically designed
[1:23:38] to make measurement of particles which are less than 2.5 micrometer in aerodynamic diameter these pm 2.5 are also dry mass
[1:23:48] under controlled humidity condition of 35 to 40 percent whereas the aerosol optical depth is ambient uh condition means
[1:23:56] whatever if there is water vapor it will have effect on aerosol optical so there are these are some of the differences
[1:24:02] and similarities but both represent uh uh amount of pollution in the atmosphere and uh often many studies have used
[1:24:12] aerosol optical depth as a proxy for pm 2.5 and there are data sets which are coming up uh on pm 2.5 based on the
[1:24:21] errors or optical depth measurement and we'll show them a few later in the example so like fire data there are many satellite
[1:24:29] and sensors which provide aerosol optical depth and some other parameter again modis miser homie tropomy arms these are some of the names which you
[1:24:41] might be familiar in some of these sensors in addition to aerosol optical they also provide additional information for example mizer
[1:24:51] also can provide you some sense of particle size bins whether in the particles are smaller medium or
[1:24:59] coarse similarly umi arms or tropomy can actually give you a little bit more information on absorbing type of
[1:25:06] aerosols and in some cases also layer height height weirs and then we have several geostationary which came along in last
[1:25:14] three to five years uh which does provide provide rpm to aerosol optical depth and smoke mass which we saw earlier
[1:25:23] uh there are some regional estimates of pm 2.5 these are still a research product product but more more of them are coming online
[1:25:32] as we learn more about aod and pm 2.5 relationship relationship in future there will be a lot more
[1:25:39] sensor which will have similar capabilities and more advanced capabilities uh some of them are are part of this global air quality
[1:25:48] constellation of satellite tempo sentinel gems in asia maya is another mission which will actually provide lot more information
[1:25:59] and pm 2.5 product at very high resolution over several targeted urban location all around the world so there's
[1:26:07] lot of satellite data on aerosols available which can be used to monitor smoke from fires so using this data sets
[1:26:19] there is a product uh calculated by via by nova it's called derived pm 2.5 from mode for
[1:26:28] aerosol from aerosol optical depth and these are based on a relationship between aod and pm 2.5 mathematical
[1:26:38] mathematical relationship based on a regression equation equation and these regression equations are actually calculated based on the air now
[1:26:46] data and details on this method is published in this paper by uh heiseng and shawwa in just a few months back
[1:26:56] and what you see here in this example on the left is a aerosol optical depth from veers
[1:27:03] veers october october 7 2020 over us and then use that aerosol optical depth using the regression model which are
[1:27:11] derived uh using air now measurement on the right side is the pm 2.5 so you can see
[1:27:18] see areas with higher so optical depth corresponds to areas with the high pm 2.5 concentration and in some areas for
[1:27:26] example over here over in washington state here russell optical depth values looks very high but the pm 2.5 values
[1:27:33] are not high and there could be two things going on here one is uh estimated pm 2.5 could be a little bit wrong or
[1:27:41] the second one is it could also happen that these smoke plumes are transporting in upper atmosphere above the boundary
[1:27:50] layer and not pm 2.5 which is the surface measurement is not affected on the ground so this is again a research
[1:27:58] product it is available through world view website which i showed earlier and you can actually visualize some of these
[1:28:05] here here is some validation initial validation result over us this is from viers and the avi so on the left is your avi
[1:28:19] ghost satellite geostationary on the right is viers you can see the statistics are very similar and again the aerosol watch
[1:28:27] allows you to display some of this data into their tool okay so so far uh we have learned a lot about
[1:28:38] active fire data true color images some of the aerosols data which are out there available from various satellite sensors
[1:28:48] uh i understand that i have gone little bit fast on the aerosol data sites but what we're going to do now is we
[1:28:56] will put all this information together to understand a one air quality case study or an event how we use this
[1:29:06] data together to understand to analyze an air quality event and for this uh i have chosen a case
[1:29:14] study study from from fires in western us so what you see here on the left again i have created all
[1:29:23] this analysis using the data sets and tools which have i demonstrated earlier so on the left all of these images are
[1:29:32] created on the top one using the world view and the bottom images i created using the noah j star mapper which i have provided
[1:29:41] the link but we have not gone to the website so the first one is the true color images the red dots are the fire
[1:29:48] hotspot detected on september 9. the second one is the weirs aerosol optical depth again the red color shows high values
[1:29:58] the orange and yellow color shows low values values it's a unitless quantity you can see some of the smoke areas are not
[1:30:06] [Music] [Music] detected in aerosol optical depth product or not retrieve the values the hot spots alone are detected by the
[1:30:16] viewers you can see the clusters of fires they are everywhere across california several places in oregon or in oregon and
[1:30:27] washington and other places and then the night lights which we did talk a little bit but we haven't shown
[1:30:33] really anything on that but again you can actually access this vs night light data from world view what you can see in the night
[1:30:41] lights actually if you superimpose this together together you can see all these huge amount of light coming out from the
[1:30:49] same place where the fire detected as well as you can see some uh cloudy like shape on the over ocean this is
[1:30:57] basically basically a reflected light either moonlight or some other light which is reflected actually from this thick plume of smoke
[1:31:07] and which is visible to the satellite so all this information we can use together to look different aspect of these fires
[1:31:17] both both on the surface and in the earth during daytime night time and on the bottom is
[1:31:23] aerosol index which i showed an example earlier and this is derived from tropomy sensor which is an european sensor
[1:31:32] flying on sentinel 5 satellite and what you see on the aerosol index is that that as i was mentioning earlier it is
[1:31:40] calculated using the measurement itself it is not a retrieved quantity but a calculated quantity and it is available
[1:31:48] under cloudy or non-carbon conditions you can see the special extent of the data in aerosol index much larger
[1:31:56] compared to aerosol optical depth although although aerosol index data to use quantitatively it's much more difficult because there are a lot more
[1:32:06] variable variable which can affect that value uh compared to the aerosol but it does have its own advantage and
[1:32:15] both in terms of the special coverage and and strength strength another thing which we are going to use
[1:32:23] is the data which we downloaded from the firm so i showed you an example of how to do that and this is just an example
[1:32:29] of the csv file uh when i draw a box around this western us and i chose the data from 2018 to 2020 i
[1:32:38] was september month and you get this excel type spreadsheet file and i use that data to make a time
[1:32:45] series of fire count so basically i took the data and calculated the number of fire which i showed earlier
[1:32:52] how to do that in made a time series and you can do this in excel you can do
[1:32:56] another coding language uh i did using coding language but you can also draw this in excel so on y-axis you have a
[1:33:04] fire counts and different colors shows the different years 2018 19 and 20 and this is for the entire year so the
[1:33:13] idea here is to show that in the western u.s first you can see the number of fires are much much higher in
[1:33:22] 2020 compared to 19 or 18. so this can be an anomalous year in the past three years second you can
[1:33:30] see that the most of the fires are actually actually concentrated in the august september time frame so i zoomed
[1:33:40] in this particular region into this plot on the right and you can see the the in 2020 um there are two peaks in fires
[1:33:50] one happens around uh third week of august after august 18 and then another one in the first week of september
[1:33:58] around september 9 10. and these two uh peaks are very very high in terms of number of fires they are
[1:34:08] much larger than what you saw in previous to year so this is again you can do easily using
[1:34:15] from website now also i wanted to see the difference between august and september as you can see the
[1:34:23] number of fires are much smaller in august as compared to the september and if you look the special
[1:34:30] distribution of those fire density map which we saw in the forms then you can see most of the fires were concentrated in
[1:34:39] california region in august month but as you move to the september these fires actually started propagating to the
[1:34:46] north and you started seeing a lot more fire in oregon and washington with these red colors value which are the fire
[1:34:54] count larger than 100 again done using the form website as we saw earlier earlier now uh this is the
[1:35:03] aerosol index from the tropomy the similarly the one which i showed earlier an example this is we got from noaa just start
[1:35:13] mapper which i have provided the link earlier and what this does is that it helps you to see
[1:35:19] how the smoke from these fires is actually transporting and this is very similar to what another example we
[1:35:26] saw using a another satellite instrument so so you see this strength of using many different satellite that you can
[1:35:34] actually confirm uh that one satellite is giving and another satellite is giving the same information that's another
[1:35:41] incredible things to see cross verify what is happening in the atmosphere system and how this move is transporting
[1:35:51] now we talked about the geostationary satellite and getting that data using the aerosol watch earlier again the links is provided in previous
[1:36:00] way and as i was saying earlier the advantage of using the geostationary is that it provides very frequent
[1:36:07] measurements so in this loop what you're seeing is those true color imageries of the files and the smoke uh in the western us
[1:36:19] taking every five minutes so the goes-r sensor which took this measurement makes every five minute measurement so
[1:36:26] you can see that not only from day to day how smoke is transporting as we saw in earlier
[1:36:33] example example like this one but within day or within hours how in which part of the country
[1:36:40] the smoke is actually moving and this particular information from geostationary geostationary is super super helpful for the quality
[1:36:49] forecaster for the weather forecaster for the emergency management people for other folks who really wants to get
[1:36:55] real-time information and that another advantage of this information from geostationary is that because of its five-minute repeativities
[1:37:07] the latency in the data is 15-20 minute only so you get the data within 15-20 minute of satellite measurement and that
[1:37:14] really helps and we will look at this little bit more in session four when we talk about their
[1:37:21] quality forecasting how the geostationary measurement can uh change the air quality force casting in very different way
[1:37:29] okay so we looked all the examples from different satellite and sensors the how the smoke and the fires look
[1:37:40] now let's see what eps ground-based measurement are saying because satellite data always required to validate against the ground
[1:37:49] measurement because ground measurements are considered the gold standard ground truth truth so so as you look this is a
[1:37:57] loop of errors pm pm 2.5 quality index from air now website and the link is given here
[1:38:07] and you can see that during the different days of september air quality in the western u.s was
[1:38:13] affected affected and in some days when there was transport long distance transport other parts of the us was also getting
[1:38:21] affected so you can see this uh central us and up to alabama actually you can see certain
[1:38:28] days when their quality got affected so you can see this and when you do this look this data together with the
[1:38:36] satellite data you can actually track the transport pattern and how it is affecting the and quantify even
[1:38:43] actually how much uh air quality is degraded because of this smoke transport so let's put together uh this is just
[1:38:51] one example uh i zoomed in into the area around the napa valley where a lot of fires were happening uh and this is a
[1:39:02] rgb look again created using world view so you can see how the smoke from the fires here uh
[1:39:10] transporting in different direction either inland or over water or even in the inland in different parts of the
[1:39:19] country in different parts of the region based on the wind pattern and that will actually affect their quality
[1:39:26] differently in surrounding regions so uh uh if you take the eps measurement pm 2.5 this is 24 hour mean pm 2.5 ground
[1:39:36] measurement measurement taken on one of the station here in the napa county uh then you will see that during the
[1:39:46] september uh the values of pm 2.5 were pretty high to 150 micron per cubic meter and if you have seen the news
[1:39:55] outlet you might have seen the pictures of a golden beach showing in very different color than usually it looks just because
[1:40:05] of the thick layer of smoke covering the entire region so again ground measurements are confirming very high pm
[1:40:12] 2.5 values we already looked the fire counts were showing very very high values here the number of fires are in several
[1:40:20] hundreds um thousands of fires were detected detected and if you look the aerosol optical depth which we were looking earlier so
[1:40:28] what i plotted here is a i took a one degree box around this epa station and this you can do using
[1:40:37] another tool called giovanni and what i plotted is the maximum aerosol optical depth instead of the mean and you can
[1:40:43] see the maximum optical depth during this event actually reached up to four or five value and four aerosol optical
[1:40:50] depth is considered very very high optical depth typically optical depth in california remains less than point three point four uh four
[1:41:01] means it's just super polluted so i think you can use all these data sets which we discussed today
[1:41:08] along with the ground measurement to evaluate and to actually quantify you can go further few more step further and you can quantify how
[1:41:18] much much air quality is degraded because of these fires in terms of the number of days categories or other matrix you can
[1:41:27] easily calculate thank you everyone for attending today's presentation and now we will move to the question answer
[1:41:56] thanks everyone for attending today's webinar on the fire detections detections smoke detections and aerosols data sets so we'll go over the question answer as
[1:42:08] you have been putting them uh in the question section one by one and we'll try to see how much
[1:42:15] questions we can cover in today's live lesson uh but if there are questions which are remaining and you
[1:42:24] have put it out if they are not able if you are not able to answer today then
[1:42:30] we will have uh written answers to those questions questions on the rsa website will be available to you
[1:42:43] okay now shelvin are we ready to go can you hear me okay hear your loud and clear ready when you
[1:42:53] are are thanks okay so on your screen you should be able to see the questions um shelvin has been trying to put all these
[1:43:08] questions in the document and i will just go one by one starting from question one and i can
[1:43:16] understand some of these questions earlier in the webinar came as we were still going through the presentation so some of them have been
[1:43:25] answered answered uh so i'll try to depending on the uh and available information i'll try to expand the answer
[1:43:38] so question one will the global fire atlas be reproduced for 2017 to 21 can modis be used now to is
[1:43:48] create the workflow to make the global fire atlas product so we have not actually discussed the global
[1:43:56] global global fire atlas data in this uh today's session but but i have provided the link to the website
[1:44:04] here if you like to learn more about that product and there is also a contact information uh
[1:44:12] uh if you email to that person uh nails then you should be able to get more updated information about their future
[1:44:19] plans for the data product okay the question two is why are the rgb wavelength for modis and weirs different
[1:44:29] so so the central wavelength of each band can vary from center to center and it is typically decided by the census science
[1:44:38] team based on the available technology and specific measurement code sometime sometime these wavelengths can be different as we move and we learn
[1:44:51] more about the science and the technology technology but but if you need to create the rgb uh you can
[1:44:57] use use those three channels which are roughly centered centered around the red green and blue part of
[1:45:04] solar spectrum so that your rgb is not going to change a lot uh the specific specific feature may change a little bit here and
[1:45:13] there but the bigger picture you should see the similar um um value in each of those sensors
[1:45:22] how do we distinguish the question third how we did how do we distinguish clouds from smoke so i think we did talk about
[1:45:30] this little bit uh we just i just want to emphasize here that we use simultaneous measurement in multiple
[1:45:36] band or channel and then we also use special variability in cloud and smoke to separate the true
[1:45:43] feature in satellite images typically clouds are flat what we call in satellite community in their spectral response whereas the
[1:45:52] smoke particles show significant change in the spectral response as you move from one bank to another bank and
[1:46:00] that is one way in which we can actually separate them but this is not a foolproof method uh
[1:46:09] often when you design these algorithm to do this separation automatically there can be cases when we mistakenly
[1:46:19] identify smoke as cloud or vice versa so there are rooms for error in those methods methods what is the level of accuracy of these
[1:46:29] five data sets from different satellite how accuracy assessment uh validation is done again i think we did cover this
[1:46:36] little bit on around slide 21 and there's a link for a document which provides in much more great detail about the validation
[1:46:44] efforts efforts but both uh modis and viewers have been shown 90 or above 90 accuracies and often they
[1:46:54] are validated using higher special resolution measurements from other sensors such as landsat sentinel or ester another sensor which has similar capability to
[1:47:06] detect the fires uh sometimes we also do field campaign to to do more thorough validation so that is
[1:47:15] another way in which these these sensors or fire data are validated i think this is question number five is
[1:47:25] repetitive same question uh question number six obvious fire detection is so different in area from modis i have to wonder do
[1:47:35] we have estimate of false positive rate for rears rears or the false negative of modis like the
[1:47:42] modis fire data contained a confidence value is there anything similar for weirs for the fire data too yes
[1:47:51] both uh modis envious data comes with the quality flag which tells the level of confidence in detecting a particular
[1:47:59] fires and it depends on the different tests as we have got shown in the presentation uh there are a number
[1:48:07] of different tests which has to be applied in order to classify certain pixel as a fires so the false positive are very limited
[1:48:16] and often cleaned up during the operational data set production they are not cleaned up during the near real-time
[1:48:22] product product but during the operational product they are cleaned up um and false negatives are more difficult to
[1:48:29] estimate right so typically it has been found that because viewers hire a special resolution it detects three to
[1:48:37] four times more number of files than the mod is and but this can also vary depending on
[1:48:43] the type of fire fire size and which part of the world we are looking at but those numbers three to four times
[1:48:51] are global numbers question number seven how does one download fire count for data of a particular place on a
[1:49:01] particular time again we have gone through this exercise in the firm demo please follow the instruction there
[1:49:10] question 8 i'm wondering if both satellite carried the same instrument to detect the temperature anomalies that could explain the large variation along
[1:49:18] with the spatial resolution for modis and vs so modis and rears are both sensors so there is a
[1:49:26] often we use actually sensors and satellite term interchangeably but there is a difference uh modis and vs both are sensor they are
[1:49:37] not really satellite modis is about two satellites called terra terra which takes measurement in morning and another one is aqua which takes
[1:49:46] measurement in the afternoon and the rears is also about two satellite one is called sumi npp uh and the second one is noah 20.
[1:49:56] and both sensors use similar bands their bands are not exactly the same but they are very close to each other
[1:50:04] and and they have very similar algorithms to detect the fire the major difference in the the two
[1:50:12] two comes due to the special resolution but there are other factors which also play a role which are related to their
[1:50:20] regulator resolution their spectral resolution resolution in their detection limit question nine the satellite usually have more than one
[1:50:33] spatial and temporal resolution that is daily 16-day global coverage can we flexibly choose the resolution that we want for fight
[1:50:44] while fire monitoring or only specific resolution is detected for wildfire monitoring monitoring the special resolution for each of these
[1:50:52] sensor sensor or satellite uh or individual channel is often fixed so veers has two fire detection channel
[1:51:00] uh with special resolution of 375 meter and 750 meter resolution whereas modis has only one channel with one kilometer
[1:51:08] special resolution each satellite makes two measurement per day or 24 hour one in daytime one in that time on a given location so
[1:51:18] although the special scales are fixed the temporal skills can be chosen based on [Music] [Music] when you are analyzing the data so you
[1:51:31] can accumulate the data over different time skills or you can average the data over over different time scales
[1:51:44] okay so the question 10 the satellites usually have more than one special and temporal i think that
[1:51:52] the same question question number 11 when you are discussing a channel what do you mean okay so channel or band or spectral band
[1:52:03] all refer to the center wavelength at which sensor is making measurement these wavelength corresponds to certain part of
[1:52:12] electromagnetic solar spectrum and typically each sensor has n number of different channels so for example example uh modis has
[1:52:25] 36 different bands whereas viirs has about i believe 22 banks so it depends on different sensors they mix
[1:52:35] measurement in different part of solar spectrum and that is what we call band or channel what is the percentage in one pixel
[1:52:44] required to be fire detectable by the satellite satellite so typically um a certain pixel is like as i was explaining in the
[1:52:56] detection algorithm is classified as fire fire depending on the intensity of the fire so this intensity is defined by a
[1:53:04] parameter called fire ready to power it's measured in megabot which is measured by satellite so fire ready to
[1:53:11] power is nothing but rate of emitted radiant energy by the fire at the time of the satellite observation uh in typically we
[1:53:22] often call it frp or fire and it depends on the amount of fuel and the rate of burning so higher the
[1:53:30] frp frp of a fire better the chance of detection and satellite guys so typically we don't have information
[1:53:39] about sub pixel or how within a given pixel how much area is burning we we don't have that
[1:53:46] information readily available for inactive fire data we will discuss some of those aspects when we go to the burnt area calculation
[1:53:55] that we'll covered in the next session next couple of session session five and six actually okay question 13 how can we
[1:54:07] differentiate real and fake fire detected by satellite so it is a difficult problem to solve completely but there are ways in which
[1:54:17] we can detect fake files for example if you see a spot on earth which is classified as fire every single day
[1:54:26] then it may be an artificial fire uh or artificial structure due to the presence of uh specific
[1:54:36] specific main med structure for example solar farm if you detect a fire uh every day close to a solar farm or
[1:54:45] in location where there is a solar farm located it most likely coming it's a false alarm positive false alarm so
[1:54:53] by comparing the location of these fires with other type of data sets like line classifications like locations of the structures which
[1:55:05] potentially have uh higher temperature anomalies uh for example areas and deserts um so by by looking these or intercomparing by
[1:55:17] these other structure you can actually identify some of those fake fires okay okay question number 14 is fire count really just the number of
[1:55:33] fire number pixels identify as fire or or they aggregate into true events when a single fire may be
[1:55:43] large and take up many pixels is this what post processing models do so when we create the data sets we don't
[1:55:51] do any pixel merging through uh for a larger fire fire count are really just the number of pixels
[1:55:59] identify as file but when people do the use this data in research for emission estimation for burnt area
[1:56:07] they may do additional processing or post processing to to do do to account for large fire or small fire
[1:56:16] in that way question 15 i think it's the same as 14 question 16 um i suggest you change the fire count to
[1:56:33] hot spots count because that is exactly what you're counting uh a fire is collection of hot spots
[1:56:40] over continuous area definition and words might be particularly when the majority of your student have been on a
[1:56:46] fire in fighting or management role yeah i think that's a good suggestion and we will try to look into it uh typically fire
[1:56:56] counts are used so often in remote sensing community we often forget its practical use but i think that's a
[1:57:03] great suggestion okay will there be a consolated list of satellite endings for all sessions available at the end of the
[1:57:14] session 6. we will have some of these also in addition to that after each presentation there are some
[1:57:23] reference slides where we actually try to summarize some of the satellite sensors and product and resolution so you want to
[1:57:32] check out those reference slide as well but we can we we can we can look into see if what
[1:57:40] what else we can provide which can help users users to find the information in one place okay question 18 on slide 21 horsepower
[1:57:52] were identified under the dense smoke what method can be used to identify hot spot under dense smoke in the image on
[1:58:04] the slide 22 in california so we don't have any alternate methods to detect the fires sorry about that my kids are
[1:58:28] so so we we like i was saying we don't have alternate methods to identify hot spots or fire detection
[1:58:35] under under heavy or thin smoke cases the same algorithms are used but it is also true that sometime
[1:58:44] depending on the thickness of the smoke layer layer some of the fires can be missed but if
[1:58:50] these fires are large enough and if they are producing enough uh frp or have enough intensity which can penetrate through those smoke
[1:59:01] plumes then the fire will be detected question number 19 um so so we said that virus detected three to
[1:59:20] four times more fire than mode is does this difference in detection refer to pixel count total burnt area or both this is
[1:59:30] referred to the pixel count question number 20 i'm interested in identifying fire smoke from low level fog
[1:59:44] the interest is in where there is overlap it can produce dangerous transportation issues okay uh i'm not sure what is the
[1:59:54] question here but i can understand the problem um and i think there there can be ways and it
[2:00:02] can be done but we haven't covered that part here in this if you're interested more please send me
[2:00:08] an email and i will be able to probably direct you to some research published research on the topic
[2:00:18] okay thanks for sharing the wonderful tool worldview is there any possibility to quantify the release of gases like
[2:00:25] co2 and o2 during wildfires yes yes there are ways in which you can do actually calculate the emissions of
[2:00:34] individual gases we will learn about some of the emission inventories how they are developed in next session uh on
[2:00:41] thursday um but but and then that's where we will actually learn some more about how we can get
[2:00:49] both particulate emissions as well as the trace basis question 22 can worldview data be freely downloaded downloaded also i want to know if it's possible to
[2:01:05] download data of a particular area or city of the world so yes all the data which are available
[2:01:12] on various nasa centers either its world view firms or any other they are all free you can download the data for particular
[2:01:22] area or city uh either from firms or from uh there are not too many options on world
[2:01:29] view for downloading the data but there are other resources and we have some training material on ourselves website
[2:01:37] for specific dot data download instruction and you can follow along those to get the data of a particular location
[2:01:50] okay okay is it possible to save california's 2020 wildfire as jpg image to be used in publication and how do i cite it
[2:02:01] so if you are referring to the worldview site yes you can save the image as jpeg or png if you go on top right corner
[2:02:10] there are options there is the camera sign if you use that sign there are options to download the image
[2:02:17] you can select certain area and you can download the image as jpeg png or kmz or other format
[2:02:25] and if you go to the information page or about page you will find a instruction on how to
[2:02:35] cite the world view in the publication question 24 if we use satellite imagery in the case of forest rock fires how do we know if
[2:02:51] the fire is accidental or purpose such as land clearing clearing from satellite point of view it is not
[2:02:58] possible to determine the cause of fire using satellite data alone you you will have to have a information
[2:03:07] from the ground to identify the cause of fire fire question 25 can we trace the propagation of wildfire
[2:03:18] using high resolution fire detection from viewers you can you could view the day-to-day progression of the perimeter
[2:03:24] of larger fire if if if not needed in near real-time data you can look at the progression in burnt area product also
[2:03:34] and if you are looking to monitor the progress of wildfire within a given day only then you will have to
[2:03:42] rely on geostationary satellite which can actually provide you every 10-15 minute measurement and that will allow you to not only
[2:03:51] monitor the progression of fires as well as the transport of smoke in different parts question 26 for me the hardest part of
[2:04:07] using world view is the projection of the map it is hard to look at the area at higher
[2:04:13] lower lower latitude even with the arctic projection are there any plans to add more projection option to this tool
[2:04:22] uh not sure about the projection features which will be added to the world view but this is a great
[2:04:29] suggestion and i would strongly recommend that you use one of those contact information given on the world
[2:04:35] view and make your suggestion directly to the world view team is there a way to correlate fire
[2:04:47] resistance to fire detected um i'm not very clear on that question so so i will leave it at that point
[2:05:02] question 28 how did you differentiate between forest fire and agriculture fires so agriculture fires sets by human for the purpose of crop
[2:05:13] residue cleaning forest fires that takes place in forest ecosystem as opposed to crawfield can have both natural and human cause
[2:05:23] typically agriculture fires tend to be smaller and less hot than the forest fires fires making them more difficult to detect
[2:05:30] from the satellite but in addition we use the land cover type data sets which we can superimpose with the fire data to
[2:05:39] differentiate between different types of fire and we can also use some time higher special resolution data such as landsat
[2:05:48] to detect these small fires what is the need of using modis data which has a coarser resolution as
[2:05:57] compared to us data that has a better resolution resolution so as you know modis has been around for
[2:06:03] almost 20 years and that is the advantage of mode is griers came along in 2012 so if you're
[2:06:09] really looking for long-term stable time series of the data then modis provide that veers is getting there and mirrors eventually will
[2:06:19] replace modis um but in absence of weirs modis is the sensors to look for the longer time series
[2:06:30] okay question number 30 how can we differentiate fire on the basis of higher degree of probability on the basis of satellite data okay
[2:06:38] again i'm not clear about this question so i will leave it question 31 graded fire hotspot is
[2:06:46] showing actual count of fire pixel correct and not group of pixels that makes up the fire yes the actual number
[2:06:54] of fires within a grid cells defined by a box of latitude and longitude that is the actual fire count
[2:07:05] question 32 how does forms determine that const what constitute one fire in other words what is the sensitivity
[2:07:13] threshold for one file detected again uh firms in worldview and all other nasa sources use the same fire data detected
[2:07:21] by the fire algorithm as we discussed in first part of this talk and we have already discussed some of
[2:07:29] the limitations of this fire detections okay okay question number 33 is it possible to to give real world feedback to the data
[2:07:50] based to exclude industrial exhaust and given and give input from real wi-fi event that were not detected is it possible
[2:08:00] you would feedback to the database to exclude industrial exhaust exhaust so i'm not sure what is the
[2:08:14] if this if you're referring for the data processing center then we don't have any mechanism to receive this kind of feedback right now
[2:08:23] but if you are referring to the post processing processing by individual researchers or application users then definitely they can use additional
[2:08:34] database database of industrial exhaust or others to mask those specifiers specifiers to to come up with the wildfires events or
[2:08:47] whatever type of files they are specifically specifically interested in question number 34 can the senses detect hotspot in plume of fire
[2:09:10] and mark a hot point that isn't this on the surface that is very good question uh honestly i
[2:09:19] don't know the correct answer uh my my understanding is that it should not be detecting uh uh fire
[2:09:31] fire in the hot smoke plume but i might i may be wrong i might i i can be wrong so
[2:09:40] honestly i really don't know the correct answer okay question 35 what is the ideal threshold of confidence for fire
[2:09:56] detection also are their range regarding frp to classify strong and weak fires uh yes there are range of frps which can
[2:10:07] classify the weak fire or strong fires and some of that is being used while defining the confidence level of fire detection
[2:10:17] uh i don't remember top of my head what is those thresholds in frp but if you look again
[2:10:27] uh slide i think 2021 where we have given some reference to the activity or the algorithm document you will be able to
[2:10:37] find some more specifics on that topic okay what does the smoke from peat fires looks like how does it differ from the
[2:10:49] wildfire smoke okay um i'm not uh so peat fires are typically uh smoldering type of fires uh they burn
[2:11:00] for a long time continuous smoke is emitting emitting on the other hand wildfires are typically burn very fast quickly
[2:11:11] progressing progressing and produce huge plumes of smokes uh i think that is my understanding melanie do you have anything to add on
[2:11:19] that no i think that's a good distinction um i'm not sure visually from true color imagery that you could
[2:11:28] distinguish say a peat fire from a forest fire just using just like looking at the color for example
[2:11:37] more information would be needed okay thanks melanie okay question 37 how about utilizing angstrom exponent and single scattering
[2:11:52] value to differentiate dust and smoke uh yes we can use uh actually both of these parameter unfortunately
[2:12:02] unfortunately we don't have very good estimates of single scattering algo from the satellite except we get some data from
[2:12:08] omi omi uh angstrom coefficient is uh in principle same thing as we use the combination of multiple
[2:12:17] spectral channel because angstrom coefficient is nothing but the spectral uh different in spectral response to the different types of aerosols so
[2:12:28] uh uh people often using strong exponents to actually detect dust more um for smoke it is little bit tricky
[2:12:37] because uh if you use specific thresholds uh some urban aerosols urban type particles which are of the similar size
[2:12:46] range range can also be detected as smoke okay so we are nearing uh to close our session in another three minutes i'll
[2:12:58] try to take few more questions in the modis actify data sets in which the confidence values vary from 0 to 100
[2:13:06] are their generally accepted threshold used to help distinguish between false alarm and real fires alternately what thresholds are applied to numerical
[2:13:16] confidence value to classify low nominal and high confidence of fire detection in the modest data sets i'm not actually sure about what
[2:13:29] specific numbers are assigned but the low nominal and high confidence numbers numbers does not really depends only on those
[2:13:41] values but it has other parameters which play into role which are related to the specific test which algorithm go through
[2:13:50] but i'm not sure about specific numbers which goes into these levels of confidence okay question number 39 can we do
[2:14:03] prediction studies of air quality or forest fire using nasa world view okay uh i think the the short answer is no
[2:14:17] we will learn about some of the prediction or forecasting in next session on thursday but depending on specific uh
[2:14:29] needs there may be some studies which can be done but not in general will be see an example application to
[2:14:41] make the fire product as a summary uh again i'm not sure if i understand the question here
[2:14:51] but we did look a case study in this presentation and we will look throughout this in our series some of the case
[2:14:57] studies if that is what you mean okay so the last question i'm going to take after that we will close the
[2:15:06] session session could we calculate concentration of aerosols aerosols from satellite to compare with the concentration from the ground monitor
[2:15:16] station station chemistry yes so we will do uh this some of this calculation calculation especially the emissions
[2:15:26] in session four on thursday if you are referring to the mass concentration when you are comparing with ground station that's something
[2:15:35] like pm 2.5 or no2 then that has been done differently and we looked some of that in today's presentation
[2:15:44] for pm 2.5 but we do have some specific webinar also also and how to convert those aerosol which
[2:15:53] comes from satellite that is a russell optical depth to pm 2.5 so we do have some specific training material on that
[2:16:01] on asset website okay uh i think uh since it's already 1 15 and 12 15 for me
[2:16:13] um maybe we can close this question answer session now i know there are several more questions left
[2:16:20] actually they're not too many should i just take them quickly only five more left okay uh quickly what
[2:16:27] did you design the tropomy lube with so i used the noaa's jstar mapper which which has troponin data available can
[2:16:38] you give a brief on how the thermal anomaly thresholds values are determined uh are these the same world view
[2:16:47] okay i'm not very clear about this question question 43 i will skip it could you please elaborate on false
[2:16:54] positive okay so the false positives are basically the the fires where um where algorithm or satellite is
[2:17:08] detecting as a fire but in fact in reality it is not a fire it can be it
[2:17:14] can be a structure or solar form or some something happening on the ground which making the area hot enough to be
[2:17:23] detected as a fire do you think that it is possible to use different wavelength to detect the type
[2:17:32] of dust event limestone red science yeah so there have been some research studies to do that uh but
[2:17:39] we don't have any uh data product to do that but people have done on a research basis and if you look the
[2:17:47] literature you may find some reference okay question 46 how much modeling accuracy can be attributed to pm 2.5
[2:17:56] data if we use as our basis for predicting modeling for original eq again uh this is more related to
[2:18:05] modeling of air quality so i will refer to the next session and we will cover some of that aspect in
[2:18:11] next session question 47 how can we forecast the movement of fire i'm assuming that the variable to take
[2:18:20] into account are those used in pre-fire assessment but how do we keep track of their special temporal trends in
[2:18:27] relation to the presence of active fire so it is hard problem to detect the movement of fire itself on
[2:18:38] the ground and again i'm assuming we are talking about the actual fire not the smoke smoke uh so it really depends on many factors
[2:18:46] which we discussed during the pre-fire assessment like fuel type the soil moisture temperatures wind directions uh uh available fuels um all those factors
[2:18:59] play a role there are models which probably uh applied applied locally by different agencies but i'm not familiar with
[2:19:12] those models myself okay i think that's all we took all the questions [Music] [Music] thank you everyone for attending and
[2:19:25] hopefully you have something to learn from this webinar series and we will get back again on thursday with
[2:19:35] another session on air quality forecasting and fire emission database thanks everyone you
