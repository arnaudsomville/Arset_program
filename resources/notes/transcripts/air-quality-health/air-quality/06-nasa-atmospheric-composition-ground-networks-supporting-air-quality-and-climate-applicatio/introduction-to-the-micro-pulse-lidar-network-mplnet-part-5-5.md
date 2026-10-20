# Introduction to the Micro-Pulse LiDAR Network (MPLNET), Part 5/5

`https://www.youtube.com/watch?v=3qfXlMonG0s` · id 1 · 1:32:19 · module 27 — NASA Atmospheric Composition Ground Networks Supporting Air Quality and Climate Applications

[00:05] All right, so welcome back everyone to this fifth and final part of our our set training series on the NASA atmospheric
[00:13] composition ground networks which support air quality and climate applications. applications. Today I'm joined by Dr. Judd Welton
[00:22] who's a principal investigator of the MPLNET network out of the NASA Goddard Space Flight Center. And in this part our objectives will be
[00:32] to identify the basic characteristics of the MPLNET instruments which are used by NASA for ground-based active remote
[00:39] sensing of aerosols, clouds, and the planetary boundary layer or PBL. We'll also be recognizing how MPLNET sustains long-term global observations
[00:49] of the atmosphere and supports air quality and climate applications and how it can complement satellite observations as well.
[00:56] And finally we'll be showing you how to access relevant MPLNET data for given locations and application purposes.
[01:05] Just a reminder of the other networks we've gone through in this training so far. far. We've looked at AERONET and Pandora
[01:12] which are passive remote sensing instruments looking at aerosols and trace gases respectively. And then in our last session we learned
[01:19] about TOLNET which is an active instrument also using lidar which looks at ozone in the atmosphere. And today
[01:28] we'll be learning about as I said MPLNET the micropulse lidar network which is another active remote sensing instrument
[01:34] but this time looking at aerosols and the planetary boundary layer and clouds. As a reminder if you have any questions
[01:43] during this session, please put them in the question and answer box in the WebEx. There's three dots in the lower
[01:49] right corner of the WebEx interface that will bring up the Q&A box. You can put your questions in there at
[01:55] any time during the training and we'll answer all those questions together at the end of the training session today.
[02:01] We'll also be collecting the answers together in a question and answer document, which will be posted on the
[02:06] website about a week after the training. And now, without further ado, I'll hand things over to Dr. Judd Welton to teach
[02:14] us about the micropulse lidar network or MPLNET. Over to you, Judd. All right. Thanks, Carl, for the
[02:23] introduction. I'll be discussing the micropulse lidar network today. Before I get started, I want to recognize my colleagues.
[02:31] I'm the principal investigator, Judd Welton, at NASA Goddard Space Flight Center. Center. I have a staff shown in the slide here
[02:37] that are comprised of people working on the operational aspects of the network, as well as my science team.
[02:43] Of course, we have all of our international network partners that contribute substantially to the project. And finally, AERONET, who we've worked
[02:50] closely with since the beginning. Here's the agenda for my presentation. I'll begin with an introduction and an
[02:57] overview on lidar basics. Then I'll talk about the MPLNET project and the data we provide. I'll do a tour of the MPLNET website and
[03:06] uh demonstrate how you access our data. I'll go over some case study examples, and then I'll conclude with a discussion
[03:13] on how you can access global lidar data beyond MPLNET. So, I'll begin with our introduction. MPLNET was funded in 1999 and began
[03:25] operations in 2000. The original goal was to develop a long-term global lidar network to profile aerosol and cloud vertical
[03:33] distribution and properties at AERONET sites. sites. With the goal of uh of uh providing information for the bulleted items shown
[03:41] here. here. MPLNET's funded by the NASA Radiation Sciences Program and Earth Observing System, and we have significant
[03:47] contributions from our site partners. The pictures shown here are a few of our sites around the world. The green beam
[03:54] that you see there is the is from our lidar. It is normally not visible. These are long exposure photographs.
[04:03] So, I'll begin with a overview of backscatter lidar, which is the type of lidar we use in the MPLnet project.
[04:09] And note that lidars are like radars, but instead of using microwaves, we use laser light. Radars profile clouds, rain, severe
[04:17] weather. They use microwaves with a longer wavelength because that's ideal to look at scattering from the thick
[04:23] larger particle layers like clouds and rain. rain. Backscatter lidars profile aerosol and cloud structure. We do that using
[04:31] visible light with a shorter wavelength, which is more ideal to look at smaller particles like aerosols. The lidars work by transmitting short
[04:39] pulses of laser light into the atmosphere. atmosphere. A small portion of that light back back scatters at 180°
[04:47] from particles in the atmosphere. It's collected by a telescope and recorded using the detector and a data system.
[04:54] The MPLnet uses this type of elastic backscatter lidar. There are also advanced lidars that also profile aerosol and clouds using
[05:02] different techniques such as Raman and high spectral resolution. Also, other types of lidars that measure winds, ozone, uh etc.
[05:10] I'll focus on elastic backscatter lidar in this presentation. So, the lidars obtain optical proxies of the aerosol and cloud concentration,
[05:22] composition, and shape. We start by getting the altitude or the range of the particle layer, which we
[05:28] determine from the time between the pulse transmission and the reception of the signal back in the lidar.
[05:34] The light's attenuated as it travels up and back through the atmosphere by scattering and absorption. That in total
[05:40] is referred to as extinction. So, it's the backscatter and extinction parameters in our measured signals that are the optical properties of aerosol
[05:49] and clouds. That's what we're That's what we want to get from the data. The laser light's often polarized in one
[05:55] orientation, orientation, and the scattering by non-spherical particles like dust or ice clouds depolarizes depolarizes the light by an amount proportional to
[06:04] the non-sphericity of the particles. So, the polarized lidars can measure what we call the depolarization ratio. It's and that is proportional to the
[06:13] particle's degree of non-sphericity. So, again, the idea is that the remote sensing data from our lidar provides
[06:20] optical proxies for the vertical profiles of aerosol and cloud concentration, composition, and shape. On this slide, I'm showing example of a
[06:30] lidar signal on the left. The x-axis is the signal strength, and on the y is the altitude.
[06:38] The blue line is a molecular only signal. So, that's assuming there were no aerosol and clouds uh present.
[06:45] The green line is a measured lidar signal that's been calibrated. You can see that the signals start out very
[06:52] high, and then they gradually decrease with range. That's because the signal is being attenuating continuously attenuated as it propagates through the
[07:02] atmosphere. You'll also notice on the right, this is the depolarization ratio. And again, there's a molecular baseline.
[07:12] The molecular atmosphere does depolarize light a little bit. And in green, you can see the measured volume depolarization ratios, and
[07:20] they're measured in percent. So, on these plots, anywhere you see the green green uh signal or the green depolarization
[07:27] ratio greater than the molecular background, that is uh due to the presence of aerosols or clouds. MicroPulse lidar network uses the
[07:38] MicroPulse lidar that's shown here on this slide. Uh it's the first uh instrument to the left. left. It was the first commercially available
[07:48] autonomous eye-safe lidar, and it's eye-safe at a green wavelength. It's suitable for network operations because it can run continuously.
[07:57] It was originally developed at NASA Goddard Space Flight Center in the early 1990s. It was patented and then licensed
[08:03] for commercial use. The license has since expired, uh but over time the instrument has continued to be sold by
[08:09] numerous companies, and at the moment it's available from Droplet Measurement Technologies. Technologies. The instrument acquires atmospheric profiles from 250 m to 30 km at 1-minute
[08:21] temporal resolution, and this instrument became polarized around 2008. Unfortunately, the MPL itself is no longer available. Uh we're now using uh the mini MPL shown
[08:33] to the right. This was an offshoot development of the original MPL. It's the same basic design and performance. It's smaller, easier to
[08:41] ship, uh but it does have a slightly lower signal-to-noise ratio. So, the primary job of MPLNET is to install and operate these sites
[08:51] and collect and archive the data. We then calibrate the instruments and transform the raw data to a level one
[08:57] signal product, and this is a signal in a form that is usable. We retrieve cloud and aerosol and PBL
[09:04] properties, and we also provide level 1.5 and 2 quality assured products. Finally, we provide the data products to
[09:11] the public, and all of our data is open and available just like AERONET. And then of course, we assist with
[09:17] interpretation of the data and collaborative research. So, this slide I will discuss how we transform raw data to the atmospheric
[09:25] parameters um and the signal that uh we then use to retrieve backscatter and extinction. So, as a reminder, it's these two
[09:34] parameters represented by beta and sigma, backscatter and extinction that we're after. I'm demons I'm showing the signal plot
[09:41] to the right again. And at top this is the equation form of the signal shown in the plot. We call
[09:48] this NRB or normalized relative backscatter. backscatter. I've broken up the terms into molecular and particle or aerosol and cloud. So
[09:57] you see that our signals we're measuring are directly proportional to the backscatter backscatter at a given altitude or range.
[10:05] Then they're attenuated by two transmission terms. The first transmission term here is the molec is is due to molecular
[10:12] scattering. scattering. The other transmission term in the end is due to aerosol and cloud attenuation. And this integral term in the exponent
[10:23] is actually the aerosol optical depth from the surface to that range. So there's a connection back to uh AERONET
[10:30] for instance that you've heard earlier in the training. There are a number of calibrations and instrument parameters that we have to
[10:39] uh process in order to produce the lidar signal you see on the right. Those include the laser energy, the
[10:47] solar background. The sun does emit some light at the laser wavelength and we have to subtract that.
[10:53] Uh interestingly enough that uh signal noise for us is the entire signal for AERONET. AERONET. And we of course have the range and the
[11:01] diagnostic temperatures. There are numerous calibrations that must be applied to the data. They include uh accounting for the
[11:08] performance of the detector, laser detector crosstalk and we call this after pulse. That's an artifact of the MPL design. Uh it's a transceiver,
[11:17] so when the laser fires the detector sees a little bit of that signal and we have to subtract it.
[11:23] Then we have receiver overlap which is a calibration for the near range signal loss and I'll discuss that on the next
[11:29] slide. slide. And then finally we calibrate the polarization to produce accurate depolarization ratios. There's one instrument parameter we do
[11:37] not remove from the signal. That's called the lidar receiver efficiency parameter or C, sometimes called the lidar constant.
[11:45] And that's shown in the equation here. So this is what would convert our signal units to SI units.
[11:52] And in the appendix of the slide deck I provide more in-depth discussion of the lidar signals, calibration, and our
[11:57] processing techniques. So on this slide I'm showing the same two signals in green and in red what the
[12:05] signal looks like with no with no calibrations applied. So on the right you can see if there's no afterpulse
[12:11] calibration applied we end up with slightly too high signals due to that noise term. It may not look like much on the slide
[12:19] on the scale shown here, but these can interfere with our retrieval algorithms. In addition, we do a slight range
[12:25] correction. You can see a little bit of difference in range at the base of the cloud here at about 12 km.
[12:32] The overlap calibration is shown at the bottom where you can see using the lidar we're not able to accurately image
[12:37] signals closer to the surface. So we account for that using a separate receiver channel that has a
[12:45] very wide field of view and a very short overlap. overlap. Polarization calibrations are done with both lab and measured data as an example
[12:53] shown to the right. I'll discuss interpreting lidar data on the next few slides. Our lidar data is
[13:02] often displayed as a 2D representation of the atmosphere shown on the right where the x-axis is time and the y-axis
[13:10] is altitude. The data variable you're plotting at any time and altitude is represented by a color map as shown
[13:17] here. So I'm showing the lidar signals in the top plot from one of our MPLNET sites in
[13:24] Barcelona and you can see aerosol near the surface in some high altitude clouds around 10 km. And I want to focus on these
[13:33] mid-tropospheric layers around 5 to 7 km. If you look at them, they look like the signal is weaker or less than the
[13:41] signals near the boundary layer. The same with this layer here towards the end of the day if you can make it out.
[13:47] And I want to remind you that again the signals are being attenuated as they propagate through the atmosphere. So,
[13:52] you cannot you cannot make a conclusion about the concentration in these layers relative to those below from the lidar signal
[14:00] alone. alone. We have to do retrievals of the aerosol properties to do that. On the bottom, I'm showing the volume
[14:07] depolarization ratio. And again, I want to remind you that this variable is indicates the sphericity of the
[14:14] particles, not the concentration. So, the higher values of depolarization indicate more non-spherical particles, and you can see that in the ice clouds
[14:23] up around 10 km relative to the aerosols near the boundary layer. But, the volume depolarization ratio we
[14:32] measure from the signals is not the same thing as the aerosol or the cloud depolarization. depolarization. So, again, we have to do retrievals of
[14:39] the properties uh to to get an accurate measure of what the particle depolarization is. And that's shown on the next slide here.
[14:48] And I'll discuss our aerosol retrievals later in the presentation, but if you look at retrievals of aerosol
[14:53] backscatter, you'll see that those weak signal layers aloft actually correspond to backscatter that's very comparable to what's near the surface. The same near
[15:02] the end of the day. And if you look at the aerosol depolarization ratio retrievals, you'll see that they're
[15:07] higher than the volume depolarization ratio. So, next I'll move on to discussing the project and our data.
[15:16] On this slide, you can see our sites on the map. These are sites from 2000 to current.
[15:22] current. The green dots are operational sites, the red are are closed, and the yellow are planned. We have 85 sites in total.
[15:30] Uh 28 are currently operational, and we have about 10 sites in planning phase. That changes year to year.
[15:36] We also have near complete co-location with AERONET. Uh that was the goal of the project. U MPL net history has involved three
[15:46] version releases, and again, these are similar to AERONET. Version 1 and 2 span the 2000 to 2021
[15:53] time frame. We're currently in version 3, which was released in November '21. Version releases include things like new
[16:00] instrumentation, data products, or data processing capabilities. All the version 2 and 3 data are currently available on our website, and
[16:08] there's a link at the bottom here. The instruments that we deploy must be put inside of an environmentally uh
[16:17] controlled enclosure, and that's shown on the pictures here for both the mini MPL and the MPL. The enclosures have an optical quality
[16:27] window on the roof, and we sometimes install this tube on the top to block more of the sunlight and increase our
[16:33] signal to noise. There are controls on the outside for the environment and the temperature and humidity inside and an ethernet cable
[16:39] for data communication. We can also use Wi-Fi if needed. For a federated network like AERONET, which includes both NASA and domestic
[16:48] and international partners, data are acquired continuously day and night at a 1-minute temporal resolution and 30- or 75-m vertical resolution. The
[16:57] raw data are all transmitted back to our central server, and automated processing of the data and um occurs, and the products are
[17:05] available in near real time, which for us is hourly. Our data product suite is shown here. We
[17:11] have four products organized along themes, and each of them contain variables and diagnostics. Our NRB product contains the signals. We
[17:20] have a cloud product, aerosol and PVL product, and I'll go over each of those in a second.
[17:26] All of our data files are in the standardized format. They're net CDF4 CF compliant, and we have full error
[17:32] propagation from raw data to the final variable. All of the error variables are in each of the product as well.
[17:39] The level one and level 1.5 products are available in near real-time, and we have QA flags in all of the products.
[17:47] This is our product level table, and again, it's aligned with AERONET. So, we have level one products. All of the data
[17:53] are available in near real-time, and there's no QA screen applied. Our level 1.5 products, shown in the middle,
[18:02] are the same except we're applying a near real-time quality of screen to the data. data. We're utilizing the NASA GEOS-5 model
[18:09] for all of our meteorological inputs to calculate the molecular quantities. quantities. Finally, we have level two data shown
[18:16] here, and these are available after post calibration, and for the aerosol product, after AERONET level two data
[18:22] are available. I mentioned we have numerous QA and confidence flags in the data product, and I'll talk more about those during
[18:30] the web tour. Next, I'll discuss each product in more detail. Our NRB product is shown here. The relevant variables are the lidar
[18:40] signal, the volume depolarization ratio, the error variables, and the QA flags. The references are shown here. Uh to the right, I'm showing uh signal
[18:50] data from NASA Goddard Space Flight Center site on May 28th of this year, and the volume depolarization ratio
[18:57] below. below. You might notice that there's a very uh intense layer of depolarizing aerosol in the mid-troposphere, and I'll come back
[19:05] to that later in the presentation. But, in addition to the signal and volume depol data, we have diagnostics.
[19:12] Uh so, in green is the laser energy, in blue are the temperatures, the solar background is in yellow, and the purple
[19:18] line here is the surface temperature from the GEOS-5 model. Our cloud product is shown here. The relevant variables are cloud base
[19:27] and top heights, a cloud mask. We have hourly and daily cloud fractions, both column and then organized by altitude
[19:34] level. level. Estimates of thin cloud optical depth and extinction and cloud phase. The uh reference for the cloud product
[19:42] for the first four bullets up top is shown here. And the left-hand plot demonstrates that we're able to improve our detection
[19:51] capability for thin clouds from version two to the current version three system. The plot shows cloud occurrences versus
[19:58] altitude, and you can see around 10 km we are improving our cloud detection. Our cloud phase uh variables are um
[20:08] shown on this page, and there's a reference at the top for that. Um the top plot you see the lidar signal
[20:15] as a front is moving through. The middle plot is the volume depolarization ratio, and the bottom is
[20:20] the cloud phase, demonstrating there's ice clouds near the top, transitioning to mixed phase in purple, and then down
[20:26] near the surface these gray layers are water clouds. On the right is an example of some uh
[20:33] utilization of the data for science. There's supercooled liquid water fractions from MPLNET compared to CALIPSO. The lidar in CALIPSO was called
[20:40] CALIOP. CALIOP. I'll just mention we've have many publications examining cirrus clouds with MPLNET and CALIPSO data. Probably more important for this
[20:49] training um program, however, is to note that our MPLNET version three cloud data were used to validate the new thin
[20:56] cirrus cloud screen in AERONET version three. Next, I'll talk about our aerosol product. The relevant uh variables are
[21:05] the aerosol top height or the top of the highest aerosol layer, backscatter and extinction profiles, the lidar
[21:11] efficiency parameter. A new term, the lidar ratio, I'll talk about in a second. Uh and then various other diagnostic
[21:19] variables. variables. Essentially, our retrievals are the same for aerosol as we had back in version one. one. Uh but we've added addition of the new
[21:27] lunar AOD data from AERONET. And of course, then with polarized data, we now have aerosol depolarization ratios.
[21:35] So, the first thing we do in the aerosol retrieval is to uh apply a cloud screen at 1-minute temporal resolution using
[21:42] our cloud product. There's no clouds in the example I'm showing here, but if there were, those minutes would be removed from the signal
[21:49] average. average. We then apply a running 20-minute signal average to the data, and these cloud screen statistics are kept and used in
[21:56] the QA flags. The next step is to apply our aerosol top height algorithm, and the references are shown here. I don't have time to go
[22:04] into the detail. But, our aerosol top height parameter is now shown overlaid on the bottom image. So, anywhere above that, we determine
[22:12] there are no aerosol present. Our aerosol property retrievals are discussed on this slide. And for the retrieval of the aerosol
[22:21] properties, we utilize the AERONET optical depth as a constraint. So, if we go back to the lidar equation I showed
[22:27] earlier, earlier, you'll note that we have uh two parameters we want, the particle backscatter and the particle extinction.
[22:35] So, we have one equation and two unknowns, and on top of that, it's a transcendental equation. However, solutions are provided by
[22:42] Fernald and Klett. They require the introduction of a new parameter we call the lidar ratio, which is uh below.
[22:50] Lidar ratio is the extinction to backscatter ratio. And it's not just a trick used to solve the equation, the lidar ratio is
[22:58] actually inversely proportional to inherent properties of the aerosol, namely the single scatter albedo, which is the absorption of the aerosol, and
[23:06] the phase function at 180°, which is related to the size and shape. So, the idea with the solution here is
[23:13] to set an a priori value of the lidar ratio. They typically just pick a number of 50. Usually, this parameter varies
[23:20] from 20 to 80. Then, they replace the extinction in the equation with the lidar ratio times backscatter, and you solve for
[23:28] backscatter. backscatter. However, by setting a number for the lidar ratio a priori, you can introduce large biases in the retrieval.
[23:37] So, for MPLNET, we solve this by constraining the retrieval, where we force the extinction to integrate to the AERONET optical depth.
[23:48] So, what we do is first set the lidar ratio to a value of, say, 100. We solve
[23:52] for the backscatter profile. Then, we calculate a new value of the lidar ratio as shown here. It's the aerosol optical
[23:58] depth from AERONET divided by the integrated backscatter profile. We repeat this and iterate it until the lidar ratio converges.
[24:07] This method does not require a priori specification of the lidar ratio. It calculates a column average value in the
[24:13] solution. solution. So, an example of this retrieval for one of the AERONET observations on the day I
[24:19] showed in the last slide is in the corner here. This is the extinction profile. profile. All of the AERONET data are included in
[24:28] our MPLNET aerosol file. So, you have a correlation of the AERONET and the MPLNET retrievals. They include the
[24:34] optical depth, the Angstrom exponent, our calculated lidar ratio, of course, the extinction and backscatter, and even the sun photometer or the
[24:42] AERONET derived lidar ratio. So, on this day, I'm showing in green on the bottom, these are the aerosol
[24:50] optical depths from AERONET. So, every time there's an aerosol optical depth observation, we can do the retrievals I showed before.
[24:59] So now on the top you have backscatter profiles at the AERONET times, and on the bottom these are the lidar ratios in
[25:04] orange retrieved from the uh process. You'll notice that there are gaps in the data where AERONET has no observations.
[25:13] We can resolve that by using the lidar efficiency parameter. We can calculate C by using the AERONET
[25:21] optical depth as shown below. So if we go to an altitude above the aerosol top where there's no aerosol and
[25:27] there's no clouds, the lidar equation simplifies to the form shown here. And we can solve for the system
[25:34] constant. So in purple, these are the retrievals of our system constant shown uh on the bottom plot.
[25:45] In order to fill in the gaps, we interpolate the C values to our 1-minute temporal grid shown here. So now we've
[25:50] filled in the day. And these can be used to calculate the column aerosol optical depth at the
[25:58] times without the AERONET observations. So now we've filled in the aerosol optical depth for the entire day.
[26:08] Now wherever we have an aerosol optical depth, we can do the aerosol retrievals and fill in the rest of the day with the
[26:14] full backscatter profiles and the lidar ratio. ratio. So our final aerosol product contains both constrained and interpolated data.
[26:23] The interpolated data will be of lower quality. quality. I mentioned there are a number of QA flags in the product and and one of them
[26:29] includes an indication of what type of optical depth was used. Was it day, night, or interpolated? These are the references for our aerosol
[26:37] retrievals. retrievals. And before I continue, I wanted to mention a caveat. The retrievals shown here assume the lidar ratio is constant
[26:45] with altitude. This can bias the results if the lidar ratio actually changes. That's a limitation of backscatter
[26:51] lidar, and you can solve this by use of a Raman or HSRL lidar. So, lastly, we have our PBL product. The
[27:00] relevant variables here are the mixed layer height, which is our proxy for the PBL height. And we also have a mixed
[27:05] layer aerosol optical depth, which is the optical depth only in the mixed layer. A reference is shown here.
[27:11] On the right, these are comparisons of the uh PBL derived from radiosonde launches with that from our our mixed
[27:19] layer depth and MPL net. On the next slide, I'm showing our uh lidar signal over a 2-day period. I'm
[27:26] superimposing virtual potential temperature temperature and demonstrating our mixed layer heights. The algorithm actually retrieves three potential heights and
[27:34] down selects to a final. That's shown in red on the plot. So, you see that we're able to capture the diurnal evolution of
[27:41] the PBL layer while it's at night, as it grows in the morning, peaks in the afternoon, uh and then begins to
[27:47] collapse in the evening and for growing again the next day. Here's a 10-year climatology of the mixed layer height and the column
[27:56] AERONET optical depth and the mixed layer optical depth at Goddard. And if you look at the optical depths,
[28:02] you'll see AERONET's fairly constant day to night, but you'll see the mixed layer AOD decrease in in the evening and
[28:08] increase into the day as the PBL or the mixed layer grows and entrains more aerosol. You'll notice there's a gap of
[28:15] about 0.05 optical depth, and this indicates that on average about 0.05 of the AERONET optical depth is above the
[28:23] boundary layer. So, in summary, these are some images of the data that we provide from MPL net
[28:30] for a 3-day period on the left at Goddard. The signals are on the top, and on the bottom, you see aerosol
[28:34] backscatter, our cloud phase mask, and the mixed layer height in brown. On the right is the volume
[28:40] depolarization measured at our site in Barbados with a Saharan dust layer over the boundary layer. And when you look at
[28:46] the aerosol depolarization ratio below, you can clearly identify the dust layer above the marine boundary layer with
[28:52] weaker depolarization. Summary of products in development is in the appendix. So, next I'll do a tour of the website
[29:03] and demonstrate how you access our data. Topics we'll cover will be project information, network slides, browsing and downloading data, and using our
[29:14] APIs. This is our MPL net homepage. There's a description of the project at the top. There's a random image of the day
[29:26] on the bottom which changes daily. First, I'll start with a discussion of our project material. If you look on the
[29:32] left side, you'll see a menu bar. We go into project and click on version information. information. This page describes the various versions
[29:40] that we've had up to the one that's currently operating, version three. If you go back and we click on product
[29:47] information, information, these are the same product and data level tables that I showed in the presentation. Here, we'll click on the
[29:55] aerosol product. All of these pages bring you to a description of the product and some references. references. At the bottom, there's a table which
[30:06] contains all of the information in our in our product files. We have the variable, the definition, type, units,
[30:13] and if there's a CF standard name. We also have the global variables variables described in here as well.
[30:20] There are also buttons to click on QA flags and QA criteria. So, if I click on QA flags and I'll
[30:26] scroll down, you'll see flag AOD. For the aerosol product, this is the QA flag I mentioned that tells you whether
[30:33] or not the data were from sun photometer or AERONET optical depth, lunar optical depth, or lidar derived. That would be
[30:39] the interpolation. So, if you want more information on our products, they're available on this product information page.
[30:47] Uh next, you'll see a formats link here. If you click this, this will present an NC dump style representation of our data
[30:55] file if you're more familiar with that. It's also useful if you want to see what our um
[31:00] each variable's attributes look like and what they are. Next, I'll discuss uh looking for sites and our data. So, if you go into the
[31:11] data section and we click browse V3 data, data, a map will appear with our sites. You can, of course, navigate around the map.
[31:22] You can also click on um um any of the icons and a quick look image will appear of the lidar signal with
[31:28] links to the site page. All of the other information is displayed in tables below. We have They're organized by the active sites.
[31:37] Oop, sorry. And then the inactive sites below. below. The first column contains the site name with links to the site page. We have lat
[31:45] lons. If you click these, they bring you to Google Map to view the site. Uh the Aeronet site name is shown in
[31:51] this column, and if you click on that, it brings you to the Aeronet Synergy Tool. Tool. For now, I'll click on the Goddard Space
[31:57] Flight Center site. There's some metadata information at the top and then a calendar view below of where and when we have data.
[32:08] For Goddard, this goes back to 2001. Anywhere you see a link, we have data. Um for instance, if you look into the
[32:16] future, say October, November, uh there are no links available. So, you can click on any one of these
[32:22] and go to the data browse page, but you can also click on the month headers. And here you'll get a month view with
[32:29] quick looks. These are helpful if you're looking for a particular event or some sort of atmospheric uh structure of
[32:35] interest. You can click on any one of these and also go to the site uh to the
[32:39] data browse page. For now, I'll go back to the calendar view view and we'll select May 28th of this year.
[32:47] This will bring up our browse page. So, on the top will be the lidar signal, the volume depolarization ratio, and if
[32:57] you notice, I'm using the same day that I showed for the NRB product example before with this depolarizing layer
[33:03] overhead. overhead. The next plot window is an overlay of the aerosol backscatter, our cloud phase. You can see some clouds
[33:12] uh water clouds here. And then in brown, the mixed layer height. And on the bottom are some diagnostic
[33:17] plots. plots. You'll notice each plot window has various plotting controls below, so you can control the plot and dynamically
[33:24] change various parameters. Um you can also also change variables you'd like to plot. If you look at the top, we have controls
[33:33] to change the start and end date of the plot, as well as the altitude. So, demonstrate that by changing the start
[33:40] time. We'll go back one day to May 27th and forward one day to May 29th, and we'll change the altitude range from 0
[33:48] to 15 km. Now, if you hit any plot button in any of the windows, it will replot all of
[33:54] the data. So, now we're seeing 3 days of data from 0 to 15 km. In addition, you can add variables to
[34:02] plot. If you look down below each window, there's a green cross. If we hit that, that, now you can select any level and product
[34:10] that you would like to plot. Here, I'll select level one PBL. I'll choose the mixed layer top variable
[34:17] and hit plot, and it will overlay it on the image. If you notice for each of these, there's
[34:25] a line plot button as well. So, if I click that for the aerosol product, it brings you to a line plot display. And
[34:33] in this case, it will show you the backscatter. backscatter. So, there's various ways to look at our
[34:37] data dynamically on the website. For accessing our data files, you click download data uh here under the data
[34:45] section of the menu. And before I begin, I'll mention our data policy, which is also on the side
[34:50] menu. menu. We ask that you adhere to this before use of any of the data. It is openly available, as you'll see in
[34:57] a second. We have two ways to access the data here. One is the data portal. If you
[35:01] click this in version 3, there's an FTP-style portal to access the data, so you can manually download it.
[35:11] We also have a data ordering tool below. And here I'll select the data we were just looking at. So, I'll go down to our
[35:17] Goddard site. I'll pick May 20 7th as the start. And May 28th as the end date. Sorry, May 29th as the
[35:33] end date. I'll select the level one aerosol product. product. And then hit search. So, here it will tell you that three
[35:45] data files were found, and you can click the download button here. Agree to our data policy in the pop-up
[35:51] window, and it will compile the files you requested into a zip and download to your hard drive.
[35:58] You can also select to remove the QA variables flags or subset any of the variables to make the file smaller.
[36:07] Next, I'll move on to our APIs. Those are available under web services. We have APIs to download the data, plot,
[36:16] and look at metadata. So, if you click on download, it will describe how to download the files with our API. That's
[36:23] our third method of accessing our data. If you click on plot, this describes our plotting API. Uh and as an example uh shown here, if
[36:33] you want to produce dynamically an image with our aerosol backscatter, the cloud phase, and the mixed layer height,
[36:39] uh here's the URL string example. So, if you click this, you'll notice it will just return that image,
[36:46] not the entire website. Lastly, we have a metadata API, where you can download CSV, KML, or JSON formats that are in a Gallion
[37:00] standard, and I'll talk about Gallion as another project at the end of the presentation. presentation. As an example, if you'd like to get all
[37:06] of the active sites in a CSV file, there's an example link here. If you click this, you'll see you get
[37:13] the site name, site coordinates information, status, and then a link to the site page in the CSV file.
[37:21] If you wanted uh more information, you could use our standard Gallion JSON format. So, if we want to look at
[37:26] Goddard site on October 1st, '23, here's an example. I'll click this, and it returns a JSON with some header information at the top,
[37:36] and a station element with all of the station metadata, a contact element with all of the PI,
[37:42] science, and technical contacts, the date, and then a data list of all the variables available. In this case, this
[37:48] is our signal, so it has the units, uh it has hours of the day, it tells you which hour of the
[37:54] day has data, and the status, the data level, instrumentation, etc. More importantly, in the metadata file are
[38:01] links to the browse page, and links to the data file itself. So, you'll see the link here. If you click this,
[38:09] that will actually begin to download the data file for that day to your hard drive. So, in this JSON format has
[38:15] everything you need to access uh state site information, as well as access the data. data. And that concludes the web tour.
[38:27] Next, I'll discuss some case studies using MPLNET data. MPLNET has contributed to many research projects, journal publications,
[38:37] presentations, etc. I only show a few examples here. Um MPLNET has had a global impact on aerosol, cloud, and PBL research as
[38:46] shown in this Web of Science citation map back from 2022. We've also contributed to unforeseen research projects including the IceCube
[38:54] neutrino study in Antarctica. Here, I'll focus on some aerosol-related examples relevant to this training. I'll start with smoke, which is becoming
[39:04] uh increasingly important. We've contributed to a lot of wildfire smoke research and I'm showing a listing of various publications here.
[39:12] Organized by Southeast Asia, North American, and European smoke, studies of volcanic plumes, and then a series of
[39:18] papers actually examining both. And we have more of these in press right now. I want to highlight the paper by Osborne
[39:25] et al. where they were looking at uh the impact of Raikoke volcano eruption in 2019 on flood operations over the UK.
[39:35] The UK Met Office began seeing high-altitude plumes appear about 1 week before they forecast the arrival of the volcanic ash.
[39:44] This ended up being smoke coming from fires burning in Alberta that began a week prior. So, this paper discusses that, but what
[39:52] I wanted to highlight is that uh the large fires are becoming increasingly prevalent and we're having smoke blanketing the northern hemisphere
[40:01] for most of the year. And right now, a lot of the larger fires are dumping smoke into the atmosphere at same
[40:07] altitudes that we typically see with volcanic eruptions. So, we're getting an incredibly complex environment for most of the year.
[40:15] I can illustrate that with this next slide what I call the wall of smoke example from our MPL net measurements at
[40:21] Goddard back in June of last year. You see some heavy layers here present um and through analysis we can identify the
[40:31] lower altitude plumes, the ones that actually eventually reach the surface with smoke from Eastern Canada, namely Quebec. So, this was the smoke that
[40:38] blanketed much of the Eastern US uh that time of year and generated a lot of news stories.
[40:45] The mid uh troposphere between 5 to 10 km, these plumes are from Western Canadian fires in Alberta.
[40:52] And this layer up high above 10 km is actually smoke from older fires after circumnavigating the globe.
[41:00] So, it's important to consider even one fire can produce a complicated environment based on its life cycle,
[41:07] um how long it's burning, um it will produce different smoke properties in varied layer heights. If you add in
[41:13] multiple fires with different fuel types, types, uh the complication increases. And I can illustrate that by looking at the volume
[41:20] depolarization on this day. Where you'll notice that the lower plumes coming from Eastern Canada have lower depolarization, which indicates
[41:30] the particles were more spherical. This could be due to something with the smoke shape or it could also be due to
[41:37] more sulfate being transported with the plume plume than those from Western Canada. So, the point I'm making here is using
[41:46] remotely sensed data, especially passive observations, must be done carefully to avoid misinterpreting what you're looking at, especially with satellite
[41:54] data. data. These conditions are becoming more prevalent for most of the year. Another smoke study is shown here. These
[42:01] were Quebec fires back in 2002. Um in this case, the authors were able to use the signals measured over Goddard
[42:09] and look at the plume heights as they arrived and do back trajectories to follow the smoke back over the source of
[42:16] the fire and determine the injection heights over the fire. They then validated and compared them to what was
[42:22] being used in the model. Next, I'll discuss some satellite support. This This slide focuses on the Calipso mission, which has a lidar on
[42:33] board called Caliopi. We've been supporting their version 3 product development. This will be the final release for this mission, which
[42:41] unfortunately has ended already. Namely, we're providing lidar ratios from under-sampled regions. This is part of a project joint with Merra, shown
[42:50] here on the left. If you're interested in Merra, you can visit the website. The version 5 aerosol product from
[42:57] Calipso will be quite different over the ocean, where they're actually using lidar ratios measured from the instrument.
[43:04] instrument. And MPLNET and some other projects projects are also providing our information to help them generate a more
[43:11] accurate product over the ocean. We're also supporting the ESA mission called EarthCARE. It recently launched. ESA EarthCARE mission includes ATLID,
[43:21] which is the next satellite lidar. It's in commissioning phase now. Data will be available soon. ATLID's a polarized high-spectral
[43:29] resolution lidar operating at 355. We're a member of the validation team, and some of our tasks are shown on the
[43:35] left. We're validating the aerosol cloud and boundary layer heights. We're also comparing their precipitation product with one of our own that is in
[43:44] development. development. And we're doing some joint analysis of cirrus cloud forcing using MPLNET and EarthCARE data. The pictures shown here are
[43:54] demonstration of using the Caliopi data as a proxy for EarthCARE to look at cloud fraction and occurrence,
[44:00] aerosol heights, and the PBL height. Other case studies are available in the appendix. appendix. So, I'll conclude with a discussion of
[44:11] accessing global lidar data. And here, I'll discuss a project called GALION. GALION. GALION is a network of lidar networks
[44:19] organized through the WMO Global Atmospheric Watch Program. Myself and Lucia Mona are the co-chairs. We have guidance and direction provided
[44:27] by a steering committee of our fellow network heads in the table shown at the bottom, as well as the GAW Aerosol Science Advisory
[44:35] Group. Group. We have a report that was published in in 2008. The um GALION lidar networks that compose
[44:43] GALION at the moment are listed here with the red dots, and all of them have signed agreements with WMO as
[44:49] contributing networks. More information and links about each of the GALION networks uh is available on our website.
[44:56] There's a link here. The idea for GALION is to generate global coverage closer to the scale of
[45:04] AERONET that you get with the passive measurements. We recognize the only way to do this is by working together and
[45:09] combining our networks into one network of lidar networks. Our website is shown here. Um we provide information on GALION, as
[45:20] well as a search and discovery tool I'll show in a second. We also have automated handshakes with the WMO OSCAR database,
[45:27] which contains all of the WMO ground-based observations and traceability back to the observation requirements. requirements. So, the goal is to provide one source
[45:36] for you to visit to get aggregated lidar network information and data. I should mention we're still updating
[45:42] the metadata from some of the networks. So, the website is functional, but some portions of it are not available to the
[45:47] public yet. This is our search tool. If you visit the website and click on sites, here we display all of the networks, um
[45:58] and you get a now a cool more complete picture of the global lidar network data and the distribution of our sites.
[46:05] These are color coded by each individual network. There's a table at the bottom which will contain links to the network
[46:11] for each site. Uh we also um composite sites together if they're co-located. We have links to the site page for each
[46:19] of them, status, and then metadata information on the location. The final columns are the WMO site name
[46:27] and its Wiggo's ID if it has one, and then a listing of the other networks um and pro- and programs that are
[46:33] co-located at the site. All of the search features, including uh some of them at the top here,
[46:40] where you can search for uh sites by variable or those that only have data in the PBL or the stratosphere
[46:47] for instance, all of those search features are also available via API. I'll discuss some tools in development.
[46:55] These are not available to the public yet, but they will soon be. We'll have metadata downloads, and that
[47:00] is in that Gallion JSON format I mentioned previously, which does contain links to the browse images and directly
[47:06] to the data files. We also have a tool which can analyze trajectories. These will extract sites along the track, and those are available
[47:14] for high split files, KML or CSV, or volcanic ash advisories either in the simple text or XML format.
[47:21] So here I'll show a high split example, and I'll go back to that day I showed and ask that what was that aerosol layer
[47:27] over Goddard on May 28th? I'm showing it here again for reference. It's highly depolarizing, and it looks like it may be dust, but
[47:36] it's very late in the season to have Asian dust transport to the US. So I'll utilize our high split tool to
[47:42] determine this. Uh so when we go live with the enhanced tool, there'll be a section to upload a
[47:50] trajectory file. In this case, I select high split, and in the bottom you see the tool will
[47:55] extract all of the Gallion stations along each air mass trajectory. They're color coded and grouped together by
[48:00] trajectory. trajectory. I'll use this information on the next slide slide to determine what this layer is over
[48:07] Goddard. Goddard. So here if we look at the map of the extracted Gallion stations, you'll see that we have data starting in May 28th
[48:16] at Goddard. And then 2 days earlier we have data available from the Reno MPL net site. But if we constrain ourselves only to
[48:25] MPL net data, the next data point we have is 8 days earlier at our site in Israel in the Middle East. Using Gallion
[48:32] we have access to more lidar stations and more data including the Sapporo station and Adnet which is the eastern
[48:40] Asian lidar network and then two sites in Early net which is the European lidar network. So here again is the data shown at
[48:49] Goddard and now I access the quick look data to the Gallion search tool for these stations. And we'll see here at the Reno station 2
[48:57] days earlier they are also capturing this elevated plume. And if we go in temporal order here, we
[49:03] look at the quick look available from from the Adnet network. And their quick looks a bit different.
[49:10] They have a lidar signal at the top, depolarization ratio in the middle, and then because they use two wavelength
[49:17] lidars they're able to take a ratio of the backscatter and produce a parameter which is similar to the Angstrom
[49:23] exponent with Aeronet. It looks at the size. size. So when the air mass went over the Sapporo station unfortunately it was at
[49:30] the end of May 23rd into May 24th and there was a rain event. But immediately preceding that there is evidence of
[49:36] aerosol reaching deeper into the troposphere. troposphere. It's depolarizing and they indicate large particles. So in the Sapporo site we're also seeing
[49:45] indication of this layer. If we look at our MPL net site in in the Middle East or the Early net stations in
[49:53] the Middle East and in the Mediterranean, there's no evidence of this layer. So, we can conclude that the source of
[50:00] this must be somewhere between those stations, perhaps over northern China or Mongolia. Mongolia. And I'll note that one of the
[50:07] trajectories, the lower altitude one, actually stalls out for a bit in this region. region. So, now if we move to NASA WorldView
[50:14] tool, tool, we're able to look at satellite data and incorporate MODIS fires and the VIIRS deep blue aerosol type.
[50:21] We'll notice that there is evidence of a storm system moving through on May 23rd. Yeah, even some indication of dust above
[50:29] the cloud layer here that indicating that it is at the same or similar altitude we're seeing in the lidar data.
[50:35] The aerosol types indicate dust, some fire, and then some mixtures as well in this area, and there are some
[50:41] fires burning in in Siberia during this period. period. So, combining this together based on the multiple GAW networks and the NASA
[50:49] satellite data, we can conclude that this layer of dust originated over Mongolia somewhere around May 23rd and
[50:56] was likely mixed with smoke from fires in Siberia. So, I just wanted to present an example of doing analysis or your research
[51:04] incorporating more lidar data than just what's available from MPLNET. So, thank you for your interest in the
[51:13] NASA MPLNET project, and Karl, I'll hand it over to you. So, thank you very much, Judd, for that
[51:24] excellent overview of the MPLNET system. And now I'm going to just close us out with summarizing the overall training on
[51:31] our NASA atmospheric composition ground networks which support air quality and climate applications. Over the course of the five sessions of
[51:39] this training, we've covered four different NASA networks, the AERONET network looking at aerosols, PANDORA and the Pandora Global Network,
[51:49] which is another passive remote sensing instrument this time looking at trace gases, gases, the Tropospheric Ozone Lidar Network or
[51:55] TolNet, an active remote sensor looking at ozone in the troposphere, and finally the Micropulse Lidar Network or MPLNet, which we learned about today,
[52:05] which gives information and atmospheric profiles of aerosols and clouds including aerosol properties and the planetary boundary layer height.
[52:14] So, between all these networks there's a wide variety of different types of information that these networks offer on
[52:19] different properties of the atmospheric composition and structure. The networks have various sizes and many of these networks also work in close
[52:29] cooperation or federation with other international groups and efforts. For example, today we learned about the Gallion Network, which MPLNet is part
[52:37] of. of. And together these give us really a global scope in our ability to observe the atmosphere and collect this
[52:44] information. information. And this information from all these networks together with information from satellites and atmospheric models really
[52:52] allows us to study various different aspects of the atmosphere including aspects relevant for air quality and relevant for the Earth's climate in a
[53:01] wide variety of different areas and in a wide variety of different ways. So, hopefully throughout this training
[53:07] you've learned a little bit about what each of these networks offer and how the data from these networks can be used
[53:13] together with information from other sources to address questions that are relevant to you and your work. At the end of today's session we'll be
[53:23] posting to the training webpage a homework assignment. This assignment is accessible as a Google Form and you can submit your
[53:31] answers answers in that Google Form. The homework assignment will be due in 2 weeks on September 5th.
[53:40] And to receive a certificate from completion of the course, you do have to complete that homework assignment before
[53:45] that deadline of September 5th. And in addition, you will have had to attend all five of the live webinars
[53:52] that we've offered as part of this training series. Uh if you complete all those requirements, you should receive a
[53:57] certificate via email uh about 2 months after the completion of the course. Here is our contact information for
[54:07] myself and Dr. Welton together with information about uh ORSET and some of our sister programs if you have further
[54:14] questions. questions. And here's a summary of some of the resources we provided not only on Aeronet but on all the other networks
[54:21] we've presented over the course of this training. training. And now we'll move on to the question and answer session.
[54:33] All right, so we've had um quite a few questions and we'll try our best to answer them uh live during this session.
[54:40] Again, any questions we don't get to live will be answered in this document which will be posted to the training
[54:46] website uh in about a week. So to start us off um with questions one and two, we had a couple
[54:54] questions at the beginning about the depolarization ratio, how it's calculated, and what it can be used for.
[55:00] So um if you want to provide a general answer to to those questions. Okay, uh thanks Carl. Um can you hear
[55:08] me? me? Yes, I can. Okay. Okay. Yeah, the uh I know I was covering quite a bit of
[55:13] detail in this presentation. The depolarization ratio is one of the more difficult concepts to communicate. So I
[55:21] understand why there were several questions on that. Um Um the depolarization ratio is a measurement of the two polarized states
[55:31] that the lidar emits into the atmosphere. atmosphere. It's typically what we call a co-polarized co-polarized and a cross-polarized state that are
[55:40] emitted in the atmosphere. Most lidars use use linear polarization. polarization. So, there's a co, you know, a parallel
[55:48] or a perpendicular laser state emitted. And then they take a ratio of the returns at those two orientation states,
[55:55] and that is the depolarization ratio. The micropulse lidar design's a bit more complicated as it's a transceiver.
[56:04] Uh so, we're using a mixture of linear and elliptical light. But, the idea is the same. We take a ratio of the signal
[56:11] returns from those two emitted states, and that's the depolarization ratio. Um it requires calibration to be accurate, but the ratio is really a
[56:22] measure of the particle sphericity. So, if you have a lower depolarization ratio at a particular altitude, that means
[56:29] there's more spherical particles. If a higher ratio, that indicates the presence of non-spherical particles. Okay, great. Um and again, I think you
[56:40] noted this for several things, but there are more details that are provided in an appendix to your presentation, and
[56:46] that's been uploaded to the training web page. So, if people have uh questions, uh there are some more technical details
[56:52] provided in that uh in those slides. So, question three, how many MPLNET stations are at or collocated with the
[57:01] AERONET stations? Yeah, the uh it both of our networks change, uh you know, the network size is in flux year
[57:09] to year, so I don't have an exact number, but probably about 98% or more of MPLNET is collocated with AERONET.
[57:17] Um really the only places where we are not are at extreme polar latitudes, like our site at the South Pole. Uh we had
[57:24] another one um in Svalbard. Uh and uh I I all of the few research cruise deployments we've done uh have also been
[57:34] co-located with Aeronet just not with the same one. It's been using their handheld sun photometer in the man
[57:39] network. network. Mhm. Mhm. Okay, thank you. Um so questions four and five uh you did cover them during the presentation. They
[57:47] were asked a little bit early uh during the their during the presentation. So we would refer people back to the
[57:52] presentation. Again, we'll be posting uh the recording of this training um in the next few days uh to the training
[58:00] webpage. webpage. Uh so I think we'll go to question six next. Um does the molecular attenuated backscatter signal vary uh day to day?
[58:11] Yes, it can vary day to day and based on location. Uh the molecular scattering is dependent on the meteorology, so the
[58:18] pressure really. Um so we use the NASA GEOS-5 model to get our meteorological information at all of the stations and then from that
[58:26] we calculate the molecular scattering. Okay. Okay. Um question seven was two uh different questions actually. The first was
[58:36] basically what makes MPL eye safe and then second what is the uh sampling frequency? I think was the
[58:43] question of the of the system. Yes, uh the the question included the optical depth um depth in the atmosphere and the eye
[58:52] safety of the instrument aren't really the same thing. Uh but the MPL was the really the first
[58:57] visible lidar um operating in visible wavelength that was designed to be eye safe. And you achieve that by using very low
[59:06] energy pulses. Typically, we're about six microjoules per pulse. And then we also expand that beam um through the transceiver to the full
[59:15] diameter of the instrument. So it expands to almost 20 cm in diameter. So the energy density is very low anywhere
[59:22] in the beam. Um and the only way we get good signal to noise uh addresses the second part of
[59:28] the question and and yes, it was we we do that by using a high repetition rate laser and in our case 2,500 hertz.
[59:37] Okay, thank you. Um Um So, question eight, how do you distinguish between the depolarization from non-sphericity versus multiple
[59:46] scattering? Yeah, this uh this question really could be applied to to other aspects of what we're measuring, not just depolarization.
[59:57] Uh but the well, as a result of being an eye-safe design, the MPL and the mini MPL use very narrow fields of view on
[1:00:05] our receiver and we do that to reduce the solar background noise. Uh so, typically we're about a 100
[1:00:12] microradian field of view, which is much narrower than a typical lidar system. Um so, since we have a narrow field of
[1:00:20] view, this really removes a lot of the multiple scattering problems that you're encounter with other designs. Uh if we're you know, if we're looking
[1:00:27] at a very thick layer, uh it's possible we could begin to see some multiple scattering, but we also tend to
[1:00:33] attenuate very quickly in those layers. Um really probably before we begin to detect any multiple scattering impact.
[1:00:42] Okay. Um so, question nine is how does the polarization induced in the the instrument instrument um and do you measure both parallel and
[1:00:52] perpendicular polarization? I think you discussed this a little bit when discussing the depolarization ratio, if you have anything to add here.
[1:01:00] Yeah, I think this is uh similar question. I was answering them rather quickly, but uh I don't know if I have much more to add.
[1:01:08] Um Um the uh Yeah, really getting too much into the detail here was beyond the scope of this
[1:01:16] presentation, so I I can point you to our website where we have more information on this as well as
[1:01:21] links to other papers that the polarization design for the MPL was actually developed by colleagues of ours
[1:01:27] in the DOE ARM program. Um, and there's a paper they have out on that if you want to look at the original
[1:01:33] um, um, design. design. Okay. Yeah, that's good. Um, okay. So, question 10, uh, how do you maintain all the time beam
[1:01:42] alignments for both TX and RX? Yeah, the um, I guess I maybe I misinterpreted this a bit, but uh, well, I can address what I
[1:01:55] wrote and then I'll add a bit more. Um, the uh, in terms of timing, the MPL data
[1:02:01] system controls the timing between the emission of the laser pulse and then reception of the signal. We use a photon
[1:02:07] counting detector for that. We do a small range correction during the calibration process. Um, but if they were talking about the
[1:02:16] alignment of the transmitted and received signal, uh, then the MPL is a transceiver design. So, we're biaxial
[1:02:23] and we we don't have this type of problem. So, there's uh, there's no real bore sight required
[1:02:29] with an MPL. Um, that that's handled during the construction and initial alignment and calibration of the instrument itself.
[1:02:37] Okay. Okay. Um, so, question 11 deals with maybe plans to expand MPLnet to Ethiopia and maybe we can uh,
[1:02:46] expand this question. There were several questions related to basically how do I join the MPLnet? How do I purchase the
[1:02:51] instruments and so forth? So, maybe you could just uh, address those here. Sure. Yeah, I I this is probably one of
[1:02:59] my number one questions I get a lot. Um, so, specific to Ethiopia, unfortunately, no at this time there aren't plans to
[1:03:06] deploy something. Um, in general, we we really can't grow as large as AERONET because we're using a lidar and the lidar cost and
[1:03:15] complexity is just much greater than the sun photometer. It's an inherent limit based on budget and, you know, our staff
[1:03:23] size to handle all of that. Um so, we're a little bit more constrained in what we can deploy. We do
[1:03:29] have a list that we maintain of planned deployments that is dependent on funding but also availability. Much like AERONET, we're using a
[1:03:38] commercial instrument. So, if you purchase one yourself and are interested in joining the network, that does make it easier for us to
[1:03:46] discuss incorporating you into MPLNET. Um Um so, if you're interested in buying one, I'd recommend that you contact the
[1:03:53] company. company. Um Um at the moment, our list of planned stations is still uh includes sites we
[1:04:01] had planned during COVID. Uh so, once we clear that list, which should happen at the end of this year,
[1:04:06] we'll probably be more open to looking at other stations. Okay, great. Um so, question 10, can we measure
[1:04:16] stratospheric aerosol with MPLNET? Uh yes, the answer is yes. Um if you want to retrieve properties of
[1:04:26] aerosol in the stratosphere, we would have to do much longer time averaging. We don't actually have any stratospheric
[1:04:32] aerosol product, uh but we can do um some custom analysis where needed. However, in terms of just detecting the
[1:04:40] stratospheric aerosol layers, that is that is uh quite easy, especially at night with the MPL. Um our signal data is acquired up to 30
[1:04:48] km. I think most recently, we looked at the Raung eruption in Indonesia, and we detected that over
[1:04:55] Singapore site at about a 22 to 23 km altitude, I believe. Mhm. Mhm. Okay. Okay. Um question 13, um are MPLNET vertical
[1:05:07] profiles all zenith measurements? And does it have a different footprint uh or spatial representation, I guess, with
[1:05:14] respect to AERONET since AERONET does direct sun scans typically? Yes, the the answer to to all of that is yes. Um
[1:05:25] MPLNET data are all they're essentially nader. We're looking straight up. We have a small angle tilt to avoid any
[1:05:31] specular reflection from ice clouds, but in terms of this question, we're basically pointed straight up. Mhm. Mhm. The AERONET instrument's looking at the
[1:05:39] sun and they're of course doing sky scans for radiance. So, we do have different view angles. Um the MPL can be scanned uh with some
[1:05:48] additional equipment. We do not do that for MPLNET operations. Okay. Okay. Um question 14, uh is the aerosol
[1:05:57] extinction calculated using the classical Klett inversion technique and what was the lidar ratio used? I think you also, you know, covered this in the
[1:06:05] presentation to some extent, but if you want to add any uh details here. Yeah, I think this question came a
[1:06:12] little before that slide. Um So, yes, we we use a Fresnel Klett uh inversion technique, but we use the
[1:06:19] AERONET optical depth as a constraint. So, we don't So, we don't specify or set the lidar ratio. We actually calculate
[1:06:25] the column average value. Mhm. Mhm. Okay. Um so, the next question was about how to download the MPLNET NET data.
[1:06:34] Again, I you covered this in the presentation a little bit uh later after the question was asked, but it the data
[1:06:40] are available through the MPLNET website. website. Yes, the the one thing I I may add is uh
[1:06:47] there there may be some data we have not finished reprocessing in version three yet. Um that data
[1:06:54] would be available in our version two archive, but if you're interested or need some data in version three that are
[1:07:00] not avail- available, you can contact me. me. Okay. Okay. Um question 16 was another question related to basically how to join the
[1:07:09] network. network. Um, I think the only thing different here was questions about some other instruments, but MPL only MPL net rather
[1:07:16] only supports the MPL net instruments. Um, Um, so let's go to question 17. Um, how is the range corrected backscatter signal
[1:07:27] normalized and with what value the normal is that is the normalization done for the range corrected backscatter
[1:07:34] signal? Yeah, this was discussed in in the slides a bit. I have more on this in the
[1:07:41] appendix. appendix. Mhm. Mhm. Um, the our our what we call our NRB signal, signal, uh, the normalization
[1:07:50] part of the name refers to the fact that we we normalize the measured signal to the range to the range squared to remove the
[1:08:00] the range square fall off you get from scattering. And then we also normalize it to the emitted laser energy.
[1:08:07] Um, and so that produces our signal, the attenuated backscatter signal which you typically you might be used to from
[1:08:14] Calipso. Calipso. Uh, Uh, that involves removal of this lighter efficiency parameter or the lighter constant. We do not provide attenuated
[1:08:23] backscatter from MPL net because it's more difficult to do that from the ground. ground. We do have that that variable in our
[1:08:30] aerosol product so you could use that to then calculate attenuated backscatter from our signal product if you wanted.
[1:08:39] Okay. Okay. Um, question 18, do we need to perform any background corrections? Uh, well, I I interpret this as you the
[1:08:49] user and the answer is no. So MPL net we provide all of the calibration data processing. processing. Yeah.
[1:08:57] Yeah. All right, so question 19, I think there were a few questions about the interactions between MPLNET and
[1:09:04] Calipso. You discussed this to some extent in your presentation, but um uh maybe you could just discuss a little
[1:09:10] bit more based on your the answer here. Um Um the synergies between MPLNET and Calipso. Calipso. Sure.
[1:09:18] Sure. Yeah, there there have been some studies and publications. Um Um as you the word you used is a synergy is
[1:09:25] probably the better term. Um There have been several most of them have been cloud related. However, I'll mention that it is really
[1:09:33] difficult to do a direct comparison Mhm. between Calipso or satellite lidar. Um for instance, now EarthCARE is in orbit.
[1:09:41] It's very hard to do that direct comparison comparison between satellite lidar and a fixed ground station lidar because the swath
[1:09:48] of each instrument is so narrow. Mhm. Um and you know, the satellite is moving quickly. So, it's really better to think
[1:09:55] of a synergy where you're combining the data from both and the satellite lidar provides a lot of spatial coverage.
[1:10:01] Not much temporal information, especially from lower Earth orbit. But the ground stations don't have much spatial information, but we have a lot
[1:10:08] of temporal information, especially in MPLNET because we're operating 24/7. Okay. Okay. Um so, question 20, uh will the C values eventually be used for
[1:10:21] completing uh AERONET level 2 data in order to avoid problems of not being able to measure when clouds are present,
[1:10:27] and could this C factor be used to complete the data when there there are technical problems in the instrument?
[1:10:35] Yeah, so our our level 2 MPLNET aerosol processing is the the same as I described in the presentation. The only
[1:10:43] difference difference is that we would use level 2 AERONET optical depth as our constraint. For level 1 and 1.5 processing, we're using
[1:10:52] level 1.5 AERONET AOD. Mhm. Um that's really the only difference. We do use the C values to track the health of the
[1:11:01] instrument along with the instrument diagnostics and then of course to produce what we call our interpolated aerosol retrievals.
[1:11:09] But just like in level 1.5 data those would be they would they would be level two data
[1:11:15] but they would be marked as less confident in our confidence flag. Okay. So question 21, what is the
[1:11:24] agreement between the PBLs from MPLNET and from radiosondes? Again I it was discussed briefly on the PBL product.
[1:11:36] The original our original PBL product or really mixed layer height I should say not PBL height but a mixed layer height
[1:11:43] variable variable was discussed in the paper reference that I provided on that slide and as part of that study there was a
[1:11:50] comparison of our retrievals to the PBL height from radiosonde data. There have been some some other work such like that but a really large
[1:12:02] scale you know comparison between our MPLNET mixed layer heights and radiosonde PBL heights has not been done
[1:12:09] but I'd I'd love to see that. Okay. Okay. Question 22, how is cloud screening done for MPLNET signals?
[1:12:20] Yes the so our data are all on a one minute minute temporal resolution. For the aerosol product we do a 20 minute signal
[1:12:29] average. So any minute of data that contains a cloud base in our cloud product that is below the aerosol top
[1:12:38] height is screened from that 20 minute average. average. If a cloud is detected above the aerosol top then the signal is left in the
[1:12:47] average but that is flagged in our product. product. You know ideally AERONET data should be cloud free,
[1:12:54] but we do typically see the presence of clouds, especially thin cirrus, above the aerosol layer, even though AERONET has data. And this
[1:13:03] could be due to the different view angles as we discussed earlier. Or the potential of just missing missing
[1:13:10] that that cloud in the AERONET processing. So, we do flag that in our data. And that was part of what was used to to
[1:13:18] help in the development of the version 3 AERONET data using our cloud product and the detection of these
[1:13:25] missed clouds in the aerosol product. Okay. Okay. Question 23, what are the differences between the mini MPL and the CL51 and 61
[1:13:37] ceilometers? ceilometers? Yes, I was waiting for that question. The differences are shrinking over time, but typically the MPL is still classed
[1:13:49] in the the lidar category, not really a ceilometer. ceilometer. Um Um It's mostly because we're using a green
[1:13:55] wavelength in our case versus a near infrared wavelength that's in most ceilometers. ceilometers. Um as a result, we just have a better
[1:14:02] signal to noise ratio than you typically see with ceilometers and also a longer range. We you know, we we do profile up
[1:14:09] to 30 km. Most ceilometers are capped much at much lower altitudes. The MPL is also polarized and until the
[1:14:18] recent release of the CL61, that was not available in ceilometers. Um so, we are looking at intercomparisons now and more
[1:14:28] planned between the mini MPL and the CL61. Okay. Um question 24 is another question about basically, you know, how to expand
[1:14:38] or grow the network. I think you've already addressed that previously. So, let's go to question 25. Um can we discriminate between the
[1:14:47] aerosol types and I guess the question is basically which is more accurate between Calypso and I guess the MPL
[1:14:55] lidar. Sure. Sure. Um Um So, I'll say it is definitely more difficult to discriminate aerosol types than just MPLNET.
[1:15:05] Uh we really have only one wavelength, which limits what we can do. Calypso has two wavelengths, uh 532 and
[1:15:13] 1064 in the near IR. So, they're able to get some information about particle size. Uh as we both have
[1:15:19] polarization measurements, so if you have the extra wavelength, Calypso can do a little bit more because they have
[1:15:25] information on particle size. But really, if you want to talk about aerosol types or or aerosol properties,
[1:15:31] which are really what you you use when you're looking at the type, it's better to use multi-wavelength
[1:15:37] Raman or HSRL instruments to do that. Um Um for MPLNET, we can infer dust or smoke versus other aerosol types, but that's
[1:15:46] pretty much the limit. Okay. Okay. Um question 26 is another question about basically joining the network. What's
[1:15:54] the cost of an mini MPL? And that's provided uh we recommend you go to the company's website to look that up
[1:16:01] uh or contact them. Um so, question 27, um basically should the AERONET AOD data be available from the for the same sites as
[1:16:11] the MPLNET? Another question related to collocation. And then what maybe is the maximum distance between the sites?
[1:16:19] Yes. Um so, we we do require collocation with AERONET as I said before, except in, you know, situations where it's just
[1:16:27] it's not appropriate like our extreme sites where it's snows most of the year, it's too cold for the sample.
[1:16:33] Um and in terms of the collocation, we limit the distance between MPLNET and AERONET to less than 1 km.
[1:16:40] Uh ideally much closer, uh especially if you're in a region with a lot of local aerosol sources.
[1:16:48] Uh, and I I again, I would mention there have been some early deployments in the network where we
[1:16:54] uh, did not use AERONET optical depth. Uh, and those I think were some early research cruises that predated man, the
[1:17:03] man portion of AERONET. But, uh, for now we require co-location with AERONET. AERONET. Okay. Okay. Um, Um, so questions 28 and 29 were both uh,
[1:17:17] quite expansive questions. I don't know if you want to try to take some time to answer these now or we can uh, come back
[1:17:25] afterwards and maybe point to some papers or or references for these. Sure. I can uh, I can give a bit of a,
[1:17:34] well, I'll I'll do my best with question 28. 28. Okay. Okay. Uh, I guess I'll say that the
[1:17:41] uh, uh, I guess they're kind of asking what are typical typical depolarization ratios for say ice, water
[1:17:48] clouds, and aerosols. So, water clouds will have very low depolarization. Ice clouds will will have very high, typically 30 or to 40%
[1:17:59] in in that range. Um, Um, aerosol depolarization ratios can vary pretty wildly. Uh, spherical particles such as sulfate and marine aerosols,
[1:18:11] like sea salt, which tend to be more more spherical, uh, unless they begin drying, have very low depolarization also.
[1:18:20] Dust uh, has much higher depolarization. Um, so if it's a thick dust layer, that's typically in the 30% range,
[1:18:27] somewhere there. Um, if you're looking at the volume depolarization for dust, it can be lower. lower. Uh, as I tried to explain in the
[1:18:35] presentation, the volume depolarization is not the same as the particle depolarization. depolarization. Mhm. Mhm. The The uh
[1:18:42] uh volume depolarization ratio is a ratio of our signals. The aerosol depolarization is a retrieved product, so it's more accurate.
[1:18:50] Um in smoke smoke depolarization can vary pretty wildly. Uh depends on the size and the age um
[1:18:57] and the of the smoke particles, but they typically maybe in the uh 15 to 25% range in depolarization. These are all
[1:19:09] kind of vague numbers, that's why I didn't want to give anything specific. Uh in terms of backscatter and
[1:19:14] extinction parameters for MPLNet, those are really not what we would use to explain to someone whether this is an
[1:19:21] ice or a water cloud, that would be more of just the depolarization. But if you want to begin looking at at
[1:19:27] aerosol typing, which is I think what this meant, again that can be very difficult with MPLNet because we're
[1:19:33] using a more simple lidar. If you have multiwavelength Raman or HSRL, you have more accurate backscatter and extinction
[1:19:39] profiles and at different wavelengths, so you can begin to do retrievals of the properties like index of refraction, look at the absorption,
[1:19:47] uh things like that that help you differentiate aerosol species. Okay, great. Um and then question 29 uh I guess similar,
[1:19:59] I don't know if you want to address this a little bit now, but I guess the question's basically how to distinguish
[1:20:04] between aerosols either in the boundary layer or outside of it. Uh Uh it's pretty broad, but I guess if you
[1:20:12] want to provide some information. Sure, the um um So the our our aerosol product provides an aerosol extinction profile
[1:20:23] and our PBL product uh has the mixed layer height. So we can take our retrieved aerosol extinction profile and integrate that
[1:20:32] from the surface to the mixed layer height. height. And that then is the aerosol optical depth in the mixed layer.
[1:20:40] So, that's different than the AERONET optical depth that you're getting, which is the column. So, that's the all of the
[1:20:46] aerosol optical depth in the entire atmospheric column. Um so, the mixed layer optical depth will always be less than the AERONET
[1:20:54] AOD. AOD. And I believe they're referring to the slide I showed on our uh our new products we're developing, our
[1:21:02] level three products where we're looking climatologies. climatologies. Mhm. Mhm. And for the Goddard Space Flight Center sorry, for our site at Goddard
[1:21:10] um um over a 10-year period, there was a difference of about 0.05 aerosol optical depth depth at midday, the height of the mixed layer
[1:21:19] um compared to that of AERONET. So, that indicates that on average at at that particular site, there's about 0.05
[1:21:28] optical depth in the free troposphere. Or also stratosphere, not at the surface. surface. Mhm. Mhm. So, you if you have lidar profiles of
[1:21:37] aerosol extinction and an idea of the PBL height or the mixed layer height, you can determine what the amount of
[1:21:43] optical depth that's in the boundary layer. layer. I hope hope that answered that question. Yeah, I think that that's a good answer
[1:21:50] there. there. Um okay, so question 30, um is the AOD at the MPL uh wavelength obtained from simple
[1:21:58] interpolation of AERONET AOD? Yeah, I'm not sure what uh simple if this is considered simple, but we use
[1:22:08] the a kind of a standard two-order polynomial fit to the AERONET optical depths across the wavelengths. That's how we then get the optical depth
[1:22:15] at 532. Okay. Yeah. Um okay, question 31. Has MPLNET been used for large-scale aerosol transport like guess specifically for volcanic
[1:22:28] eruptions. eruptions. Yes, it has. There's a number of publications publications and studies people have done. You can
[1:22:36] see the book on our our publication page on the website. Um some I listed I believe in the case studies section.
[1:22:45] Interestingly, it's sort of morphing into combined studies of volcanic eruptions and and large fire and smoke events.
[1:22:53] events. Um but there are even a few more in in process now. Um I think people are still they're
[1:22:59] still looking at the Raikoke eruption at this point with our data. But I will mention that it's the the studies are
[1:23:05] being done not just within POLNET, but data from the other lidar networks that are in Gallium because together we get a
[1:23:12] denser coverage globally. Mhm. And then I guess related to that, question 32 again asks about expanding the network but with specific reference
[1:23:23] to South America. So if you want to talk a little bit about the the networks there. there. Sure.
[1:23:30] Sure. Um Um the So you know, with with with some budget constraints with POLNET, my focus for expanding the network has been
[1:23:40] to fill in the gaps between my colleagues in the other lidar networks, most of whom are regional such as
[1:23:46] EARLINET in Europe, ADNET or AD-Net in Eastern Asia, and LALINET who are in South America or really Latin America.
[1:23:56] Um Um They're they're really working regionally to get a denser lidar coverage. So most of where I expand
[1:24:02] POLNET are into regions where there is no lidar coverage. Um so when it comes to LALINET, I've
[1:24:08] been collaborating with them. We have we do have one site that's joint with LALINET. LALINET. Um we are talking about some more POLNET
[1:24:16] deployments into the region. But if you're interested in that uh in that region in particular, I would
[1:24:22] recommend that you contact my LALINET colleagues and there's a link on our GAW website website um to go to the LALINET page.
[1:24:30] Okay, great. Um so, question 33 is specifically about the effectiveness in detecting Saharan sandstorms and their characteristics.
[1:24:42] Yeah, I mean, I I I can say the MPLNET instruments are are very um capable of detecting the presence of
[1:24:49] dust compared to other aerosol types. Um that's not just in regions near the Sahara in this case, but even far
[1:24:56] downwind and remote. Um Um not sure how much more to say about that. Uh again, if you really In terms of
[1:25:05] detecting, yes, in terms of retrieving accurate aerosol properties, especially in the case of mixed aerosol types, it's really better to go to more
[1:25:15] advanced instruments like Raman or HSRL instruments for Okay, so uh question 34, what's the smallest size aerosol that can be
[1:25:26] reliably detected? Yeah, um wasn't uh I've not I've not really thought of it that way, but uh I
[1:25:34] would say that we're we're capable of detecting what I would call normal aerosol size ranges, but not say uh
[1:25:40] cloud condensation nuclei. Mhm. Mhm. Um which should have been CCN. Sorry. Okay, yeah, we'll we'll change that.
[1:25:47] We'll change that. Um okay. Uh so, question 35, uh is it possible to reactivate an inactive station?
[1:25:57] station? Yes, and that happens somewhat frequently. Um sometimes a site will go down for a longer period of time due to
[1:26:03] an instrument issue, and then it will become active again. And sometimes uh uh more or the more frequent scenario is
[1:26:11] that we did a field campaign somewhere that was short-term for maybe a month or two, and then a few years later
[1:26:18] uh we install a permanent station. Mhm. Mhm. Okay. Okay. Um question 36, are you aware of environmental agencies, and I guess this
[1:26:29] is referring to US uh environmental agencies using these instruments for exceptional event demonstrations uh related to the US Clean Air Act?
[1:26:39] Or I guess if any if you know of examples in other countries as well, I guess. guess. Yes, within the US, I don't know if
[1:26:48] well, I should say for MPLnet, we do not have instruments that are at official EPA sites. Mhm.
[1:26:54] Mhm. Um Um I know of cases where I've been contacted and we pointed them to our data, but I'm not sure to what degree
[1:27:02] the data were used. Mhm. Mhm. Certainly not in an official capacity as we're a research Mhm. Mhm. uh organization.
[1:27:09] Um Um Outside the US, we do have colleagues, especially in Taiwan, that are working more directly with the local EPA.
[1:27:18] Mhm. Mhm. In terms of how they were utilized for exceptional event studies, I would or I could put you in contact with them
[1:27:27] if you get a hold of me. Um Um Okay. Okay. Really, we're doing the data processing and provision. The use of the data for
[1:27:35] situations like that uh tends to be a bit removed. Okay. Okay. But it does sound like it, you know, it
[1:27:41] has been used outside the US. Um it sounds like Taiwan would be the the people to talk to if people are
[1:27:47] interested in that. Yes, I I should mention there there is another project called UCAN, uh which is
[1:27:55] uh an effort joint with the EPA to uh measure the boundary layer height at PAM stations, and many of those uh many
[1:28:04] of those groups are doing that by deploying ceilometers. So, there is a growing number of ceilometers at EPA stations, so you'll
[1:28:11] probably start to see certainly the use of that data and their measurements of mixed layer heights more and more as
[1:28:18] time goes on. Okay, great. Um question 37 was the advantage of MPL over a ceilometer? I think you addressed
[1:28:29] this to some extent in a previous question, but if you have anything else to add here, uh for example, is the unified
[1:28:35] ceilometer network going to be included uh in Gallion? Yeah, so uh well, I'll I'll take these questions one
[1:28:43] on the each here. The Mhm. Mhm. So, again, the the MPL still has a better signal-to-noise and a longer
[1:28:49] range profiling capability than ceilometers that are available right now. now. The CL61, since it is now polarized, is
[1:28:58] definitely closing that gap. Uh however, they're still at a near uh IR wavelength, and the data that I've
[1:29:04] seen so far is still definitely more noisy uh than the MPL, so you'll have you know, a a a shorter range that they
[1:29:12] can profile during daytime. Uh however, they're much easier instruments to deploy and work with, so there are tradeoffs between the two.
[1:29:20] That's why it's you can't really say one's better than the other. Um they they're built to do to do slightly
[1:29:28] different things. Um so, as I said, we have intercomparison projects underway now, and I'll probably have a more
[1:29:34] concrete answer after those are complete. complete. Um in terms of UCN joining Gallion, I have uh had some discussions with them
[1:29:43] about that. Um Um and uh I'd say they're kind of at an early stage at this point.
[1:29:51] Okay. Okay. Uh well, I should should mention uh other ceilometer networks um um I'm also in discussion with, and these
[1:29:59] would be your operational networks run by the the weather services. So, in Europe, there's E-Profile, and they will
[1:30:04] be joining or added to our Gallion website shortly uh and then the ASOS network within the US.
[1:30:11] I would like to include their ceilometer data when it's available or or metadata into Gallion as well.
[1:30:18] Okay, great. And then finally question 38, what's the minimum laser pulse frequency to get good lidar retrievals?
[1:30:29] Well, for the MPL, that's fixed at 2500 hertz and it does not vary. Um Um in in general, uh
[1:30:39] what you're really after is not the pulse frequency, but a good signal to noise. So, it's a it's a trade-off
[1:30:44] between your laser pulse energy and the laser pulse frequency. So, you're really after an emitted power to get the right
[1:30:52] signal to noise and that dates that's really dependent on your lidar design. Mhm. Mhm. All right, great. Thank you. So, that
[1:31:00] was all the questions um that we collected um and we'll again be posting this this document after we finalize it
[1:31:07] to the training webpage um in uh the next week or so, but you know, thank you very much again, Dr. Welton for that
[1:31:14] that overview and thank you to the MPLnet team. Um and more broadly, thank you to all the uh ground networks, AERONET, TOLNet,
[1:31:23] MPLnet, and Pandora and the Pandion network who supported this uh training. And finally, of course, uh you know,
[1:31:30] thank you to all our attendees for uh your attendance and your very uh interesting and insightful questions uh
[1:31:38] throughout the training. Uh just as a reminder, the homework should be posted to the training webpage. Um you have about 2 weeks to
[1:31:47] complete that homework assignment and if you do that and also have attended the the five parts of this training, you
[1:31:53] should receive a training certificate uh in about 2 months or so uh afterwards. So, again, you know,
[1:32:02] thank you very much everyone and uh we look forward to seeing you in future Arcsight trainings. Yes, thank you Carl.
[1:32:12] Thanks everyone.
