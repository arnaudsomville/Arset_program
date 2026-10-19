# Global Air Quality Forecasting by NASA, Part 2/3

`https://www.youtube.com/watch?v=OgWJtSx-sr0` · id 16 · 1:42:11 · module 30 — Introduction and Access to Global Air Quality Forecasting Data and Tools

[00:02] okay everyone welcome back to our webinar series introduction and access to global air quality forecasting data and tools
[00:11] this is session two global air quality forecasting at nasa my name is melanie filet cook i'm a research scientist at nasa goddard
[00:21] space flight center right outside washington dc i'm very excited to talk to you today here's an outline of our webinar series
[00:32] agenda so session one hosted by my colleague dr paul gupta covered the science behind air quality forecasting
[00:39] and the parallels to weather forecasting how on talked about different methods that can be used to forecast air quality
[00:47] ranging from simple persistent model persistence models all the way up to very complex three-dimensional atmospheric chemistry models
[00:58] we'll talk about air quality relevant forecast and re-analysis products from one of those complex three-dimensional models models the nasa geos earth system model and
[01:08] that's me there on the left hello so today by the end of this presentation i hope that you'll be able to
[01:19] identify the different air quality relevant model outputs available from the goddard earth observing system or geos earth system model
[01:29] understand the difference between analysis analysis reanalysis and forecasting and understand the different ways satellite observations are used for
[01:38] forecasting re-analysis and evaluation and also discover how you can subset and visualize both re-analysis and forecast outputs
[01:52] the goddard earth observing system model is a global model that actually consists of a group of different model components
[02:00] an atmospheric general circulation model or agcm an ocean general circulation model and the catchment land surface model
[02:11] these models can be connected in different configurations in order to address questions related to different aspects of earth science
[02:20] gis model development uses the modular architecture of earth system modeling framework framework which simplifies the management of both
[02:30] model code and the different configurations that the model can be run in geos is designed to function seamlessly
[02:42] across many different scales and applications applications these applications include real-time atmospheric analyses and forecasts and long-term atmospheric
[02:53] reanalysis which we'll talk about today geos is also used to produce coupled atmospheric ocean seasonal forecasts and study climate variability and change
[03:04] on decadal scales including uting using uh coupled atmosphere chemistry simulations to project the evolution of the ozone
[03:13] hole hole because of nasa's high computing capabilities geos can also be run at very high spatial resolutions even as
[03:21] fine as 1.5 kilometers global high resolution simulations like these these form the basis for observing system simulation experiments or aussies
[03:34] buses are a way to look at the impact of new satellite observations on the quality of products produced and so it's
[03:41] important to be able to simulate those observations on similar scales as the instrument resolutions so in this presentation we're going to
[03:54] focus primarily on the atmospheric general circulation model or agcm and specifically the simulation of aerosols and trace gas chemistry
[04:05] within the egcm the agcm is a global three-dimensional atmospheric model it's a grid-based model meaning the atmosphere is divided into a
[04:20] set of three-dimensional grid cells the size of the grid cell determines the spatial resolution of the model
[04:29] the smaller the grid cell the more detailed the information and the more computing power needed to run the model
[04:37] because of the computing power required in most cases if very high resolution or smaller grid cells is needed the model
[04:46] domain will be smaller but like i described earlier gis can be run for short time periods at 1.5
[04:53] kilometer spatial the figure on the left shows the typical latitude longitude grid that you might think about when you think about
[05:02] dividing the globe up into grid cells but geos is actually run on what's called a cubed sphere grid
[05:10] this type of grid is used to ensure a uniform spatial grid and is better for scalability at the large range of
[05:18] resolutions gs can be run on the agcm simultaneously simulates the physics physics dynamics and chemistry within each grid
[05:29] cell cell for trace gas chemistry and aerosols the emission emission transport chemistry and removal of these species is also simulated
[05:40] emissions are a key component of air quality forecasting and can be read in as a model input or the model can have a
[05:48] parameterization that estimates the emission of a species within the model itself itself an example of a model input would be
[05:55] emissions from sources like power plants or cars or an example of an emission that is usually parameterized within a model is
[06:04] something like dust emissions which are usually a function of soil wetness or wind speed throughout today's presentation
[06:17] i'm going to use terms like forecast analysis reanalysis and data simulation so before we continue i wanted to pause
[06:26] and define some of these terms and show how they relate to one another when you want to forecast future
[06:34] conditions it's best to start from a best estimate of current conditions data assimilation is the process of
[06:43] assimilating or incorporating observations observations into a model state to produce the best current estimate of the atmosphere land or ocean
[06:55] so we see here we have our model state and our observations and through the assimilation of those
[07:03] observations observations we produce an analysis which is an updated model state and a blend of the model and
[07:12] observations now starting from our current updated model state which represents our best estimate of current conditions we can issue a forecast
[07:27] where starting from our best estimate a simulation is run forward in time to predict a future state
[07:36] but as you can imagine the analysis fields are very useful for scientific studies but both data assimilation techniques
[07:45] forecast models and the observations themselves are evolving and improving so so you can't really examine these analysis
[07:54] fields over long periods of time together because there'll be inconsistencies as a result of the changes that i've just described
[08:02] so so a re-analysis uses data assimilation to blend a forecast model simulation of the past with past satellite observations using a
[08:14] consistent data assimilation technique and a single model version to produce a long-term data set that can be used for
[08:22] longer term analyses we'll talk more about re-analysis later in the presentation this webinar will focus on the
[08:34] near-real-time weather and chemical forecasts and re-analysis products from gs gs the gis forward processing analysis and forecast
[08:43] forecast or gsfp the gs composition forecast or gscf and the modern era retrospective analysis for research and applications
[08:54] version 2 or merit2 re-analysis before going into the details of each system i want to emphasize that the gs
[09:04] neo-real-time forecasts are dynamic and evolving systems gsfp in particular is updated every six to 12 months months through either the introduction of new
[09:14] observations into the data simulation system or through an update in the forecast model so the information i'm going to show and
[09:22] link to here represents the current information as of now in september 2021 so if you're viewing this in the future
[09:30] hello from the past for the latest information please visit the gmao website shown here the nasa global modeling and
[09:39] assimilation office or gmao maintains and develops the geos earth system model so throughout this presentation i've tried to include both the current
[09:49] information and where you should check to see if there have been updates so first we'll start with gsfp
[10:04] the gs forward processing or gsfp offers publicly available forecasts of weather aerosols and carbon monoxide all on the
[10:13] same spatial scale the animation on the right shows gsfp aerosols for december 2019. in this animation each type of aerosol
[10:23] is assigned a different color as shown below the animation a few slides we'll talk about the different types of aerosols included in
[10:30] fp fp fp forecasts support nasa field campaigns who make use of the forecasts for flight planning and real-time
[10:39] analysis analysis gsfp also provides boundary conditions for regional models and provides the meteorology for chemical forecasts from other models
[10:49] such as the whole atmosphere community climate model or wacom and chemistry transport models like gschem gschem as i said earlier gsfp is a dynamic
[11:01] state of the science system so it's updated every six to 12 months so users who want to use the fp forecast
[11:08] or analysis fields to drive other models are urged to make sure that your simulation period doesn't span one of
[11:13] these updates because it can introduce inconsistencies inconsistencies the gmao near real time product web page linked here has details and dates for
[11:23] the latest model updates here's a quick reference table for information about the fp analyses and forecasts forecasts fp forecasts are issued twice a day
[11:38] a 10-day forecast initialized at zero z and a five day forecast initialized at 12 z forecast model and data simulation are
[11:49] run at about 12 kilometers spatial resolution on the cubed sphere but the output is saved on a traditional
[11:56] latitude longitude grid at about 25 kilometer spatial resolution two-dimensional output products are available for every hour and
[12:07] three-dimensional products are available every three hours there are 72 levels in the vertical extending from near the surface to
[12:16] 0.1 hecta pascals analysis fields are available back to 2014. 2014. forecast fields are available for about three weeks
[12:29] so in this presentation i'll focus on air quality relevant fp output but a full and detailed description of all of
[12:38] the fp output can be found within the most current file specification document and i've linked to that here
[12:46] but in the future you can check to see if there's a more recent version of the document on the near real-time product
[12:52] page or in the link at the bottom of this slide every six hours over five million observations are
[13:05] assimilated into gs this animation shows an example of the wide variety of observations that are assimilated the gsfp data assimilation uses what's
[13:16] called a hybrid four-dimensional ensemble variational or hybrid 4d nvar approach approach this approach uses an iterative method
[13:27] to correct the model forecast in both space and time for aerosols geos assimilates observations of aerosol optical depth at
[13:38] 550 nanometers from the modis aqua and modus terra sensors it's important to remember that aerosol optical depth is a unitless optical
[13:49] quantity quantity that indicates the total extinction by all aerosol species throughout the atmosphere column so when the aod is increased or
[14:00] decreased as a result of the assimilation assimilation the model decides how this change is distributed in the vertical
[14:07] and how it is distributed among the various aerosol species aerosols in gsfp are simulated with a radiatively coupled version of the
[14:21] goddard chemistry aerosol radiation and transport model or go-kart go-kart is a bulk aerosol scheme that consists of 18 aerosol tracers
[14:33] dust in five non-interacting size bins sea salt in five size bins hydrophobic and hydrophilic black and organic carbon
[14:43] sulfate and nitrate both dust and sea salt have wind speed dependent emissions sulfate nitrate black carbon and organic
[14:53] carbon have emissions from fossil fuel combustion combustion biomass burning and biofuel consumption with additional sources biogenic sources for organic carbon
[15:06] sulfate is also produced by the chemical oxidation of sulfur dioxide gas for so2 and dimethyl sulfide a future version of go-kart will include
[15:17] a brown carbon species for biomass burning emissions of organic carbon go-kart simulates the emission chemistry and loss for all the species listed on
[15:31] the previous slide references for the emission sources are listed here for more information about the quick fire emissions database or q-fed fire
[15:43] emissions emissions you can actually review sessions three and four of a previous rset webinar satellite observations and tools for
[15:52] fire risk detection and analysis and i've included the link to that webinar series here loss processes for all aerosols include
[16:02] wet and dry deposition scavenging by convection and large scale wet removal and sedimentation so this is an example file name for a
[16:17] gsfp output file so in these next slides i'm going to walk you through how to interpret this and to find the output
[16:25] that is most relevant for your particular application all output from geos is organized into collections that group like variables
[16:38] together together in gsfp collections are organized by frequency frequency number of dimensions the group description and the horizontal
[16:48] and vertical grid the frequency indicates whether the output file shows instantaneous values at a given time interval
[16:57] or whether the output is a time average and what that time averaging interval is so in other words
[17:05] a three hourly instantaneous collection will contain the model output at exactly those times a three hour time averaged collection
[17:15] will contain model output averaged over a three hour time period and the time label will be the center of that time average
[17:26] the dimensions indicates the dimensions of the variables included in that collection so 2d files will only have two
[17:33] dimensional variables but files labeled 3d can have both two-dimensional and three-dimensional variables within it the group is a three-letter abbreviation for the
[17:46] type of variables in the collection for example aer represents the file that has aerosol related related variable fields
[17:57] the file specification document lists all the different groups and their meanings the horizontal and vertical grid is
[18:06] indicated by two letters the first is usually n indicating that it's the nominal horizontal grid the vertical grid is indicated by the
[18:18] letters x for horizontal 2d grids p for output on three dimensional pressure level grid v for output on the native 72 model
[18:31] levels levels and e for output on the native model level edges so those will have 73 vertical levels
[18:44] the collection names tell you almost everything you need to know about the contents of a file the rest of the file name contains
[18:52] information on the mode time and file version the mode indicates whether that file is from the assimilation or the forecast
[19:03] the assimilation files are the analysis fields that are used to initialize the forecast forecast the time is indicated by the format
[19:12] shown here for a forecast file both the assimilation cycle and forecast time will be part of the
[19:19] file name the file version is usually vo1 and gsfp files are all in netcf4 format so going back to our file name we can
[19:33] now interpret what each piece of this long name means the gsfp indicates that this is from gsfp
[19:42] gsfp for the fc st indicates that it's a forecast rather than from the analysis fields the t
[19:51] tavg3 2d aer nx that's the collection name tells us that this file contains two-dimensional two-dimensional three-hour time average aerosol
[20:03] variables variables and the time indicates that this file is for a forecast initialized at on september 1st
[20:13] 2021 at 0z and the output contained in the file is valid for september 2nd 2021 at 1330z
[20:25] and this represents the center point of a 3 hour time averaging period between 12 and 15z again the file
[20:40] specification document will contain detailed information about every variable in every collection but i wanted to highlight some
[20:48] particular collections with air quality relevant output aerosol related collections are output at three hourly instantaneous or time
[20:57] average intervals these collections contain information about aerosol optical properties surface concentrations column density emissions emissions removal and 3d mass mixing ratios of
[21:13] each aerosol species in each size bin unfortunately as of right now pm 2.5 is not an output variable
[21:25] this will be corrected in a future version of gsfp so for now i wanted to make sure i included how to calculate it
[21:32] using the output the variables needed are in the t average 3 2d aer nx collection that's shown here in
[21:43] the top row the variable names and the equation that's recommended to use is shown here on the slide
[21:53] one more note that nitrates were added to the fp system in about january of 2017. 2017. so if using the analysis fields that are
[22:04] available before that time to calculate pm 2.5 you should use the equation i'll show later that is used for mara2 which
[22:13] also does not have nitrates so now i'll show a few cases a few case studies of fp forecasts and analysis
[22:28] this year 2021 continues a trend of increased wildfire activity in the western u.s the left figure shows aerosol optical
[22:37] depth for black carbon and organic carbon which are the primary aerosol emission source of aerosol emissions of
[22:45] fires fires this figure is for wednesday july 21st 2021 at 6c figure on the right shows surface
[22:56] observations observations those are in the red line the different geos forecasts initialized at zero z in circles
[23:05] and the analysis in black for boise idaho from july 3rd to july 18th gsfp accurately simulates current
[23:15] conditions and forecasts for the amount of pm 2.5 as a result from the smoke from the wildfires in
[23:21] this region beginning on july 10th gsfp does start overestimating p of 2.5 at the surface and this overestimation could be due to
[23:32] the fact that gsfp does not currently have the capability to loft fire emissions high into the atmosphere like you might expect to
[23:40] happen from intense hot fire activity so because of this aerosol concentrations might be too high near the surface
[23:54] another case study during june 2020 dust was transported across the atlantic ocean in an event called the godzilla
[24:02] dust event ground observations in the caribbean recorded the highest aerosol loading in the last 20-year period and surface concentrations there were
[24:13] almost three times higher than the 24 hour epa standard limit gsfp analysis fields that are shown in
[24:22] the top figure show the saharan dust on june 26 2020 at 14z darker orange colors represent a higher
[24:31] concentration of dust particles in the atmosphere atmosphere looking at the observed aerosol optical depth from the viers instrument which is
[24:40] not assimilated in fp in the bottom figure we can see that geos accurately stimulates the spatial extent of this extreme plume
[24:53] next we'll move on and talk about geos composition forecasts or glcf the gscf forecast uses analysis and
[25:05] forecast fields from the gs system along with the gischem chemical mechanism to forecast global three-dimensional distributions of both trace gases and
[25:15] aerosols aerosols the movie on the right is just a small snapshot of a longer movie from the nasa science
[25:23] visualization studio showing a lot more species you should check it out geoschem is a community developed global
[25:33] three-dimensional model of atmospheric chemistry and consists of over 250 chemical species and over 725 chemical reactions reactions the geoscam code base is located in git
[25:45] repositories which allows advances and developments to the code base to be used by both the academic research community
[25:54] and the gs systems in the gmao gsa jfcf forecasts support nasa field campaigns campaigns and allow the broader community to
[26:06] examine the interactions between atmospheric transport surface emissions chemical processes and removal processes that result in global predictions of surface air quality
[26:18] questions about grcf can be sent to the email address that i've shown here on the slide the gscf forecast begins with a
[26:30] simulation of the previous day since there's no data assimilation in the gi cf system the forecast initial conditions are
[26:41] provided by this simulation using what's called a replay technique to constrain the model meteorology the replay technique is actually very
[26:52] similar to the data assimilation i described earlier the difference is that instead of observations being used to update the
[27:01] model state an analysis field is used instead in the case of grcf the analysis fields used are from a separate near real-time
[27:13] system called gsfp it or gsfp for instrument teams fpit is a frozen version of gsfp that is actually very similar to the
[27:26] version that is used to create the merit2 reanalysis because it is a consistent model version these replay fields from glcf can be
[27:36] used as a continuous atmosphere composition archive the other difference between the replay technique and the data simulation in
[27:45] gsfp gsfp said this is that the replay technique uses a three 3d variational or 3d var data assimilation technique
[27:58] in the glcf system two aerosol schemes are run simultaneously the first is gocart which is radiatively coupled to the agcm
[28:10] and geoscam also includes its own aerosol module which is somewhat similar to go-kart in that it is a bulk aerosol
[28:17] scheme scheme gs cam also contains the same aerosol composition dust sea salt carbonation aerosols aerosols sulfate and nitrate and gs chem also
[28:29] includes secondary organic aerosols for more details about the differences between go-kart and gs chem aerosols you can visit the gs chem website that i've
[28:40] linked to here and for full details of glcf you can see the keller at all paper that i've linked
[28:47] to here as well this slide is more of a reference slide showing all of the different emission
[28:56] sources for gscf for the full description of these again see the keller paper and the file specification document for glcf also
[29:07] contains a lot of these references and here is our quick reference table again with the gscf added
[29:19] the one-day replay and five-day cf forecasts are issued once a day initialized at 12z the replay and forecast are run at about
[29:30] 25 kilometers spatial resolution and saved on a traditional latitude longitude grid at that same resolution 25 kilometers
[29:40] most outputs are available for every hour and a special collection of surface outputs are available at a high temporal frequency of 15
[29:49] minute increments similar to fp there are 72 levels in the vertical extending from near the surface to 0.1 hectopascals
[30:00] the replay fields are available back to 2018 2018 and again since the model version and assimilation technique have remained consistent over
[30:11] that time this can be considered as a continuous atmospheric composition archive archive forecasts of the air quality air quality
[30:19] relevant surface concentrations collection are available back through 2019 2019 and the full forecast output is available for about two weeks
[30:30] the full and detailed description of all cf output can be found within the file specification document linked here
[30:37] again visit the link at the bottom to make sure there isn't an update or a more recent document
[30:46] cf output is also organized into collections but have a slightly different format than fp in gscf collections are organized by
[30:55] group time interval frequency and the horizontal and vertical grid similar to fp the group is a three-letter abbreviation
[31:04] for the type of variables in the collection collection some examples are shown here the aqc group refers to the air quality
[31:13] relevant group the time indicates whether the output file shows instantaneous values at a given time interval or whether the
[31:21] output is a time average and then the frequency is how often it is output or that time averaging
[31:28] interval interval the horizontal grid is expressed as a letter letter either g for global or r for regional
[31:37] followed by the horizontal resolution expressed as the number of grid cells in the longitudinal direction and the number of grid cells in the
[31:45] latitudinal direction the vertical grid is indicated by a letter and a number the letter indicates the type of
[31:53] vertical level where x equals 2d fields p indicates pressure levels and v is output on the model levels
[32:03] the number shows how many vertical levels are included gscf file names also consist of information on the version mode and
[32:16] timestamp timestamp file version is usually vo1 the mode indicates whether that file is from the replay or the forecast
[32:26] and the time is indicated by the format shown here for a forecast file um both the assimilation cycle and
[32:34] forecast time will be part of the file name name all glcf files are netcdf4 format similar to fp
[32:46] so we can now interpret this very long gocf file name the gocf vo1 fcst indicates that this is a forecast
[32:58] file from gscf the next part is the collection chem t average one hour g one four four zero
[33:09] by 721 underscore v1 collection that tells us that this file contains one hour time averaged chemical species
[33:19] at the global quarter degree horizontal resolution for a single model layer the time indicates that this file is for a
[33:30] forecast initialized on march 9th 2019 at 12z and the output is valid for the time for march 14th 2019
[33:45] at 730z which represents the center point of a one-hour time averaging period between 7 and 8 z
[33:56] here i'm again highlighting particular collections available from grcf the high frequency collection contains instantaneous surface chemistry and
[34:05] meteorology output every 15 minutes the air quality concentrations collection contains one hour time average surface concentrations of co
[34:17] no2 no2 ozone pm 2.5 from gs chem and so2 other collections contain surface values of many more species
[34:29] or column quantities emission and removal information and three-dimensional distributions of several species on pressure levels for pm 2.5 values are available from
[34:42] both go-kart and gschem the go-kart pm 2.5 values are only available in the high frequency collection collection there are also instantaneous and one
[34:52] hour time average in collections containing meteorological meteorology variables available from grcf here are some case studies and
[35:05] highlights using geocf this animation shows the evolution of global surface ozone from july to august 2018. 2018. ozone is a pollutant produced and
[35:18] destroyed through interactions of various chemical species such as nitrogen oxides and volatile organic compounds in the presence of sunlight
[35:27] and requires a complex chemical mechanism and a lot of computational power to simulate accurately watching this animation you can actually
[35:35] see the increases in ozone in the sunlit portions of the globe forecasted concentrations of pollutants like ozone no2 and pm 2.5
[35:49] can actually be combined to calculate global air quality indices here's another case study for may and june of 2019
[36:02] smoke from wildfires in southwest canada led to poor air quality throughout the northwest u.s here here red triangles indicate major active
[36:13] fires fires the top animation shows pm 2.5 emitted from these fires the bottom panel shows an animation over the same time
[36:23] but for ozone ozone is not directly emitted from fires but you can see the impact of the fires
[36:30] on ozone concentrations within the smoke plume high concentrations of no consume ozone leading to lower ozone levels or lighter
[36:41] colors near the fire sources however as the plume mixes with surrounding air ozone is produced leading to increased concentrations near
[36:52] the plume edges ozone produced in wildfire plumes can be comparable to urban pollution levels the color at all paper i've mentioned
[37:06] before contains a detailed evaluation of glcf ozone no2 co so2 aerosol optical depth or aod and pm 2.5
[37:19] using a variety of ground-based and satellite observations which are shown here in this table they include both an evaluation of the
[37:29] replay and the forecast and here i'll highlight some of the evaluation done for grcf aerosols comparison against satellite
[37:40] observations is the only way to evaluate a model on a truly global scale here here gscf replay aerosol optical depth shown
[37:49] on the top left is compared with aod from modis aqua the difference between them is shown on
[37:56] the bottom left averaged for all of 2018 and 2019. to compare the two on temporal scales monthly averages are shown for six
[38:07] regions on the right and these regions correspond to the rectangles on the difference map overall overall gscf shows higher aod than modis but
[38:18] captures the spatial and seasonal patterns seen in the satellite observations observations the overprediction is likely the result
[38:26] of a number of factors first of which is the use of htap htap so2 emissions these emissions are valid for the year
[38:35] 2010 but since 2010 many countries have dramatically reduced their so2 emissions and use of that emissions inventory
[38:44] leads to the overestimation of so2 emissions emissions which leads to an overestimation of the sulfate aerosol the paper also mentions that gschem has
[38:54] a known issue with the overprediction of aerosol nitrate especially over china and these are issues that will be
[39:00] corrected in a future version of glcf these figures show comparisons between the gscf replay and about 2600 surface
[39:13] pm 2.5 observations from the open aq air quality observation platform we see a very similar picture as previously
[39:24] overestimations are seen over europe north america and asian for the region i just outlined but it should be noted that even though at
[39:32] about 25 kilometer spatial resolution that gscf is one of the highest resolution global air quality models and
[39:42] and a 25 kilometer by 25 kilometer grid cell likely does not truly represent what a single measurement will observe
[39:51] especially in urban areas where concentrations change on much smaller spatial scales than 25 kilometers these figures show the evaluation of
[40:06] forecast skill for surface ozone no2 and pm 2.5 the top row shows the normalized mean bias bias and from the replay shown here as
[40:19] j minus 1 on the left throughout the forecast shown as plus one to plus five days the model shows low biases and the skill
[40:29] doesn't change very much over the course of the forecast the same is true for the normalized root
[40:34] mean square error shown in the center row row the bottom row does show a decrease in correlation in time as the forecast
[40:43] evolves evolves this is likely the impact of transport errors in the meteorology another note is that for fires in
[40:52] particular particular the model assumes that every fire observed persists and emits the same amount throughout the forecast period
[41:02] so this means that the model can't know if a fire is no longer emitting or if the intensity has changed
[41:09] both of these changes could result in potentially significant changes in the surface air quality last but not least we'll talk about the
[41:22] merit2 re-analysis talked a little bit about re-analysis earlier in this session we're going to review a little bit more
[41:33] here here reanalysis is a consistent reprocessing of earth system observations using a modern unchanging data simulation system
[41:44] the process relies on an underlying forecast model to combine disparate observations in a physically consistent manner manner this enables production of gridded data
[41:55] sets for a broad range of variables including ones that are sparsely or not directly observed by satellite
[42:03] reanalyses have become fundamental to research and education in the earth sciences because they attempt to take advantage of the best features of both
[42:12] models and observations to produce four-dimensional gridded output that optimally combines the continuity of a model with real-world observations
[42:22] that may be sparse or irregularly spaced both spatially and temporally reanalyses have many applications including their use as initial or
[42:32] boundary conditions for regional air quality forecasting or as a priori profile for satellite retrievals retrievals they're used in climate monitoring
[42:42] monitoring and for other applications such as with the energy and agricultural communities the modern era retrospective analysis
[42:56] will reach for research and applications version 2 or mara 2 re-analysis provides output from 1980 to the present
[43:05] day day merit2 is produced at a slightly coarser resolution than fp at about at a resolution of about 50 kilometers
[43:14] there are a wide variety of meteorological meteorological chemical and aerosol variables available from merit2 the maritu team is always asking for
[43:24] derived quantities that might be useful to applications communities for example the wind energy community once once found winds at 50 meters to be useful so
[43:34] now that is an output from merit2 you can find a link to input your feedback at the merit2 page
[43:41] linked here going back to our reference table i have added merit2 here on the right again merit2 outputs are available on
[43:54] hourly hourly daily and monthly scales but similar to gsfp and cf there are 72 levels in the vertical extending from
[44:03] near the surface to 0.1 hectopascals output is available back to 1980 and the latest output runs a few weeks behind
[44:14] real time the full and detailed description of all merit2 output can be found in the file specification document linked here at
[44:23] the bottom in the beginning of the mira 2 period there were many less observations than there are today
[44:34] the left hand side of this animation shows the observing system in 1980 which consisted of a few polar orbiting
[44:41] satellites wind estimates from geostationary satellites and global surface and upper air observations every six hours a median number of about
[44:52] 175 000 observations were assimilated the right hand side shows the observing system closer to today in 2018 in addition to expansion in number
[45:06] of sensors and what they observe over these past decades the quality of the observations has also advanced
[45:12] significantly significantly now now merit2 assimilates a median number of 5 million observations every 6 hours a unique feature of merit2 is the
[45:26] assimilation of aod the table shown here summarizes the aerosol optical depth observing system used in maritu it's important to remember that only
[45:39] aerosol optical depth is assimilated non-observed aerosol properties such as the vertical distribution or the aerosol composition composition are not fully constrained by the
[45:50] assimilation and will strongly resemble the model in most cases also also when there are no available observations
[45:59] such as during the night time or when retrieval when retrieval algorithms filter out data with less certainty like
[46:06] in the case of cloud cover or sun glint in these cases merit2 will draw towards the model
[46:19] this figure shows the number of aerosol observations in millions that are assimilated into maritu you can easily see that during this time
[46:28] period there are jumps in the number of observations observations so when using merit2 to perform long-term analyses
[46:37] you must take care to take this into account account since about 2000 or 2003 the observation system has been relatively stable
[46:51] similar to fp the aerosols in marito are simulated with a radiatively coupled version of go-kart one big difference between the go-kart
[47:02] version in fp and the go-kart version in mirror two is that there are no nitrate aerosols in merit2
[47:10] this becomes important in calculating pm 2.5 and again here is a reference slide showing the aerosol emissions used for
[47:23] merit2 merit2 collections are actually very similar to those by uh very similar to those of fp and are organized by frequency number of
[47:37] dimensions dimensions group description and the horizontal and vertical grid again the frequency indicates whether the output file shows instantaneous
[47:47] values at a given time interval or whether the output is a time average and what that time averaging interval is
[47:55] one difference is in the mirror two collections the averaging interval can also be indicated by a d or daily mean
[48:04] an m for a monthly mean or a u for a monthly diurnal mean the rest of the collection description
[48:13] is the same as fp the file specification document has a list of all of the different groups and
[48:19] their meanings merit2 file names start with mirror 2 and are followed by information about which production stream was used to
[48:31] produce that file these numbers are usually 100 200 300 or 400 400 and this is followed by the collection and then the timestamp
[48:45] another difference from fp in the case of mirror 2 if a collection has an instantaneous or time averaging frequency of less than
[48:53] one day then all of the time steps will be included in a single daily file and now we can interpret this merit2
[49:07] file name merit2400 tells us that this is a merit2 file from the fourth assimilation stream the t average m
[49:18] 2d aer nx tells us that this collection contains two-dimensional two-dimensional monthly time averaged aerosol species on the horizontal grid and
[49:32] 20 2106 indicates that this file contains monthly averages for june 2021. merit2 collections with air quality relevant output are also very similar to
[49:47] those of fp they're output at three hourly instantaneous or one hour time average intervals intervals these collections contain information
[49:58] about aerosol optical properties surface concentration concentration column quantities emissions removal and 3d mass mixing ratios of each aerosol
[50:07] species in each size bin again similar to fp unfortunately pm 2.5 is also not an output variable for
[50:17] merit2 so again i've included the recommendation recommendation the recommended equation to use to calculate it the variables needed are shown here
[50:28] and are included in the t average one 2d aer nx collection shown in the top row here
[50:42] when evaluating a re-analysis it's essential to compare against observations that haven't been assimilated to ensure an independent
[50:51] validation validation the bouchard at all 2017 paper linked here contains a detailed observation of maritu aerosols i'm going to highlight a
[51:01] few examples from that analysis these plots show comparisons between daytime profiles from the calliope lidar shown in red
[51:12] and mara 2 shown in black these profiles are averaged over dust transport regions from northern africa to the north atlantic biomass burning
[51:22] regions of southern africa and the amazon amazon and over the continental united states cyan colored line shows results from
[51:31] this from a similar model as was used to create maritu except without the aod assimilation assimilation so you can interpret the difference
[51:41] between the cyan and black lines as showing the impact of the aod assimilation assimilation generally merit2 well represents the
[51:51] calliope profiles over these important aerosol source regions although near the surface it's underestimated in northern and southern africa
[52:01] this underestimation is likely due to underestimated backscatter from sea salt aerosols over the ocean overall the aod assimilation improves
[52:13] the vertical distribution of aerosols with respect to these lidar observations merit2 includes assimilation of aog from various ground and satellite-based
[52:26] sensors however the assimilation does not directly constrain the absorbing aerosol optical depth or aaod we can therefore consider a comparison
[52:39] of these aerosol properties to observations as an independent validation point for merit2 this figure compares the monthly mean
[52:48] ome-a-a-o-d ome-a-a-o-d shown at the top to the mira-2 aaod shown on the bottom for july 2007 overall
[52:58] overall the aaod shows good agreement with omi particularly over regions of africa influenced by dust and smoke
[53:10] these plots show comparisons between monthly mean merit2 pm 2.5 shown as red and black solid lines to observations from the epa air quality
[53:22] service or aqs network and the improve network epa here is shown as gray dashed lines and improve
[53:31] are shown as dash redlines over the united states for the period 2003-2012 improved pm 2.5 are generally lower than
[53:42] the epa network due to their geographical location in mostly rural or remote areas overall overall there's better agreement between mara
[53:53] too and the observations over the rurally located improved stations and the largest negative model biases are found in the winter time compared to
[54:03] the epa station and it's worth restating again that it's difficult for a 50-kilometer model grid cell to represent the variability that
[54:14] might be found at a given monitoring station station particularly for urban areas that kind of explains why maritu agrees
[54:23] better with the more rurally background improved stations and here's a case study highlighting the use of mera2
[54:34] by our own dr pawan gupta they used maritu meteorological and aerosol output variables along with ground observations of pm 2.5 from 51
[54:47] stations to train a machine learning model to predict pm 2.5 over thailand the figure on the left shows hourly pm
[54:56] 2.5 concentrations from 2018. mara 2 is on the y-axis and observations are on the x-axis the figure on the right shows the same
[55:08] quantities except the y-axis is the machine learning predictive pm 2.5 and the machine learning predicted to pm
[55:16] 2.5 shows better correlation and reduced bias with respect to the observations observations machine learning under predicts high
[55:26] values of p of 2.5 likely because these high values made up less than about 2 percent of the training data set
[55:34] a potential application of this algorithm would be to use it to bias correct the entire entire merit2 time
[55:41] period creating a more accurate long-term data set to use to analyze spatiotemporal trends over this region here i've included a reference slide
[55:54] that contains a lot of the different references i've included throughout the entire presentation and links to all of
[56:01] these different references so now i want to move into a demonstration of the gmao website where we can view visualizations and find more
[56:14] information about the near real-time prediction systems and re-analysis that we've talked about today today so here is the gmao website and the different
[56:26] areas in which the geos model is used that i've talked about earlier we're going to focus now on the weather
[56:33] analysis and prediction section if you click on this you can see here is the latest information about gsfp
[56:42] and gscf clicking on the geos near real time data product information link this is where you can find the latest
[56:51] information about the latest updates that have gone on for fp scrolling down again this is the latest
[56:59] information the current version of fp has been active since february of 2021. here are links to the latest most
[57:06] current file specification documents i'm scrolling down and you can find the same information for grcf if we go back
[57:21] you can see here there are links to visualize fp and cf output output clicking on read more about gscf
[57:32] we can see here the email address with which you can email any questions or issues with gscf
[57:44] going back so if you click on either of these links you get redirected to the gmao fluid
[57:51] website this website shows you different visualizations for the the fp fp cf cf and merit2 output the different types of maps are listed
[58:05] here on the left and different ways you can access the data are listed here on the bottom left
[58:11] first we'll kind of just quickly click through some of the types of maps available and then we'll go more into data access
[58:21] so first first i'll click on atmospheric composition maps clicking on the chem maps link and it just takes a second brings up two
[58:32] dimensional maps of atmospheric composition and since this is fp it's primarily going to be aerosols and co
[58:40] co and even though surface pm 2.5 is not an fp output directly it's calculated here and you can visualize surface pm 2.5
[58:52] from fp for different regions the atlantic region is selected here different forecast initialization times and and the different forecast valid times the
[59:05] lead hour you can animate these and download the movie so you can see the types of variables
[59:14] that are available here are the surface maps of the speciated aerosols as well as the aerosol optical thickness of the
[59:22] individual components and the total aerosol optical depth going back clicking on 3d chem maps brings you to uh visualizing the same types of
[59:37] variables variables but at different levels of the atmosphere so here we see the different aerosol components in addition to pm 2.5
[59:49] at 850 hectopascals since this is at an individual pressure level you'll see the influence of topography topography on the map
[59:59] where the mountainous regions are masked out out so these are the different pressure levels available we can click even
[1:00:06] further towards the surface and even more of those regions are masked out again you can view different regions
[1:00:14] different different initialization times and forecast times before i move on to cf i did want to point out
[1:00:28] the datagrams so the datagrams are a way to view the forecast output in the vertical for individual point locations
[1:00:39] so in this case here are the available variables to observe let's look at total aerosols and and what this tells us is at washington dc
[1:00:55] this is the vertical profile of total aerosol aerosol right now the extinction tab is selected that's an optical
[1:01:04] property we want to click on concentration concentration so here is the total particulate matter concentration throughout the forecast in
[1:01:13] the vertical there's also information about the speciation speciation at the surface um um we see each of the species represented
[1:01:25] by different colors we also have some meteorological information for this point percent cloud cover as well as information on precipitation
[1:01:38] you can change the city here here using these drop down menus for select cities in the united states
[1:01:45] across the world arrow net locations and mega cities and for active field campaigns so now going back
[1:02:03] now we can click on cf cf and see a similar set of options for map or visualizations
[1:02:16] we click on the datagrams we see again a similar similar features as for visualizing fp except for here we have co no2 ozone pm
[1:02:29] 2.5 and so2 clicking on pm 2.5 and again this is the vertical profile pm 2.5 throughout the forecast
[1:02:41] and i should note that since this is pm 2.5 from cf it is p of 2.5 from gscam and so you see
[1:02:48] the addition of the secondary secondary organic aerosols aerosols component of the total pm 2.5 again there's information about cloud
[1:02:59] cover cover and total precipitation and they have a similar feature where you can select different stations and going back to
[1:03:15] surface concentrations again very similar you can view surface maps of no2 ozone co so2 or pm 2.5
[1:03:28] and change the different visualization region and time and forecast hour cf also has a beta site that is being tested
[1:03:42] so i'm going to manually type in underscore map after cf and this brings us to a site that is
[1:03:58] under development but but um any if you decide to explore this site and come across any bugs or
[1:04:07] um suggestions um feel free to email the gscf email that i showed earlier this site is continuously you're looking for updates
[1:04:16] for optimization and bug repair so gladly accept any feedback here you're looking at surface no2 ozone and pm 2.5
[1:04:29] here are the options for forecast date time time you can change the color map and and again you can select any
[1:04:38] station available from these drop down menus but what's really unique about this particular site is it allows you to
[1:04:46] interact with the map so i can hover over and scroll zoom in and pan and say i would like to know the
[1:04:58] forecast over say san francisco i click and you have the options of getting the forecast data or the
[1:05:08] historical data so again network abilities of this site um but this is a really cool advancement being able to interact with the maps in
[1:05:19] this way so going back the last thing i want to show here as far as visualizations is clicking on the re-analysis tab
[1:05:35] there are maps available to visualize mirror 2 output again clicking on the chem maps we see we have very similar fields
[1:05:49] available available um for mera2 as fp so the surface mass of different components the column mass as well as
[1:05:58] the aerosol optical thickness and totals click on surface pm 2.5 as an example so here you're seeing surface pm 2.5 and what i
[1:06:12] can do is i can click and and just change the date to as far back as 1980 here i'll just
[1:06:21] pick 1981 hit enter and it just takes a minute for the system to work oh i had to click away from it
[1:06:39] and here now i am looking at surface pm 2.5 2.5 from august 31st 1981. so here is a way a nice quick way to
[1:06:51] visualize um fields of interest for merit2 merit2 going back here by clicking this link you get to the mirror 2.5 sorry merit2
[1:07:07] you get to the merit2 reanalysis page on the gmao website here you there is also a link to
[1:07:16] the nasa goddard earth sciences data and information services center or jazz disc with which you can download all
[1:07:24] or subset the mira 2 data so clicking on that link will bring you here directly to where you can download mira
[1:07:33] 2 data in order to interact with this site at all you need an earth data login which you can just click this so you can
[1:07:42] just register here it's very quick and free and then you'll have access to all of the jazz disk
[1:07:52] options um um i also recommend if you scroll down here jazz disc if you click here under
[1:08:05] resources under how to the just disc has a really amazing list of resources here for interacting with its data in general
[1:08:17] like here just even at the top how to access mira 2 using opendap um so i definitely recommend exploring
[1:08:24] and taking advantage of these really valuable resources that the justice has put together okay closing that so now i'll navigate quickly back to
[1:08:37] the fluid website so here now i want to emphasize the data access portion so first see see first i'm going to examine the forecast
[1:09:01] output well backup backup so so the https and opendap are sort of direct ways to access the forecast and assimilation
[1:09:13] output output using the data download tool allows you to subset and download individual variables or spatial domains from the
[1:09:21] output so i'm going to click on forecast here here and here are instantaneous and time averaged collections from fp
[1:09:32] so scrolling down to some time average collections here are gsfp 2d time average primaries aerosol diagnostics diagnostics so using say pm 2.5 as an example which
[1:09:45] we've kind of tried to do throughout this this session session clicking on this brings up this site and you can see all
[1:09:57] of the different variables available in this collection so even though pm 2.5 is not a diagnostic if we wanted to just pull
[1:10:06] the variables needed to calculate pm 2.5 we can do it using a method like this so for example scrolling down
[1:10:16] we see black carbon surface mass concentration concentration so we click that here's organic carbon surface mass concentration
[1:10:42] here is dust surface mass concentration for pm for 2.5 here's nitrate surface mass concentration sea salt surface mass concentration pm
[1:11:05] 2.5 size bin sulfate surface mass concentration okay okay so clicking on the relevant variables can scroll up
[1:11:18] if this was a three-dimensional variable we would select the vertical levels we can click a subdomain say for example the eastern
[1:11:30] u.s you can also choose to have the output regretted regretted to different grids choose your method of interpolation
[1:11:44] and also change the output format i'm going to choose netcdf4 and and download so now i'm just going to save this file
[1:12:10] and open this and it's in my downloads folder so we'll open that in the next part so going back
[1:12:25] to the fluid website i now want to navigate through well first thing the cf also has the data download to tool
[1:12:40] available so clicking on forecast and this site is just structured a little bit differently so if we want to
[1:12:51] examine those air quality concentration fields fields click download and we see the available variables within this file so here we
[1:13:03] want to click pm 2.5 here we're just downloading it for september 21st and and oh i should mention um when looking at
[1:13:19] vertical levels within geos the surface or the near surface level is actually a level 72 out of 72 levels
[1:13:30] um um so here we want to download the data for the same around the same bounding box
[1:13:41] again you can regrid and we're going to choose netcdf4 and we can download the output and again that is just in our
[1:13:57] downloads folder so now i want to move on to demonstrating the panoply software so this is freely available software
[1:14:19] that is really powerful and allows you to visualize and custom build custom visualizations for netcdf hdf grid and other types of formats it
[1:14:29] can be downloaded from the site seen here you can just google panoply nasa gis and so i'm going to show you how you can
[1:14:40] access how you can build your own visualization of fp or cf output using panoply after you've downloaded a subset
[1:14:53] or or accessing it remotely so you don't have to download a potentially large data file so here is the blank panoply interface
[1:15:07] in order to open one of our files open and and we have here our cf and fp subsetted
[1:15:17] output output clicking on the fp we can see we have each of the variables that we selected here
[1:15:25] we also have information about latitude and longitude and time over here the g02d indicates that your these are geo-referenced variables so we
[1:15:34] can create latitude longitude maps so starting with something say like organic carbon surface mass we click our variable
[1:15:46] and we can create a plot by clicking this here here there are a lot of different kinds
[1:15:53] of plots available um line plots geo-reference line plots of zonal averages averages we're going to stick to
[1:16:02] the geo-reference longitude latitude color contour plot but i definitely recommend exploring and playing around with different aspects of these features
[1:16:13] click create and here is the subset that we have requested so there are different um these different tabs on the bottom
[1:16:27] allow us to different to play with different aspects of our visualization here and see that it's zoomed out a
[1:16:32] little bit so so i am going to go to plot and change our plot size to make it so that we can see
[1:16:45] this this little extra part of the map that shows up when you make it smaller that doesn't
[1:16:50] appear if you save the file like if you save this image i'm not sure why the software does that
[1:16:58] so the array tab gives you information about the variable you're displaying so in other words here's plot
[1:17:06] right now we only have one array if we loaded another variable we could add those arrays take the
[1:17:15] average average say array 1 minus 32 array 1 times array 2 so there are different options for that
[1:17:23] if there were different time steps you would access them through these controls here if we click scale
[1:17:33] we can play with the units here we can see these very small values tell us that these is in kilograms per meter
[1:17:46] cubed cubed if we want to convert this to something more intuitive like micrograms per meter cubed we can use that using the scaling
[1:17:54] factor here so we scale it 10 to the negative 9. enter enter and then we now fit to that scale data
[1:18:08] and let's see we can by hitting control and clicking we can zoom in on our region and we can also kind of refine this
[1:18:26] color scale if we want say zero to to say 35 which is the 24 hour oops and that didn't change it very much we
[1:18:49] can reduce it to 10 so it maybe shows up a little bit better you can change the tick marks
[1:18:59] right here the scale caption says organic carbon surface mass concentration concentration you can customize that to say whatever
[1:19:08] you would like you can change the location of the caption below the color bar you can change
[1:19:18] the color scale itself with the option to reverse the colors and you can change we know that we don't have any outliers
[1:19:28] below so say we can say we only want to visualize the right end since we know it gets higher than 10
[1:19:36] you can change this shape of the triangle triangle and the width of this gap here here are options for projection
[1:19:48] grid spacing if we wanted to take off the grid or change the grid to different spacings there are different overlays
[1:20:03] for coasts we chose this one we can see the different states provinces within each country in this you can view the day 9
[1:20:19] terminator terminator you can overlay contours vector doesn't really apply here but oh and here is customization of a title subtitle
[1:20:33] um um you can opt to not view this data min and max just unclicking that so in this way you can quickly download
[1:20:46] subsets of individual variables for further analysis if we wanted unfortunately panoply only allows the loading of two arrays
[1:20:57] in the plotting window here otherwise we might be able to calculate pm 2.5 concentration from fp just using panoply but unfortunately we
[1:21:07] can only um visualize two arrays at a time so but say we wanted to look at both black carbon and organic
[1:21:15] carbon added together we can click on black carbon surface mass concentration and now we click combine plot
[1:21:25] and we can add it to our existing plot going back to arrays we can see that it's
[1:21:34] it's doing array one the organic carbon minus array two the black carbon but but we want them to be added together
[1:21:42] you can see the different options here the different operations we want array 1 plus array 2 to see the
[1:21:50] combined impact and so now we have both added together in one plot and again you can change the time steps
[1:22:00] here here and if we wanted to we could contour these instead of the filled colored contours so now i want to show
[1:22:18] how if we didn't download and we just wanted to access straight from from sorry sorry we just wanted to access street
[1:22:33] from the data server itself we can go to say the data access here and we can go directly to the link
[1:22:46] for each forecast output so here we navigate to the year and the month and we can just pick 20th
[1:22:59] at at zero z say for initialization time you can see the four different initialization times here and when you click on this it does take
[1:23:08] a minute to load because it's actually loading loading all of the forecast output so here we see all of the collections
[1:23:19] for the forecast along each forecast hour so so we know that our aerosol relevant variables variables right now it's we're scrolling through
[1:23:33] the instantaneous one-hour average files we scroll even further down these are instantaneous three-hour and here's the one hour average
[1:23:55] and here are three hour average so so we want the three hour average 2d aerosol collection so we would like this collection right
[1:24:06] here so i can click any that's not what i wanted to do right click on here and we copy this link
[1:24:24] and then we can go back to panoply and go to file and we can open a remote
[1:24:31] data set copy our link right here and load and it'll just take a minute and here we can see the full suite of
[1:24:46] variables available for this valid forecast time and all of the previous examples i gave still apply to
[1:24:56] all of these so here we have going back down see our organic carbon that's column mass here's organic carbon
[1:25:05] surface mass you can create a plot and again this is the entire domain so it just takes
[1:25:12] another second and you might see something like this and this is again because the model output is in kilograms per
[1:25:24] meter cubed so if we perform the same procedure procedure we scale it to be micrograms per meter cubed
[1:25:36] and then we fit to that data we refine our color scale let's say again we'll use say 35 for the epa
[1:25:49] 24-hour standard and we get a nice global visualization of of the fp forecast and again all of the other different
[1:26:01] options apply so using both the remote access option or the data download subset option you can create
[1:26:10] your own visualizations of fp output so that concludes the demo portion of the webinar and now we
[1:26:23] will open it up for questions so i will put it back here thank you so now hopefully you've been entering
[1:26:42] your questions in the q a portion portion and we'll start taking those questions one by one okay
[1:26:54] okay so starting with question one how does go-kart deal with secondary organic aerosols so in the version of go-kart running
[1:27:03] currently in gsfp secondary organic aerosols are actually not included a future update of gsfp will include the
[1:27:12] most recent version of go-kart this version includes both the new brown carbon tracer as well as secondary organic aerosols and in that
[1:27:24] scheme scheme um anthropogenic soa comes from oxidation of the coming from oxidation of vocs these are estimated by
[1:27:33] scaling both the biomass burning and anthropogenic co emissions um and the biogenic soa come from the megan model the megan model provides the
[1:27:44] biogenic emissions to fp question two the models have defined vertical levels for example pressure levels however the satellite
[1:28:00] aod gives us the total column value what is the range of the column and hectopascal so so
[1:28:07] any column quantity measured by satellite aod or something like total column ozone or total column no2 um this will reflect the total amount
[1:28:18] from the surface uh to the top of the atmosphere so the full range um i hope that answers that question
[1:28:31] but the the geos model if the 72 vertical levels are from the near surface to 0.1 hectopascals in case that was the
[1:28:40] question question um um question three can you please mention the approximate time to release the brown carbon scheme
[1:28:48] in go-kart or mirror ii so the brown carbon tracer will be in the next update to fp and this will
[1:28:55] probably occur in the next six months to one year merit2 because it remains consistent throughout its entire production
[1:29:05] will never contain brown carbon but future long-term re-analyses from gmao very likely will so this is more a question of
[1:29:20] interpolation data fusion and machine learning but do you know any simple models that have satellite and in-situ
[1:29:28] sensor data as input that can be applied in a small area and if the same model can be applied later in other areas
[1:29:34] that you not have in c2 sensors so so yes i think actually i think uh uh pawan's
[1:29:45] pawan's uh example that uh i highlighted in the merit2 case studies is kind of a good example of this
[1:29:52] um so you can use merit2 output and station data to come up with a simple model or a
[1:30:01] machine learning model and apply that model model to different areas of that same region that potentially don't have
[1:30:12] sensors sensors i would caution that you should probably restrict the geographic area and time over which you apply that but but
[1:30:24] absolutely absolutely and i think pawan study is a good example example of how you could go about doing that
[1:30:34] okay can you please give your remark on a possible way to validate local and regional level aerosol mass
[1:30:40] simulated by reanalysis data um re reanalysis output of aerosol mass can be validated using any available ground observations but
[1:30:52] beyond aerosol mass more generally reanalysis output can be validated using any observations that were not included in the assimilation
[1:31:08] okay question six what are the model inputs inputs for anthropogenic so2 and so4 emissions and notice that monthly emissions data
[1:31:17] didn't change in recent years when comparing data through panoply so currently both fp and cf use so2
[1:31:23] emissions from the htap emissions inventory this inventory is valid for the year 2010 and therefore doesn't reflect recent
[1:31:33] reductions and so2 emissions that have occurred over the last decade um um these emissions are also supplemented by
[1:31:41] um um oh me estimated so2 emissions um the ozone monitoring instrument um um future updates to fp and cf will include
[1:31:52] a switch to a different emissions inventory called the community emissions data system inventory or seds this will
[1:31:59] include more recent reductions in so2 emissions so that that should help with that that's kind of a known issue that
[1:32:04] was highlighted in the cf validation study is it possible to measure co2 with remote sensing yes absolutely
[1:32:17] there are several sensors uh currently in orbit that measures co2 the ozone of the uh oh gosh i can't remember what oco2
[1:32:25] stands for right now um um something carbon observatory to um measures co2 amongst uh among other carbon species i'm not an expert in that
[1:32:35] area of remote sensing but absolutely are the historical and forecasted data available in excel format so i don't think you can download the
[1:32:48] gridded model output in csv or excel but the cf underscore map site um will allow you to download those time
[1:32:59] series so if you interact with a map and click on a location or you choose a location from one of those drop down
[1:33:05] menus you should be able to download either the replay time period or the forecast in ascii json or excel format
[1:33:17] the map site is down yeah unfortunately there is an issue today with the latest run of gscf so i'm so sorry um this is
[1:33:27] causing issues right now but hopefully this will be fixed by later today if you want to try back another time and
[1:33:34] um um today's presentation will be available in recording form so if you want to go back and watch
[1:33:41] um hopefully it'll it'll be working at a future time which gmao product do you recommend to study aerosols past data over south asia
[1:33:58] so i think this will very likely depend on on the the sort of the how far back in time you
[1:34:04] want to go um and what exactly you would like to use it for so if you're looking for a
[1:34:10] relatively consistent time series over a longer period of time and you're looking at something like you know pm 2.5 then merit2 will be the
[1:34:19] best bet but if you are focused on specifically on you know the changing aerosol species um and you want to look on shorter time
[1:34:29] scales for example since 2018 then the gscf replay could also be a good resource because um just a reminder merit2 does not
[1:34:38] include nitrates and um the gschem chemical mechanism that's used used in glcf includes secondary organic aerosols so are there some collections or data
[1:34:56] sets with pollen information yes but i don't know of any geos currently doesn't really represent uh pollen within its modeling system
[1:35:09] so i'm sorry i don't have any information about a a particular data sets and there are there are no collections
[1:35:18] um um in geos in in like the collections that i've described today that would uh have information
[1:35:25] about pollen which type of data is more accurate analysis or re-analysis so so a re-analysis represents represents analysis
[1:35:43] analysis over a long period of time using a consistent consistent data simulation method and model system so
[1:35:52] so one isn't really more accurate than the other one reanalysis happens over much longer time scales or over longer time scales
[1:36:02] than analysis and the reanalysis really represents that consistent system both data assimilation and model forecast over the
[1:36:12] entire period that's what sort of makes it stand out i guess whereas an analysis you know in
[1:36:23] something like fp um that's able to capitalize on advancements in both data uh assimilation assimilation um improvements to the observing system
[1:36:32] and improves improvements to the underlying forecast model sort of in real time okay any comments on covid19 and gs
[1:36:44] model forecasts um so if well we know that there were definite changes in emissions as a result of
[1:36:56] lockdown measures associated with the covid19 pandemic and emissions inventories are created on much longer time scales then those events happened so the
[1:37:09] emissions inventories that are used in the modeling systems you know especially the forecast models they don't capture
[1:37:17] those those quick changes and emissions there are current research activities underway to improve our emissions inventories so
[1:37:28] that our 2020 simulations more accurately accurately represent the changes in emissions that we saw as a result of
[1:37:37] those lockdown measures is it possible to make a downscaling with warf chem using gscf as initial conditions
[1:37:55] yes i don't see why not um i am not an i am not an expert in down scaling techniques but
[1:38:05] um um if you're using um that that you know 2018 um um to present replay period that represents kind of a consistent
[1:38:19] data set that definitely could be used as either boundary conditions or or for down scaling using something like warfam
[1:38:34] what are the major differences between chios and merit2 in the context of an aerosol module okay if the question there is gsfp so
[1:38:46] the gsfp being the near real time forecast merit2 being the long-term reanalysis the way they differ currently
[1:38:57] is the version of go-kart um that is in gsfp gsfp includes nitrates and the version of go-kart that was used
[1:39:09] to to create merit2 does not have nitrates another difference between the current version of geosfp and meri2 is the type of assimilation
[1:39:24] used so beara2 beara2 uses a 3d nvar data simulation technique to do its data assimilation throughout the entire time period
[1:39:39] gsfp gsfp uses a hybrid 4d and var data simulation technique technique to assimilate aod so those are the two major differences
[1:39:51] between both the go-kart aerosol module and the aog data simulation between gsfp and merit2 we'll pause to see if there are
[1:40:12] any more questions these are great questions thank you so restful api to access that data to get it per each
[1:40:35] without using the web page without downloading it i do not know the answer to this um um this is lit this is hitting the limits
[1:40:44] of my computing expertise um um if you email one of the websites websites that i've listed here
[1:40:56] or go to the gmail website you can find out more information about this this um i i believe there is
[1:41:07] but uh to get um more specific information about it i would go to the gm gmao website
[1:41:31] so winner brock do we have to do we have any more questions nope it looks like that might be it
[1:41:41] thank you so much everybody for attending today's session our next session will be in two days on thursday same time and we will cover
[1:41:52] uh similar uh informations today except for the ecmwf ecmwf cams modeling system thanks everyone and have a great rest of your day
