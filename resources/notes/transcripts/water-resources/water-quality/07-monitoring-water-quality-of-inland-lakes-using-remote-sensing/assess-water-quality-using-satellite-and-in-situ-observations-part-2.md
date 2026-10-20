# assess water quality using satellite and in situ observations part 2

`https://www.youtube.com/watch?v=GuLDj2eBgGI` · id 193 · 1:29:27 · module 122 — Monitoring Water Quality of Inland Lakes using Remote Sensing

[00:01] hello everyone and welcome back to this second part of monitoring water quality of Inland Lakes using remote sensing
[00:10] today's session is going to be on cyanobacteria assessment Network or cyan and we have our guest speakers today Dr
[00:17] Blake Shaffer from US EPA and Dr Bridget Seegers from NASA with special guest Daniel sobota from Oregon Department of Environmental
[00:28] Quality Quality in the first part we described state-of-the-art High special and spectral resolution observations from landsat 8 Sentinel 2 and Sentinel 3
[00:39] satellites for what quality remote sensing sensing we describe selected open source nc2 measurements of water quality parameters
[00:48] including those from USGS water dashboard and Lake water quality portal we briefly looked at National harmonized chlorophyll data and United Nations
[00:59] Environmental Protection janster and also we looked at Gloria data we reviewed algorithm development requirements for remote sensing of water
[01:09] quality parameters explored and downloaded Gloria in situ measurements of chlorophyll a concentration total suspended sediments and second depth for
[01:20] Lake Erie we searched and identified Optical surface reflectance data from landsat 8 and Sentinel 2 co-located with nc2
[01:30] measurements for Lake Erie using Google Earth engine before we start to this session on cyan here's a note about
[01:38] asking questions please put your questions in the question box and we will address them at the end of the
[01:45] webinar feel free to enter your questions as we go we will try to get to all of the questions during the Q a
[01:53] session after the webinar the remainder of the questions will be answered in the QA document which will be posted to the
[02:00] training website about a week after the training so we start to this session on cyan now and for that we introduce our
[02:07] speakers our Dr Blake Schaefer is currently with the U.S Environmental Protection Agency in Research Triangle Park North Carolina
[02:17] his research focus is on the applied use of satellite and sensor remote sensing technology to monitor water quality in
[02:24] coasts estuaries lakes and reservoirs his research Niche is in the development of applications to meet end user needs
[02:34] for water quality monitoring and assessment assessment Dr Bridget Seegers is the NASA lead on sign project with the goal to validate a
[02:45] cyanobacteria algorithm for U.S Inland Waters Waters although currently focused on fresh water she is a research scientist in
[02:53] NASA's ocean ecology lab her work focuses on harmful alkal bloom or herbs that threaten Wildlife ecosystem and human health
[03:03] herbs are also an economic problem impacting drinking water tourism and recreational activities before coming to NASA she researched herbs off the coast
[03:14] of California on the research cruises and with research robots called gliders Dr sagers is passionate about Outreach
[03:23] and education and she loves being in and on the water as a surfer and sailor so here we have doctors Schaefer and
[03:32] Seekers please take it away this is the NASA RSA training for monitoring water quality of Inland Lakes
[03:42] using remote sensing Port 2 on the cyanobacteria assessment Network hey Blake happy summertime these long hot days of
[03:53] summer make me super excited to get out to the lake looking forward to doing some cannonballs getting in a swim
[04:03] tossing the dock lines going out for a sale finding a canoe or kayak something to paddle maybe dusting off the old
[04:10] wakeboard and doing some tricks there's so many ways to enjoy the water and we have a long weekend coming up what about
[04:16] you any plans yeah for sure we're hoping to get some fishing in or first thing in the morning
[04:22] before the crowds arrive otherwise we intend to have a relaxing weekend you know the family probably go for a hike
[04:29] bring the dog at our local state park that surrounds a lake and then we'll find a place to grill some burgers maybe
[04:35] let the kids swim for a bit nice yeah Lakes aren't important to our everyday lives even though we're not
[04:42] thinking about them all the time people really love going to Lakes getting in or playing on the water relaxing enjoying
[04:49] the views and all these visits can also be great for local economies one study of a rural Oklahoma Lake estimated that
[04:57] visitors to the lake added 1.78 million dollars to the surrounding community and supported about 50 local jobs just
[05:07] think about all these visitors coming they're buying gas and food other supplies like sunscreen and fishing gear
[05:14] and worms actually I don't really want to imagine over a million dollars worth of worms but the point is Lakes are really
[05:21] important for the recreation and for the economy indeed fishing is an important use of lakes Lakes provide food for
[05:29] consumption just think of all that yummy fish catfish well also use our Lakes for our drinking our bathing and irrigation of crops but
[05:39] I really want to put the importance of this unique freshwater Source in context this fresh water that we consume
[05:47] recreate and use for a variety of purposes out of all the water on Earth only 2.5 percent of it is fresh water
[05:55] and of that 2.5 percent only 1.2 percent is surface fresh water like found in our surface lakes and that's really hard to
[06:04] imagine so I'd like to put it in context another way there are nearly 8 billion people on earth and the world's surface
[06:12] freshwater amount is equal to only four million of those people or roughly the equivalent of the number
[06:20] of people living in just Houston Texas wow fresh water is really rare and it's such an essential resource clean water
[06:29] brings people together it's something that people agree is important yet there's a variety of concerns that threaten water quality and all the
[06:37] wonderful things we enjoy about fresh water in lakes and rivers and reservoirs today we're going to focus on one
[06:43] particular threat that has foul odors and is potentially toxic to Aquatic Wildlife people and the pets we love
[06:52] this is some subtle way of you complaining about my socks again no no Blake this is actually much bigger
[07:01] than the threat from your socks we're talking about cyanobacteria these microscopic organisms team up and together they can create toxic
[07:09] conditions that turn the water greenish bluish and even can make a slimy sludgy layer when it's really bad it almost
[07:17] sounds like a comic book kind of Swamp Thing character but actually is that one swamp monster but millions of tiny sound and bacteria
[07:31] that multiply and multiply until there are millions and millions of them in one teaspoon of water and that's what we're
[07:39] here to talk about today but before we get into the details welcome to the NASA rset training
[07:46] monitoring water quality of Inland Lakes using remote sensing part two on the cyanobacteria assessment Network I'm Blake Shafer a research scientist at the
[07:55] U.S Environmental Protection Agency and I'm Bridget Seegers a research scientist in NASA's ocean ecology lab later we'll be joined by our special
[08:04] guest Daniel sobota from the Oregon Department of Environmental Quality today we're going to be talking about cyanobacteria and
[08:13] U.S lakes and how we can monitor them using satellite technology so Bridget please do continue tell us
[08:19] what are cyanobacteria and why should we really care right so cyanobacteria let's go back to that Lake that everyone was enjoying
[08:30] that's the one so cyanobacteria are naturally occurring and they're ecologically important the cyanobacteria are an essential part of a
[08:40] healthy ecosystem so we wouldn't want to live without any cyanobacteria dinobacteria are important for a couple of reasons
[08:48] first they are the base of the food chain so they feed the fish and a lot of
[08:53] the other Aquatic Wildlife that we like secondly the cyanobacteria produce oxygen just like plants on land however there's lots and lots of
[09:02] cyanobacteria growth let's say from too much nutrients in the system that might cause a cyanobacteria to multiply and multiply to a level that's
[09:11] harmful we call this harmful situation a harmful algal bloom or a half for short today we are just discussing harmful logal blooms
[09:25] caused by cyanobacteria so we call those cyano halves which is just a short way of saying cyanobacteria harmful algal
[09:31] bloom bloom so huge amounts of cyanobacteria can be an issue too much of a good thing isn't
[09:39] good and they could form unsightly scums create odors and when all these cyanobacteria die they may actually
[09:45] remove oxygen from the system when they decompose and this can create low oxygen situations which can cause fish death
[09:55] and the cyano halves can also produce toxins which can cause gastrointestinal issues issues allergic responses and other health
[10:04] concerns in pupil dogs too dogs have been reported to die from playing uh or drinking Lake water
[10:11] with these cyano halves and these cyano halves can cause issues for livestock and even prevent our daily consumption
[10:17] of water in 2014 Ohio issued a do not drink water because toxins from the cyanobs made it into the drinking water
[10:25] supply in 2018 there was a similar issue in Oregon and the list goes on the issue is these Sino halves can happen in any
[10:34] Lake and potentially any time and there are a lot of lakes in the United States and we can't watch all of them all the
[10:41] time for these cyanohabs or can we we're starting to at least foreign the U.S Environmental Protection Agency
[10:55] NASA and USGS partnered together to develop the cyanobacteria assessment Network this cyanobacteria assessment Network called cyan uses satellite
[11:06] Technologies to detect cyanohabs in the largest U.S freshwater lakes about 2 200 of them this network supports federal
[11:15] state tribal and local Partners in their monitoring efforts to protect aquatic animal and human health basically every
[11:23] day a satellite called Sentinel 3 uses the ocean and land color instrument to detect and help people monitor where and
[11:32] when cyanohabs are occurring in these 2200 systems in less than 24 hours you that is everyone listening to this
[11:40] training can access satellite data and see where and when cyanogs are occurring across the largest U.S Lakes the
[11:48] cyanobacteria assessment network has put the power of satellite technology right in the hands of the public wow that's super cool and people might
[11:58] be curious about how the satellites can do that and in an effort to avoid getting too Technical and showing a lot
[12:04] of math equations well satellites can do this by measuring the changes in spectral color of the lake
[12:11] water remember Roy G Biv all those colors in the rainbow or perhaps that iconic Pink Floyd image
[12:18] from the Dark Side of the Moon album that shows the prison pyramid with a rainbow of colors coming through
[12:23] yep exactly that all those colors are contained in sunlight and each color is a different wavelength when the sunlight
[12:31] hits a body of water it interacts with the water and the things in the water like sediment and algae and this
[12:38] includes the cyanobacteria then the light travels back to space where the satellites can measure the light since the light returning to the
[12:46] satellite was impacted by what it what was in the water we can use the satellites to estimate things in the
[12:52] water this means when a beautiful blue Majestic Lake starts looking more of a bluish green or a cyan color from the
[13:00] cyanobacteria the satellites can let us know that that's there's something in the water let me show you an example
[13:08] on the left is what we call a true color image this is from the satellite and it
[13:12] looks a lot like something you might take with a camera but then on the right uh there's an image but we took the data
[13:21] from the satellite that measured the different colors uh or wavelengths of light and put those numbers into a math
[13:26] equation which then allowed us to estimate the cyanobacteria in the water and that equation is called the
[13:32] cyanobacteria index and we can do this for all those larger Lakes across the U.S as indicated in the
[13:40] black outlines in the map below the brown pixels represent land and we're going to give an example if we zoom in a
[13:47] bit to North the North Carolina and Virginia border inside the red box there of the map we're going to look at Falls
[13:53] Lake in the bottom image the brown pixels like I said represent land black picks where there's a quality flag for one
[14:02] reason or the other such as cloud cover or maybe it was too close to land gray pixels indicate there was a clear view
[14:09] of the water but no cyanobacteria were detected detected cooler colors like purple and blue indicate low amounts of cyanobacteria in
[14:18] warmer colors like yellow and orange indicate higher amounts of cyanobacteria this does beg the question Bridget has
[14:26] all this satellite data been validated and if so how yeah good question it has been validated using information from the states
[14:35] nonprofits and federal agencies like advisories chlorophyll measurements and toxin measurements across the U.S it's not a perfect measure of cyanobacteria
[14:45] and it could be improved but the validation suggests it correctly capture cyanobacteria events anywhere from 70 to
[14:52] 80 percent of the time full details on all the ins and outs of this approach can be found on the Scion
[14:59] project website and in the NASA release notes and don't worry we'll remind you again at the end of this discussion
[15:05] where all those websites are okay okay but is the data useful has anyone been able to do anything with it
[15:12] yeah let me give you a real life example of how the cyanobacteria assessment network uh satellite data was used to
[15:19] save a community three hundred and seventy thousand dollars for a single Hab event study focused on Utah Lake which is a
[15:27] lake that people like to go for swimming and boating and general Recreation it's beautiful but it is known for
[15:34] occasionally having cyano halves resources for the future conducted a study in Utah where cyan satellite imagery successfully identified a bloom
[15:44] that wasn't initially identified through field sampling which is done by maybe going out in boats and collecting water
[15:51] so leading up to the Fourth of July holiday local officials were on the lookout for a cyano have because they
[15:57] didn't want people getting sick then just a few weeks before the holiday the satellite imagery identified the
[16:03] beginnings of a cyano heads as shown on the left officials went out confirmed that there was a cyano had present and toxins were
[16:12] also in the water so an advisory was issued this advisory cautioned people that there was a cyanohab maybe they
[16:18] wanted to stay out of the water and resources for the future was able to confirm this advisory did protect human
[16:24] health and resulted in cost savings related to health care and the image on the right here shows how severe the
[16:31] increase in cyanobacteria were was just before the holiday in some other states have found the cyanobacteria assessment Network to be
[16:41] helpful for their cyanohab monitoring so to find out more we had a conversation with Daniel saboda who is a senior water
[16:48] quality analysis Analyst at the Oregon Department of Environmental Quality and here's that discussion Dan thanks so much for joining us and
[16:56] sharing your experience so would you be willing to briefly explain how you're using a cyanobacteria assessment Network
[17:02] satellite information in your state of Oregon Oregon yeah um well thanks Blake and Bridget for having me yeah I'm excited to share
[17:09] our experience using the cyanobacteria assessment Network in Oregon you know Oregon's been using satellite data from the project for the past four years to
[17:16] detect potentially harmful cyanobacterial blooms in large lakes and reservoirs across the state we use this information to help guide field sampling
[17:23] by our staff and inform the Oregon Health Authority about potential blooms we've actually developed a web application to distribute the satellite
[17:30] data to our staff and Lake managers across the state on a weekly basis and I want to acknowledge that my colleague
[17:36] Yuan grun has really done the Lion's Share of work in developing and maintaining this Oregon specific application
[17:43] application oh that's great it's always fantastic to hear about people using the data um how is the access to satellite technology
[17:50] change things for your group well you know the satellite technology has really been a game changer and how
[17:56] we can detect and respond to potential blooms in Oregon you know prior to its availability the Department of
[18:01] Environmental Quality and the Oregon Health Authority relied on piecemeal information reported by Lake managers in the public
[18:07] using the satellite data to help detect and monitor blooms has really improved coordination among state agencies Federal partners and Lake managers and
[18:16] how we sample and responsive loans oh um could you give a specific example uh or an event that the satellite
[18:25] technology really made a difference sure I'd be happy to give an example um so in the summer of 2020 uh we
[18:32] provided the Oregon Health Authority with satellite data on a potential Bloom at Odell Lake which is a prop a popular
[18:38] recreational Lake in the Cascade Mountains of Oregon the health authority was able to issue a preemptive recreational use advisory
[18:45] based on the satellite imagery and the Department of Environmental Quality was able to send field Crews within a few
[18:50] days to sample the lake for cyanotoxins which were confirmed to be above the state's Health advisory levels uh in
[18:56] years prior to the use of satellite data a recreational use advisory might not have been issued for up to a week after
[19:01] the when the bloom was first reported um due to the lag time of field sampling and laboratory analysis of cyanotoxins
[19:07] so the use of satellite data has really sped up our response time to blooms and improved our ability to protect the
[19:13] Public's health wow Dan thank you so much for sharing your experience with us this was very eye-opening for me we really appreciate
[19:21] your collaboration at the Oregon Department of Environmental Quality thanks again for talking with us no no thanks for having me and it was
[19:28] great to share the experience we've had using the cyanobacteria assessment Network Network talk to you later thank you bye
[19:35] some of you may be wondering if this is beneficial for your interests but maybe have never used satellite Data before
[19:42] don't worry we've got you covered the cyanobacteria assessment network has gone through Great Lengths to develop a
[19:48] number of training webinars software tools and even easy to use Access Data formats to save the day if you're
[19:56] interested in digging into this satellite information the data is simplified into a geotiff that means you can open the satellite image on your
[20:04] computer or mobile device without any specialized software just like a picture of a fish caught from the from fishing
[20:11] at a lake you mean like that picture I sent you I'd love to see some of your fishtail
[20:18] pictures Blake anyway all the images we're using in this webinar like the geotiffs shown here are cut and pasted
[20:25] into the presentation just like any other photos are into slides now if you really want to get your hands
[20:31] dirty we have different software and tools for data exploration you can analyze the data using NASA's cdas
[20:38] software which is free and it runs on Macs windows and Linux operating systems another option if you're an arcgis or
[20:47] art Pro user is a free NOAA toolbox plugin called RS tools both the CDs software and the RS tools allow someone
[20:55] to analyze data in a variety of different ways we're not going to go into details here about these tools
[21:01] because we already have additional training videos available on the cyan NASA cyan website so here's a website
[21:11] information about the Scion product and also the Scion project itself so we're going to do a quick exploration
[21:19] of this website and the resources that are available so again there's background information tells you about the sensors the years
[21:26] that we have data for going back to 2002 there's some maps of the US and also of
[21:32] Alaska that's where we provide the data for continue to scroll down you'll see the color bar that true color imagery
[21:39] along with the cyanobacteria index imagery and explains what those numbers mean mean and then if you're looking at the files
[21:47] themselves you're going to notice they have very long names so we have a file naming convention which is explained
[21:52] here here and then down at the bottom there's important things like the release notes so anytime we make a change to the
[21:58] product we'll put that into the release notes you can read any updates also tells you about the limitations of the
[22:04] product and then we have the trainings and the tools so there's a variety of different things available here we
[22:10] actually have mobile app uh tutorials we're going to tell you a little bit about that in a bit here in this
[22:15] training then we have cdas training so that's the free NASA software that you can use to interact with the satellite
[22:20] data and then finally on this page you'll see that there's also the RS tools so if you're again into arcgis or
[22:27] art Pro you can use these tools here all right if you're going to be using those tools you're going to want data so you
[22:34] go back to the top and you can see there's a box called Data access you can go over there click on that file Search
[22:40] tool tool it'll take you to the data page and it's a pretty short journey to get to your
[22:47] data so the first thing you want to do is click on some dates when do you want
[22:50] your data from then you're going to check the period so our typical products are daily and weekly if you go to the older data 2002
[22:58] to 07 it's 14 days because the satellites weren't taking as much data but typically you choose daily or weekly
[23:03] so you can pick there and then which product so do you want the cyanobacteria index that estimate of
[23:09] cyanobacteria in the water or the true color images so we picked the cyanobacteria index then uh there's
[23:16] different options for downloading the data maybe you just want a text file so you can do a bulk download and things
[23:20] like that that's what those options are about and then you can click where you want the data for so maybe you're only
[23:25] looking at one area maybe you want to look at the full us those options are available maybe you're exploring Alaska great news
[23:33] there we got tiles for you too so you get to pick what you're interested in click that we're doing all the tiles and
[23:39] then you just submit your query and it pops the files up so you can get right into looking at those geotifs
[23:45] um um if you've never used the data before or never gotten Data before they're going to make you sign into a free account
[23:51] it's really easy it just helps NASA keep track of who's using the data and then you can start all your own analysis
[23:58] and that's on that cyan page that NASA hosts if you don't have time to dig through all the satellite files or run your own
[24:08] analysis maybe you're driving around with a canoe on your car or you just want to go jump in a lake so you simply
[24:13] want to know the conditions of the lakes around you there is an Android mobile app and a web-based app that simply
[24:20] allows you to drop a pin in one of those larger us Lakes select view recent imagery and you can see the satellite
[24:26] detections of cyanobacteria here are some three simple steps to get you going so step one you need to download the app
[24:36] so you need to download the EPA cyan app step two you find your Lake of interest and you tap that location
[24:45] uh to drop a pin and then step three you simply hit view latest image and the app
[24:51] will show you the most recent satellite image and that's it now we're looking at Satellite data from yesterday it's
[24:58] really cool you literally have the power of satellite technology in your hands so this is something you can do at home
[25:05] with an Android fold again you install the app you find a link you tap that location and then you just click View
[25:12] the latest image and boom you're looking at the satellite data now the app does a lot more than that you can look at time
[25:18] series you can set different thresholds for low medium and high you can compare different locations we don't have time
[25:25] to go into all the details here but there is a training for this app which was on the website that I showed you
[25:32] just earlier so a couple things you want to keep in mind when you're looking at the app only
[25:38] the largest leaks are going to show up so you have to think about maybe like about 10 football fields wide so all the
[25:44] little the bigger lakes and the most frequent question we get is why does the app sometimes not show the most recent
[25:52] data when you click on it all right so the app only shows data when there is a
[25:57] positive report for cyanobacteria this is a way to save data usage but if you still want to see the most recent image
[26:05] you can still click view latest image and you'll get the imagery from the app if you don't have an Android but you
[26:12] want to explore the data Maybe on an iPhone a tablet or a laptop we have something for you too so take it away
[26:18] Blake yep we got definitely have you covered there is a web-based version of the app that has all the same functions
[26:25] of the mobile app and with a few additional bells and whistles so let's take a look so here's the main splash page of the
[26:33] web-based version of the app and it's a little hard to orientate without streets and state lines so we're going to click
[26:39] on the map view and I'm going to do something different instead of putting in tapping with a pin and putting in a
[26:45] pin I actually know my coordinates of a specific Lake that I'm looking at so I'm going to enter my latitude
[26:51] and my longitude here for a lake right near us in North Carolina check the location so here's uh where it drops a
[27:01] pin right in the coordinates in Jordan Lake and I click view latest image and now we are zoomed in and there is our
[27:08] lake so you can see um we can change the transparency so if you just want to see the imagery or if
[27:15] you really need to see the entire map to navigate around you can do that I like to keep it 50 so I can see both the
[27:22] imagery and the map to kind of navigate around so we're gonna do one other thing here we're just going
[27:27] to show you mentioned changing the thresholds so this is where you do it you click on that clog wheel and I'm
[27:32] just going to change the lowest threshold from 20 uh 200 000 up to 400 000 and I'll save it and this now will
[27:40] update all the numbers and the color coding that I have here um you can see the 300 000 count is now green
[27:49] another thing we can do is we can look at Water body statistics so I'm just going to search for Jordan Lake
[27:57] and we don't want the Jordan Lake in Wisconsin but we do want be over at Jordan Lake so you can see the app now
[28:02] draws a polygon around the lake and this is based on the NHD or natural hydrology database and now all of a sudden I can
[28:09] see the full distribution of all the detections of cyanobacteria based on my thresholds um for that particular image
[28:15] you can also look at a time series so look at the previous seven days and you can see now over time how those
[28:23] divisions of my categories changed in the system in the first two days that you see there's really there's no
[28:30] information it's probably because there's cloud cover and so that information is not available the other thing we can do is we can upload data
[28:37] that we've recorded so like say we have some field data and I'm going to give an example of this it's a simple CSV file
[28:44] and it's just your latitude and your longitude and a type either weekly or daily daily and there's an example file on the app
[28:52] that you can pull to um to do this upload and we upload it up to the app and then what it's going to do
[28:58] is it's going to go through and match all those points to our satellite image that we have that you can pair your
[29:06] values that you've measured as well and once it's done you're going to get an email saying the job is complete and
[29:13] this is what the exact results will look like so again it spits back a simple CSV file you can open it up in Excel or any
[29:20] type of text reader so it gives it kind of comes back to you with here the input
[29:25] locations both latitude and longitude there's the location name based on Google Maps the date that you did the
[29:32] the information request the date of this satellite image and then we identified weekly we wanted a weekly match so that's the weekly
[29:40] information and then it gives you some information think about a tic-tac-toe box box right so your point is in the center box
[29:48] the center square of that Tic-tac-toe and it's looking at nine pixels around that box so that's the information there so you
[29:56] can do some real quick kind of cool comparisons between your own information and what the satellite's telling you
[30:03] in addition if we go back to order body of stats and we click on water bottle reports you can use a number of
[30:10] different things you can go by County so here just as an example we're going to go back to North Carolina and you can
[30:17] see it lists all the counties in North Carolina Carolina um and for here we're just as an example
[30:22] we're going to pick out Chatham lake so let's see where is Chatham Lake or I'm not sorry not China like Chatham
[30:31] County oh there we go Chatham County and we can select a date just for an example I think we'll just pick the
[30:37] previous week as an example and we can generate the report so in order to save time here I'm
[30:44] actually going to pull up another report this report is not for County but a specific water body this will be Lake
[30:51] Okeechobee and Florida so we're going to download this report I'm just going to give you an example of what the app is
[30:56] able to do for you so it generates an entire PDF of this report um and so here's some basic information
[31:03] the legend information again the categories that you have selected the low medium high and we in this demo that
[31:10] I pulled up there's one lake Lake Okeechobee so it reports that information for that single Lake it
[31:16] gives you the spatial extent and the frequency of the detections of the blooms within that Lake it looks at the pixel distribution
[31:23] um both in a pie chart and a graph and over time for the week and also it
[31:28] reports it out in a tabular format so if you wanted to do some of your own more
[31:32] in-depth analysis you really could so this app basically kind of does the homework for you it's it's a really neat
[31:39] function wow that's some pretty awesome stuff um I'm impressed with all the features uh at one point you mentioned the
[31:50] spatial extent and temporal frequency and of course the app includes magnitude or concentration but maybe we should dig
[31:56] into this a little bit more yeah I think that's a great idea okay so often when looking at daily
[32:02] satellite images one might wonder about the larger context like how might a lake that you're looking at compared to a
[32:09] like to other lakes or how are cyanohabs changing from year to year yep and we've got that information too
[32:16] so the cyanobacteria assessment network has worked with amazing people that summarize this type of information at the epa's Enviro Atlas and report on the
[32:25] environment environment so why don't we start by explaining these metrics the temporal frequency is a conceptual is conceptually represented here uh what
[32:36] this is is a square represents an individual measurement let's say each week and we summarize the number of
[32:43] times we have detections of cyanobacteria over the total numbers of observations though this answers how often do cyanobacteria blooms occur
[32:53] right and the spatial extent is conceptually drawn here where we quantify the median Lake area that is
[33:01] consumed with the bloom and compare that to the total Lake area and this helps answer the question how much area did
[33:08] these blooms consume the magnitude is the concentration of the bloom over the year or perhaps the summer recreational season so this
[33:17] answers the question what is the concentration of the blooms and finally we have the occurrence which summarizes
[33:24] out of all the 2192 lakes that we can provide satellite measures for how many lakes are experienced single bloom or not in a
[33:34] particular week and these metrics are publicly available or soon to be publicly available on a yearly basis at
[33:42] either epa's report on the environment or Enviro Atlas uh here is the example from Enviro atletic and you can see on the left
[33:52] under harmful algal blooms the temporal frequency and spatial extent are available for each year that cyan has
[33:59] satellite data these measures are available at the individual Lake scale and Enviro Atlas you can see in the middle that Jordan
[34:08] Lake in North Carolina is highlighted and when you click on the extent it lists the percentage of the lake area
[34:14] that had a bloom for the year the Enviro Atlas data are free to download so you can run your own
[34:22] analysis or do your own investigations yep and let's look at the report on the environment's website so here's an example of the weekly
[34:33] occurrence for the entire United States for the 2021 calendar year and we're going to go back you can see so this
[34:39] very quickly allows you to go back to 2020 2020 2019 so you can think see how things are
[34:45] changing year over year in report on the environment we can also look at the spatial area so again this
[34:54] is the entire area blooms are consuming uh the median over the entire United States and you what's nice about this is
[35:00] you can also Mouse over the plots and see what the actual values are being reported we can also zoom into specific
[35:07] regions so here's a brief example just looking at the Northeast and how that compares for the current year
[35:13] frequency we also mentioned so we can look at this again how frequency changes year over year and let's just pick an
[35:21] example let's pick something different like the west region so here you can see and again you can Mouse over the
[35:28] frequency of detections of cyanobacteria across all these 21192 systems and a number of non-detects across each region
[35:37] within the United States so it's got a lot of different functionality at different scales to allow people to do
[35:43] different types of analysis nice uh so here are some cool examples of what you can do with these metrics
[35:51] colleagues at the University of Wisconsin-Madison I'm Wisconsin go Badgers so colleagues at the University of Wisconsin-Madison use the frequency metric and built a
[36:05] model with Zillow home sale information and found that Lakefront housing the prices of these houses would benefit
[36:12] from less frequent cyanobacteria blooms for example a Northeastern Regional annual benefit would uh a regional benefit would equal more than
[36:23] 14 million dollars just from a thing just from a single week of a reduction in bloom so again if we just reduce
[36:31] Balloons by one week it's equivalent to 14 million dollars in home sale values another study use the magnitude metric
[36:39] and developed an approach for identifying Lakes at risk for toxins so we should clarify that the satellites
[36:46] themselves cannot detect toxins but this effort modeled the risk of toxins using the satellite data um so those are just a few ways to use
[36:55] uh the data and the cyan metrics but there are more unfortunately our time together is coming to an end
[37:04] so in summary the cyanobacteria assessment Network provides near real-time daily measures of cyanobacteria for about 2 200 of the
[37:12] largest U.S Lakes the data alone is valued at 5.7 million dollars per year but we don't stop there
[37:24] no we don't the project provides detailed training videos in addition to this event software tools for technical
[37:31] person uh who wants to get their hands dirty with the data and for the person who doesn't have time or needs to just
[37:38] wants to look at the current status it provides annual metrics of temporal frequency spatial extent Lake occurrence
[37:45] and magnitude all publicly available at the lake scale and Enviro Atlas and Regional scales in report on the
[37:52] environment that is a lot of stuff coming from just one project indeed and if you want more information
[37:59] on the project you can visit the US EPA cyanobacteria assessment Network at www.epa.gov cyano project there you can
[38:10] find links to everything mentioned in this training in addition to more than 35 peer-reviewed papers the NASA cyan
[38:18] website can be accessed through the EPA site and it has all the training videos software free data and the necessary
[38:25] background information such as the release notes to get you started this project was funded by NASA ocean biology
[38:32] and biogeochemistry NASA applied sciences uscpa NOAA and the USGS sound effects are open source from the BBC
[38:42] yep and I'm Blake Shafer at the U.S EPA and I'm Bridget Seeger at NASA's ocean ecology lab and again special thanks to
[38:52] Daniel sobota for helping us and providing that interview yeah and thanks to all of you who have
[38:59] interest in our work and made it all the way to the end of this presentation we hope it was valuable and you learned
[39:05] something new [Applause] [Applause] foreign thank you so much for the wonderful presentation and very useful information about cyan and its applications
[39:34] we thank our speakers Dr Blake Schaefer Dr Peter sagers and a special guest Dr Daniel sovota for their time and
[39:42] information that they provided about cyan next Dr Richard sigers is going to show us a demonstration of Scion web app and
[39:54] she's going to present a case study at the end of this presentation after her case study presentation you will be
[40:02] going through an exercise using sign web app so let's start with the presentation by Dr Seekers welcome to the cyan web app uh if you
[40:12] want to come here yourself you can just go to qed.epa.gov cyanweb and it's going to open up to this nice interface
[40:21] um there's only data in the US so you're going to want to stay in that area stay
[40:25] focused and you can notice I've been here before because you can see all my pins spread around
[40:31] um all right so fair amount of work um you can see it's a satellite image right now if you prefer street maps you
[40:41] can do this uh I've got a lot of pins the color of the pins actually have some
[40:45] meaning so green means a low cyanobacteria then it goes yellow orange and red so straight away you can get an
[40:51] indication of what's going on in the licks based on the most recent satellite imagery if you want to drop a pin in the
[40:58] lake you can just zoom in and click on a link and it will put the pin in and it
[41:03] will tell you the most latest imagery which is January 22nd 2022 the cells are in the green range of a hundred thousand
[41:11] cells per ml and then it tells you how it's changed since the last image so the previous image was from the 1st of
[41:18] January and it's gone up a bit from the 50 000 cells that we had then so that's
[41:23] how you drop a pin uh once you drop a pin anywhere it's gonna automatically put that Lake in that location under my
[41:31] location so let's click over there and see what happens so I have 27 locations currently you can scroll down and see
[41:37] them all um if you click on your link in a location it's going to give you some
[41:42] additional information so first thing that you're going to notice is that the satellite data is now actually on it so
[41:48] here's Lake Mendota in Wisconsin and to the right you can see all the satellite data historically as well
[41:56] um so this is January there's not much going on in the system why don't we go back to
[42:01] um August and we can zoom in you can see yeah there's plenty of like with cyanobacteria in that area so anywhere
[42:08] you see rainbow colors that's an indication of cyanobacteria the gray means it's below detection level and black means there's no data so that's
[42:15] what things look like in August and we go back week to week and see how things have changed this is
[42:22] the overview feature under my locations there's also imagery if you want to see all the imagery you can get all the
[42:27] imagery there and another cool thing is the charts so you can see like Mendota going back to 2019
[42:36] um you know has some patterns in their cyanobacteria sometimes big blooms a lot of background level it's never really uh missing any
[42:47] counts or anything like that but that's another great feature you can take a look at how the lake is done over time
[42:53] all right so another thing you could do if you have your pins dropped around is you can actually click to compare our
[43:00] location so let's pick like cascana and then we can go back let's run let's see what's another interesting whatever
[43:10] real select to compare so as I click select to compare they go up into this list so compare and then once you have
[43:16] your list built you hit compare locations so there's a background stats about the most recent conditions but here's a really cool thing the
[43:24] blooming chart so you can compare two licks over time so you can see Lake koscana and this light blue
[43:29] has big blooms and then kind of low background levels and then some really big Blooms of cyanobacteria versus like
[43:36] Beulah which kind of has just a low level of cyanobacteria in the lake so that's kind of neat to see and then you
[43:42] can also compare their locations on the map so this is all under the compare tab notifications I'll just tell you when
[43:49] there's new data available nothing's going on there now and then um uh the last thing you can do which is a
[43:57] great feature is um um put in coordinates so if there's a sample location that you do a lot of
[44:03] work at or maybe you know or there's a swimming beach you can just put in the Latin log and then the app will find
[44:08] those lakes and show you the imagery for those Lakes so that's a really brief overview of the cyan web app but you can
[44:15] see it's very user friendly you can find likes that you're interested in it will save those locations you can come back
[44:20] time and time again and see how things are going thank you so much I appreciate that was
[44:30] a great presentation and we will be working with the web app very soon so before we do that just wanted to talk
[44:38] about what's coming up next uh session uh so we in in part one we already downloaded or at least identified
[44:48] um data in Western Lake Erie region uh from Gloria which is in situ measurements and we also identified
[44:55] images from Lancet and Sentinel landsat 8 and Sentinel 2. so now next in next session we are going to use those data
[45:06] and we'll use sentinel 2 because of its higher resolution and The Institute data and we'll derive we'll see how to
[45:14] develop algorithm to derive chlorophyll a concentration on total assessment at sediments and water Clarity so that's coming up uh we'll also try and look at
[45:26] a variability of water quality parameters over time so that's coming up and just a reminder about homework and
[45:36] certificates certificates homework will be posted on 25th of July and the last day of this training it
[45:43] will be accessible from our set web page and it the answers must be submitted via Google forms and the due date is August
[45:52] 8th 8th so there will be Hands-On exercises like you had one in last session and there will be one today so you will be
[46:00] instructed to submit results of these exercises to a Google drive folder and certificate of completion can be
[46:08] obtained if you attend all three sessions live and complete the homework assignment by the deadline uh the
[46:15] certificate will be awarded via email approximately two months after the completion of this course so now um before we go to our question and
[46:26] answer session we're going to have some time to work on uh sign exercise and you can download that from the meeting page
[46:34] and it's also available from our set website so uh we'll have some free time for you to explore uh sign web app and
[46:43] then uh we'll come back again and do the question and answers thank you so we have doctors late and uh Blake
[46:56] Shaffer and Bridget singers online and they will be answering all the questions we've already received several questions
[47:04] so we will go through them one by one and please your template please unmute yourself and you can answer the
[47:11] questions that would be great I said first answer first question is can we see the sign of bacteria at
[47:18] Coastline or wetlands um I'm sure I can answer that question uh this is uh Dr Bridget Seegers
[47:30] um great to be here so yeah in terms of being able to see cyanobacteria at the coast and at the wetlands so not in
[47:37] Wetlands typically because there is land interference and we typically only per you know we back off from the land
[47:43] because there can be influences that make the algorithm not perform well um we can detect freshwater cyanobacteria in the coastal estuaries
[47:54] um the algorithm wasn't meant to detect Marine cyanobacteria but we do provide the product along the coast to the 35
[48:03] meter isobath so we there is some imagery for that region and people have actually used the cyan product uh to
[48:12] detect cyanobacteria blooms along the Florida coast and also like the Mississippi Gulf Coast um and these were blooms that actually
[48:19] came from freshwater systems and then came out of the rivers and along the coast and um um uh there is a paper that was published
[48:28] uh just last month that focused on the movement of cyanobacteria from the freshwater systems into the coast and
[48:35] they were using the cyan data so there have been some examples great thank you uh next question is what
[48:42] is the formula for deriving cyanobacteria index and can it be applied in the case of water hyacinths
[48:55] um okay yeah the cyanobacteria index um is a published algorithm so it is in a uh in a paper which you can go and
[49:06] read uh and it focuses on the it's based on chlorophyll and also on pigments that are unique to
[49:15] cyanobacteria cyanobacteria um this algorithm is not for detecting water hyacinths so I wouldn't suggest doing that okay question three is are the
[49:28] distributed images regular geotiff or Cloud optimized geotiff uh these images are regular geotiffs and question four is I am based in Ghana
[49:42] West Africa am I able to use the data for the sign in uh uh um you can still access it the app and
[49:52] use the data but it's the data on the app is only for the US unfortunately um there is the source code for the app
[50:00] it's publicly available so if anyone wanted to put the resources in and develop the app for any specific region
[50:06] uh that that is possible but it's not part of the app that we are providing and in the chat we put the link to the
[50:14] GitHub repository so that's the that's the code that would be necessary and I just wanted to ask you Bridget
[50:24] that would access all G we would sent you know three data we used or any other um right now with the wavelengths that
[50:33] we're using uh ulti in Sentinel 3 would be would be the data great thank you thank you question six is for cyan one
[50:42] of the examples showed exporting summary stats to our CSV file using a point in the surrounding nine points is it
[50:51] possible to do a similar a data summary retrieval for an entire Lake um yes uh lake level stats they are
[51:01] available in the web app um so you can do that you'll just have to click around and explore and find
[51:06] that full link uh option and then you can also get like uh summary stats from the Enviro Atlas
[51:14] um and again in the chat we put or in the questions document we put a link to
[51:19] that and how you can maneuver to that area so there are options to get entire league stats yep
[51:26] so next question is can we apply the algorithm with the remote sensing tool in other Lakes outside the U.S
[51:37] so there are rs tools that we provide as part of cyan they only work with the the
[51:43] cyan geotiff data so you would have to have the same the same cyan geotif file layout so I'm not sure that you can I
[51:53] don't know if you could do that yourself but yeah it's not really designed to be used outside of the US
[51:58] hmm hmm next question is how long does an event of cyan Bloom normally take in a lake
[52:05] what is the concentration of cyan in milligrams or cubic liter during the bloom event which is um yeah that's a great question
[52:18] um um Lakes are very very different and blooms each one can also be very different sometimes blooms might only last a day
[52:27] sometimes they'll last for weeks or even months um it just depends on you know the the system itself and what's driving
[52:35] the Bloom and uh you know what will allow that bloom to dissipate um what is the concentration
[52:45] yeah uh that's a good question I do not have that at the top of my head a
[52:52] minimum resolution right yeah yeah I I think I've heard this that at least three to four clear pixels in a lake so it is
[53:02] limited by sensor resolution [Music] [Music] oh yeah definitely yeah that is true yes question 10 is cyan is a great project
[53:12] service why did you decide to base it on Sentinel 3 OG data yeah the choice for using the Sentinel 3
[53:22] Ultra data was a combination of things including the right spectral bands bands um that we need for cyanobacteria so not
[53:31] all the satellites have those same bands that go into the the algorithm to project to predict the cyanobacteria
[53:37] um then also the spatial resolution which is 300 meters um it's kind of in the middle so a lot
[53:43] of the satellites are like a full kilometer so the spatial resolution helped us get some more lakes and then
[53:49] because there's two Sentinel three satellites we get near daily uh coverage so that was really good for doing
[53:57] monitoring monitoring great things next question is what is the best way for validating the results or ground
[54:06] truthing for satellite derived data uh that's a super good question um yeah so one thing to keep in mind is
[54:14] that also in situ data is like we call it ground true thing but it also has errors associated with it
[54:21] um so we usually just refer to it as uh validating but um there's no single way that people have come up with a
[54:29] different different different approaches to validating but typically you want to take some measurements in your body of water at
[54:35] the same time that the satellite is over uh going over and then you can compare what you're measuring in the lake with
[54:42] what the satellite is estimating uh we did in the questions document put a link to a couple different
[54:49] uh papers that do validation in a slightly different ways so you can look at different approaches and find out
[54:56] what will work for you question 12 is there a significant difference between the West and East concerning cyanobacteria blooms more
[55:08] prevalent in the west than east or west hours and why um um yeah the wave balloons change from one
[55:17] place to other that's definitely something that's happening I'm not sure exactly what's meant by West and East
[55:22] but we have published a couple of papers that look at changes spatially and temporarily across regions so those
[55:31] papers are are in the document so you can look up how different regions are comparing also we apologize that Dr Schaefer has
[55:42] not been able to connect with audio because of technical difficulty but he is online and answering some of the
[55:48] questions questions yep I'm using his words in many cases question 13 is there any plan to make
[55:57] sign available for the rest the world that's a really great question it's such a nice product it would be nice to
[56:05] provide it globally and there have been some discussions about making the product Global but currently there is
[56:11] there are no set plans for this effort but again uh it is a discussion uh it would require a large investment in
[56:19] resources to produce the product to Quality Control it and then to maintain it as a global product so those are you
[56:28] know the things that people are considering the satellite data itself and the algorithms are available so anyone who's interested could create a
[56:35] cyan product for their own area and that requires nc2 measurements or to do the validation you would
[56:44] um um need the Institute measurements which would definitely be a good step but the satellite data is what goes into the
[56:52] algorithm so you can recreate the product but yeah also validating it would be wise question 14 how do I delete unwanted
[57:01] location points under my locations um oh yeah so if you're working on that web app uh and you drop some points
[57:10] where you don't want them you just go back to the main kind of splash page where the map is you can click where The
[57:15] Unwanted pin is and then it will give you the option to remove the pin yeah I I think if you right click also you you
[57:23] have that option I think yeah okay yeah very quick okay uh question 15 are there any recommendations for how to track herbs
[57:32] in a smaller Lake Reservoir uh uh um yeah well now with our standard product because again we're limited with
[57:41] the ulti the 300 meter but there are people looking into using Sentinel 2 which is another satellite uh with a
[57:49] higher resolution like 10 to 20 meters um um it doesn't have all the bands the wavelengths that we use for the Scion
[57:58] product so this would probably be a more general just chlorophyll a product that might give some indication
[58:05] of water quality next question is does the cyan app exclusively apply to lakes in the reservoirs in the United States or is it
[58:15] available or suitable for other types of water bodies as well additionally both the size of the water body under
[58:22] investigation have any impact on its uh applicability with sign up um yep so the sign up provides
[58:30] measurements in the estuaries and the coastal Waters out to the 35 meter isobath and also in some of the larger
[58:38] Rivers Rivers um and then in terms of the side yeah smaller water bodies that aren't at least three pixels across though that
[58:48] data is going to be a little bit less reliable so it's you know we have the most confidence in some of the larger
[58:55] Lakes Lakes so next question is interesting it says CI cyano has this formula DN or 10 to
[59:04] the DN star the coefficients so is this empirical equation holds true for any region of the world can I use this
[59:12] equation and Sentinel 3B data for any Lake in India also the DL value of Rich of the 21 spectral bands of Sentinel 3ab
[59:22] to be used is there any need for radiometric correction um so that that equation the CI say I
[59:32] know value from the digital numbers that's just for the geotifs because the geotifs use digital numbers um so you're just you know back
[59:40] calculating to the CI cyano value that came from the algorithm um so yeah it should it should apply
[59:48] everywhere everywhere um um if you wanted to create you know CI cyano value for lakes in India for example in theory
[59:59] yeah the CIA cyano algorithm itself you know it's been validated across the U.S regions regions um so if you wanted to use it on a more
[1:00:06] global scale the lakes are a little bit tricky because they're very unique and they can each have their own like Optical
[1:00:13] complexities and that might impact the algorithm performance so again if you're going to apply it to like in India you
[1:00:20] would also want to do some validation to you know understand how well the algorithm Works in a certain certain
[1:00:26] region region um the bands that we use for the equation are the Sentinel bands uh 620 nanometers 665.
[1:00:38] 681 and 709 so those are the four bands that go into the CI cyano um algorithm itself
[1:00:47] uh radiometric correction we use top row s the top of atmosphere correction because it's really tricky to
[1:00:57] do atmospheric correction Inland but you know people have different approaches but but again I guess it would you want to see
[1:01:06] how well it's performing and go from there so to you and so does it include relay correction or no correction at all
[1:01:15] uh just really question 18 what is the need to Define water living reflectance differently from normal reflectance
[1:01:25] can some algorithm for achieving water living reflectance from sensor measure gradients values be shared for any generic sensor
[1:01:37] sure sure um um yeah this might be outside my area of expertise expertise unfortunately we thought about this last
[1:01:46] week also that we need water living reflectance reflectance then just top of atmosphere sometimes because you know it takes
[1:01:57] um atmospheric effect out but in this case like Richard mentioned you can use top of atmosphere uh reflectance but and
[1:02:06] let's do the relay correction because uh doing like Cloud aerosol or other atmospheric correction might just um introduce introduce more errors so
[1:02:16] I guess that's the need depending on you know know what kind of signal you're looking at from surface you may have to do a
[1:02:25] connection and that's what water living reflectance is just that you're removing what you see from atmosphere right
[1:02:35] question 19 at what level of cells or milliliter does it become dangerous um I would recommend for that to look at
[1:02:47] or we would recommend the World Health Organization has recommendations um more recently they have switched to using chlorophyll concentration from
[1:02:57] cell counts but both are still available I believe so I would check out there to see the most recent updates I know also
[1:03:05] in the in the US at least you know different states might have different guidances you know for their
[1:03:12] own regions and what they consider uh you know a concentration that they need to respond to this question is it is known for all
[1:03:24] included Lakes if not how do you account for possible water reflectors um so this is uh me speaking for Blake here
[1:03:39] this isn't something I know that much about but modeled mean and uh Max bathymetry is available through various
[1:03:46] open data sources for the cyan project we typically remove pixels adjacent to land to avoid um bottom reflectance
[1:03:57] and we also apply a quality flag in the processing that limits uh impacts from on bottom reflectance so
[1:04:05] we've tried to do some quality control to control for it this question is how does high turbidity
[1:04:13] affect the occurrence and sensing of cyanobacteria um High turbidity um um in terms of impacting the occurrence I
[1:04:29] know that could be tricky because it's already might block out light so maybe we wouldn't have blooms
[1:04:34] but it also could be an indication of nutrients so um great question probably one more worth exploring uh in
[1:04:43] terms of sensing the cyanobacteria the algorithm in theory is is uh not super sensitive to turbidity but
[1:04:52] when you get to the highest levels of turbidity it definitely can have some impact on algorithm performance
[1:05:01] question 22 how does the hyperspectral data set help in the continuous monitoring of cyan blue yeah that's a great question
[1:05:10] um hyperspectral data is always nice to have but unfortunately there isn't an operational hyperspectral mission that can be used for real-time monitoring
[1:05:21] um however when the hyperspectral data becomes operational available it would be beneficial especially in separating cyanobacteria from other types of of
[1:05:30] algae so we're optimistic for but we're not there yet in terms of having the data in hand
[1:05:37] hmm hmm so question 23 is cyanobacteria concentration enough to comment on water quality um yeah I'm guessing the question is
[1:05:50] yeah I mean cyanobacteria concentration is is one aspect of of water quality so if you have a lot of cyanobacteria
[1:05:59] you know it will tell you potentially that maybe there's toxins or impacts on the water in that way there's obviously
[1:06:05] many other parts of water quality that you wouldn't be covered by looking at uh you know cyanobacteria concentrations alone
[1:06:16] the next question is there any relation between do and bod with cyanobacteria index I think um that's a great question uh we haven't
[1:06:27] looked into this so go for it yeah question 25 is there a way to run a correlation between PSI and cell
[1:06:39] concentration Cox cell content with other water quality parameters to discover associations between them uh yes yes that could definitely be done
[1:06:51] um and there are data actually uh publicly available so you can grab all the signed data you want and if anyone
[1:06:57] has these other water quality parameters for sure take a look and see how I know you can discover those
[1:07:04] associations associations Yeah question 26 can we also monitor cyanobacteria development using Google Earth engine if yes are there available
[1:07:16] codes for such analysis um so yes the Google Earth engine hosts the Sentinel 3 data uh but we we don't
[1:07:24] use that platform as part of science there are codes foreign just that the Google Earth engine does
[1:07:47] host the Sentinel 3 data but we don't use that that platform so question 27 how did you choose to use CIA rather
[1:07:55] than MCI which is Max chlorophyll index or any other indices that's a good question yeah the CI and
[1:08:03] the MCI they're similar approaches the MCI provides a measurement of chlorophyll chlorophyll uh where our Focus was on cyanobacteria
[1:08:12] and not just the chlorophyll so we went with this cyanobacteria index we are considering the MCI for the Sentinel 2
[1:08:20] Data Data um um so we're still making those decisions question does the presence of aquaculture systems in the lake also
[1:08:32] affect the development of cyanobacteria and how do you think the location of the fish cages will affect the special
[1:08:39] concentration of cyanobacteria um that's a great question this is something we haven't looked into but the data's out there so someone could be
[1:08:50] exploring it yeah next question is does the presence of cyanobacteria imply the imminent presence of toxins um no you can have cyanobacteria and not
[1:09:03] have toxins um and in the question document there is a link to a paper to give some more
[1:09:12] information on that the next question is do cyanobacteria have any color how do you identify the concentration
[1:09:24] concentration uh yeah Santa bacteria do you have color they have a lot of different pigments and that creates the coloring of the
[1:09:31] cyanobacteria cyanobacteria um and then the way we identify the concentration is in our algorithm they're uh this is going to get a little
[1:09:44] complicated but yeah the algorithm you know the the wavelengths of light are impacted impacted by the amount of
[1:09:53] um pigments and cyanobacteria in the system so as the curvature changes uh it allows us to estimate
[1:10:03] how much cyanobacteria is present in the system system if you're really curious about the how I would pull up one of those the papers
[1:10:13] and the cyanobacteria and index itself that was posted above you can get into all those details next question is there any relation
[1:10:24] between cyanobacteria and human health in terms of disease incidence um yeah so exposure to cyanobacteria and the related toxins does have human
[1:10:37] health consequences um um you know this includes like uh rashes sometimes impacts on respiratory issues issues um so there there have been other people
[1:10:50] working on this this is beyond my expertise and what we're doing with the the cyan project itself but yeah
[1:10:59] there definitely is that's why people are concerned about science about Syria definitely can cause illness great great thank you uh Dr siegers for answering
[1:11:14] all the questions and also Dr Schaefer we were typing in and we really apologize that because of the technical
[1:11:21] difficulty we could not um use audio for you to answer the questions so sorry about that uh my budget it was great to see
[1:11:37] everyone's interests in cyan and the product product we have a few minutes if you still have any more questions you can enter them in
[1:11:46] the questions box um but we want to thank Dr Blake Shafer and Dr Bridget Seekers for today's webinar and information
[1:11:57] about science it's been very helpful yeah thank you for having us the next question is what is the
[1:12:19] accuracy of identifying cyanobacteria concentration by this method um that's a fantastic question uh data is like far from perfect so there's
[1:12:39] definitely uh um some uncertainty around the uh how much like how accurate it is in terms of the exact concentration
[1:12:52] um again we have some papers that have been published uh it depends on where you are on the scale they tend the
[1:13:01] estimations tend to be um most confidence in like the mid level and then you know we have some
[1:13:11] sensitivity issues on the very low level and sometimes the sensor can it might also depend on which lake you
[1:13:20] are looking at right yes yeah so there's you know it's hard to say exactly the accuracy um
[1:13:30] um and some of our approaches in terms of accuracy have also looked at um how well does it do in terms of just
[1:13:38] saying there is a problem or not a problem or a low medium and high so it wouldn't be the exact concentration but
[1:13:44] it still gives you an indication of what's happening in the system and Blake is adding uh links to some different
[1:13:52] papers that have discussed this so you can get all the different details again there's one more question is there any
[1:14:00] relation between cyanobacteria and seasonality of any region yeah that's a great question um definitely cyanobacteria blooms have
[1:14:10] some seasonality um um so yeah definitely they're sensitive to light levels to nutrients to temperature so there's a lot of different things
[1:14:23] that can drive the blooms and many of those those variables have a seasonality to them I think the case study you showed that
[1:14:35] like January February there was nothing much going on and as you moved to summer months you could see Gloom happening
[1:14:42] in Wisconsin yeah yep definitely so I mean many regions consider like their Bloom season from late spring until uh kind of mid
[1:14:52] fall but it's a very you know regionally specific and one thing that we did realize when looking at the satellite
[1:14:58] data is that I know there are regions that have have winter blooms um you know especially in the south
[1:15:05] um which at first we weren't sure if that was a real signal or not but indeed it is so
[1:15:11] definitely regionally specific the next question is is there any possibility to increase the benefit and World coverage of this program with
[1:15:22] other researchers in the world by institutional collaborations um yeah we're always open to collaboration and definitely one of the
[1:15:34] if it was going to be produced as a global product we would need these researchers from around the world this
[1:15:42] in particular to help with validation efforts efforts so yeah so were these cyanobacteria concentration estimated based on the
[1:15:52] surface concentration or was the average estimate at different depths of the lake considered considered oh that's a great question yeah uh
[1:16:00] primarily when you're using satellite data you're constrained to to the surface of a body of water um
[1:16:10] just because of the way the light interacts with the water um um yeah right oh yeah and Blake's adding that
[1:16:21] the depth of the impact is of the estimate would be related to the concentrations so if you have really
[1:16:31] really high concentrations of cyanobacteria the light's not going to be able to penetrate very much into the
[1:16:37] lake so it's going to be really constrained to the surface if you have clear water then you know the light
[1:16:43] can travel a bit further the next question regarding the quality flag for Len adjacency effects or bottom
[1:16:51] reflectance is that a rule of thumb for estimating a certain number of pixels around the shoreline particularly in
[1:16:57] smaller Lakes like where Centennial 2 would be applied or is there a paper that describes a way to Quality flag for
[1:17:05] bottom reflectance um good question I believe our cyan product moves one pixel uh one in full pixel from the shoreline
[1:17:21] um um for the Sentinel 2 that's a good question I do not know the answer if we'll be moving
[1:17:28] further from Shore or not um and yeah I'm maybe Blake can get a paper in there but yeah I'm I'm not sure of a paper off
[1:17:45] the top of my head oh wait yep Blake just added a paper to the dancer so the next question is what constitutes an
[1:17:55] inland Lake for a coastal state how far England counts I assume Lake like on your training Luciano or Okeechobee in
[1:18:05] Florida will not work are they too brickish shallow what what are the parameters parameters oh yeah that's a great question um so
[1:18:13] for us our Inland is to Coastal 35 meters in depth so we do include Lake Pontchartrain and Lake Okeechobee
[1:18:25] um and the those uh both those Lakes the water quality managers in the area are actively using the cyan products so it
[1:18:34] they it does seem to be performing well in those Lakes so um yeah the data is there
[1:18:43] oh great so is there any way to integrate citizen science to get more data in the global
[1:18:53] South uh yes uh there there would be but we we haven't done it but citizen science you know definitely
[1:19:10] you know people are very close to these Inland bodies of water though can help with validation um but yeah it's not anything that we've
[1:19:19] explored with the sign project yet what what is the difference between chlorophyll a and cyanobacteria in water
[1:19:41] quality um so chlorophyll a is an indication of um algae presence so it's uh chlorophyll is a is a pigment that's found in all
[1:19:56] the photosynthetic uh algae that it might be found in a like cyanobacteria um no we tend to focus on on those
[1:20:07] because many of the freshwater harmful algal blooms that occur are are tied to cyanobacteria so people are trying to
[1:20:16] maybe avoid the toxins for recreational reasons or drinking water criteria and things like that um so that is
[1:20:26] why we have put the focus uh uh on cyanobacteria in particular um I think does that answer the question
[1:20:37] what what pigment s do your uh what pigments does your algorithm look for specifically is phycocyanine one of them
[1:20:48] yeah exactly so the our algorithm is sensitive to chlorophyll and then also Joe phycocine which would be unique to the
[1:20:58] cyanobacteria the question is why are you concerned about cyanobacteria concentration is it that harmful um yeah so again the focus on
[1:21:24] cyanobacteria is different types of cyanobacteria can produce toxins in these toxins can impact drinking water supplies and
[1:21:36] recreational activities and so they have you know big human health and ecosystem consequences along with economic impacts
[1:21:46] um um and so there's a lot of because of those issues you know people are interested in
[1:21:52] monitoring for these events to hopefully reduce reduce exposure and any harm that might be caused caused the next question is does climate change
[1:22:03] or extreme weather events exacerbate the increasing case of CB heads um yeah so climate change in extreme
[1:22:14] weather events yeah um it does seem like warming temperatures well people are expecting those to give cyanobacteria
[1:22:22] uh Competitive Edge but the results uh tend to be a little bit mixed still uh in in terms of extreme weather events
[1:22:32] definitely uh you know rain events and pushing a lot of times when there's big rain events it moves nutrients into the
[1:22:39] system and those have also been linked to cyanobacteria Bloom events so yeah some of these extreme weathers can definitely change
[1:22:50] how a system is functioning and can have impacts on on the haves that we see the next question is since the estimated
[1:22:59] concentration were estimated from these surface values does it imply that the result is underestimated I read that the
[1:23:08] highest concentration of sign of bacteria may occur at depths ranging from two to nine meters um yeah that's a great question we are
[1:23:17] focused on the surface but again this is going to depend on the system so different different different lakes are going to have you
[1:23:25] know different types of blooms and some Lakes are going to have mixing or um um so yeah it's just gonna be a little bit
[1:23:36] system dependent another thing to keep in mind the satellite only passes once a day around midday midday um and the you know timing of the
[1:23:47] overpass also might impact the type of measurements or different aspects of the balloons balloons uh that that we're seeing
[1:24:00] oh yeah um I just see what Blake's adding uh one thing with our cyan product um um we use a maximum detection
[1:24:11] um um because it's a monitoring Pro product so if you look at like our seven day product that pixel value is going to be
[1:24:19] the maximum value for the past seven days days to help ensure that we're not uh or to at least do a better job in terms
[1:24:27] of not underestimating the bloom problem next question is if someone were to use drone multi-spectral imagery to perform
[1:24:39] a similar remote sensing analysis on water quality what type of connections would be necessary oh yeah that's a really great question I
[1:24:49] mean if you had some uh imagery and data you could put that those numbers into the algorithm and get a value in terms
[1:24:57] of what Corrections would be necessary I I I I do not know but it'd be fun to explore if someone
[1:25:06] had that data and the validation data to go with it from the link itself what about carbon budget and carbon
[1:25:15] accounting for cyanobacteria activity yeah that's a great question the impact of lakes on like Global carbon budgets um this is an active debate but
[1:25:27] this is something that we haven't we haven't looked into next question what kind of cloud mask or
[1:25:35] Haze correction does cyan use how have the recent forest fires and Wildfire smoke affected the web availability of
[1:25:43] the product that's a really great question there's a lot of discussion right now about a wildfire smoke
[1:25:51] um the smoke does uh cause a loss of detection so we do lose some data similar to what the clouds do
[1:26:00] um there is there are quality plagues um that look for smoke so we eliminate that data that we think might be
[1:26:09] impacted if you give all lakes the same rating threshold like low medium high or do you have to customize it for different types
[1:26:22] of lakes how about quantifying the cell counts from CI yeah those are uh really great questions um we provide uh the CI value or the CI
[1:26:35] cyano value it itself um so uh you know with our product we don't put Lakes into the low medium high
[1:26:45] categories but um an end user could do that so if you know you know what value seems to be of
[1:26:52] concern you can create those relationships relationships um the same thing with cell counts from CI CI you can take that value if you have your
[1:27:01] cell counts create you know create that relationship and create that estimate but we provide the CI cyano value itself uh we have done
[1:27:12] some work create uh turning CI cyano into a chlorophyll value so there is an example of that and we have a paper on that
[1:27:21] um but cell counts are a little trickier you know the next question was addressed before about the accuracy of
[1:27:30] cyanobacteria concentration in the U.S Lakes well we think once again to our speakers for their time of the information and
[1:27:42] question and answer session that I mean answers that they provided for all the questions so thank you uh Dr British
[1:27:49] Seegers and Dr big Schaefer uh our pleasure yeah great to be here if there are no more questions
[1:28:10] um um we would like to thank you all for um attending this session and also asking such wonderful questions and again again
[1:28:23] and again we thank our speakers for their time their effort and their help with design training so our next session will be on 25th of
[1:28:34] July next Tuesday same time we also want to thank uh entire rset team who has helped coordinate this
[1:28:44] webinar Series so we thank Brock Levin salvin Hudson odoi Natasha Johnson Griffin Jonathan O'Brien Sue Monty and of course my collection
[1:28:58] McCartney McCartney so from all the sessions all the exercises you have received for the class time if you cannot complete those
[1:29:06] you you have time between now and 8th of August to complete everything because the homework will be due then and then
[1:29:13] you can work on these exercises in intervening time
