# Fundamentals of Remote Sensing

## Part 1 Fundamentals of Aquatic remote sensing

00:02 hello and welcome to rset's fundamentals of aquatic remote sensing webinar
00:08 this on-demand webinar is meant to serve as a foundation in aquatic remote sensing and as a prerequisite for future
00:14 aquatic webinars and in-person trainings provided by our set we appreciate your interest and
00:20 participation in rset's programming
00:25 so why take this course the objective of this course is to provide an overview of aquatic optics
00:32 the remote sensing of water targets and nasa earth observation resources
00:37 available for aquatic applications this image captured by the landsat 8 oli
00:44 satellite sensor shows the view over western australia on may 12 2013
00:50 the image shows the rich sediment color dissolved organic matter and nutrient patterns in a tropical estuary and
00:57 nearby vegetated areas this type of information can help us
01:02 infer the biogeochemistry of the system
01:08 in this webinar we will cover a broad range of information first will be an
01:13 overview of light and how it interacts with the water column next we will go over the fundamentals of
01:19 remote sensing third we will discuss the types of data products we can derive from imagery and
01:25 how those data products may be used we will discuss nasa satellite imagery
01:30 data sources as well as data processing tools this is a lot of material to cover in
01:35 one session there will be helpful links throughout the webinar that you can use to refer to online resources
01:45 why do we observe the ocean from space to understand the earth's processes on a
01:51 global scale this animation shows a time series of chlorophyll from the sea with satellite
01:57 sensor if you look in the lower right you can see the month and year in the time
02:02 series from 1997 to 2005. watch the animation for a moment
02:09 focus on the ocean and notice patterns in the false color display of chlorophyll
02:15 purple is low chlorophyll and green to red are high chlorophyll note the patterns that you see across
02:21 the globe for example in the south pacific the region is dark blue or even
02:26 purple this indicates low chlorophyll now look up in the north atlantic
02:33 watch how it changes over time
02:39 notice how it greens up this occurs primarily during the spring gloom period and it slightly precedes
02:46 summer green up on land at the same latitudes light nutrients and temperature drive
02:52 phytoplankton productivity satellite observations of ocean chlorophyll give us the ability to make
02:58 global estimates of carbon uptake by phytoplankton this information helps in our
03:04 understanding of the global carbon budget
03:10 what are some advantages of remote sensing of aquatic environments there is synoptic coverage meaning
03:15 remote sensing imagery can collect data over large areas that would otherwise be impossible using ships or mooring
03:22 observations alone next the ocean moves and so for many processes frequent satellite overpasses
03:29 are needed to capture natural phenomena many satellite sensors collect data on near daily revisit rates and some of
03:36 these processes can therefore be observed third satellites can go where ships
03:41 cannot go understand remote sensing we must first
03:48 have some knowledge of the water and its constituents and how light interacts with them
03:58 in this section we will cover the nature of light and how it propagates through the atmosphere and water column and back
04:04 out to the satellite sensor or airborne sensor we will also talk about the inherent
04:09 optical properties of the constituents in the water and how they influence the color of light
04:17 the first step in any discussion of remote sensing requires an overview of the electromagnetic spectrum
04:24 energy is emitted from the sun and the photons travel at different wavelengths or different energy levels
04:30 for our purposes we are mainly interested in the light in the visible range or 400 to 700 nanometers and in
04:38 the thermal range if you are familiar with terrestrial or land imaging the mirror and short wave
04:45 infrared regions are used but because of the absorption of light by water at those wavelengths we do not use those
04:51 ranges for aquatic remote sensing
04:57 so here's how it works light from the sun passes through the atmosphere and if it reaches the sea
05:03 surface and then reflect off of the surface or pass through it as i said before the fate of a photon is
05:11 to be either scattered or absorbed if absorbed phytoplankton non-algal
05:18 particles color dissolved organic matter or water itself will absorb the light
05:26 if scattered it will do so in either the forward or backward direction if in the backward direction some of it
05:33 will be re-emitted from the sea surface and will be detected by a sensor
05:41 in aquatic remote sensing we are interested in the radiometric unit the remote sensing reflectance or rrs and
05:49 this is sometimes what we think of as ocean colored remote sensing reflectance is used in
05:55 ocean color algorithms to compute the data products of interest for ocean and aquatic science like chlorophyll
06:01 concentration remote sensing reflectance can be defined as the ratio of back scattering
06:08 to the total absorption and back scattering as affected by the local sun and sky conditions
06:16 alternatively it can be defined as the water leaving radiance or the light just
06:21 above the surface to the incoming or downwelling irradiance incident on the sea surface
06:28 with this equation we see the relationship of the inherent optical properties absorption and scattering
06:34 of the material in the water to the quantity and quality of light in the underwater light field
06:41 it is this remote sensing reflectance quantity that is derived from satellite remote sensing measurements
06:48 because of these relationships of what is in the water to the color of the light emitted from the water we can
06:54 infer concentrations of optically active constituents in the upper part of the water column that the satellite can
07:00 detect or see
07:06 here again is the equation for remote sensing reflectance light absorption and back scattering by
07:11 the different constituents in the water column govern the light the color of light the sensor detects
07:17 this landsat 8 oli image to the right is of rupert bay in northern canada
07:24 doesn't it look kind of like a
07:29 latte this image illustrates the effect of the different absorbing constituents in the water
07:37 in the image you see that the dark water up in the upper right of the image is characteristic of color dissolved
07:43 organic matter or cedom this is coming from the rivers flowing into the bay from the south as well as
07:49 from the east seed on rich water tends to look black as it absorbs light strongly but it
07:55 doesn't reflect much light backward in the middle part of the bay tidal forces cause a resuspension of sediments
08:03 making for a light brown color offshore of the mouth of the bay there
08:08 are regions of bluer water and regions that are slightly green possibly due to phytoplankton
08:15 if you are having a hard time seeing much of a difference among the chlorophyll water and cedam examples
08:20 that i have here you're not alone part of the reason i use this example is to emphasize to you that water is a dark
08:27 target remote sensing reflectance in the visible range is low for water as compared to land and so we must be very
08:34 careful that instruments are sensitive enough for water targets are calibrated in the visible range and that we are
08:40 careful not to over correct for the atmospheric effects on light absorption and scattering
08:46 so we see these pictures with our eyes what would the remote sensing reflectance spectra look like for these
08:53 different water types in the figure on the right you see wavelength across the x-axis and remote
08:59 sensing reflectance along the y-axis note how the remote sensing reflectance spectrum is very low for cdom but has a
09:07 higher magnitude for sediments this intuitively makes sense because a sediment image looks bright light brown
09:13 and brighter to our eye the water appears blue chlorophyll reflects strongly in the
09:20 green as you can see in the peak in the region around 550.
09:28 so to our eye chlorophyll looks green look at the figure to the right the gray vertical bars represent the
09:35 wavelength ranges where a typical human eye detects light humans have color detecting receptors
09:41 that sense light in three ranges corresponding to blue green and red our eyes typically can only see three
09:47 wavelengths whereas satellite sensors can detect even more depending on the spectral resolution of the sensor
09:54 so let's learn a little bit more about satellite remote sensing
10:02 in this section we will discuss image resolution some of nasa's satellites and sensors for aquatic applications
10:08 image correction and satellite data processing levels
10:15 when we talk about resolution three types come to mind spatial temporal and spectral
10:22 first is spatial resolution or how the area on the ground translates to one pixel
10:27 the smallest unit measured by the sensor for example one landsat 8 oli pixel can
10:33 be about 15 or 30 meters in spatial resolution how often a sensor obtains an image of a
10:40 particular part of the globe is referred to as temporal resolution for example
10:46 landsat 8 oli returns only once every 16 days but modis has a more frequent
10:52 return rate at about one to two times per day spectral resolution refers to how many
10:59 colors or bands an imager can collect for example the moda sensor has 36
11:05 spectral bands whereas landsat 8 senses about just 9 spectral bands
11:16 for the purposes of this webinar we are most interested in passive satellite sensors that measure reflected solar
11:22 radiation in the visible range to use in our ocean color algorithms
11:28 we are also interested in measuring the emitted infrared and microwave radiation
11:33 in order to observe observe sea surface temperature we call these sensors passive because
11:39 they are detecting the reflected or emitted light energy from the sun for this webinar we will only refer to
11:46 passive remote sensing although active remote sensing like lidar is gaining popularity for understanding particles
11:53 in aquatic environments but we will not cover that in this webinar
11:59 satellite measurements can be used to infer characteristics of several earth systems spheres
12:05 depending on the type of sensor and which part of the electromagnetic spectrum is used information can be
12:11 gained about the atmosphere including clouds aerosols and gases as well as the earth's surface including
12:17 snow and ice land vegetation and water
12:24 as mentioned before the remote sensing of water bodies is used to derive the properties of optically active water
12:31 constituents these include suspended sediments algae like this coccolithophore bloom
12:37 near norway in the upper right of this slide color dissolved organic matter and
12:43 others we use passive sensors to measure the reflected solar radiation
12:52 sea surface temperature can be observed using sensors that detect emitted thermal radiation
12:58 knowing sea surface temperature can give insight into the ocean heat budget ocean current patterns and rates
13:05 the rate of photosynthesis and primary productivity models among other information
13:11 the image on the right shows an eight day average of sea surface temperature along the east coast of the united
13:17 states the deep red color along the state of florida and northward to north carolina
13:23 where it detaches from the coastline is the gulf stream a quick flowing western boundary current
13:30 after it detaches from the continent turbulent flow encourages the formation of eddies which are evident on the
13:37 eastern part of this image they look like little waves almost in this image
13:49 there are currently several u.s satellites that are used for the remote sensing of open ocean coastal and inland
13:56 waters these include landsat 7 and landsat 8 and the aqua and terra satellites
14:03 the international space station also has served as a satellite for ocean imagery
14:08 observations these next two slides provide a
14:15 reference to the different nasa satellites and sensors that are commonly used for ocean color remote sensing
14:22 the landsat series including the thematic mapper enhanced thematic mapper and operational land imager or oli are
14:30 used to observe water quality these sensors provide high spatial resolution imagery which is particularly
14:37 valuable in coastal systems where small scale processes can dominate and are
14:43 otherwise neglected by coarser spatial resolution imagery
14:48 the terra and aqua satellites each host a moderate resolution imaging
14:53 spectrometer or modis which senses both reflected visible radiance and emitted
14:58 thermal energy lotus is used for land ocean and atmospheric applications and use used to
15:06 infer several parameters or data products used for understanding ocean biology carbon dynamics and circulation
15:17 other ocean color satellites include the suomi national polar partnership or npp
15:24 which hosts the visible infrared imaging radiometer suite or beers this sensor is used for spectral
15:30 reflectance and to infer chlorophyll concentration the international space station can be
15:36 considered a satellite used for ocean color observations the hyperspectral imager for the coastal ocean or hico
15:44 rode aboard the iss for five years from 2009 to 2014. this was a high spectral resolution
15:50 sensor sometimes referred to as an imaging spectrometer or hyperspectral sensor
15:56 finally a satellite and sensor that is not yet launched but is under development is the plankton aerosols
16:02 clouds ocean ecosystems or pace sensors this proposed hyperspectral sensor is
16:07 scheduled to launch sometime in 2022 or 23.
16:14 the landsat satellites have been collecting earth observations since july 1972.
16:19 the satellite has a near polar orbit with a 10 am equator crossing time the revisit rate is every 16 days
16:27 spatial resolution varies by satellite but it is typically possible to obtain 30 meter resolution imagery
16:34 there is a commitment to continue with the landsat program as it has been so successful in tracking land use and land
16:40 change and more recently with the launch of landsat 8 with its broader use in aquatic systems
16:45 despite the relatively long revisit rate of 16 days landstat landsat is still a useful imaging system
16:53 to understand some applied science questions for aquatic systems including marsh subsidence and the effects of
16:60 eutrophication in inland waters
17:05 the landsat 7 enhanced thematic mapper launched in 1999 and has remained operational since
17:12 it has a 16 day revisit rate spectral bands include blue green green red panchromatic and reflected in
17:19 thermal ir note in the figure that the reflectance of water is relatively lower than the
17:25 reflectance of land recall me saying earlier that water is a dark target it also absorbs light
17:31 strongly in the near infrared and beyond so the number of useful bands for aquatic applications is limited to the
17:38 visible range the development of landsat 8's
17:44 operational land the addition of another spectral band to improve the remote sensing of aquatic
17:50 systems this satellite sensor also has a 16 day revisit rate and with this additional
17:55 coastal band algorithms have been developed to derive chlorophyll color dissolved organic matter and other water
18:01 constituents the sentinel-2a satellite from the european space agency was recently
18:08 launched and serves as several similar spectral bands to landsat 8 oli and at a
18:13 finer spatial and temporal resolution than landsat 8. it may be of interest to some people in
18:19 this webinar but we will not be discussing it as a part of this part of this webinar
18:27 the workhorse for much of ocean color remote sensing are the modus imagers on the terra and aqua satellites
18:34 both of these satellites are polar orbiting and have global coverage they collect mere daily observations
18:41 terra collects in the morning and aqua collects in the afternoon there are a number of other sensors on
18:47 the terra and aqua satellites but mostly for ocean color remote sensing we are interested in the modis sensor
18:55 so what is modis lotus is the moderate resolution imaging spectroradiometer
19:01 it is designed as i've said before for land atmosphere ocean and cryosphere observations
19:07 it has a spatial resolution of one kilometer but some of the bands since at 250 meters and at 500 meters
19:14 it is possible to interpolate the ocean color bands to 250 meters and 500 meters
19:20 facial resolution using the image processing software cdas while this may introduce some error this
19:28 enables the use of the imagery in coastal waters where the finer spatial resolution is needed for the scale of
19:33 processes occurring in these systems
19:39 another satellite is the national polar partnership also known as the saomi npp
19:45 this satellite was launched in 2011 and provides global coverage it has a 1 30
19:50 pm equator crossing time on a near daily revisit rate the viirs sensor is on the satellite and
19:56 is used for ocean color remote sensing the virus sensor is the visible infrared
20:04 imaging radiometer suite it is designed to collect measurements of ocean colors
20:09 clouds aerosols surface temperature fires and albedo
20:15 between the modis and veer sensors we've got the ocean covered but satellites and their sensors do not operate
20:21 indefinitely eventually they come to the end of their functional life this is why nasa and other space
20:28 agencies are continuously investing effort in the development of new satellite sensors and in the process
20:35 changing the specifications of these sensors so the data can be used to answer new questions in pure and applied
20:41 science one example of an experimental sensor
20:48 was heiko the hyperspectral imager for the coastal ocean this was a partnership among the u.s
20:54 naval research lab or nrl the office of naval research oregon state university and eventually nasa
21:01 it was a high spectral resolution imager this time type of sensor is sometimes
21:07 referred to as imaging spectrometer or as a hyperspectral imagery depending on the research community
21:13 hico was designed and calibrated to collect over dark aquatic targets
21:19 this sensor was only supposed to have an operational lifetime of one year it was installed on the iss in 2009 and
21:26 was able to collect data for five years and way beyond its expected lifetime the imager was tasked to collect
21:32 observations of specific targets divided defined by nrl and the scientific user community
21:38 these targets included open ocean coastal and inland waters more information about hico can be found
21:45 in the above links ico data are available through the nasa ocean color web level 1 and 2 browser
21:53 an exciting aspect of this sensor is that it now provides a five-year data set of hyper-spectral remote sensing
21:59 imagery that can be used for algorithm development for nasa's future hyperspectral satellite sensor
22:09 the newest ocean color satellite sensor under development at nasa is the ocean color imager on the plankton aerosol
22:17 clouds ocean ecosystems or pace satellite this will be a polar orbiting sensor
22:23 with a two day revisit and one kilometer ground sample distance the imagery will collect observations at
22:30 high spectral resolution on the right you see an image showing the spectral
22:36 resolution of legacy and current ocean color sensors you can see
22:41 czcs seawifs modis spheres and pace down the right hand side
22:47 the paste sensor will have much higher spectral resolution in the visible range and will collect data in the shortwave
22:54 infrared to improve on atmospheric correction an optional polarimeter is being
22:59 considered for this satellite for cloud and aerosol studies and to aid in atmosphere correction of ocean
23:05 radiometry the proposed launch date is in the 2022-23 time frame i encourage you to
23:12 visit the link on this page to learn more about the preparatory activities for this new sensor and to think about
23:18 how it might be used in answering applied science questions in the future
23:32 radiometric observations of the earth are made at some distance and at some angle relative to the earth's surface
23:39 it can be as close as from a ship or dock or as far away as from an airplane or a satellite
23:45 along its path light interacts with material in the atmosphere such as dust
23:50 small particles water vapor and gases on its way to the water's surface
23:55 once at the surface it can enter or bounce off and then some will pass back out of the water column and upwards
24:02 through the atmosphere the material in the atmosphere absorbs and scatters light changing the amount
24:08 and spectral characteristics of the light in aquatic remote sensing we work hard to remove the effects of the material in
24:15 the atmosphere so we can obtain an image of the water surface that is as close to accurate as possible
24:21 this can be really difficult because water is such a dark target and has low signal and so mistakes in our correction
24:27 can have a big impact
24:33 as you have seen water bodies dominated by phytoplankton colored dissolved organic matter suspended sediments or
24:39 detrital particles have distinctive water colors that are detectable in their remote sensing reflectances
24:46 like material in the water material in the atmosphere also has spectrally distinct characteristics that influence
24:52 what the satellite sensor sees almost 90 percent of the reflectance
24:59 signal detected by the satellite sensor is due to the atmosphere and only 10
25:04 percent is from the water's surface we use complex atmospheric correction
25:11 algorithms that take into account the optical properties of atmospheric particles and gases in order to to
25:18 subtract that signal from the light the sensor detects so that we can arrive at a surface reflectance
25:24 as i've said previously water is a dark target so very little light is being emitted compared to land or ice so the
25:32 sensors used for aquatic remote sensing must have high signal to noise so that they can have the sensitivity to detect
25:38 the dark water surface even through the filter of the atmosphere
25:45 we work hard to measure light at the sea surface in order to compare these so-called sea truth measurements to the
25:51 results of our atmospheric correction algorithms how do we take these measurements
25:58 from a boat or dock using a handheld field spectroradiometer we measure water leaving radiance and
26:04 downwelling irradiance and use these measurements to derive remote sensing reflectance
26:10 we consider these sea surface measurements to be the best estimate of the truth
26:15 airborne or satellite sensors also measure the water leaving radiance but for much higher off of the water than a
26:21 boat we compare the c truth measurements to our atmospherically corrected imagery which is a process also known as
26:27 validation so how different is an image at the top of the atmosphere versus what we expect
26:33 the surface to look like these images show the narragansett bay
26:40 rhode island in the u.s on the left is an uncorrected image taken above the atmosphere
26:46 on the right is the same image but this time with the effects of atmospheric gas
26:51 aerosols and reflection off of the surface and water column vapor removed so that the only quantity that is
26:57 represented is the water leaving radiance because water is a dark target a faulty
27:03 atmospheric correction can introduce mistakes into the resulting image the algorithms that we use to estimate
27:10 chlorophyll dissolved organic matter and suspended sediments are sensitive to variability in the remote sensing
27:16 reflectance spectrum if an image is improperly atmospherically corrected then
27:21 inaccurate estimates of these data products will result
27:30 when we obtain satellite data we can get it at different stages of processing depending on what our needs are
27:36 some users prefer to use data that has already been atmospherically corrected and the data products have been derived
27:42 whereas other users want the raw state of data available so they can make choices about how to process the data
27:48 such as which atmosphere correction algorithm to use in response data providers serve the data at different processing levels
28:02 they are listed here on this slide and i'm going to walk through them level zero data are unprocessed
28:08 instrument data at full resolution any artifacts of these data from the communication of the spacecraft to the
28:14 ground station have been removed these data are the most raw format available
28:19 and are only provided for a few of the missions level 1a data are reconstructed
28:26 unprocessed instrument data at full resolution time referenced and annotated
28:31 with ancillary information including radiometric and geometric calibration coefficients and geo-referencing
28:38 parameters computed and appended but not yet applied to the level 0 data
28:44 level 1b data are level 1a data that have had instrument and radiometric calibrations applied
28:51 level 2 data consist of derived geophysical variables at the same resolution as the source level 1 data
28:60 these variables also called data products like chlorophyll include such things as
29:05 chlorophyll sea surface temperature inherent optical properties among other things
29:11 level 3 data are derived geophysical variables that have been aggregated or projected onto a well-defined spatial
29:17 grid over a well-defined time period level 4 data are model output or results
29:25 from analyses of the lower level data
29:32 it is possible to obtain data at any one of these processing levels level 0 being
29:38 the exception for some missions the effort needed to work with the data is more difficult and requires more skill
29:45 from the lower levels or where the data are at the rawest as you move to the higher levels it can
29:52 require less skill to process the data nasa's image processing software cdas
29:60 enables the processing of data through these different levels so what kind of aquatic data products
30:06 can a person obtain from satellite imagery
30:14 aquatic remote sensing data products and their uses
30:20 several ocean properties or data products can be derived from satellite remote sensing imagery
30:25 chlorophyll a is contained in all eukaryotic phytoplankton and the cyanobacteria
30:31 it is used as a proxy for biomass of photoautotrophs at the water's surface
30:37 or near surface because it is optically active we can estimate its concentration using remote
30:43 sensing methods other aquatic properties derived from remote sensing imagery include water
30:49 turbidity color dissolved organic matter or sedom sea surface temperature we can also
30:56 obtain surface winds and salinity from other data inputs
31:05 one of the most common questions i am asked about aquatic road sensing is how is it possible to obtain chlorophyll a
31:12 from remote sensing imagery in the next few slides i hope to convey to you a high level understanding of how
31:19 we derive this biophysical data product from imagery on the right of this slide you'll see
31:25 just a snapshot of the water surface and on the left here is the remote sensing reflectance across the visible range for
31:32 this water on the right
31:38 here is a schematic representation of the type of spectra one would obtain from waters with different chlorophyll
31:44 concentrations the four example spectra on the left correspond to the images on the right
31:50 spectrum one is from water with the highest chlorophyll concentration and each subsequent image has a decreasing
31:57 chlorophyll concentration this difference is also noted in the magnitude of the spectra and the figures
32:03 on the left as chlorophyll concentration decreases the peak height at around 550 nanometers
32:10 also decreases and you'll note the peak at around 685 also decreases
32:29 the chlorophyll egg algorithm is a fourth order polynomial relationship between a ratio of remote sensing
32:35 reflectance at two wavelengths and chlorophyll a
32:40 this type of algorithm was derived from the empirical data or data collected at sea
32:46 there is more than one chlorophyll algorithm that can be used depending on the environment being studied
32:52 for example a chlorophyll algorithm for the open ocean may not be appropriate for use in the coastal ocean
32:59 also which satellite sensor is being used can define which chlorophyll algorithm should be also used
33:06 if you would like more details about the different chlorophyll algorithms i suggest you follow the link to the
33:12 algorithm description listed below the spectrum here simply stated the ratio of two remote
33:19 sensing reflectance measures are used as inputs into the chlorophyll algorithm
33:24 and the result is an estimate for chlorophyll concentration validation of the chlorophyll algorithm
33:31 is performed by collecting sea truth measurements of chlorophyll within one hour on either side of the time that the
33:38 satellite passed over these in-situ c-truth chlorophyll-a measurements are then compared to the
33:44 chlorophyll derived from the satellite measurements and the uncertainty is estimated
33:50 it is a surprisingly straightforward approach developed in the 1970s and 1980s that continues to be refined and
33:58 used today to estimate chlorophyll-a from space
34:04 so now you have learned how chlorophyll is derived from the first principles of aquatic optics and how it is possible to
34:11 make quantitative estimates of global chlorophyll from space as you see in this image here
34:17 this is a composite of modis imagery from march april may 2014 or the
34:23 springtime in the northern hemisphere note the chlorophyll concentration scale
34:28 along the right and the patterns in the northern hemisphere during spring phytoplankton respond to
34:35 increasing light temperature mixed layer depth and the abundance of nutrients available to them
34:41 the north atlantic in particular noticeably greens up during this period
34:49 next i will be going over how to obtain satellite data from a few of the data access tools commonly used by the
34:55 research community and also i will introduce you to nasa's image processing software named cdas
35:02 this webinar series is focused on nasa and u.s based satellite systems there
35:08 are other international satellites and image processing tools available to the public but those are not a part of this
35:14 webinar
35:22 worldview is a web-based application for interactively browsing global full-resolution satellite imagery and
35:30 then downloading the underlying data the browse feature that lets you step through time is really useful if you
35:36 want to search image scenes without first having to go through the effort of processing the data find features such
35:42 as a phytoplankton bloom worldview makes available over 100 data products and most of them are updated in
35:49 near real time for the entire earth this supports time critical applications
35:55 such as flood monitoring air quality monitoring and wildfire management
36:01 to start i wanted to just browse satellite data to see if there was a recent period when there was a phytoplankton bloom in the arabian sea
36:09 so i zoomed into the arabian sea in the tool i can click the red add
36:15 layers button towards the left here to call up a search window
36:21 from here i navigate to other where window will open and give me the
36:27 choice to add chlorophyll a for the terra modis and aquamodus sensors
36:35 i can see the chlorophyll data layer overlaying on top of the true color image
36:41 if i click on the camera icon in the upper right corner corner of the web page i can define the region to save and
36:47 save it in one of a number of formats including jpeg and geotiff so just looking at this image here if
36:54 you look at the horn of africa you can see this swirl or an eddy and
36:60 what that is is it's an aggregation of phytoplankton into the physical current
37:05 and that tells me in the state being december 1st that december 1st 2015 will be a good
37:11 day to study because i can already see this swirl of chlorophyll just offshore of muscat oman
37:21 the nasa ocean color web is another data access resource here you can obtain level one and two
37:27 data from a number of satellite sensors including modis viirs and hico
37:34 here is an example of the level one and two browser you can select the sensor month and year
37:40 date range and provide a location it is possible to download image data from
37:46 this search tool and then load it into nasa's image processing software cdas for further processing and analysis
37:55 there are other data portals out on the web three of them are listed here and i encourage you to look into them more
38:02 the noaa tool has helpful regional information but also can provide global coverage data
38:07 these tools are the noaa coast watch tool nasa giovanni and the usgs earth
38:14 explorer which i use for accessing landsat data
38:20 so how do you process the data after you download it in this next section i will introduce you to nasa's cds image processing tool
38:28 which can be used to visualize and process the remote sensing data you just learned how to obtain
38:35 you've already seen the level 1 and 2 browser from nasa ocean color web nasa's ocean color web is supported by
38:43 the ocean biology processing group or obpg at nasa's goddard space flight
38:48 center think of it as a go-to resource for data data processing tools and an
38:54 enthusiastic community of researchers the obpg responsibilities include the
38:59 collection processing calibration validation archive and distribution of ocean-related products from a large
39:07 number of operational satellite-based remote sensing missions providing ocean color sea surface temperature and sea
39:14 surface salinity data to the international research community since 1996.
39:19 when you explore the website you will find information about the missions they support the data access tools they have
39:25 available documentation related to the data products and the algorithms that are used calibration and validation of data
39:32 and under the services tab you'll have find helpful links to the user form and their image processing software cds
39:40 this website provides a wealth of helpful information becoming proficient at accessing
39:45 accessing processing and understanding ocean color satellite imagery it is at this website that you can find the image
39:51 processing software cds cds was originally developed for the sea
39:57 with sensor and derives its name from the seawifs data analysis system but now
40:03 it supports most u.s and international ocean color emissions it is a comprehensive image analysis
40:10 package for the processing display analysis and quality control of ocean color data
40:16 and it's free it's freely available through nasa ocean color web website and the link at the top of this page
40:25 cdas is well supported with online tutorials help pages and active user
40:30 community at the ocean color forum and an attentive and very friendly support team based at nasa goddard
40:39 the cdas team at goddard has put together a suite of freely available on-demand tutorials that you can see a
40:44 listing of here and a webinar on how to install and use cdas it is through these
40:49 tutorials webinar and through your own use of the tool that you can learn this program
40:55 cdas is intuitive to use and it does not take very long to learn and since cd supports such a wide variety of
41:01 satellite sensors including international sensors your time investment in learning it is time well
41:06 spent if you are interested in building your knowledge of in-water optics and the
41:13 fundamentals of remote sensing beyond this fundamentals of aquatic remote sensing webinar i highly recommend the
41:19 ocean optics web book this is a free online resource that is perfect for beginners and advanced users alike
41:27 in my own research search i still refer back to this book when i need to clarify a concept
41:33 there's also the ioccg summer lecture series from 2016 that has a wealth of information about
41:40 in water optics and also remote sensing imagery and as noted previously for more
41:46 information on remote sensing data access and processing tools this third
41:51 link of the nash nasa ocean color web has a wealth of information
41:58 so to recap this webinar in this webinar we have discussed the nature of light and how it propagates
42:04 through the atmosphere and water column and back out to the sensor we have talked about the inherent
42:09 optical properties of the constituents in the water and how they influence the color of light
42:15 you've had an overview of the fundamentals of remote sensing including spatial temporal and spectral resolution
42:22 we've talked about the different nasa satellites and sensors that can be used for aquatic applications
42:28 we've touched on the idea of atmosphere correction and we've reviewed satellite processing levels and what they mean
42:35 i've given an overview of data products used or commonly used in aquatic remote sensing
42:41 we've talked about a few of the data portals you can use to obtain remote sensing imagery for free
42:47 and finally i've directed you towards nasa's ocean biology processing group where you can obtain and learn more
42:53 about the freely available image processing software named cdas
43:00 this concludes the fundamentals of aquatic remote sensing webinar we thank you for your interest in participation
43:06 in this rset webinar i hope you will consider future r set webinars for your future training needs
43:14 thank you

