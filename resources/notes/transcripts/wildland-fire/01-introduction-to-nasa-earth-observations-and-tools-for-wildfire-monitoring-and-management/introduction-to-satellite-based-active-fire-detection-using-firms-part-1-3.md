# Introduction to Satellite-Based Active Fire Detection using FIRMS, Part 1/3

`https://www.youtube.com/watch?v=2Us91BGL3Q4` · id 323 · 2:07:35 · module 309 — Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management

[00:02] Welcome everyone to our ARSET training series, Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management. Today is part
[00:12] one of our training series, Introduction to Satellite- based active fire detection using burns. My name is Melanie Flet Cook. I am a researcher at
[00:22] NASA Gddard Space Flight Center outside Washington DC and I'm the project scientist of the ARSET program. So first before we begin today's
[00:32] training, I'll say a few quick words about about RSET. The NASA applied remote sensing training or ARSET program provides
[00:41] cost-free training on the use of remote sensing observations, analysis methods, and tools. We provide training in several thematic areas including
[00:50] agriculture, climate and resilience, disasters, ecological conservation, health and air quality, water resources, and wildland fires. ARS provides training both online
[01:05] or in person. Our online trainings are delivered in two formats, live and instructor-led like today's training or
[01:12] asynchronous and self-paced. Like NASA's free and accessible data, all of our trainings are offered at no cost. We try to offer
[01:21] trainings in more than one language whenever we can, and we only use no cost and open-source software and data. We
[01:29] offer our trainings at a range of levels, so you can find a training series that fits your level of
[01:34] experience and need. Please visit us at our website to learn more. We'll start today by giving an
[01:43] overview of this training series, Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management. Every day, satellite sensors
[01:55] are able to detect thousands of fires from space. When these satellite observations are available in near real
[02:01] time, they can provide timely, comprehensive, and actionable information for wildfire applications. Nearrealtime observations enable rapid detection and monitoring of
[02:12] fires, including their extent, intensity, and spread, which is invaluable for strategic planning and resource allocation. Satellite observations can also support
[02:23] the assessment of fire impacts on ecosystems, infrastructure, and air quality and aid in postfire recovery efforts by providing accurate burn scar
[02:32] mapping and monitoring vegetation regrowth. By the end of this training series, we hope that you'll be able to
[02:40] evaluate different satellite based active fire detection data sources using firms to build a wildfire narrative. Understand the strengths and limitations
[02:48] of each source for different types and sizes of fires. Apply firms data and tools to evaluate rapidly growing
[02:55] wildfires using the tools available in firms. firms. Apply strategies using firms to identify factors that can impact satellite-based
[03:03] wildfire detection resulting in a missed wildfire and make a plan for when data may become available. Use firms to monitor a
[03:12] particular area of interest by accessing active fire data from the archive available. Use web services to create an
[03:19] email alert for your area or ingest the resulting fire alerts into a GIS platform to enable evaluation. As a prerequisite to this
[03:30] course, we recommended that you take our fundamentals of remote sensing training to familiarize yourself with terminology and concepts you might hear in today's
[03:37] training. Some examples that might be important to today are what's meant by the spatial or temporal resolution of a
[03:44] sensor or the difference between true color and false color imagery and how false color imagery is used to enhance
[03:50] surface features like the presence of vegetation or a burn scar. In part one today, we'll introduce the fire
[03:56] information for resource management system or firms. Parts two and three will cover how to use firms for wildfire
[04:03] monitoring and evaluation and how to access data through firms. The certificate of completion will be awarded to participants who attend all
[04:11] live sessions and complete the homework assignment before the given due date. And with that, we'll begin part one,
[04:18] introduction to satellite based active fire detection using the fire information for resource management system or firms. I'm very happy to introduce our
[04:27] guest instructors for part one. Jenny Houston is the outreach and implementation manager for NASA's land atmosphere nearrealtime capability for
[04:36] earth observation or lance. Brad Quail joins us from the US Forest Service where he is the program lead for the
[04:43] disturbance assessment and services program. By the end of today part one, we hope that you'll be able to recognize
[04:50] how active fires can be detected by satellite sensors. use firms to view active fire information and identify the
[04:58] strengths and limitations of polar and geostationary satellite sensors to detect different types and sizes of fires. If you have questions during
[05:07] today's training, you can put them in the Q&A box there in within WebEx at any time. At the end of the training, we
[05:14] will try and address as many questions as we can and we'll post the questions and written answers to the training page
[05:20] to the firm's training page within a week after the training. And now I am happy to turn it over to
[05:26] Brad. All right. Well, thank you Melanie. Uh to this slide here provides an outline of the uh topics we're going to cover in
[05:35] our presentations today. Uh first I'll be providing an a brief introduction to firms and also some information about
[05:43] satellitebased fire detection and also an overview of the data that's included in firms. and then I'll pass it to Jenny
[05:49] who will be talking uh about information related to the strengths and limitations of different satellite based active fire
[05:55] detection products and and sensors. So our our first section here on the introduction or an overview of firms. Uh
[06:05] firms is the fire information resource management system which is developed by NASA and it provides timely active fire
[06:13] detection data, imagery and other relevant data from a variety of satellite sensors for the entire globe. The main objectives of firms are to
[06:20] enable access to spatially and temporally comprehensive satellite imagery, active fire detections, and other relevant data at the lowest
[06:28] possible latency. It also works to facilitate the availability of a big picture of fire activity and allowing
[06:35] users to detect and monitor fires and assess their effects globally. And lastly, we also provide a series of
[06:43] tools and capabilities and interfaces that help support operational agencies with fire planning and response as well as academia with research initi
[06:51] initiatives and also to meet a variety of other uh needs in the user community. Firms consist consist of two
[07:00] distinct applications. The first one is called firms global. It was developed by the University of Maryland in the early
[07:05] 2000s. Then later on about uh in 2012 it is migrated into the NASA Lance framework and firms global is intended
[07:15] to provide access to a large suite of low latency satellite imagery and derived fire science remote sensing
[07:22] products at a global scale and its sister application is called firms US Canada. This application was developed in 2021 through a
[07:33] cooperative effort between the NASA and the Forest Service that builds upon a long history of close coordination
[07:38] between the two agencies on strategic active fire detection and monitoring activities. This started back in 2000 with the development of the initial
[07:47] modus rapid response system. The firms US Canada is very similar to firms global but is focused on the US and
[07:54] Canada geographic area. It provides the same data sources that are available in firms global as well as some additional
[08:01] uh data that are specific and relevant to fire management agencies in the US and Canada. Now we're going to talk a little
[08:10] bit about satellite based fire detection. BMS provides many imagery and data products for detecting, monitoring and assessing the effects of fires.
[08:22] Active fire detection data are the most frequently used data products in firms and these data are provided using
[08:28] multiple uh satellite sensors and based on the various technical aspects of these sensors as well as the orbit
[08:35] configurations of their respective satellite platforms. The timing and frequency of these uh satellite observations for active fire detection
[08:42] can vary. Active fire detection products are generated using uh active fire detection algorithms and they leverage multisspectral data spanning from the
[08:52] visible uh clear through to the infrared wavelengths of the electromagnetic spectrum. These fire detection algorithms are designed to exploit the
[09:02] response of fire in the mid- infrared and the longwave infrared wavelengths typically at four microns and 11 microns
[09:09] respectively. And this chart illustrates how you have a significantly stronger response of fire in the four micron band
[09:17] or the midwave infrared relative to the longwave infrared. And it also illustrates how the midwave infrared is
[09:24] very sensitive to both flaming and smoldering fires. And that corresponding response by the longwave infrared band is significantly is significantly less.
[09:33] And this contrast between the fire signal and these two bands uh helps improve the detection capabilities for
[09:40] these algorithms. And these fer detection algorithms also leverage selected visible and near near infrared bands to help identify and mitigate the
[09:48] effects of things like sunlint which can result false positives and also to identify and mask out particular
[09:54] features. features. uh fire detection algorithms for modus, beers and various geostationary sensors are based on the legacy approach that
[10:03] was developed back in the early 1980s by Jeff Dosier for the advanced very high resolution radiometer sensor. And this
[10:12] flowchart that's shown on the screen right now provides an overview of the key steps that are uh covered in the
[10:17] modus detection algorithm which is based on that legacy algorithm approach. And basically what happens here in that
[10:24] first group uh with an incoming image the uh invalid data is removed. This is where you have missing data pixels and
[10:31] things like that. And then masking processes occur where there's a pre uh determined land water mass that's
[10:38] applied so that we're just working with land pixels and all the water is removed and then some spectral thresholding is
[10:44] applied to remove things like uh clouds and so forth that could interfere with the performance of the algorithm. And
[10:51] then we slip into what's called the tenative fire pixel detection stage. That's where some absolute thresholding is applied to the four micron band or
[10:59] the mid infrared band that's just above bas b b b b b b b b b b b b b b b b b b
[11:02] b b b b b b b b b b b b b b b b b b b b
[11:02] b basically the nominal surface of the earth to identify any potential fire pixels. And then these pixels are then
[11:10] uh subsequently evaluated again with some more uh conservative thresholds in the four micron band to identify those
[11:16] very obvious unambiguous uh fires that based on that response. in that band. And then that both the potential pixels
[11:24] and those obvious fire pixels are then evaluated in the context of their adjacent pixels in that neighborhood.
[11:30] And some statistical analysis is performed to evaluate how much differentiation there is between that targeted fire pixel that's being
[11:38] evaluated in its neighbors. And based on that statistical analysis and the differences in the response in the mid
[11:44] infrared band as well as the uh the delta or the difference in the response in the mid- infrared and the longwave
[11:50] infrared, we can have a an output and determine whether or not that is indeed a fire detection or not and what our
[11:58] confidence is in it being a detection. And then subsequent to that a series of uh tests are conducted to reject um
[12:07] fires that we identified in the previous step that might be a result of sunlint that affects that um mid-infrared band.
[12:14] We use the visible bands and near infrared bands to eliminate those uh potential sunlink cases and also the
[12:21] heterogeneity of the landscape around those potential fire pixels and that contextual analysis mentioned before they can contribute and provide some
[12:29] statistics that could affect the confidence that on whether or not that is a fire or not. So uh those are areas
[12:36] where you have very discreet ecotones like between a desert and a non-desert area or maybe water versus non-watered
[12:43] areas or forest clearings. Uh some additional analyses can be done there to eliminate those uh areas or at least
[12:50] reduce the confidence of those detections. And of course there's always challenges of the accuracy of the water
[12:57] mask uh along the oceans or other large bodies of water. And some additional uh spectral tests can be conducted to uh
[13:04] identify pixels that are water that are not picked up in a water mask or mixed water and land pixels and remove those
[13:12] from from consideration. Ultimately the output is a raster uh data set like you see on the right here for the entire image uh
[13:21] identifying those fires at different levels of confidence as well as you know land clouds and water that were
[13:27] identified in the process. So what does a fire detection uh mean on the ground? Um basically it can be
[13:36] representative of multiple conditions that's driven by the you know the characteristics of the fire. A detection could be representative of a fire that's
[13:44] very small, very hot and intense or it could be representative of a bigger broader cooler burning fire or a
[13:52] combination thereof. Typically it's the former example that I mentioned where that uh takes place. there's one or two
[14:00] small fires in a pixel that's much smaller than the resolution of the uh uh the sensor resolution that's being
[14:06] detected and the entire in those cases the entire pixel is identified as a detection. So with modus the entire 1
[14:14] kmter pixel is identified as a fire detection but the actual uh fire within that pixel is actually much smaller than
[14:23] that uh fire or I should say that spatial resolution of the pixel. Um this example of this image on
[14:30] the right is a terramotus uh false color composite. And with that false color composite you can see the fire activity
[14:38] in the reddish to orange glows glowing areas in the northwest and the southeast part of the image. And you can see the
[14:46] uh in the black outlines are the modus active fire detection outputs at 1 kilometer resolution. And you can see in
[14:52] those given pixels where some pixels have a significant amount of fire activity uh within them that are visible
[15:00] in this false color composite. Others have less so and some you can't even see at all with this false color composite.
[15:07] However, there is enough of a response there in the mid- infrared and longwave infrared bands that the algorithm can
[15:14] detect the activity there. those smaller uh fires that are not visible at this resolution of the imagery uh to the
[15:20] human human eye. So um the pixel size for fire detection data that are provided in firms varies. It's determined by the
[15:29] spatial resolution of the source sensor system that's being used. And as I mentioned before, we use a lot of
[15:34] different uh uh satellite systems that are contributing fire detection data to firms. And that those spatial resolutions of those sensors can range
[15:43] from 30 m up to 3 km. And the coordinates of those centroidids we can easily calculate and extract from the
[15:50] fire detection outputs. And then we can use that information to map in firms in the interactive map interface as well as
[15:57] to develop a whole host of geospatial products that we distribute from the firm's uh framework as well.
[16:08] A little more discussion about what detection means on the ground. Uh in addition to the fire characteristics I
[16:14] mentioned on the previous slide, there's a whole host of other factors that can you know contributes to the ability to
[16:20] detect uh fire activity using satellites. One factor relates just to the physical parameters or uh of the s
[16:28] of the satellite and the sensor itself. Um so like the altitude of the sensor um and the scan angle or the view angle uh
[16:37] that the sensor sees at the time of overpass is an important consideration. For example, polar orbiters when they
[16:43] make that overpass they're looking out about 55° either side of the point below them what we call nater. And
[16:51] geostationary sensors see or have a even wider framework of view. they are looking outwards up to about 85°.
[17:00] Well, that uh um incre at those pixels that make up the satellite image um we see those increasingly higher view
[17:10] angles out towards the edges of what we call the swath or or the frame of view due due to that increasing distance and
[17:18] uh from nater and the curvature of the earth that can create what we call a distorted instantaneous field of view
[17:24] for those pixels and those pixels get stretched and distorted in both dimensions and this is a common issue
[17:30] you in sensors like modus and go's advanced baselized imager sensor and some others and so the multisspectral uh
[17:38] responses uh that we uh uh receive for each of those pixels that are distorted uh can cause errors in what the signal
[17:47] that's received which can contribute to errors in the uh output uh fire detection algorithm uh products as well and we'll highlight
[17:56] these issues later on in the presentation and throughout the training session. The timing of satellite overpass or observation is another thing
[18:05] to consider. Sometimes uh you know with the polar orbiters I should say we don't have um fire activity maybe going on
[18:14] when the fire satellite goes over and so it's just a matter of timing of the fire u when it's burning and when the
[18:21] satellite is able to detect it at the time of observation. Geostationary sensors, it's a different story because
[18:27] they have a persistent uh capability or persistent observation capability and they're constantly staring and taking observations in a very high temporal
[18:38] frequency. Uh there's various other uh environmental factors that also affect the detection capability of a fire. That
[18:46] includes the the fire size and intensity as mentioned on in previous slides, but also very thick cloud cover and smoke
[18:54] cover can also prohibit the ability of the sensor to uh see those uh infrared signals and and detect the fire. And
[19:03] also fires burning under thick uh tree canopy cover cannot be detected as well. And of course terrain. If you have a
[19:10] fire that's in a very steep canyon and depending on the view angle properties, uh you may not have the line of sight to
[19:16] detect that fire activity. And of course, the heterogeneity heterogeneity of the the local land cover uh where the
[19:23] f the fire detection algorithms making that assessment of of you know determining if it's a detection or not
[19:29] can also contribute to the uh at least the accuracy and reliability of those fire detection outputs. Um so what types of of what sizes and
[19:44] types of fires can be detected by satellite? Well, polar orbine sensors are used uh quite frequently in fire
[19:50] detection and monitoring and that's because they have very good spatial resolution compared to geostationary sensors. Um this slide here shows the uh
[20:00] what we call the lower size limits of fires that can be detected by um sensors that are commonly used in firms modus
[20:08] and beers and lancet and you can you see the varying spatial resolutions as well for each one of those sensors which is
[20:15] also portrayed graphically on the right so you have an appreciation of their footprint but essentially um the much
[20:22] smaller fires can be detected as you can see uh the much smaller fires can detected under nighttime conditions
[20:29] because there's more uh discrimination between the radiance from those uh fires compared to their background conditions in the night than during the day. And
[20:37] also um you need to be very careful still in using algorithms or active fire detection data because algorithms are
[20:45] not perfect and also the data that goes into them are not perfect and they're may be prone to error that we can't
[20:52] account for. So again, always use these data cautiously and pay attention to, you know, the confidence rate ratings of
[21:00] the data when you're using it and for applications. So let's get back to the use of active fire uh detection data and
[21:13] the sources that are available within firms. firms uses multiple satellites and sensors to detect and monitor fire
[21:20] activity and provide other various fire science remote sensing uh products. And currently we use 15 satellite missions in firms that are managed by
[21:30] five space agencies throughout the world and collectively this provides access to 16 satellite sensors that we uh provide
[21:38] operational data from and integrate into firms on a daily basis. firms utilizes uh relevant science products from a variety of uh space miss
[21:49] or satellite missions throughout the world and this table summarizes those products that we currently provide in firms. Um we uh provide active fire
[21:59] detection data from 12 satellite sensors right now and we're actively working uh with science teams from NASA and also
[22:07] the European Space Agency and to provide active fire operational active fire detection data from Sentinel 3 SLS
[22:16] SLSTR in the near future. Um we also provide true and false color imagery uh from all these satellite sensors uh with
[22:25] the exception of a few geostationary sensors. We have yet to integrate uh false color composite imagery but we're
[22:31] actively working uh on that. And of course we also use the dayight band uh imagery products. They're available from
[22:39] beers. And uh we uh also integrate the burned area product that's available from um modus and we're actively working
[22:48] uh with PIs at NASA and the University of Maryland to develop and implement a near realtime beers burned area product
[22:57] in in the next year or so. And uh we also uh are integrating or have integrated uh the harmonized LANCAT
[23:08] sentinel uh imagery data and recently that NASA effort has started to make available a whole suite of uh vegetation
[23:16] indices and we're actively working to integrate um various fire related indices from that product suite including NBR and NDBI and so forth into
[23:27] firms and aerosol indices from the various uh satellite missions. We also incorporate so folks can track the
[23:35] migration and movement of smoke from various fires and snow cover is a product that we are now pro providing
[23:42] from deers and the purpose of that product is to monitor the recession or change of the snow line in the spring as
[23:50] the snow moves back. uh fire managers can then start paying attention to those areas uh more closely and watching fire
[23:57] danger forecasts and whatnot and the increasing fire danger. Um firms doesn't directly produce all the fire detection data,
[24:08] imagery and other uh types of data that makes available. Um these data are all made available via partnerships uh firms
[24:15] has established with agencies and programs and institutions uh including the global near realtime data feed that's provided by NASA Lance and
[24:24] recently uh firms has put a lot of uh increased emphasis on further lowering the latency of our products u
[24:32] particularly active fire detection wherever that's possible. Um before the last year or so uh the system was
[24:40] entirely fed by the NASA Lance system uh which has a latency of 1 to three hours globally. Uh but we've actively been
[24:48] incorporating the use of uh direct readout data at least in the United States in Canada. uh we have uh several
[24:55] uh direct readout ground stations we have access to through our partners at the University of W Wisconsin and
[25:01] they're using NASA algorithms to provide us uh active fire detection data that we can provide for that geographic area.
[25:08] We've also been working closely with our partners at the University of Maryland and USGS Aeros data center to provide uh
[25:15] 30 meter LANCAD active fire detection data and um we use the uh ground station capabilities in Sou Falls, South Dakota
[25:24] and the LANCAD data that's collected there to provide those data in real time and deliver it to uh users in the US and
[25:33] Canada and Mexico area. And lastly, we've actively been working with uh all the space agencies that manage u uh
[25:42] geostationary satellite assets throughout the world and uh acquiring their data and processing it to provide active fire detection data using the
[25:52] latest uh science-based algorithms that are or science sanctioned algorithms that are available and providing those data in real time. And uh this is just
[26:01] intended to be a highlight of these activities and uh we'll be uh u discussing these uh activities in more
[26:08] detail uh throughout this training session. So the the next uh part of the uh session is we're going to do a little
[26:18] demo and talk about how you can access active fire uh information using firms. So when you go to global firms at this
[26:31] address um here this is what you see uh when you start uh there's this is what we call our landing page or the gateway
[26:39] page to all the uh functions and tools and capabilities of firms. Uh there's the fire map which we'll be spending
[26:46] some time on here uh in a few minutes and you can go and use this interactive uh map viewer uh through that gateway.
[26:54] Active fire detection data you can download data as commaepparated value files as reshape files um um and the
[27:04] KMLs and whatnot. We have a whole suite of formats that the active fire detection data are available in
[27:10] available in and can be consumed by variety of software applications. If you're interested in setting up an alert
[27:18] uh for a geographic area of interest, you can visit this uh portal and define that area and you'll receive
[27:25] notifications when an active fire detection has occurred in that area. You can also uh order and download uh
[27:33] historical uh active fire detection data from modus and beers and landsite data that are archived by the firm system.
[27:40] And of course you can access uh web mapping services both WMS and uh WFS format for consuming in uh desktop GIS
[27:50] applications or uh web applications that you're building yourself. The firms US Canada has the same look and feel for
[27:58] that gateway. And I'll highlight again some differences between firms US Canada and firms global as we go through this
[28:06] uh demonstration here. But if we jump into the fire map, uh this is what the uh the interface
[28:15] looks like for the fire map. Most users when they uh work with firms data are working with the fire map and it's you
[28:22] know the typical uh type of web mapping interface but it's a very very rich in data sources and tools and capabilities.
[28:32] Uh when you uh if you visit the little hamburger icon here on the left, you can easily jump to any of those uh gateways
[28:41] to other uh sources of data in different formats as well as uh you can create image image subsets. We have blogs to post
[28:50] information about new data sources and capabilities and firms. Um we also provide provide tutorials and we also have a very robust
[29:00] uh FAQ page and then other uh related uh support resources that might be of interest. So all those things I just
[29:08] mentioned are provided in addition to the the standard uh products and services that are available. So that
[29:14] that stays up there docked on your uh side of your map if you like. Uh we have
[29:18] you know zoom in zoom out buttons, location tools, the scale bar. Uh we have a toolbar down here that allows you
[29:24] to uh do various functions that we'll highlight here in a second. Uh I'll just turn on the timeline here. This is a a
[29:32] time slider bar. Allows you to set the date if you prefer here. Um and then we have uh the uh
[29:40] various uh buttons up here in the upper right. Um, one the most important being the announcement um, button and you can go there to see
[29:50] if there's any new announcements that the firms team has put out or NASA has put out that would affect data or
[29:56] information that's provided on firms and we'll highlight that here in a second. And of course, feedback. If you're
[30:02] interested in providing feedback to the firm's team about the uh interface or if you have a question about the data, feel
[30:09] free to send us an email and the firm's team will respond to you. you. Um the as I mentioned before, the firm's
[30:18] uh interface is is very rich and uh has a lot of layers and functionality. So to make it scalable to best meet user needs
[30:27] uh when you first jump into the firms it'll be in what we call basic mode which provides uh just a polar orbiting
[30:35] uh active fire detection data as well as a limited number of image resource uh image layers I should say and also some
[30:44] stat various static backgrounds and some overlay layers here as well. But you if you click on the little hamburger icon
[30:51] here, you can change into various modes that we have predefined to meet particular user needs. If you're
[30:58] interested in looking at burned area uh products or looking at products uh relevant to tracking smoke and aerosols,
[31:05] you can jump into those respective modes and you can jump into what we call advanced mode. And we also have what we
[31:13] call an experimental mode where we're putting products that maybe NASA science teams are are have released in a kind of
[31:21] a beta form if you will that they're not quite what ready yet for operations but we'd like to make them available to the
[31:27] user community to take a look at and may you know provide some feedback on and we can also assess and see how they perform
[31:34] before we fully integrate them into the interface. interface. Um, so if we jump into the advanced mode, that's the most robust uh mode.
[31:42] You have the most layers to choose from and uh functionality. And so when you first jump in, you have the capability uh to
[31:51] set your what I call your reachback threshold. And by default, you can see all the detections for what we call
[31:58] today. And that's everything that's as of midnight UTC time to to the present time. If you set
[32:07] it to the 24hour window, you're seeing everything everything uh basically for the last roughly day to two days. And if you want to see what
[32:18] those things mean or if you need information on anything in the firm's interface, click on the little I button
[32:24] or icons here and you can see as I described here and what does it mean or how far is your reach back when you have
[32:30] it set to today or 24 hours back or 3 days back and you can see those time
[32:35] thresholds that are being applied and we have some various tools here to uh you know we're displaying all
[32:42] the data for the entire day. You can also make uh subselections or filtered fire detection data through you know
[32:49] particular uh hourly periods within a day if you'd like and we'll be talking about that later in a training. And of
[32:56] course you can also set the the calendar date for um that you're interested in. By default firms will show up for the current uh
[33:05] day that we're on. And this is another uh reachback capability. You can go back 31 days in displaying fire detection
[33:13] data on this map in firms. And of course you have all the uh polar orbiting data. And if and if you
[33:21] open up the layer here for geostationary these are all the sources of geostationary active fire detection data
[33:27] that are available. And um again the info button is your friend. If you click on these buttons for the layers, it'll
[33:37] take you to a popup page that'll tell you all about that particular data product, where it's coming from,
[33:43] attributes that are associated with it, and the description of those attributes. And as you can see, we also
[33:50] have our data divided up into uh into groups. And if you click on those little info buttons for those groups, it gives
[33:58] you a brief description of what's in that particular group. So here's a description what's in the polar orbiting
[34:04] group. Here's a description what's in the geostationary active fire detection data group and so forth. Uh down here we
[34:12] also have um orbit tracks for polar orbiting sensors. Um so you can get the ascending and descending uh orbit tracks
[34:21] for the current calendar day you have set uh for all these various instruments that we use and provide data from in
[34:28] firms. You also have access to the modus burned area product which is a 500 meter spatial resolution product that's
[34:34] compiled on a monthly uh time step and you have full reachback uh for the entire modus record for that product for
[34:42] display and as noted here this is not a real-time product it due to the way that that product is generated there's a bit
[34:50] of a lag there but it's typically available in firms about 3 days I'm sorry 3 months after the the current
[34:57] a um current uh or gritted uh fire hotspots. We'll talk about that in a minute, but allows you basically uh to
[35:05] summarize and view fire detections at a at a coarser scale and uh and infer information from it.
[35:13] uh aerosol indices. We currently provide aerosol indices from SNP amps or the uh ozone mapping profiler profiler oz ozone
[35:24] mapper and profiler suite. And we're working on integrating um amps data from Noah 20 and 21 as soon as it's uh
[35:33] available and produced in near real time. And we also have a whole series of uh uh contextual uh uh data layers uh
[35:42] for overlays uh that may help you out in using the data. And as I mentioned in the previous uh slides uh we do provide
[35:49] access to the harmonized LANCAT Sentinel 2 um imagery for the entire globe both in a true color and false color uh
[35:58] format. format. um drop this drop the data here real quickly for LANCAT. If I set the date
[36:06] back a couple days because these data are available on about a 2 to four uh day delay, they're not available in real
[36:16] time. So you can see this is all the LANCAT 8 and Lancat 9 acquisitions on this particular uh date. And here are
[36:24] all the Sentinel 2 acquisitions. The missing pixels here are where the the data is masked out because it's too
[36:31] cloudy and doesn't meet that cloud uh threshold. And of course, we have all the uh satellite imagery from beers
[36:41] modus and true color composits as well as false color composits from all of those uh sensors. And we also have the
[36:49] dayight band uh products from uh Beers SNPP and Noah 20. And uh we're we'll be working on getting uh Noah 21 beers
[36:59] nighttime products in integrated as well. And of course we also have go imagery uh for right now. So um turn
[37:08] this off for a moment. And I'm going to jump here to the 22nd or I should say
[37:14] the 27th of March. Um as you can see here I have a a one day reachback. I'm
[37:20] looking at the current uh days worth of fire detections for all the polar orbiting sensors. And I'm going to turn
[37:28] some of these groups off just so the uh the list is not so long. And there's a lot of detections by
[37:38] default. Um the fire detections from all the polar orbiting sensors show up in different colors of red. And that can be
[37:45] kind of overwhelming to to look at that. Um but you you can look use different classification schemes we have loaded
[37:51] up. This is what we call a time sense detection or tsd classification. And what it's showing me in intervals of
[38:00] hours how current those detections are to now uh based on when they were observed. So the bright red ones are in
[38:06] the last hour and the the lighter red ones are in the last 1 to 3 hours. And
[38:14] then the orange are in the 3 to 6 hour range on up to yellow which is just
[38:18] outside of 24 hours. Um we won't have any in that that last category since we're just looking at the last day. But
[38:25] if I wanted to do a little bit more of a reach back say to a week then I'd definitely have a lot more
[38:34] of those uh uh fire detection pixels uh in the beyond the last 24 hours now displaying. I can now also change that
[38:41] to days time since detection in days. So instead of hourly intervals, we're looking at daily intervals here at at at
[38:48] data. So let's take a look at the fire detections in the last couple days here. And um maybe I wanted to instead of
[38:56] looking at all these detections that are going on, maybe I would like to look at that data in another way. And so going
[39:02] back to our grided u fire hotspots data, I can generate um a grided summary of the active fire detection counts on a
[39:13] 0.25 by 0.25 uh degree grid. And this is done automatically. So give it a second here and it calculates it. And I can go
[39:22] back up here and turn off those detections. And so basically I have a heat map that's telling me uh between
[39:28] one uh which is on the yellow end of the range up to 100 plus on the red side of
[39:34] the range of how many detections are inside of each one of those uh quarter degree uh grids. I can also turn on the
[39:41] labels. You can't this is computed dynamically. So I can't click on it and get the attribute, but I can at least
[39:47] display the those pixel counts as a as a label and I can see how many uh pixels
[39:53] there are or active fire detection pixels are in that grid. Anyway, I can do that for any of those polar orbiting
[39:59] uh satellite sources. So, So, um, let's, uh, take a trip back in time to show you how you can have full
[40:08] reachback in firms for all of the satellite missions. So, let's jump back just to the summer fire season, uh, last
[40:17] year, um, July 27th, and see what's going on here. turn on those uh detections again and it'll do something here in the last uh
[40:33] time since detection for the past uh you know 24 hours here over the this two-day uh reach here. So um this is everything
[40:42] that's going on in about the last 48 hours as of uh July 27th, 2004. Uh you can see all the uh the burning that's
[40:51] going on uh below the equator in Africa as well as uh over here in South America, you know, forest clearing in
[40:58] the Amazon as well as agricultural burning over here. Uh gas flares. Uh you can see a lot of that here and here in
[41:05] the Middle East and also up here in in western Russia. A lot of these are gas flares, but you can also see the
[41:11] wildfires here in in Siberia as well as in the northwest United States and northwestern Canada that are that are
[41:18] going going on. So, we can take a little bit of a visit visit here. Take a look at the fire activity
[41:26] here in Northern California. Um, again, we're looking at everything here. uh just to kind of give you an idea what I was talking about
[41:35] before you're looking at the various uh pixel resolutions of the data from the various sensors. We render all those
[41:42] points accordingly. So if I just want to look at the LANCAT detections, these are 30 m cells and of course 375 meter cells
[41:53] um with the beers data and 1 kilometer cells from modus. So we render those data relative to their nominal spatial
[42:02] resolution. Um I can take a close look at these uh detection data relative to the u the imagery. So
[42:15] I'm looking at Noah 20 beers. And if I take a look at the uh false color composite imagery for Noah 20, they've
[42:22] got a lot of smoke here, but the shortwave infrared bands in this composite help cut through that smoke.
[42:28] By comparison, if you look at the true color composite, which is just a visible band, you can hardly see anything at
[42:32] all. So, we look at those uh those data there, I can uh oops, I can then, you know, take a look
[42:44] at that and I can see where those active fires there are. I'm I'm just kind of flickering it there. If I change it to a
[42:50] custom uh rendering here in BMS, I can uh split it open and I can say I only
[42:58] want to look at the daytime pass which would of the active fire detection which would correlate with this image. I can
[43:04] also adjust the opacity of those detections. So I could swipe it if you will to see what's going on. And I can
[43:11] see the active firefront uh here in this imagery and those detections that were um detected at the time of that
[43:20] overpass. And um we can do that with all the other sources of uh detection data as well. So
[43:30] here's Noah 20 beer, Noah 21 vs. And then I turn on Noah I should say SNPP ver. But nothing comes on. It's empty.
[43:39] Why is that? Um, why am I not getting any data? Well, this is where you could use that announcement uh information to
[43:47] help you out. If you go down to announcements and technical issues and outages, you'll be sent to a page here
[43:54] that lists when particular data outages occurred, when they started, and when they were resolved. So I do a show all
[44:01] and I was looking again at July 24th of I'm sorry July 27th of last uh calendar year and on the 24th there were some
[44:10] technical issues that uh started with SNPP that affected the data processing and so they halted the data processing
[44:16] that was later resolved and production renewed back on the the 30th of uh July uh about a week later. So between the
[44:26] 24th and the 30th there was just no S SNPP data available. So which is why you don't see any um S SNPP v satellite
[44:35] detection data nor do you see any S SNPP imagery. So just a little pointer there on how you can use that information to
[44:43] help you sort that uh that information out. And just one other thing to highlight the LANCAT data uh you don't
[44:52] have the same uh temporal resolution with LANCAT that you do with modus and beers you're between LANCAD 8 and LANCAT
[44:59] 9 we're getting a look at any point on the earth about once every 8 days at higher latitudes uh we get some overlap
[45:07] between the swast and you'd have a a higher u observation uh frequency than in the mid latitudes but again at the
[45:14] mid latitudes you're only going to see it once every 8 days, but when it's available, uh it's a very um uh you
[45:23] know, highly uh spatial high spatial resolution resource uh for looking at uh fire detects. And if I look at the HLS
[45:31] LANCAD imagery that's available on that acquisition from the 27th, takes a second to draw in there because it's higher resolution
[45:40] data. And doing what I did before, play some uh games with the opacity here. I can see that active firefront at a
[45:49] higher spatial resolution of 30 m and those 30 meter fire detections. So let's uh draw everything up again and I'm going to turn off my
[46:03] imagery. So the next thing I wanted to visit with you on it was or at least demonstrate is what if I wanted to find
[46:09] out how far away I am from a fire. Well, there's uh we have these uh fires that
[46:16] are going on Northern California and up here in Oregon and I can use my location tool and I can put in this location. You
[46:24] know, think of it as like a digital gaziteer. I can put in Salt Lake City, which is where I'm located at. And I got
[46:31] my uh location here. I can save this location for future use and you can see it here. Now it's saved. I can just
[46:38] toggle it and bring it up at any time. So I have this location here established and let's say I wanted to get a rough
[46:45] idea of how far this fire is away from me over there in California. I can use the measuring tools and you'll get a
[46:51] little tool that pops up here. By default it's going to measure area. So you have to set it to distance. I can
[46:57] set my units to kilometers or miles and I can measure from Salt Lake City to that fire and see that's oh I'm about
[47:04] 840 840 uh kilometers from that fire and if I was interested in seeing how far I'm from those fires up in northern Oregon
[47:12] I'm about 760 km away from those fires. So you can use this uh information and locationational tool to identify the
[47:21] location of anywhere on earth that's uh available in that gazetier and uh plot those locations and save them and uh you
[47:29] know use them to at your will in within the firm's interface. Um the next thing I'd like to
[47:36] highlight is um you know using those contextual layers that I mentioned. We have a a whole uh list of various overlays that
[47:47] you can uh utilize. By default, a more generalized uh border and roads layer is available. But if you wanted a more
[47:57] detailed layer, you can draw those up. I'll zoom in here. And where I'm from here in the Salt Lake area, you can see
[48:05] as you zoom in to larger scale, you get more detail. And uh so that uh layer is
[48:11] available. You can also plot the latitude and longit long longitude grid for reference purposes. Um there's our
[48:19] snow cover layer. I'll zoom out a little bit so you can kind of see what the extent of that
[48:24] is at this time. And then uh we have a built up um so you can see where all the urbanized
[48:37] or populated places are. uh which is you know good and this is a global uh product and which is good to have and if
[48:44] you know want to know if fires are threatening any builtup areas and of course we also have you know protected
[48:50] areas uh national parks and other uh types of regions um of interest that are you know protected by the government or
[48:59] uh other organizations and understanding the the threat of fire in those particular areas and um orbit tracks. I wanted to highlight
[49:12] that for a moment. Um if I was interested in knowing when Noah 21 beers is going to be o overpassing u
[49:22] the western United States on July 27th, 2024. I can see here here's the the orbit track going over the western
[49:31] United States. And here's the orbit before when it went over the eastern United States approximately 98 minutes
[49:37] before uh this western orbit pass. And you can see these time intervals that are marked. These times are in
[49:44] UTC. And if I you know draw up the uh the imagery, the Noah 20 imagery again this is the center line of
[49:53] that orbit. And the the swads are so light wide with veers that they they overlap with each other um by about 10%.
[50:02] Uh so there's no gap there like you like you see with the modus data. So these uh
[50:07] orbit tracks help you in determining the time of overpass when you're looking at imagery when you're looking at fire
[50:14] detection data. If I click on the fire detection data, I get all the attributes about that fire
[50:20] detection data including its latitude and longitude coordinate, its brightness, temperature in the and the thermal bands and it's um what we call
[50:30] here these are the instantaneous field of view dimensions at that view angle and also the source of the satellite and
[50:38] the instrument its confidence level and the version of the data and um and so on and so forth. And again, you can use
[50:48] this information here to determine that time that that fire was detected as well in addition to the orbit
[50:58] tracks. So, um the next thing I wanted to show you is how do you uh share uh a map in uh in
[51:07] firms? Um you can do that a couple ways. uh you can capture you know the map you
[51:14] have on the screen like if I I built this map and I really like it and I want
[51:18] to share it with my colleague I can do a screen capture what I see within the view I can save it as a JPEG a PNG GIF
[51:25] or or even a geotiff that can you know be uh drawn up in appropriate coordinate space in a GIS and I can choose if I
[51:33] want to keep you know these headers and time stamps and scale bar on there as well and I can download the image and
[51:40] You can see I'll name it with the u the date that you're looking at in in firms
[51:48] and also the coordinates for the uh center of the view and the zoom scale that you're at. And I'll save that and I
[51:55] can bring that up and display it here. Here is my uh screen capture that I just exported uh from firms. It
[52:08] includes that uh name that appears on the header. It also includes the scale bar and the timestamp that I specified I
[52:15] can toggle on or off and I have a nice screen capture there I can share with somebody. The other thing uh you can do
[52:22] is if I built a map that I really like and I have all the layers that turned on
[52:27] um as well that I like and have it drawn at the scale I want. I can also share
[52:32] this link. I can copy this link. I can, you know, put it in a team chat to
[52:37] somebody and send it off. I can also, you know, click on the email button. It'll spawn, you know, a pre-populated
[52:44] email, uh, using whatever email service you use and with that link in it and you can, uh, send it off to a
[52:50] colleague or you can post it to, uh, you know, social media if you have a social media account set up and just hit that
[52:57] button and it'll have it all prepopulated populated with the link. And uh so this is uh the
[53:05] conclusion of my uh demo here. So this is not intended to be an in-depth demo. It's just kind of a high uh level demo
[53:13] of how you can access all the uh various data layers and firms and get a a general idea of the functionality. The
[53:20] only thing I want to highlight on the way out from this demo is firms US Canada. If we jump into that uh map
[53:28] there again you have a very similar uh interface scale it up here to the advanced mode and the difference is um
[53:37] we have some additional layers uh that are not available in BMS global that being we work with the national inter
[53:44] agency fire center to uh pull uh locations of current large wildland fire incidents that are ongoing United
[53:51] States. We also coordinate with Natural Resources Canada put to pull information and data that they post on current u
[54:00] large uh wildfires that are ongoing in Canada. On these various uh layers, you have the flexibility to
[54:08] threshold the sizes. So if I wanted to look at all the fires in the United States, they're greater than 40 hectares
[54:14] versus those that are greater than 400 hectares, I can toggle that and filter it accordingly. And same thing with
[54:20] Canada. Nothing's being displayed there at the moment at the 404 U hectare threshold. If I drop it
[54:28] down to 40 hectares, there's one uh incident there in the Calgary area. Uh we also include fire perimeters as well.
[54:39] Uh we have some active incidents going on in the eastern part of the United States. So you can see here these are
[54:46] perimeters that are actually provided by the incidents and these are acquired and compiled not using satellite imagery but
[54:53] using typically airborne uh infrared resources and on the ground intelligence to delineate and update these perimeters on the the every single day and we
[55:05] provide them in in the firms for context so users can see u what's going on with fire detections uh relative to those
[55:14] perimeters. And we also provide fire uh danger outlooks. Uh this is the current uh fire danger outlook for today in the
[55:23] United States. Uh green being there's little or no risk on up to brown uh being moderate risk. And we also have the forecasted
[55:32] fire danger product from NR Canada. And they'll draw in here in a second. They're not uh uh processing data for
[55:41] the entire uh Canadian area as of yet, but they will as the uh you know spring months wear
[55:48] on. So uh that is the conclusion of my demo there and I'll jump back over to the slides one moment
[56:01] here. So um the next uh part of our session today uh we're going to hear from a colleague Jenny. Jenny Houston
[56:08] and she's going to be talking about the strengths and limitations of active uh strengths and limitations of various
[56:14] satellites and sensors and also the active fire detection uh data products that come from them. So with that I'll
[56:20] turn it over to Jenny. Well thanks Brad. Okay. So, we've provided um background on the the theory
[56:31] of how active fire detection by satellites works and an introduction to uh NASA's firms. We're now going to talk
[56:39] about multiple considerations or or the relative strengths and limitations of different satellitebased active fire detection products. Due to the range of considerations or or
[56:56] kind of the the multiple nuances of different sensors and and products, firms makes available active fire detection data from multiple satellites.
[57:07] This is essentially because no one satellite meets um all needs in terms of both the technical requirements and the
[57:16] fire management information needs. The technical requirements can include things such as whether global coverage is required. Not all active
[57:27] fire data is available globally. And if frequent observations are required, this will generally limit what's available to
[57:36] satellite sensors with a more coarse spatial resolution such as modus unless a constellation of fine spatial resolution sensors are used.
[57:47] Conversely, if relatively high spatial resolution data is required, these will generally be available less frequently due to the longer time between repeat
[57:59] satellite satellite observations and the accuracy, consistency, and reliability of different active fire detection data differs. This is why
[58:11] firms includes multiple sources so that users can decide which data source best meets their needs for their area of
[58:20] interest. On the fire management side, these needs may also differ and this drives which active fire data is
[58:29] the best fit or the most appropriate for the application. Perhaps the rapid detection of new ignitions is important or the user needs
[58:40] to monitor fire progression. A fire manager may need to quickly assess the risk of a fire and the risk that it presents to uh
[58:51] nearby human populations or other resources such as infrastructure. or a user may need to track smoke plumes from wildfires to
[59:02] assess the effects and then issue air quality quality information. These are all factors that can drive which data source or
[59:11] contextual information product is the most suitable for different user applications. So Brad mentioned both polar orbiting and geostationary satellites. Firms has
[59:25] historically relied on data products from polar orbiting satellites. But in the last two to three years, FMS has also incorporated data
[59:34] from geostationary satellites. So I'm going to review the major differences between these two particularly uh with respect to active
[59:43] fire monitoring. The illustration on the top right is an example of a polar orbiting satellite. And as you can see, the satellite orbits
[59:53] from pole to pole while the Earth rotates. It keeps going over and over, covering more and more of the Earth on
[1:00:02] each overpass until over time the entire Earth is covered or imaged by the satellite satellite sensor. Polar orbiters are considered
[1:00:12] sun synchronous. They move with the sun and they collect both daytime and nighttime sides of the earth. They're
[1:00:20] located in a relatively low orbit less than a thousand kilometers above the earth. And in general, they provide one
[1:00:28] to do observations um of the same location location daily. Although there are a number of uh additional considerations here which
[1:00:37] we'll cover in the next slides. Additionally, at higher latitudes, there are more observations due to convergence towards the
[1:00:46] poles. The sensors cover what is called a swath and different sensors have different defined swath widths. We'll
[1:00:54] also cover this a little later. Generally, polar also have higher spatial resolution. The animation on the lower right is of a geostationary
[1:01:06] satellite. And we can see that this satellite is locked on a particular location of the earth. Um it stays
[1:01:17] stationary with respect to viewing the earth. They're they're positioned as such for meteorological monitoring as that's their primary
[1:01:26] application. They're located in higher orbits approximately 35,000 kilometers. And because they are consistently viewing the same area of the Earth, i.e.
[1:01:38] they're observing a full disc of the Earth's hemisphere, they have multiple observations per hour, which can be very
[1:01:46] important for active fire monitoring. This is also a significant strength over polar orbiting satellites. Conversely, they have a relatively coarse spatial
[1:01:58] resolution. resolution. I mentioned swaths in the previous slide and this looks quite busy at first, but it shows the relative ground swath for
[1:02:09] each of the sources of active fire data and imagery in firms plus a couple of additional sources of active fire data
[1:02:17] in in light gray that are not included in firms but may be of interest. In addition to the SWAT, we've also
[1:02:26] included the spatial resolution of each of the active fire products plus the temporal resolution. The geostationary satellites are listed at the top. Then
[1:02:37] the polar opposing satellites. First we have GO 16 and 18 um also called GO East and West and
[1:02:46] these carry the advanced baseline imager or API sensor. These are centered primarily over the Americas at at -75.2 and minus
[1:03:01] 137.2° longitude. The swath is over 10,000 kilometers and as we saw in the previous slide, they image a full disc
[1:03:11] of Earth. The temporal resolution of these satellites is approximately every 10 minutes, which can be incredibly useful, but they also have a much
[1:03:21] coarser spatial resolution in terms of the active fire product of approximately 2,000 m or 2 kilometers. Meteor set 9
[1:03:30] and 11 carry the spinning enhanced visible and infrared imager or severe instrument. They're centered over Europe and Africa at 0 degrees and 45.5 degrees
[1:03:44] longitude. The swath is approximately 11,400 kilometers and the spatial resolution of the actifier products is 3,000 3,000 m. Again, the high temporal resolution
[1:03:58] makes them very useful for actifier detection. They image a full disc of Earth every 15 minutes or less. Himari 9
[1:04:07] carries the advanced Himoari imager or AHI. It's centered over Asia at approximately 140 degrees longitude and the spatial resolution of the active
[1:04:19] fire products is 2,000 m. It's the same as go 16 and 18. The temporal resolution is also very high.
[1:04:29] It images the full disc of Earth every 10 minutes. and the swath width is approximately 11,000 kilometers. So the
[1:04:38] combined spatial coverage provided by these three sets of geostationary satellites means almost consistent monitoring of the earth which can be
[1:04:48] very helpful in active fire detection. The remaining satellites here are polar orbiting satellites. And what we notice
[1:04:57] initially is that the polar orbiters have a much narrower swath width. First are SNVP, a joint NASA Noah mission and
[1:05:06] Noah 20 and 21. These have a swath width of 3,000 kilometers. They each orbit the Earth twice daily and they each carry the V
[1:05:17] instrument. The spatial resolution, as you can see, of the actified detections, is 375 m. Next up, Terra and Aqua both carry
[1:05:27] the Modus instrument. The swath of Modus is is 2,330 kilometers. They also orbit the Earth twice daily, and the detections
[1:05:37] are a kilometer or 1,000 m. Modus is actually considered the workhorse of active fire detection with archives
[1:05:44] spanning over 20 years. As I mentioned, we've also listed Sentinel 3A and B as well as Sentinel 2
[1:05:54] A, B, and C. The fire detections um are available from these sensors um but they're not currently uh available
[1:06:04] through firms, though they may be uh of interest for you to explore. And finally, LANCAT 8 and 9,
[1:06:11] which carry the operational land imager or OI. As you can see, they have the narrowest swath width of just 185
[1:06:20] kilometers. This in turn drives the temporal frequency, which is approximately 8 days considering both LANCAT 8 and 9
[1:06:30] combined. But the fire detection from OI has a really high spatial resolution of approximately 30 m. As Brad mentioned, fire detections
[1:06:43] from LANCAT 8 and 9 are available in firms for the continental US as well as parts of
[1:06:51] Canada. So I mentioned this spatial coverage provided by these three sets of geostationary satellites. And as you can
[1:06:59] see, the coverage of each satellite is approximately 120 degrees longitude. And there's a lot of overlap in the
[1:07:06] coverage. So moving left to right we have goes 18 and 16 meteor set 11 and 9 and himary 9 on the right hand side. One
[1:07:17] note is that meteor set 9 or IODC is now centered at 45.5 degrees longitude. And this is a a a comparison
[1:07:29] of the coverage from uh geostationary and polar orbiting satellites at two different time stamps. The geostationary satellites are on the top and this is
[1:07:38] what they are seeing at 6:14 UTC on the 27th of March. Himari is on the far right. It's centered at 140 degrees
[1:07:49] longitude. Uh meteoret 9 is on the left of himari and then goes 18 is all the way over on the left. And these are all
[1:07:58] viewing areas of the the earth where it's daytime. uh it's it's late afternoon in Sydney, Australia, for example. Then in the
[1:08:07] lower left is a similar timestamp 6:16 UTC on the 27th of March. And this is Modus aboard Terror as Terror orbits the
[1:08:17] Earth. As you can see, much of the world is black as Terror has not imaged much of the world as yet at this time on the
[1:08:26] 27th of March. On the right, we're looking at 6 hours later, 1217 UTC, and now you can see it's nighttime
[1:08:36] um in much of the area that Himawari was um is continually viewing and now daytime in much of the area covered by
[1:08:45] meteoret map 9 and meteoret 11. Again, these satellites are centered at 45.5 and um 0 degrees longitude. And
[1:08:56] then in the lower right we can see that more of the earth has now been imaged by
[1:09:01] modus as terror continues its daily orbit around the earth. Okay. So we've talked about considerations in um in
[1:09:10] spatial coverage of the satellites in the temporal frequency in the spatial resolution and now we're going to spend
[1:09:18] a minute on on uh the sensor characteristics and u the spatial coverage of of satellites and how that
[1:09:26] impacts pixel size. This is something to consider when using um data and imagery particularly from Terra and Aqua and the
[1:09:36] geostationary geostationary satellites. Um, as I mentioned, Terran Aqua continually uh image swaths of 2,330 kilometers wide as they orbit the
[1:09:49] earth and the pixels actually become elongated on the outer or east west edges of the swath. In this illustration
[1:09:58] on the on the left, the the na pixel size or directly below the satellite in the middle of the swath. The pixel size
[1:10:07] is a kilometer but it actually grows in the across track direction to almost five kilometers as you can see on the
[1:10:15] swath edge as the viewing angle increases away from na. This results in these elongated pixels and it's important because any
[1:10:28] fire that is detected could be anywhere within this elongated pixel. This this change in pixel size is less of a
[1:10:38] consideration in v due to the sensor design and constrained pixel growth. And with LANCAT, it isn't a consideration
[1:10:47] because LANCAT doesn't have an expansive field of view. Again, the swath width of LANCAT is is much smaller. It's 185
[1:10:58] kilometers. For geostationary satellites, we've seen that the the area continually imaged by these satellites is is huge. It's around 11,000
[1:11:09] kilometers east to west and north to south. Now, if you think of a a flashlight beam focused on an area, the
[1:11:18] area in the middle of the beam is very bright or resolute, whereas areas further away from the middle become less
[1:11:27] bright and more blurry. Geostationary satellite imaging is is very similar. Areas of the earth directly below the satellite or
[1:11:37] subsatellite are the most resolute and for go 16 and 18 they have a spatial resolution of 2 kilometers as you can
[1:11:47] see in this illustration on the right. But but as the sensor's field of view expands away from that subsatellite
[1:11:57] point and the sensor views off Nadia the size of the pixel changes systematically as you can see in this
[1:12:06] illustration at 70° for example the pixel has now grown to 14.4 4 kilometers squared. And as with modus, this this has implications
[1:12:18] for active fire detection. Again, any fire that's detected could be anywhere within this increasingly elongated and and rumboid shaped pixel.
[1:12:34] This illustrates this change in in pixel size for goes uh 181 16 meteors and himari as this off nadia view increases
[1:12:46] at approximately 50° for example the pixel area is almost 8 kilome squared. Okay. So there are multiple
[1:12:59] considerations as we mentioned when using satellitebased uh actifi detections or imagery here. They're listed as as strengths and limitations.
[1:13:09] But the key is is really to think about what is the most suitable or useful for a particular application of a particular
[1:13:19] area at a particular time period. Bearing in mind that no one sensor meets our our requirements. On the left are the
[1:13:28] relative strengths and limitations of polar orbiting satellites and geostationary satellites are on the right. So polar orbiters as I've
[1:13:37] mentioned they have a long history of use for actify detection. The the algorithm development is therefore much
[1:13:44] more mature. I mentioned modus on board terror and aqua and again this is the the the workhorse for active fire
[1:13:52] detection dating back to the early 2000s. Users are also generally more familiar with these data. Polaropters have a higher spatial
[1:14:03] resolution. Um modus actifier detections have a spatial resolution of a kilometer. the year's 375 meters, lancat 30 meters and then the sentinel 20
[1:14:15] meters. They also observe um twice a day and more so towards the poles. Um they have a higher spectral resolution and
[1:14:26] the their sensors are typically optimized to map or monitor environmental phenomena such as fires. Um the data from these satellites are
[1:14:38] delivered to firms and made available to users relatively quickly. We will delve into latency more in the next webinar.
[1:14:48] But generally detection data from modus and v is delivered to firms within 3 hours of observation. The near realtime
[1:14:57] detection data from LANCAT is delivered within 30 minutes of observation. Again, LANCAT detection data is available for
[1:15:06] the continental US um as well as parts of uh southern Canada and northern Mexico. Firms also has what's termed
[1:15:15] ultra realtime detection data or UR data from modes and v. These are generated by the space science and engineering center
[1:15:24] in Wisconsin and these are data are available in firms within 5 minutes of satellite satellite observation. Again these are available
[1:15:35] for the continental uh US, southern Canada and Mexico. And uh I've noted on this slide that it's it's generally
[1:15:46] within um within 2 minutes of satellite observation. As I have mentioned uh previously, the geostationary satellites cover an entire hemisphere or or a disk
[1:16:00] of Earth and this can be very useful because of the frequent monitoring because they're observing the same area of Earth consistently. These
[1:16:11] observations are conducted multiple times uh hourly approximately every 10 to 15 minutes for a for a full disc. The
[1:16:20] active fire detections from the geostationary satellites are generally delivered to firms within 20 to 30 minutes after satellite
[1:16:30] observation. observation. Um because of this really high temporal resolution, geostationary satellites provide frequent sampling of fire activity which can enable earlier
[1:16:45] detection of new ignitions and it can be particularly useful for tracking fastmoving fires or short-lived or or
[1:16:52] transient transient fires. And again because of the temporal resolution, geostationary active fire data can be helpful for kind of filling
[1:17:02] in or gap filling between the polar orbiting orbiting detections. Also because of their expansive field of view, fewer
[1:17:12] satellites are needed for complete global coverage. So these are all the the relative strengths of the polar
[1:17:20] orbiting satellites and the geostationary satellites. We've also listed a number of limitations um but again this depends on the
[1:17:28] application the context etc. So for polar obvious we as we've seen they don't provide continuous coverage of the earth at one time unless
[1:17:39] a constellation is used and the frequency of observations really varies among the instruments. Um, VAS and modus
[1:17:47] have uh daily global coverage whereas LANCAT 8 and nine each image the entire earth approximately every 16 days at
[1:17:55] least at lower latitudes or 8 to 9 days with the two satellites combined. Uh for the three sentinel satellites A, B, and
[1:18:04] C, it's approximately 3 to 4 days. Another consideration is that multiple images acquired at the same location on
[1:18:13] the same day may not have the same uh view view geometry. And as we saw in the previous
[1:18:20] slide, modus on board terran aqua um experiences this systematic pixel growth um away from uh Nadia resulting in these
[1:18:30] elongated elongated pixels. Also modus is nearing um end of life due to the end of life of uh terror
[1:18:39] and aqua. These again have been the the um workhorse for over the last 20 years for active fire
[1:18:47] detection. And then there are multiple environmental conditions such as cloud, smoke, etc. that can obscure observation and prevent the detection of fires.
[1:18:59] Because Terran Aqua only observe twice a day. If there are clouds present during both or even one of these overpasses,
[1:19:08] fires could be missed. As far as the limitations of geostationary satellites, these are p these satellites are primarily designed
[1:19:18] for uh meteorological monitoring and and weather applications. So as such there are inherent platform and sensor characteristics that really
[1:19:28] need to be considered when used for active fire detection. As we saw in the previous slide, this distortion occurs
[1:19:35] with distance from Nadia. Um the the use of geostationary satellites for actified detection is also relatively new which
[1:19:46] means there is ongoing algorithm refinement and uh development as I've mentioned they have a a more coarse spa spatial resolution
[1:19:57] and the spectral resolution is not optimized for active fire detection. Additionally, act uh the data accuracy can be inconsistent with a higher number
[1:20:09] of false positives and in firms there is a harmonized global geostationary active fire product that has been filtered to reduce
[1:20:24] detections. Okay. So now we will move on to a few demos that will highlight considerations for using active fire
[1:20:33] detections and imagery. So now I've switched over to firms the the actual platform uh to to highlight a
[1:20:50] few considerations when using satellitebased active fire detections and and imagery. Brad has provided an overview of the firm's maps. And again
[1:21:00] there are two versions. There's there's the fire mapap global and the fire mapap USA and and Canada and these both fall
[1:21:10] within the firms US Canada and firms global platforms. Um, we're going to use both of those here to explore different
[1:21:19] sensors, different products, so that you can take kind of the nuances of these different products into consideration
[1:21:27] when assessing what to use for a particular location, a particular application, etc. Okay, in this first example, we're going
[1:21:36] to use FMS US Canada, as you can see here, and imagery from polar orbiting satellites to illustrate firstly how the
[1:21:45] spatial coverage of footprint and the temporal frequency really varies among the different polar orbiters and secondly, how this impacts the
[1:21:56] availability and the utility of different active fire products. We're going to focus on a fire that occurred
[1:22:02] in northeast Oregon in September 2022. It was called the Double Creek Fire and it was located east of Flora, Oregon.
[1:22:14] Okay, I have switched Brad showed you the different modes and I have switched from the basic mode which is the default
[1:22:21] entry mode to the advanced mode and I have located Flora here using the location tool up here and popped in
[1:22:33] Flora Oregon under find location. I've also set the date up here for the 10th of September 2022. And finally, I have
[1:22:44] toggled on the modus terror true color composite imagery. imagery. Okay, if I now just scroll out slightly, you will begin to be able to
[1:23:03] see if I also scroll down the broad swaths of modus imagery. You can see the swaths here, here, here,
[1:23:14] and they extend all the way up as as terra continues to orbit over over the earth from uh pole to pole. These swats
[1:23:23] are are 2,330 kilometers wide. And all of these together make up the daily global coverage of modus. Now, we do see these small gaps
[1:23:35] uh between the swaths. And if I now pop on the allow multilayer selection here and I add the via Noah
[1:23:47] 20 true color composite imagery here. I'm now going to take this opacity tool down here. And if I
[1:24:03] change the opacity, you can see if you watch between these swaths, you can see that that V actually has complete
[1:24:16] coverage and even some overlap between the different SWATs. And that's because the VES instrument which again is on
[1:24:23] board Noah 20, Noah 21 and S snpp has a a wider swath of 3,000 kilometers. The other thing that I
[1:24:36] wanted to quickly point out is that generally there's more cloud uh coverage in the afternoon versus the morning. As
[1:24:44] we've mentioned, modus on board terror is a morning overpass and the via instruments are all afternoon overpasses
[1:24:52] and generally there's more clouds uh present in the afternoon. If you watch uh these areas here around Texas and uh Mexico, you can
[1:25:04] see that in the afternoon there are more clouds present. Now, it was generally quite a cloudy day overall in
[1:25:14] this uh in in the the uh Americas around here, but definitely more cloud um in the uh in the
[1:25:23] afternoon. Okay, I'm going to now turn off the via No 20 and let me pop back on the modus
[1:25:34] uh imagery. And I also wanted to note, you see these massive smoke plumes up in here that are uh coming from the the
[1:25:44] wildfires that were occurring in this area and then emanating out into the uh Pacific Pacific Ocean. Now I'm going to add the um
[1:25:57] another another data layer. This is the LANCAT 89 true color imagery for um the 10th of September. And let me just bring
[1:26:10] it up here. Okay. Now you can just about see the swaths of the Earth that were observed by Lancat on the 10th of
[1:26:22] September. But I want to highlight this handy layer down here. This is the dark gray layer and it provides kind of a
[1:26:29] neutral background. So it's useful in examples where we really need some contrast. Um so I wanted to use this to
[1:26:37] highlight again the the LANCAT uh imagery has a very narrow swath width. It's 185 kilometers. And um if we uh now pop back on
[1:26:54] the modus true color composite and then we use the opacity tool. You can clearly see the area
[1:27:07] covered by one modus swath compared to the width of the swath of the LANCAT imagery. Okay, this is why the repeat frequency
[1:27:27] of LANCAT is each LANCAT instrument LANCAT 8 and Lancat 9 has a repeat frequency of approximately 16 days. Um,
[1:27:36] but with the combined LANCAT 8 and 9, it's actually it pulls it down to between 8 and 9 days combined. But it
[1:27:45] obviously takes a lot longer for LANCAT to rotate around the earth and um complete global coverage of the
[1:27:54] earth. Conversely, while the temporal frequency of LANCAT is much lower, it has a much higher spatial resolution. In
[1:28:04] fact, the spatial resolution of uh the true color composite imagery of LANCAT is 30 m compared to
[1:28:12] 250 m for the v imagery and the modus imagery. imagery. Okay, if you note on the 10th of
[1:28:20] September, the Lancat uh actually passed over very close to Flora, Oregon. And now we are going to zoom in to this
[1:28:38] location. Okay. And you may actually be able to see this is actually the fire, the double creek fire right here. I can
[1:28:46] now turn off flora. Um I'm going to now pop on the the false color composite imagery. This will actually be discussed
[1:28:55] in the next webinar, but I'm just using it here to um to to really provide some delineation on the area that burn that
[1:29:05] had burned by the 10th of September. You can actually also turn off the um dark gray layer as well. Okay. And so
[1:29:19] again, this just helps uh you see kind of the delineation of uh of the area that's that's burned. Now I'm going to
[1:29:28] add the um modus active fire data which will be right up here in the polar orbiting um hotspots and uh active
[1:29:39] fires. fires. And you can see we're looking at all of the fire detections for the 10th of uh
[1:29:49] September 2022 that were that were detected by uh by modus. If I now um bring up the attributes for
[1:30:01] one uh active fire, you can see again it contains the latitude, longitude, uh the brightness, the scan and track, the time
[1:30:11] it was acquired. This defaults to my local time um which is mountain daylight time in the US and we can toggle over to
[1:30:20] uh UTC as well. So this was acquired at approximately 5 uh in the morning UTC. The satellite was terror the modus uh
[1:30:29] instrument. This is a confidence um factor here. And then um some additional information. This was a nighttime uh
[1:30:38] overpass considered nighttime overpass. And we also have the brightness temperature and uh the FRP as well. All right. I'm now going to change
[1:30:53] the color of the Lanca axifier data that we collected using the um OI instrument. Let me change this to
[1:31:04] yellow and uh pop this on. Okay, so we're now looking at all of the LANCAT fire detections from that one
[1:31:16] LANCAT overpass on the 10th of September in yellow and the modus detections in red. And you very quickly notice that
[1:31:24] there are many more Lanca actifier detections than there are modus detections. This really shows the utility of the Lanca actifier data when
[1:31:34] they're available. Um these data again all these little yellow squares um these data are um able to provide much more uh kind of
[1:31:48] contextual information. They're able to uh provide information on kind of active firefronts. They're much more spatially explicit. They're able to detect smaller
[1:31:59] flaming fires as small as a few square meters or smaller. And they can also detect smaller scattered fires within
[1:32:09] the fire perimeter as you can see here. Additionally, due to the morning overpass of Lancat in addition to uh
[1:32:21] terror, LANCAT um also has a morning overpass. These can be useful in in situations where for example um
[1:32:30] nighttime aerial flights have been uh have been flown um and the uh that this information can be used to kind of
[1:32:39] supplement that first thing in the morning. The data are also available within firms within 30 minutes of
[1:32:48] overpass. But note again that the LANCAT has this much uh lower temporal frequency. It's only available every 8
[1:32:57] to nine days. Um, and also currently the lancer active fire are only available um in firms for the continental US as well
[1:33:07] as parts of southern Canada and northern Mexico. All right. So the key takeaways from this demo are really the the
[1:33:16] impacts of of spatial um resolution and how that can drive kind of what the active fire um detections are uh are uh
[1:33:27] available in terms of what the sensor can can pick up. the temporal frequency and the impact that that has on um on
[1:33:34] the on when fires are detected and then also the spatial coverage which I showed with the different swath widths of the
[1:33:43] modus versus bouncer. All right, moving on to a second demo. Um in this example, we're going to illustrate the pixel distortion
[1:33:53] that occurs in modus at extreme view angles. If you remember in the slides, we looked at how um as the sensor views
[1:34:03] off Nadia, the view angle increases resulting in these elongated pixels at the edge of the swath. So for for for
[1:34:12] fire um applications this is uh a a very real consideration because again a fire that is detected within that elongated
[1:34:22] pixel which could be uh up to almost 5 kilometers a fire that's detected within that can be anywhere in that pixel. All
[1:34:32] right, as you will see, I've now moved into firms global and again I'm in the uh the advanced mode. I have used the uh
[1:34:43] location tool here to uh locate an area called Tashka Lakes in the New Valley near near Lake Nassa in um in Egypt. And
[1:34:54] I've also set the date uh to incorrectly. I wanted to set the date to the 17th of
[1:35:03] March. All right. I am also going to uh now toggle on the modus terror true color composite. And what
[1:35:17] you can see is the very clearly the outline of the lake here. There's also uh cultivation going on uh around
[1:35:28] here. And if we zoom in again, you can really see a pretty clear uh perimeter boundary of the lake. Uh again the the
[1:35:38] um imagery is uh 250 m but it but you can see this uh you can see some um the
[1:35:47] individual uh pixels and uh a lot of clear uh clear contrast. All right. If I now pop on the orbit tracks for modus
[1:36:03] terror and zoom out. Um what you can see here this is the the terror uh modus track for the
[1:36:16] 17th of March and this image was acquired approximately 7:41 UTC and what we can see is the Tashka
[1:36:26] lakes were right below the uh the satellite when it overpassed on the 25th of March. it was right in the middle of
[1:36:38] the the swap. So there is minimal pixel distortion that that uh occurred um on that date due to where the lake was
[1:36:50] located within that swath. Again, you can see it is nicely right in the middle of the swath here.
[1:37:01] All right, let me now zoom back in and just take this off for a moment. If we now change the uh date, we
[1:37:12] can change the date down here. Um, we can also change the date uh up here to the 28th of March. And um what you can
[1:37:23] see now that the Tashka Lake is right at the edge of this swath. If I just zoom
[1:37:36] out and pop back on terror. Okay, you can see now the middle of the swath is all the way over here
[1:37:44] and Toshka Lake is all the way over to the edge of the um swath here. And so what you now see is significant
[1:37:58] distortion in um in the in the image. And again this is because these elongated pixels are occurring as a as a
[1:38:07] result of the extreme view angle. If I just pop this back to the 17th of March again, then you can see uh this was in
[1:38:22] the middle of the swath and um the pixel resolution is is much more um much more defined. So, so the key takeaways from
[1:38:33] this demo are the effects of view angle on on pixel distortion, which is is a a a consideration when using
[1:38:44] um the uh the data uh the active fire data um from uh Aqua and and uh Terra in
[1:38:55] terms of the modus instrument and then also the the geostationary instrument as I mentioned in the slides, it's less of
[1:39:03] a factor for VAS due to uh sensor design and constrained pixel growth and it really isn't a a a factor for LANCA
[1:39:13] largely due to the um it has a much more narrow swath width. All right. And then in this final example,
[1:39:22] uh we're going to actually look at a recent fire that occurred southeast of Andong in in South Korea. and we're
[1:39:30] going to illustrate an an a couple of considerations. Firstly, the the benefits of the temporal resolution uh
[1:39:37] of the temp of the geostationary satellites and also we're going to look at the impact of um systematic growth in
[1:39:45] pixel size. Again, I'm in the firm's global uh instance and I am again in the advanced mode.
[1:39:55] And then this example we're actually going to use Himawari. So Himawari is a Japanese meteorological geostationary satellite. We've we've uh discussed it
[1:40:06] in the slides as well. Um it's centered over the equator at 140 degrees longitude and and data from him is
[1:40:15] particularly useful for Japan, East Asia and the western um Pacific region. I have located uh Andong here and I
[1:40:25] actually used the laplong um of of the area which is another option available in the location tool and then I have selected under o
[1:40:36] overlays again there are these handy uh additional layers and I've selected the detailed layer to uh to label the
[1:40:45] different um the different locations here. Finally, I've set the calendar to the 25th of March, 2025. Um, as you may um be aware, there
[1:40:59] are a number of um wildfires that occurred in um in South Korea uh recently. And now I'm actually going to
[1:41:09] toggle on the Himaari uh active fire uh detections here. Um, and as you can see, there were uh a
[1:41:20] lot of detections in of this wildfire southeast of uh Andong on the 25th of March. Um, okay. I quickly want
[1:41:34] to move to to right in the middle of the uh Pacific Pacific Ocean. And the reason being that the uh
[1:41:51] himowari satellite uh which again uses the uh advanced himari imagery imager uh to collect the data um that are then used to generate
[1:42:04] the active fire data from himari. And so this is the this is the the point subnadia. Um and as you can
[1:42:14] see uh the fire in um fires in South Korea. South Korea is uh located uh further north of of the the central
[1:42:25] viewing point of Himari and um in fact Andong is located at nearly 37 degrees uh north and
[1:42:37] 128 degrees um longitude. Um and so if you remember as as we move away from this this uh Nadia
[1:42:48] view the the uh pixels begin to change in size the systematic pixel um size uh increase that occurs in the
[1:42:59] geostationary geostationary satellites. So again let me scroll back to the area we're interested in. uh this fire southeast of of Andong. And what
[1:43:13] you actually are now starting to see is the impact of the um of the systematic uh increase in in pixel size. The the
[1:43:24] pixel size display is is set to to 2 km by 2 km. But we are starting to see the
[1:43:31] gaps between the the adjacent pixels due to this um increase in um in pixel size. Again as we discussed earlier the
[1:43:43] use of geostationary satellites for actify monitoring is relatively new. So there can be uh a higher rate of false
[1:43:52] um detections. So these nuances need to be taken into consideration. However, um I if we now explore the active fire data from the
[1:44:08] polar orbiting satellites, we're going to see the utility of all of these Himoari detections. All All right, I'm just going to
[1:44:23] uh select the timebased option here and I'm going to set the time to one day. Click on the sub daily. We
[1:44:39] will delve into this sub daily module in part two but I'm just going to quickly use it here to uh highlight
[1:44:49] um this one uh point that I want to make. Um, so this is now we are looking
[1:45:01] at 11 a.m. UTC on the 25th of uh March and we're looking at a 10hour reach back. As you can see in the timeline at
[1:45:13] the bottom, we're now looking at a 10hour period here. So, we're looking at all of the detections by
[1:45:21] Himari between 100 a.m. and um and 11 a.m. And as you can see, uh the the uh
[1:45:33] these are displayed in in kind of increments of less than one hour, which are all of these dark red spots. uh one
[1:45:42] to three hours which are the bright red uh pixels and then uh three to six hours which are the the orange pixels. And so
[1:45:50] there were a number of different um detections during this this uh 10hour period. period. If we now toggle on the um polar
[1:46:04] orbiting orbiting satellites and I'm going to put all of them on except for the uh the lanc actifier
[1:46:17] detections because again they are currently um available for the continents of US uh southern Canada and northern Mexico. We can see that the
[1:46:28] active fire uh detections from the polar orbiters orbiters are only available over this area. Whereas we also identified all of
[1:46:42] these active dete detections from um Himuari. The reason that I wanted to uh highlight um this is that during this
[1:46:53] 10hour period because himary is is continually looking at this area and completing an entire disc in terms of
[1:47:04] coverage every uh 10 to 15 minutes. it is able to pick up all of the fire active fire um activity between this
[1:47:15] 10hour 10hour period. Whereas for the polar orbiters they only overpassed this area uh one time during that 10hour um period. And
[1:47:30] in fact, if we zoom into the modus terror, let me just take these up. As you can see, there was only this
[1:47:43] one. one. um overpass that that uh occurred at uh 0124 um a.m. on the 25th of uh March. Again,
[1:48:03] there will be another overpass later on, but between this overpass and the next overpass, all of these um detections
[1:48:12] were identified by Himoari. Okay. So the key considerations or the key uh takeaways from from this example are again the systematic
[1:48:27] increase in in pixel size that occurs with the geostationary satellites needs to be taken into consideration with
[1:48:34] active fire detections because again as the pixel size grows a fire that is detected within that pixel can be
[1:48:43] anywhere within that that pixel as it grows and grows. Um the use of uh geostationary satellites for active fire
[1:48:54] detection is relatively new and the algorithms are still being refined. Um so there could be uh additional false
[1:49:04] detections. However, the temporal resolution as we've seen from this fire southeast of Andong, the temporal resolution of of the geostationary
[1:49:13] satellites such as Himoari can be really useful. um for uh in between the polar orbiting orbiting overpasses. Um conversely, modus and vas
[1:49:25] have this long history of use uh in terms of active fire detection. They have a much higher spatial resolution.
[1:49:33] As you can see, if I pop on, as you can see here, these in fact are the uh vas
[1:49:40] 375 m pixels and the modus um 1 km pixels. So with the VA we're getting even more uh contextual information and
[1:49:52] finally the the modus and vas are are are optimized for environmental monitoring such as fire. So all of these nuances uh should be
[1:50:06] taken into uh consideration when using the different active fire products. And that is why within firms we include so
[1:50:14] many different sources of um of active fire data as well as imagery. Thank you. Thanks Jenny. Let's take a quick minute to review some
[1:50:31] of the key points from part one of our training. First, Brad introduced NASA firms. Firms provides access to near
[1:50:38] realtime data related to wildfire activity as well as interfaces and services to help with fire management and response as well as scientific
[1:50:47] research. Firms contains two distinct applications, firms global and firms US Canada. These two applications are very similar and contain the same data
[1:50:57] sources, but firms US Canada focuses on the US and Canada geographic area and contains some additional data sets
[1:51:05] relevant for fire management agencies in the US and Canada. Firms provides many options for imagery and data products for detecting,
[1:51:14] monitoring, and assessing the effects of fires. Active fire detection products are the most frequently used and are
[1:51:20] available from several different sensors. sensors. We learned that fires emit strongly in the midwave IR and longwave IR and
[1:51:28] sensors use this to detect active fires. Additional wavelengths are used to reject false positives, filter out clouds, sunlit, and coastal regions.
[1:51:39] Each active fire detection represents the center of a pixel that has been flagged as containing one or more fires.
[1:51:46] And the size of the pixel varies depending on the spatial resolution of the sensor from about 30 m to about 3
[1:51:55] km. Firms provides global active fire data and imagery from 16 sensors that are made available via partnerships with
[1:52:03] universities as well as other space agencies. Firms also includes all of these sensors because no one sensor
[1:52:10] meets all of the requirements needed for fire management. The key is to choose the product that fits your question or application for
[1:52:19] your particular area and time period. Polar orbiting sensors have higher spatial resolution, which allows them to detect more and smaller fires,
[1:52:28] even as small as 1 m squared for LANCAT. But fire detections from polar sensors are only available twice a day or less
[1:52:35] frequently if the sensor has a smaller swath width. Geostationary sensors cover an entire hemisphere and make observations
[1:52:43] multiple times per hour, but their spatial resolution is lower. And these algorithms are less mature and can have
[1:52:49] many false positives. These observations might be helpful for tracking fastmoving fires or providing information between polar observations.
[1:52:59] Brad provided a live demonstration of firms showing how to navigate the fire map, find active fire detections, view
[1:53:06] additional satellite imagery, and use the location mapping and sharing capabilities. Jenny showed the impacts of swat width and spatial resolution on
[1:53:15] fire detections for a fire in Oregon and then showed the impacts of higher view angles that occur as you move away from
[1:53:22] nater on pixel distortion. In our next part, in part two, we'll show how firms can be used for fire
[1:53:33] monitoring and evaluation, and we'll discuss factors that in that can impact a sensor's ability to detect a
[1:53:43] wildfire. Quick reminder, this training series will have one homework assignment. You can access the homework from the training web page starting
[1:53:51] April 31st and answers should be submitted via Google forms by May 14th. Cert uh certificates of completion will
[1:53:59] be issued to participants who attend all of the lab trainings and submit the homework before that deadline.
[1:54:05] Certificates will be issued by email about 2 months after the training. training. Here we've included the contact
[1:54:13] information for myself and today's speakers as well as links to the arson website, YouTube channel, and Twitter RX
[1:54:20] and our sister program develop. And we've also included the publications that were referenced throughout today's training and finally some additional
[1:54:32] links and resources and this can be found on the training web page. Thank you so much for joining us today.
[1:54:40] We will now transition over to the Q&A. And before we start today's Q&A session, just another big thank you to
[1:54:52] our guest instructors, uh, Jenny and Brad. And while Jenny can't join us for this part of the Q&A, um, we are joined
[1:54:59] by Diane Davies, who is the Lance operations manager. So, thank you, Diane, for joining us for the Q&A. I
[1:55:06] realize we we've gone a little bit long today, so we probably won't be able to answer all of the questions that you all
[1:55:12] have entered, but we'll try to address um questions for the next maybe 10 minutes or so, depending on Brad and
[1:55:19] Diane, if if you can hang around and be sure that all of the questions that you've uh entered, we'll address offline
[1:55:27] and then post the Q&A doc to the training page um after today. So with that, um, Brad and Diane, is it
[1:55:36] okay if we take a few questions for about 10 minutes or so at least? Sure. Sure thing. Awesome. Thank you.
[1:55:45] Uh, so question one, do the points reported by firms represent the spatial centrid of an area with anomalous
[1:55:53] reflectance detected by the sensor or do they correspond to the center of the sensor pixel that recorded the thermal
[1:55:58] anomaly? How is the location reported by firms interpreted exactly? And what's the underlying physical principle behind the sensor's detection of these
[1:56:06] anomalies? That's a big question. So, I'll I'll turn it over to either Brad or Diane. Which one of you wants to address
[1:56:12] this one? Um, I can take a stab at it and Brad can determine if he likes. So,
[1:56:18] the the point corresponds to the center of the pixel um that was flagged as having a thermal anomaly. So, um I don't
[1:56:27] know if we can click on that link from the FAQ, but I think um that it helps
[1:56:31] explain uh you know, it helps give a good idea of what you can see. Doesn't show very well. Okay. But basically, you
[1:56:39] have um a pixel and it and we give you the center of that pixel size and there
[1:56:44] could be one or more fires within that pixel. Uh that's it. It's that question. What does the fire detection mean on the
[1:56:50] ground? One, two, three, fourth one down. Um and if yeah that's that's essentially what it is. And so for modus you have a pixel
[1:56:59] that's approximately 1 kilometer. Um but this does vary according to the scan and track. It's not exactly one kilometer.
[1:57:05] It's an approximate one approximate those approximate dimension. So I hope that this sort of helps answer the
[1:57:12] question. Um so you can have you know one fire in that particular pixel or you might have more than one fire. Um, and
[1:57:20] you can't tell exactly where that fire is. You just know that it's somewhere within that pixel. That was a great
[1:57:26] response, Diane. I I would only add that, yeah, if you have a, you know, a very large area of fire, you, you know,
[1:57:32] you could have multiple fire detections there. And so you would have, you know, potential grouping or cluster of fire
[1:57:38] detections, uh, that were, uh, you know, occurring with that fire activity area. So as what Diane just described there in
[1:57:46] that case you would have a you know the centrid for each one of those pixels that where fire activity was detected.
[1:57:54] Okay. And I think a followup is is and I see some a written answer is the physical principle behind the sensors
[1:58:01] detection. So Brad, you alluded to this um briefly during the slides, but then I think we'll have some supplemental
[1:58:08] material on the training page for this, but do you want to speak to to this part? Um yes, the uh the fire detection
[1:58:18] algorithm that's used for modus and beers uh are very uh are very similar. Um but the these these algorithms these
[1:58:26] current day algorithms that are being applied with these sensors are based on what we call legacy or heritage fire
[1:58:32] detection algorithms that you know reach back you know clear back into the early 80s with the ABHR and other
[1:58:38] meteorological sensors where you know that had thermal uh detection or had thermal cap thermal bands on them and
[1:58:44] were used for meteorological purposes but uh you know was determined they you know they have the right bands to be
[1:58:49] used for fire detection you know at the four and 11 micron um wave. wavelengths or what we call the midwave and infrared
[1:58:56] and the longwave infrared. And so those uh you know that response curve that was shown earlier in the presentations
[1:59:04] showing how you got that strong uh response from fires in the the four micron or the midwave infrared. Uh
[1:59:11] that's that's the key thing or key response that's leveraged in fire detection. And that difference in the
[1:59:17] response between the long wave and the midwave infrared is helpful too in helping you know verify and ensure that
[1:59:25] the the accuracy of the the fire detections as well as to uh when you go into what's called the contextual mode
[1:59:32] you're looking at those potential fire pixels have been identified and looking at the that particular pixel in the the
[1:59:40] neighborhood of the pixels are around it. So that center pixel that's being evaluated is kind of taken out of
[1:59:45] consideration. We're saying we're looking at the neighbors and say, well, let's look at our neighbors here that
[1:59:49] are not potential fire pixels and try to get an idea of what that pixel we're analyzing looks like if it wasn't on
[1:59:54] fire. And so he you know uses a statistical approach to look at the response in those uh critical bands to
[2:00:01] make that um determination and analyzes say yes we do have a significant difference here u that this does look
[2:00:08] like a fire and we can flag that fire as a detection with a certain degree of confidence and we you know we
[2:00:15] highlighted the confidence uh ratings that are available with the detection data also. So looking forward in the
[2:00:22] future, as you can imagine, you know, there's a lot of attention and interest in refining, you know, this current
[2:00:29] generation of active fire detection algorithms using more things like AI and machine learning and whatnot to uh train
[2:00:36] these uh detection algorithms and classifiers to uh identify fire as well. And so a lot of that work is ongoing
[2:00:43] with all these various polar orbiting and geostationary sensors. Thank Thank you. Okay, question two. I'm from Nepal
[2:00:56] and I've been using firm since 2013. Um, last year we suppressed one fire in Capandu which took us around 12 hours. I
[2:01:03] understand that Nepal that in Nepal Aqua Terra run around 10:30 and 2:45 p.m. overpass times. The fire we suppressed
[2:01:10] was big. Oops. and took around uh lasted from about 6 p.m. 6 am to 6 p.m. when checking the
[2:01:18] active fire record of firms that day and the next day. It never showed um on the record and what could be the reason.
[2:01:27] So, I'm guessing that the reason for that is likely to have been um cloud cover or heavy smoke. Um but really uh
[2:01:36] without knowing the date or it could be that um you know there was there was an issue with the instrument at that time.
[2:01:43] That's another possibility. But um if you want to get in touch and uh let us know more specifically what date it was
[2:01:52] and what the location is then we'd be very happy to look into it. And I think we'll go into some
[2:02:00] techniques you can use to uh identify reasons why there might not be a fire of interest included in firms in our
[2:02:07] session next week. That's very true. So yes, hopefully next week you'll know all the the answers. Good point.
[2:02:16] Uh question three uh doesn't LANCAD 8 and 9 uh thermal infrared sensor use thermal bands in the range 10 to 12
[2:02:25] micrometers which essentially belongs to the 8 to 14 micrometer region? We've been taught in one of our courses that
[2:02:31] this band is ideal for measuring radiant temperatures of objects that occur naturally on the earth's surface. For
[2:02:36] very hot objects such as wildfires or volcanoes, we use thermal bands sensitive to the 3 to 5 micrometer
[2:02:43] region. How reliable is LANCAT for wildfire detection? Because wildfires usually burn at 800 plus degrees Celsius. Yeah. Um yeah, Brad here, I'll take that
[2:02:55] one. Um yeah, very good question and statements there. Those are true statements. Uh what I will emphasize in
[2:03:02] this response is for the LANCAD active fire detection product, uh TEI is not used. the operational land imager OI
[2:03:10] sensor issues and which it does not have any thermal bands on the OI sensor. So the shortwave infrared bands are are key
[2:03:19] to the fire detection um on on with the LANCAD active fire detection algorithm particularly the the 2.1 micron band and
[2:03:28] uh the visible and near infrared bands are also used uh to support um identifying other features you know the
[2:03:35] masking process and whatnot and helping to reject false positives. So, LANCAD active fire detection data is totally
[2:03:42] based off of the OI sensor and uh again using that strong response in in that shortwave infrared um band to the uh
[2:03:52] energy emitted by fire. Excellent. Okay. Question four. Uh what is the need of combining 15 different satellite missions data? Is it for
[2:04:06] improving the temporal resolution or any other purpose? Um, yeah, I'll take this one. Yes, it's primarily for improving the temporal
[2:04:17] resolution. So, initially when we started, we only had data from modus, a terra. So, that gave us approximately
[2:04:24] two overpasses per day per satellite and obviously we added in v. But yeah, it just gives us more looks which
[2:04:32] ultimately is helpful for users on the ground and can certainly with um the juice stationary and more looks you get
[2:04:38] to uh a better understanding of the progression of a fire. Okay, thanks. Um question five. Is it possible to see the footprint of the
[2:04:51] satellite on the map in order to know which area was sensed especially for LANCAT which has a small footprint
[2:04:59] swath? Um so yeah that's a great question and unfortunately it's not something that we currently have in
[2:05:05] firms. Um I put a link in the in the Q&A there which will enable you to look at
[2:05:10] the orbit track. So that will give you an idea of um where the satellite is heading and what time and that it'll
[2:05:18] give you an indication but it is something that we plan to add to firms um hopefully in the relatively near
[2:05:24] future. future. Great. Um and maybe this will be our last question for time. Um can firms help can firms also help in forecasting
[2:05:37] fires? fires? Yeah. Yeah. Brad here, I'll take that one. Um, yes, in firms US Canada, that particular application,
[2:05:48] uh, a couple of products are provided. Um, these products are not provided by NASA. They're provided by, uh, Natural
[2:05:55] Resources Canada, the specifically the Canada Wildfire Information System. They provide a daily fire danger forecast year round for the um, all of Canada. uh
[2:06:07] so that those data are are are provided by the Canadian folks and they're integrated into uh firms US Canada as a
[2:06:14] layer and similarly for the United States uh the national predicted services program which is located at the
[2:06:20] what we call the nick or the national inter agency coordination center which is in Boisee Idaho they issue a uh a
[2:06:28] somewhat different uh fire danger forecast it's called the significant fire potential product and that's available for the continental United
[2:06:35] States and Alaska and we integrate that uh into firms US Canada also. Excellent. Okay. So, um I think we'll
[2:06:48] probably close since we're well over time today. So, I just want to extend another big thank you to our guest
[2:06:55] instructors for an amazingly inform informative training part today. And just a reminder to everybody, the homework, the requirements for getting a
[2:07:05] certificate are to attend all of our live trainings, all three parts for this training series, as well as complete the
[2:07:11] homework assignment. And the homework assignment will be available on the training page uh the day after our last
[2:07:18] session, so May 1st. And I apologize for the typo that I put in the slides. That's April 31st. Many apologies there.
[2:07:25] So we hope you'll join us next week for part two. And I hope everyone has a great rest of their day.
