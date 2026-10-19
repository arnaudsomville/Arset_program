# Generating a Digital Elevation Model (DEM), Part 3/3

`https://www.youtube.com/watch?v=9PbFbHqRufQ` · id 66 · 1:37:22 · module 118 — River Basin Delineation Based On NASA Digital Elevation Data

[00:02] hello this is Erica protist from the Jet Propulsion Laboratory and welcome to the final webinar of this advanced sar
[00:11] series today's presentation will be focused on how to generate a digital elevation model through sorry interferometry the first part will
[00:21] provide an overview of interfere metrics are as related to the information content that's relevant to topography and the second part will walk you
[00:31] through a demo with the workflow on how to generate a digital elevation model our special guest today is Nicholas
[00:39] Greenfield Brook from the Argentine Space Agency also known as Kona which recently placed an L band SAR satellite
[00:48] in space called Sal Khan Nicholas works for the Sal comm satellite mission focusing on SAR interferometry and he
[00:56] put together this presentation and demo which he presented earlier today to our spanish-speaking audience his material has been translated into English and I
[01:06] will be presenting it however Nicholas is online with us and he will be available to answer your questions at
[01:15] the end of this session he'll do his best to answer in English however some questions might have to be translated so
[01:22] please be patient the learning objectives of the course are to understand the difference between amplitude and phase of a SAR image and
[01:35] the usefulness of that phase and in terms of SAR interferometry understand the concept of interferometric phase and
[01:43] the sensitivity of the phase to topography and surface deformation understand the concept of interfering matrix R and differential interfere my
[01:53] tricks are techniques and understand the factors that affect the interfere metric phase such as orbital errors the
[02:01] atmosphere and noise and finally we'll go through a basic workflow for generating a DM so you'll understand
[02:10] what needs to be done in order to generate generate a digital evasion model to start we'll cover some of the nomenclature a nice
[02:24] our image so the satellite moves in the azimuth direction and it emits electromagnetic pulses at a given
[02:32] frequency in the case of Sal Khan this would be 2,000 Hertz which is also known as the post repetition frequency or PRF
[02:42] this electromagnetic pulse travels at the speed of light it interacts with targets on the Earth's surface and the
[02:50] energy is then in part returned to the satellite and then an image is formed in the case of Cellcom it is a SAR that
[02:58] operates at El band and has a carrier frequency of 1.3 gigahertz so that's equivalent to a wavelength of 23
[03:06] centimeters the PRF is 2 kilohertz its sampling rate is in the range direction and it's 50 megahertz and its bandwidth
[03:16] is 50 megahertz as well in the range direction and 1800 megahertz in the azimuth direction a SAR image has
[03:27] information on amplitude and phase the amplitude is related to the energy backscattered towards the sensor which is dependent on the characteristics of
[03:37] the surface targets such as its roughness absorption properties and other factors the face which is what we'll be discussing during this course
[03:49] provides information on the distance between the target and the sensor so every time the wave moves 23 centimeters
[03:58] that that's the length of the wave it is equivalent to a sinusoidal cycle of the wave or 2pi given that the wave must go
[04:07] to the target and then return to the sensor the term 4pi appears in the phase equation which relates the phase of a
[04:16] SAR image with the distance to the target this slide shows what was mentioned earlier an amplitude image and a phase
[04:29] image on the left is an amplitude image and it looks similar to an optical image even though it's not but the textures
[04:37] look similar to an optical image and then on the right is a phase information of a SAR image to create an interfering
[04:51] Ram you need to saaremaa jiz that illuminate the same target in the same mode and this means that the observation
[04:58] angles should be similar here we have two configurations on the left is the one usually used to generate
[05:06] digitalization models within SAR while the one on the right is the one used to generate deformation maps within SAR so
[05:14] in a fair metric repeat pass is when the satellite observes the same target in two different points in time
[05:21] acquisition one and acquisition two in the image on the Left acquisition one and acquisition two observed the same
[05:30] target from different positions separated by a baseline the distance that the wave travels is different between D 1 and D 2 given the different
[05:42] positions of the satellite now the figure on the right shows that the sensor is located in the same position
[05:51] for both acquisitions and it now the target is the one that undergoes movements causing and this movement can
[05:59] be surfaced the formation and this causes the distance between the waves to be different between acquisition 1 and
[06:07] acquisition 2 so we can relate the difference in distance between the waves with the interfere metric phase through
[06:15] the equation here which shows that 4pi times the difference in distance between the two acquisitions over lambda is
[06:23] equal to the interfere metric phase in practice we know that a pixel is formed by more than one sub target each
[06:35] one contributing to the signal response within the pixel so in other words SAR measures the coherent sum of all of
[06:44] these sub targets within each pixel in the case of SOUTHCOM the pixel is 5 meters by 10 meters and that means that
[06:52] in an area of 5 by 10 meters there are a large number of subsequent sub targets with which the 23 centimeter wavelength
[07:02] interacts the figure on the right for example illustrates several sub targets within the pixel there's a cow a chicken
[07:10] a tree a person and all of these sub targets are scattering the incoming energy shown in yellow back towards the
[07:18] satellite shown in blue if those sub targets change between two acquisitions then the term that corresponds to the
[07:28] interfere metric phase of the target will not cancel out meaning there is no coherence in this case you cannot apply
[07:36] interferometry the first case study is in the use of the interfering metric phase to generate digital elevation
[07:45] models we're looking at the sensitivity to topography using Ensor in this slide you can see that the image on the right
[07:57] is an amplitude image and the one on the left is an inner fair gram of the same
[08:02] region utilising - sorry midges interference are characterized by having what looks like contour lines and these lines these fringes relate to the
[08:13] topography of the surface as mentioned the configuration needed in order to be sensitive to topography requires that
[08:27] the same surface target be observed by both sensors at DIF positions the distance between each observation is
[08:36] called the baseline of particular importance is the perpendicular baseline which is the perpendicular deep position of the baseline between the two
[08:46] satellites when observing the same target from two different positions we can relate the interferometric phase to the height of the illuminate illuminated
[08:57] target which is Z following the equation shown here it shows that the interferometric phase is related to
[09:05] topography by the perpendicular baseline term which is the distance between the two satellites or sensors the sensitivity to topography depends
[09:21] directly on this distance in this image we see three interferogram generated for the same area with different
[09:29] perpendicular baselines in the left the perpendicular baseline is 80 meters in the middle the perpendicular baseline is
[09:38] a hundred and fifty-six meters and in the right the perpendicular baseline is 364 meters as the perpendicular baseline
[09:47] increases the sensitivity to topography increases as well however we can also observe that as the perpendicular baseline increases the fringes start to
[10:00] get lost as we move towards the right this happens because as the perpendicular baseline increases the coherence decreases further ahead
[10:11] Doby a discussion on coherence case study 2 is about the interferometric phase and its sensitivity to surface
[10:24] displacement and this is also known as differential interferometric tsar ordinance on this image shows an example of a differential in a fair gram that
[10:38] was generated using Sentinel 1 images over the kabuto volcano in southern Chile this volcano started erupting in
[10:48] 2015 and the surface displacement of the volcano was measured to be around 13 centimeters in order to be sensitive to displacement
[11:03] the ideal configuration is for both satellites to be in the same position so that the term that corresponds to the
[11:11] topographic face is no in other words so that there is no perpendicular base line so for example let's assume that we
[11:21] observe a target at two different times t1 and t2 but from exactly the same position so that the perpendicular base
[11:30] line is zero now let's assume that this target undergoes horizontal displacement as shown in the figure here we can
[11:39] measure this displacement from the interferometric phase and in this case I'll ask why don't we include the term
[11:46] related to topographic phase the reason is because we're observing the target from the same position and therefore the
[11:54] perpendicular base line is zero and the topographic phase term becomes an irrelevant this is the configuration that we want when generating deformation
[12:06] in maps so in practice it's generally impossible to measure the same target from exactly the same position at two
[12:19] different times so when we want to make the formation Maps there'll be a term that corresponds to topography which
[12:28] means that there is sensitivity to topography and in order to measure displacement in such case then we need
[12:36] to counteract the topographic phase and to do that we need an external digital elevation model in order to remove that
[12:44] component from the measurement something else to note is that the displacement measured by InSAR is in the look
[12:53] direction of the Raider if we would want to decompose this into horizontal and vertical movements we would need to
[13:00] observe the displacement from a different geometry and usually this is done using two images from an ascending
[13:09] path and two images from AD sending pass in summary the interferometric face has two terms one term depends on the topography of the
[13:22] illuminated area and the other term depends on the displacements of the targets the first term is marked in
[13:29] yellow and is the one used in in SAR and the second term marked in green is used
[13:35] in denser through in SAR we generate elevation maps of the surface while with dense R we generate displacement maps
[13:43] for in SAR we ideally need some ot Gnaeus acquisitions to ensure that the targets do not change while for dense
[13:52] are we need acquisitions at different times the position obtained through in SAR is on the order of meters while for
[14:00] dense are it's on the order of millimeters this is due to the sensitivity to measure topography compared to the sensitivity to measure
[14:09] deformation now in the case of in SAR the sensitivity depends directly on the perpendicular baseline between the two
[14:19] satellites the separation between the two of them in the case of dense art the sensitivity depends on the wavelength
[14:26] exclusively in in SAR we need large baselines to have greater sensitivity to topography however keep in mind that
[14:35] there is a critical perpendicular baseline and from there you lose coherence in the case of SOUTHCOM the
[14:42] baseline is on the order of 5 kilometers within sorry the perpendicular baseline should be very small or ideally null so
[14:50] that the topographic term falls out of the equation by passing the need to use an external digital elevation model in practice the
[15:04] interferometric phase not only has the two terms that are related to topography and the displacement of targets there
[15:12] are also other effects that appear and these are due to orbital errors because of not knowing the exact position of the
[15:19] satellites or due to atmospheric effects or noise these terms will be briefly explained so that you understand
[15:28] how these factors affect the interferogram interferogram and so so that you're able to identify when they appear and you don't confuse
[15:36] them with actual information related to topography or deformation the first factor to discuss are orbital errors so
[15:53] the baseline is the distance between the two satellites at the time of each acquisition and if we decompose the
[16:00] baseline to its perpendicular and parallel components then we can describe these as a function of the horizontal
[16:08] and vertical baselines using the sum of cosines and sines we also know that the interfering metric face is related to
[16:16] the difference an optical path covered between the two waves this is the parallel baseline baseline which is 4 PI
[16:24] over lambda now if we take the derivative derivative of the azimuth and range of the inner parametric phase and
[16:32] analyze the sensitivities we can see that errors in the parallel baseline generate an offset in the face and this
[16:41] is not a problem however errors in the perpendicular baseline results in a ramping of the phase in the range and errors in the
[16:50] variation in the parallel baseline in time so this is the same as orbits not being parallel resulting in ramping of
[16:59] the phase in the azimuth this figure shows interfering Rams to which we've applied different errors in the
[17:11] perpendicular baseline and errors in the variation in the parallel baseline to see their effects the original interferogram was generated with an a
[17:20] low spouse our image we introduced an error of 10 meters to the perpendicular baseline and we can see that there is a
[17:28] ramping along the range in the horizontal direction an error in the parallel baseline introduces ramping along the ass
[17:39] which is what the equations in the previous slide had predicted here we have an example of the differential
[17:53] interference on Tina you can clearly see that the ramping here is not due to deformation but rather it's an orbital
[18:04] error due to an error in the perpendicular base line if you're not familiar with the type of errors you can
[18:10] find in an interfering ram it'd be easy to confuse what you're seeing here with actual surface deformation rather than
[18:19] orbital errors next we'll discuss errors introduced by the atmosphere we know that acquisitions are not simultaneous and therefore the atmospheric conditions
[18:38] are generally different between acquisitions affecting the path travelled by the wave and hence affecting the phase the factors that
[18:47] affect the path covered by the wave our humidity temperature and pressure and this produces a term known as
[18:54] atmospheric phase screen or ApS which describes the small changes in the atmosphere and abrupt changes in time
[19:03] such as for example an acquisition on one day might have had clear sky conditions while an acquisition on a
[19:12] different day might have had very cloudy conditions and so these type of errors have a direct impact in the measurements
[19:19] related to height especially when the perpendicular baseline is small and we have lower sensitivities and measurements related directly to to
[19:31] deformation here we have an example of that mysterious stratification it's a differential interfere with data from Sal come over San Juan Argentina and you
[19:49] can see typical atmospheric stratification effects there's a direct correlation between topography and the differential phase so when the inner
[19:58] gram in the program is generated we assume that the wave travels at the speed of light in a vacuum however as
[20:05] the wave travels through the atmosphere in regions where there are mountains the atmosphere especially the troposphere will have stratifications causing the
[20:15] speed of the wave to change to slow down this affects the interferometric phase measurement which can be confused as
[20:23] surface deformation and these atmospheric effects need to be accounted for the final term to discuss is noise
[20:40] to analyze the noise one of the tools to use is coherence if the target illuminated between both acquisitions
[20:48] that form the inter / interfere metric pair loses coherence in other words if the targets have changed substantially
[20:56] the interferogram will degrade because the phase that corresponds to the target does not cancel out in the
[21:04] interferometric phase equation we assumed that the phase for the target was the same in both acquisitions which
[21:11] cancelled out in this case they do not cancel out and there is a term for this it is possible to quantify this change
[21:19] in the target using interfering metric coherence which is quantified in the equation in the middle of this slide
[21:26] values are normalized between 0 & 1 0 values indicate low correlation and values close to 1 indicate high
[21:35] correlation there are several sources of D correlation or in coherence we can separate them into geometric D
[21:47] correlation Doppler thermal volumetric parole and processing geometric decorrelation is caused by observing the same target from different positions and
[21:58] incidence angles this means that we don't observe the same characteristics of the target and as a result the
[22:08] coherence is reduced so there's a critical perpendicular baseline if the distance between the two satellites is very large then the characteristics of
[22:18] the target become completely different and the coherence will be zero and there'll be no interferometric fringes another effect is Doppler this is caused
[22:28] by differences in the centroid Doppler between acquisitions there's thermal D correlation which is related to the system for example the antennas and the
[22:36] electronics electronics there's volumetric D correlation which is caused by the penetration of the wave through a dispersive medium this is
[22:45] frequency dependence so for example at X band there is greater in coherence in relation to El band because of the
[22:53] length of the wave there's temporal decorrelation which is caused by physical changes on the surface which affect the distortion
[23:01] dispersion characteristics this is also a frequency dependence and finally there's processing which has to do with the correlation due to for example core
[23:14] registration errors interpolation etc so these are processing steps that we will be seen later in the workflow in order
[23:22] to generate a digital elevation model all of these terms are multiplicative in other words any of these if any of these
[23:30] sources of error has zero coherence then your total coherence will be known this is a comparison of coherence between two
[23:44] different bands there are three coherence maps for different temporal and perpendicular baselines generated the top coherence maps were generated
[23:56] with a lows to pass R which is all band and that's similar to Cellcom and the bottom coherence maps were generated
[24:04] with with which is a sour data that has an expand sensor so here we have two images the
[24:19] first one has a temporal baseline of 14 days that's an L band and there's an X band image on the right that has a
[24:28] temporal baseline of 20 days and both images have similar perpendicular baselines so we can see that L band has
[24:36] a much higher coherence than X band for the same region and this is because at L band the wavelength is about 23
[24:44] centimeters which is much longer than the wavelength at X band which is about 3 centimeters for this reason the X band
[24:53] wavelength will interact with a larger number of sub targets than L band and it's this is the reason why X band is
[25:01] more incoherent here we have an exercise based on what you have seen so far you can develop a selection criteria to
[25:14] generate a digital elevation model so let's suppose we have the following acquisition options where we have a
[25:21] graph of the perpendicular base line as a function of the temporal baseline for 13 acquisitions over the same area the
[25:30] objective here is to identify the three pairs to select in order to create a DM assuming that the critical perpendicular
[25:38] baseline is 5 kilometers the results will be revealed in the demo but the objective here is for you to do this
[25:46] first without seeing the results here's some reference material if you want to understand more in depth this topic
[25:58] there's a radar interferometry data interpretation and error analysis by Ramon Hansen as well as insert principles guidelines for SAR
[26:08] interferometry processing and interpretation by the European Space Agency or ISA in terms of the software that we will be
[26:18] using we that there's a snap which is open-source software that has been produced by the European Space Agency
[26:31] and you can download it through the link provided here there's also other open source software such as doors which
[26:38] allows you to generate into paragraphs now we will start the practical portion of this course and how to generate a
[26:51] digital elevation model using SAR images with interferometry the requisites for this demo are to have a computer with at
[27:03] least 8 gigabytes of RAM and have the following software installed snap 7.0 with the Sentinel toolboxes and snafu
[27:14] version 2.0 point 1 and they're both open source software and you can download them through the links that you
[27:22] see here our study area is in jujuy la quiaca in argentina here the climate is semi-arid summers have about 80% of the
[27:36] year-round precipitation and winters are very dry and cold and it hardly rains one of the first questions to ask when
[27:44] choosing the pair of images to generate a digital elevation model using InSAR is during what time of year what you want
[27:53] the acquisitions to generate this DM in this case given that most of the rainfall is in summer it'd be best to
[28:01] obtain the images during winter because there will be less atmospheric effects [Music] [Music] the data set that we will be using is a
[28:12] strip map tandem pair from cosmos sky mad at expand the master image was acquired the 14th of May 2017
[28:23] while the slave image was acquired on the 15th of May of 2017 the parameters of this interferometry
[28:32] Faye's are a temporal baseline of one day a perpendicular baseline of 500 meters which is equivalent to an
[28:40] ambiguity height of 22 meters a difference in Doppler centroids of 22 Hertz bandwidth in the range of 70 3.5
[28:52] megahertz bandwidth in azimuth of 2,590 Hertz incidence angle of 40 degrees a slat range of around 884 kilometers we
[29:12] saw in the theoretical portion of this lecture that the basic workflow for generating a dm2 in SAR consists in a
[29:21] series of steps delineated here the first step requires Co registration of the master and slave images to sub-pixel
[29:30] position the slave image should be resampled so that each pixel in the image coincides with that in the master
[29:38] image the next step consists in calculating the interferogram by subtraction and this is done by subtracting the phase pixel-by-pixel
[29:52] between the master and slave images after co-registration afterwards you must subtract the reference phase of a flat earth and in this case it be the
[30:02] face of the ellipsoid to generate an affair into Ferrum or the face is related to the topography with respect
[30:10] to the reference phase the next step is reduction of noise by applying filters such as the Goldstein filter or mud and
[30:19] multi looking and then you do the phase unwrapping finally you convert the topographic phase to elevation using the
[30:27] equation that relates the topographic phase with the height and then you project thus elevation to latitude and
[30:34] longitude in order to visualize the DM that is projected and to be able to open it in a GIS software
[30:47] alright so the first step consists in opening the images with the Sentinel toolbox so what we do is we click on the
[30:55] directory and then select the master and slave images to open them ok and this is just a common terminology used in the
[31:06] community the images will appear on your product Explorer window so make sure you open each of them to ensure that they
[31:14] load it correctly so you want to visualize each of them and here we're visualizing the intensity for both the
[31:20] master and the slave so to see and they both look fine right so now to see the
[31:31] interferometric parameters of this pair go to radar interferometric in source stack overview all right and then click on add open and
[31:50] up will pop your two images a master and the slave so click on overview at the bottom and enlarge the window to see it
[32:01] a little better and here we can see that the slave has a perpendicular baseline of 480 1.93 it has a temporal baseline
[32:14] of one day and it has a modeled coherence using theoretical equations of almost 0.6 its ambiguity height is 21
[32:25] point 36 minus 21 point 36 meters and so this table provides information on how sensitive this pair of images is to
[32:35] topography through the base perpendicular base line remember that the shorter the perpendicular base line the greater the sensitivity to
[32:44] topography so now we hit close and the next step is to call register the images so you need to go to radar
[32:55] co-registration co-registration and select add open in the list there so now you'll see the master and slave images
[33:12] pop-up select the tab creates stock and the window contains a list of parameters that need to be specified in order to do
[33:21] the co-registration using the orbital information so this step will call register the slave image to the master
[33:28] image okay however this co-registration is not enough ok so this is a course core restoration we net then need to
[33:42] move on to the cross-correlation tab which is which is correlations between windows so it looks like correlations between windows from
[33:53] the master and slave images and it'll register the images at the sub pixel level which is the level of accuracy
[34:01] really need it to do interferometry so the cross-correlation co-registration is based on a coarse and fine co-registration in both cases the cord
[34:15] stration uses the same technique however in the case of the fine co-registration there is a resampling of the image for
[34:24] greater accuracy okay so keep in mind the deef so keep the default parameters I stated here but in
[34:35] the case of that the co-registration does not work well what one normally does is to make the window size larger
[34:46] okay so the next step which is warp is to is that the next step to follow and
[34:53] this determines which polynomial will be used to do the resampling of the slave image to the master image normally a
[35:01] polynomial of two is used is fine but in this case we will select a polynomial of three
[35:09] three there are several interpolation methods but generally the default which is cubic convolution works well so finally to write this will generate a
[35:27] file called master underscore stack and it will be saved in our working directory in this case I will change it
[35:35] to where I have my files so make sure you you specify where your working directory is and then you press run this
[35:44] can take some time so in my case this took about three minutes but it will totally depend on your computer ok and
[36:04] all of these steps are in the PowerPoint presentation that is part of this course so you can follow this at your own pace
[36:11] so once finished we will close the window and we can see that in the product Explorer window our new image
[36:20] master stack appears and if we click on the directory and open up the images in under bands we see the intensity image
[36:30] for the slave remember that the slave image has been co-registration resampled to the geometry of the master image in
[36:40] order to verify that your Co registration was successful we do an RGB so right click on the master stock file
[36:47] name and select open RGB place the red channel and as the master image and the green channel as a slave image to
[36:57] visualize the colors so now the colors look like this predominantly yellow that means that there is good co-registration
[37:03] because yellow is the sum of both colors red and green if you see more of one color than another then that means that
[37:10] there are problems with the chorus tration tration in this case however our co-registration looks good ok so once you call register the images
[37:22] the next step is to do the interferogram which is the pixel to pixel subtraction of the phase of the two images we go to
[37:29] radar interferometric products inter program information or interferogram formation okay and in the case in this case the source
[37:48] product is a master underscore stock and in the processing parameters tab keep the default values the parameters in
[38:02] this window are asking which polynomial you would like to use to remove the phase related to flat earth which is
[38:09] that of the ellipsoid a polynomial of five works very well do not change this parameter the number of points to
[38:19] estimate the flat earth is specified as 501 which also works very well the orbit interpolation degree is specified as
[38:31] three that works well so these three parameters are to remove the phase of the ellipsoid to get to the topographic
[38:40] phase if we click in include coherence estimation the program will calculate coherence okay so now if you click on
[38:52] square pixel it means that the coherence estimation will be done using a window of ten by ten in the azimuth and indoor range we
[39:05] will leave the default values and hit run so this step is very quick because it's just a subtraction in the case of
[39:13] the interferogram and for the coherence it is an estimate using Windows so in this case it took seven seconds and we
[39:23] close the window and we see the interferogram under mask underscore stock underscore IFG in the product Explorer window okay so we open bands
[39:37] and we want to visualize the face we can see here some fringes that are related to the topography of the rain the the
[39:48] terrain terrain now the coh image is a coherence image and if we visualize it the white colors
[39:59] are areas with greater coherence and the darker colors close to zero are areas with no or very
[40:08] low coherence where the interferometric fringe is not well-defined and noise predominates once again we go back okay
[40:23] so we see like an area like this in these regions there's the coherence is lower and that's likely that the fringes
[40:31] are less defined so the next step is to reduce the speckle noise and to do that we apply a multi look to the image so to
[40:53] do this we go to radar sar utilities multi looking under the processing parameters we select I and Q
[41:14] which are the real and imaginary bands of the interferogram and we also select the coherence the multi look that we
[41:24] will apply will be with square pixels so gr square pixel and we will use a multi look of six both in the range and in the
[41:38] azimuth okay and now this is equivalent to a pixel resolution on the order of 13 meters okay now we select run and it
[41:55] could could generates an image that's master underscore stock underscore IFG underscore ml for multi look so we open
[42:10] this bands and in this case you will not see the phase we need to generate the face
[42:18] face we just have here the real and imaginary part of the interferogram we will use these two images to generate the face
[42:27] and to do that you right-click on the file name and click on band math now you select the Edit expression on the bottom
[42:40] there and under functions select phase there you go and in the face expression we will now replace the ad signs with AI
[43:00] which is the real term and with q which is the imaginary term this is a complex number so and then select okay
[43:14] we will then name it phase underscore ml in this case it's been named it in Spanish fossa underscore multi looked
[43:30] and select okay so we now have the face and we see the face as black and white
[43:40] you can change the colours by going to the color manipulation tab on the left on the bottom left and select basic and
[43:49] select the color range such as the spectrum cycle so what you're seeing here is the interferometric faced
[43:57] colored with a ground range or sorry with a pixel resolution of on the order of 13 meters so now the next step is to
[44:07] apply an adapted filter and in this case we will be applying the Goldstein filter and to do that we go to radar interfere
[44:19] metric filtering Goldstein phase filtering alright so the input image is the multi load image and under processing
[44:38] parameters the parameter that determines the level of filtering is the first one so the adaptive filter exponent which
[44:46] goes from zero to one one is the maximum filtering and zero does not apply the filter so we'll leave the default values
[44:55] but you can play around with this parameter all right and now we'll hit run and this step is very quick all
[45:15] right so now we have our interferometric face that is multi looked and it's filtered using the Goldstein filter okay
[45:25] so we open it and we open the face alright so you can see that it has been
[45:36] filtered and the next step now consists in unwrapping the face which has what's called two pi ambiguities notice that
[45:44] the face goes from red to blue and red again in some places so here you see red
[46:02] blue and then red again these ambiguities have to be unwrapped to then be able to convert that unwrapped phase
[46:13] into typography so the face unwrapping can be done with snafu that's a software you can run it on Windows
[46:26] Nikolaus works with the Linux in a bun too and so what he has done is he's exported the image to snafu and then
[46:36] Randy unwrapping there outside of snap okay so we need to and then that result is that imported into snap to proceed to
[46:48] the next step which is to convert the topographic phase to elevation so to unwrap the interferometric phase you
[46:56] click on radar interfere metric unwrapping unwrapping snafu export and we select the filtered face through multi looking and Goldstein okay and under
[47:12] snafu export tagged the statistical cost mode we select topo the default is defo which is for deformation maps and under
[47:23] target folder I will select the folder where all the files are for this demo and I'll specify snafu as the file name
[47:37] but you can name it as you wish a number of tile rows I will select one and one
[47:45] because the image is not very large so here will process the entire image however based on your RAM you can make
[47:52] this smaller the other parameters are kept as default and for all of these parameters there is a Help button in
[47:59] snafu that provides information on each of them and you can play around with each of them all right so we hit run and
[48:21] the exported file will be in a directory that will open separately so now we go to Linux and go to the directory where
[48:37] the output file is located now the file that was generated is called snafu Kampf conf extension ok and so at the top of
[48:57] the file when you open that file at the top is the command that needs to be run
[49:01] in order to do the phazon wrapping here you have it so you want to copy that command and then take that and go to the
[49:10] terminal and to the directory where the archive is located and you run this man you paste it and you run it now this
[49:36] step can take a long time depends on your computer around 30 minutes so it don't panic be patient in this case it
[49:53] was fast because the image was heavily multi lower than it was filtered however the image is less filtered or multi load
[50:00] it will take longer and once the process is finished you'll find in the snafu directory the unwrapped image here we
[50:08] have on unw phase okay so the file name will be unwrapped underscore IFG and then there are two files one with a dot
[50:22] IMG extension which is your actual image file the other one has a dot HDR extension which is the header file and
[50:31] what we do is we go now to snap where we turn to snap and go to radar
[50:38] interferometric unwrapping snafu import and in the first tab leave the default as is which in the case of source
[50:52] product in the second tab we need to specify the unwrapped phase image and we select the header file ok this unwrapped
[51:10] phase image the one with a dot HDR extension so unwrap HDR in the third tab we leave everything
[51:25] as default so we want to write we want to save the wrapped into program and then in the fourth tab we hit run and we
[51:47] overwrite our current multi look than Goldstein filtered alright so that goes very quickly and we open the new file
[51:55] which is the unwrapped file so it's the last one here and once we have the unwrapped phase what is left is now to
[52:08] use the formula of the inner parametric phase that relates the topography with the inner parametric phase we saw this
[52:16] in the theoretical part but this is done by going to radar interferometric products phase to elevation and in the
[52:37] face to elevation processing parameters a tab we have a parameter asking which DM we want to use in this case the
[52:48] default is SRT m3 arcsecond which is automatically downloaded so this is used to relate the elevation of the
[52:55] interferogram after unwrapping to actual elevation so the term that relates to face with the topography produces elevation values that are relative but
[53:06] not actual values of elevation use the DM to tie down these relative values to actual elevation values okay
[53:16] so we click on run and this should go pretty quickly close the window open our new file now that's the DM elevation we
[53:46] visualize the elevation image it looks beautiful and this image has elevation for each pixel relative to the reference
[53:54] surface okay so this is a digital evasion model however this is in the radar imagery or projection or slant
[54:05] range projection so it sorry it's in the radar geometry satellite geometry slant range and so we need to put it in the
[54:17] ground range projection in order to visualize it in things like Google Earth or in a GIS type software so in order to
[54:26] do the geometric correction we need to go to radar and under select geometric terrain current correction range Doppler
[54:53] terrain correction so under processing parameters we will use the SRT m3 arcsecond DM once again and all the
[55:04] other parameters we leave as default in the input output parameters tab we make sure that the source is the DM that we
[55:13] generated and we leave everything else as is and then we click run and this step is also very quick alright so now
[55:28] we have our latest product this isn't a ground range projection terrain corrected we visualize the DM projected
[55:41] to the ground range okay and we can see the coordinate values in the bottom right they are in latitude
[55:49] and longitude as we move the cursor around the image you can see the lat/long and now you can export this
[55:57] image into Google Earth by right-clicking over your image and selecting export as Google Earth KMZ here ISIL
[56:12] that the rectory will have been working we select okay we overwrite because I've generated this already so it's just over
[56:19] writing it and now we go to the directory where this file has been saved this KMZ file and we double click on it
[56:27] to open it on Google Earth okay there it is is KMZ and note that the elevation matches what
[57:14] Google Earth is indicating so and you can all still export this into other formats that where you can open this on
[57:27] a GIS type software so these are the basic steps to generate a DM with snap using an interferer metric pair the
[57:42] methodology explained here is a basic workflow and there are some limitations remember that the during the theoretical
[57:49] a part of this webinar the interferometric phase was written as the sum of terms referred to by the equation
[58:01] that you see here one term relates to the topography another term relates to the displacement of the surface another
[58:08] one to orbital errors another one to atmospheric effects and then another one to noise in this demo we did not account
[58:16] for orbital errors or atmospheric effects the orbital errors can be visualized as errors in the perpendicular baseline and they manifest
[58:27] as ramps in the range direction in the interferogram errors in the variation of the parallel baseline in other words
[58:35] orbits that are not parallel they manifest themselves as ramps in the azimuth direction on the other hand errors due to
[58:43] atmospheric effects can be small spatially but they can vary in time and these terms would have to be removed if
[58:51] we wanted to create a DM with greater accuracy and we have not done that here so we assume that the measured in a
[59:01] parametric phase was solely due to topography plus some noise which we reduced to filtering we've considered other terms as normal so in a way this
[59:13] is not completely off because a pair we used was a tandem pair with one day in between acquisitions and the study
[59:21] area is a very dry region we also assumed that there was no surface displacement between the images this is
[59:30] a correct assumption since we know that there were no suspect movements between the image acquisitions there were also
[59:37] no obvious orbital errors nor that we see strange french ramps in either the range or the azimuth so this assumption
[59:45] seems to be correct too now if we wanted to generate a DM with higher accuracy we would have to somehow
[59:52] account for all of these other effects and you normally do this not with a pair of images but rather with a stack of
[1:00:00] images and with more advanced techniques such as Espace or psi permanent scatters perhaps this is a topic for future
[1:00:10] training but with that you can follow a basic workflow that will allow you to create a DM and you're now aware of some
[1:00:23] of the errors that might be introduced into the DM and how these errors might look like so thanks everyone and before we start
[1:00:34] the Q&A session I just wanted to remind you that there is a homework assignment associated with this training it's due
[1:00:43] on January 8th and you can access the homework through the link that you see here on the page and the link is also on
[1:00:55] the chat window so with that I conclude this presentation and I'd like to thank you very much and we're now open to our
[1:01:12] question and answer period great so let's get started with the question and answer session we have Nikolas
[1:01:27] Greenfield on line and he has started answering some of the questions that you've been posting already remember the
[1:01:35] process here is for you to write your questions in the questions window and we'll be going through them and
[1:01:42] answering each of them so Nikolas has answered in Spanish I will be translating into English and so this
[1:01:53] process might be a little slower than normal so just be please be patient and we'll try to get to everything all right
[1:02:05] so let's start with the first question is it possible to get sore images in this tutorial these steps to generate a TM so the data
[1:02:24] that were used here are proprietary however Nikolas is looking at getting access to these images and posting them
[1:02:38] however you can use Sentinel one images so what he presented here was a step-by-step workflow on how to generate
[1:02:47] a DM and Sentinel one images are open and free so you can use those as well as
[1:02:55] halos pulsar data which are also open and free the actual question number one saint target to different positions is
[1:03:08] it necessary to be taken at the same time or it could could it be different times nicholas indicates that to
[1:03:19] generate the DM ideally you would want the observations at the same time from different positions so in this way there
[1:03:35] is no temple de correlation or atmospheric effects the SRT MDM was generated using this type of configuration where there were two
[1:03:55] antennas separated by a fixed baseline one antenna would emit an electromagnetic pulse and both of them would receive the scattered signal
[1:04:11] normally however you just have one antenna and you have to do repeat pass that means you observe the same point at
[1:04:22] different times and when you do this you have to account for different sources of errors like like a baseline or
[1:04:30] atmosphere atmosphere affects I'm sorry you you have to account for different sources of errors such as atmospheric effects question -
[1:04:44] what is an applicable coherence value and guidelines to determine the quick critical perpendicular baseline okay the critical baseline is the perpendicular
[1:04:59] separation for which the geometrical coherence becomes zero so the critical perpendicular baseline is equal to lambda times BW the range times slant
[1:05:22] range so there's a formula that's being written here that indicates that critical perpendicular baseline so what are all the the factors that account
[1:05:37] into that critical perpendicular baseline okay question number three where would you obtain better results if you use more than two images so
[1:05:56] niccola's indicates that in the case of using a stack of images you can better remove the atmospheric effects and
[1:06:04] orbital effects utilizing more advanced techniques which are beyond this course but these techniques remove the effects of the atmosphere knowing that the
[1:06:21] atmosphere can be very variable through time and the effects because of orbital errors are also removed knowing that
[1:06:36] these can generate ramps in the azimuth and that's due to error because the orbits are not parallel and
[1:06:49] also errors in the range so that would be the errors in the critical perpendicular baseline so if you have a
[1:07:04] stack that is large enough you can then estimate each of the terms in the inner parametric equation in a statistical way
[1:07:17] and you can separate each of the contributions okay so the next question is regarding master and slave what does
[1:07:32] this mean the master is the reference image so everything is really registered to the master and then the slave are the
[1:07:46] images that you are registering to the master or your so master will always be the reference in little gastly limbs no
[1:07:58] importa quite a helmet ridiculously late was the second oil dude and not a you know that less onion toes okay so in a
[1:08:07] case of a DM it doesn't really matter which one you specify as a master and which one you specify as a slave loci
[1:08:20] importa is better elevation perpendicular kinda las imágenes Teaneck sir sentiment a grande para tener a sincere alia a little boy davia he gets
[1:08:32] DM pon de la CIMA canal Sarah Marie Rhonda but I can wash effect of temporalis the the important part is to
[1:08:42] have a large enough base perpendicular base line between the images so that you have a large enough sensitivity to
[1:08:51] topography and that's a Parisienne temporal no Marie Randi but I cannot restrict or the correlation temperate and and also you
[1:09:08] want to make sure that the temporal separation between the acquisitions is not very large so you don't have any D
[1:09:15] correlation temporal decorrelation due to for example things like atmospheric effects ie convenience shabooey poor Lausanne contacto con las personas adecuado para
[1:09:29] para el directo de Malabo DC the mass okay great so this is a relation to question fix it
[1:09:41] someone state that they're very interested in using Sal Khan images how can I get the bill and Nikolas indicates
[1:09:50] that if you said I'm an Eamonn put you in touch with the the right person there are some agreements that need to be
[1:10:01] established but it might be possible for you to get access to the data so the next question I've tried to create DM on
[1:10:15] forest area however the payment is very low low do you have suggestions see all the areas in the forest I Mucha
[1:10:26] decorrelation volumetric ax porque done interaction economist are welcome montón de cosas entonces in Toledo st. Rio sassiness can be a mutual okay lo que
[1:10:38] ways controller a correlation data Depot so he's saying that in areas where there is dense vegetation you tend to have
[1:10:50] high D correlations okay because what changes in these areas in time and so the best way to try to avoid this
[1:10:59] decorrelation decorrelation is to use a longer wavelength such as El band no implica you okay okay okay no you
[1:11:10] know funciona poor young poor lion the raxiom getting alone at a diploma is right so even then it might it's
[1:11:20] possible that it might not work that well and it has to do with wave action with the features on the surface so that
[1:11:33] next question why do we need the DM after the phase unwrapping to find the elevation estamos Elden porque cuando se
[1:11:43] most selfish and rapping la faces tan a float on doe Austin referee asana entonces para poder hacer que l'on to
[1:11:52] reconsider demo castle again one of the Punta to the Gaussian kernel to the barrel he deploys the
[1:11:59] record as a dude I wanna get under videos okay so you do it because you don't have a reference basically the the
[1:12:12] face is floating there is no reference so you use a dia as a point of reference and to you tie that point of reference
[1:12:20] then to have our show valor the rest of your pixels that's the next question why let's see what is the vertical elevation
[1:12:41] accuracy we can expect processing Sentinel c-band no stream where custom brows are sent in and show Peru the
[1:12:54] precision K maja Tanner dependent poco de la then filter cap liqueurs a ruler with a moody look Calabria see a mass at
[1:13:03] coastal areas and ASEAN ok so they're showing us that he not familiar with Sentinel he data at Sentinel one data
[1:13:16] but that it would ultimately it would depend theocracy would depend on the filter that you use at the nose the
[1:13:24] multi looking Emilio Childress possible bargain our precision in al-tohra pero Baja Thurmond of precision resolution aphasia so as you filter the more useful
[1:13:44] but Sir you gain accuracy in the elevation measurement but you lose resolution spatial resolution okay so the next question are there any
[1:14:03] plans on a training rollers teaching Espace psi possibly it's good that you mention it and it's always good to know
[1:14:13] what the community is interested in so this is something that we'll consider for future trainings question 11 can you
[1:14:22] talk a little on the response time given we request interfer mitrik in main source satellites both for archive
[1:14:33] catalog and new acquisition I think you're referring to the latency in terms of how quickly you can obtain images
[1:14:43] would and for Sentinel one I believe the European Space Agency Cooper because post Sentinel images within a day so you
[1:14:58] can access images from 24 to 48 hours but you'll have to check the alaska satellite facility also have a sub ace
[1:15:10] however it's it's a little the delay is a little larger there in the air being posted so for the latest sentinel one
[1:15:21] images go directly to the ISA Copernicus website question 12 what are the advantages of in SAR generated DM in
[1:15:32] comparison to after generated DM no say in case after Ivanka do say pero ahora que una mejor dicho sino que son
[1:15:42] como Technica's complement areas do finally improve their own technical problems photo is a MIMO right I said he's not that familiar with Astor
[1:16:07] however these are complementary techniques these are different techniques and you're generating a Novation model with after I do know that
[1:16:18] some of the issues has been cloud cover so that is an optical sensor and that's always a challenge that you'll run into
[1:16:29] when using optical sensors is called color question 13 is called optical image with respect to restore image um
[1:16:43] yeah a possibility for massive Italian si se ponen core kita yes you destroy them you need to have
[1:16:56] the orbital information in order to accurately be able to collect a stir them question 14 with the resolution the
[1:17:08] horizontal and vertical resolution of the DM from InSAR the equivalent to the DM used during the face to height
[1:17:15] inversion okay so the DM that was generated here has a resolution of 10 meters right 10 meters and and the SRTM
[1:17:35] is has a resolution of 90 meters a spatial resolution of night a meters the next question 15 can give some insight
[1:17:45] about grass creation in atmospheric based screening Corrections poor log entiendo no graphical creo que sera period of a roughly a knob no he
[1:18:04] died Montenegro can absolutely communica cannot rose software Kshama stamps okay but uh sir technically was either the
[1:18:14] tax loophole area remove Argos effect Osama varicose okay so not can the interface with the software called stamp
[1:18:24] which has certain techniques of Espace and statistical analysis options now the cept the sequence to follow here
[1:18:35] is to create a stock and interferometric stock reference to master and export this than the stamps for analysis so to
[1:18:46] create these the the graphs that you're mentioning question 16 I did not get good quality IFG interfer grams by
[1:19:03] inside due to topographic problems approach by psi would be useful for creating the diem loved LBC Opperman
[1:19:16] cutter interferometry would Lisa pixel catenin complan cierto crateros permanent a son of permanence Cutler's Insano eternal Toria Tolley margins you
[1:19:32] know castle different it in the canal dude us that's getting a piece you can and the Sousa para maana Toria rightly
[1:19:38] plus I'm into it in and implants you I know so he fishes on the lot of oil
[1:19:41] tiempo tiempo oh that's all Lasorda Kapoor along break so lucky Monty Etta okay so psi takes pixels that meet certain criteria so
[1:19:55] you're not going to have elevation in the entire image but just certain points so basically psi works in areas like
[1:20:04] urban areas where there's not much change norm its permanent scatters so it does little warriors that might
[1:20:13] have some change like in natural areas question 17 it's mentioned that the perpendicular baseline for in sperm must
[1:20:25] be Laurie well for denser should be small how about for time analysis in source such as psi in a permanent
[1:20:36] scatter insert and especially was it was significant a small wavelength subsidy ethica so the taller lost community
[1:20:49] interferogram aqui tenemos unless Taklamakan 16mm very dainty goes promised your son judea de formación he say in this case this the images here
[1:21:02] that will use have a small base line the the Espace which is a small base line look at you usually combination with a
[1:21:14] small base line for PSI the baseline separation doesn't matter you're looking more at permanent scatters that do not
[1:21:23] change and so question 18 we need a DM to generate a DM what have we had known
[1:21:32] fired existing DM for our RI para general um Cu separa puede poner la salle Turris ha para pin chalice alturas you can referee
[1:21:44] us a correct us and csoka know it Bunga assumed a man let him get remote Anita el uno por him to the son of the tipo
[1:21:53] Technica's tfboys del una manera okay so you use a DM to reference Oh remember it you just have what you're
[1:22:07] producing is is a has floating values you're not really to actual elevations and that's where the DM comes in with
[1:22:15] actual elevation values now if you don't have a DM then you probably would need like Institute where you know what the
[1:22:26] elevation is and down the the DM that you've created so you you have some reference points that you can then tie
[1:22:37] that the elevation those rough if we need to make a DM of a region with different climates should we look for
[1:22:46] the best climatic conditions to do the acquisitions so when you're planning the acquisitions you always want to plan for
[1:22:56] the optimal collection for the optimal images in the case of images that are already collected they're in a database
[1:23:06] you you want to make sure that you've got the best climatic conditions for the images that you select the next question
[1:23:19] what alternates the to tie up the unravel base elevation relative to ground elevation yeah you know I oft antonyms duty solicitor Timmy
[1:23:44] poor case even they don't in okay are you thirsty poems no sorry no no no koto pillow creo que Nellie nap today
[1:23:53] optional photos so there are several other DMS in fact snap has a number of options for different TMS that you can
[1:24:07] use there is an Astra derived em2 for areas outside of the SRTM coverage and snap also has the option of you
[1:24:22] uploading your own DM all right so the next question do the steps for processing shown here apply to
[1:24:39] Sentinel one DM C know of pathos unloved memo's la única diferencia okay creo que sentinel teen a baseline for warranted
[1:24:49] Chico's in este caso hot air Pakistan see the other topography meson is a certain problem because he conceived a
[1:24:59] linear I in this ya know something certainly no equals one so the steps are exactly the same with Sentinel one the
[1:25:09] only issue with baseline is that it tends to have very the only issue with Sentinel one is that it tends to have
[1:25:16] very small base lines which would mean low sensitivity to topography however if you can get large baselines images with
[1:25:27] large baselines then you'll have good results so it's just a matter of applying the same stuff that you saw
[1:25:34] here okay so the next question how can I down load Sentinel one a polarization you can download Sentinel one data through the
[1:25:59] Alaska satellite facility if you download in a parametric swath wide swath mode images the polarization comes in V V and V H and yesterday's sorry the
[1:26:12] first webinar of this series a discussed looking at flooding with Sentinel one images using Google Earth engine and
[1:26:23] that also shows you how to query the Google Earth engine Sentinel one database and you can query for either
[1:26:33] one of those polarizations it's vb + vh okay question 23 does not foo need to be running Linux karaoke in version s the
[1:26:49] LANAP la última paulina food in the windows show come on oh so we know nononono mas a pedo creo gonna have me
[1:27:00] company on Luigi so Nicholas indicates that he he doesn't use Windows is primarily a Linux user but he thinks
[1:27:11] that the latest version of SMAP does run in Windows question 24 would it be possible to detect urban destruction
[1:27:21] after an earthquake or bombing by comparing change between subsequently computed DMS before and after good one distraction a Mia para ver
[1:27:41] movimientos o ese tipo de ma possessions are no general dempsey puede comprar lo seen ok you sardines Oliver knows plasm
[1:27:51] en toe que tiene la que tiene la fossa el terreno partir de la fossa intercept romantic to be honest kala kala
[1:28:04] see rocky river no podía Verloc audience yeah Akane so murky no no no no sound it see these are ok so the best way for
[1:28:19] this application the best technique is differential interfere cause there you you really do want to look at surface deformation and sewed in
[1:28:28] star is sensitive at the centimeter scale right and yeah you know uh severe destruction is a wanna know us how it
[1:28:43] was all memento they mean the killer in Turkish alumina and Odinga lemme formal in acid Marcia cambio massages to Edo sexually
[1:28:51] plus autonomous there was a poorly she say computer time in the pork is a solution that's he machina no son Cody
[1:28:58] and this you know as our other facet Parliament okay so if the target is has completely changed then your you will
[1:29:12] not have any coherent so one thing you can do to look at say destruction is to look at coherence or and or D
[1:29:24] correlation over certain areas or the in coherence so question number 25 is the phase delay due to atmospheric disturbance much less
[1:29:39] in l-band compared to T and expense calahonda Tenerife era there is effect upon different layers got more feeling
[1:29:50] particularly under le it's a masterful top order you know for you don't implicate other may know some
[1:29:55] acid okay introduction akan difficulties it kept us so the different wavelengths interact with the different layers of
[1:30:03] the atmosphere so each of these is going to have some issue some sort of interaction with the atmosphere do the
[1:30:19] phase delay due to atmospheric disturbance is very less in l-band compared to C and a expand Massimino
[1:30:28] corresponding de la pregunta Savio exactly so this is similar to the previous response all of these are gonna
[1:30:39] interact with the atmosphere in some way or another which one is better for generating the vertical movement so the
[1:30:57] the accuracy would be within with these two is very different right so with Vince are when you're looking at
[1:31:05] displacement you're looking at an accuracy of on the order of centimeters with info with the interferometric phase
[1:31:14] it's on the order of meters for looking at so fog Rafi okay the next question there are so many sources of errors and
[1:31:25] factors of the correlation how to minimize these problems before conducting processing very good question en el caso de que hicimos un par de
[1:31:36] imágenes como fue este curso la única manera que tenemos s vu Carla condition a climatic occasion asada cuales para que Masha Allah for
[1:31:45] example I'm afraid Eagles okay so the best way the best thing you can do is to choose your image is based
[1:31:53] on climatic conditions images that are relatively close in time and then their orbital errors so even though the
[1:32:02] orbiter introduced ramps so even though you can't really control these orbital errors are always to remove the round
[1:32:11] and that's for the case of using fewer edges which is the demo that was shown here today could you tie in the insert
[1:32:22] PM to benchmark data so so benchmark may the data means unknown elevation reference point yes so this is exactly
[1:32:34] what you want to do you want to tie your your diem to a reference data set of
[1:32:41] benchmark data set a data set where you know the elevation values are correct and this data set can be another DM like
[1:32:52] an SRT MGM your own date DM or it could be Institute points where you know the actual elevation for that point is the
[1:33:02] Vince our technique only valid for centimeter level displacement for example Faison rapping ambiguity cannot be resolved when
[1:33:15] elevation changes are too large Anelka so they interfere with differencial uno boy unwrap later fasten the optimism indoors finally diamo Sina
[1:33:30] mooyah sin embargo tomato ketchup or serious cantar la cantidad de franca ke possess all as a la cuenta Chuvalo are
[1:33:39] cement so in the case of this where you do the your face on wrapping then you have displacements you can count the
[1:33:46] fringes and then determine what your displacement was based on okay question 32 what is the final output so look
[1:33:58] pretty cool is it a digital surf surface model or digital terrain model it's more digitally voseo afraid o al fasi a
[1:34:11] reference yeah esta Casa Lucas a Giunta Quattro hey either reporters unlucky lawanda a kiss sugar Tony Hsieh painter
[1:34:21] lawanda a kiss no sabían well cereal a differentiable of Tillison 3 they see me they tame pero la Ronda Aggies young
[1:34:33] career after attack a profound yes in fortunately me not ever see the m/l s/m so so this is completely dependent
[1:34:43] obviously on the wavelength because the longer the wait that's the granite raishin right so if you have vegetation
[1:34:51] and you have a longer wavelength you're penetrating through the vegetation you're seeing more of the a terrain
[1:34:57] rather than the top of the canopy in this case expand was used and in this is a desert type area so no little or
[1:35:11] minimal vegetation so what we're actually seeing in this case is the the actual terrain ok so that's it in terms
[1:35:23] of our Q&A session I'd like to thank everyone for joining a really special thanks to our guest
[1:35:33] speaker today Nicholas Goodsell from Konya from the Argentinian Space Agency for this excellent presentation you'll be able to access the recordings and the
[1:35:43] presentations online and also remember there is a homework associated with this webinar series and that's going to be
[1:35:52] due on January 8th I'd like to set the the organizers of this webinar since this is the last of the three part in
[1:36:03] the series I sure is Brock Levin so Wayne Hudson or doy Sean McCartney together David Barr Bato for the
[1:36:16] translation so there's a very large are set team that's been working on getting everything and together so thank you to
[1:36:25] them and thank to you any questions any additional specific questions you can send me an email send Nikolas an email
[1:36:35] and we'll try to get back to you okay so stay tuned for other our trainings our our set is on social media on Twitter or
[1:36:48] goat or sign up to receive arson emails about upcoming trainings we will have enough there Sarge next year and we will
[1:36:57] be announcing that way ahead of time a great day to everyone thanks bye-bye Thank You Nicholas serega yas asado absolute
[1:37:21] you