## Part 2 Satellites Data and Tools

00:01 hello everyone and welcome to session
00:03 

00:03 two of
00:04 

00:04 our fundamentals of remote sensing
00:06 

00:06 webinar focused on land management and
00:08 

00:08 wildfire applications
00:10 

00:10 this is the second of three introductory
00:12 

00:12 sessions that we offer
00:14 

00:14 session one covers the fundamentals and
00:16 

00:16 there's also a second session two
00:18 

00:18 covering water resources
00:20 

00:20 these sessions are intended to provide a
00:22 

00:22 basic overview of remote sensing and are
00:25 

00:25 recommended as a prerequisite for any
00:27 

00:27 future rsi webinar that you may attend
00:30 

00:30 particularly for land management
00:32 

00:32 wildfire and water resources
00:35 

00:35 these webinars are a little different
00:36 

00:36 than some of the others that ourset
00:38 

00:38 offers because they will not be offered
00:40 

00:40 live nor will we provide certificates of
00:43 

00:43 completion however as i just mentioned
00:46 

00:46 they may be required as prerequisites
00:48 

00:48 for future more in-depth webinars
00:51 

00:51 my name is amber cuss and i will be
00:53 

00:53 presenting this webinar to you along
00:54 

00:54 with cindy schmidt
00:59 

