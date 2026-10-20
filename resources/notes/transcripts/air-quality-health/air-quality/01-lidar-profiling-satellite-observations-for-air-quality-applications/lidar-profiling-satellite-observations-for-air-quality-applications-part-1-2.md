# LiDAR Profiling Satellite Observations for Air Quality Applications, Part 1/2

`https://www.youtube.com/watch?v=vJV50ThHc-U` · id 60 · 1:07:53 · module 22 — Lidar Profiling Satellite Observations for Air Quality Applications

[00:01] All right, hello everyone. Uh welcome to our ARSET training series lidar profiling satellite observations for air quality applications.
[00:09] My name's Ed Nowatnick, and I'm a researcher at NASA Goddard Space Flight Center Center outside of Washington, D.C.
[00:18] So, before we begin today's training, I'll say a few words about the ARSET program. The NASA Applied Remote Sensing Training
[00:27] or ARSET program provides cost-free training on the use of remote sensing observations, analysis methods, and tools. tools. We provide training in several thematic
[00:37] areas, arc- agriculture, climate and resilience, disasters, eco conservation, and wildfires, health and air quality, and water resources.
[00:52] ARSET provides both online and in-person trainings. trainings. Our online trainings can be instructor-led, like today's training, or asynchronous and self-paced.
[01:02] Whether in-person or online, all of our trainings are offered at no cost. We try to offer trainings in more than
[01:08] one language whenever we can, and our trainings only use no-cost and open-source software and data. It's worth noting that all NASA data are
[01:18] available at no cost, and we try to offer trainings at a range of levels so you can find training that
[01:24] fits your level of experience and need. Please visit the ARSET website, which I'll show at the end here, to learn
[01:31] more. Okay, so getting into uh an overview of what we'll be talking about today. Okay, so here I'm going to be providing
[01:44] a video on some of the capabilities that highlight lidar remote sensing. And And here I'm going to cut to
[01:56] a loop of some of the surface observations that provide ground-based measurements of surface air quality. And you can see that they're pretty
[02:02] sparsely dispersed across the continental US in this case. These are all provided at the ground. And the advantage of lidar remote
[02:11] sensing is you get full column measurements that are vertically resolved resolved that provide air quality measurements all the way up through the column of the
[02:19] measurement. So, for today, we're going to be focusing on the following training learning objectives. And at the end of this training,
[02:30] we hope you'll be able to recognize the capabilities of lidar active remote sensing in measuring vertical profiles
[02:36] of aerosols and clouds for informing air quality applications. Interpret information within lidar curtains to discern cloud phase,
[02:45] aerosol type, and aerosol plume altitude for a given scene. Recognize the strengths and limitations of lidar observations.
[02:54] And find lidar images and data for a particular time period and location using NASA Earth data and mission
[03:00] websites. Prerequisites for this course are fundamentals of remote sensing. All right, so this is the training outline for our two-part training. Uh
[03:13] part one today on June 4th is introduction to lidar measurements and missions. And next week on June 11th, we will be
[03:21] doing part two, uh interpreting lidar observations and accessing lidar data. Uh following the completion of part two,
[03:29] we will be handing out homework uh that hopefully captures all of the topics and skill sets we've covered in this
[03:36] training. And that'll be uh due on June 25th. And that homework will be posted on our training webpage.
[03:43] Uh following the completion of the sessions and the homework, we will be providing a certificate of completion
[03:49] uh uh, those who have completed everything. All right, so let's get into part one, lidar profile satellite observations for air quality
[04:01] applications. applications. All right, so for part one, I'll be your trainer. Again, my name is Ed Nowatnick,
[04:07] and again, I'm a research physical scientist at NASA Goddard Space Flight Center. Okay, so the objectives for part one are
[04:15] to recognize the capabilities of lidar active remote sensing and measuring vertical profiles of aerosols and clouds for informing air quality applications.
[04:25] To recognize the strengths and limitations of lidar observations. And to identify past and current available lidar missions and their
[04:32] characteristics. So before we get started, we'll do a review of our prior knowledge. We're going to understand the differences
[04:41] between active and passive remote sensing. sensing. Need to have an understanding of satellite orbit, swaths, and revisit
[04:47] time. time. And also aerosol definition and importance for air quality. So pro- procedures for how to ask
[04:59] questions. If you have questions during the training, please put your questions in the questions questions box, and we
[05:04] will address them at the end of the webinar. webinar. Feel free to enter your questions as we
[05:08] go along. We will try to get to all the questions during the Q&A session that follows the
[05:13] webinar. webinar. The remainder of the questions that will be answered in the Q&A document, which we posted to the training website about
[05:20] a week after the training. Okay, so now we're going to get into our first section on lidar for atmospheric
[05:31] sciences. sciences. I'll be providing an overview of the basics of lidar remote sensing. And hopefully build an understanding of
[05:39] how these instruments work. So first, just a quick reminder on different approaches for how we measure the atmosphere.
[05:50] Often we talk about in situ measurements. measurements. And this literally means you're taking a measurement of your ambient conditions,
[05:57] where you are in the atmosphere. So, great examples of these types of instruments are thermometers, um your standard meteorological
[06:05] instruments, as well as dropsondes, which I'm depicting um um here with the little weather balloon that take measurements of temperature
[06:13] and pressure as they fall through the atmosphere. atmosphere. Now, we can't always measure everywhere in the Earth that we desire. So, often
[06:20] we use remote sensing techniques. And so, these are techniques for measuring the atmosphere at distances from where we are targeting.
[06:30] And so, ground-based radars, which I'm showing here, are a great example of this, this, as well as satellites, which can orbit
[06:37] the Earth uh to provide measurements at different times of day and locations. Also, we want to refresh everyone's
[06:47] memory on the difference between active and passive remote sensing. So, active remote sensors, like the ones we'll be talking about today,
[06:56] these are types of instruments that emit their own energy source. Um in this case, lidars emit visible
[07:03] light, often from a laser, and then they measure the return signal. Passive remote sensors, on the other
[07:10] hand, are instruments that rely on external energy sources, such as the sun. So, what exactly is the lidar? So, first
[07:23] of all, lidar is an acronym that stands for light detection and ranging. And the definition for lidar is
[07:32] an active remote sensing instrument that transmits laser light and measures the return time of backscattered light to
[07:38] determine the distance of of object with high precision. And most of you probably have lidars in your cars, for example. You often have
[07:48] uh sensors built into your car's bumpers to measure the distance between the car in front of you. Those are the things
[07:54] that light up when you get too close. Those are very simplified lidars. Um lidars are also used to map out
[08:03] surface vegetation and topography, uh like I'm showing here. So, a lot of um other agencies and USGS and such
[08:11] employ lidar technology to get high-precision measurements of uh surface mapping. And while the spelling of lidar that I'm showing
[08:21] here here um um is the technical definition, colloquially uh and in the literature, we use lidar typically in lower case, uh
[08:32] like as in the last bullet here. So, for the atmospheric sciences, lidars are used for various geophysical
[08:43] variables. variables. That includes aerosols and clouds, which will be the primary focus of today, but they can also provide vertical
[08:50] measurements of winds, water vapor, gases, gases, as well as the heights of trees and ice sheets. sheets. And these lidar systems can be
[09:01] implemented on various platforms. Uh we'll be focusing primarily on satellites, satellites, um um past, current, and future satellite
[09:10] missions today, but they can also be deployed in ground-based systems, as in as shown here with this trailer.
[09:19] And in this case, the lidar system is looking up instead of down at the atmosphere. atmosphere. And then we also put lidars on
[09:26] various aircraft. And I'll get into the advantages of all three of these different platforms later in the
[09:33] presentation. So, I wanted to give a quick overview of the electromagnetic range where lidars typically operate. They typically operate in the
[09:50] uh near infrared, the visible, and the UV. UV. Um and so they span that part of the EM
[09:58] spectrum. spectrum. And similarly, radars are active remote sensing instruments, but they transmit in the microwave region of the
[10:08] EM, so much longer wavelengths. And there's different advantages for measuring the atmosphere for using these different wavelengths, which I'll get
[10:17] into. So, I wanted to go over some of the strengths of lidars for air quality applications. And first, I'm going to
[10:30] compare it to what most of you probably are traditionally used to, and that's passive remote sensing of aerosols and air quality.
[10:40] And so for air quality applications, the strengths of lidar are high-resolution vertically resolved measurements. And these are on the order of meters.
[10:51] Um and in most cases, these measurements can extend from space all the way down to the surface.
[10:59] And in comparison, passive remote sensors typically measure the full column of aerosols. And they have very little information on
[11:10] the vertical location of aerosol. And as you can imagine, that's very important for air quality applications, um which are interested in those level
[11:19] aerosol measurements. And so if you look at these maps of aerosols, these are seasonally averaged. Yes, they do depict the spatial
[11:28] distribution of them horizontally, but you don't have a very good sense for where they are vertically in the atmosphere.
[11:36] So, we just discussed the advantages of using lidar compared to passive remote sensing. I want to touch on
[11:44] uh advantages of lidar compared to ground-based in situ measurements of air quality. quality. And we alluded to this a little bit
[11:52] earlier in the presentation, but on the left here you can see a map of surface-based EPA measurements of air
[12:00] quality. quality. And you can see that some parts of the continental US are much uh more sparse than others, you know,
[12:07] particularly in the Midwest and western parts of the country. country. The advantages of using a space-based lidar is, depending on how you can
[12:16] structure your orbit, you can get enhanced coverage in these remote areas where you may not be able to
[12:23] um deploy a ground-based sensor. And this not only applies to the United States, you can imagine that there are
[12:29] parts of the Earth as well where it'd be very challenging or just uh a non-starter to deploy
[12:36] uh a ground-based instrument. So, how do we view lidar data? Unlike the passive maps that I just showed,
[12:46] lidar data is often depicted as with time on the x-axis and altitude on the y-axis. y-axis. And here's an example from the CATS
[12:57] instrument, which I will introduce later. later. Uh along the x-axis is the latitude and longitude. It's effectively time as the
[13:06] satellite moved over the Earth. And on the y-axis is the altitude. And you can see in this case
[13:13] um the measurements extended up to 28 km. km. And for air quality applications, we're interested in the lowest
[13:23] few hundred meters of the atmosphere. In this case, I'm showing uh a nice smoke event event um
[13:31] um that would be certainly of interest to the air quality community. So, I'm going to get into the
[13:39] strengths of using lidar versus passive remote sensing. So, since lidars generate their own energy source, you're actually able to provide
[13:48] measurements in the visible part of the spectrum spectrum during both day and night. And so, this is a map of
[13:56] one day's worth of orbits from the CALIPSO satellite. And the blue parts of the orbit are measurements
[14:04] measurements that were acquired during night, and the red red orbits were acquired during day. So again, unlike passive
[14:12] uh remote sensors that require sunlight to do their retrievals, the advantage is that lidar is it generates its own
[14:20] energy source and can provide measurements 24 hours a day. So far, we've talked about the advantages of using lidar data.
[14:29] Now, we're going to talk a little bit about some of the disadvantages and things to look out for.
[14:35] So, because lidars provide vertical measurements with high precision and high vertical resolution, the trade space that you lose is swath.
[14:46] And you can see that depicted here in this example from Clark et al. 2014, where we have the full picture of the
[14:53] Mona Lisa in the top left. We have a MODIS-like uh sampling in image B that's been cloud cleared.
[15:04] We have a MISER-like sampling in panel C. C. Um you can see less and less of the
[15:10] picture gets filled in. And then uh a lidar curtain, and you can see see um horizontally at least,
[15:18] uh there's very little swath uh to put together the picture. So, that's the trade space. We get the high resolution
[15:24] vertical information, but in 1 day's worth of orbit, we don't really get uh a whole lot of spatial coverage
[15:31] two-dimensionally in lat- latitude-longitude space. Other Other limitations of lidar is they typically are only built at a few
[15:46] different wavelengths in the EM spectrum. spectrum. And we'll touch on that a little bit later. later. Um
[15:52] Um during the daytime, the signal is plagued by solar light. And so, you can see by comparing
[16:01] the top right curtain and the bottom curtain, which is day to night, you can see see that the signal looks noisier. It almost
[16:09] looks like a old TV that's not getting very good signal. signal. Um and so, because of that noise, it
[16:17] makes it harder to pull out and detect tenuous features like faint aerosol, for example. Additionally, strongly absorbing
[16:28] features like very thick clouds or thick smoke can fully attenuate the transmitted light. light. And you can see that in lidar data here
[16:40] where you can no longer see the surface beneath clouds. And when you can't see the surface, that means that the signal's attenuated.
[16:49] Most lidar systems that you'll be working with attenuate at optical depth three. three. And so, it's really thick clouds will
[16:56] prevent the lidar beam from transmitting all the way down to the surface. And so, it may look like there may not
[17:03] be aerosol there, like in this case here. here. However, we just can't measure that because we're limited by the physics of
[17:10] the atmosphere. Now that we've gone over some of the basics of of the strengths and limitations and uses of lidar,
[17:19] we're going to get into how lidars work. Okay, so in this section we'll get into some of the basics of how lidars work.
[17:31] As I mentioned, lidar systems transmit their own energy. energy. And so the first component of the lidar
[17:38] system is the laser transmitter, and that's what's actually generating energy and laser light that gets transmitted into the atmosphere.
[17:47] From there, the laser light encounters aerosols and molecules in the atmosphere, and they scatter light. Some of this light is scattered back
[17:58] towards the lidar system and to a telescope. And the telescope captures this light. This is known as
[18:05] the receiver. And then inside the lidar system, there are special detectors that help measure the return signal.
[18:15] And so kind of colloquially, the transmitter and receiver um can be in-line together like like is depicted here, and that's known as the
[18:25] transceiver. transceiver. And for a very basic uh but thorough overview of how lidar systems work, I suggest uh
[18:35] checking out McGill et al. of 2003. Uh any reference that I've point to in this presentation will be
[18:42] provided at the end. So I mentioned that aerosols, clouds, molecules molecules uh scatter this transmitted light. However, they
[18:56] they do so differently. And so smaller particles, such as molecules in the atmosphere, they scatter light using Rayleigh scattering.
[19:07] And for Rayleigh scattering, the radius of the scatterer is typically uh smaller than the wavelength. And you can see that in uh panel A here,
[19:20] where Rayleigh scattering scatters light about equally in the forward and backward direction. Now, for larger particles like aerosols
[19:29] and clouds, they typically scatter uh in the Mie regime. And in this case, the radius of the
[19:36] particles is much larger than the wavelength, and you can see for these types of particles, they scatter much more strongly in the
[19:44] forward direction than they do in the the backward direction. And so, the way to think of this,
[19:51] generally speaking, is Rayleigh scattering you associate with molecules. Mie scattering, that's associated with larger particles in the atmosphere such
[19:59] as aerosols and clouds. So, how do lidar systems actually measure the vertical profiles of aerosols and clouds
[20:10] in the atmosphere? And so, since they transmit light, we know know the speed of light uh in the Earth's
[20:18] atmosphere. atmosphere. And what we do then is we design our instruments instruments to look for a certain period of time so
[20:27] that they can accumulate any return light back from the scatterers in the atmosphere. atmosphere. And so, that amount of time, since the speed of
[20:38] light is constant, equates to a distance. distance. And that's what determines the vertical resolution of lidar measurements. Uh
[20:47] typically for atmospheric purposes, it's on the order of 30 to 60 m or so. But you can design it to be coarser or
[20:54] finer, finer, um depending on your application. And so, like a quick exercise here in the top um
[21:03] uh uh set of bullets here is is you know, if we have a 150 m vertical resolution lidar bin, so this
[21:14] is a 150 m chunk of the atmosphere. An exercise to do quickly is to determine the amount of time it takes for the
[21:23] lidar pulse to transmit back and forth to the receiver. And so if you plug in the speed of
[21:30] light, you should get 1 microsecond for this. this. And that's how the fundamentally the lidar system works. It's it's
[21:38] accumulating signal over amount of time, and that translates to the vertical resolution resolution that's measured in the atmosphere.
[21:46] And a common misconception is that lidar signals can only be measured you know, from one range bin at a time, kind of
[21:53] like the car example, right? For hard targets, you're actually not getting that vertical resolution. Um more sophisticated lidar systems like
[22:01] the one I'm depicting here, you can actually get the full vertical resolution of the atmosphere that you're interested in.
[22:13] So we've gone over some of the basics for how lidar systems operate. So the return signal that you're actually
[22:21] getting at range or distance is going to be a function of that vertical resolution that we just talked
[22:28] about, about, as well as the field of view. And so the field of view is kind of
[22:33] similar to how your how your eyes are looking outside of your head. You know, you can't see very well to your left and
[22:39] your right, but straight ahead, you know, you're seeing visible light. That's kind of like the field of view.
[22:45] And so these instruments can be designed with small fields of view and large fields of view. And so these two things combined, your
[22:53] vertical resolution and your receiver field of view, really depicts or determines the sampling volume that you're measuring.
[23:03] And I really want to highlight that it's a volume of the atmosphere that you're measuring, measuring, not a point source like in situ
[23:09] measurements. measurements. And so that volume is going to be you know, representative of the average uh atmospheric state or aerosols or
[23:19] clouds in that sampling volume. Okay, um we going over some technical details on how lidar systems work.
[23:33] Here I'm going to show you a video that I think will kind of piece a lot of this
[23:37] together. It'll also talk about here in the beginning how we get different wavelengths of light. Um Um most of the lidar systems that I suspect
[23:47] you'll be working with will be 1064 nanometers near IR um lidar systems. systems. But those wavelengths can be doubled and
[23:57] tripled to get our visible and UV measurements. And so right in the beginning here, it's going to talk about
[24:03] this. And it's also going to talk about how um these photons are measured in the atmosphere and how we can determine
[24:11] their altitude. So, I'm going to turn the volume up here. Hopefully you can hear this just fine.
[24:17] To obtain this data, CATS uses a laser that generates three wavelengths or colors of light. Internal to the laser, special optical
[24:24] crystals are used to generate these wavelengths. By adding the energy of two photons to make a single new photon.
[24:32] The final output beam is made up of all three wavelengths and these photons are transmitted in groups towards the
[24:37] atmosphere at the speed of light. As photons encounter clouds or particles, scattering of the laser beam occurs. Very few of the photons scatter
[24:46] directly back to the optical telescope. But the ones that return are collected and counted by sensitive detectors and
[24:52] electronics. electronics. By timing the difference between emission and detection, the precise altitude of the particles can be
[24:59] determined. Okay, so now we've gone through some of the fundamentals of how lidars work. I wanted to introduce the various flavors
[25:10] of lidar that you may hear about. Um Um so the most common lidar system uh that's been implemented in space for
[25:20] aerosols and clouds has been an elastic backscatter lidar. Um we'll get into some of those, CATS and CALIPSO.
[25:27] These are the the simplest forms of lidars and the easiest to deploy in space. space. Um Um more sophisticated lidar systems such as
[25:36] the high spectral resolution lidar system or known as HSRL. These types of lidar systems are more sophisticated because they can separate
[25:45] out the molecular {slash} Rayleigh and Mie {slash} particulate scattering. So they can can um separate out aerosol and cloud
[25:56] optical properties um directly compared to elastic backscatter lidars. lidars. And so far I've shown a few examples of
[26:04] that, CATS and CALIPSO being um backscatter lidars. Um Um and then we also have HSRL lidars as
[26:14] well as well that provide similar sorts of measurements. Uh Doppler wind lidars, so these are lidar systems that actually use Doppler
[26:25] shift measurements of Rayleigh and Mie scatterers to determine um horizontal and in some cases vertical winds. winds. This is an example from an airborne
[26:36] instrument called DAWN uh that's flown for NASA uh on numerous field campaigns. Um there are Raman lidars
[26:46] um um and differential absorption lidars. These are primarily designed for water vapor and trace gas measurements. And here's an example of one of the
[26:56] differential absorption or dial lidars that are used to provide vertical measurements of water vapor. And And by differential absorption, they're
[27:07] channeling different wavelengths and using the ratio of different wavelengths wavelengths to determine uh how much water vapor in
[27:15] this case is in the atmosphere. And then similarly, we have trace gas measurements. This is an example of
[27:23] ozone profiles. Um these were acquired during uh from the ground. Um and they use similar techniques as uh
[27:32] I just went through for the water vapor uh uh example from Halo. And then finally, I mentioned
[27:41] that lidar systems are used for topographic measurements. And so for Earth sciences, atmospheric sciences, and and um cryospheric sciences,
[27:51] um these are highly precise, high vertical resolution measurements that are are trying to measure things such as tree
[27:59] canopy height here. Uh this is an example from the Jedi lidar system that was on the space station.
[28:06] Um and then there's some additional lidar systems that I'll be talking about later that have been targeting
[28:12] measurements of ice sheets um and glaciers and such and their change with time. Okay, early on I mentioned that lidars
[28:23] can be deployed on various platforms. I want to talk about ground-based lidars first, uh their advantages and their
[28:33] disadvantages. disadvantages. And so one of the big advantages of ground-based lidars is they can measure continuously from a fixed point.
[28:42] So this is really advantageous for taking measurements of the diurnal evolution of the atmosphere. So, how clouds evolve, how aerosols evolve,
[28:53] gases, the planetary boundary layer. How do these change throughout the day? You know, when you have a fixed point
[28:59] measurement, this approach this measurement approach is very advantageous. advantageous. They also, since they're on the ground, they are not as limited by power as
[29:11] airborne and spaceborne implementations, so they can really dial up the laser energy, and so you can get really good
[29:18] signal-to-noise from the ground. And then additionally, since you're on the ground, you can pair these instruments with other
[29:28] uh meteorological instruments such as radars, radars, um radiosondes and such to establish super sites, uh depending on the science application
[29:37] that you're into. And so, an example of this is the DOE's Southern Great Plains Super Site that
[29:43] has all sorts of instrumentation including lidars uh to measure the atmosphere. All right, so moving on to airborne
[29:54] lidars. lidars. So, these are advantageous because it allows you to really go after atmospheric processes that evolve
[30:04] quickly over time. You're thinking about convection, smoke plumes, plumes, you know, you want to measure these, you know, several passes
[30:14] over these. And there may be there may be spatial variability that you like to sample as well, which you cannot do from the
[30:20] ground. ground. The other advantage of using airborne lidar systems is again, you can add additional instrumentation uh to the to the payload depending on
[30:32] your science. So, you can put radar instrumentation, passive remote sensing, all to piece together the sort of the science story that
[30:39] you're after. And in this case here, I'm showing the NASA ER-2. And you can see this is the cloud
[30:47] physics lidar installed in one of the super pods here. And this lidar system operates out of the window in the forebody of the
[30:54] aircraft. aircraft. And you can see there's other pods here. There's other instrumentation um um installed in the aircraft. And this can
[31:04] change depending on the science that's targeted by the airborne mission. All right, moving on to spaceborne lidar.
[31:13] lidar. First, we want to talk about some of the different orbits and orbital strategies that spaceborne lidars have used.
[31:20] Today, all spaceborne lidars for Earth science have been launched in a low Earth orbit. And that reason is
[31:29] when you're actively transmitting laser energy, you actually want to be as close to the Earth's surface as you can. The
[31:37] further you go away from the Earth's surface, the more energy you have to transmit transmit and the worse your signal-to-noise is.
[31:45] And so for that reason, there haven't been any geostationary um lidar implementations, you know, used by NOAA, for example.
[31:56] Now, for uh depending on the science, different types of uh low Earth orbits have been employed. Um probably the most common to date has
[32:04] been a a polar orbit. So, the advantage here is you can see most of the whole globe, but you're
[32:11] only only sampling once per day. And these orbits may be either sun-synchronous, so there's you know, the the equator passing time is the same
[32:20] every day, or they can process, which means that equator pass time um um changes day-to-day. There are also low inclination orbits.
[32:33] And so, the trade space here is while you may not measure the entire globe, you're you're getting diurnal measurements uh
[32:43] throughout the day at a higher frequency than a processing polar orbit, for example. example. So, depending on your science, these
[32:50] type two different types of orbits uh can be employed for lidar remote sensing from space. Okay, I mentioned signal-to-noise ratio
[33:00] a little bit so far. And so, the accuracy to with which a lidar can derive its spatial and optical
[33:06] properties depends on its signal signal-to-noise. signal-to-noise. And as I mentioned, this depends on several things. The the field of view,
[33:15] so how essentially how large your telescope is, the distance between the instrument and your target, the amount of energy transmit.
[33:26] And because of this, which I alluded to in the previous slide, the signal-to-noise of space-based lidars is lower than ground-based and
[33:34] airborne lidars because so much further away from the targets of interest. And often spaceborne power requirements are such
[33:43] that you can't transmit the same amount of power that you can from ground or airborne. airborne. And so, signal-to-noise ratio during the
[33:51] daytime, as I previously mentioned, is always lower because you have solar light that the lidar system is
[33:58] measuring. measuring. And again, this makes it more challenging uh to detect aerosols and clouds clouds because your signal-to-noise is lower.
[34:09] And so, on the right here, I'm there's kind of sort of showing both of these things at the same time. So, this
[34:14] is is an airborne underpass of the Cloud Physics lidar from the ER-2 that I showed on the previous slide
[34:22] compared to CALIPSO from space. Um Um and you can see yes, the SNR in the airborne uh curtain is much higher.
[34:34] And that's because the aircraft is flying at a much lower altitude. And then during the day here, you can
[34:41] see see um um but some of the fainter features that you're seeing in the airborne data, you
[34:47] know, this this is some faint aerosol here, this is some faint clouds here. It's really challenging to see that by
[34:54] eye from space. And so to account for this traditionally, algorithms will average the signal over longer horizontal
[35:04] distances to be able to pull out these fainter features. Okay, so moving on to section three. I wanted to provide an overview of
[35:17] lidars in space. And so I'll be talking about past, current, and future lidar missions. And what I hope you really pick up on is
[35:26] that lidars in space are very rare. And they're relatively new um compared to a lot of sensors that
[35:33] have been put in space. So, um I'll step through these and um hopefully at the end you'll be excited
[35:40] about some of the upcoming lidar missions that are uh planned for the future. Okay, so starting with the past lidar
[35:48] missions. So, the very first space-borne demonstration of lidar is called the LITE mission. And this was done in 1994.
[36:03] And I find this fascinating. This was a lidar system that was put on the space shuttle. And you can see it in the left
[36:11] here. here. Um the space shuttle was actually flown upside down and the lidar system was facing the Earth here in this direction.
[36:22] And it flew for 53 hours. And that doesn't may not sound like a whole lot, but it really laid the groundwork and
[36:28] and was a pathway for some of the more famous lidar systems that that uh followed this. But this lidar system was was critical
[36:37] on unraveling some of the some of the things that we didn't know at the time. For example, you know, the
[36:43] altitude from which Saharan dust was getting transported from the Sahara into the Caribbean. You know, in this time frame, these 53
[36:51] hours, there were several dust uh uh case studies that Light was able to measure. measure. And so this really served as the the
[36:59] groundwork groundwork for for pre-flying spaceborne lidar missions that would follow. Okay, I mentioned that Light was the
[37:09] first spaceborne lidar that flew on the space shuttle. ICESat, which launched in 2003, was the first lidar that flew as a free
[37:18] flyer in space. Now ICESat was just designed as an altimeter to measure ice sheet elevation, but you can see from this
[37:26] curtain curtain it actually provided measurements of aerosols and clouds as well. So it was the first demonstration of
[37:34] a free-flying atmospheric measurement or lidar-based measurement, uh and that was in 2003. And again, this similarly to Light laid
[37:45] the groundwork for future atmospheric focused lidar missions. Moving on to CALIPSO, I think you've heard me talk about CALIPSO probably
[37:55] have heard about CALIPSO. Um so in 2006, NASA and CNES partnered to develop CALIPSO. And this was the first lidar
[38:06] for space that was designed for aerosol and cloud remote sensing. Uh this lidar provided measurements at two wavelengths,
[38:17] in 532 in the visible and 1064 in the near IR. And this operated from 2006 to 2023. So,
[38:25] almost 20 years of operation, which is phenomenal for a lidar in space. And so, the the data record for Calipso,
[38:37] it's fantastic. It It flew as part of the NASA A-Train. So, you have nearly co-located measurements with CloudSat,
[38:45] MODIS Aqua. And it really was one of the highlights of what was known as the Earth Observing Sort
[38:53] Observing System period. Now, following Calipso, the CATS lidar was built as a technology demonstration. Um and that was
[39:06] meant to fly and did fly on the International Space Station from 2015 to 2017. 2017. CATS CATS provided very similar measurements to
[39:15] Calipso, similar wavelengths. However, because it was on the ISS, which orbits between the latitude range of plus and minus 52°.
[39:26] It was a processing orbit. So, the advantage of CATS was you were able to get measurements at different
[39:31] times of day, again, at the sacrifice of global coverage, which Calipso provided. More recently, in 2018, the European
[39:42] Space Agency launched the Aeolus lidar. And so, I mentioned that Doppler wind lidars rely on using um
[39:52] um aerosols and clouds, as well as molecules in the atmosphere, to determine wind speeds. Um and so, while while not designed
[39:59] specifically for aerosol and cloud remote sensing, um Aeolus provided those data products. Um Um and was a nice complement to Calipso
[40:10] um until it also ceased operations in 2023. Okay, so what's going on in space now for lidar?
[40:21] Uh we currently have the follow on to ICESat, ICESat 2. Um and so this has been in space since 2018.
[40:31] Uh it's a 3 to 5-year plan mission, so it's met its mission um um requirements. requirements. And similar to ICESat 1, it's primarily
[40:40] a topographic um altimetry mission. However, it provides provides vertically resolved measurements of aerosols and clouds at 532 nm.
[40:51] Um an example of of of a profile is here, and you can see clearly you know, while the
[40:58] the primary measurement for ICESat 2 is the the altitude at the surface and ice sheets, sheets, you can see various atmospheric features
[41:06] that the instrument provides. You know, clouds over the UK, some aerosols over France and Spain, and then the topography that the the
[41:15] mission is primarily interested in over the Atlas Mountains. Now, very recently ESA has launched the EarthCARE mission, and this is an
[41:26] exciting mission. This is the first uh atmospheric and cloud lidar with that using that's using the HSRL
[41:35] capability that I previously mentioned. This is done at 355 uh nanometers, so this is, you know, out
[41:42] of the near IR visible and into the UV. Uh and this launched last year uh from Vandenberg Space uh Force Base.
[41:55] And in addition to the 355 nm UV lidar HSRL, HSRL, known as ATLID, there is additional instrumentation on
[42:05] the payload, which is a which includes a CPR W-band radar, radar, uh a multi-spectral imager, and a
[42:13] broadband radiometer. So, EarthCARE is really targeting uh, the Earth's radiation balance and how it's impacted by clouds and
[42:22] aerosols. aerosols. And as I mentioned, that launched last year. The mission is still up there in space, and
[42:30] data is now publicly available uh, to the public. So, if interested, you can download and um, start to analyze EarthCARE data.
[42:42] Uh, an example of some of the preliminary data shown here, and you can see this is, you know, similar sort of
[42:49] scene compared to some of the CATS and CALIPSO curtains that I showed. Um, here we have a mix of cirrus clouds
[42:55] up at around 18 km. You can see some deep convection. Again, as I mentioned, when you can't see the
[43:02] surface, the signal's attenuated. So, we don't actually know what's going on here, uh, because the clouds are so thick. And
[43:09] then you can see some aerosols. So, we have some desert dust, some marine aerosol over the ocean.
[43:15] And again, these these data are coming online, and I really want to thank um, um, my colleagues at ESA,
[43:23] Fabian Marnay and Thorsten Fehr for providing these slides to us. And I should should mention that this is
[43:30] also a partnership with JAXA, uh, on the radar side as well, not just ESA alone. Okay, so what's in store for the future?
[43:41] Um, so the first Aeolus wind lidar that I spoke about was a technology demonstration. demonstration. And so, following that, EUMETSAT, which
[43:49] is similar to NOAA here in the in the United States, and ESA have partnered to develop a another version of Aeolus
[43:57] known as EPS-Aeolus. And this one's going to be operational. So, So, you know, assimilated into data assimilation models.
[44:06] And this is slated to launch in the 2030s. 2030s. Uh, And so based on their experience with the first Aeolus, they've made
[44:13] design changes to improve the horizontal and vertical resolution, improve signal-to-noise ratio, data latency. This is really geared towards
[44:22] the data simulation side of the house. And then they've also decided to um include some design changes that help
[44:30] discriminate aerosols and clouds better, which I'll discuss more uh about how that's done in part two of this
[44:37] training. Also coming up from the US side in partnership with um the Italian Space Agency is uh LUCE. And so this is going to be a
[44:51] Raman lidar that's going to fly as part of the NASA Atmospheric Observing System. And that's slated to be a polar orbiting
[45:00] lidar. lidar. This is very early in the game here, uh but at the moment the plan is to include
[45:08] UV, visible, and near IR wavelengths. Um Um as I mentioned, it's very early on and design change or designs being
[45:17] finalized, finalized, uh but we're very excited about this potentially um uh exciting mission in the early 2030s.
[45:28] Okay, so getting to the summary of part one. one. First of all, I want to say thank you
[45:33] for attending part one of this. And I wanted to highlight some of the the topics covered today and key
[45:41] takeaways. takeaways. And so hopefully following this, you're able to recognize the capabilities of lidar active remote sensing in measuring
[45:50] vertical profiles of aerosols and clouds and for informing air quality applications. applications. Some of the key takeaways I have
[45:57] bulleted there that I hope you took uh will walk away with. And and that is the the power of active
[46:03] remote sensing for vertically profiling and air quality applications. A basic understanding of how lidar systems work, the various implementations of lidar,
[46:13] meaning ground, air, and space, and the limitations of each. And then an overview of past, current, and future lidar missions.
[46:23] Um another key takeaway is I hope you recognize the strengths and and limitations of lidar observations. Strengths being the the high resolution
[46:32] vertical vertical or the high resolution vertical resolution not possible from other passive sensors, as well as near-surface observations,
[46:41] right? So, the lidars provide vertical information for where aerosols are are where passive sensors can struggle. However, there's nothing free. Uh the
[46:52] limitations are lidar swath, and you can be impacted by poor daytime signal-to-noise, and signal attenuation uh in very thick clouds and the smoke
[47:04] plumes like we showed examples of. So, looking ahead to part two, the goals there will be to
[47:15] interpret information from lidar measurements to understand how we get from measuring raw photons to to discriminating cloud phase, aerosol
[47:25] type, and optical properties. So, going from what we call level zero data products to level two data
[47:31] products. products. And then we're going to go through um how to access data from some of these
[47:38] spaceborne campaigns that we discussed. And we'll walk through a few case studies um to to to check the understanding of going from
[47:47] these these level zero measurements all the way to level two data products. So, we'll have some examples of that to work through.
[47:54] And again, uh we'll walk through how to access and download data from these various spaceborne lidar missions.
[48:03] Okay, so just a few notes on the homework. Uh there will be one homework assignment that will open up following
[48:09] part two of our training. That can be accessed on the training webs web page. And the answers to the homework will be
[48:15] submitted via Google Forms. The homework will be due June 25th, and then following completion of both live
[48:24] webinars and the homework assignment, you'll receive a certificate via email about 2 months after completion of the
[48:30] course. Okay, so if you'd like to get in touch with me, my contact information is there. there. We also encourage you to check out the
[48:43] ARSET website, as well as check out the ARSET uh YouTube channel. And we also encourage everyone to check
[48:51] out our sister program DEVELOP. Again, I I promised I'd provide resources for some of the papers, as
[48:58] well as some of the websites that I was showing data from. Those are all provided here. Again, if you have any specific
[49:05] questions about any of this, feel free to reach out using my email address from the previous slide.
[49:13] And now I'll take any questions from the audience. Um so, the first one, uh when a lidar is
[49:20] ground-based, what types of measurements can be done upwards? And so, the answer there is um um you can do the exact same types of
[49:29] measurements from ground-based systems as airborne and space-based systems. Uh the big difference is um um the ground-based systems are looking
[49:39] upwards, and they are um static um in terms of their location. Um so, you can get a um
[49:48] a time series of atmospheric constituents using the ground-based systems. systems. We talked a little bit about attenuation.
[49:57] attenuation. Um so, when looking up as opposed to looking down, um ground base lidar systems can get
[50:04] attenuated looking upwards. So, if there's a really thick cloud deck above the ground base system, for example,
[50:10] example, you may not be able to see higher parts of the atmosphere. Just like the opposite was true from
[50:15] space based and air borne systems where if there's too much attenuation, you'd be unable to see the surface.
[50:25] Okay. Um a question about uh Jedi. Um Um And so, yes. Yeah, just Jedi is a lidar
[50:37] mission that's operating on the space station now. Uh we discussed that a little bit as a um type of of lidar. Uh it's referred to
[50:46] as an altimeter. Uh but that instrument really has very, very limited information for um for limited capability to measure
[50:56] atmospheric constituents. It's really targeting tree canopy heights. Um Um So, not so suitable for aerosol and cloud measurements that um
[51:07] that we're focusing on here. Uh t t t What type of applications on clouds can be made
[51:17] using data from EarthCARE? Uh so, EarthCARE is very exciting because uh it has, as I mentioned, several types of instruments on the
[51:26] platform. platform. Um so, the lidar is just a piece of it. And that's going to provide measurements
[51:32] of of thin cirrus clouds, but the really thick clouds, like in the example that I showed where there is thick convection,
[51:40] um um those will be impacted by attenuation. And when that happens, uh the beauty of the EarthCARE payload
[51:47] is you can use the radar that I mentioned to fill in cloud measurements below below um um profiles where the the lidar is
[51:57] attenuated. attenuated. So, you can use you can think of EarthCARE as a more sophisticated version of CloudSat and
[52:04] CloudSat if you work with that data before. before. Um, it also has the imager that I mentioned, so you have some swath
[52:12] passive swath information there. And you also have um um some broadband radiometer measurements. Um, so that payload is really well
[52:21] suited to go after understanding aerosols, clouds, and radiation and their impacts between the three of them. See, uh, can I use lidar images to
[52:35] monitor subsidence of underground mines? I I have not heard of that type of application for lidar data, um,
[52:46] but I can research that um, offline here a bit more and uh hopefully get you a more thorough or
[52:54] concrete answer. Okay. Okay. Is there any priority Or, sorry. Early predicted value of distance dealing with future advanced lidar
[53:07] mission? mission? Um, maybe I can speak to that real quick in case that's what they're after. Um,
[53:14] so for for yeah, um, for Aeolus the the EPS Aeolus is that's a partnership between ESA and
[53:22] EUMETSAT. EUMETSAT. Um, and so the goal there is to build a series of Aeolus wind lidars to be operational as part of the
[53:32] EUMETSAT suite, so the first Aeolus was just a demonstrator, so there was not a partnership with EUMETSAT there. Um, and
[53:40] they're moving towards and they really would be the first um, to do this operational lidar measurements of winds
[53:50] to be assimilated into their forecast models. All right, where can I download information from the Amazon forest to
[54:00] analyze analyze water vapor, gases, and vegetation canopy? canopy? Um so you're if you're interested in Jedi for example, um that information is
[54:12] publicly available. Um Um I have to confess I work very little with Jedi, but uh we will
[54:20] confirm that they typically NASA will put their um um their data on what's called a DAC, uh
[54:28] data repository. And so we can track down which one um houses Jedi data for for download. Um I suspect imagery was is most likely
[54:40] on their uh their website. That's pretty common for uh for lidar groups to do their quick looks
[54:48] on their website, but if you want to do download volumes of data for quantitative analysis, uh the DAC is probably better suited for
[54:56] that. How difficult is it to implement HSRL in comparison to conventional elastic backscatter lidar? Um so that's been done now by by ESA, so
[55:09] Aeolus Aeolus um and EarthCARE um both have have have demonstrated uh the HSRL capability. Um it's a just a bit more sophisticated
[55:21] system. And so um yeah, there's been tons of airborne demonstrations and ground one based demonstrations of HSRL.
[55:29] Um Um it's uh you know, again a more sophisticated system which um um uh uh you know, traditionally has proven to be
[55:40] more challenging to get it in space, but both Aeolus and Earth Care have have demonstrated that now.
[55:47] Can we reduce the power usage by limiting noise transmission using machine learning algorithms? Yes, and so there's lots of groups that
[55:55] are working on signal denoising during daytime conditions. I believe that I speak a little bit to that
[56:02] that in part two. So tune in next week, but yes, there's lots of groups leveraging machine learning for signal denoising to improve
[56:12] SNR. Okay, it would be nice to have practical practical example of measuring aerosol plume height and a few other types of
[56:23] applications. So we'll get into this next time. So please come back next week to learn how to interpret the curtains and plume
[56:32] height and where to access quick looks and such. What is the rough cost for ground base system?
[56:47] system? That's a good question. Um and I am not I'll have to get back to you on that one.
[56:58] That's going to vary quite a bit by the type of system. So a elastic backscatter lidar system
[57:07] such as MPLnet those are going to be more affordable than more sophisticated lidar systems um um such as perhaps HSRL or
[57:23] an ozone lidar. It's going to be kind of system and target dependent. Okay, your cross-sections of the
[57:50] atmosphere atmosphere were an excellent communication tool, but you also showed how they're useful for assessing signal-to-noise quality.
[57:59] Will you cover signal-to-noise and its relationship with how to identify atmospheric features in the next Yep, absolutely. So, we'll walk through all
[58:07] of the um feature detection um um or the the theory behind feature detection and show some real-world
[58:15] examples. examples. And uh we'll touch base again on how the daytime signal, at least traditionally, before these machine learning algorithms that I
[58:28] just mentioned have been incorporated, how that's accounted for and dealt with in these um in the feature detection algorithms.
[58:41] How efficient is lidar for measurements of PM10 aerosols? Is there any better remote sensing technique as compared to lidar for
[58:51] measuring PM 10? 10? Um Um so, lidar doesn't directly measure um um uh uh mass concentration of aerosols.
[59:06] Um Um there are certain wavelengths that are going to be better suited for PM10, so uh the near-IR wavelength, 1064
[59:14] nanometers, it's going to be better suited for PM10 than PM2.5. Whereas the visible and the UV will be
[59:21] better suited for that. And again, remember you're you're measuring a volume, so um thinking of the the lidar grid box
[59:29] closest to the surface, that's a volume that's, you know, typically typically several hundred meters horizontally by 30 to 60 meters vertically.
[59:40] Um, Um, so, so, lidars don't directly measure that, but they give you a sense for um, the concentration based on the
[59:50] backscatter signal. Okay, for my master's thesis, I'm working on mangroves in Cameroon. One of the goals is to compute canopy height.
[1:00:06] I had a look at Jedi, but as the samples are spaced enough, output output Can the output be really informative
[1:00:13] using these data for machine learning? Yeah, so for this I would I would revisit the Jedi website. Again, I'm not
[1:00:25] a a an expert with the Jedi instrument. I apologize for that. Um, but perhaps we can get some follow-up
[1:00:32] uh, a follow-up response to this um, um, following this session. Okay, it looks like number 15. Looks
[1:00:46] like someone is using drone for mining subsidence. So, that's Thank you for whoever submitted that. Can dial lidar be used to measure NO2
[1:01:07] concentrations? concentrations? Yes, I believe some groups are measuring NO2 um, here at Goddard. And um, similar to ozone
[1:01:21] and water vapor you can get the vertical resolution of these constituents. Okay, number 17's asking about the wavelength
[1:01:41] or or So, it's it's 355 nanometers is the wavelength of the laser transmitter. That's That's the laser beam is being transmitted at
[1:01:55] 355 nanometers. Um Um Like I mentioned for atmospheric science applications, they're typically the wavelengths are 1064. 1064. That wavelength is doubled to 532 to get
[1:02:08] green light and then it can be tripled to get 355 uh UV light. Um Um And the reason
[1:02:17] 355 355 was chosen as opposed to 532 for the HSRL technique is at 355 nanometers you get a lot more
[1:02:29] backscattered signal from the molecules in the atmosphere. And so, if you recall HSRL systems uh separate the molecular and the
[1:02:38] particulate signals. And so, if you have a much stronger molecular signal you can make that separation uh easier.
[1:02:50] Okay. Okay. What are some examples of use cases covered covered by ground-based lidar that which cannot be served by Doppler radars?
[1:03:02] So, So, radar systems are going to be measuring longer wavelengths in the atmosphere. And that basically translates to
[1:03:11] they're going to be sensitive to larger particles. So, hydrometeors. Um raindrops. Um snow, things like that. Um, that's going to fully attenuate the
[1:03:22] lidar system. So, what lidar can do that radar cannot is uh, measure very thin clouds like cirrus.
[1:03:31] Or, um, or for these really thick systems, just get the the cloud tops before they attenuate. And so, I always like to think of lidar
[1:03:41] and radar as kind of like filling in the column, right? So, the the radar is not sensitive to certain parts of the
[1:03:47] atmosphere where the lidar is. And the opposite opposite is true for the lidar. It can't It will attenuate
[1:03:55] for these, um, larger hydrometeors. Um, and so, just one more point there. So, that's why a lot of times we'll see
[1:04:06] these super sites like the Southern Great Plains where they'll put a lidar and radar together so that
[1:04:12] you can piece together the full column. Okay, so, how is lidar data efficiently useful for monsoon prediction?
[1:04:27] So, it's it can be used to provide, um, um, a real-time measurement of, uh, I'm thinking space-borne lidar here. Um,
[1:04:40] cloud top height. And for the same reason I just mentioned, you know, if um, um, if a lidar goes over a precipitating
[1:04:49] system, system, it can give you a measurement of that height. Now, the lidar itself is not going to predict anything going forward,
[1:04:57] but that information can be used to, uh, provide valuable information to our forecast models, um, um, to, uh, predict, you know,
[1:05:09] weather systems in real time. Lidars are not useful for predicting longer term uh you know, monthly scale, seasonal
[1:05:17] scale scale atmospheric phenomenon. It's it's a snapshot and that you that information can be used um to constrain forecast models for
[1:05:28] a few days perhaps. How can LIDAR be applied to precision agriculture if at all? That's a bit out of my realm. Um
[1:05:47] you know, I think of the altimeters for this. Um canopy height. Um Um I I you know, can think of other
[1:05:58] um um useful useful uh uh types of measurements outside of LIDAR that might be better suited for this, but we'll look
[1:06:07] into this. Uh can LIDAR measurements at different wavelengths wavelengths detect the absorption properties of brown carbon in the atmosphere?
[1:06:18] Yes, so that's um so when um um we have LIDAR systems that have multiple wavelengths. wavelengths. Um typically in the UV and the the the
[1:06:30] visible visible they will do a calculation called the Angstrom exponent. And so they'll take the ratio of those
[1:06:39] two wavelengths and that information can be used to assess the um the particle absorption in this case.
[1:06:47] So, it helps inform um um uh uh what we think that aerosol is. So, multi-wave light wavelength LIDARs
[1:06:59] in the UV and visible especially can do that, use that information to assess aerosol type. Um Um we'll get into how particle shape
[1:07:10] measurements from lidar can also inform that next time as well. If there are no questions, we can
[1:07:17] probably close for today. So, just to remind everybody, all the homework, um all the videos, slides, everything for today's training is on
[1:07:28] the training web page. The homework will be available after part two next week. Um I see a lot of questions about that
[1:07:35] in the chat. So, just to remind everybody. everybody. And And thank you so much, Ed. Oh, thank you. I really enjoyed this,
[1:07:43] and I look forward to uh part two next week. Thank you, everyone.
