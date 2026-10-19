# Measuring Surface Subsidence due to Groundwater Extraction with InSAR, Part 2/3

`https://www.youtube.com/watch?v=YE3DeQmd_IQ` · id 72 · 1:54:18 · module 55 — SAR for Detecting and Monitoring Floods, Sea Ice, and Subsidence from Groundwater Extraction

[00:01] Hello everyone and welcome to the second session of our three-part applied remote sensing training, SAR for detecting and
[00:10] monitoring floods, sea ice, and subsidence from groundwater extraction. My name is Erica Podest and I'm a research scientist at NASA's Jet
[00:19] Propulsion Laboratory as well as an instructor with the ARSET program. I'll be hosting today's training and the
[00:26] rest of this webinar series. Today, I'll be joined by Dr. Eric Fielding, who's a research scientist at
[00:33] NASA's Jet Propulsion Laboratory. He'll be focusing on measuring surface subsidence due to groundwater extraction using InSAR. To begin, I'll provide an overview of
[00:47] our training before we begin the session. I'll first be providing an overview of our training before we begin this
[00:56] session. The objective of this webinar series is for participants to learn how to use SAR to detect and address potential
[01:08] disasters related to sea ice, floods, and groundwater extraction. And these sorts of events can have a large impact on human lives,
[01:17] infrastructure, and the economy. So, SAR can be critical in informing on-the-ground efforts on disaster mitigation efforts and resilience.
[01:31] And by the end of this webinar series, participants will be able to generate subsidence maps due to groundwater
[01:37] extraction in order to inform risk and resource management, detect and monitor sea ice to identify potential risks to
[01:45] shipping and coastal erosion. So, that was the first session. And then, the last session, which will be
[01:52] be tomorrow, Wednesday, November 1st, will be be uh to detect and monitor floods in order to more closely monitor increase or
[02:01] decrease of flood waters and better inform disaster response and management. And here we can see an outline of this
[02:12] webinar series. Today is the second session of this three-part series. All presentation slides, recordings, and Q&A transcripts are available or will be
[02:23] available on the training page. There will be one homework assignment which will be which will open on the
[02:30] dates of the final session. That'll be tomorrow, Wednesday, November 1st. And that homework assignment will remain open until November 17th.
[02:40] A certificate of completion will be awarded to those who attend all live sessions and complete the homework
[02:46] assignment before the given date. The given due date. And finally, um before we get started, I just wanted to remind everyone that you
[02:59] have if you have a question to please type it in the questions box. And under this platform, it is uh
[03:06] located in a different place. It's at the bottom right under the three points. There's There's a drop-down menu.
[03:14] And uh one of those three options in the drop-down menu is questions. So, please write your questions there
[03:21] and we will address all questions at the end of the webinar. Um and feel free to uh type in your
[03:28] questions as we go along. The The uh all the questions will be assembled into a Google Doc and that Google Doc
[03:38] will then be posted onto the training page with all the answers. We're very excited to have Dr. Eric
[03:48] Fielding as guest lecturer today. He has taught several other ARSA trainings on the use of InSAR for looking at
[03:55] earthquakes and landslides. Today, he'll be introducing a brand new topic, which is the use of InSAR to
[04:02] measure subsidence due to groundwater extraction. extraction. Thank you so much, Dr. Fielding, for joining us today and for so generously
[04:11] sharing your knowledge and wide experience in the use of InSAR, in this case for groundwater applications. Welcome.
[04:22] Hello. Hello. I'm going to be talking about subsidence from due to groundwater extraction. My name is Eric Fielding
[04:30] at the uh Jet Propulsion Laboratory, California Institute of Technology and NASA Laboratory. Uh and a number of the slides today were
[04:38] prepared by Zhen Liu, who also works with me here at uh Jet Propulsion Laboratory. So, this is part of the series of uh
[04:49] seminar webinars uh for on um using SAR for detecting monitoring and monitoring floods, sea ice, and subsidence due to groundwater
[04:59] extraction. This is session two. Uh and we're we're using um SAR interferometry or InSAR uh to measure the ground surface subsidence
[05:14] due to groundwater extraction. This uh session uh or part of the uh series uh we want to um
[05:26] give some uh uh basic uh understanding of the physics of SAR interferometry. We want to uh I want
[05:35] to to describe how um the SAR or synthetic aperture radar interferometric phase tells us about what the land surface is
[05:44] doing and uh the subsidence measurement of subsidence and we're going to be doing a uh demonstration of uh data
[05:53] processing processing uh to analyze a time series of these uh SAR interferometry measurements to measure how the um
[06:04] ground surface is changing over time. And we give a brief uh introduction to how how to understand the how the information
[06:16] from SAR interferometric images and the time series analysis reveals uh land subsidence uh due to groundwater extraction in addition to
[06:28] other uh processes uh not covered in this webinar. So um to give a a more detailed introduction,
[06:36] you should check these previous ARSET tutorials from uh 2017 uh the basics of radar synthetic aperture radar and SAR
[06:47] processing and data analysis and introduction to SAR interferometry. Uh in 2019, there was interferometric SAR for landslide observations that went
[06:57] into into um um making an interferogram. And last year in 2022, we did a interferometric SAR time series analysis
[07:08] for looking at a landslide. Uh this year, we're going to be using a similar type of time series analysis to do uh
[07:17] subsidence uh measurements uh for over an area of groundwater extraction. So uh we're going to do a quick review.
[07:26] Um Um I'm going to go through this quickly because uh it's been covered in more detail in those other webinars that you
[07:32] can review on YouTube. Um Um the the 2017 ARSET training and the 2019 training uh gives more details on the on
[07:45] the deep we actually do SAR interferometry and and the SAR interferometry interferogram production. For this tutorial, we're
[07:54] going to be using data that's pre-processed and not going through those those preliminary steps. The key thing about
[08:03] SAR interferometry is that we measure the phase of the SAR signal. A lot of the other seminars
[08:10] in this series and and elsewhere here in ARSET are using the amplitude the the the amount of radar
[08:18] return. return. But we're actually using the phase of the um of the radar signal which is a
[08:28] a different aspect of SAR that is unique for measuring the surface subsidence. And the phase is a measure
[08:40] of the distance between the the radar antenna over here on the um shown by this cartoon and the the objects on the ground that
[08:51] reflecting the radar. Um Um The key thing is that there is millions of of of cycles of the radar waves between the
[09:01] the satellite and the ground. We don't know the the exact number and that's one of the sources of
[09:09] um um confusion sometimes in in SAR interferometry is that all of the SAR interferometry uh measurements are
[09:19] are relative. Um Um And there's this extra factor that the the number objects within that radar pixel are are
[09:34] numerous. numerous. And And so the actual phase that's returned by a signal a single radar image are relatively random.
[09:44] But But if the objects here in this pixel stay in approximately the same location relative to each other, then we can take
[09:53] a second acquisition and do interferometry interferometry or or very very basically subtraction of the phase to measure
[10:04] measure this distance between the antenna and the ground. Not we can't measure the absolute distance, but we can measure how much
[10:12] the distance changed. And so as a basic idea, we have this phase that has a whole bunch of extra
[10:24] constants constants that are due to that distance um um in phase of image one and another another image
[10:36] with those with the same constants, we can't determine those constants, but if the constants of of all the
[10:44] radar propagation stay the same, then we can take the difference and it cancels out all those other constants and we can
[10:53] therefore measure the ground surface. surface. There's basically two types of SAR interferometry. interferometry. There's the mapping and topographic
[11:07] determination. That's done by using two radar antennas that are imaging the ground at the same time. The
[11:18] mission that I worked on in was the 2000 NASA shuttle radar topography mission, which was now which is recently
[11:28] reprocessed and released in 2018 as NASA DEM. DEM. that used the two uh radar antennas on the space shuttle,
[11:37] but there's also airborne systems and uh systems such as the uh the the German TanDEM-X that also used
[11:48] this two satellite or two antenna on a single satellite uh method. And this produces very high-resolution topographic maps
[12:01] um um by using SAR interferometry. And the second type of SAR interferometry is what we call repeat pass interferometry,
[12:09] where we measure the change in the ground surface, not the elevation. In this case, we actually use the
[12:16] elevation uh data from SRTM or another data source and subtract out the effects of that elevation to measure the displacement of
[12:29] the ground surface. Um and that's what we're going to be talking about today. So, in this case, uh
[12:36] we're doing what what we call differential interferometry. interferometry. So, we have the the same radar antenna uh or a very highly similar one.
[12:48] Basically, Basically, several satellite systems now have multiple uh satellites that are basically identical and they come back
[12:57] to the same point in space over the Earth and at a different time, and that's repeating the pass of the over
[13:06] the Earth, and we take the phase difference, and that tells us the difference in the range, which is shown as row in this equation.
[13:16] Uh so by taking the uh interferogram, we can make a map of uh the how much the ground moved in between
[13:27] those two times. Uh and this the little uh picture here is the map of uh the Hector Mine earthquake that happened
[13:38] here in Southern California in 1999. One of the key things to remember is that um the sensitivity of uh SAR interferometry
[13:47] to topography depends on the um the distance distance uh between the two radar antennas. Um Um and it depends on the uh total path
[13:59] length. Uh that means that uh we're uh limited in the resolution of measuring topography. It's usually on the order of
[14:09] uh meter or or tens of meters. SRTM had a sensitivity around uh 10 m. Um but for measuring displacements, it
[14:19] only depends on the radar wavelength. And that's uh this displacement sensitivity here in the second equation. But it only depends on 4 pi over the
[14:30] lambda, which is the radar wavelength. Um Um so it's we're much more uh sensitive to measuring uh
[14:39] surface displacements. We can measure to a small fraction of the radar wavelength. And uh with radar wavelengths uh
[14:49] of presently operating satellites between 3 cm and 24 cm, we can measure uh uh a few millimeters or a few centimeters
[14:59] of displacements. Uh another thing that's uh that can cause uh confusion with um starting with the uh
[15:11] the full radar processing is the phase unwrapping step. Uh in this particular uh demonstration, we're going to be using data that's
[15:19] already been uh uh unwrapped. unwrapped. The The phase measurement that we can we do measure with SAR interferometry is
[15:29] actually actually uh uh modulo 2 pi. Uh that means that the phase ends up being wrapped. That interferogram that I
[15:39] showed showed previously had these color contours. Those are the wrapped fringes. Uh Uh the distance between each one of those
[15:48] contours is one um um it is half of the radar wavelength. In that case, it was um
[15:57] uh uh 6 cm radar. So, each one of those contours was 3 cm. Um Um but to
[16:05] and for most purposes, we want to look at the unwrapped phase. So, we have to do an extra processing step to figure
[16:12] out where these jumps are and figure out how many jumps have need to be applied to each pixel and get an unwrapped
[16:20] phase. phase. It's See the other uh webinars for more explanation about that. that. The other uh important thing is
[16:31] what we call the correlation or coherence of the radar. We measure the coherence um um uh by doing a correlation
[16:43] uh which is just looking at how uh correlated the phase is for pixels that are nearby. Um
[16:52] Um the InSAR signals uh become incoherent due to a number of processes. There's the thermal and processor noise that's
[17:02] uh uh introduced in the in the radar acquisition and the uh uh uh in the radar signal processing.
[17:12] There There that's generally pretty low in most cases. cases. There's the um effects of the the geometry. If the radar antennas are
[17:23] further apart, then we start to get some different geometry and volumetric scattering. scattering. In some cases, if the radar antenna is
[17:34] rotated, that adds adds to the noise. And then there's this uh issue that I mentioned at the beginning
[17:41] of uh whether those objects that are um reflecting the radar stay in the same uh location within the pixel.
[17:50] Um if there's things moving around within the pixel, then that also uh causes uh loss of coherence or or
[18:00] decorrelation. And um that's one of the the key um sources that that is the the key source
[18:14] of noise for SAR interferometry. And one of the things that we try to uh estimate in the analysis to have a
[18:25] better better idea of what the quality is of the final measurements. measurements. Because this this uh uh correlation
[18:34] directly affects the height and displacement accuracy. And if the correlation is very low, then it affects the ability ability to unwrap
[18:43] the phase correctly. So, the uh other key thing is that the correlation effects are multiplied instead of added.
[18:53] Uh Uh Some of the other effects in SAR interferometry are added together, but the correlation or coherence is
[19:02] multiplied. So, that means that if any one of these factors is low, then the total coherence is going to be
[19:09] low. So, that's one of the things to remember remember uh when looking at um uh interferometric uh
[19:17] products. products. And so, as I mentioned earlier, the three radar wavelengths that we use uh for most satellites these days uh
[19:28] are L-band, that's 24 cm, uh C-band, that's 6 cm, and X-band, that's 3 cm. Um Um In this uh particular um
[19:43] slide over here, we actually have the L-band and X-band acquired at the same time. This was from the shuttle imaging
[19:50] radar mission that flew in 1994, where we had uh actually all three of these radar wavelengths operated at the same time.
[19:59] And you can see there's quite a a lot of difference between the pattern of radar backscatter backscatter uh
[20:06] uh at the different radar wavelengths. Uh the L-band tends to go through the trees and uh reach the ground,
[20:15] um which is better for SAR interferometry in in what if you have any type of vegetation. Um
[20:23] Um whereas the X-band tends to bounce off the tops of the trees, and therefore uh if the trees are moving around, then the
[20:31] repeat pass interferometry can become incoherent. incoherent. C-band is somewhere in between, uh uh and also can also be affected by heavy
[20:44] vegetation. vegetation. Uh the NISAR mission that's going to be launched next year will have a an additional band that's uh 12 cm.
[20:53] It's called S-band. And we can take a a look and see what the effects of the radar wavelength are
[21:00] on the coherence. This is also from the shuttle imaging radar mission. Um the shuttle uh radar mission
[21:10] uh in 1994 flew twice they in April and October. October. Uh so we have a 6-month time interval.
[21:18] They managed to steer the shuttle the space shuttle into exactly the same location over the earth so that we could
[21:24] do this SAR interferometry. And And on the left of these two figures is the uh C-band or 5 6 cm uh wavelength. On
[21:35] the right is the L-band. And we can see that coherence is much higher at L-band than it is at C-band.
[21:42] Over here on the right panel here is a a map of the normalized difference vegetation index, a standard measurement
[21:50] of uh vegetation uh content and you can see the high uh similarity between the vegetation index and the L and the
[22:00] coherence shows that the uh vegetation is is the main cause of the loss of coherence during this 6-month time
[22:08] interval. interval. So So that's the background about SAR and SAR interferometry. Uh these are uh uh some tables about the satellites that
[22:20] are available for doing SAR interferometry. These are the um um satellites that uh have been around for a while or but
[22:31] largely now not in operation. Uh the most of the early uh SAR interferometry work was done with the
[22:38] European ERS-1 and ERS-2 uh between 1992 and uh 2001. Uh ERS-2 actually lasted for another 10 years but the um
[22:54] gyroscopes weren't working well and it um um the data from that time interval are more difficult to use.
[23:04] Uh Canadian uh Space Agency launched uh RADARSAT-1 RADARSAT-1 and it operated from 1995 to 2013. European Space Agency launched Envisat
[23:17] in 2003. It operated until 2010. Uh Uh it actually was operated in from October 2010 to April 2012 in a
[23:32] different orbit, which was much less useful for SAR interferometry. Uh Uh Japanese uh Space Agency Aerospace Exploration Agency JAXA launched a
[23:44] satellite called ALOS that was on operated from 2006 to 2011. All of the ALOS data is now available
[23:54] online from the uh Alaska the NASA Alaska Satellite Facility. Facility. The German Space Agency launched two satellites TerraSAR-X and TanDEM-X. They
[24:07] fly close to each other to allow that uh topographic mapping. And those two are still actually in
[24:13] operation. operation. Uh Italian Space Agency launched four Cosmo-SkyMed satellites. Uh Uh one of those has been retired, but they
[24:27] have started operating a newer next-generation satellites. Canadian Space Agency launched RADARSAT-2. That's almost only used for commercial purposes.
[24:38] Uh but it's still in operation. So, the the newer spacecraft that are present are the main uh spacecraft used
[24:47] today are uh Copernicus Sentinel-1 Sentinel-1 uh uh and it at the ALOS-2 satellite. Sentinel-1 had uh uh two satellites launched into the same
[25:04] orbit, uh Sentinel-1A, Sentinel-1B. Sentinel-1B had a problem in December 2021, so it stopped operations. Sentinel-1A is still operating.
[25:16] Sentinel-1C satellite uh is ready to replace uh Sentinel-1B. Uh the satellite is sitting there waiting for a ride to space. Um
[25:27] and they're not sure when that's going to be, but we hope it's going to be in in sometime next year.
[25:34] And of course, I work at NASA, so uh we are very much looking forward to the NASA-ISRO SAR mission
[25:41] that is planned for launch in early 2022. 2022. I'll say more about that in a minute. There are other um satellites. The
[25:50] Argentine Space Agency has launched two satellites in the SAOCOM-1 series. Um Um the amount of data acquired is uh
[26:01] somewhat limited, and uh the data access has has uh requires getting an arrangement with uh the Argentine Space Agency.
[26:10] Uh the JAXA is planning to launch ALOS-4. ALOS-4. Um Um it's also ready for launch, but is
[26:18] waiting for its uh rocket to be uh ready to launch. Um the Italian COSMO-SkyMed next generation, they've launched two of
[26:27] those. They have two more ready to be launched. Canadian Space Agency launched the RADARSAT Constellation Mission, uh and
[26:37] it has three satellites, uh uh uh but that data is more primarily being acquired over Canada and available for
[26:44] Canadians. Canadians. Uh there's been a number of other satellites. Uh I should point out the Spanish PAZ
[26:51] satellite, which is basically a clone of TerraSAR-X. TerraSAR-X. It's It's um launched into the same orbit to the
[26:59] allow um acquisitions uh and and repeat pass interferometry with TerraSAR-X. TerraSAR-X. The new space satellites uh Capella Ice
[27:09] Eye and Umbra, um those are acquiring data, but they had do not have the uh orbit control to systematically do
[27:20] um SAR interferometry, although they have had some uh cases where they were able to get see the satellites were getting close and
[27:29] able to do uh SAR interferometry on on a few uh examples. examples. So, I should say a little bit more about
[27:37] the uh NASA-ISRO SAR mission. NISAR NISAR The NISAR mission was um is uh ready for launch. Uh we are hoping
[27:50] it's going to be launched in February, just a few months from now. It's presently in India um
[27:58] um at the ISRO uh uh testing facility. They're uh test They've connected the the radar structure with the uh main spacecraft
[28:09] uh bus built by ISRO and they're testing all the components and uh it will be uh launched on an uh
[28:18] ISRO rocket uh from India. Uh we hope uh in February or or March of 2024. Uh as I mentioned earlier, it has uh two
[28:29] radar wavelengths. Um the L-band radar built by NASA and the S-band radar built by ISRO. And they're both on the same structure
[28:39] uh uh but it using a um reflector uh uh unlike a a of the other radar systems so that we can actually
[28:49] operate operate the L-band and the S-band simultaneously. simultaneously. And all the science data will be free and open
[28:59] and available from uh uh the S-band from ISRO and the L-band from NASA. NASA. Uh there's it's going to have a 240 km
[29:10] wide swath very similar to the Sentinel-1. Uh but we're using a different technique. It's called SweepSAR which makes the SAR interferometry much
[29:22] easier to deal with because uh uh there's some issues in the in the way that the Sentinel-1 satellites operate
[29:32] that that add extra complexity uh which we believe the ISRO's NISAR NISAR um SweepSAR method will uh
[29:45] avoid and provide better quality data over um over land. Uh that's The other thing about the NISAR mission is that it's designed to
[30:00] have very high uh capability of acquiring and downlinking data. So it's going to be turned on over land every
[30:08] time it's over over all land. And the other thing is that it's going to be uh uh
[30:17] uh operated in a mode where it's looking to the the uh south so it's going to have much
[30:23] better coverage of Antarctica than existing previous radar satellites uh which generally look to the north uh except during um
[30:35] temporary uh change change changes in their configuration. Uh Uh So uh w- I can't get into too much detail the the
[30:46] but you can see the uh nisar.jpl.nasa.gov nisar.jpl.nasa.gov website for a lot more information about NISAR. So, um
[30:58] I'm going to talk about uh using uh s- s- not uh SAR interferometry to measure subsidence from space. On the left here
[31:06] is a uh actually an old image uh made by uh Geo Peltzer uh who here at JPL uh when he first started
[31:16] looking for uh doing SAR interferometry over the Los Angeles area to look for faults, he saw this very strange pattern in the area of
[31:26] uh near Pomona. And it turns out that uh there was uh ground water extraction here. He made this uh neat uh
[31:34] three-dimensional perspective view uh of the uh InSAR phase and added in the uh uh uh Triple A street map here to show how
[31:46] that uh ground surface is highly exaggerated. The actual amount of deformation here is 15 cm and it was over 2 years. Um
[31:57] but it definitely was a uh uh distorting the ground surface here in the near the city of Pomona.
[32:07] On the right is an example of um uh subsidence that happened in Arizona. Uh it's big problem with ground water
[32:15] extractions in some parts of Arizona and um they had their uh rates up to uh 10 cm
[32:24] 11 cm per year and it causes uh problems such as these localized sinkholes, uh fault reactivation uh and many other problems.
[32:37] So, how does um the extraction of ground water actually cause the ground surface to go down? Um
[32:46] Um this is a a cartoon from uh a paper by Devin Galloway and others. Uh we have this
[32:53] uh uh sand and gravel in the subsurface and and especially the uh the silt or or clay layers in the um
[33:06] in the uh subsurface has um the uh the clay uh particles are um generally sort of flat. So, when you if
[33:20] you take the water out of it, then those particles will rearrange themselves and and collapse and that reduces the volume which then
[33:29] lowers the land surface. So, just some part of the when when these uh uh clay layers uh uh have the water extracted, then it
[33:39] tends to permanently uh reduce the volume of water that it can store because the particles have been
[33:46] rearranged. In the s- more sandy layers, uh the ground surface can be uh can recover uh when because the s- the
[33:57] clay sand particles uh do not completely collapse, but the water can um can be re- refill the the spaces. So, there's uh in
[34:09] most cases, there's a uh both a seasonal uh variation of water that causes uh uplift and subsidence and there's a a long-term uh
[34:21] irreversible inelastic uh subsidence. Uh this is an example of the seasonal deformation over the area of uh Los
[34:30] Angeles Angeles uh this and Santa Ana. There's a a big groundwater basin called the Santa Ana basin to the uh
[34:40] southeast of Los Angeles uh and if we look at um um an April to September uh during the dry season interferogram,
[34:52] that shows uh several centimeters of subsidence. If we look at a February to August, we also see subsidence. But, if we look at a
[35:03] September to January interferogram, um we see actually uplift. If you look carefully, the uh the colors of these
[35:11] fringes are going the opposite direction. direction. And that means that uh the ground has gone back up during
[35:18] the rainy season. And if we take a a 1-year interferogram from 1996 to 1997, we can see that the
[35:27] ground surface actually reached the same level uh after 1 year of going down and then back up. So, this is the seasonal
[35:34] deformation that's due to those um more sandy layers where the groundwater has been recharged. Uh Uh so, the the paper is here uh listed on
[35:46] the slide. So, most of what I'm going to be talking about to we're going to be talking about
[35:51] today is a the Central Valley of California. The Central Valley is this very large valley uh that runs a large
[35:58] part of the state. The northern part's called the Sacramento Valley, the southern part's called the San Joaquin Valley.
[36:08] Most of the subsidence is happening in the San Joaquin Valley. This is a a huge uh agricultural area
[36:16] and and uh it has uh estimated uh agricultural agricultural output of about $17 billion a year. It's also about 1/6 of all the irrigated
[36:28] land in the United States. And it's about 1/5 of all the groundwater extraction is from this aquifer system.
[36:42] So as I mentioned one of the earlier satellites is this ALOS satellite from JAXA. This is a profile
[36:52] showing showing this on the left here is a wrapped interferogram because this is L-band. These color contours are 12 cm.
[37:01] So there's a total of about 24 cm of subsidence. subsidence. Um Um and on the right here we're comparing
[37:10] the on the red line is the interferometry measurements and the blue line the water elevation. And we can see
[37:18] as the water has been extracted over this this 4-year interval generally going down the land surface is
[37:27] also going down. This is a animation of that groundwater extraction subsidence bowl with a fancy 3D animation.
[37:39] Showing the subsidence between 2007 and 2011 2011 as both color and highly exaggerated vertical exaggeration motion. motion. This is you know exaggerated
[37:57] probably a million times. It's uh it's a total uh deformation around 70 cm over those 4 years.
[38:12] So this is the subsidence bowl that in the in the southern San Joaquin Valley that we're going to be looking at in
[38:18] more detail uh, the demonstration later. And so, this is another, uh, way of uh, comparing the, uh,
[38:30] the PALSAR, uh, measurements in the in the red line to the, uh, to our GPS station that's, uh, in in the
[38:40] same, uh, area. Uh, the blue the green line here is the, uh, GPS measurement, which is measured
[38:47] every day. Um, the PALSAR data is acquired roughly once a month, uh, once every, uh, uh, 2 months.
[38:58] Uh, Uh, the PALSAR data, uh, only covers between 2007 and 2011. Uh, but we also have, uh, the water
[39:11] surface elevation, uh, measurements. The, uh, the water surface elevation is what the, uh, uh, on the on the right, uh,
[39:23] uh, uh, axis, uh, here with the blue colors, and they only measure the water surface elevation, uh, once a year, or twice a
[39:32] year. So, we don't see the the details of the seasonal variations, but we can see this sawtooth pattern as the ground
[39:42] as the water recovers during the uh, rainy season, uh, but is withdrawn during the summer dry season.
[39:50] Um, Um, there was a an overall a rapid decrease between 2007 and 2010. Uh, when when there was a drought, the
[40:01] the water levels recovered somewhat in 2011, 2011, uh, in 2012, when there was more rainfall, and they extracted less water.
[40:12] This is a major, uh, issue in the state of California. They passed a new law in uh, uh
[40:19] 2015 after seeing some of these uh extreme amounts of subsidence due to the groundwater extraction. And it's a uh
[40:29] the uh California Department of Water Resources has been using SAR interferometry since about 2014 uh to monitor the effects of this
[40:40] groundwater extraction uh in in the Central Valley and and other parts of the state. Uh This is another um
[40:54] map uh showing using the uh Sentinel-1 data data uh uh and comparing uh the uh So So Sentinel-1
[41:06] Sentinel-1 uh is was launched in 2014 or really started acquiring data in 2015. Uh Uh So this uh is a comparison on the right
[41:17] here between the 2015-2017 Sentinel-1 data uh and the 2000 the ALOS-2 from 2007 to 2011 to 10.
[41:29] Um Um the pattern is very similar uh but the subsidence was actually even faster. These are in rates per year
[41:38] uh during 2015-2017 because we had another drought uh during those years. Uh Uh We've had uh drought is a is a
[41:50] on comes and goes in California and uh that's one of the reasons that uh the groundwater extraction uh
[41:59] ex- varies rates very dramatically between one year and the next uh depending on how much rainfall uh
[42:07] there was. This particular year, 2023, we had a huge amount of rainfall in the in the rainy season and the groundwater
[42:15] extraction has been uh uh very almost completely stopped. Uh in fact, they're actually allowing a lot of the water to excess
[42:25] water uh to uh be uh go back into the ground to recharge some of these aquifers uh with the uh huge amount of rain that
[42:35] we had in 2023. Uh these are comparisons between the uh the radar uh InSAR time series and with
[42:46] uh more GPS stations and we can see the very uh close uh match between the uh the GPS and the InSAR uh
[42:57] both on the overall long-term subsidence and the uh the seasonal cycles. Uh Uh And this is a a comparison between the
[43:10] uh water surface elevation uh again and at a well that was monitored more uh uh more frequently. Uh this well uh was
[43:23] located in the San Joaquin Valley. This was published in uh Jean Liu's paper here uh Let's see. Yeah. To the Geosciences
[43:32] 2019. 2019. Uh the orange line shows the uh water surface elevation and the blue line shows the uh
[43:42] uh the ground subsidence. We notice that the uh groundwater uh sub- uh elevation minimum was in 2015 or
[43:51] late 2015, but the groundwater um I mean the surface uh elevation uh change actually had a minimum almost a year later and that
[44:03] indicates uh that there's likely a a latency or a lag and it as the uh um the deeper groundwater layers can
[44:13] take uh maybe a year for the water to reach uh those deeper levels. So, even though the
[44:20] water level started in recovering in 2016 and 2017, uh the surface elevation did not recover as uh until much later.
[44:35] And this is also a comparison uh with um precipitation precipitation and the um uh in the precipitation here in the in
[44:47] the cyan colors at the bottom, we can see this big impulsive higher precipitation in 2017 uh at the end of that particular
[44:55] drought. Um on the top here is a measurement of the overall overall uh mass of water in the entire um area.
[45:07] Uh that's measured with the GRACE satellite. satellite. Uh gravity satellite. Uh we can see that the gravity satellite is also showing
[45:16] the same uh overall removal of of water for over the whole whole basin. So, So, um um I'm going to give a demonstration now.
[45:34] Um we're going to be using uh data from the uh the preprocessed interferograms from the Sentinel-1 satellite. Uh they were
[45:45] that's been uh systematically processed by the ARIA project under the uh getting ready for NISAR um um uh
[45:54] uh cro- system. Uh NASA uh uh wanted to systematically process some of the Sentinel-1 data over a number of
[46:05] places around the world so that people could start getting used to using these um um um um systematically processed geocoded
[46:15] unwrapped interferograms and these are now archived at the NASA ASF DAC. Um Um the data format of these um
[46:26] interferograms is very similar to the similar to the uh unwrapped interferograms that are going to be processed for NISAR so we feel
[46:34] it's very important for people to start using these uh for prepare for NISAR but they're also useful in themselves and you can
[46:42] find the available um um preprocessed uh data by searching at the Alaska Satellite Facility uh DAC search
[46:53] search um tool and you can also uh download the data through the ARIA Tools package. The ARIA
[47:00] Tools package is written here and there's documentation uh for that at their ARIA Tools documentation GitHub. Um
[47:13] Then uh once we've downloaded the the unwrapped interferograms we can do a time series analysis to see
[47:22] how the groundwater is uh subsiding subsiding uh over a a time interval. We are doing uh using this uh package called MintPy
[47:34] that does the time series analysis. Um once we've got the the ARIA data set up uh we can load it into MintPy and
[47:45] extract uh how the water uh the groundwater uh is changing over time. And um MintPy is also available open source on
[47:56] GitHub and we from this uh web page and has a excellent tutorial system. Uh with some more of these notebooks. In
[48:08] fact, with the notebook I'm going to be using here today is uh adapted from one of the MintPy
[48:15] notebooks. So, um I'm going to do a demonstration. Uh this uses the that uh the pre-processed data. I'm going to be
[48:29] using um a special uh cloud processing system that uh you can get an account uh to use. Uh the
[48:38] Alaska Satellite Facility has a thing called the OpenSARLab. And you you they can uh provide for non-commercial purposes, you can get a
[48:48] um um uh uh a virtual machine that runs on the in the Amazon cloud to do these
[48:56] calculations. It's all pre-configured, so you can run these notebooks without having to do um your own installation.
[49:05] Um and I'm going to be using that system to uh to run this notebook. See this website for
[49:14] uh uh requesting an account on the OpenSARLab. Also like to uh acknowledge uh uh Jean Jun uh who's one of the main
[49:28] authors of MintPy. He's made a huge amount of effort to uh build this uh system for the time series analysis.
[49:37] There's a a number of people that have worked at uh JPL on the ARIA um processing, especially Harash Pathak and
[49:45] David Bekaert who uh uh and on the on the time series analysis and the OpenSARLab team that uh built
[49:53] that system to better uh uh to make it available and maintain it. And of course the sponsors at NASA and
[50:07] we we a lot of the JPL analysis was actually supported by the California Department of Water Resources.
[50:17] Uh these are the email addresses for me and Jean Liu. If you want to detailed questions about
[50:25] the the use of SAR or InSAR to measure subsidence, Jean is probably the better person to ask. Uh
[50:34] and the ARSET website. So, So, thank you for this that's the concludes the the main main slide presentation.
[50:47] I'm going to go now to the the notebook. So, the Jupiter notebook we don't have don't have time to go into details about
[50:58] how Jupiter notebooks work, so I'm just going to go through this. Uh Uh As I mentioned, this is a notebook that
[51:05] was originally developed for the Mint by the Mint by uh uh group uh by uh Paresh Vatani and Jean Yuanjun.
[51:15] Also with David Bekaert we uh showed last year the Los Angeles landslide time series analysis, so we
[51:25] modified it again to do this presentation. presentation. Uh Uh I'm going to be using a data set that was preprocessed for
[51:36] the Central Valley of California that was a part of the used for the NISAR solid earth team uh
[51:45] algorithm algorithm theoretical basis documents. Um And that notebook is also available uh uh at this website, uh this GitHub site.
[51:57] And we're going to be using the Aria S1 uh uh Sentinel-1 uh geocoded unwrapped interferograms preprocessed uh
[52:07] uh under the Griffin project. Um to save time in this demonstration, I'm going to be um We've pre uh
[52:17] pre-done or downloaded the data and ran the Aria tools processing. I put the steps in here, uh but we we've uh
[52:27] taken the data already preprocessed and staged it into the Amazon uh web uh data sent uh uh in the the uh Amazon um simple
[52:42] storage system, the S3. Um Um So, the data's already preloaded uh for that specific area, and we're going to
[52:52] be using that just to save time during this demonstration. So, uh this first uh cell of the notebook, I'm going to just
[53:00] uh uh clear all clear the previous run here. Uh just sets up imports the uh the software
[53:13] and sets up the uh imports uh the MintPy software. Uh Uh The next one here, we're going to be
[53:25] using a a pre-pro- a data set that we had previously processed for the Central Valley. Valley. Uh track 144.
[53:33] Uh Uh And this next uh cell says we're going to use the staged data here. Uh so, it's already been pre-processed
[53:43] and uh into that we already ran the time series analysis. Um, so, it just these uh these uh commands here just
[53:55] uh go to the um Amazon S3 bucket and uh download the uh the pre-processed zip file file uh because it's going from one Amazon uh
[54:08] website to another, it can download very quickly. It's downloaded three 2 GB in just a few seconds or less than a
[54:16] minute. minute. Um, in this case, it's uh it's finished preparing the stage data because I've already done uh
[54:27] it unzips it uh if in this case, I already unzipped it, so it just skipped that step.
[54:34] Uh, but when you run this notebook, it'll it'll do the unzipping. The I've put in here the commands to run
[54:42] the Aria commands to do the download the exact same data set. You can modify these commands to download data for any
[54:49] other place on the where the Aria data is available. Um, if you want or to download a different time interval. In
[54:56] this case, we're only downloading the data from the year 2018 to limit the the amount of time that
[55:04] uh we're going to analyze. And there's a total of um uh 90 uh scenes uh 90 interferograms processed by the
[55:21] in the Aria uh uh geocoded unwrapped interferograms for that time interval. Um, uh uh these are commented out, that's what the
[55:36] uh little hash symbol is at the beginning. So, they're not actually running running anything. anything. Uh but, you can uncomment them if you
[55:44] want to uh see So, we're going to be using uh the the Mint MintPy um analysis program,
[55:57] small baseline app.py. And it's um If you run just small baseline app {dash} {dash} help, then it prints out a
[56:09] a list of how all the parameters work. Um Um The next thing you have to do is set up
[56:17] a a configuration file. This This cell sets up a a configuration file that we're going to be using
[56:24] uh to process this data set. It's um It's just uh saying where the data is located and um
[56:34] that we're uh some other parameters about how we're going to be doing the processing. processing. Uh These are the steps again of how to do
[56:49] the area processing. This is the uh step to actually load the the data into the um um MintPy data set.
[57:00] I cuz I've run this before, it ran very quickly. quickly. Uh Uh So, the in uh when you run the MintPy,
[57:07] it uh loads all the data into this um uh directory called inputs. Uh there's this all over here on the
[57:16] left here is the inputs directory. Um It has these two main files, uh geometry .geo and the interferogram stack. That's
[57:33] the interferograms um loaded into uh the MintPy format. And if we look, we can run this info.py
[57:42] to see what's in that uh interferogram directory. There's 86 interferograms and each interferogram has been uh uh has an area of 11,000 1,000 177
[57:59] pixels by 3,000 pixels. Uh Uh And there's different layers. One of those layers is the coherence. That's
[58:07] the um uh correlation-based coherence, spatial coherence that we mentioned earlier. Uh and the unwrapped phase uh plus other
[58:16] information such as the date of each uh the two dates that were used to make that acquisition and the uh
[58:23] perpendicular baseline between uh the uh data sets. There's also a geometry file that has all the information about the
[58:35] uh azimuth and incidence angle of the two lines line of sight angles and the uh the height
[58:43] of the DEM at that location. Uh Uh I'm going to just run all the rest of the cells here.
[58:57] Um one of the things that uh for some satellites there's important is the how the perpendicular baseline is varying
[59:04] with time. Uh with the Sentinel-1 satellites, they keep the uh the perpendicular baselines very short. So basically that we don't have to worry
[59:13] about this, but for other satellites sometimes this is something we have to worry about. Um Um Uh this plot here it shows the uh
[59:23] coherence matrix. Uh that's the coherence for each one of the pairs. It's generally it's all here in the blue. Uh, it means that all the
[59:31] the coherence of all these interferograms is high and they're good quality. And the bottom plot here shows the
[59:39] network of the each one of these lines is one of the interferometric pairs connecting the dots where the dates of
[59:46] the acquisitions are. And you can see for this purpose we're using uh, the interferograms that have short time
[59:54] intervals, not uh, long time intervals. Uh, and because this is an agricultural area area where the long time intervals tend to
[1:00:01] lose coherence. One of the other uh, things that's included with the um, the the decoded and unwrapped interferograms is
[1:00:12] something called the uh, the connected components mask. Um, that's a mask of how well the uh, phase
[1:00:20] is is connected. And you can see there's an area here to the east uh, that's not well connected. That's
[1:00:28] the Sierra Nevada mountains where uh, is some of the um, interferograms in the winter are snow covered
[1:00:36] covered and there's some other plate places here where uh, some of the interferograms are are are less connected.
[1:00:44] Uh, one of the things I mentioned earlier is that the interferograms are measured relative to uh, a reference point. Uh,
[1:00:57] so we have to choose a reference point. In this particular case, uh, we uh, allowed the midpoint to choose the reference point.
[1:01:05] It goes and grabs uh, looks at these average of that spatial coherence map and finds a place that
[1:01:13] where the coherence is high and it shows the uh, reference point here at uh, latitude 36.6 degrees uh, longitude
[1:01:24] 119.26. So what that all the measurements will be relative to this reference point in in the rest of the analysis.
[1:01:35] The next step is to run the the actual network inversion. We take those pairs of interferograms and do a
[1:01:45] least squares inversion to estimate what deformation there is on each point each day and each point. Um
[1:01:57] Um and then we can take that set of dates and calculate the velocity which is the average velocity over the course of that
[1:02:05] year. year. In this case we're calculating the velocity over the over the year of 2018. And then this next plot here we measure
[1:02:16] the we plot the measured velocity. This black square here is the reference point so all these velocities
[1:02:24] are relative to this reference point. Um in in the green colors are the areas where it's basically close to zero.
[1:02:36] Uh Uh a displacement relative to reference point and this large blue area is the area of the rapid subsidence. Uh
[1:02:45] due to the groundwater extraction in this in the San Joaquin Valley. These white areas are the areas where
[1:02:53] the um the coherence is low and we decided we mask those out as being unreliable unreliable measurements.
[1:03:07] Due to low temporal coherence which I'll talk about in a minute. And that's the area to the east when
[1:03:14] this Sierra Nevada mountains where there was snow There's also this sort of oblong area to the uh
[1:03:21] in the little bit to the left of uh of the and below the center. That's an area of uh the that floods every year
[1:03:30] tends to flood every year. It's called the Tulare Lake. That lake actually flooded uh dramatically this year uh due to the
[1:03:39] extreme rainfall in 2023. So, the uh the area of low coherence is going to be much larger for 2023
[1:03:49] uh due to that uh flooding. Um Um and we can see that the color scale here is going down to uh
[1:03:58] 25 uh centimeters at the bottom. Uh so, there's actually a very large amounts of uh and this is in these these have been
[1:04:06] converted to centimeters per year. And so, these the subsided rates are are very high up to 30 centimeters per year
[1:04:14] uh during 2018. There are other places in the world, especially uh Mexico City, uh that are subsiding even faster than than this
[1:04:24] area. area. Uh I think in some cases in some years uh Mexico City is subsiding at up to 60
[1:04:31] centimeters per year. So, these rates are are very high in in many parts of the world um
[1:04:40] and especially here. So, as I mentioned earlier, we have uh the coherence of each individual interferogram um and midpoint will take
[1:04:49] the average of the coherence of all the interferograms, and we can see that area of the Tulare Lake has low coherence in
[1:04:57] a lot of the interferograms, and the area in the high um Sierra Nevada mountains that has high
[1:05:03] uh uh low coherence. Uh so, the average is low in those two areas, and there's some uh
[1:05:10] agricultural fields that also have low coherence become already because they get plowed the fields or did some other
[1:05:17] agricultural agricultural modification in a lot of these areas. Some of the agriculture in this area is um
[1:05:25] um orchards of almonds and other oranges and other trees trees and those tend to be higher coherence
[1:05:34] because they don't they don't plow the the ground surface. And the trees are are fairly far apart.
[1:05:43] So the second so that's the average spatial coherence. That's the coherence that's measured by the spatial correlation of the phase. We
[1:05:52] can also measure coherence as in in the temporal domain because we have a time series now, we can measure how the phase is varying
[1:06:02] over time. And we can see that there's actually a very similar pattern in the spatial coherence and the
[1:06:11] temporal coherence. That's a good indication that um that that they're they're both measuring the same kind of
[1:06:19] processes. But the um the temporal coherence is actually the method that's best most accurate for um estimating the errors in in the
[1:06:32] velocity. So uh uh that's why MintPy estimates the temporal coherence and it also also uh for the velocity maps
[1:06:44] like this one back here. This is actually applying a mask based on a threshold applied to the temporal
[1:06:51] coherence. coherence. Uh Uh which you can adjust if you want to um use a different threshold. Another way to look at the error
[1:07:04] analysis is to look at the standard deviation. deviation. Uh Uh cuz we're doing a linear fit to the
[1:07:11] velocity velocity with time. Uh there's some standard deviation of the or residuals uh uh from that linear fit and that gives an
[1:07:23] idea of uh the likely errors in the estimate of the linear velocity. In this case the um
[1:07:32] the errors can be very high in the in the area of the Sierra Nevada because of uh
[1:07:39] uh uh uh atmospheric effects. Uh but there's also uh substantial errors errors uh in the area of the groundwater
[1:07:46] subsidence subsidence um that are due to that seasonal variation that's not included in this linear fit. The other
[1:07:55] thing you'll notice is that the um the errors are smaller in the close to the reference point and that's because the atmospheric
[1:08:05] effects effects are all set to zero at that reference point. Uh but the atmosphere uh uh local atmospheric variations that are
[1:08:17] in tend to increase with with distance. And so um um one of the important things to remember
[1:08:24] when you is that you should look at this uh standard deviation of the velocity uh before before interpreting the velocity uh
[1:08:35] because this gives an idea of what the error in the in the velocity is. So the uh
[1:08:42] and it's highly dependent on where that reference point is. We can also uh plot a a transect across
[1:08:50] the um the subsidence bowl uh using MintPy. In this case I've just drawn a line across the the part where it's subsiding
[1:08:59] the fastest. And And uh this line uh in dashed on the left and the on the right is that section. We
[1:09:09] can see that the rates here exceed 30 cm per year in the in the part with the
[1:09:15] fastest subsidence. But it's actually it's quite a variable variable uh pattern and that depends on the details of the uh ground water
[1:09:26] extraction extraction uh and the uh the distribution of those aquifer um um uh clay layers or aquitards
[1:09:36] uh that that are the main cause of the subsidence. subsidence. So um this is a a very quick
[1:09:42] introduction to um how we use SAR interferometry to uh to measure uh ground water extraction. Uh Uh There's uh some reference material here
[1:09:56] on how uh to use uh MintPy and um ARIA-Tools ARIA-Tools and uh I'd be glad to answer any questions.
[1:10:08] Thanks. Oh, um what There's one more other thing I wanted to show. Uh the the uh We can also uh take this uh final output
[1:10:26] and put it into um Google Earth. So this is um the the uh uh We took that final uh velocity map and
[1:10:40] uh made a uh KMZ file that you can then load into Google Earth and display uh with uh with uh Google Earth.
[1:10:54] Thanks. Thank you for that excellent presentation, Dr. Fielding. And thanks to all participants for the questions that have been coming in.
[1:11:07] We've been gathering them on a Google Doc, and we will start our Q&A session right now. Dr. Fielding is online, and
[1:11:15] he'll be answering all questions. Great. So, we'll be sharing the Google Doc here shortly. In the meanwhile,
[1:11:29] we've shared with you the link to the GitHub, and also we realize that in the demo, the text was a little hard
[1:11:38] to follow on the Jupiter notebook. We will be fixing that on the video that we will be posting online.
[1:11:47] Okay. So, welcome, Dr. Fielding. Hello. Yes. Uh I'm sorry. Let's get started then with Let's just start working our way down
[1:12:02] the questions that have been coming in. Uh the first question, is the transmitted wave considered in the
[1:12:08] decorrelation effects? Yes. Uh the key thing about these radar satellites is they have a very stable system for
[1:12:19] transmitting the exact same wave uh pattern repeatedly over many, many years. So, that that if if that pattern were to change, it
[1:12:30] could be uh cause decorrelation, but because these satellites are designed to have this very stable system, they that is not a
[1:12:39] significant source of decorrelation. Okay, great. Question number two. With L-band data sets, can I estimate ground deformation caused by soil water
[1:12:54] potential potential on a steep slope in the case of landslide and subsidence? How can multi-frequency be add an added
[1:13:03] advantage for this sort of application? So, So, the L-bands are uh is actually uh can be used to estimate the the soil
[1:13:15] moisture content. And that will be um one of the products that's um going to be produced by the NISAR mission.
[1:13:24] The The um they will be producing soil moisture maps uh globally uh at 200 m resolution. And they will
[1:13:36] people will be doing similar analysis with the S-band radar wavelength that's um more sensitive to the shallow part of
[1:13:43] the soil. I'm not sure if ISRO is planning to do that systematically. Uh we know that NASA is planning to to
[1:13:51] systematically process all of the L-band for soil moisture. The The that that uh soil moisture is estimated using the
[1:14:00] radar amplitude images. But the So, the the phase of the images is what they would use for InSAR
[1:14:08] analysis is uh is how we is a different type of analysis of the same data that we you can then use to measure the
[1:14:16] ground displacements due to landslides or or groundwater extraction subsidence. The S-band uh SAR phase can be similarly
[1:14:26] analyzed for InSAR displacements. And um that that will will uh should give approximately the same result, but the differences between the
[1:14:37] two radar wavelengths will allow us to better understand the effects of the ionosphere with some the uh
[1:14:47] uh the effects of soil moisture and vegetation on the InSAR measurements. Uh those are aspects that are kind of more
[1:14:53] advanced, but uh it could be could be uh useful in the future. Great. I will be certainly looking
[1:15:03] forward to that L-band uh data from and S-band data from uh NISAR for these sort of applications.
[1:15:12] So, the next question then is what climate regions have you noticed that the surface subsidence occur the most
[1:15:21] from groundwater extraction? Well, uh people extract groundwater in places where they don't have enough water from rivers, rain, and snow to use
[1:15:33] for their needs, such as uh uh cities and or agriculture. So, the places where there's more groundwater extraction are the places
[1:15:43] where there's not enough rainfall. So, um um we see the effects of uh groundwater extraction in places where there's much
[1:15:55] less precipitation. And in places where it rains all the time, typically there there's no need to extract water from
[1:16:04] from the ground. Okay, question number four. Can Jupiter notebook be used but InSAR analysis over area in the
[1:16:16] world? And how much processing time and computational power is required to do this processing on a local machine uh
[1:16:25] using Jupiter notebook? So, this uh particular demonstration is using uh the pre-processed interferograms from the ARIA um
[1:16:36] processing of Sentinel-1 geocoded unwrapped interferograms. These interferograms are available from the NASA ASF data archive. Uh you can search for them there.
[1:16:49] They are uh processed for some parts of the world, but they're not available everywhere. For other parts of the
[1:16:54] world, you need to get do your own uh InSAR um process your own interferograms. Um Um because we're using these pre-processed
[1:17:08] interferograms, that a lot of the processing has already been done. Um and the uh analysis But uh the total analysis time that it
[1:17:19] takes to run the notebook will depend on how many scenes you process. Uh the for this particular
[1:17:24] demonstration, I used just 1 year of data. If I had used uh five six years of data, it would have
[1:17:31] taken much longer. Um Um the the Other thing is that these geocoded unwrapped interferograms are going to be
[1:17:39] one of the standard products from the NISAR mission. So, uh while the uh Sentinel-1 uh geocoded unwrapped
[1:17:47] interferograms from the ARIA project are all all only available for limited areas, for NISAR mission, they'll be available um
[1:17:55] globally. Okay, question number five. How do you check for atmospheric interference in the interferogram stack that you use for the small uh baseline
[1:18:12] in order to remove those effects if needed? The The uh The time series analysis is one of the
[1:18:23] uh key ways to uh check for atmospheric interference, interference, uh uh especially in the troposphere. Tropospheric water vapor is one of the
[1:18:33] uh uh effects that causes uh a problem uh uh in SAR signals. The uh by doing a fit to a year of data,
[1:18:48] that's one of the ways that I reduce the uh time series the atmospheric effects in measuring the velocity of the ground
[1:18:58] subsidence in this particular demonstration. So, by doing a a time series fit, uh that's uh one of the ways
[1:19:06] to do it. There's also some more advanced ways of using weather models. Uh Uh that that I have an estimate of what the water how
[1:19:15] the water vapor is varying with time. And um that is a function that's available in MintPy, but I didn't have
[1:19:23] time to cover that today. Okay, so the next question. How long will it take us uh to be approved for an ASF account?
[1:19:40] Uh Uh I don't know the exact time. Uh if if a thousand people suddenly apply today, I think it'll take a while, maybe
[1:19:51] a week or two. Uh Uh usually it's just a a day or two, but uh if a lot of people are applying on the
[1:19:58] same day, uh it could take much longer. Yeah, and this is also a question that we going to
[1:20:06] bring up tomorrow. Uh the guest lecturer is Dr. Franz Meyer, and he's the chief scientist for the
[1:20:13] uh ASF DAC, and he will probably be able to to uh provide a um an answer a timeline for
[1:20:23] for this question. So, the next question then. How Could you uh please send the GitHub repo link? And I think this was posted
[1:20:33] on the chat box, but we can include it here. here. Uh yes, we had the uh the the repo link
[1:20:40] for the uh MintPy and Aria tools are in the the in the slides. Um Um we haven't yet posted the uh this
[1:20:50] notebook. Uh it's it should be available uh soon. Uh that Uh Uh we will get it into the uh the ASF um
[1:21:02] OpenSARLab uh virtual machines come with a set of pre-installed notebooks and we will get this notebook included uh in that set uh
[1:21:12] after it's been uh fully tested. There were some uh issues that we ran into uh recently that
[1:21:21] uh we want to make sure that it's working working uh before uh we post the final version. The
[1:21:28] notebook for process looking at the landslide in Los Angeles is already in that that OpenSARLab uh GitHub repository.
[1:21:40] Okay, so the next question is question number eight. Till date, I've used two methods to perform InSAR analysis. One is using the
[1:21:51] SNAP tool uh following the ESA tutorial, and the second one is PyGMT SAR open-source Python InSAR tool.
[1:22:01] If I get the final line of sight displacement maps from either of this these methods, can I use MintPy to
[1:22:08] perform visualizations on these final products? products? Um Um asking because the visualization capabilities of MintPy seem to be pretty
[1:22:17] good. good. Yes, there are ways to uh load uh to process a stack of data of uh interferograms with snap
[1:22:28] from the ESA the ESA snap tool. Um Um and it is then possible to uh load those
[1:22:36] into MintPy. Uh there's information on the MintPy website for how to use snap uh interferograms. Um Um there's two uh
[1:22:51] two versions of the there's a PyGMTsar is a is a modified version of a software package called GMTsar.
[1:23:02] Um uh original GMTsar package is supported by uh MintPy. Um Um I don't know the changes that have been
[1:23:16] made by the uh the person that's been working on uh the PyGMTsar uh modified version. So, I I can't tell you whether uh the
[1:23:31] PyGMTsar PyGMTsar uh uh products can be um loaded into MintPy. It may that that would be something you could
[1:23:41] ask to the uh PyGMTsar author. Okay, question number nine. If you had a GPS measurement for a
[1:23:53] reference point during the time series, how can you include the measured displacements into the processing flow? Uh that's a
[1:24:05] um that's a a a good question. The uh the key thing is that all the InSAR measurements are relative.
[1:24:16] So, So, um um what we sometimes do is uh use a GPS station that we know is not
[1:24:25] moving very much as the reference point. Um Um and therefore we then we tie the the InSAR measurements
[1:24:36] to that reference point. If the GPS measurement is moving rapidly, rapidly, then you would need to add that um
[1:24:47] uh GPS motion to the um and projected into the radar line of sight if you want to compare that to to
[1:24:56] include that with the InSAR uh measurements. All right. So, the next question, which is question number 10, how do you
[1:25:11] compute the deformation rate centimeters per year from the time series displacements? The MintPy package does a just does a linear uh least squares fit
[1:25:26] to the displacements for all the dates in the in the time series. Um Um you can do a linear fit. Uh you in some
[1:25:35] you can also optionally include the seasonal component. Um which for for more advanced analysis. So, it's basically doing a a linear fit
[1:25:51] to the time series for every pixel in the image. Okay. So, the next question, number 11, how can we create a data set for SBAS
[1:26:04] InSAR analysis? Uh Uh that's a you we can do that with a number of pro processing packages.
[1:26:19] The The There is the Arya preprocessed interferograms that we used in this demonstration. You can also process data using
[1:26:31] the ice package ISCE. It's a open source package. Or the ESA snap tool. And the ASF also has a
[1:26:47] a um on-demand InSAR processing um um function that you can request them to process data using the ASF
[1:27:01] uh uh pipe 3 gamma is what it's called processing tool that they also can be loaded into MintPy.
[1:27:15] Okay, question number 12. Does MintPy use other techniques besides small baseline? Uh the the MintPy package is designed to
[1:27:27] use the small baseline uh uh method. method. It doesn't do other other methods. There is a new uh
[1:27:38] package that's uh that works with MintPy to do persistent scatterer analysis. Uh Uh that's also available on GitHub.
[1:27:53] It It works with the same files. Okay, question number 13. Why should I choose a fixed point to determine the
[1:28:06] velocity? Will the line of sight not be sufficient? InSAR measurements are always uh relative. We can't um
[1:28:20] we can't get the absolute displacement. So, um we have to choose a reference point um to do the um
[1:28:30] the time series analysis and the by definition the uh uh the the displacement at that point is
[1:28:40] set to zero. That's uh that's just the nature of uh any kind of InSAR analysis. Uh there's a second part of this
[1:28:59] question here. Yeah, actually I I meant to that's an additional question. So, I've been asked about that before.
[1:29:06] okay. okay. Yeah. Yeah. So, the next question is number 14. Do you have any experience with using InSAR
[1:29:14] displacement data as a calibration data set for groundwater models such as MODFLOW, for example? Uh I have not done this, but the other
[1:29:24] people have uh used InSAR displacements to better uh uh understand the flow of groundwater. Okay, so moving on then to the next
[1:29:41] question. question. Number 15. Can this data be used to measure groundwater recharge just as it measures subsidence?
[1:29:52] Is it as simple as saying positive subsidence values equal groundwater recharge? recharge? Yes, that is uh true that uh when the groundwater is
[1:30:03] recharged then the surface moves up. Uh Uh you might call that uh uplift of the ground surface instead of subsidence.
[1:30:13] And that is an indication of a recharge of the aquifers. Nice. Okay, question 16. Is InSAR based
[1:30:25] land deformation possible irrespective of area, particularly forest or season? The The uh Sentinel-1 satellite uses the C-band
[1:30:39] uh uh or 6 cm radar wavelength. And that radar uh will not work well in areas of
[1:30:48] dense forest uh for InSAR. That is the main reason why uh NISAR will be using the longer uh L-band
[1:30:59] wavelength wavelength to better uh do InSAR in forested areas. Uh, Uh, snow cover will also be a problem in in
[1:31:12] certain areas. Even L-band SAR will not work uh when when the ground is covered with snow. Okay. Uh, so the next question number
[1:31:25] 17. 17. In the case of urban areas, what is the effect of construction on the accuracy of the assessment or the measurement?
[1:31:37] I don't know. We can only do the uh interferometric measurements uh if the uh objects on the ground are staying
[1:31:45] constant when uh the uh when there's a hit uh large-scale construction uh being being creating new buildings or tearing down
[1:31:57] old buildings, that will uh cause a loss of coherence and and uh prevent measurement of the uh surface
[1:32:06] uh displacements. This is actually uh also a way that we can measure uh damage caused by earthquakes or
[1:32:18] hurricanes hurricanes by looking at the InSAR coherence change that's uh due to uh destruction of buildings. Uh we can detect uh
[1:32:30] how how where the buildings have been damaged. Okay, question 18. Could fluvial geomorphological changes be studied using InSAR?
[1:32:45] Uh Uh what what fluvial uh geomorpholo- geological geomorphological changes uh would generally include uh erosion or deposition.
[1:32:59] deposition. Uh and those are also effects that are going to change the surface surface and and therefore we can only see that something
[1:33:09] has changed or it'll cause a loss of coherence. coherence. Uh you could detect where these uh fluvial changes have occurred, but we
[1:33:20] can't measure the amount of change except by using uh the the the topographic mode of InSAR uh such as
[1:33:32] with TanDEM-X. Okay, question number 19. I think this question can be uh interpreted in two ways. So, are these data set available
[1:33:46] to everyone? Or are these and or are these data set available all over the the world? Uh yes. Uh the
[1:33:58] Sentinel-1 uh uh uh, raw data is available uh, for most parts of the world, uh, almost everywhere.
[1:34:10] And it's, uh, free and open. Uh Uh the the area Sentinel 1 geocoded unwrapped fi- files are only available for selected
[1:34:25] areas, uh, in where where we had funding to to process the data. Uh Uh the NISAR uh
[1:34:38] uh geocoded unwrapped interferograms will be available, uh, globally. And and free and open. Okay, question 20. How do you select the spatial and
[1:34:53] temporal thresholds for the InSAR processing, and how can it be validated? Uh, or how can you make sure that the S-
[1:35:02] pass processing was carried out correctly? correctly? Uh, yes. Uh the the with Sentinel 1, uh, they operate the
[1:35:15] satellites, uh, in a way that we don't worry about the spatial baselines because they're always short. Uh
[1:35:26] Uh that will also be true for NISAR, and, uh so that's not a problem. Uh Uh the temporal, uh, threshold, uh, is
[1:35:39] going to depend on the amount of vegetation in the area where you're working. working. In a an area with moderate vegetation
[1:35:47] uh, Sentinel 1 uh, interferograms with uh, intervals of more than uh usually about uh uh uh 48 days uh lose coherence. And so, then
[1:36:03] you may need to use only shorter time intervals. So, that that's the temporal threshold. Uh it depends on the radar wavelength
[1:36:17] and on the vegetation. For L-band, we hope that the the temporal threshold will be uh closer to
[1:36:26] a year. Uh except Okay. Okay. Question number 21. Interesting question here. Uh is subsidence uh related specifically related to
[1:36:45] groundwater extraction, or could it be generated from other activities, such as oil and gas extraction? And if so, can
[1:36:53] we use the same methodology that was presented today? Yes, it's that we could use exactly the same methodology to measure
[1:37:02] uh subsidence due to other causes. In fact, I uh studied uh a subsidence due to uh oil extraction
[1:37:13] uh uh or about 25 years ago in uh in very close to this area in the in
[1:37:21] California. There's some very uh rapidly uh extracting uh oil fields. So, it's the same methodology. Great. Okay, so another great question.
[1:37:41] Uh number 22. Could we expect, as an extra feature of MintPy, to be able to compute up and
[1:37:48] down east-west deformation besides only line of sight. Uh from any given track of data, we only measure one line of sight, but in most
[1:38:03] places there the satellites um um acquire data on different tracks that can look at the same ground location at different look
[1:38:15] directions. directions. And there is all a function in MintPy to combine what we call uh the the
[1:38:26] the ascending and descending tracks of of data to estimate the up-down and east-west components. Ascending is where the satellite is
[1:38:40] moving northward in relation to the earth and descending is where where the satellite is moving southward, so
[1:38:47] um those look in opposite directions and therefore give different different line of sight um information to that can be combined to estimate these
[1:38:59] two two components. You have to have the two different So you process the two uh tracks separately and then combine
[1:39:08] the uh resulting line of sight velocities. Question 23. Do you think that we can correlate InSAR line of
[1:39:20] sight displacement results with Grace groundwater trend data? Would this be meaningful? Uh yes, people have thought about ways to do this. The big
[1:39:35] difference is the spatial scale. Grace measures uh uh, the groundwater change, uh, mass change at about a 400 km spatial scale.
[1:39:49] Whereas, InSAR is measuring change on a 100 m spatial scale. So, that's a a factor of a
[1:39:59] a thousand difference in spatial scale. So, it would require um s- s- s- some thought how how you can combine
[1:40:10] those effectively. Okay, and going back to the previous question about using this method to look at su- subsidence due to oil extraction,
[1:40:26] someone someone um wrote on the chat box that uh they would be very grateful if you could
[1:40:33] share some links to studies related to this. this. So, that's perhaps something that can be included in this document when we post
[1:40:42] it. it. Sure, I can uh link to my paper from 1998. Oh, well, wonderful. Okay. So, let's move on then to the next
[1:40:54] question number 24. Can SAR track and monitor groundwater content in an alluvial aquifer that surrounds a river
[1:41:02] as stream flow increases and decreases? Um the the uh uh you might be able to measure uh
[1:41:20] va- variations in groundwater, uh, due to river flow, uh, but I suspect the amplitude of those variations are are much smaller than
[1:41:31] what we can measure with InSAR. Okay, question number 25. A very uh a very interesting question here. What
[1:41:45] are some of the potential applications of these techniques that were discussed today for interplanetary missions? How are the current missions that are being
[1:41:54] planned for interplanetary missions using this sort of technique? The uh NASA Veritas mission uh is planning to use
[1:42:09] uh uh SAR interferometry uh to measure uh displacements on Venus. So, that's a it's an approved mission. It's
[1:42:24] planet uh to go to Venus. All right, number 26, question 26. What will be the difference in ground
[1:42:36] deformation derived from L-band and X-band? And which one is more suitable for geohazards? Uh the ground displacement should be uh the
[1:42:51] same, but the difference will be primarily in the uh coherence of the measurements. If there is uh if it's a
[1:43:04] un-vegetated area or area of forest area uh where there's little change in the uh and little vegetation
[1:43:16] they should give similar results. But in uh vegetated areas uh especially forest X-band will become the uh completely incoherent and
[1:43:28] therefore not be able to use make any InSAR measurements? Okay, question 27. Is it possible to monitor urban water pollution with SAR
[1:43:44] data? Um Um water pollution. The SAR data does not penetrate into water. So, we can't measure anything
[1:43:57] about the water um quality. Question 28. Have there been significant developments in land subsidence prediction? And if possible, could you
[1:44:12] share some resources for further reference? Uh the California Department of water resources has been using InSAR for
[1:44:24] uh um um several years now to monitor uh groundwater extraction throughout the state of California. Uh Uh the area of uh extreme subsidence that I
[1:44:41] showed in the demonstration is one of the areas that they are selected for uh the first effort to control
[1:44:50] groundwater extraction in in the state of California under a new uh groundwater uh control law that takes effect uh in the next few
[1:45:02] years. Okay, and then the final question. Have there been developments made toward real-time InSAR analysis? And if so, can
[1:45:14] you share any references? Um Um not sure what they're referring to with real-time InSAR. InSAR. Um Um the processing of SAR
[1:45:32] uh images uh takes some amount of time. Uh Uh so there's always going to be uh some
[1:45:39] amount of delay. Uh With the present satellite systems, it usually takes uh several hours for the data to to be actually be sent down to
[1:45:53] the ground. So uh uh we don't usually talk about real-time, but we talk about near real-time um
[1:46:02] um products for for SAR and InSAR analysis. Okay. Oh, and then I guess we we received uh
[1:46:24] another question here. Number 30. How is measured subsidence affected by crop phenology? If we're measuring an area
[1:46:34] where the crop is growing, also what is the spatial resolution we're looking at in this product? Is it
[1:46:40] 10 m? Uh Uh so the growth of um vegetation uh crops uh usually causes a loss of coherence.
[1:46:53] Uh Uh so so in fact, you might be uh see see the amount of uh coherence loss as a
[1:47:04] measurement of the amount of crop crop height change. Um so uh generally uh that's why we use the the longer radar
[1:47:21] wavelengths, so they're less sensitive to uh changes in the in the trees. Uh Uh to get to InSAR measurements.
[1:47:34] What is the special resolution? The uh the area Sentinel-1 uh geocoded unwrapped interferograms are processed at 90 m
[1:47:46] uh resolution. It's possible to get higher resolution with uh but that's the uh standard uh products are at 90 m
[1:48:00] spacing. spacing. You could get down to uh about 30 m with Sentinel-1. Other satellites might uh be
[1:48:13] smaller uh higher resolution. Especially the X-band satellites. Okay, and we have yet another question here. here. It is now related to uh a DEM, so how
[1:48:31] accurate would a DEM be that is derived using InSAR? Uh the accuracy of uh InSAR DEM depends
[1:48:42] on the um the the distance between the two uh radar antennas antennas uh for and the uh
[1:49:00] uh and the resolution of the SAR images used. used. Uh Uh So, for SRTM the accuracy was on about uh 10 m
[1:49:12] elevation. elevation. For uh the TanDEM-X mission, it's a better uh probably around uh 3 m. All right. And
[1:49:32] that's the InSAR uh high accuracy. is 10 m. I'm not There's airborne radar systems that have uh higher resolu- higher accuracy.
[1:50:00] Okay, we have another question coming in. It's not on the Google Doc here yet, but but the question is,
[1:50:07] "Do you have experience using InSAR displacement data as a calibration data set for groundwater models such as
[1:50:16] MODFLOW?" MODFLOW?" Uh didn't we answer that before? Did we? Okay. I thought it might be familiar. Okay.
[1:50:24] So, here's another one. "Crops "Crops uh to map crop water consumption, is it possible to do this with SAR?
[1:50:35] And what would be the best method?" Uh Uh crop water consumption. Uh the the the uh InSAR is really only sensitive to the
[1:50:57] ground surface. The use of water by the crops uh would be more from the uh soil moisture
[1:51:10] measurements measurements uh that are not using InSAR, but the the SAR amplitude images. Okay, great. Uh, so I think that's it now in terms of
[1:51:26] the questions that have come in. Um, Um, so that will mark then the end of this Q&A session.
[1:51:36] Um, I would like to thank our speaker once again, Dr. Eric Fielding for uh, for this great presentation
[1:51:45] demonstration, for really introducing this topic on looking at subsidence from what groundwater extraction uh, with InSAR for the first time in an
[1:51:55] ARSET training. Um, I'd like to remind everyone that the presentation uh, the recording and the transcript for this Q&A will be posted
[1:52:05] online online um, under in in the uh, training page for this uh, webinar series. The next session is tomorrow.
[1:52:15] We tomorrow, November 1st, Wednesday, and we will have Dr. Franz Meyer from the Alaska Satellite Facility and also
[1:52:24] University of Alaska Fairbanks. He will be talking about detecting and monitoring floods with SAR. I'd like to also remind you that there
[1:52:34] will be a homework associated with this webinar series and that will be made available tomorrow. So, it will be open
[1:52:41] up tomorrow and you will have until November 17th to um, to send in your homework. And for
[1:52:49] those that have attended live and that complete the homework by the due date, those people will receive a certificate
[1:52:57] of completion. So, before I close, I would like to thank the ARSET team for making this possible, Brock Blevins,
[1:53:05] Iwoon Hudson-Odoi, Natasha Johnson-Griffin, Johnson-Griffin, Sarah Kucera, Jonathan O'Brien, Amita Mehta, Shawn McCartney. And I would like to thank all of the
[1:53:16] participants for your enthusiasm, for all the great questions coming in, and for your overall interest in uh in in SAR.
[1:53:26] So, So, before closing, um Dr. Fielding, would you like to say any final words? Uh well, thanks to people for uh joining
[1:53:36] the live session here. And uh we hope that people will uh and apply this to their own areas, and
[1:53:44] we're looking forward to NISAR mission launch next year. Absolutely, very much looking forward to that. So, with that, we end today's
[1:53:56] session, uh wishing everyone a great day, and uh please uh tune in tomorrow for the final session.
[1:54:07] Thank you. Thank you.