00:59 before i get started with discussing the
01:01 

01:01 fundamentals of remote sensing i wanted
01:03 

01:03 to give you some information about the
01:05 

01:05 rset program
01:07 

01:07 the goal of rset is to increase the
01:09 

01:09 utility of nasa earth science and model
01:12 

01:12 data for policy makers regulatory
01:14 

01:14 agencies and other applied science
01:16 

01:16 professionals in water resources
01:19 

01:19 disasters health and air quality and
01:21 

01:21 land management
01:23 

01:23 we offer several kinds of trainings
01:25 

01:25 including online trainings and in-person
01:28 

01:28 trainings
01:29 

01:29 to date we have conducted 53 trainings
01:31 

01:31 with more than 4 000 participants from
01:34 

01:34 many different organizations and
01:36 

01:36 countries
01:39 

01:39 arsen currently has three primary focus
01:41 

01:41 areas for training
01:43 

01:43 health and air quality water resources
01:45 

01:45 and flood monitoring and land management
01:48 

01:48 which includes wildfire applications
01:51 

01:51 we also provide training to individuals
01:53 

01:53 and organizations that would like to
01:55 

01:55 develop their own online or in-person
01:58 

01:58 trainings
01:59 

01:59 this introductory webinar is useful for
02:02 

02:02 water resources and land management
02:04 

