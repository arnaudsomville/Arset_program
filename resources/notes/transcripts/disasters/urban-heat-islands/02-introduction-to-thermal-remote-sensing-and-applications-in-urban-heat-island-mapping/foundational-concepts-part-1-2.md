# Foundational Concepts Part 1/2

`https://www.youtube.com/watch?v=dmSxjSpZetY` · id 292 · 1:46:14 · module 302 — Introduction to Thermal Remote Sensing and Applications in Urban Heat Island Mapping

[00:01] Welcome everyone to our ARSET training series introduction to thermal remote sensing and applications in urban heat island mapping.
[00:11] Today is part one of our training series, foundational concepts of thermal remote sensing. My name is Savannah Cooley.
[00:19] I'm a researcher at NASA Ames Research Center with the Bay Area Environmental Research Institute in Mountain View,
[00:24] California and I'm a trainer with the ARSET Ecological Conservation Team. I'll start with a few quick words about
[00:32] the ARSET program. The NASA Applied Remote Sensing Training or ARSET program provides cost-free training on the use of remote sensing
[00:43] observations, analysis methods and tools. We provide training in several thematic areas including agriculture, climate climate and resilience, disasters, ecological
[00:54] conservation, health and air quality, water resources and wildland fires. ARSET provides trainings both online or in person.
[01:06] Our online trainings are delivered in two formats, live and instructor-led like today's training or asynchronous and self-paced.
[01:16] Like NASA's free and accessible data, all of our trainings are offered at no cost. cost. We try to offer trainings in more than
[01:25] one language whenever we can and we only use no-cost and open-source software and data. data. We offer our trainings at a range of
[01:33] levels so you can find a training series that fits your level of experience and need. need. Please visit us at our website to learn
[01:41] more. more. We'll start today by giving an overview of this training series, introduction to thermal remote sensing, foundational
[01:50] concepts and applications. Here, Here, we are looking at a thermal image of the Occitan Cross in Toulouse, France.
[02:03] In the thermal infrared, we measure both the effect of temperature and emissivity. emissivity. Emissivity relates to the composition of
[02:12] the material. Because the cross is made of bronze and copper, it has a different emissivity and temperature, and therefore a
[02:19] different thermal emission than the surrounding material of the pavement. Thermal infrared radiometer instruments, such as NASA JPL's Airborne
[02:32] Hyperspectral Instrument and NASA JPL's spaceborne ECOSTRESS mission, measure land surface temperature. You'll learn to use some of this data in
[02:40] part two of this training. First and foremost, for part one of the training, you will gain foundational
[02:46] knowledge about the principles and concepts that underpin all thermal remote sensing instruments, as well as learn about some key applications.
[02:56] This training has seven learning objectives. Learning objectives one through five focus on the underlying science of sensor capabilities and general
[03:08] applications, and will be covered in part one today. Learning objectives six and seven are specific to workflows for the use of
[03:17] ECOSTRESS data for urban heat islands, and will be the focus of part two. We have Fundamentals of Remote Sensing
[03:30] as the only prerequisite for this training. training. However, we also have several suggested trainings that we highly encourage
[03:40] participants to take. take. The first is Satellite Remote Sensing for Measuring Urban Heat Islands and Constructing Heat Vulnerability Indices.
[03:51] The next is a brief introduction to the ECOSTRESS mission, which is another ARSET ARSET uh uh training on the ECOSTRESS uh mission
[04:01] website. website. And then finally, there's a number of tutorials available on the Land Processes DAC um that also provide more details on
[04:13] ECOSTRESS and how to access ECOSTRESS data. There are two parts in this training. In part one today, we'll introduce the
[04:22] theoretical background of thermal remote sensing. sensing. Part two will cover hands-on exercises focused on urban heat island
[04:29] applications. applications. The homework opens on the last day of the training on June 2nd. It is due 2
[04:35] weeks later on June 16th, 2026. A certificate of completion will be awarded to participants who attend all
[04:41] live sessions and complete the homework assignment before the given due date. We'll start today by giving an overview
[04:49] of this training series, Introduction to Thermal Remote Sensing: Foundational Concepts and Applications. We have two instructors for part one.
[04:59] My name is Savannah Cooley, and I'm a research scientist in the Biospheric Sciences Branch within the Earth Science
[05:05] Division at NASA Ames Research Center with the Bay Area Environmental Research Institute. Institute. Our other instructor is Glynn Hulley,
[05:14] who is a research scientist in the Earth Science section of NASA Jet Propulsion Laboratory, California Institute of
[05:19] Technology. By the end of part one, participants will be able to identify the fundamental concepts and physical
[05:29] principles of thermal infrared remote sensing, sensing, define the role of emissivity retrievals in ensuring the accuracy of
[05:36] satellite-derived land surface temperature products, distinguish key differences between thermal and optical remote sensing approaches, including emission versus
[05:45] reflection, day versus night capability, and atmospheric window considerations. Identify applications of thermal remote sensing data for ecosystem stewardship,
[05:57] agricultural management, climate adaptation, and urban planning. Finally, compare the characteristics of current and upcoming thermal missions in
[06:06] the context of their suitability to different application use cases. Let's take a moment to consider this knowledge check.
[06:17] This training builds on the concepts from the prerequisite for this training, Fundamentals of Remote Sensing. So, a
[06:23] basic knowledge of remote sensing and satellite and sensor characteristics is assumed. assumed. I'll pause for a few moments to give
[06:31] everyone a chance to think for yourself about which of the options A through D listed below best completes the
[06:39] sentence, Thermal Remote Sensing data can be used for dot dot dot. As you can see, options A, C, and D all
[06:56] describe real remote sensing applications, but they use fundamentally different parts of the electromagnetic spectrum. spectrum. Thermal infrared remote sensing, which
[07:05] is the focus of today's training, works by measuring energy that is emitted from the surface itself, not reflected from
[07:13] the sun. Thermal remote sensing in particular detects emitted radiation at wavelengths in the thermal infrared bands between 8
[07:21] and 14 microns, which we will discuss more in depth in the next section. B is the closest to what we'll be
[07:33] focusing on. By the end of today, you'll be able to explain exactly why B is correct and how
[07:39] it differs from the others. If you have questions during today's training, you can put them in the Q&A
[07:47] box within WebEx at any time. We encourage you to put your questions into the Q&A chat as they arise.
[07:55] The earlier you share your questions in the chat, the more likely it is that we will be able to respond to them in real
[08:01] time during the Q&A session. If there are questions we do not have time to address during the live Q&A
[08:08] session, we will make sure to collect these and post the written answers to the training page within a week after
[08:14] the training. In other words, we will try to address as many questions as we can today. All of these questions and answers will
[08:22] be posted along with the additional questions and written answers to the training page within a week after the
[08:27] training. Let's dive into section one, the theoretical basis of temperature measurements. This diagram shows the full electromagnetic spectrum from long
[08:44] wavelength radio waves on the left to short wavelength gamma rays on the right. right. The visible light that our eyes can see
[08:54] occupies just a small sliver of this spectrum, roughly 0.4 to 0.7 micrometers. micrometers. Most optical remote sensing works in the
[09:04] visible, near infrared, and short wave infrared regions, spanning about 0.4 to 2.5 micrometers. The thermal infrared region extends from
[09:17] approximately 3 to 14 micrometers. Within this, we distinguish two main atmospheric windows, midwave infrared or MWIR, which is the window that spans roughly 3
[09:32] to 5 micrometers. This region has complications from mixed solar reflection and thermal emission during daytime. daytime. The thermal infrared or TIR window spans
[09:43] roughly 8 to 14 micrometers. This is our primary working range for land surface temperature retrieval because it
[09:50] contains purely emitted thermal radiation with no solar contamination. Notice the atmospheric absorption features shown here. Water vapor absorbs strongly throughout
[10:05] much of the infrared. Carbon dioxide has absorption bands around 4.3 and 15 micrometers. Ozone absorbs around 9.6 micrometers,
[10:16] right in the middle of our thermal infrared window, which is why some sensors avoid that specific wavelength.
[10:25] A key point is that thermal infrared remote sensing measures emitted energy, radiation that originates from the surface itself based on its temperature,
[10:35] rather than reflected energy from an external source like the sun. This fundamental difference has major implications for how we acquire,
[10:45] process, and interpret thermal data. Before we discuss how we measure temperature remotely, let's establish what temperature actually means from a
[10:57] physics perspective. Temperature is fundamentally a measure of the average kinetic energy of molecular motion within a substance.
[11:07] Every atom and molecule in matter is in constant motion, vibrating, rotating, and translating. The faster these particles move on
[11:15] average, the higher the temperature. For an ideal gas, the average kinetic energy of molecules is directly proportional to the absolute
[11:25] temperature. temperature. The average kinetic energy equals 3/2 * Boltzmann's constant * temperature. So, here in this equation, KE represents
[11:37] the average kinetic energy, so the mean energy of motion per molecule in joules, measured as 1/2 mv^2.
[11:47] The 3/2 factor represents the three degrees of freedom uh corresponding to the spatial dimensions for movement in a 3D space
[11:57] where where uh it's There's also a contributing half sigma T to each uh uh to energy for each each uh
[12:09] dimension. dimension. K represents the Boltzmann constant, which relates temperature to energy, holding a constant value of 1.38 *
[12:19] 10^-23 10^-23 joules per kelvin. T is absolute temperature, the temperature uh in kelvin. The equation tells us that energy is
[12:30] directly proportional to the temperature in kelvin, meaning that 0 kelvin, which is absolute zero, corresponds to zero
[12:37] kinetic energy. This relationship tells us that temperature is not some abstract property. It's a direct measure of how
[12:46] much energy is stored in the random motions of atoms and molecules. We measure temperature in several scales.
[12:58] scales. Kelvin is the absolute scale, starting at absolute zero, where all molecular motion would theoretically cease. 0 kelvin equals -273.15
[13:09] degrees Celsius. In remote sensing, we typically work in kelvin because the radiation laws require absolute temperature. The key insight here is that temperature
[13:21] reflects the internal thermal energy of matter. An object at 300 kelvin has molecules moving at a certain average
[13:29] speed. An object at 310 Kelvin has molecules moving faster with more kinetic energy. This kinetic energy is what ultimately
[13:40] gets converted into the thermal radiation we measure from space. Now, we arrive at a crucial connection. How does the kinetic energy of molecular
[13:52] motion become electromagnetic that we can detect from space? The answer lies in the behavior of charged particles. Atoms and molecules
[14:03] contain electrons and protons, charged particles. When molecules vibrate, rotate, or collide with each other, these charges are accelerated. And
[14:14] here's the physics. According to Maxwell's equations of electromagnetism, any accelerating charge emits electromagnetic radiation. So, the process works like this. First,
[14:25] molecules at any temperature above absolute zero are in constant random motion, vibrating, rotating, colliding. These motions cause the charged
[14:34] particles within atoms to accelerate. Accelerating charges radiate electromagnetic energy. The hotter the object, the more vigorous the molecular
[14:43] motion, and therefore the more radiation emitted. emitted. This is the fundamental bridge between the thermodynamic definition of
[14:50] temperature, kinetic energy of molecules, and what we measure remotely, electromagnetic radiation. You can think of it this way. Thermal
[15:01] radiation is the electromagnetic exhaust, if you will, of molecular kinetic energy. When we point a thermal sensor at the Earth's surface, we're
[15:11] detecting the electromagnetic signature of all that molecular motion happening at the surface. The intensity and spectral distribution
[15:19] of this radiation follow precise physical laws, the Planck function and Stefan-Boltzmann law, which we'll discuss next. These laws quantify exactly how much
[15:30] kinetic energy converts to radiated energy. energy. This connection is why thermal remote sensing works. By measuring the electromagnetic
[15:39] radiation emitted by a surface, we can infer its temperature because that radiation is a direct consequence of the
[15:46] surface's internal thermal energy. To understand thermal radiation quantitatively, we need to introduce a concept of a black body.
[15:59] A black body is a theoretical ideal, a perfect absorber and perfect emitter of radiation. radiation. A black body has two defining
[16:09] properties. First, it absorbs all incident radiation at all wavelengths. Nothing is reflected or transmitted. We express this as absorptivity, alpha
[16:22] equals one. Second, Second, black bodies emit the maximum possible radiation for its temperature. We express this as emissivity, epsilon
[16:34] equals one. The term black body comes from the fact that an object that absorbs all visible light would appear perfectly black. But,
[16:44] don't let the name confuse you. A black body at high temperature actually glows brightly. brightly. Think of the heating element on an
[16:52] electric stove. As it heats up, it goes from black to red to orange to yellow. In the real world, no material is a
[16:59] perfect black body. Real materials are sometimes called gray bodies. They have emissivity less than one, meaning they
[17:07] emit less radiation than a black body at the same temperature. The closest approximation to a black body is a cavity with a small opening.
[17:18] As the diagram shows, radiation entering the opening bounces around inside and is almost completely absorbed. This is why laboratory black body
[17:27] calibration sources use cavity designs. Why does the black body concept matter in remote sensing? Because the radiation laws we use,
[17:38] Planck's law, Stefan-Boltzmann's law, law, describe black body radiation. To apply these laws to real surfaces, we must account for their emissivity, which
[17:50] tells us how efficiently they emit compared to a black body. Water, for example, has emissivity of around 0.99 in the thermal infrared,
[18:01] very close to a black body. Vegetation is similar, around 0.97 to 0.99. But bare soil might be 0.92 to 0.96, and dry
[18:10] sand can be as low as 0.9. These differences matter for accurate temperature retrieval. Now we come to the fundamental equation
[18:20] of thermal radiation, Planck's radiation law. law. This equation, developed by Max Planck in 1900, describes exactly how much
[18:29] energy a black body emits at each wavelength for a given temperature. The equation is B of lambda and T
[18:40] equals 2 HC squared over lambda to the fifth power times 1 over the quantity E to the power
[18:50] of HC over lambda KT minus 1. Let's break this down and define each term. So, B as a function of lambda and
[19:01] T is the spectral radiance, the power emitted per unit area per unit solid angle per unit wavelength.
[19:11] Its units are watts per meter squared per steradian per micrometer. Lambda is the wavelength in micrometers. T, like we've seen before, is the
[19:25] absolute temperature in Kelvin. H is Planck's constant equal to 6.26 * 10 ^ -34 J s. This is the fundamental quantum of
[19:40] action. action. C is the speed of light, approximately 3 * 10 ^ 8 m/s. K, like we saw before, is Boltzmann's
[19:51] constant. constant. And this constant links temperature to energy at the molecular level, if you remember a few slides back.
[20:00] And e is just the base of the natural logarithm, approximately 2.718. The graph on the slide shows Planck
[20:10] curves for three different temperatures relevant to Earth's surfaces. So, 300 K, 310 K, and 320 K. Roughly 27, 37, and 47° C.
[20:29] Notice several important features. First, higher temperatures produce more radiation at all wavelengths. The curve shifts upward. Second, higher temperatures shift the
[20:45] peak towards shorter wavelengths. We'll quantify this with Wien's law next. Third, in the 8 to 12-micrometer range,
[20:56] the curves are well separated. A 10-K temperature difference produces a clearly measurable radiance difference. This is why this wavelength region is so
[21:06] useful for temperature sensing. Planck's law is the foundation for all thermal remote sensing. When we measure radiance at a specific wavelength, we
[21:18] can invert this equation to solve for temperature temperature if we know the emissivity. Wien's displacement law tells us where a
[21:29] blackbody's emission spectrum peaks at what wavelength the most energy is emitted. emitted. The equation is elegantly simple where
[21:41] we have lambda max, so the maximum wavelength of the peak emission in micrometers, which is equal to
[21:48] the the uh term B divided by T, where B is Wien's displacement constant, equal to 2,898 2,898 micrometer Kelvin.
[22:01] This is a derived constant that comes from finding the maximum of Planck's function. function. The inverse relationship means that
[22:09] hotter objects emit most strongly at shorter wavelengths. This graph visualizes Wien's displacement law by comparing the emission spectra of the Sun
[22:21] versus the Earth. First, notice the logarithmic scales on both axes. This allows us to compare the massive energy output of the Sun with
[22:32] the relatively tiny output of the Earth on a single plot. The core principle here is the equation
[22:41] uh lambda max equals B divided by T where the Sun at around 6,000 Kelvin is incredibly hot
[22:51] so its peak emission is pushed to the left at 0.48 micrometers. This falls squarely in the visible light
[23:00] spectrum, which is why we see sunlight. The Earth at around 300-ish Kelvin is much cooler. So, its peak shifts to the
[23:13] right right uh at about 9.66 micrometers. This is the thermal infrared. This shift explains why we design
[23:25] satellite sensors differently based on the target. We use the 8 to 14 micrometer range for Earth observation
[23:32] because that's where terrestrial surfaces emit the most signal. While Planck's law showed us the shape of the emission curve, the
[23:41] Stefan-Boltzmann law tells us the total area under that curve, curve, the total energy emitted. The relationship is defined by this
[23:53] equation. equation. M equals epsilon sigma T to the fourth. Let's break that down. M is the radiant exitance, which is the
[24:03] total power emitted per unit area, measured in watts per square meter. Epsilon is emissivity, which as we discussed before is the
[24:14] efficiency factor ranging from zero to one. one. For a perfect blackbody, that value would be one. And like we said, real materials are
[24:24] usually less efficient, so we will be diving into this more in the next section. section. And sigma is the Stefan-Boltzmann
[24:33] constant. So, this is a derived constant that roughly equals 5.67 * 10 to the minus eight. And then again, to T is the absolute
[24:47] temperature in Kelvin. The power of T to the fourth is the most critical feature here. Where Where you know, basically shows a massive
[24:59] non-linearity, meaning that energy output doesn't grow with temperature. It grows really, really fast. Look at the graph on the slide here. We
[25:14] are comparing a standard Earth surface temperature of 300 K to a slightly warmer 310 K. This is only a 3.3% increase in
[25:25] temperature. temperature. However, if you look at the energy jump uh from on the Y axis, the output rises from roughly 459
[25:37] to 523 W per square meter. This is a 14% increase in radiated energy. energy. So, why does this matter?
[25:47] This extreme sensitivity has multiple important implications. For remote sensing in general, we can see this as great news in the sense that
[25:57] it means that our thermal sensors are incredibly sensitive. We can detect very subtle differences in surface temperature because the signal changes
[26:07] so dramatically. For climate physics, this fourth dependence relationship with temperature acts as a stabilizing feedback valve. As the Earth warms, it sheds heat much
[26:22] more rapidly into space, which helps prevent runaway heating. For data analysis, it does complicate things in in a certain sense because the
[26:33] relationship isn't linear. Um so, if you have a pixel that contains both hot and cold objects, the hot
[26:42] objects will dominate the signal disproportionately. This is a problem we call subpixel mixing. We apply the Stefan-Boltzmann law to
[26:53] reconcile the difference between a real surface and a perfect blackbody. Kinetic temperature, T kin, is what we
[27:01] can think of as the ground truth, the actual thermal state of the surface determined by molecular motion.
[27:08] But satellite sensors don't measure this directly. Instead, they measure radiance and convert it to brightness temperature, TB, by inverting Planck's
[27:17] law. Brightness temperature is defined as the temperature a perfect blackbody would have to be to emit the radiance we
[27:26] observe. observe. We call the radiometric temperature, T rad, rad, uh which is the temperature uh that integrates brightness
[27:36] temperature across all wavelengths via the Stefan-Boltzmann constant. T rad can be related directly back to connect temperature with the equation here. T
[27:46] rad equals the emissivity uh to the 1/4 power multiplied by kinetic temperature. Since emissivity's less than one for all
[27:57] real surfaces, T rad is less than T kinetic or T kin. The drier and sandier the surface, the
[28:05] larger the gap between them. Let's go into a review question. To convert measured radiance to kinetic temperature, what additional information
[28:18] is needed? I'll pause here and let folks think a little bit on your own. The correct answer is B, surface
[28:30] emissivity. emissivity. Remember, satellite sensors measure radiance and convert it to brightness temperature, which is defined as the
[28:39] temperature a perfect blackbody would have to be to emit the radiance we observe. The problem is that real
[28:45] surfaces aren't perfect blackbodies. They have emissivities less than one. So, if we assume everything has emissivity of one, we'll systematically
[28:55] underestimate surface temperature. The key takeaway is that the lower the emissivity, the larger the gap between what a sensor measures and the surface
[29:03] true the surface's true temperature. This is why accurate emissivity is so critical and why we will spend time
[29:11] delving into the topic in the next section. In section two, we will focus on emissivity. Here, you can see radiance curves of
[29:26] surface emission, surface emission and reflection, and at sensor radiance for a quartz emissivity spectrum. Atmospheric corrections are necessary to
[29:36] isolate surface features, which are obscured by atmospheric attenuation. The red curve shows what the surface is actually emitting. You can see the
[29:47] characteristic quartz emissivity feature as a dip near 8.5 to 9 micrometers. The blue curve adds in the reflected
[30:02] downwelling component and atmospheric attenuation. By the time we get to the black curve, what the sensor actually sees, the
[30:11] quartz spectral feature is still visible, but it is shifted under atmospheric structure. The ozone absorption feature near 9.6
[30:22] micrometers is cutting right through the middle of our TIR window. Water vapor and CO2 are carving out
[30:29] additional structure throughout. This is a core challenge. We have one measurement, at sensor radiance, but we are trying to solve for two unknowns
[30:42] simultaneously, temperature and emissivity. emissivity. The rest of the signal is atmospheric noise we have to characterize and remove
[30:52] before we can even get to the surface. This is precisely why atmospheric correction is not optional and why
[30:59] emissivity retrieval algorithms exist. We need to mathematically untangle all of these contributions to get back to the surface temperature.
[31:12] Emissivity is defined as the ratio of the actual emission to blackbody emission. emission. Emissivity varies with material,
[31:21] roughness, roughness, angle, and wavelength. The top graph illustrates the differences in radiances between a blackbody, which is shown in the solid
[31:31] black line, versus quartz material, which has lower emissivity than a blackbody. As a result, we can see that emissivity
[31:42] of quartz on the lower graph is lower than one across all wavelengths, especially in the 8 to 10
[31:50] micron window. Emissivity for most natural surfaces varies from 0.55 to 0.99. Here are some examples from different
[32:02] surfaces including soils, rocks, sands, and a gray body, which unlike a blackbody, is an imperfect emitter. Though, as you can see compared to these
[32:13] other surfaces, is closer to one across across all wavelengths. There are two main approaches for estimating emissivity.
[32:26] First is split window, and the second is temperature emissivity separation or Tess algorithm retrieval. The split window method used in MODIS
[32:38] data products, for instance, uses the brightness temperature difference between two adjacent thermal channels, typically around 11 and 12
[32:48] micrometers, to simultaneously correct for atmospheric water vapor and estimate surface temperature. It works by assuming a fixed or land
[32:59] cover based emissivity assigned by vegetation class look up tables. This approach is computationally efficient and works well over vegetated
[33:08] surfaces and water, where emissivity is high and relatively stable between around 0.97 to 0.99 typically. However, it is sensitive to errors when
[33:19] the assumed emissivity is not correct, particularly particularly over arid, bare, and geologically complex surfaces. The temperature emissivity separation or
[33:32] TES method, which is used in ASTER and ECOSTRESS data sets, simultaneously retrieves both temperature and spectral emissivity from
[33:45] multiple thermal bands. Rather than assuming emissivity from a look up table, TES uses a semi-empirical relationship based
[33:57] uh on the minimum emissivity and the spectral contrast across bands. If the MM D, which is the minimum
[34:07] maximum difference, um in order to constrain the solution. This yields both a temperature estimate and a full emissivity spectrum,
[34:17] providing much richer information about surface composition and substantially reducing errors over bare and heterogeneous surfaces. Split window
[34:28] errors will occur in system uh, a fashion, anytime that emissivity is incorrectly assigned, leading to systematic biases.
[34:38] The Mauna Loa caldera example here provides a clear illustration. Basaltic lava flows have strongly variable and spectrally complex
[34:48] emissivity in the 8 to 12 micrometer range, dropping below 0.9 in some channels. The 10% emissivity difference shown in
[35:01] the graph arises in the 11 micron channel when comparing the standard level two MODIS split window approach to
[35:09] the TESS algorithm retrieval from the same MODIS input. The split window algorithm retrieved the temperature of 310
[35:21] K, approximately 12 to 14 K cooler than the ASTER TESS, which was at 322 on average, and the MODIS TESS at 324 K,
[35:34] both of which explicitly retrieve emissivity. emissivity. This is not a subtle calibration issue. It's a physically meaningful error
[35:43] driven entirely by the wrong emissivity assumption. assumption. The rule of thumb shown here is that a 1.5%
[35:52] 1.5% emissivity error propagates to roughly 1 K of LST error. This means that over rocky, sandy, and
[36:01] geologically diverse surfaces, split window errors can reach 3 to 10 K for applications such as urban heat
[36:09] island analysis and ecosystem thermal stress, where one or two K differences even are scientifically meaningful. Here are more comparisons between the
[36:24] LST retrievals based on split window emissivity values versus the Tess algorithm emissivity. There is similar accuracy over
[36:34] vegetation and water of about 1 Kelvin. However, However, we see a split window cold bias over bare regions. In this case, ranging from
[36:45] 3 to 5 Kelvin. This is especially important for thermal remote sensing applications of urban heat islands. Cities are highly
[36:53] heterogeneous with asphalt next to grass and other surfaces in small areas. Split window assumes emissivity based on
[37:01] land cover, but Tess calculates it. If the urban land cover map is outdated, the LST will be incorrect.
[37:09] Tess is more robust for rapidly changing urban environments. Now that we've covered the how, the physics of emissivity and temperature,
[37:20] let's look at the what, where, and when. In section three, we survey the landscape of current and upcoming
[37:29] thermal infrared missions and highlight the key application areas that drive this science. This will help you connect those
[37:37] physical equations to the actual data products you'll use in part two. Thermal remote sensing is a diverse
[37:45] field with sensors tailored for different scales. MODIS and ASTER on the Terra platform have provided a global record since
[37:54] 2000. 2000. Landsat offers an incredible historical archive, though it has fewer thermal bands compared to multispectral TIR
[38:04] sensors like ASTER. ECOSTRESS, our focus for this training, is unique because it's on the International Space Station.
[38:13] This allows us to sample the diurnal cycle, measuring heat at different times of day, rather than just once in the
[38:19] morning. morning. The ability to observe temperature at different times of day is advantageous for many applications including the
[38:26] urban heat island focus that our training will delve into in part two. Finally, HyTES is an airborne instrument
[38:34] used for high resolution campaigns providing 1 to 30 m resolution that is invaluable for validating spaceborne data.
[38:43] We are entering a golden age of thermal remote sensing. While ASTER led the way in 1999, we now
[38:50] have TRISHNA which is scheduled to launch in 2026, EAGLE EAGLE TIR which was formerly called SBG, and that this mission has been in
[39:03] reformulation and does not currently have a new launch date, and then in 2028. The trend is moving toward higher
[39:14] spatial resolution around 50 to 60 m and more frequent repeat cycles which will revolutionize how we monitor urban
[39:23] heat and water use. This figure illustrates why sensor band placement matters for emissivity retrieval. retrieval. Each panel compares how well three
[39:35] different sensor configurations can capture the emissivity spectral shape for two geologically distinct surface types, felsic minerals like gypsum on
[39:44] the left, and mafic minerals like pyroxene on the right. The blue shaded region represents the uncertainty envelope for TIR-A, TIR-B,
[39:55] and TIR-C band configurations, while the red line shows laboratory measured emissivity. This is what we would refer to as the ground truth that
[40:05] we're trying to match. Notice that felsic minerals like gypsum have a pronounced emissivity minimum near 8.5 to 9 micrometers.
[40:16] This feature falls at a wavelength where some sensor configurations have poor band coverage leading to missed or
[40:23] smooth spectral structure. Mafic minerals like pyroxene show a different more subdued spectral shape, but the same principle applies. If your
[40:34] sensor bands don't straddle key spectral features, you lose compositional information. The takeaway here is that ASTER, ECOSTRESS, and SPIRIT SBG,
[40:46] EAGLE EAGLE uh TIR, those configurations with their strategic band placement across the 8 through 12 micrometer window
[40:55] do a much better job of capturing these spectral features than coarser configurations. configurations. This has direct implications not just
[41:03] for geology, but for urban surface mapping. Pavement, concrete, and roofing materials all have distinctive spectral emissivity signatures
[41:10] that better placed bands can resolve. Now, let's take a step back and compare thermal remote sensing to optical remote
[41:20] sensing, which is what many of you may be more familiar with. If you are coming from a traditional
[41:28] optical remote sensing background and are most familiar with sensors like Sentinel 2 or Landsat visible and near
[41:35] infrared, infrared, there are three key differences to remember. remember. This table captures an important conceptual distinction in Earth
[41:43] Earth observation. Optical sensors are fundamentally passive receivers of reflected sunlight. They have no signal at night and are
[41:51] limited to daytime observations. Thermal sensors, by contrast, detect energy that the surface itself is generating 24 hours a day, driven purely
[42:02] by the surface's temperature. This is why ECOSTRESS can observe nighttime land surface temperature from the International Space Station. The
[42:11] surface is always emitting. Notice also the difference in what each type tells us about the surface. Optical
[42:19] data is rich in biochemical information, for example, plant pigments, water content, soil organics, while thermal data tells us directly
[42:29] about thermodynamic state. Energy balance, evaporative cooling, heat stress, and surface composition through emissivity. A key practical trade-off
[42:42] is that achieving fine spatial resolution is fundamentally harder in the thermal compared to the optical because the emitted photon flux is much
[42:50] lower than reflected solar. This is why even state-of-the-art missions like ECOSTRESS have 70-m pixels while Sentinel-2 achieves 10 m.
[43:00] This resolution gap is one of the major motivations for the downscaling exercise we'll do in part two of this training.
[43:09] There are many different applications of LST and emissivity in Earth science. For hydrology, we use thermal data to
[43:20] estimate evapotranspiration, or ET, which is very useful for agricultural water management. LST is a key input to land surface
[43:33] models for drought monitoring, soil moisture, and ET estimation. LST exerts control over the partitioning of energy into latent and sensible heat
[43:47] fluxes and provides an indicator of surface warming trends from anthropogenic climate change. Small emissivity errors can lead to
[43:58] massive errors in energy balance models, making accurate TIR retrievals essential for climate projection. For example, an error of 0.1 in the
[44:08] emissivity will result in climate models having errors of up to 7 W/m² in their upward longwave radiation estimates.
[44:17] This is a much larger term than the surface radiative forcing of about 2 to 3 W/m² due to an increase in greenhouse gases.
[44:27] In the field of ecology, we can identify ecosystem thermal stress before plants show visible signs of wilting using
[44:34] satellite-based LST. In tropical forests, existing studies have documented the increased thermal stress of burned forest relative to
[44:43] logged and intact forests even over a decade after the forest fire occurred. For urban heat applications, of course,
[44:52] we use these maps to identify heat vulnerable neighborhoods, which is the key focus of part two. This slide illustrates two compelling
[45:02] applications of long-term LST records for detecting climate signals that would be invisible to shorter observational windows. windows. The map on the left shows MODIS land
[45:14] surface temperature across the northern hemisphere for August 2004. This is a snapshot of what the global thermal
[45:21] landscape looks like at the peak of northern summer. This kind of global coverage, updated every 1 to 2 days, is what makes MODIS
[45:28] such a powerful climate modern monitoring tool. The upper right panel shows a result from Schneider and Hook 2010. Surface
[45:38] water temperature at Lake Tahoe increased at a rate of 0.12 degrees Celsius per year over a roughly
[45:44] two-decade period. This is a lake that sits at over 6,000 ft elevation in the Sierra Nevadas, a system that we might expect to be
[45:54] buffered from rapid warming. The thermal record tells a different story, and it's a story we can only read
[46:00] because we have a consistent well-calibrated space born thermal record going back to the early 1990s. The lower right panel shows a different
[46:10] type of trend analysis from Holley and Doucette 2020. The number of annual average nighttime days exceeding 20° C in in Anaheim,
[46:24] California. California. The trend of .6 additional days per year with an R-squared of .93 is remarkably strong.
[46:33] strong. Nights that stay hot and are a key public health indicator. Nighttime heat prevents the body from recovering from
[46:40] daytime heat stress and this is one of the primary drivers of heat related mortality during extreme events.
[46:48] Together, Together, these two examples show that LST isn't just a snapshot measurement. It can also provide a long-term climate variable.
[46:58] The consistency of the MODIS record across more than two decades is what makes these trend analyses possible.
[47:05] And it's exactly why maintaining continuity in thermal missions matters. LST can be used for deriving many other
[47:13] biophysical properties of the land surface including evapotranspiration ET as mentioned before. ET is the total amount of water going
[47:23] into the atmosphere from the surface evaporation plus transpiration from leaves and canopy interception. Here, we see average evapotranspiration
[47:33] at local time for June through August 2019. 2019. One thing to emphasize again is the importance of overpass time.
[47:42] Due to its sun-synchronous orbit, Landsat observations always occur at 10:30 a.m. before peak heat. In contrast, ECOSTRESS can observe a
[47:51] location at 3:00 p.m. when the heat island is most intense. This justifies why we use ECOSTRESS specifically for this training. So, stay
[47:59] tuned for part two. Now, we will go into a summary for part one, foundational concepts of thermal
[48:10] remote sensing. Let's take a moment to consolidate what we've covered in part one before moving into the Q&A.
[48:18] We've built up from first principles, from what temperature means at the molecular level, through the radiation laws that govern how the internal energy
[48:28] becomes measurable electromagnetic radiation, through the practical complications of emissivity and atmospheric effects, and finally to the missions and
[48:38] applications that put all of this to work. work. The through line in all of this is that
[48:44] thermal remote sensing gives us a direct window into the thermodynamic state of Earth's surface in a way that optical
[48:52] data simply cannot. When we point a thermal sensor at the Los Angeles Basin, we're not measuring reflected sunlight. We're measuring the
[49:00] electromagnetic signature of every parking lot, every park, every neighborhood's thermal energy. Part two will take you from this
[49:09] conceptual foundation into hands-on analysis of exactly that. Part two will go from theory to data, accessing real EcoStress observations,
[49:20] working through quality screening, and running a machine learning workflow to downscale thermal data for fine-scale urban analysis.
[49:29] The case study we'll use is right in the Los Angeles Basin, which you may recognize from the header image in our
[49:37] slides. Remember that the homework opens on the last day of the training on June 2nd. It is due 2 weeks later on June 16th.
[49:49] I would like to acknowledge my fellow colleagues in the ARSET ecological conservation team who have supported the
[49:55] creation of this training. Sativa Cruz, Juan Torres Pérez, and Justin Fain. I would also like to acknowledge the
[50:02] ARSET program staff who made this training possible, including Selwyn Hudson Odoy, Maria Marabito, Suzanne Monthie, and Melanie Follette.
[50:15] We encourage you to check out our website as well as the ARSET YouTube channel linked here in this slide.
[50:25] You can also join our quarterly newsletter to stay up to date on our latest trainings by sending an email
[50:30] with no subject to arset {dash} join at lists.nasa.gov and then follow the instructions sent in the response.
[50:42] The contact information for myself and our other guest instructor Glenn Hully is also here uh if you'd like to email
[50:49] us directly with specific questions about this training. Great. We will now transition to Q&A session. So, let's start with question one.
[51:46] We We have have uh uh Question one uh states, "Something I've always been a bit confused about is what
[51:56] we mean when we talk about light being absorbed. absorbed. Where does it go?" Thank you for this question.
[52:05] So, light that is not transmitted or reflected is absorbed by the material and converted into thermal energy.
[52:15] The object that gets And so, and as a result, object gets hotter as light is absorbed. But, the light's energy
[52:23] doesn't go away. So, in other words, light that is absorbed occurs when the electromagnetic energy is transferred
[52:30] directly into the atoms or molecules of the material itself that it hits. Question two, "Which satellite platform, collection,
[52:42] and spectral bands are being used for deriving LST measurements? Are there LST values sourced directly from a standard product, e.g., MODIS,
[52:52] Landsat, or derived through a custom retrieval methodology?" And perhaps, Glenn, I'll maybe let you speak to this
[53:00] question since um you were your answer was uh the one that that uh we're showing here. >> Sure. Yeah. So, so there are uh several
[53:11] um um NASA satellites flying right now that actually um have both thermal bands and also visible shortwave infrared bands.
[53:20] And probably the most um common or most well-known are the the MODIS series of satellites. So, MODIS Terra and MODIS
[53:27] Aqua. Aqua. And um more recently, we have the the VIIRS follow-on instruments, which are also very similar thermal bands.
[53:36] And so, as soon as we have more than if we have more than more than three or
[53:40] more thermal bands on one of these sensors than we can directly apply the temperature emissivity separation algorithm that Savannah was going over
[53:50] in her slides. So, for example, with the three motors bands, we can apply test and then directly retrieve the the land surface
[53:58] temperature and emissivity from those three thermal bands. So, we don't technically measure, you know, the land surface temperature directly.
[54:08] We measure more of the thermal radiance and from that we derive what the temperature should have been to produce
[54:14] that thermal radiance. Um Um And then another example yeah, I had was Landsat 8 and 9 which in fact have two
[54:22] thermal bands on bands 10 and 11. And so, we can't use the test algorithm in that case to produce the temperature
[54:31] and emissivity. Instead, we use a split window approach and also direct single channel approach to derive the
[54:39] temperature then we use an external emissivity database. And then of course ECOSTRESS was mentioned by Savannah as well in her
[54:48] slides and that in fact has five thermal bands bands and actually gives us the highest temperature accuracy because in general
[54:55] the more thermal bands we have the more the more accurately we can retrieve the emissivity and then also the land
[55:02] surface temperature. >> Great. Thank you, Glenn. Let's go into question three which asks about ECOSTRESS if is the ECOSTRESS data
[55:17] currently accessible? And the short answer is yes. There are a number of different ways to access ECOSTRESS data.
[55:25] So, we'll list a few of the the most common ways here, the biggest ways, and then we will in
[55:31] part two, you know, provide some some examples examples of of of the the data. So, the LAN
[55:39] processes uh distributed active archive center or DAC, uh LP DAC, is the the where the data of of the ECOSTRESS mission are
[55:51] stored. And this um link here provides some uh tutorials that are published by the LP DAC. DAC. And that they are uh great one great
[56:05] place to start for for learning to work with ECOSTRESS data. Um another is the NASA's Earth Data Search,
[56:14] which has, you know, a number of different um uh filters and filtering options and kind of ways of of refining um the the
[56:25] loc- location and temporal um um bounds of of the data that you're interested in using. And so, you can
[56:32] this this uh provides, you know, the link here will link directly to to that Earth Earth Data Search, where you can just
[56:40] type in ECOSTRESS and a number of different ECOSTRESS products will um become available. So, includ- not uh
[56:46] including land surface temperature and emissivity, as well as as other um of the the products that are um derived, like I
[56:53] mentioned, such as evapotranspiration. And then um the subsetting tool known as APPEARS APPEARS is also one way to ob- obtain ECOSTRESS
[57:06] data both over areas, as well as in point sample locations. And there are also um uh a video available demonstrating how
[57:18] to access ECOSTRESS data with APPEARS. So, in part two, I did use APPEARS for the first demo.
[57:26] Um Um and I we went over it very briefly, because there's a more extensive video already available that we will link to
[57:34] that provides kind of a step-by-step demonstration of how to use A-Pears for obtaining EcoStress data. And then finally, Google
[57:44] Earth Engine, which will be the primary focus of part two, the second demo of part two, which
[57:52] Glenn, I don't know if you want to say any words about that right now, but you know, stay tuned for all
[57:57] participants for for next for next time to to do a deeper dive there. But yeah, Glenn, I'll I'll let you maybe just say
[58:02] a few words now just to let folks know how that will work. >> Um you mean part two, right, of the the
[58:11] tutorial? tutorial? >> yeah. Yeah, next week. Mhm. >> Yeah, so um we'll be going through a tutorial on on
[58:19] how to what we call thermal sharp sharpen the data, which means we we take our observed uh land surface temperature on native
[58:28] resolution and then actually sharpen it or downscale it to higher spatial resolutions that are more um similar to
[58:36] what we we get from visible shortwave infrared data and products um which are usually at about the 10 to 30 m
[58:43] scale. So, we'll be going through a demo of actually how to do that within Google Earth Engine.
[58:50] Um and then we'll also go through a demo on how to actually visualize the data within a GIS
[58:57] uh software software platform called QGIS. So, we'll be going through some of the physics of how we do that, the modeling
[59:05] aspects, and and actually step you through step-by-step on on how we can do that within Google Earth Engine.
[59:15] >> Great. So, for now we'll we'll leave we'll leave, you know, question three as is. We We will provide, you know, we will
[59:25] publish this question and answers document with the links um available and you know after this session we will kind of also flush out
[59:33] some of our answers to for them to be a bit more complete and comprehensive. So look out
[59:38] for that and then also stay tuned for for part two where we will provide some live demonstrations of accessing
[59:44] Ecostress data. All right, question four. How are land surface temperature data products validated? So this is a great question
[59:55] and we'll start by talking about ground-based validation approaches and then we'll talk about airborne campaigns which are also used.
[1:00:08] So So from the ground we use thermal radiometers that measure surface leaving radiance so and then that's
[1:00:20] converted to surface temperature and then we can compare those temperatures measured on the ground to the satellite
[1:00:27] value at the exact same time and location. So one example of validation site that is routinely used
[1:00:38] for land surface temperature satellite-based land surface temperature validations is at Lake Tahoe in California, Nevada in the United
[1:00:48] States and that is a site that's been in operation for several decades now and provides and and and the focus on water bodies in
[1:00:59] particular for validation is is useful because water bodies are reliable in that their emissivity is very stable and
[1:01:08] known a priori isolating atmospheric correction accuracy. So that is one example of one such site we will
[1:01:17] link to in the published Q&A document to a website hosted at NASA Jet Propulsion Lab, which provides an
[1:01:27] overview of some of the most commonly used sites that NASA uses for validating satellite-based land surface temperature. And so, that can be a place
[1:01:36] for for folks to to look further into if they want more information about about the validation network that is
[1:01:43] ground-based. ground-based. And then, the other kind of major way that we validate and compare satellite-based land surface temperature with
[1:01:54] is through high-resolution airborne campaigns. So, one instrument which we mentioned today in in the slides is HyTES, which
[1:02:05] Glenn has actually been recently, I think, working this year on on on a on a new the newest validation campaign,
[1:02:13] I believe. And Glenn, if you'd like to speak to I know you said that that work is in the process of publication, but
[1:02:20] maybe at some point we can link that study as well as other pre-existing studies that have been done
[1:02:27] with specifically with HyTES for folks to to learn more about that instrument and see how how those kinds of validations are
[1:02:34] are done. >> Um yeah, so the we have this hyperspectral airborne sensor called HyTES that we fly out of JPL,
[1:02:48] um um and it can be also used indirectly to to validate and um to evaluate the the satellite sensors.
[1:02:57] So, for example, if we fly a HyTES um during or near an overpass of ECOSTRESS, for example, over Los
[1:03:05] Angeles, we can directly match up the HyTES pixels to the ECOSTRESS pixels and upscale them and then use that
[1:03:13] indirectly as a way to uh validate or even calibrate um the the sensor that's that is flying over us at
[1:03:20] that time. Um Um in general, with HyTES actually, we we use it mostly just for for algorithm
[1:03:28] um analysis and um it's a hyperspectral sensor, so we can convolve the the wavelengths to any other sensor's spectral resolution,
[1:03:39] which is a really powerful way to test and validate uh various algorithms. So, it has a um multi-use um type of instrument, and
[1:03:49] it's also used for actually um science on the ground as well. So, so it has has multiple uses.
[1:03:58] >> Thank you. Let's go to question five here. I understand since thermal remote sensing relies on naturally emitted weak
[1:04:09] thermal radiation, the sensors have a coarser resolution to capture thermal energy effectively. Is NASA or uh the European Space Agency working
[1:04:21] towards making thermal imagery sensor resolution even higher than the existing ones? What level of resolution is achievable in the near future?
[1:04:31] Um since urban heat island and local heat hot spot studies require much higher resolution. So, this is an
[1:04:39] exciting question. Um and yes, the short answer is that both NASA and and ESA are actively pushing towards finer
[1:04:47] resolution thermal observations. Um with the next generation of agency missions delivering, you know, roughly 50 to 60-m thermal infrared data within
[1:04:59] uh daily to 3-day revisits. And as Glenn mentioned, mentioned, um airborne thermal instruments provide even finer spatial resolution data,
[1:05:11] um as well as higher spectral resolution, which can be very useful for certain applications um if, you know,
[1:05:19] the 50-ish meter range is um not not uh uh meeting the the needs of a of a given
[1:05:28] application. And And um um the second part to this answer is that longer wavelengths in the thermal
[1:05:37] infrared require larger optical detector elements to collect enough photons, and cryocooling adds mass, power, and cost. Um so, this has
[1:05:48] historically kept thermal infrared sensors or satellites at 60 to 100 m um with the example of ASTER, ECOSTRESS,
[1:05:56] Landsat versus 10 to 30 m, which is uh the visible near-infrared sensors. Is there anything you'd like to add to
[1:06:04] that, Glynn? >> Yeah, in fact, the the ESA uh future sensor called LSTM, they've actually pushed that down to 50-m resolution. So,
[1:06:13] that'll That That should probably be the highest thermal uh resolution data that we'll ever acquire um in space by the end of this decade.
[1:06:22] So, that's pretty exciting. But, of course, it's highly cost-constrained. So, going any um higher than that just really ramps up
[1:06:30] the cost in terms of the size of the telescope needed, the cryocooling, etc. etc. So, it's it's really cost
[1:06:37] cost-driven. cost-driven. >> Yeah. Yeah, so 50 m is is what we have that what what we can is
[1:06:49] the is in the foreseeable future of this decade decade in terms of the spatial resolution. Which kind of emissivity retrieval
[1:06:57] algorithm will these new missions use? So, from my understanding, and I, you know, I I'm not I'm not as familiar with
[1:07:06] with TRISHNA and LSTM, and Glenn, maybe maybe you have been to some of these meetings and can speak to that. But for
[1:07:12] my understanding, the temperature emissivity separation retrievals, which, you know, as Glenn mentioned, requires multi- multiple thermal bands to be able
[1:07:21] to really work, and the more bands we have, the better the estimates are. Um Um And so, I I from my understanding, all
[1:07:29] of these new missions are going to be focused on and able to use TES retrievals or test retrievals rather
[1:07:36] than than relying on the split window approach. Um okay, and then Glenn, I I actually didn't see that you added this part. So,
[1:07:44] would you want to speak to the LSTM and other missions? >> Uh sure. So, um yeah, let me go back up to the question.
[1:07:56] >> Yeah, question six. >> Yeah. >> Maybe maybe Justin actually typed this part, but yeah, go ahead.
[1:08:02] >> Yes, they are other algorithms being explored uh that we actually have been working with um directly with those teams on LSTM and
[1:08:12] Trishna is the other French-Indian mission that will actually be going up within a year, I believe. Um but but we are exploring other
[1:08:20] algorithms that are becoming more modernized, if you will. One is called optimal estimation, and it's a it's a Bayesian theory algorithm
[1:08:30] where, where, given our um existing climatology, if you will, or um um existing measurements of emissivities and temperature over the past 20 years
[1:08:40] that we've already acquired, we can utilize that knowledge that we that existing knowledge that we have of the
[1:08:47] surface and use that in a more of a constrained retrieval, where we can start off with with a first guess, and
[1:08:55] then pivot off of that first guess based on what our measurement is telling us as as And so, some of these are being
[1:09:01] explored, and they're a little bit more stable uh than the existing algorithms. Um Um But, the the word is still out on out on
[1:09:11] whether they'll actually be more accurate because they haven't actually been implemented operationally yet with any current algorithms.
[1:09:22] >> Great. Thank you. Question seven. How do these data sets differ from Landsat? Landsat? Uh Uh data sets which are already available
[1:09:34] from USGS. So, by these data sets, I'm guessing maybe this this question is referring to ECOSTRESS data and how they how it differs from
[1:09:42] Landsat. So, both the spatial resolution and the temporal resolution um and the overpass time are the key
[1:09:54] differences between ECOSTRESS and and Landsat. Um and so, I'll just highlight that slide 36 of the presentation that
[1:10:04] was given today uh provides a you know, a a table where different instruments, including Landsat and ECOSTRESS, are
[1:10:12] compared. Um but, you know, the the brief the brief answer is that Landsat has both uh uh larger
[1:10:22] larger spatial resolution of a 100 m native resolution resolution um per pixel and then also a longer
[1:10:31] repeat time um and then observation location location time of day uh in in the morning, 10:30 a.m. Whereas, ECOSTRESS is has a 70-m
[1:10:44] pixel resolution, has a varying uh temporal repeat pattern based on the orbit of the International Space Station that it's mounted on.
[1:10:55] Um Um and and so, for in any given location it's once every three to five days. Um,
[1:11:03] and and then also the time of day the of an eco stress overpass also um, differs and so those are
[1:11:14] um, I think the key differences. Question eight. How can we validate the thermal infrared remote sensing drive
[1:11:26] land surface temperature data if we don't have in situ data? So, one of the things that we mentioned
[1:11:36] so if you if you don't have a ground based thermal radiometer available to for validation, there are ways to
[1:11:44] compare other land surface temperature uh, results um, over the same time and place. And if that and if those sensors are
[1:11:55] then validated to other ground based uh, networks in other locations then that that is a way of of doing um,
[1:12:04] a a a validation. Um, Um, Right. So, for example you could look at eco stress uh, versus Landsat and how they compare
[1:12:16] and then indirectly validate those Landsat LST from previously validated eco stress measurements. Is there anything you'd like to add uh,
[1:12:24] Glenn to that? >> Uh, no that that's pretty much the only way I can think that you could do it
[1:12:31] indirectly but you you really need direct ground based independent set of measurements to to validate the the
[1:12:38] space born data. >> Mhm. Question nine asks in part two, we are going to learn to downscale native 70
[1:12:47] meter eco stress LST to 10 meter using a random forest model for a neighborhood level level urban heat vulnerability analysis in
[1:12:58] London, do you recommend using the 10 m downscaled product or is it safer to stick to the native 70 m resolution to
[1:13:05] avoid introducing model artifacts when aggregating to neighborhood polygons? And Glenn, I'll let you maybe speak to that. Um
[1:13:16] if I I know I see you've written you've written down an answer here, but maybe yeah, I'll I'll let you speak to that.
[1:13:22] >> Yeah. Um well, this will really be illuminated in the tutorial that I'm going to give on the the sharpening
[1:13:29] tutorial because what you can see at 10 m versus 70 m is uh just an incredible a lot
[1:13:37] amount of detail. For example, you can see uh what we call street level temperatures. So, you can see um you
[1:13:45] know, down to the scale of a rooftop or a a small street, you can see a difference in
[1:13:51] um temperatures of a stand of trees on a a street, for example. At 70 m, that's that's a lot harder to discriminate. You
[1:13:59] can kind of see blobs of cool and and warm temperatures in the urban environment. Um but again, you know,
[1:14:07] that the one thing to keep in mind again is that we're modeling that 10 m. We're not
[1:14:12] directly observing it from space or from aerial data. So, uh there is an inherent uncertainty uncertainty associated with that, you know, 10 m
[1:14:22] downscaling or thermal sharpening. Um so, it really depends on your application. If you want if you need temperatures at a certain
[1:14:33] level of accuracy, I would probably stick with the 70 m data. If you want to you know, better discern the temperature
[1:14:41] of one rooftop from another, um you know, then I'd go with the 10 m scale resolution. resolution. Um
[1:14:48] Um But we do provide in in the thermal sharpening, we actually do provide an output of the
[1:14:54] accuracy estimate of the thermal sharpened data, and then that's included within the Google Earth Engine package. Um
[1:15:03] Um And well Oh, yeah. The The other thing here is that we're actually not technically making up temperatures
[1:15:09] because if if we apply this radiometric normalization that we call it where if you averaged up the individual 10-m or
[1:15:16] 20- and 30-m components um to the original 70-m data, you would still end up with the same temperature.
[1:15:23] So, we're not modifying that original original retrieved temperature, etc. Thanks. >> Thank you. Yeah. Yeah. So, let's And And, you know, after part
[1:15:45] two, I think there might there will be opportunity for more discussion, you know, along along this these lines of of questions
[1:15:52] about, you know, particular applications and then thinking about um yeah, considerations of um accuracy and and suitability for for
[1:16:04] particular applications. So, thanks for that question, and we'll move to question 10. How can we select the appropriate remote
[1:16:11] sensing data for our LST case studies considering the trade-off between temporal and spatial resolution within complex heterogeneous urban cities?
[1:16:24] And yeah, I think that that really does come down to what your application requires in terms of spatial resolution
[1:16:33] versus temporal resolution, and then also, as I mentioned, you know, time of day, right? So, if you want observations
[1:16:42] at night, for example, EcoStress, you know, as of now really is is the sensor that will allow for
[1:16:50] um um delivering that um uh for various times of of of day. Um Right. Yeah. And then MODIS on the other
[1:17:02] hand, which provides a daily repeat, which is more a higher repeat uh than EcoStress, but has comes at a cost of lower spatial
[1:17:12] resolution of 1 km. So, it varies on what bit depending on what you want to prioritize. Question 11.
[1:17:23] Can land surface temperature be used on a small scale to see underground structures, for example, due to the
[1:17:30] differences in temperature between normal soil and soil that has stone or marble under it near the surface?
[1:17:40] Um Um right. So, if if there are different temperatures that that you know, are due to the different materials,
[1:17:54] different substrate, then that will be detected by the sensor. Um but right, you will you won't be able
[1:18:01] to necessarily uh determine that there's a structure there. It won't tell you what you know, what is causing that difference in
[1:18:10] temperature, but if there is a gradient in temperature, then that gradient will be detected within um you know, the
[1:18:16] accuracy that we have of of of the sensor. So, that's the short answer to that, I think.
[1:18:24] think. Question 12. Oh, yeah, did you want to add? add? >> Uh yeah, just just a quick example would
[1:18:29] be be um um if you have a thicker slab of concrete or asphalt on a road, we could tell the
[1:18:36] difference in the temperature um because the the thicker slab would have a higher thermal mass and higher
[1:18:43] heat storage and store the temperatures. Just store that energy over longer time periods. periods. And so, for example, at the night night
[1:18:51] time data, we'd be able to see that as an increased temperature of that thicker slab. And so, you know, while we
[1:18:58] wouldn't know exactly, you know, what the reason is, we could infer that well, this area of the
[1:19:04] concrete or asphalt is lot lot likely thicker than than the other areas, for example. >> Yeah. Great. Let's go to question 12.
[1:19:22] Where Where uh a par- a participant asks, "Could you repeat the example you mentioned regarding the extent to which
[1:19:31] incorrect emissivity values can affect the resulting LST value?" So, So, the example we gave was the Mauna Loa caldera,
[1:19:43] which which uh uh in which features basaltic lava flows that have variable and spectrally complex emissivities in the 8 to 12
[1:19:55] magneto uh window. So, some of In in some of these bands, that emissivity goes below 0.9. The graph, which we will we will refer
[1:20:09] to the specific slide um number that that showed this, but there was a 10% emissivity difference in that graph um
[1:20:16] in the 11 micron band when comparing the standard level two MODIS split window approach to the temperature and emissivity the the test
[1:20:27] algorithm uh approach from that same MODIS input. So, the split window algorithm algorithm retrieved a temperature of 310 K, and
[1:20:40] and that was approximately um 14 degrees or 14 K cooler than the um TES algorithm. And so, the the
[1:20:53] apples-to-apples comparison here is just is the the MODIS input with the TES algorithm versus the MODIS input with
[1:20:59] the split window algorithm. The graph also showed the ASTER uh TES algorithm. Um but, if you're really if you're
[1:21:08] wanting to just think about kind of the comparison between the two algorithms, that's those are the two uh that you
[1:21:13] would want to compare. Um So, So, the the rule of thumb also in the following slide that we showed was
[1:21:24] basically just saying that that there's about a 1.5% emissivity error that propagates to roughly 1 K of LST error. So, that means
[1:21:36] that over rocky, sandy, and geologically diverse surfaces, split window errors can reach 3 to 10 K. For
[1:21:44] For applications such as urban heat island analysis and ecosystem thermal stress, where you know, even 1 to 2 K
[1:21:51] differences are meaningful, this, you know, is is a really important um consideration is what is the emissivity
[1:21:58] um retrieval algorithm that's being used, and what does that mean in terms of the error that's propagated into the
[1:22:05] land surface temperature product. Great. Let's move into question 13. How well does the ECOSTRESS temperature-emissivity separation algorithm perform over highly
[1:22:19] heterogeneous complex urban materials? So, Glenn, would you like to get started with that? >> Um sure. It's It's actually a good
[1:22:29] question because it's something that we're still working on to improve. Um, and it's it gets into a little bit of the uh
[1:22:37] nitty-gritty of of what the algorithm actually does. So, it's a little tough to explain in words without actually
[1:22:43] looking at the ATBD or or other documents, but um the the test algorithm works on um using a what we call an emissivity
[1:22:52] calibration curve that is based on a set of lab spectra that we measure in the lab of various types of natural and also
[1:22:59] some man-made surfaces. And based on that calibration curve, we can use that as our constraint to separate the temperature and emissivity
[1:23:07] components from from the thermal measurement. measurement. Um, now the problem is that over urban um areas that, you know, consist of
[1:23:16] mostly man-made uh materials, think of uh metals, uh different types of brick, asphalt, etc. etc. Um, and so the calibration curve is not
[1:23:29] directly optimized for those man-made materials. And so, we've been talking in the future of of maybe deriving a calibration curve
[1:23:37] that is optimized um only for urban um materials. And we'd apply only that calibration curve over cities
[1:23:44] and and apply the the regular calibration curve over natural uh materials, but the the the issue that arises there is
[1:23:53] that you start developing artifacts where now you have to classify an area as urban first and and then apply that
[1:24:01] part of the curve and then, you know, apply a different curve to natural materials. So, you could end up with
[1:24:07] some strange artifacts coming through in the in the retrievals, but it's definitely something that that we're working on on to improve.
[1:24:19] >> Thank you. Question 14 is and and actually before you move on I will also just mention
[1:24:26] that we will link to what Glenn Glenn mentioned the ATBD that's the algorithm theoretical basis document um which describes you know the
[1:24:36] algorithms that are are used um and so that that will be linked to in the question for for further reading and
[1:24:44] it's it's also linked in our resources um slide for for this um training. Question 14 asks, is there a
[1:24:53] straightforward way to determine the smallest temperature change that can be detected across an urban environment with known emissivity? So I'll start and
[1:25:04] then maybe Glenn if there's anything you want to add we can we can work work at that question that that way because I
[1:25:09] think this is a really interesting question and from my understanding the kind of floor of this is set by the
[1:25:16] sensors sensors noise uh equivalent delta temperature. So for ECOSTRESS that's under .3 Kelvin per pixel um with emissivity
[1:25:30] known and atmospheric correction handled we can you know detect single pixel pixel temperature differences of you know about .3 or .5 Kelvin and I'll have
[1:25:40] to verify the exact number of that but it's you know less than 1 Kelvin um and then you can do meaningfully better
[1:25:51] through spatial or temporal averaging. So that's um Glenn I don't know if there's more that you'd want to
[1:26:00] add to that. >> Uh you pretty much got it right. It it it's it all depends on the actual accuracy of the the
[1:26:09] measurement itself right which is constrained by both the radiometric noise of the the sensor and then the
[1:26:17] actual retrieval algorithm error, which is the the model that takes us from the thermal measurement down to the Landsat
[1:26:25] temperature. So, if you combine all those errors together, that is your precision of your your your measurement.
[1:26:32] So, typically we strive for a an accuracy of of 1° or less. less. Um often it's it's much higher than
[1:26:40] that. You know, we can get tenths of a degree accuracy, but on average, you know, in general we want a degree or
[1:26:47] less. And so, if you have two pixels next to each other, maybe with very similar type of material, and
[1:26:55] but they they vary within that 1° level, then it would be very difficult for us to determine those differences.
[1:27:04] Um so, it really all depends on on the actual accuracy of of of the measurement at any given time.
[1:27:11] And we actually do provide an uncertainty estimate and this is a pixel-by-pixel based uncertainty estimate of of our
[1:27:20] retrievals for the ECOSTRESS products or the Landsat products. And given that uncertainty estimate, you you can you know, convince yourself either way
[1:27:30] of whether you believe uh the accuracy of of of any given pixel. >> Yeah. Thank you. Question 15 asks, would land LST
[1:27:45] be be uh kinetic temperature or radiometric temperature? And so, let's go back to, you know, the earlier slides of of this
[1:27:56] of this training where we learned that true kinetic temperature is is is the, you know, is the actual
[1:28:09] temperature of the surface, right? And so, thermal instruments that we use don't measure this directly, but um LST
[1:28:22] is intended to recover kinetic temperature. Um by applying the emissivity correction that converts the radiometric measurement into the physical
[1:28:33] temperature. temperature. Um so, conceptually, that retrieval pipeline would be the measured radiance to the brightness temperature temperature to the radiometric temperature, which is
[1:28:47] the integrated, you know, multi-band measurement, measurement, and then the kinetic temperature, which is the emissivity corrected LST product
[1:28:57] that we know and that we will be working with in part two of this training. Um yeah, so I think I'll
[1:29:09] just for the interest of time move on, but we will we will flush out some of these answers in more detail and kind of
[1:29:15] link back to specific slides where we're where we went over this material. Question 16 asks, is there a way to
[1:29:25] distinguish between land surface temperature temperature and the temperature of the air near the land surface? Great. Great. So,
[1:29:41] yes, we in fact in the Lake Tahoe site that I mentioned, we actually have instruments, you know, designed designed
[1:29:50] to do this where we have a radiometer measuring the surface the surface of the of the water, the skin temperature, um
[1:30:00] whereas we also have temperature probes at various depths of the water measuring um um bulk temperature. And then there's also a an air
[1:30:13] temperature measure that we that we use um um to to that we include in the in the validation
[1:30:22] um um site. site. And is there a way to distinguish Glenn, maybe do you want to maybe add
[1:30:29] that? I guess I'm not really sure about the distinguishing part between land surface temperature and the air.
[1:30:37] >> I mean we can measure the the differences between the two and they are linked linked um
[1:30:42] um but they can also differ because of the various different types of circumstances. For example, if there's
[1:30:50] wind blowing or um you're in direct sunlight versus in the shade, the two types of temperatures can be quite
[1:30:58] different. Um also think of on a on a really hot day um the surface is going to heat up a lot
[1:31:05] quicker than than the air temperature above it. And that's mostly due to the the different thermal mass of the air
[1:31:12] versus the ground. Um and this is actually one of the um um problems that that we deal with a lot is
[1:31:20] is how do we derive the the air temperature, which is you know, typically what we feel as humans walking
[1:31:27] around and which is what city planners and and and um um um decision makers really want to know that
[1:31:35] that value more than just the skin surface temperature. And so we we actually spend a lot of time modeling
[1:31:41] the air temperature from the land surface temperature. And we can do that um um using empirical models or land surface
[1:31:49] models. models. Um and it's it's typically has a pretty high uncertainty because it's it's a difficult um it's it's a difficult
[1:31:57] modeling exercise. Think of in an urban environment, there's a lot of different things going on. Um but um that that in
[1:32:05] a sense is the temperature that we really want to get to um in in terms of urban studies
[1:32:10] is the air temperature. >> Mhm. Mhm. Yeah, and maybe we could actually just think about an example
[1:32:16] here in an urban setting for ins- for instance, a parking lot that might show for instance 60° C
[1:32:26] LST LST while the air temperature, you know, 2 m above might be as low as 35° C
[1:32:37] and you know, both of these are correct and they're just measuring different things where the LST is the
[1:32:44] uh you know, dependent on the surface property itself, the albedo, the heat capacity, the moisture and will vary,
[1:32:51] you know, a lot across land cover types within a city and that's something that we'll look into, you know, in part two
[1:32:57] in the demos and um we'll look at at green spaces, specifically green spaces that have access to water or so you
[1:33:05] know, one of them is actually around a a reservoir area and the other is uh a park nature preserve that has access
[1:33:14] to to a sufficient water that the vegetation's able to basically stay cool with with evaporative cooling um
[1:33:22] whereas, you know, the air temperature would integrate heat fluxes from the surface over the surrounding boundary layer and then that's going to be kind
[1:33:32] of a more spatially smooth by atmospheric mixing than the LST um itself. Hopefully, that's that helps um
[1:33:45] and I I think maybe after this session we can also kind of maybe provide a few examples from the literature that that
[1:33:53] look into kind of that problem that Glenn was mentioning about how to kind of model air temperature. I think that
[1:33:59] might be nice for us to to provide a few a couple examples of that to give some
[1:34:04] military illustration. All right. But yeah, great question. Let's go into question 17. Given the known uncertainties in
[1:34:17] retrieving near surface temperature, humidity, and radiative fluxes from satellite data, especially due to surface emissivity, selective gas
[1:34:26] absorption, and cloud radiation interactions, what approaches are NASA missions exploring to better capture the combined human relevant exposure burden
[1:34:37] in dense environments? So, So, I would say this is sounds like kind of an active large area of
[1:34:54] multiple uh maybe sub questions or sub problems within this bigger question and and um um So, NASA's strategy combines
[1:35:08] multi-mission Earth observations, right? So, there's an integration with reanalysis and in situ networks, and physiologically relevant indices that go
[1:35:18] beyond temperature alone. Um so, I would say the general direction is toward actionable heat exposure products that
[1:35:27] integrate temperature, humidity, radiation, air quality, you know, all of these various factors um at urban relevant spatial scales.
[1:35:36] Um and I would say that integration and consideration of these different um these different factors is is something
[1:35:48] that is really important and and something that we I would say have a lot of opportunity to hone and refine and
[1:35:55] perhaps in future trainings could could go more into cuz certainly for this training we're really just focused on
[1:36:01] land surface temperature itself. That's kind of the core measurement that we're considering. considering. Um Um but I appreciate the you know the the
[1:36:11] inquiry and and the invitation and I I'm not sure Glenn if you might have anything to add at this time. Um but
[1:36:17] this is this is a question that I'd like to maybe circle back to also and um maybe uh yeah think think more about it
[1:36:24] and once we publish the Q&A document we can update what we provide here. But Glenn do you have anything off off the
[1:36:29] cuff to say about that? >> Um I'm yeah I mean it's a pretty loaded question but um a good one.
[1:36:37] Um Um there there are no single mass emissions that are directly you know aimed at trying to
[1:36:44] answer you know what is the human relevant exposure burden in urban environments but and specifically um but
[1:36:54] but there are different groups and different research groups that are coming up with different kinds of models that are able
[1:37:01] to explain what that human relevant temperature is you know in urban environments for example and one of
[1:37:08] those is the UTCI or the urban thermal comfort index. Um which has been um published in the in the literature um in
[1:37:17] several several different research groups right now but it combines different variables that explain the physiological temperature that we experience as humans. So um the
[1:37:28] air temperature uh combines humidity of course uh direct thermal radiation, wind speed, and various other other factors. And you
[1:37:38] know all of those inputs are you know a lot of those are provided by by NASA through different missions. And so I
[1:37:45] guess the NASA's mission yeah would be to provide the highest resolution uh input data that we possibly can um
[1:37:53] that are used in these models. >> Yeah. Thank you. Question 18 asks, "Could you please explain the physics behind the
[1:38:04] difference between split window and uh and the test algorithm?" So, maybe I'll provide a a brief summary
[1:38:14] and Glenn, if you want to do a deeper dive, um that's that's great. Um so, but basically the the fundamental difference
[1:38:23] is that the difference is in what each algorithm is assuming on the onset. So, the split window algorithm assumes an emissivity
[1:38:32] is known based on a land cover classification lookup table. And it uses the brightness temperature difference between two channels to
[1:38:44] correct for atmospheric water vapor. Meanwhile, the test algorithm assumes nothing about emissivity to start with and uses at least three or more channels
[1:38:56] thermal channels um plus an empirical spectral constraint to solve for the emissivity and temperature at at the same time.
[1:39:05] And Glenn, if you want to provide a more in-depth explanation, um that would be great. We can also circle back to it in
[1:39:12] in our in our write-up of this final document before we publish it to the website. We can do we can add in the
[1:39:18] details. So, up to you on how how in-depth you want to go for for now. >> Yeah, I mean, you could have uh an
[1:39:25] entire seminar just on this very uh topic. So, I won't go into too much too much more depth than than you just
[1:39:34] um explained, but uh split window algorithms generally are employed with a sensor that has two thermal bands. And
[1:39:41] so, the the two bands are used um two different parts of the thermal window to um account for the atmospheric absorption
[1:39:50] between those two bands and then use a assumed emissivity to derive the temperature, whereas the TES algorithm,
[1:39:56] as you said, is able to do that all in one go. We're able to both retrieve the
[1:40:00] temperature and the emissivity. Um but it requires three or more bands, and that is the constraint that is
[1:40:07] needed to apply the the TES algorithm. >> Great. Thanks. And we'll link to um again the algorithm theoretical basis document um
[1:40:19] and and other documents that are relevant for for kind of a deeper dive into understanding how these algorithms
[1:40:26] work. work. Question 19, will we need QGIS, Google Earth Engine, or R/RStudio for part two? The answer is yes, if you if you would
[1:40:37] like to follow along with the with the two demos that will be that will happen in part two, participants will need um
[1:40:44] QGIS, Google Earth Engine, and R/RStudio for part two. So all of these are um freely available, and between now and
[1:40:55] and next week in part two, I highly encourage participants who maybe uh don't have those set up to to get those
[1:41:01] set up if you if you would like to follow along with the demos. Question 20, given that diseases such as Ebola
[1:41:09] and the virus Andes, COVID-19, and Nipah are strongly influenced by near surface temperature, humidity, aerosol load, and
[1:41:17] air quality interactions, what steps are NASA emissions taking to improve retrievals of these human-relevant ground-level exposure parameters,
[1:41:27] especially where uncertainties in emissivity, selective gas absorption, and cloud radiation interactions limit current satellite products? Yes, I think this is maybe a
[1:41:39] a similar kind of big picture question that that we were that we spoke to earlier earlier where, you know, all of these I would
[1:41:48] say say you know, retrievals of of these different variables that that we know you know, matter in
[1:41:57] in in disease outbreaks and you know, that is one very important application of NASA data. So so this this training in particular
[1:42:10] is focused on surface temperature, right? There are other trainings that are set provides that look into other
[1:42:20] data products that you know, for instance, our set has an entire entire thematic area focused on air quality.
[1:42:28] And so I would suggest to the person who asked this question to start by looking at these different thematic areas and
[1:42:38] that's how you know, this information is currently organized where we systematically go through these different thematic areas and provide
[1:42:46] trainings trainings to address these different different factors that are are that together influence complex systems such as disease outbreak.
[1:43:00] So thank you for the work that you're doing doing on this important application and I'm glad to hear that that land surface
[1:43:07] temperature, you know, is is one of the data products that you're currently using using in in your work and that you're
[1:43:17] invested in wanting to continually improve those those estimates. So that's that's that's great to hear and thank you for for emphasizing that.
[1:43:33] Um is is there anything that you'd like to add to this question? >> Um no, that that was a a good answer. I
[1:43:41] mean, the one thing to keep in mind is that NASA cannot produce high-resolution near-surface near-surface uh temperature and humidity right now
[1:43:51] directly from satellite data. These are all um sort of model-derived variables that are usually provided from numerical
[1:43:59] weather models and so forth. And it's really difficult to get those values, you know, down at the sub-kilometer
[1:44:05] scale right now just because of the difficulty in retrieving near-surface air temperature and, you know, humidity measurements.
[1:44:13] measurements. So, um I would say that it's it's more than more of the modeling communities either for the NASA GMAO or
[1:44:21] UK Met Office that are striving to get um to get us down to that sort of very
[1:44:28] fine scale uh surface temperature-humidity measurements to be able to answer some of those questions. >> Yeah. Thank you. So, question 21 will be the
[1:44:40] last question that we will answer live. The remaining questions that we didn't have time to get to live will be
[1:44:47] answered offline and we'll share we will share this Q&A document on our training page page um um within 1 week of the training.
[1:44:57] So, question 21 asks is ECOSTRESS data available globally? How do we access this data? So, for the data access
[1:45:05] question, I've pasted, you know, some of the uh the links that we included in the earlier question. And um
[1:45:13] the ECO and for the first part of the question of of coverage, ECOSTRESS is near global, um but due to
[1:45:21] the orbit of the International Space Station, it includes plus or minus 51.6 degrees uh uh latitude. So, basically, the the
[1:45:33] poles are not included uh are not covered by by ECOSTRESS. Um so, with that, we will conclude
[1:45:43] today's live Q&A session. Thank you all so much for your participation and engagement, and we look forward to
[1:45:51] seeing you next week at part two of our training series. Thank you all, and we'll see you next
[1:46:04] week.
