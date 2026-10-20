# Land Surface Temperature-Based Surface Urban Heat Island Mapping, Part 1/4

`https://www.youtube.com/watch?v=t88PpJEKteQ` · id 114 · 1:02:43 · module 16 — Satellite Remote Sensing for Measuring Urban Heat Islands and Constructing Heat Vulnerability Indices

[00:03] welcome to part one of the rset training satellite remote sensing for measuring urban heat islands and constructing heat
[00:09] vulnerability indices my name is sean mccartney and i'm an arset trainer from nasa's goddard space flight center
[00:17] in this first part of the webinar series i'll be presenting and demonstrating methods for land surface temperature
[00:23] based urban heat island mapping this training is an advanced four-part webinar series covering topics ranging from land surface temperature mapping of
[00:34] urban heat islands to integrating socioeconomic data with satellite imagery for constructing heat vulnerability indices the final part of the training will
[00:43] present how to use high-resolution satellite-derived heat estimates and gridded population data to map extreme heat exposure worldwide
[00:53] there will be hands-on exercises in parts one and three for you to work with satellite imagery and learn how to
[00:59] construct your own heat vulnerability indices indices each of the four parts of the training will be one and a half hours in duration
[01:07] including presentations lab time in parts one and 3 and question and answer sessions sessions the same content will be presented at
[01:16] two different times each day please only sign up for and attend one session per day all webinar recordings presentation
[01:26] materials code and homework assignment can be accessed from the training page provided at the link below there will be one homework assignment
[01:36] for this webinar series comprising questions from all four parts of the training training be sure to follow the instructions
[01:43] carefully as some questions will involve submitting screenshots of the results from the hands-on exercises answers must be submitted via
[01:51] instructions found on the training page the due date for the homework assignment is august 25th a certificate of completion will be
[02:00] awarded to those who attend all four live webinars and complete the homework assignment by the deadline you will receive a certificate
[02:07] approximately two months after the completion of the course from marines martin the following are prerequisites for today's training if you wish to use
[02:18] today's lab time and work with the javascript code we're providing to calculate urban heat islands you'll need
[02:24] to register an account with google earth engine engine once you've registered an account using a gmail or edu email you'll have access
[02:31] to the shared repository accessing the scripts from the training the other prerequisites are the fundamentals of remote sensing course and the satellite
[02:40] remote sensing for urban heat island scores presented by rset in 2020 the first training provided more theoretical background on urban heat
[02:49] island while today's training is meant as a refresher while giving participants more time to work with the code and
[02:55] analyze satellite imagery for assessing urban heat islands in your own area of interest after participating in today's training
[03:05] attendees will be able to define what an urban heat island is and why it matters to urban planners and public health
[03:11] experts experts identify which satellites and sensors can be used for assessing urban heat islands islands analyze land surface temperature from
[03:19] landsat 8 and 9 and aqua modis using google earth engine and summarize the limitations of satellite data for understanding urban
[03:28] heat islands for those unfamiliar with the applied remote sensing training program or rsat rsat is part of nasa's applied sciences
[03:42] capacity building program rcit provides accessible relevant and cost-free training on remote sensing satellites sensors methods tools and
[03:52] applications applications trainings are offered online and in person for beginners and advanced practitioners alike trainings cover a range of data sets and
[04:01] tools and their application to air quality agriculture disasters land and water resources management our set's goal is to increase the use of
[04:13] earth science remote sensing and model data in decision making through training for professionals in the public and
[04:20] private sector environmental managers and policy makers trainings are freely available to anyone with an internet connection and
[04:28] conducted either live instructor-led instructor-led or self-guided such as our fundamentals to remote sensing since 2009 the program has reached over
[04:39] 50 000 participants from over 170 countries countries all rsap materials are freely available to use and adapt for your curriculum if
[04:48] you use the methods and data presented in rc trainings please acknowledge the nasa applied remote sensing training
[04:54] program i'll now present an overview on urban heat islands before delving into the applications of satellite remote sensing
[05:03] to monitor this phenomenon structures such as buildings roads and other infrastructure absorb and re-emit the sun's heat more than natural
[05:14] landscapes such as forests and water bodies bodies urban areas where these structures are highly concentrated and greenery is
[05:21] limited become islands of higher temperatures relative to outlying areas these pockets of heat are referred to as
[05:29] heat islands differences in temperature has to do with changes in radiative and thermal properties of impervious surfaces heat islands form as vegetation
[05:39] is replaced by asphalt and concrete for roads buildings and other structures necessary to accommodate growing populations populations these surfaces absorb rather than
[05:50] reflect the sun's heat causing surface temperatures and overall ambient temperature to rise displacing trees and vegetation minimizes the natural cooling effects of
[06:01] shading and evaporation of water from soil and leaves there are different causes for the urban heat island phenomenon
[06:10] surface albedo is a measurement of the reflectivity of solar energy on earth's surface surface the measurement varies from 0 to 1 where
[06:18] a value of 0 characterizes a surface that absorbs all incoming energy and a value of one characterizes a surface
[06:25] that reflects all incoming energy asphalt concrete and brick have very low albedos meaning they absorb rather than
[06:33] reflect the sun's heat causing surface temperatures and air temperatures to rise due to their thermal storage capacity
[06:41] capacity often heat islands build throughout the day and become more pronounced after sunset due to the slow release of heat
[06:47] from asphalt concrete and brick trees vegetation and water bodies tend to cool the air by providing shade
[06:55] transpiring water from plant leaves and evaporating surface water when we reduce vegetation in urban areas there is less shade and moisture than
[07:04] natural landscapes which contributes to higher temperatures vehicles air conditioning units buildings and industrial facilities all emit heat into the urban environment
[07:15] these sources of anthropogenic waste heat contribute to heat island effects the dimensions and spacing of buildings within a city influence wind flow and
[07:28] urban materials ability to absorb and release solar energy in heavily developed areas surfaces and structures obstructed by neighboring
[07:36] buildings become large thermal masses that cannot release their heat readily calm and clear weather conditions result in more severe heat islands by
[07:45] maximizing the amount of solar energy reaching urban surfaces and minimizing the amount of heat that can be carried
[07:51] away away conversely conversely strong winds and cloud cover suppress heat island formation geographic features can also impact the
[08:01] heat island effect large bodies of water can moderate temperature while nearby mountains can block wind or create wind patterns that
[08:08] pass through a city urban heat islands can form during the day or night in small or large cities
[08:17] and in any season of the year urban rural temperature differences are often largest during calm clear evenings
[08:24] this is because rural areas cool off faster at night than cities which retain much of the heat stored in roads
[08:30] buildings and other structures as a result the largest urban rural temperature difference or maximum heat island effect is often
[08:39] hours after sunset the diagram on the right of the slide shows the heat allen effect with the
[08:44] orange lines being the temperature in the day and the blue lines being the temperature at night parks open land and bodies of water
[08:52] create cooler areas within a city when we speak about the urban heat island effect it's good to recognize
[08:59] that there are two types of urban heat islands surface urban heat islands and atmospheric urban genomes surface urban heat islands form because
[09:08] urban surfaces absorb and emit heat to a greater extent than most natural surfaces surfaces and tend to be most intense during the
[09:17] day when the sun is shining atmospheric urban heat islands form as well as a result of warmer air in urban
[09:24] areas compared to cooler air in outlying areas areas atmospheric urban heat ions vary much less in intensity than surface heat
[09:33] islands surface urban heat islands represent the radiative temperature differences between impervious and natural surfaces and as previously mentioned tend to be
[09:45] the most intense during the day when the sun is shining the magnitude of surface urban heat islands varies with seasons but it's
[09:52] typically largest in the summer surface urban henons are primarily measured in the thermal infrared region of the electromagnetic spectrum and are
[10:00] normally observed with radiometers fixed to remote platforms these remote platforms can be satellites airplanes meteorological towers or building
[10:10] rooftops satellite thermal remote sensing has the advantage of offering global and seasonal coverage of surface heat islands and provides consistent and
[10:21] repeatable observations of the earth's surface surface satellites in particular are advantageous for observing surface heat islands at spatial scales ranging from
[10:30] neighborhoods to metropolitan regions and for enabling simultaneous and spatially continuous measurements of surface temperature across a hierarchy
[10:39] of scales when assessing surface urban heat ons using satellite imagery the intensity of the heat island can be characterized by
[10:49] the temperature difference between the average temperature of the urban core window and the average temperature of the rural window as seen in the equation
[10:57] on this slide this is the simplest quantitative indicator of the thermal modification imposed by urban areas relative to
[11:05] non-urban areas when we explore land surface temperature using satellite imagery we'll provide examples of deriving surface urban heat
[11:13] island intensity and how you can calculate this for your own area of interest so why are urban heat islands a problem
[11:22] higher daytime temperatures and reduced nighttime cooling contribute to heat related deaths and heat related illnesses illnesses heat islands can also exacerbate the
[11:32] impact of naturally occurring heat waves which many of us are currently experiencing this summer in the northern
[11:37] hemisphere hemisphere children older adults and those with existing health conditions are particularly at risk populations with low income are at
[11:47] greater risk of heat related illnesses due to poor housing conditions including lack of air conditioning and small
[11:53] living spaces and inadequate resources to find alternative shelter during a heat wave heat islands increase both overall
[12:02] electricity demand as well as peak energy demand peak demand generally occurs on hot summer weekday afternoons when offices
[12:11] and homes are running air conditioning systems lights and appliances during extreme heat events which are exacerbated by heat islands the
[12:20] increased demand for air conditioning can overload systems and require utility to institute controlled rolling brownouts or blackouts to avoid power
[12:29] outages companies that supply electricity typically rely on fossil fuel power plants to meet much of the demand
[12:38] which in turn leads to an increase in air pollution and greenhouse gas emissions emissions in addition to their impact on energy
[12:45] related emissions elevated temperatures can directly increase the rate of ground level ozone formation ground level ozone is formed when
[12:54] nitrogen oxides and volatile organic compounds react in the presence of sunlight and hot weather high temperatures of pavement and
[13:02] rooftop surfaces can heat up storm water runoff which drains into storm sewers and raises water temperatures and is
[13:09] released into streams rivers ponds and lakes lakes water temperature affects all aspects of aquatic life especially the metabolism
[13:16] and reproduction of many aquatic species rapid temperature changes in aquatic ecosystems resulting from warm storm water runoff can be particularly
[13:26] stressful and even fatal to aquatic life we'll now pivot to focus on how remote sensing can be used to monitor urban
[13:35] heat islands as stated earlier urban hedons are primarily measured by remote sensing in the thermal infrared part of the
[13:44] electromagnetic spectrum when electromagnetic radiation travels through the atmosphere it may be absorbed or scattered by the constituent
[13:52] particles of the atmosphere between approximately 10 to 12 micrometers the atmosphere has relatively low absorption absorption of
[14:00] infrared radiation emitted by the land surface surface it is within this atmospheric window space foreign instruments observe the
[14:07] thermal infrared spectral region to derive land surface temperature the image on the right of the slide shows atmospheric windows where specific
[14:14] types of electromagnetic radiation can freely pass as well as absorption bands where the atmosphere absorbs and scatters electromagnetic radiation
[14:27] this slide shows the satellites sensors temporal coverage orbit and swath spectral bands spatial resolution and temporal resolution for each nasa
[14:38] mission we'll be covering in today's case study we're focusing on the landsat missions since the united states geological
[14:45] survey or usgs recently released the collection 2 archive this provides a surface temperature product so you no longer have to
[14:54] calculate land surface temperature from ancillary datasets such as emissivity and vegetation indices we're also focusing on the moda sensor
[15:03] since it has historic data going back two decades and provides both day and night surface temperature products
[15:13] usgs released landsat collection 2 in december 2020 and is the second major reprocessing effort on the landsat
[15:21] archive resulting in several data product improvements that applied advancements in data processing algorithm development and data access
[15:30] and distribution capabilities landsat collection 2 contains level 1 data from landsat 1 through 9 and science products from landsats 4
[15:40] through 9 including scene-based global level 2 surface reflectance and a surface temperature science product collection 2 also provides improved
[15:51] radiometric accuracy improved radiometric calibration consistent quality assessment bands among other improvements landsat surface temperature measures the earth's surface temperature in kelvin
[16:06] and is an important geophysical parameter in global energy balance studies and hydrologic modeling surface temperature data are also useful
[16:15] for monitoring crop and vegetation health and extreme heat events such as natural disasters and urban heat island
[16:21] effects effects the second land surface temperature product we'll be demonstrating in the case study is modis surface temperature
[16:29] from the aqua satellite it is also based on thermal infrared bands and comes with a one kilometer
[16:34] spatial resolution the modis land surface temperature product derived from the aqua mission contains surface temperature for both day and night
[16:43] historical data runs from 2002 until present in both daily and eight day average temporal height latency below are some of the benefits of using
[16:54] satellite remote sensing for urban heat islands islands satellites provide continuous spatial coverage compared to in-situ data they provide data where no systematic
[17:03] in-situ measurements are available and they augment where in-situ measurements currently are they provide simultaneous observations of land surface temperature surface
[17:12] emissivity and land cover from various satellites satellites satellites provide global timely consistent data coverage and thanks to nasa and other space agencies
[17:24] open source policies availability of data is freely and publicly available to anybody on the planet planet below are listed some of the limitations
[17:35] of satellite remote sensing for urban heat islands data acquisition times of sun synchronous satellites usually do not
[17:42] coincide with the time of day where the surface urban heat ion is at a minimum or maximum
[17:48] landsat only provides daytime data not nighttime data optical sensors cannot penetrate clouds or vegetative cover which can lead to
[17:56] data gaps or a decrease in data utility the accuracy land surface temperature estimates depends strongly on corrections for atmospheric effects and
[18:06] on accurate estimate of surface emissivity emissivity radiate radiate instances received by sensors are influenced by the sensor
[18:14] viewing angle it is difficult to obtain high spectral spatial and temporal resolution with the same instrument and a large amount of data exists in
[18:24] various spatial and temporal resolutions file formats sizes and from multiple sources now that we've had a refresher on urban
[18:33] heat islands and a background on specific satellite missions used to observe urban heat islands we'll discuss how to use google earth engine to access
[18:42] analyze and visualize land surface temperature from landsat and modis google earth engine is a cloud-based geospatial analysis platform that
[18:52] combines a multi-petabyte catalog of satellite imagery and geospatial datasets with planetary scale analysis capabilities enabling users to visualize
[19:02] and analyze satellite images of the planet planet the platform comes with a javascript editor though python is available as
[19:09] well it is free to register an account using a gmail or a.edu email address to browse the catalog of satellite
[19:17] imagery and geospatial datasets as well as signing up for a free account refer to the links below
[19:24] for resources resources to learn more about google earth engine refer to the links to the developer's guide and the
[19:31] developers group provided on the slide we're providing you with three scripts of example code to analyze land surface
[19:40] temperature and the surface urban heat on effect using google earth engine the production chain was fully coded in
[19:47] javascript using the code editor platform platform scripts are freely available using the links below all input data sets to the land surface
[19:55] temperature algorithm are obtained from the google earth engine data catalog once you've registered an account with google
[20:02] google with earth engine you'll be able to launch the application using the links provided on the slide
[20:07] the first script shows how to graph a land surface temperature time series from landsat 8 and 9 for any user
[20:13] specified longitude and latitude the second script shows how to process landsat derived surface urban heat island over washington dc
[20:23] but can be adapted for any other city on the planet the third script shows how to process
[20:28] modis derived surface urban heat on for both day and night over washington dc but can also be adapted to any other
[20:36] city on the planet the code for the three separate skips has been commented commented throughout explain explaining which parameters need
[20:46] to be changed for your own area of interest and on this slide we're providing the main parameters you'll
[20:50] need to modify the variables for in the code code the last four parameters you'll need to create using the geometry tools in the
[20:58] map window or importing your own area of interest as an asset i'll now provide different demos for the
[21:11] three scripts provided to you through google earth engine the first script we'll walk through shows how to analyze and visualize
[21:18] landsat surface temperature time series from landsat 8 over washington dc from a defined area of interest to define your
[21:26] area of interest use the search places and data sets option at the top of the application and type in the name of the
[21:32] city that you're interested in if i start typing washington dc it will auto populate and when i click on
[21:37] washington dc you'll notice in the map window that it will automatically pan to the extent of the city the urban
[21:43] boundary of washington dc the be the default base map for earth engine is the map base map but you also
[21:51] have options for terrain as well as satellite satellite if i'm going to go ahead and click on
[21:56] the script now so we can walk through it this script is for land surface temperature from the landsat 8
[22:01] collection and it's to help to drive the surface urban heat landed intensity at the top of the script we can see that
[22:08] there are three variables that are defined one is aoi which stands for area of interest one is rural and one is
[22:15] urban urban you can notice that they're all polygons but the rural and urban are multi-polygons if i pan out a little bit
[22:21] more and i turn on the layers that i have down below you'll notice that i already delineated each of these
[22:27] polygons by using the draw a rectangle feature as well as the draw a shape feature feature and that's how i was able to draw a
[22:36] bounding box a rectangle for the area of interest as well as drawing multi-part polygons for the the both the urban which is delineated in
[22:45] magenta as well as the auroral which is eliminated in these multi-part polygons in orange the important thing here is to be able
[22:52] to characterize and capture the urban core of the city that you're interested in as well as representative areas
[22:59] outside of the city in the rural area that could be natural landscapes such as forest or agricultural land or a
[23:06] suburban suburban area which is outside of that urban core that urban heat island so it's important that you take
[23:12] your time to be able to capture each of these in the polygons and then you'll have to rename them in the steps that i
[23:17] showed you before to be able to match the variables that are defined in the script script this top part of the script
[23:25] explains what the script is doing and it also lays out the parameters that you are going to have to change within the
[23:30] script to be able to match it for your own analysis each of you will be looking at a different urban
[23:36] area and these are the different parameters that you're going to have to change in the script to be able to get
[23:40] the script to run to do analysis in your own region of interest now this first block of code is
[23:47] basically assigning a date range this is the day of the year in the city of washington dc the hottest months of the
[23:54] year are july and august so we're capturing these day this date range this day range to capture those two months
[24:00] and then we're also capturing the year range which is 2013 to 2022 which is the entire landsat 8 collection landsat 8
[24:08] launched in 2013. we're also creating a new variable study bounds and that study bounds is going to
[24:14] capture the variable that we delineated before which is aoi basically the study bounds is that bounding box that i
[24:21] created and we're going to give it a new name which is study bounds which we'll be able to use later in the code
[24:27] lastly we're going to use display true which means any time we pass this variable into any function below it will
[24:34] automatically display in the map window this next chunk of code sets the base map i want the base map to be satellite
[24:43] so i set that as the default and then this next chunk of code both sets the map's center so anytime you run the code
[24:49] it will go to that longitude and latitude and also set the zoom extent zoom extent is from 0 to 24 0 being
[24:56] planetary and 24 being the finest granularity you can get within the map extent window next we're going to
[25:04] select we're actually we're going to define a variable for two bands that's the surface temperature band and the
[25:10] quality assessment band the quality assessment band is the has different bits contained within each pixel that define which uh which of
[25:18] those pixels have both clouds or cloud shadow shadow and and knowing that that qa pixel is what we're
[25:24] going to need to filter out the different clouds and cloud shadows we're going to create a function in order to
[25:29] do so so anything that we're going to pass this function into or i'm sorry pass any argument into this function
[25:35] will be able to remove any pixels that have clouds or cloud shadow this next chunk of code is going to
[25:42] define a variable to capture the entire landsat landsat 8 collection 2 tier 1 level 2. this is the latest collection that we
[25:52] spoke of earlier in the presentation we're going to select the surface temperature band and the quality assessment pixel bound and we're going
[25:58] to filter it and mask it by the function and the variables that we defined above next we're going to
[26:05] filter that collection to any of the landsat scenes that have less than 20 cloud cover and then we're going to print that
[26:15] output to the console window and you'll see that when i run the script when i click run you'll be able to see that
[26:21] next we're going to create a function to apply scaling factors to get the to get the temperature in kelvin and
[26:28] then also to get the temperature in celsius because ultimately what i'm trying to do with this code is if you
[26:35] the temperature land surface temperature in degrees celsius and then again we're going to print that to the console window this is just doing
[26:42] a gut check to know that the code is doing what you want it to do as you're
[26:45] writing it and next thing we're going to do we're going to actually map we're going to define a variable to
[26:51] actually apply those scale factors to that image collection and then this next chunk of code is really calculating the average surface
[26:59] temperature across the landsat collection for those months of july and august so again we're going to create a
[27:06] variable that's going to create the average average surface temperature for each pixel across that collection for those two
[27:13] months months and then we're going to clip that to the area of interest our study bounds and
[27:20] then we're going to print that and use a print statement so that we can see that the code is working
[27:25] and next thing we're going to do is we're going to select just the surface temperature band and then we're going to
[27:31] define a variable that is going to create a histogram and pass that variable into the histogram so we're
[27:39] only going to display the surface temperature values and we're only going to display those values within the study
[27:46] bounds bounds and this next line of code is actually going to print that histogram so we can
[27:50] see the histogram in the console i like to use histograms because it's a good way of viewing the range of values in
[27:57] this case land surface temperature and it's a good way of just looking at the spread the range of values so you can do
[28:03] statistics and do further analysis or you can also use that for visualization purposes purposes next thing we're going to do is we're
[28:10] going to actually use this map map dot add layer and we're going to add the mapped layer the filtered map layer
[28:19] to the map window and we're going to map we're actually going to display or visualize just the surface temperature
[28:26] using these min and max values and using this palette and we're going to give the map when it appears down here the name
[28:33] surface temperature and we're going to use the display a variable that we defined above saying yes we do want this
[28:39] to display in the map window anytime you run the code this next chunk of code is going to
[28:45] calculate statistics specifically statistics within that average pixel value for july and august for the entire landsat collection with all bad pixels
[28:56] pixels that are cloudy or have cloud shadow all of those have been removed it's the average surface temperature and
[29:02] now what we want to do is we want to take the average temperature just within the urban area and this will help us to
[29:09] be able to derive the urban heat island intensity so this is going to create statistics just for the
[29:16] average within these pixels which is the urban and then the next thing we're going to do is this
[29:20] next line of code is going to take the average for all of the pixels which are in the uh the rural
[29:29] polygons that we created so it's just a way of generating statistics and for both of those we're going to print the
[29:35] results to the console window so we can look at those statistics so when i click run you're going to see that it's going
[29:41] to pan to the to the zoom extent that i defined earlier and it's also going to generate a
[29:50] land surface temperature map of the study area which i delineated the area of interest and it's also showing areas
[29:56] in red which are hot and areas in blue which are are cooler than the the areas in red which are more impervious and
[30:05] built up areas within the map window and it also set the center on the longitude and latitude that we defined
[30:12] and we can see if we zoom into downtown los angeles that we can see that a lot of areas in the
[30:19] downtown area are quite warmer than surrounding areas but we can also see areas like the anacostia river here and
[30:24] the potomac river rock creek park areas of both water and forest greenbelt park here so these natural areas which are
[30:32] more forested or riparian are much cooler than the more built up and especially this downtown area here and
[30:39] in northern virginia here so if i go to the output we can start looking at the histogram here i can
[30:45] actually click on this pop-out and we can do that in a different tab so we can start looking at the spread of values
[30:51] the value on top is actually the degrees in celsius centigrade and we can see the range down below so the range is really
[30:58] from 27 to around 50. but but anyway going back to the code if we drill down a little bit uh deeper
[31:06] we can start looking at the statistics that we output this first one is going to be the min uh mean min and max for
[31:12] the urban area and to drill down to that we're going to click the drop down and we're going to go to features and then
[31:18] zero and then one more time to properties and we can see that we have the surface temperature both the max min
[31:25] and mean i'm interested in the mean because i'm going to use that to derive the surface urban heat island intensity but the
[31:32] other statistics are there as well and again that was for the urban areas in washington which are
[31:38] defined by this polygon here and then next we're going to look at the rural areas and the statistics there
[31:47] which are going to be again if we drill down to features and then zero and then one more time to properties we can see
[31:53] that the we have the main mean and max values for the rural areas that are defined so these are all of the
[31:59] statistics for these four polygons that we defined earlier and again i'm interested in the mean surface temperature which is 30.9
[32:09] and then to calculate the surface urban heat island intensity what we're going to do is we're going to
[32:15] subtract the the mean surface temperature urban from the mean surface temperature rural and that will give us
[32:21] the surface urban heat island intensity and the intensity of the heat landing is the simplest quantitative indicator of
[32:28] the thermal modification imposed by city upon the geography on which it is situated so this is a really quick way
[32:35] to directly to derive the surface urban heat island intensity for your area of interest interest now the next code we're going to take a
[32:42] look at is going to look at the landsat time series pixel and we will go to that next
[32:50] the next script we're going to look at will be calculating a time series graph for landsat 8 and 9 at the pixel level
[32:59] the first variable that we see divide is point and that was generated by using the drop a marker
[33:05] which is down here a feature which is down in the map window so we can click on that and we can drop a marker
[33:10] anywhere we want i chose a built-up area in northeast washington dc but you can drop a marker anywhere you want and once
[33:18] we have that we can then define a new variable variable we're actually going to have to rename
[33:22] that because it'll probably be a generic name like geometry but once we have that we can rename it to point
[33:29] which will be the same nomenclature as we're using in the code here and we'll define a new variable aoi for area of
[33:35] interest and we'll take that point and we're going to buffer that by 30 meters 30 meters is the spatial resolution of a
[33:41] landsat pixel if you were interested in buffering more than 30 meters you could certainly do 60 90 etc it really depends
[33:49] on what level of analysis that you're trying to generate that time series graph of land surface temperature
[33:54] because we're going to be taking the mean of this buffered pixel but again it's really subjective depending on your
[34:01] level of analysis and you can adjust the code you can adjust this parameter to how you want for your own analysis the
[34:08] next chunk of code is to set the base map as the satellite instead of the hybrid or map
[34:15] then we're going to set the map center on a longitude and latitude and use the 12 as the zoom level
[34:23] then we're going to assign a variable for both landsat 9 and landsat 8 bands and we're going to
[34:29] choose the bands for surface temperature and the quality assessment pixel and then we're going to assign new names
[34:37] for those bands that we're going to use later in the script that the variable we're defining is band name and instead
[34:42] of surface temper underscore b10 we'll rename that as just st for surface temperature and we'll keep the qa pixel
[34:50] band name as it is here we will be using the same function the cloud mask function we used in the
[34:57] previous script to remove any cloudy or cloud shadow pixels so we're only going to be doing analysis and time series
[35:04] analysis on cloud free and cloud shadow free pixels then we will create variables l9 and l8 to
[35:15] take the image collection the landsat 9 collection 2 tier 1 level 2 image collection and select just the
[35:24] bands the the land surface temperature and the quality assessment pixel and we're going to filter it by the point
[35:32] the area of interest that point and then also apply that cloud mask and we'll do that for both landsat 9 and landsat 8
[35:38] collections so that we're working with pixels that actually have values that we're interested in then we're going to create two new
[35:43] variables to pass the filtered collection into and we're only going to collect scenes from that collection that have cloud cover that is
[35:53] less than 20 total in the scene that we're trying to gather if you are in an area say more
[36:00] tropical latitudes that experience more cloud cover you will probably have to change this parameter to something higher than 20 just so you can get
[36:08] scenes that will have pixels of value that you can use so this is very dependent on where your urban area is
[36:15] located so again these are parameters that you will have to change and adjust for your own study area
[36:22] then we're going to use print statements to print the output to the console so that we can do a get check and make sure
[36:27] that our code is actually running the way we want it to next thing we're going to do is
[36:31] concatenate the names of the bands so we want to take the surface temperature underscore with the the name so either
[36:40] l8 or l9 that way when we generate the graph we have a nicely worded graph that has both landsat and landsat 8 and 9
[36:49] concatenated for just for consistency purposes and next thing we're going to do is merge the collections together so this
[36:57] chunk of code here is taking the filtered landsat 9 and landsat 8 collections based on that one location
[37:05] this is the entire collection so we haven't filtered anything by date these are all the images that are in both
[37:11] collections and they're cloud free and they have good quality pixels and we're going to merge them so instead of having
[37:16] two separate collections we'll just have one collection which we're naming landsat collection landsat coal and that way when we do a time series we just
[37:26] have have all of the landsat 9 and 8 together in one collection then we're going to use a create a
[37:33] function same function as we used in the previous code to apply scale factors to generate both both the temperature and kelvin and then
[37:42] also also actually just into from kelvin into degrees celsius which is the degree celsius is what i'm most
[37:49] interested in but depending on your analysis you can do either or and then we're going to define a new variable to apply those
[37:58] scale factors to that merged image collection and then again we're going to use a print statement just to make sure
[38:03] that everything is working as i would like it to and lastly we're going to create a new
[38:10] variable time series and in that time series we're going to create a line a line chart and we're going to
[38:19] give that chart a title and give the vertical axis the title and a horizontal axis title and we will be passing in
[38:26] that merged collection of land surface temperature which is buffered to this one point and we're going to print that
[38:34] and when i click run we'll see that all the collections from the print statements are now generated
[38:38] in the console and we also have i can pop this out into a different tab we also have the time series of that merged
[38:45] collection of landsat 8 which is depicted in blue and landsat 9 which are these red dots on the
[38:52] on the right hand side of the graph landsat 8 launched in 2013 so we can start seeing some of the land surface
[39:00] temperature from that buffered pixel and then we can also see because landsat 9 launched in 2021 that's starting in that
[39:07] year we're starting to get some of the land surface temperature from those years as well so this is a really useful
[39:13] way to be able to graph out the land surface temperature for the landsat collection you could take this back
[39:19] further if you wanted to into landsat say landsat 7 landsat 5 and 4. i chose to use landsat 89 because the sensor the
[39:27] thermal infrared sensor is comparable between the two and it's appropriate to use four-level analyses these two sensors together
[39:36] but that is the second script that we're using to show you how to derive a time series for
[39:44] any given location that you're interested in and the last script that i'm going to be walking you through is
[39:50] based on the modis sensor on the aqua satellite and that will be the third script that we'll walk through right now
[39:58] we'll be using the same geometry imports that we used in previous scripts for area of interest rural and urban
[40:04] polygons you can see they've been imported here at the top of the script and then also we have a commented
[40:09] section telling what the script does and then here are the parameters that you'll need to change in the script to adapt
[40:16] this code to your area of interest this first chunk of code is setting the date range by day of year as well as
[40:23] year range as well as defining the study bounds and then also setting defining a variable so anytime we pass this variable into the
[40:31] code below it will appear in the map window window we're also centering the map window on the study bounds and then also setting
[40:40] the satellite view as the default base map map this next chunk of code is creating a function
[40:48] function and we're defining that function by the variable get qc bits and this chunk of code that creates the function is
[40:54] computing the qc bits that we want to extract extract these qc bits are flag values in each
[41:00] pixel that define pixels that have cloud or cloud shadow or that are flagged for land surface temperature error that we
[41:08] do not want to use later in our analysis so it's going to pull those those qc bits out that we want to
[41:14] extract and this get qc bits we're actually going to be using in this function that we're defining
[41:19] here and this function that we're that we're defining by the name of mask qc this function is going to use the get
[41:26] qcbits function and actually mask out any of the flagged land surface temperature temperature values that have an error or that have
[41:35] cloud or cloud shadow and once we have that function defined we're going to define a variable to get
[41:42] the the aqua modis image collection and filter that by the date range the year range and then apply that
[41:50] mask to mask out any of the the flag values for land surface temperature error or by cloud or cloud
[41:56] shadow and then we're going to print the output to the console window next we're going to define a variable
[42:03] for nighttime land surface temperature in celsius and we're going to apply scale factors to derive the pixel in
[42:10] degrees centigrade and we're going to rename the band uh lst night one kilometer to lst night underscore c
[42:20] which stands for land surface temperature at night for celsius and once we have that band renamed and
[42:26] rescaled to degree centigrade we're going to do the same for the land surface temperature in daytime we're
[42:32] going to use this we're going to use this function to create use the scale factors to derive
[42:37] degrees in centigrade and then we're going to rename that band lstd underscore c for land surface temperature in the daytime and in
[42:46] centigrade centigrade and then this chunk of code is going to plot a histogram for the number of
[42:51] pixels pixels per location at night that have those land surface temperature values this chunk of code is going to do the
[42:59] same thing it's going to provide account of land surface temperature values per pixel during the daytime and then this chunk of code is going to
[43:07] calculate the average nighttime land surface temperature per pixel across the image collection and then we're going to
[43:14] print that to the console window that way we have land surface temperature the average throughout the entire collection and
[43:21] then we're going to do the same thing for the daytime we're going to take the entire collection from 2010 to 2022
[43:27] filtered in the months of july and august and we're going to take the average for the land surface temperature
[43:32] across that collection next we're going to print the histogram for those land surface temperature values at night time
[43:40] and we're going to clip it to the study bounds and we're only going to be selecting that the nighttime land
[43:45] surface temperature in centigrade and then we're going to print a histogram so we can view those values in the console
[43:50] window window we're also going to do the same thing by plotting histogram values that have been clipped to the study bounds and we're
[43:57] only going to be selecting the land surface temperature in the daytime and centigrade and then we're going to print
[44:02] that histogram again to the console window window this next chunk of code is deriving statistics for the mean min and max uh
[44:10] and we're going to be deriving those statistics for the urban area that we delineated that urban polygon so it'll
[44:16] take the mean min and max for that urban core core and then we're also going to do the same
[44:21] thing thing and that's going to be for the mean min and max for the urban area and
[44:26] this is going to be at night time then we're going to derive the statistics for the mean min and max for
[44:32] the rural part of washington dc at night time so that we can derive the surface urban heat island intensity
[44:39] similar to we did in the previous script and we're also going to print both of those outputs to the console window next
[44:46] we're going to do the same thing we're going to be driving statistics for mean min and max except this time it's going
[44:51] to be for the daytime and it's going to be be for the auroral areas i'm sorry for the
[44:58] urban and then in this case we're going to be doing the same thing deriving mean min and max for the rural areas in
[45:04] washington dc and then we're also going to print that to to the console window so that we can view
[45:10] the statistics and then we're going to add those map layers based on the land surface temperature at night and land surface
[45:18] temperature at daytime and we'll add both of those to the map window so i'll go ahead and click run and we can take a
[45:24] look at the console and you can see that the map window automatically panned to the the the area of interest that we defined
[45:33] before and it's also generating see the layers are still generating but we can start looking at some of the results in
[45:40] the console window so we can see that the the we have a histogram here of land surface
[45:45] temperature the number of pixels of lamp surface temperature per location at night and we also have a
[45:50] histogram of the number of land surface temperature pixels per location in the daytime daytime and then we also have the output of the
[45:59] the mean of the collection at night time as well as the mean uh across the day and then we also have a histogram of the
[46:07] land surface temperature values at night time so this is the the the range of values at night and then also those
[46:13] range of values of line surface temperature in the daytime again all of these histograms can be popped out into a different tab to be
[46:20] able to view them at a larger scale and then lastly we have statistics this is the the mean min and max of land surface
[46:28] temperature for urban washington dc at night night and then the statistics for mean min and max for roar washington dc at night and
[46:37] so if we wanted to calculate the surface urban heat island we would subtract the rural rural land surface temperature at night time
[46:45] from the daytime and to get those values we can drill down from feature collection to features to zero to
[46:52] properties and then we can see here that the the land surface temperature at night for the mean is 21.7 degrees and again this
[47:02] is for the for urban washington dc and then if we want to get the same thing for rural washington
[47:09] dc at night time we can drill down and we can get the mean here that we calculated earlier in the script and
[47:16] this is going to be for again this is for the nighttime rural part of washington dc so we would
[47:22] subtract this value from this value here to get the surface urban heat island intensity at night time and then we also
[47:31] have the statistics here for the mean min and max for urban and rural but this time during the day so this allows
[47:38] us to generate the surface urban heat island for both daytime and nighttime using the aqua modis instrument and then
[47:46] this commented code here at the bottom just explains what i just walked through here in terms of getting those different
[47:52] bands and doing these different equations to have a an intensity of uh surface urban heli island as a
[48:01] quantitative indicator of the thermal modification of a city imposed upon the geography in which it is situated so
[48:08] these are the three scripts to be able to derive time series analysis of land surface temperature as well as to derive surface
[48:14] urban heat island intensity using the aquamodus instrument as well as using the landsat missions as well so now that i've walked through
[48:24] both uh all three of the scripts the we're going to give you some lap time to be able to work with those scripts on
[48:31] your own and we'll be waiting here to answer any questions that you have as you walk through the scripts so again
[48:37] we're giving you roughly 30 minutes to be able to go through those scripts on your own change the parameters for your
[48:42] own area of interest and if you have any questions in the next 30 minutes please do let us know and we'll be here to
[48:48] answer the questions as they come in so we're now giving this time to you to work on
[48:54] calculating your own land surface temperature for your area of interest we will now transition to the question
[49:04] and answer portion of today's webinar we've been getting some terrific questions but if you haven't already please do answer your questions in the q
[49:11] a box we will answer them in the order that they were received we might not get through all of the questions today but
[49:18] we will answer the questions offline and we will post the q a doc to the training website following the conclusion of the
[49:25] webinar webinar below is the contact information for myself as well as my colleague dr amitamekta and we've also provided links
[49:33] to the training webpage and the rset website well we want to thank everybody that's been submitting your questions we've
[49:51] gotten a lot of really great questions and so again we're going to try to get through as many as possible in the next
[49:56] 10 minutes but uh fear not we will answer all of them and we will hope to get this up and posted on the training
[50:03] page within the next couple of days so again if we don't get through all of your questions today don't worry you
[50:08] will be able to find the answer uh sometime later this week so to get into it uh question number one is uh
[50:16] why modis aqua and not also terra and the answer being uh that the modis instrument on the terra satellite
[50:23] only provides land surface temperature estimates during the daytime so if we want to assess urban heat islands uh at night time it's important
[50:32] that we use the aquamodus instrument because it provides products for both daytime and nighttime and that is very
[50:38] useful because a lot of products that you find are especially land surface temperature only provide uh these land surface temperature
[50:46] products during the day and if we want to calculate or assess urban heat island especially during the night time
[50:54] which is very valuable because a lot of times urban heat island effects are more pronounced uh during the night time when
[51:01] the surrounding rural areas cool off uh quite quickly due to the radiative properties of natural vegetation vegetation lakes and suburban areas versus the more
[51:11] built up urban area that is very valuable to use the land surface temperature from the modus instrument
[51:17] from the aqua satellite another good reason to use aqua is because the local overpass time for this terra satellite
[51:26] is 10 30 local time whereas with the aqua mission uh the modis instrument on the aqua mission has a local overpass at
[51:33] 1330 and if we're interested in urban heat island effects typically typically not always but typically land surface
[51:43] temperature will be higher in the afternoon so the aqua mission is better suited suited for this analysis
[51:49] question number two how did you import landsat to script section section so so i wasn't exactly sure what this question
[51:59] was asking but if you were trying to access the code we did provide links to you in the chat as well as within the pdf
[52:09] that we're sharing from today's presentation so please try to access the script from there if you're having trouble make sure that
[52:17] you've created a google earth engine account uh using either your gmail or a edu email address and
[52:25] and please do refer to the commented sections for each of the areas of the code hopefully they
[52:30] were commented well enough to understand what each section of code is doing but if you are still having problems then do
[52:38] feel free to reach out to me and we can see if we can't troubleshoot uh whatever issue you're having
[52:42] question number three hi all it is fantastic that the code is well commented however is there any documentation for
[52:50] the library that is being used so for all the code that we provided in javascript we use the library functions
[52:57] that come with the google retention api and if excuse me if you're more uh if you want more information on any
[53:04] of the functions that were used you can refer to the documentation which is under the docs tab for each of the
[53:11] different functions that we applied for for each of the three scripts and you can find that yeah the docs tab is on
[53:17] the left hand side of the code editor so hopefully that answered uh the question number three question number four if we change the
[53:25] aoi aoi area of interest by delineating our own rectangle do we have to recalculate the latitude longitude for the uh the
[53:35] function of to set the map center which is map.setcenter and then i suppose otherwise the map display pans to washington dc all the
[53:42] time and that is correct whenever you change the bounding box that rectangle using the draw rectangle tool for your own area of interest then
[53:51] you will need to edit the longitude and latitude degrees and you might have to edit the zoom extent as well depending
[53:59] on on how big or small your your urban area of interest is but you will need to change
[54:05] those parameters for the longitude latitude whenever you do change change the bounding box that rectangle and rename it
[54:14] to aoi standing for area of interest question number five the script uses the thermal band which is heat reflected what about surface
[54:25] emissivity for landsat does that not contribute to the urban heat on and so one of the surface temperature temperature
[54:33] auxiliary inputs for landsat surface temperature is a global emissivity data set and that data set which is
[54:42] input into the surface temperature algorithm is derived from the advanced spaceborne thermal emission and reflection radiometer it's an aster
[54:50] instrument and that is flown on the terra satellite so surface emissivity does influence urban heat island development it's a measure of surface's
[54:58] ability to shed heat or emit long wave radiation we focused just solely on the land surface temperature alone for deriving surface
[55:07] even urban heat island intensity we did not get into uh any uh uh influences of of emissivity
[55:15] but that's certainly something that that you could look into we were trying to keep it to analysis ready products that you can get
[55:23] uh right in in earth engine and start uh doing analysis and start running applications so that is one of the
[55:29] reasons but but there is an emissivity auxiliary data set that is included in the algorithm to derive the surface
[55:36] temperature temperature question six is there some standard criteria methodology to determine the extension of rural area with respect to
[55:45] the urban area or which is a proportion suggested suggested how do you define the area areas to use
[55:51] as your rural and urban for the calculation of surface urban heat island intensity this is a really great
[55:57] question we got several questions related to this and so hopefully by answering them we will touch upon the
[56:05] questions that were similar that other people would ask but but for the for urban areas most people have
[56:14] it's pretty consistent approach to to identifying and delineating urban areas these are pretty much classified as built up planned uh in land cover maps
[56:23] uh as well as uh for urban areas so if you do have access to land cover maps or if you can
[56:31] if you can run an analysis on land surface temperature typically those those higher temperature values that you
[56:37] will find will be especially in in a city will be derived from built up uh impervious surfaces
[56:44] so if you don't have access to a land cover map a uh a a good accurate good
[56:50] excuse a good quality land cover map that is one way to go about delineating urban areas but if you do have access to
[56:56] a land cover map then you can certainly use that to help delineate the those areas google retention does provide
[57:05] global land cover maps some of them at 10 meter spatial resolution those are derived from the sentinel-2
[57:13] mission from the european space agency so for those that are looking for land cover maps i do suggest looking through
[57:19] the the geospatial data sets through earth engine to to help find those but to get back to the the question though
[57:26] to delineate rural areas in relation to urban areas there are a number of different methodologies uh i would none
[57:34] of them are standardized so i can't speak that anyone is the definitive way some have used different buffering uh
[57:42] methods so once you have that urban core delineated either through your own knowledge of your city or from using
[57:50] land cover maps that you're getting through some other product through other agencies agencies some some methods apply buffer zones
[57:58] from that urban core and that buffer zone can vary and that can vary depending on your area of interest
[58:05] different cities have different suburban sprawl so that will impact how you delineate your rural areas and those
[58:12] buffer zones can range from 1 to 50 kilometers so there is no standard approach approach in the example provided in the script
[58:20] obviously we delineated rural areas uh based on natural and suburban characteristics that's just for my own knowledge of washington dc which is the
[58:28] city in which i live but for your own area of interest it could be you'll have to place great care in how
[58:36] you select the traits that you want to characterize urban versus rural and we will provide some links to different literature
[58:45] publications that have applied different approaches and we'll certainly give those links before we post this to the
[58:52] the training page so question number seven uh what does the point buffer do does the higher buffer mean a higher
[59:00] analysis area that is correct so anytime you uh buffer the area or increase the uh the spatial scale of that buffer in meters
[59:11] then you are buffering to a larger uh area of analysis so so that is correct so if you if you
[59:18] wanted say a 60 meter buffer or 100 meter buffer or a 120 meter buffer then yeah you would be doing an analysis on
[59:24] that greater area depending on the uh the value of the buffer that you assigned assigned uh question eight
[59:32] is the time of day equal across all images images so for all for no i can't say for for
[59:38] nearly all of nasa emissions the local overpass time will be the same so for most sun synchronous orbiting
[59:48] satellites uh and sunseguird as being the aqua satellite the all of the landsat missions are sun synchronous
[59:55] they have the same local overpass time for all the imagery collected for that local for the area of
[1:00:02] your interest so so the so the time of day will be the same for for for example given in the landsat 8
[1:00:09] analysis that we conducted yes it will be as well as for the aquamission there are some nasa missions where the
[1:00:16] uh the local overpass time will not be the same uh one of those that i'm several i'm thinking of are anything
[1:00:22] that is might be on the international space station because that does not have a consistent repeat time it has the same orbital
[1:00:29] swath but the repeat time and the time of day will vary depending on when the imagery is collected
[1:00:35] i am being mindful the time and i noticed that it is one minute after the the time so we will wrap up here but i
[1:00:44] will say and i will repeat that for all the questions and we got some wonderful questions that we will be getting to all
[1:00:50] of them and we will be answering and posting them to the question and answer uh document and we'll post that on the
[1:00:56] training page hopefully we're shooting for by the end of this week so that it will be ready uh before uh the part
[1:01:04] three three uh which will start next tuesday so again we're having uh you know part two is is going to be in two days
[1:01:11] so we will post this we will get through all the questions we want to thank everybody for submitting your questions
[1:01:17] and we also want to thank everybody for joining today uh this is a really important topic uh understanding the
[1:01:24] urban heat island phenomenon is only going to become more important through climate change and then also being to the
[1:01:32] ability to be able to characterize and also also help mitigate the effects of the urban heat island for those most vulnerable
[1:01:40] is precisely the topic that we will be covering in part two of this training of this webinar series again part two will
[1:01:47] be in two days on thursday it will be at the same time we hope that you all join
[1:01:52] us where we will be able to start learning in part two and then continuing into part three on how you can use
[1:01:59] different socioeconomic variables to start creating your home your own heat vulnerability indices to help mitigate the effects of what we were
[1:02:10] characterizing in today's training which is calculating the surface urban heat island intensity so i want to thank the
[1:02:17] rset team that helped make this possible that's salon hudson odoi jonathan o'brien sarah cutchall and brock blevins
[1:02:24] as well as my colleague amit demekta so thank you to the rsat team and again i want to thank everybody for joining
[1:02:30] today and we hope to see you all again on thursday for part two of the webinar series thank you