02:04 applications
02:05 

02:05 there will be different introductory
02:07 

02:07 webinars for health and air quality so
02:10 

02:10 please check back on the rsat website
02:12 

02:12 listed on the previous slide for more
02:14 

02:14 information about that
02:17 

02:17 here's the outline for this session
02:20 

02:20 cindy schmidt and i will be presenting
02:22 

02:22 on the satellites used for land
02:23 

02:23 management and wildfires
02:25 

02:25 we will provide the basics of land cover
02:27 

02:27 mapping and outline land cover and fire
02:30 

02:30 detection products
02:32 

02:32 we will then discuss the basics of
02:33 

02:33 detecting land cover change and finally
02:36 

02:36 give you some information on two
02:38 

02:38 vegetation indices
02:40 

02:40 ndvi and evi
02:44 

02:44 next we are going to discuss the
02:46 

02:46 specific satellites in sensors we will
02:48 

02:48 start with a brief overview of the
02:50 

02:50 primary sensors for land management
02:53 

02:53 landsat and modis
02:54 

02:54 then talk about the characteristics of
02:56 

02:56 the data and where to obtain the images
02:59 

02:59 and products
03:02 

03:02 first i will discuss the modis
03:03 

03:03 instrument
03:06 

03:06 modis is one of the key imaging
03:08 

03:08 instruments for nasa's earth observing
03:10 

03:10 system
03:12 

03:12 it is designed to measure large
03:14 

03:14 large-scale global dynamics across land
03:17 

03:17 oceans and the atmosphere
03:19 

03:19 flying on two satellites terra and aqua
03:22 

03:22 allows the modis sensor to capture
03:24 

03:24 imagery of the same area on earth at
03:26 

03:26 different times of the of the day
03:29 

03:29 modus imagery has varying spatial
03:31 

03:31 resolution depending on the product
03:32 

03:32 you're interested in from 250 meters to
03:35 

03:35 one kilometer
03:37 

03:37 the temporal resolution also varies from
03:39 

03:39 daily to eight day sixteen day monthly
03:42 

03:42 and yearly composites
03:44 

03:44 these data are available from 2000 to
03:46 

03:46 present
03:47 

03:47 the original data format is hdf however
03:50 

03:50 there are now new sites that provide
03:52 

03:52 modis products
03:53 

03:53 as files such as geotiffs that are
03:56 

03:56 easily digestible into geospatial
03:58 

03:58 software such as gis spectrally it has
04:01 

04:01 36 bands and the major bands of interest
04:04 

04:04 are in the visible and infrared
04:09 

04:09 modis tiles or the area over which modis
04:12 

04:12 image is obtained is much larger when
04:14 

04:14 compared to landsat which we will
04:16 

04:16 discuss soon
04:18 

04:18 this figure shows modus tiles compared
04:20 

04:20 to landsat tiles
04:23 

04:23 the red dots in the center of each of
04:26 

04:26 these smaller swaths represent
04:30 

04:30 the center of a landsat image and the
04:32 

04:32 brown squares represent the outline of a
04:35 

04:35 modus image
04:37 

04:37 the lopsided squares that are in blue
04:41 

04:41 are one single modis image
04:44 

04:44 so you can see that a modis covers an
04:46 

04:46 area that is much larger than landsat
04:53 

04:53 the modus naming convention can also be
04:55 

04:55 quite confusing but it's important to
04:57 

04:57 understand the information within the
04:59 

04:59 names of the modis products when you've
05:01 

05:01 downloaded it from the website
05:04 

05:04 so the first part of the name is
05:06 

05:06 actually the product number shown here
05:10 

05:10 it could be mod which means it comes
05:12 

05:12 from the pterosatellite it could be myd
05:15 

05:15 which means it comes from the aqua
05:17 

05:17 satellite or mcd which means it's a
05:20 

05:20 combined terra and aqua image
05:24 

05:24 the next part of the name is the
05:26 

05:26 instrument it comes from so modis
05:29 

05:29 next is the platform here it's terra
05:32 

05:32 it can also be aqua or combined
05:36 

05:36 the name indicates the parameter in this
05:38 

05:38 case it's surface reflectance
05:41 

05:41 then it provides the temporal resolution
05:43 

05:43 eight day
05:46 

05:46 but it could also be a 16 day or monthly
05:48 

05:48 for example
05:49 

05:49 and then it provides the processing
05:51 

05:51 level the spatial resolution
05:54 

05:54 the projection in this case sinusoidal
05:57 

05:57 and the file type grid
06:03 

06:03 it's much easier to call modis products
06:05 

06:05 by the shortened name shown in this
06:07 

06:07 table such as surface reflectance as mod
06:11 

06:11 09
06:12 

06:12 the vegetation indices produce products
06:15 

06:15 are also called mod 13.
06:18 

06:18 this table also provides many of the
06:20 

06:20 products available that are useful for
06:22 

06:22 land management such as land cover and
06:24 

06:24 land cover change leafy area index
06:27 

06:27 primary production and others
06:29 

06:29 as you can see the temporal resolution
06:32 

06:32 also varies from daily to composites at
06:35 

06:35 8-day 16-day monthly and yearly
06:41 

06:41 for more general information on modis
06:43 

06:43 here are two websites that are really
06:44 

06:44 useful
06:45 

06:45 the first is the land processes
06:47 

06:47 distributed active archive center or lp
06:50 

06:50 dac
06:51 

06:51 the lpdac operates as a partnership
06:53 

06:53 between the usgs and nasa
06:56 

06:56 the second is the earth observing system
06:58 

06:58 data and information system or eostas
07:02 

07:02 they have additional information on
07:03 

07:03 modis and multiple nasa products
07:05 

07:05 they also have some great webinars
07:07 

07:07 themselves so i recommend checking out
07:09 

07:09 this website for more information on
07:11 

07:11 modis and landsat imagery and products
07:14 

07:14 in addition to providing information
07:15 

07:15 about modis both eos disk and lpdac have
07:19 

07:19 many different data sets available for
07:21 

07:21 download
07:24 

07:24 there are many places to obtain modis
07:26 

07:26 products and a few of them are listed
07:27 

07:27 here
07:28 

07:28 there is echo reverb
07:31 

07:31 the modis land product subsets at the
07:33 

07:33 oakridge national
07:35 

07:35 lab dac
07:36 

07:36 there is the global land cover facility
07:39 

07:39 glovis and the fire information for
07:42 

07:42 resource management system or firms
07:46 

07:46 which delivers global modis hot spots
07:48 

07:48 and fire locations in near real time
07:53 

07:53 here are some additional places to find
07:55 

07:55 modis data
07:57 

07:57 and these provide more visualization
07:59 

07:59 tools
07:60 

07:60 first listed is worldview
08:02 

08:02 which is a tool that provides the
08:04 

08:04 capability to interactively browse and
08:07 

08:07 download global satellite imagery
08:09 

08:09 currently there are limited modis land
08:11 

08:11 products available you can find fires
08:13 

08:13 land surface temperature and snow cover
08:15 

08:15 on that website
08:18 

08:18 severe a joint nasa usaid capacity
08:21 

08:21 building program has a global
08:23 

08:23 visualization mapper that enables you to
08:26 

08:26 visualize modis and other data globally
08:30 

08:30 mrt web will be discussed next
08:37 

08:37 historically modis land product tiles
08:40 

08:40 have been distributed in a standard 10
08:42 

08:42 by 10 degree extent with a sinusoidal
08:45 

