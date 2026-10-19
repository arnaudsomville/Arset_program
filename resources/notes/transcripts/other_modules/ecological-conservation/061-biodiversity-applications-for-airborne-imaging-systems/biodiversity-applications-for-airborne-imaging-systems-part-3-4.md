# Biodiversity Applications for Airborne Imaging Systems, Part 3/4

`https://www.youtube.com/watch?v=qmE7FTyw6H8` · id 159 · 1:29:24 · module 76 — Biodiversity Applications for Airborne Imaging Systems

[00:01] Hello and thank you for joining us for part three of our series biodiversity applications for airborne imaging
[00:08] systems. My name is Britney Baugher and I'm joined by my colleagues Juan Torres Perez, Sativa Cruz, Amber McCollum, and
[00:16] our guest speakers for today Atticus Duvall and Phil Townsend. For this training, we have four sessions, each being 1 and 1/2 hours
[00:31] long. We started last Monday on March 27th. Today, April 3rd, is our third session and our fourth and final session
[00:39] is this Wednesday, April 5th. You can find all the course materials on the website listed here and you can also
[00:46] email myself or my colleagues at the email addresses shown here for any questions. There are two prerequisites for this
[00:56] training, an understanding of the basics of remote sensing and hyperspectral data for land and coastal systems. We have
[01:03] our courses on those concepts listed here. For this series, we will have one homework assignment. The link to the
[01:13] homework will be made available during our last session and will be due on Wednesday, April 19th. The homework will be a Google form that
[01:21] you submit online and if you attend all the sessions and complete the homework by the deadline, you will receive a certificate of
[01:28] completion. But, please be patient as it takes a couple months to process and send out all of the certificates.
[01:37] As I mentioned, this series will consist of four sessions. During our previous session, we provided a general overview
[01:44] of using thermal and lidar data from airborne campaigns and in today's session, we will understand how airborne
[01:51] campaigns monitor terrestrial systems. I'll quickly cover our learning objectives for this training. By the end of this training, attendees will be able
[02:02] to understand the applications of hyperspectral data, multispectral data, and lidar data for biodiversity monitoring and analysis and compare case studies that have used
[02:13] these data sets in preparation for upcoming NASA satellite missions and airborne campaigns. After the lecture portion of the
[02:22] session, we will have time for a question and answer portion. So, please feel free to type your questions into
[02:27] the questions tab along the way and we will try to get to as many as possible at the end. We will also post the
[02:33] questions and answers on our website after the training. If we don't get to a question, you can also email me or my
[02:39] colleagues at our addresses listed on the previous slide. For our agenda today, we will start with Atticus Duvall who will tell us about
[02:49] capturing the structural component of wetland biodiversity. Then, Phil Townsend will explain assessing biodiversity with plant functional traits.
[02:59] traits. We will then wrap up the session with some questions and answers. Again, feel free to type your questions into the
[03:04] questions tab along the way and we will try to get to as many as possible at the
[03:08] end. We will also post the questions and answers on our website after the training. So, now I'd like to hand it over to our
[03:17] guest speaker Atticus Duvall who is part of the University of Maryland and NASA's Goddard Space Flight Center. He'll be
[03:24] providing us with some information about capturing the structural component of wetland biodiversity with airborne lidar. Great, thanks so much, Britney.
[03:35] My name is Atticus Duvall. I'm an assistant research professor at University of Maryland and I sit at NASA
[03:43] Goddard Space Flight Center. Today, I'm going to talk to you about some of the work that we've been doing
[03:50] looking at understanding the structural component of wetland biodiversity and we're doing this through measurements with airborne laser scanning or lidar,
[04:00] which stands for light detection and ranging. So, the first question that we really need to consider in this talk is how do
[04:15] we actually measure biodiversity? The way in which we measure things is extremely important. So, having a consistent way to describe and represent
[04:28] something as complex as biodiversity is extremely important. So, luckily through international efforts in the scientific community like
[04:39] GEOBON or the Group on Earth Observations Biodiversity Observation Network, Network, there have been some really clear definitions put forward for the
[04:48] scientific community on how we measure and define what biodiversity is. And these variables that we're actually using to quantify biodiversity,
[05:01] we call them essential biodiversity variables. Essential biodiversity variables were suggested and put forth by GEOBON to really provide a framework for
[05:17] scientists to consistently describe different aspects of biodiversity across a number of different systems. The ideal essential biodiversity
[05:28] variable has several components. It needs to capture the critical scales and dimensions of biodiversity. It needs to be a biological variable as
[05:39] well as a state variable. It also needs to be sensitive to change and be agnostic to many different types
[05:48] of ecosystems. And finally, it needs to be actually measurable or technically feasible to measure measure and economically viable to measure these
[06:00] things through time. So, in other words, it needs to be able to be easily measured without being too
[06:07] expensive. expensive. So, here on the right, you can see a nice diagram of how remote sensing actually plays into our measurements of
[06:17] essential biodiversity variables. On the bottom and the smallest circle, we can see the primary observations of biodiversity, which are captured using
[06:31] either in situ monitoring, plot data, or remote sensing, which we'll mostly be focusing on today. So, these two different ways of
[06:41] measuring biodiversity in in ecosystems helps really to inform our understanding of how biodiversity variables vary through space and time.
[06:58] Now, one of the most critical categories of essential biodiversity variables has to do with ecosystem function. The function of the ecosystem
[07:08] has to do with the performance of these ecosystems and how the organisms in it really respond to different changes in
[07:15] the environment. Within this category, there are three important essential biodiversity variables. variables. They include primary productivity, ecosystem phenology, and ecosystem
[07:29] disturbance. disturbance. All of these different dimensions of biodiversity variables help us understand how the environment impacts an ecosystem and how ecosystems respond
[07:42] to that. But for today, we're going to be focused very heavily on ecosystem structure. Ecosystem structure is a category of
[07:56] essential biodiversity variable that describes the spatial arrangement or spatial arrangement of ecosystem units in an ecosystem. Basically, these units are made up of
[08:10] the organisms that live in these different environments. So, the structural variables used as essential biodiversity variables include live cover fraction,
[08:23] which is basically the living fraction of area covered by organisms in an ecosystem. ecosystem. It also includes ecosystem distribution,
[08:32] which tells us the extent of similar ecosystem units, and ecosystem vertical profile, which we'll be talking about a lot
[08:43] today. today. Ecosystem vertical profile describes the distribution of biomass in ecosystems, but it can also be described by the
[08:55] distribution of foliage, which will be the primary way that we'll represent this variable in today's talk. So, on the right, we can see two
[09:05] contrasting wetland ecosystems. At the top, we have a black ash wetland in Minnesota Minnesota in the United States.
[09:15] In contrast, on the bottom, we have a 50 m tall mangrove forest in Gabon that we'll actually be talking about today.
[09:24] But here, comparing these two ecosystems, we can really see how the two have very different vertical profiles and
[09:33] structure. So, for today's talk, we'll be focusing on wetlands in three distinct ecosystems around the world. The first case study will take place in
[09:48] Wax Lake Delta in Louisiana in the Gulf of Mexico, United States. Here, we'll be using the data and airborne laser scanning to
[09:58] understand the different aspects of ecosystem structure as classified by hyperspectral imaging. The next case study takes place in
[10:07] Mozambique in the Zambezi Zambezi River Delta. Delta. Here we'll be using a higher resolution airborne laser scanning data set
[10:16] to map the distribution of ecosystem structure in terms of canopy height and foliage profiles within a mangrove
[10:24] forest. forest. And then finally, we'll move to the tallest mangrove forest in the world in Pongara National Park, Gabon,
[10:33] where we'll use full waveform airborne lidar to understand the structural profiles in this unique mangrove system. So first, we're going to start with our
[10:49] case study in Wax Lake Delta, Louisiana, United States. Here we can see an airborne image of a portion of Wax Lake Delta.
[11:00] And what's really nice about this image is it gives us an idea of all the different structures we might expect to
[11:07] find in these different kind of vegetation classes in the ecosystem. You can see some of the grasses in the
[11:16] center of this um this delta island, and on the fringes we see some of this uh black willow species, a tree species
[11:26] that uh we'll be talking about in this case study. But let's first start with how Wax Lake
[11:33] Delta was actually formed. Wax Lake Delta was created after a major flooding event in 1973. So on the left-hand side of the slide,
[11:44] you can see imagery prior to the flooding. flooding. And on the right-hand side of this image, you can see
[11:52] Wax Lake Delta after this flooding event. event. The contrast really is dramatic. A significant amount of land area was
[12:01] created by this deposition of sediment after this flood event. Wax Lake Delta is also the focal site
[12:12] for the Delta X field campaign led by PI Marc Simard. In this mission, UAVSAR, which is an
[12:20] L-band synthetic aperture radar sensor, and AVIRIS-NG, which is a hyperspectral imager, are combined to create a map of
[12:29] ecosystem structure and species assemblage classification. So really, as you can see on this map on the right, the different colors here
[12:39] represent different clusters of ecosystem types in this delta, and uh it's all from this hyperspectral data classification.
[12:51] classification. The red box you're seeing right here is our little small subset study area that we're going to focus on in our case
[13:00] study today. So if we zoom into that, we can see uh some airborne lidar data that exists over this area in Wax Lake
[13:12] Delta. Delta. In this airborne lidar data, you can get uh the detail of the different structures of these uh these different
[13:21] vegetation classifications, which are overlaid on top of the 3D data um in this picture on the slide. So the
[13:29] different colors represent the different species classifications from the hyperspectral imager. So we're going to zoom in even further
[13:39] into this little red box. Here we can really start to see some of the detail that this airborne laser
[13:48] scanning data was able to collect. This first image you're seeing here is colored by reflectance of the laser
[13:57] return intensity, which basically is the brightness of the laser light that reflects off of the vegetation. We can also overlay that vegetation
[14:07] classification before, and interestingly, we can see some areas that are are most likely misclassified by this hyperspectral imaging in part
[14:20] because they're primarily accounting for the spectral information, but not necessarily accounting for the structural information, which we can actually
[14:30] caption with this airborne lidar data. And now, I wanted to take us on a trip through this data set so you can really
[14:40] start to appreciate some of the vegetation structures that we're able to capture capture with 3D data. Here we can see in really incredible
[14:52] detail the types of things that come out of this airborne lidar data set. We can see the trees on the fringes here
[15:00] colored in purple and um and pink. We can also see some of the grasses on the internal
[15:07] internal uh portion of these islands that, you know, really highlight the the strengths of what this airborne laser scanning data can do.
[15:21] Now, with this 3D data, we can start to quantify the differences in ecosystem structure for each of the vegetation
[15:30] classes within the area. On On uh uh for this entire delta area, we can see that we've classified it into five
[15:43] different different vegetation classes. We have elephant ear, dotted smartweed, grasses, yellow lotus, and black willow. If we focus on the left-hand side of the
[15:55] slide, uh you can see kind of some of the lowest stature vegetations and how the lidar measurements were actually
[16:03] able to reconstruct in fine detail the different structural signatures and profiles of these classes of plants. So
[16:12] for example, we have the yellow lotus on the bottom left, where it has a peak at this extremely low elevation range.
[16:21] In contrast, we have the dotted smartweed grass that extends up to around 1.5 m in height. In contrast to these lower stature
[16:32] vegetation types, we also have the black willow species, uh which is this tree species in the delta ecosystem,
[16:41] and we can see from the profile here on the right that it extends to almost 20 m
[16:46] in height above ground. Really, one of the things that I find most interesting about this structural profile and how it's
[16:56] very informative for what we want to do is that it is a is a pretty close match
[17:02] to the form and structure of the tree itself. If we compare this picture on the right of the black willow to the
[17:11] structural profile, we can almost imagine what the crown of that tree looks like in the 3D data, and lidar is
[17:19] able to provide that information. Now, I also wanted to uh tie in some of the work that I've
[17:30] just presented to uh a recently awarded NASA biodiversity grant project um we're calling BioREACH. Uh it's part of the
[17:40] BIOSCAPE mission that um you've heard about in this session. And basically, the the idea for this particular project is to take some of
[17:51] the methods that I just presented and apply them to different estuaries in South Africa. And so, for the project, the
[18:02] um our team has three main goals. Basically, they're to map the plant functional types in this area,
[18:10] um and map the essential biodiversity variables across all these different estuaries, and then understand the relationship uh between the imaging
[18:21] spectroscopy spectroscopy classification, classification, like we saw in this case study, and the structural profiles that we're collecting with uh airborne
[18:32] uh lidar. The next step in this project that we're going to to do is basically to determine
[18:40] and kind of more in detail understand the drivers of biodiversity within all these different estuary classes. And then finally, we want to look
[18:51] forward into the future to understand what type of climate impacts might be occurring in these different estuaries,
[18:59] and uh what we can learn with, you know, this higher resolution 3D data with regard to what's happening in the
[19:07] future. So just to sum up, I think we can really see with this, you know, relatively small case study, how lidar can really
[19:19] dramatically improve our understanding of vegetation structure, as well as really improve our ability to improve uh vegetation classification
[19:31] in these more complex wetland environments. So for our next case study, we're going to move to uh Mozambique in the Zambezi
[19:44] River Delta. So the Zambezi River Delta is uh the outlet of an extremely large watershed and comes in more than a million square
[19:56] kilometers kilometers and encompassing eight African countries. This Delta has mangroves which are ecologically and economically very important to the area in part because
[20:11] they're extremely high carbon density and biodiversity. They also serve as an important buffer that protects coastal communities in the
[20:21] area area and really together all of these factors make this ecosystem an important one for mitigating climate change, reducing
[20:30] coastline loss and importantly protecting biodiversity. So within the same area, we also have access to a high-resolution airborne
[20:48] lidar campaign that was flown in 2014. The year prior to that field data was collected on the ground for around 140
[20:57] different plot locations where surveyors surveyors went and measured compositional information of the forest and forest structure measurements which means
[21:08] measurements of tree diameter and height of trees. One of the really amazing things about having these data is that
[21:17] high-resolution airborne lidar is really exceptionally rare in mangrove ecosystems. ecosystems. So it presents a really excellent opportunity to understand structural
[21:29] profiles and mangroves in this particular type of ecosystem. So when we use airborne lidar data to map forest structure, one of the things
[21:43] we often need are maps of forest height. So So we create what are called canopy height models.
[21:52] models. These models provide a wall-to-wall map of height of the forest in extremely high resolution, often around 1 to 5 m
[22:01] resolution. resolution. So to create a canopy height model, we first need to read in lidar data into
[22:10] whatever coding language we're actually working with. I I mostly personally use the R coding language. But once we have
[22:17] it in there and can actually work with the lidar data, data, the first task is really to identify the
[22:25] points in the lidar that are considered to be the ground and and merge all of these ground elevation
[22:32] points into a continuous surface model that represents in high resolution the terrain of the area that was surveyed.
[22:42] The next step is to identify the point or the points at the top of the canopy in the forest.
[22:50] We need to understand where the top and highest elevation of the forest actually is to create these canopy height models.
[23:02] Once we identify these points, we can similarly just merge those points into a higher resolution model of the top of
[23:11] the canopy. And then actually with some relatively simple math, we subtract out the terrain from the canopy elevation model.
[23:22] And what we're left with is a high-resolution map of forest heights. So So this type of processing is very
[23:32] applicable for a lot of things and forest height and biomass for instance are are considered directly to be essential
[23:43] biodiversity variables. So in the context of biodiversity mapping, it's pretty easy to see how this is relevant.
[23:51] Now we're going to take just a quick fly-through of this data set and canopy height model that we created. Here you
[23:58] can really see a lot of the detail that we're actually capturing. This is a 1 m canopy height model and so we're getting
[24:05] a lot of the different textures of the top of the canopy. All of this can be used to create continuous biomass maps
[24:13] that are high precision and give us another map of an essential biodiversity variable that we need. But for today, I wanted to understand a
[24:26] little bit more about what was going on beneath that canopy. I think that's one of the interesting
[24:32] pieces of what we can learn from lidar data that is often relatively unexplored and is kind of on the the cutting edge
[24:41] of what we need to do to understand aspects of forest structure that are relevant for biodiversity. So
[24:51] So here you can see a similar type of processing that was conducted at our previous site but instead here we're
[24:58] converting the structural profiles measured with the lidar data into estimates of the density of foliage in the forest canopy.
[25:08] We're basically able to do this by using some basic assumptions about how light moves through plant canopy.
[25:16] In the set of figures on the left, we can see each one of the sites each with
[25:22] several different sub plot structural profiles. And what we've done is we've ordered these structural profiles by lowest height to
[25:31] tallest height. And what we can see really is that different sites have very different structural profiles depending really
[25:40] strongly on the height of the forest. What I also think is interesting about this is that based on the height of the forest alone,
[25:50] sometimes sometimes you're unable to know with perfect clarity what to expect within that forest. So there really is an amazing
[26:01] amount of utility in having this three-dimensional data that basically passes through the forest canopy and tells you something about what's hidden
[26:10] beneath the canopy. So in general, what we found was that there were around six height-dependent mangrove structural signatures.
[26:24] In this mangrove forest again, we can see very clearly how mangrove forest structure changes with respect to
[26:30] changing forest heights. But also what's kind of interesting about this is that it gives us another way of seeing how the mangrove ecosystem
[26:39] really changes kind of through time and development development as a stand as a forest. We really find that the forest goes from
[26:50] a low and dense canopy which we would expect to either open or closed canopy tall forest with all these different
[26:59] kind of structural profiles that are characteristic of what we actually see if we go into that forest and walk
[27:07] around and look look to see what the structure is. So to summarize this case study, we really found that lidar is also a really
[27:20] important technology that helps us understand understand how mangrove ecosystem structure changes with respect to height. So finally for our last case study, I
[27:34] want to move to Pongara National Park in Gabon. So the Gabonese mangroves in Pongara National Park are the tallest in the
[27:45] world. world. A study by Samard et al. in 2019 found that the mangroves in this forest reach
[27:53] as tall as 60 m above ground. The structure of this type of forest is really of particular interest to our research
[28:03] group and many other ecologists and conservation scientists because it offers this really unique perspective on how mangrove structure evolves and
[28:14] develops in extremely tall Now I'd like to show you a 3D fly-through of this extremely rare type
[28:25] of mangrove forest. This three-dimensional data was created using the TanDEM-X satellite which is a a type of PolInSAR technology.
[28:36] It allows us to create 10 m canopy height models in mangrove forests globally. They look very similar to the
[28:45] lidar data that we saw in a few slides past. The true color imagery overlaid on top of this is from the Sentinel image that
[28:54] we saw at the beginning of this this this case study section. But really what we're getting from this
[29:02] is hopefully an understanding of the kind of detail that we can get and just how interesting and amazing these tall
[29:10] mangrove forests are. So in 2017, we visited this really rare mangrove forest to study forest structure for the AfriSAR field
[29:23] campaign. campaign. Here on the left is Lola Fatoyinbo, the PI on the project here she's measuring the height of the mangrove trees in this
[29:33] forest. forest. The field work in this area was there's really no other way to put it, extreme and it took a lot of effort, but
[29:44] it really was an experience that I'll never forget. Here's a picture of a few of the sites
[29:52] that I was I was able to visit while doing fieldwork there. This is some of our crew when we're out in the field and
[30:01] I think one of the the things we can see clearly from this is doing fieldwork in mangroves is is dirty
[30:10] work, but it's really rewarding and there's really no other forest like this. So, if anyone has the opportunity to visit
[30:18] mangroves like this, definitely do it. But, one of the things I wanted to show just to kind of
[30:26] give you a sense of scale is that when we were there, one of the things that I was doing was I
[30:34] was collecting three-dimensional laser scanning data from the ground. So, what you're seeing here is not actually a photograph. This is an
[30:42] infrared three-dimensional image captured with high-resolution ground-based laser scanning data. And I don't know if you can see it, but
[30:52] in the bottom right of the screen, there's a person standing standing on the roots of a gigantic mangrove
[31:01] tree. tree. These trees reach nearly 60 m in height and often we were unable to reach the
[31:11] place where we were supposed to measure tree diameter, which was several meters above this person's head. So,
[31:21] So, just to give you a sense of scale of the type of mangroves we're dealing with here. Really, there's nothing else like
[31:28] this in the world. So, very unique opportunity. A place to um a place to explore and understand more
[31:36] about. In 2016, prior to us visiting Pongara, Elvis, the land vegetation ice sensor, which is one of NASA's airborne lidar instruments,
[31:51] flew several sites in Gabon for the AfSAR airborne campaign. One of these sites was Pongara National Park.
[31:59] Park. If you're curious about any of the details details and specifications of the flight, you can see them in this table on the left.
[32:10] Um but, ultimately, what we want to do with this full waveform lidar data is to analyze and understand structure in this
[32:20] rare and really special tall mangrove forest. forest. Here's just a few of the flight lines that went over
[32:30] Pongara National Park, so you can get an idea of the coverage we had from the Elvis sensor.
[32:39] So, after looking at the Elvis data, we found that in low and medium stature forests, which we define as 0 to 10 m
[32:49] and 10 to 30 m size classes, we had around three different structural signatures per class. So, on the left, you can see the lowest
[32:58] size class up to 10 m and how the structural signature really varies with the distribution of the location of the
[33:08] kind of high-density foliage in the stand. stand. In the mid-stature forest, we also find that there are around three different
[33:19] structural signatures that that were in this forest. We have two with higher understory density and one that actually has open
[33:29] understory and high-density canopy foliage. foliage. And on the right-hand side of the slide, you can really see
[33:38] the stark contrast between these two different size classes and how that changes the structure of this mangrove
[33:46] forest. So, at the top, we have a 2-m stand, which most likely corresponds to this this the structural profile in blue on the
[33:56] left-hand left-hand pane. pane. And And on the bottom picture, we have what is most likely corresponding to the red
[34:08] structural profile in the right-hand pane. pane. But, what's interesting about this is that with the lidar data, we're actually
[34:17] able to detect these different structural signatures and see how they relate to height in this different in
[34:26] this really cool mangrove forest. Finally, if we start looking in the tallest mangrove stands, for this we're
[34:35] talking about stands greater than 30 m in canopy height, which in terms of rarity in the global distribution of
[34:44] mangrove mangrove mangrove heights, we're talking about the 95th to 99th to 100th percentile of heights distribution in the entire world. So,
[35:00] understanding what's happening between 30 m and 60 m in canopy height is really really a unique opportunity that we can
[35:08] only do in this type of mangrove stand. And what we found was really interesting. We found five different
[35:17] unique structural signatures for these tall mangrove forests. Each of these structural signatures was strongly influenced by the location of
[35:27] the peak of the understory or the canopy foliage density. Some had high understory density and all others really
[35:36] had a very open understory and high density in the canopy. The picture on the right um we can kind of classify, I would say,
[35:47] as a type two structure. Um so, the second pane in these figures, which corresponds to high canopy density
[35:56] and open understory. And, you know, this type of structural classification will ultimately be super valuable for us to understand
[36:05] actually how these forest wetlands function. And so, it's amazing that we have this data to be able to tease this
[36:14] information out. Now, finally, I wanted to end this section showing you some of that high-resolution high-resolution three-dimensional data that we collected
[36:26] on the ground in Pongara National Park. This three-dimensional data was collected with our terrestrial laser scanner and really it shows the
[36:35] incredible high-resolution detail. You can see me sitting on a mangrove root right there in this in this
[36:43] three-dimensional data. So, it's able to capture leaf-level detail and all the, you know, kind of complexity of the root
[36:52] structures and the trunk and and the foliage profiles, all of which we're using to improve our understanding and
[36:59] estimates of biodiversity and structural diversity in this system. So, to summarize this case study, in this tall mangrove forest, lidar was
[37:16] able to improve the classification of our ecosystem structural signature and improve our understanding of structural diversity in general.
[37:25] So, if we consider everything that we just discussed in this talk, it becomes really clear that we can
[37:31] characterize the fine-scale structure of ecosystems in really amazing detail. And what's really really interesting, I think, think, is that lidar can really precisely
[37:51] estimate estimate what what you know, what we all kind of need in the biodiversity mapping community, these essential biodiversity variables.
[38:01] But, I would argue that it actually takes it takes us to a step further than that because
[38:09] now it's allowing us to pull out information that we previously didn't easily have access to and might actually
[38:19] allow us to systematically have available new types of essential biodiversity variables that we have not really yet defined
[38:30] in the context of the EBVs defined by GEOBON. GEOBON. And now, what's really cool is that lidar is actually available available
[38:41] globally with the Global Ecosystem Dynamics Investigation or GEDI. Um Um and what's amazing about this mission is
[38:50] it actually enables global-scale mapping of of wetland structure and function. So, all the things that I presented
[39:02] today showing you the structural profile, showing you canopy height estimates, GEDI can either directly measure or improve our estimates of
[39:11] this. And our group is actually already using this data set, the GEDI data, to create global mangrove height and biomass maps.
[39:24] And just to give you kind of a taste of some of the things that we can do,
[39:28] if we merge our high-resolution height estimates of collected with TanDEM-X data, with GEDI, we can start to get
[39:39] really really amazing detail and estimates of both canopy height in mangroves as well as biomass. biomass. And ultimately, this will really help us
[39:51] be able to understand the structural signature of mangrove forests, as well as many other wetland, um, wetland
[39:59] ecosystems around the world. So, what I'll say is this map is, uh, hopefully going to be out relatively
[40:08] soon. And so, uh, stay tuned for, uh, that coming publication. The last thing I wanted to say is that,
[40:19] uh, this, you know, all this work is really a group effort. This is, uh, the Lola Lab, uh,
[40:28] led by Lola Fatoyinbo. We're all members here, and, uh, I just want to thank everyone who's involved with, um, all
[40:37] the different aspects of this work with mangroves and other other ecosystems, um, wetland ecosystems. So, thank you to
[40:46] them. them. And thank you to everyone here today. I really appreciate it. Thank you for sharing that with us,
[40:56] Atticus. Atticus. And now we'll hear from Phil Townsend from the University of Wisconsin-Madison. Wisconsin-Madison. He will tell us about accessing
[41:03] biodiversity with plant functional traits using hyperspectral visible to shortwave infrared imaging spectroscopy data and lidar data. Thank you, Brittany. I'm looking forward
[41:18] today to talking to you about the use of airborne hyperspectral imagery for biodiversity and ecosystem functioning. Hyperspectral imagery refers to
[41:29] something that we call imaging spectroscopy. Spectroscopy has long been used for the study of vegetation. In the
[41:37] case that you see here on these figures from studies that go back almost a century, we know that the reflectance of
[41:45] vegetation changes across different wavelengths, shown here on the x-axis. So, for example, this hump that we see
[41:53] here at 550 nanometers, those are at the green wavelengths, which explains to us in part why vegetation is green. So,
[42:01] different types of vegetation, vegetation at different stages of development and age may all have different reflectance values that we can
[42:09] use to understand something about the functioning of those plants. Reflectance spectroscopy has widely been used now over recent, uh, over recent
[42:20] decades to understand the biochemistry of plants, which we can use to understand the functioning of those plants. So, this figure here, again
[42:30] showing the reflectance of three different leaves from a violet, a maple, and from rye, shows you differences in
[42:36] reflectance that we would see across these wavelengths. The wavelengths that are shown here are 400 to 2,500
[42:42] nanometers, which encompasses the visible wavelengths, 400 to 700, which we saw in the last slide, the near
[42:50] infrared, which is 700 to about 1,300, shown here with this large hump where vegetation tends to reflect a lot of
[42:57] light, and the shortwave infrared, which goes out to 2,500 nanometers. And you'll notice that there are various
[43:04] different locations in the spectrum of these different plants, uh, where there is a where there are absorption or
[43:12] reflectance features associated with the different types of chemistries in the plants. So, again, I'll point you to,
[43:19] um, the blue and red wavelengths here where chlorophyll B and chlorophyll A are absorbed, um, and, uh, which are where light is absorbed
[43:29] for use in photosynthesis. And then, some of these other, uh, uh, uh, more more complex, um, molecules that have
[43:37] absorption features in longer wavelengths. So, you'll see that nitrogen is here, and this is nitrogen as part of, for example, uh, proteins.
[43:46] And we're actually looking at very small features. So, I'm going to point you to this feature right here of phenolics,
[43:53] that's at about 1,660 nanometers, and you'll see that there's this little dip in the orange line, and that's maples.
[44:00] And that's an absorption feature associated with phenolics, which are defensive compounds of plants. And, uh, maples are tend to be very high in
[44:09] phenolics in these defensive compounds. And so, these very small features that we see in the spectrum of plants can be
[44:17] used to get a lot of information that, um, um, that we might otherwise have to use complex and and, uh, and time and, um,
[44:26] complex, expensive, and time-consuming laboratory chemistry to do. Imaging spectroscopy, then, is where every pixel in an image is actually a
[44:37] spectrum. And it's very hard to illustrate this, so I'm just going to show you three images. Actually, these
[44:43] are all the same three images that come from a hyperspectral sensor, in which hundreds and hundreds of wavelengths are
[44:48] measured. And the top figure shows a true color image like we would see with our eyes. Uh, a traditional false color
[44:56] infrared image is in the middle. This is where the near infrared, where vegetation reflects a lot of light, is
[45:03] shown in the, uh, red channel. And then, finally, at the bottom is a, um, is a multivariate rendering of all of the
[45:13] hyperspectral information content. And what you can see is that there's an incredible amount of information across the hundreds of wavelengths that are
[45:21] represented in this image. And, uh, a good way to visualize this, again, is to look at, um, some more
[45:28] spectra. In the upper left of your figure, you'll see spectra of of various different vegetation types, as well as
[45:35] non-photosynthetic vegetation, so things like, uh, senesced leaves and and grasses and branches. And you'll see that information in a spectrum is
[45:43] collected all along there. Right below that, you see a solar radiance spectrum, and you'll see all of
[45:50] these narrow lines. Those are all of the wavelengths at which the spectrum is measured, in which we have a band or a
[45:57] channel in the image. So, hundreds and hundreds of bands of data. If you contrast that to the more traditional
[46:04] imagery we might see, say, a photograph shown here in the upper right with the red box around it, that's just going to
[46:11] be measuring in the red, green, and the blue, or if you look at something like Landsat or, um,
[46:18] or MODIS or Sentinel imagery, there are just broad spectral bands that get measured by those different sensors. And
[46:26] so, there's a lot of information compared to a much lower amount of information. Therefore, the detection of
[46:33] these different features can be, uh, such as cellulose, lignin, sugar sugars, nitrogen, phenolics, and so forth, such that we can detect them in a way
[46:42] that we can't when you're measuring broadbands, such as using, uh, a multispectral sensor or even a camera.
[46:50] And so, the way that we tend to visualize hyperspectral imagery is as an image cube. So, here you just see a true
[46:57] color image, and then you see all of these colors along here represent all of the different wavelengths and different
[47:04] bands that are measured. And there's a stylized spectrum shown here that just basically shows you where all of these
[47:10] different wavelengths lie. For more than three decades, people have been using airborne, um, airplane instruments, uh, have been using hyperspectral
[47:22] instruments on board airplanes, uh, to to make, uh, hyperspectral measurements. And shown here on the right are a number
[47:30] of different systems, such as the Global Airborne Observatory out of Arizona State University. Uh, NEON, the National
[47:36] Ecological Observatory Network, has an airborne, uh, observatory network that they fly over NEON sites. HySpex is a,
[47:44] um, a commercial manufacturer of instruments. And then, NASA flies, uh, its AVIRIS sensors on various different airplanes. And we we realized that we
[47:55] could actually make maps of vegetation traits, for example, from hyperspectral imagery quite some time ago. The first paper that showed that we
[48:06] could do this was from Carol Wessman et al., um, from back in, uh, 1988, where they showed that we could measure lignin
[48:15] concentration. So, this is these are structural compounds in plant leaves that are generally used, uh, by plants,
[48:23] uh, in support of their hydraulics, uh, as well as nitrogen. So, how can we use this information from
[48:31] hyperspectral imagery? Well, there are lots of different, um, uh, applications that we can have for this. I've already hinted at it a little
[48:42] bit, in that there's, uh, information about the chemistry of plants that we can use to infer processes that are
[48:51] going on in ecosystems. So, we basically have questions, for example, how does the nitrogen content or chlorophyll
[48:58] content or other traits of plants affect its ability to take up carbon? What is the variation among different plant
[49:05] species and the roles they play in an ecosystem? So, we can ask a question like that, collect data in the field,
[49:12] model the spectral model, uh, model how the spectra relates to these traits, and then make maps of these traits to be
[49:21] able to understand ecosystems at broad scales. I'd like to think of it this way. In an ecosystem,
[49:33] there are various different things that we can measure and see. So, for example, photosynthesis is the uptake of car-
[49:39] carbon. This leads to growth in plants, which can then create a different structure in the ecosystem. And there
[49:47] are various different things that the plant is doing all throughout this. It could be growth or reproduction,
[49:53] respiration, respiration, and defense against, say, herbivores, insects, and so forth. And these different processes that are going on in an ecosystem are all things
[50:05] that are are are can be challenging to actually measure in the field. So, to ask questions at the scale of remote
[50:12] sensing at landscape and larger scales requires um data that enables us to measure these different components. So, now we can add these different
[50:23] characteristics that we can detect from hyperspectral imagery, such as mapping chlorophylls and nitrogen content, uh which are certainly related to
[50:33] harvesting of light by plants. And nitrogen as the main uh component of Rubisco, which is what um
[50:39] what uh facilitates the uptake of carbon uh in the Calvin cycle. As well, we can measure non-structural carbohydrates.
[50:47] So, non-structural carbohydrates or NSCs are the initial outputs of photosynthesis, sugars and starches that get used to build everything else. So,
[50:56] over here on the right side of the screen, you'll see lignin and cellulose, phenolics and tannins. Those all start
[51:02] out as non-structural carbohydrates, and all of those are detectable from hyperspectral imagery. The top um uh trait in gray, so we call these plant
[51:12] traits, the the uh the the words that are in the gray boxes, is LMA or leaf mass per area. That's not actually That
[51:21] is a trait, it's not actually a compound of a leaf, but it is actually a descriptor basically of the thickness of
[51:27] a leaf, and it's one of the things that we can best detect using hyperspectral remote sensing. So, I'm going to talk about how we can
[51:37] use these methods uh um to analyze hyperspectral imagery to look at how plant functional traits uh change across different types of biomes
[51:48] and different types of ecosystems. We can look at how plants change their strategies um phenologically, so over the course of a
[51:56] growing season. We can use it to understand how plants respond to environmental change. And ultimately, we see this as providing a framework for
[52:06] being able to use the next generation of satellites that have hyperspectral sensors to uh study all of these things
[52:13] at global scales. These global-scale hyperspectral satellites don't yet exist, but should in the next 5 to 10
[52:20] years. years. So, I'll just provide a brief overview here of how we analyze the data, but really I'd rather spend more of the time
[52:31] talking about what we learn from the data when we analyze it. Hyperspectral imagery from airborne sensors requires
[52:38] quite a bit of pre-processing. Uh first of all, there will be um atmospheric corrections, so correcting the effects
[52:45] of the atmosphere so that what we see is the surface reflectance. Then there's a whole bunch of different types of
[52:50] corrections for the presence of clouds and shadows, for uh topography so that different sides of a slope that are illuminated differently
[52:58] by the sun have uh have similar reflectances. BRDF correction handles differences um that you might see from
[53:07] one side of a scene to another, again because of the changing direction of the sun or exposure to the sun, and a
[53:13] variety of other different factors. In addition, we have to collect data out in the field um related to those traits,
[53:21] then scale them up to the size of a pixel, and then build models to then predict all of these different traits.
[53:28] And here's just an example of some of them. LMA, which is leaf mass per area. Uh the higher your LMA, the thicker your
[53:35] leaves are, the slower your photosynthesis is, for example. Nitrogen, cellulose, lignin, non-structural carbohydrates, phenolics, and so forth.
[53:45] To look at the diversity of functional traits from hyperspectral imagery across ecosystems, I'm going to use NEON as an
[53:53] example. Now, at all of these NEON sites, they fly hyperspectral imagery at least every year, or just about every
[54:03] year, um usually three four out of every five years. Um and so, these sites get monitored frequently, and they're meant
[54:11] to represent the range of eco-climatic variation across uh the United States. Uh in my group, we've gone out and we've
[54:20] actually sampled in all of these ecosystems. So, it's They're 20 domains, and we've sampled in 19 of the 20
[54:27] domains. Um and uh we go out and we collect vegetation samples, we take them back to the lab, we analyze them for the
[54:35] chemistry, and then we link them to the imagery to be able to build uh the models to make the maps. And it's the
[54:43] maps that we really want to see. So, this is just a selection of um of of maps of traits from across uh a variety
[54:54] of the different NEON domains, everything from Harvard Forest in your upper left to uh Toolik Lake in Alaska
[55:02] uh on your lower right, and other sites such as Niwot Ridge uh in the middle of the bottom row, that's in Colorado. Um
[55:10] Konza Prairie in Kansas, and um and the Smithsonian uh reserve in Maryland uh in the middle domain, too, there. And all of these
[55:23] graphs are showing the same three traits: chlorophyll, which is related to to light harvesting; LMA or leaf mass
[55:30] per area, which is essentially leaf thickness. Higher LMA means uh more investment in leaf structure. Lower LMA
[55:38] means thinner, larger leaves that invest more in faster photosynthesis. And then phenolics, which are defensive compounds. And here, what you can see
[55:48] from this figure is the great diversity of ecosystem function that you'll see across all of these different sites.
[55:56] And we uh hyperspectral imagery will allow us to uh to to track this through time and to do comparisons between
[56:04] different ecosystems. So, for example, an ecosystem that might invest more in uh in defensive compounds such as
[56:12] phenolics might be shown in the redder tones uh represents a trade-off with an ecosystem that might invest more in
[56:20] faster photosynthesis, which might be the greener colors that you would see. And also in that graphic, you would have
[56:26] also seen the very the ranges and diversity across those ecosystems. And why this is important is because plant
[56:33] traits, which would be shown in the uh third figure uh on this uh on this graph that we see right here, plant traits
[56:42] give you a lot more information about ecosystems than the traditional land cover type uh classification. So, this
[56:49] is uh an area of the Sierra Nevada mountains uh showing you uh land cover traditional land cover type maps, then a
[56:58] uh physiology-based map, which comes from the traits, and then plant structure, which is coming from lidar data such as Atticus would have talked
[57:06] to you about. So, that gives you a sense of what we can do in terms of looking at the
[57:13] diversity of ecosystems uh uh across space. Now, let's think about how those ecosystems change in time. And
[57:22] so, first we're going to start with looking at phenological time. And these are just uh shots of hyperspectral
[57:28] images over uh a forest and a grassland area in Wisconsin um going through the course of the growing season. And you
[57:37] can certainly look at these images and see changes that are occurring, but we can actually also map how those those
[57:44] traits and how the diversity of those traits might change over the course of a growing season. So, I'm going to show
[57:50] you now um some figures from a different site, also uh in which we measured the phenological uh
[57:58] uh trajectory using hyperspectral imagery. This is a nearby site that's called Blackhawk Island. It's that site that I showed you on one of those first
[58:06] slides where the first maps of foliar chemistry were made back in the 1980s. It's a place where in recent years we've
[58:14] gone back and done some repeat imaging um uh because of some of the significance of the site. At this site,
[58:20] we have collected hyperspectral imagery and mapped and collected traits data, and also mapped all of the species
[58:27] composition. And so, now I want to show you how traits change over the course of a growing season. I'm going to show it
[58:34] for six representative species that we see on the island. In this case, we're going to see LMA and phenolics again,
[58:41] and this time instead of chlorophyll, we're seeing um potassium. And I want to draw your attention here to these dots
[58:48] on this triangle. So, this triangle is showing you that blue means more potassium, green means more leaf mass
[58:55] per area, and uh red means more phenolics. So, you would interpret your graph as these different species
[59:02] investing more. And you're going to see those dots change as the trajectory through the growing season changes, and
[59:10] it'll also be plotted for each one of them on the right. So, we can actually now start to look at how these different
[59:17] um um species change and how they respond. So, I'm going to go ahead and uh run the
[59:30] animation again, so you can see it. There you There you see the different species becoming more distinct from each
[59:38] other as the growing season progresses. So, what you can see from this is that each of these different species actually
[59:46] occupy a different trait niche space. So, they have different characteristics which allow them which enable them to
[59:55] to to coexist and also take advantage of different components of the ecosystem and the resources. And I'll just draw
[1:00:04] your attention here, for example, to phenolics. Again, here you see this Acer rubrum, it's the blue species, has much
[1:00:11] higher phenolics than any of the other species. You'll also note that it increases in phenolics over the course
[1:00:18] of the growing season, whereas the other five species that are shown there actually decrease in phenolics. They
[1:00:24] start out at the beginning of the growing season with high levels of phenolics and at the beginning of the
[1:00:30] growing season when young leaves come out, they they're very tasty and that's when herbivores or insects want to come
[1:00:36] and um and and and uh uh and and defoliate or eat the leaves and um it's in the plant's best interest to
[1:00:47] have higher amounts of defensive compounds with those young tender leaves. As the leaves grow older, there becomes less of a need for phenolics in
[1:00:57] in these because the leaf mass per area shown here on the top actually increases. As leaves get thicker, they
[1:01:04] become less palatable. Maples, on the other hand, uh the leaves also increase in LMA, but because uh because of their own
[1:01:13] evolutionary status, they have a tendency to actually increase over the course of the season and use phenolics
[1:01:19] as their primary defense mechanism. And so, we can see how these different species sort out and uh the different
[1:01:26] traits that they have and understand the differences in the ecosystem. Now, I'd like to talk about uh using
[1:01:34] hyperspectral imagery across years. So, we just looked at hyperspectral imagery within a year and what it told us about
[1:01:41] different strategies by different species. Now, we want to look at how whole ecosystems change over the course
[1:01:47] of time. And in this case, I'm going to use the example of the California megadrought. So, this is a Mediterranean
[1:01:53] ecosystem uh there in California where from 2012 to 2018, there was an unprecedented drought. Um and this
[1:02:03] graphic here that you see from drought monitor shows the percent of the area in California in drought, and you can see
[1:02:09] it starts to pick up in 2012 and in 2014 into 2015 and 16, um the drought was
[1:02:17] very extensive uh and uh a wet winter in 2017 going into 2017 uh allowed the drought to dissipate somewhat before it picked
[1:02:27] back up again uh in early part of this decade, although with all the rainfall California has received this winter, the
[1:02:34] drought will be severely um uh compromised uh in in a good way. And uh the the the drought and the effect of
[1:02:44] the drought on the vegetation of California has received a lot of uh a lot of news coverage or received a
[1:02:52] lot of new news coverage um due to the mortality of trees in particular from increased bark beetle temperature, um
[1:03:02] uh uh changes in availability of water and trees' inability to be able to to to to move the water from the soil to
[1:03:12] the tops of the trees uh and so forth. And so, we thought uh with our work with hyperspectral
[1:03:20] imagery, we would see if traits themselves of the traits of the plants themselves had any explanation for the
[1:03:28] response to the drought. And so, for this, I'm going to use um uh a study that used NASA's AVIRIS Classic
[1:03:38] sensor, which is a hyperspectral sensor that's flown on a an ER-2 airplane. And I'm going to show you results from this
[1:03:45] white box here, um which is uh called the Southern Sierras or Yosemite box. It includes Yosemite National Park and
[1:03:54] southern part of the Sierras, uh which is where a lot of the mortality that we saw occurred. And later, I'll show you
[1:04:00] just one little slide uh from this area of Southern California that's near Santa Barbara uh to illustrate another example
[1:04:07] of how we can use hyperspectral imagery. Okay. So, let's look at the hyperspectral imagery that was acquired
[1:04:15] for the Southern Sierras box. So, you can imagine that we could go out and collect these these images and we could
[1:04:22] look at them across these different years in which the drought occurred, starting in 2013 and going through 2018,
[1:04:28] and we can make a traditional false color composite image, and this is actually the image from each one of
[1:04:34] these different years. And if you look at them, there's not really too much that we see just looking at the images,
[1:04:40] although maybe if you look at 2017 here, you can see the vast increase in snow. These images
[1:04:48] are all from early June of the year. So, looking at these images then, we want to go and actually use our methods
[1:04:58] to map the traits. And here are the maps of the traits, and you can immediately look at this and see that there are some
[1:05:05] pretty significant differences. So, in this case now, I am showing you leaf mass per area and nitrogen. So, those
[1:05:12] are the two main dimensions that describe photosynthetic capacity. More LMA means less investment in photosynthesis, higher nitrogen means
[1:05:22] greater investment in photosynthesis. Non-structural carbohydrates are the third one, and this is really interesting because non-structural carbohydrates are the immediate outputs
[1:05:32] of photosynthesis, the sugars and starches that are created as a consequence of the photosynthetic activity. And generally,
[1:05:42] higher non-structural carbohydrates means that the plants are holding those non-structural carbohydrates, so sugars and starches, in reserve. If a plant
[1:05:51] feels really confident in what's going on around it, that plant is actually going to convert the non-structural
[1:05:58] carbohydrates into wood, into cellulose, into phenolics, defensive compounds, and so forth. And so, what you see here, if
[1:06:06] you look at the the the data, is that there is this movement towards more investment in non-photos
[1:06:13] non-structural carbohydrates through time. I'm going to just explain this figure to you a little bit here. We're
[1:06:19] looking at 2013, we're looking at nitrogen in the blue, so areas that are more blue, like these agricultural areas
[1:06:26] to the southwest, have higher nitrogen. That's what would be expected from agriculture. And the areas that are
[1:06:32] redder, which you might see through the main portion of it, have higher investment in leaf structure. We did a
[1:06:38] principal components analysis on this data from 2013 to be able to show the distribution of these different traits
[1:06:46] across ecosystems. And we're going to use this this uh principal components analysis in each subsequent year to see how plants in
[1:06:55] this whole area change their allocation of resources. So, we can move to 2014, and you see the drought had started, but it hadn't
[1:07:04] gotten to its peak uh um um um condition yet, which it did in 2015. And here, I'll really note that you'll
[1:07:13] see that the whole scene becomes a whole lot more yellow. It means that there's a lot more investment by the plants in
[1:07:20] non-structural carbohydrates rather than some of the other elements related to photosynthesis. You'll look now at the at the the PCA diagram here, and you'll
[1:07:31] see that the center of the uh the bullet of the center of the data points is actually moved towards
[1:07:38] non-structural carbohydrates. And this shows that the whole ecosystem has changed its profile of traits through time. Then, we had a wet winter going
[1:07:47] into 2017, and the vegetation responded, it improved, it came back closer to where it was when it started, but not all the
[1:07:57] way, which you can see here. The bull's eye has moved away from non-structural carbohydrates, but not back to the
[1:08:03] center that we see uh of the diagram. That would likely take several more years before the vegetation is fully
[1:08:10] recovered. recovered. And we can go then and um we can observe this in an animation. So, this is the
[1:08:16] same figure, and this is just showing how through time uh the vegetation trait allocation has changed as a consequence of response to
[1:08:25] the drought. All of these images come from the same time of year. All of this data comes from the hyperspectral
[1:08:32] imagery that you saw. And what's interesting about this is that if you look at this diagram here on
[1:08:38] the left, this is showing the relationship between phenolics, defensive compounds, and non-structural carbohydrates, carbohydrates, um which are the initial outputs of
[1:08:47] photosynthesis, and you'll see that in general, those are positively correlated with each other. So, when times uh when
[1:08:54] there are plenty of non-structural carbohydrates, the plants will also invest in phenolics. However, if we look at the drought now,
[1:09:02] so this is at the national scale on the left, coming from NEON data. If we look at what happened during the drought,
[1:09:08] non-structural carbohydrates increased, as shown here for 2015 and 2016 in these ridge plots, the red and the green
[1:09:16] years, whereas phenolics actually derived from the hyperspectral imagery actually declined over the course of the drought. So, during the drought, the
[1:09:25] plants make a different decision than they might normally than you might normally see in terms of these
[1:09:30] relationships. That during the drought, plants will retain a lot of the outputs of photosynthesis, that non-structural carbohydrates, and invest less in
[1:09:39] phenolics. Where else can we use hyperspectral imagery? imagery? So, I've tried to make the point that what we're seeing in these data are
[1:09:53] are are allocation of resources that that plants that plants make. And if we take data from a whole range of species, blue
[1:10:04] being native species and orange being invasive species, you'll see that we can in this this principal components
[1:10:11] diagram, again the same thing a different set of traits, some of the same traits and a few different traits,
[1:10:17] you'll see that orange or invasive species fill a particular niche in the whole space occupied by all of the
[1:10:26] species. So, the blue dots represent species that are native, the orange dots are species that are invasive, and
[1:10:33] you'll see that the invasive species tend to fill a trait space that is much smaller, and if you look at the
[1:10:41] direction of the arrows, nitrogen, potassium, chlorophyll, traits that are associated with fast photosynthetic rates, tend to be in the fast growing
[1:10:49] area. So, we might be able to use this sort of information to actually be able to identify invasive species, which are
[1:10:56] a major issue in many ecosystem types, but in particular in Mediterranean ecosystem types. So, this is where I'm
[1:11:03] going to just show you another example from from a different area of flights in California near Santa Barbara. This is
[1:11:13] Point Conception here where basically you have the boundary between Southern California and Northern California. And here we're showing leaf
[1:11:22] mass per area, leaf water content, and nitrogen from the image that was at the beginning of the growing season when
[1:11:28] things are pretty green actually at this point in California from February 28th of last year. And you'll see that
[1:11:34] there's a whole range of variation, but I'll point to you in particular to this area right here at the point where you
[1:11:42] see it's actually very very different. The color is yellow, and if you look back at the different colors that we
[1:11:49] have for leaf mass per area, leaf water content, and nitrogen, if you actually mix all of those together, it actually
[1:11:55] makes this yellow color. So, this is an area that is high in nitrogen, high in water, and high in leaf mass per area,
[1:12:02] which is not a common combination, and would be a very effective strategy. Well, this is an area that's dominated
[1:12:09] by ice plant, which in California is a very invasive species and is very much a concern in these sensitive ecosystems.
[1:12:20] So, this shows an example of where we're able to use this trait based mapping from hyperspectral imagery to identify
[1:12:26] sort of hotspots on the landscape that look different, that might show different types of of trait allocations that that might be
[1:12:35] of concern. Another place where we can use hyperspectral imagery is to look at how how how traits affect carbon dynamics. So,
[1:12:46] I've talked about how some of these traits, such as leaf mass per area and nitrogen, are very strongly related to
[1:12:52] carbon uptake. And what I'm showing you here are the locations of four different flux towers, so measuring carbon uptake,
[1:13:00] measuring net ecosystem exchange, which can then be used to predict gross primary productivity from across these different sites. And each of these
[1:13:10] different circular arrows around the flux towers are the footprints of the flux tower given a different wind
[1:13:19] direction. And my only point here is that within each one of these different footprints, you'll see that there's a
[1:13:25] different distribution of traits and a different diversity of traits that might very well affect the total carbon
[1:13:32] uptake. And if we look at just this one tower, NW1 here on the left, and you look at these different flux footprints,
[1:13:40] we can see that the GPP or gross primary productivity is pretty different across these different flux footprints, in
[1:13:47] particular this NW1, which is the northwest one here. So, very different trait profiles might lead to very
[1:13:54] different amounts of carbon uptake. And this is also shown by by a more dynamic dynamic view of the data, where what we're
[1:14:03] seeing here is GPP on the blue line across all of these different dates, and then the green line is the amount of
[1:14:11] nitrogen in the canopy based on what the footprint is across each one of these days. And you can see that they they
[1:14:19] track each other pretty well. There are some differences that are probably due to weather and clouds and so forth that
[1:14:25] might have occurred at different times, but you see that there is a general tracking of the of higher GPP with
[1:14:32] higher nitrogen. This might then be able to give us some insights into differences in carbon uptake and carbon
[1:14:39] dynamics across landscapes, because we can't put flux towers everywhere, and it's difficult to measure photosynthesis everywhere as well.
[1:14:48] So, what does the future hold? With hyperspectral imagery, we can map functional traits and functional diversity, which will allow us to
[1:14:58] quantify biodiversity in places where it is hard to measure in situ. That's one of the big take-home messages, is that
[1:15:05] we can't go out and measure all of these traits and at all of these places, and even if we can get to all of these
[1:15:11] places across the world, especially remote areas of the world, we can't get to everywhere. We can't cover the
[1:15:18] entirety of, say, ecological gradients or environmental gradients. So, we can use this information to characterize the role of biodiversity in
[1:15:28] ecosystem function, such as I showed you on that last graph associated with carbon uptake in flux tower footprints.
[1:15:37] We can also look at how within a year, and not just within a year, but also across years, how traits may change and
[1:15:45] how these are part of the ecological strategies that plants have in response to change. This also allows us to do things like
[1:15:54] identify threats to biodiversity by finding combinations of traits that might be associated with invasive species. species. And then, ultimately,
[1:16:04] for me, I'm interested in answering the question, are ecological the processes the same across similar ecosystem types
[1:16:12] or across similar types of environmental gradients, such as temperature or or altitude gradients? So, for example, the species are very different in
[1:16:22] Mediterranean ecosystems of South Africa and California, very different evolutionary histories, but the environments are very similar. So, are
[1:16:30] the responses of species across those environmental gradients and in response to drought or in response to fire, are
[1:16:38] they similar or not? And once we start to have global imaging spectroscopy from satellites, we'll be able to ask and
[1:16:45] answer these questions at global scales. Thank you very much. Thank you, Phil, for providing us with that highlight.
[1:17:00] To now summarize today's session, lidar and hyperspectral data can help us better understand the biodiversity and function of vegetation.
[1:17:09] Also, lidar measurements can assist in the development of canopy height models, which help us better understand forest
[1:17:15] structure. Here we have a few resources related to those subjects that we discussed in the session today.
[1:17:25] I encourage you all to use them to learn more about these topics. Thank you for joining us today, and do come back on
[1:17:31] Wednesday for our final session on biodiversity applications for airborne imaging have further questions, you can contact myself or my
[1:17:41] ARSET colleagues at our email addresses listed here. As a reminder, here is the course website where you can all find the
[1:17:48] materials, including the PowerPoint presentation and video. The homework link will be available on the course website during the final
[1:17:55] session. And I have also included our primary ARSET website where you can check out all of our other great
[1:18:00] trainings. trainings. Thank you again, and now we will begin the question and answer portion of the session.
[1:18:11] Okay. So, throughout this training today, we have been adding all of the questions that you've all written in the
[1:18:18] questions tab, and we've been starting to answer them here on this document that we will be sharing in a second.
[1:18:25] There it is. Thank you, Selwyn. Um so, I'm joined today by various organizers and panelists for this
[1:18:31] training series, and we've been answering them all as best we can. I know we'll have a couple minutes here at
[1:18:37] the end, so we'll go through some of the questions now, but we will continue to answer all the questions that come in
[1:18:43] and post them on the website in a couple of days. Uh so, with that being said, we
[1:18:49] can just jump into the questions. I'm going to answer uh what's written here, but for all of our
[1:18:55] panelists, if there's any responses you'd like to add, please feel free to unmute yourself, introduce yourself, and
[1:19:02] your response will also be included here in the answers. All right. So, let's start with question one.
[1:19:10] one. Do you know vertical profile metrics obtained from conventional drones? Uh the answer here is there are more
[1:19:18] than 100 different statistical metrics that can be derived from ALS and drone lidar. All are based on the point cloud
[1:19:26] structure or variation in modeled surfaces in the lidar data. Is there anything that our panelists would like to add? I think I see a
[1:19:35] couple of you are unmuted, so please feel free to introduce yourself. Uh so this is Atticus Duvall. Um
[1:19:47] I can briefly add a little bit more detail to this. Um so the vertical profile metrics is kind of
[1:19:58] an active area of research for um ALS data and especially for drone-based lidar. And so uh I was trying to kind of
[1:20:13] you know, purposefully leave this as kind of an open-ended uh response to this question. Just in part because drone-based lidar
[1:20:24] applications are uh still in a pretty experimental phase. Um and also the fact that which I alluded to in this question, that we
[1:20:36] have you know uh well over a hundred standard statistical metrics metrics that we'll pull out of lidar-based point
[1:20:48] clouds. clouds. And so unfortunately we don't have enough time to go into all of those metrics today, but
[1:20:58] um I I would you know, strongly encourage uh people to to read some of the documentation for
[1:21:07] the lidar package that I I discuss lower down in these the Q&A here because that documentation describes some of these
[1:21:20] point-based metrics that can be applicable to ALS, so airborne lidar or drone-based lidar. All right, great. Thank you.
[1:21:38] Uh all right, on to question two. I think this is a question about point density. Um how many points per square
[1:21:46] meter was the UAV SAR data in the Wax Lake Delta study? And then the answer is the UAV SAR data
[1:21:55] was radar data, so it doesn't have points per square meter, but the ALS data was about four points per square
[1:22:03] meters. Is there anything any of our panelists would like to add to that one? This is Atticus again. And um
[1:22:11] the one thing I wanted to add just in case this was um um a question of of resolution of the UAV
[1:22:21] SAR data, I believe it was 10 m resolution. So um yeah, not a points per square meter
[1:22:30] uh but yeah, the lidar was around four. All right, thank you. So on to question three. Uh for the
[1:22:48] lidar data animation before slide 13, when I download the data, what will I see? I don't think we can see the
[1:22:55] colored 3D animation that you showed. Also, what does each color represent and how are they assigned? So the answer here says you will see a
[1:23:05] cloud of points. You can try opening it in CloudCompare. And the colored data showing classification will require some
[1:23:12] extra processing steps that require matching the UAV SAR classifications to the ALS point cloud. Before we jump on to your question four,
[1:23:23] is there anything our panelists would like to add? Atticus again here. Yeah, uh the one thing that I wanted to add
[1:23:32] here is that uh depending on what this question was referencing, referencing, um um if they were wondering about the canopy
[1:23:43] height model data that's uh uh that's already available or needs to be processed, you won't you won't see that
[1:23:53] with the raw or um the lidar data that's directly downloaded from the website. You should uh I would encourage everyone
[1:24:04] here to look at a website called OpenTopography OpenTopography because they have some really useful uh out-of-the-box tools that allow you
[1:24:17] to directly download the canopy height model data that can be a lot easier to work with if you're new to using lidar
[1:24:28] data. All right. On to question four. Uh the spatial resolution of lidar is 0.1°, which can consist of more than one
[1:24:47] tree or just be part of a tree in the tropical areas. How do we know if we are
[1:24:53] seeing more than one tree or just part of a tree to determine the biodiversity? And the answer here is that airborne
[1:25:00] lidar spatial resolution is typically about 1 m resolution for canopy height models, so tree crowns are clearly
[1:25:07] visible. It can be very difficult to isolate individual tree crowns in closed canopy forests, but it is possible with
[1:25:15] high-resolution lidar. All right. Is there anything we'd like to add here? All right, then we can jump to question
[1:25:30] five. Why is there a lack of lidar specifically in mangrove ecosystems? Our answer here is that it is mostly in
[1:25:40] understudied ecosystem, probably because it is not a managed forest ecosystem and rarely ALS data is captured because
[1:25:48] there's very little topography. Would any of our panelists like to add anything uh for this response? I can add just a little bit extra here.
[1:26:01] Um Um the thing to realize is that often lidar data is collected uh not specifically for scientific
[1:26:12] purposes. Um lidar data, especially in coastal ecosystems, is collected because uh you know, governments whether you know, in the US
[1:26:24] state governments or countries are collecting those data uh to map top topography. And um um unless those those governments have
[1:26:39] specifically specifically um you know, set aside that funding to uh to access or sorry, to um to map that
[1:26:49] coastal system, then it's uh it's not going to necessarily be available. In part because lidar is an expensive um
[1:26:59] airborne, you know uh product to to create and collect. So that's a big part of it is that
[1:27:09] um unless there is government money often or a specific purpose for collecting that lidar data it just won't be collected. And there
[1:27:20] are a lot of other places, especially managed forest stands where lidar data is much more commonly and regularly collected.
[1:27:38] All right. Uh so I think for the sake of time, the next question will be our last
[1:27:43] question today, um but keep in mind that our panelists have answered all of the questions that you asked here in the
[1:27:49] questions tab and they uh will be available online on our training website afterwards in a couple days, so I
[1:27:57] certainly encourage you all to download and read it uh when it's available. Um so on to our last question, question
[1:28:04] six. Is it always possible to find ground points to create a model? Uh no, sometimes the canopy is extremely
[1:28:14] dense and the ground is unable to be seen. This happens often in dense tropical forest. Also, it is a problem
[1:28:21] in wetlands when grasses are extremely dense and the ground has a lot of microtopography that you may want to
[1:28:28] capture. capture. Is there any uh anything anyone would like to add here? All right. Uh well, we are at the end of
[1:28:44] our time today, so this does mark the end of session three for biodiversity applications for airborne imaging
[1:28:52] systems. Um thank you all for joining us today. Thank you for all of our panelists and guest speakers.
[1:28:59] Um we hope to see everyone in our final session uh for this training series, which is this Wednesday, April 5th at
[1:29:06] 11:00 a.m. Eastern time. Uh other than that, uh have a great day and thank you all again for being a part of this
[1:29:14] session. Mhm.
