# An Introduction to Synthetic Aperture Radar (SAR) and Its Applications, Part 1/3

`https://www.youtube.com/watch?v=AUIUpFHgVx0` · id 152 · 2:18:51 · module 5 — 037-an-introduction-to-synthetic-aperture-radar-and-its-applications

[00:01] hello and welcome to our introduction to SAR and its applications webinar series I'm Dr Erica podest and I'm a scientist
[00:10] at NASA's jet propulsion laboratory focusing on the study of terrestrial ecosystems using SAR I'm also an instructor with the aret program
[00:19] although this webinar series is an introduction it covers topics in Greater deep depth than the first introduction
[00:27] to SAR arset training from 200 17 the open availability of operational SAR data from Sentinel 1 and some palar
[00:36] scansar data is making the use of SAR more prevalent and this will continue to grow with upcoming radar satellite
[00:44] missions such as nysar and biomass and this is why we believe this introductory training is so timely before I begin talking about SAR
[00:57] I would like to provide a bit of background about the arset program NASA's applied remote sensing training program ret offers free
[01:09] trainings on the use of remote sensing and model data along with methods and tools for the Global Science and
[01:16] application communities our trainings are tailored to different experience levels ranging from introductory to intermediate to Advanced our set
[01:26] trainings focus on six thematic areas AG agriculture climate and resilience disasters ecological conservation health and air quality and Water
[01:40] Resources oursa trainings are either online or in person all trainings are free of charge and use open- Source data
[01:48] and software some of our trainings are delivered or presented in both English and Spanish like this one yet all of our
[01:57] trainings have a Spanish uh PowerPoint presentation available and next I will provide you with an overview of this webinar
[02:12] Series this webinar series consists of three sessions today we will cover an introduction to SAR the second session
[02:20] on November 13 will focus on an introduction to interferometric SAR inar with guest lecturer Dr Eric Fielding
[02:29] from JP the third and final session will be on Wednesday November 20th and we'll provide an overview of sard data sources
[02:37] and tools with guest lecturers Dr France Meyer from the Alaska satellite facility and the University of Alaska Fairbanks
[02:46] as well as Heidi Christensen from the Alaska satellite facility there will be a homework assignment that opens on
[02:53] November 20th the last day of this training and it'll have a due date of December 4th a certificate of completion
[03:02] will be awarded to participants who attend all the live sessions and complete the homework assignment by the
[03:08] due date the prerequisite to this webinar series is the fundamentals of remote sensing and these are the learning
[03:21] objectives for this webinar Series so by the end of this webinar series participants will be able to recognize
[03:30] basic features and functionality of SAR evaluate SAR sensor characteristics for addressing different science questions and application areas
[03:40] interpret the information content in SAR images to distinguish different features detected by the sensor evaluate the creation of an
[03:51] interferogram through interferometric SAR interpret an interferogram to measure surface deformation and small movements compare and contrast the
[04:02] capabilities of historic current and upcoming SAR data and finally to access and visualize our data for a given
[04:10] location and time now this first session will provide an introduction to the basic principles of of SAR I am the instructor for this
[04:25] training I'm a scientist at NASA's jet proportion Laboratory and my expertise is in the use of microwave remote
[04:32] sensing primarily SAR for the study of wetland inundation Dynamics vegetation growing season in the northern high latitudes and mapping and monitoring
[04:42] land cover and land use change I'm also the community engagement and training coordinator for an upcoming SAR
[04:49] satellite called nysar which is a collaboration between NASA and the indiia space research organization nysar is scheduled to launch in early 2020
[05:01] 5 so these are the objectives for today's session by the end of the session participants will be able to
[05:09] understand the radar remote sensing signal signal characteristics recognize how the radar signal interacts with the surface interpret a sar image to distinguish
[05:20] different features detected by the sensor and identify application areas where different SAR sensors are most applicable how to ask questions please write your
[05:34] questions in the questions box which is at the bottom right you'll have there'll be three points click on that and
[05:40] there'll be a popup menu select questions and write your questions in that box and we will address your
[05:48] questions at the end of this session feel free to enter your questions as we go along and we'll try to get to all of
[05:57] your questions during the Q&A session the remaining questions that we cannot answer we will answer them in the Q&A
[06:05] document which we will post to the training website in about a week so now let's start with our
[06:17] introduction to synthetic aperture radar so let's start with the electromagnetic spectrum which is the range of electromagnetic energy that
[06:27] spans from very long wavelength such as radio waves which can be the length of a football field to very short wavelengths
[06:35] such as gamma rays which are the length of an atomic nucleus note that most of the energy on the spectrum is not
[06:44] visible to our eyes and that visible light is just a sliver of energy from the total amount that surrounds us now I
[06:54] want you to think of this energy as waves propagating not much different than waves Crossing an ocean except that
[07:02] electromagnetic radiation travels at the speed of light remote sensing sensors are designed to operate at specific regions of the electromagnetic spectrum
[07:13] according to their intended application microwave sensors operate within the range delineated in this figure which is at a much lower
[07:24] frequency range than Optical and infrared sensors now to put things into context the wavelength of light is about
[07:32] 390 to 700 nanom while for microwaves it's on the order of 0.3 to 100 cm because of this huge disparity in
[07:44] wavelengths the features on the Earth's surface appear differently in the microwave range than in the optical range in general there are two main
[07:57] types of remote sensing observations passive and active so generally speaking passive sensors they measure energy that's emitted or reflected by the earth
[08:06] atmosphere system and examples of passive sensors include Optical and thermal sensors as well as passive microwave sensors then there's in
[08:17] general terms active sensors which provide their own source of Illumination and these instruments emit a burst of
[08:26] energy let's call it a signal and then they measure the portion of that signal that's reflected back examples of active
[08:34] sensors include liars and Radars now the term microwave remote sensing refers to making observations in the microwave range of the
[08:44] electromagnetic spectrum and these observations can be passive passive sensors known as microwave radiometers are analogous to Optical
[08:55] sensors however they operate in the microwave part of the spectrum all objects emit microwave energy are in
[09:03] very small amounts passive microwave sensors detect this naturally emitted energy which is related to the temperature of the emitting surface the
[09:13] antenna on the microwave radiometer detects this emitted energy and because this emitted energy is very small or has
[09:21] a low signal to noise ratio the spatial resolution of microwave radiometers is typically low on the order of 10 to 50
[09:30] km a large field of view is therefore necessary to detect enough energy to record a signal which is why most
[09:41] passive microwave sensors are characterized by having a low spatial resolution all right so now let's talk about active microwave sensors which can
[09:51] be further categorized into Imaging and non-imaging sensors examples of non-imaging sensors include radar cers and and scatterometers typically these sensors
[10:03] take measurements in one Li linear Dimension as opposed to the twodimensional representation of Imaging sensors radar altimeters they transmit
[10:13] short microwave pulses and measure the roundtrip delay time delay to Targets in order to determine their distance from
[10:21] the sensor generally altimeters look straight down at nater below the platform measuring height or elevation then there's scatterometers these are
[10:32] also non-imaging radar sensors that provide quantitative measurements of the energy returned from targets they usually have a large footprint and
[10:43] coarse spatial resolution on the order of again 10 to 50 km and are primarily used in Ocean studies to measure wind
[10:51] speed and direction now the main difference between synthetic aperture radar and gomers is that a synthetic aperture
[11:02] radar sensor has a high spatial resolution on the order of 10 to 50 100 m but relatively low
[11:12] radiometric resolution around 1db while scatterometers have low spatial resolution but High radiometric resolution on the order of a tenth of a
[11:25] decel so finally there's syn IC aperture radar that's an Imaging active microwave sensor and SAR is analogous to an ultrasound SAR remote
[11:40] sensing is commonly referred to as radar remote sensing and in this webinar series we will focus only on radar
[11:48] remote sensing specifically s this slide details the advantages and disadvantages of radar remote sensing compared to Optical remote sensing radar
[12:01] systems can operate under almost any kind of weather condition which is a significant advantage over Optical sensors uh which are hindered by clouds
[12:11] and this capability is particularly valuable given that many regions especially in the tropics are frequently Cloud covered radar can observe the
[12:21] Earth's surface at any time regardless of whether it's day or night and this is very useful during winter months where
[12:27] large areas experience long hours of Darkness as well as in uh especially in polar regions where Darkness can persist
[12:36] for several months radar signals can penetrate through various mediums such as vegetation vegetation canopies uh snow packs and soils
[12:47] although the extent of this penetration is dependent on the frequency in contrast Optical sensors only detect information from the very surface of
[12:58] these medium radar remote sensing requires minimal to no atmospheric Corrections whereas Optical remote sensing is heavily reliant on atmospheric Corrections for
[13:09] proper image interpretation and then finally radar is highly sensitive to the moisture and structural characteristics of the
[13:17] surface being observed while Optical remote sensing is sensitive to the spectral properties of the land surface it's important to note that the
[13:27] information content and radar data differs from that in Optical data and this distinction is not necessarily an
[13:35] advantage or a disadvantage but it is crucial for understanding the the types of insights that each sensor
[13:44] provides however now there are disadvantages associated with radar the information content in radar data differs from that in Optical data which
[13:56] can make interpretation challenging in addition radar images often exhibit speckle which is a salt and pepper effect that complicates image
[14:06] interpretation and Analysis and then finally the presence of topography can introduce distortions in radar images that must be accounted for during
[14:19] analysis this slide highlights the advantage of using radar data which can observe the Earth's surface regardless of most weather conditions the figure
[14:29] displays an average of all satellite Cloud observations from modus between 2002 and 2015 the color gradient ranges from dark
[14:41] blue indicating no clouds to light blue indicating some clouds and white indicating frequent cloud coverage as shown certain regions of the world such
[14:53] as tropical areas experience significant cloud cover in these locations radar is an ideal sensor for obtaining reliable
[15:03] and consistent observations this slide shows a comparison between an optical composite and a radar composite of Panama the
[15:14] image on top is a sensel 2 RGB Optical composite while the image on the bottom is a palsar scansar radar composite from
[15:23] the Japanese space agency jaxa Alo two satellites both composits cover the same typ time frame from November 1st through
[15:30] the 30th 2019 cloud cover is common in Panama resulting in gaps in the optical data even over an entire month however this
[15:41] is not an issue for radar sensors so now let's discuss the fundamentals of radar image formation let's begin with some basic
[15:55] concepts of Radar Radar stands for radio detection and ranging originated from investigations into the reflection of radio waves in the late 1800s and early
[16:08] 1900s it was developed in Earnest during World War II primarily for navigation and Target location as previously
[16:17] mentioned radar can be categorized into two types Imaging and non-imaging this webinar series is focused on Imaging
[16:24] radar and there are two types of Imaging Radars real real aperture radar and synthetic aperture radar now as the
[16:32] acronym suggests radar functions as a ranging or distance measuring device essentially a radar emits a signal toward the Earth's surface and measures
[16:44] the time it takes for that signal to return all Imaging Radars are side side looking if a radar were to look straight
[16:52] down as depicted in the figure on the left it would not be able to differentiate between two points A and B
[16:59] on the surface in this scenario the signal will reach points A and B simultaneously and return to the sensor
[17:08] at the same time which is why you wouldn't be able to differentiate them however when the radar is sidel looking
[17:17] as shown in the figure on the right the time it takes for the signal to reach points A and B differs allowing for
[17:25] points A and B to be differentiated both real aperture and synthetic aperture radar are side looking systems with an illumination
[17:34] Direction usually perpendicular to the flight Glide a radar system fundamentally consists of a transmitter receiver an antenna and an electronic system for
[17:47] processing and recording data the transmitter emits short bursts or pulses of microwave energy at regular intervals which are focused by the antenna into a
[17:58] beam beam this beam a radar beam illuminates the surface obliquely at a right angle to the motion of the platform the antenna
[18:08] receives a portion of the transmitted energy that is reflected or back scattered from various objects within that illuminated beam as shown in this
[18:18] figure by measuring the time delay between the transmission of a pulse and the reception of the back scattered Echo
[18:25] from different targets the radar can then Det determine their distance and location as the sensor platform moves
[18:34] forward the recording and processing of the back scattered signals build up a two-dimensional image of the surface one
[18:43] unique aspect to radar is that the spatial resolution in the X and Y directions is independent of each other
[18:51] and I will explain this concept further in the upcoming slides so let me first explain some of
[18:58] the terminology in radar geometry the instrument measures distances between the sensor and the points on the Earth's
[19:07] surface where the signal is back scattered this distance is slat range so look at the illustration here it's the
[19:15] direct distance between the sensor and the target the flight direction is also referred to as a long track or azimo
[19:24] Direction and the direction perpendicular to the flight path is the across trck or range direction as the radar on the satellite
[19:34] or aircraft moves in the direction of flight the ground is scanned in two Dimensions one dimension is the range
[19:42] Dimension objects are placed along in this Dimension according to their distance from the radar the second dimension is the along track or azimo
[19:53] Dimension it is parallel to the motion of the radar platform in this Di mention the ground is scanned by the beam moving
[20:02] across the ground at a rate equal to the speed of the platform of the aircraft or the satellite and objects are placed in
[20:10] this Dimension according to the position of the aircraft along the track an image is built from the reflected signals in
[20:18] both dimensions range resolution is the resolution perpendicular to the sensor's movement movement so it's the resolution in the direction
[20:32] that the sensor is looking okay and it range resolution and SAR refers to the ability of the radar system to
[20:41] distinguish between two Targets that are located at different distances from the radar sensor it is the minimum distance
[20:49] between two objects that allows them to be separated in the radar image so if two Targets are closer together than
[20:57] this resolution they will will appear as a single Target in order for two Targets to be distinguished their Echoes must
[21:05] necessarily be received at different times this image shows a pulse of length L which is determined by the duration of
[21:13] the pulse transmission this pulse is moving toward buildings A and B the slat range distance or the direct sensor to
[21:23] Target distance between the two buildings is d as shown in the top image for a side looking radar to image
[21:31] separately two ground features that are close to each other in the range Direction it's necessary for the
[21:38] reflected signal from all parts of the two objects to be received separately by the antenna any time overlap between the
[21:47] signals from the two objects will cause their images to be blurred together note that the slant range distance between
[21:54] the buildings is less than the pulse length um or l over2 so because of this the pulse has had time to travel to B
[22:07] and part of its return signal overlaps with the return signal from a the signal overlap will cause objects A and B to be
[22:17] imaged as one large object extending from A to B if the slat range distance between A and B were greater than the
[22:24] pulse length over two then the two signals would be received separately and would be two different objects on the
[22:32] image shorter pulse lens lead to better range resolution if the pulse is shortened however it has a negative
[22:40] effect on the signal to noise ratio and decreased radiometric resolution to address this limitation modern SAR sensors use a technique to
[22:49] generate longer pulse pulses with linear frequency modulation called chirping so instead of sending short pulses with a C
[22:58] frequency long pulses are transmitted that sweep up or down in the frequency and that's why it's called chir the
[23:07] extent of that frequency sweep is known as the pulse bandwidth the frequency modulation must then be processed after reception to
[23:16] focus of pulse to a much shorter value now for the user the result is the same as if a very short pulse length had been
[23:24] used throughout the system the pulse bandwidth is prop to the pulse length shorter pulse length means larger it's
[23:34] inversely proportional so shorter pulse length means larger bandwidth and better range resolution pulse bandwidth is expressed in units of Hertz rather than
[23:46] distance now the range resolution or the slant range resolution is not the same as the spatial resolution of the final
[23:55] image for analysis we're interested in the gra ground range resolution which is the actual distance between two points
[24:02] on the ground so the figure on the bottom left shows that equidistant points on the ground the ground range
[24:10] result in differently distanced points on the slat range the ground range describes the ability to discriminate objects that are situated on the ground
[24:20] and is calculated from using the local incidence angle which is the angle between the line of sight of the radar
[24:27] and the vert IAL to the terrain and I'll talk more about this later on in this presentation asimuth resolution
[24:38] describes the ability of a radar an Imaging radar to separate two closely spaced scatterers in the direction
[24:46] parallel to the motion Vector of the sensor in the case of a real aperture Imaging radar such as in the image when
[24:55] two objects are in the radar beam simultaneously for almost all pulses they can they both cause Reflections and
[25:03] their Echo will be received at the same time so this figure is an example of azoth resolution for a real aperture
[25:10] radar azoth resolution is determined by the angular beam width of the antenna and the slant range so note the
[25:18] projection of the antenna Beam on the ground as the antenna beam it fans out with increasing distance from the
[25:26] aircraft the azoth resolution deteriorate so the objects at point A and B in the figure would be resolved um
[25:35] um at the slant range of sr1 but not further away from the sensor at sr2 so that is at distance sr1 A and
[25:45] B result in separate return signals and at distance sr2 A and B would be in the beam simultaneously and would not be
[25:53] resolved for a real aperture radar two Targets in the azima um or a trck resolution can be separated
[26:02] only if the distance between them is larger than the radar beam WID now the radar beam width is inversely
[26:11] proportional to the antenna length which is also referred to as the aperture which means that a longer antenna or
[26:18] aperture will produce a narrower beam and finer resolution the actual length of the antenna is limited by what can be
[26:26] carried on an airboard or spaceborn platform for Airborne Radars antennas are usually limited to 1 to 2 m and for
[26:34] satellites they can be 10 to 15 m in L so to overcome this size limitation the forward motion of the platform and
[26:43] Signal processing based on the Doppler effect of the back scatter Echoes are used to synthesize a very long antenna
[26:52] and though and and therefore increase the azoth resolution so the AL track resolution depends on the length of the antenna and to produce
[27:04] high resolution images of the Earth's surface the antenna needs to be hundreds of times greater in size that what can
[27:11] be carried on a satellite so this is synthesized by using the movement of the satellite to simulate a very long
[27:19] antenna hence it's called synthetic aperture radar and typically the larger the aperture the higher the image resolution s therefore allows us to
[27:28] create high resolution images with comparatively small physical antennas through the use of signal processing of the Doppler shift associated with the
[27:38] motion of the aircraft this synthesizing process is possible because a scatterer or Target in a in this point on the
[27:46] ground remains within the real aperture radar Beam for many radar pulses adding up the reflections from all these PES
[27:55] appropriately allows then allows us to synthesize a large antenna with a much narrower beam width resulting in a
[28:03] better or higher spatial resolution in the azus direction radar pulses travel at the speed of light and can only measure the
[28:16] part of the signal that is reflected back toward the antenna most Radars measure amplitude and phase amplitude is
[28:23] the strength of the reflected signal and this amplitude is the back scatter coefficient also known as Sigma not
[28:30] which is a measure of the radar signal that is scattered back to the sensor from the Earth's surface normalized to a
[28:37] unit Target area Sigma KN is expressed in decb by taking the log 10 of the energy ratio usually values vary from
[28:47] minus 25 DB uh which are areas that have low back scatter or dark tones um or little energy reflected back to the
[28:56] radar to value that are greater than 1db so those are high back scatter areas or bright tones where a large amount of
[29:05] energy is reflected back to the radar the phase is the position of a point in time on a waveform cycle and phase is
[29:14] usually measured in angular units like degrees or radians the phase difference between two images is a new kind of
[29:22] image called an interferogram which is a pattern of frenches containing all of the information on relative geometry and
[29:30] so the next session in this webinar series will be focused on interferometric SAR here we will only
[29:37] discuss amplitude before moving on to the next session the most important thing to remember is that with radar the
[29:46] resolution in the X and Y directions can be different because they are determined by different radar parameters also since radar looks
[29:55] sideways the distance between objects and the the slant range is not the same as in the ground range and usually
[30:02] images need to be transformed from slant range to ground range I will talk about this later finally radar uses or
[30:11] measures signal amplitude and phase now not all radar systems measure phase amplitude is expressed in decb and
[30:20] phase in radians or degrees in this next section I will talk about the different ways that the radar signal can scatter
[30:29] back to the satellite when it interacts with different surfaces or targets there are different types of back scattering mechanisms and as a use
[30:40] useful rule of thumb the higher the back scattered intensity the rougher the surface first of all surface roughness
[30:47] refers to the average height variations in a surface from a plain surface and is measured on the order of centimeters if
[30:57] a surface appears rough or smooth to the radar depends this depends on the wavelength and the incident angle the
[31:04] wavelength will determine the interaction with the objects on the surface and generally if the roughness of an object or Surface is comparable to
[31:13] the size of the wave then there will be interaction the surface will appear rough and some energy will be reflected
[31:20] back a surface is it considered smooth if the height variations are much smaller than the radar wavelength
[31:28] the first type of back scatter mechanism is a smooth surface also known as a specular reflector a smooth surface acts
[31:36] like a mirror for that incident radar energy and most of the incident radar energy is reflected away from the sensor
[31:45] and those areas therefore appear very dark so open water surfaces tend to be specular specular reflectors when the surface height
[31:54] variations begin to approach the size of the wavelength then the surface will appear rough a rough surface will uh
[32:02] scatter energy approximately equally in all directions diffusely and a portion of the energy will be back scattered to
[32:10] the radar then there's the opposite mechanism which is called double bounds and Illustrated here with a building it
[32:18] occurs when two smooth surfaces form a right angle facing the radar beam and the beam bounces twice off the surfaces
[32:26] and most of the radar energy is reflected back to the radar sensor double balance is commonly seen in urban
[32:33] areas such as areas where there are roads and high-rise buildings or also in flooded vegetation where there's upright
[32:41] vegetation and in standing water the smooth surface whether it's a road or standing water will bounce the signal
[32:48] away from the radar and the building or the tree trunk will then reflect the energy back to the radar and these areas
[32:56] will appear very bright in the image finally there is volume scattering which is the scattering of radar energy
[33:04] within a volume or medium and usually consists of multiple bounces and Reflections from different components within the volume you can also have
[33:14] volume scattering within a snow pack for example or within a vegetation layer and this is an example of volume
[33:24] scattering in a forest scattering may come from the leaf canopy at the tops of the trees the leaves and the branches
[33:31] further below and the tree trunks and soil at the ground level volume scattering may serve to decrease or
[33:38] increase image brightness depending on how much of the energy is scattered out of the volume and back to the radar this
[33:46] figure illustrates all of the possible scattering mechanisms within a forest you've got direct scattering from the tree trunks ground Crown scattering
[33:56] Crown ground scattering ground trunk scattering trunk ground scattering Crown volume scattering and then direct scattering from the soil
[34:09] surface so the following couple of charts are examples of the different scattering mechanisms discussed and how they look like in a radar image so this
[34:18] example shows specular reflection and this image is a mosaic of the Amazon basin from the smap radar which was an
[34:27] band radar the yellow circle delineates an area of specular reflection which is open water and in this case is part of
[34:36] the Amazon River so flat surfaces such as paved roads runways or calm water normally appear as dark areas in a radar
[34:47] image since most of the incident radar energy is reflected away away from the radar sensor this example shows rough surface
[34:59] reflection delineated by the yellow circle on this map radar image and this area is an area of very low to no
[35:06] vegetation an area that has been deforested agricultural Fields with low vegetation tilt fields savanas barefields or in general areas that have
[35:16] low vegetation have rough surface scattering and the brightness of the pixel is slightly higher than a specular
[35:26] reflector this this example shows volume scattering delineated by the yellow circle on the smap radar image this is a
[35:33] forested area and notes the pixel brightness is higher than rough surface and specular scattering the intensity of volume
[35:42] scattering depends on the physical properties of the volume such as variations in moisture and structure and of course the characteristics of the
[35:50] radar wavelength polarization and incidence angle finally this examp example shows double bounds delineated by the yellow circle on this map radar image this is
[36:02] an inundated Wetland meaning that the trees are out standing water the reason that the signal is so strong is because
[36:10] it bounces off the water which is a specular reflector onto the tree trunk and other components of the tree and
[36:17] then bounces back to the satellite we cannot measure the amount of standing water just that there is water above the
[36:24] surface and double bounce also occurs urban areas where streets are smooth surfaces reflecting the signal away from
[36:32] the radar and then the buildings reflecting the signal back toward the satellites and so urban areas also
[36:40] appear very bright there are radar parameters and there are surface parameters that influence the characteristics of the
[36:50] signal we will start with the radar parameters there are three radar instrument parameters that influence the transmission characteristics of the
[37:00] signal these are wavelengths polarization and incidence angle wavelength is the length of the peak of one wave to the peak of the next
[37:11] wave or really the position of any point in the wave to the same point in the next wave in radar remote tensing we
[37:19] often talk about wavelength rather than frequency and this is because the length of the wave defines the interaction of
[37:27] the signal with the surface or medium and it is therefore easier to associate the capability of the sensor wavelength is
[37:35] inversely related to frequency it is the speed of light divided by frequency the higher the frequency the shorter the
[37:43] wavelength and vice versa the table on the right lists the common wavelength bands and radar the letter codes Ka LP
[37:52] for example were originally selected arbitrarily to ensure military sec security during the early stages of radar development which is why the
[38:02] denominations are not in alphabetical order as you can see each band has a wavelength and a frequency range so for
[38:09] example when someone talks about a specific L band radar and I'll give you the example of one called palsar which
[38:16] is an elban SAR sensor on board the Japanese Al Alo satellit PSAR operates at a specific frequency within the
[38:25] l-band range in this case at 1.2 GHz to convert that to wavelength we take the speed of light and divide it by 1.2 GHz
[38:36] that will equal to 25 cm note that a cent sensor has a wavelength of around 6 cm while an l-band sensor has a
[38:45] wavelength of around 24 25 cm and P band on the order of 68 cm there is therefore
[38:52] a wide variation in wavelength between bands there are two important things to remember about wavelength the first is
[39:03] that the longer the wavelength the greater the penetration of the signal through the medium that means soil snow
[39:10] or vegetation the figure on the lower left shows that a shorter wavelength such as xand which is around 3 cm will
[39:18] see the top part of the forest or probably the top third or fourth of the canopy while seaband will penetrate
[39:25] halfway through a forest and band will penetrate all the way through and this is limited by vegetation density but
[39:33] that's the general idea the same goes for soils in the case of dry soils X band will see the top part of the soil
[39:40] while cband will penetrate further and L band even further it has been shown that in areas where the soils are very dry
[39:49] such as in deserts the L band signal can penetrate on the order of 2 m deep the
[39:55] second important thing about wavelength is that the length of the wave will determine the interaction with surface
[40:01] objects in general if an object or Surface roughness is comparable to the size of the wave there will be
[40:08] interaction the surface will appear rough and there will be energy scattered back for example little energy is back
[40:16] scattered from a surface with a high fluctuation of the order of 5 cm of L band which has about 25 cm wavelength if
[40:26] L band SAR is used and the surface therefore will appear dark however the same surface will appear bright due to
[40:33] increased back scatter in a cband sar image which has a wavelength of about 5 cm the table in this chart shows
[40:44] examples of applications most relevant to specific bands if you're interested in Forest type studies where you'd want
[40:51] deep penetration through the canopy and information about Forest structure then you would go with L or PE bats if you're
[40:59] looking at agricultural type studies where the biomass is not as large as that of a forest then you want
[41:04] penetration through the uh vegetation layer and information about crop structure such as leaves or stems then you would go with sea band or X band for
[41:15] studies of ocean surface roughness you would go with X or KU bands or studies where you're interested in sensitivity
[41:22] to snow particle size and here's an example of radar penetration into soils this area is part of the Nile River near the fourth
[41:34] cataract to Sudan each image is about 50 by1 19 kilm the top image is a photograph actually taken with color
[41:43] infrared film from the space shuttle Colombia in November of 1995 and the radar image at the bottom
[41:52] was acquired with sir cxr in April of 1994 it is is a false color image using a combination of l l band and cband at
[42:02] different different polarizations the radar image shows a previously unknown paleo Channel lying north of the Nile that dark band um and
[42:14] this paleo Channel cannot be seen on the photograph these observations indicate that the course of the Nile recently
[42:23] shifted to the South due to relative uplift of adjacent regions of the Nubian soil here we have an example of
[42:33] penetration depth through vegetation with two different wavelengths in kalantan Indonesia so the top image is a seaband with a wavelength of about 5 cm
[42:44] and the bottom one is Pand with a wavelength of around 68 cm note the difference um in between the two and the
[42:53] greater level of detail in the P Van image the purple color areas in cband image are likely areas of low vegetation
[43:02] however the Pand image shows a lot more complexity as well as uh more information in the areas south of those
[43:10] purple areas also notes the purplish areas north of the river in the peand image and the road structure in the
[43:20] forest area in the Pand image and here's another example Le of signal penetration through vegetation to detect flooding here we have
[43:32] multifrequency SAR images at CL and Pand obtained from jpl's Airborne radar called airsar the area imaged is a
[43:43] wetland in the Manu national uh Park in Peru back in 1993 now remember that cand has a
[43:51] wavelength of around 5 cm L band around 24 cm and P band around 68 so as you
[43:57] would expect the longer wavelength penetrates deeper into the canopy to detect flooded vegetation which are the bright areas that's flooded
[44:07] vegetation the um so note all of the white areas in the peand image that are either not present or less bright and
[44:15] extensive in the lban image or the cband image where there is hardly any flooded vegetation detected the other radar parameter is
[44:27] polarization and it refers to the plane of propagation of the electric field of the signal irrespective of wavelength
[44:34] radar signals can be transmitted and or received in different polarizations most Radars are designed to transmit microwave radiation either
[44:43] horizontally polarized or vertically polarized and this figure illustrates these plays of propagation so if you had a long string tied to an object and you
[44:54] stand at the very end of the string and move move it up and down in a vertical
[44:59] manner such as the figure in the very top then the signal is vertically polarized if you move the string
[45:07] horizontally from side to side then the signal is horizontally polar polarized similarly the antenna can receive either
[45:16] the horizontally or vertically polarized back scatter energy by applying specific filters and some antennas can receive both so there can be four combinations
[45:27] of both transmit and receive polarizations as follows HH which means it's horizontally transmitted and horizontally received VV vertically
[45:38] transmitted and vertically received HV horizontally transmitted and vertically received and VH vertically transmitted and horizontally received the first two
[45:49] polarization combinations are referred to as light polarized because the transmit and receive polarizations are the same the last two combinations are
[45:58] referred to as cross-polarized because the transmit and receive polarizations are opposite of one another systems that collect in all four combinations are
[46:08] called quad pole and they can more fully characterize structure on the surface in summary polarization provides information on the horizontal and
[46:18] vertical components of the target this is an example of elban SAR data from a NASA Airborne sensor called
[46:29] uabar in 2013 it acquired imagery over the pakaya Samia natural reserve in the perubian Amazon this Reserve is a vast
[46:40] whand ecosystem the images in black and white are individual HH HV and VV polarizations notee the difference in
[46:50] intensity between the different images especially with the cross-polarized HB image false color images are an ideal way to
[47:01] visualize the contributions of the different polarizations through color combinations and this example has HH in the red Channel HV in the green Channel
[47:11] and VV in the blue Channel you can see the information content unique to each polarization which in this case is
[47:19] representative of different types of wetland vegetation or different types of vegetation HV is in the green Channel
[47:27] and anything that is green means that the return is higher in HV than VV or HH anything that is magenta means that
[47:36] there is a combined contribution between HH and VB an important point to highlight is that if the radar energy is
[47:45] reflected from multiple scatters within the canopy structure it often becomes depolarized leading to a strong reflection in the cross-polarized
[47:55] channels essentially the more times the signal interacts with different components as happens in volume scattering the higher the likelihood
[48:05] that the signal will depolarize and this is why cross polarizations like HV or VH are good indicators of the presence of
[48:14] vegetation and its structural characteristics incidence angle is the angle between the direction of the incident wave and the Earth's surface
[48:25] plane in radar the incident angle increases across the swats from the near to the far range large angles will be
[48:33] more sensitive to surface roughness and will penetrate less into the medium as opposed to small angles low incidence
[48:41] angles or small angles will result in high back scatter and greater penetration or higher back scatter so
[48:50] generally slopes facing towards the radar will have small local incidence angles caus in relatively strong back scatter to to the sensor which results
[49:03] in bright toned appearances in an image this is an example of the effect of incident angle variation on the left
[49:15] is a sentinel 1 BV image and on the right is the incident angle variation for the same image the radar is Right
[49:23] looking and notes that as we move across the swats from near to far range the image becomes increasingly darker in
[49:32] tone around a 3 to5 DB difference in back scatter if you measure for example the same Forest at different instance
[49:41] angles then the measured back scatter will be different even if there has been no physical change in the forest every
[49:50] surface feature will have back scatter that is a function of incident angle so you need to be careful when comparing
[49:56] ing the back scatter of a feature when there is a large variation in incident angle so up to now we've talked about
[50:08] the radar parameters now let's talk about the surface parameters that influence the signal the radar back scatter contains
[50:19] information about the Earth's surface which drives the reflection of the radar signal and this reflection is driven by
[50:25] the characterist ICS of the signal which is a function of the wavelength polarization and incidence angle and
[50:35] then the characteristics of the surface so there are two surface parameters that the the that is unique
[50:44] to radar the information content that is unique to radar images is related to structure and to Mo and to
[50:55] moisture there are three parameters related to structure in general that's density size relative to wavelength and size and
[51:08] orientation let's start with size relative to wavelengths if an object or Surface roughness is the approximate size of a wave then there will be
[51:17] interaction the surface will appear rough and there will be energy scattered back if the length of the wave is much
[51:23] larger than an object there will be no or minim interaction between the wave and the object and the surface will
[51:30] appear smooth and there will be minimal to no energy scattered back back scatter from vegetation is strongly dependent on
[51:37] the size of the scattering elements within the canopy and there is greater response to scatters which are of
[51:46] similar size to the length of the wave in this example uh this is an example of an austan Pine the primary scatterers in
[51:55] a tree canopy are the leaves branches and stems with a size on the order of the wavelength or larger so if we're
[52:03] looking at this pine tree at with xand Will primarily be seeing the large the the stems the smaller stems and the
[52:14] needles so on the order of elements that are around 3 cm if we're looking at this pine tree with El band on the order of
[52:23] 27 CM wavelength then will'll be uh looking at primarily the longer branches and part of the trunk and finally if
[52:36] we're looking at this tree with Pand which is has a wavelength on the order of 70 cm in this case we're looking at
[52:45] the even longer branches and pretty much all of the trunk now let's look at size and orientation
[52:57] orientation this example shows two leaves and two trees that have different orientations if we look at the leaves with a shorter
[53:04] wavelength say X band on the left we will get a slightly larger back scatter response in the vertical than in the
[53:12] horizontal polarization for the first leaf and this is because the components of that first Leaf are slightly more
[53:20] vertical in blue than horizontal in red the second Leaf is distributed equally in the horizontal and vertical
[53:28] directions and the return in those polarizations will be about the same for the trees which we are looking with a
[53:36] longer wavelength say l or P band the first one will have a higher return in the vertical polarization from both the
[53:44] trunk and the canopy and the second one will also have an overall stronger return in the vertical polarization
[53:51] because the trunk component dominates however note that the the in the crown the the crown has slightly more
[54:00] horizontal than vertical uh components this is an example of multi-polarization images from alos Pulsar over a parts of the pakaya saman
[54:14] natural reserve in Peru which as mentioned is a vast Wetland ecosystem the images are at L band and at HH HV
[54:23] and VV polarizations now the the very bright white areas that you see these are inundated vegetation the very dark
[54:33] areas are open water and you can clearly see a river through the middle of the image as well as some Open Water bodies
[54:39] north and south of the river note the difference in back scatter magnitude between the different polarizations if
[54:47] you focus now on inundated vegetation or the very bright areas HH polarization is the most useful for
[54:58] distinguishing flooded from nonflooded vegetation VV shows flooded vegetation to a lesser extent and even lesser by HV
[55:11] polarization in general HH polarization penetrates deeper into the vegetation canopy than VV why is this because forests tend to have more vertical than
[55:22] horizontal structure so the signal is more likely to reflect back from the vertical components before reaching the
[55:30] bottom of the canopy the or the the horizontally polarized wave has less structure to interact with and hence has a higher
[55:41] probability of penetrating all the way through the canopy and then there's density and the denser the vegetation the less the
[55:53] probability of the signal penetrating through so there are saturation levels and that is going to be that that's
[56:02] going to vary with the type and structure of forest and so in this case for a broadleaf evergreen and coniferous
[56:09] forest um this study indicated that c band saturates at around 20 tons per hectar L band at around 40 tons and P
[56:18] band at around 100 tons there have been many studies though um in looking at this saturation issue saturation of the signal and um
[56:30] there are many different ranges um there are other studies that have indicated that in tropical forest the signal at L
[56:39] band will saturate between 80 and 15 Tons per Hector while at P band between 200 and 350 tons per
[56:51] Hector and then the other surface parameter is dialectric the dialectric constant which is controlled by the amount of moisture so radar back scatter
[57:02] is influenced by the amount of moisture in the vegetation and soil the larger the water content in the vegetation or
[57:09] soil the less the penetration the magnitude of the radar back scatter is proportional to the dialectric constant
[57:16] of the surface for dry naturally occurring materials this is in the range of 3 to 8 for liquid water it's around
[57:24] 40 to 80 uh it is frequency dependent and therefore the amount of moisture in the soil vegetation can greatly influence
[57:34] and increase in radar reflectivity so generally reflectivity or image brightness increases with increased moisture content which means that there
[57:43] is less penetration through the medium for example surfaces such as soil and vegetation cover will appear brighter
[57:50] when they are wet than when they are dry the lower the dialectric constant the more incident energy is absorbed and the
[57:58] darker the object will appear on the image and this is an example of the differences in image brightness for
[58:07] different landscape dialectric values the dialectric of Frozen water is very low on the order of 3.15 compared to liquid water which is
[58:17] around 80 in the northern high latitudes when the land surface transitions from Frozen to thought conditions in the
[58:25] spring there is there is a large change in the dialectric the surface dialectric and consequently a change in Signal
[58:32] intensity from dark to Bright this example shows that it is a multi-temporal Time series of an area
[58:41] near Fairbanks Alaska from the js1 satellite which was a Japanese satellite that carried an l-band SAR and flew in
[58:50] the the 1990s you can see that the February image when the land surface was frozen is darker than the June image when the
[58:58] land surface was thaw and therefore um probably uh there was a certain amount of um moisture in the surface
[59:07] from the um the spring melt so in Freestar studies uh utilizing radar radar signals the dialectric is therefore the
[59:19] controlling mechanism causing changes in back scatter Behavior there are a number of geometric and radiometric distortions that one has to
[59:31] account for in radar images and in this next section I will discuss these distortions the first one is the side
[59:42] looking nature of Imaging Radars results in certain geometric distortions and one of them is the slat range which is the
[59:51] distance of the signal between the sensor and the target not the true true horizontal distance along the Earth's
[59:58] surface and this results in a varying image scale moving from the near to the far range and causing Targets in the
[1:00:07] near range to appear compressed relative to the far range using trigonometry ground range distance can be calculated
[1:00:16] from the slant range distance and platform altitude to convert to the proper ground range format this figure
[1:00:24] shows a radar image is slat range at the top where the fields and the road in the
[1:00:30] near range on the left side of the image are compressed and the same image is then converted to ground range in the
[1:00:37] bottom with the features in their proper geometric shape for most SAR data sets this correction has already been
[1:00:49] done similar to the distortions encountered when using cameras and scanners radar images are also subject to geometric distortions due to relief
[1:01:01] displacements radar foreshortening and layover are two consequences of relief displacements layover on the left occurs when the radar beam reaches the top of a
[1:01:13] tall feature in this case b of a mountain before it reaches the base of the mountain a the return signal from
[1:01:22] the top of the mountain will be received before the signal from the the bottom and as a result the top of the mountain
[1:01:29] will be displaced towards the radar from its true position on the ground and it lays over the base uh of the feature so
[1:01:38] it it looks like it's uh it's upside down basically um and then you have fores shortening on the right which
[1:01:48] occurs when the radar beam reaches the base of a tall feature that's tilted towards the radar so a mountain before
[1:01:56] it reaches the top now because the radar measures distance in the slant range that slope from A to B will appear
[1:02:03] compressed and the length of the slope will be represented incorrectly depending on the angle of the mountain slope in relation to the
[1:02:12] incidence angle of the radar beam the severity of foreshortening will vary and maximum foreshortening will occur when
[1:02:20] the radar beam is perpendicular to the slope such that the slope the base and the top are imaged
[1:02:30] simultaneously this is an example of an image over an area of complex topography where the four where there is for
[1:02:38] shortening and notice the bright slopes on the middle and bottom of the image they appear compressed compared to how
[1:02:47] they look after the image is corrected correction of the image is done using a digital elevation model and many times
[1:02:56] uh SAR data that's available is already corrected for this so radiometrically terrain terrain corrected uh SAR data has been corrected
[1:03:06] for these sorts of things and then the other issue to account for in areas of complex Topography is radar Shadow which occurs
[1:03:18] when the radar beam is not able to illuminate the ground surface because you have big mountains that are um in
[1:03:26] front of the signal right so Shadows occur behind that vertical feature behind the mountain or slopes with uh
[1:03:33] steep sides and since the radar beam does not illuminate the surface the shadowed regions will appear dark on an
[1:03:40] image because there's no energy available to be back scattered so this image shows radar shadow effects on the right side of the
[1:03:52] Hill S sites which are being illuminated from the left and there are ways to correct for Shadows through
[1:03:59] interpolation however I personally prefer to leave the shadow areas as areas of data gaps rather than use
[1:04:07] interpolated values now let's talk about radiometric distortions there's several radiometric distortions including those related to terrain relief and these often cannot be
[1:04:21] completely corrected radiometric correction involves removing the misleading influence of topography on back scatter values using a demm for
[1:04:32] example the correction eliminates bright back scatter caused by radar Reflection from steep slopes leaving only the back
[1:04:39] scatter that reveals surface characteristics such as vegetation and soil moisture radiometrically terrain corrected SAR images or RTC images for
[1:04:51] example have had radiometric and geometric Corrections already applied and the last topic I wanted to touch on was
[1:05:04] speckle so let's talk about speckle speckle appears as a grainy salt and pepper texture in an image it is not
[1:05:12] noise it is characteristic of SAR images and this is caused by multiple scattering returns that occur within
[1:05:20] each resolution cell so as an example in this figure we have a homogeneous Target such which is a large grass covered
[1:05:27] field without the effects of speckle this field would generally result in light tone pixel values such as what you
[1:05:35] see in image a however Reflections from the individual Blades of grass within each resolution cell so those remember
[1:05:43] those individual Blades of grass are in different orientations and positions and so those Reflections within each resolution soell are going to be
[1:05:51] different from cell to cell um and that is is going to cost then some pixels being brighter and some being darker uh
[1:06:00] such as what you see in image B and that field is going to appear speckled speckle may make
[1:06:14] interpretation of radar images more difficult so it's generally desirable to reduce speckle prior to interpretation and Analysis and speckle reduction can
[1:06:25] be achieved in three ways multi-look processing spatial filtering and temporal filtering so multi-look processing refers to the division of the
[1:06:35] radar beam a in this case into several narrower sub beams so one to five the number of statistically independent
[1:06:45] images or sub beams being averaged is called the number of looks and each of these sub beams will also be subject to
[1:06:53] speckle but by averaging them to together to form the final output image the amount of speckle will be reduced at
[1:07:01] the expense of spatial resolution so spatial filtering consists of moving a small window of a few pixels
[1:07:11] in dimension say it's a window of 3x3 pixels or 5x5 whatever you define it to be and you move that window over each
[1:07:20] pixel in the image applying a mathematical calculation using the pixel values with in that window there are
[1:07:26] many different mathematical calculations many different speckle filters but say here we're just calculating the average of the pixels within that window and
[1:07:35] then we replace the center pixel with that new value that new average the window is then moved along in the both
[1:07:42] the row and column Dimensions one pixel at a time until the entire image has been covered and by calculating the
[1:07:49] average of a small window around each pixel a smoothing effect is a achieved and the visual appearance of the speckle is
[1:07:58] reduced as you can see in the two images in this example now temporal filtering is similar whereas instead of using a
[1:08:09] spatial spatial filter you average pixel within an image stack the problem with temporal filtering is that if you're trying to
[1:08:18] detect change it will likely be averaged out the good thing about temporal filtering is that the spatial resolution
[1:08:26] is not degraded so for multi-looking and for spatial filtering you reduce speckle at the expense of spatial
[1:08:38] resolution so the amount of speckle reduction desired must be balanced then with the particular application that you're wanting to do
[1:08:50] right so how much uh what's the level of detail required if high level of detail is required you
[1:08:58] need high spatial resolution then you apply um a lower number of looks or a small spatial filter
[1:09:09] filter if if if you don't really need such a a very fine level of detail then you can
[1:09:16] apply a larger number of looks or a larger spatial filter which will reduce the speckle further but it will also
[1:09:26] reduce your spatial resolution so there's a balance there that you need to um explore and Define what is the best
[1:09:36] tradeoff for your specific needs next I'd like to touch on some additional considerations when working with radar
[1:09:49] data so one of them is the look Direction the role of the look Direction and for those of you that have worked
[1:09:56] with radar data you notice that there's ascending and descending passes so first of all the look direction of wasar
[1:10:04] refers to the direction the radar antenna is pointed when emitting and receiving the radar beam and AAR look
[1:10:11] direction is determined with respect to the flight direction of the sensor uh so typically SAR sensors are
[1:10:18] configured to look either left or right and how an area is illuminated by a radar beam changes
[1:10:25] uh during ascending and descending overpasses of an area so basically the viewing geometry of that area is
[1:10:32] different and this figure is an image subset from Sentinel one over Romania um and you can see the
[1:10:40] differences between ascending and descending especially in the areas where you have um um mountains and complex topography so it is advisable that if
[1:10:53] you're doing time series analysis to not combine data from ascending and descending passes the other factor to consider is
[1:11:06] the role of moisture so at the beginning I said that the advantage of radar is that it has an almost all weather
[1:11:14] capability so note the stress on the almost because it's not truly all weather sometimes when you have big rain
[1:11:23] events especially the type of events that you see in the tropics that will affect your signal so here we have an
[1:11:30] example of the effect of an increas in surface moisture on the radar signal this is a sentinel 1 cband image over an
[1:11:37] area in Ecuador for three different years and 2017 which is the image in the middle looks different than the rest of
[1:11:46] the images it has some bright and dark anomalies the dark areas are associated with active rain causing uh very strong
[1:11:56] signal attenuation and the bright areas are the result of from wet vegetation and soils from the rain
[1:12:05] events so this is why it's always important to look at your data to identify if there are any sort of odd
[1:12:13] artifacts like this that would uh make your image non-usable for any sort of analysis and now let's take a look at
[1:12:24] some applications of SAR data this is an example of the use of radar to detect oil spills on water it's
[1:12:32] an image from the uavsar sensor which is an Airborne SAR that operates at Eland and this is the gulf coast of the United
[1:12:41] States this image was acquired shortly after the Deep waterer Horizon oil spill to determine the extent of The Spill and
[1:12:48] the movement of the spill into the coastal areas um so this is a false color image of H H HB and BV and the
[1:12:57] presence of oil smoothens out the sea surface and makes for an especially good specular reflector much smoother than
[1:13:07] the ocean surface where there is no oil and here we can clearly see the oil extent as areas that are very dark in
[1:13:16] contrast to the ocean water which appears as blue so ocean water has a little bit of roughness while the areas
[1:13:22] covered by oil are very very smooth this is an example of the use of radar for land cover classification it's using
[1:13:31] SAR data from the Japanese js1 satellit which had an l-band SAR and operated in the 90s the top image the top left is a
[1:13:41] radar image of an area near manow in Brazil where there's a combination of forested and deforested land the
[1:13:48] deforested areas have a darker tone than the forested areas and the image on the top right is the resulting
[1:13:56] classification delineating forest regrowth and nonforest so remember radar is sensitive to structure and moisture and in this case you can clearly
[1:14:05] identify even just visually the uh the differences in tone due to structure due to the the the the vegetation density
[1:14:15] now the bottom image is a part of a Savana region in the mton which is characterized by short Woody vegetation
[1:14:23] as well as non-woody vegetation um and the classification on the bottom right shows that through machine learning a supervised
[1:14:34] classification approach these two different types of savanas can be differentiated SAR is very useful for wetland inundation studies because as
[1:14:46] mentioned its ability to penetrate through the vegetation canopy and detect standing water underneath so uh there's a very high
[1:14:59] back scatter return whenever there's inundated vegetation multi-temporal sard data can be used to study um Wetland inundation Dynamics such as the study on
[1:15:09] the right which used palar data in the Amazon to look at inundation extent and duration which helps better understand
[1:15:16] seasonal and year-to-year hydrological changes in these ecosystems and then there's also soil moisture monitor uh since the radar signal is sensitive
[1:15:28] to the moisture content in the surface it can detect uh the moisture in the soil and this is an example of global a
[1:15:36] global soil moisture product from the smap radar the last example I wanted to show is uh crop classification this is worked
[1:15:48] by Dr Heather mcaren from Agriculture and Agri Food Canada where she used Sentinel one images um multi-temporal T
[1:15:57] Sentinal one Sr images to map different types of crops so these examples that I've shown are not exhaustive at all um
[1:16:06] there are many other things that can be done with amplitude data such as estimating estimating biomass um assessing or detecting Forest
[1:16:15] degradation uh looking at Open Water bodies and how they're changing through time so there are many different things
[1:16:22] where uh that radar can support in terms of ecosystem type studies and to close I wanted to point
[1:16:33] you to some sources of openly available SAR SAR data the First Source is the Alaska satellite facility and they have a
[1:16:45] number of different SAR data sets um and including uh data that is has been acquired at cband at l-band
[1:16:55] um and data that goes back a couple of decades so it's a an excellent resource in addition to the data they also have
[1:17:04] uh many many different resources uh tools and and trainings that are extremely valuable the third session of this webinar series will
[1:17:16] discuss all of the capabilities of the Alaska satellite facility there is also the Copernicus Hub at and they are the repository for
[1:17:28] all of the Sentinel data including Sentinel one data and I noticed that uh they also have in their archive Sentinel
[1:17:38] one uh mosaics so these are monthly mosaics I believe but it's another uh just another way to access the data and
[1:17:48] they also have a number of resources and tools that can be very valuable for working with the data
[1:17:56] Jaa the Japanese space agency has a number of data sets and that you can access also for free through their
[1:18:05] portal uh they have Global PSAR mosaics uh these are yearly they have um some derived products on Forest and
[1:18:16] non-forest and other uh different types of data sets on their website uh for all of these sites that
[1:18:24] I've mentioned you do need to register and have an account however there is no cost to do this and the data access is
[1:18:35] free and finally there is Google Earth engine which has a repository of uh different data sets including Sentinel
[1:18:45] one and palar the global yearly PSAR mosaics as well as some palar scansar data um and so the the data on Google
[1:18:57] Earth engine are analysis ready so all you need to do is really just apply a speckle speckle filter and here we have a list of uh
[1:19:10] Legacy current and future uh radar sensors in Space the ones that have a green box around them
[1:19:18] means that the data their data is freely accessible um in terms of future mission there are two very exciting missions
[1:19:26] coming up uh one is called nysar uh which is a collaboration between NASA and the Indian space agency will have an
[1:19:35] l-band SAR as well as an s-band SAR and it's scheduled to launch in 20125 and then there's biomass which is
[1:19:44] a Pand SAR sensor from the European space agency and that's scheduled also to launch in 2025 so next year is an exciting year in
[1:19:56] terms of uh radar I wanted to briefly touch on nysar because I'm part of the nysar science
[1:20:03] team and so are two of the guest lecturers in this webinar series Dr Eric Fielding in session two will be talking
[1:20:11] about insar and Dr France Meyer in session three who will be talking about the capabilities of these uh laska
[1:20:19] satellite satellite facility uh so nysar is launching 2025 LNS and uh SARS all the data will be uh
[1:20:29] freely available it'll have amplitude and phase and the data will address many science and application needs and that brings us to the end of
[1:20:43] this session uh next I will do a brief summary of the main Concepts covered in summary uh in SAR the along
[1:20:54] track resolution is different from the across track resolution the three radar parameters are that you need to always
[1:21:03] keep in mind are wavelength polarization and incidence angle so the longer the wavelength the greater the penetration
[1:21:10] depth the length of the wave will determine the interaction with the surface objects polarization provides information related to the structural
[1:21:20] characteristics or properties of the objects on in the surface incident angle will influence the signal penetration into the
[1:21:30] target the two surface parameters that influence the radar signal are structure and mo moisture and that's super
[1:21:38] important so radar is sensitive to structure and to moisture the main back scatter mechanisms in radar are specular
[1:21:47] scattering rough surface scattering volume scattering and double bounce radar images have geometric distor portions and areas of complex topography
[1:21:57] and these can be corrected up to a certain extent using a digital elevation model speckle is that graininess
[1:22:05] inherent in SAR images and it can be reduced through multi-looking or with a spatial or temporal filter and then
[1:22:13] finally radar can be used for different ecosystem studies such as mapping land cover mapping crops Wetland inundation
[1:22:21] and soil moisture to name a few the next session number two will focus on interferometric SAR uh the guest
[1:22:31] lecturer Dr Fielding will discuss the basic concepts of interferometric SAR or insar he'll explain how to generate AAR
[1:22:41] interferogram and interpret it um in order to measure surface deformation and he also discussed some of the
[1:22:48] applications that insar can address and as a reminder there is a homework associated with this webinar series we will post the homework on the
[1:23:00] training web page on the last day which is uh of of this uh training which is November 20th and the homework is due by
[1:23:11] December 4th a certificate of completion will be given to all those participants that attended the uh the three live
[1:23:21] webinars and complete completed the homework assignment by the deadline if you have any questions about the material presented today please
[1:23:31] don't hesitate to reach out to me via email and with that thank you very much to all
[1:23:40] participants I know this was a lot of material but hopefully it provided a good solid background to better
[1:23:47] understanding the information content and radar images for those that want to dive deeper I've included an appendix at
[1:23:54] as part of this uh uh the this uh PowerPoint PowerPoint presentation and there are many different references there so with that
[1:24:03] then let's begin our question and answer session oh thank you very much for everyone who's online for all of the
[1:24:19] questions I'm so pleased to see so much participation and so many people from around the world as you know I'm uh
[1:24:27] passionate about SAR I've been working with SAR for many years and I'm super excited about you know this this next
[1:24:34] year with the launch of nysar and other satellites like biomass so there's so much capability with uh with SAR um that is either
[1:24:43] unique or complimentary to Optical so I'm I'm I'm I'm so uh so happy and pleased to see uh such great interest so
[1:24:53] let's start with the first question and we have little time I will uh try to go through as many questions as possible I
[1:25:00] will stay over time but however any questions that I can't get to I will answer on the Google Doc and I will put
[1:25:08] it online all right so I'll try to um kind of Breeze through these uh question number one can we use electromagnetic
[1:25:15] waves to carry the particle from the surface to the satellite for measurements or analysis of the soils
[1:25:22] the answer is that radar is able to measure the moisture in the soil so radar is sensitive to
[1:25:28] humidity and um for example nysar will have a uh soil moisture Global soil moisture product um however if I'm
[1:25:38] reading this question correctly uh you know in terms of actually bringing a sample that that's unfortunately not
[1:25:44] possible um uh question number two when you say it can penetrate vegetation soil can you say anything about depth of
[1:25:52] penetration and what parameters affect penetration so this was a question early on uh before I I started touching on um
[1:26:01] in more depth on some of these uh Concepts so the depth of of signal penetration will depend on the
[1:26:07] wavelength the longer the wavelength the greater the penetration through the medium that means you know a volume of
[1:26:13] vegetation uh snow pack or soil um also the amount of water in the medium will reduce penetration of the signal so I
[1:26:21] showed that example of the signal at L band penetra in through uh very dry soils up to 2 m um However if those
[1:26:30] soils were wet you would certainly would not be penetrating that depth you would probably be penetrating the first couple
[1:26:37] of centimeters 5 cm 8 centimet depending on the wetness question three you've mentioned that the effect of topography
[1:26:45] is one of the major drawbacks of radar I'm thinking of mapping Wetland classes of the Hindu Kush region using Sentinel
[1:26:51] one imagery due to the topographic effect effects in the Hindu Kush uh Himalayas do you think it's better for
[1:26:58] me to use sentinel one or maybe I can reduce minimize the topographic effect with some image pre-processing
[1:27:06] procedures so the answer is that uh even though topographic areas do present challenges with radar images you can do
[1:27:15] time series as long as the images are radiometrically terrain corrected and you are using the images from the same
[1:27:22] past so that means you either use images from ascending or descending orbits but do not mix them in general um as a
[1:27:31] general rule of thumb at least for myself I I try not to mix ascending and descending um images uh this is not such
[1:27:42] a big issue in areas that are flat but in areas obviously where you have topography it is a big issue because the
[1:27:49] viewing geometry is slightly different so things do look different question number four does the radar rotate in the cross trck direction to
[1:27:58] build a line of the image and that's a great question some Radars rotate like smap uh but most do not please explain
[1:28:07] question five please explain if there's a difference between resolution of an optical and resolution of a sar image
[1:28:13] and how do they differ okay great question so Optical yeah we're all used to these Square pixels 10 by1 with radar
[1:28:20] in the slant range you're not going to have square it's going to be like 5 by8 or or something something that's
[1:28:25] different now when you reproject from the slant range to the ground range then you you grit things to a square pixel um
[1:28:34] so that's why like Sentinel one images in Google Earth engine for example or on the Alaska satellite facility they the
[1:28:41] ones that are are grd uh so that they're grided already in the uh ground range they have a square pixels now one thing
[1:28:50] that's super important to remember is that with radar do not take the spatial resolution at face value so say even on
[1:29:00] Google Earth engin Sentinel one yeah that resolution of Sentinel one is 10 m yes it's 10 m unlike Optical data that
[1:29:08] you can straight out use a 10 meter or whatever 20 meter spatial resolution data and and generate stuff with it
[1:29:16] analysis classifications with radar the 10 m remember you need to apply a spatial filter usually it's a spatial
[1:29:25] filter to uh reduce the speckle and what that does is it degrades the spatial resolution so things might be still
[1:29:33] grided at the same in the same way but your spatial resolution is going to reduce so so yeah with radar you know
[1:29:41] there's there's the posting of the know the spatial resolution but in actuality after applying a spatial filter that
[1:29:49] that resolution is going to degrade so whatever you're generating is likely going to be at a lower spatial
[1:29:55] resolution question six is there any possibility to share literature in the course web page where this information
[1:30:04] is taken from and there is a list of tutorials and references in the appendix of this presentation um and and so I have I put
[1:30:14] a whole list of previous ret trainings that include demos for doing different types of things uh floods looking at
[1:30:21] floods earthquake lands slides I think there's also oil spill detection so and there also other resources that I posted
[1:30:31] in the appendix uh the the S handbook is a super great resource I have a link to
[1:30:37] it uh further down uh but there are many other great resources if you're looking for something a little more challenging
[1:30:43] just send me an email and I will let me know specifically what you're looking for and I will um uh give you some
[1:30:50] appropriate links question seven could you tell us comprehensively how the Doppler effect is applied in SAR um so basically Doppler refers to
[1:31:01] the change in frequency or wavelength uh due to the relative motion between the source and the object on the surface so
[1:31:09] as the radar moves along its flight path and it's sending pulses the pulses are reflected back to the antenna from the
[1:31:17] Earth's surface but because um the the relative velocity between the radar and the ground surface caus is a shift in
[1:31:24] the frequency of the return signal and that frequency of the received signal will be slightly different from the
[1:31:30] transmitted frequency depending on the velocity of the movement of the radar with with respect to the object think of
[1:31:38] it as an like if you've ever heard an ambulance like coming toward you you know it tends to be higher pitched and
[1:31:45] then when it moves away from you it's lower pitched it's that's that's Doppler right there and um I've I've put in a a
[1:31:52] great video explaining uh that concept right here question eight if I want to study the technicalities of mathematics
[1:32:00] involved in sard data in Greater death are there any resources that the panelist can recommend again um I put a
[1:32:07] series of resources at the very end um the and there is a a book that is kind of the the the the guideline the
[1:32:18] basic book of microwave remote sensing and that book is by Ulan long it's it's really a a superb resource I think there
[1:32:26] are initially there were three volumes I know it's been republished um so it's it's just a superb resource to have question nine
[1:32:36] how can SAR systems be designed to optimize either slant range or ground range resolution for specific applications um so they are designed to
[1:32:47] optimize slant range and that will depend totally on the need for your application right so do you need um a
[1:32:56] greater spatial resolution or or or lower uh higher or lower spatial resolution in the slant range depending
[1:33:03] on your application uh how do I identify which is back scatter so that one I didn't quite understand if that person can
[1:33:12] please rewrite their question to clarify question 11 I'm interested in Mangrove mapping using SAR imagery with the help of cloud computing can you
[1:33:21] guide me on how I can map mangroves and non areas this is a great question uh there was an arset uh webinar and one of
[1:33:29] the sessions focused on monitoring mangroves there's also the serier SAR handbook that has a chapter on Mangrove
[1:33:35] mapping I have a colleague at JPL Mark samard who has done a lot of work on Mangrove mapping uh using radar and uh
[1:33:45] he's got a body of literature I'll include that here it's very difficult to use SAR to map mangroves because you
[1:33:52] know mangroves will look different when it's high tide and low tide and also because of the structure of mangroves
[1:34:00] those aerial Roots they will cause uh this signal to do some really weird things that are different from what you
[1:34:08] see in Forest so sometimes those aerial Roots will cause a um the signal will not penetrate all the way through it'll
[1:34:16] cause attenuation so it's it's a it's a bit challenging to use just SAR for mapping mangroves question 12 the double bound signal
[1:34:26] looks like specular reflection plus volume volume scattering why does it have higher intensity than the signal from volume
[1:34:32] scattering directly and I think I know what this person is asking and perhaps that drawing on volume scattering that
[1:34:39] that cartoon uh can be modified um to show that with volume scattering I mean you've got the signal penetrating within
[1:34:47] the volume and you've got part of that signal uh being uh reflected away from the radar but you got a large portion of
[1:34:56] the signal also being reflected back toward the satellite however with double bounds you have an even larger portion
[1:35:03] of the signal being reflected back to the satellite it's basically two bounces with double bounce um so you've got the
[1:35:10] Bounce from the smooth surface which would be a water or you've got a street for example so it reflects it away from
[1:35:19] the radar and then it bounces off of something geometric El uh say a tree trunk or a building which redirects all
[1:35:28] of that energy that was being reflected away redirects it back toward the satellite and that's why double bounce
[1:35:36] is typically very very bright and you see double bounds in flooded vegetation and in urban areas question 13 is sarag multispectral
[1:35:47] or hyperspectral based on wavelength yeah so in SAR we don't use the term multi or Hy spectral as as you
[1:35:55] do an optical so when you have multiple wavelengths or frequency you call it multifrequency multifrequency SAR um there is no currently operational
[1:36:03] and openly available uh SAR data that is multifrequency um all of the openly available operational SAR data sets are uh single
[1:36:17] frequency however nysar will have multifrequency I'll have L and S spens um now one thing to uh emphasize or to
[1:36:28] note is that SAR will be collecting l-band uh we we'll be doing lb band Acquisitions globally and sand
[1:36:37] Acquisitions only over certain areas so that would beband over India and sand over the Cal Val sites that we have
[1:36:46] around the world which are um just small areas where we're doing calibration validation of the signal but sand
[1:36:53] collections will not be Global just the Eland question 14 and by the way all all of the nysar data will be openly
[1:37:02] available question 14 based on atmospheric atmospheric effects low I'm assuming that SAR is not frequently used in atmospheric
[1:37:11] composition studies but I'm wondering what cases SAR data may be valuable for atmospheric studies in your opinion what
[1:37:18] SAR data may be of most valuable for atmospheric and air quality studies I'm guessing land covered land use in Cloudy
[1:37:25] areas but I'm not certain so SAR will not really provide information about um atmospheric composition or air
[1:37:34] quality however it will it is used and it's widely used for like weather prediction right so to look at um
[1:37:43] atmospheric conditions related to precipitation storms rainfall and tensity tracking storms tropical Cyclones hurricanes typhoons Etc and usually it's the shorter wavelengths
[1:37:55] because the shorter wavelengths are either getting attenuated by the amount of water in these rain cells or they're
[1:38:02] you or they're interacting with the particles the the rain droplets um because you the the the wavelength can
[1:38:10] be on the order of the size of the rain droplets so that's why you uh atmospheric uh studies using uh radar
[1:38:18] use the shorter wavelengths and even shorter than these K Ka sometimes X bands um and and sometimes and even
[1:38:27] shorter do we have free data for l& p bands yes we do uh there is freely available data for
[1:38:35] Eland uh there is a Jrs one uh so I put it down here Jrs one uh which was a Japanese satellite
[1:38:46] that flew in the 1990s you can obtain that data through the Alaska satellite facility there is also palsar data data
[1:38:53] from the again the Japanese uh space agency that's elban 2006 through 2011 amazing data sets and then there is
[1:39:04] palar 2 um which has limited uh release uh so the palar scansar data is available through Google Earth engine
[1:39:14] and through the jaxa website um and in terms of Pand there is no satellite Pand uh data available that I'm aware of
[1:39:26] there might be some Airborne freely available Airborne Pand data over select regions question 16 in Signal penetration into dry soils can radar
[1:39:38] detect an improvised explosive device that has been put under the soil so this is a great question I think it would be
[1:39:46] difficult um I you know I think it would depend on the size of the IED in uh relative to the spatial resolution of
[1:39:57] the radar and how different that that IED uh the characteristics the structural characteristics of the IED so
[1:40:09] I'm honestly I don't know but I think you would need very high spatial resolution can anyone tell me about the
[1:40:16] early adopters program so nysar has an early adopters program and I put the link here you can joined this program so
[1:40:24] the idea behind the early adopters is to have the Community start start um um the potential in this case nysar
[1:40:36] applications applications Community um indicate how they can use nysar data and and and um the nysar program will provide some guidelines on
[1:40:51] how that data um what are the capabilities of the data and how the data can be used so it's
[1:40:59] just a community of again the the name says is of early adopters of nysar data question 18 which satellites offer
[1:41:10] free l-band images so I I just answered that one question 19 you mentioned that in desert environments the penetration
[1:41:16] dep can reach up to 2 meters given the water scarcity in our region I'm curious about how pixels representing desert
[1:41:23] areas with underlying water would appear on SAR images so this would totally depend on how deep is the water um you
[1:41:32] know if if there's a a some moisture that is not too deep especially in desert areas so if you have like a a
[1:41:42] very dry upper layer um and then wetness again say it's 2 m 2 met and a half 3 MERS even you
[1:41:51] might be able to sense a difference um but it would totally it would depend on that question 20 it's not always true
[1:42:05] that higher wavelength s images are better than lower wavelength counterparts is this true can you explain using examples because I
[1:42:13] remember coming across a point that for some applications cband is better than LR P band is this is correct is this
[1:42:20] correct yes this is absolutely correct the wavelength will totally depend on your application so if you want to do
[1:42:29] agricultural studies you want to use either cband or xbands uh for Forest type studies then you want to use l or p bands for example
[1:42:41] so totally dependent on your application you don't want to use a p band for example on agricultural type studies
[1:42:49] that's not the right wavelength or or that's not the right band okay question 21 is it possible to
[1:42:56] penetrate concrete to detect water leaks in a pipeline Network can SAR be used to detect leakages in drainage this is a
[1:43:04] great great question uh I put in I think it's unlikely however if the concrete has some level of moisture that is different
[1:43:14] from the concrete surrounding it then you might be able to detect it right so it could be you know that the moisture
[1:43:22] does see up through the concrete um and so the dialectric or the the moisture content in the area where
[1:43:31] there's a leak underneath might be slightly different than in the areas where it's dry and you might be able to
[1:43:38] detect that 22 in what instances would it be useful to explore polarization differences or ratios apart from just
[1:43:48] the the bands actually in all sorts of stuff I related to structural differences of your objects on the surface um so if
[1:43:58] you're looking at like differentiating agricultural crops different types of vegetation uh you do then want to use uh
[1:44:08] different uh uh polarization ratios or polarization polarization differences question 23 which radar properties like frequencies bands are
[1:44:19] used for soil moisture estimations can SAR be used to estimate soil moisture content through through all the
[1:44:24] phenological states of stages of crop growth over vegetated areas to retrieve so moisture content to be precise okay
[1:44:33] great question um SAR can be used and is being used to estimate soil moisture um it works well in areas
[1:44:50] where uh let's see it it will it works well in areas where you don't have dense vegetation so for
[1:45:00] example smap the smap radar um in and smap in general it works well in areas with low vegetation like in areas in
[1:45:12] agricultural areas and it's estimated at least for smap that the soil moisture R retrievals were within 4% volumetric
[1:45:24] uh had a 4% volumetric accuracy in areas with a full grown corn crop so anything above that level of vegetation density
[1:45:35] then your estimates of soil moisture would be uh lower or poorer the reason for that is because
[1:45:45] with radar it's not so straightforward to get to so moisture if it's a desert yes because it's a desert and you're
[1:45:54] observing uh or if it's a Barren area it because yeah there's nothing else there it's just the soil but as soon as you
[1:46:03] have vegetation then remember remember that signal is interacting with different components right so basically part of the return signal has
[1:46:13] information about the moisture in the soil but it also has information about whatever else is there you whatever your
[1:46:21] crop is or the vegetation and and so that's why so you need to tease out the part of the signal that is belongs
[1:46:32] to the vegetation to get to the soil moisture moisture um so yes you can you can and there are
[1:46:41] ways to estimate so moisture in vegetated areas and the more vegetation you have the more complicated it gets
[1:46:49] and the lower the accuracy of of your retrieval retrieval because once you have like dense vegetation first of all you're not even
[1:46:57] like in tropical areas um it's uncertain whether the signal is penetrating all the way through the vegetation canopy
[1:47:06] and actually um detecting the moisture in the soil and also it's uncertain whether whether the yeah whe whether um at sorry whether
[1:47:18] it's detecting the moisture in the soil all the way through the canopy and and such a large part of the signal in
[1:47:26] vegetated area vegetate densely vegetated areas is part of the vegetation and a very small portion of it is a function of the moisture in the
[1:47:39] soil question 24 for ground motion we use buildings and stable surfaces because these decorrelate less however as you explain these surfaces are
[1:47:48] sending backlash signal could you explain a little about what part of the signal is is coming back
[1:47:59] back [Music] uh I think this is more of a question on insar you know when you're talking about
[1:48:10] decorrelation um yeah this is more of looking at the phase and the decorrelation of the phase and this is
[1:48:19] something that we will talk about in the next session session number two question 25 to what extent can we
[1:48:28] use SAR to differentiate between open water and ice in the case of less Cal Seas will there be too much back
[1:48:41] scatter there are many studies that are using SAR to identify ice and the way you can do that is it's all about
[1:48:49] roughness right so I talked about structure which which you know first to roughness um the ocean surface will be
[1:48:56] much smoother than um an ice than sea Ice uh and so the back scatter is going to be different between the ocean
[1:49:07] surface and the sea I and and you can um differentiate them that way question 26 what are the open
[1:49:16] sources where we can get the global coverage of each SAR band data yeah so I touched on some at the
[1:49:29] end uh and session three of this webinar series we'll discuss all of the different SAR data sources available at
[1:49:39] the Alaska satellite facility but I can tell you yes so you've got the jaxa site that has the
[1:49:47] palsar data uh some palar data available uh there's Google Earth engine which has a sentinel one analysis ready SAR data
[1:49:57] it's got some palsar scansar data some palar Global mosaics uh yearly Global mosaics there's a Copernicus Hub by the
[1:50:06] European Space Agency they have all the Sentinel one data and then the Alaska satellite facility they've got uh
[1:50:13] they've got a a bunch of different currently operational data and historical SAR data okay how do you control polarization is it
[1:50:26] controlled by the antenna design design so um it's it's controlled by the system design and so you have a a filter where
[1:50:40] you you emit the signal in a given polarization and then whatever comes back you're just receiving so you filter
[1:50:51] uh just to receive receive in in the in in a given polarization question 28 which band is
[1:51:00] most preferable for flood monitoring cband or L band also what polarization is best to work with VV HH or VV plus HH
[1:51:08] do the RGB bands always correspond to the waves for hhhv and VV or will it be very wow this is a multi-tiered
[1:51:18] question um all right uh the band that's more preferable for flood marting would be L band especially if you're looking at forested
[1:51:30] inundation because with elban you'll have a greater probability of penetrating through and you'll have a greater likelihood of seeing inundated
[1:51:39] vegetation however if it's crops like for example um inundated rice fields seaband is perfectly fine um HH is a
[1:51:48] better better polarization because as mentioned there's a higher probability that HH will penetrate all the way through than
[1:51:56] VV or much less H the cross-polarized uh do the RGB bands always corresponds to the waves no you
[1:52:04] can create an RGB band however you want it's always better to put HV uh or VH in the green Channel because
[1:52:15] the cross polarize will always be a better indicator of the presence of vegetation so like visually for visual
[1:52:28] interpretation you um HV putting it in the green Channel you whatever is vegetated will appear green uh 20 question let me see
[1:52:43] uh why is VH polarization not measured it totally depends on the the satellite um some satellites measure VH like
[1:52:52] Sentinel one has VB and VH does it share information with the HH VB or HV so usually the cross pole like
[1:53:02] VH or HV that's usually the same uh it's the same information content um it's or very similar but each of your
[1:53:13] polarization channels has different information content and that's why the more polarizations you have you know if you have HH and HV that the better
[1:53:23] because you have more information about the unique structural characteristics of your uh of your target of the
[1:53:31] surface question 29 is there any software open source hopefully you recommend to work with SAR data mostly
[1:53:38] for visualization I use software to estimate ground deformation but I'm just exploring the amplitude characteristics of of SAR
[1:53:50] um so the European space agency has a great open source software called Snap the snap toolbox and you might want to
[1:53:58] try that uh Google Earth engine uh there you need to do a little bit of coding but it's a great way
[1:54:07] to uh mine through entire uh time series data sets and and do do visualizations question 30 are there any
[1:54:19] studies applying SAR for coastal flooding could you provide some papers on this topic uh yes there are some studies and
[1:54:27] I'd be happy to provide some references when we post this document question 31 how large should the area be so that we need
[1:54:38] to be careful about incident angle differentiation in the image also can we correct for it somehow oh this is a
[1:54:45] great question okay uh okay so the the in inent angle variation will largely depend on the acquisition mode right so so for example
[1:54:58] the SP PSAR scansar they have a large incident angle variation and so there are ways to normalize for incidence
[1:55:10] angle angle however I prefer to just honestly just cut the edges and just work with kind of
[1:55:19] the central parts of the image um and not deal with the you the the the variations in back scatter because of
[1:55:29] the large incident angle and and just work with the minimal variations that you'll find um just within the the
[1:55:36] middle of the image question 32 can you explain for which scenarios which SAR polarizations are ideal like an optical remote sensing
[1:55:46] we know which spectral bands are to be used to identify which surface characteristics based on SP reflectance
[1:55:53] Curves in SAR remote sensing how do we determine which polarization we need for a specific application for example
[1:56:00] identifying flood waters or Landslide debris so I think part of this is um exploring the different uh polarizations and in the
[1:56:15] appendix I have some links to previous ret ret trainings that are looking at some of these things that you've identified here
[1:56:26] um but I can tell you right now if you're looking at inundated vegetation you want to use HH or VV because there's
[1:56:34] a higher probability that you'll detect inundated vegetation if you're looking at open water so that means like water
[1:56:43] surfaces no standing vegetation the better polarization is a cross-polarized uh so HV or VH if you're looking at Landslide
[1:56:57] debris you'll have to see maybe uh maybe a polarization ratio um might be good for that but that's something that you
[1:57:05] would have to explore question 33 are there new good methods to reduce speckle using neural networks oh that's a great question I
[1:57:18] can tell you there are many different speckle filters and everyone has their favorites uh I think it's always good
[1:57:27] for you to explore different speckle filters and see which one works best for you I personally just like the simplest
[1:57:35] speckle filter which is just a simple average because I don't like to change or alter the I like to alter as little as
[1:57:46] possible the original values of my image now are there methods to reduce speckle using naral networks that's I I don't
[1:57:58] know I can look into it and if there are any literature references I I'll be sure to post
[1:58:05] them question 34 how can SAR be used in Glacier area mapping which polarization is best to choose and how do back scatter values
[1:58:15] change depending on elevation and season aha this is a great question so isar actually has a cryosphere component and
[1:58:26] they are using insar so interferometric SAR to look at Glacier movement uh so like velocity vectors of
[1:58:36] uh glaciers and uh Dr Eric fielding will touch on that application um tomorrow tomorrow now um which polarization is best to use
[1:58:52] I'm not sure because I don't do any sort of glacial studies but I can uh refine this answer and and uh update it how do
[1:59:01] back scatter values change depending on elevation and season so back scatter will change depending on season and it depends on
[1:59:11] what you're looking at so if you're looking at areas where there's a phenology forest phenology where the
[1:59:17] trees have leaves and then they lose their leaves your back scatter uh is going to be different I also showed the
[1:59:24] example in the northern high latitudes where you have a seasonality of the land surface going from Frozen to th and you
[1:59:33] are going to have a difference in back scatter due to that state change from Frozen conditions to thought conditions so there's going
[1:59:43] to be a higher back scatter um as things go from Frozen to thought so how do do back scatter values
[1:59:53] change depending on elevation uh I you know if you're talking about the dynamic nature of elevation like snow melt you will
[2:00:01] see uh differences um with the dynamic nature nature of um things changing right so so snow melt for example in a Time series you'll
[2:00:13] certainly see that can you please elaborate about geological applications of SAR and how to process data sets in order to detect
[2:00:22] ology ology lithology of any particular area so remember radar is not sensitive to the spectral properties of the
[2:00:32] surface however um if you're looking at faults and if you're looking at maybe different types of terrain based on
[2:00:43] roughness you can map that with radar and I'll provide some links here what is the capability GE for SAR
[2:00:53] data data analysis um you can do a lot with Google Earth engine for SAR data analysis as
[2:01:00] mentioned there's several SAR data sets in there and you can not only visualize them you can do time series
[2:01:08] analysis um you do have to do your own coding and the links I shared with you in the appendix of this presentation
[2:01:18] there are some Demos in there and there are some demos that have been done with Google Earth engine and the code is
[2:01:23] there so you can run that and take a look at the types of things that you can
[2:01:28] do on Google Earth engine for flood mapping for example and then you can take that code and modify it for your
[2:01:36] application of Interest where does face information come in handy apart from insar application for instance for land cover
[2:01:49] classification so phase phase information right I mean it's it's insar but say for land cover classification there are Nifty ways of
[2:02:04] looking at Phase to look at for example uh vegetation height and there was a aret training back in 2020 on
[2:02:16] using um insar to look at decorrelation of the signal uh to look at vegetation height I believe I I can post more here in the
[2:02:27] answer question 38 is the Dual polarization mode like polarization or cross polarization always it depends uh dual polarization mode
[2:02:38] usually is uh like is uh VV or VH or HH and HV for example question 39 are there s SAR based indices available
[2:02:55] for assessing vegetation Health hydric stress and crop yield similar to those used with Optical can one use sard to
[2:03:02] detect the degradation of Agriculture similar to ndvi with Optical data we have vegetation indices for optical imagery is there a similar thing in the
[2:03:12] case of SAR yeah SAR has um has some vegetation in the Seas but they're not related to the health as you would see
[2:03:22] it with ndbi which is more related to like the spectral properties it's more of of the change in structural properties of
[2:03:32] your vegetation that might be related to uh the health of the vegetation vegetation um let me see vegetation Health hydric stress and
[2:03:47] crop yield there we've done many I think three or four now ret trainings on the use of SAR for different agricultural
[2:03:57] applications um some of them are looking at identifying different types of crops um hydric stress so that's that's a difficult one because
[2:04:11] crops tend to grow very quickly so you've got a change in the signal that's related to the growth in the crop and it
[2:04:19] could be also a change in the signal that's related to to the um the vegetation water content for example or
[2:04:26] the or the soil moisture conditions so I'll have to look into this further and I can post some
[2:04:35] references question 40 does the dialectric signal depend on the type of sensor or is it unique per element are
[2:04:43] the different Corrections unique per satellite type of satellite image for example can I correct an image of radar
[2:04:49] set using the same techniques and tools use to correct images of Sentinel so the dialectric um the influence of
[2:04:59] dialectric is dependent on the wavelength or the frequency uh it's not dependent on the type of sensor are the different
[2:05:10] Corrections unique per type of satellite images um they might be slightly different I mean overall you need to
[2:05:19] correct the images for radiometric and and um and geometric distortions and the way you apply that correction or the information you need
[2:05:31] to apply that correction is definitely uh sensor dependent now the good thing is is that a lot of the data that's already
[2:05:41] available has been corrected already for radiometric and terrain distort uh and um geometric distortions distortions okay the next question is the ground
[2:05:54] range correction calculated from a smooth Earth with curvature are there more complex Corrections that use an elevation model
[2:06:01] yes absolutely so there the ideally you want to do a correction using an elevation model if you assume a a smooth
[2:06:10] Earth then anywhere where you have topography you're definitely going to not have you're not going to have you're
[2:06:18] going to have issues question 42 I thought the wavelength of SAR bands is long enough to penetrate water and that's why
[2:06:26] they're not impacted by clouds why do wet ground surfaces have higher back scattering the SAR somehow not penetrate
[2:06:32] the water at the ground surface so the SAR wavelength does not penetrate water okay okay um the reason it penetrates clouds is
[2:06:46] because the wavelength is longer than the droplets or the particles that you find in clouds so it's not interacting
[2:06:54] with them it goes through why do wet ground surfaces have higher back scattering so the reason that wet that
[2:07:03] you know a soil that is has a large amount of moisture in it has a higher back scatter is because there's more
[2:07:11] reflectivity think of it you know as the signal comes in you know and it's there's a large level of moisture so
[2:07:18] it's just going to reflect back rather than than penetrate um and so that's why that back scatter is
[2:07:28] higher the SAR somehow not penetrate the water at the ground surface no it does not uh question 43 referring to slide 58
[2:07:38] do the layover and for certainly appear on all types of bands like C band P band Yes it
[2:07:44] does question 43 I'm using insar data for structural Health monitoring I used the ISA Sentinel 1 ban how could the
[2:07:52] data processing and interpretation be easier and faster ooh that's a great question that's for session two Dr Eric
[2:08:00] feling can answer that and he's the expert on insar question 44 how is radiometric correction applied on coastal regions
[2:08:09] where elevation is very low low um I think so the radiometric correction is applied evenly over all regions and
[2:08:21] usually usually the radiometric correction tends to be at least for topography right it's a big issue in areas where there's topography
[2:08:28] in coastal regions it's not such a big issue because uh coastal regions tend to be flat referring to slide 63 image a and
[2:08:47] image B represent the phase and intensity images in in pixel form uh I'll have to answer that I'll
[2:08:55] have to go back and take a look at slide 63 question 46 for temporal filtering this would use two images how are they
[2:09:04] correlated let's see so you know that the pixel being filtered matches in both images you have to stock the images
[2:09:11] basically you have to create a pixel stock where that same pixel in different dates um that yeah that that same you
[2:09:21] have the same pixel say you have 10 different dates as you look down through the different dates you know for a given
[2:09:28] X and Y position it's the same pixel question 47 is it necessary to always apply radiometric correction speckle
[2:09:40] filtering before using a sar image so radiometric correction is different than speckle speckle filtering um so yeah usually you want
[2:09:51] your image to be geometrically and radiometrically terrain corrected now if your image is not radiometrically terrain corre uh radiometrically
[2:09:59] corrected in say an area that's flat I don't think it would be a huge deal but um is it always uh necessary to
[2:10:09] apply a speckle filter uh it depends you can try it but you know what's going to happen say you
[2:10:17] run a classification your classification is going to have a lot of the effects of speckle so it's going to have a lot of
[2:10:23] noise that you somehow need to clean up so if you apply a speckle filter to your image and then you run a classification
[2:10:31] on it your classification will be cleaner so you you can try and you can try using different sizes of speckle
[2:10:39] filters and see how that translates to your the product that you're trying to generate question 48 referring to slide
[2:10:49] 65 which spatial filter is recommended for speckle reduction can you also tell by applying the speckle reduction filter
[2:10:56] if we trade off information details present in the image is this true um so as mentioned there are many different
[2:11:04] specco specco filters I can I can put here some recommendations of the most commonly used speckle filters but anytime you
[2:11:14] apply a spatial specco filter you will degrade the spatial uh resolution question 49 in which instances can you
[2:11:24] combine ascending and descending if you want to create a composite image for each season can I combine these do you
[2:11:30] need to correct the rain cells in image before creating a composite image if yes how can you apply this correction okay
[2:11:38] so first of all you can combine ascending and descending I personally do not um like you can do what I would rather
[2:11:49] do is a separate analysis with the ascending image like time series images and descending time series images and
[2:11:57] then combine the results for example um but you could combine them um and you can do that if your area is
[2:12:08] flat so if you're looking at a wetland or a flat area that should not be an issue now if I want to create a
[2:12:16] composite image for E season can I combine these yes as long as um again they are are um as as long as they it's a flat
[2:12:29] area uh do you need to correct the rain cells in hmh before creating a composite you cannot correct for the rain cells so
[2:12:37] that example I showed that image is not usable you you can't correct I mean you've got some very bright areas and
[2:12:44] you've got some very dark areas you throw that image away so if you use an image like that as part your composite
[2:12:52] your composite is going to look odd so you want to throw that image away and that's why it's important to look at the
[2:12:59] images in your stock question 51 is it possible to derive a high resolution digital surface model out of
[2:13:09] SAR SAR images it is possible with uh insar so it is possible yes there are are some ways to do
[2:13:24] this question 52 besides the interpolation would it be useful to consider slope and aspect to correct Shadows on the SAR
[2:13:33] image image um yeah basically you can use aspect to identify um yeah you can use slope and
[2:13:47] aspect to correct shadows and there are ways to correct it like through interpolation again as I mentioned I
[2:13:54] rather treat those areas with Shadow as areas with uh that have no data usually I find interpolation it just introduces some
[2:14:04] weird artifacts but but there are ways to correct it and it just depends what you're comfortable with I can put some
[2:14:11] resources in here all right one more question uh my next question is about comparing star images could we substract
[2:14:19] one image from another to see the difference yes of course would that be helpful of course if we do that should
[2:14:25] we compare the same polarization like HH between images from different years do we need to make sure things like
[2:14:32] wavelength and angle are the same in both images yes okay so if you want to do like an image difference you want to
[2:14:40] use the same polarization uh because the information content between different polarizations is different right so if you want to
[2:14:49] look at the difference between time a and time B use the same polarization um and you want to use the same
[2:15:00] wavelength and angle are the same in both images ideally you use you know you're doing the difference between with
[2:15:08] images from either ascending uh passes or descending again if it's a flat area it shouldn't be such
[2:15:16] a a big thing but I would stick to either ascending or descending all right one more I'm just
[2:15:24] so excited reading your questions um let's see one more can you please list methods to separate water pixels from others during
[2:15:37] flood analysis other than histogram thresholding can we go ahead with some machine learning for the same if so what
[2:15:45] are the key factors to consider so yeah there are other ways and in the uh list of uh tutorials the
[2:15:56] references I put in the appendix there is actually either one or two ret trainings on looking at flooding that I
[2:16:04] did where I did a a classification so it was beyond just thresholding it was a classification to look to map flooded
[2:16:17] areas so you actually you train your classifier with with u inundated vegetation so a double binds high back
[2:16:25] scatter with open water so that's really dark and then with everything else that's in your image and then you run
[2:16:31] the classification classification okay okay two more can you tell us the paper reference that looked at Woody and
[2:16:45] non-woody vegetation with supervised machine learning yes I will put that reference here referen to slide 70 and
[2:16:52] is this image a composite image of all the polarizations as mentioned HH HV and VV I have to go back and look at slide
[2:17:00] 70 I think that was just an RGB I have to go look back question 57 what freely
[2:17:06] available flatforms provide access to SAR imagery and could you outline their spatial and temporal resolutions as well
[2:17:13] as other key characteristics um so as mentioned I put some platforms there third session will be on the Alaska sat
[2:17:20] satellite facility capabilities and usually most freely available SAR data is on the order of 10 meters like you know Sentinel one it's
[2:17:29] posted at 10 meters palsar data I believe that's at 25 meters at least on Google Earth engine on the Alaska
[2:17:36] satellite facility you have other perhaps higher resolution palsar data so um it tends to be higher resolution uh okay so I think in the
[2:17:48] interest of time I would love to stay here and and keep answering your questions but in the interest of time uh
[2:17:55] let's just um just finish this off uh just come to an end for this session uh I will answer the rest of the questions
[2:18:04] in the document and we will be posting it on the training web page thank you everyone thank you for your great
[2:18:12] interest and keep tuned we will have another uh great session next Wednesday on insar interferometric synth IC
[2:18:21] aperture radar and then a third session on the 20th on the capabilities of the Alaska satellite facility so so what
[2:18:28] sort of s data they have and the amazing resources that they have um on their portal uh okay so thanks to the rset
[2:18:37] team and I will see you all next time have a great day bye-bye
