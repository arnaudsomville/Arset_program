# Foundational Understanding of LIS (static, forcing, models, output), Part 1/3

`https://www.youtube.com/watch?v=yA7gX95oOBU` · id 168 · 1:33:00 · module 107 — Application of NASA SPoRT-Land Information System (SPoRT-LIS) Soil Moisture Data for Drought

[00:01] hello and welcome to the rset training application of NASA sport land information system soil moisture data for
[00:09] for Drought my name is Sean McCartney and I'm an rset trainer based at NASA's garded space flight center in Green Belt
[00:17] Maryland it's a pleasure to welcome you all to the first part of this three-part webinar series for those unfamiliar with the
[00:29] applied remote ing training program or arset rset is part of NASA's applied sciences capacity building program rset
[00:38] provides accessible relevant and cost-free training on remote sensing satellites sensors methods tools and applications trainings include a variety
[00:51] of applications of satellite data and are tailored to audiences with a variety of experience levels from introductory
[00:58] to Advanced on the right of the slide we see the six application areas in which our set
[01:05] conducts our trainings including agriculture climate and resilience disasters ecological conservation health and air quality and Water Resources trainings are conducted both
[01:20] online and in person and are offered live and instructor Le or asynchronous and and self-paced all rset trainings are
[01:30] offered cost-free and include bilingual and multilingual options only publicly available data and open source and Open Access software is
[01:42] used in our trainings we accommodate different levels of expertise with our trainings ranging from introductory to Advanced we
[01:51] encourage you to visit our website to learn more about the rset program and sign up on our list serve to receive
[01:58] email updates on upcoming trainings the following slides will provide an overview of the training application of NASA sport land
[02:10] information system soil moisture data for Drought according to the World Health Organization an estimated 55 million people globally are affected by droughts
[02:24] every year traditional drought applications and indices focus on sensible weather and precipitation Trends and their impacts on the
[02:33] hydrologic system this training is focused on the introduction of the NASA land information system or Liz output of
[02:42] soil moisture at various depths for Drought analysis and monitoring Liz output of soil moisture will enable a more efficient drought
[02:53] analysis via a gritted product as opposed to spar insitu measurements of weather parameters and even less less
[03:00] dense soil moisture and vegetation Health insitu observations the spatial tracking and Analysis of soil moisture by Liz
[03:10] provides a unique tool for those monitoring drought locally compared to large scale traditional indices forced by weather
[03:21] factors after participating in this three-part training a user will be able to apply Liz output to efficiently
[03:28] analyze drought over large spatial areas in conjunction with current practices and to integrate the capability with existing data you will be able to
[03:39] identify the NASA Liz Basics regarding the framework input forcing static Fields land surface modeling structure and output most relevant to Drought
[03:52] you'll be able to summarize the derived soil moisture percentile products and how these are created you'll also be
[03:59] able to to apply sport Liz output and or derived products to both complement existing data and overcome limitations
[04:08] to monitoring drought over large areas you'll be able to recognize best practices for Liz impact related to
[04:15] drought and finally after participating in this three-part training you'll be able to configure Liz output file for
[04:22] viewing within a GIS based display tool and for tailored output products and graphics the prerequisites for this three-part
[04:33] training are our set's fundamentals of remote sensing session one you should download and install qgis in all
[04:41] accompanying software you'll need to register for a Google collab via Gmail or a Gmail enabled account and though basic python
[04:52] experience is beneficial it is not required to be able to run the Google collab uh notebooks that you'll be using
[05:02] this slide provides the training outline for this three-part webinar series over these three weeks there will be three 1
[05:10] and a half hour sessions which will include presentations demonstrations as well as question and answer sessions all
[05:18] materials and recordings from each session are available on the training web web page part one is focused on a
[05:26] foundational understanding of Liz the static forcing models and output following each session there will be a self-paced micro lesson which will
[05:37] not be graded but will serve as a knowledge check and prepare you for the following parts of the webinar series as
[05:44] well as prepare you for the final homework homework assignment there will be one homework assignment which will be posted on May
[05:52] 31st on the ret training page and there will be a due date for that one homework assignment on June 4
[06:00] 14th a certificate of completion will be awarded to those who attend all live sessions and complete the homework
[06:07] assignment before the given due date listed below are the trainers for today's today's webinar Chris Hayne is a physical
[06:21] research scientist at NASA's Marshall space flight center as well as a project lead for NASA's short-term predic Center
[06:30] and transition Center or sport suj Kumar is a research physical scientist in The hydrological Sciences Lab at NASA's Gard spaceflight
[06:42] Center and Jonathan case is a research meteorologist with NASA sport at NASA's Marshall space flight center the objective for today in this
[06:55] first part of the webinar series are as follows by the end of part one participants will be able to identify
[07:03] the NASA Liz Basics regarding the framework input forcing static Fields land surface modeling structure and output most relevant to
[07:14] Drought you'll also be able to summarize the derived soil moisture percentile products and how these are created questions are encouraged if you
[07:27] have any questions please put them in the questions box and we will address them at the end of the webinar in the
[07:34] order that they were received feel free to enter your questions as we go we will try to get to all of the questions
[07:41] during the question and answer session after the presentations of this webinar have have concluded the remainder of the questions
[07:49] that we don't get to will be answered in the question and answer document and we will post them to the training website
[07:55] about a week after the training we will now transition to Dr Chris Hayne to introduce sport Liz for Drought
[08:05] training Chris over to you thank you my name is Christopher Hayne and I am the Project Lead for the
[08:15] NASA sport the short-term prediction research and transition Center I wanted to welcome you to the first session of
[08:21] rett's application of NASA sports land information system soil moisture data for Drought training we have an excellent set presentations and
[08:30] tutorials over the next three weeks that I'm sure will leave you with a better appreciation for the use of land surface
[08:35] modeling for the monitoring of drought over the past two decades sport has pioneered a paradigm focused on
[08:43] improving the research to operations process sport was started to address something we call the Valley of Death
[08:49] where a gap existed between scientists and decision makers which caused inefficiencies in the process of getting Cutting Edge Research into the hands of
[08:57] people who needed to make important decisions decisions to address this Challenge Sports unique research operations process starts with
[09:04] the decision maker we bring the decision maker into the process at the beginning to learn and understand what their needs
[09:10] and challenges are so when we say decision maker who are we actually talking about um some of
[09:17] the groups that we've worked with actively over the last two decades um have included um Noah in the National
[09:24] Weather Service which really started out as our primary stakeholders in the operational weather community uh and then in over the last number of
[09:31] years we've really worked to broaden out our reach to to additional decision-making groups that can benefit both from NASA products and modeling
[09:40] capabilities uh within our process after we identify a group that we aim to work with the first part of our research
[09:46] operations Paradigm is to learn about their decision-making process and to identify forecast challenges that exist so at this point once we identify
[09:56] a challenge we can go back to the scientific community and find or develop a solution that we can then introduce to
[10:02] our decision maker uh after we identify that solution um to a known forecast challenge we can start the process of getting that new
[10:10] product or capability in front of the decision decision maker usually the product or capability may be new to the decision maker so our
[10:17] team Works to develop training tools to help the users become acclimated to the new product or capability uh one example of training
[10:25] tools are the development of virtual Class Type material which allows the decision maker to learn about how the
[10:30] product was developed and examples of how it can be used to address their specific forecast challenge at times the decision maker
[10:37] needs a shorter format piece of training that can be quickly referenced while in a decision-making process uh therefore
[10:44] for all our new products and capabilities we also develop something we call Quick guides which are a one to
[10:49] two-page overview of the product with which provides the most relevant information that can be quickly assessed by the decision maker while they're
[10:56] making uh a decision within their process process um at this point we've integrated the new productor capability into the
[11:03] decision-making process and provided training for its use the next step in our process is to do a targeted
[11:09] assessment period where we can observe how how the decision maker is using the product and get feedback from them on
[11:15] the potential improvements or changes to the productor capability that could be made after the assessment period ends we
[11:21] meet with the decision maker and together determine if the forecast challenge has been properly addressed by the introduction of this new productor
[11:28] capability or if further uh development is needed um so at this point we kind of reach a fork in the road where we have
[11:35] to determine what success is uh with two potential potential outcomes um success means or success is we finish the process and the decision
[11:44] maker takes ownership of the new product or capability and integrates it into their long-term solution within their
[11:49] decision-making process but often we find issues uh new challenges or ways that the product can be improved
[11:56] therefore we go back through a process we call Operations to research Arch where feedback from the research to
[12:01] operations process helps motivates improvements or changes to the product or capability and we stay within this iterative Loop until the decision maker
[12:09] is happy with the new product and capability and we can exit our process and integrate that into their
[12:13] operational decision- making process so the tool that we're going to be showing over the next couple of weeks is really
[12:19] one that we developed for the drought monitoring community and one that the drought monitoring Community has been
[12:23] using for a number of years uh to make uh to make and improve their decision-making process when it comes to
[12:30] both drought monitoring and prediction while our initial focus with our research operations Paradigm was the operational weather Community um and
[12:41] working with activ working on activities with both Noah and the National Weather Service over the past five years we've
[12:47] broaden our approach approach used within sport to address forecast challenges in other scientific communities these areas include Wildfire
[12:54] monitoring Disaster Response agriculture water management and air quality human health and as I said before another Community where our activities have
[13:03] expanded is within drought monitoring prediction and one you'll learn a lot about today and in subsequent uh
[13:09] periods and that serves as the main motivation for this training to show how the combination of land surface modeling
[13:15] and remote sensing can be used to provide important information about the land surface State uh States like soil
[13:22] moisture which are heavily affected by drought and variables that can be used to uh help better specify uh drought
[13:32] before we get into the main program today I want I wanted to finish with one visual example of how far the drought
[13:37] monitoring Community has come in the past 23 years back in the year 2000 the United States drought monitor started
[13:43] producing weekly maps of the drought extent across the United States as you can see there on the left the map this
[13:49] map from May 2nd 2000 looks familiar and shows the spatial extent of drought conditions on that day one things that
[13:56] jumps out to me is that the effective spatial resolution of these out classifications are on the order of
[14:01] hundreds of kilometers the lines tend to be very smooth there isn't a lot of detail in the map shown there and this
[14:07] was because the inputs that were used to draw these Maps were relatively coarse and there wasn't a lot of high
[14:13] resolution products and capabilities that were able to classify drought and provide finer scale resolution um for the for the authors to actually make
[14:23] more detailed assessments of of the current drought extent fast forward to the same day this year uh this map is from May 2nd 2023 this
[14:34] map shows the US drought monitor shows details on the scales of tens of kilometers at times for example look at
[14:41] the spatial detail Over Texas in 2023 compared to the spatial detail from 2000 these improvements have been realized
[14:48] because of the Innovation and development of highresolution products that allow the US drought monitor authors to get down to the spatial
[14:54] detail that you see in the maps today one of these products is the reason we are here today highresolution land
[15:00] surface modeling Frameworks such as the one employed in our sport Liz system have helped move the drought Community
[15:05] forward and we're here today to show the community a bit more detail on how we employ our system for Drought
[15:12] monitoring so I will close my introduction with a reminder that the sport mission is to develop scientific
[15:17] Solutions based on stakeholder feedback and while you're here today to learn from us we'd like to hear from you too
[15:23] below is our conf contact information and we welcome any comments suggestions or just examples of how you use data in
[15:28] our work with that I'd like to thank you for taking time out of your schedule to attend this training and I hope you
[15:33] enjoy the sessions thank you Chris for the terrific introduction to sport Liz we will now go to Dr suj Kumar to provide
[15:44] an overview of NASA land information system framework and outputs suj over to you hello everyone my name is suj Kumar
[15:58] I'm a research physical scientist in The hydrological Sciences Lab at NASA's GED space flight center I focus on studying
[16:07] the terrestrial water cycle with models and remote sensing I'm also the lead for the NASA land information system or the
[16:15] list project today I'm happy to provide an overview of the list system and how list enables the D characterization by
[16:24] combining state-of-the-art modeling and remote sensing so what exactly is the land information system at a high level it's a system
[16:36] designed for coupled and uncoupled land surface modeling and data simulation the schematic on the right here represents
[16:44] the water cycle and the area marked by the black line represents the terrestrial leg of the global Water
[16:52] Cycle in a uncoupled setup list primarily focuses on the processes of the terrestrial water cycle the processes through which precipitation on
[17:03] that falls on the land surface separates into different components of evaporation runoff and storage terms of soil
[17:11] moisture snow Etc so now data simulation is the mathematical approach to incorporating information from observations within our models so the
[17:24] overall philosophy of land data simulation systems such as Li is to use the best available observations to force
[17:32] and constrain our model estimates so there are numerous applications to the outputs produced by L it ranges from
[17:41] initializing weather and climate models Water Resources management applications monitoring of Hazards and and the associated management among
[17:52] others so here's a bit of history about list um the project started in 2002 uh evolving from two existing projects
[18:01] called the North American land data simulation system or nalas and the global land data simulation system called gldas so the nldas environment
[18:11] covered the Continental us at 1/8 degree spatial resolution whereas the GLD environment encom Encompass a global domain at quarter degree spal resolution
[18:24] so these two systems had very specific configurations and were not flexible for other regions and and configuration so
[18:32] when we started the list project we had a number of key requirements the first one was obviously to have a system
[18:39] that's flexible enough to be used at different spatial resolutions and different spatial extents we also needed a system that's able to um represent the
[18:51] land surface processes at the same spatial scale as that of clouds and precipitation processes to accurately characterize land atmosphere interaction
[19:02] so as we go to find spatial resolution it obviously means that the computational needs grow significantly and therefore we need to build the high
[19:15] performance Computing support for these simulation which the existing nldas and gldas systems lacked at that time so
[19:25] more importantly we needed the ability to incorporate remote sensing information as constraints to modeling through methods like data simulation and
[19:34] inverse modeling so we developed a fairly comprehensive environment in the last 20 years that accomplished all of
[19:42] these these requirements so here's a um schematic that shows the timeline of the list project which like I said um started in
[19:53] 2002 as a NASA fun computational technology project and over the years the list system has evolved into a
[20:01] state-of-the-art land surface and hydrology modeling system with a variety of capabilities for remote sensing data infusion and consequently this is used
[20:12] by several agencies around the world uh many for Drought monitoring so for example the list based environment is
[20:20] used by USA ID and NASA sport to develop drought characterization and to assist with with uh food security relevant
[20:33] applications so this slide um here shows the extent of um the list used at Nasa from the um development of missions all
[20:43] the way to end use applications so we use list capabilities to develop um assessments of the potential utility of hydrological
[20:53] measurements from future space missions so um these uh studies are have been conducted during the mission development
[21:02] of missions such as GPM Aquarius and smap for active missions we obviously use um the list capabilities to
[21:12] demonstrate um the use of the utility of remote sensing data sets for water cycle studies and finally there are a ton of
[21:21] hydrology applications where list is used ranging from numerical weather prediction to water security assessment to food security and quantification of
[21:37] extremes so as I said before there are several land data simulation instances that are enabled based on list around
[21:46] the world with users ranging from different domestic and international agencies to academic users at several universities around the world so this is
[21:56] a community software and has benefited significantly from investment by NASA and partner agencies and this is for example is used
[22:08] operationally by the US Air Force uh for their Global land characterization needs related to again numerical weather
[22:16] prediction transboundary water management and so on so let's get into the details of the software and the
[22:23] capabilities the list modeling Suite consists of three components it has a pre-processing environment called ldt or land data toolkit which is used to
[22:34] develop the pre-processing inputs that the modeling system needs so for example ldt handles the development of the
[22:42] modeling domain uh processing of static parameters such as land cover soils topography that list needs and all the
[22:51] other pre-processing needs related to data data simulation the modeling system lists uh is in the middle here and has a ton of
[23:01] capabilities um encompassing many different land surface and hydrology models support for meteorological and remote sensing data sets and tools for
[23:11] data simulation and so on and finally at the back end we have another environment called the land surface verification
[23:19] toolkit or lvt that enables the routine evaluation of land surface outputs from list so LBT includes the for a large
[23:29] suite of um land surface reference data products from ground and satellite and another model products so LBT can
[23:39] also um develop derive products from the land surface model outputs for example it can be used to uh develop uh
[23:48] anomalies and percentiles of land surface outputs from list which are often used to as measures of drought
[23:56] characterization so there are two two main web pages for the list project the list. gsfc nasa.gov which you see on the
[24:05] left is the main page where you can find information about the project links to uh research Publications and new stories
[24:14] and so on we also have a page on GitHub where you can get access to the code uh
[24:20] documentation example test cases uh there's also a discussion page here on GitHub where you can find Archives of
[24:29] questions from the user community and post your own questions about the use of L so this is an open source software and
[24:37] using the GitHub page you can also contribute to the software uh development uh most of the list code is
[24:45] written in Fortran and and bit of C for parallel Computing support we use a message passing interface or MPI there
[24:53] are lots of um uh external software Library that list relies on one of them a primary one is called the Earth system
[25:02] modeling framework which is a library for building and coupling Earth system models this also require libraries such
[25:10] as net CDF grib hdf geotiff mainly to enable the direct use of uh remote sensing data sets natively
[25:20] without having to reformat or reprocess the data set so this schematic here shows how EX list works the core of the system
[25:32] consists of an ensemble of land surface model and the user can select which ones to use and these models all require
[25:40] inputs of um land surface parameters such as land cover soils and vegetation topography and so on and
[25:51] these are processed by ldt and they also these models also require information on the atmospheric boundary condition such as air
[25:59] temperature incoming radiation and precipitation and so on and these land models then solve the governing equations of the soil
[26:09] vegetation and snow park medium and then predict estimates of plant surface fluxes and states such as evaporation
[26:17] runoff and soil moisture snow pack Etc so now we have observations of many of these land surface States from remote
[26:26] sensing and this is where the data simulation subsystem in list come in and using the data simulation
[26:34] subsystem U we can use these remote sensing observations to constrain the land surface model States and similarly list has a inverse modeling
[26:44] system that allows us to use the observation observation information uh to refine the representation of uh model
[26:54] parameters as I said before this has also been coupled to many other Earth system models so when is when list is
[27:01] coupled to the weather research and forecasting model for example the list access the land surface component and
[27:08] uses the atmospheric boundary condition from the atmospheric model so the idea of having this uncoupled mode when it's
[27:18] um decoupled from the atmosphere uh is that in the uncoupled environment we can study and improve the
[27:24] land surface processes and isolation before employing them in a fully coupled System System model uh a bit of word about the
[27:33] software architecture this is designed as an objectoriented environment with the three layer structure the top driver layer list has functionalities for
[27:44] supporting generic modeling features such as configuration time management Etc this also has a a middle layer called abstractions layer which in which
[27:55] we have generic representations for ke functionalities and list so for example there is a land surface model
[28:02] obstruction that can be extended for implementing uh new land surface model so in fact all the models that are
[28:10] Incorporated in list follow this structure and similarly by extending the relevant abstraction other functionalities for including uh new
[28:21] data simulation schemes mological data sets remot remote sensing data sets they can all be developed so this flexible
[28:29] structure essentially allows the incremental development of software without having to overhaul the entire system when new things are being added
[28:40] so one of the important capabilities in list is for data simulation and using this flexible software architecture that
[28:48] I described support for a ton of remote sensing measurements of various land surface variables from many different
[28:56] sensors have have been developed within list as shown here and there's also been a ton of scientific Papers written over
[29:04] the years that describ these capabilities for assimilating soil moisture snow conditions vegetation land surface temperature water storage uh
[29:16] both separately as well as concurrently so land surface as we know is is is pretty unique the heterogenity on the
[29:26] land surface is tremendous particularly compared to other Earth system components in addition we all know that the direct impact of human on
[29:37] is is is more ubiquitous on the land surface so as humans we have modified the land tremendously by building
[29:44] reservoirs and pumping water out of the rivers and acers for irrigation and so through disturbances such as
[29:52] deforestation and fires so having observations about these impacts is absolutely critical for the accurate characterization of the land surface
[30:01] processes in that sense the land data simulation capabilities is is a very critical critical capability so again land surface models strictly
[30:15] speaking provide the water balance calculations at a grid scale so we need a separate class of models called
[30:22] hydrological models to take this information and to develop estimates of water storage and flow in the river
[30:29] channels so the list environment includes a number of hydrological models that enable uh these capabilities um so
[30:38] this figure on the top right here um shows an example of the global H hydrological simulation done with list
[30:46] where you can see all the major river basins around the world so now getting to the drought side
[30:53] now how do we use all this information for Drought characterization typically we think of uh drought as a
[31:00] situation when there is a prolonged period of dry condition leading to a shortage of water right um so shown in
[31:09] this schematic from changan at all changan in 1987 so this is typically caused by an increased atmospheric demand uh or an
[31:19] absence of rainfall or precipitation and based on how severe these driving factors are um the dry conditions then
[31:26] then can then take hold on the land surface state so for example when you have a significant period with little
[31:34] rain the dry conditions will manifest in in the soil MOA state which can then subsequently bleed into deficits in
[31:42] Stream flow and and perhaps in groundwater so typically there are different types of droughts that are defined based on the variable of
[31:53] interest so precipitation based characterizations are usually called meteorological drought whereas um agricultural droughts are defined based on soil moisture or groundwater deficits
[32:06] and hydrological droughts are B defined based on Stream flow deficits because each of these variables have very
[32:13] different time scales of memory and evolution and could provide different aspects to characterizing Drought so for example in the
[32:22] recent um more recently in California when the atmospheric River events occurred the were B and flooding conditions on the land surface whereas
[32:32] the groundwater was still dry and depleted so on the surface you would think the drought is over whereas in
[32:38] reality it's not if you you know depending on which variable you're looking at so we should also remember
[32:45] that anthropogenic processes have a huge influence in the development and propagation of drought so human obstructions from rivers and AC Force
[32:54] for agriculture has a big impact on how the drought droughts develop and how severe they are and how long they last
[33:03] so therefore incorporating remote sensing input through data simulation to account for these factors is is hugely important for Drought
[33:12] characterization so I'll show a couple of examples in a second from our own research um so how exactly do you
[33:20] measure drought so the typical approach is to examine the time series of a a given variable like soil moisture at a
[33:28] location and then examine the conditions that are abnormally drier than the average condition um so you can Define different
[33:38] levels of severity based on how far the deviation at a particular time are from the normal so in fact the US drought
[33:47] monitor um defines a five level drought C drought categorization based on a percentile um setup so when the soil
[33:57] moisture percentiles are below 30 it's considered the beginning of drought for example so similarly when the percentiles are below 20 then you you're
[34:07] considered to be in a moderate drought situation and so on this is the most severe category is when soil moisture
[34:15] percentiles are below two or in other words conditions that only occur 2% of the time so now let's look at a couple
[34:24] of examples of drought characterization from list modeling and data simulation so this is an example where we have ass simulated remotely sent soil
[34:33] moisture data within a line surface model to examine how soil moisture characterization is improved so in this
[34:41] particular example from for July 2018 the left plot here shows the uh us drought monitor based characterization in the middle panel
[34:52] shows the the land surface model based drought estimate when no assimilation is inducted and on the right panel shows um
[35:00] the drought estimate with soil moisture data simulation so you can see that the drought estimation is improved um
[35:09] particularly in this southern region and encompassing Texas the time series also shows a similar comparison in this plot
[35:18] we are looking at the percent of area under drought um in this southern region the black line shows the uh
[35:27] estimate from us drout monitor the model estimate without assimilation is in green and then there the estimate with
[35:36] data assimilation is in Red so you can see that the assimilation the red line gets uh closer to uh the black line or
[35:44] the sort of the quotequote observation of the US start monitor another example where we assimilate uh the terrestrial water
[35:53] storage measurements from NASA's Grace Mission uh again again on the left you can see the US do monitor example for
[36:03] two cases one in 2011 11 and one in 2012 and in the middle panel shows the land model based drought estimate when
[36:12] no remote sensing data infusion is done and then on the right um the revised drout estimate then after we incorporate
[36:21] information from grades um so the middle panel shows that the drought estimat is is underestimated um and when Grace sta is introduced it
[36:31] improves the representation of the moisture conditions and and it produces drought estimates um closer to what the
[36:40] US drought monitor reported moving on to another example of assimilating this time vegetation condition so in this case we assimilated
[36:49] Leaf area index measurements from remote sensing so these panels here show improvements in evapor transpiration compared to four different reference
[36:59] data sets as a result of assimilating lii so in these flots uh just to help you out the uh the warm colors or the
[37:09] reddish colors indicate places where assimilation provides improvements and the cool colors are places where assimilation leads to a reduced level of
[37:19] agreement with the reference data so overall ET is improved as a result of Lai assimilation pretty much everywhere
[37:27] and you can also see some areas where larger levels of improvements are seen so these areas such as the the the corn
[37:35] Bel the Lower Mississippi the central California region they all correspond to places where there is significant agricultural activity so essentially the
[37:44] assimilation or the remote sensing infusion is is helping to characterize the impact of changes in ET from human
[37:52] activities like agriculture so sure enough this also leads to an improvement in characterizing droughts so here this
[37:59] plot here is a map of improvements in the correlation of drought intensity relative to the US drout monitor so
[38:07] again the warm colors indicate that the agreement with the US start monitor is getting better with the data simulation
[38:14] of Lai we see that again assimilation is beneficial in improving drought estimates with stronger improvements um over the areas in the
[38:25] central uh us here and these patterns also match up well with areas where there is significant irrigation activities happening as shown
[38:36] in the right here so essentially here the assimilation of Lai helped to capture the changes in vegetation
[38:42] seasonality because of human activities like irrigation and that ends up improving our representation of extremes such as um
[38:52] drought so hopefully I provided a quick run through of list and how how the land modeling and data simulation is
[38:59] essential for developing accurate representation of drought situation so list is a complex software with more than 1.5 millions of lines of code so
[39:13] those list has been ported on many many systems it still can be a non-trivial process to install it on your own um
[39:21] environment so more recently the list team helped to develop a containerized version of list to improve the ease of
[39:29] use so this containerized version is available as a app image container and it's available on our GitHub
[39:39] page so we have been thinking about how to enhance our capabilities for Drought monitoring improving upon environments
[39:48] like the nalas so nalas is a very widely used um also for Drought applications in the US but it's also Limited to
[39:57] Continental us it doesn't include any data simulation so NASA gard and Marshall have been partnering to leverage
[40:07] leverage capabilities uh in L to develop sort of a Next Generation and alas like environment by covering all of North
[40:15] America and by enabling all our uh multivariate data simulation capabilities and running the system at a much finer scale we targeting a 1
[40:24] kilometer resolution scale um many of you who use nalas also know that it's starting to have some issues with this
[40:33] meteorology and the NASA team has developed an experimental product that um leverages um NASA's remote sensing and modeling um capabilities including
[40:46] the GPM imerge data sets reanalysis like meta 2 and GEOS it and and working with our partners in Canada and bringing in
[40:56] their Canadian precipitation analysis so the vision is to employ this environment routinely at Nasa sport uh for enabling
[41:05] high resolution and routine drought characterization and building on the list based capabilities that exist um at sport so to summarize um list is a
[41:17] software that has pioneered a lot of different data land data simulation environments around the world for characterization of both land surface
[41:28] conditions and hydrological extremes like drout and I hope you a few examples um towards uh explaining this so the
[41:38] capabilities and lists for remote sensing and data infusion through a simulation are critical and for exploiting the information we have
[41:47] available from vast array of remote sensing measurements and that is necessary for um developing better representation of the land surface
[41:56] heterogenic and impacts of human management so with that I'll stop and thanks for listening thank you suj for the
[42:08] comprehensive overview of NASA's land information system we will now go to Jonathan case to provide an overview of
[42:15] sport Liz soil moisture analyses for enhanced drought situational awareness Jonathan over to you welcome to Session One of the
[42:27] application of NASA sport land information system soil moisture data for Drought our set course I'm Jonathan case of the NASA short-term prediction
[42:38] research and transition Center or Sport and I manage the sport configuration of the list which I'll describe in this
[42:45] presentation I'm also a contractor for the NASA sports center with enco Incorporated the outline of topics for
[42:56] this presentation include the motivation behind configuring an instance of list here at the nassa sports center a
[43:04] description of the climatology and realtime setup of the sport list details on the components of the 3 kilom
[43:11] resolution list a discussion of placing soil moisture analyses into historical context using percentiles and comparing inv validating sport soil moisture
[43:23] percentiles to the US drought monitor weekly Prov the early motivation for sport list was to improve Regional weather prediction
[43:32] models by generating enhanced land surface initializations using the list framework our early Publications demonstrated improvements the surface
[43:42] temperature moisture and precipitation forecasts we also showed the utility of incorporating satellite based vegetation observations into list in place of
[43:52] climatological representations of vegetation vegetation the applications of Liss at sport evolved into enhancing a forecaster situational awareness for a variety of
[44:04] forecast challenges such as thunderstorm initiation at the National Weather Service Birmingham drought analysis and applying soil moisture fields to
[44:15] understanding areas of heightened flooding flooding threats these efforts led to sport expanding to a full contiguous United
[44:24] States domain or conus as well as has targeted International applications for the NASA Ser program o conus
[44:37] regions let's begin with a highlevel diagram of the sport lless process the three kilometer resolution sport list is
[44:45] an observations driven land surfice model run driven by meteorological analysis inputs or forcings at the core of the sport list
[44:55] is the Noah land service model as you see in the middle diagram the list framework takes in a variety of static
[45:02] Fields projected onto the model grid that are used by the Nola land service model outputs of sports instance of list
[45:11] include derived Fields such as stoil moisture percentiles reformatted data for various interfaces and custom delivery delivery methods we also have a parallel version
[45:25] of the sport list that ass imates soil moisture active passive or smap satellite observations of soil moisture
[45:34] since the smap mission began in April 2015 but the majority of this presentation will be discussing the
[45:42] sport list without data simulation so a little bit about the Noah land service model at the core of
[45:52] sport list is the Noah model which is driven by obs AAL analysis the no lancour model is the
[46:02] same parameterization scheme as run in operational us prediction models such as the N GFS or GFS the model represents complex
[46:14] physical processes of the soil vegetation snow pack State and the NOA model has four standard layers at depths of 0 to 10 10
[46:24] to 40 40 to 100 and 100 to 200 cmers below below ground and Noah solves physical equations to obtain updates to the soil
[46:34] moisture soil temperature snow and heat and moisture transport between the model layers and back into the atmosphere let's take the next few
[46:45] slides to look at the input static and time varying fields that go into the sport L simulation soil properties are
[46:53] represented by the state soil Geographic or Stat go database stats go consists of 19 unique soil classes representing sand
[47:03] silk clay composition and the accompanying physical properties defined in lookup tables worth noting is that in the sport
[47:12] list the soil characteristics are uniform in the entire vertical column at every grid point the land use or vegetation inputs
[47:21] come from the 20 class international geosphere biosphere program database which which is based on NASA modus satellite observations as with the soil
[47:32] classes lookup tables Define many of the physical properties of how the vegetated surface interacts with incoming radiation and extract water from the
[47:40] soils at various rooting depths other static inputs required by the list include topography which is important to downscale coarser
[47:52] resolution meteorological inputs to the higher resolution list grid maximum snow albo in the upper right represents the
[48:00] reflectance of snow covered surfaces especially freshly fallen snow which will have the highest albo or reflectance and the bottom center is a
[48:11] soil temperature bottom boundary condition applied to the 100 to 200 CM lowest layer as a bottom soil
[48:19] temperature climatology as a luded to earlier one of the unique contributions to the sport list is the incorporation of realtime
[48:31] satellite derived green vegetation fraction or gvf gvf is defined as the percent coverage of healthy actively transpiring
[48:42] transpiring vegetation it partitions incoming energy into sensible latent and ground heat fluxes which determines surface heating evaporation into the atmosphere and
[48:52] warming of the soil layers traditionally a monthly cont ology has been used in models to represent the seasonality of vegetation
[49:01] coverage and shown at right here is a monthly monthly climatology uh representing the green vegetation fraction for the month of May
[49:11] and a limitation with this method is that vegetation is always represented the same way from year to year and
[49:18] season to season so this might not actually reflect might not accurately reflect vegetation response during during an anomalous weather or climate
[49:28] episode such as drought or delayed or early green ups in the spring months therefore since September 2012
[49:38] sport has been incorporating real-time satellite vegetation derived from the beers beers instrument the Noah nesdis organization produces daily updated beers green
[49:49] vegetation fraction over the entire Globe at 4 km resolution comparable to the sport List's 3 km grip
[49:57] resolution and at the right you can see is a daily average beers gvf during the month of May 2013 when a delayed Greenup
[50:06] occurred across much of the continental US and if we look at the difference between the monthly average beers gvf
[50:17] input and the climatology gvf it's quite apparent that during May 2013 there's much lower gvf in the beers product
[50:26] across much of the Upper Midwest and the eastern US given by the dark brown Shades this delayed green up occurred
[50:35] during spring 2013 because there were predominance of well below normal temperatures especially over the Northern Plains the Midwest and
[50:44] extending into the southeast us so situations like spring 2013 can significantly alter the soil moisture solution as below normal vegetation
[50:55] leads to decreased evap evapo transpiration and more moist soils as a result in contrast in early Greenup
[51:03] which occurred in Spring of 2012 can cause enhanced evapo transpiration and enhanced soil drying during anomalously warm early spring
[51:14] periods so let's shift gears now to talk about an overview of the sport list simulation in terms of the historical
[51:22] spin-up climatology and the realtime components components so the sport lless timeline consists of a multi-decadal spin-up run where the
[51:31] soil States respond to time varying input atmospheric forcing over a long period of time this provides a
[51:39] sufficiently long period for the soils to reach an equilibrium state with the input input meteorology using outputs from the long
[51:48] duration spinup we then reran the historical period to develop the climatology period spanning 1981 to 2013 and the climatology run is then extended
[51:59] to real time and it's continuously cycled every six hours to produce routine outputs at an hourly output
[52:07] frequency in real time there is also an experimental forecast component to the sport list extending out to two week forecasts with
[52:16] every six hour cycle of the list the spin up in the 1981 to 2013 climatology of sport list is driven
[52:28] exclusively by the North American land data simulation system Phase 2 or NL 2 NL 2 consists of hourly analyses at
[52:38] about 14 kilometer resolution and it's managed by the environmental modeling Center in real time satellite rain gauges and radar observations contribute
[52:49] to the observational based analyses nld 2 since NL S 2 has about a 4day latency in real time we bridge the gap between
[53:01] the historical to T minus 4 day time period to real time using the global data assimilation system or gas analyses
[53:12] and that BR minus four days to the present time with each cycle and this bridg is the gap between
[53:21] nl-2 latency and the current time and uh by continuously cycling we are always producing analyses with no
[53:31] more than two to eight hours latency at any given moment additionally 1 kilometer high resolution hourly precipitation
[53:40] estimates are Incorporated from the multi- radar multi- sensor or mrms product the mrms is replacing the precipitation rates from the gas
[53:51] analysis in that T minus 4 days present the high resolution Mr RMS product also builds in detailed short-term
[54:00] precipitation information into the analyses which can be important during active precipitation episodes so the sport list run goes back
[54:09] five days of each cycle and subsequently overwrites outputs as new nl2 analyses become available this ensures that the
[54:18] long-term solution of sport list is consistent with the nl2 driven climatology database sport list also includes the
[54:28] experimental two-e forecast of soil Fields driven by the US's Global forecast system or GFS model these forecasts can provide outlooks of
[54:39] potential rapid drying episodes or drought relief that can be very important for pre-planning and response activities the next few slides show
[54:51] sample output variables from the sport L web viewer on this slide is The Zo 0 to 10 cm volumetric soil moisture or VSM
[55:00] which is defined as the fraction of water volume per total soil volume and for visualization purposes we scale this
[55:08] by a factor of 100 the theoretical maximum as defined in the soil lookup table is just under
[55:15] 0.5 or 50 in the visualization image here for clay type soils that have high porosity or lots of small pores taking
[55:24] up the the spaces in the soil vol meanwhile Sandy soils with coarse spaces have fewer spaces between
[55:34] the granules of sand and thus have a lower soil water holding capacity volumetrically so in the Zer to 10
[55:42] cimeter volumetric soil moisture image at right the black Contours indicate areas of active precipitation in the previous hour and the vssm often closely
[55:53] follows the pattern of soil type due to the defined water holding properties of each soil classification the relative soil
[56:06] moisture or RSM is the ratio of the current volumetric soil moisture between the defined wilting and saturation
[56:13] values for a given soil classification Urban and water points are masked and show as white shading in
[56:21] this spot and urban points are masked because the Noah land surface model defin a very narrow dynamic range
[56:28] between the wilting and saturation points and therefore responds overly fast to weding and drying periods the image at right shows the 0
[56:40] to 100 cm deep RSM with very low percent saturation values over the high plains as outlined in the black oval
[56:50] here meanwhile High values of RSM nearing saturation are found across the California sieras the Rockies in the
[56:59] western us and over Southeast Canada many of these areas are very moist because of melting snow at this
[57:09] time so this slide shows a comparison of how the RSM at different Noah soil layers responds to incoming
[57:17] precipitation the top 0 to 10 cimeter layer RSM in the upper left responds almost instantly to incoming rainfall or
[57:26] the lack thereof one can see that the soil is quickly moistened from rainfall but subsequently dry after the rainfall
[57:34] ends in this top layer the drying can be due to infiltration of water into lower model layers Andor evaporation back into
[57:43] the the atmosphere the 10 to 40 C the 10 to 40 cimeter layer in the upper right also
[57:50] responds fairly quickly to rainfall in a matter of hours but with a bit more delay in the moistening
[57:56] and drying compared to the top 0 to 10 cm meanwhile the deepest two layers behave quite differently with a longer
[58:05] delay and moistening of the 40 to 100 cim layer from heavy rainfall it can take days to weeks or longer for the 40
[58:14] to 100 cim layer to respond to incoming rainfall or the lack of rainfall and finally the 100 to 200 cimeter layer in
[58:23] the lower right has a barely perceptible perceptible response to this two to three day rainfall event it can take
[58:30] months to even years for the Deep soil layer to reach a balance with the input meteorology especially during long-term
[58:38] drying drying episodes to help sport users understand soil moisture changes over various time frames we also produce temporal change
[58:50] fields in the total column 0 to 200 CM RSM the one to two week changes align with the US drought monitor weekly
[59:00] update frequency and help to capture short-term changes in soil moisture in this example drying occurs in the two weeks leading up to May 1st
[59:12] 203 2023 along the west coast Midwest and the Northeast us a moistening trend is found over the
[59:22] California sieras Rockies and Northern lanes and that's largely due to the snow melt infiltrating into the top
[59:34] soil the two we to one month time changes in the total column RSM helped to Target episodes of flash drought or
[59:43] drought drought relief in the image here we have a one month change showing a drying signal occurring during the month of April 2023
[59:53] ac across the west coast and Arizona as the heavy winter precipitation ended during April and that resulted in a
[1:00:03] significant soil drying compared to the month of March moistening s signals meanwhile are occurring over Southeast Texas and from
[1:00:12] Eastern Florida up to the Middle Atlantic region a snow melt signal is again prevalent across the mountains of
[1:00:19] the West Southern Canada and the Northern Northern Plains the three six-month time changes in the total column 0 to 200 CM
[1:00:31] RSM targets seasonal soil moisture changes in this example the six-month drying since October 2022 is confined to
[1:00:41] Florida and the Southwest but there's large areas of substantial moistening that occur over much of the higher elevation of the
[1:00:50] western us due to the prolific uh rain and snow season they had this past winter winter and then in the Upper Midwest due to
[1:00:58] snow melt and then substantial precipitation that moistened the soil from East Texas into the Northeast United States the annual
[1:01:11] change map is able to provide users with year-over-year change to compare current soil conditions to a year
[1:01:22] ago compared to one year ago on May 1st we we see a corridor of drying that's extends from the Northern High Plains
[1:01:31] southeastward into Northern Florida with focused areas of moistening compared to a year ago seen over the Northern High Plains the Upper Midwest
[1:01:42] Eastern Texas and the Inner Mountain West and also the Middle Atlantic area so while soil moisture and its
[1:01:53] changes are useful by themselves plac the values into historical and climatological context are quite valuable to increase situational
[1:02:02] awareness we have therefore constructed daily soil moisture climatologies spanning 1981 to 2013 initially we you develop these
[1:02:12] climatological distributions for each County of the lower 48 states of the United United States in the example shown here we have
[1:02:21] a frequency distribution of the 0 to 200 cimer full column RSM for Madison County Alabama for the 29th of
[1:02:31] November all of the list Noah grid points that reside within Madison County are grouped together for each output day
[1:02:39] of the 1981 to 2013 climatology period And in the chart above we see that the 0 to 200 cimeter RSM bin value of
[1:02:50] 55% has occurred about 350 times in Madison County during that 33 year chology chology period so by seeing where the current
[1:03:00] soil moisture values lie within the County's historical distribution we come up with ranked percentiles at each grid
[1:03:08] point to create maps of the percentiles as shown in the upper right we then apply the drop Community
[1:03:16] standards for relating the ranked percentiles to Drought categories and the definitions are as follows soil moisture less than or equal to to the
[1:03:26] 30th percentile is considered d0o or unusually dry soil moisture less than or equal to the 20th percentile is D1 or
[1:03:35] moderate moderate drought uh soil moisture less than or equal to the 10th percentile is D2 or severe drought less than or equal to the
[1:03:44] fifth percentile is D3 or extreme drought and less than or equal to the second percentile is D4 or exceptional
[1:03:52] drought and these percentile standards are not only applied to soil moisture here but to numerous other inputs and
[1:04:01] indicators that go into the various inputs that the US drought monitor weighs in on their weekly products also worth noting is that that
[1:04:17] vertical dash line is the county average mean value of the 0 to 200 CM relative soil moisture
[1:04:26] and that's for Madison County Alabama for the actual day of 29 November 2016 and in this example you can see
[1:04:34] that the county average value is way on the dry side of the tail of the distribution here so in this slide we demonstrate
[1:04:45] anomalously dry soil moisture over Madison County Alabama and severe County Tennessee for the 28th of November 2016
[1:04:54] which is the day of the gap ber Tennessee deadly Wildfire event so to describe in a little more
[1:05:02] detail the these histogram diagrams the gray bars represent the distribution of the 1981 to 2013 chological soil moisture values for
[1:05:13] the 28th of November the vertical colored bars are the reference percentile thresholds that are defined for the drought thresholds
[1:05:23] on the left dry side of the distribution as well as the mirrored wet thresholds on the right side of the
[1:05:32] distribution the vertical dash line as I described earlier is the present day County average values of 0 to 200
[1:05:39] cimeter relative soil moisture and in this case it's for November 28th 2016 and the corresponding 0 to 200
[1:05:48] cimer relative soil moisture values for the reference percentiles as well as the county average value is listed in the
[1:05:56] table at the upper right of these charts so now if we animate the daily histograms for Madison
[1:06:06] County on the upper left and severe County in the upper right during the year of 2016 we see that there's a
[1:06:14] dramatic transition from anomalously moist conditions early in the year to exceptionally dry conditions by mid to late Autumn which was what led up to the
[1:06:25] Gatlin Wildfire event in severe County Tennessee if you keep an eye on the vertical dash line You'll see how the
[1:06:32] county average RSM values are changing from day to day during 2016 with the an initial decline during
[1:06:40] the Spring months but then as you get into the late Summer and Autumn months you can see that vertical dash line
[1:06:47] really starts declining dramatically to the left shifting toward anomalously dry values so if we let that animate a little bit
[1:06:57] more as we go through the Autumn months you can see the mean average values shifting further and further left onto
[1:07:05] the dry tail of the distribution for compared to the 33e historical climatology these soil moisture histograms can also reveal information
[1:07:18] about weather and climate regimes at a given County and their seasonal behavior in this slide we're Pres
[1:07:25] presenting an animation of soil moisture distributions for talami County California on the first of each month spanning May 2022 to April
[1:07:37] 2023 this County resides largely in yose National Park in the central Sierra mountains of California notice there's a strong
[1:07:48] drying Trend in the 1981 to 2013 soil moisture distributions during the dry season of months of May to October while
[1:07:58] there's a steady moistening Trend that occurs from November to April as the rainy season sets in across central
[1:08:06] California in these distributions in for to Alam County the wide range of values suggests that both drought and wet years
[1:08:15] are equally common given the wide range of historical Solutions of soil moisture that occur in this County so now let's compare to wami
[1:08:25] County normals to Del Norte County which is along the coast in Far Northwestern California here we see an even stronger
[1:08:34] drying trend from May to October during the dry season but in Del Norte County California there's a very rapid
[1:08:44] moistening in just two months from November to January with the onset of the wet season another contrast between these
[1:08:52] two counties is how much tighter the historical soil moisture distribution is in Del Norte County suggestive of a much
[1:08:59] more consistent climate regime compared to the central Sierra Nevada mountains further Inland so in addition to the county
[1:09:12] based climatologies and percentiles we also generate gridpoint based climatologies and percentiles these percentiles are generated for all cumulative layers of
[1:09:23] the volumetric soil moisture 0 to 10 cm 0 to 40 cm 0 to 100 cm and 0
[1:09:31] to 200 CM we apply a onewe centered moving time window to construct climatology distributions at each grid
[1:09:40] point and then for each day of the year each grid Point has a historical sample size of 33 years times seven days of the
[1:09:49] moving time window for a total of 231 points at each grid point shown at right here is the total column 0 to 200 cimer
[1:09:59] percentile for May 1st 2013 over the central central plains so let's compare that now with the the gridpoint based percentile map
[1:10:09] with the county based percentile map for the same day and there's several benefits to to having the grid Point
[1:10:16] based method such as a fixed sample size at each point compared to variable sample size for the counties which have
[1:10:24] different sizes and if we toggle back and forth here we can see that there's a better spatial continuity in the grid Point
[1:10:33] based percentiles here compared to the county based percentiles which shows a lot of County border edges which is not
[1:10:42] evident it's much smoother feel than the grid Point based percentiles also Urban corridors are not mask in the grido based percentiles and
[1:10:52] it has a full domain coverage outside of conus where the counties are confined to within the continental
[1:10:59] US and finally percentiles can be examined for shallow and deeper layers thus spanning different time scales of
[1:11:08] measuring soil moisture anomalies so let's wrap up session 1B with a comparison and validation of the 0 to 200 cimer relative soil moisture
[1:11:19] County based percentile drought categories to the US drought monitor official we product this first example compares the
[1:11:28] sport list drought categories for the southern ples during an exceptional drought period from 2011 to 2012 we start with a map comparison of
[1:11:38] the sport list percentiles in the upper left to the US drought monitor map in the bottom center or early August 2010
[1:11:46] when conditions were fairly moist over the southern planes except for Louisiana the plot at right shows time
[1:11:54] series of aerial coverage and drought categories for the sport list in the top row versus the US drought monitor in the
[1:12:02] bottom panel spanning 2010 to 2012 the vertical dash line in the time series plots is showing the position of
[1:12:12] early August 2010 where you can see the there's fairly minimal drought aerial coverage at this time over the Southern
[1:12:22] Plains however if we advance by one year we can see that extreme to exceptional drought has set in across much of the
[1:12:29] Southern Plains summer 2011 featured persistent extremely hot temperatures with little to no rainfall across much of Texas and Oklahoma witch Falls in
[1:12:41] Northwestern Texas had 100 Days with maximum temperatures of 100 Fahrenheit or higher establishing the hottest summer on record there at this location
[1:12:51] in the time series both the sport list and the drought monitor shows exceptionally high amounts of coverage of extreme and exceptional
[1:13:03] drought uh in the 20 to 40% aerial coverage of D4 exceptional drought in the US drought monitor prodct with a
[1:13:12] little lower peak in the sport list if we move forward another year into early August 2012 we see that the
[1:13:19] drought has shifted northward more toward the central plains and in fact the large parts of the conus experienced
[1:13:26] an extreme flash drought that began in June June 2012 one characteristic worth noting in the time series plot in the upper right
[1:13:35] is that uh for this case study period and this region at least the sport list appears to have an uptick in the
[1:13:43] coverage of exceptional drought areas slightly before the official US drought monitor product uptick occurs so this feature suggests that strong dry soil
[1:13:54] moisture anomaly Trends in sport L may help to be a leading indicator of Rapid drought drought onset this next Example revisits The
[1:14:05] Flash drought that led up to the Gatlinburg wildfire in late November 2016 during late August a mount modest
[1:14:12] drought aerial coverage is seen across the southeast us especially Georgia and Eastern Eastern Tennessee however by late November the
[1:14:22] drought dramatically expanded in both coverage and intens due to a combination of well above normal temperatures and virtually no
[1:14:29] rainfall from September through most of November November 2016 the sport list does have greater aerial coverage of D4 drought than the
[1:14:38] US drought monitor product but the ramp upward in all drought categories Trends very closely with the US drought Monitor
[1:14:47] and again May slightly precede the uptick in the drought categories and an official US drought monitor classifications so finally finally let's
[1:14:59] close out with a validation of the 0 to 200 CM relative soy moisture drought categories against the whole period of
[1:15:06] record of the US drought monitor from year 2000 to 2022 we validated sport lless County based percentile drought categories in
[1:15:16] all the regions of the con shown here and We examined the bias and of the drought aerial coverage as well as how
[1:15:25] well the aerial coverage correlated with the drought monitor weekly product so let's look at the statistics here on this slide which shows the bias
[1:15:35] in the table at left and the correlation coefficient in the table at right so a bias of zero represents an
[1:15:44] unbiased aerial coverage and a correlation of one would be the perfect correspondence between the two products so here we see the best overall
[1:15:54] validations statistics occur over the southeast us Southern Plains and the Northern Plains regions a combination of low aerial coverage bias and high
[1:16:04] correlation occurs in most of the drought categories the southeast Us in particular has the best overall validation with a correlation
[1:16:14] coefficient above s out to the D4 drought category and that suggests that uh soil moisture deficit is an important
[1:16:23] component to the US drought monitor assessments over the southeast meanwhile we see that the sport L percentiles tend to over
[1:16:33] represent drought coverage in Florida the Northeast us and the Midwest given the larger positive biases indicated here and in the southwest us the sport
[1:16:44] lless percentiles generally underrepresent the drought coverage suggesting that soil moisture deficits don't play much of an important role in
[1:16:54] or as important of a role in determining drought categorization in the southwestern southwestern us so in summary sport has designed its
[1:17:04] own configuration of the land information system over the Continental us at around 3 kilometer resolution coining to the sport list it provides
[1:17:13] historical and realtime outputs of land surface variables with a primary focus on soil moisture and accompanying percentiles to contribute to informed
[1:17:23] decisions on drought categorization the sport list drought categorization based on deficits in soil moisture percentiles verifies best
[1:17:33] against the official US drought monitor weekly product in the Central and Southeastern US future endeavors include conducting a similar validation of
[1:17:43] drought categories using the cumulative layered sore moisture grided percentile product and we're also teaming up with the Goddard space flight center for an
[1:17:54] expanded and improved land data simulation system that will cover all of North America at one kilometer resolution it'll be run in the cloud and
[1:18:03] it will serve as a replacement to the sport list we will also expand upon the experimental forecast soil moisture
[1:18:10] States and percentiles by producing Ensemble and probabilist probabilistic outlooks of soil moisture changes which could help to improve short-term
[1:18:20] outlooks of flash drought scenarios so I'd like to thank you for your time and attention and I hope this
[1:18:26] session has been informative and valuable to those who are interested in this thank you very much thank you Jonathan for the terrific
[1:18:38] overview of sport Liz to summarize some of the things that we've learned today the NASA land information system or Liz provides a
[1:18:48] framework for the comprehensive characterization of the land surface and hydrological extremes such as drought the capability of remote sensing
[1:18:59] data infusion through data assimilation enables the representation of land surface heterogeneity and human management management impacts sport Liz provides realtime
[1:19:12] surface fields and soil moisture percentiles for informed decisions on drought looking ahead to next week in order to reinforce what we learned today
[1:19:26] and to prepare you for part two we've prepared a micro lesson which you can find on the training page the micro
[1:19:34] lesson will allow you to independently practice the Knowledge and Skills from today's webinar we hope that you will
[1:19:42] complete this before week two so that you'll be better prepared for the future Parts in next week part two will extend
[1:19:50] the concepts covered today to focus on early and establish applications of Liz for Drought analysis in operations as stated earlier there will
[1:20:03] be one homework assignment for all three parts of the training answers must be submitted via Google form which can be
[1:20:10] accessed from the training page on the rset website homework will be made available on May 31st with a due date of
[1:20:18] June 14th a certificate of completion will be awarded to those who attend all live webinars and complete the homework
[1:20:25] assignment by the deadline you will receive a certificate approximately 2 months after the completion of the course below is the contact information
[1:20:37] for today's trainers along with links to the sport web page ret website and social media if you enjoyed today's
[1:20:46] webinar we hope you won sign up on the rset list serve to receive notifications of future trainings and please follow us
[1:20:53] on Twitter and YouTube we will now transition to the question and answer portion of today's training and thank you so much to
[1:21:11] everybody who has been submitting your questions we do encourage questions uh not only today but throughout the uh
[1:21:17] entirety of this three-part webinar Series so big thanks to everybody that has uh been sending them in so to jump
[1:21:23] right into it uh given the limited amount of time that we have left uh question number one is Sport data
[1:21:29] available in every part of the world and whoever answered that feel free to unmute and answer okay well I guess I'll answer
[1:21:38] NASA sport data are publicly available and Sport Liz data availability will be addressed in the third session of this
[1:21:45] webinar series uh sport Liz is currently only valid over the continental United States but there are many other
[1:21:51] applications of Liz internationally uh including on the continent of Africa as well as South Central and Southeast Asia
[1:21:58] Etc so we hope that you'll join us for part three we we'll be able to learn a
[1:22:02] lot more about sport availability question number two how can we process a sequence of multi- satellites for example Sentinel 2
[1:22:12] multispectral instrument to analyze the trend of which parameter for 20 years and looks like there's a second part to
[1:22:19] this question to study the evolution of land cover for approximately 30 years which parameter should we use and how
[1:22:25] can we analyze a sequence of satellite imagery for this period of 30 years I will give any of the trainers a moment
[1:22:32] if they wanted to unmute and and attempt to answer these questions the first part to me is a
[1:22:41] little unclear uh it says multisequence of multi- satellites uh for 20 years well Sentinel 2 uh first Sentinel
[1:22:49] Sentinel 2A was launched in 2015 so it's probably not going to give you that time series that you're after that 20 years
[1:22:57] uh but there are different ways of using multi- satellites for different applications a lot of rset trainings
[1:23:03] have covered that so it really depends on what parameter that you're looking to uh to monitor or to observe and so maybe
[1:23:10] if you wanted to rephrase your question and answer or ask it again we might be able to address that uh the second part
[1:23:17] says to study the evolution of land cover for approximately 30 years which parameter should we use and how can we
[1:23:23] analyze the sequence of satellite imagery for this period of 30 years uh if you're looking for a 30-year time
[1:23:28] series the best bet is probably going to go with the different landat missions because they give continuity for over 50
[1:23:34] years of land cover and land change so I would address that there's different ways of using multispectral data to
[1:23:43] assign pixels different land cover categories they're based on both statistical approaches as well as machine learning approaches we do have
[1:23:52] ret trainings that are focused just on on this application so whoever asked this question I hope that you would go
[1:23:58] to the rset website and find that training that specifically deals with this application um but if we didn't
[1:24:05] answer it to yeah if if if your question was not answered please do feel free to ask it again and we'll try to address it
[1:24:11] in the limited time we have so question number three uh how can yes yes please this is Kevin V at sport and I have
[1:24:19] Jonathan K with me I'm afraid Jonathan's audio uh wasn't going so well in his office uh could he address the question
[1:24:26] one at this point really quickly absolutely Jonathan yeah I'm glad your microphone is now working please do
[1:24:30] unmute and feel free yeah so uh in terms of sport data being available in every part of the world uh I think it's a
[1:24:39] two-part question here one is that sport data in general are publicly available and we'll be addressing that in some of
[1:24:47] the session three presentations but right now the sport list solution itself is valid over the continental United States but there are
[1:24:57] many other applications of the list internationally Africa Southeast South Central Asia the Salas the famine land data simulation fuse net uh certainly uh
[1:25:09] suj Kumar could even address some of those other applications internationally yeah thanks John so this is um used for many land data simulation
[1:25:24] system instances the the global land data simulation system called gas which is run at Gard uh on at 25 kilometer
[1:25:35] grid scale uses list um and there are the fuse net effort that um John mentioned also runs list on a global
[1:25:44] configuration as well as um higher resolution configurations over Central Asia um and Africa um and there are um
[1:25:54] again and researchy components to uh similar eldas instances using list over the Middle East and North Africa um and
[1:26:04] over India over South America and so on so many of them are you know done by uh
[1:26:12] the individual organizations in those countries or in those regions so feel free to contact us and we can U provide
[1:26:20] you more details teric thank you J and Jonathan um question number three how can we integrate the idea of land surface
[1:26:29] temperature estimation with the factors that lead to Drought can I say that land surface temperature has a direct impact
[1:26:36] on drought and whoever answer that feel free to unmute hi yes this is Richard Heim no's National centers for environmental
[1:26:51] information drout is basically an imbalance between water supply and water demand and really water supply is precipitation so if you have a lack of
[1:27:01] precipitation or less precipitation than is normal for an area you have a tendency towards drought to develop and
[1:27:08] water demand in nature is evapo transpiration so the hotter the temperatures the more evapo transpiration and abnormally high
[1:27:15] temperatures can increase evapo transpiration and it generally tends to exacerbate existing drought conditions but drought is largely
[1:27:24] initiated by a result of reduced water supply or a lack of precipitation there is one thing that
[1:27:33] is is really becoming more of a research interest in recent years and that is Flash drought where hot temperatures
[1:27:43] coupled with lack of precipitation can result in the rapid development of drought um so temperatures are important but the m
[1:27:54] main thing is lack of precipitation Richard thank you so much yeah please go have something to add to
[1:28:02] that too can you hear me we sure can yeah so um this is Chris hay from NASA sport so
[1:28:11] while it doesn't really you know Richard's answer was really good about talking about how uh um the connection
[1:28:16] between um temperature and drought can can be considered uh we do use land service temperature as a metric for
[1:28:23] monitoring monitoring uh conditions of drought uh through the relationship between evapo transpiration and changes in land surface temperature
[1:28:31] and some energy balance approaches we can use land surface temperature to actually tell if vegetation is stressed
[1:28:37] so there's a couple of products that use land surface temperature um as a drought indicator um but as Richard said the
[1:28:43] actual physical connection between land surface temperature and drought is is more of one related to water and
[1:28:49] obviously a lack of water will lead to elevated land surface temperatures and that's kind of the connection that we
[1:28:53] can see from space when we can tell that vegetation is stressed or something like a flash drought might be developing so
[1:29:00] while there's not a direct connection with the actual drought we can actually use l service temperature to give us
[1:29:04] some more information about how uh water stress and vegetation stress is evolving in the land surface great thank you so much uh both
[1:29:15] Chris and and Richard I think we have time for one last question um so question number four what are the key
[1:29:22] components or steps involved in the process of data simulation how how do different data simulation methods such
[1:29:28] as the common filtering or variational simulation simulation work yeah Sean this is CJ I can um try
[1:29:37] to answer that so very simply put at a very high level data simulation is the the process where you um sort of do a
[1:29:46] waiting between your model predictions and your observational inputs so if you trust your observations more then you uh
[1:29:54] uh nudge your system more towards the observations or if you don't trust your observations you stick with the model
[1:30:00] right so as a crude analogy is what we sometimes use is called uh the Sleepy driver scenario where let's say you're
[1:30:07] driving on the road and you're feeling sleepy and then every few seconds you open your eyes and then correct your um
[1:30:16] you know your path right so having that opening the eyes is sort of analogous to having those infrequent observations you
[1:30:24] correct your behavior that's essentially the idea so the the most important thing in in the data The Art of Doing data
[1:30:31] simulation is is knowledge of Errors how much do you trust your observations and how much do you trust your model and so
[1:30:40] specifying those errors is how uh is one of the most important inputs for data simulation and there are lots of uh
[1:30:47] simulation methods out there um as the question alludes to Calon filtering and variational methods are some of the
[1:30:55] common approaches and U they're mathematical forms in which they they provide an update um by in after
[1:31:03] incorporating observations are different so variational methods typically solve some sort of objective uh function um minimizing the errors and and then come
[1:31:13] up with the updated State um the the filter is also essentially similar but the approach typically is sequential
[1:31:20] that you know you every time you get get the observation you you provide an updated model State
[1:31:27] and it's typically based on estimating the minimum variance um between in the difference between the model and your
[1:31:34] observations so hope that helps great thank you so much suj uh I do want to respect the time I do see
[1:31:43] that we're a little over so first and foremost I want to thank everybody all the participants for joining wherever
[1:31:48] you're joining from thank you for for taking out this last hour and a half to learn about sport Le and how it can be
[1:31:53] FL for soil moisture estimates so and also I want to thank all of our Our Guest trainers today Chris Hayne suj
[1:32:01] Kumar and Jonathan case thank you for the wonderful present uh presentations that you gave and I also want to thank
[1:32:08] all of the uh the sport team that might not be maybe presented today but that we're working in the background to help
[1:32:14] uh to help make this a successful first part of this three-part training also want to acknowledge the arset team who's
[1:32:19] also been working uh in the background to make this uh successful as well we do want to remind everybody the micro
[1:32:25] lesson is available on the training page so do please access that start working on it and we hope that you will have
[1:32:31] that completed uh before next Wednesday the second part of this webinar series it will not be graded but it will help
[1:32:38] prepare you for all the material that's going to be covered over the next two weeks so please do go to the rset
[1:32:42] training page access that and we hope to see everybody back here uh in one week's time for the second part of this webinar
[1:32:49] Series so stay safe and we hope to see you soon thanks
