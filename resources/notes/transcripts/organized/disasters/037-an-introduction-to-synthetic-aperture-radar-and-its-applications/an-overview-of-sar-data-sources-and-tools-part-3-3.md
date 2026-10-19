# An Overview of SAR Data Sources and Tools, Part 3/3

`https://www.youtube.com/watch?v=Dw9XFtDrgtA` · id 128 · 2:02:53 · module 5 — 037-an-introduction-to-synthetic-aperture-radar-and-its-applications

[00:01] hello everyone and welcome to the third and final session of this ret webinar series titled introduction to synthetic
[00:08] aperture radar and its applications I'm Dr Erica podest a scientist at NASA's jet proportion laboratory and I'm also
[00:16] an instructor with the arset program today's session will be an overview of sard data sources and tools which will
[00:24] be delivered by invited experts Dr France Meyer from the Alaska satellite facility and the University of Alaska
[00:32] Fairbanks as well as Heidi Christensen from the Alaska satellite facility and as a reminder this webinar Series has consisted of three sessions
[00:45] the first one was an introduction to SAR the second one an introduction to insar and today's session an overview of SAR
[00:53] data sources and tools on the Alaska satellite facility there is a homework associated with this webinar series and
[01:01] you can access it as of today on the web page for this training the certificate of completion will be awarded to those
[01:11] participants who attend all live sessions and complete the homework assignment by the due date which is December
[01:22] 4th so let's get started with today's session let's start with a review of prior knowledge SAR is an active
[01:34] microwave sensor that images the Earth's surface it uses different sensor configurations including wavelength and polarization to provide different
[01:44] information about surface characteristics the surface parameters that influence the radar signal are related to moisture and to structure SAR
[01:53] data sets include both amplitude and phase components so the amplitude is used to generate imagery that the disl
[02:00] the intensity of The Returned signal and the pH indicates the distance between the sensor and the surface and is the
[02:08] basis of interferometric SAR which can be used to identify and quantify surface deformation SAR imagery has distortions
[02:17] that are caused by that side looking geometry or nature of of um SAR sensors and um radiometric terrain correction
[02:27] adjust for both geometric and radi metric distortions allowing sour imagery to align with other geospatial data sets how to ask questions please write
[02:39] your questions in the questions box which is at the bottom right you'll have there'll be three points click on that
[02:45] and there will be a popup menu select questions and write your questions in that box and we will address your
[02:54] questions at the end of this session feel free to answer your questions as we we go along and we'll try to get to all
[03:02] of your questions during the Q&A session the remaining questions that we cannot answer we will answer them in the Q&A
[03:11] document which we will post to the training website in about a week so the objectives of today's
[03:23] session are the following to understand the role of the Alaska satellite facility Within NASA's Earth data organization to be aware of the wide
[03:36] range of SAR data available at the Alaska satellite facility specially analysis ready data to know how to
[03:44] search for data SAR data available um on the Alaska satellite facility and how to access analysis ready SAR data sets
[03:54] including archived data and customized data generated on demand today's guest trainers are Heidi Christensen who's a GIS specialist at
[04:08] the Alaska satellite facility and Dr France Meyer who's a professor at in remote sensing at the University of
[04:14] Alaska Fairbanks and chief scientist at the Alaska satellite facility as well as member of the nysar science team I'm
[04:24] extremely grateful that they'll be sharing their expertise so welcome Heidi Christensen and Dr France Meer thank you Erica my name is France
[04:39] Meer I'm the chief scientist of the Alaska satellite facility and I'm also a professor for remote sensing at the
[04:45] University of Alaska Fairbanks and in the next few slides I want to just briefly introduce the Alaska satellite
[04:51] facility to you and tell you a little bit who we are and what we are doing to
[04:55] support the science community and why this is a really good time for you to get started with looking into SAR as a
[05:01] resource for your work so the Alaska satellite facility is one of so-called 12 NASA daaks and DAC
[05:10] in this case stands for distributed active archive centers so what NASA has decided to do is is to spread out their
[05:18] archives uh to a variety of different locations and a variety of different of different taxs that are then supporting
[05:25] different parts of the science Community ASF specifically is shown here on the slide on the on the top left uh let me
[05:32] turn on my laser pointer real quick for you so this is asf's up up here we are
[05:38] located in Fairbanks Alaska and we are uh the DAC for SAR for synthetic aperture radar remote sensing data
[05:46] sets so the Dax overall they are custodians of NASA Mission data or NASA linked data sets and they ensure that
[05:55] these data sets are are kept safely uh and are being easily made accessible to to the science community and so again
[06:03] ASF is the data center for SAR data in that space uh we provide reliable and robust services to the science and
[06:12] applications Community uh to discover access and work with the data sets that we are the custodians of ASF does a lot
[06:21] of user engagement also with the community Through myself as the chief scientist through uh an organization that's the so-called user working group
[06:30] um this is a close to an Advisory board that works with ASF to make sure that we
[06:35] are providing good services to the community and of course as ASF also has a user support uh group uh that is
[06:42] working with you is answering your questions uh does trainings Etc to the community so ASF specifically is the
[06:52] Alaska satellite facility deck uh ASF sits in faing salasa as mentioned before we've been around since 19 1991 uh
[07:01] initially acting as a downlink uh station for for for NASA so we operate uh these dishes that you see on the
[07:08] bottom of the slide uh to provide space communication Services uh to NASA linked uh Satellite Systems uh but we also are the data
[07:17] center itself and currently ASF is housing about 23 pedabytes of synthetic aparture radar data sets in its archive
[07:26] most of these data sets are sitting in the cloud in in through a partnership of NASA with the Amazon Amazon web services
[07:33] Cloud so all of our data sets are available for immediate download and immediate uh use ASF has probably be been uh known to
[07:44] you for a couple of reasons one of them is we are a host of a copy of the global
[07:49] Center one archive so we're working with the European Space Agency to provide access to this valuable resource Senter
[07:58] one Senter one which is a a cand s system uh that was launched by the European space agency and is maintained
[08:06] uh by Issa um for the benefit of the community um also important for ASF is that we will be the the host of an
[08:15] upcoming Mission upcoming NASA Mission the so-called nysar Mission and we will be hosting all level zero to level two
[08:22] lbn SAR data coming out of nysar uh so I'll talk about this in a few uh slides
[08:28] um here in a few minutes um ASF has a total of 41 years worth of sard data for
[08:34] your consumption and all of these data sets are available through this URL at search. search. as.edu and when you access these slides
[08:44] uh later this is a live link and gets you directly to our search interface so the SAR Community or the
[08:52] the space of synthetic aperture radar has been really exciting for the last uh few years uh and it's because we have we
[08:59] have a series of satellite missions that are providing globally observed uh free and open sire data sets to you uh one of
[09:07] the notable ones I mentioned earlier is Sentinel one uh this is a mission that has been around since 2015 and 2016 and
[09:14] has been providing this Global access uh to free and open SAR data sets that you can see here on the right hand side soon
[09:22] to come in spring or early 2025 is nysar uh which I'll I'll talk about in a few slides this is a NASA um um
[09:33] supported mission in a collaboration with the Indian space research organization ISRO uh launch dat this in 2025 and will provide similar quality
[09:43] data uh meaning that the the data sets will be Global um will cover the all land masses once every 12 days and will
[09:52] provide all these data sets for free and similar missions are also in the works the European space agencies is
[09:59] working on an l-band mission called Rosel um which will uh launch also in the next few years and also will provide
[10:06] free free and open data sets so this the space of free and open data is becoming more popular and ASF provides access to
[10:16] the many of these modern s sensors that provide these regularly sampled free and open uh characteristics on a global
[10:25] scale so one of these missions that we support is Sentinel one as mentioned senel one has been available since 2014
[10:33] Heidi Christensen will talk a little bit more about the specifics of this mission for me the main uh key Milestones here
[10:40] is as mentioned before the data sets are free and open this mission was particularly designed for interferometric are uh which U some of
[10:49] you may be using so it allows U users to monitor surface displacements on a global scale and it images all land
[10:57] masses uh coastal zones and shipping routes every 6 to 12 days so it's a very exciting Mission uh Sentinel 1 is also
[11:05] what's called a constellation of satellites in order to provide its Global capability they are using specifically a constellation of two
[11:13] satellites um initially launched as Sentinel 1 A and B um with the two constellation uh system it can provide six day sampling
[11:25] over Europe over the Arctic Ocean and for some um Global Hazard locations uh in 12-day sampling for the globe unfort
[11:35] fortunately one of those two satellites Sentinel one B had a failure in December 2021 but uh luckily for all of you there
[11:44] is a displacement a replacement satellite in the works and so sen 1C uh is slated for launch uh late this year
[11:51] so uh hopefully very soon uh we have a constellation of satellites available for you again along a similar vein um we we will be
[12:02] hosting nysar nysar stands for the NASA ISRO uh SAR Mission so this is a collaboration between NASA and the
[12:13] Indian space research organization um it will provide uh it will launch in in 2025 and it's going to
[12:20] be the first spaceborn two frequency L and espan S Mission um out of the L and espan data ASF will be hosting the
[12:29] global lban data set so all of the lban data will be will be available through ASF also there um Nissa will provide
[12:38] full Global 12-day coverage in both ascending and descending um and um ASF will be a data center for the elban s
[12:47] data we also are a ground station so we are receiving some of these data sets directly uh to Fairbanks through our
[12:53] Grand Station antennas antennas ner a revolutionary mission many ways one of them is simply by the sheer
[13:02] amount of data that Nisa will provide Nisa will bring in about 50 pedabytes of data per year or 150 pedabytes of Earth
[13:09] observation data in three years and all these data sets will also be free and open so it's very exciting mission that
[13:17] many of you that will accelerate the research that many of you are doing so with with this or sort of
[13:28] suffice to say that with all of these missions The Archives of free and open data sets are exploding rapidly uh so
[13:36] for ASF alone in 2014 our total archive was about one pyte currently we have an archive of about 23 pedabytes available
[13:44] and in just a few years our archive will grow another factor of 10 to about 180 pedabytes uh in our archives so there's
[13:53] there's a tremendous amount of free and open SAR data becoming available that will keep the science and applications
[14:00] Community busy uh for a very long time and because of the uh volume of data um and to make this volume of data
[14:09] available to you in an effective way uh we have uh migrated all of our archives into the cloud and there's open this
[14:15] opens up some of the the tools and services and capabilities that Heidi Christensen will talk about here
[14:23] shortly so ASF has focused very strongly in the last few years to develop efficient mechanisms that allow you to
[14:32] access and work with this large volume of SAR data sets um um effectively and so we focused on a a
[14:41] sort of a cloud-based archive so all of the data sets that come in uh to ASF uh
[14:46] they are now stored in the cloud in the Amazon web services cloud and then based on this cloud-based archive we have
[14:53] developed uh efficient mechanisms to discover these data to access them and then also build some services on top of
[15:00] these data sets that allow you to create value outed products uh and and work with data sets uh um um more effectively
[15:08] whether you work in the cloud or whether you prefer working on your local machine and so for many of the many of
[15:15] these Cool's ways for how you can find and work with data sets through ASF I will hand it off now to Heidi
[15:22] Christensen who will tell you all about how to find data sets access them and do some custom processing uh with with
[15:30] these very large volume data sets and so Heidi I'm handing it off to you thanks FR ASF has quite a range of
[15:42] data that's available in our archive we serve synthetic aperture radar data that was collected by NASA itself but also
[15:49] collected by partner agencies including the European Space Agency the Japan Aerospace Exploration Agency and the Canadian space
[15:57] agency most of the data in our archive is collected by sensors that are on a satellite they're orbiting the Earth and
[16:05] are on a continuous path in collecting data we do however have Airborne sensors as well these missions have the SAR
[16:13] sensor that is mounted on an airplane and the footprint is much smaller and generally these are much more targeted
[16:21] missions we even have data from a mission that was mounted on the space shuttle there are a range of different
[16:29] sensor configurations that can be used for SAR and when you're looking at a data set it's important to know what
[16:34] these configurations are most of the data in our archive is collected in either C or L band C band has a
[16:43] wavelength of about 5 to 6 centimeters whereas L band is much longer at about 25 cm we do have a few data sets that
[16:51] are in other bands but they're they're very few and far between you're probably going to be encountering mostly C and L
[16:57] band data SAR can collect data using different polarizations and the different polarizations tell you different things about the characteristics of the Earth's
[17:07] surface similarly there are different beam and acquisition modes that can be used that also tell you different things
[17:14] so if the incidence angle is different that tells you different information about the targets that the signal is
[17:21] interacting with on the surface so if you're doing a Time series analysis in particular it's very important to make sure that you're using
[17:29] a consistent data set that it's the same preferably the same Mission and using the same mode and
[17:39] polarization the repeat intervals vary for the different missions some of them have fairly frequent repeat intervals so
[17:46] some of the more modern satellite missions have fairly dense coverage whereas some of the older missions you
[17:52] may only get an acquisition over your area of interest every month or so so it's it's important to beare aware that
[17:59] not every Mission provides the same amount of coverage all of the data that ASF serves is free and open and can be directly
[18:09] downloaded most of our data sets are actually hosted in cloud storage and some of the data sets can be accessed
[18:16] directly where they're sitting in cloud storage so if you're into cloud computing and you want to explore that
[18:21] option a little bit more check out the link to learn more about direct S3 access I'll be going into a lot more
[18:30] detail on the access options a little bit later and we'll be doing a demo with one of the web-based interfaces um but
[18:37] there are a lot of ways to access the data and it's all easily available ASF supports quite a range of
[18:45] missions including those that have continuous coverage such as the very first space born SAR Mission which was
[18:52] sead in 1978 all the way through to currently active missions including Sentinel 1 and a a 2 for a sentinel one we actually have
[19:02] the entire Archive of data that's been acquired from that mission from 2014 to the present for the alos 2 palsar 2
[19:10] sensor we're actually even though that mission has been around for about as long as Sentinel 1 we are just now
[19:17] getting the data from jaxa so we're in the process of ingesting that into our archive so hopefully by the end of this
[19:23] year or early next year you'll be able to search for the alos 2 palsar 2 data which are are pretty excited about we
[19:31] also support quite a range of historic missions starting from the 1990s onwards there's a lot of data in our archive
[19:38] again with different wavelengths and different sensor configurations so a lot to choose from we also support a number of discret
[19:46] missions including the shuttle born missions and the Airborne missions for the Airborne missions because they're so much closer to the Earth the footprint
[19:54] tends to be a lot smaller and so these missions are usually for Fairly targeted project projects uh specific events or
[20:01] particular areas of interest you can learn more about all of the SAR missions that ASF supports on our website
[20:08] including the nysar mission which is coming up soon and I'll be talking about that a little bit more
[20:15] later The Sentinel One mission is the most commonly accessed data set that we serve this is an effort of the European
[20:23] space agency and European commission and as part of the cernus initiative of satellites many of you may be familiar
[20:30] with some of the other Sentinels uh Sentinel 2 is the optical Mission and Sentinel 1 is the SAR Mission it
[20:36] provides Global coverage with c bandar and it was designed as a two Satellite constellation the first satellite
[20:43] Sentinel 1A was launched in 2014 followed by the second in 2016 and we had five glorious years of having those
[20:51] two satellites collecting data each one of the satellites has a 12-day repeat cycle and they have the
[20:57] same orbit pattern but it's offset by 180° so this allows that satellites to collect data every 6 days potentially
[21:07] for most of the globe the acquisition plan was for a 12-day interval but over the European Union and some other
[21:13] geologically active areas there there was six- day coverage during that time because these are polar orbiting satellites we also see a lot more
[21:23] coverage closer to the poles so if you're interested in amplitude data in particular there are are a lot of repeat
[21:29] passes even if they're not quite from the same path you can get quite a a dense time
[21:35] series now unfortunately Sentinel 1B is no longer collecting data um its Mission ended at the end of end of
[21:43] 2021 and Sentinel 1A is also reaching the end of its life and will need to be deorbited in the not too distant future
[21:52] so Sentinel 1C is waiting in the wings and is due to be launched this at the end of this year and 1D is also ready to
[21:59] be launched once there's a a uh launch vehicle ready um so we're hoping that at least one of those satellites will be in
[22:07] orbit by the time we lose Sentinel 1A and that would allow for a nice continuous data set um but we're we're
[22:15] at this point it's it's hoping for the best for this Mission new data must be available to download within 3 days and
[22:24] in general we actually see the data available within 24 hours of acquisition the data is free and it's easy to
[22:31] download we provide both the raw and the level one products for for download so Isa has done a lot of the
[22:39] heavy lifting in terms of processing to provide level one products from the raw data so the two level one products that
[22:47] we have in our archive are grds which are ground range detected products and slc's which are single look complex
[22:54] products there are two components to assar data set the amplitude and the phase the amplitude is how much of the
[23:01] signal is sent down that actually is returned to the sensor to be measured and the phase is where that signal is in
[23:07] its wave cycle when it returns to be measured if you're interested in the imagery part of of SAR and looking at an
[23:15] image you're you're essentially looking at the amplitude part of that data set whereas the phase is used for um SAR
[23:23] interferometry where you're comparing the phase measurements and and looking to see if the ground has moved in
[23:30] relative to the sensor and other there are a number of other workflows that also consider the phase
[23:38] measurements if you're only interested in the amplitude part you may be best off using the grd the grd is a a single cohesive image
[23:48] there's one geotif for each polarization and it is fully geore referenced so if you bring this into
[23:55] your into your GIS environment it will show up where you would expect it to be uh there are square pixels it can be it
[24:04] can be projected into whatever projection you need but it's important to keep in mind that there are
[24:10] distortions that are inherent to the SAR data set due to the side looking acquisition approach and so if you want
[24:19] to use the grd data and the amplitude data in comparison to other data sets like Optical imagery or Institute data
[24:28] you will have to correct for those distortions a common approach for doing that is radiometric terrain correction
[24:34] which uses a digital elevation model to not only adjust for the the terrain um distortions but also to
[24:42] normalize the amount of back scatter based on the actual surface area that is contributing that back scatter um back
[24:50] to the sensor so the grds are A Fine Place to Start if you want to do a radiometric
[24:56] terrain correction the other nice thing in the in the slc's you can see that there is this um grid
[25:04] and this delineates the individual radar bursts the slc's and grds are actually made up of a number of different
[25:13] individual radar bursts that have been packaged together into one file to create a much larger frame most slc's contain about 27
[25:23] individual individual bursts and in the SLC all of that individual data is retained so even though the bursts
[25:32] actually overlap if you look above and below the the guid line that data is repeated because there there is
[25:39] overlapping data so in the grd any of those overlapping portions are averaged together so you just get a single a
[25:47] single output image same thing with the sub swas if they overlap that's all just combined so that there's one value per
[25:56] pixel for the SLC the important thing to know is that it retains the phase information the grd
[26:05] loses that phase information it's only the amplitude while the SLC has both the amplitude and the phase so if you want
[26:11] to do interferometry or anything else that requires the phase measurements you'll need to use the SLC it's a much
[26:18] larger file size than the grd um but so if you're only interested in amplitude again it may be easier to start with
[26:27] that grd but for phase meas phase measurements you'll need the SLC historically we've not had a lot of
[26:36] analysis ready products available for SAR data sets but that's really been changing and in the past 5 years in
[26:42] particular we're seeing a lot more analysis ready products that are available to the public we have a couple of different
[26:50] main Pathways of providing analysis ready data the first is a pre-processed data set that is archived and ready for
[26:57] download load but we also have on demand processing available so for any Sentinel one acquisition that's in our archive
[27:06] you can submit that for OnDemand processing to either RTC the radiometric terrain corrected products or to an
[27:14] insar insar product in addition this is fairly new um as I mentioned all of the slc's are
[27:22] actually made up of individual bursts and those can all be processed individually as well so we now offer a
[27:29] way to search for The Sentinel one individual bursts and you can submit those for processing to insar as well uh
[27:36] currently it's just insar but we do hope to have RTC processing available for bursts in the not too distant
[27:44] future the Opera project at JPL actually generates RTC products based on individual Sentinel one bursts this is a
[27:54] new project they just started the uh last October so we have just over a year of data now where every Sentinel one
[28:01] acquisition except for Antarctica has a an RTC product that is processed and in our archive so you can search for it
[28:09] download it and it's ready to use the alos palsar mission ran from 2006 to 2011 and originally we just had
[28:18] a subset of the data and all of the products that were in that subset we processed to RTC and had those products
[28:25] available in our archive so those are still there and available to search since that time we've now
[28:32] acquired the entire Archive of alos palsar imagery and um only the original ones have the RTC so you may
[28:43] not find a Terrain corrected product for every product that you search for but for most of North America and the
[28:48] northern regions especially there's fairly good coverage with the terrain corrected corrected products the Arya project is another
[28:56] project that is at JPL that provides Sentinel one gun WS which are geocoded unwrapped interferograms these are over specific
[29:06] areas of interest um but they tend to be geologically interesting places so if you're looking at volcanoes or
[29:13] earthquakes uh you can check out the Arya S1 GW archive there are more than a million products in there and they um
[29:21] cover these areas that that are geologically interesting so there may already be an interferogram that's been generated for your area of
[29:30] interest uh lastly the UAV vsar Mission which is one of the Airborne missions has a lot of analysis ready data that's
[29:37] part of many of the missions so again these are much more targeted but if they happen to be in your area and time
[29:43] period of interest um it's a very rich data source to use I do want to make a quick shout out
[29:53] to nysar which is due to launch in 2025 uh the earliest possible launch window is in February and this is a
[29:59] joint venture between NASA and the Indian space research organization or ISRO this will be an l-band Mission
[30:06] which has l-band has much greater penetration through canopy and soil than the cband missions do and what's
[30:14] interesting about this this mission is that it also has an sban sensor it's not going to be collecting data globally
[30:21] there'll be global l-band data but for the sand it's mostly over India and a few other particular areas of interest
[30:29] and we're really excited to see how um this sand data can be used for research applications it's a fairly unusual
[30:38] sensor to to have on a on a spaceborn mission and what's really cool is that there will be Acquisitions for both L
[30:46] and sand in those areas and so the ability to compare and contrast those data sets will be really
[30:53] interesting it's set to have a 12-day average repeat cycle which will be which is this uh similar to The Sentinel one
[31:00] acquisition plan so it will be a nice complement to the the cband coverage that's already provided with sen one
[31:08] what we're we're really excited about is the fact that analysis ready products will be produced as part of the mission
[31:15] so right away as the data is acquired it will go through a processing step and quite a range of analysis ready products
[31:22] will be available in our archive just from day one there is a suite of sample data products that's available at jpl's
[31:30] website and we've also put together some guidance for working with these sample datas so if you want a sneak peek on uh
[31:37] at how these data sets will look it's uh these sample products are generated using alos 2 Data so it's l-band data so
[31:45] similar to to nysar um but it's in the nysar format so um you can get accustomed to how you will be working
[31:54] with these data sets if you want to uh take a look at that at this point I'd like to move into the
[32:02] the nitty-gritty of how we actually can search for discover and download the data sets that we're interested
[32:10] in ASF data search provides access to all of the data sets that ASF archives it's really specialized for looking for
[32:19] SAR the vertex interface is a map-based graphical user interface that's on the web that you can use to find all of our
[32:28] data sets in the background there's actually the ASF search python package which is doing the work of finding the
[32:34] data and you can also make use of that package if you have scripted workflows that you'd like to include download and
[32:42] search functions within we also have the ASF search API if that's your preference there is another graphical
[32:52] user interface that's available out there that allows you to find these data sets as well and this is the earth data
[32:57] search platform now the difference here is that this gives you access to all of the data from all of the dacks so you
[33:05] can find all of our Sor Holdings but you can also find all of the other data sets
[33:09] that the dexs host uh because of that if you're familiar with Earth data search and you're comfortable with this environment
[33:17] it makes it very easy to to also search for SAR there um and if you're working on projects that have resources that you
[33:26] want to pull from a number of different STX this is very convenient it can however be a little
[33:31] bit overwhelming especially if you're new to SAR and not sure exactly what Search terms you need to use um so you
[33:38] might want to start with the vertex portal and then once you get more comfortable and if you'd prefer to work
[33:43] in Earth data search then you've got that knowledge of how to find what it is that you're actually looking
[33:48] for so the convenience here is that it provides access to all of the Holdings from all of the decks all in one
[33:55] place similar to the vertex data portal in the back there's the Earth access python package that's doing a lot of the
[34:02] work um so you can make use of the earth access python package yourself in your scripted workflows at this point I'd like to
[34:13] transition to a demo and we will be working in the vertex environment um in in a web browser and in vertex there's a
[34:22] little help button that links to all kinds of information including video tutorials so if I go through this too
[34:28] quickly or you kind of want to explore a little bit more in detail I encourage you to check out those
[34:33] tutorials and we'll also be searching for the Opera RTC S1 products and there is a story map tutorial that goes step
[34:40] by step through looking for the Opera RTC products and also provides a lot of other information for um accessing and
[34:49] and making use of these data sets so that's another resource to check out so here here I've opened a tab with
[34:59] ASF data search and I can find that at search. asf.com graphic search for Sentinel 1 data now you'll note that there
[35:13] are almost 20 million files available so using search filters are going to be really really important the one thing that you'll need
[35:23] to do in order to download data is log in using an earth data login profile if I'm already logged in but if
[35:31] I wasn't you would see a prompt to sign in and if you don't already have Earth data login credentials you can
[35:39] register and it's it's quick and easy it's free and then that gives you access to all of the data that's served by all
[35:45] of the different dacks so not just ASF any deck that you go to you can use this
[35:50] one single unified credential the first time you log on with your Earth data login credentials invert Tex you will need to accept the
[36:00] end user license agreement for ASF but that you only have to do that once and then it's saved in your profile and then
[36:06] you're good to go you can download anything from our archive a great way to restrict your search results is using a geographic
[36:15] location so I can zoom in by default if I draw on the map there's a box I can
[36:22] also go to this area of Interest menu and select the option to place a point a line a polygon a circle or I can also
[36:31] upload a geographic file a geospatial file so if I already have a shape file or geojson or kmz for my study area I
[36:41] can just upload that use that as my my criteria for the geospatial extent and I'm good to go I can also just search
[36:49] for a location too so if you're interested in a particular city or country or County um you can search the
[36:55] map for that location there are also additional filters available and these filters are different based on the the mission that
[37:06] you're searching for but one thing that pretty much all of them have in common is the ab the ability to use a date
[37:13] filter so if I'm interested in only recent data I say the last year I can select October 1st of
[37:21] 2023 and if I leave the end date blank that shows me everything up to present if I want to specify an end date I can
[37:30] do that as well at this point already my the number of expected files are down to just over
[37:39] 2,000 for the Sentinel one another way to restrict the data is by selecting the file type so if you're not interested in
[37:48] looking at the raw data you don't have to have that in your search results I can restrict it to just the S single
[37:55] look complex data sets or also the grds now you'll notice that there are a couple different options or four
[38:01] different options for the grds um there most of the grds that are collected over land will be these grd HD
[38:10] which is high resolution dual pole but there are some other modes as well so mid-resolution dual pole and then single
[38:17] pole imagery both in high resolution and mid-resolution and usually that depends where on the earth the data set is being
[38:24] collected so for most cases if you're looking over land the grhd will give you all the returns that you're looking for
[38:32] uh but if you want to make sure that you have them all you can check all of the
[38:37] boxes at this point I'm now at 5 6556 files and I'll go ahead and click the search button and my search results come
[38:46] up in in the pane at the bottom of the screen and the results are listed on the
[38:52] left and you can see that they're kind of combined so if I click on on one of
[38:58] these entries it links to both the SLC and the grd now it's important to note that these browse image that browse images
[39:07] that you see are actually from the grd so if you only search for slc's you won't actually see any browse imagery um
[39:14] so if that's important to you or if it helps you make sure that it's covering your area of Interest well um you can uh
[39:23] choose to also search for the grds as well as the SLC even if you're only interested in the
[39:31] slc's so if I click on an item in the list it shows me the the footprint on
[39:37] the map and also a browse image if it's available I can also just click on a footprint in the map and that will
[39:47] select an item in the results list that has that footprint one feature in vertex that I really like is the more like this button
[39:58] so if I find a footprint that covers my area of Interest well and I want to build a Time series just using that
[40:04] footprint I can just click the more like this button and it will restrict my search to only those those images that have that
[40:16] same footprint and basically what it's doing is just adding an additional filter that shows the path in the frame
[40:24] that you selected so now I I've got a list of of 30 different scenes which provide 60 different files 30 slcs and
[40:35] 30 30 grds if I'm ready to download there are a few options I can just click the
[40:42] download button here and download individual files one at a time or I can add things to my download
[40:51] cards if I click on this icon both the SLC and the grd or any if I haven't
[40:58] restricted it all of the items that are bundled in that item will be added to my download
[41:05] download queue if I only want the grdds I would have to um restrict my search that way but I can also if I want
[41:16] everything that's in my list I can click the Q button at the top and add 60 files to my
[41:24] download if I visit my download cu I have the option to remove anything so if there's something that I decide that
[41:31] I don't want I can I can just click the x button I can go through and download
[41:37] each file individually or I can make use of some of the bulk download features that are available at the bottom of the
[41:46] screen if you're using Chrome there is the download all option that is very handy it makes use of the
[41:53] multi-threading capabilities that Chrome has in its browser and you can just click on this button it'll go through
[42:01] and download several items at a time whatever your browser can support until you've downloaded everything in your
[42:09] list so for most people that is a very effective way to do your downloading there is also the option to download a
[42:16] python script and this is very handy if you are not if you're doing a search on a device that you don't actually want to
[42:23] use to download the data you can just download The Script email it to yourself or to a colleague and if they have
[42:30] python on their machine and it's on their path they can just run that script it'll prompt you for your Earth data
[42:37] login credentials and then go through one by one and download all of the files in your list there's also an option to copy URLs
[42:46] because these data sets are actually hosted in cloud storage you can just copy the URLs and if you already have a
[42:53] script that that uses URLs to to download online content you can just add that into the script paste that right
[43:03] in all right I'm going to clear out my download download queue and now we'll do a search for the
[43:12] Opera RTC products so I'll just open a fresh browser Tab and instead of Sentinel one I'll select Opera
[43:22] S1 now there are two data sets currently in our archive that are that are generated by the Opera project there are
[43:30] cslcs and rtc's I'm going to go ahead and draw an area of interest and I've got 1052 files that
[43:45] come up now some of those are going to be be cslcs and the cslcs are not analysis
[43:51] ready data it's a co-registered SLC that does streamline the generation of insar products products but um we're interested today in in the
[44:00] rtc's so a quick way to restrict your search right away is just to select the radiometric terrain corrected or RTC
[44:08] products instead of everything that's available and this brings my total files down to 1,88 in my search
[44:20] area go ahead and search for that uh keep in mind that the RTC products are available starting
[44:28] October 4th 2023 So currently we've got just over a year of data that's available I'll click this button to zoom
[44:36] to my my area of interest and I'll point out one other thing here so there is actually an option to set a limit of how
[44:46] many search results you return I tend to have this set to a thousand because I'm tend to be searching for a lot of things
[44:52] or larger areas but if you have limited bandwidth and you can have a nicely refined search you may be better off
[45:01] setting it to the lower option the 250 files because that it will complete a lot more quickly um if you're searching
[45:09] for a lot of data and you want a lot of results you can set it up to as high as
[45:14] 5,000 but be aware that that does take a while um longer to to complete that search so if you're limited in bandwidth
[45:23] or if you have a slower connection you may want to stick to the the lower limits all right so you can see right
[45:31] away that these Footprints are very different than the footprint size of the the full Sentinel one image so there are a lot more results
[45:42] and so again filtering is going to going to be really important each one of the Opera products has quite a number of different
[45:52] files Associated and for most people the the files of Interest are actually the geotiffs the the the polarization and
[46:01] the geotiff file so for each polarization there's one file and what's cool about the Opera data sets is if I
[46:08] want want to uh select everything from my que and add it everything from my list and add
[46:14] it to my queue I can actually add by product type which is super handy U but before I get to that I I want to point
[46:22] out that we no longer have the more like this button instead there's a source data button so if you've selected a
[46:30] product you can click the source data button and that shows you which of the slc's that data was extracted from so
[46:37] the the burst that was used to generate the RTC you can then place it in within a a specific Sentinel one SLC
[46:47] product so um the more like this button isn't available there but you can still do essentially the same thing by using
[46:56] this Opera burst IDs field and there's a little icon right next to that that I can click and add the Opera burst ID to
[47:05] the search so now if I go into my filters you can see just like similar to path and frame it adds that filter and
[47:14] I've restricted my search now to only 32 files so I have a nice little I have a nice little time
[47:23] series actually I didn't press the search button I have a nice little time series now of 32 scenes over this one
[47:31] area and the nice thing about the the burst IDs is that they always have the exact same footprint so SLC Footprints
[47:40] can kind of migrate around they may include a few more bursts on the top or the bottom so it's not always exactly
[47:46] the same footprint whereas the bursts are always located in the exact same place every single pass they might be
[47:54] included in a different Source SLC but the individual bursts always overlap with each other so it's really handy for
[48:02] time series analysis because you have a very co-registered stack so now if I want to add data sets
[48:12] to the queue again I can add all of the associated files by clicking this button here or I can add individual files or
[48:22] directly download individual files or I can add everything to my quue either all of the files that are in the
[48:31] product packages or again I can add by product type so this is a really handy feature I can just go in and add all my
[48:38] VV images all my VH images that's all I want and now I've got a download cart that's ready to go that just has the
[48:46] products that I'm interested in again the the download options are exactly the same I I still have those
[48:55] the bulk download op options or the individual um browser based download options at this point I'm going to
[49:04] transition back to my slide deck so now we're going to shift our attention to more of the on demand
[49:12] products and the the ways that you can order data if there aren't already analysis ready products that meet your
[49:20] needs ASF offers a number of different on demand products for Sentinel one they include radio metc terrain correction
[49:28] insar which uses the full Sentinel one level one SLC product as an input and then also burst based insar where you
[49:37] can select just the particular burst that you want to process we're also working on multiburst processing and that should be available
[49:46] soon and this allows you to select a a suite of individual bursts that are all contiguous with within the same path and
[49:56] merge them together before doing insar so it will really allow you to Target just the area that you want if you are
[50:04] interested in more than just a burst based size but less than a full Sentinel one SLC level one scene
[50:15] this will provide an excellent option so the platform that's working in the background when you order an on
[50:22] demand product is asf's hype which is the hybrid pluggable processing pipeline anytime you see this icon when
[50:32] you're searching in vertex that indicates that the product is suitable for an for creating an OnDemand product we have a lot of documentation
[50:43] available you can this QR code takes you to our hype docs which has all kinds of information on the platform the products
[50:51] that you can generate and includes links to all kinds of tutorials we're going to move back into vertex for
[51:00] another demo um but before we do that I do want to point out two tutorials there the RTC on demand and the insar on
[51:07] demand tutorials each one goes through step by step how to search for submit and download OnDemand products either
[51:16] for RTC or insar um it's very step byep so if you missed anything during this presentation you can go back and work
[51:23] through it at your own pace so here we are back in vertex because I'm logged in with my
[51:32] Earth data login account it not only gives me access to download the data sets but it also allows me to do things
[51:39] like save searches which can be pretty handy so if you do a search and you want to save it for later or share it with a
[51:45] friend you can save your search and come back later and select a saved search so I'll launch this ridgerest search
[51:57] and zoom to my area of interest and you can see that my save search has kept my
[52:02] area of interest but also all of the filters that I applied so it's got my date range my
[52:09] file types and all of that information is is saved I'll point out that if you do want want to share a search you can
[52:18] always just copy the URL entirely and send that to your colleague if they put it into their browser they'll come up
[52:25] with the exact same Sear search results so again we're searching for Sentinel one data and here I see my on
[52:35] demand icon if I click on that the only option that it presents is the RTC option and I can submit either the SLC
[52:45] or the grd for processing now the reason why I don't see insar as an option is because insar
[52:53] requires pairs of images and this is just a single image so there are a couple of different ways that that
[52:59] vertex helps you find pairs of images to submit for insar but for now I'm just going to go ahead and submit my
[53:08] grd RTC job and you can see that now one item has been added to my on demand
[53:17] queue I'm going to use the more like this button to uh restrict my search to just this
[53:24] footprint and if this area there was an earthquake in 2019 and I know that this acquisition was taken just before the
[53:34] earthquake occurred so if you're doing an interferogram for an event a specific event Like An Earthquake often you want
[53:41] to start by creating an interferogram that sandwiches the event as closely as possible before and after so that the
[53:49] effects that you're capturing in terms of deoration are mostly due to just that one event so I know that I want to use this
[54:00] particular granule as as an input for one of my for one of the items in my pair so in that case a handy tool is the
[54:11] Baseline tool so I'll select that option click the Baseline tool and then this will show me all of the other
[54:20] Acquisitions within my date range that I selected that will that would be appropriate for creating an insar pair
[54:29] so the this selected item is is shown with this big black dot and then all of these other smaller gray dots are
[54:36] potential potential pairings so this one is was acquired 12 days after the initial image and I'm going to go ahead and click on the on
[54:48] demand button which now shows me the option to submit for insar so I can add this pair to my on demand key and so
[54:57] I've got two things in there now and I'm also going to add the 24-Day pair as well if I open my on demand
[55:15] que I now have two tabs that are displayed and I can scroll down and see what what items I have in my list so so
[55:26] for RTC I'd added that single item and for insar I'd added those two pairs each one of these on demand types
[55:36] has different processing options that are available uh if you're interested in learning more I I definitely encourage
[55:42] you to take a look at that RTC on demand tutorial it goes through in much more detail than what I can cover today what
[55:49] all of these options are and how that might impact your output so you can choose between gamma not or Sigma not
[55:56] radiometry uh the three common scales for SAR power amplitude and decibel and then also the pixel spacing you'll see
[56:05] here that there is a a credit listed afterwards and this is because uh to make on demand processing available to
[56:13] the widest possible range of users there is a limit how much you can process in a month so every user has a a a 10,000
[56:22] credits that they can use to process a a product and this gives you the indication of how many credits it would
[56:29] cost to actually submit this product to process to uh an analysis ready output so uh the 30 meter is the least
[56:41] expensive option and for for many analysis workflows this will be sufficient if that doesn't give you the
[56:48] resolution that you need I recommend trying the 20 M first before trying the 10 m um 20 m is actually getting quite
[56:55] close close to the native resolution of the SAR sensor and often there's not that much of a win um in terms of
[57:02] resolution if you if you choose the 10 meter option but the 10 meter file is huge it's very takes a long time to
[57:10] download it takes much longer to process and it's just more unwieldy to work with um so if 30 MERS isn't sufficient for
[57:18] your needs definitely check out the 20 meter before going directly to the 10 there are a couple of different
[57:25] options that can apply during processing and you can also choose to include a number of ancillary data sets the one
[57:32] that I really like is the rgbt composition which there's always a browse image that's included that gives
[57:37] you that nice color image that you've been seeing in the browse imagery uh but this option gives you the full
[57:43] resolution so the all the same pixel spacing as the RTC output and this combines both the VV and the VH
[57:50] polarization into into a color decomposition which can make it a little bit more in when you're looking at the
[57:59] product so I'll now go to my insar tab and there are a few options available here as well again the the
[58:09] looks that translates into the pixel spacing as well so a 20 by4 looks would give you 80 meter pixel SP spacing 10 by
[58:18] two would give you a 40 meter pixel spacing and again there is a difference in in the number of credits that each
[58:23] one of those options costs if you're not familiar with the phase filter I recommend that you just leave
[58:29] it as the default and in fact same thing with the RTC if you're not sure and you're just trying to check things out
[58:35] you know start with the defaults and then go from there there is the option to apply a
[58:41] water mask and if you're working in areas that have a lot of water like the edge of if half of your scene is Ocean
[58:48] or if it's bordering a great lake especially these larger data set these larger water bodies can really impact
[58:56] the quality of your phase and wrapping results um we do have a tutorial on water masking and how it can impact your
[59:03] results so if you're interested in in learning more about that check out that tutorial um but in the meantime if you
[59:10] are working in an area that has a lot of surface water you may want to apply that
[59:15] that water mask option there are a lot of again ancillary data sets that you can choose to include if they're of interest to you
[59:23] if you'll be using a mint pi to do a Time series analysis there is this button that if you click it it it
[59:30] selects the options that you absolutely need if you want to use mint pie to run an analysis with these products um so
[59:38] you can also add other things in addition but that's the bare minimum of what you need in order to do a minp
[59:44] analysis so at this point I'll submit my jobs and it prompts me for a project name and I can either select from a list
[59:51] and I can just start typing and it will show me the things that match or or I
[59:56] can just type in an entirely new uh project name as you get more and more items in your collection uh it can be
[1:00:04] helpful to to sort through to find what you're looking for if you've Associated a project name I do have the option if I don't
[1:00:13] want to submit all of the processing all at once I can deselect one or the other it stays in my queue but it just doesn't
[1:00:20] submit it yet so if I want to have different project names for the RTC versus insar I can just uncheck that box
[1:00:27] and it will only send the insar for processing I'm going to check them both and click the submit
[1:00:36] button and you can see that I have a a notification that they've been submitted and I can click on this notification and
[1:00:43] it will take me to my list of processing of submitted jobs I can also access that same interface from the on demand button
[1:00:53] by selecting submitted products or also by the search type drop down if I select on demand products that takes me to my
[1:01:01] list of submitted products so here you can see the the projects the the jobs that I've just
[1:01:10] queued up they were listed as loading and now pending once they're actively processing that status will change again
[1:01:17] to to running and once they're done you'll see some download options the same download options that you're familiar with from
[1:01:25] from before um I can add click on an item and download it directly add it to my cart I can use this um interface to
[1:01:36] add items to my download queue or again I can just add all of the things that I
[1:01:42] have available for download to my cart and use the same download approach as for any of the other data sets that
[1:01:49] we've gone over if I scroll down my list you can see I've got some expired jobs once the processing is complete you have
[1:01:58] 14 days to download your on demand products and um if after those 14 days the the actual product goes away but the
[1:02:07] record of your processing doesn't so you always retain that in your history and so if I forgot to download
[1:02:15] this product I can go back click on the expired button and resubmit the job um this will send it with all the same
[1:02:23] parameters as before I can just rerun it and make sure to download at this time before it
[1:02:29] expires if I had processed a whole bunch of jobs and and used the 30 meter um pixel spacing and then I come back a few
[1:02:38] weeks later and I'm like oh you know actually I think that it would be better to use 20 I'd like to try that I can go
[1:02:46] into this expired button and add the whole project to the queue and that will select all of the items that were in
[1:02:54] that in in that project list them in my queue and now I have the option to change those parameters so I can just
[1:03:04] select 20 instead of 30 meter pixel spacing I can also just um if I'd like to reprocess with whatever uh parameters
[1:03:15] any one of these jobs that I've processed before I can also simply use that same interface for the on demand
[1:03:20] processing so the Baseline search gives me very specific specific pairs um and and is Handy if I'm just
[1:03:33] doing very specific insar pairings but for for some use cases you'll want to look at more of a Time series approach
[1:03:42] so instead of of selecting an image and using the Baseline tool I can select that image and choose esos Instead This
[1:03:51] stands for a small Baseline and this in this approach it helps you build a whole time series of individual insar
[1:04:00] products so when I start it is it um shows me a DOT for each one of the
[1:04:09] Acquisitions through the entire Sentinel one time for this footprint and it also uh uses the date range that I had set originally so if I
[1:04:21] want to look at a longer date range I can go in and change that so for a Time
[1:04:26] series analysis like if I'm looking for uh looking at surface deformation due to groundwater extraction for example or
[1:04:33] something that happens slowly it may be better to have a series of interferograms that you look at over
[1:04:39] time to get that longer signal so I'm going to start back in 2018 um and I'll actually start in
[1:04:48] May of of 2018 so May 1st and then I'll go through till this year September 1st okay so now I have all of these dots
[1:05:06] which are all the Acquisitions and then in the date range that I've selected there are these individual lines that
[1:05:12] indicate the the potential insar pairs so each one of these lines represents an insar product and again if I click on a
[1:05:20] line it shows me the details of that pairing in my in uh the left hand Pain by default this is set so that only
[1:05:34] pairings that are that are 12 days or fewer apart are are included but if I want a denser time series I can also
[1:05:43] extend that so that I have slightly longer interferograms as well and that makes my my time series much more dense
[1:05:51] and if you look here you can see in this in this time period both both Sentinel 1
[1:05:56] A and B were up and running uh since since the end of 2021 you'll see that there are fewer options and that is an
[1:06:04] artifact of not having quite as much coverage in this area since uh the loss of 1B so here I have 800 pairs that that I
[1:06:15] can submit I could if this is my time series if this has everything that I want um I can just submit all of those
[1:06:23] um all of those pairs for demand processing but I can also make a few more adjustments um to hone in on just
[1:06:31] the data sets that I really want so there's also the perpendicular Baseline this is how far apart the
[1:06:38] sensor was in space from one acquisition to the next and in gen in general you want those Acquisitions to be quite clo
[1:06:46] th that distance to be very small um we don't we only present options that are within the
[1:06:54] critical Baseline so Beyond this you wouldn't be able to do a valid insar pairer so we only include things that
[1:07:01] are that are valid for insar but you may actually want to tighten that criteria even more depending on your particular
[1:07:08] application so this time this slider here on the left side allows you to change the tolerance for the
[1:07:16] perpendicular Baseline so now it's down close to 150 M and so any of these these Acquisitions that are quite a ways
[1:07:24] apart are excluded now when you're doing an sboss analysis you do not want gaps and so there's this warning here that
[1:07:34] came up because there's a gap now detected because this this is not there's not a an acquisition less than
[1:07:42] 24 days that is within that perpendicular Baseline setting so I can actually add a custom pair here to Pidge
[1:07:50] bridge that Gap so I click on this button button here select the two Acquisitions that I want to use
[1:07:59] as a pairing and that automatically adds to my list a new pairing and I can do that again um to
[1:08:09] fill that more completely and fill the rest of my gaps as as well I'll mention one other approach um
[1:08:19] for for areas that have strong seasonality you may not want to be comparing interferograms throughout all of the seasons um because there are just
[1:08:28] too many differences between winter and summer and so there is this seasonal search and this is available in all of
[1:08:35] the uh date searches as well um even if you're just searching for Sentinel one data or um other data
[1:08:42] products I can set this so that I only include particular date ranges so this will um acknowledge that I'm still
[1:08:51] looking for data between 2018 and 2024 but it will only show me the the returns that are um between May 1st and
[1:08:59] September 1st for each one of those years so if I uh submit that now you can see I've got all these
[1:09:07] these seasonal chunks of insar pairs with the big gaps in between so I can use that same custom pair approach to
[1:09:17] create annual interferograms so um that's a a common way to to bridge gaps in in sbos analysis where you don't want to have
[1:09:28] the same where you don't where you want to have the same conditions on the ground essentially so may to May June to
[1:09:36] June that sort of thing so that um you're comparing Apples to Apples instead of um snowy wintry conditions to
[1:09:43] sumy sumy conditions so to do that I would just select my custom pair um the plus sign
[1:09:51] and find um an acquisition so this is May 2020 and I'll find another May acquisition so here's May 6th 2021 and I
[1:10:02] can create that annual interferogram I could do the same thing here with July so July 10th to July
[1:10:14] 11th and I can build up my sboss list in that way now when I'm finished I can
[1:10:20] either just download a CSV that shows all the pairs if I want to do some additional massaging and create a list
[1:10:26] to submit um programmatically uh or I can just add all of these 230 pairs to my list and
[1:10:35] they're ready for download um I will point out also you can add RTC jobs as well so if you wanted to make sure that
[1:10:44] you had nice amplitude images for all of the Acquisitions that are represented in your insar time series you can also just
[1:10:52] add all of the um unique slc's in this list for processing to RTC and then you're ready to go and
[1:11:01] submit um for processing before we wrap up I'd like to go over one other option for finding on
[1:11:10] demand products and this is the event search so under search type I can click on on event and this platform monitors the
[1:11:21] earthquakes and volcanoes that are occurring throughout the world and submits automatically on demand products for insar and
[1:11:30] RTC so if you are uh interested in in the impacts of a recent earthquake or volcano this is actually a great place
[1:11:38] to start because there may already be on demand products that have been generated for that area of Interest so I can
[1:11:46] either just look at what's recent or I can click on an item in the map and that
[1:11:51] brings up all of the associated products that are available um to explore and download so that's a another great way
[1:11:59] to access on demand products without actually having to order them and wait for them to be processed okay so let's sum up the
[1:12:11] Alaska satellite facility is one of 12 dacs that make up NASA's Earth observing system data information system or
[1:12:19] osus each one of the dacks has a specialty and ASF specializes in synthetic aperture radar data all of asf's Holdings are free and
[1:12:28] easy to access you can search and download them using interactive map-based web interfaces including Vertex or Earth data search but you can
[1:12:37] also search and download the data programmatically there are a range of analysis ready SAR products available from ASF and there
[1:12:48] are a lot of options in particular for Sentinel one the Opera RTC products and the Arya GW insar product products are
[1:12:55] both pre-processed and available for download but you can also submit any Sentinel one scene for on demand
[1:13:03] processing to either RTC or insar in addition there are some other missions that include analysis ready data sets in including the uavsar and
[1:13:14] alos palsar products and so that's also worth checking out they are more limited areas but that data is available as a
[1:13:23] resource as well we do have a list of resources so throughout the slide deck there are lots
[1:13:30] of links and QR codes and things that you can use to to track down more information and then we also have this
[1:13:37] summary that includes some of those key references along with some some other training options so if you're looking to
[1:13:44] get a little bit more in the weeds or again just have a another review of this similar content there are some links to
[1:13:51] other options for that and with that I'll pass it back to Erica to go over the the course
[1:14:05] summary so in summary you learn that the azoth or the AL track resolution is different from the across track
[1:14:12] resolution that radar has three main parameters that are important uh wavelength polarization and incidence angle and the longer the wavelength the
[1:14:22] greater the penetration dep the length of the wave will determine the interaction with the the objects in the
[1:14:29] surface so objects or the wave will interact with objects that are approximately the same size as or the
[1:14:37] same length of the wave polarization provides information related to the structural characteristics of the objects on the surface incident angle
[1:14:46] will influence the signal penetration into the target the two surface parameters that influence the radar signal are structure and moisture and
[1:14:55] the main back scatter mechanisms are specular scattering rough scattering rough surface scattering volume scattering and double bounce radar
[1:15:04] images have GE geometric distortions in areas of complex topography which you need to correct for speckle is that
[1:15:12] graininess effect inherence in SAR images and it can be reduced not fully removed but reduced through multi-looking or with a spatial or
[1:15:22] temporal filter multi-looking and spatial filtering will reduce the spatial resolution of your image and radar can be used for different
[1:15:32] ecosystem studies such as for example mapping land cover crops Wetland inundation and soil moisture SAR interferometry measures the
[1:15:43] distance from the satellite to the ground with high precis by using the phase of the reflected radar signals the
[1:15:50] coherence of insurace is sensitive to the Surface or Surface cover stability cover stability at the radar wavelength
[1:15:58] scale phase Cycles in a repeat pass interferogram show change in distance to ground by half the radar wavelength so
[1:16:07] 2.8 CM for Sentinel 1 and 12 CM for um L band uh which uh nysar is will be an lb
[1:16:16] band band sensor um new pre-processed insar products enable user analysis of inter fogs with few additional steps and then
[1:16:28] finally insar measurements of surface motion are useful for a variety of geological processes some hydrological processes dynamics of glaciers and other
[1:16:39] effects that displace surface or large structures and as a reminder there is a homework associated with this uh
[1:16:49] training the homework is on the uh web page for this training um as of today the due date is December 4th and a
[1:17:01] certificate of completion will be awarded to participants that attended all three of the live sessions completed the homework assignment by the deadline
[1:17:14] and they will receive a certificate via email approximately 2 months after the completion of this webinar and of course for those of you
[1:17:26] that have any questions about the material that was presented today please feel free to contact Dr France Meyer or
[1:17:34] Heidi Christensen through their emails listed here so with that we've reached the end of this session and the end of this
[1:17:45] webinar series I'd like to thank all of the participants for the questions they've been sending um and we've been
[1:17:54] collecting them into a Google doc that we will be sharing with you uh shortly as we begin our question and answer
[1:18:02] session I'd like to thank Dr France Meyer and Heidi Christensen for the excellent presentation and demos today
[1:18:10] so let's begin our Q&A session now wonderful so thank you for all the questions uh we've been receiving um Dr
[1:18:29] Meyer and uh Heidi have been responding these questions and we also have uh someone that's been helping um uh
[1:18:40] respond some of these questions he is from the Alaska satellite facility Forest Williams is also here with us so
[1:18:46] thank you to Forest for his support all right so they're all online let's start with question number one I'm looking for
[1:18:54] free SAR data within the 1998 to 2006 time period I'm preferring elban SAR data can you help me figure this
[1:19:04] out uh please go ahead any of our guest instructors please go ahead and respond can you hear
[1:19:21] me me sorry audio issues yeah yeah so this is France Meer um so I've been trying to answer this
[1:19:31] question the it is indeed a trick time period uh the 19 98 to 2006 time period um there was a mission that ended uh mid
[1:19:47] 1998 that mission is Jers S1 this was a mission launched by the Japanese uh Aerospace Exploration agency um um so
[1:19:57] until about mid of 1998 U l-band data from Jers would be available um then there is unfortunately
[1:20:09] a gap in the l-band data coverage um at least from the perspective of openly accessible uh data sets is another
[1:20:18] Japanese sensor um alos PSAR 1 that was launched uh in 2006 uh so then at some point in 2006 the time series uh picks
[1:20:29] up again but there is indeed a gap uh from 1998 until about 2006 um from the perspective of
[1:20:38] globally uh available in accessible resources um there are some Airborne senses that are filling in uh this Gap
[1:20:46] in some locations but on a global scale there is unfortunately not a lot of accessible data available for this time
[1:20:54] frame frame great thank you that's quite unfortunate um but fortunately since 2006 uh there seems to be quite a bit of uh continuous
[1:21:05] l-band data with with some short gaps in between okay question number two is Amazon web service freely
[1:21:17] available yeah I can take this one as well um the uh so as NASA has is storing
[1:21:23] all of their remote sensing data sets uh in the Amazon web services Cloud uh these days uh and it makes these data
[1:21:31] sets uh available to all of its users for free so you will be able to go in
[1:21:37] and discover uh access and download uh all of NASA's data Holdings uh from the Amazon web services Cloud for free uh so
[1:21:47] that's that's number one if you want to do certain uh processing in a cloud like Heidi talked about
[1:21:55] um the on demand processing workflows that ASF maintains NASA has actually invested some money into making these
[1:22:03] workflows uh available to approved users or to to the to the user Community um and as was mentioned I think in the
[1:22:11] presentation is there is a certain amount of credits available up to 10,000 credits per month so that's going to
[1:22:18] give you a good amount of processing that you can do uh to create interferograms or RTC images
[1:22:25] also that service will be available to the user for free if you need more so if you uh if
[1:22:32] the the um the service that we provide for free is not sufficient for you then unfortunately uh you you have to look
[1:22:41] for other options uh we can as one option build you a deployment of our services that you can run in your own
[1:22:47] cloud accounts uh we would even maintain these services for you but uh we would send you a monthly a bill for for the
[1:22:55] processing that you incur um these costs are not very large uh but of course there are still costs that somebody will
[1:23:02] need to se the other option is to uh to download the the data sets to your local
[1:23:07] machine and do the processing there locally um there are a number of tools available that can give you similar type
[1:23:14] of products um options includes for instance the snap platform um which is an open tool that that Isa is releasing
[1:23:24] uh there's also NASA based tools such as ice3 that can help you generate um RTC data sets into the phams from Center one
[1:23:33] at niart data uh in a more local processing approach and then lastly some of the community has been using a Google
[1:23:41] Earth engine I know there's a question about that later so maybe I pause on that until we get to that
[1:23:49] question okay thank you question number three is it possible to apply s inser data to change detection between two
[1:23:57] dates and if it is possible at what which resolution and is it possible to do it in Google Earth
[1:24:09] engine for do you want to one if not I can I can answer the question uh yes so there there is um
[1:24:24] certainly peerwise capabilities to do change detection and so you can start with just a pre and post event pair actually one
[1:24:37] of the really nice capabilities of SAR is that it's a very repeatable data set so if you have um repeat
[1:24:46] Acquisitions um and you see differences between these Acquisitions they are almost entirely related to physical change on the ground so it's actually a
[1:24:55] quite good change detection uh engine in that way if you want um using pairwise change um is good if your your signal
[1:25:05] your change signal is fairly large if you're interested in more subtle changes it is often recommended to not use one
[1:25:15] pre-event image but take a whole time series of pre-event data sets and average them this is because has um a
[1:25:24] lot of noise in the data set we call that speckle noise so if you look at a s
[1:25:28] image there's a lot of pixel toxel salt and pepper type noise contained and um and the more you can suppress that noise
[1:25:38] pattern through averaging the more sensitive of of of of change you can detect um so that's a
[1:25:46] recommendation for for these change detection techniques that often averaging before after with improving your overall performance you can also
[1:25:55] use inser data sets uh what you would do here is you would look at the so-called interferometric coherence if you say had
[1:26:03] a landslide between um two s positions um you would see a strong degradation of coherence in that area and you could use
[1:26:13] the loss of coherence as a metri metric uh to uh extract a pixels or areas that have
[1:26:21] changed okay so the last part of that question which is also question number four can you access ASF data by using
[1:26:29] the Google Earth engine platform yes and so um um you know considering ASF data broadly as sort of you know
[1:26:42] International s data sets uh there is a number of data sets that are available on Google Earth engine uh Google Earth
[1:26:50] is maintaining uh a complete Archive of sen one they are partly retrieved from ASF and partly from Isa uh so those are
[1:27:00] available I think there's a little bit of a delay uh with you know so the latest data set may come in a few days
[1:27:09] uh after it was actually acquired but they have the full archive available as far as I know um there's also now uh
[1:27:18] alos 2 uh Pulsar 2 scansar Data available uh on Google engine and uh I ex I assume but of course in
[1:27:29] the end uh it's Google Earth engine that has to make that decision I assume they will be interested in also uh adding
[1:27:37] nyser data sets uh to their archive uh once they become available so yes Google Earth engine has been pretty good at at
[1:27:44] making these s resources available to the broad Community can you guys all hear me now uh yes Forest we can hear you loud and
[1:27:54] clear great awesome um yeah I just want to mention one thing to add on to what fron was saying which is I put a link to
[1:28:02] a good paper um that uses Google Earth engine and the amplitudes amplitude based one data that they have there to
[1:28:10] do some Landslide change detection that's a good one to check out if you're looking to do sarbas um change detection
[1:28:17] inside of Google Earth engine wonderful thank you okay question number five how can we get a map of displacement
[1:28:28] from the interferometry interferometric rainbow fringes and is there an easy tutorial or python script that you can
[1:28:38] recommend I I'll take this one to start um we do have a a tutorial that I've I've Linked In the question and actually
[1:28:46] I might be able to post it to the chat right now um so it goes through our
[1:28:52] inser on demand products and talks about what the fringes mean and how that becomes then um can be used to for
[1:28:59] displacement measurement um France has also added some some links to Jupiter notebooks that we have available um and
[1:29:07] what we're pretty excited about and maybe I'll pass this over to Forest uh for more detail but we will be hosting
[1:29:13] the Opera displacement products which um Forest do you want to talk a little bit more about that yeah so the Opera
[1:29:21] displacement products are essentially the result of what you would get from an insar analysis but um it's using the the
[1:29:29] best and newest methodology in the space to get as good of displacement estimates as you can um that data should be going
[1:29:36] live at the end of the year it'll be available for most of North America for the entire length of the 71 archive and
[1:29:45] we're very excited about this data set and we're looking at providing some new visualization options for that data set
[1:29:51] so that you can explore the data interactively through vertex so yeah stay tuned in 2025 super very exciting times in 2025
[1:30:03] with so much uh SAR data now becoming um not only available but analysis analysis ready okay question number six where can
[1:30:14] we check for updates on the release of Alo 2 palar 2 and is it currently available through jaxa I'm hoping to
[1:30:21] incorporate that data set into a project I'm starting in mid January um so um I'm sure the the data
[1:30:31] set is available through through jaxa through their distribution uh mechanisms um regarding ASF um we are um
[1:30:43] we will be releasing shortly uh in December this year um the global um alos 2 PSAR 2 scansar are iive
[1:30:54] uh which ASF has been working with Jaa on to host a mirror of that archive at ASF so we are currently just finishing
[1:31:02] up um inj pipelines so that they show up in in Nas's centralized metadata framework and other than discoverable uh
[1:31:13] through the ASF interfaces so if you are attending agu uh this year uh we actually have a presentation on this uh
[1:31:22] where you where you see some links uh these data sets but the platform that Heidi um presented earlier today will be
[1:31:30] hosting these alos to PSAR to scansar data set so these are the somewhat lower resolution products uh that they roll
[1:31:38] out with like a 50 Mish resolution the higher resolution so uh strip map so type data sets those are not publicly
[1:31:49] available on a broad scale uh so those are available to uh to approv science piis um um ASF is hosting some of those
[1:32:00] restricted data sets and there's a a mechanism that we can uh you can email us about to to try to get access to
[1:32:07] those those througha but also jaxa is routinely offering Pi uh possibilities so calls for proposals uh that then once approved
[1:32:20] would would give you limited access over limited areas free access to then these higher resolution uh strip map type alos
[1:32:29] pser 2 data sets Okay question number seven are there multispectral and SAR image pairs available at ASF I'm working on SAR
[1:32:43] colorization so most of asf's Holdings are SAR we have one exception which is the aenir data um so the alos one
[1:32:52] Mission had both the p sensor but also the avenir sensor and the avenir is a a multi uh a
[1:32:59] multispectral sensor so that's kind of the one exception that we have um we we do have both of those uh data sets so
[1:33:07] it's not from very recent that that mission was flown from 2006 to 2011 um but that is kind of our one exception um
[1:33:17] but if you are looking for both multispectral and SAR data you can use the uh Earth data search plat platform
[1:33:24] which has uh data sets from from all of NASA's dacks and so you can search all of asf's Holdings there as well as all
[1:33:31] the other dacks so that would be a great place to search for some of the multispectral stuff as well as the SAR
[1:33:37] data all in one place great thank you Heidi the next question number eight is it true that we
[1:33:45] use grd data only for poar and SLC data only for insar or can we use these data
[1:33:52] products in other ways uh I can take a first stab at this um so SLC data is your sort of most
[1:34:05] versatile um level one data product uh for SAR um the the so data are a prerequisite for doing inser processing
[1:34:15] as you had correctly mentioned uh in the questions but also for some of the petric workflows um um also those often
[1:34:24] use the phase information in the data set uh and uh and and so for some of the
[1:34:30] more sophisticated involved workflows SLC data sets are also necessary um the ASF workflows to create geocoded image products they actually
[1:34:41] work on both the soc and the GD product I would also there recommend to start from the SLC mostly because it the SLC
[1:34:51] frame actually has a little bit more coverage than the GD frame does uh and you get uh you ensure that you don't
[1:34:58] have tiny little gaps between the image products that you create um if you want to download data
[1:35:06] locally and if your application is mostly mapping the G product can be helpful mostly because it is smaller
[1:35:14] size so there's less download volumes and and workflows that then fully geoc code these products they work both on
[1:35:21] the SLC and the god so if you want to work locally and and sort of data volume
[1:35:27] is a concern uh then I would switch to the go God product instead of thec and I don't know Forest if you want
[1:35:36] to add other stuff to this yeah I would just say that when working with grd data I think my
[1:35:45] personal preference is like when you have the ability to acquire it um RTC RTC data is generally a a better version
[1:35:54] of grd so I would just try and use RTC whenever possible okay thank you very much the
[1:36:03] next question number nine I would like to ask Dr Meyer about the possibility of using SAR imagery to
[1:36:14] estimate water saturation and slopes right um so um what is saturation so SAR is sensitive to uh variations in
[1:36:28] soil moisture so what what drives SAR scattering is is the roughness of the interface uh and sort of the dialectric
[1:36:36] properties which are driven by the moisture content of the the object that you're looking at so soil moisture plays
[1:36:43] a role and so when typically when soil moisture increases the rate of brightness uh also increases to do soil moisture analysis
[1:36:52] on slope uh I would proceed uh accordingly I would um access um SLC type data sets and um um at at
[1:37:06] probably a longer wavelength it depends a bit on the slope you're interested in uh but in order to um mostly see the
[1:37:15] soil properties and be less dependent on the vegetation above um a longer wave length gives you a better ratio between
[1:37:24] sort of the soil signature and the vegetation signature so an lban data set might be useful I would then perform RTC
[1:37:32] processing on these data sets to uh uh remove basically the slope impact on the radar brightness and so once you have
[1:37:41] RTC processed the data set you should be able to use uh a Time series of these products to analyze variations in in you
[1:37:52] know water content in the in the soil over time um I hope that answered your question and I hope I understood the
[1:37:59] question correctly thank you uh so the next question looks like we have a space Enthusiast um is nysar going to be
[1:38:10] launched from Cake canabo would love to watch it go up yes I'm so unfortunately no uh so
[1:38:20] nysar is is being uh put together in a collaboration between NASA and the Indian space research organization short
[1:38:29] Israel and uh and so the two organizations contributed to the mission almost almost 50/50 um and one of the things that are
[1:38:38] a responsibility of Israel is the launch so Israel will provide the launch vehicle which is a gslv mark 2 Rockets
[1:38:48] one of India's um you know heavier lifting uh launch vehicles and the the launch will also happen from
[1:38:56] India and not from the United States uh so unfortunately if you're close to Cape canaval uh in this case you'll miss out
[1:39:04] on the launch question number 11 for Sentinel 1 SLC data apart from interferometry you mentioned you can use
[1:39:15] other workflows that use phase can you please provide some examples I I guess yeah yeah um so there are
[1:39:34] other um applications that use the phase component um in particular Pulsar SAR polar imagry Um this can be all really
[1:39:45] useful for doing things like trying to estimate biomass and trying to understand more about um a force can
[1:39:54] structure by using SAR and then in addition other than interferometry one thing to mention is that people use
[1:40:02] interfer metric data in different ways some people are particularly looking at the displacement information that you can acquire from interferometry and then
[1:40:11] other people are using the coherence information from the interferometric analyses to actually do change detection so those are just a couple different
[1:40:21] additional ways that the coherence information or sorry the phase information can be used great thank you question number 12
[1:40:32] is there a data limit to acquire on demand products yeah I can take this one as well um yeah we do have to limit the
[1:40:40] amount of on demand data each user gets just because you know we have we have a budget and we have to stay within it and
[1:40:45] we want to make sure everybody gets a fair shot at requesting um the data they desire um for the full details I've
[1:40:52] linked our cost page in the in this question which goes through the details but um the general numbers are if you're
[1:40:58] using our default settings which um have somewhat higher resolution you can process 1,000 insar Pairs and 2,000 RTC
[1:41:08] jobs per month and then if you want slightly higher resolution products that number number will drop um but we hope
[1:41:16] that this is a enough for most analyses and if you need just like a little bit more than this to finish up your grad
[1:41:24] school project or something like that please get in contact to us we do have ways of um providing a little bit more
[1:41:31] capacity to users that need great question number 13 does an infographic exist that summarizes the observation platform
[1:41:43] observations data sets including process levels the tools where the data can be obtained and these presentations are
[1:41:50] great but I was also thinking about something that can be easily and quickly digestible by the general public um as
[1:42:00] something very useful yeah I can take this one actually updating a little bit answer I gave um so there are actually some um
[1:42:12] infographics that some communities have developed there was a an effort that wrapped up a few years ago that was
[1:42:20] called the SAR handbook uh this one was led by a marshall space space flight center and resulted in a in a sort of
[1:42:28] free and openly distributed handbook um that summarized the application of SAR to the mapping of the biosphere and so
[1:42:37] as part of this there are some infographics that are more starting not So Much from the from the platform level
[1:42:42] but from the application Level basically say if this is your application um what um sensor would you
[1:42:52] would we recommend and what processing flow uh would we recommend uh that was presented a few years ago at an a
[1:43:00] conference and I don't have the link handy right now but I can try to find where that that link is located and put
[1:43:06] that into the answer later but so yes this is a good idea and uh and so the uh
[1:43:14] some people in the community have been starting to think about putting such infographics together it's a bit tricky
[1:43:19] because if you ask uh probably 10 scientists they may not fully AG agree what these infographics should look like
[1:43:26] uh but um attempts have certainly been been made okay question number 14 is all the ASF data
[1:43:37] pre-processed I can take this one again um so when we think about Sentinel one and Nar data in particular we offer a
[1:43:45] varying number of levels of processing for this data you know we offer everything from the level zero
[1:43:51] completely unfocused data to SLC data and then higher um level products through a variety of options for senel
[1:44:00] one the offer products are a great source of higher level processed products and then if and then we also
[1:44:08] have our on demand options for some one as well with nysar launches um they're going to be producing a much larger
[1:44:15] Suite of products so you'll be able to get some insar and RTC data right out of the gate without any pre-processing um
[1:44:22] but if there are more details on particular flavors of senel one or nysar data that you're looking for uh don't
[1:44:30] hesitate to get in contact with us okay thank you question 15 can we apply only data taken from the
[1:44:41] Copernicus browser without using the ASF and what would that lead to I can start answering this uh
[1:44:51] absolutely I mean we are um very much um um appreciative of of the work that Isa European space
[1:45:00] agency and the comp compus program has been doing to make these data sets available uh to build a sensor that that
[1:45:08] is freely available and monitors the planet so regularly so uh so their program is fantastic um they recently
[1:45:16] rebuilt their Discovery platform to be now also cloud-based so they have better um accessibility and throughput these
[1:45:25] days um I'd say that what ASF um has available that you wouldn't necessarily get uh currently at the uh through the
[1:45:35] cicus platform is this ability to submit products for ond demand processing so this buil buil-in capability to create
[1:45:44] your interferograms and create create your RTC images is at least currently not as built-in available in in their
[1:45:52] discovery uh interface but that being said is they offer a very good service um we we definitely encourage you all to check it
[1:46:01] out we have a a very very productive and good relationship with Issa and we uh uh we can say uh anything but good things
[1:46:10] about uh their fantastic program super question 16 can I use only Sentinel one data sets for comprehensive
[1:46:22] damp deformation monitoring I can start this in in then Forest can chime in also uh so for damn
[1:46:33] deformation you would use an inser workflow uh in concept Sentinal one would support this kind of application
[1:46:40] in practice it will depend a little bit on your location uh and and the characteristics of the environment
[1:46:47] around your Dam um one of them is what is the vegetation cover uh if it's an earth and Dam is like how vegetation
[1:46:55] covered is it um senel one is a seaband satellite it doesn't penetrate as effectively through vegetations you may
[1:47:05] get some decorrelation issues um at the C band wavelength depending on your vegetation cover uh and a move to a
[1:47:14] longer wavelength such as lban might be more more useful the other thing is what is the orientation of your Dam relative to the
[1:47:24] orbit orbit geometry um these inside techniques are very good at seeing changes of distance uh between the satellite and a point on
[1:47:35] ground and depending on the orientation of your Dam and the orientation of the surface motion uh it there can be
[1:47:43] situations where the movement of the surface uh doesn't actually change the distance to the satellite much particularly if the motion is sort of
[1:47:54] orthogonal to the uh look direction of the satellite so these are also things to consider as you may find that either
[1:48:02] ascending or descending are more suitable or it may it may also show that neither one of them is particularly good
[1:48:10] and it might be better to use a groundbased uh insar instrument um um to to observe that particular Dam so yes
[1:48:19] insar can serve that use case and has been serving it um one good example if you do a a Google Scholar search is
[1:48:27] there's a lot of work going on in in the Netherlands um where ins is used on at
[1:48:32] Broad scale to uh to um ensure the security of of their dams um and I'll see if Forest has
[1:48:41] additional thoughts yeah unfortunately Forest had uh another meeting to jump to so um perhaps uh he can write his thought
[1:48:53] here in uh when responding elaborating on the uh answer so okay let's go on to the next
[1:49:03] question question number 17 what data sets can be used to alternatively which satellite sensors can be used in place of another are
[1:49:13] there any fused data sets currently yeah I interpret that this is a follow-up question to the previous one
[1:49:22] uh and so so yes I would encourage to um to either use several sensors in parallel um so one approach is if you're
[1:49:31] not sure about the performance of the different sensors is to use all of them so through ASF you will be having
[1:49:38] availability for both Sentinel one and nysar um data stacks and you could run um displacement analysis for both of
[1:49:47] those those wavelengths um if both of them are successful then this actually gives you a very nice cross validation uh of your
[1:49:56] results uh if cban fails then the lban approach may give you uh additional performance uh and if both of them
[1:50:05] succeed you can merge their time series uh in post processing uh to gain a more detailed understanding of what the
[1:50:13] displacement behavior is like um so if you have the capability and through some of the ASF resources you would have it
[1:50:22] it would be recommended to actually try various uh wavelengths okay question number 18 what are the advantages of looking for SAR
[1:50:35] data from Sentinel one in a okay so ver versus Copernicus website we've responded to that one already how about
[1:50:43] uh let's move on to question number 19 what are or will be some use case examples for nysar
[1:50:54] yeah so there um so we are developing will be developing uh workflows in the form of T notebooks and other data
[1:51:01] recipes as uh the Nisa data set show up in our archive uh in the meantime in the
[1:51:08] answer I put a link uh to the Nissa website um the the Nissa website actually very nicely summarizes uh some
[1:51:17] of the science applications but also some of the more um sort of Hands-On day-to-day applications that Nisa can
[1:51:26] support uh they are highlighted in the form of sort of two-pager white papers uh and and I encourage you to peruse
[1:51:34] them and see if you find uh the application you're interested in in that list um the uh the ner science team has
[1:51:43] also developed a set of Jupiter notebooks that would allow you to derive uh higher level data products and
[1:51:51] science products from nyso data these notebooks are available now on on gitlab I'm going to put the
[1:51:59] link to these notebooks in chat and ASF is uh planning to work uh on integrating um these notebooks into
[1:52:09] their open science lab platform so that users could run these not notebooks in the cloud uh for their data processing
[1:52:17] of nio data okay question number 20 so we've you've answered this one uh already what are the differences between grd and SLC
[1:52:28] but in addition to that what is the difference between grd and the Opera RTC products is there a better one better
[1:52:34] than the other one for analysis so I'll just um um weigh in on this one as well so in general if you
[1:52:44] are doing a Time series analysis or looking at um you want to track change Through Time often the RTC is a better
[1:52:52] option than a grd in terms of the Opera RTC products that is a pre-processed data product um they are burst based so
[1:53:01] the footprints are very small so that makes them very quick and easy to download so that's an advantage for um
[1:53:07] using those over the OnDemand RTC that we offer at at ASF but if you do want to
[1:53:14] have the RTC product for the entire Sentinel one scene you can submit those for on demand processing at ASF
[1:53:23] the advantage there is that you can submit any product that we have in our archive um so the Opera products they
[1:53:30] they do generate RTC products for every Sentinel one acquisition but they only started doing that in October of 2023 so
[1:53:39] there's just over a Year's worth of data in the archive so if you're looking for data during that time that's a great
[1:53:45] option um but if you're doing a Time series that expands beyond what is available through the Opera RTC products
[1:53:52] um then you may find that our on demand RTC products are a better fit for you thank you Heidi question 21 ASF
[1:54:05] searches for all images which touch the area of Interest boundary and it returns then many images that are only on the
[1:54:14] edge and not useful can we tell ASF to search only for images which contain just the area of interest
[1:54:24] entirely so that's a really cool request actually um we don't currently offer that as just a like a a one-click
[1:54:31] solution um when you do run the the search often I'll do this I'll create an area of interest and and um launch the
[1:54:40] search and it has these frames that just barely touch and it's not that useful so what I'll do is just go in and with the
[1:54:49] with the edit capabilities in in the vertex interface you can actually edit your area of Interest so you can pull in
[1:54:55] the the the individual vertices so that you can avoid um those frames that are just barely touching your your area of
[1:55:04] interest um and so so I I find that a a very useful visual way to exclude only
[1:55:12] exclude those Fringe scenes that are along the edges but you can also use path and frame filters which once you
[1:55:20] know which area is covered well by by a certain path or if there's a very particular footprint you can restrict
[1:55:29] your search to just those those Footprints or a single path or a series of frames and so that that can help um
[1:55:36] restrict your search a little bit a little bit more but I'll definitely pass along the um that idea to the vertex
[1:55:44] team great question 22 can you provide application examples of how insar and burst insar are used how do you know
[1:55:54] when it is suitable to use burst insar instead of insar yeah I would say it's mostly a
[1:56:02] question of the size of your area of Interest the uh the burst spased in the perometry is particularly useful if your
[1:56:11] area of interest is small much smaller than the original Sentinal one frame um uh so if you would to re would have to
[1:56:21] rely on the fullframe process processing you would have to create uh lots of data that you actually don't need so so these
[1:56:27] are use cases that are most suited for the burst Bas processing if you're looking at very large scale applications
[1:56:33] um sort of this subsetting benefit that that the burst processing brings you uh gets a little bit lost and it might uh
[1:56:41] it might be um equally useful to do the the frame based processing the other thing where it's useful for is if you
[1:56:49] want to start trying something out if you move to a new area and you want to explore the capabilities of Senter one
[1:56:56] for that area um you know starting with a birth based process just means that as a user you're spending less of your
[1:57:05] processing credits and at ASF we are not spending lots of money in the cloud to provide you data sets that in the end
[1:57:13] might not be so useful so I personally do this if I move to a new area I start
[1:57:18] processing just a frame a burst or two um to explore a little bit the coherence conditions and what kind of this
[1:57:26] displacements I I might expect uh and then potentially go to a fullframe processing um uh once I know that that
[1:57:35] the data set is actually useful for the application that I'm looking for okay uh we're coming to the end of
[1:57:45] our session how about just one more question uh question number 30 23 for the python scrip bulk download option I
[1:57:54] believe you need to The Meta link file as well has this changed or is the meta link file not
[1:58:01] required so the the metal file is not required if you're just using the the python download script so that option
[1:58:08] where you can download the script that that you can then launch to to cycle through and download those products
[1:58:15] those do not require the down it's completely self-contained so um the the meta link is for kind of external
[1:58:23] download manager so if you're building something that's going to to take advantage of of that functionality um
[1:58:30] but for most individual users The Meta link is is not required you can just download the the python script and
[1:58:35] you're ready to go okay how about one more uh question number number 24 uh it's relevant to the previous one
[1:58:48] in the case that I've downloaded information in the python script is there a guide extra material to work
[1:58:54] with in a better way um so the only prerequisite for if this is just for the download script the
[1:59:02] only thing that you need is python installed on your computer and it can be any these use very basic libraries so
[1:59:08] you don't need anything fancy um I'm you can check the vertex help if you if you want um some additional information but
[1:59:19] it's it's a pretty pretty straightforward operation you just download the script double click it and as long as python is installed um you
[1:59:29] can uh launch that script okay great so we're coming up here to the end of our session uh the
[1:59:40] questions we have a a number of questions that we didn't get to um I think we have a total of uh over 50
[1:59:47] questions so we will respond to questions we will answer all of them on the go uh on the Google Doc and once
[1:59:54] they're reviewed we will post the Google Doc on the training web page so this brings us to the end of this uh session
[2:00:04] uh I would like to thank all of the participants from all over the world for your interest and enthusiasm for SAR I'd
[2:00:13] like to thank the arset team Natasha Johnson Griffin Brock bevens SN Hudson ooi Jonathan O'Brien suanti Sarah
[2:00:23] caw and more than anything I would like to thank all of our guest speakers throughout this uh webinar series Dr
[2:00:31] Eric Fielding Dr France Meyer Dr Forest Williams Heidi Christensen so before I close I'd like to um offer uh the The
[2:00:41] Forum uh for some closing words from Heidi and France so Heidi please go ahead I would just like to thank thank
[2:00:52] you all for attending and do please get in touch um check out our tutorials and um let us know if you have any questions
[2:00:58] thanks super thank you so much and uh France yeah just uh reiterate um thank you for your interest in in this Imaging
[2:01:08] modality this is a super exciting time for SAR we all sort of massively excited for the upcoming nysar launch there is
[2:01:17] um alos 4 a Japanese satellite just launched Issa is preparing number of launches so this a really exciting time
[2:01:24] for the for for you to learn how to utilize this these resources and please be in touch uh if there's if you have
[2:01:32] questions uh about the tools and services we provide um and we have a dedicated support staff uh that will
[2:01:39] quickly uh answer your questions um to the best of their abilities thank you so much uh France
[2:01:48] and and Heidi and um yes please make sure you check out the Alaska satellite facility in addition to what was
[2:01:56] presented today they have so many resources there that are of value and with so much SAR data now available and
[2:02:03] what's coming up I mean it it's just going to be a a new golden era of SAR so
[2:02:09] really looking forward to that uh with that then we've reached an end to this uh webinar series there will be another
[2:02:17] SAR webinar series probably uh in 20 2 um around September August September um hopefully we'll have a a nysar data by
[2:02:29] then so U I hope uh everyone can follow and uh start using nysar data uh once uh
[2:02:37] Nar becomes available it's it's going to be such an amazing data set so uh thank you again uh wishing you all a great day
[2:02:45] and until next time bye-bye everyone
