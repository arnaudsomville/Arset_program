# SWOT Mission Applications and Retrieving, Visualizing, and Manipulating Data, Part 2/2

`https://www.youtube.com/watch?v=pi1arBgclfI` · id 312 · 1:31:31 · module 105 — Monitoring Global Terrestrial Surface Water Height using Remote Sensing

[00:00] Welcome back to the RSET training monitoring global terrestrial surface water using remote sensing. My name is Shan McCartney. I'm an RSET trainer at
[00:08] NASA's Gddard Space Flight Center. I'm pleased to welcome you all to the second and final part of the webinar
[00:15] series. The following slide provides a review of what was covered in part one of the training. We provided a review of
[00:22] altimeterbased lake level height data from historical and current missions along with data access via the global water measurements portal, an online
[00:31] source for satellite data products relevant to lakes, reservoirs, river channels, wetlands, and global mean sea level. level. We also provided an overview of the
[00:42] surface water and ocean topography mission known by its acronym SWAT along with data products and hydraology relevant level two data. Data access was
[00:52] provided through NASA Earth data search and hydrochron API and SWAT applications were highlighted along with NASA's early
[01:01] adopters adopters program. As a reminder, there are two prerequisites for the training. The first is our fundamentals of remote
[01:10] sensing course and the second is our mapping and monitoring lakes and reservoirs with satellite observations. Links to both those RSET trainings are
[01:19] provided below for your reference. Over the two parts of the training, we provided an overview of remote sensing observations for
[01:28] monitoring global terrestrial surface water in large rivers and lakes in part one. And today we'll be learning about
[01:35] SWAT mission applications and access for retrieving, visualizing, and manipulating data. All materials and recordings from each session can be
[01:45] accessed from the training web page. Homework opens today, May 15th, and will be due on May 31st. You can access the
[01:54] homework from the training page. A certificate of completion will be awarded to those who attend all live
[01:59] sessions and complete the homework assignment by the given due date. For part two of the webinar series, SWAT mission applications and
[02:09] access for retrieving, visualizing, and manipulating data, we're delighted to be joined by two guest instructors. Dr. Dr. Merritt Harland is
[02:20] a Mendenhal fellow and research hydraologist for the United States Geological Surveys Water Resources Mission Area based in Lakewood,
[02:28] Colorado. Dr. Harlland's research focuses on remote sensing of inland waters with a particular interest in high latitude rivers. Dr. Harland is
[02:38] interested in applying data from satellite missions to estimate river flows in ungagaed basins, assess changes in surface water in high latitude lakes
[02:46] and rivers, and compare and evaluate the accuracy of satellite derived sta stage and stream flow to field data and
[02:54] modeled data. Dr. Michael Durand is a professor and associate director for graduate students at Ohio State University. Dr. Durand and his research
[03:04] group study land surface hydraology processes with a focus on using spaceborne remote sensing measurements to answer open science questions in snow
[03:13] hydrarology and in fluial hydrarology. We are delighted to have them both joining us today to pro to provide their
[03:19] expertise to this training. By the end of part two, participants will be able to identify ways to apply SWAT data for water
[03:28] resources and disaster management applications and recognize how to how to utilize the SWAT rivers data visualization tools such as SWAT viz and
[03:38] wisp to monitor water availability and flooding potential. The outline for today's training is as follows. Dr. Dr. Harlem
[03:49] will provide an overview and demonstration of the water re water information from space or wisp. WISP is
[03:55] an interactive dashboard with real-time satellite hydrarology data and streamflow and water level data from the United States Geological Survey. WISP is
[04:04] designed to familiarize users with different satellite data products and context contextualize these data alongside ground measurements within the
[04:13] United United States. Dr. Durand will provide an overview and demonstration of the SWAT data viewer application or SWAT viz.
[04:22] SWAT viz is an interactive web user interface featuring mapping and plotting capabilities for retrieving, visualizing and manipulating SWAT data on a global
[04:33] scale. Please place your questions in the questions box and we will address them at the end of the webinar. Feel
[04:39] free to enter your questions as we go. The question and answer document will be posted to the training website within a
[04:46] week of today's training. I'll now pass it over to Dr. Harland to present on water information from space or wisp. Merritt, over to
[04:55] you. Hello, my name is Dr. Merritt Harland. I'm a research hydraologist with the US Geological Survey hydraologic remote
[05:04] sensing branch. And today I'm going to be talking about a new USGS data portal, water information from space.
[05:14] For today's presentation, first I'll give an overview of the surface water ocean topography or SWAT satellite. Uh
[05:22] following on to the previous presentations in this webinar. Then I'll give a quick demonstration of the public
[05:29] data portal water information from space or wisp. And I'll close with some varying water management applications using SWAT data.
[05:41] SWAT is a a collaborative mission between NASA and other international space agencies and the satellite is designed to monitor both ocean and
[05:50] inland waters. But today I'll be focusing on inland waters and SWAT uses a wide swath KA band radar
[05:58] interferometer to measure simultaneous elevation as well as width and areas. And having both of this data at the same
[06:06] time allows us to then estimate volutric changes such as stream flow or lake storage change. SWAT data are available starting
[06:20] around March of 2023 and SWAT is a global mission. Uh for today's data portal demonstration, it's focused on
[06:28] data within the United States. Um but data is available throughout the globe. And SWAT has repeat coverage in mid
[06:36] latitudes on average every 10 days or so within the United States or 2 days within a 21-day orbit cycle. But there's
[06:44] more frequent coverage up at higher latitudes such as in Alaska with data every 3 to 6 days. In the US alone, SWAT
[06:52] is measuring over 467,000 lakes and reservoirs and over 93,000 river miles, which is greatly increasing the number
[06:59] of water bodies that we have available data data for. If we zoom into different parts of the US, we see coverage in Denver,
[07:10] Colorado, for example, where I'm from, showing varying uh lakes as well as um the South Plat River. And if we
[07:20] look at Washington DC, we see the Ptoic River showing up as well as some lakes and reservoirs, we see the real
[07:29] potential of SWAT. If we look in the Yukon Delta and zoom out and see the thousands of lakes and river reaches
[07:37] that will be observed by this [Music] [Music] satellite. As mentioned earlier, there's varying types of SWAT water data.
[07:49] Um and the vectorbased products include a river reach as well as a river node. Reaches are broken down into roughly 10
[07:57] km segments of the river center line and nodes break these reaches down further into points along the center line space
[08:05] every 200 m. We also have lake and reservoir data which are represented um in this case by these static polygons
[08:14] you see here on this data portal. Now, I'd like to transition to talking more about water information from space
[08:24] or this new website that allows folks to go and download data uh from SWAT across the United States. And
[08:33] you're welcome to scan this QR code to directly access WISP or follow along with me at this URL.
[08:41] This uh dashboard came about through a collaboration between the US Geological Survey and NASA's Jet Propulsion Laboratory in PODAC. On NASA's side,
[08:50] they developed the Hydroron application programming interface, which takes SWAT vector-based data and turns it into time series data. This Hydrochron API has
[09:02] allowed us to seamlessly access SWAT data through this portal and is a great tool for visualizing SWAT data.
[09:12] I'm going to share a quick overview of some different features on this dashboard now. So, we have a tutorial
[09:19] page that provides an overview, which I won't go into in detail, but wanted to highlight that it's there if you ever
[09:26] want to dive in deeper. On the left here, we have a data menu where you can toggle on or off certain layers based on
[09:33] what you might be interested in viewing. And all of the features that you see here on the map are clickable and will
[09:39] take you to a time series of a region that you might be interested in. For example, um I'm viewing here river reach data
[09:49] from SWAT as well as river node layers. And if I click on a point that is near a gauge, I'll see a time series
[09:59] of both SWAT and a gauge pop up, which I'll go into more detail with later. If a site is near a gauge, you can also
[10:07] directly click to that gauge site. And we also enable users to directly download data into a CSV format that
[10:15] they can readily open and view the data for for themselves. The CSV is enabled through that hydrocon API which I
[10:25] mentioned. In addition to river data, we also include SWAT lake data on this portal as well. And users can click on a water body they
[10:36] might be interested in and view the time series from SWAT there as well. In addition to this main map
[10:44] interface, we also include anformational page on SWAT that has some varying resources and more information about the
[10:53] collaboration between the US Geological Survey and the SWAT mission. We also include a feedback page and we're actively looking for users to
[11:03] provide more feedback on how we can improve this site. We also have a frequently asked questions page that and additionally includes some
[11:13] resources. At the bottom of the site, we link to varying data sources including the hydrochron API which I've been
[11:20] mentioning. And this is a great tool for example for batch processing data and querying data across multiple
[11:31] rivers. Now I'd like to transition to talk about different use cases uh for SWAT data. One example is that SWAT is
[11:40] actively capturing flood events. For example, in June of 2024, there was a flooding event in the Blue Earth River
[11:47] in Minnesota. And we can see here on the left yaxis of this popup part chart that we're seeing
[11:55] SWAT water heights shown by these black points here. And on the right y-axis we have USGS gauge height. And you might notice
[12:06] that the values for SWAT and gauge are different. And that's because SWAT is referenced to an Earth gravitational
[12:14] model and we're showing the gauge data um in meters. based on the arbitrary gauge data. So, we're showing a relative comparison, but
[12:23] the range is the same. And in both cases, we see that there's a stark increase in the water level from both
[12:30] SWAT and the gauge during this flooding event. event. If we now go to the WISP site, um, we'll
[12:37] zoom in to the Blue Earth River and we can search for a given river by name and that will zoom us on into this
[12:48] site in Minnesota. We can toggle on a gauge layer to see this direct comparison between SWAT and a gauge.
[13:00] And here again we have SWAT water height shown in those black circles and gauge height shown in
[13:10] green. And what's so exciting about SWAT is that we're able to access this elevation information not only where we
[13:18] have gauge data but also upstream and downstream so that we can see the impacts of changes in water elevation
[13:26] throughout a whole region including in nearby lakes. Another example of how we're using SWAT data with different partners is through
[13:39] a collaboration with the US Department of of Agriculture. The USDA provides technical assistance for thousands of dams and
[13:47] reservoirs throughout the United States. Many of these sites are flood control dams and predicting when a dam is going
[13:57] to have a spillway flow which could cause downstream damages is very important but it's difficult because many of these dams and reservoirs don't
[14:05] have any sort of insitue monitoring on them. them. SWAT however is observing changes in elevation over time and these changes in
[14:13] elevation can help improve models of when spillway flows are going to occur. In order to see this data within WISP, we can zoom
[14:23] into the state of Oklahoma and toggle on the SWAT links layer in order to see that data from
[14:32] nearby lakes. First, I'll show a reservoir that happens to have a USGS gauge colllocated with it. And again, we
[14:39] see that time series of SWAT alongside a gauge time series. And we can again download the data if that's of interest. But we also
[14:47] have SWAT data on thousands of legs that don't have any sort of long-term insitue monitoring. And so we can also view time
[14:55] series there. Another example I wanted to point out is how we're using SWAT data in Alaska to
[15:04] help with the design of safer bridges. Here's an example on the Kick River where we've been working with the Alaska
[15:13] Department of Transportation who's interested in in ingesting SWAT data to improve their hydraulic models to inform safer bridge design.
[15:24] In order to access this river data within WISP, we can zoom into the state of of Alaska. And here I'll be looking at the
[15:33] river by reach layer and I can search for the Kick River and zoom into that site to access
[15:43] the time series data there. So, here's an example of a river location where we don't necessarily have
[15:52] a gauge. And we can use SWAT data to inform how the elevation changes in different parts of the year. For
[15:58] example, during ice breakup or during um the summer season. And that was my short tutorial, but I wanted to end it with some
[16:09] takeaways. One is that SWAT is really vastly increasing the number of water bodies we can measure globally. And if you're interested in
[16:18] SWAT data within the United States, I really encourage you to check out the water information from space
[16:23] dashboard and discover your own use for SWAT data through this site. I also wanted to thank the team that has
[16:32] been working with us to develop Hydroron and and um as well as the data products that are
[16:40] hosted by Podak. And I also wanted to thank uh the WISP developers, Chuck Hansen's team within the USGS California Water Science
[16:49] Center. Please don't hesitate to reach out with any questions or ideas for how to improve this site or collaboration
[16:57] possibilities. and thank you for your attention and time. I'm so excited to be here um presenting uh this web application SWAT viz um that
[17:14] explores and visualize SWAT data globally. U my name is Mike Durand and I'm a professor at Ohio State and I've
[17:24] worked for a long time with Merit. So, um, we are kind of thrilled to present both of these visualization tools kind
[17:32] of side by side and, um, she's already talked a lot about SWAT. You've already heard about SWAT from Matt Bonama. And
[17:39] so, we're just going to dive straight in here to what SWAT viz is and some of the
[17:44] things you might be able to do with it. Here is um, the link. This is SWAT viz. It is um a tool that enables global
[17:57] SWAT data access and exploration. Um and you can either hit the QR code or it's just SWATV.io. Quasi is a um is the
[18:08] consortium of universities allied for hydraological science. um if you don't um know of the org, but they do a lot of
[18:16] really cool things to make hydraologic data data um accessible and um they um have done a lot of hard work here to
[18:30] create a fast and usable app for this. And so the big thing that distinguishes SWAT viz from WISP, which you've already
[18:38] heard about, is that SWAT viz is global, allows global uh data access. Um, and it's not quite as featurerich as Wisp.
[18:50] Um, but when you need to look outside the US, it's a great place to start. Just a little bit more about the app
[18:56] before we dive into using it. Um, SWAT viz allows retrieval, visualization, and a little bit of manipulation and also download of of
[19:07] SWAT data. So, as mentioned before, was built at Quasi. It's super lightweight. We prioritize that throughout. It's not
[19:16] about um having lots of features. There's multiple other ways uh of of uh other apps out there. Um, and I did want
[19:25] to highlight the amazing API that um, we've been using, the um, Hydroron service. So, if you Google Podac
[19:32] Hydroron, Hydroron, um, this is built uh, by NASA scientists um, with a big shout out to Nikki Daldi.
[19:40] Um, and this is what enables um, SWAT viz to uh, to work so fast. And then I
[19:46] wanted to highlight um funding support from the NASA water resources program. Um this was built to help uh
[19:55] initially our colleagues in actually Alaska and the water resources um uh program there to help uh end users in
[20:07] Alaska access data and explore it quickly. quickly. So enough about the app and let's um go and explore just a little
[20:16] bit. So as we start the demonstration of the SWAT viz app um again we're at the swatvvis.quasi.io site and it loads a
[20:32] map of the whole world. Again, the key thing with SWAT viz is it allows you to um explore SWAT data globally and not
[20:38] just over over the US. So, um let's start in um Brazil on the Amazon River and we'll look at this one reach on the
[20:52] Amazon. Of course, the Amazon biggest river in the world by any metric. Um the flow of the Amazon is about 10 times the
[21:01] Mississippi. Um, as I'm sure many of you know, and many of you probably teach in your classes, um, Amazon, as we're
[21:09] waiting for the data to load, is interesting in that, um, as the, uh, seasonal rainfall patterns back and
[21:16] forth with the the seasons and the ITCZ, the solar radiation maxima, you get these this uh, characteristic um,
[21:28] um, annual cycle. So I've just gone in to the time range over on the left in the sweat viz and the graph is plotting
[21:35] water surface elevation on the main stem Amazon. And here you can see that nice smooth seasonal cycle um over about a
[21:43] year um a year plus of of data. And um several other things to to call out. You
[21:50] know, you can see how huge the Amazon is here. You know, the um water elevation here is peaking at about 10 mters and
[21:56] bottoming out at about 2 mters. So that's an 8 m um annual flood wave of 24 ft of uh of water change for our English
[22:07] uh unit users. So um the you can actually see the different um data quality flags um throughout as well and these um are part
[22:21] of a wealth of data that are produced as part of SWAT. SWAT's an experimental mission. There's never been anything
[22:28] quite like it. The Ka band radar interferometer is the key um instrument there. And so interestingly you can
[22:34] actually see that around this time um in October the data quality changed um whereas prior to that time it was
[22:43] usually suspect after that time is usually degraded which is interesting um go basically ticking down one level and
[22:50] that is because of something else that's useful to draw your attention to which is that um in fact the algorithms changed a bit
[23:00] around late October and so I'm not too surprised to see it change at that time. And nevertheless, despite the fact that
[23:07] these are flag degraded, you're still getting a lot of usable information u most likely out of them as this looks
[23:12] about like how I would expect. Let's look at a smaller river. So really existing altimeters could measure the main stem Amazon. One of the
[23:22] things that SWAT does is it allows you to see everywhere. So now we're going to go to a small tributary, smaller
[23:28] tributary um uh just uh upstream of the reach we were looking at earlier. So when you click on a region swap viz, it
[23:37] pulls up some nice metadata including the river name. Um and here it tells us that the river width here is 300 meters, which is
[23:45] still quite large actually for uh for squat. When we pull up the plots for that particular river reach, um we're
[23:52] now going and retrieving the uh uh river time series elevation for that reach. You see this interesting kind of saw to
[24:00] pattern going on. And what you notice is that the data flagged suspect, which is pretty good. Um not as good as it might
[24:10] be. Um but uh when we step down to degraded quality um that's when we see these higher
[24:18] points. And so in swap phase you could just turn off those degraded data points and you'd have some um more usable more
[24:25] likely usable information on the river at the other times. SWAT produces really dozens of additional like higher like kind of more
[24:35] granular data flags as well. And while SWAT viz doesn't expose them, they do exist. So you can dive further into the
[24:42] details for those. Um, so we've looked at a couple rivers in Brazil. Let's go to France. Um, and we're going to go to
[24:51] the city of Bordeaux um to the Garon River um near the near the downstream um terminus there. And so
[25:00] here we are in France. Here's the city of Bordeaux and here is the um uh where the Gon River empties into its estuary.
[25:11] And so we'll grab one of these coastal reaches reaches um here. Again, the river width's very large here. And you can see the water
[25:18] surface elevation average is about a tenth of uh a tenth of me basically sea level, right? We'll grab
[25:26] the the um water elevation time series here and um we do that. We'll see some interesting things. Uh while this is
[25:38] loading, I'll just mention that the title cycle of course is very interesting here. If you had hourly
[25:44] data, you'd be able to resolve, of course, the um you know, daily and sub changes in um the water elevation as a
[25:52] function of the changing tides. When you look at a year of data, you actually see a syosoidal pattern. And while that is
[26:00] not the extent of the tides, it's still very interesting. SWAT's orbit is designed so that it is non-titally
[26:05] aliased. What that means is that you actually over a year do get a chance to see um the SWAT measurements at
[26:14] different points in the title cycle. And so you have a lot of information about how the tides work
[26:19] here. Um just as a uh reminder, we've turned the degraded val data off. In this case, the degraded value uh data
[26:27] don't look too bad, so I'm going to keep them on. This is the water elevation. We're also going to look at reverse
[26:33] slope. And so when you take a look at the river slope, um again the degraded values are pretty noisy.
[26:43] Um one of the things that you can see here are the um values of the river slope going negative at some times.
[26:52] And uh we're going to kind of zoom in on about from May 5th, May 1st uh 2024 to
[27:02] uh to um the current the current time. And you can see some interesting things. Again, the river slope is positive and
[27:09] then it goes negative. So, what we want to do to maybe dive a little further into this is actually
[27:15] look at the shape of the water elevation profile um or the longitudinal profile, the water elevation versus distance. And
[27:23] while I don't want to make too much of a um um a deep dive here, I'll just mention that
[27:32] um when we do that, uh we'll be going from looking at the node data to the reach data,
[27:43] uh from the reach data to the nodes. And so we've so far been looking at things averaged over an entire 10 km reach. And
[27:48] now we'll look at data that's resolved more like every 20 uh 200 meters downstream or so. And so you see some
[27:55] interesting things here um in this uh particular profile. Uh first of all the x-axis is now the distance to the
[28:03] outlet. So the higher values to the left are further upstream. And this lowest elevation profile is actually one in which the
[28:11] water elevation is doing the expected thing and decreasing as you go downstream. And this is what you have,
[28:17] of course, in most rivers, but in a coastal river with tidal impacts, you have the water elevations um increasing
[28:24] with the tides. And SWAT can actually show you how that's working. So you see the water is higher downstream here due to the
[28:33] tide. And so you can actually see the water running um basically backwards, which is uh which is a really cool thing
[28:40] that you're able to see in these title titally impacted areas. And so we're going to go to one more place um to the
[28:47] Copper River uh which is near Lake Miles in Alaska. Uh sorry, Miles Lake. Oh, there we go. And so
[29:06] here we're looking at um now a seasonally frozen river and we're going to be looking at the copper
[29:14] just upstream of Miles Lake. So while we're near the downstream end of the river, we're not u title titally
[29:20] impacted anymore. The copper here is about 500 meters wide. And this is a special special uh river for me in part because
[29:32] um as I mentioned um a part of designing this app was so that end users as part
[29:39] of a project um that I've uh helped um to lead over these past few years through the NASA water resources applied
[29:47] sciences program to expose SWAT data um to uh to folks considering using it for um for for enduser applications, right?
[30:00] Water management applications. And um so this uh is a couple interesting things about this particular river. So um this
[30:10] is seasonally frozen. You'll see that SWAT actually is producing some observations. For example, here in February where um the river is almost
[30:19] certainly frozen. And I would, you know, the the uh ice flags as part of the data product are useful if you want to kind
[30:25] of dive deeper even though those aren't exposed here in SWAT viz, but I would just u bear in mind that uh sometimes
[30:32] the these rivers do freeze and and that doesn't mean that um uh these water elevations are necessarily as precise as they may
[30:41] otherwise be. You can see um uh parts of the seasonal cycle here on on the copper as it increases um in the summer months
[30:53] with increased uh snow melt and glacier glacier melt upstream. And this is an important reach um and special one for
[31:01] me because uh the our some of our colleagues at the USGS Alaska Science Center are making river discharge
[31:08] measurements that will ultimately inform uh the SWAT discharge data products that are going to be part of the project
[31:15] going forward. And again, those aren't exposed right now as part of SWAT viz, but they should be in the future. And so
[31:22] users from anywhere in the world once our systems are fully built and tested will be able to add their river
[31:27] discharge in different places and um have SWAT discharge accurately track in those places as well. Um and that will
[31:35] complement some of the other SWAT discharge uh efforts that we have ongoing. But in any case, that's future
[31:42] work for now. That's a little bit about how SWAT viz works and some of the interesting things you can do to explore
[31:48] SWAT data from this interface. Thanks. Thank you so much Dr. Dan and Dr. Harlland for the wonderful presentations
[31:56] and demonstrations. To summarize what we've covered in both parts of the training, monitoring surface water extent and amount are crucial for
[32:06] sustainable water and disaster management. The latest NASA mission surface water and ocean topography or SWAT measures global ocean surface
[32:15] topography and land surface water extents and elevation with great accuracy. accuracy. Level two products are available from
[32:23] SWAT in point cloud of water mask pixels in netcdia format, surface water elevation and inundation extent. Vectors
[32:32] of river reaches and nodes in shape file format and vectors of lakes in prior database and detected features not in
[32:39] prior data databases also in shape file format. Data access was shown in both NASA Earth data search as well as the
[32:47] Hydrochron API and WISP which was demonstrated today is a web tool for water management applications in the
[32:54] United States and SWAT viz also demonstrated today is a lightweight web app that allows quick visualization of
[33:01] SWAT river data globally. Uh before we proceed to the question and answer session, I want to remind you
[33:09] there will be one homework assignment accessible from the training web page. Answers must be submitted by Google form
[33:15] with a due date of May 31st. To receive a certificate of completion, you must attend all live webinars and complete
[33:22] the homework assignment by the deadline. You will receive a certificate via email approximately 2 months after the
[33:29] completion of the course. The ARSET program would like to thank once again Dr. Harlland and Dr. Duran
[33:37] for contributing their time and expertise to this training. The program would also like to thank Perry Otto,
[33:44] program coordinator for the water resources program for his contributions to this training along with the greater water resources
[33:52] program. Below is the contact information for Dr. Harlland and Dr. Duran along with links to the ARSET
[33:58] website and social media. Below are resources for the materials presented in today's training. We will now transition to the question and
[34:08] answer portion of today's training. Please submit your questions and we will get to them in the order that they were
[34:13] received. We will post the question and answer document to the training web page within a week of today's training
[34:27] session. Wonderful. We want to thank everybody that has been that have been submitting questions. We've gotten some
[34:33] really terrific questions so far. So, thank you to everybody who has submitted. There's still plenty of time.
[34:38] Uh we're going to now go to the first question in this question uh docket. So, question number one, how can SWAT
[34:45] alimemetry be leveraged to detect and monitor the influence of the 18.61-year 61-year lunar nodal cycle on tidal
[34:52] heights and wetland hydraology in mangrove dominated deltas like the sun sunarbons and whoever answered this please feel free to unmute
[35:06] can take this question so has only been collecting data for a couple years now and so we don't really
[35:14] recommend trying to leverage this data set to study long uh time scale processes. Great. Thank you. Uh thank you,
[35:26] Angelica. Uh question number two, I thought on Tuesday it was said there are observations every 21 days.
[35:38] Yes, that is true that a given pass um will occur every 21 days. However, an alternative pass may cover the same
[35:49] location um over land and so you might retrieve data um with a higher frequency than that 21-day period.
[36:01] Okay, great. Thank you, Angelica. Question number three is WISP valid over the United States only? Yes. Um, WISP is only over the United
[36:15] States, but SWAT viz is a global facing dashboard. Okay, thank you so much, Merritt. Uh, question number four, what
[36:25] is the difference between node and reach? So, uh, SWAT data can be, um, found in along stretches of a river that are
[36:44] about 10 kilometers long. And this is what we would call river reach. And these come from a an Opriori database
[36:51] that um, feeds into the processing algorithms. um but also at nodes which are essentially points along the river
[37:00] and they're just to simplify it. It's essentially whether you're looking at a stretch of river or at a point.
[37:12] Okay, wonderful. Uh Angelica, thank you so much. Question number five, how was the reach vector data set generated? Is
[37:19] it based on the national hydraology data set? for um the details of the individual data set um generation. We have a lot of
[37:42] documentation that can be found both in the user handbook and then specifically in the product description document. And
[37:48] if Mike or Merritt want to add anything to this, um feel free. I was just going to add um this is Mike.
[38:02] I was just going to add that um the underlying reaches and the nomenclature and the like center lines are all based
[38:09] on the um SWAT a priori river database uh or sword and um you can find info about that at the link I'm sharing in
[38:19] the chat. Great. Thanks so much Mike and and Angelica. Uh question number six. Uh how to get the historical data from Wisp
[38:33] from when has it data? Yeah, this is a great question. So WISP is currently displaying the full record
[38:44] of available SWAT data. Um, and so if you click on, for example, a reach or a node or a lake on the popup chart, it
[38:53] will show the full time series of data that's available. But we do apply some basic filtering where we remove bad and
[39:00] degraded quality data in those popup charts. But the full record of SWAT elevation data is also available through
[39:08] Hydrochron and through the WISP data download button. And we also display some other data sets like USGS water
[39:17] level data collected at gauges and these have denser historic and real-time data which can be available to access through
[39:25] the links provided on that data download. We also display historic records for our remote sensing of river
[39:32] discharge data and satellite alimemetry data as well. And these full records can also be accessed by that download data
[39:39] button. Wonderful. Thanks so much, Merritt. Uh, question number seven. I'm wondering how to change elevation data to the datim we are
[39:52] using. In this case of Finland, the DATM is called N2000. We change the DATM regularly because of co postglacial land
[40:00] uplift. Uh, an update of DATM approximately every 30 years. So we generally don't give guidance on transforming the data to any individual
[40:19] datim but um there is uh some additional documentation and a webinar dedicated specifically to describing the um reference frame of
[40:32] SWAT SWAT observations and how one might approach trying trying to uh compare to data sets that are in a
[40:44] different reference frame and I've put the links there. Great. Thanks so much Angelica for answering that and also providing
[40:56] links for the uh participants that were interested in that. Uh maybe potentially somebody from Finland. Uh question
[41:01] number eight, what data product is Wisp visualizing? Um, WISP is visualizing the SWAT level two hydrarology data on river reaches,
[41:15] nodes and lakes. Um, but we also display water level data from USGS gauging stations that's measured in situ. And we
[41:24] also show satellite based river discharge in Alaska from historic altimery data as well as other alimemetry data from NASA's global water
[41:33] measurements site. Great. Uh, Merritt, thank you so much. Uh, question number nine, uh, is it possible to access the cloud
[41:46] burst data using SWAT? This is the pixel cloud data, I might assume. And yes, it's definitely possible to access it. Um, we do
[42:06] not display the the pixel cloud data within WISP, but there are a lot of um tools on how to access this information
[42:15] in the SWAT cookbook, for example, which I can post a link to. And yeah, Angelica or or Mike, feel free to chime in as
[42:26] well. Yes. So, we presented a fair amount on the Pixel Cloud in part one of this. I just wasn't quite sure that that
[42:35] was what this question was asking. Um, definitely I can put some links in in the document for this question if that
[42:44] isn't the intended um answer that they were looking for. Great. And whoever asked the question, uh, please feel free if you want to
[42:56] clarify anything, uh, feel free to, uh, drop a comment in the chat and hopefully we can circle back to that. But Angelica
[43:03] and Meritt, thank you so much. Question number 10. Does the WISP portal provide real-time data over lakes?
[43:11] It does. Yes. Um, we do apply some filtering of SWAT data in those pop-up charts which I mentioned. Uh, but we do
[43:19] provide lake data on lakes where it's available and um the full record is able to download with that table data
[43:28] download button. Okay, Meritt, thank you so much. Question number 11, can Wisp be integrated into ArcGIS? That's a great question. So, we did not
[43:39] design Wisp to have like an API endpoint. Um, but we are actively using Hydroron to access the SWAT data and I
[43:49] think it might be possible to integrate Hydroon with ArcGIS. Um, and I'm not sure if if Angelica you would like to
[43:58] talk about it, but I know there are also some preliminary plans to develop some web services that would allow for the
[44:06] visualization of some SWAT data in an ArcGIS like environment. Yes. So there are um shape files available from Podak directly um that
[44:23] you can um import into GIS software and we also have worked with EZRI to um come up with workflows that leverage the net
[44:34] CDF files. But uh this also is an ongoing um line of of work and trying to to get things more accessible and um
[44:47] definitely continue to monitor the Kodak and SWAT websites for um for new ways to integrate SWAT data with GIS software.
[45:02] Wonderful Angelica. Thank you so much for that answer. Question number 12. In WISP, there's a huge gap between the
[45:09] SWAT water height in meters and the USGS uh United States Geological Survey daily gauge height in meters. Why is there a
[45:17] gap? That's a great question. If there's a specific water body you'd like me to look at, please feel free to email me.
[45:24] Um but right now we're displaying a relative time series of SWAT and USGS where we're taking the mean and
[45:36] normalizing both data sets. And that is because for SWAT it's referenced to the EGM 2008 DATM and our USGS daily gauge
[45:46] heights are referenced to sometimes different datoms um like NAVD88. And so instead of applying a a DATM correction, we're showing both time
[45:58] series on two different Y axis. And there can be a gap sometimes due to, you know, an outlier
[46:07] throwing off this mean or potentially, you know, errors in SWAT data or or kind of differences um in the two data
[46:20] sets. Okay, wonderful. Thank you, Merritt. Uh question number 13. In the case of large lakes with important
[46:27] changes in depth, how do WISP calculate the lake water height? Is it an average of pixels? That's a great question as well.
[46:39] Um, so WISP directly takes SWAT data from Hydrochron and so the elevations that we're seeing are an average of the data across the lake
[46:55] surface that the satellite is observing. Um, yeah. So it would be an average of pixels in that
[47:04] sense. And that information on on how they're averaging pixels can be found in the product description documentation um
[47:15] that I believe Angelica has provided some links to as well. Okay, wonderful. Uh thank you Merritt. Question number 14. In SWAT viz, there
[47:29] are regions with densely packed river reaches and regions with almost negligible river reaches. What can be the reason for this? If this case is
[47:40] correct, can we get information where the regions are having no river reaches? Yeah, I I took a crack at this. Um, but
[47:51] please chime in um Merritt and Jica and others. So yeah, I mean I guess there's two parts, you know, SWAT produces river
[48:00] uh data products wherever there are reaches defined in this a priori data set sword um which was mentioned earlier
[48:07] and nice link um sword's based on LANCSAT which was 30 meters uh that data products they were using. So um you know
[48:16] they're able to define rivers down to you know 30 maybe 50 rivers more uh accurately. So we'd have rivers
[48:25] anywhere that they were in LANCAT uh in SWAT. Um but of course there's a also the underlying fact that the density of
[48:32] the river network at a particular width such as 50 meter rivers is going to be a function of of climate you know so you
[48:38] you've got a lot of a lot more rainy places you'll have a denser looking river network. Great. Thanks so much Mike. Uh question
[48:48] number 15 is the WSL from the mean sea level. Yeah, if someone wants to chime in, please uh please do. I um you know, I
[49:02] just wrote that, you know, the water surface elevation WSE is um the main, you know, thing that we were looking at
[49:08] earlier in the the absence defined as meters above the EGMO8 GOID. I I'm uh yeah, if anyone wants to chime in and
[49:18] correct my uh terminology there, please uh please do. Okay, great. Thank you, Mike. Uh question number 16. Uh in SWAT viz, are
[49:35] there lake levels or just data over rivers? rivers? It's planned to add lakes to SWAT viz, but they're not there right now.
[49:47] Perfect. Thanks, Mike. Uh, question number 17. When I use swap viz, I often get empty data and the comment, "More
[49:55] lake data coming soon. Is there a way to see that before having to click each item?" Good. Yeah, we're going to hope
[50:02] to add lakes in the future. All right, Mike. Thanks again. Question number 18. Can you explain what granules
[50:12] mean in SWAT context? I can take a crack at this too, but please someone chime in. I think it
[50:22] varies that depending on the data product. as if you remember um from the first part of the session there's the
[50:28] pixel cloud and then there's um you know vector products at points and lines for rivers and there's vector products for
[50:37] polygon so um the granules are defined slightly differently and rather than getting into that I would uh recommend
[50:44] checking out the product handbook that's a really great resource or the uh yeah the yeah the user handbook
[50:54] Great. Excellent. And uh we will update a link to that user handbook when we publish this on the uh the training
[51:01] page. So do look for that. Um but thank you again Mike. Question number 19. Uh when will SWATV fizz incorporate version
[51:08] D of the SWAT data? In the current version C, most data points are flagged as suspect. Will this change in version
[51:16] D? Yeah, I wrote this answer too. Um, but again, please uh please please chime in others. But um yeah, I don't know when
[51:29] we're going to switch it over to show version D. I think we are not planning to show them on at the same time. At
[51:35] least that's my thought. And so right now or very soon I I believe it's already happened. um you know the new
[51:42] cycles are processed with version D but the old cycles going back to the beginning of the mission have not been
[51:49] processed for version D yet and that actually takes quite a while takes a little while so um depending how quickly
[51:56] that reprocessing goes you know we'll make a decision about when to switch slot those over but I think that'll be
[52:01] sometime in the autumn the other part of the question yes most data is flagged suspect and we do expect less data to be
[52:07] flagged suspect and more to be flagged good with diversion um wagging system. Terrific. Thanks again, Mike. Question
[52:18] number 20. So, what is the difference between Wisp and SWAT viz? What is the minimum reach width both of these can
[52:25] cover? You uh you want to take that one, Merritt, or I I can, but I been answering for a while. Sure. Um, yeah,
[52:36] your answer sums it up pretty succinctly. So, WISP, uh, the main difference is that Wisp is really only
[52:43] showing data available in the US currently and SWAT viz is available globally. Um, you WISP has a couple of
[52:51] more features. For example, the SWAT lake data and the integration with the USGS stage data and some other data
[53:00] sets. sets. Um whereas SWAT viz is is a little more lightweight. And for the minimum reach width, both of these can cover. Yep. The
[53:10] science requirement for SWAT is 100 m wide. But both applications are showing the full set of river reaches available
[53:19] in the SWAT river database or Sword, which includes rivers um down to about 50 m wide. Okay, wonderful. Thank you so much,
[53:38] Merritt. Uh, question number 21. How the data quality was defined as good, bad, and suspect. Yeah. So, um, I'll pick up first crack
[53:52] at this. So, you know, there's a quite a significant processing chain that flags um data quality at like the lowest
[54:00] level. So, the like um the data the data um products that kind of come before the pixel cloud um SL the SLC in the complex
[54:10] imagery and then those flags are passed on to the pixel cloud which are passed on to the nodes which are passed on to
[54:14] the reaches in the case of of reaches. So there's a whole processing chain there and it's fairly complex but the
[54:21] key things to know is that it you know uses SWAT data mostly. So it says oh I
[54:26] don't have enough pixels for example to get a good estimate of this node so I'll flag it a bad way for example. Um though
[54:33] there's much more complex and and and details there but please see the uh the you know user handbook and the product
[54:39] description document on great wonderful thank you Mike question number 22 are the water level elevations shown in swap viz referenced to mean sea level
[54:57] or another vertical data I think we answered uh answer that uh above but yeah their reference to EGM8.
[55:09] Great. Thanks Mike. Question 23. Can the data from SWAT viz be downloaded and does it have the ability to help
[55:16] evaluate flood plane prone areas? Yeah. So SWAT viz you can download. I forgot to mention that and um apologize.
[55:27] Uh but yes, once you're looking at the data, there's a download link. Um yeah, evaluate floodplane prone
[55:37] areas. I mean, it depends of course on the evaluation that you're you're trying to make, but um you know, I think a
[55:44] couple things to keep in mind are that um SWAT viz is a vector product, right? So it takes the SWAT pixels and maps
[55:53] them onto a center line in one dimension. And that's a good thing to do, you know, when you're trying to
[56:00] understand global hydraology for flood floods and flood plane prone areas. You might consider looking at the pixel
[56:06] cloud. Um since that is in two dimensions and uh for example if any processing you know weirdness creeps in because you're
[56:19] trying to represent the river as a 1D process in a 2D flow environment you know that the pixel cloud would be
[56:26] better for that. Uh terrific. Uh thanks Mike. Question 24. in SWAT viz is the data quality from
[56:36] the SWAT water pixel cloud data. So yeah, I think the data quality and I'm pretty sure this would apply to
[56:46] width too, but the data quality um flags that we're displaying are the flags set for either the reach or the node
[56:54] product. I didn't spend a lot of time talking about the difference between reaches and node necessarily in the
[57:00] um presentation but um I think they've been discussed in part one of this um training. So it's showing the quality
[57:08] for the pixels and the nodes and as I mentioned earlier the pixel and node quality flags are set by the quality of
[57:13] the pixel cloud data and other factors. Okay, thanks Mike. Question 25. I noticed that data are mostly suspect.
[57:30] Does this influence the accuracy of readings and if so to what extent does it affect? So the the data being classified as
[57:47] suspect is intended to let the not the user know that somewhere in the processing chain something was triggered
[57:56] that was unexpected or out of a certain range or gives an indication that you should treat this data with caution.
[58:09] Now, as the algorithms develop, um, some of of those flags, uh, will be changed. And so, this is a point that I will
[58:21] reiterate that in version D, uh, we anticipate that less of the data will be suspect due to improvements in the
[58:30] processing. Um, so I would suggest that who's ever interested go ahead and and check the new version to see if the data
[58:42] remains suspect. And if it does, then you would treat it with caution. It's not necessarily bad, but you have to be
[58:50] a little bit aware of um potential erroneous erroneous um data. Thank you, Angelica. Question number 26. Why was the Miles Lake grayed out in the
[59:07] SWAT viz? Are there no SWAT data for the lake and why is that so? Well, so SWAT viz as I me this is this
[59:17] was answered a couple times but yeah um lakes are not available in SWAT B right now. All right, thank you Mike. Question 27.
[59:28] Any thoughts on the future of SWAT timeline of if and when smaller river stream systems could be added?
[59:40] Uh I can take a first cut but please chime in. Um so we hope keep SWAT keeps
[59:46] flying for many years. The mission lifetime is three years. Um but if the satellite's operational uh we hope that
[59:54] it will it mission life will will be extended that uh data will keep being produced produced um timeline. So I think there are folks
[1:00:05] that are trying to work on including new smaller streams in sword. Um I don't believe those will be in version D. Uh
[1:00:15] but I have not kept super close track of that um effort. So you could always Elizabeth Altonau is uh at UNC um in
[1:00:25] Tely's group and she's the keeper and um creator of sword. So we could direct questions on Sylv. Anyone else know about those? Do
[1:00:38] you know do you have more information on that merit? I do not uh necessarily and and I think
[1:00:48] you can still look at SWAT data from the pixel cloud product and narrower rivers as well could be an
[1:00:57] option as well. Um but yeah for hydroon access of swat it's limited to the rivers that are in
[1:01:05] sword. sword. So just to um summarize for a smaller river to be processed and um have vector
[1:01:17] files available it has to be contained within that sword database. And so um this would be the critical step for
[1:01:27] getting those smaller rivers in and there are definitely people who are trying to work on that. I know that the
[1:01:34] sword database is um being updated but which rivers get included when is not something that we're at liberty to say
[1:01:42] right now. Thank you Mike Merritt and Angelica. Uh question number 28. Uh um will SWAT data also include
[1:01:55] glacial lakes? Take that one. Merritt. Um sure. So I believe there are a couple of um or a number of glacial lakes that are
[1:02:11] available in the SWAT lake vector product. And some of these lakes are not necessarily available at this time, I
[1:02:22] believe, believe, because part of how the prior lake database was developed was looking for lakes that have water at a certain
[1:02:32] amount of time in the year. And so some of these lakes did not make it into that
[1:02:36] product. But I know similar to how there's been updates in the Swat River database, there's also been updates to
[1:02:43] the prior lake database. Um, Um, and we've also looked at some of these glacial lakes through the raster and
[1:02:52] pixel cloud products. And that is an option too for looking at their elevation elevation data. And also if lakes are not
[1:03:02] available in that prior lake database, sometimes they are available through the unassigned lake product which we are not
[1:03:10] showing on WIS but is available to download through uh SWAT resources. Thank you so much, Merritt. Question 29.
[1:03:24] What's the latency for river stages? I mean, how long do we have to wait after the SWAT overpass and the levels
[1:03:31] availability within this Viza app or elsewhere? I guess Mike, do you know the exact answer? Um, it's so complicated. I wish
[1:03:50] um anyone anyone uh I don't know, Angelica, if you want to what what your normal normal answer is for that.
[1:03:59] So, I think the specified date is 45 days, but it's not always that long. Um, and from
[1:04:11] there, you know, that's that's available in Podak, but I'm not sure how long it takes then to get into the viz app. Do
[1:04:19] you know, Mike? So the viz swap viz and whisp are pulling via hydroron and so there is an
[1:04:27] intermediate step where it's all this hydrochron is also produced by NASA's um podac archive distribution center and so
[1:04:38] um um they have to like create a separate data product but from just my own experience and playing around I feel like you can
[1:04:49] often be pulling data from um like hydrochron within I don't know less than a week but I agree 45 that
[1:04:59] longer time is like the requirement um but they often are able to do much better than that yes it's good to hear
[1:05:07] how you tell that use that okay wonderful thanks so much question number 30 uh can you suggest any
[1:05:18] resource to deal with SWAT uncert certainty. I plan to process the data myself. I was going to um try and chime in on
[1:05:29] this, but I'm curious how others would would answer because I think um I have a few things to say. Uh first, it kind of
[1:05:39] depends what you're doing with the uncertainty. So, I might answer differently. Um, I'd say that the um, in
[1:05:47] addition to the product description document, I might spend a little time looking at the ATBDs, the algorithm
[1:05:52] theoretical basis documents, which are also linked um, at the, you know, the the link I shared earlier with all the
[1:06:00] all the documentation for SWAT. They're pretty thick, but if you want to really get into the uncertainty um, and error
[1:06:06] propagation, then there's a lot of information there. That said, um the uncertainty estimates themselves, especially for the
[1:06:16] um like single pass products like the river vector products, so the nodes and the reaches we've been talking about. I
[1:06:26] think that those uncertainty estimates are still kind of growing in maturity and that perhaps version E um you know
[1:06:35] what's available next year they may have um the able to track more with more like um precision what the true uncertainty
[1:06:45] estimates themselves are right like what's the uncertainty on your uncertainty but I think that those algorithms are still growing in maturity
[1:06:52] um is how I've heard the algorithm can um describe describe them. Okay, thank you Mike. Question number
[1:07:06] 31. Uh another one on lake uh water elevation. Is it possible to get lakes water surface elevation from SWAT viz?
[1:07:17] Um yeah, so it hasn't been added yet, but we plan to do it in the future. Great. Thanks so much. Question
[1:07:24] 32. Uh, I am not able to use the SWAT data viewer. Are not all rivers available? I tried for Northern Ontario,
[1:07:32] but I am unable to view the data. I'm not sure which uh which viewer that might be in reference to, but if it's
[1:07:43] for swap viz um you know some rivers don't have any data uh any you know valid swap measurements just for some
[1:07:51] reason or another like a particular reach might lie in like the diamond shapes that the different overpasses
[1:07:57] make um when there's these small areas that are not covered. It's a small number of global reaches like that, but
[1:08:04] that might be one one uh reason for it. Otherwise, Otherwise, um we've had a lot of folks use the app
[1:08:12] and we haven't seen too many issues. So, it should should be uh should should be there. If you do see a a river reach
[1:08:21] that's acting um strangely, feel free to email me and I can share that with the the Quasi team. Actually, Tony
[1:08:30] Kashanova is on the call today. He's from uh the leader of the quasi team that built the app.
[1:08:41] And I'll just add that WISP only is showing rivers in the United States, so wouldn't display any in northern
[1:08:49] Ontario. Great. Thank you, Mike and Merritt. Um, for the person that asked that question, if you wanted to clarify uh your
[1:09:01] question at all, feel free to either uh add something to the uh the comment box so that we can view that or feel free to
[1:09:09] reach out to uh to Dr. Michael Duran directly and if that is maybe a river reach that uh I don't know is not in the
[1:09:16] database or if it's causing troubles hopefully we can uh resolve that uh question for you. So question number 33,
[1:09:25] how can we estimate river reach discharge from the SWAT elevation data? Um I don't know where to start. Spent a
[1:09:39] a lot of time on uh on on that question. Um, you know, I'd say clearly uh if you're waiting for
[1:09:50] the river discharge estimates to be available from from SWAT, you know, we do expect those um uh sort of later this
[1:10:00] year. We are um there is an effort the stage algorithm working group has been pushing for some time to um basically
[1:10:09] enable the level two just so you'd have river discharge with each you know available in in SWAT fizz and and wisp
[1:10:15] and everything else available with each SWAT SWAT overpass and so that that effort's ongoing and hopefully is available uh
[1:10:23] later this year. Um, and if you're asking something else, uh, let me know. I'll just add, um, that,
[1:10:35] uh, though the data is not, uh, available yet, we have a some media, uh, trying to explain the process of this
[1:10:46] development uh, that features uh, the hydraology lead from Kess and I. I can put that link in
[1:10:53] there. I'll just also say that if you're willing to um use kind of a more experimental data set, there is the
[1:11:05] level four we call it uh data which is produced by the science team directly um and that is also a data product at Kodak
[1:11:13] and I'm just going to post a link to a um this nice uh tutorial that was put
[1:11:18] together on how to access uh that level four discharge. Wonderful. Uh, thank you so much, Mike and Angelica. Question
[1:11:30] 34. Uh, can you give more information on the temporal resolution of SWAT observations on land? What is the
[1:11:38] highest resolution possible and where you want that one, Merritt? Sure. So um there's a lot of or there's
[1:11:56] some information within the SWAT river database for example that includes the passes and how many passes per a given
[1:12:05] river or lake there is for example in the in the prior data sets and basically the temporal resolution is
[1:12:13] is a function of how many times that water body will be observed by the satellite And for example, in the
[1:12:23] continental United States, that's an average of two to three times per that 21-day 21-day orbit. And at higher latitudes, this
[1:12:34] number increases potentially to five or six. And I I believe that that's roughly the range. And so some water bodies will only be
[1:12:45] observed once in a 21-day orbit, but most will be observed several times. And so on average the temporal resolution
[1:12:52] is, you know, like 8 to 10 days, but the timing in between those overpasses might be different. And so
[1:13:02] you could have an observation, for example, on the first day, the fourth day, and the 20th day if you had three
[1:13:11] within a 21-day orbit. And so you would have different gaps, if that makes sense. And so it's dependent on the
[1:13:19] water body. Um but there is yeah a number usually per per water body and the highest resolution possible
[1:13:32] would be at higher latitudes. Okay. Thank you so much Merritt. Question number 35. How can we download data for all
[1:13:47] available US lakes at once? Is it possible to do that? Which website is the easiest and most efficient for
[1:13:54] downloading this type of data? Also, do the data sets generally cover the same time period across all links?
[1:14:03] That's a great question. Um, so WISP does display US lake data, but at this time we don't really support bulk
[1:14:13] downloading. So in order to download all the lake data currently you would have to click on each lake and and download
[1:14:19] that time series. Uh Wisp is kind of designed more to explore the SWAT data and we encourage folks to check out the
[1:14:28] Hydrochrome application programming interface if they want to explore bulk downloading of all of the data. Um, and
[1:14:36] I haven't yet posted it, but there are some resources on on downloading many links at once that have been shared. Um,
[1:14:45] and it and I really think the Hydrochron tool is is great for sort of downloading a lot of data at once. And the SWAT lake
[1:14:54] level data is generally covering the same time period across all of the lakes. But some of the lakes, especially
[1:15:02] in the US, fall under the fast sampling orbit. So there's data beginning at an earlier time period. Um, and and roughly
[1:15:11] that's about April of 2023 if it's in the fast sampling and closer to October or November of 2023 if it's not in the
[1:15:20] fast sampling, I believe. Wonderful. Uh thank you Merritt. Uh this is a followup to a question we had earlier following on
[1:15:35] question eight. That question eight being what data product is WISP visualizing? Uh this person's question is I would like to know the actual
[1:15:44] product since there are several level two SWAT data products. That's a great question. I can definitely go in and and kind of post
[1:15:57] the actual citation to to these products and we'll be sure to share that out. Um, in short, we're displaying the level two
[1:16:07] river SP product, the node SP product, and the lake SP product. And those products right now correspond
[1:16:17] with SWAT version C data um that is available through the Hydrocon API. Okay, thank you Merritt. Question
[1:16:31] 37. Uh I saw that WISP covers big rivers uh like Rio Grand in New Mexico. I'm wondering if there are any resources for
[1:16:39] small rivers like Santa Cruz, which I see are not covered by the WISP. That's a great question.
[1:16:47] So, Wisp is only displaying lakes that are in that Swat River database. So for rivers that are too narrow to be in the
[1:16:57] SWAT river database, there are potentially options in the future to include some of those rivers or to use other SWAT data
[1:17:06] products like the SWAT pixel cloud product product um for those sites and there's a chance that they might just be kind of too
[1:17:15] small to routinely and accurately observe with SWAT. But there are also other satellite remote sensing products to look at narrow rivers. For example,
[1:17:25] the dynamic surface water extent product could be used um which uses optical satellite imagery for smaller rivers. Okay, thank you so much Merritt.
[1:17:39] Question 38. Given SWAT's 21-day revisit cycle, how suitable do you think it is for capturing transient coastal
[1:17:47] processes like storm surges or river plumes? Yeah. So, um I'd love for other folks to weigh in. I'm not a coastal uh person in
[1:18:01] terms of my research focus, but um you know, I think of course you don't you know if you're going to see it somewhere
[1:18:08] two or three times for 21 days cycle, you're not going to resolve all of the details of of the title cycle and
[1:18:14] everything. But I just wanted to highlight um that the orbit was chosen uh actually the oceanographers that um
[1:18:23] design you know help push for different parts of the mission design uh chose the orbit to be non-title alias which means
[1:18:31] that kind of like I showed in the um for the groon in the training uh earlier um
[1:18:37] you know you kind of catch the cycle at different points um with each new like 21day uh SWAT cycle.
[1:18:45] So you know you do see different parts of it um and that may be useful for some
[1:18:51] applications but uh you won't ever resolve the full thing. One last thing is just not to forget about the uh fast sample data. So
[1:19:01] the for you know three months the satellite was in a one-day repeat orbit for a small number of places that it
[1:19:07] sees but at those places you might catch some of these fast changing processes a little bit better. one observation per
[1:19:13] day on those during that time. Great. Thanks so much, Mike. Question 39. What tools do you use to convert
[1:19:22] SWAT elevation to USGS gauge elevation? Um, that's a great question. So within WISP, we are not actually converting
[1:19:33] SWAT elevation to USGS gauge elevation, but if instead we're just showing a relative comparison between the two, if
[1:19:43] there um if we have observations for both a gauge and SWAT, but that being said, if you did want to convert between
[1:19:51] the EGM 2008 DOID and NAVD88, for example, um you could use the Vatam tool, which I'll be sure to post a link
[1:20:01] to um it's a DATM conversion tool put out by Noah and there's also other options out there for um these types of
[1:20:11] conversions as well. Thank you Merritt. Question 40. Does SWAT need atmospheric corrections? So the short answer is yes. Um the SWAT
[1:20:29] satellite does have a radiometer and it's used for things like the wet path delay. Um and the LR uh products, the
[1:20:38] low rate data products that are primarily intended for ocean uh data users are distributed with a dynamic
[1:20:46] atmospheric correction. And this um the source of this can change depending on which data set you are actually looking
[1:20:54] at. Great. Thank you, Angelica. Question 41. Based on the review of some recent works on SWAT, it can be observed that
[1:21:09] the meridional component of the currents does not provide significant contributions unlike its zonal component which offers more precision. Why is
[1:21:18] there this difference between the two components? I'll just chime in to say I I can't address that. I don't know if uh
[1:21:29] others can. It would be helpful to answer this question if the if they have a reference for what they're
[1:21:41] um you know which study they're thinking about. But I'll just say that um historically velocities ocean velocities
[1:21:51] provided from alimemetry rely on the critical assumption of geostrophic flow. And with SWAT specifically the um Karen data we are resolving fronts and
[1:22:04] filaments and ocean features that we've never been able to resolve before. And so certainly we can go ahead and try and
[1:22:14] apply the same equations, but I would tread with caution in calling them geostrophic velocities because um those assumptions that are embedded
[1:22:30] within that formulation may no longer hold at these scales. And so I think some there's a movement to to start calling these
[1:22:39] absolute velocities, but um it's an active area of research certainly. Thanks so much, Angelica. Uh question 42. Um
[1:22:57] uh why are some data flagged as suspect? I have looked on a yearly basis, but I found mainly suspect data and large
[1:23:04] variation in the elevation. It is true that weather is chaotic, but how could we manipulate the data for meaningful
[1:23:11] analysis? Shouldn't we be having weather multilayer integrated in SWAT viz? Is the data functional with QGIS? Um, example, geotiff.
[1:23:25] Yeah. So um let's see I think we we've mentioned earlier that most data current is suspect. Um one thing I wanted to
[1:23:35] emphasize with that um because we've highlighted already how we expect that to change in future but most of the data
[1:23:43] flagged as suspect are very usable. I just wanted to highlight that in case um to to avoid the impression that suspect
[1:23:52] means it's not usable. So there are papers being published regularly uh using the suspect flag data but just
[1:23:59] have to treat it with caution. Um some suspect data is indeed poor quality. Um yeah we're not planning to add
[1:24:08] additional data sets to stage and and visualize and swap viz. It's going to remain a pretty lightweight app. um you
[1:24:17] uh have a good funding source to uh support a buildout of many other features, let us know. Um I I should we
[1:24:26] should have mentioned Hydro Web Next, I think, too, which is a an app created by the French Space Agency, and please
[1:24:31] chime in, Merritt, if you I think it's still called Hydro Web Next. Um but that has a number of more features and it
[1:24:38] does uh support looking at multiple different data sets. I don't know if they include weather data sets or not.
[1:24:45] You can definitely download um vector data from swap viz. That'll probably be like a CSV type format and then you can
[1:24:53] visualize that in um cugis. Um but it's not a geotif. So so swat viz does not support raers. So
[1:25:02] this is um all vector data. Viz is only doing vector data. So if you want to look at raers or pixel
[1:25:12] cloud um um then you can uh you'll have to get those a different way. Uh question 43 has been addressed
[1:25:31] several times. What is the datam used to give uh the SWAT water surface elevation? So, whoever asked that,
[1:25:37] please uh refer back to this uh document once it's posted to the training page. Question 44, what improvements are
[1:25:44] expected in future level two and level three data releases, especially for coastal accuracy? So um with respect to the ocean products
[1:25:59] the low rate data uh there is a level three um product available from AISO and uh the latest release actually
[1:26:09] has an update to some of the coastal masking masking uh to allow for more um accurate representation of
[1:26:20] coastlines. And this tends to allow us to actually keep more data in in those regions. Um, and I suspect that uh once we start
[1:26:32] looking closer at version D, we'll also have some improvements on flags and similar things that allow us to um have
[1:26:42] greater trust in the products and coastal zones. And last thing I'll say on this is that um a lot of the hydraology products
[1:26:56] actually could be relevant to coastal processes as well. Just as um Mike was showing that you can see um tidal
[1:27:04] propagation um in these rivers that are titally influenced. And so for depending on what type of study you're interested
[1:27:13] in, the um you know things like the Pixel Cloud product may be a a good tool to leverage as well.
[1:27:29] Wonderful. Thank you so much. Uh I do see I want to respect everybody's time. I see that we're 2 minutes until the end
[1:27:36] of the scheduled uh uh cutoff time. So, we do understand there are roughly five questions that have not been answered,
[1:27:43] but for those that did pose those questions, uh please be reassured that uh they will be addressed and your
[1:27:50] answers will be posted on the training page uh within the coming week. So, uh if you're if you did have a question and
[1:27:57] you submitted it and was not uh answered today, please do check back on that training page within the week. But as
[1:28:02] we're wrapping up, this is the the final part of this webinar series. And one, I want to thank everybody so much for for
[1:28:10] joining. Uh we've had a a tremendous uh uh number of participants joining from all over the world. Whenever you're
[1:28:17] wherever you are joining from, thank you so much for taking the time out of your schedules and for your interest in in
[1:28:22] one strengthening the community to use these resources, these NASA resources in your work, and your research. uh if it's
[1:28:28] on the job. Uh but thank you so much and a special thanks uh to Dr. Merritt Harland, Dr. Michael Duran, and Dr.
[1:28:35] Angelica Rodriguez. Uh thank you so much for for providing your expertise uh providing the time that you gave to this
[1:28:41] training. And as we wrap up this training, I did want to give uh Merritt, Mike, and Angelica maybe in that order.
[1:28:46] Uh just an opportunity to maybe have any comments as uh as we wrap up to the participants that have joined today. So
[1:28:52] uh maybe Merritt, we can start with you. Thanks. Thanks. Sure. Thank you so much for attending. Um, this has been great and I've been
[1:29:01] really enjoying all the feedback and I hope that you all get a chance to check out Wisp if it might be of interest. And
[1:29:08] please don't hesitate to reach out with any follow-up questions or ideas for improving this site um, or any
[1:29:15] collaboration. And I'll turn it over to the other presenters. Thank you. I missed the suggested order, but I'll
[1:29:28] I'll chime in. I hope I'm I'm not jumping in front of you, Angelica. But um yeah, just echo what what Merritt
[1:29:34] said. Um this was uh so um meaningful and and interesting and and enlightening to engage with all of the questions and
[1:29:44] the way that folks see SWAT when you see it after preparing for this mission for so very long. Um it's just super
[1:29:51] exciting to see people using the data. So if you have any uh similar to what you said Merritt if you have any
[1:29:57] thoughts or insights or ideas to improve SWAT viz in future please do uh please do reach out. I'd love to hear from you.
[1:30:04] Thanks everyone. Yes, just agreed that um it's really exciting to see so much interest in SWAT and I truly appreciate Merritt and Mike
[1:30:21] um participating with us and um for all of the ARST folks for arranging this training. It's been eye opening to see
[1:30:31] how many people uh are looking for this sort of support and it's very useful for us to see these questions and for us to
[1:30:39] figure out ways to relay this information more plainly and um openly and I will definitely be taking this
[1:30:46] back to our team with the mission. Wonderful. And again, thank you so much Dr. Harland, Dr. Dan and Dr. Rodriguez.
[1:30:55] Hopefully you're seeing all of the appreciation coming in pouring in from all the participants today. So many
[1:31:00] thanks to you all. Uh again, thank you everybody that was joining today from wherever you are around the world. Thank
[1:31:05] you. And also I want to thank and acknowledge the RSET team uh working tirelessly in the background to put this
[1:31:10] on. So someone Hudson Odoi, Brock Blemens, Natasha Johnson Griffin, Dr. Amita Mecta uh and Sarah Larson. So
[1:31:17] thanks so much to the RSET team and we look forward to seeing you all at our next RSET training. Thank you and be
[1:31:21] well.
