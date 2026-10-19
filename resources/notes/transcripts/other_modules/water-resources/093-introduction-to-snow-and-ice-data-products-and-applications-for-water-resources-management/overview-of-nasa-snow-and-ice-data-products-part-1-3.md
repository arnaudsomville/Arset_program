# Overview of NASA Snow and Ice Data Products, Part 1/3

`https://www.youtube.com/watch?v=IqiYndJxyrg` · id 9 · 1:44:29 · module 106 — Introduction to Snow and Ice Data Products and Applications for Water Resources Management

[00:02] Hello everyone. Welcome to this applied remote sensing training on introduction to NASA snow and ice data products and applications.
[00:12] Part one today is going to be about overview of NASA snow and ice data products. products. I'm Amita Mehta from ARSET and we have
[00:21] guest instructors today, Mr. Andy Barrett and Mr. Walter Meyer from NSIDC National Snow and Ice Data Center and
[00:29] Mr. Ryan Turer from Airborne Snow Observatory or ASO. We'll start with a brief introduction to ARSET for those of you who are taking
[00:42] ARSET training for the first time. So ARSET provides accessible, relevant, and cost-free training on remote sensing satellites, sensors, methods, and tools
[00:53] and it's part of NASA's capacity building program. ARSET trainings include a variety of applications of satellite data and are
[01:04] tailored to audiences with a variety of experience levels. The thematic areas on which ARSET trainings are focused on are
[01:12] listed here, agriculture, climate and resilience, disasters, ecological conservation, health and air quality, water resources, and wildland fires.
[01:25] ARSET trainings are mostly online, but there are also in-person trainings. They're live and instructor-led or there are asynchronous and self-paced
[01:36] trainings available from ARSET website that can be taken in your own time. They're cost-free as I mentioned
[01:44] earlier. earlier. Most trainings are bilingual in the sense that the material is always available in Spanish. Sometimes the trainings are conducted in
[01:53] Spanish as well and sometimes there are multilingual options such uh French. Uh we only use open-source software and
[02:01] data and accommodate differing levels of expertise from introductory all the way to advanced level of background into
[02:08] remote sensing. We'll start with a brief overview of this training. Uh it's introduction to NASA's snow and ice data products and
[02:18] applications. So, why do we want to learn about snow and ice products? And because frozen water in the Earth
[02:27] system is quite important. Um Um frozen water on and below the Earth's surface includes snow, glaciers, ice
[02:36] sheets, sea ice, and permafrost. Approximately 75% of the Earth's total freshwaters is stored in glaciers, ice sheets, and permafrost.
[02:47] Snow and ice play a crucial role in Earth's water cycles, such as snowmelt serves as an important source of water
[02:55] in many regions, and interannual variations in snowpack have a substantial impact on the regional water availability and can lead to floods and
[03:05] droughts. For example, here is an animation of snowpack in the Sierra Nevada Nevada uh from Terra satellite and MODIS
[03:13] sensor. You can see the snowpack here on the mountain. So, snowmelt from um um over this region uh feeds many rivers
[03:25] and that results in other floods or droughts if um because of the interannual variability, and you can
[03:33] clearly see how uh uh the snowpack is changing over time here. here. Snow and ice also affect albedo, that is
[03:43] a fraction of solar radiation reflected back to space, and that affects energy balance of the entire system and it can
[03:53] govern temperature of the earth system by that. So, because of that, it's very important to study snow and ice product over the earth.
[04:06] With that, overall training learning objectives are that by the end of this training, participants will be able to
[04:14] recognize the importance and applications of snow data and snow water equivalent or SWE in monitoring water availability in snow-fed rivers.
[04:25] Identify NASA snow and ice data products and their applications for water resource management and disaster monitoring. monitoring. Access and visualize snow and ice data
[04:36] products using NASA web tools for water water supply prediction. And compare how snow data across platforms are utilized
[04:46] in water resources management and monitoring snow-fed river flow. There's a prerequisite fundamentals of remote sensing and link is provided
[04:57] here. I had defines many of the concepts that will be used in this training. There will be three parts to this
[05:06] training. training. Today will be on overview of NASA snow and data products. Next Next session will be on access and analysis
[05:15] and visualization of NASA snow and ice data products. And the final session will be monitoring mountain snowpack and
[05:24] prediction of water availability in the western US for water resources and disaster applications, so that there will be a couple of case studies shown
[05:32] here. here. There will be one homework at the end of this training. It will open on August
[05:39] 7th at the end of the training and it is due on August 21st. And the homework will be posted on our website.
[05:48] A certificate of completion will be awarded to those who attend all live sessions and complete the homework
[05:54] assignment before the given due date. We'll start with today's session, overview of NASA snow and ice data
[06:03] products. products. And objectives for today are that by the end of this session, you will recognize the impacts of snow and ice parameters
[06:13] to water resources applications, identify NASA snow and ice data products and their applications for water resource management and disaster
[06:23] monitoring, monitoring, identify snow and ice data parameters and their characteristics, and explore examples of applications of snow and ice data for water resource
[06:34] management. management. So, outline for today is that we will start with snow and ice geophysical parameters for water resources
[06:44] applications. Um then we'll talk about NASA's remote sensing based snow data products, and we'll see an example of snow data
[06:53] application uh evaluating snow variability through a climatological analysis to support ecological monitoring in Northeast Alaska. Just a note about asking questions. We
[07:09] will have a question and answer session at the end of this um part, and so please put your questions
[07:16] in the question box, and we will address them at the end of the webinar. Feel free to enter your questions uh as
[07:24] we go, and we will try to get to all the questions during the question and answer session.
[07:30] session. The remainder of the questions will be answered in the question and answer document, which will be posted on the
[07:35] training website about a week after the training. training. So, next I want to introduce our instructors for today.
[07:43] Andrew Barrett and Walt Meier from NSIDC and we have Ryan Turer from Airborne Snow Observatory. So Andrew Barrett is a senior associate
[07:57] scientist and he is his research focuses on Arctic climate system, in particular on sea ice and terrestrial snow cover.
[08:07] He has an interest in applying machine learning methods to study these components of the cryosphere. He has also studied mid-latitude
[08:16] glaciers and their role in river basins using model output, satellite imagery and surface meteorological observations for this research.
[08:27] His specialties are in sea ice, snow cover dynamics, glacier hydrology, scientific software development and open science. science. Our next speaker will be Walt Meier,
[08:39] also from NSIDC. He is a senior research scientist at NSIDC and his primary role is supporting the NASA Snow and Ice
[08:49] Distributed Active Archive Center or DAC at NSIDC. In the role, he provides scientific support to all NASA products at the
[09:01] NSIDC DAC and his research focuses on the sea ice remote sensing particularly using passive microwave data and tracking Arctic climate change.
[09:15] He is the principal investigator for the NASA funded Arctic Sea Ice News and Analysis and is a co-investigator on
[09:26] other NASA, NOAA and NSF sea ice related projects at NSIDC. His specialties are in sea ice, passive
[09:34] microwave remote sensing, climate data records of sea ice, Arctic climate change and in general. Ryan Ture uh graduated from University of North
[09:46] Carolina, Chapel Hill in computer and information sciences, and he has been working with uh Airborne Snow Observatory as a senior software
[09:56] engineer. engineer. Uh his interests are in uh collecting and analyzing data and uh finding trends and patterns within data to help guide a
[10:07] decision-making. decision-making. So, that's what he has been doing with um um ASO, and today he's going to talk about
[10:14] uh snow data applications in northern Alaska. Uh it's based on a NASA develop uh project. So, I'm going to hand it to Andrew
[10:25] first. Thank you. >> Okay, thank you, Amita, for the introduction. introduction. Um Um over the next 10 minutes, I'm going to
[10:35] set the scene for snow and the ice uh as part of the hydrological cycle and as water resources, and introduce you to
[10:45] some geophysical parameters for water resources applications that we can observe using satellite information and other remote sensing techniques.
[10:55] So, what I'm showing here on the screen are two diagrams. On the left is a partitioning of water resources uh
[11:06] on the globe, um and on the right um is a cartoon of the water cycle. And if you see in the left-hand diagram,
[11:16] uh as you would expect for a planet that is 70% ocean, uh only 2.5% of the Earth's water
[11:24] resources are actually fresh water. And of that, 70% 70% is locked up in glaciers and ice caps.
[11:33] Most of that is in the Antarctic and Greenland ice sheets. Um and the remaining uh uh amount, which is very small, only about
[11:44] uh 40,000 gigatons, is uh locked up in mountain glaciers um at lower latitudes. Um We also have snow that, as you can see
[11:57] in the water cycle diagram, falls uh from precipitation in high latitude and high mountain regions. And that's about
[12:04] 3,000 gigatons at maximum. Generally, for the northern hemisphere, that's that's in March. So, there's a large amount of water
[12:14] um that we have on Earth is is both snow and and ice and is important as a water
[12:21] resource. And I want to um demonstrate that in the next two slides. So, So, snow and ice uh
[12:29] really natural storage reservoirs. When snow accumulates at high latitudes or high elevations, water can be stored for days to months.
[12:38] Um glaciers that form as a result of snow accumulating over many years, um store water for hundreds to tens of
[12:47] thousands of years. Tens of thousands of years being uh the natural cycle of ice ages. ages. And so, meltwater from snow and ice is
[12:56] an important contribution to to runoff, um especially because of this storage in basins that have less precipitation in
[13:05] spring and summer, which is the growing season. So, for for agriculture, it's important. What I'm showing here on the
[13:11] right is a diagram from a paper published by Mark Meier in 1969. Uh long time ago, but uh it it's uh it
[13:20] sets the scene really well. It shows um the precipitation distribution and uh seasonal runoff uh for three basins in
[13:29] the Northwest United States, a low-elevation, a mountainous snow-covered basin with no glaciers, and a glacierized basin, so
[13:38] basin that has both snow and glaciers. And in the top diagram, you can see that the runoff hydrograph dem in
[13:47] shown by the cross-hatching, um pretty much follows the seasonal distribution of precipitation. In the mountainous basin, uh the peak runoff is is delayed until
[14:00] until spring, um where which is later than than the peak of uh precipitation in winter. In the glacierized basin,
[14:08] that runoff is delayed even further until the summer. So, you can see how much of an impact snow and ice in in a
[14:15] basin has on the timing of of runoff. And and that's important, obviously, to agriculture and and other water users.
[14:24] And it saves us having to have reservoirs, reservoirs, man-made reservoirs, um in in uh in those basins.
[14:31] So, we've seen how it affects timing, but uh how much water does does in these basins does uh snow and ice provide?
[14:40] What I'm showing here is a diagram based on some work done at NSIDC led by Richard Armstrong and funded by USAID,
[14:48] um which shows the contribution of snowmelt and ice melt to runoff for five basins in high mountain Asia.
[14:57] Um Um and you can see here that that snow on land, um and and snow and ice
[15:05] uh make up a significant, if not the largest, portion of of runoff contributions in all of these basins. In the Ganges, the
[15:13] summer monsoon uh provides a lot of rainfall, and so snowmelt is is not so important, but still kind of getting close to almost
[15:23] 50% of the runoff. You should also note that the glaciers in this case don't provide that much
[15:30] runoff, especially in these large basins. It's sometimes important very close to glaciers, um but but when you get to the
[15:38] continental scale, um the contribution of glacier ice to runoff is is not as important as snow. If we look elsewhere in in the
[15:48] Earth, um the Colorado River, for example, in in the western United States, 70% of that runoff is is provided by snowmelt. So,
[15:59] snow and to some extent ice in in some cases is really important as a as a water resource and as a contribution to
[16:06] runoff. runoff. So, So, the question as water resource engineers and and hydrologists we're asking is how much snow is there in a basin, and I'm
[16:15] going to focus on snow, uh more than I am ice here. Um So, the question is what mass of snow do we have in a basin
[16:24] or what volume of snow do we have in a basin? And often we express that as that
[16:30] volume of snow in a basin as the equivalent volume of water, which we call snow water equivalent. And
[16:36] you can think of that as how much water do we get if we were to melt down the snow, right? So, we're not
[16:45] thinking of volume of snow, we're thinking of volume of water we get from that snow. We might also be interested
[16:51] in snow thickness or snow depth, and I'm going to use thickness and depth interchangeably here. Um Um And so, when we want to answer those
[17:01] kind of questions at a point, we can do that relatively easy, although it's sometimes physically demanding, um
[17:08] by digging a snow pit and measuring the thickness and the density of that snow and coming up with a mass or or a volume
[17:15] based on that. And you can see someone doing that here um as part of the NASA um SnowEx campaign um in a snow pit on
[17:24] the Grand Mesa in Colorado. You can see they've got used a density cutter to cut into the snow pack and and and measure
[17:32] density and measuring the thickness of snow there as well. Or as you see in the bottom photograph, um you can take a
[17:40] snow core and you can either weigh that or you can take the snow and melt that down. And these two hydrologists here
[17:47] are using a what is called a Mount Rose or Federal snow sampler, which is basically a long pole that cuts a core
[17:54] out of the snow and can then be used to to measure snow mass or volume. So we can do that at a point, but
[18:02] finding out how much snow we have at the basin scale and at the continental scale is a little more difficult. And that's
[18:08] really where remote sensing comes in. And so the parameters that we can get at from using remote sensing um
[18:17] uh uh pretty much the same as I introduced, mass, volume, but also area. So we can get at mass
[18:25] um directly at at a very coarse continental scale by using gravimetry with using satellites such as GRACE,
[18:32] which measure the Earth's gravitational field. And we have to use a lot of ancillary information and make some
[18:39] assumptions about how groundwater is changing, how runoff changing, how mass is changing within that basin other than
[18:45] the snow. But we can get at least an estimate of the mass of snow in a basin.
[18:51] We can also measure snow covered area as Walt Myer will explain. Um Um snow is very bright, and so we can see
[18:59] that quite well from space assuming there are no clouds. And we can use that snow covered area in conjunction with
[19:05] modeling to estimate snowmelt runoff. We can use it as input to to models. And we can also derive empirical depletion
[19:12] curves which relate snow covered area to the volume of snow in a basin. We can also measure snow thickness and
[19:19] depth and extract volume from that by using lidar either airborne or satellite based lidar which allows us to measure
[19:30] the distance from the platform the satellite or airborne platform to the snow surface and then if we know whether
[19:37] land surface is beneath that beneath that we can get thickness and but in order to get volume we need
[19:43] to have some information about snow density. density. So again we have to make an assumption we have to use a model
[19:50] and and we can do that we have models of density and and we can also go out in
[19:54] the field and measure density. And we can also get at snow water equivalent directly retrieve from passive microwave
[20:02] brightness temperatures but again that has some complications. The signal is influenced by many factors snow crystal size and shape
[20:12] snow pack temperature density and other factors factors which which means we have to try and model or
[20:20] understand what those influences are in order to extract snow water equivalent. There are other snow properties we can
[20:28] measure that are useful for modeling such as albedo grain size and impurities and and we can get all of those from remote
[20:36] sensing and combine them with modeling and and other information to come up with good estimates of snow.
[20:44] So with that I'll finish and let Walt tell you about the techniques and platforms and the data sets that we have
[20:51] available to to get at some of these parameters. >> Hey thanks for the introduction. I'm going to be talking about NASA's
[21:06] remote sensing based snow data products, uh, particularly those that we have at the National Snow and Ice Data Center,
[21:14] um, uh, distributed active archive center or DAC, that's part of the NASA DACs. DACs. So, first, uh, I'm going to give a
[21:23] little bit of overview of the type of instruments that we use for snow remote sensing, satellite instruments in
[21:29] particular. particular. Uh, we can use passive microwave emission, passive microwave instruments. This is emission from the Earth, uh,
[21:38] that is detected by satellite sensors or other sensors. And the emission that comes from the bare ground that would go to the sensor,
[21:46] that is scattered or attenuated by the snow cover. So, it changes, the snow cover changes the emission received by
[21:52] the sensor, and we can detect that change. change. Visible, Visible, uh, wavelengths, uh, this one's fairly obvious. Snow is white, so the
[22:02] reflectance or the albedo, uh, that is very high for snow, can be used to identify snow cover versus bare ground,
[22:10] as well as, uh, infrared wavelengths, and I'll talk more about that in a little bit. LIDAR or laser altimeters measure the
[22:20] distance from the sensor to the surface, and so, uh, when the reflection of the altimeter bounces off the snow surface, it's
[22:29] higher, it's a higher level than the bare ground, and we can measure that height difference, uh, and measure the snow depth.
[22:36] Radar or synthetic aperture radar, SAR, is an active microwave sensor, uh, and it's similar to the passive
[22:44] microwave, behaves similarly with snow cover. The snow cover, uh, attenuates and changes the backscatter that you get
[22:50] from the sensor to the, uh, to the to the sensor. And, uh, it's active microwave though, so it's a little more,
[22:58] uh, it's powered from the sensor. I'm going to focus here on the passive microwave in particular the visible and
[23:06] infrared wavelengths because those are what are most commonly used for snow remote sensing by satellite particularly and those are
[23:16] the products that we have at the NSIDC DAC. DAC. So for passive microwave emission as I mentioned detecting the energy in the
[23:26] microwave frequency emitted by an object emitted by the surface of the earth. And that emitted energy is dependent on the
[23:33] frequency of the microwave that you use, the temperature of the object and then the properties of the object
[23:39] particularly the liquid content and water content in the phase of the water kind of whether it's frozen or liquid.
[23:48] And brightness temperature is the parameter that is retrieved by passive microwave sensors. It's it is a temperature in terms of units Kelvin but
[23:58] what it really is is it's measuring the emission and the emitted energy from the surface. It's basically scaled by to
[24:05] temperature temperature it's the temperature that would be that it would admit at as a perfect black body.
[24:14] And so it's can be related by a simple equation brightness temperature is a factor of the emissivity which is the property of
[24:22] the emitting object in the microwave range and the physical temperature. And so it's basically scaled by the
[24:28] emissivity again which is property of the of the sensors. For surface remote sensing the microwave frequencies that are most
[24:37] useful range from about 1 GHz to about 90 GHz. Those are frequencies where there's not very much atmospheric emission so the
[24:45] surface can be seen through the clouds which is a big advantage for microwave over for example visible sensors. And
[24:54] the spatial resolution does vary with frequency. Higher frequencies mean higher resolution, but higher frequencies also means more
[25:03] atmospheric atmospheric sensitivity, more atmospheric emission, which makes it more challenging, and also less penetration through snow, which makes it more challenging as well.
[25:15] So, what's been used typically are 18 and 19 GHz and 36 and 37 GHz have been found to be most useful for
[25:25] snow. The other frequencies can also be helpful, but the basic algorithms are derived for the 18 and 19 GHz
[25:33] frequencies and the 36 and 37 GHz frequencies. frequencies. So, So, this The instruments that we have data
[25:42] for and that we've used in in researchers have used for retrieving snow properties, two sets of sensors
[25:50] primarily. There is the US Department of Defense Meteorological Satellite Program, DMSP, which launched a couple series of sensors, the Special Sensor
[26:00] Microwave Imager, SSMI, which operated from 1987 to 2008, and then a successor to that with some overlap was the Special Sensor Microwave
[26:13] Imager and Sounder, SSMI S. These are pretty much the same sensors as far as snow remote sensing is concerned,
[26:20] essentially the same resolution, the same frequencies. The sounder adds some atmospheric sounding channels and frequencies that are not
[26:29] used for the snow cover. SSMIS began operating in 2003 and is still operating, but actually is on track to end operations at the end of
[26:41] July actually of 2025. And so, that will be going away. The other sensor, which is a little more
[26:51] advanced, the advanced microwave scanning radiometer. They have two of those that have been operating. One is AMSR-E,
[26:58] the Earth Observation Observing System. It's operated from 2002 to 2011. That was a joint NASA and JAXA, which is
[27:07] the Japanese Aerospace Exploration Agency, uh operated the launch and operated those that sensor, AMSR-E. And then that was succeeded by a JAXA
[27:18] sensor. NASA was not involved with the launch and operation of AMSR-2, um although NASA has has derived
[27:26] products from those as a continuity with AMSR-E. And that is still operating. It was launched in 2012. And then there is
[27:35] AMSR-3, AMSR-3, also a JAXA sensor, which was just launched in uh on June 28th, 2025. We have, as far as snow products,
[27:46] specifically, we our main snow products are from the AMSRs AMSR-E and AMSR-2 sensors, which have been put together as a unified AMSR
[27:56] product suite or AMSR-U. And that is what's archived at the NSIDC DAC. Now, in terms of passive microwave snow
[28:05] retrieval, retrieval, uh as I mentioned, essentially what we're measuring is emission from the from the surface. It's emission from the
[28:14] ground, and then it's scattered by the overlying or attenuated by the overlying snow cover. And the amount of energy
[28:20] that gets through the snow up to the sensor is dependent on the amount of the snow and the characteristics of the
[28:26] snow, as well as the frequency that you're measuring uh with the microwave frequency that you're measuring with. So, basically,
[28:34] higher scattering means you get less emission to the sensor. That means there's more snow. Um and as I mentioned, it it varies by
[28:41] frequency as well. So, you can use that the difference in how much energy is gets to the sensor
[28:49] from different frequencies and that can give us a sense of the amount of snow cover. cover. And
[28:56] And in addition to the depth, it's dependent on other properties of snow like the grain size and the wetness of the snow,
[29:02] how much moisture, how much liquid water there is in the snow. Dry snow scatters less, you get more of a signal straight
[29:09] from the ground up to the sensor than wet snow. Wet snow attenuates it more. Um two parameters that are of interest
[29:17] for for geophysical remote sensing that are retrievable by passive microwave sensors is snow depth. That's fairly intuitive,
[29:26] the total thickness of the snow cover on the ground. And then snow water equivalent and that may be less familiar
[29:34] to people, but that's basically what happens if you took take a certain volume of snow and you melt it down
[29:41] into liquid. How much liquid do you get? So it's it gets into the the the density of the snow cover and the wetness of the
[29:48] snow cover. And in in reality, the SWE as we call it, SWE, snow water equivalent, is simply the snow depth
[29:56] times the the snow density. So it's just a scale between those dependent on the the snow density. And so those are two
[30:04] products, two parameters that can be retrieved by passive microwave. Um and you can convert between those if you
[30:10] know the snow density, the snow depth and the and the SWE. So So uh there are a lot of limitations with
[30:16] passive microwave snow products. Um a particular one is the low spatial resolution. The emission from the Earth's surface is quite low energy, so
[30:27] you have to for a given satellite antenna size, you need to get a fairly large ground area that you are sensing
[30:34] from. So 25 km does not give you a lot of detail, a lot of fine detail. And and
[30:42] so that that's a definite limit of that. Um you get lower performance in heavily forested areas cuz the forested areas
[30:51] all also scatter emission and attenuate the emission. So you you uh lose uh energy in forested areas. And then
[31:00] mountainous regions as well. Um and some of that is related to the low spatial resolution. You've got high uh
[31:08] terrain uh and high variability in the terrain and at 25 km you really miss that. So it's really hard to interpret
[31:17] uh and get good uh retrievals from passive microwave in mountainous regions. regions. Um Um and you know there have been some
[31:25] advancements, uh particularly in terms of accounting for the forested areas. Um you can uh bring in ancillary data that
[31:32] tells you what type of forest and how how forested it is and do corrections to that. But still there's uncertainties.
[31:39] There's also lake coverage effects uh that and that can be important in places like Canada where there is a lot of lake
[31:45] coverage. And then grain size and density uh also are uncertainties that we make assumptions about a lot of times for those um and
[31:56] but we don't know how well those assumptions are necessarily. Uh and shallow snow tends to get missed.
[32:01] Basically, the shallow snow doesn't attenuate the sensor enough. It's not sensitive enough to tell um that there's
[32:08] snow cover there in the passive microwave. And shallow snow can be important in terms of uh you know the
[32:14] reflectance and how much energy gets absorbed in in the water resources. So the AMSR snow products that we have
[32:23] at the NSIDC DAAC, um there are three products. There's a daily product. Um so this is updated every day and that does
[32:33] leave gaps because the satellite coverage is not complete globally. Um particularly at lower latitudes, um you will not get data every day. So, a
[32:43] five-day composite product goes in and you get complete uh data um but over a five-day interval. And then a monthly
[32:52] average uh as a convenience for like a climatology climatology um is also produced. And again, these span from 2002
[33:02] and will continue uh uh through this year, but they are uh going to be ending in September of 2025
[33:10] um coming up. So, the the NASA products will will not continue forward um although the AMSR-2 sensor is still
[33:17] operating and um and then they will continue on with AMSR-3 from JAXA. Um but those will be products that will
[33:25] only be available from from JAXA. Uh this is just an example of what you get out of uh like AMSR-2. This is the
[33:34] five-day average. Again, this fills in all the gaps, which is nice. And you can get the snow water equivalent. Um this
[33:41] is from March, so this is kind of a late winter winter uh field. There's quite a bit of snow
[33:46] cover, um particularly at the high latitudes. Um and then further down in Asia into the the Tibetan Plateau
[33:53] region. Um some in Europe and then into the uh lower southern Canada and and the uh in the United States Continental
[34:02] United States. Um so now, moving on to visible and near infrared wavelengths. Um Um visible and near infrared, you have to
[34:13] look for atmospheric windows, areas where the where the uh the energy gets through the atmosphere to the sensor.
[34:22] Um Um and so, uh there are certain regions in the visible as well as the near infrared and
[34:29] shortwave infrared there where um we can get surface um retrievals through the atmosphere atmosphere except for through clouds. And
[34:42] moving on, the thing with snow cover in the visible is that it's a very high reflectance and
[34:50] it's an atmospheric window that it that transmits through. So, this figure explain initially here the green line with the filled area the
[35:00] in the rainbow of colors in the visible and in the pink and the out in the infrared
[35:05] infrared that is the transmittance through the atmosphere. So, the high levels is near 100% that means that's an
[35:14] atmospheric window where most of the energy gets through where it's low where it's mostly white those that's where it's where the energy
[35:22] tends to be blocked and you don't get energy from the surface through the atmosphere. atmosphere. And then the solid thick lines are the
[35:31] reflectance of the surfaces there how much energy that how much energy in the visible or infrared range gets from the
[35:41] sun gets reflected back and up to potentially up to the sensor. And so snow you can see is in the visible range
[35:52] that that's an atmospheric window so that's where we get we can see the visible light we can see the sunlight.
[35:57] Um but snow is very high reflectance there as you can see it's near 100% it's generally around 90% for for white for
[36:06] for for pure snow and it's also pretty equal across that entire visible range and that's why snow is white it it reflects
[36:16] all visible wavelengths pretty much equally and and so that's why you see the white snow. Um much more reflective than for example
[36:26] the bare ground like rock or vegetation or liquid water like lakes or rivers. Um and so that you can really see it in the
[36:35] visible range quite well. But the other feature of snow is you get into the infrared range, the near infrared and
[36:43] shortwave infrared, um the reflectance drops quite substantially um and gets quite low as you get out towards about 1
[36:52] and 1/2 microns. You can see and so in the near infrared it reflects very little. And so there's this big contrast
[37:01] between the visible reflectance of snow and the infrared in the the near infrared and shortwave infrared range. And we can use that to
[37:11] detect the snow cover. Um before we get into that more, um the multispectral sensors that are useful for snow retrievals that cover
[37:20] the visible out through the near infrared and shortwave infrared, there's been three main families of sensors. The original going back to 1979
[37:32] is AVHRR, Advanced Very High Resolution Radiometer on NOAA polar orbiting satellites. It's also continuing on European MetOp satellites as well. But
[37:44] that's an older technology even though it says advanced very high resolution. And that's really been replaced by
[37:51] MODIS, the Moderate Resolution Imaging Spectroradiometer, Spectroradiometer, which began in 1999, still continuing and that was on the
[38:00] NASA Earth Observing System satellites Terra and Aqua. And again, those are both providing data, although MODIS is due to sunset in
[38:09] the coming year or so in terms of the data production and sensing because it's being replaced by
[38:18] VIIRS, the Visible Infrared Imaging Radiometer Imaging Radiometer Suite. There's now three VIIRS flying, one on the MPP,
[38:28] uh that's the M pose participation project, um a preparation project, and then the NOAA 20 and NOAA 21 um satellites. And those
[38:37] are all still operating uh and and collecting data. And VIIRS is quite similar to MODIS. Um I I'll show you here the um the
[38:46] different channels uh that we have AVHRR, MODIS, and VIIRS. AVHRR is is only five channels, and um so it's
[38:57] pretty limited in terms of what you could do, although it it's potentially that you can you can get snow cover from
[39:04] it. But really the main snow product from these multi-spectral sensors come from MODIS and VIIRS. MODIS has 36
[39:12] channels um spanning from the red in the visible all the way out to a thermal IR. VIIRS essentially covers those same
[39:19] channels with slightly different frequencies frequencies uh and wavelengths uh that collect data. Um in terms of the resolution,
[39:31] uh MODIS and VIIRS are cross-track scanners. Um this is a little bit different than uh the microwave. I
[39:38] didn't mention earlier, but the microwave are conical scanning, scanning basically in a circle. So the resolution is consistent across the entire scan for
[39:50] microwave. But for multi-spectral sensors, they're typically cross-track sensors, which means um they scan back and forth kind of horizontally as the
[40:00] sensor is moving. Um and that means that the angle that you're it's sensing from changes. Um and that also means that
[40:09] you're collecting data from a larger area, which means the sensor's instantaneous field of view or footprint change, and that means your your
[40:16] resolution changes. So, you get the highest resolution at nadir, directly below the sensor, and as you go out and
[40:23] scan out to the side from the sensor, that resolution gets lower. Um And so, you end up
[40:32] when you collect these data, when these data are collected, you actually start overlapping footprints as you get further out along this the scan
[40:40] line, and you get what's called a bowtie effect, effect, and kind of get overlap and and between
[40:46] the footprints and and kind of they're kind of stepping on each other in a sense. sense. And you know, so you get if you look at
[40:53] just the raw data, you get this kind of overlapping, and you get these black bars in the raw data. But, the onboard
[41:03] sensor processing takes care of that. They're removed, and so you get kind of a nice field of view, but the resolution
[41:10] is lower as you get out away from from nadir. So, nadir's on the left here, right under
[41:17] the sensor, and this is showing with just one side of the scan as you get out farther.
[41:24] All right. So, getting back going back to this figure here showing the the reflectance and the atmospheric
[41:31] transmission. transmission. Couple of the wavelengths that are on VIIRS, VIIRS, and MODIS again has similar wavelengths, the 0.64, kind of in the red
[41:45] area, you have um um the snow has very high reflectance there, and then going out to 1.6
[41:53] microns, which is out towards the the shortwave infrared, you can see there it's very low. So, you've got high reflectance in the
[42:01] visible, very low reflectance in the infrared, and so that contrast gives us a really nice way to to pick out the
[42:10] snow cover very easily. And so, what's been developed a long time ago actually is the normalized difference snow index
[42:20] or NDSI. So, this is the NDSI equation for VIIRS. Again, it's similar equation for MODIS. Just slightly different wavelengths are used.
[42:31] And it's just the difference between the visible and the shortwave infrared. Just the the difference in the
[42:36] reflectance and then normalized by the sum of those, too. So, you kind of eliminate other factors and you get a
[42:44] unitless number there. And essentially, you know, visible high for snow is high reflectance, shortwave is low. For vegetation and bare ground,
[42:56] the the opposite tends to be true. The shortwave infrared is more reflective than the visible. And so, if it's less
[43:04] than zero, if the NDSI is less than zero, we know it's not snow. Um if it's greater than zero, then it it
[43:13] definitely could be snow. But low values that are greater than zero may not be snow. Um Um it's but if we get to
[43:22] higher values like greater than 0.4, um then it becomes very likely snow. And so, we can use that as a as a threshold.
[43:31] Um and that's commonly used as a threshold. Um so, you know, bottom line, if NDSI is greater than zero,
[43:39] uh it's snow always has an NDSI greater than zero. But if it's greater than zero, we don't know for sure it's snow
[43:44] unless it gets to a a certain point, uh a certain magnitude. So, uh I'll just go go through a quick
[43:53] example here. Um this was a a snowstorm in the Colorado region near Denver. Um this is near where uh National Snow
[44:01] and Ice Data Center is. And uh March 25th of 2013, this is a true color image from NASA Worldview. So, this takes
[44:09] three channels and and from the R from the red, green, and blue composites them together to get something that looks
[44:16] like we normally see with a camera with our eyes. And you can see here the white snow cover
[44:23] covering much of the plains of Colorado and then into the mountains. Denver there is is annotated. You can
[44:31] see it's not quite as white in Denver due to all the the the the the uh infrastructure and buildings and streets
[44:39] and so forth. And so, it it gets you lose some of the snow cover there and the whiteness.
[44:48] Um so, if we look at the reflected band, this is from MODIS. This is at 0.55 microns, but similar to the
[44:56] the VIIRS 0.6 that I talked about. Uh and this is a scaled reflectance. So, it's just basically saying high
[45:02] reflectance versus low reflectance. Um that scaled to 0 to 1, um but giving you the relative reflectance. And you can see the very
[45:11] bright red that's very high reflectance east of Denver to the right, and then also in areas of the mountains. But uh
[45:20] you see in Denver, there's kind of a bit of a hole there due to the fact that the
[45:25] um the city and the the streets and so forth, the infrastructure there. Um so, very high in the visible range in in the
[45:32] red range. And then here um very low in the shortwave infrared. This is the 1.6 microns. And again, you can see quite
[45:42] low values, much lower in the blue low end of the scale there. So, you put those together um into the
[45:50] NDSI, NDSI, and you get um this is again scaled um 0 to 100 the NDSI. Um generally goes
[45:59] between 0 and 1, but the scaling here is given as 0 to 100, so it's just a
[46:03] difference in scaling. Um but again, you get quite high values um east of Denver in the orange and
[46:11] reddish colors there. Um again, Denver doesn't really get retrievals there um because of the the city. And then
[46:19] there's also other, you know, blank spots due to clouds um and where where it's not getting any
[46:25] data from that. But again, this shows um you know, that you get these high NDSI values um from the snow cover.
[46:34] Um and then this is a another this is from WorldView that's the same just showing a different This is now scaled 0
[46:40] to 1. And again, you know, pretty vast areas areas uh of uh high NDSI values that are that are snow-covered.
[46:49] Um except again for the the this the area of Denver um due to the infrastructure. infrastructure. So,
[46:57] So, um um limits of these snow retrievals from the visible and infrared sensors. Um a big one is clouds. Um you don't get data
[47:05] from under clouds. Uh the the clouds reflect um to you know, the the shortwave uh invisible the visible shortwave and
[47:13] infrared uh radiation and so you don't see the surface. Another thing with clouds is not only that you don't get
[47:20] data, but clouds are white, um snow is white, and so it can be hard to distinguish clouds from snow even with
[47:29] the visible eye. And so, um there needs to be uh uh you know, a lot of effort to kind of
[47:36] clear out the clouds and make sure you're not getting clouds in these products instead of the snow. So,
[47:41] there's a lot of tests that are done to combine several different channels to create cloud masks um and mask the clouds particularly uh
[47:49] and specifically for the snow cover. And then there are cloud gap products that fill in using composites
[47:55] uh and other other methods to kind of fill in where there are clouds you can get complete coverage. Um, but
[48:02] fundamentally, where there's clouds at a given time, you cannot get data. Um, nighttime, uh, you know, infrared you might get uh,
[48:12] some retrievals from that. Um, but generally for visible, uh, and any kind of shortwave without the sun shining,
[48:20] you're not going to see um, you're not going to get any retrieval. So, these are the the snow products are pretty
[48:26] much daytime only. Um, vegetation can alter the reflectance, so that's another thing. Uh, you know, heavily forested
[48:33] areas, if you are familiar, you know, sometimes those get snow covered, but maybe not. Um, and then the the
[48:39] vegetation will make it look darker than it than it is in the visible range, for example. example. Um, and then cities, populated areas,
[48:48] low reflectance as I showed for Denver. There's also the issue, especially in mountains, shadows and oblique incident
[48:56] angles, um, you don't get the reflectance uh, retrieved because of those because you're not getting that reflection in the shadow areas, and so
[49:03] you won't get data from those. So, uh, in another example, more recently, this is March 20 March 15th of
[49:10] this of 2025. This is a a full North America example. This is the true color composite. Um,
[49:19] and this is the uh, the NDSI from VIIRS. Um, you can see it gets, you know, there's a lot of snow cover, but
[49:27] there are patches there that um, you know, look like they probably should be snow covered, but it's not being
[49:33] retrieved. And uh, that's due likely to clouds or the cloud masking. And the cloud masking is pretty conservative cuz
[49:41] you don't want to get clouds um, where you think there might be snow. So, they it tends to air towards detecting more
[49:49] clouds than not. So, it may, you know, some areas that may actually be clear uh, get masked as clouds just because of
[49:56] the the way that these tests are done to make sure or try to make sure that you
[50:00] don't get false snow due to cloud cover. Um and the one thing with the the AMSR in the microwave is not affected by
[50:11] cloud cover. So, we can actually combine these potentially and so that fills in. You can see here where if I toggle
[50:18] between these, you know, these areas that are there's no there's no snow retrieval from VIIRS, but they actually
[50:25] are snow covered uh over much of that. It's just cloud or at least masked as cloud. And AMSR gives you the data there
[50:34] in that area, but at snow at lower resolution, you can see it's more pixelated pixelated uh and it's giving you the the snow
[50:42] water equivalent, um but it does fill in areas there where uh there is no cover. So, So, um there are several different MODIS
[50:52] snow products covering different aspects and different resolutions. The basic one is the swath getting with each each as
[51:00] as the MODIS uh sensors orbit each time around the Earth. Um it's a level two product. 500 m resolution, it gives you
[51:09] the NDSI parameter. Um the orbits are broken up into what's called a 5-minute orbit parcels. Um and
[51:19] and so they make the data um the data volume reasonable to download and allows one to get data over only
[51:26] your area of interest instead of a whole orbit. Um and then there are gridded products. Um they have these sinusoidal
[51:34] gridded tiles at 500 m and then they are binned up. Uh one thing with the MODIS uh in the VIIRS is that, you know, for
[51:43] each grid cell, um each footprint, it's giving you the NDVI as a threshold. It's giving you either snow covered or not
[51:50] snow covered. Um, it doesn't give you a fractional snow cover, but if you bend these up into uh bigger grids like a 0.05 grid
[51:59] like the MOD10C1, that gives you the percent snow cover. Uh, and so again, these uh there are
[52:06] several different products. There's also a climate models grid products um, that are useful for climate models. The grid
[52:12] is is uh comparable to what's used in climate models, so it's easier for modelers to ingest those data into their
[52:20] models for assimilation or validation. And then there are also these 8-day composite products, and that helps fill
[52:29] in where there's clouds um, and give you more complete areas um, um, instead of uh the the gapped uh the
[52:36] daily products that have gaps. And then there's the mean 1-month mean product. And I listed here these MOD products um,
[52:44] these are these refer specifically to the MODIS products on the Terra satellite. Uh, I mentioned earlier that's also on the Aqua satellite. Um,
[52:54] there are to to save space I didn't list those, but those are the exact same products, but they are denoted by MYD
[53:00] instead of MOD. Um, and and so they're exact same products just from from the Aqua sensor. Currently, we're on uh version 61 or
[53:10] collection 6.1 as it's called um, at the DAC all in HDF-EOS 2 format. Um, the version 7 collection 7 um, will be
[53:21] coming out uh in the future um, before too long. Then the VIIRS snow products um, are similar. Uh, there's not as many
[53:30] products at the at current time. And um, we have these VNP products. That's the NPP uh satellite. There's also I
[53:41] mentioned the NOAA 20, that is denoted by VJ1. There's also NOAA 21, which we do not yet have in the DAC, but those
[53:49] will be coming before too long. Per version two is currently available at the DAC, and these are in HDF-EOS 5
[53:57] format. format. And again, there's the swath data. These are broken up into 6-minute intervals, different than the MODIS 5-minute. The
[54:05] resolution's a little bit different. Then it also has these sinusoidal gridded tiles, the climate model grid, and then a gap-filled product, also
[54:15] for daily that uses ancillary data in filling methods to give you a cloud gap-filled product. So, um
[54:25] There's been improvements over the years to these products. Um But one of the big improvements is to look at the
[54:36] signal that you're getting and understanding that it's not just snow or not snow. It's a mixture of everything
[54:43] that is within that footprint, vegetation, soil, rock, whatever. Um And all of those things contribute to the
[54:52] surface type. And you can actually use these you know, multiple frequencies, different bands to do what's called spectral
[55:01] unmixing, which basically instead of just giving you a threshold like the NDSI, it actually tries to put together
[55:08] how much reflectance is coming from different from these different components, and it can solve for not only snow cover or not snow cover, but
[55:16] also the properties of grain size, and then radiative forcing due to dust. So, snow is generally white, but you can get
[55:23] dust on the snow, which changes the albedo. albedo. This comes straight from the surface reflectance product. Um And this is
[55:32] developed originally by Thomas Painter, and then it's been carried forward by Carl Reedy at the University of Colorado here and
[55:42] he will talk about that this product more in part three. So I'm just giving you a quick overview
[55:49] of this and I won't go into much detail but just to show a couple examples it can give you an
[55:57] image here on the bottom left the snow covered area and then on the bottom right the grain size
[56:04] and then as well as you know RGB composites composites and then uses the elevation as well to help with
[56:12] the reflectance and so and ancillary data and again there's been advancements of this there's a newer spatially and temporally complete
[56:22] STC product and and these products are being produced at NSIDC I'll talk about that in a minute.
[56:32] There's also another advancement called snow spires snow property inversion from remote sensing. This is kind of a carry on from
[56:41] the skag and DRFS has optimized processing for a larger number of pixels and then it solves these light absorbing
[56:48] particles or dust essentially is what that's referring to and grain size simultaneously simultaneously and this is nice because it's adaptable
[56:56] to to any sensor with channels from visible to the shortwave IR and again I mentioned these are now being produced at the and
[57:05] and provided by the NSIDC DAC currently for motors but it's being adapted for beers as well um
[57:12] and I put this here mostly mostly just for for reference and like I said Carl will talk about this more
[57:19] but this just kind of shows the comparison between those and how they are put together the main thing is
[57:26] this light attenuating particle the way it handles those instead of doing it separately for the Ska-DRFS. Um
[57:34] it does it simultaneously for SPIRES. Um SPIRES is still under development, whereas the Ska-DRFS is pretty much um
[57:42] complete in terms of its development and and being transitioned to the to the DAC. DAC. Um Um one of the places this is getting um
[57:52] uh used is in the Snow Today website. Uh this is an an NSIDC website that provides during the you
[58:01] northern hemisphere snow season um focus currently on the western US um providing the snow cover statistics and
[58:10] images um based on these the the MODIS Ska-DRFS and the SPIRES. Um funded through the NASA NASA Terrestrial
[58:18] Hydrology Program and Karl Rittger um at INSTAAR in the University of Colorado um leads this. And so this is updated
[58:26] through the through the winter season. Uh Uh images are updated every day and then there is also analyses published about
[58:34] once a month on um how this is put together. And this again will be talked about more by Karl in part three.
[58:41] All right. Another um mission that NSIDC DAC has data for is called the Airborne Snow Observatory. Um I've talked mostly about satellite
[58:51] observations and those are useful because they're continuously flying. We have a long history of data, but there's
[58:57] as I mentioned a lot of limitations um in detecting snow cover from these satellite sensors. They tend to be
[59:04] individual sensors that can't resolve all of the relevant properties. The spatial resolution uh is still coarse for a lot of important local and
[59:14] basin scale uh details that are needed for water resources. So uh back in 2013, NASA Jet Propulsion
[59:22] Laboratory Laboratory uh put together the Airborne Snow Observatory ASO mission. And that was again developed to quantify snow water equivalent and
[59:33] snow albedo for mountain watersheds at a high spatial resolution. So trying to really get very detailed information and really
[59:43] improve the knowledge of snow properties and how they vary in different types of with different types of airborne sensors and get the
[59:51] spatial and temporal variability. Um and the idea is that these would be really useful input data for future
[1:00:01] water management models and water management systems. This was a collaboration with the California Department of Water Resources and
[1:00:08] focused really on the Sierra Nevada area. area. And And the NASA support for this is NASA mission lasting until 2019
[1:00:19] and then ASO became a commercial entity. ASO Incorporated. And so it now exists as a commercial entity and again it
[1:00:30] focuses on primarily on the Sierra Nevada mountains and California water resources. resources. And their data is currently available
[1:00:38] through the ASO Incorporated. It is not publicly available for free. Um but the NSIDC DAC does archive the
[1:00:46] historical ASO data from the NASA mission mission and that is available freely as all other NASA data is.
[1:00:55] Um so the instruments that ASO used one is a scanning lidar laser altimeter to get snow depth and that has not been
[1:01:05] used much and and not from satellites much much especially when ASO started out. So that's a unique instrument unique data
[1:01:13] product and then the imaging spectral radiometer give you albedo and it has enough channels they can look at
[1:01:20] changes in snow grain size, dust, black carbon, other organic model, and then it combines these with a snow density model
[1:01:27] as well to really put together a detailed detailed um uh uh you know, set of parameters that are
[1:01:34] very useful for water resources. Um this is just an example, the Tuolumne River Basin back in 2014 in California.
[1:01:43] Um and you can see, you know, a lot of detail here in all you know, different parameters of snow depth, the snow
[1:01:50] density, the snow water equivalent, and the albedo. These are all really important impacts for understanding the hydrology, understanding water
[1:02:00] resources, how the drainage, and how the water supply will will um work out in the summertime as the snow melts, and
[1:02:09] and you have the runoff in the snow runoff. And uh and so this is uh really valuable data, but you know, as a
[1:02:17] um airborne mission it's pretty limited in in how much data you can collect. Um so it's focused on very specific
[1:02:23] watersheds that are key for for customers of ASO. Um these are the products that we have from uh ASO.
[1:02:32] Um there's the uh they're pretty much all the lidar retrievals, and again these are 2013 to 2019.
[1:02:41] Um one uh final uh product that we have that I want to note is uh from the
[1:02:47] SnowEx mission. Uh and and these are a series of NASA both airborne and field campaigns that took place between 2017
[1:02:56] and 2023 in the western United States, mostly in Colorado, um but there was one in Alaska as well. This was funded by
[1:03:03] the NASA Terrestrial Hydrology Program. And SnowEx, um like ASO, involves airborne, but also brought in ground measurements, field measurements, and
[1:03:14] the goal was to really more accurately measure snow characteristics in a variety of terrain and vegetation canopy
[1:03:20] and in an in terrain and vegetation canopies that are really well understood and we have good data from. And so there
[1:03:28] was ground measurements taken in the field and then validated against airborne measurements and that allows one to compare different remote sensing
[1:03:37] technologies and the hope is that these data can inform future potential snow satellite mission design. Um there has
[1:03:45] not really been a snow satellite or snow satellite mission um by NASA or really any uh any space
[1:03:54] agency focused specifically on snow and and having the instruments that are that are optimized for snow. So SnowEx really
[1:04:01] worked towards trying to uh understand the the instruments and the data from the from the different instruments and
[1:04:07] what would be an optimal combination for those for for such a satellite mission. Um not going to list all the data sets
[1:04:15] cuz there's just so many. There's about 100 data sets spanning all different kinds of of uh data. Um there was
[1:04:22] airborne lidar. There was UAV uh SAR. Um there was snow water equivalent data collected in the field and snow depth uh
[1:04:31] collected. Ground penetrating radar um from the ground um um surface spectral reflectance, snow pit measurements. There was a some folks
[1:04:40] digging a a snow pit and then the meteorological data to understand the conditions and how those were changing
[1:04:47] and how that affected the snow cover. Um this is just a quick example. Um this is a example of comparing ground
[1:04:54] penetrating radar uh which is on a sled uh pulled on a sled that's down in and D there in the
[1:05:00] lower right. The data the returns in A and then the red is is what was derived as the the snow depth there
[1:05:11] um in in the top and A, and then it's compared, in blue, the GPR, uh, with um,
[1:05:19] snow stakes and snow probes that were stuck in along the same transit there. Um, those are the red lines.
[1:05:25] And you can see the red lines extend a little bit deeper than the GPR. So, there's good, um, you know, comparison
[1:05:33] between GPR as far as the variability along the track, but the, uh, there's a bias, um, compared to the snow probes.
[1:05:41] Um, and then the left there just gives you a sense of where that was. It was in
[1:05:45] western Colorado, um, in the Grand Mesa area there. Um, so this is really, you know, dense data, really useful,
[1:05:53] something you can't get from satellite or or even airborne. Um, this this really fine-tune, high-density, um, um, validation.
[1:06:04] So, um, with that, I will finish up. Uh, here's resources on the different sensors, and and these have include
[1:06:11] links to the data as well, as well as some informational, uh, um, resources there, like the NASA's got
[1:06:19] snow page and then snow today, uh, uh, and then, uh, references there to, uh, the relationship between glaciers and
[1:06:26] snow and water supply. So, thank you very much. >> Yeah, thanks for the introduction. Uh, hi everyone. Uh, my name is Ryan Ture.
[1:06:37] I'm a senior software programmer for a company called Airborne Snow Observatories. Observatories. Uh, but I volunteer on the side also,
[1:06:44] uh, for the with the develop program as a science and technical advisor as well. Uh, just to give a little background on
[1:06:50] develop, um, participants are selected for the program, they conduct, uh, like 10-week studies, uh, in interdisciplinary teams of like four to
[1:06:57] five people. Uh, and they work, uh, closely with develop, uh, science advisors and mentors and, uh, NASA
[1:07:03] partners on our real-world projects and problems, um, and through this process they learn, um, um, uh, uh, how to use earth observation science,
[1:07:12] uh, for, you know, various things from, uh, uh, climate research to, uh, disaster detection and and other things of that
[1:07:20] sort. So, uh, in 2023, I had the pleasure of advising the, uh, Northeast Alaska, uh, climate team, whose members were, uh,
[1:07:29] Christian Anderson, Omid, uh, Arouji, Isabel, uh, Chittamuru, and Thomas Gorman. Uh, the main objective of this project,
[1:07:39] uh, which I'll be presenting, uh, was to evaluate snow variability through a climate climatological analysis, uh, to support, uh, ecological
[1:07:47] monitoring in, uh, Northeast Alaska. So, going on. So, our study area is comprised of the, uh, National Petroleum Reserve, uh,
[1:07:59] of Alaska, uh, the NPRA, as you can see on the left, uh, and the, uh, Arctic National Wildlife
[1:08:06] Refuge, which you can see over on the right. right. Um, the range which we're going to be
[1:08:10] looking at is between the years 2000 and 2022. 2022. Um, and, uh, these lands are administered by the, uh,
[1:08:19] Bureau of Land Management, uh, and, uh, the US Fish and Wildlife, uh, Reserve. And just to give you a quick view of
[1:08:28] the, uh, uh, topography of these areas, as you can see, um, the NPRA, uh, has a lot of, uh, flatland Arctic tundra to
[1:08:36] the north, and some mountainous regions down to the south, uh, going up into the slopes. Uh, and then the, uh, ANWR, a
[1:08:43] lot of mountainous regions, some kind of coastal tundra up in the north as well, uh, and some mountainous regions, uh,
[1:08:49] throughout the center of it. Uh, Uh, going through the Brooks Range. So, the community concerns that were
[1:08:56] addressed in this project, um, cover a whole lot of different areas, including, uh, mainly snow, uh, cover loss, and how
[1:09:03] that affects everything from transportation in these areas to oil exploration and how they use seismology to detect different new reservoir sites
[1:09:13] and and how these can be accessed and how those can affect the ecology of the area. How
[1:09:19] How variability in snow cover has affected biodiversity in the area. You know, so how it's affected the indigenous people
[1:09:26] who live in that region as well. So the partners for this project were the US Fish and Wildlife Service and
[1:09:34] Arctic National Wildlife Reserve and the Alaska Climate Adaptation Science Center. As I mentioned in the last slide,
[1:09:43] slide, the main focuses of what these partners are looking for were just to see how not only the ecology has
[1:09:49] been affected as climate has shifted over the last two decades. But also how it's affected everything from
[1:09:59] transportation up in that region to the ecology to how wildlife exists in that region as well. So
[1:10:16] So the first objective was to evaluate historic snow variables including snow cover, snow water equivalent or SWE and
[1:10:23] snow depth. To understand how changing climate has affected each of one of these variables. One of the
[1:10:36] two main snow variables that we looked at were both snow depth and snow cover fraction. And And we're trying to create end products such
[1:10:46] as like time series analysis, snow variable maps and snow on and off maps to look at the trends across these
[1:10:55] uh years and see if we could uh provide our partners with a end product that could help them figure out um how this
[1:11:03] area or how these two areas were changing over that amount of time and how they could continue to change in the
[1:11:08] future. future. So, uh MODIS is a uh a sensor set aboard the Terra satellite. Uh the data set
[1:11:15] uses um uh gridded snow cover and albedo derived from a radiance data. Um snow cover is uh the snow cover data
[1:11:24] set is identified using uh NDSI or normalized difference snow index. Uh and uh which is uh a data set that uh
[1:11:34] goes through a uh series of uh screens to alleviate errors and flag uncertainties such as um uh uh
[1:11:41] radiance angle and whatnot to throw out uh uh unreliable data and then is able to uh uh
[1:11:48] uh use different band uh indexes to figure out whether snow is over a certain pixel or not or contains
[1:11:55] a certain percentage of snow. Um the uh NASA model uh based on the uh global land data simulation system or uh
[1:12:04] G G uh GLDAS um is a snow depth product um was also used. Uh is a um
[1:12:12] uh was a new data product at that time uh that determines snow depth through the combination of observation and model
[1:12:17] data uh from uh NOAA uh and uh also the Air Force Weather Agency's uh agriculture meteorological modeling system.
[1:12:30] Um so, this data was acquired and then uh using uh Google Earth Engine and the uh Python
[1:12:38] API associated with that um pretty much uh the team got the uh data sets for these uh downloaded them directly uh
[1:12:47] through their browser using um a Google Earth Engine uh and then was able to uh filter on those regions, uh
[1:12:56] get those products, and then visualize and experiment and charts to explore the data set and see see over these 20 years whether there were
[1:13:08] any any neurological trends that could shed light on what our partners were looking to get out of the state.
[1:13:22] So for the the DSI snow cover, we first reclassified the snow cover values as binary classification. So
[1:13:31] any value from 0 to 14, 0 to 14% being 0 being no snow cover at all up to maybe a 15% cover of that pixel.
[1:13:42] We determined as a non-snow pixel and then from 15 to 100 we set as one to indicate as a snow
[1:13:51] cover pixel. We use those masks to kind of sort the data out into this kind of simple binary
[1:14:00] snow cover map, which then we use to look at how snow covered these areas. Um and a lot of this data and quality
[1:14:13] assessment can be found within the DSI snow coverage algorithm flags within the data set itself. Um Um so
[1:14:25] each pixel we then mapped all these data on top of each other and determined over each season or each
[1:14:35] year year every time the pixel changed from 0 to 1 and 1 to 0 pretty much showing us the variability
[1:14:43] of that area's change in snow coverage. The team was also able to using this data set figure out the first
[1:14:52] and last day of continuous snow for each snow season. So they could better map out how long
[1:14:59] these snow seasons lasted in these two specific areas in Alaska and how they changed over the years as well.
[1:15:09] So one of the first things the team looked at were the monthly snow cover rates between all these years.
[1:15:15] Um Um as we can see here in both regions we see what we would expect where snow
[1:15:21] remains really high in the winter months. months. Um starts to melt in May and then in the summer completely drops out and
[1:15:29] melts and then builds back up during the fall and winter season. Um we saw this consistently throughout
[1:15:36] both regions. But one thing that was interesting to note was in the NPRA in the winter months like
[1:15:44] December and January we had to cut data from these months because data wasn't available due to polar nights. So during the winter time
[1:15:54] up in these northern regions the sun sets completely and there's no daylight so there's not a building to
[1:16:02] get data during these times. So we had to throw out data from those months for this region in particular.
[1:16:08] Um furthermore kind of looking at monthly snow covered fractions the team broke broke all the years into four seasons
[1:16:19] and then were able to plot them across the the 20 year span. As we can see somewhat kind of results as far as where
[1:16:29] we expected snow cover to be during which seasons. These maps show the change in the last day of snow per year. The darker blue is
[1:16:38] later in the year and And warmer colors are earlier in the year. For example, this area um that we can
[1:16:45] see in the first era arrow has a snow lasting till October while this area where the second arrow is
[1:16:53] showing up has snow until July. Over time we can see the areas that have a snow the longest
[1:17:00] lose snow first and more importantly areas that change most often from year to year and where that variability is
[1:17:06] showing up most. So as we can see um the mountainous regions certainly have the most variability jumping from
[1:17:15] high to low pretty quickly and you know um um So the team was also able to look at
[1:17:29] season start and end dates and how those have changed over the last 20 years. The map on the left shows the difference
[1:17:34] between the first day of snow in the year 2000 and the last day of snow in the year 2022. The blue color indicates
[1:17:41] that the state is coming later in the year while the red color indicates the date is coming earlier.
[1:17:46] These maps indicate that across the majority of both regions except for the southern portion of the ANWR the snow
[1:17:53] seasons are beginning later into the year. year. Although it should be noted throughout this project the variability
[1:18:00] from year to year to year was was in in between years was pretty variable and so and that we'll see later while
[1:18:09] trends were pointing towards later snow season starts and earlier ends ends the variability was was so high that it
[1:18:18] was hard to really nail down a very definite trend in that. And yeah as we can see here this is what
[1:18:27] they plotted out for all 20 years together and while yeah we see a negative slope here variability is so high that it's hard to
[1:18:36] really get out a really clean trend and it is. Now, moving on to snow cover variability. Um so, uh this slide shows
[1:18:48] uh two GIFs. Uh one is of the NPRA uh the petroleum region and the other one is for the ANWR. Um these GIFs over
[1:18:57] time show how um snow cover starting in January and going through December uh the image is color-coded indicating
[1:19:05] areas with high variation in yellow and areas with low variation in blue. Um so, as you can see on the left uh
[1:19:12] that the northern coastlines have the highest variability in June. Uh and uh uh as as snow is melting out
[1:19:20] over in these coastal regions, um um we can also see that the pixels uh is switching on and off between um snow
[1:19:27] throughout the years more frequently uh as it gets farther out. Um uh we can also see in the uh the the
[1:19:35] mountainous regions of uh the ANWR on the right um how how snow is kind of sticking around in the mountains, as
[1:19:41] well. Okay, and then uh going to other snow product, the snow depth. Um Um so, uh snow depth was similarly binned
[1:19:55] like our snow cover uh and uh uh average snow depths were taken for each pixel. Um for the NPRA on the right or on the
[1:20:04] left, excuse me, uh you can see that snow depth is quite uniform across the whole region, uh but for the ANWR, the
[1:20:10] wilderness region to the right uh it appears that the mountain ranges have the highest amount of snow cover uh
[1:20:16] over the longest uh period of time. Um however, as you can also see from this data, the resolution size is poor
[1:20:22] because it's uh 27 km resolution. Uh so, uh no solid conclusions could really be made by the team about how snow depth
[1:20:31] was being held and what specific regions over over these 20 years. >> So, in conclusion, the team found
[1:20:41] that in the ANWR, the snow cover variability was greater in the mountainous regions, whereas in the NPRA,
[1:20:50] snow cover variability was greater in the coastal regions. Um, no significant trends were found in snow season duration in both regions likely
[1:20:59] due to frequent changes in snow season start and end from various blizzards and and events across these 20 years.
[1:21:06] Um, but for both NPRA and ANWR, we saw the average snow depth steadily increase as you approach the Brooks Range,
[1:21:16] which as we would assume that, you know, highest amount of snow depth kind of staying in the mountains over over these
[1:21:21] time periods. So, the team's analysis was limited to spatial and temporal resolution of the the MODIS and
[1:21:33] GLDAS data products. Um, the data resolution of 500 m and and 27 km respectively for both products
[1:21:41] limited their ability to capture snow ability variability at the smaller spatial scales. Um, Um, the accuracy of their data may have been
[1:21:51] affected in the data by like polar nights as well, kind of upscaling their data in the in
[1:21:58] the main winter months for the petroleum region. region. Uh, and then other things such as like cloud cover and and and other
[1:22:06] environmental factors might also affected data quality as well. Yeah, just ending up, we wanted some to give some last shout-outs to the others
[1:22:17] that helped with this project, including Catherine Caruso, which was the NCEI fellow that helped the team. Uh, Dr.
[1:22:26] Kent Ross, uh, who's the science advisor at develop, uh, Julie and Dan over at the University of Alaska Fairbanks, Dr.
[1:22:32] Bob Bolton, uh, who's at the, uh, International Arctic Research Center, uh, Dr. Jessica Cherry, Cherry, uh, uh, uh, Molly, uh, uh, Wallace in, uh,
[1:22:42] at the, uh, National Integrated, uh, Drought Information System, uh, center, uh, and our other partners, Dr. Jessica
[1:22:49] Garron, uh, Dr. Paul Leonard, and, uh, other support from other, uh, uh, NCEI fellows, uh, Burke Adams, uh,
[1:22:59] uh, Ellen Bartow-Gilchrist, and Steve Ansari. Thank you. >> Thanks, Ryan. And thanks to all our guest instructors, Andrew Barrett,
[1:23:12] Walter Meier, and Ryan Terribury for their excellent presentations about snow data and their applications. And so, this brings us to the end of
[1:23:23] today's webinar. So, we want to summarize what we saw. Um, snow and ice are an important water
[1:23:29] resource, as we saw. Snow and ice play a crucial role in Earth's water cycles. Snowmelt serves as an important source
[1:23:37] of water in many regions. Interannual variations in snowpack have a substantial impact on the regional water availability and can lead to floods or
[1:23:48] droughts. droughts. When snow accumulates at higher latitudes or in higher elevations, water is stored for days or months.
[1:23:57] Um, glaciers, um, if the result of snow accumulating over years, uh, and it stores water for hundreds to tens of
[1:24:06] thousands of years. Measurements of snow, um, that includes, uh, snow-covered area, snow thickness, and snow water equivalent, as we saw
[1:24:17] earlier, um, in the webinar. Uh, some snow properties, which are also important, are snow albedo, snow grain
[1:24:24] size, and snow impurities. We also saw, um, several products, and here are a couple of tables that will
[1:24:35] summarize these products. So, remote sensing of snow and ice, uh, these missions and sensors are shown here. Uh,
[1:24:42] we saw that spectral measurements, both, uh, passive microwave and visible and near infrared, spectral measurements are used. Missions
[1:24:52] for passive microwaves are are DMSP, SSMI, SSMIS, or and NASA JAXA AMSR-E and AMSR-2. AMSR-2. And for visible and near infrared,
[1:25:03] uh, NOAA 8 to 19, these are operational satellites, and also NASA Earth Observing Satellites, uh, such as Terra
[1:25:11] and, uh, Aqua, they have MODIS on them. NOAA has AVHRR, these are sensors, and, uh, recent sensors, SNPP and NOAA-20,
[1:25:21] they have VIIRS. These are all visible and near infrared, instruments. And temporal coverage is also summarized here. So, it's a
[1:25:31] long-term data sets available from early 1970s, uh, late 70s, all the way to present. Uh, Uh, just to summarize the products
[1:25:42] themselves, these are the products, um, available from NSIDC, daily, 5-day, and monthly from passive microwave. And, um,
[1:25:52] if you go to visible and near infrared, there are MODIS products, uh, which are are the swath products, uh, gridded
[1:26:02] products, um, and different resolutions, as you can see here, and in temporal and special scales are given here.
[1:26:10] Uh, monthly mean snow cover also is available, uh, to look at, uh, variability over seasons. This is from VIIRS instrument and these
[1:26:20] are the names of the products. We covered this during the webinar both ND and Walt did. But this is just a summary for you as a
[1:26:30] reference. So here also you can see that a special and temporal samplings are given for different products.
[1:26:40] So these two tables will serve as reference for you if you are looking for any particular snow and
[1:26:47] ice data product. Finally, here are some additional snow products and we also saw some applications. We saw that
[1:26:56] there's improvement to standard MODIS snow products based on MODSCAG and DRFS algorithm. So that is MODIS snow cover
[1:27:04] and grain size and dust radiative forcing in snow. Similarly, snow property inversion from remote sensing or SPIRES, that's also an
[1:27:14] improvement to the standard snow product. product. And snow today is an application of MODSCAG and SPIRES and that provides
[1:27:22] daily updated snow conditions in the western US and monthly analysis during the snow season. We are going to see details of this in
[1:27:31] our last session. We also talked about Airborne Snow Observatory which focuses on primarily on Sierra Nevada mountains and
[1:27:40] California water resources for snow observations. And SnowEx which is a series of NASA Airborne and field campaigns in western US, mostly in
[1:27:50] Colorado and also in Alaska. And finally, we saw application of MODIS snow cover and GLDAS snow depth in
[1:27:59] monitoring variability of snow in Alaska for National Petroleum Reserve of Alaska and Arctic National Wildlife Refuge. As I mentioned earlier, uh, there will
[1:28:14] be one homework at the end of this training. It will be open on 7th August and it will be available from the
[1:28:21] training web page. Um, you will submit the homework via Google Forms and it will be due on 21st of August.
[1:28:29] As I mentioned earlier, uh, certificate of completion will be awarded to those who attend all live sessions and
[1:28:36] complete the homework by the due date. The certificate will be received via email approximately two months after
[1:28:44] completion of the course. With that, we're going to end today's session and our next session will be on
[1:28:52] access analysis and visualization of NASA snow and ice data products, uh, the products that, uh, we reviewed today.
[1:28:59] So, we want to thank our instructors, Andrew Barrett and Walter Meier and also contributors from, uh, NSIDC, Michaela
[1:29:08] B, uh, Sabre Pressure and Diane Fritz. Here is the contact information for our guest instructors and we can always, but
[1:29:17] you can always contact ARSET. This is our website. Um, you can follow us on, uh, our YouTube channel and this is our
[1:29:26] sister program DEVELOP that you may want to check out. So, I want to thank you for attending
[1:29:33] today's session and, uh, we will move to question and answer session now. Thank you. To everyone, um, thanks for attending
[1:29:45] today's session. We'll move to the question and answer part now. Um, once again, we want to, uh, thank all our
[1:29:52] speakers, uh, Ryan Enter who was, uh, presented DEVELOP case study and also, um, Andy Wind World from NSIDC with
[1:30:01] excellent presentation. Thank you so much. Um, and, um, we also, um, want to thank our RC team Um, um, before
[1:30:10] we go to question and answer session. Um, Um, uh, uh, we have several questions. If we cannot
[1:30:16] go through all of them, we'll post them on our website. Um, so we also want to thank uh, Selene Henson Ordoñez, our
[1:30:23] coordinator, coordinator, um, Brock Levens, um, Jonathan O'Brien, um, and uh, Shawn McCartney, my colleague who helped me uh, putting this
[1:30:34] together. Um, and um, uh, so thank you all RC team for your help with this. Um, Um, also
[1:30:43] also uh, want to go through questions as many as we can. So, uh, let's start with question one.
[1:30:51] Um, Um, he and I uh, request all the speakers to unmute and answer the questions. So, what is basin here? So, if you want to
[1:31:01] take that question. >> Yeah, I think this is >> Andy Barr. >> Um, I think the slide you're referring to is
[1:31:10] the uh, the hydrographs and looking at the three different basins. Um, those are all in western Washington
[1:31:20] state in the United States. So, it's on the west coast of the United States. Um, and they're all relatively small basins.
[1:31:29] Um, I've listed them here, uh, but also listed the paper. Um, so you can go and take a look at that yourselves. Uh, but
[1:31:37] uh, the low elevation basin is Day Creek, the mountain basin is South Fork of Nooksack River, and uh, the
[1:31:43] glacierized basin is is Thunder Creek. Um, Um, but yeah, it's western Washington state. >> Thank you, Andy.
[1:31:53] Our second question is, can you please provide the source from where this percentage number is coming about um,
[1:31:59] contribution of snow and ice? And uh, please refer to this USGS webpage. There is an uh um figure and there are numbers given in
[1:32:09] here about uh freshwater availability and that's where this is mentioned. Question three, for lidar, how do we
[1:32:18] measure snow depth over a glacier? Is there any penetration of lidar in snow or ice? >> Sorry, I was trying to find my unmute
[1:32:34] button. Um this is Diane and lidar is going to give you the surface of the snow. So a combination of that
[1:32:44] surface value with um passive microwave or radar data to get the ice surface is going to give
[1:32:51] you that snow depth in that situation. So if you have a digital elevation model of the ground with no ice, you'll be
[1:33:00] able to get that snow depth directly from lidar. But with that ice in there, um using a
[1:33:07] combination of both radar and lidar will get that snow depth. >> Thank you, Diane. Um next question is what is the unit of
[1:33:18] uh snow water equivalent measurement, meter equivalent of water or kilogram per square meter? >> Um both are used and it depends on
[1:33:31] uh your the field that you're working in. So I think in in water resources and hydrology, we generally think of SWE
[1:33:39] being measured in meters um um of water equivalent uh but uh you'll often find within model output, um
[1:33:49] especially reanalysis and uh and and climate models, um snow may be given in kilograms per meter squared.
[1:33:59] squared. Um, and uh because the density of uh water is 1,000 kg per meter cubed, um, 1 m of snow is
[1:34:08] equivalent to 1,000 kg per meter cubed. Or per meter squared, I should change that uh in in the document.
[1:34:18] Yeah. So, both are used, um, and it depends on on on the research domain that you're working in.
[1:34:27] >> Question five is, what is the maximum depth of snow that can be measured using passive microwave remote sensing? Um,
[1:34:35] so, we will be answering this question later on with uh specific details. So, we're going to go to the next question.
[1:34:42] Uh, question six is, are there any planned updates or upcoming missions that aim to overcome current limitations
[1:34:49] in snow retrievals using visible infrared sensors, particularly regarding cloud cover and forest canopy changes? >> Yeah, so, this is Andy again. Um, and
[1:35:00] others may have different information on no no missions, but as far as I know, there are no specific missions, snow
[1:35:08] missions, planned. Um, Um, there have been a number of field campaigns, SIOPIX, back in the early 2000s, um, and and more recently the the
[1:35:18] SnowEx um campaigns have uh done a lot of field work looking at uh how how to study and evaluate snow retrievals uh
[1:35:29] from from remote sensing and airborne um campaigns, and and try and tie that in with actual characteristics of of snow
[1:35:39] on the ground. Um, so, we're learning a lot about how these sensors uh are seeing snow on
[1:35:49] the ground and how we can improve algorithms and things like that. With respect to clouds and forest canopy, um
[1:35:57] I think there are there is information from from other missions um that that could be included to help us with uh with getting at this
[1:36:06] problem, but generally the approach is to address that algorithmically. So, uh just improving algorithms to detect clouds um in in better ways. Um it's
[1:36:18] still a hard problem. Clouds are bright, snow is bright. Um with forest canopy um the spectral mixing approach that uh
[1:36:29] that Walt talked about with um with with uh the some of the visible imagery um can help with forest canopy
[1:36:38] um and and seeing snow on snow on the ground. Um and in fact that was one of
[1:36:42] the reasons it was it was developed. You know, it's part of this mixed pixel problem that we have um with with remote
[1:36:49] sensing and but uh sensor can only see a certain area of the ground and and that area can have
[1:36:57] snow, it can have rock, it can have it can have vegetation. Um and teasing out and separating out those
[1:37:05] those different components um is is a challenge and spectral mixing and and kind of taking that and using uh machine
[1:37:15] learning approaches um can help, but uh we generally do it algorithmically. >> Great, thank you. Uh question seven is
[1:37:24] do you have any research on the measuring the greenhouse emission such as methane gas leakage due to melting
[1:37:32] down of snow in the permafrost? Um there are some research papers you can find online, but uh NASA ha- has this uh
[1:37:40] experiment Arctic Boreal Vulnerability Experiment or Above uh that has some information. This is focused on Alaska and you will find uh some methane
[1:37:50] observations over like frozen lakes or where um when when not so yeah, so in that region. So you can
[1:37:59] look it up and we'll also provide some more references for that. Question eight is, could you recommend
[1:38:07] some of the decent N D S I applied research research or unique research on them? >> This is Andy again. Um
[1:38:21] Uh I've put a there were a couple of references here from early work done on uh on Modis
[1:38:30] Rosenthal and Dozier Dozier evaluated N D S I using Landsat and but then there's a lot of information in
[1:38:40] the algorithm theoretical basis document ATBE ATBE for the Mod 10 A 1 and MYD 10 A 1
[1:38:49] products. products. Um Um So So uh uh that you can use that information. There are a lot of applied studies but I think
[1:38:58] you can find. I just don't have them to hand. And Ryan Gerber really great um kind of
[1:39:05] use case of of using using N D S I for in in Alaska. So um yeah. And maybe Ryan can add
[1:39:15] some studies if he has any to mind. >> Oh um yeah, I'll have to jump on the
[1:39:24] snow ice Q&A. There's a link there for it and I can post some stuff. Um but yeah, a lot of the um
[1:39:31] uh I mean Jeff Dozier is part of our company over at ASL and has done like a
[1:39:35] lot of really great work um doing like applied lidar and and and particularly with some drone stuff recently for and I
[1:39:43] know um Tom Painter, our CEO, has done like a lot of stuff in the past as well.
[1:39:47] Um so I can post a a few of those as well uh once I get the link for that.
[1:39:54] >> Thank you. Thanks so much. Um it's so I think yeah, you'll you'll provide that information. Question 10 is how is the
[1:40:04] validation results of snow depth in Ryan's presentation? Um what are the typical error margins or uncertainty ranges in SWE or snow
[1:40:14] albedo? albedo? >> So I think a lot of that came from uh GLDAS, which is like a combination of um
[1:40:24] different models uh and then through that combination kind of estimating the amount of snow depth over a uh large area. Um
[1:40:34] the uh uh spatial resolution of that is like really large and I'm forgetting the number off the top of my head right now,
[1:40:42] but um I can't really speak to cuz I don't think we dug into it very much after
[1:40:48] seeing the preliminary results for um a lot of the data, especially from month to month, um because it was it was so coarse the
[1:40:57] resolution that it didn't really help with what we were looking at and what the customers are looking for for uh
[1:41:02] changes in snow coverage over time. Um I'm I'm so I'm not 100% sure how uh uh uh the range and and uh
[1:41:12] uh uncertainties of of that data is cuz after kind of seeing the results immediately we uh just created the plots for it and and
[1:41:20] didn't didn't dig into it as much further, but I don't know if um uh uh uh anyone else on the call maybe has a
[1:41:27] better idea and has used GLDAS before and and can speak on that. >> Uh yeah, we we'll look into GLDAS
[1:41:35] uncertainty matrix and uh see if you can provide this information. We'll take one more question considering that we
[1:41:43] already are gone past the time. So, is there any way to downscale the resolution of MODIS snow cover data?
[1:41:55] >> So, I This is Diana again. I took a quick look, but I'm seeing that Carl's putting in some more references.
[1:42:03] If you look, there there are papers published on using random forest regression other methods. And And Carl has an example, but like kind of
[1:42:15] downscaling this to Sentinel 2 resolutions for example. So, I would look into the literature and find methods and papers out there and maybe
[1:42:26] Carl can speak to this more later. >> Great. Yeah, Carl, if you want to add anything, please go ahead.
[1:42:36] >> Yeah, I think uh So, So, I think Andy put that first one in there. So, I think you can do machine
[1:42:42] learning, you know, to combine basically the temporal characteristics of say MODIS or VIIRS with uh you know, spatial
[1:42:51] resolution of Landsat or Sentinel. And um I think it's not being widely done, but there are algorithms available
[1:42:59] to sort of combine those data sets, you know, just a uh uh want to make sure you have really good
[1:43:05] inputs into those machine learning methods before you um start combining them so you can get the best available output. So, yeah, those
[1:43:13] papers are are good places to start to understand understand um you know, the the current methods. Uh yeah, that's it.
[1:43:21] >> Great. Thank you, Carl. Um I think we have a few more questions that we will address and then post the answers
[1:43:29] online or this Q&A document will be available from the training website. So, you can refer to it later.
[1:43:38] Um we're going to end today's session. We hope to see you next Thursday at the same time on 31st of July. Uh so, again,
[1:43:46] once again, thank you all. Our speakers, Andrew Barrett, Walter, Walter, Ryan. Also, Diane, thanks for answering the questions and Carl as well. Uh also
[1:44:00] want to thank our RC team one more time for their help. Our coordinators, Selvina Aldo and Brooke Blevins,
[1:44:09] Shawn McCartney, Sue Monty, Jonathan O'Brien, Sarah Carswell, and Maria Marabito. They all have contributed to this training.
[1:44:19] So, thanks, everyone. Um and thank you for attending today's session, everyone. So, we'll we'll see you next Thursday, um 31st of
[1:44:29] July.
