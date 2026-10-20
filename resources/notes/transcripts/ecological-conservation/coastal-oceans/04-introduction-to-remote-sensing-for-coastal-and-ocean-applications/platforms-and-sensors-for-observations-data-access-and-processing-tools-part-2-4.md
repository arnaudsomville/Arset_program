# Platforms and Sensors for Observations, Data Access, and Processing Tools, Part 2/4

`https://www.youtube.com/watch?v=IPJ7GM5YVP0` · id 302 · 46:45 · module 84 — Introduction to Remote Sensing for Coastal and Ocean Applications

[00:09] recall from last week the course objectives are to provide an overview of nasa earth observation resources available for open ocean and coastal
[00:18] applications including a basic understanding of remote sensing of aquatic systems how to access and visualize nasa earth
[00:26] science data how to use nasa earth science data tools and products for open ocean and coastal applied science issues
[00:34] and to conduct live demonstrations of useful ocean and coastal applied science tools this week we will be discussing
[00:45] platforms and sensors for ocean observations our primary focus will be on nasa data access and software tools i
[00:52] hope your main takeaway from today is the knowledge of where to access remote sensing data and how you might process
[00:58] these data using nasa's image processing software named cds this week we will first review some of last week's material i will give an
[01:09] overview of some of nasa and the u.s set us's satellites and sensors for coastal and open ocean applications
[01:16] i will describe data processing level we will review some common data access portals for obtaining imagery from these
[01:23] satellites and sensors mentioned and then finally i will introduce you to nasa's satellite image processing software named cdas with more
[01:31] information on how to obtain advanced training training there will be a lot of links to resources throughout this session so i
[01:38] encourage you to download the presentation after we are finished so you may follow those links we have also put many of the links into
[01:45] a file you can access in the files pod in the lower right of the screen and i'm trying to point to it now with a
[01:52] little green arrow in the files pod so first a review of some important concepts from last week
[02:05] we have identified 10 thematic areas for coastal and open ocean applied science marine protected areas marine fisheries
[02:13] animal migrations water quality harmful algal blooms or habs eutrophication eutrophication coral reef health marsh subsidence coastal development and
[02:25] coastal hazards last week i presented some examples of tools that address these themes these tools incorporate remote sensing imagery
[02:34] and models to address questions in applied science one example from last week was the hab tracker tool which can predict landfall
[02:41] of blooms of the toxic cyanobacterium microcystis in lake erie and north america america for the purpose of this webinar series
[02:49] we will focus on animal migrations and coral reef health and those will be the topics of the week 3 and week 4 sessions
[02:59] last week we reviewed how light interacts with the constituents in the water column and may be re-emitted
[03:05] through the sea surface and sensed by an airborne or satellite sensor in aquatic remote sensing we are
[03:11] interested in the radiometric unit remote sensing reflectance seen here as rrs remote sensing reflectance is used in
[03:23] ocean color algorithms to compute the data products of interest for ocean and aquatic science like chlorophyll concentration or colored dissolved
[03:30] organic matter with this equation we see the relationship of the inherent optical properties or absorption and scattering
[03:37] of the material in the water to the quantity and the quality of light in the underwater light field and the
[03:44] light that is propagated through the surface as the water leaving radiance it is this remote sensing reflectance
[03:53] quantity that is derived from satellite remote sensing measurements because of these relationships of what is in the
[03:59] water to the color of light emitted from it we can infer concentrations of optically active constituents in the
[04:05] upper part of the water column that the satellite can see we also learned that in coastal and open
[04:13] ocean applications we are typically concerned with reflected solar radiation which we use in ocean color algorithms to infer such properties as chlorophyll
[04:22] and an emitted infrared and microwave radiation to infer sea surface temperature temperature we also discussed the importance of
[04:28] accurate atmospheric correction so that the spectral shape of the remote sensing reflectance measured by the satellite accurately represents the remote sensing
[04:36] reflectance at the sea surface last week i mentioned a few legacy and current satellite sensors including modis landsat and sea with in the next
[04:45] section i will go into more detail on some legacy current and future satellite sensors there are currently several u.s
[04:59] satellites that are used for the remote sensing of open ocean coastal and inland waters waters these include landsat 7 and landsat 8
[05:07] and the aqua and terra satellites the international space station has also been has also served as a satellite and
[05:14] then the suomi npp as well these next two slides provide a reference to the different satellites and sensors that are used for ocean
[05:24] color remote sensing the landsat series including the thematic mapper enhanced thematic mapper and operational lan imager are used to observe water quality these
[05:36] sensors provide high spatial resolution imagery which is particularly valuable in coastal systems where small scale processes can dominate and are otherwise
[05:45] neglected by coarser spatial resolution imagery imagery the terra and aqua satellites each host a moderate resolution imaging
[05:53] spectroradiometer or modis which senses both reflected visible radiance and emitted thermal energy modis is used for land ocean and
[06:01] atmospheric applications and is used to infer several parameters or data products useful for understanding ocean biology carbon dynamics and circulation
[06:15] other ocean color satellites include the suomi national polar partnership or npp which hosts the visible infrared imaging
[06:23] radiometer suite or viirs this sensor is used for spectral reflectance and to infer chlorophyll concentration the international space station can be
[06:33] considered a satellite used for ocean color observations the hyperspectral imager for the coastal ocean or hico wrote aboard the iss for five years from
[06:42] 2009 to 2014. this was a high spectral resolution sensor sometimes referred to as an imaging spectrometer or
[06:49] hyperspectral sensor finally a satellite and sensor that is not yet launched but is under development is the plankton aerosols
[06:57] clouds ocean ecosystems or pace this proposed hyperspectral sensor is scheduled to launch sometime in 2022 or 2023.
[07:10] the landsat satellites have been collecting earth observations since july the revisit rate is every 16 days spatial resolution varies by satellite
[07:20] but it is typically possible to obtain 30 meter resolution imagery despite the relatively long revisit rate of 16 days
[07:27] landstat landstat landsat is still a useful imaging system to understand some applied science questions for aquatic systems including
[07:35] marsh subsidence and the effects of eutrophication in inland waters there is a commitment to continue with the landsat program as it has been so
[07:42] successful in tracking land use and land change and more recently with the launch of landsat 8 with its broader use of
[07:49] aquatic systems landsat 7 enhanced thematic mapper launched in 1999 and has remained in operation since it is a 16 that has a
[08:01] 16-day revisit rate spectral bands include blue green green red pan chromatic and reflected and thermal ir the development of landsat 8's
[08:13] operational land imager or oli included the addition of another spectral band to improve the remote sensing of aquatic systems
[08:22] this satellite sensor has the same 16-day revisit rate and with this additional coastal ban algorithms have been developed to derive chlorophyll
[08:29] color dissolved organic matter and other water constituents if you look here on the right i've brought up another image
[08:39] as you can see there's a nice paper from franz at all 2015 where they compare landsat 8 oli to modis estimates of
[08:47] chlorophyll and the chesapeake bay in the usa despite landsat's infrequent revisit rate compared to moses having a spatial
[08:55] resolution of 30 meters compared to one kilometer is a big advantage in coastal systems due to the scale of the dynamic
[09:01] processes that occur here the sentinel-2a satellite from the european space agency was recently launched and observes its similar
[09:10] spectral bands to landsat 8 oli and at a finer spatial and temporal resolution than landsat 8. it may be of interest to
[09:18] some of you but we will not be discussing it as a part of this webinar series the workhorse for much of ocean color
[09:27] remote sensing are the modis imagers on the terra and aqua satellites terra collects in the morning and aqua
[09:39] collects in the afternoon there are a number of other sensors on the terra and aqua satellites but mostly
[09:46] for ocean color remote sensing we are interested in the modis sensor what is modis modis is the moderate resolution imaging
[09:55] spectroradiometer it is designed for land atmosphere ocean and cryosphere observations observations it has a spatial resolution of one
[10:03] kilometer but some of the bands sense at 250 meters and 500 meters it is possible to interpolate the ocean
[10:11] color bands to 250 meters and 500 meters spatial resolution using the image processing software cdas while this may introduce some error this
[10:20] enables the use of the imagery in coastal waters where the finer resolution is needed for the scale of
[10:25] processes occurring in these systems another satellite is the national polar partnership also known as the suomi npp
[10:38] this satellite was launched in 2011 and provides global coverage it has a 1 30 pm equator crossing time on a near daily
[10:46] revisit rate the viirs sensor is on the satellite and is used for ocean color remote sensing the viirs sensor is the visible infrared
[10:59] imaging radiometer suite it is designed to collect measurements of ocean color clouds clouds aerosols surface temperature fires and
[11:09] albedo albedo between the modis and viirs sensors we've got the oceans covered but satellites and their sensors do not
[11:17] operate indefinitely eventually they come to the end of their functional life this is why nasa and other space
[11:24] agencies are continuously investing effort in the development of new satellite sensors with new specifications and improvements to
[11:32] answer science questions one example of an experimental sensor was the hyperspectral imager for the coastal ocean or hico
[11:44] this was a partnership among the u.s naval research lab or nrl the office of naval research oregon state university and eventually
[11:54] nasa nasa it was a high spectral resolution imager this type of sensor is sometimes referred to as an imaging spectrometer
[12:03] or as a hyperspectral imager depending on the research community you are working with hico was designed and calibrated to
[12:10] collect over dark aquatic targets this sensor was only supposed to have an operational lifetime of one year it was
[12:17] installed on the iss in 2009 and was able to collect data for five years way beyond its expected lifetime
[12:24] the imager was tasked to collect observations of specific targets defined by nrl and the scientific user community
[12:32] these targets included open ocean coastal and inland waters more information about hico can be found in the above links hico data are
[12:41] available through the nasa ocean color web level 1 and level 2 browser which we will review a little bit later in this
[12:46] talk talk an exciting aspect of this sensor is that it has now provided a five-year data set of hyper-spectral remote
[12:54] sensing imagery that can be used for algorithm development for nasa's future hyperspectral satellite sensor the newest ocean color satellite sensor
[13:04] under development at nasa is the ocean color imager on the plankton aerosol clouds ocean ecosystems or pace
[13:12] satellite this will be a polar orbiting sensor with a two day revisit and one kilometer ground sample distance
[13:19] the imagery will collect observations at high spectral resolution on the right you see an image showing the spectral resolution of legacy and
[13:27] current ocean color sensors viirs modis and i'm not going into czcs or c-whiffs for this session the pace sensor will have much higher
[13:43] spectral resolution in the visible range than these other sensors and will collect data in the shortwave infrared to improve on atmospheric
[13:50] correction correction an optional polarimeter is being considered for this satellite for cloud and aerosol studies and to aid in
[13:58] atmospheric correction of the ocean radiometry the proposed launch date is in the 2022-2023 time frame i encourage you to visit the link on
[14:09] this page to learn more about the preparatory activities for this new sensor and to think about how it might
[14:14] be used in answering applied science questions in the future satellite data are organized in a variety of ways reflecting different
[14:26] spatial temporal and parameter groupings over the years certain terminology has arisen to describe these organizational conventions level zero data are unprocessed
[14:40] instrument data at full resolution any artifacts in these data from the communication of the spacecraft to the
[14:46] ground station have been removed these data are the most raw format available and are only provided for a few of the
[14:53] missions nasa distributes data for level 1a data are reconstructed unprocessed instrument data at full resolution time referenced and annotated
[15:02] with ancillary information including radiometric and geometric calibration coefficients and geo-referencing parameters computed and appended but not applied to the level zero data
[15:13] level 1b data are level 1a data that have had instrument and radiometric calibrations applied level 2 data consist of derived
[15:22] geophysical variables at the same resolution as the source level 1 data these variables also called data products include such data as
[15:31] chlorophyll sea surface temperature inherent optical properties among others level 3 data are derived geophysical variables that have been aggregated or
[15:40] projected onto a well-defined spatial grid or over a well-defined time period in level 4 data our model output or
[15:48] results from analyses at lower level data it is possible to obtain data at any one of these processing levels level 0 being
[15:59] the exception for some missions working with lower level data requires greater work effort and more advanced skill
[16:06] skill installed on a linux or mac mac osx based platform nasa's image processing software cdas enables the processing of
[16:14] data through these different levels so so how does a person go about finding and downloading satellite data
[16:26] for the remainder of today's session i will be going over how to obtain satellite data from a few of the data
[16:32] access tools commonly used by the research community and i will also introduce you to nasa's imaging process
[16:38] image processing software named cdas please recall from last week that this webinar series is focused on nasa and
[16:46] u.s based satellite systems there are other international satellites and image processing tools available to the public but those are not the focus of this
[16:54] webinar so phytoplankton bloom in the arabian sea i just wanted to take a step back for a moment and talk about why we as
[17:06] oceanographers might be interested in the inferences we can make from satellite remote sensing imagery i'll take an example from one of my
[17:14] favorite websites the nasa earth observatory observatory when i have time sometimes even when i don't i like to navigate this website to
[17:22] see highlights of how remote sensing imagery is being used to understand the earth system this example is from the arabian sea in
[17:30] february 2015 from the aquamodus sensor winter is the prime season to see filaments of phytoplankton curl and
[17:38] unfurl here as they ride the eddies that form in this current you can see here these features
[17:47] these are parts of the phytoplankton bloom moving along on those currents why do phytoplankton blooms happen in
[17:56] winter here it turns out that this in this part of the world it experiences large changes in seasonal wind patterns that affect
[18:04] the nutrient dynamics strong winds stir up nutrients from deeper waters and those nutrients help phytoplankton thrive this region has recently undergone a
[18:13] phase shift in species composition from diatoms one type of phytoplankton to the dinoflagellate noctilucca scintillans scintillans the surface waters of the region have
[18:24] experienced lower oxygen oxygen concentrations and noctaluca can survive and bloom in it whereas other species cannot cannot this species shift could have
[18:34] implications for the food web of the arabian sea what does that mean in terms of applied science
[18:40] science this phase shift may have an impact on higher trophic level species and on the livelihoods of local people who depend
[18:46] on fish as their primary source of protein protein this example from the arabian sea made me wonder if i could find satellite data
[18:54] from another winter bloom and process the data to see those twists and curls of phytoplankton worldview is a web-based application
[19:06] for interactively browsing global full resolution satellite imagery and then downloading the underlying data the browse feature that lets you step
[19:16] through time is really useful if you want to search image scenes without first having to go through the effort of
[19:21] processing the data to find features such as that phytoplankton bloom i was interested in you can step through the
[19:27] time in this part of the web tool worldview makes available over 100 data products and most of them are updated in
[19:36] near real time for the entire earth this supports time-critical applications such as flood monitoring air quality monitoring and wildfire management
[19:47] to start i wanted to just browse satellite data to see if there was a recent period when
[19:52] there was a phytoplankton bloom in the arabian sea so i zoomed into the arabian sea in the tool i can click the red add
[20:02] layers layers button button to call up a search window from here i navigate to the bottom right of that
[20:09] search window and choose other my given a window will open and give me the choice to add one of the data
[20:16] products in this case i added chlorophyll a there another window opens and prompts me to choose chlorophyll-a for the terra
[20:29] modis and aquamodus sensors after closing this window i can see the chlorophyll data layer overlaying on top
[20:39] of the true color image and i'm zoomed up on a snapshot of that here if i click in the camera icon in the
[20:45] upper right corner of the webpage i can define the region to save it in one of a
[20:49] number of formats including jpeg and geotiff you can see here in these formats it looks like december 1st 2015 will be
[21:01] a good day to study because i already because already i can see the swirl of phytoplankton just offshore muscat oman
[21:08] right here a nice eddy feature if your intention is to work with more than just images but with the underlying
[21:18] radiometry and data products then the data access tools at the nasa ocean color web is what you will need
[21:26] nasa's ocean color web is supported by the ocean biology processing group or obpg obpg at nasa's goddard space flight center
[21:35] their responsibilities include the collection processing calibration validation archive and distribution of ocean related products from a large
[21:42] number of operational satellite-based remote sensing missions providing ocean color color sea surface temperature and sea surface salinity data to the international
[21:51] research community they've been doing this since 1996 when you explore the website you will find information about the missions they
[22:01] support support as you see listed here the data access tools that they have available available there are several methods and we will
[22:11] walk through the level one and two browser and the level three browser though they have more documentation related to the data
[22:19] products and calibration and validation of data you can also see information from meetings and workshops and other educational materials
[22:30] and not highlighted here is if you look into their services tab you will find helpful links to the user
[22:37] forum which you can register for it's a very dynamic community of extremely helpful people and their image processing software cds
[22:45] which we'll cover later in this talk this website provides a wealth of helpful information on becoming proficient at accessing processing and
[22:53] understanding ocean color satellite imagery i encourage you to explore the data access capability offered by the ocean color web so you may obtain data
[23:02] in a format and method that suits your needs there are a number of ways you can download data using this website
[23:12] i will discuss two of them here the level one and two browser and the level three browser
[23:18] first the level one and two browser the splash screen of the level 1 and 2 browser is what you see here
[23:27] it's a little active so i will walk you through the sections the browser allows you to select which sensor you would like to
[23:39] use if you look in the upper left area you can see here that the aqua modis sensor
[23:46] is selected and i'm also pointing at it with the green arrow let's say you want to use hico data in
[23:54] your dissertation note the check box where you can select the sensor in addition to modis just right here
[24:02] you can also click off of modis if you don't want that sensor as well looking at the right side
[24:10] you can choose either a predefined region as i've done here with the arabian c highlighted in red
[24:17] or you can actually enter and define a bounding box of your own region of interest interest you just put in the longitude and
[24:25] latitude here back on the left you define the area and swatch size and swath size and which
[24:34] percentage of clouds may have secured the image scene you're requesting you can choose the month by year in the
[24:41] bottom left table so here i've selected december 2015 i'm kind of cheating here because i already looked at the world view and i know that
[24:48] there's a bloom over in the arabian sea december 1st i can also choose the day of the month
[24:55] that i'm interested in finally when i want i think that i've got everything entered correctly i'll just glance back over it to make sure
[25:03] that nothing's changed itself i'll click on find swathes to submit my request to the system a few moments after i submit my request
[25:17] a new page loads and that gives me choices of which scene i want to view since my date range was only limited to
[25:23] one day and i'm only searching for aqua modis imagery there are very few image scenes that fit my request if i were
[25:29] requesting a larger date range there would be a lot more images in this window window if you look at the images here on the
[25:35] screen you can tell just by looking at it that one of them has a lot of data in
[25:39] it and the others are a little bit more patchy or scattered it's pretty obvious which one i want to
[25:45] choose here and it's this image here on the left and you just click it with the mouse
[25:53] a new window will open showing me a true color chlorophyll and sea surface temperature scene as well as information
[26:00] about where this image was collected on the globe in the upper part of the page you will
[26:04] see several hyperlinks for imagery files i've obscured them a little bit with the red boxes but there are five one two
[26:12] three four five the name of the file incorporates the sensor name a for aqua the date and time of collection the
[26:22] processing level and the data product suite where applicable i'm searching for or interested in the ocean color or oc
[26:30] suite and the sea surface temperature suite i just click on those to begin the download download these files can be very large so i
[26:42] recommend downloading when you are on your fastest available internet connection when you are finished downloading you can open these files in cdas which we
[26:52] will cover in the next section before going into cds though i'll review a few more data access tools
[27:01] excuse me the next one is the level 3 browser available through the nasa ocean color web web if you are interested in accessing
[27:11] global data composites at various spatial and temporal scales then the level 3 browser is a good starting point
[27:18] at the top of this page highlighted in red you will see drop-down menus where you can select standard experimental or
[27:25] test data and standard is the one that's selected here the type of data product and also the sensor that it comes from
[27:32] so in this example snpp veers chlorophyll concentration using the oci algorithm algorithm the spatial scale and the temporal scale
[27:43] of um of the data the results will be images of scenes yielded from these search parameters and
[27:49] you can see them here these images that are are that look like the globe and this distribution of chlorophyll i've chosen
[27:55] monthly so you can see that it's organized by month and all i have to do is click on one of those images
[28:00] to call it up are you interested in monthly patterns of chlorophyll i find that creating animations of
[28:07] monthly composites to be a useful tool to convey monthly and seasonal patterns in global chorophil last week i got an email from one of the
[28:14] participants asking me if it's possible to teach high school students using remote sensing i find that having students download the
[28:21] data from this browser search window and create animations and then make observations of the patterns could be one way to introduce them to
[28:29] these ideas there are other three other access data access tools we will discuss the noaa coast watch tool
[28:40] nasa giovanni and the usgs earth explorer where you will learn to access landsat data the noaa coast watch tool
[28:56] is organized into regional nodes each node serves the needs of its regional user community here you will see the west coast coast
[29:07] watch node i can search its data catalog for data sets they have processed and are serving to their users
[29:17] on the left side of this image you will see that a number of ocean color data products from various
[29:22] satellite sensors are available some of these are confined to the nodes region and some are global this node also serves sea surface
[29:30] temperature and wind and current data you can see in the tabs listed near ocean color in this example i have selected
[29:39] chlorophyll a viirs n global 2012 now data product if i click on the access data button highlighted in red i will be
[29:48] taken to the page where i can download the data on this new page i can refine my region
[29:53] and other parameters select the data output file type and download the data depending on the format i choose i can
[30:02] then work with this downloaded data in cdas another tool is giovanni or the geospatial interactive online visualization and analysis
[30:12] infrastructure infrastructure it is a web-based application that provides a simple and intuitive way to visualize analyze and access
[30:21] earth science remote sensing data without steps that you would need to make some analysis analysis follow the link at the top of this page
[30:34] to get started giovanni permits the user to customize selections to gain an understanding of the earth system
[30:46] you can choose the type of plot you wish to make in this case i've selected a time average map for the time period of
[30:52] 2004 to 2016 and the arabian sea region back to that arabian sea idea on the left panel i've made other
[31:00] choices choices for discipline in this case ocean biology and oceanography the measurements platform platform and my temporal resolution
[31:11] giovanna has presented me with two options for chlorophyll and i will choose one of them here you see that i can choose my region
[31:22] not using a map and in this case i'm selecting only for december 15 2015 as my time period to correspond with the
[31:29] winter phytoplankton bloom in the arabian sea example when i'm finished with my selections i click and click the green
[31:37] plot data button down here in the lower right in this example i'm only looking at one month so my wait list or wait time is
[31:44] short your wait time may be longer if you are requesting a longer time period when your query is complete you will be
[31:54] given the option to zoom in to the scene change colors in the color bar so you can change and also the scale of
[32:04] how you want to display these data and you can save this image in a number of formats
[32:11] you also have the option to click on download data to actually download the data and not just the image
[32:20] you will have a number of data format options available for download the usgs earth explorer website allows
[32:30] you to custom tailor your search parameters for landsat and other sensors data in this example i'm just going to
[32:36] be talking about landsat after registering enter the website and search by data by first selecting a region by either entering a place name
[32:43] or its coordinates i chose rio de janeiro a nice place to visit next what you want to do is you want to
[32:54] click click which data set you want to search for in this case i've selected landsat 8 as you
[32:59] can see here there are several options and a few that are below this that are not displayed
[33:05] here on this image but in this case i'm using this example for landsat 8. and then you'll click on results
[33:12] a list of image scenes will be displayed on the left just click on the image of the one that interests you to see a
[33:18] quick look of the scene so it's a little bit in the background here but this is the list of images that
[33:23] will be displayed here in the background you'll be given a choice to to just click on the image and that's what
[33:30] you'll see popping up right here you'll then have the option to download the data there's an icon here that's a
[33:39] little green arrow that's pointing down it's a little bit grayed out here you'll just click on that and this
[33:44] download options window will pop up you'll have a choice of which image file to download for my uses i typically
[33:51] download the level one geotiff and i work with the data in cds so now you've learned several methods
[34:14] for accessing and downloading data it is a lot of information to take in and remember we have these links that
[34:21] are in the pod over here so that you can follow those links in time you may find that you gravitate
[34:28] towards one of the methods over the others depending on your needs and that is normal in this next section i will give you an
[34:35] overview of nasa's cdas image processing tool which can be used to visualize and process the remote sensing data you just
[34:42] learned how to obtain so now you've learned several methods for accessing and downloading data it is a lot of information
[34:58] if you move on to the cds link that you see here in the upper part cdas was originally developed for the
[35:05] seawiff sensor and derives its name from the seawifs data analysis system but now it supports most u.s and international
[35:12] ocean color missions it is a comprehensive image analysis package for the processing display analysis analysis and quality control of ocean color data
[35:22] it is freely available through the nasa ocean color website sea das is well supported with online tools
[35:32] tools help pages and active user community in the ocean color forum and an attentive and friendly support team based at nasa
[35:38] goddard the cds team at nasa goddard has put together a suite of freely available on-demand tutorials and a webinar on how
[35:51] to install and use cdas while i can only give you an overview of some of the functionality of the
[35:57] software as a part of this webinar it is through these tutorials at the cdas web page page the webinar that they've provided and
[36:05] through your own use that you can learn how to use the program cdas is intuitive to use and does not
[36:11] take very long to learn since cdas supports such a wide variety of satellite sensors your time investment and learning it will be time
[36:18] well spent again these links are in the link file that's available to you in the files pod
[36:29] what are some of the features of cdas for visualization it provides for very fast image display and navigation so
[36:37] that you can explore your data advanced data layer management flexible band math capability and accurate reprojection and masking
[36:47] for data processing cdas permits users to process satellite data through a number of processing levels some users wish to have more control
[36:55] over the inputs used for atmosphere correction or for the generation of ocean color data products the ability to process through these
[37:02] different levels gives the user more flexibility in generating their own custom data sets for their science needs
[37:12] cds can be installed on linux mac os x and windows systems the windows version currently only allows for visualization and does not
[37:22] support data processing when you are ready to use cdas first watch the tutorial the basics getting started on the cdas tutorials page this
[37:37] will guide you on how to download the installer and any ancillary code for your operating system and for your needs
[37:47] here's what cdas looks like when you first open it across the top you will have a menu bar
[37:55] and and activity icon so your menu bar across the top here this is in a mac setting
[38:01] and these activity icons that you can click on some of them are grayed out now some of them are active like this one
[38:07] here in the corner this is default layout on the left panel will be your data layer management
[38:18] your mask manager and color management in the middle blue region here is where your image will appear when opened
[38:28] on the right will be information related to where your image is from and information on the geolocation and
[38:35] values of the data products as you move your mouse over the scene opening the data is really intuitive
[38:48] just click on the folder icon and a window will appear if you look here in this window these
[38:53] are the data that we downloaded earlier in this session using the level 1 and level 2 browser
[39:02] you can select one or more of these netcdf or dot nc files to be read by cds
[39:12] the files will appear on the left as you see here in this panel this is the file manager
[39:18] i clicked on the little pie piece next to rasters on both of these files so it would open it up so you can see what was
[39:24] in there what i did is i double clicked on this chlorophyll chlorophyll icon and the image that you see here
[39:31] appeared appeared i did apply a gray land mask which i'm not going to discuss how to do so in
[39:36] this talk today recall the visualization of this scene using the nasa worldview tool tool earlier in this session remember that
[39:46] little swirl of phytoplankton that we saw offshore of muscat oman now using this tool you can roll your
[39:53] mouse over the scene and see what the data values are for that region if you look over here in the rasters
[39:59] section panel on the right side of the window you can see what the estimate for chlorophyll a is
[40:04] in this location that i've highlighted or that i'm pointing at here with the arrow furthermore you can adjust the scaling
[40:16] on the color bar all i did was click on this tab right here in the color for the image by selecting the color
[40:23] management tab on the left panel of the window window in this case i have chosen to represent
[40:27] chlorophyll in a log 10 scale so all i did was click this log 10 button for this webinar session using cdas i've
[40:37] shown you how to open a file open a data layer in a file explore the data by using your mouse
[40:43] hovering over the scene and observing the data values in the raster panel cds has so much more functionality than
[40:52] i can demonstrate in this webinar session session i strongly urge you to follow the cdas tutorials and webinar
[40:59] again the software is intuitive and worth the time investment to learn you will learn to use the tools
[41:08] including pixel extraction and color management management how to manage layers and apply masks how to process mosaic and reproject your
[41:19] data depending on your data needs the linux and mac osx installations permit you to process through different
[41:28] levels and finally it is possible to compute statistics on your scene cds has a great deal of functionality
[41:37] and with just another two to three hours of time investment in the tutorials in the webinar you too can be up and
[41:42] running and using it so that's a lot of information to cover in one webinar session to recap
[41:55] we reviewed some of the fundamentals from last week we reviewed commonly used nasa and us-based satellites and sensors used for
[42:04] coastal and open ocean applications we talked about processing level i showed you several nasa satellite data access tools
[42:13] and i gave an overview of nasa's cdas image processing software thank you for your participation today as a reminder next week we will be
[42:24] discussing animal movement and migration and we will have a special guest dr mitchell rofer with the time remaining i'll answer any
[42:32] questions you may have thank you okay so a couple of questions are here about giovanni and i didn't really go into a great deal
[42:43] of detail here because i kept referencing it to as a data access tool but but really what giovanni allows you to do is
[42:49] it allows you to analyze large data sets without actually bringing those data into your system and doing all the
[42:55] pre-processing that you would need to do to get to the point of coming to some synthesis synthesis so
[43:02] so giovanni allows you to do both of those and it's a really powerful tool the more you use it the more you can find that
[43:08] you can make inferences from the data and still get the final data products from it another area of discussion and i kind of
[43:17] touched on this a little while ago when talking about the data portals is that as you become more familiar with these
[43:23] different data portal access tools and data portals you may find that you tend to use one over the other but there's actually a
[43:30] lot of [Music] [Music] overlap in the different tools and the sorts of data that they can provide to
[43:36] you you and the different levels and as you use them you will become more familiar with which tools are more appropriate and
[43:42] still that some of the tools do have overlap and it kind of is a matter of a
[43:46] personal preference okay so there's one person who's acting asking about higher resolution imagery for detecting algae um i'm guessing that this person is
[43:59] asking about higher spectral resolution imagery imagery because that's the direction that we're taking in trying to identify different
[44:06] to try to resolve the biodiversity of algae and if we think of it in terms of size class um or in terms of taxonomy um
[44:15] the hico sensor may be something a sensor of interest because that has hyperspectral imagery the one drawback
[44:22] with the hico sensor is that it's no longer operational so it'd be necessary to depend on existing data sets and it's
[44:29] there's a good chance although not a guarantee that there will be difficult to access information on the validation data or the in-water
[44:37] data that may have been collected during the time that the hico sensor collected in the dream i didn't go into a great deal of detail
[44:44] on this um but in the ocean color web website website there is access to ground or see-truth
[44:51] data data through sea bass and the ocean color dac and so it might be worthwhile for the
[44:57] user who's interested in using hico data to see if there may be some match-ups with in-water data collected at the same
[45:04] time a question about cdas visualizing landsat data and it is possible to do so cdas is pretty flexible on
[45:15] how you operate it so if you have any doubts try downloading some data and visualizing in cdas and see
[45:22] where that takes you again the sea i point you all to the cdas website for further training on using the tool my
[45:28] focus is generally not on landsat data i usually use modis and hico data for my research but i encourage you to check
[45:36] out the tools and the trainings that they have available i too would love it if they could make
[45:42] the windows operating system process between levels but i have no power over influencing the group and making that
[45:48] happen so a couple of you have asked when are they going to make that possible i would say to direct your
[45:52] questions to the ocean biology processing group to see when that might happen okay so i see again here and i'm really
[46:02] excited that you guys are so excited about this topic a few more specific questions on like um
[46:09] sediment flow sediment depth accumulation lake behind the dam papers if you're interested in a little bit more detail i encourage you please send
[46:17] me an email and i will respond to you and i'll attach any papers that i'm aware of to
[46:23] try to help you with some of your questions that are more detailed thank you for your participation today
[46:32] as a reminder next week we will be discussing animal movement and migration and we will have a special guest dr
[46:38] mitchell roffer you