08:45 projection in hdf format there are now
08:48 

08:48 new modis data discovery and delivery
08:50 

08:50 services through mrt web
08:53 

08:53 mrt web enables you to visualize select
08:56 

08:56 mosaic
08:58 

08:58 subset reproject and reformat modis land
09:01 

09:01 products
09:05 

09:05 next i will talk about the visible
09:07 

09:07 infrared imaging radiometer suite or
09:10 

09:10 viirs
09:11 

09:11 like modis viirs is a multi-disciplinary
09:14 

09:14 sensor providing data for ocean land
09:17 

09:17 aerosol and
09:19 

09:19 cloud research and operational uses
09:23 

09:23 viirs was launched on board sumi npp on
09:26 

09:26 october 28
09:28 

09:28 2011. the spatial resolution is 375
09:32 

09:32 to 750 meters depending on the product
09:36 

09:36 with similar similar temporal resolution
09:38 

09:38 as modis
09:40 

09:40 therefore data are collected daily and
09:41 

09:41 there are 8 day 16 day monthly quarterly
09:45 

09:45 and yearly composites
09:46 

09:46 the sumi mpp satellite is also in the
09:49 

09:49 same orbital plane as the a train which
09:52 

09:52 includes satellites such as cloud set
09:54 

09:54 calypso terra modis
09:56 

09:56 but it's at a higher altitude
09:59 

09:59 it is a sun synchronous
10:01 

10:01 at
10:02 

10:02 824 meters with a local equator crossing
10:06 

10:06 time of approximately 13 30.
10:09 

10:09 there are 22 bands measured by viirs
10:11 

10:11 this includes bands in the visible
10:13 

10:13 spectrum such as red and blue as well as
10:16 

10:16 bands in the infrared the near infrared
10:19 

10:19 bands have been shown to be used
10:20 

10:20 particularly for applications
10:23 

10:23 such as wildfires
10:26 

10:26 there are a number of ways that modis
10:28 

10:28 and virus differ both in the inherent
10:30 

10:30 spectral and spatial characteristics of
10:32 

10:32 the sensors as well as in the algorithms
10:35 

10:35 being used to develop the products from
10:37 

10:37 the raw data and the distribution of the
10:40 

10:40 data
10:41 

10:41 nasa has been working closely with noaa
10:42 

10:42 to investigate and correct algorithm
10:45 

10:45 issues the lampeat at goddard has been
10:49 

10:49 reprocessing viirs data and making
10:51 

10:51 versions available in common formats
10:54 

10:54 very importantly with geo registration
10:59 

10:59 while viirs is similar to modis there
11:01 

11:01 are many differences in the spectral and
11:06 

11:06 and spatial characteristics as well as
11:08 

11:08 with the data processing and data
11:09 

11:09 delivery
11:10 

11:10 they have similar but not identical
11:12 

11:12 spectral characteristics with two of the
11:14 

11:14 bands and viirs as non-functional
11:17 

11:17 viirs has improved spatial resolution at
11:19 

11:19 the edge of the swath but has a lower
11:21 

11:21 resolution for the visible and infrared
11:23 

11:23 bands
11:25 

11:25 some of the standard products for veers
11:26 

11:26 are different than modis for example
11:29 

11:29 there is no top of canopy ndvi
11:31 

11:31 environmental data record
11:33 

11:33 there are differences in the algorithms
11:35 

11:35 used for cloud and aerosol filtering and
11:38 

11:38 in the way that raw data are processed
11:41 

11:41 data distribution is also different
11:43 

11:43 between the two
11:46 

11:46 there are a variety of land products
11:48 

11:48 produced in conjunction with noaa the
11:51 

11:51 most useful for land management is the
11:53 

11:53 active fires product
11:55 

11:55 albedo land surface temperature and the
11:58 

11:58 vegetation index
11:59 

11:59 the veers vegetation index environmental
12:02 

12:02 data record or the vi edr
12:06 

12:06 is a swath product generated every day
12:08 

12:08 at the spatial resolution of 375 meters
12:12 

12:12 over land
12:13 

12:13 the vi edr consists of two vi's
12:16 

12:16 the normalized difference vegetation
12:19 

12:19 index or ndvi
12:21 

12:21 derived from the top of atmosphere
12:23 

12:23 reflectances and the enhanced vegetation
12:26 

12:26 index or evi
12:28 

12:28 derived from atmospherically corrected
12:30 

12:30 top of canopy reflectances
12:35 

12:35 to to find the viirs products you can
12:38 

12:38 search the comprehensive large array
12:40 

12:40 data stewardship system this is hosted
12:43 

12:43 by noaa and provides access to many
12:45 

12:45 different data products in addition to
12:48 

12:48 viirs the website is shown here
12:53 

12:53 all viirs land products can also be
12:55 

12:55 acquired from the level 1 and
12:57 

12:57 atmospheric archive and distribution
12:59 

12:59 system or lads
13:01 

13:01 web
13:02 

13:02 lads web website it includes the most
13:05 

13:05 recent products generated by nasa in
13:07 

13:07 hdf4 format
13:12 

13:12 this is an example of how viirs top of
13:15 

13:15 canopy enhanced vegetation index has
13:18 

13:18 been used to document the changing
13:19 

13:19 vegetation conditions in california
13:22 

13:22 during one of the worst droughts in
13:23 

13:23 history
13:24 

13:24 the blue areas indicate areas of green
13:27 

13:27 vegetation
13:30 

13:30 such as these shown here
13:33 

13:33 while the dark brown areas are not
13:35 

13:35 vegetated
13:37 

13:37 you can see gradual decreases in the
13:40 

13:40 vegetation from 2013 to 2015.
13:46 

13:46 in 2015 the dark blue
13:49 

13:49 slash green color you see here indicates
13:53 

13:53 irrigated cropland
13:59 

13:59 next i'll be discussing the landsat
14:02 

14:02 satellites
14:05 

14:05 landsat was first launched in the early
14:06 

14:06 1970s the data from the early landsat
14:10 

14:10 sensors were called multi-spectral
14:12 

14:12 scanner imagery or mss
14:15 

14:15 those data have a lower spatial
14:17 

14:17 resolution than landsat data than the
14:19 

14:19 data you can obtain today
14:21 

14:21 the mss data are 79 meters and the
14:24 

14:24 current landsat data are mostly 30
14:26 

14:26 meters
14:27 

14:27 most recently landsat 8 was launched in
14:30 

14:30 february of 2014.
14:33 

14:33 we have this continuous data at fairly
14:35 

14:35 high resolution which is very useful for
14:37 

14:37 examining land surface changes over time
14:40 

14:40 just recently all of these data were
14:42 

14:42 made freely available by the usgs
14:45 

14:45 there is also a landsat global archive
14:47 

14:47 which we'll mention later
14:50 

14:50 this slide provides some information on
14:53 

14:53 the spectral characteristics of landsat
14:55 

14:55 landsat was designed primarily to detect
14:57 

14:57 visible and infrared light that's
14:59 

14:59 reflected from the earth's surface
15:01 

15:01 this graphic at the bottom shows you
15:03 

15:03 that these data are collected in
15:05 

15:05 different bands
15:08 

15:08 shown here
15:11 

15:11 and each of these bands represent a
15:13 

15:13 range of wavelengths for example bands 1
15:17 

15:17 and 2
15:18 

15:18 bands 1 2 and 3 detect data from the
15:20 

15:20 visible light range
15:23 

15:23 you can see in the graphic here that
15:25 

15:25 band 1 is primarily blue green but it's
15:28 

15:28 called blue
15:29 

15:29 band 2 is green yellow but it's called
15:32 

15:32 green and band 3 is red
15:34 

15:34 band 4 is the near infrared band 5 is
15:38 

15:38 the mid-infrared band 6 is a thermal
15:41 

15:41 band and band 7 is another mid-infrared
15:44 

15:44 band
15:45 

15:45 there's also a panchromatic band which
15:48 

15:48 has a higher resolution of 15 meters as
15:51 

15:51 opposed to the 30 meter multi-spectral
15:53 

15:53 bands the pan chromatic band works just
15:56 

15:56 like a black and white film
15:58 

15:58 instead of collecting visible colors
15:60 

15:60 separately it combines them into one
16:02 

16:02 channel
16:03 

16:03 because this sensor can see more light
16:05 

16:05 all at once it's the sharpest of all the
16:07 

16:07 bands
16:11 

16:11 this table provides each band the
16:14 

16:14 wavelength for each band and the spatial
16:16 

16:16 resolution of each band remember spatial
16:18 

16:18 resolution refers to the size of each
16:20 

16:20 pixel represented in square meters on
16:23 

16:23 the earth
16:24 

16:24 the bands are all the same with the
16:26 

16:26 exception of the thermal bands which are
16:28 

16:28 a little coarser resolution than the
16:30 

16:30 rest
16:33 

16:33 landsat 8 the sensor that was recently
16:35 

16:35 launched is a little different and has
16:37 

16:37 some additional bands that were not
16:39 

16:39 available in landsats four through seven
16:42 

16:42 there's an additional band one that is a
16:44 

16:44 coastal aerosol band that's designed to
16:46 

16:46 focus on near-shore environments and to
16:49 

16:49 penetrate the water a bit to and to look
16:51 

16:51 at aerosol particles in the air
16:54 

16:54 all the other bands are the same until
16:56 

16:56 you get to band 9 which is a serous band
16:58 

16:58 designed to look at clouds
16:60 

17:00 and then there are two thermal bands
17:02 

17:02 bands 10 and 11. the thermal bands are
17:05 

17:05 collected at 100 meters but are
17:07 

17:07 resampled to 30 meters to match the rest
17:10 

17:10 of the bands
17:14 

17:14 this figure shows the differences in
17:15 

17:15 band coverage between landsat 7 and
17:18 

17:18 landsat 8.
17:20 

17:20 it also provides information about the
17:22 

17:22 atmospheric window that allows the
17:24 

17:24 sensors to obtain data
17:26 

17:26 in those spectral ranges
17:28 

17:28 these windows represent the wavelengths
17:30 

