# Overview of Drought Monitoring Data and Tools using Earth Observations, Part 1/4

`https://www.youtube.com/watch?v=5WZf1bBAqzg` · id 130 · 2:44:54 · module 6 — Remote Sensing of Drought

[00:00] hello everyone welcome to this arset training on drought monitoring prediction and projection using NASA art system data my name is Amita meta and
[00:11] along with my colleague Sean McCartney I welcome you to this first session on overview of trout monitoring data and
[00:18] tools using Earth observations we have a number of expert speakers today from NASA and NOA and we
[00:26] have um joint session between NASA and NOA uh helped by Dr Margaret horvitz we'll be introducing our speaker
[00:36] soon but we'll start with a brief introduction to rset for those of you who are new to rset arset is a NASA
[00:45] applied sciences capacity building program and it provides accessible relevant and cost-free training on remote sensing satellites sensors
[00:54] methods and tools our set trainings are provided in these thematic are areas they include a variety of applications of satellite
[01:04] data and are tailored to audiences with a variety of experience levels arset conducts online trainings most of the time and there are also
[01:13] in-person in-person trainings they're live and instructor Le or asynchronous and self-based all arset trainings are costree many of them are conducted in
[01:25] Spanish also and most of the training material is translated in Spanish Spanish there are some multilingual options as
[01:33] well we only use open- Source software and data and ret website has a lot of information including all the training
[01:43] material from past and current trainings are we'll start with a brief overview of this this training drought is a period of water
[01:55] shortages and as reported by this United Nations document drought frequency and duration have been increasing globally since
[02:05] 2000 drought has skilled 650,000 people approximately between 1970 and 2019 and approximately 2.3 billion people around the world are currently
[02:17] facing water stress it is projected that by 2050 drought could affect more than 75% of the world's
[02:26] population drought is a complex phenomenon and as shown here in this schematic it occurs on a variety of time
[02:34] scales from weekly monthly seasonal and annual to multi-year since trout affects drinking water availability crop production and
[02:44] ecosystems for better water Agricultural and social economic management and planning is crucial to Monitor and forecast drout conditions and that is
[02:55] the motivation for this current training over overall learning objectives for this training are that by the end of this training you'll be able
[03:06] to identify important Earth observations and tools for assessing short-term that is weekly to monthly to long-term seasonal to multi-decadal Drought
[03:16] conditions identify drought portals and relevant geophysical parameters for monitoring droughts globally and regionally access and analyze subseasonal to seasonal forecasts of
[03:29] temperature and precipitation for evolving drought conditions for a region of Interest access and analyze climate change projection data to assess impacts
[03:39] on long-term drought conditions for a region of Interest finally explore selected Regional drought monitoring tools that can be customized for a user
[03:49] region of Interest prerequisites for this training are fundamentals of remote sensing and more importantly remote sensing of
[04:00] drought uh this is AR set's earlier drought training which introduced Earth observations and a number of drought
[04:07] indices in that training there will be four sessions to this this training today's session will focus on
[04:18] Route monitoring um data and tools using Earth Earth observations the next two sessions will focus on uh prediction and projection
[04:29] ction of evolving drought conditions one on seasonal to subseasonal time scale and second one on climate projection so
[04:38] multi- deic time scale and then the last session we'll have demonstration of regional drought monitoring tools which
[04:45] can be customized for the region of your for any region of your interest there is homework uh that's
[04:53] posted today on our website and that's due by August 15th um certificate of completion will be awarded to those who attend all live
[05:03] sessions and complete the homework assignment before the given due date um just uh to note here that today's
[05:12] session is going to be a little longer than the rest of the three sessions uh there will be a lot of information uh
[05:20] available about a number of drought tools and there will be also a demonstration of how to calculate
[05:27] drought indexes so let's start with overview of drought monitoring data in tools using Earth observations we'll start with
[05:36] introduction of our invited speakers we'll start with Dr Compton Tucker he is a senior scientist at NASA space thre
[05:47] Center he was among the first researchers to employ satellite data for studying photosynthesis on land determining land cover monitoring
[05:57] droughts and providing femine early warnings more recently he and his colleagues have mastered mapping billions of trees and converting these
[06:09] into carbon at tree level using machine learning coupled to high performance Computing and today he will be talking
[06:16] about drought mapping for food security next we introduce our Noah colleagues for today's session first we want to thank Dr Margaret Hertz uh she
[06:28] helped coordinate this joint nasan NOA session Margaret serves as the hydroclimatic services lead for the National Weather Service breaching
[06:38] between the Climate Services Program and Water Resources service program she develops program Milestones formulates policy and makes recommendations for new
[06:48] research and products especially those related to drought and precipitation our speakers include Kelsey satalino Steve Ansari and Brad pew
[07:00] uh Kelsey satalino and Steve Ansari they both support uh National integrated drought information system or nidis Kelsey supports nidis digital
[07:11] communication efforts including content development user feedback and engagement and strategic planning for the US drout portal uh Steve Ansari is drought portal
[07:24] manager um and um he has a background in Vari of GIS data management and visualization activities within Nova
[07:34] including radar satellite and sever weather data sets he is also the primary author of The NOA weather and climate
[07:43] toolkit software application both Kelsey and Steve will be presenting and providing overview of trout. goov our final Noah speaker for today would be
[07:55] Brad Pew he is a meterologist at Noah's climate Prediction Center he is involved in forecasting um temperature and
[08:05] precipitation outlooks uh also a US hazards Outlook monthly and seasonal outlooks seasonal drought outlooks and he is author of North America drought
[08:17] Monitor and US drought monitor he will be providing details of us drought monitor monitor today so the specific objectives for
[08:28] part one are that by by the end of this session you'll be able to identify Earth observation data sets and tools for both
[08:36] Global and Regional drought monitoring explore Regional drought monitoring tools for analyzing drought conditions in the US and overview of
[08:46] trout mapping for food security using Global inventory modeling and mapping studies Global agricultural monitoring or Glam and then finally Sean McCartney
[08:57] will demonstrate how to calculate drought indust for a selected time and region of Interest using Google Earth engine as we
[09:05] go through the session please feel free to put your questions in the question box and we will address them at the end
[09:14] of the webinar we'll try to get to all the questions during the question and answer session after the webinar and the
[09:21] remainder of the questions uh will be answered in the question and answer document which will be posted on the
[09:27] training website about week after the training so we'll start with an overview of Earth observations and tools as we talked earlier there are
[09:40] several types of droughts occurring on multiple time scales starting with mological drought um which is primarily indicated by precipitation deficiency
[09:53] and related weather parameters as listed here next is agricultural drought that is uh indicated by soil water water
[10:05] deficiency uh plant water stress and reduced biomass and yield and that is characterized by uh decrease in
[10:14] normalized difference vegitation index as we will see later finally hydrological drought that indicates uh again dep in soil moisture and
[10:25] groundwater it reduces Stream flow um and lake level height um and also reduces wetlands and wildlife habitat all these droughts
[10:34] occurring on different time scales eventually affect economic and social sectors and has ecological impacts as well so all all the indicators where we
[10:48] just talked about they're available from remote sensing uh we've talked about this um in our previous training so
[10:55] we're just going to provide a brief table here that we have a number of satellites um there's a global
[11:03] precipitation measurement Mission uh that provides precipitation data and the sensors and special and temporal resolutions and coverage are provided in
[11:14] these two columns soil moisture is available from soil moisture active passive satellite uh with a microwave radiometer uh groundwater is available
[11:25] from currently Grace follow on it has kand microwave radar ultimeter uh lens surface temperature uh ndvi evapor transpiration all indicator
[11:38] of droughts they are available from multiple Satellites with Optical and thermal sensors uh that include lens set
[11:46] Terra Aqua um Sumi National polar partnership and Joint polar Satellite Systems so you can learn more about this
[11:54] from our previous uh training then there are are drought indexes there are commonly used operational drought indices which are
[12:04] standardized precipitation index or SPI Palmer drought severity index or pdsi and normalized difference vegetation index or ntvi so an anomalies of these
[12:17] indices are examined to assess drout conditions so drought indices are basically mathematical representation of water deficit or excess compared to
[12:29] historical data they help decide when to start implementing water conservation or drought response measures and can be
[12:37] used to analyze drout frequency severity and duration for a given location and period again our training earlier
[12:48] training provides more details standardized precipitation index or SPI um that's primarily defined to characterize meteorological drought so mathematically historical rainfall
[13:02] data at any location fitted with gamma distribution represent cumulative probability function and if a rainfall event is a low probability on the
[13:13] cumulative probability function it is indicative of a drought event so the SPI values can be interpreted as the number
[13:22] of standard deviation by which the observed rainfall anomaly deviates from the long-term mean SPI averaged over different time periods
[13:32] uh ranging from 3 to 12 months indicate severity and duration of drought next is pmer drought severity Index
[13:40] pdsi this is an index for evaluating the severity and frequency of prolonged periods of abnormally dry or wet
[13:49] conditions pdsi uses both temperature and precipitation data and a physical water balance model to estimate relative dryness
[14:00] dryness pdsi formula is given here uh where M is for each month where Z is moisture anomo
[14:08] index based on the water balance model finally ntvi that is based on reflected red and infrared lights and
[14:18] relationship between them a chlorophyll strongly absorbs um red light and plant structure strongly reflects near infrared light
[14:29] so uh these wavelengths uh reflected back to satellite sensor they're measured and ndvi is calculated based on
[14:39] this formula shown here so what it shows is that uh when ntvi is close to one uh
[14:47] that um shows presence of high density of green leaves and when it is negative or close to zero that means no green
[14:57] leaves are present ntvi anomalies uh can be used to monitor Dr conditions as we will see later so the indices we saw SPI ptsi and
[15:09] ndvi they are used in some of the existing uh drought monitoring tools as we will see in in a presentation later
[15:19] today so here is a list or a table of drought monitoring and early warning tools already existing uh the these are
[15:29] Global and Regional drought monitoring tools some are focused on specific regions such as North America or us um
[15:40] some for Africa different parts of Africa and Asia and there are Global D monitoring tools um as listed here some
[15:52] uh focus on vegetation indices some look at other parameters such as precipitation and Sol moer so if you go
[16:01] to this EOTech devet drought data and Tool Matrix you will see all these tools listed there uh methodology of how the
[16:10] tools are put together and what data sets are used are also provided they're available from there uh since we do not
[16:17] have time to go through these tools in detail what we are doing is we we picked a few
[16:24] tools so North American uh us drout Monitor and uh d.gov uh these will be presented next by
[16:32] our NOA colleagues there will be some information about uh Global drout Information as well and we will also see
[16:40] uh Global agricultural mapping or Glam um um at the end so these are the tools that we will focus on today so next
[16:49] presentation will be from Kelsey satalino and uh Steve Ansari uh they will talk about trout. goov and then
[16:59] Brad Pew will talk about um us drought Monitor and we'll have um Compton Tucker talk about uh Glam and uh drought
[17:10] mapping for uh food security and then finally we will have a demonstration of uh calculating SPI and ntvi using GE by
[17:22] Sean mcartney so I'm going to hand it over to Kelsey and Steve so Kelsey uh take it away please thank
[17:30] you thank you Amita I'm Kelsey satalino with the Cooperative Institute for research and environmental Sciences or series uh and I am the digital
[17:39] Communications coordinator for Noah's National integrated drought information system or ntis thank you Amita um my name is Steve
[17:49] anari I am with the national centers for environmental environmental information uh and I am the uh us
[17:57] drought portal manager for drought. goov with the uh nidus program as well so um I want to start today's
[18:06] presentation by giving you a little bit of background on what the national integrated drought information system is
[18:12] and what the US drought portal is before giving a deep dive into some tools and resources for Drought monitoring and
[18:18] prediction on the US drought portal Noah's National integrated drought information system or nidus is a multi- agency US government program and our
[18:28] mandate is to to develop and provide a national drought early warning system for the United States uh we do this as
[18:34] you can see on the screen through eight Regional drought early warning systems or du's regions um and du's regions are
[18:42] networks of federal tribal State academic and other partners that work to make climate and drought science accessible and useful for decision
[18:50] makers the goal of these regionally focused networks is to improve stakeholders capacity to monitor forecast and plan for the impacts of
[18:59] drought Nas's mission is to enable the nation to move from a reactive to a more proactive approach to managing drought
[19:06] risks and impacts and we do this by coordinating drought monitoring forecasting planning and other information um across the United
[19:17] States nidus established the US drought portal website or www.pr.gov in 2008 the US drought portal is the United States government's
[19:27] authoritative inter agency drought information website um it is a One-Stop shop to integrate data Maps graphs drought research information educational
[19:39] resources and other decision support resources from across the government and other agencies all in one place the US
[19:46] drop portal is managed by a development team at Noah's National centers for environmental information or ncei and is
[19:53] led by the US drought portal manager Steve Ansari who is my co-presenter today now drought. goov does Focus primarily
[20:03] on us data as the name us drought portal implies but it also includes global data and resources as well some of the
[20:11] Hallmarks of drought. goov are the interactive and customizable maps and tools throughout the website we have high resolution low latency interactive
[20:21] maps and data that allow users to visualize this information in new ways and download data files and highquality
[20:27] customized IM we pull in publicly available data from across government agencies um academic institutions and other organizations all in one place for
[20:38] Drought monitoring and prediction on drought. goov you can explore drought data and information in a variety of
[20:44] ways if you look at our menu at the top of this screenshot and I'll show you the
[20:49] website itself in just a moment you can explore drought data by Topic in our data and map section by economic sector
[20:57] showing uh drought cascading impacts across different sectors of the economy in our B sector section or by Geographic
[21:04] scale in our bilocation section we also have information in our research and learn section on educational resources
[21:11] about trout as well as information on Innovative drout research and Research into action and our news and events tab
[21:19] includes uh news stories upcoming workshops and webinars email lists and Regional drought status updates for our drought early warning system Across the
[21:29] Nation um this screenshot is showing our data catalog which I'm going to dive into and show you in just a moment this
[21:36] features background information documentation links and data downloads for National and Global drought and climate data sets so the first uh feature of drought.
[21:48] goov that I want to show you today that can be used for Drought monitoring and prediction is our data catalog you can
[21:54] find this by going to the data and map section of our website and clicking all data it's a curated collection of
[22:01] drought data sets maps and tools where you can search for a specific tool filter by topic by Geographic coverage
[22:09] file format or data type for example insitu or radar or satellite data uh you can also then click for more information
[22:18] on every uh data catalog page which includes an overview of the data set in plain language documentation links to
[22:25] the original source and where available data download links and now I'm going to switch over to drought. goov to show you a little
[22:35] bit of our data catalog to access our data catalog just go to the data and Maps section of dr.go
[22:45] in the top menu of the website and under find data you'll see an option for all data at the bottom this will take you to
[22:54] our interactive data catalog where you can see uh a brief descript and some quick information about a
[23:01] variety of drought and climate data sets and and tools you can filter this data by Geographic extent so for example you
[23:10] could select Global to view global data sets and that will filter for all available data sets this catalog
[23:17] includes more than just the maps that are directly available on drought. goov so it's a great resource for finding
[23:23] reliable trusted drought and climate information you can also filter data by topic such as snow drought uh
[23:32] paleoclimate data precipitation data ecological drought data soil moisture data or filter by file format data type such as landbased stations model
[23:49] data Radar Radar or satellite data uh or directly search for a specific tool in our search bar if you're looking to download data
[24:00] you can click this link here to download data which will take you to our drought. goov data download page which is at
[24:07] dr.go daty download or you can find it through our data catalog page link which I just showed you this is where you can
[24:14] find uh GIS and web ready data downloads for all the data sets that we are ingesting and displaying on dr.go either
[24:22] as a geotiff as a Json file or as map tiles going back back to our data catalog if you click on any of these
[24:31] individual links you'll be taken to a data catalog page which includes some quick links to the website tool or data
[24:39] downloads uh metadata such as the geographic area of coverage the type of data the period of record and file file
[24:48] types available for download how to information access links documentation and more one of the other Hallmarks of drought.
[25:02] goov are the interactive and customizable Maps across the website drought duck of pulls in publicly available data from across US government
[25:11] agencies academic institutions as well as global data sets and displays them in interactive automatically updating Maps if you click the download and view map
[25:22] image icon on the top left corner of any map on the website it will open up a map
[25:27] customization pop up like the one you see on my slide this allows you to view that map uh in a larger context to zoom
[25:34] in or out pan to a region of interest you also have a number of data customization options for the map you
[25:41] can use the current data layer drop down at the top to select from any of the other Maps layers that are on that same
[25:49] web page adjust the transparency of that layer you can change the base map using the background layer dropdown for unit
[25:58] uned States data sets you can overlay the current US drout Monitor and adjust the transparency of that layer as well
[26:05] and also for us data sets you can choose to display Alaska Hawaii and Puerto Rico in as cutouts at the bottom of the map
[26:13] alongside the contiguous us or to display uh Geographic border outlines for US states counties and tribal Nations finally you can click save map
[26:24] in the bottom leand corner of this popup to save a highquality p image of your customized map which is a great resource
[26:32] for communicating in presentations in reports on social media and just for analyzing data by being able to jump
[26:40] between different data sets while zoomed in on a particular region of Interest the next tool on d.gov that I
[26:50] want to feature for you all is our historical data and conditions Tool uh I'm going to show you this in a live
[26:56] demo in just a moment but this tool was created because we kept getting the question how does this drought compare
[27:03] to past droughts for my specific region this is an interactive time series graph and map that allow you to view and
[27:11] download three historical drought data sets side by side the first is the US drought monitor which is issued weekly
[27:18] and uh from the year 2000 until the present a 9-month standardized precipitation index from the national centers for environmental information
[27:28] and clim grid monthly data set this is issued monthly from 1985 to the present and an estimated Palmer modifi drought
[27:36] index which is based on paleoclimate data using tree ring reconstructions and instrumental data to estimate June to
[27:44] August drought conditions from the year zero to the year 2017 for many regions of the United States there are a number of features on
[27:55] this historical conditions tool which I'll show you at the top you can jump between each of these three data sets by
[28:02] selecting the tab for the data set of interest you can click on the map directly to select a state or a county
[28:09] to load state or County historical data um you can click shift plus clicking on different states to select a custom
[28:16] region of multiple States or multiple counties and that will update the time series graph statistics and map for your
[28:24] customized customized region you can also click on on the time series directly to jump to a different
[28:31] date uh and to hover over dates to see a quick glance of statistics of different drought categories for that specific
[28:40] historical date below that we have a number of different options some of which are are similar to what you can do
[28:47] by directly interacting with the map and graph our time series options section allows you to zoom in on a particular
[28:53] time period of Interest by putting in the years and clicking update graph you can combine multiple States and
[29:00] counties uh in the combined States and combined County sections as well as by clicking on the map to create a custom
[29:07] region of Interest so for example if you wanted to look at the Pacific Northwest us you could combine the states of
[29:13] Washington Idaho Oregon and Montana and view a custom map and historical time series just for that region you can also
[29:22] hover over the legend which is on the right hand side underneath the map and time series to view more information
[29:28] about that data set the percent area of the region that you've selected that is in each category and the about this data
[29:37] set section gives you a brief plain language description of the map as well as some additional information about
[29:43] where to learn more information about this data set finally at the bottom we have a variety of download options you
[29:50] can download an image of just the map just the time series or the map and time series for the specific time range data
[29:58] set and location that you've selected you can embed this entire tool into your own website or you can download a CSV
[30:05] XML or Json file we also have a readme file and a data catalog page that gives you guidance on how to interpret the
[30:12] historical information that's available so now I'm going to give you a brief tour of the actual tool itself so you
[30:20] can see how this works in practice to get to the historical data and conditions tool again go to the data
[30:28] and map section of drought. goov and the find data section and you'll see it's the third link down historical
[30:37] information so by default we're showing uh the US drought monitor but you can also view a 9- Monon standardized
[30:44] precipitation index or paleo climate data showing a Palmer modified drought index for each of these data sets uh you
[30:52] can select a state to load that State's historical data and now I'm seeing a Time series and statistics specific to
[31:00] North Carolina I can shift plus click to select multiple States or click reset selections to revert back to the
[31:11] entire United States once I've selected a region of Interest I can also uh pan over this time series graph to At a Glance see
[31:25] some statistics for the different us drought monitor categories for this custom uh region that I've selected or I
[31:33] can click somewhere along the graph to update the map and these statistics in the legend to that date in this example
[31:42] December 14th 2010 all of these statistics show the total percent land area that's covered by that drought
[31:49] category I can choose to zoom in if I want to get a closer view at the time
[31:53] series graph to say 2010 to 2012 and that will allow me to see in more detail the drought conditions for that
[32:02] time period you can also uh adjust some other settings like showing or hiding this blue date label whether you want to
[32:09] be able to show data on hover or not or you can also isolate a particular drought category to view it more closely
[32:16] so for example I could show only D4 or exceptional drought areas or only drought um excluding d0o or abnormally
[32:25] dry conditions um the combined States and counties section have automatically updated based on my selections on the
[32:32] map if I wanted to remove a state I could just click the x button or use the
[32:36] drop down to add an additional State and you can actually jump down to the county level for any of these historical data
[32:42] sets as well uh the map legend is interactive allowing you to see a definition of each of the different categories as well as
[32:51] the statistics for your area you've selected and an about section um if you click all download you'll see all of the
[32:59] download options available and it's customized for the specific custom region that You' have selected um so you
[33:05] can download a CSV XML or Json file or an image and if you download an image you're given the option to download the
[33:12] map and time series time series or just a a map if you want to find more information
[33:19] about this data click the learn more Link in the about this data set section we also have Source information for the
[33:25] original data listed in the bottom left corner of the tool the next feature of drought. that I
[33:34] want to highlight for you is the ability to view drought data by geographic location and this is one of the the
[33:41] biggest features and Hallmarks of drought. goov by going to the bilocation section of the drought. website you can
[33:48] view data Maps tools and resources personalized for your Geographic scale either by entering your city or zip code
[33:56] into the select a location uh search bar in the bilocation section or directly on our homepage uh you can view drought
[34:03] information by County by US state or territory by each of our regional drought early Warning Systems which are
[34:10] are listed here uh by Huck 2 Watershed in the United States for us tribal Nations for the entire nation or uh
[34:19] internationally with global data which I'll talk about in just a moment our International resources page is part of our bilocation section and
[34:32] the goal of this page was to provide a curated list of resources for international drought Maps U monitoring
[34:40] and predicting information as well as humanitarian alert systems this page includes several interactive Global drought and climate indicators including
[34:49] several Global standardized precipitation index Maps as well as the vegetation Health index uh as well as a curated list of
[34:58] resources uh for monitoring drought across the globe I'm going to take you to the international page now to show you
[35:05] exactly what you can do on this page um and to highlight some of the interactive map capabilities that we have on the
[35:13] site so you can access the international Page by going to BU location from the main menu and then selecting
[35:20] International it's also at drought. goov International if you want to type that into your search bar at the top of this
[35:28] page as you can see on many pages throughout d.gov are several interactive maps that we've pulled in from other
[35:34] sources um in this case it is a three-month standardized precipitation index using the era five data set you
[35:42] can pan around the map to a region of Interest or zoom in or out you can also view a plain language
[35:50] description of the data set uh Legend information which provides specific information when you hover to show what
[35:57] SPI value corresponds to each of these percentile percentile categories update information about how frequently the data is updated and a
[36:07] learn more link to view more information about the data in addition um you could see a 9month standardized precipitation
[36:15] index from the global precipitation climatology Center and the vegetation Health index from Noah if you click on this download icon
[36:24] that I mentioned earlier you can customize and download download any of these maps on this page or otherwise uh
[36:31] this customization popup as I mentioned before allows you to pan and zoom to a region of Interest adjust the layer
[36:40] transparency change the background layer of the base map and adjust several other categories before saving the map as a highquality
[36:49] PNG PNG image our International page also contains some summary of different impacts of drought around the globe GL
[36:58] featured International drought maps including the global drought monitor which I'll talk about in just a moment and the North American drought monitor
[37:06] which is a Cooperative effort between the United States Canada and Mexico to monitor drought across um the North
[37:12] American American continent tools to visualize and analyze drought worldwide um Steve is going to talk about climate engine in just a
[37:19] moment but there's another number of other useful tools and resources uh for analyzing drought globally worldwide humanitarian alert systems
[37:30] such as the famine early Warning Systems Network and the global disaster alert and coordination system and others and
[37:37] then a more comprehensive list of international drought resources including Global drought mapping tools and Regional drought monitoring systems
[37:45] organized by region so this is a really useful resource as a jumping off point to find more drought monitoring
[37:51] prediction and planning information even though drought. goov is primarily focused on the US government so next I just want to
[38:03] highlight before I hand it over to Steve one specific International resource that we highlight on our International page
[38:09] on drought. goov that is not a drought. goov map but is supported by nidus and by the drought. goov team um in other
[38:17] parts of Noah and that's the global drought information system the global drought information system or gdis is an
[38:24] international effort to bring together the best non-prescriptive drought information from local to National providers the goal is to provide an
[38:33] Apples to Apples comparison of drought conditions around the world and uh they do this through a global drought monitor
[38:40] which depicts current drought conditions across the globe um as well as prediction resources uh research and education resources and other drought
[38:50] management management tools so you can find a link to the global drought monitor on the drought. goov internet International page under
[38:58] featured International drought Maps or you can go to gd- noah. hub. arcgis.com um so as you can see here uh the global
[39:11] drought information system consists of the global drought monitor which you can get to by clicking monitoring drought
[39:17] either here or below uh forecasting drought information management tools and research and education resources so if I click on monitoring
[39:26] I'll see the global drought monitor um and this is an interactive map using the args online platform um which uses a
[39:34] bottomup approach to depict current drought conditions across the globe uh this means that the drought conditions are not assessed by one Central
[39:43] organization but they're assessed by the nations of that continent and then the Noah National centers for environmental
[39:49] information takes those Continental um drought monitoring indices and puts them all into one arjs online map that you
[39:58] can use to view Global drought information so you can view a smaller version on this page or click go to the
[40:04] global drought monitor to view a fullcreen version of this interactive map I won't go through every data set
[40:10] that's available here for the sake of time but on the leth hand side you'll see um a variety of different options of
[40:18] layers that you can choose from um there's a number of agricultural layers showing different crops um from the map
[40:26] spam or spatial production allocation model that you can choose to layer um administrative boundaries including world countries as well as America
[40:36] Indian Alaskan native and native Hawaiian areas uh for the US uh a variety of Continental drought monitors
[40:43] including the European combined drought indicator and the North American drought monitor which as you can see here you
[40:50] can display alongside other layers on the map for each of these you can click these three dots to increase or decrease
[40:58] the transparency of a given layer or view details to learn more information about that specific data set uh we also
[41:07] have a number of Blended drought indicators um as well as evaporation based indices we have several different
[41:14] evaporative demand drought index data sets based on different underlying data um which shows the evaporative demand uh
[41:21] or The Thirst of the atmosphere which can be uh one key in IND index in monitor monitor drought a standardized precipitation
[41:31] index or SPI from several different uh global data sets as well as the standardized precipitation evapor transpiration index groundwater and soil
[41:40] moisture information from NASA's Grace um vegetation Health index and some demographic population data um so with any of these you can choose to hide or
[41:52] display a layer by clicking the check boox next to that layer and that will hide or display a
[42:01] particular data set on the right hand side you can view more information about the map and about how to use the tools
[42:08] and if you scroll down to the legend information you'll see a list of all of the different data sets that are
[42:13] available here if you click on that data set you'll see a link for more information a brief plain language
[42:20] description of the data set a legend and a valid date if you'd like to share this map you
[42:26] can do that using the link at the top you can also explore the other resources available through the global drought
[42:32] information system which includes a global drought forecasting information you can click on this interactive map to view drought forecasting resources uh
[42:42] from different organizations across the the globe just click on it and then you'll be able to see um a forecasting
[42:50] resource for that region uh drought management tools and research and educ ation resources for scientists and [Music]
[43:02] [Music] students and with that I'm going to hand it over to my colleague Steve anari the US drought portal manager to talk a
[43:08] little bit about one other International drought tool climate engine all right thank you Kelsey um I'm going to now talk about a
[43:22] tool called climate engine which is a very powerful tool that has been been developed at the Western Regional
[43:28] climate Center and desert Research Institute um funded by nidus and others um that we are now using operationally
[43:36] to make drought indices and um allow additional insights into the information um in a cloud-based platform so climate
[43:49] engine uh really empowers users of all technical proficiencies to harness the power of cloud computing to look at
[43:58] massive time scales and stacks of information of Earth observation data it's built on top of the Google Earth
[44:05] engine platform and benefits by having access to a lake of data in the earth engine uh data catalog which is
[44:16] maintained by Google and other Federal partners that include data sets far beyond Noah's data sets and the idea is
[44:24] that you put an algorithm and write it into the cloud and then you can operate that algorithm on any of the data sets
[44:30] that are there very efficiently minimizing the amount of management of files and um moving moving data around
[44:40] downloading data um and and all the pain that comes from just that data management side of things so the way that draft. of is
[44:50] utilizing climate engine is um there's an API side of the tool we I'm going to give a demo of the tool which is um open
[44:59] for for folks to uh use and and explore data sets there's also an API and that is what we are using in drought thatg to
[45:10] uh produce high resolution daily grided data sets um from a variety of um data sets from Noah and Beyond to to create
[45:22] drought indices and other products um the add a scale of which we could never do before with our on premises equipment
[45:31] um and would take a lot of engineering to do the same with custom cloud-based development so again this tool is
[45:38] developed by the Western Regional climate Center and the desert Research Institute and it's been around for 10
[45:44] years uh launched for researchers in 2014 there's a commercial launch in 2020 um there is a group that has off done an
[45:54] offshoot of this to provide commercial support support um based on some of the the original work in this and the um climate engine
[46:05] there's an application and a user interface and then again also an API for doing various types of statistics and
[46:13] insights into data sets uh including for us some important metrics that allow us to create common drought indices at
[46:21] various time scales at Daily resolutions across multi multiple data sets to look at how um drought is progressing in the
[46:33] US and across the world so with that I'm going to stop and go into a demo so looking at the website here
[46:45] climate engine. Org the at the top there are links to the API to different um reports that are
[46:54] generated from this tool support um site as well which I will go through and highlight that but I'm going to start by
[47:01] just looking at the app and here we get an idea of what this tool can do so there are guided tours video tours
[47:14] there's a lot of um information about and tutorials on how to use this site and I'm just going to touch on a few of
[47:23] the features here particularly some of the ones that we're using drought but this tool is not a drought specific tool
[47:31] and can be used for lots of different analyses very powerful um types of applications including um looking at uh long-term
[47:44] anomalies Trends we can look at se- surface temperature we can look at vegetation and ndvi changes across
[47:52] satellites um there's a wealth of different data sets here that we'll see they have a a a a tool or a spreadsheet
[48:01] where you can go in and get more information about all of the data set sort of acronyms and codes here uh but
[48:07] there is a wealth of different data sets including some that are very difficult to deal with outside of the cloud like
[48:13] the Sentinel data um that's that's a unique thing that is very difficult to work with um for large scale analysis so
[48:22] I'm going to go in here and just give a quick example using um a data set called
[48:28] called grid metet here if we want to do a precipitation accumulation here we select our data set our variable there
[48:35] are a number of different um uh metrics variables and metrics available to us and if we want to just
[48:43] do a quick um accumulation of the last 90 days of data we can do that very easily
[48:54] here so let's say that we want wanted to also compare this 90day period to see well how unusual is this um here I'm
[49:05] going to turn on some some layers for for US states if we wanted to see well how does this compare to the same
[49:14] 90day period across the last 30 years we could um we could do that here by looking at this
[49:22] calculation and I mean first off we could calculate the average conditions um for the same period over the last 30
[49:32] years um or any custom time period but we can also do a a percent of average conditions which is a a common metric
[49:41] that we use to look at where things are abnormal and so you can customize your year range here that you want to use to
[49:48] compare it to I'm going to use a standard um range of 91 to 2020 which matches the current normals period from
[49:57] Noah uh that are used for our climate normals that you hear um you know the A on the news for the average temperature
[50:07] that sort of thing so here's an example uh showing how the last 90 days have we've compared
[50:13] it now to the previous uh 30 years of information and stend the computations on the cloud uh very quickly to do that
[50:23] analysis now the power here is that we have we do the same thing not just to one data set but let's say we wanted to
[50:30] do the same thing with um uh global data set so we can look at here um era five
[50:39] as well so if we wanted to get the precipitation totals for the last 90 days we can do that globally there are
[50:48] tools here to um adjust our layers that we're showing so if we want to show show um country borders we can do that
[51:00] here as well and then we can do the same analyses here uh where we are doing a
[51:10] percent of the average conditions for the last 90 days and this may take a bit longer for this data set um there there
[51:25] are some data sets where we have some caching in place where it goes very very quickly so we'll see um this the speed
[51:32] of which this comes back um so while this is working we can this is actually great a data set that takes
[51:41] a little longer because it gets you an idea of what's actually happening each one of the tiles that's coming back uh
[51:47] inside of Google Earth engine each one of these tiles is being produced in parallel and so the the way that it ends
[51:55] up on our on our map the map shows the data by tiles and the tiles can be
[52:00] calculated in parallel on the cloud in the earth engine program to to process and return that information at Great
[52:10] scale so it has taken the last 90 days of data and then compared it accumulated that across 90 days then dynamically
[52:18] also accumulated the 90 days of data for the last 30 years from 91 to 2020 and then compared all of those together get
[52:26] the average all in real time here um as we have made the request we can zoom in on the map and it will
[52:37] update the data um and reprocess at higher resolutions if it's needed to one of the tricks that Earth engine can do
[52:46] and and climate engine in turn um is that for data that is where you're zoomed way out and it's you can use
[52:54] lower resolution sort of overviews to process things faster and as you zoom in it will just for the areas that you're
[53:00] interested in reprocess stuff um at the higher higher resolution resolution so um it looks like it's starting to
[53:10] come in here at this higher resolution and this is a pretty hefty calculation um because we're comparing
[53:17] to a 30-year period dynamically um this is something that would usually take hours of effort to C customiz code and
[53:27] then run you know on on premises especially if you account having to download all the files you need and
[53:33] manage manage those files and get everything kind of uh organized so um once you have this you can uh
[53:46] download an area if you want just a a region here we can say that we just want
[53:52] to to download um you know some some area that we're interested in and we can download that um information
[54:07] well we can save a PDF but we can also save it as a map image as a PDF we can
[54:13] also save this as a geotiff right here so right now it's going in and if I click
[54:23] here it will give me a geotiff to um to download that's a result of what I'm looking at on the
[54:31] map so um if you've used Earth engine before Earth engine here's my geotiff download and include some I think metadata with the
[54:41] zip zip file if we've used Earth engine before Google's product um it requires it's very very flexible and very powerful but
[54:50] it doesn't include a user interface like this so what climate engine has done is created the algorithm temp plates for
[54:58] various common climate applications and then put this user interface around it so that you can adjust the parameters
[55:05] and not have to write script and custom code um and that way things can be more efficient because they are using
[55:13] optimized algorithms that have all of their knowledge for Earth engine bundled into that so that um things can run as
[55:21] fast as possible and um and allow you to do easily do apples to apples comparisons across different data
[55:30] sets so I'll show another example here of if we wanted to take um uh do a uh time series we can also do that so
[55:44] we we can uh extract out um for a point or a uh or a region so if we wanted it can do zonal
[55:58] statistics or area averages so if we want to just look at a particular country and do do that um average for a whole country or
[56:09] for a US state uh we can easily do that here so if we go US regions and we can
[56:14] go State and we can go um let's say Alabama and we want to look at what the
[56:24] uh precipitation is for the last 90 days from the era five data set we can do that zonal or not that
[56:34] yeah that zonal statistic that area average right here um for that if we wanted to do um compare to different
[56:45] data sets we can go in here and we can let's say we want to compare uh grid
[56:49] metet to eror five um we can easily do that as well and so we'll say last 90
[56:55] days for for grid matat and we'll hit all right and so we can see see how things um compare in terms
[57:12] of the the for the whole state of Alabama uh we can also do a single point as well and this becomes very powerful
[57:20] for being able to do comparison across data sets and be able to to you know there's multiple data sets and different
[57:27] methodologies for having grided temperature and precipitation data and being able to to see some of those differences are really important um
[57:37] other things that we can do here if we're making a map um there are um specific to Drought some very important
[57:45] drought indices which we can calculate right here from the um dynamically so let's say that we want to do a global SP
[57:57] guy using the error 5 data set it can dynamically generate these drought indices using five data set you can
[58:08] control metrics like the distribution parameters which type you want to use just going to hit cancel it'll keep
[58:15] doing that in the background we can use Gamma or log logistic as well um and we can do this
[58:24] across many different data sets and this is this is important in that um again being able to see an Apples to
[58:34] Apples comparison using the same distribution parameters across different input data sets that have different methodologies for interpolating the data in areas
[58:45] where you don't have gauges or maybe they use satellite information model reanalysis as well now we can do the
[58:52] same same thing for uh different data sets so this is for the um CPC unified Noah CPC unified
[59:03] daily global data set it's dynamically doing this drought index on the cloud with all this parallel processing by tile which is
[59:14] again very powerful we used to run one of these on premises uh to generate this from a satellite data set that would
[59:22] take eight hours every day to run so that we could update with the next day's information um now that same process to
[59:30] run this takes um mere minutes to do that we are using for Drought goov um we are using the the API side of this and
[59:44] I'll show that in just a second the last thing I really want to hit on this is
[59:48] important in terms of making products but the real gist of climate engine is that it it helps you find answers and not have
[59:57] to deal with files I have not selected a file in this operation I have worked with at the abstract level of data sets
[1:00:07] and algorithms and metrics and time periods I have not had to manage files unar files discover files download files
[1:00:16] from catalogs that's very important um to there are times when that's needed but but one of the powers of this tool
[1:00:24] is not having to deal with that and focusing on finding an answer from what you're looking for um that could be
[1:00:31] let's say that we want to look at um all the areas that had U maximum temperature from in the
[1:00:41] world look at maximum temperature so this is the mean maximum temperature over let's say last 15 days you could pick any time
[1:00:54] period um but let's say that we wanted to uh look at where the maximum temperature was over 100
[1:01:06] degrees on any of the on any of the days over the last 15 days so if we wanted to we can use
[1:01:15] masking here and just show values above a minimum so if we're looking at at 100 degrees these are all the areas where the
[1:01:29] maximum daily temperature has been 100 degrees or greater in the last 15 days and if we wanted to extend that out
[1:01:39] to a longer period it's as simple as as um selecting it here if we wanted to be
[1:01:47] really wild and do like a whole year let's see how how long that takes oh it appears I need to reset my mask
[1:02:00] when that changes show above them in of 100 so these are all the areas that had at least one day that was over 100
[1:02:11] degrees Fahrenheit in the last you know year plus three weeks or two weeks I can pause that there so this is
[1:02:25] the this is really the point is that now we're into looking at insights and getting answers um to questions that
[1:02:34] that we have uh and that's what we're also really focused on in the new features that are coming about in
[1:02:39] climate engine one last thing I'll show related to Drought let's say we wanted to look at the North American drought
[1:02:45] monitor which is a monthly drought monitor that combines the Canadian Mexican and US drought monitor efforts and we want to look at um
[1:02:57] here let's say we want to process all 20 20 years of it actually let me make sure probably don't uh let me just say
[1:03:07] entire period of record of that data set so we're going to take the entire period of record of data set and look at the
[1:03:12] maximum drought classification value so right now it's going through 22 years of data and um this is the maximum drought category
[1:03:25] that's ever existed in the last 22 years of the North American drought monitor um so if you wanted to ever answer the
[1:03:33] question of how bad has the drought ever been in in Maine or in Alaska or in Mexico in the Yucatan you can get that
[1:03:44] answer in mere seconds using um using this tool so on drought de of we are using this to
[1:03:54] generate generate this tool we have a instance of the API for this tool running within a Noah
[1:04:01] security boundary um on a NOA Google Cloud contract and we are using this every night to generate these drought
[1:04:09] indices uh and these data sets anomaly data sets in Cloud optimized geotiff format that you can just click and
[1:04:17] download a geotiff uh for for these different data sets and this would be the foundation of future
[1:04:26] future uh drought indicator availability production availability on drought. goov and that we can share in our and using our tools
[1:04:35] uh including like NASA GPM uh imerge data the seamor satellite data set from Noah the era five uh Global reanalysis
[1:04:44] from from ecmwf uh and these a variety of different us Global uh us grided precipitation data sets which all have
[1:04:56] slightly different methodologies for how they interpolate data between gauges and being able to compare these and have that Apples to
[1:05:05] Apples comparison of all always using the same algorithm and same climatology based period to compare it to is very
[1:05:12] powerful um so with that um the last thing I'll hit on the very last thing I'll hit on is on the climate engine.
[1:05:20] org site there is a link to the API documentation the team is is happy to work with folks to generate um to give
[1:05:29] API keys for testing and using this um the the uh there is support here under the support link for how to use the API how
[1:05:41] to use the research app which I just showed the the web application information about data sets and so on
[1:05:49] and uh this includes a lot of information on the API including a lot of great examples on how to use Python
[1:05:59] scripts with the API how to uh example python uh notebooks that are right in Google Cod laab that you can run and so
[1:06:09] really excited about what this team has done in doing this um we are using the climate engine tool um for for drought.
[1:06:19] goov we're also using it for an industry Proving Ground project at ncei that will include a lot of different spatial
[1:06:26] analysis and generating data sets that look at um things like um number of occurrences below and above a threshold
[1:06:36] uh comparing to population data land cover data agricultural data uh and so on all using Earth engine and we're
[1:06:43] really excited about what this tool can provide us and and give us rapid rapid Proto rapid production of the answers
[1:06:51] that we're looking for and a pathway for us to do this in operations in Noah so with that I will I will stop but
[1:06:59] thank you so much I think I will hand it back to Kelsey to wrap us up here thank you Steve uh you can see a
[1:07:11] brief summary slide here um but I just want to say thank you all for letting us share this information with you um we'll
[1:07:18] be happy to answer any questions that you have later but in the meantime I want to hand it off to Brad Pew for the
[1:07:23] next presentation thanks Kelsey and Steve um I'm a brad pew at Noah's climate Prediction Center I'm a meteorologist at the climate
[1:07:38] Prediction Center and also one of the US drought monitor authors so very excited today to either introduce you to the US drought monitor
[1:07:50] or provide more details on the US drought monitor and before starting the presentation I would also like to thank uh Brian fuks
[1:08:00] and Mark sabota at the national drought mitigation mitigation Center as I did use a few of their
[1:08:07] slides in this presentation today all right here's a outline of today's uh presentation I'll start off with a history of the US drought
[1:08:22] monitor go over the indicators and methodology how we create the usdm map U each each week I was a US drought monitor author
[1:08:37] just just um several weeks ago U early June so I'll go over a realtime authoring example and then conclude with a
[1:08:49] historical time series perspective and um also show a us drought monitor map from the end of June all right so uh yeah how how did
[1:09:06] the US drought monitor begin so uh going back 25 years ago so actually coming up on the 25th
[1:09:14] anniversary anniversary now uh the summer of 1999 we had a major drought over the Eastern us so that was
[1:09:23] gaining lots of attention there were request request uh for many people um wanting to know like what what the drought picture how
[1:09:32] it was changing uh from week to week across the East but there's also interest in a national us drought
[1:09:40] monitor monitor product so this was a experimental us drought monitor map from July 7th of that that summer you see it's a pretty um coarse
[1:09:54] resolution uh just highlighting areas with uh ongoing drought and also this was based on a single indicator the
[1:10:02] palmare drought indic indicator index uh just a a few weeks later it was revised somewhat and was uh given at a
[1:10:18] secretarial White House briefing and uh it was liked so much uh from the government officials that just
[1:10:27] the following week it became operational so uh as of August 18th 1999 we had our first official US drought
[1:10:38] Monitor and this may have been the fastest experimental to operational product in government history um this this moved along really fast that summer
[1:10:47] uh doing part to the um you know major drought episode across the eastern US and initially we only had um two dozen
[1:11:00] experts that contributed to the um us drought drought monitor but that has really grown over the past 25
[1:11:12] years so so as I mentioned previously um kind of the initial us drought monitor map it was based um primarily on uh the
[1:11:23] Palmer drought index it's been a um a drought indicator that's been around um going back many decades to the mid 20th
[1:11:35] century um over time though that uh single indicator or index has been um supplemented with um many more objective
[1:11:47] physical indicators and indices and also we incorporated more uh subjective local expertise and impacts so the drought monitor uh uses
[1:12:07] uh various categories and those are on the right hand side there and these are based on percentiles
[1:12:15] so you can see um d0o abnormal dryness is uh between the 21st and 30th percentile and then as you move into
[1:12:28] worsening drought categories moderate to severe you go below the 20th percentile 10th percentile respectively and then down into the um
[1:12:40] tail end of the distribution where you have extreme drought below the fifth percentile and then exceptional drought down at the very very tail end
[1:12:50] of the um distribution so why use uh percentiles um it provides a picture of expected occurrences in a given time
[1:13:05] period all the indicators can be put into these percentiles to compare current data with historical records and the period of record is H
[1:13:16] very very important we do have some um more new um drought indicators that that we do look
[1:13:24] at um but but some of that data is only goes goes back you know 20 to 30
[1:13:29] years um but it's important to look at some of the um indicators that go all the way back you know well into the um
[1:13:38] back into the early to mid 20 20th century so we can capture some of the major drought episodes such as the Dust
[1:13:45] Bowl in the 1930s the 1950s was also a major um drought period there over the Great Plains and corn belts so yeah period of
[1:13:56] Records very important so we get that um accurate historical perspective uh advantages of using percentiles um they can be applied to
[1:14:08] any parameter used in the drought analysis can be applied to all indicators regardless of length of data
[1:14:18] record so you even if you have a shorter period of record you can still use this percentile um me
[1:14:25] method but once again um longer period record does help put things into um a historical perspective so uh very important to note
[1:14:41] that the um us drought monitor is an attempt to represent all of these different types of droughts on one
[1:14:50] single single map and those uh different drought droughts include meteorological which is more just you know know precipitation and temperature but then
[1:15:03] you go through agriculture drought which U you know considers soil moisture crop stress hydrological such as Reservoir levels
[1:15:16] socioeconomic and even uh ecological drought where multi-year drought can take um its toll on the um ecosystem and slide nine here this is
[1:15:33] actually one of my favorite um slides in this presentation I think it really illustrates well the multiple types of
[1:15:40] data and time scales that go into making the US drought monitor each week so not only do you have a
[1:15:50] precipitation which you know most people think of when they they think of a drought but um you also have a soil
[1:15:57] moisture and groundwater uh Stream flow vegetative Health Lake and Reservoir levels of Appo transpiration and snow pack so you have all these multiple
[1:16:14] types of data but we're not only looking at the you know the past week or past month but
[1:16:20] going back even on the seasonal time scale annual or even multiannual we've had over the western United States
[1:16:30] in the past two decades um yeah quite a few multi-year type drought episodes all right so yeah just a little
[1:16:45] um background here on the US drought monitor so since it's uh Inception in 1999 1999 the number of authors has remained very
[1:16:57] steady from year to year the authors have changed over time but yeah the numbers have been um very
[1:17:04] steady which which is a good thing um and it's varied between 10 to 12 each year and I think one of the strengths of
[1:17:14] the US drought monitor is the authors are coming from multiple agencies um you have have Noah uh climate Addiction Center where I
[1:17:25] work also the national Center for environmental environmental information the national drought mitigation Center uh the US Department
[1:17:34] of of Agriculture and the western region uh climate climate Center so those are the author that's where the authors come from that uh
[1:17:46] produce the weekly composite drought map but we also gather input from numerous Federal feral and non-federal partners and I started off the
[1:17:59] presentation that you know at the beginning 25 years ago we only had 24 experts weighing in on the um drought
[1:18:08] Monitor and that's grown to several hundred and now total four over 400 experts with their knowledge base and
[1:18:17] you know expertise over many years the US trout monitors released um every Thursday morning and the period um that it's
[1:18:30] valid for is uh the eight8 o'clock um the previous Tuesday to8 o'clock of that week so it's a yeah 7day valid
[1:18:44] period uh went through the five drought categories um before you know abnormal dryness which is not drought that's
[1:18:54] either going into or coming out of drought and then you have the drought categories from moderate up to extreme
[1:19:01] and exceptional and on the bottom of the slide you can see how the um drought map has changed over the years you know back
[1:19:13] 1999 in the early 2000s very coarse resolution resolution but you can see how the resolution has um
[1:19:24] um Inc uh increased uh improved over over the past couple of decades so the drought monitor is a
[1:19:38] consolidation of current conditions and impacts into one comprehensive uh National drought map so it's a you know snapshot in time for
[1:19:50] that week um of the drought pick uh the drought monitor is not a model so it's um you it's human input a humans
[1:20:02] drawing this we're receiving a human input input from various uh experts um and it's also um it's drawn off the starting point is
[1:20:15] the previous week's uh map it's not just interpreting precipitation um as I just mentioned previously includes a number of
[1:20:27] indicators it's uh not a forecast uh we do though have a drought Outlook which uh the climate Prediction Center issues
[1:20:37] on a monthly and seasonal time scale and more recently we've included a rapid onset drought Hazard um on our
[1:20:48] week two hazards map uh it incorporates local experts input uh by various sources email impact reports and social
[1:21:02] media it identifies impacts um both on the shortterm time scale Which is less than six months and then longer term
[1:21:14] time scale which goes you know beyond the six-month time scale and there's some instances where drought can be both
[1:21:22] shortterm and long-term and it's our goal each week to be as objective as possible we use that percentile
[1:21:34] methodology and the physical data and indicators must support the map depiction and the impacts help to supplement or you know validate the
[1:21:45] physical data so how do we determine where certain areas are um you know drought wise which category and the our methodology here is
[1:22:04] a convergence of evidence approach we have many types of drought information you know each week to go
[1:22:12] through so it's uh it's our job as authors to determine where the majority of that data is converging you know is
[1:22:20] it telling the same story um are most of the indicators showing D1 um there may be one or two they're showing
[1:22:30] like D3 or D4 but where are the where's the convergence of evidence what what's the most uh accurate U depiction there
[1:22:39] in the map and authors do need to consider you know 100% of the data but you can't uh
[1:22:49] determine a drought category on only one piece of data so very important to consider multiple indicators and these data will identify
[1:23:02] different climatic and hydrologic parameters which are needed to understand the complete picture of a drought indicator's performance and how
[1:23:11] they interact and uh it's important to remember you know impacts are the ground truth yet AR aren't monitored the extent
[1:23:22] which um other data are so you can't measure what you don't monitor so the next slide here is the US
[1:23:38] drought monitor map um back on June 25th and we went over the drought categories and percentiles before but
[1:23:51] this this map does provide a good example example of the impacts um so for example over most of
[1:24:01] the southwestern us Arizona New Mexico you can see that see that drought is mostly or it is um you know long-term
[1:24:11] drought where the drought over the eastern US that is short-term drought you in in June and we had a very
[1:24:19] very dry hot month and so that's led to Rapid onset and intensification of drought conditions over the East but
[1:24:27] that's only short-term drought there's no longer term drought signal as of yet and then there's H areas of the
[1:24:36] country that are experiencing both short and long-term drought and that includes the um Central and Southern Plains also
[1:24:44] parts of the Pacific Northwest uh outside of the contiguous uh United States we also the drought monitor also includes Alaska
[1:24:58] Hawaii and Puerto Rico and the next slide here um gives some of the indicators that we um look
[1:25:13] at each week at the top there um the Palmer drought severity index the uh soil moisture model
[1:25:25] uh weekly Stream flow standardized precipitation precipitation index and these are all um in percentiles and to go along with the
[1:25:44] categories so I'd say would say most of the uh information analyzed each week falls into um these six Cate at
[1:25:55] ories including precipitation and snow uh indices such as SPI pdsi soil moisture Stream flow and reservoirs there are satellite remote
[1:26:10] sensing sensing products and also the um important expert local input and impacts so in the upper leftand corner
[1:26:25] there those are kind of the um the key drought drought indicators um that we uh rely upon each
[1:26:34] week and that's the uh SPI standardized precipitation index uh modeled soil moisture uh stream flows uh precipitation
[1:26:49] precipitation anomalies uh as we go into the growing season during the um spring and summer uh some of the satellite
[1:26:58] vegetative Health Products become a little bit more important um little bit more of a factor um also uh some of the
[1:27:11] additional soil moisture products as well and across the West uh snow pack is much more important than say the
[1:27:20] obviously like the Southeastern us so yeah the snowfall during the um you know late fall through the winter and
[1:27:28] spring months is uh very important drought indicator so our goal each week uh is to make the um drought monitor as uh
[1:27:46] objective as um as we can so we do look at these um short and long-term obje Ive drought
[1:27:57] Blends and one of the values of looking at these drought Blends is to designate areas of short and long-term
[1:28:09] drought so uh for instance over the kind of the southwestern us you can see the the shortterm indicators are actually
[1:28:16] showing neutral to wet conditions there where if you look at the long-term drought blends showing a little bit more
[1:28:25] of a long-term drought signal over California and the Southwest so that would help determine which impact to
[1:28:33] designate a specific drought area and just a kind of quick timeline of how the the process works uh each
[1:28:45] week we produce a draft map on Monday afternoon receive uh feedback both on Monday and Tuesday and then a second
[1:28:56] draft uh goes out by the end of Tuesday and another iteration another draft or two before the
[1:29:06] final uh map is made by close the business on Wednesday so yeah very um very heavy workload those three days of the week
[1:29:16] Monday Tuesday and Wednesday to wrap up the US drought Monitor and then on Thursday morning each week the the final map is um
[1:29:26] released to the web so uh yeah very important um part of the process is that uh local expert
[1:29:42] feedback uh from the field um and the big contribution is kind of giving us a ground truth
[1:29:54] verification you know what are the impacts um see how the uh physical indicators are lining up with those uh
[1:30:04] impacts and these uh local experts that we hear from um each week there's a lot of trust both you know between the
[1:30:12] authors and the local experts and from the local experts up to us and that's come about over interacting with them over years um
[1:30:25] you know hearing their feedback uh but also we have a um a US drought monitor Forum each year so I
[1:30:32] think that's been very helpful to um you know know communication and with that uh that trust over time uh we also as authors do
[1:30:43] various uh webinars um also nidus is very helpful in that that way with the communication um there's Regional climate
[1:30:56] centers uh the local experts come from uh various uh sources uh State climatologist the USDA Native American
[1:31:06] tribal tribal input uh ntis and various uh drought task forces among many states so this uh next slide here you
[1:31:24] kind of a breakdown by state of how many uh subscribers are on our email list serve so we have about dozen states with
[1:31:35] at least 11 participants participants um uh many states have at least six participants and and nearly all the
[1:31:46] states have at least one participant and you can see the pie chart on the right right hand side there
[1:31:56] um a slight majority 55% um of the subscribers are uh associated with Noah uh but more than a quarter um
[1:32:09] universities universities um and also state government is also a pretty big um source of the subscribers so uh more recently I guess it's going
[1:32:27] back several years but um yeah National drought mitigation Center has done a really good job of uh having a area on the web here where
[1:32:38] the public can uh provide their own drought impact reports and also provide kind of what the impact is whether it's
[1:32:46] a related uh Wildlife U water supply and also what what they deem is um what kind of drought level what what
[1:32:57] intensity they're they're seeing all right so um yeah I did want to provide just a a couple of quick
[1:33:10] examples of authoring when I had the US drought monitor back at the beginning of June June um yeah first example is the
[1:33:22] introduction abnormal dryness and also expansion of that abnormal dryness d0o across parts of the Mid Atlantic and we do use uh argis to um
[1:33:39] you know for drafting of these Maps so at the time uh if you go back to the beginning of June we're we're
[1:33:46] starting to see um conditions really begin to to dry out especially over Southern New Jersey parts of
[1:33:57] Delaware uh Southern Maryland and I did expand the d0o and that was based on 60-day SPI the standardized
[1:34:07] precipitation index um and I do have that labeled so you can see how starting to see some D1 even D2
[1:34:16] levels in the 60-day SPI uh but also considered us soil moisture uh on the leth hand side this
[1:34:27] is NASA sport soil moisture so you can see that dry Signal Beginning to pop up there in the
[1:34:35] Mid-Atlantic but also 28 day average stream flows are beginning to drop down in into um below the
[1:34:45] UHS below the 30th percentile here over New Jersey so we had multiple indicators beginning to show that at least a d0o
[1:34:59] signal conversely we did have a one category Improvement to Drought conditions over parts of Texas and that was due to a heavy
[1:35:11] rainfall over the preceding week so what I have uh shown here is in the shading is is um uh 7day precipitation amount amounts
[1:35:22] um yeah anywhere you see the the green shading that's more than one and a half inches of rainfall the previous week and
[1:35:30] some areas picked up as much as two to three three inches and the outline here you see is
[1:35:36] the outline of um of a D2 to a D1 uh drought so um yeah given the that heavy rainfall
[1:35:50] that that part of Texas received the previous week and also the consideration of uh various drought indicators one category
[1:36:00] Improvement was warranted for for that part of Texas so I wanted to uh include a historical time series of the US drought
[1:36:16] monitor this is a very helpful graphic um uh at the national drought mitigation Center showing how drought has uh
[1:36:27] evolved over the past 20 plus uh years so you can see um you there's some some years that were U had quite severe to
[1:36:38] extreme drought back uh 2002 2003 uh 2007 2008 um 2011 through 12 2012 2013 that was a
[1:36:54] major drought that affected the Great Plains and cornbelt and then more recently we had three consecutive linas which uh ramped up drought
[1:37:06] conditions over much of the country um you know 2021 through 2023 uh I will point out there was a low
[1:37:19] pointed drought um just five years ago in the spring of 20 2019 where drought coverage was less than
[1:37:27] 10% so there are some times where the drought does drop off um and becomes very low and over the past six months we did
[1:37:38] see um drought decrease over much of the country due to um El Nino conditions this past winter uh just real quick want to go
[1:37:53] back back to the summer of 2022 when we had the rapid onset and intensification of drought conditions over parts of the South
[1:38:07] Central us specifically Oklahoma Arkansas Arkansas Missouri we during a just a four-week times time period from early July to the
[1:38:18] beginning of August we had a um uh two to three class degradation and drought conditions in that four-week
[1:38:29] time span so you can see um if you go back to July 5th some areas of Oklahoma
[1:38:37] and Arkansas actually were we free of any type of dryness at all so not even d0o go forward four weeks by the
[1:38:48] beginning of August those areas had worsened into D2 and D3 so just in a four-week time span you can see that
[1:38:57] rapid um onset intensification of drought and the reason I wanted to show this is kind of give you an example of
[1:39:05] um how much the drought monitor has improved over the past um several years but especially the past decade in
[1:39:12] capturing capturing these uh flash drought episodes now on the guess the good news part um as far as drought goes um this
[1:39:26] past winter we did have major improvements over the Southern Tier of the United States um this was very well
[1:39:35] forecast um very typical of El Nino you have uh weet conditions over sou the southern TI of the
[1:39:43] country so going into um this past winter we had uh severe to extreme drought over the uh Lower Mississippi
[1:39:54] Valley southeastern United States and during that uh 12-week period through the winter uh many areas had um at least a
[1:40:06] two class Improvement some areas as much as a three to four class Improvement so uh if you go from U early
[1:40:15] December to early March you can see how that the drought really uh improved over the Southern Tier of the country most
[1:40:22] are became drought free by the beginning of March and there was even some improvement over the central to Southern
[1:40:32] Plains and Southwestern us so yeah good example of here of how uh El Nino improved drought conditions across uh
[1:40:43] the United States and this is uh the drought picture as of June 25th talked about this earlier the um short-term
[1:40:59] drought developing over the eastern US during June we've had a one to two class degradation and drought
[1:41:11] conditions um so going into July this was um really the major drought concern was over parts of of the Eastern us but
[1:41:22] still have um short to long-term drought as well over parts of the Great Plains and Western us this concludes my presentation thank
[1:41:35] you for your attention and I will now pass it off to the next presenter Compton Tucker thank you Brad um I'm Compton
[1:41:48] Tucker from The Goddard space flight center and I'll be showing some examples examples of food security and drought
[1:41:55] mapping from satellites so let's get into into it this is a graphic example of drought where you see it's been so dry that a
[1:42:07] reservoir has dried up and if you were to try and use a boat this is your situation you would be unable to do
[1:42:17] so now there is a a great source of information on world agricultural crop production which is provided monthly by the US Department of
[1:42:31] agric of cultures foreign agricultural service this is one issue from March it comes out every month usually around the
[1:42:41] the 10th of the month or before and this has examples of the current situation with many crops
[1:42:50] globally and this information in report is also used to set the commodity prices at the Chicago Board of Trade this is
[1:43:00] one example the first slide focuses on the variability and Trend in Brazil soybean yield and you see that it runs
[1:43:09] through through 2024 starting in 2014 and you see the upward Trend because of increasing agricultural productivity with respect
[1:43:20] to time and so this is one example from the March 2024 World agricultural production document these documents are usually 30 40 50 pages
[1:43:35] uh now in these World agricultural production uh monthly reports they have a lot of examples that are based on NASA satellite
[1:43:48] data this is an example of what I'll be talking about now if you you look in the
[1:43:53] upper right hand corner uh of the body of the graph you see an insert entitled Zambia so the highlighted blue area is
[1:44:06] the the agricultural reporting district from which this ndvi image with respect to time comes from now there's a lot of
[1:44:16] information that's very useful in this image that the upper Gray Zone is the maximum in DVI data from 2001 to
[1:44:30] 2021 and the lower value is the minimum in DVI value from 20 from 2001 to 2021 so that
[1:44:41] 22-year period and then the dark black line is the median and the red line is the plot for the current year of the
[1:44:54] crop year 2023 and 2024 because we are in the Southern Hemisphere and you'll see these data come from early July they're very
[1:45:03] current we produce data for the foreign agricultural service um at 8 day intervals and these are incorporated
[1:45:12] into these reports from the foreign agricultural service so you see that the red plot falls in the bottom part of the
[1:45:23] historical record and this is indicative of an agricultural drought and so the foreign agricultural service will will
[1:45:31] update figures like this as they get closer to the end of the groin season which will occur in August or
[1:45:41] September now in our work we use the normalized difference vegetation index but we also use solar induced
[1:45:52] fluorescent fluorescent and solar induced fluoresence is a byproduct of the photosynthetic process where uh energy used in photosynthesis
[1:46:07] escapes from the photosynthetic system in the form of of emitted energy and this is a very useful tool because this
[1:46:16] is directly linked to photosynthesis now this is a flux meaning it is emitted energy and so you
[1:46:26] measure it as a flux but one of the features of solar induced fluorescence is you have to
[1:46:33] measure it within fronhofer lines which are areas in the electromagnetic spectrum of the downwelling solar flux from the Sun where in the Photosphere of
[1:46:45] the sun certain wavelength regions are absorbed by elements in the Photosphere and these uh absorption areas are usually one or
[1:46:57] two or three angstroms wide so they're very narrow so in order to measure solar induced fluorescent you have to make
[1:47:06] measurements in these very very small wavelength regions of the downwelling solar flux and this means it's very
[1:47:15] difficult to get down to the very fine spatial resolutions with solar induced fluorescence because it requires a long
[1:47:24] integration time now from a polar orbiting satellite where you're moving at 7 kilometers per second the only
[1:47:32] solution is to measure areas which can be quite large on the order right now of perhaps thousands of meters however a
[1:47:43] instrument and a geostationary orbit would be able to get down probably to measurements on the order of a few
[1:47:51] hundred meters and so again solar induced fluorescence is a flux and I will now compare solar induced
[1:48:01] fluorescence to what we can measure from numerous satellites in terms of vegetation indices this is a comparison which I
[1:48:14] have made between solar induced fluoresence from the gome 2 satellite data of Joanna Joiner and and and yasco
[1:48:24] yashida of NASA G and I've compared them to modus ndvi data like we use in our product or in our system which we uh Run
[1:48:37] for the foreign agricultural service and I've simply taken the time integral of these two measurements and you see
[1:48:45] there's a very high correlation in a linear way so what this shows is you're comparing a potential
[1:48:53] in terms of a vegetation index to a flux from solar induced fluorescent and they are very highly and linearly correlated
[1:49:03] so this means that when you're using vegetation indices what you are estimating is a is a potential which is
[1:49:13] directly and linearly related to solar induced fluoresence and the value of doing this uh or one of the consequences
[1:49:22] of doing this with vegetation indices as you can get down to finer and finer spatial resolutions on the order of four or five
[1:49:30] meters from planet data or 10 meters by 10 meters from Sentinel 2 or 30 MERS from lat and here I'm using 250 meter
[1:49:43] data from both modus instruments this is a plot of showing for 31 sites how we have compared the
[1:49:58] integrated gome 2 solar induced fluorescence a flux from from photosynthesizing Plants uh and and we then compare this to the time integral
[1:50:11] of modus and DVI data and you'll see once again we we have this High linear correlation between them and this is why
[1:50:21] we can use the vegetation indices uh because we now know they are directly related to primary production
[1:50:32] and primary production is what happens in agricultural Fields it's what determines yield and we can also detect
[1:50:41] when vegetation indices are affected by drought conditions gross primary production will be reduced now here is an interesting
[1:50:53] figure from April of 2024 in the area of Morocco Algeria and Tunisia in the mreb region of northwest
[1:51:06] Africa and in the red areas are where you have a very severe drought in the yellow areas you have potential drought
[1:51:13] and only in the green areas do you not have a drought so this is formed from ndvi data from modus and the modus
[1:51:24] instruments are phenomenal and uh unfortunately they're both uh about to be decommissioned and replaced by data from the ver satellites which are also
[1:51:36] very very good for measuring photosynthetic conditions now let's look in particular at one area in Algeria and one area in
[1:51:48] Morocco we'll look at Morocco first which is in indicated in the top of these two figures you see the blue area
[1:51:57] so the Blue Area shows this crop groin area in Morocco in the Southern and Central groin area and you see again the ndvi
[1:52:09] profile of the maximum value and the minimum value in the gray Zone and then within that you see the median
[1:52:19] value and you also see in the red area area the 2023 2024 area and so this is a good example
[1:52:30] of a drought because all the values are on the lower part of the scale in the lower figure is from Aleria
[1:52:38] and you see something similar so this shows in detail what was observed in the previous figure with respect to crop
[1:52:47] growing regions by crop growing regions now one of the things the foreign agricultural service does is they have
[1:52:57] field visits where they go out they're called crop tours and they go out and so here they
[1:53:05] were in April uh on April 17th and 18th in in Morocco and you see the conditions are
[1:53:16] not good because of drought so this is confirmation of what we've been measuring with satellites now here is another example from Zambia
[1:53:30] and unfortunately there is a drought in southern Africa and if you look on the on the left hand side you see the areas
[1:53:37] of Zambia in red which are affected by drought a percent of average seasonal greenness or photosynthetic capacity
[1:53:46] from the monus instruments and on the right hand side you see the same very useful plot of the envelope of the maximum and the
[1:53:56] minimum modus values for a 22-year record with the average and then in red it shows data from
[1:54:06] 2024 and you see it's on the very low side so this is unequivocal evidence of agricultural drought and a very severe
[1:54:18] drought this is a summary slide from Zambia for corn and you here we're summing data from from
[1:54:28] from 2010 and 2011 on on the right hand side figure for the area which you see in green all
[1:54:36] the crop growing areas uh for Zambia and then it goes to 2024 uh and you see that the yield this
[1:54:47] year will be very very low and it will be um equal to the lowest yield historically so it's data like these
[1:54:57] which we use to look at agricultural droughts in a very specific crop growing area by crop growing area and because we
[1:55:05] have the value and because we have the modus data which are very well calibrated very very accurate it's a
[1:55:13] phenomenal system using two satellites one in the morning and one in the afternoon we're able to get excellent
[1:55:21] photosynthetic capacity data and I've showed several examples of that and so they can be used to look at the envelope
[1:55:30] of photos photosynthetic U maximum or minimum for any time period for any area and that is directly related to yield and is an
[1:55:42] unequivocal way to look at agricultural droughts droughts so thank you for your attention this is a good example of Applied remote sensing
[1:55:54] to train Empower and Advance our knowledge and specifically for food security from satellites I'm now going to pass the
[1:56:06] Baton to Shan McCartney who will be doing a demonstration with Google Earth engine as it relates to what I have
[1:56:19] presented thank you Dr Tucker the following case study will demonstrate how to calculate the standardized precipitation index or SPI which is a
[1:56:28] deviation from the mean and units of the standard deviation calculated from precipitation values the script was written in JavaScript for Google Earth
[1:56:36] engine and adapted from the United Nations training drought monitoring using a standardized precipitation index the demonstration will show how to
[1:56:44] calculate monthly SPI based on daily chirps precipitation data from 1981 which will be summed to monthly precip
[1:56:52] cation data for our analysis the demonstration will also show how to calculate the vegetation condition index or VCI which compares the current ndvi
[1:57:02] to the range of values observed in the same period in previous years the vegetation condition index or VCI is
[1:57:11] expressed in percent and gives an idea where the observed nvi value is situated between the minimum and maximum ndvi
[1:57:19] values in previous years at the top of the script you can see I've already imported the chirps
[1:57:25] precipitation data and boundaries layer to use in the script to learn more about each of these data sets you can click on
[1:57:33] the data set highlighted in blue for our area of Interest or aoi we'll need to Define that
[1:57:41] ourselves to start off we'll use the polygon tool in the top left corner of the map pane to draw a bounding box
[1:57:48] around an area of interest in this case our area interest is the country of Zimbabwe in southern
[1:57:56] Africa specifically we're interested in the Midlands Province within the country which is the biggest maze producing province in the country to create that
[1:58:07] founding box we'll use the uh founding box polygon and once we've created that we'll go to the gear icon and we'll
[1:58:15] change some of the name and parameters first we'll rename the layer aoi and then under import as it's very
[1:58:24] important that we change this to feature collection both of these parameters need to be changed in order for the script to
[1:58:32] run I've already created that bounding box so I will not be duplicating those efforts efforts alternatively you can also upload a
[1:58:42] shape file for your area of Interest as an asset in Google Earth engine and then import it into the
[1:58:48] script I will now walk you through the different lines of the script scpt so you can understand exactly what's
[1:58:55] happening lines 48- 65 set the base map to satellite view filter the global administrative units layer to the
[1:59:05] country of Zimbabwe and Midlands Province respectively centers the map window on the area of interest and adds
[1:59:12] the layers to the map pane after running the code the next step is to set the time
[1:59:20] frame for our analysis in line 73 we create a variable named first image to obtain the first chirps
[1:59:28] daily data from the time series since the data are indexed we use zero to obtain the first image in the
[1:59:36] chirps time series line 74 defines a new variable latest image and assigns an earth image date of
[1:59:46] April 1st 2024 this is at the end of the rainy season in southern Africa since chirps data have a spatial
[1:59:55] resolution of 0.5° which corresponds to a approximately approximately 5,550 M at the equator we Define a variable
[2:00:08] resolution and assign the value 5550 M as a spatial resolution of our trips data the next section of code sets the
[2:00:18] time scale of our our analysis for SPI meteorologists usually recognize one month as the shortest time scale for the
[2:00:26] calculation of spi shorter time scales might underly random fluctuations in precipitation SBI can also be calculated for longer scales like 2 months 3 months
[2:00:38] 6 months Etc the script allows the possibility to set your own time frame for the calculation of spi it is
[2:00:45] important to note that for this code SBI calculations work only for the following quantity of months in line 99 we Define a variable
[2:00:57] named time step where we select two as the number of months for calculating SPI lines 114 to
[2:01:07] 10 20 defines a variable named threshold months and sets the Threshold at 12 coinciding with one year creates a list
[2:01:17] with a lag of one month between each list entry starting from the latest image counting back backwards and
[2:01:23] creates a simple list indexed from zero sequentially to the variable defined above the next block of code from lines
[2:01:34] 123 to 129 defines a variable Tim list date to map the dates beginning with the latest image using the months ends over
[2:01:42] the list counting backward in time it then prints the dates from the list to the console tab
[2:01:52] line 132 defines a variable sorted time list to sort the list above according to their dates lines 135 to
[2:02:05] 157 Define a variable precipitation sum to map a function calculating the monthly sum of chirps just those images
[2:02:14] will be kept whose time frame corresponds to the user provided number of months in this demonstration we are
[2:02:20] using two months for our calculation of spi line 161 defines a variable named summed chirps collection and copies the
[2:02:31] properties of the chirps collection to the monthly collection lines 173 to 220 determine the approach to calculate SPI
[2:02:54] based on the number of months if the number of months is less than 12 the day of year information has to be used to
[2:03:01] find the correct images if SBI is calculated for 12 or more months the day ofe information is not necessary
[2:03:08] depending on the approach less than 12 months or greater than 12 months an SPI calculation is performed to subtract the
[2:03:17] mean precipitation from the selected month with the result divided by the standard deviation lines 225 to 232 use a print statement for the time
[2:03:32] period of the analysis Define a variable SPI monthly viz to use as visualization parameters and finally add the SPI
[2:03:41] results as a layer to the map window since we selected April 1st 2024 as the last image for the analysis and use two
[2:03:48] months as the time step for SPI calculation the name of the layer in the map window will be shown as SPI 2 from
[2:03:56] February 2024 lines 237 to 258 Define variables to plot monthly precipitation across the time series of chirps data within the
[2:04:14] aoi or area of Interest then print those charts to the console tab lines lines 263 to 278 Define variables to plot 2-month SBI
[2:04:30] values within our aoi from the beginning of the chirps time series through April 1st 2024 and lines
[2:04:50] 284 to 3 331 create an inspector chart for SPI values the chart with SPI values only appears when using the inspector
[2:04:58] Tab and clicking in a given pixel with the map window the rest of the code is written to generate titles Legends and
[2:05:06] to export the results as geotiff file to your Google Drive now that we have calculated precipitation anomalies the next section
[2:05:20] of code will demonstrate how to calculate the vegetation condition index or VCI which compares the current ndvi
[2:05:28] to the range of values observed uh in the same period in previous years the VCI is expressed 10% and gives an idea
[2:05:36] where the observed value is situated between the extreme values minimum and maximum in previous years the script was
[2:05:43] adapted from the UN spider knowledge portal agriculture drought monitoring and hazard assessment using Google Earth engine within this script modus data is
[2:05:53] used to calculate the vegetation condition index it is a better indicator of water stress condition than ndvi the deviation of the vegetation
[2:06:03] condition is an indicator of the intensity of the impact of drought on vegetation vegetation growth in line 52 we first Define a
[2:06:12] variable to filter the FAO Gall feature collection to the country Zimbabwe this will be our area of interest for
[2:06:19] calculating the vegetation condition in index or VCI alternatively we can import a shape file of our study area or Define
[2:06:27] the area of Interest using the polygon tool lines 523 and 524 Define variables for the month and
[2:06:40] year to calculate VCI you will have to change these parameters for your own analysis lines 533 to
[2:06:52] 555 transform the dates of the modus data by aggregating them to a monthly time step Define visualization
[2:06:59] parameters and Define the time period in which the VCI is calculated lines 558 to 566 Define a
[2:07:15] variable for the image collection which is the teram modus 16-day vegetation indices at 2 50 m spatial
[2:07:23] resolution filter by the date range Define a function for applying a scaling factor and map that function over the
[2:07:30] image image collection lines 569 and 570 Define variables for the minimum and maximum ndvi values in the image
[2:07:44] collection lines 573 to 577 Define variables for the specific month they calculate the VCI lines 580 to
[2:07:58] 589 calculate BCI and clip the results to the area of Interest lines 599 to 605 bend the VCI result in a categorical
[2:08:16] classifications representing extreme severe moderate mild and no drought respectively lower values indicate bad vegetation State conditions while the
[2:08:26] inverse is true for higher values VCI varies from zero for extremely unfavorable conditions to 100 for optimal vegetation
[2:08:37] conditions to export the results of the drought index as a feature class you'll need to uncomment lines 609 to
[2:08:47] 617 line 622 to 625 at add the layer to the map pane while assigning visualization parameters and a
[2:08:55] title the rest of the script creates and formats the legend for the drought index we can now see under the console
[2:09:07] tab after running the script the results from running the code and the layers added to the map
[2:09:13] pane we can see we've created charts for the two-month precipitation time series and this is from 1980 to 202
[2:09:22] 4 we've also created charts for the 2mon SPI starting from the beginning of the time Series in 1980 and going to
[2:09:31] 2024 and these charts are created specifically for our area of Interest which we defined using the polygon
[2:09:42] tool all the code has been commented so you can follow along on your own with specifications on which parameters will
[2:09:49] need to be changed to run the code in your area of Interest to recap this demonstration showed how
[2:09:54] to use Google Earth engine to calculate the standardized precipitation index and vegetation condition index to characterize drought in Zimbabwe during
[2:10:03] the rainy season in 2024 this code is available for you to modify for your own area of interest
[2:10:10] every effort was made to ensure this map is free of errors but there is no warrant the map or its features are
[2:10:15] either spatially or temporarily accurate this map is provided without any warranty or any kind whatsoever ever either Express or implied with that I'll
[2:10:25] turn the presentation back to Amita to provide a summary of today's training Amita over to you thank you so much Sean for the
[2:10:34] demonstration of calculating SBI and ndvi in GE and that brings us to the end of today's session uh so just to
[2:10:47] summarize uh today we identified remote sensing observations and Regional and Global web tools for Drought monitoring uh described indicators and methodology
[2:10:57] for determining drought categories based on percentile values of SBI pdsi soil moisture and Stream flow uh discuss the
[2:11:07] use of ntvi and Sif in route mapping for food security we reviewed features of drought. goov and US rout monitor
[2:11:15] portals to monitor drought conditions and identified methodology to calculate pi and ntvi from remotely sensed data in
[2:11:24] Google Earth engin part two will be on 25th of July we will focus on overview of NASA
[2:11:32] subseasonal to seasonal forecast system and then also learn how to access and analyze S2s data specifically precipitation and temperature forecast
[2:11:44] uh to assess evolving drought conditions in next 2 to 3 months about homework and certificates there will be one final homework that
[2:11:54] will be posted on 1st August that's the last day of this training and it will be available from the training web page U
[2:12:03] answers must be submitted by Google forms and the homework will be due by 15th of August also note that there will
[2:12:10] be two exercises in GE one is posted today and there will be another one on 30th of July um so please go through
[2:12:19] these Hands-On exercises in GE the codes provided to you um so you will be saving some of the images from your exercise
[2:12:27] and answering questions uh in the homework homework assignment those who attend all three live webinars and complete the homework
[2:12:36] assignment by the deadline will receive a certificate of completion via email approximately 2 months after the training is over
[2:12:56] thank you for attending today's session everyone we want to uh sincerely thank all our speakers today um including
[2:13:04] Kelsey satalino Steve aneri Brad Pew uh Compton Tucker and Sean mcartney for wonderful presentations and uh Rich
[2:13:14] information about a number of drought tools and then how to calculate drought indices um so so uh you today's session
[2:13:23] is a little longer but uh next session will be um shorter than this um you have GE exercise for you to work on this week
[2:13:34] um every week you will have some exercises to do um the one that is um provided today and one will be in
[2:13:42] session three uh will be in GE others are um optional so um we have a number of uh questions here um and
[2:13:55] before we go to the question answer session I also want to thank um our training coordinators Natasha Johnson
[2:14:02] griefin and Sarah Kell also we have Brock Levens and uh swin Hudson ooi and uh Sue Monty uh for their help and
[2:14:14] coordination of this training um we have several questions um and and um I can um first of all since Dr pu is here U
[2:14:30] maybe we should um address questions that um he has answered and then we can go back to other questions in any case
[2:14:39] we will be posting all the answers on our uh web page uh later on so uh Brad
[2:14:46] if you want to go through the questions that would be great uh I think question 29 um have you have there been any
[2:14:55] attempts to generate all different types of trout globally yeah hello um yeah there have been attempts um I know we we have the
[2:15:21] North American uh drought monitor which is a I mean that's only for North America but it's collaboration between
[2:15:30] Canada the United States and Mexico for Drought Drought monitoring and that's updated each month thank you um and there was a table
[2:15:44] uh provided um there are a number of global tools they um they look at different parameters and uh monitor
[2:15:53] drought so you can refer to that table in the presentation then question 30 uh what do you mean by socioeconomic drought isn't
[2:16:04] all drought linked to Social econom in terms of different impact what does this drought mean yeah so socieconomic drought um
[2:16:19] that occurs when like a demand for for a good uh exceeds uh Supply due to uh a lack of precipitation low water
[2:16:30] supply um it's I mean somewhat different from like hydrological drought which you know that's more low reservoirs so
[2:16:39] there's you know different types of drought drought meteorological agricultural Hydra hydrological and then socioeconomic question 31 uh in the fire service we
[2:16:55] often use kbdi kbdi um so which takes into account daily temperature vegetation cover and rainfall are any of these indicators
[2:17:09] especially good for monitoring fire conditions yes so um I know yeah the kbdi um as the the question there um States like
[2:17:25] that's used qu extensively in fire weather um but we do also use it in drought monitoring um yeah I just gave
[2:17:34] this example that it's uh considered quite a bit um during the spring across the Florida Peninsula that's kind of their fire
[2:17:44] weather season but also you can have uh droughts that um de velop across uh Florida in the late winter and
[2:17:56] spring thank you so next question um is the percentile relative to that place so the actual conditions may be different
[2:18:06] across the country but the relative severity is scaled to each Place yeah we had a few questions on the
[2:18:16] percentile so um yeah they're valid or percentiles of indicators are valids for specific locations and that puts that indicator
[2:18:29] into historical context I guess for an example say we have a 100 Years of precipitation precipitation records
[2:18:39] records and you one your value over that is like in the 20th percentile that's within that 100 period of record um yeah we had
[2:18:51] a few questions on that but um yeah percentiles are used for precipitation applied to precipitation soil moisture
[2:18:58] Stream flow um any know yeah they do vary over geographic regions thank you um then there's question about is AI used as part of the
[2:19:15] US trout monitor yeah currently authors yeah do not use uh AI I know there's been some like research papers um I
[2:19:29] believe out of NASA actually um they've tried to like replicate the drought monitor using machine learning so um
[2:19:36] that that has gained attention over the past um past several years thank you um one more question is
[2:19:47] what do you mean by realtime authoring yeah I just um yeah I wanted to provide an example um of when I authored back in
[2:19:59] early June just to give everybody um all the attendees there just a um kind of peak behind the curtain of
[2:20:09] how how the drought monitor is um you know made each each day of the the authoring uh period
[2:20:21] thank you so uh there are a number of questions and Brad if you want to address any of them uh please feel free
[2:20:37] um I'm going to go back um and start from the top and um uh we'll see how
[2:20:44] many we can address right now but we will post all the answers on our web training web page um later
[2:20:52] drawn so we'll start with question one uh could you suggest satellite data for small scale studies like 30 m
[2:21:01] precipitation groundwater and soil moisture so unfortunately uh the open- source data that we have satellite data they don't have such high
[2:21:11] resolutions um but there are um modeling systems like on mesoscale orinal models such as wrf or the research and
[2:21:21] forecasting and there's also water shed level models such as Soil and Water assessment tool or SWAT uh some of these
[2:21:29] models uh use observed data which are not that high resolution but then they they model at higher resolution and you
[2:21:37] get some of the information at high resolution so that is possible later on you will see a reference to uh spot list
[2:21:46] that also can be used at high resolution not 30 m but relatively high resolution and anyone Sean Brad please
[2:21:57] um do add if I'm missing something question two is a deficit in soil moisture related to agricultural oil or
[2:22:07] hydrological drought so soil moisture affects both Agricultural and hydrological uh droughts so variability in precipitation will result in surface
[2:22:17] and root Zone soil moisture and that does impact vegetation and agricultural drought but prolonged drought periods would deplete column soil water so
[2:22:29] subsurface soil moisture is also affected and so then that result that can result in hydrological drought question three uh Sean you may
[2:22:42] want to address this can you explain why the SBI goes by 369 and 12 months and not every 2 or 5 months is it about a
[2:22:52] that's a good question and thanks whoever asked that uh yeah so thebi code that was provided today in ouren in
[2:22:57] JavaScript can be calculated from 1 month 2 months up to 12 months and then also 24 and 48 so you are limited in
[2:23:05] that but there's no reason why you couldn't calculate a two-month or 5-month SPI um it's quite common
[2:23:10] actually to do that and it's more in it's more appropriate based on how long the rainy season is or how long you feel
[2:23:17] that their uh you know drought conditions were persisting for so if you're trying to look at that you know
[2:23:22] long-term mean compared to you know the specific season then you would certainly want to uh find an appropriate month in
[2:23:28] which to do so so we I think we listed maybe 369 and 12 uh just because they're
[2:23:32] in increments of three but you could certainly do this on on two to five and I think the most important thing is just
[2:23:37] really focusing in on when that rainy season is uh some some countries some regions of the planet geographies have
[2:23:43] more than one rainy season so you might be looking at more than one but I think the important thing is really trying to
[2:23:48] you know do that analysis using SPI on those specific rainy season or seasons and I think it's also good to note too
[2:23:55] that SBI is more appropriate in regions that are rainfed and not irrigated so you know California where I'm from uh
[2:24:01] it's primarily uh you know irrigated agriculture so SPI would not be as important uh say in those uh climates
[2:24:08] that it would be in more rainfed uh geographies and I'll go ahead and take question number four as well uh can FBI
[2:24:14] keep be calculated for short shortterm periods weekly and monthly and uh really meteorologist usually recognize one month as the shortest time scale for
[2:24:24] calculating uh SPI and that's because there's going to be a lot of noise there's going to be a lot of uh underly
[2:24:28] random fluctuations of precipitation if you're looking at less than one month so one month is typically the the threshold
[2:24:33] or the cut off in which SBI is typically calculated and anything over one month as well so am I'll toss back to you
[2:24:39] thanks thanks Sean uh question five is what is the correlation between soil land degradation and drout um so several
[2:24:49] research studies can be found there are Regional studies of how um droughts affect soil and land degradation um
[2:24:57] there is a uh reference that we found um and the link is provided here and there are references in this report uh that
[2:25:06] can provide information about this topic certainly there is relationship between drought and land degradation and it is more Regional um
[2:25:20] and um Brad if you have anything um to add to that answer please do so the next question is what is the
[2:25:32] age of the drought. goov archive data and we'll have to uh we'll find out and and get back to
[2:25:47] you on that one so next one is trout. COV only available for the US or also Asia
[2:25:54] Pacific uh trout. trout. org is right now available over the us but um if you go to n's uh website you will see that
[2:26:05] is also an international drought monitoring component that is uh know as JS tool that also provides Global
[2:26:13] Information next question uh Sean you may want to answer I want to work on soil moisture based drout prediction for a 450 kilom
[2:26:29] Square Square Watershed how can I get high resolution soil moisture data yeah it's a good question a lot of the or pretty much all
[2:26:37] of the uh NASA NOA products are going to be at corser spatial resolution but there is uh a product specifically for
[2:26:45] the contiguous United States that's the lower 48 states and it's actually a a a product uh put out by the NASA sport
[2:26:52] team and that's a 3 km spatial resolution it is a modeled soil moisture product um but uh but that being said it
[2:27:00] is that you know 3 km spatial resolution which could you know definitely work within that you know 450 km square
[2:27:06] kilometer Watershed uh if you're looking for higher resolution data sets outside of the contiguous United States uh I
[2:27:12] would recommend you look uh back to question the answer to question number one which was uh posed earlier and I
[2:27:18] mean I'll go ahead and take question number n as well what method is good for predicting meteorological drought and as
[2:27:25] shown in multiple times with in climate engine as well as in Earth engine the standardized precipitation index or SPI
[2:27:31] is a precipitation only uh you know derived index and is well suited for characterizing meteorological drought on
[2:27:38] a range of time scales thanks thank you Sean uh question 10 um it will will address that um and we'll
[2:27:48] talk to Dr Tucker and then uh answer that question is historical drought data available in other countries as well
[2:27:57] this is question 11 so yes past observations of precipitation surface temperature soil moisture groundwater and vegetation index they're all
[2:28:07] available globally and historically um most data are available data sets available for 20 plus years many between
[2:28:16] 10 to 20 years of data so globally iable so question 12 um again I think it's GE Sean you may
[2:28:29] want to address that yeah absolutely so uh I think this is U for both climate engine and in Google worth engine they
[2:28:37] were interested you know uh you know can we to use this data is it possible to to
[2:28:42] use a cloud environment that is a question and then the answer is you know we we showed demonstrations both using
[2:28:47] climate engine uh which US use Google Eng in the background as well as is the code provided JavaScript code in Earth
[2:28:53] engine to calculate both the standardized precipitation index and the vegetation condition index both of those are Cloud platforms and uh they're both
[2:29:02] used for environmental monitoring on a global scale so all the data sets all the demonstrations can be applied in any
[2:29:08] geography basically and uh in both climate engine and an earth engine we showed how to export uh either by
[2:29:14] uncommenting code or just using the graphical user interface to export as geotiffs for your for the results that
[2:29:20] you were able to achieve for your area of Interest so thanks so much Mita back to you thank you uh question 1 it's more
[2:29:28] of a broad overview question but how would you fuse the data and so data Fusion is um it's not a trivial topic
[2:29:38] but um uh we will provide you references where some data have been fused together such as lens set and Sentinel 2 uh
[2:29:47] imerge which uh combines a lot of um data for deriving precipitation so we'll provide you um information about that
[2:29:58] and references so for different spectral bands different satellites different techniques are used um but you have to
[2:30:06] have uh some coincident data from multiple satellites to derive relationship between what different sensors are looking at and then derive
[2:30:16] uh technique to fuse the data and so this this is also a broad answer to a broad overview
[2:30:25] question question 14 can the drought data be extrapolated for floods from the jpeg picture shown um I'm not exactly sure which
[2:30:38] jpack uh pictures we're talking about uh but something like SPI uh can be used to detect both dry and wet period so they
[2:30:47] can be used to look at flood condition s question 15 how is NASA data useful for Drought prone area Assessments in
[2:30:59] India is it possible to know the major causes of drought from a historical time frame from satellite data if yes then
[2:31:08] which satellite images can be used and how um I think um the second part of the question um uh you you would be looking
[2:31:17] at historical data such as pre itation lens surface temperature um evapor transpiration and soil moisture all these data sets are available from um
[2:31:30] GPM um smap lens set so you can use these long-term data sets not sure about how useful
[2:31:43] for for um okay sorry um is not useful for Drought prune area assessment in India so I think these are
[2:31:54] global data and um you can analyze them over India where the drought prone region again looking at um long-term
[2:32:06] climatology of these parameters and then looking at anomalies that's the first step to look at um droughts okay uh there are several
[2:32:18] questions about climate engine um that uh we will answer um and post them on the website the question then question 19
[2:32:32] the time series on climate tension can only produce chars and not map is that right so um uh yeah go ahead and answer
[2:32:43] this uh uh that is correct yeah if you're running uh the uh time series as an output in in in climate engine then
[2:32:50] yeah the graph will be the uh only result um and that's under the make a graph tab but if you do want to focus on
[2:32:56] maps uh you won't be able to get that time series as a as a uh but you will be
[2:33:00] able to get results using that uh make map tab at the top left of the application so
[2:33:05] thanks question 20 is can you extract data sets region by region um so yes all satellite data that we talked about here
[2:33:15] that you can extract uh for different regions uh either by using some polygons or shape files you can extract them for
[2:33:23] different regions there's one more question about uh climate engine so we'll have to get back to you
[2:33:42] on that one uh question 22 as well about ocean ocean chlorophyll in climate engine uh question 23 are there free learning
[2:33:56] resources for further understanding of climate engine if so please share I really think it's a great resource and uh the link is provided
[2:34:12] here so for all the climate engine uh related questions we will be posting them on the website
[2:34:21] right moving down to question 27 is this the correct URL for the previous presentation and the app for climate
[2:34:32] engine we receive a not secure message when accessing is this app free or do we need to pay for subscription
[2:34:50] okay so I think it it's um you you may want to try it later on because right
[2:34:55] now we're also getting the same message uh question 28 are there any data sets available for agricultural
[2:35:08] drought monitoring at the field scale so um there is a u site open ET uh there are multiple models calculating for
[2:35:18] transportation based on remote sensing and other data um they provide F level Evo transpiration and ntvi data that you
[2:35:27] may want to look at so open um I believe is focused mostly on the US but there is
[2:35:32] also um landset based evap transpiration calculator e flux that provides landset based 30m resolution ET and nvi that you
[2:35:43] can um look at to see agricultural drought also so NASA sport soil moisture and vegetative Health index are high
[2:35:54] resolution products and we did Cover question 29 to all the way about about uh uh 37 and going to question 38 can Sentinel
[2:36:15] Copernicus data be used in any way to produce produce um trout indices so both Sentinel one and Sentinel 2 uh they can be used for
[2:36:25] land cover mapping um Sentinel 2 has uh red and infrared bands MSI is the sensor so that can be used to calculate ndv
[2:36:45] yes and there's one more question about is the person St relative to the place we covered that question 40 can we link to the
[2:36:58] world agricultural production data web page can can it be shared um we'll look into that question 41 is this global data set
[2:37:13] suitable for monitoring seasonal trout over a crop growth period specifically in a rain INF for agriculture region
[2:37:20] which is the most efficient IND which is the most efficient index to monitor such trout so I think Sean you have replied
[2:37:32] to this question uh yeah yeah so the uh all of these uh the data sets that we
[2:37:37] show today precipitation soil moisture how to calculate vegetation indices uh for multispectral imagery Etc uh they're all very well suited for seasonal
[2:37:46] drought espe specifically over specific time period so if you're looking at you know like a 4mon uh rainfed agricultural
[2:37:54] geography you could certainly use you know SPI and and some of the vegetation indices for that and then uh you can
[2:38:00] characterize that with both SPI and VCI uh as well as in in climate engine which was uh thoroughly demonstrated today as
[2:38:06] well so all these are are very well suited for you know specific grow crop growth periods as well as rainfed
[2:38:11] agriculture thanks um yes thank you Sean uh question 42 is for Dr Tucker and so we will uh
[2:38:26] get back to you on that one after talking to him um question 43 again how to do I download the raster image for
[2:38:34] SBI and VCI uh yeah so in the script uh as well as in the exercise the link that we
[2:38:41] provided to on the web on the training page you can access the uh step-by-step exercise on how to uh comment and change
[2:38:48] different parameters as well as uncomment different sections of the script to export the results as geotiff files to your Google Drive so if you
[2:38:55] click on that link or also if you go to the training web page you can access that part one exercise and you'll be
[2:39:00] able to follow along and then be able to export those results as well thanks great uh the next question is
[2:39:07] also about atmospher correction in GE yes all the data sets uh shown today demonstrated in GE have already been
[2:39:15] atmospherically and radiometrically corrected so you can use them analysis ready ready thanks great the next questions can can
[2:39:24] you give some reference script in GE to make a historical ndvi graph showing mean Max area and historical mean with
[2:39:37] modus I believe um you can find mod andvi calculation uh script online um and we'll we'll try and share that with
[2:39:52] you historical n graph showing mean Max area so I think you you you will have you you will share a script with you
[2:40:01] which calculates ndvi historical ndvi from modus and based on that I think uh you can find statistics can we calculate VCI using
[2:40:13] lens at 8 using the same code this question 46 so Sean can that be done yeah I think it'll be a little
[2:40:29] tricker I'd have to to take a look at the code because it was set up for for
[2:40:32] modus so uh we will get back to you and we'll answer that uh when we post this
[2:40:36] online thanks so uh we will uh talk about uh CF and n VI question 47 we'll get back to
[2:40:52] you on that question after talking to Dr Tucker question 48 is there our package through which these drought indices can
[2:41:00] be calculated personally I am not aware of our package which calculate drought indexes so question 49 how deep are drought
[2:41:23] conditions suggested to Trend um in inches feed below surface levels and do drought Trends affect aquifers um so second part of the
[2:41:35] question that's that's true they do affect affect aquafer um now how deep I think it would depend on the intensity of the drought
[2:41:45] um and so um I think it has has to be studied by trout events and there is no one
[2:41:54] single answer that how many inches or feet below soil surface it would be affected but it is
[2:42:03] true that um Crown water and aqua Forest they are affected by drought conditions question 50 are there any
[2:42:16] drought models that show optimistic and P IIM istic predictions regarding future drought drought conditions um so we will be looking at
[2:42:27] model output to see evolving droughts so next week we'll look at seasonal uh drought predictions uh and after that we
[2:42:38] look at climate change production of drought so basically temperature and precipitation and so there are models and um they do provide
[2:42:50] guideline of how things are going to go um the these models are validated with past data as you will see next week uh
[2:43:00] so I think at based on that you can make judgment for your own region which model you can
[2:43:07] use for Dra prediction question 51 are there any plans to add more data set in climate engine related to the cryosphere or
[2:43:22] Glacier monitoring are there any climate engine type visualization portals if you have any sources can you please share any related to materials or
[2:43:34] data sets um so not sure about climate engine part uh we'll find out but we will share um sources for um cryosphere
[2:43:46] and Glacier data um we'll we'll post that in the question and answer document so with that I think we want to
[2:44:04] thank you also so very much for um attending this session um and questions which we have not addressed we will
[2:44:13] address them and post them uh we'll see you on Thursday on 25th of July uh we will be talking about um subseasonal to
[2:44:23] seasonal drought prediction at that point and um again thank you all so very much behalf of all of us and I want to
[2:44:32] thank all our uh guest speakers especially Dr PE for being here for this webinar and answering all the questions
[2:44:40] as well so thanks everyone and see you on 25th
