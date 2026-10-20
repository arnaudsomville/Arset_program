# SAR for Flood Mapping Using Google Earth Engine, Part 1/3

`https://www.youtube.com/watch?v=4Y2giuRPCuc` · id 127 · 2:07:56 · module 57 — SAR for Disasters and Hydrological Applications

[00:00] hello and welcome to the first part of the advanced synthetic aperture radar webinar series for disaster and
[00:06] hydrological applications i'm dr erica podest and i'm a scientist in the earth science division at nasa's jet propulsion laboratory in pasadena
[00:15] california california this series contains three trainings this one is focused on sar for flood mapping using google earth engine
[00:25] the second one on december 4th will focus on interferometric sar for landslide observations which will be taught by dr eric fielding from jpl
[00:35] and the third one on december 5th will focus on how to generate a digital elevation model and will be taught by
[00:42] nicolas gruenfeld from konai the argentinian space agency each webinar will have a theoretical part and a demonstration
[00:51] today i'll begin with sar theory as related to flooding and i'll then go through a demo on how to generate a
[00:57] flood product with google earth engine this session builds on the previous flooding flooding session using google earth engine
[01:06] each webinar will be done in both spanish and english on the same day there will be one homework associated
[01:15] with this webinar series and we will assign that homework on the last day it will be in google form
[01:22] to obtain a certificate of completion you must have attended all parts of the series and submit the homework by the
[01:30] due date which is january 8 2020 in all of the demos we have step-by-step instructions for you to follow and we
[01:40] will go at a certain pace through the demos but we will make the recordings available within 24 hours so you can go
[01:48] at your own pace learning objectives i expect that by the end of today's webinar you'll be able to
[01:57] understand the information content and star images relevant to flooding this is actually a review of what's been
[02:04] presented in the past it's important that you understand why the radar signal is sensitive to flooding flooding for those of you that have seen this
[02:12] already consider it a refresher i'll also show you how to use google earth engine to generate a flood map
[02:20] using sentinel 1 images in the previous webinar i did a demo using google earth engine to generate
[02:26] flood maps from sentinel 1 sar images by applying a threshold this demo will focus on generating a
[02:34] flood map to a supervised classification approach approach you'll also learn how to integrate socioeconomic data to your flood map in
[02:41] order to identify areas at risk i'll start out by defining what is meant by flooding from a radar perspective
[02:53] it refers to the presence of a water surface underneath a vegetation canopy regardless of whether it is forest or
[03:00] agriculture agriculture when i refer to an inundated forest it means that underneath the vegetation canopy there is standing water above the
[03:09] soil surface as shown in the figure on the top left in agricultural or herbaceous areas the leaves or stems of the plants
[03:18] visibly emerge above the water surface as shown in the bottom center figure radar can also detect flooding when or
[03:26] where there is no standing vegetation and i will call this open water such as the figure on the top right
[03:35] the type of flooding discussed in this webinar can be caused by natural processes such as the seasonal flooding
[03:41] of wetland ecosystems or as a result of a natural hazard for example hurricanes or extreme precipitation events
[03:52] some floods can also be human driven such as flooded rice fields assessing and monitoring flood extent can help reduce uncertainties in the
[04:01] spatial and seasonal extent of methane sources and sinks associated with wetland ecosystems or the cultivational crops that require standing water such
[04:11] as rice also flood maps can help monitor inundation extent and dynamics for disaster assessment and management this slide is a refresher of the radar
[04:28] backscattering mechanisms in general emphasizing with the red boxes the ones that are primarily relevant to flooded vegetation and open water
[04:38] in the far left there's specular scattering and that occurs when there is a smooth surface such as a calm
[04:44] open water surface and the signal scatters away from the satellite in this example the signal is coming from the
[04:51] left and scattering away from the satellite towards the right and this results in open water appearing very
[04:58] dark in the image the next type of scattering is rough surface scattering which results when there's some level of roughness on the
[05:05] surface causing the signal to scatter in different directions but mostly away from the satellite an example of this type of scattering
[05:14] would be a water surface that has some level of roughness caused by either short floating vegetation wind or heavy
[05:21] rain rain such an area would appear dark but not as dark as an open water surface that is
[05:28] completely smooth the rougher the surface the larger the signal scattered back to the satellite and the brighter that pixel will appear
[05:36] on the image the next signal interaction is volume scattering and that occurs when the signal is scattered multiple times in
[05:44] multiple directions within a volume or medium medium in the case of vegetation the signal can scatter from multiple components such as
[05:52] the branches stems leaves trunks or the soil soil and the final backscatter mechanism on the far right is called double bounce
[06:01] and this results when two smooth surfaces create a right angle that deflects the incoming radar signal off both surfaces causing
[06:10] most of the energy to be returned to the sensor sensor these areas appear very bright in the
[06:16] image and are commonly seen when there is flooded vegetation because of the interaction between the smooth water
[06:22] surface surface and vertical structure of the vegetation such as a trunk double bounce is also characteristic of
[06:31] urban areas here we have an example of the sar signal scattering over areas of inundated vegetation and open water
[06:46] this figure is an l-band hh polarized image from the japanese palsar sensor onboard the halo satellite over an area
[06:55] near manaus brazil the very bright white areas are flooded vegetation and the dark areas are open water so that river that's running
[07:05] through the middle is dark because open water is a smooth surface and causes specular scattering all of the very bright white areas
[07:14] throughout the image are flooded vegetation because of double bounce and the striking part about this image is that in some areas you can't see
[07:21] specular scattering from the river because it's the river is either too small or it's covered by vegetation but
[07:28] you can still see its extent through flooded vegetation because the signal is penetrating through the canopy and
[07:35] double balance is occurring this level of detail on flooded vegetation is truly a unique attribute of radar
[07:50] the satellite parameters that influence the sar signal response are wavelength polarization and incidence angle i'll start with wavelength generally the
[08:00] longer the wavelength the greater the capability of the sar signal to penetrate through the vegetation canopy all the way to the surface
[08:08] the table on the right lists commonly used bands in radar and their wavelength range range sars operating at x-band are generally
[08:16] operating at a wavelength of around three centimeters at c-band at a wavelength of around five centimeters and at l-band at a
[08:24] wavelength of around 24 centimeters as you can notice this range is quite wide wide there have been several studies that
[08:32] have concluded that l band is suited to detect inundation beneath a forest canopy and should be the
[08:39] preferred wavelength for this purpose however that capability of l-band and also other bands to penetrate some forested areas can be reduced or even
[08:50] non-existent depending on the gaps in the canopy or especially on the density of the vegetation as an example a couple years ago i was
[09:00] part of a team conducting wetland studies in the peruvian amazon and we overflew uavsar that's a jpll
[09:09] band airborne sensor over our site of interest and at the same time that we were overflying uavsar
[09:17] there was someone on the ground collecting in-situ data this person was in water up to his knees however the
[09:24] radar data did not see any flooded vegetation vegetation because the vegetation was simply too dense and the signal did not penetrate
[09:33] all the way down through the canopy in comparison to l-band the ability of shorter wavelengths such as c-band or
[09:41] x-band to penetrate vegetation the vegetation canopy is reduced although the penetration of c-band is limited in comparison to l-band studies
[09:51] have shown an increase in sea band backscatter for flooded vegetation during leaf on conditions and especially during leaf off
[09:59] conditions conditions seaband is especially useful if the density of the vegetation is low and works particularly well in agricultural
[10:08] regions regions or in areas of low biomass expand sensors for example terra srx in general have even more limited
[10:18] penetration through dense vegetation and as a result of high in interference with leaves where backscatter is dominated by volume scattering
[10:27] however there have been some studies that have shown the potential of x-band to identify flooded vegetation for
[10:33] sparse vegetation or leaf off conditions in this case the transmittivity of the signal through the canopy is increased
[10:41] due to gaps in the canopy or the very low biomass and the contribution of double bounds dominating the volume
[10:48] scattering scattering some other studies have demonstrated the ability of x-band to map flooded vegetation in wetlands in flooded
[10:56] marshland and in olive groves so in summary l band is better suited for dense vegetation but shorter wavelengths might give you
[11:06] reasonable results especially if there are many gaps in the vegetation so the shorter wavelengths are better suited
[11:12] for low density vegetation polarization refers to the plane of propagation of the electric field of the signal which can be har in the
[11:26] horizontal plane or in the vertical plane plane irrespective of wavelength radar signals can be transmitted and or
[11:33] received in different modes of polarization and there can be four combinations of both transmit and receive polarizations
[11:40] and these are horizontally transmitted horizontally received horizontally transmitted vertically received hv vertically transmitted vertically received that's vv
[11:52] and vertically transmitted horizontally received ph penetration depth is influenced by polarization in force hh tends to penetrate deeper into the canopy because
[12:04] it tends to be less attenuated than vv so hh is a better polarization to detect flooded vegetation especially in areas
[12:14] where there's a high biomass and you have something like l-band there's a higher likelihood that hh will penetrate
[12:25] through the canopy and detect that standing standing water underneath the vegetation canopy hv is more sensitive to volume
[12:33] scattering and is a good indicator of vegetation cover in general here we have an example of multi-polarization images from elos
[12:47] palsar over a part of the paccaya sumerian natural reserve in peru which is a vast wetland ecosystem
[12:54] these are l-band images at hh hv and vvv polarizations polarizations the very bright areas are where double
[13:01] bounce dominates and this is where there's inundated vegetation the very dark areas are open water and you can clearly see
[13:09] the river through the middle of the image as well as some open water bodies north and south of the river
[13:16] note the difference in backscatter magnitude between the different polarizations if you focus on inundated vegetation or the very bright areas
[13:24] dominated by double bounds the hh polarization is the most useful one for distinguishing flooded from non-flooded vegetation
[13:33] vv shows flooded vegetation to a lesser extent extent and even lesser by hp polarization polarization so in general hh penetrates deeper into
[13:45] the vegetation canopy than vv and when striking the water surface is more strongly reflected in comparison to the
[13:53] vv polarization hv is more sensitive to volume scattering because of its depolarizing characteristics so this is an example of an rgb image
[14:09] containing different polarizations false color images are an ideal way to visualize the information content of different polarizations through color
[14:19] combinations because you can see the information content that's unique to each polarization or combinations of polarizations here we have hh in the red channel hb in
[14:30] the green channel and vv in the blue channel the pink areas in the image are those where flooded vegetation is
[14:36] present here we have an example of the effect of incidence angle variation on the left is a sentinel 1 vv image and
[14:50] on the right is the incidence angle variation for this same image the radar is right looking and so note
[14:57] that as we move across the swath from near to far range the image becomes increasingly darker in tone
[15:06] around a 3 to 5 db difference in backscatter backscatter so if you measure for example the same
[15:12] forest at different incidence angles then the measured backscatter will be different even if there has been no
[15:18] physical change in the forest every surface feature will have a backscatter value that is a function of
[15:26] incidence angle so you need to be careful when comparing backscatter backscatter of a feature when there is a large
[15:33] variation in incidence angle especially if your feature is at the end at the near range and the
[15:39] far range of the image incidence angle can especially affect the appearance of smooth targets on the image such as open water
[15:48] smooth surfaces can appear brighter than rough surfaces at small incidence angles usually less than 20 to 25 degrees
[16:00] now let's discuss a source of confusion that might lead to errors when classifying open water and again this is
[16:06] a pulsar image it's near manaus brazil at three different polarizations hh hv and vvv and you can clearly see that the water
[16:15] is dark but north of the river there are areas that have either no vegetation or very low
[16:22] vegetation vegetation and so these areas can be confused with open water because uh ultimately ultimately they they they're very smooth areas
[16:32] right there's very little scattering going on in these areas of low vegetation vegetation and so their their backscatter
[16:42] response is similar to open water especially if it's open water with some level of roughness because of the wind for example
[16:51] they can be easily confused and one way to clear this up is by using image ratios such as hh over hb
[16:58] so you also note in this example that hh and vv have a much higher sensitivity to roughness of on the water surface to to
[17:09] for example wind and you can see that in hv open water is is very very dark it's much darker than
[17:16] an hh in bb so strictly to identify just open water hv is the better polarization [Music] [Music] another source of confusion that might
[17:32] lead to errors when classifying flooded vegetation are urban areas and here we have a pulsar image containing the city of manaus in brazil
[17:41] and its surroundings up in the northern part of the image and the image also shows flooded vegetation
[17:49] which which has a very bright backscatter backscatter so you can clearly see all of the flooded vegetation
[17:57] around the river and the city of manaus it's quite a large city it has a population of about
[18:03] 2.5 million people including its suburbs and the city appears very bright similar to flooded vegetation and the
[18:12] reason for this is because the dominating scattering mechanism is double bounce right angles form between smooth surfaces such as roads and vertical
[18:21] structures such as buildings causing this high return and one way to at least partly clear up this confusion between urban areas and
[18:30] flooded vegetation is through the use of texture measurements and textures they provide information about the statistics of the
[18:37] pixels within a box and the size of the box is defined by the user some textures such as energy or entropy
[18:46] provide information about the homogeneity or inhomogeneity of the pixels within the box and in my experience such measures help
[18:54] separate urban areas from flooded areas because urban areas tend to be more homogeneous than flooded areas sar datasets have improved significantly
[19:10] in the last couple years and this list here shows the legacy current and future sar data sets
[19:17] the ones with a green box indicate that the data are currently freely available and you can access those through either
[19:24] the alaska satellite facility or the european space agency's copernicus hub so note that the legacy data sets start
[19:32] with csats in 1978 it unfortunately just flew for a couple of months and then during the 90s there was jrs one
[19:40] japanese japanese l band tsar and ers one and two european space agency c bansar which went through the
[19:50] 2000s um with nvsat and alus 1 and radarsat radarsat then followed in the 2000s so currently there are a number of sar satellites in
[20:01] orbit like tandem x which is an x-band radar satellite from the german aerospace center radar sat2 which is c-band from the
[20:10] canadian space agency cosmos sky med which is an italian x-band sar and sentinel one which is a european
[20:17] space agency sar operating at seaband there's also pasar pasar which is a spanish star operating on x-band
[20:27] x-band there's salcombe from the argentinian space agency operating at l-band and there is rcm the radar side constellation
[20:37] from the canadian space agency operating at seaband so there are future satellites coming up and it's actually very exciting and the
[20:45] short term we're going to have a nysar which is a nasa indian space agency l and s band sar and this is
[20:54] going to be launched right now early to 2022 and biomass is a european space agency p-band sensor also to be launched around
[21:05] the same time frame maybe a little earlier earlier so the they're very exciting times ahead for for radar
[21:14] radar remote sensing [Music] [Music] and i want to briefly touch on nysar which is a nasa indian space agency
[21:21] satellite satellite uh as mentioned will launch in early 2022 operating at l and s i'll have a different modes of
[21:31] acquisition acquisition and the resolution the spatial resolution will be between 3 and 10 meters depending on the mode
[21:40] it'll provide repeated observations so have a 12-day exact repeat and these observations will allow for applications such as ecosystems hazards
[21:50] and disaster monitoring that include ecosystem disturbances ice sheet collapse collapse natural hazards such as earthquakes volcanoes volcanoes landslides
[22:02] landslides floods etc next i'll show you a demo on flood mapping using google earth engine so what we'll be doing here is using
[22:15] sentinel 1 sar images to map flood extent in an area in the east coast of the united states
[22:24] this area was flooded by a major hurricane called hurricane matthew back in 2016. so the approach here is to use google earth
[22:34] engine engine to run a classification a supervised classification and i'll walk you through each of the steps
[22:42] but before that i'll provide some context about the sentinel 1 images google earth engine is a great resource
[22:54] it's a cloud-based geospatial processing platform platform it's available to scientists researchers and developers for analysis of different ecosystems on
[23:04] our planet in order to use it you do need to have an account but it is free to open one up
[23:12] google earth engine contains a catalog of satellite imagery and geospatial data sets including sentinel one it has the
[23:19] entire sentinel one database so once you have an account open this is what the google earth engine code editor
[23:28] looks like it's based on javascript there are different windows and the actual you've got the actual code
[23:37] editor in the middle and you can save any sort of code that you write you can search for data sets there's a help
[23:44] button button there's a task manager and many different options as explained here so it's a matter of exploring there is a
[23:52] steep learning curve but but once you are familiar with the code and all of the different different options embedded into google earth
[24:02] engine it's really a wonderful resource and the best way to become familiar with it is just to
[24:10] practice and explore writing your own code the sar database on google earth engine contains uh the sentinel one
[24:23] and it's uh as mentioned um previously it's a sar sensor operating at c band and it's a satellite from the european
[24:31] space agency so they've got sentinel 1a data and sensor 1b data they are exactly the same satellites
[24:42] with the same sensor each satellite has a global coverage of every 12 days and so between the two of them you get
[24:50] you get global coverage every six days sentinel one has different modes of operation as listed here there's the
[25:01] extra wide swath mode and that's for monitoring oceans and coasts there's a strip mode and that's by
[25:08] special order only and it's intended for special needs like disasters then there's the wave mode which is
[25:15] intended for oceans and finally there's the interferometric white swath mode which makes routine collections over land and this is the one you want to use for
[25:25] flood mapping [Music] [Music] so if you go to the link indicated here you can access a page containing a
[25:35] description of the sentinel one catalog on google earth engine and this page explains the different modes of images housed on google earth
[25:44] engine as described in the previous slide slide all the images are in grd meaning they are in the ground range projection
[25:53] they are amplitude images there are no phase images on google earth engine just amplitude images now depending on the mode they might
[26:01] come in different polarizations and resolutions resolutions the processing applied was done using the sentinel toolbox and they've applied a thermal noise
[26:12] removal radiometric calibration and terrain correction so these images are all analysis ready images the only thing you will need to do is to apply a
[26:22] speckle filter and i'll show you how to do that as part of this demo our demo will be focused on a case study
[26:34] in south carolina which is a state on the east coast of the united states a hurricane called matthew made landfall
[26:41] in this state in south carolina as a category 1 hurricane late in the morning of october 8 2016.
[26:51] this hurricane was the most powerful storm of the 2016 atlantic hurricane season and it cost millions of dollars
[26:58] worth of damage all right so now let's start with the demo let's go through the sequence of steps that
[27:10] need to be applied to the image in order to generate a land cover classification on flooding so
[27:20] so this this powerpoint slide describes the sequence of steps first you load the images or images to be
[27:28] classified so we'll be filtering through the sentinel one database and identifying the images over our area of
[27:35] interest before the events and after the event event then we need to gather the training data so what we'll
[27:43] be applying here is a supervised classification approach and when you're doing a supervised classification you need to train your classifier so
[27:54] we'll be collecting training data to teach the classifier what are the statistics for each class that we
[28:01] identify identify and we'll be collecting representative samples of backscatter for each land cover of interest then we'll create the training data set
[28:12] that means we'll overlay the training areas over the images of interest and we'll extract the backscatter for
[28:19] those areas we'll we'll train the classifier and we'll run the classification so in this case we'll run
[28:25] a cart classification and then finally we'll validate the results results and in addition to this we will
[28:34] also overlay population density data and we'll overlay roads data and that's for you to know how to do this and
[28:45] be able to merge different data layers so that then you can really identify areas at risk or whatever your specific
[28:54] application might be if you want to identify perhaps roads that might be inundated or in in areas
[29:03] areas that might be the most suitable roads that might be the most suitable to exit the area
[29:09] that's the way to do it to overlay these different layers and then i'll finish off showing you how
[29:16] to export the data sets created onto your drive you can follow along with the demo for this part as well as the other two parts
[29:26] tomorrow and thursday by using the software that's indicated on the training web page so this includes the
[29:33] sentinel toolbox and creating an account with google earth engine instructions are included there and the recordings of each part will be made
[29:43] available on youtube within 24 hours after each demo for you to go through at your own pace
[29:51] all right so let's start by identifying the area of interest and we'll go to your google earth code editor
[30:04] so first of all we'll identify our area of interest by we'll select here here the the draw a line
[30:17] icon icon okay okay and we'll just draw a line more or less over our area of interest so that
[30:24] includes the city of charleston and south carolina here's the city of charleston charleston and let's just do something along these
[30:34] lines here okay okay and then you go up here this is the polygon that we just identified
[30:54] click on it click on the wheel and change the name from geometry to roi so that is now
[31:01] officially our region of interest that's where we want to focus okay okay so next we load the images or images to be
[31:18] classified classified so let's copy this code and we paste it on our code editor okay so what this is saying is we are
[31:34] searching the database for sentinel one images sorry images so remember this is a c-band sensor and and all of the images have been processed as
[31:45] discussed previously and they are in log scale so they are in db these images and so we're going through the
[31:54] collection the copernicus sentiment one image collection these are grd they're in ground range and we'll filter according to the
[32:04] instrument mode we talked about the interferometric wide swath mode that's the one we're interested in and we'll do an orbital properties pass
[32:13] so we'll we'll look at ascending images the resolution is 10 meters we want to do the search within our area
[32:22] of interest that we define as roi and we want vv and vh images all right so then we filter by date
[32:39] and we display the images on a map so let's just copy this and go back to our code editor
[32:48] and just copy and paste so we're filtering this sentinel one collection even further we're filtering it it to a time frame before the event so
[33:00] we're saying all right before the event was was what are the images between between october 4th and october 5th 2016 and the
[33:11] actual event what are the images between october 16th and october 17th 2016. 2016. okay and then we display these on the
[33:22] map so let's just run this and and if you go to layers on the on on the right on the
[33:33] top right here on the map you've got your two mosaics right so there are two mosaics created before the events and
[33:41] after the event so let's click on before the flood and that's a strange looking image so let's just go in
[33:52] click on the cog there and the reason it looks colored is because there are three images here it's
[33:58] it's it's doing an rgb we have two polarizations vv and vh so it's doing an rgb of vv vh vh so let's just
[34:08] visualize this image image just one so let's just visualize the vv and we'll select one band image and you can select
[34:19] either vv or vh let's just start with the vb we'll do apply all right so that's how
[34:25] our vv image looks like before the event all right so now if you remember the theory that we've covered
[34:37] you can just visually interpret this and identify areas areas that are urban so you know that urban areas are
[34:48] dominated by double bounds so all of these really really bright white areas those are urban areas that's the city of
[34:56] charleston here and you know that the really dark areas that's open water so you've got inland water here and then you've got
[35:07] the ocean water and there is some level of roughness obviously that's caused by the wind and that might cause some confusion in the
[35:14] classification classification this is vv with vh that water is probably going to look really really dark dark and then we'll we see a lot of features
[35:23] here in the image you see the these areas these are brighter those look like the flood channels
[35:32] and then you've got these darker areas and then here along the coast looks like there's some mangroves here along the
[35:40] coast all right so let's for kicks let's visualize the vh before the event and and here we're stretching the image
[35:51] according to the the range and this stretch is is adequate for vv but not for vh so
[35:59] let's just stretch this a little differently differently remember uh vh the values tend to be lower so let's just stretch it from
[36:06] minus 25 to five minus five there we go uh we can see you can see that the open water is consistently dark
[36:17] so that's that's where vhs can really make a difference in separating open water from everything else if that's what you're
[36:27] interested in all right so now let's close this and let's unclick this and visualize after the flood again we go through the same
[36:39] process process one band bv let's take a look okay wow you can visually already see some differences here
[36:52] and let's take a look at the vh you can see there's quite a bit of flooding these bright areas remember
[36:59] that's double bound so that's flooded vegetation vegetation so this is coastal vegetation that's flooded after the event
[37:07] let's let's apply the same stretch here for vh minus 25 to -5 and see how that looks
[37:25] so the vh is not picking up that flooded vegetation as well let's try minus three all right so now let's go back to the vv
[37:47] reset the range here let's go minus 15 and zero okay and what you can do is you can
[38:02] overlay these so let's uh let's do this before the flood let's look at vv and let's do -15
[38:16] and 0 apply apply close so if you select both of them you can kind of overlay them
[38:28] and and you can control that how you overlay it with this little little option up here next to the name of the image
[38:40] so that's before and that's after and that gives you a sense a clear sense of of the differences between those two events
[38:50] those two images but really what's really popping out are those coastal areas how inundated those are all right so let's do this again
[39:10] so you see these these coastal areas and even these these channels you can see that they're brighter
[39:17] after the event than before the event everything in general is probably brighter there's greater reflectivity because things are wetter
[39:28] in general so even though things are might not be inundated in some places it's just generally wetter
[39:35] so so it's always good to go through these exercises just to get a sense of how the images looks like and the
[39:43] differences between the images all right so now let's go on to the next step okay so the next step here is applying a speckle
[39:58] filter and then displaying the filtered image so let's just copy this code and and paste it on our
[40:16] here we go all right so what we're doing here is we're applying a speckle filter as you know
[40:26] one of the issues with radar images is that you've got the speckle effect which is this graininess effect and that's
[40:33] inherent of radar images so in order to reduce that speckle you need to apply a filter if you don't
[40:41] apply a filter your classification will probably look a little grainy okay and there are different size filters obviously the larger the the
[40:54] window that you define the the more averaging you do this the smoother things become but you also
[41:02] are losing information you're losing spatial resolution the bigger that window is here we're applying just a simple
[41:11] um just a simple averaging filter smoothing filter and we're displaying the filtered images so that's just zooming in you can see
[41:23] the the speckle clearly here in the this image now let's apply the filter so you can get a sense on how that image is going
[41:35] to look so let's just run all right so here we have now we have four images before the flood after the
[41:52] flood flood now before the flood filtered and after the flood filter so let's just take a look at look for comparison
[42:00] after the flood let's go back uv apply and and close that so this is the non-specific speckle
[42:16] filtered image and then now let's take a look at after the flood again we go vv apply
[42:37] apply close so here you can overlay the the original image the non-filtered image that's what it looks like and
[42:51] the filtered image so there is a difference right it is much smoother the filtered image much less grainier
[43:07] okay so now let's move on to the next step which consists of selecting the training data okay so we need to train the classifier
[43:25] and that involves collecting representative samples of backscatter for each land cover class of interest so let's go display the vv image the
[43:35] after vba image filter one and start identifying our our classes so so let's do this and let's do
[43:59] this so you go to geometry imports and you select new layer and a new layer will pop up
[44:11] and and we will draw a polygon to identify our new class class and let's just call this class permanent
[44:22] water so here here's what we do this is our first class we'll call it open water water permanent
[44:36] and and then then let's let's represent this class with a blue color just to make things intuitive
[44:46] and and where it says geometry import system select feature collection and under properties click on add properties just call it land cover
[44:57] and this class will have a value of one okay so you'll do the same thing for each class that you
[45:06] define you'll call it uh you you'll define it as a feature collection you'll call it land cover and
[45:12] then the number of the class will will be the the next one so the next class will be class number two etc
[45:20] so let's just do this okay and then select select water bodies that or water areas that are permanent
[45:32] water bodies right so the ocean that's permanent that hasn't changed let's go and here where this is an example we're
[45:42] doing this visually but if you have any sort of training data or data that's been validated that you know for sure those
[45:51] are the conditions on the ground obviously that's always much better i mean mean how well you train your classifier
[45:58] is really going to make the difference in your results so yeah there's the old saying garbage in garbage out
[46:06] all right so let's just train here that's open water it's always good to pan around the image and
[46:18] try to select different areas are open water just to make sure you have a representative sample of open water
[46:46] so we know these main river channels those are permanent those are the those were there before and after
[46:53] the event and okay okay so so then we'll define a new class and how do we know those are permanent okay well
[47:08] you you take a look at the before and after and and so you overlay them there you go
[47:54] and let's just pan around and take a look at the image all right there you go there
[48:31] there so you can clearly see which are the water bodies that are new that that weren't there before the event and are
[48:43] now there after the event so what we'll do is we'll train will actually identify a class as
[49:03] new open water okay so let's just you can zoom in here and sometimes it takes a little while
[49:41] for the images to load as you're zooming in in so you have to be patient and that's exactly what's happening here
[49:49] right now so let's just let it load usually there's a bar up here that tells you whether the image is loading or not okay
[49:57] so there and so all of this area is now flooded after the event so let's just go in our new
[50:08] class let's call it open open water flooding flooding okay again geometry feature collection land cover and this is our second class
[50:30] and okay so let's just identify it's one so every time you move around and you want to select a new polygon you
[51:20] have to go in here and and click on it so this is a new body of water
[51:50] okay so so now let's keep defining our classes and the next class to define is flooded vegetation so let's
[52:08] go here and add new layer so we will call the next class quadratic vegetation and and make this bright pink
[52:30] feature collection again land cover and this is going to be our third class so let's pan around here and i identify those
[52:44] areas that were flooded all of these this all of this flooded vegetation here these mangrove areas so let's go in select flooded vegetation
[53:02] and draw a couple of polygons around here okay so let's move on to our next class we'll call that
[54:01] urban urban so let's make urban nice yellow color and land cover and this will be our fourth
[54:16] class all right so let's identify now the urban areas and here we'll really have to zoom in
[54:27] so so this is an urban area if you're unsure you can again go back to the before the flood
[54:37] and you'll see that the urban areas are continued to be very bright so you might notice that there's a
[54:48] really bright spot here in the middle of the river it's probably a ship okay so let's identify a couple of these
[56:21] all right and one more all right so we've identified these classes and for in the interest of time i've
[56:37] identified two other classes the flood channel and low vegetation so i've done this already let me just zoom in so you can have a
[56:46] sense of what i've identified i've cut i've created a class called flood channels and those are the brighter
[56:52] areas so those are if you look across the image you have these what i'm um these brighter areas
[57:05] i'm calling those the flood channels so these are the light greens and then i have another class a sixth class
[57:13] called low vegetation and those are the dark green areas so those are the darker the lower back scatter areas they might
[57:20] not necessarily be low vegetation they have just low back scattered they're probably drier areas so so you define all of your classes you go
[57:32] through the singing process for all of them here you you just add a new layer you make sure you identify it as a feature
[57:40] collection called land cover and then identify the class number so let's go back to our powerpoint and once you've done that then what you
[57:51] need to do is you need to merge the collections collections into a single collection and and that's
[57:59] called a feature collection so what we need to do is we need to run this piece of code just copy this
[58:06] and and bring it to your code editor and paste it i've got it in here already so
[58:11] i'm not going to paste it i'm just going to uncomment it all right so we've got the code here and what that
[58:19] does is we're calling we're calling new fc that has all of our classes so you need to
[58:27] identify all of the classes that you train for and you need to make sure that you like
[58:35] you give it the same name that you trained for okay if there's the name is off if you've got an extra letter
[58:42] it's gonna cause an error when you run the classification so we have six classes here are six
[58:47] classes open water permanence open water flooded flooded vegetation urban flood channel and low vegetation and so you've got all of those six
[58:56] classes named here all right so the next thing to do is is let's go back here to our powerpoint
[59:10] so now we'll use this feature collection to extract the backscatter values for each line cover class identified
[59:19] in the images that will be used in the classification classification so what we need to do is we need to
[59:25] overlay the training data on our image and extract those statistics and so to do that then then we
[59:35] we take this code and and paste it on our text editor so we define the bands to be used to train our data
[59:43] so let's just i've got it here already let's just uncomment okay so what we're saying is make sure that you
[59:58] we're telling the algorithm to extract the the backscatter backscatter statistics statistics for each land cover class for these two bands vv and vh
[1:00:11] for our before filtered image or mosaic and after filtered mosaic okay okay so here we're telling it use both of these mosaics
[1:00:23] and and vv and vh so remember in in total we have four bads we have two polarizations for each mosaic
[1:00:32] and we're using all of those to extract the training statistics and to run the classification on all right so the next step is to train
[1:00:45] the classifier and and there are different classifiers that we can use in this case we're using carts
[1:00:54] which is classification and regression trees trees so copy this and take it to your editor and what this is doing
[1:01:09] is is we're telling it to use cart to train the classifier okay so we've got the the training data use the training data
[1:01:25] land cover so all of our classes that it's a feature collection called land cover cover and use all of the bands that we
[1:01:33] identified so we identified vv and bh right so make sure you you save and and you can run
[1:01:44] nothing's going to happen yet so the next step is to run the classification classification so in the powerpoint i've got a
[1:01:53] it's just a simple one-liner that runs the classification so we've trained the classifier now we run that
[1:02:00] on all of the pixels of the images that are being input into the classifier okay and that would be
[1:02:09] copy this and and also copy this code here so this displays the classification so let's go back
[1:02:21] and let's just unselect this okay okay so what we're doing now is we're telling a branded classification
[1:02:33] with all bands and generate a a classification it's called classified not very original name you can name it
[1:02:43] whatever you want and then display the results display the classification and what this is doing is we're setting the palettes the colors
[1:02:52] for for the different classes that we identified and and there are some weird uh codes here that
[1:02:59] is coming directly from the colors that we assigned so each color has a color code that's associated with it that's the
[1:03:07] color code so what i did was i copied that code for each class and i pasted it here so there are one
[1:03:16] two three four five six different color codes codes that we're identifying here so let's just start let's save this
[1:03:25] and let's run okay so that is our classification we've got now five bands here to display we're
[1:03:39] displaying classification it's not perfect as i said i mean you you really do need to meticulously define your training areas
[1:03:49] to get a nice classification but we're picking up the what i call the flood channels we're picking up the flooded
[1:03:57] areas here in along the coast there's some noise here here between between what we defined or what i defined as
[1:04:05] open water and flooded open water and and we're picking up the urban areas those are the yellow areas here
[1:04:15] so this can certainly be refined you can play around whether you want to use just one band up here bb
[1:04:23] or or or vh or if you want to use two bands again you can play around with the
[1:04:29] classifier if you want to use a different classifier uh there are lots of options but this just kind of walks you through the steps
[1:04:36] so so you know what the the process is okay so now the next thing we want to do
[1:04:44] is we want to create a confusion matrix so we want to really assess the accuracy of our results
[1:04:53] and and what we'll be doing here in this example is we're assessing the accuracy of the training data
[1:05:02] to to determine how well the the the the the results how good the results are yeah how well the classifier
[1:05:12] performed performed so what this is doing is it's taking up part of the training data and it's using those to to validate to
[1:05:23] create this this confusion matrix so for a true validation accuracy you actually want to select two different
[1:05:32] um samples okay so you've got your training samples and you've got your test samples that's really what you want to do
[1:05:43] so you copy this code create a confusion matrix and let's go back i've got it here deselect
[1:05:58] and let's run it and see the results so it's telling us that the classification accuracy is 87
[1:06:10] 0.87 0.87 and then it's giving us here the confusion matrix so the way to read this is
[1:06:20] so it's got seven you've got seven values here starting from zero all right so basically it's telling us
[1:06:30] here here that that all of the pixels that were identified as permanent open water were classified as permanent open water
[1:06:42] for this validation the ones that were identified as open water flooded so that would be this class here that
[1:06:50] would be the second the second class it's telling us that these number of pixels were classified as
[1:07:01] flooded vegetation urban urban into these other classes right so the third class that we identified which was flooded vegetation
[1:07:14] so most of the pixels were classified as flooded vegetation but there were misclassifications as flood channels or what was called low
[1:07:29] vegetation vegetation okay and so on so what we identified as urban urban this is indicating that everything that
[1:07:36] was identified as urban was actually classified as urban in the validation again for a true assessment of your
[1:07:46] classification accuracy you do have to select select independent independent test data all right so so but that gives you a general
[1:08:00] an assessment of how well your a quantitative assessment of how well your classifier performed so now in addition to this you can also
[1:08:10] do other things since google earth engine has several different databases you can overlay different types of data sets
[1:08:19] on your final product and so what i've done here is is i've pulled in a population data so
[1:08:29] maybe if you're looking at areas if this is a disaster and you want to take a look at
[1:08:36] populated areas that were flooded or population density you can overlay this layer and and to do that
[1:08:46] you copy this code let's just let's save this and run it and so what we're doing now is we can overlay
[1:09:15] population density information so this is a population density layer and so within your area of interest you
[1:09:39] know know as a a disaster manager for example you know then which areas you want to really
[1:09:46] focus on and another interesting data set that i thought would be very useful especially for disaster related
[1:09:52] applications applications is to add a road layer and there is such a database at least for the united states on roads
[1:10:04] and that's called a tiger dataset so we save this and we run it and this might be might take a little
[1:10:28] while because it is it is a very large data set but while that is running let me just show you the different data sets
[1:10:35] that you can pull if you scroll down here under scripts you've got a list of all of the different data sets
[1:10:44] that you can pull in so here we have the population density population count you've got the satellite data sets
[1:10:56] you've got environmental data sets uh you've got topography lithology landforms so there's a lot that you can explore in
[1:11:10] terms of overlaying your data sets and the one that contains the roads is the tiger data set
[1:11:19] so here we have this this is the one that we use tigers 2016 roads you can also overlay like county
[1:11:28] boundaries boundaries state boundaries etc so this roads data set is a big a bit of a large
[1:11:43] data set and every time you zoom in it just takes a little while to to load up
[1:11:55] so that gives you a sense then of just the type of things that you can overlay depending on on your interest so so
[1:12:03] these are all the roads uh really a lot of detail all right so let's go back now the final
[1:12:14] step step is saving the image so how do you export your results right so copy this there are different
[1:12:24] ways ways to to export you can use in this example we're exporting to our google drive or to your google drive
[1:12:34] individual individual google drive and so let's just copy this and go back here we're exporting as a geotiff
[1:12:56] and let's just save and then run and what you do is so here's the image we're calling it flooding and that's
[1:13:27] going to go on your google drive and you run and a window pops up so this is
[1:13:38] the name of the image if you want to create a specific folder to put it in oh sorry this is the task name this is
[1:13:45] the file name we're calling it flooding which is called vlogging hurricane matthew matthew and you run it and it will then save
[1:14:01] this on your drive so you go into your drive and it should be there as a geotip
[1:14:06] okay so hopefully this uh has just given you an overview and idea of the the steps that you need to go through in
[1:14:19] order to generate a a classification in this case a classification of flooding flooding extent extent and this is all a matter of practicing
[1:14:33] you can play around with things different options just to see what gives you the best results the nice thing is
[1:14:40] things run relatively quickly and all of the data sets are there already on google earth engine so you
[1:14:47] can can overlay a lot of different data sets on your final product for ancillary information okay so with that
[1:14:58] i conclude this this this first part of this webinar series don't forget that we have two other
[1:15:08] parts to this tomorrow december 4th we'll have our second webinar and that will be taught by dr eric fielding from jpl
[1:15:19] and that one will be about landslide observations using using interferometrics are on what on thursday december 5th we'll
[1:15:28] have the third part of this webinar series series focused on how to generate a digital elevation model and that one will be
[1:15:35] taught by nikolas gruenfeld from the konai which is the argentinian space agency so we're very excited about having these two
[1:15:45] guest speakers and about the topics they'll be covering for any contacts questions you can send me an email or anyone else on this list
[1:15:57] don't forget that the material is going to be available online the recordings and the presentations will be online for you to
[1:16:06] be able to go through these there'll be one homework associated with this webinar series and we will assign
[1:16:13] that homework on the last day and now we'll open up our question and answer session so please type your
[1:16:23] questions into the box and we'll get to them one by one thank you very much okay okay so let's start with the questions we've
[1:16:39] written down your questions on the doc that you see on the screen all right so question number one
[1:16:50] which method of water body extraction approach pixel-based object-based or water index gives one the best results in case of using sar
[1:17:04] hmm hmm i haven't conf can compare different methods and i think this would depend on the size of your water bodies
[1:17:17] so for example maybe if you have a small small river that kind of appears and disappears disappears you might want to do some sort of
[1:17:29] object-based object-based approach so i think it's something that you'll have to explore to see which yields the best results
[1:17:43] question two is there a standardized correction for the effect of incidence angle variation is it applied to google earth's sentinel
[1:17:56] image library so there are many different ways of doing incidence angle correction with mixed results and and the
[1:18:08] the the google earth engine does not apply in incidence angle correction this is not something you need to do in order to
[1:18:16] um to do analysis with the images necessarily you might have to cut the edges so if the incidence angle variation
[1:18:28] is too obvious and you can see it visually you can see it or you can look at the
[1:18:34] pixel values on the edges of the image then just just cut off the edges and focus on
[1:18:42] the the the middle part of the image so the interferometric white swath mode images their incidence angle varies from about
[1:18:51] 29 degrees to around 46 degrees all right question number three what are the possible reasons for not forming a
[1:19:06] perfect interferogram in a low vegetation vegetation high high perpendicular baseline and good temporal resolution terrain that's a great question and the next two
[1:19:20] webinars are going to be focused on insar and they will cover this this issue that you just asked
[1:19:31] and we'll have two experts on insar tomorrow we'll have dr eric fielding talking about landslides and on
[1:19:42] thursday we'll have nikolas grunfeld on how to generate a digital elevation model question number four by texture do you mean something like
[1:19:57] glcm heralic measures yes absolutely that's what i mean and and the snap software has texture texture measurements
[1:20:09] measurements or texture options that you can generate for your image so i suggest you play around with those
[1:20:16] and see how well you can how or how much better you can separate some classes that might have
[1:20:24] confusion confusion uh if for those of you using mv there are also texture measures in envy and
[1:20:32] and there are probably other texture measures that you can apply using open source softwares like r or grass
[1:20:43] or geodes or or yeah or grass sorry okay the next question how does one detect vegetation inundation in densely
[1:20:54] populated urban areas in this tutorial the brightness value for urban and vegetation inundation is the same that's right so it's
[1:21:03] it's difficult and that's why in this theory part i included a short discussion on sources of confusion
[1:21:12] in when detecting inundated vegetation and that's urban because it's the same backscatter mechanism you've got that double bounce
[1:21:21] mechanism mechanism and and so you have double bounds in areas where there's inundated vegetation and you've got double bonds in areas
[1:21:31] where where there is in urban areas right so you can detect inundation in urban areas and areas where
[1:21:43] say there are no tall buildings for example so you urban areas you've got a lot of green areas you've got
[1:21:51] parks and golf courses and and um and fields and so in those areas you can detect um
[1:22:01] inundation either as open water or inundated vegetation it's just a matter of of of knowing where those areas are so you
[1:22:12] can properly classify classify or train your classifier so that's one of the reasons that radar is really
[1:22:28] not not that that totally effective in looking at inundation in urban areas just because you already have double bounce
[1:22:39] as as as a dominant backscatter mechanism in in in urban areas okay question number six how long does
[1:22:56] it take to get a google earth agent account accepted have been waiting since the last webinar in early september
[1:23:04] and still they have not approved my account so it should not take that long in fact it should be
[1:23:12] a 24-hour thing so if you've been waiting since september then there's certainly an issue issue maybe maybe the the email the confirmation email
[1:23:24] went to your spam or folder folder so you might want to try again or check your spam folder
[1:23:39] question number seven can you explain about green space analysis hmm i don't think i understand what is meant here by
[1:23:53] screen space analysis so you'll have to maybe write out what you mean by green space analysis if if you mean areas where there's
[1:24:13] vegetation and what sort of analysis are you referring to if you're talking about greenness then radar is not sensitive to the chemical
[1:24:23] properties of the vegetation for that you would use something like ndbi or some other measure of greenness
[1:24:41] question number eight is it possible to overlay roads and other infrastructure data with your flood extent layer
[1:24:48] outside of the us and google earth engine engine for example using open street map data data i i believe so yes so as you saw there
[1:25:02] is a database of what is currently sitting in google earth engine but you can also overlay your own
[1:25:14] vector files or you can export the the product that was generated and imported into your own software like qgis and then overlay
[1:25:27] whatever whatever data layer you have question number nine is it recommended to apply a speckle filter when a small
[1:25:42] area is assessed i think that i think the resultant segmentation would miss data okay okay so so uh you should apply a speckle filter
[1:25:57] even even if it's a small area what you'll want to do is perhaps play around with the size of the filter
[1:26:04] and it's always going to be a trade-off here here anytime you apply a speckle filter you will lose some
[1:26:10] resolution right obviously the bigger that filter the more resolution you'll lose however you'll have a cleaner image
[1:26:18] and you'll have less of less speckle which which doesn't doesn't means for a cleaner classification question number 10
[1:26:41] is there a possibility to integrate sar data with other freely available data for example landsat 8 and other institute data for better
[1:26:51] visualization yes yes yeah absolutely and so in google earth engine for example you do have the landsat 8 database
[1:27:03] and you can integrate those data sets in fact you can use many different layers and run your classification with
[1:27:10] different layers you can have optical images and radar images and see how well you can your classification results
[1:27:22] are are and you can also add in-situ data okay question number 11 what to do if roi is not defined
[1:27:41] in this scope i'm not sure what that means if if the region of interest is not defined in this scope
[1:27:58] so so basically you're defining the region of interest right so at the beginning we drew a box around our area of interest
[1:28:07] and that was the ri so i'm not sure what this is referring to maybe you can clarify
[1:28:16] all right question number 12 with editing the dates can we use this code code script for another area yes absolutely
[1:28:29] and the whole idea here is this is just an example of uh what you can do for a given area
[1:28:35] but you can totally take this script and that's the whole idea take the script and modify it
[1:28:41] and and you can define a different roi your region of interest you can define in the search parameters you can define
[1:28:50] different before and after dates dates so so uh yes that's the that's that's what we want you to do is to use this code
[1:29:02] script for other areas and you'll have to play around with it a little bit to see see to make sure that there are images
[1:29:14] available for the dates that you're defining why are urban areas represented by a white color in google earth engine
[1:29:31] question number 13. so the reason for this is because urban areas are dominated by double bounce and
[1:29:41] so there's a really very high return in these areas question number 14 can i add a new layer in order to
[1:30:01] overlay with my results if yes how uh yes absolutely and we showed this i think someone got very excited about
[1:30:11] uh uh what could potentially be done and and that's what we got to at the end so
[1:30:17] you can overlay many different layers on your your on your generated product question number 15 is sar imagery as
[1:30:36] shown in this webinar useful to detect and quantify urban flooding to or just flooded vegetation areas um i it's more effective much more
[1:30:47] effective and in vegetated areas to a certain extent you can look at urban flooding as mentioned it's
[1:30:54] not so much in the areas where it's densely urban where you have a lot of buildings buildings and roads because those areas are going
[1:31:03] to be dominated already by double bounce okay and and you can look at this look at the before and
[1:31:10] after and you'll see that those very bright areas in the before image are as bright and and the extent is about the same in the
[1:31:23] after image so those areas are sorry is not very effective in densely urban areas but urban areas do have parks and open areas
[1:31:38] and you can detect whether those areas are inundated whether there's open water so you can look at
[1:31:46] the before and after and see if there's open water if there's specular scattering say in areas where there's a
[1:31:54] park or open open areas okay great question question number 16 for one class how many samples should
[1:32:08] one use that's a great question i mean one of the things that you really need to keep
[1:32:13] in mind is you need to have a good statistical sampling of each class so if you have
[1:32:22] five pixels defining defining your one class that's not a large enough statistical sample so you do you want to
[1:32:32] select at least on the order of 500 to 1000 pixels and so just select try to select your areas as as pure as possible
[1:32:45] and try to select your classes across the image so to make sure that you're characterizing each class
[1:32:54] throughout its the variability in each class all right question 17 do you need global sar data or more local data
[1:33:21] okay okay it totally depends on your your needs right so if you're developing some sort of uh global or regional product
[1:33:35] you can use data that covers a water wider region if if you need local data you can also just pull data over
[1:33:48] your localized region so it totally depends the nice thing about google earth engine is that all the data is
[1:33:56] there there and you can easily do like those global analysis analysis um easily okay so it might take a little
[1:34:08] while it does run in the cloud but it's much more efficient than doing it on your computer
[1:34:27] okay question 18 during the merge of two or more images i get some unexpected strips how can i
[1:34:35] remove remove those small strips actually there is a code that can remove those strips and i'm i'm happy to pass that
[1:34:51] to you if you send me an email i'll send you the code question number 19 could you please let us know if the
[1:35:06] training sample size would affect the result if so how many training samples are ideal for selection so we touched on
[1:35:12] this you need a representative sample size so you can statistically describe each class class but if yes if you have a training sample
[1:35:25] size that is too small you they'll definitely affect the results i mean remember your classification is going to
[1:35:31] be as good as your training data so you might have good good representative samples of each class but
[1:35:40] if your classes are are not very if your your training is not very good if the quality of your
[1:35:47] training is not very good your classification is not going to be very good so it's very important to
[1:35:54] have um institute or some sort of validation data data where you know that the training that you're selecting
[1:36:06] for each class that the pixels the training pixels for each class are representative of your class okay
[1:36:22] great question how will the classifier 20 question number 20 how will the classifier algorithm differentiate between open water flooded and open
[1:36:31] water permanent they have the same values they all appear dark that's that's true they all appear dark they have the same
[1:36:40] values that's very true except you're using two images here remember you're using the before and you're using the after
[1:36:48] and you have open water flooded what what i'm calling flooded flooded in the after image not but not in the
[1:36:57] before image okay so question 21. okay so to close up on question 20 so so the the
[1:37:26] you you train it you train the classifier uh with these classes classes with these training classes open water
[1:37:39] permanent open water flooded that that one is in one image and it's not in the other image
[1:37:46] and so the final result will characterize that open water flooded question 21 how do you define urban
[1:38:06] areas hard surface and paved areas so the way i define urban areas are just a very bright
[1:38:20] backscatter areas that i know are in an urban environment environment okay and if you have doubts of whether
[1:38:32] that area of really high bright backscatter is actually urban you can go to google earth engine and see what's there sorry google earth
[1:38:44] and and look at the the images and see what's there or just look at the before and after and if it's really bright
[1:38:51] and it's not changing then that that is an urban area if it's really bright in the areas that
[1:39:01] you know are urban and it's not changing that that is just a very dense urban area where you have streets and
[1:39:09] you have buildings that are causing that high back scatter return so question number 22 can we download these data using google
[1:39:30] earth engine uh yes then that was the last step that i showed you how to download the data
[1:39:39] how to save and and and then you go to the your google drive and you download the data set from there
[1:39:52] question 23 can we use this data for our phd research publications i don't see why not you'd have to i suggest you
[1:40:06] discuss this with your advisor and just make sure that proper credit is given to uh uh to esa
[1:40:18] for use of their images as well as google earth engine for providing the platform what is the role question 24 what is the
[1:40:38] role of sar in river modeling studies i'm not sure this is kind of a broad question but i
[1:40:49] can tell you that one thing that you can do with sar with radar images is generate a digital elevation model which
[1:40:59] shows you um um how how through through changes in elevation uh uh areas where the likelihood of
[1:41:13] where water should be routed question 25. oh yeah sorry going back to question 23. 23. in in using this data for phd i
[1:41:36] mentioned giving credit to esa google earth engine and also copernicus okay question 25 does sentinel also provide dm if yes
[1:41:55] what is the resolution okay so so the sentinel one data that's on google earth engine is analysis ready the only thing you
[1:42:05] need to do is apply a speckle filter so this data has been radiometrically corrected and and terrain correct it and
[1:42:14] to do that terrain correction correction uh it uses a dm a digital elevation model and it uses
[1:42:24] uh the srtm i believe it uses the srtm 90 meter dm where available and outside of areas
[1:42:32] where srtm is not available uses aster aster so in google earth engine you can download download dm it's part of
[1:42:42] the google earth engine database in fact i believe there are several dm's available on google earth engine
[1:42:52] and you can use a dm for example as a layer into your classification question 26 is sentinel data available
[1:43:13] frequently in the indian region i did that depends on what you mean by frequently so the each
[1:43:26] each sentinel one satellite so there's sentinel one a and b has a 12-day temporal repeat and between the two of them it's about
[1:43:34] six days and in some regions the coverage is denser than in other regions but i think it it's a matter of doing a
[1:43:58] just a search through the google earth engine database to see what sort of coverage you have in the indian region
[1:44:19] question 27 is it possible to have free local sar data for a specific place for example here in madagascar yeah absolutely so
[1:44:28] this this data data set this data base is global okay there is sentinel one data over india there is sentinel one data over
[1:44:37] madagascar madagascar i i suggest you go and you query the the the database to see what sort of
[1:44:46] coverage you have in madagascar and it's it's all free all of this data is free so you can access it through
[1:44:55] google earth engine and work on the cloud or you can you can download individual images and and work
[1:45:09] work with them on your computer using the sentinel toolbox okay question 28 what are the different classifiers and which one performs the
[1:45:24] best i know we're using cart here uh there are you'll have to go and take a look
[1:45:32] there's supervised classifications there's unsupervised classifications i suggest suggest uh going with a supervised classification so you those usually give
[1:45:40] you better results uh random forest tends to perform really well carton and especially random forest question 28 the classification by sar
[1:46:00] images can be improved using classification by optical images i'm possibly it could possibly be improved i'm not sure
[1:46:15] i would suggest first playing around with the radar images images and maybe generating some textures textures perhaps pulling in a digital elevation
[1:46:27] model model and then seeing what sort of results you get and you can also test by bringing in
[1:46:34] optical data optical will really help in areas where there's confusion with some of the classes that you're defining with the
[1:46:56] radar data so for example one of the things i talked about in the theory part was that
[1:47:04] that you might have some confusion in areas where there's open water and areas where there's there's low vegetation or there's like
[1:47:14] bare soil these areas are dominated by either specular scattering or or just very low back scatter and so there might
[1:47:27] be some confusion and optical images might be able to help separate those areas and help clear up that sort
[1:47:35] of confusion so so how many classes would be enough for training in order to get the best
[1:47:47] results results so we've touched on this but now in terms of classes itself it's it's a matter of
[1:47:57] it's not really how many classes it you can train for for many different classes and so even
[1:48:11] within one class if you see a certain variability within one class you might want to divide it into two you
[1:48:19] might want to say well this is bare soil and this is an area with very low vegetation they'll look very similar but
[1:48:31] they're slightly different and then you can always merge the classes in your final classification if the results are
[1:48:38] not good yeah and one way to see how well your classes separate or how distinctive they are
[1:48:49] is to just look at the histogram of your classes look at the the histogram histogram of all your classes and see what sort of
[1:48:58] overlap they have all right so the next question how does one export the imagery to using another image processing software
[1:49:21] okay so at the end i showed you how to save it as a geotiff this then goes into your google drive
[1:49:28] and you just export that and and you can open it in qgis question 32 how to decide on the number
[1:49:48] of classifications for the study area on the number of classifications i'm not sure i understand this question
[1:50:04] maybe on the number of classes if so if it is the number of classes it just depends on
[1:50:13] what you want to classify right now you do want to kind of cover the broad range of variability in the image so
[1:50:23] even though you might just be interested say in open water you can't just classify for open water
[1:50:29] you you want to classify for well all right let's classify for open water and everything else land
[1:50:44] all right question number 33 i am not clear on what data were used for accuracy assessment usually would use an
[1:50:52] independent data set how would you input independent data yes so i did this is a very good point and i did mention touch
[1:50:58] on this briefly but i'm glad you brought it up because you want to do your accuracy assessment
[1:51:05] on areas that are independent from your training areas right so if you do your accuracy assessment using
[1:51:14] the same pixels that you use to train your classifier you're not really getting a true accuracy assessment it's biased
[1:51:22] right so ideally you want like a a second set of defined classes that you can then use to validate your results and in
[1:51:40] order to do that it's the same way the same way we created this feature collection collection and we called it uh land cover
[1:51:49] uh you again you create one just like that just call it something else and then when you run the
[1:51:58] uh the validation you call that validation data set okay question 34 for classification is it mandatory to use polygons or can you
[1:52:19] actually use point data for instance if you use the point data from a survey like lucas for
[1:52:25] land cover yeah absolutely you can use point data except the thing the problem about point data it's it's just a point and this
[1:52:33] goes back to what is an adequate number of samples so you wanna characterize each class in a statistically representative way
[1:52:46] and if you have unless you have a lot of lot a lot of point data then that's fine
[1:52:53] but if you just have a couple of points then then that you might not get as very good results
[1:53:11] okay question 35 are the tiger road maps and the population density only for the us us so the population density i believe that
[1:53:21] is global the tiger roads map i believe that is just for the u.s question 36 will it be correct if i use a mosaic
[1:53:49] average values of all the s1 images in a month to estimate flooding in that month so you don't want to use
[1:54:08] mosaic average values for a whole month just because especially looking at flooding because flooding it can be dynamic and things can change
[1:54:25] in a relatively short period of time so so really doing an average over a month might not give you a representative
[1:54:33] result of flooding extent question 37 could you send us the polygon so we have the same data set
[1:54:56] especially for the land cover uh yeah absolutely just send me an email and i'd be happy to send you the
[1:55:02] polygons so question 38 did you use training samples for validation how you use validation samples in this case
[1:55:16] so i think that was answered in the previous question question 39. question 39 all right is it recommended
[1:55:51] to apply a speckle filter when a small area 14 hectares is assessed i think that the resultant segmentation would
[1:55:58] miss data the thing about a speckle filter even if it's a small area you still have the effect of speckle will translate
[1:56:16] into into your final classification product so you do want to apply some sort of filter and my best advice is just run it both ways
[1:56:25] it's very quick especially if you're working in a relatively small area and and compare the results question number 40
[1:56:50] we took to analyze with images with resolution 10 by 10 meter but exports to google drive result image with
[1:56:58] resolution of 100 by 100 meters why is this uh it might be the way that the export was defined
[1:57:14] and even though the original image is 10 by 10 meters that the actual resolution is going to
[1:57:20] be reduced what after you apply the filter question 41 what about doing the same for drought uh yeah that's a a great point actually
[1:57:47] arsed has had some webinar series looking at drought and for that you bring in other data sets like soil
[1:57:57] moisture to look at the extent of of drought and how that's changing with time question 42 how do you remove the wave
[1:58:11] wind effect on the large open water that's a that's a great question what you do is ideally you want to use
[1:58:18] the a hv okay because hv is less sensitive to the effects of wind on on water and that confusion then of
[1:58:29] open water as as land as kind of a bare surface land are the data sets used in this
[1:58:39] demonstration global almost all the data sets are global actually so we talked about this the sentinel one is is global
[1:58:48] the population data is global the tiger data data is is just for the u.s actually i'm sorry so that the tiger
[1:59:04] data is a population data set okay sorry i i clarify myself the population data set is global that's not
[1:59:29] the tiger and then the tiger data set which has the roads that is just for the u.s
[1:59:49] okay the next question is there any possibility to import external external shape files for training yes i
[2:00:03] google earth engine has an option to import your own files do i need to learn coding to use this
[2:00:16] data or are or there are already pre-coded things i can just follow you can you use this code and just modify
[2:00:25] the code to your area of interest question 46 how can i difference between urban areas and and flooded vegetation both are represented
[2:00:43] by white color so we've addressed this already in previous questions how successful have attempts been to automate these disaster mapping analysis
[2:01:05] processes question 47 as opposed to case by k spaces is each situation far too variable to allow
[2:01:15] automation uh this is a really good question i'm not sure i can fully answer this because i haven't attempted to
[2:01:34] automate it but i believe there are efforts or out there to to automate the use of star data for disaster
[2:01:50] mapping and actually a great example of that is the aria project that's a jpl led effort that
[2:02:00] provides information on on on flooding for example and it has done some automation it's still being improved however
[2:02:24] okay and i think so that's it in terms of oh okay let's let's uh a couple more
[2:02:32] questions if included vh in my band selection it fails let me see oh oh okay so we have a couple more all right
[2:02:41] if if i include the h in my band selection it fails i'm assuming that polarization isn't available that is
[2:02:47] correct correct so it's hv with sentinel 1 it's hv it's uh uh hold on sorry with a sentinel one i apologize iw
[2:03:07] interferometric white swath is vh and v vv vv so it should not fail uh i would suggest going back and
[2:03:18] revisiting your code sometimes they're little things that if you don't have quotes correctly correctly it will give you an error so make sure
[2:03:29] your code is correct question 49 how to separate out smooth land areas high specular reflectance from those of surface matter in google
[2:03:51] earth engine i i i'm not sure what is meant here by surface matter question 50 is there any method offered
[2:04:08] by the google earth engine for mapping flood based on an automatic comparison between the before and after
[2:04:16] images yeah that's a good question there might be i i i'm not familiar with any but there
[2:04:27] might be is sar imagery better for agricultural crop classification which band is good for this purpose that's question 51 that's a great
[2:04:42] question question and yes you can use our imagery to distinguish different types of crops we had a whole session on that
[2:04:50] the on the last advanced webinar series i suggest you revisit that question 52 is the overlapping of the
[2:05:04] inundation output from supervised classification with the impossible in google earth engine to get the depth of inundation in
[2:05:11] flooded areas if so how you can definitely overlap a dm to your inundation inundation classification classification but in this case you cannot get depth of
[2:05:27] inundation in flooded areas okay i'll do two more questions i've seen most of the demonstration lectures in flat areas how
[2:05:49] do we remove the shadow effect when dealing with flooding classification in the mountainous areas that's a great question
[2:05:56] and the best way to deal with shadow is just to create a mask and treat it as areas where there's no
[2:06:06] data question 54 what would be an acceptable sar data latency for real-time disasters that totally depends on the disaster
[2:06:27] obviously obviously the quicker you have the data the better it is and i'll answer also i i read some
[2:06:37] comments about why i was using ascending images images the reason i was using ascending is because there was better coverage over this area
[2:06:48] with ascending images actually there were no images for the time frame that i defined in the for descending passes
[2:06:58] that's why i use just ascending okay so uh we're a little bit past our our our two hour session i want to thank
[2:07:11] all of you we'll put the questions online and we'll ask actually finish answering these questions in the
[2:07:18] document so you can revisit these if we didn't get to your question uh keep tuned because we have two more
[2:07:27] uh uh webinars a great one tomorrow on landslide observations by dr eric fielding fielding and and then the one on thursday by nicolas
[2:07:38] gruenfeld on generating a digital elevation model thank you very much for tuning in for all your questions and
[2:07:46] we'll we'll be in touch again tomorrow stay tuned you
