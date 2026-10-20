# Wildfire Monitoring and Evaluation, Part 2/3

`https://www.youtube.com/watch?v=UJOwwMwqvWA` · id 324 · 1:34:26 · module 309 — Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management

[00:01] Welcome back everyone to our ARSET training series introduction to NASA Earth observations and tools for wildfire monitoring and management.
[00:10] Today is part two of our training series wildfire monitoring and evaluation using firms. My name is Melanie Flet Cook. I'm
[00:18] a researcher at NASA Gddard Space Flight Center uh right outside Washington DC and I am project scientist of ARET.
[00:26] In our last session in part one, we introduced the fire information for resource management system or firms
[00:33] application, learned how fires are detected by satellite sensors, and the strengths and limitations of different active fire detection products. In part
[00:42] two today, we'll show how firms can be used for fire monitoring and evaluation. And a quick reminder that
[00:49] there will be a homework assignment after this training. It will be available um after part three is
[00:55] complete. and due two weeks later on May 14th, a certificate of completion will be awarded to those who attend all live
[01:02] sessions and complete the homework assignment before the given due date. And now we'll begin part two of our
[01:09] training series, wildfire monitoring and evaluation using firms. Once again, I am happy to be joined by our guest instructors from part one.
[01:18] Jenny Houston, outreach and implementation manager for NASA's land atmosphere nearrealtime capability for Earth observation or lance and Brad
[01:28] Quail, program lead for the disturbance assessment and services program at the US Forest Service. By the end of part two, we hope that
[01:38] you'll be able to identify the latencies of different sources of active fire information available in firms. Use firms to monitor the
[01:48] evolution and growth of wildfires and identify factors that can impact wildfire wildfire detection. If you have questions during
[01:57] today's training, you can put them in the Q&A box within WebEx at any time. At the end of the training, we'll try to
[02:04] address as many questions as we can and we'll post these questions as well as the written answers to the training page
[02:11] within about a week after the training. And now once again, I will turn it over to Brad.
[02:20] Okay. Well, thanks Melanie. Um, in today's session, we're going to discuss how firms can be used for wildfire
[02:26] monitoring and also various issues to consider that may affect the ability of satellite sensors to uh detect fire
[02:32] activity. So, to start things off, we're going to talk about data latency in the context of wildland fire management.
[02:41] Data latency is essentially the the delay or the amount of time it takes to access satellite observations after
[02:50] they're acquired by the satellite. It's an important element you need to consider depending on the type of fire
[02:55] management that's being conducted. For example, uh uncontrolled wildfires. They can be very unpredictable and the availability of low latency uh remote
[03:03] sensing products are very important since they're used by uh fire managers to inform and support rapid response
[03:10] decisions. So these timely remote sensing products can aid in the uh identification of new wildfire ignitions across broad geographic areas or they
[03:20] can also help to monitor the intensity and extent and the rate of spread of ongoing wildfire events.
[03:26] um the occurrence of the and the behavior of these wildfires in these particular examples can be very dynamic
[03:32] due to variability and rapid and variability in the rapidly evolving conditions. Uh so consequently the latency of data from remote sensing
[03:42] observation uh uh can have a lot of influence on the situational awareness and the ability to uh effectively
[03:48] respond to wildfires. uh firms is designed to uh provide the timeliest data possible to support fire monitoring needs and provide products at
[03:59] varying latency periods. And historically, the terminology that's been used for latency varies quite a bit across various user communities and
[04:07] applications. You know, for example, near real time can mean lots of different things to different uh users.
[04:14] It could be minutes, it could be hours, it could be days depending on the context in a particular use case. So
[04:20] several factors can go into uh determining uh latency such as the type and the resolution of of the data that's
[04:27] being collected all the required infrastructure that's required to collect satellite observations and then move that raw data and process it and
[04:36] distribute and disseminate the products after they're generated and so forth. So in some cases these uh uh various
[04:44] factors that I mentioned before can be mitigated or relaxed in order to provide low latency products. And uh about 10
[04:52] years ago um there was a NASA workshop held at Langley um and um NASA at that time met and determined some standard
[05:03] terminology to use for latency terms and these latencies are listed on the screen in this table. uh most of the data that
[05:10] firms uh provides falls in the first three categories that are listed ultra realtime, real time or near real time.
[05:18] So the the key takeaway message uh here is pay close attention to the data when you're using it in firms and uh the type
[05:26] of latency that the data is available in and so that it's uh used appropriately and you have a full uh uh context of its
[05:34] appropriate use and considerations on how to use it. Um, active fire detection data is the most commonly used uh data
[05:42] product in firms and this particular chart shows a a summary of the latency of the 24 sources of active fire
[05:49] detection data that have provided in firms. The the dark blue uh products at the very top of the chart are data
[05:57] products that are available in what we call near real time. So they're available 1 to three hours after
[06:01] satellite observation and they're provided globally and these data are provided through the NA NASA Lance framework. The medium blue um colored
[06:12] products in the middle of the chart, these are real-time latency products. So they're available in less than one hour
[06:18] after satellite observation. And then the three or the five uh data sources in light blue at the very bottom of the
[06:26] chart, these are what we call ultra real time. And these products are available uh within basically a few minutes after
[06:33] satellite observation as low as two minutes in and the examples I'll show later on here. So as mentioned on the earlier slide um
[06:43] has a a variety of sources of both ultra realtime and real time active fire detection data and we worked on
[06:51] developing the the availability of these products with partner organizations and this slide here highlights the uh what
[06:58] we call the data processing framework for ultra realtime modus and beers data that are available for North
[07:06] America. So many of the Earth observation satellites have the ability to broadcast the data that they're collecting as they're going uh overhead.
[07:17] And those satellites when they have line of sight uh visibility to ground stations on the ground, that data that
[07:24] they're collecting in real time as they're going overhead can be broadcast and those stations can be listening and
[07:30] collect that data and uh process it and provide data at a lower latency. And uh what we have uh here in
[07:39] working with our cooperators at the University of Wisconsin and various other partners throughout the United States that operate ground stations uh
[07:46] the data from modus and all the modus and beer sensors on those various satellite platforms are collected uh by
[07:54] those ground stations and they are uh segmented into very small micro granules and those granules are pushed to the
[08:01] University of Wisconsin and um they're aggregated there and dduplicate ated and then processed to create fire detection
[08:09] data within one minute and these u granular or these outputs active fire data outputs are then pushed to firms
[08:18] again in about one additional minute so within 2 minutes of satellite observation you have modus and beer's
[08:24] active fire detection data from North America as a satellite is going overhead so although geostationary data which
[08:32] we'll talk about in a few minutes is provided on a higher temporal frequency quency than you get with these polar
[08:38] orbiting sensors like modus and beers. Um the ultra realtime data from modus and beers in this example uh provide a
[08:45] more timely source of spatially refined uh fire detection data that can still be provided multiple times throughout the
[08:52] day. So this slide provides an overview of our real- time uh data processing framework for LANCAT OI active fire
[09:03] detection data. And these data are collected by both LANCAT or at least they're provided by both LANCAT 8 and
[09:10] LANCAT 9 observations. And so in this scenario, we're working with our partners at the USGS Aeros data center
[09:16] in Souf Falls, South Dakota. And through their ground station there, they're collecting daily LANCAD 8 and LANCAT 9
[09:24] for most of North America. And these data are processed to level one train corrected data very quickly within 20
[09:32] minutes of satellite observation. And then they're subsequed data are processed using an algorithm that was developed by the
[09:42] University of Maryland and supported by NASA. And that algorithm uh generates a 30 meter active fire detection data
[09:50] which are then provided uh to firms about 20 to 25 minutes after satellite overpass is the total latency time
[09:59] there. So given the orbit cycle of LANCAT um if you're not familiar with it already each uh LANCAT satellite has a
[10:08] 16-day orbit cycle. So they're imaging the same spot on the earth every 16 days. But each satellites orbit is eight
[10:16] days out of phase with each other. So you get an observation by each uh or between the two satellites once every
[10:23] eight days. So although it doesn't have as good of uh temper resolution as other satellite sensors we've been talking
[10:30] about in this session, uh when it is available for a given area, it provides the most spatially refined or spatially
[10:37] explicit active fire detection data that's provided by firms. Um this slide it it's relatively complicated but it shows our real time
[10:46] uh geostationary uh active fire detection uh processing framework and the various partners that we work with to execute that. um observations of the
[10:56] western hemisphere uh what we basically call the eastern Americas and the western Americas are provided by goes 18
[11:04] and also goes 19 and just as a little side note uh there goes 19 u replaced go
[11:12] 16 on April 7th so uh you you'll see go 16 being transitioned out and replaced by go uh 19 data the go sensor is the
[11:21] advanced baseline imager and those observ observations are being conducted by GO ABI every 10 minutes of the
[11:28] eastern and western Americas. uh Medios uh 11 and 9 uh with the Severe sensor on board uh are conducting observations
[11:38] every uh 15 minutes of Europe and Africa as well as Africa and Asia uh from those two platforms and Himoari uh which is
[11:48] run by JAXA is providing observations of Asia and Australia also on a 10-minute time frequency uh similar to GO's ABI
[11:58] and these uh data from these various geostationary sensors are collected by the ground stations that are operated by Noah for the the GO
[12:08] stations I should say for the GO satellites and uh also in Romania and Italy uh for the um metsat constellation
[12:16] there of messat and jaxa collects collects their ground stations are in Japan for the himoari framework so those raw data are
[12:26] routed uh from those various ground stations stations For the GO data, uh it's processed using two detection
[12:36] algorithms. The GO data are processed on site um at the at the national satellite operations facility in Maryland and the
[12:46] GO what we call the fire detection and characterization or FDC algorithm is used on that data to derive an active
[12:55] fire product output from that algorithm. But the go data, the mediocat severe data and the himoarih uh advanced himoari imager data are also
[13:08] all processed uh using what's called the uh FRP pixel algorithm that was developed byat and those data are
[13:16] processed in Lisbon Portugal at the Portuguese Institute for Oceans and Atmosphere and those uh three sources of
[13:25] imagery are are derived using that uh I should say are used to drive an active fire detection product with that
[13:32] algorithm and that uh output is combined also with the fire detection characterization output and then is integrated to into firms within 20 to 30
[13:44] minutes depending on the source there. The native uh resolution of the data is maintained which is two kilometers for
[13:51] uh goes and uh himowari outputs and mediaat is maintained at its native res spatial resolution of 3 km as well. uh
[14:00] those outputs of those various products for the sensors are uh then uh processed and harmonized uh by the University of
[14:08] Maryland to uh create a near real time or I should say a real-time harmonized geostationary data set for the entire
[14:16] world uh that is available uh within firms within 20 to 30 minutes of uh satellite satellite observation. So um at this time I'm
[14:27] going to move into a series of demos uh that illustrate how firms data and capabilities can be used to monitor
[14:36] wildfires. Okay, for our first demo I wanted to just take a couple minutes and discuss uh latency. Um when you first
[14:45] jump into firms I'm looking here at firms US Canada but the same interface uh is present in firms global if you're
[14:53] using that. Um over here as we've discussed before you have your various sources of active fire detection data
[15:00] which I briefly mentioned earlier. If you uh click on the little info button for the group and here I'm looking at
[15:06] the polar orbiting group I get a brief description of these data and as you can see it's noted these are real time data
[15:15] uh um for at least North America and for the rest of the globe it's in near real
[15:20] time uh those data that come from NASA Lance and down here on the geostationary uh data as well the group description uh
[15:30] identifies that you know these data are available in real time. And if you want to get more details on that, you can
[15:37] click on the info button for each one of the layers. And we have a in our description here uh how what that
[15:44] latency is for a given layer. And you can pull that up again for the various um layers and you get that description.
[15:52] Some of these active fire uh products are provided at different latencies as noted here, but we always provide the
[15:59] the the quickest or the lowest latency data that's available. And same thing with the the geostationary, you can get
[16:05] the information on the latency, the specific latency for each one of those products. Um if I take a deeper dive
[16:12] here, um you see we got a lot of fire activity here in eastern Kansas. Um this is called the Flint Hills region. It's a
[16:21] it's a prairie region. There's a lot of active burning uh prescribed burning going on here every spring. Uh if I
[16:28] wanted to take a look at the last days worth of activity and see what's going on here, I got a few detections. I'm
[16:34] just doing a reach back uh for today since uh 1,200 I should say 0 UTC. So in
[16:41] the last 13 14 hours there's not a lot of activity there. I can pull up the geostationary data and I've got quite a
[16:49] bit more activity because as we talked about before we got that higher temporal resolution uh with the geostationary
[16:55] data and see more of what's going on. So what I want to do here is just you know
[17:00] show you the latency of the data. We haven't seen a lot of detections yet today. Still relatively early in the
[17:06] morning here but later in the day there'll be a lot of fires kicking off here because again this is a highly
[17:10] managed landscape. Um but if I'm looking at this data u you know there was a fire activity as late as you know into the
[17:20] early morning hours u or should say the late evening hours at yesterday as these uh prescribed fires were you know
[17:28] winding down uh for the day. So, I just wanted to highlight that, you know, as you're looking at the uh active fire
[17:36] detection data, pay close attention to the acquisition date and time. And, you know, based on the current time where
[17:43] you're at right now, it'll give you an idea of how uh recently that data was uh collected and made available. So, um,
[17:53] next thing we're going to do is I'm going to shift this back and turn off my geostationary data for a moment. And
[18:01] we're going to go out west here. I can use my uh location tool. And I want to go to Chico,
[18:10] California, and jump over there. Turn this off. Going to zoom out a little bit. And uh Chico, California was near
[18:20] the ignition point of a very large wildfire in 2024 called the Park Fire. Uh it burned about 175,000
[18:29] hectares. And so uh you have again full access to the entire uh mission data record uh for active fire detection
[18:38] data, imagery, and whatnot in in firms uh for all the data sources we provide. So, I'm going to go back to
[18:45] 2024. And this fire started on July 24th and burned through about mid August. At least that's where most of the burning
[18:52] took place. So, if I go and set my uh date of interest to the 14th and set a
[18:59] reach back of 3 weeks or 21 days, you can see the cumulative polar orbiting active fire detection activity for this
[19:08] particular fire. Again, this was about 175,000 hectare fire. very large fire. Um, down here on my uh time slider bar,
[19:17] you can see there's my 3-week window I'm looking at here. I want to nudge it over to the 24th because that's when the fire
[19:24] started there. And I can, you know, go into a timebased classification. I'm looking at the last, you know, hourly um
[19:33] category here. You know, nothing was burning on the 20 or I should say on the 14th of August. Uh I can do a day
[19:40] classification as well. I can see there's a little bit of uh activity earlier uh on the previous day. But so
[19:47] what I wanted to illustrate is how I can show these these data and kind of get an
[19:51] idea of how the fire progressed. If I go back to the 25th when the fire was just
[19:55] getting started again, I'm on the day classification. So these bright red uh colors are indicating this fire has
[20:02] burned this fast in the first two days. Has burned uh this total area. I can, you know, extend that out, keep it on
[20:10] that day classification, and you can see how that fire progressed. Again, there, if I want to flip over and see what's
[20:17] burned, at least on the 27th of July, I can see in based on the hourly classification, those redder colors are
[20:24] the ones that are burned most more recently, and the orange are further back, 3 to 6 hours in time, and the
[20:31] yellow are are, you know, beyond the last 24-hour window. And And um pull that back out again. Looking at
[20:43] the cumulative extent of the fire, you can see we have gaps there. When you compare it say to the uh the active
[20:51] satellite, I should say the um false color composite uh imagery for Aqua Motus. And if I set my
[21:02] date back to that back there, you see the burn scar. And you can see we're got we have holes here
[21:13] that weren't covered because, you know, with the polar orbiters, we're only seeing the actire activity at the time
[21:19] of satellite overpass. So I can leverage my geostationary data to see what's going on here. And I'll use our combined
[21:29] filtered uh geostationary data. And you can see with this data set, it fills in all those areas. Uh because we have the
[21:37] higher temper resolution of the GO uh uh data providing observations here. But albeit it's coarser and you can see we
[21:45] have detections out here beyond the fire uh perimeter uh that you know it's visible relative to the satellite
[21:52] imagery. And this is from go 16 at the time and that's out on you know at 75°
[21:59] longitude and you're getting that uh geoloccational area due to the uh distortion that's presented by the high
[22:06] view angle there. So this is another uh uh thing to consider when you're using that geostationary data how the uh view
[22:14] angle affects the positional accuracy of the data and also the reliability of the fire detections in some cases. So use
[22:21] these data uh cautiously. But uh you can do the same thing that I did before uh with the uh
[22:27] polar orbiting data. I I can walk back through here and I can see how that uh turn that image
[22:43] off a moment there so it's not a distraction. And you can see how that fire progressed day to day uh with the
[22:50] day classification there. So you have tools there both the geostationary and the polar orbiters to uh monitor the
[22:58] progression of fire activity on a daily or hourly basis if you choose to do so. So let's
[23:06] uh take a look at the um if you wanted to find out what the origin or when the origin of the fire
[23:14] took place. um based on the active fire detection data. Now, I know from fire reports that this uh fire was reported
[23:23] at 2152 UTC on July 24th. Uh and you know, the polar orbiters are are making observations over this part of the
[23:32] world, uh relatively late in the day, probably around 2200 UTC. So, um I'm going to try to investigate, see when
[23:39] the first detection was, uh for this particular fire. And we have what's called a subdaily filtering tool. I can
[23:46] click on that. I can set my date to the 24th because I know the fire started on
[23:51] the 24th based on reports. And I'm going to set my time here to 2230 UTC. And then I'm going to set
[24:03] what's called my, you know, my reach back here for the time to last 30 minutes. So what this is telling me here
[24:10] is that at using 2230 as my benchmark or my baseline, I'm looking back 30 minutes and looking at all the fire detections
[24:19] that occurred both polar orbit and geostationary in the 30 minutes prior to 2230. So between uh 2200 and
[24:27] 2230 and I can see down here I have a few geostationary detections and some virus detections there based on the the
[24:35] resolution. And so if I adjust that, I say, well, I want to dial that back a little more. So maybe I want to go back
[24:41] to about 2,200 and see what's going on. So now I'm looking at 2200 UTC out uh to 30
[24:51] minutes before that. And I have one pixel there. It's a geostationary pixel. If I do an inquiry on that, this
[24:58] detection took place at 2200 uh UTC. And so that's my first detection of uh this uh fire. And as I said a few
[25:08] minutes ago, the fire was reported from other observations off the ground, if you will, about 8 minutes before that.
[25:14] So um if I wanted to see when the first uh polar orbiter detected it, um I could
[25:20] again go in here, make some adjustments with my thresholds. And so if I push that out at 10 minutes, then I can see
[25:27] beers was not too long afterwards. its first detection was at 2201. So just an example there on how
[25:35] you can use those sub daily fire detection tools to filter out the data and identify the time of a fire um when
[25:44] it first was detected. Um I'm going to do another uh quick example of a large fire and how
[25:51] you can track it through time and issues you may encounter. This is called the Smokehouse Creek fire in northern Texas.
[25:59] It occurred in February of 2024. Again, another very large fire, about 430,000 hectares in size. It started on
[26:08] the 26th of February. In 2024, I already have my calendar set to that time, and I'm doing a oneweek reach back here. So,
[26:18] I'm a couple days here before the fire started. But, if I increment ahead day by day here, and again, I got my 7-day
[26:26] reachback staying with me. I'm got have the modus imagery underneath it and you can see the fire activity there in the false
[26:37] color composite imagery. You can see the smoke coming off. It's going the smoke is going really uh quickly and directly
[26:44] to the east. So we have strong westerly winds. Uh this was a really strong uh wind driven event. As I go through to
[26:52] the next day, again, looking at all the polar orbiting detections for that uh period that grew out that day, plus the
[26:59] cumulative detections for last 7-day period, you can see how this fire grows rapidly. And um in this example here, a
[27:07] couple days out from the ignition of the fire, you can see the burn scar. It's a little bit hard to tell because of the
[27:13] sinesta vegetation and whatnot, but you can see where the fires burned, but you can see the detections were missing.
[27:20] We didn't have detections uh in a lot of places again because it's such a fastmoving event before we had a chance
[27:26] to catch it with the you know the relatively infrequent polar observations and then on this day it was clouded over
[27:33] and then by this time on the 1st of March the fire was out and you can see
[27:37] the cumulative polar orbiting detections uh that are related to the burn scar that's visible in the imagery. Again,
[27:44] you can use the uh geostationary data to help you out there. And even with the geostationary data, we weren't able to
[27:52] capture the fire activity here, but we can definitely fill in uh a lot of this area uh here that weren't that was not
[28:01] covered. And these other fires up here uh that burned are, you know, completely uh the cumulative detections pretty much
[28:07] captured that if you use the geostationary data. So again, geostationary data is much coarser. In this case, it's 2 kmter resolution
[28:17] versus what you get with the 375 meter or 1 kilometer uh data with beers and modus respectively. But it can be
[28:25] helpful if you're trying to track and monitor the uh fire progression uh you know within the day and between
[28:34] days. Uh the next example I want to show are some fires uh that occurred in southwest Idaho. this uh last year. This
[28:42] is another very rapidly growing event. Uh this is Boisee, Idaho, if you're familiar with the area. And we have a
[28:49] fire here that's roughly about 4,000 hectares in size on this date, which was August 6th of 2024. And
[28:58] um just a quick little side example of how you can use the measuring tools, you know, to take a quick measurement of
[29:05] this fire. I'll just do some quick general digitizing here. And I made a mistake there. So my rough digitizing there is
[29:20] about 7,000 hectares. But um and the next day it it grew rapidly to about uh about 48,000 hectares as you can see
[29:30] here. And you can see the active firefront in this uh imagery uh here on the 7th of August, 24 hours later. and
[29:38] these other fires burning over here to the east. So the imagery is very valuable to use in the context of the
[29:45] fire detection data obviously. And so what do you do at night? We don't we can't collect this reflective imagery uh
[29:53] at night because we're measuring the the uh energy in the various bands as reflected from the you know the uh the
[30:01] sun. Um so we have uh data that's collected at night uh that is available to use uh with the beer sensor the
[30:09] dayight band is available. So if we wanted to take a look at what was going on at night this uh beer's dayight band
[30:17] can help us out. This is a pancromatic band that's a that's collected across the whole visible part of the
[30:23] electromagnetic spectrum and it's a grayscale image and uh we can see what's going on with the fire at during the
[30:30] nighttime hours. And if I you know use look at this in my um context of the uh
[30:37] active fire detection data. Oops, clicked on the wrong thing here. I'm looking at the Noah 20 dayight band
[30:44] radiance data for August 7th. So, it's the early hours of that day. I can turn off the daytime detections from the 7th.
[30:51] So, I'm just looking at the nighttime detections that occurred same time this image was collected. And you can see how
[30:56] the fire detections uh line up with those uh image data. You can also see them. You know, you're picking up all
[31:03] the city lights and whatnot as well, but you can easily see all the fires. Um there's also another uh variation of
[31:12] these day of these nighttime products and it's called the nighttime blue yellow composite. This is a false color
[31:19] composite that integrates the grayscale pancromatic dayight band image with the longwave infrared band on um beers and
[31:30] you know essentially shows you the same information you're seeing before for the making out the active fire detection or
[31:36] the active fire areas. But the other thing about it is it helps you see other features of interest. You can see clouds
[31:44] and whatnot. And Jenny will talk about this a little more later on and how you can further use these data. But just
[31:50] wanted to let you know that you have the ability to integrate fire detection data with at night with nighttime imagery
[31:58] that can help you provide context and interpret what's going on. Um, the last demonstration I wanted to
[32:06] provide is highlight some fire activity in Australia and some tools that you can use to assess the total burn extent. Um,
[32:16] in 2023 into early 2024, uh, Australia had a very severe fire season. Uh in 2023 alone, there was like about 84
[32:26] million hectares burned uh between like May and late into the calendar year. And a lot of these fires burned on in the
[32:36] interior in Australia into the northern uh territories of Australia. And you can see in this false color composite image
[32:43] uh from Vers Noah Noah 20 ve you can see some of the burn scars there from the more
[32:50] recent fires. Uh I can draw up the active fire detections if I like. If I wanted to look at the you know the Noah
[32:57] uh 20 uh beers detection say for the last last uh month alone just from that sensor it's drawing them in with this time
[33:08] sinceense detection uh classification based on the hours. Um just from that sensor alone I can do that. But uh if I
[33:16] wanted to use some other products to assess what the cumulative burned area was for the entire year, I just wanted
[33:24] to put this reminder out there about the burned area products that we have. Um we have an interface here where you can uh
[33:31] access these data. Pay close attention to the year. So even though I'm looking at October of 2023, by default it's
[33:38] going to show the most recent year in this interface. So you want to toggle this to 2023. And uh let's say I wanted to look
[33:46] at the the fire activities, the burned area extend for October and draw that up. It's going to be in pink. I can
[33:54] change this color to another color if I want by just clicking there and I have access to the pallet. I can adjust the
[33:59] opacity of this layer so I can still see what's going on. But these data are not determined by active fire detection
[34:08] data. They are determined using u reflectance data that also uh integrates the active fire detection data and uh
[34:16] through a time series analysis with the reflection data using various vegetation indices. We can detect burned area and
[34:23] the fire detections help in that process because there's other things that can happen on a landscape that may look like
[34:30] a fire but they aren't caused by a fire. So the fire detections help identify those areas of disturbance that are
[34:37] indeed uh caused by fire. And if I wanted to look at the entire um burned area area extent uh for Australia that year, this
[34:47] gives you that idea. So you know there's that 84 million um hectares of burned area uh there. So this helps you know
[34:55] fill in those gaps. This modus product is available at the 500 meter uh spatial resolution and it's again it's compiled
[35:03] on a monthly time step uh and this data is aggregated to the monthly uh basis uh as you know the standard product is
[35:14] provided but if you do access the product from NASA um and download it you can get on a pixelby pixel basis the
[35:22] estimated day of burning. Um we are working on a near realtime beers uh burned area product which near realtime
[35:30] meaning it will be updated on a daily basis and you would be able to monitor that fire growth uh on a daily basis
[35:38] instead of waiting uh you know on a monthly time step for these modus data that are available now. Um that uh near
[35:47] realtime beers product is available um is working to be available probably in the next year or so. So, it's a ways
[35:52] down the road. Um, but we are close to making available the standard uh beers burned area product which is just like
[36:01] this modus u burned area product and it'll be available on a monthly time step but takes about a couple months
[36:07] after that month that target month before it's available. That data should be uh available soon and we'll have that
[36:14] integrated into uh BMS here. Um also wanted to highlight again the use of false color composite imagery. Here
[36:24] we're looking at the um you know modus data and you know these data are relatively coarse. Uh these bands are
[36:30] about you know 250 meter resolution. I can use the hls or the harmonized lancat sentinel 2 imagery to uh get a better
[36:41] idea what's going on at a higher spatial resolution. If I zoom out here on this date of October 27th, you can see the uh
[36:49] areas that were acquired both LANCAT and Sentinel 2. I want to zoom in here and uh toggle on the false color composite
[37:02] for for LANCAT. So this is 30 meter LANCAT compared to that um 250 meter modus data. You can see the modus stays
[37:13] a little fuzzier because it's coarser resolution. You can see the active firefronts that are going on there. I
[37:17] can zoom in there further and I can see what's uh you know going on there at a
[37:23] much with much more detail than I can with the uh the modus data which is much coarser resolution. So, just wanted to
[37:32] highlight that and make you aware uh of these uh capabilities and using the burned area products to assess the
[37:39] extent extent of areas that have been burnt. So, that that concludes my demo and so at this
[37:46] time I'll transition to Jenny and she has a series of slides uh for you and also another uh set of demos. Thank you.
[37:59] Okay. Well, thanks Brad. And um we're now going to look at factors that can impact whether a wildfire is detected by
[38:06] satellites. And then we'll highlight a couple of techniques and tools that can help kind of mitigate uh these
[38:12] impacts. Again, we shared this in part one and the key takeaway is that the spatial resolution of a sensor is a
[38:19] factor that drives both the types as well as the sizes of fires that a sensor is able to detect and monitor. Modus
[38:25] with the cost of spatial resolution is less sensitive in terms of the size and intensity of fires that it can detect
[38:31] versus VAS with spatial resolution of 375 meters can detect smaller fires of 100 m squared down to 20 m squared.
[38:39] Flaming fires in good daytime conditions. And then finally, OI on board Lancer eight and nine with a
[38:45] spatial resolution of only 30 meters can detect the smallest of fires among the three instruments we have listed here
[38:52] due to its spatial resolution as well as the narrow swath width and other design characteristics. And then just
[38:58] additionally to note that the actual actified algorithms themselves, they're typically designed to be global in scope and not necessarily calibrated for
[39:06] regional conditions. So they can work more effectively in some areas than others. And as we've mentioned, the
[39:13] location of the fire on the swath as well as the view angle can really impact what um what can be detected. Okay. So
[39:21] in addition to the sensor characteristics, the algorithm design, the dial wildfire cycle as well as both the sensors temporal resolution, again
[39:30] this is the frequency with which the sensor observes the specific area of the earth and the sensor's overpass time,
[39:38] which again is the time at which the sensor passes over a particular area. These all affect the sensor's ability to
[39:45] to detect and monitor the fire activity. the illustration on the left which shows the typical DAL wildfire activity cycle
[39:54] plus it's also showing the local uh time of overpass for several polar orbiting satellites currently used in active fire
[40:01] detection. And this illustration really shows that wildfires are generally characterized by kind of more more smold smoldering activity overnight and in the
[40:11] very early morning. And then as the air temperature increases and the relative humidity decreases moving into the early
[40:17] afternoon, wildfires begin to burn more aggressively. And they're typically characterized by what is termed a peak burn period in the late afternoon and
[40:26] early evening. As we're showing in this illustration, with the onset of late evening, as the air temperature reduces,
[40:33] relative humidity picks up, a fire typically becomes less active or uh lays down. And just to note that this
[40:41] illustration is from the uh Canadian Space Ay's wildfire stat mission development. And so it also shows that
[40:48] actually the the current polar orbiting satellites that are used in active fire detection many of them do not overpass
[40:55] during the peak burn period in Canada. On the right we're looking at the dal cycle for the tropics and subtropics and
[41:04] it's not dissimilar but I did want to point out a few considerations. Firstly, the the peak burn period can range from
[41:12] uh early afternoon um as early as uh 1:30 for rainforest in uh in Brazil, for example, to late afternoon um around 400
[41:22] p.m. in in northern and eastern Australia uh as you can see on the bottom. In areas dominated by heavy tree
[41:28] cover, again, for example, the rainforest in Brazil, the peak burn period actually occurs earlier in the afternoon. um in the eastern Sahel on
[41:38] the the second row and parts of Australia especially in the north as you can see on the bottom there are actually
[41:44] two peak burn periods a typical afternoon burn period plus this lesser peak burn period in the morning and then
[41:53] finally the time span of the uh peak burn period also varies from as little as just over an hour um as you can see
[42:03] in north central Africa to um to almost 5 and a half hours um as we can see in
[42:09] East Australia and then as we see so on the illustration on the left fires in the tropics and subtropics uh typically
[42:16] lay down overnight as well. So again these differences and and how they relate to the satellite overpass time
[42:23] can affect whether a wildfire uh is detected or not. All right. And then there are also atmospheric and biohysical factors that
[42:33] can affect detection and monitoring. For example, in these uh images on the top right, the two images over Venezuela
[42:40] with Terramodus um on the morning acquisition on the left and then Nova 20, the V's uh afternoon acquisition on
[42:47] the right. And as you can see there is this prevalence of of clouds that is moving in in the afternoon. uh
[42:53] particularly over um these areas of uh Amazon rainforest down in here in the in the south central and southeastern
[43:01] portions of the country. Um the prevalence and density of these clouds can impact the detection of fires uh in
[43:09] this region. In the lower right image, this was acquired by um Aqua Modis during the uh afternoon in in early
[43:18] February 2023 when there were multiple wildfires ablaze in parts of Chile. And uh we can see both these heavy smoke
[43:27] plumes all the way throughout this area which can affect detection of wildfires if they're thick enough. Plus the plumes
[43:34] are emanating westwards towards the ocean where they're interacting with this coastal maritime or sea fog layer. Um at night time the maritime layer uh
[43:44] can push inland and this too could therefore impact the detection of active fires as this heavy um fog bank uh comes
[43:53] over the land. And then this final image on the left which was acquired by um OI on 8 in September 2024. And this is
[44:03] showing cumulus cloud and what are termed pyro cumulus or fire flows plus smoke in the greater Los Angeles area
[44:12] during a series of wildfires. These these fire clouds which are fueled by the intense heat from the wildfires are
[44:19] characterized by thick smoke columns at their base and then um forming thick clouds at the top of the plume. As you
[44:27] can see, these conditions can obscure the land service and prevent detection of of wildfires. Finally, just to note that uh
[44:35] less forested areas or or terrain conditions such as steep slopes can also affect a satellite's ability to um
[44:43] detect detect wildfires. All right, we're now going to look at a series of examples uh in firms
[44:51] of these factors that can impact um wildfire detection. And these are the main points that I'm going to uh touch
[44:59] on in the following demos. Okay. So in this first example using firms US Canada, we're looking at
[45:10] an area around Jasper in Alberta, Canada on the uh 23rd of uh July 2024. And we're in the advanced mode. And um we're
[45:20] also using this uh timebased feature here. and then um time since detection in in hours. We are going to pop on the modus
[45:34] aqua and modus terror active fire detections for this this fire that occurred occurred um to the uh that first occurred to the
[45:43] southeast of um of Jasper. And just to note note that even though we're on the 23rd of
[45:52] July, if we click on one of these older active fire detections from uh modus and actually use the local time,
[46:02] Jasper is is located in in in Mountain. We can see that these were actually acquired at 2300 hours local time on the
[46:10] 22nd, but that was five approximately 5 a.m. on the 23rd in um in UTC. Um again, this last year, these
[46:23] polar orbiters generally have uh two observations per day, once during the day and then again 12 hours later during
[46:31] the nighttime. Uh so on the 23rd of of July, you've seen this selection of of hotspots um from uh from this combined period.
[46:43] If we now add the modus terror true color composite imagery and zoom out slightly, uh we can see that
[46:53] there's uh massive amounts of smoke being pumped out of this wildfire. And we can also see some clouds to the west
[47:00] as well as uh snowpack in um in higher elevations. And just for comparison, if we actually put on the false color
[47:07] composite for the modus imagery, we can actually see how this false color composite is able to to penetrate this
[47:14] thick smoke uh more so than the true color composite. We can see the clouds to the west, and we're also able to
[47:20] differentiate the snowpack uh from the clouds um here. All right. Now, let me turn off this imagery
[47:32] imagery [Music] [Music] and move on to a day later. Okay, so we're now looking at uh the 24th of uh July and there were were
[47:46] minimal um modus terror active fire detections. detections. Okay, I'm just going to uh switch this back to
[47:57] simple. And if we actually add the Noah 21 detections here and actually change this back to the
[48:15] timebased. As you can see, most of these were actually acquired during the nighttime overpass of of 3:45
[48:30] 3:45 a.m. So again, even though there are a lot of uh of Noah 21 detections um showing up on the
[48:40] 24th, most of these detections were acquired during that earlier uh nighttime overcast. And if we actually toggle on the modus
[48:53] corrected reflectance imagery, we can see that, let me pop these back on and just pop back to the simple uh display.
[49:05] We can see that there's a pretty significant cloud bank that has moved in over the area and reduced the ability of
[49:12] the satellite to detect the active fire. So in reality uh there was a a fire raging underneath the cloud bank but because of
[49:24] the cloud that was moving in uh there were very much many fewer active fire detections. Now let me pop on. So again
[49:33] this was acquired in the morning by the afternoon we can really see that this cloud bank is now pretty pretty
[49:39] significant and uh covering much of the area where the fire was located. If we start to toggle forward to the
[49:48] 25th of July and again let's just pop on some of these other sources of active fire detection. We see a a heavy heavy
[49:57] cloud bank and uh no detections again to the 26th of July. Heavy cloud bank again no detections.
[50:10] detections. And now moving on to the 27th as well as the uh 28th, we're still seeing a lot of cloud.
[50:20] Um but for much of this duration, there actually was an an active wildfire uh around Jasper, but because of the
[50:30] clouds, there were uh no active fire detections. Okay. So, in this next example, we're going to look at the impact of of fog.
[50:45] And um we are going to look at a series of wildfires that occurred um in uh Chile in uh February of 2023. We're in
[50:56] firms, we're now in firms uh global. We're in the advanced mode and I also have the detail borders and rows layer
[51:03] uh turned on um to provide more more detail. All right, we are I've just turned turned on the uh Terramodus actifier data and
[51:16] I'm also going to pop on the Terramodus um triple load composite imagery for that day. What what you can see is there
[51:24] was minimal wildfire activity detected on the 1st of February. Pretty clear daytime conditions. If we now move on to
[51:34] the 2nd of uh February, you can see um that there are some uh wildfires popping up. And if we add the uh aqua corrected
[51:47] reflectance imagery. So obviously this was uh acquired later in the day than the ter modus imagery. You can see that
[51:55] now uh we're beginning to see these smoke uh plumes but again minimal cloud activity. activity. Now, if we on to the 3d of
[52:04] February, we're seeing this significant wildfire expansion, these massive smoke uh plumes, and also they're they're emanating westwards over the Pacific
[52:14] Ocean. Ocean. And on the 4th of February, again, we're seeing these uh massive smoke plumes, but now we're also
[52:23] seeing, as I showed um earlier in the presentation, this maritime or or sea fog uh layer that's um over the ocean,
[52:32] and it's interacting with these smoke plumes. The other thing to notice is when we move on to the 5th of
[52:44] February, we see this significant dip in um active fire activity. So let me turn this off for a second and go back to the
[52:56] fourth. A lot of fire activity. This is just one satellite. This is modus um on board terror. And then again on the 5th
[53:03] of February, a lot less active fire detections. detections. And while there was no there was actually no imagery acquired
[53:15] um for this area on the 5th of uh February, if we pop on the afternoon overpass from Aqua and we add in the
[53:26] active fire detections from Aqua, we see there were many more active fire detections uh in the afternoon over
[53:34] thousand. So it's possible that uh overnight as the air temperature on the land uh cooled slightly this sea fog
[53:42] moved in overland obscuring the land and then preventing much of the detection um that modus terror would have detected
[53:51] on the morning overcast on the 5th of February from being detected by the afternoon. As the fog layer had moved
[54:01] off and dissipated, the land was once again uh visible and aqua uh was able to detect um these these wildfires that
[54:11] were occurring underneath the fog layer. So in addition to clouds, as we've seen um in the Jasper example, fog can also
[54:20] impact active fire detection. All right, in this next example, we're back in fence uh US Canada. We're in the advanced mode and
[54:28] we're looking at the 3rd of uh August 2024. Um we're also using the uh topographic layer here which is
[54:37] available under uh static backgrounds. And we're going to look at um the Pioneer fire which occurred near
[54:46] um Steaken in uh Washington State. It was a long duration fire from uh June to the beginning of October. um again uh
[54:56] later on last year and just to note that this is Lake Chalen this is about uh 1100 ft or 335 m and then there are
[55:05] ridges up in this area that are around 7,000 ft or 2100 m and so there is a significant
[55:14] differential here between the elevation of the lake and then these surrounding Ridgeline lines here um okay I'm going to use the sub daily
[55:24] option here and set this to to 1,900 1,900 UTC with uh this 4hour reach back here and I'm going to turn on the uh
[55:38] terramodus active fire detections and as you can see there is one single terramodus detection and this was from
[55:45] the uh 1742 uh UTC overpass. This is also on the west side of this slope here and the satellite was
[55:59] actually looking from from this direction from the east westwards. If we now pop on the LANCAT active fire detection, so these were
[56:08] from LANCAP 9 and uh this was approximately an hour later at 1848 UTC. You can see the significant active uh
[56:16] fire activity in the area around the modus detection as well as to the west and um the southwest. And we can assume
[56:26] that these fires were active at the time of the terror overpass particularly this large um active event over here on the
[56:33] west. But these were not detected by uh modus due to a combination of the large view angle. Again I noted that the
[56:42] satellite was uh looking from the east to the west. Uh this was also at the edge of the swath. Um
[56:50] and so there were there are two factors. One is the view angle but secondly this terrain shadow
[56:58] uh that was uh occurring due to this ridge here uh that was blocking the view um of the uh wildfire at the time of the
[57:08] modus overpass. If we now change the time to 2100 hours, now we can see that uh there's
[57:18] more activity in the subsequent um modus uh overpass. And this time the overpass was uh to the west. So it was looking um
[57:29] eastwards. And if we now turn on the via uh Noah 20 detections, uh this also confirms that um there were
[57:40] multiple detections picked up by Venus. This was a a near na acquisition uh from Vas. Additionally, clouds were not a
[57:49] factor on uh on the 3rd of of August. And so we can rule out clouds as the
[57:54] reason why that this earlier detection by modus only resulted in in one um one active fire detection point. So in
[58:03] addition to clouds in addition to fogs large view angles as well as um the impact of terrain shadows can affect
[58:11] whether the satellites are able to uh detect any active fires. Um so then based on this range of of
[58:21] weather conditions of biohysical conditions we're now going to quickly look at a couple of uh techniques and
[58:27] tools that can help mitigate this these impacts. All right. So in this next example, we have um we we've been
[58:37] showing that we've used the true color and the false color um daytime uh composite inventory that's available in
[58:44] firms um to to help us assess why the active fire detections might not be available. But now we're going to use
[58:52] another uh image type. So, we're going back to the um Chico uh at the Park Fire near Chico um California that that that
[59:02] Brad showed um earlier. We're in firms US Canada and we're in the advanced mode on the 24th of um July 2024.
[59:13] We're actually going to make use of the uh Vers Noah 20 nighttime uh blue yellow composite that uh is available here and
[59:26] uh Brad uh also showed the sister product the nighttime radiance product um in in uh an earlier example. All
[59:35] right. Again, this is located in the dynamic imagery uh dropdown. And this is a a false comp composite that's made up
[59:43] um using the via day nighttime band and the brightness temperatures from a longwave thermal infrared band. Um this
[59:51] can be really useful for as Brad mentioned assessing uh light emitted from city lights. This is Chico here and
[59:59] we can see the lights as well as wildfires at nighttime. uh city lights and wildfires will appear in um shades
[1:00:06] of yellow in the infrared and at nighttime clouds will appear in shades of blue as you can see
[1:00:14] here. All right. So the city of Chico, we're looking at Northern California. This area is uh the area of Chico is around um 30 uh
[1:00:26] square miles or 86 km squared. Um the fire the park fire occurred to the north of this. And if we
[1:00:36] now move forward one day to the 25th of July, then you can see this uh big expansion of the fire
[1:00:44] um the most active firefight. And if we actually add the Noah 20 via active fire data, let me
[1:00:55] just put them on here. And I'm also now using this custom feature. I'm looking at just the nighttime active fire
[1:01:02] detections and I'm also looking at the fire radiative uh power of these detections and um what you can see is
[1:01:10] that the uh the most active part of the the firefront have have the highest uh FRP so fire radiative power. Okay, let
[1:01:19] me turn that back off and close this down so we have a little more room. If we now move on to the the 26th
[1:01:30] We can see this uh northward and eastward push. It's now level with a red red bluff located right around here. And
[1:01:38] then if we move on to the 27th of July, we can see this big shift northwards and
[1:01:45] also the presence of clouds which are showing up in um in light blue here. So the the black marble nighttime uh
[1:01:54] blue yellow composite imagery can be another source for assessing wildfires in order to kind of fill in where
[1:02:01] perhaps clouds or smoke prevented detections of the fires during the daytime. Uh these imagery can provide additional data points during the
[1:02:10] nighttime and they can also provide kind of a really early first look ahead of the morning overpass um so that they can
[1:02:17] be used to supplement for example where perhaps nighttime aerial imagery uh had been been collected. Okay, moving right along. Um
[1:02:30] so I'm going to quickly share a couple of additional tools that can be um useful. we can actually make use of the
[1:02:36] orbit orbit tracks to um identify kind of the anticipated time of overpass um in in firms. We can do
[1:02:47] this uh for for for the day of as well as kind of retrospective analyses. Um if we use let's just use the Chile example
[1:02:56] from uh 2023 and again we showed that there was minimal active fire activity by modus on the 5th of uh
[1:03:05] February 2023. If we actually pop on the additional satellites that were available that day. Uh so that would be
[1:03:18] S SNPP, Noah 20 and uh Aqua. uh then we can look at okay what are the other
[1:03:25] other opportunities recognizing that terror is the first uh to to pass over the area and that missed any dete missed many of
[1:03:33] the detections uh for that day due to that uh fog layer we can use this to we
[1:03:38] can use these orbit tracks to look at when the next overpasses may occur for example we saw that the aqua overpass
[1:03:46] which occurred around um uh 3:00 in the afternoon uh detected many more uh detections of the of the wildfires. We
[1:03:56] can use these overpasses to then estimate okay this is when the next overpass will occur and this is the next
[1:04:03] chance to uh to see the wildfires to to that are then used to generate the active fire detections and we can use
[1:04:10] that to estimate when they uh may be available in firm. So that that's one tool to use the uh the yoga tracks that
[1:04:17] are um available for today as well as previous days for retrospective analyses and then uh for planning further out. So
[1:04:28] for example with the Jasper fire um where we had this stationary cloud bank that lingered and lingered uh for
[1:04:35] for multiple days um we could use for example this tool which is the overpass uh predictions tool from NASA's uh OBDAC
[1:04:46] and this includes many of the uh satellites that um are included in firms. Uh we can select a particular
[1:04:55] location. Uh right now of course it's set to um AAS in the in the provian Amazon. Um we can select a date range.
[1:05:04] So I'm selecting a week's worth from uh today through the 17th. And we can uh look at the
[1:05:12] um expected overpass for Aqua, Terra, SNPP, Noah 20, Noah 21 as well as OI OI on LANCAT 8. And if you click on submit
[1:05:25] and then give it uh a little bit of time, it's going to provide the overpass times in in UTC for that location on
[1:05:34] each day. So that then you could plan um plan plan accordingly. There are also some other tools available uh in the orbit traps.
[1:05:44] Um if you look under the uh layer details here and as you can see now we have all of this information for each
[1:05:52] satellite uh for each um each day with the local uh with the crossing time in in UTC for our
[1:06:01] particular area of interest. And with that, I will pass it back to Melanie. Thanks, Jenny. Quick summary of today's
[1:06:17] training. Today, we learned how firms can be used for wildfire monitoring as well as issues that can impact a
[1:06:24] satellite sensor's ability to detect fire activity. Data latency refers to the total time between a satellite observation and when
[1:06:34] the data are available. Low latency data are important for time-sensitive decisions that are involved in responding to
[1:06:43] wildfires. Firms provides data at a range of latencies depending on characteristics like resolution and processing requirements. Active fire
[1:06:52] detection data is available in ultra real time within 5 minutes. real time within 1 hour and near real time within
[1:07:01] 1 to 3 hours depending on the sensor. Brad showed us how this sub daily information can be used to
[1:07:08] identify the time and location when a fire was detected by satellite and how to monitor and track wildfire growth
[1:07:14] using active fire detections from polar and geostationary sensors. He also showed us how to monitor fire activity
[1:07:21] at night using the dayight band from Vers as well as how to use false color imagery to visualize burn scars and use
[1:07:29] modus burned area to view monthly cumulative area burned. Next, we discuss factors that can impact whether a fire is detected by
[1:07:38] a satellite sensor. First, the spatial resolution of a sensor is an important factor that drives the types and sizes
[1:07:45] of fires that a fire that a sensor is able to detect. Sensors with higher spatial resolution can detect smaller
[1:07:53] fires. Also, the location of the fire within a swath and the resulting view angle can impact detection.
[1:08:02] Fires tend to have an average dial cycle where peak fire activity or peak burn period occurs in the late afternoon and
[1:08:10] this period might be missed by polar orbiting sensors that observe in the morning or early afternoon hours. Other
[1:08:16] factors that can impact fire detection are atmospheric features like thick clouds, smoke or fog that can obscure
[1:08:24] the surface or biohysical surface features like dense forest canopies or steep slope terrain. Jenny showed us how to use true
[1:08:35] and false color imagery to diagnose why detections might be missed. She also showed us how different satellite
[1:08:42] overpass times can be used to examine changes during the day as in the case of morning coastal fog in Chile and how to
[1:08:49] use topographic layers to see if steep terrain and terrain shadow are impacting a sensor's ability to detect a fire. She
[1:08:58] also showed a few ways to try and mitigate these factors such as looking through available nighttime observations
[1:09:05] like the VE's blue yellow composite or looking for future opportunities using the orbit track information in firms or
[1:09:13] uh the overpass predictor tool offered by the NASA ocean biology distributed active archive center or OBDAC. In part three in our next session, we'll
[1:09:24] explore web services available through firms and discuss different options to ingest active fire data. Another quick reminder, you can
[1:09:34] access the homework for this training series from the training web page starting May 1st and answers should be
[1:09:40] submitted by May 14th. Participants who attend all three parts and submit homework before the deadline will receive a certificate of completion for
[1:09:48] the training. Certificates will be issued by email about two months after the training. Here once again, we've
[1:09:56] included the contact information for myself as well as today's speakers as well as links to the ARS website,
[1:10:02] YouTube channel, Twitter X, and our sister program develop. And finally, some resources that were referenced throughout today's
[1:10:12] training. Thank you so much for joining us again today. We will now transition over to the Q&A.
[1:10:22] And as we bring that up, just another huge thank you to Jenny and Brad for another great presentation during
[1:10:29] today's part. Um, we'll start the Q&A now. Um, okay, we'll jump right in. Question one, um, are there plans to
[1:10:40] make the Lancet active fire product cover the entire globe? And I'll invite one of our guest instructors to unmute if they
[1:10:50] would like to address that question. Sure thing, Melanie. Yeah, Brad here. I'll I'll be happy to take that. Yeah,
[1:10:55] that's a very good question. Right now, the uh as discussed in the slides, the uh Lancet active fire detection data is
[1:11:02] limited to data that's collected by USGS Aeros in Sou Falls, South Dakota, which covers, you know, all the continental
[1:11:08] United States, the southern tier of Canada, and uh a good portion of northern Mexico. Uh we are having
[1:11:15] ongoing conversations about you know possibly expanding that coverage. Um you that involves you know working with cooperators you operate the
[1:11:22] international uh ground stations for collecting LANCAD data and also you know figuring out how we can you know expand
[1:11:30] our current processing environments to uh accommodate those additional data and making sure they can be provided in a
[1:11:37] timely uh manner. So they're they're useful for folks for you know near realtime uh applications and so forth.
[1:11:43] So that's something we're actively investigating and uh um you know stay tuned in the future and see how that
[1:11:49] goes. That's exciting. Um question two. The timestamps that Brad just displayed are UTC correct? And it looks like that's in
[1:12:04] reference to the orbit tracks. Uh yes. Uh all the orbit tracks uh for all the satellites that are displayed in
[1:12:13] firms are those times are noted uh for the uh satellite overpass in UTC. And uh there there's a relevant
[1:12:22] firms FAQ there. They'll you know give you some more background information on UTC if you're not familiar with it. and
[1:12:27] also uh tools or references you can use to convert UTC to uh your local time zone. Great. And we should reference just the
[1:12:40] the great firms FAQ in general. A lot of uh there's a lot of great information on that FAQ. So, we should probably include
[1:12:48] that um somewhere in the Q&A doc. Um I'm sure we've included in the resources. Um, question three is the acquire time
[1:12:57] when the data was observed or when the data was published to firms. um that that acquire time when you when
[1:13:08] you click on a an active fire detection in firms and the window pops up with all those attributes that acquire time um
[1:13:15] indicates the time of the date as well as the time of satellite observation and u um by default that time is that date
[1:13:24] and time is uh set to what your computer time is set to that you're working on. So, and be aware at the top of that
[1:13:32] window, you can, you know, click to the left of that radio button there and choose UTC. And you'll notice that
[1:13:38] acquire time uh will change back and forth between the local time zone for your computer and UTC.
[1:13:48] Okay. Question four. Are you able to export your drawing or measurements that you draw around the veh or imagery data?
[1:14:00] It sounds like uh are you able to export a a like a JPEG or That's correct. Down on the bottom part
[1:14:08] of the view there there's several buttons there. U one of them is to what's called capture. There's a little
[1:14:14] capture button there and that'll allow you to export the current firms view you have compiled as a JPEG or PNG file and
[1:14:21] even a geotip file. um the uh polygon or linear feature you've drawn to make a measurement uh that will
[1:14:30] get exported uh with the uh the image that you uh that you create. However, the the actual measurement number result
[1:14:38] that pops up there, you know, gives you the number in hectares or linear units that does not get exported. Just just
[1:14:43] the polygon or linear or line feature does. Okay, question five. Given my research, it appears that fire
[1:14:55] detection using remote sensors rely more heavily on visible spectrum bands than thermal bands. What are the primary
[1:15:02] reasons for this apparent preference or limitation? limitation? Um yeah, we'd be happy to talk to you more about that if you have some uh you
[1:15:11] like to respond to our you know firm's u u response uh capabilities there. Typically, fire detection algorithms are
[1:15:19] designed to leverage the mid in midwave infrared and longwave infrared bands if they are available on the sensor of
[1:15:26] interest and and many earth observation satellites and u you know like modus and beers as well as meteorological
[1:15:33] satellites have those those particular bands as well as other bands and those bands are uh used primarily for fire
[1:15:41] detection and characterization and uh we talked about this quite a bit in the first session last week if you'd like to
[1:15:48] catch that first presentation. We we went into uh quite a bit of detail there. Um but also um we have a you know
[1:15:56] a couple relevant FAQs uh that provide an overview on that as well and provide some reference information on on how the
[1:16:03] you know the modus and beer fire detection algorithms work. Uh we there are some uh sensors that are used in
[1:16:09] firms such as LANCAD that do not have uh both the longwave and uh midwave infrared bands and uh that LANCAD active
[1:16:18] fire detection algorithm does use primarily the swore band to detect those fires as well as relying on other uh
[1:16:24] bands as well to help in that process. But uh um you know generally th those midwave infrared and longwave infrared
[1:16:33] bands are used with most heritage uh or legacy active fire detection algorithms that are applied. Okay, question six. How can we calculate
[1:16:46] the burn severity of wildfire? Uh that's a that's a great question. Um typically uh burn severity is assessed
[1:16:56] and mapped uh using multisspectral data. Um you know through ch standard change detection methodologies require an image
[1:17:04] uh that's before the fire burned and a image that's after the fire burned. Uh how long after the fire burned uh is a
[1:17:11] factor to consider on that postfire acquisition depending on what you're trying to measure. Um but uh you can
[1:17:18] create you know various burn severity indices uh that are used uh from both the pre and post fire imagery and you
[1:17:28] know do some image differencing with those outputs to create a uh a change detection image which will uh you know
[1:17:35] represent the magnitude of change that's accessible uh with that satellite imagery which is you know typically the
[1:17:41] effects to the above ground biomass and the duff layer and whatnot that that we can sense and detect.
[1:17:51] Awesome. And here I'll I'll give a shout out to two ourset trainings that we've had in the past year on different
[1:17:58] spectral indices and DNBR is definitely a an indicy that we cover. Um so we can put a link in the Q&A doc to those.
[1:18:09] Um, question seven. Considering multisspectral imagery, for example, from LANCAD or Sentinel 2, which which false color composite is typically most
[1:18:18] effective for visually identifying wildfire smoke plumes? Beyond visual interpretation of false color composits, what other digital image processing
[1:18:27] techniques or indices could be employed to effectively mask or delineate smoke plumes in remotely sensed data? Oh, another great question. Um, and
[1:18:38] sorry we haven't have an answer populated on that yet, but we'll get that uh populated. Um, typically using
[1:18:45] the a true color composite, you know, you get more scattering and and in those shorter wavelengths and in the
[1:18:50] electromagnetic spectrum. So using the visible bands um are really great. So just, you know, standard true color RGB
[1:18:57] composits really good uh for doing that. on some sensors where you have uh those uh shorter wavelengths like the coastal
[1:19:03] blue band like you have on LANCAT uh you can combine that with some you know the visible band data as well uh to
[1:19:11] accentuate or highlight those plumes and uh yeah we'll we'll provide some uh recommended band combinations u you know
[1:19:18] for from the various sensors modus bears lancad and whatnot in response to this question and make them available.
[1:19:27] Sounds good. Question eight, why or how does maritime fog affect our satellite observation? Again, so it looks like they maybe they didn't
[1:19:38] quite catch uh Jenny's Jenny's explanation over Jenny, would you like me to still uh would you like me to handle this
[1:19:51] question or are you interested since it's relevant to your presentation? for you too, Brad. Um, you are on a
[1:20:00] roll. Oh, okay. Sorry, I didn't want to sound like I was hogging the responses here. Anyway, uh, yeah, sure. It it it's
[1:20:09] basically um, you know, just like clouds or thick smoke. The maritime layer fog can just be a layer that oludes uh, the
[1:20:16] ability of the satellite sensor to uh, uh, detect that emissive energy that's uh, coming off of fire. So if it's
[1:20:24] really thick and heavy, you just can't see those that that fire activity from space. Okay. Question nine. How can smallcale
[1:20:36] agricultural litter uh agricultural little litter burning be reliably distinguished from wildfires using firms data? Are there specific strategies,
[1:20:46] thresholds or filters within the firm's portal, especially when using modus or that can support that differentiation? Um, that's another really good question.
[1:20:59] The the short answer to question, are there available tools within firms to help you, you know, accentuate or
[1:21:05] highlight those fires compared to wildfires? Uh, no. Um uh basically it's it's hard you know because you know like a a fire you know
[1:21:15] that's burning that's a prescribed fire agriculture burn you know if it's burning hot enough can look very similar
[1:21:20] to a wildfire um and you know some fires you know like herbaceous fires or grassland fires can burn relatively hot
[1:21:29] and have very highr FRP values uh and and so forth so it's it's difficult sometimes what you can do is look at the
[1:21:36] behavior of the fires, for example, you know, fires in general are pretty transient, right? They they don't last
[1:21:42] forever, but you know, those prescribed fires or agricultural burning, you know, they're they're not burning days on end,
[1:21:48] day and night and so forth. I mean, they're just, you know, being done during the daytime hours when they can
[1:21:53] be managed and controlled and observed. Uh whereas wildfires will, you know, burn day and night, uh, you know, for
[1:21:59] several days or longer. Uh so maybe looking just at the uh the the the changes and the duration and the
[1:22:05] behavior of the fire itself uh uh in a dial cycle on a daily basis uh um can uh
[1:22:12] help with help in identifying that or distinguishing between the two. Okay. Question 10. What are the limitations of firms and
[1:22:27] how small fires can and h how small fires can we detect using LANCAT or t Sentinel 2?
[1:22:36] Uh that is uh well very great uh question and that that information is compiled through validation exercises
[1:22:44] that have been conducted with the lance at uh active fire detection data that's compiled from the OI sensor and uh those
[1:22:52] uh those uh detection thresholds are are shown here on the screen. Uh essentially the smallest ones you can detect can be
[1:22:59] down to about a meter in size. But you got to have the right conditions mainly nighttime conditions uh because you know
[1:23:05] there's better discrimination between you know the fire and the background uh during the night than you have during
[1:23:10] the day. So uh you can get down to that that that small fire. But typically uh a
[1:23:16] good flaming fire during daytime conditions and there's not a lot of smoke or anything like that you can see
[1:23:22] a fire about four square meters in size. And a reminder that the Sentinel 2 is not available in Ferns, right? The
[1:23:33] active fire detection data from Sentinel 2 is not available. That's correct. Yeah. Um, okay. Question 11. Does the
[1:23:42] firm's portal provide vegetation fuel map data such as vegetation moisture content um that can be used to access
[1:23:51] wildfire propagation and direction? Um no firms does not uh provide any u vegetation fuel map data or measurements
[1:24:02] that are you know collected on the ground for assessing fuel moisture or anything like that. However um as noted
[1:24:08] in the sponsor we do provide a couple of sources of fire danger uh forecast information and significant fire
[1:24:15] forecast uh for the firm's uh US Canada viewer. Um we those sources uh for Canada the fire danger forecast is
[1:24:24] published on a daily basis by natural resources Canada is available and um we update that and it's available for in
[1:24:31] firms US Canada and uh for the United States uh the predictive services program at NIS and Boisee Idaho uh they
[1:24:40] provide a daily um outlook or forecast of significant fire potential uh which you know factors in a number of factors
[1:24:47] which um gives an estimate of the uh anticipated uh degree of rapid fire growth uh for fires that are currently
[1:24:56] burning or you know the potential ignition of fires that may occur on that day. Um so in both those cases those u
[1:25:04] those um uh forecasts uh um they they're not one and the same uh but they do both
[1:25:11] take in account vegetation conditions uh in their forecast outputs. Okay, question 12. Oh, and I see question 12 is our last question as of
[1:25:24] now. So, uh, we have about five minutes left. So, if you have any questions, be sure to enter them now so that we can
[1:25:30] get them in. Um, do you have do you have plans to add the GO's terrain corrected data to firms?
[1:25:40] Um, at this time we we don't uh have have plans to do that. We are actively as far as goes
[1:25:49] um activities we we are actively uh monitoring the the progress on enhancements and improvements to the uh
[1:25:57] the active fire detection algorithms that are used with uh goes but uh as far as including that train corrected
[1:26:03] imagery at the moment we don't have plans to do that. Okay, I see. So, question 13. Is there a
[1:26:13] way to get the RSET data in net CDF format or any other? So, I'm assuming this is actually referring to the active
[1:26:21] fire data um within firms. Um so, a format that I can use to create a forecast model. Um, so I guess we'll
[1:26:33] the qu we'll boil the question down is is there a way to get the firm's data in
[1:26:37] net CDF format or is that something that we'll cover in next time? Um, you can get the active fire
[1:26:46] detection data that's distributed in firms in ezshape file format, commaepparated variable formats as well. And there's a a choice or mechanism on
[1:26:58] the firm's page where you can order and download that that data. Um if uh you desire to get it in another
[1:27:06] format like you know it is available in HDF format you can uh acquire from NASA lance and download in you know five
[1:27:14] minute granules uh for the modus data and I believe it's like six minute granules for the beers data.
[1:27:25] And we'll go uh way more into data access uh from firms in our next part. So stay tuned.
[1:27:35] Um how so the question says how in question 14, how in cloudy times can fumes be detected? But I'm guessing this
[1:27:42] means that how can smoke be detected when it's mixed in with clouds? How can smoke be detected when it's
[1:27:56] mixed mixed in with clouds? That's how I'm interpreting it. Let me know if you uh that's a really good question. Uh um
[1:28:06] there is a product that's available uh from amps that's on board SNPP as well as Noah 20 and 21. uh that data for S
[1:28:16] snP amps the aerosol indices I should say is that name of that product the SNPP amps aerosol indices index data is
[1:28:26] available in firms and we are working on making the uh amps uh aerosol index data from Noah 20 and 21 available uh soon as
[1:28:37] soon as it's um fully in production and provided uh on a near real-time basis globally globally um that data is relatively coarse uh for
[1:28:47] the S snPs data. When I say coarse, the spatial resolution is about uh 50 kilometers. Uh so it can get uh uh
[1:28:56] difficult to discern those those differences um you know between you know like cirrus clouds and hazy and
[1:29:04] smoky conditions if you will at that resolution just because it's so coarse. But the uh the data with the uh two
[1:29:12] subsequent sensors Noah 20 and 21 that data is going to be provided at much higher spatial resolution 17 km for Noah
[1:29:22] 20 and about 10 km for Noah uh 21. So with that increased spatial resolution it'll be better discrimination uh
[1:29:31] between those uh those outputs if you will and and telling the difference. Yeah. and other tools available from
[1:29:41] NASA like NASA Worldview has access to a higher resolution uh aerosol information like aerosol optical depth um from um from Vers and
[1:29:54] and modus. Um we can put a link to that as well in the in the Q&A doc. Um, all
[1:30:01] right. Maybe one more. Um, ha, question 15. 15. Um, or let's see. H, has radar data been
[1:30:11] effectively employed for the detection or identification of wildfire risk factors or active fires? If so, what specific radar sensor types, data
[1:30:18] products, and methodologies have proven most useful? Um, that's a really good question. I I've heard and read some some limited
[1:30:29] use of of radar, you know, depending on the type of radar, like what bands uh that are being used where it's being
[1:30:35] dabbled with or experimented with in and you know, at least mapping active fire areas. It has been used quite a bit for
[1:30:41] mapping burned areas, particularly in areas that are uh uh persistently cloudy like in higher latitudes. Uh I'm like
[1:30:50] familiar with like the Canadians use radar set quite frequently to map burned areas in those higher latitudes that are
[1:30:56] affected by clouds more and so forth. Um as far as wildfire risk factors, um there could be some uh potential
[1:31:05] um capabilities there especially like with the upcoming NISAR mission that's going up and you know the the the bands
[1:31:14] that are available on on that like Elband um SAR data, synthetic capture radar data uh to you know measure and
[1:31:22] identify areas of disturbance um in forested areas and whatnot which can create fuel load problems, down fuels
[1:31:30] and so forth that can create uh hazardous fire conditions in the future when they, you know, they dry out and so
[1:31:36] forth. So that that's a potential um application of radar data related to fire risk. And so question 17 seems
[1:31:47] uh I I see somebody's typing a response. Maybe we can just take that one quickly and then that'll be our last one.
[1:31:56] How confident are you with the geostationary data? It's currently in beta. beta. Um, really good question. Um, and it's
[1:32:05] beta because yes, the uh the the reliability of the data we we recommend users be cautious in its use. Um, and in
[1:32:14] fact all the geostationary data sources included in firms. So from mediaat himoari as well as goes we are only
[1:32:22] providing or displaying the highest confidence uh fire detection outputs. Um otherwise if if we made available everything uh without filtering it based
[1:32:34] on its confidence level like we do with beers and modus which uh have more reliable outputs those geostationary
[1:32:40] outputs are are not as reliable. um the uh there's a lot of errors of omission and commission going on there. Um so uh
[1:32:50] more time is needed to advance uh those algorithms and it's not just an issue of algorithms. There's a lot of uh
[1:32:56] technical factors that that come into play in using that data as well that uh you know that have to be considered with
[1:33:03] those input data. It's a it's a it's a trickier uh uh thing to address if you will such as like for example the
[1:33:12] navigation of the satellites might wander a little bit. So um subsequent uh observations the pixels may not
[1:33:18] perfectly align. So you got to make some adjustments for those geometric uh issues and so forth. Otherwise, that
[1:33:24] that's a prime uh situation where you can have some false positives or or emissions, if you will, in the data.
[1:33:34] Great. Okay. So, thank you so much again um to our speakers, Brad. Outstanding job answering the questions. Um we hope
[1:33:45] you'll uh join us next time. And just a reminder because I see a lot of questions um in the in the chat that the
[1:33:54] Q&A transcript, everything you're seeing here, a recording will be available on the training page soon. Um and the
[1:34:00] homework will open after the last part of our training. Um so next week after next week and that can be located on our
[1:34:08] training page as well. Thank you so much again to our speakers um and to everybody for joining us today and we
[1:34:16] hope we will see you next week. Have a great day everyone.
