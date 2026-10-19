# Introduction to OpenET, Part 1/3

`https://www.youtube.com/watch?v=QHqWrO2HMco` · id 149 · 1:41:08 · module 7 — 054-new-sensor-highlight-ecostress

[00:04] Hello and welcome. Welcome to this webinar series on applications of remote sensing based evapotranspiration data products for
[00:13] agricultural and water resources management. management. My name is Amita Mehta and this webinar series is organized by NASA's
[00:24] Applied Remote Sensing Training Program. Before we start with today's session, here are some prerequisites. There are three sessions on ARSET
[00:35] website. website. Um they provide information about fundamentals of remote sensing, including NASA's Earth Observing Fleet and also remote sensing for water
[00:45] resources management. Also, there's an introductory webinar that was offered a number of years ago that provides information about remote sensing of
[00:57] evapotranspiration and some fundamental definitions about evapotranspiration. So, just to start with, what is evapotranspiration? Um we already know
[01:08] it is really sum of evaporation from land surface and transpiration from plants. plants. Evapotranspiration or ET, it transfers
[01:20] water from land surface to atmosphere in vapor form and that requires energy to convert that liquid to uh vapor.
[01:30] ET is important because it's critical component of the water and energy balance of climate, soil, vegetation interactions.
[01:40] interactions. It is also useful for determining agricultural water consumption, assessing drought conditions, developing water budgets, monitoring aquifer
[01:50] depletion, and monitoring crops and carbon budgets. However, it is challenging to measure ET. ET. As shown here, first of all, it is
[02:02] highly variable in space because it depends on many variables, including solar radiation at the surface, that's the energy required to
[02:11] evaporate water, land and air temperatures at the surface, surface, humidity, humidity, surface winds, soil conditions, vegetation cover and types. All these
[02:23] are required. So, measuring ET is challenging and it is basically estimated estimated from combinations of observations and
[02:34] models. models. And that brings us to our training objectives for this webinar series. So, by the end of this training, we will
[02:44] be able to identify state-of-the-art techniques to derive ET using remote sensing, sensing, recognize how ET data can be used in
[02:54] water resources and agricultural management, and access OpenET and EcoStress data products for applications. applications. OpenET is a
[03:07] a data product derived from multiple satellites, and EcoStress ET is a product that is derived from EcoStress
[03:15] sensor observations, which are taken from NASA's International Space Station. The training outline is given here. There will be three sessions, each 1 and
[03:28] 1/2 hour long, and they will be offered in English with materials available in Spanish. Today's session will be about OpenET,
[03:39] and it will be presented by Forrest Melton from NASA Ames Research Center. Center. Second session will be on June 8th, and
[03:49] that will focus on EcoStress ET, and that information will be provided by Gregory Halverson from NASA JPL.
[03:58] The final session on June 15th will have exercises where we will have instructions how to access and analyze
[04:07] open ET and ECO stress ET data products. Today's outline is given here. We'll start with information about ARSET program
[04:21] and then Forrest Melton will talk about open ET uh focusing on data products, data portal, and applications.
[04:33] There will be one homework assignment given at the end of this webinar series on 15th of June
[04:39] and answers must be submitted via Google Form accessed from ARSET website. The homework will be due on June 29th,
[04:48] 2022. 2022. And a certificate of completion will be awarded to those who attend all live webinars, complete the homework
[04:58] assignment by the deadline, and then you will receive the certificate from my NASA Martins in about 2 months period
[05:06] after the completion of the course. We'll have some information about ARSET for those of you who are new.
[05:16] Applied Remote Sensing Training Program or ARSET is part of NASA's Applied Sciences Capacity Building Program. For more than 10 years, now ARSET has
[05:27] been empowering the global community through online and in-person remote sensing trainings in these thematic areas. areas. So, water resources, air quality,
[05:38] disasters, land, and climate, which is recently added to our training. ARSET's goal is to increase the use of
[05:50] remote sensing and earth science modeling data in decision making through trainings for professionals in the public and private sector, environmental
[06:00] managers, and policy makers. All ARSET training materials are freely available to use and can be adapted for
[06:09] your curriculum. If you use the methods and data presented in ARSET trainings, please acknowledge the NASA Applied Remote
[06:18] Sensing Training Program. And here's the website where a lot of information and all the training material can be found.
[06:29] So, that brings us to our today's session about OpenET data products, data portal, and applications. And we invite
[06:39] Forrest Melton to provide this information. information. Forrest Melton is a senior research scientist with the NASA Ames Cooperative
[06:49] for Research in Earth Science and Technology and California State University, Monterey Bay. Forrest currently serves as the program
[06:59] scientist for the NASA Western Water Application Office and as an associate program manager for the NASA Earth
[07:07] Science Applied Sciences Water Resources Program. Program. Forrest has worked on the development of modeling and data assimilation
[07:17] frameworks, including the Satellite Irrigation Management Support or SIMS system, the Terrestrial Observation and Prediction System TOPS, and NASA Earth
[07:29] Exchange or NEX. He received the NASA Exceptional Public Service Medal earlier this year for his efforts efforts in the availability of satellite data
[07:41] for a range of applications. His research interests include remote sensing of evapotranspiration and agricultural water management. He serves as the project scientist for
[07:54] OpenET, a multi-institute project to provide evapotranspiration data products derived from remote sensing. So, here's Forrest. Thanks, Mirada.
[08:09] Really appreciate the opportunity to talk with all of you and to be here on behalf of the OpenET team. I'm really
[08:15] proud of what the OpenET team, the consortium, has accomplished over the last 5 years, and I'll be talking
[08:22] through all of that today. Um Um I'm going to turn my camera off while I present, and I'll turn my camera back on
[08:29] at the end to uh as we transition to questions. So, every day, thousands of people across the West are making decisions
[08:40] about water. So, that might be a irrigator, ranch manager, farmer waking up at 4:30 or 5:00 in the morning to
[08:48] turn on a pump or open a valve, all the way up to local, state, and federal water planners
[08:56] developing and working on solutions for some of the long-standing challenges for water resources management in the Western US.
[09:04] And many of them are being asked to find ways to do more and more with less. This
[09:09] makes good data and information all that much more important. And until recently, many of these decision-makers lacked one of the most
[09:18] important pieces of information for water resources management, which is timely, consistent information on evapotranspiration, the amount of water
[09:27] that's being consumed by crops and other vegetation as they grow. OpenET has been working to address this
[09:37] data gap and with the launch of the data explorer OpenET began to deliver a daily, monthly, and annual information
[09:44] on evapotranspiration at the scale of individual agricultural fields for the 17 Western states. And we brought together the scientific
[09:53] community behind different approaches for for mapping ET with satellite data and have been using best available science to
[10:00] make consistent near real-time field scale ET data easily accessible for any location in the Western US. In addition to providing the data
[10:11] summarized for individual fields across the West, information is also available at the original satellite resolution of 30 m by 30 m.
[10:23] And data is currently available through the data explorer for the previous 5 years as well as the current year.
[10:31] And I'll provide a demo of the OpenET data explorer and talk about the other components of the OpenET OpenET
[10:37] architecture here in just a little bit. And just as a level set for evapotranspiration, evapotranspiration, it's important to consider that of
[10:47] course water applied to a field ultimately goes to a couple of different places. It can evaporate or transpire
[10:54] and those two pieces together are evapotranspiration. This is the total amount of water being used by crops and
[11:01] other vegetation as they grow. In contrast to some of the other places where water can go including recharging
[11:07] underlying ground water or water some of it might run off and return to a local canal or river. That water is often
[11:15] available for reuse in downstream or in the future for other purposes within the basin, but the information that's
[11:23] consumed through evapotranspiration, that is that is no longer available for other uses in the basin. That's removed
[11:29] from the water supply and is often referred to as consumptive use. And what's challenging about evapotranspiration is that it's
[11:40] happening all around us all the time. Uh it's the second largest component of the water cycle in in most water basins. But
[11:47] because water vapor returns to the atmosphere as water vapor, it's invisible. You can't see it. And it's
[11:54] really difficult and expensive to measure on the ground. So as you can see a screenshot here, sometimes when you
[11:58] wake up really in the morning and the atmospheric conditions are just right, you'll see as the sun comes up, it'll
[12:03] heat the soil. We'll see that uh evap- well, in this case, evaporation start to occur from the soil. And if the air is
[12:10] cool and it's been a uh cold night the night before, clear night the night before, sometimes that water vapor will
[12:15] condense. And so we'll see that process of evapotranspiration for just a moment until the air warms up.
[12:21] Um but it's important to consider that that is happening all around us all the time. time. And again, really difficult and
[12:28] expensive to measure on the ground. So what I'll talk about today is I'll provide an overview of OpenET and talk a
[12:33] little bit about the value of open data and our objectives. Say a bit about how OpenET works and provide a demo of
[12:40] OpenET. OpenET. We'll provide a short summary of the accuracy assessment and linear comparison work that's been done for
[12:46] OpenET. OpenET. We'll spend some time talking about use cases and pilot projects that OpenET has been conducting. And then wrap up with
[12:54] some next steps for OpenET and lessons learned. learned. I'll also say a little bit about the NASA Western Water Applications Office
[13:02] and the NASA Applied Sciences Program. So first up, OpenET and the value of open value of open data. Um OpenET has
[13:12] been founded on open science and has really been a community-driven effort uh from the beginning. We've brought
[13:20] together uh many of the science teams that have been working in some cases for decades to develop capabilities to map
[13:28] evapotranspiration evapotranspiration across the landscape using satellite data. We have currently implemented six different approaches for mapping evapotranspiration from satellite data
[13:40] on Earth Engine as a shared computing platform. And this has allowed the team both to make progress on developing
[13:48] consistent approaches for the way we ingest and pre-process the satellite and meteorological inputs, to work together on a joint accuracy
[13:56] assessment and intercomparison study, and then also to make improvements in the individual models and approaches used. One of the key
[14:04] barriers to more widespread use of satellite-based ET data in the past has been the availability from different
[14:10] sources of ET data. And by bringing them together, it allows practitioners to easily compare the different estimates.
[14:18] The OpenET team is also providing a single ensemble value, which I'll talk about. about. The goals for OpenET have been from the
[14:26] beginning to produce reliable and easily accessible ET information that can be accessed for all farmers, communities, and water managers in the Western US.
[14:37] That the data is seen as trusted. It is being used by farmers and public resource managers at local, state, and
[14:46] federal levels. And that it is supporting supporting the implementation and adoption of a variety of innovative locally driven water management
[14:56] practices at scales that have not previously been possible. OpenET is committed to providing equal access to information. So, regardless of
[15:08] the the technical capacity or financial resources of users, we want to make sure that there is equal access to this
[15:14] information and that it can serve as a shared basis for decision-making, planning, planning, and development of solutions that are
[15:22] locally driven and basins across the west. As I mentioned, OpenET is using these six well-established methods for
[15:32] calculating ET from satellite data. Our criteria for selecting these different approaches is one that the teams were
[15:39] interested in making the data widely available and making the models available as open source software as the
[15:46] current versions are completed and prepared for open source software release. release. And the second that the models were
[15:51] either in use by a state or federal agency or advancing towards operational use by a state or federal agency in the
[15:58] west. And so we've been lucky to bring together many of the leaders in the field of remote sensing of ET in the US
[16:05] to work together to develop the OpenET platform and data resources. And as I talked about earlier, one of
[16:15] the things that OpenET allows you to do is to easily compare the estimates from these different sources
[16:21] uh just by with a literally the click of a mouse. In addition, we are providing this ensemble value. And the way we're doing
[16:28] this is we're we're calculating the median absolute deviation and using that to identify and filter outliers. Once that has been completed
[16:38] and next we are then calculating the ensemble value as the mean uh of the remaining models in the
[16:46] ensemble after the outliers have been detected and removed. Now, in our intercomparison and accuracy assessment, the ensemble value has
[16:54] performed as well or better than any individual model across just about every measure of of accuracy. However, we understand that for certain
[17:03] crops, for certain locations, uh particular uh meteorological conditions, there may be one model that does particularly well. And so we are working
[17:11] with partners right now on additional assessments to see if there are some locations where we need to recommend,
[17:17] perhaps one, two, or three, a smaller subset of the overall ensemble um for use for again for particular crops,
[17:24] locations, um or meteorological conditions. So, how OpenET works. Uh well, for that, first let me go ahead and provide a
[17:34] short demo of the data explorer. And so, one of the very first things you'll notice when you visit OpenET is
[17:41] you'll have the options to view the gridded data. Again, this is at the original satellite resolution, 30 m by
[17:47] 30 m, or just a about a quarter of an acre per pixel uh for any location in the Western US.
[17:55] Data has also been precomputed from uh data summaries have been precomputed for millions of agricultural fields across
[18:02] the across the West. Information can be selected uh for the current year as well as any of the
[18:10] last 5 years. Information is available for ET, NDVI. You can toggle back and forth between millimeters and inches, whatever is more
[18:18] comfortable for you to work in. Uh and then, information can also be added to assist with identification of particular
[18:25] locations of interest and for navigation. navigation. The colors here correspond to the uh legend. Uh and just by toggling over the
[18:32] legend, putting your cursor over the legend, you can get uh the values displayed that correspond with each of
[18:38] these these colors. Um so, I'm going to go ahead and to show the full functionality of OpenET, look at a field in Grand Valley,
[18:47] Colorado. Colorado. And you'll notice that once I get in beyond about zoom level 12, just by placing my cursor over a field, it will
[18:56] provide information on the total annual ET for the year selected, the area of the polygon, and the field boundary,
[19:04] the uh crop type. And if I go ahead and click on a field, this is actually going
[19:08] to make a live call out to our geo database and retrieve the time series of information for that field.
[19:16] Each of the data points in this time series time series represents the total monthly ET in this case is I'm in
[19:24] English units, so that's going to be displayed in inches and the volume of water in the the ET is a volume of water
[19:31] will also be available there as acre feet. But what I'm seeing here, so for example, looking at in
[19:37] July of 2020 for this field uh an ET rate of just about 6 and 1/2 inches. And that's about what I would expect for
[19:46] a well-watered alfalfa field in this location. Again, I can also look at the range as a measure of the uncertainty
[19:54] across the ensemble. And turn on uh information and time series for any of the individual models, so I can compare
[20:01] them. So if a a producer or engineer or uh uh hydrologist at a state or local agency
[20:09] has worked with any of these models they can in the past they can easily compare them to estimates from the models.
[20:15] Uh information is also available for additional ancillary layers, ET fraction, uh reference ET and NDVI. Now, in addition, we can also in
[20:25] addition to looking at the time series of monthly data, we can also look at this as cumulative
[20:31] annual totals and we can compare the ET from different years. And one of the reasons I selected this field is that it
[20:37] was was enrolled in a voluntary incentive-based conservation pilot program that was evaluating changes in total evapotranspiration and consumptive use
[20:49] associated with different irrigation management practices. And we can see looking both at the monthly the monthly time series, 2017 and 2018 stand out as
[20:58] looking a bit different from the other years. And we can see that clearly in the cumulative total.
[21:03] In 2017, this field was fully fallowed and we can see that the ET dropped from about about oh, 32 to 38 inches per year all the way
[21:14] down to just a little over a little under 6 and 1/2 inches. So, by following this field, we get a
[21:21] significant reduction in total consumptive use. Ideally, we'd like to be able to sustain agricultural production while also
[21:29] providing providing during times of drought you know, also allowing the incentive of these programs to to support continued production. And
[21:38] so, we see 27, sorry, 2018, what they tried was putting on the water a little bit late in the season, giving up that
[21:46] first cutting of alfalfa, but still able to harvest a crop later in the year. And we can see that that still resulted in a
[21:52] pretty meaningful, roughly 30% reduction in total ET consumptive use. So, this ability for the agricultural producer, the
[22:02] landowner, program administrator, to all be looking at the same information at the same time to evaluate how different
[22:08] changes in in irrigation practices at the field scale affect ET and consumptive use is particularly powerful in thinking about how we quantify
[22:17] these changes in ET and how we can scale different types of programs to accelerate accelerate water conservation.
[22:25] Uh the other thing I want to highlight here is that uh data can also be queried for any location. So, if we wanted to
[22:32] compare ET estimates within the field uh against adjacent areas some of the non-irrigated grasslands, we could easily do that. If we If a user
[22:43] wanted to uh select an area through which there wasn't a boundary perhaps for a wetland area, uh
[22:52] up in forest, uh non-irrigated grassland, or to just look at a portion of a field, uh we can do that, too. So,
[23:01] by clicking on the draw custom area tools tools um you can then select any location of interest. This is actually going to go
[23:09] ahead and run a query against the full OpenET archive, hunt through through hundreds of terabytes of data to find
[23:19] the data that's of interest. It's compiling that and it will return the summaries here. There it goes.
[23:26] Uh and then again, just showing the ensemble ET value both as the monthly time series and the cumulative totals.
[23:33] Um daily data is will be added here in just the next month or two. So, daily information will also be available
[23:40] through this interface. Uh and again, queries can be executed for any location in the Western US. I
[23:46] should emphasize that the data explorer is was designed to really make it easy to begin to, you know, interact with
[23:53] uh and explore the data, uh retrieve locations for any location of interest just using a web browser.
[24:00] This is intended as the first piece of the OpenET architecture. Later this year, we'll also be publicly releasing
[24:06] the API, the application programming interface, as well as custom reporting tools that will allow users to not to
[24:12] not only draw these polygons, but also save them, upload shape files, and get uh ongoing reports for regions of interest and locations,
[24:21] whether that's an individual farm or ranch uh or or a watershed. So, there's a couple of important
[24:33] considerations to keep in mind when you're working with data from OpenET. Uh first is that OpenET provides
[24:39] information on the total amount of water consumed through evapotranspiration. So, this is going to include the ET from
[24:47] irrigation, from applied water, from precipitation, uh and even access to shallow groundwater. And so, if you are comparing data from
[24:57] OpenET OpenET to measures of applied irrigation water, typically from a flow meter, it is important to at least subtract off the
[25:08] effective precipitation first before making that comparison, right? Cuz again, the meter is going to be measuring the total amount of of water
[25:16] applied, and data from OpenET will include information on ET both from the irrigation as well as from uh
[25:26] precipitation that occurred on that field or that region. A second, the crop type information available on OpenET, as well as the
[25:34] field boundaries, uh it's all from publicly available data sets, and it the the crop type information is
[25:40] really there to assist with interpretation of the data. Uh if there's any errors, those do not affect
[25:46] the accuracy of the ensemble ET value. And then third, the relationship between evapotranspiration and crop water requirements can be complex. Uh
[25:55] different types of crops, uh different crops grown in the same crop grown in different region, uh they can require
[26:02] different amounts of irrigation and different amounts of ET for a number of factors, everything from differences in
[26:08] soil type and texture, uh different planting configurations, uh different uh salinity management considerations, and other production factor production
[26:16] factors that the uh irrigator, the ranch ranch manager, the the agriculture producer all have to account for.
[26:26] Another important consideration is that um um OpenET data do not represent direct measurements of evapotranspiration. They are calculations based on satellite,
[26:36] meteorological, soil, and vegetation data sets. They are used within state-of-the-art vegetation models, uh and while the OpenET team considers them to generally
[26:44] be accurate and consistent, we know they have limitations. So, especially during times of consistent and in cloud cover
[26:51] or areas with complex topography, we would expect the uncertainty to be to be higher higher um in these situations.
[27:00] At a high level, OpenET is driven entirely with publicly available satellite and meteorological data. That information is brought together on
[27:08] Google Earth Engine, uh uh which is a cloud computing platform optimized really for geospatial analysis. analysis. And
[27:18] And all the models are run there. Uh Google Earth Engine is makes it much easier for the teams to collaborate on the
[27:25] development of consistent pre-processing and ingestion uh algorithms and workflows for the satellite and meteorological data. The pre-computed summaries for the
[27:36] individual fields are stored in the geo database. database. We are working um on the application programming interface is currently being
[27:44] tested and prepared for public release later this year. And then we just walked through the data explorer, um
[27:52] which is now publicly available, and again is intended to facilitate interaction, engagement, and exploration of the data for a lot of the
[28:00] scientific uses and integration with other other tools, uh we expect the API to be the primary way API and the customer coding
[28:09] tools to be the primary way that users will interact with the data. And we're developing the API because we know that
[28:15] ET information is often most valuable when it's combined with other sources of information. information. So, whether that is uh
[28:23] software for irrigation and nutrient management or other farming ranch uh software management application management software applications, whether those are water data information
[28:33] maintained at local, state, federal, and tribal agencies, um or water trading and water accounting platforms that are
[28:40] being developed in irrigation districts and watersheds across the West. The OpenET application programming interface is built following the Open
[28:51] API specifications. Um Um the screenshots here examples of the documentation and the various endpoints. So, we include endpoints for retrieving
[29:00] metadata, for retrieving subsets of the the raster data sets, and for retrieving subsets from the geodatabase time series
[29:07] for particular fields or locations of interest. Again, that that will be available later um during the second half of of this
[29:16] year. So, currently being tested by getting close to about 200 partners and being prepared for for that public
[29:23] release as soon as we can um have everything completed and documented. And the OpenET custom reporting tools,
[29:32] those are also under development. Um these are being developed to ensure that folks are able to access and retrieve
[29:37] information from OpenET regardless of the technical resources available to the user and to allow folks with uh any uh web browser to get access
[29:49] again for any locations and time periods of interest. The integration with other tools for irrigation management are particularly important.
[30:03] We know that when managing water at field scales, uh irrigators and agricultural producers have to account for a range of factors.
[30:12] So, they have to consider, you know, not only the weather data and the evapotranspiration rates, but also
[30:18] information on uh targets for leaching fraction, but uh irrigation type and application rate, distribution uniformity, uh soil type
[30:28] and texture, um and so um um partners of cooperative extension and the commercial sector are already developing software tools to support
[30:39] growers in taking weather information and ET information and translating those into irrigation system run times. And so, we've developed the API in large
[30:48] part to make it easier for these types of existing tools and tools that are being developed to retrieve and
[30:54] integrate satellite-based information on of evapotranspiration into these applications and make it available to irrigators, ranch managers, and
[31:03] agricultural producers in the field where when they need it. OpenET has driven with data from a constellation of satellites. So, we use
[31:14] data from Landsat, from the Terra and Aqua satellites, from the NASA NOAA Suomi NPP mission, the NOAA
[31:23] GOES satellites, and working on integrating data from the Sentinel-2 mission mission operated by the European Space Agency.
[31:31] That said, Landsat has really been the workhorse. It is the satellite that provides the concurrent uh optical and thermal measurements at
[31:42] that 30 to 100 m resolution that allows us to produce the field-scale ET data. So, the key principle behind remote
[31:51] sensing of evapotranspiration is that evapotranspiration consumes energy. And this is going to be familiar to anyone who's run through a sprinkler on a hot
[31:59] summer day. Run through the sprinkler, after you do that, of course, the water's going to evaporate from your
[32:04] skin. That's going to consume energy. It's cool cool your skin. And that same process occurs across the
[32:11] landscape, and the way that shows up in satellite data is that areas with higher rates of evapotranspiration,
[32:20] and I mean there's more more energy being consumed, are going to appear cooler in the satellite imagery. And
[32:25] conversely, areas with less evapotranspiration evapotranspiration are going to appear warmer. And we can measure that with a thermal infrared
[32:33] sensor sensor on Landsat. And so, as Landsat orbiting the Earth, it's measuring thermal infrared emissions. And we're seeing those
[32:44] the areas with higher land surface temperatures, those are typically going to be associated with areas with lower rates
[32:51] of evapotranspiration. The cooler areas are going to be associated with higher rates of evapotranspiration. Landsat also provides us with the
[33:02] measurements measurements in the optical wavelengths. In particular, we use measurements in the near infrared and red wavelengths.
[33:11] Landsat is measuring the amount of of light being reflected off the land surface in these key wavelengths that
[33:18] help us calculate measures of vegetation density and condition that are also important inputs inputs to many of the ET models.
[33:28] So, to give you a better sense of what the satellite sees, uh I got two basil plants, and I put one
[33:33] in the oven for about an hour uh to simulate flash drought. And then I took uh the the camera off of our UAV, and
[33:42] this is a camera that measures some of the same wavelengths that Landsat measures. And you can see how different
[33:49] these two plants look. So, the center image you're seeing the difference in the thermal infrared emissions. You can
[33:54] just see how much uh cooler the well-watered plant looks. And then on the right, you can see the
[34:01] difference in the normalized difference vegetation index, which is computed from the red and near infrared wavelengths. And it is this commonly used measure
[34:09] remote sensing measure of of plant density and condition, vegetation density and condition. And then zooming back out to look at
[34:18] this at the same scale that Landsat sees, we can see on the left, this is what the landscape looks like in the
[34:24] true color image combining red blue red green and blue wavelengths. In the middle there, we see the thermal
[34:30] infrared emissions, uh and we can get really clear signals as to just how much cooler those well-watered canopy pixels
[34:37] look. And then on the right, again, where we have healthy, well-established crops, we can see the NDVI looking a lot greener,
[34:45] reflecting much higher density of vegetation and a strong signal that we've got healthy healthy, well-watered vegetation there across that landscape.
[34:56] Now, I could spend probably the whole hour and a half just on this slide. Um but it's worth mentioning that there
[35:02] are two primary approaches used to quantifying evapotranspiration with satellite data. The first is the energy balance approach, and in this approach, what the
[35:13] models are doing is computing the different components of the surface energy balance to calculate evapotranspiration or the latent energy
[35:22] as a flux and as a residual of the of the surface energy balance. And so, we know that that incoming solar
[35:29] radiation, the Rn, uh or the incoming solar radiation has got to go somewhere. It can be reflected
[35:34] back out to space, and so the difference between what's coming in and what's reflected is the net radiation, the Rn.
[35:40] It can go to heat the ground surface, that's the G, the ground heat flux, or it can heat the air, and that's the
[35:46] sensible heat flux, that H term. And what's left has got to be the latent energy flux, the amount of energy that's
[35:53] being consumed by evapotranspiration. And so, the models have uh different approaches for computing these terms. They share a lot of commonalities in the
[36:03] computation of the net radiation and the ground heat flux, and where they take very different approaches is in how they
[36:08] compute the sensible heat flux. And so, they'll combine different meteorological products, um all driven many of them all
[36:15] driven with Landsat data. They'll also incorporate and some of them will incorporate satellite measurements from other platforms, GOES, uh but at the end
[36:24] of the day, what they're doing is calculating ET by solving the surface energy balance. The second approach second category of
[36:34] approaches approaches I would consider reflectance based approaches. In these approaches typically are assuming that vegetation for over agricultural landscapes is well
[36:45] watered and they'll be using surface reflectance information typically to compute some type of vegetation index in this in this instance we're showing the
[36:53] normalized difference vegetation index which is used by SIMS which is the one of the reflectance based approaches
[36:59] that it's incorporated into the OpenET platform. The SIMS model takes the approach of accounting first translating NDVI into a measure of the effective
[37:10] fraction cover and then incorporates information to calculate the effective canopy density and shading to compute a natural
[37:19] relative of apple transpiration rate that accounts for crop height and then it computes this density coefficient approach
[37:26] approach and uses the density of coefficient to then index into a set of equations that were developed by Rick Allen and Luis
[37:32] Pereira originally to compute a crop coefficient for every 30 meter pixel that accounts for the current crop growth stage and
[37:41] condition condition then brings in information on reference ET ET from from different gridded meteorological products or from agricultural weather
[37:51] stations to compute ET following the FAO-56 approach. SIMS has also been updated to incorporate information on soil evaporation precipitation using a
[38:01] gridded soil water balance model. But most of these reflectance based approaches are assuming that vegetation is typically well watered. One of the
[38:10] main limitations of these approaches is that they are less sensitive to short-term and intermittent deficit irrigation and plant water stress.
[38:21] So next I'd like to say a little bit about the work that's been done by the OpenET
[38:25] OpenET to characterize the accuracy of data from OpenET. Uh OpenET has conducted the largest intercomparison and accuracy
[38:32] assessment to date for field-scale satellite-based ET data. We did this using a two-phase accuracy assessment approach. Uh phase In the
[38:41] phase one, we used information from 70 flux tower sites. This included 24 agricultural sites. The models were checked in and run
[38:51] before the data were shared with the teams, but after receiving the results, the teams had time to make improvements
[38:57] and updates to the models to account for any systematic biases that were observed. For some of these models, this
[39:03] was the first time they had been run at the scale of the Western US, so wanted to give the teams an opportunity to
[39:09] adjust and correct again any consistent biases biases or issues with the models, as well as to address any bugs that were uncovered.
[39:18] In phase two, uh we added an additional uh 70 sites for 142 flux tower sites total. Again, models were run before the
[39:26] data were shared with the teams. Sites were implemented with uh full eddy covariance instrumentation, so the example of one of these towers is shown
[39:36] here on the right. Uh instrumentation for for uh these towers typically cost in the range of about $50,000 per year and also
[39:44] require specialized expertise to maintain the instrumentation and process the data. An advantage of the this full open path
[39:53] eddy covariance approach is that it also allows for independent checks on energy balance closure as an indication of the
[40:01] accuracy or uncertainty in the ground-based measurements. And so, we did we were able to filter the ground-based ET time series to check for
[40:09] energy balance closure uh to ensure that there were no more than 5 days per month that needed to be gap-filled, also
[40:15] ensuring that there were a maximum of 2 hours during the day and 4 hours tonight at night that for each day that needed
[40:22] to be gap-filled to to any uh uh uh gaps in the in the 15-minute data record 15-minute data record that is typically
[40:32] output from these stations. So, the results here, we looked at a range of different accuracy metrics. We
[40:39] looked at different time scales, daily, monthly, growing season, and water year. We looked at both the slope and the mean
[40:46] bias error as different indicators of overall bias. Slope, of course, a slope of 1.0 would be perfect. For mean bias
[40:53] error, error, a bias error of zero would indicate perfect agreement with the ground-based data. We looked at mean absolute error
[40:59] and root mean square error as measures of expected error. Uh mean absolute error is what we would think of as
[41:06] giving us our our expected error uh on average for any given location or time for any given location. Root mean
[41:15] square, another measure of expected error but provides additional weight for outliers. So, if there's an application that's specially sensitive to any large
[41:22] misses misses by the models, RMSE is a good measure to use. And then, also included information on R squared as the measure a measure of
[41:30] the ability of the model to reproduce the observed variability in the ground-based data set. Again, a score of
[41:37] or a measure of 1.0 would be perfect. So, just focusing on the mean absolute error, what we were seeing is that uh a
[41:44] lot of of annual time step, typical errors of just under 9%. Growing season time step, errors of just over plus or
[41:53] minus 13.2%. Monthly time step, uh 16.6% and and daily just under plus or minus 23%. Now, the daily scale, we
[42:03] do start to get into um some challenges in working with the ground-based data. Just looking at as we have different uh
[42:10] weather systems moving in, we'll know there'll be days where uh, the satellite has measured conditions that were were
[42:16] different from what the flux tower was seeing uh, for any 24-hour period. We also know that there is um, higher
[42:22] uncertainty in the ground-based stations at the daily time step as well, just due to energy balance closure at at shorter
[42:28] time scales. But, overall, we were uh, really pleased with these results. And the most important thing is that we're
[42:35] able to provide users with a characterization of the accuracy both for this ensemble variability value which is what we're looking at here, as
[42:42] well as for the individual models. The summaries of these results are available in a uh, open access article that the team
[42:50] published in the Journal of American Water Resources Association last year, and then also on the OpenET website um,
[42:57] under the accuracy tab. Oh, one other thing to mention is that um, um, uh, when we looked at the average total
[43:06] growing season ET uh, across all sites, 38 sites where we had at least one full growing season,
[43:13] uh, uh, with a total of 151 growing seasons, when we looked at the average total ET from each of the models and compared it
[43:21] to the average ET across all of those flux towers, we saw that all but one of the models was within plus or minus 10%
[43:28] of the flux tower ET. All of them were within plus or minus 15%. Uh, number of the models were within plus or minus 5%.
[43:36] So, as we looked at across larger larger time scales and and larger areas, we were seeing uh,
[43:45] uh, the the the a lot of the errors condense, which is what we would expect if many of the errors were random
[43:51] errors. So, uh, this was also encouraging. encouraging. I'd like to talk a little bit about some of the applications and use cases that
[43:59] OpenET has been supporting. OpenET has been user-driven from the very beginning. beginning. Uh, OpenET uh has been built around around use cases
[44:11] and received input from uh more than 100 uh partners in the in the um water resources management
[44:19] agricultural communities. Just about anything that's part of the OpenET API or the OpenET Data Explorer is there
[44:25] because one of our partners has requested it. OpenET can help with a number of key applications of satellite data for water
[44:33] resources management in particular. OpenET can support rural communities in designing locally driven water conservation and trading programs that
[44:42] are informed by uh satellite-based data. OpenET has value for assisting water managers in developing more accurate water budgets, which can then be used to
[44:53] create incentive programs and other innovative strategies to advance uh water conservation at scale across the West. OpenET can support policy makers in
[45:03] accurately tracking water supplies. Some of our use cases have focused on simplifying regulatory compliance and reducing costs for agricultural
[45:11] producers. producers. And OpenET can assist policy makers in co-developing solutions with local communities. A lot of what we have
[45:19] focused on is identifying opportunities to use ET data to create win-win solutions where we both improve the
[45:28] uh understanding of water use within a region while also uh and which can support uh advances in
[45:36] long-term sustainability of that water resource while also providing direct benefits back to the agricultural producers and water rights holders
[45:43] within a community. And then finally, and perhaps most importantly, OpenET data can support farmers in expanding the use of
[45:51] data-driven irrigation practices to continue to maximize crop per drop and reduce the cost to agricultural producers for fertilizer, water, and
[46:00] energy. energy. These are some of the use cases that OpenET has been supporting over the last three to four years.
[46:10] And these span range of applications and categories of use for OpenET. So, we have use cases related to groundwater
[46:20] management, on-farm irrigation scheduling, scheduling, applications focused on reducing regulatory cost for regulatory compliance, and then watershed scale
[46:31] management applications as well as applications to support pilot programs for for incentive-based water conservation and water trading.
[46:41] We have worked with small family farms, with some of the largest agricultural organizations in the West. Some of our use cases are supporting
[46:49] tribal communities and some are supporting supporting planning activities at the scale of the Upper Colorado River Basin.
[46:57] And while we don't have lots of it's impossible to have a full comprehensive suite of use cases,
[47:03] we've done our best to ensure that the use cases that OpenET has been supporting give us a representative
[47:10] cross-section of the potential applications in the long-term long-term user community for OpenET. So, I'd like to give you a chance to
[47:19] hear directly from some of our partners about what they see as the value of OpenET and and how they're using it.
[47:25] First, we'd like to start with Mark Owens, who's a farmer in alfalfa farmer in Harney County, Oregon, who's
[47:33] been using data from OpenET to inform his irrigation scheduling and management. And Mark's been helping us think through ways to make this data
[47:43] valuable for that type of application in Oregon and across the West. We're under a drought in most of the
[47:50] West continuously. The climate is changing. changing. Summers are getting longer, it's getting hotter, it's getting drier, we're
[47:56] getting less precipitation. So, I think there's a growing awareness in all of the West that we have to use
[48:00] significantly less water. So, agriculture has to figure out how to get as much per drop of water as they
[48:06] can. can. I started to try to understand evapotranspiration evapotranspiration when we collectively started to try to figure out, "Can I put less water on my
[48:15] fields and still yield the same amount or more?" I go online and I can pull up to the
[48:21] evapotranspiration numbers. I compare the amount of water that I apply daily, weekly, probably monthly, compared to what OpenET says, and I can see if I'm
[48:31] over applying or under applying. So, if I put on more water than evapotranspiration already have in my
[48:36] bank, I can shut off for a couple days. That means we could use about 25% less water and still produce the same amount
[48:42] of crop. Which means a lot if you're putting out several million gallons of water a day. Second use case that I'd like to
[48:55] highlight is um work with uh the Rosedale-Rio Bravo Water Storage District. Uh they have been working to
[49:04] develop a groundwater sustainability plan plan uh in response to the passage of the Sustainable Groundwater Management Act
[49:12] in California. Uh and what they have been doing with OpenET is using that as an input to
[49:18] their water accounting platform that's been developed uh for um agricultural producers within the Rosedale-Rio Bravo Water Storage
[49:27] District. OpenET has served as the basis for that accounting platform and will support the development of water trading
[49:34] programs within the water storage district in the future. And I'll let Eric Averett, who's the former general
[49:39] manager for Rosedale-Rio Bravo, describe that. that. Rosedale is located in Kern County. It's one of a number of water districts that
[49:48] provides both agricultural as well as urban water supplies. Kern County is considered ground zero in the context of the Sustainable
[49:54] Groundwater Management Act. We have a significant amount of overdraft, which challenges the water supply reliability for the region.
[50:01] The OpenET data set that we will be using is the basis of our water budget for Rosedale, which will be reported to
[50:07] the state to show compliance with the Sustainable Groundwater Management Act. For the landowner, it's very, very important because they have now a
[50:13] responsibility to live within their their water budget. OpenET has been a very, very effective tool giving us near
[50:20] real-time information to evaluate the water budget information for every parcel within Rosedale. Landowners can make decisions as to
[50:28] whether or not they're going to irrigate again, whether or not they're going to enter the market as a buyer or a seller.
[50:33] And again, it's really information to make informed decisions, but more importantly, to manage the resource on their own behalf.
[50:50] And then finally, um um uh uh OpenET is also being used for applications applications outside of irrigated agriculture. Of
[51:00] course, there are important applications for drought impact assessment, for for forestry management. Uh in the uh uh in Arizona, we've been looking with the
[51:13] Salt River Project to use data from OpenET OpenET to help them track and assess the impacts of different forest management
[51:21] practices on evapotranspiration and changes in the hydrology in the upper part of the watershed. Now, let Alby Barton describe that work.
[51:32] We are in the East Clear Creek watershed. This is one of our uh most-at-risk watersheds because our dam
[51:39] here is completely surrounded by ponderosa pine forest that are in an unhealthy state. With increasing temperatures, we're having increasing
[51:49] variability with droughts, and unhealthy forest has fuel for large catastrophic wildfires. So, we adopted a 2035 goal to
[51:59] support 500,000 acres of forest thinning. Now, this is unprecedented since no utility in the United States has taken on a forest health goal. It's
[52:09] going to take a lot of science and tech and data. And so, when we begin our forest thinning projects, the trees will
[52:15] become more drought tolerant. OpenET will help us have data to inform how our forest thinning projects are reacting to
[52:24] those climate change impacts that we're seeing today. Okay. So, what's next for OpenET? First, as I mentioned earlier, we will
[52:41] soon be releasing daily data through the data explorer, as well as through the application programming interface, the
[52:47] API. API. And we'll be focused heavily over the next year integration of those daily data products with the irrigation
[52:55] scheduling tools working with our our partners and extension agencies and in the commercial sector. As I mentioned earlier, we are working
[53:02] towards the public release of the API in the second half of 2022. And that will coincide with
[53:11] addition of the OpenET data for 2016 through 2020 to the public data catalog on OpenET. So, for those of you who are
[53:19] interested in OpenET for research applications and looking to access large subsets of the data, that will be the best way to work with
[53:29] the information. And we will I'd recommend that you sign up for the newsletter and mailing list at
[53:36] openetdata.org, openetdata.org, and we will be notifying all users of OpenET when the API is available and when the
[53:45] data for 2016 through 2020 has been added to the public data catalog. We will also be working during the
[53:52] second half of this year on completion of the customer reporting tools that I showed briefly. Again, that'll be an
[53:58] important component to allow folks to set up areas of interest, upload shapefiles, draw on some field boundaries, and then
[54:07] get ongoing reports for for those locations of interest. Also working on a best practices manual describing recommendations for use of
[54:17] the ensemble ET value as well as data from the individual models for different water resource management applications.
[54:25] applications. And And I forgot to mention, but we are also currently completing updates, the final runs of all models for OpenET collection
[54:33] two. So as soon as that's ready, we'll be working on and pivoting towards completing the best practices manual.
[54:42] And we have additional work to do for the science team. That's going to include evaluating the models for some
[54:49] particular situations including well-established well-established tree crops, identifying which models perform well um for that not just that particular crop type, but
[55:01] that particular stage of crop production those well-established orchards where we can have shading at the inner row during
[55:07] the time usually typically during the time of the land inside over pass. Also working on improved approaches for
[55:14] open water evaporation and evaluation of ET estimates from the different models over open water over lakes and
[55:21] reservoirs. reservoirs. And then also continuing to develop and improve the models for forest and other non-agricultural forest and other
[55:30] non-agricultural landscapes. And then another last major piece on our road map here, uh is developing workflows to automate the calculation of
[55:41] effective precipitation so we can compute ET of applied water across the West. West. I would like to close with a few lessons
[55:50] learned, well, a few lessons learned from OpenET and then also talk a little bit about the role of NASA Western Water
[55:56] Applications in the Office of the NASA Applied Sciences Program. First, especially when you're introducing a new uh water data set, uh
[56:04] important to understand a new water data can be sensitive. Uh Uh and it's important to listen to concerns
[56:12] from all stakeholders. Within the OpenET Consortium, we have really uh prioritized the identification of win-win solutions where there are uh
[56:24] clear benefits to individual agricultural producers from the use of ET data, uh while also uh improving our
[56:31] ability to understand total use of water through ET uh in a particular uh location or particular watershed, uh and improving
[56:41] the accessibility of information on evapotranspiration evapotranspiration to water resource managers. Second, open science and open data are
[56:51] not free. So, important to keep in mind that free to the user does not always equate to free to the provider. So, for
[56:58] those of you that are also working on other applications and uh are working hard on our open science activities and trying
[57:07] to increase access uh and usability of information on um on water, it's really important to plan far
[57:15] ahead and think about the long-term sustainability sustainability of the data resources and compute resources that you'll be using. Um we've
[57:22] done our best to start early, but still nothing will ever go according to plan. If that happens to you, uh just
[57:29] know that uh we feel your pain. Um and then finally the user-driven design process really works if time
[57:38] allows. This is something that OpenET has underscored. We started with a series of of workshops and public
[57:43] meetings and small working groups. The schedule on the left is what we That was my original sketch
[57:50] for OpenET, for our architecture. That was the simple cartoon schematic. And uh and and this is where we found them. Um
[58:01] and I can't not express how proud I am of this team, and I think that what's been
[58:07] designed and developed really sends a uh uh establishes an important milestone in terms of our ability to easily
[58:15] distribute satellite-based information on US to to any user with an internet connection and and a web browser.
[58:25] So, really tremendously proud of what the team has been able to accomplish over the past five years.
[58:30] All right, and finally partnerships matter. Um none of this would have been possible without a team of really
[58:37] dedicated scientists and software engineers from three federal agencies, seven universities, working with the Environmental Defense Fund and and
[58:46] Google Earth Engine. So, um and then of course Habitat Seven have done a phenomenal job uh with the web
[58:53] design and a lot of the software engineering for the data explorer. And so, NASA's role in this of course is
[59:01] twofold. Uh NASA does operate um a large fleet of Earth observing satellites. These satellites provide insights to
[59:11] almost every component of the system. Uh data from NASA is freely from all of these satellite missions is freely and
[59:18] publicly available. And the NASA Applied Sciences Program is then tasked with translating NASA's scientific and technical advances into
[59:29] societal benefits within the western US, the NASA Western Water Applications Office is specifically focused on identifying ways that we can support uh water
[59:40] resources managers in uh applying NASA data, technology, and tools to support decision-making for water resources management in the western US. Uh we work
[59:50] by we work we do this by identifying the needs through uh working groups and needs assessments. We then uh work hard
[59:58] to establish connections between our water resource management and agricultural partners with NASA scientists, and folks at NASA centers,
[1:00:05] and our NASA-supported science community. community. And then provide support for uh projects tailored to address those needs uh
[1:00:14] engaging users from the beginning as as OpenET has done. And then longer-term work to transition those applications or
[1:00:21] find ways to sustain them long-term so that they'll provide a reliable information resource for water resources management in the foreseeable future.
[1:00:34] And so if you have questions, please don't hesitate to reach out to me. Uh I will note that OpenET is currently
[1:00:40] focused on providing data for the western US, working on plans to support expansion to cover uh at least the uh
[1:00:49] CONUS, uh the lower 48 states um longer-term, uh considering strategies for ways that we can work with
[1:00:57] international partners to support expansion for areas around the world where ET data would also be valuable. Uh
[1:01:03] at least for the next 12 months, we'll probably be focused on the US. So with that, if you have questions, uh happy to
[1:01:09] try to answer a few of those now. Uh can also uh contact me here or uh we also encourage you to send
[1:01:17] questions to support@openetdata.org. Uh that will be one of the best ways if to get answers if you have questions
[1:01:25] about OpenET in particular. So, thank you so much for listening. Really appreciate your time and attention and happy to answer any
[1:01:32] questions. questions. Bye. Bye to you, Amita. Thank you so much Forest. I mean that was just wonderful talk and
[1:01:46] I think we really learned so much not just about ET but you know, there's an open source data
[1:01:56] with multiple products. You also showed some very useful case studies that we always get requests from our RC participants that they want
[1:02:05] to see how data are actually used in real-life applications. So, this was really great and thank you so much for
[1:02:13] the information and your time. And And so next we have question answer session. You can type your questions in the QA
[1:02:25] box. Some of you have already done so and and Forest is here to answer some of the
[1:02:31] questions. questions. And we will be posting this Q&A document on our website. So, before we switch to QA,
[1:02:43] here is the contact information again. You can contact Forest Melton for more information about OpenET and any general
[1:02:53] questions about this training. You can email me. Here's the training webpage where you will have all the slides
[1:03:00] available as well as the recording of this video will be posted there too. And this is the RC website and
[1:03:08] here's the Twitter feed for RC. So, with that let's start with uh, answer session. Let me find that.
[1:03:19] Hey, uh, before we jump in, can I also ask you to add to that slide support@openetdata.org? Um,
[1:03:28] Um, given the number of I'm really happy to see the amount of interest and number of folks who have joined the call. Uh, to
[1:03:34] handle the volume of inquiries we're receiving currently, we have have set up support@openetdata.org support@openetdata.org uh, to help us manage and respond to all
[1:03:43] the inquiries we we receive. Wonderful. Thank you. Um, so we'll start with the questions which are already
[1:03:51] posted. Um, first question is, is the OpenET database updated in real time? Uh, close to real time. Yes. So, um,
[1:04:03] currently the monthly Oh, and Brock, I have up I'll type in some of the answers for you there. I see but it's close to
[1:04:10] real time. Uh, monthly data is typically updated within two to three weeks after the end of the month. The daily data,
[1:04:17] um, um, it's available through the API is currently updated typically within three to eight days from uh, the satellite
[1:04:23] overpass date. And we are testing a workflow to provide uh, the very low latency near real time daily data within
[1:04:33] 24 to 72 hours of satellite overpass. Great. So, second question here is, is the OpenET data available only in the
[1:04:44] USA or if so, how can I study similar data in countries in Asia? Sure. So, yes, currently OpenET uh, is
[1:04:53] just available for the 17 states in the Western US. We're currently working on OpenET data collection 2.0 which will
[1:05:00] also include uh, the Mississippi Alluvial Plain and then we'll be working towards providing data for the rest of
[1:05:07] the US um, here over the next 12 to 18 months. months. We are starting to work on I should have
[1:05:12] mentioned this at the end of my talk. We are starting to work with partners on some pilot activities in Brazil and
[1:05:19] Mexico to figure out how we can most efficiently scale OpenET to other areas where the data would be
[1:05:25] valuable around the world. Our approach to this has been to work with scientists in country and have them lead the development of
[1:05:35] any ET systems for their their country or region. It is going to take us a little little
[1:05:42] while before we can get to anything close to global scaling. There are other ET information products. You'll hear about EcoStress. I know
[1:05:53] ARSET has provided additional trainings on some of the other NASA ET data sets in the past. So there are other
[1:06:00] satellite-based ET data products. Um for different regions in Asia. Yes, that's correct. So if you look at
[1:06:08] the link of the evapotranspiration webinar we did a couple of years ago, it has some of the global data sets.
[1:06:17] Also I think one thing to note here for us from your talk is that this project includes so many institution and
[1:06:24] universities, so scientists and stakeholders and people who design the website and make it so easily interactive. I think that has to happen
[1:06:35] all over the world and that's the difficult part and and time consuming I believe. So And and doing the accuracy assessment
[1:06:43] which is really important for a number of water resource management applications being able to characterize the accuracy. That that's a really
[1:06:49] important component of the project. Also understanding um um you know, understanding the applications that would be most valuable and ways to
[1:07:00] utilize the data really requires local and regional expertise and folks with strong connections to agricultural producers and water resource managers in
[1:07:10] different regions around the world. Yes, great. So, question three is how different or improved are the OpenET estimates from
[1:07:21] the dynamic global vegetation models or DGVMs? DGVMs? We have not conducted any comparisons against the DGVMs. DGVMs. We
[1:07:33] We I would expect that a key advantage of OpenET, of course, is that the is that the measurements from OpenET
[1:07:42] over irrigated agricultural lands are actually accounting for the evapotranspiration that occurs as a result of applied water. So, we don't
[1:07:49] have to model or simulate irrigation the way that DGVMs would have to do over irrigated agriculture. We're actually
[1:07:58] looking at the using the satellite data to either solve the energy balance or or monitor the development of the crop
[1:08:06] canopy canopy in terms of its density and condition. And so, we're we're capturing that influence of irrigation directly using
[1:08:14] the satellite data, a combination of the optical and thermal information. But, we have not conducted any comparisons yet between OpenET and
[1:08:24] the DGVMs. So, question four, this is a great data tool. Will these data be available for use in
[1:08:35] Google Earth Engine? Is there a release date? date? Yes, so we are starting to work on adding data from OpenET collection two
[1:08:43] from 2016 through 2020. So, that would be over the summer we'll we'll be adding data from the
[1:08:51] models as the review of collection two is complete to the Google Earth Engine public data catalog. I should say that's
[1:08:57] planned. So, we're submitting the request to Google to have them be added to the public data catalog.
[1:09:05] So, we'll be starting with that initial collection and then continuing to add to it as we extend the extend the data
[1:09:11] record back in time. Data for the most recent years will also continue to be available through the API while while
[1:09:16] it's under review. Okay, question five is which model is the best for estimating ET while plotting against NDVI?
[1:09:29] Um Um um um So, So, yeah, that's good good question. I wasn't not quite sure where that
[1:09:38] question is going. Um let's see. The SIMS model, which is uh the model that's primarily driven with the reflectance data with with
[1:09:48] NDVI, NDVI, fractional cover using the density coefficient approach developed by Rick Allen and Louise Pereira, that's generally going to correlate uh most
[1:09:57] closely with NDVI. Um Um that said, all many all of the models will track the the uh crop phenology measured by NDVI.
[1:10:10] The energy balance approaches will will do a better job of capturing soil evaporation from bare soil um or soil evaporation from from any
[1:10:21] fields where you have uh uh you know, flooded fields like rice, for example. example. Um or uh flood irrigation uh other crops
[1:10:30] early in the crop development cycle. Um but if you were looking to correlate a model with NDVI for a particular
[1:10:37] application, I would expect SIMS to uh track NDVI closely. If you have a follow follow-up question, please add that to the chat. Happy to
[1:10:49] clarify. clarify. So, question six is would you expect that OpenET could be useful to estimate evaporation in covers without
[1:11:00] vegetation. So, open water or moist dry soil, covered or not. Stubble from previous crops. How would you expect
[1:11:09] open ET to perform with other vegetation types, not crops, like dry forests? Sure. Sure. Uh yes, definitely. So, open ET should
[1:11:19] definitely be useful for capturing evapotranspiration evapotranspiration uh from areas you know, um wet it bears bare wet soil
[1:11:29] uh stubble from previous crops. The energy balance approaches basically the the um models except for Sims should
[1:11:35] should all do well in that situation. Um And the ensemble ET value uh should also provide a a reasonable estimate at those
[1:11:45] lower lower typically we have lower ET in those conditions. That you'll see larger um a larger range across the ensemble. Um
[1:11:57] uh and so as a percent of the overall absolute ET value, you'll expect higher uncertainty. In terms of the absolute error, you
[1:12:04] know, since the ET values are typically smaller, we would generally expect uh lower absolute error but higher
[1:12:12] higher percent error. Uh open water is um a harder problem. So, um Xuling Gao at at Texas A&M is currently
[1:12:24] uh leading a project focused specifically on quantifying using satellite data to quantify evaporation from open water. There are initial
[1:12:33] estimates estimates uh there for the for from some models uh for open water in open ET. Um we have
[1:12:42] not ex- we have not just had access to the data resources to really fully quantify the accuracy of those estimates yet. So, uh
[1:12:50] to use those, uh, I I would um um just just assume a higher higher overall uncertainty over open water and really
[1:12:59] looking forward to the seeing what Hulin Gal and her team will be able to accomplish in advancing our ability to
[1:13:05] quantify evaporation, um, from open water, from lakes and reservoirs. For other vegetation types, yes, we have uh, also out of those 142 flux tower
[1:13:16] sites, 72, uh, were non-agricultural non-agricultural non-agricultural In general, the uncertainties are a little bit higher than they are for
[1:13:25] irrigated agricultural lands. So, that, as I mentioned there in my talk, that'll be one of the uh, key areas of focus for future
[1:13:33] research in terms of improving the overall accuracy for shrublands, uh, uh, and upland forests. Uh, that manuscript is currently being
[1:13:43] written up and prepared for submission. So, we will be adding information on the OpenET accuracy for other vegetation
[1:13:49] types in the near future. And there is additional information uh, on the OpenET website at openetdata.org/accuracy. Great.
[1:14:02] Great. So, how is OpenET different from the MODIS ET product? A couple of different ways. Um, one, of
[1:14:09] course, and perhaps most importantly for a lot of agricultural applications, is the spatial resolution. So, that that
[1:14:15] 30-m spatial resolution versus the 1-km, um, versus the MODIS scale MODIS ET product. product. So, that that's a key difference. Uh,
[1:14:24] OpenET also includes, uh, it you know, the ensemble of models. So, uh, different approaches to solving the
[1:14:30] surface energy balance and using reflectance, uh, surface reflectances to calculate ET. And then it provides that ensemble ET
[1:14:38] value computed from the six different models after filtering for outliers. So, I'd say those those are some of the
[1:14:44] key key differences. Um, we are conducting comparisons right now at those flux tower sites and incorporating the MODIS ET
[1:14:53] data set. We recognize that with the coarser resolution of MODIS, it's often harder to compare it to the flux tower
[1:15:02] measurements just because so much of the signal signal is coming from a a footprint around the tower that
[1:15:10] represents just a portion of the MODIS ET pixel. But in general, we're seeing that for irrigated agricultural areas, the OpenET
[1:15:19] estimates are are providing a meaningful improvement in the accuracy. But we're still working through that full analysis.
[1:15:28] Question eight is, was there a separate accuracy assessment for non-croplands? Yes. Yeah, that's what I was I just
[1:15:35] mentioned. There were roughly half of the sites, about 72 of those towers were from non-agricultural lands and and we are currently writing
[1:15:43] up those results. So I think I think we've already talked about that answer to that question. But happy to clarify
[1:15:49] if there are any follow-up questions in the chat. Question nine is, do you apply surface energy budget closure correction to the
[1:15:57] flux tower ET estimates before comparing with the OpenET estimates? Yes. Yeah, great question. I should have mentioned
[1:16:05] that. Yes, we do apply an energy balance closure correction based on the energy balance ratio. We are also filtering. We started with
[1:16:14] almost 300 flux tower records and we filtered those uh to ensure that we had energy balance closure ratio of at least
[1:16:23] 0.75 during the growing season and 0.6 during the non-growing season. And details for that, the processing of the flux tower ET
[1:16:32] estimates are provided in the OpenET paper, Melton et al. 2021, that was published in the Journal of
[1:16:41] American Water Resources Association. That is an open access um a manuscript. Uh so, there's additional information on the energy balance
[1:16:49] closure correction there. Uh there's also details in John Volke's paper, v o l k 2021, where he described
[1:16:58] the the uh software the automated software workflows used to process all of the flux tower data. That's available now as
[1:17:05] open source software. And then, John's also just about to submit a manuscript describing the a full flux tower data set that was used
[1:17:13] in the OpenET accuracy assessment. Again, what's the resolution of the data as you Uh the the the resolution of the
[1:17:22] gridded data products um is 30 m by 30 m, which is translates to 0.22 acres per pixel.
[1:17:31] So, it's 30 m by 30 m. Is it possible to get an insight into the algorithm used to generate data in
[1:17:39] OpenET? OpenET? Uh yes. So, a couple of different ways. One, on the on the OpenET website, there's descriptions of the different
[1:17:47] models. There's links to the key uh papers describing the equations used within within each model. Again, there's
[1:17:54] not a single algorithm. There's the six different uh satellite-driven models. To compute the ensemble ET value, we are using the
[1:18:04] median absolute deviation approach uh taking 2.5 times uh times that mad value value to define the range. Anything outside of
[1:18:13] that range is flagged as an outlier and removed, and then we compute the ensemble ET value uh as the mean of the
[1:18:19] remaining models. Um as I mentioned, uh one of the things we're working on for particular crop types and regions is
[1:18:25] checking to see if the performance of uh single model or a subset of the ensemble will will perform better than the
[1:18:32] current ensemble ET value. The long-term goal is to be able to take advantage of the strengths of each of
[1:18:41] the models to provide the most accurate over overall ensemble ET value possible. Um in addition, we are uh working
[1:18:50] towards getting all of the models documented um and available in open-source software repositories. I know that there are
[1:18:59] uh repositories on GitHub for the SEBAL model already already along with the GEOSBAL GEOSBAL and uh SIMS, PT-JPL,
[1:19:10] um and Disalexi are all close to being ready. Think there should be an open-source uh repo for SIMS or that there will be very
[1:19:19] soon. soon. So, um yeah, so a couple different ways. Again, manuscripts available through the OpenET website for the major modeling
[1:19:26] approaches and then working towards providing direct access to the model code through open-source software repositories for the models used in
[1:19:34] OpenET. Great. Great. So, but do any other countries have anything similar to OpenET? I know um Australia has a similar
[1:19:49] system. Um I believe the model is based on an approach that's that's related to the approach used within SIMS. I would
[1:19:56] have to double-check the latest. That's called IrriSAT. So, I know Australia has approach has a similar system called
[1:20:01] IrriSAT. We've been really lucky to work with Andis Anderson Ruhoff and his team uh in in Brazil
[1:20:09] um um at the Federal University do Rio Grande do Sul and uh and we'll be working with
[1:20:16] Anderson. Anderson will be leading an effort to to start to develop uh a pilot program for OpenET for Brazil.
[1:20:23] Um so, those are a couple that I'm I'm aware of and I'm sure there are others uh either in development or available
[1:20:32] for other regions. Okay, question 13 is with the example of the farmer that has saved water using
[1:20:41] open open has he archived the decrease in use because he has supplied water only for the plant and not for the underground?
[1:20:50] Can you explain which component of the ET equation he has decreased? Great, yeah. Great question and I should
[1:20:59] have said a little bit more about this. Um, Um, really good question. So, a couple of things here.
[1:21:05] Uh, what the farmer did was adjusted the Mark Owens said was um, when he updated his irrigation system,
[1:21:13] he had adjusted the design of the system to match uh, so that the water applied was matching the um,
[1:21:22] the the ET the the maximum ET rates in each month based on recent data from um, recent ET data over that field and
[1:21:36] um, what what the objective of data-driven irrigation management is to uh, uh, match the amount of water applied to the
[1:21:46] amount of water that's being removed from the root zone and transferred to the atmosphere through evapotranspiration. evapotranspiration. And so, yes, the the goal there would be
[1:21:54] to reduce leaching uh, other than the amount necessary to for salinity management to flush any salts. Uh, and so, to minimize uh, that
[1:22:04] leaching. Now, a couple of things about that. So, for for uh, farmers like Mark, the key advantage is that that actually reduces
[1:22:12] the the uh, pumping costs, it reduces the electricity cost to pump water to supply that irrigation. Um, so, that's that's really the key
[1:22:21] benefit is the cost savings for electricity. electricity. Some of our partners, uh, Michael Kahn here in the Salinas Valley with the uh,
[1:22:31] University of California Agriculture and Natural Resources Institute, have also shown that if you couple the irrigation management with fertilizer
[1:22:40] management, you can also minimize leaching fertilizer below the root zone. And if the uh uh uh nitrate content in the in the soil,
[1:22:50] for example, is being measured with those cheap easy soil nitrate quick test, test, you can also reduce the amount of
[1:22:56] fertilizer applied by as much as 50%. Just because you're minimizing the unintentional loss below the root zone.
[1:23:03] So, those are some of the key benefits. Now, in terms of what happens to the evapotranspiration evapotranspiration when you improve irrigation efficiency,
[1:23:12] that's a that's a really interesting question. Um And And one thing that can happen when you improve the efficiency or design of an
[1:23:21] irrigation system, and we've seen this in a couple of fields where folks have switched from flood irrigation
[1:23:26] to those low elevation precision application those really high efficiency center pivot sprinkler base systems, when you make that switch, you can
[1:23:38] actually see such an improvement in the overall consistency of the crop that you are going to get the grower will get
[1:23:45] higher yields, but because you have a more consistent uniform crop, we can actually see evapotranspiration go up.
[1:23:52] So, even though the crop the yield per per you know, amount of water applied goes up, the overall total evapotranspiration
[1:24:03] can go up even though the amount of water applied goes down. And so, when we look at programs to improve irrigation
[1:24:11] efficiency and we want to understand the impact to the overall water use and consumptive use within a basin, it's
[1:24:18] really important that we combine information information on changes in applied water on irrigation with changes in evapotranspiration
[1:24:29] to understand those trade-offs. So, gains in irrigation efficiency, meaning that you're minima you're doing a better job of matching applied
[1:24:38] water to ET, don't always translate to reductions in evapotranspiration and consumptive use. So, that's a really important point and one of the key
[1:24:46] reasons to use data from OpenET as we're tracking tracking changes um evaluating impacts from programs to advance water use efficiency across the
[1:24:57] West. West. So, I know that was a long answer, but that was that's a really good question.
[1:25:04] So, next one is about forest management. In that example, I have not understood what they have done to get a more
[1:25:12] resilient forest. Can you explain all the actions that they have done and how which action was justified by OpenET
[1:25:21] data? data? Sure. So, in that case, what they are doing is going in and and doing mechanical thinning and removal to
[1:25:29] reduce some of the understory and in those really dense stands where you have a lot of young trees, actually taking
[1:25:34] out some of the trees to provide more space and reduce competition, especially for water. Um Um there in the upland parts of the forest.
[1:25:44] And so, they're doing that already. So, they're they're doing that to try to reduce wildfire risk. What they're using OpenET for is to
[1:25:53] understand how that's changing patterns in evapotranspiration and also looking for indications of reductions in evaporative stress, water
[1:26:05] stress for the remaining vegetation. So, there's two questions. One is you thin the forest, is that going to reduce ET?
[1:26:10] And as a result, you would expect there to be increased runoff. And two, as they try different approaches to the these
[1:26:17] different forest treatment practices, uh do they see indications of reductions in evaporative stress using the ET data.
[1:26:24] So, they're not the data from OpenET isn't isn't driving at this at this point is not um
[1:26:33] driving the design of the forest management practices and the thinning practices. It's really helping them evaluate the impacts of different
[1:26:41] practices to see which which of the different treatments is going to um most cost-effectively help them achieve
[1:26:49] their goals for management of that that watershed and protect the water resources. Great. Uh next question is it would be
[1:26:58] incredible to replicate this for my own country. I wonder what the resources needed would be and what are the
[1:27:05] essential data variables and what's the global coverage of satellite data? Uh Uh the So, Landsat is global. Um we do get
[1:27:16] an observation from Landsat. Well, the two land Each Landsat satellite gives us an observation every 16 days. We have two in operation, Landsat
[1:27:24] 8 and Landsat 9, so we get an observation every 8 days. Areas that have really frequent cloud
[1:27:29] cover, daily cloud cover, near daily cloud cover in the morning during certain times of the year, that's one of
[1:27:35] the key challenges we're working to overcome uh either through through combination of some of the coarser resolution thermal
[1:27:41] products from VIIRS with Landsat. Also, looking forward to the launch of the Trishna satellite and the SPG satellite
[1:27:48] in the future. Uh looking at um incorporating data from ECOSTRESS into OpenET to help us overcome some of these
[1:27:55] challenges around cloud cover for key areas around the world. The The list of essential data variables is long. Um
[1:28:03] that's described in that OpenET manuscript in JARA. Uh I'll send the link to that paper uh to Amita so she can include it in the
[1:28:13] notes, but if you just search melt in scholar.google scholar.google or another another similar location location melt and open ET jar it should
[1:28:21] come up. Um Um the key thing we would need internationally is uh the the meteorological measurements to help us compute the reference ET. Um
[1:28:35] and so having agricul- access to data from agricultural weather stations in um you know in or near
[1:28:43] uh conditions that are similar to reference conditions for the ASCE Penman-Monteith equation is really helpful to help us assess and identify
[1:28:51] any biases when we compute reference ET from regional or global gridded meteorological data sets. So that's one of the most important things
[1:29:00] is having local uh accurate local weather data from well-maintained weather stations in agricultural areas. What next is how is KC value calculated
[1:29:13] by NDVI? Uh so the the the steps used within SEBAL are to to take the NDVI first calculate uh
[1:29:26] fractional cover and then to uh calculate a density coefficient following the approach developed by Luis Pereira and Rick Allen. There is a
[1:29:38] detailed description of the equations used um in that process in that paper that we published in 2020
[1:29:47] with Luis Pereira uh uh and so in agricultural water management um I will provide the link for that
[1:29:55] paper and that's probably the most time-efficient way to answer that question. Um there's also I also gave a
[1:30:02] talk on that approach for an FAO series uh on about remote sensing of evapotranspiration. I think that's available online.
[1:30:12] Um and so walk through all of the steps. Don't to compute the KC from NDVI. But the the the the paper by Louise Pereira
[1:30:21] walks through all of the steps and equations used. How do you think this method will perform with sparse vegetation?
[1:30:31] Um so we definitely see greater disagreement disagreement amongst the models uh in those sparse vegetation. Uh you
[1:30:42] know, the really arid shrublands. That's one of the areas where we have highest uncertainty. I mean, the models
[1:30:47] typically typically agree that the ET is low, but just how low um is one of the places where
[1:30:54] uh uh we have the largest disagreement amongst the approaches. So um um And And so the uncertainty again as a percent of
[1:31:03] the absolute ET value is uh likely to be higher quite a bit higher than it is over irrigated
[1:31:10] agricultural lands. We're currently qualifying the accuracy with the OpenET Collection 2 since the some of the teams
[1:31:17] made improvements for that particular uh situation um for their models that particular land cover type. So we'll
[1:31:24] have updated information on the accuracy for for shrublands and other sparsely vegetated areas here um shortly. Uh but in general, we'd expect again,
[1:31:33] they'll do a good job of of detecting that the ET is low, but they'll we'll expect higher uncertainty relative to
[1:31:39] the absolute measurement of ET. So just as a percent error, we can expect higher um um higher errors because again, because the
[1:31:46] ET is low to begin with. So we can take a couple of more questions, and I know there is a long
[1:31:53] list that what we will do is try and address as many as we can and then post the answers online.
[1:32:01] Um so the next one is at this point in its its development, would you say that the OpenET mates of open water
[1:32:09] evaporation are better than using other existing gridded ET estimates? I'll be honest, I don't think we can say
[1:32:16] yet. Um, I I Yeah, I I don't think we can say it. We need to do additional comparisons
[1:32:24] um, to see how they compare against pan evaporation evaporation uh, and against um, uh, calculating it from gridded uh,
[1:32:35] you know, directly from from gridded meteorological data products. Um, Um, so I um, um, again, I'm we're looking to Houlin
[1:32:44] Zhao's project and Justin Huntington from the Desert Research Institute is is involved with that work to help determine what the best
[1:32:52] approaches are for quantifying evaporation from open water. So, hoping to have some more of those answers here,
[1:32:57] um, um, soon. soon. So, there's one more question. Are there experiences experiences or examples, I believe, of the OpenET
[1:33:06] project in the rain-fed conditions in United States 17 states? Let me check. Yeah, some of these Yes, um, in terms of
[1:33:16] the accuracy assessment, yes, we certainly had uh, a couple of more than a couple of towers there, um,
[1:33:23] in rain-fed uh, or rain-fed agricultural fields. fields. So, results there were generally comparable with the irrigated agricultural lands.
[1:33:33] Uh, we have some sites over rangelands, so so um, yes, we'd expect accuracies to be similar. The The paper, the OpenET
[1:33:40] paper, also has a table that lists all of the sites used in that initial phase one analysis, so there's also the breakdown
[1:33:47] site by site in the OpenET phase two manuscript will also include that site by site information. Um, we don't have
[1:33:55] We have any use cases at the moment in rain-fed um over rain-fed agricultural lands, but certainly interested in
[1:34:04] developing some of those to understand um um just just help confirm the utility of OpenET for quantifying total
[1:34:13] evapotranspiration over rain-fed lands. We're also looking at rain-fed lands as a way to help us potentially automate
[1:34:21] some of the calculations of or serve as a reference in in developing techniques to automate the calculations
[1:34:27] of effective precipitation. Thank you. Um have you tested this technology in arid desert environments? How does accuracy behave in different
[1:34:41] environments like deserts versus forests? forests? Uh so I'll just say the same answer that I provided earlier with regards to
[1:34:49] shrublands. Um it'll do a the OpenET will do a a good job of especially that ensemble value of detecting thing that
[1:34:55] the ET is low, but the and the absolute accuracy, you know, will probably be within plus or
[1:35:00] minus, you know, half a millimeter per day, but again the the relative accuracy will be higher just because the ET values are so low.
[1:35:08] So small error when you have a low ET value, even a small error is going to result in a high percent
[1:35:13] error. error. Wonderful. Wonderful. Um in general, what is the relation between ET and amount of irrigation water? If ET goes up, should I reduce
[1:35:25] the crop water? Uh so in general, well of course when we see more irrigation, um um we will see a higher ET. And when things
[1:35:35] are underwater or deficit irrigating, we'll see reduced ET. Uh the short answer to if ET goes up,
[1:35:41] should I reduce the crop water? No, not necessarily. And generally not. Um uh uh ET ET from a a well-watered field with um
[1:35:54] minimal soil evaporation uh is going to represent the biological demand for water for the crop. So, the ET
[1:36:05] uh should can provide a target for the amount of water that needs to be applied. Higher Higher ET definitely
[1:36:11] does not mean that water is being used inefficiently, right? And so, uh orchard crops uh vineyard crops are are going to
[1:36:21] typically need more water over the course of the year cuz they have to be irrigated uh as you you know, at least during the
[1:36:26] period where they're where the trees and vines are actively growing. Um So, So, uh uh yeah, so no
[1:36:35] Increasing ET does not mean that irrigation needs to be reduced. Instead, the ET can provide a guide for the
[1:36:41] amount of water that needs to be applied to replace what's being transferred from the soil to the atmosphere.
[1:36:48] Um Um And so, in that sense, it can provide a valuable guide for ET. Now, in practice,
[1:36:54] growers also have to account for uh distribution uniformity, uh leaching fraction if they have, you know, sandy
[1:37:00] soils or heavier clay soils. So, all of that's going to factor into the relationship between ET and the
[1:37:06] amount of water that needs to be applied for irrigation, um which is which is one of the reasons that
[1:37:13] rather than trying to develop our own irrigation scheduling tools, our approach has been to develop the API and
[1:37:17] data services so that data can be integrated with Uh so, the data can be integrated um with some of the existing tools to
[1:37:25] support irrigation and nutrient management um that have already been developed. Great. So, I think that let's make this
[1:37:33] our last question for uh now because it's uh past our webinar time. Uh whatever questions remain, we will
[1:37:41] answer them and post them. So, the question is, "How accurate are ET data when the agricultural fields are
[1:37:48] switching from intensive agriculture to agroforestry or equivalent, mixing trees with different cultures? We haven't We haven't tested that
[1:37:59] that particular um um that that that particular practice where we're seeing fields switch to agroforestry. agroforestry. In general, I would expect the
[1:38:14] the ET You know, we have a pretty good handle on what the ET is for agricultural fields. We'll have a good handle on it
[1:38:20] for for uh different types of of forested land covers. Um so, I would expect the accuracies to
[1:38:28] follow that. Um And so, I I think we could characterize the accuracy using the data that's already been collected. But, we have not
[1:38:38] looked at that particular situation where someone is switching to an from some type of irrigated agriculture type
[1:38:44] of And then, I'll quickly answer the last question there about are you going to use EcoStress data for OpenET? The The
[1:38:52] teams are currently uh a couple of the modeling teams are evaluating EcoStress uh to see if we will just to make sure
[1:39:00] it's going to provide an improvement in the overall accuracy of the current models. models. Um Um that will
[1:39:07] um um enough of an improvement to support this uh software engineering time required um to incorporate EcoStress in the OpenET operationally.
[1:39:18] One another key challenge for us is we're we're trying to ensure that data will be consistent over the long term.
[1:39:24] Uh so, um when the satellites are coming in and coming out of of their um off uh of operations, we want to be
[1:39:33] sure we have a graceful way to um integrate new missions, but still ensure that the the data will be consistent
[1:39:41] over the long term. So, that's that's a key area of key active area of applied research for the
[1:39:47] OpenET team. Katri, thank you so much Forrest for your time and for not only this wonderful presentation, but answering
[1:39:55] all these very interesting questions. And in spite of your busy schedule, you took your time for the
[1:40:04] presentation and question answer. That's is great. I really want to thank you for that. Um and um also want to thank um our
[1:40:13] team, um my colleagues Shawn McCartney and Erica Podest. Uh they helped co-organize um webinars. Uh also um
[1:40:23] Brock Lévins, um Jonathan O'Brien, Sarah Kushner. Uh they are also organizers of this webinar and thank you for your help
[1:40:31] as well. Uh thank you all for attending today's session. Um all the material will be available from the website soon, in a
[1:40:39] day or so. And um we'll see you next week, um at the same time on 8th of June. And at
[1:40:47] that time we'll focus more on EcoStress ET. ET. So, uh thank you again. Uh thanks Forrest, and uh thanks everyone.
[1:40:55] Yeah, thank you all for the excellent questions. Um thank you all for your time. I really enjoyed talking talking
[1:41:00] with you today. Thank you.
