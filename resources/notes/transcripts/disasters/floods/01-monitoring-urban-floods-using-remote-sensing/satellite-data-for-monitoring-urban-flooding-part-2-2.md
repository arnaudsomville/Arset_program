# Satellite Data for Monitoring Urban Flooding, Part 2/2

`https://www.youtube.com/watch?v=jzZ_5bS4FWY` · id 132 · 2:05:11 · module 45 — Monitoring Urban Floods using Remote Sensing

[00:03] welcome back everyone um this is the second session of urban flood monitoring using remote sensing observations webinar
[00:11] webinar and today our speaker is going to be erica podest and myself amitam mehta last week we had an overview of remote
[00:21] sensing data for urban flooding we actually went over what is involved in monitoring urban flooding not just natural
[00:31] forces or factors but also human factors such as storm water system designs designs how the urban development has occurred et cetera
[00:43] and i just wanted to quickly show you what we talked about last week we talked about a number of
[00:50] satellites which and also sensors which are relevant for monitoring urban flooding these satellites we talked about what
[01:00] parameters to to use to look at say precipitation or terrain terrain or how the slope is or can you see surface
[01:11] inundation by using optical or microwave data so these are some of the things we talked about last week we also
[01:19] talked about um earth system model such as uh guarded earth observing system which provides near real time as well as hourly
[01:29] forecast of weather systems and so specifically precipitation winds soil moisture etc we also talked about about cdc
[01:41] cdc we briefly saw where to get socioeconomic data and we mentioned lidar high resolution topography data that we are going to
[01:51] cover cover today so that is going to be uh today's session we will look at some more
[01:59] um observations based on remote sensing how to access them and analyze them for observing or monitoring urban flooding
[02:09] so this is the overall outline for today first we will have uh erica podes from gpl she will be talking about surveys
[02:19] urban flood monitoring and some challenges involved in them too but then we will have a brief overview
[02:26] of lidar data and how they are used for urban floodplain detection so it will take this opportunity to to
[02:34] introduce what lidar is and how it's used for floodplain detection then then we will talk about data
[02:45] data these are specifically landsat based urban data it provides information about impermeable or human built surface which is useful for
[02:55] deciding how where water would infiltrate easily in the ground or not and so we'll look at that
[03:02] we'll also look at socioeconomic data such as population and infrastructure data these are available so we will have an overview of that we
[03:11] will see how to access that specifically then we are going to focus on flood monitoring and mapping tools so
[03:20] we will basically have demos of two tools modis based new real-time flood monitoring or inundation mapping and global flood monitoring
[03:30] system that provides runoff information and flooding information we will also talk about a couple of more tools our
[03:37] dartmouth flood observatory which is uh we'll just see what features it provides to look at flooding uh we will also have
[03:46] a couple of more flood monitoring slides that we will talk about such as extreme rainfall detection system and also
[03:56] um um we will look at a global disasters alert and coordinate coordination system or gtax um we will have demonstration of
[04:07] monitoring urban floods using these flooding tools will again follow the case study that we used last time
[04:14] ellicott city maryland and houston texas and then finally we will see what challenges are there in monitoring urban
[04:22] flooding using remote sensing and then we will summarize what we saw in these two sessions again this is just a reminder that our
[04:32] set set website is here and here's the listener if you want to stay informed with our such activities
[04:40] please join the lister again this is the home of all our trainings and every um presentation presentation recording and homework
[04:51] they're all available from this site so please use this resource okay so we will now invite dr erica
[05:00] potest from jpl to talk about sar based urban thread monitoring hello everyone this is erica podest and
[05:12] next i will discuss the use of sar for mapping flooding at the urban natural interface i will first provide a
[05:20] very basic overview on imaging radar and then i will show some examples of radar images images if you're interested in the use of radar
[05:27] i suggest you visit the rsat website for the introduction to synthetic aperture radar webinar series from june to july
[05:36] of of 2017. which provides a summary of sar including polarimetry and interferometry also this august there will be an
[05:45] advanced sar webinar which will be focused on land cover mapping flood mapping crop mapping and earthquake surface deformation mapping
[05:55] let's start with the electromagnetic spectrum which is the range of electromagnetic energy that spans from very long to very short wavelengths
[06:03] a wavelength is the distance from the peak of one wave to the peak of the next wave
[06:08] wave wavelength is inversely related to frequency so the higher the frequency the smaller the wavelength and vice
[06:15] versa versa very long wavelengths such as radio waves can be the length of a football field field and very short wavelengths such as gamma
[06:24] rays can be the length of an atomic nucleus nucleus note that most of the energy on the
[06:29] spectrum is not visible to our eyes and that visible light is just a sliver of energy from the total amount that
[06:38] surround us so i want you to think of this energy as waves propagating not much different than waves crossing an ocean except that
[06:48] electromagnetic radiation travels at the speed of light remote sensors are designed to operate at specific regions of the
[06:55] electromagnetic spectrum according to their intended application microwave sensors operate within the range delineated in this figure which is
[07:05] which is at a much lower frequency range than optical and infrared sensors so to put things into context the
[07:12] wavelength of light is about 390 to 709 nanometers nanometers while for microwaves it is on the order
[07:19] of 0.3 to 40 centimeters because of this huge disparity in wavelength the features on this surface of the earth appear differently in the
[07:30] microwave range than in the optical range range there are advantages to observing the surface of the earth within the
[07:36] microwave range and it is primarily that microwaves are not hindered by day or night or most weather conditions as are
[07:44] optical sensors so there are two main types of remote sensing observations passive and active passive measures energy emitted or
[07:54] reflected by the earth atmosphere system examples of passive sensors are optical and thermal there are also passive
[08:01] microwave sensors and they are called radiometers they measure energy emitted from a medium in the microwave range
[08:09] an active sensor provides its own illumination source examples of active sensors are lidars and radars where a
[08:17] radar is analogous to an ultrasound an instrument emits a burst of energy let's call that a signal
[08:23] and that same instrument measures the portion of the signal that is reflected back back active remote sensing in the microwave
[08:31] range is called radar remote sensing from here on we will be focusing only on radar remote sensing specifically
[08:38] synthetic aperture radar this slide lists the advantages and disadvantages of radar remote sensing over optical remote sensing the
[08:47] advantages of using radar as mentioned in the previous slide is that you can observe the surface of the earth
[08:53] on either day or night conditions and under almost all type of weather conditions conditions optical images are hindered by clouds or
[09:01] night conditions also the radar signal can penetrate through the medium meaning it can penetrate through the vegetation canopy
[09:09] snowpack or soil and the extent of this penetration depends on the wavelength optical only sees the very top of the
[09:18] medium so if it's vegetation it's only seeing the top of the canopy in addition with radar remote sensing
[09:24] there are minimal to no atmospheric effects or corrections needed as opposed to optical where atmospheric corrections are critical for proper image
[09:33] interpretation interpretation finally radar is very sensitive to structure and to the dielectric properties of the surface or amount of
[09:42] moisture within the medium of course there are also disadvantages and that is that the information content in radar is different than optical and
[09:51] sometimes difficult to interpret also the radar images have have speckle and that's a salt and pepper effect that makes it difficult to
[10:01] interpret the image finally the presence of topography introduces distortions which need to be accounted for radar pulses travel at the speed of
[10:12] light and can only measure the part of the signal that is reflected back towards the antenna most radars measure
[10:18] amplitude and phase amplitude is the strength of the reflected signal which is also known as a backscatter
[10:25] coefficient or sigma naught sigma naught is expressed in decibels phase is the position of a point in time
[10:33] on a waveform cycle phase is usually measured in angular units like degrees or radians the phase difference between two images is a new
[10:42] kind of image called an interferogram i'll start out by discussing the radar signal interaction with the surface keep in mind that
[10:50] radars are side looking as opposed to optical where you're looking straight down radars are looking towards the side
[10:57] and in this example the radar is on the left left looking towards the surface the side looking towards the surface
[11:06] and the figure illustrates the different back scattering mechanisms starting with the one on the far left which is
[11:12] specular scattering or smooth surface scattering and it happens when there is a smooth surface such as a water body
[11:20] and the signal scatters away from the satellite the result is a dark pixel in the image the next one is rough
[11:28] scattering scattering which results when there is some level of roughness on the surface causing the signal to scatter in different
[11:35] directions but mostly away from the satellite satellite as the surface gets rougher as shown in the next figure the larger the signal
[11:44] scattered back to the satellite the next signal interaction is volume scattering which occurs when the signal is scattered in multiple directions
[11:52] within a volume or a medium in the case of vegetation the signal can scatter from multiple components such as
[12:00] branches stems leaves trunks or soil the final backscatter mechanism is called double bounce which results when two smooth surfaces create a right angle
[12:13] that deflects the incoming radar signal off both surfaces such that most of the energy is returned to the sensor
[12:21] these areas appear very bright in the image image double bounce is commonly seen in urban areas and flooded vegetation
[12:30] the back scattering mechanisms delineated within a red box are the ones that dominate whenever there are urban areas
[12:40] or urban areas that are flooded vegetation and open water here we have an example of the radar
[12:46] signal interaction with the land surface this is a pulsar l-band image at hh polarization over a site
[12:55] in the tropics the brightest returns especially along the river are driven by inundated vegetation the light gray areas are forests
[13:05] and the dark areas are either water or deforestation deforestation with different levels of regrowth regrowth this example shows rough surface
[13:15] scattering delineated by the yellow circle on the smap radar image this area is an area of very low to no vegetation
[13:23] an area that has been deforested agricultural fields with low vegetation tilled fields savannas bare fields or in
[13:33] general areas that have low vegetation have rough surface scattering and this is all in relation to the
[13:41] wavelength which in this case is about 24 centimeters also sometimes rough water because of windy conditions for example has rough
[13:52] surface scattering meaning that water will not appear completely dark this example shows volume scattering delineated by the yellow circle on this
[14:02] map radar image this is a forested area in this case the signal interacts with different components of the vegetation most likely
[14:11] the branches trunks long stems and the soil causing the signal to scatter multiple times and a significant part of it
[14:21] be returned to the satellite the intensity of volume scattering depends on the physical properties of the volume that means the moisture and
[14:30] the structure as well as as well as the characteristics of the radar such as the wavelength polarization and incident angle
[14:40] finally this example shows double bounce delineated by the yellow circle on the smap radar image this is an inundated forest it's very
[14:49] very bright meaning that the tall trees or the trees are on standing water the reason that the signal is so strong
[14:57] is because the signal penetrates through the vegetation and it bounces off the water which is a specular reflector onto the
[15:06] tree trunk or other components of the tree and then bounces back to the satellite satellite we cannot measure the amount of standing
[15:13] water just that there is water above the surface under the vegetation the same back scattering mechanism is
[15:20] seen in urban areas which is the next example example this example shows the problem in using sar data for looking at urban flooding
[15:29] as mentioned in the previous slide double bounds is characteristically seen whenever there is flooded vegetation and where there are urban areas the reason
[15:38] for this is because you have two surfaces that are perpendicular to each other causing a large portion of the
[15:45] signal to be returned to the satellite for example in flooded vegetation you have a smooth surface which is the
[15:52] standing water and an orthogonal structure which is for example a tree trunk trunk in urban areas the smooth surface can be
[16:00] a road and the orthogonal structure can be a building this image shows the city of manaus in
[16:07] brazil brazil in the top of the image and the surrounding area it is an l-band sar image from
[16:14] a japanese satellite sensor called palsar palsar open water is very dark and the very bright or white areas around the river
[16:23] is flooded vegetation in the top is the city of manaus which is also very bright so urban areas by
[16:31] themselves are already very bright because double bounce dominates even if you have flooding in an urban area
[16:38] double bounds will still dominate because instead of a smooth surface being a road it is now a water surface
[16:45] therefore a flooded urban area will look or will still look very bright in the amplitude image where sar is helpful is in identifying
[16:55] new open water bodies and new flooded vegetation in the surrounding urban area or in open areas within the urban
[17:02] environment i will show an example of that in the following slide slide here's an example of flooding that
[17:12] occurred in the city and surroundings of houston texas in the united states this flooding was caused by a large
[17:19] hurricane called hurricane harvey in late august of 2017. these are radar images from the european space agency's sentinel-1 satellite of
[17:30] before during and after the event the images cover an area of approximately 220 by 190 kilometers the area marked with the red circle is
[17:41] the city of houston and some of its suburbs there is no significant change in brightness over the city itself
[17:49] however inundation in the surroundings is discernible because ponding of water forms smooth surfaces that create specular scattering and those areas
[17:59] appear dark note some of the water bodies that are present in the middle image which i have
[18:06] marked with red arrows that are not present in the far left or far right images also note the disappearance of some of
[18:15] these water bodies a couple of days after the event on september 5. this is a false color rgb image of the
[18:23] same area here i used two images before and during the event so channels are red and blue contain
[18:32] the during the event image while channel green contains the before the event image image the areas where there is a predominant
[18:39] color means that the back scatter value for that area was higher in the image containing that color or combination of
[18:46] colors colors so for example anything that is green means that backscatter was higher before the event areas that are pink means that the red
[18:56] and blue channel values which in this case are the same are higher than the green channel therefore wherever green is higher means
[19:04] that before the event the backscatter was higher than during the event because the area is now inundated and there is
[19:13] water or there's a water surface that is causing specular scattering and hence a very dark backscatter return
[19:21] so the green areas you can interpret those as areas that are now inundated they're standing water the areas that
[19:29] are pink means that they're they are higher backscatter than before the event therefore therefore that area is either inundated
[19:39] so there's inundated vegetation or the soil moisture content of the soil is higher than before the event
[19:51] note that the urban area remains high in both images this is another similar event here we have two sentinel 1 radar images the
[20:02] false color images are vv bh and the ratio of bv to vh for each date this area is part of the state of south
[20:11] carolina in the eastern coast of the united states a large hurricane called hurricane matthew caused major flooding in this
[20:20] area on october 2016. the two images are before the event and shortly after the event note the orange areas that pop up along
[20:31] the coastline after the event this indicates that these areas are inundated inundated in summary sar backscatter is not good
[20:40] at assessing flooding in urban directly in urban centers but can assess flooding in the human natural interface within or
[20:48] surrounding urban areas this list shows the legacy current and future sar data sets the ones with the
[20:56] green box indicate that the data are freely available which you can access through either the alaska satellite
[21:02] facility or the european space agency's copernicus hub note that there are historic data sets though there is not continuous data per
[21:12] se se of the operational sar satellites the only one whose data is freely available is sentinel one which is a european
[21:21] space agency sar operating at c-band there are future satellites coming up with salcombe which is an argentinian
[21:30] sar at l-band and there is also radar the radar set constellation nysar is a nasa indian space agency
[21:38] l-band and s-band sensor to be launched in 2021 and biomass is a european space agency p-band sensor also to be launched in
[21:48] 2021 and this chart shows current and future satellites grouped according to bands and the far right indicates the repeat
[21:59] cycle cycle note that they have repeat cycles of just a few days which allows for a constant monitoring capability
[22:06] especially with applications related to flooding which are very dynamic events and require observations as constantly as possible
[22:14] if you want to learn more about sar i suggest you take a look at the introduction to sar
[22:21] webinar series from last year june july 2017 and also tune in to the upcoming advanced sar webinar series
[22:32] in august which will cover land cover mapping flood mapping crop mapping and mapping of surface information using
[22:41] interferometry interferometry thanks very much so thank you erica uh we will have question answer at the end of the
[22:58] session um and so now we are going to go ahead with rest of uh agenda for today
[23:05] we will start with lidar data for urban flood plain detection so what is lidar so lidar it's a an active instrument
[23:18] similar to radar but this uses light so it's light detection and ranging as said here here and
[23:26] and so what it does it can fly on an aircraft or a satellite uh what it does it it throws a light
[23:34] pulse on the surface and measures uh reflected light pulse and then processing is done to derive information about
[23:44] surface and atmospheric features based on this light that is received back and so lidar uh there are several types of
[23:56] lidar particularly three types ranging ranging lidar differential absorption radar and doppler lidar so ranging lidar which is of our
[24:09] interest interest for urban flooding it measures the time between emitted and reflected light pulses and that determines the distance
[24:18] of an object that was the target where light pulse was thrown so then next one is the differential
[24:26] absorption liner this particular lidar uses two different wavelengths and it is used to measure temperature density pressure
[24:36] pressure of tres trace gases and aerosols in the atmosphere atmosphere and the last type are doppler glider it sends a shift in wavelength
[24:47] due to motion of a target that is moving so that is used for measuring say wind velocity
[24:55] and so these three lidars are used for remote sensing of surface and atmosphere the one that we are going to
[25:03] talk about is ranging lidar and here is a a a liner map uh with that you that shows
[25:10] that you can you can resolve buildings and streets by using the data by looking at the back scattered light
[25:21] and so ranging lidar which um it's used to generate three-dimensional information about the shape of the characteristics of the earth's surface
[25:32] and and it is high resolution so you can see that this is washington dc that you can
[25:39] can see many features in 3d this is the washington monument and then these are all different structures that you can see
[25:49] there are two types of ranging lidar the first one is topographic lidar which uses near infrared wavelengths most of the time and it uses
[26:00] it it is used to map land like shown here other type of range in lidar is bathymetric lighter and that uses um
[26:10] green light or visible light that is used to measure sea floor or riverbed elevation because it can penetrate in the water so these
[26:19] are the ranging lighters and the data that are used for urban flood detection flood plain detection is topographic lighter
[26:31] and so where to get these data so one site is usgs is shown here it's a project it's called 3d elevation program
[26:42] this is for the us that includes alaska and other territories also um and it is open source it is high resolution it
[26:54] has multiple special resolutions as shown here uh from 1 meter to 30 meter resolution uh topography data can be
[27:04] obtained based on lidar from this site um you can pick which region you want and then you can also pick special
[27:13] resolution um and that here's the legend if you just want to look at the map visually but if you want
[27:20] to download select the data and download you can pick which resolution you actually want now these data are
[27:27] available only on the us over the us next next lidar data are available from nova this is a noaa coast watch and they
[27:40] provide provide interagency lidar product multiple agencies are collaborating and they use these high resolution data uh in multiple applications the one that we
[27:53] are interested for urban flooding is topographic lidar and here is the map uh where topographic glider is available so
[28:01] this is um along the coast also um on the on land you can get high resolution topography based on this noaa coast
[28:12] watch interagency lighter products there are also other data sets which are regional um fema fema sometimes has aircraft based lidar data
[28:27] for elevation mapping in in in various regions where this flooding is occurring or um you know so they have urban mapping
[28:36] lighters and here's the website where you can get information about these data there are commercial and open source
[28:45] other data available too uh we are focusing mostly on on open source data here so one example
[28:53] is this is state of maryland they also have a lidar program and here's the web page if you go there you can look at the
[29:02] elevation height based on lighter from this and then you have multiple layers and you can visually see it
[29:11] and you can download the data from this site as well so there are several options and the
[29:17] reason for using showing this data is that they are higher resolution so if you remember the demonstration we had
[29:25] last week using srtm which was 30 meter resolution to derive slopes and say flow direction or drainage channel
[29:36] when you use in in gis you can get these parameters parameters you can do the similar qgis or other gis
[29:43] analysis using linear data to identify where the slopes are or where the channels are in this webinar we've decided to focus on srtm
[29:56] because it's global data set the lidar data set that we are showing here are for us only
[30:02] but they're very useful in detecting floodplain and they are widely used for detecting uh floodplain over the u.s
[30:11] so fema for example uses lighter elevation um to to not just detect floodplain but also for flood risk analysis if you see why lidar
[30:22] data are more useful is because they can resolve um around the building flow or on the street and you can see
[30:34] all the landmarks with because of high resolution um and unesco also uses lidar elevation data for flood modeling you
[30:43] can get more information here um this particular figure shown here is from the paper from turner at all listed here so
[30:54] using lidar for regional flood modeling this really a topic of research and exploration you will find many many
[31:02] papers in the literature here is just one example which is showing showing different two different lidars composite
[31:11] lighters lighters and this airborne lighter so you can see in here how um where the flow would be that is um
[31:22] identified here so depth is shown here in both images this is in north carolina so this brings us to uh another
[31:34] data set that we just talked about that is landsat based urban data and we will also look at additional social economic
[31:42] data data uh we saw this site last week this is cdac cdac that has multiple social economic data
[31:51] global urban data from the landsat satellite global reservoirs and dams low elevation coastal zones global roads energy infrastructure they all can be
[32:02] downloaded from this site and we will have a brief demo at the end so what we're going to start with is
[32:11] look at this data set from landsat it is global man-made impervious surface dataset so it's called gms and here is
[32:20] the reference if you want more information on how it was derived nasa and usgs they have put together a
[32:29] global land survey data set from landsat starting from landsat 5 onwards and this particular particular gms data set is derived from 2010 as a
[32:41] target year which uses lengths at seven and eight so etm plus and only uh data are used uh in deriving gma's here
[32:50] um so data sets again have 30 meter resolution resolution uh has so per pixel percentage of impervious
[32:59] cover is is given in the data set also per pixel uncertainty in impervious cover also is available
[33:08] and and this is a companion data set of global human built up and settlement extend data set
[33:15] so here is an example now of houston um and what you see here is impervious surface percentage given in
[33:26] from 0 all the way to 100 and we're looking at city of um like this is paris this is moscow this is new delhi
[33:37] this is northeastern united states and this particular figure shown here is zoom in for houston so jimmy's data it clearly shows
[33:50] here you have less area which is built or impervious if you go downtown you will see a large
[33:59] percentage area that is built and that's why it's impervious so there are roads there are buildings parking lots and so
[34:05] that's where water cannot go in so these data why are they useful so in urban area rain water removal can occur in three
[34:16] ways they can run off if there is natural slope or terrain it just runs off from an area
[34:23] or it gets infiltrated into the ground or then there is storm water drainage that takes the water out
[34:32] so so estimating the previous urban area uh using gmas that would help in assessing areas where no infiltration
[34:40] can be expected so these are the areas if they are in low-lying area and that impervious it most likely they get
[34:48] waterlogged and so com combination of terrain data and gms data would provide information about where water logging can occur or ponding even
[35:01] after the rain is gone you can expect ponding and um if there are decisions to be made about
[35:09] where there is pumping of water is needed or where this equipment is needed then maybe looking at terrain and gms
[35:17] data early on can help identify where these hot spots are for water to to accumulate and flooding to occur if there's a lot
[35:29] of rainfall so that's why these data are useful so so next what we're going to do is uh go to
[35:38] the flooding tools but we're going to have a demo where we will look at how to to get
[35:44] gme's data and also look at population density and other data from cdag so we'll have a demo at the end
[35:53] overview of flood mapping tools so so we're going to talk about two types of tools here precipitation-based flood tools um are
[36:07] quite useful such as extreme rainfall detection system and that uses gpm eye merge data similarly similarly global flood monitoring system also uses
[36:19] precipitation data but it is it's using a trim multi-satellite precipitation analysis or tmpa data that we talked
[36:27] about last week so so once we have long term trim gpm combined data available then gfms will be
[36:37] transitioning to using gpmi merge data so the two tools that we are going to look at are erds and gfms
[36:48] so extreme rainfall detection system which is one of the tools used by un world food program for emergency
[36:55] preparedness preparedness that is based on near real-time gpm eye merge data so for what it provides is accumulated
[37:04] rainfall rainfall or it provides alerts based on this rainfall in near real time and it also provides forecast of alerts
[37:15] and precipitation and that information is used from nova global forecasting system or gfs rainfall so so what erds does
[37:27] is looks at near real-time data and compares it to global precipitation climatology center land-based rain gauge data climatology so it takes mean of
[37:39] this gauge and looks at how um deviation is from the mean uh from near in near real time and based on that
[37:49] there is a threshold decide for decided for extreme rainfall and potential for flooding so anywhere you would see these
[37:57] red dots they so they show um potential for flooding or flood alert so this figure shown here is a recent flooding
[38:11] and landslide if you remember from the news occurred on 9th of july there was a rain system moving in there
[38:19] was a lot of uh rain in in southern uh part of the country um and uh that you can see that alert was provided
[38:30] by erds based on imerge data it also provides rainfall rainfall if you go to the site erds you can see
[38:44] how how rainfall is accumulate over every um three hours or so and then you can see accumulated rainfall over um several
[38:54] days you can also see forecast gfs forecast so so this particular tool uh it helps you look at
[39:06] urban area quickly you can zoom in and see see where where there is potential for flooding so
[39:14] this because has forecast also from gfs you can start monitoring where there is likelihood of flooding and then as you
[39:22] come come to near real time also you can see alert based on imerg once you see the alert in
[39:30] urban area you can move to this particular tool which is global flood monitoring system this is the website from university of maryland
[39:41] this flood tool focuses between 50 south and 50 north because it's based on tropical rainfall measuring mission
[39:48] multi-satellite data it uses rain rate every three hours also it provides accumulated rainfall every 24 72 and 168 hours
[40:01] and uses a hydrologic model uh along with this rainfall as forcing to provide stream flow rates and flood
[40:10] intensity at 1 8 degree or approximately 12 kilometer resolution in in near real time or closer to near
[40:20] real time data are available at one kilometer also but archive data are there at 12 kilometers kilometers and these data are available since 2013.
[40:33] as we mentioned uh last week trim is no longer flying but trim based calibration is used with
[40:41] other national and international constellation of satellites to come up with this tmpa product and when it is
[40:49] combined combined with new real-time image data we will have a long-term trim gpm combined precipitation data available
[40:59] available most likely later this year so here is the layout when you go to the website you
[41:05] will see the map you have date here this is the flood detection or intensity depth above threshold
[41:13] uh here is the millimeter above threshold and there are features such as you can zoom in and zoom out
[41:21] pan the map using these arrows you can pick a particular latitude and longitude longitude pixel in here which is about 12
[41:30] kilometer you can either click on one of these or you can enter latitude longitude of the urban area within the
[41:38] urban area if you know a particular point you can enter and then you can enter enter a time that you are interested in to see
[41:46] a time series also so you can see map as well as time series and as we mentioned this
[41:54] gfms uses runoff generation from the university of washington variable infiltration capacity model or weak model and so precipitation is used as a
[42:07] forcing forcing and uh there is also uh nasa has a reanalysis product for a modern era retrospective analysis for
[42:16] research and applications this also is uh uses the geos 5 model that we talked about and so
[42:24] gfms uses mira and tmpa as forcing to to to in the weak model to come up with
[42:32] hydrologic balance and then deriving runoff and stream flow here are all the feature features of gfms that we talked about that is map
[42:43] navigation zoom in zoom out um select individual grid point and plot different variables so you can have
[42:52] flood detection uh using threshold depth or you can have stream flow or you can have accumulated precipitation uh
[43:02] you can animate the map that we will have a small demo at the end end and here is an example from
[43:10] from the recent japan flooding again this is on 6th july at this 9 gmt 9 and this is
[43:20] japan you can see that that the green means it is there is potential for flooding it is above a threshold
[43:29] intensity intensity you can also see there are locations where you have a higher threshold depth above threshold where there is
[43:40] more flooding occurring and this particular latitude longitude near hiroshima like 35 north and 130 to east if you enter that and look at time
[43:52] series you can see how the flood intensity changed over time so this is every 12 kilometer uh
[44:02] within the map you can see how uh flood detection you can do intensity changing or you can also pick to display
[44:12] stream flow or precipitation in the same manner so this tool provides once you use erds to you to see alert where flooding might
[44:27] occur occur when the flood starts occurring you can go to gfms and start looking at where there is
[44:35] of this colored areas and where there is flooding occurring now gfms also has experimental product that is forecast of
[44:44] stream flow and intensity flood intensity that is based on so you can choose to look at forecast using gfms
[44:54] also so once you know that there is a lot of rain and there is there is flooding going on the next step
[45:05] is to see where there is surface inundated so where there is usually no water where do you see water and for that
[45:14] the there are flooding tools which are based on land cover detection and they basically use optical radiation or visible
[45:23] radiation um and as shown here different different substances such as soil vegetation water they all have different spectral
[45:34] characteristics of signature so here is water water invisible and near infrared you can see you can detect water
[45:43] and so that is the principle used that you look at a particular spectral band and see the reflectance so
[45:52] that that tells you that previously dry if you keep looking at reflect reflectances that you can decide that previously dry
[46:01] surface now is inundated and so for that uh modis data are used so both terra and aqua
[46:09] aqua have modis and so reflectance from modis they are monitored and change in them is um is helping to decide where there
[46:19] is surface inundation so there are two tools that we talked about modis near all time flood mapping
[46:25] and dartmouth flood observatory they both both provide this information so modi's bed based innovation mapping here is the example of mississippi river
[46:36] flooding this is in 2016. um you can see this is march and this is may and clearly you can see
[46:44] uh where there is a lot of surface inundation going on based on these images and as we mentioned it just looks at
[46:56] near infrared and visible reflectance to decide where surface is inundated so so there is also a global reference
[47:12] water database there all the water bodies are available uh in this data sets and so the flood detection is done with respect
[47:20] to those water bodies also so those water bodies are always marked and if there is inundation which is so if there is over
[47:29] bank bank river flow and that goes around that can be seen or if there is heavy rain
[47:37] and urban flooding is done or coastal flooding is done because of storm surge modis can help detect that surface inundation
[47:48] one thing to notice here is that modis cannot see through clouds so if there are a lot of clouds present then
[47:56] surface is obscured and so even if there is inundation going on uh one cannot see it it um
[48:03] um also this is moderate resolution about 250 meters so so um um landsat which we talked about also has
[48:13] uh similar bends like optical and near infrared so experimentally these data are also used to detect flood at 30 meter resolution
[48:25] but operationally uh this tool provides uh daily inundation maps so that's what we are focusing on um so so here is here is the website
[48:36] where you can see that once you go you can pick any um 10 degree by 10 degree
[48:43] tile uh zoom in click on the tile zoom in and then you will be able to see
[48:49] where there is flooding and we will have a demo at the end again this provides data since january 2013 and you
[48:59] can see it in near real time the data available are either images or there are kmz files or
[49:09] geotapes that you can see modis flood water is the one that we are going to see which shows where indication is you can
[49:19] see surface water that's permanent water bodies are available and all this information can also be used as durative
[49:29] so here is the example we zoomed into um japan again and this is um if if you see this is again
[49:39] 9th of july i believe and what you see here the red areas shown here where it shows surface inundation
[49:48] so if you look at the gfms map and where flooding is occurring and you look at modis sometimes you would see that
[49:57] not all the flooded areas are observed and that is because presence of clouds and so um there are more sophisticated
[50:07] techniques or more regional threshold developed to derive where flooding might be occurring and one such example is
[50:16] this paper referred to here by ahmad and bolton they have used their own technique they still use the
[50:24] same reflectances but they derive their own threshold to map flood uh in mekong basin so um in in the urban area of your interest
[50:36] you may want to look at this modis inundation map that is available on site on online but you may also want to look at
[50:47] raw data and derive your own threshold based on surface observations as this also is based on moodle's real-time
[51:06] mapping and here you can see alerts on the website and and it focuses on near near real-time events also extreme events and
[51:20] additional information available from dfo is from landsat um um and and other images such as ester terra images um e01 is no longer flying
[51:34] now but there are archives available based on u1 data there are use of cosmos sky mid and sentinel
[51:44] sar sar whenever these data are available if you remember modis is available daily but all these data sets
[51:52] other satellites they have revisit time ranging from 12 to 16 days and so these data are not always available when
[52:00] there's budding going on but if they are available then dfo displays them on their maps and there are other
[52:09] information gfms rainfall emerge rainfall is provided there is a river watch that you can look at in here
[52:18] too too so that this is a useful site so so this brings us to our first demonstration
[52:28] demonstration so um just quickly going over we talked about about landsat impermea impervious surface data and so that and other socioeconomic data
[52:41] that we're going to see next and then after that we will have demonstration of all the flood tools that we just saw
[52:53] so so just just one minute while i share my screen with you all and show you some of the
[53:02] data access tools that we just talked about so we're going to start with uh the social economic
[53:18] data data that that we talked about impervious surface data so the idea here is to just give you um
[53:35] overview of if your own region if you want to download the data how would you do that
[53:42] and and in for that this is the socioeconomic data and application center site see that one thing to note here is that
[53:53] your homework required that you can register for nasa earth data and for accessing some of these data sets
[54:01] you need to register through nasa earth data so for cdac also you need to sign in i've already done so but you can
[54:10] register and then log into this site by going here and then there is a lot of information
[54:18] that you can browse but the main thing that we want to point out is this data or data sets
[54:25] you can search data sets once you go to data you will have all the data sets available on this page and as you can
[54:32] see there's urban accent polygons there are settlement points um you will see global population and and this the data set that we talked about
[54:43] in the presentation this is based on landsat impervious surface or gmis if you want to find any particular data
[54:52] set you can find it by name also and it takes you to the data set we're going to click on the data set
[55:01] and this has information as well as a citation for this work if you're going to use this
[55:09] data we recommend that you cite this and more importantly actually go through the documentation so that you know all the
[55:17] features and all the caveats about the dataset so so simple way is you can you could document
[55:26] you can look at metadata you can look at maps but for data downloading and this is again
[55:33] if you are doing urban flood modeling you may want to specify boundary conditions your what kind of boundaries
[55:39] are then if you are deciding where to put impervious surface or where your infiltration has to be
[55:45] controlled then you actually want digital data downloaded and that is what this step is showing you can
[55:56] just view and download this is the tab to go to okay and this brings you to the map global map this is navigable you
[56:08] can can zoom in and zoom out and i here i'm just going to show uh you can already see the urban areas where
[56:19] their imperable surfaces are or even small cities and towns are shown on left hand side uh you can see impervious surface
[56:29] percentage jim is there is also this human built up and settlement extent uh you can look at
[56:35] that if you like um the reason we picked this was because it's it's helpful for urban flood modeling
[56:42] uh you can look at population density this is the latest one was done in 2015 there's also a projection available for
[56:51] 2020 2020 and uh we have chosen this and you can choose your um opacity to display here the transfer
[57:02] how transparent you want your map and here is the legend so just for viewing you can zoom in to any area
[57:10] like we looked at houston earlier and you can see where there is hundred percent or where there is really more like less than 10
[57:20] impermeability impermeability for actually choosing the data on a smaller region smaller you can pick a tile you can pick entire country
[57:31] you can have shape file or you can have a rectangle and polygon so once you pick this option which i
[57:40] have done so for simplicity you can pick a square and it just allows you to draw in here
[57:50] and there is some information about how to manipulate and redraw or delete this polygon you can read that
[57:59] you can click on it it allows you to actually download data by by clicking on one of the points
[58:09] and right now it is becoming difficult but so i already have downloaded this data that that you will be able to take in qgis and
[58:22] we'll work on it allows you to actually pick um which resolution you want so right now it is
[58:30] not working but i will show you how the data actually look like you will be able to
[58:38] to look at the data but in any case you can zoom in and and at least figure out what is going on in
[58:46] what area so you can zoom in as much as you like and then it will show you individual
[58:56] communities and where there is impermeable surface is so i have downloaded this as tiff file that you will be able to use at the end
[59:05] of this demonstration similarly you can download or display global population data along with that and it shows you
[59:16] again you can look at the legend uh where where how much population this is per kilometer per square kilometer so you
[59:23] can look at in combination um where it is there are more people and around low lying or um impervious area where you
[59:32] might need to have warning or you have to have a rescue plan so so this is one data set that we we talked
[59:42] about that you can download easily once you log into nasa earth data and you will have chance to work with
[59:49] this data at the end when we when we work on the exercise so this brings us to the demonstration of some
[1:00:01] of the flooding tools that we talked about about and we're going to start with the global flood monitoring system
[1:00:15] so here is the global flood monitoring system and you can zoom out to see the entire map that we just saw this is 50s out to
[1:00:27] 50 north global data and and we saw that you have different dates you have way to um
[1:00:35] do zoom in and zoom out and pan you can do time series what i wanted to show was
[1:00:40] the availability of different parameters here here um um the the uh stream flow flood detection is there
[1:00:50] in millimeter you have with the 12 kilometer resolution actual stream flow also you can see then there is a
[1:00:58] surface storage there is inundation map there is runoff and there is rainfall instantaneous three hourly uh one day accumulated three bit day
[1:01:11] accumulated and seven day accumulated rain rain so you can actually zoom in and i have tried to do that here on uh
[1:01:21] ellicott city which is or maryland it is just this area that was flooded this uh white areas you see here are the
[1:01:29] streams and so if you looked at streamflow you will get the values over there all these green areas you see
[1:01:37] outside the stream channels are actually it's the runoff data and that gives you indication of where there is above
[1:01:46] threshold flooding likely now this is about between 1 to 10 millimeter so there's a low uh probability and this is for the uh to
[1:01:56] today at 3 gmt uh but what i wanted to show was you can look at so it is you enter time
[1:02:08] date date month and year so we're going to look at 27th of may which was the day when there was flooding in
[1:02:20] ellicott city maryland so this animation is going to go quickly so i want to point out that you can look
[1:02:26] into in this general area also note that this data are actually every three hourly last week when we
[1:02:35] looked at the animation we looked at uh i merged data which was every half hourly and we looked at time series that
[1:02:42] was half hour that gave us pretty good indication of exactly when the rainfall was picking up and then it subsided in
[1:02:50] here because it's three hourly data there is a little um less less information that way but it does provide
[1:02:59] you overall um information about where how the rain systems are moving and where um there is likelihood of
[1:03:10] flood intensity being above threshold so that means actually uh flood occurring on the ground you can animate this and
[1:03:18] you can see how this area shows um some of these area around the streams and this is the ellicott city area it
[1:03:27] shows uh and then it again this back to today but then it shows in near real time even if you pick on any of the
[1:03:35] pixels pixels if there is enough um flood intensity then it also shows a time series if you provide a date here
[1:03:46] that like we saw in the case of japan when we were doing the presentation so this is
[1:03:54] the way to you can also there is data availability you can download these data here okay by year
[1:04:01] they are given here and in month so you can go back and download the data uh they are in binary file so
[1:04:11] you may have to do some pre-processing if you actually want to display it but so this is a
[1:04:18] quick way once you know the flooding is occurring you can start monitoring which area show above threshold flooding and then you can
[1:04:27] further start monitoring uh with either in-situ data or even um there are weather forecasts you can look at
[1:04:39] current weather forecast and start looking at what is happening in in that area area so this is gfms
[1:04:50] next we are going to look at uh modi's flood inundation project that's the near real-time flood monitoring
[1:05:07] and this is modis based inundation mapping that we just saw and here i'm just going to pick
[1:05:19] pick on on houston just to see so so these are all uh 10 degree by 10 degree
[1:05:26] latitude longitude grids as you can see and and once you know that there is a flooding from erds
[1:05:35] you have you have warning from gfms you know that that is above threshold flood frequency uh the next thing you want to
[1:05:42] know is is there any surface inundation occurring occurring and when you click on a particular area i'm going to pick
[1:05:51] around houston area here this is almost near real time but you can go back in time uh you have archived data
[1:06:06] and fourth of july is the time we wanted to look at when there was major flooding over
[1:06:13] houston houston okay and here is are all the products that you can see you can have modis flood water
[1:06:22] you can have a shape file that you can view in gis for simplicity we can use kmz file which you can open with
[1:06:32] google earth so if you click on that and we'll do that in a minute but you can
[1:06:37] also see that is just png simple map available image you can see surface water so wherever there is
[1:06:45] permanent water that also is given inside inside you can download that as shapefile kmz and then there is surface uh water
[1:06:56] product and total water product so surface water product geotiff has all the information it has permanent water as if there is any flooding going
[1:07:06] on so this is permanent water but if there is flooding going on around this area it shows up as a red mark
[1:07:15] we're going to look at modi's flood water and we're going to open it with google earth once you open it
[1:07:30] you can zoom in and here's houston now notice that clear flooding shown here is in the coastal region
[1:07:42] you can see this is where a lot of because of lot of rain on 4th of july but if you zoom in
[1:07:51] you will also see places where you have indication of surface inundation so this is now within the city it's not
[1:08:00] um um to just a word of caution here is that if there are too many clouds present you
[1:08:05] cannot see surface but wherever you can it is showing you where there is likelihood of or where there is
[1:08:13] inundation going on right now so so you can save this as shapefile and get into into your gis and then look
[1:08:23] along with other data sets so this is modis inundation we also briefly talked about this dartmouth flood observatory
[1:08:37] this has near real-time maps and it shows uh based on modis plus whatever other satellites are available such as
[1:08:45] landsat or even sentinel sr it provides uh information where there may be flooding going on and how many
[1:08:53] people are being affected uh this information is there you can go through this there is a river
[1:09:00] discharge um available there is a river watch wherever there are nc2 measurements available and microwave satellite from trim gpm and
[1:09:11] they are used to come up with uh flooding flooding so this is mostly for near all time but
[1:09:18] major flooding from past is also shown the other side we saw earlier for houston that one uses
[1:09:29] uses simple simple thresholding on modis reflectances in here there is also some supervised classification going on so we encourage
[1:09:38] you to visit this site and look at all the features and this allows you to monitor near all time flooding so as you
[1:09:49] can see these sites provide flooding information anywhere and everywhere it is but there is a feature that you can zoom
[1:09:58] in and look at the area of your own interest so that is the important part that you can zoom in and
[1:10:05] see what is going on and um it provides information about all the colors showing um what information uh our earlier webinars
[1:10:16] about flooding also describe these tools in detail so you can visit ourselves webpage to get more demos and
[1:10:25] information about this site finally we also mentioned a site called global disasters and alert coordinate system uh coordination system or gtax
[1:10:38] this has uh quite a few um i mean a number of disasters are are involved covered here so there are earthquakes
[1:10:48] tropical cyclones and floods and so flooding is something you can when there is near real-time flood going on you get
[1:10:55] information about where the flooding is going on you can get social economic data you can have in-situ reports and it
[1:11:05] also provides you summary of what kind of damage is going on if you look at the resources
[1:11:12] resources it also has resources from different satellites here you have flood map residual passive microwave um you can look at
[1:11:22] accumulated rainfall this is from trim um and uh so both joint research center from european center and nasa and nova
[1:11:32] they all multiple space agencies contribute also has has modi's flood map given in kmz like we saw
[1:11:41] so this is also a useful site um to look at when there is an urban flooding occurring then you can get more
[1:11:51] information information set also had a special webinar on gtax um in last in 2000 early 2017 so you can uh look at
[1:12:02] gtx features in that webinar also so so what what we saw was we looked at um cdac
[1:12:17] cdac we looked at gfms we looked at node near real-time flood mapping and we saw dfo and um
[1:12:27] also also looked at how different things can be used together starting from erds all the way to
[1:12:36] looking at surface inundation looking at population uh last week we looked at slope also we looked at uh terrain in
[1:12:44] general we had emerge precipitation every half hourly so these information pieces can be combined together in on a
[1:12:54] gis platform say to do a better flood monitoring and management decision making so so what we recommend and you will have some
[1:13:06] time to explore now for about next 50 20 minutes we are going to do a qgis analysis
[1:13:15] once we go through the analysis we will have a little summary of this webinar series and then we will open the floor
[1:13:23] for all the question answers so so i'm going to ask you to go to our set website
[1:13:41] your homework was actually to download and install qgis on your computer computer so if you want to follow along this
[1:13:51] exercise you will follow the you can go to online trainings and if you do not have a qgis on your
[1:14:12] desktop and if you still want to watch this you are welcome or you can stay online for question and
[1:14:17] answer session you go down to monitoring urban floods using remote sensing this is the web page where
[1:14:31] we have all the information so you can see that the first week um information presentations and homework
[1:14:45] and everything is here both in english and spanish you can view recording by going here for today's slides and homework
[1:14:55] assignment is there this homework assignment is due by 15th of august and and you can go to this site
[1:15:06] demo gis tips and it will ask you to uh open the file and save it on your
[1:15:13] computer computer you can save it on your computer these are some of the tiff images that we are going to see with qgis
[1:15:26] i already have downloaded this tv images but please take a few moments to download the data so most state most if you make all the
[1:15:42] diff images that you will download they are for the houston flood case so you should see our tip images for
[1:15:53] this impervious service surface over houston houston you have imerch data you will also see um srtm train and slope data
[1:16:16] so this is open source qgis as some of you you must have downloaded i'm trying to get this open street map
[1:16:32] in here if bear with me here but excuse me once you go to the qgis you can add
[1:16:46] raster data and go to the tiff files you saved from there you will see this impervious surface percentage
[1:17:04] so once you get the layer in you should be able to see the map here this is again used on area
[1:17:20] you can put in this open um um you can go to web open layer plugin if you have it you can include a open
[1:17:29] street map or um you can just view the the tips where it actually shows you can zoom into a particular area
[1:17:45] and see you can change the property look at single band pseudo color this is more for your um
[1:18:01] so this is for impermeable surface so we can pick any color you like and we can have 0 to 100 percent
[1:18:16] you can look at 10 different intervals and allows you to see where there is high this is totally impermeable surfaces
[1:18:31] could be a parking lot it could be roads there could be a big shopping center parking lot or something like
[1:18:40] that you can make it transparent to see what's underneath okay okay and and what else you can do is you can add
[1:18:55] layer about resampled eye merge from last week that we had this is houston and this is interpolated
[1:19:09] eye merge if you remember uh last week we uh interpolated this at at 30 meter resolution from about 10 km 10
[1:19:20] kilometer resolution so you're not actually creating new information but you are bilinearly basically distributing rainfall just to get some
[1:19:28] idea where there is a higher rainfall and you can see this 4th of july flooding flooding in this area there was uh more rain
[1:19:38] and you can see this accumulated rain is about 102 208 millimeters in some of these regions if you
[1:19:52] again add raster and add your um srtm level uh uh i'm not showing it on your computer wherever
[1:20:04] those diff files are you need to get them in from this air drastic layer and once you have srtm layer
[1:20:13] you can click that in and we had picked a small region in the this part where there was a lot of fertile flooding
[1:20:20] you can zoom in a little more we turn the rainfall off you can see that in general
[1:20:31] this is the terrain in meters vertical meters there is a higher sloping region in this part and then there is
[1:20:39] low terrain in this part so generally the tendency of water would be to flow this way okay on larger scale
[1:20:48] but if you look at the slope you can see that all the buildings can be obstructing and there
[1:20:57] would be like small scale slope so this is the downtown area and all the all the higher slope areas are basically
[1:21:15] showing buildings and lower slope shows the streets in between so you can see that although it's it's
[1:21:24] it's it's small but in general you can see that large scale tendency of water to flow would be from this side to this
[1:21:32] side and then in within the city you can see the slope where there is more likely for water to be accumulated
[1:21:40] you can look at where there is more impermeable surface so then you can see where there is low sloping
[1:21:51] and then impermeable surface so it is some of these areas where there is low slope slope and high impermeability
[1:22:04] these are the area so you can combine that to come up with where you would be focusing
[1:22:10] focusing uh to see where there is water accumulation accumulation um and so looking at everything together uh will help you decide to to understand
[1:22:20] the urban layout you are in so i uh we will give you a few minutes to work with you if you are using arcgis
[1:22:37] you can use that too there are also comments i see that um qgis is slow in responding
[1:22:48] um um so so that's okay we just wanted to demonstrate that how these different data sets can be downloaded uh
[1:22:55] reprocessed and put into qgis so hopefully uh at least some of you got some um flavor of how to use these different
[1:23:10] data sets so the flow we went through was to just know about different data sets then go to specific websites
[1:23:20] and download them subset them temporarily and specially as best as we can as we saw that they all have different
[1:23:28] special temporal resolutions and then after putting them in gis or combining them it makes it a little
[1:23:37] better to understand what is going on in the urban area with all the limitations there are also strengths that you can
[1:23:44] have this continuous information over a large area so so last week and this we looked at number of data sets that can be used
[1:24:05] how to download and we looked at these two flood cases so in summary actually i want to
[1:24:22] end with challenges in monitoring urban flooding flooding and and how it it can be improved so there is
[1:24:35] there are challenges in the way that remote sensing data that we saw they have relatively low special
[1:24:42] resolution especially for precipitation it's about 10 kilometers which uh for urban flood flooding it can cover entire urban area
[1:24:53] uh weather forecast we saw from gs5 also was was of the order of 30 by 50 kilometers
[1:25:01] runoff and stream flow had relatively moderate resolution to like 12 hour low resolution 12 kilometer the inundation map that we saw from
[1:25:12] modis was 250 meters landsat based inundation or impermeable surface that we saw that have 30 meter resolutions
[1:25:24] srtm also has 30 meter resolutions sar is uh especially higher resolution a little low uh temporal resolution about 12 day
[1:25:36] repeat time so these first of all to combine them to make sense it it requires a little bit
[1:25:44] of processing as we saw also we saw from modi's case that if there are a lot of
[1:25:52] clouds optical data cannot see through and so then even if the surface inundated it would be difficult to see
[1:26:00] but then there are uh microwave data sometimes as used complementary as you will see from dfo site and you can also
[1:26:09] have a supervised threshold based on in-situ measurements for your own urban area and you might have a
[1:26:17] better chance to look at flooding lidar data are high resolution but they're not available everywhere and you have to plan
[1:26:35] during flooding people fly light our airplane requires there's expenses involved in that and planning also so all the open source data that we
[1:26:45] talked about they have challenges but they can be combined together and they can be used as inputs to urban flood modeling they
[1:26:54] can use be used in addition to in-situ data as mentioned here smaller urban areas are real challenge
[1:27:03] you you may not see them clearly or resolve them since each urban area is unique flood management also requires special
[1:27:14] solutions solutions and so in addition to rainfall train urban accent urban there is planning required there's storm
[1:27:23] water removal design required drainage system capacity also is crucial for deciding how how much rain can a urban system sustain
[1:27:35] so it's really a combination of remote sensing and in situ data as well as flood modeling they all have to be
[1:27:44] combined to actually do effective management of flood in urban areas and so that brings us to the end of this series
[1:28:04] um um we saw star star information earlier so if you have questions about that um erica potus can answer your questions
[1:28:17] and we'll open the floor for question answers there is the homework available on our set site 15th of august is the due date for
[1:28:30] everything so if you want to try this us exercise and you have questions you can ask us
[1:28:36] and then homework is independent of all that you will be filling out your answers on the google form
[1:28:45] so by 15th of august please submit to homework so we'll have the question answer session so erica there is a question one
[1:29:50] it's about radar different bands of radar so so depending on on each variable uh yes thank you
[1:30:11] so this is erica podest and i'll answer the questions related to radar radar and i see that there's one
[1:30:19] uh uh that says that there are different band emissions c-band l-band p-band k-u-ben so actually we're not detecting here the emissions
[1:30:30] we're actually this is an active system so the satellite is sending a signal in that specific frequency band
[1:30:40] and and so the wavelength will determine how deep that signal will penetrate through the medium whether it's a vegetation
[1:30:52] canopy whether it's soil whether it's snow snow and so depending on your application you might want to use
[1:31:01] a different band right so if you're looking at vegetation and you're looking at flooding under vegetation or a forest
[1:31:11] then you want to use a longer band like l-band for example if you're looking at flooding that's
[1:31:19] um um under vegetation but it's short vegetation like say herbaceous vegetation or an agricultural prop then c-band might be better suited for
[1:31:33] that specific application so second question is how can i difference the urban areas to the flooded vegetated areas
[1:31:54] so so uh optical data would not help there if there is i mean you can see inundation but
[1:32:03] underneath the surface is either vegetated or urban it just quickly tells you excuse me how uh reflectance changes when there is
[1:32:14] water on dry surface or previous surface so there is indication of water but i don't think optical data can
[1:32:23] differentiate that but i think sar can right erica if you have anybody so the pop yeah yeah
[1:32:34] yeah so i i think if i read this question correctly i think the person wants to just
[1:32:40] differentiate an urban area not necessarily flooded from a flooded area right and to do that with sar only is
[1:32:49] difficult because as was shown urban areas have the same signal backscatter response as flooded vegetation so they both are
[1:33:01] very bright if you want to differentiate the urban areas so you can flood flood map the flooding around then what you'll
[1:33:11] want to do is bring in another mask that indicates where the urban area is so you can mask you can
[1:33:19] mask it out from the radar data or or or use something like lidar or optical to to identify where the urban area is
[1:33:36] next question is about lidar topography data um i'm not aware of any global data sets based on lidar topography um but
[1:33:45] in the u.s as we saw in the presentation yes there are data sets that you can the next question is about erds and gfms
[1:34:05] uh yes erds uh you can find tiff images you can go on site and on side you will see a
[1:34:15] there are bars that you can click on it shows different layers and you can look at those you can
[1:34:21] download those tips gfms has binary data mostly it is actually flood intensity or that above threshold and you can download those too
[1:34:41] um sometimes in in many of these sites registration may require but data are free and once you register you
[1:34:50] can go ahead and download so question five is in case of presence of clouds what would be the type of
[1:35:05] image displayed for the data capturing tool tool so so again again only radar like sar or microwave data
[1:35:17] they have all weather capability so operational optical sensors that we talked about modis landsat landsat um um it tells us a limitation that you you
[1:35:29] when there are a lot of clouds present you cannot see them what people have done and as we saw in
[1:35:35] case of modis um is there can be a composite you can have it's not like every day is 100 cloudy so
[1:35:43] when you composite over several days you can see changes in the reflectance on the surface that you can infer to as
[1:35:53] flooding flooding so compositing maybe one way now um that doesn't help in immediate like if there's flash flood of course
[1:36:03] it's difficult to do that but in general to look at flooding in surface you can composite multiple images
[1:36:13] that's one way uh this is a very good question how are defining near real time is it minutes or
[1:36:20] hours and that clearly depends on on the data or sensor that you are using so if it is say i merge gpmi merge near
[1:36:31] real time is last half hour it closes half hour because that's the data resolution if you are using trim it is three hourly
[1:36:41] so it is three hour is the next three nearest three hour is the real time if it is modis it is
[1:36:49] daily daily if it is landsat it is 16 days so actually then it is not near real
[1:36:55] time but the sensors which are are daily such as aquaterra um gpm trim they provide information they are more
[1:37:07] near real time so question seven is also important is how the threshold is determining gfms so uh it really
[1:37:26] is it takes trim climatology at each point and then based on the standard deviation the threshold is uh
[1:37:36] is defined and and the reference is out there on site you can read the details but basically it's
[1:37:44] respect to the the climatology and standard deviation outside certain standard deviation is considered considered flooding so so question eight is about
[1:38:10] south america guyana what kind of flooding flooding tools are available i would recommend that you look at erds
[1:38:18] gfms and modis nrt also dfo the dartmouth observatory and and gdax which is global disasters and alert
[1:38:30] system system the tools we saw last time they were mostly for tracking precipitation and also to look at terrain and slope
[1:38:38] etc etc so so you can you can use giovanni like we did last week to look at how precipitation
[1:38:45] systems are moving around or if there is heavy precipitation or precipitation accumulation over kiana but if you actually are trying to look
[1:38:54] at flood conditions the tools we saw today would be more useful so uh modis data for flood monitoring
[1:39:09] if you want reflectance data you will go to lp dac and you can refer to the last week's
[1:39:16] presentation the website is given here where you can download data if you want to start with reflectance
[1:39:23] data for your urban region and you want to do your own thresholding or flood detecting then you can
[1:39:30] get modis modis reflectance data from lp dac um um not sure what uh which historical data will they correct historical data if you
[1:39:48] can be more specific um um what is the technological methodology created for capturing the data about the
[1:40:12] located individuals either for the i i'm not sure i understand the question i'm sorry erica if there's a question would double
[1:40:35] bounds arise due to reflection i'm sorry can you say the question again yeah question question 12 is would double bounds arise
[1:40:52] due to reflection with double bound so so double bounced is a scattering mechanism right that involves reflection of the signal from one
[1:41:07] surface surface uh to another surface and back to the satellite so so all of the back scattering mechanisms
[1:41:16] involve a reflection of or scattering of the signal so i'm not sure i understand the question but basically
[1:41:30] what's important for you to know is that with radar when you're looking at flooding especially in in areas where there's vegetation
[1:41:43] the signal is dominated by what's called double bounce scattering question 13 is can you download data in
[1:41:58] gfms yes you can it's a flood depth you can so how accurate is nrd modis data for
[1:42:11] flooding flooding and that question depends on two parts one is uh uh is there if there is a lot of clouds
[1:42:23] you probably will miss surface inundation you won't be able to see the surface so right there there is a source
[1:42:29] of of inaccuracy inaccuracy when you can see surface flooding there are two factors factors that can add
[1:42:40] uncertainty one is cloud shadows the clouds nearby and they're casting shadows uh reflectance are affected by that and can be misinterpreted as water
[1:42:50] that could be terrain shadows if you're close to mountain and same thing those shadows can be interpreted as water but both
[1:42:58] these are actually corrected now so so you you it it really depends on which area you are in
[1:43:08] and it it helps to validate when you see modis inundation you also can check in situ measurements
[1:43:17] whether there is any flooding going on the question is the satellite able to detect plastic debris in the ocean so
[1:43:29] the satellites that we have been talking about um i have not seen those observations being used for
[1:43:36] looking at any diabetes some optical and sar data have been used to look at the oil spill
[1:43:42] but i am i'm not familiar with any studies they have been used for monitoring plastic debris also the size
[1:43:53] would matter resolution the question is how the knowledge of this webinar can be used for rural setting actually
[1:44:15] all these tools and data that we talked about about they are applicable everywhere our focus was on urban area because in a
[1:44:23] way it's more challenging because because of the impermeable surfaces because also buildings and roads the storm water system that's involved
[1:44:34] in there and so so rural area you can use the same technique same data same tools so in uh wgs 84 is a geographic
[1:44:56] projection you you can use for the project uh yes so uh publication list where we can we have provided a few publications
[1:45:13] and then what you can you can go to those publications and look at the references in there but um
[1:45:19] that point is well taken we may think of providing more information about publish literature ah ah so this is the raster call
[1:45:34] impervious areas has number between 0 and 200. so 200 is actually uh no no data it's not
[1:45:42] not data 0 200 is the valid data everything outside not availability or all that is set as 200
[1:45:57] and i don't think all permeable surfaces are set to 200 so it is just where you do not have information about
[1:46:03] impermeable surfaces that's where you are going to put 200 that's what it is but that's a good question
[1:46:18] so yes modis and lancet both these data are long term modis started up in 1998 so yes for at least last 18 20 years you
[1:46:30] have modis data and then landsat data for more than 40 years so there are long-term data so analysis not available for all these
[1:46:40] years but data are available so you can do your own analysis for your urban area or any
[1:46:46] area that you're interested in okay so this is design information okay this is a question 22 about homework one actually there was no
[1:47:21] submission for homework one um it was mostly for your own information just to be able to navigate
[1:47:28] through through gdax to get terrain data and just to get the qgis data also register for nasa
[1:47:35] earth data so now and in future you can download data so there is nothing to submit for
[1:47:41] homework one homework two on the other hand is a google form uh you the homework is on the website and you
[1:47:49] can download and answer your questions on the google form link provided in there so question 23 that that release the
[1:48:14] challenge in tropics you will have a lot of clouds so so for for drr i think best thing would be to start with say
[1:48:26] it's in tropics usually flooding would occur because of heavy rain or convective systems or tropical storms storms so basically monitoring precipitation
[1:48:36] would be very helpful in topics so that's the first step you can also look at tools like erds
[1:48:46] because they are based on precipitation and precipitation climatology similarly gfms so where clouds are not um attenuating or they're not affecting
[1:49:00] your outcome especially so the in in case of precipitation and in case of hydrologic modeling like gfms you
[1:49:06] actually can have some idea of where the flooding may be going on or there is forecast component to all these so you
[1:49:14] can see where there is likely to be flooding but but surface inundation i think saar may help
[1:49:25] when possible again there are challenges with sar too but but better than optical sensors chances are that you can see the surface
[1:49:35] through sar than landsat or moody's so so in that case like in tropics that's why i think flood modeling helps more
[1:49:49] and again it's the combination of remote sensing sensing in situ and modeling that would probably help so it's any special tool for
[1:50:03] classification of lidar data um i am not familiar with any um tool but i can look into it and if we find it we will
[1:50:13] include it in on our website somehow yes so negative srtm data are actually null data there are also places where there are no
[1:50:33] data available at higher latitudes there also you would see some negative numbers data of lidar on drones yes so actually
[1:50:48] many lidars that we talked about are are not all of them are not on satellites they are on aircrafts
[1:50:56] so drones and aircrafts they work real well for lidar because they provide they focus on certain geographical
[1:51:04] regions small region and provide high resolution information but there are lidars flying on satellites also uh i'm not i i know about sarah altica
[1:51:22] but i'm not sure if there's any special application of ka band on sal it's basically an altimeter mission i
[1:51:32] believe so so you may be able to use it to look at height of a water body
[1:51:45] combined with other information of course so uh for question 28 cd data validation so for imperme imperme your service if you go to the
[1:52:06] paper referred to in there it describes how certain locations how comparison is done done there is no local validation everywhere
[1:52:22] so how do i know if a data set is in in real time so so when we say real time
[1:52:29] there is going to be some lag because once satellite passes over a place collects the data it has to transmit the
[1:52:36] data have to be processed and then put on the website so there is always lag of a few hours
[1:52:43] so the uh something like imerge which has four to five hours latency that's that's pretty good from satellite
[1:52:52] um um when you go to the website it provides information whether it's real time or not so when that's why we say near real
[1:53:01] time time there's always some lag there's some latency so nasa also has a site called lance i'm trying to find the address for that
[1:53:18] that provides information about new real-time data all the sensors available in near real time available from lens
[1:53:36] i'm just going to type in the checkbox so you can copy so here's the link to lance
[1:54:18] um um there there may be plugins for flood risk area identification i'm not familiar with that this question 30 are there plugins
[1:54:32] applications or other tools that make the various remote sensing data that we cover today and output flood risk of an area so
[1:54:43] there are there are tools people develop to do that uh like erds is one such tool right because they use
[1:54:52] satellite data and and they come out with flood risk but i don't think this software is available openly for
[1:54:58] everyone to use so um geostationary satellite combining with low earth orbit satellite it is possible because um ever since
[1:55:23] trim launch of trim there is a the multi satellite analysis combines polar orbiting and geostationary satellites so
[1:55:36] so technique is available whether tool is available or not for anyone to use i'm not sure but i
[1:55:43] don't think so so it it the technique is there it's been routinely done but there is no tool
[1:55:50] where you can go in and get the data combined combined from different satellites because it requires a little more
[1:56:01] analysis more processing more merging so question 32 is for erica how to surface water bodies flooded urban areas flooded vegetation areas and
[1:56:20] polluted water have differ with respect to vhv ratio okay so what the ratio provides is it's a way to
[1:56:37] identify either either some of the clusters that that are confused for example open water has a signature of
[1:56:52] very dark on the image because it's a smooth surface scatter it's a it's a specular scatter however sometimes when
[1:57:02] you have a little bit of roughness on the water surface because of wind or sometimes when you have
[1:57:09] soils that have been recently tilled then then you also have very dark backscatter that can confuse with
[1:57:18] with water so so these ratios help help better distinguish them so it just depends on what you're looking at
[1:57:29] open water has very different signature than flooded areas flooded vegetation areas so flooded vegetation is very bright while open water tends to
[1:57:40] be very dark and you know i will talk about all of this this in the webinar the advanced star webinar
[1:57:48] series that starts next week so on tuesday august 7th we'll be covering sar for land cover mapping and then on
[1:57:57] thursday august 9th we'll be covering sar for flight mapping uh so i i i suggest you join that
[1:58:06] webinar to really learn more in depth about the use of different polarizations and different frequencies frequencies for flooding uh one thing to note here
[1:58:15] is is you do mention polluted water that's uh that type of information cannot be provided by radar so remember radar is
[1:58:24] sensitive to structure and to the dielectric properties of the surface surface so so it does not uh
[1:58:36] uh provide information about the chemical composition of of the surface like optical does um so geos file provides both historical
[1:58:57] and forecast weather data yes now which polarization is preferred to detect floods with sar images and are there any global soil moisture
[1:59:09] data sets based on sar these two questions are there so you can attend these our advanced webinar to get more information about
[1:59:32] that that uh sentinel data compared to lidar data i'm not sure what that means but if you're talking about
[1:59:45] resolution or features features please be more specific um um [Music] [Music] not sure about mndwi so so it is if you are talking about
[2:00:17] normalized difference water index that has been used ndwi and ndvi like relationships have been used um um what is the accuracy
[2:00:35] it is difficult to say it depends on the region i believe yes actually um if you have nc2 data
[2:01:06] this question 38 about weighting different layers um yes you if you have institute data that's the way to go you
[2:01:13] can derive different ratings for different different piece of information how important it is so empirically you can derive some kind
[2:01:21] of or statistical relationship between nc2 data and satellite data and then you have proper waiting soil moisture impact flooding in urban
[2:01:34] area so in urban area wherever there is none in a a very pervious surface there of course
[2:01:42] there is infiltration occurring so that's where um soil moisture would matter so how much water can infiltrate
[2:01:53] versus runoff or just can stand there that will be decided by amount of soil moisture so it's not like entire urban area is
[2:02:02] impervious so wherever there is a surface where water can infiltrate soil moisture does matter yeah i like to add to that because there
[2:02:17] i think two questions related to soil moisture there is a nasa satellite actually in space that measures soil
[2:02:23] moisture globally it's called smap soil moisture active passive and it's been collecting data since around april of 2015
[2:02:35] and and that that it uses a passive microwave system to measure soil moisture every three days on a global basis and
[2:02:47] there was a webinar about this back in 2017 it's on the rsa website if you want to learn more about smap
[2:02:55] however smap does not retrieve soil moisture over urban areas just because the algorithm just works on natural environments and
[2:03:07] not over urban urban environments so those areas urban areas are massed but it is very important still to account
[2:03:17] for for water infiltration in soils in urban areas as amita mentioned so i think with that um
[2:03:38] we will end this webinar session thank you so much for attending this session we would like to get your feedback there
[2:03:45] is a survey here that you can fill out and provide us feedback about the training about the material covered
[2:03:58] other topics that you are interested in so so please take a few moments to do the survey and provide your feedback
[2:04:13] it's very important to us that helps us in designing and improving our trainings for future we'll actually be an email sent in the
[2:04:25] uh tomorrow uh on that and there'll be a link in that they'll come from surveymonkey surveymonkey and also um if
[2:04:35] and anyone is involved in urban flood management management and if you have any insight or feedback from your site
[2:04:45] that would be very helpful to us too so on behalf of the rc team we have brock levins who helped us in setting up
[2:04:55] the webinar we'll have elizabeth book and so on behalf of erica podesta myself we really want to thank you for
[2:05:04] attending attending this webinar
