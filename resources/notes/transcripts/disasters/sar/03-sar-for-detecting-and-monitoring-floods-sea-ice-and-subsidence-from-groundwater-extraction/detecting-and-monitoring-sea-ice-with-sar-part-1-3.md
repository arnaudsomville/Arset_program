# Detecting and Monitoring Sea Ice with SAR, Part 1/3

`https://www.youtube.com/watch?v=KdaQgFGIxvI` · id 284 · 1:44:17 · module 55 — SAR for Detecting and Monitoring Floods, Sea Ice, and Subsidence from Groundwater Extraction

[00:02] Hello everybody. Welcome to the first session of our three-part applied remote sensing training SAR for detecting and
[00:09] monitoring floods, sea ice, and subsidence from groundwater extraction. My name is Erica Podest and I'm a research scientist at NASA's Jet
[00:19] Propulsion Laboratory as well as an instructor with the ARSET program. I will be hosting today's training and
[00:26] this entire webinar series. We have guest lecturers that will be presenting each session. And today I will be joined by Dr. Malene
[00:37] Johansson from the Arctic University of Norway. She will be focusing on detecting and monitoring sea ice with
[00:45] SAR. Before we begin our training, I just want to give you a brief introduction to the ARSET program.
[00:59] NASA's Applied Remote Sensing Training or ARSET program is part of the NASA Earth Science Applied Science Capacity
[01:06] Building Program. We provide cost-free trainings on the basics of satellite observations, data processing, analysis methods, and ready-to-use web
[01:19] tools in six thematic areas shown here: disasters, agriculture, ecological conservation, water resources, climate and resilience, and health and air
[01:32] quality. Our trainings are offered both online and in person, but the majority of our trainings are online.
[01:44] online. All of our training materials, recordings, and Q&A transcripts are available on our website, so you can
[01:50] register and participate live as you're doing today, or you can review our past trainings in your own time.
[01:57] We also offer a self-paced training on the fundamentals of remote sensing. Our trainings are offered at no cost and
[02:05] usually include a bilingual option, whether that's translated materials or the training itself is delivered in Spanish. Spanish. And all trainings include only publicly
[02:17] available open-source software and data. Our trainings are offered at a variety of levels from introductory to advanced to allow
[02:28] you to learn remote sensing based on your level of experience and need. If you'd like to know more, please visit
[02:35] our website. From there, you can find information about and register for upcoming trainings, view recordings, and review
[02:43] material from past trainings. You can also sign up for our listserv to be notified about upcoming training
[02:52] opportunities. To begin, I'll provide an overview of our training before we begin this session. So, sea ice, floods, and groundwater
[03:06] extraction can be seen from space. And the objective of this training is for participants to learn how to use SAR
[03:13] data to detect and address these potential disasters related to these sorts of events. Um and they can all have All of these
[03:23] events can have a large impact not only on human lives, but on infrastructure and the economy. So, SAR can be critical in informing on
[03:34] the ground efforts um um on disaster mitigation efforts and resilience. By the end of this webinar, participants will be able to generate
[03:50] subsidence maps due to groundwater extraction in order to inform risk and resource management. Detect and monitor sea ice to identify
[03:59] potential risks to shipping and coastal erosion. erosion. And detect and monitor floods in order to more closely monitor the increase or
[04:09] decrease of floodwaters and better inform disaster response and management. And here's the list of prerequisites for this training starting with the
[04:22] fundamentals of remote sensing followed by an introduction to SAR. Uh specifically the first and fourth fourth sessions of that webinar series.
[04:33] And then radar remote sensing for land, water, and disaster applications specifically the second session of that series.
[04:44] Here we can see an outline of the training. It will take place over 2 weeks. weeks. And it will consist of three parts or
[04:51] three sessions. Each session will be 2 hours long including a Q&A. Note that So today is the first session.
[05:00] The second session is next Tuesday, October 31st and the third session is on Wednesday, November 1st. Please make a
[05:09] note of that. All presentation slides, recordings, and Q&A transcripts will be available on the training page. There will be one homework assignment
[05:20] which will open on the date of the final session which is on Wednesday, November 1st. 1st. It will remain open until November 17th.
[05:30] A certificate of completion will be awarded to those who attend all live sessions and complete the homework
[05:36] assignment before the due date. Just wanted to remind everyone that if you have a question, please type it into
[05:47] the question box. We will be collecting these questions and answering them at the end of today's training.
[05:54] training. We will also be compiling these questions and answers into a Q&A document, which will be posted on the
[06:02] training website in about a week. Any questions we do not get a chance to answer live will still be recorded along
[06:11] with our answers. And now I would like to welcome Dr. Malene Johansson from the Arctic University of Norway.
[06:21] It's a great pleasure pleasure to have her here again. She She was guest lecturer for the previous
[06:30] ARSET's our training, where she talked about about the use of SAR to detect oil spills. So, very pleased that she is with us again
[06:41] to share her vast experience and knowledge, and this time for detecting and monitoring sea ice with SAR.
[06:48] Thank you, Dr. Johansson. The floor is yours. Well, thank you. So, my name is Malene Johansson, and I'm here today to talk
[06:59] with you about a detection and monitoring of sea ice using SAR images. So, here you can see a lovely image in
[07:11] the background of sea ice of various different age and types. And at the end of this lecture, you will
[07:18] know a lot more about what you're looking at right now. So, at the end of this session,
[07:25] you should be able to understand the mechanisms behind where we can monitor sea ice, what challenges this monitoring is
[07:32] giving us, and how we can derive sea ice characteristics using single and dual polarization SAR images. And also how satellites and SAR in
[07:42] particular fit into the larger scale pictures when it comes to safe shipping and climate models. So, let's start from the scratch. What
[07:52] is sea ice? Uh sea ice is ice that forms from uh the freezing of ocean water. And that
[08:00] means that this ice is very salty. It's ice that we have year round in the Arctic Ocean. It surrounds the Antarctic
[08:07] Peninsula. Peninsula. And it also occurs in subpolar seas, such as those areas indicated here with the red arrows, the Baltic Sea and the
[08:15] Sea of Okhotsk. So, uh what does it look like? Well, you saw first the SAR image. Here's what it
[08:23] looks like in in reality when we're out there. there. There are many different shapes, forms, and thicknesses.
[08:31] So, the one of the early stages we have is the nilas, which you see here on the
[08:35] top left. This forms under calm ocean conditions, and then you also have pancake ice. These are both new ice types. They're
[08:44] reasonably recently formed, but under very different conditions. Nilas under calm conditions and the pancake ice under more rough conditions.
[08:55] We also have leads here. So, you can see a lead has opened up in the thin ice
[08:58] areas where you can see the open water in between. But most people more maybe think more of
[09:03] the thicker ice types, the ones we see polar bears standing on. And these are the first year ice and multiyear ice
[09:09] types. types. Over here there's uh three different pictures of thin first year ice, rough first year ice, and also multiyear ice.
[09:21] And here is the sort of basic mechanisms and classes of ice formation. We have the new ice, which is the first ice that
[09:27] forms. It has a high salinity, but it's not very thick. We then go through stages of young ice
[09:34] towards first year ice and finally old ice. ice. The old ice, they were talking about ice that is more than 2 m thick and has
[09:41] survived at least one melt season. And this is also the least salty of the ice types that we have.
[09:51] So, what does it look like? We often take cores from the sea ice, so we drill a cell with a looks like a straw
[09:59] through the ice to take samples from it. And you can see such an example on the left here. And you can also, if you look
[10:06] in the from the edge here, you can see that there's quite a lot of pockets or air bubbles.
[10:13] Um this is where the salt has accumulated in the so-called brine pockets. pockets. And over time, the salt drains out of
[10:21] the sea ice and leaves behind cavities, which are then filled with air. And as the sea ice ages, its salinity,
[10:27] density, and the surface roughness changes. changes. And if you look in the diagram on the right, you can see that the top of the
[10:35] sea ice normally is colder. It has more of an air-like temperature, whereas the sea ice at the bottom has a temperature
[10:42] more similar to the open ocean underneath it. And the salinity is at its lowest values at the top and the
[10:50] highest values at the bottom. And all of these changes affects what the radar can see. So, here is a close-up we've seen from
[11:02] the side slicing a very, very thin sheet. sheet. Um the same core, but now cut into a
[11:08] small piece. And we can see that the the crystal structure looks very different. At the top, we have the so-called
[11:13] granular ice. And lower down, you can see more columnar ice. And this vertical or the structure of the
[11:21] crystals affect what the radar can see. So, now you know the how the ice forms and where it's located, but it doesn't
[11:32] exist all the time in all areas. And that is because in the summer it starts melting and starts disintegrating.
[11:43] First, the snow on top of the sea ice melts and melt ponds start forming. And you can see such a melt pond here in the
[11:49] ice flow. And this is the very start of the melt season, so they you have the melt ponds just sitting on
[11:55] top of the sea ice. And this means also that the albedo is decreasing and the heat absorption in
[12:03] the ocean can start increasing. And over time these melt ponds grow in size. Some will be penetrating all the
[12:14] way through the sea ice, so connecting the ocean to the ocean from both above and below. And this cause further weakening of the
[12:24] sea ice. And due to interactions with the surrounding ocean, the ice then starts breaking into smaller fragments.
[12:30] But you can also have the melt ponds that just reside on top of the sea ice, but they still cause a
[12:35] weakening of the sea ice structure. And these are changes that we can very clearly observe with SAR images and it's
[12:44] something that we really need to account for when it comes to the monitoring and detection of the sea
[12:50] ice itself. So, what does this look like? Well, I you've already seen some SAR images and here is a movie of sea ice
[13:00] that we tracked with sea ice drifters in the spring of 2022. And at the start of this video, the sea
[13:07] ice is very cold. We can see a lot of structures. And about now in the images, the temperature has risen so much that
[13:14] the snow starts melting and there is a clear change in the SAR signatures. We have simply gone from the spring and
[13:22] winter into the summer season and now the ice really starts breaking up and uh turn into very small pieces.
[13:33] So, if we just sort of stop the movie and look at two sets of images, we have
[13:38] the freezing conditions on the left and we have the melting conditions on the right. right. The first ones here are from the end of
[13:45] April and early May and in 2022 and the last images are from the end of May and early June 2022 and
[13:54] things look quite different in these images. So, and this is simply caused by the melting. melting. Uh
[14:02] Uh these images were taken at the same time as we had a campaign where we collected in situ data in this region.
[14:07] So, we happen to know that in the images on the right the temperature has turned positive and we really started having
[14:13] melting. Uh the melting itself started around 27th 28th of May and this first image here is from the 31st of May.
[14:22] So, when we monitor, we really need to account for these kind of changes because the ice itself has not
[14:28] necessarily changed much here, but what we can observe in the SAR images has changed quite significantly. And the how we deal with these kind of
[14:38] changes is something you learn more about in the next hour or so. So, So, you probably all heard that we have the
[14:49] Arctic sea ice and Antarctic sea ice also is changing. And you probably then heard that it is
[14:56] appearing. So, what do we mean with the ice disappearing? Well, we can firstly look at the ice thickness.
[15:03] So, here on the left is an image from 1985. This is what the conditions were like in March then and on the right is
[15:10] an image from March in 2022. The older ice here has been marked with in red followed by yellow, green and the
[15:19] youngest ice is the blue. And you can see that there's a lot less red to the right and more blue. And the
[15:27] red indicates the ice that is more than 4 years old. But you can also here see that the ice
[15:32] is not equally distributed across the Arctic. The Canadian archipelago, that's where we have the oldest sea ice and
[15:39] also around when you go towards the Alaskan side. And if you go towards the east, here's where we have the youngest sea ice. So,
[15:47] the changes across the ocean varies. And today, a larger fraction of the Arctic sea ice is less than 1 year old
[15:58] than it used to be. And yeah, you have the oldest and thickest ice in the west and the
[16:04] youngest and thinnest ice in the east. So, I talked about here is the age of the sea ice. How do we actually
[16:14] determine the age of the sea ice? Well, this is not something that we do with SAR images, but we start counting from
[16:21] the 1st of September or the start of the freeze-up season. And once the ice has survived one
[16:26] melting season, when we have these melt ponds, then we say that the ice has turned to 1 year old. And this roughly
[16:32] happens then on the 1st of September. So, what do we actually monitor? This lecture is supposed to be about
[16:41] monitoring and detection of sea ice. Well, Well, we use different parameters. Uh we often talk about three different
[16:47] things. things. First one is the sea ice extent. And here you can see an image from quite
[16:52] recently, the 27th of September in 2023. And this is around the time when we say that the sea ice is at its lowest, the
[17:02] sea ice minimum. We also talk about the sea ice concentration and the sea ice type. And on the right here, you can see a sea ice
[17:12] concentration map. We talk about the different types and I already hinted towards that we have the near ice and we have the older ice.
[17:23] So, that's one thing that we also try and monitor from space. And we also talk about the the finest
[17:34] stage of development. Now, this how we monitor sea ice was not necessarily designed with a radar in mind.
[17:45] A lot of the terminology that we're using using such as the WMO nomenclature was devised when people were standing on the ice and
[17:54] were looking at the ice itself and imagine what it meant to them in a way. And SAR does not see thickness
[18:03] or to a large degree cannot see thickness. thickness. And when we talk about the ice stage of
[18:07] development, we start with the open water and then new ice, nilas, nilas with frost flowers and so on as the ice
[18:15] thickens. But SAR on the other hand sees roughness, roughness, uh surface roughness. So, we're talking about millimeter to decimeter range. It
[18:26] sees volume inhomogeneities such as air inclusions, these brine pockets that you saw pictures of earlier, the snow grain size and so on.
[18:35] So, when we talk about SAR images, this is what we can see and we somehow the other needs to relate that back to these
[18:41] ice cup that WMO has established. Yes, the ice uh vary over the year. We have the seasonal cycle.
[18:52] The ice is lying on top of the ocean. This means that it's drifting. It is not stationary.
[18:58] stationary. Uh we have two areas in the Arctic when the ice is disappearing through. We have the Bering Strait.
[19:04] You can see at the top uh red triangle or rectangle here. And then we have the Fram Strait which is the lower
[19:11] rectangle rectangle uh between uh and Svalbard. In the Fram Strait, we have the fastest flowing sea ice
[19:19] in the world or in the Arctic Ocean. And this is an area that is very challenging then when it comes to sea
[19:25] ice monitoring and detection because the two SAR images will see very different things even if they're looking at the
[19:33] same location but with different time points in time. So, that's one of the reasons how the sea ice can can vary. It can melt, but
[19:41] it can also drift away. So, why do we monitor it? One of the first things is that
[19:50] it controls the albedo in the Arctic Ocean. Ocean. When there is no sea ice, the solar energy is absorbed by the ocean.
[19:59] And if we start adding sea ice, the albedo changes. We have a higher albedo. And the sea ice reflects then more
[20:06] incoming solar radiation and the ocean temperature can increase less. If we on top of that add snow on the sea
[20:13] ice, ice, the albedo gets even higher and most of the solar radiation is simply simply reflected away from the ocean.
[20:27] So, this is why we we are using this also then for climate modeling, but the ice is also something that we are having
[20:33] to deal with if we're having ships or if we're living in the in the Arctic. The sea ice
[20:41] is an hinder when we are trying to move our ships. And we need the need to use SAR images
[20:50] or other satellite images to help our ship routing. Because you can see here the image on the left, we see an
[20:59] icebreaker and it's actually surrounded by quite thin ice. But if you're looking at the icebreaker on the right, there is
[21:04] quite a a of deformation there. And these two areas is quite different how challenging it is to move through. And
[21:11] generally all ships will try and avoid areas with heavily deformed or very thick sea ice. So, um for the operation sea ice mapping
[21:23] here, we're looking for optimal seeing the icebreaker routes or routes for any ship for that matter. We try and
[21:29] go towards the areas that are indicated with uh green arrows here, which are leads, and we try and avoid the areas
[21:34] that are indicated by red arrows. So, the leads are openings, and obviously the ridges are closings where
[21:42] sea ice has drifted towards one another and caused uh obstacles for us. And yeah, the sea ice moves. So, here we
[21:50] can see evolution of SAR images where we simply have divergence and convergence areas where one area may have been very
[21:59] easy to travel through at one point in time, but over time it starts having a convergence and the
[22:05] area becomes impossible for many other ships. It is also used the sea ice is also used as roads or simply part of the general
[22:16] infrastructure. infrastructure. Um and there they want to know where there's ridges and deformed sea ice areas because they're very challenging
[22:24] to move through, and you would look for something that's flatter, which is much easier to traverse. We also want to know where the sea ice
[22:36] is for to monitor the coastal erosion. The sea ice would generally act as a barrier between the coast and the open
[22:43] water. water. And you can here see sea ice extending out from the coastline in uh some area
[22:49] in Ny-Ålesund, Svalbard. And for each day the sea ice sits there, it actually protects the coastline from
[22:55] further erosion. So, if we can include um the presence of sea ice into coastal erosion models, we can actually get a
[23:03] much better estimate of how the coastal erosion is affecting these areas. And last but not least, the important
[23:12] for the climate system, leads will enable heat and gas exchanges, something the sea ice itself will limit.
[23:19] The frequency and size of the leads and polynyas are therefore essential to have a good grasp of when we calculate the
[23:25] regional heat fluxes and budgets. So, you can see here, heat flux from the sea surface is between 100 and 1,000
[23:32] W/m², W/m², whereas if you have 1 m thick sea ice, it gets reduced to between 5 and 20. So,
[23:40] it's a very important parameter to account for when we're doing heat and gas exchange estimates. So, how do we do it? How do we get from
[23:52] these kind of uh uh low altitude images taken from a plane to monitor sea ice? Well, we use SAR
[24:01] images for this. And we derive sea ice maps. So, how do we actually derive the maps? Well,
[24:11] Well, they are drawn by hand. We use expert knowledge and we use history of sequence from SAR images. We
[24:18] often look at yesterday's image from the past or the last hour in this day. We use information from provided from
[24:26] ships. ships. We use other satellite sensors as a passive microwave sensors, and we also use weather forecast to indicate how the
[24:34] ice is likely to have moved from one day to the next. But obviously, we have a lot of
[24:42] satellite images being taken every day over the ocean. And we are simply no longer able to keep up using all of
[24:50] these images as input into our sea ice maps. So, there's a lot of work ongoing right now to use AI or
[24:59] machine learning techniques to improve the ice charts. Though, as of yet, this is still under investigation. investigation. And one of the reasons for that is very
[25:07] important to avoid misclassifications regarding hazardous ice conditions. You do not want to send the ship into an
[25:13] area which can be very challenging or even dangerous for them to be in. So, yeah, I hope you all know that well,
[25:24] sorry images that can penetrate clouds. Therefore, they can work during the polar night. Uh something that is very essential when
[25:30] we're going to work with sea ice detection. detection. So, because a few months of the year, there is no daylight in these regions.
[25:39] The weather can be cloudy. We have between 17 80% cloud coverage at any point in time. And in summary, you can
[25:46] also add the additional fog. The SAR images are therefore essential if you want to have high resolution,
[25:53] cover large areas, and at the same time have year-round coverage. But the SAR is not easy to intuitively
[26:00] interpret. interpret. And we need to understand how the radar signal interacts with the ground. So, here you can see on the right, we
[26:07] have some SAR images, and on the left, we have some optical Sentinel-2 images. For the SAR image, we use the false
[26:15] color composite. And you can see that it's very easy though to separate sea ice and water in
[26:20] the optical image, but in the SAR image, it's not that easy. Though, other things are starting to
[26:26] become apparent, such as the ridges. And let's look at some more examples here. I hope you can see the flex
[26:33] between the Sentinel-1 and the Sentinel-2 image. So, you can see here that the SAR image doesn't tell the full story, but neither
[26:41] does the optical one. Because in the optical one, we can't really see through the snow. And there are areas where we have more
[26:48] ice and less ice, and it's simply obscured by the presence of snow. And here's another image. You see this
[26:56] slight shift in time, so they're not taken at precisely the same time, but you can see a lot more information
[27:03] about where we have deformation in the SAR images than we can in the optical images. images. So, the positive sign is using SAR
[27:12] images as it works at night, it can see through the clouds, and it can see roughness, roughness, which meant that we can use this to
[27:19] detect deformed sea ice areas. And that is something that is very useful for, say, shipping. We have some challenges. Uh the radar
[27:30] intensity signatures are ambiguous. It's not easy to directly connect the sea ice properties, and there is multiple
[27:36] scattering scales involved. One of the problems we have is, for example, the young ice types. Young ice
[27:44] can be bright due to the presence of frost flowers. These are ice crystal structures that appear on top of the sea
[27:50] ice. ice. And in the radar, these two images that we can see here would look very similar.
[27:57] Uh this is simply because we have volume scattering from the frost flowers in the image on the lower right, and we have
[28:03] a volume scattering from all of the deformation and all these ridges and areas that you can see in the
[28:10] the upper image. Uh young ice has a very large range of SAR signatures. You can see here three
[28:22] pictures of younger ice types, and they are are all very, very different in the SAR image, though they are perfectly safe
[28:31] for any ship to go through. Um they have a high salinity, but different deformations and different presence of frost flowers and other
[28:39] things. And if we look here in the SAR signatures, so this is the VV channel, And the blue crosses here indicate new
[28:49] ice. And hopefully you can see here that they actually cover more or less the entire spectrum, entire range here.
[28:56] For um all the different frequencies, we have an X-band, C-band, and an L-band image. And And simply the newly formed sea ice has It
[29:08] covers it all. And this is something that we need to account for when we're going to do automatic monitoring on sea
[29:13] ice. The melt season. I already shown you some images. The melt season changes everything. The separation between wet
[29:25] sea ice, melt ponds on the sea ice, and open ocean is very uh challenging. We're trying to separate also between
[29:33] the open ocean and the sea ice. The open ocean, we can have the wind affecting the areas there. So,
[29:40] the backscatter values are wind speed dependent. dependent. We also have the propagation and scattering of radar waves in snow and
[29:47] ice layers. They cause complex interaction processes. It is therefore challenging to come up with one solution that will work
[29:58] year-round. year-round. Be it an AI machine learning based or a manual uh classification based type. But, let's start looking now a bit more
[30:10] on the SAR images themselves. What type of SAR images do we use operationally? We rely primarily on ScanSAR images
[30:18] because they have a uh good coverage. Uh these days we use data with the HH and HV channels. They are provided by
[30:28] the RADARSAT constellation mission. They're provided by the Sentinel-1 data, freely available. Any one of you can start your own
[30:37] uh sea ice classification or sea ice monitoring. monitoring. Uh we have good backscatter signatures and over time we have learned how the
[30:45] sea ice interacts with the SAR uh, over these uh, sea ice areas and sea ice types. You can already hear see a advantage of
[30:55] having two channels. So, at the top we have an HH channel, at the bottom we have the HV channel.
[31:01] The sea ice edge is somewhat challenging to see in the HH image, but if we look in the HV we can clearly see the edge
[31:07] between the open water and the sea ice. This image here is also taken from the Baltic Sea in an area between Sweden and
[31:15] Finland and we only here have seasonal ice. So, the ice it's reasonably easy to uh, to detect uh, because we don't have
[31:25] the the the challenges with the multi-year ice. And here is an is an oldie but goodie. It's an ERS-1 SAR image from 1992.
[31:37] Unfortunately or fortunately the ice has not really changed uh, since then. If we look in the red rectangles here,
[31:45] we can see two different types of uh, level or smooth ice. And if we look in the orange box, we can
[31:52] see more ridges. And these are the kind of things that we are then using this knowledge on how the
[31:59] different ice types look in SAR images where we want to derive uh, monitoring and detection of sea ice.
[32:07] And over time we've also learned how the backscatter signatures change. So, on the left here you can see a
[32:15] little bit of a reminder on the ice growth process from the frazil ice and from the calm
[32:21] ocean until we get to ice sheets and uh, thicker ice. But on the right you can also see the
[32:27] radar scattering coefficient and how it changes uh, over time as the sea ice thickens and the salinity
[32:35] changes. So, we start with having reasonably low backscatter values. They drop once the ice starts forming. Then, the values increase again, only to
[32:45] drop down again. So, there is um these kind of changes with ice thickness we need to account for. And we can have
[32:53] all of these different ice types at any given point in time in your SAR image. So, there is a lot of factors we need to
[33:03] look into when of both from how the sea ice affects SAR image, and then how the sensor
[33:09] parameters affect how we can study the sea ice. But, let's take it one thing at a time.
[33:17] Let's start first with the sea ice properties. properties. The difference in salinity will affect the dielectric constant and the
[33:24] penetration depth. So, yeah, the sea ice is salty. It's made up of salt water. It accumulates in
[33:32] these brine pockets and channels. And once the ice has started to form, the brine starts to being expelled from
[33:38] the sea ice. So, you have sort of the saline ice you can see in the image here on the left,
[33:43] which has a higher salinity, and then lower down the salinity actually decreases. decreases. There can also be a salt layer at the
[33:50] surface that affects the radar signature due to changes in the dielectric constant. constant. If the brine drains out at the bottom,
[33:57] it leaves behind empty pores, enabling volume scattering. And on the right, you can also see a first-year ice picture where you see
[34:04] these brine cells. So, yes, which brings us to the porosities and inclusions. So, yeah. As another illustration with one more
[34:19] undulating surface with the snow grains in the snow layer brine inclusion of the sea ice here. So,
[34:25] we have the brine inclusions, and then we have the seawater underneath, and depending on the um size of the snow crystals, that will
[34:34] also affect um the radar backscatter signatures. There are the photo here, the snow grains there is up to 2 mm in 2 mm lens,
[34:44] and they're approximately uh 1.2 cm big. So, they will affect the sea ice uh scattering. We also have the surface roughness and
[34:55] topography. So, we've higher up in the We've looked in the ice itself, but now we can look at the surface of the ice.
[35:05] And here are some pictures. We can see we have rough ice at the top of on the
[35:10] leftmost pictures, and then we have uh thinner new ice at the lower uh lower left. If we look in the SAR image to the
[35:22] right, it's one channel the HH from a fully polarimetric radar set two images. It contain a few sea ice types.
[35:29] Uh Within the white rectangle here, we have young ice. This ice here was uh observed during the
[35:36] MOSAiC expedition. If you're interested to learn more about the MOSAiC expedition, I urge you to uh just look online. There's a lot of
[35:44] useful information out there. So, the ice here we know is rather smooth and is a slightly less than 30 cm
[35:51] thick at this point in time when this image was taken. We have the bright area within the blue
[35:56] circle. This is a ridged area. We have a lot of deformation in this area. And then the very dark uh area within
[36:04] the purple uh circle is refrozen melt ponds. The surface here is very smooth. And finally then we also have the
[36:17] layers. We have the snow ice interface, we have the sea ice water interface, and we have the snow cover
[36:23] with different densities, grain size, and and moisture levels. So, you can see here also an illustration at the bottom where we talk
[36:30] about the different scattering properties when we have multi-year ice, first-year ice, and open water. We normally talk about the snow layers
[36:44] as as dry snow layers, and then the radar can see through them. Uh if we here compare an optical image
[36:52] at the top and an L-band SAR image at the bottom. The snow is largely impenetrable by the
[36:59] optical sensor, but we can clearly see through it with the radar. Though we can see some ridges in the
[37:04] optical image because of the shadows and these kind of features that we are used to uh looking at,
[37:10] but the ridges are very easy to see in the SAR image. And once the sea ice is thick enough,
[37:16] then the return signal will come from the snow on the sea ice and not from the sea ice and uh water interface cuz you
[37:22] can also see some open water areas where you see some structure in the SAR image as well.
[37:30] Radar operated between L and X-band looks through the dry snow, and this is an advantage for many of our
[37:36] applications, but some we also have other K-band where it may not do, and we are using that for when we want to
[37:42] derive the ice thickness and so on. But that's for another lecture. But the snow is not always dry.
[37:52] So, here are some pictures taken from a recent campaign in autumn melt campaign which was look um targeting the melting conditions in
[37:59] the Arctic Ocean. So, it was planned to be there between May and June in 2022. A lot of snow
[38:06] piece being done, and here are some of those images. At the start of the cruise, we had very
[38:11] dry snow. You can You can see You can almost feel how crisp the the air is in
[38:15] this image. Um on the other hand, if you look towards June, um the onset of melt had
[38:21] started. started. And And the the melting has started in the snow pack itself. And you can probably see at the
[38:29] bottom there that the the ruler here sits in a bit of slushy um, water. And And here we simply see
[38:39] um, um, the effect of the melting as I showed earlier in the lecture here between the freezing conditions and the melting
[38:46] conditions, we start seeing the water rather than the snow on or the ice underneath. underneath. And on the right you can also see two
[38:54] images very close in time, but here um, the indication or the uh, the radar signature changes and
[39:01] indicated the surface has gotten wet. So, all of these things we need to consider um, and how the
[39:09] the sea ice affects the SAR imaging. But of course, we have the SAR sensor itself. itself. Where we have different polarizations.
[39:22] So, I already talked about the fact that we use HH and HV channels. And you can see here the HV channel is
[39:29] really useful to separate open water from sea ice. And this helps us reduce the ambiguities when we interpret the radar signatures
[39:37] in term of the ice types. The water appears dark and is better separation between the multi-year ice
[39:43] and the first-year ice or the level and the formed ice. And the sensitivity to the incidence angle is less.
[39:52] And I will come back to the incidence angle in quite some detail very soon. So, what we can see here we tracked here
[40:00] the same sea ice over time. This is the same image, it's the same movie that I showed earlier.
[40:08] And through the use of drifters we could ensure that we followed exactly the same sea ice flow
[40:13] over over a time period of about um, two months. Or here actually it's just a little bit more than 1 month.
[40:23] It's a multi-year ice flow and we're using Sentinel-1 images. And to the left here you can see we have
[40:29] freezing conditions and to the right we have melting conditions. And the blue dots are indicative of the HV
[40:37] backscatter values and the orange one of the HH. So you can see in the freezing conditions things are pretty stable. We
[40:45] don't have that many changes but we start seeing an obvious change when we go to the melt season.
[40:52] And we in this campaign here that we put out drifters, we didn't just put out one drifter but we put out many drifters and
[40:59] we put them on different ice types. And here we can see multi-year ice so ice that has survived many
[41:06] uh uh melting seasons and then first-year ice that has survived only one. And you can see that the changes in
[41:13] backscatter varies between these two different ice types. Wherefore the multi-year ice the backscatter values gets reduced when the melt season start
[41:29] and for the first-year ice actually the backscatter values increase. And using these kind of changes in backscatter behavior we can determine
[41:37] which ice types we're looking at provided that we follow the same ice over time. But this also then causes obviously
[41:44] challenges for the development of automatic sea ice classifications because the ice is not looking the same year round.
[41:55] And yeah, I already talked about the incidence angle. The incidence angle is a little bit of a nemesis
[42:00] here. here. Because Because we know the fact that the radar backscatter is reduced with increased incidence angle. This is something new
[42:08] we've known for a long time. And smooth targets such as the ones that are here, have a sharp drop in the radar
[42:14] return with increased incidence angle. So, we need to account for this in any monitoring of the sea ice.
[42:23] So, we can correct it using um um one slope across the entire image. Um that's one way of doing it, but the
[42:36] ice types do not have the same changes uh across all the incidence angles. So, it's not perfect, but it is a very
[42:46] good way of doing an automatic correction. correction. We could also look at for one correction for each different ice type.
[42:54] But, firstly, you can see on the right here, we have some uh gray level concurrence parameters with HH contrast, HH energy, and you can
[43:03] see that the the return values here change quite a lot with changing incidence angle. But, the changes across the scene is
[43:15] dependent on the material, and here you can see an image showing open water and multi-year ice. And doing one correction
[43:21] for both of these two is good, but it may not tell the entire story. And also, you can see here the
[43:29] separation between the two two different material is easiest in this example at an incidence angle range sort of
[43:38] almost challenging between 30 and 35, which is in the center part of the um Sentinel-1 images, for example.
[43:48] So, we really need to um get a handle on the incidence angle effects. And here, I can just show another
[43:56] example. So, the sensitivity is stronger for the smoother surfaces, so the thin ice and the calm open water, than for
[44:03] the rougher and deformed or wind-roughened water areas. And here, you can see the same uh um uh
[44:10] floats are indicated within these two red circles, but with slightly different incidence angles. So, to the left we
[44:16] have very high incidence angles, 42 to 45, 45, and to the left we have very low, between 19 and 22. So, you can see that
[44:23] these values um change quite a lot, and any automatic classification needs to account for this and realize that
[44:31] it's the same ice type. We can address this once we know which sea ice type, such as was done here. Uh
[44:41] if you look on the left, the incidence angle has not been accounted for. And if you look on the right, it has been
[44:46] accounted for. So, So, you can see the importance of adjusting for the incidence angle uh both over time, but also between
[44:56] different images, so that we can see that the changes we're observing is actually a physical change and not a
[45:00] change of the sensor itself. So, let's also talk a bit about the resolution and the sensor noise.
[45:10] We have talked about the incidence angle, we have talked about the the uh polarization. Here on the left, we
[45:18] can see an airborne SAR images over sea ice, a pixel size of 5 m. And on the right, a satellite SAR image
[45:24] with a pixel size of 12.5 m. They're taken over the same area at the same time, and as you can see, there are
[45:32] quite a lot of things that you can still identify. Some of the ridges are easy to see and some of the open water areas or
[45:38] thinner ice areas we can observe. But of course, these airborne missions with a very high resolution, they cover
[45:47] a much smaller area. So, when we want to do operational ice monitoring, we need to have a balance between
[45:54] coverage and resolution. And here we can also see a image from the Fram Strait. Remember, this is the
[46:05] fastest flowing sea ice drift. Uh and we need to have them very close in time. Here is a time difference of about 1
[46:12] hour, hour, which means the things have moved and they're not lying exactly how they were before. before. But at top here we have a 150 m
[46:20] resolution. resolution. Um Um and at the lower one we have a 2 m resolution. So, things are
[46:27] quite different. But we can still observe quite a lot of the flows uh clearly. And then the more deformed sea ice flows
[46:35] have clearly high backscatter signature in both images. And the level smoother sea ice is clearly recognizable as the
[46:42] darker areas. And we have used information from such campaigns to help us interpret more of what we can see in the satellite SAR
[46:51] images. And frequency, uh let's talk about this. This is one of the things that I'm very passionate about.
[47:00] And we also have a lot of new and exciting upcoming missions such as the NISAR, ALOS-4, and ROSE-L. And we
[47:07] already have existing L-band missions such as ALOS-2 and SAOCOM. And it's something that is becoming more important to consider
[47:18] um because the melt season is lengthening. We have a longer melt season in both the Antarctic and the
[47:24] Arctic. Arctic. And we know that the L-band SAR enables easy detection of sea ice ridges and it
[47:30] can account or manage a little bit further into the melt season before it gets really affected by the wetness
[47:37] levels. So, So, why the different frequencies? Well, they have different penetration depths. With X-band we have approximately 3 cm
[47:49] wavelength and a very small penetration depth. With L-band we have a 23 cm wavelength and a much greater
[47:56] penetration depth. Here are two images taken at the same time. time. I'm hoping everyone is familiar with
[48:02] Pauli images because that's what I'm showing here. And on the left we have a fully polarimetric C-band image from
[48:08] RADARSAT-2 and on the right a fully polarimetric image from ALOS-2. The images were taken in early May of
[48:16] 2020 2015 and you can clearly see in that the formed formed uh major deformation zones in both
[48:23] images uh circled here in sort of yellowy green color. But there are some differences in the thinner ice areas that is caused by a
[48:31] difference in wavelength. And yeah. Sea ice as we've seen is a uh difficult medium or we have the snow on
[48:43] top and the snow-ice interface and then the ice-water interface. And depending on the wavelength, the penetration would
[48:49] reach different depths. The X and C-band generally scatter from the surface and the S-band can penetrate partially uh from the surface into the
[49:00] ice volume and the L-band scatter is generally from the ice volume itself. So, because we're looking at different
[49:06] scattering mechanisms here because of different penetration depths, this can give us added information for sea ice classification.
[49:17] So, the penetration depth of different sea ice types can be seen in the image here. I've tried to indicate with green
[49:22] lines where you have roughly C-band and L-band uh in this graph. Uh for the L-band we have a higher
[49:31] penetration depth up to 1 m. For the C-band, we have it in the range of 1/2 m and for the X-band, a maximum
[49:38] of 10 cm. And changes in salinity also affects the electric constant as you can see here. So, what this means is that the X-band
[49:50] shows the largest contrast between first-year-ice and multi-year-ice. X-band is also more sensitive to the snow on the sea ice and specifically
[49:58] with snow having layers in the snow top layer. Such layers can be wind-hardened layers, rain-on-snow events with subsequent freezing, warming
[50:09] events, or ice lenses. And changes due to the snowpack means that the X-band is more sensitive to the
[50:16] onset of melt than C and L-bands are. And we will particularly explore the lower sensitivity to onset of melt in
[50:24] L-band images. So, just to show some more examples here, we have a C-band image on the left
[50:32] and an L-band image on the right, and you can see that they do provide complementary information to one
[50:37] another. another. Though, the incidence angle for those were displayed is slightly different, so it's not an entirely fair comparison
[50:45] here, here, but again, remember the ice drift in the Fram Strait is is fast, and here we have a short time
[50:52] separation. separation. At least, but you can see that the open water areas and the thin ice areas
[50:58] appear very dark in the L-band image and has a lot more texture to it in the C-band image.
[51:08] Um so, in A here, we have zones of new ice information, much larger signature variation in the C-band.
[51:17] We have some B B value B here at the top that indicates older ice flows, and you can clearly see
[51:23] this in the C-band images. And then, the number C here is brash ice and multi-sized flows of level ice, and
[51:32] you can see here the intensity contrast is is quite large in the L-band image. And then in D, we also have some shear
[51:39] zones, deformation zones, which is easy to observe in the L-band images. So, what do we do? Well, there is a lot
[51:49] of work ongoing now to combine the two frequencies. L-band and C-band has been shown now a number of times to improve
[51:55] the classification accuracy. And firstly, at the top here, you can see an C-band and an L-band image. They
[52:03] have been drift corrected so they're completely aligned with one another. And we first have results if we train a
[52:11] sea ice classifier using just the um um C-band uh data. Um and here, if we use the L-band data,
[52:23] and here finally, if we combine the C and L-band data. And hopefully, you can see here that the
[52:29] young ice areas indicated in purple. We can can by combining the two frequencies, we can much better uh identify these areas.
[52:38] They're particularly shown here in the blue and the yellow triangles. We can see much better results by combining C
[52:44] and L. The formed areas in the red uh tri- rectangle, we can also see quite well that the combination of the
[52:53] two uh is superior. And if we can look here at another example, so different images, um but we
[53:04] can see that the L-band is generally much better at detecting the deformed ice areas. Or the combination of the two.
[53:14] And at no point in time uh is the L-band completely superior. The combination of the the two of them is
[53:21] equally good or better. And if we're looking at only the combination of C and L-band can fully
[53:28] capture the young ice in the open water within lead systems correctly. So, yeah. How do we do this? Well, we go
[53:38] from the images or the information we've learned about how the SAR interacts with uh the sea ice that we can observe from
[53:46] planes or from in situ campaigns. We account for the snow. And we use this information that we've
[53:52] learned learned and take that towards the SAR images where we can then identify ridges, young ice, and refrozen melt ponds.
[54:01] And over time, we take a whole range of all the available SAR images within recent and we use them to produce these
[54:08] sea ice map. And reason for wanting to do so is that we have now have SAR systems have been
[54:16] up and running for such a long time now that we can derive a long time series of
[54:21] the sea ice extent and the cover in specific areas such as shown here. This is from a Kongsfjorden on Svalbard.
[54:29] But now the records goes back to the early 1990s and we can actually see how the the season has length has shortened or
[54:36] increased and how the ice, when it forms, how stable it is. And we use this to monitor and detect
[54:44] global changes. So, such as looking at the Arctic sea ice yearly minimum. So, from the lecture today, I hope you
[54:54] now learn that we can observe surf surface roughness with SAR images and the sea ice takes many forms. So, we
[55:01] need to account for the different roughness scales and how they relate to the sea ice itself. We need to look at sensor specifics such
[55:10] as the incidence angle and frequency and how they affect the detection and monitoring capabilities. The great news is the SAR can be used to
[55:18] detect and monitor sea ice. When we can have more than one channel, um that is great because the for
[55:25] example, the HV channel provides better separation between open water and sea ice. ice. We can for most part not derive ice
[55:32] thickness using SAR, which makes using the WMO uh classes challenging, but we can identify areas with different
[55:39] deformation. deformation. The young and thin ice is the most challenging ice type. They can look both like smooth open water and heavily
[55:47] deformed multi-year ice in the SAR images. images. But, we have learned how to account for this over time, and we can now also use long
[55:57] time series in climate models. So, now that you have seen how the different uh sea ice types um can affect
[56:06] the radar backscatter, you're now ready to perform your own sea ice classification. Ideally, we would like to use
[56:14] overlapping SAR and optical images, and many images at that. But, today we'll work on one image. So, pick one that contains both fast ice
[56:23] as well as drifting sea ice. Uh and you can see the name here, and it should also be made available to you.
[56:30] The area is in the Billefjord Bank area, and an area where we have a lot of Sentinel-1 images available, as well as
[56:37] from the Extreme Earth project. There's a data set that you can use for training your own sea ice classification.
[56:44] This also happened to be an area we visited during a cruise in April-May 2022, where we did perform sea ice
[56:50] classification validation. So, we know quite a lot of the different ice types that we're going to be looking at today.
[56:57] So, how to go about it? You need to start off first open the file in SNAP. And we're going to do the standard
[57:05] pre-processing steps. Doing the calibration, the thermal noise removal. And there are many different ways of doing this, and you can search for
[57:16] Sentinel-1 thermal noise removal if you want to know more about this. Uh Uh you can also do a filtering step or a
[57:24] multi-looking step. For now, I'll stick with a 40 by 40 m pixels that we have from the EW mode. So, first the thermal
[57:32] noise uh removal and then the calibration of the images. And once you've done that, you should get an image that looks something like
[57:40] this. this. In order to speed up the process a bit, we're going to do a bit of a subsetting.
[57:46] So, I have proposed here an area that you can cut out. Um Um this removes the fast ice area, which is
[57:53] a little bit challenging uh for any CS classification as well. So, we now have an image that we can
[58:02] classify. classify. And today we do a random forest classification. classification. And I've decided we're going to use some
[58:08] training data for this. Uh deformed ice, level ice, young ice, and open water. And training data is generated by
[58:16] identifying polygons containing different ice types. So, you need to first do a new vector data container and then start doing your
[58:27] um areas. So, So, here I'm going to provide a little bit of help. So, I first looked into the
[58:34] deformed ice areas, and you can see on the left we have the HH channel, and on the right uh we have the HV channel.
[58:42] And you need to now derive a number of ROIs. And you should remember by now that the incidence angle effect is
[58:48] important to consider, so you shouldn't just collect ROIs within one small range, but you need to spread them out a
[58:54] bit. bit. So, here I identified some deformed ice areas and also some level ice areas. And furthermore, I then continued to do
[59:06] some young ice pink areas here and some open water areas. But the reason we know they're open
[59:14] water areas is also we looked at the time series of Sentinel-1 images over this area, and we can see that the ice
[59:20] there has moved, so we we know that the area where we now have open water did not have
[59:26] uh any or the ice moved away from there uh in the last day. You can then set up your random forest.
[59:36] Pseudo classification, supervised classification, and then random forest classifier. classifier. You find the folder image with the training data
[59:44] and you then select the classes that you like to include. And for the imaging classes that I
[59:51] selected, my results turn out like this. I also now pointed towards where we actually were with the ship within this
[59:58] image. image. An area that here has been classified as open water because it's very flat area. So, the classification is not here
[1:00:06] perfect. It's something that we need to continue working on. But for now, this is to show you how you can do your own
[1:00:13] CS classification map using a random forest classification. So, I hope you enjoyed this lesson here. I'd like to acknowledge a big thank you
[1:00:25] to all the people who helped with setting up this this lecture. Wolfgang Deeke, Johannes Lohse, Kathrin Teleman, Dennis Damsha, Truls Carlsen,
[1:00:35] and Torbjørn Althoff. They provided both slides and input and helpful feedback. And I'd also like to acknowledge all of
[1:00:41] those who target ordered satellite data to overlap with the sea to data campaigns. campaigns. Without the temporal spatial overlaps, a
[1:00:49] lot of the work that we're doing now would not be have been possible. And of course, those who participated in the
[1:00:53] field work collecting the in situ data. And should you have any questions, you can contact me. Here's my contact
[1:01:01] details. And I also urge you to look at the ArCSiTE website for other um um lectures and the sister programs as
[1:01:10] well. well. There's also some resources for the latest about the Arctic and Antarctic sea ice. So, today I've only talked
[1:01:18] about the Arctic sea ice. There's a lot to be said also by the Antarctic sea ice. ice. And you can look at some extreme earth
[1:01:25] data set that will provide training data for your own sea ice classification. If you want to know more about the cruise
[1:01:31] that I mentioned a number times today, you can also see our cruise report. So, there are good references that you
[1:01:39] can look at. And for now, thank you and let's start with the questioning. Thank you, Dr. Johansson for that
[1:01:50] wonderful presentation. We've been receiving lots of questions and we are ready to start our live Q&A. Wonderful. So, we've been assembling the
[1:02:08] questions that you've been uh uh sending on a Google Doc and we will be sharing that Google Doc here with you
[1:02:15] shortly. shortly. Um I'd like to um note that as you as you've noticed, this is a new platform that we're testing uh
[1:02:26] WebEx. WebEx. And so, uh for those of you that have attended have attended our set trainings, uh it's
[1:02:34] a little different. Uh here, uh we ask that people post their questions in the Q&A window. So, if you go to the bottom
[1:02:44] right, there are three dots and if you put your cursor over those three dots, you'll have a menu that
[1:02:51] opens up with three options: Q&A, notes, and captions. So, if you select Q&A, that will open the
[1:02:58] window where you can write your questions. questions. Uh I noticed that some of you have also been writing questions in the chat box,
[1:03:06] so we've been collecting those as well. Um so, uh Dr. Johansson is here online and I will start reading the questions
[1:03:16] and she will um respond. Uh Uh all right. So, the first question, "What are we looking for between
[1:03:25] freezing and melting? Are we talking about change detection?" Go ahead, Dr. Johansson. Johansson. Uh hello. I hope you can hear me well.
[1:03:35] Yes, loud and clear. Thank you. that's good. Uh Uh so, so, I guess well, when it comes to sea ice,
[1:03:42] it has a seasonal cycle as I I hopefully covered quite quite in the lecture. Um and we have the freezing starting in
[1:03:49] September and then melting somewhere between April and June. This depends a little bit on where in the world you're
[1:03:54] located. located. Um also for the Arctic here. Um and once the melting starts, we start first having the melting of the snow
[1:04:03] pack and then we have the melting of the sea ice. And then we start seeing changes in the
[1:04:08] in the radar uh backscatter signatures. So, if we look talking about stationary ice, we do actually use change detection
[1:04:16] methods to detect when the melting starts. Uh so, yeah, we can do change detection there. Um if we are in areas such as the
[1:04:26] European side of the Arctic, our ice is drifting uh very fast. And then we're not really talking about
[1:04:33] change detection per se because we have between two images, we're simply not seeing the same ice uh in them.
[1:04:42] But of course, when the melting starts, we're seeing a change in the backscatter signature. So, I hope that sort of
[1:04:48] answered the question. Great. Thank you. Let's move on then to question number two. "If we use L-band
[1:04:59] SAR, SAR, can we can we estimate the thickness of sea ice using coherence and phase values as L-band has a higher penetration depth
[1:05:09] or maybe a band uh with a higher even higher penetration. Uh yes, we can to some degree estimate
[1:05:18] the sea ice thickness using L-band images. images. There is though a limit. So, above half a meter we simply cannot
[1:05:28] the signature is from only from within the ice itself. We no longer have a change because we have a reflection
[1:05:36] between the ice water interface. So, up to about half a meter we can with L-band or has been shown
[1:05:45] already 20 years ago with some Japanese colleagues Wakabayashi. So, I put a link here to a paper. I'm not sure if it's open access.
[1:05:56] Um Um but there we the simplest method here is simply to use the VV and HH ratio backscatter
[1:06:04] ratio. So, that obviously for those of you who paid attention with the scan data that we have which we have
[1:06:11] often in the HH HV we cannot use this ratio because we simply lacking the VV channel. channel. But
[1:06:20] But it is possible and the best results has been achieved with the VV HH. Great. Question number three. How
[1:06:31] helpful are optical satellites in detecting sea ice? I'm assuming there will not be great cloud problem near the
[1:06:39] poles. poles. Uh yeah, no optical images are great. There is a lot of applications where we would love to use them.
[1:06:48] But yeah, clouds and fog and here we're talking about Arctic. So, we have a number of months of the year where we
[1:06:54] simply don't have any daylight. So, closer to the poles it's less of a problem than in the marginal ice zone
[1:07:02] either where the sort of the ice zone ends. Uh but it is more of a problem in the
[1:07:08] summer months because we have a temperature difference between the between the water and the air. So, um, we're looking at about a cloud cover
[1:07:15] of still 70 to 80%. Um, the optical images are useful, but once we have snow on top
[1:07:24] of the sea ice, we start not being uh it's not as easy to separate the different ice types.
[1:07:31] Uh, it can be challenged to see ridges and deformation if you don't have any shadows. shadows. Um,
[1:07:37] Um, but optical images are excellent for separating open water and sea ice. So, they are helpful and when we want to
[1:07:45] train um machine learning methods, AI, or the other things, we often look for overlaps between SAR and and optical images
[1:07:55] simply to have a better uh classification and more confidence in our labeling. Okay, question number four. It starts
[1:08:08] out with a statement. Ice is not getting older. older. The different defrosting times are shorter, which means there's less ice
[1:08:16] formation, which means there's less albedo or lower albedo, which causes more local warming, which then leads to
[1:08:23] less ice formation, and even lower albedo. The question here is, has anyone tried albedo change comparison for
[1:08:31] predictive purposes? Right. So, I'm more of a SAR sea ice expert, and we cannot do a albedo from
[1:08:39] from SAR really, but there has been some uh quite recent work on albedo retrieval where it's been used
[1:08:47] to to to look into such things as how um the change in albedo will affect biological productivity. So, I provided
[1:08:56] here some links to to open access um publications where they look simply, at albedo retrieval and also from a
[1:09:05] little bit of commercial for this very large drift campaign that we had in 2019 and 2020 uh from the Mosaic sea ice campaign
[1:09:12] where they also looked at the Arctic sea ice albedo. Okay. Okay. Question number five. What sea ice
[1:09:24] properties are more easily classified by changing the polarization? polarization? Right. Yeah, so sea ice properties. Well, um the HV channel is very useful
[1:09:36] if we're looking at ridges or like this really rough and deformed sea ice areas. So, we talk about ridges and rubble
[1:09:42] fields and these things. Um the polarization then changes with interaction with the surface. So, they are very useful for these deformed ice
[1:09:50] areas. areas. As I said before, the two co-polarization channels, they're very useful for the thinner ice areas.
[1:09:57] Um the ratio there is often something that we use to simply identify where the thinner ice areas are.
[1:10:05] Um we also use the HV channel to separate sea ice from the open water. Um the open water is one of the arch
[1:10:14] nemesis that we have for automatic sea ice classification simply because the open water can have so many
[1:10:21] SAR signatures. It can have very high backscatter. It can have very low backscatter. backscatter. So, we often struggle to separate it
[1:10:28] from the deformed ice areas and also from the new ice areas. So, the HV channel is is not the ice
[1:10:36] properties itself that we're using it for, but it is we're using it to separate the open water from the other areas.
[1:10:49] Okay. Question number six. What scene sizes are used or did you use for this type of application? So, for example, the scan
[1:11:02] SAR scenes, what sizes are they? And what resolution are these images typically? typically? Yeah, so we operationally we rely on the
[1:11:12] scan SAR images for any detection and monitoring of of sea ice. And we do that because of the large aerial coverage.
[1:11:20] So, here we're talking about swath width somewhere between, well, 3 and 500 km. These days there are
[1:11:26] some even wider uh scan SARs coming up soon. soon. But we are then having a uh pixel size
[1:11:33] of typically 40 to 50 m resolution. So, when you're looking at the the actual resolution is about somewhere
[1:11:40] between 80 and 100 m. Okay, along those lines, what uh or how did you calculate the backscatter of each single point in the
[1:11:56] curve? curve? Uh and does the point represent the average of an area? Yeah, so I tried to go back and see
[1:12:03] which uh particular uh slide this was, but uh I suspect it's the one where we had the change in backscatter values uh
[1:12:11] over time. So, we at that particular area we placed our drifters on the sea ice, and therefore we follow the same ice flows
[1:12:22] uh over time. We also looked at other recently identifiable areas in the vicinity of this. So, we then managed to extract a
[1:12:31] number of ROIs from each of the images. But each point there represent the average backscatter within that ROI, so normally one ice
[1:12:42] flow. flow. And then we used that same ice flow and average the same area of the ice flow
[1:12:49] for each of the different points. So, I'm pointing that towards a poster which has a little bit more details on
[1:12:56] this. this. Okay, and uh just to clarify for those that might not be so familiar with the terminology,
[1:13:05] uh the ROI is a region of interest. Yes, so an area where we basically had made a little
[1:13:12] um yeah, a line or made a circle over the specific area and then we take all the
[1:13:18] the um um values within that circle and make an average of that. Excellent, thank you. The next question,
[1:13:28] number eight, what is the reason for very for the variations in C-band comparing comparing comparing it to L-band?
[1:13:39] Yeah, so I mean here the difference in wavelength is the um is the big thing here because it has
[1:13:44] means that we have diff- different radar penetration depth. So, in the C-band images, we are primarily seeing backscatter signatures
[1:13:53] that relates to the surface roughness of the sea ice. Uh and in the winter, we say that the
[1:13:58] snow is generally a dry snow. Um the radar penetrates through, so we're seeing the sort of snow-ice uh
[1:14:05] interface. interface. The L-band with its longer penetration depth, there we're seeing interaction within or between the radar and the sea
[1:14:13] ice itself. So, we're looking at the porosity and these things in the sea ice. Um so, that's one of the the two big
[1:14:22] changes. So, the C-band is the snow-ice interface and the L-band is within the ice itself. We also have different levels of
[1:14:32] deformation at the surface of the sea ice, where the C-band will be more sensitive to uh the small-scale roughness, whereas
[1:14:41] the L-band will be sensitive to slightly larger-scale roughness, where the difference between the 5 and the 26-cm
[1:14:47] is what's coming into play here. Okay, question number nine. And this one asks, "Does the combination of L and
[1:14:59] C-band support flood detection as well?" I'll I'll just start out by adding that uh this is probably going to be
[1:15:05] addressed in the third web third session of this webinar series. Uh so, that'll be the presentation on using SAR for
[1:15:15] detecting and monitoring floods on Wednesday, November 1st by Dr. Franzmeier. But uh if you'd like to add
[1:15:23] anything else to this, uh Dr. No, I'm very confident that Franz will be able to answer this very well, much better
[1:15:29] than I can. Okay. All right. Then let's move on to question number 10. Do we need to calibrate sigma naught
[1:15:38] before doing the alignment? Right. So, here well, the images I've been showing has been aligned. And that
[1:15:45] is if you want to actually compare the different data, yeah, you want to have them calibrated and you know, in as good
[1:15:52] state as possible. So, yeah, ideally they should definitely be aligned. Uh or uh calibrated before we align
[1:15:59] them. them. Uh I also point towards some quite recent work here between uh where they aligned L- and C-band data for drifting
[1:16:07] sea ice. So, you're really taking this to the sort of next level where uh we're trying to align something that
[1:16:13] can move um with a number of kilometers per hour if we're unlucky. Okay, question number 11 says, "I only have a PDF in my image
[1:16:27] file. Did I download it correct incorrectly?" Oh, I guess we need to look at that, but it shouldn't
[1:16:41] is all I can say for for now, but maybe we can look at that after the lecture to
[1:16:46] see that the right data is uh is there. Yeah, absolutely. We'll we'll verify that and uh shortly after the end of the
[1:16:53] session, we'll verify and um ensure that people uh have access to the right file. Question 12. Can graphs be used to monitor trends and
[1:17:05] changes in sea ice? Oh, I'm not the right person to answer this question, I don't think. Sure, so we can get back to that
[1:17:17] question. question. Yeah. Yeah. Um so this by the way, this uh document will be posted online within the next
[1:17:24] few days, so we'll clean it up and we will be addressing all questions. So, question number 13. Can you please
[1:17:33] elaborate more on the multi-frequency approach? approach? Right, so um that is something that is quite new in
[1:17:44] the sense that now we have a lot of available data. The addition of Sentinel-1 being freely available since
[1:17:51] 2015 means that we have a lot of uh C-band data available and more L-band data is becoming uh
[1:17:59] available now as we speak. You access making most of the ALOS-2 scan SAR data freely available. And there has also been a number of uh
[1:18:08] collaborative efforts between the different um space agencies in providing data data that is acquired over the same area at
[1:18:18] roughly the same time so that we can have images that are in both C and L-band. L-band. And obviously for the Antarctic, NISER
[1:18:27] will be a a game-changer in having more L-band data uh there as well. So, what we know is with the different
[1:18:34] penetration depths, we retrieve different information uh from the sea ice. And And with that, we we can use the differences in the
[1:18:46] responses in the L and the C band to get more certain of the sea ice types that we are
[1:18:53] looking at. So, we know that the L band is more sensitive to the younger ice types. Um and we can see the changes in some of
[1:19:04] the younger ice types occurring earlier in the C band than it does in L band. And this can give us some indication on
[1:19:11] the ice growth rate. We have um known for quite a long time now that the L band is much more
[1:19:19] sensitive to the roughness and deformation, so the ridges and these things that are challenging for us for
[1:19:25] the shipping. And then, by combining the the L and the C band, we can then have more
[1:19:32] information about the uh deformation areas. areas. Both the uh L and the C band have different or
[1:19:39] they have different sensitivities to the onset of melting. So, the L band is a bit slower in the take-up when the snow
[1:19:46] and ice starts melting. So, we then have a we keep sort of the winter conditions in the L band for a little bit longer.
[1:19:54] But once we get to the advanced melt season where we have the melt ponds and we have basically a completely saturated
[1:20:00] snowpack, the separation between the different ice types is much more uh obvious in the C band data. So, by
[1:20:08] combining them, we get a much more confident and reliable sea ice uh mapping uh year round. Okay, question number 14.
[1:20:23] This participant asks if this is SAR interferometry or SAR polarimetry. Oh, relating to what in the lecture?
[1:20:37] Um, I did not cover interferometry, so I guess that will should answer. There is um also some work done on SAR
[1:20:44] interferometry of sea ice to detect ridges, uh which has been uh quite successful. But I did not um take the
[1:20:52] time to include that in today's lecture. So, when I've been talking about I have been talking about the polarimetry uh
[1:21:00] rather than the interferometry. Okay, great. Uh question number 15, is it possible to use these methods to
[1:21:11] monitor rivers? Yeah, if you're talking about uh sea ice on rivers, yes, it is. There has been
[1:21:17] quite some great work done by Tucci and Gelsi sir uh recently about um looking at uh rivers uh river ice. It's fresh
[1:21:26] water ice, so it's a little bit different. We don't have the same pores and the same um SAR signatures related because we're
[1:21:33] simply missing that uh that salinity, but yeah, it's definitely possible. Okay, the next question. It's a great
[1:21:43] question, actually. I see that HV is a great polarization for detecting sea ice. Can you explain why that is? I've
[1:21:52] seen a lot of publications using VV for detecting oil slicks on the ocean, which I imagine would be
[1:22:02] similar to grease ice. Yeah. Is there a difference between these applications for HV versus VV, or is there an opportunity to further
[1:22:12] leverage VV for sea ice detection? Oh. Oh. So, the the HV is a great polarization for sea ice, that is correct. Um
[1:22:22] obviously, the the cross polarization channels we have some some issues if we have very low backscatter areas such as
[1:22:30] um um for oil slicks and also for grease ice. So, grease ice is one of those oil spill
[1:22:36] look-alikes look-alikes where where um where we cannot actually easily separate grease ice and oil. Um Um we can often not use the HV simply
[1:22:47] because of the signal-to-noise ratio. It's It's too low. Um I believe there will be a quite a lot of
[1:22:57] L band VV data using NISAR over the Antarctic sea ice areas. Um Um by tradition, when we do uh this
[1:23:05] operational monitoring, we want to have a consistency in the data acquisition. So, So, boring acquisitions that as I heard him
[1:23:14] mention where we don't change things from from time to time. So, a decision was made quite a while back
[1:23:21] that we often do the HH and HV. And this means that we know quite well um what the SAR signatures should
[1:23:29] roughly be for these uh uh uh frequency bands or sorry, for the these channels. Okay, question number 17.
[1:23:44] Is the thermal noise removal in SNAP a simple subtraction of the noise equivalent sigma zero or does it use the
[1:23:52] Nansen Center algorithm? It does not use the Nansen Center algorithm. It's a yeah, simple subtraction of the noise equivalent
[1:24:01] sigma zero with some adjustments, but it is not the Nansen Center algorithm. That is another I mean, that is easy to
[1:24:11] implement and you can go to the to the GitHub laboratory and you can get Nansen Center algorithm,
[1:24:17] but that is not the one that is inbuilt in SNAP. Okay, and along the lines of snap, then
[1:24:24] how the next question number 18, how do you decide which snap pre-processing steps are necessary to undertake when
[1:24:32] looking at sea ice? Um well, I guess here building on the shoulders of giants as the saying goes. Um this has been developed
[1:24:43] over many years by many great scientists. So, that's um um we have a would say established a
[1:24:50] some um steps that are necessary to get data into the um good quality. There are some people who use a terrain
[1:25:00] correction as well. Not everyone does, so that's a little bit of a debatable, but um yeah, what I tried to include um in this
[1:25:09] exercise here were the sort of the standard ones that most of us make use of. Question 19, going back to the use of
[1:25:19] different frequencies, can you speak speak to the use of Ku-band, Ku-band, if any, in your research and airborne
[1:25:27] sensor utilization versus satellite data? data? Um so, the Ku-bands is more related to the snow um pack. So, it is um
[1:25:40] definitely uh useful. And it's used to what sentimetry and and these other applications, but it's not yet used so much for for SAR
[1:25:49] applications. So, but I urge you to look, there is a lot of great uh science being put out
[1:25:58] now about utilization of Ku-band. Um I can we can provide some links uh after the after the chat.
[1:26:09] Yeah, and I'd like to add to that uh back when I did my PhD, part of it was
[1:26:14] using Ku-band, actually uh KU band from QuikSCAT QuikSCAT to look at the onset of snowmelt. So, the change in dielectric in snow will
[1:26:25] cause a large change in the the the backscatter. Yeah. Question and and there are many references and we can include those
[1:26:37] here. here. Uh question number 20. How do multi-frequency approaches work given that sea ice moves between images?
[1:26:46] Can a unified time series of multi-frequency images be created using band pass adjustments similar to the harmonized Landsat Sentinel data set?
[1:26:58] Oh, I'm not so familiar with the harmonized Landsat Sentinel data set to answer that side of it. Uh but yeah, no,
[1:27:06] this is one of the large challenges we have is that the ice moves. Um so, we have to
[1:27:12] adjust the uh images. Um we use one as the the master file and then we have to adjust the other one as if it
[1:27:21] was taken at the same time. I pointed towards uh work by Dennis Demchev earlier who has done some work
[1:27:29] in uh how to align the the data set. There's also been quite a work done in Canada on this. So, we provide some some
[1:27:35] links to it. But certainly the the movement of the ice um is um a big problem and something that we
[1:27:44] need to address at all times. That's also one of the reasons why um the as a project called the LC uh
[1:27:52] project that was uh is a collaboration between ESA and JAXA where they try and acquire data on the same days of the
[1:27:58] same locations. It still provides um a time separation because the L-band images images are taken later in the day than the
[1:28:05] C-band images. So, this is ALOS 2 and Sentinel 1 I'm talking about. But at least having done with a few
[1:28:12] hours time separation rather than days makes makes our lives a lot easier. Okay, question number 21. Is there a way
[1:28:25] to track the Python code used for analysis from the SNAP desktop uh so that we could use these same
[1:28:34] methods inside cloud computing formats and furthermore allowing us to train models based off of recent classifications we built in SNAP?
[1:28:45] Oh, I do not know the answer to this question. I uh SNAP is generally a little bit of a black box in this. I'm
[1:28:52] not sure it's possible to track the Python code here. We can look into that and Yeah. And um
[1:29:05] and add further information here to this answer. answer. Question 22. Is updated satellite imagery accessible free of charge and if yes, can we have a
[1:29:16] link? Um yeah, I mean when it comes to Sentinel-1, yeah, it's uploaded within a few hours at the most.
[1:29:28] Um So, yeah, with the we should be able to provide links to ESA and I guess well,
[1:29:35] NISAR is not up yet, but um we will provide links to those that are freely available right now.
[1:29:47] Um yeah, and as a heads up um the presentation on Friday by Dr. Franz Meyer, he'll be talking
[1:29:54] about floods uh using SAR to detect and monitor floods and he'll also be showing some of the tools on the Alaska Satellite
[1:30:04] Facility and uh SAR data sets that can be accessed through the Alaska Satellite Facility. Okay, so let's move on to question
[1:30:14] number 23. How can SAR images be used for permafrost studies and monitoring? Which frequency is optimum for it? And what polarization bands are
[1:30:26] useful? useful? What time period does one need to consider and can the current commercial satellites like IceSAR like Capella SAR
[1:30:36] be useful for it? So this is a multi-part question. Yes, and covers a few other um We will provide some links to works by
[1:30:48] others who does use SAR images for permafrost monitoring um after the Q&A here. Uh L-band frequency is generally one of
[1:30:59] the preferred uh frequencies. Um and I believe that they are using the VV band, but again, I'm going to look
[1:31:09] this up. Um We obviously when it comes to the permafrost the the time period of most importance is when the permafrost starts
[1:31:18] uh melting. And then also having a reference in winter when it's not melting. Um Um the current commercial satellites uh are
[1:31:30] quite useful for these things. They also cover cover Some of them have a very high repetition frequency and others they provide data
[1:31:38] the same time as we have optical sensors as well. So the the commercial satellites are certainly uh providing quite a lot of useful um
[1:31:46] data for these applications. Okay, question number 24. Can Can Uh sorry. I think So that's been repeated.
[1:32:03] Uh question 25, what have you found are the largest challenges to using SAR data? It seems like there is a lot to
[1:32:11] consider when using SAR. Uh yeah, certainly there there is a lot to consider. Um So, the biggest So, I'm just now going
[1:32:23] to talk about sea ice. So, the biggest challenges we have there is the separation of multi-year ice from young
[1:32:29] ice. And also separating of open water from from um um all the different ice types. This is a challenge we've been battling
[1:32:38] for for many years already uh simply because the high backscatter that we get from some of the
[1:32:46] young ice types, it looks very similar to those of the multi-year ice. So, we run the risk of
[1:32:52] telling ships that we have an area where we have a lot of deformation when in fact we'd only have 5 cm of sea ice.
[1:33:01] So, this is one of the largest uh challenges for the for the ice classification when using SAR images.
[1:33:10] But yeah, I mean I I was bringing up all the challenges that we need to consider. Um
[1:33:16] Um And for all of these challenges, if we know what they are as humans and also we
[1:33:21] can train our algorithms um to account for them. So, like if we see something that we don't we're sort
[1:33:28] of wondering is this actually true? If we know what kind of challenges the SAR images are having, we can then make a
[1:33:35] decision that okay, yeah, this was a challenging uh image that we were looking at. But I actually trust my
[1:33:41] result because uh of the knowledge that we have of the SAR image itself. If that makes sense.
[1:33:53] Yeah, great. Thank you. Um before we move on to the next question, there was a um um I want to
[1:34:00] address uh one of the previous questions about about um SNAP up the tracking Python code from the
[1:34:10] SNAP desktop and someone uh participant typed that there is a Python API for accessing SNAP tools and the best way is
[1:34:23] to install SNAP and configure the Python accessibility during the install process. So, we'll add this information to that answer.
[1:34:34] Um Um All right, so let's move on then to the next question. Which is a very interesting one, number
[1:34:44] 26. Do changes in salinity values in the Arctic Ocean from melting of freshwater glaciers on Greenland affect the
[1:34:53] spectral spectral I I guess spectral and backscatter signatures of sea ice. Well, yes, so if you have some of these
[1:35:01] areas where you simply have a freshwater layer, you are in fact then freezing freshwater rather than freezing um salt
[1:35:10] water. water. So, yeah, then you have the similar situation as when you have the the rivers that we talked
[1:35:16] in one earlier question. Is that you have a freshwater uh ice layer. Okay, question 27. Question 27 says,
[1:35:35] "I'm interested in knowing ways to solve the incidence angle effect and it's usually not clear in the literature
[1:35:43] and in the community. Usually, it refers to SAR scan images and some people even believe the calibration step in SNAP
[1:35:50] deals with it. Which procedures do you recommend to eliminate the incidence angle? And do we have to apply them to
[1:35:57] different types of images um such as ScanSAR and Stripmap? Especially for strip Stripmap in a single SAR image, maybe we don't apply
[1:36:09] the incidence angle uh correction. However, do we need to have in keep in mind um um do we need to have in mind, for example,
[1:36:20] normalizing to a specific angle? Okay. So, so the bottom line here is uh do we need to correct for incidence
[1:36:28] angle effect depending on the type of image? image? Uh I would argue that we do need to
[1:36:35] account for it. Um some people will then calibrate instead of using sigma naught using beta or gamma as a a simple way of
[1:36:43] adjusting for the incidence angle effect. effect. The calibration step in SNAP does not deal with incidence angle effect.
[1:36:53] Uh so, I think I pointed to work by uh Malik Muhammad over CI's where he then defined an incidence angle
[1:37:02] uh effect or a what he is using then to adjust entire scene. There is also some work um
[1:37:09] by Park in the cryosphere. We put provided links um soon where they also used a single or one value across the
[1:37:18] scene. Um that's the simplest way of doing it. We say, "Okay, we know something about the incidence angle
[1:37:24] effect and we're going to apply a um a one slope fixing it all um approach. Um Um yeah, we definitely need to apply them
[1:37:36] to ScanSAR images. I think I'm hoping I've proven to you that the the effect is there and we need to deal with it one
[1:37:42] way or the other. Um the Stripmap images we have less of an effect simply because we have less of an incidence angle um
[1:37:51] degree range um in these images. Um but you need to account for especially if you would compare for
[1:37:58] example two strip map images over the same area but has different incidence angles. Like how do you compare a value
[1:38:04] of minus 25 in one image and you say next image is minus 35 decibels. decibels. Is that because of different incidence
[1:38:12] angle or is that an actual effect? So especially if you're looking at time series we we really need to account for
[1:38:18] it so that we are comparing apples and apples. Okay, question number eight 28. You mesh mentioned an advantage of combining SAR
[1:38:31] scenes with different bands. Are there any plans to design a satellite with multiple or different SAR bands? I think that's everyone every
[1:38:41] radar remote sensing uh uh scientist stream, right? Yes. Yes. Um NISAR will have L and S band of
[1:38:51] course. So there we have two two SAR bands that will be acquired near near simultaneously but yeah, there is um
[1:39:01] So yeah. Yes, I'm looking forward to NISAR which it it will be launched uh the beginning of
[1:39:12] 2024. So that's going to be a great day at NASA. Yes. Yes. Question 29. SAR is said to be
[1:39:20] transparent to dry snow. However, there are studies from the CIS and glaciology community on this. How useful is the use
[1:39:29] of SAR for snow thickness? And I will appreciate some references if possible. Um so the KU band that was raised as an
[1:39:39] earlier question, there we can start talking about the snow thickness. It's not necessarily that easy with the X C
[1:39:47] and L band images that are we primarily talked about today. But But yeah, we will provide some some
[1:39:56] references and yeah, we are always talking about saying that the SAR is transparent to dry snow, but I think
[1:40:02] more and more evidence is showing that that is not entirely true. We're also starting to have more of rain
[1:40:10] on snow events in the winter in the Arctic and that means that we are actually the snow is not dry anymore. We
[1:40:17] cannot say that just because we're in the freezing season, we're having a dry snow pack. And also when we get to the marginal ice
[1:40:24] zone, we have a lot of waves that splash up on the on the ice itself, so there the snow
[1:40:29] also isn't dry. Uh but we'll certainly provide some some references to to this. Okay, question 30. Is there a possibility to use SAR to
[1:40:44] detect surface water pollution? Um well, I guess we'll refer to the oil spill lecture from from last year.
[1:40:55] Um Um and I'm sure there's some other earlier NASA set lectures as well on surface water pollution.
[1:41:04] Yes, absolutely. Those are using optical data and we can include those links here. Question 31. Does the ionosphere or rainfall play a
[1:41:17] role in pulse retrieval in SAR images? Is that something taken into account in the quality control band? And if it
[1:41:25] is, is it a reliable indicator of the quality of the pixel? Um yeah, certainly the ionosphere is
[1:41:32] playing a role in the in the quality of the SAR images, particularly when we get to to L band.
[1:41:42] There for most of the I think NASA and ESA and JAXA and the other satellite service data providers, they do quality
[1:41:50] control checks on this. But there is generally a little bit of ionospheric effects remaining at at times.
[1:42:00] times. It's less of a problem in the in the X and the C band. Wonderful. So, that
[1:42:10] marks the end of our questions. Unless there's anything else coming in right now. No, that that was it.
[1:42:19] So, So, and it marks the end of this first session. I I would like to thank the
[1:42:26] ARSET team for all their efforts in making this possible. Solomon Hudson-Odoi, Block Ben Block Lovins, Natasha Johnson-Griffin,
[1:42:37] Sarah Cutshall, Sean McCartney, Jonathan O'Brien. And I would like to thank all participants and remind them that the
[1:42:46] recording for today's session will be online in the next couple of hours. I believe the presentation is already online.
[1:42:56] And finally, remind you that the next session which is on detecting of subsidence due to groundwater extraction using
[1:43:04] interferometric synthetic aperture radar, radar, will be next Tuesday, October 31st. And it will be a lecture by Dr. Eric
[1:43:14] Fielding from JPL at the same time. I would I'd like to specially thank our guest lecturer today, Dr. Malin
[1:43:24] Johansson for a really great presentation and again for being so generous with her time and sharing her
[1:43:30] knowledge and experience. So, before I close, Dr. Johansen, would you like to say any final words? No, I'm just uh happy to receive all of
[1:43:39] these uh very uh interesting questions as well. It's It's great to have such knowledgeable audience. Absolutely. Absolutely. So, with that, then
[1:43:52] we will see or hear each other uh next Tuesday. Wishing everyone a great day. And um uh
[1:44:01] keep uh tuned for the uh Q&A transcript and the recording. Thank you, everyone. Bye-bye.
