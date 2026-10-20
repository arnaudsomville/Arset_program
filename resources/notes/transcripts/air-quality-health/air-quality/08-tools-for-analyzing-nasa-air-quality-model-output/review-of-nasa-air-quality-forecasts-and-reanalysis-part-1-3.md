# Review of NASA Air Quality Forecasts and Reanalysis, Part 1/3

`https://www.youtube.com/watch?v=U9w9vZbdrNM` · id 338 · 2:01:42 · module 29 — Tools for Analyzing NASA Air Quality Model Output

[00:03] hi everyone and welcome to our webinar series tools for analyzing nasa air quality model output this is session one review of nasa air
[00:13] quality forecasts and re-analysis my name is melanie filet cook and i'm a research scientist at nasa goddard space flight center which is
[00:23] outside of washington dc before we get started i want to go over some details about our webinar
[00:36] this series will consist of three sessions sessions each 90 minutes followed by a question and answer period each session will be
[00:45] recorded and available on our training web page shown here this is an advanced training so even though we're going to review some of the
[00:54] most important points we strongly recommend that you view our previous webinar introduction and access to global air quality forecasting data and
[01:03] tools which has more details and background background in order to follow along with the demos we're going to show today
[01:11] and throughout the webinar series make sure that you've signed up for a free nasa earth data account and linked jazz disc
[01:20] to your account you can find step-by-step instructions on how to do that at the link shown here
[01:28] we'll use google colab and jupiter notebooks today and through the webinar series series information on where to find those
[01:36] notebooks can be found on our training page so try to copy the notebooks into your google drive and download the
[01:44] collab app if you have not already here's an outline of our webinar series agenda today we'll review the different
[01:56] nasa forecasts and re-analysis products relevant for air quality and demonstrate jazz disk tools for visualization and analysis of merit2 re-analysis products
[02:08] in sessions two and three we'll use jupyter notebooks to interpret model output for air quality assessment and here are some of the faces behind
[02:20] our training that's me on the top left and you'll be hearing from my colleagues dr paul gupta and dr sarah strode in
[02:29] sessions two and three and we're very pleased to welcome our colleague dr xiaofa pam from jezdisk who
[02:37] will present in the second half of today's training so now we'll begin session one review of nasa air quality forecasts and
[02:49] reanalysis the learning objectives for this session are to review and identify the different air quality relevant model outputs
[02:59] available from the goddard earth observing system or geos earth system model model understand the difference between analysis
[03:10] analysis reanalysis and forecasts identify which maritude data are frequently used in air quality studies studies locate and access maritu air quality
[03:21] data and additional resources available from the jestix jazz disc website subset download and analyze the merit2 air quality data using the web tool and
[03:33] python api developed by the just disk the goddard earth observing system or geos earth system model is a global
[03:44] model that is designed to function seamlessly across many different scales and applications today we'll talk about geos real-time
[03:54] atmospheric analyses and forecasting and long-term atmospheric re-analysis the geos is also used to produce seasonal forecasts as well as study
[04:05] climate variability and change on decadal scales geos can also be run at very high resolutions to examine the impact of new
[04:14] satellite observations using observing system simulation experiments or offies geos is developed and maintained by the nasa global modeling and assimilation
[04:25] office or gmao this session will focus on geos near real-time weather and chemical forecasts and re-analysis products
[04:37] the gis forward processing or fp analysis and forecast the geos composition forecast or gocf and the modern era retrospective
[04:49] analysis for research and applications version two or merit2 re-analysis so first i want to review these terms
[05:00] forecast analysis reanalysis and data assimilation and how they relate to one another data assimilation is the process of
[05:11] assimilating or incorporating observations into a model state to produce the best current estimate of the atmosphere land or ocean
[05:22] this is good because when forecasting future conditions you want to start with the best estimate of current conditions
[05:29] so if we have our model state and our observations through the assimilation of those observations we produce an analysis
[05:38] an analysis is that updated model state and it's a blend of the model and observations now our updated model state we trust
[05:50] about about represents our best estimate of current conditions conditions we can now issue a forecast where starting from our best estimate a
[06:01] simulation is run forward in time to predict a future state in the gs forecast system data simulation techniques the underlying
[06:11] forecast model itself and the observation observation are evolving and constantly improving a re-analysis uses data assimilation to
[06:23] blend a forecast model simulation of the past past with past satellite observations using a consistent data simulation
[06:31] technique and a single model version to produce a long-term data set that can be used for longer term analyses
[06:44] before we start to review the gi systems i just wanted to say a few words about some strengths and weaknesses of air
[06:50] quality modeling and when i say air quality modeling here i'm talking about three-dimensional atmospheric models air quality forecasts can be used to
[07:01] alert the public and provide them with advanced notice of the potential for poor air quality air quality models can also be used to
[07:10] test the effectiveness of different emission reduction strategies and they can provide us information about regions or pollutants that do not
[07:19] have observations this is particularly useful in more rural areas that might not have ground station observations and it's also critical to study chemical
[07:29] processes that help us better understand pollution episodes but but there are also weaknesses associated with using air quality models
[07:39] models in general are only as good as what you put into them emissions in particular are very
[07:46] important to accurately simulating air quality these can include anthropogenic emissions from sources like transportation or power plants
[07:54] it can include emissions from fires and other natural emission sources like dust or emissions from vegetation and soils
[08:04] another thing to keep in mind when using air quality model output is the size of a model grid cell
[08:10] the size of the grid cells in gsfp and gscf are about 25 kilometers by 25 kilometers kilometers which is high resolution for a global
[08:19] model model but but this is still large when comparing against ground observations that come from from individual point locations
[08:29] so that 25 kilometer by 25 kilometer value might not truly represent a ground measurement especially in urban areas
[08:37] where concentrations can change on very small spatial scales and what the model outputs say concentration of surface pm 2.5
[08:49] that's a mass per unit volume and it's based on size assumptions within the model and the emissions
[08:55] whereas whereas measurements actual observations of pm 2.5 measure particles with an aerodynamic diameter of 2.5 micrometers or less
[09:06] the overall take-home message here is that air quality models are extremely useful tools but but understanding their limitations will
[09:15] help you better utilize model output for your application we'll start with our review of geosystems with gsfp
[09:29] gsfp offers twice daily publicly available forecasts of weather aerosols and carbon monoxide gsfp is a dynamic state of the science
[09:41] system so it is updated every 6 to 12 months months so users who would like to use sp
[09:48] forecast or analysis field to drive other models or for other applications we urge you to make sure your simulation
[09:56] period does not span one of these updates because this can introduce inconsistencies between the analysis fields the gmao near real time product
[10:06] web page which i've linked to here has details and dates for the latest model updates the aerosols in gsfp are simulated with
[10:17] a radiatively coupled version of the goddard chemistry aerosol radiation and transport model or go-kart go-kart is a bulk aerosol scheme that
[10:28] simulates dust sea salt black and organic carbon sulfate and nitrate a future version of go-kart will also
[10:36] include a brown carbon species the animation on the right shows gfp go-kart aerosols for december 2019 in this animation each type of aerosol
[10:46] is assigned a different color as shown in the legend below fp forecasts are issued twice a day
[10:57] a 10-day forecast at zero z and a five-day forecast at 12z the forecast model and data assimilation
[11:05] are run at about 12 kilometers spatial resolution but the output is saved at that 25 kilometer resolution i talked about earlier
[11:15] two-dimensional output products are available for every hour and three-dimensional products are available every three hours there are 72 levels in the vertical
[11:23] extending from near the surface to 0.1 hectopascal hectopascal the analysis fields from fp are available back to 2014
[11:33] but again updates to fp will introduce inconsistencies throughout that time so if you're using these fields be sure to
[11:41] see if an update has occurred during your period of interest the forecast fields are available for about three weeks
[11:50] a full and detailed description of all fp output can be found within the most current current file specification document which i've
[11:58] linked to on the bottom here in the future you can check to see if there's a more recent document at the
[12:04] link on the bottom of the slide fp output is organized into what are called collections collection names contain information
[12:19] about the frequency of output the number of dimensions the type of variable and what kind of grid the
[12:27] output is on for a detailed explanation of collection and fp file names see the most current file specification document or
[12:39] you can review session two of our previous webinar series that i linked to in the beginning of the presentation
[12:45] there are a lot more details there here i'm highlighting some collections with air quality relevant output aerosol collections contain information
[12:56] about aerosol optical properties surface concentrations column density emissions removal and 3d mass mixing ratios of each aerosol species
[13:07] they are available at three hourly instantaneous or time averaged intervals pm 2.5 is unfortunately not currently available as an output variable
[13:20] but it can be calculated using the equation shown here and using the variables in the t average 3 2d aer nx
[13:28] collection collection one more note is that nitrate aerosols were added to the fp system in about january of 2017. so
[13:39] if you're using the analysis fields before that time you should use the equation i'll show later that is used
[13:46] for merit2 which also does not have nitrate aerosols next we'll talk about gs composition forecasts or grcf
[14:01] the gscf forecast system issues daily forecasts of global three-dimensional distributions of trace gases and aerosols aerosols gfcf uses gs meteorology along with the
[14:13] gf-chem chemical mechanism which consists of over 250 chemical species and over 725 chemical reactions movie on the right is just a small
[14:25] snapshot of a longer movie from the nasa science visualization studio that shows many more species gfcf is not just gsfp with more species
[14:40] there are some important differences between the two forecast systems for example there is no data assimilation of
[14:48] observations in the gfcf system instead the gi cf forecast begins with a simulation of the previous day
[14:58] this simulation uses what's called a replay technique to constrain the model meteorology meteorology the replay technique is similar to the
[15:08] data simulation i described earlier except that instead of observations being used to update the model state and another analysis field is used
[15:19] the analysis fields are actually from a separate near real-time system called gsfpit gsfpit or gsfp for instrument teams
[15:31] fpit is a frozen version of gsfp that is very similar to the version that was used to create the merit2 reanalysis
[15:40] because fpit is a consistent unchanging model version that is not updated the replay fields from grcf can be used
[15:50] as a continuous atmospheric composition archive in the grcf system there are two scheme two aerosol schemes that are run
[16:01] simultaneously simultaneously the first is go kart which i described earlier and is radiatively coupled to the atmosphere
[16:09] gschem also includes its own aerosol module which is a bulk aerosol scheme similar to gocart gscam also contains the same aerosol
[16:20] dust sea salt carbonaceous aerosols sulfate and nitrate but also includes secondary secondary organic aerosols for more details about the differences
[16:32] between gocard and gf chem you can visit the geoschem website linked here and for full details of gscf you can see
[16:40] the keller at all paper that i've linked to here here i've added gfcf to our reference table five-day cf forecasts are issued
[16:52] once a day at 12z the replay and forecast are run at about 25 kilometer spatial resolution most cf outputs are available for every
[17:03] hour and there's a special collection of surface outputs that are available in 15 minute increments similar to fp there are 72 levels in the
[17:13] vertical extending from near the surface to 0.1 hectopascal the replay fields are available back to 2018 and as i said earlier since the
[17:24] same model version and replay technique have remained consistent over that time this can be considered as a continuous
[17:31] atmospheric composition archive forecasts of the air quality relevant surface concentrations collection are available back through 2019 and the full forecast output is
[17:44] available for about two weeks the file specification document linked here here contains a detailed description of all
[17:53] cf output again visit the link at the bottom to make sure there isn't a more recent document
[18:03] cf output is also organized into collections but has different naming conventions than fp see the file specification document
[18:11] linked here or session 2 of our earlier webinar for more details here i've again highlighted particular collections relevant for air quality
[18:21] the high frequency collection shown here in the top row at htf contains instantaneous surface chemistry and meteorology output every 15 minutes
[18:31] the air quality concentrations or aqc collection contains one hour time averaged surface concentrations of co no2 ozone
[18:43] and pm 2.5 from geoschem and so2 other species contain surface values of many more species column quantities
[18:53] emissions and removals and 3d distributions of several species on pressure levels values of pm 2.5 are available from both
[19:04] gocart and gs chem the go-kart pm 2.5 values are only available in the high frequency collection collection there are also instantaneous and one
[19:14] hour time average collections containing meteorol meteorology variables next we'll talk about the mira 2 reanalysis in contrast to gsfp and cf which are
[19:34] forecast systems merit2 is a re-analysis a reanalysis is a consistent reprocessing of earth system observations using a modern unchanging
[19:46] data simulation system to produce a reanalysis a forecast model is combined with observations in a physically consistent manner
[19:55] three analyses have become fundamental to research and education in earth science science they take advantage of the best features
[20:02] of both models and observations and produce four-dimensional gridded output that optimally combines the continuity of a model
[20:12] with real-world observations that might be sparse and or irregularly spaced both spatially and temporally the modern era retrospective analysis
[20:27] for research and applications version 2 or merit2 reanalysis provides output from 1980 to the present at about 50
[20:35] kilometer spatial resolution slightly lower resolution than fp or cf merit2 output contains a wide variety of meteorological chemical and aerosol
[20:45] variables variables the aerosols in merit2 are simulated using the go-kart aerosol scheme except as i said earlier there are no nitrate
[20:54] aerosols in merit2 here i've now added mara to our table for quick comparison of the three systems
[21:04] systems mira 2 outputs are available on hourly daily and monthly scales similar to gsm at gsf pncf there are 72
[21:13] levels in the vertical extending from near the surface to 0.1 hectopascals hectopascals output is available back to 1980 and the
[21:22] latest output runs a few weeks behind real time the full and detailed description of all marit2 output can be found in the file
[21:31] specification document linked here a unique feature of merit2 is the assimilation of aod this figure shows the number of aerosol
[21:42] observations in millions that are assimilated into merit2 you can easily see that during this time period there are clear jumps in the
[21:51] number of observations this means that when using maratu to perform long-term analyses you should always take care to take this
[22:00] into account since about 2000 or 2003 the observing system has been relatively stable it's also important to remember that
[22:10] only aerosol optical depth is assimilated assimilated to review aerosol optical depth is a unitless quantity representing the
[22:19] optical thickness of aerosol in the entire atmosphere column so aerosol properties that are not directly observed such as the vertical distribution
[22:31] or the composition of aerosols are not constrained by the assimilation and will therefore strongly resemble the model in most cases
[22:41] other times when there are no available observations such as during the night time or when retrieval algorithms filter
[22:48] out data with less certainty like in the case of cloud cover or sun glint mirror 2 will draw towards the model
[22:59] mirror 2 collections are very similar to those of fp most air quality relevant collections are output at 3 hourly instantaneous or
[23:07] one hour time average intervals these collections contain information about aerosol optical properties surface concentrations column density emissions
[23:17] removal and 3d mass mixing ratios of each aerosol species in each size bin pm 2.5 is also not an output variable
[23:27] for merit2 so again i've included the recommended equation to use to calculate it the variables needed are shown here and
[23:36] are in the t average one 2d aer nx collection shown here gsfp and cf output can be viewed and
[23:49] downloaded using the gmao fluid site our previous webinar included a demonstration of the fluid site and the
[23:57] available visualization and download tool tool merit2 output is available from the jezdisk website and the second part of
[24:05] today's session will include information and a demonstration of available jazz disk tools and now i'm happy to introduce my
[24:15] colleague dr pan who will present the second part of today's session thank you melanie hi everybody i'm
[24:27] hua peng a scientist from justice at nasa goddard space flight center in maryland welcome you participate this nasa rsat
[24:37] training series imminent to learn 2 for analysing nasa air quality model output you are in part one which is review of
[24:48] nasa air quality forecast and re-analysis re-analysis melanie just reviewed and compared the nasa air quality forecast such as jiu's fp and use cp
[25:01] with a mirror to unreal analysis next i will introduce justice 2 for visualize and analysis of marital data
[25:12] specifically specifically i would like to acknowledge my colleagues su hong binita jennifer all of them from justice for
[25:23] preparing this training material along with me our learning objective in this part are to first identify which marital data are
[25:37] frequently used in the eq studies and then i will show you how to locate and access merit to eq data and
[25:46] additional resources available from the justice website last i will show you how to subset download and analyze
[25:56] marital eq data use of web-based 2 and the python api developed by the just disk three demos will be followed in the end
[26:08] of course the ultimate objective this training is to facilitate your study and accelerate your science discovery that's indeed exciting
[26:19] now let's back up and start exploration together first allow me to give you some brief introduction associated with merit2 data
[26:32] as you may already know that merit2 is generated by nasa gmao global modeling and assimilation office but archived and the curates at nasa
[26:45] jazz disc where i work just this phone name is guarded earth science data and information service center
[26:54] center is one of the 12 nasa uh distributed archive center since the may the 1990s we spot and
[27:04] all kind of data in multiple disciplines our focus area are atmospheric composition and carbon cycle etc lists
[27:14] below below we are proud to enable science in this area beside archived data justice also provides service and support in wide
[27:28] spectrum list here for example we provide a value added service on data i will introduce some of service shortly
[27:37] such as well-known giovanni this visualization tool and other various subsetting tools in addition we also provide multi-tier
[27:48] user support such as help disk earth data forum and you also can follow our news at social media like twitter and youtube
[28:01] is also actively engaged in different user communities we have a user working group to collect the feedback from user
[28:11] we also provide training to user by collaborating with nasa assets like this training and collaborating nasa earth data
[28:22] we also introduce our archive data and data service in various conferences such as egu also in publications and in news
[28:35] so before i start i want to give you some introduction about marrow too because this training is about marriage
[28:44] too too so as i mentioned merit2 is archived at the jazz disk so this slides give a brief introduction
[28:53] about the merit2 so as you know merit2 is very large there are about the total play 100
[29:03] collection 95 of them are standard collection and the four are derived climate statistical collection such as the climate detection index
[29:15] and one value-added collection to be released very soon which is a monthly pm 2.5 at the country level
[29:24] this data have a like a half degree resolution resolution and here i want to mention is uh marital
[29:35] has a data latency is about three weeks which means in each month around like the 21st for example february 22
[29:48] around this date you will get all the hourly data monthly data from january january so merit2 is widely used by studying the
[30:00] past events instead of for real-time events events we are proud to see that we have a large user
[30:10] community community for 2021 we have a 7000 user so welcome you be part of this user community
[30:24] i have to say that marital data is quite complicated since there are 100 collection collection and in each collection there are many
[30:33] variables variables up to like 100 variables in one collection but no worry we are here to help you to
[30:41] discover the marital data for air quality study which you are interested in in for your convenience we summarize the
[30:52] key variation collection and variable for air quality study at least here in the first column you can find the
[31:01] measurements such as the aerosol of people that's pm 2.5 and the second column is data collection here is the collection shot name
[31:14] as here and the third column is a parameters parameters its variable log name appear in this collection and the fourth column is
[31:25] temporal temporal feature for this collection so take a pm 2.5 for example so there are two collections
[31:35] contain this variable one is a one hourly average question and another is a monthly mean so you can read this
[31:47] collection collection by click this link and find more information in data landing page so you can find more information
[31:57] down here for example how to calculate the pm 2.5 and how to calculate pm 1.0 and pm10
[32:08] you may already notice that each collection have a two type of short name one is like this and another like this
[32:18] so next i will give you some introduction and how this short name are naming so take this kind of shot name for
[32:33] example fm2 tm and xaer it's a nine character shot name for this collection m2 means the merit2
[32:46] t is the mean the time average m is mean monthly me and nx mean 2d and aer mean aerosol field
[33:04] so this kind of short name is used by earth science data information system such as a jazz disk
[33:14] and another shot name look like this is tag m 2d a e r and x so t a
[33:24] v g m is mean time averaged m mean monthly 2d 2d mean the 2d field and the aer
[33:36] same as the last one mean airsoft failed and nx mean this is horizontal level only so this slides show
[33:51] the file naming convention such as one file from the collection i showed earlier earlier so you can read this slide
[34:01] later and find out how each segment segment or you can read this part too from the theory of introduction and access to
[34:13] global air quality forecasting data and two to find more information in previous slides i showed you the key
[34:24] marital collections and variables used for alcoholic study you may wonder how i find them here i will show you a general way to
[34:33] find them so that you will learn how to find them by yourself or find other variables of your interests in future
[34:43] it's worth to mention again that justice and actually entire nasa earth data archive data as a level of a collection
[34:53] and each collection includes many variables such as aod pm 2.5 therefore to find the variables you must
[35:04] first find the right collection which contain this variable first let's visit justice website so we enter the website like this
[35:15] screenshot screenshot and then your internal merit2 you get the result like a 99 data collections how to narrow down
[35:28] so you can go to this left column to refine by different ways such as subject measurements and the source
[35:38] but but and end of this refinement you still have many how how to do that to remember our goal is to dig out the
[35:48] variable related to air quality so so we recommend you to read mercury file specification document so where to
[35:59] find it so if you don't know know click this first result anyone anyone so into any collection
[36:12] landing page for example here it shows example of a landing page for collection m2 t1 and xer
[36:23] xer so so in this page you will find the file specification [Music] [Music] by click tab of
[36:34] of documentation yeah let's click it so after click you will find a bunch of documentation listed here
[36:47] including merit2 file specification document so you click it and read it and you want to read more
[36:56] about about how the variables mean you can click faq also i want to mention here is marital
[37:06] data access quick start guide i will give you more detail in next slide for this one so after you read the file specification
[37:18] and you find your collection then you put the collection shelter name over searching bar and searches the short name and then you
[37:28] got got his data landing page similar to this next step you want to download data we have a bunch of ways for you to
[37:40] choose to download data as it is here you choose one of them i will give more introduction later on
[37:48] this too so remember to click a reference to cite data algorithm in your prenation or a paper
[37:59] here we also want to emphasize emphasize to click a data citation find the data dui so you can
[38:09] cite in your plantation as well so this will comply the nasa open science policy so we know that marital data is
[38:24] complicated and very large that's why we provide provide all kind of assistant as at least here our merit2 team prepared a marital data
[38:38] access quick guide so from after you click the quick guide you can find the documentation faq and
[38:48] the data how to and all kind information here so i would start you to bookmark this quick guide
[38:58] i did so it's become my first aid when i want to search any matter 2 information again i want to emphasize the importance
[39:08] of reading file specification document so you can click here to find the file specification document after that
[39:18] if you still have question don't panic and shy feel free to contact us we are here to help you
[39:25] we i hope to post that justice help disk are really good so usually we reply to user within 24 hours in the weekdays
[39:36] in case you want to contact the gmao directly directly you can use this email address after you find your marital collection
[39:50] next you may wonder how to subset and how to download and analyze marital eq data here i would like to introduce you some
[39:59] useful two divided by adjusters such as sum is web page based and some is python api first let's check the web base 2.
[40:16] when you enter a dataset landing page of your interest such as this one you will see the block of data access
[40:25] with several options the first one is online archive it provides the urls data set you can download the original data sets without
[40:36] any subsetting from here you also we also provided the link of earth data so you can download data from there if
[40:46] you like in this training i will highlight a few webintue such as giovani it is the interactive visualization web
[40:57] 2 2 and will be demonstrated later and when you click web service you will see gds it is remotely accessible with
[41:10] grass or other script open that is another sub setting too and stress it these two can be used to subset and
[41:21] aggregate and download data and the last one is subset and get data i will demonstrate it later
[41:32] so with these two you can subset re-grid and download data and compute daily statistics such as mean minimum maximum on the fly
[41:44] using using hourly data besides the web 2 we also provide all kinds of python jupyter notebook you can
[41:57] use it to access and visualize marital data as list here the first one is how to use a web service api for subsetting
[42:07] marital data it can be used to subset and download data with a python api i will demonstrate it later from google cloud
[42:18] and second one is how to remote access marital data with python 3 and calculate monthly average surface pm 2.5 for world
[42:28] country country and third one is how to access marital data using opendap with python3 and calculate like
[42:39] a daily weekly monthly statistic from hourly data you can click each each link and read more besides that you will have miscellaneous
[42:52] tools for various use case such as you can click this to see how can i subset and download a large amount
[43:02] of marital data and how to get a time series for marital data at a point location and other
[43:13] other purpose from now let's get our hands dirty and then try this too by yourself so i will demonstrate how to subset
[43:24] download and analyze marital eq data using justice web 2 and the python api divided by justice from now on
[43:38] i will show you three tools first i will demonstrate how to use giovanni to visualize data giovani is able to
[43:48] visualize and analyze data in the end you also can download the plots you don't need to you don't need to download data and no
[43:57] need to know any programming language and second one is how to use the level 3 and level subsetter and recreater
[44:07] this again is a web 2 used to subset and download data then later a programming language is
[44:14] needed to visualize and analyze the download data and third one is how to use a web service api for subsetting marital data
[44:26] it is a python-driven notebook you can use it to automate the process of a subsetting and download data
[44:34] you need to know python the difficulty of these three demo from a to c increased with the requirements
[44:43] of a programming scale from zero to high to give you a better sense on these tools i will demonstrate them using a
[44:54] case study in this case study the impact of a 2021 summer california fire is examined 2021 as you know is proved to
[45:06] be another disastrous wildfire year for the american west as shown in this sony mpp little color image overlaid
[45:16] with fire hot spot in red on august 16 2021 harrisburg black the north california and transport downwind region
[45:29] air quality look very bad over the fire impact region including darwin region currently digs fire is the largest
[45:37] single fire in california in 2021 it started in may the july 2021 and burned nearly a million acre in
[45:50] california over three months now you may wonder how sweet were the impact of a 2021 summer california 5 on air quality
[46:03] was its most severe welfare season in recent tenure from 2012 to 2021 in this training let's tackle these two
[46:12] simple science questions together next next i will demonstrate these three tools separately by using the sim case study
[46:25] to recommend in which situation you should choose one two over the other two now for example a student amy
[46:35] among you contact us she is an environmental science major without knowing any programming and she tell us
[46:45] she won't tackle this two science question and and she needed the monthly pm 2.5 over california for this 10-year period
[47:00] because she doesn't know any programming she wants a web-based visualization too in this too she just need to click a button from the
[47:10] web page to select variable region and time and the plotting time and then the figure are displayed
[47:20] so many of you can relate it to her actually not only like people do not know programming
[47:28] for example for myself sometimes i want to just quickly get some preliminary results i also like use giovanni so
[47:38] for the kids of amy and the people like me want to get a quick result giovanni is recommended
[47:47] so in order to solve the problem i would recommend her to create a earth data account and the link just disk with
[47:55] your account to access data from giovanni giovanni and then next is find the monthly pm 2.5 data
[48:04] data from marchu in giovanni so for those who do not know giovanni here how giovanni look like
[48:19] first i want to clarify our demo 2 for giovanni giovanni so i will show you the giovanni user
[48:26] interface interface and demonstrate how to make a map plot and demonstrate how to make a time series plot
[48:35] so so for just for your information in the end of this demo you will get these two
[48:44] kind of plot on the left is pm 2.5 for august 2021 and the right one is into annual
[48:53] variation of august mean pm 2.5 over california for for 2012 to 2021 let's start the demo so i would like to mention that i expect
[49:11] you to follow the demo while i demonstrate demonstrate but if you cannot follow don't worry you can watch the recorded video later and
[49:20] follow later at the the starting point i assume you already create a earth data account and the link that justice with your
[49:31] account to access the data from giovanni so so in this demo i will start so let's exit first
[49:45] so so let's start a new browser and search geomani and then you got this page so you log in
[50:00] use your earth data login information yeah after you log in you will see the four function of giovanni for you
[50:24] so so first see my login information is expand to to and here a few button i want to let you
[50:33] know know so whenever you have any feedback feedback if you cannot go it smoothly and have some arrow page you can click this
[50:44] button to contact our help desk and also you can click help button and here there is user guide you can
[50:55] read it for how to use giovanni giovanni which is the four functions here is uh several other buttons you want to know
[51:07] so for selecting plot plot after click you can see many functions to plot maps comparison comparison time series
[51:19] miscellaneous and vertical and after you choose one of them for example a time average map you can
[51:29] choose the time range from 2 and also you can choose the the region for this case study we study pm 2.5
[51:45] from merit2 so in the searching box i will put the mirror too yeah it's already come out
[51:55] so now to let's first click mirror 2. what oh yes what would happen oh oh let's try okay maybe let's narrow it
[52:19] down down yeah yeah that's a way how to explore so married to p.m 2.5 let's see what come out
[52:34] oh you have like a 2000 result so let's further narrow down so for me i will okay
[52:47] okay you only have a few now so you can use the this section to narrow down the result
[52:56] and and you also can put in the additional keyword to narrow down so right now i have
[53:04] four five six seven eight to ninety i have a ten result result i want to find the
[53:13] total surface mass concentration and the monthly right so i find this one yes or you can further
[53:25] narrow down your results like the total let's try what happened here yes yes now you have only two
[53:36] let's see for these two so first is total surface mass concentration and second is total column mass density pm
[53:45] 2.5 2.5 so we want surface contrition pm 2.5 i want to mention that so this two variables were added
[53:56] recently just for this tree so you guys will be the first group of user so let's see our case study i will
[54:07] review the demo of objective now so you can bring up your slice of demo objective see what we will do
[54:20] so first i want to make a map plot let's see i want to make the time average the map
[54:26] plot plot for for august august 2021 so year is 2021 months is august yes it's less ended okay
[54:45] yes i need a special because i only want to plot one month and i plug in also is august 2021
[54:54] and my region is north america let's let's see the region so for this case i only select a
[55:06] box bonding region so i can like randomly collect a box at here so you will see here
[55:22] here so i can first just specify my region so my region is 133 west and here is a
[55:37] lower left corner so here is a 25 north and the next two is up right corner so for my case will be
[55:52] 62 62 and the north is a 67 67 okay let's see that's not good oh sorry i should have be next
[56:17] yeah this time look right so next i will click a plot data yeah we got a plot
[56:36] yeah you can find the color bar from here here so the minimum is 1.8 you can read the
[56:48] unit from here so if like this will be 1.8 milligram per cubic meter so that's that's to
[57:02] to specify the range like the plot look better better so for this case the minimum is like
[57:09] that that so can we let the let's see mine mine is is 200 let's see how this look
[57:23] with that and and plug smoothing on so this plot will look better yeah it's look much better right
[57:41] so from this plot you can see the the north north california california very very high pm 2.5 and
[57:55] transport downwind region another maximum is over british columbia so you not only see the maximum of pm
[58:05] 2.5 you also see the transport downwind region so after that you can download your plot and there are three options
[58:18] for you so for me i like png and then you can open it like here this title and
[58:34] the color bar so you can insert this plot into your partition so i would like to show you
[58:45] some some extra information so after you plot this you can see for this this activity there are several things
[58:55] you can click the input data information and plot and download so you can download an sdf and png
[59:07] and also lineage lineage so the manager is the data subset data so you can download the data from here
[59:18] okay let's go back to plot the time series for the time series we wanted to plot it only august
[59:29] so for this case the time series let's see recurring average yes time series recurring average because we only
[59:39] plot august for the past 10 year so let's select the season i only want to look at august
[59:50] so i'll choose months you can pick august if you want to see season let's try you can pick any one season
[1:00:03] and for day is for for like daily data or hourly data but our data in this case is monthly so i choose
[1:00:13] august that's it here is the starting year starting year i choose 2012 2012 and in the year i choose 2021
[1:00:27] so next is a select region so besides the slack bounding box as i showed in last case we also can choose
[1:00:37] ship ship for this example we choose california so first of all you need to clean up this box if you
[1:00:47] did select region as i did earlier you clean this box and then click this and then select u.s state
[1:01:01] california california say this california is over here so next you click you pick all the selections and then
[1:01:13] plot data yeah it's very fast so so here here you can see the in the annual variation of a pm 2.5
[1:01:33] in august august each year this 2012 hours 2013 august and 2021 august so from this time series you can see
[1:01:47] 2021 august has the highest pm 2.5 again you can download data for example download to into png format
[1:02:01] here let's open it see see beautiful plots you can insert to your partition so this function is pretty powerful so
[1:02:16] you can have a bunch of flexible option to plot the time series again you can export here for this
[1:02:26] plot to choose the lineage lineage and you can download the data over here so let's go back to selection
[1:02:43] so that's the end of a demo of giovanni let's go back to our slides you can find the extra information of
[1:02:55] giovanni giovanni from this page there are many good information list here each one with a hyperlink so you can explore this
[1:03:07] page by yourself after amy left now bob a faculty in atmospheric department contact us he master a programming language such as
[1:03:22] paisa or r or idl you name it he tell us he also want to tackle this two cents question
[1:03:33] and what did he need is a monthly pm 2.5 data over california for the past 10 years
[1:03:45] different from amy bob wants to visualize by himself because he wanted to adjust the color bar and
[1:03:54] compare with other data not available in giovanni but he wanted some easy button he wanted user the weber page to subside data
[1:04:08] like a variable region and time range so in this case we recommend him to use web-based 2 level 3 and allow 4
[1:04:20] subsetter and rig reader so in order to solve the problem bob also needs to create the earth data
[1:04:29] account and link jazz disk and and he needs to know more than amy he needs to identify the merchant
[1:04:39] collection collection which has the monthly pm 2.5 data in just this website by searching the merit2 file specification document
[1:04:50] in this case we again identified as a collection m2 tm and xer and he also need to how to calculate the
[1:05:02] pm 2.5 from meri2 because because in this merit2 version version the each variables are saved but not the
[1:05:14] total pm 2.5 so he needed to read the science faq number four to learn how to calculate pm
[1:05:23] 2.5 2.5 and after that he needed to use the subsetting to click the subsetting guide data and
[1:05:34] and download the data after that with wget and occur and last he neither use his python or other programming tool to
[1:05:47] visualize the data i will show more detail and demo so for those who don't know where to get
[1:05:56] the the subsetting and get data so i will show you this page so so after you know which data collection
[1:06:06] you will use so you input your collection shot name over searching bar and then get the data landing page like
[1:06:16] this one so so first let's see this landing data page so so here is a collection title
[1:06:28] so in this title as you see here the two type of shelter name showing over here and here is long name
[1:06:38] and over here is a summary about this collection collection so in this section is a data access
[1:06:47] method method so sub setting 2 is over here so here is the two i want to demo you
[1:06:58] and after click here you will see another window pop up look like this so before i start this demo i want to
[1:07:08] clarify our demo objective first i will identify the marital collection which has a monthly pm25 data injustice website
[1:07:22] by going through these steps i will give more detail during the demo demo part part so next is demonstrate how to use web 2
[1:07:33] level 3 and level 4 subsetter to subset data data and then i will show you how to download
[1:07:41] the file choose choose after after going through this selection and then i want to mention i will not demonstrate
[1:07:53] how to analyze and visualize the download data and and this will be demonstrated by other instructors in part 2 and part 3.
[1:08:06] so next let's start the demo level 3 and level 4 subsetter subsetter so first i recommend you to find the
[1:08:17] quick guide so if you already bookmark that's great so for me i click here so right now i want to identify the
[1:08:38] merit2 collection which has a monthly pm 2.5 data so so i click the quick guide because i want to find the
[1:08:48] marital file specification document so where it is so click the documentation documentation see you can find a
[1:08:59] marital file specification from here so you click it this pdf document so next let's search p p m
[1:09:13] m 2.5 2.5 okay great so so here i want to find the collection so so i put in the pm 2.5
[1:09:28] i i locate the collection collection here is a ta way to g1 2d aerosol and x and the next is another short name
[1:09:42] so this collection is hourly for us we use a monthly so let's try i i i use this
[1:09:54] short name so i put this shell name over here here so remember the naming convention so t1 which means the time average one
[1:10:04] hourly hourly for me i want to use the monthly monthly so i click monthly oh yes the monthly com come out
[1:10:14] so in this file specification only list the variable name for hourly data let's go back back to see uh-huh yes this is a
[1:10:27] variable list for hourly data there are about like a 50 variable however we don't list the monthly data
[1:10:39] for this corresponding to this hourly data these monthly data actually have a same number of uh variable as a monthly
[1:10:51] sorry as hourly data just like monthly mean of this hourly data data so let's try tm okay
[1:11:02] okay so so now we identify the collection name is m2 tm and xer so let's go to the
[1:11:18] go back to the justice website so justice so next i want to find the data landing page for this collection
[1:11:35] so i put in the short name it's like this this part is a model version used to run
[1:11:43] mirror too so click it click in then here we enter the data landing page for this collection
[1:11:58] so you can read a summary for this collection collection over here let's go over some basic information
[1:12:06] about this collection so here is spatial coverage and temporal coverage coverage and the file size so it's a like a 481 megabyte per file
[1:12:19] so in this case is per month so it's quite a big so so next i will show you how to
[1:12:27] a trick how to see the variable list if you you don't want to read the file specification so you click web service
[1:12:37] and the gds see see here this is the variable and longitude the latitude information so so that's a trick for me so you can
[1:12:49] follow and remember you also needed to know how to calculate the merit merit pm 2.5 from individual component
[1:13:03] let's go back to the the quick guide where it is so i click feq then i click signs faq
[1:13:16] here is several faq provided by gmao so let's scroll down here how the fourth one is how do i obtain
[1:13:30] surface pm 2.5 concentration in merit2 so here give you the equation how to calculate the pm 2.5 from five
[1:13:42] components components so you can write down this equation in case you needed to calculate the total pm to 0.5
[1:13:55] so next is uh how to use the subsetting too too so let's go back to the data landing
[1:14:02] page page yes yes so here is monthly mean time average single level assimilation also diagnosed just make sure we are in the right data
[1:14:14] landing page so next click the subset and get data so from here you will see this pop-up window
[1:14:28] and and download the method click it oh you have a three download option the first one is to download
[1:14:37] original data no subsetting so you can download data from here in entire uh like in original size
[1:14:49] second one is you can choose to get data subsets using open dab so opendab also can subset data
[1:14:58] like a variable region but but we choose this one guide data subset using the just this subsetter which is what we call level 3
[1:15:12] and level 4 subsetter because this function function also include a regretting function function so later if you want to recreate you can
[1:15:24] click click so in this case we choose the third one and next is a method option here is how to
[1:15:34] select the date range so for this demonstration i will show show how to download the data from
[1:15:48] let's see june june june june 2021 to 2021 2021 let's click here go on to august for this demo i only
[1:16:04] demonstrated how to subside data only only three months to save data in your case you you want to download
[1:16:15] 10-year data remember so after select time that's a refined region so so let's see okay we want to choose north america
[1:16:32] as as first first choose a bounding box like that and then we can refine the region by typing so
[1:16:45] the first two is the lower left corner so it's a negative one three three and the latitude
[1:16:55] is uh 25 the next two is a upper right corner so first is longitude is a negative 62.
[1:17:12] and and the latitude will be 67 so you can read the detail from our demo objective so you see the regions
[1:17:27] are are highlighted in the green box so next let's subset the variable so so variable to calculate the pm 2.5 is a
[1:17:42] organic organic organic surface mass concentration so let me highlight the variable i need so easy to find
[1:17:54] so i know i want the surface mass mass concentration concentration okay okay great great so let's pick
[1:18:07] so first is the cop black carbon so click it cms is not in pm 2.5 and dust yeah there are two variables
[1:18:18] related to dust with take the pm 2.5 your dust is cos uh uh so we only choose five mold part
[1:18:29] so let's choose the organic carbon carbon and and solve it and and for seaside sin we choose only pm 2.5
[1:18:42] so let's count there are five variables variables used to calculate two to pm two one five so we got all of them
[1:18:54] is show you the recruiting option so you can choose a bilinear you have several options and here shows the
[1:19:05] the recreated option so there are a bunch of options and if you want to read more you can
[1:19:14] click this button and to read detailed information about the regrading type and the grid for me i don't want to regret
[1:19:26] so i ignore this option and just click get data now you get a list list as shown here
[1:19:43] so if you just download wow 2 you can click click it and download it that's pretty easy but
[1:19:51] if you have like a 100 file you cannot click one by one so we provide a method to download
[1:20:01] all the file together so you can click here download link list and for me i will save it to my download folder
[1:20:15] and and and then you can click instruction for downloading downloading so you can click wget and occur to learn how to use
[1:20:27] wget and query to download data so i will skip this part i assume you already already read it before this training
[1:20:36] so now let's see the file i download okay okay so so here is the file i just downloaded let's
[1:20:49] see what this look like oh it's looking like this okay now let's use wget so we go back to slice to find the
[1:21:04] command how to download let's go back to the slides yes here is a slider for demo objective i leave the command here
[1:21:19] for your reference so you copy this command so so you copy this part and the this part is
[1:21:28] the file you download so let's copy this part and open a terminal terminal so i use mac so i my terminal look like
[1:21:43] this this so let's first see the file yeah this file so i copy the command over here
[1:21:52] and after the i i enter my download file name to here okay okay so click it so for your case so you just
[1:22:10] copy the first part from the partition and enter the the the download the downloaded link list to
[1:22:19] here here click great let's see oh yes now you download this for data so first is the virtual readme
[1:22:42] it comes with every download and these three are the file you just subset subset let's see does it look good so for me i use a pen
[1:22:53] apply to have a quick check so i click this data and my panel apply come out so i click any variable see first check
[1:23:06] the variable i subside 2 2 1 2 3 4 5 variable the longitude and latitude and time will
[1:23:17] come with this file so let's see i click on black carbon and see this data is right look right so you can use your own
[1:23:33] program to check the data now we download data yeah let's see we downloaded three files so three monthly file
[1:23:50] you can check other two and next i will show you how to use a query to download data
[1:24:01] remember i my case is i use mac so for windows user you may have a different command so please go to the data access
[1:24:13] link to find out how to download user windows so for me i use mac i copy this command
[1:24:25] cat so and then first let's remove the file i just downloaded yes and then that here is uh the link
[1:24:52] file so i copied this and then i copied the rest command from the slide let's try yeah let's see yeah it's here
[1:25:14] so go to this time i want to download the folder and click any one of them organic so we got data
[1:25:29] then so you can use your own programming to analyze and visualize into your flavor let's go back to the slides
[1:25:42] after amy and bob left now scientist cousin in geophysics lab contact us he's good at tyson he tells he also want to tackle the same
[1:25:53] to science question what does he need also data monthly pm 25 data over california for the past 10
[1:26:03] years years same as bob he wanted to do his own visualization he doesn't need any easy button
[1:26:14] so so he just want to automate the sub setting like a subsidy variable region and time range
[1:26:22] range and download data with the api here we have a python api tool for him in order to solve the problem
[1:26:35] he also needed to create a earth data account and the link of justice he also needed identified the marital
[1:26:42] collection collection with a monthly pm21 data and and we need to read the minor 2 first specification document
[1:26:55] you need to know how to calculate the pm 2.5 data in mario 2. different from bob you need to know to
[1:27:03] how to use api to subset and download data data either from his own local machine or from any cloud form like a google cloud
[1:27:15] in the end he need visualizer download the data with his own script first i would like to clarify demo
[1:27:25] objective at the first step this user need to identify the marital collection which has a monthly pm 2.5
[1:27:36] data data we need to go through these steps i demonstrated in the demo 2 so i will not demonstrate this one in
[1:27:46] demo three next demonstrate how to run the python api api it's a gupta notebook i will demonstrate it from google cloud
[1:27:57] in this training then then i will demonstrate where to modify this python api to to subset and download your data at least below
[1:28:10] last i will demonstrate how to move the download data from google cloud to the local dates in case you want to analyze data from
[1:28:20] the local disk i will now demonstrate how to analyze and visualize the download data because in the part 2 and part 3 our
[1:28:29] instructor will demonstrate that so so let's start our demo so let's exit the partition so so we need to go to your google account
[1:28:49] so for me i already log in my google account so i go to my google drive so for this demo
[1:29:04] i assume you already downloaded the this jupyter notebook to your local disk in my case i download to my local disk
[1:29:15] as here so next i will upload to my google cloud so i enter my folder ourselves training
[1:29:28] so for those people who don't have a google cloud you need to add it you click here
[1:29:38] and you search collaboratory collaboratory see for my case i already installed so it show installed if you
[1:29:52] don't have one you need in-store so so with that you can read the notebook so let's upload
[1:30:01] so i upload from here so i click it here is this notebook how to use web service api for
[1:30:19] subsetting subsetting marital data related to pm 2.5 so just this application programming interface interface in short is api is intended for user who
[1:30:32] prefer to employ our data search and subsetting service using a script instead of weber browser interface as i showed you early use a
[1:30:44] level 3 and level subsetter so user can avoid to do that like inter like directly to download
[1:30:53] data use this uh script so the api is a communication particle that allow user to find the data set and
[1:31:03] data granule that they need and download any desired data set information is passed back through in javascript objective notation is json
[1:31:14] format so you can read more information and more detail by clicking this link so from there you find the other
[1:31:24] example of how to use this api for this training showing here we demonstrate how to use the api to
[1:31:35] subset subset a synchronous request to justice subsetting service in order to obtain subset of merit2 data more specific
[1:31:46] we subset data as showing here a collection is monthly collection collection with short name m2 tm and x er and the variable is a
[1:31:59] five aerosol component and the region is over north america timer range is uh in order to save time i only subset
[1:32:09] three months later on after you download the you can use this equation to calculate the total pm 2.5
[1:32:21] so this example code is written in python 3 so you can use all the libraries because i
[1:32:31] show the this case from google cloud so google cloud already set up the environment so you do not need to
[1:32:40] download all this module by yourself that's one reason we use google cloud by the way you also can run this
[1:32:49] api from your local machine but you may need to download and store the module you need so let's click
[1:32:58] the first cell so this cell is just import the required python library let's try it so after installing the modules the
[1:33:14] second step is to initialize it you are live live hold manager and see the base url for
[1:33:22] the api request that will be sent to the justice subsetting service so you just click it on the third step i by the way i wanted
[1:33:35] to explain each line line and you can read later the reason i skip because actually you don't need
[1:33:45] understand these steps is standard template so you just go through each step and click it the third step is define a local general
[1:33:57] purpose purpose method that sub uh made a json request to justice server so can check for any error and then
[1:34:07] return the response this function is created for convenience and this task will be repeated more than once so here is a function so you click
[1:34:19] it it's work and the first step will be define the specific detail of a sub-setting so so this section step four and the following
[1:34:32] sub sub step five here is the place you need to modify to into your case so so this is only two step you need to
[1:34:44] pay attention and modify into your keys so for my case say product i needed to put in the collection shot
[1:34:54] name as shown here monthly aerosol data collection and the variable is a fiverr aerosol component you can find the
[1:35:06] the names from the file specification document and here define the the region and the beginning time and end time
[1:35:20] in my case i don't want to interpolate regretting so i common art these two if you want to
[1:35:30] regret regret the output into other grid you can cancel this and in the fifth step so the design spatial and spatial
[1:35:44] spatial and temporal constraints along with the data set and variable specification are stored in json-based web service protocol structure which is
[1:35:57] named named cyber request subset request so in this server request you will define the method name as a subset
[1:36:11] and type and like this you don't need to in this part actually you don't need to modify this
[1:36:18] part part this is defined by step four the only part you may need to pay attention is here
[1:36:28] in this case we have five variable so so say start zero to four if you have a less or more you need to
[1:36:39] add or remove from this list data set id and variable list other part you just follow this pattern
[1:36:49] and the sixth step is to the json format subset request is post to the justice server and the job id is extract from the
[1:37:01] response and will be used later and referenced for the request so you just define the subset request you put over
[1:37:09] here here and and and then you oh what happened i didn't click here that's good i've got a clip set four
[1:37:23] slab five and then step with six yes i got job id and status is accept so the seventh step will be construct
[1:37:39] json json wsp request for api method you don't need to change the rest part step six seven you just
[1:37:49] click yeah this is aside and complete and then the step will be construct json wsp request for epr method get the
[1:38:08] result result you can read the details later for what this step is doing and the ninth step is to sort the result
[1:38:19] into into document and url again you don't need to understand so here this is the document readme document will be downloaded but
[1:38:33] for our keys we didn't want to download we don't want to download and tense that let's see what tensor
[1:38:42] here in terms that we download data this real step to download data so so in this case
[1:38:50] you need to put in your earth data user id on the fly for me [Music] okay okay so i think that data is downloaded you
[1:39:09] see here three data are downloaded that's great so next let's see where the data is so we click it
[1:39:23] yes it tell me that these are under the directory content so where it is so i click this
[1:39:34] file oh yes it's over here so how to the download data is over google cloud in case you want to analyze data in your
[1:39:48] local disk you can click on the three dot and download it but if you download it like a 100 data
[1:39:58] you don't want to click one by one so how to do that so here is that show you how to zip data first let's do
[1:40:08] it zip all the download data yes that's it refresh yes it's over here so what i just did i zip all the file
[1:40:31] and then now i download let's check my local this this so in my local disk i found this file
[1:40:45] zipped file i click it let's check the data so so i download it let's check this time i
[1:40:56] take a surface hmm yeah this looks right to me so so we successfully downloaded the data with api
[1:41:10] congratulations hope you also did it let's see so with that i will end this demo demo let's go back to slice
[1:41:26] so here i list the acronym for your convenience to refer later later and the reference without the part one of this training
[1:41:39] series is down thank you for your participation and interest interest next section is question and answer part
[1:41:47] if you have any question put them into the question box our instructor will answer them if you have any question after the
[1:41:56] training training feel free to contact us thank you so much xiaohua for that amazing in-depth presentation that's really exciting to see all of the
[1:42:13] available tools and resources that the jazz disc website has has so so take a minute and please enter any
[1:42:23] questions that you might have into the questions box and i see some people have started doing that already
[1:42:35] and we'll go through them in the order they were answered so i'll just give give it a minute
[1:42:44] okay okay so let's start the q a thank you everybody for starting to put in questions and so here we'll start with question
[1:42:54] one which global ground air quality data are used to develop aqi forecast products products the aqi or air quality index is a
[1:43:06] quantity used by the us epa to communicate the potential for exposure to poor air quality and the
[1:43:13] potential for health impacts when the epa issues aqi forecasts they use u.s ground reference monitors that measure pm 2.5
[1:43:24] and ozone along with weather forecast models and satellite observations to generate the aqi forecast and included i've included a link here for more
[1:43:33] information information so the question references global ground air quality data and the you the epa aqi is a very specific
[1:43:43] equation for the u.s so other countries might have different air pollution indices they'll use potentially different pollutants or different
[1:43:51] equations to generate their own aqi and they'll use their own local data moving on to question two
[1:44:05] is the unit right so i think this is in reference to the merit the giovanni demo xiaohua would you like to
[1:44:12] unu unu and answer the question sure sure the unit should be kilogram per cubic meter from original output
[1:44:23] in this in this giovanni demo the minimum map if you remember is about 1.8 e negative 9 kilometer
[1:44:33] kilogram per cubic meter so in this case it will convert like like a 1.8 microgram per cubic meter
[1:44:43] i'm sorry i i know i said wrong so now i crack it as a 1.8 microgram cubic meter
[1:44:55] yeah that's it great great okay question three can we plot modis aod products with three kilometer and ten kilometer
[1:45:10] resolution in giovanni and the answer to this right now is no giovanni only provides gridded data from
[1:45:18] modis and those are currently available at one by one degree resolution but we have um we've previously done an advanced
[1:45:28] training training at rset on the high resolution modus data and you can get more information at the link that we've included here and
[1:45:37] i should mention we're going through this now but this q a document will be available for review
[1:45:44] in a day or so on the training website so you'll have access to everything we're showing here
[1:45:52] question four why is there a low value in 2019 so i think i'm gonna let y'all unmute because
[1:46:00] i think this was during her demo yeah i would say that's a very good observation so it's an interesting
[1:46:08] question was it to investigate more i just did very quick research as uh i searched the wildfire
[1:46:17] in california so you can click the link and say i don't see any larger file in 2018 and uh again i want to emphasize
[1:46:28] for this demo i only averaged over california so i know there were a lot of fire in 2019 in western us but not
[1:46:39] in uh california yeah yeah one i'm done sounds good thank you thank you question five i have a feeling this is
[1:46:54] going to be another one for you how do i download giovanni pm 2.5 data in csv or
[1:47:00] tabular format yes yes for people want to see as we for my demo part yeah as you see the output
[1:47:11] will will you can find uh download data from lineage which is a net cdf but if you want to get csv you can
[1:47:20] download data uh in the plotting type as time series so after after all the selection in the end you
[1:47:29] have option to download data as a csv so here are right like located on the left hand side of history downloading
[1:47:39] button so you can explore explore over there great um question six is it possible to use matlab instead of
[1:47:54] python python the answer is definitely yes there are many different programming languages everybody probably has their favorite
[1:48:02] um um that can be used to analyze data so uh when we're presenting we try to use
[1:48:08] open source or no cost tools and matlab is one of those programming languages that requires a license in order to use so
[1:48:17] we try to stick with python um in other open source uh languages question seven where did you get that script i did not
[1:48:30] read it anywhere so i think i'm going to let johan unmute and point people towards the scripts that she showed
[1:48:39] yeah look like a question 7 and 8 are same so you ask where to download the script
[1:48:46] python notebook so i'm sorry we we will send this link to you shortly and and here in the qa part we list a general
[1:48:59] information for how to gather all the how tools and one how to use a web api for subset
[1:49:07] number two you can you can use that for general information and shortly again shortly we will send
[1:49:15] you the demoed one to you okay and do you want to take this next one after we calculate the surface
[1:49:28] concentration of pm 2.5 or 1 or 10 what is the unit of the pm yes yes for original data is a kilometer per
[1:49:38] cubic meter a kilogram per cubic meter so if you download data you will have this unit and you can use other
[1:49:47] conversion factor to convert into like a macro gram per cubic meter great great so so can we use air qual can we use the air
[1:50:02] quality quality on landsat imagery using google earth engine engine and i'm going to be the i will
[1:50:10] definitely invite my other um colleagues here to weigh in if they have more information than me i am not an expert
[1:50:17] at using google earth engine nor am i very familiar with what air quality relevant observations might be available on that platform
[1:50:27] paul on do you happen to know but but definitely use the layers go go ahead thank you sure
[1:50:34] yeah so the question is can you use the air quality on landsat imagery using google earth engine so yes google earth
[1:50:41] engine does have landsat data although it does not have any air quality related parameters retrieved from the landsat
[1:50:50] imagery therefore you will have to do that yourself using certain research algorithms or your own research in addition to landsat google earth
[1:51:02] engine also hosts data from trop omi satellite modis satellites and many other uh nasa we are actually in process uh
[1:51:14] to to [Music] [Music] populate google earth engine with uh some of the geos model output that will
[1:51:21] happen in near future thank you let's see question 11 do all three techniques give the same results when we plot the
[1:51:41] data data not exactly sure what this is referring to i can take this question sure sure so yes as i
[1:51:58] i showed i demonstrated three so first one um the different for first one is we uh don't need download data so you can
[1:52:10] uh plot on the fly so in the end you get the same uh same data for the second and the two definitely
[1:52:20] these these two tools are used to download data so with all the configuration i showed in the demo
[1:52:29] objective objective we we download the same data and for the second and the third one so you need to
[1:52:41] use your visualization two to visualize do analysis so that's a big difference from the first demo thanks
[1:52:58] thanks question 12 is there any plan to lower the spatial resolution to a meter scale in the
[1:53:06] future future and if this question is in reference to global modeling when we increase the spatial resolution
[1:53:18] of our models we increase the computational expense of running these models by orders of magnitude so so while
[1:53:28] while um the gmao is definitely experimenting with running geos at about one kilometer spatial resolution resolution the computational power is so great that
[1:53:42] we can typically only run these for very short time periods so i don't see a meter for a global
[1:53:50] meter forecast in our immediate future there are more regional models like cmap or other uh not global air quality models
[1:54:04] where one kilometer resolutions are possible and are used but again those are typically for shorter time periods
[1:54:17] question 13. hello i have heard merit2data has a major limitation over polar oceans and at tropical latitudes
[1:54:27] is that correct um um so um um i'm not i see jennifer is typing right there in
[1:54:37] the chat um um so i'm not exactly sure what quantities this is asking about um if you are asking about
[1:54:48] the air quality relevant um um data that we've discussed today um um merit2 there are um there is documentation i believe looking
[1:55:03] at the evaluation of merit2 and there are research publications but in general merit2 merit2 will be closest to the satellite data
[1:55:15] where there are satellite observations available and you see jennifer is putting some information information about about the projection of merit2
[1:55:38] okay okay does anybody want to weigh in on that question before i move on to question 14.
[1:55:50] okay okay so question 14 is the gs chem cf output different from the gschem basic model if so what is the difference between the
[1:56:01] two two i see the basic model gives pm 2.5 composition data yes yes so the the version of gs chem run in
[1:56:12] grcf grcf is i believe the most up-to-date version of gsk of gs chem um i think i believe the
[1:56:22] version should be the the exact version should be available on the gmao website um um the model does output
[1:56:35] composition data and those quantities are also likely available in the cf output output in the same way that they would be
[1:56:45] available from gscam when you download gscam from the gschem website um you're most likely downloading a version of gschem which is
[1:57:00] a chemistry transport model which is capable of using gis or other weather fields um as the base weather model um when we're
[1:57:13] running gscf we're running a very specific specific version of gscam that has been made to be what's called uh
[1:57:23] esmf or earth system model compatible question 15 why does grcf use the replay technique instead of the data simulation what is
[1:57:41] the advantage of the replay technique um um so so one difference and i can't speak as to
[1:57:50] as to why they chose this but one advantage of of doing the cf forecasted the way that
[1:57:59] they have is that the fp system is as i said very dynamic and is constantly being updated
[1:58:08] um um in terms of the model version or the observations assimilated or even the kind of data assimilation that is used
[1:58:20] in grcf because the system has remained stable those analysis are not the analysis the replay fields can be used
[1:58:31] um um as a atmospheric composition archive over that time period um i think they'll explore um um potentially changing this in the future
[1:58:44] but as we began um standing up the cf system this was the methodology they chose question 16 is there a way to access
[1:59:03] gschem basic composition data if this question is referring to the composition of aerosols i believe the the cf output
[1:59:19] does contain the individual the mass of each individual component in addition to pm 2.5 but full a full explanation of the
[1:59:32] variables included in the cf output can be accessed using the file specification document that i've linked to in my slides
[1:59:53] and that might be the end of my questions if you have any questions um that we haven't gotten to here or
[2:00:08] maybe you think of something later please feel free to send us an email and yes our emails can be found there at the
[2:00:24] top of the question and answer document and please join us thursday for session two two of this webinar series thank you
[2:00:36] everyone hope you have a great rest of your day hi melanie can i say something about part two
[2:01:06] please hey uh everyone i know most people are leaving but just want to make sure that please check your email and
[2:01:15] before joining part two check the website there is a material for part two which includes data and code if you can
[2:01:22] download that before joining session two on thursday that will be easier and help us to split uh the session through part two
[2:01:33] exercises exercises yeah that's all thank you
