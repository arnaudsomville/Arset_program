# Black Marble Background, Use, and Applications, Part 1/1

`https://www.youtube.com/watch?v=KSxlhBLOAc4` · id 24 · 2:26:22 · module 60 — Introduction to NASA's "Black Marble" Night Lights Data

[00:00] hello everyone good morning good evening thank you for joining us today from all of your respective places in the world
[00:09] today we're going to introduce the beta v and p 46 a2 product which is nasa's first black marble
[00:17] product product we're going to provide a training webinar about how to use black marble data data in your own work
[00:26] this is a one session webinar hosted today december 3rd the presentation will last around 60 minutes with a follow-up question and
[00:36] answer session lasting 20 minutes following the presentation presentation you can find all of the course material for this training
[00:45] the webinar the powerpoint presentation and a homework assignment on the arset website page which is shown in the blue link
[00:55] there is one homework assignment due at the end of the training as mentioned you can access all of the
[01:02] material for the homework assignment including instructions a google form and a python script at the website above
[01:12] i'm eleanor stokes i'm a scientist at usra's earth from space institute and i'm the science pi of nasa's black
[01:21] marble product suite i'll be presenting with ron jay stressa who is a scientific programmer and analysis expert on the black marble team
[01:32] at nasa goddard space flight center the presentation today is divided into three parts in the first section i'm going to walk
[01:42] you through some of the basics and background background of nighttime remote sensing and discuss generally how black marble
[01:50] is different from other nighttime lights data sets that are out there and available available and then rondae stressa is going to dive
[02:00] into the specifics of how the black marble algorithm works where you can download the data and how to use some of the quality flags
[02:09] associated with the product then i'm going to zoom back out and talk to you about three different
[02:17] research applications where our team has already used black marble data extensively extensively ron jay will end the webinar with an
[02:26] introduction to the homework which will give you a chance to get your hands dirty downloading plotting and
[02:32] interpreting the data for yourself with a python tool we've created for our users users the learning objectives for today's
[02:41] training are the following after participating in this training you should know more about the basics of nighttime remote sensing
[02:50] including which light sources are captured by night sensors what are the key differences between existing night lights products including
[03:00] black marble and dmsp and what is corrected for in the black marble algorithm you will also have the information
[03:10] necessary to acquire and use black marble data we will walk you through how to download black marble images from lads
[03:19] and talk about the different band layers in the black marble product and what each layer means we will also show you how to consider
[03:27] quality assessment indicators when using black marble and how to process a black marble time series finally we'll give you an overview of
[03:38] some of the ways black marble data is being applied in three areas of research to map urban areas and track
[03:46] urbanization urbanization to monitor disasters and to give us new information about covid19 covid19 so now for an overview of some of the
[03:56] basics and background information useful to know when you're doing night time remote sensing daytime satellite measurements have been
[04:07] a staple of earth observation since the very first environmental satellite platform in the 1960s but at night for many years optical
[04:18] sensors were limited to the thermal range of the light spectrum with relatively poor content in the visible range
[04:27] visible light at night when the moon is out out is much fainter than visible light during the day
[04:34] typically five to six orders of magnitude fainter than a daylit scene so the sensors on night satellites have
[04:42] to be much more sensitive than daytime sensors so what can we study with nighttime remote sensing when the moon is out night sensors can
[04:54] detect the reflectance of light off of snow cover smoke smoke airborne dust sea ice and land surface
[05:02] features features nighttime sensors can also detect cloud cover under a full or partial moon in fact fact the nighttime satellite sensors that
[05:13] exist and that we'll be talking about in this presentation were designed to image clouds supporting short-term weather prediction
[05:24] is the primary purpose of nighttime sensors sensors the moon is earth's main natural source of light at night
[05:33] but it is a mistake to think the night without moonlight is truly dark there are several other sources of light
[05:41] at night some natural and many human created and we can capture these sources with nighttime optical sensors especially
[05:50] well well when moonlight isn't present for example in the absence of moonlight nighttime sensors can better capture human-made
[06:01] sources of light like city lights from streets and buildings or gas flares or brightly lit fishing boats
[06:10] the sensors can also image fires especially forest fires like those we've recently had in australia and in the
[06:18] western united states the sensors can capture natural lava flows and lightning in the high latitudes aurora can be
[06:28] monitored in the polar regions and bioluminescence over the oceans even night glow which is the faint emission of light
[06:38] from the chemical reactions in earth's atmosphere atmosphere can be detected if the satellite sensor is sensitive enough
[06:47] enough because of the variety of light sources nighttime light remote sensing has been widely used in many fields
[06:54] ranging from human geography demography economics sociology to fishery ecology light pollution and fire science but nighttime remote sensing is
[07:08] fundamentally different from daytime remote sensing primarily because the sources of light are different in the daytime the sun is the only source of visible
[07:20] light light the sun's light reflects off the earth's surface and is captured by a satellite sensor overpassing above
[07:29] for decades scientists have studied and modeled how sunlight is reflected and scattered when it hits the earth
[07:37] and they've characterized the surface properties of different land covers according to how land changes the angular direction and the intensity of
[07:47] reflected and scattered sunlight in the night the sun is no longer directly lighting the earth instead instead sunlight is first reflected off the moon
[08:00] the moon is a highly variable body in and of itself with its reflectance changing changing based on both the time-varying sun-earth
[08:09] moon geometry as well as its lunar phase this means that the irradiance spectrum from the moon that then reflects off the earth's
[08:19] surface surface is dynamic for each date and time it may differ in addition when the satellite captures the light
[08:29] reflected off the earth's surface it not only is capturing moonlight shown in yellow but also artificial light emissions
[08:39] from urban areas boats flares etc shown here in red if we care about questions like how cities are changing over time
[08:50] we have to first untangle the artificial light from the moonlight it's important when you're doing nighttime remote sensing to keep in mind
[09:00] the entire path of light from emission to reflectance to when it's finally captured by the satellite sensor
[09:09] sensor specifically the fact that there are multiple light sources the sensor captures moonlight light directly emitted by other light
[09:20] sources like city lights from buildings and traffic and street lights as well as light scattered off the
[09:27] ground ground so this is especially true if the ground is reflective like when it is covered with snow
[09:36] snow can increase the light reflectance of both the moon and the other anthropogenic light sources during winter months
[09:46] nighttime radiance can also fluctuate depending on the view angle of the satellite itself resulting in uncertainties in the time
[09:55] series record variations in the structure of the urban landscape like whether it has tall buildings or short buildings and other
[10:04] land features like street trees can block the light emitted and reflected reflected the degree to which light is captured
[10:12] and blocked can change depending on the view angle of the satellite and also on the season for example when street trees have
[10:21] leaves they occlude more light in the diagram in this slide we show how the view angle of the satellite when at
[10:31] nader looking straight down into the street canyon can capture different lights than when off neater at nader it captures lights from street
[10:42] lamps and traffic and roofs whereas off nader view angles may capture more indoor building lights and billboard lights
[10:52] the variations between view angle images is more prominent in city centers with tall buildings monthly or annual composites
[11:01] that use all the available nightlight observations observations can neutralize the view angle variation but not without losing the dense
[11:11] temporal record needed for quantitative applications applications especially things like disaster response therefore it's important to consider the
[11:20] sensor view angle if you're comparing data from two different days or you're generating a longer time series
[11:29] series now i want to give you a brief overview of three different non-commercial nighttime light sensors that are
[11:38] available so that you can understand the differences between existing nighttime lights products first first we have images of the earth at night
[11:47] which are taken by astronauts onboard the international space station the astronauts go into a cupola which is
[11:56] a glass observation dome with seven windows attached to the space station you can see an inside picture of the
[12:04] cupola cupola on your right the astronaut inside is using a camera to look down at a city below
[12:13] from the cupola these astronauts use digital cameras to shoot pictures at night as they fly above the earth
[12:21] the images that they capture with these cameras have three spectral bands a red a green and a blue channel
[12:31] like most digital camera images a long exposure time is needed to get a good shot so one major challenge has been to
[12:41] develop ways to keep the camera steadily focused on one spot while the international space station drifts in orbit
[12:51] in 2012 an instrument called the night pod was added to the international space station station the night pod electronically adjusts the
[13:02] camera during operation to keep the desired target steady in the camera's field of view for several seconds
[13:10] seconds so the quality of images after the night pod was installed are greatly improved and can achieve at
[13:17] best best 10 meters resolution it's important to note that the iss images are just photos not scientific data
[13:29] they lack geo-referencing so it can be difficult to find images over a particular place and to use those images with other
[13:38] geographic data also the sensors are not radiometers the cameras used to shoot the images have changed through the years
[13:48] and there is no consistency in the images captured across space or time there are big gaps in coverage with
[13:58] parts of the earth that have never been imaged by iss photography at night and the images are not taken
[14:05] consistently consistently at any interval over time still still the international space station photography photography is one of the highest spatial resolution
[14:17] products that we have of urban nightlights nightlights and it's also the only characterization of the different colors of lights at
[14:25] night night to browse iss imagery you can visit the gateway to astronaut photography of earth at the link provided on this slide
[14:38] there you will find both daytime and nighttime images taken by the astronauts in addition a citizen science research
[14:47] project project has used crowdsourcing to try to identify and geotag iss night photographs you can help with that effort and use
[14:58] the geotagged data by visiting www.citiesatnight.org here are two examples of iss nighttime images images both of which focus on italy
[15:16] on the left is rome captured on april 8 2015 2015 with a nikon digital camera stabilized by the night pod instrument
[15:27] you can see the different colors of light that make up different parts of the city the radial pattern of major highways
[15:35] leading to the center of the city is one of the main patterns revealed by the lights lights you can also see that places in the
[15:44] image like farms and nature reserves protected woodlands and even the ocean which is in the lower left part of the image
[15:54] all show up as dark in nighttime images the picture on the right shows italy in an off-nader view
[16:05] taken in october of 2014 with the same camera camera from this view we can even see the night glow of the
[16:13] earth's atmosphere as well as the solar panels from the international space station which are blocking the view on the right side of
[16:22] the image the second night lights data set is the defense meteorological satellite program's operational line scan system
[16:34] or dmsp ols ols the defense meteorological satellite program was started in the mid-1960s as the meteorological program of the u.s
[16:48] department of defense the aim of the program was to collect global cloud cover data day and night
[16:57] that was visible using moonlight as the illumination source the era of global satellite observation of electric lighting
[17:07] started with dmst ols in 1976 a series of 19 ols instruments have been flown and data collection continues to the present in
[17:21] 2020 2020 however the overpass times of each of these sensors varies with some satellites in a dawn dusk orbit and
[17:32] others in day night orbits only the day night satellites provide nighttime data in sufficient quantities to produce global nighttime lights
[17:42] products products while dmsp data has been available since 1972 1972 the remote sensing community rarely used it until 1992.
[17:53] this is mostly because until 1992 dmsp ols images were written to film and were not available in digital form
[18:04] since 1992 dmsp ols's long-term time series has been used to monitor artificial lights from space and study
[18:14] relationships between human activity and socioeconomic variables this is an example of a dmsp ols image showing the delhi metropolitan area
[18:27] the image was acquired in november of 2012. 2012. as you can see the spatial resolution is coarse 2.7 kilometers per pixel
[18:37] the radiometric resolution is also coarse coarse which makes the sensor saturate inside urban areas dmsp is not able to make out light
[18:48] variations within urban areas because of this saturation problem dmsp is also disadvantaged by having no on-board calibration which is the basis
[19:00] for deriving a reliable remote sensing record over time without onboard calibration the sensor's sensitivity can shift making the time
[19:11] series inconsistent this shift can be at least partially corrected so that the time series is calibrated after the fact through
[19:21] regionally specific mathematical models but the true radiance is not known in general dmsp is a good choice when
[19:31] looking at long-term changes over decades decades in fact it's our only data source that can do that
[19:38] but it's a less good choice when looking at more recent nighttime light dynamics after 2012. finally we have a sensor
[19:51] that was launched recently in 2012 which represents the next generation in nighttime light sensors the pan chromatic day night band on the
[20:02] visible infrared imaging radiometer suite or viirs is ultra sensitive in low light conditions conditions and allows us to observe nighttime
[20:13] lights with better spatial and temporal resolutions compared to previously provided nighttime lights by the defense meteorological satellite program
[20:25] the sensor is supported through a joint partnership with nasa and noaa and is situated on board both the suomi national polar
[20:36] orbiting partnership which is suomi npp and the joint polar satellite system which is jpss suomi npp and jpss
[20:49] orbit the earth in 102 minutes so the sensors on board those satellites can provide global coverage of the earth
[20:58] at 14 orbits per day at an orbital altitude of 824 kilometers so for the day night band we get daily
[21:08] data data captured around 1 30 in the morning local time and we get total coverage of the earth
[21:16] the viirs day night band presents a significant improvement over the dmsp ols sensor it has a higher spatial resolution
[21:27] of 750 meters instead of two point seven kilometers kilometers for the dmsp ols the veers danai band is sensitive to
[21:38] lower light levels than the dmsp was so smaller settlements and informal settlements can be detected it also has a 13 to 14 bit radiometric
[21:50] quantization quantization meaning it is 256 times more sensitive to radiometric differences in night lights than dmsp this makes viirs much better at
[22:04] characterizing the heterogeneity in night lights levels within and across urban urban areas beer's data does not saturate in
[22:14] urban areas and has very little blooming or overglow effect viirs also has onboard radiometric calibration calibration which allows the time series to be
[22:25] corrected so it is stable over time finally finally viirs night lights data is open and available with daily images provided for
[22:37] free from lads for dmsp only monthly composites were openly available available this slide compares the spectral response of the three sensors i have
[22:50] mentioned mentioned with the most popular spectra of anthropogenic light sources from top to bottom we have the spectral response of the
[23:01] nikon d3 cameras which are those used by the astronauts at the international space station second from the top shows a typical
[23:11] spectra of a metal halide lamp which is popular in architectural lights in the middle is the emission spectra of a high
[23:21] pressure sodium lamp popular until recently in street lighting lighting the second from the bottom shows four led spectra a 5000 kelvin blue led
[23:35] a 4000 kelvin cyan led a 2700 kelvin gray led and pc amber leds led lights are now the most popular
[23:48] choice for street lighting at the bottom we show the representative spectral response of dmsp ols in black
[23:58] and suomi npp viirs day night band in blue blue as shown the iss cameras might be much more sensitive to a 5000
[24:09] kelvin led bulb than the vr's day night band in contrast viirs and dmsp would be more sensitive to light emitted from a high
[24:21] pressure sodium lamp than the iss cameras would be their different spectral ranges would make the responses of different lamps
[24:30] more or less dominant this slide gives a visual comparison between dmsp ols and vr's day night band with both images
[24:43] showing the metropolitan area of delhi the two images were both captured in november of 2012. when you compare the two
[24:54] the spatial and radiometric resolution improvements of viirs dmv over dmsp ols are readily apparent veer's day night band captures light
[25:06] variations inside the center of delhi and its southern neighbor jaipur whereas dmsp saturates both urban centers centers veers day night band also captures the
[25:18] many tiny settlements to the west of delhi delhi whereas many of these settlements are obscured or blurred or even missed
[25:27] altogether altogether in dmsp ols there are two nighttime lights product series based on the data from the vr's
[25:37] day night band one is produced by nasa and one is produced by noaa the nasa products are called the black
[25:46] marble product suite and they'll be primarily what we talk about today they consist of a level one top of
[25:54] atmosphere reflectance which is the product called vmp-46a1 they also consist of a beta level 3 brdf corrected nighttime lights product
[26:08] as well as a gap-filled version of the level 3 product these are called vmp-46a2 all of these products are available via
[26:19] lads lads nasa's land atmosphere archive and distribution system for science research and long-term analysis analysis the level 3 product is available on a
[26:31] daily basis for the entire suomi npp time series from 2012 to present it is processed within three to five
[26:41] hours after the images are acquired by the sensor and is routed through nasa's lance system so that it can be used in
[26:49] disaster and rapid response applications there are several differences between nasa's black marble level 3 product and noaa's viirs nighttime lights
[27:00] product product the first is its frequency black marble data is available on a daily basis with monthly and annual products planned
[27:10] for the future noaa's product is only available on an annual or monthly composite in addition nasa's black marble corrects
[27:21] for moonlight removing the lunar reflectance from all daily scenes noah's product instead uses only moon-free nights to create its composite
[27:34] the black marble product also corrects for snow and atmospheric effects so that the daily time series can be
[27:42] more stable black marble does not remove ephemeral lights since these light sources are of interest to many fields of research
[27:53] it is important to note that the beta level 3 black marble product focuses only on land so questions about fishing boats
[28:01] bioluminescence or other ocean phenomena would need to use the nasa level 1 product or the noaa viirs products
[28:11] both the nasa and noaa products are cloud free and stray light corrected the suomi npp viirs linear grid
[28:22] is a longitude latitude based grid that consists of 460 460 non-overlapping land tiles which measure approximately 10 degrees
[28:34] by 10 degrees you must use this grid to find the horizontal and vertical grid coordinates of the tiles you need for your study or
[28:43] application application the tiles highlighted in red show examples displaying the horizontal and vertical ids for the cities of
[28:53] london and beijing london has a horizontal tile of 18 and a vertical tile of three you can download this spatial layer for
[29:05] the tile grid boundary as a shapefile from the provided link at the bottom of this slide the tile numbers are attributes in the
[29:16] shapefiles database file you'll need this in order to find the names of the tiles that you need
[29:25] in this slide we show examples of the three nasa black marble products all three images show tile h29vo5
[29:37] which includes the city of beijing china and surrounding areas the image was acquired on julian day 63
[29:46] in 2020 which is march 3rd of 2020 on that night the moon illumination percentage was about 42 percent
[29:58] on the left you see the vnp 46a1 product the top of atmosphere product it gives us the raw uncorrected
[30:08] top of atmosphere nighttime lights we can see various contaminations in this image such as blurry lights due to
[30:17] thin clouds which if not corrected or masked out could lead to a false reading of a decrease in nighttime lights in those
[30:26] areas areas the middle image shows the vnp 46a2 daily product the daily brdf corrected nighttime lights lights as you can see all of the cloud
[30:41] contaminated pixels in the top of atmosphere image are masked out and shown in black in this image lunar contributions have
[30:50] also been removed the atmospheric effects have been corrected corrected the third image to the right shows the
[31:00] vnp 46a2 gap filled product in this iteration the masked contaminated pixels are filled with the latest high quality observation that
[31:13] occurred in previous days the previous gaps in the vnp 46a2 daily product product are now completed a second example shows tile h18vo3
[31:29] which covers part of london and the coast of the united kingdom as in the previous slide you can see how
[31:37] clouds are identified and removed and gap filled in addition if you compare the top of atmosphere product on the left
[31:47] with the gap filled product on the right you can see that the moonlight contamination has been corrected
[31:55] you can see this because the background unlit areas appear darker in the gap filled image this is especially apparent in the
[32:04] coastal region at the bottom of the image the black marble product went through a rigorous quality assessment process
[32:16] the sensitivity of residual errors and extraneous artifacts in the nighttime light retrievals was explicitly assessed at a native pixel scale to gauge the
[32:30] product's performance in this slide we show three tests that were used to assess the product quality the tests addressed the following three
[32:41] questions questions what fraction of the variation of the pixel based nighttime lights is explained by lunar variations
[32:52] what fraction of the variation in the pixel based nighttime lights is explained by changes in snow cover
[32:59] what fraction of the variation in the pixel based nighttime lights is explained by seasonal changes in the
[33:05] tree canopy foliage if you can remember all three of these effects the moon changes in snow cover and changes in
[33:14] tree canopy affect the path of lights from the source of emission to the satellite sensor to answer these questions we look at the
[33:25] pearson correlation coefficient between black marble nighttime lights over the past five years and a corresponding time series of the artifact variables like
[33:37] lunar phase or snow presence we employed a random stratified sample of 72 000 individual top of atmosphere
[33:48] and vmp-46 a2 grid cells and those random stratified sample of pixels represent a diverse range of urban
[33:57] covers covers surface conditions and latitudinal gradients gradients for the lunar test we also used the global urban footprint product and urban
[34:09] land cover product from the german space agency agency this product ensured that the stratified sample was spatially representative of
[34:18] different stages of urban growth from sparse rural to densely built up pixels pixels so look at these two figures on the left
[34:28] the two line plots the line plot shows the r-squared correlation between nighttime lights and lunar phase as a function of the percent urban area
[34:42] and as a percent of snow cover in both graphs the top of atmosphere is shown in red
[34:49] and the nasa black marble vnp 46a2 product product is shown in blue the urban plot on the left demonstrates
[34:58] that the lunar effect can be reduced down to an r squared coefficient of of .37 .37 across low density urban pixels
[35:09] in the range of 60 urban cover and then if you move up to even higher density urban pixels like an 80 or 100
[35:19] urban area the r squared falls down even lower below 10 percent or 0.10 this indicates that there is not a
[35:31] strong correlation between the black marble nighttime lights product and the lunar phase for all sorts of different urban covers
[35:42] the middle figure shows the r-squared correlation between black marble and moonlight moonlight resulting from moon reflected snow
[35:51] surfaces surfaces the dependence of the pixel-based values to lunar effects remained well below 0.3 r-squared coefficient for all different levels of snow
[36:04] presence presence this is a substantial enhancement relative to the top of atmosphere data in the right figure we showed the
[36:14] effects of seasonal variations in ndvi on nighttime lights seasonal increases in canopy level foliage during the summer months
[36:25] do not affect the trend in the vmp 46a2 nighttime lights time series record the refinement over the top of
[36:36] atmosphere series is illustrated in the figure where the blue points are not commonly found inside the black circle
[36:44] where increases in the magnitude of nighttime lights during winter tracks corresponding decreases in the foliage during winter months
[36:54] because there are less blue dots in the black circle that indicates that this effect has at least been partially
[37:00] corrected corrected the seasonal effect was found to be quite pronounced across temperate regions like the us europe and asia as
[37:09] well as in west africa and south africa this suggests that seasonal variations in nighttime lights are likely to be
[37:18] more pervasive than has been originally thought it's something to keep in mind especially when you're using the top of
[37:26] atmosphere product in addition to the previous quality assessment tests to enable quantitative uses of the nighttime lights time series
[37:38] it's important to first establish the robustness of the algorithm with appropriate detection limits that are globally applicable and
[37:49] temporally consistent this is particularly true when using nighttime lights to characterize abrupt short-term changes like when there are power outages
[38:00] or to quantify low-lit nighttime lights across areas of concentrated energy poverty poverty the tests shown on this slide
[38:11] assess variations in low lit nighttime light emissions we test how daily variations in aerosol optical depth under varying view illumination
[38:23] conditions conditions influence nighttime light's radiance we also test how daily variations in surface albedo under varying view
[38:33] illumination conditions influence nighttime lights radiance in the top two images on the left daily veers top of atmosphere and black marble
[38:45] scenes are shown in red and blue for two tiles over western india and eastern mediterranean coast exhibiting near to full moon conditions
[38:59] the plots on the right show the nighttime lights radiance for various combinations of view zenith angle angle black sky albedo and aerosol optical
[39:10] depth for the corresponding scenes the black dotted line in those plots showed the targeted threshold performance performance of a minimum radiance of three nanowatts
[39:22] per centimeter squared per steradian results for this test show how the black marble product in blue maintains a near constant background
[39:33] radiance profile across the entire lunar illumination cycle the black marble product is well within the goal performance of three
[39:45] nanowatts per centimeter squared per steradian steradian the plots also illustrate the highly non-linear dependence of background dark pixels to different
[39:57] combinations of black sky albedo view zenith angle and aerosol optical depth essentially the takeaway message is that
[40:07] neither views zenith angle aerosol optical depth or black sky albedo should affect the black marble data too
[40:16] much in these dark places in addition to the product quality assessment tests on-the-ground field experiments were also used to validate the black marble
[40:27] product and determine how accurately the sensor detects nighttime radiance field experiments were conducted across multiple light pollution abatement zones
[40:38] in puerto rico during the night of march 2nd in 2017 at 2 am the team conducted a validation
[40:49] experiment at a farmland site in cabo rojo puerto rico a stable point light source that had already been characterized in a lab was
[41:00] used used we reflected this light off a 30 meter squared lambortion target essentially a perfectly reflective white
[41:10] tarp tarp to generate a radiance reading at the satellite sensor additional sky quality meters with specialized filters that match the veers
[41:21] spectral response were used to characterize atmospheric conditions conditions we also used atmospheric measurements from the nearby aeronet sun photometers
[41:32] to also characterize these atmospheric conditions conditions the results illustrate how the vnp 46a2 estimates over the pixel were
[41:43] within the product breakthrough requirement of 0.43 nanowatts per centimeter squared per seradian after removing background noise we found that the black marble product
[41:55] resulted in a 17 sensitivity enhancement compared to the top of atmosphere cloud-corrected radiance product under observed moon-free conditions
[42:07] in summary the black marble product is a thoroughly tested validated scientific quality data set for looking at daily changes in
[42:16] nighttime lights over land next up my colleague ron j strestha will go into more detail about how to
[42:25] download and apply this product and make good use of the quality assessment indicators associated with the metadata so you can get the best
[42:35] results in your project thank you hello everyone my name is randy sresta i am a senior scientific
[42:44] programmer analyst on the black marble science team at the nasa goddard space flight center in this second part of the training i
[42:53] will go over steps on how to obtain and process the black marble data additionally i will also give you an
[43:01] overview of all the scientific data layers included in the black marble vnv46a2 product nasa's black marble nighttime lights
[43:13] product suites vnp 46a2 is being routinely made available from the nasa level 1 and atmosphere archive and
[43:22] distribution system distributed active archive center which is also known as large dag in short the latch deck located in the goddard
[43:32] space flight center in greenbelt maryland is one of the 12 nasa earth observation decks which discipline domain is atmospheric science
[43:41] the lab stack serves the global nasa terra and aqua models and sumi and ppvrs science and application communities
[43:49] through efficient access to science data products services tools and all other related resources the standard black marble products are
[43:59] available since early 2012 and is being processed on a daily basis enabling both near real-time uses and long-term
[44:09] monitoring applications these data can be explored and obtained from the lag stack data repository through the link highlighted in the red
[44:18] box number one before you can search and access the data you would need to create a profile
[44:24] and login credentials to do that click on the profile icon menu which is on the top right mark by
[44:31] the red box number two this will take you to the earth data login page where you can either use your
[44:37] existing earth data login credentials or if you are new to the system you can follow the instruction to register your
[44:44] account account once you have successfully login you can begin to search the data by clicking on the find data menu which is highlighted
[44:53] here in the red box number three when you click on the find data menu it will open up a lads data discovery web
[45:02] portal from here you can search for the data in two different ways you can either use the existing lads web
[45:10] portal from where you can search for a specific data set and refine your search based on a temporal range and area of
[45:18] your interest you can also search the data through their online data archive we will go over both options
[45:27] the first option to search for a data set through lads web portal is more user friendly and you can explicitly search
[45:35] for a specific data set and refine your search based on temporal range and area of your interest
[45:41] to specifically search for black marble data we will first type bnp 46a2 in the keyword search bar
[45:50] this will automatically display the list of all available vnp46a2 products in the write product list panel from the panel we will select the
[46:01] vnp46a2 data by clicking on the product box box the background color of the selected product will turn green and it will
[46:09] automatically add the data under the product product once the data is properly selected we will go over to the next tab by clicking
[46:18] on the right arrow icon on the top right in this section you will need to define a temporal range of the data that you
[46:27] wanted to download you have option to specify a date range or if you are looking for a data on a
[46:34] specific date you can also select a single date for the purpose of this training i will be selecting a single date which is
[46:43] august 1st 2014 once the date from the calendar is selected you can click the add date button and add the date under the time
[46:53] tab you can also see your selected dates under the date selection panel on the right right you can select multiple single dates or
[47:05] date ranges and the dates selection panel will display all your currently selected dates once we have selected our desired dates
[47:14] we will move to the next section by clicking the right arrow on the top in this section
[47:22] you will need to define geographic extent of the data that you want to download download there are multiple tools available for
[47:29] you to select the area of interest you can use any of these tools to subset the geographical extent of the data
[47:39] i will be using the classic option of drawing the custom box on the map to define the bounding box of my area of
[47:47] interest interest for this demo i am selecting an area in the florida panhandle region by drawing a rectangular box around it
[47:57] once i complete drawing the box the corner coordinates of the bounding box are automatically added under the
[48:04] location tab you can also see your current selection at the bottom of the select area interest tool path
[48:14] once we are happy with our selection we can move to the next section to view the search results by clicking on the right
[48:21] arrow on the top the next section lists the search results based on your selection criteria if you do not see any files in this
[48:31] section that means your search criteria does not match any available data you would need to go back and update
[48:38] your search parameters for this case based on our search parameters it resulted four images since we only selected a single date the
[48:48] geographic extent of our area of interest is panned across these four images images from here you can either download each
[48:57] individual file by clicking the download icons icons or if you want to batch download all or multiple images you can select them
[49:06] individually by clicking on the image file name which will turn the background color from gray to blue
[49:14] you can also see the total number of files you've selected under the selection tab click on the right arrow to go to the
[49:25] next section to review and order the data in the final step you can review the summary of the images that you have
[49:35] selected in the file summary panel next you can select the delivery method on how you want to receive the data
[49:45] and click the submit order button to request your order depending on the size of your order the
[49:52] processing may take from few minutes to few days you will be notified by email when your order is ready
[49:59] if you have any issues searching or acquiring the data through lads deck you can check the help section of the portal
[50:06] you can also contact them through email if you need any technical support the second method to obtain the data
[50:15] from the lag stack is by searching through their online archive this method is little advanced and you
[50:21] will need to know the horizontal and vertical tile grid that contains the geographic extent of your area of
[50:27] interest interest in this section we will go over how you can navigate through the online archive to find the data that you're looking for
[50:36] we will also explain to you how you can calculate or obtain the tile grid information corresponding to the area of
[50:43] your interest to start navigating the data archive click on the online archive button which is on the top left panel
[50:54] in the archive page you will first need to navigate through the directory tree to get to the folder path highlighted in
[51:01] the red box alternatively you can also directly access this page by using the link provided in the slide
[51:10] once you have navigated in the vnp46a2 folder it will list year folders for the available data you can then select the year of your
[51:20] interest by clicking on the corresponding year folder once you have selected a specific year it will display daily folders which
[51:31] contain all the available black marvel images for that specific day you can click on any day that you are
[51:39] interested in to list all the available data for that day please note that the folder lists are in
[51:45] julian day and you can refer to the julian day calendar for each year from the link provided in the slide
[51:54] under each daily folder you see the list of all available black marble images for that day here you need to know the horizontal
[52:02] edge and vertical v grid tiles highlighted with the green box in this slide that includes the bounding box of
[52:10] the region of your interest a general rule of thumb to calculate h and v tile number is also provided to
[52:17] you in the slide you can also download the special layer as a shapefile of the tile grid boundary
[52:25] with the tile number as one of the attributes from the provided link and use it to identify the tile grid
[52:33] that you need once you identify the images you want to download you can download each file individually by clicking on the download
[52:42] icon icon if you want to download multiple images you can first select the files that you are interested in by clicking on the
[52:51] square box next to the image and click on the download select button you will be able to instantly download
[53:01] all your selected files the black marble data that you will download from the lad stack will be in
[53:09] hd5 data type and if you are planning to use the data in gis software like arcgis or qgis you will need to convert the
[53:18] data to qrt format to do this conversion we have provided you a hdf5 to geotiff converting tool through our black marble
[53:28] website website this tool is a python based script that you can execute in the python console within qgis
[53:36] the script will let you select one of the seven data layers which i'm going to talk about it in next slide and
[53:43] convert it into geotiff data format you can obtain the script and the step-by-step instructions on how to
[53:51] execute this script in qgis from the link provided in the slide when you obtain the vnp46a2 product
[54:01] you'll have seven scientific data layers containing information on vrdf corrected nighttime light gap filled brdf corrected nighttime lights
[54:11] lunar irradiance mandatory quality flag latest high quality retrieval snow flag and cloud mask flag the first layer is dnb brdf corrected
[54:23] nighttime light which is lunar brdf and atmospheric corrected nighttime light ingredients ingredients the second layer is gaff filled dnb brdf
[54:33] corrected nighttime light which is gaff field lunar and atmospheric corrected nighttime light radiance third layer is dnb lunar irradiance
[54:43] which is a downward lunar irradiance all these layers are expressed in nanowatt per stair radian per square
[54:52] centimeters in unit the fourth layer is mandatory quality flag which is an indicator of the quality of lunar brdf and atmospheric
[55:04] corrected nighttime light radiance retrieval retrieval the value of quality flag ranges from 0 to 3 with fill value of 255
[55:15] i'll go over into detail on what each of this flag represents in the next slide the fifth layer is latest high quality
[55:25] retrieval which provides the number of days between the latest high quality retrieval and current day of interest
[55:34] the sixth layer is snow flag which helps identify snow free or snow cover status of the surface
[55:41] the final layer is qf cloud mask which provides the status of cloud cover the mandatory qa provides four
[55:51] indicators to help identify the retrieval quality of the observation value zero is high quality observation which includes persistent nighttime
[56:02] lights lights the radiance is retrieved from a radiative transfer model with high quality quality value one is also high quality
[56:11] observation which includes familiar nighttime lights the radiance is retrieved from a radiative transfer model with also high
[56:20] quality quality a slight adjustment is performed to reduce the lunar radiance residual mainly over the natural area
[56:30] valley 2 is poor quality observation which include outliers potential cloud contamination or other issues the radiance is retrieved from radiative
[56:42] transfer model however the corrected radiance shows relatively large difference with previous high quality data which could be caused by potential
[56:53] cloud contamination or other issues value 255 is fill value with no retrieval indicating the radiative transfer retrieval was fail
[57:05] so with these included seven scientific data layers and the detail quality flags we hope that the user will have
[57:12] sufficient information to be aware of all the pixel level quality attributes associated with each data product and
[57:20] help them to utilize the data appropriately in their decision making process this concludes part two of the training
[57:31] in the next part of the training my colleague eleanor will talk about the application of black marble data
[57:39] thank you ron jay as mentioned in this last section we're going to go over some of the
[57:45] applications of black marble data i'm going to talk about three different case studies for how black marble has
[57:53] already been used in scientific research and is already out there changing the way we understand and operate in the
[58:01] world in this first study monthly temporal changes in black marble nighttime brightness were used to characterize various
[58:13] patterns patterns of urbanization and growth in six urban areas in this figure a time series for each of the six sites
[58:24] was normalized between its own minimum and maximum radiance values the plot shows how black marble nighttime lights time series can capture
[58:34] various events in urban areas for example the plot of aleppo syria shows the impact of conflict and war
[58:44] on buildings and electric infrastructure a dramatic decrease in nighttime lights in 2012 corresponds to the timing of the battle
[58:54] of aleppo we start to see some trend in recovery beginning in late 2017. in contrast we can also observe a
[59:05] nighttime lights increase in the el zitari refugee camp in jordan around the same time the conflict in
[59:13] syria was started the war impacted people who were displaced displaced forced to leave their homes seeking refuge
[59:22] refuge in neighboring countries like jordan the third graph shows how night lights can capture urbanization and economic
[59:31] growth growth the growth and expansion of businesses in cities like dubai in the united arab emirates emirates is seen in the gradual increase in a
[59:42] night lights trend lights can also capture damage to electricity infrastructure that can happen during a disaster the fourth plot shows an abrupt blackout
[59:57] in san juan puerto rico during hurricane maria on september 20th 2017 2017 the hurricane caused a massive
[1:00:07] island-wide power outage that took months to recover from we will talk more about hurricane maria in subsequent slides
[1:00:18] the graph that is the second from the bottom shows the decrease in nighttime lights that resulted from an economic
[1:00:24] recession recession venezuela entered into a still ongoing socio-economic and political crisis in 2010 during the presidency of hugo chavez
[1:00:37] a crisis that continued into the presidency of nicholas maduro during this time venezuela's gdp fell from 334 billion dollars to 68 billion
[1:00:51] dollars dollars a decrease that is evident in the nighttime lights record in its capital city of caracas
[1:01:00] the last plot shows a seasonal pattern in huliaka peru that is commonly attributed to seasonal changes in albedo
[1:01:09] related to vegetation and snow cover lights are highest during huliaka's snow season season and lowest when huliaka's lights are
[1:01:20] occluded by a full tree canopy this slide gives a little deeper dive into how we've used black marble to
[1:01:29] track outages in puerto rico after hurricane maria the plot compares black marble in red with total shares of peak load restored
[1:01:40] from official reports during the aftermath of hurricane maria puerto rico's electric power authority prepa prepa served as the primary data source for
[1:01:53] tracking power outages in puerto rico following the re-establishment of prepa's ground monitoring networks self-reporting of island-wide electricity reconstruction efforts
[1:02:06] became routinely available these reports estimated total rates of grid connected and temporary power on a weekly basis
[1:02:16] aggregated at the island level in the figure we compare these reports to our black marble derived measurements
[1:02:24] of outage conditions the nighttime lights approach tracks the timing of electricity recovery reported by prepa showing average differences of 17.9
[1:02:37] percent percent across the period of evaluation three distinct post-disaster stages can be identified in both the satellite and
[1:02:48] utility measurements stage 1 which was the immediate damage assessment period following hurricane maria maria stage 2 which was comprised of the ensuing
[1:03:00] relief efforts led by fema and the u.s military military and stage 3 which included the recovery efforts led by prepa and the u.s army
[1:03:10] corps of engineers while the nighttime lights estimates compare well with prepa's independent assessments assessments there are several factors that may cause
[1:03:21] the two estimates to diverge one is the use of generators solar panels or distributed energy systems that wouldn't be included in the prepa
[1:03:32] reports reports another is that nighttime lights based estimates are capturing different electricity end uses than official reports
[1:03:43] reports the restoration of street lighting which accounts for a large portion of the satellite derived signal often lags behind the restoration of
[1:03:52] essential energy infrastructure like schools and hospitals as well as commercial electricity this in effect creates a temporal bias
[1:04:04] in the satellite derived products particularly during relief and recovery stages relative to the official reports you can see this lag in the graph
[1:04:17] black marble has also been used to track differences in recovery rates within and across regional municipalities in puerto rico
[1:04:27] the regional level results highlighted factors that are known to influence recovery rates storm exposure infrastructure quality proximity to power stations and
[1:04:40] remoteness from large urban areas puerto rico's southwest region the district of ponce sustained lower peak wind gusts and
[1:04:50] experienced comparatively minor disruptions in electricity service the ponza district benefited from recent upgrades to its distribution system
[1:05:01] as well as the addition of backups electricity supply in addition to the lower initial exposure these infrastructure
[1:05:10] investments help the district of ponce to recover to 60 recovery within days of maria's passing as shown
[1:05:18] in the lower left plot in contrast the districts of arecibo gayama and gainable which were harder hit by the storm
[1:05:28] experienced lower rates of recovery leading to a longer interruption period these districts did not reach 60 recovery until the end of december or
[1:05:39] later three months after the initial storm event during the aftermath of hurricane maria officials made it a priority to
[1:05:47] re-establish service in the san juan metropolitan region however since the nearby palo seco central power plant was tentatively
[1:05:57] taken offline and the bulk of remaining electric generation capacity was located in the southern portion of the island
[1:06:05] reestablishing service in the capital required the repair of long-distance transmission lines that could bring power from the south to the north of the
[1:06:14] island island these circumstances resulted in outages across puerto rico's north and eastern districts through december 2017. in addition to regional differences in
[1:06:27] districts there were gaps in electricity restoration between urban and rural municipalities within the same district in the four plots the solid lines show
[1:06:38] electricity recovery in urban municipalities and the dotted lines show electricity recovery in rural municipalities municipalities despite similar geographic
[1:06:48] characteristics and levels of storm exposure exposure most urban municipalities experience significantly faster recovery times compared to their neighboring rural
[1:06:59] municipalities municipalities quicker recovery rates in urban municipalities are consistent with standard restoration protocols that aim to restore electricity to the
[1:07:09] largest numbers of customers in the least amount of time protocols therefore favor the allocation of electricity to
[1:07:17] population dense areas to benefit the most people in addition rural areas are often much more difficult to access
[1:07:27] because of narrower or low quality roads that are easily blocked by storm debris and obstructions barrios that were more remote were among
[1:07:37] the last to get power restored puerto rico has been hit hard by hazards in the last four years
[1:07:45] two years after maria from december 28 2019 to january 12th 2020 puerto rico endured around 2000 earthquakes the
[1:07:56] largest was a six point four magnitude recorded on january seventh twenty twenty the epicenter was around fourteen
[1:08:04] kilometers south of puerto rico's southwest coast multiple large magnitude aftershocks resulting in 120 landslides were recorded for the next couple of days
[1:08:16] throughout the island the earthquakes resulted in 10 casualties and approximately 3 thousand homes were destroyed or damaged with a
[1:08:26] total economic impact of around three billion dollars during the earthquakes puerto rico also suffered extensive damage to its
[1:08:35] electric grid once again due to collapsed buildings and structures structures nasa's black marble product was utilized to assess the impacts of the earthquake
[1:08:46] on the electrical grid through power outage maps shown above the first map on january 8th shows the percentage reduction in the
[1:08:55] outdoor illumination immediately after the 6.4 magnitude earthquake earthquake the january 9th and 10th maps gave us a sense of the recovery trend
[1:09:08] as in hurricane maria and other disasters that have impacted puerto rico the densely populated areas of san juan
[1:09:15] ponce and aracibo recovered power more quickly compared to rural mountain top areas areas these impact maps were made available to
[1:09:25] fema and were used to aid information to disaster response efforts on the ground combined with demographic information on
[1:09:34] at-risk populations these maps helped fema identify areas with the greatest and most urgent need so they could prioritize their efforts
[1:09:43] accordingly accordingly and minimize mortality losses finally we will end this section showing you an example of how black marble
[1:09:53] products are currently being used to track changes in urban areas during the covid19 pandemic these images illustrate early responses
[1:10:03] in wuhan china to combat and contain the disease outbreak chinese authorities suspended air road and rail travel in the area and
[1:10:13] placed restrictions on other activities in late january 2020 using the black marble products we were able to visualize the impact of these
[1:10:24] shutdowns on businesses and transportation around hubei province the ground zero of the outbreak both pairs of images were acquired
[1:10:35] before and after transportation networks and most business activities were shut down in the province shutdowns that impacted about 60 million
[1:10:45] people people in the left image we show a wider view of the province including the city of
[1:10:50] wuhan wuhan when comparing the before on top and after on the bottom images you can see highways connecting the urban areas grow
[1:11:00] dimmer after the lockdown in fact some of the highways completely disappeared in the after image due to
[1:11:07] the complete shutdown of highways and transportation in and out of the province province in the right image which is derived
[1:11:15] using the black marble hd product we can observe a more detailed look at business closures in the jinghan district which is a large
[1:11:25] commercial area in wuhan black marble will continue to be used to track hover 19 impacts to global cities
[1:11:33] and you can track these changes along with us at the nasa esa jaxa covered earth observation dashboard
[1:11:41] the link is at the bottom of this slide below below are references we've provided for further research many of the slides have
[1:11:50] been based on these case studies and we encourage you to read them and cite them when useful
[1:11:58] we will now transition to the practical exercise portion of this training ron jay will walk you through a case
[1:12:04] study to help you download data and interpret it to answer the questions in the homework exercise for this practical exercise we will be
[1:12:15] generating a daily time series using the black marble bnp46a2 data to monitor the impact of hurricane maria in puerto rico
[1:12:25] we have already talked about the devastating impact of the hurricane maria which caused massive destruction of buildings and energy infrastructure
[1:12:33] resulting in largest blackout in the us history history just to give you a quick statistics of the impact
[1:12:40] the total damages in the island were estimated around 90 billion and the loss of about 15 in the gross national
[1:12:47] product product over 4 600 lives were lost and about 200 000 people were migrated more specifically we will be examining
[1:12:57] the urban area of kagawa's puerto rico which was one of the most hard hit regions regions the figure here is showing the trend of
[1:13:05] power outages within the first 13 days after the hurricane as we can see there is almost no power restoration
[1:13:13] even after two weeks so we will be generating a daily time series series from july 1st to october 26 2017
[1:13:22] and observe how we can monitor the impact of the hurricane through changes in daily nighttime life to generate this time series the
[1:13:31] necessary black marvel vnp 46a2 data and the required python based script to process this data are already provided to you through
[1:13:41] these two links you can simply copy and paste these links links in a browser and download and save it in
[1:13:49] a desired folder the vnp46a2 data will be downloaded as a zip folder and once you've downloaded the folder you can extract the data and
[1:13:59] save it in your local folder for the python script you can directly download the file and save it in your
[1:14:06] local folder i've already used those links to download the black marble data as well as the python script
[1:14:15] and save them in a local folder which i named it rset.exe i've also extracted the zip folder for the data and if you look at
[1:14:23] inside the folder you'll see all the black marble data that we need for this exercise exercise you would also want to create a folder
[1:14:31] which i named it output that the program will be used to store some temporary files once the data and the python script is
[1:14:41] set up we will be using python console within qgis to execute the script and generate the time series
[1:14:52] so let's go ahead and start qgis just a quick note i am currently using qgis version 3.16.1 but i've tested it in an older
[1:15:04] version of qgis and the program runs in all the previous versions as well so first we need to open up the python
[1:15:13] console and to do that let's click on the plugin menu and within the menu click on the python console
[1:15:22] once once the python console opens up we will click on show editor and it will open up a empty editor
[1:15:32] within that empty editor we will be clicking on open script and when you click that will open up a
[1:15:42] dialog box that you can navigate through and open the python script that we just downloaded the script is already set up for you to
[1:15:53] execute and generate the time series you just need to make couple of changes to make sure that the script is pointing to
[1:16:00] the correct folder paths specifically you need to make changes in line 11 and line 15. in line 11 you will need to specify the
[1:16:11] folder location of black marble data that we have just downloaded in line 15 you will need to specify a temporary
[1:16:19] folder location for the program to save some intermediate files temporarily please note that while you are making
[1:16:27] changes in the folder path especially if you are copy pasting the folder link from the windows file explorer
[1:16:34] the default folder path separator might be backslash please make sure that the folder separators separators are either forward slash like the way it
[1:16:44] is set up in the code or two backslashes otherwise you might run into python unicode escape error
[1:16:53] once we have made the necessary changes the program is now ready to run the script you can simply click
[1:17:00] on on the run script button and the program will execute depending on the speed of your computer
[1:17:12] it might take up to a minute to finish the processing once the processing is complete the script will generate a daily black
[1:17:21] marble nighttime light time series over kagowa's puerto rico the orange graph represents the single pixel based time series whereas the blue
[1:17:31] graph represents time series based on 3x3 pixel size which generates more smoother time series series the x-axis of the graph represents the
[1:17:40] day of the year and then the y-axis represents the nighttime light in radians radians from the graph we can clearly observe a
[1:17:49] significant drop in nighttime light radiance around september 25 which is five days after the hurricane maria landfall in puerto rico notice that we
[1:17:59] don't see immediate decline in the nighttime light after the hurricane instead we see sort of flat observation
[1:18:06] this is because the nighttime light observations were very poor due to extensive cloud covers few days before
[1:18:12] and after the hurricane and the flat line observation that we see see is the gap fill nighttime light radiance
[1:18:19] values values so this is one of the reasons we highly recommend everyone to refer to the quality flag layer of the data and to be
[1:18:27] aware of the quality observation before using the data for any decision making purposes purposes we hope this exercise will provide a
[1:18:35] necessary tool for you to process the black marble data and generate daily nighttime light time series we also hope
[1:18:42] that you will be able to build upon the sample script and explore more case studies in your field
[1:18:58] okay hello this is eleanor stokes thank you everyone for joining this webinar again and has had an incredible
[1:19:05] turnout turnout i think folks attended from over 113 countries which i think really emphasizes the popularity of this data set right now
[1:19:15] and and it gets all of us on the science team really excited to think about the cool
[1:19:19] applications applications that may be developed using black marble in the future so we're going to try to answer
[1:19:27] as many of the questions that you've already posted as we can during this time period and luckily we have
[1:19:36] many parts of the team online ron jay is online and also miguel roman who is the pi of the black marble is also online
[1:19:45] and he'll also be giving a spanish version of this training today at 1pm so um if you can if if you have
[1:19:55] spanish-speaking colleagues definitely check that out today so let's get to the questions and we'll make sure to answer all of
[1:20:05] these questions in the final document and we're going to post this document on the arset website within a week or so
[1:20:15] so if we don't get to yours today during the discussion um um then check back and i'm sure we'll get
[1:20:22] to the answer eventually um um and also randy and feel free to chime in on any of these
[1:20:29] so question one apart from qgis what other software can be used to analyze nighttime lights any software that's able to handle
[1:20:38] multi-band raster data can be used to analyze nighttime lights so some of these that we know people use are
[1:20:45] envy which uses idl as a language arcgis is a very common one grass is an open source version of arcgis
[1:20:54] black marble data can also be processed without like a gui so using programming languages like r or python or matlab so it's a very um
[1:21:05] workable workable format format the current data format is hdf5 that's the nasa selected format of choice for standard science products
[1:21:18] and it's the underlying format for hdf5eos5 but you can convert this format to a geotiff using the tool
[1:21:28] on the black marble website so feel free to check there if using hdf5 is not something that you're
[1:21:36] familiar with okay the second question is could you provide the full reference of the levine at all 2020 paper
[1:21:46] on night lights referred to on slide 18 and we've added the reference below so number three um
[1:21:57] temporally has the transition to led street lights in some places been noticeable using the viirs dmv data
[1:22:04] the answer is yes um i don't know of a study that has only looked at this but
[1:22:09] um it's been a uh observed in two studies which i've listed below one that um i led and one that chris kaiba who's
[1:22:17] a a a researcher interested in light pollution has led um and this is because of the spectral
[1:22:26] differences between led lights which have that blue pump in the the 495 nanometer range or or the the blue
[1:22:35] spectrum part of the range and then the viirs viirs spectrum is not sensitive to that really early
[1:22:42] early really sub 450 nanometer range of leds so so um question four is vnp 46a2 gap filled
[1:22:51] publicly available yes yes we went through that how to download that from lads back later into the webinar so you can check
[1:23:00] back back and re-listen to that section that ronde led led because the webinar will be posted on
[1:23:06] the rcit uh website one question which i think question 10 um i'll just jump to that here
[1:23:14] here many of you pointed out that the 2020 data is not out yet so so the the black marble is still being processed on
[1:23:25] lads lads and and it's it will continue processing at 10 global days which are produced every 24 hours until it reaches the present
[1:23:34] day of 2020. so we expect the full data range to be finished by the end of december but
[1:23:44] that's still forthcoming it's just in process processing right now um um question question five i think um
[1:23:54] black marble is available on a daily frequency are all geographic regions available on a daily basis or just
[1:24:00] partial no black daily black marble products are available globally so um we're also going to in the future
[1:24:10] globally over land i should say um so in the future we're looking at ways to also expand this to look at the oceans but
[1:24:18] currently it's a it's a land product in the near future mid-2021 nasa will also produce and distribute monthly and
[1:24:27] annual annual composite products but currently it is a daily product and the only daily product so question six
[1:24:38] i was wondering if there would be examples in rural areas how would the images be influenced by
[1:24:44] elevation elevation so suomi npp is sensitive to very low light conditions i think we talked about this in the calibration section
[1:24:53] so it can be used to do analysis over really small rural areas in fact our validation involved
[1:25:00] sort of going to a rural dark area and shining a big light up at the satellite and the satellite could the sensor could
[1:25:06] perceive that that singular light so it's exciting that it is available and can perceive these really low light
[1:25:14] conditions conditions the images are also terrain corrected so the influence of elevation on the radiance is limited but
[1:25:23] just like in urban areas where herb like tall urban buildings can block light so can things like high mountains
[1:25:30] especially if you're using an off nader view angle so be aware of your view angle and it
[1:25:37] when you're doing elevation elevation based studies so question seven how strong do fishing lights need to be to be detected
[1:25:48] are single smaller squid fishing boats with rows of lights about 12 meters in length detectable that's a very specific
[1:25:55] question question um um the fishing lights can be detected as long as the scene is cloud free and the
[1:26:02] radiance is larger than one nano nano watt per centimeter squared per stadium that's our like our low minimum threshold for radiance
[1:26:10] perception so i don't know how bright squid fishing boats are but maybe you can make that call
[1:26:17] users should pay careful attention to the effect of lunar reflected ocean forward scattering which is known as the lunar glen effect
[1:26:27] uh since that creates bright artifacts in in ocean settings um um the the next question is what aoi is used to
[1:26:40] mass water for level two and three products products so we use the standard nasa viirs land water mask
[1:26:49] to mascot waters and it's the same water mask that's available within the viirs level 1b product and it's used by all
[1:26:57] products products all products based on beers question 9 our near coastal areas still visible or just land so there is a
[1:27:08] one pixel buffer off of land which means that's like about a kilometer off of uh the the coastal area is still
[1:27:16] processed by our team so yes um it depends on how near but you should be able to see coastline for sure
[1:27:23] and a little bit out into the ocean um question 10 how long will it take for the generation of vnp 46a2 products to
[1:27:33] get to the current date so this is what we talked about we expect it to be finished processing by late december
[1:27:41] and you can check out how far the nasa land sips has completed by going to the website posted under
[1:27:50] this question so question 11 it says on slide 17 you mentioned a factor of 256 times more for
[1:28:00] the radiometric quantization um so dmsp has a radiometric resolution of two to the sixth so that's 64 levels of light that it can
[1:28:12] see see and viirs has a 13 to 14 bit quantization to to the 14th 14th is 16 384 so viirs is two to the eighth
[1:28:25] times larger radiometric range than dmsp so that's where we got that number from uh question 12. since vnp 46a2 are not
[1:28:35] available yet at least not from 2018 onwards is there a way to have access to the algorithm
[1:28:44] so you can get all of the specifics of the algorithm from our atbd paper which is really the beefy paper that tells you
[1:28:52] everything about what's going into the algorithm what's corrected for it details all of the validation and calibration procedures we've done to
[1:29:02] make sure that algorithm has good quality assessment and the link to that paper is listed below in this question question
[1:29:10] 12. 12. so question 13 could you explain the basic differences between vdp 4d6a1 product and the censored data records
[1:29:20] available at the class from noaa okay so this one so this question's saying as far as i'm aware both are
[1:29:33] equivalent to toa data but it's not clear that they share the same processing algorithm so the noaa svdnb
[1:29:41] is equivalent using slightly different calibration methods and data processing approaches to the nasa level 1 products which are
[1:29:49] used as input for nasa's black marble this is also discussed in the atb d document that i talked about before
[1:30:00] and there are slight differences in terms of the calibration and the processing approaches but they're pretty much pretty much equivalent
[1:30:08] okay can you hear me yes okay so let me let me jump in on this one uh one of the things that users
[1:30:14] need to be aware is that solenoid generates generates a a sensor data record the viirs sdr and
[1:30:22] nasa generates the nasa level one products and as you know that these are they employ different calibration
[1:30:28] routines so what are the differences so as an operational agency noah creates a predicted lookup table that sort of predicts the calibration in
[1:30:40] real time so that you know as the instrument as the instrument goes through monthly day night band calibration maneuvers
[1:30:51] that is almost done seamlessly by doing that prediction there are some sacrifices in terms of the quality and
[1:30:59] sort of the overall you know correctness of that process because you're trying to do it as fast as
[1:31:05] possible possible um and so nasa which is focused more on climate and inner system science longer term studies
[1:31:13] we go offline and try to do the best possible calibration for the entire historical period and so that's why that's why when we
[1:31:24] release collection one black marble it use the code you know it's currently using an older base calibration approach
[1:31:32] for collection two we're going to now use an even more improved calibration method method so these are the differences not just in
[1:31:40] terms of the product but but users need to be aware that that as we're moving into new collections as
[1:31:47] we do with modis when we went from collection five to collection six we're also gonna go from collection one to
[1:31:53] collection two and hopefully through more collections the calibration will get even better and that's something that's unique to
[1:31:59] the nasa way of developing calibrated radiance based processes i know that noaa teams also doing their own type of calibration because
[1:32:09] they need to do that for their own processes to generate climatologies for the weather model so that's also
[1:32:16] uh employed but our approach is more focused on that offline approach towards calibration i just want to make sure
[1:32:22] that everybody's aware of that all right great um um so so question four is the same as question
[1:32:32] 10. i think in this page there are two questions about google earth engine so right now the black marble products
[1:32:40] are not accessible through google earth engine but that is part of our plan for the future um
[1:32:46] um is to incorporate those into google earth engine so stay tuned on that realm realm um let's see what else
[1:32:56] uh the black marble data is free of cost um um for anybody um um it's downloadable via lads like ron jay
[1:33:06] showed you in the um um in the webinar let's see so again what's the reason for the
[1:33:15] unavailability it should be available at the end of december uh 2020 is still processing processing okay so another night question 19 is
[1:33:25] another question about the led capabilities of black marble data um um so so there hasn't been a ton of research done
[1:33:35] on this like i listed the two studies that have identified decreases in urban areas that can be kind of
[1:33:44] verified through the astronaut photography that we talked about in the webinar webinar because the astronaut photography has
[1:33:50] that color component you can see when there is a led transition and then you can detect that in the
[1:33:58] viirs data but one thing that's important to note is that because viirs is a single channel you can't
[1:34:05] say with certainty that a decrease in the urban center is caused by leds unless you have ancillary data
[1:34:13] like you know that there has been a conversion conversion on this date and you're looking before and after that date or if you're
[1:34:20] verifying by comparing the data to this astronaut photography that has this color change and so yes so in terms of doing led studies
[1:34:31] it's important to realize that not all decreases are because of leds um this this question about whether you
[1:34:38] could see a conversion from 3000 kelvin to 4000 kelvin led i would be quite skeptical because if those lights differ
[1:34:47] in the sort of sub 450 nanometer part of the light spectrum beers doesn't have any sensitivity in that range
[1:34:55] um question 20 can you please show us how to open this data or is there any upcoming training related to processing
[1:35:03] such data so this is the only um training in this webinar series but your homework has and it
[1:35:12] it's all about just downloading the data and using it to produce a time series so hopefully that will help you feel
[1:35:20] more comfortable using the data and we've also posted below question 20 we've posted a link to converting the hdf5 format to
[1:35:29] geotiff format which is a format that a lot of users are more comfortable using so check out that tool
[1:35:36] and and work on the homework and hopefully you'll feel more comfortable using the data data is it possible to download monthly
[1:35:44] annual composites not yet we're hoping mid-2021 to sort of delve into the composite realm and produce these as a standard monthly
[1:35:54] or annual time series product it's okay can i can i jump in on that one yep everybody wants monthly
[1:36:03] and annual products we get it but let's let's let's let's talk about the daily because as we will teach you in this exercise
[1:36:14] you can do whatever composite you want now with the daily and this is very important because the monthly and annual
[1:36:23] while it has been traditionally used to answer some questions about longer term trends the daily is going to be a lot
[1:36:29] more powerful for the user community imagine now we're going to be able to if you want you can create a weekly versus
[1:36:35] a weekend composite of data you can actually look at the the you know periods where instead of that
[1:36:47] western civilization 30-day calendar doesn't match the lunar calendar of other countries like in china you know if you're trying to study shunjun you
[1:36:58] can use a 30-day composite if it's not matching the lunar cycle and so the baby is going to give you the
[1:37:04] freedom to generate a temporarily aggregated data set that it's fit to your scientific question not just based on a random 30-day
[1:37:15] calendar calendar that's this is very important you we're going to try to help you understand the tools
[1:37:21] tools in this way you can create an average as you see appropriate how that daily can then become entered
[1:37:28] into a monthly that's what we hope that you can do between now and then yeah we'll also generate the 30 and annual
[1:37:36] but please understand you can generate your own 30-day products now it's not that difficult and and so with the tools that we have
[1:37:46] developed if you build upon those tools you'll be able to access those 30-day and annual products right now
[1:37:53] so anyways yeah i think that's a great point there's a lot of a lot of the studies
[1:37:59] we've worked on have looked at these power outages and these kinds of like covid for example some of these
[1:38:05] effects wouldn't even be seen in a monthly and certainly not an annual product so it gives you the flexibility
[1:38:12] to design the composite you need or really use the the the richness of the full data set to look at
[1:38:21] really different things than dmsp has been able to be looked at in the past so hopefully it transforms the kinds of
[1:38:27] research questions that nighttime remote sensing is is asking and looking at yeah one more thing kelly as
[1:38:36] as you know the because of the way nasa helps the user community you know with existing data we all want
[1:38:44] to be aware this is a new product and so nasa is now investing in new services services to better make it easier for everyone to
[1:38:54] analyze the data you know if you look at if you've ever taken training on modis there is the appears tool it allows you
[1:39:01] to manipulate the data to subset the data look three-dimensionally through time over a single pixel and you're just
[1:39:07] literally doing that with a tool that's provided as a service and in fact what we've learned is that the users are
[1:39:15] using those tools and services more than downloading the debt no one's downloading the data anymore we should expect now that this product
[1:39:22] is finally out nasa is going to start building up on additional services including cloud-based services on ge on aws
[1:39:32] for all of us to be able to manipulate the data without having to download the entire arc
[1:39:38] uh so all this you we just need your patience because it's it's all rolling out as you see it so you guys are just
[1:39:44] being the first at looking at the data right great so question 23 is why is there a
[1:39:54] difference between the official and black marble data in slides 46 i think you're referring to the differences between the
[1:40:03] prepa official estimates in puerto rico after hurricane maria the utilities tracked how the lights are how electricity was restored and the
[1:40:12] nighttime lights also tracked it and there was a difference a slight difference between these these time series
[1:40:20] and so i talked about in that slide that part of the reason that that divergent divergence happens is that
[1:40:28] nighttime based estimates capture different things than the official report so they're mostly capturing street lights or or exterior lighting
[1:40:39] so the restoration of those kinds of light sources would would lag behind these essential services like hospitals and schools where the utility
[1:40:50] is going to prioritize restoration but we wouldn't see that signal very well in the nighttime lights because most of the schools and the
[1:40:59] hospitals are in interior lighting interior energy use there's also a difference in terms of utilities only capture grid connected
[1:41:08] power and there's also distributed power so people who are off grid are using generators so we would see a difference
[1:41:16] there too like even though if the utility didn't perceive that certain communities were back online we might see that they have lights because
[1:41:25] they have generators or other kinds of power producing uh technologies so just to keep in keep aware of the differences between utility
[1:41:35] records and nighttime lights um um let's see number 24 the spatial resolution of the covid nighttime data seems higher than
[1:41:46] enp-4682 is it black marble hd where do we find it is it available worldwide so yes um that was a image of black marble
[1:41:55] hd which is a 30 meter resolution nighttime visualization so it's not it's not a data product it's a visualization
[1:42:04] that our team produces but we are hoping to kind of create tools that help you to approach kind of the
[1:42:13] methodology for creating hd data in the future future using cloud-based tools right now those tools are not available as miguel said a
[1:42:21] lot of this stuff is rolling out we've been waiting for the data to be public and now that it is and
[1:42:26] now that we've done this training a lot a lot of new tools and and sort of level four data products will
[1:42:34] probably be being rolled out in the future so stay tuned for that um um okay what are the differences between v
[1:42:42] and p 46 a2 a2c and a2 db in the online um um let me explain this one kelly yes so so
[1:42:52] this i this makes me very excited because there's a lot of very adventurous user using data that we're
[1:42:59] not even talking about in the server so vmp 462 is a standard product that we are just talking about today um our
[1:43:07] science facility at nasa has to produce additional variations on vmp-4682 for the purpose of creating some tools
[1:43:17] and so vmp-4682c is is the c stands for course and what happens is that the the the
[1:43:27] land data operational production and evaluation element that held dope these are the superheroes of nasa who are making sure that there are
[1:43:36] any quality issues in the data they develop their own quality assurance browse literally if you google viirs qa browse you'll find
[1:43:46] that you will find this website where where a couple of data scientists at nasa are developing browse images
[1:43:55] to to earn do early detection of issues for example every month there's a lunar role maneuver that affects
[1:44:03] the quality of the viewers archive these folks are identifying those affected granules and they do that instead of having to go
[1:44:11] through the pain of downloading the data opening it on a tool they're developing they've added some code to process
[1:44:20] browse imagery in the system itself all of these images are not relevant to the user they're used by
[1:44:28] the science staff uh to come up with better approaches for data quality control live so you know this is an operational
[1:44:36] system and so we need these tools but because of our nasa data policy everything is available online and so
[1:44:44] if you want to use browse imagery we're very happy to announce is that you don't have to use the
[1:44:50] the technical team's browse tool you can go to worldview.nasa.gov and you can access vmp 4681 in worldview
[1:45:01] as imagery so you don't have to download the data you can just literally snip uh the data
[1:45:07] directly from worldview i don't know if we have an opportunity to do that online if whoever's on
[1:45:12] uh uh brock yeah i know you're you you may want to just do that quickly open the
[1:45:18] um um the the browser if you want um and if you go to yeah you can you can go to add layers
[1:45:28] at the bottom the orange and then you you type uh add sensor nighttime i think it's uh bigger sensor rating so
[1:45:40] add sensor add add space sensor there it is dana ban ad sensor radiance well essentially we'll come up with a
[1:45:50] better name for that but as you can see as of as of today we have begun to routinely
[1:45:58] process process day night band vmp 46 radiance in real time within world view and if you open up you need to on
[1:46:08] if you go to and you have to go to 2020 december 2nd december 1st uh you'll find some result bang there it
[1:46:16] is is and so the black marble vmp 46a1 data is now available in imagery form the worldview gives team the global imagery
[1:46:27] browse services team will go back and process the entire archive archive down to 2012 and forward in the coming
[1:46:36] weeks so we're just going live in forward so we began since i think november uh or late november
[1:46:44] and this data is in real in near real time so we will get uh the 1 30 a.m overpass in in a few
[1:46:52] hours you know we're trying to get that to a three hour latency uh under the lands on aero time data
[1:46:58] stream so if you don't have if you before you order the data take a look at the world view
[1:47:05] browse imagery as we see it here because that is the quickest way to detect a power outage is that i saw
[1:47:13] something go between one day and the other let me now download the data and do a quantitative assessment
[1:47:19] but you don't have to manually download the data you can just look at it first and you can you're gonna be able to do
[1:47:25] that through very long periods of time the entire worldview archive as you can see here the time
[1:47:31] saves you'll be able to do a set of manipulations and there's several rc uh laminars that do this as well all right
[1:47:39] okay let's go back to q a and i think we were at 20 something we're at 27 and actually
[1:47:49] you could take 27 and 29 if you want because i think you're better suited all right so let's talk about
[1:47:56] calibration we spoke i spoke about this in a few questions back um please look at the official danae ban
[1:48:08] nasa level one product 8 dvd it has a very definitive assessment of how the calibration of the dmv is performed
[1:48:19] there is there are multiple references including a solar diffuser a black body we also look at space view and we look at the moon on a
[1:48:32] monthly basis and in addition to that there's a uh a a mutually agreed upon calibration approach to look at
[1:48:42] dark ocean waters over moon free nights over the pacific as a consistent calibration method all that is is then used to create f-flat
[1:48:52] f-lots or lock-up lookup tables uh and that is then implemented into the reprocessing those radiuses are done
[1:48:59] that in addition to that that doesn't even include all the efforts to improve the geolocation uh particularly over high terrain
[1:49:07] there's terrain corrected geolocated um um on information that you can find in a separate file and those are
[1:49:16] accessible um in the and the apb has a nice table describing each and every one of the air science data types the
[1:49:23] different file types for this and on top of that remember we have two different birds we have swami npp and north 20 and
[1:49:32] that while the calibration is similar to them them they're the instrument how they behave is different node 20 is it seems to be a
[1:49:41] little more stable but that's to be a tiny bit brighter than xomi mpp or i may be having that backwards but that's
[1:49:48] you know so from a lot of research still needs to be done to ensure harmonization of the calibration between
[1:49:56] the two years instruments and that is still something that the entire science team team uh for nasa and noaa are still working
[1:50:04] on on all right uh 20 we skipped 29 28 what data is used to fill gaps in the gas field
[1:50:14] we're not gonna um um i can answer that one quickly the please look at the atv we're using as kelly
[1:50:23] mentioned the most recently available highest quality dates and we have a flag that tells you how far ahead
[1:50:33] of a way of time are we going so if you're looking at a gas sale value that value may have been
[1:50:40] collected 30 days prior to the present day day and there's a flag that tells you that if you're looking at india for instance
[1:50:48] during the monsoon period we may not be getting a high quality retrieval for a long period of time
[1:50:53] and in the very tough case where there's no data for a very long period of time we also employ
[1:50:59] uh some additional correction routines um and we're always waiting waiting uh the most recent period of acquisition to try to get you as
[1:51:11] close uh nighttime value as possible to present date but regardless um you know this class and um yeah so that's that's the word that's
[1:51:20] where currently that's a current approach approach um do you know when the end of this was addressed also we're looking at
[1:51:28] you know the main thing as i said is you can already do temporal composites with the daily and in in in the meantime and
[1:51:36] in the future yes we will generate monthly energy products and the monthly products will also be available near
[1:51:43] real time and we want to do that because that way you can use monthly data as a baseline for any kind of
[1:51:49] disaster applications that would require a baseline to detect anomalies on a daily basis and then what else how do you change the latino
[1:52:02] in the script this is uh as ranjay pointed uh there is a variable the lat and lone variable online 19 and 19
[1:52:10] and for this particular exercise excuse me you could then go to any other pixels within puerto rico
[1:52:17] and look at the change in in radians from other areas other than caguas look for example you can look at
[1:52:24] oh macau you can look at other places where the shape of that change in light is very dramatic
[1:52:35] or you can know you can download your own data over another part of the world and then switch that long and do it
[1:52:43] yourself you can build from this script i think this is a really good basic script to at least give you a pixel
[1:52:49] specific specific uh assessment please if you're doing remember the training there's angular variation in the nighttime lights particularly over
[1:53:00] uh dense urban areas where there's tall buildings so that's why we were teaching you how to do the one by one comparison
[1:53:08] against a three by three square area because by using three by three three interpolation interpolation and creating a nightlight radiance for
[1:53:18] that that you're able to reduce that angular effect indirectly reduce the effects so these are the kind
[1:53:27] of best practices when you're using time series data um even after doing that the the data has a
[1:53:34] large variance on a daily basis so that's where temporal compositing comes into play but that variation is real remember that
[1:53:43] variation is real it has to do with angular effects it also has to do with residual residual artifacts
[1:53:50] artifacts uh from algorithm being able to do better detection of very small clouds think clouds things like that so just
[1:53:57] keep that in mind um we don't have i don't think we have we always say we have the perfect
[1:54:02] product this is the best available as cloud clear as possible that we have and we hope that by providing you with a
[1:54:12] daily product you can help help us make it help nasa make it even better um um currently we don't have an r version of
[1:54:20] the python script but by all means this is something that we could work on uh offline i'll talk to our said colleagues
[1:54:26] try to do that it shouldn't be that difficult to work working on an equivalence script in our so stay tuned
[1:54:33] on that i do the next do the nasa black marble and nest of yours probably use the same tiling
[1:54:40] coordinate system they do not so we follow follow you know having worked you know a lot of
[1:54:46] our members of the black marble team are also members of the modis science team so we follow the nasa approach for
[1:54:55] tiling on core and coordinates and projections as as nasa is using one decision that we made early when we
[1:55:03] developed this since this was a new product we weren't extending the product from modis is we decided to change the
[1:55:09] projection from sinusoidal to linear lawn or geographic projection and the primary reason why we did that at the request that you know the
[1:55:19] suggestion of our nasa pi virginia calp is that the greeting will be easier to pull directly from into a gis software
[1:55:29] and anyone who has worked within a sodium projection will know that first you have to order the data to be reprojected to lean it to
[1:55:38] geographic or through other more compatible compatible we're not going to have to worry about that here and and i think hopefully that
[1:55:46] saves some time to the users who are actually manipulating the the data directly uh uh from from their computers
[1:55:55] um and so we're explaining we've explained how what is this kind of new tiling approach um and you can find more information in
[1:56:05] section 3.3 of our user's guide in terms of how the grading algorithms algorithms uh work to generate this this this
[1:56:13] projection one of the things that you'll be very quickly familiarize is that if you work in a specific part of the
[1:56:20] world world um um then you will almost memorize the coordinates the horizontal vertical coordinates of the of this map
[1:56:28] especially if you start using black marble a lot like i can tell you like age 65 california age 29 v5
[1:56:35] china you know that you will quickly be able to identify but we're also excited because there are
[1:56:41] some uh teams and institutions who may be downloading the entire data set and will be able to do global analysis
[1:56:49] and so that's you know to do that um they'll be able to actually employ more cloud-based approaches in the future
[1:56:57] all right 34 does the data include really issues varying by sources this still is a work in progress
[1:57:07] when we initially started thinking about producing uh the black marble product there were two options nighttime lights
[1:57:17] and that we needed to redefine what nighttime lights was is it nighttime nights only street lights lights or is it
[1:57:26] lights that are like persistent through long periods of time or does that include does that include lights coming from thermal
[1:57:35] emissions and the answer it became very clear as we were talking to the users is that they wanted everything
[1:57:42] that who is nasa to decide what nighttime lights is or any other group group we want to provide you with the gas
[1:57:51] flares we want to provide you with the fishing boats whenever you know in the vmp4061 we want to provide you with the
[1:57:56] street lights and it is up to you to decide how to filter the data if we filter the data for you then we're
[1:58:05] preventing you to do science and applications in areas that may not be available right now and so we decided from the very
[1:58:12] beginning like no we're not going to filter filter we're going to give you cloud correct we're going to filter the atmosphere
[1:58:19] we're gonna filter the moon but in terms of data like illumination sources sources we're gonna let the user decide how to
[1:58:28] do that by providing quality flats and as we go into collection two uh we will we will begin to develop
[1:58:36] processes to also identify fires from flares from city life life uh but this is a very different way of
[1:58:44] using nighttime lights for science we're not just giving you a fully you know process product that only has street
[1:58:52] lights those are there are other groups that do that this is of the more sophisticated quantitative quantitative nighttime life science that includes
[1:59:02] measuring environmental parameters like clouds at night snow and ice at night how about those people who are doing
[1:59:09] that those research we don't want to just say no we're just going to give data for folks looking at city lights
[1:59:15] that doesn't mean that in the future we wouldn't wouldn't try to provide you with even more categories of lights that could change
[1:59:23] but this has as a new product we wanted to make sure that the data was available to everyone
[1:59:28] um all right so so question 35 how do you eliminate other factors impacting like the night lights data besides the increasing
[1:59:38] number of refugees in aleppo yeah so as we discussed the atvb uh talks about what you know natural sources of light
[1:59:49] and specifically as it pertains to this this application the most important factor is the surface albedo brightness
[1:59:58] over desert which is above 0.2.3 that is going to create a lot of problems for those who do not correct
[2:00:06] for atmos for the atmosphere because there's this as you remember the figures that we provided the path
[2:00:14] of lighting acid acid is is re-scattered by the earth's atmosphere as lighting from the moon is absorbed by
[2:00:23] and reflected back into space all that is going to be augmented as a function of the reflectivity the natural
[2:00:30] reflectivity of the surface and that is particularly true over over hurried hurried regions of the world like um in in the
[2:00:40] middle east in in sahara where there are settlements within deserts that's an area where you have to
[2:00:47] be extremely careful about atmospheric correction correction and other issues are there any works on harmonizing dms sorry miguel can i have something on 35
[2:00:58] really quick also um just because i don't think we've mentioned too that there's a lot of non-natural um
[2:01:05] sources and things that can influence lights lights so the algorithm doesn't correct for any of those for example during covid
[2:01:13] we also had the festival of ramadan happening throughout the middle east and that that that significantly changes the radiance we see over cities
[2:01:22] because people are awake at night late so their whole time schedule for their activities changes and we have a whole paper about
[2:01:31] how how much the radiance changes based on ramadan so there's lots of things that go into influencing the light signal and so it's
[2:01:41] important to realize that when you're trying to pull out a single variable like population change you need
[2:01:48] to bring in uh control variables from ancillary data to control for all of these other things great point
[2:01:57] um um the next question is where do we go from here in terms of harmonizing msp enviros to create longer and comparable
[2:02:06] time series from 1990 to depression this is an excellent question i think we there are efforts to do that i think
[2:02:13] part of the challenge is how do we ask you know one of the blessings of the black marble
[2:02:19] and the viirs instrument in particular is that all the data are freely and openly accessible including the input
[2:02:28] raw raw telemetry that is needed to generate a calibrated time series um and that does not seem to be the case
[2:02:36] for dmsp you get you got the you got some monthly data some annual composites and then there are ways for us to backtrack and
[2:02:46] try to do the calibration at least um and how do you say um not in absolute term but in relative sense you you
[2:02:55] either take one of the healthy or dmsp instruments you treat it as reference and then you try to
[2:03:01] create that as the reference as the truth as the quote-unquote truth from others so there's been a lot of work um
[2:03:09] in trying to harmonize that uh work by dr yu su over um and and for instance um
[2:03:16] and and we're we're we're putting some reference here for you to see how to do that we're really just focused on beers
[2:03:23] um right now but yeah that that's as we the generation of long-term data spanning multiple instruments and the
[2:03:30] harmonization of that is still something that's along the state of the art and we will need the help of the
[2:03:36] community to in order to do that our hope is that the viewers instrument now can be used
[2:03:42] as the new anchor as the new reference and there's sufficiently amount of overlap between dnsp and early vr's data
[2:03:50] in order to do that but that's that's actually beyond the scope of just working on generating the
[2:03:56] the black marble time series um um brought let me know where we're about five minutes over but let me know when
[2:04:04] to stop okay um um i have a question about using black marble data products or studying and
[2:04:10] changing night lights during covet since the product is not available for download through that stack oh i've lost
[2:04:17] it yes for this time are the are the vmp 4x6 a1 products an adequate substitute the answer is depends on the application
[2:04:30] context context um some of if you're just doing sort of like situational awareness of looking at features that are disappearing or
[2:04:40] like you know then yeah vmp 4601 longer term assessment uh where you're doing time series analysis you have to use vmp4602 we're
[2:05:00] doing and nasa is doing as much as we can to try to reach leading edge to try to get you the data
[2:05:06] and as a research agency uh this is these are the limits of being a science agency we are trying to get this data as
[2:05:13] process as fast as possible um um do i still need to observe the temporal aspect when i want to componentize
[2:05:22] between two days to ensure the sensor angles is the same that depends on what you're looking at
[2:05:27] if you're looking at a suburb uh where the consistency the consistency in nightlife radiance tends to be more
[2:05:36] stable stable regardless of angle then it may not matter as much but if you're looking at a large area and specifically if you're
[2:05:45] averaging over a large area that comprises different types of urban densities then yes you do have to
[2:05:53] consider that and there are methods methods that model that effect and try to come up with the ondo corrections and
[2:06:00] certainly as we're developing 30 and annual composites there are solutions that we can offer like perhaps a
[2:06:07] neonator composite versus an alternator composite to try to account for those considerations but yes look at the view scene at angle as
[2:06:16] you're looking at the time series because that is definitely a factor that influences the quality and consistency
[2:06:23] of the time series data can you elaborate on the use of different flags uh where are we
[2:06:34] how are these used for the analysis of the data set um yes so please use please look at the
[2:06:41] user's guide our users guide have a complete complete description of these flags and and the the what we
[2:06:51] what we recommend at the top level is that look at the mandatory quality flag as a minimum that is the one that tells
[2:06:58] you whether there's a high quality we are confident in this value versus other low quality results and if there's
[2:07:07] lower quality what is it that you're doing i think ultimately the answer is are you trying to do a narrow time application versus a
[2:07:16] long-term climate long-term urban focus application if you're trying to do neural time and you're someone trying to take
[2:07:25] an actual change happening live then the quality flags are going to be central for you to know that your
[2:07:32] assessment is based on actual measurements but if on the other hand you're trying to do a long-term
[2:07:39] assessment then you're able you need to use your judgment as to how much uh degree of uncertainty are you willing
[2:07:47] to add into your analysis um so the quality flags are there too we're not you know you have to use them
[2:07:54] um and you will see in the imagery what happens if you don't because for instance there are issues for
[2:08:02] instance with the cloud mask where sometimes there the clouds may not be detected by the viewer's instrument
[2:08:09] instrument and and we we are not deleting that data in the product but the quality says this data may be wrong you may not want
[2:08:20] to use it and so by using the quality flags and filtering for potential areas of contamination where our outlier tests
[2:08:29] internally are saying this something's wrong going on in here then you you'll be able to get a much better
[2:08:36] product product um i think a lot of that judgment is done inside the algorithm by by the algorithm
[2:08:44] so if you use the gap field the purpose of the gainfield product is to try to make sure that you don't have to worry
[2:08:51] too much about making that judgment so we have made the judgment that the gapfield product is the best that we can
[2:08:56] have have but even after using the gap fill you need to look at the quality flags to
[2:09:02] look at the latest that tells you how far in time we have had to go to get a
[2:09:09] good quality result and so again that we can spend five hours talking about call it flex but the
[2:09:15] very important thing is if you're publishing a paper about black marble marble and and you know kelly or ranje and i i'm one of
[2:09:25] your reviewers which is very likely and we ask did you use quality flags and you said no your paper is going to be
[2:09:32] rejected rejected because basically you're just using raw data you've got to be able to use the quality flats to truly
[2:09:39] ramp down on the uncertainties that are inherent in an extremely sensitive year's time series record all right
[2:09:47] so be warned use the cloudy flags how can black marble be used to study of energy access and is there a methodology
[2:09:54] for that again this is new research so whoever answers this question is likely going to be the first person looking at
[2:10:02] the first of many papers looking at you know the black marble application and energy access but let's look let's
[2:10:08] go back to for instance the the time series that kelly kelly uh introduced the examples imagine if you're looking at
[2:10:18] the consistency of nighttime light so you're questioning the traditional wisdom that nighttime lights never change and so if you're
[2:10:29] looking at long periods of time and you're looking at the variation in the lights that could be used as a way to
[2:10:35] understand access um we also have if you look at the atpd paper in 2018 a really nice example
[2:10:43] over cote d'ivoire ivory coast where we can actually see when development agencies like the world bank went in
[2:10:51] and began installing solar panels and you know it's like dark dark dark dark dark bright so you can actually
[2:10:59] find the timing when electrification efforts have taken place the best case the best example for this is india we were lucky enough to
[2:11:09] begin observing years nighttime data in 2012 and the muddy government and prior to the muddy government there were major
[2:11:17] electrification efforts happening all that has been captured in the veers time series record so that's those those
[2:11:25] are the kind of things that you and you know we're just waiting to see amazing number of
[2:11:30] research activities around the issue of energy access and hopefully that's gonna help us not just look at
[2:11:36] sustainable development from the point of view of just tracking but whether these these changes in electrification are keeping
[2:11:44] to pace uh with some of the other sdgs as well and this worked you know kelly has a
[2:11:49] really nice paper uh looking looking at that that we can that we can point to so by all means we'll put the link for that
[2:11:57] paper on remote sensing of environment um um can the brightness intensity of receive radiance also indicate the lens surface
[2:12:06] temperature temperature i lost it yeah for example in urban settings um the quick answer is no this is daniel visible
[2:12:17] imagery imagery and and while there have been exploratory studies studies that link high nighttime lights to land surface
[2:12:26] temperature i think it would be better to just treat these as two different phenomena after all we have a land
[2:12:32] surface temperature per product suite that can be used to answer questions about urban um heat islands and things like that so
[2:12:40] think of this as being one of many products that you can use to study the issues of equity and
[2:12:47] and effects of environmental um you know in you know environmental issues in cities but by all means you're
[2:12:56] this is just one of many tools that you're going to have to bring uh with for instance landsat tiers
[2:13:02] slstr being other data sources to help address the thermal component how good is the black metal product in
[2:13:10] detecting within city heterogeneity in night time lines for example if we have slums in the city will the black marble
[2:13:16] pro be able to differentiate those errors versus non-slumps excellent question uh kelly answer that question i think it's more of a scale issue but
[2:13:25] um kelly can you elaborate yep you can you can definitely see light differences on the scale of sloans but
[2:13:32] most slums are less than like the one kilometer square kilometer range spatially so uh you can't make out differences within
[2:13:42] the slums it's usually like a one pixel kind of area that you're looking at um and we also suggest if you're doing like
[2:13:49] sort of slum mapping kind of things that you combine this with other daytime data that has higher
[2:13:56] spatial resolution and then also data about people and about the land so that you can get a better understanding of
[2:14:04] whether these low-light areas within cities are slums or whether they're just you know fields or whatever so um
[2:14:13] that you can i'll attach the paper that we use to look at informal settlements um using veers in this question
[2:14:21] all right um let's see is the calibration differs from collections to we still compare collections between them i would not
[2:14:31] recommend you do that collections are meant to to create a marker between the it's almost like anyone using windows or oos
[2:14:46] when there's a service pack and your software and operating system is upgraded upgraded this question is almost like asking can
[2:14:54] i use an older version of a security patch with a new version of it you don't do that you don't want to mix
[2:15:01] that when we do a new collection the proper procedure is to move on and use the first collection now if you
[2:15:09] already started research um and you're right in the middle of publishing a paper using collection one just finish it
[2:15:17] but even within nasa we're trying to go through collections and once the full collection collection to is fully processed for the entire
[2:15:27] historical archive we're gonna give the users one year and then collection one will be deleted and so
[2:15:36] those are now now that's if you're doing science that's my recommendation if you want to help us the science teams
[2:15:45] to determine the differences between collection one and collection two for diagnostic purposes to say oh yeah look
[2:15:52] now it looks like now veers is less cloudy than before because the cloud has improved dramatically in
[2:15:58] collection too there are people who are doing papers like that these are remote sensing quantitative papers helping understand
[2:16:08] algorithm refinements and incremental improvements to the data so that is when you start mixing you're not mixing
[2:16:16] collections you're comparing collections between one and the other as a way to understand how the quality have has
[2:16:23] improved and what else do we still need to make refinements uh so that that's my answer is that if
[2:16:30] you're doing science no try to use collection two if but if you already started then finish your paper with collection one
[2:16:37] but make it clear that that collection is the first collection and it still has issues issues um but if you
[2:16:45] if you want to help us yeah sure go ahead you know compare the collections uh please explain the snowflake
[2:16:53] is it correct that zero means no correction and one means a correction was applied nope zero means the pixel is
[2:17:01] no free based on the best possible weird snow cover estimate that we have uh one means the snow is conta the pixel
[2:17:12] is now contaminated and is therefore up to you to decide whether you want to use no contaminated
[2:17:20] data data now now you would ask me well miguel why would you you allow people to get access to snow
[2:17:28] contaminated data and the answer is light pollution because if you're studying light pollution you want to study the
[2:17:37] multi-scattering properties of lights as it interacts with the earth's surface and how that ultimately multiplies the impacts
[2:17:46] to all the other environmental stressors that are being studied in that so early early on as i was talking to the allen
[2:17:54] community for example they said do not please do not over correct the black marble because if you do then we
[2:18:01] couldn't use it to do light pollution studies studies so that's why zero one snow is there our
[2:18:08] our our product tries to be as snow free as possible and so if it's not contaminated it doesn't get put in the gap field but
[2:18:17] if you want to see that data you still have access to that data if you want to
[2:18:21] do it for your applications oops hopes that makes sense uh do you have advice and guidance on
[2:18:27] using using the a1 product which is not corrected for lunar illumination and atmospheric assets um um that product is the product that keeps
[2:18:39] the nasa science team honest does that make sense if you say man this vmp-4682 i don't like it i think i can make a better
[2:18:49] product product than use vmp 46a1 vmp's 4681 is the product that helps us ensure ensure that you can reproduce
[2:18:59] the results in vmp-4682 it has all the this is a large file it has all the view angles it has all
[2:19:08] the content associated with the lunar state both in terms of phase libration lunar irradiance it has additional quality flags for
[2:19:20] instance those looking at fishing vessels it has a glint angle so that you can stay away from areas
[2:19:26] where the moon can affect um the ocean signal as kelly noted this is very important if you're working
[2:19:35] on a research study and 50 years from now now someone wants to recreate your study nasa is going to have to figure out a
[2:19:45] way way to to re-produce those results in the archive and the mp46a1 was a requirement for us
[2:19:53] to ensure reproducibility of the black marble nighttime knights algorithm all right so for all those heavy heavy users
[2:20:03] who have developed nighttime nice products products this is our gift to you you don't have to go use the raw data
[2:20:10] in swath format do the reprojection think about a greeting approach and you know it's going to take you eight years
[2:20:17] to do all that we're saving you eight years of data processing research on how to develop the algorithms how to
[2:20:24] think about the calibration all that you can literally as pro show you look at the data in
[2:20:31] worldview worldview and the data in itself is the package that needed to build new nighttime lights products in the future
[2:20:39] all right do we need to apply a threshold by x nano s to remove background noise no
[2:20:47] that is the old way that's your the way your grandfather used to correct for nighttime likes no do this is that's photoshopping guys
[2:20:56] you don't do that you need to have a nightlife product that has dust has a minimum number of
[2:21:03] thresholds minimum that's why it'll go back look at the training the quality assurance test that we have
[2:21:13] you know kelly the best thing that she says like one of the tech fishing boats we are saying in our benchmark text that
[2:21:20] the the minimum detection radiance that we can guarantee is roughly on the order of one nanowrimo nanowrimo we went to puerto rico and we put a
[2:21:28] flashlight it and you know reflected back into space and we detected it at 0.5901 so we're saying just just double
[2:21:36] it just in case and put one but but whatever your application you're using you're going to come up with your own
[2:21:42] thresholds but we do not specify thresholds for our the application of my timelines because the moment i put a
[2:21:49] threshold threshold if that threshold is too high then for example you know ten percent of humanity doesn't
[2:21:58] have energy access if that threshold is too high then you're not going to be able to detect
[2:22:03] um slums and informal settlements so we are threshold adverse we do not use thresholds you need to use physics
[2:22:14] that's how you develop a product all right so that's imagine if you use a threshold and the calibration changes
[2:22:21] then you need to update the thresholds which means that now i need to know what threshold you use to ensure the
[2:22:26] reproducibility of the results so the answer is a big no do not use thresholds in your analysis try to
[2:22:35] limit the use of that try to try to understand temporal aggregation of the data data and try to link the natural sources from
[2:22:43] the anthropogenic sources and it's easier to start using thresholds but when you're doing a global product you
[2:22:50] cannot do that um um does converting to geo tv reduce the quality of the data no that the geotiff conversion
[2:23:00] there you know one of the things that we have done is we have retained a consistent data structure of 16 bits
[2:23:08] unsigned integer so that means that as you're moving from one to the other you're still using the same scale and
[2:23:16] assets assets nothing in the file specifications changes changes if you're using geothe data the original by the way the original
[2:23:26] viewers viewers data record are all in floating points those are huge files so to make it easy
[2:23:34] we went down to 16 bit but we're not losing a lot of the inherent inherent inherent values i know that there are in
[2:23:43] some applications particularly in defense you know you may want to use extremely precise values um but for the purposes like general
[2:23:52] purposes of global studies uh the the the the rate the quantization range that the dynamic ratio we're gonna get a 16 bit
[2:24:02] should be sufficient for like 90 90 percent 95 of the people uh if you do need a nightlife product in
[2:24:09] floating point that's going to require a lot of resources resources and and that's something that nasa could not afford to do
[2:24:18] uh routinely for this product it's just too much space that may change in the future um and if
[2:24:24] we see a demand for that from the users we may consider reconsider but right now that 16 bit is as good as and it's if
[2:24:31] you look at the data it looks amazing uh is there a way to filter research for vmp 4682 that they last by cloud cover
[2:24:41] or other quality parameters that is that i owe you that one that is that's a tool just like appears in lpdaq
[2:24:50] eventually we will be able to integrate web services that allows you to get at the pixel level with specific quality
[2:24:57] constraints constraints uh but this being a new product that is still working products i'm not aware of any such filter
[2:25:05] parameters if you have any tech okay sorry i'm just and i think we've kept up 48 questions
[2:25:12] we still have a lot of people online um any anything else all right kelly why don't we finish off
[2:25:25] here yeah so um thank you again for joining us i think um we have uh distributed both mine and
[2:25:34] rondae's emails in case there are additional questions we have posted the homework on the website for you to complete and you're
[2:25:42] going to have two weeks to complete it so it's due on december 17th and once you complete it we can get
[2:25:49] arset can get you your certificate so i just wanted to thank everyone again for participating um thank you to arsene for your exceptional
[2:25:58] organization and toronto for joining me to present and of course to miguel for adding all of the richness in the q a
[2:26:07] session so um um i hope you guys all have a great rest of your day thanks thank you again
[2:26:22] you
