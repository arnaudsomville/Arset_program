# Basics of Synthetic Aperture Radar (SAR), Session 1/4

`https://www.youtube.com/watch?v=Xemo2ZpduHA` · id 134 · 55:23 · module 20 — Crop Mapping using Synthetic Aperture Radar (SAR) and Optical Remote Sensing

[00:04] Okay. Good afternoon or good morning for some of you my name is Erika Podest and I'm a scientist in the earth science division at NASA's Jet Propulsion
[00:13] Laboratory as well as an instructor for the NASA our set program and this is the first of a four-part webinar series focused on synthetic aperture radar or
[00:24] SAR and today I will start by covering the basics of SAR so by the end of this
[00:36] presentation you'll be able to understand the physics of sorry much information just the basic concepts describe the interactions of SAR with
[00:45] the land surface describe the necessary data of pre-processing and understand the information content and saw images so let's start with the electromagnetic spectrum which is the range of
[01:03] electromagnetic energy that spans from very long wavelengths such as radio waves which can be the length of a football field to very short wavelengths
[01:14] such as gamma rays which are the length of an atomic nucleus so note that most of the energy on the spectrum is not visible to our eyes and visible light is
[01:27] just a sliver of energy from the total amount that surrounds us so I want you to think of this energy as waves propagating not much different that
[01:37] waves crossing an ocean except that electromagnetic radiation travels at the speed of light so remote sensors are designed to operate at specific regions
[01:47] of the electromagnetic spectrum according to their intended application microwave sensors operate within the range delineated in this figure which is
[01:58] at a much lower frequency range than optical and infrared sensors so to put things into context the wavelength of light is about 300 to 700 nanometers
[02:09] while from microwaves it is on the order of 0.32 40 centimeters and because of this huge disparity in wavelengths the
[02:19] features on the Earth's surface appeared differently in the microwave range than in the optical range so there are advantages to observing the surface of
[02:28] the earth within the microwave range and it is primarily that microwaves are not hindered by day or night or most weather conditions as optical sensors are so
[02:44] there are two main types of remote sensing observations passive and active passive measures energy emitted or reflected by the Earth's atmosphere
[02:54] system so examples of passive sensors are off the optical and thermal they're also passive microwave sensors and there are called radiometers they measure
[03:04] energy emitted from a medium in the microwave range an active sensor provides its own illumination source and examples of active sensors are lidar is
[03:15] and radars where a radar is analogous to an ultrasound and instruments emits a burst of energy and let's call that burst a signal and that same instrument
[03:25] measures the portion of the signal that is reflected back active remote sensing in the microwave range is called radar remote sensing in this webinar series we
[03:35] will be focusing only on radar remote sensing specifically synthetic aperture radar so this slide lists in detail the advantages and disadvantages of radar
[03:49] remote sensing over optical remote-sensing the advantages of using radar as mentioned in the previous slide is that you can observe the surface of
[03:58] the earth on either day or night conditions and under almost all type of weather conditions optical images are hindered by clouds or
[04:06] night conditions also the radar signal can penetrate through the medium meaning vegetation canopy snowpack or soil and the extent of this penetration I will
[04:17] explain further along optical only sees the very top of the medium in addition with radar remote sensing there are minimal to no atmospheric effects or
[04:27] Corrections needed as opposed to optical where atmospheric Corrections are critical for proper image interpretation finally radar is very sensitive to the
[04:37] dielectric or electrical properties of the surface and to structure so that's really important radar is sensitive to two things the
[04:46] dielectric and structure of course there are also disadvantages with radar and that is that the information contents and radar data is different than optical
[04:57] and sometimes difficult to interpret also for radar images the presence of speckle which is a salt-and-pepper like a grainy type effect makes it
[05:09] difficult to interpret the image finally the presence of topography introduces distortions which need to be accounted for and all of this will be discussed
[05:19] further along so this slide shows the advantage of having a sensor like radar that has the ability to observe the surface of the earth regardless of cloud
[05:29] cover the figure shows total fractional annual cloud cover averaged from 1983 through to 1990 and the colors indicate the percentage of time that there is
[05:41] cloud coverage as you can see some areas of the world are constantly covered by clouds such as tropical regions and it is areas like these that the radar is an
[05:52] ideal sensor here you can see an example of an optical versus a radar image this is the chef's core volcano in Kamchatka Russia which began to erupt
[06:04] on September 30th 1984 so the image on the left is a photograph taken by astronauts onboard the space shuttle during the early hours of the eruption
[06:13] and clearly showing a thick ash plume the image on the right is a later image required during the eruption by Sir C XR which was one of the early synthetic
[06:23] aperture radar as well in space and it was flown on the Space Shuttle Endeavor so the red is l-band HH green is L BAM HV and see that blue is C band HV
[06:36] so it's a false color composite but on the radar image you can clearly see the surface of the earth despite the ash plume that was being emitted at the time
[06:48] so now let's talk some of the basic concepts of radar a radar is essentially arranging or distance measuring device and there are two categories of radars
[06:58] imaging and non imaging so non imaging is for example an altimeter this webinar series is focused on imaging radars and these radars are side-looking because if
[07:10] the radar would be looking straight down such as the figure on the Left he would not be able to differentiate between two points a and B the figure shows that the
[07:20] signal will reach point A and point B at the same time and return to the sensor at the same time which is why you wouldn't be able to differentiate them
[07:30] however if the radar is sight looking such as the figure on the right the time that it takes for the signal to reach point a and B is different and therefore
[07:41] these two points can be resolved so a radar consists fundamentally of a transmitter a receiver and antenna and an electronic system to process and
[07:59] record the data the transmitter generates successive short bursts or pulses of microwave at regular intervals which are focused by the antenna into a
[08:09] beam and the radar beam illuminates the surface obliquely at a right angle to the motion of the platform the antenna receives a portion of the transmitted
[08:19] energy reflected or it's also known as backscattered from various objects within the illuminated beam by measuring this time delay between the transmission
[08:29] of a pulse and the reception of the backscattered echo from different targets their distance from the radar and therefore their location can be
[08:39] determined as the sensor platform moves forward recording and processing of the backscattered signals builds up a 2-dimensional image of the surface
[08:49] so I'm not going to get into the details of the physics of image formation but in summary the resolution of the radar in the alarm track and which is the azimuth
[08:59] direction that is the direction that the sensor is moving and the across track also known as the range is defined by independent parameters the range or the
[09:10] across track resolution is dependent on the length of the polls the azimuth or the along track resolution is determined by the beam width which is inversely
[09:23] proportional to the antenna length also known as the aperture which means that a longer antenna or a longer aperture will produce a narrow beam and a finer
[09:34] resolution since it is difficult to have long antennas in space one can be synthesized by using the movement of the satellite or aircraft to simulate a very
[09:47] long antenna hence it is called synthetic aperture radar which allows for high resolution images with comparatively small physical antennas
[09:57] and through the use of signal processing of the Doppler shift associated with the motion of the aircraft so radar pulses travel at the speed of light and can
[10:12] only measure the part of the signal that is reflected back to its antenna so most radars measure amplitude and phase not although an amplitude is the strength of
[10:23] the reflected signal ok so this amplitude is the backscatter coefficient also known as Sigma naught which is the ratio of the or the fraction of the
[10:36] incident energy scattered back to the antenna per unit target area and Sigma naught is expressed in decibels by taking the log 10 of the energy ratio
[10:46] this usually varies from minus 25 dB which is an area where there's low back scattered dark tones because little energy is reflected back to the later to
[10:58] some times greater than 1/2 B that's those areas that have really high backscatter or blight tones because a great amount of energy is requested back
[11:07] to the raid house so a very important thing to remember about saw is that the images contain information about two things
[11:19] as mentioned earlier structure and the dielectric properties of the land surface there are later parameters and surface parameters that influence the
[11:30] characteristics of this signal and the next couple of charts will talk about three radar instrument parameters that influence the transmission
[11:39] characteristics of the signal these are wavelength polarization and incidence angle so wavelength is the length of the peak of one wave to the
[11:52] peak of the next wave and in radar remote sensing we often talk about wavelength rather than frequency this is because the length of the wave defines
[12:02] the interaction of the signal with the surface or the meeting wavelength is inversely related to frequency it is the speed of light divided by frequency the
[12:12] higher the frequency the shorter the wavelength and vice versa the table on the right lists the common wavelength bands in
[12:20] radar the letter codes as you can see on the far left and the table ka for example L or P bands were originally selected averaged arbitrarily to ensure
[12:32] military security during the early stages of radar development which is why these letters denominations are not in alphabetical order and as you can see
[12:42] each band has a wavelength and frequency range so for example when someone talks about a specific l-band radar and I will give the example of one called SMAP the
[12:52] soil moisture active passive satellite snap has a radar that operates at a specific frequency which within the l-band range and in this case it's 1.26
[13:05] gigahertz so something to note here is the variation in wavelength in ka-band for example which is on the order of 0.8 - 1 centimeters and in peeve and which
[13:19] is on the order of 30 to 100 centimeters so it's quite a large range in wavelengths and the tone on the sorry images are determined in part by whether
[13:29] there is signal interaction with the surface which is determined by the wave look so there are two important things to remember about wavelength the first
[13:45] is that the longer the wavelength the greater the penetration through the meeting and the second is that the length of the wave will determine the
[13:52] interaction with surface objects if an object or surface roughness is the approximate size of a wave then there will be interaction but the surface will
[14:04] appear rough and there will be energy scattered back if the wavelength is much smaller than an object then there will be no or minimal interaction between the
[14:14] wavelength and the object and the surface will appear smooth there will be minimal to no energy scattered back so for example little radiation is back
[14:23] scattered from a surface with a high fluctuation on the order of 5 centimeters if l-band SAR is used and the surface will appear dark however the
[14:33] same surface will appear bright due to increased back scattering if expanse R is used which expands on the order 2.4 to 3 point 8 centimeter wavelength while
[14:44] l-band is on the order of 15 to 30 centimeter wave 1 so this table shows examples of applications most relevant to specific bands if you're interested
[14:55] in forest type studies what you want be penetration through the canopy and information about forest structure then you would go with something like L or P
[15:05] that if you're looking at agricultural type studies where the biomass is not as large as that of a forest and you want penetration through the vegetation layer
[15:16] and information about crop structures such as leaves or stuns then you would go with C or X bats for studies of ocean surface roughness you will go with
[15:24] something like X okay you bad okay so this graph shows the extensive penetration through different mediums with different bands in vegetated areas x-band will penetrate through the will
[15:43] partly penetrate through the canopy very little in fact while c-band can penetrate further about halfway through the canopy and Elbon can in most cases
[15:53] penetrate all the way and reach the soil if you have a dry bare soil expand only sees the very top surface with minimal penetration while L Bank can penetrate
[16:06] much deeper into the soil in fact there have been studies showing that in dry soils L Bank can penetrate up to a meter or sometimes even more in the case of
[16:17] dry snow expand fees only at the top layer it does have some level of penetration while for L band a dry snowpack will be just a transparent
[16:29] layer okay so this is an example showing a comparison of optical and spaceborne images acquired in April 1994 for a region in southwest Libya where the
[16:45] soils are very dry the image on the far left is a Landsat image which is optical and the images in the middle and right are from one of the early spaceborne
[16:56] SARs called SIR-C and X-SAR. Which, I showed you earlier examples of such and they were flown onboard the Space Shuttle Endeavor and this was a
[17:04] demonstration mission to acquire sorry images and demonstrate their capabilities over given areas around the world one of these early demonstration
[17:13] studies one is was in evaluating radar images for your morphological studies and this is an example of such so Circe XR could operate in different bands and
[17:25] here we have an example of an acquisition sea band which is the image in the middle and an acquisition in El band which is the image on the right and
[17:33] in this area there ancient drainage patterns cut in the bedrock that are not visible in the optical images because of sound cul de but most of the time they
[17:45] appear as dark lines in the radar images so the red arrows point to these floovio systems and since El band has greater penetration in these dry soils sometimes
[17:55] on the order of as I mentioned one to even two meters more of these drainage patterns or floovio systems are discernible in el band then and see them
[18:04] and from these early studies the term grade our rivers was coined for buried floovio systems or paleo channels so this is another example of Raider
[18:18] penetration into soils this area is part of the Nile River near the fourth cataract in Sudan each image is about 50 to 19 kilometers and the top image is a
[18:28] photograph taken with color infrared film from the space shuttle Columbia in November 1995 and the radar image at the bottom was acquired again with cersei XR
[18:40] in April 1994 it's a false color image using a combination of L and C band at different polarizations the thick black band in the top right of the radar image
[18:54] is an ancient channel of the Nile that is now buried under layers of sand and this channel cannot be seen in the photograph and its existence was not
[19:03] known before this radar image was processed so the area to the left in both images shows how the Nile is forced to flow through a set of fractures that
[19:13] crosses the river to break up into smaller channels suggesting that the Nile has only recently established this course so this radar image have has
[19:23] provided or allowed scientists to develop new theories to explain the origin of this Great Bend of the Nile and Sudan where the river takes a broad
[19:33] turn to the southwest before resuming its northward Horse to the Mediterranean Sea so this example is of penetration depth through vegetation and the image
[19:48] on the top is the C band image again C band has a wavelength of about 570 and the image on the bottom is a P band radar image and P band has a wavelength
[20:04] of about 40 centimeters so note the difference the greater details in the p-value image the purple area color area in the C band image is likely an area of
[20:14] low vegetation however the P Venom it shows a lot more complexity in this area also south of the low vegetated area is a forested area with lower biomass than
[20:25] the area immediately west of it and also note there are purplish areas north of the river in the p-value which which are areas having different forest structure
[20:35] or biomass so you can see a lot more detail about the forest which the P band rather than see them this example shows radar signal penetration through
[20:49] vegetation to detect in the native areas and this is an El band a snap radar mosaic of the Amazon basin acquired in April of 2015 in the middle of the image
[21:01] you can see the Amazon River and the further west you go you can see vast bright areas and these bright areas is inundated vegetation and Elbe and is
[21:13] ideal to detect in native vegetation in the tropics because a signal can penetrate through the most high biomass vegetation and when I mentioned when I
[21:22] say inundated vegetation that means there's vegetation and there's standing water underneath the vegetation so another layed out parameter we talked
[21:35] about wavelength the other one is polarization which refers to the plane of propagation of the electric field of the signal irrespective of wavelength
[21:44] radar signals can be transmitted or received in different loads of polarization so most radars are designed to transmit
[21:53] microwave radiation Eirik either horizontally polarized or vertically polarized and this figure illustrates these planes of propagation if you had a
[22:02] long string tied to an object and if you stand at the very end of the string and move it up and down in a vertical manner such as the figure in
[22:10] the very top then the signal is vertically polarized if you move the string horizontally from side to side then the signal is horizontally
[22:19] polarized and similarly the antenna can be seen either the horizontally or vertically polarized back scatter energy by applying specific filters and some
[22:29] antennas can receive both so there are there can be full combinations of both transmit and receive polarizations which are as follows h h4 horizontally
[22:41] transmitted and horizontally receipt vv4 vertically transmitted and vertically received hv4 horizontally transmitted and vertically deceased and then vh4
[22:52] vertically transmitted and horizontally received the first two polarization combinations are referred to as like polarized because the transmit and
[23:04] receive polarizations are the same so HH and VD are like polarized the last two combinations are referred to as cross polarized because the transmit and
[23:13] receive polarizations are opposite of one another systems that collect data and all four combinations are called quad pol and
[23:22] they can more fully characterize structure on the surface so in summary polarization provides information on the horizontal and vertical components of
[23:32] the target as part of this webinar series there will be one webinar focused on polarimetric SAR and that will be the third lecture on june 5th by dr. nayara
[23:43] pizza so this is an example of a fully quad pole l-band source system called you a lease R which is an airborne sensor and in 2013 it
[23:58] acquired imagery over the pacaya-samiria natural reserve in the peruvian amazon this reserve is a vast wetland ecosystem and the images on the top are mosaics of
[24:09] l-band h h hv and bv and the one on the top far-right is the RGB combination of the three and this is an ideal way to visualize the
[24:22] contributions of different polarizations through their color combinations the image on the bottom is a zoom a subset of a part of the image and a case where
[24:35] you see the information content unique to each polarization which in this case is representative of different types of wetland vegetation so incidence angle is
[24:47] the angle between the direction of the incident wave and the Earth's surface plain large angles will be more sensitive to surface roughness and will
[24:55] penetrate less into the medium as opposed to small angles okay so low incidence angles will result in high back scatter and back scatter will
[25:07] decrease with increasing incidence angles in general the slopes facing towards the leader will have small local incidence angles causing relatively
[25:17] strong back scattering to the sensor and these areas will appear very bright for example so later back scatter we've talked about the radar parameters that
[25:37] influence back scatter such as frequency polarization and infinite angle and now we will discuss the ground parameters that influence back scatter and these
[25:47] are dielectric and surface roughness or structure so the brightness of features in a radar image is dependent on the portion of the transmitted energy that
[25:57] is returned back to the radar from targets on the surface and the magnitude or intensity of this back scatter energy is dependent on how the radar energy
[26:06] interacts with the surface which is a function of several variables or parameters and these include the radar parameters as well as surface dielectric
[26:18] and structure so surface roughness is the dominant factor in determining the tones on a radar image surface roughness refers to the average
[26:28] height variations in the surface cover from a plane surface and is measured on the order of centimeters so whether a surface appears rough or smooth to a
[26:37] radar it depends on the wavelength and the incidence angle a surface is considered smooth at the high variations are much smaller than the way radar
[26:46] wavelength so for a given surface or a given surface will appear rougher as the wavelength become shorter and smoother as a wavelength becomes longer rough
[26:58] surfaces will appear lighter in tone on an image and size and orientation influences the interaction of the waves that are either the horizontally or
[27:09] vertically polarized the density of the scatterers will also influence the strength of the signal making for a stronger signal when scatterers are
[27:17] closer together and finally the dielectric constants which is an indicator of receptivity and conductivity determines in part the
[27:27] intensity of the returned signal so let's talk dielectric the presence or absence of moisture drives the dielectric so that
[27:45] the complex dielectric constant is a measure of the electrical properties of surface materials the dielectric property of a material influences its
[27:54] ability to absorb microwave energy and therefore critically affects the scattering of microwave energy so dielectric is an indicator of relativity
[28:05] and conductivity and the magnitude of radar back scatter is proportional to the dielectric constant of the surface so for example for dry naturally
[28:14] occurring materials their dielectric is on the range of three to eight for liquid water it is around forty to eighty so it's frequency dependent and
[28:24] therefore the amount of moisture in the soil or vegetation can influence greatly influence and increase in in reflectivity and radar reflectivity
[28:37] I generally relativity and image brightness increases with increase moisture content which means that there is also less penetration through the
[28:47] medium so for example surfaces such as soil and vegetation cover will appear brighter when they are wet than when they are dry the lower the dielectric
[28:56] constant the more incident energy is absorbed and the darker the image will appear or the object will appear on the image this is an example of differences
[29:12] in image brightness for different landscape dielectric values so the dielectric of frozen water is very low it's on the order of three point one
[29:19] five compared to liquid water which is on around eighty in the northern high latitudes when the land surface transitions from frozen to thawed in the
[29:29] spring there is a very large change in dielectric and consequently a change in signal intensity from dark to bright this example shows just that this is a
[29:42] multi temple time series of an area near Fairbanks Alaska from the JR s once which was Japanese satellite that carried and l-band SAR and flew in the
[29:53] 1990s you can see that the February image when the land surface was frozen is darker in tone than the June image when the land surface was thought and in
[30:04] freeze-thaw studies utilizing radar signals the dielectric is that for the controlling mechanism causing changes in backscatter behavior and it's really
[30:16] radar is really ideal for these type of freeze-thaw studies in the northern high latitudes so there are different types of back scattering mechanisms and as a
[30:27] useful rule of thumb the higher the backscattered intensity the rougher the surface being imaged so first of all surface roughness refers to the average
[30:36] height variations in surface cover from plane surface measured in the order of centimeters and whether a surface appears rough or smooth to radar depends
[30:48] on the wavelength and the incidence angle as mentioned before so it's considered smooth that the height variations are much smaller than the
[30:55] radar wave length the first type of backscattering mechanism is a smooth surface also known as a specular reflection so it's like a mirror which
[31:05] is the top of image a smooth surface acts like a mirror for the incident radar poles and most of the incident radar energy is reflected away from the
[31:15] sensor and those areas appear very dark open-water surfaces tend to be specular reflectors when the surface height variations begin to approach the size of
[31:26] the wavelength then the surface will appear rough and rough surface scattering is illustrated in the bottom left image a rough surface will scatter
[31:35] the energy approximately equally in all directions or diffusely and a portion of the energy will be back scattered to the later then there is the opposite
[31:47] mechanism which is called double bounce and that's illustrated in the top right figure when this two smooth surfaces form a right angle facing the radar beam
[31:57] the beam bounces twice off the surfaces most of the greater energy is reflected back to the radar sensor double bounce is commonly seen in urban areas such as
[32:09] high-rise buildings where you have these very geometrical angles you have smooth surfaces like streets and then you've got buildings and you have energy being
[32:20] the Raider energy being scattered from the street to the building and then back to the satellite and then you find this type of double bounce as well in flooded
[32:31] areas where you've got standing water and then you've got upright standing vegetation and you this creates very geometrical angles and causing the
[32:42] energy to be a large amount of the energy to be double balanced and scattered back to the satellite that's why flooded areas appear very bright so
[32:52] finally there's volume scattering which is illustrated in the lower light image involving scattering is the scattering of radar energy within a volume or a
[33:01] medium and it usually consists of multiple bounces and reflections from different components within the volume you can have volume scattering within a
[33:13] snowpack for example or within a vegetation layer so this next slide is an example of volume scattering in a forest and scattering may come from the
[33:24] leaf canopy at the top of the trees to leave it on the branches further below the tree trunks and this figure illustrates all of the possible
[33:32] scattering mechanisms within a forest including crown volume scattering direct scattering from the tree trunks direct scattering from the soil surface cut
[33:41] ground and ground trunks scattering or crown ground our ground crown scattering so these next couple of examples show different the different scattering
[33:56] mechanisms discussed and this example shows specular reflection the image on the right is a mosaic of the Amazon basin from this map radar which you saw
[34:05] earlier and this is an El band radar and the yellow circle delineates an area of specular reflection which is open water and is part of the Amazon River
[34:14] so flat surfaces such as paper ODEs runways or called water normally appear as dark areas and radar images especially at little longer wave
[34:24] wavelengths like L man since most of the incident radar energy is reflected away now sometimes if you have a lot of wind that is causing a roughness on the water
[34:34] you'll see a lighter tone a dark or a tone that is not as dark so this is an
[34:46] example of a rough surface scattering and again the area where there's rough surface scattering is delineated by the yellow circle in this map radar image
[34:56] and this is an area of very low to no vegetation an area that has been deforested as a cultural fields with low vegetation tilled fields savannas bear
[35:07] fields or in general areas that have low vegetation have rough surface scattering and so the tone here is quite dark but not as dark as a specular scatter this
[35:18] example shows volume scattering billon aided by the yellow circle on this map radar image and this is a forested area the intensity of valen scattering
[35:27] depends on physical properties of the valley volume that would be variations in the dielectric constant and structure and finally this last example shows
[35:40] double bounce delineated again by the yellow circle on a snap radar image and this is an inundated force meaning that the trees are understanding water and
[35:50] the reason because that it's so strong is because the signal bounces off the water which is a specular reflector onto the tree trunk or other components of
[36:02] the tree and then back to the satellite so we cannot measure the amount of standing water but just that there is water above the surface whether it's 10
[36:11] centimeters or a meter that we don't know and this is a example of the use of radar to detect oil spills on water this example shows
[36:23] an image from the UAV SAR sensor which is an airborne star sensor operating at l-band fully polarimetric it's an area in the
[36:30] Gulf Coast of the United States and was taken shortly after the Deepwater Horizon oil spill to determine the extent of the spill and movement of the
[36:39] spill onto the coastal areas through multiple image acquisitions this is a false color image of h h HB & VV the presence of oil loosens out the sea
[36:50] surface and makes for an especially good specular reflection so much smoother than the ocean surface where there's no oil and here we can clearly see the oil
[37:01] extent as areas that are very dark in contrast to the the ocean water which appears as blue this is an example of the use of radar for land cover
[37:15] classification this example uses sorry images from the Japanese GRS one satellite L bands are operating in the 90s top left image is the radar image of
[37:25] an area near Manaus Brazil where there is a combination of forested and B forested land the difference that areas have a darker tone and as you can see
[37:36] there's they also have some geometric features indicating that these are agricultural lands or grazing lands and the image on the top right is a result
[37:46] in classification delineating forest regrowth and non forest the bottom left is a different example it shows part of a savanna region in the Amazon and the
[37:56] savannas are characterized by short woody vegetation as well as non woody savanna so there's grassland or very short
[38:03] grasses and you can see these different tones on the image on the bottom left image and the resulting classification showing that there is non woody savanna
[38:16] which are the darker tones and areas where there's really woody savanna are the slightly lighter tones so there are a number
[38:27] of geometric and radiometric distortions that once has to correct foreign radar images and in this next section we will discuss these distortions so this slide
[38:39] this start the fine looking nature of religion radars results in certain geometric distortions one of them is flat range which is the distance of the
[38:50] signal between the sensor and the target it is not the true horizontal distance along the Earth's surface and this results in a very image scale moving
[39:01] from near to far and causing targets in the knee range to appear compressed relative to the forage so using trigonometry ground range distance can
[39:12] be calculated from the slant range distance and platform altitude to convert to the proper ground range format this figure shows a radar image
[39:22] in the slant range display which is a top where the fields on the road in the near range so closer towards the sensor on the left side are appear compressed
[39:35] and the same image converted to ground range display on the bottom shows these features in their proper geometric shape so for most applications it is desirable
[39:48] to have the radar image presented in a format which corrects for this Distortion to enable true distance measurements between features and this
[39:58] requires a slanting range image to be converted to ground range image this can be done by the radar processor prior to creating an image or after data
[40:07] acquisition by applying a transformation to the slant range image so similar to distortions encountered when using cameras and scanners radar images are
[40:18] also subject to geometric distortions due to relief displacement and this displacement occurs perpendicular to the flight path and however this
[40:30] displacement is reversed with targets being displaced towards instead of away from the sensor so radar for shortening and layover are two consequences which
[40:41] results from relief displacement layover occurs when the radar beam reaches the top of a tall feature as seen on the image on the left so this tall feature
[40:53] the top is B and the signal reaches the top before it reaches the base which would be a the returned signal from the top of the feature will be received
[41:04] before the signal from the bottom and as a result the top of the feet the feature is displaced towards the radar from its true position on the ground and it's
[41:18] called it lays over that's why it's called lay over so it lays over the base of the feature so lay over is most severe for small incidence angles and at
[41:29] the near range of a swath and in mountainous areas for shortening occurs which is the image on the right occurs when the radar beam reaches the base of
[41:39] a tall feature tilted towards the radar so a mountain for example before it reaches the top because the radar measures distance and slant range the
[41:51] slope from A to B will appear compressed and the length of the slope will be represented incorrectly depending on the angle of the hillside or mountain slope
[42:00] in relation to the incidence angle of the radar beam the severity of foreshortening will vary maximum foreshortening occurs when the radar
[42:10] beam is perpendicular to the slope so this next figure shows the correction of foreshortening and it's an image over an area of complex topography where the
[42:29] where there's foreshortening and notice the bright spokes on the middle bottom of the image they are peer compressed compared to how they look
[42:39] after the image is collected so correction of the image is done utilizing a digital elevation model radar
[42:48] this image is an example of shadowing so radar shadow occurs when the radar beam is not able to eliminate the ground surface shadows occur behind vertical
[42:58] features or slopes with steep sides and since the radar that cannot illuminate the surface there's no energy to be back scattered and therefore they're dark and
[43:09] as included incidence angle increases from near to far range so will shadow effects as the radar beam looks more and more obliquely at the surface so the
[43:20] image on the right shows these shadow effects and there are ways to correct for shadows through interpolation however I personally prefer to leave the
[43:29] shadow areas as they are so I consider them data gaps rather than using interpolated values so they're also radiometric distortions to account for
[43:42] and a radar transmit more power in the mid-range portion of the illuminated swath than at the near and far ranges and this is known as the antenna pattern
[43:54] so the results are stronger in the centre of the image rather than at the edges of the swath so this antenna pattern can be corrected for and it also
[44:05] varies dramatically as the range distance increases so as this for a given surface the strength of the return signal becomes smaller and smaller
[44:16] moving further across the swath and the antenna pattern correction can be applied to produce a uniform average brightness across the image swath to
[44:29] better facilitate not only visual interpretation but actually data analysis of the image so radiometric distortions also exist in connection
[44:39] with terrain relief and sometimes they cannot be completely corrected so the radiometric correction involves removing the misleading influence of topography
[44:52] on backscatter values so for example the correction eliminates bright back scatter caused by radar reflections from steep
[44:59] slopes leaving only the backs that reveals the characteristics of the surface such as what's related to vegetation and soil moisture so in the
[45:10] image on the right southern slopes are initially bright and know their slopes are dark after correction the southern slopes have a
[45:18] more uniform appearance and however some of the northern slopes stay dark and this is attributed to different types of vegetation found in those areas typical
[45:31] of vegetation found in northern slopes this is a very important step in doing the radiometric distortion correction and I will discuss these steps in
[45:41] webinar 2 where I talk about data processing and analysis so the last part that I want to discuss is speckle and speckle appears as a very grainy
[45:58] salt-and-pepper texture in an image and it caused by constructive random constructive and destructive interference from multiple scattering
[46:08] returns within a pixel cell okay as in and it's an example a homogeneous target such as let's say it's a grass field without the effects of speckle with
[46:23] general results in light tone pixel values on an image such as a on the right image but reflections from individual blades of grass within each
[46:34] resolution cell results in some image pixels being brighter and some being darker than the average tone that would be B so that that field appears speckled
[46:44] and a detailed analysis of radar images show that for even for a single surface type there are lots of gray level variations can occur adjacent between
[46:58] adjacent resolution cells and these variations create this grainy texture characteristic of radar images so stuck make interpretation more difficult and
[47:12] it's desirable to reduce speckle prior to interpretation and analysis and speckle reduction can be achieved in two ways one is multi looking and the other
[47:23] one is spatial filtering so multi look refers to the division of the radar beam into several narrow beams in this case five and each sub being provides an
[47:33] independent look at the illuminated scene as the name suggests so each of these looks will also be subject to speckle but by summing and averaging
[47:42] them together to form the final output image the amount of speckle will be reduced this comes at the expense of reducing the resolution so it all
[47:55] depends on your specific application if you want high resolution then you want to apply less looks if you don't care about averaging at the original
[48:08] resolution to a coarser resolution then you can apply a larger number of looks of multi looks so the other type way to reduce speckle is through spatial
[48:19] filtering and this consists of a moving of moving a small window of a few pixels in dimension that you can define the size of this window three by three five
[48:32] by five seven by seven and you lose this over each pixel in the image applying a mathematical calculation using the pixel values under that window or within the
[48:43] window and then you replace the central pixel with the new value so the window is moved along in both the X and Y dimensions one pixel at a time until the
[48:53] entire image is covered and by calculating the average of a small window around each pixel a specific mathematical calculation a smoothing
[49:04] effect is achieved and the visual appearance of speckle is reduced so you can go with either multi looking or spatial
[49:17] filtering but again both of these they reduce speckle at the expense of resolution so since they're they're applying it's basically smoothing the
[49:29] image so the amounts of speckle reduction we desired must be balanced with the particular application the image is useful and the amount of
[49:40] detail required so if you require fine detail and high resolution then little or no multi looking or spatial filtering should be done if if you are looking at
[49:51] large areas for mapping or other applications over large areas then speckle reduction techniques may be more appropriate and unacceptable where you
[50:02] do large-scale averaging or you'd use larger multi looking or larger windows or spatial filtering so I personally I prefer to do a multi looking and just
[50:17] averaging there are a number of different filters that are part of the software or embedded into different softwares that are available out there
[50:31] and you can try how well they work however I that I've found personally that the best way to do analysis with radar images is just to do a simple
[50:43] averaging which because it the minimal level of manipulation of the pixels so you the less you change the original pixel values that the better so I want
[50:59] to keep as true to the original pixel value as possible so finally this is a table of different SAR sensors out there there's radar set there's Sentinel
[51:17] there's reset and the webinar2 series will be focused on processing of data SAR data using Sentinel the because it's a freely available data set
[51:30] and it's it's currently operational so it's a great resource and we'll be using a software tool for analysis that is also freely available so I encourage you
[51:42] if you've seen this webinar series to also look at the next webinar series on data processing so this has a specifics about each of these source sensors and
[51:57] then if you're interested in our data collected in the past you can have access to this data through the Alaska satellite facility there are a number of
[52:10] different so our data sets available as seen here in this chart the areas that the red boxes lists all of the different SAR datasets available either satellite
[52:24] or airborne so there's not only sentinel one but there's radar from SMAP there's a radar from cset which was the first satellite l-band sensor in space that
[52:37] was back in the 70s if you want to go all the way back it only flew for a
[52:42] couple months there is a lowe's pulsar which was a Japanese satellite its Elbe and there's some radar set data available that sieve
[52:50] and there is ers that from the European Space Agency RS 1 and 2 that's Steve and there's j RS 1 I showed some examples of jairus once
[53:00] was a l-band SAR sensor from the japanese satellite that was flown in the 90s and then there's your a VCR and air SAR these are airborne sir sensors your
[53:10] abs are is l-band fully parametric and air SAR was a multi frequency airborne SAR sensor and then is there our upcoming satellite missions
[53:24] and there's a specific one called specific one that is called that a nice R it is to be launched a 2021 and it's a joint satellite mission between NASA and
[53:39] the Indian Space Agency it's going to have two sensors saude sensors one is an L band and another one is an F bad so the L band will be made by NASA and the
[53:53] S band will be provided by the Indian Space Agency it's going to be very very exciting very high resolution and applicable to a number of different very
[54:03] important applications some of these are listed here but very much targeting inundation direction of inundation change in water level forested in urban
[54:14] areas looking at flooding from runoff and snowmelt aquifer drawdown and recharge oil and natural gas extraction from onshore fields extensive degree of
[54:25] mine collapse so lots of very exciting applications all right so that concludes this talk but in summary I know this is a lot of
[54:39] information there are a lot of things to account for but just remember that radar images provide information about dielectric just the electrical
[54:49] properties of the land surface and about structure and then you have radar parameters and then you've got land surface parameters and most importantly
[55:00] for you to remember is what is the frequency what is the wavelength of the sensor and that will help you determine how well you can use it for your
[55:12] specific application so with that I conclude and I'm open to your questions thank you very much
