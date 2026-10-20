# Integrating In-Situ Observations with Satellite Imagery, Part 2/3

`https://www.youtube.com/watch?v=fIQJx3_xlEQ` · id 290 · 1:30:45 · module 301 — Satellite Remote Sensing for Urban Heat Islands

[00:00] good morning afternoon or evening wherever you are joining us from welcome back to the second part of the rset
[00:07] training satellite remote sensing for urban heat islands as a reminder all webinar recordings powerpoint presentations and the
[00:18] homework assignment can be found after each session on the training page at the link provided below there will be one homework assignment
[00:29] that would be posted following next tuesday's training the homework must be submitted via google forms and the due date for the
[00:37] only homework assignment is december 1st a certificate of completion will be awarded to those who attend all live
[00:45] webinars and complete the homework assignment by the due date you will receive a certificate approximately two months after the
[00:55] completion of the course from marines martin as a brief recap of what we covered last week in the first part of the webinar
[01:06] series series we focused on land surface temperature based urban heat island mapping we summarized the characteristics causes
[01:15] and impacts of urban heat islands we identified the satellites and sensors used in analyzing urban heat islands by
[01:24] land surface temperature we recognize the limitations of satellite data for urban heat island analysis analysis and we replicated the steps of
[01:34] converting data from the landsat series of satellites to land surface temperature estimates using google earth engine for the second part of this three-part
[01:46] webinar series we are delighted to have as a guest presenter dr vivek chandas dr shandus will be presenting his work
[01:55] integrating in-situ observations with satellite imagery for mapping urban heat dr shandas is a professor at portland state university in oregon where he
[02:06] specializes in developing strategies for addressing the implications of climate change on cities his teaching and research examined the
[02:15] intersection of exposure to climate induced events governance processes and planning mechanisms mechanisms dr shanda serves as the research
[02:25] director for portland state university's institute for sustainable solutions where he supports cross-disciplinary efforts to address pressing challenges
[02:34] facing communities around the world he also serves as the executive on the executive committee and is the portland
[02:42] co-lead for the national science foundation sponsored urban resilience to climate extremes where he conducts research to understand how cities can
[02:51] transition into more sustainable futures he is also the principal investigator for the canopy continuum project where he works with the u.s forest service and
[03:02] state and county health departments to research how trees improve birth outcomes by mediating urban heat and air
[03:11] quality quality we are honored and delighted to have vivek join us today to present his work integrating in-situ observations with
[03:19] satellite imagery for mapping urban heat and without further ado i will pass the presentation over to him
[03:29] thank you for the opportunity to be able to present some of our work uh that's in this case titled integrating in situ
[03:36] observations with satellite imagery for mapping urban heat my name is vivek chandis and i'm at portland state
[03:43] university and have been engaged in these integrative efforts on a variety of different time and spatial scales which i'm
[03:51] delighted to talk to you about today just want to set the stage a little bit first before we get into some details
[04:00] the the seminar that you may have attended the first seminar was really focusing on satellite-derived measurements of urban
[04:09] heat and so this in-situ observation is an attempt to complement what you already heard in no way replace it and
[04:15] really provide a means by which you can find a more robust way to understand the distribution of heat in
[04:21] your community i want to start with uh some general background so in terms of background and context for
[04:30] understanding urban heat i just want to bring to your attention the fact that there is a long history of this in terms
[04:35] of understanding how cities are very different than their surrounding areas in fact that was one of the earliest observations
[04:44] written in english french german spanish and then later japanese of a series of research studies that goes back over 137 years where we're
[04:52] really talking about how a city because of the way that it was built because of the various infrastructure in place was
[05:00] me was moderating the way in which the sun's rays or the shortwave radiation as we'll talk about in a minute was
[05:08] affecting the uh surfaces and the built environment and so what historically was often done was to find the obser find and observe
[05:17] differences between the city and its surrounding areas and hence this classic example of the urban heat island
[05:24] more recently we started getting into descriptions about what's actually causing those differences in heat and in fact what's happening at a very local
[05:32] level within even a neighborhood so the the recent work has really taken the broader concept of an urban heat island and made it more
[05:40] granular if you will so if we're measuring progress over time we're really starting to think about how
[05:46] development and the use of specific methodological standards for assessing urban heat and we're right now in a real
[05:56] a real growth in terms of those methods we've seen all different forms of satellite-derived imagery as you saw in
[06:02] the first session with now a lot more emergence of in situ or ground-based measurements near surface temperatures as they're also called uh
[06:12] starting to emerge as as methods and part of this is really about finding effective applications to planning and what you can do to mitigate
[06:22] urban heat as the planet warms and as we're seeing longer longer heat waves more intense heat waves and
[06:29] more frequent heat waves in many parts of the world part of what we're trying to do is design our cities design our
[06:35] human human our human habitable spaces in such a way where that heat is not so acute and
[06:41] actually can be tempered by the materials by the surfaces and by the various ways in which we build our our
[06:48] uh communities and so the opportunities for climate adaptation really open themselves up in in the more recent understanding of how we're
[06:57] measuring progress so with that said we would get into a discussion about what's actually happening when the sun's rays are coming
[07:08] onto the earth or really any other planet that we know of what we see is a lot of
[07:14] shortwave radiation very energy packed um um rays coming down from the sun and those are hitting the surface and what we see
[07:24] is some of that is absorbed by the earth itself some of it is reflected by the atmosphere and some of it is absorbed by
[07:30] the atmosphere and what we end up seeing is a three different forms of heat that finds its way to our skin
[07:40] and that can that's actually done through heating of the ground so this is essentially ground heat and then there's
[07:46] also sensible heat when the sun's rays actually heats up the actual air around us and then finally we have
[07:54] latent heat which is when water evaporates evaporates and we actually can see can can experience what happens as that water
[08:02] evaporates and becomes part of the air column itself and so these three forms really matter when we're talking about
[08:10] integrating the satellite derived and the nc2 observations of heat often the way that we've talked about urban heat as i'll bring your attention
[08:19] back to the reference site model or that is the classic way of taking a reference site usually away from an urban setting
[08:28] and that is a stationary sensor that measures temperature sometimes humidity and it there's another approximate sensor that's within a city someplace
[08:39] within the boundary of a city and that difference is what we're really talking about in terms of spatial gradient of
[08:46] heat and what we can get with those stationary sensors is also nighttime differences where we're actually seeing
[08:52] how the urban environment doesn't cool down a great deal during the night and actually some parts of it don't cool
[08:59] down very much at all and other parts of it cool down a lot and we'll get into
[09:03] that in in just a minute though that difference is really the traditional reference site model as you heard from the last webinar on
[09:11] this series there's also a satellite derived land surface temperature approach where we're essentially talking about the atmospheric brightness and
[09:19] emissivity which is a fancy way of saying the amount of solar radiation that a material can absorb and reflect back
[09:28] and we also have the idea of integrating satellite with ground-based measurements which is what we'll be doing what we'll
[09:34] be talking about today and the aim of this particular approach of integration is to really develop predictive models of air temperatures
[09:44] that's where the field is right now there's a canon of literature really trying to describe how you can one can use a
[09:52] handful of stationary stationary weather station weather instruments to be able to assess how the temperature varies across time and space
[10:02] and we'll get into that in a little more detail detail so to integrate these satellite and ground-based methods
[10:09] the literature seems to suggest four primary ways in which this can be done one can take weather station data so
[10:17] there's a suite of distributed sometimes community science or citizen science distributed campaigns to get weather station or temperature data
[10:27] there's other approaches that have attempted to take various various either state or local city or even national measurements that are a
[10:38] handful of them that might be available in a city setting and try to use those to calibrate and look at
[10:44] satellite-derived data and so the idea here is you take a satellite imagery of land surface temperature and you can use
[10:51] that to essentially predict or calibrate what's happening in the air and so what you're what we're essentially talking about is collecting
[11:01] uh data at from multiple days years and over a large study area and sometimes the challenge there is that we only have
[11:08] very few stationary stationary uh instruments weather instruments in one city so it makes that kind of ex
[11:15] spatially exhaustive approach somewhat challenging challenging the idea here is to predict temperature the maximum temperature the minimum temperature and the mean
[11:24] temperature in using this particular approach of of a ground-based measurement measurement modis which you heard about in the last
[11:33] session is probably the most widely used imagery to obtain land surface temperature and it's really helpful because it has very high
[11:43] temporal resolution uh relatively core scale one kilometer when we're talking about kind of planning or guiding guiding planning decisions on the ground those
[11:54] one kilometer grid cells are often very difficult to know whether a mitigation action has made really much of a
[12:00] difference in a specific location so it might be challenging in terms of that specific application um we you heard about the terra and aqua
[12:09] as well in the last session i don't want to spend too much time on that though i
[12:13] will will get into these other data sets that have thermal bands which you've also heard about in the last session
[12:20] and so with that there are several different approaches in terms of the satellite-derived data sets the ground-based approach
[12:27] there's really no need for land surface temperature temperature those thermal bands that we were just talking about we're
[12:34] developing some techniques that are attempting to use a higher spatial resolution of 10 meter grid cells that's
[12:40] the native resolution for these particular satellite derived images and there's a large number of in-situ data that as i was describing in
[12:49] the previous slide helped to validate and calibrate those satellite-derived measurements measurements in this case we can use land cover data
[12:59] from from that high spatial resolution at 10 meter to be able to describe what's happening in terms of air temperature and i'll get
[13:07] into how we do that in a minute um with ground-based measurements we can also it's just about going out and measuring
[13:14] this so you can get morning time if you have a stationary sensor or if you have a mobile sensor which is the one i'll be
[13:20] talking about today it at greater length you can go out at specific times of the day at six a.m at three pm seven pm and
[13:27] get a full diurnal profile of what the temperature might look like in a particular place as you could imagine
[13:33] when you have multiple time periods of data we can start getting at what are the areas that cool down the most and
[13:40] what are the areas that stay hot continuously and so those become very important touch points for us to know
[13:47] which areas might require intervention in terms of heat mitigation strategies so how do we how do we do this we have
[13:55] what we are referring to as a heat watch engagement model where we um talk to communities and engage uh communities at
[14:03] the local level with often a climate action plan that's underway or an adaptation plan or resiliency plan
[14:10] that's underway and we engage in those conversations to figure out what would be the most effective way for engaging a community
[14:18] to measure temperature across a vast area area we also then develop analytical tools which i'll just touch on briefly
[14:27] for examining scenarios of adaptation action and then finally we are able we provide some support for capacity
[14:33] building of engagement with decision makers and so if we go to the next slide i'll show you how it works
[14:39] um we as we engage for a heat campaign and that's really what we're talking about is a mobile
[14:46] heat campaign where we're actually going out and collecting in situ measurements all in one day or over a span of a week
[14:53] depending on the conditions in the local site but we really engage organizations to uh to identify what might be heat
[15:00] actions that they are looking to take then we engage the communities by providing instruments actually temperature and
[15:08] humidity sensor instruments to be able to mount on bicycles on cars even walking traverses are possible and there's a whole
[15:17] campaign a series of routes that are drawn in a particular area where participants go out and collect these
[15:24] measurements these measurements are done at three times during the day so that we can get that diurnal profile and only
[15:30] for one hour and that hour is really important because it reduces the likelihood of thermal drift the idea
[15:37] that as the as materials heat up and as the sun changes um in the horizon or or
[15:45] in the sky it changes the effect of those sun's rays on the specific uh material that it might be hitting so
[15:52] what we're really trying to do is constrain the time periods for from a 6 a.m to a 7 a.m time period of 3 p.m to a
[16:01] 4 p.m time period and a 7 p.m to an 8pm and that can vary depending on the
[16:05] diurnal profile and the latitude that a particular city is and after we complete that campaign which i'll describe in a
[16:13] little more detail in the next slide we review the results and we identify potential actions so a lot of this is
[16:19] about moving a community to taking actions to reduce those acute temperatures in specific areas the idea here is as we're seeing warmer
[16:30] temperatures and this is an image of the united states taken from noaa we have these specific seven steps that we take
[16:37] uh for understanding and uh advancing a heatwatch campaign we really start with the community about 10 to 12 weeks ahead
[16:45] of time it requires a little bit of planning it's not as if you can go in and grab a satellite image and just
[16:51] start processing it it actually requires a little bit of planning so it requires a local organizer to help in setting
[16:58] goals about 10 to 12 weeks out and then we start establishing what the process might look like with who to engage in
[17:07] collecting the temperatures on these mobile platforms that we support and then we do a lot of preparation about two to six weeks
[17:15] before to make sure everybody's ready that's with a series of training videos and various other materials that will
[17:22] walk each participant through a campaign and then we activate we actually start to get everything in place we use forecasts
[17:31] from from the national weather service or other local weather advisory bodies and are able to then confirm the availability of
[17:42] volunteers really get the equipment ready to go and finally on the day that's been selected usually a hot uh clear day with usually high
[17:52] pressure pressure uh system and a low wind and those conditions really lend themselves to an excellent time to
[18:00] execute the campaign where you have in some cases we have upwards of 80 to 100 volunteers in other cases we have
[18:06] six to ten volunteers depending on the size of the region that we're looking to collect these data in we go out and
[18:13] essentially have these predetermined routes at 6 00 am 3 pm and 7 pm for an hour each to go out and collect
[18:20] uh tens of thousands and ultimately hundreds of thousands of individual temperature and humidity measurements that are made that's the execution
[18:29] those data are then sent to us to be able to basically analyze and it takes about four to six weeks to go through a
[18:36] very thorough data because we're using often volunteers that are in many cases remunerated for their time though they're still
[18:45] relatively relatively nascent community scientists and so making sure the data are clean really consistent with the time with the
[18:53] location location uh with the speed that folks are driving so often we say um you know a set speed in the united states we
[19:03] would say at 10 miles per hour to about 35 miles per hour that range is really ideal um and so we trim the data and
[19:11] make sure we're using the best data for a series of um series of uh um machine learning algorithms that allow
[19:20] us to predict temperatures in areas where communities didn't drive so we're really trying to use the land cover data set which i'll um be
[19:30] talking about a little bit in a little bit more detail later this is the overview overview we use the land cover data to basically
[19:37] predict why the temperature is what it is in specific locations we create these continuous maps and that allows us to
[19:45] start investigating what might be happening in specific areas and finally the community six to ten weeks after we
[19:52] work with them to try to identify what might be mitigation strategies for specific places where there might be for
[19:58] example communities that are vulnerable to heat or infrastructure that might be vulnerable to heat to help identify
[20:04] mitigation options so here's an example of a campaign day from 2020 there are communities that went out with these instruments you can
[20:14] see somebody holding it in their hand you can see others mounted on their cars and the idea is that there's just a
[20:20] small little chamber at the top of this and it mounts right on the window of a passenger side of a
[20:25] car car and then we are able to go out and every one second there's a measurement taken
[20:33] of temperature humidity location and that allows us to very quickly um record that in a data logger and the
[20:41] and that allows us to then um essentially get many often thousands of measurements relatively quick in c2 and that allows us also to
[20:52] get that ambient temperature as opposed to that land surface temperature a couple of the outputs that are generated from this for
[20:59] example here's a miami campaign that we did where we essentially are able to look at a the
[21:05] city of miami and identify what are the areas that are really hot from an air temperature point of view
[21:10] in the morning in the afternoon and in the evening those three periods and you can see in this case it happened on the
[21:16] 27th of june 21 volunteers there were nine routes that they drove and they collected about 60 000 measurements that
[21:24] were used in the modeling system system many cases the heat differential meaning what what at the same time what is the difference
[21:34] from one neighborhood to another what's the maximum we can find in that in this case it was about 10 degrees fahrenheit
[21:40] that we noticed and um um we're still we have an enormous amount of data that we're able to look at with
[21:47] this as well and we all of that is provided back to the community to then further analyze and look at and if we
[21:54] could go to a little web link that i provided and we also provide as part of this a little web link of an
[22:03] interactive arcgis platform that allows us to very quickly for the volunteers and others to see what's happening
[22:12] in a specific location so in this case we look at miami we can see the similar map showing up and through this we can
[22:19] see the routes and there's some icons down at the bottom of the screen where you can kind of look at the legend
[22:27] and you can select on and off you can see what the temperature range is here and you can go
[22:32] to the layer list turn on and off if you just want to see the traverses of where
[22:36] people went you would turn off the afternoon temperature model or if you just wanted to see the
[22:42] temperature model itself and not the traverses so a lot of interactivity here and we found that communities have been really uh thrilled
[22:51] to use these kinds of interactive applications and you can download these data integrate them with so social
[22:58] sociodemographic data with lan land surface temperature data etc etc so there's many ways to actually go about putting this to use
[23:08] and we've seen these starting to show up in a lot of community resiliency plans so if we go back to the campaign
[23:15] or back to the slides yeah and so from here if you go to the next slide um some what ends up in this case boston
[23:24] last year in 2019 where they went out in the july 29th and 30th we were able to
[23:30] see about 102 degrees fahrenheit was the highest and there was a heat differential of about 15 degrees and
[23:37] we can really break this down to you know min max and mean over different time periods and the heat index since we
[23:43] have humidity satellite imagery cannot pick up on humidity so we're also able to measure the relative humidity which
[23:49] then allows for the creation of a heat index in this case bringing the temperature max up to 100 and almost 109
[23:56] degrees fahrenheit in some parts of the city in the middle of the day next slide please so part of this is about
[24:05] um um there we go um part of this is about how do we validate this and so what we've
[24:11] done is a few different approaches we we start by taking um 70 of the data that are collected
[24:18] we try to predict 30 of the data and those generally speaking for these models are about um 98
[24:26] accurate in terms of what we're able to predict from that 70 30 what we call holdout method and there are other ways
[24:33] also that's kind of internally within the data there's other approaches to validating it by looking at the satellite drive and
[24:40] the ground based temperatures and so there's different approaches to use which i'll talk about in a minute as
[24:45] well and you can compare the ground-based stations with mobile temperature very selective in in locations and then finally you can think
[24:53] about conducting repeat measurements of mobile temperatures in one region and comparing across days because we do this
[24:59] all in one day often meteorology may affect what the temperature what the air temperature is on a specific day and so when you
[25:07] conduct multiple campaigns you're actually able to get a much more robust description of what the air temperatures
[25:14] are in a place that you are conducting the campaign we use a we use a technique called
[25:20] random forest which is similar which is a a advanced version so if you start with a linear regression and try to predict
[25:28] temperatures based on land cover characteristics characteristics the linear regression doesn't perform as well as a a regression tree or a cart
[25:38] regression that's a regression tree where you're trying to bin specific land covers based on their predictive ability
[25:44] onto a specific temperature measurement and that allows that allows us a higher level of predictability though we found that
[25:55] using a machine learning algorithm called random forest we've been able to uh get predictions up the best of any of
[26:02] the models that we've tested so far and so what we do is essentially take bands from a sentinel 2 satellite image
[26:11] that's the 10 meter resolution we're getting a little bit more technical here um 10 meter resolution and that allows
[26:18] us to create multiple buffers around each temperature measurement and within those buffers are all the land cover
[26:26] characteristics in the location so we're actually using that satellite derived land cover series of bands that are used
[26:35] in this 13 bands that are used from the sentinel and we're able to take each of those bands essentially
[26:41] suggest a specific type of land cover and what we're able to do is we're able to account for a really diverse set of
[26:47] land covers across all of these little buffers that we do around each temperature measurement and within those
[26:53] buffers are all land cover data sets and that is what is fed into this machine learning model to identify best
[27:01] predictors of temperature across all the different land covers in a select location we often use predictors to
[27:07] develop temperature services and we can see that for example high density development or open space or residential multi-family or
[27:17] single-family residential uh temperatures in different ways and then ultimately what the model is able to do is it takes the
[27:26] uh it takes their it takes all of these assigned probabilities of temperature being ascribed to specific set of land
[27:34] covers and then applies it across the entire study area so what you end up getting then is a spatially exhaustive
[27:41] description of a specific site this has several advantages to using traditional geospatial interpolation such as kriging or
[27:52] inverse distance weighting or or any of those other interpolation techniques because if you have two points one is 90 degrees
[28:00] and one is 100 degrees the point in between doesn't necessarily need to be 95 degrees there might be a large park
[28:07] there or something like that that's actually making it 80 degrees or something even cooler and so what the
[28:12] land cover allows us to do is use an input to improve what accounts for on the ground
[28:19] uh as opposed to a statistical estimation of what the air temperature is so we found many advantages to using this land cover
[28:28] approach combined with the machine learning random forest approach next slide we have a few papers on this particular
[28:36] approach but instead of individual trees that are created through a regression model it actually creates hundreds or
[28:44] many cases thousands of trees that are grown to identify what are the weak learners and the strong learners
[28:51] and then a combination of bagging and random subset of predictors allow us to really accurately predict the air
[28:58] temperatures temperatures and so i want to do a little bit of taking our models and comparing it to
[29:04] satellite derived so the comparing the mobile mobile in c2 observations with the satellite derived observations and i want to just
[29:12] take you through a few um places where there are actually some differences some notable differences um that that are
[29:19] worth discussing briefly and here what we see it's a lot of data here but i just wanted to show this to you as
[29:27] a somewhat technical exercise where we're using fahrenheit measurement and looking at five different cities across the u.s
[29:34] and each of these we take several different characteristics of them and we're using a landsat 8 image here and comparing that to
[29:45] a near surface air temperature or the nsat is a near surface air temperature and we're trying to get close
[29:53] the dates as close as we can and we're looking at essentially the temperature differences between the landsat and the
[30:01] average average average temperature in landsat and then the average temperature in the near surface surface air temperature and so what we're
[30:09] noticing is that the highs and lows as well as the averages do vary between these two data sets our average daily
[30:16] temperature for the near surface tended to be in most cases warmer than what the landsat was describing and that's an
[30:24] interesting outcome in terms of at least recognizing that there's potentially some mixing of the air column occurring
[30:31] and that temperatures are not necessarily with a landsat image you might find that there's a very hot area
[30:38] of a parking lot and then right adjacent to that if there's a park or something it's a very cool area
[30:43] and in the landsat image those would be very stark differences in terms of uh the hot parking lot and the cool uh park
[30:51] though with the near surface air temperature what we see is a mixing of that air column and allows us to
[30:56] actually pick up on maybe something along lines of the average of all of those those temperatures put together
[31:03] so we go to the next slide i have a little bit more detail on this so here are two cities one is a
[31:10] one is washington dc the other is portland and we just compare the land surface temperature with the near
[31:15] surface air temperature here this is portland oregon and washington dc on two different coasts of the united states
[31:21] and we're looking at this in terms of what were the different land covers that may have affected the differences in the
[31:28] temperatures that we're seeing from an air and a satellite-derived approach so the land covers across the bottom here
[31:36] and then the temperatures are along the side we immediately notice that in areas that are built up meaning low density medium
[31:43] density or high density urban development the landsat or in in these cases what we're seeing is that the landsat temperature is
[31:53] consistently predicting higher than the near surface air that the near surface air temperature so the red bar here uh for example in
[32:05] some of these medium density developments for example with a very high bar as it's going up um i'm sorry that's high density
[32:12] development development the highest red bar there that's suggesting essentially about upwards of a seven degree difference in
[32:20] terms of uh temperature upwards of seven plus degree temperature difference in portland between the land surface temperature and the near surface air
[32:29] temperature temperature and whereas in the specific land covers that have um anything related to open space so
[32:37] that's deciduous forest green evergreen forest mixed force shrub herbaceous hay cultivated crops all those it seems that
[32:46] the land uh surface temperature is predict or is is is indicating a much lower uh uh a much lower temperature than what might
[32:57] actually be on the ground air temperature there and so what we're noticing are these patterns that are
[33:02] coming up across at least these two sites and we're starting to dig into this uh in a lot more detail because we
[33:08] have an exhaustive spatially exhausted landsat image and a spatially exhaustive modeled air temperature image and so we
[33:15] can do pixel per pixel differences and that's essentially what these graphs are representing representing we've gone one step further to look at
[33:23] these in terms of the mobile sensors in relation to stationary sensors that are on the ground so in this case we have
[33:31] land surface temperature and mobile sense at mobile sensors and what we want to do next uh is look at stationary
[33:38] sensors and mobile sensors and compare those so if we look at washington dc and we look at all the at least
[33:48] stationary sensors that we can find these would be from the environmental protection agency from a network called
[33:54] purple air the p and then the weather underground the weather underground and the p uh purple air are essentially uh
[34:02] community science projects and so we can't rely on those a great deal we don't know a lot of details though the
[34:07] environmental protection agency or epa sensors sensors unfortunately there are very few of those there's only two in the washington
[34:14] dc area though we use all the others to try to estimate what we're looking at in terms of what our what the mobile
[34:21] sensors were saying versus these stationary sensors both predicting air temperature and we're noticing that essentially the predicted temperature
[34:29] and the observed temperature are um um correlated though um not very not super strong there's some scatter in that and
[34:38] the difference of about eight degrees in this case celsius is what we're seeing from the highs and the lows and again
[34:45] these green triangles and these blue squares are community based campaigns or community community they're often a household that would set
[34:55] up a air temperature monitor and that is linked to a wi-fi so that we can scrape those data and essentially see what
[35:02] we're looking at so this is about as good as we can do with the existing data and if you go to the next slide
[35:10] we've we've looked at a couple of other cities as well looking at boston and the next slide will be sacramento and we're
[35:16] seeing very similar trends so what we're noticing is these mobile platforms are essentially coming in right in between
[35:22] the scatter of all the other sensors that we're noticing usually above the epa sensors and below the purple errors
[35:29] though right between all of the weather underground data sets of air temperature and even within the sacramento so a very different
[35:37] bioclimatic zone this is an arid environment of a very mediterranean climate and we're noticing that this is a little bit
[35:46] farther uh there are a little bit uh bigger discrepancies here where we didn't have any epa sensors that we
[35:53] could uh identify but we did use all of the purple air and all of the weather underground sensors to get a sense for
[35:58] what were the highs and lows and we're noticing that again we're relatively low but it's right in that mix of
[36:05] temperatures and it seems to be um again similarly trending upward as we get um these these sensors as we're seeing that
[36:15] observe versus the predicted so what can we say about all of this uh part of what i'd like to at least convey
[36:21] is that we do have a lot of strengths with satellite derived sensors and we do have a lot of
[36:27] strengths with satellite drive measurements and so uh satellite and and mobile sensors and so with satellite drive we know that
[36:35] we've heard even in the last session that they're freely available there's a lot of temporal availability uh you can get an inter
[36:43] intra urban variation there's extensive literature on this lots of people have been using satellite imagery for a long
[36:49] time and that there's a potential connection to land use there's certain land uses that are consistently hotter
[36:55] and others that are cooler some of the weaknesses that we've identified are that it can exaggerate temperature
[37:00] ranges as we've noticed in fact we're finding in some cases that trees were identified by satellite as
[37:07] being very cool and so a lot of people say throw lots of trees down though what we're noticing is that when
[37:12] you throw put a tree down for mitigation unless that tree is well cared for watered taken care of the hot
[37:18] temperatures that you're putting a tree into really can stress uh add additional biological and physiological stress to the tree and
[37:26] that tree can often have um it can often die as a result and so it can these
[37:33] temperatures and the actions that are taken it's not to say not to apply trees it's to be very thoughtful about how to
[37:40] actually include these mitigation options so it can exaggerate temperatures temperatures it's a coarse pixel size in terms of 30 90 or 1 kilometer 30
[37:50] meter is uh pan sharpened or resampled to a smaller resolution than its native resolution resolution and um we also find that with satellites
[38:01] we're getting at rooftops and roads as opposed to the ambient experience so if you're interested in energy savings and
[38:07] things like that a rooftop being cool might be helpful though it might not be helpful for everyday ambient experience
[38:14] that somebody walking around a particular part of the neighborhood might be experiencing and as i mentioned earlier this la these last couple of
[38:22] points the discrete differences between the land covers is very apparent in satellite imagery we can see a very
[38:28] clear line between a parking lot and a park when in reality temperature or um the readings may be or the experience
[38:36] may be a little more mixed uh literally and figuratively um and finally the translation to policy is still an open question uh
[38:46] satellite-derived satellite-derived urban heat maps have been around for a really long time and yet we're not really seeing a great deal of their
[38:53] application into policies yet it's starting still relatively uh young uh arguably arguably and and similarly next slide
[39:03] so if i uh spend a little time on ground based i can identify several strengths and weaknesses here as well um part of
[39:10] this is that it requires a little bit of planning it's not just downloading a data set running a script and being able
[39:16] to look at these distributions of temperature it's actually a very intentional deliberate process and we often suggest planning ahead so usually around
[39:26] if you're in the northern hemisphere usually around march or even january you start preparing and then by
[39:33] march to march in the equatorial regions though getting higher latitudes we would be really talking about july august as
[39:41] being the ideal times for this similar in the southern hemisphere but really getting communities uh engaging communities from their place
[39:50] they have a lot of lived experience of what it might feel like to be in a location
[39:54] location and and developing that civic legitimacy is something we've found that these campaigns can really help to promote
[40:01] after all a lot of decisions going into mitigation are political in nature and when people are more aware of these
[40:08] differences and they participate in these campaigns they are able to actually legitimize the data understand where it's coming from and we've noticed
[40:17] it's been put to action relatively swiftly swiftly we've also got higher resolution in the case of using sentinel data we're using
[40:26] 10 meter resolution land cover though we've also used lidar data that some cities have access to and create one
[40:32] meter resolution urban heat maps which can be really helpful when you're thinking about specific interventions and their effectiveness
[40:40] by by engaging communities over three times in the day we can get at this diurnal profile in fact if you subtract
[40:46] the evening temperature from the morning temperature you can even see which areas cool off faster and and slower in a
[40:55] specific specific region region and finally as i was mentioning the policy applications are becoming increasingly evident in this in these
[41:03] mobile campaigns several weaknesses as well um it does require time in a strategy it's not free um and that seasonal differences are not
[41:12] yet available some people are indicating that you know winter time is an important period to also see when what
[41:20] the temperatures are like and that offers us a means to understand seasonal differences which we don't currently do
[41:25] we usually only do this in the hot summer period of course when we're taking any kind of
[41:30] satellite data whether it's land cover or landsat imagery and thermal imagery clouds and rain can create problems with what you see on the ground
[41:41] and what you sense with a mobile platform as well and then finally these are all done city by city and there's no
[41:47] generalizable models that are yet developed though the more campaigns that are done the more likely that the data
[41:54] will be able to feed into a overall campaign and i just close with my last slide with
[42:02] um um a description about the uh example of how one could use these uh air temperature maps and what we um some of
[42:13] us worked with the district of columbia or washington dc many maps of which you've seen already and we wanted to know in one area where
[42:21] it was a public housing complex where it was was subsidized housing for low-income communities communities what were strategies that could be used
[42:29] to reduce the the temperature in those areas and so what we use is a complex fluid dynamics model and we feed
[42:38] in our air temperature and we're able to look at this diurnal profile and we're essentially able to see um with this uh
[42:45] fluid dynamics cfd model called envymet what are the ways in which different treatments on that particular site with
[42:53] green roofs or or or trees or changing the albedo the reflectivity of surfaces surfaces what would that do in terms of the
[43:04] temperature diurnal profile and in some cases cases we're in this particular place called green leaf which was a
[43:12] name of this particular site we're able to actually model what might happen with these interventions and that allows us
[43:18] to then get a much more robust idea of what is effective and what's not effective before spending the
[43:26] money on putting in specific interventions and so the the kind of satellite derived approach the mobile campaign and then this particular
[43:36] modeling approach all fit really well together to give communities a better sense for what might be possible in
[43:43] specific locations for mitigating urban heat heat so with that i'll go ahead and close it out and open it up for any questions and
[43:50] discussion that we might have time for thank you vivek for such a great presentation presentation we will not transition to the question
[44:00] and answer part of today's training as a reminder please enter your questions into the q a box we will answer them in
[44:08] the order they were received we will post the question and answer doc to the training webpage following the
[44:14] conclusion of the webinar series okay wonderful it looks like we've gotten a number of questions that have
[44:28] been coming in so we will again address them them in order that they were received uh the first question uh from one of our
[44:36] participants is can you comment on the original concept of urban areas as islands as opposed to a continuum of built up
[44:46] materials from ex-urban to urban areas so this is a good point uh when we're speaking of urban areas and as islands
[44:57] this is usually due to the concentration of built up area within the uh the downtown core in reality this is more of
[45:05] a continuum of decreasing built-up areas as you go from that urban core to the ex-urban ex-urban environments and the suburbs
[45:14] so due to the dependency of ex-urban areas on the former the former being the downtown core they have a higher dispersed residential
[45:23] developments developments and there it is possible that there could be heat islands within ex-urban areas but from a health
[45:31] standpoint and from also an observed uh you know land surface temperature what we can observe both in situ and also uh remotely uh
[45:39] urban areas have a higher concentration of built up areas within and among the downtown core and this corresponds to higher uh
[45:48] diurnal land surface temperatures so um it is it is a good point and and we i do thank the uh whoever the participant
[45:55] was that that sent that question this is a very good point um i think we will hand this off to uh
[46:03] vic for maybe answering the next number of questions so vivek do you want to take question number two
[46:11] sure i'd be happy to can you hear me okay okay yes we can sure can yeah so the second question has to do
[46:18] with the applicability of these uhi results specifically can these uh can this be linked to co2 emissions
[46:26] since emissions also lead to warming um in other words can estimates of uhi be correlated with co2 emissions so my my
[46:35] quick answer to this is that these at the global level we're seeing the relationship uh of greenhouse gases and
[46:42] co2 being one of them in in driving uh increases in in temperature though at the intra-urban level what we have are
[46:50] very different mechanisms at work in terms of why co2 is produced co2 is often produced through through combustion or some form of mechanical
[47:01] device that would actually require energy and with that energy is often coming from places sometimes really far
[47:07] away sometimes close by and that energy production is some of the largest contributors of co2 and while there may be air conditioning or
[47:15] some other mechanical device working at the local kind of street block or even household level attributing urban heat
[47:26] to that use of energy is not something that is commonly done nor is it seem reasonable to actually make those
[47:35] inferences because they are very different reasons why um those though the heat is present partly because of the built environment
[47:44] and then very different reasons as to whether someone is running a mechanical device to generate to drive energy
[47:51] demand so they're very different in that sense um i'd love to see a study that would start
[47:56] to look at that a little more closely though so far i i don't know of any um next question is how do these
[48:03] community volunteers get motivated to participate how do organizers facilita facilitators mobilize that has a lot to do with
[48:11] the local partnerships that are developed developed and the partnerships are in part between the local organizer and often
[48:20] community-based organism organizations that are able to galvanize and bring together a group of people to participate participate it's um off it's done in a very bottom
[48:30] up kind of perspective where um the community organizers find resources often to renumerate and provide some stipend for participation we found that
[48:42] these campaigns require about five to six hours of volunteer time and depending on where you live in the
[48:48] world in the u.s we often enumerate um at a particular hourly rate and that can be provided either 20 or 25 dollars an
[48:58] hour that includes gas that somebody may be using for the petrol uh to move around the move around their particular
[49:05] polygon the training that's involved in preparing people and then the debriefing of the results so together it's about
[49:11] five five five-ish hours and um we roughly renumerate with that dollar amount we can we can just do the math and come up
[49:20] with a total allotment that's given to the volunteers to participate we found that not to be a very big problem in
[49:26] almost any one of these campaigns we've been able to get volunteers in some cases they're actually in most cases
[49:31] they're probably far more volunteers than we have space for and so that has rarely been an issue for us
[49:39] [Music] [Music] in low resource environment what is the best alternative to measure temperatures is is there an inexpensive
[49:48] instrument method yeah this is an interesting one i've spent some time thinking about it often what we've seen in the current
[49:58] state of urban heat is that satellite imagery are often the quickest least expensive ways to characterize differences in
[50:08] uh temperature across a urban region and the satellites as you heard from the previous uh session the part one that
[50:18] is um it's you can get it um you know frequently it's free and it and even though there's a difference that we've
[50:25] been able to know between satellite and ground-based measurements that still it still is something to be able to begin a
[50:32] conversation about those differences and so if the goal is to really move forward in advancing and socializing this
[50:39] concept of urban heat locally then satellite images offer a window into that right away with this approach it is uh um
[50:50] the resources are really on being able to conduct these campaigns doing the analytics um and so the lower the alternative to
[50:58] measuring temperatures would of course probably be satellite based and in inexpensive instruments um are are we've seen some people
[51:09] purchase very uh small thermometers that they provide to community members and the community members are are essentially um
[51:17] kind of local they they install them locally and so you can see differences in temperature from one neighborhood to another but
[51:27] again this is very coarse and sometimes may not be as accurate because you're you're not having as many measurements
[51:35] across an urban region and the advantage to doing a mobile uh campaign is that you get hundreds of
[51:41] thousands of measurements over a very short period of time so so that's that's what i have for question
[51:48] four um question five just moving on um for the random forest regression how do you avoid overfitting this can be tricky
[51:59] since there's high spatial autocorrelation autocorrelation yeah so part of what we do is um for for each of these areas we actually look
[52:10] at the um specific measurement that's taken and we draw multiple buffer rings around each of these measurements
[52:18] and each of these buffer rings are developed in a model independently there's an assumption that um that each
[52:25] of these bufferings are independent uh models though we start at you know 25 meter 50 meter uh 100 meter 150 meter
[52:35] 200 meter and these are buffer rings around an individual measurement and so what we are finding is that these
[52:41] specific measurements allow or these specific buffer rings allow us to then develop independent models and uh to be able to predict for that
[52:52] specific measurement and since we're doing that um admittedly random forest is a bit of a black box
[52:59] it's not like it generates a coefficient for each of these buffers or each of the bands we have rmse values
[53:07] that we can use to look at the importance of specific bands bands which are related to specific land
[53:14] covers to the measurement of temperature humidity though it is running thousands if not tens of thousands of
[53:23] computations computations in this algorithm to be able to come up with a predictive set of vari bands that would
[53:32] help us discern how to apply this model to the rest of the urban region so so the spatial auto correlation is
[53:40] something that we've looked at as well the models seem to be holding up even with the results we're looking at
[53:46] them this models seem to be holding up reasonably well with um spatial autocorrelation at least tests with
[53:53] moran's eye getty zord and others that we've used what steps are being taken to have open data satellites with higher question six
[54:04] what spatial what steps are being taken to have open data satellites with higher spatial resolution 10 meter for
[54:11] temperature monitoring and prediction um um that looks like we've already got an answer to that i'll just quickly say
[54:18] that all of the data from nasa's fleet of satellites are freely available to the public there is always compromise
[54:25] between spatial temporal and spectral spectral resolution nasa is scheduled to launch launch landsat's landsat's nine towards the end of the year which
[54:34] will improve the temporal resolution of land surface temperature derived products but not improve the spatial resolution resolution the instruments on landsat 9 are similar
[54:43] to those currently operating on landsat 8 okay it's good to know can you report an r squared or
[54:50] significance for the observed observers versus predicted temperature plots um question seven the um the way that random force works we don't
[55:01] get a uh a traditional like ordinary least squared r squared in the model what we do is we use as we
[55:12] as i mentioned in the presentation a 70 30 holdout method is one validation technique and the other is to look at
[55:21] points around or measurements stationary measurements around some of the either comparing the models as i was saying in the presentation or
[55:31] how well the stationary measurements comparing to the mobile measurements and so so um um we don't get with this model and r
[55:41] squared squared and significance value per se it does allow us to compare our observed temperatures with what we're
[55:50] predicting so we take 70 percent of the observed temperatures and try to predict 30 which allows us to be a bit more um
[55:59] internally consistent then to be externally validated we look at local temperature sensors that are stationary so it's not um it's not quite as easy as
[56:09] getting r squares like we would with cartographic regression models or ordinarily squared in that case um have you done any correlations with
[56:18] uhi and ground level ozone no we haven't looked at that yet um there is a lot of photochemistry that's
[56:25] happening in the atmosphere we work with some atmospheric chemists and i understand that there is a lot of
[56:34] complex interactions happening across the column the stratosphere column and that is something that we haven't done in our own work um
[56:45] my hunch is that this is probably happening on a at an altitude higher than where we are
[56:51] measuring but that's um that's debatable i i think that's fairly debatable um nevertheless i think at the two meters
[56:59] above the ground level where we're measuring air temperatures um um there might be a level of ground level
[57:06] ozone that uh we could pick up on but again that's about instrumentation we don't have currently instruments we're
[57:12] building some air quality instruments to couple with the um to air temperature instruments uh this has been about a five years worth of
[57:21] work we've been trying to get a mobile air quality instrument that is very reliable works in c2 as well as in the
[57:28] lab and is very um uh very high in its in its accuracy and we've we've i think we've narrowed it
[57:35] down to a couple of them that we're doing quite a bit of testing on right now i'm not sure what question nine is in
[57:44] terms of which dynamic model did you use i think the dynamic model may be the model random force model
[57:53] is the response to that um and then is the application used to evaluate the association of green
[58:04] interventions and and heat available um yes so part of what we're doing with this is getting at
[58:12] um um getting at the role that different land covers play in in determining heat so in terms of green
[58:20] interventions it's very localized meaning it's on a street level it's on a specific specific city block or it's in a plaza or
[58:29] something like that and so where we're going this 2021 is we're actually having people walk with temperature sensors
[58:39] attached to their bodies and they're going to be walking in areas where a municipality is expecting to do
[58:47] and implement green measurements oh i'm sorry green interventions such as street trees such as some kind of a
[58:57] shading device or even albedo changing systems where you're painting colors lighter colors and so we're actually go
[59:05] in order to do that our models are built are fitted at the regional scale and so getting it interventions at the city
[59:13] block scale or or street level won't be won't really show up in a model that has these many
[59:21] tens of thousands hundreds of thousands of measurements and so what we're trying to do is allow folks to be walking and biking in
[59:29] areas where there are interventions so we can concentrate the measurement systems in an area where green interventions are are are applied
[59:38] and then looking at those we have done some complex fluid dynamics modeling and found that there are different forms
[59:45] of green interventions that could help ameliorate air temperatures so that's something we've done on the modeling side this year we're really doing a
[59:52] great deal of work on the measurement at the very local side and we're able to use high resolution often
[59:59] lidar derived data to look at the effects of those interventions moving down to question 11 what are the advantages and
[1:00:12] disadvantages of using air temperature measurements to estimate land surface temperature oh interesting that's what we're trying to do now
[1:00:20] um um we we have uh developed where we have now conducted i about 32 of these heat campaigns across north america
[1:00:32] and parts of the middle east this allows us to develop some pretty robust models for for assessing the relationship between
[1:00:45] land cover and air temperature and now that we have land surface temperature we're developing essentially a set of algorithms that
[1:00:54] help help link land surface temperature to air temperature the advantage is simply that land temp land surface temperature is
[1:01:05] free but doing this is a bit more costly and both time and money and so what we
[1:01:11] want to do is use a freely available product like land surface temperature from landsat to be able to predict air temperature
[1:01:20] and since we have exhaustive spatially exhaustive exhaustive data sets from the air temperatures we can use a series of these machine learning
[1:01:32] algorithms to assess in what conditions are the lin are the air temperatures best uh what's i'm sorry what what um
[1:01:44] conditions are the land surface temperatures best predicting air temperatures temperatures and so the advantage is that it's it's
[1:01:51] really a free and it'll allow it to be applied more generally to many different areas a disadvantage is of course that
[1:01:59] um um we haven't covered all of the areas and all bioclimatic zones because a high a high altitude with very different
[1:02:09] built environment very different structures very different road systems etc was going to be very different than a valley with very lush
[1:02:19] greenery etc and so getting at all these unique micro climates across the world if not just north america where
[1:02:27] we've done most of these campaigns is a very challenging proposition and so we're still about a couple of years out
[1:02:33] from doing that and that may be a disadvantage disadvantage um question 12 i would like to know if
[1:02:40] there there were predictor variables other than sentinel bands used in the random force model yeah we do
[1:02:48] we do not at this point use other predictor variables we know that these models work best on clear days with high
[1:02:57] with high pressure system so usually a high pressure system does clear create a clear day for a region
[1:03:04] and with limited wind so we know that those are important factors and the fourth factor is a tricky one because
[1:03:12] it's about elevation elevation we know that in areas that have a lot of topographical elevation that that could
[1:03:19] be a factor and yet um getting at high resolution elevation data is not necessarily the easiest to do
[1:03:28] that's why we're kind of limited by these predictor variables because it's something we can apply to any region
[1:03:33] across the world um um what kind of data sets are required for the env models um essentially for the nvme models we need
[1:03:45] uh a building we need we need information on the built environment so that's building um um that's essentially building footprint so
[1:03:55] how much area does the building take how tall is the building and what materials are the building
[1:04:03] uh buildings made of there's some default there's some default uh materials that are part of the nvmet
[1:04:11] model though we found that they're not necessarily accurate in terms of what a specific building may be designed
[1:04:19] with also the cities that are default a default available in envymet don't cover all the cities in the world
[1:04:28] and therefore you're you're approximating the type of bioclimatic region that the model is running in um so for example we don't have in in
[1:04:39] the city of portland oregon where i'm currently currently living we don't have envyment doesn't have a portland oregon default um
[1:04:48] set of materials so we had to go in and uh the closest was los angeles which as
[1:04:53] some of you may know is in southern california and has very different building materials um and so we had to
[1:05:00] actually bring in the building materials for that were that the buildings in portland were designed under and with washington dc it's yet
[1:05:09] another set of building materials and so we have to work with local engineers usually to identify what the
[1:05:16] building materials are and then from a spatial point of view we can use a variety of things whether it
[1:05:22] be google maps or other things to be able to um um design that specific city block and it's
[1:05:29] not envymed is not something you run across an entire city it's usually much more constrained to an individual city
[1:05:35] block block um um thank you for a great presentation can you elaborate on what you think may be
[1:05:43] causing the differences in satellite versus ground data is it that ground measurements are hyper local yeah this
[1:05:49] is a very interesting question we spend a lot of time on this question right now because we are trying to
[1:05:54] develop a generalizable model for as i was saying predicting air temperature using using land surface temperature part of the reason we we've looked at
[1:06:03] one major contributor and that is what is happening on the ground and one of the things that satellite imagery may do
[1:06:11] and we're we're still trying to confirm this but we're noticing that in built up areas with limited
[1:06:17] green spaces or open spaces or anything that has water associated to it the satellite images tend to be a lot
[1:06:25] warmer warmer uh meaning the surface temperatures tend to be predicted tend to be i described as a lot warmer than our air
[1:06:32] temperatures temperatures and that's interesting to us uh for one reason reason in part because the the things that do
[1:06:39] have water in them tend to be predicted as much cooler than what we're observing in air temperatures and that is
[1:06:47] something that from a biophysics point of view is interesting and from a thermodynamics point of view is very
[1:06:54] interesting because there may be some level of evapotranspiration that's happening with greenery and allowing um water to be leaving the plant
[1:07:04] material and therefore when the satellite is picking up on it it's hard to tell exactly what may be
[1:07:11] going on in that in that kind of tropospheric uh column that we're looking at and getting down and whether
[1:07:20] whether water is really driving some of that that's the big hypothesis that we're looking at right now
[1:07:26] in terms of the difference between the land surface temperature and the um air temperature measurements being hyper local may be part of it because um
[1:07:35] you know these are these are 10 meter versus uh 30 or or larger meter grid cells and
[1:07:42] so there may be some differences but we re-sample the 10 meter to 30 meter and even one kilometer we've resampled it to
[1:07:50] to see that similar patterns of difference between land surface temperature and air temperature still do exist and so i don't know if
[1:07:58] it's necessarily the hyper local issue i think it may have something to do with what's hap what's
[1:08:04] actually on the landscape and the extent to which water may be affecting it um question 15 the presentation
[1:08:12] mentioned modeling air temperature from land temperature is there any benefit modeling the inverse relationship yeah um yeah so taking air temperature and
[1:08:25] trying to uh calculate land surface temperature um um we have not done that i'm trying to think of if there's an the question is
[1:08:34] is there any benefit um my sense is that land surface temperature can be derived relatively easily um
[1:08:45] but but there is a i mean there are ways of being able to get at land surface temperature with air
[1:08:51] temperature maybe getting it at the 10 meter resolution or something like that that could be a way to go
[1:08:56] um one of the other issues that we're struggling with right now admittedly is the amount of mixing in
[1:09:05] the air column because as soon as land surface temperature gets warmed up that two meters of air between the land
[1:09:11] surface temperature and where we're measuring measuring the air temperature there might be a great deal of mixing going on because of
[1:09:18] the diversity of land covers in that patch of space meaning if it could be a lot of pavement right next to some
[1:09:29] green space the green space may have water in it which may be really cooling the green space the pavement may be very
[1:09:35] hot and that difference in temperature as we know might be creating some some form of a micro
[1:09:42] gust of some kind or or mixing that could happen there's probably better technical ways of describing that that
[1:09:48] are beyond me but nevertheless it it it um um it's it would be a little bit tricky to
[1:09:54] do that i don't know what the benefit is to do the inverse relationship at least off the top of my head i'll think on that a
[1:10:01] bit and come back to it what are the mitigation options for overcoming slow cooling down areas of a city yeah we're
[1:10:09] getting into the management side of things with this question um the mitigation options often have to do with
[1:10:15] um um so in other words it's saying it's not cooling down very fast so that usually has to do with the materials that are on
[1:10:23] the land that have held on to that solar radiation that shortwave radiation and have are not letting it go as quickly as
[1:10:31] other materials might and so one of the simplest things you can do or two of the simplest things you can do is
[1:10:38] um just keep the radiation from reaching the materials so blocking the radiation from hitting that material is
[1:10:48] usually the easiest and most effective way way to to reduce reduce thermal gain of any material so that's
[1:10:56] either through i've seen people putting you know changing the color of a particular material i've seen people
[1:11:02] putting shading structures in front of a material material from an architectural design point of view i've seen others putting green
[1:11:09] walls meaning like ivy and growing iv along uh the vertical aspects of it or even greenery along the
[1:11:17] the uh the flat surface areas as well so just keep preventing that solar radiation from reaching the material is
[1:11:26] usually or reducing the amount of it is probably one of the easiest ways to be able to
[1:11:33] mitigate that slow cooling in a particular particular city block or even building um can you summarize the generic pattern
[1:11:44] you find between lens surface temperature and air temperature using nc2 level sensors um yeah so that's what
[1:11:50] i was saying earlier is the pattern really has a lot to do with kind of what's on the landscape
[1:11:56] we found that you know the the land surface temperatures also don't pick up humidity and one of the
[1:12:03] things we're doing is measuring humidity in these mobile campaigns and when you combine relative humidity with um air
[1:12:11] temperature you can get a heat index which then really throws off some of the land surface temperature measurements so
[1:12:18] if we're only looking at air temperature and not bringing in humidity at all then the differences are largely based
[1:12:26] on what's how much our speculation at this point is um um the generic pattern would be that the
[1:12:34] amount of built up versus uh green space or water or water contained feature on the landscape so that can be
[1:12:43] open space it could be hay pasture land it could be agriculture it could be trees it could be shrubs
[1:12:50] those things really seem to be affecting um what's going on one subtle though important distinction that we notice is
[1:12:58] that when we're noticing watered grass from land surface temperature point of view comes out very different than very dry grass
[1:13:08] dry grass or dry open space like not watered open space tends to respond very similarly to very built out
[1:13:17] open space in terms of land surface temperature temperature and and in terms of air temperature the the open spaces are really interesting
[1:13:28] depending on how they're managed and sometimes in urban environment some people may be managing green spaces others with water other people may be
[1:13:36] just leaving it alone so those are some generic patterns that we've picked up yeah so is there a database to access
[1:13:45] nz2 yes there is we push all of our data sets up publicly available onto a website called open science framework
[1:13:57] osf osf and that's open science framework osf.org i believe um and that is a place where we take all
[1:14:05] of our tested cleaned data at their that are used to predict these models and push them up onto the open science
[1:14:13] framework to be able to um um access those data and again we have every uh i feel like every year we're adding more
[1:14:22] this last year we added 15 new areas to that as we did 15 and 2021 i mean 2020 and we likely will be doing
[1:14:32] similar or maybe more in 2021 depending on how much interest there is in this work uh going forward but that's
[1:14:39] where we're post pushing it all up and so they're available people are using them for various different applications
[1:14:45] uh i've been working with several different universities in around the united states to do several masters and doctoral theses
[1:14:54] are coming out of some of these data sets because we want people to conduct further research on them
[1:15:01] and and therefore and hopefully improve them over time which urban temperature remediation treatments have been best for cost
[1:15:08] cost-benefit ratios ooh that's one i uh that's a hard one i don't know if i have a good answer for that
[1:15:16] um um cost benefit ratios i mean that one of the least expensive i will go to options has been
[1:15:24] trying to find trying to find ways to uh increase greenery greenery that's i say that with a
[1:15:34] with a little bit of caution in part because depending on the space there's some places that are highly built out
[1:15:40] and tearing up asphalt or concrete to put greening in is incredibly expensive though if there's available space for
[1:15:48] shading that's usually one of the easiest easiest options and over time a street tree for example will appreciate in its overall
[1:15:57] benefit to the community because it's providing more shade over time grass tends to be a little bit tricky
[1:16:03] because the amount of energy or resources required to maintain it including watering it uh cutting it and
[1:16:11] you know of course if others some people want to use fertilizers for it i mean these are things that add up costs as
[1:16:17] well well people have looked to cool surfaces there's a a few groups that i'm looking to for
[1:16:24] this is one is the global cool global cool cities um what's it called global kurt shikman global cool cities
[1:16:34] initiative initiative um or cool cities coalition i forget what that last word is but global cool cities if you were to look that up on an
[1:16:41] internet browser you would find it they're doing a bunch of really interesting studies on the cost benefit
[1:16:46] aspects and so is another group called smart surfaces i'm not i'm not advocating for each of the either of those i'm actually just
[1:16:54] suggesting them as places to look for at least starting to get at a comprehensive comprehensive set of data that may be
[1:17:02] available for you to review um um we can calculate urban heat islands from different indices such as surface urban
[1:17:09] heat island and urban heat island my question is are those indexes comparable yeah so that's similar to the question like how
[1:17:18] do you know i mean in essence um by calculating urban heat islands in all these different ways how do we actually
[1:17:24] know that they're um useful useful um um and are they comparable so i that's a really hard question in part because
[1:17:35] um it varies a lot um by region we've found we've done campaigns in albuquerque and the results are very
[1:17:43] different than the campaigns done in new york are very different than la and so these indexes are
[1:17:49] really vary based on um um what the conditions are altitude topography topography wind wind [Music] [Music] aspect
[1:18:01] aspect with topography is really interesting um and then of course in relation to um um the actual land cover itself what's
[1:18:10] there and albuquerque is very different uh uh a shrub step landscape with very small cactus cactuses and very dry arid land
[1:18:21] versus you know an area that could be in vermont or or british columbia or even southern mexico i mean very
[1:18:29] different different um land covers and so we're really attempting to understand those differences in indices and right now that's a big area of
[1:18:38] research is how do these uh indices vary do you have any predictive models related to urban healings or related to
[1:18:47] yeah so that's um do you have any predictive models related to urban heat islands or related to land use land
[1:18:53] cover cover um um yeah so that's that's essentially it we're we're trying this whole random forest model is a
[1:19:01] predictive model uh that attempts to take land use land cover and apply it in an algorithm to
[1:19:10] predict uhi um so that air temperature essentially essentially um so yeah that's that's a pretty easy question based on what we're already
[1:19:19] doing doing the uhi research community has developed its own characterization scheme called land cover classification zone yeah local climate zones yep
[1:19:29] um um i think it's lcz is local climate zone not land cover zone clash recreation zone i'm curious if you have
[1:19:37] investigated that characterization scheme in addition to an lcd yeah so we have a project right now uh
[1:19:44] linking our air temperature with l lcz zeds and that allows us to um understand what's going on at that
[1:19:54] local level again colloquial climate zones are still relatively coarse in their description um we are trying to get down to the
[1:20:03] hyper local meaning the household or street level because part of the concern is that people standing at bus stops
[1:20:10] people walking their children to school on certain streets or walking home from school school will be very hot and there might be
[1:20:16] alternative routes people can take or or interventions that can be made and so our goal has really been about trying to
[1:20:26] reduce the public health impacts and so local climate zones are helpful from an academic research point of view
[1:20:34] i haven't found them to be particularly helpful for the kind of public health and very localized hyperlocal applications that
[1:20:42] we're striving to to address and so yeah we are looking at that and maybe you can make a hyper hlcz
[1:20:51] hyperlocal climate zone with some of these data but that's still work in progress um um i realize i'm not gonna be able to get
[1:21:01] through all of these questions um in the time i have available here i have to leave in about nine minutes
[1:21:08] um to take my son to uh to to his uh uh his school uh pod his other household will do stool today um
[1:21:19] is there a benefit let me just see how many more i can get through is there um
[1:21:24] um great great um is there a benefit in including air quality measurements and air temperature yes so we are right now looking at air
[1:21:33] quality measurements um in part because again if this is a public health application we want to know areas that
[1:21:39] are both really polluted and really hot because because a lot of people with pre-existing health conditions or older adults if they're
[1:21:46] inhaling really high levels of pollutant during a hot period that further compromises your respiratory system and can be very fatal for some communities
[1:21:55] and so what we want to do is find ways to couple the two and we have a few
[1:22:00] projects that have used stationary sources of air quality data and combine that with mobile sources of air temperature data though we're really
[1:22:11] wanting to couple the two in terms of the same methodology that's used for collecting both sets of data
[1:22:19] um so that's something where we'll be doing in 2021 in fact we have a we're working with a company now to
[1:22:26] develop sensors that allow us to to um combine the two how do vehicular emissions affect urban heat island that's yeah the
[1:22:35] anthropogenic side of this is interesting there's building hvac systems that will push hot air into a street canyon
[1:22:43] or something like that or onto a street and also vehicle emissions they do affect affect they do affect very very local level of
[1:22:53] urban heat however what we're trying to get at and i'm working with lawrence berkeley lab project that we're looking to start on
[1:23:02] on on combining anthony they just published a paper on looking at anthropogenic modeling anthropogenic heat in urban areas and we're looking to see to
[1:23:13] what extent is the anthropogenic like vehicular traffic or vehicular emissions combined with even the built environment like
[1:23:22] buildings contributing to some of these results my hunch is that it's probably less than 10 percent maybe even less than or i
[1:23:31] mean maybe less than 20 percent less than and maybe even less than 20 percent overall on the model um
[1:23:38] in part because uh the amount of um emissions coming out as well as the even in a highly crowded area well while we
[1:23:47] would be picking up on that there's also a air column that's mixing a lot of this up relatively quickly not to mention the
[1:23:55] fact that most of the anthropogenic commissions are coming out from a uh kind of a wind-based method meaning
[1:24:00] they're being pushed out of a building pushed out of a car so there's further mixing that happens and
[1:24:05] we do know there's an effect but we're still trying to tease out how much that effect is overall on the regional scale
[1:24:14] um um i have a question regarding instruments uh they used in heat watch campaign how did they achieve one second data and how
[1:24:22] is it connected to response time of the instrument so we've spent a fair bit of time on this question because the first
[1:24:27] eight to eight to ten years of our research was looking at instrumentation and trying to find a high response time
[1:24:33] as well as high response time in terms of not only data logger and also gps so keep in mind that a person is driving
[1:24:41] at a very steady speed we're asking them to drive not faster at least in the us context
[1:24:47] not faster than 35 miles per hour and not slower than about 10 miles an hour and any of the stop any time their
[1:24:56] commute drivers are stopping we remove all of those data and we essentially trim those data as one part of the data quality check
[1:25:04] but the uh instruments are essentially um sending signals down to a data logger which then is stored on an sd card right
[1:25:12] away we're not sending it at least at this point via a cell tower or anything like that
[1:25:19] but we have essentially a thermocouple unit that allows us to collect those data sets locally on each of the instruments
[1:25:29] and the instruments are designed to collect at one second the firmware that's set up allows the instrument to
[1:25:35] pick up on that interval as well as to ensure response time is within the grid cell cell that they're driving through
[1:25:46] how did you use random force to interpolate the temperature measurements this is an important point we don't
[1:25:50] interpolate that's a technical term used in various data science fields interpolation uh in in the classic sense at least doesn't take
[1:26:01] into account um all the land cover characteristics that we are also bringing into the random force model we're actually creating an
[1:26:11] entirely entirely locally based model not only using the air temperature measurements because if you had an air temperature measurement
[1:26:19] of 30 degrees celsius in one area and 40 degrees in another area an interpolation may say that the area in between is 35
[1:26:27] degrees degrees essentially averaging the two by bringing in our random forest land cover data we're actually looking at what is underneath
[1:26:37] that that 40 celsius 30 celsius and predicted 35 celsius what's underneath that if it's a park it may be very different it may
[1:26:45] actually be 27 degrees in between the 30 and the 40 celsius and so we're not interpolating interpolating the air temperature and i think that's a
[1:26:53] common misnomer that happens when we're going out and collecting these temperatures temperatures the land cover really is driving much of
[1:27:00] what we're trying to predict on the ground yeah so 27 is similar to one that i answered before a local climate zone
[1:27:09] don't want to get into that too much what is the difference between local scale urban heat and urban heat island i
[1:27:16] don't quite understand that question um local scale urban heat um i mean urban heat island you could
[1:27:22] describe in the classic sense as a difference between the city and the surrounding area that was question
[1:27:27] number one that was posed um what we're saying is that there's an intra-urban variation of temperatures meaning that
[1:27:35] one block of a city may be different than another block of the city based on what was happening
[1:27:42] not only in the development of those places but also what is how those places are being managed right now
[1:27:48] and so that that um local scale urban heat island is really about getting in my description at least the intra-urban variation of
[1:27:57] temperatures as opposed to the city versus the surrounding area because ultimately we want to design our cities
[1:28:03] for people and for uh if we're designing our cities for people we want to make sure that the people are healthy and
[1:28:08] well and not overheating and so that intra urban is really important here can we measure heat index near wetland
[1:28:19] areas what do we call that index yeah wetland areas are tricky water by and large is one of the trickiest things
[1:28:25] water is so beautiful and so complicated in so many ways it is um when you're actually um above the water surface the water and
[1:28:34] even wetlands you're reflecting a lot of the sun's radiation away right so you're creating that reflection process which
[1:28:42] then the air temperature around and a wet area may be higher than the actual water itself and so what you're picking
[1:28:50] up on then is an air temperature of something that's being reflected and so arguably it could be even hotter right
[1:28:56] above the water surface than necessarily a grassy surface adjacent to it wetland where you have a lot of marshy areas
[1:29:03] maybe maybe that complicates things because you're getting a lot of disturbance in the water surface itself and the and the
[1:29:09] reflectivity of the water may vary depending on how much shade it has and how much just how much vegetation or
[1:29:16] other materials may be on the water's surface so wetland areas are pretty complicated i think from a
[1:29:22] thermodynamic dynamics point of view as well as kind of a measurement point of view and i have no idea what we would
[1:29:28] call that index um um i could come up with some creative names i guess but um ah boy we're right at time here i could
[1:29:39] keep going but there's a there's another 10 questions i don't think i'm going to get to maybe what i can do is just um
[1:29:45] come back to this and and see if i can respond and fill out this document and you can post it up somewhere
[1:29:53] all right thank you so much we we appreciate so much you taking the time and we know that we are at the hour so
[1:29:58] we will end it but to all the participants uh we will fill out the rest of these question and answer and we
[1:30:03] will post it at the conclusion so at the end of next week's training we will have the q a doc up on the website but again
[1:30:10] thank you so much feedback for for uh not only presenting but sticking around to answer all these uh great questions
[1:30:16] that were presented from our participants and also big thanks to uh dr amidamekta for uh presenting and
[1:30:22] helping out with this as well as brock levins jonatha o'brien and someone hudson odoi for all their work behind
[1:30:27] the scenes making this such a success so please stay tuned next tuesday we'll see you at the same time one week from now
[1:30:32] for the final part of this webinar series on urban heat island and have a wonderful day
