# Fundamentals of Aquatic Remote Sensing

`https://www.youtube.com/watch?v=1TBtJ8pTANQ` · id 229 · 43:18 · module 1 — Fundamentals of Remote Sensing

[00:02] hello and welcome to rset's fundamentals of aquatic remote sensing webinar this on-demand webinar is meant to serve
[00:10] as a foundation in aquatic remote sensing and as a prerequisite for future aquatic webinars and in-person trainings
[00:16] provided by our set we appreciate your interest and participation in rset's programming so why take this course
[00:27] the objective of this course is to provide an overview of aquatic optics the remote sensing of water targets and
[00:34] nasa earth observation resources available for aquatic applications this image captured by the landsat 8 oli satellite sensor shows the view over
[00:46] western australia on may 12 2013 the image shows the rich sediment color dissolved organic matter and nutrient
[00:54] patterns in a tropical estuary and nearby vegetated areas this type of information can help us infer the biogeochemistry of the system
[01:07] in this webinar we will cover a broad range of information first will be an overview of light and how it interacts
[01:15] with the water column next we will go over the fundamentals of remote sensing third we will discuss the types of data
[01:22] products we can derive from imagery and how those data products may be used we will discuss nasa satellite imagery
[01:30] data sources as well as data processing tools tools this is a lot of material to cover in
[01:35] one session there will be helpful links throughout the webinar that you can use to refer to online resources
[01:45] why do we observe the ocean from space to understand the earth's processes on a global scale this animation shows a time series of
[01:54] chlorophyll from the sea with satellite sensor sensor if you look in the lower right you can see the month and year in the time
[02:01] series from 1997 to 2005. watch the animation for a moment focus on the ocean and notice patterns
[02:11] in the false color display of chlorophyll chlorophyll purple is low chlorophyll and green to red are high chlorophyll
[02:19] note the patterns that you see across the globe for example in the south pacific the region is dark blue or even
[02:26] purple purple this indicates low chlorophyll now look up in the north atlantic watch how it changes over time
[02:39] notice how it greens up this occurs primarily during the spring gloom period and it slightly precedes summer green up on land at the same
[02:47] latitudes latitudes light nutrients and temperature drive phytoplankton productivity satellite observations of ocean chlorophyll give us the ability to make
[02:58] global estimates of carbon uptake by phytoplankton phytoplankton this information helps in our understanding of the global carbon
[03:05] budget what are some advantages of remote sensing of aquatic environments there is synoptic coverage meaning remote sensing imagery can collect data
[03:17] over large areas that would otherwise be impossible using ships or mooring observations alone next the ocean moves and so for many
[03:26] processes frequent satellite overpasses are needed to capture natural phenomena many satellite sensors collect data on near daily revisit rates and some of
[03:35] these processes can therefore be observed observed third satellites can go where ships cannot go understand remote sensing we must first
[03:48] have some knowledge of the water and its constituents constituents and how light interacts with them in this section we will cover the nature
[03:59] of light and how it propagates through the atmosphere and water column and back out to the satellite sensor or airborne
[04:05] sensor sensor we will also talk about the inherent optical properties of the constituents in the water and how they influence the
[04:13] color of light the first step in any discussion of remote sensing requires an overview of the electromagnetic spectrum
[04:24] energy is emitted from the sun and the photons travel at different wavelengths or different energy levels for our purposes we are mainly
[04:31] interested in the light in the visible range or 400 to 700 nanometers and in the thermal range
[04:39] if you are familiar with terrestrial or land imaging the mirror and short wave infrared regions are used but because of
[04:47] the absorption of light by water at those wavelengths we do not use those ranges for aquatic remote sensing
[04:57] so here's how it works light from the sun passes through the atmosphere and if it reaches the sea
[05:03] surface and then reflect off of the surface or pass through it as i said before the fate of a photon is
[05:10] to be either scattered or absorbed if absorbed phytoplankton non-algal particles color dissolved organic matter or water itself will absorb the light
[05:26] if scattered it will do so in either the forward or backward direction if in the backward direction some of it
[05:33] will be re-emitted from the sea surface and will be detected by a sensor in aquatic remote sensing we are
[05:42] interested in the radiometric unit the remote sensing reflectance or rrs and this is sometimes what we think of as
[05:50] ocean colored remote sensing reflectance is used in ocean color algorithms to compute the data products of interest for ocean and
[05:59] aquatic science like chlorophyll concentration concentration remote sensing reflectance can be defined as the ratio of back scattering
[06:07] to the total absorption and back scattering as affected by the local sun and sky conditions alternatively it can be defined as the
[06:18] water leaving radiance or the light just above the surface to the incoming or downwelling irradiance incident on the sea surface
[06:28] with this equation we see the relationship of the inherent optical properties absorption and scattering of the material in the water to the
[06:36] quantity and quality of light in the underwater light field it is this remote sensing reflectance quantity that is derived from satellite
[06:45] remote sensing measurements because of these relationships of what is in the water to the color of the
[06:51] light emitted from the water we can infer concentrations of optically active constituents in the upper part of the
[06:58] water column that the satellite can detect or see here again is the equation for remote sensing reflectance
[07:09] light absorption and back scattering by the different constituents in the water column govern the light the color of
[07:14] light the sensor detects this landsat 8 oli image to the right is of rupert bay in northern canada
[07:23] doesn't it look kind of like a latte this image illustrates the effect of the different absorbing constituents
[07:33] in the water in the image you see that the dark water up in the upper right of the image is
[07:41] characteristic of color dissolved organic matter or cedom this is coming from the rivers flowing into the bay from the south as well as
[07:49] from the east seed on rich water tends to look black as it absorbs light strongly but it
[07:54] doesn't reflect much light backward in the middle part of the bay tidal forces cause a resuspension of sediments
[08:03] making for a light brown color offshore of the mouth of the bay there are regions of bluer water and regions
[08:10] that are slightly green possibly due to phytoplankton phytoplankton if you are having a hard time seeing much of a difference among the
[08:17] chlorophyll water and cedam examples that i have here you're not alone part of the reason i use this example is to
[08:24] emphasize to you that water is a dark target remote sensing reflectance in the visible range is low for water as
[08:31] compared to land and so we must be very careful that instruments are sensitive enough for water targets are calibrated
[08:38] in the visible range and that we are careful not to over correct for the atmospheric effects on light absorption
[08:43] and scattering so we see these pictures with our eyes what would the remote sensing reflectance spectra look like for these
[08:52] different water types in the figure on the right you see wavelength across the x-axis and remote sensing reflectance along the y-axis
[09:02] note how the remote sensing reflectance spectrum is very low for cdom but has a higher magnitude for sediments
[09:09] this intuitively makes sense because a sediment image looks bright light brown and brighter to our eye the water appears blue
[09:17] chlorophyll reflects strongly in the green as you can see in the peak in the region around 550.
[09:27] so to our eye chlorophyll looks green look at the figure to the right the gray vertical bars represent the
[09:34] wavelength ranges where a typical human eye detects light humans have color detecting receptors that sense light in three ranges
[09:42] corresponding to blue green and red our eyes typically can only see three wavelengths whereas satellite sensors can
[09:50] can detect even more depending on the spectral resolution of the sensor so let's learn a little bit more about
[09:55] satellite remote sensing in this section we will discuss image resolution some of nasa's satellites and sensors for aquatic applications
[10:08] image correction and satellite data processing levels when we talk about resolution three types come to mind spatial temporal and spectral
[10:22] first is spatial resolution or how the area on the ground translates to one pixel pixel the smallest unit measured by the sensor
[10:30] for example one landsat 8 oli pixel can be about 15 or 30 meters in spatial resolution resolution how often a sensor obtains an image of a
[10:40] particular part of the globe is referred to as temporal resolution for example landsat 8 oli returns only once every 16
[10:49] days but modis has a more frequent return rate at about one to two times per day spectral resolution refers to how many
[10:58] colors or bands an imager can collect for example the moda sensor has 36 spectral bands whereas landsat 8 senses
[11:09] about just 9 spectral bands for the purposes of this webinar we are most interested in passive satellite
[11:20] sensors that measure reflected solar radiation in the visible range to use in our ocean color algorithms we are also interested in measuring the
[11:29] emitted infrared and microwave radiation in order to observe observe sea surface temperature temperature we call these sensors passive because
[11:38] they are detecting the reflected or emitted light energy from the sun for this webinar we will only refer to
[11:45] passive remote sensing although active remote sensing like lidar is gaining popularity for understanding particles in aquatic environments but we will not
[11:54] cover that in this webinar satellite measurements can be used to infer characteristics of several earth systems spheres
[12:04] depending on the type of sensor and which part of the electromagnetic spectrum is used information can be
[12:10] gained about the atmosphere including clouds aerosols and gases as well as the earth's surface including snow and ice land vegetation and water
[12:24] as mentioned before the remote sensing of water bodies is used to derive the properties of optically active water
[12:31] constituents constituents these include suspended sediments algae like this coccolithophore bloom near norway in the upper right of this
[12:39] slide slide color dissolved organic matter and others others we use passive sensors to measure the reflected solar radiation
[12:51] sea surface temperature can be observed using sensors that detect emitted thermal radiation knowing sea surface temperature can give
[13:00] insight into the ocean heat budget ocean current patterns and rates the rate of photosynthesis and primary productivity models among other
[13:09] information information the image on the right shows an eight day average of sea surface temperature along the east coast of the united
[13:16] states states the deep red color along the state of florida and northward to north carolina where it detaches from the coastline is
[13:25] the gulf stream a quick flowing western boundary current after it detaches from the continent turbulent flow encourages the formation
[13:34] of eddies which are evident on the eastern part of this image they look like little waves almost in this image
[13:48] there are currently several u.s satellites that are used for the remote sensing of open ocean coastal and inland
[13:55] waters waters these include landsat 7 and landsat 8 and the aqua and terra satellites the international space station also has
[14:05] served as a satellite for ocean imagery observations these next two slides provide a reference to the different nasa
[14:16] satellites and sensors that are commonly used for ocean color remote sensing the landsat series including the thematic mapper enhanced thematic mapper
[14:26] and operational land imager or oli are used to observe water quality these sensors provide high spatial resolution imagery which is particularly
[14:37] valuable in coastal systems where small scale processes can dominate and are otherwise neglected by coarser spatial resolution imagery
[14:47] the terra and aqua satellites each host a moderate resolution imaging spectrometer or modis which senses both reflected visible radiance and emitted
[14:58] thermal energy lotus is used for land ocean and atmospheric applications and use used to infer several parameters or data
[15:07] products used for understanding ocean biology carbon dynamics and circulation other ocean color satellites include the suomi national polar partnership or npp
[15:23] which hosts the visible infrared imaging radiometer suite or beers this sensor is used for spectral reflectance and to infer chlorophyll
[15:32] concentration concentration the international space station can be considered a satellite used for ocean color observations the hyperspectral
[15:41] imager for the coastal ocean or hico rode aboard the iss for five years from 2009 to 2014.
[15:48] this was a high spectral resolution sensor sometimes referred to as an imaging spectrometer or hyperspectral sensor sensor finally a satellite and sensor that is
[15:58] not yet launched but is under development is the plankton aerosols clouds ocean ecosystems or pace sensors this proposed hyperspectral sensor is
[16:07] scheduled to launch sometime in 2022 or 23. the landsat satellites have been collecting earth observations since july
[16:17] 1972. 1972. the satellite has a near polar orbit with a 10 am equator crossing time the revisit rate is every 16 days
[16:27] spatial resolution varies by satellite but it is typically possible to obtain 30 meter resolution imagery there is a commitment to continue with
[16:35] the landsat program as it has been so successful in tracking land use and land change and more recently with the launch
[16:41] of landsat 8 with its broader use in aquatic systems despite the relatively long revisit rate of 16 days landstat
[16:50] landsat is still a useful imaging system to understand some applied science questions for aquatic systems including marsh subsidence and the effects of
[16:59] eutrophication in inland waters the landsat 7 enhanced thematic mapper launched in 1999 and has remained operational since
[17:11] it has a 16 day revisit rate spectral bands include blue green green red panchromatic and reflected in
[17:18] thermal ir note in the figure that the reflectance of water is relatively lower than the reflectance of land
[17:26] recall me saying earlier that water is a dark target it also absorbs light strongly in the near infrared and beyond
[17:33] so the number of useful bands for aquatic applications is limited to the visible range the development of landsat 8's
[17:43] operational land the addition of another spectral band to improve the remote sensing of aquatic systems systems this satellite sensor also has a 16 day
[17:53] revisit rate and with this additional coastal band algorithms have been developed to derive chlorophyll color dissolved organic matter and other water
[18:01] constituents constituents the sentinel-2a satellite from the european space agency was recently launched and serves as several similar
[18:09] spectral bands to landsat 8 oli and at a finer spatial and temporal resolution than landsat 8. it may be of interest to some people in
[18:18] this webinar but we will not be discussing it as a part of this part of this webinar
[18:26] the workhorse for much of ocean color remote sensing are the modus imagers on the terra and aqua satellites
[18:34] both of these satellites are polar orbiting and have global coverage they collect mere daily observations terra collects in the morning
[18:42] and aqua collects in the afternoon there are a number of other sensors on the terra and aqua satellites but mostly
[18:49] for ocean color remote sensing we are interested in the modis sensor so what is modis lotus is the moderate resolution imaging
[18:59] spectroradiometer spectroradiometer it is designed as i've said before for land atmosphere ocean and cryosphere observations observations it has a spatial resolution of one
[19:08] kilometer but some of the bands since at 250 meters and at 500 meters it is possible to interpolate the ocean
[19:16] color bands to 250 meters and 500 meters facial resolution using the image processing software cdas while this may introduce some error this
[19:27] enables the use of the imagery in coastal waters where the finer spatial resolution is needed for the scale of
[19:33] processes occurring in these systems another satellite is the national polar partnership also known as the saomi npp
[19:44] this satellite was launched in 2011 and provides global coverage it has a 1 30 pm equator crossing time on a near daily
[19:52] revisit rate the viirs sensor is on the satellite and is used for ocean color remote sensing the virus sensor is the visible infrared
[20:03] imaging radiometer suite it is designed to collect measurements of ocean colors clouds clouds aerosols surface temperature fires and
[20:13] albedo albedo between the modis and veer sensors we've got the ocean covered but satellites and their sensors do not operate
[20:21] indefinitely eventually they come to the end of their functional life this is why nasa and other space
[20:27] agencies are continuously investing effort in the development of new satellite sensors and in the process changing the specifications of these
[20:36] sensors so the data can be used to answer new questions in pure and applied science one example of an experimental sensor
[20:47] was heiko the hyperspectral imager for the coastal ocean this was a partnership among the u.s naval research lab or nrl
[20:56] the office of naval research oregon state university and eventually nasa it was a high spectral resolution imager
[21:04] this time type of sensor is sometimes referred to as imaging spectrometer or as a hyperspectral imagery depending on
[21:10] the research community hico was designed and calibrated to collect over dark aquatic targets this sensor was only supposed to have an
[21:20] operational lifetime of one year it was installed on the iss in 2009 and was able to collect data for five years
[21:27] and way beyond its expected lifetime the imager was tasked to collect observations of specific targets divided defined by nrl and the scientific user
[21:36] community community these targets included open ocean coastal and inland waters more information about hico can be found
[21:44] in the above links ico data are available through the nasa ocean color web level 1 and 2 browser
[21:52] an exciting aspect of this sensor is that it now provides a five-year data set of hyper-spectral remote sensing
[21:59] imagery that can be used for algorithm development for nasa's future hyperspectral satellite sensor the newest ocean color satellite sensor
[22:11] under development at nasa is the ocean color imager on the plankton aerosol clouds ocean ecosystems or pace
[22:20] satellite satellite this will be a polar orbiting sensor with a two day revisit and one kilometer ground sample distance
[22:27] the imagery will collect observations at high spectral resolution on the right you see an image showing the spectral
[22:35] resolution of legacy and current ocean color sensors you can see czcs seawifs modis spheres and pace down
[22:44] the right hand side the paste sensor will have much higher spectral resolution in the visible range and will collect data in the shortwave
[22:53] infrared to improve on atmospheric correction correction an optional polarimeter is being considered for this satellite for cloud
[23:01] and aerosol studies and to aid in atmosphere correction of ocean radiometry radiometry the proposed launch date is in the
[23:09] 2022-23 time frame i encourage you to visit the link on this page to learn more about the preparatory activities
[23:16] for this new sensor and to think about how it might be used in answering applied science questions in the future
[23:31] radiometric observations of the earth are made at some distance and at some angle relative to the earth's surface
[23:38] it can be as close as from a ship or dock or as far away as from an airplane
[23:43] or a satellite along its path light interacts with material in the atmosphere such as dust small particles
[23:51] water vapor and gases on its way to the water's surface once at the surface it can enter or
[23:57] bounce off and then some will pass back out of the water column and upwards through the atmosphere
[24:03] the material in the atmosphere absorbs and scatters light changing the amount and spectral characteristics of the light
[24:10] light in aquatic remote sensing we work hard to remove the effects of the material in the atmosphere so we can obtain an image
[24:17] of the water surface that is as close to accurate as possible this can be really difficult because
[24:23] water is such a dark target and has low signal and so mistakes in our correction can have a big impact
[24:32] as you have seen water bodies dominated by phytoplankton colored dissolved organic matter suspended sediments or detrital particles have distinctive
[24:41] water colors that are detectable in their remote sensing reflectances like material in the water material in the atmosphere also has spectrally
[24:49] distinct characteristics that influence what the satellite sensor sees almost 90 percent of the reflectance signal detected by the satellite sensor
[25:01] is due to the atmosphere and only 10 percent is from the water's surface we use complex atmospheric correction
[25:10] algorithms that take into account the optical properties of atmospheric particles and gases in order to to subtract that signal from the light the
[25:19] sensor detects so that we can arrive at a surface reflectance as i've said previously water is a dark
[25:26] target so very little light is being emitted compared to land or ice so the sensors used for aquatic remote sensing
[25:33] must have high signal to noise so that they can have the sensitivity to detect the dark water surface even through the
[25:40] filter of the atmosphere we work hard to measure light at the sea surface in order to compare these
[25:48] so-called sea truth measurements to the results of our atmospheric correction algorithms algorithms how do we take these measurements
[25:57] from a boat or dock using a handheld field spectroradiometer we measure water leaving radiance and downwelling irradiance and use these
[26:06] measurements to derive remote sensing reflectance reflectance we consider these sea surface measurements to be the best estimate of
[26:13] the truth airborne or satellite sensors also measure the water leaving radiance but for much higher off of the water than a
[26:20] boat boat we compare the c truth measurements to our atmospherically corrected imagery which is a process also known as
[26:27] validation validation so how different is an image at the top of the atmosphere versus what we expect
[26:33] the surface to look like these images show the narragansett bay rhode island in the u.s on the left is an uncorrected image
[26:43] taken above the atmosphere on the right is the same image but this time with the effects of atmospheric gas
[26:50] aerosols and reflection off of the surface and water column vapor removed so that the only quantity that is
[26:57] represented is the water leaving radiance radiance because water is a dark target a faulty atmospheric correction can introduce
[27:04] mistakes into the resulting image the algorithms that we use to estimate chlorophyll dissolved organic matter and suspended sediments are sensitive to
[27:14] variability in the remote sensing reflectance spectrum if an image is improperly atmospherically corrected then inaccurate estimates of these data
[27:23] products will result when we obtain satellite data we can get it at different stages of processing depending on what our needs are
[27:36] some users prefer to use data that has already been atmospherically corrected and the data products have been derived
[27:42] whereas other users want the raw state of data available so they can make choices about how to process the data
[27:47] such as which atmosphere correction algorithm to use in response data providers serve the data at different processing levels
[28:02] they are listed here on this slide and i'm going to walk through them level zero data are unprocessed
[28:07] instrument data at full resolution any artifacts of these data from the communication of the spacecraft to the
[28:13] ground station have been removed these data are the most raw format available and are only provided for a few of the
[28:21] missions missions level 1a data are reconstructed unprocessed instrument data at full resolution time referenced and annotated with ancillary information including
[28:33] radiometric and geometric calibration coefficients and geo-referencing parameters computed and appended but not yet applied to the level 0 data
[28:44] level 1b data are level 1a data that have had instrument and radiometric calibrations applied level 2 data consist of derived
[28:54] geophysical variables at the same resolution as the source level 1 data these variables also called data products
[29:02] products like chlorophyll include such things as chlorophyll sea surface temperature inherent optical properties among other things things level 3 data are derived geophysical
[29:13] variables that have been aggregated or projected onto a well-defined spatial grid over a well-defined time period level 4 data are model output or results
[29:24] from analyses of the lower level data it is possible to obtain data at any one of these processing levels level 0 being
[29:37] the exception for some missions the effort needed to work with the data is more difficult and requires more skill
[29:44] from the lower levels or where the data are at the rawest as you move to the higher levels it can
[29:52] require less skill to process the data nasa's image processing software cdas enables the processing of data through
[30:01] these different levels so what kind of aquatic data products can a person obtain from satellite imagery aquatic remote sensing data products and
[30:15] their uses several ocean properties or data products can be derived from satellite remote sensing imagery chlorophyll a is contained in all
[30:27] eukaryotic phytoplankton and the cyanobacteria cyanobacteria it is used as a proxy for biomass of photoautotrophs at the water's surface
[30:36] or near surface because it is optically active we can estimate its concentration using remote sensing methods other aquatic properties derived from
[30:46] remote sensing imagery include water turbidity turbidity color dissolved organic matter or sedom sea surface temperature we can also
[30:56] obtain obtain surface winds and salinity from other data inputs one of the most common questions i am
[31:06] asked about aquatic road sensing is how is it possible to obtain chlorophyll a from remote sensing imagery
[31:14] in the next few slides i hope to convey to you a high level understanding of how we derive this biophysical data product
[31:21] from imagery on the right of this slide you'll see just a snapshot of the water surface and
[31:27] on the left here is the remote sensing reflectance across the visible range for this water on the right
[31:38] here is a schematic representation of the type of spectra one would obtain from waters with different chlorophyll
[31:43] concentrations concentrations the four example spectra on the left correspond to the images on the right spectrum one is from water with the
[31:52] highest chlorophyll concentration and each subsequent image has a decreasing chlorophyll concentration this difference is also noted in the
[32:00] magnitude of the spectra and the figures on the left as chlorophyll concentration decreases the peak height at around 550 nanometers
[32:10] also decreases and you'll note the peak at around 685 also decreases the chlorophyll egg algorithm is a
[32:30] fourth order polynomial relationship between a ratio of remote sensing reflectance reflectance at two wavelengths and chlorophyll a
[32:40] this type of algorithm was derived from the empirical data or data collected at sea there is more than one chlorophyll
[32:48] algorithm that can be used depending on the environment being studied for example a chlorophyll algorithm for the open ocean may not be appropriate
[32:56] for use in the coastal ocean also which satellite sensor is being used can define which chlorophyll algorithm should be also used
[33:05] if you would like more details about the different chlorophyll algorithms i suggest you follow the link to the
[33:11] algorithm description listed below the spectrum here simply stated the ratio of two remote sensing reflectance measures are used as
[33:22] inputs into the chlorophyll algorithm and the result is an estimate for chlorophyll concentration validation of the chlorophyll algorithm
[33:30] is performed by collecting sea truth measurements of chlorophyll within one hour on either side of the time that the
[33:37] satellite passed over these in-situ c-truth chlorophyll-a measurements are then compared to the chlorophyll derived from the satellite
[33:46] measurements and the uncertainty is estimated estimated it is a surprisingly straightforward approach developed in the 1970s and
[33:54] 1980s that continues to be refined and used today to estimate chlorophyll-a from space so now you have learned how chlorophyll
[34:05] is derived from the first principles of aquatic optics and how it is possible to make quantitative estimates of global
[34:12] chlorophyll from space as you see in this image here this is a composite of modis imagery from march april may 2014 or the
[34:22] springtime in the northern hemisphere note the chlorophyll concentration scale along the right and the patterns in the
[34:30] northern hemisphere during spring phytoplankton respond to increasing light temperature mixed layer depth and the abundance of nutrients
[34:39] available to them the north atlantic in particular noticeably greens up during this period next i will be going over how to obtain
[34:51] satellite data from a few of the data access tools commonly used by the research community and also i will introduce you to nasa's
[34:58] image processing software named cdas this webinar series is focused on nasa and u.s based satellite systems there
[35:07] are other international satellites and image processing tools available to the public but those are not a part of this
[35:13] webinar worldview is a web-based application for interactively browsing global full-resolution satellite imagery and then downloading the underlying data
[35:32] the browse feature that lets you step through time is really useful if you want to search image scenes without
[35:38] first having to go through the effort of processing the data find features such as a phytoplankton bloom
[35:44] worldview makes available over 100 data products and most of them are updated in near real time for the entire earth
[35:51] this supports time critical applications such as flood monitoring air quality monitoring and wildfire management to start i wanted to just browse
[36:02] satellite data to see if there was a recent period when there was a phytoplankton bloom in the arabian sea
[36:08] so i zoomed into the arabian sea in the tool i can click the red add layers button towards the left here
[36:17] to call up a search window from here i navigate to other where window will open and give me the
[36:27] choice to add chlorophyll a for the terra modis and aquamodus sensors i can see the chlorophyll data layer
[36:37] overlaying on top of the true color image image if i click on the camera icon in the
[36:42] upper right corner corner of the web page i can define the region to save and save it in one of a number of formats
[36:48] including jpeg and geotiff so just looking at this image here if you look at the horn of africa
[36:57] you can see this swirl or an eddy and what that is is it's an aggregation of phytoplankton into the physical current
[37:05] and that tells me in the state being december 1st that december 1st 2015 will be a good
[37:11] day to study because i can already see this swirl of chlorophyll just offshore of muscat oman the nasa ocean color web is another data
[37:23] access resource here you can obtain level one and two data from a number of satellite sensors including modis viirs and hico
[37:34] here is an example of the level one and two browser you can select the sensor month and year
[37:40] date range and provide a location it is possible to download image data from this search tool and then load it into
[37:47] nasa's image processing software cdas for further processing and analysis there are other data portals out on the
[37:56] web web three of them are listed here and i encourage you to look into them more the noaa tool has helpful regional
[38:03] information but also can provide global coverage data these tools are the noaa coast watch tool tool nasa giovanni and the usgs earth
[38:13] explorer which i use for accessing landsat data so how do you process the data after you download it
[38:23] in this next section i will introduce you to nasa's cds image processing tool which can be used to visualize and
[38:29] process the remote sensing data you just learned how to obtain you've already seen the level 1 and 2
[38:37] browser from nasa ocean color web nasa's ocean color web is supported by the ocean biology processing group or
[38:44] obpg at nasa's goddard space flight center center think of it as a go-to resource for data data processing tools and an
[38:53] enthusiastic community of researchers the obpg responsibilities include the collection collection processing calibration validation archive and distribution of
[39:04] ocean-related products from a large number of operational satellite-based remote sensing missions providing ocean color sea surface temperature and sea
[39:13] surface salinity data to the international research community since 1996. 1996. when you explore the website you will
[39:20] find information about the missions they support the data access tools they have available available documentation related to the data
[39:27] products and the algorithms that are used calibration and validation of data and under the services tab you'll have
[39:33] find helpful links to the user form and their image processing software cds this website provides a wealth of
[39:41] helpful information becoming proficient at accessing accessing processing and understanding ocean color satellite imagery it is at this website that you can find the image
[39:51] processing software cds cds was originally developed for the sea with sensor and derives its name from the seawifs data analysis system but now
[40:03] it supports most u.s and international ocean color emissions it is a comprehensive image analysis package for the processing display
[40:12] analysis and quality control of ocean color data and it's free it's freely available through nasa ocean color web website and
[40:20] the link at the top of this page cdas is well supported with online tutorials help pages and active user
[40:30] community at the ocean color forum and an attentive and very friendly support team based at nasa goddard
[40:38] the cdas team at goddard has put together a suite of freely available on-demand tutorials that you can see a
[40:44] listing of here and a webinar on how to install and use cdas it is through these tutorials webinar and through your own
[40:52] use of the tool that you can learn this program program cdas is intuitive to use and it does not
[40:57] take very long to learn and since cd supports such a wide variety of satellite sensors including international sensors your time
[41:04] investment in learning it is time well spent if you are interested in building your knowledge of in-water optics and the
[41:13] fundamentals of remote sensing beyond this fundamentals of aquatic remote sensing webinar i highly recommend the ocean optics web book this is a free
[41:22] online resource that is perfect for beginners and advanced users alike in my own research search i still refer
[41:28] back to this book when i need to clarify a concept there's also the ioccg summer lecture series from 2016
[41:37] that has a wealth of information about in water optics and also remote sensing imagery imagery and as noted previously for more
[41:45] information on remote sensing data access and processing tools this third link of the nash nasa ocean color web
[41:53] has a wealth of information so to recap this webinar in this webinar we have discussed the nature of light and how it propagates
[42:03] through the atmosphere and water column and back out to the sensor we have talked about the inherent
[42:09] optical properties of the constituents in the water and how they influence the color of light you've had an overview of the
[42:16] fundamentals of remote sensing including spatial temporal and spectral resolution we've talked about the different nasa satellites and sensors that can be used
[42:25] for aquatic applications we've touched on the idea of atmosphere correction and we've reviewed satellite processing levels and what they mean
[42:34] i've given an overview of data products used or commonly used in aquatic remote sensing sensing we've talked about a few of the data
[42:42] portals you can use to obtain remote sensing imagery for free and finally i've directed you towards nasa's ocean biology processing group
[42:51] where you can obtain and learn more about the freely available image processing software named cdas this concludes the fundamentals of
[43:01] aquatic remote sensing webinar we thank you for your interest in participation in this rset webinar i hope you will
[43:08] consider future r set webinars for your future training needs thank you
