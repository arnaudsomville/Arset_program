# Large Scale Monitoring Using Remote Sensing and Citizen Science, Part 4/4

`https://www.youtube.com/watch?v=ffJ8-Pa7PuQ` · id 260 · 1:17:32 · module 19 — Large Scale Applications of Machine Learning using Remote Sensing for Building Agriculture Solutions

[00:04] hello and welcome to week four of our webinar series introduction to remote sensing of harmful algal blooms
[00:11] this week's session is large-scale monitoring using remote sensing and citizen science my name is sherry palacios and my
[00:19] co-trainer is amita mehta and we are delighted that you are joining us for another week in this series
[00:25] we are very excited to have our guest speaker with wilson solves who is with us from the u.s environmental protection
[00:32] agency and will be presenting his group's project titled cyanobacteria assessment network or cyan he will be presenting about halfway
[00:42] through this session just a few reminders on the course structure we have been meeting on tuesdays for the last several weeks and
[00:51] have covered an overview of habs sensors sensors coupled remote sensing and biogeophysical model approaches to forecasting forecasting and this week large scale monitoring
[01:03] we have covered both marine and inland water habs a question and answer period will follow today's presentation please use the chat
[01:12] feature of the webinar software to write and submit your questions and you can do that anytime during this presentation
[01:18] my email will be provided in this chat window if you'd like to email questions to me while this is the last week of broadcast
[01:27] for the webinar series it is not going away you can access all the course materials on the rset website there
[01:34] you'll find a pdf of the powerpoint presentation in both english and spanish a link to view the recording of each
[01:42] week's webinar and the pdf of each homework assignment and a link to the google form for homework submission
[01:50] please note that in order to view the webinar recordings you must register this helps us keep track of our metrics
[01:58] once you register you automatically will be taken to view the recording the links for the two homework
[02:06] assignments are available now online and must be submitted through google forms to receive credit for homework you must
[02:14] submit the answers to the homework by the deadline the deadline for homework 1 is october 1st and the deadline for homework 2 which is
[02:22] available today it's october 15th to receive a certificate of completion you must attend all four live webinars
[02:30] and complete both homework assignments by the due date it takes some time to process these certificates so you can expect to
[02:38] receive them about two months after the completion of the course so why have you taken this course
[02:47] we recognize that some of you come from a harmful algal bloom background and wanted to learn more about how remote
[02:53] sensing can be used as a tool for monitoring monitoring some of you came from a remote sensing
[02:58] background and wanted to learn more about haves we hope that we have met your course objective objective by providing an overview of satellite
[03:06] earth observation resources data and tools available for have applications we hope by the end of today's session
[03:14] you are able to identify nasa's earth science remote sensing data products for the identification and monitoring habs
[03:21] to describe how coupled remote sensing and modeling approaches are used in decision support tools and to use some nasa earth science data
[03:30] tools to monitor for habs this week we will talk about large scale monitoring and most of our focus will be
[03:36] on freshwater systems i really like this image on the right it shows the cyanobacteria bloom in western lake erie which is a part of the
[03:48] great lakes in north america the reason why i like it you kind of have to look closely across the whole
[03:54] scene scene it's because it illustrates how horizontally patchy blooms can be notice also the lines running across the
[04:02] bloom bloom these are ship tracks and they show how blooms can be surface aggregations of cells that when disturbed
[04:10] reveal the water below is not as dense of a bloom this helps to demonstrate how these blooms can have three-dimensional
[04:17] structure that may not be visible from remote sensing imagery reminding us that geophysical models are needed to understand how circulation
[04:26] patterns can concentrate and dilute blooms over a particular region this week we will briefly review prior weeks
[04:34] weeks there will be an overview of cyanobacterial habs or cyanohabs i will review some case studies of
[04:41] freshwater cyanohab monitoring tools i'll provide some case studies of how citizen science is used in hab monitoring
[04:49] monitoring including some smartphone apps that can aid in citizen science then we will hear from our guest speaker
[04:56] wilson sals who will talk to us about the epa cyan project after his presentation i'll briefly summarize the course
[05:04] so let's get started with a short review in week one we provided a description for what is a harmful algal bloom
[05:13] harmful algal blooms or habs occur when colonies of algae simple plants that live in the sea and fresh water
[05:20] grow out of control and produce toxic or harmful effects on people fish shellfish marine mammals and birds
[05:29] the human illnesses caused by habs though rare can be debilitating or even fatal in week two dr amita mehta talked about
[05:38] satellites that are useful for hab monitoring including landsat 7 and 8 tara and aqua with the modis sensor
[05:46] the salomi national polar partnerships of years censor and the imagers aboard the sentinel-2 and sentinel-3 satellites also in week two amita provided
[05:59] information to you of data access and processing tools for hab monitoring these include links to data portals such
[06:06] as ocean color web giovanni and noah's coast watch she also mentioned the image processing software cdas which is freely available
[06:16] from nasa's ocean biology processing group group you can find tutorials on how to use cdas at the website
[06:28] remote sensing provides continuous global coverage with consistent observations compared to limited point measurements from surface or ship-based
[06:36] water sampling optical and near-infrared remote sensing observations from landsat terra and aquamodus aquamodus suomi npp veers sentinel-2 multi-spectral imager and
[06:49] sentinel 3 ocean and land color instrument are used operationally for qualitative and quantitative hab monitoring which includes chlorophyll
[06:57] and sea surface temperature observations remote sensing is a tool to aid in monitoring and forecast of habit vents
[07:05] for decision support it's not meant to replace ground measurements in week 3 we reviewed noaa's hab operational forecast system for carinia
[07:16] brevis blooms in the gulf of mexico this forecast system combines ocean satellite imagery field observations fluid dynamics models public health
[07:27] reports and ocean buoy data it is not only a forecast tool but a platform for communicating have events
[07:34] to stakeholders after reviewing this operational system we heard from dr clarissa anderson about her forecasting system named sea harm
[07:44] for pseudonychia blooms along the u.s west coast so where does that put us today today we are talking about
[07:54] cyanobacterial habs some of the organisms implicated in them impacts to human health past noteworthy events and an algorithm that is effectively
[08:06] used to identify cyanohabs we will also review two case studies of cyanohab forecasting systems large-scale citizen science efforts used
[08:16] to monitor for cyanohabs and a few smartphone apps that can aid in cyanohab monitoring in any match it is helpful to know one's
[08:29] opponent opponent and in this case it's the cyanobacterial groups that are implicated in toxic events events that imperil freshwater systems
[08:38] these negatively affect freshwater ecosystems and drinking water systems on this slide are microscope images of seven common cyanobacterial groups that
[08:49] cause cyanohabs conditions range from skin irritation to liver impairment from liver toxins also known as hepatotoxins to impairment of the nervous system by
[09:01] neurotoxins some hepatotoxins like microcystin can kill you in two ways under high dosage one can die from acute
[09:13] liver failure under low level chronic exposure the toxin promotes liver tumors or cancer these impacts can result from external
[09:23] exposure like direct contact with skin while swimming or handling bloom water impacts can occur from ingestion of
[09:31] water by drinking it or in fish or shellfish that contain the toxin that somebody eats or in some types of vegetable produce
[09:38] that have been irrigated with toxic water water impacts can also occur from breathing the toxins airborne toxic events are less well
[09:47] known with cyanohabs but are an active area of research under a microscope you can see that the
[09:54] cell morphology of these groups spans a diverse array of shapes and sizes this is important because while the
[10:02] pigments phycocyanin or phycoerythrin that's contained in these organisms may be one way to discriminate the cyanobacteria from
[10:11] other phytoplankton it is the morphology of the cells and how that affects the optical properties of bloom that may aid in distinguishing
[10:20] cyanobacterial groups from each other to the naked eye it's challenging to distinguish these groups from each other
[10:30] because to our eye these blooms look like green scum like you see in these images here on the left is a well-known cyanohad
[10:40] researcher named dr hans pearl collecting a surface sample from lake tahoe china lake tahoe has encountered widespread
[10:49] microcystis plumes for some time on the right is an image of a water sample collected from a lake near me
[10:56] named pinto lake it is also primarily a microcystus bloom we have these blooms seasonally in pinto lake and we are actively working on
[11:05] remote sensing methods to better identify blooms to help in adaptive management decisions at pinto lake but also in other drinking water reservoirs
[11:14] throughout the state and in the region the ability to identify and forecast these cyano hab events is important for
[11:22] protecting human health as the toxins in these pads can get into our drinking water system and exposure can be
[11:28] life-threatening imagine waking up one morning and being told not to drink the water nearly 500 000 residents served by the
[11:40] water system of toledo ohio were asked to turn off their water faucets because a toxic cyanobacterial bloom had shut
[11:46] down their municipal water supply they could not use the water for drinking drinking eating bathing or even for their pets or
[11:54] livestock toledo ohio rests along the shores of western lake erie one of the great lakes of north america
[12:01] this water crisis that i'm describing here and you see pictures of occurred in early august 2014 and lasted for about
[12:08] two days the crisis caused people to seek clean drinking water from emergency supplies provided by local state and federal
[12:16] government emergency services this water crisis was years in the making and this event precipitated investment into monitoring the lake and
[12:26] understanding ways to mitigate these blooms blooms this problem is not just isolated to lake erie but is present in other
[12:33] freshwater systems and this problem has not gone away in lake erie where blooms continue to be a
[12:39] threat to recreational activities and drinking water supplies human health crises caused by caused by cyanohabs are a global problem
[12:54] as mentioned earlier cyanohabs are an ongoing problem in china's lake tahoe which you can see in the upper left
[13:00] panel of this image here cyanohabs are an area of active research also in southern africa as with the cyano lakes project where
[13:10] they are using remote sensing of south african lakes and reservoirs to monitor for cyanoheads using the sentinel series
[13:18] satellites satellites cyanoheads can also be found in the brackish waters of the baltic sea which you see on the lower right
[13:27] where there's been a strong correlation over several years over actually a couple of decades just that's described a correlation
[13:35] between rising temperatures and the incidence of these have events so this problem is a global problem and we re we use remote sensing
[13:45] observations to help in monitoring them there are a variety of remote sensing algorithms used for optically discriminating cyanobacteria from the
[13:56] remote sensing signal we've already talked about the first three in this list they include chlorical a concentration
[14:05] chlorophyll-a anomaly and algorithms specifically targeting the pigment phycocyanin which is in cyanobacteria but not in most other
[14:14] phytoplankton groups the other algorithm that we're talking about today is the cyanobacteria index or ci there are more algorithms than those
[14:24] listed here but these are the ones more widely adopted for operational forecasting systems of these the cyanobacteria index is used
[14:36] by noaa for the identification and forecasting of cyanohabs in lake erie and other great lakes you can see the equation here
[14:46] the ci is defined as the negative of the spectral shape of normalized water leaving radiance at 681 nanometers
[14:55] normalized water leaving radiance is one of the l2 data products that you can get from processing imagery
[15:02] imagery in this case the ci description i'm giving you here is for the marist bands the spectral shape at 681 nanometers in
[15:12] the second equation is defined here please note again that these wavelengths are for the former maris sensor
[15:20] the ci has been adapted for modis and is now currently used for the olci sensor on the sentinel-3
[15:30] who uses the ci for monitoring cyanohabs several groups do and here we will focus on two case studies
[15:38] one of which is operational and has been rigorously tested and the other which is still in the experimental phase of
[15:45] development last week we talked about the noaa hab operational forecast system and its hab bulletin for the gulf of mexico and the
[15:58] monitoring of the toxic dinoflagellate careta brevis this week we will focus on another one of their products that focuses on the
[16:07] blooms of the toxic cyanobacterium microcystus eruginosa in lake erie along the shoreline of the lake are drinking water intakes for municipal
[16:17] water suppliers for various cities including toledo ohio you're now familiar with the water crisis of 2014 that happened there
[16:27] this is not a new problem in lake erie and for some time researchers have been working on an operational forecasting
[16:33] system for cyanohands to aid in decision support support this forecasting system uses satellite imagery from the modis sensor on terra
[16:41] or aqua or the olci sensor on sentinel-3 it uses field observations observed and modeled fluid dynamics of the lake
[16:52] predictive models for mixing and scum formation and buoy data these are all used to predict bloom location
[17:01] location three forecast three-day forecasts of transport mixing scum formation and bloom decline the forecasts are helpful for water
[17:10] resource managers and recreational users of the lake basically they have an idea where the bloom will be in three days
[17:17] time time a person can subscribe to the hab bulletin these forecasts usually start in july and end in october depending on
[17:25] the hab conditions that year these bulletins are emailed to users twice per week during a bloom i
[17:32] encourage you to follow the links at the bottom of the slide if you'd like a more in-depth description of the bulletin
[17:40] so what might you see in the bulletin the image here is from august 30th of this year and shows the cyanobacteria
[17:47] index computed from a sentinel-3 image gray indicates clouds and black indicates area where areas where cyanobacteria were not detected
[17:57] this ci image is the seed image for predicting the biology component of the forecasting model as you can see here the bloom is
[18:05] concentrated in the upper in the western part of the basin where these blooms typically originate the initial seed image from august 30th
[18:18] is combined with surface currents from the great lakes operational forecast system system and the general noaa operational
[18:26] modeling environment particle trajectory model to create a now cast of blue movement from the date of the satellite
[18:33] image acquisition in this case august 30th to the date of the bulletin in this case august 31st
[18:39] so that is why this image looks slightly different from the previous one it's a one day step into the future as computed
[18:45] from the satellite model inputs based on wind data from the great lakes operational forecast system a 72 hour
[18:54] forecast of surface currents is created and that's what you see here in this image image it is this surface current prediction
[19:02] along with the now cast image and forecasts of mixing scum formation and temperature dependent bloom decline that
[19:10] are used to create this image which is the cyanobacteria index forecast 72 hours into the future this image can be used to inform
[19:21] research resource managers about the location and timing of landfall of these cyanobacteria blooms there's more information provided in the
[19:29] bulletin publication that i'm showing you here and again i encourage you to read the guide to the lake erie had
[19:36] bulletin the link to that guide is the second one at the bottom of this slide to recap
[19:42] this bulletin provides a 72-hour forecast of cyanobacteria bloom location in lake erie by incorporating satellite imagery imagery fluid dynamics observations and model
[19:53] output output mixing models and a biological decay model based on temperature it's a valuable tool for drinking water
[20:01] resource managers this hab bulletin has been rigorously tested and is operational an experimental model for the same
[20:12] region is the hab tracker developed by noaa's great lakes environmental research laboratory and the cooperative institute for great lakes research it
[20:22] too is a forecasting system and it provides a five-day forecast an animation form for the location and
[20:29] intensity of cyanobacterial blooms in lake erie it updates daily with the latest weather forecast and modeled currents
[20:38] along with the latest clear image of the lake lake the four class excuse me the forecast includes a three-dimensional component
[20:46] to the water motion that allows a nuanced forecast of bloom location both at the surface and within the water
[20:53] column column in this slide you only see the static image from the hab tracker i encourage you to visit their website and check out
[21:01] the animation in the forecast links to the website and more information about the hab tracker are located at the bottom of this slide
[21:10] again this is an experimental product that is making its way through a rigorous testing to one day become an
[21:17] operational product as we touched on last week validation of these models is important towards making them operational a part of validation is
[21:26] the collection of in-situ observations by research teams on the ground observations by citizen science teams are also helpful for
[21:37] confirming the presence of blooms the extent of blooms and the phytoplankton species present while these citizen science observations
[21:46] may or may not be able to be used for model validation they are an important component to monitoring
[21:53] their prevalence and use is growing too it's kind of exciting to see all these creative ideas in citizen science
[21:59] in this next section i will highlight a few citizen science efforts aimed at hab monitoring we'll review four of these projects
[22:11] they are the phytoplankton monitoring network network cyanobacteria monitoring collaborative a project of general aviation pilots collecting imagery and a cyanobacteria
[22:22] assessment network or cyan these citizen science programs are located within the u.s and the audience in the u.s might find these useful
[22:31] even so for all of our participants because we know the large international audience audience we hope you will gain some ideas about
[22:38] how these programs are designed and implemented so it may help you in your regional efforts at designing a citizen
[22:45] science program if that is a direction you would like to take first up is the phytoplankton monitoring
[22:53] network or pmn the pmn was formed in 2001 in the state of south carolina in the u.s as a part
[23:01] of noaa's marine biotoxins program it was established to monitor marine phytoplankton and habs some of the stated goals of the project
[23:11] include include monitor and maintain an extended survey area along coastal waters throughout the year year create a comprehensive list of harmful
[23:21] algal species inhabiting coastal marine waters waters identify general trends where harmful algal blooms are more likely to occur
[23:31] isolate areas prone to habs for further study by marine biotoxins researchers in an effort to assist state managers in
[23:39] mitigating the effects of habs and promote an increased awareness and education to the public on habs noaa trains pmn volunteers and the time
[23:50] it has existed volunteers have identified over 250 algal blooms of which 15 were toxic events the species composition data these
[24:00] volunteers collect help researchers target particular areas for further monitoring efforts this citizen science project uses the smartphone app named phyto to teach
[24:12] volunteers how to identify some phytoplankton species of interest commonly found in the target areas you can see the link to fido in this
[24:22] screenshot of the pmn website if you do go to this website you see that big explore data button and if you
[24:31] click on that button this page will eventually show up this is the phytoplankton monitoring network data viewer
[24:40] there members of the public can access their freely available data sets by navigating to the pmn database
[24:47] and you can see it's focused in primarily on the east coast and the gulf coast states of the u.s but it is a
[24:53] useful piece of information to use if you are thinking of designing something like this for your region
[25:02] another citizen science program is named the cyanobacteria monitoring collaborative collaborative this is actually three coordinated monitoring projects to locate and
[25:11] understand where cyanobacterial blooms are occurring and how they may be changing changing one is called bloom watch and you can
[25:19] see a listing of these three across the top of this screenshot bloom bloom watch is listed here
[25:25] it is a smartphone app that you can download and use it teaches you what to look for when you visit a lake or a
[25:32] river and when you think you see a cyanobacteria bloom you collect imagery of the bloom or the surface of the water
[25:38] using the smartphone and then submit it to the through the app to be sent to the proper agency
[25:46] the next citizen science project in the collaborative is cyanoscope and it too uses a smartphone this one is a little bit more involved
[25:54] and that the volunteer needs to obtain a kit containing a net tow slide making materials an elementary
[26:01] microscope with an attachment to collect microscope images from the smartphone with this project the volunteer collects a water sample with a net toe
[26:10] prepares a slide for the microscope captures an image of the sample and then submits the image to the cyanoscope
[26:16] database via the web the third project is called cyano monitoring monitoring this project is intended to collect
[26:25] water samples to measure water temperature chlorophyll and phycocyanin concentration over time to determine trends in blooms this is to understand how a particular
[26:35] water body may be changing to compare water bodies and to understand if climate change may be having an impact
[26:42] on cyanobacterial blooms the volunteer uses a water sampler to collect temperature and fluorometry and then returns the information via the
[26:51] web web there is a wealth of information on the cyanobacteria monitoring collaborative website and i encourage you to check it
[26:58] out a new program that's just in its early stages of development is a citizen science project that uses general
[27:08] aviation pilots in the u.s we sometimes refer to these folks as private pilots these are people who have volunteered to
[27:16] attach a video camera to the underside of their single-engine airplanes and to collect and return video imagery
[27:22] of the regions where they fly for now this project is primarily focused on the lake erie region
[27:28] the idea is that these pilots who fly somewhat regularly as a hobby could provide an early warning of the cyano
[27:35] hats that form in this environment here is an example of a series of images collected from roughly the same area
[27:44] over a period of a few weeks and it's just going to continue to loop you'll see that these are not
[27:50] geo-referenced images if you're familiar with working with remote sensing imagery they are collected at different angles and on different days and then aren't
[27:58] unlikely to be considered science quality quality but the value they add is that they are collected regularly and may be useful to
[28:06] resource managers for the need to sample a particular region region so if you look at the series of images
[28:13] here you can see at one point it doesn't look like there's a balloon and then as the month progresses you increasingly
[28:20] see a bloom so while this is not science quality data it could inform managers to send out a team to sample
[28:31] we have already talked about a few smartphone apps in the phytoplankton monitoring network we talked about the
[28:37] phyto app this app is available but it is in need of an update of an update and it's on
[28:43] schedule to be updated soon another app that we talked about was with the cyanobacterial monitoring collaborative and they use the bloom
[28:51] watch app which we talked about just a moment ago for these two apps related to the citizen specific citizen science
[28:58] projects we recommend that you navigate through the citizen science project website um to get more information about
[29:04] those apps here here we're going to talk about one app that i find useful and that is the hydro color
[29:11] app hydra color is an app that uses your smartphone camera to create an estimate of remote sensing reflectance
[29:22] turbidity turbidity suspended particulate matter and the back scattering coefficient just as the satellite captures the light emitted from the water's surface your
[29:33] smartphone camera does too in the case of your smartphone it collects light at three wavelengths what we typically refer to as rgb for red
[29:41] green and blue hydrocolor prompts the user to capture an image of a gray card like the type you would use in
[29:49] photography as a means to calibrate then an image of the sky and then an image of the water as you
[29:57] see in the images here that's captured from the phone the algorithm then uses these images and the spectral response curves of the
[30:07] imager to compute an estimate of remote sensing reflectance from the remote sensing reflectance turbidity suspended particulate matter
[30:16] and the back scattering coefficient can be computed as you see in this table of equations here i've used this app before and it's
[30:23] really straightforward to use all it requires is that gray card which you can find through online retailers a
[30:29] smartphone and the app i guess a body of water too hydra color is a helpful tool to use in
[30:35] the field and could be incorporated into a citizen science program note in the table that the uncertainty
[30:42] estimates for the data products are rather high so it is important to validate with in-water measurements from
[30:48] a calibrated system before using this tool operationally as you have seen from other citizen science programs however sometimes even
[30:56] if the data may not be science quality it can still be useful for decision support support i encourage you to check out the
[31:04] hydrocolor website if you would like to learn more about the algorithm and if this tool would fit into your science
[31:10] citizen science program now to hear more about large-scale monitoring and citizen science programs it is my pleasure to introduce today's
[31:21] guest speaker mr wilson salz wilson works with the u.s environmental protection agency on the cyanobacteria assessment network or cyan project today
[31:32] he'll describe the project to us thank you wilson i'll hand it off to you now hey everyone thanks for joining us today
[31:45] my name is wilson solz i'm an oak ridge science research fellow at the epa in research triangle park north carolina
[31:52] i have a master's in soils and biogeochemistry and a bachelors in geology or earth science and today i'm going to be talking to you
[32:01] about a project that we're working on called the cyanobacteria assessment network or cyan for short it's a collaboration between the epa and
[32:10] three other federal agencies nasa noaa and usgs so the overarching goal of our project is to expand the usage of satellite
[32:20] remote sensing to detect harmful algal blooms which i'll be calling habs habs habs in u.s lakes and so why is this
[32:28] important important i think most of you are probably aware but habs pose risks not just to the
[32:33] environment but also to human health and also to animal health effects can include nausea other digestive issues skin irritation
[32:41] respiratory issues liver damage and and very rarely death but more commonly in animals livestock fish and even pets so it's a pretty big deal
[32:54] and we definitely want to get a handle on this um so and and so what how how are we
[32:59] exposed or how are animals exposed um well for us definitely recreational use swimming swimming boating jet skiing
[33:06] um um even just drinking water that has been even if it's been treated by municipal treatment treatment center it could be contaminated still by
[33:14] microcystin which is one of the toxins that we find in hormonal blooms shellfish can be contaminated if they're
[33:21] living in the water that's uh experiencing blue and even produce that's been irrigated uh with contaminated water can be
[33:28] uh can be toxic so a lot of different ways to be exposed um so for us our mission statement is
[33:35] written here and it's to support the environmental management and public use of the u.s lakes and estuaries by
[33:40] providing a capability of detecting and quantifying algal blooms and related water quality using satellite data records records so we hope to achieve this by creating a
[33:50] standard and uniform approach to identify habs to get this information out to the public and to managers who might be able
[33:57] to use it and also to understand how health economic and environmental conditions relate to ads so these are kind of our overarching
[34:05] goals of the project um so and all of our work mainly revolves around generating um and then secondarily using data
[34:17] products from satellite imagery to provide information on haves and when i say products i'm talking about rasters
[34:24] usually geotips that have been calculated by running algorithms across the imagery the raw imagery to represent things like
[34:32] cyanobacteria and chlorophyll-a concentrations and most of you may know but chlorophyll-a is a proxy for aquatic algae
[34:40] algae so that's a good way to detect when we have a hab happening we're also looking at
[34:46] temperature seki depth and turbidity some secondary sort of metrics that we can use to um to understand these habs a little bit
[34:53] better better so so here here's a list of our work products that we're doing with this project
[35:01] we have uh first off we want to compile field validation data so we can assess how successful the algorithms
[35:09] we're developing are and even just developing those algorithms requires training data so we use in-situ water quality data mostly
[35:17] chlorophyll-a or cyanobacteria cell count count and we have to compile that that's the first step next we develop the algorithms and we're
[35:26] using two different satellite platforms mainly mainly that is landsat 8 and also maris which has actually been
[35:34] discontinued so we're switching over to sentinel 3 which has the ulchi or olci sensor aboard so these are the satellites we're using
[35:45] to develop these algorithms and or develop those algorithms for those satellites satellites so so next once we've developed these
[35:55] algorithms we're going to be evaluating how well they perform using the validation data and that's kind of an
[36:00] iterative process of going back and forth between those two steps until we're pleased with the way it's
[36:06] performing based on the validation results results and then once we have this data we want to be
[36:12] applying it to for example looking at which landscape factors such as slope or percentage of agriculture in a watershed
[36:22] or or other sort of geographic variables like that temperature precipitation which of these are the primary drivers
[36:30] of habit currents in in the lakes we're looking at in the u.s also what are the health effects and the
[36:36] economic impact of habs occurring in these areas and finally and this is a big one that we'll talk more about later
[36:43] but data dissemination getting out the products that we're generating so that they can be used by the public
[36:49] so so this is you know eventually we want this to be available to the public anyone who wants to go recreate in a
[36:57] water body for example but but for now the main the main objective of the project is to get this
[37:02] out to managers um um mainly state and municipal entities and also um epa regional offices that might be able
[37:12] to use this this information so for example you might be closing a beach if it's to cyanobacteria concentration is too high
[37:22] you might be closing off drinking water intakes intakes these kinds of things so look at the in-situ data
[37:31] we're getting it a lot of where we get it is from this website the water quality portal it's a
[37:37] public website anyone can access it and it's basically a repository for all kinds of water quality data so you
[37:44] can you can go here yourself and download things like secchi depth you can download um things like
[37:52] macro invertebrate counts that kind of stuff we're using it for chlorophyll a mostly um and again we're looking a
[37:58] little bit at sucky depths too and um and so but for chlorophyll a and well for all data this is a really
[38:06] great resource and there's a lot of data here here but but it's since it's from so many different
[38:11] organizations federal state local dumping data onto the site it's it's in various different formats and sometimes the quality of the data is
[38:22] uh not not what we need it to be so um just to note there's about a 30 error in in-situ chloroplast
[38:30] measurement up to 30 so that's pretty high high and if we have erroneous data that's you know that's the inherent error in the
[38:38] sampling tools so if there's also error in the data as it's entered into the database um then that's a big problem so one of our
[38:46] objectives is to really filter out the highest quality data so we can be sure that when we're using this data to
[38:52] either train the satellite algorithms or to validate them we're actually doing it reliably and we can count that data
[38:59] as much as possible and that's a big role that usgs is helping us out with so looking at
[39:08] sort of an example of a spatial and temporal temporal extent of this data this is lake temperature so we're using um actually a
[39:17] paper that's coming out pretty soon here a paper to look at validating landsat surface temperature so using landsat to
[39:25] estimate lake temperature and so this is the in situ data that's available to us and you see that
[39:32] the left-hand graphs here are showing the distribution of this data throughout time time so generally across the years it's gone
[39:40] we've had a good increase of data over the years this drop-off we think might just be due to data not being reported
[39:45] yet at the time that this figure was made made but um generally there's there's been an increase but it does change and it
[39:51] fluctuates and who knows what can happen with the availability of funds for example to take these samples
[39:58] but a bigger issue we think is down here looking at the month of the year we have a big spike in the summer
[40:04] especially in august and really not much data institute data out in the winter so with satellites we can get kind of
[40:11] continuous coverage throughout the year um so this is a really good a really good good way to supplement this data and just to
[40:18] know we're in no way proposing that satellites would would replace in situ sampling we obviously need the institute sampling to
[40:26] to be able to make the satellite approach work but it's a nice we do think it's a nice complement and it
[40:32] provides a lot more information than just the institute sampling alone so looking over on the right we get an
[40:40] idea of more of a spatial side and so the x-axis is showing the number of stations per lake and the
[40:48] y-axis is showing the frequency in each of those bins so you can see the point of this graph is basically that
[40:53] most lakes have only a few stations uh 10 or maybe even five or fewer mostly one one and there are not that many lakes that
[41:01] have a lot of samples and then with satellite imagery you have basically as many samples as you have
[41:06] pixels in a lake so that's a nice improvement improvement looking at the bottom graph we have the area
[41:14] area bins of lakes on the x-axis and on the y we have the number of lakes so the bars are
[41:20] showing how many lakes there actually are in the national hydrologic data set and the triangles are showing what's available
[41:27] within situ sampling in each of these bins and the circles are showing what's available with landsat so you can see there's a lot of
[41:34] lakes lakes um pretty much in every area category that have that have data from landsat so basically we have um you know again
[41:43] just a big wealth of data that's being added by by cell information i think all of you
[41:47] know that if you're in this webinar um um and so spatial resolution same kind of story here but um like i mentioned we're
[41:55] looking at landsat and then maris which is being essentially replaced by ulchi and so landsat has a 30 meter resolution
[42:03] pulte has 300 meter and we want to get a 3x3 pixel window um at least that big so if
[42:11] the lake has fewer than 3x3 pixels that is covering it then we don't want to use that lake and the reason for that
[42:18] is the center pixel here we know is reliable we want to get a center pixel that we're certain has no mixing of land
[42:25] signal on the outside these pixels move across different images um you know that's that's not ideal obviously but they they can do
[42:32] that so um if it's you know this pixel or this pixel bounces over here a little bit we
[42:37] might be getting a lan signature so we don't use these outer pixels we just use the inside ones
[42:43] so this is the minimum size of a lake that we could see with landsat and the minimum size we could see with ulchi or
[42:48] maris maris and we look at the us this is the distribution of lakes um um across the entire country of conus at
[42:55] least and we have about 170 000 of 276 000 total lake so we can see which landsat so that's pretty good um
[43:04] maris and olchi obviously it's fewer close to 2000 but that's still a lot of lakes um and these are some of the big
[43:10] high impact lakes that are used for drinking water so still a really good resource another thing to note is that landsat is landsat
[43:18] 8 is every 16 days and maris ulchi pretty much every day so this is a really good temporal resolution here
[43:25] which we're going to talk about next so so these maps are showing lakes blown up and color-coded so the lakes
[43:33] are obviously not this big but they're just blown up so you can see them here and and they're color coded by um you know
[43:41] redder is more images per year and these are cloud for images per year with landsat and with maris and
[43:48] central 3lg so you see with landsat we're getting somewhere generally between about at least 10 and up to maybe 30 images and
[43:56] we have these red stripes where we have overlap overlap between these image paths here and the great lakes and other large
[44:03] lakes are showing up as zero because they don't actually get a single path covering them they're too big but they
[44:09] still obviously have have data in them as well and over here we have as many as almost every day of
[44:16] the year with with the sentimental three so that's really good we have a really high temporal resolution here
[44:26] so so let's talk a little bit about how well these algorithms are performing because obviously if they're if they're
[44:33] not performing well they they don't really help us um but luckily they are uh for for maris at least um
[44:40] we have some pretty good validation data here so we have in situ chlorophyll a on the x
[44:45] and um the mirus calculated quartal a and the y and um you know it looks like the state is
[44:52] pretty clustered but we have pretty good numbers here um root mean square error mean absolute error and bias these are
[44:58] the same units as the chlorophyll a so as a percentage of this range these are pretty good numbers
[45:04] and this is just in florida down here we have florida and also ohio and new england england and
[45:11] and again we have a pretty good mean absolute percent error here which is if if you recall back to the in situ
[45:18] error it's about 30 up to 30 so this is kind of within that same range and in terms of uh ocean color and
[45:25] water quality remote sensing um it's a pretty good value so we're pretty happy with this however the um the landsat
[45:33] algorithm uh we're still working on that that isn't quite um here yet but we um we're optimistic that we're going to
[45:40] get get something hopefully close to this and we're also looking at sentinel 2 which is the european space agency's sort of
[45:48] equivalent to landsat and they but they have some extra bands in the red and red edge range that we can use
[45:56] we think that these are actually going to be better for chlorophyll a detection so we're also looking at
[46:00] sentinel 2 as an option as well so so looking a little bit at how we can apply
[46:09] this data this is the spatial trends and spatial extent extent of cyanohab occurrence and so the top
[46:18] the top plot is showing us florida ohio and california and the zigzagging lines are basically you know the data that we have
[46:29] and so each of these is probably one point point and then these lines are showing a trend
[46:35] that we fit through the data here and and this is uh the top one is showing us
[46:40] bloom area across 2008 and 20 through 2012 and the bottom one is showing us the percentage of bloom area of the
[46:48] resolvable pixels that are available in these areas so let's look at this one this one's we think a little more meaningful the
[46:54] percentage of blue area that that does um occur in in the resolvable area and um we see that florida
[47:03] and ohio are both multitude of increasing increasing and actually ohio has a higher percentage of lakes that are pixels and
[47:10] lakes that have blooms that appears here but california might even have a small decrease decrease in in the spatial extent and we can kind
[47:19] of look over here at this y value here and so we have no detect and then whether there's a bloom at all
[47:27] and the balloon is split into low moderate and high based on the world health organization threshold threshold for these categories um for
[47:36] cyanobacteria cyanobacteria and and uh the lower the lower this number so this number is kind of telling us how
[47:43] many years does it take for us to see a trend in the data so the lower this
[47:46] number uh the more of a trend there is and and we can see that in florida the no detect
[47:53] is is decreasing actually in only about three years we see a pretty good trend there and an increase
[47:59] in bloom area in only four years so these are both meaningful numbers these numbers low and moderate not quite
[48:05] as much but high it only takes two years to see an increase in high so we do think that
[48:12] there's been an increase in spatial extent extent of haves in florida ohio a little bit less certain
[48:18] there's nothing that really pops out there as being a super low number but california we have uh an increase in
[48:25] no detect um with a pretty meaningful number here um um and that's so suggesting that there's there's been um less areas affected by
[48:34] blooms blooms over time over the study period but this is just keep in mind this is a four year
[48:38] study period so um we're not it's not completely certain that this is the case but um just what
[48:45] we've seen in the study period is is that this this appears to be what's happening so so looking now at the frequency of
[48:55] occurrence of cyanoheads and and this figure on the right is or sorry on the left is showing us the percentage of
[49:02] time time the number of images per total number of images images that that we see blooms that are above the world health
[49:09] organization high threshold which i believe is 100 000 cells per milliliter and so you can see lake apopka here in
[49:19] central florida near orlando is uh bright yellow it's almost all the time all the images we have
[49:25] has a bloom and the other lakes a little bit less so but there are certainly some spots that
[49:29] are are that are popping out still even this is um um like okeechobee and the outside you can
[49:35] see does have obviously some somewhat freaking bloom area in that around this area too so [Music] [Music] this is this is just another way to look
[49:46] at the data that we have and we can look over here at this right hand figure is kind of showing us
[49:52] different ways to look at this data relative to water intakes intakes so the first example would be here
[50:00] we have what we call adjacent is when there's a water intake that's directly in this three by three window
[50:06] so we're pretty confident you know when we have this if we can't quite get that we might do this other approach called
[50:11] proximate which is a window that's closest to an intake in this case here and if we can't get
[50:18] that or just if we want to know about the whole water body we can look at the
[50:21] whole water body or we can even look at the whole watershed so those are just different ways to kind of slice this
[50:26] data um and and look at what's happening so kind of following up on that this is maybe a little complicated but um i
[50:35] think we can get there so these these are all dots and the gray dots each on the top one
[50:41] represent a one of the three by three windows i was just talking about in adjacent ranking so the black ones represent a drinking
[50:49] water intake that is well a three 3x3 window that contains a drinking water intake so looking at this this is the top quartile
[50:58] here here you can see that there are a few of these that fall out kind of at the top
[51:02] and this is again the percentage of pixels that exceed the who high threshold threshold and just just ordered and ranked this
[51:09] way so all this area here might say this is high priority area and it contains a few drinking water
[51:16] intake so that's definitely a cause for concern in those areas and down here just another way to look
[51:21] at it is with the water body ring that i was mentioning and so this is in this case each of the
[51:27] gray dots recommend represents a lake a single water body and each of the black dots represents a
[51:35] water body that contains a drinking water intake so it's a little bit the results are a little bit different but
[51:41] we can still see you know kind of another way of looking at and identifying the highest priority
[51:46] lakes this is similar to the earlier map that i showed of frequency in florida but for the whole country so
[51:57] um looking at the frequency of time the percentage of time that the images we have that the center
[52:03] bacteria concentration exceeds the who high threshold and and it's just interesting to see we see a few hot spots around the country
[52:10] certainly certainly in florida and in kind of the south and lower midwest so just just a neat figure
[52:18] preliminary data but still need to look at so now uh i just want to talk a little
[52:26] bit about some of the tools that that we use and and that are also available to you
[52:31] if you want to do similar work and so the first is cdas which is open source publicly available
[52:40] platform created by nasa and it's kind of similar for those of you don't know it it's kind of similar to arcgis a
[52:45] little bit but it's more intended for remote sensing and there's a lot of image processing capability it's a really neat really neat piece of
[52:53] software software and and eventually we're going to be having nasa is going to be making the the [Music]
[53:02] [Music] the cyanobacteria index data that i've been talking about from ulti available here here and and then also being able to
[53:12] do your own processing on that on that imagery so you can create you can either use the products that that nasa and we
[53:18] have created or um you can you can do your own products that are tailored to your own needs
[53:25] so this is a neat open source software that's available at this url if you want to get it
[53:29] and over here is another one that's has some overlapping capability but basically basically is a plug-in for arcgis it's called rs
[53:36] tool it's developed by noaa and it basically allows you to query um query these geo tips that we're creating
[53:45] for for different you know cyanobacteria metrics that you're interested in so if you want to get this
[53:51] if you're an arcgis user and you want to stick with that then you can contact shelly at this email address here
[53:56] and she should be able to hook you up so so finally i want to talk about kind of the
[54:05] ways that we're going to disseminate this data and i think this is probably of a big interest for some of you
[54:12] and so this is the cyan epa mobile application mobile app and and this is something we've been working on
[54:20] tirelessly for the last couple years and i'm not directly working on this but i know that i've heard a lot of moaning
[54:26] from from uh uh from the folks who have been that it's you know it's an arduous task developing
[54:31] an app is is not a small thing um but we're really really happy this is showing a lot of promise
[54:37] right now we're kind of in the beta testing mode and and i'll talk a little more about that in a
[54:43] minute but basically the the goal of this of this app is for us to to allow people
[54:50] who may not have the expertise or the time to um um to process the imagery and maybe
[54:55] download the images and do all these things things um to access the data in an easy on-demand way so this again is for
[55:04] managers who want to who are interested in in things like beach closers or closures or drinking water intake
[55:12] you know more immediate impact sort of things or even managers who are interested in long-term mitigation of
[55:21] have occurrence if you want to look at how we can reduce abs or where mainly where we need
[55:27] to reduce habs the high priority areas this app can kind of give you an idea of that
[55:32] that so um on the left this is kind of just the splash screen where we see you can drop pins in various locations
[55:40] of interest and these will show you kind of you know what the cytobacteria concentration is the cell count
[55:49] for the most recent imagery and they're color coded by these thresholds which you can actually set yourself you can change them by default
[55:56] they're looks like they're set to the who thresholds but you can change that so you can come with your own color
[56:01] coding scheme and then here's a screen that basically just shows another way of looking at those pins
[56:10] a few more metrics like the trend and the last the last week how it's changed across the last week
[56:20] here here on the left is another way of looking at the data so you can also have a
[56:26] nice google images backdrop um and you know for this given pin right here in florida we can look at all the images that are
[56:35] available available and and then you can click on one and you get to kind of get a nice zoomed in view of it
[56:41] and you can download it to zoom in further or you know use it for a presentation or
[56:47] do whatever you please with that and over here we can kind of get a taste of what's happening over time at
[56:55] your different locations with this trend analysis tool which kind of makes a nice a nice plot that you can
[56:59] see how your different points are kind of performing over time so for now this is basically we've been
[57:08] beta testing this like i said with some state environmental departments and the regional epa offices um we're going to be doing that kind of
[57:17] moving forward for the first foreseeable future of the project and and um and eventually we want to make this
[57:25] we're hoping to make it public but we will definitely be putting the the code for this on github so it will be
[57:31] publicly accessible um and you know we're just really optimistic we think this is already making an impact because
[57:39] until recently we were using merit archive nearest data which is you know it's not current but it's just
[57:46] a way for the managers to kind of see the app understand how it works and give us any feedback on it
[57:52] but in the last couple weeks we finally started pushing uh live ulti data so um this is this is really exciting for
[57:59] us um we think that again that like this season it's gonna be making a difference it's gonna be allowing managers to
[58:04] um to use this data and identify identify blooms and and then of course moving forward that will be more and more the case
[58:13] over time and so if you're interested in in in using this app and you're from a state
[58:20] or federal agency then please drop me a line i have my email address at the end of this
[58:25] presentation so i'd love to hear from you and finally this is just kind of another way that we're hoping to disseminate
[58:32] this data or that we're going to disseminate this data and this is with the epa's enviro atlas
[58:39] this is a web hosted mapping application that has all kinds of data mostly kind of environmental and
[58:45] demographic data invasive species biodiversity data pollution data all kinds of stuff but we'll be putting our cyanobacteria data up here as well
[58:57] so that's pretty exciting and that should be happening later this year year for florida ohio and california
[59:04] and then in about a year from now we'll be putting up the rest of the continental u.s the rest of conus
[59:09] will be up here not exactly sure when but roughly hopefully hoping for about a year and this is publicly available so anyone
[59:17] can go on here once it's up so keep your eyes peeled and we're excited for this to come out too
[59:24] so with that i want to thank you for listening and give you the url for our website and my email
[59:31] address i'd love to hear from you if you have questions comments or just want to get in touch
[59:36] and i'll just say for those of you who are not in the u.s we think that this
[59:40] the approach that we've taken is replicable pretty much anywhere around the globe because these satellites landsat and ulchi
[59:48] do have global coverage so we think that if you have your own in-situ in-situ chlorophyll a data or cyanobacteria data
[59:56] to validate with then basically you can you can use the algorithms that that we're using in developing
[1:00:03] developing and they'll be they'll be published um in scientific literature and the the code that we've been using
[1:00:09] for for assessing the frequency and the extent of these blooms will be available on github as will the source code for the
[1:00:17] app itself so it will be possible to to basically develop your own app um in using some of
[1:00:23] the resources that we have used and created to do to do your own similar approach and i would just emphasize i think a big
[1:00:31] part of this project um attaining what i would say is some pretty great success so far is
[1:00:37] engagement with with the stakeholders and and from the very beginning um getting in touch with the people who who will be
[1:00:44] benefited benefited from by this and and will be using the data um and seeing what their needs are what
[1:00:51] problems they're facing and and and you know using that to kind of uh develop your approach and then you know
[1:00:58] while while that approaches being approaches being developed kind of um keeping them in the loop and included
[1:01:05] on decisions that are being made and then certainly during the testing period both so that you can get their feedback
[1:01:11] and make the tool better and so that they can um you know continue to feel like they're part of the process and and
[1:01:17] so that they can certainly have a kind of a feel of how things are going to look and how they might be able to use
[1:01:22] it it moving forward so i think you definitely think it's a replica of approach and replicable approach and
[1:01:29] um um and hope that uh it can work for you too so with that uh thanks and i'll be happy to take any
[1:01:36] questions later thank you wilson for your presentation on cyan today we have talked about cyanohabs more broadly shown examples of
[1:01:54] freshwater cyanohab monitoring tools talked about examples of how citizen science can be used to aid and hab
[1:02:01] monitoring including some smartphone apps to help in monitoring finally we learn more about the cyanobacteria assessment network or cyan
[1:02:14] so to sum up this webinar series why did you take it the objective of this course was to
[1:02:19] provide an overview of satellite earth observation resources data and tools available for harmful algal bloom or hab applications
[1:02:28] we hope that by now you are able to identify nasa's earth science remote sensing data products for the
[1:02:34] identification and monitoring of hads to describe how coupled remote sensing and modeling approaches are used in decision support tools
[1:02:43] and to use some nasa earth science data tools to monitor perhaps thank you so much for your participation
[1:02:51] in the introduction to remote sensing for harmful algal blooms webinar series in a few moments we will begin the
[1:02:58] question and answer period these question and answer sessions are being captured in a document made available on the course website and you
[1:03:05] can return to the document later also as a reminder recordings for each week's session are available on the rset
[1:03:12] habs course website if you wish to return to watch them and remember your homework assignments are due on october 1st for homework
[1:03:20] number one and october 15th for homework number two all righty so um on question three i may
[1:03:35] again call in wilson to to help with this one is how can we access model these models or tools my default
[1:03:42] especially because we profile it in this webinar series is that um we've talked already in week two and
[1:03:49] we've talked a few times and wilson mentioned it in his presentation as well is the use of cdas and the ci algorithm
[1:03:56] is one of the available algorithms for a data product using cdas the unfortunate thing is that you need a
[1:04:04] mac unix or linux system to do the processing that you would need to derive this data product if you have a windows
[1:04:10] system that you would not be able to get through to that level but it is possible to compute the ci
[1:04:17] another approach that you could take is you could you have the algorithm you have the equation for it you can do the
[1:04:22] math yourself if you have image processing software where you can look at each of the different reflectance
[1:04:27] bands bands and do that computation yourself um i don't know if wilson you want to add anything more in there
[1:04:37] sure so another option that i mentioned the presentation um is rs tools and so if you don't have a mac or unix or linux
[1:04:45] machine you can use but if you do have arcgis which you do need unfortunately for rs tools but
[1:04:50] if you do have that on a pc machine you can use um rs tools to to do that same process so that that
[1:04:57] could be helpful for some people great have you used the rs tools tool um i i have not personally uh
[1:05:04] unfortunately but yeah i think it's i think it's pretty user friendly and i think they've improved it um
[1:05:09] uh in the last year or so so it's okay yeah i think i'll be sending an email to
[1:05:14] michelle tomlinson because i'm really interested in being able to see how we could expand this just because different
[1:05:20] user groups use different tools and if people are already using arcgis then this might be a way to expand and be
[1:05:25] using remote sensing more than the capability that exists now so thank you for sharing that with us
[1:05:31] i hope she doesn't mind all the email okay this next one i'm gonna need to call an amita because um this is not my
[1:05:44] area of specialty and i really appreciate amita coming through for us and talking to us a lot more on question
[1:05:49] four four and i'll read it and amita if you don't mind going audible i'd appreciate it if
[1:05:54] we can hear your answer and the question was you mentioned wind data can you please share some global publicly
[1:06:00] available wind data sources and also their applicability so can you view me yes just a little bit
[1:06:09] louder please okay yeah so um there are two sources that i'm aware of uh the first one is
[1:06:15] mera that's a reanalysis model from nasa uh it's so it's a model in which a lot of satellite data gets assimilated
[1:06:24] and uh that provides uh surface winds that it's what you talking about in the presentation so and joanie tool we
[1:06:33] talked about in week two for uh getting modi's product so it's the same tool if you search mera or if you search wins
[1:06:41] you will get to the link where you can download the wind data data these data are about half degree
[1:06:50] or 0.5 by 0.6 degree resolution so it's relatively relatively uh low resolution so on inline lakes you have to see how big your reservoir
[1:07:01] is that you're interested in but these data are easily available the second one uh is from satellite schedulometer data these data
[1:07:13] are produced by nasa jpl and um you can go there and find the data but they're also available from the nova side that i
[1:07:23] mentioned here this is um this is a scat but there's quick skit the different satellites carrying schedulometers and all these data are
[1:07:32] available available through both nasa and nova so these data have resolution varying from about 12.5 kilometers to 50 kilometers depending on
[1:07:44] which spectrometer you use so that's slightly higher resolution than mira and these spectrometers are where specifically the data were used to get
[1:07:54] surface winds so um you can use those i'm not sure how well they resolve uh inland lakes
[1:08:04] because they were designed for ocean surface winds uh but i'm like we're seeing these on great leagues and like bigger reservoirs
[1:08:12] you can get this data for sure all right thank you alita so i'm gonna just move to number five
[1:08:25] um um what is the possibility of reusing have affected freshwater lake water for drinking and irrigation purposes
[1:08:33] and and just to let you guys know that my area specialty is in the remote sensing of
[1:08:38] these these blooms it's less so in the toxins and wilson came through and really helped us out here
[1:08:45] with his team but my understanding is that when the bloom ends the toxins and the environment will begin to reduce but to
[1:08:52] be certain it's important to test the water for toxins before allowing use and wilson provided a lot more
[1:08:57] information for this on this link here with the um the epa link on groundwater and drinking water
[1:09:05] and then some more information on cyanotoxins and drinking water and there are a whole bunch of different links
[1:09:10] that you can find in there on best practices and advice to management on when it is safe to open up the
[1:09:18] lake for our water source for drinking water purposes so i would advise you guys to go to that
[1:09:25] link to get more accurate information than just the remote sensing information i did want to skip down because we have
[1:09:35] wilson with us here on to question 10. um because wilson is now has become quite expert at looking at
[1:09:42] small inland bodies of water uh that this person was happy to see that florida was profiled and that one area
[1:09:50] that they're interested in is the indian river lagoon estuary and it's 150 miles long but it's not very wide
[1:09:58] what would be the best imagery source for that application and this person's asking if landsat 8 data wilson do you want to
[1:10:09] add anything in here and a suggestion um so one thing one thing to note about our project is right now we've been
[1:10:19] looking looking um pretty much not not solely but mostly at inland lakes um so estuaries are a
[1:10:25] little more complicated there's a little more going on so we are looking at those as well and
[1:10:31] um trying to think if we have maris data available i think we do and and coming ultra data um so i think we
[1:10:40] will be looking at those down the road i just looked at the indian river lagoon and it looks like
[1:10:45] it's um kind of on one side of the barrier island on the outside of the atlantic coast of florida and
[1:10:50] it looks like it's wide enough that you could get some ulchi scenes in there or an ulti
[1:10:56] scene with with some you know 900 so 300 meter pixels um i'm not sure if it's a kilometer wide
[1:11:03] but it looks like it might be so um if not then uh landsat yeah hopefully down the
[1:11:09] road would would provide that information unfortunately we're not quite there with the landsat 8 algorithm yet but we're optimistic
[1:11:15] that we're going to um get something moving forward so um yeah i would say stay tuned on that
[1:11:20] and um and hopefully uh if it's too small for and olc that then we can do with landsat
[1:11:28] great great thank you um um also there may be some work that's coming out it seems nutella is talking
[1:11:35] and i think we'll learn more tomorrow about the landsat or excuse me sentinel-2 sensor and being able to do
[1:11:40] more with water quality and we're learning more about that ourselves so stay tuned a couple of questions have come in
[1:11:48] question nine is one and i think there may be one other question here on asking some questions about the apps
[1:11:57] the the links to the apps we've provided in the slide set but i can also duplicate them here in the question and
[1:12:02] answer after we're done with this question answer period we mentioned a few of the monitoring apps that are out
[1:12:08] there hydra color is one um the different um apps that were part of the um the cyanobacteria collaborative the fido app
[1:12:18] which is still um ready it's just about they're working on another release it's a little out of date so we can provide
[1:12:24] the links to those in this question answer but we'd also encourage you if you don't want to wait for the document
[1:12:29] to be available online is to go back through the pdf and follow the links from the slides that are there another
[1:12:36] question came up and i think it's actually just question eight um and then a related question sorry to
[1:12:43] make you jump around elizabeth question eight but i think it's also question 11 touches on this as
[1:12:48] well um asking some questions about monitoring chlorophyll and suspended sediments from mobile apps this is where i would advise you guys to
[1:12:56] go look at the hydro color app and to read more carefully the document the the website itself but also
[1:13:04] they have the um articles that they cite in the document because it provides a lot more information there on the actual
[1:13:10] practical app use of the app like how far up off the water and those sorts of details but it also provides information
[1:13:16] about the algorithms that are being used and importantly the uncertainty estimates estimates bounding the chlorical estimate that you might make
[1:13:24] for example so it's important to understand that your phone only provides some level of information that you recognize that there may be
[1:13:35] fairly wide uncertainty boundaries on those those unlike perhaps a calibrated optical system but at the same time it may still
[1:13:42] provide important information qualitatively on tracking algal bloom in your environment alrighty i have one last question for
[1:13:52] wilson i kind of gave you a heads up i was going to ask you this and then i
[1:13:55] think we're going to wrap it up for the questions any other questions that we didn't get to in the document here we'll
[1:14:01] make sure to answer those and make those available to you guys as we've said so wilson we have a really large
[1:14:08] international population and i was i'm really interested in the cyan tool and i'm excited about it and i'm thrilled
[1:14:16] it's in the u.s so it's something that is in the area where i work but i know
[1:14:21] that a lot of our international office audience may be interested to know how could they apply something like cyan in
[1:14:26] their environment and so i was wondering if you could touch on that and give us some ideas
[1:14:31] here here yeah sure i'll try to talk relatively slowly so that elizabeth can catch up with the piping
[1:14:38] um um louder too please sure um is that okay yeah that's better okay great um so i would say
[1:14:47] um um just just to directly answer that question um in a short the short answer is we're not going to be expanding this
[1:14:54] beyond the us that's that's our um current our current extent is just the continental united states the 48 states
[1:15:01] um however it we do think that this is an approach that is um viable for pretty much anywhere
[1:15:07] around the world since these satellites do cover have global coverage so essentially we'll be making at the end
[1:15:15] of this project i think i mentioned it but we'll be making a lot of the code that we use to develop
[1:15:19] the application the mobile app available on github and we'll also have some code up there for for methods of assessing frequency extent
[1:15:28] duration and magnitude of harmful blooms so those are all things that that different folks around the world
[1:15:35] can integrate into their own projects to assess you know where and and how much much are harmful balloons happening in their
[1:15:42] areas of interest we're also hoping to put up some code to establish match-ups so that's in-situ data with
[1:15:51] satellite overpass so you can basically if you need to validate any of the algorithms that we've either come up with or validated
[1:15:59] ourselves here in the us if you want to validate them in your area you you might be able to use this code in order
[1:16:05] to assess when and where these these matchups occur so you can see how well those algorithms are
[1:16:12] performing in your specific area and and potentially even changing certain parameters in in those algorithms so you
[1:16:18] can can make it more accurate for for your area so um i think you know it you're welcome to
[1:16:27] contact me or other folks on the project and ask us advice if you do hope to do this in your own area but i think
[1:16:35] that generally given given given the availability of the data and hopefully the tools that we'll be providing down the road
[1:16:44] it should be something that that folks can do pretty much any player in the world so pretty exciting
[1:16:49] great great well wilson thank you so much for providing information to us about the cyan project it's a really cool project
[1:16:57] um um and i just wanted to thank everyone here for participating in this webinar series please feel free to send us email if you
[1:17:05] have questions please continue to put questions into the question pod we'll get to those after the webinar series
[1:17:13] this is the last week of the webinar series we're glad you hung on for the full four weeks thanks for your interest
[1:17:19] and for participating in this webinar series you
