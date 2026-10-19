# Overview of Hyperspectral Data, Part 1/3

`https://www.youtube.com/watch?v=FjKVptgr3uU` · id 170 · 1:34:02 · module 103 — Hyperspectral Data for Land and Coastal Systems (Self-Paced)

[00:01] Hi everyone. Thank you for joining us for part one of our series, hyperspectral data for land and coastal systems. My name is Amber
[00:11] McCullum and I will be joined by by my colleagues, Juan Torres Perez and Zack Benston throughout this training.
[00:23] For those of you who may be unfamiliar with our ARSET program, we are part of NASA's capacity building program under
[00:30] applied sciences and are designed to empower the global community through remote sensing training. We have a variety of training types with
[00:40] these four application areas, air quality, water resources, disasters and eco forecasting, which is where our team resides.
[00:50] resides. Our training levels are on the spectrum from introductory all the way to advanced trainings with guides for
[00:57] remote sensing analysis. This series is on the introductory level. level. Our trainings are designed for professionals within natural resource
[01:07] management agencies, policy makers and other environmental decision makers. For this training, we will have three sessions, sessions, each being 1 and 1/2 hours long on
[01:21] January 19th, today, the 26th and February 2nd. The same material will be presented twice per day to help with participation
[01:32] from folks in different parts of the world. Note that you only need to attend one session per day and you can find all
[01:41] the the materials for the course at the website listed here. There is only one prerequisite for this
[01:52] training, an understanding of the basics of remote sensing with our course on those concepts listed here. here. Also,
[02:02] Also, here's the website again where you can find the lecture materials, a link to watch the session recordings after the
[02:09] live sessions and eventually a link to the homework. For this series, we will have one homework assignment.
[02:19] The link to the homework will be made available during the last session and will be due on Tuesday, February 16th.
[02:29] The homework will be completed via Google Forms and you'll submit this all online. online. If you attend all the sessions and
[02:38] complete the homework by the deadline, you will receive a certificate of completion. completion. And please be patient as it does take a
[02:46] few months to complete these certificates and send them to all of our participants. As I mentioned, this series will consist
[02:59] of three sessions. During this first session, you will be provided with a general overview of hyperspectral data.
[03:07] Then in the subsequent sessions, we will review applications of hyperspectral data for land applications and coastal and ocean systems. And in the second and
[03:19] third sessions, we will also have a demonstration of accessing data. Here are the learning objectives for the
[03:28] first session. You will learn how to recognize hyperspectral data and how it differs from multispectral data, identify current hyperspectral sensors
[03:42] and future hyperspectral satellite missions of interest. And finally, you'll be able to locate available hyperspectral data and
[03:51] identify data processing platforms. I also want to mention that at the end of the lecture portion today, we will
[04:00] have plenty of time for question and answers. So, please do type your questions into the chat box along the
[04:08] way and we will categorize all of those and get to as many questions at the end. If we don't get to all of the questions
[04:19] during our session, you can also email myself or my colleague, Juan Torres Perez and our email addresses were shown
[04:27] on a previous slide and we'll show them at the end as well. Okay, so let's start off with a really
[04:36] basic overview of hyperspectral data. With hyperspectral remote sensing, we will be speaking mostly about the visible and infrared portions of the
[04:49] electromagnetic spectrum. Surface reflectance at different parts spectrum or wavelengths are used to identify identify properties on the Earth's surface.
[05:02] This variation in the reflectance of wavelengths is what allows us to differentiate features such as land cover types or water quality parameters.
[05:14] So, in this schematic, you can see the sizes of different waveforms along the electromagnetic spectrum and for optical remote sensing, which is
[05:24] mostly what we'll be focusing on here, we generally use wavelengths from the infrared to the visible range.
[05:35] As a review, optical sensors use the energy from the sun and record the reflected radiation from various surfaces on the ground.
[05:47] Reflectance occurs along the electromagnetic spectrum and the sensor picks up the reflected energy along various wavelength intervals.
[05:59] intervals. Thus, the spectral resolution is the ability of a sensor to define wavelength intervals intervals and the wavelength intervals can be
[06:09] wide, which means they cover a larger range of frequencies, or narrow, which means they cover a small range of
[06:17] frequencies. frequencies. Each band or wavelength range represents a different part of the electromagnetic spectrum. spectrum. So, the finer the spectral resolution,
[06:31] the narrower the wavelength for a particular channel or band. So, you may be familiar with multispectral imagers such as Landsat.
[06:45] These measure the radiation reflected from a surface at a few wide separated wavelength bands. In the figure on the right, with the
[06:56] gray, you can see those wavelength ranges. With Landsat 8, for example, band 5 or the near infrared band, has a wavelength
[07:08] range of 850 to 880 nanometers. So, the range is 30 nanometers. Most hyperspectral imagers, on the other
[07:19] hand, measure reflected radiation at a series of narrow and contiguous wavelength bands. So, the wavelength range for
[07:28] hyperspectral sensor may only be 5 nanometers instead of 30. When we look at a spectrum for one pixel
[07:37] in a hyperspectral image, it looks very much like the spectrum that would be measured in a spectroscopy
[07:44] laboratory. laboratory. This type of detailed pixel spectrum can provide much more information about the surface than a multispectral
[07:54] pixel. So then, what really is hyperspectral remote sensing? So, this is the acquisition of images in use
[08:07] of contiguous registered spectral bands. Although most hyperspectral sensors measure hundreds of wavelengths, it's not the number of measured
[08:19] wavelengths that defines a sensor as hyperspectral. hyperspectral. Rather, it's the narrowness and contiguous nature measurements. measurements. Essentially, hyperspectral data is
[08:31] characterized by many bands and measuring reflectance at close intervals along the electromagnetic spectrum to better characterize spectral signatures
[08:42] and reflectance of land cover, water and the atmosphere. Hyperspectral imagery especially refers to data captured with bands spaced 10
[08:56] nanometers or less from one another. So, here is another comparison figure of the multispectral imagery on the left
[09:08] and the hyperspectral imagery on the right. right. When we think of something like Landsat, we have 11 bands in three in the visible
[09:18] portion of the electromagnetic spectrum. So, when we look at the reflectance from each of these wavelengths, we essentially only have three pieces of
[09:29] information information like these three bar graphs that you can see here on the left. But when we examine hyperspectral data,
[09:38] we have hundreds of bands within just the visible portion of the spectrum and at other wavelengths. So, we can obtain a much more detailed
[09:48] picture like a time series of reflectance in these many bands across the electromagnetic spectrum. This This differentiates subtle differences on the
[09:59] ground that may not be available with my multi-spectral data. So, here is another schematic that really illustrates the usefulness of
[10:11] hyperspectral data. On the top is an example of a multi-spectral sensor. Again, we can think of Landsat.
[10:19] And on the bottom is an example of a hyperspectral sensor. This outlines the wide and narrow wavelength ranges in the multi-spectral
[10:29] versus hyperspectral sensors. Notice how closely spaced the bands of the hyperspectral sensor are. The narrow bands of the hyperspectral
[10:40] sensor give us a lot more information to use. Much of the data currently available to the public is multi-spectral.
[10:53] So, as I discussed, these are sensors like Landsat with a limited number of bands. bands. And these usually have relatively high
[11:03] resolution and are usually global. Hyperspectral data, on the other hand, has the advantage of the increased spectral resolution.
[11:13] However, hyperspectral data sources are currently limited. A number of hyperspectral missions are ongoing and planned, but these data are
[11:24] not yet freely available over the same spatial scale as multi-spectral data, which we will discuss in much more
[11:33] detail um later on in the lecture. So, with hyperspectral attributes in mind, mind, you can now identify why spectral
[11:44] resolution is really important. When we have a lot of those narrow bands, we obtain a level of spectral
[11:52] detail that might go unnoticed in a multi-spectral sensor. For example, you can see here uh four spectral signatures:
[12:02] pinewoods in purple, grasslands in green, sand in black, and silty water in red. While you may be able to distinguish
[12:12] water from grasslands with a multi-spectral sensor, it might be difficult to distinguish different vegetation types from one
[12:22] another, another, such as the pinewood versus the grasslands, grasslands, because as you can see here, they are
[12:29] spectrally very similar. But with a hyperspectral sensor, you could clearly identify some of those differences in the pinewoods versus the
[12:39] grasslands. Because of this unique ability to identify many different spectral reflectance values across these narrow bands, there are many applications of
[12:54] hyperspectral data. And these include things like geology, invasive species, coastal and ocean monitoring, monitoring, carbon monitoring, analyzing microbial life in the Arctic,
[13:08] and volcanic activity. And there are many more, actually. In this image, you can see how hyperspectral data can be used to
[13:17] distinguish different types of coral in order to conduct a robust classification. Here's another example of the ability of
[13:30] hyperspectral data to distinguish between different minerals. Just as iron and copper look different in visible light, iron and copper-rich
[13:40] minerals reflect varying amounts of light in the infrared spectrum. So, this graph compares the reflectance of hematite,
[13:50] an iron ore, in blue, with malachite in green, and chrysocolla, the copper-rich minerals, in red from 200 to 3,000
[14:01] nanometers. So, you can clearly see some of these differences. Okay. Okay. So, now that we have um given you a
[14:12] brief review of what hyperspectral data are and why they're useful, let's move on to discussing some specific
[14:22] hyperspectral sensors. There are multiple satellite-based sensors, and these include EO-1 Hyperion, which was a very popular system,
[14:36] system, and two test missions on board the International Space Station, or the ISS. These are the Hyperspectral Imager for
[14:44] the Coastal Ocean, or HICO, and the Ecosystem Spaceborne Thermal Radiometer Experiment on Space Station, or ECOSTRESS. There are others that are flown on
[14:57] airplanes, airplanes, and these include the Airborne Visible Infrared Imaging Spectrometer, or AVIRIS, which has been flown throughout
[15:08] the world, and PRISM on board the Coral Reef Airborne Laboratory, or CORAL. And we'll discuss each of these specifically.
[15:19] So, Hyperion is one of the most popular hyperspectral satellite systems, and it was launched in November of 2000
[15:28] and was decommissioned in 2017. The Earth Observing One, or EO-1, satellite was launched on November 21st, 2000,
[15:41] 2000, as a one-year technology demonstration validation mission. After the initial technology mission was completed, NASA and the USGS agreed to
[15:53] the continuation of the EO-1 program as an extended mission. It collected 220 unique spectral channels ranging from
[16:05] 375 375 357 357 to um 2,576 nanometers with a um 10 nanometer bandwidth. bandwidth. It had a spatial resolution of 30 m for
[16:20] all the bands, and the standard scene width was um 7.7 km. So, actually a very pretty narrow
[16:29] strip. strip. And the standard scene length is 42 km with an the option to increase the scene
[16:38] length to 185 km. So, in these images here, um this long strip that you can see is an image of
[16:46] Mount Fuji from 2000. And the image on the bottom gives you an example, again, of how different the Hyperion spectral range is
[16:56] from the Landsat um band, for example. So, you can see that within only a couple Landsat bands, there uh
[17:06] much higher spectral resolution there with Hyperion. Some of the Hyperion data has been processed and archived, so you will need
[17:15] to check in on some of the data portals of how you can access these data, and we'll also um be speaking about that
[17:23] later today, as well as during our second session. One use of Hyperion is for mapping mineral deposits.
[17:36] Here, the hundreds of bands in the hyperspectral imagery enable researchers to differentiate minerals and rocks that appear similar in visible light.
[17:47] So, these images are of outcrops at a mining site in Jordan, where you can see the minerals are
[17:56] uniformly dark in the natural color image along the top, and are um in the false color image on the bottom.
[18:07] So, here you can identify um different rock types for um mining activities or for um just geological mapping in general.
[18:23] The next satellite hyperspectral sensor is the Hyperspectral Imager for the Coastal Ocean, or HICO. HICO was the first spaceborne imaging
[18:34] spectrometer designed to sample the coastal ocean. It was flown on board Space Station and was used to sample a specific
[18:46] coastal region at 90 m uh spatial resolution resolution with spectral coverage from 380 to 960 nanometers. nanometers. So, for HICO, the bands were sampled at
[19:01] every 5.7 nanometers. This sensor has a very high signal-to-noise ratio that is needed to resolve the complexity
[19:12] of the coastal ocean. As a demonstrative instrument, HICO was designed to collect only one 50 by 200
[19:22] km scene per orbit. The regions to be collected were determined weekly by a scheduling team. The focus was on providing HICO data for
[19:33] scientific research on coastal zones and other regions throughout the world. HICO demonstrates coastal products including water clarity,
[19:44] bottom types, bathymetry, and onshore vegetation maps. During its 5 years in operation, HyCO collected over 10 scenes from around the world.
[20:01] This is an example of HyCO data where the animation was produced from a scene in the archive collected over Bermuda on
[20:09] August 17th, 2013. It cycles through all 128 HyCO channels displaying three at a time. The slider on the right shows which
[20:21] channels were used for the red, green, and blue comparisons. No additional processing of the um top of atmosphere radiances or the level one
[20:35] data were performed to um make these images. images. So here you can really see how different bands highlight the various comp-
[20:46] the island ecosystem from land to shallow water to even the coral components. A newer satellite mission called the Ecosystem Spaceborne Thermal
[21:02] Radi- Radi- Experiment on the space station or more commonly known as ECOSTRESS is also on board the ISS
[21:11] and measures the temperature of plants to better understand how much water plants need and how they respond to
[21:19] stress. stress. While the optical portion of the sensor is multi-spectral, the thermal data and mission deployments will be used to benefit future
[21:30] hyperspectral missions as well. Hy- ECOSTRESS was launched on June 29th, 2018 and is still in operation. It has the viewing swath width of around
[21:44] 384 km and views the surface of the Earth from a around 53° north to 53° south latitude.
[21:56] With variable revisit times and this is really dependent on um the orbit of the ISS. ISS. Images are acquired over the continental
[22:06] US and over key biomes around the world including European and South Asian agriculture agriculture and selected Fluxnet validation sites.
[22:19] ECOSTRESS uses a multi-spectral thermal infrared radiometer to capture radiance of the Earth's surface in five spectral bands with one shortwave infrared band
[22:32] data at about 70 m spatial resolution. On May 15th, 2019 following mass storage unit anomalies, a new data acquisition strategy was
[22:45] implemented for acquiring these bands. I also want to mention that we had a previous lightning session on ECOSTRESS
[22:53] ECOSTRESS last year um in 20 uh actually in 2019 late in the year and you can find that
[23:02] on the ARSET website. There So there's a lot more information to be had about ECOSTRESS there. Just
[23:13] Just mentioning one application here of ECOSTRESS ECOSTRESS it is often times used for monitoring drought. drought. The western United States has been in
[23:22] drought conditions that have extended from the summer and into the fall of 2020. 2020. ECOSTRESS imaged the drought on October
[23:33] 16th, 2020 and compared the same area to an image from ECOSTRESS taken a year earlier. earlier. The images on the left zoom into Arizona
[23:45] and New Mexico border um along the Navajo Nation and this features the ECOSTRESS evaporative stress index or ESI
[23:56] which shows plant water stress. The inset image on the right zooms further into the region showing circular
[24:05] agricultural fields that have been irrigated. irrigated. The blue colors represent low stress and high water use whereas the red colors represent high
[24:16] stress and low water use. Irrigation is able to alleviate plant water stress in many of the fields while
[24:24] the surrounding landscape suffers from the drought. So the bottom image then shows the percent change in plant water stress
[24:33] from 2019 to 2020 which really highlights these um differences. Okay, so moving on to some of the
[24:44] airborne sensors the Airborne Visible Infrared Imaging Spectrometer or AVIRIS has been flown on four aircraft platforms the NASA's ER-2 jet
[24:59] uh the Twin Otter the Scaled Composites Proteus and NASA's WB-57. AVIRIS has flown in North America, Europe, portions of South America, and
[25:13] Argentina. Argentina. AVIRIS collects data at 224 contiguous spectral bands with wavelengths from 400 to 2500 nm and each band is about 10 nm in width.
[25:31] The main objective of AVIRIS was to identify, measure, and monitor constituents of the Earth's surface and atmosphere over a variety of landscapes.
[25:43] Research with is predominantly focused on understanding processes related to the global environment and also climate change. Here's an example of the use of AVIRIS
[25:58] data to monitor forest health. The hemlock woolly adelgid is a serious pest of eastern and Carolina hemlock hemlock in the United
[26:12] States. States. To inform management activities and to test the applicability of landscape scale remote sensing to monitor hemlock
[26:23] conditions conditions the hyperspectral collections of AVIRIS were conducted um alongside concurrent ground truthing in 2001 and 2012
[26:36] and the hemlock conditions were compared with field metrics that spanned a 10-year survey in the the Catskills of
[26:44] um New York. So this map shows the predicted decline in hemlock in 2012 using the AVIRIS data.
[26:52] data. The results from this study also indicated that there has been an increase in hemlock decline and
[26:58] mortality mortality but the decline is slow so that with other long-term monitoring studies studies and with the spatial information
[27:07] provided here continued management strategies can focus on a particular area to help control the further decline of hemlock
[27:17] in this region. Another airborne platform is the Coral Reef Airborne Laboratory or CORAL which was a three-year mission from 2016
[27:31] to 2019. CORAL acquired airborne data using the Portable Remote Imaging Spectrometer or PRISM PRISM and this instrument was installed in a
[27:42] commercial airplane, Gulfstream. The goal of CORAL was to provide critical data and new models needed to analyze the status of coral reefs and to
[27:54] predict their future. CORAL provided the most extensive picture to date of the condition of large portion of the world's coral reefs
[28:04] in a really uniform data set. The spectral resolution is from 349.9 to 1053.5 nm nm and it had bands sampled at 3.5 nm.
[28:27] In 2016 and 2017 CORAL flew over key reef areas in the Pacific Ocean including including Hawaii, the Mari- the Mariana Islands,
[28:39] Palau, and the Great Barrier Reef. In situ data were obtained validate the remote observations. For each reef, the spectral image was
[28:52] processed to provide a reef con- and was described by measurable quantities of benthic coral excuse me, uh measurable quantities of
[29:03] benthic cover of coral, algae, and sand primary productivity and cal- calcification. calcification. These reef condition parameters were
[29:16] analyzed quantitatively against 10 key biophysical parameters using new models to understand reef conditions today and predict reef
[29:26] conditions in the future. So here you can see the study sites and one of the classified images created
[29:35] from the um campaign in Hawaii. So you can see the classification here with coral, algae, and sand.
[29:47] Here's a table of a few other hyperspectral imagers that have been in orbit or that are slated to launch in
[29:54] the near future. The first is Tiangong-1, which it was in operation from 2011 to 2013 and was primarily used for land imaging
[30:07] over China. I do not believe these data are freely available. available. The second shown here is PRISMA is
[30:15] PRISMA PRISMA or the hyperspectral precursor of the application mission and this was funded by the Italian Space
[30:24] Agency. Agency. This combines a hyperspectral sensor with a medium resolution panchromatic camera. camera. In particular, the imaging spectrometer
[30:36] takes images with a pixel size of 30 m in a continuum of spectral bands ranging from about 400 to 2500 nm.
[30:48] Next is HISUI, a Japanese space system, which is slated to also be on board the ISS. This project will verify its usefulness
[31:00] in various applications such as oil resource exploration and will be used to evaluate the potential of the instrument
[31:08] design for future mission. Next is EnMAP, which is also scheduled to launch in 2021 and this is a German
[31:18] system with similar spectral and spatial resolution as some of the other sensors. Then we have Shalom, which is a joint
[31:27] mission between Italy and the Israel Space Agency and that's planned for launch in 2022. And finally, the hyperspectral X
[31:39] imagery, which is a French mission focused on soil, urban, and coastal applications. applications. So you can see there is a lot in the
[31:47] works in terms of hyperspectral data. There are also a few upcoming NASA hyperspectral initiatives that will benefit from um
[32:00] these various previous airborne campaigns. campaigns. The first here is the Plankton, Aerosol, Cloud, and Ocean Ecosystem or PACE
[32:11] and this mission will focus on the global oceans, the atmosphere, and terrestrial systems. It is still in mission development, but
[32:20] it will be designed to take data from the ultraviolet to the shortwave infrared regions with band sampled at
[32:27] every 2.5 nm. The next here is the Surface Biology and Geology or SBG mission, which has many application areas of
[32:37] focus. focus. Prior to the planning for SBG under the directive of the Decadal Survey, Survey, the Hyperspectral Infrared Imager or
[32:48] HISPRI mission concept activity occurred from 2007 to 2018. 2018. And HISPRI had flights in Hawaii and California for 13 mission concept
[33:00] projects. projects. This concept work was also vital to the develop develop of the technology of ECOSTRESS, which we
[33:08] mentioned earlier. HISPRI campaigns demonstrated the feasibility for applications of these data for things like global terrestrial ecosystem composition and function,
[33:21] fires, agriculture, and many others. The primary focus now is on the development of the SBG with this
[33:29] knowledge base. The final upcoming NASA hyperspectral mission I wanted to mention here is the Geosynchronous Littoral Imaging and
[33:40] Monitoring Radiometer or GLIMR. This is a mission like ECOSTRESS that had been approved as part of NASA's
[33:48] Earth Venture Instrument Portfolio. And these are small targeted science investigations investigations that complement NASA's larger Earth Observing Satellite missions.
[34:01] This initiative was led by principal investigator Joseph Salisbury at the University of New Hampshire, Durham. And GLIMR will focus on providing unique
[34:10] observations of ocean biology, chemistry, and ecology in the Gulf of Mex- Mexico, portions of the southeastern United
[34:19] States coastline, and the Amazon River Plume. So a little bit more information about PACE, which will collect hyperspec-
[34:30] metry and multi-angle polarimetry and is currently scheduled to launch around 2023. PACE will extend key systematic ocean
[34:41] color, aerosol, and cloud climate data records. records. PACE will reveal the diversity of organisms fueling marine food webs and
[34:50] observe how ecosystems respond to a changing climate. PACE is composed of three instruments, a hyperspectral imager being built
[35:01] in-house at NASA Goddard Space Flight Center and this is called the Ocean Color Instrument and two other contributed multi-angle
[35:11] polarimeters, HARP2 from the University of Maryland and SPEX1 from a consortium of organizations in in the Netherlands
[35:21] um um as well. The PACE Ocean Color Instrument or OCI will provide hyperspectral observation of the global oceans, atmosphere, and
[35:33] terrestrial ecology every 2 days at 1 km spatial resolution at nadir. OCI will observe from the ultraviolet
[35:44] through the visible and into the shortwave infrared specifically at 340 to 890 nm sampled at every 2.5 nm with a 5 nm
[35:56] resolution. resolution. HARP2 will have a wide swath with four spectral bands across the visible and near-infrared spectrum.
[36:06] And SPEX1 will have a narrow swath with five viewing angles. So all three instruments will provide complementary data and will improve upon
[36:15] the collective understanding of Earth as a system of systems. PACE data will support five of NASA's applied research areas
[36:26] including monitor monitoring air quality and health, water resources, climate, ecological forecasting, and disasters. The PACE applications program engages
[36:39] with applied scientists to support innovative uses of PACE data and to complement and improve decision-making activities and provide
[36:48] practical solutions. So please stay tuned for updates on PACE and be sure to check out the website
[36:56] listed on the previous slide for how to get involved. The SBG mission is also in the earlier
[37:05] stages of development and was selected under the guidance of the 2018 Decadal Survey. The specifics are still under
[37:14] development, but they are considering hyperspectral and thermal data. Listed here are some of the potential parameters the architecture team is
[37:23] considering for visible to shortwave infrared data as well as thermal data. Such as a spectral range of 350 or 400
[37:34] to 2500 nm with a spectral resolution of 10 nm or better with global data at 2 to
[37:43] 16-day revisit times. For the thermal bands, the range will be somewhere between 300 to 1200 nm with
[37:52] more than five bands and a revisit time of between 1 to 70 days. days. The SBG team is currently identifying
[38:00] and characterizing a diverse set of architectures and conducting performance and cost-effectiveness studies. The potential SBG applications include
[38:13] vegetation, aquatic systems, snow and ice, ice, active geological surface changes, change detection, and natural resource management. management. This figure really highlights some of
[38:27] these possible applications and what the imagery could look like. The community building for SBG is ongoing and the team is always looking
[38:40] for early adopters of the data even within the professional management communities. communities. There are many opportunities to become
[38:48] engaged including a community workshop to be held on February 18th and another again in July. And these are free and open for anyone
[38:59] to attend. However, it will be capped at a certain number of participants. So this is a great place to become and
[39:07] stay engaged with this upcoming mission. So do please check out this website here for more on news and events
[39:16] associated with SBG. Here you can also be added to the email distribution list. So the final section for today is to
[39:28] briefly discuss how to access and process the hyperspectral data. There are many places where you can access hyperspectral data. In
[39:40] particular, those data made available by NASA and hosted by the USGS. These include the USGS Earth Explorer,
[39:49] GloVis, NASA Earth Data, as well as Google Earth Engine. For each of the data portals, you'll need an account to download data, but
[40:00] you can create an account for free. If you have worked with multi-spectral NASA data, these portals are probably
[40:07] pretty familiar to you. Data are also available through the USGS Land Processes Distributed Active Archive Center, or LP DAAC.
[40:20] Here you can search for data depending on the application area, such as land processes or ocean biology.
[40:28] Here you can find AVIRIS, HyCO, Coral, and other hyperspectral data sets through the online resources of the
[40:36] DAACs. DAACs. In the next two sessions, we'll be providing demonstrations of how to access and view the hyperspectral data
[40:45] for land and coastal systems. So do um stay tuned for more information about that. Although there are various sources of
[40:56] hyperspectral data available, these data are much less widely available compared to other satellite products. The spatial extent of data is
[41:08] particularly limited when it comes to airborne missions and pilot or proof-of-concept missions, which there's been quite a few of so far.
[41:18] The airborne data are limited to flight paths set by mission goals. For example, the NASA Coral mission
[41:25] focused its flight campaign on key reef areas in specific island regions. The AVIRIS land data is also available
[41:36] through various campaigns, but these scenes are limited by flight path and temporal resolution. These data will also likely
[41:45] likely be limited uh in the future uh for any of flight missions that may have been grounded due
[41:52] to COVID-19. Data from satellite test and proof-of-concept missions is also limited by the study area priority often
[42:04] times. times. So even if the sensor is capturing information over a larger spatial scale, um those data might not
[42:13] be available in your region or globally. While some data acquired from these flights are not accessible from the NASA
[42:22] DAACs, in some instances you can find assistance accessing data from the mission scientists as well. So it's
[42:30] quite different when we think about these data compared to the data of Landsat and MODIS, some of our most
[42:38] familiar satellites. Um there are some really unique limitations in terms of data availability that you need to
[42:45] consider. Another thing to consider is that hyperspectral data are made available at different processing levels. And these levels vary with respect to
[42:57] data acquisition and the sensors. In the case of AVIRIS, there are levels 0, 1, and 2. The level 0 data is captured directly
[43:09] from the sensor. The level 1 data represents sensor radiance, radiance, whereas level 2 data is in the form of
[43:17] surface reflectance. In pre-processing, hyperspectral remote sensing data must be calibrated for systematic systematic hardware defects and atmospheric effects
[43:30] in order to extract reliable information. To process and analyze these images, it's important to diminish the dimensions of the data
[43:43] while conserving the important information, information, especially because these data files can be so large. Therefore, there are some more advanced
[43:52] techniques, such as principal component analysis, that can be used to identify correlation among spectrally similar bands bands in order to choose the best bands for
[44:03] your study area. Due to the high spectral resolution, there can also be quite a lot of noise
[44:11] in the data. So something like the minimum noise fraction technique can be used to reduce this. this. And we will not cover any of these
[44:20] techniques in detail. I just wanted to mention them here um if you are interested in actually using the data yourself.
[44:29] And the data can be processed in many different geospatial software systems, similar to hyperspectral similar to multi-spectral data in some
[44:39] ways. Um so you can actually open these imagery images and take a look at them in things like ArcGIS, QGIS, ENVI, ERDAS
[44:49] IMAGINE, Google Earth Engine, and even in R and Python. And this image here shows an example of
[44:58] Landsat data on the top left, and then various bands of Hyperion data on the other panels of the image. Um and this
[45:07] is shown in something very similar to um um these geospatial uh software systems. So due to the data specifics,
[45:21] there are some really important considerations to take into account when you're conducting data processing. The two primary considerations
[45:31] are very large data files that often contain hundreds of bands, and the spectral similarity of some of these
[45:40] bands because they're imaging so close together along the electromagnetic spectrum. spectrum. So there's a real benefit to having
[45:49] these many, many bands, but then these bands, because they're so narrow and close together, might be very similar.
[45:57] Um so it might be difficult to decide which bands to use under certain situ- Also, you may need some additional
[46:09] computing power and storage. And you may need to really determine which bands are the most appropriate. And um remember those two techniques I
[46:20] mentioned for selecting the correct bands and for dealing with the signal-to-noise issue. So this image here gives an example of
[46:27] the usefulness of of removing some of that noise in the hyperspectral image prior to conducting the classification.
[46:40] So in summary, hyperspectral data generally has hundreds of contiguous spectral bands. These bands measure reflectance at close
[46:50] intervals along the electromagnetic spectrum. spectrum. The bands are usually spaced about 10 nanometers or less apart from one
[46:59] another. another. There are multiple satellite and airborne sensors that we talked about today, such as Hyperion, AVIRIS, etc.
[47:08] And as you can see, there are many more in the works. So this is really an area
[47:14] um that will be expanding in the future. Um so it's a great area to be starting to get involved with.
[47:24] When using hyperspectral data, there are some really important considerations. The benefits are the ability to differentiate different vegetation
[47:34] types, um as well as minerals, drought indicators, etc. But there are limitations in terms of the data set um can be very
[47:45] large, large, and there is the potential for large signal-to-noise ratio, and the data are usually regional and not available
[47:55] globally. globally. In the next two sessions, we will focus more on applications and case studies using hyperspectral data for
[48:05] land and coastal systems. So you can really get a an idea of what these data have been used for in the past, what
[48:12] they could be used for in the future. And then we will also have um two short demonstrations
[48:17] demonstrations in sessions two and three on um accessing and um visualizing the hyperspectral data as well. So stay tuned for that.
[48:31] So I'd like to thank you for joining us today, and now we will move into the question and answer answer portion of
[48:39] the session. Thanks again, everyone, for being with us today. We have a lot of questions. Um I'm so excited to um to hear all these
[49:01] questions from you all. We have over a thousand folks online right now, and um this is our first time ever teaching a
[49:10] hyperspectral training. Um so I can imagine uh there are a lot of questions because it is a unique data set. Um so
[49:19] we do have time. We will get through as many questions as we can, um as many questions as I can answer.
[49:27] And um what you're seeing now is a question and answer session document where we have brought over many of the questions that
[49:36] you all have asked in um the Q&A today. And I did want to mention that we will
[49:43] make this Q&A document available within about a week after each session. So we've included a lot of links here
[49:52] to some papers and more information. So you'll be able to access this Q&A document at a later date.
[50:00] So do please check back for that as well. well. I also wanted to mention we do often get
[50:08] a lot of questions about the homework and the homework will be available during the last session. So it won't be available for another
[50:17] couple of weeks but you will have two weeks to complete that homework and it will be a Google form
[50:23] that you can fill out directly online. Okay, great. So we will go ahead and jump right into the Q&A here. If we
[50:32] don't get to your question today, we might cover it in the next two sessions sessions but you can also email us at our email
[50:42] addresses shown here and again we will keep this included on the Q&A document for your reference as well.
[50:51] Okay, jumping right in. The first question is is it possible to measure nitrate concentrations in the agricultural fields from hyperspectral
[51:01] imagery? imagery? This is a really great question. It's not something I was familiar with but I don't believe that hyperspectral
[51:10] data can be used to measure nitrogen directly but it can measure chlorophyll really well and the chlorophyll
[51:18] concentrations can be used as a proxy for nitrogen concentrations in many different agricultural crops. And so here's an a little excerpt from an
[51:31] abstract from one study that measured nitrogen deficiency using the correlation with the cotton leaf chlorophyll and so you could
[51:44] see they measured chlorophyll at 807.6 nanometers. nanometers. It's very specific because they had the hyperspectral data there and used that
[51:57] correlation analysis to identify deficiency in nitrogen. There's another link to a paper that identifies research that was done monitoring soil
[52:09] nitrogen with ground-based data and hyperspectral data and this was done in apple orchards and I'm not sure how
[52:17] successful this research was but you can take a look at that link there for more information. information. Question two, we had a lot of questions
[52:28] about eco stress and I'll go through them here but we do include the link to the link
[52:33] eco stress to the eco stress lightning session that we had a little over a year ago now. So do
[52:42] please watch that recording for more information. It's about an hour long session and we have researchers who were
[52:50] involved in the mission concept as well as a guest speaker from the LP DAC that talks about how to access data and
[52:58] display that those data. So we'll include that link here but do please check that out for more info on
[53:05] eco stress. The question is what does the asterisk on eco stress mean? And we included eco stress because it's
[53:14] this very unique sensor but it's the the optical portion of eco stress is not really considered a hyperspectral
[53:23] sensor. It's considered a multi-spectral sensor and we included it because it has been used to identify features for mission deployment that
[53:37] will be used to benefit hyperspectral missions as well. So it's really useful in that way. So we
[53:43] included a little asterisk there because we don't see the you know 200 plus bands of optical data from eco stress but it is
[53:55] really important as a precursor to many of these larger missions that NASA is developing that may be on board the ISS
[54:05] or maybe similarly designed. So Okay, question three. Can hyperspectral data be used for crop monitoring and crop type classification?
[54:19] If yes, please explain how. And yes, that is one of the prominent applications of hyperspectral imagery. We are going to cover that extensively
[54:31] in our case study example for next week. It's actually the first case study example that we provide
[54:38] for a very large study that was done over over many different crop types in the US and
[54:46] the hyperspectral data was used to differentiate differentiate um um various peaks in within the with different ranges wavelength ranges
[54:58] for these different crop types. So stay tuned and come back with us next week and we'll talk much more about
[55:06] about that example. Okay, the next question are hyperspectral data available via Google Earth Engine? The answer to that is yes. There are
[55:21] limited amount of hyperspectral data available available primarily from EO-1 Hyperion at a limited spatial coverage. So we'll talk
[55:32] about Hyperion a lot through this series. It's one of the most prominent hyperspectral sensors sensors um um and we've also noted here that you can
[55:43] access hyperspectral data from NASA and the USGS portals and then you can add it to Google Earth
[55:50] Engine as an asset. So if you're familiar with that, you can use the data within the Google Earth
[55:57] Engine tools. Also want to mention that the developers of Earth Engine are constantly updating their data collections and if you become
[56:10] if you if you register for an account, I believe you can access some user forums where you can vote on data that you want
[56:19] included in Earth Engine and and I don't know how the process works behind the scenes but I think if certain
[56:27] data types get many many votes, they may consider including those data within their collections. Um Um So I know we have done it for some other
[56:37] type of data that we've been interested in using. I also want to mention that during sessions two and three of this training,
[56:46] we will have demonstrations on how to access data hyperspectral data and and we will also our next training that we
[56:55] hope to provide will be specifically on land applications using Google Earth Engine. So do please check back in a few
[57:03] months on the ARSET website for that training as well. We're really excited. It's a it's a great tool.
[57:11] Okay. Okay. Question five. One constraint on multi-spectral bands are the atmospheric windows where the signal can or can't get through.
[57:23] The curve shown for hyperspectral seem to ignore those windows. Is hyperspectral also subject to those constraints? Yes, actually hyperspectral
[57:32] data are still subject to the constraints of atmospheric windows. We we cover atmospheric windows in our introduction to remote sensing training
[57:44] and and um um also also any kind of optical data are subjected to those atmospheric windows. So these are essentially areas
[57:57] within the electromagnetic spectrum that allow the sensors to pick up data that allow the um the reflected energy to pass through the
[58:07] atmosphere and be collected by the sensor and there are certain portions within the electromagnetic spectrum spectrum where that doesn't occur very readily.
[58:17] But thankfully mostly for the visible and near infrared wavelengths, those atmospheric windows are there. But yes, yes, I also provided a nice short explanation
[58:31] of what an atmospheric window is there on the Q&A as well. Okay, next question six is HyCO data
[58:42] available for India and is it available to researchers? HyCO data as we mentioned is only available for certain coastal
[58:52] areas areas but it is available for some coastal areas in India. It's readily available through the national NASA Ocean Color Web
[59:04] data access platform and as I mentioned the next two sessions, the the second session will cover land applications,
[59:14] the third session will cover ocean applications and we'll actually be doing a demonstration on how to access
[59:22] data in session three going over the NASA Ocean Color Web and talking a little bit more about HyCO
[59:31] data believe. So, stay tuned. Okay, question seven. How are clouds removed in hyperspectral images? Uh so, clouds are an issue in
[59:44] much the same way they are for any kind of optical remote sensing. Um so, this is an issue with multispectral data,
[59:53] like Landsat, uh MODIS, the the very common ones that you all know. Um so, clouds have to be removed. Um there are
[1:00:04] techniques such as cloud masking that could be used to remove those pixels. Um Um as we'll we'll discuss during the
[1:00:11] demonstration, demonstration, we we generally recommend when you're searching for data to use a threshold of about 20% cloud cover.
[1:00:20] Um because you're really not going to be able to use those those scenes in which clouds are very predominantly present,
[1:00:28] at least with optical data. You'll need something um like radar data to penetrate those clouds. Um so, we have that same issue
[1:00:38] here with hyperspectral data. Okay. Okay. Question eight. Uh oh, uh this is a great question. So, what did you use to make the HyGO
[1:00:52] visualization with the um RGB slider? And that that could be a really useful teaching tool. We love that animation,
[1:01:01] too. Uh we included the link there to the um the HyGO animation, and this was created by the team uh the ocean color team at
[1:01:10] NASA Goddard. Um so, we can't take credit for that one. Even though it's very uh very cool. So,
[1:01:16] we've included the link to that visualization. It also has a little bit more information of how that was created
[1:01:22] on that website there. Okay. Okay. Uh question nine. My question is, are there rays emitted by different remote
[1:01:32] sensing satellites harmful for delicate coral reefs during the scan? No, so um with all kinds of passive optical remote sensing data,
[1:01:48] there is no energy being emitted onto the ground. The only thing that those sensors are collecting are reflected
[1:02:00] imagery from the the whatever uh feature we have on the ground. Um so, there's no uh uh harm that could be done to coral reefs
[1:02:10] because the only data we're obtaining are the reflected wavelengths that the coral is emitting as it it it's um
[1:02:20] living. living. So, uh Great. Okay. Question 10. Uh And here's a few ECOSTRESS questions. I think this
[1:02:30] is probably while we were going over the ECOSTRESS slides. Um but does ECOSTRESS have information for South America? Uh
[1:02:38] there are a couple locations uh where ECOSTRESS data are available in South America. There's this great website uh within the ECOSTRESS
[1:02:50] site that's a map of where data are collected. collected. As we mentioned, ECOSTRESS is on board the International Space Station, and it
[1:03:00] only uh collects data at very specific targets. Um most of those targets are aligned with some kind of ground-based network
[1:03:10] um that had been in place when they were developing the sensor, so you can check out that map
[1:03:17] for the locations of those data. And this was again a um shorter mission um that's still in operation, but on
[1:03:27] board the ISS um was only planned for a short period of time, but um we're going to keep it going for as long as we can,
[1:03:34] cuz it has some really useful data. Question 11. ECOSTRESS is hyperspectral or thermal? Is it affected by cloud cover? So, this
[1:03:43] is similar to the question that we had previously. previously. It essentially has multispectral optical data and thermal data. And yes, it is
[1:03:53] still affected by cloud cover. Any kind of optical sensor is going to be affected uh by cloud cover. Um and we've
[1:04:01] also included the link to the um infor- very uh specific technical information about ECOSTRESS, and um on
[1:04:10] that website it has the uh different bands of ECOSTRESS, and their their wavelength ranges. So, you can see all that
[1:04:18] information there. Um Question 12. Can ECOSTRESS measure soil moisture? ECOSTRESS was primarily designed and and as far as I understand it, is being used
[1:04:32] for evapotranspiration, or ET. Um not necessarily soil moisture. Um the SMAP sensor, the soil moisture active passive sensor, is is another one
[1:04:44] that can be used for mapping soil moisture. moisture. It um it is a little bit more coarse in
[1:04:50] resolution, um but that's another one to check out if you're interested in soil moisture. moisture. And then here I've included the
[1:04:58] lightning session for ECOSTRESS, because I know uh we had a lot of questions about that. It it is a very um very cool instrument.
[1:05:08] Has a lot of uh useful information, so. Okay, question 13. What kind of research is done with HyGO?
[1:05:18] Great question. So, HyGO was designed for coastal ecosystem applications. Um it's been used a lot for coral reef
[1:05:27] analysis and shallow water coastal ecosystem. ecosystem. Um this is another sensor on board the ISS, the International Space Station.
[1:05:36] And again, with many of these smaller um sort of missions, they're designed for particular use, and that particular use
[1:05:47] and region um was was mostly based on on the needs of the user, and uh that's why
[1:05:55] the the data are limited primarily to regions, coral reef regions. Um and again, we'll we'll discuss this in more
[1:06:04] depth during session three, as well. We'll come back and talk about HyGO again. Question 14 is a really great question
[1:06:16] question question that I think came through before we got to the end of the um training, where we talked a little bit
[1:06:23] about this. Um So, the question is, the large number and contiguous uh spectral bands in a hyperspectral system cause redundant
[1:06:34] spectral information between neighboring bands. bands. How to decide which bands are more relevant for a particular application?
[1:06:41] That's a really great question, and um is very specific to the application that you are interested in.
[1:06:49] Um because the bands are so closely spaced together, there's often a high amount of correlation among those bands
[1:06:57] that are next to one another within the electromagnetic spectrum. So, there are many techniques for um disaggregating
[1:07:07] those correlations. Um Principal component analysis is probably the primary one, um where uh they you can identify essentially
[1:07:19] identify the correlation among the bands. And so, what you would need to decide as the user of the data, um is
[1:07:27] which bands are relevant for whatever application I'm interested in. So, if for for example, you had two bands that are highly correlated,
[1:07:39] you um you might decide which of those bands is presenting you with more useful information. Um is there higher
[1:07:50] reflectance in one or the other band in um the target that you're interested in viewing, and does that provide any
[1:07:59] additional information for you? Um That type of analysis is beyond the scope of this training. This is really
[1:08:06] just an introductory training to introduce you to the data. Um but there's a lot of research out there
[1:08:12] that's been done on on PCA. Um also, um in on a related note, because of this high spectral
[1:08:23] resolution, there can be a lot of noise in the data, as well. Um so, your signal-to-noise ratio um can
[1:08:31] can be uh can really affect the ability to use those data. Um So, the minimum noise fraction is one
[1:08:41] technique that can be used to reduce the level of noise in the data. Um Um Many of these techniques need to be uh
[1:08:49] applied on uh some sort of geospatial processing software that is not freely available, such as ENVI. Um so, do keep
[1:08:57] that in mind. Um But that's a great question. Yeah. Okay. Okay. Question 15. Can hyperspectral be used to determine
[1:09:08] bathymetry? Uh yes, in some cases. Uh again, we'll talk about this during session three, but um it can be used to
[1:09:16] analyze bathymetry in shallow water. Um shallow clear water. Um and uh here's a paper. We've listed a
[1:09:25] paper paper uh, uh, that used, uh, hyperspectral data in Australia to estimate bathymetry. Um, and it is limited because, uh,
[1:09:38] of the, uh, very, uh, um, um, complicated interactions that that data have with water and with, uh,
[1:09:48] um, um, surface, uh, properties of, um, say a lake or ocean. Um, so we'll talk about that much more
[1:09:57] on on session three, but, uh, I would say yes in a limited capacity. So, question 16. Um,
[1:10:08] Um, good question. Yeah. If I hyperspectral data are so granular and valuable, why are missions not operating at scale or
[1:10:16] the cost too high? So, there are a lot of factors that we we mentioned in the training, um,
[1:10:23] that contribute to the, uh, inability of, uh, global global hyperspectral missions to take place. Um, yes, the costs are high. The data
[1:10:35] sets are very large. So, if you have 220 bands of optical data, um, um, at 30 m spatial resolution, you can
[1:10:46] imagine that those data sets are huge. Um, and storing and cataloging those takes a lot of effort, um, and
[1:10:53] resources. resources. Um, and also the data are more difficult to process and analyze. Um, it's a it's a heavier lift for
[1:11:02] somebody who is just getting started with remote sensing, um, to analyze and process Hyperion data versus analyzing
[1:11:11] and processing Landsat data. Um, so there are there are many factors that come into play. Um, but you will notice
[1:11:19] that we mentioned three new, um, satellite missions that are in the works, uh, PACE, SBG, and GLIMR. Um, and, uh,
[1:11:32] those will, at least, PACE and SBG, I believe, will be global. Um, so so there's interest out there
[1:11:41] and, um, the need has been recognized through the decadal survey and, um, we're working on it. it. But, it's a great question.
[1:11:51] Um, Um, and you can get involved in those efforts, as well, um, as they develop those instruments and
[1:11:58] get those launched. Okay. Okay. Next question is PRISMA, um, data freely available? available? If yes, where can I find it? Um,
[1:12:14] the data were recently made available and I believe, uh, PRISMA data are available, uh, via the, um, Italian Space Agency.
[1:12:25] And, um, there's an article an an article on the SBG website, actually, that talks about the release of PRISMA data and, um,
[1:12:34] there's a website we've we've listed there, as well. I do believe you need to, uh, register or maybe fill out some forms to
[1:12:43] access those data, um, but but it seems like those are now freely available. Okay. Okay. Next question 18.
[1:12:56] Is PACE 5 m spatial resolution? Oh, so the the I think the confusion there is between spectral and spatial resolution.
[1:13:06] So, PACE has 5 nm spectral resolution. So, that means that the bands are spaced 5 nm apart, um, but the spatial
[1:13:17] resolution is 1 km. Um, Um, and, uh, the other sensors within PACE will, um, oh, so that was for, um,
[1:13:28] the ocean color instrument, which is one we mentioned. Um, their other sensors have different spectral and spatial
[1:13:34] resolutions. And we've included the, um, the link to details on PACE there, as well. Yeah, 5 m spatial resolution would be
[1:13:45] quite quite quite great, but, um, very difficult to achieve. Okay, question 19. Uh, what is the maximum limit and how of
[1:13:59] the number of bands in hyperspectral? Actually, is there a limit? Yes. If yes, what does it depend on?
[1:14:05] So, the number of bands is is going to really depend on how closely spaced the bands are together, so their spectral
[1:14:12] resolution, and the wavelength range that the data cover. So, um, we discussed this a little bit more in
[1:14:21] depth during the first part of the the session, but, um, I've not seen more than about 220 bands.
[1:14:29] Um, so there's there's definitely a limit if you, um, are looking at a particular wavelength range. Generally,
[1:14:39] um, the hyperspectral data are available in the visible and near infrared. Um, some of them, I believe, maybe go into
[1:14:46] the shortwave infrared, but it really just depends on, um, how far apart those are spaced. But, I'm not sure if there's if there's
[1:14:57] if there's any sensors that have more than 220. That that sort of seems like the limit I've
[1:15:01] seen. Okay. Okay. Question 20. In the Himalayan mountain vegetated cover area, can we differentiate sedimentary rocks through hyperspectral
[1:15:16] imagery? imagery? That's a good question. So, the data are optical, um, as we've discussed. So, optical remote sensing data only
[1:15:29] acquires information that's reflected from the top of the ground surface. So, if you have vegetation covering rock,
[1:15:38] you will only get the spectral reflectance from the vegetation. Um, in order to assess different rock types, it would need to be bare ground.
[1:15:51] Um, Um, so so that's the, um, the limitation there. Um, you're not, um, you're not getting anything penetrating through
[1:16:00] vegetation. Question 21. Which data are and will be freely available? available? Good question. Um, so there are, um,
[1:16:14] multiple different online platforms and, um, various data are available for, uh, freely available. So, So, HyGO, Coral, AVIRIS, EO-1, Hyperion
[1:16:30] are all available online. Um, NASA data are always going to be, uh, freely available. Um, in some cases,
[1:16:38] there there may be a registration process or request for access to those data. Um, data from those sensors that we
[1:16:47] mentioned are, um, available on the NASA ocean color web, uh, NASA Earth data, EarthExplorer, and some other, um, data
[1:16:57] access platforms. And again, we'll talk about this in more depth in the next two sessions. Um, but it's a great question because,
[1:17:07] um, many of the, um, uh, airborne campaigns, um, the data are not, um, easily accessible in some in some cases. Um, but all of
[1:17:18] the NASA data are available through the various websites we mentioned. Uh, question 22. For SBG, when you see a
[1:17:29] launched thermal bands, what would be the spatial resolution? I don't think that's been decided. Um, Um, I suggest becoming involved with the SBG
[1:17:39] applications community. There is another event coming up in early February, and we've included the link to the SBG
[1:17:47] website in the, um, presentation materials. Um, so do do get involved with that, but, um, we they I think they have a
[1:17:56] range for, uh, the spectral resolution, but I don't think they and the, um, temporal resolution, but I don't think
[1:18:06] they've clearly identified what the spatial resolution will be. I could be wrong on that, but, um, do please check
[1:18:13] the SBG website. Um, the the mission is still in development. So, I don't think all of these, uh, features have been
[1:18:19] totally totally decided. Okay, moving on to question 23. Uh, Uh, thank you. You have said that hyperspectral remote
[1:18:39] sensor captures more than three visible bands, RBG, as compared to three RBG for multispectral. Can you elaborate more on this? Yeah, so
[1:18:52] we talked about this quite a bit during the beginning of the session. Um, Um, the benefit of hyperspectral data
[1:18:59] are the uh, is the ability to, uh, monitor spectral reflectance among among a contiguous, uh, uh, uh, wavelength range, uh, with many many
[1:19:15] bands. bands. So, a multispectral sensor, for example, um, might have, uh, 10 bands within the visible and uh,
[1:19:27] near infrared portion. Whereas a hyperspectral sensor would have 200 bands. And I'm just throwing out some number relative numbers here. Um, but
[1:19:36] that allows the sensor to capture more of the uh, variability within the um, within the electromagnetic spectrum. So,
[1:19:47] you might, for example, when you're looking at Landsat, you will get one value within the green range. Um,
[1:19:55] whereas if you're using a hyperspectral sensor, you might have uh, 20 bands within the green range or uh, you know,
[1:20:04] near infrared range. And that's going to allow you to distinguish very subtle differences in reflectance from whatever
[1:20:12] target it is that you are analyzing. Yeah. Tw- Question 24 is really interesting and I it's something I've not thought of
[1:20:23] before. Um, have there been any initiatives to uh, observe plastic waste and plastic litter in water and on the
[1:20:31] surface of the soil? Um, I do believe there's been some work uh, looking at plastic pollution in the
[1:20:40] oceans using hyperspectral data and we included a link to one article there. Um, Um, but I'm not sure how extensive this this
[1:20:50] research area um, is in terms of the use of hyperspectral data. Um, it's not an area I'm very familiar
[1:20:57] with, but a really great question and I think a useful application. And Amber, this is one I can elaborate a
[1:21:04] little bit more. Oh, great. Yeah. Please do. do. Yeah. Um, um, so in the during the uh,
[1:21:11] coastal webinar that we did uh, last year, we covered some of uh, and during session three in particular, we covered
[1:21:18] some of the uh, the uses uh, of uh, remote sensing for uh, marine debris uh, and um, there
[1:21:27] hasn't been that many so far, that many uh, papers out there using uh, particularly satellite-based or airborne-based uh,
[1:21:38] data hyper- hyperspectral data for for uh, marine debris or plastic litter as uh, the question says in this case, but people
[1:21:47] have used uh, uh, spectral spectralradiometers, field spectralradiometers to separate different types of uh, plastic or plastics or just, you know, marine
[1:21:59] debris uh, in in coastal and um, and um, areas in particular uh, that uh, just to use them as a as a
[1:22:09] baseline uh, for constructing a spectral library to eventually use that library uh, with uh, satellite or airborne
[1:22:17] images. images. So, they so uh, we encourage I encourage the the the the person who did this question to
[1:22:22] go back to our coastal webinar uh, session three in particular and we covered some of this. And there's a
[1:22:29] there's a thing and a couple of papers that we also mentioned uh, on this regard. Thanks, Amber.
[1:22:37] Thank you, Anne. Appreciate that. Yeah, feel free to jump in at any point. I'm not providing all the information
[1:22:45] needed, so that's great. Um, you are the uh, ocean resident expert here. here. Okay. Okay. Uh, few more questions. Uh, we have
[1:22:57] about eight more minutes for questions, so we'll get to as many more as we can here in this session.
[1:23:05] Uh, the next question um, why does the hyperspectral data come with medium coarse spatial resolution? While I was mapping urban land use and
[1:23:18] land cover, uh, it was very difficult to identify land classes using a 30-m pixel size. Um, how would you be able to map
[1:23:26] vegetation or urban features accurately um, unless you want to map something for a broader scale. That's a great question and um, that
[1:23:35] really goes back to the way in which these missions are designed. There is always a trade-off between uh, spatial,
[1:23:44] temporal, and spectral resolution. So, when um, the engineers are designing these systems, they have to make some
[1:23:53] decisions on um, what they can provide. Um, there's no there's no system out there that can provide um,
[1:24:02] very high spectral, spatial, and temporal resolution all together. Um, Um, so so with uh, Hyperion, that was sort
[1:24:14] of a trade-off that was made. Um, Um, and and and 30 m, you're you're right, is it's
[1:24:22] difficult to identify small features on the ground. Um, Um, and I would suggest using different types of of data. Um, so there there are
[1:24:33] other commercial satellites available um, that may have an increased spatial resolution. resolution. Um, also uh, NASA as it is designed as a
[1:24:45] public service, cannot compete with commercial uh, businesses who are uh, creating satellite systems that may have higher spatial resolution. So, there's
[1:24:59] also a limitation there with how um, how far NASA can go in terms of providing really high spatial resolution data.
[1:25:09] Um, Um, other data that might be useful are drone data, which you can uh, fly on your own um, and there are a lot of
[1:25:18] researchers out there who are using drone information. Um, however, much of the drone data are multispectral. R- RGB and sometimes near infrared or
[1:25:30] red edge with the the drone um, data as well. So, you just have to take all of
[1:25:35] that into consideration when um, deciding on the data that you're using and uh, for what application you're
[1:25:43] using. Um, there's always going to be a trade-off there, but it's a great question. question. Um, question 26.
[1:25:51] To my knowledge, ENVI is one powerful image processing for hyperspectral data, but it's not free. Uh, what are free but powerful image
[1:26:00] processing software for hyperspectral data? That's a great question. Um, one of the reasons why in sessions two and
[1:26:09] three, we're we're going to be using um, well, QGIS for for session two for sure. Um, because yes, ENVI is a commercial
[1:26:18] software. Um, ERDAS IMAGINE is another commercial software that is not free, that is often used for um, more advanced remote sensing
[1:26:28] applications. We will show um, NASA SeaDAS which um, is another free option to use. We'll be showing that one in
[1:26:38] part three. So, we'll be showing QGIS in part two, SeaDAS in part three. Um, but it it there really are some limitations
[1:26:49] particularly with hyperspectral data um, because most of the hyperspectral data need to be processed to a a level
[1:26:59] um, by the user. Um, most of those data are not processed to spectral reflectance um, as you can obtain with something
[1:27:08] like your Landsat and MODIS and VIIRS. Um, so that does require the user to conduct this extra layer of processing that generally
[1:27:20] needs to be done in a commercial remote sensing software. Um, there are some um, there are some
[1:27:27] exceptions um, but that that is another um, um, really important limitation to consider. Question 27, sort of similar.
[1:27:42] Atmospheric correction must be applied even if it's level two data. Level two data are generally atmospheric correct
[1:27:48] atmospherically corrected and are surface reflectance. However, many of the data available via hyperspectral sensors sensors are only preprocessed to level one. So,
[1:28:00] that's where you get the radiance values. And as I mentioned, um, you as the user would need to go through
[1:28:08] that that additional step and that's not something we'll cover in this training. Um, Um, but that is that is one limitation to
[1:28:15] consider. consider. Not a whole lot of the hyperspectral data have been processed to level two um, that I'm aware with aware of.
[1:28:26] So. So. Um, Um, question 28. Can a master student be part of PACE, SBG, and GLIMR? Certainly.
[1:28:35] Certainly. Um, one of the reasons why we we wanted to highlight the upcoming missions is to to get folks involved. Um,
[1:28:43] so certainly um, we've included a couple links there for how to get involved in in um, those missions.
[1:28:52] Um, Um, and this includes researchers, this includes um, applied users uh, it includes uh, a wide community.
[1:29:04] And uh, I think it's a really great thing um, that NASA has been doing um, in a higher capacity is including the
[1:29:12] the users of the data in the mission development and I think it's a really valuable part of um, mission
[1:29:19] development. So, yes. Next question. Okay, let's maybe take two more and then we'll be done. As we're approaching the end of the
[1:29:34] session here, so the question 29 is, "Considering the limitations in accessing hyperspectral data, what factors should one consider
[1:29:43] uh uh to access hyperspectral data for a particular study area?" Um Um Malawi, South Africa. So, the first step
[1:29:53] is to uh uh identify the extent of these missions. When you're searching for data, um um you can uh search for spatial You can
[1:30:07] search based on a spatial extent in many of the data portals, and we'll show you this in Earth Explorer, but um what you
[1:30:15] could do is identify your study region as a rectangular area or even a uh point of latitude and longitude. And then, you
[1:30:25] can see what data are available there. Um I think that's probably the easiest approach. approach. Uh or you can go to specific missions'
[1:30:34] websites to see where those data are, but I but I think if you just go to one
[1:30:38] of the primary data portals like Earth Explorer, which is what we um will will demonstrate next week,
[1:30:46] you can always filter by area. Okay. Okay. The last question, and then um what we'll do is we'll go through and answer
[1:30:59] the the remaining questions um outside of this time and post them online. So, the last question we'll have today,
[1:31:06] "I'm curious about AVIRIS data applications. applications. Um Um can you please cover more elaborately and also help me learn about providing
[1:31:17] more information?" So, yeah, AVIRIS uh has been used for air quality and wildfire smoke assessment applications. applications. Um
[1:31:27] Um and this allows for the differentiation of different airborne pollutants that can capture uh uh uh specific pollutants tied to those types
[1:31:38] of events. Um Um I'm not sure if our health So, within ARSET, we're the land and ecological
[1:31:48] forecasting team. We also have a health and air quality team. And um so, I would I would check out the
[1:31:55] other trainings that are conducted by our health and air quality team to see if they've covered any
[1:32:01] examples of AVIRIS. I'm not sure if they have. Um I will also mention that we are planning a wildfire training sometime
[1:32:13] this year that will cover that we we will have um scientists within these different application areas coming
[1:32:20] together to to cover sort of the full gamut of wildfire applications, and and um smoke will be included um pollution
[1:32:28] will be included in that. So, I'm not sure if we'll cover uh AVIRIS in particular, but our um
[1:32:34] health and air quality team, we will definitely cover uh smoke events tied to different types of wildfires. So, do please check back
[1:32:45] within the next few months if you're interested in that training as well. All right, everyone. Um so, thank you so much for being with
[1:32:54] us today um and for all your really great questions. We will get to and try to answer the remaining questions that
[1:33:02] you've provided here on this document. We will post this document within about a week or so um after each session. You can email
[1:33:11] myself or my colleagues, Juan and Zack, here with our email addresses listed if you'd like more information um
[1:33:20] or if your question didn't quite get answered, but we will post these um for access later on. So, thanks again.
[1:33:27] Do please join us next week at the same time, where we will cover more case study examples of land applications of
[1:33:36] hyperspectral data and do a a really nice uh demonstration of how to access some of these data. So, um thank you
[1:33:45] again. I hope you all enjoy the rest of your day, and we will see you next week.
