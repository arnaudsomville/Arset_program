# SAR for Flood Mapping, Session 2/4

`https://www.youtube.com/watch?v=QKrG5jYZe10` · id 288 · 2:05:11 · module 57 — SAR for Disasters and Hydrological Applications

[00:00] hello and welcome to the second part of the advanced synthetic aperture radar webinar series this is erica podest and
[00:08] i will be your lecturer for today's webinar which will focus on the use of sar for flood mapping
[00:15] the structure of today's webinar is the same as the previous one where i will cover sar theory as related to flooding
[00:22] and i will then go through a demo on how to generate a flood product the next webinar series will be on crop
[00:29] mapping by dr heather mcnair from agriculture and agri-food canada on august 14th and the last webinar will be
[00:38] on interferometric sar for assessing surface deformation from earthquakes by dr eric fielding from jpl on august 16th
[00:47] each webinar will be done in both spanish and english the spanish webinars will all be at 1400 utc and the english
[00:56] ones will be at 2200 utc on the same day remember you will be able to access the
[01:03] presentation material and the recordings online in a couple of days so the learning objectives i expect that
[01:11] by the end of today's webinar you will be able to understand the advantages of sar over optical systems for flood
[01:18] mapping as well as what you can and cannot do with sar vs optical you'll understand the information
[01:25] content in sar images and its limitations for flood mapping you also understand the optimal sar sensor parameters for
[01:35] flood mapping and finally through the demonstration you will learn how to generate a flood map using sar data
[01:43] first i want to make sure that we're all on the same page about what i mean when i say flooding since
[01:48] the terminology can vary in this case i'm referring to the occurrence of a water surface beneath a vegetation
[01:54] canopy regardless of whether it is related to forests or agriculture when i refer to an inundated forest it
[02:03] means that underneath the vegetation canopy there is water above the soil surface surface in agricultural or herbaceous areas the
[02:12] leaves or stems of the plants visibly emerge above the water surface we can also detect flooding where there
[02:20] is no standing vegetation and i will call this open water the type of flooding that i will cover
[02:27] can be caused by natural processes such as the seasonal flooding of wetland ecosystems ecosystems or by human driven flooding such as
[02:36] flooded rice fields or flooding cost as a result of a natural hazard such as for example hurricanes or
[02:43] extreme precipitation events for natural systems these types of products can help reduce uncertainties in the spatial and seasonal extent of
[02:53] methane sources and sinks associated with wetland ecosystems or the cultivation of crops that require standing water such as rice
[03:02] also these type of products can help monitor inundation extent and dynamics for disaster assessment and management so radar versus optical
[03:13] radar really does offer a unique advantage to mapping flooding versus optical because of two reasons the first
[03:22] is that radar can make observations of the surface of the earth regardless of day or night conditions or almost any
[03:29] type of weather condition optical on the other hand is hindered by darkness and by clouds making radar especially useful for
[03:39] studies of the tropics or to assess areas where a flood-related disaster is occurring or has occurred because such disasters are characterized
[03:49] by heavy cloud cover the other main advantage of sar over optical is the ability to detect flooded
[03:56] vegetation given the radar's capability to penetrate through the vegetation canopy and this is wavelength dependent and its sensitivity to standing water
[04:08] underneath the vegetation optical only sees the top of the canopy unless there are large gaps the advantage of optical has really been
[04:18] high temporal repeat and spatial resolution throughout a long time period however however that has started to change with
[04:26] operational radar data such as sentinel one one and it will change even more in the future with upcoming satellites such as
[04:35] nysar swat saocom and biomass so star signal scattering over inundated regions regions here i will briefly review the radar
[04:46] back scattering mechanisms in general with an emphasis on the ones that are primarily relevant to flooded vegetation
[04:54] and open water shown in red boxes in this figure so this figure illustrates the different back scattering mechanisms starting with
[05:03] the one on the far left which is specular scattering which occurs when there is a smooth surface such as a calm
[05:11] water surface and the signal scatters away from the satellite this results in open water appearing as dark
[05:20] dark in the image the next one is rough scattering which results when there is slight roughness on the surface causing the signal to
[05:30] scatter in different directions but mostly away from the satellite an example of this would be a water
[05:36] surface that has some level of roughness caused by either short floating vegetation wind or heavy rain such an area could appear dark but not
[05:47] as dark as a water surface that is completely smooth as the surface gets rougher as shown in
[05:53] the next figure the larger the signal scattered back to the satellite and the brighter that pixel will appear on the image
[06:02] the next signal interaction is volume scattering which occurs when the signal is scattered multiple times and in multiple
[06:11] directions within a volume or medium in the case of vegetation the signal can scatter from multiple components such as branches stems leaves
[06:22] trunks or soil the final backscatter mechanism is called double bounce which is the one on the far right
[06:30] and it results when two smooth surfaces create a right angle that deflect the incoming radiate radar signal off both
[06:40] surfaces surfaces causing most of the energy to be returned to the sensor these areas appear very bright in the
[06:48] image image and are commonly seen in flooded vegetation because of the interaction between the smooth water surface and
[06:57] vertical structure of the vegetation such as the trunks double bounce is also characteristic of urban areas because again we have a
[07:06] smooth surface which is for say for example a road and then we have vertical structures such as buildings so you have the same
[07:14] backscattering mechanism and these areas appear very bright so this slide shows star signal scattering over inundated regions and
[07:25] this figure is an l-band hh polarized image image from the japanese pulsar sensor on board the halo satellite over an area
[07:35] near manaus brazil it is a great example showing flooded vegetation as well as open water the river running through the middle is
[07:44] dark because open water is a smooth surface and causes specular scattering the very bright white areas throughout
[07:52] the image are flooded vegetation and what is really impressive is that in some areas even though you cannot see
[07:59] specular scattering from the river because it is either too small or it is covered by vegetation however you can still see the river's
[08:09] extent through flooded vegetation because the signal is penetrating through the canopy and double bounds is occurring occurring this level of detail on flooded
[08:19] vegetation is truly unique to radar so let's start out by discussing the sar signal response to flooded vegetation as
[08:28] a function of wavelength generally the longer the wavelength the higher the capability of the sar signal to penetrate through the vegetation
[08:36] canopy all the way to the surface the table on the right list commonly used bands and radar and their wavelength
[08:44] range range so sars operating at x-band are generally operating at a wavelength of around 3 centimeters at c band at a wavelength of around 5
[08:54] centimeters and at l-band at a wavelength of around 23 to 24 centimeters centimeters as you can notice this range is quite
[09:02] wide wide numerous studies have concluded that l-band is suited to detect inundation beneath a forested canopy and should be
[09:11] the preferred wavelength for this purpose purpose however that capability of l-band and also of other bands to penetrate some
[09:19] forested areas can be reduced or are even non-existent depending on the gaps in the canopy or especially on the
[09:28] vegetation density as an example a couple years ago we were conducting some wetland studies in the peruvian amazon and we overflew uavsar
[09:38] which is a jpl l-band airborne sensor over our site of interest while at the same time we had someone on the ground
[09:45] collecting site data this person was in water up to his knees however the radar data did not see any
[09:53] flooded vegetation because the vegetation was simply too dense and the signal could not penetrate all the way down through the canopy
[10:03] in comparison to l-band the ability of shorter wavelengths like c-band or x-band to penetrate the vegetation canopy is reduced
[10:13] although the penetration of c-band is limited in comparison to l-band studies have shown an increase in sea band
[10:20] backscatter for flooded vegetation during leaf on conditions and especially during leaf off conditions because you have have more gaps in the canopy
[10:30] so c-band generally is more useful at the initial growth stages and if the density of the vegetation is
[10:36] low low also sea band data is more sensitive for detecting paddy rice cultivation and herbaceous wetlands expand sensors so for example pterosaur
[10:47] x x in general have even more limited penetration through dense vegetation as a result of high interference with
[10:55] leaves where backscatter is dominated by volume scattering however there have been some studies that have shown the
[11:02] potential of x-band to identify a flooded vegetation for sparse vegetation or during leaf-off conditions in this case the transmitivity of the
[11:12] signal through the canopy is increased due to gaps in the canopy a very low biomass areas and the contribution of
[11:19] double bounds dominating the volume scattering scattering some other studies have demonstrated the ability of x-band to map flooded
[11:27] vegetation vegetation in flooded marshlands and in olive groves groves so in summary l-band is better suited for dense vegetation but shorter
[11:36] wavelengths might give you reasonable results especially if there are many gaps in the vegetation the shorter the wavelength or the
[11:45] shorter wavelengths are better suited for lower vegetation in general this is an example of signal penetration through vegetation to detect flooding
[11:56] here we have multi-frequency images at c l and p bands obtained from jpl's multi-frequency airborne radar called airsar
[12:07] the area imaged is a wetland in the manu national park in peru and this is an image from 1993.
[12:15] now remember that c band has a wavelength wavelength of around 5 centimeters l band around 24 centimeters
[12:23] and p band around 40 centimeters as you would expect the longer the wavelength wavelength the deeper the penetration through the
[12:30] canopy canopy and the better you can detect flooded vegetation vegetation so you can clearly see here the bright
[12:37] areas areas where there is flooding and note all of the white areas in the p-band image that are either not present or less
[12:47] bright bright and extensive in the l-band image or the c-band image in fact if you take a look at the c-band
[12:55] image there's hardly any flooded vegetation being picked up as you know from previous material backscatter is dependent on two surface
[13:03] parameters which are structure and dielectric dielectric there are three parameters related to structure size relative to wavelength
[13:11] orientation and density in radar the length of the wave or the wavelength will determine its interaction with surface objects size
[13:20] relative to wavelength defines the surface roughness so if wind ripples on the surface of the water are relative to
[13:26] the wavelength then the surface will appear rough remember that the darker the pixel the smoother the surface in relation to the
[13:34] wavelength wavelength as the surface roughness increases the backscatter intensity will increase in the case of open water as the surface
[13:42] roughness increases the brighter the pixel pixel orientation influences the interaction of the waves that are either horizontally or vertically polarized
[13:53] double bounds which is characteristic of flooded vegetation occurs when there are two smooth surfaces creating right angles such as a
[14:01] water surface and a trunk resulting in most of the radar signal scattering back to the satellite and appearing very very
[14:10] bright bright if the orientation of the trunks are not perpendicular to the water surface then double bounce will not occur
[14:18] i will discuss this further along finally the density of the scatterers and the biomass in the case of flooded
[14:25] vegetation will also influence the double bound signal return the greater the biomass the less penetration through the canopy this is also a function of
[14:35] wavelength of course and the greater the density of scatterers the less the penetration if there are gaps in the vegetation
[14:43] canopy there is a larger likelihood for the signal to penetrate all the way through to the surface
[14:50] polarization refers to the plane of propagation of the electric field of the signal which can be in the horizontal
[14:56] plane or in the vertical plane irrespective of wavelength radar signals can be transmitted and or received in
[15:03] different modes of polarization there can be four combinations of both transmit and receive polarizations which are hh horizontally transmitted
[15:13] horizontally received vv vertically transmitted vertically received received hv horizontally transmitted vertically received and vh vertically transmitted and horizontally received
[15:27] penetration depth is influenced by polarization polarization in forests hh tends to penetrate deeper into the canopy because it tends to be
[15:36] less less attenuated than vv hv is more sensitive to volume scattering and hence is a good indicator of vegetation cover and
[15:46] biomass biomass this is an example of multi-polarization images from elos pulsar over a part of the pakaya sumerian natural reserve in
[15:56] peru which is a vast wetland ecosystem the images are at l-band and at hhv mvv polarizations the very bright areas is where double
[16:08] bounce dominates and this is where there is inundated vegetation the very dark areas are open water and
[16:14] you can clearly see a river through the middle of the image as well as some open water bodies north
[16:20] and south of the river note the difference in backscatter magnitude between the different polarizations polarizations if you focus on inundated vegetation or
[16:28] the areas that are very bright hh polarization is way more useful for distinguishing flooded from non-flooded vegetation
[16:37] vegetation vv shows flooded vegetation to a lesser extent extent and even lesser by hv polarization in general hh polarization penetrates
[16:48] deeper into the vegetation canopy than vv and when striking the water surface is more strongly reflected in comparison
[16:56] to vv polarization hv is more sensitive to volume scattering because of its depolarizing characteristics characteristics here you can see an rgb image of the
[17:07] different polarizations hh hb and vv false color images are an ideal way to visualize the information content of the
[17:15] different polarizations through color combinations because you can see the information content content unique to each polarization or for combinations of
[17:24] polarizations polarizations so in this case this is a false color composite of the same three images that
[17:29] you saw in the previous slide hh is in the red channel hv is in the green channel and vv is in the blue
[17:37] channel channel the pink areas that are popping out are those areas where flooded vegetation is present present this example shows a pulsar image for an
[17:47] area near manaus brazil at three polarizations hh hv and vv note the backscatter intensity of the river that goes through the middle of
[17:56] the image open water is a smooth surface which causes specular reflection resulting in the radar signal being scattered away
[18:04] from the satellite and appearing very dark in the image here you can see that open water is much
[18:10] darker at hv than at hh or vv and hence easier to differentiate the reason for this is that since water
[18:18] is a smooth surface scatterer there is no depolarization of the signal so remember the signal tends to be
[18:25] depolarized whenever it scatters multiple times so for example when you have vegetation the signal scatters multiple times from
[18:36] the the branches the stems the trunks the leaves the soil and that's called volume scattering so depolarization normally occurs whenever
[18:46] you have volume scattering but not when you have specular scattering so this is a subset of the same pulsar
[18:54] image shown in the previous slide it is zoomed over an area where you can see roughness on the surface of the
[19:00] water of the main channel which is most likely caused by windy conditions conditions notice that as you move east and up the
[19:08] tributary there is smooth water there is a transition where that water goes from uh rough it's it's a bit higher
[19:17] backscatter to very low back scatter that means the characteristics of that water has have changed from rough to smooth and more of a
[19:30] specular reflector and so that's the reason that there's a decrease in backscatter in both the hh and vv polarizations
[19:41] so the utility of sar data for detecting flooded vegetation is influenced significantly by the incidence angle incidence angle is the angle between the
[19:52] direction of the incident wave and the earth's surface plane in radar the incidence angle increases across the swath from the near to the
[20:01] far range the area closest to the satellite is the near range and you will find smaller incidence angles than the area furthest
[20:09] from the satellite or the far range small or low incidence angles will result in greater penetration through the medium and higher back
[20:19] scatter than large incidence angles large angles on the other hand will be more sensitive to surface roughness and
[20:26] will penetrate less into the medium for the detection of flooded vegetation steeper incidence angles are preferred because the signal has a greater
[20:38] penetration through the canopy and reaching the water surface underneath large incidence angles will be more sensitive to vegetation structure and
[20:47] less likely to penetrate through the vegetation canopy and detect flooded vegetation vegetation and this is an example of the effect of
[20:56] incidence angle variation on the left is a sentinel-1 vv image and on the right is the incidence angle
[21:03] variation form for the same image so you can see that it goes from 30 to 45 degrees
[21:10] the radar is right looking note that as we move across the swath from the near to the far range the image
[21:17] becomes increasingly darker in tone around a 3 to 5 db difference in backscatter backscatter if you measure for example the same
[21:26] forest at different incidence angles then the measured back scatter will be different different even if there has been no physical
[21:33] change in the forest every surface feature will have a back scatter that is a function of incidence
[21:39] angle angle so you need to be careful when comparing backscatter of a feature when there is a
[21:44] large variation in incidence angle incidence angle can especially affect the appearance of smooth surface or smooth targets on the image such as open
[21:55] water water smooth surfaces can appear brighter than rough surfaces at small incidence angles and that's usually less than 20 to 25
[22:04] degrees degrees now let's discuss a source of confusion that might lead to errors when classifying open water
[22:13] this is a pulsar image near manaus brazil at hh hv and vv polarizations you can see that the water is dark
[22:24] but north of the river there are areas that either have no vegetation or very low vegetation and these areas are easily confused with
[22:33] open water one way to try to clear this up is using image image ratios such as hh over hv
[22:43] another source of confusion that might lead to errors when classifying flooded vegetation are urban areas here we have a pulsar image containing
[22:55] the city of manaus in brazil and its surroundings it clearly shows flooded vegetation which are the very bright areas around
[23:04] the river on the top labeled in red is the city of manaus which has a population of 2.5 million people including its
[23:14] suburbs suburbs notice that the city appears very bright as bright as flooded vegetation this is because the dominating
[23:23] scattering mechanism is double bouts right angles form form between between smooth surfaces such as roads and vertical structures such as buildings
[23:34] causing this high return in urban areas one way to at least partly clear up this confusion confusion is through the use of texture
[23:43] measurements measurements textures provide information about the statistics of the pixels within a box and the box size is defined by the user
[23:53] some textures such as energy or entropy provide information about homogeneity or inhomogeneity inhomogeneity of the pixels within the box
[24:03] in my experience such measures help separate urban areas from flooded areas because urban areas tend to be more
[24:10] homogeneous homogeneous in texture than flooded areas here's an illustration of urban areas and flooded areas at different
[24:20] polarizations you can see that at hh both both urban and flooded areas are very discernible at vv urban areas are more discernible
[24:30] than flooded vegetation the reason for this is because the signal is attenuated by vegetation but not at the same level by urban areas
[24:41] at hb urban areas are minimally discernible here's an example of flooding that occurred in the city and surroundings of houston texas in the
[24:52] united states this flooding was caused by a large hurricane called hurricane harvey in late august of 2017.
[25:01] these are radar images from the european space agency sentinel one satellite of before during and after the event
[25:09] the images cover an area of approximately 220 by 190 kilometers the area marked with the red circle is
[25:17] the city of houston and some of its suburbs there is no significant change in brightness over the city itself
[25:25] however inundation in the surroundings is discernible because ponding of water forms smooth surfaces that create specular scattering and those areas
[25:35] appear dark note some of the water bodies that are present in the middle image which i have
[25:42] marked with red arrows that are not present in the far left or far right images also note the disappearance of some of
[25:51] these water bodies a couple of days after the event on september 5. this is a false color rgb image of the
[25:59] same area here i used two images before and during the event so channels are red and blue contain
[26:08] the during the event image while channel green contains the before the event image image the areas where there is a predominant
[26:16] color means that the back scatter value for that area was higher in the image containing that color or combination of
[26:23] colors so for example anything that is green means that backscatter was higher before the event areas that are pink means that the red
[26:32] and blue channel values which in this case are the same are higher than the green channel therefore wherever green is higher means
[26:41] that before the event the back scatter was higher than during the event because the area is now inundated and there is
[26:49] water or there is a water surface that is causing specular scattering and hence a very dark backscatter return
[26:57] so the green areas you can interpret those as areas that are now inundated there's standing water the areas that
[27:05] are pink means that they're they are higher backscatter than before the event therefore therefore that area is either inundated
[27:15] so there's inundated vegetation or the soil moisture content of the soil is higher than before the event
[27:27] note that the urban area remains high in both images this is another similar event here we have two sentinel 1 radar images the
[27:38] false color images are vv bh and the ratio of vv to vh for each date this area is part of the state of south
[27:47] carolina in the eastern coast of the united states a large hurricane called hurricane matthew caused major flooding in this
[27:56] area on october 2016. the two images are before the event and shortly after the event note the orange areas that pop up along
[28:07] the coastline after the event this indicates that these areas are inundated inundated in summary sarb backscatter is not good
[28:16] at assessing flooding in urban directly in urban centers but can assess flooding in the human natural interface within or
[28:24] surrounding urban areas now let's discuss the geometric distortions due to topography that are commonly found in radar images
[28:34] here we have two examples of distortions they're layover and foreshortening layover occurs when the radar beam reaches the top of a tall feature before
[28:46] it reaches the base as a result the top of the feature is displaced towards the radar from its
[28:53] true position on the ground and lays over the base of the feature layover is most severe for small
[29:01] incidence angles at the near range of a swath swath and in mountainous terrain foreshortening occurs when the radar
[29:09] beam reaches the base of a tall feature tilted towards the radar such as a mountain before it reaches the top
[29:18] because the radar measures distance in slant range the slope a to b will appear compressed and the length of the slope will be
[29:28] represented incorrectly so depending on the angle of the hillside or mountain slope in relation to the incidence angle of the radar beam
[29:37] the severity of foreshortening will vary these distortions can complicate sar-derived flooded classification in severe cases the layover and shadowing produced by
[29:51] mountainous terrain makes classification inappropriate inappropriate in less severe cases ancillary digital elevation data can be used to generate
[30:01] approximate corrections for terrain effects prior to classification the final effect that topography can have on the signal is
[30:11] shadowing which occurs when the radar beam is not able to illuminate the ground surface shadows occur behind vertical features
[30:20] or slopes with steep sides since the radar beam does not illuminate the surface shadow regions will appear dark on an
[30:30] image image because no energy is available to be back scattered as incidence angle increases from near to far range so will shadow effects as
[30:40] the radar beam looks more and more obliquely at the surface these shadows can be easily confused with open water when mapping inundation
[30:50] there are ways to correct for shadows through interpolation however i personally prefer to leave the shadow areas as areas of data gaps
[30:59] rather than use interpolated values one final thing to consider when doing a flood map classification is speckle
[31:07] which is that salt and pepper appearance of radar images in order to reduce the effect of speckle
[31:13] you need to apply a filter which will reduce the resolution of your image therefore keep in mind that with radar
[31:20] images might be at a given resolution such as 10 meter however after applying a filter on an
[31:27] individual image the spatial resolution of that image will be lower the last example i want to show you is
[31:35] that of radiometric distortion over areas of topography especially complex topography wherever you have slopes facing the satellite you will get a bright return
[31:47] sometimes bright enough to be confused with flooded areas this example shows such an area in the andes
[31:55] andes from a sentinel 1 radar image you can partly correct for this by performing a radiometric correction to
[32:02] your data and this is something that is part of the processing sequence of radar images when using the sentinel toolbox
[32:10] software software sar data sets have improved significantly in the last couple of years and this list shows the legacy
[32:18] current and future sar data sets the ones with the green box indicate that the data are freely available which
[32:25] you can ask access through either the alaska satellite facility or the european space agency's copernicus hub note that the legacy data sets start
[32:35] with csat in 1978 which was an l-band sensor that flew for only a couple of months during the 1990s there was jrs-1 and
[32:44] ers-1 and 2 going into the 2000s with mbsat alis1 and radarsat 1. currently there are a number of sar
[32:52] satellites in orbit with tandem x which is an x-band radar satellite from the german aerospace center radarsat-2 which
[33:00] is a c-band from the canadian space agency agency cosmos sky med which is an italian x-band sar
[33:07] sentinel one which is a european space agency sar operating in sea band and finally pasar which is a spanish
[33:15] star operating at x-band their future satellite's coming up with sao kom which is an argentinian sar operating or which will operate at l
[33:26] band band and there is also the radar set constellation which will operate at sea band band nysar is a nasa indian space agency l
[33:36] band and s s-band sensor to be launched in 2021 and biomass is a european space agency p-band sensor also to be launched
[33:44] in 2021 so it's very exciting times ahead for those people that are using radar in their research and
[33:53] applications applications and this chart shows currents and future satellites grouped according to bands and the far right indicates the repeat
[34:02] cycle cycle note that they have repeat cycles of just a few days which allows for a constant monitoring capability
[34:12] i want to briefly touch on nysar which is a nasa and indian space agency satellite that will launch in 2021 and
[34:20] will operate at l and s bands it'll have three to 10 meter resolution depending on its mode of operation
[34:28] and it will provide repeated observations which will allow for applications such as ecosystem hazard and disaster monitoring that include
[34:36] ecosystem disturbances ice sheet collapse collapse and natural hazards such as earthquakes volcanoes and landslides so next i will show you a demo on flood
[34:48] mapping using the sentinel 1 toolbox demo that we're going to do is going to consist of looking at flood extent
[35:03] due to a hurricane and the area that we're going to focus is is the east coast of the united states an a
[35:10] state called south carolina there was a hurricane that hit this state back in 2016 in october of 2016
[35:22] and it caused vast inundation so we're we'll be looking at images from before the event and after the event
[35:32] and the images that we'll be using today are images from the sentinel-1 satellite this is a satellite
[35:42] satellite that operates at c-band and we'll be using two polarizations vb and vh and this satellite is from the european
[35:52] space agency the data is freely available and you can access the data through the alaska satellite facility
[36:01] and so i'll walk you through how to access this data just do a google search for the alaska satellite facility
[36:08] and by the way you can also access the data through the european space agency's copernicus copernicus search engine
[36:15] and the only difference between the two is that there is a bit of a delay with the data that's placed in the alaska
[36:23] satellite facility server there's about uh like the the most recent one is probably from three days ago
[36:31] while the ones that are uh placed at the european space agency's uh search engine are are i think from the last day so if you're
[36:41] looking for images to do like a disaster assessment assessment something that's very recent then um that's the best place to go
[36:50] but today's a demo i will be using the alaska satellite facility and so one thing to mention is you notice i
[36:59] mentioned the polarization right vv nvh nvh and and in the presentation i talked about the different polarizations and i talked
[37:07] about how hh is really better suited for looking at inundation because it penetrates further through the vegetation
[37:15] vegetation and so the reason we're using sentinel today is to give you a sense of using a different
[37:22] data set from the last uh demo that we did so the last one we use delos palsar today we're using
[37:30] sentinel and the area where we'll be focusing does not have dense vegetation it has relatively short vegetation
[37:37] there's some mangroves and grasslands along the coast and so vv is actually acceptable it works well and you can see
[37:45] the inundated vegetation so let's get started once you get to the main page of the alaska satellite facility go to data
[37:54] sets and click click on sentinel 1 and it will take you to a page that gives you provides more information
[38:01] about the data set documents and tools and the data but let's go straight to do our search
[38:09] so click on find sentinel one data and it'll up will pop a window asking you what sort of search you'll want to
[38:17] do gives you three options select the first one the geographic search and down here this is a
[38:25] a tutorial it steps you through how to do the search but i will step you through that so i'll just dismiss that
[38:31] box box and and the area that we're interested in i'll just zoom in is here so this is actually the city of
[38:41] charleston in south carolina and i will draw my box here around this area so this was actually in one of the
[38:51] examples i showed in the slides the these images so we'll look here on the left and the we've defined the geographic region
[39:01] the date as i mentioned this event occurred occurred in october of 2016. actually the hurricane made landfall in this area on october
[39:12] 8th of 2016. so let's go up to 2016 select october and do a search starting from the 1st of october
[39:26] through through the let's go through the 18th okay and then down here data set the default is sentinel 1a and 1b leave it like that
[39:40] and then just press search okay and then on the right pops a list of all of the images that
[39:52] somehow overlap our area of interest and the two images that i have selected are let's zoom out here a little bit
[40:05] are this one so so it's from october 16th so this is after the event sentinel sentinel one has different modes of operation
[40:24] this one specifically is called interferometric white swath mode and it's the one most commonly used for land cover
[40:33] applications applications and it's a vv vh polarization and this is a an ascending node this is very important i'll rate it reiterate
[40:44] what i mentioned last time is to never mix mix paths so never mix your images ascending and descending never do that
[40:55] if you're doing a multi-temporal analysis treat the ascending images in one pile and do the analysis with those
[41:01] and do the analysis with the descending images in a different pile the reason for this is because the the viewing
[41:07] geometry is different okay so here we have a number of different images and and what the one you'll want is the one
[41:17] projected on the ground range so you want the grd image uh this one all right so you click
[41:24] download download and all you need to do to download the data is register in uh on the system on the alaska satellite
[41:33] facility system and then you can download them for free so i've downloaded this one already and let me
[41:42] let's go down the list to select the next one so so the next one before the event remember
[41:49] the satellite reached land on the 8th of october october and so the next the the one before the event
[41:57] that i selected was this one down here and this is from the the 4th of october okay and just from taking a look you can
[42:07] see that these areas around the coastline don't pop up as in the other one so that that's all inundated
[42:13] vegetation we'll take a closer look at all of that okay again interferometric white swath ascending very important polarization
[42:22] bbvh bbvh seaband seaband and so again we'll download the grd image okay okay so that takes care of accessing and
[42:34] downloading the data and now let's go ahead and open our toolbox actually i'll close this and and our snap toolbox and let's open the
[42:45] images so what i'll do here is since these images are pretty big what i'll do is i won't go through the actual processing
[42:55] i'll show you how to do the processing of the data but this is going to be like
[42:58] one of those cooking shows on tv where they show you how to do things and then they put it in the
[43:07] oven and out comes the the baked product okay so that's what i'm gonna do so let's start out with
[43:15] the data sets the raw data okay so you don't need to unzip the files that you downloaded
[43:24] the sentinel toolbox recognizes the file and it unzips it okay so in order to open the file
[43:32] you just select so let's see you select the zipped file so we select these two files these are the
[43:41] ones i downloaded so october 16th and october 4th just a zip file and i'll open it okay so i've got it opened here
[43:50] and this is the one from october 16th and let's just take a look at the images make sure they
[44:01] look okay and this is always good practice just in case there is some issue with the image
[44:07] sometimes sometimes there's banding introduced during the processing of the image or there's some issue with the image so it's better to
[44:16] catch those things at the beginning before you run you spend a lot of time just running things on it
[44:23] and realizing after an hour of doing the processing that there's an issue issue okay so there you go
[44:32] so each image has a vh and bv band that's the dv uh from 2016 and this is the
[44:56] vv from 2004. interesting look at the water here all right right so there are a series of steps that you
[45:09] need to take to process the data with alus pulsar you did not do that because the data was already radiometrically
[45:17] terrain corrected and so the data that we downloaded in the first demo on tuesday was just pretty much ready to go
[45:25] other than applying a filter it was ready to go here we knew we need to apply the processing steps and these are
[45:33] you do a radiometric correction you apply a speckle filter you terrain correct the image and then you're ready to start
[45:42] manipulating the image okay so at that point you can then export your image into your software choice whatever
[45:50] you're using qgis arcgis whatever and snap actually is really great about being able to export files files into different formats so you got file
[46:00] and you've got here an export button and it's got all of these different formats and that's cdf geotiff hdf5 envy
[46:09] if that's what you use and other that's so you've got a number of different options here to export the
[46:20] file and you can even also export for visualization onto google earth and we'll do that actually at the end okay
[46:29] so the images are open the first thing we do and i'll close this to just keep my box here uncluttered so i'll
[46:38] close close actually after i apply the first part of the process i'll close them so the first
[46:44] thing we do is we apply a radiometric calibration to do that you go to radar radiometric and you select calibrate okay
[46:54] and and you select we need to apply this on each of the bands so we start with band one which is the one
[47:03] from the 16th of october so the sentinel software adds on tags on to the file name a
[47:13] description of the process that it's applying so here it's tagging on cal so you can recognize and know that this file has been
[47:22] calibrated calibrated and down here you define the directory where you want your file to go processing parameters you don't change
[47:30] anything you want you want the calibration on both polarizations and you want the output as sigma not band
[47:38] okay so you press run and once that's ready that will be file three three and then you rerun this
[47:45] with the second file which is the one from from october 4th and exactly the same thing and you'll have a file that would be
[47:55] file number four okay so now i will close these so now i'll close the original files and
[48:08] and let's take a look at the the radiometrically corrected files so we have sigma naught vh and vv
[48:22] for october 4 and down here we've got sigma naught vh and vv for october 16th looks good so far
[48:36] all right the next step is applying a filter so you're all familiar now with the issue of radar images that they have
[48:45] this this they've got speckle so it's a salt and pepper effect and that salt and pepper effect can just
[48:53] propagate to your classification results so we want to try to clean that up a little bit and the way we do that
[49:04] is we go to radar we select speckle filtering single product speckle filter and same thing here you
[49:13] select the input file and the input file that we want to select is the calibrated and and output file name it tags on spk and then
[49:28] processing parameters okay we want both polarizations and then here there's a whole list of different filters that you can explore
[49:39] one of the more common ones is actually the lee filter and i've used a 7x7 window how do you determine the optimal window
[49:50] it just totally depends it depends on how speckly your original data is how much resolution you're you you're willing to
[50:00] uh uh for for forego i guess yeah that's that's a word to use so the larger the box
[50:08] the more resolution you lose right so this data is 10 meters in resolution and so we apply a filter
[50:17] that has a box of seven by seven the actual resolution is going to be 70 meters so the way this filter works is that
[50:27] even though you apply a 7x7 box the result result that spk image will have the same size as the original
[50:35] image so it's actually gridded to a 10 meter resolution but the actual resolution is 70 meters okay so you run that
[50:43] and then you do the same thing for the second file file and and the next the results are here and
[50:53] actually actually let's open that and how i'll open uh two files side by side so you can see the
[51:01] difference between the filtered and the non-filtered file and so one thing to keep in mind about radar is
[51:13] that it's a little deceiving uh when you talk about radar resolution like someone might say yeah okay that radar data is
[51:21] 10 meters but actually you'll always have to or pretty much most of the time you'll have to apply a
[51:29] filter a speckle filter to the radar data so assume that whatever product you're generating from radar data is not going
[51:39] to be at that original resolution it's it's going to be at some degraded resolution resolution okay so that that is something really to
[51:48] keep in mind with radar with optical i know it's not like that with optical if your image is 30 meters then you're
[51:53] generating a 30 meter product okay so let's tile these images side by side uh uh okay so this is
[52:10] so here we have october 4th the vv filtered and i will load october october 4th 4th vv
[52:22] vv unfiltered unfiltered and we can put them side by side so to see these images side by side you go to
[52:32] window window and you do a tile horizontally and let's go here and you can zoom in and
[52:43] you see the difference between the the filtered and the non-filtered image okay makes a big difference big difference
[53:02] okay okay all right so so the next step is oh and one thing i wanted to show you
[53:11] before i go to the next step is if you want information about your file then then you click on the file name and you go to
[53:21] analysis analysis and and you click on information and it will tell you it will give you some basic information about the file
[53:30] especially the if you want to know the size of the file so look at the size of this file it's 25
[53:37] 321 pixels by 16 733 pixels so it's a very large file and in the next step we'll be
[53:47] reducing the size of this file so it becomes more manageable and you'll want to do this too especially if your
[53:55] computer is not very powerful or you want to subset the image so what i suggest is when you start playing around
[54:02] with this and just exploring how to use it just cut a subset so you don't have to
[54:09] wait through these processes to to run it will be much quicker and it's a much less frustrating way to
[54:18] become familiar with the software rather than having these crashes or having to wait a long time okay
[54:24] so the next step is we apply the geometric correction on the image and we go to radar select geometric
[54:35] select terrain correction range doppler terrain correction okay okay and and we select the the speckled the filtered image okay
[54:49] and and here here what the software does is it uses a digital elevation model to do the
[54:59] terrain correction and and it automatically downloads the dm okay and if you click here you have a list of different dms that
[55:13] it can automatically download or you can also specify your own dem but let's just keep the default which is
[55:20] srtm srtm and then the source pixel so the output will have 10 the original image is 10 meters and
[55:27] it's saying okay the output will be 10 meters but we want to reduce the size so let's just make it 70 meters since
[55:35] the actual resolution is 70 meters let's just make the size to match the actual resolution okay and then one thing that's important is
[55:45] to deselect mask out areas without elevation because what that will do is a mask out like the ocean for example and it's just
[55:54] going to look funky here at the at the coast okay and so you hit run and then you do the same thing for
[56:05] image the filtered image number two okay so i'm gonna do close and actually i'm gonna close some of these files
[56:25] okay so the terrain corrected image is this one and you probably noticed something very striking striking and
[56:39] and since i cannot hear you i will assume that what you're noticing that's striking is the orientation of
[56:45] the image which is completely correct you guys are correct so so the reason for this is because the
[56:52] original image is in the satellite orientation and once you terrain correct the image it's in the the correct
[57:00] orientation you know as it should be so if you want to look at the coverage of the image you can always go to the
[57:08] world view and and and look at the coverage of of your images okay and how they should
[57:17] look look and they look to have the correct orientation orientation all right so so what we'll do
[57:28] is we will it in with radar and when you're working with radar and with publications the way to
[57:38] represent backscatter values is db that would be decibels so it's it's uh it's a power unit it that's
[57:50] non-linear right and so you're going from a linear value sigma naught is linear to decibels which is non-linear
[57:57] the way to do that is you do 10 log of the value of the pixels in sigma
[58:05] naught okay now it's already a function here in the sentinel toolbox so it's uh you go to you click on the file
[58:15] name and you do linear to from db and it says do you want to save it as a
[58:22] do you want to convert it to a virtual band and you say yes and then you do the same thing
[58:28] for the second one and you say yes now virtual band means it saves it in memory so we actually
[58:34] want to have it as part of the file and so you go to vv vv you go to the file
[58:43] and you convert band so now it's part of the file it's not in memory and you go and
[58:52] use you save the product okay just to make sure everything is saved so you have these four files now
[58:59] under this file and you do the same thing with the second one okay and you convert the band
[59:16] convert the band and now let's let's just take a look uh do an rgb just to see
[59:24] visually visually how some of these images look so let's do an rgb of the 2016 image and let's do it with db so let's do vv
[59:36] i always try to put vh in the green channel just because the cross pull polarization is so sensitive to
[59:44] vegetation it pops up in the green channel and then we'll do vb here and and we'll we'll stretch we need to stretch the histogram
[59:56] it's always nice to look at the histogram to see how your values are distributed distributed right so we put
[1:00:02] vb in the red channel and take a look at these two peaks this peak down here that's water and this peak here that's
[1:00:12] the everything else okay so let's just play around with the histogram to make this look a little better
[1:00:20] uh this is uh bh also you've got two very distinctive peaks and then this is the same one so we've
[1:00:29] got bb okay okay so what's happening here what are you seeing seeing uh so remember the colors that you're
[1:00:41] seeing seeing the predominant colors means that whatever whatever you put in that channel whichever band you put in that channel
[1:00:50] that value is higher higher right and that's why it's predominantly that color and so everything that's predominantly green
[1:01:00] that means that whatever you put in the green channel in this case we put hv in the green channel
[1:01:06] is higher than vv vivi whatever you see in pink so pink is the combination of two colors right so it's a combination of
[1:01:17] red and blue so that means that whatever you see as pink pink is a combination of what's in the red
[1:01:25] channel and in the blue channel and that's what you would expect because we have the same band in the red channel as in the blue
[1:01:35] channel we have vb in the red channel and we have vb in the blue channel so it means that in vv these areas are
[1:01:44] very bright so you get double bounds and this is some sort of flooded vegetation and in the vh you're not getting that
[1:01:53] double bounce so remember vh is sensitive it depolarizes in areas where you have a vegetation but wherever you have
[1:02:02] flooded vegetation it really doesn't penetrate especially dense flooded vegetation it doesn't penetrate or it's least likely to
[1:02:13] penetrate penetrate to the ground and detect that that flood state state so that's why in ph these areas are dark and in vv
[1:02:24] they're bright they're just popping out okay and so we see all along here these pink areas are areas where it's brighter in the vv
[1:02:40] than in the vh and these are probably fields that are either flooded or they're wet they're wetter so
[1:02:49] remember when the dielectric property increases there's more reflectivity and and that might be what we're seeing here
[1:03:04] all right and then the dark is open water all right so let's let's carry on and let's do an rgb quickly here of the one
[1:03:20] for october 4th open rgb and we'll do the same band combination now this bad combinations and radar
[1:03:29] uh it's not like optical it's more of you just need to play around and and find the optimal
[1:03:36] band combinations more than anything you need to understand color combinations right and and the information content that is
[1:03:46] popping up when you do these false color composites based on the different colors right so if something is green that
[1:03:54] means that whatever's in the green channel is predominantly is brighter than whatever's on the other two channels if something is
[1:04:03] pink it's a combination of blue and red if something is yellow it's a combination of red and green
[1:04:12] so that's the best way to interpret these false color composites okay so let's open this one and again
[1:04:19] let's let's and this is interesting so this is the one from october 4th and same same combination bv vhb
[1:04:28] uh interesting here take a look at this histogram histogram it doesn't have that double peak it just
[1:04:37] has one and so the reason for that is because the water is quite rough it was probably a windy day and so there's
[1:04:43] quite a bit of rough roughness here in the ocean and so you don't have those really low
[1:04:49] values over water as as you have here for example so so so here in the vh you do have the distinctive
[1:05:00] two peaks one water one land and then red is the same we have vb so much okay
[1:05:34] okay so more or less there you go and and you can just just from the two rgb
[1:05:44] images that we've created you can see um differences right away especially around this coastal area so there is some
[1:05:53] vegetation i think there are mangroves or grasses around the coastline and you can see that that is evident
[1:06:01] here here but certainly it's not as bright pink it's it's not as as as the area is not as vastly inundated as
[1:06:11] it is after the events okay so you will have a better sense when we then put these both of these
[1:06:18] together together all right so the next thing we need to do is in order to run a classification with
[1:06:25] the sentinel toolbox it needs to have the images that you're going to run the classification on in one file so we need
[1:06:32] to stack these files and the way to do that is you go to radar radar then you go to co-registration
[1:06:40] and you go down to stack tools and say create stack okay so you press the add button
[1:06:47] and and up up pop all of the files that you have open in your window and you need to deselect
[1:06:56] the files that you do not want to stack so so let's just remove the files that we do
[1:07:10] not want to stack and so you select them and you say minus to remove them and then you go to the next window
[1:07:23] and you need to change one parameter here it's called initial offset method change that from orbit to product
[1:07:29] geolocation geolocation and and then in the right i just the new name will have the stack tagged on
[1:07:41] and you run okay so you run it and the new file name so the new file name is called stack so i'm
[1:07:55] just going to remove these now okay okay so so here are my bands we have eight files in here
[1:08:19] so we have bv and vh and for for each file and and we have them in db as well for each file
[1:08:35] so so let's just focus on the db ones there we go everything looks good and those bright points that you see you
[1:08:48] you shouldn't be seeing those those are actually actually the training areas that i selected i'll show you that in a little bit
[1:08:55] okay okay so so what we'll do now is we'll create an rgb of both files so open rgb image window
[1:09:06] and what we'll do is we will put the image image the vv image after the event in the red
[1:09:18] channel channel we'll put the vh db image after the event in the green channel channel and we'll put the let's put the vh image
[1:09:29] before the event in the blue channel okay so one thing we want to look at here is or detect is not only
[1:09:42] flooded vegetation but we also want to detect open water surfaces and this will pop up here i will show you so let's first
[1:09:52] stretch this histogram to see things a little better okay ah beautiful okay okay so what we do is we'll zoom in
[1:10:31] and we'll just look around and so these areas around here are are inundated vegetation along the coast
[1:10:47] all of this inundated vegetation the white areas remember you have double bounds in in urban areas so these white
[1:10:56] points that's that's urban that's infrastructure okay and the dark areas means it's dark in all three images
[1:11:10] now the blue areas remember we put the before image in the blue channel so that means the blue channel is higher
[1:11:18] and and whatever's in the green and the red is lower lower and so that means that the reason
[1:11:27] things are lower after the event is because because there is water in the surface there's open water here that wasn't there
[1:11:34] in the image before the event okay so all of these blue areas means there's open water that's
[1:11:41] that's new that's non-permanent okay so the black areas that's permanent open water the blue areas is uh
[1:11:50] uh non-permanent i'll call that non-permanent open water look at the channels here these are river channels you can't actually see the the river but
[1:12:05] actually but they are channels and i know some of you are interested in detecting like channels channels uh
[1:12:13] uh and i'll show you how to train these in the classifier okay okay so what else oh here we see in these
[1:12:22] areas we see these agricultural plots plots where it's very red that means it's brighter brighter in in whatever is in the red channel and
[1:12:35] they're probably red these fields are probably red because uh they're wetter not necessarily because they're inundated but their soil
[1:12:43] moisture is much higher than before the inundation occurred okay okay so remember this is about seven days
[1:12:53] after the event and some of the water has receded by then all right so all of these black
[1:13:04] dots that's all open water permanent open water and so the next thing we want to do is train our classifier
[1:13:16] okay so what we'll do is we need to define the classes and i have defined a number of different
[1:13:26] classes classes that are representative of the land cover in the image and so i will i will i'll walk you through the process
[1:13:38] so in order to define a class you go to vector and you say new vector data data and
[1:13:46] and we'll call the first class flooded vegetation vegetation and and then you go in here and all of the areas
[1:14:04] that are just very bright pink uh uh so you select the the polygon tool or the rectangle tool and you draw a
[1:14:17] rectangle rectangle so we'll call it so you'll define that as a okay so that's how you define a
[1:14:27] class class and you want to make sure that you select one enough pixels to fully characterize your class so make sure
[1:14:35] your class is not characterized by 10 pixels right you you want you want a good distribution of the pixel values
[1:14:42] that represent your class and so let's then uh so pick a number of classes and i did
[1:14:55] this already so these boxes that you see those are the classes that i've selected to train my
[1:15:03] inundation inundation class okay all of all of these here and and the next class i defined was so once
[1:15:18] you're done with that then you say okay well the next class is and i'll call this water too because i
[1:15:24] have my classes already loaded up so i don't want to confuse names names so i'll call this water 2
[1:15:32] and and i will draw draw order two and i will draw my rectangle over an area that's
[1:15:42] representative of water actually this is permanent water and so you want to select pixels that are representative of water
[1:15:52] along your image so i select it here and and i select it in different places okay so the next class i selected was
[1:16:06] uh non-permanent water and that class is here so the areas that are blue we said those are
[1:16:14] uh uh open water bodies that were not there in the image before the events and so those
[1:16:22] are these blue areas here okay so these are all the the rectangles defining my non-permanent water class
[1:16:38] then i picked another class called irrigated fields or or saturated fields and those are these red fields okay
[1:16:49] and so so there there's one and so i just drew a rectangle over some of those red areas
[1:17:05] there's another one all right the next one i chose is river channels i mean you can distinctively
[1:17:11] see these channels so i thought all right i'll try to classify those and here's one so i selected a couple here's another
[1:17:20] one across the image that would represent the variety in values that are found in those channels here's another one
[1:17:30] here's another one and then i selected urban areas since those have very distinctive backscatter double bounce and you can't see it very well here but
[1:17:46] this green rectangle that's those are my urban areas here here and then finally the last class i
[1:17:59] selected or i defined was vegetation and so vegetation is anything that is greener has some darker tone in green so
[1:18:10] i selected a couple of rectangles or i defined a couple of rectangles along the image here here
[1:18:27] and and a couple more in other parts of the image so overall i mean obviously your your
[1:18:34] classification is going to be as good as your your as you train it so keep that in mind and if you're not
[1:18:42] happy with your classification it's always good to go back and try to refine your classes see what's the source of
[1:18:47] confusion and then try to refine your classes classes all right so once we have all of the
[1:18:51] classes the um trained then you go into raster raster and you select classification and there are two options here unsupervised and
[1:19:01] supervised supervised and i chose supervised that usually gives you better results than the unsupervised so of all of these i chose random forest
[1:19:12] classifier i've had a lot of comments about about the the the results using other classifiers and you can actually just run your
[1:19:24] classification all of these classifiers and compare it but of of all of these actually random forest is one of the most commonly used
[1:19:33] classifiers and it yields very good results results and one of the reasons for that is with other like maximum likelihood for
[1:19:41] example if you use several information layers like several images you've got two different dates h h h v
[1:19:51] and and you might use other layers of information like a dm and and so the more information layers
[1:20:02] you use some can add confusion so not all of them equally can can identify each class right so some
[1:20:13] information layers might be really good at identifying one class but not so good at identifying other class so some are a
[1:20:21] source of noise basically to identify certain classes classes and so random forest actually actually it doesn't really matter how many
[1:20:34] input layers you have in your file uh it really it it deals with that by just creating many different decision
[1:20:41] trees and voting on what's the what are these decision trees uh telling you which pic which class should the
[1:20:51] pixel pixel be classified as uh so it's overall it's it's much i think it's a much more robust way of
[1:21:00] running a a classifier okay so having said that let's go ahead and run the classification classification well i'm actually i'm not going to run
[1:21:12] it but i'll show you how to run it so you click plus to define the file that
[1:21:17] you want to classify and the one that we want is the stacked one so we don't want these
[1:21:30] so we want to stack file and then you go to the next window and these are the classes that i defined
[1:21:38] actually actually so it's up to here here these other two were the examples i showed you and then down here are the files
[1:21:54] that we want to use to generate this classification and so we'll use the db files files and then here
[1:22:03] it's just specifying the file name so it tacks on rf for run and forest and the output directory
[1:22:12] and so you run it and the results are here you get a new file that's called that has rf i call it r3 actually
[1:22:22] and and the results this is the classification result now the colors are not really representative of the colors
[1:22:32] of the actual classes so let's just go and change the color table so you go to color manipulation down
[1:22:41] here here and and you select for flooded vegetation let's make those pink for for inundated fields or saturated fields
[1:22:56] we'll make those red for non-permanent water we'll call that we'll make that black for permanent water we'll make that blue
[1:23:06] the river channels will keep those as dark green urban areas let's make those white and then vegetation green
[1:23:14] and that's there you go that's our classification and now let's just do a side by side comparison
[1:23:23] to okay okay so so we do a tile horizontally and and and note the nice thing about the
[1:23:40] classifier is it just classifies the areas where there's coverage and and the same coverage in in both images so
[1:23:48] these areas these overlapping areas here here are not included in the classification okay so let's go and let's just pan
[1:23:59] around around take a look at some of these results so okay okay so the areas along the coastline where
[1:24:10] you have flooded vegetation is picked up nicely actually rather nicely the open water is great that's very easy
[1:24:21] to identify the areas where there was non-permanent water so the inundated areas that had open water water are the ones in blue
[1:24:37] so so we're picking those up and what i called the fields we're picking a lot of those up
[1:24:54] but they are prevalent in the image the channels are picked up the river channels so it is very noisy it's not perfect
[1:25:08] there is some noise and so what we can do is apply a filter to try to clean some of that noise out
[1:25:17] and so we'll just select the file name and then i'll apply the filter and what we'll do is we'll apply a
[1:25:32] median median 3x3 filter and and okay so this is our median and we need to set the colors
[1:25:57] so okay okay so uh just flooded vegetation cyan is so actually okay there so i had the color palette saved
[1:27:11] and let's compare this with the previous one one let's do that horizontally horizontally and you see it makes for a cleaner
[1:27:24] overall a cleaner classification now if you since this you're looking at flooding flooding you can also clump the classes
[1:27:36] and you can merge so say for example you can merge those river channels you can just say
[1:27:43] that's that's green okay i apologize for some reason it's not taking the colors that i'm assigning to it
[1:28:04] all right but you can merge the classes okay so if you just want to have like for example these
[1:28:10] flooded areas then you can make everything else green and just keep the red red keep the blue well that's permanent
[1:28:17] water keep the black and then keep the pink and one last thing that you can do is
[1:28:24] you can export this and overlay it on google earth so you can export the whole thing as a geotiff
[1:28:31] too too but here you go to you go to the image you right-click and up pops a window and you select export
[1:28:38] view as kmc and and that's it you just press save save and here's how it looks like
[1:28:47] so here i have merged the classes and i've overlaid it on google earth and so if i
[1:28:59] uh uh there you go so there all right so that is that marks the end of this demo
[1:29:12] and and i am now open to your questions thank you very much for your attention okay all right so let's start with the first
[1:30:06] question are there any recommended reading or online books that may improve our knowledge about radar and references
[1:30:16] actually there are and what i'll do is by the end of this training or on the rsi website i'll be
[1:30:23] sure to include some references there are other tutorials and there are data recipes so actually the alaska satellite
[1:30:29] facility facility where you download the data if you go to tutorials they have data recipes and they walk you
[1:30:39] through through some through steps on how to do different things anywhere from geocoding and image to creating a
[1:30:48] digital elevation model interferometric stuff how to mosaic to images it's a really great resource and i can point you to other references
[1:31:02] as well i had the european space agency usually usually recently had a sar training and they had some demos
[1:31:10] and a lot of those demos are online so that training is called echoes in space okay so
[1:31:19] does the soil particle size affect the back scattering loam silt and clay soils it will the texture of the soil
[1:31:31] has an influence but really more than anything it has an influence influence on what has a greatest the greatest
[1:31:40] influence is the roughness of of the soil uh and the amount of water in the soil and so
[1:31:49] the next webinar will the one on august 14th will cover not only crop mapping but how to
[1:31:56] characterize soil and dr heather mcnair will show an example on how to calculate soil moisture is there any useful usage of incidence
[1:32:05] angle do we use them by any means actually uh more than anything what you should keep in mind about incidence angle is if
[1:32:15] if it's too large then you need to be careful because your same class can look different if it's at the one edge of the
[1:32:26] image in the near range and in the far range range and so what you want to do is
[1:32:34] you want to classify that class and i would call it like forest the near range and forest in the
[1:32:41] far range just to make sure that you can classify it properly i wonder if sar could be used to study sudden flash
[1:32:53] flood in desert areas it could be the problem is that it doesn't have the temporal repeat that
[1:33:00] you would want to monitor a flash flood so so for example sentinel one is an operational satellite which data is
[1:33:09] freely available and each satellite so there are two identical satellites sentinel 1a and sentinel 1b and each satellite has a 12-day
[1:33:20] repeat pass so between the two of them it's every six days and flush floods tend to be very very quick events
[1:33:28] have you had the chance to have worked on finding the optimal decision lines and h alpha decomposition for dual pull
[1:33:35] vv vv and vh sentinel one i'm sorry i have not had the chance to find the optimal decision lines in the h
[1:33:44] alpha decomposition usually when you have two polarizations it's best to just work with image ratios and when you have four polarizations
[1:33:53] that's where decompositions are really uh very helpful what are your thoughts and available and new if any parameters for dual pole data
[1:34:03] let's see your thoughts on available and new for dual poll data i'm not sure what you mean by parameters like
[1:34:16] you mean things that we can derive from the data or ratios so what comes to mind is
[1:34:23] is trying out ratios or applying textures i talked about textures in the last demo so the sentinel toolbox has an option to
[1:34:33] generate textures and sometimes those can provide useful information to separate classes that might be very confusing regarding the ascending and descending
[1:34:46] difference in viewing angle is it correct that they should be compared even with geometric correction that is
[1:34:52] correct even with the geometric correction they should not be compared you can compare the product but you
[1:34:58] should not mix them in the same analysis is it always recommended to do speckle filtering before terrain correction
[1:35:06] instead of speckle filtering as a last step it's it's yes it's recommend the last thing you want to do is terrain correction because
[1:35:18] terrain correction is uh it's correcting the effects of the geometric effects effects the distortions of the terrain and
[1:35:34] it is changing it is doing some some changes in in the pixel values and so yeah it's
[1:35:47] you don't want to apply the speckle filter after it does this correction you want to apply it before
[1:35:54] which band is good for water body extraction extraction hv is good for water body extraction talking about floods due to hurricanes
[1:36:03] is it possible to monitor hurricanes with tsar which kind of approaches recommended i'm thinking about this one so
[1:36:20] sar is normally not used to monitor hurricanes but there are so sorry is an imaging radar and there are scatterometers which are
[1:36:30] non-imaging radars and those are used to look at wind wind winds on the surface of the ocean and
[1:36:39] and look at wind and assess wind speeds and so and wind directions and so that is useful to monitor
[1:36:51] hurricanes per se but not sar on what basis and also sar remember you don't have the temporal
[1:37:00] repeat repeat really to do monitoring of hurricanes on what basis should we adjust the histogram histogram on on
[1:37:10] on how you and how things look right so you really want to adjust it so that you see the
[1:37:17] features so that they're not washed out so it's not too bright or it's not too dark can sar be used to detect rain or snow
[1:37:29] inundation or are the dielectric constant for ice and liquid water too similar actually ice and liquid the dielectric
[1:37:37] constants for ice and liquid water are very different so for ice it's about three for liquid water it's about 80
[1:37:45] and so there is there are atmospheric radars that are used to detect rain and that's they use much much much
[1:37:58] higher frequency so much shorter wavelengths wavelengths at the at the so that they interact with the particles
[1:38:08] in the atmosphere so so radar is used to monitor rain rain on snow inundation okay okay rain on snow inundation
[1:38:21] so so i guess you're talking about snow that has puddles of rain over it i'm not exactly sure
[1:38:29] in that case you can just you'll detect a wet surface actually if you have rain on snow the
[1:38:38] snow is probably wet as well so if if the rain is puddled on the snow then you'll be able
[1:38:47] to detect the open water and differentiate that from the snow surface surface is it better to stitch images over an
[1:38:54] area prior to analyzing them or should they be analyzed separately so if your images are from contiguous
[1:39:01] passes passes you should mosaic them right if your images are from from different dates you should treat them
[1:39:10] differently how do this to distinguish flooded versus non-flooded forested channels and urban areas okay okay so uh okay
[1:39:32] i think this was explained in the presentation in forested areas whenever there's flooding you have double bounds
[1:39:41] in urban areas you have double bounce regardless so the same backscattering mechanism is found in urban areas
[1:39:49] and so it's very difficult to distinguish to separate flooded vegetation from urban areas you can try some sort of like texture
[1:39:59] filter filter what are the factors that affect the depth of l-band penetration through bare soil soil the primary factor
[1:40:07] is the amount of water in the soil that's that's by far the greatest factor and so if you have a large amount of water
[1:40:16] you're not going to penetrate almost at all just maybe the top couple centimeters centimeters if the soils are really dry and there
[1:40:23] have been studies looking at penetration through really dry soils then it can go down to a meter even two
[1:40:31] are we able to do classification using only one polarization great question actually this was a question i couldn't
[1:40:37] get to last time yes you can and i i have a lot of experience doing that so you can
[1:40:45] use one polarization you can apply texture filters you can use like ancillary data sets like a dm for
[1:40:53] example example and and you can generate a classification so with just there's plenty of information in just
[1:41:02] one class sorry and just one polarization if you take a look at at one of the images so let's just load
[1:41:09] this up if you look at just one image right i mean visually there's a lot there in this image
[1:41:18] there's a lot of variability and and so yeah you can classify just one image whether it's hh or vv
[1:41:26] so visually you can just classify based on the different tones from very light tones medium dark super dark
[1:41:40] okay and then and and textures might help as i mentioned mentioned separate depending on what your sources
[1:41:47] of confusion are textures might be able to separate some of that confusion in some research thresholding dark pixels as water is
[1:41:59] used to distinguish flooded and non-flooded area can this approach still correct correct given that flooded area appears white
[1:42:07] trash holding dark pixel as water is used to distinguish flooded and non-flooded area okay i guess it depends
[1:42:14] on what you're talking when you say flooded because with radar there are two kind of flooding conditions there's open
[1:42:21] water which is a specular surface and then there's flooded vegetation which is a double bounce and so yes you can use
[1:42:30] a threshold definitely in fact if you take a look at these images even just taking a look at the histogram
[1:42:37] you can see how distinctive water is from everything else right and so uh and and so easily you can just apply
[1:42:47] a threshold where everything above this value here which would be 14 d minus 14 db would be land and everything below that
[1:42:56] is water and the same thing for these um inundated vegetation areas they're just so much brighter than
[1:43:04] everything else that you can look at their valleys by the way if you go to pixel and you pan around
[1:43:10] you can see the values of of at the pixel level so let's just zoom in so you can see what i mean
[1:43:19] and so if i if i pan around here right you're seeing the value up there so we have a db value in this area of
[1:43:30] minus two and if you pan around even like these brighter areas it's much lower so so yeah you can just
[1:43:38] set a threshold and say all right everything above minus 3 db is is is flooded you know and you are going to get it
[1:43:50] confused with urban areas and that that's the issue but but but yes you can use thresholds okay if you have no urban areas then
[1:44:00] it's much easier in some research trash no okay we can we use knn classifier for inundation mapping using sentinel one data okay
[1:44:11] that's a great question actually that's a very relevant question because i read your mind and i knew that
[1:44:19] this question was going to be asked and so what i did was was i generated a classification using a
[1:44:28] that that using using the the k n classifier and and it's part of the options here in the
[1:44:39] sentinel toolbox if you go to raster classification supervised k and n and and so so let me just load up
[1:44:50] it turns out the results were quite similar to the ones from uh uh the previous from the
[1:45:01] random forest i i tend to prefer the random forest one it just picked up some subtleties that the k n
[1:45:10] did not pick up so i i won't get to it but this is this is the result from
[1:45:17] running the k n classifier and you can use the same images the same stack the same classes and just run that so what i
[1:45:23] suggest is explore the results that yeah you can get with these different classifiers just compare it and
[1:45:31] and determine which one uh gives you the best results so that's not it sure sure okay okay in the classification exercise there was
[1:45:43] clearly an impoundment water behind the dam yes on the downstream side there was a linear feature of very pixels this
[1:45:50] appeared to be a channel however it was not clear whether this might be an overgrown stream or perhaps flowing
[1:45:56] water or both is it possible to distinguish this so let's go ahead and take a look at what you're talking
[1:46:02] about about so so this is what you're talking about and let me read the rest of your
[1:46:17] okay uh there was a linear feature this appeared to be a channel so this this channel here
[1:46:37] the river a small river i'm wondering if that's what you're referring to okay okay so what this is
[1:46:48] that's actually that is actually specular reflection here what you're seeing because it's dark so there is water running there
[1:46:57] through that channel and let's see if we pick that up let's see uh okay so if you're looking at the one
[1:47:25] here we partly picked that up in some places so i think that's what you're referring to to all right
[1:47:43] we have gone through the process with aylos pulsar and sentinel one see band is there an l band for the same area
[1:47:49] from sentinel or another radar image ah that is the million dollar question you know we've talked about all of these
[1:47:59] uh different options uh or parameters radar parameters and different wavelengths and polarizations and it comes down to what data is available
[1:48:13] and so really the only data that's freely available right now radar data is sentinel one so that's a c-band image
[1:48:23] and and it has it's been operational since 2014 uh aylos pulsar is l band and it it's
[1:48:37] there's data between 2006 and 2011. so they don't even overlap unfortunately but that's just what's available so
[1:48:45] unfortunately we have to kind of live with what's available but it'll be it'll change change the the future looks very bright in
[1:48:51] terms of radar there are several sensors coming up in the next couple years which is very very exciting
[1:48:59] when would you use multi-look versus filter and deciding on the overall filter size okay so multi-look is usually used
[1:49:07] when you have the slc images those have radar amplitude and phase uh but uh the sentinel one toolbox also
[1:49:17] with the sentinel uh with the sentinel toolbox you can apply a multi-look on the grd image and what
[1:49:24] it does is it takes your image and it resamples so basically it applies it applies like an uh an average filter
[1:49:33] and then it resamples the image so it lowers the size of the images it's uh uh and and the overall filter size that
[1:49:43] totally depends on your area right so if you have a lot of heterogeneity in your area you really
[1:49:49] don't want to use a filter size that's too large because uh you're gonna lose that that that heterogeneity it's
[1:49:57] going to be kind of average or lost in the large window window but if speckle is a big issue and your
[1:50:06] classification is just too speckly and too noisy then you do want a larger filter so there's always that trade-off
[1:50:14] unfortunately unfortunately all right you mentioned about texture of urban areas how would you look at that okay
[1:50:22] okay the way you look at that is you apply a texture filter and the way you apply a
[1:50:26] texture filter is you go to raster image analysis texture analysis gravel grade level covariance and you go to processing parameters and
[1:50:36] here's a whole list of different textures textures and these are especially helpful when you're using like one one band so
[1:50:47] texture texture urban areas will be as bright as the flooded areas as we just saw i illustrated and so some of these can
[1:50:55] have some of these textures can have different values in flooded areas versus urban areas and and you need to
[1:51:01] experiment with that but i found that there was one like entropy for example that helped when you had large urban areas and
[1:51:08] flooding but flooded vegetation around that it really helped to separate those to distinguish those two okay what kind of
[1:51:22] polarization would be best for surface wash off of soil close to the shorelines or river backs hmm
[1:51:35] hmm surface wash off i'm not sure what you mean by surface wash off of soil like soil erosion
[1:51:47] uh maybe you can be a little more specific specific can sar be used for extracting soil moisture can you recommend any trainings
[1:51:55] and rs other than smap okay okay here's one thing for you guys to know so there's map up there and smap is
[1:52:04] generating saw moisture products every three days on a global basis at nine kilometer resolution it uses a passive sensor called the radiometer
[1:52:14] that operates in the microwave in a microwave frequency at l band actually actually radar can be used for extracting soil
[1:52:23] moisture moisture the problem with radar is it's very complex this is not really simple or straightforward to extract soil
[1:52:31] moisture using sar and the reason for that is remember you have a signal that's going through the medium so if
[1:52:37] you have vegetation there it's interacting with the vegetation part of that signal is reaching the soil then it's
[1:52:44] returning part of that signal as it returns it might have other interactions and then it returns to a satellite so
[1:52:51] that signal has a combination of many things right it part of it is you've got a component that's the
[1:52:59] vegetation and you've got a component that's the soil so basically the way it works is you need to tease out the
[1:53:06] vegetation component to get to soil moisture moisture so it's not that straightforward dr heather mcnair she's going to do an
[1:53:13] example of this in the next session okay so the next one how does one reduce scalloping effect in sentinel
[1:53:25] one slc so i think this is in regards to an email that someone sent me about this um
[1:53:34] this banding effect and you know it's very difficult to get rid of that banning effect that banning effect is
[1:53:43] due to an error in the processing or some issue with the processing of the data data and so
[1:53:50] it's like the landsat images that have this banning effect it's just very hard to work with that so
[1:53:58] i would suggest just using images that don't have that scalloping effect can you suggest a good reference text
[1:54:06] for sar applications there are a lot and it is hard to know which is better okay so this one is
[1:54:17] hard to answer because there's just so many applications it's more what would be helpful is if you have something in mind like
[1:54:25] whatever your research is uh uh you're looking at oil spills cancer help me detect oil spills then i can tell you
[1:54:33] yes or no but uh but just generally sar applications they're they're a lot they're a lot can we measure snow water content from
[1:54:45] sorry data which bands are best and to which extent for snow monitoring depth penetration etc so snow water content
[1:54:53] that's the holy grail i think whoever can figure that out well well will win the nobel prize
[1:55:02] if there's ever a nobel prize in this area area so so it's very tough okay okay there are many studies using sar data to
[1:55:13] look at snow especially when snow goes from a dry state to a wet state and so with the shorter
[1:55:22] wavelengths wavelengths the ones that interact at the top of the surface surface they're very sensitive to a change in
[1:55:29] dielectric in snow so for example the beginning of the the thaw up in the northern high latitudes when that snow starts to melt
[1:55:39] there are i think that there have been some publications looking at snow depth because of penetration so if you look
[1:55:46] you use different frequencies uh obviously the longer frequency will penetrate deeper through the snow than the shorter frequencies so i think there
[1:55:55] have been studies using like k u band and l-band to try to look at snow snow depth
[1:56:04] depth and penetration is going to be limited by obviously how wet your snow is so the wetter the snow the less
[1:56:11] penetration penetration we all know an urban area when we see it when does urban change to nar urban for
[1:56:18] sar purposes how do we recognize that transition transition say in a visible image that's a good question that's that's a
[1:56:27] great question i think it varies but usually urban areas yeah there's there's a large urban areas okay so there's a lot
[1:56:37] of of density in the middle you've got a lot of buildings you got a lot of concrete
[1:56:42] and then the further away you get from the middle you start getting the surroundings which are usually
[1:56:48] usually pasture lands or or or agricultural lands or more natural ecosystems ecosystems so it's that prairie urban area
[1:57:03] so when does it change to non-urban when you don't see that double bounce that's when it changes
[1:57:09] when you start seeing more volume scattering is there a way to filter out correct is there a way to filter out or correct
[1:57:20] for rfi interference prior to working with sentinel one or other radar sat data using the toolbox so
[1:57:32] so rfi interference usually that's filtered out already in most cases it's not a a big deal in dealing with these images
[1:57:46] i don't at the as far as i know the sentinel toolbox does not have an rfi filter
[1:57:55] filter how will you do a multi-temporal flood detection over a rainy season what kind of information do you receive
[1:58:02] google earth has sar grd data have you played around with it okay so how do you do a multi-temporal
[1:58:10] flood detection over a rainy season so what you do is is especially with sentinel for example you've got your coverage every six days
[1:58:21] so your area of interest if you're looking at like length of inundation say for a pixel right how long during
[1:58:30] a season how long every two weeks you're looking at the same pixel is it inundated is it not and
[1:58:37] then you can determine how long that pixel remains in the native i think i hope that answers your question google
[1:58:44] earth has a sargera d data so i have not played around with it but i know that
[1:58:49] the sentinel sar data is in google earth engine and it's a great resource because you can do
[1:58:55] analysis on the cloud and that's much easier than downloading the data which other early satellite images could
[1:59:04] be compared to sentiment one should one need to compare the changes in an area before before 2014.
[1:59:12] 2014. so which other early satellite image could be compared to central one right now i so let's see
[1:59:32] there is not that much that's freely available that you can compare the best what the best thing that you have to
[1:59:39] compare compare is the a-los pulsar there was a satellite satellite that flew in the 90s it was a japanese
[1:59:48] satellite it was a precursor to aelos pausar and that's called jrs1 jrs1 okay and that was an l-band sar sensor
[2:00:00] and the alaska satellite facility has the data however it has restrict restricted access so you need to
[2:00:10] to uh basically submit a request for access of the data and that satellite covered uh let's see it flew from i think around
[2:00:22] 1992 1992 through 1990 around there however however there was a project from that satellite called the global rainforest mapping
[2:00:34] project project and they created globe uh mosaics over uh uh major wetland regions around the world and they created these mosaics and
[2:00:48] for the wet season they created one mosaic in the wet season and one mosaic in the dry season and i and those
[2:00:55] mosaics are available in fact if you send me an email i can point you to where you can access these mosaics so if
[2:01:03] you're interested in south america for example example the the the uh the mosaic for the dry season was
[2:01:10] uh uh with images acquired during a three month period i think it was in 1996 and the one for the the wet season
[2:01:19] was around the same year with images acquired during a three-month period during the what season okay so
[2:01:31] so anything else okay there's a question here you mentioned about using ratios of two polarizations to reduce speckles on
[2:01:51] images i think you misunderstood me because because you you do ratios to to maximize your information to really look at the unique
[2:02:01] information content in one image versus the other but not to reduce buckle [Music] [Music] suspended sediments movement mapping is
[2:02:22] it possible from sar so remember sar is sensitive to structure and the dielectric properties of the surface
[2:02:30] not to the chemical properties of the surface so if you're looking at like suspended sediments i i guess
[2:02:37] that would translate into the color of the water and that would be optical would be more appropriate with
[2:02:45] that now if the suspended sediment changes the roughness so if there's an indirect link if it changes the roughness of your
[2:02:52] water surface then you might be able to tell tell the areas where you have suspended sediments sediments versus areas where you don't
[2:03:08] where can i find data for florida the sentinel uh a la this alaska satellite facility has global data
[2:03:23] okay and thank you everyone for your kind comments i think that's it for our session and the questions
[2:03:31] anything anything else please please just send me an email i'm seeing a question here i'll just get to this
[2:03:38] one last question what is db value range for soil vegetation crop and water body wow that's a really loaded question
[2:03:46] and so it depends if you're looking at it with with ph or vv or hh or hv
[2:03:55] actually hv and vh are going to be about the same but but generally with for vegetation you're
[2:04:01] going to see db values that are higher than than for water bodies water bodies will be very low as you've seen
[2:04:09] around minus 20 it depends on the sensor too the noise level for soils it's if it's bare soils it
[2:04:20] might be uh similar to to water bodies maybe a little higher so it just depends all right
[2:04:31] all right so is that it for the questions all right thank you very much uh please tune in to the next uh webinar uh again
[2:04:42] at the same time on tuesday august 14th and remember the last one will be thursday august 16th
[2:04:49] and that one will be on interferometric sar the next one will be on crop mapping and and characterizing
[2:04:56] soils soils a great day or evening or morning wherever you are in the world and and see you all soon bye
