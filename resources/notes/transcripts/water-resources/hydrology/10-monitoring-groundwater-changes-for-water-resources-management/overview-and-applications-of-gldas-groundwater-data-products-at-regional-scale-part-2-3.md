# Overview and Applications of GLDAS Groundwater Data Products at Regional Scale Part 2/3

`https://www.youtube.com/watch?v=IaOGhf9NYDk` · id 355 · 1:31:16 · module 113 — Monitoring Groundwater Changes for Water Resources Management

[00:02] Hello everyone. Welcome back to this training on monitoring groundwater changes for water resources management. This is part two of the training and the
[00:11] topic today is overview and applications of global land data assimilation system groundwater data products at regional scale.
[00:19] scale. This is Amita Mehta again and we're fortunate to have Dr. Matthew Rodell once again as our guest speaker today.
[00:29] Last week we had an overview and analysis of NASA terrestrial water storage data from Grace and Grace
[00:35] follow-on missions. Today we will focus on GLDAS groundwater data. And next session will be on OPERA DISP to monitor
[00:44] groundwater changes. As I mentioned last week, there will be one homework that will be posted on the
[00:51] training website on 30th of April and it will be due on 15th of May. A certificate of completion will be
[00:58] awarded to those who attend all live sessions and complete the homework assignment before the due date. Just a brief review of what what we saw
[01:09] last week. Uh we had an overview of Grace missions and data products by Dr. Rodell and he also talked about data
[01:17] applications to flood and drought. We had a demonstration of Grace and Grace follow-on data analysis tool or
[01:25] Grace interactive browser. Using that we examined terrestrial water storage for uh river basin, Colorado River Basin and
[01:33] we also looked at um area of Ogallala Aquifer and time series uh for that region. Um and and we
[01:43] saw that um groundwater has um strong multi-year variability and there is a decreasing trend as well in this
[01:52] region. We went through an exercise that you must have worked on also. And now we'll start with today's
[02:01] session. Uh it's overview and applications of GLDAS 2.2, it's version 2.2 groundwater data products at regional scale.
[02:12] Our objectives for today are that by the end of this part participants will be able to identify characteristics of
[02:19] groundwater data product from Grace assimilated GLDAS system. Monitor interannual to interdecadal changes in groundwater at regional scales using GLDAS data product.
[02:33] Our outline is that Dr. Rodell is going to provide uh review of key aspects of Grace and Grace follow-on.
[02:40] Then overview of land data assimilation system. system. About Grace data assimilation in ELDAS and groundwater data and then we will
[02:50] have a demonstration of how to uh analyze GLDAS based groundwater data, how to access it, analyze it, visualize
[02:58] it using Giovanni, it's a web tool and we will also use QGIS to do some post analysis.
[03:08] Just a note about asking questions. Please put your questions in the questions box and we will address them
[03:14] at the end of the webinar. Feel free to enter your questions as we go and we will try to get to all the
[03:20] questions during the question and answer session after the webinar. The remainder of the questions will be answered in the Q&A document which will
[03:29] be posted on the training website about a week after the training. With that I want to introduce our
[03:37] speaker for today, Dr. Matthew Rodell. Dr. Matthew Rodell is the Deputy Director of Earth Sciences for Hydrosphere, Biosphere and Geophysics or
[03:47] HPG at NASA Goddard Space Flight Center. HPG comprises more than 350 scientists and engineers within five laboratories
[03:57] involved in remote sensing and numerical modeling of land and ocean processes and related applications. Dr. Rodell has also served as Associate
[04:07] Deputy Director for HPG and as Chief of the Hydrological Sciences Lab. He is a member of the science teams for
[04:16] NASA's Grace follow-on mission and future Grace Continuity or Grace C mission. mission. He leads the global land data
[04:24] assimilation system and projects focused on monitoring groundwater storage changes, mapping and forecasting drought, wetness and detecting climate-related variations in the water
[04:36] cycle. cycle. Dr. Rodell is a past Associate Editor for the Journal of Hydrology and a current editor for the Journal of
[04:45] Hydrometeorology. He has also chaired the Hydrology program for the American Geophysical Union or AGU Fall Meeting from 2009 to
[04:58] 2011. 2011. And led various national and international scientific working groups. He received a Presidential Early Career Award for Scientists and Engineers in
[05:10] 2006, 2006, a NASA GSFC Earth Science Achievement Award in 2007, a Robert H. Goddard Award for Exceptional Achievement in Science in
[05:20] 2011 2011 and an Arthur S. Fleming Award for Outstanding Federal Service in the area of basic science in 2015.
[05:31] He was elected to the rank of AGU Fellow in 2022. Dr. Rodell has more than 160 peer-reviewed publications and appears
[05:41] on Clarivate Web of Sciences 2018 to 23 lists of highly cited researchers. He holds a BS in Environmental Science
[05:50] from the College of William and Mary and a PhD in Geological Sciences from the University of Texas at Austin.
[05:58] With that we invite Dr. Rodell. Matt. Okay, thank you Amita. So I'm Matt Rodell and I'm going to be
[06:08] presenting on the GLDAS 2.2 uh groundwater product in which we assimilate data from the Grace and Grace
[06:16] follow-on satellite missions. Um so in a nutshell, GLDAS 2.2 is one of the versions of the global land data
[06:25] assimilation system. In this case it's the land information system running the catchment land surface model. It's a global
[06:34] simulation excluding Antarctica and Greenland where there's permanent ice cover. cover. Uh the resolution is quarter degree by
[06:42] quarter degree, that's about 25 by 25 km. km. Uh the time period of GLDAS 2.2 is 2003 to present.
[06:51] For uh the input meteorological forcing it uses the European Center for meteorology weather forecasts analysis data. data. Uh which is actually proprietary, we get
[07:01] that through a um through a special uh agreement with them. And uh and in this case uh GLDAS 2.2
[07:09] assimilates assimilates uh data from the Grace and Grace follow-on satellite missions uh which are terrestrial water storage anomalies.
[07:18] So I'm just going to go back and you've you've heard from Amita about Grace and Grace follow-on but I just want to
[07:22] remind you of a few key aspects before we get into GLDAS 2.2. Um so the big thing is that it's Grace
[07:32] and Grace follow-on are unlike any other Earth observing satellite observations that we have because they're not looking
[07:39] downward at the Earth. It's actually two satellites satellites uh one following the other about 200 km apart, about 500 km initial altitude.
[07:48] And the distance between the satellites is continuously measured by a K-band microwave ranging system and also a a
[07:55] laser system on Grace follow-on. Um it's measured down to a uh very high precision about the size of a
[08:02] red blood cell. And this and we're talking about 200 km so it's a huge distance and a very fine
[08:08] uh measurement. And these measurements are made every 5 seconds or so as the uh satellites orbit the Earth and over the
[08:16] course of a month there's enough information uh to uh in this inner satellite range uh along with the precise positioning of
[08:23] the satellites um for it to be put into a a uh supercomputer model and come up with
[08:30] a new map of Earth's gravity field uh based on the information on on um on the satellite orbits. And basically what's
[08:37] happening is uh if there's a mass anomaly at the land surface or the ocean, you know, over the
[08:43] ocean, um that mass anomaly will cause a a difference in the gravity field which will affect the satellites as they pass
[08:51] over. So the example here shows a mountain range. There's more mass in the mountain range, um that means as the two
[08:57] satellites approach the first satellite will be pulled forward a little bit and the distance between the two satellites
[09:02] will increase um as they sort of pass over the second satellite will catch up and even get a
[09:07] little closer as the first satellite's kind of held back and then things will will even out afterward. Um so that's
[09:15] how they would uh detect a mountain range but because the measurements are so precise they can actually detect uh
[09:21] changes in the gravity field from month to month that are caused by changes in terrestrial water storage.
[09:27] What is terrestrial water storage you ask? Well, terrestrial water storage is the sum of all the groundwater, soil
[09:33] moisture, snow, surface water, vegetation water storage, etc. And um to visualize this we have time series uh
[09:42] from the state of Illinois where they actually have measurements of all these quantities on the ground. Uh so they
[09:48] wells to measure groundwater and they have uh soil moisture measurements and snow measurements. measurements. Um and we created a time series show at
[09:56] the top here uh where the blue is the groundwater and then superimposed on top of that is is soil moisture in red and
[10:04] then the white you can just barely see on top is the snow or snow water equivalent water storage.
[10:10] In fact, surface water in Illinois is is small enough that you wouldn't even see it on this time series
[10:15] on a relative base you know relative to the other components. So Grace is measuring the total terrestrial water storage so that's sort
[10:22] of the top contour here. It does not measure the individual components. It can't break it down into these
[10:28] components the way we have with the time series that's that's shown here. here. I also want to point out that you can
[10:35] see there's a seasonal cycle. Each year terrestrial water storage goes goes higher and lower just based on how much
[10:44] precipitation is falling and evaporation and runoff. But you can also see there's interannual variability and the two
[10:49] yellow ovals show the first one shows a major drought in the Midwest during 1988 and 89. And the second one shows 1993 when there
[10:59] was massive flooding in the upper Mississippi River Basin. And the Grace observations look like the the animation
[11:10] in the lower right. And so there are these sort of large blobs of red where it's there's less
[11:16] water than the normal and blue where there's more water than normal. And if you sort of follow along with the months
[11:23] here you can see that you can sort of see the seasonal cycle there where for example in in South America it's it's
[11:29] wetter in the boreal summer and and drier around November, December, January. January. Um Um So these are the the
[11:40] the monthly anomalies but there's also this sort of interannual variability on top of that. And I want to reiterate that Grace and
[11:49] Grace follow and measure all the terrestrial water storage components and we've we've taken a look at you know
[11:55] where those different components have a greater or lesser impact. It turns out that on a monthly basis
[12:02] soil moisture tends to dominate in temperate regions. Snow not surprisingly dominates in in the high latitude and in alpine regions.
[12:15] Surface water is actually dominant in certain areas like the Amazon. And then groundwater storage is is relatively important everywhere but
[12:24] becomes even more important on longer time scales particularly annual and multi-annual time scales. But Grace cannot separate these
[12:32] components and that's one of the reasons why we have GLDAS 2.2 which let me get into that.
[12:38] First I want to talk about land data assimilation systems in general. So obviously GLDAS is a global land data
[12:46] assimilation system. Land data assimilation systems have land surface models as their as their main foundation. And these models are are complex
[12:59] computer models that simulate the processes processes at and below the land surface where they take as input the
[13:07] meteorological we call forcings so things like precipitation, downward downward shortwave and longwave radiation, wind speed and that sort of thing,
[13:18] humidity. humidity. Those are the inputs to the model. Um Um And then they the models basically simulate what happens to that water and
[13:26] energy after it hits the land surface using systems of equations that describe our understanding of these these
[13:34] physical processes. They break down the earth into into a grid and then within each grid they often have subgrid heterogeneity
[13:43] where they they model separately the different vegetation types. And they also have a vertical stratification so they might
[13:54] model the the surface soil moisture and root zone soil moisture and and the case of the catchment land surface model
[14:01] which we're going to be talking about here here the groundwater storage. The reason we have these land
[14:09] land assimilation systems is largely for for integration of data. So if you think about it NASA has you
[14:17] know something 20 something Earth observing satellites in orbit making various types of measurements but it's not always the measurement that we
[14:26] want. want. For example, if we were interested in snow water equivalent which is basically the amount of water stored in the snow
[14:34] on the ground we don't currently have a satellite observation for that. We can we can observe observe snow cover but not
[14:44] but not the more important snow water equivalent. So what a land data assimilation system would do is it uses
[14:51] inputs like precipitation and we might do you know some intercomparison optical merging of the various precipitation products that are available.
[15:00] That's one of the the inputs to the ELDAS. There are also I didn't mention it here but there are
[15:07] also some static inputs things like soil types and and vegetation types and that sort of thing. Um
[15:13] Um And then there are other forcings like shortwave radiation. And then we can do data assimilation which is where you take
[15:23] the model estimate of of the uh of the quantity you know in this case snow water equivalent and then you made
[15:30] an observation of things like the snow cover and you use that observation to constrain the model. And
[15:37] neither of them are perfect. The model has its own imperfections because you know there are errors in the forcing and
[15:43] errors in in the way we simplify complex processes in the model. But um you know and the observation is not
[15:50] perfect either. But when you combine the two taking into account their their error characteristics and their advantages and
[15:59] disadvantages you can come up with a best estimate and that's the point of data assimilation. And then finally we might have on the
[16:07] ground estimates we can use to evaluate the output of the ELDAS and and use that to to improve it and
[16:16] and tweak it to to get better results. So let's get on to Grace and Grace follow on data assimilation.
[16:26] And this is really what makes GLDAS 2.2 different from the other GLDAS products. So again um um the GLDAS 2.2 uses the land information
[16:38] system with the catchment land surface model. model. And it runs a three-dimensional ensemble ensemble common smoother. And I'm not going to get into all the
[16:50] the mathematics of this but just just to be simple about it um um it's a way that you run an ensemble of
[16:59] model runs over the course of a month where you perturb the forcing we adjusted the forcing a little bit to
[17:08] account for errors. And you come up with you know 20 different runs and then those are used
[17:13] to to estimate the uncertainty on the model side. We also have an estimate of the uncertainty in our observation and
[17:20] we use those two uncertainty piece of uncertainty information to sort of weight the the model versus the the
[17:28] observed estimate. And and the smoother allows us to take a monthly Grace terrestrial water storage anomaly observation
[17:38] observation and and use it to produce results on a on a daily or sub-daily basis. So if you're interested in learning more
[17:46] about data assimilation I I encourage you to look at the the reference here and there are various other resources on
[17:53] data assimilation. So here are some results comparing in the upper left the terrestrial water storage anomalies from the what we call
[18:03] the open loop uh The upper right shows the Grace observations and you can see the difference between the two. There's
[18:13] there's a lot more fine scale variability variability on the left in the model output whereas the Grace observations are
[18:19] pretty coarse. They're they look very smoothed out. The lower right shows the results when we assimilate the Grace data into the
[18:27] model and what we what we like to see here is sort of the best of both worlds.
[18:32] It's it looks a lot like the Grace observations at at the larger scale but we have the finer scale variability from
[18:40] the model and the reason the model is able to have that is because it has inputs like precipitation that are
[18:46] available with with much finer scale. In fact, all the inputs are much finer scale than than the Grace observations.
[18:53] So so we hope that the bottom right which is what you would get with the GLDAS 2.2 is again sort of the best of
[18:59] both worlds. So we've done quite a bit of evaluation of the results. I'm going to show you a few different
[19:09] examples. This one from Kumar at all 2016 2016 showing results if you look at on the right
[19:17] right comparisons of the surface soil moisture and root zone soil moisture output from from the Grace data simulating model
[19:25] with with on the ground observations. And in this case we're looking at the the correlation with the with the ground
[19:32] observations and and where you see warmer colors that means the data assimilation results are better than at least in terms of correlation they're
[19:42] better than the open loop or no data assimilation results from the model. So in most cases we're getting either gray
[19:49] which means no difference or or warmer colors. So, that's that's what we want to see. Um looking at the the groundwater output
[19:59] um um in this paper by by Ling Li et al. in 2019, 2019, um they actually looked at uh about
[20:06] 4,000 wells in 22 regions and basins around the world. Um you can see in the map here that
[20:12] they're not evenly distributed around the world. There are some areas where uh like uh Southern India where there
[20:18] are a lot of observations available. Um similarly, the US is pretty well covered, but then um large areas of the
[20:24] world where where there's really no groundwater uh data available for comparison. comparison. Um [clears throat] in these in these
[20:32] regions, um you know, with the with the with these data, we'd be very careful about which observations we used. We had
[20:39] some um selection criteria that were very important in order for uh for proper evaluation. One is that uh we
[20:46] only used wells that were installed in unconfined aquifers, uh meaning that a water table open to the uh basically
[20:54] um open to atmospheric pressure, as opposed to a confined aquifer, which has a confining layer and it has
[21:01] much different um uh uh sort of reasons for for water storage changes observed um in the well.
[21:10] Um Um We want to have uh we want to have wells that were not directly uh influenced by pumping or injections. Um
[21:20] And then we also looked for places where there was at least a 5-year data record, and typically we wanted something that
[21:25] was monthly or or bi-monthly in order to get a reasonably good time series for comparison. comparison. Uh so, that actually cut out quite a
[21:33] quite a number of wells um that we would have otherwise been able to use. Um further, in order to convert a depth to
[21:39] water in a well uh to a a change in in water storage that we can compare with with the model
[21:45] output over with Grace, um we need to know the specific yield, and so we carefully went through and
[21:50] looked at the aquifer types and um and estimate the specific yield for each of those to do that conversion.
[21:58] So, here are some of the results um for a few different regions. Um and so, with the the upper left is a
[22:06] Tocantins River Basin, upper right is the upper Mississippi River Basin, and then the Uganda in the lower left.
[22:13] Um in each of these plots, the red is the the Catchment Land Surface Model um open-loop output, meaning no data
[22:20] assimilation. assimilation. Uh the blue line is the uh is the data assimilation assimilation uh output, and then the black dots are
[22:28] the mean um mean observed uh groundwater storage anomalies. And in these three cases at least, you can see that that when we do the data
[22:38] assimilation, uh the blue is much closer to the black dots, and that means that the data assimilation is doing what it's
[22:43] supposed to be doing. Um on average uh around the world, the Grace data assimilation reduced the root
[22:50] mean square error by 36% uh uh on a regional and basin over a uh river basins and regions around the
[22:58] world, um and increased the uh correlation by 16% on average. However, I will point out that uh as you see in
[23:06] all three all three cases here, um um the the amplitude of the open loop is is higher. So, it was overestimating the
[23:14] the the amplitude of the of the groundwater variability. Um and and this is these are the types of cases where
[23:22] the Grace data assimilation performed very well. It didn't do as well in the opposite direction where um
[23:28] you know, for example, if the if the red line had been had a low uh too low amplitude, um the Grace data
[23:34] assimilation didn't necessarily make it larger um to meet the the observations. Looking at this a different way, um here
[23:44] are 22 uh regions around the world um shown in the in the table in the middle here.
[23:50] here. Uh for each of these regions in the top, we're showing the the data assimilation um root mean square error in blue and
[23:57] the open-loop root mean square error in in uh orange, and uh and then the same for the the correlation in the bottom
[24:04] plot here. Um and you can see the the average statistics again uh on the upper right. Um
[24:13] Um Uh so, looking at this a little bit differently, we can look at these regional scale means, and we can see
[24:18] that the um uh comparing the DA and the open-loop um root mean square error and correlation um changes where the root mean square
[24:28] error decreases on average by 36%, and the correlation increases by 16%. Um if we look at uh point scale means,
[24:37] uh meaning all the the groundwater wells individually, um the root mean square error decreases by 10%, correlation increases by 22%. So,
[24:46] either way, we can see that that around the world on average, the data assimilation is doing what it's supposed
[24:51] to be doing and making the the simulated output uh groundwater storage um better match the the observations.
[25:02] This is from another um uh another publication by uh Riegger et al. in 2015, um looking at the the GEOLDAS 2.2 output
[25:12] um prior to the um a major flood event in the Missouri River Basin in in 2011. Um and what we see is the again the uh
[25:22] the open-loop from the Catchment Land Surface Model um um underperforms the data assimilation results. results. Um if you look at the right uh the
[25:31] rightmost column in the in the table at the bottom, um in comparison with the USGS groundwater anomalies for the Missouri
[25:37] River Basin, um the open-loop had a uh correlation coefficient of 0.58, whereas the the data assimilation output
[25:45] had 0.86. So, pretty significant uh increase in correlation, and likewise a decrease in uh in root mean square
[25:53] error. Uh switching gears a little bit, um I just want to talk about um sort of how this
[26:03] this uh GEOLDAS 2.2 got started. Um originally, we were looking at uh just the the continental United States to do
[26:10] the Grace data assimilation, and we had a project where one of the goals was to create um drought and wetness indicator
[26:16] maps that could then be used by the authors of the US Drought Monitor. So, um it was a similar sort of a uh
[26:23] configuration configuration um of Land Surface Model system running the the Catchment Land Surface Model. Um in this case, we used NLDAS-2
[26:33] uh meteorological forcing, and um and we produced these maps um that are basically the percentiles of uh
[26:42] of uh wetness for each location. Um Um So, what that means, and and I'm looking at the the on the lower right, the
[26:50] surface soil moisture, root zone soil moisture, and groundwater maps, um what these percentiles mean is is for
[26:56] example, if you're at the fifth percentile, that means it's only been drier at that location um in the same
[27:03] time of year 5% of the time in the long-term record. Um similarly, if it's at the 98th percentile, it's only been
[27:10] wetter at that location and time of year uh 2% of the time. Um so, so we produced these maps in the same
[27:19] way. We have the you know, in this example, the lower right is showing the Grace terrestrial water storage
[27:23] anomalies in May 2014. Um it's a pretty coarse uh pretty coarse scale. It's actually even coarser than
[27:30] you you get the feeling for with this gridded product. product. Um we assimilate that into the model,
[27:36] and then the model is able to give us uh the nice-looking maps um on the lower right.
[27:42] And uh and then compare that with the uh the 20th of May uh 2014 US Drought Monitor in the upper right. You can see
[27:50] the comparison is pretty good in terms of the the overall um patterns. Um there's more information in the in the
[27:57] Grace data assimilation um um uh maps because they have different levels, whereas the Drought Monitor is really supposed to represent sort of all
[28:05] levels, uh and um and also the Drought Monitor does not uh indicate, you know, uh wet periods.
[28:15] Um Um So, since uh since about 2011, we've been running uh running this, and it's actually used as one of the inputs to
[28:23] the US Drought Monitor. Uh the Drought Monitor authors look at look at our products as well as many other things
[28:28] when they're drawing their weekly maps. And if you go to the National Drought Mitigation Center uh website, um
[28:37] if you have the uh if you have this um this presentation, you can hover over Drought Mitigation Center in the bottom,
[28:44] and you'll get um actually great NASA Grace {dot} unl.edu. If you go there, you can um you can choose some different options
[28:52] at the at the radio buttons at the top. Um and so, the left is the the US um
[28:59] uh ground shallow groundwater drought indicator, and you can flip between that and root zone soil moisture and surface
[29:04] soil moisture. Um the middle is basically drought indicators global drought indicators based on GEOLDAS 2.2, and the right is uh is an experimental
[29:15] um forecast product for one, two, and three months uh into the future. If we compare um the US Drought Monitor with with our uh
[29:28] basically Grace DA um uh drought and wetness indicators, um um we can look at the different drought
[29:35] categories. Um and if you look at the lower right there, you can see uh wetness percentile ranges for each
[29:41] drought category. And what's plotted here is um is in red the uh US Drought Monitor and blue
[29:52] blue the uh the the Grace DA base drought indicators. And in the black dash line shows you
[30:02] where you want the average to be. This is this is the the accumulation over the entire US. So So basically shows the
[30:09] percentage of area in the US versus time in each of these plots. And so where where you see a higher number that means
[30:19] there's more drought, you know, around the US and lower number means there's less drought. And you can see that in general,
[30:26] especially if you look at the lower right, all drought categories, you can see that the um the the Grace base drought indicators
[30:34] are pretty well correlated with the US Drought Monitor. The other thing you'll notice is the US Drought Monitor
[30:40] numbers or or percentage areas tend to be a lot higher. That's actually sort of a flaw in the US Drought
[30:48] Monitor. The dash black line is supposed to show the long-term mean for each of these. So if you look at again at the
[30:56] lower right, the percentile ranges, for example, D0 21 to 30% that implies that about 10% of the US should be in
[31:05] drought in any given time. But look at the the top left the top left plot there, you can see that
[31:12] the D0 drought category for the red line, which is the US Drought Monitor, is is almost always above 10%. So this is just sort
[31:21] of shows the tendency of the US Drought Monitor authors to sort of overestimate overestimate drought. And they may have a little bit
[31:29] of um I won't call it bias, but they may have a little bit of pressure to put different, you know, counties in
[31:37] drought because it affects the uh affects the distribution of of disaster funding. funding. Um Um So but overall the you know, the
[31:47] important message here is that that our drought maps tend to line up pretty well with the the US Drought Monitor.
[31:57] This is one of my last slides and it's an animation of the the US Drought um or sorry, not of the the Grace base
[32:06] drought indicators over the US. The left is the root zone soil moisture wetness percentile and the right is the shallow
[32:13] groundwater wetness percentile. And And what's cool here, I think, is you can sort of see the the evolution of
[32:22] of drought and pluvial or wet events. Um And the root zone soil moisture, which is in, you know, basically direct
[32:30] um um communication with the atmosphere, changes much more quickly. So if you have a you know, you might be in
[32:36] drought, but then you have a have a big rainstorm come through, boom, you go straight from red to blue. But on the
[32:41] right there, the shallow groundwater, you can see that that because it's not in direct communication, because groundwater is a bigger store of water
[32:48] and it reacts and and evolves more more slowly, you can see that these these droughts sort of take a while to evolve and
[32:58] and take a longer to uh to dissipate than they do with the root zone soil moisture. So I always think this is this
[33:04] is sort of fun to watch. And we've done this for the the global scale as well, but it's kind of nice to see the the
[33:10] fine scale granularity for the US. So let me summarize what I've talked to you about with with
[33:21] the Grace data assimilation and and the GLDAS 2.2 product. Grace and Grace follow-on are unique in that they observe changes in
[33:32] terrestrial water storage including all forms of terrestrial water storage which is not something that any other satellite system can do.
[33:40] We use land data assimilation systems to integrate data from various sources which allows us to fill spatial and
[33:47] temporal gaps using algorithms that represent our knowledge of the physical processes. In GLDAS 2.2, we assimilate the Grace and Grace
[33:58] follow-on observations of terrestrial water storage and it allows us to basically downscale those those terrestrial water storage
[34:07] observations in space and in time and also perform vertical disaggregation. So we can separate the groundwater from the
[34:15] soil moisture and snow, etc. Um Um We've used the GLDAS 2.2 soil moisture and groundwater output. Um
[34:24] And we evaluate those extensively and use them for producing drought products, but they do have some key limitations.
[34:32] First is that the model does not simulate water management. So especially in areas where there might be intensive
[34:38] irrigation that's that's fed by groundwater pumping, you might have a long-term decline in in groundwater storage. Or maybe there's a
[34:48] seasonal aspect to it, you know, when when it's the the growing season, you might have the a big decline in
[34:54] groundwater storage because there's pumping in an agricultural region. That's not simulated by the Catchment Land Surface Model and and therefore
[35:03] um um while the it is detected by the Grace observations, if it's something that's happening with some fine scale
[35:10] variability, variability, we're not able to effectively downscale the Grace and Grace follow-on observations over those sorts of
[35:19] those sorts of regions and in that sort of case. The second issue is that the model does
[35:24] not simulate confined aquifer storage changes. And those those could be an important component of the terrestrial water storage storage changes observed
[35:32] by Grace and Grace follow-on in certain regions. regions. Um And I'll just end by saying that these output are available
[35:41] on the the Goddard Earth Sciences data information services center. And we can also get the drought and wetness
[35:48] indicator maps and forecast from the National Drought Mitigation Center website. Thank you so much for listening and I'm
[35:57] going to pass the mic back over to Amita and and I'll be here for the question and answer session.
[36:05] Thank you so much, Matt, for your presentation and information about Grace assimilated GLDAS groundwater storage data. Next, we are going to have a brief
[36:16] demonstration of access analysis and visualization of GLDAS groundwater storage data using a web tool Giovanni. We will also do some processing using
[36:27] QGIS. First, we'll learn to create maps and time series of groundwater storage data using Giovanni. We will look at groundwater storage
[36:41] differences over interannual to interdecadal time scale. The case study I've chosen is a small river basin, Klamath River Basin, and
[36:52] I'm going to share my screen with you to talk about the river. So Klamath River Basin it it straddles
[37:03] California and Oregon. So northern California, southern Oregon. And it's a small river basin. If you recall last
[37:12] week, we saw in Grace interactive browser, major river basins are covered in there. If you are interested in
[37:21] looking at region of your own interest, you can use GLDAS to do that. And that's what we are
[37:28] trying to see here. So this river there is groundwater issues, but also there are multiple dams on this river. It's
[37:35] used for water is used for agriculture, flood control, hydropower, recreation, fish and wildlife habitat, and also has
[37:44] tribal treaty rights. Just to see the basin, this is the basin that we will be focusing on.
[37:53] And for that, I'm going to start with Giovanni to access GLDAS groundwater storage data. This is the Giovanni web page and you
[38:02] have this link in the presentation slide that you can access. One note is that you will have to register to NASA Earth
[38:10] Data to be able to download images or data using Giovanni. Just go through this page quickly. If you know what data you're interested
[38:21] in, which parameter, then you can just enter here and search by keyword. If you are just searching in general, you can
[38:29] go to observations, different disciplines, measurements, platforms. So there are multiple options that you can explore. If you are just looking for
[38:40] different data sets. If you already know, you can just enter here and I'm going to do that. GLDAS
[38:50] groundwater groundwater Sorry. And you can search. You will see two options. We want this data assimilated Grace assimilated.
[39:10] Goes from 2003 to January 2026. The daily data units are in millimeter and resolution is quarter degree.
[39:23] Once you choose the parameter, you can pick analysis and visualization option. So select plot. Here you have multiple
[39:31] options as well. You can make maps, you can make time series, difference of map and difference of time series. There are
[39:40] other uh that can compare and make correlation maps, scatter plots. There are Hovmöller diagrams you can make,
[39:48] histograms, zonal mean, and uh vertical cross sections from different data sets if they're 3D data sets. Um
[39:57] Um we are going to stick with time average map for now. And uh here is the um
[40:03] time selection window from and uh to. So, let's do one thing. We are going to first look at two different
[40:11] decades uh and average uh ground water storage data for that. So, I'm going to start with um
[40:19] February 1st uh 2003 when the data starts and go to uh 2 2013 um December 31st. So, we look at first period and
[40:38] then we'll go from 2014 to 2025 to see the difference between ground water storage uh over Klamath
[40:46] River Basin. This is the window that allows you to select region of your interest and there are multiple ways to do that. Um you can
[40:57] enter uh longitude and latitude if you know exact um box that you are interested in or you can go to the map
[41:06] by clicking here and make a box here or any region that you are interested in. And those coordinates will uh appear
[41:15] here. here. Uh another way to do is to click here and this has uh different shape files already uh
[41:25] available in Giovanni. So, it's different countries, uh lakes and reservoirs, land only, sea only, um tribal lands are there, US states are
[41:36] there, uh world regions and so as we world regions and most importantly what we are going to look at is watersheds.
[41:45] Different river basins are given here. Uh for Klamath River, which is a smaller river and not included in here, I have
[41:54] already looked at um coordinates and then I'm going to just uh enter those here. So, these are
[42:02] longitudes, so it's um west 125 to 120 box and this is 40 to 43.5 north and if you click here, uh
[42:15] this will uh show you uh where the box is. So, here between Oregon and California, here's where uh Klamath
[42:25] River Basin is. So, that's what we are picking and once you have uh picked all the options, all you have to do is just
[42:32] say plot data and it launches a workflow. So, here I have already done that to save time. It takes um depending
[42:44] on the data resolution, uh it may take a few seconds to maybe a minute or two, but I have already done that and so this
[42:54] is the map uh over the region that we chose and this particular map is from uh 2003 to um
[43:04] 2013 December. Um and you can see this is the the color bar here. Um that is red is lower ground water
[43:14] storage and in the upper part of the basin there is more ground water storage as you can see. Um
[43:23] Once you have this map, what you can do is you can go back to data selection and I'm going to
[43:30] go to this window. Uh it's the same map we got here. You can go back to uh data uh selection and keep the same
[43:40] uh but now look at the next decade and here I'm going to pick 2014 January January 1st. I'm sorry.
[43:54] 1st to 2025 December 31st. So, this is next decade from what we saw previously and again you can say plot data and you will be um
[44:11] you will see the the map again. Uh this map is given here. It starts in 2014 and you can see that uh of course
[44:22] the pattern's pretty much the same. Uh magnitude we will compare in QGIS in a couple of minutes.
[44:29] Next, what we want to do is look at time series of ground water storage data and for that I'm going to pick the entire um
[44:41] time period that data is available. So, February 1st um and let's us go to 2025 December. December. So, here I'm going to go to select plot
[44:54] options and say uh time series area averaged. So, this is going to average ground water storage data over that
[45:03] entire box and it's going to give a time series and you can plot it and the workflow launches.
[45:10] Again, to save time I've already um um done the time series analysis and then if you see this is the time series.
[45:20] Here it's um in millimeter ground water storage uh from 2003 all the way to 2025 December. Uh clearly you do see annual
[45:33] variations. These are daily data as we saw. So, you can see annual uh variation, but you can also see that
[45:40] there is interannual variation in uh ground water storage. Um and uh what you can do is if you're interested in any
[45:49] particular year, you can go back to uh data selection and just pick say 2005 to 2006 and make a map um or make a time
[46:04] series for that particular year. Uh so, you can do it year by year. And uh then you can have different maps
[46:12] for different years. So, again, go to results um and this is uh quick way to uh see the time series. Uh next thing
[46:23] that we are going to see is how to download this. You can just go to download. You can save this file as
[46:29] netCDF or PNG image or you can have a CSV file. So, you can then uh either go
[46:36] to Excel and plot it uh the way you like it or you can then parse it uh by time
[46:42] different temporal domain. You can do all that with CSV as well. Uh for map also uh you can download data in various
[46:52] formats, either netCDF data file or KMZ for Google Earth, uh PNG just image as we saw on the screen and GeoTIFF,
[47:01] something that you can work with either ArcGIS or QGIS. Uh and I have already saved these files
[47:10] uh uh in GeoTIFF format, so we can look at them in QGIS and have also downloaded uh CSV file uh for time series. So, uh
[47:22] you will be following these steps for uh another river basin. Uh so, just keep note that you will be
[47:28] downloading some of these data. And so, uh now what I'm going to do is uh uh let's go back to data selection and just
[47:38] um um we looked at map, we looked at time series, we know how to change time and
[47:43] how to change uh special domain. So, now I'm going to close Giovanni and now go to uh QGIS to see how ground water
[47:51] storage changed between those two periods that we looked at. Uh so, let me share QGIS project with you.
[48:02] So, this is the QGIS project. You need to install QGIS on your computer. There is a link in your presentation for that
[48:11] as well. Uh you can follow steps and have QGIS on your computer. Uh once you have QGIS, you can click
[48:19] open and this window will open. You can go to project and open a new project. That is what I've done and this is the
[48:27] new project. Now, you can go to web here first and add uh quick map services. I'm going to use uh
[48:39] Google Google road map. Uh you can choose other options as well. Uh now you can follow the instruction in your exercise.
[48:54] If you do not have this plugin quick map services, then you can go to plugin and install uh that particular
[49:04] plugin and there is a instruction given to you for that. But uh you can follow that and you will be able to have a
[49:13] background map or base map uh on uh QGIS like this. Now, we can start adding the data layer
[49:20] we saved from Giovanni. So, for that go to layer and first we are going to add those map or raster layers. So, add
[49:30] layer layer and add raster layer. And here I have saved uh them in a folder folder Geldas Giovanni and if you look at the
[49:42] names names This is 2013 so 2003 to to 2013 and then this is the other decade you can Highlight
[49:57] And shift and both and add both at the same time open And add And now you can close this window and
[50:08] you can you can just use your computer mouse mouse To zoom in or you can use this
[50:18] To zoom in here And use this hand symbol to move your map map So now these rasters are added
[50:31] So once the rasters are added we can change change color symbology here so go to Control click and go to properties And
[50:43] in the properties select symbology Here I'm going to pick Single band pseudo color And these are the mean and max values
[50:54] for the groundwater storage for this particular raster we can make it round number If you like sorry about that
[51:09] And And then this is the color ramp you can change different colors we are going to keep the same
[51:17] And here Instead of continuous let's have equal interval interval And you can decide how many intervals or
[51:27] classes you want I'm going to pick 21 One more thing is that you can Select label precision I'm going to say two
[51:39] so that number of digits after the decimal point And these are the groundwater storage intervals for different colors that we see Once you do
[51:50] that you can say okay okay one more thing is you can do legend setting here And instead of continuous just turn that
[52:00] off so that we can see different intervals here and now you can say okay So now you can see that this
[52:09] raster Has colors showing different groundwater storage range from 450 to 1250 Next what you can do is click again and
[52:24] go to styles and copy style And now go to the next raster layer Go to styles and
[52:35] Paste the same style so you have the same same groundwater storage scale for both the maps for you to compare and now you can
[52:45] click and compare we are also going to see the differences soon but this is the way to do symbology and add your add the
[52:54] colors that you like One more thing is that I have Downloaded Downloaded vector shape file for Klamath River Basin and I'm going to
[53:07] display that so this is the shape file I'm going to pick through layer and add vector layer and then
[53:16] Open and add And so You can move the layers around this is the Klamath River Basin you can again
[53:24] use properties and symbology to make it Transparent Transparent field And you can change uh Line colors if you like I'm just going
[53:39] to keep it the same for now and here now you can see the boundary of the river so
[53:45] here in the upper part of the basin you see more groundwater storage compared to the lower part which is in California
[53:53] >> [snorts] >> You can also clip your raster or crop your raster so that it just is within the river basin
[54:02] and for that you can go to raster Extraction and then say clip raster by mask layer You can choose input layer this is the
[54:16] 2003 2003 to 13 and this is the mask layer which is the shape file of Klamath River Basin And
[54:26] you can keep Everything else as default and then run And you will see that there is a
[54:40] Raster that is cropped here this is just in within this of course there is because of the resolution there
[54:48] are some areas which are not there you can interpolate and fill that up but for now now this is
[54:55] good approximation for the river basin You can Rename this clipped mask you can control click and go to rename layer
[55:05] And click here again to add the name you like I'm going to pick Geldas Groundwater storage 2003 to 13
[55:18] And you can use the same color style For this layer Copy style and then Paste the same style so now You can see
[55:35] that Let's turn the these two layers Off so that we can see the groundwater storage within this
[55:45] river basin I have done the same processing with um Raster layer from 2014 to 2025 so just do extract
[56:01] And here I picked 2014 to 25 raster river basin as mask One more thing I've done is I Set the file name here in
[56:15] clipped mask and then run And I have this raster here Also I have added symbology to it the
[56:24] same uh Using styles for copy and paste so we have these two layers now you can See
[56:33] how groundwater is changing And to do this calculation to see the differences between them go to raster and raster
[56:43] calculator calculator Here window will open with raster bands and these are the operators for calculations calculations I'm going to
[56:52] Add temporary name for The difference file as GWS diff And then now you can go here when you click on
[57:05] the raster you're interested in so this is 2014 to 25 double click and it appears here minus 2003 to 13 and now
[57:17] you can say okay Now this raster has been calculated and we want to make sure that it has the
[57:25] same same CRS or coordinate reference system so that is EPSG:4326 and now you can see the Raster here as
[57:36] you can see everywhere groundwater storage is negative that means groundwater has decreased between 2003 to 13 decade and
[57:48] then you can symbolize it just as we did before to see numbers better You can go to symbology
[57:59] Go to single band pseudo color you can keep the same range and same here here we can go to equal interval and maybe
[58:10] say say 10 for now And Have proper numbers numbers displayed or in the color table and say
[58:21] okay and now you can see that um The differences are shown here as you can see there are some regions
[58:30] where it is um Yellow and red these are the much larger differences so in in this area in this
[58:41] area in this so you can look at how groundwater changed different parts of the basin So this concludes our demonstration of
[58:53] how to get data from Giovanni and analyze the data in QGIS you will be doing similar exercise with
[59:02] another river basin I'm going to Go back to the presentation window window thank you This brings us to the end of our
[59:13] demonstration of how to access and visualize Geldas groundwater You also have an exercise on the training website that you can download
[59:24] you will be working on this exercise for your homework So you can download and follow the steps
[59:33] Next session will be on overview of observational products for end-users from remote sensing analysis or opera surface displacement products. So disp
[59:43] is the product we'll be focusing on. The homework will be posted on the training webpage on 30th of April and it
[59:52] will be due on 15th of May. Our homework answers must be submitted via Google Forms. Forms. A certificate of completion will be
[1:00:00] awarded to those who attend all three live webinars and complete the homework assignment by the deadline. Uh you will receive a certificate via
[1:00:09] email approximately 2 months after completion of the course. We thank Dr. Rodell for his presentation on GLDAS groundwater and also for his
[1:00:20] presentation on GRACE missions uh last week. week. Here's the contact information. Uh if you have any questions, please
[1:00:29] contact us. Um our set website and YouTube links are given here. For questions, comments, or to share how you
[1:00:36] have applied our trainings to your work or studies, email nasa.arset@gmail.com. Uh and join our quarterly newsletter to
[1:00:46] stay up to date on our latest trainings. You can join our listserv at this email address and follow the steps.
[1:00:55] And thank you very much for attending this session. Uh you have uh time to start with the exercise and then we will
[1:01:02] have question and answer session. Thank you. Hello. Um Welcome. Uh Dr. Rodell, uh we are here in the
[1:01:21] question and answer session. Um I hope you all had uh some time to work on the exercise and have made some
[1:01:28] progress working with your money uh downloading GLDAS data and you can process that in QGIS and save your
[1:01:37] results so that homework questions can be answered based on that. And now uh we will start with uh
[1:01:45] question and answer session. Um we'll go through uh few questions till the end of um this webinar time. So
[1:01:54] we're starting from question one. How does the assimilation work daily when GRACE and GRACE-FO data are monthly?
[1:02:04] Um so first of all, hello everyone. Can Can everyone hear me? Just want to make sure. Yes. Yes.
[1:02:08] >> Yes. Okay, great. Um so this is actually uh not an easy question to answer. Uh we use something
[1:02:15] called a ensemble common smoother and um and you can read about it in some of the um
[1:02:24] uh uh some of the publications that we've that we've done on on GRACE GRACE-FO data assimilation. assimilation. Um but essentially it sort of mimics the
[1:02:33] the observation type and and um does a correction to the model um uh typically three times per month um
[1:02:43] and uh you know, sort of based on the the trajectory of the changes. Um so it looks at the difference between a
[1:02:53] um um the simulation system looks at the difference between the monthly average uh from the model and the monthly
[1:02:59] average from GRACE um um uh really the the month-to-month changes of each and then it um makes a um makes
[1:03:08] an adjustment to the model based on based on the difference and um uh and applying information on um
[1:03:17] uh on the uncertainty in both the model and the observation to do sort of a waiting between the two.
[1:03:23] Uh Uh so that's that's it in a nutshell, but it's it's really quite a bit more complicated than that.
[1:03:31] Thanks, Matt. Uh next question is, how well does root zone soil moisture from GLDAS represent seasonal soil moisture
[1:03:38] dynamics in agricultural regions considering differences between summer and winter crops and the impact of irrigation? irrigation? So I'll take the last part first. So
[1:03:48] first of all, um we do have uh an irrigation um simulation routine in the land information system with you know, as the
[1:03:57] software behind GLDAS, but it hasn't been turned on in any of the the current GLDAS version. So GLDAS 2.2 does not
[1:04:04] simulate irrigation. Um and therefore uh in irrigated regions um yeah, I would definitely say that that there are going to be significant
[1:04:13] differences between you know, on the ground uh soil moisture where there's irrigation and what the model is
[1:04:20] um is simulating. Um Um and uh um yeah, summer and winter crops, so so yeah, if there's multiple crop types,
[1:04:32] then then um that's not going to be simulated in GLDAS either, so that could have an effect.
[1:04:38] effect. Um you know, but overall we are making use of um precipitation data that are basically observation based
[1:04:46] and um and so the the precipitation is going to have a large impact on the root zone
[1:04:50] soil moisture and so where there's where there's not irrigation um I think you know, we do a region a reasonable job of
[1:04:57] simulating the soil moisture, but um but you know, where there's irrigation, then that's it's going to be uh less than perfect
[1:05:06] by a lot. >> [laughter] >> Yeah. Uh question four is, is there a reference to look up the formula to
[1:05:15] convert well data using specific yield to compare with um GLDAS? GLDAS? Well, the formula is very simple, but
[1:05:25] finding the specific yield data is the is the difficult part. So specific yield is going to be a number that ranges
[1:05:31] between between about um 0.02 and 0.5 and it depends on on the type of um the type of aquifer
[1:05:41] you know, basically the porous media that the water is in. So something like a sand or a gravel is going to have a
[1:05:47] high specific yield. It could be point you know, anywhere from 0.25 to 0.4. Um Um you know, if it's a if it's a uh
[1:05:54] limestone aquifer with huge, you know, caverns in it, it could be closer to to 0.5 or or even more.
[1:06:00] But um uh you know, if it's something like a a clay or a um uh sandstone um
[1:06:08] and it's it's you know, not fractured or anything like that, then specific yield could be very low. So
[1:06:14] the formula that you asked about is is simply the the well um the water level in the well multiplied
[1:06:21] by the specific yield it converts to um to to a storage value. Um so if you had uh a change
[1:06:30] of um of 10 cm of water in your well and you had a specific yield of 0.25
[1:06:38] then you multiply 2.25 by 10 and you would have a a 2.5 cm change in water storage you could directly compare
[1:06:47] uh with with the GRACE observation. Um but again specific yield is going to vary from place to place, so finding those
[1:06:56] specific yield values is is is difficult. You basically need to know something about the aquifer and make an
[1:07:01] assumption assumption about the specific yield or or um you know, if there's actually been a a well
[1:07:06] log and they've removed um you know, when they dug the well you might be able to get a more accurate
[1:07:13] number, but those are again hard to come by. Thanks, Matt. Um question five is, does terrestrial water storage data also
[1:07:22] include information on water pollutants and does it uh vary based on differences in geographic location? It has no information on pollutants.
[1:07:35] Mm. Mm. Question six is, when groundwater elevation drops, eventually stream base flow drops, then disappears, and the
[1:07:44] stream runs dry. This has been observed in western and central Kansas. Has anyone looked at time series of stream
[1:07:52] flow data looking for gauges transitioning from perennial to intermittent flow regimes with base flow as an indicator of drought, climate
[1:08:02] change, or human impacts? >> [laughter] >> Um I I don't know the answer and I don't mean to sound glib, but I would you
[1:08:09] know, to find the answer, I'd probably go to Google Scholar and and uh and look and see if
[1:08:15] um if anyone's done anything like that. I I don't know of it off the top of my
[1:08:19] head, but certainly people could have done that type of research. I'm not sure. Thank you. Um when we calculate anomalies in GLDAS
[1:08:29] 2.2, what years do we use for normalization? Um Um so uh I think we've we've tried to align
[1:08:41] with the um with the GRACE years, uh you know, the GRACE baseline. Um Um However, so so what we do is
[1:08:51] with GLDAS 2.2 is when we assimilate the GRACE data um um we have to uh uh basically align the the model with
[1:09:00] the GRACE and make an make an adjustment. So so for the um we might take an averaging
[1:09:06] period of 2002 to 2020. I don't remember the exact averaging period that we use exactly to be honest.
[1:09:14] Um Um and uh and we take the average and look at the anomalies relative to that that
[1:09:18] baseline and then do the same thing with GRACE GRACE use a you know, it could be it would be
[1:09:24] the same baseline 2002 to 2020 if that's what we chose. And then when we do the um the data
[1:09:30] simulation, we make an adjustment, if the anomaly is off by 1 cm, let's say the you know, we need to increase
[1:09:36] um um water storage by 1 cm in the model to to better align with the grace observation,
[1:09:42] we then add that 1 cm to whatever water storage value um was in the model. So So the model
[1:09:51] doesn't have an anomaly, the model has um um a an actual amount of water stored in each soil
[1:09:58] layer and in its uh representation of the aquifer. Um Um and those numbers are also um sort of arbitrary. I mean, they're not
[1:10:08] going to align with with uh the real world, but um but that's how we make the adjustment is
[1:10:15] uh with a data simulation as we look at the difference between the anomalies of grace and and and and the model and then we add
[1:10:21] whatever adjustment we're making. We actually call that an increment. Um we add that increment to to the model
[1:10:28] states. states. Um yeah, so I'm I'm not I I I didn't I sort of danced around your question
[1:10:34] there. Um Uh Uh what years do you use for normalization? You could you could basically use whatever years you wanted to um
[1:10:42] if you wanted to you know, average over a certain time period and and calculate the baseline, you know, that mean as a baseline and
[1:10:50] then subtract it to get um to get anomalies. Mhm. Mhm. Thanks, Matt. Uh next question eight is if we want
[1:11:00] monthly estimates of soil moisture changes from the for the conus that include conditioning on remote sense soil moisture, should we
[1:11:10] use GLDAS 2.2 or a version of NLDAS? Um so I I'm trying to read the question and it
[1:11:19] keeps moving around here. Um Oh, question eight. Yeah. Yeah. Uh well, you know, if you're if you're
[1:11:31] interested in the conus um um and and remotely sensed soil moisture uh uh yeah, this is difficult difficult to
[1:11:42] answer. Um it depends on what remote sensing you're talking about. If you're you know, if you're talking about the
[1:11:47] grace remote sensing, then you probably want to use the GLDAS 2.2, but if you're talking about um
[1:11:54] you know, uh SMAP soil moisture um um you know, the uh >> [clears throat] >> NLDAS has uh has a higher
[1:12:03] resolution and somewhat better um input data. So uh generally when people are interested in in in the conus um
[1:12:14] and they're not interested in in the groundwater component, they're more interested in the soil moisture, I'd probably point them to NLDAS, but
[1:12:20] they both have their own advantages and disadvantages. Wait. Thank you. Um Question nine. I'm looking to analyze
[1:12:32] drought patterns across southern Alberta and would like to compare grace based drought indicators with existing groundwater well records in the
[1:12:41] province. Are there any guidelines you can suggest for the best types of wells to use for such an exercise? Do I need
[1:12:49] to select between active and inactive wells uh for such analysis? Yeah, the >> [clears throat] >> the things that we look for in wells to
[1:12:59] compare with grace data are number one, um it should be uh uh a well that's in an unconfined aquifer.
[1:13:08] Um so a lot of wells go deep and they were they're um installed in confined aquifers and those are not appropriate
[1:13:13] for comparison um with grace observations. Um [clears throat] secondly, you want to have a long, you know, the longer the
[1:13:20] data record, the better. You know, if it's it's um um you mentioned inactive wells, um I guess you mean a well that's not
[1:13:28] uh observations aren't being made anymore and if you know, if there were um you know, if there's a long time series
[1:13:35] of observations that happens to end in 2019 or something like that, you could still compare with the older grace data,
[1:13:41] that would be that would be fine. Um but um but you know, you you'd really like to have
[1:13:48] you know, if you're interested in in current conditions, then clearly you want to have uh a well that's still actively monitored.
[1:13:55] Um and you also, you know, depending on whether you're interested in uh you know, the seasonal cycle and and
[1:14:01] short-term variability versus you know, just long-term trends, then that sort of helps determine whether you know, you
[1:14:08] need you know, is one observation per year enough or do you want to have you know, at least seasonal observations and
[1:14:14] that sort of thing, but um uh and then the final thing I'll mention is you don't want to use measurements
[1:14:21] from a well that's actively pumped or right next to, you know, a municipal water supply where they're doing a lot
[1:14:27] of pumping or uh agricultural area where they're pumping a lot of water for irrigation. Um that's going to have uh
[1:14:35] you know, variability that's determined, you know, by the pumping and not so much represent the the larger scale ambient,
[1:14:43] ambient, you know, groundwater conditions. Thank you. Uh the next question is um it's about exercise and I think we've
[1:14:56] gone through that, so I'm going to question question 10. I am unsure if I understood the reach of GLDAS. Is it a model that
[1:15:06] incorporates different data sets? Are the outputs only for the US territory? Uh if that is the case, can we modify
[1:15:13] code I saw No, I think I we answered that question, Matt. If you want to look at it, so that GLDAS is a global land
[1:15:20] data assimilation system, on incorporates different data sets and uh so data are available globally. You want to add anything, we can.
[1:15:31] Yeah, no, that's you're correct. It was already Yeah, GLDAS runs globally already, so you don't need to modify the
[1:15:36] code in other areas and it does incorporate multiple different um inputs. Uh question 11, we'll skip, that's about
[1:15:48] Giovanni and future. Yes, the next one is uh question 12. As lakes don't really flow, is it easy to capture its decrease in
[1:15:58] volume? Well, uh if you're referring to um based on a a grace observation, um you know, first of all, most lakes,
[1:16:10] unless you're talking about the Great Lakes, are are too small to have um a discernible uh effect on on the grace observations.
[1:16:19] Um if it's a group of lakes, you know, like in parts of Africa where there you know,
[1:16:24] know, you know, several lakes close to each other in in southeastern Africa, those um um those effects can be seen in the grace
[1:16:31] data. Uh uh for GLDAS 2.2, we don't actually model lakes explicitly. Um uh and you know, as it regards to your
[1:16:41] question, uh lakes don't really flow, they don't you know, something doesn't have to flow for it to have a change in
[1:16:47] water storage. So if the lake level is going up and down, you know, like a like a reservoir level
[1:16:53] going up and down, that you know, that translates to a change in mass that is detectable by grace theoretically if
[1:17:01] it's a large enough change in mass. Great. Thank you. We're going to question 14. Um What is the latency of GLDAS 2.2? Can it
[1:17:13] be used for early warning? GLDAS 2.2 is typically made available um within about a month of real time, I
[1:17:22] think. Um Uh although no, we have we have an early product. product. Ah, I should have answered this. It's
[1:17:30] either a month or it's either within a week or a month of real time that it's it's updated. So um
[1:17:36] uh it might actually be weekly updates at this point. Uh so it's it is more it's updated more
[1:17:43] frequently than than the data available from from grace because grace is uh has a a latency of typically two to four
[1:17:50] months. months. Um Um uh and we can run up to near real time um with GLDAS 2.2, but then it you know,
[1:17:58] it takes a little longer as for us to um yes, we only run once a week and then we
[1:18:02] have to we have to upload it to the uh to guest disk, so it might be a little
[1:18:07] longer than that. Um so So for some things that could be useful for early warning, um you know, for some applications, but you
[1:18:15] know, others might need you know, data within 24 hours of real time for it to be useful.
[1:18:23] Uh thanks, Matt. Just wanted to clarify that in Giovanni or GS GS disk, uh there may be one or two months of
[1:18:31] latency for data, but if you go to NASA Earth data search, um uh you find weekly data there.
[1:18:41] Uh question 16, do we need No, that's also for exercise, we answered that. Similarly, question Okay, so question 18.
[1:18:52] Uh for the demonstration, I'm a little confused That also is answered, I'm sorry. sorry. Uh question 19 also has been answered.
[1:19:01] Question 20. Are there correction for development such as urban build out, mining, etc.? This question 20. Um
[1:19:13] Um yeah, so we we've looked at um things like uh uh uh you know, oil extraction um or mining um even those those might
[1:19:24] be you know large amounts of mass at a small scale because it's such a small scale it does not have an effect on on
[1:19:31] the grace observations. So so no corrections are really necessary and even in a place like Saudi Arabia where
[1:19:37] they pump huge amounts of oil. The resulting change in mass is less than than you would see from
[1:19:45] water storage change. So it's below the error level. >> [clears throat] >> Urban build out um you know I don't I don't know if any
[1:19:55] cities have built you know they brought in construction materials fast enough to have an effect on on you know to be detected by grace I I
[1:20:06] tend to doubt it. Okay. Okay. We are on question 22. We have answered several questions for the exercise so
[1:20:17] I'm just skipping some questions. Question 22 is can we use the groundwater data to calculate the velocity or rate of change of
[1:20:26] groundwater of any area? Yeah I mean you could you know if you you could plot the time series then look
[1:20:37] at you know how the the change you know how fast the change is happening um you know it's probably more accurate
[1:20:46] on an interannual basis than it would be you know on a sub monthly basis or something like that but um
[1:20:53] but yeah theoretically you can you can take the changes in groundwater versus time and look at the rate of
[1:20:58] change. Thank you. The next question is about availability of GLDAS 2.2 in Google Earth Engine. Is it available in there?
[1:21:15] I believe some GLDAS data are available but I'm not sure about GLDAS 2.2 Matt if you know if it's there in Google Earth
[1:21:23] Engine. Engine. I don't think GLDAS 2.2 is on Google Earth Engine but then again you know Google tends to take things they find
[1:21:32] online and and put them up without asking us so it's possible but I I don't I don't know
[1:21:38] that it's there. Yeah I was trying to check and I I don't see exactly 2.2 but I'll I'll confirm that.
[1:21:46] Um Um Question 24 is it better to correlate change in ground with Sentinel-1 InSAR of the same
[1:21:54] location to determine the reason for uplift or subsidence? I'm asking this while considering injection wells. Um Um I I
[1:22:11] I think that so first of all we're not you know GLDAS wouldn't model an injection well. Um so it's not going to be very good at
[1:22:20] downscaling the grace data in in areas where there's you know a direct human impact like um like groundwater pumping for irrigation
[1:22:29] and um direct injection. So um I I wouldn't necessarily trust say you know a 1 degree um pixel from grace in a region where
[1:22:41] where there's an energetic effect like that that's that's significant um and comparing with with InSAR data to look
[1:22:48] for uplift uplift or uh subsidence. Um Um yeah I I think uh I think it'll be um
[1:22:59] you know you can look and maybe maybe I'm wrong I mean maybe you find something interesting there but I I
[1:23:03] wouldn't necessarily expect to see a good correlation between the two. Thank you. The next question is question
[1:23:16] 27. 27. Referring to the key limitations on slide 31 it is noted that GLDAS 2.2 does not simulate groundwater pumping. In the
[1:23:28] context of Indonesia particularly in regions dominated by massive localized pumping for large scale mining operations how severely does this
[1:23:39] limitation skew the grace follow on downscale data? Or does the model misinterpret this localized anthropogenic depletion as broader
[1:23:49] climate driven anomaly? Yeah there are a few few issues here. So so yes first of all it's it is a significant limitation if
[1:24:00] there's localized pumping. Um you know that's not going to be captured by the model and it's not going to be
[1:24:06] effectively downscaled from grace. So theoretically grace would detect um the effects of pumping but typically only if it's over a significantly large
[1:24:17] region. Um so if there's a you know for example the high plains aquifer the southern high central high plains aquifer there's a
[1:24:25] significant amount of pumping there's been a long term decline in groundwater storage there and that's that's detected by grace.
[1:24:32] Um but if you're talking about a smaller scale scale operation then that's going to be sort of smoothed out in in the grace data
[1:24:40] just because the great you know grace has a coarse resolution. But the other issue here is that um
[1:24:47] you know because Indonesia's islands grace does does not do well resolving fresh water storage changes over islands
[1:24:55] because the the much larger oceanic mass changes are not um um you know are not perfectly modeled and
[1:25:03] removed from the grace data. So there's a lot of a lot of errors over islands like Indonesia and so we're really lying
[1:25:10] relying on in Indonesia in the case of GLDAS 2.2 is the model itself and again the model
[1:25:16] doesn't simulate the groundwater pumping so it's it's not really going to be um any good at um simulating those sort of
[1:25:24] anthropogenic effects. Thank you. We are on question 31 now. Um so this is again based on exercise so I'll skip that and maybe
[1:25:44] come back later to 31. Yeah Anita if I can interrupt for a second I I found the
[1:25:49] answer on the latency question for GLDAS 2.2 and it's >> Okay. it's actually available right now the GLDAS 2.2
[1:25:57] EP which is the extended product where it runs um there's no more grace data to assimilate but the model continues to run using
[1:26:04] other inputs. Um that's available right now up through um April 22nd which is 6 days ago so so I think it
[1:26:13] typically is um it's on the order of 7 to 14 days latency but you know apparently it's only 6 days today I
[1:26:21] think the data might have just been posted. posted. That's great that's great to know. Thank you. you. Um
[1:26:30] Um yeah so question 33 we're going to go to question 33. When you say groundwater storage in the model are we actually
[1:26:38] measuring groundwater or we are just calculating whatever is left over after subtract soil snow and plants? >> [snorts]
[1:26:48] >> Yeah this is um I would encourage you to look at the the um um the the publications that we have on
[1:26:55] grace data simulation it's even more complicated than what you said. Um the catchment land surface model simulates groundwater as a um
[1:27:06] >> [clears throat] >> basically what's left after you you know if you have a certain amount of water
[1:27:10] storage it actually simulates um um this this this water uh sort of loss from from a fully saturated state and uh
[1:27:20] and then you know I was talking before about hey how grace data simulation works we're basically comparing the
[1:27:24] anomaly in the model to the anomaly in grace and then making adjustment adjustment to the the the model's anomaly.
[1:27:32] Um so so when you you know we're not measuring groundwater groundwater using a a well observation we're really
[1:27:42] calculating it um uh you know using a model simulation and then and then correcting it using information from grace.
[1:27:53] I hope that's helpful but I really would encourage you to look at the uh the publications if you're interested in
[1:27:59] in the details. Um I'll go to question 40 and and that's the last question and then we can
[1:28:09] go back to a couple of more questions later on. Because we're almost at the end of the
[1:28:14] time so question 40 is I'm looking for groundwater anomalies on the east coast of James Bay. Unfortunately there is no
[1:28:23] observation or any kind of well. What is your suggestion for the validation and the comparison? What can
[1:28:31] I do for the downscaling? Um okay so I'm not familiar exactly with where where you're looking for data. I I
[1:28:41] can say that in you know most of the world there is not uh there's not good groundwater well
[1:28:47] observations available. Um and what we've done is you know we've done our evaluation of the GLDAS 2.2 model output using
[1:28:57] you know areas of the world where there is is you know a substantial number of well observations to use for
[1:29:04] uh for validation. Um uh and then you know really I always like to say you know we've we've sort of
[1:29:11] proven that this is working reasonably well already. Um I I don't know that there's that much science left to be done in terms of
[1:29:18] evaluation and and maybe just you know, think about what's your real scientific question and then and then
[1:29:24] take a look and see if the data are are useful for that. Thank you so much, Matt.
[1:29:31] Um, so we are at the end of our webinar time and thank you, Dr. Rodell, for for your presentation and your answering all
[1:29:40] the questions. Um, we also want to thank all of you for attending today's session. Um, there were some questions
[1:29:47] about Giovanni not responding. I think it's the same data being accessed by many people at the same time
[1:29:54] might do that. You can uh try it a different time and it will work. Um, so with that we thank you again and hope
[1:30:02] to see you on Thursday, on 30th of April at the same time. Um, and want to thank
[1:30:07] our our set team here for their help. Um, especially our coordinator Natasha Dotson-Griffin and uh Maria Marabito,
[1:30:16] Sherry Morris, uh Brock Leavens, uh Winona O'Dowd, our editors Maria Marabito, Sarah Kerscher, Jonathan O'Brien, and my colleagues, um,
[1:30:29] for instructional design, uh Sue Monti, um, and uh Shawn McCartney and Erica Podest, we all work together, um, on
[1:30:38] these webinars. So, thanks, our set team. Um, and thank you all for attending today's session. Once again,
[1:30:45] uh Matt, uh great to have you here uh with our set trainings and we got a lot of
[1:30:51] information about both GRACE last week and GELDAS today. So, we really thank you for your time and your help with this training.
[1:31:01] Yeah, thanks everyone who attended and helped with the uh with the training and um um much appreciated.
