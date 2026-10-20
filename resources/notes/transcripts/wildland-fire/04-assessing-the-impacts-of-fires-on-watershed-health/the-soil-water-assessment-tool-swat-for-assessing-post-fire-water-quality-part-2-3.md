# The Soil & Water Assessment Tool (SWAT) for Assessing Post-Fire Water Quality: Part 2/3

`https://www.youtube.com/watch?v=lAHM05jeQq0` · id 331 · 1:29:12 · module 125 — Assessing the Impacts of Fires on Watershed Health

[00:01] hello and welcome to the rset training assessing the impacts of fires on Watershed Health my name is Sean
[00:07] McCartney and I'm an rset trainer based at NASA's Goddard space flight center in Greenbelt Maryland it's a pleasure to
[00:14] welcome you all to the second part of this three-part webinar series the following slides provide an overview
[00:21] of the training after participating in this three-part training participants will be able to analyze the key fire science criteria to
[00:30] select the appropriate data from satellites and instruments for a given watershed watershed you'll be able to distinguish compare
[00:37] and contrast the biophysical conditions pre and post fire you'll be able to acquire land use and land cover maps for the region of
[00:45] Interest select River Basin and sub-basin boundaries for your region of interest and recognize how to apply the
[00:52] soil and water assessment tool a River Basin scale model to simulate the quality and quantity of surface water
[01:00] and groundwater the prerequisites for the webinar series are listed below with links to each of the training web pages we encourage you
[01:09] to go through these materials to better prepare you for the content covered throughout the three-part training so why is rset hosting a webinar on the
[01:18] impacts of fires well wildfires can disrupt Transportation Communications Power and Gas services and Water Supplies wildfires tend to lead to a
[01:29] deterioration of air quality and loss of property crops resources animals and people people according to the National Institute for
[01:38] occupational safety and health children the elderly and individuals with underlying health conditions are particularly vulnerable to the health
[01:46] effects of decreased air quality caused by wildfires part two of the webinar series will be focusing on Earth observations and the
[01:56] soil and water assessment tool for assessing post-fire water quality in watersheds watersheds as a reminder the homework will be
[02:04] available on the training webpage starting July 13th with the due date of July 27th a certificate of completion will be
[02:12] awarded to those who attend all live sessions and complete the homework assignment before the given due date
[02:20] the objectives for the second part of the webinar series are as follows by the end of part two participants will be
[02:26] able to identify physically based model components necessary to run a swap model to predict the impact of management on
[02:33] water and sediment in a watershed ingest Earth remote sensing data into swap model using NASA access and
[02:42] recognize best practices used to conduct calibration in Swat questions are encouraged if you have any questions please put them in the
[02:52] question in a question box and we will address them at the end of the webinar feel free to enter your questions as we
[02:58] go we will try to get to all the questions during the question and answer session after the presentations and
[03:04] demonstrations have concluded the remainder of the questions will be answered in the question and answer document which will which we will post
[03:11] to the training website about one week after the training has completed listed below are the trainers for
[03:18] today's webinar Dr Ibrahim Muhammad is a senior research scientist in The hydrological Sciences laboratory at NASA's Goddard space flight center
[03:27] his research interests span physical and statistical hydrological modeling and the relationship with climate and land cover as well as integrating and
[03:35] synthesizing water related science and engineering research activities to meet the growing demands for integrated professional data analysis
[03:44] Dr Amanda Lopez is a geoscience researcher in the water and ecosystem group at NASA's jet propulsion laboratory her research focuses on using
[03:54] NASA remote sensing methods and data products to study water quality Coastal ecology and Marine resource management will now transition to Dr Muhammad to
[04:06] identify physically based model components necessary to run a swap model to predict the impact of management on
[04:12] water and sediment in a watershed Ibrahim over to you hello everyone my name is Ibrahim Muhammad I am a senior research
[04:22] scientist at The hydrological Sciences lab part of NASA Goddard space flight center located in Greenbelt Maryland today I will be presenting an overview
[04:35] of a physically based hydrological model namely The Soil and Water assessment tool and a hydroplimatic tool that is
[04:45] NASA access following my presentation my colleague Mandy Lopez will highlight a case study work on using the soil and water
[04:54] assessment tool to assess post-fire water quality in watersheds the second session titled Earth observation and the soil and water
[05:05] assessment tool SWOT for assessing post-fire water quality in watersheds is part of advanced level training webinars on assessing the impacts of fires on
[05:18] water shared health so this is now the first part which is the SWAT model overview and NASA access
[05:27] so let's begin with that so for today presentation um um um we will discuss how to set up a Soil
[05:38] and Water assessment tool model project we will be giving details on the SWAT model input data needs various output
[05:47] calibration and verification we will also introduce a new tool that can provide ready formatted processed easily ingested remote sensing data needed
[06:00] needed to run the soil and water assessment model then my colleague will be doing the later part which is
[06:09] analyzing post-fire water quality data simulated by a Soil and Water assessment tool model configured over a case study
[06:18] in California so as you can see here these are two examples from The Soil and Water assessment tool configuration
[06:26] we can see how the detail from different layers that is going to help us to answer a question that has been posed
[06:39] for any Watershed study let's now go to the SWOT overview the SWOT is a widely used model in
[06:51] assessing soil erosion prevention and control non-point source pollution control and Regional Management in watersheds watersheds for instance
[07:02] it has been used to address Water Management land use change and agricultural chemical yield related challenges challenges that's what model development is
[07:14] attributed to several federal agencies and academic institutions namely on the United States Department of Agriculture USDA agricultural
[07:26] research service ARS the agricultural research service and Texas A M University University and United States Environmental Protection Agency EPA as well as other
[07:39] agencies agencies I encourage the listeners to visit the SWAT main page to learn more on the SWAT
[07:48] model development efforts so if we can try to summarize SWOT into few lines um here on your right you see a
[08:04] hydrograph hydrograph and you would notice that this hydrograph is calculated at the Mekong River Stream flow station in Laos
[08:13] often we use or we want to understand the variability of Stream flow due to climate or management or human imprint
[08:22] or land cover change so SWAT is a good modeling candidate that can support applications to solve such challenges
[08:33] The Soil and Water assessment tool or SWAT modeling structure combines several components such as hydrology weather sedimentation soil temperature crop
[08:46] growth agricultural management The Soil and Water assessment tool modeling units are cells sub watersheds hydrologic Response Unit
[08:58] and usually they call it hru and point sources sources it is essential to understand how the soil and water assessment model Soil and
[09:08] Water assessment tool model deals with simulating various processes that means care should be given in representation of interactions and
[09:19] processes within a watershed and this is usually the case when we are formulating the hru a nice effort by Iowa State University
[09:30] in collecting analyzing and maintaining salt water and assessment to literature database can be visited and you can see
[09:39] here at the top of the slide um I gave the link so that you can visit that database so and this database is a
[09:49] good source for Scholars when working with the SWAT model and it is utility it has been nicely organized and you can
[09:58] easily find um recent articles related to development related to applications and within the application itself it has
[10:06] ways to identify different applications easily let's now look at the processes that are covered by SWAT the SWAT model as you
[10:22] can see in this figure um covers several processes we can name here ablan processes um Channel or flood plain processes
[10:34] transmission losses evaporation and sediment routing looking at the Upland processes that are covered by the SWOT we can see that they
[10:47] cover hydrology sedimentation and other processes as well Channel processes cover as Kingdom routing method which uses a conservation
[10:58] of mass approach throughout an inflow hydrograph hydrograph evapor transpiration processes they cover different methods such as Penman
[11:09] Motif mystery trailer and Hargreaves methods methods knowing the key processes simulated by the SWAT model helps in addressing the
[11:20] problem that we want to study and guide our decision in analyzing The Soil and Water assessment tool model simulated
[11:28] results um after that we will look at the SWAT input data as we can see um um the swad needs input data and input for
[11:44] the SWAT model is defined at one of several different levels of detail such as Watershed sub-basing or
[11:52] hru hru unique features such as reservoirs or Point sources must have input data provided for each individual feature
[12:03] included in the Watershed simulation for special data the SWAT model needs a digital elevation model Dem for the study area
[12:15] a soil information and a land use land cover layer for meth data input SWOT model needs precipitation data
[12:27] minimum and maximum air temperature data solar radiation wind speed data Etc Etc in CTO observations are also needed such as Reservoir rules
[12:40] and treatment plant operations Stream flow and sediment data are needed for calibration and verification looking at the time series on your right
[12:53] we see an example of Time series data input for the lower Mekong River basin annual precipitation in millimeters here
[13:04] are colored in blue and we have also the mean Max mean annual maximum air temperature in degrees celsius as well as mean annual
[13:15] minimum air temperature in degrees Celsius Celsius um this input data is needed when we are setting up the SWOT model
[13:26] um now if we continue on looking at the SWOT output SWAT output we have several output files
[13:40] that are generated in every SWOT simulation simulation the SWAT model user can control the printing of output files by editing what
[13:51] we call the master Watershed file so this method was Master Watershed file is very very important file because it
[14:00] controls what output the model will spit um average daily values are always printed in the hru sub Basin and reach
[14:10] files but the period they are summarized over will will vary that means it can be daily or monthly or annually
[14:21] the output via output files may include all daily values um daily amounts average over the month the year or the entire simulation period
[14:31] depending upon the user needs that that has been translated or configured in that water Master Watershed file
[14:45] if we look at the hydrologic cycle um just this is a schematic that shows you an overview of the processes that
[14:54] SWAT SWAT um capture and components of water balance as we can see that are influenced by climate
[15:03] and physical characteristics of the Watershed such as the River Reach Network land use and soil the SWAT model
[15:12] partitions the precipitation that you can see that's coming to the land into various hydrological processes such as
[15:20] surface runoff evap transpiration infiltration calculation lateral flow return flow and recharge to deep aquifer Etc um here we can see um different
[15:35] compartments compartments um such as the root zones the shallow or antifa and if unconfined aquifer and deep aquifer so these compartments um
[15:47] basically basically um they are um taking the water flux from compartment to another and in each one
[15:56] the process is involved SWOT is able to capture that and in by setting up different equations another cycle that's very important and
[16:11] it is captured by SWOT is a phosphorus cycle cycle and the three major forms of phosphorus in Mineral soils are organic phosphorus
[16:21] associated with homes insoluble forms of mineral phosphorus and plant available phosphorus in soil solution phosphorus may be added to the soil by
[16:32] fertilizer manure or residue application as you can see in the schematic um phosphorus is removed from the soil
[16:41] by plant uptake and erosion unlike nitrogen which is highly mobile phosphorus solubility is limited in most environments
[16:53] now after defining the model inputs and model outputs and just giving an overview of um the hydrologic cycle that phosphorus
[17:04] cycle and how the processes are configured into swad we will cover some details about the model calibration
[17:16] calibration model calibration is a very very important aspect um when we are conducting a modeling experiment SWAT uses many parameters to
[17:25] describe typical soil plant growth land cover Reservoir and agricultural management characteristics the luckily there is the SWOT
[17:35] calibration and uncertainty procedure software package which is called swats cup which can assist in obtaining calibrated values for model parameters
[17:48] Squad cup program could be used to perform calibration validation sensitivity analysis one at a time and Global and uncertainty analysis
[18:00] so here um I'm giving um an example of a calibrated model over the lower Mekong silver Basin and you
[18:10] can see on your right there are six stations these stations across the lower Mekong River and we can see the metrics
[18:21] that can give us an understanding of the calibration of the models and these metrics are here defined by the NSE and
[18:30] the era of simulated flows on your left this is just a figure that shows you the locations of these
[18:40] stations that we used to conduct the calibration calibration after we calibrate the model we wanted to verify the model
[18:52] and this step is done after calibration so usually verification step is very very important because we normally examine the model behavior
[19:02] during times beyond the calibration periods as you can see in the previous slide we basically calibrated the model
[19:10] for a specific time period now we will assess the behavior of the model within time periods beyond that calibration
[19:20] time period um um this is basically important because the SWOT model verification assures the model is capable of simulating processes
[19:31] outside the training periods and here the same on six locations that we um did in the calibration We examined them for
[19:43] the verification step s and we assess the verification results by obtaining the national suit Cliff efficiency metric
[19:57] after covering the first part which was the soil and water assessment tool now we will go to the second part
[20:05] um which is the NASA access so what is NASA access NASA access is an open source platform
[20:16] for accessing and presenting quantitative remote sensing Earth observations and climate data products in an interactive format so that
[20:27] scientists stakeholders and conserved citizens citizens can engage in the exploration modeling and understanding of the data on your right
[20:39] um you will see the GitHub landing page for NASA access and as an access is a free tool and it
[20:47] is an open source as we just said so you can can um easily um um test utilize and examine to see how it
[20:58] can help you in your modeling exercise um NASA access is available into different formats as we can explain in
[21:11] the the next slides so looking up on this animation which shows um rain data collected by the
[21:22] global precipitation Mission GPM core Observatory one might ask how can we ingest this data into SWOT or any other
[21:32] hydrological model NASA access platform is developed to assist you in answering this question basically NASA access platform provides
[21:42] format formatted data that can be ingested into any hydrological model moreover as access has a web-based application that can be used to
[21:53] visualize remote sensing data so NASA access is a modular which means it can be hosted on public and private servers
[22:06] here we give the existing functions of the NASA access platform NASA access platform is an ongoing platform so every time we add new
[22:18] function and new tool to the platform and here we can group them into two main groups climate and weather in the
[22:28] climate group we have functions that can access and reformat data from cmap 5 and cmap 6 downscaled data data sets and in
[22:38] the other group when as access can access and reformat data from GPM gldes on the various functions that include
[22:47] averaging over the centroid of the study area domain or collecting the available grids within the Watershed domains are available
[22:59] the benefits what are the benefits of NASA access NASA access can be um summarized into two main points it
[23:08] can give us time because it will save time for scientists tasks with analyzing weather and client data as well as
[23:17] developing hydrological model as we just showed in the previous slides if you have that GPM data and you wanted to use
[23:25] it for your SWOT model as access can help you in doing that NASA access can help you to process down skills project
[23:34] data from cmf5 cmf6 collections the NASA access can help you to access gldes data products and so on
[23:44] and the other benefit for NASA access it's Bridging the Gap for non-technically trained stakeholders and decision makers charged with water
[23:54] climate and Environmental Management decisions decisions um this basically is very very important especially with the web web-based
[24:04] feature of NASA access because you can visualize you can analyze the remote sensing data without the need for any
[24:13] advanced software program here we give images of the current NASA access R library and as well as the
[24:23] conda package so NASA access is available as an r package you can go to GitHub install it Nas access is
[24:31] available as a condo package you can go to condo Forge and easily install it in your environment on the environment
[24:42] um here we give the NASA access web-based application home window and this is an app that you can install in
[24:51] your private laptop machine server um and it can do all the jobs that NASA access access um have as well as
[25:04] giving another feature which is visualizing the data that you processed so the user can upload a sharep file and
[25:11] a digital elevation model for his domain for his study area and then select any available function with the temporal
[25:20] period period desired after processing the data the user will receive an email saying the data is ready so he can then start
[25:29] visualizing and analyzing the data products here um I give a small example that explains for example when we are
[25:41] accessing accessing precipitation data from the near real-time product GPM nrt product um here the latency is one day
[25:51] you can see that on your left this is the function that you need to provide some input to it basically what
[26:01] directory that you wanted the data to be at and give the um shape file for your study area the
[26:10] digital elevation model for your study area and then what are the temporal periods that you are interested at
[26:18] after you provide this and you run the function function um it will basically go and translate this into
[26:27] URL URL and that URL is going to go and communicate with NASA servers and obtain the needed data products and format it
[26:37] in a way that can be seen on your right as time series or um um a figure that can be used in your
[26:48] analysis here the same example if we just look at it from our studio as you can see on your left
[26:59] top left this is the the script uh basically the same function that I just explained before and on the bottom you
[27:09] see the r console how after installing NASA access and running this function um this is the results that you will get
[27:18] on your right you will see um files that we call it SWOT ready weather input data so if you wanted for
[27:27] example that data to be an input for SWAT model you can just take these files and and put it in your SWOT model
[27:35] projects these files are already formatted so you don't need to do anything with it it as what will be able
[27:42] to read it and fill the database with the data smoothly okay this is the flowchart that summarize the
[27:55] web-based um NASA access application um it begins from the left by um the available data products that NASA
[28:05] access now have linkage to and then it it will have the user inputs a shape file digital Innovation model
[28:16] the the the time period that is the user is interested at and after that this will be translated into
[28:26] um code that is going to create URLs and that URLs will basically communicate these downloads from NASA servers and
[28:36] then obtain the data process it um format it and after that make it easy for you to visualize to ingest into your
[28:47] hydrological modeling experiment so in summary for this part um The Soil and Water assessment tool SWOT is a small Watershed to riverbase
[28:59] and scale model used to simulate the quality and quantity of surface and groundwater and predict the environmental impact of land use land
[29:09] many practices and climate change NASA access is an open source platform for accessing and presenting quantitative remote sensing Earth observations and
[29:20] climate data products NASA access can be used to ingest Earth remote sensing data into a SWAT model with that I conclude
[29:28] the first part of this of this second session and I pass the microphone to my colleague Randy to continue with the
[29:35] second part of this session thank you for listening Mandy the floor is yours thank you all right thank you Ibrahim for
[29:49] introducing the initial SWOT content I'm Mandy Lopez I'll be talking more in depth about how we evaluate fire impacts
[29:59] on Watershed Health using the swap model so to give some background first about why we're interested in modeling fire at
[30:09] all uh we have seen that globally welfare activities increasing in frequency and severity this is happening as climate change
[30:20] progresses and we see changes in precipitation patterns and so on so as these fires become more prevalent
[30:29] we want to understand what this means for watersheds if you look at the upper right hand figure you can see this kind of graphic
[30:39] demonstrating a fire burning through a land surface you lose vegetation cover you increase erosion and this results in increased amounts of sediment
[30:52] and burn material entering into rivers and streams which end up in Lakes reservoirs and the ocean our project wants to understand what
[31:03] this increase in sediment loading which can also have increases in nutrients or contaminants alongside it what does this
[31:12] mean for the Ecology of lakes rivers in the coastal ocean for example as increased sediments enter the coastal
[31:24] ocean we might see decreased water Clarity which could impact primary producers like phytoplankton or kelp that rely on sunlight penetrating the
[31:34] water column another impact that we're thinking about is as sediment loads or nutrient loads like nitrogen or phosphorus increase
[31:42] into water bodies what does that mean for algal blooms well we see increased gentrification or things like that so
[31:51] our big picture goal here is to try and understand how hydrologic processes are being impacted by wildfires so that we can in turn get
[32:02] a better understanding of how our aquatic ecosystems are impacted so the soil and water assessment tool which you've already heard quite a bit
[32:14] about is a watershed model it goes by the name SWAT commonly in this demonstration in the study we're going
[32:22] to be looking at simulating stream discharge and sediment load and the model is typically calibrated using in-situ observations of discharge or
[32:34] sediment load at monitoring gauges uh in the scope of this training we will not get into the model calibration and
[32:42] validation steps but I'll briefly comment on them here so this diagram that you're seeing at the bottom of the slide is just a
[32:50] schematic walkthrough of what the swap modeling process is like you are step one would be to prepare and input some
[33:00] basic information into the swap model that information includes elevation land and soil cover and climate data particularly precipitation and air
[33:11] temperature data once you feed these inputs into SWOT it will run and simulate stream discharge and sediment
[33:20] load which is step two shown in this workflow workflow in step three you move on to model
[33:27] calibration where you do a comparison of the model simulated discharge and sediment load to the in-situ observations of discharge and sediment
[33:39] load and when you compare simulated and observed in the calibration step you are tuning model parameters you're tweaking
[33:47] and turning different parameter ranges to try and get the best possible fit between simulations and observations when you have a nice fit you move on to
[33:59] model validation and in this step you're taking a new Fresh subset of observational data and doing a second
[34:07] comparison of model simulations to in-situ observations difference is that during validation we are no longer tuning any of the model
[34:17] parameters nothing has changed it is all held constant from step three in calibration calibration so invalidation when you do your second
[34:26] comparison you're looking to see do you still have a good fit between simulations and observations and if you
[34:33] do have a good fit then we consider that the model is both calibrated and validated it's demonstrated to replicate
[34:41] on the ground processes well enough based on our observational data that we can move forward and interpret the
[34:48] actual model outputs which is step five in this training I'll be doing a demonstration of step one where you're
[34:56] actually setting up the swap model with the different input data sets all the other steps are going to be beyond the
[35:02] scope of what we cover today the SWAT example that I will be demonstrating is of the Woolsey fire
[35:11] which burns near Malibu California in 2018. if you look at the figure on the right this is Southern California near
[35:19] Los Angeles near Malibu the blue outline is the Watershed the Malibu Creek Watershed that we'll be looking at today
[35:28] the pink shading area is the burn extent of the Woolsey fire the black triangles are climate data
[35:37] stations this is stations where we have precipitation and air temperature data that will be fed into the model from
[35:45] the red star is the location of our in-situ monitoring gauge this is where we have actual observations of discharge
[35:52] and sediment load that we'll be using or that you would use to calibrate and validate the bottle which again is not
[35:58] going to be covered in this training in the table on the left you have a kind of just a recap of what I've talked
[36:06] about about the SWAT inputs what they are elevation land cover soil cover and so on and then
[36:12] the data source so when I demonstrate you're going to see different data sets and this provides you details of where
[36:19] those data came from uh one thing I want to point out here and I'm about to get into more detail is
[36:27] about the land cover because in our project we're looking to simulate fire within a watershed which means we have
[36:34] to find some way to tell SWAT that a fire happened and in our study we've chosen to do that using this land cover
[36:41] input input what we're doing is taking a pre-fire land cover layer in this case is the natural land cover database from 2016.
[36:53] and we modify it with a burn severity map map for this study we're using a soil burn
[37:00] severity mats in the California Geological Survey so what we end up doing is creating two different land
[37:06] cover inputs one that represents pre-fire conditions in the Watershed and one that represents post-fire conditions on this slide is showing just a little
[37:20] more detail about that post Fireland use map that I'm talking about so we start with your unburned or
[37:31] pre-fire land use cover you overlay soil burn severity which the left figure this is a map of soil burn
[37:40] severity for the Woolsey fire that we used we overlaid land cover with sober and severity and wherever those two layers
[37:48] intersected we did a reclassification so that if for example before the fire the land use was a forest area
[37:59] but during the Woolsey fire it had a low burn burn it would then become reclassified to Forest low burn within our model and
[38:09] this new land cover class forced low burn would have unique parameter changes which I'll talk about in a little bit
[38:16] that represent fire conditions in that particular location so this uh what you're seeing on the right hand side this is the reclassified
[38:28] post-fire land use map where we already did the overlay of pre-fire and burn severity to create this new land cover
[38:38] output all right so on this slide it details the different changes that are made to parameters within burned land covered
[38:50] classes in your new post-fire land use map map you change curve number modified Universal soil loss equation K
[39:00] factor and the area index parameters the reason these parameters are changed is because they each relate to something
[39:07] that we associate with fire occurrence for example curve number and K Factor are related to soil be it soil erosion
[39:15] or permeability and leaf area index factors are related to plant cover evapotranspiration and so on in our
[39:25] model we decided to increase the curve number and K factor which would increase surface erosion and runoff which is what
[39:32] we expect after a fire and we also decided to reduce Leaf area index parameters to reflect vegetation
[39:41] loss on the ground when I go through the demonstration I'll give more detail and show more explicitly what I mean by changing these
[39:49] parameters next thing you'll use is the land use update tool this is a feature in SWOT that allows the model simulation to run
[40:02] using one designated land cover input and then switch to a separate designated land cover input during the model run
[40:14] so in our case the Woolsey fire occurs in November of 2018. using the land use update tool we run the swap model using
[40:23] the pre-fire land use input up until November 2018 and then when the model reaches that date it will switch to
[40:33] using the postfire land cover input that we created now in order for the land use update tool to be activated within SWOT there
[40:44] are a number of input files that have to be created and there are a few different ways out there to make these files and
[40:54] set up your model to activate the land use update tool in my demonstration I will be showing
[41:00] the first method that's listed the SWOT underscore Luc tool but there are also a couple of others which I have linked
[41:10] well in case you want to try those out for reference the two figures that are shown here on the left it is the
[41:19] pre-fire land use on the right it is the post viral land use so you can visibly get a sense of
[41:26] how land use changed pre and post fire now although we are not going to be going through calibration and validation
[41:37] I wanted to show just a little bit about how this particular example is calibrated and validated and perhaps it
[41:46] can help others if you decide to pursue this and get into this step but in our case
[41:53] we had one monitor engage and it has daily discharge for the 20-year study period which is 2000. to 2020.
[42:07] for our model we are interested in using data data pre-fire for the calibration and validation we don't want to use any of
[42:17] that data for calibration and validation because we want to interpret that that's when the fire happened and we're
[42:23] interested in investigating so in our approach we wanted to look at a subset a chunk of data that's
[42:30] happening uh between the years 2003 and 2016 or so and of that time span we wanted to break
[42:40] it up into a calibration subset and a validation subset and the way that you do that is to look
[42:49] at your hydrograph or look at your precipitation in this case the graph is showing showing discharge on the uh is the dark gray
[42:58] line and the vertical y-axis on your left left has the values for that precipitation is dashed blue line and the vertical y-axis
[43:09] on your right is the graph or the values for that and time is shown up across your x-axis
[43:18] when we subset data into calibration and validation chunks we want to choose periods of similar wet dry seasonality
[43:27] or in other words you don't want to have all of your calibration be set in a dry
[43:33] period in all of your validation be set in a wet period because then you're choosing too hydrologically quite
[43:38] different data sets you want to have comparable comparable subsets of data so what you're seeing here is the green shading is showing the
[43:48] time period that we used for calibration the yellow shading is showing the time period that we chose for validation and
[43:55] if you look at the metrics shown at the bottom of the slide there's a similar stream average discharge in these time
[44:01] periods with a similar standard deviation this is what we want to see that there is both wet and dry periods
[44:08] covered within both subsets on this slide we just have some very preliminary results of our modeling efforts
[44:22] efforts uh this is showing you the post-fire period which is covering the year's 2018 to 2020 the dashed kind of green line is
[44:34] showing you where the Woolsey fire occurred this is the subset of model data that we're actually interpreting
[44:40] for our uh study we want to understand how the Woolsey fire impacted sediment load and discharge and as you can see
[44:50] following the Woolsey fire Uh there's Big peaks in both in the simulated and observed variables the red lines and the
[45:00] blue lines it turns out that following the Woolsey fire almost within a month we had huge rains a big rain event that
[45:08] came so we had fire and then almost immediately a lot of precipitation that allowed us to capture this big peak
[45:16] that you're seeing on these graphs in our modeling effort you can see that there's a pretty decent matchup between
[45:25] the blue and red lines between our simulated and observed which is demonstrating that our model is currently doing a pretty good job of
[45:33] capturing that first post-fire Peak immediately following the Woolsey fire if you look further down that timeline toward the end of 2019 early 2020 there
[45:45] are some smaller Peaks where the match-up between simulated and observed isn't as great and we're hypothesizing and something that we're actively
[45:53] investigating is that perhaps this is a recovery signal that our model that the results that you see here are tuned for
[46:02] post-fire conditions but perhaps pre-fire conditions are more representative of those later peaks in that or in other words that our
[46:12] Watershed is recovering and so that's something that is a ongoing investigation investigation okay okay to kind of shift away from that Woolsey
[46:22] fire example and just zoom out our study is not the only one to try and apply SWOT to fire
[46:30] impacts in a watershed on this slide I've listed a couple of other examples in the literature some previous work has
[46:38] shown that SWAT can estimate post-fire discharge sediment load and other water quality parameters similar to what we
[46:46] have found in 2017 basso at all and showed that fire impacted Watershed had increased nitrate phosphate which in
[46:59] their case they looked at local regulatory thresholds and saw that it you know those increases um um were
[47:07] were had regulatory implications as well um so this is an example where the SWAT model along with fires in a watershed
[47:15] was used to talk about nutrient loading pollution pollution uh Havel at all particularly looked at runoff and sediment post-fire in a
[47:28] Colorado Watershed and also were able to constrain and tune the model to capture what they observed with monitoring
[47:35] gauges so the table down here is showing um um kind of a summary from the Buffalo paper
[47:44] where in unburned versus burned or in their case they put wildfire scenarios they could capture the impacts of wildfire within that
[47:58] Watershed that they modeled so if you're interested in getting into more details about how to tweak and change your swap
[48:08] model to capture fire I would direct you to these papers there's not a whole lot out there yet it's still kind of an
[48:16] emerging field but these papers are good for getting a better sense of how it's done and in summary
[48:27] uh our project is really interested in understanding how fires can increase Stream flow sediment load and nutrient load in watersheds other
[48:40] previous work have demonstrated that this does occur and we are interested in using SWOT to quantitatively constrain
[48:48] the changes in discharge sediment loaded nutrient load um this application of the swap model as I just mentioned is pretty new and
[48:58] emerging so there is lots of different ways that you can change SWOT to try and capture fire and in our way is just one
[49:07] of the many ways that it could be done so so if users are interested in in exploring
[49:15] this more I'd be happy to chat more about them all right so in today's demonstration I'll be using Arc SWAT which plugs into
[49:29] arcgis arcgis but there is also a q swap version of this so that you do not need to use
[49:37] proprietary software I just wanted to direct your attention to this for users that don't use arcgis this recording is going to be available
[49:48] uh on the training website so you'll be able to go back and follow at your own pace today I'll be moving through it
[49:57] quite quickly for time's sake but there will be a longer video demonstration available as well as a step-by-step
[50:05] guide so afterward you can go take a look at those materials if you'd like to get a better sense of how to do this
[50:17] okay so the first thing I'll do is start by opening a blank Untitled arcmap document and up here is the SWOT Tool uh
[50:28] SWAT Arc swap interface plugin I'm going to open a new swap project I do not need to save my blank document
[50:37] set up our project now for the project you need to have a Dem land use a mask is optional in our demonstration
[50:50] I'll be using a mask to set up your project you point it to the folder that has your materials
[51:05] now if you go back to that folder you'll see that it is populated with SWAT SWAT databases and some other files
[51:19] next you're going to delineate your Watershed using the Watershed delineator tool tool first thing will be to read in your Dem
[51:28] but we'll go back to that folder select your Dem load it in you can see it loads it
[51:36] populates in the background I'll read in a mask which in our case tells Arc SWAT to only use an area of
[51:50] our choosing you can see this black raster is the mask that's I know that it covers my Watershed of
[51:56] Interest Interest and it just helps cut down on some of the processing that Park SWAT will have
[52:01] to do next you'll click flow Direction and accumulation under this area I'm going to modify it to be 250.
[52:15] there's more information about this in the long form video guide as well as the step-by-step guide so I won't describe
[52:22] why I'm doing that now next thing you'll do is Click create streams and Outlets you see the in the background different
[52:36] stream networks start to be defined next you'll move to the outlet and inlet definition box this is where you're
[52:46] going to point to your monitoring gauge locations and which is a dbf file again more details are in the long form video
[52:53] as well as step-by-step guide this is how SWAT knows where your monitoring gauges are in your watershed
[53:07] next you're going to tell SWAT where your Watershed Outlet is foreign so now you'll see that SWAT has created
[53:41] a boundary for your Watershed including the stream network which is in blue and sub basins which are outlined in purple
[53:49] we're going to next click calculate sub Basin parameters when the process completes you can click exit on the Watershed
[54:24] delineator menu and save your project now you'll see your watershed as well as some different features about
[54:35] it like the stream reaches and uh Basin things like that different Outlets are all populated for you to toggle on and off
[54:47] after your Watershed delineation you're going to modify some databases in your project this only happens in your post fire
[54:58] project if you're doing a pre-fire model you don't have to worry about these extra steps that I'm about to show but
[55:04] what you need to do is modify some land uses uses before we move on to the next step so
[55:10] you go to your project folder which is the SWAT 2012 database open it up open the crop tab
[55:34] we're going to add in some information these are adding in the burned area land uses since this is a post-fire model we do
[55:49] paste we're going to add some more land uses to the Urban Urban these are Urban lands classes
[56:16] we'll repeat that for the urban default as well now that we've made these changes we'll save and close
[56:31] now that we have done that you can go back to our swap project and Define our HR use
[56:40] so now you're going to read in your land use use later later okay I'm gonna select value this is how SWAT
[56:59] understands what the different land use codes are we're going to use a look up table so that
[57:07] so I can read more detail okay okay so now we've loaded our land uses uh including the different burned areas
[57:21] that we changed using burn severity and SWAT has been able to understand it using coding that we described
[57:30] for soils we're going to use the stats go database that comes with SWAT SWAT I will not change anything
[57:44] or slope in our Watershed we're going to be using three different slope classes there's detail about how you choose soap
[57:53] classes and Define them in the longer version as well as the step-by-step guide for this case we're using three
[58:00] classes with different slope grades defined between then zero and nine percent nine and eighteen percent and greater than 18.
[58:11] I'm going to click create each review feature class from my Watershed because it is a small Watershed if your
[58:18] Watershed is large do not use this feature feature and then click overlay okay okay now you have defined hrus or I'm sorry
[58:33] now you have created hrus and we're going to fine-tune them I'm going to use some thresholding to eliminate very small percentage
[58:45] cases where land use is less than 10 percent or soil class is less than 10 percent for slope class is less than 10
[58:51] percent of an hru we're going to disregard those because they are very small percentage of the area
[58:59] because this is the post-fire model and we have burned areas that we want to make sure we don't ignore
[59:06] we're going to Institute an exemption so that none of the burned areas are gonna accidentally get kicked out
[59:15] based on the thresholds that I just set on that previous tab so I selected all of the burned land use
[59:23] classes and Exempted them they will be kept in the model you'll notice I left low burn and
[59:29] moderate burn water wa in the out of the exemption on purpose because because burned water doesn't really represent
[59:42] anything so that's not something we need to keep in our watershed now we'll disregard elevation bands because in our particular case study
[59:53] here at Malibu Creek Watershed we do not have to worry about elevation that interferes with snow and ice and things like that
[1:00:04] click create HR use okay now that that's completed your hrus have been created and you can click on
[1:00:22] this hru analysis reports if you'd like to see some information about the different HR used and how they were
[1:00:32] differentiated in your Watershed so this is just a resource you can look back on foreign here we have all of the inputs that
[1:00:45] we've loaded to date so that you can toggle on and off if you want to take a
[1:00:48] deeper look at to how your soils or your slope classes or land uses are um distributed in your watershed
[1:00:59] next we're going to use the right input tables feature click on weather stations we're going to use a weather simulator
[1:01:08] if you're in the United States you can use any option except wgen underscore user this is only used if you're in a
[1:01:16] watershed outside the United States you're going to select this first one for rainfall we have precipitation data
[1:01:26] prepared for use in the model I'm going to select ring gauges and then navigate to your project folder
[1:01:37] and you're going to read in your precipitation header file um um or temperature data you're going to
[1:01:46] click climate stations go to your project folder and read in your temperature header file for relative humidity solar radiation
[1:01:57] and wind speed data we're going to use the simulation option that Arc SWAT Acts and click okay
[1:02:07] processing is complete you can close out of this window and we're going to save the project next we're going to write the SWOT input
[1:02:17] files files this is under right input tables right side of the files you're going to select all and then
[1:02:24] click create tables we'll get this pop-up and just click yes right click ok now you can close out of
[1:02:37] this menu and save your project all right this is only again for post fire I'm going to do some more database
[1:02:43] edits if you're in a pre-fire model you can skip the next little bit that we're going to do
[1:02:48] I'm going to save this project and close it now you'll navigate to your project folder and we're going to make some
[1:02:56] edits in the project Microsoft access database what's up foreign first we'll edit the soil database the duplicate soil
[1:03:23] parameter we want to change is going to be the us okay here it is first I'll make sure
[1:03:36] that this is sorted from smallest to largest largest okay good that sorting simply so that I can copy and paste
[1:03:48] from this example chain that this example Excel file when you make these edits on your own following the demo materials I recommend
[1:04:03] doing the sword just to make sure everything is in the right order when you paste tend to do a quick visual check just to
[1:04:18] make sure I know for based on my experience that this is a burned area class so I'm just going to do a quick
[1:04:25] double check and make sure yes that's okay it was one of those changed values so it looks like
[1:04:34] at least at a brief glance it looks like it copied and pasted correctly next I'm going to change the leaf area
[1:04:40] index underscore i n i t parameter this is going to be in the management database here it is
[1:04:55] sorted Ubuntu Ubuntu coffee and again quick visual inspection Yep this is a burned area it's changed it
[1:05:17] looks about right of course when you do this maybe spend a few extra minutes making sure everything
[1:05:24] copied over correctly so we'll save the database and close so now we've made the changes to our
[1:05:34] project project database we're going to open it back up click on our arcmap document so we changed a couple of things in our
[1:05:50] project database and we want to make sure that slot knows we change that so we're going to go to under edit SWAT
[1:05:56] inputs rewrite SWAT input files we made changes to the soil and management so we're going to select
[1:06:06] those two and click write files done so now everything is updated this project project has our little modified inputs now we're
[1:06:20] going to actually set up and run the spot simulation so underscot simulation not SWAT take a glance make sure this is the
[1:06:30] correct time period for your model for this project that is correct you can modify your printout settings
[1:06:38] I'm going to leave it as monthly which means what's going to give me monthly time step outputs
[1:06:43] for discharge and sediment and whatever other parameters and why skip is the model warm-up period for my model I'm using three years
[1:06:53] [Music] [Music] under swat.exe version you can choose the version you'd like to run I'm going to use the 64-bit release now I'm going
[1:07:02] to click setup SWOT run okay okay once that's done the Run SWAT option will become clickable so you're going to
[1:07:12] click one SWAT and next you'll see a interface pop-up and this is the model actually running in my case it's 21 years so you're going
[1:07:23] to see it execute up to year 21. okay so I'll run a successful all right at this point you can close out of this
[1:07:34] and save your project now you're going to go to read SWAT output under the slot simulation option
[1:07:44] the most common files that people like to look at are the outputs by reach by sub Basin and by hru so those are the
[1:07:51] three I'm going to click but you can see there are many options I'll import these to the database remember that project
[1:07:58] database you just made some edits to we'll now have output files or output tabs that you can go to and look at the
[1:08:06] floor uh running SWAT check is optional this is a very broad brush stroke overview of your model I'll just click on it to show
[1:08:21] you for this example it'll open up a new window you'll click examine model output and it'll just give
[1:08:30] you a very like I say high high scale broad scale overview here's your simulation length it was 21 years the
[1:08:40] warm-up period it tells you some stuff about your Watershed and you can kind of Click through and it gives you some nice uh
[1:08:49] preliminary estimates of here's what precipitation or curve number or runoff is going to look like in your Watershed
[1:08:55] and we'll give you some messages about maybe your groundwater ratio that's quite right or things like that
[1:09:03] it does this for sediment for nitrogen phosphorus and you can you know so on and so forth all of these things are
[1:09:11] just to make you aware when you actually get into your model calibration and validation is where you can really dig
[1:09:18] into making changes to two-year model um to be more active this saves so optional uh because you can continue
[1:09:30] to tweak within the arc swap interface for example you could go back and make more database edits and then run the
[1:09:36] model again and you know you can kind of uh keep playing around and if you want to look at different iterations this is
[1:09:43] where saving your simulation will be helpful so that's practice for myself I always save each simulation so I can go
[1:09:51] back and look at things if I make changes changes okay okay so at this point you have set up and run
[1:10:00] your SWOT model that's all you have to do do but in the case of fire remember in
[1:10:07] order to use the land use update tool you actually have to set up a pre-fire model and a plus fire model what I just
[1:10:14] showed you is post fire but you would repeat most of these steps and do a pre-fire as well
[1:10:22] now to use the land use update tool which is the feature that Bridges the pre-fire and post fire model together
[1:10:29] that requires using some R scripts but for brevity we're not going to cover that today it is included in the long
[1:10:36] form video as well as the step-by-step guide so you can go refer to those to implement the tool and Scripts
[1:10:44] all right that concludes the demonstration I'm going to pass this off to Sean and I'll be around for the
[1:10:51] question and answer session thank you Mandy for the wonderful demonstration of running our spot to summarize what we learned today
[1:11:03] fires have been shown to increase Stream flow sediment loads and nutrient loads in watersheds SWOT can be used to
[1:11:10] quantitatively constrain fire related increases in water quantity and quality parameters this application of SWOT is relatively new there is the potential to
[1:11:20] continue development and looking ahead to our third and final part which is part three in part three
[1:11:27] we will focus on identifying Global socioeconomic data sets and land cover products useful for assessing the impact
[1:11:34] of fire on population infrastructure and land use and land cover types acquiring land use and land cover maps
[1:11:42] for a watershed of interest and evaluating the severity of post-fire burns within a watershed of Interest as stated earlier there will be one
[1:11:52] homework assignment for all three parts of the training answers must be completed via Google form which can be
[1:11:58] accessed from the training page on the rset website homework will be made available on July 13th with a due date
[1:12:04] of July 27th Parts 1 and 3 will include Hands-On exercises to assess pre-fire risk and post-fire impact on a watershed
[1:12:14] using Google Earth engine JavaScript a certificate of completion will be awarded to those who attend all live
[1:12:21] webinars and complete the homework assignment by the deadline you will receive a certificate approximately two months after the
[1:12:28] completion of the course below is the contact information for Dr Muhammad and Dr Lopez along with links
[1:12:36] to our sit website and social media we hope you will sign up on the rset listserv to receive notifications of
[1:12:42] future trainings and please do follow us on Twitter and YouTube below are links to SWOT resources for
[1:12:51] your benefit along with prerequisites for running SWAT and the NASA Access Data tool we will now transition to the question
[1:13:00] and answer portion of today's training thank you wonderful and and again we've been getting some really terrific questions
[1:13:15] so thank you to everybody that's been submitting them and we do have uh roughly 17 minutes left so if you do
[1:13:21] have a question and you've not posted it in the question box we hope that you will do so jumping right into it
[1:13:28] question number one we can use several tools for the same remote sensing analysis like R python sport Liz SWAT Earth engine Etc however
[1:13:39] what about accuracy how can we know which tool is able to perform more accurately than others or what about
[1:13:47] their limitations and I will hand this over to Dr Lopez to answer question number one all right can you hear me yep Mandy we
[1:14:11] sure can okay great uh yeah so for this question question um I I a little bit of information about
[1:14:20] students students also added some commentary uh below to what I wrote which is not in this training we're specifically
[1:14:33] demonstrating how relative sense data can be used as inputs into the hydrological model so the positive in
[1:14:43] advance certificate associated with those remotely since data sets which are normally going to summarize when you go
[1:14:50] to download that data in a supporting documentation aside from that uh didn't SWAT itself the calibration and validation Center
[1:15:02] where you're actually comparing what the model simulates to into two observations and and there are some statistics that
[1:15:13] we use to evaluate the goodness that fit between simulated and easy to and then the SWAT cup software which is
[1:15:22] the calibration and validation software this is a 95 addiction uncertain Cuban or 95 ppus to constrain the range of model simulations
[1:15:34] and that's basically how SWAT addresses the accuracy of its model outputs is to give give monolithicism 95 CPU band which I kind
[1:15:47] of gets to use more [Music] it's hard to my hair loss or know which tool is going
[1:16:12] to be the most accurate um that's I try to think maybe more spot focus into that question and
[1:16:20] Abraham I see you have some other details do you want to go ahead and talk about what you write
[1:16:30] great uh wonderful yeah thank you and and Mandy I was wondering uh it seems like you're you're uh somewhat muffled
[1:16:37] can you try to get maybe as close to the microphone as you can I think that might
[1:16:41] help with the clarity thank you sure is any better uh can you keep talking uh testing testing yes perfect yeah that
[1:16:55] is much better thank you so much awesome great uh so jumping into question number two in a time of climate change
[1:17:01] especially approaching a Tipping Point how does calibrating and verifying models make sense if first and second order statistics are not stationary how
[1:17:10] can a model accurately predict the future and Dr Lopez back to you sure yeah so this is a challenge as we know that
[1:17:23] climate change is progressing and therefore hydrological processes are going to change but one way that we can
[1:17:30] account for this is to model over a long time periods that have variable climate conditions so that you have plenty of
[1:17:41] model time simulation to work with for calibration and validation so if you're only modeling over the course of five to
[1:17:49] ten years that's relatively short for the scale that climate change can happen on but if you can run the model for a much longer time
[1:18:00] period maybe on the order of 20 plus years you're hopefully capturing quite a bit of variability in precipitation and
[1:18:09] air temperature and things like that so that when you move into calibrating and validating the model you have plenty of
[1:18:16] time record to use to kind of train SWOT to capture all of the different seasonality in um
[1:18:26] um on the ground conditions so that hopefully you have confidence that your swap model can reflect the
[1:18:36] range of conditions that your Watershed might reasonably experience within the the time period that you actually want to interpret data for
[1:18:47] that said which is kind of what we've done in our project we have a 20-year model period and we've used as much of
[1:18:56] that as we can for calibrating and validating leaving only the the few years post fire for interpretation
[1:19:04] and the idea being that if we're pretty confident that we are our model is performing well in both calibration and
[1:19:12] validation validation um that we can then go back and synthetically alter climate variables and then look at how outputs change and
[1:19:25] it's not necessarily A uh uh like true prediction it's more of a let me Tinker with what the model is doing
[1:19:35] manually and then see how the output changes and we can use that in a predictive way to say okay if we
[1:19:44] anticipate that climate is going to change by reduced precipitation and higher air temperatures what then does the model output under those scenarios
[1:19:56] and we kind of call those predictions a great wonderful yeah thank you so much for that question number three is there
[1:20:07] any model like SWAT for assessing the impact of climate change on forest fire um I personally am not familiar with
[1:20:18] other models that are being used to evaluate the impact of climate change and forest fires I see that there have
[1:20:28] been some others listed here by Ibrahim NASA Las crisis DHS VM I personally am not familiar with
[1:20:38] these so I would encourage whoever asked this to maybe Google them if they're interested interested um but for SWAT itself this application
[1:20:48] of fire simulation is relatively new and rare there are maybe a few um um a few studies that have done it ours
[1:21:00] among them uh yeah I don't have much more information on that end great uh moving on question number four
[1:21:11] in the SWAT demonstration uh in national land cover database nlcd nlcd data set is used with the California Geological
[1:21:21] Survey burn severity data set are these data sets available for every state or are there other data sets available how
[1:21:28] often are these data sets updated yeah so in my case I can only speak to California since that's where I've
[1:21:37] worked I know within California there are a few different places that have burn severity data sets uh California
[1:21:46] geological surveys one of them it does not have a burn severity data set for every single fire uh the California
[1:21:53] Geological Survey only selects uh some of the fires in the state but there are some other databases like
[1:22:00] the monitoring Trends and burn severity data product uh that one I believe has the biggest coverage of fires in the U.S
[1:22:11] and maybe Beyond so I would start there there's also a newer database from a paper that was published last year
[1:22:21] called the Wildfire burn severity and Emissions inventory that I believe covers most California fires over the last decade or so uh I
[1:22:33] haven't checked that database in quite a while but I believe they are actively updating it so uh for burn severity I
[1:22:40] would look at least for California at those three options if you're in a different state maybe inquired with your State's geological
[1:22:51] agency to see what they have um but for the national land cover data set and LCD that's updated about every
[1:22:59] five years and the data portal is pretty well maintained with um um documentation of of when it's being updated and how it's
[1:23:11] changed great thank you Mandy uh question number five are there SWAT tools that will run in arcgis Pro
[1:23:22] no unfortunately um to my knowledge and at this point SWAT is not compatible with arcgis Pro um maybe that might change I have no
[1:23:35] idea it seems like the the people is what has such a large user base that that maybe if there's enough demand the
[1:23:44] someone somewhere might be persuaded to make it work but um to my knowledge it does not work with arcgis Pro and it
[1:23:52] requires certain working versions of arcgis I don't remember them off the top of my head but I put a link to that
[1:24:00] question in the answer to that question um to the website that actually gives all the details of which version of
[1:24:06] arcgis you would need to use our spot great question number six is it required excuse me is it required to have
[1:24:15] Microsoft Access to SWOT or can you just use Excel I don't believe you need to go out of
[1:24:22] your way to acquire Microsoft Access um when you download and install SWOT it comes with everything that you need so
[1:24:31] that when you run uh SWAT on your computer it will automatically create that database for you um and store the data in that structure
[1:24:43] I think it would be helpful if you had the Microsoft Access license so that you could work with those files that SWAT
[1:24:49] generates more easily but I I don't think think I don't think you need more than that that one maybe when you go to install
[1:25:00] and use SWAT I would take a closer look at the manual when you do the installation great question number seven could you
[1:25:10] please provide us with some resources to help with model calibration and verification for the tutorial presented today
[1:25:18] today uh yeah that I S I believe it looks like Ibrahim might have put a link to a
[1:25:26] manuscript and I can also add some links as well but there are a good handful of papers by Dr Kareem abaspor who is a
[1:25:38] large uh largely uh one of the prominent developers of SWAT cup which is the calibration software he
[1:25:48] if you go to YouTube and just put SWAT cut in you'll probably um it'll pop right up but I'll put some
[1:25:55] links in this document there's a large Suite of YouTube tutorials for the calibration and validation and there are some papers by Dr
[1:26:05] abbasport so I'll I'll put these links uh in the answer to this question perfect and question number eight given
[1:26:16] different soil characteristics and properties that vary area to area can spot be applied to any geographical area
[1:26:26] uh yes it can be applied to any geographical area as long as you have the inputs that's what needs so for
[1:26:37] example example I see the in my demonstration I did it for California and SWAT has a U.S stats go soil database already
[1:26:49] loaded but you as the user can Define your own soil input um um from however or wherever you you get it
[1:27:00] from be it from a state or federal agency or even a soil rest or layer that you went out and created and made
[1:27:09] yourself uh you can change the soil input to be appropriate to your area I'm just looking at ibrahim's answer
[1:27:20] really quick to make sure that I did not leave anything out too long yeah yeah I think I cover what I covered with the
[1:27:30] kind of mentioned here okay wonderful and question number nine is there a version of Q SWAT that is
[1:27:36] compatible with a Mac operating system yes yes short answer yes um um I will uh search around but this can also just
[1:27:49] be Googled um there there is a version of it I don't remember exactly what it's called wonderful well uh thank you uh Dr Lopez
[1:28:00] so much I and and also Ibrahim uh Dr Muhammad for for answering doing such a great job in in addressing all the
[1:28:06] questions that were posed by the participants for the part two um we want as we wrap up I want to thank
[1:28:12] each and every person that did join us today for the second part I want to remind everybody that this Thursday and
[1:28:17] two days at the same time we'll be concluding this webinar series uh when we uh when we have the final part uh and
[1:28:24] so we do hope that you'll join us all on two days at the same time I also want to
[1:28:28] thank Our Guest uh presenters today Dr Amanda Lopez and Dr Ibrahim Muhammad thank you both so much for contributing
[1:28:35] this wonderful content and demonstrations uh using Arc swap uh in in Malibu fire in Southern California I
[1:28:42] also want to thank the entire rset team you might not have heard or seen us but they've been working very hard in the
[1:28:48] background to make this uh training a success impossible and that's a a medium Brittany Beaudry Brock Blevins Natasha
[1:28:55] Johnson Griffin Sarah cutshall someone Hudson odoi Jonathan O'Brien and Sue Monty so thank you to the entire rset
[1:29:02] team and we look forward to seeing you all on Thursday for the final part of the webinar series thank you
