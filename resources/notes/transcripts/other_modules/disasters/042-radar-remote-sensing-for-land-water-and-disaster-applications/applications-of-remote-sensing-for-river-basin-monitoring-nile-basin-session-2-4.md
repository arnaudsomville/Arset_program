# Applications of Remote Sensing for River Basin Monitoring, Nile Basin, Session 2/4

`https://www.youtube.com/watch?v=t09kon01dq8` · id 217 · 1:14:31 · module 58 — Radar Remote Sensing for Land, Water, and Disaster Applications

[00:03] good morning everyone and welcome back to this second week of webinar on applications of remote sensing for monitoring the water budget
[00:12] within river basins last week we saw overview of remote sensing data uh how for river basin monitoring we went over a number of
[00:26] remote sensing data sets as well as a blend data assimilation modeling system today now uh we have a guest speaker
[00:36] from johns hopkins university dr benjamin zeitchik he will be presenting his work on applications of remote sensing for river
[00:45] basin management water management and he's going to focus on nile basin uh dr zaichik is from the
[00:55] the department of earth and planetary sciences in johns hopkins university and his focus is on variability of climate
[01:03] and hydrology he focuses on understanding processes hydrological processes which vary with time because of uh climate variability
[01:14] and he also um wants to focus on coping with this variability so he also does forecasting of climate and her
[01:24] logical processes and forecasting for water budget management so he is going to to show how to use some of the data sets we
[01:33] talked about last week and how you can apply it for your basic management so with that we will have dr zaichik
[01:42] give his presentation thank you good day everyone thank you for joining us for the second week of this applications of remote
[01:55] sensing to the water budget within river basins presented by the nasa arsenal program program i'm ben zaichik i'm an associate
[02:03] professor at johns hopkins university department of earth and planetary sciences sciences and today i'll be talking a little bit
[02:09] about about how my group has worked to apply remote sensing sensing and studies of water budget monitoring
[02:16] in the nile river basin and so i'm going to start off by just providing some of the objectives
[02:22] for today there are a lot of different ways that we can use earth observations in this river basin
[02:32] i'm going to focus on three areas of application application first first our efforts to estimate the distributed
[02:38] water balance across the basin second how we can use earth observation to improve and also to evaluate
[02:45] hydrologic models that are applied in water resource analysis and finally i'll give an example of how we can use
[02:53] advanced satellite imagery to monitor and understand hydrologically complex regions i'll be giving the example of the wetlands and south sudan the sud
[03:01] wetlands which are a very difficult place to model but some observations can help us to understand what's happening
[03:08] there there to begin with just a little bit of background about the nile basin for those who are not familiar with it
[03:14] it is of course famously the longest river in the world located in east africa africa the nile has two headwaters regions
[03:23] the white nile comes out of the equatorial lakes around lake victoria the blue nile comes out of the highlands
[03:32] of ethiopia and flows in and is often referred to what is part of the eastern nile basin
[03:38] the white nile and the blue nile come together at khartoum and then flow as the mainstab nile
[03:43] through the cataracts of north sudan and on north to egypt this animation provided by the nasa scientific visualization services
[03:54] is showing us a few of the variables that i'll be discussing during this presentation first thing to notice
[04:02] is that as you probably are aware it's very dry in the northern portion of the basin in egypt
[04:09] almost all the rainfall that falls in the basin comes in the headwaters regions in the south and the east we're
[04:14] seeing here data from the tropical rainfall measurement mission showing the seasonality as you go through the year
[04:20] of rainfall in the equatorial lakes region there are two rainfall seasons while in the eastern nile including the
[04:27] blue nile headwaters there's one rainfall season in boreal summer we're now seeing alexi the atmosphere land exchange inverse model which is an
[04:37] example of an evapotranspiration product derived from satellite and finally a land data assimilation system that's showing us soil moisture
[04:46] variability estimated using satellites and models this can then be compared to the gravity recovery and climate exchange grace
[04:53] experiment showing a seasonality of total water storage everything from the top of the vegetation canopy down through groundwater
[05:02] now all of those tools can be used independently to look at various aspects of the water balance at the nile and
[05:08] they become very powerful when they're combined either in a multi-sensor type of analysis which i'll show in the first
[05:14] example and also when integrated via models either to parameterize those models or through data assimilation so when approaching the nile basin or
[05:26] really any large trans-boundary river i think many of us are aware you face a number of challenges
[05:31] first data tend to be sparse so there are large parts of the nile basin where there just isn't monitoring
[05:37] available available secondly in a transboundary river basin you're often dealing with a situation where some of these data the in-situ
[05:45] data are politically sensitive and so there's not a lot of sharing of information and experience across boundaries
[05:52] boundaries another point that is certainly true for the nile and of any basin in which there is
[05:57] is our large semi-arid or arid regions or a large amount of human water use is that this
[06:03] is an evaporation-dominated basin now what i mean by that is that upwards of 85 percent of the rain that falls in the
[06:09] nile basin evaporates and leaves via that flux rather than leaving through a river river now that's a challenge for us because of
[06:17] apple transpiration is a such a distributed flux it's all across the landscape it's a complex landscape and
[06:24] evapotranspiration response to different limitations in different places based on climate and land use so it is traditionally a very difficult flux to
[06:32] monitor monitor and finally as i noted already there's considerable meteorological complexity in this basin we have these different
[06:40] rainy seasons dealing with tropical convection that can be very difficult to predict and even to monitor and also hydrological complexity and
[06:48] that's true across the basement particularly if we think about the white nile coming through these highly evaporative equatorial lakes and on into
[06:55] south sudan and this dotted line roughly shows where that sood wetlands is that i'll be talking about later which is a
[07:02] very difficult place to model so the way i'll approach the three objectives is through these three studies first i'll be looking at
[07:17] remotely sensed water balance analysis next i will talk about the nile land data assimilation system which is an
[07:25] implementation of an elvas which was discussed in week one in the concept of the global land data
[07:30] simulation system we customize one for the region i'll talk a little bit about that and then find this wetland mapping
[07:36] and monitoring project so starting with the remotely sense water balance analysis i'll be using here what hydrologists
[07:44] refer to as a first order terrestrial water balance approach which simply means that we're going to take precipitation falling in our area
[07:52] of interest subtract off evapotranspiration evapotranspiration subtract off discharge from the basin which can be surface or subsurface
[08:00] though i will focus on surface in this context context and assume that through mass balance that equation will be equal to the
[08:08] change in storage and we're going to be applying earth observation to do this so for precipitation um we'll rely as you might expect on the
[08:18] precipitation measurement missions from nasa and its partner space agencies the results i will show are from a few
[08:24] years ago so we used the tropical rainfall measuring mission trim but today you can use the global
[08:31] precipitation measurement mission gpm for even better analysis from this we'll then subtract evapotranspiration and as you learned
[08:40] last week there are several different ways to do this from space i'll be giving an example today keeping to one to keep
[08:46] things simple of our use of alexi the atmosphere land exchange inverse model which we get from martha anderson and
[08:53] her colleagues at the u.s department of agriculture it's simply an inverse model that uses land surface temperature from
[08:58] satellite uh and ancillary information in order to get an estimate of what the evaporative demand and actual
[09:05] evaporation are from the land surface and we use this in east africa using a combination you can do this
[09:14] using geostationary satellites or using modis data and as was discussed last week there is a way to access that modis based product
[09:23] uh via the nasa survey portal and here i'm just showing one example you know a snapshot of
[09:28] an evapotranspiration shown here in units of megajoules per meter square per day so really a latent heat flux
[09:35] in the nile basin and then what we refer to as evaporative fraction the evaporation divided by the potential of
[09:42] apple transpiration to let us know something about where water stress is existing or water limitation is present and as you might
[09:49] expect it's very dry in the north of the basin wet more of apple transpiration in the south
[09:55] now river discharge there are ways to estimate river discharge from space the altimetry of some large rivers and certainly of lakes
[10:04] and reservoirs however i have a question mark here because i'm going to treat that as an unknown in this analysis
[10:10] simply because at the time we did the study we didn't really have a reliable space-based estimate of discharge we had
[10:16] some in-situ gauge data that we could use to evaluate but our objective here is to do what we can with publicly
[10:23] available earth observation fortunately our fourth term our storage we do have some information on and we take this from the gravity
[10:31] recovery and climate experiment grace which is shown here the original grace mission ended a couple of years ago but grace follow-on
[10:40] is now up and will be delivering data in the coming months grace consists of two satellites one
[10:48] following the other in low earth orbit and the way that this system works is that the two systems measure the
[10:54] distance between them using microwave ranging ranging and by taking advantage of the fact that the distance between them will change
[11:02] due to gravitational anomaly as the lead sensor speeds up over a positive gravitational anomaly and then the
[11:08] second sensor catches up as they pass over that that region of the earth we can then estimate
[11:15] gravitational anomalies and changes in gravitational anomaly on earth's surface and it turns out that the change in
[11:22] gravity over time at a location relates very closely over land to changes in water storage so it's a complicated approach but in
[11:32] the end it gives some very elegant data on that change in total storage everything from snow if you're in a
[11:38] region with snow through vegetation soil moisture surface water and groundwater and so that'll be our total storage change taken from
[11:46] grace i will note that grace has very coarse spatial resolution on the order of hundreds of thousands of square
[11:52] kilometers per measurement so you can't use it to figure out what's happening very locally but you can use it as a
[11:58] constraint on a basin scale water balance so i'm now going to show the space and scale water balance
[12:06] and i'm going to focus on three sub basins and the sod so first to point out some
[12:13] some applications relevant developments of interest in this basin so what i've got here outlined in red is
[12:19] what we might call the main stem or lower nile basin encompassing everything in egypt and also north sudan and noting here the
[12:27] location of the oswan high dam which of course is of interest from a water management perspective a
[12:31] lot of interest in knowing how much water is flowing into that dam next i'm going to talk a little bit
[12:37] about the grand ethiopian renaissance dam dam this is a massive hydropower project currently in the final stages of
[12:44] construction right here in the blue nile near the sudanese border when complete it will be the largest hydropower
[12:50] project in the history of africa it will have a large reservoir behind it and it will begin to regulate flow of the blue
[12:56] nile in a way that has not been seen before in history a lot of interest in understanding
[13:00] exactly how that influences the water balance the sood which i've talked about a couple of times located here in south sudan is
[13:09] interesting as a wetland because it is so highly evaporative it's it's self-regulating in that it expands seasonally and during wet years and when
[13:17] it gets bigger it evaporates more and what we find is on average the flow of the white nile coming into
[13:23] the south to the sud from the south is about twice the volume of the flow coming out in the
[13:28] north so you lose a lot of water and evapotranspiration that we'd like to understand understand so so here's a data figure okay so what i'm
[13:38] showing here are some of the results of our analysis you're seeing on top the blue nile on
[13:45] the bottom the equatorial lakes region so the two headwaters regions and just showing as an example four years
[13:51] the blue line here is the trim rainfall estimate in billion cubic meters okay per month what we see here for the blue nile is
[14:01] this once per year seasonality as the rainy season comes in primarily june through september and then in the equatorial lakes region
[14:09] we see these two rainy seasons in march through may and again in october through december in each year and quite a bit of
[14:15] inter annual variability next variable here is the alexis of apple transpiration which shows a similar seasonality in the blue nile it
[14:22] lags a little bit as we'd expect behind the rainfall and is smoother over the year because of water storage buffering
[14:28] it it and in the equatorial lakes region we see a significant of apple transpiration throughout the year
[14:34] um we can then subtract off precipitation minus of apple transpiration which i'm showing here in this dashed line which is really just
[14:42] trim minus alexi in any lake evaporation and then we can compare that to the grace change in storage the change in
[14:50] storage month-to-month by grace which we think should just about match precipitation minus evapotranspiration again discharge being a small variable
[14:58] here because it's an evaporation dominated basin and yeah we we see that more or less we get the seasonality
[15:05] and we get the magnitude with some differences which are of interest but to first order they align reasonably well
[15:14] we can then use this information by averaging across our areas of interest in this case the various sub-basins and
[15:19] the sod wetlands to get quantitative estimates of the water balance so i won't spend a lot of time walking
[15:26] through every number here in detail the slides are available to you if you're particularly interested in this region
[15:32] but we have here the rainfall the alexi derived land of apple transpiration transpiration change in water storage a lake
[15:38] evaporation estimate which we do with a simple uh energy balance analysis and then this residual which should be equal
[15:45] to the discharge because we've accounted for storage as well as rainfall of apple transpiration and lake evaporation
[15:54] and what we see here in again all all data in billion cubic meters per year is that for the equatorial lakes it's a
[16:00] very wet area a lot of apple transpiration and we end up with this residual of 55 billion cubic meters per
[16:06] year which is what we think the flow should be coming out equatorial lakes region region blue nile around the same order and the
[16:13] lower nile we see this deficit as we would expect on account of the large irrigation and lake evaporation going on
[16:19] the lower nile where there's very little rainfall similarly to sod wetlands which we know lose a lot of water that's our
[16:25] estimate for the impact that the sood has on flow and for the entire nile basin we have
[16:32] this estimate about 13.5 that we think makes it to the mediterranean i'll just simply note a couple of things
[16:37] first of all we have error estimates here which are very important based on the reported error metrics of these
[16:44] products products is that a perfect estimate of uncertainty certainly not this is a data sparse region and there are a lot of
[16:49] sources of uncertainty but it gives us at least a picture of how well we think these observations
[16:55] might be performing then when it comes to the actual numbers the blue nile we come up with this
[17:02] number number that is just about the same as what gauge discharge is at the output of the
[17:07] blue nile as to which most textbook estimates are for the nile on that order of 50 billion cubic meters per year
[17:13] similarly um we know that egypt at least according to treaties gets access to about 55 billion cubic meters
[17:21] for their use per year and we're on the same order there so we which is about consistent with what people understand
[17:26] is happening with water management in that part of the basin similarly the sod matches up pretty well our equatorial
[17:32] lakes estimate we think is too high based on other estimates and we're still working on that that probably has to do
[17:37] with this large lake evaporation that is difficult to constrain and it just so happens that our number
[17:42] for the entire nile basin matches almost exactly to 13 billion cubic meters per year that various publications by the
[17:48] world bank and the food and agricultural organization of the united nations have for the nile now there's substantial
[17:54] uncertainty on this and so the fact that we hit it so closely should not be overstated we don't want to overstate
[17:59] the certainty of this estimate but it gives us a sense that we're closing the water balance from space in a way that
[18:05] is at least realistic with respect to what is understood on the ground okay okay moving on to the next study which is the
[18:15] nile land data assimilation system first of all i'd like to talk a little about about what a land data
[18:22] assimilation system is and again this was described last week in terms of just general characteristics and use and the way that you can get
[18:32] data online from nasa's global land data simulation system but in principle what this is is it's a tool that is merging models
[18:42] and observation which is really important when you've got powerful but imperfect tools based on both process-based understanding as embodied
[18:51] by our modern uh hydrological models and the observations from space the principle here is that if you
[18:59] integrate the two you end up with more reliable and meaningful information than either one can give you on its own
[19:07] in cartoon form what this looks like is that you start off with some landscape information from your
[19:15] very often satellite-derived land cover and vegetation products and your satellite derived topography from sources such as hydrosheds you combine that with your
[19:24] satellite data on meteorology including for example your gpm precipitation you bring these together into a land surface model
[19:33] and that would typically give you some output in terms of hydrological fluxes and storages you know evapotranspiration
[19:39] soil moisture changes in groundwater storage river flow what distinguishes a land data simulation system is the fact that as
[19:47] this model runs forward it can integrate update observations in this case just giving an example of a
[19:54] footprint of a soil moisture observation from smap and and this will allow the model to correct as
[20:02] it runs forward by taking advantage of the earth observation so the land surface model is predicting soil moisture based on its inputs and
[20:10] its physics and then it gets corrected as it moves along whenever an update observation is available so as to ensure that the final output is
[20:19] as close to reality as possible so so the land surface model let's talk a little about what that is
[20:28] and here's again a schematic of a land surface model there are a number of them out here this one is the noaa
[20:35] multi-process land surface model but it it doesn't matter too much i just chose that as an example
[20:41] the main point i want to make is that a land surface model solves simultaneously for the water
[20:48] balance and the energy balance near earth's surface this is very powerful because it allows for multiple constraints on your
[20:55] estimates and multiple sources of information going into that estimate of your water balance and so here we see
[21:00] that the model will account for snow in separate layers soil a shallow unconfined aquifer vegetation fluxes um and a little bit of information on
[21:10] runoff and surface water all of this will give us our estimates of evaporation of flow of recharge it is
[21:17] taking advantage of this meteorological data which we do not simulate but rather taken from other earth observation
[21:24] so another point about these land surface models i should note it's one dimensional so you end up with a gridded
[21:31] representation of the landscape but each grid cell is one dimensional and simply solves for the local balance and that's
[21:38] important when thinking about what these models can and can't do in terms of thinking about lateral flow you can have
[21:44] a river that flows laterally that isn't formed by the land surface model but if you have a situation where you think
[21:49] that there's actual subsurface soil transfer that is influencing your hydrology well there's a limitation depending on your scale of analysis
[21:59] okay okay um um again you get these update observations along the way which keep the model running
[22:07] running smoothly we do that through data assimilation okay so that's why we call these land data assimilation systems
[22:13] because the algorithm used to bring those observations in is called data assimilation i won't get into the
[22:18] details of the statistical methods used to do that uh but there are a number of ways to that attempt to balance the
[22:25] relative uncertainties of the model and the observation and so ldas are everywhere again last week there was describe this
[22:35] global land data assimilation system there's also a very important uh system here that we use in the united states
[22:42] called the north american land data assimilation system which provides really important information operationally united states used for
[22:49] drought monitoring in a way that is used to inform the payout of crop insurance across the country it's
[22:56] also used to initialize weather forecasts forecasts and it's used for our long-term climate records records there's a similar system in south
[23:03] america america another one that my group is involved in developing for south asia and an important one in
[23:09] africa the famine early warning system ldas and data for that system are available via nasa's portals for more
[23:17] detailed information on africa our nile land data simulation system was quite similar to that we developed it first
[23:25] but a lot of the information that we generate in the nile land data simulation system has since been
[23:30] incorporated into fldes so that would be perhaps the place to go if you wanted data most similar to what
[23:35] i'm showing here for those of you who are interested in actually working with elvas yourself you can get data from those portals but you
[23:45] can also get the software yourself this is open source software supported by nasa via the land information system
[23:51] list list this is a software framework that's used to run the land data simulation systems you can access it through the website
[23:58] the nasa land information system website and install it on your own system and there's a community that works together
[24:06] through exchange information to make sure that everyone gets the support they need when working with the system
[24:15] so when we took ldas to the nile we had a few challenges we had to figure out
[24:20] which meteorological products we were going to use to run our system we need to figure out a way to account for
[24:25] irrigation practices locally we developed some code that is now integrated to that publicly available list system that account for flood
[24:33] irrigation irrigation we also needed to gather as much information as we could on land cover and soils
[24:41] there are some standard global products but we want to make sure we have the best available for east africa and then
[24:47] we had to figure out how to evaluate it now i don't have time to go through that
[24:51] entire process of in each point though there are there are certainly experiences that are available through papers and through the eldas websites at
[25:00] nasa on how to do that but i will talk a little bit about evaluation evaluation if i'm in an evaporation dominated basin
[25:07] that is data sparse and i run this model or set of models in my lds how do i know
[25:12] if i'm doing well and so one way we did this was by leveraging earth observation now alexi which i described earlier and
[25:21] that we use in our water balance analysis is not an input to the ldas the ldas is what we call a prognostic system
[25:29] that is forward simulating my water balance on the basis of first principles and input parameters parameters alexis a diagnostic approach which uses
[25:39] the land surface temperature from remote sensing to estimate the evaporative flux so they're independent and so what we can then do is look at
[25:46] them compare them side by side to figure out where is the lvas matching alexi and where isn't it
[25:53] both products have uncertainty neither one is is the truth necessarily but both have a lot of information an agreement
[26:00] between the two can be viewed as a source of confidence that the system is capturing something properly
[26:07] and so i'm going to talk about three points here very briefly the nile delta heavily irrigated area
[26:14] the sud and also in between the two an irrigation scheme called the jazeera scheme in sudan so the nile delta i'm showing here is
[26:23] another data results slide and again showing the same you know about five years of data that i showed before for
[26:29] the water balance analysis the blue line is alexi the red line is elvas elvas the green line here for comparison is a
[26:38] modis product the one that was uh reported on last week um and finally we're showing here what happens if you
[26:43] run ldaps but don't account for irrigation so we can actually separate what's natural evapotranspiration versus what we think is coming off of irrigated
[26:51] fields in the nile delta there's very little natural evapotranspiration it's almost all irrigation we see is that alexi and the ldas with
[26:59] no calibration across each other at all match reasonably well and gives us some confidence that the lvas is getting things right
[27:06] we also note some interesting discrepancies that apparently eldas dries out too quickly in between cropping seasons is not
[27:13] accounting for residual moisture perhaps that we can then incorporate into further model development we notice that modis the standard modus
[27:21] product in this region seems to be systematically underestimating now that's again not a judgment on against any product in particular everywhere it
[27:28] just happens that that's what we found in this region the jazeera scheme so that's that other irrigation system i mentioned in sudan
[27:36] and this was interesting for us because again the colors are the same and we see that we match sometimes
[27:42] reasonably well between elves and alexi but at times the ldas completely misses some evapotranspiration and this was
[27:50] really helpful to us because it showed us that there was a small second cropping season that alexia observed
[27:55] where irrigation water was applied that the elves missed because of the way that we parameterized our irrigation routine
[28:01] and since this time we've been able to improve in order to capture that second irrigation system so again the power of
[28:05] multiple sources of earth observation finally the sood and now here we see alexi it's noisy but you have alexi showing about
[28:14] transpiration year-round in this wetland the elves meanwhile totally misses it it goes completely dry outside of the rainy season and why is
[28:25] that well that's because these land surface models in the ldas are one-dimensional and they're not accounting for the fact the l that the
[28:31] sod is getting a lot of inflow from the side that contributes to soil moisture and to surface water and
[28:37] evapotranspiration there and so this showed us something very valuable which is that we need to apply a different modeling system to get this
[28:45] and since that time we have and now we're working with a combination of models to try to improve this
[28:51] but the point here is simply that if you use something like glvas or even your own lds system or really any of these
[28:57] advanced land surface models in a trans boundary basin where there are big wetlands where lateral flow contributes
[29:03] a lot to the water balance you need to exercise caution because the models systematically do not include that
[29:09] process and speaking of the stud that'll come to the last point that i wanted to touch on
[29:17] today today which is some of our work on wetland mapping and monitoring in the sub basin so here's a satellite image of the sood
[29:30] it's located right here at the heart of the nile basin in south sudan taking inflow from the south
[29:37] as the white nile enters the sod it spreads out into two main branches that then come together again at the
[29:44] north north and the river flows on its way the sud if you're wondering what it actually looks like there it's a
[29:53] wetland there's a lot of population that lives in the sud and it's a wetland that is papyrus
[29:58] dominated dominated but is diverse of course over its large area very important biodiversity center particularly for migrating birds
[30:08] now something interesting that motivated part of our work here again from the water resources perspective is that for
[30:14] decades there has been discussion of the potential to build a canal called the jungle canal named after the
[30:22] location in which it starts um that would bypass the soot so why would you do this you do this because
[30:29] the soot is losing so much water as i noted earlier the inflow of the white nile to the sood is twice
[30:36] the value of its outflow a lot of water is lost something on the order of 15 billion cubic meters or more
[30:42] our estimate from the first portion of this presentation was more on the order of 20 something billion cubic meters
[30:49] being lost in the soot if you bypass for the canal then presumably you can reduce that evaporation and get more water
[30:56] downstream which of course is of a lot of interest to sudan and to egypt now now the john lee canal is not a fiction it's
[31:05] not some kind of grand scheme that's never actually going to come to pass in fact there was a lot of work to do
[31:11] the jungle canal this is a german-built excavator that still is sitting there in south sudan after it had been working to
[31:19] nearly complete the jungle canal uh at a time in the early 80s before violence in the region basically ended that project
[31:27] the jungle canal was almost complete at the time that the that the civil war um forced construction to stop so this is
[31:34] not just something that's on a drawing board this is something that has been almost completed um was then halted for
[31:40] decades but is still always there in the background discussions every once in a while emerge now those discussions are viewed as an
[31:47] opportunity perhaps by those who want to see more water going downstream and also viewed with some trepidation
[31:54] both by people who are who rely on the for their livelihoods and also by those interested in
[32:00] biodiversity conservation and to some extent carbon conservation in this wetland and so the question of what the
[32:06] john we will would do to the area of the sood is really of some critical importance and
[32:15] estimates have been made that are pretty easy water balance estimates to confirm that if you want to deliver
[32:20] four or five billion cubic meters downstream you know the advantage being that you have virtually no evaporation
[32:26] compared to what would happen in a sud if you want to enhance that flow by 5 billion cubic meters which is
[32:32] substantial for a river where you're talking about maybe a 15 billion cubic meter average flow coming out of the sun
[32:38] today today then you would need to draw 20 million cubic meters per day so there are some
[32:42] good design specifications if we want to understand what the jungle canal would do do so our interest in approaching this was
[32:49] to say okay first of all never mind the jungle canal can we understand can we monitor and
[32:55] understand the water balance of the soil this massive data sparse seasonally varying wetlands then then can we use that information to inform
[33:06] our estimates of what would happen to the area that's wetlands if the jungle were constructed which again is of
[33:11] critical importance for certainly livelihoods as well as for biodiversity so to approach this we made use of
[33:20] synthetic aperture radar data everything i'm going to be showing comes from the acar sensor but there are various platforms
[33:28] available on these days that can do the same thing so synthetic aperture radar is an active remote sensing technology
[33:35] right where you're basically shooting a radar signal down and measuring the back scatter scatter this is just an example of what the sod
[33:44] looks like during a dry period or a wet period period now when i'm using synthetic aperture radar here brightness is indicating the
[33:52] intensity of the radar backscatter back to my sensor and in this case on this map just let
[33:58] you know the red and green areas are locations where we actually know what the land cover is okay the green area uh
[34:04] being a place that is consistently flooded um the red area being a slight highlands i mean it's a very flat area
[34:10] but it is up a few meters and therefore it stays dry what we're seeing here is that things
[34:15] get brighter when it's wet and also even in the dry season there's a big area in the middle of the sun that is giving us
[34:21] a bright signal a very high back scatter so why is this why do we end up with
[34:26] this bright backscatter in the middle of a wetlands and it has to do with the way that the
[34:33] radar signal bounces so so typically what we think of is starting at the bottom here with dark
[34:41] open water looks dark to synthetic aperture radar whenever you're off nader whenever your radar signal is not
[34:47] shooting straight down and why is that it's because you get specular reflection off open water it's like a mirror and the signal just
[34:55] bounces bounces off the water and out and is directed away from the sensor right if you shoot
[35:00] it down at an angle it bounces away so it looks really dark because you don't get much signal back
[35:06] dryland gives you kind of a medium signal shown here by the arrows coming off this vegetation here because you get
[35:12] kind of a single bounce right where it bounces off the land and either it just kind of scatters in a uh
[35:19] in a in a uh in a rough fashion such that it scatters in all directions and you get some signal back or maybe it
[35:27] also bounces off some vegetation and you end up with a little bit of back scatter off the vegetation as well but in
[35:33] general because you get the smooth scattering off of the rough land surface you end up with kind of somewhat
[35:40] let's call it medium returns brighter than water which is scattering away only but it isn't that bright because it's
[35:47] scattering in all directions now off flooded vegetation you end up with this very bright signal because when you get a specular reflectance
[35:55] that then bounces off the vegetation and comes back and so because you have such strong specular reflectance of the water you
[36:01] have a much stronger signal to bounce back off that vegetation and so you end up with something that
[36:06] ends up looking like a very strong signal signal and so for that reason we end up seeing
[36:12] this really bright white on this image even in the dry season when we look at the middle of the soot
[36:18] okay so why do we care about this we care because what this means is that we can apply the brightness
[36:24] to understand how much area is flooded how much areas open water and how much area is dry
[36:30] and we can do this using back scatter thresholds and so through some details that uh are available in some
[36:37] papers we've written on this not too difficult you identify the thresholds and you say okay based on
[36:43] these thresholds if it's really dark it's open water if it's in the middle of dry land if it's green it's flooded
[36:48] vegetation and here's just an example of one image where this happened and here's what happens over time okay
[36:56] and so what i'm showing here is a time series of flooded area over four years the area here in green is what we
[37:06] estimate from our synthetic aperture radar estimates okay the yellow is evapotranspiration in millimeters per month shown on the
[37:17] y-axis on the right here from alexi okay so we've got a seasonal signal in which the area of the sud
[37:24] is more or less matching the evapotranspiration as we'd expect because as the soot floods more evaporates evaporates we can then scatter these two against
[37:33] each other so here i'm just showing a scatter of evapotranspiration against flooded area and we end up with an r
[37:40] squared of 0.71 it's pretty good there's some scatter there but that's quite a high correlation over this time and area given the
[37:47] uncertainty of the products so so once we identify this correlation between evapotranspiration and area it means that we have linked the wetland
[37:58] area to the water balance once we have that link that allows us to solve for other terms
[38:05] and when we solve for other terms then we can perhaps look at how something like john glee might affect
[38:14] okay okay defining the water balance equation so here it's just some quick math um but hopefully it's fairly simple
[38:22] q here is discharge so q in is the flow in through the river coming into the soil from the south q
[38:29] out is what flows out to the north so your inflow minus your outflow is plus the precipitation p any station
[38:37] that falls on the sud minus e any evapotranspiration from the sud will equal ds over dt your change in storage
[38:45] with time so flow plus precipitation minus transpiration equals change in storage these two terms and we can relate to
[38:56] each other based on that uh that relationship between evapotranspiration and area that i noted on the previous
[39:02] slide slide we do that by basically saying that the soot is really flat okay so that a
[39:06] change in area is directly proportional to a change in storage assuming a depth of about a meter which is how deep the
[39:12] wetland is that means that we can then use this area versus evapotranspiration relationship to replace evaporation with
[39:21] area times some coefficients which means a linear regression to get these coefficients coefficients and we're going to replace change in
[39:28] storage with change in area times a constant having to do with the depth and then we solve okay and so we solve
[39:38] for this using the data we collected from our earth observation and so now we say that we are relating
[39:44] inflow outflow precipitation and area okay okay so why do that well because then if we say that the
[39:53] jungle canal is going to draw a certain amount amount of flow out we can solve for the change in area
[40:04] if we solve for the change in area then we can have we can provide a pre-construction estimate of what johngley is going to do
[40:10] for the flooded area of the sood and therefore for all the concerns about what that means for land use for
[40:16] livelihoods for biodiversity and here's the result that we came up with with when you apply the equations on the
[40:23] previous slides to a john lee type design design here's what happens in the mean flooded area of the sud
[40:29] going from 30 000 square kilometers with no jungle canal all the way down to something like 18
[40:37] 000 000 if you divert up to 35 percent of the water so depending on the design of
[40:42] jangly this is what we would end up seeing seeing again there are uncertainty bars provided here there's probably even
[40:48] larger uncertainty that exists from beyond the earth observations having to do with the design of such a canal
[40:54] nevertheless what this allows us to do is bring to the table a quantitative earth observation obser observed
[41:03] observed an objective estimate of what different kinds of diversions would do to this wetland area and that
[41:09] provides water managers and negotiators with some data to look at together when deciding on a course of action for this
[41:16] proposed diversion so that brings me to an end of what i want to present today looked as we did
[41:26] at both the remotely sensed water balance analysis using satellite data and then also integrating those satellite data to a land data simulation
[41:34] system system and finally at least one case study in wetland mapping and monitoring where we looked at an area where we have a lot of
[41:40] challenges in doing hydrologic estimates that can try to address those challenges using remote sensing so to close out i just like to summarize
[41:50] by saying that our work experience in the nile and other regions we believe does support the case that
[41:59] you can use remote sensing to advance your understanding of transboundary rivers rivers to improve monitoring over what's
[42:06] available with in-situ data and also to predict the water balance of large poorly instrumented basins when we
[42:13] bring the elbas in i think that we've also really recognized the power in merging data streams and now that's true when you're
[42:23] using multi-sensor approaches to close the water balance and also when you're using them in data simulation and that
[42:28] can be true in kind of a confirmatory sense saying okay we know that we're doing well um but also importantly in
[42:34] identifying where our limitations are when we see discrepancies between different observing systems i can't emphasize enough that the
[42:43] uncertainties are large and that we can't understate those uncertainties and so whenever bringing some of these techniques into the water management
[42:52] discussion it's really critical to acknowledge and really emphasize the range of uncertainties now it's not just remote sensing that has uncertainties of
[43:01] course any kind of estimate has uncertainties for different reasons but we certainly want to make sure that
[43:05] we're looking at the range of estimates and not just that central estimate like the mean prediction and finally i'd simply say that for all
[43:15] the uh reasons why we might have um healthy skepticism and sometimes unhealthy skepticism of these products um depending on people's exposure and
[43:24] and comfort level working with them you can really do a lot through collaborative analysis and we've been
[43:30] able to work um you know in partnership um with trans boundary water organizations like the nile basin
[43:36] initiative we've been able to have discussions with our colleagues who do river management in ethiopia in egypt
[43:45] and look at these data together and really try to figure out how we can improve improve the
[43:52] the the observations how we can improve the models how we can work on communication to make sure that the uh results are
[43:59] neither misinterpreted uh nor overstated and how we can think about designing future analyses to do and now to do an
[44:07] analysis that's going to inform water management management and so really when it comes down to how to use these in a river basin context
[44:15] and particularly trans boundary river basin context there's a lot of work interesting work to be done on the observation and
[44:22] modeling side on the analysis side but it's so much more powerful when it's paired from the start
[44:28] with a conversation about goals and objectives and concerns from the perspective of water management so with that i will stop thank you for
[44:39] uh tuning in and we'll have some time for questions and answers thank you thanks so much dr zaichik i really
[44:48] appreciate your presentation i think it was very informative showing uh applications of all the remote sensing data as well as
[44:56] elder system so this is just a reminder and you can see my screen hopefully uh today we had dr zaichik talk about nile
[45:08] basin water uh balance and next week we'll have another guest speaker dr john bolton from nasa he will be talking
[45:16] about about both water resources management as well as flood monitoring and management in the mekong basin in south asia so that
[45:25] is on 27th of march so we'll thank you for attending today's session and we hope to see you next week just at
[45:33] the same time uh we have dr zaichik online here and he'll be happy to answer your questions
[45:40] so we will open uh this floor for question answer just one more thing before on our site
[45:47] website you will find a homework assignment posted so please finish this complete this homework assignment by 4th april this is one of
[45:57] the requirements for getting your certificate of completion for this webinar so here is the link you can it
[46:04] will be answered through google form so just click on the link and answer all the questions based on
[46:10] last webinar session as well as today's webinar session so with that we'll uh have a dr zeidchik here and we can
[46:19] answer some of your questions thank you thank you amir can you hear me i can hear you yes
[46:30] so thank you everyone for for listening to the seminar today um and i have a document here with some questions that
[46:37] have been typed in called in so i will begin with those that have already been asked asked and we can move from there
[46:44] um so the first question that came in related to the grand ethiopian renaissance dam and the question is to what extent has
[46:53] this dam affected the flow of the nile river through egypt and then a follow-up to that was a
[46:59] question is uh pointing out that the area surrounding the dam is tectonically active so are there risks of destroying
[47:05] this dam due to politics or a sudden earthquake in this area so for the first question the influence
[47:12] of the dam on flow is yet to be known exactly because they have not begun to fill the reservoir to any
[47:19] significant extent that will happen soon now when they begin to fill the reservoir uh there is currently an
[47:27] ongoing negotiation about the rate at which that filling will occur and that is a critical question of
[47:33] course for egypt and sudan as well as for ethiopia to make sure that this is done properly
[47:39] and that is really in the realm of political discussion right now and we're all very optimistic that an equitable
[47:46] agreement will be made the reservoir will ultimately be the volume of about two times the annual flow of the nile river so as you can
[47:54] imagine the rate at which that is filled will have an incredible impact on how much water makes it downstream
[48:01] once the reservoir is filled then it is you know it's a reservoir for a hydropower facility and so the only
[48:08] way you where you make hydropower is by putting water through the turbines and so ultimately it'll be an equilibrium
[48:13] system where perhaps um there's some evaporative loss up the reservoir of a a few billion cubic meters per year
[48:20] maximum and so that's something to be considered um but there won't be continual diversion that will mostly be
[48:25] occurring during the filling stage now when it comes to the second half of that question about the stability of the
[48:32] dam and you know some some saber rattling that has gone on about perhaps um attempts to to destroy the
[48:39] dam um certainly you know i i am no different from anyone else and hoping that such such events are avoided
[48:45] um um i do not have the expertise to comment on the uh structural stability of the dam when it comes to tectonics
[48:52] that is something that certainly people are looking into but i i'm afraid i can't comment any further
[49:01] uh another question came in um you got to believe this is with respect to the sood sood um and the question is in that soot
[49:08] analysis when we were looking at area of the student of apple transpiration um the question is is the correlation
[49:15] between the area and the evapotranspiration estimates accounting for autocorrelation both spatial and temporal temporal um so yes
[49:25] yes we do account for temporal autocorrelation when doing our significance tests of those correlations though i'll note that the fit is useful
[49:35] um almost regardless right because we're trying to fit coefficients for an equation um but the in order to test its predictive
[49:42] skill we do test out of sample significance at correcting paradox correlation correlation spatially i assume there is strong
[49:50] spatial autocorrelation but you know what we're doing there is taking the sum of the area for both
[49:56] and so uh spatial autocorrelation doesn't really play um in the analysis that we did we're just viewing it as one
[50:04] area um in that case uh another question came in oh i like this one um can you reverse calculate the effect on
[50:14] temperature maxima based on the amount of water removed from the wetlands so a question here i suppose both about the
[50:20] base state and in the case of a jolly diversion how does that reduction in latent heat flux
[50:27] influence air temperature um yeah that would be a really neat thing to try of course you know we need to
[50:34] think about the atmospheric conditions winds circulations everything you do when doing an energy balance to figure out air temperatures i think that's a
[50:42] very interesting question about what the cooling effect of the soot is i have not personally looked into that
[50:48] but it's something that this analysis could inform uh another question um up to what size of river basin grace
[51:00] data can be used um how coarse is grace data excellent question question um and so grace data and this is a point
[51:08] of caution if you go online to the nasa websites you can download grace data that are gridded at 0.5 degree
[51:19] resolution so about 50 kilometer but we all need to be careful and understand that that's not the true
[51:25] resolution of grace grace you would typically think of having a smoothing radius of around 300 kilometers this varies by product so
[51:34] you're talking about at least 200 or 300 000 um kilometer squared area um for any one observation
[51:42] and then there's also horizontal autocorrelation even beyond that uh so typically i would not try to use grace
[51:50] on a river basin that's less than certainly about three by three degrees size you know 300 kilometers on a side
[51:58] and even that we would still want to carefully look at that analysis and see what's happening in neighboring areas if
[52:05] there's a neighboring influence but yeah you don't want to just use grace for a point or use it for you know a
[52:11] 50 kilometer watershed you want to be looking at larger basins question five what is the difference between assimilating soil moisture data
[52:22] into a land surface model and calibrating the land surface model with soil moisture data right so those are two
[52:30] powerful ways to make use of remote sensing data in the modeling context in data assimilation you are quite
[52:36] simply correcting the model in in run time so as the model runs forward you adjust it you don't change the
[52:43] parameters of the model you simply correct the predictions whereas in calibration you typically run in an iterative mode you run through a
[52:53] simulation many many times and adjust the parameters until you get a better match between your simulation and the
[53:01] satellite soil moisture observation so both are good ways to use remote sensing data in our case we are doing
[53:08] data assimilation um simply because we've been looking at trying to adjust these runs as they go rather than to
[53:15] optimize optimize model parameters but both approaches are are quite powerful and can be applied within the frameworks that i described
[53:28] here's another question about about grace and about water storage and the question here is instead of using grace to calculate a change in
[53:36] storage storage could you use something like smav a storm moisture active passive mission soil moisture to calculate the change in
[53:42] storage which i assume would be this map at time two minus map at time one right and so you can use um
[53:52] smap to calculate the change in storage the difference with grace is that grace because it's responding to gravity is
[53:57] really integrating water storage and so you're getting surface water soil moisture ground water snow in places where that matters but not in our study
[54:06] region and so that change is showing our total change in storage smap would be very useful for looking at changes in
[54:12] soil moisture particularly surface soil moisture moisture since the microwave doesn't penetrate more than a few centimeters so you're
[54:20] really looking maybe at higher frequency changes in your surface conditions as opposed to grace looking at these longer
[54:27] term storage changes question the next question is would the elvas products be suitable for water balance analysis and small-scale
[54:36] catchments catchments possibly possibly so so you know the the precipitation um estimates you can get from nasa and related satellite products
[54:47] range in spatial resolution from five kilometers to 25 kilometer square kilometer sorry five kilometer grid to 25 kilometer grid
[54:57] um um and and you can make estimates at that scale that's been gonna drive the lvas which
[55:03] itself has parameters it can be quite high resolution sub kilometer scale i will say that as you go to larger
[55:10] areas typically we think that errors can somewhat balance each other out and so you're very sensitive to errors in small
[55:17] area analysis but there's nothing structure that that prevents you from i'm using the ldas for fairly fine resolution
[55:25] and it can be applied that way i will say that the models in the eldas because of their assumptions about
[55:31] lateral lateral moisture transport really aren't hill slope scale models so you want to at least be looking at watersheds that are
[55:37] averaging over you know a catchment area as opposed to trying to figure out what's happening on one slope but once you're up around
[55:45] that that kilometer to larger scale resolution the models are reasonable okay another question what is the minimum size of the base in
[55:58] which we can use grace to estimate storage okay that's that's the same question as we had before about the
[56:02] grace resolution um and then it says if our basis is part of a bigger basin could we use a proportion
[56:08] of grace estimates for storage so that's interesting question so if you have a grace estimate for a large basin and you
[56:14] want to do a sub basing can you just use a proportion of it um i'd be a little
[56:18] bit careful right because lar the large basin might not be hydrologically uniform and so if there are some parts
[56:23] of that basin that are not um that are that are have more or less water storage variability you could get
[56:31] an incorrect estimate if you just use a proportion proportion but there are certainly examples of people who are clever about applying
[56:37] grace in combination with our other observations to try to figure out if they can disaggregate the gray signal uh
[56:45] indeed that's that's a motivation of data assimilation with grace is to be using ancillary information um like on
[56:51] rainfall uh for example to help us to disaggregate grace to find our scale okay and slide another question your
[57:03] specific question about storage being higher than precipitation for the blue nile how can that be possible um all right so you know the problem is
[57:12] i don't actually have the slides in front of me right now i'm assuming this is referring to the time series
[57:18] um um in which we're looking at changes in storage um actually i'm sorry i i now i'm not sure
[57:27] if this is the time series or the or the for the table i will say that um
[57:33] storage being higher than precipitation we're always looking at changes in storage storage over time and so it is possible for stores to be higher
[57:45] than precipitation at any given time and that precipitation is a flux and storage is is a mass balance term
[57:52] but i apologize i i maybe i can return to this at the end if there's time to
[57:56] look back at the slides all right next question will estimation of the river discharge be used from
[58:03] satellite to be used for hydrologic or hydraulic modeling modeling does this discharge be used for monitoring river
[58:11] discharge instead of river gauges so this is a question about satellite based based discharge estimates and yes i mean we
[58:20] already use altimeters which are you know these active radar emissions to look at stage of the river right the
[58:29] height of the river and in places where that can be associated with discharge flow through a rating curve you can have
[58:36] these synthetic gauge stations right where every time there's an overpass of the satellite you get a flow estimate so
[58:43] that's done um you know obviously in-situ data has certain advantages and that the satellite is not always there and that
[58:51] there's some uncertainty but it's it's it's been quite useful in some large rivers right now the radars are resolution
[59:00] limited limited but the future mission the swat mission the surface water ocean topography mission which will be going up uh
[59:06] hopefully quite soon in the next few years years will provide uh power to do that kind of
[59:11] ultimately on much smaller rivers and when we can do that then hopefully we'll see a proliferation of these
[59:17] synthetic gauges where we're using satellite data just as the as the questionnaire suggests question 11 why was the difference
[59:26] between the alexa and the ls when analyzing in parallel in the northern part of the niles bear to use gpm and
[59:31] the alexi so there are different reasons why alexi is different from the eldas in in in the northern part of the nile so that
[59:46] that's the north part of niles lower is egypt that's quite dry um i wouldn't say that your choice of precipitation
[59:53] product really matters in in the northern part um really i think using alexi and comparing it as we did to a simulation that
[1:00:01] includes irrigation was really the best thing we could think of to do in the headwaters of the nile
[1:00:08] then you have a do have a choice where you'd say okay do i want to use something like gpm and the elvas to get
[1:00:13] an evapotranspiration estimate or use alexi which is you know an inverse method uh getting out of apple
[1:00:19] transpiration the energy balance and i think this is very much an open question each is subject to their own
[1:00:27] uncertainties and limitations personally i think that in hydrologically complex areas so i gave the example in the presentation of the
[1:00:36] sood sood if it's a place where we know that the model probably doesn't quite have the information it needs
[1:00:43] i would put more faith in alexi as kind of closer to an observation if we're looking at something like the
[1:00:50] nile highlands of ethiopia where you've got steep topography and perhaps alexi itself is going to have some uncertainty because of the
[1:00:58] challenges of estimating energy fluxes and topography um then really you have a situation where an ldas et estimate driven with gpm
[1:01:06] versus an alexey estimate from the satellite temperature measurements i would just view them as two independent methods
[1:01:14] and try to constrain my uncertainty in my estimate by using both i wouldn't be comfortable comfortable saying that one is definitely better
[1:01:21] than the other without in-situ data another question how did you estimate other water users in the basin like
[1:01:30] municipal and industrial water use a great question we didn't our assumption here is that irrigation is far and away the largest consumptive
[1:01:40] use of water in this basin i think that that's uh i think that's a very reasonable assumption for this basin but certainly
[1:01:47] when getting into the details particularly in more urbanized urbanized areas you would want to account for such
[1:01:55] users another question what is the latency of gpm lexi and grace data so latency is a big issue here if you
[1:02:05] wanted this in real time um gpm is fast right you get that within hours at least some of the products um so you can get
[1:02:12] precipitation for real time um um alexi has some latency i i apologize i don't know the exact latency of the
[1:02:20] various alexi products but i think we're talking at least a couple of weeks and grace is right now quite slow
[1:02:27] they're just starting to work on some real-time products but the standard grace products often run a couple of
[1:02:33] months behind and so really they're much more useful for retrospective analysis than for real-time monitoring right now
[1:02:41] as i said this is an area of active research we're involved in some projects that are trying to
[1:02:46] use real-time grace products in a data assimilation context and hopefully hopefully that kind of work will reduce the
[1:02:53] latency latency the grace follow-on mission the one that's up there now does have specifications that are include a goal of reducing latency times
[1:03:03] um to less than a month another question here uh you had mentioned that these are estimates so
[1:03:11] how comprehensive should ground truthing be to make a viable decision from the regulator's point of view this is the this is the big question and
[1:03:19] i don't think there's a single answer um i i would say that their advantages and disadvantages disadvantages to using things like models and remote
[1:03:31] sensing as opposed to in-situ data on the one hand in-situ is always going to feel very concrete
[1:03:39] on the other hand it's not always representative representative you know river gauge river uh uh gauges are are good integrators but
[1:03:48] rainfall gauges don't always capture the whole diversity of the landscape evapotranspiration is very difficult to measure in situ over large scales
[1:03:56] and so in some ways um i think that the the question applies no matter what your data source is you know how
[1:04:03] much information do you need and that's why this is a conversation i i think that there has to be discussion
[1:04:10] with the decision makers about what they feel they have the confidence to act on there are certainly examples
[1:04:18] from the united states perhaps from elsewhere as well places where regulatory decisions are made based on these kinds of satellite
[1:04:24] observations observations i also think that in our experience in trans boundary basins uh they've been helpful in encouraging um various
[1:04:32] parties to look at the resource problem through the same lens even accounting for the uncertainty um and so there's there's i think good
[1:04:41] value in them already um um the other part of this question of course is how much we ever we should put
[1:04:47] into ground truthing and as a hydrologist i would always say as much as possible because clearly more data will help us
[1:04:55] and more data that is shared openly would be invaluable okay okay does climate change feature as an input
[1:05:07] is important for those of us to do compliance monitoring of water resources over time so the results that i showed today
[1:05:16] include climate change in so much as climate change has occurred in the past several decades we are not presenting here projections
[1:05:24] that's a different question so so the first part the monitoring certainly there's changes um that we see in the
[1:05:31] record and we believe we're accounting for them the future projections one can use tools like like the land surface models we used um
[1:05:41] coupled with downscaled global climate models to understand future changes in water resources that's a large area of
[1:05:48] research we do some many other groups do as well so in that context you're not really directly using the satellite data other
[1:05:55] than to evaluate the realism of the model model because we don't have satellite observations in the future
[1:06:00] but you then take what you've learned from your retrospective analysis and apply it to a simulation of future
[1:06:08] conditions uh what affects the reduction in the students what lend to flora fauna and groundwater to recharge from the
[1:06:15] wetlands wetlands will they be assessed um i would certainly hope that if the john lee canal is
[1:06:24] uh uh brought back if that plan comes back onto the table that there would be a thorough
[1:06:30] thorough um and a neutral objective evaluation of such environmental impacts right now there no one is building the
[1:06:39] jolly right that was a past plan it was abandoned and it's discussed now but not actually actively going forward
[1:06:46] should those plans be activated then i think your question is absolutely critical critical i think those kinds of impacts will have
[1:06:53] to be assessed um i think there's an error in the example that generally can now the surface should be in square kilometers
[1:07:03] and not in cubic kilometers uh so again i apologize i don't have the um slides in front of me right now uh
[1:07:09] perhaps if if it's an area it should be square kilometers not cubic so i apologize if there's a mislabeling on
[1:07:15] that slide the volume is cubic kilometers of course and the uh area square kilometers [Music] [Music] uh question what are the basic
[1:07:25] requirements for monitoring predicting water balance for a case study um um i it's hard to answer that's a good but
[1:07:35] very general question i think you need to start from your objective once you know what your goal is um you
[1:07:44] know how big is the area what fluxes are most important what's the resource question you're trying to address
[1:07:50] um um then you can come back and uh and back out the requirements um and then really it's going to depend on
[1:07:59] context 19 is it possible to estimate soil moisture flux using remote sensing um i'm not sure what you mean by soil
[1:08:10] moisture flux so the soil moisture content content yes yes we do that through passive microwave as well as the potential to do it through
[1:08:17] active missions um so smap is an example of that the flux is well soil moisture can flux
[1:08:24] either either um through latent heat flux to the atmosphere so that's evapotranspiration and yes we're monitoring that um or it
[1:08:31] can flux downward right through drainage and that i'm not aware of any satellite technique to get a drainage from the
[1:08:37] soil soil into into deeper reservoirs um that'd be something you'd want to simulate what is the spatial scale for
[1:08:48] evaporation evaporation so talking about resolution um um the alexi products that we were using is our five kilometer resolution
[1:08:58] um um there are different products at range they're on on the order of that on the order of a few kilometers resolution
[1:09:06] how do you estimate the errors in the remote sensing data good question um um and so for rainfall um trim and gpm are
[1:09:16] just uh and all of these products are distributed with error estimates so we used the nasa provided error estimates
[1:09:26] for evapotranspiration alexi does not have as formal an estimate they don't have a spatially distributed estimates the way the
[1:09:34] precipitation does so we worked with the data producers to basically uh estimate about what we thought the
[1:09:40] uncertainty was um given their knowledge of past performance in these environments but that was quite admittedly a more informal
[1:09:48] approach to error estimates and then when it comes to water storage from grace that is distributed with
[1:09:53] error estimates so you can get those from nasa um okay so then i think we have a repeat
[1:10:03] question here about i'm gonna skip over um um can i know the difference between vic model and arc swat um so i didn't
[1:10:12] actually use either vic or arc swap in uh this analysis but vic is an advanced land surface
[1:10:19] model that's implemented in gridded format format typically solves for the water and energy balance simultaneously though that can be run in water balance mode
[1:10:29] arc swat right that's the arcgis implementation of the swat model swat is semi-distributed so it runs kind of on
[1:10:36] lumped watersheds uh and as as far as i understand it's a water balance model that does not solve for the energy
[1:10:42] balance um which has implications you know depending on what kind of application you're using like you can't couple swat
[1:10:48] to the atmosphere you can couple vic to the atmosphere um but really there are two advanced modeling systems um
[1:10:56] and i think that uh it would if you're trying to decide between the two of them um you'd want to
[1:11:02] read up on on how they've been applied in the past and you'll see advantages and disadvantages of each and there's also a
[1:11:08] practical consideration here ark swat is um quite correctly popular because of the way it's implemented right i mean if
[1:11:16] you you or your team are comfortable working in a gis environment um and not perhaps a command line linux environment um arc
[1:11:24] swat is a great option uh uh another question here about the sood um the water balance calculation the soot
[1:11:34] area seem to not consider the groundwater component why was this left out and if it was to
[1:11:39] be included what source of remote sensing data could have been used used um um that's a that's that's a good point um
[1:11:48] so so we were really looking at this in terms of the surface water fluxes um you know in the water storage term
[1:11:57] since that's the largest um variability on seasonal time scales we did apply grace data in the study i i
[1:12:05] not maybe i didn't show it today and we used grace there to look at the total water storage um to see if there were
[1:12:11] larger um you know if there was a significant groundwater component that was not evident in our surface water
[1:12:17] estimates um and so one could use that one could certainly use a combination of methods for example you
[1:12:25] can use the the radar data sar data to look at water extent changes some altimeter tree to make that
[1:12:34] a volume estimate and then grace to look at the total change in storage um subtract off your surface water estimate
[1:12:40] to get the residual to find out what's happening below the surface and i believe we looked at that and
[1:12:45] found that it was not huge but um i should i'll be honest that was a couple of years ago and i don't remember
[1:12:51] on the details um but we found that the surface water was was the component that was most relevant to our question
[1:13:00] okay i believe that that's through the questions listed here um um amita and and team is there anything else that we
[1:13:10] should address no i think this is great um thank you so much for answering all these questions
[1:13:18] um um just one thing i wanted to mention uh in response to one question next week we
[1:13:23] will see application of swat in mekong basin so you can see how that is um used in in
[1:13:32] in some of the problems uh but today it was great ben uh thank you so very much
[1:13:37] for your presentation as well as the question answer session um and if we have any more questions
[1:13:43] we'll probably just contact you but i think this was a great example of how remote sensing data
[1:13:50] can be useful for different applications in a river basin so if there are no more questions we thank all the participants for
[1:13:59] attending today's session and we hope to see you next week at the same time uh please complete the homework assignment
[1:14:06] you'll find that on asset website and we'll see you next week so thank you thank you everyone from the rc team also
[1:14:15] uh for helping with the webinar session today and thanks again ben zach for today's session thank you