17:30 at which electromagnetic radiation will
17:33 

17:33 penetrate the earth's atmosphere
17:35 

17:35 and thus can be observed by our sensors
17:38 

17:38 notice that while the bandwidths are
17:40 

17:40 similar for the two landsat sensors
17:42 

17:42 particularly in the visible range they
17:45 

17:45 are not identical therefore it's
17:47 

17:47 important to understand these
17:48 

17:48 differences when applying the same
17:50 

17:50 processes to each image from two
17:53 

17:53 different sensors
17:58 

17:58 there are multiple websites where you
17:59 

17:59 can find information on and obtain
18:01 

18:01 landsat images
18:03 

18:03 i think it is oftentimes times confusing
18:06 

18:06 because many of the sites function in
18:07 

18:07 the same way
18:09 

18:09 in general people tend to use the sites
18:11 

18:11 that they're most familiar with
18:12 

18:12 however it's probably a good idea to
18:14 

18:14 take a look at the various places where
18:16 

18:16 you can obtain these data and see what
18:18 

18:18 you prefer in regards to the way the
18:20 

18:20 data are visualized and how you can
18:22 

18:22 download the imagery
18:24 

18:24 here are a few examples of where you can
18:26 

18:26 obtain landsat imagery with the website
18:28 

18:28 links below
18:30 

18:30 first we have the landsat look viewer
18:32 

18:32 this is one site where you can only get
18:34 

18:34 landsat data it's it's also a nice site
18:37 

18:37 to look at the quality of the data
18:39 

18:39 glovis is a really quick and easy online
18:42 

18:42 search tool and has different kinds of
18:44 

18:44 data such as modis
18:46 

18:46 the global land cover facility has all
18:48 

18:48 of the landsat data as well as aster
18:50 

18:50 data
18:52 

18:52 the earth explorer is also easy to use
18:54 

18:54 to download different types of data in
18:56 

18:56 addition to landsat
18:58 

18:58 the nice thing about earth explorer is
18:59 

18:59 that you can use a shapefile or kml file
19:02 

19:02 to help locate your area of interest
19:07 

19:07 you can also obtain data from the web
19:09 

19:09 landsat data portal or weld that
19:12 

19:12 provides landsat data for 2003-2012
19:16 

19:16 for the continental u.s and alaska and
19:18 

19:18 globally for 2009 2010 and 2011.
19:24 

19:24 the weld data are terrain corrected and
19:26 

19:26 radiometrically calibrated so users
19:28 

19:28 don't have to convert the landsat
19:30 

19:30 digital numbers to reflectance
19:33 

19:33 the osgs also has been working on the
19:35 

19:35 landsat global archive consolidation
19:37 

19:37 and this figure on the right
19:40 

19:40 here
19:44 

19:44 shows you where there are more
19:47 

19:47 in red
19:48 

19:48 or less in blue landsat acquisitions
19:53 

19:53 over the over the scale of landsat's
19:56 

19:56 lifetime
19:57 

19:57 finally the global land survey data is
20:00 

20:00 not a data portal but it's a global
20:02 

20:02 collection of cloud cloud-free landsat
20:05 

20:05 images from 1975 to 2008
20:08 

20:08 there's also time series available from
20:10 

20:10 1975
20:12 

20:12 1990 2000 2005 and 2010
20:17 

20:17 that are useful primarily for change
20:19 

20:19 detection these data products can be
20:21 

20:21 acquired
20:22 

20:22 through some of the portals mentioned
20:24 

20:24 earlier
20:29 

20:29 i will now hand it over to cindy and she
20:31 

20:31 will discuss land cover mapping with
20:33 

20:33 satellite imagery
20:36 

20:36 hi everyone i'm cindy schmidt and i will
20:38 

20:38 be first discussing land cover mapping
20:41 

20:41 with satellite imagery
20:45 

20:45 the process of land cover mapping
20:47 

20:47 involves turning satellite data into
20:48 

20:48 thematic information about the region
20:51 

20:51 the primary method of doing this is
20:53 

20:53 called image classification
20:56 

20:56 on the left is a landsat image of lake
20:58 

20:58 tahoe and its surrounding forests
21:00 

21:00 however the landsat image cannot tell
21:03 

21:03 you whether the lake is actually water
21:05 

21:05 or the force is actually forest
21:07 

21:07 the classified image on the right
21:10 

21:10 shows how the pixel information in the
21:12 

21:12 satellite imagery can be transformed
21:14 

21:14 into land cover types
21:18 

21:18 in order to understand how image
21:20 

21:20 classification works we need to discuss
21:22 

21:22 the spectral signature of objects
21:25 

21:25 as you recall electromagnetic energy
21:27 

21:27 radiates from the sun in different
21:29 

21:29 wavelengths satellite sensors measure
21:32 

21:32 radiation that is either reflected or
21:34 

21:34 emitted from objects on the earth's
21:36 

21:36 surface
21:37 

21:37 those objects reflect radiation
21:39 

21:39 differently as shown in this graph
21:42 

21:42 in the graph the x-axis represents both
21:45 

21:45 wavelength short to long from left to
21:47 

21:47 right and the corresponding landsat
21:49 

21:49 bands
21:50 

21:50 and please note that these are landsat 4
21:53 

21:53 5 and
21:55 

21:55 7 and not landsat 8.
21:58 

21:58 the y-axis represents the amount of
22:00 

22:00 reflectance of radiation for different
22:02 

22:02 land cover types
22:04 

22:04 vegetation reflects both green and
22:06 

22:06 near-infrared wavelengths while soil
22:09 

22:09 reflects a little higher in the
22:10 

22:10 shortwave infrared wavelengths
22:13 

22:13 these are called spectral signatures
22:19 

22:19 on the left we see a graph of spectral
22:21 

22:21 signatures for soil vegetation and water
22:25 

22:25 you can also see the corresponding
22:27 

22:27 landsat bands to the wavelengths that
22:29 

22:29 are on the xx axis
22:31 

22:31 in order to understand how image
22:33 

22:33 classification works we need to look at
22:35 

22:35 the relationship between the spectral
22:37 

22:37 signatures and the bands in a little
22:39 

22:39 different way
22:40 

22:40 in the graph on the right we've plotted
22:42 

22:42 the band 3 the red web lengths against
22:45 

22:45 band 4
22:47 

22:47 near-infrared
22:49 

22:49 looking back at the graph on the left if
22:51 

22:51 we just look at water you will notice
22:54 

22:54 that the percent reflectance is low in
22:56 

22:56 both band 3 and band 4.
22:59 

22:59 if you plot that information on the
23:01 

23:01 graph on the right
23:02 

23:02 water will appear in the lower left hand
23:05 

23:05 corner low band 3 and low band 4. going
23:09 

23:09 back to the graph on the left if you
23:11 

23:11 look at vegetation you will notice that
23:13 

23:13 vegetation has low reflectance in band 3
23:16 

23:16 but high in band 4.
23:19 

23:19 translating that to the graph on the
23:20 

23:20 right means that vegetation belongs on
23:23 

23:23 the lower right hand side low band 3 but
23:27 

23:27 high band 4.
23:28 

23:28 lastly dry soil has slightly higher
23:31 

23:31 reflectance in band 4 than band 3
23:34 

23:34 but the values are in between water and
23:36 

23:36 vegetation
23:38 

23:38 you can see where soil falls in the
23:40 

23:40 graph on the right so now you can see
23:43 

23:43 that the three land cover types are in
23:45 

23:45 three very different locations on the
23:47 

23:47 graph
23:51 

23:51 image processing software can be used to
23:53 

23:53 separate out the different land cover
23:55 

23:55 types using this method
23:58 

23:58 all pixels that have similar reflectance
23:60 

23:60 characteristics to each of the land
24:02 

24:02 cover types will be labeled the same
24:05 

24:05 of course landsat imagery has more than
24:07 

24:07 just two bands
24:09 

24:09 so the software uses any number of bands
24:11 

24:11 that you choose
24:12 

24:12 you can also specify the number of land
24:14 

24:14 cover classes that are in your study
24:16 

24:16 area
24:18 

24:18 in this example there are only three
24:20 

24:20 land cover classes water vegetation and
24:22 

24:22 dry soil but in reality of course there
24:25 

24:25 are many more
24:26 

24:26 there are many ways of doing image
24:28 

24:28 classification but two common ones are
24:30 

24:30 called supervised and unsupervised
24:32 

24:32 classification we will not go into any
24:35 

24:35 detail about these methods but if you
24:37 

24:37 are interested i encourage you to read
24:38 

24:38 more about it or take an image
24:40 

24:40 processing class
24:44 

24:44 one of the most common questions we get
24:46 

24:46 is can you distinguish between different
24:48 

24:48 vegetation types the answer is it
24:51 

24:51 depends
24:52 

24:52 using a multi-spectral sensor like
24:54 

24:54 landsat green vegetation looks very
24:57 

24:57 similar and it is often very difficult
24:59 

24:59 to distinguish between different
25:01 

25:01 vegetation types however there are
25:03 

25:03 various methods that may help
25:06 

25:06 one is to use a hyperspectral imager
25:08 

25:08 such as avarice which uses an airborne
25:11 

25:11 platform
25:12 

25:12 hyperspectral imagery enables you to
25:14 

25:14 detect more subtle differences between
25:16 

25:16 vegetation types
25:18 

25:18 another common method is to use
25:20 

25:20 ancillary information such as elevation
25:23 

25:23 slope and aspect with landsat imagery to
25:26 

25:26 help distinguish vegetation types
25:29 

25:29 this method uses the assumption that
25:31 

25:31 some different vegetation types will
25:33 

25:33 grow in different regions for example
25:35 

25:35 some species of conifers only grow at
25:38 

25:38 high elevations and some only at lower
25:41 

25:41 elevations
25:43 

25:43 another very common method is to use the
25:45 

25:45 spectroradiometer in the field to
25:48 

25:48 collect specific information about the
25:50 

25:50 spectral reflectance of different
25:51 

25:51 vegetation types
25:53 

25:53 this is typically used with
25:54 

