# Satellite Observations and Tools for Fire Risk, Part 1/3

`https://www.youtube.com/watch?v=H3Q1pI-NFL8` · id 90 · 1:40:22 · module 17 — Module 13 — Satellite Remote Sensing for Forest Fire & Wildfire Applications

[00:00] hello and welcome everyone welcome to this artsa training on assessing the impacts of fires on Watershed health
[00:09] part one is going to be on satellite observations and tools for fire risk my name is Amita Mehta and I will be
[00:18] conducting this session with the help of my colleague Sean McCartney we'll start with a brief introduction to
[00:25] our set are set or applied remote sensory training program is NASA applied sciences capacity building program and
[00:35] it provides accessible relevant and cost-free training on remote sensing satellites sensors methods and teams RC trainings include a variety of
[00:46] applications of satellite data on these thematic areas such as agriculture climate and resilience disasters ecological conservation health and air
[00:57] quality and Water Resources these trainings are tailored to audiences with a variety of experience levels our sub trainings can be online or
[01:11] in-person trainings are also designed and provided sometimes they are live and instructor-led such as this one or there are also asynchronous
[01:21] and self-based training available on our set website uh the link is provided here these are cost free as I mentioned
[01:29] before before um most trainings are bilingual in English and Spanish or sometimes they are multilingual with additional
[01:38] language such as French um even if the trainings are not bilingual the material is available in English and Spanish both languages
[01:47] our set trainings they use open source software and data and accommodate different level of expertise in remote
[01:56] sensing so we'll start with today's session uh the training is about assessing the impacts of fires on Watershed health and
[02:07] will start with an overview first so overall training learning objectives are given here by the end of this
[02:15] training participants will be able to analyze the key fire science criteria to select the appropriate data from
[02:24] satellites or instruments for a given watershed watershed distinguish compare and contrast the biophysical conditions pre and post fire
[02:34] acquire land use and land cover maps for the region of Interest select River Basin and subpacing boundaries for their region of Interest
[02:44] recognize how to apply the soil and water assessment tool a river-basing scale model to simulate the quality and
[02:53] quantity of surface water in groundwater this is uh basically for post file application there are several prerequisites here for
[03:05] a better understanding of the material presented in this training there is fundamentals of remote sensing satellite observations and tools for fire risk
[03:15] detection and Analysis using Google Earth engine for land monitoring applications and Texas A M instructional videos for SWOT that we
[03:27] will be doing this in this training there will be three parts to this training training Today part 1 will be on satellite
[03:35] observations in tools for pre-fire risk mapping mapping second part will be on earth observations and using Earth
[03:44] observations in SWOT model for assessing post-fire water quality in watersheds and the final part will be on using
[03:52] Google Earth engine to monitor postfire impacts impacts there will be one homework posted on our set website on the last day of the
[04:01] training and that will be due on 27th of July July a certificate of completion will be awarded to those who attend all live
[04:12] sessions and complete the homework assignments before the given due date also please note that part 1 and part 3
[04:22] will have Hands-On exercises using Google Earth engine in which you will be able to to pre-fire risk mapping as well
[04:31] as to post fire impacts assessment there are several types of fires that we observe Wildfire or Wildland fire
[04:41] deforestation Agricultural and peat fires fires they burn different types of vegetation such as Wildfire Burns forests shrub
[04:52] grasses grasses deforestation clears forests agricultural Fire Burns crops grasses and shrubs peat is a soil-like material that burns with low intensity and its
[05:05] smallers smallers all these fires they have seasonality especially wildfires and peatland fires are they they occur mostly in dry
[05:17] seasons and they vary from ear to ear n natural as well as human induced causes for fires for Wildfire and
[05:27] natural source is lightning and winds can also then accessorbate once the fire starts starts humans can cause fires by prescribed
[05:40] burning either accidental fires can start or that could be arson deforestation and agricultural fires are completely human made one is for
[05:50] clearing forests one that burns crops to clear Fields peat fire can be natural or human induced Wildland fires and deforestation fires
[06:02] can have very high intensity and can burn billions of Acres if they're not controlled of agricultural and peat
[06:12] fires are low intensity actually Peak fires can be underground and they are difficult to put out so fires are unique phenomena in the
[06:25] sense that they interact with all Earth system components or spheres as we call them lithosphere biosphere atmosphere
[06:33] and hydrosphere fires are generally caused by dry and warm conditions in atmosphere hydrosphere and lithosphere and then the
[06:46] impact back also or to them by affecting air quality by putting smoke and particles in the atmosphere they add
[06:57] greenhouse gases such as carbon dioxide and carbon monoxide they alter energy budget by scattering and absorbing solar
[07:06] radiation and also impact Cloud physics once fires occur they burn vegetation and make soil bear and then they alter soil composition
[07:21] both chemical and biological and once fires occur both fire rain can trigger more erosion more flooding and
[07:31] landslides also they impact Downstream water quality once more erosion is there and more flooding is there from bare
[07:41] soil more nutrients and sediments they wash into reservoirs and streams where the fires occur most importantly fires
[07:51] affect all lives they have health impacts and economic impacts As We Know so in this training we will focus on
[08:03] wildfires wildfires as we just talked about they impact human lives infrastructure ecosystems and Wildlife you can see here in this plot this is
[08:15] for North America so different Caribbean Central American countries U.S and Canada are shown here from Chivas what
[08:25] it shows is the ratio of number of fires um in each country with respect to area of that country so
[08:35] impact of fires depends on how many fires as well as how much area is affected so the big one here is is uh
[08:45] mozzarat then U.S is down here this is Canada Canada um Guatemala and Honduras are shown here so fire impacts can vary uh you know not
[08:57] based on where they occur and in how many numbers they occur for us alone the 10 years average cost
[09:06] of fire suppression is more than 2 trillion dollars while many wildfires are caused by humans climate change is expected to
[09:16] increase Wildfire activities due to warmer and drier conditions frequency intensity and extent of fires vary internally depending on a complex
[09:28] connection between weather and climate conditions and ecosystem processes the top chart here shows annual wildfires so numbers in thousands here and Acres
[09:42] burned in millions of Acres this is for the U.S between 1993 and 2022 so clearly you can see that the
[09:53] number of fires vary internally and how much area is burned how acres are burned is also intra annually they very
[10:03] strongly here you can see a slight upward trend on top of that inter-annual variability uh for how much area is
[10:12] burned by fire so in this session we are going to focus on fire risk mapping fire risk mapping is the probability
[10:21] that a fire might start in a certain area area so risk is determined by compiling relevant factors that influence fire
[10:29] ignition and behavior to calculate fire risk map or to have estimation of that there are three aspects to that first the probability of
[10:42] ignition ignition second the biophysical influences on fire such as fuel load moisture content flammability of vegetation and
[10:51] topography and finally the spread of fire once it gets started as you can see all these factors have to
[11:00] be known for fire risk mapping and that's why a comprehensive fire risk map is usually a challenge
[11:09] in this training we will try to be do that by focusing on monitoring fire fuel temperature precipitation and soil
[11:19] moisture in a given watershed so as you can see this star marked in here these are all the observations
[11:29] required for fire risk mapping uh in situ measurements are sometimes not adequate and so remote sensing observations are used also Earth system
[11:41] models are used for these parameters the Stars they indicate parameters that are available from remote sensing and so
[11:52] that brings us to today's topic that is an overview of satellite observations and tools for fire risk mapping
[12:03] objectives for today are as follows will provide examples of fire science criteria criteria specifically for pre-fire conditions and
[12:14] learn how to select appropriate data from satellites for a watershed of Interest Interest there will be a demonstration of how to
[12:22] delineate preferred basins and sub basins for a watershed of interest and finally we will learn to calculate
[12:29] anomalies in biophysical and meteorological conditions or a watershed of interest and we will do that by using
[12:37] Google Earth engine here is the outline for today we'll have an overview over our observations for fire risk assessment
[12:49] also overview of tools for monitoring Firebase Firebase remote sensing based fire is indicators and then we will look at a couple of
[12:58] case studies recent fires in U.S and Canada Canada we will have demonstration by Sean McCartney we will be showing pre-file
[13:07] risk assessment for two case studies World C fire in California and recent prefect fires and they he will use
[13:18] Google Earth engine to demonstrate a fire risk assessment specifically he will demonstrate how to delineate a watershed
[13:27] derive standardized precipitation index or SEI that is to assess dry conditions and monitor anomalies which is departure
[13:38] from long-term mean values for soil moisture and normalized difference vegetation index within a watershed just a note here on how to ask questions
[13:52] so please put your questions in the question box and we will address them at the end of the webinar feel free to
[14:00] enter your questions as we go and we will try to get to all the questions during The Question Answer sessions
[14:06] after the webinar the remainder of the questions which we cannot address during this time will be answered in the question and answer
[14:15] document which will be posted to the training website about a week after the training training we will start with
[14:23] an overview of Earth observing satellites and sensors for fire risk assessment assessment just a quick review here
[14:32] that most files occur in dry and warm conditions both weather and climate conditions impact fire risk and
[14:41] vegetation cover type density and height they provide fuel for fires so we are going to map some of these to get fire
[14:51] risk assessment an example is shown here for annual fire weather days and that's based on average annual hot dry and windy days between
[15:03] 1973 and 2022 so here you can see that the red area shown where the annual fire weather days are larger and so wherever
[15:16] these conditions are met there is likelihood of watershed data relevant for fire risk assessment are listed here
[15:24] including precipitation surface temperatures soil moisture vegetation fuel topography humidity and winds all these data are available from remote
[15:36] sensing and Earth system models from NASA and they can be used for pre-fire risk assessment also for during fire and
[15:45] post fire Watershed conditions assessment in the next few minutes we are going to have an overview of how to get these
[15:55] data from which satellite sensors and Which models more details about these satellites and models can be found at
[16:03] this prerequisite webinar we will start with a couple of tables summarizing satellites sensors and models that provide Watershed data for
[16:14] fire risk assessment we will have a quick overview of these satellites and models but these tables provide a nice summary of all the data
[16:24] sets and their sources so you can see parameters in this column satellite sensors and special and temporal resolution and coverage all the
[16:35] acronyms are defined here in the bottom precipitation is available from combined trim and GPM satellites and also with
[16:47] multiple satellites from International satellite constellation sensors are microwave radar and radiometers radiometers and international satellites also have
[16:58] microwave emitters and Sounders special resolution for precipitation data is one tenth of a degree or about 10 kilometers that's out there available
[17:09] at every half hour daily and monthly time scale beginning from June 2000 which is combined trim and GPM data
[17:20] record record soil moistures available from snap which carries L band microwave radiometer and the data are available at 9 kilometer
[17:30] and 36 kilometer resolution on daily basis starting from early 2015. Topography is available from shuttle radar topography Mission carrying
[17:44] um um C band radar which flew on a space shuttle in 2001 in the digital elevation data are available at 30 meter
[17:54] resolution resolution land cover lens surface temperatures and vegetation indices such as ndvi can be obtained from these satellites and
[18:05] sensors sensors so lenset terrain aqua Sentinel 2 which is a European Space Agency satellite snpp and GPSs these are
[18:17] Nova polar orbiting satellites and these are the sensors landsat has been the longest flying Mission a series of landsat satellites
[18:27] were launched between 1972 to present they have Optical and thermal infrared sensors the resolution of landsat is 30
[18:38] meter and data are available every 16 days days Tera and aqua SNP pjpss so Modis and rear sensors they are similar both have
[18:50] Optical so visible infrared near infrared to Thermal infrared bands are available in these sensors and as you
[19:01] can see special resolution varies from Modis it is 250 meter to one kilometer and wears it is 375 meters to 750 meters
[19:14] both Modis and Rears they provide near daily daily measurements and then they are used to get other measurements such as 80 and
[19:25] monthly monthly mode is so from Terra and aqua that is the second longest time series after lens set so it's available from 2002
[19:35] present uh snpp and GPSs so where state are available from 2012 to present MSI is the most recent one from uh June 2015
[19:48] to present but it has the highest special resolution among all uh 10 meter 20 meter and 60 meter depending on the
[19:57] bands and temporal resolution also is two to five days okay okay next here we have a satellite
[20:08] observation based model for fire risk assessment assessment so Mera 2 is a modern era retrospective analysis for research and applications
[20:18] and that provides fire weather and climate data including precipitation surface temperature relative humidity and winds these data are available since 1980 at
[20:30] hourly and monthly temporal resolution and the special resolution is half a degree by 0.667 degree additionally there are lens land data
[20:43] assimilation models this is for North American landed isolation system and this is global land data simulation system they provide soil moisture anyway
[20:53] for transpiration anal Das has a 1 8 of a degree resolution and available since 1979. hourly and monthly temporal resolution
[21:04] gldes is available at quarter degree and one degree resolution it's a three hourly and monthly temporal resolution
[21:11] these data are available from 2002 present present so so summarizes uh Watershed data that you can obtain from different satellites and
[21:22] models depending on your Watershed depending on the time period that you are interested in you can choose a data
[21:30] set to work with now we are going to go through very quickly to see some features of the
[21:37] satellites and models that we just saw so GPM core satellite is in a low inclination orbit and it was launched on
[21:46] February 27 2014. um it covers 65 South 265 North its predecessor trim covered Tropics between 35 South and 35 North but both trim and
[22:01] GPM trim was launched in 1997 so combined treatment GPM they provide long-term precipitation so that's what we are going to use in this training and
[22:14] sensors as we saw earlier it's a microwavator and Imager a special note about this image data this is a combined trim and GPM data
[22:25] there are several versions with different latency so early and late uh therefore 4 hour and 14 hour latency
[22:33] which are quite useful for looking at weather conditions a pre-fire and post fire also the final product is a
[22:43] research product which has three months latency latency so we are going to use imerge data these data are available from Google Earth
[22:52] engine and so we will look at that to look at uh try and wet conditions in pre-fire seasons
[23:00] so here something to note is that it's not just stream and GPM but International constellational satellites been used so they all have microwave
[23:11] um sound barrier imager which are calibrated with trim and GPM data and as a result half hourly uh one tenth of a
[23:19] degree precipitation can be obtained from this constellation of data concentration of satellites okay okay next is soil moisture active passive
[23:31] that is also a polar orbiting satellites providing Global soil moisture and that's a l-bend radiometer as we saw
[23:39] earlier Lancet and Sentinel 2 they are specifically used for vegetation based fire applications among other things and
[23:51] we already talked about their temporal and special resolutions but here vegetation extent and type A vegetation stage and health through different
[24:02] indices and vegetation moistures index so these can be obtained from Lancet and Sentinel 2 data sets Modis has been used for ndvi this is
[24:17] enhanced vegetation index High temporal resolution phenology and so land cover classification uh based on modes is available for a long time
[24:28] um we already talked about special and temporal resolution um so this is just to give an idea of
[24:35] how ndvi shown here looks like where Africa from old is similarly wears which is flying on Nova
[24:46] polar operating satellites that also provides vegetation-based fire applications so vegetation stages can be obtained from wears just like uh that
[24:56] they are obtained from Modis vegetation Health Health um and temperature and vegetation Health index that all available from beers
[25:08] and again we have already talked about special and temporal resolution and coverage manner too it's a atmospheric model that
[25:21] blanks the vast quantities of observational data with output data from Goddard Earth observing system or geos5 model so here from 1980 onwards all the
[25:35] available observations which are assimilated in Mera 2 are shown in here result these are count number of
[25:42] accounts in 10 to the sixth so too many millions so conventional data earlier and then as we go past about 2
[25:52] 000 um two or so you can see that multiple satellite sensors they have been added in assimilation it provides
[26:00] state of the art Global analysis for weather and climate and also it provides improved hydrologic cycle both shielders and eldas that we talked
[26:14] about are water and energy balance model with assimilation of remote sensing data basically uh length surface model that
[26:24] are forced with inputs such as rainfall in this case it's stream based multi-satellite data metallurgical data from Global analysis
[26:36] vegetation mask land water mask Leaf area index from Modis and clouds and snow from Nova and defense
[26:46] meteorological satellite program and provides integrated output of soil moisture evapotranspiration runoff n snow water equivalent both soil motion
[26:57] evapotranspiration can help look at dry conditions or drought conditions which are reducing for fires NL does there are four different land
[27:09] surface models different versions are there there basically similar inputs but here precipitation is provided from rain gauge data this is just for North
[27:20] America and meteorological data from NOAA North American region and Analysis and same similar integrated output can be obtained just as in GL does NL Das is
[27:33] part of this land information system based based A system that provides all these integrated output for North America
[27:44] so that concludes our information about satellites and models and how to get uh where to get water shed parameters for
[27:55] fire risk assessment before we actually start looking at some of the data uh let's look at uh remote
[28:03] sensing based tools for monitoring fire risk these are already um online available tools which use some of these satellite data and in-situ data
[28:14] so that is just for your information and again you can see more details in the prerequisite webinar uh shown here or
[28:23] provide link is provided here so there is land fire does that is existing vegetation cover and height it provides
[28:31] topography Fuel and fire regime in the US all these are fire risk monitoring tools for us and Regional fire monitoring North
[28:43] American Wildland fuel database or anywfd that's per hectare fuel load from field data that is for us the forest
[28:53] inventory and Analysis or FIA is the U.S forest Service portal for field-based and remote sensing based information
[29:01] about tree species size health and mortality this also is for us alone Fire cast it's a remote sensing based
[29:11] near real-time fires and Forest disturbance alert system this is limited to U.S and specific countries in South
[29:19] America Indonesia and Madagascar so here there is an example shown from fire cars about the UC fire that we are going to
[29:28] talk about later this is just for your reference so that you can look at some of these tools for
[29:35] your information there are also Global tools one is evaporative stress index mapper and that provides evapotranspiration anomalies as
[29:47] an indicator of dry conditions then there is global Wildfire information system or GVS that provides a comprehensive View and evaluation of
[29:59] fire regimes and long-term fire weather forecasts and fire effects at the global scale and here given is shown so you can see this fire
[30:10] in recent fire in Nova Scotia in early June and fire weather index from gvis is also shown in the bottom panel so
[30:21] we reviewed the fire monitoring tools but in this training we are using this General utility tools first is Google Earth engine we will use
[30:32] this to analyze satellite data we just introduced and that is to actually do fire risk mapping in next session we will talk about Soil
[30:43] and Water assessment tool a modeling tool developed by Texas A M University and NASA access this is a our base Code
[30:53] system that allows satellite data extraction that can be used as input for SWOT so both SWOT and NASA access we'll
[31:02] talk about in next session so what are some of the remote sensing based indicators for monitoring fire
[31:10] risk and here is the list standardized precipitation index or SBI normalized difference vegetation index enhanced vegetation index
[31:22] soil adjusted vegetation index normalized difference water index normalize tri-metal index evaporative stress index and anomalies of precipitation soil moisture and
[31:37] vegetation indices all these fire disk indicators can be calculated from the data sets that we talked about earlier for watershed more
[31:47] details can also be found at this link there are additional fire risk factors such as vegetation height and density
[31:58] elevation that impacts rainfall temperature type of vegetation wind exposure potential for lightning strikes and terrain aspect and slope which
[32:10] impact amount of solar radiation and potential for fire spread in this training we are going to look at
[32:19] case studies for which we will have fire risk indicators we are going to focus on these three so one is standardized
[32:27] precipitation index normalized difference vegetation index and then anomalies of land surface temperature precipitation soil moisture and ndvi
[32:39] just a brief introduction to SPI so SPI is primarily defined to characterize meteorological drought or dry condition
[32:49] mathematically historical rainfall data at any location fitted with gamma distribution representing cumulative probability function and if a rainfall
[33:00] event has a low probability on the cumulative priority function it is indicative of a drought event the SPI values can be interpreted as the
[33:10] number of standard deviations by which the observed rainfall anomaly deviates from the long-term mean and it is
[33:18] calculated as shown here where p is actual precipitation P star is the mean precipitation and sigma B is the
[33:26] standard deviation so it just tells you how uh dry or wet conditions are based on precipitation compared to climatology
[33:39] normalized difference vegetation index it's widely used as a metric for vegetation health and phenology and it's a measure of vegetation greenness it
[33:50] ranges from -1 to 1 negative values to zero means there is there are no green leaves present values closer to one
[34:00] indicate the highest possible density of green leaves and it is set out based on near infrared and red spectral
[34:09] reflectance ratios as shown here you can see here this is the Woolsey Fire case again the ndvi can be seen uh in in this
[34:20] you can see a lot of brown area where there is a negative ndvi this brings us to the case studies we
[34:30] are going to work with today and that's recent fires in U.S and Canada the first case study that we're going to
[34:38] focus on and Sean is going to demonstrate is wool Z fire that this fire started on November 8
[34:46] 2018 in the Woolsey canyon near Los Angeles and Ventura counties in Southern California California the fire burned almost 100 000 acres of
[34:57] land and there was an estimated of 6 billion dollars damage to infrastructure because of the fire the fire started when power lines aren't
[35:08] igniting dry grasses in Woolsey Canyon and was spread rapidly by strong Santa Ana winds which which usually blow in
[35:17] southern Californians it's part of their climate system second case that we are looking at is fires in Quebec in 2023
[35:28] in Canada this year overall 3.3 million hectares land has been burned due to fires fires but the fires that we are talking about
[35:38] they occurred in early June worse in Quebec with about 160 fires and 100 000 people uh displaced here you can see a
[35:49] snapshot from NASA world view showing these red areas are the areas where there are fires from Modis and Weirs and
[35:58] this was taken on June 6th of this year and you can see multiple fires in this area
[36:05] area a strong system off the coast of Nova Scotia Scotia forced smoke smoke from this fire South
[36:13] into the U.S and for several days it was quite Smoky all the way down to here in
[36:19] Washington area as well so here's an example of how her observation can can help us see fire
[36:30] risk so this snapshot is shown from Mera 2 surface skin temperature anomalies that's departure from long-term mean
[36:40] between between 2001-2022 and you can see that this area was much warmer than normal uh for month
[36:50] of June month of May this is like pre-fire when the fire occurred early June uh similarly I emerge precipitation
[36:59] anomalies for May of 2023 it shows almost everywhere it was below normal so it was pretty dry and warm and this
[37:11] shows dry and warm anomalies indicating fire risk so these are the areas where you do see a lot of fires occurring
[37:21] in Canada so this is one way to look at Earth observations and quickly see anomalies to identify areas of areas of
[37:31] risk for fire so now we will have demonstration um of these fire uh risk pre-fire risk assessment uh using GE
[37:44] before I hand it over to Sean for demonstration uh here's the introduction to Google Earth engine for those of you
[37:52] who are new or you have not used uh g-e-e takes advantage of cloud computing capabilities to provide users with a
[38:02] single place for accessing satellite data applying remote sensing methodologies and displaying analysis results so you can have data you can
[38:13] have your own algorithm and then you can apply results to your area ge's application programming interface or API allows users to easily apply
[38:27] land cover monitoring algorithms and other algorithms and classifications with coded commands so it's a versatile tool and a lot of information can be
[38:40] found there are online tutorials they're ready-made codes they're available online uh it's a cloud-based raster Computing and that removes barriers and
[38:52] limitations related to data hosting and Storage Storage imagery access and availability and personal Computing capabilities that means you don't really have to download
[39:03] data you just go to this cloud-based tool and do raster Computing right on on this site and look visualize it you can
[39:14] upload your own shape files you can upload your own data as well and do processing without downloading large
[39:21] amount of data so it's a central repository for a lot of data as well and gee is free for
[39:29] scientists researchers and developers however you have to register with Google Earth engine and you have to have a
[39:36] username and password to use it [Music] [Music] generally there is application programming interface that is used to
[39:44] program and work with GE the art engine JavaScript API is currently the most widely used method of working with GE
[39:55] but there is also a python API through Google collaboratory or collab that can be used if you are interested in using
[40:05] python a little bit of work is required for that JavaScript API is quite common and it's very widely used as mentioned here
[40:18] so uses of GE for satellite image very analysis it includes automation of data processing and display near real-time
[40:28] monitoring it's limited to availability of data in the catalog not all data sets are available in near real time but many
[40:36] are machine learning algorithm applications are available graphical user interface implementation is there so there are several functionality that
[40:47] are very useful for satellite image during analysis in GE so with that introduction I'm going to hand it over to Sean McCartney he's
[40:57] going to use GE and walk us through how to access some of the satellite data that we were introduced earlier
[41:06] um and how to calculate SBI and anomalies to look at the fire risk mapping mapping so Sean
[41:21] thank you Amita the following case study will demonstrate how to calculate the standardized precipitation index soil moisture and vegetation anomalies and
[41:31] demonstrate how to delineate river basins and sub basins for a watershed of Interest as Hamida mentioned earlier the
[41:38] standardized precipitation index or SPI is a z-score deviation from the mean in units of standard deviation calculated
[41:47] from the chirps precipitation values for each pixel location during a given reference period the script we're using today was adapted
[41:56] from the United Nations drought monitoring using the standardized precipitation index we've included a link to that in the commented section at
[42:04] the top of the script monthly SPI will be calculated based on daily chirps data since 1981 which will
[42:13] be summed to monthly precipitation data for our analysis as precipitation is usually not normally distributed a gamma probability function
[42:22] is commonly used but is not supported in the script the resulting SPI values are therefore used as an estimator
[42:31] the first step in this process is defining our area of Interest or aoi to do so we use the polygon tool in the
[42:41] top left corner of the map pane to draw a bounding box around our study area so to do so we're going to go ahead and
[42:49] create a new layer and we're going to create a we're going to use the draw a rectangle geometry and we're going to go
[42:55] ahead and draw in this case this is just as a reference I've already created a bounding box or an area of interest but
[43:02] this is just to walk you through the steps see that you see it for yourself so after we've created that bounding box
[43:08] we're then going to go to the Gear wheel and we're going to rename the bounding box that we just created and we're going
[43:15] to rename it aoi which stands for area of Interest then under the name you can see that
[43:22] there is a import as option it's very important that we change this from geometry to feature collection
[43:30] and those are the steps involved in creating our area of interest I'm going to delete this because I've actually
[43:36] already created an area of interest already I just wanted to walk you through the steps so that you could see
[43:41] it for yourself if we scroll down in the code a little bit further now that we have our area of
[43:48] Interest defined we can see that in lines 48 and 49 we will be setting the base map to be satellite view and we'll
[43:58] also Center the map window on the defined area of Interest or aoi as well as establishing the zoom level in this
[44:05] case we've set the map Center at the aoi and we've used six as the zoom level you
[44:12] might need to change this parameter for the zoom level most appropriate for your area your area of interest when you're
[44:18] doing this calculation The Next Step skipping down is to set the time frame for our analysis in line
[44:26] 58 we create a variable named first image to obtain the first chirps daily data from the time series and again that
[44:34] first image is from 1981. since the data are indexed we used 0 to get the first image in the time series
[44:42] line 59 defines a new variable latest image and assigns an earth image date of June 1st 2023.
[44:54] since chirps data have a spatial resolution of 0.05 degrees which corresponds to approximately 5550 meters at the equator
[45:04] we Define a variable resolution and assign the value 5550 meters as the spatial resolution of our Terps data
[45:15] the next section of code that I'm highlighting here from lines roughly 72 to 85 sets the time scale of our analysis for SPI
[45:26] meteorologists usually recognize one month as the shortest time scale for the calculation of SBI shorter time scales might underlie
[45:35] random fluctuations in precipitation so it's always good to choose one month or greater when calculating SPI SPI can also be calculated for longer
[45:44] time scales of one month like three months six months 12 months or even 24 months months the following settings will give you the
[45:52] possibility to set your own time frame for the calculation of spi it is important to note that for this code SBI
[45:59] calculations only work for the following quantity of months and for those quantity amounts I'm highlighting them right here so that's one two three four
[46:07] five six seven eight nine ten eleven twelve twenty four and forty eight for example 18 which corresponds to a year
[46:14] and a half would not work so it's good to use only the months that are provided here highlighted for your analysis of
[46:20] SBI line 84 defines a variable named time step step where we select the value 2 as the
[46:30] number of months for our analysis setting the time step to 3 would calculate SBI for three months setting
[46:37] the time step to six would calculate SPI for six months Etc but again we're just going to use the value 2 because we want
[46:44] to calculate the standardized precipitation index for two months the two months leading up to June of 2023.
[46:55] this next line of code in line 91 just basically says that we want interactive chart to show and we're setting that to
[47:03] true then starting at line 97 we're defining a variable which we're naming threshold months and we're going to set that Threshold at 12
[47:16] coinciding with one year and then in line 100 we're defining a variable named time diff and we're
[47:24] creating a list with a lag of one month between each list entry starting from the latest image counting backwards
[47:33] and line 103 we're defining a variable named list and we're creating a simple list indexed from zero sequentially to
[47:40] fit to the variable defined above then from lines 106 to 112 what we're doing is we're defining a variable named
[47:51] Timeless date to map the dates beginning with the latest image of the months ends over the list counting backward in time
[48:00] we're then printing the dates from the list to the console Tab and we can see that here if we go to the console tab
[48:06] which I'm circling on the right of the screen the top right of the screen we can see that we have a list here 255
[48:13] elements elements and we can see that starting from June of 2023 and each time step is going back
[48:19] in time from the index of zero we're going back two months and we're going back from the most recent which is June
[48:27] of 2023 and we're going all the way back to the very first chirps image which is from February of 1981.
[48:36] so what we're doing in that block of code that we just ran was basically printing the list of dates to the
[48:43] console tab then in line 115 we're defining a variable sorted time list to sort the list above according to
[48:55] their dates then this next big chunk of code here from roughly from lines 118 to lines 140
[49:04] we're defining a variable precipitation sum and we're mapping a function calculating the monthly sum of chirps just those images will be kept whose
[49:13] time frame corresponds to the user provided number of months in line 144 we're defining another another variable named summed chirps
[49:26] collection and we're copying the properties of the chirps collection to the monthly collection and then in this big chunk of code here
[49:35] from line 149 to line 203 what we're doing here is we're determining the approach to calculate SBI based on the number of months
[49:48] if the number of months is less than 12 months the day of year information has to be used to find the correct images
[49:55] if SPI is calculated for 12 or more months the day of your information is not necessary depending on your approach
[50:02] if you're calculating SPI for two or three or six or even up to 12 then again you'll be using a different approach
[50:10] and after at the at the bottom of each of these calculations SBI is being performed to subtract the mean
[50:17] precipitation from the selected month with the result divided by the standard deviation to make that calculation and that's what this big block of code
[50:25] is doing so depending on the time step that you're using a different a different algorithm will be used
[50:34] and then from lines 207 to 215 we're using a print statement for the time period of the analysis and we're
[50:44] defining a variable SPI monthly Vis which we are using as visualization parameters and finally we're adding the
[50:51] SPI results as a layer to the map window using the naming convention provided in line 215. since we selected June 1st 2023 as the
[51:03] last image for the analysis and the reason why we did this is because this was a peak time of the fires burning in
[51:09] Quebec Canada that's why we selected June 2023. um we're going to be using two months as a Time step for SPI calculation and
[51:19] finally the name of the layer will appear in the in the map window and it will be using the naming convention that
[51:25] we're using in that last line which would be SPI 2 from April 2023. and then in this block of code here
[51:40] I'm sorry from lines 220 to 243 we're defining variables to plot monthly precipitation across the time series of trips data
[51:50] within the area of Interest then print those charts to the console tab lines lines 246 to 261.
[52:03] Define variables to plot two-month SPI values within our area of interest from the beginning of the trips time series
[52:09] through June 2023 and if we go to the console tab on the right we can actually see that when we run this code and we
[52:16] print these charts to the console window we get the results and if you want a larger image you can go to this pop out
[52:23] here and it'll create a new tab with the chart in in any Tab and we can also do
[52:29] that for the SPI two-month chart based on mean values within the area of Interest as well so there's just another way of
[52:37] charting out the results from our SPI analysis and then from lines 266 to 313 we are creating an inspector chart for
[52:54] SPI values the chart with SPI values will only appear when we use the inspector Tab and click on a given pixel within the map
[53:02] window which I will demonstrate after we've run the code and then line 315 we print the list of dates for SPI 2 to
[53:13] the console tab and in line 317 we print the metadata of the chirps image collection coinciding with SPI 2
[53:23] to the console tab and we can see that if we scroll down again we're on the right hand side here
[53:27] we see the console Tab and if we go down we can see sure enough the list of dates
[53:32] for SPI 2 and then also we can also see the trips collection with SBI 2 which has the metadata included within all of
[53:43] these so it's just more way of viewing the results of the the SPI from the Terps data
[53:55] and lastly from lines 322 to 329 we're creating a title for the map window and we're going to set its
[54:05] position so before I go any further I'm going to go ahead and I'm going to click run so we can actually see the results
[54:11] of what we've done so far we can see that using our defined area of Interest very soon in the map window
[54:19] we'll start to see the results of the two-month standardized precipitation index index which is going back two months from June
[54:29] of 2023 and in the map window anything in red or orange or yellow coincides to negative SPI values and anything in green and
[54:43] blue are positive SBI values and again these are viewed as z-scores away from the mean and if we use the inspector tab
[54:51] which again it's up here on the upper right if we click on any of the values I'm going to choose a value in red
[54:57] because these are negative SPI values meaning there's a deficit of precipitation compared to the long-term mean what we can see is based on the
[55:07] pixel that the long lat which is given here for when we're looking at the inspector we can also go down and we can
[55:14] see that the the SPI value here is basically negative two it's negative 1.98 so just rounding up that's a
[55:23] negative 2 value which means that there is a strong deficit of precipitation compared to the long-term mean for that
[55:30] exact pixel and in the code we also embedded the ability to have for that specific pixel the SPI 2
[55:39] for that pixel so that this was also a block of code that we included in our script and again we can we can pop that
[55:47] we can pop this out using the pop out window to go to another tab so moving on in the script from SPI now
[55:57] that we have established for the province of Quebec and for the surrounding provinces as well the precipitation anomalies we're now going
[56:05] to move on to the soil moisture anomalies so moving on we will now move to Drought monitoring
[56:14] using the soil moisture active passive or smap Mission which will help us to assess soil moisture anomalies within
[56:21] our area of Interest and to learn more about this map level 4 image collection we can copy this file
[56:27] path which we have right here if you're interested in learning more about it so what I'm going to do is I'm going to use
[56:33] Ctrl C and then up at the search bar I'm going to paste that and we can see that
[56:39] it gives two options for data sets what we're using here is this level 4 Global three hourly nine kilometer surface and
[56:47] root Zone soil moisture so if I click on that we can learn more about the the data set and if we want to open this in
[56:53] a new tab and learn even more we can use this pop out so we can pop that out and
[56:57] then this takes us to an earth engine page which gives us a lot more information about description of the
[57:04] data set the bands that are provided in this data set as well as terms of use and citations so these are all
[57:11] just nice convenient features that we can have for learning more about the data if we're not familiar with the smap
[57:19] data set next thing we're going to do in line 341 after we've defined that variable to for
[57:26] the image collection specific to that smap level four we're going to filter it based on the date which is May 20th and
[57:34] May 21st this is a 30-day window in which the anomaly will be will be assessed so because we're interested in
[57:44] the beginning of June we picked May 20th as the 30-day window in which to assess soil moisture anomalies
[57:53] and moving down in line 344 we Define a variable smsa which stands for soil moisture surface anomalies to
[58:03] select a specific band within the image the smap image collection which corresponds to the soil moisture surface
[58:09] anomalies anomalies and then moving down in line 347 we're defining a variable named image and we're returning the first image from the
[58:18] filtered dates and we're clipping it to our aoi or area of Interest and then from lines 350 through 353
[58:30] we're defining a variable to Output a histogram of soil moisture anomaly values within our area of interest and
[58:37] use a print statement to Output the histogram values to the console tab so if we go back to the console tab here
[58:42] and we scroll down we can see that this this histogram is here and we can actually use the pop-out window to
[58:50] create a new tab and we can actually visualize the spread of soil moisture anomaly values within our within our
[58:58] area of Interest [Music] [Music] um um uh the histogram of soil moisture surface anomaly values will help us to
[59:07] determine the visualization parameters for when we want to add the soil surface soil moisture anomalies to the map
[59:15] window which is viewing the having gone through the histogram I was able to use that to determine the Min and Max values
[59:23] for visualization so in lines 356 to 360 all we're doing is defining a variable for the visualization parameters for the
[59:32] soil moisture anomalies and then lastly in line 363 we're going to add that as a map layer and we can actually go down to
[59:40] the layers here and we can see it's not turned on but I can turn it on and that
[59:46] would be the soil moisture anomaly for the May 20th 2023 in this case the Bluer colors being positive soil moisture
[59:56] values for anomalies and red values being negative soil moisture values so those would be negative anomalies for or
[1:00:04] the area of Interest so now that we have mapped precipitation anomalies and soil moisture anomalies the next block of code will deal with
[1:00:16] the vegetation anomalies using the surface Reflections data from the Modis instrument instrument for those unfamiliar with the normalized
[1:00:24] difference vegetation index or ndvi this index is generated from the near infrared and red bands using the
[1:00:31] equation provided in line 371 nvi anomaly images are useful as a measure of drought and fire risk when
[1:00:41] compared to normal plant Health positive ndvi values represent dense and Greener plant vegetation compared to the long-term mean negative ndvi values
[1:00:52] represent less green vegetation useful as a measure of drought when compared to normal plant health oh I'm sorry about this I accidentally
[1:01:17] kicked the wrong thing perfect so in line 381 we're defining a variable named point for a longitude and latitude in
[1:01:25] Quebec Canada where wildfires are blazing as of June 2023 this location will be used to chart a Time series of
[1:01:32] ndvi anomalies at that longitude and latitude so this just gives us one more way of drilling on down from not only
[1:01:39] from the entire area of interest but also to a specific location and this will be seen later in the
[1:01:47] script when we uh when we look at more of the charts and in line 384 we're defining a variable ndvi for the Terra
[1:01:56] Modis vegetation indices 16-day global data set which is a 250 meter spatial resolution resolution and if you're interested in learning
[1:02:06] more about this data set again you can just use a control C or copy and we can
[1:02:12] go up to this search window and the result comes up instantaneous and when I click on it we can learn a lot more
[1:02:19] about this data set if you're interested and again we can use this pop-out window to open up a new tab to be able to
[1:02:25] explore all the different bands like ndvi evi solar Zenith Etc these are just different bands and bit masks that are
[1:02:35] used for this as well as citations and and descriptions so all useful information and very just one click or
[1:02:43] two away if you're interested in learning more about the data so in line 387 we're defining a variable
[1:02:50] named ndvi to select the ndvi band specifically from the image collection and then in lines uh 389 we're creating a function to
[1:03:02] apply a scale factor to the ndvi image the scale factor is necessary to normalize the values between negative
[1:03:09] one and one in line 396 we're defining a variable modus ndvi to map the scale factor to
[1:03:17] the entire image collection using the function that we just created above and then in line 399 to 404 we're
[1:03:28] creating a function to convert the long-term mean value for each month of the calendar year and then in lines 406 to 410
[1:03:39] we are defining a start date for the ndvi time series as well as defining the number of months in the ndvi time series
[1:03:47] from the start date to a defined end date so it's really important that this end date depending on the month of
[1:03:54] interest for your study period that you determine what this end month will be because that will help determine uh how
[1:04:03] the the ndvi anomalies are calculated for your month of Interest so it's really important that you change this
[1:04:09] parameter for your study period and moving on from lines 413 to 417 what we're doing here is defining a variable to create a
[1:04:22] function to index the sequence of dates from March of 2000 to May of 2023 and then we're printing the results to the
[1:04:31] console tab so if we go over to the console tab here again we can click down here and we can see that yes all these
[1:04:38] list of dates are in fact sequentially in order and then moving right along we can see that in lines 420 to 426 what
[1:04:51] we're doing is grouping the results by month and then reducing within groups by the mean the result is an image collection with
[1:04:59] one image for each month and lines 428 to 433 subtract the monthly mean from the long-term mean to
[1:05:08] calculate the ndvi anomaly and then line four line 436 we're defining a variable to convert the image
[1:05:19] collection to a single image with many bands and each band equating to one month within the time series
[1:05:29] and then uh from lines 443 to 4 uh 48 we're adding the ndvi layer to the map
[1:05:36] window calling the band name of your choice in this example we are calling element 278 which is associated with May
[1:05:43] 2023 uh we're also setting the Min and Max and DVI values and we're defining a palette to visualize the map and
[1:05:51] defining the layer name for the map window window and then in lines 451 to 459 we're defining a variable chart to chart a
[1:06:00] Time series of ndvi anomaly based on the point variable that long lat longitude latitude that we already defined above
[1:06:07] based on that location and lastly we will use a print statement to print the chart to the console tab so if we scroll
[1:06:14] down here we can see that yes here is the band mean across all the images and we can pop this out again
[1:06:21] for in a different tab just different ways of exploring the data in this case it will be for the for that location
[1:06:36] okay okay so now that we've created our vegetation anomalies we will move on to mapping our firm's active fire data
[1:06:57] in lines 467 to 469 we Define a variable for the fire information for resource management system or firms this is an image
[1:07:07] collection of active fires that are burning and we're going to select band t21 which is the brightness temperature
[1:07:14] of a fire pixel using Modis channels 21 and 22 and this brightness temperature is in Kelvin we then filter the date of the firm's
[1:07:23] image collection to June 6 through June 7th 2023 coinciding with the date of the active Quebec fires
[1:07:33] next we Define a variable in line 472 for the first image from the filter dates and again those filter dates are
[1:07:42] June 6th to June 7th 2023. in lines 475 to 479 we Define a variable for visualization parameters to display
[1:07:51] the firm's data in the map window and lastly in line 482 we add the firm's fire data to the map window using the
[1:07:59] visualization parameters defined above as well as Define the layer name for the actifier image to display in the map
[1:08:05] window and again if we go down to the layers we can start clicking on these so for fire firms fire detection we can
[1:08:12] turn this on and we can see for the dates that we specified June 6th and June 7th where the active fires were
[1:08:19] burning let's give it a second here we go we can actually see a lot of those fires are in
[1:08:28] this region right here and if we turn on ndvi anomalies we can also see that a lot of those fires are in fact in areas
[1:08:36] in red which would be vegetation Health Which is less green than the long-term average so just different ways of
[1:08:46] visualizing the results and moving right along now that we have our active fire data for our case study the last data set we
[1:08:57] will bring into the script is hydro hydro sheds basins the next section of code acquires River sub basins using the hydrosheds project
[1:09:06] initiated in 2006 by the World Wildlife Fund in the United States with the goal to create free Digital Data layers in
[1:09:14] support of large-scale hydro ecological research and applications worldwide hydration Hydro basins is one of their products generated from the shuttle
[1:09:23] radar topography Mission or srtm and represents a series of vectorized polygon layers that depict sub Basin boundaries at a global scale
[1:09:34] there are 12 Hydro Basin levels corresponding to different levels of sub basins basins in this case study we'll be using hydro
[1:09:43] basin's level 9 and 7 but again for your for your study area you might choose to use different sub Basin levels but again
[1:09:53] for this case study we'll be using levels nine and seven so in line in line 497 we will Define a variable for the hydro
[1:10:05] basins level 9 feature collection in lines 500 to 503 we Define the visualization parameters and in lines 506 to 509
[1:10:18] we draw the visualization parameters to the hydro basins level 9 feature collection and add the level 9 sub
[1:10:23] basins to the map window and Define the layer name so if we go down here we can
[1:10:28] actually turn that on and we will see that these are the level 9 sub basins and then for uh starting in lines 512
[1:10:43] uh to 524 we repeat the same process using hydro basins level 7 data and scrolling down almost to the end of
[1:10:54] the script here in this commented section for those wanting to export the SPI data or any other layer that we've
[1:11:01] created in this case study to your Google Drive you can uncomment the block of code shown in lines 532 to 540.
[1:11:10] uncommenting the code will allow you to export the image to your Google Google Drive specifying the coordinate
[1:11:16] reference system now this case study was specific to the Canadian fires burning in the province of Quebec in June of 2023 so again what
[1:11:26] we're able to do is look at the standardized precipitation index from April of 2023 to to June of 2023 for the
[1:11:36] area of interest that we defined and then what we did is we also created soil moisture anomalies and this was a
[1:11:43] 30-day window which was built around May 20th 2023 so that we can assess the soil moisture anomalies within our area of
[1:11:52] interest and we can see for a lot of the area that we are interested in there are
[1:11:57] negative soil moisture anomaly values and again if we turn on the firm's fire detection data on top of the soil
[1:12:04] moisture anomalies we should be able to see that in fact they do overlap in terms of where the fires are and where
[1:12:12] the soil moisture anomalies are there we go and then we can also turn on the we can also calculated ndvia ndvi
[1:12:26] anomalies these are vegetation anomalies for May of 2023 so we can see that just one more layer of assessing soil
[1:12:34] moisture precipitation vegetation health for fire risk and then we also brought in level seven Hydro basins and we also
[1:12:45] brought in level nine Hydro Basin which is these are sub basins within our area of Interest and so this was for one case study and
[1:12:55] we also showed how to export the images to your Google drive if you wanted to bring them into a GIS and do further
[1:13:02] analysis but quickly what we're going to do is jump to a different we're going to uh we're going to go to a
[1:13:13] different different um um script that we've created and I'm going to go ahead and run the script and it's basically doing the same
[1:13:21] thing that we the same steps the same data sets only in this case we're using a different study area and a study
[1:13:29] period we're going to be looking at the Woolsey fire in around Malibu in Southern California in the United States
[1:13:37] and this fire took place in November of 2018 2018 it ravaged the Santa Monica Foothills as well as the area just to the west of Los
[1:13:48] Angeles the Los Angeles Basin San Fernando Basin and it heavily impacted the Malibu hills around the city of
[1:13:54] Malibu and so what we're looking at here again if we pan out for those that might be interested exactly where this is we
[1:14:03] can see the South Western part of the United States and then specifically in the in the southern extreme southern
[1:14:11] part of California we can see that this is the area of interest in which we are performing the analysis
[1:14:19] and we're going through the same steps first we're going to create our area of Interest Interest and again we did that by using the draw
[1:14:27] a rectangle tool and once we had our area of Interest defined we were able to start bringing in different data sets in
[1:14:34] this case this was the the chirps data we set the base map we set the area of
[1:14:39] interest and we also defined at the zoom level we set the first date in the range which is the first image from chirps in
[1:14:48] 1981 and in this case we set the latest image of November 2018 which is when November 1st which is when the the fires
[1:14:57] were taking place that month of November so we want to be able to assess the SPI for leading up to that month in terms of
[1:15:05] precipitation again we set the spatial resolution in this case we're setting the SPI to 12 months so instead of two
[1:15:12] months like the previous script we're setting it to 12 months and then we're going through all the same steps as we
[1:15:17] went through in the last script nothing has changed here in terms of how we're calculating the standardized
[1:15:22] precipitation index then we're going to add that these different different results to the console tab so that we
[1:15:31] can view them this case this is the 12-month precipitation time series based on chirps and we can also see uh we're also
[1:15:40] creating charts of the SPI and then we're also creating a list of dates so that we can index all of these different
[1:15:47] months that we're calculating and next we're going to add that layer which we've already done in the map window and
[1:15:53] then we can move on to creating the soil moisture anomalies which we're doing here we're using the
[1:16:00] same data set as before only this time we're filtering the dates from uh from November I'm sorry from October October
[1:16:08] 20th to 21st and again this is a 30-day window of soil moisture anomalies and we're going to clip those the results to
[1:16:16] the area of interest and then we can add them to the map window so that we can
[1:16:20] see what those soy moisture anomaly values were leading up to this devastating fire that took place this
[1:16:26] Woolsey fire in November of 2018. next thing we're going to do is we're going to to calculate ndvi anomalies so we're going
[1:16:33] to go through the same process before only this time we're going to change the longitude and latitude this is for an
[1:16:38] area of Interest or a location of Interest here in the around the Woolsey fire we're going to use the same data
[1:16:44] set as before this Modis vegetation indices and then we're going to select the ndbi band out of the image
[1:16:51] collection and then we're going to calculate the anomalies and we're going to add the anomalies to the map window which we can visualize
[1:17:00] here here and then next we're going to look at the firm's active fire data so we're going
[1:17:07] to filter the firms collection to November 9th through November November 10th and that is the the day when the
[1:17:14] fires were raging in the Malibu Foothills we're going to select the band from the firm's image collection we're
[1:17:20] going to establish visualization parameters and then we're going to add the map layer to the map window giving
[1:17:29] it a defined name which in this case is firms fire detection on November 9th 2018 and we can see that yes a lot of
[1:17:38] the fires were burning in these Foothills just outside of the city of Malibu in Southern California and next
[1:17:45] we're going to add the hydro hydroseeds basins so that we can visualize where the fires are burning in terms of which
[1:17:50] sub Basin and again we're going to use hydro basins level 9 and level 7 and we'll be able to add those to the map
[1:17:57] window as well so that we can see where exactly these fires were burning in reference to these different sub basins
[1:18:06] and then lastly we're going to provide the opportunity if um if so chosen to be able to export the
[1:18:13] data to your Google Drive so this concludes the case study demonstrations for both the uh quick Quebec fires in
[1:18:24] Canada from June of 2023 as well as the the soil moisture vegetation precipitation anomalies as well as
[1:18:35] actifiers and sub basins for the Woolsey fire which took place in November of 2018. so I want to hand it back to Amita
[1:18:44] to wrap things up and I want to thank you all for your patience and I made it
[1:18:48] back over to you for the great demonstration Sean this concludes today's session so here's a brief summary of what we saw
[1:19:01] today today we introduced remote sensing satellites and sensors relevant to fire risk assessments reviewed important indicators for assessing fire risk and
[1:19:12] remote sensing based tools for analyzing them them selected appropriate data from satellites for a watershed of Interest
[1:19:21] introduced examples of pre-fire criteria for fire risk in watersheds we used gee to demonstrate how to be
[1:19:29] linear River basis subspacings for a watershed of interest and finally we saw how to use GE to calculate anomalies in
[1:19:38] biophysical and meteological conditions for a watershed of Interest you will have chance to work with GE and
[1:19:46] replicate some of the codes that Sean demonstrated looking ahead to part two next week we will have Ibrahim Muhammad and menta
[1:19:58] Lopez giving information about SWOT so we'll get familiar with how to run the soil and water assessment to
[1:20:07] model by ingesting remote sensing data to predict the post-fire impact on sediment in a watershed here's just a reminder about homework
[1:20:17] and certificates there will be one homework assignment that will be posted on July 13th on the rset website on
[1:20:25] answers must be submitted via Google forms and the due date for homework is 27th of July Parts 1 and 3 will include
[1:20:33] Hands-On exercises to assess pre-fire risk and post-fire impact on a watershed using Google Earth engine you will be instructed to submit results
[1:20:43] of these exercises to a Google drive folder by July 27th those of you who attend all three live
[1:20:51] webinars complete the homework assignment by the deadline you will receive certificate of completion approximately two months after
[1:21:00] completion of the course here's our contact information ourset website follow us on Twitter and here are our sister programs please
[1:21:13] check them out so now we will switch to Quest question and answer session so please put your
[1:21:22] questions in the question box and we will address them in the order that they are received thank you
[1:21:34] we have received a few questions here I'm going to read the question uh if we perform special
[1:21:49] resampling can we use all the bands of Sentinel 2A for analysis uh yes you can um you can resample the data and gee
[1:22:01] would would allow you can do that on GE so this is common process performed on remote sensing bands to normalize and the
[1:22:13] special resolution of imagery you have to be aware that the information in a given pixel can change when you resample
[1:22:21] from one special resolution to another say from 10 from 20 to 10 or 10 to 20. there are a number of methods to
[1:22:31] resample the bands of Sentinel to amsi imagery such as nearest neighbor bilinear interpolation and cubic convolution and it's good to be mindful
[1:22:42] that resampling always involves data loss and should be used judiciously how do we get vegetation height information from remote sensing uh shown
[1:22:59] you you may want to take that or yeah sure thank you so much Amita and again we do apologize for the technical
[1:23:06] issues everybody uh thank you for your patience uh and again I think that Natasha added a link that to all of the
[1:23:13] the presentation slides uh in the in the window so please do access the slides there and all of the code that was
[1:23:20] demonstrated today is also you have access to that code within those slides so if you uh again we do apologize for
[1:23:27] the the um the lack of of the uh completion to that demonstration but again all of the
[1:23:32] code you do have access to and we will have a video uh for the this uh an
[1:23:38] edited video that will not have any of the technical difficulties we will have this uh for you within the next couple
[1:23:45] of days so again thank you everybody for your patience um but the answer to question two how do
[1:23:50] we get vegetation height information for boat sensing there are a number of different missions uh NASA missions as well as other
[1:23:57] International Space agencies some of these are aerial based platforms so they're flown on planes some of them are
[1:24:04] space-based and we've just listed a few of them here uh for example there are some Airborne lidar instruments on on
[1:24:12] planes they provide three-dimensional Point clouds and you can use different software and different algorithms both in python as also in different GIS
[1:24:22] platforms and and these can be converted into digital train models which will provide vegetation height if that is
[1:24:29] something of Interest it sounds like to the person that asks this question there's also a space-based lidar
[1:24:34] instrument on the International Space Station it's called the global ecosystems Dynamic investigation lidar or Jedi and this provides for vegetation
[1:24:44] height but this is at coarser spatial resolution than field scale so this is more 250 500 meter Etc but it is still
[1:24:51] useful if you're calculating say more Forest sand height that might be of interest for your analysis and there are
[1:24:58] also a number of ways to use l-band synthetic aperture radar or SAR data to calculate vegetation height
[1:25:05] um a lot of the studies that have done this have used the AOL alos2 data this was the joint Mission between uh jaxa
[1:25:13] the Japanese space agency and NASA and uh and then also NASA will be launching uh next year another l-band mission an
[1:25:21] Alban SAR instrument and this will be on the uh the Nisar Mission or nysar depending on how one pronounces it this
[1:25:28] will be launching next year so if this is an application of interest to the the to the community definitely I would say
[1:25:34] refer to the methods that have been developed using the alos2 data and then they will be applicable to the upcoming
[1:25:42] the nysar mission and for those that are interested in this application of using SAR data to calculate uh vegetation
[1:25:48] height we will we have provided a link to a resource this is provided by our set's sister capacity building program
[1:25:57] severe and they have created a sar handbook which you can use as a reference and they actually uh one of
[1:26:03] the chapters is specific to couch living vegetation height from the AL os2 data so we do reference that for your for
[1:26:11] your own interest and I will hand it back to Amita thank you um okay question number three uh what do
[1:26:23] negative values of the ndvi mean in theory so good question and there's a lot of literature on this so if if the
[1:26:29] if the user wants to do some literature review there's definitely a lot of hits on the internet uh that you can get but
[1:26:34] basically it's the uh the difference between near infrared and red reflectance and so if it's negative that
[1:26:41] means that the near infrared is less than the uh the red uh spectrum and so the absorption of near infrared
[1:26:49] wavelength is less uh in red wavelength and when vegetation is dry and this can be a feature of dry or less green
[1:26:56] vegetation and very specifically negative values can be highly indicative if you have any water bodies so any
[1:27:03] lakes ponds rivers etc those are definitely going to turn up as negative values uh when you create this index and
[1:27:09] also clouds can also appear negative as well just due to the the spectral reflectances between the near infrared
[1:27:15] and red bands so those are really probably going to stand out pretty contrast the in when you when you do
[1:27:22] this index On Any Given area of Interest moving on to question number four sometimes data isn't available in the
[1:27:30] earth engine catalog for example for some areas Sentinel 2 Data isn't available for more than 15 days although
[1:27:37] the temporal resolution of Sentinel 2 is much lesser that is correct Sentinel 2 typically you can get it within a week
[1:27:45] because there are two different Sentinels at least there were until one stop working which provided a high
[1:27:51] temporal resolution and so this uh this user is asking why is this why is the earth engine catalog not providing all
[1:27:58] the Sentinel to data this could be due to orbital gaps sometimes they're just data gaps in these missions and once
[1:28:05] they correct whatever the air is then they can you know start downlinking more of that data but there sometimes there
[1:28:11] are gaps in the in the time series of that data so if you see any missing data
[1:28:16] it could be a data outage for some reason and we've also provided a link to the news feed on the Copernicus site Hub
[1:28:24] Copernicus is the one that serves up all the different Sentinel all the different from Sentinel one through five and so if
[1:28:31] you are noticing any recent gaps in the data please go to the news feed and then they will there will be
[1:28:38] notifications for all the data gaps on that on that link that we've provided so we do hope you'll use that as a resource
[1:28:43] question number five may I ask for a preference point of view some variables were named first last
[1:28:51] that's lowercase f first and then uppercase L last and others were named and it was uh the both caps on the first
[1:29:00] and last letter of first and last I know it is not a catastrophic question but I I may know the developers preferences in
[1:29:07] variable naming so this is such a good question I've had many I can't say philosophical conversations about this
[1:29:13] but it's definitely been a point of conversation for myself and colleagues and Friends Etc on proper or appropriate
[1:29:19] practices or best practices in in naming conventions conventions um so it really is a matter of style the
[1:29:25] most important thing when you do go about this is to apply logic to the uh to whatever variable that you are
[1:29:31] defining and naming that's probably the most important uh in terms of tiers of of importance and again this is all my
[1:29:38] opinion opinion um so you know take that as it will but um but absolutely logic is the most
[1:29:43] important when applying to picking certain variable names and then after that it's really a preference and whatever preference that you choose make
[1:29:51] sure that you try to stay consistent as you go throughout the script that just makes it more intuitive and
[1:29:57] easy to read and it has a nice flow to it so I think consistency but most important applying logic so if you are
[1:30:04] naming you know soil moisture surface anomalies you know you might want to give it some type of name that indicates
[1:30:10] that it is such and you wouldn't want to call it some abstract name that is completely irrelevant to anything
[1:30:16] related to soil moisture Etc so I think applying logic and then being consistent in your naming convention are probably
[1:30:22] the most in my opinion the most important but there's certainly a lot of forums out there and I'm sure if you
[1:30:29] wanted to go down the rabbit hole of what other people's opinions are you certainly can't because I I think a lot
[1:30:33] of people probably do have opinions on this so question number six how can these remote sensing data be used to
[1:30:40] develop a regression model to predict forest fires due to climate change and I believe uh I mean I you might have added
[1:30:48] this answer did you want to unmute yeah so uh if I understand correctly what you're asking is how do you uh Define
[1:30:55] some kind of relationship between um say number or intensity of fires and other parameters uh either from remote
[1:31:03] sensing or so in this case uh the indicators that we showed or that Sean was demonstrating you can construct
[1:31:11] those based on remote sensing or uh V analysis model like Mera or climate model and and in your region and and try
[1:31:21] and regress with uh fire um number five so Fire frequency fire Area fire intensity and um so that that
[1:31:31] is the way to do is look at the past data and derive the relationship and then you can apply those uh coefficients
[1:31:38] that you use um with climate model prediction or projection if you like but I think important thing is to look at past data
[1:31:48] and in for that case um in that case you could like Mera to model data can be used landsat and Modis
[1:31:57] can be used um to derive a regression relationship great wonderful thank you Amita and moving on uh for the sake of time
[1:32:08] question number seven uh asks other viewers products to make vegetation anomalies uh veers of course is an
[1:32:15] instrument being flown on both NASA platforms as well as NOAA platforms that is another U.S agency and so yes there
[1:32:22] are viewers vegetation indices provided as products derived products from these different missions on both NASA and NOAA
[1:32:29] spacecraft and some of them we provide a link to are provided from the viers NASA land team these are both 500 meter and
[1:32:37] one kilometer spatial resolution and so we've provided a link for the person that asked that question below so we do
[1:32:43] hope they will use that as a reference question number eight is referring to the uh the Watershed the sub Basin
[1:32:49] levels and the difference between say a level seven and level nine sub Basin and how do you choose and I and I would I
[1:32:57] guess I would read into that by saying how do you choose for the specific analysis that this user is trying to
[1:33:04] conduct that well first I'll answer generally by saying the hydro sheds provides polygons and these are derived products from an
[1:33:12] srtm the shuttle radar topography Mission and these are Drive sub basins from that mission that NASA flew back in
[1:33:20] in 2001 2002 to derive uh Global elevation model and so these are based on 15 Arc second approximately 500 meter
[1:33:30] Earth equation uh equator resolution raster data and these watersheds range from very coarse so level one is
[1:33:37] basically uh the world so it's probably not that helpful to level 12 which is very detailed sub basins nested sub
[1:33:45] basins and this is at the finest scale using fast standard codes and for more information on the the technical
[1:33:52] document on how this product was generated we've provided this link below but getting specifically to the question
[1:33:58] uh I would say you because these are nested sub basins it really depends on the the area of Interest interest in
[1:34:06] which you want to conduct your analysis so you might find that one sub Basin is more appropriate for your level of
[1:34:13] analysis versus another and that's really going to be I wouldn't it's it's really going to be based on on your
[1:34:20] interest in the investigation in which you're conducting so I would definitely uh you know explore these different sub
[1:34:28] basins especially in your area of interest and especially with the um the say if it's an extent of a fire
[1:34:34] that sub Basin might have extended over you know multiple sub basins and maybe it makes more sense to aggregate that
[1:34:40] into a larger sub Basin or it might make sense to break those up into smaller sub basins basing on the impact to
[1:34:48] livelihood and livestock and economy and and life Etc so there is some level of subjectivity based on the analysis that
[1:34:58] that person is conducting so I would I would say explore the different sub basins and see what one is appropriate
[1:35:03] we provided in the demonstration these two different levels just so you could you know see for yourself and and and
[1:35:10] have them as a demonstration but certainly as you as you conduct your own level analysis it would be highly
[1:35:16] appropriate for you to to select the one that is uh the best for for that and it is we are now over time I guess we
[1:35:24] can get through maybe uh one or or two more questions but I think we will be wrapping up soon um so jumping to
[1:35:30] question 10 uh a lot of the sensors have a spatial resolution of greater than 30 meters how accurate are these techniques
[1:35:37] for monitoring Fires at smaller scales so I see that Amita is answering this so I will stop and let her let me just um
[1:35:46] know know this is a good question you are limited by the resolution you use but mode is nvids both are used to
[1:35:56] detect fires are 250 meters to 375 meters resolution so a pixel is usually it does show effect of a fire so you
[1:36:07] have you can detect the fire even if it is is um relatively lower resolution than 30 meters but
[1:36:16] um um if it is a very small fire or or very short duration low intensity then there
[1:36:24] may be some error but otherwise you do see see um if something like file Wildfire or forest fire you can see with Modis and
[1:36:32] virus kind of resolution now the accuracy of uh bird area is of course function of um pixel size so that is
[1:36:42] affected uh then you have to um you you're limited by the resolution but but basically you should be able to
[1:36:49] see the effect of fire on reflectances in in mode is or various type of instruments which are moderate
[1:36:57] resolution resolution great yeah thanks Amita and just to follow on what Amita was just saying you know you might have you know that fire
[1:37:05] might be you know quite small in comparison to say that you know 250 meter pixel of Modis but at the same
[1:37:13] time uh you might not have that spatial granularity but what modus is giving you is that temporal resolution so you know
[1:37:22] if if a fire is flaring up and you need to be able to catch it as soon as
[1:37:26] possible you know something like Modis that has Global coverage will be able to identify these hot spots these different
[1:37:32] areas so even though it might not be uh spreading throughout that entire pixel maybe it's just one smaller part of that
[1:37:39] 250 by 250 meter area at least you'll be able to detect it at a uh a high Cadence
[1:37:45] so then when you have an overpass of say on a cloud-free day some Optical imagery of you know Sentinel 2 or landsat eight
[1:37:54] or nine uh then you'll be able to kind of investigate with a much higher station resolution but that Modis is
[1:38:00] really important for that temporal resolution and that's really where fire especially wildfires because they can pop up at any given time are so
[1:38:07] important to have that high Tempo resolution to be able to identify in real time or or in or near real time
[1:38:13] where those fires are occurring but I I do want to say that we are six minutes over I want to thank everybody for for
[1:38:20] sticking around we want to apologize again for the technical issues that we experienced but we will have all the the
[1:38:26] presentation is currently available on the rset website and a video and unedited video with all of the
[1:38:34] um the undropped part of the demonstration that that you might have missed will be available within 24 to 48
[1:38:39] hours so we do apologize for that again and as well as all the different questions uh we know that we did not get
[1:38:44] to all the questions today but we will be answering all of them and by next week we will have all of the answers uh
[1:38:50] posted as a PDF on the training page so please do for those that did not get their question answered uh again we just
[1:38:56] ran out of time but we will be answering them and we will be cleaning up document and posting it within the week so as we
[1:39:02] wrap up I do want to just give Amita any last words if she had any final comments
[1:39:07] for our participants I know I think if you find us the question 15 I think quickly it says can
[1:39:15] we use this script to assess the fire risk for any region around the world so wherever the data are yes and gee would
[1:39:21] allow you to do that in fact in the demonstration you have a section where Sean is showing uh how to modify this
[1:39:30] script to use it for your own region and or your own time and you can try that
[1:39:36] great thank you Mita and again we want to thank all the participants uh thank you so much wherever you're joining from
[1:39:41] we do hope you'll join us uh for next Tuesday when we have part two of the training uh we do hope you'll join us
[1:39:48] all at the same time next Tuesday for that and I also want to thank all of the
[1:39:52] arsa team that has been working uh in the background to to make this training a success uh big thanks to Dr ramirecta
[1:39:58] but also want to thank colleagues Brock Levins Jonathan O'Brien Natasha Johnson Griffin Sarah cutchall someone Hudson odoi Brittany Beaudry uh and Juan Torres
[1:40:09] Perez thank you all for for all the work that you've been contributing to this training I hope you all have a wonderful
[1:40:13] day and we look forward to seeing you on Tuesday thank you
