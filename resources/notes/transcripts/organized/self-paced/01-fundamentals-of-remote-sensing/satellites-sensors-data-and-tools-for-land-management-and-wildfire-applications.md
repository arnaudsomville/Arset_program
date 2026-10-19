# Satellites, Sensors, Data and Tools for Land Management and Wildfire Applications

`https://www.youtube.com/watch?v=qiqUAlJK4vI` · id 192 · 44:03 · module 1 — Module 01 — Fundamentals of Remote Sensing

[00:00] hello everyone and welcome to session two of two of our fundamentals of remote sensing webinar focused on land management and
[00:07] wildfire applications wildfire applications this is the second of three introductory sessions that we offer session one covers the fundamentals and
[00:15] there's also a second session two covering water resources these sessions are intended to provide a basic overview of remote sensing and are
[00:24] recommended as a prerequisite for any future rsi webinar that you may attend particularly for land management wildfire and water resources
[00:34] these webinars are a little different than some of the others that ourset offers because they will not be offered
[00:40] live nor will we provide certificates of completion however as i just mentioned they may be required as prerequisites
[00:48] for future more in-depth webinars my name is amber cuss and i will be presenting this webinar to you along
[00:54] with cindy schmidt before i get started with discussing the fundamentals of remote sensing i wanted to give you some information about the
[01:05] rset program rset program the goal of rset is to increase the utility of nasa earth science and model
[01:11] data for policy makers regulatory agencies and other applied science professionals in water resources disasters health and air quality and
[01:21] land management land management we offer several kinds of trainings including online trainings and in-person trainings trainings to date we have conducted 53 trainings
[01:31] with more than 4 000 participants from many different organizations and countries arsen currently has three primary focus
[01:41] areas for training health and air quality water resources and flood monitoring and land management which includes wildfire applications
[01:50] we also provide training to individuals and organizations that would like to develop their own online or in-person
[01:58] trainings trainings this introductory webinar is useful for water resources and land management applications applications there will be different introductory
[02:07] webinars for health and air quality so please check back on the rsat website listed on the previous slide for more
[02:14] information about that here's the outline for this session cindy schmidt and i will be presenting on the satellites used for land
[02:23] management and wildfires we will provide the basics of land cover mapping and outline land cover and fire
[02:29] detection products detection products we will then discuss the basics of detecting land cover change and finally give you some information on two
[02:37] vegetation indices vegetation indices ndvi and evi next we are going to discuss the specific satellites in sensors we will
[02:48] start with a brief overview of the primary sensors for land management landsat and modis then talk about the characteristics of
[02:56] the data and where to obtain the images and products first i will discuss the modis instrument modis is one of the key imaging
[03:08] instruments for nasa's earth observing system system it is designed to measure large large-scale global dynamics across land
[03:16] oceans and the atmosphere flying on two satellites terra and aqua allows the modis sensor to capture imagery of the same area on earth at
[03:26] different times of the of the day modus imagery has varying spatial resolution depending on the product you're interested in from 250 meters to
[03:34] one kilometer one kilometer the temporal resolution also varies from daily to eight day sixteen day monthly and yearly composites
[03:44] these data are available from 2000 to present present the original data format is hdf however there are now new sites that provide
[03:51] modis products modis products as files such as geotiffs that are easily digestible into geospatial software such as gis spectrally it has
[04:01] 36 bands and the major bands of interest are in the visible and infrared modis tiles or the area over which modis
[04:11] image is obtained is much larger when compared to landsat which we will discuss soon discuss soon this figure shows modus tiles compared
[04:19] to landsat tiles the red dots in the center of each of these smaller swaths represent the center of a landsat image and the
[04:32] brown squares represent the outline of a modus image modus image the lopsided squares that are in blue
[04:40] are one single modis image so you can see that a modis covers an area that is much larger than landsat
[04:53] the modus naming convention can also be quite confusing but it's important to understand the information within the
[04:59] names of the modis products when you've downloaded it from the website so the first part of the name is
[05:05] actually the product number shown here it could be mod which means it comes from the pterosatellite it could be myd
[05:15] which means it comes from the aqua satellite or mcd which means it's a combined terra and aqua image
[05:23] the next part of the name is the instrument it comes from so modis next is the platform here it's terra
[05:31] it can also be aqua or combined the name indicates the parameter in this case it's surface reflectance
[05:40] then it provides the temporal resolution eight day but it could also be a 16 day or monthly
[05:47] for example for example and then it provides the processing level the spatial resolution the projection in this case sinusoidal
[05:56] and the file type grid it's much easier to call modis products by the shortened name shown in this
[06:07] table such as surface reflectance as mod 09 09 the vegetation indices produce products are also called mod 13.
[06:17] this table also provides many of the products available that are useful for land management such as land cover and
[06:24] land cover change leafy area index primary production and others as you can see the temporal resolution also varies from daily to composites at
[06:35] 8-day 16-day monthly and yearly for more general information on modis here are two websites that are really
[06:44] useful useful the first is the land processes distributed active archive center or lp dac dac the lpdac operates as a partnership
[06:53] between the usgs and nasa the second is the earth observing system data and information system or eostas
[07:01] they have additional information on modis and multiple nasa products they also have some great webinars themselves so i recommend checking out
[07:08] this website for more information on modis and landsat imagery and products in addition to providing information about modis both eos disk and lpdac have
[07:18] many different data sets available for download there are many places to obtain modis products and a few of them are listed
[07:27] here here there is echo reverb the modis land product subsets at the oakridge national oakridge national lab dac
[07:36] lab dac there is the global land cover facility glovis and the fire information for resource management system or firms
[07:45] which delivers global modis hot spots and fire locations in near real time here are some additional places to find
[07:55] modis data modis data and these provide more visualization tools tools first listed is worldview which is a tool that provides the
[08:03] capability to interactively browse and download global satellite imagery currently there are limited modis land products available you can find fires
[08:13] land surface temperature and snow cover on that website severe a joint nasa usaid capacity building program has a global
[08:23] visualization mapper that enables you to visualize modis and other data globally mrt web will be discussed next
[08:37] historically modis land product tiles have been distributed in a standard 10 by 10 degree extent with a sinusoidal
[08:44] projection in hdf format there are now new modis data discovery and delivery services through mrt web mrt web enables you to visualize select
[08:56] mosaic mosaic subset reproject and reformat modis land products next i will talk about the visible infrared imaging radiometer suite or
[09:10] viirs viirs like modis viirs is a multi-disciplinary sensor providing data for ocean land aerosol and aerosol and cloud research and operational uses
[09:23] viirs was launched on board sumi npp on october 28 october 28 2011. the spatial resolution is 375
[09:32] to 750 meters depending on the product with similar similar temporal resolution as modis as modis therefore data are collected daily and
[09:41] there are 8 day 16 day monthly quarterly and yearly composites the sumi mpp satellite is also in the
[09:49] same orbital plane as the a train which includes satellites such as cloud set calypso terra modis but it's at a higher altitude
[09:58] it is a sun synchronous at at 824 meters with a local equator crossing time of approximately 13 30.
[10:09] there are 22 bands measured by viirs this includes bands in the visible spectrum such as red and blue as well as
[10:15] bands in the infrared the near infrared bands have been shown to be used particularly for applications such as wildfires
[10:26] there are a number of ways that modis and virus differ both in the inherent spectral and spatial characteristics of
[10:32] the sensors as well as in the algorithms being used to develop the products from the raw data and the distribution of the
[10:39] data data nasa has been working closely with noaa to investigate and correct algorithm issues the lampeat at goddard has been
[10:48] reprocessing viirs data and making versions available in common formats very importantly with geo registration while viirs is similar to modis there
[11:01] are many differences in the spectral and and spatial characteristics as well as with the data processing and data
[11:09] delivery delivery they have similar but not identical spectral characteristics with two of the bands and viirs as non-functional
[11:16] viirs has improved spatial resolution at the edge of the swath but has a lower resolution for the visible and infrared
[11:23] bands bands some of the standard products for veers are different than modis for example there is no top of canopy ndvi
[11:31] environmental data record there are differences in the algorithms used for cloud and aerosol filtering and in the way that raw data are processed
[11:40] data distribution is also different between the two there are a variety of land products produced in conjunction with noaa the
[11:50] most useful for land management is the active fires product albedo land surface temperature and the vegetation index
[11:59] vegetation index the veers vegetation index environmental data record or the vi edr is a swath product generated every day
[12:08] at the spatial resolution of 375 meters over land over land the vi edr consists of two vi's
[12:16] the normalized difference vegetation index or ndvi derived from the top of atmosphere reflectances and the enhanced vegetation
[12:26] index or evi derived from atmospherically corrected top of canopy reflectances to to find the viirs products you can
[12:38] search the comprehensive large array data stewardship system this is hosted by noaa and provides access to many
[12:45] different data products in addition to viirs the website is shown here all viirs land products can also be
[12:54] acquired from the level 1 and atmospheric archive and distribution system or lads web web lads web website it includes the most
[13:04] recent products generated by nasa in hdf4 format this is an example of how viirs top of canopy enhanced vegetation index has
[13:17] been used to document the changing vegetation conditions in california during one of the worst droughts in history
[13:24] history the blue areas indicate areas of green vegetation vegetation such as these shown here while the dark brown areas are not
[13:35] vegetated vegetated you can see gradual decreases in the vegetation from 2013 to 2015. in 2015 the dark blue
[13:49] slash green color you see here indicates irrigated cropland next i'll be discussing the landsat satellites satellites landsat was first launched in the early
[14:06] 1970s the data from the early landsat sensors were called multi-spectral scanner imagery or mss those data have a lower spatial
[14:16] resolution than landsat data than the data you can obtain today the mss data are 79 meters and the
[14:24] current landsat data are mostly 30 meters meters most recently landsat 8 was launched in february of 2014.
[14:32] we have this continuous data at fairly high resolution which is very useful for examining land surface changes over time
[14:40] just recently all of these data were made freely available by the usgs there is also a landsat global archive
[14:47] which we'll mention later this slide provides some information on the spectral characteristics of landsat landsat was designed primarily to detect
[14:57] visible and infrared light that's reflected from the earth's surface this graphic at the bottom shows you that these data are collected in
[15:04] different bands shown here and each of these bands represent a range of wavelengths for example bands 1
[15:16] and 2 and 2 bands 1 2 and 3 detect data from the visible light range you can see in the graphic here that
[15:24] band 1 is primarily blue green but it's called blue called blue band 2 is green yellow but it's called
[15:31] green and band 3 is red band 4 is the near infrared band 5 is the mid-infrared band 6 is a thermal
[15:41] band and band 7 is another mid-infrared band band there's also a panchromatic band which has a higher resolution of 15 meters as
[15:50] opposed to the 30 meter multi-spectral bands the pan chromatic band works just like a black and white film
[15:57] instead of collecting visible colors separately it combines them into one channel channel because this sensor can see more light
[16:04] all at once it's the sharpest of all the bands this table provides each band the wavelength for each band and the spatial
[16:15] resolution of each band remember spatial resolution refers to the size of each pixel represented in square meters on
[16:22] the earth the earth the bands are all the same with the exception of the thermal bands which are
[16:27] a little coarser resolution than the rest landsat 8 the sensor that was recently launched is a little different and has
[16:37] some additional bands that were not available in landsats four through seven there's an additional band one that is a
[16:43] coastal aerosol band that's designed to focus on near-shore environments and to penetrate the water a bit to and to look
[16:50] at aerosol particles in the air all the other bands are the same until you get to band 9 which is a serous band
[16:58] designed to look at clouds and then there are two thermal bands bands 10 and 11. the thermal bands are
[17:05] collected at 100 meters but are resampled to 30 meters to match the rest of the bands this figure shows the differences in
[17:15] band coverage between landsat 7 and landsat 8. landsat 8. it also provides information about the atmospheric window that allows the
[17:23] sensors to obtain data in those spectral ranges these windows represent the wavelengths at which electromagnetic radiation will
[17:32] penetrate the earth's atmosphere and thus can be observed by our sensors notice that while the bandwidths are
[17:40] similar for the two landsat sensors particularly in the visible range they are not identical therefore it's important to understand these
[17:48] differences when applying the same processes to each image from two different sensors there are multiple websites where you
[17:59] can find information on and obtain landsat images landsat images i think it is oftentimes times confusing because many of the sites function in
[18:07] the same way in general people tend to use the sites that they're most familiar with however it's probably a good idea to
[18:14] take a look at the various places where you can obtain these data and see what you prefer in regards to the way the
[18:20] data are visualized and how you can download the imagery here are a few examples of where you can
[18:25] obtain landsat imagery with the website links below links below first we have the landsat look viewer this is one site where you can only get
[18:34] landsat data it's it's also a nice site to look at the quality of the data glovis is a really quick and easy online
[18:41] search tool and has different kinds of data such as modis the global land cover facility has all
[18:48] of the landsat data as well as aster data data the earth explorer is also easy to use
[18:54] to download different types of data in addition to landsat the nice thing about earth explorer is that you can use a shapefile or kml file
[19:02] to help locate your area of interest you can also obtain data from the web landsat data portal or weld that
[19:12] provides landsat data for 2003-2012 for the continental u.s and alaska and globally for 2009 2010 and 2011.
[19:23] the weld data are terrain corrected and radiometrically calibrated so users don't have to convert the landsat digital numbers to reflectance
[19:32] the osgs also has been working on the landsat global archive consolidation and this figure on the right
[19:40] here shows you where there are more in red in red or less in blue landsat acquisitions over the over the scale of landsat's
[19:55] lifetime lifetime finally the global land survey data is not a data portal but it's a global collection of cloud cloud-free landsat
[20:04] images from 1975 to 2008 there's also time series available from 1975 1975 1990 2000 2005 and 2010
[20:16] that are useful primarily for change detection these data products can be acquired acquired through some of the portals mentioned
[20:23] earlier i will now hand it over to cindy and she will discuss land cover mapping with satellite imagery
[20:35] hi everyone i'm cindy schmidt and i will be first discussing land cover mapping with satellite imagery the process of land cover mapping
[20:46] involves turning satellite data into thematic information about the region the primary method of doing this is called image classification
[20:55] on the left is a landsat image of lake tahoe and its surrounding forests however the landsat image cannot tell
[21:02] you whether the lake is actually water or the force is actually forest the classified image on the right
[21:09] shows how the pixel information in the satellite imagery can be transformed into land cover types in order to understand how image
[21:19] classification works we need to discuss the spectral signature of objects as you recall electromagnetic energy radiates from the sun in different
[21:28] wavelengths satellite sensors measure radiation that is either reflected or emitted from objects on the earth's surface surface those objects reflect radiation
[21:39] differently as shown in this graph in the graph the x-axis represents both wavelength short to long from left to
[21:47] right and the corresponding landsat bands bands and please note that these are landsat 4 5 and 5 and 7 and not landsat 8.
[21:57] the y-axis represents the amount of reflectance of radiation for different land cover types vegetation reflects both green and
[22:06] near-infrared wavelengths while soil reflects a little higher in the shortwave infrared wavelengths these are called spectral signatures
[22:19] on the left we see a graph of spectral signatures for soil vegetation and water you can also see the corresponding
[22:26] landsat bands to the wavelengths that are on the xx axis in order to understand how image classification works we need to look at
[22:34] the relationship between the spectral signatures and the bands in a little different way different way in the graph on the right we've plotted
[22:42] the band 3 the red web lengths against band 4 band 4 near-infrared near-infrared looking back at the graph on the left if
[22:51] we just look at water you will notice that the percent reflectance is low in both band 3 and band 4.
[22:58] if you plot that information on the graph on the right water will appear in the lower left hand
[23:04] corner low band 3 and low band 4. going back to the graph on the left if you
[23:10] look at vegetation you will notice that vegetation has low reflectance in band 3 but high in band 4.
[23:18] translating that to the graph on the right means that vegetation belongs on the lower right hand side low band 3 but
[23:26] high band 4. lastly dry soil has slightly higher reflectance in band 4 than band 3 but the values are in between water and
[23:36] vegetation vegetation you can see where soil falls in the graph on the right so now you can see
[23:42] that the three land cover types are in three very different locations on the graph image processing software can be used to
[23:53] separate out the different land cover types using this method all pixels that have similar reflectance characteristics to each of the land
[24:01] cover types will be labeled the same of course landsat imagery has more than just two bands so the software uses any number of bands
[24:10] that you choose you can also specify the number of land cover classes that are in your study
[24:15] area area in this example there are only three land cover classes water vegetation and dry soil but in reality of course there
[24:25] are many more there are many ways of doing image classification but two common ones are called supervised and unsupervised
[24:32] classification we will not go into any detail about these methods but if you are interested i encourage you to read
[24:38] more about it or take an image processing class one of the most common questions we get is can you distinguish between different
[24:48] vegetation types the answer is it depends depends using a multi-spectral sensor like landsat green vegetation looks very
[24:56] similar and it is often very difficult to distinguish between different vegetation types however there are various methods that may help
[25:06] one is to use a hyperspectral imager such as avarice which uses an airborne platform platform hyperspectral imagery enables you to
[25:14] detect more subtle differences between vegetation types vegetation types another common method is to use ancillary information such as elevation
[25:23] slope and aspect with landsat imagery to help distinguish vegetation types this method uses the assumption that some different vegetation types will
[25:32] grow in different regions for example some species of conifers only grow at high elevations and some only at lower
[25:40] elevations elevations another very common method is to use the spectroradiometer in the field to collect specific information about the
[25:49] spectral reflectance of different vegetation types vegetation types this is typically used with hyperspectral imagery to precisely identify spectral signatures
[26:01] next i will describe land cover products derived from satellite data that you can download land cover products for just the u.s
[26:12] include the national land cover database gap analysis data and landfire global products include the fao global land cover network and various force
[26:23] change products change products next i will be discussing these products the nlcd products include land cover type percent impervious surface and
[26:35] percent tree canopy cover at 30 meter spatial resolution spatial resolution the database is available for 1992 2001
[26:44] 2006 and 2011 and is created using a 16 class classification scheme the database is based primarily on
[26:53] landsat data along with other data sources such as topography census and agricultural statistics soil characteristics wetlands and other land
[27:02] cover maps the data are freely available at the website listed here the usgs gap analysis program has three
[27:15] primary goals primary goals one to identify conservation gaps that help common species common two to provide conservation information
[27:24] to the public so that informed resource management decisions can be made and three to facilitate the application
[27:31] of gaap data to specific resource management activities management activities to do this gap maps the land cover of
[27:38] the u.s the u.s maps predicted distributions of vertebrate species maps the location ownership and stewardship of protected
[27:46] areas and documents the representation of vertebrate species and land cover types in areas managed for the long-term
[27:53] maintenance of biodiversity the land cover is mapped at 30 meters spatial resolution using landsat satellite imagery as well as other data
[28:03] sets such as digital elevation models soils geology stream and wetland location location other data include point locations for
[28:13] rare plant communities and fire and tree harvest information harvest information the gap data can be found using the land
[28:20] cover data viewer found on the website listed here the landfire mission is to improve fire and natural resource management
[28:33] this program provides a national inventory of geospatial data vegetation composition and structure fire behavior and effects fuel
[28:43] loading models and fire regime conditions of the entire u.s from 2006 to present to present data products are organized into groups
[28:52] which include disturbance vegetation fuel fuel fire regime and topographic data products are delivered at a 30 meter pixel resolution for landscape
[29:03] scale analysis scale analysis the products are great for national and regional planning because they are updated every two years to reflect
[29:11] changes on the landscape over time you can find these data at the website listed here the food and agriculture organization
[29:22] has developed a global gland cover map using the best available national regional and or sub-natural national land cover databases
[29:31] they used a specialized system and fusion techniques to harmonize the various databases and developed a procedure to update the database when
[29:40] new data sets become available the database is comprised of 11 land cover layers cover layers the database is currently in beta
[29:49] release but can be downloaded from the website listed here the modis yearly land cover product incorporates five different
[30:00] classification schemes that describe land cover properties derived from observations spanning a year the primary classification scheme identifies 17 classes defined by the
[30:12] international geosphere biosphere program which includes 11 natural vegetation classes vegetation classes three developed land classes and three
[30:22] non-vegetated land classes the data have a spatial resolution of 500 meters and can be downloaded from the eostis reverb website
[30:36] i will talk specifically about fire detection products the modis thermal anomalies and fire product provides snapshots of both
[30:47] active burning fires and burned areas globally globally modis's mid-infrared band allows the instrument to identify the locations of
[30:56] thermal anomalies thus active fires this product provides unique dimensions such as a fire mask and a fire pixel
[31:04] table for each fire pixel the fire pixel table characterizes 19 attributes for fire pixels including maximum fire radiative power
[31:18] firms provides near real-time active fire mapping and historical data available for download you can get or visualize the data in various ways
[31:27] including email alerts download directly or visualize in web-based tools you can get more information on the firm's data
[31:35] from the website listed here this modis product detects the approximate date of burning and maps the spatial extent of recent fires by
[31:48] analyzing daily surface reflectance and using a model based change detection algorithm to locate rapid changes on the
[31:56] earth's surface earth's surface this is a monthly gridded 500 meter product that you can acquire at the
[32:01] website listed here the image shows the extent of a fire that occurred in 2007 in georgia and
[32:08] florida florida the colors represent the different dates of burning between april and may 2007 a relatively new product is the viirs
[32:20] active fire product it provides near real-time active fire locations currently at 700 meter or the m band
[32:28] with a beta version of a 350 meter or i-band product i-band product this product is developed using an
[32:35] algorithm that detects thermal hot spots on a daily basis the viirs data are also searchable on a
[32:45] user-friendly mapping interface and available for download as a geotiff ascii or kmz file you can access these data and visualize
[32:54] them as well at the website listed here next i will be discussing how to detect land cover change with satellite imagery
[33:09] detecting change of the earth's surface features is extremely important for understanding relationships and interactions between human and natural
[33:17] phenomena phenomena the questions that can be answered using remote sensing include where and when has change taken place
[33:25] what is the quantity of the change and what is the nature of the change and lastly what are the cycles and trends of
[33:32] the change over time these images show the growth of santiago chile between 1975 and 2013 from the
[33:40] landsat sensor these are just a few of the many applications of change detection using satellite imagery satellite imagery the images on the right show bark beetle
[33:52] infestation in colorado between 2005 and 2011. 2011. in 2005 there was little to no infestation as shown by the green
[34:01] vegetation vegetation in 2011 the brown areas indicate the trees that had been killed due to the beetle infestation
[34:13] many change detection techniques using remotely sensed imagery have been developed and i will be describing these four of them to you
[34:25] one of the most basic methods for detecting change using satellite imagery is called heads-up digitizing in this method you display the imagery
[34:35] using gis or image processing image processing software and digitize a polygon around the areas of change in these images the santiago urban area
[34:45] was digitized for the two different years years the size of these polygons can then be measured to quantify the amount of
[34:52] change that has occurred these traditional methods use the change in the pixel values to document change the image subtraction method works by
[35:06] simply taking a single band from two different dates of imagery and subtracting one from the other that
[35:12] results in a change image the change image consists of positive and negative values where changes occurred and zero values where no change
[35:21] has occurred has occurred image classification requires that both dates of image stacks consisting of multiple bands be classified first to
[35:30] identify land cover classes by pixel then using a pixel by pixel comparison change between land cover types can be
[35:38] detected detected for both these methods it is very important that the images are precisely registered to each other
[35:46] for both methods you need gis or image processing software you also need to know the area well enough to interpret
[35:53] the change because the software will not do that for you recent developments in change detection methods take advantage of the entire
[36:04] fully available landsat archive by using monthly or annual time series to look at changes or trends while in the previous
[36:13] previously described methods you would only use two image dates in this method you could use 20 or 30 image states
[36:21] this method allows the capture of short duration disturbance events as well as long-term disturbance trends this approach is founded on the
[36:29] recognition that change is not simply a comparison between conditions at two points in time but rather a continual
[36:37] process operating at both fast and slow rates on the landscapes there are several different algorithms emerging and this is an example of land
[36:47] trender developed by kennedy kennedy at all at oregon state university the results of this algorithm include the magnitude of change that identifies
[36:57] the percent of tree cover loss the duration of the disturbance and the year of onset of the disturbance
[37:07] next i will be discussing the use of remote sensing for deriving vegetation indices and phenology normalized difference vegetation index
[37:21] or ndvi is one of the most commonly used vegetation indices vegetation indices it is based on the relationship between
[37:28] the red and the year infrared wavelengths wavelengths when sunlight strikes plant leaves the chlorophyll in those leaves strongly
[37:35] absorbs visible light primarily blue and red red and the cell structure leaves reflect green and strongly reflects near infrared
[37:45] light light this is portrayed in this graphic on the top as well as the graph below it
[37:51] the two key wavelengths for ndvi are the red and near-infrared in this graph you can see where the red
[37:59] is being absorbed and has low reflectance and the near infrared is highly reflective as i just mentioned ndvi is the
[38:10] relationship between the red and the near infrared wavelengths the actual formula is specified here it's the near infrared minus the red
[38:19] divided by the near infrared plus the red red the values of ndvi for an individual pixel range from -1 to 1.
[38:28] any pixel between -1 and 0 means no vegetation and pixels close to one indicates the highest possible density
[38:36] of green leaves the picture on the right shows that healthy green vegetation absorbs most of the visible light where only eight
[38:45] percent is reflected and reflects a large portion of the near-infrared light where fifty percent is reflected is reflected unhealthy sparse or senescing vegetation
[38:55] reflects more visible light in this case we're we're is reflected and less near infrared light where 40 is reflected
[39:05] you can see the difference in the resulting ndvi values below the image the green vegetation has a value closer
[39:12] to 1 while the brown vegetation has a value closer to zero this ndvi image was derived from landsat
[39:23] satellite data and shows vegetation density across the greater panama canal watershed watershed in this image the darker the green area
[39:32] the more green vegetation is present the rainforests of panama stand out clearly as the dark green swathes on
[39:39] either side of the panama canal these forests harbor a very diverse community of plants and animals and also help
[39:46] reduce erosion and sedimentation to the canal canal the light green and brown colors are more sparsely vegetated pastures and
[39:54] croplands croplands the white area shows areas of human development plant phonology is the annual dynamic of vegetation greenness and can be tracked
[40:07] using vegetation using vegetation in the graph on the top you can see the progression of vegetation dynamics as
[40:14] seasons change seasons change in north america early in the year which is winter is winter there are little to no leaves on the
[40:20] trees resulting in low ndvi values when spring arrives the vegetation greens up and ndvi increases until it peaks in the
[40:29] summer summer then as vegetation senescences and lose their leaves the ndvi declines the image below shows the difference in
[40:38] greenness in the winter on the left versus the summer on the right in north america ndvi can also be used in relation to
[40:50] drought monitoring and in conjunction with a variety of other data products this is an example of an ndvi anomaly
[40:57] map map from september 2002 for the african continent continent the brown areas represent negative vegetation anomalies and the green areas
[41:08] represent positive vegetation anomalies using time series of data anomaly maps can be generated to show differences in
[41:16] vegetation densities the enhanced vegetation index or evi is another vegetation index available from the modis sensor the ndvi is more chlorophyll sensitive
[41:33] while the evi is more responsible to canopy structural variations including leaf area index and canopy type one problem with the ndvi is that it
[41:43] saturates over high biomass areas the evi was developed to optimize the vegetation signal with improved sensitivity in high biomass regions and
[41:52] a reduction in atmospheric influences both ndvi and evi from modis are available in several different temporal composites ranging from 16 days to
[42:05] monthly and spatial resolutions ranging from 250 meters to approximately 5.5 kilometers kilometers the names of the products are listed on
[42:15] the right you can acquire these data from the websites listed here here is an example of how ndvi and evi
[42:26] are being used in collaboration with the desert locust information service the international research institute for climate and
[42:34] society is developing products to estimate ecological conditions and rainfall events in the desert locust recession area recession area they are focusing on locus because adult
[42:45] desert locusts can form swarms that can fly or be carried by wind over great distances distances these swarms can wipe out crops located
[42:53] hundreds of kilometers from their places of origin and create starvation conditions in regions that are already financially challenged
[43:02] financially challenged the products include a modis analysis tool where you can visualize both ndvi and evi over time to observe changes in
[43:10] greenness greenness you can zoom into a particular area and then obtain a graph of the change of
[43:15] ndvi or evi over time this concludes our second session on the fundamentals of remote sensing we want to thank you for listening to
[43:28] our webinar and please feel free to contact us if you have any questions or comments comments for land management and wildfire
[43:35] training inquiries please contact me cindy schmidt or amber cuss for water resource inquiries please contact either amita mehta or brock blevins and for
[43:45] general rset inquiries you can contact anna paretos anna paretos for information about all our webinars and other trainings please go to our
[43:53] website listed at the bottom of this page thanks again for your participation and goodbye until next time