25:54 hyperspectral imagery to precisely
25:57 

25:57 identify spectral signatures
26:02 

26:02 next i will describe land cover products
26:04 

26:04 derived from satellite data that you can
26:06 

26:06 download
26:09 

26:09 land cover products for just the u.s
26:12 

26:12 include the national land cover database
26:15 

26:15 gap analysis data and landfire
26:18 

26:18 global products include the fao global
26:21 

26:21 land cover network and various force
26:24 

26:24 change products
26:25 

26:25 next i will be discussing these products
26:30 

26:30 the nlcd products include land cover
26:33 

26:33 type percent impervious surface and
26:36 

26:36 percent tree canopy cover at 30 meter
26:38 

26:38 spatial resolution
26:40 

26:40 the database is available for 1992 2001
26:44 

26:44 2006 and 2011 and is created using a 16
26:49 

26:49 class classification scheme
26:51 

26:51 the database is based primarily on
26:53 

26:53 landsat data along with other data
26:55 

26:55 sources such as topography census and
26:58 

26:58 agricultural statistics soil
27:01 

27:01 characteristics wetlands and other land
27:03 

27:03 cover maps the data are freely available
27:06 

27:06 at the website listed here
27:11 

27:11 the usgs gap analysis program has three
27:15 

27:15 primary goals
27:17 

27:17 one to identify conservation gaps that
27:19 

27:19 help common species common
27:22 

27:22 two to provide conservation information
27:24 

27:24 to the public so that informed resource
27:27 

27:27 management decisions can be made
27:29 

27:29 and three to facilitate the application
27:32 

27:32 of gaap data to specific resource
27:34 

27:34 management activities
27:36 

27:36 to do this gap maps the land cover of
27:39 

27:39 the u.s
27:40 

27:40 maps predicted distributions of
27:42 

27:42 vertebrate species maps the location
27:45 

27:45 ownership and stewardship of protected
27:47 

27:47 areas and documents the representation
27:50 

27:50 of vertebrate species and land cover
27:52 

27:52 types in areas managed for the long-term
27:54 

27:54 maintenance of biodiversity
27:57 

27:57 the land cover is mapped at 30 meters
27:59 

27:59 spatial resolution using landsat
28:01 

28:01 satellite imagery as well as other data
28:03 

28:03 sets such as
28:04 

28:04 digital elevation models
28:07 

28:07 soils geology stream and wetland
28:09 

28:09 location
28:11 

28:11 other data include point locations for
28:13 

28:13 rare plant communities and fire and tree
28:16 

28:16 harvest information
28:18 

28:18 the gap data can be found using the land
28:21 

28:21 cover data viewer found on the website
28:23 

28:23 listed here
28:28 

28:28 the landfire mission is to improve fire
28:31 

28:31 and natural resource management
28:33 

28:33 this program provides a national
28:35 

28:35 inventory of geospatial data vegetation
28:38 

28:38 composition and structure
28:40 

28:40 fire behavior and effects fuel
28:43 

28:43 loading models and fire regime
28:45 

28:45 conditions of the entire u.s from 2006
28:48 

28:48 to present
28:50 

28:50 data products are organized into groups
28:52 

28:52 which include disturbance vegetation
28:55 

28:55 fuel
28:56 

28:56 fire regime and topographic
28:59 

28:59 data products are delivered at a 30
29:01 

29:01 meter pixel resolution for landscape
29:04 

29:04 scale analysis
29:05 

29:05 the products are great for national and
29:07 

29:07 regional planning because they are
29:09 

29:09 updated every two years to reflect
29:11 

29:11 changes on the landscape over time
29:14 

29:14 you can find these data at the website
29:16 

29:16 listed here
29:20 

29:20 the food and agriculture organization
29:23 

29:23 has developed a global gland cover map
29:25 

29:25 using the best available national
29:27 

29:27 regional and or sub-natural national
29:30 

29:30 land cover databases
29:32 

29:32 they used a specialized system and
29:34 

29:34 fusion techniques to harmonize the
29:36 

29:36 various databases and developed a
29:38 

29:38 procedure to update the database when
29:40 

29:40 new data sets become available
29:43 

29:43 the database is comprised of 11 land
29:46 

29:46 cover layers
29:47 

29:47 the database is currently in beta
29:49 

29:49 release but can be downloaded from the
29:51 

29:51 website listed here
29:57 

29:57 the modis yearly land cover product
29:59 

29:59 incorporates five different
30:01 

30:01 classification schemes that describe
30:03 

30:03 land cover properties derived from
30:06 

30:06 observations spanning a year
30:08 

30:08 the primary classification scheme
30:10 

30:10 identifies 17 classes defined by the
30:13 

30:13 international geosphere biosphere
30:15 

30:15 program which includes 11 natural
30:18 

30:18 vegetation classes
30:20 

30:20 three developed land classes and three
30:22 

30:22 non-vegetated land classes
30:25 

30:25 the data have a spatial resolution of
30:27 

30:27 500 meters and can be downloaded from
30:29 

30:29 the eostis reverb website
30:36 

30:36 i will talk specifically about fire
30:38 

30:38 detection products
30:43 

30:43 the modis thermal anomalies and fire
30:46 

30:46 product provides snapshots of both
30:48 

30:48 active burning fires and burned areas
30:50 

30:50 globally
30:51 

30:51 modis's mid-infrared band allows the
30:54 

30:54 instrument to identify the locations of
30:56 

30:56 thermal anomalies thus active fires
30:60 

30:60 this product provides unique dimensions
31:02 

31:02 such as a fire mask and a fire pixel
31:05 

31:05 table for each fire pixel
31:07 

31:07 the fire pixel table characterizes 19
31:10 

31:10 attributes for fire pixels including
31:12 

31:12 maximum fire radiative power
31:18 

31:18 firms provides near real-time active
31:20 

31:20 fire mapping and historical data
31:22 

31:22 available for download you can get or
31:25 

31:25 visualize the data in various ways
31:27 

31:27 including email alerts download directly
31:30 

31:30 or visualize in web-based tools you can
31:33 

31:33 get more information on the firm's data
31:35 

31:35 from the website listed here
31:42 

31:42 this modis product detects the
31:44 

31:44 approximate date of burning and maps the
31:46 

31:46 spatial extent of recent fires by
31:49 

31:49 analyzing daily surface reflectance and
31:51 

31:51 using a model based change detection
31:53 

31:53 algorithm to locate rapid changes on the
31:56 

31:56 earth's surface
31:57 

31:57 this is a monthly gridded 500 meter
31:60 

31:60 product that you can acquire at the
32:02 

32:02 website listed here
32:04 

32:04 the image shows the extent of a fire
32:06 

32:06 that occurred in 2007 in georgia and
32:09 

32:09 florida
32:10 

32:10 the colors represent the different dates
32:12 

32:12 of burning between april and may 2007
32:18 

32:18 a relatively new product is the viirs
32:20 

32:20 active fire product it provides near
32:23 

32:23 real-time active fire locations
32:25 

32:25 currently at 700 meter or the m band
32:29 

32:29 with a beta version of a 350 meter or
32:32 

32:32 i-band product
32:34 

32:34 this product is developed using an
32:35 

32:35 algorithm that detects thermal hot spots
32:38 

32:38 on a daily basis
32:42 

32:42 the viirs data are also searchable on a
32:45 

32:45 user-friendly mapping interface and
32:47 

32:47 available for download as a geotiff
32:50 

32:50 ascii or kmz file
32:52 

32:52 you can access these data and visualize
32:54 

32:54 them as well at the website listed here
33:01 

33:01 next i will be discussing how to detect
33:04 

33:04 land cover change with satellite imagery
33:09 

33:09 detecting change of the earth's surface
33:11 

33:11 features is extremely important for
33:13 

33:13 understanding relationships and
33:15 

33:15 interactions between human and natural
33:17 

33:17 phenomena
33:19 

33:19 the questions that can be answered using
33:21 

33:21 remote sensing include where and when
33:23 

33:23 has change taken place
33:25 

33:25 what is the quantity of the change and
33:27 

33:27 what is the nature of the change and
33:30 

33:30 lastly what are the cycles and trends of
33:32 

33:32 the change over time
33:34 

33:34 these images show the growth of santiago
33:37 

33:37 chile between 1975 and 2013 from the
33:41 

33:41 landsat sensor
33:45 

33:45 these are just a few of the many
33:47 

33:47 applications of change detection using
33:49 

33:49 satellite imagery
33:50 

33:50 the images on the right show bark beetle
33:53 

33:53 infestation in colorado between 2005 and
33:56 

33:56 2011.
33:58 

33:58 in 2005 there was little to no
33:60 

34:00 infestation as shown by the green
34:02 

34:02 vegetation
34:03 

34:03 in 2011 the brown areas indicate the
34:06 

34:06 trees that had been killed due to the
34:08 

34:08 beetle infestation
34:13 

34:13 many change detection techniques using
34:15 

34:15 remotely sensed imagery have been
34:17 

34:17 developed and i will be describing these
34:19 

34:19 four of them to you
34:26 

34:26 one of the most basic methods for
34:28 

34:28 detecting change using satellite imagery
34:30 

34:30 is called heads-up digitizing
34:33 

34:33 in this method you display the imagery
34:35 

34:35 using gis or image processing
34:38 

34:38 image processing software and digitize a
34:41 

34:41 polygon around the areas of change
34:43 

34:43 in these images the santiago urban area
34:46 

34:46 was digitized for the two different
34:48 

34:48 years
34:49 

34:49 the size of these polygons can then be
34:51 

34:51 measured to quantify the amount of
34:53 

34:53 change that has occurred
34:58 

34:58 these traditional methods use the change
35:01 

35:01 in the pixel values to document change
35:04 

35:04 the image subtraction method works by
35:07 

35:07 simply taking a single band from two
35:09 

35:09 different dates of imagery and
35:10 

35:10 subtracting one from the other that
35:12 

35:12 results in a change image
35:14 

35:14 the change image consists of positive
35:17 

35:17 and negative values where changes
35:19 

35:19 occurred and zero values where no change
35:21 

