# Drought Prediction using NASA Sub-seasonal to Seasonal (S2S) Predictions, Part 2/4

`https://www.youtube.com/watch?v=rnBxGWjRiXw` · id 39 · 1:27:49 · module 6 — 083-remote-sensing-of-drought

[00:00] hello everyone welcome back to part two of this training on drought monitoring prediction and projection using NASA art
[00:09] system system data today we will focus on drought prediction using NASA subseasonal to seasonal or S2s predictions and we have
[00:19] a guest speaker today Dr Andrea mol from NASA goded space flight center uh she is the lead and in developing S2s modeling
[00:29] and prediction data in the previous session we saw drout monitoring data and tools uh using Earth observations and today we are just
[00:43] now going to focus on uh model predictions on subseasonal to seasonal scale um just a note here about homework
[00:51] it will be posted on 1st August which is the last day of the training and the homework will be due on August 15 um and
[01:00] a certificate of completion will be awarded to those who attend all live sessions and complete the homework
[01:06] assignments before the given due date that's 15th of August also as we will talk later there is a Hands-On exercise that will be
[01:16] given to you that you can analyze some of the S2s data using qgis so we'll talk about it
[01:24] later just a brief review of part one uh we had an overview of various types of trums that is meterological Agricultural
[01:33] and and hydrological um and Earth observations which are used for Drought monitoring include precipitation soil moisture vegetation index temperature
[01:44] groundwater uh we briefly saw which satellites and sensors are used for these parameters um and which drought
[01:51] they indicate for example precipitation from GPM deficiency in precipitation indicates mological drought also other weather parameters including surface
[02:03] temperature uh it's obtained from ter Aqua modus snpp jpss V and lens set um DRS or thermal infrared sensor um these
[02:14] satellites are also used to to detect agricultural drought because they're used to calculate normalized difference vegetation index and um evap
[02:25] transpiration from um Optical spectral data so same sensors are used and lens set operational lend measure is also
[02:33] useful for that um hydrological drout uh which results in in soil moisture depletion and uh depletion groundwater
[02:43] as well and two satellites uh soil mure active passive and Grace fall on they provide these data
[02:50] sets we also had an overview of trout indexes including standardized precipitation precipitation indexi uh pmer drop out severity index
[03:01] or ptsi and normalize difference vegetation index and DVI uh the spbi which is calculated based on precipitation data uh it is uh it shows
[03:12] number of standard deviations by which the observed rainfall deviates from the long-term mean at a given location the
[03:20] pdsi is similar um deviation but it's calculated based on precipitation and temperature data and also uses a water
[03:29] balance balance model ntvi is calculated from red and near infrared wavelengths and detects green vegetation then we had overview of d.gov
[03:46] and US trout monitor portals from our Noah colleagues Kelsey satalino and bread Pew they showed features of these
[03:53] drought monitoring tools over the US also uh Global drought conditions in trout. goov were covered uh we also
[04:02] looked at different categories of trout how they're derived from uh percentile values of various parameters such as
[04:10] soil moisture precipitation pdsi Etc then we had Dr Tucker uh he talked about how ntvi and solar indu forance
[04:20] can be used to see drought conditions for food security and he showed ndvi anomalies for selected region both maps
[04:30] in Time series finally Sean McCartney demonstrated how to calculate SBI and vcii that is vegetation condition index
[04:40] based on ndvi as indicators of drought using Google Earth engine he focused on Zimbabwe and showed how um spbi and BCI
[04:51] can help in monitoring drought this brings us to today's session on S2s predictions overall objectives for today are that by
[05:03] the end of this session uh we will recognize functionality of NASA's subseasonal to seasonal forecast system and data and assess evolving drought
[05:13] conditions using given S2s temperature and precipitation prediction data for a region of Interest so we'll start with description
[05:23] of NASA's S2s forecast system and data and then we will have a demonstration of analysis of S2s predictions of
[05:32] temperature and precipitation in qgis so next we will start with S2s forecast system and data and before I introduce
[05:41] our guest speaker here is how to ask questions so please put all your questions in the question box and we
[05:49] will address them at the end of the webinar and feel free to enter your questions as we go we will try to get to
[05:56] all the questions during the question and answer session um the remainder of the questions will be answered in the question and answer
[06:04] document which will be posted on the training website about a week after the training with that I want to invite Dr
[06:13] Andrea mot to talk about S2s predictions um Dr molod she's is a research physical scientist here at gter space FL Center
[06:24] in global modeling and assimilation office or gmao uh she leads uh seasonal and decadal prediction group uh managing the development of the Next
[06:35] Generation atmosphere ocean coupled seasonal prediction system she also is involved in development of Goos 5 General circulation model physical
[06:45] parameterizations and she's gmao lead of the coupled chemistry model development effort with members of the atmospheric chemistry and Dynamics Branch here at
[06:54] Gard so with that uh I asked Dr M to talk about as as predictions thank you Andrea take it
[07:04] away so thank you Amira for for the introduction um and again as as she just said I'm Andrea molad and I'm the lead
[07:14] of the U NASA Global modeling and assimilation office uh subseasonal prediction group um I have the list of a
[07:24] lot of names down here and different people on this list have contributed in one way or another but deserve
[07:30] recognition for their contributions um to this work that I'm going to talk to you about um so just a little bit of an
[07:40] outline of what I'm going to cover today going to talk a little bit about what seasonal prediction is and how it
[07:47] fundamentally differs from weather um we're we're all kind of used to looking at and understanding what a weather
[07:53] forecast is seasonal prediction is is a little bit of a different thing um going to talk a a little bit about our user
[08:01] Community um who we give data to in a near realtime sense and what they're doing with it it's uh it's quite a
[08:08] varied list of of users um going to talk to you a little bit about the model features and I don't mean the technical
[08:15] details of physical parameterizations or Ocean Models or things like that I'm talking to you about you know I as I
[08:24] will describe seasonal is a a fundamentally stochastic uh animal and so I'm going to talk a little bit about
[08:31] The Ensemble forecasts and what what that tells us about reliability and for anticipated skill then I'm going to
[08:38] devote a little time to talking about the output the the details of the output information what we output what it looks
[08:45] like where you can find it things like that um a note here because some of the slides are going to talk about different
[08:52] versions of this system we're about literally next month we're going to make our transition from a GS S2s 2 system
[09:01] that's been running since about 2017 to our new one which is GS S2s 3 has a lot
[09:07] of upgrades we are delighted with the improved forecast skill I'm going to give you a little teeny glimpse of that
[09:14] and uh a huge extensive retrospective forecast sque and I'll I'll talk to you a little bit about what the potential
[09:22] benefit for users is of that um so first question NASA s ites satellites measuring the Earth but why
[09:31] is NASA interested in developing and maintaining a subseasonal a subseasonal seasonal prediction project what what's the interest here so the idea is that we
[09:42] use these models in conjunction with satellite and insu observations to study and predict the phenomena and the idea
[09:51] here is that our experimentation allows us to explore how to better use NASA or other satellite data to improve forecast skill So to
[10:03] that end we maintain a state-of-the-art system and we're contining doing experimentation on what happens if we add this data was does that help the
[10:13] skill um and so we have a history a long history of doing this um beginning before the current one every one of them
[10:23] had a coupled model some kind of coupled data assimilation for some kind of reanalysis and um some kind of an
[10:33] ensemble perturbation strategy um the first bullet there what we call preos that um started the the the
[10:43] reference is actually here but this project started quite some time ago this was actually a model that didn't extend
[10:51] from pole to pole that fundamentally just covered the tropics but was still used for seasonal prediction the GS S2s
[10:58] one 20 2012 our version 2 came out in 2017 uh at higher spatial resolution and our newest one is scheduled for release
[11:11] um sometime next month um and so just want to talk a little bit about this phenomenon of seasonal prediction
[11:20] so the first sentence may sound a little technical but it's not the climate system is what we called Force dissipate
[11:27] of nonlinear dynamical system Sy it it's red there's red noise all over the system but we also understand that it's
[11:36] chaotic and so we've all learned that because there's chaos in the atmosphere after a certain amount of time we can't
[11:43] predict things anymore okay so if that's the case and we're talking about a week to two week predictability what what is
[11:51] this seasonal thing about okay and so the seasonal takes advantage of a few things the tropics are so strongly determined by the by the
[12:02] ocean underneath it that it's not that sensitive to the initial conditions so it's less chaotic um and so
[12:13] basically the tropical the the tropical ocean also is like an integrated impact of what the overlying atmosphere does
[12:22] and so basically because they evolve slowly the ocean and the land too this also extends this predictability out so
[12:30] essentially we should be able to predict seasonal scale things in the tropics at least for as long as we can predict the
[12:37] ocean temperature which is up to a year or so okay the key to this whole thing is a is a concept that's called signal
[12:46] to noise ratio okay how much of the variability is predictable that's your signal how much is not okay that's your noise and so
[12:59] the predictable part of this depends on these what we call sources of predictability the ocean is one big one
[13:07] okay the rest of it is generally unpredictable and it's noise so the whole game of seasonal prediction is how
[13:15] to maximize this signal to noise ratio what do we do to get that signal to stand out from the noise so in addition
[13:23] to the ocean there are other sources of predictability so-called sources of predictability a lot of these are
[13:30] regular oscillating patterns in the atmosphere and in the ocean you can think of something like El Nino that we
[13:36] all know that more or less every five six years we're seeing variations okay so as we see that we're headed into an
[13:47] elino phase which is a warm sea surface temperature in the in the tropical Pacific all of a sudden our prediction
[13:55] skill predictability is better and there are other of these kinds of oscillating motions the mulian oscillation is one
[14:04] and each one of this happens on different kinds of time scales and so this gives us predictability and then
[14:10] the question is can we cash in on this to actually get prediction skill out to multi-year time
[14:17] scales so here's back to this concept of signal to noise what is it actually that's that's predictable can we predict the
[14:26] temperature at 3:00 in the afternoon months from now the answer is no okay so what is it that's predictable we're
[14:34] talking about probabilistic measures um how many air quality exceedence days are we going to have next month we're
[14:42] talking about spatial averages we're talking about time averages okay this is a fundamentally statistical Endeavor and so we must have ensembles of forecasts
[14:54] to predict the probabilities this also allows us to assess what something that we call reliability okay I'm going to
[15:01] talk about that briefly um forecasts also need some kind of calibration we adjust for model bias and things like
[15:09] that calibrated forecasts are more reliable so the error that we expect them to have is the error that they're
[15:15] going to have and this time averaging turns out that the longer the lead time the longer we the time averaging in
[15:22] order to get something predictable at these lead times and so the idea is at WEA we don't do any of the averaging yes
[15:30] we can predict the weather at 2:00 in the afternoon tomorrow okay by the time we get to the one to two we averaging
[15:37] the the subseasonal leads three four weeks out one to two weeks seasonal is monthly averages and if we're looking at
[15:43] decadal prediction we have to do annual mean averages so is next year's annual mean temperature going to be higher or
[15:51] lower than normal those are the kinds of metrics that we're talking about here um so here are some of the the users of our
[16:02] current system that we produce systems in near real time which means uh essentially on the sixth of
[16:10] every month we're producing the forecast from that month to go forward nine months out so there are some multimodel
[16:18] forecasts and intercomparisons these multimodel um intercomparisons and multimodel forecasts are always more accurate they're even more accurate than the best
[16:30] contributing model to The multimodel Ensemble always okay um we send things to a a Korean intercomparison there's some stuff at at
[16:42] um the Columbia University we send them the elino indices there's an atmospheric River intercomparison project that actually California Water Resources
[16:51] managers are using to predict precipitation sea ice prediction drought briefings okay and level prediction okay now we don't have the capacity right now
[17:04] to just take our entire forecasts and dump them out and so these are collections that are available data sets
[17:10] that are available upon request that we are now generating in near real time for these groups and we post them on our FTP
[17:17] site um we also have a few operational forecasts that are taking our output from our seasonal forecast and using it
[17:26] as input and so we've got the drought forecast for the fuse net program we've got the folks at the Tennessee Valley
[17:34] Authority using it for Water Resources forecasting and there's a group in mikong River Basin also water resources and then we have a bunch of
[17:43] people using running trying to get experimental forecasts done with our system we are the only near realtime
[17:50] system right now anywhere in the world that predict aerosol and so the folks are using it for controlling dust
[17:59] sources in the US um we have Landslide prediction group within Goddard um there's a group based on the connection between dust and
[18:09] menitis outbreaks that are taking our forecast and making forecasts of those outbreaks ecological foresting pest population models crop models
[18:19] Etc Etc um we also in addition to the ones that we're already in touch with we also
[18:25] Envision that we could be using this to reach a very a much larger um different user communities certainly applications
[18:34] in the health care field that we have not been able to make connections and what I said before we can predict
[18:41] seasonal anomalies of air quality number of exceedence days or other metrics that we would work with potential users to
[18:48] figure out what what to send them and then obviously spread of disease associated with dust and rainfall and
[18:55] things like that Municipal planners winter snow naly forecasts right now they're basing it off some climatology in a lot of municipalities and making
[19:05] rather expensive decisions about snowplow trucks at the beginning of the winter forecasts of rainfall soil moisture anomalies for more applications
[19:14] of water resources and because of the large Ensemble size we have a lot of interest in this and expanding interest from the
[19:23] from the scientific Community to use this to study predictability um and just a brief note about what I said before about the
[19:32] interactive aerosol model it we're the only game in town for this for interactive aerosol model there are
[19:38] other centers that are testing this and have seen some potential benefits but right now the near Real Time Is Us in
[19:45] addition we include an aspect in our model that not only gets us the aerosol prediction but it lets us also
[19:53] understand how the aerosols may be affecting the clouds and the rainfall and so under certain circum ances this
[19:59] really helps us with prediction of of cloudiness and rainfall rainfall um an example would be um the dust that
[20:11] comes off of Africa impacts the development of tropical Cyclones in the Atlantic That season and we are properly
[20:18] able to capture that so we use an aerosol model called go-kart the so-called interaction with Cloud interaction and basically this has
[20:30] shown to result in incredible forecast of air quality aerosol Optical depth and an aerosol based parate matter 2.5
[20:38] Micron and in some regions basically if we're dominated by smoke we're we're out lock but any place else other than that
[20:46] we're good we've also seen an increase in the skill of 2 meter temperature in cloudwater ice at moments when these
[20:55] effects are important um and so there there's a group here that are that are studying this certainly if anybody's interested
[21:02] in details uh please reach out I'll put you in touch with Don Fon Baron um and just a word a little bit
[21:10] about what I talked about with the reliability and this Ensemble business um we're gonna we're going to evaluate
[21:17] the conf I'm calling it confidence here the word is reliability okay we're going to evaluate the reliability of the
[21:23] forecast by comparing The Ensemble spread and the mean error what we would hope is that the Ensemble
[21:32] spread matches the mean error so if we make a forecast and the ensembles are all over the place we're going to tell
[21:40] you we're not so certain about that forecast if we make an ensemble forecast And The Ensemble spread is tight and all
[21:49] of the Ensemble members are telling us the same thing we better be pretty confident that that's the case for
[21:55] SS2 we found that over North American land in particular that was spot-on if you look at the curves on the right if
[22:04] you look at the two on the right precipitation North America and 2 meter temperature Europe that curves that
[22:12] represent the error the spread is in the blue line and the green line is the mean error those curves are very close that's
[22:20] telling us that in general when the error is going to be when the spread is small the error is small over the
[22:27] tropics version two um did not do so well with this and we've made some upgrades for version three that this is
[22:35] now spot-on as well and on the left I have a little schematic of what what we want around suble to do if we look on
[22:44] the left of that schematic below Under The Heading of good Ensemble we're basically talking about an ensemble
[22:52] spread that whoops um we're we're looking about a a mean the green line is a mean error and
[23:01] the blue line is The Ensemble spread and the black lines are the sort of probabilities the largest and smallest
[23:10] probabilities of the observations okay we need our Ensemble spread the truth is that is that red dotted line okay and so what we need is
[23:21] we need our ensembles to stay within the truth within a certain distance of the truth okay as opposed to the one on the
[23:29] right that I would call a bad Ensemble that has the truth somewhere far away the mean error is huge The Ensemble
[23:36] spread is small we regard that as a bad Ensemble so we're just trying to make the characteristics of The Ensemble do a
[23:44] better a better job here okay um so what did we do for ensembles um the motivation for the change was what I
[23:55] showed you before our tropical Pacific spefic were talking about we called it too confident because we our error was was bigger than
[24:04] our spread okay that says we're too confident our spread was too small we made a bigger bigger mistake and we
[24:12] can't have that and then later in the forecast it turns out that they were underconfidence we were saying the
[24:17] spread was going to be huge but our error was small we changed our entire ensemble peration strategy in order to
[24:24] get this better okay in addition to that in extr Tropics high latitudes Europe mostly but other places too we were
[24:34] lower than some of the best models out there for S2 S2 because we had too small Ensemble size we had 10 member ensembles
[24:42] for seasonal prediction and there's a clear evidence from this paper by scaal 2018 and others that the skill in these
[24:51] regions at these lead times increases with Ensemble size so we increased our Ensemble size to 40 okay also this dependence of Ensemble
[25:02] size doesn't extend to the tropics and the Tropics we're talking about this the sea surface temperature and this
[25:09] Ensemble sides doesn't help us so beyond a certain months we're we're reducing The Ensemble okay um and so what do we want
[25:21] these perturbations to do The Ensemble perturbations we want them to capture the things that are going going to have
[25:29] the error grow quickly so if we have um a structure like the ones that we're looking down at the bottom so this is in
[25:39] the ocean the horizontal axis is longitude at the numbers that we see the vertical axis is depth of the ocean
[25:47] starting at zero and going down okay and so what we're looking here is the depth of the ocean mix layer the thermocline
[25:56] that we know is deeper in the West Pacific and shallower in the East Pacific that tilted structure looks like
[26:02] that and so if we can make Ensemble perturbations that are tickling something that looks like that kind of a
[26:10] structure we know that we're going to capture the variations in that thermal Kleine in in our Ensemble spread which
[26:19] is what we want okay if the variations are going to be big we're going to make a big mistake small small mistake and so
[26:26] we basically have these fast growing structures that we're looking to have those be the ones that we tickle and we
[26:33] have a mix of them running throughout the forecasts and this we found gave us a much better reliability estimate
[26:40] especially in the tropics than than what we had before okay so with all of that in place
[26:47] our seasonal prediction Suite um we run forecasts out for nine months we issue forecasts every 5 days
[26:56] for the subseasonal for the for the out to a monthly time um for monthlies we're issuing them once a month we have 40
[27:05] onsemble members for the first three months and then we subselect from there and run out for the remaining six with
[27:12] only 10 and this is you know basically we're looking to get the biggest bang for our buck for the computations that
[27:19] we have the computational uh space that we have and so the 40 gets us a lot of
[27:25] what we want beyond the first couple of months the first three months the predictability in the extr tropics is
[27:32] gone and we stay with only 10 members for the tropics for Alo forecasts and that's all we need okay um we have a
[27:41] coupled assimilation called GI ocean that we have our retrospective initial forecasts from retrospective forecasts ran from 91 to 2024 the near real time
[27:52] conditions are coming from our coupled reanalysis with this name GI ocean nrt and again once a month these are issued
[28:00] more or less the fifth or sixth of the month um and now just a little Peak at
[28:05] some of the improvements that we saw in the forecast skill that we're really liking so this is a metric that we call
[28:12] the anomaly correlation so we're measuring measuring the month-to-month variations of the temperature higher lower than normal Etc
[28:24] and this anomaly correlation measures the correlation of the predicted and the forecasted anomalies for each month and
[28:34] this is over the span of our retrospective forecast periods that we use for this across the top we have June
[28:41] on the left and January global view on the right and across the bottom we have the new system again June on the left
[28:51] and global view of January on the right and we're the deeper Reds that we're seeing in that lower left picture
[28:59] especially in some of the western US regions that very small region of really crappy skill with the blues and the
[29:05] whites um is smaller and we have deeper Reds also on the east coast and we're liking that in the northern hemisphere
[29:14] winter the skill over the US is substantially better we're seeing those Reds in there and we're seeing whites
[29:21] and dark pinks for the for the January from s to S2 so we've looked at this we've looked at many many many other
[29:29] metrics anybody interested in any specific metric can come and talk to me but we're we're very happy with the
[29:35] skill skill um and so let me switch gears a little bit now and talk about our output and
[29:45] this includes how the output is organized what's available the file specification document what that is and when that's going to be released for S2
[29:55] S3 which is not yet and where to find files that we stag for users okay so SS2
[30:03] forecast is available if anybody's still interested in a period of retrospective forecast from 81 to 2020 and near real
[30:12] time time from actually 2018 onward ss3 is available from 91 to 2024 uh the World Meteorological organization has changed their base
[30:23] climatology period from 91 to 2020 and so going back earlier than 91 was very difficult um we have an extensive amount
[30:34] of output there's no way that we can just post it all and have people just grab it and so the current practice is
[30:40] that users request data to be staged into specific Collections and specific data sets for them and the person to uh
[30:50] request this is by sending me an email okay okay so collections we have a concept NGS that we call Collections and here's an
[31:01] example of what a collection entails collection for us entails a name on the left ATM is a three-digit identifier
[31:12] that says that these are atmospheric Fields inst says instantaneous 6h hour 6h hour frequency Global in scope a
[31:22] Laton Grid at essentially half degree and 49 pressure levels in the ver vertical the specification for each
[31:31] collection basically has what I said there that the name is indicating gives you the list of what
[31:40] those 49 pressure levels are that these atmospheric fields are available at and then a list of the fields themselves so
[31:47] for each one of our collections we have a specification that's like this that will appear in a uh with a little bit
[31:56] more detail even than this but this is the way that we tell our model what to Output our model output is
[32:03] totally flexible we can configure this however we want this is how it's configured for S2 S3 um and just for you to see here's a
[32:13] whole list of our Collections and except for that first digit three-letter three-letter identifier we have time average are
[32:23] instantaneous we have the temporal frequency of the available output right now everything is global and a lot of
[32:30] things are output on that half deegree grid but our ocean runs on a quarter degree grid and so we have some things
[32:38] from the ocean that are output on that native grid as well and the three-letter identifier is our fantasy about what
[32:44] things mean they may or may not be self-evident sfc surface rad radiation MST moist AER aerosol oan ocean that
[32:56] kind of thing ice SE I Etc but so the sample file name is going to have that
[33:02] three-digit identifier and then we'll include an experiment number and the month and and day for instance for a
[33:11] monthly monthly average okay um so gmao SS2 the file specification document is online and available and we do have an FTP site for
[33:23] files that have already been staged and I think am and her demonstration has downloaded some files from here and done some calculations
[33:33] that she'll show you how to do GSS tos3 the file specification document is in preparation we are scurrying around to
[33:41] get that thing done and um we are going to have FTP access for files that have been staged in a slightly different
[33:51] location um and so now I talked about this file specification document that going to prepare in addition to general
[34:00] information about the grid the file naming convention uh for every one of our our collections it contains this entry that
[34:10] includes the variable name the dimensions and the units okay um and so this is a little bit more detail than
[34:18] what you would get from that collection specification that that I talked about before so again SS2 all of this is out
[34:26] there and available for people to have a look at in general ss3 is outputting more many more Collections and Fields
[34:35] than what SS2 did in particular the prognostic fields are all the same you know what we're predicting the
[34:42] temperature the humidity things like that we have a lot of diagnostic fields that are present in this system in the
[34:49] ss3 system okay so that's about all for my uh part of the talk uh thank you very
[34:56] much for your attention um and so the gmao and the gsss forecast output output availability is basically we have
[35:06] different assorted ways of reaching out of getting stuff staged for users uh get in touch we're also sort of a Nimble
[35:14] system and so specialized requests for specialized fields are you know we're perfectly um happy to do that for a user
[35:24] that's interested in what our retrospective forecast skill of a particular field that they're interested in we're we're also more than happily
[35:32] willing to provide that so um we can we can answer some questions later in the meantime let's pass this back to Amita
[35:39] so she can do the the uh the demo using the SS data thank you so much Andrea for the
[35:49] excellent presentation and information about the S2s prediction system next we are going to have a brief demonstration of um how to access and
[36:00] analyze S2s data um so to get S2s data for a specific period it's either historical or present um the data are
[36:11] available and but you have to request them uh you can send an email to Dr mot uh with the period of your interest and
[36:21] the data will be um extracted from the GMO repository and put on um an FTP site uh from where you can download the data
[36:32] so this FTP site if you go there now uh you will see some data sets uh staged
[36:38] there in response to users requests these are also all open- Source data so if you are interested in using them if
[36:46] happen to be the same data set or same perod you can download and use these data otherwise you can request
[36:54] data so next there are two demonstration that we want to show the first one is that we will examine maps of atmospheric
[37:04] anomalies uh to identify areas of dry or wet and warm and cold conditions so for next n months how things are going to
[37:14] evolve is what is available in these uh pre-calculated uh Maps uh that we will look at and then next we will examine
[37:24] surface temperature and precipitation predictions for next three months based on the most recent forecast uhu made available by Dr mullard from S2s data
[37:36] reposter so let's start with this atmospheric atmospheric anomalies um this page has a lot of information uh about S2s home um as Dr M
[37:51] mention S2s version three will be out soon and this website might be even easier to navigate but we're going to
[38:00] focus on uh this S2s 2.1 system uh that's available here um this if you can see uh this starts in June um 2024 emble
[38:12] mean um and goes all the way to February of next year so um the 9 months of
[38:18] forecast based on May initial condition uh here you will see variable so that 2 m atmospheric temperature is
[38:29] available and precipitation um so anomalies are available and here uh you can pick regions either Global uh North
[38:37] and South Americas uh southeast Asia Australia and Europe so you can zoom into any of these um and um to
[38:47] pick um let's just stay with temperature animal and look at the global uh uh Maps first you can submit here we already
[38:56] have it you can let's look at the July ensemble mean if you click on it you can
[39:03] zoom in here's um the color bar with anomalies so all Blues are negative and uh Reds are positive anomalies as you
[39:14] can see in in degrees celsius um clearly in July we see that here in in Southern and Eastern us it's quite warm warmer um
[39:27] temperature anomalies are there in Mexico in Central America all the way to Brazil you can see warmer anomalies
[39:35] similarly in the southern part of Africa something that um Sean was uh showing last session here you have uh positive
[39:46] uh warmer temperatures in in higher latitudes in Western India in Australia uh everywhere you see um warmer than normal uh T 2 a or 2 m
[40:02] temperature if you go to August it persists here almost everywhere um here also uh if you go to Western India I
[40:14] think after Monsoon rain it's uh the made cool down and maybe anomalies are not that strong if you go down all the
[40:22] way to say January February of next year you can see that wintertime temperatures are much warmer over the US um in in
[40:33] January and February and uh you you can see where there are negative anomalies so it's colder than normal as in north
[40:44] um Western Australia as you can see here so this allows you to quickly browse through what's going to happen in next
[40:53] uh 9 months you can get qualitative idea by looking at this map that um it's going to be warmer colder similarly you
[41:01] can look at precipitation uh let's focus more on if you look at the global map you will see that most anomalies are
[41:14] stronger over the oceanic region especially this itcz region so if you want to look at land it's best to focus
[41:21] on one of these areas and I'm going to pick South America and then submit so here uh this is again monthly
[41:30] anomalies from June July August all the way to February and as you can see um there is deficit of rainfall these are
[41:38] negative anomalies um in in the northern part of South South America as you go down down to uh southern hemisphere uh summer so
[41:50] say in January February uh Brazil develops or shows deficit in rainfall it's starts developing these anomalies and then you can see these large areas
[42:02] covered in negative anomalies a deficit of rainfall so here is how you can actually look at different continents
[42:11] and get some idea of what might be happening it here it's about normal um in in their summer
[42:19] months uh so um also you will find information about um S2s system here here um and a lot of other information
[42:30] that you can U browse through so in the next exercise we are actually going to calculate anomalies of
[42:43] surface temperatures and precipitation uh using qgis um if you have not yet installed qgis on your computer uh you can go
[42:53] ahead and do that after this exercise is over um your pre visit did request you to install qgis on your
[43:02] computer so for this analysis or calculations of anomalies I have downloaded monthly forecast data for July August and September of this year
[43:13] uh these are emble mean forecasts um and uh uh also what I've downloaded is so-called drift files with respect to
[43:23] which anomalies are calculated all these files are available to you to download uh from the training web page um and
[43:33] these files are in net CDF format that we will be opening in qgis and calculating uh anomalies next so I have
[43:43] I'm going to open a new project uh just for your information uh the version I'm using is qgis
[43:53] 3.6.4 once you open a new project uh we're going to go down here to coordinate uh in this window we're just
[44:03] going to type world and you will get Continental outlines with all the country shape files also outlined here and if you want
[44:14] to see which country you're looking at you can go here identify features click here and zoom into region of your
[44:22] interest and click and it tells you in this window uh which country you're looking at in this case it is Zimbabwe
[44:30] um or Brazil you can click on the country and uh you can see the country outline now um the data that available
[44:41] to you are global data so we are going to look at global data but what you can
[44:47] do is zoom into the region of your interest and uh then just focus on that so let's start uh by adding uh data to
[44:57] it so I'm going to add raser so let's see I'm going to demonstrate calculation of anomalies for
[45:06] July and then you can do it uh for August and September um at your convenience you will have some time
[45:14] after this exercise to work on that or you can do it uh at your convenience later this week as well so let's start
[45:22] with precipitation July 24 at CDF 5 uh open open that and add so this file is added now I
[45:34] also want to point out something that if when you load this file um and for some reason if it does not appear where the
[45:43] map is what you will have to do is click on control click on the raster go to uh
[45:52] layer CRS because this is a net CDF file there is no C CRS attached to it so you
[45:59] will have to pick a geographic CRS and that is epsg 4326 so once you click on that if the
[46:07] map and data are not appearing at the same location they should after you do that so you can click on the file and go
[46:16] to to properties and look at information um this is an extent of this file is given here in longitude and and
[46:27] latitude so it is global data as you can see uh width and height which is Eastward and northward north south grid
[46:34] points 720 by 361 so this is half a degree data Global then uh of course it's the format
[46:44] and data statistics are available here minimum maximum values mean and standard deviation uh most importantly you can
[46:52] see the units here it's in kilog per M Square per second if you remember just a few minutes ago
[47:00] we looked at the atmospheric anomalies website uh the precipitation data were in millimet per day so to be consistent
[47:08] with that I've converted this data in uh millimeter per day and uh just a quick conversion is that if you have
[47:17] precipitation in kilog per M Square per second to get the column of water uh in millimeter first of all you will divide
[47:26] it by water density which is about 1,000 kg per M Cube and so if you if you
[47:33] divide by 1,000 you will get uh precipitation in me/ second and to convert it to millimet per second you
[47:42] will have to um multiply it by ,000 and so this you dividing and multiplying by th000 so basically what
[47:58] it says is that when you have precipitation in kilog per M Square per second actually it is mm/ second the
[48:08] same values will you will get that then you multiply by number of seconds uh per uh hour uh and hours per
[48:18] day so click here on the layer and go to raster calculator you can select the roster and multiply
[48:31] it it by um number of seconds per hour hour and number of hours per day and I have
[48:45] already uh saved this file you can create that and then say okay and now you will see uh numbers compare this in
[48:56] kilogram per M Square per second and this is in millimet uh per day so you can remove this if you like and keep the
[49:08] layer which is millimet per day let's uh set symbology so we can see values go to properties go to
[49:19] symbology here you will uh pick single band pseudo color and I would say 0.5 to say about 60 um we can pick that
[49:36] here in the labels it should be maybe significant to two decimal points and you can have more intervals
[49:44] here so equal intervals and then how many classes you want you can see that and then you can invert this so that you
[49:54] can have lower values for blue blue and higher for red and say okay and you will see the um
[50:06] the data here now what I'm going to do is click on the world map go to properties and uh select just simple
[50:18] outline rather than shaded uh contents so you can just see the outline and the data data so now you can see the data and you can
[50:29] zoom into the region of your interest and uh see what the precipitation structure uh looks like for month of
[50:37] July you can see that numbers here say over the US um maximum rainfall is more like 2025 so you will have to change uh
[50:48] colors to be able to see the structure so you go to property uh go to symbology and change the range here uh let's see
[50:57] I'm going to say 15 and say okay and now you can see that uh you can see more structure uh so
[51:09] precipitation you may have to change and reduce the range even further if you are interested in any of these uh
[51:18] regions now I have already pre-calculated uh precipitation and uh temperature anomalies for for July 24 so we are going to walk through those steps
[51:31] now so again for precipitation uh July prediction emble mean that we just saw um I have loaded in this project uh the
[51:42] highest value here the range is up to 50 mm per day next file that we have is
[51:49] this drift file for the same month this is you can consider this as a long-term mean so an Oles are found with respect
[51:58] to this file so when we want to find anomalies we take actual prediction and subtract this drift uh uh file
[52:06] precipitation from that and so that's what we've done so for that go to rer calculator select July precipitation
[52:17] prediction and subtract the precipitation from the long-term mean or drift file so select that and then you
[52:26] you can select name of the uh output layer U and save it on your computer which I already have so once you put
[52:35] that file name in you can say okay and then you will get a new raster which is
[52:41] uh precipitation anomalies and that's what is shown here so first of all this is actual uh July
[52:50] prediction and this is this is prediction this is drift file precipitation and these are anomalies and if you look at the scale
[53:01] here it's -2 to 2 mm per day uh so anything that is very dark blue it's um
[53:09] deficit either minus two or less and red is plus two or more uh more precipitation it's wetter so you can
[53:17] zoom into the region of your interest um here you can see that uh parts of Canada in the central us um in Colombia
[53:27] Northern Brazil and Southern Brazil there is rainfall deficit for July 24 if you move on to uh southeast Asia uh
[53:37] China there are parts of uh these areas where deficit of rain fall is there if you zoom in a little more uh Bhutan
[53:46] parts of Nepal and Eastern India also have less rain than expected or than normal um so you can look at that I have
[53:56] calc calculated temperature anomalies as well so let's start by looking at um July prediction of surface temperatures
[54:06] and scale shown here is uh 205 to 315 Kelvin uh warmer tropics and colder as you go away from the
[54:16] tropics the next file is the the drift data for for surface temperature so you can see that this is actual prediction
[54:25] and this is drift actual prediction and drift for July and when you subtract uh that to find
[54:33] anomalies you get temperature anomalies uh and the values here here are uh - 5 to5 U Kelvin or deg Celsius it's the
[54:44] same now you can see that um parts of the US are warmer Canada again Brazil Greenland many regions have
[54:56] warmer than normal temperatures and wherever you see green and blue colors that's where the it's colder than normal
[55:05] so now you can analyze both together precipitation and temperature the regions which are um drier and warmer
[55:15] are shown here either in the US in the South America in Brazil this is for month of July
[55:27] now the files available to you are for August and September also so all the units are uh converted into millimet per
[55:37] day you don't have to do that um and anomalies are also calculated so all these files are available to you uh all
[55:44] you have to do is um just load these rasers in qgis zoom into the region of your interest change symbology to look
[55:55] at the patterns and and see how you progress from July August September how it it the temperatures are changing and
[56:02] precipitations are changing in the forecast and that will give you some idea of what's unfolding in next uh 2 to
[56:09] 3 months uh so uh that concludes our exercise our demonstration um for today so with these demonstrations uh we
[56:22] conclude today's session um so just to summarize uh we had an overview of S2s prediction system and we also looked at
[56:31] how to analyze uh data um gmao seasonal prediction group they use coupled Earth system models and analyze in conjunction
[56:42] with satellite and nc2 observations to study and predict phenomena that evolve on subseasonal toal time scales as TOS prediction is not same as
[56:55] whether prediction as Dr mord explained it's a statistical approach where ensembles of forecasts are needed to predict
[57:04] predict probabilities multiple uses of S2s data are already there uh they include uh drought forecasting and Water Resources
[57:13] forecasting uh studying dust sources in the US soil moisture precipitation and temperature uh prediction for Landslide prediction uh ecological forecasting and
[57:25] data to drive a pest model data for users are tailored and distributed from an FTP site they have
[57:35] to be requested uh maps of 2 meter temperature and precipitation monthly animal predictions for 9 months are
[57:43] available from the the gmao site that we just saw um also examples of emble mean predictions of surface temperature and
[57:52] precipitation anomalies were analyzed in qgis be looked at the month of July uh you can look at August and September to
[58:00] see where dry and warm conditions might persist over uh next 2 to 3 months and specific data can be
[58:10] requested by contacting Dr Andrea mot and her email address is available here now next part three will focus on
[58:21] overview of NASA Earth exchange Global daily downscale projection or next gddp for the coupled model inter comparison
[58:30] project Phase 6 CIP 6 so we will look at how to access and analyze next gdd PC
[58:38] MIP 6 climate projections we'll look at precipitation and temperature and see how long-term drought conditions will evolve under climate change a note about
[58:48] homework and certificates there will be one homework assignment and that will open on 1st of August and that can be
[58:56] accessed from the training web page answers must be submitted via Google forms and the homework due date is 15th
[59:04] of of August those who attend all four live webinars and complete the homework assignment by the deadline will receive
[59:12] uh certificate of completion uh in approximately 2 months after the training is over with that we want to thank Dr
[59:23] Andrea M Andrea thank you so much for your time and for the excellent presentation about S2s prediction system
[59:31] also want to thank you for making the data available to us for analysis here is the ret website link
[59:41] and we are on the social media and these are our sister programs you can look into and that brings us to the end of
[59:49] today's session so um I I hope you were able to work a little bit on the exercise and now uh we can go to
[1:00:05] question and answers um I'm going to go through all the questions one by one and see how many we can address we
[1:00:15] have Dr mord and she will be answering these questions some of uh about S2s system so question one I'm to start
[1:00:24] Andrea and you can um um answer these questions will the Goos S2s 3's hindcast climatology planning 1991 to 2020 also
[1:00:36] be released in August so you can unmute yourself and just verbally answer the question Anda yeah as I wrote here the answer is yes
[1:00:50] um um frankly we here at Nasa as in many more many many places now the government we're fully committed to this open
[1:00:58] science any data that we produce should be available to the public our only obstacle is having enough public facing
[1:01:06] file space to get everything out there so the answer is yes this is not that extensive a data set compared to others
[1:01:14] we have access to something that we call a data portal we're working out how to do that and we will make that URL public
[1:01:22] and we'll have a little read me in our on our website about how to how to access the data through the data
[1:01:30] portal thank you question two is also for you how long will GEOS S2s version two be available after the release of
[1:01:38] version three yeah we're going to keep it running probably till end of calendar year um we have a user that that one
[1:01:47] user in particular that needs um that needs this to be running for a while because they need to download every
[1:01:55] every single one of our ensembles through the whole retrospective forecast period and that's going to take quite
[1:02:01] some time so we're going to keep SS2 running for them the plots on our website and a lot of and the data that
[1:02:09] are going to a lot of our individual users are going to flip over to be from ss3 either next month or the month
[1:02:18] after nice question three is what are the possible ways to get the Ensemble to look good if it is not
[1:02:27] right so this is the calibration that I talked about so we generate The Ensemble and we do some sort of calibration
[1:02:33] frankly we remove the drift that's the simplest calibration that you can think of but um you know this gives us
[1:02:41] essentially an unbiased anomaly there are many other methods out there um the national multimodel Ensemble for instance applies a uh a rescaling of the
[1:02:53] variance as well um and there are many many many different machine learning based methods out there and still under
[1:03:01] development so this is an open question for how to adjust the Ensemble Ensemble um but you know we're we're we're again
[1:03:12] we're doing and Advising the simplest one but certainly there are many options out out there great thank you question four is
[1:03:22] Geo S2s an Open Access model can I use it for kazakistan so a couple of things one is the output
[1:03:32] is global so if somebody is looking to use the output from our forecast over Kazakhstan then they should be able to
[1:03:40] it seems that that there may be an issue of resolution horizontal resolution related to that but certainly it's
[1:03:47] available in terms of somebody else running the model we're an Open Access model only in the sense that anybody can
[1:03:54] download the code we have it on zenodo we have it up on a couple of different you know Version Control SVN and git and
[1:04:01] a few different ways to download it but in a practical sense it needs parallel Computing to run at any reasonable
[1:04:09] resolution so some kind of a a cluster and there's a lot of auxiliary data that that reside on the NASA Computing
[1:04:17] machines that we need to run it and so in a practical sense it's it's very difficult for somebody to run it
[1:04:24] somewhere else we have options to run it um at the two NASA Computing centers um we're also not a a community model in
[1:04:33] the sense that some others are where there's a whole office full of people to provide help on how to download and run
[1:04:39] things so yes and no is the answer to that that question yes I think so uh question five is can the GEOS S2s
[1:04:52] model be applied to local scales small scale studies what is the special resolution of its output yeah so our
[1:05:01] model runs it doesn't run on a Laton grid but we interpolate our output to a 50 km Laton grid for atmospheric Fields
[1:05:10] temperature precipitation things like that 25 km ocean resolution sea surface temperature sea surface salinity and any you know field that depth in the ocean
[1:05:21] we provide at 25 km in order to get something at smaller scale SC You' need to go through some kind of downscaling
[1:05:29] exercise there are a few users around that take our output and do downscaling but what they're doing is very specific
[1:05:36] to their specific downscaling application I don't have any kind of sort of General recommendation this is how you would downscale in general for
[1:05:47] all uses so that's something that that would have to get worked out there are dynamical and and statistical
[1:05:55] downscaling methods out there that's not maybe as useful as you would like but I I don't have a better
[1:06:02] answer for that so yes we in next session we will have one statistical method that you can
[1:06:10] learn about from next gddp that's the uh downscaling effort but as Andrea said it's really uh you have to be sure that
[1:06:18] for your specific application and region it's it's applicable think downscaling is a whole um um area of research and application so
[1:06:29] question six are S2s um 2.1 Maps available for download as as Geo so no um what we've got is we look
[1:06:40] we upload a bunch of PNG images on our website that somebody could grab but that's a very limited number of fields
[1:06:47] and there's nothing in in geot geot [Music] [Music] um I would imagine if we found some kind
[1:06:55] of very broad use for this we could find some way to get this done but as of now
[1:07:00] the answer is no question seven is how do you check for Africa so again the the model is
[1:07:08] global the data are are Global my understanding is that some of the demonstrations may have been for us or
[1:07:15] something but but certainly Africa is is um part of of any of the global fields so that should just be included when you
[1:07:30] download download data yes um so the data you have uh this sample data to work with they have it's
[1:07:38] Global so you should be able to look at Africa zoom in and question eight is can they be viewed use so um this is about
[1:07:47] data file can they be viewed using panoply since it's net CTF and answer is yes you can open these files in in
[1:07:54] panoply panoply okay yeah thank you yeah question nine is there a python notebook you could recommend for this exercise for people
[1:08:04] not expert in qgis I can't help with this I'm wondering if one of you guys can so um I
[1:08:13] mean that is a good question um we probably will think of that um instead of qgis uh slowly switch to Python and
[1:08:21] Notebook based uh calculations so we'll definitely take this suggestion in in you know for our a team to work on yes we'll do that right
[1:08:32] now we don't have it but this is something that we can think about question 10 it is very interesting
[1:08:40] to me that the forecast predictions are listed as ensembles the this leads me to uh ask this specific question what specific
[1:08:50] motive or patterns are within this forecast prediction and exist across North America for landslides this answer is a very long
[1:09:01] windowed way to say I I don't know but there are people that either are still or were using our output specifically to
[1:09:09] look at landslides and I can't remember exactly who but I can find out quickly and I could answer you know in whatever
[1:09:18] format you guys would like but I think this question gets posed to them yeah so oh yeah if if we can you
[1:09:27] know find out who is using maybe we can uh ask this question to them there's somebody in the hydrology branch and I
[1:09:33] just can't remember who okay we'll look for that and question 11 what are some examples of custom data requests that
[1:09:42] get uploaded to FTP yeah so we have some of the FTP fields that you'll find there are corser
[1:09:52] resolution because there are some multimodel Ensemble um groups that want everything at the same resolution so we
[1:10:02] course in our Fields others just want subsets subsets because they're working like at a university or at a small place that
[1:10:10] can't handle huge amounts of data um other things that are we we do like a little calculation for them on the fly
[1:10:17] one example of this is there's an atmospheric River intercomparison project that we contribute to that the California Water Resources folks use and
[1:10:28] we do a calculation from our outputed moisture and momentum Fields the winds to perform what they call an integrated
[1:10:35] moisture transport and then upload that to them so and there are a few examples of little calculations that we make just
[1:10:43] on the Fly um horizontal interpolations most of the most of it comes under either either subsetting horizontal interpolation or
[1:10:53] little calculations great thank you um next question is one question related to the seasonal forecast is there any long-term or 30
[1:11:07] year or longer daily data set of historical variables like air temperature and precipitation I I'm interpreting this
[1:11:15] question not as is there a long-term observational data set but is there a long-term record from our
[1:11:21] forecasts and the answer to that is we uce three hourly fields of 2 meter temperature and precipitation um or all the model levels
[1:11:31] of of precipitation um and then average them later for seasonal forecasts to monthly averages or so so it's a lot of data but
[1:11:42] certainly at the request of user we could give these three hourly fields for The Ensemble members now um I would be
[1:11:51] very wary to give daily Fields out or three hourly Fields out for anything beyond the first 45 days at most of the
[1:12:01] forecast because beyond that the daily fields are just not predictable and so I would have a hard time standing behind
[1:12:10] them given this if somebody wants them anyway of course it's available data are public and they can just have them um
[1:12:17] but we have these three-hourly fields for the new forecasts but also we have them for our entire record of
[1:12:23] retrospectives it's a lot of data but yes there's a record and a user can ask for it great question 13 is the animal layer
[1:12:36] shown for July for precipitation there are some areas countries in South America and Middle Eastern countries that were white uh which represent zero
[1:12:46] anomal what is the reason for that I do not think not having a deficit would be the reason so the white color was
[1:12:54] between 424 mm per day if you go back and look at it uh so anything that was
[1:13:02] in that range around zero was white so what it says is that the anomalies were smaller you know compared to the mean so
[1:13:12] what we saw was more like um above minus1 and + one they were colored um lighter color between point4 and those
[1:13:22] numbers so white color basically shows that anal is they're not zero they are around zero Hing around zero between
[1:13:29] minus point4 to um 44 to minus point4 to plus point4 and you can change that range that's what I was talking about
[1:13:40] that if you change symbology uh you can do do that that range you can change what you
[1:13:47] want to keep white or you don't want to keep anything right uh question 14 I would just add to
[1:13:55] that a note that I wrote there this only means that the expected rainfall is the usual amount yes and the usual amount is
[1:14:02] the number that appears in that drift file so if you want to know exactly how much rainfall there is you could go to
[1:14:07] that drift file and see because what we're telling you is that that's the number that we're expecting next month
[1:14:13] or the month after yeah so actually you know that's something that's a great point that I actually wanted to make
[1:14:20] when we were going through the exercise is that you know if uh Wherever You See n n El is those numbers should be compared
[1:14:29] to like what the actual rain is like in drift right so that you can see how what's the percent percentage deficit
[1:14:37] there is uh compared to long-term mean or you know in this case this drift so yeah that's a good point um so it it
[1:14:45] it's it's um more or less normal with respect to that drift data that you have the white color so next uh question is
[1:14:54] it was was a little bit too fast to follow the calculation so yes the um it's just the kilogram per met Square
[1:15:03] per second precipitation uh it's equivalent to millimeter per second and so you multiply number of seconds in day
[1:15:11] and you get millimeter per days so but the files that you have they are already converted so you don't have to go
[1:15:17] through that step question 15 is do you only produce precipitation and temperature data under gos to us yeah we have quite an extensive list
[1:15:30] of output fields we are predicting the winds the temperature the humidity as well as all kinds of what we would call
[1:15:37] diagnostic diagnostic Fields surface radiation all kinds of things like that that document um we we call that our file specification
[1:15:47] document provides every the whole list for GS SS2 the ss3 output is going to be totally reorganized into different
[1:15:56] groupings and things like that we're preparing that document now but it's you can imagine that it's at least this
[1:16:02] field these field plus quite a quite a number more quite a few more great thank you question 16 is
[1:16:11] while performing exercise part one I encountered some error in GE can someone guide who I can contact to correct those
[1:16:21] errors um I think you can email it to us um please yeah email um to ret email
[1:16:32] address and then uh we'll forward it to Sean McCartney or anybody else who can answer your question question 17 is as the forecast
[1:16:45] provides data on the anomalies how do you use that data to calculate drought indices like SPI so um yeah go ahead Andrea so that's an
[1:16:58] interesting question because the reason that we do all of these anomalies and things like that is that provides the reliability of the
[1:17:08] forecast the correspondence between the error and the spread um when you're Computing a particular statistic or or a
[1:17:16] particular index there are a few different ways to do it certainly you could take the raw uncalibrated output
[1:17:22] and compute the SPI and do the the same from the hindcasts and so you would have an SPI anomaly more than you know higher
[1:17:31] than usual Etc but there are a few other options that one could think of um and so that would be something to reach out
[1:17:40] to us please and we'll try to figure something out you know the idea would be to try a few different options and see
[1:17:48] which one provides you the most skillful forecast of spi great that's that's great to know uh question 18 is I was wondering if there
[1:18:01] is any package in r that allows us to download GMOs S2s data so Andre I think that probably
[1:18:14] there isn't a package that would allow you to download GM S2s data you have to request them uh to be staged on an FTP
[1:18:23] site yeah either grab we have or request that that they be staged or there is some stuff that we're going to put on
[1:18:30] that data portal and and again as we finalize all of this we'll let people know yeah question 19 do we need to
[1:18:42] perform the raster calculations to convert units and no for for the files you have for this exercise you you don't
[1:18:50] have to convert any units they are already converted if you are if you if you download data from the FTP site and
[1:18:58] you want to convert the units you you will have to do the rro calculation question 20 I cannot
[1:19:06] download the anomalies anomalies um I'm not sure uh this is the gmao S2 S2 current um Andrea do you recognize
[1:19:21] that question question 20 I I see I see the question but I'm not quite sure that I understand what somebody's trying to
[1:19:30] do this is the yeah this is the atmospheric anomalies page I believe and those are PNG images so I'm not sure
[1:19:40] right yeah yeah so you they they're not Digital Data so that way you you know one of the previous questions answered
[1:19:47] that that we cannot download as Digital Data uh question 21 what is the best scale to work with this data set in the
[1:20:02] [Music] [Music] forecast not sure what what you mean by scale uh if you can be more specific where can I get VPD data for
[1:20:21] 2000 to 2020 it will have to be calculated from temperature and [Music] [Music] humidity uh what's the
[1:20:33] chronological yeah answering arrangement of the layers so we we interpolate our data from model levels to pressure levels to
[1:20:44] provide output and they're sequence bottom to top but the um the metadata in the net CDF file should tell you which
[1:20:53] level is is is which question 2 um yeah 25 are there any further recommendations to consider when modeling seasonal uh drought such
[1:21:12] as uh parameters scales and data um I am not an expert on drought prediction um so this is not a a
[1:21:24] question for me um you know I I'm a I'm a reader of the papers on the subject so
[1:21:31] I know that there are lots of different ways to measure you know the different kinds of drought the agricultural
[1:21:37] drought the meteorological drought Etc um so I I don't know how to answer this question so Andrea I had a question
[1:21:45] about that uh is does S2s um version two or three will have surface soil moisture yep we have soil moisture so certainly
[1:21:54] know know that's that's one of the parameters that would be downloaded we actually have a three soil moisture levels we have a
[1:22:02] surface soil moisture a root Zone and a a deep so all of those are available so I think um uh not about the
[1:22:13] scale I'm not sure but if you look at uh precipitation surface temperature soil moisture then you will have a good idea
[1:22:22] about um mological and also agricultural drought uh based on these data sets so at least that you can look at um
[1:22:32] seasonal anomalies you can look at if you want to know seasonal droughts we we are particularly um pleased with our
[1:22:42] soil moisture initialization methodology um frankly it was developed here quite some time ago and now other centers are starting to adapt this
[1:22:51] method but um our soil moisture initial conditions are better than many great so I interpret scales means
[1:23:02] temporal scale that if you want to look at seasonal drought do use daily data to begin with but you can use monthly data
[1:23:11] right to to look at seasonal Evolution yeah yeah yeah yes question yeah go ahead one one caveat for this that I just want to have
[1:23:23] clear which is we do not have any mechanism as our model is running to know about any
[1:23:30] irrigation that's being done so all of our soil moisture and drought predictions will be as though that's not happening but that's
[1:23:41] certainly not accurate so as of now it's being worked on but as of now we have no
[1:23:46] mechanism for adjusting our soil moisture based on irrigation yeah so just the natural part is included not the management part is
[1:23:55] not there yeah yep yeah so question 26 is how can S2s outputs be used for statistical downscaling for instance
[1:24:04] using climate predictability tool given that uh is provided at course resolution I'm not going to go anywhere
[1:24:14] near that yeah I think you know downscaling is a big issue and um a lot of work's been going on so we can Pro
[1:24:24] you some references and um next session we will look at um what uh gddp NASA gddp they use for uh daily downscaling
[1:24:35] data um they have a statistical methodology so you can start with that and then there are a number of
[1:24:42] references in there too so the the severe folks are also employing some kind of a downscaling method that
[1:24:48] frankly I am not excited by but it's working for them okay um and question 27 is evapo
[1:24:58] transportation data available on products generated by uh S2s that's a yes oh great yes wonderful yes we have actually it we
[1:25:11] have some breakdown we have total evapo transpiration we've got and it's broken down what comes from the soil what comes
[1:25:19] from the leaves what come you know like that what comes from the plants so we've got transpiration
[1:25:25] um what they call interception Reservoir evaporation so it's yeah so the answer is yes and it's further broken down by
[1:25:33] what part of the uh vegetation it comes from this is fantastic uh thank you so much Andrea for the presentation and
[1:25:45] being here to answer all these questions so thank you for your time your expertise on this topic has helped
[1:25:53] us a lot and um hopefully um everybody will be able to use S2s uh with a little more
[1:26:00] ease now that you know more about data and systems and how to request the data and how to analyze the
[1:26:10] data so I think um if we do not have any more questions we still have a a few
[1:26:16] minutes if you have any questions but in the meantime I want to thank our speaker Dr Andria m one more time uh for her
[1:26:26] time and effort and great help with this topic we also want to thank our rset team members our coordinate coordinators
[1:26:35] um Natasha Johson Griffin and Sarah Kell also helped by Brock Levin and selin Hudson ooi um I want to thank my
[1:26:46] colleagues Sean McCartney and uh Susan Monty for helping uh with this training um and and thank you all for attending
[1:26:55] today's today's session um you can work on the exercise at your convenience and if you have any
[1:27:01] questions you can uh let us know or you can send an email and we'll see you uh
[1:27:06] next week on Tuesday that is 30th of July um and at that time we will have a
[1:27:13] presentation about um NASA's uh it's uh daily downscale data for multiple models uh Global Climate models and also we
[1:27:23] will uh look at an exercise on how to analyze this data in Google Earth engine so if you don't have any further
[1:27:32] questions um we will see you on Tuesday on 30th of July for the next session
