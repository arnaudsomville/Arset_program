# Overview and Analysis of NASA Terrestrial Water Storage Data from GRACE/GRACE-FO Pt. 1/3

`https://www.youtube.com/watch?v=KlYIAvKii8M` · id 354 · 1:34:59 · module 113 — Monitoring Groundwater Changes for Water Resources Management

[00:01] Hello everyone. Welcome to this app led remote sensing training on monitoring groundwater changes from water resources management.
[00:11] My name is Amita Mehta from our site and today we will be talking about overview and analysis of NASA terrestrial water
[00:18] storage data from gravity recovery and climate experiment or grace and grace follow on missions. We have a guest speaker today Dr.
[00:29] Matthew Rodell from NASA Goddard Space Flight Center and I will be introducing him shortly. We'll start with a brief introduction to
[00:38] our site program. Our site is part of NASA's Earth Action Capacity Building Program and it provides accessible and relevant cost
[00:47] free trainings on remote sensing satellites, sensors, methods and tools. Trainings include a variety of applications of satellite data on these
[00:57] thematic areas including agriculture, disasters, ecological conservation, health and air quality, water resources and wildland fires. Trainings are tailored to audiences with
[01:09] a variety of experience levels. Our site trainings are online and there are in person trainings offered as well.
[01:18] They're live and instructor led like this one or there are asynchronous and self-paced trainings available from our
[01:26] site website. As I mentioned they're cost free. Um most of our training material is translated into Spanish and many trainings are bilingual
[01:36] and there are multilingual options available. available. Our site only uses open source software and data and accommodates differing
[01:44] levels of expertise. Again, please visit our site website for more information. We will start with this webinar series
[01:53] on monitoring groundwater changes for water resources management. Now, groundwater is water from precipitation that percolates into the
[02:03] soil and moves downward. It fills up cracks and openings in the rocks and sand below the surface. Depending on the
[02:10] porosity of the soil, it percolates down and it can extend from just below the surface all the way down to several
[02:17] thousand feet. Uh you can see from this diagram that from total global water, most of it is
[02:24] saline and it's in ocean or it's brackish. Just 2.5% of total water is fresh water and out of that, 30% is um
[02:34] in groundwater. Groundwater ages can range from months to millions of years depending on the source of the water and how deep it is.
[02:44] Uh the total groundwater volume in the upper 2 km of continental crust is approximately 22.6 million cubic
[02:53] kilometer and out of which small amount about 0.125 million cubic kilometers is less than 50 years old.
[03:02] Uh it is the most extracted resource worldwide and it's renewable resource depending on regional and environmental conditions.
[03:14] Now, traditionally, uh water wells are used to monitor groundwater levels. Here, you can see from uh national
[03:21] groundwater monitoring network, uh blue dots show wells in the United States. So, water level in these wells are
[03:28] regularly monitored to estimate what the groundwater levels would be at that location. location. And there are no direct measurements of
[03:37] groundwater from remote sensing observations. observations. Measurements from GRACE and GRACE Follow-On, they are used to estimate or
[03:44] infer total terrestrial water depth and these total water depths are then uh used along with additional hydrological
[03:53] information to derive global large-scale groundwater distribution at the resolution of about 150,000 km². Additionally, there are two more sources
[04:08] of groundwater data. Uh one is global land data assimilation system or GLDAS uh that assimilates grace and grace follow-on data and
[04:18] derives global groundwater data. And the second one is uh OPERA uh surface displacement product, which is derived
[04:26] from synthetic aperture radar measurements from Sentinel-1 satellite. And uh so these two are also groundwater uh products available from NASA.
[04:39] So the overall training learning objectives are that by the end of this training, you will be able to identify
[04:45] characteristics of groundwater quantity data sets from grace missions, GLDAS, and OPERA displacement product. Access, analyze, and visualize grace
[04:56] data to monitor seasonal to interannual changes in large-scale total terrestrial water storage. Access, analyze, and visualize GLDAS
[05:06] data to monitor interannual to interdecadal changes in groundwater at regional scale. Map surface subsidence related to groundwater extractions with OPERA disk
[05:17] data. data. And recognize applications of these groundwater data sets available at multiple spatial and temporal scales for
[05:25] monitoring drought and flood conditions, and for planning groundwater resources for a variety of uses such as for
[05:32] drinking water or for irrigation, etc. These are the prerequisites. Fundamentals of remote sensing. This is a self-paced course available from our
[05:43] site website. It provides background about satellites, their orbits, different sensors, their special and temporal resolutions, and other
[05:52] characteristics of remote sensing data. Then there is an introductory training I said provided in 2020 on groundwater
[06:00] monitoring using observations from Grace missions. missions. Uh that has also has some useful information. This training will have three parts.
[06:11] Today, as I mentioned, we'll be focusing on overview and analysis water storage data from Grace and Grace
[06:18] follow-on. follow-on. Uh next week on April 28th, part two will be on overview and applications of GLDAS groundwater data products at
[06:26] regional scale. And on 30th of April, part three will be on overview and applications of OPERA DISP to monitor
[06:34] groundwater changes. There will be one homework posted on last day of the training, that is 30th of April, and the homework will be due
[06:44] on 15th of May. Uh the homework will be posted on the training webpage, and a certificate of completion will be
[06:50] awarded to those who attend all live sessions and complete the homework assignments before the given due date.
[06:59] We'll start with today's session. And specific objectives for today are that by the end of part one, you will be
[07:06] able to identify characteristics of terrestrial water storage data sets from Grace and Grace follow-on. Monitor seasonal and interannual changes in
[07:14] terrestrial water storage using Grace uh analysis tool. So, the outline for today is that our speaker, Dr. Matthew Rodell, will
[07:25] provide an overview of Grace missions, Grace data products, and applications. Then we will have a demonstration of
[07:32] Grace data analysis tool that allows analysis and visualization of terrestrial water storage data. There will also be a hands-on exercise
[07:42] that you will be conducting this using the same analysis tool and some of your homework questions will be based on
[07:48] that. At the end, we will have a question and answer session. And just a note about asking questions, uh please put your
[07:58] questions in the questions box and we will address them at the end of the webinar. webinar. Feel free to enter your questions as we
[08:05] go and we will try to get to all the questions during the question and answer session after the webinar.
[08:12] The remainder of the questions will be answered in the Q&A document, which will be posted on the training website about
[08:18] a week after the training. With that, I want to introduce our speaker for today, Dr. Matthew Rodell.
[08:29] Dr. Matthew Rodell is the Deputy Director of Earth Sciences for Hydrosphere, Biosphere, and Geophysics, or HPG, at NASA Goddard Space Flight
[08:38] Center. Center. HPG comprises more than 350 scientists and engineers within five laboratories involved in remote sensing and numerical
[08:48] modeling of land and ocean processes and related applications. Dr. Rodell has also served as Associate Deputy Director for HPG and as Chief of
[08:59] the Hydrological Sciences Lab. He is a member of the science teams for NASA's GRACE Follow-On mission and
[09:07] future GRACE Continuity, or GRACE-C, mission. mission. He leads the Global Land Data Assimilation System and projects focused
[09:15] on monitoring groundwater storage changes, mapping and forecasting drought, wetness, and detecting climate-related variations in the water cycle.
[09:26] cycle. Dr. Rodell is a past Associate Editor for the Journal of Hydrology and a current Editor for the Journal of
[09:34] Hydrometeorology. He is also chaired the hydrology program for the American Geophysical Union or AGU Fall Meeting from 2009 to 2011
[09:48] and led various national and international scientific working groups. He received a Presidential Early Career Award for Scientists and Engineers in
[09:58] 2006, 2006, a NASA GSFC Earth Science Achievement Award in 2007, a Robert H. Goddard Award for exceptional achievement in science in
[10:09] 2011, 2011, and an Arthur S. Fleming Award for outstanding federal service in the area of basic science in 2015.
[10:20] He was elected to the rank of AGU Fellow in 2022. Dr. Rodell has more than 160 peer-reviewed publications and appears
[10:29] on Clarivate Web of Science's 2018 to 2023 lists of highly cited researchers. He holds a BS in environmental science
[10:39] from the College of William and Mary and a PhD in geological sciences from the University of Texas at Austin.
[10:47] With that, we invite Dr. Rodell. Matt, take it away. Okay, thank you, Amita. I'm going to provide an overview of the GRACE and
[10:58] GRACE Follow-On missions. So, GRACE and GRACE Follow-On are two separate satellite missions. Uh one launched in 2002 and ended in 2017, and
[11:10] GRACE Follow-On uh picked up in 2018 and is still active. Um they were both jointly developed by
[11:17] NASA NASA um and and the Germans. And both of them are twin satellite systems, meaning they're two satellites
[11:25] um um operating at once. And the two satellites are critical because actually the key measurement is the distance
[11:33] between those satellites and how it changes in time. So, one is following the other about 220 km apart about 400
[11:42] km above the land surface or or Earth's surface. surface. And as they orbit the Earth in a near
[11:49] polar orbit, they um basically observe all different regions of the world um pretty well over the course of about a
[11:56] 30-day period. So, these satellites again provide global coverage. You see the dates of the of the two missions.
[12:07] And um right, the key measurement is the distance between the two satellites and that distance is measured by a microwave
[12:14] K-band ranging instrument. And actually on GRACE Follow-On, there's also an experimental laser instrument. And so, imagine a 220 km distance
[12:24] and you're able to measure that distance every 5 seconds with the the precision down to the size
[12:31] of a red blood cell. That that's how accurate these measurement measurements are. Um in addition, there each satellite has
[12:39] an accelerometer on board. What an an accelerometer does is it measures uh non-gravitational forces on the satellite, in particular
[12:48] things like atmospheric drag. So, you don't want the atmospheric drag to leak into your uh yeah, estimates of the
[12:55] changes in the distance, but then and then then cause errors in your uh observations of the gravity field.
[13:03] Um there also GPS receivers on board to provide the precise locations of the satellites. So, what happens is, you know, as these
[13:13] two satellites are orbiting the Earth, imagine uh what we call a mass anomaly, like a mountain range. That's where there's a
[13:22] bit or actually a lot more mass um at the surface than there is on average. So, imagine these satellites
[13:29] floating along in space and they come closer and closer to a to a mountain range and that mountain range has extra
[13:36] mass, which means there's extra gravitational potential. And what it does, it pulls the first satellite forward and that satellite is um
[13:46] it's basically that separation between the two satellites increases because that first satellite sort of speeding up. up. As they pass over the mountain range,
[13:53] the first satellite sort of held back by that extra gravity and the second satellite speeds up and the distance
[13:58] between the two of them becomes smaller and then things sort of even out again uh once they they pass the mountain
[14:05] range. So, that's sort of an extreme example, actually. Uh you know, a mountain range is actually a huge amount
[14:10] of mass, but these satellites in the in the measurements are so sensitive that they can actually detect changes
[14:17] caused by changes in mass uh over time over the same location uh from month to month. So, for example, if
[14:25] there was a big snowstorm and there's a lot more mass on the ground because of all that
[14:30] snow snow uh that's actually enough mass and enough gravitational change um to affect how the satellites orbit in a way that
[14:39] we can detect and then infer the amount of snow on the ground. So, again, we use uh sort of fundamental
[14:48] physics um you know, our understanding of how mass and gravity are related to translate the GRACE Follow-On
[14:56] measurements, these distance between the satellites, into gravity and then from there into uh mass concentrations, meaning like where
[15:05] there's more or less mass um on the surface of the Earth. So, uh as I mentioned before, there are
[15:12] there are subtle shifts in Earth's gravity field that are caused by movements of mass around the Earth. If
[15:18] you think about what moves uh you know, how how do you have large movements of mass on the
[15:23] earth? Um the biggest one is the is the ocean. So, think about ocean tides and uh ocean sloshing around in the ocean
[15:30] basins. That's a huge amount of mass. Um there's al- also uh atmospheric mass. Think about surface pressure. Um you
[15:38] know, pressure changes at the surface. That's really a measurement of the amount of mass of atmosphere above a
[15:43] given location. And then over land, um changes in mass are primarily associated with uh redistribution of water. So, again, you
[15:52] know, something like a snowstorm or a drought or or flood, or even, you know, just smaller changes in in water
[15:59] storage. Um over a large region, those are actually huge quantities of mass uh that again are are big enough uh to
[16:08] cause changes in gravity that then affect the orbits of of the GRACE satellites. satellites. So, what we do is after accounting for
[16:15] the atmospheric oceanic changes um using models and and measurements of the earth, you can sort of strip those off
[16:23] from the GRACE observations. Um there are also some some solid earth mass redistributions. redistributions. Um for example, if there's an
[16:31] earthquake, that could be a large amount of mass moving. Um and we can estimate how much that is. And there are solid
[16:36] earth tides that are pretty well understood. So, after you remove all of those other components, what's left is
[16:42] is the changes in mass associated with changes in in terrestrial water storage. So, um I'll get to what terrestrial
[16:55] water storage is in a moment, but um it suffices to say it's sort of the it's all the water on and in the land
[17:02] surface. Uh and so, the data that we get from GRACE are provided uh as an equivalent water thickness. So, imagine
[17:10] if you took all the water on and in the land, all the ground water, soil moisture, surface water, snow, ice, and
[17:17] just created, you know, just ponded it on the surface, and then you watched how that how the
[17:23] the depth of that pond changed over time. time. You know, sort of like the the depth of
[17:27] water in your bathtub. Um and and and that is provided those those uh anomaly anomalies of trust your water
[17:35] storage relative to some arbitrary data are provided in centimeters or millimeters uh equivalent water thickness. So, the uh so, you know, when we say
[17:46] level 1 2 3 for grace products, level one is basically the the the measurements of the distance
[17:52] between two satellites. Level two is is the gravity anomaly fields. And level three are the trust your water
[17:58] storage anomaly data that we as hydrologists uh can use. Um the effective spatial resolution of these uh observations from grace and
[18:08] grace follow-on are it is very coarse relative to other measurement systems that you're probably familiar with. Um
[18:16] so, for grace, the effective spatial resolution is about 100,000 to 150,000 square kilometers. To give you an idea of how big that is,
[18:23] the state of Illinois is about 145,000 square kilometers. So, we're talking about very large regions and and
[18:30] actually when when grace first launched, a lot of hydrologists threw up their hands and said, "I can't
[18:34] use this. It's much too much too coarse." coarse." Um Um I was actually among the first one first hydrologists to be
[18:41] involved in using grace data and we figured out a lot of ways to use it and the bottom line is
[18:46] we have no other global measurements of total trust your water storage and in particular ground water, which we'll
[18:50] talk about later. Um so, if you're clever, you could find a lot of ways to use these data despite
[18:56] the coarseness. Um if you if you uh look for trust your water storage data, and we'll provide
[19:02] some links later. Um they're often provided on a on a 1° or or a 1/2° resolution grid.
[19:10] And I want you to is a take home message uh uh important take home point um that's really just for convenience um
[19:19] in order for those data to be meaningful you can't just take one grid point and say this is how the water storage is
[19:25] changing over that grid point. You have to average over a sufficiently large region region and I'm talking about greater than
[19:31] 100,000 square kilometers in order for your your results you know that the time series of terrestrial water storage you might get for example
[19:39] in order for that to be meaningful. Um and the uh the errors or the the uncertainty um is
[19:48] on the order of 1 to 2 centimeters um um equivalent height of water change uh each month for a uh
[19:56] 300,000 square kilometer or larger region. Okay, so um what can we do with these these terrestrial water storage data? So
[20:06] again I mentioned before terrestrial water storage is some of the ground water, soil moisture, surface water, snow, and and ice as you can see um
[20:16] sort of uh in the the chart on the right there. Um so GRACE cannot and GRACE Follow-On
[20:23] cannot differentiate among these different terrestrial water storage components. They're only showing the the bar on the left there. This
[20:31] total terrestrial water storage and and in fact they can only tell us the um the changes in terrestrial water storage
[20:38] uh not the absolute amount of water. So don't expect that GRACE is going to tell you how much water is left
[20:44] in the Ogallala Aquifer for example. It's only going to tell us how that water storage is changing
[20:50] usually relative to the long-term mean from the GRACE data. Um Um so um one of the ways that we can
[20:59] we can sort of tease out what's happening with the individual components is to combine the GRACE data with a with
[21:06] a land surface model um through data simulation and because that model has other uh information going into it from other observations
[21:15] and and our understanding of the system it's able to do vertical, horizontal, and temporal temporal disaggregation to
[21:23] make the the grace data more more useful. So, uh you know, if you have terrestrial water storage data, you know, a simple
[21:33] approach for disaggregating would be to simply do sort of a water balance approach. So, you see the bolded
[21:40] equation at the top there groundwater equals terrestrial water storage change or groundwater change equals terrestrial water storage change
[21:47] minus soil moisture minus snow water equivalent minus surface water. Um and you know, early on in the grace
[21:55] mission that was one of the ways that we that we uh evaluated the grace data as is to do use um
[22:03] you know land-based land-based observational time series of these components and and sum them all up and say do we actually see
[22:11] the terrestrial water storage change that we expect to see based on grace. Um answer is yes. Um again, you can you
[22:17] can do a um you can do the equation you set the equation up so you find groundwater storage changes as a
[22:24] residual if you have uh estimates of the other components from either observations or models. Uh a more sophisticated approach
[22:36] is data assimilation and and this involves again, you have a land surface model. The land surface model has
[22:44] uh uh various inputs going into it in addition to the grace data. Uh the land surface model on its own can
[22:50] provide estimates of how the terrestrial water storage change uh components are changing in time, but then when you
[22:56] assimilate the grace data, you have an additional constraint on the models. You basically get better results. So,
[23:02] so um we're going to be talking about GLDAS version 2.2. And uh in this version, we have a land
[23:09] surface model called the Catchment Land Surface Model that uh simulates groundwater storage in addition to the other components.
[23:17] And um by using GRACE as a as a constraint on that model, we get a result that's better
[23:23] than either the model alone or the GRACE observation alone. So, let's talk about some of the GRACE
[23:33] products that are out there. Um so, here are some links. Uh when you have uh have a moment, you can
[23:41] you can get the the uh the slides and and follow these links. There are several different GRACE and GRACE
[23:47] Follow-On terrestrial water storage data products available. Um Goddard Space Flight Center, Jet Propulsion Laboratory, GFZ, which is in
[23:58] in Germany, and the University of Texas all have their own products. Um so, for example, the JPL GRACE data
[24:08] portal has has a few options here. Uh you can download the grids as um global mass cons. A a mass con is sort
[24:15] of an advanced way of um of deriving terrestrial water storage data from the GRACE observations. And and all of the centers now use mass cons
[24:24] as a sort of the preferred uh method. Um there's a interactive GRACE uh data browser. And you can download the monthly grids
[24:35] uh for the land or for the ocean. So, there are you know, a lot of applications of GRACE and GRACE
[24:44] Follow-On data. Um Um one of the early ones or not so early, actually. This is uh publication from from 2018
[24:54] uh where we looked at the changes in terrestrial water storage um over the period 2002 to 2016.
[25:02] Basically, at each point on Earth we we determine the rate of change of terrestrial water storage uh by fitting
[25:09] a linear trend after removing the seasonal cycle. So, if you had where you see a blue here, that means trend was upward. It
[25:17] was a increase in in uh terrestrial water storage on average over time. You see the bar at the bottom, the units are
[25:24] centimeters per year. And where it's a uh yellow, orange, or red, that means that the um terrestrial water storage was decreasing
[25:33] over time. And so, what we did with this this study was was try to understand why uh
[25:40] terrestrial water storage was changing. And in some cases, it's just natural variability. variability. Um and those are that's indicated by by
[25:46] green. And what I mean by that is maybe you had a drought in the beginning of the time period around 2002, and maybe
[25:51] there was you know, just sort of a wet period towards the end. And so, it looks like
[25:55] you have this increase in terrestrial water storage. But, we don't ex- we don't expect it to continue
[26:01] long-term. It's just sort of, you know, part of the natural fluctuations. On the other hand, there are regions
[26:06] where um where we might be, you know, there might be a human a direct human impact uh like
[26:14] groundwater pumping. And one of the first ones that we saw in the GRACE data was in northern India, where a huge amount of
[26:21] water is pumped out of um the aquifer there uh to use for irrigating crops. When you pump water out of an aquifer
[26:29] faster than it can recharge, and you pour it on the land surface to irrigate crops, and most of that water
[26:34] evaporates or transpires, then over time the aquifer is going to be depleted. And uh and there's a there's a very
[26:42] fast rate of depletion um in northern India that's clearly anthropogenic. And then the other thing is there might
[26:49] be climate change signals. Um and the most obvious place for that to look for this is is someplace like Greenland
[26:55] where the ice sheets are ablating or or melting away into the ocean. And uh and that's why uh most of
[27:02] Greenland is red. There There might be There's some debate over whether the blue in the middle is an accumulation of
[27:08] snow or just a um just an artifact of the the data processing that might be related to uh
[27:14] something called post-glacial rebound. Another uh more operational application is is drought monitoring. And uh a One thing we've done is we've
[27:27] developed these drought indicators that are based on um the GRACE data assimilation into the land surface model. So, the data
[27:36] assimilation allows us to do again, the vertical, temporal, and horizontal downscaling of the GRACE data. Our GRACE
[27:43] data are are are monthly. Um, they're very coarse. And and um and in fact, they're only available a few months
[27:50] after near real time after real time. So, to make them really useful for an operational application like drought monitoring,
[27:58] the data assimilation is really essential. It allows us to run up to near real time. It allows much higher uh
[28:04] spatial and temporal resolution. And we can also do things like disaggregating uh vertically. So, this is uh The top two examples are a a
[28:13] drought indicator which basically tells us the um the relative conditions uh or the conditions at each location relative
[28:22] to the long term going back to 1948, uh which is based on on the model results. Obviously, GRACE
[28:29] doesn't go back to 1948. And uh and what we see, you know, right now is we're getting some pretty dry conditions over
[28:36] much of the US. If you look um top right there, you can see that around the world, it's a mix of
[28:42] of uh of dry and wet conditions around the world, which is what you'd expect. Uh and then there's an example at the
[28:49] bottom there um showing um drought conditions in in uh in Brazil uh which matches the we see in
[28:58] in several um news reports. Another thing we can use GRACE data for is is looking at flood vulnerability or
[29:08] flood potential. And so we have enough data from GRACE and GRACE Follow-On going back to 2002, we have a pretty good handle on the the
[29:18] range of variability of terrestrial water storage that we would expect. And when when uh when the terrestrial water storage is
[29:25] up near the top of that range, we would say a region is vulnerable to floods, meaning, you know, additional water
[29:32] that that comes down the land surface as rain or or snowmelt um is likely to uh overwhelm the uh the river system and
[29:40] then you start to have uh you start to have flooding. And so it's it's a useful um way of
[29:46] basically preparing for floods, you know, looking for regions like this this region's very wet, maybe it's not
[29:51] flooding yet, but, you know, look out if there's a storm or something. Um Um and that's uh that's some work that JT
[29:58] Reager uh worked on a while ago. And we've also used our um drought wet indicator maps um for
[30:05] this for this purpose. Um another recent more scientific result was looking at um what is apparently an
[30:15] abrupt decline in terrestrial water storage storage around the world which happened around 2015. 2015. Um Um the time series is not here, but
[30:24] basically if you look at the time series of of all the you know, the average terrestrial water storage for for all of
[30:29] the land excluding um the ice sheets where there's a uh you know, a long-term persistent trend uh
[30:36] excluding the ice sheets and the glaciers, I should say. Um and you looked at how the uh time series evolves
[30:43] from 2002 to the present, you would see around 20 uh 2015 that the the time series suddenly has this uh decline of
[30:52] about 1 cm equivalent height of water averaged over the entire Earth. And what's really interesting about that
[30:58] is that, you know, 2015 lines up with when we had a series of or in the midst
[31:04] of a series of of the warmest years on record. So, uh uh uh 20 2015 through 2023 were the um the nine
[31:14] warmest years in the um uh in the data, you know, in the temperature record for the Earth's
[31:21] surface. And that, of course, continued in 2024 and 2025. And the uh this decline has also persisted or this
[31:31] this lower level terrestrial water storage has has persisted. Um the map here is showing um this Since 2015, [clears throat]
[31:41] um a significant portion of the land surface has has hit its lowest um on record terrestrial water storage anomaly, which
[31:49] is another indicator of what's happening. happening. And just for fun, here's an animation of GRACE data starting from 2002 and
[31:57] running through 2016. And just to see how it sort of evolves, um you see these blobs of wet and dry uh
[32:05] moving around over time. And then it's going to zoom in on um the Okavango Okavango Delta in uh Southern Africa.
[32:13] And for this region that's outlined here, this is how the terrestrial water storage storage uh changes over time. And you can see
[32:20] during this particular period, it was a very wet period in the Delta, which is home to a lot of
[32:27] cool, big animals you'd see in the zoo, um was was wet. There was a lot of water
[32:31] there, and and the the elephants were happy. happy. Um and then towards the end of the this
[32:36] period going towards 2016, it's sort of coming back down towards normal. So, um so that's where I'm going to leave it
[32:44] off and um and I'm going to hand the mic over to Anita. Thank you so much, Matt, for your
[32:53] presentation on Grace missions data and applications. applications. Next, we're going to have a short demonstration of Grace data analysis
[33:04] tool or interactive browser, which allows visualization of terrestrial water storage data from the missions. Here's a brief outline.
[33:15] We'll learn to navigate the Grace data analysis tool. There are several features that are useful to selecting
[33:21] spatial and temporal domains. Then, we'll terrestrial water storage or TWS maps and time series using the tool.
[33:30] And we'll use these two regions for case studies, uh Colorado River Basin and Ogallala Aquifer. Uh these two are very
[33:38] important for water resources in the western US. So, So, I'm going to share uh my screen with
[33:47] you. Uh this is the uh Grace data analysis tool. Um and uh you can ask questions uh if
[33:55] you have any and submit questions. For launching tool, to just click on launch tool here. And then, a welcome window opens. At the
[34:06] same time, you can see Grace TWS data in the background. So, let's just quickly go through some
[34:13] of the features, but we are going to demonstrate um all of them. So, this symbol here, this um is about different
[34:21] data layers. There are multiple data sets available. You can use plus sign to add data layers. layers. This symbol here, it toggles between
[34:31] different layers uh the visibility. You can turn it off and on. I next to any data source provides
[34:38] information about that particular data. And this symbol here that we will look at, at, it allows you to
[34:48] draw a box to select a region or drop a pin to select a point or even choose river basins as we will
[34:57] see. see. Um this Once you select the region, you can look at map by zooming in or you can
[35:04] make time series and then you can download data by using this button. Uh this arrow here allows you to toggle
[35:13] between different layers and this animate layer over time allows you to animate animate uh TWS data over different time range.
[35:24] So, we'll start with looking at the map first. You can zoom in by your computer mouse, using your computer
[35:34] mouse, or you can use plus and minus signs here to zoom in and zoom out. Note that here is the
[35:41] time window. You can change time. Last data available here is January 2026. You can change time, month, and year and
[35:55] you can see TWS changing. Here's the color bar given for that. Units are in centimeter and the range
[36:04] shown here is minus 30 to 30 cm approximately, but you can change range of these values by um
[36:14] sliding here. You can also change visibility or transparency of any layer by changing transparency by moving along this line.
[36:26] Um and uh, there are some more features here. This just a different uh, map projection. projection. This allows you to turn uh, off and on
[36:37] say timeline or there are some options here, but we'll keep them on. And this one it uh,
[36:46] allows you to label the map in the sense that once you turn it on you will see
[36:51] country boundaries, which is useful. And if you just click here on the home button, you will be taken back to where
[37:00] we started. Uh, you can again zoom in on any region and uh, you can uh, look at the year or month that you're
[37:10] interested in. What we are going to do now is uh, look at the analysis option, but let's just
[37:18] look at this um, different data sets available here. Uh, right now we're looking the the map map that you see here is from JPL water
[37:29] uh, equivalent thickness over land. Um, if you click here for data search, uh, there are four options. So, one we're
[37:37] looking at here is uh, land uh, JPL water equivalent thickness. Um, and similar um, thickness is available for ocean. Then
[37:48] there are two data data sets. Um, Um, CSR water equivalent thickness. This is from um, uh, University of Texas Austin as was
[37:59] mentioned earlier and then this is for ocean. So, you can add uh, we're looking at this, you can add this
[38:07] data as well if you like. And then it shows uh, both of these uh, two two different
[38:15] uh, color tables show up and then you can turn uh, this on and off. Um You can um, select Right now, let's just
[38:24] stay with JPL water equivalent thickness. And now, uh you can look at this this um symbol here. This allows you to drop
[38:37] a pin, draw a box by clicking on the map, and you can select a basin. When you click on select a basin, you can see
[38:46] that all the river basins are now uh demarcated. And when you uh point to any uh of this river basin, it highlights
[38:56] with blue color, and it shows which basin. So, this is Mississippi, this is Rio Grande, and this is Colorado
[39:03] uh your basin. So, let's start with Colorado. This is Amazon, and you can you can These are global rivers, major
[39:10] rivers uh are shown here. Uh but, let's just focus on Colorado River. I'm going to click here to select the
[39:18] river basin. And now, uh you can zoom into look at map. Um Um You can change num uh
[39:32] values here to adjust um to see proper colors here. You uh and to look at time series, now
[39:43] uh you you can keep operation as time series, and uh choose the time domain that you want to
[39:50] look at or time These are monthly data, as we saw. And let's keep the entire range right
[39:56] now, and say create chart. When you click on that, you will see uh time series appearing here.
[40:05] Once you have the time series, you can see uh monthly data. This is the time axis, and here you can see
[40:13] uh terrestrial water storage change is shown in centimeters. The values are minus 15 to 10 cm. Um and
[40:23] if you see on top here, you have several options. You can deseason this data by clicking here.
[40:32] Um you can have either line or column. You can fit a trend type. Here you can have either linear or you can fit
[40:43] polynomial. polynomial. You can see that you Not only there is annual variability, but there is interannual variability as well. And
[40:52] there is a steady decrease in uh terrestrial water storage uh as you can see over this period. And
[41:00] this is the polynomial fit, and you can get coefficients here as well. You can download this time series either
[41:09] as is SPNG or JPEG image or PDF, or you can download this data as CSV or as XLS
[41:17] file. You can have this or data table. So multiple options are there. But this allows you to quickly
[41:25] pick an entire river basin and see how TWS is changing over time. Also note one thing. Here you will see
[41:34] some between There's a gap between Grace and Grace follow-on. So you will see uh missing data here. So when you look
[41:42] at maps, it's best to look at where you have the data. Also, once you have the time series, you
[41:49] can move along this X axis, and you can see this vertical line. Uh it shows um um year, month, and TWS data at for that
[42:01] month. This is for the entire basin averaged over the basin. Uh and when you are clicking through the
[42:07] time, if you look at the map, it will show you a for that particular day. So, this is when we find minimum TWS and you
[42:17] can see um colors. If you see, this is mostly in negative uh TWS. If you go to say
[42:26] January January February uh 2005, 2005, you can see now this is in blue zone. Um that is positive TWS anomaly. So, you
[42:37] can look at each individual month and corresponding map here. So, average value and map you can see here.
[42:49] So, we looked at uh Colorado Basin. Um we want to now look at uh uh Ogallala Aquifer. And for that, we're
[42:58] going to turn the uh uh basins off and draw a box. Now, approximate location of uh the aquifer
[43:08] Ogallala Aquifer is 32 to 44 north and 96 to 106 uh west. What I'm going to do is you can
[43:18] click here and make a rough box. Then, the coordinates will appear and if you know exact uh coordinates, you can
[43:27] enter here. Or, you can just click and draw a box wherever you want to if you're interested in some other region.
[43:35] Here, I'm just going to put exact latitude longitude since I know what the region I'm looking for.
[43:46] And once you do that, you will see a box appears here and the multiple states um in uh Ogallala Aquifer, you can see
[43:54] that. And now, you can do the same. You can create chart. And this is for that box averaged over
[44:02] that box. You can see clearly. clearly. Um Um again, you can see that there is a decrease um in terrestrial water storage
[44:16] uh over time, especially after this um period. And you can see map also here. Um Um and then when you go down here,
[44:31] um um there is a uh slow change, but you can also see that there are these interannual variability period you can
[44:40] see in in the terrestrial water storage. Uh so, you can explore this in the area of your own interest. Um this is just to
[44:51] show uh the main features. Okay, so one more thing to see here is that over this box, if we want to
[45:00] compare different data sets, we can go back and add let's look at CSR land TWS, and you can add the data.
[45:11] And now you can see that you can turn this on and off. So, So, this is uh JPL, and this is CSR. So, you can
[45:27] compare this. Um Um resolutions are different here. Uh that's why you can see um this is 3° I
[45:37] believe this is uh half a degree. So, uh you can click back and forth and see this is more smooth, but basic features
[45:46] are the same in both the data sets. But, so you can compare two data sets if you
[45:51] like. And if you want to make time series, you will have to pick this this data set and go through the same uh
[45:57] procedure and compare uh time series. So, um this is the basic uh browser that we wanted to share with you and you can
[46:07] explore other regions. Uh you have an exercise that is based on this browser. Um so, I want to conclude this
[46:16] demonstration now. This concludes our demonstration of the GRACE data analysis tool and you will have chance to work with this data tool.
[46:26] Uh there is an exercise available on the training page that you can download and follow the steps to work on a case
[46:32] study. Before we start the exercise, let's summarize what we saw today. We saw that GRACE missions provide
[46:41] unique measurements of variations in mass or gravity changes over entire Earth's surface, producing monthly maps of the gravity field.
[46:52] These variations in gravity are primarily related to the movement of terrestrial water and they are interpreted in terms of change in
[47:01] equivalent water thickness or terrestrial water storage, TWS. Using the GRACE TWS along with model-based hydrologic components, ground water can be estimated and this
[47:13] is going to be the topic of our next session. session. Finally, GRACE data are used to obtain
[47:19] TWS and ground water change information globally and have been useful in monitoring flood and drought conditions and large-scale ground water depletion.
[47:31] Now, prior to the launch of GRACE, there were no global measurements of ground water. The only way to estimate ground
[47:37] water was from well water levels wherever they were available. Uh the GRACE missions have made it possible to estimate uh TWS and now we
[47:47] have more than 20 years of time series of global water storage data and this is a major advantage of GRACE missions.
[47:55] There are some limitations we should keep in mind. Uh GRACE and GRACE Follow-On based estimates of TWS and groundwater are
[48:03] available globally. However, their special resolution is relatively low. It is 380 by 380 km squared approximately. And so, it cannot resolve small
[48:15] watersheds. watersheds. Uh TWS is measured in centimeters or meters, which is much smaller compared to the Earth's radius, which is uh
[48:25] approximately 6,378 km. km. And uh so, TWS has an estimated uncertainty of about 2 to 3 cm.
[48:37] In addition, gravity changes caused by mass redistribution in the solid Earth, such as large earthquakes or glacial
[48:45] adjustments, they must be removed from the measurements before deriving TWS thickness. So, that also should be kept
[48:53] in mind. Uh with that, um our next session is going to be about overview of groundwater data from uh Global Land
[49:03] Data Assimilation System version 2.2. As I mentioned earlier, there is going to be one homework assignment that will
[49:12] open on 30th of April at the end of the training, and it will be it will be
[49:17] available from the training webpage. Uh answers must be submitted via Google Forms, and the homework will be due by
[49:25] 15th of May. Uh certificate of completion will be awarded to those who attend all three live webinars and complete the homework
[49:35] assignment by the deadline. You will receive a certificate via email approximately 2 months after completion of the course.
[49:44] Once again, we want to thank Dr. Matthew Rodell uh for his excellent presentation about GRACE missions, data, and
[49:51] applications. And he will be our speaker next week as well talking about GLDAS groundwater. groundwater. Here's the contact information for Dr.
[50:01] Rodell, and also you can contact ARSET anytime with any questions. ARSET website and YouTube links are given
[50:08] here. here. For questions, comments, or to share how you have applied our trainings to your work or studies, please email at
[50:16] arset@gmail.com. arset@gmail.com. And join our quarterly newsletter to stay up to date on our latest trainings, and you can do that by joining our
[50:26] listserv. Here are some useful resources for your information, and we want to thank you for attending today's session. We have a
[50:35] few minutes for our exercise to start the exercise now, and then we will have our question and answer session.
[50:48] Okay, so we'll start with the question and answer session, and if you have any questions about the exercise, you can
[50:56] email us, or we can talk next in the next session on 28th also. Um so, we'll start with
[51:05] um the questions. Question one is, "Does the distance between both sensors change sometimes?" And Matt, you can unmute and answer the
[51:16] question. Yeah, hi. Um I'm sorry. I just uh I was looking at something. Can Can you say the question
[51:27] one more time? Oh, "Does the distance between both sensors change sometimes?" Uh-huh. So, so yes, it does, and
[51:33] actually that's you know, that's the um that's the key measurement, right? It's the distance between the two satellites.
[51:39] Um and normally it's about they're about 200 km apart, but um uh you know, that's sort of their the
[51:48] two satellites are free floating. Um, so it may vary from, you know, by few kilometers or few tens of kilometers
[51:55] over the course of the mission, I guess, but um but yeah, [snorts] I mean that's that's the key measurement is the uh
[52:01] the distance between the satellites and really how you know, they measure it down to, you know, how fast is that distance
[52:07] changing, more of a uh a distance range rate we call it and even like the acceleration of how it's
[52:13] changing. Um, they can look at that as well. Thank you. The next question is how can multi-source satellite data
[52:26] uh be combined to reduce uncertainty in groundwater estimation and what are the limitations of this approach for
[52:32] decision making? Well, um so the answer is yes and no here. Uh, the the GRACE data are really the only
[52:45] satellite observation that provided direct, you know, well, it's not even a direct measurement, but really a uh a uh
[52:51] a measurement that you can use to understand changes in groundwater um um you know, fairly directly. Um, there are other satellites that can
[53:00] give us sort of um sort of a an an um, you know, an idea of what may be
[53:07] happening with groundwater uh like the recently launched NISAR satellite which can tell us very precise changes in the
[53:15] elevation of the land surface. Um, when an aquifer is is uh is dewatered, when you remove a lot of water from the
[53:21] aquifer, um it the the uh the aquifer compacts and so the land surface declines a little bit and we can see
[53:29] that with the NISAR satellite. Um but um but it's not really a one-to-one um you know, the the Earth isn't perfectly
[53:38] elastic, so when you add more water back to the aquifer, it doesn't necessarily uh uh you know, tell surface is sort of
[53:45] bouncing back to where it was before. Um Um Uh and then of course there are other observations, things like uh
[53:52] precipitation and solar radiation which can you we incorporate into our land surface model as as we talked about. Um
[53:59] and those help to constrain the overall uh water balance, which then helps us to, you know, understand how much water
[54:06] may be entering and leaving the aquifer. Thank you. And question three is, is the GRACE satellite mission suitable for
[54:15] monitoring terrestrial water storage changes in uh archipelagic countries such as Indonesia? Unfortunately, um no. And and the
[54:25] problem there is that um the the islands are really smaller than the effective spatial resolution of GRACE or GRACE Follow-On. Um and so you
[54:36] have a lot of leakage of the signal from the ocean um into the island. Uh so it's
[54:43] it's very hard to to sort of isolate the mass changes that are happening um in a in an arc archipelago or the or an
[54:52] island um from from the uh the often much larger changes in the ocean that surrounds it. And the next question is, how can
[55:04] uncertainty in satellite derived groundwater estimates be effectively communicated to policy makers? And are there probabilistic or machine learning
[55:14] approaches such as mixture density networks that can better characterize the multi-source uncertainty inherent in groundwater estimation? Well, um
[55:28] So to take the the first part of that is uh effectively communicating to policy makers makers uh what we've really found is that you
[55:35] have to put everything into their language. Um it's not enough to say uh here's a here's a change in terrestrial
[55:42] water storage or here's a trend in terrestrial water storage. You know, they might just sort of say
[55:47] yawn. I don't know what I don't know how that I can apply that. So So we we found
[55:53] that it's important to work with um stakeholders and policy makers to to develop products um that are really sort
[56:03] of tailored to to their specific needs. Um Um and uh and I think you know, you're sort
[56:09] of answering your own question here. Of course, you know, we've only just begun to look at how machine learning and and
[56:15] AI could help with um with improving that communication and developing the sorts of products um that would really be more more
[56:24] valuable um to these these end users um so that we can ensure that they that they really make good use of
[56:32] of the information that's available. Thank you. The next question is does vegetation contribute to these anomalies or depletion that we see? For example,
[56:47] in the Himalayan north of India um and and maybe the mountain glacier retreat? So the glacier retreat absolutely. Uh
[56:56] there are areas of the world where glaciers have been retreating rapidly and and that's and there can be a very
[57:02] large mass change signal associated with that. Um and we've actually, you know, especially areas where there are
[57:07] multiple glaciers, um we've we've looked at GRACE and seen at least the component of the GRACE um
[57:15] trend that we can attribute to to the uh uh the mass loss from the glaciers. Um regarding vegetation, um I did a you
[57:25] know, a study on that uh 21 years ago and and we found that in terms of vegetation water storage, um the largest
[57:33] changes happened actually over agricultural regions you know between you know the time of the times of you know plant growth to to when they're
[57:44] at their their maximum and and most you know most massive to when they're you know either harvested or or they go
[57:50] into senescence. But But those changes are still pretty small or they're basically within the uncertainty range of grace.
[58:03] I'd say it's on the order of half a millimeter per year you know equivalent height of water in
[58:10] terms of mass change in in vegetation water storage. So so it's really it's not something we typically
[58:20] think about too much and it's you know if you're interested in that component it's unfortunately not something that's
[58:25] going to be you could easily detect within the grace signal because there are so many other larger components of the grace signal
[58:33] like the soil moisture changes and ground water etc. Great. Thank you so much. Now next question is I would like to know what
[58:45] the observation depth of grace data is in the subsurface. In other words, is it useful for evaluating for example
[58:52] anomalies in deep confined aquifer systems? systems? Well there there's sort of two answers to this question. The first is that
[59:01] grace is not limited by depth whatsoever because it's because the grace system is really measuring changes in gravity that are
[59:09] associated with changes in mass at all depths. There's no there's no limit on how deep grace can measure. However,
[59:20] if you're talking about confined aquifers, aquifers, there's not so much of a one-to-one between a change in um
[59:28] in head in a confined aquifer and a mass change. Um so, confined aquifer head is really a
[59:35] you know, if you measure if you put a well into a confined aquifer, you're really measuring um changes in the in
[59:40] the water pressure in that confined aquifer. aquifer. Uh and and that cannot be easily translated into a change in in mass
[59:50] storage. Um so, it's it's difficult to um um to say you know, with certainty how much of a
[59:58] mass change is is hap- might be happening in the in the confined aquifer um uh but we do know that there are areas,
[1:00:07] you know, where unconfined and and confined aquifers are being over exploited um and over you know, averaged over that very large area
[1:00:16] that you know, at this at the spatial scale that GRACE would observe um we can see mass changes that almost certainly
[1:00:23] would be um partly attributed to changes in in those confined aquifers. Great to learn that. The next question
[1:00:34] also is interesting. Has anyone investigated groundwater storage changes in area experiencing mysterious earthquakes not related to fault zones
[1:00:44] like in the Great Plain or Louisiana? Um that's a good question. I don't [clears throat] I don't know
[1:00:53] that anyone has done that and um and and I'm not sure exactly what the linkage linkage would be there. Uh I guess the idea is
[1:01:02] that if you've um removed or added a lot of water um um to the to an aquifer, that can then
[1:01:11] um either lubricate the faults or or cause um other changes that would then um um initiate uh
[1:01:20] such earthquakes. Um but I don't I don't know of any specific research that's looked into that. The next question is, how can we design
[1:01:31] a unified probabilistic data fusion framework framework >> [snorts] >> that integrates multi-scale satellite observations and hydrological models to
[1:01:39] robustly estimate groundwater under uncertainty? >> [laughter] >> Uh wow, that sounds like um did AI ask this question? I I I'm not even sure how
[1:01:50] to answer that. Um this sounds like something that you might write a proposal to do. Um I it's not something I can I can just
[1:01:58] answer off the top of my head. Uh but certainly um you know, data fusion, machine learning, artificial intelligence, those are all
[1:02:07] things that we're beginning to uh you know, incorporate into how we uh analyze satellite observations including Grace and um
[1:02:17] and combine them with hydrological and other other models. The next question is from the Philippines. Given the archipelagic
[1:02:29] nature of our country, how useful would Grace data be? Is there a way to overcome the pixel limitation um
[1:02:38] for for uh island nations? Well, again, unfortunately, not at this time. Um it's it's again an issue with
[1:02:48] uh you know, islands being surrounded by ocean and there being very large mass changes in the ocean. And because
[1:02:55] you know, Grace is not um looking downward like a like you know, like a like a camera or an imager,
[1:03:03] um it doesn't it can't get you know, crisply define a region say this is what's happening in the region, this is
[1:03:09] happening outside. Um remember the key measurement is the distance between the satellites and so we're very limited in
[1:03:16] terms of the spatial resolution we can get, and it's you know, you just cannot distinguish distinguish for example, Philippine Islands from
[1:03:25] from the ocean around them in terms of in terms of the mass changes. Now, if we um
[1:03:30] um you know, we are researching um you know, next generation satellite based gravimetry um and there are some
[1:03:40] you know, potential uh systems that would increase the spatial resolution. Maybe we get to the point where we were
[1:03:46] able to to distinguish an island from the ocean around it, but that's that's at least a decade away.
[1:03:57] Thanks, Matt. Uh the next question is about um I think it's about the browser. Why are there no river basins in Scandinavia?
[1:04:07] And we will check and let you know. Uh I'm just checking the browser. Uh major river basins, of course, are there. Uh
[1:04:15] but there are very small river basins. They may not be included, but I will check and um
[1:04:20] reply to your question. The next question is to what extent can groundwater depletion inferred from grace-based terrestrial water storage
[1:04:29] anomalies act as a predictor or amplifier of compound climate extremes such as heatwaves and wildfires? Yeah, that I would say this is um this
[1:04:40] is an active area of research. Um Um and uh you know, when there's you know, I would say it's more like the
[1:04:48] terrestrial water storage, uh when that is is lower than your you know, terrestrial water storage is lower, that means the the the
[1:04:56] land is drier, there's less water available to plant roots. Um so, the vegetation is is not as um as moist as
[1:05:04] it could be, and those um conditions make it more likely that you're going to have have uh a wildfire um
[1:05:12] and similarly, when there's less water available for evaporation and transpiration at the surface surface you know when
[1:05:20] water evaporates or transpires the the air cools and when there's less water available there's less that evaporative
[1:05:26] cooling and so of course that can that can amplify a heat wave and and again I think this is the type
[1:05:33] of thing that that people are very interested in and and researching right now. Thank you. The next question is again
[1:05:45] about the browse the data analysis tool in the chart section of or Grace follow on why not replace no data with nulls
[1:05:54] and we'll give that feedback to the browser developer. Next question is what does deseason mean? mean? So again that is about browser. No no no
[1:06:08] I think I think I know what this is. So this is is a great question. Deseason means if you have a time series
[1:06:17] of observations from Grace so let's say you have a time series of terrestrial water storage anomalies from Grace over
[1:06:23] a particular region of interest in that time series you will see a natural seasonal cycle you know it'll be
[1:06:31] there'll be more terrestrial water storage during the wet season and less terrestrial water storage during the dry
[1:06:35] season and you know depending on what part of the world you're in that seasonality is different. To deseason means we use a statistical
[1:06:47] approach to basically remove that seasonal cycle so that we can then look at the the sort of non-seasonal variations in
[1:06:56] terrestrial water storage. So for example if it's you know if the average terrestrial water storage anomaly in a region is is you know plus
[1:07:06] 10 in the in the spring and the average is is uh minus 10 in the fall, you remove the the seasonal cycle so
[1:07:15] that you have you know, basically zero in all seasons and then it's easier to see like, okay, we're we're drier than
[1:07:21] normal this spring or we're you know, wetter than normal this fall. It's easier to sort of um
[1:07:27] um to understand where we are in terms of terrestrial water storage relative to the normal for that time of year.
[1:07:40] Okay, thank you. Um Um The next question is how how can you get the actual volume of
[1:07:47] TWS in water volume rather than water thickness, water equivalent thickness? Um that's that's pretty simple actually. You just multiply the um
[1:07:58] the the equivalent water thickness by the the area. So um so if you have a uh river basin that's 100,000 square
[1:08:07] kilometers kilometers and you have a uh terrestrial water storage anomaly of of um of 10 millimeters multiply the 10 millimeters by 100,000
[1:08:16] square kilometers, you'll have to convert the units to um you know, to probably be um you know, cubic kilometers or cubic
[1:08:24] meters or or whatever and then um and then that's how you you estimate the volume. Okay, uh the next question again is
[1:08:38] about um about the browser or the uh data analysis tool. I'm interested in the analysis tool and I have a couple of
[1:08:46] questions. The option detrend data, how is it detrending the data set? So um um it says fitting either linear or a
[1:08:57] polynomial as you can see um to the time series. Um and you can see the coefficients that it finds at the
[1:09:04] bottom. And if you're talking about uh removing seasonal trend, it what Met explained, it just statistically removes
[1:09:13] seasonal variations. And the second part of it is that JPL water equivalent and CSR water equivalent, um, there are two data data
[1:09:21] sets. I see that CSR has better special resolution, but can you expand on the differences of these data sets?
[1:09:31] So, Met can add to this, but I did share a link um uh earlier, and I'll put it
[1:09:36] here as well. It describes how to choose a data set or how you can average available data sets and then use that.
[1:09:45] But Met, if you have anything to add to that, please uh go ahead. Okay. Yeah, I just want to
[1:09:50] I I want people to be careful about um you know, what's viewed as better spatial resolution. Um
[1:09:57] you know, just because uh CSR provides their their uh their terrestrial water storage anomalies on a finer grid, maybe I
[1:10:06] forget if it's you know, 0.5° versus 1°, um, the effective spatial resolution resolution of GRACE remains the same.
[1:10:14] You still have to average um those pixels over a sufficiently large region for your results to be
[1:10:22] meaningful. So, that especially large region is, you know, 100 to 150,000 sq km at a minimum. Um
[1:10:30] Um uh So, but in terms of um other differences, um you know, they they do their processing in different ways and
[1:10:37] uh uh you know, JPL might be better in some ways and CSR in in in other ways. So, it's hard for
[1:10:45] me to say which one is is better overall. Um you know, sometimes people look at the differences between
[1:10:52] the JPL and the CSR and the the Goddard Space Flight Center and the um the GFZ product and and use that the spread
[1:11:01] among those different products as a measure of uncertainty. Um, I don't really like doing that very much because
[1:11:07] I think it only tells you measure of the uncertainty in the in the way they process it and not so much um,
[1:11:13] other sources of uncertainty like the um, the the limitations of the satellite observation itself, which would be, you know, inherent in
[1:11:23] all the products. Um, and I prefer to just focus on just pick one and focus on the science is always
[1:11:28] my advice. Great. Thank you so much. Uh, the last part of that question is, I was wondering if these results would be the
[1:11:41] same similar as downloading the masscons and plotting the data myself. Um, I think yes, that um, is true. It's the
[1:11:49] same data that's been um, shown here. Uh, next question is, uh, could a GRACE-like mission detect temporal mass
[1:11:58] changes on Mars? And what magnitude of water movement would be required for detection? So, um, so if, you know, if there were
[1:12:11] significant mass changes on Mars, then yes, a GRACE-like mission could could detect those. Um, you know, for Earth, we know that, you
[1:12:21] know, the uh, the uncertainty level for a monthly uh, gravity field or or or terrestrial water storage um,
[1:12:30] derived field is on the order of 1 to 2 cm equivalent height of water. So, you would need to have changes
[1:12:37] in water storage on Mars that were at least, you know, 1 to 2 cm equivalent height of water.
[1:12:43] Um, Um, you know, I don't know if anyone knows this for sure, but my intuition is that
[1:12:49] there's you know, pretty much no water cycle on Mars, so you're you're going to have very small
[1:12:55] changes in mass associated with water storage. storage. Um you know, there may be water, you know, in you know, frozen in the poles
[1:13:01] on Mars, but if it's not moving, then a GRACE like mission isn't really going to tell you much information. It can't tell
[1:13:08] you you know, just like on Earth, it can't tell you the absolute amount of water there. It can only tell you how it
[1:13:13] changes over time, and my guess is on Mars, it's not changing much at all. Mhm. Mhm. Yeah,
[1:13:22] Yeah, thank you. Next question is, can I find the the um water depths through this in a 20
[1:13:28] square kilometer area? Not using GRACE alone. Um you know, if you use one of the um you know, the GRACE 2.2
[1:13:42] uh uh uh data you GRACE data simulation based products, products, uh those are available on a on a quarter
[1:13:49] degree grid. So, you know, 25 by 25 km, um which is not going to get you down to
[1:13:57] uh your 20 square kilometers. Uh and, you know, as we discussed, there are a bunch of caveats in terms of
[1:14:04] um interpreting the GRACE 2.2 data. Um in particular, you know, the model doesn't know anything about, you know,
[1:14:11] groundwater pumping and other human water management. So, um there are some fine scale properties pro- processes not captured by the
[1:14:20] model, and therefore it's it's not um it it's quite imperfect in terms of downscaling the GRACE data.
[1:14:28] Yep. Just a note that next session on 28th will be about GRACE 2.2, and Dr. Rodell will explain this again.
[1:14:37] Uh question 18. Hi, everyone. I'm asking that GRACE 25 km resolution data is available. available. I think uh you just answered that. Um
[1:14:46] we'll see that um next week and with some caveats, but yes, GLDAS has quarter degree data. Right. And again, that's not that's not
[1:14:56] purely GRACE data. That's um Yeah. GRACE data, you know, assimilated into a land surface model and integrated
[1:15:03] with other observations. Next question is, can you please help me regarding how to create or get started
[1:15:13] to prepare such interactive web browser? So, that actually is beyond the scope of this training, but we will get you some
[1:15:22] reference material for that information. Next question is, is it possible to upload our own basin in a shapefile
[1:15:31] format or is there other another way to download data more systematically and more locally? So, next week, we will
[1:15:43] this browser will not allow you to upload your own shapefile. But, you can download the data. The links and information was given in
[1:15:52] the presentation slides. So, once data are available in netCDF and GeoTIFF format, so you can get them into a GIS
[1:16:02] QGIS platform. You can also specially subset data, so your region can be extracted and then you can in GIS you
[1:16:11] can upload your own shapefile and do the analysis. So, if there is interest, we will have a small
[1:16:20] We will provide information on that. Next question is, do we need the newest QGIS version for the next exercise? I
[1:16:31] believe believe we're not using any special features, but the procedure is based on the newer QGIS version. So, when you follow the steps,
[1:16:43] you may have to make some adjustments. Uh next question is for identification of a regional signal. Can you recommend
[1:16:52] practices for combining multiple mascons for a single product or for multiple products to estimate TWS and the
[1:17:00] uncertainty or of TWS i.e. e.g. If you calculate a mean time series, should some waiting be applied to deemphasize
[1:17:11] mascons at the edge of the basins or would you say that the full range of all mascon across
[1:17:20] all products represent the uncertainty for a region? Um Um you know, the um the mascon products, they've already done some you know, they
[1:17:34] put some effort into trying to um um try to account for for leakage across the basins. So,
[1:17:43] so I understand what you're asking and and um you know, it's possible that you could do a study
[1:17:48] and show that, you know, it's better to um um to you you know, weight more heavily the
[1:17:54] interior mascons than the ones around the edge. Um but I don't I don't know that's that's ever been done um
[1:18:03] and like I said, you know, the mascon products do attempt to to counteract uh leakage. So, you know,
[1:18:10] my general advice is just to use all of the you know, equally weight all of the uh
[1:18:16] the mascons within your region of interest, but um I'm you know, I'm not certain that that's the the 100% optimal way.
[1:18:26] The next question is what does water thickness mean? Yeah, so we use the term water thickness or equivalent height of
[1:18:35] water water um to as sort of a simplified way of explaining uh, a mass change. So, um,
[1:18:44] so, if you have a mass change that's um, you know, in terms of uh, you know, kilograms of water, we can then say,
[1:18:51] "What what would that equate to, you know, averaged over uh, a region of interest?" So, if we
[1:18:57] have a, you know, grace region that's 100,000 square kilometers, um, um, you know, you have a a change in mass
[1:19:05] over that region, um, what would be the equivalent height of water that would cause that change in mass?
[1:19:12] And uh, and you can think of it like, um, um, you know, again, grace measures all the different
[1:19:19] components of terrestrial water storage. So, there's the ground water, the soil moisture, the snow, and the surface
[1:19:23] waters. waters. If you took all of that water and ponded it on the surface of your region, what
[1:19:30] grace is measuring is like changes in the in the height or or depth of that water. So, think of it like a bathtub,
[1:19:37] right? So, so, maybe you're you might maybe you have a bathtub that's you fill it up halfway with water,
[1:19:44] um, and then you drain some of the water out, and you see that you're, you know, 1 cm lower than you were
[1:19:50] before. And maybe you don't know the total amount of water in that bathtub, but you know you've lost a centimeter of
[1:19:55] water. That's basically what we do with with the grace data. Thank you, Matt. It's great explanation. And the next one is do level three
[1:20:05] products account for regional earthquakes, such as the one in 2023 in Turkey, Syria? Uh, if studying a region like this for
[1:20:14] groundwater depletion, should the impact of seismic events be taken into account? So, typically what we've seen is an
[1:20:22] earthquake needs to be greater than magnitude eight, um, in order for it to have a large enough mass change
[1:20:29] to be, you know, to to really affect the time series in a meaningful way. And when there are those large earthquakes, you
[1:20:36] know, like the Sumatra earthquake earthquake, earthquake, um um then we there are some some specialists who work on earthquakes and and related
[1:20:45] uh uh you know, gravitational changes that have provided um data that that the um um the GRACE uh team has used to sort of
[1:20:57] try to remove that signal. Um it's not perfect. Uh it's actually surprisingly difficult to to provide even a uh a mass change
[1:21:07] estimate for an earthquake because um because you'll see sort of this ringing effect where there's you know, a large
[1:21:14] mass change in the middle and then um then the opposite sign mass change as you uh as you go outward from there.
[1:21:22] And um it's it's difficult to uh to remove that signal, but they do make an effort again for those earthquakes
[1:21:30] that are larger than about magnitude eight. Um that's already uh incorporated into the products, but it's it's not
[1:21:35] perfect. So, if you see you know, if if you look at uh a GRACE time series around
[1:21:42] you know, Sumatra area and you see some large changes, um you know, some of those are might be
[1:21:48] real, but a lot of them might be you know, part of the earthquake signal that was not
[1:21:52] completely removed. Well, that's interesting. Um the next question is, how good is the the GRACE data if I want to check the correlation
[1:22:05] between levee subsidence and groundwater or is it good when analyzing a large area? Well, if you talk about a levee, I mean,
[1:22:15] that's that's you know, then you're on the order of you know, less than a kilometer, right? If I'm understanding the question
[1:22:21] correctly and um you know, again, the GRACE effective spatial resolution is about 100,000 square kilometers. So so even a you know
[1:22:31] even a pretty large reservoir um um because it's a small area, it can be sometimes hard to see the changes in
[1:22:39] water stored um you know, in that reservoir behind a behind a levee or or a or a dam. Um for
[1:22:47] the larger reservoirs in the world as they're filling you know, for example, the Three Gorges Reservoir in in China, we can see that
[1:22:54] signal in the GRACE data, but um if you're talking about you know, a smaller uh smaller reservoir or levee, then then
[1:23:02] it's probably going to be too small of a signal for GRACE to detect. Mhm. Mhm. Um the next question is the tool
[1:23:12] indicates that the information is water thickness. Does it mean the thickness of the water above and below the ground?
[1:23:19] Is it ignoring the layers of soil in between? between? Um So yeah, I sort of answered this
[1:23:24] before, but the answer is like you take all the water on and below the surface and combine it into one. Almost like you
[1:23:33] took all the water and you ponded it on the surface. Um and that's what the thickness of
[1:23:37] water is. Um you know, changes in that in that ponded water. Um so it's not you know, is ignoring the layers of soil
[1:23:46] in between? Um I guess the answer is sort of yes because that's the soil layers are not changing, right? You're
[1:23:52] the the amount the mass of the soil is not changing. Um unless you're having you know, huge amounts of erosion. Um
[1:24:00] but uh you know, so it's really just looking at the water. Right, thank you. The next two questions
[1:24:10] are about the exercise. So does this exercise have to be done now? I mean, in the live session or there is a deadline
[1:24:17] to it? Um we just gave some time so that you can explore the tool and you have
[1:24:22] any questions Um in but it's not due today today you have almost between now and 15th of
[1:24:29] May when the homework is due your homework questions will be based on the exercise so you have time to finish that
[1:24:36] later on. The next is also about exercise. Yeah, it says um month year July to okay, there's a
[1:24:50] question in the exercise that says to move the month year to July 2021 and then it follows with a question
[1:24:56] regarding July 2022. Should we use July 2022? Two. So the the question is about it goes from you are
[1:25:06] checking 21 22 23 24 25 all years and then you are just then looking at one month so one July at 2022.
[1:25:19] Next question is could you please repeat what the vertical line on the plot was? So vertical line just it's the
[1:25:28] the place for month and year. So when you move that line along x-axis it shows which month and
[1:25:36] year you're looking at and then you can see the actual actual TWS anomaly at that at for that month and year along that line.
[1:25:48] And also as you move the line you can see the maps changing in in the browser so you can see corresponding
[1:25:57] distribution of TWS anomalies. Next question is are there any attempts made to downscale the grace data for
[1:26:04] smaller watersheds or high resolution impact studies? Yes, there are and and that's one of the things we'll be talking about with GLDAS
[1:26:14] 2.2 next week. GLDAS 2.2 is when we we perform data simulation. We take the GRACE data and
[1:26:20] we use it to to constrain a land surface model that incorporates a lot a lot of other higher information
[1:26:26] higher resolution information like precipitation and um solar radiation uh and and uh soil types types uh and other things. Um
[1:26:37] So, uh so the answer is yes here. There's also, you know, people are starting to look at, you know, machine learning
[1:26:43] approaches and artificial intelligence and that sort of thing. Um But, you know, none of these are are
[1:26:50] perfect answers. Uh you're never going to get, you know, a truly high resolution GRACE only product. Next question, I think it's a follow-up
[1:27:01] question to the one that you answered about the coastal region. Um it refers to the question about the
[1:27:06] identification of a regional signal given multiple masscons and products and the uncertainty for the signal. In answering that question, please also
[1:27:16] consider the case of a coastal region. I think you covered that, right? You mean You Yeah, I'm a little I'm a little lost
[1:27:25] cuz I don't know what the original question was. Um I'm not I'm not really sure how to
[1:27:30] answer this one. Yeah, I I'm not sure either. I Yeah, the question was about river basin I that, you know, near the
[1:27:37] edge, would you just consider Um if you're looking at a region, how would you weight multiple different
[1:27:45] masscons? I I mean, we we can revisit this later on. Uh question 32, can you plot multiple
[1:27:51] data on the same chart for comparison? Um I I believe that you will have to download CSV files from two different
[1:28:00] data sets and then make time series either in Excel or in some other software. Uh question 33, when will the present
[1:28:10] data March April 2026 be available? So, um so the Grace team has a goal of making the data available within about 3
[1:28:22] months of real time. Um often it may be more like 4 or 5 months. And it just depends on the degree of uh
[1:28:30] processing that's required and um sometimes the satellites are in a better orbit with with fewer repeat pass
[1:28:38] overpasses and other times there's more uncertainty to deal with. Um Um so I I don't know exactly the answer to
[1:28:46] that because I'm not one of the product developers, but um but it's typically typically I would say
[1:28:51] it's on the order of 3 to 4 months um after real time. And this is actually one of the things we address with GRACE
[1:28:57] 2.2 and data simulation is we can run much closer to real time um using other information to to extrapolate uh to to
[1:29:07] near real time. Okay, thank you. So, currently I think February 26 is available, but then March, April are not there
[1:29:17] yet. Uh question 34, I wonder if we have options for downscaling this GRACE data so it can fit for analysis in the
[1:29:24] archipelago and whether there are some approaches to mitigate the leakage signal problems on the uh edge of island. I I think um Dr.
[1:29:36] Rodell has answered this question, but Matt, if you want to say anything more. Yeah, again, I mean, unfortunately
[1:29:42] there's just not a whole lot we can do to to get a good result. Um you know,
[1:29:48] GRACE observation over islands where the the ocean signal's leaking in. I mean, it's it's just it's almost impossible to um
[1:29:56] to to mitigate that effect. Um so, it depends on the size of the island, of course. So, you know, Greenland,
[1:30:01] you know, is a huge island and we can monitor changes in Greenland, but if you're talking about, you know, the
[1:30:06] Philippines, Philippines, um those islands are going to be uh too small for for Grace to resolve. Right. Next question is, can we
[1:30:16] interpret water equivalent thickness data to identify region regional wet and dry periods influenced by flood events? Yeah, I mean, so um
[1:30:29] so if you have a flood, I mean, you use there's there's more water there than than average, and so you should see a
[1:30:35] you know, a significant positive terrestrial water storage anomaly. But it all, you know, it does depend on
[1:30:41] what you know, are we talking about localized flooding? Um Um you know, if it's a if it's a small
[1:30:46] area, then that then then it might be too small for Grace to resolve. Uh and if it's something like flash
[1:30:53] flooding where it's really just, you know, heavy rain and water ponding on the surface temporarily, um that's going to be less of a signal,
[1:31:02] you know, less detectable than something like, like, you know, uh continued heavy rains or or what happens after a hurricane where
[1:31:10] you've just had, you know, many many inches of water um um rain down. Um Yeah, so it's it's yes with a with a a
[1:31:21] caveat there. I thank you. Uh next question, please correct me if I'm wrong, but since this is a monthly
[1:31:31] average data set, it may have limited usefulness for water logging analysis influenced by surface water and ground
[1:31:38] water flooding, especially in a country like the UK where rainfall events are frequent and highly variable. Yeah, that's true. I mean, it's it's
[1:31:47] monthly, so um so we don't have any direct information on what happened within a given month. It's only
[1:31:56] the average over the course of that month. month. Um and uh I'm going to talk about GLS
[1:32:01] 2.2 again. Um, you know, GLS 2.2 with the data simulation and and the incorporation of other higher spatial and temporal
[1:32:10] resolution data sets means that we can look at sub-monthly variability. Yeah, the next question is I'm not quite
[1:32:21] sure which sea basin to use for California. I I believe this is about the exercise. You are actually not
[1:32:27] looking at any basin, you're looking at the state of California. I just look at the map uh to answer the questions. So,
[1:32:34] that's basically you're not looking at time series, you're looking at the map. Uh, question 38, given the course resolution of grace
[1:32:45] data, what is the best way to apply it to small basins? Is it better to use mask on products or combine grace with
[1:32:52] hydrologic model? Well, if I, you know, it depends on the definition of small. So, if it's small
[1:32:59] or is smaller than about 100,000 square kilometers, kilometers, then um, you know, if you just average over the
[1:33:08] the uh the grace grids that are available on one of the, you know, one degree or half
[1:33:13] degree products, then then you can you can come up with a time series, but the errors are going to be
[1:33:18] very large because there's going to be a lot of leakage. And I I I don't recommend doing that. It's, you know,
[1:33:23] it's not very meaningful. So, so the integrated products um with the hydrological models like GLS 2.2 are
[1:33:32] going to be better for that sort of application. application. Thank you so much, Matt. Uh, we are
[1:33:38] almost at the end of the hour here and it's the end of our webinar time. Um, there are questions remaining that we
[1:33:46] will be answering on the Q&A doc and post on the website in a week or so. Uh, so we really want to thank you for
[1:33:52] attending today's session and we hope to see you on 28th of April where Dr. Rodell will again be talking about GRACE
[1:34:00] does does 2.2 2.2 with quarter degree resolution to look at daily groundwater storage data. And with that we want to thank our GRACE
[1:34:12] team for the help, especially our coordinators Natasha Johnson and Sherry Morris, our helper and editor Maria Marabito, Jonathan O'Brien, Sarah
[1:34:23] Cashell, Cashell, coordinator Brock Levins, and our GRACE team Shawn McCartney, Erica Podest, instructional designer Susan Monti. Thank you all so very much for your help
[1:34:37] with this webinar and uh uh we hope to see you on 28th of April at the same time. Thank you. Thanks Matt
[1:34:45] very much for your presentation and answer all the questions.
