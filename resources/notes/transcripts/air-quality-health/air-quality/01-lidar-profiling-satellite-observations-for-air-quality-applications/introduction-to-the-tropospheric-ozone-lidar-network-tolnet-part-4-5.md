# Introduction to the Tropospheric Ozone LiDAR Network (TOLNet), Part 4/5

`https://www.youtube.com/watch?v=zS3T-4Pnde8` · id 84 · 1:30:12 · module 22 — Lidar Profiling Satellite Observations for Air Quality Applications

[00:05] okay welcome back everybody today we're continuing our ret training NASA atmospheric composition ground networks supporting air quality and climate
[00:15] applications with part four introduction to the tropospheric ozone lar Network or toll net today you'll be hearing from me
[00:26] Melanie fet cook I am a research scientist at NAS Godard Spight Center and project scientist for the aret
[00:33] program but during today's presentation you'll mostly be hearing from Dr John Sullivan Dr Sullivan is the principal
[00:40] investigator of the toll net Network and works with me here at NASA space flight center by the end of part four of our
[00:50] training Series today we hope that participants will be able to identify the basic characteristics of the toll
[00:58] net instruments used by NASA for groundbased active remote sensing of tropospheric tropospheric ozone recognize how tollet supports air quality in climate
[01:09] applications and complements satellite observations and access relevant tollet data for a given location and application purpose to recap in the first two parts
[01:24] of this training we learned about aeronet which is a passive remote sensing Network Aon provides information about aerosols in the atmosphere part
[01:33] one gave us an overview of the aeronet network instrumentation and data products and in part two we saw how to
[01:40] use the aeronet website to access and visualize data and we stepped through several Jupiter notebooks to read and
[01:46] map aeronet data in several ways as well as create time series and compare aeronet and beer's aod in part three we learned about the
[01:56] Pandora instrument and ponia Global Network the Pandora instrument is a passive hyperspectral instrument whereas the aeronet network measures aerosols
[02:07] Pandora measures Trace gases in the atmosphere specifically ozone form Malahide and nitrogen dioxide during today's training if you
[02:19] have any questions you can put them in the Q&A box within WebEx at any time at the end of today's training we'll try to
[02:27] address as many of these questions as we can and and we'll post the questions and written answers to the training page
[02:34] within about a week after the training and now I'm going to turn it over to Dr John Sullivan to give us an
[02:43] overview of the tollet network so thank you Melanie uh for that great introduction I am John Sullivan
[02:53] based out of NASA Godard space flight center and I am the tropospheric ozone liar or toll net project
[03:05] scientist today I'm going to give you a nice overview of tolet and hopefully you walk away with a better understanding of
[03:12] lidar of ozone in the atmosphere and of our relevance and background motivation for uh the network as a
[03:22] whole the first question that needs to be discussed is what levels of ozone are in Earth's atmosphere Earth's atmosphere
[03:30] is broken into two main sections the stratosphere and the troposphere uh these are represented here in the figure
[03:39] on the right as being in a blue or an orange orange section we generally describe ozone from
[03:46] a measurement perspective as good up high bad nearby meaning that we want higher levels of ozone in the
[03:53] stratosphere to block harmful UV rays so good up high but bad nearby we don't want it uh down where we as humans
[04:02] breathe it can be uh an impact to Public Health because of this reason NASA has a continued interest in understanding both
[04:09] stratospheric and tropospheric ozone levels tolet focuses their research in the tropospheric portion of the ozone I will describe throughout this
[04:21] talk some of the measurement techniques we use to observe ozone and hopefully and hopefully get across the value of
[04:30] tolet and tropospheric ozone liar I do want to mention on the left for some context generally the
[04:37] atmosphere is composed of three main species of molecules nitrogen oxygen and argon which make almost 99% of the
[04:46] atmosphere however in terms of ozone we generally describe it as parts per million by volume in the stratosphere so
[04:53] 0 to about 10 and parts per billion in the troposphere 0 to 100 and just as a note one part per million
[05:01] is equal to a thousand parts per billion hopefully this gets you a better understanding of some of the vertical
[05:08] variability of ozone in Earth's atmosphere that we like to measure at Nasa it's also important to understand
[05:20] the common measurement techniques of ozone of course NASA is focused on satellite observations especially Earth observing satellites you can see on the
[05:29] diagram here Cube SATs International Space Station sensors low earth orbit satellites and geostationary satellites all have some form of ozone measurements
[05:40] generally these are a total column ozone measurement so from below the satellite to the surface or partial columns mainly
[05:48] in the stratosphere with that larger stratospheric stratospheric abundance current satellites have a real challenge in measuring tropospheric
[05:56] ozone however just due to the much smaller port portion as I mentioned that part per billion versus part per million
[06:03] concentration or mixing ratio of ozone NASA also has a long history of using aircraft observations to measure
[06:11] ozone uh traditionally during field experiments however this can be costly and quite timec consuming to have as a
[06:19] normal routine observing platform another way NASA has measured ozone is using balloon born measurements uh also known as ozone s
[06:29] and this is a a really great way an accurate way to measure ozone has been used by NASA for almost 50 years these
[06:37] can complement toll net measurements quite well um but the single balloon profile of ozone cannot always tell the
[06:44] story as continuously as lidars in situ monitoring or Surface Trace gas analyzers are very common for ozone
[06:55] throughout work generally with the air quality Community or with the environmental justice community paired with tolet data I'll hopefully
[07:02] show you throughout this talk how we can help better explain the vertical and horizontal transport of ozone in a
[07:08] three-dimensional perspective now that I've hopefully established the need for tollet and the profiling of ozone with the broader
[07:21] motivation and relevance to NASA I'd like to introduce tolet a little bit more formally and over the next few
[07:28] slides describe the differential absorption lar technique or dial technique tol nut was established in 2012 with five Charter instruments uh
[07:39] and this these instrument teams have grown to eight operating 12 lar instruments these are all currently located in North
[07:47] America these are generally lab or trailer based transportable liar systems but I will show you some recent
[07:55] advancements um and some technology development with smaller portable ozone lighters that have been developed for Community use in recent
[08:04] years in addition to the instrument teams we have an internal tollet forecast and modeling team at Nasa as
[08:11] and our website and long-term data storage is handled at Nasa Langley's atmospheric science data center or asdc as a prerequisite for this course
[08:21] you should have already registered for an earth data account which is handled through the asdc so you have already
[08:27] taken the first steps to access and begin to visualize toll net data so I'm hoping here today to uh make
[08:37] sure everyone here has a better understanding of the major components of lar systems so liar or light detection
[08:44] and and ranging can be very complicated we won't have time to go into all of the engineering details but what I do want
[08:53] to make sure you leave here today with is a good working understanding of the major lar components
[08:59] and in particular how powerful lar can be at helping to understand our Earth system on the left this simple
[09:07] illustration highlights the three main components of any lar system whether that be a laboratory based system a
[09:14] space born lar system or a lar that can fit in the size of the palm of your
[09:19] hand lar consists primarily of a Laser Source a telescope a receiver and a data acquisition system for atmospheric Lar
[09:29] applications this laser is transmitted into the atmosphere the laser light is then scattered off of anything in the
[09:35] atmosphere including other molecules Trace gases and aerosols or particulat a large portion of that light is directly back scattered so think of
[09:45] the atmosphere as acting like a mirror back to a telescope the size and Optical parameters of this telescope will vary
[09:52] based on how much light you want to collect and how high into the atmosphere you may want to view
[09:59] finally every lar system has a data acquisition system which will record the data coming back generally en counts at
[10:06] various levels or bins in the atmosphere the next step in understanding lar and dial are determining which wavelengths or colors
[10:20] of light that will be used and this is very important in atmospheric liar we want toll net to be able to
[10:27] measure in both day and night conditions as well as be able to be absorbed by ozone the left panel shows the
[10:33] electromagnetic spectrum with a zoomed in view of the ultraviolet or UV region to the infrared light region radiation from our sun falls off
[10:43] drastically below about 300 ners making this an ideal region for tol net to operate in without having additional
[10:51] contamination from the sun which we use as solar background radiation most tonet lighters operate between 266 and 300 nanm during the day
[11:02] for this reason the Right image shows a simple illustration of wavelength selection for tollet this on the y- axis we have
[11:12] relative ozone absorption and on the x-axis we have wavelength of light this concept is referred to as differential
[11:20] absorption lar or dial the differential absorption occurs based on the wavelengths of laser light used used which are referred to as on or more
[11:32] absorbing which is the blue line and please reference the blue arrow on the EM spectrum as well you can see that
[11:39] that is farther into the ultraviolet and an offline wavelength Which is less absorbing which is indicated by the red line the vertical
[11:47] dashed arrow is simply a proxy for that differential amount of absorption or Delta Sigma so between these two wavelengths we can then
[11:58] accurately calculate ozone and I'll show that equation on the next slide on the left now we have a simple
[12:11] plot of the return signals that are recorded with our data acquisition system recall that the data acquisition
[12:17] was the third most important component of any lar system the y- AIS on this diagram are uh
[12:26] altitude above the ground at range r and the x-axis is the return signal p as the light is collected we start to
[12:35] see a general separation in the return signals that is based on the differential absorption of ozone moving over to the equation now n
[12:47] which is our concentration profile of n of ozone at range R can then be calculated simply by using the distance
[12:57] that that signal is collected from the Laser Source and the Delta Sigma that was defined in that previous slide
[13:04] relating to the fundamental ozone absorption properties at each wavelength of course these simple diagrams are very smooth but real data
[13:13] can have additional features from clouds or aerosols in particulates we will see an example of real data on the next
[13:19] slide but I want you to walk away with the understanding of how we select our wavelengths how the absorption between
[13:27] those wavelengths matters and how we transmit that light into the atmosphere we can physically understand differences in the vertical distribution of ozone
[13:35] based on that fundamental absorbing principle there are many General benefits of lar with tolet we understand vertical profiles of tropospheric ozone
[13:52] so because this is the first curtain plot or time series we show I want to just walk through this slowly and I
[13:59] should also mention this image was uh directly created on our website with with very little work and you will be um
[14:07] hopefully able to generate plots like this by the end of this session or in the homework application your y AIS is Altitude so
[14:17] this is the first four kilometers of the atmosphere the x- axis is time each of these horizontal stripes are
[14:25] representing roughly 30 minutes in time so we're now getting every 30 minutes a profile of tropospheric ozone that be that can be
[14:34] continuous to better characterize ozone features ozone these colors correspond to Ozone in parts per billion by volume
[14:44] so you can see the color bar on the top indicating 40 to 60 parts per billion and blue and green colors as you get
[14:50] higher into higher levels of ozone it becomes red to Maroon to gray this color bar was created
[14:59] partially to complement the epa's US Air Quality Index on the left now actually looking in a little
[15:08] closer at the data actually plotted we begin to see fundamental characteristics of ozone and ozone transport that are
[15:17] revealed only with tol net ligher we do see some transported pollutants entering the region we see low ozone values in
[15:25] the morning that are likely tied to additional chemical process CES such as titration titration effects we can see clouds so there are
[15:33] artifacts in the data that we work closely with our uh tollet teams to better screen and then we can also see
[15:40] high ozone uh in the atmosphere um that is generally in the range that it would be concerning for public
[15:52] health I've shown you the general mathematics and theory behind tol net and I've showed you some of the data I
[16:00] want to also give you an impression today of some of the sizes of the toll net instrumentation I mentioned we were
[16:07] five Charter instruments developed in 2012 each of these instruments have been primarily trailer based they are deployed for larger field Network
[16:17] campaigns on the left we have the Noah topaz or tunable Optical profiler for aerosols and ozone uh the right the NASA
[16:27] Langley mobile ozone lar and the NASA GD tropospheric ozone liar these are all larger trailer based systems uh which offer an ozone
[16:36] chemistry laboratory on Wheels many times these trailers are deployed with additional surface analyzers for Trace gases uh ozone SS will be launched
[16:47] additional aerosol Properties or other Liars are also generally collocated with these trailer based systems I um encourage anyone who's interested more
[16:57] in learning about some of the individ ual liar systems to visit the website and view the Publications we also have more recently
[17:08] been developing a small ozone lighter uh these Compact and portable systems were developed at Nasa jpl's Table Mountain
[17:16] facility and they offer the ability to provide ozone profiles to the community at lower cost and with less restrictive
[17:22] sampling locations you can see in these three images the small light are there on the left the general size of it
[17:28] fitting in the back of a pickup truck and um generally some of the deployment locations have been much more um easy to
[17:36] access rather than having the the strict space and power requirements of a larger trailer based system this concludes the general
[17:46] introduction to tolet I hope you've walked away at this point with an working understanding of the area of
[17:53] interest for ozone and the broader motivation for tolet some of the fundamental Theory underlying to net some of the understanding of liar or a
[18:02] good working understanding of the the value and importance of liar and a better understanding of what the tonet
[18:08] data actually looks like and what the instrumentation looks like in the field the next section of this
[18:19] discussion will be on toll net application and uses this session will primarily describe uh various profiles of ozone
[18:30] from tolet and how we can better connect those profiles to the larger Community the three main components that
[18:42] tolet was chartered to do are listed here on the left to observe high resolution planetary boundary layer
[18:48] ozone and I will show some examples in the following slides to be used to better evaluate air quality forecast and
[18:54] chemical transport models and to study the atmospheric structure for evalu ation of current and future satellites on the right is an animation
[19:03] of the tempo satellite and this is the tropospheric NO2 product that has been been recently um provided to the
[19:11] community uh we hope in future years the tempo team is able to produce a tropos syc ozone product that we expect tolet
[19:19] to be able to evaluate um and validate a large component of tollet historically has been to deploy
[19:28] deploying these ozone Lars for field work the table on the left shows uh a list of all of these deployment
[19:36] locations and uh various sites across the US that have had toll net participation I encourage you if you
[19:42] were located in one of these regions or were part of one of these field campaigns to reach out to some of the
[19:47] members of tolet to better understand how you might be able to connect with the data I've already shown this Slide the
[19:57] general benefits of that liar but I wanted to just highlight it again now in the context of a simple case
[20:03] study these measurements were collected in summer of 2023 in July of 2023 uh in the Long Island Sound region uh this
[20:12] liar in particular was deployed to a site that was near the Long Island Sound now that you have a better working
[20:22] understanding of tollet data it's time to better understand how these Lars can be used in more of a study example to
[20:30] understand Regional chemical transport in summer of 2023 we had four toll net Liars in the New York City
[20:39] region these were located in the Long Island Sound area in downtown Manhattan Westport Connecticut and in Madison Connecticut I'm showing the data
[20:50] from Oldfield New York here which is a site very near the Long Island s where you are seeing some higher elevated
[20:58] levels of ozone throughout the day that are corresponding to Ozone that is of exceedance levels however the value in tolet is
[21:12] understanding that chemical transport between sites the slide here has lar profiles from Manhattan New York the same profiles in the previous slide from
[21:22] Oldfield New York as well as Madison Connecticut the EPA map here on the on the bottom right showing generally the
[21:31] surface values of ozone and how those compare to the vertical profiles of liar each of these plots are shown on the
[21:39] same vertical and temporal axes so this really gives you a great understanding of how these Liars can be used to better
[21:48] understand pollution coming into the region each site is showing a slightly different level of pollution aoft as
[21:56] well as a slightly different level of pollution being built up um in the planetary bound layer on this
[22:03] day you also can look at each of these profiles or each of these liar sites and understand some general chemical
[22:11] transport depending on the timing of some of these features occurring at each site I also wanted to take a moment to
[22:21] connect back the toet data to previous portion of this ret training with the aeronet data so trying to use multiple
[22:29] groundbased networks to better characterize pollution events so that somebody who is really interested in in pollution in a local environment can use
[22:38] both of these instrumentation to better understand some of the complexities on the left we have the aeronet aerosol Optical depth on the
[22:49] same day that we have on the right from the toll net boundary layer ozone combining these two groundbased
[22:56] NASA networks we can begin to understand chemical transport patterns as well as see that on this day there was an
[23:02] increase in aerosol burden as well as in Ozone burden things like this then can be used to better understand some of the
[23:10] various differences in Trace gas transport and aerosol transport both of which are concerns for public health another example of a toet liar
[23:24] deployment campaign occurred this in summer of 2023 this was with in the California area we had the Table Mountain tropospheric
[23:35] ozone lier or TM tall as well as two of these smaller portable ozone Lars that I described in a previous
[23:41] slide one in Pasadena and one in San Bernardino the curtains here on the left then show the small one small two and TM
[23:55] tall data firstly I want to to show the general performance of these smaller Lars is quite impressive as compared to
[24:05] the Heritage measurements made at Table Mountain second I want to comment on the critical understanding of ozone
[24:15] transport in this region and how we really are seeing that buildup of additional ozone in San Bernardino site
[24:21] as compared to the Pasadena site this strong ozone dial cycle is likely due to morning titration and then
[24:30] afternoon ozone buildup there are many sites in the Los Angeles area that are continually achieving High ozone um
[24:40] tolet is certainly aiding in understanding where this ozone is coming from its production and how it may be
[24:46] recirculated to other sites in the region so now that you've seen some great examples of tollet data I hope
[24:57] that we can be begin to um provide some simple steps in the next few slides on how to access the tollet data uh show
[25:05] you how to visualize this data on the website very easily with a few clicks and also to understand where some python
[25:12] toolboxes may be available for those of you who are interested in that so accessing tollet data um the
[25:21] website and if you're looking at the screen the QR code is there on the bottom left um this was a big initiative
[25:27] in tolet in 2024 to roll out uh this website which allows for easier data Discovery and data management for end users the
[25:37] ability to graph in real time and uh view data historical data um an API for automation feature interface and
[25:46] interoperability and a more functional search feature uh for data subsetting the right there is just when you go to the site this is the main data
[25:55] download site we also based on feedback from the community developed a calendar view so you can very quickly go to the data
[26:06] calendar select the lar of interest um what type of data you're looking for and a calendar view will then populate based
[26:14] on that query um this is also a great way to visualize a lot of the tollet data um depending on where you are or or
[26:22] what um region you are in interest by clicking on any of those calendar blocks on the previous slide and in
[26:35] browser graph will pop up and this has a um the plotted toll net data for that day you can then go in uh as an end user
[26:45] and modify the X and Y axes and the limits and there are also some additional capabilities um for those
[26:53] that might have trouble viewing the color bar um as well another way to access the tollet data is
[27:04] to use the toll net toolbox which is a python notebook that has recently been developed at Nasa Goddard Um this can be
[27:11] accessed by going to the asdc data and user Services GitHub the link is on the screen then by opening the tollet API
[27:19] examples examples notebook uh this can be viewed in either the native browser or downloaded to use in other environments
[27:28] such as anaconda or Jupiter so simply walking through the similar case study that we wanted to look at
[27:38] earlier um all of those Graphics were uh individually distributed on the website however with uh this python notebook if
[27:47] you're interested in looking at a certain site I mentioned flax Pon on one of the earlier sites and you wanted to
[27:53] pull data from that uh tollet data from that location but you also wanted to look at all of the other Lars very
[28:01] easily uh with a simple API call you're able to do that so another example case study similar to the case study that was
[28:10] described in the New York Region if we look at July 12 2023 and we want to graph the toll net data using the API to
[28:19] graph uh the GD ligher during this time uh we can import it with python with a simple
[28:25] simple call if we only want the data from the GD lar on June 12th we can then filter
[28:30] accordingly with specific start and end dates and an instrument ID this will then quickly generate a profile plot here and with that can then
[28:44] be uh either saved locally or augmented as needed for your application the advancement with the tol net toolbox uh really is is in the
[28:58] ability to pull multiple Liars at one time with one query so instead of just looking at one liar at one time which
[29:05] has historically been the approach for the uh toet website we now have the ability to enter in uh start and end
[29:14] date um and a product ID that is all documented in the in the python notebook and it will pull any available data
[29:22] during that time and what you have plotted here are uh six different uh toll net Lars or at least six different
[29:29] processing types that are then in the archive so anyone looking for a general uh model evaluation or satellite
[29:36] evaluation with tollet data can very quickly pull data regardless of the location of that idar there's also some description in
[29:47] the toll net toolbx of the toll net curtains in terms of data formatting of access labels um of cropped graphs and
[29:56] various sample X and Y labels and how to save the figure uh to the respective directory that you need for your
[30:04] use the final component of the toll net toolbox that I think is important for the community to visualize is comparing
[30:12] the tollet data with uh existing ozone forecasts or meteorological models we have done this with the NASA GCF Global
[30:22] atmospheric composition model which produces an ozone forecast and a replay so with very simple queries you're able
[30:29] to not just plot the toet data but then send an analogous set of API calls to the uh gecf team and uh that data then
[30:40] is returned and you can generate simple plots here like on the right where you have now uh 15 days of ozone lar data on
[30:49] the top and the analogous set of ozone profiles from that same latitude and longitude or the the the closest grid
[30:57] point uh plotted for that same time so you can begin to better understand visual differences in the liar and model
[31:04] uh this is actually quite impressive quite an impressive feat both from the lar perspective and the modeling
[31:09] perspective to see these two matching as as well as they do um in the future we do hope to build out tools that might
[31:16] provide better statistics um or evaluation of some of these forecasts in line um but at this point it is simply
[31:24] uh just a visual identification between the two so in summary if you are on the website or would like to get to the website you
[31:34] can discover the data uh you can make near real time graphs uh there's other capabilities in terms of viewing
[31:42] individual days of ozone lar data um if you want to use the API for any automation efforts um or any
[31:48] interoperability that is the place to go um and there are some really functional search features that we've added um in
[31:55] the last few years if you are interested in uh looking at more than one lar um so multiple Lars to
[32:02] be able to be grafted quickly um the comparison to the GCF or maybe some other Future air quality uh air
[32:10] composition models might be of interest to you we really recommend uh considering the toll net toolbox on the
[32:16] asdc GitHub um for that and hopefully these both will be continue to be uh supported in the near future and if
[32:24] there are any suggestions uh on tools that you want to see please feel free to reach out to myself or or put that in
[32:30] the chat and I can document that for for now uh finally I want to wrap up today
[32:37] with just acknowledging some of the major components here for tolet um the image on the left is from our 7th annual
[32:43] tol net science team meeting which occurred in Silver Spring Maryland in 2019 um but we have had continued
[32:49] funding from the NASA headquarters tropospheric composition program and we've had a lot of tollet scientists and station leads who have been here from
[32:58] the beginning that have been really critical in uh the growth and success of tolet I want to give a specific shout
[33:04] out to Michael new church from the University of Alabama Huntsville who is our tollet chief scientist and has done
[33:10] a tremendous effort at highlighting the utility and value of tolet lar um and finally the NASA asdc and data team for
[33:19] really providing uh the ability to update our website um and to just be a storage unit for um all the tolet data
[33:28] that we hope the end users can go and download and and play around with and and use for their uh end use so thank
[33:35] you for that so we've now come to the summary section of the toll net description and I want to just make sure
[33:46] that everyone here was able to really understand a little bit more about tolet um we discuss the basic characteristics
[33:53] of ozone in the atmosphere and the available measurement techniques hopefully you learn uh the various pros and cons of some of
[34:00] these measurement techniques we introduced the differential absorption lar technique used for toonamp but also with other Trace gas Liars hopefully you have a
[34:10] better understanding of the wavelength selection um and the differential absorption of of these wavelengths we introduced a few of the
[34:18] major Hardware components and various sizes of to net Liars um hopefully you're able to recognize now how tollet
[34:26] supports air quality we did describe a case study where toet Liars were able to characterize High ozone in New York as
[34:33] well as in California and then we did a simple walkthrough of accessing relevant toll net data for a given location and
[34:41] application purpose by using the website and the tollet python notebook so my time is up here today um
[34:49] but thank you for um sticking around listening to this toll nut description and please don't hesitate to to reach
[34:55] out if there's any questions or comments on how you could use tolet data or access it I want to make sure that
[35:01] everyone here um Can can use the data if they need it so um I'll wrap up here and
[35:06] pass it back to Melanie thanks so much thank you Dr Sullivan that was a fantastic overview of the toet liar
[35:18] network tolet is the first of two groundbased networks that will review that use active remote sensing toll net
[35:26] Liars use differential absorption lar or dial technique to calculate vertical profiles of ozone mixing ratio these vertical profiles are an important
[35:36] complement to satellite-based passive sensors like Tempo and tropomi that measure tropospheric columns and groundbased passive sensors like Pandora
[35:46] that measure total column and lower tropospheric profiles lar profiles can help create a more three-dimensional picture of pollutant transport and
[35:55] connect the information from passive sensors to surface inc2 concentrations we saw some examples of this in the case
[36:03] studies presented by Dr Sullivan part five will be the final session in this training series and we
[36:13] will learn about the second groundbased network using active remote sensing the micropulse liar Network or MPL net while
[36:22] toet uses active remote sensing to measure ozone profiles as we saw today and pl n observes profiles of aerosols
[36:29] and clouds again a reminder that this training Series has one homework assignment you'll be able to access the
[36:38] homework from the training web page starting August 22nd and all answers should be submitted using Google forms
[36:45] by September 5th certificates of completion will be issued to participants who attend all five of the live trainings and submit the homework
[36:54] before that deadline and certificates are typically issued by email about 2 months after the training this is an additional
[37:06] information slide with our contact information um with emails for myself and Dr Sullivan as well as links to the
[37:12] ret website YouTube channel and Twitter or X as well as our sister programs develop and serere and last but not least we've
[37:24] added some toll net resources to our resources slide here thank you so much for joining us today
[37:33] we will now transition over to the Q&A portion of today's training and before we begin um we have
[37:47] in addition to Dr Sullivan we have an additional expert on hand John would you like to unmute and introduce uh Fernando
[37:58] yes thank you can you hear me okay Melanie yep hear you great okay great um so the I'd like to introduce uh Dr
[38:07] Fernando Chala from NASA JPL Table Mountain facility um all of the great slides you saw on the small ozone liar
[38:17] um which I saw some great questions in the chat about that so I know a lot of
[38:20] you were also um pretty motivated and excited about that um Fernando is really the um the lead engineer on that project
[38:28] and allaround toet uh scientist and Guru so I wanted to bring Fernando in to also answer some additional questions and and
[38:36] Technical questions so um I know Fernando if you wanted to to say hi hi everyone thank you for all the questions
[38:43] uh we're going to do our best to answer them as as um good as possible great um happy to have you
[38:53] thank you for joining us um so we'll make our way through the questions all read them out and then um you both can
[39:01] speak to uh the answers so question one do oone measurements with balloons allow to detect only the vertical distribution
[39:10] or can you monitor can you use them to also detect the horizontal distribution uh so yeah so potentially
[39:19] you can use it right but the balloon only measures uh along the trajectory of the balloon so um it's quite limited
[39:27] what you can extract out of the balloon measurement regarding horizontal variability you can certainly combine the balloon uh measurement with um other
[39:38] techniques Like Satellites lighter stuff like that to get a better idea of what you are measuring with the balloon but
[39:44] yeah so you have a measurement along the trajectory what you do with it will depend on the specific application
[39:52] actually okay question two what is the basic concept of lar and we covered this in the training but maybe we can just
[40:01] give a summary here yeah sure so I think this is an important point and uh I'll give a plug
[40:08] for the micropulse liar network uh training on Thursday which uses uh another version of lar and the green
[40:16] aerosol lar um so lar or light detection and ranging you might see it as as an acronym spelled with one way or another
[40:25] way um effectively we are transmitting a laser pulse out of a a laser it's it's firing quite rapidly in our case 100 Hertz or
[40:38] upwards of a kilohertz with with some of the tollet sites that light is being transmitted uh in the
[40:46] atmosphere that light interacts with the atmosphere and reflects back down and we collect it so lar and other um forms can
[40:56] be used for altim Tre um can be used for ranging there's there's Light Art technology and a lot of other areas um
[41:03] really to that is focused on atmospheric uh liar um and basically we use that return signal um to then retrieve
[41:13] physical quantities of the atmosphere in our case ozone and then like I said on Thursday um Optical properties of
[41:20] aerosol is what the npl net is uh focused focused on great question three seems to ask a lot of
[41:30] details about uh some as aspects of liar measurements what is the frequency and accuracy how deep can liar detect uh
[41:39] does it work at night without GPS or underwater so lots of pieces to this question uh okay so I can take this one
[41:48] uh so regarding frequency I assume the question is uh about the wavelengths that we use because we also use a pulse
[41:55] laser generally so you can also talk about what is the repetition rate of the laser but I think that's less relevant
[42:01] um so regarding the wavelength that we use for lighter in the case of oone Lighters we use uh um UV uh
[42:09] lasers uh because we have we rely on the absorption by ozone uh of a UV radiation to make our measurement right so we have
[42:16] to uh pick two wavelengths one is more absorbed one is less absorbed and so looking at how much gets absorbed one
[42:23] versus the other we can calculate the um the amount uh regarding accuracy it's uh really dependent on um many variables
[42:33] basically our vertical resolution our time resolution how much we average over time uh what with which web lengths we
[42:42] pick how much solar background we have right uh generally at night we have a better accuracy during the day in the
[42:49] case of a tropospheric o Li that's not that important but it's still uh affected by by um
[42:58] uh light uh lighters definitely work at night uh because we have we carry our own light source uh that's an advantage
[43:06] let's say over passive instruments that rely on the sun to make the measurement uh lighters do not need uh GPS and we o
[43:15] lighters do not work underwater uh but there are lighter you know the ones that are used for uh measuring the um
[43:22] underwater and generally operate in the green uh region of the spectrum uh but yeah o liers do not um operate under the
[43:31] world world so yeah I think that's yeah covers most most of it thank you question four the measurements
[43:42] reached four kilometers as in as shown in the figure so this is I think referring to 4 kilm altitude um can it
[43:48] reach higher altitudes so it's an important concept to understand that um the atmosphere itself in in some ways
[44:00] limits our altitude detection so um it of course relies on how um powerful our laser is um solar background although
[44:12] we're operating most of these tollet Lars below the solar curve So Below about 300 nanometers we still get some
[44:19] solar background contamination in our signal just due to imperfect um inter narrow band interference filters um or averaging of the data so if you
[44:30] really wanted tollet data that could potentially go higher in the atmosphere um generally in Clear Skies so clouds or
[44:40] ozone are not absorbing your signal um and you've got low um low solar backgrounds so um ultimately the
[44:49] altitude coverage is um dependent on your your physical uh parameters such as um like I said the laser but also the
[44:57] atmosphere itself is is kind of um helping you uh absorb some of that that signal so it's a it's a combination of
[45:05] of both um and I will just comment that um one of the sort of you know what I
[45:13] think important parts about ozone lar or lar in general is we're able to average longer um to potentially get higher in
[45:22] the atmosphere so there's also some additional software um either averaging or uh improving your um or degrading
[45:30] your vertical resolution to improve potentially your your altitude coverage so um there's lots of little uh things
[45:37] that we've done throughout the years to try to provide um the best data to the community and we've sort of come down to
[45:46] a compromise in about a 10- minute most of the data you'll see um for the curtain plots that is which is what was
[45:54] was shown um throughout this presentation are generally in the 10 to 15 minute uh temporal range which seems
[46:00] to be a nice coverage so sub hourly profiles you know four to five profiles per hour for for the community um but
[46:08] getting the data out that um with that level of temporal resolution does reduce our our upper limits um in some respects
[46:15] so um but yeah there's a certain case that anyone is working on and they desperately want to use that data at a
[46:22] higher altitude um please reach out to uh myself or um anyone on on the team and we can try to see if there's a way
[46:29] to potentially recover some of that um some of that altitude altitude thanks question five how to join the
[46:41] tollet network yeah I'll just uh mention that you know feel free to to reach out to myself John Sullivan um and I've got my
[46:51] email address there um we are uh generally comprised of um right now a general mailing list of
[47:04] um tollet enthusiasts um and if you want to reach out to me I can um add you to
[47:10] that list um and kind of depending on your level of Interest or um which Community or sort of stakeholder level
[47:18] you're in um we can try to find the right spot to to connect you with um with tolet
[47:27] all right question six can you discuss more about the requirements for the instrument small for example in our
[47:35] community would your team provide Tech assistance and data support so I'll I'll uh I'll start with this one and then maybe pass it over to
[47:46] Fernando for some of the technical um comments but uh you know last week you heard regarding the um
[47:57] Pandora and aeronet systems where they were um when they were at an institution um the networks provided the
[48:05] technical support and data support um we we hope in the future to have uh potentially some of these small Liars
[48:12] available and and we expect to take the same approach as those other networks in um having the same level of of support
[48:21] um but Fernando I don't think we wrote it but if you want to maybe just provide um a little bit of simple con uh
[48:28] technical context size and and maybe plug size and things like that maybe folks might be interested yeah
[48:35] definitely so um yeah basically we we're trying to get um lighter to be easy to operate generally speaking lighters are
[48:46] relatively complex instruments so we're trying to uh do our best to make it available for everybody um basically the instrument is is
[48:57] relatively small you saw it in the in the back of a pickup truck it's about 3T by 4 feet by um six
[49:05] feet um and we require about two two and a half to three kilowatts of power um we
[49:13] can adapt to different voltages and frequencies and stuff like that we we deploy these uh small systems in Europe
[49:20] and and so they use different voltages and frequencies so we we we we can accommodate to all that um our and we
[49:28] expect at some point to also um be able to um deploy these instruments in other places and and have a local partners
[49:38] that can take care of it and so we're trying to um make the instrument um reliable and and and and accommodate
[49:47] yeah to to to non- lither expert people can operate it too right and yeah I move to the next
[49:55] question question uh okay question seven with how much accuracy um is the absorption cross-sections or Sigma calculated
[50:08] because this parameter is highly variable with ambient meteorological parameters yeah so that's a a good question so um this is um generally the
[50:18] absortion the absortion csection that we use for our retrieval it's U measuring the lab um by there is a huge
[50:25] spectroscopy commun that does these type of measurements and they vary the temperature pressure stuff like that um
[50:32] it's difficult to give a one number but generally speaking let's say if you have a 1% accuracy in in our in your
[50:41] absorption crosssection you're can have about about 1% UNC that that's going to translate to about 1% um um random error in in your
[50:51] in your oan retrieval right um but it's really dependent on on this is a ballpark number right it's really
[50:58] dependent on on on the wavel selection and many other parameters okay question eight what is the on and off wavelength difference in
[51:11] the compacto zone lar I can take that one too yeah so we use uh the main weapons that we use is
[51:25] 289 289 299 um that 289 is our on wavelength and 299 is our off wavelength uh and we use
[51:34] also for um for the boundary layer we use 266 and 289 um because 266 is more absorbed so
[51:45] we get a better um less influenced by aerosols in the in the boundary layer where they're more abundant so uh yeah
[51:54] and you can use other wavelength 316 345 um to if you want to go higher right as
[52:00] you move away from the UV you have get you get less absorption uh so basically if you want
[52:07] to go higher um uh you want to choose wavelengths which are further uh away from the UV uh into the visible right
[52:16] it's still UV but uh further away from the deep UV um and yeah that's basically the answer I guess
[52:27] okay question nine can the small be operated in a mobile format to understand tropospheric distributions across smaller Geographic areas for
[52:37] example Western Lake Michigan Shoreline or are there limitations in the measurement principle that prevent this capability seems like an interesting use
[52:46] case for studies such as the elmas or Lake Michigan ozen study in 2017 yeah I can take this one and then
[52:54] John can take over for 10 one uh so um yeah definitely you can put the them as
[53:01] close as you want um and it's certainly um if you want to look at a very spatial
[53:07] variability in small areas like Shore uh like Lake Shore studies and stuff like that uh you can do that um if you put
[53:15] them really really close you have to make sure they don't interfere with each other but you can uh certainly
[53:21] synchronize them using an external timing source to make sure the laser the laser of one of the instruments should
[53:27] interlap with the other one uh but yeah for for most applications where you going to put them
[53:34] um a few miles away that's no problem you don't need to do any kind of synchronization um the field of view of
[53:41] the lighters is is very really small so if you put them a mile away uh they are
[53:48] not going to interfere right okay question 10 how do you this seems like an engineering type of question how do you
[54:00] produce the off wavelength besides the principal wavelength of the laser in the dial or do you use separate lasers for
[54:08] the on andof wavelengths to get better accuracy yeah I can take this one then um so generally we are using um
[54:19] wavelengths in the ultraviolet and the um sort of existing or commercially available Lars or lasers rather a lot of
[54:29] them that are being used the the fundamental wavelength is in the infrared um so we take that and and
[54:36] double it down into the green and then we generally double that down again so actually have quadrupled the principal
[54:43] wavelength uh to in in most of these cases and including the the small Li are down to 266
[54:51] nanometers um and we're using uh primarily Ramen cell technique um which is stimulated Ramen scattering and um to to get those
[55:03] wavelengths there are different techniques that that exist um I said the the SRS the simulative ramen scattering
[55:12] um Optical parametric oscillators or opios um other types of tunable lasers um the ramen cell technique that um that
[55:22] a lot of the tonet lighters are using um generally in in the physical space is a a cell that is pressurized with a
[55:31] certain Ramen active gas inside the cell as you transmit your laser beam as you focus your laser beam into that cell you
[55:39] you generate additional wavelengths um and and this technique has has long been discussed um and and is quite available in the literature and
[55:49] one advantage that I know I've taken I've taken advantage of of its capabilities because basically when you
[55:55] uh take a a liar system or atonement system that uses the ramen technique into the field right away when you get
[56:02] into the field you're going to know exactly which wavelengths are going to be generated from that laser it doesn't
[56:07] matter the temperature uh or the angle of anything it um it really is fundamentally the the ramen scattering
[56:14] medium that you put in that Ramen cell it it uh it drives that wavelength so um it's kind of been a nice compromise to
[56:22] um reduce sort of an additional um complex of the lar system that that we've used so there are other ways to do
[56:30] it but that that generally is is how we found is the best compromise in in getting the the best data and you know
[56:37] getting measurements almost right away when we get to a field site site great um question 11 what is the type of
[56:51] relationship You observe between aod and ozone Optical depth aod being aerosol Optical temps yeah so I could take this
[57:00] one so uh yeah so generally you can have one without the other right um you can have um a lot of aerosols and no or very
[57:09] little ozone you can have let's say dust blooms and you you might have very high aod but no particularly interesting oan
[57:17] structures now uh where we generally measure which is like Urban environments where we are interested more in air
[57:24] quality studies then you will gener observe a correlation between the two um you will see that when you have a high
[57:32] aod you will have high ozone um mostly like from local pollution sources but also you can have um smoke plumes on
[57:39] forest fires that generally also come together with high ozone levels and and yeah that's basically there is no
[57:47] necessarily correlation but when we where we measure generally you will see a correlation right yeah okay question 12 do you know of some
[58:00] toll net potential applications for sulfur dioxide monitoring so um and and I wrote this response so one thing that um is is nice
[58:13] about ozone is is generally we have uh a background concentration of ozone um anywhere between you know I said roughly
[58:22] 60 parts per billion um obviously that can go much lower and much much higher but but the the point here here is that
[58:29] there's generally enough ozone in the atmosphere all the time that we get an absorption characteristic from the
[58:36] atmosphere on our o on our ozone wavelengths back all the time so um sulfur dioxide being um at
[58:45] least where I am in the eastern US um generally does not exceed more than a few parts for billion of course if you
[58:52] are you know right at a smoke stack or WR at a sore it can be much higher but I
[58:57] mean really sort of in a well mixed free um convectively mixed boundary layer situation you're not going to get more
[59:03] than that so so just the the level of um of sulfur dioxide due to it being much
[59:10] smaller can just inherently provide a a challenge to measurement um we've had cases where we have had um Liars trying
[59:19] to measure um SO2 coming directly from an incinerator or or some major source um so the combination of um so so we do
[59:30] have toet laders that could potentially be augmented to measure SO2 sort of in an experimental mode but um just with
[59:38] the the relative limitation of um the the bulk concentration in the sulfur dioxide and the fact that a lot of times
[59:48] um those sources are so low to the ground that um there are situations where the Tet liar might not be able to
[59:54] actually get down to that vertical bin that the the SO2 is actually comprised in to actually measure it so um but but
[1:00:05] like I said there have been cases um I think I mentioned in this um response that specific you know such as a a
[1:00:13] volcanic eruption um has certainly been OB uh um observed using uh if not tonet liar differential absorption lar
[1:00:22] techniques to measure so SO2 and things like that but there might be just additional measurement um techniques
[1:00:29] such as a balloon born system that you might also want to be uh complementing if you are interested in in measuring
[1:00:39] SO2 okay question 13 how often do You observe the homogeneous or heterogeneous chemistry effects in your data so I I think the and I'll sort of
[1:00:53] answer this question more broadly just describe desing you know ozone or ozone's characteristics um majority of the time we will see um
[1:01:05] ozone in the morning hours a lot of times if it is if there's nocturnal mixing or nocturnal chemistry a lot of
[1:01:12] times we'll say the word titration um ozone levels can uh drop we we see it quite uh quite frequently in the
[1:01:21] Washington DC area below you know five or 10 parts or billion at night um and then during the afternoon hours
[1:01:30] uh when things are more well convectively convectively mixed um that ozone is is much more um homogeneous uh in particular
[1:01:39] homogeneous within the boundary layer so and then once again in the evening hours um we'll have a lot of times vertical
[1:01:47] layers that remain after the boundary layer begins to collapse so there's sort of the heterogeneity and I'm not sure if
[1:01:55] they were describing this I'm sort of answering this in in terms of vertical homogeneity or vertical heterogeneity um
[1:02:02] but the same can Al also be said about the spatial um extent of this just from what we see with um some of the surface
[1:02:09] monitors in our area where when we're in the field with with tolet data it's it's um frequently when
[1:02:16] there's a well- mixed uh boundary layer in the you know like I said often time um afternoon time period if we see that
[1:02:24] vertically well mixed in our our data um a lot of times it will match what the surface monitors in that location are
[1:02:30] seeing just giving us some additional confidence that um you know that we are understanding the uh the processes going
[1:02:37] on in the atmosphere during that time and question 14 seems to be a bit related asking about ozone production um
[1:02:46] it says in slide 25 you mentioned the term afternoon ozone buildup could you elaborate on that process in local
[1:02:54] sources yeah of course so um what we are deploying these tollet ladders for is to really understand um the the boundary
[1:03:03] layer ozone enhancements so I think I mentioned in in some of the introduction slides um we are generally pairing um
[1:03:12] when we're deploying tollet liers at least in the last few years we've tried to um support these field projects by
[1:03:19] bringing in multiple tone net Liars what that allows us to do is um to potentially be measuring the atmosphere
[1:03:28] uh upwind and maybe within and then downwind of a major metropolitan area um someone mentioned the Lake Michigan
[1:03:35] ozone study already in in one of these questions you saw the New York and the California data from last summer uh
[1:03:41] during this presentation so um we can provide a lot of context at these tollet sites I sort of think of them as these
[1:03:48] super sites they're they're generally um collocated with a lot of additional either profiling measurements or Surface measurements um so you got these super
[1:03:59] sites that are um very heavily instrumented um and then a lot of times we'll have the ability to have an
[1:04:06] aircraft that might have some Inu payload um on the aircraft that can be flying between these tollet sites sort
[1:04:13] of as an anchor point to measure the um you know Inu chemistry going on and they can measure a lot more about the ozone
[1:04:20] and and precursors on on some of these aircraft um and then tying that all together um really getting I think maybe
[1:04:27] to to the question here on on this is is using um some of the chemical transport models uh either the the reanalysis or
[1:04:35] the forecast depending on if we're in sort of field mode or or postanalysis mode um to really tie um all the
[1:04:43] measurements together and put them in context for potentially looking at um Source apportionment or um ozone chemical transport um and understanding
[1:04:52] where that ozone uh has come from there's obviously photochemical ozone production in in major metropolitan areas tolet also is able to measure
[1:05:02] ozone that might be coming from long range transport sources so we can measure the ozone but kind of
[1:05:08] determining where it comes from does take a little bit of of careful analysis and that's why um I always want to just
[1:05:14] mention if you are looking at um some of the ozone lar data uh feel free to reach
[1:05:20] out to the um the pi that that took that data for some additional contexts they might have some field not or additional
[1:05:27] um ideas on where to go for your analysis efforts thank you and question 15 are you using any
[1:05:40] Ramen cell technique for producing the off wavelength in your dial I think you spoke to this uh a little bit earlier
[1:05:50] yes yes so we we do use RAM and cell technique to generate some of our light do some other uh use other
[1:05:58] techniques um in the case of for example the this small mobile o lighter we do use uh Ramen cells and depending on
[1:06:06] which gases you use you can generate different sets of wavelengths uh most common gases are hydrogen detarium and
[1:06:14] carbon dioxide uh but yeah there are many there are other other other ones that can be use but yeah um yeah that's
[1:06:22] we we do use it and it's a common uh way of Genera in the wavelength for Di and question 16 the measurements of
[1:06:33] wind speed and direction are vital to determine the nocturnal enhancement of ozone um are they available in toll
[1:06:41] net so that this is a um a really good point so I I want to thank uh whoever
[1:06:48] was able to to to submit this question sort of understanding the um kind of the Union of the profiling of of chemical
[1:06:56] you know Trace gas species or aerosols um and and wind so you're sort of understanding in um by having these
[1:07:04] collocated both the chemistry and the Dynamics at at one time and um really getting a sort of a novel understanding
[1:07:10] of the atmosphere when you've got these um collocated together so um tonet itself does not measure winds um there's
[1:07:20] uh generally the the techniques used to measure winds um are a little a little bit of a different of a laser system um
[1:07:28] it's generally a Doppler uh shifted technique to understand that so um it it it's not as simple uh of a of a measure
[1:07:37] I shouldn't say as simple but um it's it's not where we could add an extra channel for winds there are some
[1:07:46] complexities can you hear me now yes I can hear you now okay um sorry about that I'm I'm uh at Gard today
[1:07:55] having a little bit of internet connectivity connectivity issues so uh I just wanted to make the point that tollet uh physically does not
[1:08:03] measure wins however we typically really try to collocate these measurements with existing wind profiler measurements to add to um the the ability to really
[1:08:12] enhance the the analysis between the chemistry and the Dynamics okay um question are there any toll net over India and I think you
[1:08:30] spoke to this uh currently only toll net uh network is available over the US yes so and and we uh did some uh
[1:08:41] deployments uh to Europe I think that's the only other place besides North America um but yeah certainly in the
[1:08:49] future we don't know we we are open to every any kind of collaboration so you can reach out to John if you have have a
[1:08:55] a good plan for uh measurement somewhere else and we can discuss uh right so yeah we never
[1:09:05] know okay question 18 are you using the path averaged approach besides the range resolved reproach to measure the ozone
[1:09:14] time series for Trends and variability analyses I'll I'll take this one and I'll just say one quick go back we've
[1:09:24] also had toet data from Korea uh during the cor AQ campaign in in 2016 um so and we'd love to work with
[1:09:34] with other countries um we'd have to find the right funding model to make it work um but uh we would we would
[1:09:40] certainly love to hear any ideas um so I wanted to just mention where I think this question was was
[1:09:47] getting at um understanding ozone time series and transfer variability analysis um a lot of the tet lighters um probably
[1:09:57] three4 of them at this point have been only measuring dur during sort of campaign modes or if they were in their
[1:10:04] home institution they might have only been there for a few months during that year um and then went out to a different
[1:10:10] site um so because the tonet data um we're we're producing a lot more data now we've really um since Co I think
[1:10:18] collectively have put a lot more effort um and and energy towards making these measurements uh autonomous or nearly
[1:10:26] autonomous you've seen a lot of the the curtain time series already in this presentation we're collecting a lot more
[1:10:32] data um but I think to to truly uh at this point use that data for um you know
[1:10:39] specific time series or Trend or or variability analyses might be be kind of challenging I think if you had some
[1:10:45] other data sets um that you were pulling Trends from there's a there's a lot of other networks for long-term trends I'll
[1:10:52] I'll give a plug for the endak network detect of atmospheric composition change um and the tour tropospheric ozone
[1:11:01] assessment report are both uh great resources for understanding ozone Trends um and if you had already done some
[1:11:08] Trend analysis and maybe wanted to pull in a year of toet data at a certain site or multiple years to maybe augment that
[1:11:16] analysis I think that would be fine but I would be hesitant uh for most of the toet Liars to to really pull in um a
[1:11:24] specific quantif viable uh Trend analysis and and after today's Q&A maybe we can add links to those to the
[1:11:34] resources that you mentioned and deck in the tour agre um okay um is it POS question 19 is
[1:11:42] it possible to examine the effect of greenhouse gases on ozone using the lar data um yeah I I can go very briefly
[1:11:51] over this one uh so it's it certainly depends right uh like every other question um um we we our lighter
[1:11:57] generally doesn't measure any other greenhouse gases for for example we don't measure CO2 meane or anything else
[1:12:03] so it will be hard you will need to you know put this together with other data sets and look at what um at this
[1:12:11] interaction right um and it will be dependent on on the type of greenhous gas that you have right um yeah and I
[1:12:20] don't know John if wants to add anything uh to this okay we can move on to question
[1:12:33] 20 um in the graph of Zone from the lar why are there some dates and times which
[1:12:39] appear empty I I just uh wanted to to mention that right now to that is not a a 247
[1:12:48] measurement measurement um I think we've maybe glossed over the the challenges of of just using active sensing measurements in general um we've
[1:12:59] really tried to to make a lot of measurements um but there are just practical considerations for operating
[1:13:06] Lars or lasers rather 247 especially in a field measurement so um those are are simply just either data gaps due to
[1:13:15] instrument issues or you not having an operator present A lot of times with some of these larger uh atonement
[1:13:22] systems were required by uh our specific NASA um agencies or um the the FAA for for laser operators to uh to run them 24
[1:13:34] or to to have an operator for when they're being operated um this is sort of a I'll take this to to comment on um
[1:13:42] why we've been putting so much emphasis and and effort towards the small sort of compact ozone Liars with the design that
[1:13:51] um would hopefully make these measurements a little bit more continuous without having some of these these same challenges um I'm not going
[1:13:59] to say there's no challenges but I'm hopefully mitigating them um and finding a way forward where they can be a really
[1:14:06] as close to 247 style measurement as as we can and I think um I Fernando if you
[1:14:11] wanted to comment on on any of that feel free to otherwise I'll let you uh take the next
[1:14:17] one oh no I have nothing to add really uh yeah and yeah for sure we we're trying to get as close as possible to
[1:14:24] 247 but it's challenging and and but we're getting there so yeah okay question 21 are any of these networks located at
[1:14:36] the same sites as EPA or state operated air quality sites so that we can evaluate the vertical profile in
[1:14:43] addition to the surface level ozone concentration um yeah so some of stations um are close to EPA or state
[1:14:52] operated AQ sites um because we so toet operates in these two modes right where we have generally when the instruments
[1:14:59] are not deployed in a field campaign they sit at their uh base uh where uh you know the the institution that build
[1:15:07] the the instrument uh operates in our case in my case for example we at Table Mountain facility which is basically a
[1:15:13] remote site we're near La but we don't have an EPA uh station nearby uh nevertheless uh we deployed several
[1:15:21] times to the LA area near uh EPA stations or um other California IQ sites uh and we recently took a couple of
[1:15:33] these small liers to UTA for um a campaign where we had them um the instruments were deployed at the sites
[1:15:44] from the UTA division of our quality uh and we had a ton of additional instruments planes and this
[1:15:51] was a cooperation between Nas and Noah and so we we we we do that and we try to
[1:15:57] when we deploy when we look for a place to deploy our instrument we generally want to have additional information to
[1:16:04] get a better picture so we we really look um to to deploy at EPS sites or other AQ sites already existing
[1:16:16] there hey question 22 can we get the spectral effective beam absorption absorbance transmittance or scattering within the boundary layer especially
[1:16:28] less than uh especially below 300 M yeah I I I uh responded to this one um and I I I think what maybe the the
[1:16:44] question was was getting at was just understanding how uh how low into the atmosphere or how close to the surface
[1:16:52] to tolet may be able to to probe or to profile um and there's actually I think a question later on um on asking about
[1:17:02] this so the the Practical limitations of the lar systems in general are how um closely uh that beam is able to transmit and then
[1:17:16] um how much of that beam is is effectively mapped or imaged by the telescope um so there is some physical
[1:17:27] uh there's always some physical distance between the laser uh when the laser exits the app the trailer and where your
[1:17:34] telescope is located um and you can sort of overcome this with maybe some wider field field of view or some uh reduction
[1:17:43] in Divergence of the beam um but but all of these various uh sort of engineering constraints uh do sort of limit the um
[1:17:56] the um the profiling of of of ozone Li are at the surface um we are generally I
[1:18:02] would say across the network able to produce reliable data around the 100 meter above the the surface Mark um in
[1:18:12] certain cases I I think we are able to get much lower um I also want to plug that there
[1:18:19] is a Noah uh uh chemical Sciences lab tollet system that has a scanner uh on top of its trailer where it actually
[1:18:29] scans at multiple angles along the horizon um and they are actually able to get um ozone lar at the the surface um
[1:18:37] so they are really doing an additional um engineering effort uh in it you know besides the other tollet sites to to get
[1:18:47] this um this level of of detail of ozone uh at the surface level in fact when they were they parked in a field project
[1:18:56] um I believe uh in a mountain range near um Las Vegas and Clark County Nevada and we're actually able to point the laser
[1:19:04] beam down to actually get ozone below the trailer um which is kind of interesting uh to think about when
[1:19:11] you're trying to look at ozone transport within a city and and without of a city okay question
[1:19:20] 23 would you mind please explaining the absorption by w wavelength and how it is interpreted um yeah I can take this one
[1:19:29] uh so basically dial as as John explained in the presentation Works basically transmitting like two wavelengths right uh one that is more
[1:19:40] absorbed and one that is less absorbed by the species that we want to measure in this case ozone um so um Bas looking
[1:19:49] at so we transmit these two web lends right and they get absorbed as they get transmitted through through the
[1:19:54] atmosphere and so we can look at how much one signal gets absorbed with respect to the other and we can
[1:20:02] calculate based on the slope difference how much oone is in the atmosphere um that's a basic you know
[1:20:09] explanation of how um um dial works and and we might just add in the end maybe a picture here to to
[1:20:17] show uh what we when we are talking about signals and and how this slope thing works it might be easier to
[1:20:24] explain with a picture uh but yeah that's the basic uh operation yeah we can definitely do that question 24 do we have an option
[1:20:36] for other lar observations to be involved with tollet so I will say um within uh toet we are primar I mean we're consisting
[1:20:50] exclusively of ozone lar measurements um that's a little bit uh based on sort of our mandate and how we handle the data
[1:20:59] and a lot of our archiving and formats and there just a little bit of technical aspect to that so um if there are other
[1:21:07] uh ozone lighter observations that um someone in the community is taking and they would like to be uh paired uh with
[1:21:15] with tolet or or interested in becoming a member um that's certainly something I think that we could make happen I think
[1:21:23] our our program managers would would be really excited about um but if it's other lighter observations um of other
[1:21:31] species or aerosols um it might not be as easy to kind of plug into toet but I'm I'm just generally curious um if
[1:21:40] it's other atmospheric lar observations um if if you're talking more along the lines of lar altimetry or um or things
[1:21:51] like that that's probably not the best uh option for for observations um there's a there's a few other networks
[1:21:57] that are looking at um more of these kind of uh altitude or altimetry type measurements that would probably be more
[1:22:05] useful for for both you and us to to have those uh measurements resource there okay question 25 is it possible
[1:22:17] this is about additional Trace gases is it possible to use the tol net data to measure other Trace Gases such as CO2
[1:22:24] um and from Malahide um I could take this one so the CO2 um it's more um it's really far from
[1:22:34] uh the wavelength region that tet generally operates um there are certainly lighters that measure CO2 but it's not really in tolet uh
[1:22:46] wheelhouse um uh formal height is closer it's around the 300 to 350 I think absortion uh there you have the issue of
[1:22:56] interference right because it start to oble up with ozone and ozone has a stronger absorption so you start you
[1:23:03] need um to look at the uh these absorption bounds are narrower for formal height you can certainly think uh
[1:23:11] that eventually T could look at that but uh yeah it's not I think in the near term plan uh to to go for those species
[1:23:21] uh but eventually why not right and question 26 um the spatial what is the spatial coverage of tonet including
[1:23:33] campaign observations yeah I I think I sort of hit on this a little bit in in one of
[1:23:40] the previous questions um where we are you know simply you know we're measuring ozone at a specific you know you may
[1:23:48] think of it as a super site or a waypoint for uh for satellite or aircraft observations um so we are really just measuring the
[1:23:57] ozone at those specific sites now we're measuring that vertically above the the lar um so we really have an a lot of
[1:24:05] additional um understanding of the atmosphere at those specific points but but tying in um additional satellite and
[1:24:12] model model um uh and surface measurements to kind of understand these processes further it really takes um a lot of additional
[1:24:22] measurements and and and uh and other you know things to kind of place the full context of you know if you really
[1:24:28] want to understand an air quality event um and so I think really um kind of getting at the the part that tolet I
[1:24:38] think plays a key role in is really understanding that vertical variability um and if there is for instance a you
[1:24:46] know the transport the long range transport of a pollutant you know for instance ozone into the region um your
[1:24:54] surf monitors are not going to pick that up um the chemical transport models unless they had that long range
[1:25:02] transport identified in their model um they're it's not going to be simulated so you know it's just a case where
[1:25:09] having the actual uh lar measurements the vertical measurements of ozone can really add to the context and
[1:25:17] and the understanding um of uh of some of these chemical measurements okay I see question 27 has to do about
[1:25:27] Pandora um please don't apologize we don't have any folks from the Pandora team on the Q&A today but we'll um make
[1:25:35] sure that they see this question um and we have time for maybe one or two additional questions um can you scroll
[1:25:44] down to question 34 I think that that's a relevant question can satellite measurements measure tropospheric gozone and how how
[1:25:54] accurate is it compared to toll net so the um I I mentioned in the slides earlier and we can also add that
[1:26:06] figure again um if you think about the atmosphere generally the kind of the vertical profile of ozone you've got about 90% of your ozone
[1:26:16] in the stratosphere um so that is really an we're talking about that in terms of parts per
[1:26:21] million um whereas as in the the tropospheric ozone or if we want to think about it as the boundary layer
[1:26:29] ozone or really what what tomet is measuring we're talking about parts per billion um so thousand times less um so
[1:26:37] there is a real challenge in in Satellite measurements to just due to the the physics of um the way the you
[1:26:46] know sunlight is is radiated back to the satellite sensors it's quite challenging to actually probe through that
[1:26:51] stratospheric ozone layer and get into the troposphere um recently there is a um I meent I said
[1:26:59] it was the satellite Tempo it's actually the instrument Tempo um on um the Intel sat 40e W uh uh satellite um is uh
[1:27:10] working on measuring ozone tropospheric ozone from space um I I believe that um in their current configuration the the
[1:27:19] best they might be able to do is is really measure a tropospheric ozone column um so maybe the entire
[1:27:25] troposphere or maybe two points of information in that troposphere um for data so uh they really um isn't a
[1:27:33] satellite that is able to measure what we would consider sort of ozone profiles from space the way tollet does um so we
[1:27:41] are uh currently working on some of these uh tollet measurements to basically provide context for um either
[1:27:50] evaluating the models that might go into the a priori for the eventual satellites that might measure these troposphere
[1:27:57] columns or degrading some of the tollet data and the measurements to then evaluate those um ozone measurements as
[1:28:05] they come online um so there isn't really a uh a oneto one in terms of um you know toll
[1:28:14] mat measurements validating the satellite quite yet um but we're hoping and maybe by the next time we give this
[1:28:20] seminar um we'll actually be able to show some results as compared to um uh Tempo or or another um
[1:28:27] geostationary air quality satellite satellite great and with just about two minutes left I think that will wrap it up for
[1:28:38] today if we didn't get to your question we'll answer it in written form and we'll post it um on the website on the
[1:28:47] training page within about a a week of today's uh presentation um thank you so much to John and Fernando Our Guest
[1:28:57] presenters and contributors today um anything I'll open it up to you both uh for any final words no I'll just say thanks to uh
[1:29:09] thanks to everyone um tomet as a whole is uh probably the youngest Network you will hear from during this uh five-part
[1:29:18] our set training Series so we um are always looking forward to getting any feedback on um on anything in the in the
[1:29:26] network or in the data that you're interested in um and we're trying to to grow and expand as much as we can and
[1:29:32] and hopefully we can um kind of grow and expand as the community is is interested in the data so thanks for attending
[1:29:39] Fernando yeah thanks everybody for attending and yeah we're looking forward to to expand our our Network and
[1:29:46] cooperation and feel free to reach out to us if you have any other question thank you both again and we
[1:29:54] hope that you all will join us for part five the final session in this five-part training series on Thursday August
[1:30:03] 22nd have a good rest of your day everyone
