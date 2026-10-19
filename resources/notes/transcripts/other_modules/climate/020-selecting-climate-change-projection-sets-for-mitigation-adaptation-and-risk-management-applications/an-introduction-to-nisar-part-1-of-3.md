# An Introduction to NISAR, Part 1 of 3

`https://www.youtube.com/watch?v=lIDXtxFJi6M` · id 182 · 2:04:26 · module 37 — Selecting Climate Change Projection Sets for Mitigation, Adaptation, and Risk Management Applications

[00:01] Hello and welcome to this webinar series, harnessing NISAR, next generation radar observations for Earth applications. applications. My name is Erica Pus and I'm a scientist
[00:13] at NASA's Jet Propulsion Laboratory where I study terrestrial ecosystems using SAR. I'm also an instructor with the ARS program. We're entering a really
[00:24] exciting new era of Earth observation with the launch of NISAR. This mission will provide an unprecedented view of
[00:32] how Earth's surface is changing, enabling routine monitoring of ecosystems, natural hazards, water resources, agriculture, and the cryossphere at a global scale. Although
[00:45] this webinar series is an introduction to NISAR, we will also cover key SAR fundamentals to provide the context
[00:53] needed to understand the mission's capabilities, data products, and potential applications. By the end of this training, you'll have a foundation
[01:02] for understanding how NISAR data can be used to address a wide range of Earth science and decision support challenges.
[01:14] Before I begin, I'd like to provide a bit of background about the ARST program. NASA's applied remote sensing training
[01:24] program or ARST offers free trainings on the use of remote sensing and model data along with methods and tools for the
[01:33] global science and application communities. Our trainings are tailored to different experience levels ranging from introductory to intermediate to
[01:42] advanced. Our set trainings focus on six thematic areas. Agriculture, disasters, ecological conservation, health and air quality, water resources, and wildland
[01:55] fires. fires. Our set trainings are either online or in person. All are free of charge and use open-source data and software. Some
[02:05] of our trainings are delivered in both English and Spanish, like this one. And all of our training sessions have a
[02:12] Spanish presentation available. Now I'll provide an overview of this webinar series. NISAR marks a new era of Earth
[02:26] observation. observation. A fundamental challenge in Earth observation is monitoring change consistently across the globe. And NISAR was designed to address this challenge
[02:37] by providing frequent systematic radar observations that are independent of sunlight and that are largely unaffected by cloud cover.
[02:49] So these are the training learning objectives. By the end of this webinar series, participants will be able to
[02:56] identify the characteristics, capabilities, and limitations of NICAR data. Recognize how NICAR data can be applied to decision-m related to
[03:06] flooding, earthquakes, and landslides. Differentiate between the uh different types of NICAR data products and their applicability for different use cases.
[03:17] demonstrate how to access NISAR data and tools via the ASF DAC platform to search, visualize, and analyze data
[03:26] provided case studies related to floods, earthquakes, and landslides. Visualize flooding with GCOV files and generate landslide risk and volcano
[03:38] deformation maps for events of interest using the inter farram the GUNW files in QGIS. QGIS. demonstrate how to access NISAR ESPAN
[03:51] data via the ISRO bound platform and use available tools for basic visualization and analysis. Prerequisites for this training, we
[04:04] suggest the fundamentals of remote sensing as well as an introduction to synthetic aperture radar and its applications.
[04:12] applications. Uh so there was one in 2017 and there was also one in 2024. So these both of these contain
[04:20] background or uh reviews of radar as well as INSAR. We will be focusing on INSAR in this uh training. The session
[04:30] three will discuss uh in INSAR and as you all probably already know InSAR is all about the face of the SAR signal.
[04:42] And this is a training outline. There are three sessions associated with this webinar series. Today is session one, an
[04:51] introduction to NISAR. The next session will be on July 9th and it will be focused on NISAR data access and tools.
[05:02] uh that'll be led by the ASF uh the Alaska satellite facility uh uh DAC which is the data archive
[05:11] center that holds all of the NISAR data and then the third session will be on the 16th of July focusing on monitoring
[05:20] earthquakes, volcanoes and landslides with NIAR's INSAR capability and that'll be led by my colleague Dr. Eric Fielding
[05:28] from JPL. All sessions are at the same time. There is one homework associated with this webinar series and it will
[05:38] open on the last session on the day of the last session on July 16th. The due date for the homework is August 6. A
[05:47] certificate of completion will be awarded to those participants who attend all live sessions and complete the homework assignment by the due date.
[05:58] Now, let's focus on this session, an introduction to NISAR. I will be your instructor for this training. I'm a scientist at NASA's Jet
[06:09] Propulsion Laboratory where I use microwave remote sensing, particularly SAR, to study wetlands, vegetation growing season in the northern high
[06:18] latitude regions, and land cover and land use change. I also serve as the community engagement and training
[06:26] coordinator for the NISAR mission and I'm a member of NISAR's science team supporting the wetlands science area.
[06:34] Through these roles, I help connect the science applications and user communities with NIAR data and capabilities. The objectives for this first session.
[06:47] By the end of this session, participants will be able to identify the characteristics, capabilities, and limitations of NISAR data. Recognize how
[06:56] NISAR data can be applied to decision making related to flooding, earthquakes, and landslides, and identify the different NICAR data products.
[07:09] How to ask questions? To ensure we see your question, please write your question in the Q&A box, which you can
[07:18] locate it um by doing a click on the three dots in the bottom right of your um uh of the window in the platform. And
[07:29] there you'll see a slido, a Q&A option. And you can also see a standalone slido tab or app.
[07:37] Write your questions or all your questions there and we will answer them during the Q&A session at the end. And
[07:44] we will try to answer all the questions during the Q&A session. The remaining questions will be answered in the Q&A
[07:52] document which we will post on the training website about a week after the training. training. Okay. So let's get started providing an
[08:02] overview of the NISAR mission. So let's start out with why NISAR. Many of the most important changes on
[08:12] Earth occur continuously and often in areas that are either cloudy or under darkness. And these changes occur at
[08:20] either very small scales on the order of centimeters or very large scales on the order of meters. And some of these um
[08:30] changes that occur on the earth's surface are earthquakes and tectonic deformation, deformation, glacier and ice sheet motion,
[08:40] um landslide, surface subsidance due to groundwater extraction. And there are other changes too. Um things like forest
[08:47] change and biomass, uh floods and wetland dynamics. And so to monitor these processes globally, we need a sensor that works day and night
[08:58] and can see through clouds and can measure small to large changes in the earth's surface. NASA stands for NASA ISRO which is the
[09:10] Indian Space Research Organization synthetic aperture radar. It's a joint mission between NASA and Israel and it uses SAR to measure and understand
[09:20] changes in Earth's land, ice, water, and vegetation. vegetation. The origins of NISAR can be traced to SESAT in 1978,
[09:30] which was the first civilian Elband SAR mission in space, and it demonstrated the tremendous potential of radar
[09:38] observations for Earth science and applications. Although the mission operated for only a few months, it transformed our understanding of what
[09:47] SAR could reveal about Earth's surface. In 2007, the National Research Council decurvey identified NISAR as one of the highest
[09:59] priority Earth observation missions needed to advance our understanding of the Earth's system through systematic global observations of Earth's changing
[10:09] surface. And building then on decades of scientific and technological advances, discussions between NASA and Israel began in 2011 to explore a potential
[10:21] partnership. After several years of planning and coordinating, the agencies formalized their collaboration in 2014 and what followed was more than a decade
[10:33] of joint development, integration, testing, and preparation. Those efforts culminated in the successful launch of NISAR from India on July 30th, 2025.
[10:46] And the animation that you see here illustrates the deployment sequence following launch. One of the mission's most impressive engineering features is
[10:55] its 12meter deployable reflector antenna, which enables the collection of highquality radar observations over a wide swath. The scientific motivation for NISAR
[11:07] spans multiple disciplines. Its observations support studies of ecosystems and global biomass, ice sheets and sea ice dynamics, natural
[11:18] hazards, agriculture, hydrarology, and many other processes that are critical to understanding our changing planet and supporting societal hazards and
[11:28] resilience. NISAR is the result of a highly complex and collaborative partnership between NASA and ISRO requiring close
[11:38] coordination across all aspects of the mission from instrument development and spacecraft integration to operations and science. The table here um shows the
[11:49] contributions from uh NASA and from Israel. NASA provided the Elband SAR system operating at a wavelength of 24
[11:57] cm. The radar system includes a 12meter deployable reflector, a 9meter boom, and an approximately 4 meter long octagonal
[12:07] cylinder that houses the L-band and Sband radar electronics. And you saw this in the in the animation from the
[12:15] previous slide. And the two radar systems, the L and Sband radar systems can work simultaneously together. ISRO
[12:23] provided the SPANS SAR, which operates at a wavelength of 9.4 4 cm as well as a spacecraft bus and launch vehicle.
[12:32] NASA's Jet Propulsion Laboratory also developed key electronics that enable communication between the spacecraft bus and the radar instruments along with a
[12:42] high rate down link system to transmit the very large volume of science data collected by the mission. The radar the
[12:50] Elband radar alone generates approximately 4.4 4 terabytes of raw data each day. ISRO provided a separate high rate downlink system for the SBAN
[13:04] radar, meaning the mission operates two dedicated telecommunication systems to support the transmission of this very large volume of data to the ground.
[13:16] The partnership extends beyond the hardware. NASA and ISRO also share mission operations responsibilities and jointly support the science team and
[13:26] user community. Overall, NISAR is one of the most capable Earth observing radar missions ever developed. The spacecraft
[13:35] has a total mass of 2700 kg and requires about 6.2 2 kilowatt of power, making it a high-capacity, high-performance system
[13:47] designed to support continuous global observations of the Earth's surface. NISAR has several unique characteristics that distinguish it from other spaceorn
[14:00] SAR missions. First, NISAR carries both an L-band and an Sband radar that can operate simultaneously. Um, and because these radars operate at
[14:11] different wavelengths, so it would be 24 cm wavelength at Lband and a 9.4 cm wavelength at Sband. This means that
[14:20] they are sensitive, each uh sensor is sensitive to different characteristics of the earth's surface. Another key innovation is NISAR's use of the
[14:31] sweepsar technology and this represents a significant advancement over traditional spacebor systems. Sweepsar enables NISAR to achieve a wide 240
[14:44] kilometer imaging swath while maintaining high spatial resolution and polarometric measurement capabilities. NISAR also incorporates highly precise pointing and orbit control, both of
[14:58] which are essential for measuring subtle changes in the Earth's surface through a technique known as interferometric SAR
[15:05] or INSAR. Pointing control ensures that the radar beam is directed at the correct location on the Earth's surface with the
[15:14] precision required for repeat observations. observations. and orbit control maintains the satellites flight path so that the same
[15:21] locations can be observed repeatedly from nearly identical viewing geometries. geometries. NISAR is capable of repeating its orbit
[15:30] to within a 100 meters throughout the orbit providing the stability needed for accurate surface deformation measurements. measurements. Another distinctive feature is NISAR's
[15:41] high observation duty cycle which refers to the fraction of the orbit during which the radar is actively collecting
[15:49] data. NISAR is designed for systematic global mapping and the Lband radar operates for approximately 50% of each
[15:58] orbit while the Sband radar operates for about 10%. This enables NISAR to routinely observe nearly all of Earth's land and ice
[16:08] covered surfaces. Finally, NISAR is a left looking radar system. I'll talk a little bit more about this in the upcoming slides, but
[16:17] this means that the viewing geometry provides comprehensive coverage of Antarctica and complements the observations from many existing SAR
[16:26] missions which are predominantly right looking. And all of these unique features combined together make NISAR a powerful science and applications tool.
[16:42] NISAR operates at an altitude of 747 kilometers in a near polar dawn dusk sun-synchronous orbit. The satellite has
[16:53] a 12-day exact repeat cycle. However, by combining observations from both ascending and descending repeat orbits, the same area can be observed twice
[17:04] within each tw 12-day period. The ascending pass crosses the equator at approximately 6:00 a.m. local time, while the descending pass crosses at
[17:14] approximately 6 p.m. Depending on the acquisition mode, NISAR provides spatial resolutions ranging from 3 to 10 m. And
[17:22] this animation illustrates the acquisition plan for the ascending portion of the orbit. The different colors represent distinct acquisition
[17:31] modes which are selected based on the characteristics of the target being observed, scientific objectives and practical resource constraints.
[17:41] For example, sea ice is shown in pink and is imaged using a lower resolution mode because frequent observations are
[17:49] required and the features of interest generally occur at larger spatial scales. In contrast, North America is observed using the highest resolution
[17:59] mode with full polar capability enabling the most precise measurements. Most of the rest of the world is imaged using a
[18:09] moderate resolution dual polarization mode that balances measurement quality with global coverage requirements. So that provides a little bit of
[18:20] background on NISAR. However, before I start diving into the data and the different science and applications it
[18:30] can address, I want to provide some context about what radar is actually seeing and measuring and and what radar
[18:37] is sensitive to. So, this next portion will give a brief overview of uh radar remote sensing. So let's start with the very basics and
[18:50] this is the electromagnetic spectrum. It's uh the range of electromagnetic energy that spans from very long wavelengths such as radio waves which
[18:58] can be the length of a football field to very short wavelengths such as gamma rays which are the length of an atomic
[19:06] nucleus. nucleus. Remote sensing sensors are designed to operate at specific regions of the electromagnetic spectrum according to
[19:15] their intended application. Microwave sensors operate within the range delineated in this figure in black. And this range is at a much lower frequency
[19:28] range than optical and infrared sensors. So to put things into context, the wavelength of light is about 390 to 700
[19:37] nanometers, while for microwaves, it's on the order of 0.3 to 100 cm. And because of this huge disparity in
[19:48] wavelengths, wavelengths, um the features on the earth's surface appear differently in the microwave range than in the optical range. And so
[19:59] radar is fundamentally different. The information content is fundamentally different uh than optical images. So what are the advantages and
[20:11] disadvantages of radar over optical remote sensing? First of all, radar has a nearly all weather capability. So you
[20:18] can see through clouds and most weather conditions. And I do talk about nearly because if you have very um heavy
[20:27] thunderstorms that might affect the signal. signal. It has a day or night capability. So it's an active sensor. We're sending out
[20:34] a signal and we can therefore acquire images of the earth's surface uh whether it's day or whether it's night. Um it
[20:44] can penetrate through the vegetation canopy or through a medium. So that signal that we're sending from the
[20:50] sensor um can penetrate through vegetation, through soil, through snow. The radar signal has minimal atmospheric effects. The and and the most important
[21:05] part is that radar is sensitive to two things, structure and moisture, surface moisture. um optical is sensitive to the
[21:15] chemical properties of the surface. So very different information. Disadvantages of radar is that the information content is different than
[21:26] optical. Um so it's not necessarily intuitive and sometimes it's difficult to interpret. There's the speckle effect that you've all um heard about or know
[21:37] about. It's that's the kind of the salt and pepper um effect in the images. Um it's not noise. It's actually part of
[21:45] the signal, but it is that graininess in the images that you have to deal with. And then the effects of topography that
[21:52] you need to deal with as well. So let's begin with some basic concepts of radar. It stands for radio detection
[22:01] and ranging. And as the acronym suggests, radar functions as a ranging or distance measuring device. Essentially, a radar sensor emits a
[22:10] signal toward the Earth's surface and measures the time it takes for the signal to return. All imaging radars are sidelooking. If a
[22:20] radar were to look straight down, as depicted in the figure on the left, it would not be able to to differentiate
[22:26] between two points A and B. In this case, the signal would reach points A and B at the same time and return to the
[22:35] sensor at the same time, which is why you wouldn't be able to differentiate them. However, when the radar is side
[22:41] looking, as shown in the figure on the right, the time it takes for the signal to reach points A and B differs along
[22:50] allowing for points A and B to be differentiated. differentiated. Synthetic aperture radars are selooking systems with an illumination direction
[23:00] usually perpendicular to the flight line. line. So NISAR is a left looking radar and that means it's looking to the left of
[23:11] the satellit's direction of travel and as a consequence coverage at high latitudes differs between the Arctic and
[23:19] Antarctic. In the northern hemisphere, the left-looking geometry creates a larger gap around the north pole, leaving regions north of approximately
[23:29] 77.5° 77.5° latitude outside the standard imaging swath. And this unobserved area is shown by the red circle in the North Pole
[23:39] coverage map. In contrast, the coverage gap around the South Pole is substantially smaller as illustrated in the Antarctic map.
[23:51] Let's begin by reviewing how radar images are formed. NIAR measures two fundamental properties of the RA return
[23:59] radar signal. The amplitude and the phase. So radar pulses travel at the speed of light and the sensor records
[24:07] only the portion of the transmitted energy that is scattered back toward the antenna. The amplitude represents the
[24:15] strength of the return signal and provides information about the the reflective properties of the earth's surface. The signal power which is
[24:26] proportional to the square of the amplitude is calibrated and normalized to produce the radar back scattering coefficient or sigma kn. And this
[24:36] quantity is a measure of radar back scatter and is typically expressed in decibb using a logarithmic scale. So
[24:45] back scatter values can range from approximately minus30 to -25 dB uh for surfaces that reflect very little energy
[24:54] back to the radar. And these areas appear as dark tones in the radar images. And for example, the one you see
[25:02] here, there's a river that goes through the middle of the image. And that river has low back scatter because the smooth
[25:10] water surface reflects most of the radar energy away from the satellite. In contrast, surfaces that strongly scatter radar energy back to the sensor
[25:22] have higher back scatter values, often exceeding 0 dB. And these areas appear as bright tones in the image. and are
[25:30] typically associated with inundated vegetation and urban areas. The second measurement is phase which describes the position of the radar wave
[25:42] within its cycle at the moment the signal is received. Phase is usually measured in angular units such as degrees or radians and
[25:53] describes as mentioned the position of a wave within its waveform cycle. So for NISAR the radar wavelength is
[26:00] approximately 24 cm for Lband and 9.4 cmters for Sband. And as the radar signal travels from the satellite to the
[26:09] Earth's surface and back, it completes as you can imagine millions of wave cycles. And it's just not possible to
[26:17] count all of these cycles. Now viewed on its own a phase image often appears noisy and difficult to interpret such as
[26:25] the example shown in the upper right here. However, one of the most powerful applications of SARSE is interferometry
[26:34] or INSAR interferometric synthetic aperture radar which measures the phase difference between two radar images acquired at different times or different
[26:44] viewing angles. Now in the case of NISAR um INSAR it's acquired the images are acquired at different times and that's
[26:52] also known as repeat pass interferometry and these phase differences between two different images can be converted into
[27:00] extremely precise measurements of surface deformation often detecting displacements of just millimeters to centimeters centimeters because NISAR's radar wavelength is
[27:12] relatively short as mentioned 24 cm for LBAN 9.44 Sband. Even very small changes in the distance between the satellite
[27:20] and the ground produce measurable shift phase shifts. And this sensitivity enables scientists to monitor subtle surface movements associated with for
[27:31] example earthquakes, volcanic activity, groundwater extraction, landslides, infrastructure deformation and perafrost thaw to name a few. In addition, the
[27:43] consistency or the [snorts] coherence of the phase over time provides valuable information about surface stability. So if the phase does not change, that means
[27:54] the surface is stable. And areas with stable phase behavior tend to remain unchanged. While a loss of phase
[28:03] coherence can indicate some sort of change, whether it's vegetation growth, surface disturbance, tectonic movement or any other dynamic process.
[28:17] So now let's discuss the radar scattering mechanisms. So we discussed amplitude phase and NISAR's interferometric capabilities. In
[28:30] session three of this training, we will take a deeper dive into NISAR's INSAR data products and explore the different
[28:38] applications they enable. For now, let's focus on how the R radar signal interacts with the Earth's surface. So
[28:46] when the radar transmits a signal toward the ground, the way that signal is reflected or scattered depends on the
[28:54] physical properties of the surface. Different types of surfaces produce distinct scattering mechanisms which are fundamental to interpreting radar
[29:04] imagery. The uh the amplitude imagery. Now, if the surface is very smooth, such as a calm water body or a paved road,
[29:12] most of the radar energy is reflected away from the satellite, much like a mirror reflecting light. And this is
[29:20] known as specular reflection and results in very little energy returning to the sensor. And as a result, these areas
[29:29] typically appear dark in radar images. As surface roughness increases, the radar signal is scattered in many different directions. Some of that
[29:40] energy is scattered back toward the satellite, producing a stronger return signal signal than say a uh a smooth specular surface.
[29:50] And this type of interaction is often referred to as surface scattering. When the radar signal encounters a
[30:00] volume such as a forest canopy, a snowpack or even soil, the signal can penetrate into the material up to a
[30:08] certain point and interact with multiple components within it. So in a forest for example, the radar wave may scatter from
[30:17] leaves, branches, stems, trunks, and the ground surface. And the combined contribution of these many inter interactions is known as volume
[30:25] scattering. scattering. A fourth important mechanism is a scattering mechanism is double bounce scattering. And this occurs when the
[30:36] radar signal reflects between two surfaces that are roughly perpendicular to one another before returning to the satellite. So common examples include
[30:46] tree trunks standing in flooded areas or buildings adjacent to uh a road or flat ground surfaces. In these cases, a large
[30:57] fraction of the radar energy is redirected back toward the sensor. So the smooth surface causes the radar
[31:05] signal to be reflected away from the sensor. But then that perpendicular um uh feature or surface causes that
[31:16] energy to be redirected back toward the sensor producing a very strong return that appears very bright in the radar
[31:23] imagery. So in the next slide I'll show you these different uh back scattering mechanisms um how they appear in a radar
[31:32] amplitude image. So this is an example of the different scattering mechanisms that I just discussed and how they look like in a
[31:43] radar image. So this here what you're seeing this is a snap radar mosaic of the Amazon basin. Um it's Lband HH
[31:52] polarization. polarization. Uh what I want you to focus on are the different circles, colored circles. So black uh sorry the blue uh circle is an
[32:04] example of a specular surface that that's the Amazon River. Uh so it's an open water body and the energy is
[32:11] scattered away from the satellite which is why it appears very dark. There's a rough surface that's the red circle.
[32:18] These are areas where there's probably been um cut down of of of trees due to grazing or due to agriculture. So there
[32:28] is some sort of roughness on the ground and part of the energy is scattered back toward the satellite. So these areas are
[32:36] not as dark as open water bodies, but there's um there's some return uh to the sensor. sensor. And then there's the green circle,
[32:48] that's volume scattering. So the signal is penetrating through the forest canopy, interacting with components within the canopy. And then there's
[32:56] double bounce. That's the purple circle. And in this case, it's inundated vegetation. The signal is penetrating through the canopy. It's hitting the uh
[33:06] standing water underneath the vegetation. That standing water is a specular reflector. It directs the energy away from the satellite, but then
[33:15] the tree trunks redirect the energy back toward the satellite. So as you can see um the radar can provide valuable
[33:25] information for different uh different things different science and application areas. Uh it's great for detecting inundated vegetation. It's
[33:36] great for looking at uh forest degradation degradation uh biomass measures of biomass. looking at um areas that have been
[33:46] deforested as well. Looking at flooded areas areas um and looking at for example if you're you have time series you can look at
[33:55] agricultural growth. So these are some of the things that NISAR can address. Now let's talk about radar and surface
[34:06] parameters as related to NISAR. So let's start with wavelength. That's that's kind of the the most important
[34:16] parameter up front, right? So wavelength is the length of the peak of one wave to the peak of the next wave or really the
[34:23] position of any point in the wave to the same point in the next wave. In radar remote sensing, we often talk about
[34:30] wavelength rather than frequency. And this is because the length of the wave defines the interaction of the signal
[34:37] with the surface or the medium. And it's therefore easier to associate the capability of the sensor. Wavelength is inversely related to
[34:48] frequency. It is the speed of light divided by frequency. And the higher the frequency, the shorter the wavelength
[34:53] and vice versa. So the table on the right lists the common wavelength bands in radar. And the letter codes were are
[35:04] have been arbitrarily uh assigned and these were developed during um for military security during the early stages of radar development. So they're
[35:15] not in alphabetical order but but NISAR operates at LBN. So that's LBN means there's a range of frequencies
[35:25] that define that band. NISAR operates specifically at a specific frequency within that range. Uh that would be
[35:34] 1.257 1.257 gigahertz gigahertz um with Lband and 3.2 gigahertz with Sband. There are two important things to
[35:49] remember about wavelength. The first is that the longer the wavelength, the greater the penetration through the medium. That's whatever that is,
[35:57] vegetation, snow, soil. And the figure on the lower left shows that a shorter wavelength such as Xband in this case,
[36:05] which is around 3 cm, we'll see the top part of a forest, probably the top third or fourth of the canopy, while Cband
[36:13] will penetrate halfway through and Lband um will penetrate all the way through. Now, this is limited by vegetation
[36:21] density, but that's the general idea. So with NISAR that has Lband and Sband um Sband will have less penetration through
[36:31] the canopy than Lband and the same goes for soil. So So the second important thing about wavelength is that the length of the
[36:43] wave will determine the interaction with surface objects. In general, if an object or surface roughness is comparable to the size of the wave, then
[36:53] there will be interaction. The surface will appear rough and there will be energy scattered back. For example,
[37:00] little little energy is scattered back from a surface with a high fluctuation on the order of 9 cm if Lband is used
[37:08] and therefore that surface will appear smooth to the radar signal and dark in the radar image. However, that same
[37:16] surface will appear bright to the uh Sband SAR image because it's on the order of um the of the wavelength, the S-band
[37:29] wavelength, which is 9.4 cm. The table on the right shows examples of applications most relevant to specific
[37:38] bands. So, if you're interested in forest type studies and you want deep penetration, L-band is better than
[37:45] Sband. Um, Sband can still be used for forest studies, but it's better for uh forests that are not as dense. Uh, so
[37:54] Lband and Pband are much more suited for say tropical forests where you have high biomass, high density.
[38:06] The other radar parameter is polarization and it refers to the plane of propagation of the electric field of
[38:12] the signal. So irrespective of wavelength, radar signals can be transmitted and or received in different polarizations. polarizations. The figure illustrates these planes of
[38:23] propagation. If you had a long string attied to an object and you stand at the very end of the string and move it up
[38:30] and down in a vertical manner such as the figure in the top then the signal is vertically polarized. If you move the
[38:37] string horizontally from side to side then that signal is horizontally polarized and similarly the antenna can receive either the horizontally or
[38:47] vertically polarized back scattered energy by applying specific filters. Nisar can receive both. So it can transmit and receive both. So there can
[38:58] be four combin combinations of both transmit and receive polarizations. HH that means horizontally transmitted and horizontally received. VV vertically
[39:09] transmitted and vertically received. HV horizontally transmitted and vertically received. And VH vertically transmitted and horizontally received. So NISAR's
[39:20] polarric capability is important because it allows the radar to do more than just see the surface. It helps understand the
[39:27] orientation of the structures on the surface. And NISAR has different acquisition modes. Depending on the acquisition mode, either all
[39:38] polarizations are collected or just a subset of these polarizations. So we discussed two important radar parameters in the context of NISAR
[39:50] that's wavelength and polarization and the radar back scatter is in part driven by these two characteristics. The reflection of the signal is also
[40:00] driven by the characteristics of the surface. So this is super important. Radar is sensitive to two things. One is
[40:08] structure and the other one is moisture. So let's start with structure. In general, there are three parameters
[40:14] related to structure. That's density, size relative to wavelength, and size and orientation. So, we discussed size relative to wavelength. Here we have an
[40:24] example of an Austrian pine. And that wavelength will or that wave that signal will interact with components in the
[40:32] surface that are approximately the size of the wave. Right? So in this example um at at Xband which is about 3 cm we're
[40:41] primarily seeing the needles in the Austrian pine at the top of the canopy and with LBand we're seeing more of the
[40:50] longer uh branches. So elband at at uh for NISAR 24 cmters we're looking at the longer branches the the trunk um and so
[41:01] and and with P band even the longer structures that are um more similar to the wavelength at P band also the longer
[41:10] the wavelength the greater the penetration through the medium. Then there's density and that signal will penetrate through the forest canopy all
[41:19] the way down depending on how dense your vegetation is. And there are many different studies that have looked at
[41:26] the saturation point in terms of um the above ground biomass tons per hectare. And this value differs that where that
[41:37] saturation point is. It differs between different types of forest tropical forest and boreal forest. But the signal
[41:44] will definitely saturate at a larger tonnage per hectare the longer the wavelength as opposed to the shorter
[41:51] wavelength. So at Lband, Lband is more suitable to look at dense forest. Sband uh forests that are uh less less dense
[42:01] and Cband tends to be a better sensor for agriculture. And then there's size and orientation. We discussed polarization. So
[42:11] polarization provides information on the orientation of the components on the ground. The other surface parameter is the
[42:23] dialectric constant which is uh controlled by the amount of moisture in the surface and radar back scatter is
[42:30] influenced by the amount of moisture in the vegetation and the soil and the snowpack. And the larger the water
[42:37] content in a medium, the less the penetration. penetration. So the magnitude of the radar back scatter is
[42:47] proportional to the dialectric constant of the surface. So for dry uh surfaces uh it's on the order of 3 to 8 the
[42:55] dilectric constant. For liquid water it's around 40 to 80. This is frequency dependent. So the amount of moisture in
[43:02] the soil uh or in in the medium can greatly influence an increase in radar reflectivity. reflectivity. And so what you're seeing here on the
[43:12] right is an example of an Lband. This is a JRS1 image time series uh near Fairbanks, Alaska in a place called
[43:21] Bonansa Creek. And you're seeing the transition of the land surface for the same area uh from early from
[43:30] midepptember through late from midFebruary to late September. And what I want you to note here is the change in
[43:39] reflectivity when things are frozen in this part of the world in Alaska. things are fully frozen in February and then
[43:48] you've got a spring transition and then you've got summer when things are thawed. So the radar back scatter
[43:55] increases increases uh when things go in this case from frozen which is very it has a very low
[44:01] dialectric to spring thaw when there's a large amount of water in the soil and things are are thought.
[44:12] Now let's focus on the science and applications that NISAR can address as well as some early results.
[44:21] Summarizing some of the key characteristics of NISAR include its dual frequency radar system operating in both L and Sband. The satellite provides
[44:30] near global coverage with the exception of the high latitude regions, especially the Arctic. NISAR has a 12-day exact
[44:38] repeat cycle. However, it acquires two observations within each cycle. One in ascending orbit and the other one in
[44:44] descending orbit. The spatial resolution of the data varies between three and 10 meters depending on the acquisition
[44:51] mode. The mission has a baseline duration of 3 years for Lband and 5 years for Sband and all data are or will
[45:00] be freely and openly available. Lband data is distributed through the Alaska satellite facility distributed active archive center uh also known as the ASF
[45:12] DAC while the Sband data along with some LBAN data products will be available through ISRO's bound platform. Now given
[45:21] these capabilities, NISAR will support a wide range of science and application areas including solid earth processes, ecosystems, the cryossphere, soil
[45:33] moisture, and applied remote sensing applications. The mission has key science objectives organized into three main areas. The
[45:45] first is the cryossphere which focuses on the dynamics of earth's sea ice and major ice sheets in Greenland and
[45:52] Antarctica as well as glaciers and this includes examining how these components contribute to sea level rise. The second
[46:00] is ecosystems and this includes understanding the dynamics of carbon storage, landscape disturbance, wetland inundation dynamics and agricultural
[46:09] systems. And it also provides a unique capability for estimating standing biomass and carbon stocks as they are
[46:17] distributed across the globe. The third is solid earth science which focuses on processes such as earthquakes, plate
[46:25] tectonics, volcanic activity and landslides as well as related geohhazards. geohhazards. And together these three science domains are supported by dedicated science teams
[46:35] working across each area. In addition, the mission includes important applications objectives and these include understanding societal impacts
[46:44] related to hazards, water dynamics, ecosystem restoration and degradation as well as their links to broader societal needs. In agriculture, the mission
[46:54] supports food security applications by monitoring land use and crop activity, distinguishing between actively managed farmland, fellow areas, and crops
[47:04] intended for food production, as well as monitoring soil moisture. There's also an urgent response capability enabling rapid tasking for events such as oil
[47:14] spills, storms, earthquakes, and other natural hazards. And this allows the mission to acquire additional targeted observations and deliver data quickly to
[47:25] the user community which is a particularly powerful aspect of the mission. And in particular for India there is a very strong focus on coastal
[47:36] processes. This is an example of a complete 12-day cycle at LBand HH polarization. The data used to create this mosaic have not yet
[47:49] been fully calibrated and as a result some radio frequency interferent interference is present in certain areas. However, this example serves as
[47:59] an illustration of NISAR's Lband coverage over land and ice. And it also provides a sense of the mission's
[48:08] ability to generate and manage a very large data volume on the order of approximately 1,300 frames per day,
[48:16] about 16,000 frames per 12day cycle, and roughly half a million frames per year. This is a preliminary result of biomass
[48:28] with NISAR and I mentioned previously that biomass dynamics are extremely important and these results illustrate the relationship between polarized back
[48:39] scatter and biomass. This information can be used at the calibration and validation sites shown on the left to
[48:48] generate biomass maps as illustrated on the right. And as you can see, the system is able to estimate biomass
[48:54] across a wide range of conditions, including very high biomass levels exceeding 200 metric tons per hectare. And this capability is also important
[49:05] for improving climate cycle modeling. This is an example of wetland inundation. So this is a false color
[49:13] composite and what you're seeing here in purple are inundated areas vegetated inundated areas. So whatever is dark
[49:23] that's river that's open water and all of the pink areas are inundated vegetation and this inundated vegetation
[49:31] is something you would not see with optical data. Another example is this striking image related to ice sheets. And on the left
[49:41] you can see a series of ice streams flowing across Antarctica. The feature highlighted in the red box
[49:49] is shown in greater detail on the right. And this area corresponds to a topographic mound beneath the out sheet.
[49:56] And as ice flows through the region, it's diverted around the obstruction which causes deformation and fracturing of the ice. And this process produces
[50:07] extensive creass fields. sometimes referred to as hairline creasses, although they are far from small um spanning as you can see the in the scale
[50:18] here uh several kilometers and so these features are clearly visible in the radar image imagery in the uh in NIAR
[50:26] and they arise in part because the radar signal penetrates to some depth into the ice and it scatters from internal and
[50:35] and surface structures and returns to the sensor. So measurements like these are used to study ice dynamics including ice flow
[50:43] behavior and its interactions with both oceanic and atmospheric processes. So here's another ice related example where we directly measure velocity using
[50:55] interferometric techniques. On the left is a radar image of an ice field and you can see some areas appear slightly
[51:05] defocused and that's due to signal penetration effects. But the rougher regions clearly reveal the location of the ice stream. And this example is from
[51:15] Jacob Jacob's Ham Glacier in Greenland. On the right, uh you can see a time series that's been generated by
[51:23] combining one image with another acquired 12 days later and forming an interferometric pair. So from this, we
[51:30] can estimate eye surface displacement and derived velocity. In this case, the NICAR data have also been combined with
[51:37] Sentinel one data from a different viewing uh geometry to generate a full velocity vector field that shows ice
[51:47] motion of approximately 3 kilometers per year in this region. That's a very fast flowing ice. Tracking the variability of
[51:57] this dynamic behavior over time is one of the primary objectives of NISAR. The mission enables seasonal scale
[52:05] monitoring whereas other systems have required up to a decade to produce a single velocity map. So this represents
[52:13] a significant advance in our ability to understand ice dynamics and their relationship to climate. So here's a solid earth example. Another
[52:24] important application of interpherometry is tracking earthquakes, volcanic activity and other forms of surface deformation to better understand
[52:33] processes that are these dynamic processes occurring within the earth's crust. And this example shows a volcanic event in Ethiopia
[52:42] um captured using a time series. So in the lower right you can see the difference between two images acquired
[52:50] November 10 and 22nd of last year. Um and the subtle color variations reveal surface deformation. So these are areas
[53:03] of subsidance and uplift indicating subsurface magma movements. And so in some areas the magma chambers are losing
[53:10] material while in other areas they're being recharged and may be approaching eruption. So in the subsequent 12-day
[53:18] interval the data showed that an eruption did incur in fact occur. The magma that had accumulated in the system
[53:27] was released and the d that dyke effectively closed. So the colored fringes that you see are also known as
[53:35] interferometric fringes and they represent the magnitude of ground displacement and in this case it's on the order of half a meter to a meter and
[53:44] remarkably we're able to measure this level of information deformation from space with centimeter scale precision using INSAR and this capability is
[53:55] repeated every 12 days over the lifetime of the mission providing as you can imagine a very powerful tool for
[54:02] monitoring these dynamic geoysical processes in near real time. Soil moisture is another key variable that is being measured by NISAR. It's
[54:14] critically important for things like agriculture, hydraological models of evol transpiration, drought monitoring, weather forecasting and related applications. And here you can see an
[54:26] example of the soil moisture product at field scale. Previous satellitebased soil moisture measurements have generally been at relatively coarse
[54:35] spatial resolutions on the order of 9 kilometers or more. In contrast, these observations that are approximately 200
[54:44] meter spatial resolution and this uh represents field scale variability in soil moisture which is highly valuable for the agricultural community.
[54:57] And of course there are a number of applications that NICAR can address. Uh here are some examples and you can
[55:03] access these white papers through the link on this slide. Now let's focus on the science and applications that NISAR can address as
[55:15] well as some early results. So this figure illustrates NISAR's observation plan which defines how the satellite acquires radar data around the
[55:25] globe. So rather than using a single imaging mode everywhere, the mission employs multiple radar acquisition modes optimized for different science
[55:35] objectives. And these modes also provide different spatial resolutions and polarizations, allowing NISAR to balance detailed observations with efficient
[55:46] global coverage. Elband observations provide near global coverage of Earth's land surface including islands as well as the major ice sheets and sea ice. In
[55:57] contrast, the SPAN acquisition strategy is more targeted. ISRO's primary focus is on the Indian subcontinent, other regions of South Asia and Antarctica.
[56:09] So, ESPAND data are not collected globally globally um just over targeted uh over specific areas. And in addition to those areas,
[56:18] Sband observations are also acquired over a global network of calibration and validation sites. And these locations provide them unique opportunities to
[56:30] combine Lband and Sband observations, helping scientists better understand the complimentary information provided by the two frequencies and the benefits of
[56:42] using dual frequency radar measurements. The observation plan is reviewed and updated approximately every six months based on science team member
[56:52] recommendations, recommendations, available mission resources, and other programmatic considerations to ensure that the mission continues to meet its
[57:02] evolving science objectives. These are the different NISAR data product levels. And like most NASA Earth observing missions, NASA organizes its
[57:13] data into a series of processing levels. So level zero consists of the raw telemetry and signal data. Level one
[57:22] data products have undergone some initial processing and calibration but remain in the radar's native uh or in
[57:30] the satellit's native geometry also known as uh range Doppler rather than geographic coordinates. Level two products are geocoded meaning they have
[57:41] been projected into geographic coordinates latitude and longitude making them easier to integrate with other geospatial data sets. These
[57:50] products include calibrated radar back scatter interferometric phase unwrapped interferoggrams and other geoysical measurements. So these are considered
[57:59] analysis ready. Then level three products are the higher level geocoded um derived science products expressed in physical units. So the only global level
[58:13] three product generated by NISAR is soil moisture. There are algorithms they're known as ATBDs in and which stands for
[58:22] algorithm theoretical basis document. These are algorithms that have uh been generated uh by the different disciplines. disciplines. Um and they have been validated over
[58:34] calibration validation sites and the so these algorithms are focused on generating biomass, vegetation disturbance, wetlands inundation, crop
[58:44] area, surface deformation, damage proxy, ice sheet, glacier velocity and sea ice velocity. And all of these ATBDs are
[58:53] openly available. So, NISAR data products consist of back scatter and phase as well as interferoggrams that contain information
[59:05] on surface deformation as well as coherence which is the stability of a surface on the order of centimeters.
[59:12] There are also pixel offset products generating using the back scatter data and these identify large shifts in the
[59:20] surface on the order of meters. And finally, there's the soil moisture product, which is a 200 meter spatial
[59:26] resolution. resolution. You'll notice that many of these data products are derived only over cryossphere regions um and the rest is
[59:37] global or near global. Now, if you're new to uh radar and you're doing, for example, ecosystem type studies, land
[59:46] cover classification, or you're looking at fire burn scars, uh or you're looking at agricultural growth through time, you'll want to use
[59:58] the G-code data product. So, that is the geocoded coariance matrix. So that's basically the back scatter data at
[1:00:07] multiple polarizations and that data set has been radiometrically and terrain corrected so it's analysis ready. If you're new to INSAR
[1:00:19] um then you'll want to use the GUW which is the geocoded unwrapped and uh and it contains also the wrapped
[1:00:28] interferoggram. interferoggram. So uh these are both level two uh data products that are produced globally. NICAR data status in February of 2026 a
[1:00:44] large number of pre-calibrated global data products were made available and this release included over 100,000 level one 123 products totaling over 500
[1:00:55] terabytes of science data. In July of 2026, the calibrated forward processing data will be released. So after the
[1:01:08] calibration phase concludes and planned software improvements are completed, the NISAR project will begin forward processing of the newly acquired data.
[1:01:18] So forward processing is targeted to begin in sometime in July of 2026. So sometime during this month, the fully
[1:01:28] calibrated level 0 to3 products will be continuously generated from all data acquired from the start of forer
[1:01:36] processing into the future and new data will be continuously published to ASF and made publicly available. Level one
[1:01:45] to three products will have a nominal latency of 36 to 72 hours from data acquisition to availability.
[1:01:54] the Q3 to forward. So the there's a calibrated back processing. So after the start of the forward processing, the
[1:02:03] NISAR project will produce calibrated level 0 to three products from the backlog of all data collected uh from
[1:02:12] September 23rd, 2025 through the start of the forward processing in July 2026. And this processing will be completed
[1:02:23] sometime before the end of calendar year 2026. So the Alaska satellite facility is the data archive center for the LBAN data
[1:02:37] and ISRO's bound platform is the data archive center for the Sband data as well as for overlapping um LBAN data.
[1:02:48] If you'd like to learn more, you can scan the QR code on this slide. Data can be downloaded through ASF's web-based
[1:02:56] graphical user interface, or it can be accessed programmatically using an API, making it easy to incorporate NICAR data
[1:03:03] into automated workflows. All NISAR data are freely and openly available and are hosted in the Amazon Web Services Cloud,
[1:03:13] providing fast and scalable access for users around the world. Now I'll show you a short demo on how to
[1:03:21] use the G-cuff product to visualize flooding uh between two acquisitions. One during a um high flood period and another one during the low
[1:03:34] flood period. All right. So the first thing we're going to do is we are going to go to the
[1:03:43] Alaska satellite facility ASF vertex tool. So go to Google and do a search on your web browser and we'll select um
[1:03:53] here our first result. Um now this is the Vertex platform and the default is Sentinel 1. What we want is
[1:04:04] NISAR data. Note that this is unccalibrated data. So in February of 2026, there was a release of over
[1:04:12] 100,000 NISAR data products. These are all unccalibrated. So today we are working with the unccalibrated data. There are issues with the data and I'll
[1:04:21] show you what those some of those are. Um the plan as mentioned is that sometime in July of 2026, late July
[1:04:29] 2026, there will be a release of the calibrated data, NISAR data. So let's just select NISAR and again there are
[1:04:41] over 100,000 uh data products um available. Let's do a specific search. This example is a flood visualization
[1:04:51] example. So let's just look at Colombia because I know there was a a period of high flood and low flood um there. And
[1:04:59] let's uh select specifically the GOV product. So that is the radiometrically terrain corrected uh back scatter data
[1:05:10] um in different polarizations. In the case of overland um in uh at least in this region that I uh specified
[1:05:21] it's just hh and hv primarily. So let's oops let's do this. So I'm going to draw my area of interest
[1:05:37] and and uh under filters I'm going to select the GCOV data product and I will do search
[1:05:51] and so there are 236 NISAR files over my area of interest. So, let's just zoom in. And I know I've already located an area
[1:06:04] where there's interesting flooding. So, it's this frame right here. And that frame is this one. Whichever frame
[1:06:17] I select, you can see a a quick browse image right here. but we're specifically interested in this one. So, let's just click on that
[1:06:30] browse image and it'll open a separate window where you can um actually take a closer look at that browse image. So,
[1:06:38] I'm seeing a lot of flooding here along the river. This is uh double bounce all of these purple areas. Um as mentioned,
[1:06:46] these are unccalibrated data. So what you see up here, this uh bright green uh area here, that's uh radio frequency
[1:06:56] interference. So that's noise, that's RFI. RFI. Um and that is going to be resolved in the release of calibrated data that we
[1:07:05] will be doing later in July 2026. All right. So this is an interesting image uh because of the flooding. And so one
[1:07:15] thing I can say is I want to see images more like this. So I want to see uh the
[1:07:22] time series of images over this my specific area of interest. Okay. And so these are the images uh the
[1:07:34] exact repeat exact uh uh area. And let's take a look. So, the nice thing about Vertex is you
[1:07:46] can actually um take a look at these browse images. Take a quick look. And what I'm seeing here, what I'm most
[1:07:57] interested in is the flooding, the the bright purple areas along the river. That's inundated vegetation. Okay. So, I'm going to select, and you
[1:08:07] see this one has a lot of that um inundated vegetation here along the river, while this one doesn't, and
[1:08:15] neither does this one. So, I'm just going to select October 29th and December 4th. And in order to download
[1:08:23] the data, you uh go to the HDF5 file. So, there are a series of of files here. This is
[1:08:32] the the actual uh data file and you download the file. It's pretty large or you can add it to your cart. So, um I
[1:08:41] can add these two images to my cart and download both of them at the same time or I can individually download it. So,
[1:08:48] I've downloaded the images already and let's just go to QGIS and take a look at the images and create an RGB.
[1:09:05] Okay, so I have the latest version of QGIS 3.44, the stable version. And what I do is I
[1:09:16] go to layer, add layer, add raster layer, layer, and then I select the file of interest. So I need to go here. I actually
[1:09:29] downloaded three different dates, but we're going to use two dates for this example. So we're going to use the
[1:09:36] October 29th and December 4th. You can see it in the name right here, 2025 1204. 1204. And this one is 2025 1029.
[1:09:48] Okay. Okay. Now Now let's start with the 1029. That's the October. That's where we saw the flooding. So let's call that the high
[1:09:59] flood um image. And we'll open it. Now what happens is QGIS does not have a reader to recognize this version of HDF5
[1:10:13] that NISAR is using. That's still in development. We're we're developing the the the G doll reader still. So what you
[1:10:22] need to do in QGIS is you need to trick it so it thinks it's a net CDF f uh net
[1:10:29] CDF file. And the way you do that is you go to the front to the very beginning
[1:10:35] and just type net cdf colon. Okay. The other way to do this is just to change the extension in the name of the
[1:10:47] file. file. Instead of hdf at the end just change it to nc. So there are two ways. either
[1:10:56] specifying that it's a net CDF in the path at the beginning or changing the extension from HDF
[1:11:05] uh to NC. So let's just go this way and we'll say add and there this these are HDF5 files
[1:11:15] so they have a bunch of different files within it. Um, and the one that we want is this one, the frequency A. There are
[1:11:25] two polarizations, HH and HB. In this case, we're just going to work with the HH data frequency A. So that's about
[1:11:33] that's a 10 m spatial resolution. And we'll say add layer close. So this is the file. And it's always good to to view it. And
[1:11:46] what we will do is um so it's loading right now since it's a it's a very heavy file.
[1:11:56] Okay. Okay. And uh this is you see that it doesn't it looks very dark or very bright. So
[1:12:04] that has to do with how we're this QGIS is is uh doing the histogram stretch to visualize the image. So what we do is
[1:12:13] you double click on the file name you go to symbology and just set the max min. So this is a cumulative count count cut
[1:12:22] based on percentile and just select that and that's our image. Okay. So let's do the same thing. We'll open
[1:12:41] the this is the October. Let's open the December file. Same way add raster layer. And here we'll just select the
[1:12:52] these are very long file names but this is the December 4th. We'll open it again. We add net CDF at
[1:13:04] the beginning and we select the the frequency A HH um band. Okay. And we say add layer.
[1:13:22] Okay. So here we have our two images. It takes a little while to load. And it's always really good practice to look
[1:13:31] at your images and just make sure that everything looks okay. So we again we'll do the cumulative count uh count cut.
[1:13:50] Okay. Okay. So the next thing we do is we will subset these images. And in order to do that you go to processing
[1:14:04] toolbox. toolbox. Oops. Processing toolbox and clip clip clip raster by extent. So I recently used that but you can go to raster
[1:14:17] extraction and select clipped raster by extent. extent. Okay. And so we want to clip uh let's see this is the October image. So let's
[1:14:30] start with that. And let's say that the extent that we want to clip is what we draw. We'll draw the extent. So
[1:14:40] I'm going to go here. And this area, this is where the flooding occurs along the river here.
[1:14:49] So, we'll clip this area and we'll say run. Great. Great. Close. We will rename. So, you uh double
[1:15:03] click on the file name, the clipped extent, and you right click and you select to rename the layer. Okay. So,
[1:15:11] this is October 29, 2025. hh clipped. Okay. Now we want to do the same thing for the
[1:15:26] next image. So again we say clip raster by extent and we want to clip the December file.
[1:15:37] So it's this one. You can see at the date here. And then clipping extent. We want to
[1:15:45] clip it according to the same extent from the first image. So we say calculate from layer and select the
[1:15:53] image that we just clipped. So it'll clip according to the extent of that extent and we say run.
[1:16:04] Okay. So let's just uh visualize this first of all the October 29 29 say symbology minm max cumulative conc cut
[1:16:40] Okay, that's the October 29th. And then let's visualize the let's rename this one. one. This is um
[1:16:51] December 4th. So we'll say December 4, 4, 2025. 2025. HH HH clipped clipped and we will um visualize it again
[1:17:16] there. there. Okay. So that's my clipped image. So we have two clipped images from different dates. The next thing we want to do is
[1:17:24] we want to convert these. These are digital numbers. We want to convert them to decibb. And again these images the
[1:17:32] terrain has been corrected um and they're radiometrically corrected. So when we convert them to decibb there's they're actually in sigma in gamma knot
[1:17:41] sorry. So in order to convert them to decibb you go to raster raster calculator and we'll say
[1:17:50] um um we input the expression here which is 10 * log 10 and in parenthesis you then specify the
[1:18:02] file that you want to convert to db. So we'll select this one and we need to close the parentheses and the output
[1:18:11] layer. We want to say where we want to put this file and give it a name. So
[1:18:15] this is December 04 2025 2025 HH HH clipped and we'll say it's DV. Okay. So So we press okay
[1:18:42] and this is our DB image. Um in this case I'm just going to set the values for visualization. So usually the values
[1:18:51] go say from minus 255 to let's say uh minus2 or let's say zero. Okay. And you can play around with that for for a
[1:19:04] better visualization. So that's the December 25. We'll do the same thing with the October uh file. So we'll say
[1:19:13] this 10 * log 10 and the the October 29 is the one that we want to convert to
[1:19:27] DB. So you double click and it it it fills it down here. And then the output layer again you specify where and you
[1:19:36] specify the name. And in this case it's October 29, 2025 um HH clipped DB. Okay. Okay. And we say okay
[1:20:04] again we will um stretch it from minus 255 to zero. And all of these bright areas that
[1:20:15] you're seeing again that's inundated vegetation. vegetation. So one thing we want to do is let's just create an RGB
[1:20:23] and and in order to do that we uh will build we need to build a virtual raster because these images are
[1:20:33] independent. So let's go ahead and and build a virtual raster and we say place each each input file into a separate
[1:20:42] band. So let's just select our input bands. So we'll select December 4 and um the clipped DB and then we'll select
[1:20:52] October 29 the clipped DB. Okay. So we have two bands and what we want to do now is visualize
[1:21:07] that as an uh an RGB. So you double click uh you select multiband color band one and let's just let's just say minus
[1:21:20] 18 18 and all of them min. So that's how we're stretching the visualization and max let's just say it's one
[1:21:32] one. So in the red band we have band one. In the green band we have band two.
[1:21:39] And in the blue band we'll have band one. Okay. Okay. So what we're seeing here is that all of
[1:21:49] the green areas those are areas where whatever is in the green channel uh has a higher value. So, what the green
[1:21:59] channel has the high flood, the inundated uh vegetation. So, all of these green areas that you're seeing,
[1:22:06] all of that is flooded vegetation that's there in October on the October 29 um scene and not in the December 4th scene.
[1:22:17] So, this is just a simple RGB with just two images. So a couple of important points to
[1:22:32] remember. NISAR is designed to monitor continuous earth's surface changes from the on the order of centimeter to meter
[1:22:39] scale globally. It has a capability to image the earth's surface day and night and through almost all weather or cloud
[1:22:48] conditions. Uh the key focus processes include tectonic deformation, eyes sheet movement, ecosystem change and agricultural monitoring. NISAR has an
[1:22:59] Lband um and an Sband uh radar. So Lband 24 cm, Sband 9.4 cm. The satellite has an exact 12-day repeat cycle. However,
[1:23:12] there are two observations within every 12 days. One is in in the ascending orbit. The other one is in descending
[1:23:19] orbit. It uses a 240 kilometer um imaging swath uh using the sweeps technique and the spatial resolutions
[1:23:30] vary between 3 and 30 m depending on the radar mode. NISAR has a repeat pass um interferometric capability and that
[1:23:40] allows for measurements of surface deformation on the order of centimeters. The polarization acquisitions vary depending on acquisition mode and the
[1:23:52] core science disciplines cover cryossphere ecosystems and solid earth. NISAR can also address different applications and support disaster and
[1:24:02] hazard management. NISAR products are openly and freely available. The LBAN data is available through the ASF DAC. That's global data.
[1:24:12] The SBAN data along with coincident LBAN data are available through Israel's Bondi platform. The Sband acquisitions are over India and targeted locations
[1:24:23] around the world. Data processing levels span from level zero which is the raw data to level three which are the geocoded derived
[1:24:33] products with soil moisture being the only level three global product being generated. Level one and level two
[1:24:42] products contain information about amplitude phase. They have there are interferometric products there's coherence and there are pixel offsets.
[1:24:50] The level one products are in the satellite native coordinates range Doppler and the level two products are
[1:24:56] geocoded and analysis ready. The data are in HDF5 format. The for those interested in doing ecosystem type studies probably the best
[1:25:08] data sets are the G-code and the GSLC data. data. In terms of data status, in July and
[1:25:16] this month 2026, the fully calibrated forward process data will be released with a data availability latency of 36
[1:25:26] to 72 hours. And then in late 2026, the back processing of the archive global historical data will be released.
[1:25:36] So that will be the data acquired by NISAR NISAR um spanning from September 2025 through the beginning of this forward processed
[1:25:48] uh data release. And looking ahead to session two, NICAR data data uh access and tools. You will learn how
[1:26:00] to identify where to access NICAR data, recognize the data format and tools for reading the data, and apply tools for
[1:26:08] visualizing and analyzing NICAR data. Homework and certificates. There is one homework assignment associated with this training. It opens on July 16th and the
[1:26:21] due date is August 6. You can access the homework through the training web page. A certificate of completion will be
[1:26:28] awarded to those participants that attend all three live webinars and complete the homework assignment by the deadline. You'll receive a certificate
[1:26:38] via email approximately 2 months after completion of the course. If you have any questions, feel free to
[1:26:46] contact me via my email posted here. And here are two great resources for those that want to take a deeper dive
[1:26:55] into NISAR. One is the NISAR handbook, the second version of it, and the other one is the NISAR data user guide by the
[1:27:05] Alaska satellite facility. And the QR codes, the one on top is for the handbook, the one on the bottom is
[1:27:13] for the user guide. That concludes the first session of this training. Thank you very much to everyone participating. Thank you for
[1:27:23] all the questions. We are now ready to start the Q&A session. Great. So there have been a lot of
[1:27:35] really great questions coming in, a lot of conversation on the chat. uh we have been compiling your questions
[1:27:43] on a Google doc and we will be sharing that um in just a few moments and we
[1:27:49] will start answering your questions. I don't think we'll be able we'll have enough time to get to all of your
[1:27:54] questions but uh we will be responding to all of the questions um on the Google doc and we will be posting this document
[1:28:04] on the web page. So let's start with question number one. Do NASA and ISRO plan to launch other
[1:28:16] NISAR satellites in the future to have NISAR constellation increase the temporal resolution of the acquisitions. acquisitions. That would be absolutely fantastic. I am
[1:28:27] not aware of. However, um I will uh consult if there are any sort of conversations and I will update this but
[1:28:36] not that I'm aware of. Question number two, if we're interested only on structure, should we try to
[1:28:45] obtain imagery during dry periods of the year? And the [clears throat] response to that is that if you are studying uh
[1:28:53] vegetation structure, you should really try to acquire imagery during both the dry and uh wet seasons because the
[1:29:03] structural characteristics of the vegetation can differ significantly between these two seasons. So I I wouldn't just try to um use imagery from
[1:29:13] the dry season. Okay. Question number three. How deep in the soil can SAR or insar penetrate? This is totally dependent on the
[1:29:23] frequency, the polarization as well as the soil wetness. So again, the the longer the wavelength, the greater the
[1:29:30] penetration. So Lband will penetrate further into the soil than Sband. And the wetter the soil, the less the
[1:29:39] penetration. But the nicer soil moisture product that I discussed represents the average average volutric soil moisture of the upper 5 cm
[1:29:51] of the soil. Question number four, you said NISAR can penetrate through soil. Can it be used to detect and study the heavy metal
[1:30:03] contamination in the soil? So this is an interesting question. it likely cannot be used to study heavy metals in the
[1:30:09] soil, you know, because again, a radar is not sensitive to the chemical properties of uh of of the surface, but
[1:30:19] rather to um structure and to moisture. Now, if there's uh say a large area that is contaminated
[1:30:30] with heavy metals where the dialectric is different, right? So, so the the wetness wetness um is different because of those heavy
[1:30:41] metals. Then you might be able to see differences. You you can't correlate it necessarily why you know one area is
[1:30:50] wetter or drier than another area, but you you would be able to see those differences if it's large enough. Right?
[1:31:00] So indirectly there might be some correlations. correlations. Question number five, can interferometry be used to study vegetation changes? How
[1:31:10] can NISAR contribute to mapping deforestation in tropical forest? So um just for your information um we will be
[1:31:20] diving deep into that interferometric component of NISAR in session three. So my colleague colleague from JPL Eric
[1:31:27] Fueling will be leading that session. He'll be discussing providing a brief background on INSAR and discussing the
[1:31:35] NISAR interferometric products and where they work well and where they don't and the type of corrections that you need to
[1:31:42] do. However, to answer your question here, you know, the best NICAR product to study vegetation changes is the back
[1:31:50] scatter product. So, so that's that's the amplitude um and that's the the G-cuff G-cuff uh the G-cuff product the level two
[1:31:59] G-cuff at different polarizations. So with that you you remember uh when I was um discussing the the fundamentals of of
[1:32:09] SAR you know how you have the the scattering mechanisms and within a forest the signal um bounces from many
[1:32:18] different components. So, so the back scatter signal um can detect uh biomass. You can use that to for for doing
[1:32:28] estimates not detect but you can do estimates because you need an algorithm um uh of uh to do estimates of biomass
[1:32:37] and um you can also uh look at forest disturbance disturbance as well as uh wetland inundation agriculture agricultural growth through
[1:32:49] time. So to do those so for ecosystem type studies the best product is the G-cuff product. Okay. And and
[1:32:58] deforestation is um pretty straightforward in the sense that the change in the signal in the back scatter signal is pretty significant
[1:33:07] from an area where you have forest you know where you have a high back scatter relatively high back scatter to an area
[1:33:14] where you do not have forest where you have very low back scatter. Okay, Okay, the next question. Question number six.
[1:33:24] Can Niter effectively distinguish between open water, emergent vegetation and invasive aquatic vegetation in complex wetland ecosystems? So, Elban can very well distinguish open
[1:33:39] water because smooth water surfaces produce very low back scatter. Obviously, sometimes there's some sources of confusion. So in the open
[1:33:48] water, for example, if you've got wind, um it's going to look a little rougher. It's not going to look as as as dark. Um
[1:33:57] so sometimes you have some sources of confusion, but L and Sband can very well Cband can very well like distinguish
[1:34:05] calm open water. Um now Lband is less effective at detecting low emergent vegetation. vegetation. um especially if that vegetation is
[1:34:16] sparse or has um a very simple structure and by that I mean you know if it's emergent and it's just a couple
[1:34:23] centimeters remember how I said that the signal interaction depends on the size of the component so LB band is about 24
[1:34:32] cm and if that emergent vegetation is just a couple of centimeters four or five centimeters that it's going to look
[1:34:39] like an open water uh like open water it's not going to detect it, but Sband would be um better suited for detecting
[1:34:49] that emergent vegetation as well as C-band. And then um this person also asked about invasive aquatic vegetation.
[1:34:58] Um hard to respond to that. I'm not entirely sure. You know, if it's underwater, obviously we we we can't it
[1:35:05] the signal is not penetrating through the water. But if it's above the water and that invasive vegetation
[1:35:14] um has enough density and is structurally different than the surrounding vegetation, then you might be able to detect it with radar.
[1:35:27] All right. The qu the next question number seven. And I've been studying the principles of weather radar,
[1:35:33] specifically how we manage signal clutter. Given that NISAR is an L and Sband system, how do the clutter removal
[1:35:40] and ground processing algorithms in NISAR compared to the techniques used in traditional Doppler weather radar networks like Opera? Okay. So
[1:35:52] I I'll elaborate on this response. I I need to consult with some of my colleagues. However, weather radars are
[1:36:01] different than narr. Weather radars operate at much smaller uh wavelengths uh because at that point you're looking
[1:36:09] at the interaction of the radar signal with um with the with water droplets. So you need much much
[1:36:17] uh um the u much smaller wavelengths um and networks radar networks like opera. So opera is a
[1:36:32] a um so opera is a platform. It's an observational products for end users. So these are products
[1:36:45] that are being derived from remote sensing data and these opera products and the next session number two will discuss some of
[1:36:56] the opera products they use they don't use the uh weather radar data they use sentinel one data they use optical data
[1:37:07] and they'll be using narr data to generate these enduser products which are uh related to surface water extent, surface
[1:37:18] disturbance, disturbance, um displacement, vertical land motion. Okay, the next question. How will how will NISAR's dual frequency L and Sband
[1:37:33] SAR observations improve Earth monitoring compared to existing missions? And what applications do you expect to benefit the most?
[1:37:43] Um I think there are many different things. Um so for yeah LB band sees deeper and larger structures. Sband sees
[1:37:53] shallower and finer structures. So combining them will provide a more thorough characterization of an ecosystem. So Lband will work well say
[1:38:03] or works well in areas where you have dense forest. Sband works better in areas where you have less dense forest.
[1:38:10] So when you combine these unique uh capabilities or information content from from these different bands then you can
[1:38:18] have uh a more thorough characterization of your ecosystem and uh what applications do you expect? Um I I think that that's all it's also
[1:38:29] up to the end user like what they want to explore in terms of um the use of the
[1:38:38] complimentary use of L and Sband and even Cband you know we have there's Sentinel one data so how can you um
[1:38:47] exploit the unique information content in each of these different bands to come up with more thorough or generate more
[1:38:55] thorough So uh either land cover maps or um yeah just different sorts of products. I think this is super exciting
[1:39:04] this era of like multi-frequency SAR data. All right we have a short question number nine. Swath range pixel spacing
[1:39:16] and resolution per mode. Wow. Okay. So the swath is 240 kilometers for most areas. Some areas are half swath. the
[1:39:24] pixel spacing that varies between three and and and 10 meters um for the lower level products and that totally depends
[1:39:33] on the acquisition mode. Number 10, I would like to ask how NISAR has proved to be better in flood mapping
[1:39:43] and climate change analysis than the optical remote sensing satellites for example Lancet. Okay. So, NISAR, so we haven't yet
[1:39:56] proved to be better. It will be better um you know because we're we're still working on the calibrated data. So, the
[1:40:05] data that we have generated and released is pre-calibrated. Um so, we really haven't started that period of like really rigorous science
[1:40:15] analysis with uh calibrated data by the community. However, we expect this to be huge uh the data to be huge in terms of
[1:40:24] supporting supporting um flood mapping because of the that unique capability that NISAR has and radar and Elband in penetrating through
[1:40:35] the vegetation canopy and detecting standing water underneath the vegetation. And this is something that just simply cannot be done with optical
[1:40:45] data because optical is really just seeing the top of the canopy. And in areas where you have very dense
[1:40:52] vegetation like in tropical forest um yeah you're not getting a sense of the extent of flooded inund uh inundated
[1:41:01] vegetation. vegetation. So um and given NISAR's high relatively high spatial resolution and the temporal repeats exact temporal repeat every 12
[1:41:12] days but really two observations within those 12 days so every six days um I think this is going to be gamechanging
[1:41:20] really for uh the study of wetland ecosystems looking at wetland inundation dynamics and extent. All right, question number 11.
[1:41:37] Can NISAR data be d downscaled with multi-input neural networks? Yeah, that's a great question. I don't have an answer to that. Um, it might it
[1:41:49] might be. I think this there are many many many things that are worth exploring with the NISAR data and this
[1:41:55] is one definitely worth investigating to see what sort of results uh you can come up with. Okay. So please I didn't understand the
[1:42:10] left side looking and the consequences on the north pole. So because of the the the look geometry
[1:42:19] um and and the orbit. So it's in the the the it's a sunsynchronous uh polar orbit. the
[1:42:33] the North Pole has larger gaps with just the way the orbit and and the fact that it's left looking and so with NISAR
[1:42:45] we've really prioritized the Antarctica observations in Antarctica which in the past uh I think most radar sensors at least openly
[1:42:56] available radar data out there um They're right looking, so they've prioritized observations over the Arctic, but less so over Antarctica. In
[1:43:06] this case, it's the other way around. So, observations from other radar sensors um fill in the Arctic uh while
[1:43:17] NISAR really fills it that gap in Antarctica and the South Pole. All right, the next question. When will NISAR data be
[1:43:29] available in Google Earth Engine? That's that's a really good question. I get that question a lot and the answer is
[1:43:38] that we're not sure if it's going to be available in Google Earth Engine. However, we are discussing this
[1:43:45] possibility and um uh yeah, we we hope in sometime in the future to have an update on whether
[1:43:55] that will be possible or not. Question number 14, which DM is used for the radiometric correction? So, the DM
[1:44:07] that's being used is the Capernicus glow 30 meter DM. Question number 15. How can we use the
[1:44:16] dual pool HH and HV available globally to differentiate and specular doable bounds and volume scattering phase during different crop growth stages?
[1:44:27] So that's that's really that's a a great question. I think there are different ways, right? So HV tends to be much more
[1:44:35] sensitive to the presence of vegetation than HH. And one thing you can do is you can look at time series of HV to look at
[1:44:44] crop growth. Um Um another now if you want to look at the dominant scattering mechanisms. So if
[1:44:55] you want to understand yeah whether within a pixel the dominant scattering mechanism is double bounds or surface
[1:45:04] scattering or specular scattering. Uh you can do quasi polarometric decompositions decompositions and this is a great point. One of the
[1:45:16] things I I do want to do as we move forward into more intermediate type NICAR trainings is to have some
[1:45:23] tutorials showing how to do these decompositions and what sort of algorithms are out there. Okay, question number 16.
[1:45:38] This is a great question. How accurately can NISAR data generate a DM in a mountainous region? So one thing uh to clarify is that NISAR
[1:45:49] has you this interferometric capability. It's a repeat pass interferometry. And so with repeat pass interometry we're we're within a 100 meters of the
[1:46:01] LA of of the same point. So we're very close. We're always, you know, whenever we have that exact repeat, we're very
[1:46:10] close within 100 meters from the last um exact acquisition. And so with repeat pass interferometry, this is much much
[1:46:20] more more suitable for measuring small changes in the surface. These are changes on the order of centimeters, but
[1:46:28] not suitable for generating a DM. um you'll have uh errors on the order of of many many many meters. So yeah you you
[1:46:40] this is this is just to look at small changes in the surface the type of interferometry that NICAR can do and this is something
[1:46:50] that my colleague Eric Fielding will discuss further in session three. Okay, question number 17. How can the
[1:47:04] polarizations polarizations inform on the orientation of an object? So it's you know the the best way to understand
[1:47:14] the the orientation is to uh do an RGB. So if you have two polarizations, do a false color
[1:47:24] composite where you do HH in the red channel, HV in the green channel and then HH in the blue channel just to
[1:47:32] start out with just something very simple and that way you can understand the unique information content in the uh
[1:47:42] in each polarization. So things that are brighter in HH um that means you know you have you have
[1:47:53] uh uh a large you have horizontal component there um than in the VV say for example if you had VV um so so yeah the best way
[1:48:09] is just to do an RGB of your different polarizations questions. Is there documentation? Question 18. Is there documentation for the different
[1:48:20] applications? Yeah, there is. And I'll share a link here, but there was that one slide I showed of the different
[1:48:27] applications that NISAR can address. And there are white papers associated with each of those. And and they're very
[1:48:35] informative and interesting and they're very short, but they explain the capability of NISAR for addressing these different applications.
[1:48:51] Question number 19. How current is the current observation plan? Or rather, how far into the future is it applicable for
[1:48:59] and might the areas of priority acquisitions like the US Midwest change in the next year? So I
[1:49:10] so that's another great question. I believe as mentioned this acquisition plan is going to be revised every six
[1:49:17] years depending on the needs of the uh science team um and and the community uh the the
[1:49:26] science you know the science to address the science objectives and I'll update when it's going to be
[1:49:35] revised again. I believe it's later. Yeah, later this year. But there might be be um if there are priority areas that new
[1:49:46] priority areas identified, say in the US Midwest Midwest where maybe four polarizations would be of great benefit, then that would be
[1:49:57] something definitely to consider uh the next time it's being updated. Question number 20. Can we analyze images
[1:50:13] of first pass and second pass jointly? So I think this question refers to can we analyze descending and images from
[1:50:24] descending and ascending orbits? And that's that's really good. That's a really good question. So the viewing geometry is slightly different.
[1:50:34] between ascending and descending, you know, because we're we're looking toward the side. And so if you have a
[1:50:42] mountainous region, you should never combine ascending and descending uh at least, you know, with the back scatter data. If your area is flat, then
[1:50:53] it should be okay. I personally do not like to combine ascending and descending. I deal with them separately.
[1:51:02] I'll generate a product with you know one stack or the other and then maybe compare or combine
[1:51:11] once the product is generated. All right. Which band is good for soil moisture? So this is an an interesting
[1:51:20] one and and part of the plans for ARS is to have a nice um training on the use of the
[1:51:34] uh soil moisture data product. So there are actually three different algorithms as part of the soil moisture product. Um
[1:51:43] and and the the I think these algorithms are using different polarizations or com combination of the polarizations but the
[1:51:55] best one um will be HH HV is sensitive to is more sensitive to the presence of vegetation and will have less
[1:52:09] penetration through the soil. So, HH will have the the greatest penetration through the soil I think followed by a
[1:52:18] by VB. Okay, the next question. All right, question 22. Considering NISAR's dual frequency capability, how do we plan to combine its deep
[1:52:42] penetrating Lband data with canopy sensitive S-band data to solve a specific measurement challenge for research? That's a great question. As
[1:52:51] mentioned, you know, the data is there. Uh the only level three product that is being generated globally is so moisture.
[1:53:00] So, there's a lot for the community to explore. Um and these are certainly things to explore is that complimentary
[1:53:11] uh nature of these two different bands and how they can be used to solve um something very specific to your
[1:53:21] research. All right, question number 23. How are slope parallel and slope perpendicular motion components projected into ascending NICAR line of
[1:53:43] sight displacement measurements for a westfacing landslide? For an east facing slope with similar downs slope and vertical motion, how would the line of
[1:53:54] sight displacement, magnitude, sign, and sensitivity differ compared to the west facing slope? Okay. So that's that's a
[1:54:02] uh that's a great question. So in the ascending mode, the satellite is looking left. So it's looking towards the west.
[1:54:14] Um Um and so this is so I will respond to this question in in the uh in the document. But as mentioned
[1:54:26] the third session we will dive we'll take a deep dive into the INSAR products and specifically these sorts of
[1:54:36] questions that you're asking about like related to the line of sight of the observation you know what sort of
[1:54:44] movement are we actually looking at with the uh interferoggrams that are generated. generated. Number 24. What are the most promising
[1:54:54] applications of NISAR data for atmospheric science, climate research and natural hazard monitoring in the coming years? I think there are many. So atmospheric
[1:55:10] science as mentioned you know NISAR is is not a a a sensor to do atmospheric science. However, you know, when you
[1:55:18] have measurements like soil moisture that can feed into evapo transpiration models, into weather models. Um, and so it I think yeah, there's a
[1:55:32] lot of stuff that or different sorts of research that the products that can be generated will support. um natural
[1:55:43] hazard monitoring there's a whole um area in you know within applications that addresses disasters um and so looking at for example with
[1:55:56] the INSAR products you can measure um small changes in the land surface so if you see an area for example
[1:56:04] landslides if you're looking an area where you're seeing small movements um through time that might be indic
[1:56:11] indicative of an area that might be at risk for a landslide, right? If if it's in a sloped area. Um if you're seeing
[1:56:22] for example um you can also detect floods floods um which is as mentioned it's ideal um so natural flooding flooded ecosystems
[1:56:35] but uh floods related to disasters and usually you can do assessments of the extent of the flood when these sorts of
[1:56:44] things happens there's a lot of cloud cover so it's very beneficial that um we have a sensor, a radar sensor that can
[1:56:52] see through clouds and provide those assessments. Obviously, those assessments can only be provided as long as there's an an observation.
[1:57:05] But yeah, there are many many natural hazard monitoring uh looking at volcano movements around volcanoes which might
[1:57:13] be indicative of um volcanoes becoming active, movement around tectonic plates and faults which might indicate areas uh
[1:57:24] where there's a higher likelihood of of earthquakes. So there's there's a lot uh that NISAR can support
[1:57:41] how does NISAR's question number 25 so I will answer that one separately in the Google doc um let's carry on to
[1:57:52] question number 26 Six. Usually it says map provides meter cubic meter over cubic meter. But here you show it as a percent. Are these
[1:58:08] comparable? These this percentage represents the amount of soil moisture per volume. What is the maximum depth that NISAR can reach? Okay, so that's a
[1:58:17] great question. Um it is comparable. It's volutric. So um it is the volume of water within a a volume of of soil and
[1:58:30] the maximum depth that NISAR can reach. Um as mentioned at the top um NISAR the the NIAR soil moisture kind of
[1:58:43] represents soil moisture in the top five centimeters. But, you know, actually that's going to totally vary depending
[1:58:49] on many many many many different things. Um, depending on the texture of the soil, depending on the uh the amount of
[1:58:59] water. So, basically the wetter the soil the less the penetration. But um there have been studies from way back showing
[1:59:08] that elban can penetrate soils and this was a study like in the desert somewhere uh where there was no vegetation and
[1:59:17] super dry soils. It showed that the elban signal could penetrate through that dry soil on the order of 1 and a
[1:59:24] half to 2 m. So in the case of of NISAR again it just represents the top five centimeters.
[1:59:39] All right the next question number 27. When you mention interferometry measurements combining NISAR and Centon W data are you describing bystatic
[1:59:50] collections? No this is not bystatic at all. Um this is a a combination of NISAR data which is more contemporaneous you know
[2:00:04] um measurements from Septe pre-calibrated measurements since middle of September 2025 and the Sentinel one data in that example was used to go back
[2:00:17] in time so for that historical uh context Next uh question, how is it possible to combine L and Sbands if their
[2:00:34] resolutions are different? So, you know, the Sband products have the same they're the same level products as as Lband.
[2:00:49] Um, Um, it doesn't matter if the resolutions are slightly different. You can interpolate or extrapolate one to the other. And you
[2:01:00] will be learning a little more about the SBAN data and its characteristics and how to access it. Even though um ISRO
[2:01:11] has not yet u made available the SBAN data, there will be a short video about the BON platform. That's where you can
[2:01:23] access the SBAN data through Israel. and part of that will discuss the characteristics of the Sband data.
[2:01:36] Okay. Question number 29. Does each level have different spatial resolutions? resolutions? Um yes. So the different levels have
[2:01:45] different spatial resolutions and and you know within each level there are different acquisition modes. So for example, level two, you have
[2:02:00] acquisitions over ice and over land and those acquisitions are at different spatial resolutions. Question number 30, what products are built off NISAR right
[2:02:21] now? Are there partnerships with hyperscalers like Google for Google's initiatives initiatives using AI to improve Earth or other AI for good
[2:02:30] initiatives by others? So I will have to I will respond to this question in the document. But right now as mentioned and and as
[2:02:44] you know was the plan for the mission the there's the different level products that's what we're concentrating on and
[2:02:51] the only level three global product is a soil moisture product. I think there are plans or discussions about developing other
[2:03:02] products but um I will respond to that in terms of what those plans are. Okay, so we are three minutes past the
[2:03:13] hour. Um, let me see how many more questions we have. Okay, so we have quite um um quite a bit more number of questions. I
[2:03:30] will respond to all of the questions. It will take me a little bit of time. So, give me about a week um to polish and
[2:03:38] and respond to the questions and this will be posted on the uh on on the page for this training.
[2:03:47] So, uh with that, I want to thank everyone really for for all the enthusiasm and and all of the great
[2:03:55] questions coming in. And remember that there are two more sessions, great sessions. Data access um would be will
[2:04:04] be session number two that will be next Thursday at the same time. And then session number three will be in two
[2:04:10] weeks and that will be on INSAR. So wishing everyone a great day, great weekend and until next week.
