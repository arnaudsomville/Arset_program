# Sensors and Products Available for Terrestrial Ecosystems, Part 2/5

`https://www.youtube.com/watch?v=62-3V0nXfY0` · id 306 · 1:15:07 · module 88 — Remote Sensing of Forest Cover and Change Assessment for Carbon Monitoring

[00:03] hello everyone welcome to week two of a webinar series so my name is amber mccollum and i will
[00:10] be your instructor today along with our colleague my colleague cindy schmidt just as a review for this course we have two sessions per
[00:24] week each wednesday each sorry each thursday thursday session a will be at 1 to 2 30 pm
[00:32] eastern time in the u.s and session b will be at 10 to 11 30 pm eastern time
[00:38] in the u.s please make sure that you only sign up for and attend one of these session
[00:43] times we have created two sessions to reach out to a broader international audience audience these sessions will be at the same time
[00:51] each week we will have lectures with many guest speakers who are experts in the field and if there's time at the end we'll
[00:59] have q a session as well we have two homework assignments after this week and after week four these will
[01:12] be submitted through google forms the homework link for this week is now available on the rset website and has
[01:19] been added to the chat box to receive credit for the homework you must submit all answers via the google
[01:27] forms by thursday june 30th which is the deadline for this homework to receive a certificate of completion
[01:36] you must attend four out of five live webinars and complete all homework assignments assignments it takes some time to process these
[01:44] certificates certificates so you can expect to receive them two to three months after the completion of our
[01:50] course from marines martins there's one prerequisite for this course you should know and understand the fundamentals of remote sensing
[02:02] you can watch our on-demand course that's listed here which includes two one hour recorded webinars that you can
[02:10] watch on your own time as mentioned previously you can access all the course materials on the rset
[02:20] website here each week you'll be able to find a pdf of the presentation a link to view the recording of each
[02:28] webinar and a link to any of the homework assignments please note that in order to view the
[02:34] recordings online you must register your information this helps us keep track of who's who is viewing the recordings
[02:42] once you register you will automatically be taken to view the recording online here's an overview of the course agenda
[02:52] this week we will be discussing sensors and products for terrestrial systems and generation of activity data this week we will first give you a bit
[03:04] more background about the rcep program we will discuss activity data and how it's derived we will introduce remote
[03:12] sensing data sources that are often used for carbon monitoring we will discuss pre-processing image requirements to ensure data quality
[03:22] we'll provide a general techniques for image classification and change detection detection we'll provide considerations for national forest monitoring system
[03:31] sustainability sustainability and guide you through nasa's carbon map mapper beta website if there's time we will also have
[03:41] time for questions and answers at the end since we did not provide an overview of the rset program during week 1 we wanted
[03:52] to briefly discuss the program here the applied remote sensing training programmer arset is part of nasa's applied sciences program our goal is to
[04:02] increase the utility of nasa earth science data for applied resource management professionals policy maker and right regulatory agencies
[04:10] we conduct online and in-person trainings in a variety of application areas areas our webinars consist of multi-week
[04:17] sessions about a specific topic that can be a combination of lectures live demos or tools and tutorials
[04:24] ourset operates with a gradual learning approach where we often conduct the basic introductory webinars followed by more in in-depth advanced webinars or
[04:34] in-person trainings our in-person trainings are generally more in-depth with a fewer number of participants they include case studies
[04:42] and participant projects that are relevant to the focused audience these trainings require collaboration with another organization that can
[04:50] provide the meeting and lab space we're also working to increase our train the trainer activities where we train
[04:57] specific targeted individuals to conduct their own remote sensing trainings ourset conducts trainings in the focus areas of air quality water resources
[05:09] land management wildfires and disasters the rset team is located at multiple nasa centers and consists of scientists
[05:16] with backgrounds specific to the topic area that they teach we have varied levels of training that can range from basic introductions to
[05:25] advanced advanced where participants are downloading and processing data to meet their needs our site has completed over 60 training
[05:34] since it began in 2009 and has reached thousands of participants globally this figure on the right shows the geographic distribution of
[05:43] participating organizations in the u.s and globally our online trainings are in high demand with our international audience
[05:51] especially in regions where there's little in-situ data or resources available rsi is a resource for connecting applied
[05:59] tools in remote sensing to end users for enhanced decision making okay so jumping back into the materials
[06:09] for today what are activity data and why are they useful for carbon monitoring hi everyone so i'm going to start discussing some
[22:23] pre-processing data requirements and then we'll talk a little bit about image image classification and change detection so many types of satellite data need to
[22:36] be pre-processed before they can be used for land cover mapping or detecting change change pre-processing is necessary because it
[22:44] allows satellite observations over different time periods to be compared to the each other and that's the only way
[22:52] that you can do change detection i will be discussing two main types of pre-processing steps geometric correction
[23:01] correction which corrects for angle of view of the satellite sensor and for high relief terrain terrain and radiometric correction which
[23:08] corrects for different atmospheric conditions between images from two different time periods geometric correction is very important for detecting change over time using
[23:21] imagery from different dates firstly images need to be aligned or co-registered with each other if they are not aligned with each other then
[23:29] areas of land use change will be overestimated because the change detection analysis will detect change where none has occurred
[23:38] secondly image distortion due to the scanner platform or the terrain must be corrected using an orthorectification process
[23:47] process these types of distortions are more apparent in aerial photos than in satellite imagery primarily because the
[23:53] satellite is a more stable platform orthorex rectification requires the use of a digital elevation model with specialized processing software
[24:03] most satellite imagery has already been geometrically corrected and projected to a geographic reference system but it's always good to check
[24:15] the pixel values of an image are dependent on the viewing geometry of the satellite the location of the sun and
[24:22] specific weather and atmospheric conditions conditions to be able to compare images from the same region but different time periods the images
[24:31] need to be corrected for these different conditions conditions there are many methods of doing this but essentially every method converts raw
[24:39] pixel values to surface reflectance surface reflectance approximates what would be measured by a sensor held just above the earth's surface without any
[24:48] artifacts from the atmosphere or illumination and viewing geometry the series of images on the bottom show portions of a landsat image displaying
[24:58] the natural color of a level 1 product in a a top of atmosphere correction in b and the same image where the pixel
[25:07] values have been converted to surface reflectance in c you can currently acquire landsat surface reflectance products for
[25:18] landsats four five and eight these products are generated using the landsat ecosystem disturbance adaptive processing system or lead apps which was
[25:29] developed by scientists at nasa goddard as part of the measures product project the usgs now maintains the
[25:37] system and provides these products via their earth explorer data portal listed here there are several caveats for the
[25:48] landsat surface reflectance products that you need to be aware of they are provisional meaning that the algorithms are still being validated
[25:57] landsat 7 is not gap filled meaning that there will still be missing data in the images images they are less useful in arid or snow
[26:06] covered regions at low sun angles in coastal regions or in scenes with extensive clouds the panchromatic band at 15 meters is
[26:15] not included and they have specific date ranges which you can check on the earth explorer website next we will discuss image
[26:27] classification and change detection image classification is the process for turning pixel data into information for carbon monitoring it's particular
[26:38] it's primarily used for mapping forest versus non-forested areas mapping land cover or stratifying forest types there are many different ways to do
[26:49] image classification but i will be discussing three of them visual interpretation pixel based and object based it's important to understand that image
[27:02] classification needs ground or other ancillary information to improve or verify results also image classification requires specialized software such as nv
[27:13] qgis or arcgis and specialized training the example on the bottom shows a part of a landsat image of lake tahoe in
[27:22] california on the left and a land cover map created from that image on the right as i just mentioned the process of image
[27:35] classification turns pixel values into information that's useful for carbon monitoring monitoring in order to do this you must determine a
[27:44] classification system to use it can be as simple as determining forest from non-forested areas to much more detailed systems
[27:53] a good example is the ipcc good practice guide for land use and land use change and forestry which specifies top level
[28:01] categories such as forest land cropland grasslands wetlands human settlements and other land determining which class classification system to use will depend on the program
[28:13] needs and the characteristics of the region region as part of the un red program this land cover map of panama on the bottom was
[28:23] released on april 2014 the map is intended to inform decision makers about the current status of forest resources and will serve as the
[28:33] baseline for monitoring deforestation and forest degradation the map includes 32 classes for forest cover and land use such as forests
[28:43] forest plantations specific agricultural crops and cultural uses to be useful in estimating emissions and removals associated with red plus
[28:57] activities remote sensing data should be classified in the categories specified in this table these classes can be typically derived
[29:05] from moderate resolution imagery from landsat and the sentinel instruments instruments the forest non-forest class is typically used for basic trend analysis and
[29:17] can be used as the basis for other products products this type of map shows the extent of all
[29:23] forest types within a country the minimum mapping unit or smallest area to be mapped for all maps should be
[29:30] less than half a hectare the temporal frequency that the map should be updated is annually the four stratification map as i
[29:39] mentioned previously identifies force types with common biomass densities this ultimately provides more accurate carbon estimates the suggested primary stratification is
[29:51] primary forest modified natural forest and planted forest the all land use categories map can be used for national baseline mapping
[30:02] countries can decide what level of detail they prefer but should consider using the unfao land cover classification system
[30:13] this table shows a summary of the types of remote sensing used for different map products products course resolution data such as modis are
[30:21] only used operationally for for stratification stratification medium and high resolution data are used operationally for all map products
[30:30] l-band radar is provisionally used for forest non-forest mapping and are pre-operational for the other two map products
[30:39] products c-band raider is still in the research and development stage x-band raider is not currently used and
[30:45] lidar is occasionally used there are many different ways to classify imagery but almost all can be categorized into two approaches pixel
[30:58] based and object-based in the pic in the pixel based approaches each pixel is grouped into a spectrally
[31:06] similar class these approaches are most useful where there are multiple changes in land use within a short period of time
[31:13] and they are best suited when there is wall-to-wall data coverage and time series consistency at the pixel level is
[31:20] required required object-based approaches partitions an image into groups of pixels that are spectrally similar and spatially adjacent
[31:30] adjacent boundaries of pixel groups delineate ground objects in much the same way a human analyst would do
[31:36] based on its shape tone and texture this process is called segmentation these these kinds of images can be
[31:44] easier for an analyst to interpret this approach is also used on radar imagery to reduce speckle it's
[31:51] especially useful for high spatial resolution imagery because pixel based approaches tend to be very noisy noisy the images below show the visual
[32:02] differences between the two approaches on the left here here there's a little arrow it's the pixel-based approach
[32:15] and on the right over here you can see the same image that has been segmented so this is the
[32:23] segmented image right here and then that segmented image has been classified here on the far right so as you can see when you compare the
[32:32] pixel-based approach here with the segmented approach here that segmented approach has a much is a much smoother image
[32:46] two different methods are typically used to create land cover maps the supervised method can either can use
[32:55] either a pixel-based approach or an object-based approach the unsupervised method uses a pixel-based cover types that are called
[33:11] training areas these areas are then used to define the statistical parameters of classification algorithms algorithms the algorithm then automatically
[33:20] identifies and labels all pixels or segments that are statistics statistically similar to the training data data in the unsupervised method a
[33:30] classification algorith algorithm assigns each pixel into one of a number of user specified classes then interpreters assign each of the
[33:41] pixel groupings a value corresponding to a land cover class i'm going to describe to you a little
[33:48] more about the supervised approach a supervised classification method method requires the analyst to select training areas where they know what's on
[34:04] the ground then they digitize a polygon within that area or if the image has been segmented then the
[34:12] analyst identifies segments associated with known land cover types these known land cover types can be identified through fieldwork or through
[34:21] the visual interpretation of aerial photos or high resolution imagery each known area has its own statistical characteristics or spectral signature
[34:31] the image here shows three simplified land cover types so we have conifers in the green water in the blue and
[34:41] deciduous vegetation and the yellow and these circles represent training areas and each of those training areas have their own
[34:52] statistical statistical characteristics the spectral signatures from the training areas are then used to categorize each pixel or each segment in
[35:09] the image resulting in the entire image being classified so that's specified here here each of these spectral signatures are they implied to
[35:21] the entire image so every pixel in this image right here is assigned one of these three categories depending on its own spectral
[35:33] signature change detection is one of the most important analyses for monitoring carbon stocks stocks many activities that cause degradation
[36:05] of carbon stocks are detectable by satellite imagery such as tree harvesting and wildfire it's recommended that moderate
[36:13] resolution imagery such as landsat be used for detecting forced cover changes every five to ten years although the availability of the entire
[36:22] landsat archive and new automated techniques are enabling annual change detection detection in general at least two dates of images
[36:32] are necessary to map change there are many different methods to detect change including visual interpretation multi-date image
[36:42] segmentation digital classification techniques and pixel trajectory techniques i will be describing two of these techniques visual interpretation and
[36:55] multi-date image segmentation visual interpretation involves the delineation of change on a computer screen as opposed to delineating on a
[37:09] paper map this allows production of results that are automatically in digital form this method works best if image analysis
[37:19] tools and experiences are limited the images on the right show how deforestation in peru between july 2013 and february 2015 was
[37:30] delineated delineated using gis software to do the delineation enables easier quantification of that change in the multi-date segmentation approach
[37:45] objects are defined from the whole set of spectral bands using all sequential images together so you put all the
[37:52] images from each of the dates all together into one file it relies on spatial spectral and temporal information to delineate
[38:02] objects objects segmentation for delineating image objects reduces the processing time of image analysis the delineation provided by this approach is not only more rapid
[38:15] and automatic but also finer than what could be achieved using a manual approach approach it's repeatable and therefore more
[38:23] objective than a visual delineation by an analyst using multi-date segmentations rather than a pair of individual segmentations
[38:32] results in changed areas delineated as separate segments a typical multi-date segmentation process includes first conducting image segmentation on image pairs
[38:47] second selecting training areas third conducting a supervised clustering of individual images and lastly doing a visual verification
[38:57] of the final product and potential editing this slide presents an illustration of an implementation of multi-temporal segmentation
[39:10] segmentation note that in this approach areas where land cover has changed over the observation period will form separate
[39:18] segments segments so you have two two separate images here from two different dates you put them together and you end
[39:27] up with one segmentation file right here so this has all the changes in in delineated as a separate segment
[39:38] and then from there you figure out where the changes have occurred and give them labels so that's the first part of this whole
[39:45] change detection process the second part is after the segmentation is complete it is recommended that two supervised
[39:59] object classifications be applied separately on the two multi-date images instead of applying them together because two separate lan classifications
[40:08] are much easier to produce in a supervised step than a direct classification of change trajec trajectories trajectories a standard training data set for
[40:19] supervised classification including samples of all the desired classes can be created using an exhaustive sample of training from the remote
[40:28] sensing data that is used in the analysis analysis although unsupervised clustering is also possible for large areas that use more
[40:37] than a few satellite images it is recommended that supervised object classification be applied an unsupervised direct classification of
[40:47] change detect trajectories of the two multi-date images together means that the second step of visual labeling of the classification results
[40:58] has to be done which is a really time consuming task so if you do the supervised approach you
[41:05] don't have to take that extra step the multi-date segmentation followed by supervised classification of individual dates is considered more efficient in
[41:15] the case of a large number of images the example on the bottom shows segments created from two images from 2000 and
[41:24] 2010. b shows the classification that is done on just the 2000 image based on the supervised signatures from the segmented
[41:39] image this slide presents the basic idea of deriving force cover change utilizing the classification approach presented in
[41:56] the previous slides utilizing the multi-temporal segments each epic image in this case 2001 and 2005 is separately classified
[42:07] the final classifications are then overlaid and a change matrix is created it's important to highlight that due to the multi-temporal
[42:18] classification the segment borders match perfectly in the two images and that the change areas are outlined as separate segments
[42:37] in creating a national forest monitoring system system items regarding sustainability of remote sensing platforms and products need to
[42:45] be considered first of all it's important to understand the longevity of the satellite mission providing the data
[42:58] that is underlying activity data generation generation for example after the scanline corrector for landsat 7 sensor failed it was important to
[43:07] understand when landsat 8 would be launched and now it's important to understand if and when landsat 9 will be
[43:13] launched launched right now it's scheduled to launch in 2023 2023 but what happens if landsat 8 fails what
[43:21] would be the backup to acquiring your activity data so these are all considerations you have to think about when you're putting
[43:28] together a national forest monitoring system system it's also important to make sure that consistent consistent processing methods are used to produce
[43:36] activity data lastly to provide transparency and ability to track processing steps it's very important to archive all imagery
[43:46] and derived products as well as document the steps taken to produce those products lastly lastly i'm going to give you a quick overview
[44:02] of nasa's carbon mapper carbon mapper is a prototype data portal and analysis tool developed for nasa's carbon monitoring system
[44:12] this beta version provides a common platform for visualizing information contained in several representative carbon monitoring system data sets
[44:22] unlike other existing systems systems carbon mapper provides a single user interface that combines mapping and data analytics including regional summaries
[44:33] sectoral charts and time series plots for carbon flux and stock data before i get started i want to repeat
[44:41] that this is not an operational data portal it is still a prototype the data presented in this portal are preliminary
[44:49] and represent varying degrees of maturity and validation also uncertainty estimates are still being integrated into carbon mapper the
[44:57] current uncertainty estimates are intended to provide representative examples examples there are some release notes that you need to read before you use carbon
[45:07] mapper located on the website listed here so when you open carbon carbon mapper this is the first image that you see
[45:19] it's the global force carbon stocks data for 2005. the carbon mapper is broken into three view types map bar chart and time series
[45:30] and we'll go through a few of those we will start by going over the map view on the top left is the zoom button and
[45:41] you can pan the map by dragging with your mouse the top right shows you the date of the
[45:50] data set you are currently currently visualizing visualizing note that not all data sets are available for all dates or all temporal
[45:58] resolutions if you click on annual you will get a drop down menu to two specific months if you click on the year you will get a
[46:12] drop down menu that showed different years for now we are going to keep it at annual 2005.
[46:22] the active data sets box shows which layers you are viewing in this case you are looking at the coastlines borders
[46:29] and roads overlay the land water map as a base map and the above ground biomass global forest carbon stocks data
[46:37] you can drag to reorder the data layers to get more information about each data set you can click on the triangle to the
[46:48] left of the name the top slider adjusts which is located here here the top slider here adjusts the data set's opacity
[47:00] you can hover over the color bar which is here to see the value range associated with each color
[47:09] you can also use the slider beneath the color bar to mask out certain color ranges on the map
[47:15] which is right here if you click on the eye so this i right there there for the data set you will get more
[47:27] information about that data set it will tell you which version you are viewing so this is the information up
[47:34] here the principal investigator a url for the data set and a summary of the data so next we're gonna
[47:50] click on this icon that's circled in red right here which is the data set selection panel is where
[48:03] you add or remove data sets from the current view to turn on a data set just click on its
[48:08] title title data sets are grouped according to their types and species for more information on either click on the i which is located here
[48:24] so for example when you select flux this is the list of currently available data sets it also lists the years
[48:32] available for each data set as you can see here next we'll open the tools panel which can say which contains widgets for
[48:48] interacting interacting with each view so here's the tools icon right here circled in red this is what you see when you click on
[49:01] the tool icon the data scaling at the top is used to convert the data displayed in any of the
[49:11] tables or charts to a different mass or compound equivalent so that's right here the data examination widget lets you
[49:22] switch between two ways to explore data values on the map with point data selected you can click on a pixel on the
[49:29] map to retrieve pixel county state and country values and then you can use the box histogram here
[49:37] here to create a quick look histogram of data over a region so now we're going to go from the map
[49:46] view to the bar chart view down here so when you click on that you see a bar
[49:55] chart for global carbon totals for 2005 for the world so that's what this bar chart is right here
[50:02] one of the things you can do is compare sub-regions sub-regions so we're going to click on compare sub-regions
[50:10] right here the result is a chart that shows global carbon for 2005 by country you can see on the left you can sort or
[50:24] display the data in various ways so right here you can see you can sort by name by total or display by value etc
[50:38] over here you can hover over a data point to display a pop-up with relevant values you can see the example for india here
[50:51] this icon circled in red we'll open the data discovery panel so we'll do that now the data discovery panel consists of
[51:06] pre-configured questions that can be answered using carbon mapper so you see a whole list of questions here
[51:13] that are all pre-configured so now we'll go back to the map view and explore some of the data discovery
[51:24] questions so we're back at map view and we're going to explore the question that's right here how do methane and carbon dioxide
[51:37] emissions from fires compare using the ipcc assessment report five global warming potential scales in the north american boreal region
[51:48] this example uses two very different remote sensing data sets for the time period 2010 and 2011. this chart compares the methane
[52:03] emissions over north america derived from japan's greenhouse gases observing satellite or gosat with monthly biomass burning flux from nasa's moped
[52:13] instrument so the methane fluxes are in the blue and the fire fluxes are in the green here
[52:24] here you can see the large difference between the fluxes in summer 2010 which is here compared to summer 2011
[52:34] which is here so now we're going to switch back to the map view in this view you can see the difference in spatial
[52:53] resolution of the two data sets the methane flux data from gosat have up to 50 kilometer spatial resolution while
[53:00] the fireflux data from moppet have a much coarser spatial resolution of 400 by 500 square kilometers you can see the spatial overlap of the
[53:11] co2 and methane fire fluxes in canada and that's all right in this area right here to get more information about these data
[53:27] sets you can click on the i right here and then the information shows up on this side over here north american
[53:36] methane flux so i'm going to show you one more example in carbon mapper so we're going to go back to the
[53:45] beginning and start with our original global carbon 2005 data set and choose the data set selection icon
[53:55] to open up the data sets so first we're going to open the list of flex data sets
[54:05] it's listed right here and then we're going to choose the global fossil fuel co2 flux data set
[54:16] right here so when you select that now you're going to see a list of data available in this particular category
[54:29] ffdas stands for fossil fuel data assimilation system ffdas is developed at purdue university and is a data product that estimates co2
[54:39] emissions from the combustion of fossil fuels for the years 1997 to 2011. so now we're going to click on ffdas
[54:53] totals totals so when you do that the map of ffdas totals for north america appears on the
[55:01] right so we're going to zoom out to look at other parts of the globe so note the comparisons between the
[55:13] countries countries as well as differences within the countries countries so the darker it is of course the more co2 flux there is and in the
[55:26] u.s you can see kind of compare the east the midwest to the east portion of not the midwest the eastern portion of the
[55:34] united states versus the west and the central portion of the united states a big difference but let's look at this in numbers
[55:45] but first we're going to change the year to 2007 because that's what's available for these data so in the upper right up here
[55:55] we're going to select 2007 and now we're going to look at the data in a bar chart
[56:07] which is located down here so we'll select select bar chart and we're also going to select the view
[56:15] tools icon so when we do all that this is what we get of course we got the totals for the
[56:25] globe globe so we want to compare countries to each other so to do that you have to select
[56:33] compare subregions so when you do that you can see all the different different fluxes co2 flux is coming up for each
[56:44] country country for the year 2007. so as you can see number one and number two number one is
[56:54] china number two is the us clearly are the front rudders here so this concludes the demonstration of
[57:05] carbon mapper please feel free to explore the tool on your own there's some great help tools located on the website
[57:12] but please also remember that it's still a a beta version and there really is limited data available so keep an eye on it into the
[57:21] future because i think it's a really great tool to use so at this point we're finished for our webinar for this
[57:36] week so we have a few minutes we have actually a lot of time for questions and please feel free to
[57:42] email us with any follow-up questions you might have have here are our contact emails mine amber's and then we jenny houston from silva
[57:52] carbon carbon and then if you have any general rsac questions you can contact anapratos at the email address listed there and
[58:00] again our rsat website is there where you can get all the materials for this webinar as well as all the other
[58:08] webinars that we offer so at this point i think we'll go ahead and open it up for questions
[58:19] and i'm going to see if jenny houston is online to help us answer any questions if we can't answer your questions i
[58:26] think what we'll do is document the questions and then post something something on our website a little bit later
[58:56] so there's some questions about downloading carbon mapper data if if if you go to the carbon mapper website
[59:03] the data are not downloadable directly but you can if you go select the i it will give you a link where you can
[59:13] get the data a lot of the data for carbon for that program will be available at the oakridge
[59:20] national lab dac which is the distributed active archive center for nasa so it distributes a lot of data
[59:28] and actually what i should have done is posted posted we can post the link to the oakridge national lab dac because it it
[59:36] will house a lot of the carbon mapper data when it's available for the public so we'll make sure to get that website
[59:44] to you oh here's here's a quick question how many we're gonna there's a question about supervised classification how many
[59:54] training samples do you typically use for supervised classification and why um so that question is a little hard to
[1:00:01] answer because the way we like to answer it is as many as possible the more training samples
[1:00:07] that you can do for supervised classification the better off you are um and so and because one is you want to be able
[1:00:16] to get enough spectral variation within a particular class that you're interested in and so you want to pick training areas
[1:00:25] that are located throughout your study area area and cover so not just one area but actually cover your entire study area so
[1:00:33] that's really the most important that you're trying to get all the spectral variability covered with your training
[1:00:40] areas areas so it's not a very specific answer but you try to get as many as you can
[1:01:04] so somebody asked about the legend in the carbon mapper website so on the right hand side um when you
[1:01:12] click on the little triangle next to the to the uh data set more information come slides down
[1:01:21] includes a legend for the data that you see on the viewer so there's a question here about
[1:01:40] about some research some researchers are using annual stacks of cloud-free landsat imagery images as as pseudo-hyperspectral images
[1:01:50] um um so if you're only using landsat imagery it's probably not hyper spectral it's certainly hypertemporal images so i'm not quite sure
[1:02:03] what that means there then they classify that image the process is repeated annually do you think this approach is better than using
[1:02:13] one's landsat only my feeling is the more if you use multiple landsat images that can only help you
[1:02:20] because you're capturing temporal changes in the vegetation if there if there are any so sometimes using landsat imagery from different times of
[1:02:32] the year will actually help you with your classification so it's a more work but it will help you as opposed to one
[1:02:40] landsat image only oh good you agreed multi-temporal not hyperspectral and just a reminder there is homework this week amber just posted the link
[1:02:54] again again so for those of you interested in getting the certificate please make sure you do the homework
[1:03:01] and and i don't remember the due date i think it's june 30th there was no homework for week one this
[1:03:12] is our first homework is it possible here's a question is it possible to classify single tree and
[1:03:31] high resolution image using object based analysis and what are the prerequisites um so classifying a single tree is dependent
[1:03:40] on the spatial resolution of your imagery so um if you have if you consider high resolution as you know
[1:03:48] five meters or something you're probably not going to get a single tree so the spatial resolution of your imagery will determine whether
[1:03:55] you can classify single tree it would have to be very very high spatial resolution but you could do it
[1:04:03] using object-based analysis there's a question is only landsat images useful for carbon monitoring well i was hoping that um
[1:04:17] through our session today that we made it clear that landsat is probably most prevalent for carbon monitoring
[1:04:24] we haven't talked much about the central satellites at all the european satellites but they are also also useful for carbon monitoring
[1:04:34] the reason landsat is is because of its long history we have a great archive of landsat imagery it's spatial resolution
[1:04:43] so you can map large areas and it's temporal resolution you can get it twice a month every month all year except for the
[1:04:51] cloud cloud problem but if the there are many other images out there especially moderate resolution imagery including sentinel
[1:05:00] and others that are becoming more and more prevalent and any of those would probably be just as
[1:05:06] useful as landsat so there's a question about the advantage of spectral angle mapping technique over the maximum likelihood
[1:05:21] techniques with respect to classification so we didn't get into the details of the algorithms for classification and and it's not
[1:05:30] uh we don't have actually the time to discuss it here um that so if i think we'll take that offline
[1:05:38] and get the answer uh uh answer for you offline i think maybe what we can do is
[1:05:46] is post that question and the answer in a separate document that we'll put on the on the website
[1:06:23] so there's a question regarding the tools you use for processing such as classification what are your favorites
[1:06:27] and brian do you mean is your question regarding the software or is it regarding the processing techniques so
[1:06:34] if you could clarify that would be great everyone has their own preference by the way so i know there's several people who
[1:06:41] participated in the webinar today who have quite a bit of image processing [Music] [Music] experience and so everyone will have
[1:06:50] their own opinion as to which software package as well as which processing technique works best for them
[1:06:59] software itself okay so the question is what software um i'm going to speak for our organization here we have
[1:07:08] some commercial software called nv which is very powerful and so envy is one package you can use
[1:07:18] we are starting to do some more advanced webinar series using an open source software called qgis and qgis is also becoming very powerful
[1:07:29] one because it's open source and two a lot of people are contributing to writing modules that will do a lot of
[1:07:36] what we're discussing today today and for example we gave an advanced webinar series earlier in the year on
[1:07:45] how to use qgis to do ndvi that kind of thing so that's becoming a really nice powerful package
[1:08:24] so here's a good question what is the best approach to classify forest if you do not have field survey data
[1:08:31] um um so the example would be separate degraded forest from reforestation from natural forest so so with remote sensing data and remote
[1:08:42] sensing processes you really need to have some kind of ground verification data field survey data is definitely
[1:08:50] the best choice you can have in absence of that you could potentially use high resolution either satellite
[1:08:59] data so something like data from google earth or something like that or aerial photographs if you happen
[1:09:07] to have those so something that's fairly high resolution and then an interpreter that really knows that area
[1:09:14] it's really hard to do work with landsat imagery if you don't have that ground information and i can't
[1:09:22] stress that enough so there's a question about can you do object oriented classification with qgis as well you know i believe that you can
[1:09:50] so boston university has developed some really great modules for for qgis that that some of them will be demonstrated uh in
[1:10:02] week four i believe but it's more geared towards accuracy assessment it's called beyota b-e-e-o-d-a and we will post
[1:10:12] that website to you but i do believe they have developed an object-oriented classification using qgis oh great thanks amber just posted the
[1:10:47] viota website so google earth engine um there's a question about google earth engine and what i've been hearing from
[1:10:55] people so we haven't started using it much here but what i've heard from people is that it is could be
[1:11:02] potentially a game changer in terms of some of the processing that you can do there's actually a google earth engine summit going on
[1:11:12] right now here in the san francisco bay area which is where we're located and i'm sure a lot of these issues are
[1:11:19] being discussed there so stay tuned on that because i think we're going to be potentially focusing some future
[1:11:27] webinars on the use of google earth engine so one question is is it possible to predict predict the carbon map of the future 10 years
[1:12:09] using different modeling techniques so yeah there are some ecosystem models out there and that may be another really great potential topic
[1:12:18] for the future for us for doing a webinar is focusing on ecosystem models where we're looking at
[1:12:29] changes in biomass biomass vegetation types into the future where where it's changing etc uh there's there's a lot of folks out
[1:12:41] there there's some challenges in doing that and and some challenges in offering it as a webinar series in particular so
[1:12:47] that's something we sort of discussed there's some great chatter going on about about people helping up out about looking for
[1:13:17] different software packages for doing object-oriented classification etc that's great thanks to everyone for for pitching in i think there's a question about radar
[1:13:32] data uh which radar data is is best associated with landsat data for carbon mapping mapping what i'm hearing from the silver carbon
[1:13:40] folks and i wish jenny was on right now is that they are starting to work more with a sentinel satellite radar data as
[1:13:48] maybe a little bit of radar okay i think the questions are starting to die down now so i think we'll go
[1:14:06] ahead and close off for today i want to thank everyone for participating and listening to our webinar this week
[1:14:19] and we look forward to having you participate next week the next three weeks weeks so again if you have any questions
[1:14:30] please don't hesitate to email us we'll try to answer the best we can and again i think what we'll do
[1:14:35] for this particular webinar series is is document a lot of the questions that are coming up and try to get answers to them
[1:14:41] and then post them in a document on our website and if you have ideas for future trainings you'd like to see
[1:14:54] um please let us know that too thanks everyone
