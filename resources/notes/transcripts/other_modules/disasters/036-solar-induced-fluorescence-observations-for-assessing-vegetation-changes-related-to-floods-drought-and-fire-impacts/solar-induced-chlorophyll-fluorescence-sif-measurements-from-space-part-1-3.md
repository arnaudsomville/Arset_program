# Solar Induced Chlorophyll Fluorescence (SIF) Measurements from Space Part 1/3

`https://www.youtube.com/watch?v=6_XKD3wrJ1g` · id 164 · 2:00:47 · module 53 — Solar Induced Fluorescence (SIF) Observations for Assessing Vegetation Changes Related to Floods, Drought, and Fire Impacts

[00:02] Hello everyone and welcome to the first session of this intermediate three-part ARS training titled solar induced fluoresence or CIF observations for
[00:12] assessing vegetation changes related to floods, drought and fire impacts. I'm Dr. Erica Pest. I'm a scientist at
[00:22] NASA's Jet Propulsion Laboratory and I'm also an instructor with the ARSET program. Today's session will be focused
[00:30] on solarinduced chlorophyll fluoresence measurements from space and it will consist of a theoretical session and a demonstration. We have two
[00:41] invited experts Dr. Nick Parisu and Jacqueline Ryan both from NASA's Jet Propulsion Laboratory. Before we start today's session, I will
[00:54] briefly discuss the RSET program. NASA's applied remote sensing training program or ARST offers free trainings on the use of remote sensing and model data
[01:08] along with methods and tools for the global science and applications communities. communities. Our trainings are tailored to different
[01:17] experience levels ranging from introductory to intermediate to advanced. Our set trainings focus on seven thematic areas. Agriculture,
[01:28] climate and resilience, disasters, ecological conservation, health and air quality, water resources and wildland fires. Ours trainings are either online or in
[01:45] person. All trainings are free of charge and use open-source data and software. Some of our trainings are delivered or
[01:53] presented in both English and Spanish like this one. Yet all of our trainings have a Spanish uh PowerPoint
[02:03] presentation available. And now I will provide an overview of this webinar series. This webinar series consists of three
[02:19] sessions. Today we will discuss SIF measurements from space consisting of a theoretical section and a demonstration on how to access and visualize SIFT
[02:29] data. The sess second session is on October 22nd and it will provide an overview of OC2 and OC3 observing modes
[02:40] and CIF observations. And the third and last session will be on October 29th and it'll be focused on
[02:48] working with gapfield CIF products. There will be a homework assignment that opens on October 29th with a due date of
[02:59] November 12th. A certificate of completion will be awarded to participants who attend all the live sessions and complete the homework
[03:08] assignment by the due date. This is an intermediate training and the two prerequisites are the fundamentals of remote sensing and the session
[03:21] focused on CIF from the webinar titled the use of solar induced fluoresence and LAR to assess vegetation change and
[03:29] vulnerability. And here are the training learning objectives for this webinar series. By the end of the series, participants will
[03:42] be able to recognize how CIF is measured and used as a complimentary measurement to commonly used indices like NDVI for
[03:53] land and vegetation applications. Identify advantages and limitations of using space-based CIF measurements to monitor and evaluate vegetation health
[04:05] and condition. Run a Jupyter notebook to generate a snapshot area map or SAM plot from OC3 data for selected regions of interest to
[04:19] analyze and evaluate vegetation land change due to fire impacts. run a Jupiter notebook using GOIFF data for selected regions of interest to
[04:31] produce visualizations to analyze and interpret episodic land change due to droughts and floods. And finally, compare how SIF products aggregated in
[04:43] space and time using open-source tools are used to study vegetation change across different regions in a variety of
[04:52] science and applied use cases. And today's session will be focused on SIF measurements from space. And here we have a list of the trainers.
[05:08] Again, I'm Erica Podest. I'm the ARSET training coordinator for this webinar series. Today we have two invited
[05:16] lecturers. The first is Dr. Nick Parisu, who is a scientist and the discipline program manager for carbon and cycle and
[05:24] ecosystems at NASA's Jet Propulsion Laboratory. He will provide the theoretical component of today's webinar discussing what is CIF, how it's
[05:34] retrieved, and different SIFT measurements from space. The second invited lecturer is Jackie Ryan. She is a data visualization
[05:45] uh developer at NASA's Jet Propulsion Laboratory and she will provide a demonstration on how to set up your environment to work with
[05:55] SIFT data and how to plot and visualize SIFT data. And here are the objectives for session one. Today's session, participants will
[06:09] be able to define what is CIF and how it is measured and describe where it performs well and where it has
[06:17] limitations. limitations. Identify how SIF measurements are used for scientific research and land-based applications. applications. Set up a Jupiter notebook environment
[06:27] and retrieve SIFT data from NASA's Earth data system. Identify how to overcome a key limitation of level two SIFT data by
[06:37] aggregating multiple days to create grided raster products with greater spatial context. And finally, run Jupyter notebooks to explore the
[06:48] ancillary information included in CIF uh products and how this data can be used to refine an analysis.
[06:59] How to ask questions? Please write your questions in the questions box which is at the bottom right. You'll have
[07:05] there'll be three points. Click on that and there'll be a popup menu. Select questions and write your questions in
[07:12] that box and we will address your questions at the end of this session. Feel free to enter your questions as we
[07:21] go along and we'll try to get to all of your questions during the Q&A session. The remaining questions that we cannot
[07:29] answer, we will answer them in the Q&A document which we will post to the training website in about a week.
[07:42] Let's start with today's uh training. This next section will be led by Dr. Nick Parizzou. Welcome Dr. Parisu. Great
[07:51] to have you here. Okay, thank you Erica. So our first section will focus on the most important
[08:02] question. What is CIF? And to help us answer this question, we turn to Ted Ed. And we'll let the video play.
[08:13] >> In 2009, a satellite circled Earth, methodically scanning and sorting the wavelengths reflecting off the planet's surface. Researchers were looking for
[08:22] the spectral signature of carbon dioxide when they noticed something baffling, an unexpected wavelength of unknown origin. They tried looking at Earth with only
[08:31] this wavelength and saw the planet covered in a red hue of varying intensity. This couldn't have been
[08:37] reflected sunlight because it was a wavelength that never escaped the sun's outer atmosphere and it didn't correspond with densely populated areas,
[08:45] suggesting it wasn't humanmade either. In fact, it was emanating from places with lots of plants. The Amazon basin,
[08:52] northern evergreen forests, and croplands of the Midwestern US were all ablaze. So, what was going on? Plants
[09:00] and other organisms use light to grow, by way of photosynthesis. But that's just one of three ways that light
[09:07] entering a photosynthetic organism is used. And this is the key to solving the mystery. To understand the others, we
[09:14] need to begin with photosynthesis. During this process, sunlight hits structures within a plant cells called chloroplasts which are packed with
[09:23] chlorophyll pigments. When chlorophyll molecules absorb light, some of their electrons become excited. They go through a series of reactions which
[09:31] transform light energy into chemical energy. This powers the conversion of carbon dioxide and water into glucose, the simple sugar plants need to grow.
[09:40] And of course, this reaction generates an important byproduct. Photosynthesis, which is constantly being carried out by plants, algae, and bacteria, produces
[09:50] all of Earth's oxygen. But plants regularly absorb more light than they're able to consume. For instance, over winter, the frozen leaves
[09:59] of evergreen trees can't photosynthesize at their usual rate, but they're still exposed to a lot of sunlight. If not
[10:06] dealt with, the excess light can damage their photosynthetic machinery. So, the second way plants use light is by
[10:12] transforming it into heat and dissipating it out of their leaves. The third way plants interact with incoming
[10:19] light is by radiating it back out at a different wavelength, producing what's called chlorophyll fluoresence. During photosynthesis, the
[10:28] chlorophyll's excited electrons move through that series of chemical reactions. reactions. But as some of the excited electrons
[10:35] fall back to their ground states, they emit energy as light. Overall, about 1% of the light absorbed
[10:42] is remitted as wavelengths at the red end of the spectrum. It's such a small amount that you can't
[10:48] see it with the naked eye, but plants the world over are fluoresing as they photosynthesize. photosynthesize. And this is what's caused the Earth's
[10:57] baffling red glow as observed by satellite. It was an accidental discovery, but a huge breakthrough. Tracking chlorophyll fluorescents from
[11:06] space allows us to watch the planet breathe in real time and monitor the health of ecosystems worldwide.
[11:13] Previously, researchers used levels of greenness as the main estimate for plant health because plants generally change colors or lose foliage when they're
[11:21] stressed. Higher levels of green typically indicate healthier plants. But this measure can be unreliable. In contrast, chlorophyll fluoresence is a
[11:31] direct measure of photosynthetic activity. It can help us infer how much oxygen is being released and how much
[11:38] carbon is being absorbed in a given system. Drops in chlorophyll fluorescent may also occur before visible signs of
[11:45] plant stress, making it a timely measure. Scientists have already used chlorophyll fluorescent to monitor harmful phytolanton blooms and track the
[11:54] effects of drought in the Amazon and Great Plains. Going forward, we'll be investigating photosynthesis from space and gauging how best to support our
[12:03] silent friends who already do so much for us. [Music] [Music] Okay, so now we know that CIF or
[12:12] solarinduced fluoresence is the remission of absorbed sunlight by excited chlorophyll molecules in plants. This process is depicted in this slide
[12:22] in two ways. in physical form on the left and then in spectral form on the right. On the left we see sunlight in
[12:30] yellow being absorbed by leaves within the tree canopy and fluorescent light in reditted by the same leaves. On the
[12:39] right we see chlorophyll absorption spectra in green and emission spectra in red. The green shading corresponds to
[12:48] blue and red wavelengths where plants absorb sunlight. The red shading corresponds to wavelengths where leaves emit light. Note the overlap between the
[12:59] curves in the red and far red portion of the spectrum around 700 nm. This means that fluoresence is emitted primarily
[13:08] through the absorption of the red portion of sunlight. Okay. So now we have a better idea of
[13:15] what cy is. So the next question is what is the relationship between CIF and plant photosynthesis? The long story is that it's complicated
[13:25] for remote sensing observations. It depends on the spatial and temporal resolution of the data. Are we looking
[13:33] at a single leaf or the entire canopy or an entire ecosystem? Another complication is that SIP only represents
[13:42] the light reactions of photosynthesis. The dark reactions where carbon dioxide is assimilated into sugars occurs downstream and so there's a disconnect.
[13:52] Canopy structure composition and plant physiology impact observed CIF. Examples include leaf area, nitrogen content and leaf stomato conductance. Also sometimes
[14:04] changes in plant health are not reflected in CIF and vice versa. For example, under highlight conditions in
[14:10] the middle of the day, you can see divergence between CIF and photosynthesis. photosynthesis. The short story is much simpler. CIF
[14:18] equals photosynthesis. Under most scenarios relevant to remote sensing, there's a very strong correlation between carbon uptake and CIF because
[14:27] SIF is directly linked to photosynthesis. photosynthesis. This link is depicted in this graph as a nearly perfect linear fit between
[14:35] observations of SI on the x-axis and observations of photosynthesis on the y-axis. You can see the different types
[14:43] of ecosystems in this plot. Uh by looking at the different colors in red we see crops, in blue we see forests and
[14:51] in green we see grass. In all cases, we see a very strong linear relationship between CIF and photosynthesis.
[15:00] Another common question is why is CIF optimal for detecting plant activity? We have seen that CIF is a direct emission
[15:09] with mechanistic ties to photosynthesis. It is independent of color and very weakly sensitive to interference by clouds and reflections from
[15:18] nonphoynthesizing nonphoynthesizing surfaces such as pavement, water, and soils. soils. Other well-known metrics for plant activity such as reflectance and
[15:29] vegetation indices are excellent for telling us about leaf color and changes in color over the growing season. But
[15:36] CIF stands out because it is very good at detecting rapid changes in photosynthetic activity and plant health. So this next section will focus
[15:45] on how CIF is retrieved or in other words, how do we use remote sensing to measure or observe CIF.
[15:54] The key to the CIF retrieval is something called fronhofer lines. Bronhoffer lines are very narrow regions in the optical spectrum of the sun where
[16:03] sunlight and atmospheric interference are minimal. More specifically, they are a set of dark spectral absorption lines depicted here by vertical lines with the
[16:14] single letter labels formed when atoms in the solar atmosphere absorb light being emitted by the solar photosphere. The result is a
[16:25] set of discrete gaps in the solar spectrum reaching the surface of Earth. So what happens next is that outgoing
[16:33] fluorescent light from plants which occurs at a different spectral region than where it is observed then fills the
[16:41] solar front hopper lines resulting in a change in depth of front hopper lines which can be seen here as the difference
[16:48] between the dashed and solid lines on the right. High spectral resolution remote sensing instruments can resolve these lines, detect the infilling from
[16:59] SIF from anywhere in the atmosphere, and then solve for the SIP emission that best explains the infilling.
[17:06] The orbiting carbon observatory has such exceptionally high spectral resolution that it only needs a few front hopper
[17:14] lines to run this calculation. In this example, we see three lines on top um and three lines on the bottom.
[17:24] And that's all that is needed to solve for SIF. Other SIF observers can also detect and retrieve SIF, but their
[17:30] coarser spectral resolution requires more lines to solve for SIF. This can be seen by the different spectral
[17:37] bandwidths used by various SIF observers over the past three decades. The highest spectral resolution sensors including OCO2, OCO3 and GOAT can detect
[17:49] relatively weak signals occurring outside the SIP emissions peak which can be seen at around 740 nanometers in very
[17:58] narrow bands of just a few microns. Coarser resolution sensors such as Gome, Gome 2, Skiiamaki, and Troy require
[18:08] wider bands to detect signals closer to the far red CIF emission peak. Despite these differences, we're now
[18:15] able to robustly measure SIF from multiple instruments, providing a very long history for studying and monitoring global
[18:22] photosynthesis from space. I'd also like to note that this other peak and sift to the left which occurs around 680 nmters
[18:31] is known as red cif and it is useful for observing photosynthetic activity in aquatic regions including inland water
[18:39] bodies as well as the coastal and open ocean. More on this later. And so this section will provide more
[18:46] information on SIP observers and their data products. The past decade has seen remarkable improvements in the ability to observe
[18:56] SIFT remotely from towers, airplanes, and satellites. Here we see active satellite missions in green, including NASA's OCO2 and OCO3 on the
[19:10] top and the European Space Ay's Sentinel 5 precursor mission mission, which carries the tropomi instrument. On the
[19:17] bottom you can see future missions which include the European Space Ay's CO2M and Plex. These are expected to launch
[19:26] within a few years and will provide new and important ways to observe SIFT globally. For example, CO2M will be a
[19:34] constellation of three satellites providing excellent spatial coverage and uh revisit time. Flex will provide high spatial resolution for improved mapping
[19:45] of mixed landscapes including agricultural areas and for the first time full coverage of the full SIP emission spectrum
[19:55] offering improved understanding of photosynthetic efficiency. So here we see an example of the type of global coverage and sampling we are
[20:03] currently seeing from OCO2 and OCO3. OCO2, which is a freeflying satellite in low Earth orbit around the poles, has
[20:14] provided sustained pole-to-pole coverage and midday sampling during the daily peak of photosynthesis since its launch in 2014.
[20:22] OCO3, launched in 2018, is docked on the International Space Station and is in a processing orbit, providing spatial
[20:30] coverage from equatorial to temporate latitudes and temporal coverage at all times of the day. This sampling strategy provides unique
[20:39] information about changes in photosynthetic activity from morning to the afternoon. Oo3 shares the space station platform with its NASA counterparts Jedi which
[20:51] maps plant biomass and Ecostess which maps leaf temperature. Together these instruments provide detailed mapping of plant function across a range of
[21:02] environmental and geographical conditions. conditions. This animation shows complimentary global coverage from OCO2 and O3 during the overlapping period from 2018 to
[21:15] present. Dark green values depict regions where photosynthetic activity is highest. Tropical rainforest, temperate forest and agricultural areas stand out
[21:26] as global hot spots of photosynthesis. This also shows how plants wake up from winter dormcancy at different times
[21:34] across northern latitudes. Starting around March or April and mid latitudes and around May to June in high northern
[21:42] boreal and tundra systems. We can let this play for a little bit longer. And the other type of data that many
[21:59] scientists use is based on proximal remote sensing from towermounted instruments. instruments. These were almost non-existent a decade
[22:07] ago and now span populated and remote regions across the northern hemisphere. These data are unique and powerful in
[22:14] that they observe sift directly over individual plant canopies and even over individual leaves and continuously over the course of a day and throughout the
[22:23] year. Some instruments can also observe at different angles which is useful for pointing at different plants and at different parts
[22:34] of a plant. This is helping scientists and someday farmers understand how different parts of a plant respond to
[22:42] changes in sunlight and stress throughout the growing season. These data provide important insight on their own, but are also critical for
[22:50] validating and interpreting satellite data and informing vegetation and carbon models. Links to these data can be found
[22:57] in the link on the bottom right. Here's an example of how tower and aircraft data can help
[23:04] uh verify the accuracy of satellite data. The figure on the left was derived from colllocated flights of an airborne
[23:12] instrument called the chlorophyll fluorescent imaging spectrometer or sephist with satellite overpasses from OC2. OC2. This shows strong agreement over the
[23:22] track of land the two instruments flew over. over. The right figure shows comparisons between OCO2 aircraft and tower data
[23:32] during colloccated measurements in Colorado. This shows remarkable agreement in both seasonal structure and magnitude. magnitude. Together these validation efforts make a
[23:44] strong case for OCO2 as a gold standard for spaceorn CIF. Now, the trick to making satellite data
[23:53] userfriendly is to make the data gap-free over space and time and at a scale that meets the needs of
[24:00] scientists, land managers, and decision makers. All satellites, including OCO 2 and 3, have to make some type of
[24:07] trade-off in instrument performance. For example, by sacrificing extensive spatial coverage for high spatial resolution or extensive spectral
[24:16] coverage for high spectral resolution, researchers have leveraged OCO's small footprint and traceability to ground data alongside artificial intelligence
[24:26] and complimentary Earth observation data to bridge the gap between local OCO measurements and broader regional applications. Neural networks trained on OC2 CIF and
[24:39] vegetation data from other sensors now produce seamless maps such as this that preserve spatial patterns while filling
[24:47] gaps. These maps provide meaningful spatial resolution, visual clarity, and traceability to land management decisions. decisions. This map derived from NASA's OCO2 and
[25:00] modus data shows productivity in the cornbt region in the Midwest US in exquisite detail. The next three slides show example
[25:11] applications with high resolution SIFT mapping offered by satellite remote sensing. sensing. We start here with crop yield
[25:19] prediction. Agricultural vulnerability to extreme weather is a growing threat to food security. Timely information on crop yield can help anticipate
[25:28] short-term disruptions to food supply and inform adaptive management. Work leveraging an OCO2 driven crop yield product highlights its ability to
[25:38] estimate crop yield at county level with high fidelity relative to USDA reported data and to predict yield up to a month
[25:48] prior to harvest in global agricultural regions including the US crop belt. Drought early warning is another important application for highresolution
[25:59] CIF. Here we see maps of anomalies and SIF on the left and maps of drought from the US drought monitor on the right for
[26:07] the same period in June of 2021. These maps are produced completely independently of each other. Yet there
[26:14] is very strong correspondence between regions with low CIF in red and the presence of drought also in red. Growing
[26:21] evidence such as shown here and in the peer-reviewed literature is building confidence that OCO2based SIFT products can offer additional early warning
[26:30] information on flash drought of value to agencies such as the drought monitor. This information can help producers and
[26:38] managers prepare for worsening conditions in agricultural rangeand and forested regions. We conclude with examples of aquatic applications based on the red bands of
[26:49] tropomi which I mentioned earlier in slide 10. These bands are difficult to retrieve over land especially in dense
[26:56] vegetation because cy is reabsorbed by plant canopies and never makes it to space. However, they are perfect for
[27:04] monitoring and studying the activity of phytolankton or algae floating at the surface of a body of water. The top
[27:12] example shows the daily progression of harmful algo bloom activity along the coast of Florida over the period of a
[27:19] week. The bottom left is a similar example of algo blooms within the salt and sea of California. Both examples
[27:27] have implications for aquatic ecosystems. Human health and fisheries are poor are signs of poor water quality driven by contaminated runoff and
[27:37] illustrate opportunities to mitigate impacts through SIP based early warning. The example on the bottom right shows examples in the o open ocean of the
[27:47] impact of oceanic climate extremes on the productivity of phytolankton. see areas where high sea surface temperatures lead to high productivity
[27:59] and also areas where high sea surface temperatures reduce productivity. And uh maps like this are of interest to
[28:08] scientists trying to understand global ocean productivity and the carbon cycle. So the demonstration portion of the training today um for this part you'll
[28:26] follow along the demonstration so you can see the steps um that you need to follow in order to run the notebook. The
[28:36] Jupyter Notebook, the Jupyter Notebook is available on the GitHub link that you see here and it'll be available for the
[28:45] duration of the live training and um homework submission. Now, for future reference, the notebooks will be uploaded to the RSET GitHub associated
[28:57] with this training. And now we'll be beginning the demonstration portion of this SIF course. So the first portion of our
[29:13] course on solar induced fluoresence data will just be covering retrieving and exploring the data products. And my name
[29:21] is Jacqueline Ryan. I'll be the instructor for the code demonstration portion of this course. A little bit
[29:28] about me is um I'm a data visualization developer at JPL and I've been working at JPL for eight years. My experience is
[29:38] in working with technical and scientific data and presenting it in an intuitive and often interactive manner. So just an overall outline of this
[29:50] course before we get started. It will be split up into three parts. And in part one, which is what we'll be going over
[29:57] today, I'm going to talk you through setting up your environment to work on SIFT data sets, as well as retrieving
[30:04] and spatially gridding this SIFT data. In part two, we'll be covering the OC3 snapshot area map mode, which is a
[30:14] unique mode introduced with that instrument. instrument. We'll be using SAM data to compare with flux tower data taken from the ground
[30:23] and we'll be looking into a case study looking at fire conditions uh through the lens of CIF and GPP data
[30:30] in Oregon from 2020. Finally, in part three, we're going to be talking about the use of gaps fil
[30:38] data products and looking at a case study of the 2019 Midwestern US flood event and its impacts to agriculture in
[30:47] that very important cornbt region of the United States. So, just to reiterate, in part one, I'm going to guide you through downloading
[30:56] and setting up the course materials, recognizing how SIF is measured and used as an alternative or complimentary
[31:03] measure for land and vegetation studies. We'll be retrieving and plotting an individual days worth of SIF data. Then,
[31:11] we'll create a grided raster covering one month of instrument data. and we'll identify the advantages and limitations
[31:18] of using these data to monitor and evaluate vegetation health. So with that, I want to guide you
[31:25] through the basic setup steps and I'll exit out of my presentation now. So to start, what we're going to want to
[31:35] do is to create an account on the NASA Earth data system. The first thing I'm going to do is I will navigate to the
[31:44] ur.eardata.mnasa.gov ur.eardata.mnasa.gov URL. And here you can see my login credentials have already been filled. If you don't have an account already,
[31:55] you'll want to click on the button to register for a profile over here on the right. Um, once you've registered for a
[32:02] profile or logged in, you should be able to see your profile here in the Earth Data URS page. And once you've done that
[32:14] and confirmed that you can successfully log into the Earth Data system, you're all set with this portion
[32:21] because we've confirmed that you have an account. account. So the next thing you'll want to do is
[32:27] to download the course materials themselves using Git and our course materials are on GitHub which I will
[32:35] open up right now. So here you can find the page for our code repository for the CIF arset
[32:44] training course. So, one of the ways that you can obtain the course materials is simply on the
[32:52] GitHub website itself. You can go to code over here and download a zip of the course materials and unpack that zip
[33:03] wherever you'd like on your computer. Alternatively, if you're familiar with using Git and the terminal, you can open
[33:10] up a terminal window. Here I'm on Mac OS so I'm using the terminal application. However, if you're on Windows, you'll
[33:18] want to use the PowerShell application and I've already gone ahead and created a directory that I'd like to use for
[33:28] these course materials called arset. So I'll move into that directory and then I'll clone the repository on the command line. So I'll do get
[33:40] clone. I'll copy the URL of the repository, repository, paste it into my terminal, and hit enter. On PowerShell, you'll run the
[33:49] exact same command if you have git installed. installed. And you can see the cloning was successful. So now I have a new
[33:57] directory called cif arset, the same name as the repository itself. And if I look in this directory, you can
[34:06] see the course materials have been installed. installed. What we need to do now is to set up our
[34:12] authentication so that we can grab the data automatically using the code. And this is why we set up that account on
[34:20] Earth data in the first place. So, one of the files that I've included, which you can't see here, but you can see if
[34:27] you open up an editor, which I'll do now. So, I'm going to open up my editor of choice, which in this case is the VS
[34:37] Code editor. And I'm going to move it down here. And And what you can see is that there is a file
[34:47] called env.example. And this file is serving as an example of how we're going to store our credentials.
[34:59] So, what you'll want to do now is copy this file and rename the copyenv. Don't worry, this is a hidden file and
[35:08] it's common practice for scriptbased authentication. authentication. So, in my case, I'm going to create a new file calledv
[35:17] and I'll replace user and pass with my user and password for logging into NASA Earth data. And since I've already done that and I
[35:29] don't want to expose my password, I'm going to copy that from the folder above. Perfect. Perfect. Okay. So, now that we've set up our
[35:45] authentication, authentication, I want to point out just a quick troubleshooting issue that you may run into. Remember this file should be
[35:53] called env.ech November Victor. Do not name it with any file name at the beginning or use a
[36:02] different file extension after. All right. Now we can run our setup script. And this is the last time we'll
[36:12] be using the terminal in this course. So, if you've had trouble following along with using the terminal and maybe
[36:17] you're not as familiar, um, don't worry. This is the last step that we'll need to do for setting up. Um, I've included two
[36:27] setup scripts in this repository, one for Windows and one for Mac OS or Linux. If you are on a Windows system, you want
[36:37] to use the setup.ps1 script. If you're on a Macintosh or Linux system, you'll want to use setup.sh.
[36:47] And in my case, since I'm on Mac OS, I'll be running setup.sh. So in my terminal, I'll make sure that
[36:55] I'm in the cif arset directory that contains the course materials. And I'll simply run the command setup.sh.
[37:04] What this will do is go through downloading all required dependencies and opening up a Jupiter environment in
[37:13] my web browser. If you have Python installed, make sure that the Python in your path is not an
[37:22] Anaconda environment. While Anaconda is very convenient and a popular choice for using Python, in our case, we'll want to make sure that we're
[37:31] using the standard Python installation that you might get with your operating system. So now you can see that I've
[37:42] successfully installed the dependencies and the Jupiter environment has opened in my web browser. If you've been following along so far,
[37:54] you should now have the first notebook sift data exploration pulled up in a Jupyter notebook environment in your
[38:00] browser, just like you see on my screen. What we'll be doing now is going through the process of retrieving OCO2 and OC3
[38:11] data that's been archived on NASA's Gddard Earth Sciences Data and Information Services Center, also known as Jezdisk. This data is freely
[38:20] available to the public and can be downloaded with the Earth Data account that you just set up. In this first code
[38:27] block, we'll import the libraries we're using for this exercise and set up a helper function for later. I'll run this
[38:34] cell by hitting shift enter. And that will just go through the first time import and setup of these libraries.
[38:44] All right, with that out of the way, we'll talk about the retrieval itself. In the first section, we'll use the
[38:53] provided helper code to download data from the archive. We need to specify the name for our collection or data set
[39:00] which in this case is called O3_L2 lights_IF.11R. lights_IF.11R. It's quite a mouthful of a name, but you
[39:11] can find it on the Jezdisk website when searching for data sets. If you want to find it yourself or find a different
[39:18] data set, you can go to the disk.gscsfc.mnasa.gov gov website and search CIF which I'll open up in my browser so that I can show
[39:29] you how to do that. So here you can see the address that I've gone to and in this search bar here
[39:37] when I search for CIF I can find all of the CIF data sets that are available on
[39:43] the Jezdesk archive and when you click on one of these data sets you'll be able to find the name of
[39:52] the data set itself. So here I can see this one is called O3 L2 light cif which
[39:58] is what we're working with and the version is 11R. If you're confused about how I put that
[40:05] together into the actual data set name I'm using when you go to one of these links for accessing the data itself here
[40:12] you can see the full name of the collection. So let's turn back to the notebook. I'm going to run the cell now and it's
[40:25] going to provide me with a little bit of data about the data set itself. And here you can see the data set name that we've
[40:31] been talking about so far. If you want to use a different data set name, just change the value of this string.
[40:40] So, it's telling me it's gathering data sets on Jezdisk. It's looking at the time range for our data set. And now
[40:47] it's told me that we have a time range from August 6th, 2019 through to January 9th, 2025.
[40:57] And that covers the beginning of the mission through to the latest data that's available on the archive.
[41:04] Now that we've gotten some metadata about the data set, let's look at a specific granle, which is the name that
[41:11] we use for our data files. These data files are in the net CDF format, which is a file format that NASA and other
[41:18] scientific institutions use for storing multivariable data. For this example, we'll access the OO3 SIF data for December 1st, 2019, which we specify
[41:29] using the datetime object here. As I mentioned, net CDF files store many variables. And we can see what data we
[41:37] have by listing the keys of our granle object object like we would for a Python dictionary. So I'll run this cell here and it will
[41:47] tell us what variables are available in the granle. There we go. And here you can see that
[41:56] there is a very very long list of variables that are available in the O3 L2 light granule.
[42:07] There's a lot here and I'm not going to go through every variable, but when you're doing your own research, you can
[42:13] use this list as a reference for what information is included with any given day's worth of OC3 data. In particular,
[42:20] what we're interested in is latitude and longitude, which provide georreerencing information for our data points, as well
[42:28] as daily SIF at 740 nm, 757 nm, and 771 nm. nm. And to find the variables, we can find
[42:41] it in this list here, which you can search through by copying it out into a separate document. But here I've
[42:48] highlighted the longitude variable and we can also find our daily SIF variables elsewhere in this list. So now what we'll want to do is actually
[43:01] look at the data itself. And to do that we'll need to plot it as you might expect.
[43:11] So to plot the samples, we've actually abstracted away the plotting code as a helper function. But conceptually,
[43:19] what's going on is we're creating a scatter plot with the latitude and longitude values to overlay the points
[43:26] on a map and assigning a color based on the value itself. Let's run this cell and see what we get.
[43:34] So looking down here, you can see that I'm pulling out the latitude, longitude, and daily SIF 757 nanometer variables
[43:45] from the granle. And then I'm plotting the samples using the provided helper function. Don't worry about the keywords right
[43:54] away. Um, we'll discuss those later. And another thing you'll notice is that I get a warning from the code. This is a
[44:05] one-time warning and is no concern. So, taking a look at this plot, there's a couple things that we can notice right
[44:12] away. Unlike other remote sensing instruments you might be used to, the swath width of OC3 is very narrow. In
[44:21] fact, it is only one sample wide in most cases. The instrument is not intended to take comprehensive images of the
[44:29] environment like other common remote sensing instruments like modus, but rather it builds up a picture of photosynthetic activity through many
[44:38] successive orbits. Taking a look at our color bar down at the bottom, we can see that the values
[44:44] can actually be negative since our color bar minimum is0.2. Um, and this is due to the uncertainty
[44:55] in the estimates, especially over dry desert regions where the effect of ramen scattering can have a larger effect on
[45:02] the observed radiance. So, taking a look back up at our helper function, you can see that we've set the
[45:09] bounds of the color bar manually using the V min and Vmax keywords, which are in units of watts per meter squared
[45:18] stradian micrometer, the unit of SIF itself. Lastly, let's try to interpret what this data is actually telling us. We can see
[45:28] that in the northern hemisphere over the US and Europe especially sift values are low which is consistent with plants
[45:37] especially deciduous plants tending to be dormant in winter. Tropical forest regions like the Amazon and subsaharan Africa likewise show high
[45:48] sift values which is what we might expect for these regions since plants are active year round there. So here's
[45:55] the Amazon region and here's the subsaharan African region where the SIF values are generally quite high compared
[46:03] to the rest of the data. As I mentioned earlier, the small amount of spatial coverage for a single day
[46:14] means that if we want a broader context of CIF for a given month or season, we will need to gather a time range of data
[46:20] and combine it together. We'll create a data set called a grided raster to accomplish this. In the next section,
[46:27] I'll walk you through retrieving a time range of data and creating a grided raster using the provided helper
[46:33] functions. The code to do this is not very complicated, but it is too complex to cover in this course since our focus
[46:40] is on the scientific data rather than the coding approach. So to begin with to create a grided
[46:48] raster we'll need to obtain a larger amount of data than just the single granle that we plotted earlier. And
[46:56] there's two primary methods that we'll cover for doing this. One would be to download the granules directly. The
[47:03] other would be to use the data access protocol or DAP. Generally it's recommended to download the data directly. But if you have
[47:11] limited disk space or an unreliable internet connection, you may wish to try the DAP method instead. What I'll be
[47:18] covering in this demonstration is downloading the data directly. If you're using DAP, you can skip section three of the notebook and
[47:27] proceed directly to section 4. So to download a time range of data, we'll need to run this cell here, which
[47:38] we've specified will download June 2020 and all of the granules that are available in that month. And so we'll use the provided download
[47:51] time range helper function with our start date and end date and also specify the output path where
[48:01] we want to save the data. Another helpful keyword that we've added is parallel which allows us to download
[48:09] files in parallel to slightly improve the performance. So, I'll run this cell now. And first things first is that the code
[48:20] will ask me if I'd like to proceed. And I'll simply hit Y to say yes, I do want
[48:28] to save an additional 735 megabytes worth of OCO3 data. And the downloads will begin. All right. Now that our data has been
[48:50] downloaded, the code will also give us a summary of what it downloaded. And here you can see each of the individual file
[48:56] names of what was retrieved. And it's also told us that it didn't find any data for June 2nd, 2020.
[49:05] We can find the granules themselves in the newly created data directory. And if I go here in the file browser,
[49:13] you can see it's created a folder named after the collection that we're interested in and an additional folder
[49:20] with the month of data that we downloaded. Okay, so now that we have our data downloaded, let's return to
[49:33] the code notebook itself and actually work on gridding the data itself. Pay close attention in section 4 since
[49:43] as I mentioned earlier, we have two methods of obtaining the data. And to use the DAP protocol, we actually
[49:52] specify a different keyword when creating the grided raster that lets the code know to retrieve the data
[49:59] progressively as it generates the grided raster itself. That means we have option A, which is to use the data that we just
[50:07] downloaded, as well as option B. If you're using PIDAP, you'll want to run option B. So So the first thing we'll need to do is
[50:18] specify the inputs for creating our grided raster. And the specific inputs that we'll specify are the year and month same as
[50:27] we did in section 4 or section 3. Uh and then we'll also specify the name of the file containing the data set that
[50:37] we're going to output when we create the grided raster. So for this demonstration, I'm going to run option A since I downloaded data in
[50:45] section three. First, I'll run the cell containing the inputs, which will run right away since it's just setting some variables.
[50:57] Then I'll run this cell right here. And there's a lot of options here. I'm not going to go through them all right away
[51:04] because I want to show you what we're actually working towards before we discuss the creation options for grided
[51:12] raers. raers. And again, this is a provided helper function that is going to place the data onto a grid for the time range that
[51:23] we've selected. And this will take a couple seconds because of the resolution that we're working at. And then it will save out a
[51:34] data set in net CDF4 format into our data directory. Now that that's completed, we can look in that data folder and see a new file
[51:44] called June 2020.nc4. We can plot this data using the last cell in the section. The color bar in
[51:52] this plot is going to be similar to our first plot for a single granle worth of data, but now we're going to have much
[51:58] higher spatial coverage. So, let's run that now to see what it's actually going to look like. And we can find this cell
[52:06] in display the monthly grided raster. So, I'll run this. And here's our plot of the monthly grided raster itself that we just
[52:16] created. And as expected, you can see that the spatial coverage is much higher than the individual days worth of data.
[52:28] Instead of using individual points to represent each sample, you can see that we've placed the samples on a grid which
[52:34] spreads spreads out their coverage to a minimum resolution of half a degree in latitude and longitude. And that's
[52:42] configurable in the creation options. Multiple samples that lie on the same grid cell or pixel are going to be
[52:50] averaged together to create the monthly average sift that's represented here. As I mentioned, the spatial resolution of 0.5° that we're using, it's going to
[53:01] be suitable for ecosystem level studies or modeling applications, but it's a much lower resolution than OC3's OC3's native resolution of about 2 km by 1 km
[53:14] per pixel. One other thing that you might be able to notice about our grided raster is that there's a pattern that's made by
[53:25] the coverage over time. Since OC3 is mounted on the ISS, its orbit track forms a pattern that you see in the
[53:33] raster. One limitation of the ISS's orbit is that it never goes above 51.6° latitude north or south, which is the
[53:42] same as its orbital inclination. And here you can see that line of 51.6 north and 51.6 south is a little harder to
[53:51] make out but somewhere around here. And so because of the ISS, as I mentioned, our data is never going to
[54:02] extend further north or south than those lines. lines. All right. So to test our intuition about CIF, let's interpret the values
[54:12] that we're seeing in this plot. The highest values of CIF that we can see this time are in the Eastern United
[54:19] States right here, Central Europe here, northeastern China, Russia, and Korea over here. This is consistent with June being at or
[54:34] near the peak of growing season for the northern hemisphere in deciduous forests. So, we would expect to see a
[54:40] strong SIP signal in these regions at this time of year. Meanwhile, the tropical forest regions of Africa and South America also have
[54:49] high S values, although somewhat lower than the northern deciduous broadleaf forests here and here. While these regions are active year
[55:02] round, tropical rainforest typically experience a dry season during June. So, this is consistent with our observed moderate SIF values.
[55:12] Finally, the arid regions of the Sahara desert in Africa here, the Taklamakan desert in western China here, and the
[55:23] Mojave Desert in the southwestern US right here all show low or near zero sif. sif. Now that you have a sense of what we're
[55:32] trying to accomplish with creating a grided raster, we can go back to the earlier part of this section and discuss
[55:39] the various parameters that are available to you. This information is also included in the text of the notebook if you'd like to
[55:45] refer back to it outside of this presentation. presentation. So I'll scroll back up to the section where we created the grided raster and
[55:53] I'll talk about the parameters that we have. Now the first option that we have available to us is which variable that we're
[56:02] looking to turn into a grided raster. In our case, we're using the daily SIF 757 nanometer variable.
[56:12] This variable uh will need to be specified when plotting to let the plotting code know that you
[56:20] want to look at daily SIF 757 nmters as opposed to anything else that you've included in your data set. You'll notice
[56:27] that this is a list meaning you can include multiple variables if you wish. So, one of the things that we'll do is
[56:37] include the other three wavelengths that CIF is provided for. So I'll add in daily SIF 740 nm
[56:50] daily SIF 771 nanm and and those three variables will now be included in our data set. As I mentioned
[57:06] net CDF4 is a multivariable data set >> or a multivariable data format. So we can include multiple data variables if
[57:15] we wish. Next we'll talk about grid size and this is included in the lat res and lawnres
[57:24] keywords. keywords. In our case the default that we've been using is 0.5 degrees per pixel, but you can decrease this resolution if
[57:35] you want to see things at a higher resolution. resolution. A grid size of 0.0 05 degrees is
[57:42] referred to as a climate modeling grid resolution and is often used with Terra and Aqua modus collections, two missions
[57:50] that are commonly used for context data in research and that corresponds to about 6 km per pixel. So I'll set the
[57:58] resolution to 0.05° here. Since the resolution is much higher, it's going to take longer to create the grided raster and it might be
[58:08] difficult to see that higher resolution at a global scale. So we can also provide a bounding box on our data in
[58:16] order to let the code run a little bit faster and also focus the data that we're interested in to a specific
[58:24] region. region. In our case, we're maybe interested in the continental US or KONIS. So, we've included a commented line here that
[58:36] includes a bounding box that covers that region. So, I'll uncomment it now. And that will include the longitude minimum,
[58:44] longitude maximum, latitude minimum, and latitude maximum of our region of interest. interest. Finally, we have the ability to change
[58:54] the filters that we use on the data. So, we can filter the most relevant that data points that we're interested in for
[59:03] our particular task. The quality flag of zero has already been specified here, which tells the gridding code to only
[59:10] use SIP samples that are considered best quality. Points with a quality flag of one are considered good and have higher
[59:17] uncertainty, but may also be included depending on your use case. The quality flag two is bad quality data that may
[59:24] have contained clouds or other factors preventing obtaining a good estimate of CIF from the radiance measured by the
[59:30] detector. detector. We've also included the ability to filter by measurement mode. The instrument has five modes which can
[59:40] be found in the user's guide that we'll link in the video description. Zero corresponds to the nater mode which
[59:46] is a good place to start if we're interested in the most straightforward or ideal SIF observations. Nater mode means that the instrument was
[59:55] observing a ground point directly below the sensor. So the influence of view angle geometry has been minimized.
[1:00:02] Plants and especially forests have what we call surface anisotropy. Which means that the amount of light they receive or reflect varies depending
[1:00:12] on your viewing angle. Intuitively, you can understand this by thinking about how a tree might receive sun from one
[1:00:19] side and not the other and how it might look differently from its shaded side versus its lit side. When we use the
[1:00:25] nater mode for observations, we're considering points that look at trees from a top down view. So we don't
[1:00:32] have to worry about what side of the canopy we're looking at for a given time of day. Remember this information as we
[1:00:38] will discuss measurement modes again in the section second exercise of this course. I'm going to uncomment this line
[1:00:46] to filter my data to just nater mode observations. observations. And now I'll rerun the grided raster to
[1:00:53] create a new data set with our additional parameters that we've added. When we go to plot our data with this
[1:01:07] new data set that we've created, we'll want to make sure that we update the parameters in the plotting section of
[1:01:13] the code to reflect the changes that we made. made. So, let's scroll back down there and let's take a look starting with the
[1:01:24] 740 nanometer data. So the first thing I'll do is change the variable name from daily SIF 757
[1:01:33] nanometers to daily SIF 740 nanometers like so. And then I'll also want to update the plot window to only show me the
[1:01:50] boundaries of the continental US. the same boundaries that we used for creating the data set itself. And that's it. So now we can plot again.
[1:02:04] And here we can see our updated plot. The resolution, as you can see, is greatly increased as compared with the
[1:02:13] resolution of our first grided raster. Additionally, you might be able to notice that the values are somewhat
[1:02:21] different. different. In fact, I forgot a small portion. The title of my plot still hasn't updated to
[1:02:29] reflect that we're plotting 740 nm sif as opposed to 757 nm sif. So, I'll do that now.
[1:02:44] So, since we're using the same color bar, it becomes even more clear the difference between the plots when we
[1:02:52] look at the two of them together in the tab view. So, let me open up this plot
[1:02:59] and then I can open up the previous plot over here. And this isn't a direct comparison since
[1:03:06] we're looking at the two different resolutions, but just qualitatively looking at the difference in values over the eastern United States,
[1:03:16] we can see that the values are a bit lower in the 757 nanometer SIF as compared with 740 nm sif.
[1:03:27] And this relationship will become even more clear when we plot the 771 nm sif. So I'll do that now.
[1:03:39] So we'll switch our variable name to 771 nanometer CIF. And I'll update the plot title and run it again.
[1:03:52] And here you can see that for the same color bar, our values are significantly lower than what we were seeing at 740 or
[1:03:59] even 757 nmters. So, here's our 740. Here's our 771. And let's look at the eastern US next to
[1:04:15] each other. So, what are we actually looking at here? What is the difference of what we're looking at?
[1:04:24] Essentially, Essentially, when we measure CIF, we are estimating CIF as a radiance at a particular wavelength. And you can tell that we're measuring
[1:04:41] radians because of the unit that we use. Um, so that would be the watts per meter squarian micrometer unit down here in
[1:04:51] the color bar. The radiance comes from the detector itself. And the measurement is the amount of radiance or irradiance
[1:05:06] coming from the CIF signal produced by photosynthesis in the plants themselves. And from theory and ground measurements,
[1:05:19] we know that the SIFT signal has a peak at 740 nm and then it trails off as
[1:05:28] wavelength increases with lower values at 757 and 771 nanometers. So, while we're still measuring the same SIF signal coming from the
[1:05:41] photosynthesis reaction, we're getting a weaker signal at the other two wavelengths. So, with that being the case, why
[1:05:51] wouldn't we just use 740 nmter CIF for all of our experiments or our research? The answer lies in the limitations of
[1:06:02] the oxygen band spectrometer that's used to measure CIF itself. So the spectrometer on board OCO2 and OCO3
[1:06:13] OCO3 is not actually able to measure the 740 nanometer band directly but can only measure the 757 and 771 bands amongst
[1:06:24] others. others. This means that the 740 nanometer data is actually interpolated from the other two data points by following the
[1:06:35] expected curve of the SIF signal. As a result of that, there may be increased uncertainty when using the 740 nanometer
[1:06:44] data as compared with data that was retrieved directly from spectrometer radiances. Generally speaking, when we use SIFT
[1:06:58] data, we want to use the data with the lowest uncertainty and the highest signal to noise ratio or the highest
[1:07:04] SNR. For these exercises, we feel that 757 nanometer SIF fulfills that purpose. If you'd like to in explore the
[1:07:13] uncertainty in the data, you can do so on your own. See if you can figure out how to do that with the code that we've
[1:07:19] provided so far. And remember that there's a list of available variables in the granules from an earlier cell that
[1:07:26] we covered. Speaking of which, how do we know the uncertainty in the data in the first place? The SIF values in these
[1:07:34] granules aren't derived by directly inverting the observed gradients through an atmospheric transfer function. Instead, we use a technique called
[1:07:43] optimal estimation. We start with an anial guess of the SIF value. use a forward model, usually a lookup table,
[1:07:52] and we predict what radiance that SIF would produce, then iteratively adjust our SIF estimate until the predicted
[1:08:00] radiance matches the observed radiance within acceptable limits. This approach allows us to rigorously quantify uncertainty by combining sensor
[1:08:11] measurement errors, forward model uncertainties, and the sensitivity of the retrieval to the observations. As a side note, some of you might be
[1:08:19] wondering why we don't derive these values using machine learning. And the uncertainty metric that we get from
[1:08:26] optimal estimation is the primary answer to that question. To put it simply, a machine learning based estimation
[1:08:34] would not give us a rigorous uncertainty in the same way that optimal estimation would. Anyways, now let's review what
[1:08:43] we've done so far and put it all together for the final section of this notebook. notebook. So we'll turn back over to the code of
[1:08:50] the notebook. Getting to this point that is making and plotting a grided raster was a bit of a
[1:08:57] long process and the previous steps broke everything up into many cells so that you could understand each step of
[1:09:03] the process in detail. In the fifth exercise or the fifth section of this exercise, we'll go through everything
[1:09:10] that we covered related to creating a grided raster again but for the OCO2 instrument. Before we do that though,
[1:09:17] I'd like to give you some context as to why we care about creating these types of plots. Let's open up the Dodie at all
[1:09:24] paper from the readme. So, I'll go back to my editor and I'll look at my readme here and I'll open the Dodie at all
[1:09:34] paper in my web browser. So when we look at this paper, you can read through it on your own if
[1:09:51] you're interested, but it's essentially a discussion on SIFT products from OC2 and O3 and comparing them to the earlier
[1:09:59] GOAT satellite. A lot of what we've discussed here is covered in more detail in this paper. However, if we look at figures one and
[1:10:08] two from the paper, we can see that the authors have created gritted raers that look very similar to the grided roster
[1:10:18] that we created so far. Um, like this one here for June 2020, which might be a little small, so I'll zoom into it here
[1:10:28] so you can look at it more closely. The authors are using a different color map, but the idea is essentially the same.
[1:10:38] Okay, so let's turn back to our code. OCO2 is a great resource for those longer term studies since it was
[1:10:48] launched in 2014 compared to OCO3 which was launched in 2019. The spectrometer on board are the same for both OCO2 and
[1:10:57] OC3. So comparing their SIFT values is about as close to an applesto apples comparison as we can get in spacebased
[1:11:04] for most densing. Let's create a grided raster from OOS 2 so that we can review the process and
[1:11:11] see how the two instruments compare. Remember there are three main steps to this process. Step one is we download
[1:11:19] the granules over the time period of interest. In our example we're using June 2020. Step two is we create the grided raster.
[1:11:29] Under the hood, this code is assigning each sample to a grid cell at our chosen resolution, filtering the values that we
[1:11:36] aren't interested in along the way. Our output data set has a grided raster for each day. When we go to plot the raster,
[1:11:45] points assigned to the same grid cell from different days are averaged together. And step three is that we plot
[1:11:51] the grided raster. So looking at the first cell of section 5, we've lined up all the variables that
[1:11:57] can be tweaked as part of this process. Some of these I've already covered, so I won't go into them in detail, but you
[1:12:03] can see we've specified data set. The local data set is dependent on the data set of interest. And it's just the first
[1:12:11] part of the file name for any given granule. We specify the mission name as OCO2, which is included in the title of
[1:12:19] the plot itself. Then we specify the time period of the data of interest, the variable name, the label that gets
[1:12:27] included in the plot, the unit that we're using for the plot itself, itself, and then we automatically set up the
[1:12:36] start and end date as we have been doing before. before. We include the directory that we'd like
[1:12:41] to save data to. And lastly, we specify the name of the data set where we save our grided raster data.
[1:12:50] So I'll run this cell now, which already includes preset values for creating an OC2 grided raster. Then I'll run the cell that downloads
[1:13:02] the granules and generates the grided raster. So, it's going to collect the metadata about the OC2 data set, and then it will ask me if I'd
[1:13:19] like to save 640 megabytes worth of data, which I'll say yes. And it'll go through and download
[1:13:27] all 30 days worth of data for OCO2 in June 2020. Okay. So now that we've created the
[1:13:51] grided raster, we can run the final cell, which is step three, plotting. And I've already included the default
[1:14:00] behavior that I want to plot the 757 nanometer SIFT data. So now that we plotted the data, one of
[1:14:10] the things that we can see right away is the different pattern produced by the orbit as compared with OC3.
[1:14:18] So while the two instruments use the same spectrometer design, OCO2 is mounted on its own spacecraft which
[1:14:25] operates in a sun-synchronous orbit. In practice, this means that it will observe the same local solar time for a
[1:14:32] given latitude on any of its orbits. At the equator, OCO2 provides observations at a local time of 1:15 p.m. It also
[1:14:42] means that it is always moving north to south in a descending node when acquiring data as compared with OO3
[1:14:50] which may be operating in the ascending or descending node depending on where in the ISS its orbit is. On the other hand, the
[1:15:02] crossing orbit pattern that you could see in the OO3 grided raster arises due to that lower orbital inclination angle
[1:15:11] that we mentioned before. And one consequence of that is that O3 can observe the same area of the Earth
[1:15:20] at different times of day through successive revisits. The local time of OC3 CIF samples is included in the
[1:15:29] granules as the geoloccation time TAI 93 variable but using for it for analysis is not covered in this training.
[1:15:41] So So discussing the quantitative differences between OC2 and O3 data in terms of the SIF values themselves will be left for an a
[1:15:54] homework exercise uh that you can complete on your own. So this concludes the demo portion of the first exercise in the CIF training
[1:16:06] course and now I'll turn it back to Erica. Thank you very much to Nick and Jackie for the excellent presentation and
[1:16:17] demonstration. Next, I will provide a summary of today's session. So, the salient point in today's session is that CIF is the remission of absorbed
[1:16:31] sunlight by excited chlorophyll molecules found in plants. CIF is emitted primarily through the absorption of the red portion of
[1:16:40] sunlight and it equals photosynthesis. So it's a it's an indicator of photosynthesis in the plant. It is
[1:16:48] independent of color and weakly sensitive to the interference of clouds and reflections from nonphotosynthesizing nonphotosynthesizing surfaces such as pavement, water, and
[1:17:00] soils. soils. CIF is very good at detecting rapid changes in photosynthetic activity and plant health. The key to the CIF
[1:17:10] retrieval are the frownhoffer lines which are very narrow regions in the optical spectrum of the sun where
[1:17:19] sunlight and atmospheric interference are minimal and the outgoing fluoresence of light from plants fill those frownhoffer lines resulting in a change
[1:17:31] in depth of the frown house frownher lines. There are uh SIF measurements from space and some of those are from
[1:17:41] NASA's OCO2 and OCO3 um sensors or satellites. Another one is uh Sentinel 5 from the European Space
[1:17:51] Agency which carries the Tropomi instrument. And then there are future missions that include ISA's CO2M and flex.
[1:18:02] The OCO2 satellite has provided sustained pole-to-pole coverage and midday sampling during the daily peak of photosynthesis since its launch in 2014.
[1:18:14] OCO3 is a sensor on the International Space Station. It launched in 2019 and is in a precessing orbit providing
[1:18:23] spatial coverage between um the equator and the uh covering the equator and the temperate latitudes and its temporal coverage is at all
[1:18:35] times of day. So some important applications of CIF are crop yield predictions, drought early warning and algo bloom detection.
[1:18:44] A single day of SIF measurements from OC2 or OC3 provides limited spatial coverage, but aggregating the data data
[1:18:52] over several days will ensure more um or wider coverage and OC2 OC3 quality flag of zero is considered good quality data.
[1:19:05] Quality flag of one is considered good, but there might have they it might have higher uncertainty. and a quality flag
[1:19:12] of two indicates bad quality data. The nater mode provides an ideal set of measurements over terrestrial vegetation
[1:19:21] because the sensor is looking straight down, minimizing the influence of the view angle geometry. And finally, the
[1:19:29] 757 nanometer SIFT data has the lowest uncertainty and the highest signal to noise ratio in general. Here are some links to some of the SIF
[1:19:44] products discussed today, including a link to what is CIF TED ED video uh that was shown on slide number two.
[1:19:56] And here is a list of publications with links. They are they are all available to the public and the citations are
[1:20:06] listed within the slide deck. And here is the contact information for today's trainers, Nick Parazu and Jackie
[1:20:20] Ryan. Ryan. If you have any further questions, please feel free to reach out to either of them.
[1:20:29] And finally, looking ahead to the next session, session two, we'll cover SIF measurements in science and applications,
[1:20:38] applications, examples of CIF in OC3 snapshot area map mode or SAM mode. Uh we'll do a comparison with flux tower data and look
[1:20:48] at a case study of fire conditions and in Oregon in 2020. We've reached the end of our session,
[1:21:01] this first session. Again, thank you to uh Nick Parisu and to Jackie Ryan. And thank you to all the participants for
[1:21:11] the questions that have been coming in. We will now start our question and answer session. Great. And um I'd like also a special to
[1:21:22] give a special thank you to Karen Euan from uh the OCO team who has been instrumental in getting this training
[1:21:32] together. So, we've been receiving your questions and we've been compiling them in the Google doc that you see online
[1:21:41] and we will just start going um through each of the questions. Uh I think we'll have enough time. There aren't that many
[1:21:48] questions so far, but feel free to keep the questions coming as we're going down this document. So, we'll start with the
[1:21:55] first question. Are there differences in sift detection in difficult to sense or to characterize landscapes like sage
[1:22:05] brush step or semi semiarid drylands? Um so please go ahead and unmute yourself and uh respond to this question. Dr.
[1:22:15] Parisu or or Jackie. >> Thanks Erica. Yeah I put an answer in there. I can just start by reading that.
[1:22:25] Um so yeah the detectability um is in principle independent of landscape. Uh wherever you have plants photosynthesizing you have plants
[1:22:36] emitting cy and so you should be able to capture some kind of signal. Um but when when you have reduced vegetation cover
[1:22:42] or less productive vegetation you're going to typically have a weaker signal. Um and so that's going to increase the
[1:22:48] noise in the retrieval. Um and so if you if you have enough data, you should be able to, you know, characterize the
[1:22:54] vegetation signal, but um that increased noise will be a compounding factor for for attribution work. >> Great. Thank you. Question number two,
[1:23:06] can LANCAD and Sentinel satellites measure CIF? >> Uh so yes and no. Um no for LANCAD. It's
[1:23:15] a broad broadband spec um instrument and so it it can't resolve the front hopper lines that you need to for the SIP
[1:23:22] retrieval. But the Sentinel 5 precursor um satellite um has an instrument called Tropomi which we covered um in the in
[1:23:31] the webinar and and that is sensitive to the red and far red um SIF bands and so
[1:23:37] you can retrieve SIF from just from the Sentinel 5 precursor tropomy not the other Sentinel satellites. >> Good. All right. Question number three.
[1:23:49] What is photospec on slide 16? Uh so photospec is a tower mounted spectrometer um that we use for for studying uh CIF
[1:24:05] at leaf to to canopy scale. It's also used for uh calibrating and validating satellite data. It it's a it's a similar
[1:24:13] instrument to those in space. um but it it's uh higher performing and and better optimized for for measuring CIF and and
[1:24:23] so it's there's there's a couple of these um instruments um that that are out in the field in in
[1:24:30] North America um somewhere between five and 10 I think. I don't know if that map in in the um in the slide deck shows the
[1:24:38] locations, but but it's basically an instrument for trying to better understand plant canopies. >> Oh, I'll add to that answer a little as
[1:24:49] well. well. >> Go ahead. So Zoe Parat um one of the researchers that we work with um has
[1:24:57] worked with photospec extensively and um I've referenced one of her papers in the read me of the code
[1:25:05] repository. repository. Um so if you want to read a little more about about we don't go over it in the code
[1:25:13] demonstration in part two directly but I do briefly mention it a little more there. Wonderful. Thanks for pointing that out.
[1:25:23] That's a great reference. All right, moving on to question number four. What is the overall ability of this data to resolve metal
[1:25:33] contamination in vegetation? >> So, uh I I attempted to answer this. This is a really great question. Um I I
[1:25:43] don't know the answer. I there's been some work to to observe mineral um fluoresence in non-veated areas and I
[1:25:53] put a reference um to that paper and and so there's a there's a couple satellites O O CO2 and tropomi which can observe um
[1:26:05] fluoresence from minerals um but whether you can observe metal contamination directly in plants is unknown. It may be
[1:26:14] possible to to observe this indirectly by looking at the side effects of metal contamination on plant health, but I
[1:26:21] think it's a it's a great research question. question. >> Yeah, absolutely. And imaging spectroscopy might help with that, too.
[1:26:30] >> That's Yeah, that's right. >> All right. Question number five. Is the current sensor resolution of tropomi
[1:26:39] OCO2 and 3 suitable to apply civ observations for inland aquatic purposes and what would the current limit for
[1:26:47] those observations be? So for example, could you look at algo blooms in the great lakes or the Caspian Sea but not
[1:26:55] at small lakes or rivers? >> Uh that yeah that's correct. So the the spatial resol So you can't do this with
[1:27:05] OC2 and OCO3 because you do need the red bands um the far red bands from OC from
[1:27:12] the OCOs's are are reabsorbed in the water and so you can't detect them from space but for tropomi you can observe
[1:27:19] red cy and so you can monitor algolooms in inland water bodies and in the coastal ocean and the spatial resolution
[1:27:30] for tropomi is around 5 kilometers by 5 km and so it's good for large water bodies but not
[1:27:39] great for small lakes and rivers. >> Great. Thank you. Question six, I I can tackle this one at least part of it. Are
[1:27:49] the data sets and software available for free after the training and how is it different from GIS? So the data sets,
[1:27:56] everything that you're seeing in this training and in the next two sessions is available through the training web page.
[1:28:05] So you can access the code and the data set that it calls. Um and the recording is also going to be available. We'll put
[1:28:14] the recording uh shortly after this training. Uh how is this is it different from GIS? So part of the demo is to show
[1:28:25] participants how to export your files. I'll let Jackie explain that a little further. further. >> Yeah. So um while it is possible to view
[1:28:36] net CDF data sets such as the civ granules that we looked at today in GIS software, software, I wanted to show you all how to use them
[1:28:48] for plotting in more custom ways. Um as many people use many different types of GIS software. So I didn't want to make
[1:28:58] this necessarily a GIS software specific tutorial such a GIS. With that being said, um you're certainly able to open later on in the
[1:29:14] course we'll be looking at Geotif data which is very well supported by I'll also try to answer the next
[1:29:29] question. Uh so why is it not recommended to use cond environments? Um I'll try to be maybe a little candid here. Um I'm not
[1:29:40] as familiar with using Anaconda myself. Developer understand that it is a very popular choice for using Python.
[1:29:51] When it came time to creating the course, course, probably the most convenient way of making it available would have been
[1:29:59] through a Google Collab. However, due to the constraints of storage with that platform and some of the ways that we're working with data,
[1:30:10] it was challenging um for me to make the course compatible with Google Collab. Um so I selected this um
[1:30:23] standard Python installationbased method of installation to be compatible with um as many users as possible. If there's a lot of interest in having
[1:30:39] be supported, I could create a fork of the repository after this course. Thank you very much, Jackie. So, yes,
[1:30:48] those um that would be interested in using a cond environment, please um express your interest in the chat. And
[1:30:56] as Jackie said, if there's a large interest, she can then create something. Um and also going back to question
[1:31:03] number six, um I know that many GIS users do you use Geotiff data. So the uh demos that Jackie is going to be doing
[1:31:14] in the next sessions will show how to get to that step to exporting as geotiffs. geotiffs. All right. So question number eight. How
[1:31:24] rapidly does the civ signal of a plant vary with changes in its health or how quickly can I detect the existence of
[1:31:32] stressors in an area in a vegetated area? area? So, if we're talking about environmental stressors like heat and water stress,
[1:31:42] then yeah, CIF will change rapidly over the course of a day. Um, and you'll you'll see a reduction in CIF. Uh,
[1:31:51] typically um associated with midday heat and water stress. And you can't really see this from space because um the
[1:31:59] um our current instruments are observing um um that frequently, but you can see this from tower sensors because they're
[1:32:07] observing continuously. Um there's there's other like disturbance impacts um related to you know insects and um other kind of um external forcings I
[1:32:22] guess. And so th those changes would happen more over the course of several days to weeks and and so in principle you could see
[1:32:30] those changes in the SI signal. Great. Thanks. Question number nine. I have the Python 3 environment that comes
[1:32:42] with RGIS Pro. It is Anaconda based. As I understand I will need to install the standard Python environment. Can I
[1:32:50] assume this will not break my existing Python environment? >> Um, so the short answer would be yes
[1:33:00] because uh the way that the installation in the setup script works is that it creates a virtual environment. Um, so
[1:33:08] the dependencies are installed within the VNV directory. Um, with that being said, um, I'm definitely getting the impression that a
[1:33:18] lot of you prefer to use cond. Um, I understand that it's very popular in the GIS community
[1:33:26] and so yeah, I'll I'll try to support that since it seems like there's a lot of interest.
[1:33:38] >> Thanks, Jackie. and we can make that announcement uh maybe in the session two or session three in terms of uh what you
[1:33:44] can support related to cond. Uh question number 10. I'm interested in using civ for detecting algae blooms. Can you share case studies
[1:33:57] with a specific methodology to follow? >> Yeah. So I've provided two case studies here. one for inland water body and one
[1:34:06] for coastal uh harmful algoloom. >> Wonderful. Thank you. Question 11. Does CIF saturate similar to greenhouse greenness indices like NDVI? Does the
[1:34:19] relationship between CIF and photosynthesis remain linear across varying vegetation densities etc? there. So the emission does not saturate
[1:34:30] um but the relationship with photosynthesis changes at different light levels. So you typically have a very strong linear positive relationship
[1:34:39] at low light levels and then it becomes um that linearity saturates at highlight and it can become negative.
[1:34:48] uh and then you yeah the the slope of the relationship so the the the the rate of change of cy with photosynthesis does
[1:34:56] depend on vegetation properties like leaf area and biomass and composition. those types of studies are um less prevalent but on more I would say
[1:35:08] more ongoing as we are able to make comparisons um with with new imaging spectrometers that can measure things
[1:35:15] like leap area biomass and composition >> I'll handle question 12 I did answer it in the chat
[1:35:26] >> but I'll reiterate here >> for the helper function that we've provided. It only supports rectangular bounding boxes
[1:35:37] >> for all the code is open source and um if you'd like to extend it to support
[1:35:46] polygon boundaries um could be something that you pursue as well. well. In general, it's it's >> unless you're doing spatial averaging,
[1:36:01] it doesn't hurt anything to include more data than is necessary. >> All right, thank you Jackie. And then
[1:36:13] following on uh question 13 in cell number five, what is the difference between variables data set and local
[1:36:20] data set? Is it related to the downloaded data on a local computer and the other is downloaded directly from
[1:36:28] Earth data? >> Go ahead, Jackie. >> Oh, uh, sorry. >> Um, >> question 13. >> Oh, yeah. Um, I was trying to answer a
[1:36:44] question in the chat as well. Sorry. Um so for the data set that is the way that
[1:36:52] it's referred to online. Local data sets is in reference to the way that the data is referred to in its file name.
[1:37:06] And for whatever reason they are different from each other and there's no assistant terminology like automatically determine the way
[1:37:21] that file naming convention works or an individual file and the data set name. So they have to be separate
[1:37:33] makes sense. All right, thank you. So question number 14, what are granules? >> Granle is uh just another name we can
[1:37:50] use at refer containing your your audio is coming a little in and out. So so granules is just another
[1:38:04] name for a file, right? Go ahead, repeat it. Let me switch my microphone input. Maybe that will help. Um, a granular is just
[1:38:16] another name um for a file that we use for storing spacecraft data. Yes. >> Wonderful. Thanks. That came in clearly.
[1:38:26] All right. Question number 15. Is there a relationship between CIF and carbon absorption? absorption? Yeah, it's um so for photosynthetic
[1:38:38] carbon uptake there's a positive correlation correlation um and so CIF will generally increase uh with increases in photosynthesis
[1:38:51] but downstream from there if we're talking about um the processes after kind of dark respiration and then autorophic
[1:39:01] respiration respiration these things that happen after carbon has been assimilated into the plant, then we can't say um whether there's a
[1:39:12] strong positive or negative relationship between SIP and and net carbon uptake. But for for photosynthesis, it's typically strongly positive and linear.
[1:39:24] >> All right, the next question, which is question number 16. Will we be able to easily combine the data from future
[1:39:32] satellites with existing satellite data into a single rendering? It's a great question. uh easily, maybe not. But in principle, we're we're
[1:39:46] currently combining data streams from current satellites and and past satellites um by trying to harmonize the way that those retrievalss
[1:40:01] are done. And and so we have instruments that go all the way back to 1995 which observe CIF in a very similar way
[1:40:08] to the way we're currently observing CIF from things like OCO 2 and three. And if you can you know ensure that the
[1:40:18] the retrieval is done in the same way um and that and you can use uh data data fusion methods machine learning
[1:40:30] artificial intelligence these these different um tools for um um down so you we call this downscaling. So
[1:40:41] when you go from one spatial resolution to another spatial resolution, um if if you can use machine learning
[1:40:49] tools to kind of normalize the spatial resolution of the different satellite data sets, then then yes, you can um
[1:40:59] combine data from ex past, current and future satellites and get a a continuous data stream, which is very important for
[1:41:07] monitoring long-term change. All right, thank you. Question number 17. What is the maximum spatial resolution that can be obtained for
[1:41:20] using SIFT data in local agriculture? A spatial resolution of 10 to 30 meters would allow local analysis. In Colombia,
[1:41:28] for example, a 2 kmter resolution is not useful because there is a high number there are a high number of small
[1:41:34] producers, >> right? Um so the the current best um that we can do um from from satellite instruments is is about 3 km
[1:41:48] squared. And so it's not not great for for local agriculture or or field scale applications. But there there is a lot
[1:41:57] of work um to use machine learning tools that combine CIF with other vegetation data such as vegetation indices from
[1:42:09] LANCAT and sentinel products which are 10 to 30 meter resolution. And so these models will be able to predict CIF based
[1:42:16] on their relationship to uh other high resolution spectral data. And so you can get down to field scale
[1:42:26] where it could become more informative for local agriculture, but only but you have to keep in mind that it's when when
[1:42:33] you use machine learning tools to manipulate the data, it's no longer a a true SIF signal. It becomes this hybrid
[1:42:42] product um which is um informed by multiple vegetation products. And this is an emerging field and um we're not expecting to be able to
[1:42:55] resolve down to 10 to 30 meter scale for CIF anytime in the near future and so these kind of tools will be important
[1:43:02] for agricultural applications. >> Thank you. Uh Jackie, would you like to add something? >> There is a paper that I can recall. Um I
[1:43:18] don't have it on hand. Um however, they used a um a neural network with ancillary data from I believe one of the Sentinel
[1:43:32] satellites to um um downscale the SIF data to a 30 meter resolution. resolution. Um, and I can add the DOI for that paper
[1:43:46] uh to this um Q&A after this session. >> Great. Thank you for that. That would be a great reference. Yeah.
[1:43:58] >> Question 18. Can the layers be resampled to a higher spatial resolution? What are the maximum minimum resolutions in
[1:44:04] latitude and longitude? So I think part of that was answered in question 17 but if you want to go ahead and add to it.
[1:44:14] >> Yeah that that was answered um using yeah neural network tools uh and random forest modeling can can be are are
[1:44:24] currently used to resample SIP data to higher spatial resolutions. um for for mo most most satellites are
[1:44:34] on a low earth orbit, so they're polar orbiting. So they can observe from pole to pole. So, um, from the the co coastal
[1:44:43] Antarctica up to the the north slope of of Alaska and and Siberia and so there's no latitude longitude
[1:44:52] extent for the the low earth observers. But for OC3, it's uh sitting on the space station and and so it can only
[1:45:02] um observe up to around 52 degrees north and south. Okay, great. Thank you. Question number 19. Do these satellite platforms provide
[1:45:15] continuous or complete coverage like Sentinel? I'm assuming Sentinel one or Sentinel 2, which are image. >> Yeah, for for individual satellites, uh
[1:45:27] OO. OO. Yeah. So, it just depends on how long the mission has been operating. uh but as as long as it's um
[1:45:37] active it and the retrievalss are being performed then yeah it's more or less continuous and complete. So for for
[1:45:45] Sentinel one and two I I I think Sentinel 2 goes back to 2014 and and not sure about Sentinel one
[1:45:58] but for for individual satellite it's more or less continuous. Yeah. >> Yeah. Sentinel one starts 2014 and then
[1:46:08] 2016 I believe. Sentinel 1B. >> All right. Uh question 20. How many spectral bands does the sensor have?
[1:46:18] >> Um for OCO 2 and three. Um I don't know the I think it's a couple hundred. Um
[1:46:33] I can't remember what the the spectral sampling density is but it's it's you know one or 200 nanometer
[1:46:40] um well one or 200 bands and each band is about 0.05 nanometers wide but it but it's only covering one to one to two
[1:46:51] nanometer window and so it's it's not a very wide window. And so when we say it's these have these are high spectral
[1:46:58] resolution sensors, it means that they're able to um to see these very narrow narrow front hopper lines which are needed for
[1:47:08] the SIP retrieval. Um if we're talking about something like tropomi, it also has several hundred um spectral bands, but the the spectral
[1:47:22] resolution is wider. And so the the spectral range is also wider. And yeah, it's it's a similar trade-off
[1:47:33] for other satellites. Okay, question number 21. What is the minimum area that can be analyzed? analyzed? >> Uh,
[1:47:48] so currently we're at about 3 km squared for for OCO2 and three and that's for an individual footprint.
[1:48:01] But you can Yeah, I don't know. All right, thank you. How about uh question? Let's move on to question 22.
[1:48:13] Is it possible to obtain CIF or a similar index using other satellite I guess sensors? >> Yeah. So we have uh
[1:48:27] we can observe SIF I I'll just name the instruments. Um so so Gome um which is a European erome
[1:48:38] goes from 95 to 200 two I think. Then there's Skiiamaki. So Gome was uh an instrument designed to
[1:48:48] measure ozone but we've been able to retrieve SIP from it. Skiamaki was for designed for methane but it also covers
[1:48:56] a SIP band. So that goes from 20 2002 to 2012. There's Gome 2 and there um in
[1:49:02] multiple versions of Gome 2 and that spans from 2007 through 2022. There's GOAT 2 which is Japanese
[1:49:12] instrument also designed for CO2 but carries CIF and you that goes from 2009 through around 2020. Um
[1:49:23] Um and then there's uh OC2 and OC3. OC2 starts in 2014 is still and is ongoing. OCO3 was in 2018 and is ongoing or 2019
[1:49:34] and is ongoing. And then there's Tropomi which uh is a European the Sentinel 5 precursor and that started in 2018. And then future
[1:49:44] missions include the the CO2M instrument um um from ISA and then Flex also from ISA. >> Great. So a number of satellites sensors
[1:50:02] >> or space add that um I review this information in my part three presentation which will be
[1:50:11] in two weeks. Super. Super. All right. Question number 23. How do you address the issue of signal anistrop
[1:50:22] anisotropy in the case of tower data? The tower data is a is a challenge. you're getting a lot of a lot of
[1:50:37] information at at multiple angles, viewing angles and sun angles. and and because of the different view angles and
[1:50:44] sun angles, you can um you can definitely alias changes in the the angle of the sunlight um into
[1:50:55] the emission of CIF and and so there's there's not a a very easy way of dealing with this.
[1:51:04] averaging the data over space and time is is one way you can compute the the phase angle of the of the measurement
[1:51:12] which is the angle between the the sensor and the sun and that that's a way of normalizing the data and that's been
[1:51:19] done for satellites and for towers. um um you the the CIF emission is independent itself is independent of it's it's kind
[1:51:30] of isotropic so it'll it'll go in all directions but the the real issue is the the angle of the measurement and the
[1:51:35] angle of the sun and so we typically use something called the phase angle to account for that.
[1:51:47] >> Okay, great. Thank you. Question number four. We've uh answered this question previously and I and there have been
[1:51:54] some references too on using CIF to look at macro at algae and and kelp forest. So we'll just skip that one in the
[1:52:03] interest of time. And then the question number 25 during the winter can we observe a very weak photosynthesis
[1:52:10] signal and what is the smallest signal that OCO2 and OCO3 are able to detect? We saw some negative values during the
[1:52:18] demo. Should those values be set to zero or removed? >> Um, right. So, yes, you we do observe
[1:52:28] weak photosynthesis in the wintertime in uh evergreen needle forests and there's several papers about this which we can
[1:52:38] um provide. The smallest signal in principle is you know zero. You can observe everything from zero up to the, you
[1:52:48] know, a small little moss plant up in the tundra to the the, you know, a large tropical forest. And so there's really
[1:52:58] no limit there. Uh negative values are are not physical. Those are an impact um of the retrieval
[1:53:06] and retrieval noise. And so but they are they do carry signal, especially if you're looking for spatial and temporal
[1:53:12] variability. you do not want to remove those negative values, but typically you'll average those um but you'll
[1:53:19] average multiple retrievalss um over a given area and that can mitigate the negative value impact but but you don't want to get rid
[1:53:28] of those because there is information there. All right, so we have a couple of new questions um coming in. Is there any
[1:53:41] other method to increase the spatial resolution without resampling downscaling and machine learning techniques? um without resampling you well no if you don't alter the data
[1:53:59] then you can't change the spatial resolution but I will say that there's a there's a way of using overlapping data
[1:54:07] to um improve the spatial resolution relative to the the individual footprint. And so if you if you have an
[1:54:15] area which has been observed multiple times from different angles uh and you can use that spatial overlap between the the different
[1:54:26] samples to increase the spatial resolution and and so OCO2 and OCO3 have a a special observing mode called target
[1:54:36] um where you are observing the same area multiple times over during one overpass And there are there is work to to
[1:54:46] spatially down sample based on that um on those overlapping data. But yeah, without any kind of um resampling or
[1:54:55] downscaling or machine learning tool, uh you wouldn't be able to change the spatial resolution. >> Okay, thank you. Question number 27. To
[1:55:08] what extent does towerbased sift data measure photosynthesis in different species or parts of a plant and can you
[1:55:14] provide examples of papers of any? >> So we have a network of uh of towers um all over the world and there's even a
[1:55:27] tower in Africa and so the the extent to which these towers can measure different species depends on where the tower is
[1:55:33] placed. placed. Um, and there's also different designs, instrument designs. Some towers uh will have a they'll be downward looking and
[1:55:43] they'll have a hemispheric view and they'll measure everything within that field of view. And so you can't
[1:55:47] distinguish between different plants. Other instruments can scan and they can um observe at leaf scale. So they can point at a leaf and
[1:55:59] then scan across the canopy. And they can also scan across different plants within that landscape. And so so it
[1:56:08] depends on the instrument and it depends on the location. Um Um but but yes, you you should be able to
[1:56:14] observe different species and parts of a plant. For for the for the second part here with the different parts of a plant
[1:56:21] for that scanning instrument such as photospec, there's a mode where you can scan vertically and horizontally. And so
[1:56:28] you can look at leaves lower in the canopy or understory plants which have typically lower sunlight and so you
[1:56:36] would see one signal there. And you can also look at leaves at the top of the canopy which are in full sunlight and
[1:56:42] you would have a a different signal. And so by scanning the different parts of the canopy, it helps you integrate um
[1:56:50] that signal over the entire canopy which is uh useful for understanding um how that translates to photosynthesis.
[1:57:02] I'll also mention that um we'll be covering powerbased SIFT measurements more in part two next week and um we'll
[1:57:12] be considering it primarily at the biome level rather than at the species level. Good. Thanks. And then the last question, can we use
[1:57:26] Koulab instead of installing Python 3? Um this was partly answered in an earlier question. Google Collab was
[1:57:38] discussed. Um in the development of this course uh there were certain challenges with compatibility and uh storage limitations
[1:57:50] for free accounts. Um so we opted to use a local installation method for the code demonstration. demonstration. Yes, thank you. Um, yeah, that was
[1:58:02] indeed addressed. So, all right. So, that leads us to the end of this session and questions. Uh,
[1:58:10] I'd like to thank our um participants um for their interest in this topic, for all of the great questions. As you know,
[1:58:20] if you have any further questions, please feel free to reach out to our guest instructors today. Um, I would
[1:58:26] like to thank the ARSET team and I would like to thank most of all our guest instructors today, uh, Jackie Ryan and
[1:58:34] Dr. Nick Parisu. Um, I'd like to remind you that there are three sessions in this training. The next one will be next
[1:58:42] Wednesday at the same time and Dr. Dr. Junji Louu from JPL will be uh covering the theoretical portion of that um
[1:58:52] session which will be focused on um the overview of she'll be providing an overview of OCO2 and OCO3 observing
[1:59:02] modes modes um and CIF observations and then Jackie is going to be doing another demo on how
[1:59:10] to use a specific mode on OC3 called the snapshot area mode, how to how to use those data sets. So before I close
[1:59:18] today, I would like to um provide the forum to uh Jackie if she would like to say any closing words.
[1:59:29] Um I don't really have anything specific to add. I do know um that some of you have had issues with either
[1:59:38] setting up the code or running it and I do apologize for that. Um, many people have many different setups
[1:59:46] on their computers and there's different levels of familiarity with using certain tools such as Docker, Anaconda. Um, I know you all come from different
[1:59:56] backgrounds. So, um, if you're having issues, feel free to email me and I can try to, um, address as many of them as I
[2:00:04] can to get you unstuck. >> Super. Thank you very much, Jackie. And Dr. Perisu, would you like to say any
[2:00:10] closing words? Thanks everyone for attending. It was great to to see um the high number of attendees here um and the interest. And
[2:00:20] please feel free to reach out. I think my email is on the top of the Q&A page
[2:00:25] here and uh be happy to um answer any questions offline from here. >> Super. Thanks very much and wishing
[2:00:36] everyone a great day and until next Wednesday at the same time. Bye-bye.
