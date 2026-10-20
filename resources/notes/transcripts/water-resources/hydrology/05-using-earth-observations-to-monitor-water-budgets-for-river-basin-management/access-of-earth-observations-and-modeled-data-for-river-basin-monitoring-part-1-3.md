# Access of Earth Observations and Modeled Data for River Basin Monitoring, Part 1/3

`https://www.youtube.com/watch?v=FguKFg-Y1zc` · id 8 · 1:37:36 · module 109 — Using Earth Observations to Monitor Water Budgets for River Basin Management

[00:01] Hello and welcome everyone. Welcome to this our set webinar on using earth observations to monitor water budgets for river basin management.
[00:11] I'm Amita Mehta and along with my colleague Sean McCartney, we will be presenting this training. As you can see this is part two.
[00:21] Last year we presented an introductory webinar on the same topic. And during our post training survey, we
[00:30] received several requests that there was an interest in working with these data getting more hands-on experience in
[00:37] working with remote sensing and modeling data which can help in monitoring water budget components and that's why this
[00:46] more advanced webinar is planned. So the overall objectives are to identify and access remote sensing and earth system model data for estimating
[00:58] water budgets in the river basin. Replicate the steps for estimating water budgets for a river basin and sub water
[01:05] sheds using remote sensing products and GIS. GIS. And understand the source of uncertainties involved in estimating water budgets for river basins. And this
[01:15] last part is very important because conceptually conceptually estimating water budget seems easier but because of the variety of data sets
[01:27] used, used, availability of data sets, their quality and uncertainties in those data sets contribute greatly to water budget
[01:37] estimation and it's really a very difficult problem as most of you probably know. So So when we go through this webinar, one of
[01:46] the major objectives is to see what kind of uncertainty sources are there for estimating water budget. There will be three sessions.
[01:58] Today, we will review and access earth observations and earth system model data for river basin monitoring and
[02:04] management. management. The next two sessions, it's mostly working with these data, doing hands-on exercises on your computer, download
[02:15] downloading data and using those data in GIS to look at water budget components. So, next session will be for water
[02:25] budget estimation using remote sensing observations. So, can we use various satellite observations and estimate water budget? And then the last
[02:35] session will be to do the same using a global land data assimilation model version. version. So, this is the overall outline.
[02:45] And this is the training format here. All three sessions three sessions are about two hours each. There will be two
[02:53] parts. First part is presentations and demonstrations of data access, calculations, and analysis. And the second part would be lab lab time for
[03:03] all of you for hands-on computer-based exercises. The exercises and step-by-step exercises are provided on our website as well as
[03:14] through this meeting portal that you can download and work on the exercise in the lab time. There will be three homeworks, one after
[03:22] each session, and these assignments will be available after the session is over from the ARSET website. And the due dates are given here: 11th,
[03:33] 18th, and 25th August for first, second, and third homework assignment. assignment. There will be a certificate of
[03:41] completion awarded to those who attend all webinars and complete all homework assignments. And the certificate will be
[03:49] sent by Marina Smarthins in about 2 months after the completion of this series. So, there there are a couple of prerequisites
[04:03] here, which will help in moving smoothly through this webinar series. So, first of all, fundamentals of remote sensing.
[04:11] Uh that there has to be some background of when we use different jargons, you would know once you've taken this
[04:16] webinar, fundamentals of remote sensing. The second one is the one that I mentioned earlier, that is introductory
[04:22] webinar on monitoring water budgets for river basin management. This has um a detail of how to manage uh river
[04:33] basin, what is required, all different data sets are discussed there, and there are also some demonstrations of using
[04:39] these data sets. So, these two webinars will really help in going through this webinars webinars uh very smoothly.
[04:48] Um Um then there was a introductory webinar on groundwater monitoring uh using GRACE missions. That was offered um a month ago or so, and that
[05:00] focuses specifically on uh groundwater data, and we're going to use data from these missions. So, if you haven't gone
[05:10] through this webinar, we recommend that you also view this uh webinar so that you can easily work with GRACE data, and
[05:17] you know uh where uh how accurate these data are, what are the limitations, what are the advantages of these data sets.
[05:26] Also, you will require uh username and password to register or to log in to NASA Earth Data Portal.
[05:34] This is the portal where you will be downloading data from. Also, you need ins- uh need to install
[05:40] QGIS uh version 3. whatever is the current version, or any from 3.6 onwards. Uh if you have that, uh that
[05:49] would be sufficient. So, you have to have QGIS and then there is a instruction here at this link how to do
[05:56] that. that. There are other relevant Arset webinars. They will might be helpful. One is river basin delineation based on NASA digital
[06:07] elevation data. This helps in deciding if you want different levels of watersheds within a river basin. How would you delineate
[06:17] them using HydroSHEDS tool and so that's a useful webinar. Also, there was an advanced webinar working with
[06:26] GPM iMERGE precipitation reanalysis data. So, these are all useful webinars which can help you towards this current
[06:35] webinar also. With that, we will start with today's session. session. We'll start with a brief introduction of
[06:43] Arset for those of you who are new. Then, we will have a review of water budget in a river basin.
[06:50] And then review of data for water budget estimation from remote sensing observations and global land data assimilation system or GLDAS.
[07:00] Then finally, we will have demonstrations. demonstrations. We'll show remote sensing and GLDAS data download procedure and we will focus on
[07:08] a case study. We will look at a Limpopo river basin in southern Africa. That's Limpopo river basin. We will talk about
[07:16] this basin when we go through the demonstration part, but this is the case study. It's It's like It's not a very
[07:23] large river basin, but it's not a small river basin either. And that's why we have picked this
[07:28] case study. So, through this case study, we will see how to use different data sets to look at water budget components.
[07:36] Later on, you can use the same procedure to to apply to river basin or watershed of your own interest.
[07:46] Now, I also want to emphasize before we start this webinar is that the idea here is to show various data sets as well as
[07:54] the procedure to estimate water budget components and get some idea of how a water budget is changing from season to season and you
[08:05] can do that for year to year, also. So, So, emphasis is on introducing data and going through procedure and then we will
[08:13] see how uh we can gauge um uncertainties in in these data sets and and water budget estimation.
[08:24] So, about ARSET, ARSET's goal is to increase the use of Earth science in decision-making and so the trainings are meant for policy
[08:33] makers, environmental managers, and other professionals in public and private sectors. All the material that we present are
[08:41] freely available um and they're available through the ARSET website. Um if you use the methods and data presented in ARSET trainings,
[08:50] we request that you acknowledge uh NASA Applied Remote Sensing Training Program for that, but then you can use it and
[08:57] customize this customize uh the material for your own use. Here's a quick look at how many trainings ARSET has done in uh close to
[09:09] uh more than 10 years, about 150 plus trainings, uh trained more than 40,000 participants from 170 countries
[09:19] uh with more than 7,500 organizations. And as you can see, uh uh after 2015, uh a lot of people have joined ARSET
[09:28] webinars. That's what the size of these bubbles show. To learn more about ARSET, you can visit the website. There is also a list of
[09:39] that you can sign up to stay up-to-date with RCET activities. All the material for today's webinar are
[09:47] also available from this website. So now we will start with review of water budget in a river basin.
[09:56] So first, what is a river basin? And I'm going to start this animation here. It shows Mississippi River Basin.
[10:03] It's an area of land that drains water into a river and its tributaries. So a river basin usually has multiple
[10:11] drainage catchments, as you can see here. This is the river and these are various tributaries. And there are also various drainage
[10:19] catchments or watersheds separated by ridges and hills called the drainage divide. divide. And each watershed in a river basin
[10:28] collects rain and or snow water and drains it to a common outlet such as a stream, a tributary, lake, or wetland,
[10:36] and eventually they all contribute to the river. So that um um um makes a river basin. That contributes
[10:45] to the river eventually. And the river basin consists of surface water as well as underlying ground water.
[10:55] Importance of river basin management is that for water allocation and distribution and sharing among states, regions within a country or among
[11:04] various countries in the same river basin, river basin has to be managed. It's crucial. And there are about 263
[11:13] transboundary river basins covering roughly half the earth's surface. And so a lot of countries and lot of people
[11:21] have claim on the same river. There are about 155 states which have territory within transboundary lake or
[11:29] river basins, and about 30 countries lie entirely within them. And since 1948, there are about 37 incidents of conflict over water.
[11:41] And approximately 295 international water agreements have been signed. So, water is a very precious commodity and that's why river basin management is
[11:52] crucial, not only for transboundary rivers, but even within countries, within states. It's very important. So, for river basin management,
[12:04] primarily what we require is availability of water in the basin and demand of water in the basin. So, it's
[12:11] basically demand and supply that we have to know to manage water. And here is the schematic of what
[12:21] water components are there in a river basin. basin. So, you can see that there is precipitation, there could be snowmelt.
[12:30] Um Um there is soil layer which holds moisture, there is aquifer and groundwater that can have water, there
[12:37] are streams, there are lakes. So, these are all water components in the basin. And for use, there are industries, there is
[12:47] agriculture, and there is domestic use. So, there are multiple usages of water. And so, knowing the source of water and
[12:56] then the demand of water, how it is used, that has to be balanced for efficient management. Water availability depends on basin
[13:05] hydrology and ecology and is influenced significantly by weather and climate. So, monitoring water availability within a river basin is really crucial for
[13:17] efficient management, as we just saw. Now, it's important to note that when you talk about water management in a
[13:24] basin, it is quantity as well as quality. quality. But for this webinar, we are going to focus on quantity and look at different
[13:32] water budget components, quality component quantity components, I'm sorry. So, river basin management also requires accurate identification and delineation
[13:45] of watersheds and stream channels within a basin basin based on terrain and slope. slope. Uh then characteristics of the basin
[13:54] that means soil, vegetation, lakes and reservoirs within the basins, aquifer and groundwater storage. So, these have to be known. And information about water
[14:05] demand such as residential use, agricultural demands, and industrial use within the basin. So, these factors have to be known.
[14:15] For this webinar, we will focus on the application of remote sensing based data for monitoring water budget components
[14:22] in river basins. So, we will focus mostly on the supply part that how water is um available through different components
[14:31] and how it is distributed within the basin. So, for monitoring water availability in river basins, um so any water flow in
[14:43] streams within the basin that requires information, observations, modeling uh for different components in the basin. And these are the components.
[14:53] So, uh they contribute to overall um water availability. So, precipitation is the major source in a river basin in
[15:02] addition to runoff which is coming in uh from outside and uh also living. So, that that net runoff uh that is a either
[15:13] source or sink for the river basin. Then evaporation and transpiration or evapotranspiration, evapotranspiration, uh that is a sink of water to the basin.
[15:23] It is water that is lost to the atmosphere from the basin. Infiltration is the water that seeps
[15:30] into the ground and stays in soil layers and then as as water storage and then there is water that goes deep within
[15:40] from the rocks and cracks between and becomes ground water. So these are the components which give information or about how much water is
[15:52] available in a river basin. And um what you see in the river or discharge that you see is resulting from these
[16:00] components. components. So for monitoring overall water budget components, all of monitoring all these variables is important. And the list
[16:12] shows here that precipitation, surface water such as soil moisture and reservoir, ground water, these are available from remote sensing
[16:22] observations. observations. Evapotranspiration, Evapotranspiration, it can be calculated based on other observable geophysical parameters including remote sensing also.
[16:32] Infiltration which depends on soil characteristics, soil moisture, terrain slope, all these are available uh partly from satellite and they can also
[16:44] be observed by combination of different um um observations. And then run off, which really cannot be observed
[16:56] observed efficiently but can be calculated based on a water balance equation. So water balance equation is shown here. So precipitation, which
[17:07] is the source, um it's equal to evapotranspiration, change in water storage in the basin, which includes all the way from surface
[17:19] to the groundwater, and then this is discharge, that is runoff. And so, this is the equation that each component is usually monitored
[17:31] to estimate how water situation is evolving in a river basin. And so, we will see some of these
[17:39] parameters from different sources throughout this webinar series. And so, what we're going to do is we're going to
[17:50] look at remote sensing observations and global land data assimilation system, which which provide all these components, and then we are going to
[17:59] work with those. So, with that, let's review remote sensing and GRACE data for water budget estimation that we're going to use.
[18:11] So, here is a table or a list of water budget components from different satellites with a temporal coverage. Um
[18:20] and so, you can see that precipitation is available from TRMM and GPM satellites, and acronyms are defined
[18:28] here. Uh snow cover, evapotranspiration can be derived from sensors from Terra and Aqua. These two are satellites. And
[18:36] as you can see, these satellites, most of them are long-term. Um some of them at least 5 years old, such as SMAP.
[18:45] So, uh soil moisture active passive were that's provide soil moisture. Uh terrestrial water storage change from GRACE and GRACE Follow-On missions, and
[18:57] reservoir height can be available from altimeters based on Jason-2 and 3 satellites. They are also available from
[19:05] about 2008 onwards. There's also past data available from Jason-1. So, these satellites provide observations of different different water budget components.
[19:18] However, not only they have different temporal coverage, that temporal sampling also is different. For example, TRMM GPM data
[19:30] combined with other satellites provide half-hourly to three-hourly data sets as the highest resolution all the way to
[19:38] Landsat that provides data every 16 days. days. So, not only temporal resolutions are different here, they all have different
[19:47] spatial resolutions as well. And a lot of details of this can be found in the fundamentals of remote
[19:54] sensing webinar that we just mentioned earlier. So, again, not going into great detail, this is mostly for your information and
[20:04] reference that the satellites that we just saw, they have various sensors. Precipitation is derived from microwave radar and radiometer.
[20:15] There are optical sensors such as MODIS, ETM, and OLI on Terra, Aqua, and Landsat. They provide radiation visible and near and middle
[20:27] infrared. infrared. SMAP is a microwave radiometer for soil moisture. GRACE also is microwave radar system and K-band. And Jason is an
[20:36] altimeter in C-band and Ku-band. So, as you can see, sources, spectral measurements are different for different satellite and sensors, and they are used
[20:47] to derive water budget components that we just saw in previous slide. Again, the fundamental webinar fundamentals webinar has information
[20:57] about these sensors and satellites. So, satellite data products that we will use for this webinar is going to be combination
[21:10] of TRMM GPM precipitation. Specifically, it is the Integrated Multi-satellite Retrievals of GPM or IMERG, and that is
[21:18] available actually at half-hour, daily, and monthly time scale on 1/10 degree spatial resolution. We will use evapotranspiration from
[21:28] Terra and Aqua MODIS. Uh the product name is uh for Terra and Aqua, it's MOD16A2 or MYD16A2.
[21:38] The resolution here is 500 m. They're available either on 8-daily scale or on annual scale. And then total terrestrial water
[21:48] storage, that is available from this GRACE data, and that's available at 1° resolution on monthly time scale. So,
[21:56] next week when we look at water budget components, these are the products that we're going to use.
[22:05] Next, we're going to talk about land surface modeling. So, ELDAS, which helps in monitoring water budget components,
[22:13] there is a lot of information on this ELDAS website here. Uh what it provides, it it integrates
[22:20] surface-based and remote sensing observations uh in land surface model, and it solves for the interaction of energy, momentum, and mass between
[22:29] surface and the atmosphere, and provides uniformly gridded, frequent information of water and energy components. components. So, ELDAS provides quantities that are
[22:40] not directly observed by satellites such as runoff. Uh evapotranspiration, also it it it is derived based on satellite
[22:48] data, but ELDAS also calculates evapotranspiration. Also calculates snow water equivalence, which is not directly available from remote sensing.
[22:58] There are several versions of ELDAS as shown here. Uh there's Global Land Data Assimilation System, the North American
[23:06] land data assimilation simulation system. system. Um, Um, this is specifically for famine early warning Famine Early Warning System, and
[23:13] this is national climate assessment. We are going to use GLDAS data in this webinar. So, we were going to focus on GLDAS
[23:25] version 2.1 and 2.2. When you go to the GLDAS, um, our web ELDAS website here, it gives you
[23:34] information of various versions of GLDAS. Not only that, within GLDAS versions, there are different, uh, land surface model components. The one that
[23:47] we are going to use is this catchment land surface model or CLSM. And the two versions, GLDAS 2.1 and 2.2,
[23:56] both from CLSM, it is the one that we will use. Both these models use vegetation mask, land water mask, and
[24:05] leaf area index uh, from MODIS uh, for calculations of um, uh, different parameters. Both use forcing such as precipitation and
[24:15] meteorological data and surface radiation. But, they use these data from different sources. Now, GLDAS 2.2, it assimilates GRACE
[24:25] terrestrial water storage anomaly data in this catchment uh, model uh, for simulation of land surface fields. While
[24:34] uh, GLDAS 2.1, it does not assimilate. So, GLDAS 2.1 data are available from January 2000 to present, and GLDAS 2.2
[24:44] data are available from 2003 to present. So, uh, what we are going to look at is work on the exercise using GLDAS 2.1,
[24:57] but we will also look at some results from GLDAS 2.2 in the last session. So, what we can do use the These are the
[25:04] inputs for these precipitation. So, here in GLDAS 2.1 it comes from Global Precipitation Climatology Project. This is a
[25:14] multi-satellite and gauge data. Uh also, meteorological data here are obtained from uh National Center for Environmental Prediction or NCEP uh
[25:24] global data assimilation system. Uh and for GLDAS 2.2, um uh this is coming from European Centre for Medium Range Weather Forecasts or
[25:35] ECMWF. ECMWF. Um Lastly, it's the energy input of surface radiation uh for GLDAS 2.1 comes from Air Force Weather Agency, whereas
[25:46] again GLDAS 2.2 uses everything from ECMWF. ECMWF. Now, we decided to use GLDAS 2.1 for this exercise because uh input data such
[25:57] as precipitation is also available here, the forcing data. For GLDAS 2.2, ECMWF data forcings are not available.
[26:06] So, only available parameters are um evapotranspiration, runoff uh these are and and groundwater. These are available and grace data assimilated. So, we will
[26:17] see some results, but we will mostly work with GLDAS 2.1. Also, it is important to note that these
[26:26] data uh provide integrated output. So, that's kind of uh in a way it is balanced. Soil moisture,
[26:33] evapotranspiration, evapotranspiration, surface and subsurface runoff, and snow water equivalent. Uh since both uh GLDAS 2.1 and 2.2 versions uh use
[26:46] satellite data forcing such as from GPCP and and 2.2 assimilates grace data. These data sets have latency.
[26:56] So, there are early products in which these data are not used, but then later on these products are
[27:04] updated when GPCP and GRACE data are available, and then the final version has this information in it. So, we will
[27:12] be using this final version where you have both these data available and included in the model. As you can see, both of them have
[27:23] parameters available except for precipitation in GLDAS 2.2. Our special and temporal resolutions are different. different. So, 2.1 has 1° resolution, whereas 2.2
[27:37] is quarter degree resolution. These are 3-hourly and monthly data. These are daily data available so far. So, ideally
[27:48] uh daily data would be uh used should be used to check water balance every day and then accumulate over a
[27:56] season or a year, but for simplicity of calculation, we are going to use monthly data so that
[28:03] it's easy to work with for now and at least the procedure is understood. You can use the same procedure with the
[28:10] daily data or even 3-hourly data. So, with that uh okay, so going back again, what we will do uh before we
[28:21] start the demonstration of uh some data download, what we're going to do is today we are just going to
[28:28] download all the data that we're going to use in session two and three for actually estimating water budget
[28:35] components and looking at water budget. So, that includes um data from satellites. So, we will have um GPM, MODIS, and GRACE data
[28:47] download, as well as we will download GELDA's 2.1 data. And so, what we're going to do is we're
[28:54] going to have a demonstration for downloading this data for Limpopo River Basin. Basin. And here is just um some information
[29:04] about this um this basin. Here is a website where you can find details about this river basin. It's
[29:14] located in Southern Africa. It's a transboundary river passing through several countries like Botswana, Mozambique, South Africa, and Zimbabwe.
[29:23] And each country has significant portion of this river. Uh largest is in South Africa. And the total area drainage area
[29:33] is about 408,250 km². km². Actual number of major basins are 27. Based on our classification using HydroSHEDS, uh we are going to use a uh
[29:48] river basin delineation where there are nine major basins, and you will work with that uh during week
[29:57] uh two and three. Um the sub-basins um they're they are in semi-arid regions, and so they have huge
[30:07] seasonal differences as well as interannual differences in precipitation and other water budget components. So, the goal is to look at basin-averaged
[30:18] budget, but we will also try and see can we see details within the sub-basins. So, that is what our aim is.
[30:26] And with that, what we're going to do is start our demonstration um of downloading data. After uh we do
[30:35] this demonstration, you will work through exercise one. All the step-by-step instructions are given, so whatever we are showing here will be
[30:46] provided there in instructions, and you can follow those steps. Also, for the demonstration, we're going to use year 2015-16.
[30:57] And for your exercise, you will use the same basin, but you will use year 2018 and 19.
[31:08] For now, we're picking two seasons, wet season where um um larger maximum precipitation is there, that is December, January, and February.
[31:19] And June, July, and August are the dry months. So, we will be downloading data between December and um
[31:28] August-September, roughly. So, that's what the demonstration is going to be. We'll start with uh IMERG precipitation and MODIS ET first, and then we will
[31:38] look at GRACE and GLDAS data, and and see how to download these data. So, So, um um I'm going to hand over this
[31:46] demonstration part to uh Sean McCartney. He is going to show how to download IMERG precipitation and MODIS ET data.
[31:57] So, again, you will need to register on on um NASA Earth Data to be able to download all these data sets. So, with
[32:06] that, I'm going to uh share my screen with you, uh stop this presentation, and um um Sean McCartney will start with the
[32:13] demonstration. Sean? Thanks, Amita. For the first part of this demonstration, we'll be downloading seasonal IMERG precipitation data from
[32:24] the Giovanni website. We'll be subsetting the data for the wet and dry seasons in the Limpopo River
[32:30] Basin. Basin. The wet season runs roughly from December through February, and the dry season runs roughly from June through
[32:37] August. August. First, we'll go to the Giovanni website using the link provided. You will need to log in to Giovanni
[32:47] using your Earth data username and password. password. I have already done so. Once logged in, we can go to the select
[32:54] plot option and we'll select map accumulated. This provides total precipitation computed over time for a given grid
[33:04] cell. cell. Since we're interested in the wet season for 2016, I'll go ahead and enter December 1st, 2015 as the start date.
[33:17] And then for the end date, I'm going to end the end of the wet season, which is
[33:24] uh February of uh end of February. Under the select region, we'll click on the blue icon to select a shape from
[33:33] Giovanni's database of shapes. We'll type in Limpopo watershed. And then we can click on the highlighted selected
[33:49] selected watershed. watershed. And then we can zoom into that and pan to it, and we can see that in fact
[33:56] the the river basin is delineated in Giovanni. For For our keyword, we're going to type IMERG final monthly.
[34:16] And we'll click search. Next, we'll select the variable for the IMERG product. And then we need to make sure that we're going to change
[34:27] the units to millimeters per month. Now that we have all of our parameters set, we'll click plot data.
[34:38] As stated earlier, Giovanni is calculating accumulated precipitation over the rainy season for this region of Africa, in this case the Limpopo River
[34:49] Basin. Basin. Now that we have our result plotted, we can download the data by clicking on download and selecting GeoTIFF.
[35:00] I will save the file to my working folder on the desktop. And it's always good to give it a an
[35:08] appropriate name. In this case, we'll name it IMERG_December 15 to February 16. And again, this will be a TIFF file. And
[35:23] I'll go ahead and I'll save that file to my working directory. Once we've done that, we can return to
[35:32] our data selection by clicking back to data selection in the bottom right-hand corner. corner. And now we want to get the dry season
[35:39] for 2016. So, the parameters that I'll change in here will be the month and the year for the start
[35:50] date. date. So, this will collect all accumulated precipitation from June through August, and I'll go ahead and click plot data
[35:57] again. Giovanni is a great tool because it provides a convenient interface to subset and download precipitation data
[36:09] from NASA. Once the plot is ready, I'll go ahead and download the file, uh similar to what I did last time. Click, make sure I
[36:17] select GeoTIFF. And then I will navigate to my working directory on the desktop. And then again, I'm going to give it an
[36:26] appropriate name. This time I'm going to call it I merge and we'll call it June through August 2016.
[36:36] And then I'll go ahead and save that to my working directory. For the second part of this
[36:45] demonstration, I'll be walking you through the process of downloading MODIS evapotranspiration data from the application for extracting and exploring
[36:54] analysis ready samples or APPEARS. First, we'll go to the APPEARS website using the link provided. Then we'll log in using the Earthdata
[37:07] login credentials. APPEARS offers a simple and efficient way to access and transform geospatial data from a variety of federal data
[37:21] archives. archives. For this demo, we'll be extracting data from an area sample. To do so, we'll click on extract from
[37:30] the menu and then click on area sample. We will start a new request by clicking on the icon.
[37:41] And since we're downloading data for the wet and dry seasons, I'll give this request an appropriate name such as
[37:49] MODIS evapotranspiration evapotranspiration December 15 through February of 16. APPEARS provides the option of using a vector polygon for defining the study
[38:07] area. area. We'll use the zipped shapefile, which you can acquire from the RZ website, to delineate the study area.
[38:16] Click on the click here text highlighted in blue and add the zipped shapefile you downloaded from the webpage for this
[38:23] training. I've already added the zipped shapefile to my working directory. Once it's been uploaded, you'll see the
[38:37] polygon represented in the map. For the start and end dates, I'll specify the same date range comprising
[38:46] the wet season from December 2015 through the end of February 2016. For the layers, I'll type MOD 16
[39:12] no space and you can see that three options appear. I'll choose the top option, which is the Terra MODIS
[39:19] Evapotranspiration. Evapotranspiration. And then for the different products that they provide, I'll be choosing the Evapotranspiration at 500 m.
[39:30] As you can see, this is an 8-day product, which which is represented by Julian days. The Julian day for each
[39:39] MODIS image represents the first day of the 8-day composite. For output options, I'll leave the default as for file format as GeoTIFF
[39:51] and for the projection I will specify a geographic projection and then I will click submit. An email notification will be delivered
[40:04] to your inbox letting you know the order has been placed and a second email will be delivered with links to download the
[40:10] requested data. Now that we have Evapotranspiration data for the wet season, we'll repeat the process for the
[40:20] dry season. We will give our second order an appropriate name. In this case, I'll give it the name
[40:31] June 16 through August 16. And we will specify the the month and year to coincide with that.
[40:47] So now that we've established our date range range for the dry season, we can then leave all the other
[40:54] parameters as default, and then we can go to click submit again to place our second order for the dry season for
[41:01] 2016. I'll now hand the presentation back to Lamita to demonstrate how to acquire the rest of the data for this training.
[41:12] Thank you, Shawn, for the demonstration. Uh so we saw how to download precipitation and evapotranspiration from remote sensing observations like
[41:21] IMERG and MODIS. Uh next water component that we are going to look at is terrestrial water storage anomalies. And we're going to do
[41:29] so from the GRACE mission, and also during the exercise we will download the same data from GRACE Follow-On mission.
[41:38] The last part of this demonstration then we'll show how to get all the water budget components, including
[41:44] precipitation, evapotranspiration, uh terrestrial water storage, and surface runoff from Global Land Data Assimilation System uh version 2.1.
[41:55] In the last week, when we use this data, we will also briefly see how to access GLDAS version 2.2 data, which is the
[42:03] newest GLDAS version. So we'll start with the GRACE uh terrestrial water storage anomaly data. And for that, also you need NASA Earth
[42:14] data account. Uh so, you can log in and download data. We'll start with this Grace JPL site.
[42:24] Briefly, just to show that there is a mission information available here, uh applications and publications, a lot
[42:31] of information about the mission, Grace and Grace Follow-On can be found here. There's a get data link here, which
[42:39] takes you to multiple data sets. There is also a straightforward way of going to search for this Grace data.
[42:48] And that is to go to this uh physical oceanography that Uh here there is a search window, where
[42:55] you can type Grace and search for Grace data. data. And it takes you to all the Grace data
[43:04] sets available from this site. You will see that there is a GFSC tell us Grace level three monthly land water
[43:12] equivalent thickness. Similar data are available from JPL as well. So, these data are actually terrestrial uh water storage anomalies. So, there is
[43:26] a reference period with respect to which you get uh monthly anomalies in change in total water. So, that is surface and
[43:33] ground water. So, we're going to look at this um it it's represented as water equivalent thickness. We are going to look at this
[43:41] data. data. And you click on the data, you'll be taken to the data access page. And here is a link, it says data access.
[43:51] Just click on it, and it has multiple options of how to download these data. We are going to use PODAAC Drive, where
[44:00] all the monthly terrestrial water storage anomalies from Grace and Grace Follow-On can be found. So, these are
[44:07] monthly data, as you can see. Um this is the credit level three data. The start date and end date for a particular
[44:16] month year. So, these are Julian days. This is from Grace. This is from JPL. Uh this is
[44:25] about the algorithm type. This is release number six. This is for land and this is version three.
[44:33] So, these files are available as net CDF, TIFF, as well as as text files. And we are going to download TIFF format
[44:41] file so that we can analyze with QGIS. As I mentioned earlier, we're going to look at dry and wet season of 2015-16.
[44:51] So, we're going to go s- scroll down to 2015 and 16. And find 1st December 2015, then
[45:02] January, February 2016 according to their Julian days. So, for December, actually start date should be 335, but sometimes some days
[45:16] are missing. And so, it may not start exactly at 335, as you will see in this case.
[45:26] That it starts here from 346 and ends in 2016 three. Now, information about this start and end date are there available from this
[45:38] link that you will see in your exercise. You can go by month and year and what are the start and end date for each year
[45:47] available. available. So, according to that, once you locate the file, this is for December. We are going to
[45:54] download TIFF file. You can just click on the file and then save it on your computer. Uh uh for
[46:02] uh simplicity, you can uh s- give a name which is uh uh GR for grace {underscore} total water storage. And this is
[46:15] December 80 uh December 15. So, you can shorten the name and save on your computer. You can create a
[46:25] a directory where you want to save this data and you can save this file. I have already saved this file, so you can
[46:32] follow this procedure to save these files. Next, you can go down to This is January January TIFF file. You can do the same. And
[46:41] then, there is next one is the February. This is February for 2016. So, you can click on
[46:49] each of these files and save. And here, you can say GR TDWS February 16. So, you can give any name,
[47:00] but this is the name that we have used for simplicity. And then, you can save that file. Similarly, um you you will
[47:08] also download March because uh we we will see later how we calculate total water storage change from month to
[47:17] month. And for that, you need one more month than your season. So, you're going to also download
[47:24] next TIFF. This is for March. So, you can download March TIFF also. Um Um then, go down to
[47:33] June, July, August, and September. So, this is uh uh day 153. This is June. Then, July. And so so forth. So, in your exercise,
[47:48] you will be doing this for year 18-19. So, you will follow similar Julian days and download the data. But basically,
[47:57] once you go to this list, you just have to click and save these files. So, this is how you are going to save a GRACE
[48:05] terrestrial water storage anomalies on your computer, which we will analyze in next session. So, that's it for the GRACE data.
[48:15] And next, what we're going to do is see how to download GLDAS version 2.1 water budget components.
[48:28] So, for downloading GLDAS water budget components, we will be using this GES DISC portal. You click and open the link.
[48:43] You'll be taken to the GS DISC site. You can take a tour if you have not used
[48:48] this site. It It provides information about features of this site. Also, you will have to log in again
[48:57] using NASA Earth data registration information. Once you do that, you can explore search here and say GLDAS.
[49:08] And it comes up with the list of GLDAS data available. We're going to use GLDAS monthly data from Catchment Land Surface
[49:17] Model at 1 degree resolution, and this is version 2.1. As we talked earlier, there is this early product also available. Because of
[49:27] the data latency of forcing data, these data are not up to date. Early products are up to date. But we're
[49:36] going to use this GLDAS CLSM10M 2.1. So, click on the data set and search. It takes you to the link
[49:50] to this data set. You can click on this link. Now, here is there's information about this particular
[50:02] uh version of model and data. Also, there's data citation available. Documentation detailed documentation is available here. And for product summary, you can see it
[50:15] is 1° by 1° resolution. It's original format is netCDF. There's a global coverage, and the temporal coverage is 2000 January to
[50:27] March 2020. And this is monthly data. For this portal, it allows special and temporal subsetting. So, we're going to
[50:38] use this subset get data link. It takes you to this selection window. For download method, you we're going to choose get file
[50:49] subsets using the GES disk subsetter. Now, for grace data, we downloaded global file because at that portal, uh we did not have uh
[51:00] special uh selection or subsetting option. Here, we do. So, for GLDAS data, we're going to uh focus on Limpopo River Basin. So, here,
[51:11] first, let's start with date range. Again, for this demonstration, we're going to use you can either enter
[51:26] date here or use the calendar. Uh Uh here, you can 2016 2016 September September 30. So, we're going to look at
[51:41] December December 2015 2015 January, February, March of 2016 for wet season and for dry season it is going to
[51:52] be June, July, August, and September of 2016. So, this period is chosen here. For For the fine region here approximate
[52:04] latitude longitude covering Limpopo Basin are uh uh given here. So, 25 of of east east to 35 east and minus 27 south to minus
[52:22] 19 south and it highlights the region that we picked. This covers Limpopo River Basin. Then, you can also pick variables you
[52:34] want to download. The model has quite a few uh water and energy related variables. We are going to pick water
[52:45] budget components. So, here are the components. Now, let's go down and see here. For downloading there options, you can have
[52:56] netCDF file and then you can pick multiple parameters and download netCDF file. If you want to save these
[53:05] parameters as GeoTIFF files, then you have to select only one variable. So, one variable at a time. And so, that is
[53:13] what we are going to pick because it's easier to work with GeoTIFF data here. Um and so, this is evapotranspiration.
[53:22] So, pick evapotranspiration. And you can say get data. Okay, it takes a few minutes, but once um the data are are extracted, You see
[53:43] this subsetted file here. Again, this is for December 15 all the way to September 2016. So, all these monthly files in
[53:52] TIFF formats are there. And again, you can just click on here and save on your computer. Again, for
[54:02] simplicity, simplicity, um, going to use Let's see. Save into this GLDAS directory and save as GLDAS GLDAS 2.1.
[54:27] 2.1. This is ET and this is December 15. 15. So, you can save this file. So, this is
[54:37] just a short name, so we can descriptive name. And so, you can give any name, but this is what I have used.
[54:46] So, you can save this file. Similarly, you can click through each of them and save accordingly. So, this is
[54:54] uh, January of 16 all the way to September of 16. Once you do that, you can go back to
[55:01] select parameters and refine parameters. And the variable you want to pick now is uncheck evapotranspiration. Go down and look for
[55:13] You have total precipitation. You can pick that. Then, Then, pick storm surface runoff. So, one after another, you will pick
[55:26] total precipitation, then surface runoff. Then, you can also look at base flow groundwater runoff. Uh, as we will see, this is a very small
[55:36] quantity, almost negligible, but you can check it out. So, you can download that. And there is also um
[55:45] TWS, which is terrestrial water storage. So, download that. So, you will be downloading uh parameters, ET, then surface runoff,
[55:57] base flow runoff, total precipitation, and uh terrestrial water storage. All these you can download one at a time for December 15
[56:07] to September uh 2016. And save them as you define. Now, I also want to uh show that if you
[56:18] uh uh pick netCDF file, then you can pick all of them at the same time. Um So, you can pick uh evapotranspiration,
[56:34] total rainfall, storm, surface runoff, base flow runoff, and TWS. And then you can get data. Goes through the same procedure. It It's
[56:50] extracting the data, and you can get all of them in netCDF format. You can click on them and download. Or,
[56:58] if you want to do bulk download, you can use You can follow instruction here. It requires you to have Wget or curl, and
[57:07] you can use that and download. So, what you can You can save all these links as URLs, and then use Wget
[57:19] to to get all the files at the same time. time. Also, once you save these files as
[57:25] netCDF file, you can use this GDAL translate function, if you are familiar with that. From netcdf file, you can pick each
[57:37] variable. So, you can start with ET and then you can save it as TIFF file. So, this is also possible, but we are going
[57:46] to follow the first step that we saw that save one parameter at a time as TIFF files because there
[57:54] are not that many files and we can just click and download data. So, that's how you can download GLDAS data. Once you
[58:03] have saved all these data, uh we will be analyzing them in next week and see how different water budget
[58:12] components components behave in dry and wet season over the Limpopo River basin. So, with that we this demonstration is
[58:23] is concluded. What you will do is now start with exercise one that you must have downloaded downloaded from our site website or it's also
[58:34] available from this portal here from the meeting site. You can download that and start working on this exercise. So, for
[58:43] this exercise you are going to follow the same procedure, but you will use a different year as I mentioned earlier,
[58:50] you will use 2018 and 19. So, at the end of this exercise then you will have IMERG precipitation and MODIS
[59:00] evapotranspiration similar to what Sean demonstrated and then you will also download GRACE terrestrial water storage anomalies and
[59:12] GLDAS water budget components. So, all these data will be prepared today that we will be analyzing next week. So, we
[59:21] are going to be here online and um working along with you. If you have any questions, you can start with your
[59:30] exercise. exercise. And if you have any questions, you can type in the chat box. And we will also
[59:38] check with you if all the steps are working and all the links are working. Also, just a word of caution here that
[59:47] many people sometimes when try to access the same data, it slows down the website. And if you have trouble
[59:56] accessing this data right now, you still have this entire week to do so. But we encourage you to start working on it now
[1:00:04] so that if you have any questions or if there is any problem, then we can talk about it now. So, I'm going to stop here
[1:00:12] and you can start working on the exercise. Thank you. So, the demonstrations have been concluded and now this is the lab time
[1:00:28] and also question answer time. So, what you will be doing is download the step-by-step exercise for this week, exercise one, and start
[1:00:40] acquiring the data starting with I merge, then grace and GEE GEE as you saw note. Since LP DAC
[1:00:51] is down, perhaps MODIS data you may not be able to download right now, but you have this entire week to download this
[1:00:59] data. We will use some of this data next week and then week after. So, you can start downloading the data. If you have
[1:01:07] any trouble, you can ask us now or type in the question box and we are going to be here and see if
[1:01:19] we can help in any way. But between now and next week, it's important download all the data and save on your computer,
[1:01:27] so we can start working with exercises in week two and three. Hopefully, you have been able to
[1:01:44] download some data. And we also see a number of questions in in the question answer answer document here. So,
[1:01:56] we will go through some of the questions. Some are very important and informative, so we can start with the
[1:02:04] question and answer session here while you can keep working on downloading the data or you can also continue doing that
[1:02:13] between now and next Tuesday when we have our next session. So, um we've already the questions have been
[1:02:26] answered and they will be posted on the R set website after the after this the webinar is over, but some of the
[1:02:34] questions that are important, want to go over them. Uh Uh this question two is regarding slide two, is it possible to change the
[1:02:46] special resolution to a higher resolution like 30 m for hydrology modeling? modeling? So, So, the answer is that you can interpolate
[1:02:56] data at whatever resolution you like, such as like 30 m or, you know, but you're not really creating any
[1:03:06] independent or more accurate information at every point. It is simply whatever information you have at lower resolution, you are just using some rule
[1:03:15] to interpolate it either bilinearly or linearly or um um So, So, not only you don't have independent information,
[1:03:26] it it we don't know whether it's right or not at at at every 30-m resolution. So, that's the chance you take. But, for
[1:03:34] ease of calculation, you can definitely do that. Um to see do that at 30 m and for forecasting
[1:03:46] hydrologic models, it has been done. So, it is possible to do that, but one has to keep in mind that uh you're not
[1:03:55] really having independent data at every 30 m. Uh question three is something I don't understand. How can we estimate soil
[1:04:05] moisture from remote sensing using QGIS or other software rather than using SMAP data? data? So, um I'm not aware of that. And Sean,
[1:04:15] if you know if there is any in-built algorithm available in QGIS where you can estimate soil moisture
[1:04:23] data, I I'm not aware of any such um method or software in QGIS that can give you soil moisture.
[1:04:52] Um so, question four is about GLDAS and GIDAS. No, they're not the same systems. GLDAS is specifically land data
[1:05:01] assimilation system. It It is just a land surface model. It does water and energy balance in at Earth's surface in
[1:05:10] which atmospheric uh weather parameters and radiation they are used as forcing. Um so, that's what GLDAS is. GDS, on the
[1:05:21] other hand, is data assimilation to atmospheric model. So, GDS is global data assimilation system that NCEP developed for weather forecasting and
[1:05:31] working with atmospheric model. Uh question five is is very important. Um Um it Which is the What is the smallest
[1:05:42] basin area you would recommend for working with these water budget data? So, uh we will as we we will go through
[1:05:50] data analysis next week and in the last week we will see that um data sets have been made available at
[1:05:59] certain resolutions such as GRACE data we will use at 1° resolution. Uh GLDAS has 1° resolution and some versions also
[1:06:08] have quarter degree resolutions. But, if you are just speaking based on remote sensing data, uh GRACE data has 3 by 3 degree about
[1:06:19] approximately uh 3 by 3 degree um resolution. So, about 150 thousand thousand km squared actually. So, that that's one
[1:06:32] footprint of GRACE is about 3 degree by 3 degree. So, even if you interpolate and make it 1 degree by 1 degree, you
[1:06:39] don't have independent ground water information or or terrestrial water information at 1 degree. So, basically, ideally, if you're just using uh remote
[1:06:51] sensing data, then that should be the limit. You It's It's 300 to 400 uh by 300 to 400 km. That's approximately
[1:07:01] the size that you have one GRACE for a footprint. So, that's the smallest basin you can work with. If you use something
[1:07:10] like GLDAS, then you can go smaller, higher resolution, because there is quarter degree. So, it's about um
[1:07:20] um 1/10 of what you have here. So, even smaller. So, that you can go go smaller. smaller. So, this this would be like 25 by 25 km
[1:07:34] square area. So, So, depending on what you're using, you your basin size has to be limited. Again, we will see that there's always
[1:07:48] trade-off between resolution. If you just have remote sensing data such as grace, if you go to modeling, you have higher resolution,
[1:07:57] more frequent data, but then it your accuracy depends on the type of model you use. So, it's it's a combination of
[1:08:05] factors that you have to consider. But but so, bottom line is just based on remote sensing, it is
[1:08:13] 3 by 3 degrees. And for GLDAS, you can go about quarter degree by quarter degree. Uh how was the wet and dry period
[1:08:25] selected in analysis? We'll see that next week. Um and we'll that will show you that for your own region, how would you decide
[1:08:33] which is um a wet and dry season. Um question seven, yes, data are available for These are global data that
[1:08:48] we're talking about. So, that's fine. Uh question eight, how accurate are these data and where can this analysis be used in the real
[1:08:59] world? world? I mean, that's the question that we don't have one answer for all the regions because uncertainties are there.
[1:09:14] They vary from region to region. If you go through validation studies of different data sets such as GPM IMERG,
[1:09:23] MODIS ET GRACE data, and GLDAS data. Published literature where local measurements are compared with these measurements measurements uncertainties can be
[1:09:38] as high as like larger than 30% in some places. It could be as low as 5%. So,
[1:09:43] there's no one number that we can say that, "Okay, this is accurate by this percent." It has to be done region by
[1:09:53] region. So, the recommendation here is that that um um once you pick once you know this is the
[1:10:00] basin is it big enough that GLDAS or remote sensing data can resolve this basin? How many data points I can get from these data
[1:10:11] sets? And then in top of that, you have to have some independent measurements. You can You can validate each component
[1:10:21] with surface-based measurements, but if you have stream gauge or discharge data, that is really very good. You can see
[1:10:28] whether precipitation minus evapotranspiration evapotranspiration if you look at that parameter, if that is showing how discharge data is
[1:10:38] changing in your basin, you will have more confidence in in these data sets. So, again, there is no one clear answer for how
[1:10:49] much how accurate these data sets are. Also, you have to see that the existing data and methodology you use for
[1:10:58] the river basin of your interest, how accurate that is, and um how does how would you compare that with these
[1:11:06] remote sensing measurements? So, these are are the are are are the questions that only you can answer knowing your own
[1:11:16] region and your own river basin characteristics. characteristics. The idea here is that, okay, here are all these data sets with these
[1:11:24] advantages and limitations, and here is the procedure how you can estimate bulk uh water budget components over a basin,
[1:11:34] and then go on from there, see how useful it is for your own region. So, question nine, will QGIS read an
[1:11:44] netCDF file? And yes, it can. But I believe that for raster calculations, uh you probably have to have a TIFF file,
[1:11:53] and Shawn, you can correct me if I'm wrong. Question 10 is, how do you get the approximate
[1:12:07] approximate bounding box need to use QGIS any function? So, QGIS, of course, as Shawn mentioned here, you can look at your
[1:12:15] shapefile, and in QGIS, it if you go around, it will give you lat long boxes. In GS disk and Giovanni,
[1:12:25] uh also, you can just go to the region of your interest and draw a box. There is a way you can just draw a box, and
[1:12:32] then there is a window where it shows which lat long you picked, and that tells you that this is the bounding box.
[1:12:44] Uh question 11, are data sets available for all the river basins across the globe? globe? So, as you can see, data have global
[1:12:52] extent. extent. Whether all your basins are resolved or not, that that is um um ans- the answer is no, because uh
[1:13:01] resolution is limited here, uh special resolution. So, not all river basins are uh resolved, but major river basins are
[1:13:11] resolved by these data sets globally. Question 12 is something that we mentioned earlier, uh but that is true.
[1:13:24] Uh Uh Calibration also necessary for these data sets, since they are remote sensing derived. Absolutely. I think it's it's
[1:13:32] very important. Uh these data have to be calibrated and somehow validated for your own region. Uh and this has been
[1:13:41] done. done. Uh people take remote sensing observations of, say, precipitation, evapotranspiration, and in the area of their interest if you have surface-based
[1:13:51] measurements, you can calibrate with that. Are there any biases? Uh Can you remove those biases from remote sensing
[1:13:58] data? So, that has been done. Um and uh indirectly, if you have something like discharge data or stream flow data, you
[1:14:07] can compare um the the precipitation and evapotranspiration differences with that. You can see how um um TRMM surface runoff and TWS, total water
[1:14:19] storage, what kind of uh relationship do they show with uh river discharge in your river basin? So, uh it really is a
[1:14:28] little bit of research before you can actually apply, and that that's very important to note here that
[1:14:36] these data sets are there, they are global. global. The- these are the resolutions. To apply them in your own uh region, you
[1:14:45] would first look at the size of the river basin that you're interested in. Are these data valid for that? Are they
[1:14:52] providing you independent and accurate information? And next, you calibrate with some in situ or in basin data that
[1:15:00] gives you confidence in in what you see here. So, I would say that even if you cannot
[1:15:08] cannot if if the total amount of water that you get from these data month by month you may not
[1:15:17] be find very accurate, but change will show that whether water availability is increasing or decreasing. That I believe that remote sensing data and
[1:15:31] modeling data can definitely help in in in monitoring that. Compared to last year, compared to last season, is the
[1:15:39] water availability going up or down? Precipitation, evapotranspiration data are operationally used for drought monitoring and looking at wet and dry
[1:15:51] spells. So, yes, data are useful, but they have to be calibrated. That's the bottom line. GLDAS data, how do you remove the
[1:16:06] seasonal cycle from GRACE data sets? I don't think I completely understand the question. Are you If you're talking
[1:16:13] about GRACE data assimilation in in GLDAS, I don't think you are removing annual cycle. cycle. If you want to remove annual cycle from
[1:16:29] any data, like GLDAS or GRACE, independently, what you would do is take long-term monthly climatology, month by
[1:16:37] month, month, take January climatology, February climatology, and so on all the way through December. And then subtract that
[1:16:46] from each month. That removes annual cycle from any data. Uh there's a question here in the chat
[1:17:02] box. Is it possible to do the exercise with ArcGIS? And absolutely yes. Um you can do this. We use QGIS because it
[1:17:10] is open source. But ArcGIS you can definitely use that. So we'll we'll talk about question 13 more in last session when we talk about
[1:17:24] GLDAS. GLDAS. Um Question 14, if you would like to do this analysis for a long period of time,
[1:17:38] is the procedure to do is one month by one month. Um so as Shawn has referred to it here,
[1:17:46] you can do it annually. You have MODIS annual data. data. Uh from GLDAS, uh you have monthly as well as daily
[1:17:58] data or you can make annual accumulation from that. Um It depends on are you looking at season
[1:18:09] to season or month year to year changes? If you do want to see seasonal changes, you will have to start with monthly
[1:18:17] data. data. If you're just interested interested in year-to-year variation, then you can just look at annual accumulation of
[1:18:27] data. How Question 15 is how do we test the accuracy of grace data? Um so um I think it's a
[1:18:42] We recommend that you review the grace webinar that was offered by our site last month. Some of these points are
[1:18:49] covered in there. Um Um First of all, grace footprint is large and only way you can you validate it is
[1:18:58] if you have monitoring wells taking like um um water level and then you can compare with grace data and see uh again, if
[1:19:10] that's a point measurement versus a big footprint. But in the webinar, there is a paper referred to where in the US
[1:19:18] about 4,000 wells are used to compare with uh ground water data from uh JELD-WEN's modeling which grace is
[1:19:26] assimilated. assimilated. Same can be done um with grace data if you have monitoring well. well. Um Um based on algorithm validation
[1:19:36] um um and again papers are there in this webinar is the grace terrestrial water storage anomalies have errors of about 2 to 3
[1:19:47] centimeters. centimeters. Um and this is so it's about 10 to 20% errors you can say. Um if I downloaded a netCDF file, can I
[1:20:05] extract the individual files for it to use or do I have to use them combined all the time? No, you can extract and if
[1:20:14] you go back to the demonstration um there is a link there. It is a GEE doll script that is
[1:20:22] available that you can use to extract each parameter from a netCDF file and convert to a TIFF file or I I guess you
[1:20:30] can also save as netCDF file parameter by parameter. But you The only way I know is to do it by using that Gdal
[1:20:41] command. Uh Uh instead of downloading precipitation data separately from December to February, February, then June to August September, what will
[1:20:59] happen if I downloaded continuous data and why not for complete calendar year? Yes, you can do it for complete calendar
[1:21:09] year. Um you can do it for 2 years to see contrast from year to year. Here we
[1:21:16] This is more to show the procedure and so so um when we do lab time, we have about an
[1:21:23] hour to work with. So, we decided, "Okay, let's stick to wet and dry seasons." So, then if you download all
[1:21:31] of the data, um because the resolution here are it's monthly, you will have month by month data, no matter what period you pick.
[1:21:40] Either you do December to February and then June to August September or you can pick them all and decide to download
[1:21:49] whichever month you like. So, but yes, you can look at the entire annual cycle if you're interested in that.
[1:22:04] So, again, as we saw in the demonstration today, again, this is question 17 I'm answering about data. In
[1:22:10] Giovanni, you can accumulate over a season. season. With GES DISC, you are you can only download monthly data or whatever the
[1:22:19] resolution of the temporal resolution of the data is. And then you have to accumulate it by by yourself. So, it depends on
[1:22:28] what which data set and which tool is available to download the data. How do geophysical parameters measure
[1:22:41] the the question 18 I think was there before also? also? Question one, how do geophysical parameters so one and 18 are the same.
[1:22:54] So, evaporation and transpiration they're not observed directly from remote sensing but remote sensing based other geophysical parameters such as
[1:23:04] surface temperature, land surface temperature, vegetation, so near surface humidity, soil moisture. These can help in calculating ET.
[1:23:15] And again next week when we talk about MODIS ET later on we will see that from thermal energy balance of the
[1:23:27] surface then evapotranspiration is actually calculated. So it it's not a direct measurement it's a derived measurement from remote sensing.
[1:23:44] Is this method valid for arid and semi-arid regions? Yes, the method is valid for arid and semi-arid regions.
[1:23:53] But But the data sets that we are using they may be more accurate for one region than another and that is something you
[1:24:03] have to calibrate and validate for your own region. For example, MODIS ET that we are using it is believed that it is better in in
[1:24:14] more humid region than in arid region. But that that you have to check out for your own
[1:24:21] region. Uh so, why grace it downloaded for September while others to August? Because Because uh uh when you look at water balance equation,
[1:24:36] it's the when precipitation and evapotranspiration evapotranspiration over a month occurs, that results in change of ground water.
[1:24:46] So, we are taking say suppose you want ground water change or water change for um um for December, then you are you have to
[1:24:58] take difference between January and December. December. That gives you that change in water storage due to P minus E in December.
[1:25:07] And we will see again next week when we go through this exercise, we will reiterate this. And that's why we have one more month
[1:25:16] one more month than the last month because change in water storage in August August can be calculated only when you have
[1:25:25] September and August water storage both. Um question 21, when I click on plot data, I receive this message Giovanni
[1:25:42] result initiate service request failed. Hm. Hm. Yeah, please check all the parameters and there's also a feedback button
[1:25:53] on Giovanni. Yeah, you also need to log in with NASA data, check all the parameters, parameters, and there's a feedback button on
[1:26:03] Giovanni where you can let them know also that this is the error message you're getting and they might be able to
[1:26:09] solve if it's a genuine problem, but first thing is to check all the inputs and everything. Yeah, question 22, would it be possible
[1:26:30] to give us a list of software or tools? Yes, I think we can do that. We will
[1:26:40] We will keep that in mind. We usually do that in the beginning of the exercise, but may maybe we can do that in the
[1:26:47] beginning of the series, then it's easier for you to follow. That was question 22. Question 23, while downloading the data
[1:26:59] for this case, the number of links are only 11, so it's not a difficult thing to do.
[1:27:07] But, yes. So, again, if you go through the demonstration, you will see that there is And when you go through the download
[1:27:16] step, you will see there is a Wget or curl option. You get a list of all the URLs that you
[1:27:23] picked. picked. And there is also a link to save those URLs in a file. So, all the files,
[1:27:31] if you have 100 files, you have links to those 100 files in a file in a text
[1:27:36] file. And then, you can use a Wget or curl command to with that text file, which has
[1:27:44] all the files your URLs listed, and then you will you will get one by one files from GS Disc and you don't have to click
[1:27:54] on individual file. So, So, the reason we did not go through it is you also need to make sure that you have
[1:28:04] Wget and curl on your computer. So, you have to install that. The instruction is there on GS Disc again how to do that,
[1:28:12] How to install the Blue get or curl depending on which system you're using it's Windows or Mac or Linux.
[1:28:23] Are you going to see any way to obtain data using Python, JavaScript or any other language? For for this webinar, we have not
[1:28:33] considered that. That's why we we we have used just online tools and QGIS where it's mostly through GUI that we
[1:28:45] are interacting with data and calculating things. But in future, if there is a demand, we might think of
[1:28:53] providing some scripts in Python or Java. Java. If If RSAT has is conducting quite quite a few webinars
[1:29:02] now using GEE and with some JavaScript samples. So, if the data sets are available in Google Earth Engine, we can
[1:29:09] go that route. Can we use GFS data for precipitation the model during floods? That's the global forecasting system, I
[1:29:33] believe. I That's That's a model precipitation data and you can definitely check it out. And there are quite a few data sets
[1:29:43] available. You can use GFS if you There is also forecast available 72-hour forecast from GFS. So, you you
[1:29:54] definitely can check it out whether it's accurate in your region. So, no TIFF file for questions 26. There
[1:30:08] is a TIFF file and TIFF TIFF MD5, but you will get TIFF file. MD5 files are the digest files. They
[1:30:16] just talk about whether, you know, just gives you indication whether this file was complete or corrupt. So, it
[1:30:23] this is not the file you want. You want just dot TIFF file. Again, if you go through the grace
[1:30:33] webinar, it it it it talks about this digest file. Uh this is uh the question 27. The data
[1:30:50] resolution is coarse. At least 1° resolution. How can you get finer resolution, for example, at district or
[1:30:57] provincial level? Uh this is really a um um very important question. Um Um As we saw, you
[1:31:10] precipitation and evapotranspiration data, they are um um 500 m to about 1/10 of a degree high resolution data, but if you want ground
[1:31:21] water data, you don't have high resolution data. If you look If you use GLDAS, then the highest resolution is quarter degree.
[1:31:32] In certain cases, such as in NLDAS data, you have 1/8 of a degree data, also. So, So, um you can only try and interpolate this
[1:31:43] data, but then they're not independent data at that resolution. You have to keep that in mind. Best thing is to try it out.
[1:31:53] Get this data and uh try and interpolate within um district or province using either terrain as a predictor or
[1:32:04] land cover as a predictor and there there is a research going on on that. How to to downscale various data sets,
[1:32:13] but then again it it's a very regional problem that the no one answer or solution fits everywhere.
[1:32:27] Can you suggest any source from where I can learn how to download multiple links using Wget? It may be required if I need
[1:32:35] to download GLDAS data for a longer period. Yes. So um since this question is appeared once or
[1:32:44] twice, uh next time I if we have time when we work with GLDAS data, I'll try and show you how to do that. Uh
[1:32:53] how to do it with GL Wget. Can we separate evaporation and crop transpiration data using uh satellite
[1:33:06] data products? I believe that data we are using is strictly strictly evapotranspiration data where you have vegetation data.
[1:33:17] Um Um in models, yes, there is evaporation and uh uh crop or vegetation transpiration data. They are available from models. But from
[1:33:28] satellites, um it's a product we are using is ET with vegetated surface. So no, you you you don't
[1:33:41] don't you cannot decide what evaporation is from non-vegetated area. IMERG has different options for sub-daily download. Which one should we
[1:33:56] use? Um for this webinar, we are using seasonal accumulation, but if you are interested in using sub-daily data,
[1:34:07] um depends on if you final version is the research quality version. There is early and late version, which
[1:34:17] is up-to-date, but it is not calibrated or with rain gauge data, so it it's that's different than the final product.
[1:34:26] Depending on the application, you would choose which data to use. Many people talk about errors in ECMWF
[1:34:40] models, so how do we justify the validity of our results while using GRACE? How do we get the error bar for
[1:34:48] ECMWF? So, So, these questions always come up about accuracy, and unfortunately, the answer is that unless you have in situ data where you
[1:35:08] you want to use this data, there is no answer. We cannot say that, okay, it's 10% accurate or 15 or if there's no way.
[1:35:18] There has to be validation regionally of the area of your interest, either direct or indirect. Either you you look at some
[1:35:26] other parameters and say, okay, looks like this model or data are correct. Um so, that's the only way to put error
[1:35:35] bars on any ECMWF or GRACE or any data, you have to have in situ data to compare
[1:35:44] that with. If you go on these websites for ECMWF or GLDAS or I merge GPM or any there are validation
[1:35:54] campaigns campaigns that are sites where NASA and other agencies they take in situ measurements and do detailed
[1:36:03] validation. So based on that you can gauge what kind of error bars you might have. But the absolute certain way to do it is to
[1:36:14] compare in your own region with in situ data. I think we are just just coming to the end of this session.
[1:36:28] We really thank you very much for attending today's session and we will see you next week at the same time.
[1:36:35] Hopefully by then you will have downloaded all the data so that we can start working with estimating different water budget
[1:36:44] components and seeing seasonal differences as well as combined P minus E and see how things look from remote
[1:36:52] sensing and then from GLDAS. Some good questions here and and we will continue our discussion in subsequent weeks.
[1:37:06] So thank you again. Sean if you want to add anything please go ahead and add. add. We want to thank the ARSET team here for
[1:37:16] helping us. We have a Glemins, Glemins, Jonathan O'Brien, Selwyn, as Odoy Hudson Odoy and Sean and myself we thank you all for
[1:37:30] attending.
