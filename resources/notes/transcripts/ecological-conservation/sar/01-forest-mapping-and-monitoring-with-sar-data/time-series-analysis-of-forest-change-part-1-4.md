# Time Series Analysis of Forest Change, Part 1/4

`https://www.youtube.com/watch?v=KitbOq7ARNQ` · id 311 · 2:31:09 · module 96 — Forest Mapping and Monitoring with SAR Data

[00:01] hello and welcome to the first part of the forest mapping and monitoring with sardata webinar series i'm dr erica podest and i'm a scientist
[00:11] in the earth science division at nasa's jet propulsion laboratory in pasadena california california this series has been assembled by
[00:20] several rsat instructors including dr amber mccollum and dr juan luis torres perez from nasa ames and scientist sean mccartney from nasa
[00:33] goddard goddard this is a four-part webinar series and today's webinar is focused on time series analysis with sar data and
[00:43] this includes a demonstration using google earth engine for this training we have four two-hour sessions the next ones will be on may
[00:53] 14th 19th and 21st we will have two sessions per day one session will be in english and the other
[01:00] one will be in spanish and there will be the same material you could find all the course materials
[01:09] on the website listed here and after each session we will have a question and answer answer session
[01:17] session feel free to type your questions into the chat box along the way and we will try to get to as many
[01:25] questions as possible at the end of the session session we will post the questions and answers on our website after the training
[01:33] if we don't get to a question you can also email me or my colleagues dr mccollum or dr torres perez at the email
[01:41] addresses listed here homework and certificates we will have one homework and it will cover content from not only the lecture
[01:52] but from the exercises as well and to receive credit for the homework you must submit all your answers via
[01:58] google forms the link to the homework will be available available through the rsap webpage to receive a certificate of completion
[02:08] you must attend all four live webinars and complete the homework it takes some time to process the
[02:16] certificate so you can expect to receive them in about two months after the completion of the course
[02:25] so the prerequisites to this webinar series are the introduction to synthetic aperture radar webinar series as well as
[02:34] the advanced webinar sar for land cover applications these are both our set webinars and you can access them through
[02:41] the links posted here you will also need a google earth engine and in order to do the demo that we'll be doing at the
[02:51] end of this session session and you can set up an account for free by following the link here
[03:00] and finally in terms of the course materials we will be posting the pdf presentations as well as the recordings of each week's
[03:11] webinar on the rsa web page and you can access that through that last link here as a reminder this webinar series
[03:19] contains four trainings the second webinar will be on thursday may 14th and it will cover the use of optical and
[03:27] radar data for vegetation mapping it will be taught by dr amber mccollum and dr juan torres perez
[03:35] the third webinar will be next tuesday may 19th and it will be focused on mapping mangroves with sar
[03:44] and it will be taught by me the fourth and final webinar will be on thursday may 21st
[03:50] which will be on forest height estimation and will be taught by a special guest lecturer professor paul
[03:56] cicada from university of massachusetts amherst learning objectives by the end of this presentation you'll be able to identify the unique
[04:08] attributes of radar data as related to force mapping you'll be able to understand how multiple radar images
[04:17] can be used to analyze change in vegetation and time and finally you'll be able to conduct a
[04:25] time series analysis of change in vegetation cover using radar data in google earth engine let's start with the radar overview
[04:36] summary if you've taken the previous sar webinars you will have seen a lot of this material already so this
[04:42] might be a refresher or a review for some of you now let's talk about some of the basic
[04:52] concepts of radar a radar is essentially a ranging or distance measuring device there are two categories of radars
[05:00] there's imaging radar and there's non-imaging radar so for example an altimeter is a non-imaging radar sars are imaging radars
[05:09] and they are side looking because if the radar would be looking straight down such as the figure on the left you
[05:17] wouldn't be able to differentiate between the two points that you see here points a and point b
[05:23] the signal would reach each point at the same time and return to the sensor at the same time which is why you wouldn't
[05:31] be able to differentiate them now if you place that radar towards the side so it's looking it's side looking
[05:39] like the figure on the right the time that it takes for the signal to reach point a
[05:44] and point b is different and therefore you can resolve these two points a radar is an active system because it
[05:54] provides its own source of illumination a radar transmits these short bursts or pulses of microwave energy at regular
[06:03] intervals intervals and the radar beam illuminates the surface obliquely at a right angle to the motion of the platform in this case
[06:10] it's an aircraft now the antenna receives a portion of the transmitted energy reflected or backscattered from various objects
[06:19] within the illuminated beam in this case it's the ground there's a house and a tree tree and by measuring the time delay between
[06:28] the transmission of a pulse and the reception of the back scattered signal from different targets their distance from the radar and thus
[06:37] their location can be determined as that sensor platform moves forward recording and processing of the back scattered signals builds up a
[06:47] two-dimensional image of the surface the received radar signal is the phase and the amplitude this the phase is
[06:56] provided in radians while the amplitude is provided in decibels in db and and we will just be working with
[07:05] the amplitude here in in these examples in the next following slides i'll talk about the parameters that influence the
[07:15] characteristics of the signal there are radar parameters and there's surface parameters i'll discuss these in the context of land cover mapping and let's
[07:24] start with the radar parameters there are three radar parameters that influence the transmission characteristics of the signal
[07:31] these are wavelength polarization and incidence angle so the first radar parameter is wavelength and as you might already know
[07:42] from a previous sar webinars in radar remote sensing we often talk about wavelength rather than frequency now the wavelength is the distance from
[07:52] the peak of one wave to the peak of the next wave and the reason we talk primarily about
[07:57] wavelength is because the length of the wave defines the interaction of the signal with the surface or the medium
[08:07] the wavelength is inversely related to frequency and the higher the frequency the shorter the wavelength and vice
[08:14] versa versa the table on the right lists the common wavelength bands in radar the column on the left has the band designation and
[08:23] each band covers a range of frequencies so for example the x-band range goes from 8 to 12.5
[08:35] gigahertz gigahertz which is equivalent to a wavelength range of 2.4 to 3.8 centimeters radar sensors operate at specific
[08:47] frequencies frequencies or at a specific frequency within that range so if you hear of a sensor that
[08:53] operates at l-vent for example it means it operates at a specific frequency within the l-band range note that a c-band sensor typically has
[09:04] a wavelength of around five centimeters while an l-band sensor typically has a wavelength of around 24 centimeters and
[09:11] p-band on the order of 68 centimeters so this range in wavelengths from between different bands is quite
[09:21] large so there are two important things to remember about wavelength the first is that the longer the wavelength the
[09:32] greater the penetration through the medium medium and the second is that the length of the wave will determine the interaction with
[09:39] surface objects the wave will interact with objects that are approximately its size the figure on the left shows the extent
[09:48] of penetration through different mediums with different bands in vegetated areas x-band is generally dominated or governed by the top of the
[09:59] canopy canopy so so you're seeing just information from the top of the canopy while with sea band
[10:06] it will penetrate further and l-band that signal will penetrate even further into the vegetation canopy and likewise in the case of a dry bare
[10:17] soil expand will only see the top surface of the soil while l-band will penetrate somewhat into the soil
[10:24] and and the wetter the soils the less the penetration that's one thing to keep in mind we'll talk about that a little bit
[10:31] further ahead so there is a preferred wavelength depending on the type of study that you're conducting and the table on the right lists some of
[10:39] these and for example p-band is good for studies that involve high penetration through high biomass forests such as those found in the
[10:48] tropics tropics and for assessing biomass and it also penetrates deeper into soils and is good for assessing soil moisture at deeper
[10:56] layers layers than that provided by shorter wavelengths wavelengths l-band is also a very good sensor for forest and soil studies
[11:05] c-band and x-band are better for agricultural studies or areas where there's lower biomass grassland savannas plantations plantations that have low biomass ku
[11:20] band and ka band are typically used for snow cover studies and glaciology so ideally for vegetation studies the
[11:28] best sensors are p and l-band and there's currently no operational freely available l-band data and there is no p-band sensor in space
[11:38] however however in 2022 nysar will be launched and it's a satellite that is it's a joint satellite
[11:48] mission between nasa and the indian space agency and they will have an l-band and an s-band sensor
[11:55] also around that time the european space agency is planning on launching its own satellite called biomass which
[12:02] will have a p band sensor so here we have an example of penetration depth through vegetation with two different wavelengths and this
[12:13] is in a place called kalimantan in indonesia the image on the top is a c-band image which has a wavelength of about five
[12:23] centimeters and the one on the bottom is a p-band image on the order of 68 centimeters centimeters the wavelength and these are false color
[12:32] composites so the red channel has hh the green channel has hp and the blue channel has vv
[12:40] and you can clearly see the the there's greater detail in the p band image and the purple color area in the c
[12:48] band image is likely an area of low vegetation with patches of higher vegetation in between the p band image shows more sensitivity
[12:59] to the patches in between this area and south of the low vegetated area is a forested area
[13:06] with lower biomass than the area immediately uh west of it these areas are more distinctive in the
[13:13] p band image than in the c one and in the c band image just because the signal is
[13:21] penetrating through the vegetation canopy so there's much more information content about vegetation structure also to note are the purplish areas
[13:32] north of the river and in the p band image you can see there are some purplish areas there and they have different
[13:40] forest these are areas that probably have different forest structure or biomass biomass and one final thing to note if you look
[13:46] closely at the p-band image you'll notice some road structures there from on the west part of the image they
[13:52] extend to the west and you can certainly not you can't see that road structure on the c-band image
[14:04] the other radar parameter is polarization and that refers to the plane of propagation of the electric field of the signal so irrespective of
[14:13] wavelength radar signals can be transmitted and or received in different modes of polarization there can be four combinations of both
[14:23] transmit and receive polarizations and they go as follows there's horizontal transmit and horizontal receive so that's hh
[14:33] vertical transmit and vertical receive that's vv horizontal transmit and vertical receive that's hv and vertical transmit and horizontal
[14:43] receive that's vh hh and vv are referred to as like polarizations polarizations or co-polarized and hv and vh are
[14:54] referred to as cross-polarized a system that measures all four polarizations is known as a quad pole system
[15:04] system and polarization is useful in providing information on structure orientation penetration depth is also in part influenced by polarization and in forest
[15:16] hh tends to be less attenuated than vv so hh penetrates deeper into the canopy than vv or vh
[15:28] so here we have an example of a quad-pole l-band sar image and this is from a an airborne sensor called uavsar it's an
[15:39] l-band l-band airborne sensor from jpl and in 2013 this sensor acquired imagery over the pachaya sumerian natural reserve and
[15:50] that's located in the peruvian amazon and so this reserve is a very large wetland ecosystem so in this image there's a combination
[16:02] of forest and and inundated vegetation the images in black and white as you see they're individual images so they're
[16:10] they're single polarizations so there's hh hv and vv polarizations and uh you can note the differences between the
[16:20] in the intensity between the different images especially with the cross polarized especially with the hb image and the degree of inhomogeneity of a
[16:30] surface or volume tends to depolarize the signal causing a high return in the crossbow so the point
[16:38] here is that hv is a very good polarization to determine the presence of vegetation because the signal depolarizes when
[16:51] there's a lot of volume scattering here we have an rgb image of the different polarizations and hh is in the
[17:01] red channel hv is in the green channel and vv is in the blue channel and these false color images are a great
[17:08] way to visualize the contributions of the different polarizations through color combinations you can see the information content
[17:15] that's unique to each polarization which is in this case is representative of different types of wetland vegetation and non-inundated
[17:24] vegetation vegetation so hv is in the green channel and anything that is green means that the return is higher in hv
[17:34] than vb or hh anything that is magenta means that it is a combination it's a combined contribution between hh and vv so that
[17:43] means both hh and vv are high and the table that i've placed here this comes from the sar handbook chapter 2
[17:53] is a really great guide that summarizes the resulting colors based on different tones of an image so we know that if an
[18:01] image if it's if you do an you have an rgb image and it some areas look green
[18:08] that means the the area that looks green the the image that's in the green channel has a
[18:18] very bright tone okay okay but there are all sorts of combinations of colors so um um this this
[18:28] table is is a good guide really to understand how to interpret rgb images the final sensor parameter to discuss is
[18:39] incidence angle and that's the angle between the direction of the incident wave and the earth's surface plane
[18:46] in radar the incidence angle increases across the swath from the near to the far range and large angles will be more
[18:54] sensitive to surface roughness and will penetrate less into the medium as opposed to small angles as you can
[19:00] see from this figure here low incidence angles so those are perpendicular to the surface will result in higher back scatter and greater
[19:11] penetration this is an example of the effect of incidence angle variation discussed in the previous slide this is a sentinel 1
[19:21] vv image and the radar is left looking and and if you look at the image on the left
[19:29] that's the sentinel one image the surface appears smoother as the incidence angle increases so that incidence angle will increase from near
[19:38] range to far range and in this case there's there's a 15 degree variation in the near range
[19:44] it's around 30 in the far range it's around 45. so as we move further across the swath
[19:50] from near to far range there's less energy that is returned to the sensor and the image becomes increasingly
[19:56] darker in tone it's around three to five db difference in backscatter and sometimes you have to be careful
[20:03] when you're doing classifications for example because if if you select a a if you train your classifier with a
[20:14] class that's in the near range that class will not have the same backscatter characteristics in the far range
[20:24] so now let's discuss the radar signal interaction with the surface the length of the wave will determine
[20:31] how it interacts with surface objects so the wave will interact with features on the surface that are approximately
[20:38] the length of the wave the size of the components of a surface will determine its roughness and surface
[20:44] roughness is the average height variation in the surface cover from a plane surface and it's measured in the
[20:51] order of centimeters so whether a surface appears rough or smooth to a radar depends on the wavelength and incidence angle
[21:00] a surface is considered smooth if the height variations are much smaller than the radar wavelength and as a useful
[21:06] rule of thumb the higher the backscatter intensity the rougher the surface being imaged imaged so let's start with these different
[21:17] backscatter what we call mechanisms one is a smooth surface it's also known as specular reflection so a smooth surface
[21:26] acts like a mirror to the incident radar pulse and most of the incident radar energy is reflected away from the sensor
[21:34] so in this case the radar is on the left and it's looking down illuminating towards the right
[21:42] right and since the surface is mirror-like the energy is reflected away from the radar radar and so open water surfaces tend to be
[21:53] specular reflectors they when they're smooth they they tend to just just scatter the energy away from the radar
[22:01] and so these areas open water surfaces tend to look very dark in radar images now when surface height variations begin
[22:10] to approach the size of the wavelength then the surface will appear rough and a rough surface will scatter energy
[22:17] approximately equally in all directions it will scatter it diffusely and a portion of that energy will be back
[22:23] scattered to the radar so an example of this is maybe you have an open water surface but there are ripples on the
[22:30] water water and they're small ripples and so remember the size of the ripples if they're if they're large enough to
[22:41] be approximately the size of the the length of the wave then that surface will appear rough and
[22:50] and so there'll be some rough surface scattering whenever there's ripples over the water if you're looking at especially with the
[23:01] shorter wavelengths with the c band and x-band x-band so you need larger ripples with the longer wavelengths such as l band
[23:10] for a surface to appear rough and and as the surface becomes rougher you'll have more energy scattered
[23:20] in different directions but more of that energy is scattered back to the satellite so that the surface will appear even
[23:28] brighter brighter now now there's a there's something called volume scattering and that's when the radar energy is scattered within a volume or
[23:38] medium medium and it usually consists of multiple bounces and reflections from different components within the volume and you can have volume scattering with
[23:47] this within a snowpack for example or within a vegetation layer i'll talk further along about volume scattering within the vegetation
[23:57] and then finally you've got something called double bounce and that's when two smooth surfaces form a right angle
[24:03] facing the radar beam and the beam bounces twice twice off the surfaces and most of the energy is
[24:10] reflected back to the radar sensor and double bounce is commonly seen in urban areas such as high rise buildings
[24:18] or also in flooded vegetation the following charts are examples of the different scattering mechanisms discussed in the previous slide
[24:28] and this example shows specular reflection so the image on the right is a mosaic of the amazon basin from the
[24:34] smap radar that was an l-band radar and the yellow circle delineates an area of specular reflection which is open water
[24:42] and it's part of the amazon river so flat surfaces such as paved roads runways or calm water normally appear as
[24:50] dark areas and radar images since most of the incident radar energy is reflected away from the satellite
[24:59] and this example shows rough surface scattering delineated by yet the yellow circle on the snap radar image
[25:07] this area is an area of very low to no vegetation vegetation and and it's an area that has probably been
[25:15] differested differested agricultural fields with low vegetation tilled fields savannahs bare fields or in general areas that have low
[25:25] vegetation have surface have a rough surface scattering and so they tend to be characterized by a very low back scatter
[25:36] and in this example we have volume scattering delineated by the yellow circle and this is an area where there's
[25:43] forest forest and the intensity of volume scattering depends on the physical properties of the volume such as variations in
[25:52] moisture content and structure as well as the characteristics of the radar the wavelength the polarization and the
[26:00] incidence angle so in but in this case and in with radar forested areas tend to have a
[26:09] higher back scatter than areas that are [Music] [Music] non-forested or areas where there's low vegetation or lower vegetation
[26:20] so now let's switch a little bit we've talked about the radar parameters we've talked about the surface parameters
[26:26] we've talked about the radar signal interaction of the signal with surface components we've talked about some of the issues
[26:33] that you need to account for such as geometric distortions and and speckle now let's talk about the
[26:42] radar back scattering and force and and what that signal looks like in force but let let's first talk about some of the
[26:49] basics and this is an example of volume scattering in a forest so scattering in a forest may come from the leaf canopy
[26:57] at the tops of the trees the leaves and branches further below the trees trunks and the soil
[27:05] it may serve it volume scarring may decrease or increase image brightness and that's going to depend on how much of the
[27:13] energy is scattered out of the volume and back to the radar so this figure illustrates all the
[27:19] possible scattering mechanisms within a forest forest number one is a direct scattering from tree trunks to a ground crown scattering to be
[27:29] crowned ground scattering 3a ground trunk scattering 3b trunk ground scattering and then four you've got volume scattering so these are all
[27:39] the possible combinations so this example shows double bounds and delineated by the yellow circle on the smap radar image and this is an
[27:49] inundated forest meaning that the trees are on standing water and the reason that the signal is so strong
[27:56] is because the it bounces off the water which is a specular reflector onto the tree trunk or other components of the tree and then
[28:04] balances back to the satellite and so a large amount of that incoming energy is reflected back to the
[28:11] satellite and that's why these areas appear very very bright and and so obviously the our ability to
[28:19] detect inundated vegetation is dependent on the wavelength so the longer the wavelength the higher the probability of detecting
[28:28] these areas especially in tropical ray forest are very dense so you'll have a uh uh the the longer wavelengths will have
[28:36] greater penetration through the vegetation canopy as opposed to the shorter wavelengths now we cannot measure the amount of standing water just that
[28:46] there is water above the soil surface so now i'll discuss the sensor parameters that influence the signal and
[28:55] for radar these are structure and dielectric this is very important this is the essence of radar what is radar
[29:02] sensitive to it's sensitive to structure and it's sensitive to dielectric so so when i talk about dielectric that means
[29:10] the moisture content of the components in the land surface whether it's vegetation water content or moisture in the soil so backscatter is a
[29:20] function of a target's moisture content and structural characteristics remember that that's that's critical about radar and for forest this means that
[29:30] of uh the forest volume the biomass and structural complexity of the forest such as the the forest
[29:37] the the trunks of the trees branches leaves and their orientation they can indicate specific types of species
[29:46] unlike optical imagery if sensor parameters are stable as in the case with most repeat past orbiting sar
[29:54] sensors the signal variations at any given pixel location are only a function of these target characteristics characteristics sun angle variations that are seen in
[30:05] optical data do not affect the active source system also atmospheric variations including clouds have almost no impact on the star signal
[30:16] but there are some in there are some exceptions exceptions especially at shorter wavelength sars when heavy active rain occurs
[30:27] so as a result when analyzing radar signals it's important to recognize that moisture changes in both soil and
[30:33] vegetation vegetation can strongly affect affect the radar signal there are three parameters related to structure size relative to wavelength
[30:44] size and orientation and density again the length of the wave will determine how it interacts with surface
[30:52] objects so size relative to wavelength defines the surface roughness if for example you have wind ripples on
[30:59] the surface of the water that are relative to the wavelength then that surface will appear rough remember
[31:06] that the darker the pixel the smoother the surface in relation to the wavelength and as the surface roughness
[31:12] increases increases the backscatter intensity will increase size and orientation influences the interactions of the waves that are either horizontally or
[31:25] vertically polarized and then finally the density of the scatterers scatterers and and the biomass will influence the strength
[31:33] of the return signal as well as the depth of penetration of the signal the signal will be stronger when scatterers
[31:39] are closer together and also the greater the biomass the less the penetration through the canopy this is a functional
[31:46] wavelength wavelength and the greater the density of the scatterers the less the penetration if there are gaps in the vegetation
[31:54] canopy there is a larger likelihood for the signal to penetrate all the way through here we have an example of size relative
[32:05] to wavelength if an object or surface roughness is the approximate size of a wave then there'll be interaction and
[32:12] the surface will appear rough and there'll be energy scattered back if the wavelength is much larger than an
[32:18] object there'll be no or minimal interaction between the wavelength and the object and the surface will appear smooth so
[32:25] they'll be minimal to end but to no energy scattered back so backscatter from vegetation is strongly dependent on
[32:33] the size of the scattering elements within the canopy there's greater response to scatterers which are similar to the size of the wavelength and this
[32:43] is an example of an austrian pine the primary scatterers in a tree canopy are the leaves the branches and the stems
[32:51] and and the trunks their sizes are on the order of the wavelength or larger you can see that for higher frequencies
[32:58] such as x-band which would have a wavelength of three centimeters scattering is dominated by the canopy and by the smaller branches and and the
[33:11] needles needles for lower frequencies such as l-band with a wavelength of 27 centimeters the dominant scattering is are the primary and secondary
[33:23] branches and stems but not so much the the needles now if we go to an even lower frequency
[33:32] such as p band with a wavelength of 70 centimeters in this case the scattering is dominated by the primary branches and
[33:39] the trunk and there will be some there'll be a contribution from the soil as well so the longer the wavelength the greater
[33:48] the sensitivity to the vertical structure of the vegetation this is an example of size and orientation of the components on the
[33:59] surface surface on the left there are two different leaves a vertically polarized wave from a shorter wavelength such as say x-band
[34:08] or c-band will interact with the vertical components of the leaf depicted depicted in blue and a horizontally polarized
[34:17] wave will interact with the horizontal components of the leaf that's depicted in red so the first leaf has slightly more
[34:24] vertical structure than horizontal structure and hence the energy scattered back from the vertically polarized wave will be higher than the horizontally
[34:33] polarized wave and for the second leaf it's about the same the vertical and the horizontal structure so the energy
[34:45] scattered back from the vertical and horizontal horizontal waves it's going to be about the same the example on the right is the
[34:53] interaction of a longer wavelength such as l or p band with the structure of a tree tree and in the first tree there is a larger
[35:00] interaction of the vertically polarized wave with the trunk and the canopy than with the horizontally polarized wave
[35:08] for the second tree there is a larger interaction of the vertically vertically polarized wave with the trunk
[35:18] than the horizontally polarized wave so also there's something called depolarization which is when a signal in one polarization
[35:28] is depolarized into another polarization so that's when you have hv for example so you transmit in a horizontal
[35:35] polarization and you receive a vertical polarization so this occurs this depolarization occurs when the signal scatters multiple times
[35:46] within a medium such as a vegetation canopy and therefore the incoming signal is vertically polarized for example and
[35:54] it's depolarized to a horizontal polarization and that's that's when you have vh and vice versa cross polarization is
[36:03] very sensitive to vegetation parameters the last surface parameter related to structure to keep in mind is vegetation density the denser the
[36:15] vegetation the less likely for the signal to penetrate through the canopy and of course this is a function of
[36:20] wavelength so there's a saturation problem the signal saturates at a certain biomass level and and this is wavelength dependence obviously
[36:30] for c band it will saturate at a lower lower tonnage tons per hectare than at longer wavelengths that penetrate deeper
[36:39] through the vegetation canopy so at sea bend in a boreal forest it'll saturate the signal will saturate
[36:47] at around 20 tons per hectare at l-band at around 40 tons per hectare and at p-band at around 100 tons per
[36:54] hectare the last surface parameter to discuss is the influence of dielectric or the moisture content in soils and vegetation
[37:07] increased moisture content in soils and vegetation tends to increase the back scatter signal the magnitude of the radar backscatter
[37:15] is proportional to the moisture content of the surface so for dry natural occurring materials it's in the range of
[37:22] three to eight while for liquid water it's around 40 to 80. this is also frequency dependence therefore the amount of moisture in the
[37:32] soil or vegetation can greatly influence an increase in radar reflectivity so for example surfaces such as soil and vegetation
[37:41] cover will appear brighter when they are wet than when they are dry and something else to note is that the
[37:48] larger the water content in vegetation or soil the less the signal penetration into the medium whether it's through the vegetation
[37:57] canopy or through the soil this is an example of the impact of an increase in surface moisture on the
[38:07] radar signal this is a sentinel-1 c-band image over an area in ecuador for three different years and as you can see in 2017 it looks
[38:16] different than the rest of the images there are some bright and dark anomalies and the dark areas are associated with
[38:24] actively rained events causing just very strong signal attenuation so in the tropical regions you have these really intense
[38:34] rain events and so when you have that kind of activity there is signal attenuation now the brightening effects that you see
[38:43] are the results of wet vegetation and soils from the rain event so one last thing i want to discuss are
[38:54] issues that you need to account for with radar images that you need to correct for and one big issue are
[39:01] geometric distortions due to topography and these distortions result in relief displacement displacement and this displacement occurs in areas
[39:10] that are perpendicular to the flight path path so there's foreshortening and there's layover layover layover occurs when the radar beam
[39:18] reaches the top of a tall feature on the left hand side you can see so it reaches b before it reaches the base a
[39:25] and the research the return signal from the top of the feature will be received before the signal from the bottom
[39:32] and as a result the top of the feature is displaced towards the radar from its true position on the ground and it
[39:39] so it appears to lay over the base of the feature layover is most severe for small incidence angles and at the near range
[39:49] of the swath foreshortening occurs when the radar beam reaches the base of a tall feature that's tilted towards the radar before
[39:58] it reaches the top because the radar measures distance in slant range the slope a to b will appear compressed
[40:08] and the length of the slope will be represented incorrectly depending on the angle of the hillside or the the
[40:14] mountain slope in relation to the incidence angle of the radar beam the severity of foreshortening will vary
[40:21] maximum foreshortening occurs when the radar beam is perpendicular to the slope such that this the slope the base and the top are
[40:29] imaged simultaneously now you can correct for these using software that's usually already included in open source software that's available so snap for
[40:42] example has tools to correct for these geometric distortions and it uses a digital elevation model to correct for these
[40:50] things another issue to account for is radar shadow and that occurs when the radar beam is not able to illuminate the
[40:59] ground surface this also occurs in areas with complex topography so shadows occur behind vertical features or slopes with steep
[41:08] sides sides and since the radar beam just simply does not illuminate the surface shadow regions will appear dark on an
[41:15] image as there was no energy available to be back scattered as the incidence angle increases from near to far range so will the shadow
[41:25] effects as the radar beam looks more and more bleakly at the surface so this image illustrates radar shadow
[41:32] effects on the right side of the hillsides hillsides which are being illuminated from the left there are ways to correct for shadows
[41:43] through interpolation however i personally prefer to leave the shadow areas as areas of data gaps rather than
[41:50] use interpolated values so one last aspect to discuss is speckle and that's that grainy salt and pepper
[42:00] texture in an image and this is caused by random constructive and destructive interference from multiple scattering returns that occur
[42:08] within each resolution cell so for example there's a homogeneous target such as a large grass covered field
[42:17] field without the effect of speckle it would generally result in a light tone pixel values in an image
[42:24] however with radar the the their multiple reflections within each resolution cell from individual blades of grass and so
[42:36] that's why and the individual blades of grass are not exactly in the same orientation they don't have exactly the
[42:44] same size etc they differ in characteristics from um um uh pixel resolution cell to pixel resolution so and that's why you end up
[42:55] with these images where you have pixels that appear slightly brighter and darker than than than others so the issue with speckle is that when
[43:07] it comes time to classifying the classifier will actually pick up that noise it will be reflected in your final
[43:14] classification classification so one thing to remember about radar images is that the resolution that is stated for the radar image is
[43:22] not the actual resolution that you'll be deriving a product from and the reason for that is say a radar image
[43:31] is 10 meters right so you you you need to or you want to apply a speckle filter
[43:37] in order to remove that that speckle or not remove it you'll never remove it but you'll reduce the
[43:44] speckle with a speckle filter however the issue about a speckle filter is that you will reduce the actual resolution of
[43:52] the image so whenever you apply a speckle filter you are reducing the resolution of the image and that totally depends on how
[44:01] big the filter is so basically what you're doing is you take a box and and it can be a three by three or five by
[44:09] five box and you move it over each pixel in the image applying a mathematical calculation using the pixel values in
[44:15] that window and then you replace the central pixel with the new value and so that window is
[44:21] moved along in both the row and column dimensions one pixel at a time until your entire image has been covered
[44:30] so so so that's why um the the bigger that window that speckle filtering window the greater the resolution loss that's just
[44:40] going to be something that you all you need to account for whenever you're running a classification using radar images
[44:53] this is a pulsar image from the japanese satellite halos it's an l-band image acquired near the city of altamira
[44:59] brazil in december of 2010 and the idea here is to show you the back scatter characteristics in forested
[45:07] and deforested areas or areas with low vegetation vegetation so in forested areas the dominant scattering mechanism is volume
[45:16] scattering and that means that the cross polarized signals such as hv or vh will have a higher return than the colorized
[45:24] co-polarized signal such as vv or hh so in deforested areas there is a change from volume to surface scattering this
[45:35] means that the cross-polarized backscatter backscatter will decrease significantly significantly there are exceptions to this though so for example if deforestation results in
[45:46] rough soil conditions or if the soils are rough because of tilling for example then backscatter can be enhanced
[45:57] however in a time series analysis the trends trends usually indicate a reduction in backscatter in areas that are deforested
[46:06] now for a shorter wavelength such as c-band soil moisture condition can have an effect on the signal it can enhance
[46:13] the signal and introduce some ambiguities and the time series signals will re reveal these ambiguities uh forest degradation that usually
[46:24] results in decreased volume scattering but there might be some contribution from the soil and this depends on the level of degradation
[46:33] at sea band degradation is difficult to detect unless there are large parches patches of forest that have been removed
[46:40] at l band these trends tend to be much much better characterized so there's a detectable signal drop from forest
[46:51] thinning or degradation uh uh so the type of degradation also determines the scattering mechanisms for example example if there's a fire events there's a
[47:04] strong increase in l-band because there is a stronger soil contribution which will enhance the double bounce and
[47:10] increase the back scatter this is an example this is a zoomed in area of the previous image and i wanted
[47:21] to show you this because it shows different gray level tones in the image and so you can
[47:30] appreciate here that there are areas that are very dark they're black and these areas are probably areas that have been deforested that
[47:40] they're bare or there's very very low vegetation and there are tones that are higher so there's higher back scatter and those
[47:52] areas represent some level of vegetation so the higher the back back scatter the the greater the level of vegetation in this
[48:03] area so if you're interested in looking at inundated vegetation as discussed previously these areas are very bright because they're dominated by
[48:16] double bounds and so this is what it looks like all of these very bright areas are areas where
[48:22] there's inundation there's standing water underneath the vegetation so this is a very nice table that summarizes the expected backscatter
[48:35] response to different types of vegetation vegetation at two different bands at c-band and l-band so you can get freely available
[48:44] c-band and l-band data and uh the c band data is vv and vh that's from sentinel one and the
[48:52] l band data that's available is from pausar and that's at hhv and then what what this is coming from the tsar handbook
[49:02] chapter two by joseph kellendorfer and what he did was um uh basically summarize the signal response for different types of forests
[49:13] uh dry forest and flooded forests so sparse forest degraded forests and dense forests under both dry and inundated
[49:20] conditions so this is an example of multiple dates for vegetation studies this is a palsar hv image
[49:31] for an area in brazil called rondonia and what we've done here has is we've taken images from different
[49:42] years over the same areas so 2007 2008 and 2010 and we've created an rgb which is on the
[49:49] top so these are all hv images and and the image on the red channel is 2007 image in the green channel is 2008 and
[49:58] the image in the blue channel is 2010. and so that color circle helps you understand how to interpret that rgb
[50:06] image how to interpret that change in the different years so red for example means that the backscatter was high in 2007 but low
[50:16] in 2008 and 2010 that means that there was forest in 2007 and it was cleared by 2008 and it
[50:23] continued to be clear by 2010. an area that's yellow for example means that it was high in 2007
[50:32] and 2008 but low in 2010. so that means that there was forest in 2007 and 2008 and it was cleared
[50:42] in 2010. uh another let's pick a cyan so that's a combination of green and blue that means
[50:52] that it was high in 2008 and 2010 but low in 2007 so that means there was a
[50:58] low vegetation in 2007 or it was clear or barren in 2007 and then there was regrowth in 2008 which continued in
[51:08] 2010. so there are several sources of confusion when running land cover classifications with radar images and one of them is open water and low
[51:21] vegetation vegetation both are characterized as smooth surfaces and they can be hard to distinguish distinguish usually areas that are barren or have
[51:30] very low vegetation tend to have some level of roughness and slightly higher back scatter than a completely smooth specular surface such
[51:40] as a calm open water body however sometimes water surfaces can have roughness because of wind and that results with in in some level
[51:51] of confusion between low vegetated areas or barren areas and open water and so you can see that in these images
[52:00] these are images from pausar l band near manaus brazil and the hh image you can see there is some roughness on
[52:08] the water and you can clearly see that in the hh and vv image with hv images the water tends to be very dark because
[52:16] the signal doesn't depolarize in in in areas where there's a low roughness or or such as water
[52:24] and and so you can see that there is the same level of backscatter intensity between between the open water areas and
[52:35] the areas that have low or no vegetation north of the river another source of confusion are areas
[52:45] that are characterized by double bounds and these are flooded areas and urban areas and in this image the city of
[52:52] manaus in brazil is circled in red this is a very large urban area and as you can clearly see it's
[52:59] characterized by very bright backscatter so so you can see also see that there's flooded vegetation along the rivers and
[53:08] both of these areas the urban area and the flooded vegetation are just very bright they they're both dominated by a
[53:15] double bounce a final source of confusion are areas where there's complex topography and as you can see in this image these areas
[53:26] tend to have high back scatter and and this this can be confused with inundated vegetation so in terms of radar data available here
[53:40] we have a list of legacy current and future future sar data sets available the ones that have a green box around
[53:49] them are data sets that can be downloaded for free so there's csat it was an l-band a sar
[53:57] sensor that flew for a couple months in 1978 1978 and there's halos one which is a japanese satellite that had a
[54:06] sar sensor l-band sensor called pulsar that flew in the 2000s also ers-1 and ers2 which is a c-band
[54:16] star sensor from the european space agency some of that data can be freely available available through the alaska satellite facility
[54:24] in terms of current data sets the only uh uh current operational data set that is freely available
[54:32] is sentinel one which is a c-band sensor from the european space agency and it started collecting data it says 2014.
[54:41] so this data set is not only available through the alaska satellite facility but also through the european space
[54:47] agency's agency's copernicus hub in terms of future there's a the nysar satellite mission which is a joint nasa
[54:57] an indian space agency uh satellite mission that will have an l and s band sar sensors and there's also biomass at around the
[55:07] same time and that is a satellite um mission sar sar that will be launched that is um
[55:17] from the european space agency and it will have a p-band sensor so the nysar mission a very exciting
[55:29] mission because it has an l-band and an s-band sensor again it will be launched around the 2022 time frame i'll have a
[55:40] 12-day tempo repeat the data will be made available freely available the resolution will vary depending on the mode but it'll be somewhere between
[55:51] 3 and 10 meters so that concludes the theoretical part and the next part will be focused on a
[55:58] demo on a time series analysis of sentinel 1 sar data using google earth engine the exercise overview consists in
[56:11] visualizing the sentinel 1 data selecting an area of interest to run the analysis and the area of interest will
[56:17] be in in the amazon we'll load the images from multiple dates in this case 2016 2018 and 2019
[56:28] and we'll apply a filter on the sar images to reduce the speckle and then we'll calculate differences in
[56:36] forest cover between between 2016 and 2018 and then between 2018 and 2019 2019 we'll apply a threshold and we'll
[56:46] compare the changes in force cover through time [Music] google earth engine is a great resource it's cloud it's a cloud-based geospatial
[56:58] processing platform and it's available to scientists researchers and developers for analysis of earth's surface it's free to sign up for an account you
[57:09] do need to have an account you know in a in order to use it and it contains a catalog of satellite
[57:17] imagery and geospatial data sets including including sentinel one so it's got the entire sentinel one sar database
[57:27] and it uses a javascript code editor [Music] and once you have an account then this is what the google earth engine code
[57:39] editor looks like and you can see that there are different windows in this interface you've got the actual code
[57:46] editor editor you can save it you can search for data sets there's a help button task manager there are many different
[57:55] options as explained here we'll be using sentinel 1 data it's a satellite sentinel 1 is a satellite from the european space agency
[58:07] it operates at c-band and it has global coverage every 12 days so there are actually two satellites a and b and
[58:14] between the two of them you have coverage every six days over the equator however at their acquisitions with both
[58:22] satellites are primarily focused over europe europe and the rest of the world there are there is acquisition over some places
[58:30] but usually for the rest of the world it's just uh with one of the satellites in terms of modes it operates at
[58:38] different modes but the one that you want to work with is the interferometric white swath data so that's the routine
[58:45] collection over land if you go to the following link you can access a page that has a
[58:56] description of the sentinel1 catalog it explains the different modes of images that are housed on google earth engine
[59:04] as as described in the previous slide all of the images are in grd that means they're in the ground range projection
[59:12] and depending on the mode they might come in different polarizations as well as resolutions the processing that has been applied to
[59:21] the images has been using the sentinel toolbox toolbox and they have applied the thermal noise removal they've applied the radiometric
[59:32] calibration calibration as well as the terrain correction so these images are basically ready to be used for analysis
[59:42] the only thing you might need to do is to apply a speckle filter and actually we'll do
[59:48] that as part of this demo our focus area is in the state of rondonia in brazil and
[59:58] in some areas within the state there's been some vegetation loss to either agriculture or to grazing so we'll focus on a specific
[1:00:08] area and we'll look at a time span of four years to to see how things have changed
[1:00:15] changed so let's get started the first thing we want to do is visualize the sentinel 1 data
[1:00:20] data and let's uh start by opening up google earth engine through the link provided here so go to the code editor
[1:00:28] in google earth engine and so here we are in google earth engine and and you'll do a search for sentinel
[1:00:40] one data so if you click there window pops up that has a description of the sentinel one data
[1:00:52] that's housed on google earth engine and one thing that's important is that this data is really its analysis ready
[1:01:01] so so that google earth engine has applied a thermal noise removal radiometric calibration and terrain correction and one thing to note is that all the
[1:01:11] images are in db so that's log power so if you want more information about each of the images image properties
[1:01:20] uh terms of use you can close on click on those all right so let's now now the first thing we want to do is define
[1:01:36] our area of interest and in order to define our area of interest you go to the top left and there's an
[1:01:43] icon there for defining a line and and we we will here select this line so let me
[1:01:54] more space here select this line it says draw a line and we'll zoom into the state of
[1:02:01] grondonia and we'll kind of draw a line here here around this is more or less our area of
[1:02:09] interest interest and and right there now what you want to do is go ahead and rename that to call it roi
[1:02:18] or region of interest and press ok all right so that defines our area of interest interest and then
[1:02:28] next we will load the sentinel data and then we'll filter for images that are interferometric wide swath mode so those
[1:02:37] are the ones we want that's those are the images that have been acquired over land that we're interested in
[1:02:44] the iw we want the descending pass 10 meter resolution and bv polarization so let's just copy this code here
[1:02:58] and we'll go ahead and paste so for some reason this should look like this all right so then
[1:03:21] we will do the same thing so this is for vv but we also want bh images so we will do the same thing for
[1:03:31] bh we copy this code the code is the same it has the same filters so we're filtering through the
[1:03:38] sentinel one database database which is this one copernicus s1 grd and and instrument mode iw vh polarization descending 10 meters
[1:03:52] and we're filtering so we're doing our selection selection within the area of interest that we defined okay
[1:04:02] okay and then we select the vh images and we print that into the collection ph so let's go
[1:04:09] back back and all right so let's hit run so if you open this up this is telling
[1:05:00] us that it found 816 images bv images that that cover our area of interest and 812 vh
[1:05:18] vh so so now those are the images throughout the time period that sentinel has been collecting data now let's filter
[1:05:27] according to date and and we will uh we will identify three different date ranges ranges so we
[1:05:44] copy this text and paste it in line 21 and so what this does is we are identifying
[1:06:03] images that fall or touch this area while somewhere within this area that that between 2016 august of first 2016 through august 10
[1:06:17] 2016 august 5th through august 10 2018 and august 1st through 2000 uh through august 15 2019. so we are identifying we're creating a
[1:06:36] mosaic of the image that cover that time period in 2016 2018 and 2019. okay so we want all of the images to
[1:06:49] cover cover the area more or less during the same month month months or the same time period
[1:06:57] okay so go back and and now what we do is we're filtering according today but the next thing you need to do is you need to
[1:07:14] add those images to to the layers in order to be able to visualize the layers so let's just copy
[1:07:22] this text and paste so what this does is it adds the images that were identified for the different dates in both vv and
[1:07:38] vh vh it adds them to to layers okay so let's just save this right now and and run it
[1:08:05] okay so you've got up here in the upper right you've got a layers layers icon icon and these are the images that we've
[1:08:14] identified so let's just bring up the image 2016 2018 so let's zoom in a little bit to
[1:08:27] see details of the images 2019 and and the cool thing about the google earth is that you can
[1:08:48] kind of toggle you can either toggle back and forth or you can fade the images in and out by
[1:08:56] grabbing this bar here and just fading things in and out so what we're seeing what i've overlaid
[1:09:04] is 2019 over 2016. and let's just toggle this to see any changes so we do see changes now remember from the
[1:09:23] theoretical part that the dark areas are areas that that that have either no cover they're big or
[1:09:34] they have very very low vegetation so you see some really dark areas here and then you have different levels
[1:09:42] of grey which represent different levels of vegetation so the brighter the gray tone that means the higher the vegetation
[1:09:53] and you can see for example so so so that's 2016 and i'm overlaying 2019 2019 and you can see
[1:10:06] for example this area right here you can see that there's been some vegetation loss in this area and this area here
[1:10:21] so let's do that again so you can see it see there's vegetation loss and a lot of
[1:10:26] times what happens is that these plots are are cleared and then they're just abandoned or not used and so you've got
[1:10:36] vegetation growing back and then they're cleared again so a lot of times you can see the patterns
[1:10:42] in fact you can kind of see these old patterns so it was you can barely see some edges here
[1:10:50] and so a lot of these that it's been some clearing and the vegetation has grown back um
[1:10:59] and then they're they're cleared again okay so let's just deselect that one thing to keep in mind is that these images are
[1:11:14] not speckle filtered so the sentinel one images are they've been uh they've been processed they've been radiometrically corrected
[1:11:22] they've been uh terrain corrected but they have not been speckle filtered so the next thing we want to do
[1:11:29] is is we want to apply a speckle filter however before that actually i jumped over a step one thing i wanted to show
[1:11:38] you you is is the rgb that that i've created here so when you added the layers layers to
[1:11:50] to the images to the layers here i also included an rgb of the three different dates and so remember that color wheel and the
[1:12:00] theoretical part so that will help you interpret this image in the red channel there's the 2016 image in the green channel
[1:12:11] there's the 2018 image and in the blue channel there's the 2019 image so you can see a lot of change in
[1:12:20] this area there's a lot to interpret here from the different colors now if something is green that means
[1:12:27] it was high in 2018 but low in 2016 and 2019 so if something is red for example that
[1:12:38] means it was high in 2016 because the 2016 image is in the red channel so everything everything so the red channel is brighter
[1:12:49] than the green channels whatever's in the green channel and whatever is in the blue channel channel and so that means there was probably
[1:12:58] there was some level of vegetation in 2016 and it was cleared in 2008 and it continued to be cleared in 2019
[1:13:08] so you have a whole lot of different combinations here different colors that you can then go back and look at
[1:13:17] that color wheel to help interpret anything that's yellow remember yellow is a combination between red and green
[1:13:27] and so anything that is yellow means that whatever is in the red channel and whatever's in the green channel is high
[1:13:34] and then whatever's in the blue channel is low okay okay so there was vegetation there in 2016
[1:13:41] 2018 and in 2019 it was it was uh cleared okay so a lot of variability here okay so that's just one way to
[1:13:57] just get a feel for the variability in your images and the the change change within within the
[1:14:07] the within this time frame okay so now now let's go back and let's go to the next step which is to apply a
[1:14:16] speckle filter so let's just copy this code here and go back and paste it so we're on line 39 now
[1:14:33] all right so what this does is we'll apply a speckle filter to to reduce that graininess and at this
[1:14:46] level it doesn't really show it's not really apparent but if you zoom in you can see it and
[1:14:54] it'll be even more apparent after we run the speckle filter and we do the comparisons so let's go ahead and
[1:15:01] run it we copy the code and we run the filter which is just a smoothing filter and
[1:15:15] and the next thing we want to do is we want to add the filtered layer images to the layers okay so in order to
[1:15:24] do that we copy this code again what this is doing is it it's just indicating to add to the layers
[1:15:33] and you're specifying which images you want to add to the layers and then you want to stretch the images according to
[1:15:41] the the values within the image so so in this case i'm setting that stretch that histogram stretch from -15 to 0
[1:15:52] okay and this is what i'm calling the image image this one the first one 2016 bb filter
[1:16:00] all right so let's go back and let's copy that all right so now let's save and let's
[1:16:11] run the code and this is now going to result in having the not only the original images added
[1:16:27] included in under layers but also the filtered images okay the speckle filtered images so here we have the original images we
[1:16:37] have the rgb and then here we have the filtered images now let's just select select 2016 vh
[1:16:49] the 2016 vh filter so so we can take a look at the the difference between the two
[1:17:04] so let's just zoom in all right so this is the original image and and this is the filtered image
[1:17:29] now you will lose lose some resolution whenever you apply these speckle filters that is the trade-off that you will lose
[1:17:37] some spatial resolution but that is at the expense of having a cleaner classification because in the end that that graininess will
[1:17:48] translate into your classification results so so this is what it looks like okay and the larger the speckle filter
[1:17:58] the the greater the the spatial resolution loss so the filtered image is the same on the same grid
[1:18:06] but you you have a spatial resolution loss even though it's the same grid as the original resolution
[1:18:16] all right so what we want to do is we want to work with the speckle filtered images now one thing
[1:18:26] you can do in order to get a sense for the values is if you go up here to
[1:18:33] inspector inspector on the top right select inspector anywhere you click so let's say let's just click here
[1:18:43] it'll give you the pixel value for all of the different bands or images that you have listed
[1:18:53] here under layers okay so that gives you a sense of what the values are and you can click around and
[1:19:04] get a sense on how the values differ between different gray level areas and the brighter toned areas and the very very dark areas
[1:19:17] all right so so let's let's keep going with our exercise here so here we have an example in the
[1:19:29] powerpoint of what the image looks like when it's filtered versus not filtered we just saw that now the thing the next
[1:19:39] thing we want to do is create the difference calculate the difference between before and after and so this exercise is based on
[1:19:48] thresholding the different ways of doing time service analysis uh here we've selected a simple thresholding which you do between two
[1:19:57] images so what we've done has been to select the different or calculate the difference between 2016 and 2018 and
[1:20:06] then between 2018 and 2019. so we'll copy this code and what this code does it's it's just a simple
[1:20:14] difference difference now you'll note that uh uh there's the word here subtract rather than divide and the reason for that is
[1:20:24] because when you're performing a a a ratio with values that are in log scale so in this case the the values the backscatter
[1:20:36] values are in db they're in log scale what you need to do is is to subtract the value so that is
[1:20:43] equivalent to dividing two log numbers okay so we copy this then we go back paste it on
[1:21:05] and and we also want to then add the difference images that we calculate onto the layers so
[1:21:29] all right so here we're calculating the difference difference between between before and after for 2016 and 2018 for vh and vv
[1:21:40] and then here we're calculating the difference between 2018 and 2019 for vh and vb all right and then down here
[1:21:52] we're adding those difference images which i've called difference between 16 2016 2018 vh and so on so we add those different images to the
[1:22:06] layers layers over here all right and this is the stretch that we're applying in order to visualize it and then this is what we're
[1:22:19] calling each of the images so what appears under layers is this name that's the identifier so let's just save that
[1:22:29] and we will run okay so we've got the difference images let's take a look at the difference
[1:22:50] images images so let's display the the 2016-2018 and let's just zoom in so the areas that are bright
[1:23:07] are areas where there's been loss and vegetation vegetation uh between [Music] [Music] from 2016 to 2018. so there was
[1:23:18] vegetation there in 2016 and it was lost in 2018. now the areas that are dark means that
[1:23:28] it was cleared there or there was low vegetation in 2016 but there was some sort of vegetation
[1:23:37] regrowth in 2018 now if you want to take a closer look at those things this is the difference
[1:23:43] image but let's just bring up the actual image okay so the actual images so let's just focus on this area here
[1:23:54] let me zoom in so this area there was uh vegetation regrowth in 2018 okay and in this area there was
[1:24:09] vegetation loss in 2018. so let's bring up up the 2016 and 2018. so there you can see
[1:24:27] okay so and this is 2016. you see this area is quite dark so that means it was low
[1:24:36] either it was barren or very low vegetation vegetation and this area has a higher back scatter that means there's some level of
[1:24:44] vegetation there and let's just bring the 2018 okay okay so there was vegetation regrowth within this area
[1:24:58] and and there was vegetation loss within this area which is what the the difference is indicating all right so that's how you interpret
[1:25:11] that that's just to give you a feel and how how what the values mean so so let's move on here the next part
[1:25:23] includes includes selecting a new region of interest so let's just focus on the region of interest for which these
[1:25:35] different maps have been generated and the reason i'm doing that so take a look these different maps
[1:25:44] they cover the same area and you can clearly see by the way if you toggle back and forth that there's
[1:25:51] been a quite a bit of vegetation loss in between 2018 2019 in this area up here over here
[1:26:05] all right so now what we want to do is we want to select an ear and the reason
[1:26:09] for that is because there are some issues here with the borders and you you get you see these
[1:26:15] dark areas so so what we want to do is when we do a comparison and a statistical comparison of the change
[1:26:26] between the images we want to kind of exclude those areas that bring in these these errors due to those
[1:26:33] artifacts so let's just define a new area area so to do that we go and we select we
[1:26:41] follow the same process as before just select the draw line icon here here and under geometry import select new
[1:26:49] layer layer and we'll just draw a new line here right here great and we call that let's call it new region of interest all
[1:27:08] right right let's make it clean okay okay so the next thing we want to do is we want to create a histogram to see
[1:27:23] the distribution of these different values of the values within the difference images images so let's just copy this code and what
[1:27:34] this does is we are creating a histogram from in this case we're just taking the vh images
[1:27:42] so we're taking the difference between 2016 and 18 vh image and we're creating a histogram for that
[1:27:51] region that's called that we just identified as new roi and we're doing the same thing for the 2018-2019
[1:28:00] so let's copy and and go back okay and let's just run this and what this will do is
[1:28:28] it will show the histograms here here on the console window and what you need to do is you click on the upper right
[1:28:40] there's an arrow right here so you click on that and a new window will pop up with your histogram so this
[1:28:48] is 2016 2018 and that gives you an idea of the distribution of those different difference values so we know
[1:28:56] that the negative ones are areas where there's been uh regrowth and the positive ones are areas where there's
[1:29:05] been vegetation loss all right and so we can see that it's it's kind of the middle is around
[1:29:16] 0.1 0.1 to 0.13 0.13 and then we go back so let's close this window and then you can visualize the other one
[1:29:36] too this is 2018 2019 slightly different distributional values with this so there's a there's more vegetation loss that occurred
[1:29:50] between 2018 2019 and 2016-19 you can see that in this in this uh the tail here of this histogram
[1:30:02] so let's close this window and just make sure you save your code and then the next thing we want to do is
[1:30:13] calculate some statistics for for the histogram so remember we're going to apply a threshold so let's just get a
[1:30:24] some statistics on the mean and standard deviation deviation so let's uh copy this code the first thing you
[1:30:31] want to do is since we want to calculate calculate two statistics we first we combine the the two statistics that we want to calculate
[1:30:43] into a variable called reducers okay so that contains it's telling it the reducers contains the mean and the standard deviation
[1:30:53] so let's copy that so we've created reducers and then let's apply those statistics statistics to to our images
[1:31:24] okay so what we're doing is we are saying we're creating this variable called stats1618 stats1618 which it takes the difference image from
[1:31:35] 2016 2018 vh we're just working with vh here here and we're saying okay apply the stats that we defined in the variable reducer
[1:31:45] so that's mean and standard deviation if if you just wanted to do one you don't really have to go through this
[1:31:53] step up here you can just say ee reducer mean if that's what you just wanted to calculate and you just put
[1:32:00] that here okay in this case since we're doing two we combined it geometry so we want these stats to be
[1:32:09] calculated for the area that new region of interest that we outline outline and then the scale and then we
[1:32:18] do the same thing for the 18 2018-2019 and then what we want to do is we want
[1:32:26] to print those statistics and so to do that just copy this code and and paste it so what this will do is it will
[1:32:47] print the statistics in the console so let's just save this and run it okay so what it does is it prints out
[1:33:15] the stats so we've got the statistics here for the the 2016-2018 so we've got the mean and the
[1:33:24] standard deviation of that difference image and then we've got the statistics for the 2018-2019 so what we want to do is apply the
[1:33:35] threshold based on values that are 1.5 the standard deviation and above all right so let's just copy this code and
[1:33:45] paste it all right so let's paste it now one thing to notice in the exercises i i had defined this region of interest
[1:34:00] was a little different okay so we need to recalculate these thresholds so what you do is you multiply the
[1:34:11] standard deviation times 1.5 and you add 0.15 0.15 okay so that would be 2.13 and then for the first one and it would be 2.81
[1:34:32] for the second one okay so the next thing you want to do is is we're creating these masks
[1:34:43] okay so what you're saying is anything that's above this value in the 2016-2018 difference mask uh set it to one and any anything that's
[1:34:54] above this value in the 2018-2019 then set it to one and that represents vegetation loss so so we want to add that mask that we've
[1:35:08] created to the layers okay okay again display mask map add layer so we add the difference 2016-18 vh threshold
[1:35:20] to the layers and we call it this and we are setting a color to it in this case red
[1:35:30] so let's save and run all right so this is our vegetation loss layer and now let's take a look
[1:35:58] let's zoom in there are quite a number of issues along the river i think the best thing to do
[1:36:10] with the river is to just mask it out but let's take a look at this area here and let's just bring up
[1:36:23] the 2018 image okay now you can play around with this filter to change that it's to change that value from higher to
[1:36:49] lower lower or lower so let's take a look this is 2018 and let's take a look at the 2016.
[1:37:04] let's deselect that so so let's take a look at this area here the dark areas are the areas where
[1:37:22] there's been vegetation loss that's all we're identifying with this mask okay so let's all right now the next thing we do
[1:37:42] is we've overlaid it and let's compare the vegetation loss between the two time periods now one thing that i didn't do
[1:37:54] let me just do that very quickly here is to bring up the 2018 so there's been you can see
[1:38:11] more vegetation loss in 2019 and to visualize that a little better let's just change the color for the
[1:38:20] 2018-2019 vegetation loss so let's just click on the cog wheel and then here under color just select
[1:38:29] let's select a color that's easily differentiated just select black all right there there so you can see that
[1:38:43] there was much more loss 2018 2019 than 2016-2018 okay so what we want to do is now we
[1:38:57] want to run some statistics and determine the area where there's been vegetation loss between these two time periods so let's
[1:39:07] just rather than selecting running our statistics on on the entire area here let's just run the statistics
[1:39:15] over over a a a small area okay so let's just let's select an area and what we'll do is you select the polygon
[1:39:32] the draw shape icon up here and then select new layer okay let's call that new layer stats
[1:39:42] stats area so we're calculating statistics over the area that we'll define so let's just draw a box
[1:39:56] okay so the statistics on vegetation loss between the two time frames are being calculated only over this area all
[1:40:04] right right so so what you do is then you copy this code right so what this is doing is this code is
[1:40:15] taking that first image that 2016-2018 2016-2018 mask mask actually where we applied the threshold and and we are now counting the pixels
[1:40:28] where there is vegetation loss so it's saying what what is the the total number of pixels within that area where
[1:40:36] that we've marked in the mask as an area where there's been vegetation loss so we do that for both of the images
[1:40:45] and then we print out the stats okay so let's just uh save and we run it and
[1:41:23] what this is saying is that there are 435 000 pixels within that area that we defined where there's been vegetation
[1:41:34] loss to for 2016 2018 period and then 631 000 for the 2018-2019 period now the the pixel resolution is 10 meters
[1:41:47] 10 by 10 which is point 0.01 hectares so if we wanted to convert that to to hectares we would just multiply
[1:42:02] that times .01 which is 4 4 350 hectares within that area selected for the first time period and
[1:42:17] 6311 hectares for the second time period okay and even if you overlay these you can see that there's
[1:42:27] there's a greater vegetation loss in the second time period right so that's 2016 2018 and that's 2018 2019.
[1:42:43] all right so so um um make sure you save your code and i've got some slides here in the
[1:42:54] powerpoint package that shows some of the comparisons that we've seen between different years in terms of vegetation loss
[1:43:03] and so in summary in this demo we've identified sentinel-1 images for three different years and we've applied a
[1:43:11] threshold threshold to create a mask of the areas where there's been vegetation loss now when i need vegetation loss it doesn't
[1:43:19] necessarily mean complete deforestation it could have been that there was some sort of vegetation degradation degradation from
[1:43:28] from one one year to another the and what we've calculated here has just been vegetation loss but you can also apply
[1:43:39] the threshold on the other end where there's been regrowth if you want to identify areas where there's been
[1:43:45] maybe some fields have been abandoned and the vegetation has come back you can also do that okay the threshold that we applied
[1:43:53] was the standard deviation times 1.5 but you can play around with this value and just just apply a higher threshold or a lower
[1:44:03] threshold threshold okay and finally we made a did a comparison in veget area where there was vegetation loss
[1:44:12] between these two periods okay so that concludes our demo if you have any questions you can contact
[1:44:25] contact either either me or amber dr amber mccollum or dr juan torres perez our emails are here
[1:44:32] for general inquiries on our sets you can contact dr prados and you can also visit our rsap website
[1:44:40] to to uh keep uh to download the recordings or to see what sort of future trainings are
[1:44:48] coming so the next session session that would be next thursday will be on using sar and optical images for
[1:45:00] doing land cover classification now let's start the q and a session please type in your questions in the q a box
[1:45:10] we might not be able to get to all the questions so we will be answering as many as we can in the time period given
[1:45:17] and whatever we can't answer we will be posting answers to your questions on the rsap page thank you very much
[1:45:43] great so thank you everyone for attending this session session we are now going to be answering the questions that
[1:45:52] you've posted and please um any additional questions just type them in the chat box so before we
[1:46:06] begin i would like to give a special thanks for the guidance in the google earth engine code
[1:46:16] to john dilger zachary bankston and gina kova okay so let's get started [Music] let's get started here with question
[1:46:34] number one i'm quite confused between radar and microwave is it the same so when we talk about microwave we talk
[1:46:46] about about um a given range in the electromagnetic spectrum right so there are sensors that can measure
[1:46:56] measure at within that microwave range they operate within the microwave range so there are different sensors that
[1:47:04] operate within the microwave range and one of them is radar so and synthetic aperture radar is a specific one
[1:47:14] okay so there are active sensors and they're passive sensors that operate within the microwave range so radar is active and synthetic
[1:47:23] aperture radar is an active uh uh scent it's a radar that operates within the microwave range okay why are x and c bands good for
[1:47:37] agriculture is it because of their wavelengths wavelengths that is correct since the wavelength is shorter there's greater interaction with
[1:47:45] the vegetation so you get more information about the vegetation leaf area index things like that then the
[1:47:52] longer wavelengths which tend to penetrate further through the canopy so with something like l-van or p-band you're
[1:48:02] not really getting that much information about the the vegetation volume uh but you're also you're getting uh quite a
[1:48:11] a large portion of that signal is relevant to the soil as well with the longer wavelengths is there any reason for naming x and c
[1:48:24] yeah yes and no yes uh the reason is that these were codes that came that that were
[1:48:36] assigned um during the early days of radar development this was during world war ii so it was um actually military
[1:48:46] and and so in order for security reasons they came up with this code which is why it
[1:48:52] doesn't make sense it's not in alphabetical order okay so why hhh polarization penetrates more than other polarizations
[1:49:06] so we saw about the interaction of the signal with vertical structure and horizontal structure so hh tends to penetrate further
[1:49:16] in general because there's less attenuation from the vertical structure is there a relation between say roughness and backscatter
[1:49:32] given fixed dielectric like seawater absolutely there is a super strong relationship between roughness and back scatter so the greater the
[1:49:43] the roughness in relation to the weight length of course than the the higher the the back scatter
[1:49:51] so backscatter will tend to increase with surface roughness where can i download this map radar mosaic of the amazon
[1:50:04] you you so so the smap radar mosaic is not something that you can download but you can
[1:50:12] download smap radar data from the alaska satellite facility and and you do need to do some processing to it
[1:50:21] and then assemble it in order to create these mosaics and there are only about three months of
[1:50:30] snap radar data it is global so it's it's actually quite a nice data set it's l band hh and i believe hv as well
[1:50:42] is double bounce interaction radar good for analyzing flooded forest actually it's excellent excellent that's why uh radar is
[1:50:54] that's one of the strengths uh with radar especially at the longer wavelengths is to look at flooded forest because that
[1:51:03] signal is so distinctive flooded forests are characterized by having double bounce and so they appear very bright very high back
[1:51:13] scatter in the images and so radar really is is is a very unique data set for studying flooded forests
[1:51:29] is p-band useful to monitor moistened land surface so i i'm assuming that means the moist the moisture in the soil
[1:51:38] and yes it definitely is so remember the longer the wavelength the greater the penetration through the medium now i'm talking about a medium it
[1:51:47] could be a a vegetation medium right a vegetation canopy it could be snow it could be soil
[1:51:56] and so with p band you can have an assessment or an estimation of soil moisture deeper than with l-band or c-band or x-band
[1:52:13] so do keep in mind that the moisture the surface the less the penetration okay so p band will
[1:52:22] penetrate further but overall in general the wetter the surface the less the penetration the higher the moisture
[1:52:31] content in the surface the lesser penetration penetration can you overcome the problem of near and far range in the images regarding
[1:52:39] classification taking control points from both sides for the same class exactly exactly yes yes so that is one way you overcome that
[1:52:47] problem is is if you're training say you have let's just say a force class right that class will
[1:52:59] uh uh depending on the incidence angle range if it's it's a very large range that class will
[1:53:07] probably look very different on the near range versus the far range so so what i would do is i would select
[1:53:15] training classes for forest area in the near range and i'll call it just call it forest near range and then select another
[1:53:24] training class for forest in the far range and call it forest far range okay because as you saw that forest the statistics
[1:53:35] for those training classes can be several db different even though it's the same land cover class can dm be used to correct the shadow
[1:53:48] effect effect there are ways yes to correct the shadow effect to interpolation i'm i haven't haven't personally found
[1:54:02] that there there's there are always some issues with these interpolations sometimes they're like these these transitions that are odd
[1:54:12] and so i tend to just create a mask for the areas where there's shadow and just treat that as as
[1:54:20] as no data basically what is saturation of the signal so that means as you probably saw in in those graphs
[1:54:37] this biomass that means that um um the the the signal really doesn't is not changing that the magnitude of the
[1:54:47] signal is not changing according to the biomass the density of the vegetation vegetation so that signal just saturates
[1:55:00] so usually you can get in a you can get an assessment of the the biomass the bulk density of the
[1:55:08] vegetation because that signal is penetrating through the vegetation but at a certain level of biomass you can no longer see the difference and
[1:55:19] that's where that's what we mean in in terms of saturation can a machine learning algorithm be used
[1:55:30] for speckle filtering to minimize the resolution loss that's a good point i i'm i'm i'm not sure i'd have to take a look at
[1:55:40] the literature traditionally what's used are speckle filters filters and there's always that trade-off as i mentioned in terms of
[1:55:51] losing your spatial resolution with a speckle filter and obviously the larger the window that you define the greater the resolution the spatial
[1:56:00] resolution loss you can also do a time series kind of averaging and and there you will not lose
[1:56:09] the the resolution is it possible to composite h h h v h h polarization in one one image yeah of
[1:56:21] course i think i might have shown an example of that you can composite any way you want
[1:56:27] actually actually it's just really the important thing is knowing what you're putting in each of your your channels in your rgb channels and
[1:56:37] knowing how to interpret those colors so sometimes it can be confusing and it's always good to have that color wheel
[1:56:45] in order to be able to interpret the colors especially especially the mixing of colors but you can you can do however you want
[1:56:56] hhv you can do hhv and then have a ratio hhv ratio in the in the blue channel
[1:57:05] uh and and it's a matter of uh just trying different things out kindly explain more on the
[1:57:16] multi-temporal multi-temporal pulsar vegetation rgb color meaning meaning [Music] [Music] i'm not sure let's see i'm not sure
[1:57:44] exactly exactly what that what specific part of it you would like to know so the the bottom line is we put three
[1:57:55] different dates in the rgb channels right right so so in the rgb image whatever appears as red
[1:58:05] for example if there's something that's predominantly red that means whatever you put in the red channel whatever image you put in the red
[1:58:13] channel channel the backscatter was higher than than um um for the image in the red channel than the backscatter
[1:58:25] in the green and blue channels okay okay so in case in in the case of looking at
[1:58:33] vegetation loss that means that if we put the earliest image in the red channel channel that means that the vegetation was high
[1:58:43] there was some level of vegetation in that area in 2016 and that vegetation was cleared in 2018 and 2019
[1:58:55] so so it's low back scattered 2018-19 remember the lower the vegetation bearing the lower the back scatter
[1:59:04] right right now if you have a combination of colors so say an area is green we know that green is
[1:59:14] i'm sorry if it's if it's a pink for example we know that pink is the combination of
[1:59:21] red and blue so that means that whatever you put in the red channel and whatever you put in the blue channel
[1:59:29] is high and whatever's in the green channel is low low okay so that means there was vegetation there in that area
[1:59:42] in 2016 in the red channel in 2018 whatever is in the green channel that vegetation was cleared
[1:59:54] and by 2019 there was some sort of vegetation growth some regrowth and so it was bright again so it was
[2:00:02] bright low bright in order for that area to appear pink so that's how you interpret the colors
[2:00:08] when you have a time series and that guide that table that i placed in the powerpoint is a really good guide to
[2:00:18] understand the information content when you do an rgb of different dates okay so let's move on to the next
[2:00:32] question kindly oh god sorry what is the global coverage of nysar nysar will have a global coverage uh with a revisit time of of 12
[2:01:05] days days so we posted the website for nysar now this uh satellite as mentioned isn't it scheduled to be launched around 2022
[2:01:19] but it's going to be very exciting because because it will provide l-band data globally and the the data
[2:01:27] will be freely available it will also be providing s-band data over select regions of the world primarily over
[2:01:35] india it was mentioned that incidence angle can affect land use land cover mapping can incidents affect the detection of
[2:01:45] forest types based on species composition composition if yes how can it be avoided right so incidence angle
[2:01:58] if you're looking at species composition you're really interested in kind of the the vegetation structure and and so
[2:02:11] vv vv tends to give you more information about vegetation structure so you you really how can you avoid
[2:02:21] errors i'm not sure i totally understand this question but really what you want to do is is you want to focus
[2:02:34] on on the image the middle of the image and really try to cut cut the areas that are at
[2:02:44] really um the extreme incidence angles both in the near range and in the far range what is the geometric resolution of
[2:02:55] sentinel one images available in google earth engine it's 10 meters okay now one thing to keep in mind
[2:03:04] is that with radar uh whenever you hear the spatial resolution of radar remember you need to apply some sort of
[2:03:17] speckle filter which will regret that degrade the spatial resolution so really whenever you hear of a specific spatial
[2:03:26] resolution for radar the actual resolution of the final product is not that that original spatial resolution right so it's not
[2:03:36] 10 meters even though you can apply a filter and you can keep the same grid the actual spatial resolution
[2:03:43] is uh is degraded as you saw in the in the demo uh when you compare side by
[2:03:49] side the unfiltered versus the filtered image there is a a loss in in in the details okay
[2:04:05] how would you do the analysis with a longer time series 10 to 15 images using google earth
[2:04:12] engine wow okay um um so you can add additional dates using that filter date option and and you create a new variable based on the
[2:04:24] dates that you're analyzing uh this is in slide 58 now you can also so this becomes more
[2:04:35] complex now if you're looking at 10 15 images you can do some sort of uh filter or
[2:04:42] sorry um detecting the signal change through your time series so seeing how that backscatter changes and if there's a
[2:04:53] say a large step a large change in your back scatter that means that the area was probably
[2:05:02] cleared or there was vegetation growth from one year to another and so that's another way to do it
[2:05:09] i can refer you to some online resources where you can probably um reference reference some of these other more complex methods
[2:05:27] and there is a great great resource online which is the sar handbook which was produced by servir and one of the
[2:05:35] chapters chapters actually actually is focused on looking at time series analysis using different time series analysis methods
[2:05:44] to look at change okay how were the min and max identified for display so let me just share my
[2:05:56] screen here the min and max it was really trial and error okay so show my screen so let's just
[2:06:22] so one way for you to see the pixel values in google earth engine is you go up to the window here
[2:06:28] in the top right and you click on inspector inspector and then you click on any area in the image and it'll give you
[2:06:38] the value for the pixel that you've clicked on right so in this case we selected the difference the vh
[2:06:45] 2018-2019 so we are this image so this is the value so you can move around and just
[2:07:02] select a pixel and that and and different pixels that have different brightness levels and then that will
[2:07:11] give you an idea of the range of values in your image and that's how you set the min and max okay
[2:07:20] and it's also kind of um trial and error so if you say you you have a a range for
[2:07:26] display of minus one one and nine it's going to look a little a bit dark so you need to stretch that
[2:07:36] and say four so you just go and do this by trial and error until yeah you have a display that
[2:07:45] you can easily interpret with your eyes that's all all right so let's go back to the q a
[2:07:53] document all right so how can we know the suitable mix and max value are in the add layer function so i
[2:08:14] think that the previous answer answer should have answered this one too so the next question are the
[2:08:48] sentinel one images calibrating sigma naught or gamma naught i believe they're calibrated in sigma naught okay so the next question what would be
[2:09:15] the consequence of not using speckle filters filters the consequence would be that that graininess that you see in the image
[2:09:25] that will introduce errors in your final product so in this case we're generating a mask and you might
[2:09:34] the mask might be picking up a lot of those those in this case those higher valued pixels
[2:09:48] that are actually speckled so you'll you'll tran that graininess will translate into your final product that's the bottom line whether you apply a
[2:09:58] threshold or whether you apply you do a classification classification you'll have that graininess effect effect can we determine the fcc if vegetation
[2:10:11] has changed to a different type type from trees to agriculture fcc i'm not sure what fcc but can
[2:10:29] yes you should be able to determine if there's been a change from trees to agriculture and so let's go
[2:10:40] back to the google earth engine screen here and and i will just show you so remember these areas are areas where there's been
[2:11:06] some sort of clearance and some of these areas have some level of vegetation growth right some level of vegetation
[2:11:16] um then this whatever is here in these areas is different from whatever is here right so here you have more of a mature
[2:11:24] these are forests and this is some level of vegetation regrowth so so yes you can identify whether there's been a change from
[2:11:33] something like this here forest to a a an agricultural crop right i hope that answers your question i
[2:11:46] think that's what you meant so let's go back to the google doc with the q a's all right
[2:11:58] so so deserve a problem yeah is there is a problem in the script i get an error
[2:12:05] first 2000 is not defined in the scope i'm not sure what that error would be but what i will do is i will
[2:12:14] provide the link in the presentation i will include the link to the code how do you determine the stretch i that
[2:12:27] was explained in question 19 i might have missed this explanation why are the images in log scale and what is
[2:12:35] the advantage to keep the images in log scale scale so that log scale is really the way you
[2:12:41] represent represent backscatter backscatter it's in in decibels it's a it's a power measurement and so say you're writing a paper and you're
[2:12:54] talking about the signal characteristics you you describe the signal characteristics or the differences in the signal backscatter values between different
[2:13:06] classes for example you express that in db okay so that's why the images are in db why are you changing the stretch for
[2:13:19] every layer i'm just okay so i'm i'm the reason that stretch is different for the different layers is because the
[2:13:33] um um the distribution of the values the range of the values is different for the different layers so this is for -15 to
[2:13:42] zero so that would be for the vv images minus 27 to zero is for the vh images so
[2:13:53] the the one thing that you should do is you should run a histogram on the the the actual radar images so
[2:14:04] i didn't show you that here but i did show you how to generate a histogram and what you can do is
[2:14:10] just run that histogram for the vv image and the vh image and that will give you an idea of the range of values
[2:14:18] um in the different images right and the reason there's another one that's minus nine to nine is because
[2:14:25] that's actually that ratio image so that the the range of values are different and the stretch is based on the range of
[2:14:33] values is there an online viewer for sar data that would make it easy for rapid assessment of sar data i am curious
[2:14:44] how well it differentiates between irrigated grassland versus willows is there an online viewer for starter not that i am aware of
[2:15:06] yeah i think you probably mean like something similar to optical where you can can uh uh do a time series
[2:15:17] of um optical imagery over an area it's just a viewer i'm not aware that there's something similar to sar
[2:15:30] how do we display areas covered by the land use land cover class and land use land cover change conversion
[2:15:42] in a table how does it cover by okay so i think what you mean here is you want the statistics
[2:15:59] of these different areas areas right and so for that you'd have to run something similar to what was done at
[2:16:06] the end that those statistics that we determined over a given area that we define so you run that for your entire
[2:16:13] image image to determine the statistics of the number of pixels right for for each class question number 30 are there other
[2:16:27] platforms you can suggest to process and analyze our data that does not require learning javascript yeah that's a great
[2:16:35] question actually and and the other platform i suggest is the sentinel toolbox that's a a free software
[2:16:46] by the european space agency it's a it's a great tool it's it's gui so you don't have to program
[2:16:54] all of the functions are there and and they have a number of tools embedded in that software where you can do the processing
[2:17:06] of the data and you can also do some analysis you can apply up classifications either supervised or
[2:17:14] unsupervised unsupervised it's really a great resource the only issue is that you have to download the sar images onto your computer
[2:17:22] and sometimes sorry images can be very heavy in fact just one image is on the order of one gigabyte so if you
[2:17:31] want to do time series analysis and if you're talking about multiple images it can be quite a heavy load on your
[2:17:38] computer so that's the beauty of something like google earth engine there are efforts though on on the way
[2:17:46] to have some sort of um um gui gui interface interface on on online to process data so
[2:17:58] something like the sentinel toolbox something similar that you can do online on the cloud run with data on the cloud but that is
[2:18:08] still in development okay how do you know how to associate which histogram is which vh difference is this just based on simply on drawing
[2:18:26] order from the code snippet yeah so it's what we defined first so first we defined whichever histogram we defined
[2:18:33] first that's the first window why was the sar image not within the red the roi okay i saw a couple of these questions
[2:18:45] and and the region of interest that we defined basically what the software does is it finds images that
[2:18:56] cover that region of interest whether it's the top edge of that region of interest you know the the top corner
[2:19:04] or if it's the entire region of interest all right so in our case the the the the there were more overlapping images
[2:19:16] throughout the different years in that area that covered the western western portion of our region of interest
[2:19:43] is it possible to calculate sar vegetation index to enhance the vegetation information in pasture or agriculture i'm not sure i understand this question
[2:20:06] fully about enhancing the vegetation information information so you can there will be an increase in backscatter in your time series as there's
[2:20:22] vegetation vegetation regrowth okay so if you want to look at um changes in vegetation or increasing vegetation in your area whether it's
[2:20:35] it's a pasture pasture or if it's agriculture then you can look for an increase in the back scatter of
[2:20:44] your signal in the time series images how can we export or download these data outputs from google earth engine
[2:20:56] so so yeah so we've done this step in previous star trainings but let's go to our to my google earth engine code editor
[2:21:07] and i will just show you here very quickly quickly and what i'll do is in the link that i
[2:21:13] will provide i'll include this this code so basically there is a command called export image and you can export to
[2:21:22] different places you can export to the cloud to your google drive um and so we're exporting to uh to the
[2:21:29] drive drive and and we're exporting this one of the the masks that we produced this is what it's called
[2:21:40] um over this region it's a geotiff you can export it in different uh formats and then this is a
[2:21:50] the older name all right so let's go back to the q a okay so let's okay okay can
[2:22:21] can we can you repeat the question for threshold or expand upon how that is determined how does the threshold
[2:22:28] compute it for a new region which is a larger region work to threshold the new smaller stats
[2:22:35] region when the standard for the stats region is going to be different okay okay so let me just clarify here the
[2:22:45] threshold that we applied was for the region that overlapped and the reason i selected a a new region
[2:22:57] uh was because i wanted to leave the edges out there were some there's some issues with the edges that you want to
[2:23:04] get rid of so i i just centered on that overlapping region and i applied the threshold to what why does the threshold menu is
[2:23:16] larger so the stats region at the end was just a small region where i wanted to calculate the
[2:23:24] statistics of change you can also calculate those statistics of change for the larger region okay okay so i see some
[2:23:54] some additional questions i'll try to get to some of these what is behind the standard deviation times
[2:24:12] 1.5 defined for the threshold that it that was just a a way to define the threshold you can go
[2:24:20] back and define that threshold however it makes sense right so what we want to do is in looking at that
[2:24:27] that histogram right so in this case we want the higher values right so what where do you set that
[2:24:35] threshold threshold as a as a way to start we set it taking the standard deviation by 1.5
[2:24:47] but you can multiply that by 2 or by 3. can you use the same algorithms and mountainous areas
[2:25:10] can the topography of an area influence results yes so the topography can influence the results however if you're looking at
[2:25:24] time series and assuming that we have you're looking at the same area with the same pass and approximately the same incidence
[2:25:34] angle then you really just want to look at the change change right right in the uh the change in the signal
[2:25:48] so if everything else is steady the topography is not going to change and if you use the same images basically
[2:25:54] you should be just picking up the change in these areas and the topography should not have a
[2:26:00] large influence sentinel one imagery allows you to distinguish distinguish of vegetation from crops for instance uh yes in some cases especially if it's
[2:26:24] forest forest and crops if it's a plantation say if it's very high dense plantations it might be
[2:26:32] difficult but if it's forest and low vegetation vegetation yes you can certainly identify the difference between those two
[2:26:57] okay depending on data availability should we avoid to not mix data of different orbital properties that is
[2:27:03] correct you want to always use data from the same pass pass right so if you're doing a time series
[2:27:11] analysis analysis uh um make sure the image all of the images are ascending for that analysis or descending but do
[2:27:22] not mix them how reliable is radar data to detect early deforestation i think you're you mean mean a forced degradation maybe so it depends
[2:27:36] on the level of degradation if that's what you mean with c-band you might not be able to detect forest degradation at
[2:27:44] least early just because of the capability of the signal to penetrate through the vegetation l-band would be much more
[2:27:52] suitable for looking at forest degradation early deforestation so a cleared area it should be easily easily detectable with radar images
[2:28:07] there's a significant difference in backscatter between an area that's forested and as you saw in these images
[2:28:13] an area that is has been cleared okay mike there's a question uh here is it possible to discriminate between
[2:28:29] vegetation that changed into forest fires and another one due to deforestation deforestation i'm studying burnt area detection with
[2:28:37] sentinel one i'd have to take a look in the literature literature maybe part of this is the type of patterns that you see with
[2:28:50] deforestation versus the type of patterns that you see with forest fires so that's one approach i mean you can
[2:28:57] certainly see the the signatures the strong signatures in the radar image from from fires right forest laws from fires and deforestation
[2:29:10] so i i think um it it depends too on the the characteristics of the fire and the deforestation sometimes
[2:29:19] in deforestation a lot of logs are left behind and that might cause some some double balance sometimes so it
[2:29:27] it depends but this is um i think i'd have to look into the literature a bit more deeply to to
[2:29:36] give a a a more complete answer to your question how would water show up in these bands
[2:29:46] so water is a specular reflector and water would just show up very very very dark right very low back scatter
[2:29:57] and the problem is sometimes because water has such low back scatter and sometimes barren areas have very low
[2:30:03] back scatter they can be a source of confusion confusion okay question is essential one data on google
[2:30:27] earth engine normalized in a way to account for the difference in near range and far range intensity
[2:30:33] from the incident angle variation no it's not one thing you can do is google earth engine does provide the incidence angle
[2:30:40] so you can use that to inform perhaps if you're running a like a classification whether it's supervised
[2:30:48] or unsupervised you can use the incidence angle to inform your classifier sentinel one c band down or side looking radar so all synthetic
[2:30:59] aperture radars are side looking okay
