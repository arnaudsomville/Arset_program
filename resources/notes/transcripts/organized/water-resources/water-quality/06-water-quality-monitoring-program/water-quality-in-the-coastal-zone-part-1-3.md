# Water Quality in the Coastal Zone, Part 1/3

`https://www.youtube.com/watch?v=p0syKhg_IME` · id 12 · 2:18:29 · module 9 — Module 06 — Integrating Remote Sensing into a Water Quality Monitoring Program

[00:01] hello hello and welcome to the advanced webinar integrating remote sensing into a water quality monitoring program my name is sherry palacios and my
[00:11] co-instructor is amita mehta together we have expertise in the remote sensing of water content water quality and an
[00:19] algorithm development we are research scientists at nasa and we are excited to share this webinar series with you
[00:26] this webinar series which will take place on three wednesdays in june the 5th 5th the 12th and the 19th
[00:34] we understand that we have a diverse audience of participants we hope that each of you will come away from this
[00:40] series with some new knowledge and skill related to the remote sensing of aquatic systems and how it can complement a
[00:47] larger water quality monitoring program let's get started the objectives of this training are to learn to understand which data products
[00:58] are used for water quality monitoring follow rigorous practices for obtaining and processing aquatic remote sensing data data and to build skills and image processing
[01:08] for water quality monitoring for coastal and inland water bodies using nasa's cdas image processing software when you registered it was suggested
[01:20] that you watched two previously recorded rset trainings these include the fundamentals of remote sensing of aquatic environments and the
[01:28] advanced webinar for processing satellite imagery for monitoring water quality quality prior to today's webinar we also ask
[01:36] that you download and install nasa's cdas software and ensure it is working we will be using cdas today
[01:46] this webinar consists of three parts in part one today we will talk about water quality in the coastal zone and
[01:54] also review some fundamentals of remote sensing we will learn some of the basics of using nasa's cdas software
[02:01] in part two on june 12 we will dip into freshwater systems and talk about water quality of larger inland water bodies
[02:10] we will have a guest speaker this week and work through data access in part three on june 19th
[02:17] we will talk about best practices for water quality monitoring this is the week that we will include a lot of
[02:23] hands-on training including working through a case study for water quality monitoring and continuing with advanced skills using nasa's cdas software
[02:33] please note that parts 1 and two are two hours long each part three is a four hours long with the first portion being
[02:41] lecture demo and exercises and the latter portion being quiet laboratory time to work on the exercises with anita
[02:48] and me available to answer questions so what are we doing today we're going to do an overview of our set
[02:58] we've already talked about an overview of the course a review of aquatic remote sensing we're going to talk about some examples
[03:07] of water quality monitoring programs there will be a short demo on accessing ocean color web website and its level 1
[03:15] and 2 browser to obtain modis data as well as the usgs earth explorer browser to search for landsat data
[03:22] then we will walk through the exercise on basic skills and cds with whatever time we have left over
[03:29] today after the exercise we'll answer your questions our returning participants know that you can earn a certificate of completion if
[03:40] you attend all live webinars and complete the homework assignments by the deadline deadline this series will have three homework
[03:47] assignments assignments answers to the homework from parts one and three must be submitted via google forms by june 21st
[03:55] if you meet these requirements you will receive a certificate of completion approximately two months after the end
[04:01] of the webinar series refer returning folks are already familiar with rset but what about our new participants
[04:09] what is rsat nasa's applied remote sensing training program seeks to increase the use of earth science observations and decision
[04:20] making through training for policy makers environmental managers and other professionals in the public and private sector sector training topics mainly focus on air
[04:31] quality land disasters and water we work to help professionals solve problems on such topics as harmful algal
[04:39] blooms blooms flooding deforestation and wildfires rset strives to provide the community with relevant trainings we are always
[04:49] open to new ideas and suggestions at the end of this course you will be given a survey please be sure to fill it
[04:56] in it helps us much of the material and direction of this webinar series was guided by the
[05:02] survey responses provided to the most recent advanced water quality training offered in september of 2018. our set listens to you our community of
[05:12] learners what are some trainings on water quality this slide shows several examples of water quality trainings if you have not
[05:21] already attended or viewed recording cities we encourage you to take a look would you like to learn more about rset
[05:33] please navigate to the link that you see here here and explore the different trainings in their thematic areas
[05:45] this training is on incorporating remote sensing observations into a water quality monitoring program what do we mean by water quality
[05:57] describes the condition of the water including chemical physical and biological characteristics usually with respect to its suitability for a
[06:06] particular purpose such as ecosystem function or human health with that in mind and depending on the problem at hand
[06:17] there are a diverse set of observations that you see listed here that are used by the community to
[06:23] monitor for water quality some of these include water temperature suspended solids bacteria like e coli water clarity
[06:34] cyanobacteria cyanobacteria ph ph color nutrients chlorophyll chlorophyll algotoxins and color dissolved organic matter matter if you are already a part of a water
[06:47] quality monitoring program you're probably already familiar with some of these these in fact you may already be measuring
[06:54] them for your location and comparing your results to some standard set by the regulatory agency where you are
[07:02] some of these water quality parameters listed here are optically active meaning they can be visible to the eye or a
[07:09] sensor sensor this is really helpful if you wish to incorporate remote sensing observations into a water quality monitoring program
[07:17] so it might be possible to complement an existing in-situ program with remote sensing measurements by directly measuring the same parameter
[07:26] sometimes a parameter that is not observable using remote sensing co varies with a parameter that is observable
[07:34] observable so the observable parameter can be used as a proxy in either case of direct or indirect
[07:41] observation it is important to understand that validation of remote sensing data products to in-situ observations is absolutely essential to
[07:50] have a quantitative assessment of water quality from remote sensing imagery hey so we're really interested in some
[07:59] of the work that you our participants are involved in now or that you're thinking of being involved in in terms of water quality
[08:06] monitoring monitoring so in that question box we'd like for you to provide some input to us to understand what is the water quality
[08:14] monitoring program you're working on now and if you're using remote sensing observations what types of observations are you using
[08:22] so we have a large number of participants online right now and it'd be really great for you guys to be able
[08:28] to share this information to each other and you're all along this path in different levels some are just starting
[08:33] out and some have pretty advanced tools already so if you guys could when you can during this session put some
[08:39] information into the questions we'd be really interested in learning more what are some examples of water quality
[08:48] parameter that affects water optical properties properties two that come to mind for me are colored dissolved organic matter or sedom
[08:57] which when derived from land is a mixture of organic compounds like lignins and tannins that break down
[09:04] products of vegetative material like trees or leaves in the image on the right you see an example of seated on rich
[09:13] water water it is a part of the river that you see here hugging the left shore in this
[09:18] image image it appears black whenever you hear of bodies of water like black water bay this indicates that the water is likely
[09:27] rich in seed on also on the image on the right this time along the right shore of the river
[09:34] you see water that is bright and opaque this indicates a large amount of suspended matter or particles
[09:43] both cedon and suspended matter are constituents that can be used as direct observations of water quality and can
[09:49] also be used as proxies to derive co-varying parameters for example in the coastal environment if this river flew flowed out to the
[09:59] coast coast the concentration of sedum offshore can be used as a proxy for low salinity water water all it takes is the time and resources
[10:09] to sample your watershed your estuary and the coastal environment to build an algorithm for the region to do this
[10:19] in addition to suspended sediments in cedom what are some of the other water quality indicators satellites can
[10:25] observe or be used to derive these include sea surface temperature chlorophyll a salinity which we just talked about
[10:35] diffuse attenuation of light and the euphotic depth or the depth where light attenuates to about one percent of the
[10:41] amount found at the surface how do these satellite observations correspond to in-situ observations in these tables we have provided a rough
[10:52] mapping of which in-situ observations correspond to which satellite observations observations please know that they're not an exact
[11:00] match this is a rough correspondence it would be important for your water quality monitoring program to validate
[11:08] satellite to in-situ observations to have an understanding of how well a satellite estimates the in-situ value this range of understanding or what we
[11:18] call an uncertainty estimate would then give you a frame of reference for how well the satellite observes the
[11:23] parameter parameter and could guide you in decisions to modify satellite algorithms to more closely fit the water quality parameters
[11:30] of your region what are some of the factors that affect water quality some of these include and you're
[11:40] probably familiar with these nutrient loading loading pollution food web changes introduced species changes in water flow and even climate
[11:55] change why might we wish to use satellites to observe water quality satellites are regular and consistent observations over a large area so
[12:09] instead of taking one sample from a dock or two samples from a boat you can use those in-situ measurements
[12:18] validate satellite imagery and then look over a broader area using the satellite imagery to understand what the water quality is in that region
[12:28] satellites have a consistent revisit rate for a well-structured time series analysis analysis yes there are considerations like clouds
[12:37] or or other factors but satellites are consistently going over and can be very useful for having the correct or a
[12:44] consistent time step in your time series there are a large number of data products available for water quality
[12:51] monitoring monitoring satellite observations complement in-situ sampling they don't replace it but they complement it and most satellite data products are
[13:02] free free open access and they've been quality controlled extensively we understand that many of you have recently taken the prerequisites for
[13:17] this course i'm going to give a brief review of aquatic remote sensing in the next few slides just to get everyone on one path
[13:24] as you may recall the remote sensing of aquatic targets is somewhat different than the remote sensing of hard surfaces
[13:30] found on land why is this the case when we talk about ocean color in this webinar we are
[13:36] referring to the remote sensing reflectance reflectance remote sensing reflectance is a function of the inherent optical properties of
[13:42] the material in the water in this equation at the top that's represented by the a bb values in that portion of the equation
[13:51] in the center so for example absorption by phytoplankton non-algal particles colored dissolved organic matter or cedom and water and scattering in the
[14:04] backward direction by particles in other material material it also contains a correction factor to relate subsurface irradiance reflectance
[14:12] to radiance reflectance denoted by the c here here so remote sense and reflectance can be described by the inherent optical
[14:19] properties and some of the conditions related to the surface another way that we can think of remote
[14:26] sensing reflectance is water leaving radiance the lw corrected for bi-directional effects of the air c interface interface and the subsurface light field and
[14:36] normalized by the downwelling irradiance represented by ed just above the sea surface surface remote sensing reflectance is the
[14:45] fundamental remote sensing quantity from which most ocean color products are derived for example chlorophyll particulate inorganic carbon and light
[14:53] absorption by sedom material in the water has characteristic absorption and scattering properties and that is what results in different water
[15:03] types having different color this image on the right is the outflow of the mackenzie river into the beaufort
[15:08] sea in northern canada take a moment to look at it you start at the upper left you see the
[15:14] dark blue characteristic of water along with some regions that appear somewhat green which would indicate phytoplankton phytoplankton as your skin eye scans diagonally
[15:25] towards the bottom right of the image you encounter the light blues and bright white indicative of the sediment coming
[15:31] from the river if you look in the bottom right part of the image you see numerous black lakes
[15:38] this black water is indicative of sedom look again at the blown-up regions i just described again take a moment to
[15:48] look at the diversity of colors across the scene the inherent optical properties of the material in the water give the water its
[15:55] characteristic color inversely it is possible to use the color of the water we see from the imager and infer the inherent optical
[16:04] properties of the water to get it questions like what is the chlorophyll concentration what is the clarity of the
[16:10] water water how much cedam is in the water these questions are the types that we can relate to water quality measurements
[16:17] taken in situ now i'd like for you to look at the plot on the right you have along the x-axis wavelength
[16:27] and along the top here you have a really nice nice visual cue of what colors we see in the
[16:33] visible range it's like a prism from blue to red and then it also we see the near ir
[16:39] the remote sensing reflectance spectra you see in this plot correspond to the examples on the left please note these are schematic
[16:47] illustrations of remote sensing reflectance spectra not the actual spectra for those waters these spectra are intended to
[16:57] demonstrate that materials in the water have different signature remote sensing reflectance spectra or something we refer to as a spectral
[17:05] signature signature look at the sediment spectrum in orange on the plot it has a high magnitude across a broad range of the spectrum it
[17:12] is also somewhat reflective in the near ir ir in the image on the left our eye sees a
[17:17] brightly reflecting target now look at the sedan spectrum in the plot it has very low reflectance across
[17:25] the range and when you look at one of those lakes it appears black now look at the chlorophyll in green it
[17:32] has a peak in the green region of the visible spectrum between 500 and 600 nanometers and then flattens towards the
[17:38] near ir note the small peak at around 680 nanometers nanometers this is due to phytoplankton fluorescence fluorescence again these spectra are hypothetical
[17:48] illustrations of what a pure pixel would look like for each of the samples at the water surface
[17:54] now imagine mixing these spectra so that the peaks and troughs you see here are blended blended that is what a natural sample would look
[18:01] like and that is what is used by remote sensing algorithms to estimate the concentrations of the different types of
[18:07] material in the water the spectra here assume no effect of the atmosphere this is a queer sampling right at the surface
[18:16] in reality though the light that a sensor measures has traveled a long and complicated path before arriving at the
[18:22] sensor sensor sunlight entered the earth's atmosphere traveled into mostly a downward path towards the surface the light hit the
[18:30] surface some reflected sun penetrated the surface all while being absorbed and reflected across the spectrum in different waves
[18:38] to give the light its spectral shape once it was re-emitted the surf from the surface surface that re-emitted light then traveled
[18:45] upward through the atmosphere and back out of the top of the atmosphere where it was measured by the satellite sensor
[18:54] satellite sensors measure top of the atmosphere radiance the toa radiances result from a combination of atmospheric and surface
[19:03] conditions that i just described please look at the image at the right wavelength along x-axis and total
[19:10] at-sensor radiance look at the black curve that represents the surface radiance of a natural mixture of water types
[19:20] now think of a camera on an airplane that is flying spirals over the water target first very close to the surface
[19:27] and then going around and around in altitude as it rises in the air column collecting imagery at many different
[19:35] altitudes which are represented in the legend of this figure note how the spectrum changes focus on the region of the x-axis
[19:44] between 400 and 500 nanometers note as how you go higher in the atmosphere there's more light being
[19:52] collected collected why might that be that is due to the scattering of light from the atmosphere that is making its
[19:59] way into the sensor it is necessary to remove the effects of the atmosphere so the spectrum we see is
[20:05] of the water surface so that we can estimate the materials contained in the water using only the shape of the
[20:12] spectrum specific to the water take it a moment to look at that 400 to 500 nanometer region that is an area
[20:21] where atmospheric aerosols particularly influence the toa radiance it is also a part of the spectrum that is important in chlorophyll algorithms
[20:31] if you can't correct for your atmosphere you are not going to obtain very good chlorophyll estimates the goal of atmospheric correction is to
[20:42] subtract the atmospheric path and specular reflectance or the mirror type reflectance right off the surface of the
[20:48] water water from the total at sensor spectrum to arrive at a water leaving radiance which is then converted into a remote sensing
[20:55] reflectance reflectance removal of the atmosphere requires radiative transfer modeling along with an understanding of atmospheric corrections excuse me atmospheric
[21:05] conditions conditions water vapor aerosol information relative humidity and a few other variables variables various radiative transfer models exist
[21:15] and some are embedded in image processing software we emphasize the importance of atmospheric correction here because for
[21:23] those algorithms that require atmospherically corrected data it is important to take care to choose the best settings or parameters for that
[21:31] correction correction not all algorithms require atmospheric correction especially those that look at relative differences in spectral shape
[21:40] but for those that do require it an understanding of why is needed is essential these images show the narragansett bay
[21:50] rhode island in the u.s on the left is an uncorrected image taken above the atmosphere atmosphere on the right is the same image but this
[21:58] time with the effects of atmospheric gas aerosols reflection off the surface water column vapor removed so the only
[22:05] quantity that is represented is the water leaving radiance because water is a dark target a faulty atmospheric correction can introduce
[22:12] mistakes into the resulting image the algorithms we use to estimate chlorophyll c dom and suspended sediments are sensitive to variability
[22:22] in the remote sensing reflectance if an image is improperly corrected then inaccurate estimates of these data products will result
[22:32] next up we review data processing levels from level 0 which is the rawest form of the data to level one the geolocated and
[22:40] calibrated data to level two data products derived from level 1b and to level 3 which are gridded and quality controlled
[22:51] and finally to level 4 which are the derived variables for model output many of the data products we will work
[22:57] within our cdas exercises in this webinar series are the level 2 data so the geophysical data products prior to
[23:04] being projected what are the details of the processing level level this slide walks through the details of
[23:12] the processing levels we are not going to go into a great deal of detail right now on this but i encourage you to
[23:17] download the pdf of this presentation for this slide and also for a series of slides that will come later they will be
[23:24] excellent for reference when you design your water quality monitoring program the point we'd like for you to take away
[23:31] from this slide is that greater skill is needed to process from a lower level it is possible to obtain level zero data
[23:38] from nasa for some sensors but you will need to have more training to understand the parameters you select to process to
[23:44] a geophysical data product so we've talked about aquatic optics and we've started talking about remote sensing data products and the different
[23:52] processing levels that are defined in the community now let's talk about which sensors are used for water quality monitoring and
[23:59] why why here you see a list of the sensors that are used for water quality monitoring down the left most column is the
[24:07] satellite chassis where the sensor is located located in the middle is the name of the sensor and along the right column is
[24:13] information about the image swath width spatial resolution and temporal resolution resolution how do you decide which sensor is the
[24:21] right one for your water quality monitoring needs typically the decision comes down to resolution and by resolution what we
[24:28] mean is the four types of resolution spatial resolution spectral temporal resolution and radiometric resolution please look at that column on the right
[24:39] there we list the spatial resolution and temporal resolution is your water body a few kilometers in diameter does it change on a monthly or
[24:48] seasonal scale then you may wish to use the landsat 8 oli sensor for its 30 meter spatial
[24:54] resolution and 16 day revisit rate are you monitoring for harmful algal blooms in a large lake system in order
[25:01] to notify water intake managers if there is a cyanobacterial bloom near the water intakes intakes then a sensor with a relatively frequent
[25:09] revisit rate like modis or veers might be a better choice for your needs do you wish to monitor for water clarity and
[25:16] lake systems that may change weekly or fortnightly fortnightly then a program that uses both landsat 8 oli and sentinel 2a and bnsi might be a
[25:25] way to observe changes over a temporal resolution that makes sense for the problem problem there are always trade-offs in the
[25:32] decision of which resolution to use the important element is to create a workflow and constantly evaluate if it
[25:39] is addressing the problem at hand we are lucky that due to earlier efforts by earth scientists and the investment
[25:49] of space agencies that we are now in a golden age of satellite aquatic remote sensing sensing this has left us with a long time series
[25:59] of observations while there is limited overlap among all of these sensors listed here in terms of spectral spatial temporal or radiometric
[26:07] resolution it is still possible to piece information from this important historical data set please take a moment to look at each of
[26:16] these satellite missions this is a rich data set to mine to understand current water quality questions and to begin to understand how
[26:24] aquatic systems have changed since the beginning of the time series the spatial spectral and temporal resolution available from these missions
[26:34] means that we can monitor water quality and respond to events in the natural system system when we think of spatial spectral or
[26:42] temporal resolution it's pretty straightforward what we mean less often do we address the importance of radiometric resolution or how much
[26:49] information is contained for each pixel this matters in aquatic remote sensing because the signal is so low from water
[26:56] targets and we need a sensor with a dynamic range to adequately sense the surface surface in one respect the missions shown here
[27:04] vary widely and that is with radiometric resolution is the amount of information in a pixel it is expressed as bits
[27:17] looking at the image on the right it is the same scene in each of these three panels but observed with different
[27:23] radiometric resolution the images go from 2-bit to 4-bit to 8-bit data notice how the scene changes as you scan
[27:33] towards the right details in the 2-bit image seem rather homogeneous homogeneous whereas details in the 8-bit image begin
[27:42] to emerge notice the white plume in the lower right of the images note how what looks like roads
[27:54] in the plume begin to emerge in the 8-bit data this is possible because the dynamic range is greater in the 8-bit data and
[28:03] subtleties in the image begin to emerge because there is enough information capacity per pixel for the slight
[28:09] differences in reflectance to be recorded recorded radiometric resolution is related to signal to noise of the sensor
[28:17] because water is such a dark target and therefore little very little light is being re-emitted from the surface we
[28:23] need a sensor with a sensitivity to observe very low levels of light the higher the signal-to-noise ratio the
[28:29] sensor the better for aquatic remote sensing as it means the sensor will be able to detect light and register even
[28:35] subtle differences at very low magnitudes in the next several slides i'm going to move somewhat rapidly we're going to review the temporal
[28:45] spectral and spatial resolution of the different satellite missions used for water quality monitoring we also wave note the wavelength
[28:53] specific signal to noise ratio for these sensors sensors again this is going to be a lot of
[28:59] information and tables and we encourage you to download this presentation and use these tables as a reference later
[29:05] when you are choosing a satellite sensor for your needs rarely do you find a reference with all
[29:11] four types of resolutions summarized in one place often signal to noise is left out in general fact sheets about satellite
[29:19] missions but it is important to know what it is for your sensor of choice so that you may know if it is high enough
[29:26] to make meaningful observations and to detect changes in the aquatic system over time here we see the spectral spatial temporal resolution
[29:38] for landsat 7 etm note the signal to nomines or snr is in the 15 to 35 range across the different
[29:46] wavelengths here here we see the spectral spatial and temporal resolution plus signal to noise for landsat 8 oli
[29:59] the spatial and temporal resolution are very similar to landsat 7. there is some difference in the spectral
[30:05] resolution the most notable addition is band 1 used for coastal applications note the big difference in snr between
[30:13] landsat 8 oli and landsat 7. landsat 8 is more sensitive and better tuned for aquatic remote sensing than
[30:20] landsat 7. it has a signal-to-noise ratio range of about 150 to 364. here we see the spectral spatial and
[30:33] temporal resolution plus snr of modis modis was designed to be an aquatic sensor so it has a high snr it was also
[30:41] designed primarily for open ocean applications and so it has a much coarser spatial resolution than landsat 1000 meters instead of 30 meters per
[30:49] pixel pixel the spectral resolution of modis is greater than landsat 8 the reason being that modis was designed with aquatic
[30:56] targets in mind and the algorithms used for aquatic remote sensing require more bands in the visible range to capture
[31:02] the differences in spectral shape among different water types modis has a frequent revisit rate of about one to two days
[31:10] note that snr is in the range of 586 to 1087 much greater than the 15 to 35
[31:17] range of landsat 7. here we see the spectral spatial temporal resolution plus signal to noise of viirs like modis it has a revisit
[31:27] rate of around one to two days its spatial resolution is 750 meters and it has a similar though not matching
[31:34] spectral resolution to modis its snr is lower than modis on this slide we had to break the table
[31:44] up a little bit here because there are so many wavelengths you see the resolutions for the sentinel
[31:49] 2 msi remember this is the sensor that is most similar to our landsat 8 sensor though it has a more refined temporal
[31:56] resolution resolution between the two missions of sentinel 2a and 2b of five to seven days it has a finer spatial resolution at 10
[32:05] meters meters and a somewhat lower snr than landsat 8 with a range of 50 to 174. finally we see the resolutions for
[32:17] sentinel 3 olci or ulchi this has a much coarser temporal resolution than the others at 27 days it
[32:25] has the highest spectral resolution of the satellite sensors reviewed in these slides slides the spatial resolution comes in two
[32:31] choices of 300 or 1200 meters sensor has a high snr suitable for aquatic targets as we said before which sensor you
[32:43] choose for your water quality monitoring program is often dependent on the spatial temporal spectral and radiometric resolution of the sensor
[32:51] there is no one-size-fits-all solution for all water quality monitoring applications what are some examples of water quality
[33:03] monitoring programs that use remote sensing sensing we have curated a short list of water quality monitoring programs that use
[33:11] remote sensing observations these include a water quality information and capacity building portal the earth observation for sustainable
[33:20] development water quality monitoring monitoring water quality in baltic seas and finnish lakes the unspider knowledge portal and a program to
[33:30] evaluate suwanee river discharge and its effects in the big bend region of the west florida shelf in the gulf of mexico
[33:40] we encourage you to follow this link and the links on the subsequent slides to learn more about these water quality
[33:45] monitoring programs that incorporate incorporate satellite imagery the unesco water quality information and capacity building portal is based on
[33:55] optical data from landsat and sentinel-2 satellites satellites this portal is a data visualizer with coastal and inland water body data from
[34:04] throughout the globe at 90 meter resolution resolution it also highlights particular regions of the world to illustrate changes over
[34:13] time for the calendar year of 2016. for example the mekong delta the caucasus highlands florida lakes and mecklenburg lake
[34:22] plateau and others the portal provides turbidity chlorophyll-a chlorophyll-a a harmful algal bloom indicator total absorption and surface temperature as
[34:32] data products to view this website provides a fact sheet on the value of the european space agency's earth
[34:44] observations for water quality monitoring it provides information to justify how the frequent revisit rate and high spatial resolution of the
[34:53] sentinel 2 series imagers are ideal for observing water quality in smaller water bodies that may have dynamic processes
[35:01] that change over relatively short periods that would not be captured by sensors with longer revisit rates this link takes you to a water quality
[35:13] monitoring program developed by the finnish environment institute that incorporates a combined approach of using the sentinel series of satellites
[35:21] and the landsat 8 satellite to observe water quality parameters such as chlorophyll chlorophyll turbidity turbidity cedom and sucky disk depth a proxy for
[35:31] water clarity it is a comprehensive overview of their program with valuable citations to support the reasoning behind the program
[35:39] i encourage you to look at it and learn more more especially if you're considering developing a remote sensing program for
[35:45] inland water bodies this link provides a helpful overview of satellites sensors and spectral bands used for water quality monitoring with
[35:58] particular attention paid to turbid coastal waters it has a complete list of satellite sensors and their spatial spectral and
[36:06] temporal resolution that goes beyond the number of sensors we highlighted in this webinar series i encourage you to take a look at this
[36:13] link to learn more this water quality monitoring program and its link is near the bottom of the
[36:20] page on this slide was established to study water quality as it relates to suitable seagrass habitat in the big bend region of the
[36:29] state of florida in the united states seagrasses are fully submerged vascular plants and they are sensitive to light
[36:36] limitation and degraded water quality and degradation in water quality can affect their abundance and distribution seagrasses are important nursery grounds
[36:47] for many commercial fishes this program built a regional algorithm for water quality parameters like water transparency transparency cedam chlorophyll and turbidity
[36:58] because of the unique nature of the suwanna suwanee river that flows into this region standard algorithms did not
[37:05] work here so the researchers purpose-built algorithms for the region they are now using these algorithms to look at historical seagrass distribution
[37:15] and how it relates to water quality parameters in past imagery the programs described here illustrate the diversity of water quality programs
[37:26] that use satellite imagery as you saw they are at different levels of maturity with some being used in a
[37:33] preliminary fashion and visualization tools freely available on the web at their fundamental level water quality monitoring programs that
[37:45] incorporate remote sensing observations follow this basic program workflow that you see here and we're going to walk
[37:52] through all of these steps starting from the upper left and dark green green first you must identify the water
[38:00] quality quality problem problem if you are already a part of a water quality program you probably already have done this
[38:09] a problem could be a point source pollutant into a bay or the prevalence of cyanobacterial harmful algal blooms or cyanohabs
[38:18] next next evaluate if remote sensing can complement an in-situ sampling effort remember remember remote sensing observations are a
[38:28] supplement to a water quality monitoring program not a replacement not all water quality monitoring problems can be addressed with remote
[38:37] sensing observations it is wise to critically evaluate if your particular problem can be addressed with remote sensing observations before
[38:47] you invest a great deal of effort into doing so next choose sensors and data products appropriate for your water quality
[38:56] problem problem this may mean assessing the existing product suite and deciding to design custom data products for your region of interest
[39:07] fourth fourth build a sampling strategy for coincident or at the same time in situ and remote sensing observations
[39:18] the in-situ and remote sensing workflows are parallel paths and you can see them in light purple down the middle
[39:25] while your satellite or aircraft sensor is flying over it is necessary to collect in-situ or ground-truth samples
[39:32] to validate your imagery observations after collecting the data processing it applying quality control measures it is time to statistically compare your
[39:44] in-situ observations with their corresponding remote sensing data product values once this analysis is complete and you've determined your uncertainty
[39:54] estimates it is appropriate to communicate your results to stakeholders this workflow is the framework for a water quality monitoring program
[40:04] remember there is no one-size-fits-all approach you will find that your workflow will differ from the one listed
[40:11] here here at a minimum though this is a general framework for how to proceed we will refer to this diagram several
[40:18] times throughout the next two webinar parts parts we've come to the end of our lecture for part one
[40:24] thank you very much and we look forward to having you in the exercise so i'm just going to take a moment now
[40:36] to demonstrate the how to access and download the modis and data that you'll be using in today's
[40:42] exercise i'm also going to demonstrate grabbing landsat 8 oli data that you'll use in part 3 of the webinar series
[40:53] so the region of interest that i'll be focusing on in the exercise is a black water and that is the suwanee river
[41:00] and it is in the state of florida in the united states and it's in the west florida shelf region and you can see
[41:06] here in this image on the right it's been somewhat stretched but you can see it's quite distinctive this black water
[41:13] from the river flowing into the ocean and that black water is because of the high concentrations of colored dissolved
[41:18] organic matter and that water derives from the bogey okiefenoki swamp which is located in georgia it is tannin and lignin rich and
[41:29] really interesting water very rich in nutrients nutrients from these organic carbon compounds that are present in it
[41:38] so what we're going to do is we're going to go to the ocean biology processing group from nasa their level 1 and level
[41:45] 2 browser and we're going to go and we're going to look for the data that's within these coordinates
[41:52] that you see listed here and i'm interested in the 20th of february 2015. for my interests for the ocean biology
[42:03] processing group level one and two browser i'm going to be grabbing the modis aqua data so i'm going to go ahead
[42:08] and escape out of here and go to the website and where i'm going here is listed across the top the ocean color website
[42:16] and i want to access the data and it's going to be this date the level one and
[42:20] two browser that you see here i've already told you that i'm interested in looking at modis aqua that
[42:27] have the check box listed there and the date of interest is february 20th 2015 because that's the same date that the
[42:35] image in the nasa earth observatory um website was collected so february i'm going to click on february okay
[42:44] i'm gonna look over here at the month and it says february 2015 right here and i'm gonna click on the
[42:51] 20th and you can see because it's already purple that i've already clicked on that once before so i just want that
[42:56] day day and i'm going to put in my coordinates here so i'm going to have 29 north
[43:03] 25 south negative 81 because we're on the western hemisphere and negative 84. okay so that's my bounding box my
[43:12] boundary coordinates and just to be sure i'm just going to go back and check to see that modus aqua is still checked the
[43:17] date is still checked okay now i'm going to click on find swaths and there you go i have the swaths that are listed here
[43:27] the swath is listed here there was just one collected on that day for that region and you can see here a list of
[43:33] links links this is the level 0 data level 1a level 2 data for ocean color oc inherent optical properties iop
[43:45] and sea surface temperature sst the data that we're going to use in today's exercise which is also available
[43:53] on the website for the course is going to be the oc iop and sst data but now you know how to actually
[44:00] download it yourself so let's say we're interested in looking at the landsat image that was originally used for this
[44:09] the ocean observatory work there i'm going to move over to the earth explorer website which you can see
[44:17] in the link here in my search bar and i know that it's in the region of the suwannee river so i'm going to look
[44:25] for suwanee florida florida for my address place i'm going to click show show make sure to spell it correctly um
[44:34] sometimes i mistake that so it's s-u-w-a-n-n-e-e s-u-w-a-n-n-e-e great i'll click on that link you can see the updated um
[44:44] pin that's been dropped into the map i am interested again in the 20th of february of 2015
[44:51] so let's go up to february 2015 2015 and click on the first and then let's just go ahead and search the whole
[45:00] month 2015 click on that let's look at the data sets the data set that i'm interested in
[45:12] looking at for the purposes of this um webinar series is i'm going to grab this collection level one collection one
[45:19] level one data click on the check box there okay okay additional criteria i'm just gonna leave this one alone i
[45:30] just to verify that i'm just looking at date time so i'm going to click on day if you forget this it's okay
[45:37] and then click on results alrighty so what you see here is it's provided two results during the month of
[45:44] february of 2015 i have the 20th february that's what i'm interested in and the fourth of february i'm not
[45:49] interested in that one if i click on this little foot it shows me the footprint of the image that looks pretty
[45:55] consistent with the image that we are looking at just a few moments ago and if i want to look at okay what is
[46:01] the image that i'm looking at here okay yeah that looks like what i the area that i'm interested in
[46:06] and then i have an account and you need to go ahead and register for a free account i've already logged in and i'm
[46:13] going to download the data so i click on the little green arrow download and i am interested in
[46:18] downloading level 1 geotiff data product and i will click download and that will start downloading the data i'm not going
[46:25] to do so right now it takes about the same amount of time as it gets up to it takes you to get up
[46:30] and go get a cup of coffee depending on your internet speed so that's how you get the data
[46:52] okay so we're going to go ahead and get started on the exercise and it's on the basic functionality of cds for those of
[46:59] you who participated in our september 2018 2018 uh webinar some of these skills that we're going to talk about today may be a
[47:06] little bit of a repeat but it's always good to review the skills again um we're going to go at a particular
[47:12] pace through this and we understand that we're going to try to go to a moderate pace it may be a little fast it may be a
[47:20] little slow for some folks just a reminder we're going gonna have the recording on the web um and you'll be
[47:25] able to go through the recording and also the slides um to to work on this exercise so we've written up this
[47:31] exercise in a um in a pdf document and we hope that it will be comprehensive enough that you can understand it as a
[47:39] standalone document but we understand that sometimes watching it being done in the video can be very useful as well so
[47:46] let's get our hands dirty and really dig in so the objectives and learning outcomes of this exercise are to learn how to
[47:56] work with aquatic remote sensing imagery using nasa's cdas image processing software software we hope that you gain knowledge about
[48:04] aquatic remote sensing data products and also gain some knowledge and processing of remote sensing imagery today part one we're doing the basic
[48:14] skills of cdas in part three on june 19th we're going to dig in again and we're going to be doing even more
[48:20] advanced skills in cds so be patient we will be getting to a lot of skills in this course
[48:32] some of the material that was used to develop this exercise was derived from existing seat ass training materials and we want to point
[48:41] you to these links that you can see here the cds introduction um cdas tools an exploratory walkthrough and then very
[48:50] importantly the cds help pages are incredibly helpful and so um sometimes you have to kind of dig down into the different layers but
[48:58] it'll answer a lot of your questions there not listed here is the link for the forum that is really useful if you have a
[49:07] specific question on a particular task that's more in advance so we probably won't talk about that today very much
[49:13] but as you develop your skills in cdas cds has an enthusiastic and extremely helpful forum where you can put
[49:19] questions online and it'll be answered fairly promptly so we talked about that blackwater region in the lecture the suwanee river
[49:29] mouth in florida and if you look at this map here just to give you a frame of
[49:34] reference of where it is if you're familiar with florida this will be pretty straightforward but if you're not familiar with florida i
[49:41] just want to point out it's a state in the united states many people are probably familiar with
[49:46] miami which is located in the southern tip of the peninsula many people have probably especially if you have kids have been to the orlando
[49:53] area area and along both the east and west coasts of florida are some of the most beautiful tourist destinations for
[50:01] swimming beaches and the like tampa florida and st petersburg has an active research component of ocean science researchers who are working on a
[50:11] lot of important problems that they find in this region related to harmful algal blooms and so if you're really
[50:17] interested in harmful algal blooms especially the kind that aerosolize toxins that flow over land there's a lot of really important
[50:24] work that's being done out of tampa and st petersburg the the studies that or the region that we're
[50:30] interested in for this exercise is up here more northward of tampa tampa and it is at the outflow of the sewanee
[50:38] river mouth and the swami river is this beautiful river that's rich in sedom and it drains some of these boggy swampy
[50:47] lands of northern florida and so because i wanted to have you guys really get a taste of what cedom looks like i
[50:54] chose this river system and it's outflow into the coastal region so you can get a real view of what cedam rich water looks
[51:00] like so the basic functionality of sea das we demonstrated the beginning or before this exercise and at the end of the
[51:12] lecture lecture you were provided with instructions on how to download the data for this exercise we've also provided the data on
[51:19] the rset website so if you didn't have time to download it that's fine but we recommend that you download the data
[51:25] from the website you can find the data in the um and you'll see it here and there are three
[51:30] files that we would like for you to use for this exercise they are from aqua modis and you'll see that the first one
[51:37] is appended with oc for ocean color the second one is the same scene and it's the data products for inherent
[51:44] optical properties or iop and then the third file that you see here is for sea surface temperature or
[51:51] sst sst so make sure to save these files into a folder and my preference with working with cds just because of my history with
[51:59] cds is to not have it too deep in the file structure so i usually try to put
[52:03] it maybe one or two folders down from the c directory or the main user directory it's up to you how to operate
[52:10] it but that's just how i've been trained to use cdas so when i say not too deep
[52:14] what i'm referring to it's not too far down the folder the path or the directory structure all right
[52:23] so we're going to launch cdas and i'm going to move off of the presentation mode here in powerpoint and i'm going to
[52:28] move into actually operating seat ass so there may be a couple of little glitches here but we're going to give it a go
[52:36] so what you want to do is go and find seat ass and i see it here down on my dock
[52:45] i'll keep this um powerpoint in the background and i'm going to click on it to open it
[52:54] it's always a good idea with some of these image processing software to have a healthy understanding of patients
[53:03] so there may be some waiting and some of the image processing and if any of you are used to working with satellite
[53:07] imagery you know there's always going to be a slight delay with some of these so it's going to prompt you unless
[53:12] you've disabled this to check for new software version i'm just going to say no because i don't want to do that right
[53:18] now go ahead and click no what you see here is the default view of cdas cdas what you see also may not exactly match
[53:29] what i see here in the the video and part of the reason for that may just be i'm using a mac you might be using a
[53:36] pc pc you might be using a different version of cds i'm using 7.5.3 and as you get more proficient using cds
[53:45] there are ways to change the layout and to save the the layout that you prefer and so if you've ever worked in cdas and
[53:51] made some adjustments to it it may be opening a little differently than how i'm how you're seeing it here
[53:57] so moving on to page 8 of the exercise exercise we're going to be talking about basic functionality skills in cdas and in here
[54:07] we're going to learn about how to open a file how to choose rasters so that's probably going to be pretty much a
[54:12] review of that september 2018 training and then we're going to walk through some of the basic features of cdas some
[54:19] of these we've covered in a previous webinar some of these will be new we're going to talk about no data
[54:26] land masks zooming synchronizing flags map location create a color bar adjust the color bar grid lines export image reproject and
[54:37] crop this document that i'm using here and the steps that i'm going to be going through through i'm going to the document provides a
[54:47] general description it's not going to go step by step through every step of the process explaining it to you
[54:54] so not every step will be explained in the document and especially as later items here on this bulleted list you're
[55:03] gonna we're gonna kind of assume that you've already learned how to do some things we won't be going through quite
[55:08] the detail of explaining things that we've already explained once before we've assumed that you're going to have
[55:12] some autonomy in going through this process process alrighty so let's open a file so just to see
[55:20] see where my file is located that i saved for this exercise i have the top folder here and i put everything in our set
[55:28] training for the file the data files that i want to use um i have sewanee river um as my folder
[55:36] you can name it whatever you want to this is what i've named it um and then i
[55:40] have made a folder called modis and i just kept it as notice i didn't specify which which sensor or which satellite it was and
[55:48] then i have my files here which were listed already in the document that you have i have my oc ocean color
[55:54] iop and my sea surface temperature alrighty so i know that the folder is there i'm going to just pop up fidast to
[56:03] put it up to the top and i want to navigate to it now in cdas to open the
[56:08] folder you can do this a number of ways you can do file open like this as you get more proficient you can also
[56:15] just click on the folder but i'm going to just follow the interactions as i had written them i'm
[56:19] going to do file open and i'm going to navigate to the correct folder folder so so as you saw i had my main folder
[56:28] and then i have our set training and then i want to choose the correct siwani river so i'm going to choose that one
[56:34] you can see i've been messing around a little bit so double click there i'm going to look at modis
[56:39] and which file i want the oc so i'm going to click on that and i'm going to
[56:42] click open product take a deep breath wait till it loads i'm going to scooch out this let's see make sure it's active
[56:54] and it's scooch out my pain a little bit so i call these panes like window panes so that i can see the name of the file i
[57:01] see it here i see metadata flag bit coding and rasters with my mouse i'm going to click on each
[57:09] of these three triangles next to these folders and just kind of look at them and kind of explore them
[57:14] so i'm going to click on that one and then flat flag bit coding and rasters rasters to expand the view and you can see an
[57:22] image of this on the right hand side of page 9. so what i want to do is i want to now on
[57:28] page 10 explore some of the file attributes attributes and i'm going to just kind of do this
[57:33] quietly and what i encourage you guys to do is just click on each of the attributes in metadata and flag bit
[57:38] coding or some of them and just take a look at them and you're going to see windows are
[57:43] going to pop up it's going to get messy that's okay and just take a few minutes and just for
[57:48] moments and just kind of look at it to get some ideas so i'll do that quietly now
[58:21] the global attributes can be really helpful in understanding what were the conditions when the imagery were collected
[58:29] collected open this up a little bit more gives you an idea of who named it what the processing was
[58:40] which reprocessing they did how what level it went to level two which we discussed in the lecture
[58:48] and then some information about the the shape of the box or the the latitude and longitude um
[58:54] information some of the information on how they did atmosphere correction and the choices that they used and some of the flags
[59:06] that were identified in the image just going to look at some of these others just take some time and
[59:18] open these up so you can look at them okay here's the name of it here are the
[59:22] units that it's in for the particular data product chlorophyll for example okay what's the name of the unit
[59:33] which reference did they use to compute it which model did they use what are the units then i'm going to also open this l2
[59:42] flags flags this talks about l2 flags gives you an idea of some of the pixels may not
[59:49] meet some threshold in the processing and it'll identify what that threshold or what failure an alert alert happened to make it so that they failed
[59:59] and then they don't show up as no data so for example atmosphere correction failure it's not really a failure but
[1:00:05] that it's land so they just make it a no data um situation because we're this is aquatic so we just mask out the land
[1:00:14] go ahead and close these windows that you were just opening for the metadata and the bit coding so i'm going to go ahead and
[1:00:23] close those now and then i'm also going to collapse the folders so that i i don't they don't
[1:00:31] have to take up so much space in the pane so by the end of this you should
[1:00:34] have what looks like here on the left-hand side of the pane where we're just looking at the um the raster folder
[1:00:41] that's been expanded so um i don't really talk about this much in the lecture but there's a
[1:00:48] website called nasa's worldview on page 11. and this is a really easy way to scan for imagery that is clear so that
[1:00:55] you can then go to the level one and two browser that we talked about in the lecture to actually go and grab the data
[1:01:01] um so i really encourage you this is just a little aside is that it's very helpful to use worldview as kind of get
[1:01:07] this frame of reference but oftentimes worldview is kind of limited in what data products it'll show you i usually
[1:01:13] view it for chlorophyll and sea surface temperature temperature but they use these standard algorithms but there's a lot more algorithms than
[1:01:20] are often available in these browsers that you may be using like worldview so for example there are multiple
[1:01:26] chlorophyll a algorithms that can be used out there and there are a lot of different algorithms that can be used
[1:01:31] for cdom and so one of the nice things about downloading one of these level one level two browser data product
[1:01:39] or files is you get to see the diversity of the data products that are available the other thing is if you decide to go a
[1:01:47] little further and download data that's even more raw than level 2 data if you decide to download level 1a and process
[1:01:54] it through the level 2 you can choose this huge diversity of data products that are available that aren't even
[1:02:00] available in this level 1 and 2 data and so the nice thing about that is as you
[1:02:05] build skills using cdas as we're showing you today and in part three and especially with amita she's going to be
[1:02:12] walking through some of the processors that are available it starts to expand and open up the opportunities for you to develop or to
[1:02:20] derive a lot more data products than what are the standards that you would see like in something like worldview
[1:02:26] so just to give you a taste of what might be possible in the future we're going to talk a little bit about that
[1:02:31] when amita demonstrates some of her landsat data but this may be the topic of a future our set training is really
[1:02:39] getting into the processors and really deriving some of those other data products that are not typically available in standard suites
[1:02:46] so little aside there what we want to do now though is go back to the rasters folder that we have here and just
[1:02:52] explore it a little bit so i'm going to click on some of these triangles here to expand it
[1:02:59] and see aot rrs kd and then a whole listing of others aot is aerosol optical transmittance that gives you an idea of the material
[1:03:11] or how much light is attenuated through the atmosphere and that's really useful in understanding atmosphere correction and that's used in atmosphere correction
[1:03:20] we will not be using aot so i'm going to go ahead and close that one remote sensing reflectance these are
[1:03:26] think of it as the color we talked about this earlier in the lecture remote sensing reflectance is one of the
[1:03:31] parameters that we'll use to describe the ocean color and you can see numbers after these and what those numbers are
[1:03:36] as you can see here are the wavelength or the center wavelength for that particular band so remote sensing
[1:03:43] reflectance at 412 443 469 and so on chlorophyll a is derived using level 2 processor and when you were looking at
[1:03:52] the metadata you could see which algorithm they were using and then an alternate chlorophyll algorithm is also
[1:03:58] processed processed kd or the diffuse attenuation that's a kd is a k is attenuation d is diffused
[1:04:06] so so k d k is diffuse attenuation d is in the downwelling direction so the diffuse attenuation in the downwelling direction
[1:04:14] at 490 nanometers is a really good estimate that's used for understanding particles in water and so it's used as a
[1:04:21] proxy for particles we have particulate inorganic carbon particulate organic carbon we have instantaneous photosynthetically active radiation normalized fluorescence line
[1:04:32] height which can be used as an alternative to chlorophyll estimates for an understanding of the chlorophyll or
[1:04:38] phytoplankton biomass you have par photosynthetic available radiation you have a listing of flags you actually have an image that will
[1:04:47] give you what the flag names are for the particular pixel and then you also have this geographic information longitude
[1:04:53] and latitude so what i encourage you to do is take a moment moment and and look at
[1:05:01] some of the the imagery that you've got here so what i'm going to propose that you do here on
[1:05:07] choosing a raster is let's go ahead and double click on chlorophyll a all right i'm now on page 12.
[1:05:19] when you look along this list of rasters notice that there was no sea surface temperature that's because it's
[1:05:24] contained in a different file this is the oc file for ocean color we also want to view the sea surface
[1:05:30] temperature file so what i'm going to do is this time i'm going to use a shortcut to open up sea surface temperature
[1:05:36] i should probably take a moment and pause here and just point out here's the peninsula of florida
[1:05:41] here is the view of chlorophyll estimates offshore our region of interest is right here off the sewanee river you'll notice that
[1:05:50] this imagery looks kind of stretched it doesn't really look right and that's because it hasn't been reprojected so we
[1:05:57] have an understanding of what the longitude and latitude are but it hasn't been projected on any sort of coordinate
[1:06:01] system so it's going to look kind of stretched and weird and we're going to work with this non-projected data for a
[1:06:06] while um but at the end of these steps we'll actually reproject it so this is florida you are looking at the correct
[1:06:13] image okay let's go back and look at sea surface temperature we're going to open that file open product
[1:06:23] now i'm on page 13. i'm going to collapse this just to make some room for us okay
[1:06:33] okay look at the rasters of the sea surface temperature file and now what i'd like to do is i just
[1:06:39] want to open this sst file right here there are a variety of files here we just want this sst one
[1:06:50] okay okay um just to recall the sewanee river plume is located in this region here it's a little hard to see because all
[1:06:57] you see is just a change in color from offshore warmer waters to ensure cooler waters it's naturally occurring black water
[1:07:08] river river and just as a recall it's the high concentrations of color dissolved organic matter makes it that way
[1:07:15] we're really interested in maybe seeing if we can observe the cdom in the water and so what we want to do
[1:07:22] now is we need to open yet another file and it's the iop file so i'm going to go
[1:07:27] ahead and go back to open so we see the sea surface temperature here now we're going to open the iop file
[1:07:36] okay and i'm going to declutter a little maybe a few tiley and open the rasters on that iop there
[1:07:47] are a lot of choices here be cautious make sure you choose the correct one we want the light absorption that's what
[1:07:55] the a is of the the tridel and gelb stuff geldstuff is another word that's used for cedon
[1:08:03] so adg we want that data product and we want adg at 443. and it's been a while but if you recall
[1:08:12] from the optics overview um portion of the lecture if the slope of the line for cedom was noticeably higher for the
[1:08:22] reflectance in the blue in the 443 range and so that's the wavelength that they used to optimize for this algorithm so
[1:08:30] we're going to go ahead and open adg 443 giop giop and just for ease i'll probably just
[1:08:36] refer to this as the adg layer from now on and this opens a new file and you can see right across the
[1:08:45] top these tabs that are opening up so here's adg sst sst and chlorophyll a and these are the main ones that we're
[1:08:54] going to be working on throughout this exercise so let's go back to the make sure that we're on the adg one
[1:09:03] it's an estimate of the light absorption by cedom and so in this region where we have the river mouth
[1:09:10] we should see higher levels of sedom which is what we see here where high levels are red in the color bar that's
[1:09:16] being used displayed here not shown and blue are low concentrations of cedon okay okay so now what we want to do is we want to
[1:09:28] compare compare chlorophyll sst and cedom and so again just go back through and try clicking on the the different ones let's look at
[1:09:37] chlorophyll here we're going to use some of these new tools that we talk about we're going to pan and we're going to
[1:09:42] zoom in so this little hand here means pan which means i can inch it around like that and the pointer means i can
[1:09:49] click on particular areas and the zoom is just this magnifying glass right now we're just using the
[1:09:55] zoom up in this upper toolbar area okay so what i'd like to do is i'm going to zoom into this region of interest the
[1:10:03] suwanee suwanee florida area and so again i just want to point out i'm going to use just this um there's
[1:10:10] this gradient there's this range of values from near shore to offshore and again just to know it's kind of
[1:10:18] stretched and funny looking and that's because it hasn't been project reprojected okay okay so moving along to page um 17 let's see
[1:10:35] we're going to look at some of the features of the um seat ass the first one that we're going to use
[1:10:40] and i just want to point out elizabeth did this really nicely where i'm going forward on page 17 and onward
[1:10:47] you're going to have a listing of what the skill is that we're covering or what the tool is and then the description so
[1:10:52] on page 17 we have no data and no daily data term is highlighted on the left but
[1:10:58] you'll also see what other things are going to be coming up in the near future so um just keep an eye on that so the no
[1:11:05] data icon what we're going to do here is it's this circle with a slash through it and we're going to go ahead and click on
[1:11:11] that that and what it does is you'll notice in the observation here of looking at the chlorophyll
[1:11:17] chlorophyll is that it goes gray and what this is is it tells us that there's no data there
[1:11:23] i'm going to slightly adjust the size of my cds window here apologies this is just some viewing
[1:11:31] issues i've got let's scooch that over what i want you to do is to notice over here in this region where i've got pixel
[1:11:39] info info and the rasters along this pane on the right hand side of the view so watch
[1:11:45] what happens when i run my mouse over this region of under the rasters and the pixel info
[1:11:51] under chlorophyll a it says nan and that's my no data indicator but when i slowly move it out off
[1:11:58] the shore i realize this is chlorophyll here you start to see values for the chlorophyll concentration and you can
[1:12:05] see as you'd expect with red to blue being the high to low it starts to decrease as you go into the
[1:12:11] more blue regions that are located offshore all right i'm going to zoom back out to the full extent
[1:12:26] and i'm just going to do that very quickly here and i'll cover this skill in just a moment
[1:12:35] you can see the whole region of no data so i'm going to just drag my mouse over
[1:12:39] this whole region i've got data that's been estimated there no data in these regions doesn't necessarily mean that there was
[1:12:46] a cloud over that region it may just mean that the chlorophyll algorithm failed over that region or it could mean
[1:12:50] that there's land so i'm going to zoom back in try not to make anyone motion secure and i'm going to hover my mouse
[1:13:08] over some of these regions here and then see right here what does the chlorophyll concentration look like about
[1:13:15] just offshore of here you can see here i'm not going to match exactly in the description on page 19
[1:13:22] what the value is but you can see that you're in your rasters sub pane over here on the right you can see what that
[1:13:29] chlorophyll concentration is that's being estimated for you so what i'd like for you to do next is
[1:13:35] to repeat this no data step with both the sst and the io and the adg tabs so
[1:13:41] we're going to go ahead and click no data there and do this also for adg okay now that you've done your no data
[1:13:48] on all of these layers that you see here we want to save the session so what you would like to do is go up to
[1:13:54] file file session save as if it's the first time you've done it it may just say session
[1:14:00] save save so session save as and what you'd like to do is go to the correct location where you want to save
[1:14:07] the session and in our case it's swani river river modis modis this looks like a good place and we're
[1:14:15] gonna just call it part one exercise make it something meaningful for yourself this seems meaningful to me so
[1:14:23] go ahead and save that okay the guidance on page 19 actually tells you to save it as siwani river but it's
[1:14:35] really up to you what you want to name it you're the boss all right so next up we're going to go
[1:14:40] we're going to put on a land mask we want to look at the tabs of the lower
[1:14:45] part of the file manager this is on the left hand pane of the window you'll you can't see the full
[1:14:50] word but if you hover over the tab this is the file manager display all files so all open files in a tree view
[1:14:59] you also have the layer manager you have the mat the data masks and rois and also the
[1:15:05] color bar and so we're gonna be talking about a few of these in the next steps steps so under the tabs manager of the file
[1:15:13] manager what you're going to do is you're going to go to the mask this third one here
[1:15:20] and you can see here a listing of these different masks what i'd like for you to do is i'd like for you to click on the
[1:15:26] box next to land it really doesn't matter which view you're looking at here you could be in
[1:15:32] any of these three tabs that are along the top listed in the manager here in the view
[1:15:39] so after i hit the mask the lan mask you can see that the color changed okay so um great let's turn it off and
[1:15:48] on a little bit look at it okay okay that makes sense now what we'd like to do is we'd like to look at the mask um
[1:16:00] called cld ice you know it's not written out directly but it kind of gives you an idea of what
[1:16:08] it probably stands for we're going to go ahead and click that one on and you can see
[1:16:13] on this background of no data gray clicks on and it's white this is a subtropical region so i'm not surprised
[1:16:20] that we're seeing a lot of this white stuff stuff uh if you went to world view and looked
[1:16:24] at the same day of data um you would see that it's uh what the reason is for the cld ice
[1:16:34] mask mask okay so after you're done playing around with that let's go back up to land what
[1:16:39] we'd like to do is we'd like to change lan to black color just so the contrast is a little bit better between no data
[1:16:45] and land and what you're going to do it this kind of depends on which version or browser or excuse me type of operating
[1:16:52] system that you're working with you're going to double click this region um where it says color where it's dark
[1:16:58] gray i actually have to click it and then click again on the arrows and it'll provide for you a palette of color
[1:17:04] choices for your land mask i like black you can go crazy and make it like magenta that's not my cup of tea i like
[1:17:12] black i like subdued colors i'm going to ask you for whatever choice you make and i encourage black is to do
[1:17:18] the same thing for all of the land masks that you're going to do for all of the
[1:17:21] files in this exercise so we'll repeat that with sea surface temperature and with chlorophyll oh make sure to turn it on
[1:17:32] there you go and chlorophyll okay so we're on page 21 now and you can see that the land mask has been applied
[1:17:45] and each of the three tabs are open like you see here of chlorophyll sea surface temperature and adg
[1:17:51] what we'd like to do now is we want to start preserving some of the changes that we're making in the actual file and
[1:17:57] so we've clicked the um save the session so um say session save and when we do that session slave it's
[1:18:06] going to actually prompt us do we want to also change the files because we're starting to make some changes to this
[1:18:10] and we want to go ahead and click yes and um for each of the tab viewers what
[1:18:15] we'd like to do is we'd like to save the file and it's going to save it in this
[1:18:18] new format that's opened by cds and we're going to give the file the original name so we're just going to
[1:18:23] save over what we had or as the default that's being provided to us so go ahead and click yes
[1:18:30] in order to save the product it's been converted great that's what we want to do let's go ahead and keep this warning
[1:18:35] open do you really want to convert yes okay we want to make sure that we're in the right location
[1:18:42] we're going to save and it's going to save it as this format and we'll be prompted for this for each
[1:18:50] of the files that we're working on so remember we've got three files open so we have to repeat this
[1:18:58] make sure it's all going in the correct location okay so if you go back to your folder
[1:19:18] that you where you originally saved those files i just want to point out that you've been accumulating some new
[1:19:22] files these are the original ones that you were working with you've now created these new files the
[1:19:30] dim and dot data that you'll see pairs of those for each of the iop oc and sst
[1:19:36] folded files so when we start working with the data or when as we continue working with data
[1:19:42] we're particularly interested in working with these dot dim files so just a little administrative note there okay let's go back
[1:19:51] great session saved awesome okay we're now on the um page 23 of the exercise and would like to point you
[1:20:00] guys to is to start looking at this lower pane of the window here in navigation control so on the right hand
[1:20:08] side of the view of the whole viewer and it's the lower right pane of navigation controls what i'd like for you to do is using
[1:20:17] these controllers instead of the ones that were at least the upper two ones instead of the one at the top i'd like
[1:20:22] for you to start using this controller and what you can do is just click it and that's going to zoom
[1:20:29] in for the magnifying glass with the plus sign in it and as you click the one with the
[1:20:35] minus it starts to zoom out and let's say you want to zoom to the whole whole region of interest you want the all so
[1:20:45] the one with the a inside of it and if you hover over the tool you can actually
[1:20:49] see the tooltip it'll give you some information information so now that zooms us out all the way
[1:20:54] so zoom in a little bit and zoom out and just kind of play around with that a little bit
[1:21:07] you can do this with the other data products as well here's sea surface temperature temperature i want to zoom in really close with that
[1:21:15] one let's get crazy alrighty and then we'll just leave um this one in the full zoom so these are
[1:21:21] all in different zoom settings here zoom scalings okay so the next thing i'd like for you to do is go to the window um
[1:21:30] in the menu bar for cdas it says window at the top next to analysis and help click on it and we want to say tile
[1:21:36] horizontally so go ahead and click tile horizontally oh my goodness what a mess so let's click on core a to make it
[1:21:44] active and and notice that they're all at different zoom zoom resolutions in fact this one's even like
[1:21:52] off the page that really bothers me because i'm a little bit you know ocd so what we'd like to do is we want to
[1:21:59] synchronize the viewing and the way that we do that is with this little chain link here so that all of the three
[1:22:07] horizontally titled windows will be zoomed into the same setting in the same location and you'll notice that because
[1:22:14] chlorophyll a was the active one it opted to do that cool little trick here is you can also
[1:22:20] move this box in the navigation controls to control some of the zooming that you've got so now when you now that you've done the
[1:22:30] synchronized tool notice they all move at the same um the same setting which is really nice and can be very frustrating
[1:22:37] when you don't have the synchronized tool on so moving along to page 25. uh what we're going to do i'm going to
[1:22:45] resize my window just a little bit here apologies so it's a little small we're going to be paying a little bit
[1:22:52] more attention to this world map location up in the upper part of the pane uh just touch on a little bit we
[1:22:58] don't i don't usually use this particular feature very much in my own work work so what you want to do is you want to
[1:23:04] drag this world map location out of the viewer and the nice thing is that this gives you an idea of where this modis swath
[1:23:15] was located in the world this is really helpful actually um just to understand especially if you're not
[1:23:21] familiar with particular regions just to be like oh yeah that's where that is but let's say you don't really want this
[1:23:26] out there floating around anymore you're going to go to this upper gray bar where the term world map location is we're
[1:23:31] going to right click and we're going to deselect floating to push it back into the pane then what we want to do is we want to
[1:23:42] zoom zoom that's the little zoom button for the world map location pane just that we can zoom into this region and here you've
[1:23:50] got it you've got the peninsula that's florida beautiful look view of the bahamas ton of the ocean bahamas bank
[1:23:56] lots of seagrasses there i'm going to close this just to make a little bit more room available on the
[1:24:03] right hand side and so you can see that pixel info and rasters and the navigation controls along the right hand side
[1:24:12] we're moving along now in our list to the flags and pins page 26 and um so we're gonna
[1:24:19] walk through some of that material right now so below the rasters pane you'll see a little square here and what we want to
[1:24:26] do is want to click on it and this is the flags icon and what it's going to do
[1:24:30] is notice it opened this new window here and it's kind of squished but you can sort it you can scroll through and you
[1:24:35] can see some of them so in order to make a little bit more room we're going to go ahead and close
[1:24:39] the navigation controls that'll give us a little bit more space in this region so what i'd like for you to do next is
[1:24:47] um we're going to close the in the pixel info plane we're going to close the geo location in rasters by selecting the x
[1:24:55] so so geolocation see this little tiny x go ahead and click that and raster so this is going to give us the full view of all
[1:25:02] of the flags in this region so so these flags i've already talked about i've talked about it a couple of times
[1:25:11] and you're going to see it very soon in your homework assignment too so just to note um the link here gives you more
[1:25:19] information on those flags so if you don't fully get it with the abbreviations you can see the full
[1:25:24] description of what those flags are so what i'd like you to do is i just want you to run your mouse over one of these
[1:25:32] scenes and see what happens in the flags window window notice how in the land you're gonna see
[1:25:38] it it's going to be land yes the true that flag triggered that makes sense it's land and so as you move across the
[1:25:47] scene scene you can see that some of the flags stay false they didn't get triggered and some
[1:25:52] of them went to true especially in the regions where you see no data that's where you're most likely
[1:25:58] to see where these flags triggered again i refer you to the website that i've listed here for a description of
[1:26:05] those flags so i'm really interested in this region like what is going on there why why if there are no clouds in that region
[1:26:15] why am i getting something called prod fail the second to last item that's on this list i don't get it in the same
[1:26:23] locations on sea surface temperature and i don't get it in the same locations for chlorophyll chlorophyll what is going on that i'm getting this
[1:26:30] product failure in these regions alrighty alrighty i'm not going to answer that question for you now i want you guys to think
[1:26:38] about that so next up i'd like for you to click on the pin tool find a spot just oceanward of the mouth
[1:26:47] of siswani river and actually before i have you click on that tool i'm going to have a zoom in just a little bit more
[1:26:53] than the scene okay great so go ahead and click on that pin tool please please just ocean word of the mouth of the
[1:27:01] sewanee river in the colored region so not an area where there's a product fail you can see where i'm referring to on
[1:27:13] page 27. generally it doesn't have to be exactly that that okay what that does is it inserts a pin
[1:27:25] look towards the land from this position and you're going to see this no data area that indicates that something
[1:27:29] happened and we already decided because we looked at the list of the failure the flags that it's a product failure
[1:27:35] and i'm going to click in there so click for pin 2. so now what i'm going to do is i'm going
[1:27:42] to to click from there switch from the pen tool to the selection tool which is the arrow along the top
[1:27:52] and just out of curiosity i'm going to just click near the region at the tip of the
[1:27:59] the pin just to see actually i don't even have to click i can just move the mouse
[1:28:03] mouse to the tip of the pin to see a difference between the two flags between pin one and pin two
[1:28:11] so pin one there's no product fail and two there is product fail in my own work i don't typically use
[1:28:22] pins that often but it is helpful to know how to use them it can be very useful for
[1:28:27] communicating among researchers but we're going to go ahead and turn off those pins what i'd like you to do is
[1:28:33] you're going to click on this double pin tool that i just clicked on at the top it's going to open up a window for you
[1:28:38] and you can see a bunch of information for each pin 1 and pin two i'm going to highlight
[1:28:44] this one and i want to throw it away pin one do i want to remove it yes
[1:28:49] and two yes also the little garbage bin i want to remove it yes so and then after that i'm just gonna
[1:28:57] close this window and we're gonna move on to a different skill so what i'd like to do is i've
[1:29:02] made a bunch of changes here especially on the right hand side where i've gotten rid of some of those default windows i'd
[1:29:07] like to reset us back to the default layout layout and to do that i go up to view
[1:29:12] reset to default layout there i go and yeah it's going to have to squeeze over a little bit and
[1:29:21] move it a little bit more alrighty so we're done with that skill next we're going to go to page 29 on adjust color
[1:29:29] bar bar um um what we're going to do is i'd like for you to click on to make sure it's active
[1:29:35] chlorophyll a you can click the window or you could click the tab and let's look again on the left hand
[1:29:41] side and the pane along here i'm going to stretch it out a little bit so we can
[1:29:45] see a little bit more and this time instead of the mask we're going to click on color
[1:29:50] tab tab and you can see up here the basic button is already selected and under scheme for scheme selector
[1:30:00] i would want to switch from what they chose as a default and they kind of use that as a name based on the name and i
[1:30:06] want to switch it to a different scheme and the one that i'm going to use switch it to is this one called unibr palette
[1:30:13] and it's the universal blue red which you see popped up here in cpd file and what you can see is if you were
[1:30:23] paying attention is that it automatically changed it so our color scale is actually is different than from
[1:30:28] what it was before and if it makes sense for me to just try it with a different one just so
[1:30:34] you can see let's see if i can play around with that let's just look at you can see how it
[1:30:41] changed just then i'm going to put it on the one that we want which is this uni
[1:30:45] br palette note how it changes so next what i'd like for you to do is instead of basic we're going to click on
[1:30:53] sliders and this gives you a histogram of the pixels in the scene of what you see here in terms of what are the colors
[1:31:00] that are available and i believe that this may be for the entire image and not just for the zoomed in portion that you
[1:31:07] see here i can double check that so moving on to page 30 in adjusting the color bar
[1:31:16] there's a lot of functionality in this pane pane you've got this histogram that i already mentioned but you've also got some
[1:31:22] controllers here where you can make some adjustments to how you're viewing this imagery remember we're just looking at
[1:31:26] this image here on the far left you can look at use just some of the data 95 of
[1:31:33] the data instead of 100 in the view you could switch it back to 100 you can zoom in
[1:31:43] and this time we're not referring to zooming in on the image but zooming in with the data in terms of adjusting the
[1:31:48] scale and you can change the horizontal scale somewhat in here change the spacing it's kind of an idea of changing how you
[1:32:02] emphasize different portions of the histogram histogram it's going to put it back on the 95 back to 100 and also turning on the log
[1:32:12] scale chlorophyll is often expressed in a log scale it helps in visualizing it and understanding it so we had it as log scale before we
[1:32:21] turned it off and you can see that's flattened it so you don't see very much of the
[1:32:26] pattern in the data now we're going to put it back into a log scale it's partly because of the skew especially in a
[1:32:31] place like florida we have really low chlorophyll concentrations and some higher chlorophyll concentrations we're we're gonna play around just a
[1:32:40] little bit more in these settings here um and uh uh i'm skipping along here we've looked at
[1:32:47] page 31 um and we're now on page 32 where i've talked about the log scale what i'd like for you to do on um
[1:32:59] number eight on page 32 is just to play around a little bit more with this particular viewer on sliders and play
[1:33:07] around with the options that you have available so for example we've done log 10 95 100 but also histogram matching and
[1:33:15] looking at what does that mean equalize and normalize you're not changing the underlying data that's really important to understand
[1:33:27] you're just changing the way that it's being visualized once you have had a chance to look at
[1:33:33] these different features what i'd like for you to do is i'd like for you to return it to histogram matching none
[1:33:39] log 10 and 100 please return to the basic button button you should still be on the universal
[1:33:49] blue red uh this is a color blindness compliant palette um if those of you who may be
[1:33:55] concerned about this and your communications it's really important in our community to understand that different people have different ways of
[1:34:01] seeing and so this is one of the ones that's colorblind compliant there's a really nice link here in your exercise
[1:34:07] that talks about that that the cdas team put together i encourage you to check check it out
[1:34:12] um um all right so to adjust the color range in the color manager panner panel what we'd like to do is what we want to
[1:34:21] do is we want to make some changes here based on what we see so not just making it based on what's
[1:34:26] available available in the whole scene but also in what we see we're going to make some changes
[1:34:31] here and set from band data so what we'll do is we'll click on the button called set from band data and you can
[1:34:38] see that's moderately adjusted the range that we see there and now we want to make some choices of
[1:34:43] our own and make the changes of what we want to see so we're going to make some of these
[1:34:49] adjustments ourself so let's look at that chlorophyll image and we want to make sure that we are
[1:34:56] looking at the show rasters box so i click on the show rasters we had it just as flags but we also want
[1:35:06] to now see the data that's going into this particular scene let's go ahead and close flags okay so it doesn't steal some of our
[1:35:15] space you should have your pins off make sure that this snap to selected pin is off if you don't have your pins off remember
[1:35:28] to just turn them off now what we want to do is just like we did earlier when we first learned about this
[1:35:33] raster scene is we want to take the mouse and slide it over there just hover over different regions and make sure to
[1:35:40] try to capture regions that include both very low concentrations of chlorophyll estimates of chlorophyll and higher concentrations or estimates of the
[1:35:48] concentration of chlorophyll and it's wise right now at least i usually do this is to just jot down what
[1:35:56] i'm seeing so um so let's just say oh okay uh it's pretty high at 10 maybe the full extent is like
[1:36:03] up into 20 and going further down out here farther offshore 0.3 uh uh looks like a pretty good lower range so
[1:36:14] what i'm going to do is over here under the range i'm going to adjust this one to be 10. let's see how that looks whoa
[1:36:21] that's that's changed it quite a lot let's see if i can change it to 20. okay okay i'm seeing some features in my scene i'm
[1:36:29] not lying with the data i'm not telling any lies but it's kind of subjective here of what you want to choose as your
[1:36:36] your low number let's see if i can change that great it worked sometimes cdas has a bug where it makes it really
[1:36:42] hard to change these if you ever encounter this bug where it just won't change the range just click again on the um the set from
[1:36:50] band data and start over all right so we're doing well um we're gonna then move on to we're gonna continue
[1:37:00] with the adjusting of the color bar and in this case what i'm asking you guys to do on page 34 is actually to
[1:37:07] change this number to 15. okay and you might encounter the bug i'm actually not encountering the bug right
[1:37:16] now so that's pretty exciting and i'll just leave this as 0.3 this is where i give you the guidance to
[1:37:23] just go back to set band data if you do encounter the bug a given region tends to have a typical
[1:37:29] chlorophyll concentration during non-bloom periods the west florida shelf which is where this region is has a median chlorophyll concentration of 0.26
[1:37:38] micrograms per liter and a range of 0.2 to 13.3 micrograms per liter if you look at the literature you can see this there
[1:37:47] with this in mind try choosing a narrower chlorophyll range than what is being suggested above in this exercise
[1:37:55] from the full range using the band setband data do this to get a more sensible dynamic range
[1:38:02] range and remember here that it's in a log scale i'll have you guys do this on your
[1:38:07] own so after you've had a chance to do that that step with chlorophyll what i'd like for you to do next is to repeat these
[1:38:21] steps with sea surface temperature and adg adg on your own time i'll pause for a moment if you want to try to catch up to it
[1:38:28] here here but some of the steps going forward i'm going to ask you i'm going to show you
[1:38:33] on one data layer but i'm going to ask you to do it on your own time on the
[1:38:37] other data layers and and part of this reason is because you'll need some of the information from these
[1:38:42] other data layers to answer your homework so you'll be doing that the homework assignment on your own time
[1:38:49] i'll just repeat some of the steps for just sea surface temperature just so you get an idea of it
[1:39:00] what we're asking for and i'm going to view what those temperatures are and get a meaningful range i want something
[1:39:13] a little bit more meaningful than perhaps what has been selected here my image doesn't match exactly the image
[1:39:31] that you see on page 35 it really depends on what the choices are that you make for your range
[1:39:36] for your minimum and maximum range make sure to save your session and i'm curious and you'll answer this in your homework
[1:40:28] of what's going on at the mouth in your adg what's going on at the mouth of the river
[1:40:37] here here with all of the no data okay we're now going to move on to the next skill which is to create a color
[1:40:53] bar bar and um we're on page 37. what i'd like for you to do is to make
[1:40:59] chlorophyll a the active layer and along the toolbar find and click the color color bar tool which is this it looks just
[1:41:07] like a little tiny color bar this will open the window that you see here here for the create the layer
[1:41:19] what you'd like to do is look at the settings that we have here you have what the orientation is the text to
[1:41:30] color backdrop color scaling information where you want the color bar and the location of the color bar
[1:41:45] go ahead and just click create layer and where did it go what you want to do is you want to zoom
[1:41:51] all all and what you can see is that by default it made what i consider a really ugly
[1:41:56] color bar that's tiny and illegible down here on the bottom right that's no good so what we want to do is we want to make
[1:42:01] some adjustments to that one you still want to make sure chlorophyll a is the selected one this time we want to change the
[1:42:08] following settings we want title located down here to be chlorophyll a which it actually is the units yes that's actually what we
[1:42:17] want it to be scaling up here on the right we want that to be 90. we want it to be bigger so we can
[1:42:24] actually see it location i want it to be outside the image image i also want it to be centered so the
[1:42:31] location and alignment i want that to be at the bottom center oh and this color scheme just does not work for
[1:42:40] me so i'm going to make that black okay okay for text and tick color and i want the
[1:42:47] backdrop color to be white and then click the x there so if you look at the way changes that
[1:42:55] i've made here and on the image that i have for you on page 38 you'll see that these settings pretty
[1:43:01] well match up from what i'm seeing here the numbers the the numbers for your manually entered points may be slightly
[1:43:08] different um just go with what the default is i'm going to go ahead and create layer oh my god what a relief that looks so
[1:43:15] much better at least it does to me you may not agree with me everyone has their personal preferences but at least i can
[1:43:21] see it now your output should look like what you see here you may have done the preview step i
[1:43:30] just skipped it and what you want to do next is to repeat these steps to make your color bar for sea surface
[1:43:36] temperature and 80g i stay here on your own time but i'm just going to go ahead and do it really
[1:43:42] quickly here bye all right okay so what we want to do next is resize chlorophyll a so you can see the
[1:44:24] whole thing whoops once you successfully resize your window for the chlorophyll pane look along the toolbar and find that the
[1:44:39] grid lines tools and click it so we're looking at this big scene here right next to the node data you want to click
[1:44:45] the grid lines and that sets it up so that we can see the um longitude and latitude
[1:44:51] information along the edges and you'll notice here that it's there's conflict it's visually conflicting with the color bar and the
[1:45:00] details of the longitude along the bottom of the scene what we'd like to do is we can actually
[1:45:05] get rid of these numbers that are listed down here and they're already repeated at the top so it's okay the redundancy
[1:45:11] is fine to remove it we want to make sure to do is we have the grid tool is active
[1:45:17] and what we'd like to do is we want to click on the edit layers property tool so go ahead and click on that now
[1:45:24] and this opens this window important note gridlines has to be active for this particular layer editor window to open if a different tool is
[1:45:34] active you will get a different window so moving along to page 41 what you want to do is click off
[1:45:42] show longitude labels on the south because that's where we're having this visual conflict with the color bars go
[1:45:48] ahead and click that off and you can see it disappeared and then we'll just go ahead and close
[1:45:53] the window after we've made this change like i said as long as the gridlines tools tools is active this edit layers will make
[1:46:02] those changes okay i'm going to go ahead and move along along we're going to do export image going
[1:46:09] forward i'm expecting you to do many of these tasks in sea surface temperature and adg on your own time i walked you
[1:46:15] through a couple of them but we're going to move forward from here just working on the chlorophyll image
[1:46:21] now you have an image page 43. now you have an image with a color bar and grid
[1:46:25] lines lines zoom resize the image window so you can see just the area that you'd like to export
[1:46:35] so i'm going to change the sizing on this just a little bit hopefully successfully okay and i'm going to pan
[1:46:50] and that's about the view that i'd like to see i want to make sure that these grid
[1:46:57] and the latitude and longitude are visible and i want to make sure the whole scene is visible
[1:47:02] in this case i'm actually leaving a lot of white space on the outside but that's okay for now
[1:47:08] right click on this image and a menu setting will pop up a bunch of menu items and you want to select export
[1:47:17] image i want to select a meaningful location notice how it popped up to the top of my
[1:47:24] directory structure i want to put it in the correct location so i'm putting in my rset training
[1:47:30] suwani river modus modus and this is the folder where i want to be um okay it's given it a new name um
[1:47:39] and it's my chlorophyll image and i think i'm gonna just append on here just so that i know for sure it's an image
[1:47:45] even though i'll know it from its um file format that it's an image so i'm going to go ahead and click save
[1:47:58] as i mentioned at the bottom of the description on page 44. on your own time repeat these steps for
[1:48:04] sea surface temperature and adg if you don't like how it looks if you don't like my way of doing it
[1:48:11] totally fine you can go back to your grid line settings and to the edit layer you can make changes however you wish
[1:48:20] to make it that is okay alrighty so i'm going to go back to file manager over here
[1:48:34] and as i said on the bottom of page 45 you want to make sure to save your session so uh continue to save the
[1:48:43] session session session save and and uh continue on so now we're on page 46. you've gotten this for congrats we're
[1:48:54] going to go ahead and close uh these scenes scenes and we're going to close the files the
[1:49:00] these scenes being the iops and the sea surface temperature so we just want to have open the oc so i'm going to go
[1:49:08] ahead and just right click on this in the the bar in the excuse me file manager pane
[1:49:14] close that and i want to close which was the sc sst i'm going to close the iops
[1:49:20] so going forward we're just going to be looking at this chlorophyll a image that we've got here the chlorophyll a
[1:49:26] the file that contains the chlorophyll a the next step of what we're gonna do is we are going to use the map projection
[1:49:34] tool tool and uh the map projection tool is up here in the toolbar it looks like a
[1:49:40] little little kind of a squashed projection see here i'm highlighting it you're going to click on that
[1:49:48] it's going to open a new window create reprojected file so one of the things that i note here
[1:50:00] bottom of 46 is to be sure the directory path you enter matches the correct path for the
[1:50:06] type of system that you're using and by that i mean that if you're using a mac or a linux station or a windows station
[1:50:13] they're all going to have different ways of naming their path i'm on a mac so the path the directory path that you see
[1:50:19] here is going to be what it is for me on a mac but it's going to be different for
[1:50:23] you so for the i o parameters you have what is your input we already know what that's going to be and we're going to be
[1:50:29] doing this on the entire file it's not just the chlorophyll and we want to create a new output file
[1:50:35] and the default is just to say reprojected that sounds fine to me we want it to be saved in this file format
[1:50:42] that's used by cds and we want to make sure to save it to a directory that makes sense and this is where i'd like
[1:50:47] to save it this is the default but be careful because you want to make sure that it's not putting it in a folder you
[1:50:53] were once working on it another time i'm going to click on this tab in this window here for map projection settings
[1:51:04] okay okay and i'm on page 47. you can see the window i was just on of i o parameters now we're on the mac
[1:51:12] projection and settings i'm going to leave most of these as the default but under resampling method i'm going to put
[1:51:19] it on to bilinear i'm going to leave everything else the same same as the defaults the validation is just
[1:51:28] going to stay the same i'm on page 48 and i'm going to click run good time to get up and stretch
[1:51:44] depends on the speed of your computer i'm not on a particularly fast computer and i'm also reprojecting a really large
[1:51:51] scene so keep that in mind with data management so these windows will pop up just to let
[1:52:03] you know hey you're done uh for me it took a minute it probably took less time for you guys in the audience watching so
[1:52:09] i'll go ahead and click ok um and then i'm going to close this uh the create reprojected file
[1:52:15] and you'll notice here along the left-hand side of the panel that you had a new file added and it's got a new name
[1:52:21] appended to it what i'd like to do is i'm just going to close this viewer image and i'd like for you to
[1:52:29] close the previous file and we're moving along to page um 49 uh go ahead and close it's going to prompt me hey do you want
[1:52:38] to make saves or do you want to save changes to it i'm going to go ahead and
[1:52:41] say yes as i close it alrighty so now we've just got this one um file open that we just
[1:52:47] did the reprojection and um if you haven't skipped page 49 i don't want to take away your suspense but let's go
[1:52:53] ahead and double click on this so we can see it and as you can tell it looks a
[1:52:57] lot different from the previous version that we were looking at this one looks a little bit more comfortable to the eye
[1:53:03] because it actually looks projected to what we would expect to see so next step is going to be crop and i'm
[1:53:12] going to give you a warning right now you want to write down the numbers for what your cropping region is going to be
[1:53:19] that you're going to use in this example from chlorophyll a because whatever you end up choosing for
[1:53:25] your cropping values you're going to want to apply those exact same cropping values on your own time when you do it
[1:53:33] with the sea surface temperature and iop file because when we get to part 3 you're going to need to use the output
[1:53:40] from part one exercise in part three so to avoid repeating the work before you start on part three make sure to
[1:53:47] write down these numbers alrighty so the image you reproduce in chlorophyll a illustrates the need to crop the image because this is huge and
[1:53:55] we're just interested in the swanny river and there are a number of ways that you can do this in cdas i'm going
[1:54:00] to just show you the most straightforward way of doing it and we're going to use the cropping tool and
[1:54:05] if you go up to the toolbar here it's this little square being chopped out of the bigger square
[1:54:11] being pushed away crop a file what we'll do is we'll go ahead and click on crop of the file
[1:54:18] grabbing my pen now so i'm following my own directions if you know the geographic coordinates for the region of interest you can click
[1:54:26] on the button geocoordinates here that i'm highlighting with the mouse for now what we're going to actually do
[1:54:32] is we're going to try to draw the square with pixel coordinates but we will be using geo coordinates um for to jot down
[1:54:40] some of the numbers so if you're not sure like i said what we're going to do is we're going to use
[1:54:45] pixel coordinates and we're going to set the boundaries manually by adjusting the rectangular region and the pane to the
[1:54:50] left so you can see this here the pain to the left it's a little hard to make
[1:54:54] out but here's the peninsula of florida and we're going to just use this tool and and draw
[1:55:01] draw adjust the the rectangle to this region of interest i'm going to try really hard to not get
[1:55:10] some of the east coast in there okay great so that i'm just over land on the upper right hand side of that box
[1:55:18] this is where i want you to write down these numbers i i want you to write down the pixel
[1:55:28] coordinate numbers and i'm also going to have you write down the geo coordinate numbers so take a moment now you've got
[1:55:33] your your start scene or scene start x x and y and scene end x and y and i just want you to write
[1:55:45] those down so 10 in my example i have 10 44 whatever yours is use that 684 and then
[1:55:53] 1404 1404 and 1206. okay so that's under my pixel coordinates for my geo coordinates i'm going to go over here
[1:56:04] i'm going to leave everything else as the default for geo coordinates i'm going to click on geo coordinates
[1:56:10] and i'm going to have my north latitude bound west west latitude or longitude bound my south latitude bound
[1:56:30] and my east longitude bound and i want to write those numbers in so for example my north latitude bound is
[1:56:39] 31.235 negative 85 because we're on the western hemisphere 0.114 and then i want 25.799 and negative 81.364 again leaving all everything else
[1:56:55] the um the default so make sure to write these down um just so it makes your life a little bit
[1:57:01] easier later all right so we want to leave everything else as the default and we're happy i like this region here
[1:57:08] and we want all the bands we're not going to subset to a smaller number of bands or anything like that that would
[1:57:14] be this one here we're going to leave that the default metadata subset leave that the default so we're just doing it working on the
[1:57:20] spatial subset tool for now so when you're satisfied and you've written everything down go ahead and click ok
[1:57:30] this creates a new file that you see over here on the left pane of the file manager
[1:57:35] manager and notice that there's an odd color in the layers so it looks kind of like red sauce on
[1:57:41] pancakes so what you want to do next is you want to right click onto this file and click save as
[1:57:49] and it's going to be in the cdas format and it should be in the correct location in the swanny river and modis but notice
[1:57:58] how it changed the name for us we don't want to use that name because that's kind of confusing it's not very
[1:58:04] descriptive we want to use the name it actually has listed for us over here in the file manager
[1:58:10] so so to do that i could either type it all out or i could cheat i'm just going to
[1:58:14] click once on this reproject and after reprojected i'm going to do underscore subset and it should be written into your
[1:58:23] exercise like this but i just want to point out you've got the original part of the file as with the others that
[1:58:29] we've been working with listed here 2015 and so on and then it's reprojected and it's this cropped or subset version
[1:58:38] of this reprojected file so once you have that entered there click save okay okay so we're still looking at the old
[1:58:49] reprojected but not cropped file what we'd like to do is actually see okay what's this craft region look like so go
[1:58:55] ahead and double click on that and oops i'm off the scene so make sure in your navigation controls
[1:59:04] if you have the same problem i had click on your zoom all and while it may not look exactly like i
[1:59:10] have here in the exercise because i use new numbers this should be your cropped region of interest that you just identified in
[1:59:17] using the cropping tool so what i'd like to do is i want to close this file the not cropped one that
[1:59:26] we had close that and i just have this one opened here um um what i'd like for you to do in your own
[1:59:34] time is um you're going to repeat these steps of crop reprojection and cropping for your sea surface temperature and your
[1:59:43] file file um um so not on your own time but you'll do that that the next step just with this chlorophyll
[1:59:51] file is we walked through it earlier we're going to add grid lines and a color bar and
[1:59:57] we're going to export the image so i'm going to walk through those steps now first with this chlorophyll i'm going to
[2:00:03] add the color bar and just like the same parameters that i used before i'm going to choose a text of black
[2:00:11] color backdrop is going to be this white it's chlorophyll i'm going to leave the title as it is i want it to be 90
[2:00:21] i'd like for it to be outside the image and i want it to be the bottom center
[2:00:26] i'm going to leave the data labels the same and i'm going to create the layer and i want to zoom out so i can see the
[2:00:34] whole region okay that looks pretty good next i want to add my grid lines okay that that also looks okay i didn't
[2:00:42] do such a great job cropping over here you guys may do better with your pixel coordinate box that you used
[2:00:49] um but you know i still don't like how this is colliding so with my gridline tools active i'm going to edit layer and turn
[2:00:57] off those south labels okay so we've adjusted the color bar and we've added the grid lines and we've
[2:01:05] taken away the conflict here at the bottom bottom um so the last step of what we would
[2:01:10] like to do with this file that you've cropped is to re to save it export it so
[2:01:15] what we want to do is we want to go ahead and right click export image we've already gone through these steps one
[2:01:21] before once before i'm gonna go ahead and leave the default name as you see here i have at times run
[2:01:27] into some trouble with changing this name so just be aware that it's gonna provide a default name just make sure it
[2:01:33] doesn't overwrite some other file of interest that you may have so i'm going to just leave it there as
[2:01:39] it is and i'm going to save and i'll just take a moment and if i go back up to my directory
[2:01:44] structure and look at the to see if i can find this exported file you'll see it here and it looks just the
[2:01:51] same as you saw on your screen and i'm in the viewer and it's reprojected and it's cropped and you've got your color
[2:01:58] bar and it looks just as you would expect expect earlier we also re we we exported a file but remember that file
[2:02:08] was not cropped and it wasn't reprojected and so you can see the difference here this is the earlier
[2:02:14] version of the chlorophyll file and this is the the later version of the chlorophyll um scene that we are looking
[2:02:21] at and so what's nice is that you are producing you now have the ability to produce the publication
[2:02:27] quality quality image using seed ass and so a lot of folks in fact this is one of the survey
[2:02:33] questions when we had the 2018 training is how do i make a publication worthy image this is how you do it in cdas and
[2:02:40] so you've gone through those steps now and so now you have gone through the steps of no data land masks
[2:02:48] zooming synchronization finding the map location on the world flags and pins adjusting the color bar and and making some changes to that color bar
[2:03:00] grid lines export the image reproject and crop and so your homework is to repeat these reprojection and cropping
[2:03:09] steps with sea surface temperature and adg and to make sure to be really organized with your data files because
[2:03:15] those data will be used in the part 3 advanced cdas skills section so as you work on exercise 1 we would
[2:03:26] like to direct your attention that there's a homework that corresponds with this exercise and so after you complete
[2:03:32] exercise one navigate to the homework the link is on the website and complete that homework exercise it
[2:03:39] is due on friday june 21st okay so we're just now ready to move into the question and answer period so
[2:03:49] i'm going to go ahead and get started there were some technical detail questions that were asked about the cds
[2:03:55] installer and the oc ssw processors processors and and this will be provided to you in this pdf
[2:04:04] and i'm hoping perhaps this pdf that we're providing the question answer we can get it up there pretty soon
[2:04:12] this this relates to the cdas client server installation the configuration so if you had questions about the cdas
[2:04:19] installer if you're working on a windows system and you want to use those processors um there has been a solution
[2:04:25] that's been come up with by the motion biology processing group and the directions are there and so we can
[2:04:30] provide that link to you it assumes that you have access to a linux or a unix machine um to use these processors so if
[2:04:37] you're on a windows only machine then it will not be possible at this time as far as our understanding to use these
[2:04:44] processors so if you had questions about those processors um we addressed those in the first two question answer
[2:04:50] sections of this pdf and we're pointing you guys towards that cdas oc ssw client server configuration page
[2:05:01] a question came in on how suspended dust in the air affects open water quality and what are the different satellites to
[2:05:08] detect this phenomenon of dust in the atmosphere and the person i think was referring to how does the dust interact
[2:05:15] with open ocean waters it is possible to observe dust in the atmosphere using a number of satellite
[2:05:21] sensors and methods these this is for dust that's still in the atmosphere and so aerosol optical transmittance or
[2:05:30] thickness aot is one measure of small particles in the atmosphere and you can gather this information from
[2:05:36] the modis sensor there's also an active sensor that's used called calypso that can give you an idea of the aerosols or
[2:05:44] small particles dust in the atmosphere and and again these methods or data products or the sensor and the calypso's case are used for the
[2:05:53] atmospheric community um they're not the only ones that are used for this purpose to observe the phenomena of dust in the atmosphere but
[2:06:01] they are some of them and so the reason why i get excited about this topic is because dust if you don't already know
[2:06:07] this um for example the dust from the sahara desert is really rich in phosphorus and phytoplankton are limited
[2:06:14] by nutrients light and temperature and phosphorus is one of the macronutrients one of the key ones alongside nitrogen
[2:06:22] and carbon for growth and so phosphorus is often limiting in environments and in oceanic environments and so this dust is
[2:06:31] a source of phosphorus um it also contains metals and when these metals enter trace metals and when these trace
[2:06:36] metals enter the system they get bound to ligands or organic compounds and these reduced metal ligand complexes
[2:06:43] then become bioavailable for phytoplankton and so dust poses an important nutrient source for a lot of phytoplankton in the world and so um
[2:06:51] thanks whoever asked that question i got to be my oceanographer self and thinking about it again so um dust is sensed by
[2:06:59] these atmospheric sensors i am not aware of a satellite center that specifically detects the dust on the surface of the
[2:07:06] water and so um for that i think i would need to do a little bit more research on
[2:07:11] that um some questions about uh sentinel 3b is it working and the revisit time the sentinel 3b ulti is working and the
[2:07:20] revisit time that's published is 27 days and this is the one that came up in 2018 that went up in launch but it's been
[2:07:27] having periodic up times and down times and so if you want to know more about is it
[2:07:34] running is it available i would encourage you to look at the sentinel 3 news website for the latest updates i
[2:07:40] was looking at that during the webinar series and noticed that there have been ups and downs throughout the spring and
[2:07:44] so i would check on that um a question about the sensor capturing water parameters if they have rocks in
[2:07:53] the water the rocks ignored so the sensor captures the top of the atmosphere radiance and that's for the
[2:08:00] entire field of view that it's capturing it it's the processing steps that are applied to this top of atmosphere
[2:08:06] radiance that can selectively remove pixels based on information such as land masks or cloud masks data product
[2:08:13] failure or even particular thresholds set in the data or ratios of bands in the data in the processing scheme
[2:08:20] so if the rocks are emergent they're coming up out of the surface of the water and they're large enough for the
[2:08:24] pixel size um the processing may flag that pixel as land and when you use seatas land pixels are typically flagged
[2:08:32] and then removed from the scene as no data data another question came up which actually i was just in the field yesterday out on
[2:08:39] san francisco bay sampling mud flats and one of my colleagues asked the same question of how do you remove sun glint
[2:08:46] from an image there are a number of methods used for sun glint removal one complete one commonly adopted by the
[2:08:54] aquatic remote sensing community is one developed by john headley and i've given the citation in the pdf that we're going
[2:09:01] to be providing for you this publication john headley h-e-d-l-e-y published in 2005 and it's a technical note and the title
[2:09:11] is simple and robust removal of sun glint for mapping shallow water benthos and so this is one that is commonly used
[2:09:19] for the aquatic environment there are different different methods that you can use but this is one that's commonly used
[2:09:27] okay so a few questions came in i'm super excited about this and that is because you guys are asking questions
[2:09:33] for what's going to be coming in our next parts so one of the questions was are there
[2:09:37] going to be case studies covered in the series for fresh water body and the bottom and can it be seen so if you got
[2:09:43] this shallow water situation and yes our guest speaker daniella dr daniella girlin who has been online today and
[2:09:50] will be on next week she's going to talk about the work that she's doing in wisconsin in the looking at water
[2:09:55] clarity and shallow water lakes and some of the issues she has to address there and then we will be using some of the
[2:10:01] data from her work in part three and so we're really grateful to dr girlin for sharing her time and her work and
[2:10:07] expertise and her data with us to address looking at water clarity and shallow lakes um um so another question came in that is
[2:10:21] evident that there exists a trade-off between parameters while selecting suitable satellite data what to do um what's the basis for
[2:10:29] selection and satellite data for different bodies of water for example this person works is asking questions about the indian ocean and arctic
[2:10:36] so it's really based on an individual water quality monitoring program's needs so for the work that i do which is tends
[2:10:44] to be a little bit offshore not most of it that i do is not right in estuaries
[2:10:49] or rivers or lakes i tend to be a little bit offshore in the ocean my first question that i go through when
[2:10:54] i'm thinking about this is what data products am i interested in understanding understanding and this gets at you know the four
[2:11:00] things spectral spatial all of the resolution so i'm going to cover all of these in the questions i ask myself so
[2:11:05] this first one about data products what's the spectral resolution of your sensor drives which data products are
[2:11:10] possible to be derived from the surface reflectance so for example let's say commonly used chlorophyll a is the um is
[2:11:19] the data product of interest next i ask myself how dynamic is the water and the change in that data
[2:11:25] product over a particular time period here in monterey bay where i live the phytoplankton respond on a five to seven
[2:11:32] day time scale so i want a sensor that can capture this change so daily or near daily overpasses work for me
[2:11:39] i also ask the question is is my region cloudy because if i'm going to get clouds in like one out of every
[2:11:45] two images i want to make sure it one out of every two days i want to make
[2:11:49] sure i have high temporal resolution so at least i have some likelihood of getting a clear image
[2:11:55] in the time period of interest the third parameter i consider is what kind of spatial scale do i need to
[2:12:01] consider for the process i'm trying to observe observe and so like i mentioned i'm mostly interested in just offshore so tens of
[2:12:07] kilometers kilometers across so submissive scale processes that may be too coarse for your needs so but for me for tens of kilometers modis
[2:12:16] is an appropriate sensor because it has the spectral range i need for my data products of interest
[2:12:21] it's a near daily visit revisit rate it's not particularly cloudy here most of the year it has a spatial resolution
[2:12:29] at one kilometer that's appropriate for my needs and i know modis was developed for aquatic targets and so it has really
[2:12:35] high radiometric resolution and so it's going to be a good sensor for what i need to assess
[2:12:40] so it depends on what you're looking at if you are looking at small bodies of water we apply something called the
[2:12:45] three pixel rule so you need to be able to have three pixels across in any one direction
[2:12:51] direction for the spatial resolution that you're looking at so let's say you're looking at modis you need three pixels across with no mixed
[2:13:00] pixels that means that i would need three kilometers across in any one direction for the region of interest
[2:13:06] that i'm looking at and so that three pixel rule is important to apply for landsat if you're looking at 30
[2:13:12] meter per pixel then you know that your body of water could be smaller that landsat has this revisit rate of only 16
[2:13:19] or of 16 days which may or may not be the temporal range that you're looking for so you have to take that into
[2:13:24] consideration consideration a note for for the question that came in about the indian ocean in some in equatorial
[2:13:31] regions some of the satellite sensors that we have are not making exactly daily overpasses and so um this is a
[2:13:38] consideration that you need to be aware of because there are gaps because of the the way that the polar orbiting
[2:13:44] happens so i encourage the person and i provide the link here and it's in the ocean biology processing page for the
[2:13:51] overpass predictor to see if your satellite really is going to be passing over we're going to use this overpass
[2:13:57] predictor in part three so again another question came in we're really excited hey you guys are right on track with us
[2:14:03] um so we're going to talk about that overpass predictor another way to just see hey is there a gap in my data and
[2:14:09] what sort of frequency do i see a gap in this equatorial region is the nasa worldview earth data viewer it's one of
[2:14:16] my favorite go-to websites to quickly assess hey is there imagery and were there clouds in that image today
[2:14:24] um um okay okay i've covered the three pixel rule and i touched on the overpass so there's some
[2:14:31] questions that came in about that another question that came in that i'm going to address and then um i think i'm
[2:14:36] going to wrap it up after this unless amita wants to talk a little bit um is the radar data is there active remote
[2:14:44] sensing methods that are used for water quality monitoring and so um i just wanted to touch on this
[2:14:50] just briefly and that is that as far as we understand the active remote sensing measures that are taken
[2:14:56] like radar or lidar can be used for assessing some water quality parameters for example synthetic aperture radar can be used to
[2:15:06] sense oil slicks on the surface of water and so it can be used for water quality monitoring typically what radar is used
[2:15:14] for water quantity but it can be used in the sense for oil slicks we're not going to provide any
[2:15:21] trainings on that in this webinar series lidar is being applied more actively probably in the last 15 years it's
[2:15:29] become more actively researched in looking at marine lidar so looking at the very upper part of the water column
[2:15:36] to look at particle load and also particle size distribution there are also some multi-spectral lidar approaches that are
[2:15:45] taken to try to get even more at not just particle size distribution but what's what's uh what are the optically active like
[2:15:53] the pigments in those in the particles to maybe get a little bit more like phytoplankton functional type
[2:15:59] discrimination using those methods both of these the radar and the lidar examples that we cite here are mostly in
[2:16:07] the area of research we are in the time that we've had to research this are not aware of
[2:16:12] operational efforts that are used to use radar or lidar to assess water quality it's used more for water quantity as i
[2:16:20] mentioned for radar but for water quality we are not aware of active widely used operational methods for this
[2:16:30] um uh one last thing i there was a question that came in about um doing uh validation of data so using in-situ
[2:16:39] measurements with the cds output and this again we're really excited that you guys are asking these questions because
[2:16:45] it means that you're going to get we're going to get to it in part three amita is going to do
[2:16:49] a whole section of the exercise and demonstration on how to validate data using in-situ measurements and relating
[2:16:55] it to your imagery all right so if i have a mita on line i just want to check with her if either in
[2:17:04] the chat or in the questions if she wants to jump on to say anything else but i think that we're gonna
[2:17:12] wrap it up here pretty soon hi sherry hi everyone hello my name is you've covered all questions and i
[2:17:20] really don't have anything to add we will use some of the features of seedas that you showed today in next two
[2:17:28] weeks and also compare satellite and nc2 data as we we go further along okay okay great then amita and i thank you and all
[2:17:41] of the people you don't see behind the scenes here that are helping to produce this webinar we thank you for participating in today
[2:17:48] part 1 webinar series we welcome you to come back next week we're really excited to cover more of the
[2:17:55] larger inland bodies of water and to please come and hear our guest speaker dr daniela girlin talk about her work in wisconsin and to
[2:18:05] learn more about skills um in part two and part three of downloading data looking at it processing it and also
[2:18:14] to do validation and more advanced cdas skill building so we look forward to seeing you online here next week thank you