35:21 has occurred
35:23 

35:23 image classification requires that both
35:25 

35:25 dates of image stacks consisting of
35:27 

35:27 multiple bands be classified first to
35:30 

35:30 identify land cover classes by pixel
35:33 

35:33 then using a pixel by pixel comparison
35:37 

35:37 change between land cover types can be
35:39 

35:39 detected
35:41 

35:41 for both these methods it is very
35:42 

35:42 important that the images are precisely
35:45 

35:45 registered to each other
35:47 

35:47 for both methods you need gis or image
35:49 

35:49 processing software you also need to
35:52 

35:52 know the area well enough to interpret
35:54 

35:54 the change because the software will not
35:55 

35:55 do that for you
35:60 

35:60 recent developments in change detection
36:02 

36:02 methods take advantage of the entire
36:05 

36:05 fully available landsat archive by using
36:07 

36:07 monthly or annual time series to look at
36:10 

36:10 changes or trends
36:11 

36:11 while in the previous
36:13 

36:13 previously described methods you would
36:15 

36:15 only use two image dates in this method
36:18 

36:18 you could use 20 or 30 image states
36:21 

36:21 this method allows the capture of short
36:24 

36:24 duration disturbance events as well as
36:26 

36:26 long-term disturbance trends
36:28 

36:28 this approach is founded on the
36:30 

36:30 recognition that change is not simply a
36:32 

36:32 comparison between conditions at two
36:34 

36:34 points in time but rather a continual
36:38 

36:38 process operating at both fast and slow
36:40 

36:40 rates on the landscapes
36:43 

36:43 there are several different algorithms
36:45 

36:45 emerging and this is an example of land
36:47 

36:47 trender developed by kennedy kennedy at
36:50 

36:50 all at oregon state university
36:53 

36:53 the results of this algorithm include
36:56 

36:56 the magnitude of change that identifies
36:58 

36:58 the percent of tree cover loss
37:00 

37:00 the duration of the disturbance and the
37:02 

37:02 year of onset of the disturbance
37:08 

37:08 next i will be discussing the use of
37:10 

37:10 remote sensing for deriving vegetation
37:12 

37:12 indices and phenology
37:19 

37:19 normalized difference vegetation index
37:21 

37:21 or ndvi is one of the most commonly used
37:24 

37:24 vegetation indices
37:26 

37:26 it is based on the relationship between
37:29 

37:29 the red and the year infrared
37:30 

37:30 wavelengths
37:32 

37:32 when sunlight strikes plant leaves the
37:34 

37:34 chlorophyll in those leaves strongly
37:36 

37:36 absorbs visible light primarily blue and
37:38 

37:38 red
37:39 

37:39 and the cell
37:41 

37:41 structure leaves reflect green
37:43 

37:43 and strongly reflects near infrared
37:45 

37:45 light
37:46 

37:46 this is portrayed in this graphic on the
37:49 

37:49 top as well as the graph below it
37:52 

37:52 the two key wavelengths for ndvi are the
37:55 

37:55 red and near-infrared
37:57 

37:57 in this graph you can see where the red
37:59 

37:59 is being absorbed and has low
38:01 

38:01 reflectance and the near infrared is
38:03 

38:03 highly reflective
38:08 

38:08 as i just mentioned ndvi is the
38:10 

38:10 relationship between the red and the
38:12 

38:12 near infrared wavelengths the actual
38:14 

38:14 formula is specified here
38:17 

38:17 it's the near infrared minus the red
38:19 

38:19 divided by the near infrared plus the
38:22 

38:22 red
38:23 

38:23 the values of ndvi for an individual
38:26 

38:26 pixel range from -1 to 1.
38:29 

38:29 any pixel between -1 and 0 means no
38:32 

38:32 vegetation and pixels close to one
38:35 

38:35 indicates the highest possible density
38:37 

38:37 of green leaves
38:39 

38:39 the picture on the right shows that
38:41 

38:41 healthy green vegetation absorbs most of
38:43 

38:43 the visible light where only eight
38:45 

38:45 percent is reflected
38:47 

38:47 and reflects a large portion of the
38:49 

38:49 near-infrared light where fifty percent
38:51 

38:51 is reflected
38:53 

38:53 unhealthy sparse or senescing vegetation
38:56 

38:56 reflects more visible light in this case
38:59 

38:59 we're
38:60 

38:60 is reflected and less near infrared
39:02 

39:02 light where 40 is reflected
39:05 

39:05 you can see the difference in the
39:07 

39:07 resulting ndvi values below the image
39:10 

39:10 the green vegetation has a value closer
39:12 

39:12 to 1 while the brown vegetation has a
39:15 

39:15 value closer to zero
39:20 

39:20 this ndvi image was derived from landsat
39:23 

39:23 satellite data and shows vegetation
39:25 

39:25 density across the greater panama canal
39:28 

39:28 watershed
39:30 

39:30 in this image the darker the green area
39:32 

39:32 the more green vegetation is present
39:35 

39:35 the rainforests of panama stand out
39:37 

39:37 clearly as the dark green swathes on
39:40 

39:40 either side of the panama canal these
39:42 

39:42 forests harbor a very diverse community
39:44 

39:44 of plants and animals and also help
39:47 

39:47 reduce erosion and sedimentation to the
39:49 

39:49 canal
39:50 

39:50 the light green and brown colors are
39:52 

39:52 more sparsely vegetated pastures and
39:54 

39:54 croplands
39:55 

39:55 the white area shows areas of human
39:58 

39:58 development
40:02 

40:02 plant phonology is the annual dynamic of
40:05 

40:05 vegetation greenness and can be tracked
40:07 

40:07 using vegetation
40:10 

40:10 in the graph on the top you can see the
40:12 

40:12 progression of vegetation dynamics as
40:14 

40:14 seasons change
40:16 

40:16 in north america early in the year which
40:18 

40:18 is winter
40:19 

40:19 there are little to no leaves on the
40:21 

40:21 trees resulting in low ndvi values when
40:24 

40:24 spring arrives the vegetation greens up
40:27 

40:27 and ndvi increases until it peaks in the
40:30 

40:30 summer
40:30 

40:30 then as vegetation senescences and lose
40:33 

40:33 their leaves the ndvi declines
40:37 

40:37 the image below shows the difference in
40:39 

40:39 greenness in the winter on the left
40:41 

40:41 versus the summer on the right in north
40:43 

40:43 america
40:48 

40:48 ndvi can also be used in relation to
40:50 

40:50 drought monitoring and in conjunction
40:52 

40:52 with a variety of other data products
40:55 

40:55 this is an example of an ndvi anomaly
40:58 

40:58 map
40:59 

40:59 from september 2002 for the african
41:02 

41:02 continent
41:03 

41:03 the brown areas represent negative
41:06 

41:06 vegetation anomalies and the green areas
41:08 

41:08 represent positive vegetation anomalies
41:11 

41:11 using time series of data anomaly maps
41:14 

41:14 can be generated to show differences in
41:17 

41:17 vegetation densities
41:23 

41:23 the enhanced vegetation index or evi is
41:26 

41:26 another vegetation index available from
41:29 

41:29 the modis sensor
41:30 

41:30 the ndvi is more chlorophyll sensitive
41:33 

41:33 while the evi is more responsible to
41:36 

41:36 canopy structural variations including
41:38 

41:38 leaf area index and canopy type
41:41 

41:41 one problem with the ndvi is that it
41:43 

41:43 saturates over high biomass areas the
41:46 

41:46 evi was developed to optimize the
41:48 

41:48 vegetation signal with improved
41:50 

41:50 sensitivity in high biomass regions and
41:53 

41:53 a reduction in atmospheric influences
41:58 

41:58 both ndvi and evi from modis are
42:01 

42:01 available in several different temporal
42:03 

42:03 composites ranging from 16 days to
42:05 

42:05 monthly and spatial resolutions ranging
42:08 

42:08 from 250 meters to approximately 5.5
42:11 

42:11 kilometers
42:13 

42:13 the names of the products are listed on
42:15 

42:15 the right you can acquire these data
42:17 

42:17 from the websites listed here
42:23 

42:23 here is an example of how ndvi and evi
42:26 

42:26 are being used
42:28 

42:28 in collaboration with the desert locust
42:30 

42:30 information service the international
42:32 

42:32 research institute for climate and
42:34 

42:34 society is developing products to
42:36 

42:36 estimate ecological conditions and
42:39 

42:39 rainfall events in the desert locust
42:41 

42:41 recession area
42:43 

42:43 they are focusing on locus because adult
42:45 

42:45 desert locusts can form swarms that can
42:48 

42:48 fly or be carried by wind over great
42:50 

42:50 distances
42:51 

42:51 these swarms can wipe out crops located
42:54 

42:54 hundreds of kilometers from their places
42:56 

42:56 of origin and create starvation
42:58 

42:58 conditions in regions that are already
43:00 

43:00 financially challenged
43:02 

43:02 the products include a modis analysis
43:05 

43:05 tool where you can visualize both ndvi
43:08 

43:08 and evi over time to observe changes in
43:10 

43:10 greenness
43:12 

43:12 you can zoom into a particular area and
43:14 

43:14 then obtain a graph of the change of
43:16 

43:16 ndvi or evi over time
43:22 

43:22 this concludes our second session on the
43:24 

43:24 fundamentals of remote sensing
43:26 

43:26 we want to thank you for listening to
43:28 

43:28 our webinar and please feel free to
43:30 

43:30 contact us if you have any questions or
43:32 

43:32 comments
43:34 

43:34 for land management and wildfire
43:36 

43:36 training inquiries please contact me
43:38 

43:38 cindy schmidt or amber cuss for water
43:41 

43:41 resource inquiries please contact either
43:43 

43:43 amita mehta or brock blevins and for
43:46 

43:46 general rset inquiries you can contact
43:48 

43:48 anna paretos
43:49 

43:49 for information about all our webinars
43:52 

43:52 and other trainings please go to our
43:54 

43:54 website listed at the bottom of this
43:56 

43:56 page
43:58 

43:58 thanks again for your participation and
44:01 

44:01 goodbye until next time