# NASA Remote Sensing for Monitoring Harmful Algal Blooms, Session 1/3

`https://www.youtube.com/watch?v=BNcJuB-TRuU` · id 137 · 1:50:33 · module 10 — Processing Satellite Imagery for Monitoring Water Quality

[00:02] Welcome everyone. Welcome to this RCET webinar on monitoring water quality using satellite image processing. My name is Amita Mehta and I will be
[00:12] conducting this webinar series along with my colleague Africa Flores from NASA's Applied Sciences SERVIR Global Program and also from University of
[00:22] Alabama at Huntsville. So, overall training objectives are listed here, but to begin with there is a prerequisite for this webinar series.
[00:36] Last year, RCET presented a webinar series on introduction to remote sensing of harmful algal blooms or HABs. And
[00:45] here is the address for this webinar series. Um not only there is introduction about HABs, but there is
[00:53] session two that describes a number of NASA satellites and sensors which are relevant for monitoring HABs from remote
[01:01] sensing observations. So, we recommend that you review this session. And with that building on that webinar now this a little more advanced webinar
[01:11] series has the specific objectives that we're going to focus on monitoring chlorophyll a concentration and water temperature. So, either sea surface
[01:22] temperature or water body temperature in inland lake uh to as indicator of harmful algal bloom. Specifically, you will have
[01:32] uh experience of working with some of the data sets. We will work with uh Aqua satellite MODIS sensor and we'll talk
[01:39] about these sensors soon and Landsat OLI sensor images for uh monitoring water quality. And then we will also look at a
[01:51] software SeaDAS and using this software you'll be able to uh do image processing uh uh from a Aqua and Landsat satellite
[02:01] sensors such as MODIS and OLI. So, So, the emphasis here is on HAB monitoring. So, we're going to focus on chlorophyll
[02:10] a concentration and SST, but the important part is that you will have experience in working with this data.
[02:18] You will have exercises that you will be conducting towards the end of each session where you will be using
[02:24] different tools and software to work with the data. There will be three sessions. Each one will be approximately 2 hours.
[02:35] Today, we will have an overview and analysis of NASA remote sensing data for water quality monitoring. So, here also we will look at some of
[02:44] specific tools for you to work with data. Next week, there will be an introduction to SeaDAS software, which
[02:50] is used for image processing and data analysis. analysis. And last week, there will be image processing or image analysis exercise
[02:58] using SeaDAS. This will be useful to learn how to use satellite remote sensing data along with in situ data to
[03:07] derive water quality algorithm for the region of your interest. So, concept you will learn here in these three weeks.
[03:15] So, we hope that this will help you in deriving your own water quality products using remote sensing data.
[03:25] Here's the outline for today. Those of you who are not familiar with ARSET, we'll start with an introduction
[03:32] to a remote sensing training program ARSET. ARSET. Then, we will talk about remote sensing of water quality.
[03:40] A little bit of background about that. Then, monitoring water quality in coastal and inland waters. In this,
[03:47] we'll focus on demonstration of uh two of NASA web tools for water quality data access. And these are Giovanni and ocean
[03:57] color web. We will focus on chlorophyll A concentration and water surface temperature. So, what we will do is we
[04:06] will have case study of Chesapeake Bay. Uh there was algal bloom earlier this year in May, so we will look at this
[04:14] case study using these two uh web tools. And then, uh you will be able to do an exercise using the same
[04:23] tools, and you will be analyzing uh and downloading some of the data on chlorophyll A concentration and sea
[04:31] surface temperature. And that case study will focus on Lake Victoria in Africa. So, we'll start about ARSET.
[04:44] So, NASA's Applied Remote Sensing Training Program, uh it's set up to empowering the global community through NASA remote sensing
[04:54] training. It's part of NASA's Applied Sciences Program, and the trainings are designed for policy makers, environmental managers, and other
[05:04] professionals in public and private sectors. sectors. Specifically, ARSET provides uh trainings in these thematic areas such as air quality, water resources,
[05:16] disasters management, and ecosystems and land uh management. We have a number of team members in ARSET ARSET uh scattered at different NASA centers
[05:28] uh here at Goddard, then at Ames in California, JPL, and also at uh Huntsville. Huntsville. NASA Marshall Space Flight Center.
[05:38] ARSET trainings um started in 2012. And as you can see, since then, uh 100 trainings have been conducted and more
[05:48] than 13,000 participants have taken these trainings from 106 plus countries. Uh, overall, more than 3,700 uh, and more organizations have
[06:00] participated in the trainings. And you can see for each different themes as you progress through the years, more and
[06:07] more participation and attendance um, has has uh, have participated in asset trainings. Also to note that these trainings are
[06:19] online such as this one. It could be introductory or advanced. Or there are online and in-person trainings which are
[06:26] also introductory and advanced. Um, Um, so this particular webinar is an advanced webinar series in which you
[06:33] will learn to access some of the data. These um, webinar series listed here from ARSET um, are specifically for
[06:45] water quality monitoring. There was an introduction to remote sensing for HABs as we mentioned. There were earlier
[06:51] webinars which were also about remote sensing of coastal and ocean uh, remote sensing and also introduction to water
[06:58] quality monitoring. This provides information of a number of satellites and sensors, how remote sensing is done and how it is useful and applied for
[07:08] water quality monitoring. So here is just a list that you can go and review these webinars at your convenience.
[07:18] Also this is the website. All the training material is available from this website. website. This current webinar uh, series is
[07:27] material, uh, presentation slides, all the exercises, homework, all that will be available uh, from uh, this site. And also uh, recording of
[07:38] this session will also be available uh, after the session. Lastly, there is a listserv that if you
[07:47] haven't signed up for, we recommend that you do because that way you can keep up with upcoming RC trainings and other
[07:54] activities that RC conducts throughout the year. Also at this point, I want to make sure that those of you who attend all three
[08:05] sessions in this webinar and complete homework exercises posted on our website, they will be awarded a certificate of completion.
[08:14] And you will be given more information about this towards the end of this webinar. With that, we start with remote sensing
[08:24] of water quality. So remote sensing of water quality, it basically depends on measuring radiation from space. So satellites
[08:40] carry a number of sensors, of different types of instruments. They either measure reflected solar radiation or infrared and microwave
[08:50] radiation emitted by Earth. And you can see the spectrum here. Here is the optical or visible light that is
[08:57] reflected by Earth's surface and atmosphere. So satellite sensors can measure that reflected sunlight or Earth's surface and atmosphere, they emit infrared and
[09:12] microwave radiation that can be measured. And then these radiation measurements are converted backwards to understand more about
[09:22] uh uh water quality parameters, as we will see. see. So primarily, water quality affects water optical properties.
[09:32] What happens is that dissolved or suspended matter in water, they change color of water. That means optical property changes and that is
[09:43] visible through change in color. So, when um change in color is noted, then it is realized that water property is
[09:54] changing, water quality is changing. So, remote sensing can be used to monitor water color and that indicates water quality.
[10:04] So, uh dissolved and matter um they change like such as dissolved organic matter include tannin, um um they coming from leaves, roots, and
[10:15] plants and they change color of the water. water. Suspended matter such as clay or undissolved minerals, planktons, or even
[10:24] algal blooms, they also change uh color of the water as uh shown here in the bottom picture.
[10:33] And some special herbs which have unique colors and you must have heard about red tides in oceans or coastal oceans.
[10:42] Um so, they have unique colors that help identify water quality. So, basically, it is the change oh
[10:51] in water quality that changes water's optical properties and that is measured as change in color by satellite sensors
[10:59] and that helps us in monitoring water quality. So, number of factors they cause change in water quality.
[11:08] First of all, nutrient loading or eutrophication, they can help they can change water quality. Pollution um can change water quality. Water
[11:18] temperature also affects uh water quality especially have warmer water um is more conducive for algal bloom. Uh food web change, introduction of new
[11:29] species in the water body, they can change water quality also. And changes in water flow is also a
[11:35] major cause of change in water quality, and that's true for HABs also, that um runoff going into water body changes
[11:44] because of hurricanes, droughts, or flood events, and that changes uh water quality. A number of satellites are currently
[11:55] available. They're useful for monitoring water quality, and they are listed here. There is Landsat 7 and 8. It's a long
[12:05] flying Landsat mission, but 7 and 8, they're available since uh April 1999 and flying currently. There is also a
[12:13] Landsat 9 already planned. Uh there is There are two more satellites, Terra and Aqua. These are also long-term satellites, uh 1999
[12:22] onwards and 2002 onwards, respectively. There is Suomi National Polar Partnership or SNPP satellite, uh which started in 2011.
[12:32] Also, there is a second um Joint Polar uh Satellite System or JPSS, that also started in 2017.
[12:42] And that is also uh flying right now. There are European Space Agency satellites. These data are available um
[12:51] they're open source also, and they are Sentinel 2A and 2B, uh launched respectively in 2015 and 2017.
[13:00] Um and Sentinel 3A, which was launched in February 2016. So, these satellites, a set of satellites, they are relevant
[13:10] for monitoring water quality. Not only that, they're all open source data, and they are available from different
[13:17] websites. Um if you when you review the prerequisite webinar, you will be able to see each and every uh satellite
[13:24] information um in that webinar. But, the summary is provided here. The satellites Landsat 7 and 8, Terra, Aqua,
[13:36] Suomi NPP, Sentinel 2A, 2B, and 3A. All these are polar orbiting satellites. They provide measurements from pole to pole,
[13:47] and they have these specific sensors. They are helpful for water quality monitoring. Landsat 7 has enhanced thematic mapper or ETM plus,
[13:59] operational land imager OLI on Landsat 8, 8, moderate resolution imaging spectroradiometer or MODIS on Terra and Aqua, and visible infrared imaging
[14:09] radiometer suite in VIIRS. That's in NPP. NPP. And And Sentinel 2A and 2B, they carry multispectral imager or MSI.
[14:20] And Sentinel 3A, they carry It carries ocean and land color instrument or OLCI, it's known as. Now, all these
[14:31] sensors, they have different spectral bands, number of bands, their bandwidth, and band resolution, they're different, and they're all listed in appendix A for
[14:42] more information. The information to note here is that all these satellites, they have different special and temporal resolutions and
[14:52] coverage. coverage. Landsat 7 and 8, they have relatively narrow swath, about 185 km, but have relatively higher pixel resolution,
[15:03] ranging from 15 m to 16 m. Nominally, data are available at 30 m that we are going to look at.
[15:11] MODIS has and VIIRS, they both have broader swath, 2330 here for MODIS, 3040 km for VIIRS. So, these are
[15:24] broad swath covering larger area, but then the pixel resolution here is moderate ranging from 250 m to about 1
[15:34] km for MODIS, and it's 375 to 750 m for VIIRS. VIIRS. On the other hand, if you look at
[15:41] Landsat, the revisit time is 16 days, but Terra Aqua MODIS provide coverage in 1 to 2 day.
[15:50] So, here are some of the differences. It's true for Suomi NPP too that it is a polar orbiting 1 to 2 day revisit
[15:57] satellite satellite sensor. sensor. Sentinel Sentinel 2 A and B has 290 km swath, relatively narrower, but then pixel resolution is
[16:10] higher as you can see, 10 m, 20 m, 60 m, and 5 day revisit time. Sentinel 3 A again is moderate
[16:18] resolution, 300 m, and also revisit time is 27 day. Has somewhat broader swath of 1270 km. So, as you can see here, these
[16:30] satellites, they all have different features, but they can all be used in combination to observe water quality,
[16:37] and that way they they can be useful. Some of the advantages of using remote sensing for monitoring water quality are
[16:48] they are listed here. First of all, uh they're available for large regions. As you can see in the
[16:56] right-hand side, these are in situ measurements. This is in Gulf of Mexico. You can see that there are limited
[17:02] observations. Also, they can be infrequent. They're not very frequent because just the logistics of taking in situ
[17:10] situ measurements. Whereas satellites, as shown here in Gulf of Mexico, they provide uh continuous special coverage, large scale coverage. Also,
[17:22] it's more frequent than in situ measurements. In case of MODIS and we're sitting be almost one to one or two
[17:28] days. So, they're more frequent and provide much better special coverage. Also, has long time series and data
[17:37] continuity. It's the same satellite and sensor that's measuring this area. So, say Landsat and um um Aqua and Terra, they have been flying
[17:48] since 1999 onwards. And then you get this long time series. So, you can look at climatology of different
[17:55] water quality parameters uh also. They're consistent in the sense that if you have in situ measurements at
[18:03] different places, different instruments are used with different calibration. So, it's hard to uh compare one water quality in one place to another place
[18:13] because instruments are different. Their quality and their calibration may be different. On the other hand, satellite uh measures
[18:21] with the same sensor that's measured everywhere. So, there is consistency in measurement that when you can uh there's
[18:27] a comparability also. Among different countries and different places. places. Uh there are many different types of um
[18:36] measurements available from satellite also. Um Um then also there is a compatibility or complement that traditional statistical
[18:46] methods can be used with satellite data. Um data processing is done in such a way that you can also have uniformly gridded
[18:54] data as we will see. And so, it they're easier to use that way. Um Um many many satellite data that most that we are
[19:04] going to talk about they're all open source. There are also other data sets. Um Um they have um commercial use and they're
[19:13] you one has to pay for those, but the one we are talking are freely available and they are open
[19:19] access data. So some of the water quality indicators observed from satellites are listed here. here. Turbidity and sediments
[19:34] they can be detected from remote sensing. Color dissolved organic matter or CDOM sea surface temperature chlorophyll A or phytoplankton
[19:46] and salinity total suspended solids fluorescence line height we'll see about that what it is and euphotic depth. These are some of the
[19:57] parameters they are observed from the satellites that we just talked about. And here is just an example of
[20:08] Suomi NPP VIIRS uh measuring phytoplankton bloom in Gulf of Alaska in 2016 June. As you can see clearly this
[20:17] green area they indicate where phytoplankton have bloomed. So typically the sensors that we talked about they have optical and infrared spectral bands
[20:33] and they are used for monitoring water quality. All the sensors that we talked about from ETM, OLI, MODIS, VIIRS, MSI and
[20:42] OLCI OLCI they provide uh uh spectral measurements in optical and infrared bands and these measurements then have been
[20:54] used for open oceans, coastal oceans, many estuaries and inland lakes to monitor um um water quality parameters that we talked
[21:05] about in the previous slides. This animation is from uh NASA's early satellite series. Uh this has This was launched for ocean
[21:16] color monitoring, and this shows annual cycle of chlorophyll A concentration, and you can see that um how it changes
[21:25] with time. And so, um this is a climatology actually from um series. Now, we are going to
[21:36] focus on how actually light interacts with water, and how what is actually measured to to derive water quality
[21:45] parameters, what is required. So, So, sunlight, when it strikes the water surface, surface, what happens is um radiation can be
[21:56] absorbed and re-emitted or reflected or it's scattered. So, absorption um is by phytoplankton in the water, other non-algal particles in the water,
[22:08] and colored dissolved organic matter, and water itself, they all absorb some of the solar radiation. Backscattering can happen in forward and
[22:20] backward direction. So that, there is after all the processes is done, there is water leaving uh radiation that is
[22:32] measured by satellite sensors. And And that is the in measured in terms of remote sensing reflectance. So, this is
[22:43] the quantity that is used. So, it's the reflected or reflectance that is received by the sensor that is used to
[22:51] derive water quality. And here it it shows in terms of scattering and absorption how reflectance is derived.
[23:00] Also, it is important to note that it is with respect to what radiation is coming in. So, it's the it's the fraction of
[23:08] the radiation that is reflected back that is measured by the sensor. Inherent optical properties or IOPs, uh
[23:18] which they reflect color of the water. So, absorption by different um water quality parameters as listed here, and light, they help in
[23:31] identifying color of the water. So, IOPs they change with different water quality parameters. So, so here, this is
[23:40] chlorophyll, so absorption and scattering, they reflect what kind of uh what water quality parameter is there. This is just blue water. This is
[23:50] chlorophyll with green. This is CDOM, and this is non-algal uh sediments. So, you can see different colors
[23:58] um in in deflectance when uh it's received by the sensor. And here also it shows that this is the
[24:08] wavelength, uh and here's the reflectance, and as you can see, different constituent has different reflectance in different spectral bands.
[24:19] So, by knowing this information, these some of these parameters, water quality parameters, can be derived based on
[24:27] reflectance. reflectance. So, here you have a broader peak for sediment in visible light uh in reflectance spectrum. Water is here in
[24:36] blue. blue. This is CDOM, and then there is this is chlorophyll. So, once you know uh how reflectance at
[24:45] uh is changed in in different bands due to these constituents, you can develop algorithm to get these parameters back
[24:53] from the observed reflectances. And there are basically two methods used in getting water quality from remote sensing.
[25:07] One is a qualitative technique or it just provides qualitative information in which satellite images can be viewed
[25:16] every day or every time there is an overpass of satellite over the water body of your interest and if the you can
[25:22] see changing color, then you know that water quality is changing. So this is just visually inspecting how
[25:31] water color is changing provides you information about changing water quality. Quantitative method on the other hand is
[25:41] a little more involved. In this, you really have to know reflectance reflectance actually measured by the sensor. You
[25:51] also want to know absorption and scattering properties of the water or medium between water and the satellite.
[26:00] This is atmosphere and what happens is you you need in situ observations where you want to develop quantitative
[26:08] information. information. So you take in situ measurements, take remote sensing measurements and derive algorithm to relate these two to
[26:18] derive quantitative information and we'll see how to do that. So here what is shown here again is this
[26:27] is the spectrum and this is the radiance. Now this is the energy spectrum is shown. So total
[26:35] this is sensor looks at total radiance. This is the water or surface reflectance and water leaving and this is the
[26:44] atmosphere. So when the satellite sensors, they actually see a combination of what is coming from the surface. So,
[26:53] water, uh um other water quality properties, atmospheres, and So, total what you see here, top of the atmosphere radiances, they're
[27:06] combination of surface, atmospheric gaseous molecules, clouds, and aerosol particles. They're all combined information with the surface. And so, in order to look at just water
[27:20] reflectances, to derive contribution from water, one has to remove atmospheric contribution, and that is called atmospheric correction for water
[27:30] quality monitoring. So, satellite observations of radiance or reflectances, they're corrected by using radiative transfer modeling, and there are various techniques they
[27:43] exist, exist, and they actually do require information about radiative transfer. Um, information about atmospheric conditions, clouds, and aerosol
[27:55] conditions, they are required to do these corrections. There are uh several examples shown here uh uh of the algorithms which provide
[28:06] atmospheric correction. Uh NASA Ocean Biology Processing Group has a algorithm, radiative transfer algorithm, you can get more information
[28:14] here, uh which is used to derive NASA Ocean Color Data, atmospheric corrected data. data. There is uh second simulation of
[28:23] satellite signal in the solar spectrum, 6S. This has also been used um to correct um water leaving radiances for water
[28:32] leaving radiances or atmospheric correction. correction. Ecolight, this is from Belgium, and Hydrolight, this These two are also
[28:43] used for correcting radiances for atmospheric correction. There is also a paper here that you can review to just get basic concept of how
[28:57] atmospheric atmospheric correction is done. And all these websites provide ample details of what is involved in atmospheric correction. These codes are
[29:07] also open source that you can download and use in your own region with remote sensing observations. So So here is the summary of how water
[29:17] quality parameters are derived from remote sensing observations. So this is the quantitative technique. What is involved is algorithm
[29:26] development part in which satellite top of the atmosphere reflectances over the water body of interest are collected.
[29:35] Uh preferably they co-located and coinciding in time with in situ observations in the same water body. So for each satellite overpass, a time
[29:47] series of observations from remote sensing and in situ measurements they're built. built. The satellite data are corrected for
[29:57] atmospheric contribution. And water leaving reflectances are then combined or they are derived statistical or empirical algorithm algorithm in which in situ data are also used. So
[30:12] this is the algorithm development part. And the algorithm development results in model coefficients or relationship between in
[30:23] situ and satellite measurements, which then can be used with satellite satellite remote sensing reflectance over the water body to derive water
[30:35] quality parameters. So here you have point in situ measurements, but the model then can be applied everywhere
[30:44] where there is remote sensing information. So, that way you are providing a nice you're getting a nice
[30:49] spatial coverage based on remote sensing and based on the methodology derived based on in situ and remote sensing measurements. So, this is
[30:59] the basic concept of what you would use to derive quantitative information about water quality parameters. And And what we're going to do is in session two
[31:11] and three, we're going to go through some of these steps where we will actually look at atmospherically
[31:18] corrected reflectances and will also have example of getting in situ data and how they can be correlated. So, this
[31:27] will be demonstrated throughout this webinar series. So, here is an example of how chlorophyll concentration was derived by
[31:38] using VIIRS reflectances. Um on the left-hand side, you see a number of curves. This These are wavelengths here and these are surface
[31:48] reflectances. And so, reflectances are given for each wavelength here over the spectrum. You can see ranging from blue
[31:57] all the way to red. Um and different curves, they are for different chlorophyll concentration. Higher the chlorophyll concentration, uh
[32:07] more green light is reflected back. And so, as you go from top here to bottom curve, you are
[32:16] actually decreasing chlorophyll concentration. And in the green band here, you can see reflection reflectances changing. Also, note that the band reflectances
[32:27] between blue and green, they change. So, ratio of these actually that indicative of chlorophyll concentration. So, as we
[32:36] saw in the previous slide, this ratio is used with in situ data to derive a regression relationship or
[32:45] statistical relationship to derive chlorophyll concentration. And here on the right-hand side, then it is shown as a validation that this is the in situ
[32:55] chlorophyll a concentration and this is the VIIRS derived chlorophyll a concentration based on the model coefficients derived from these band
[33:03] ratios. And as you can see, um it lines up quite well, the uh remote sensing and in situ uh chlorophyll
[33:10] concentration. So, this is basically how uh you would use um an remote sensing data and in situ data to
[33:18] derive uh the algorithm and then also use this algorithm and validate it with independent data. So, this is basically an overview of
[33:34] number of satellite and sensors which are used for water quality monitoring and basic concept of what is required uh
[33:43] for getting quantitative information from remote sensing observations to get derived algorithm and how to uh uh come up with your own algorithm and how
[33:53] to use in situ data com- combination with remote sensing data um then to derive uh water quality
[34:01] parameter. parameter. So, now what we're going to do is we're going to have monitoring water quality and coastal and
[34:08] inland waters. There's a um number of things to consider here. Um as we saw, there are multiple
[34:16] satellites available. So, how to choose? First of all, uh geographical and atmospheric conditions where you want to
[34:23] measure water quality. Um you can see uh which satellite would be useful. If it is very cloudy,
[34:32] uh Landsat coming every 16 day may be less useful, but MODIS, so Aqua and Terra and S-NPP providing daily uh
[34:42] information, you can you have uh better probability of finding cloud-free condition. And this is important to note
[34:51] that most satellites and sensors we talked about, uh they use optical um measurements. So, if it is cloudy, then
[34:59] it's difficult to see the surface. So, based on that, uh one has to do uh composite of satellite data
[35:06] uh to derive uh water quality parameter. Also, special resolution is important. If it is open ocean, then any of the
[35:14] satellites would be useful, but if it is a small lake uh or it's like estuary, then it is difficult to see from
[35:22] uh moderate resolution such as um MODIS uh with 250 m to 1 km resolution, but Landsat with 30-m resolution can resolve
[35:34] some of the lakes. And uh it is considered that you need at least three clear pixel in water to be able to
[35:43] derive water quality of a uh water body. So, that is something to keep in mind. Temporal resolution also matters, how
[35:52] frequently um you can monitor a water body, uh how frequently you can get a non-cloudy picture which will provide uh
[36:01] information to you. Uh spectral bands and resolution also matter uh in accuracy and how to derive different measurements.
[36:11] Uh also, the mission length in it helps in deriving algorithm if you have a longer time series.
[36:19] And also, mission continuity is important. If you want to do operational monitoring, you can do it how long the
[36:26] mission is going to continue? So, depending on these number of um um factors, you may want to use which
[36:33] satellite to use. Also, a you can also use combination of different satellite and sensors to monitor a water body.
[36:45] So, there are um data sets available from some of the sensors that we talked about. So, NASA
[36:56] ocean color web, that is from uh ocean biology processing group. And here's the website. website. This site was primarily designed for
[37:05] coastal and open ocean monitoring, but it's also been used to monitor large inland lakes and estuaries, as we will
[37:13] see. see. So, this site provides historical and current data for um ocean biology, especially chlorophyll A concentration and sea surface
[37:23] temperature are available from this site. site. And we are going to focus on these two parameters. parameters. So, um as you can see, we will have a
[37:33] demonstration of this site, and we will go over some of the data, how to access these data, and how to then uh analyze
[37:40] these data. So, NASA ocean color data products are listed here. All the algorithms are provided here. And as you can see, chlorophyll
[37:53] concentration, diffuse attenuation um coefficient for down light down welling irradiance, um also inherent optical property, particulate organic carbon,
[38:07] particulate inorganic carbon, and photosynthetically available radiation, radiation, instantaneous photosynthetically available radiation, normalized fluorescence line height, and remote sensing reflectance. All these
[38:21] are available from optical bands. In addition, sea surface temperature based on infrared infrared bands are available. Um and so these are
[38:32] all available and how they are derived is given in this document, but also important to note is that um in situ
[38:41] measurements used uh to derive these algorithms are also uh available from here. It's from SeaBASS, this is the
[38:49] site. site. So these were ship ship measurements. They were used in deriving algorithms. So basic algorithm for chlorophyll,
[39:02] that is a fourth order polynomial. Um this is based on MODIS and VIIRS, and it uses reflectances in blue and
[39:13] green band. So this is the formula used. Logarithm of this band ratio and a fourth uh order polynomial. This is derived by
[39:26] uh relationship between band ratios and in situ measurements from SeaBASS, and then these coefficients are used um to derive chlorophyll concentration
[39:35] everywhere in the water bodies. Similarly, SSTs are derived from infrared window radiances. And And there are also algorithms described for
[39:46] organic carbon. Uh this is a simple power law. Again, it's in um blue and green um bands.
[39:53] Similarly, inorganic carbon uses two or three band uh as shown here. So a lot of uh details you can find in the document.
[40:04] Um and if you have any questions, you can bring the questions back. But basic algorithms, they used
[40:12] um multiple band ratios or information combined from different bands to derive these algorithms based on C bass
[40:22] measurements in situ measurements. Additionally, there is diffuse attenuation coefficients of KD 490 that we just saw. This is useful because it indicates how
[40:34] strongly light intensity at a given wavelength is attenuated within a water column. And so this is really a characteristic
[40:43] of water optical property and that it helps in identifying uh type of water case one and case two in
[40:52] this case. And it's it's a critical parameter to know accurate estimation of the light intensity at depth in the water column.
[41:02] Useful for measuring turbidity and transparency of water. And so this is really again it's a empirically derived algorithm, but this
[41:13] is a useful parameter to look at optical property of the water. And there is normalized fluorescence line that we mentioned earlier.
[41:25] So this also is useful especially it it it helps in resolving phytoplankton estimates and also in helps in in characterizing iron stress
[41:37] in the global ocean. So this is a measure of solar induced phytoplankton chlorophyll fluorescence emission at this particular wavelength.
[41:46] And again it is derived based on this particular wavelength measurements with respect to in situ line in situ
[41:53] measurements also and so this is one additional parameter that can help you in looking at photosynthesis in in water body.
[42:10] There also there's also this paper that is referred to here a couple of years ago. It provides a an overview and
[42:18] review of different satellites, sensors, and spectral bands used for deriving different water quality parameters. This is just for your information. In
[42:28] addition, addition, NASA ocean color data based on MODIS and VIIRS and um also based on Landsat 5, 7, and 8. These
[42:39] are are used by many many investigators for different lakes and estuaries also to derive water quality. And so,
[42:49] you will see references in this paper which use some of these data to derive water quality parameters.
[43:00] So, now what we're going to do is we're going to focus on monitoring HABs. So, we want to look at chlorophyll A and
[43:07] temperature data. So, just then somebody of what HABs are. Um HABs are basically colonies of algae which grow out of control.
[43:17] They can be in fresh or sea water. They They're just plants. plants. And some of them can be toxic.
[43:26] Uh Uh HAB really cause economic losses because they affect ecosystems and fisheries. They contaminate drinking water. So, they are health
[43:38] hazard. hazard. And they deplete oxygen in the water. They attenuate light so that they affect submerged vegetation and corals also.
[43:51] So, this is why it is important to measure or monitor HAB just to look at the impact of water and economic impact
[44:00] of HAB on aquatic life and also on human life. life. So, generally chlorophyll A concentration is used for HAB indicator
[44:10] and also temperature because warmer the temperature, more conducive to grow HABs. HABs. Chlorophyll A anomalies or departure
[44:20] from mean also is a good indicator of changing HAB. And so, that also is used for monitoring HAB. So, what we are
[44:29] going to do is we are going to focus on chlorophyll A concentration. And we're going to demonstrate this by
[44:36] using these two tools, Giovanni and Ocean Color Web. These two tools are useful for looking at already made
[44:49] chlorophyll A concentration from MODIS and VIIRS. And so, you can do special and temporal subsetting. You can analyze and
[44:57] visualize our data. You can do so without downloading or you can even download the data. So, for the case study what we are going
[45:07] to use is Chesapeake Bay. And then, you will have exercise over Lake Victoria. So, I'm going to share my
[45:16] screen to show Giovanni first and then Ocean Color. And we're going to focus on Chesapeake Bay to see how we can look at
[45:26] chlorophyll A concentration. So, I'm going to show a demonstration of Giovanni and then NASA Ocean Color Web.
[45:42] So, here's the Giovanni website. Those of you who have taken our set trainings before, you are you must be
[45:53] familiar with Giovanni. Here is the application specifically for chlorophyll A concentration. Here you can search for many different parameters available
[46:02] through Giovanni. We're interested in chlorophyll, so we're searching by keyword chlorophyll. Once you search by keyword, you can see all the options, diff-
[46:18] different sources of chlorophyll A concentration. And what we're going to look at is chlorophyll A concentration from MODIS
[46:31] Aqua, which is 4 km, and here's the beginning and end date. You also You have monthly as well as
[46:38] 8-day. 8-day. You also see normalized fluorescence line height from MODIS, concentration of particulate organic carbon, and you also see absorption coefficient.
[46:56] You can see backscatter coefficient, and particulate organic carbon again at 8-day 8-day resolution. But we're going to focus on monthly
[47:08] chlorophyll A concentration from Aqua MODIS. MODIS. We're going to pick Chesapeake Bay as our case study. You can zoom in and pan the map by using
[47:22] these features. And you can make a box around the area of your interest. This covers Chesapeake Bay.
[47:42] And you can see that it comes up with latitude longitude. If you have exact latitude longitude you're interested,
[47:49] you can enter those, too. We're going to look at time series of chlorophyll A concentration. So from the top, we have chosen area
[47:58] average time series. Here it is going from 2002 to 2018 May. And plot data launches a workflow.
[48:19] So, this is preparing time series and you already have this time series here. You can see from 2002 all the way to
[48:26] 2018 May. It's in mg/m³ and you can see variation. The general range is between 5 to 6. That's the average
[48:40] mg/m³, but you can see spikes going all the way up to about 7 7.5 mg/m³. The recent spike is in May of 2018.
[48:54] You can download this data. For that, you have to log in to NASA Earth data. You can register
[49:04] by going here. If you already have an account, you can log in to NASA Earth data. And this allows you
[49:13] to download the data. So, data are free, but user registration is required. You can download CSV file of the time
[49:22] series. series. This is an Excel file that gives you year and concentration in chlorophyll concentration. Or you can download image.
[49:36] Here you can go back to data selection. We're going to look at May 2018 2018 in detail. We're going to look at map of
[49:48] this month. I've already entered these dates. And I'm going to choose time average map from this map I
[49:58] option. Once you plot the data, you get the map. You can see the scale here and color
[50:10] bar. bar. Notice the multiplication factor here. So, this range is from 13 to say about 64 mg per meter cubed.
[50:20] And the color shows where there is high concentration of chlorophyll A. You can also see places where you don't have data. You
[50:30] don't see any uh chlorophyll A values. And there are two reasons for that. Either there can be clouds or just the
[50:38] resolution resolution um is not enough to resolve this. There's contamination from land and it's not derived. So, there could be multiple factors.
[50:48] But, in the bay you can clearly see also in the Atlantic Ocean you can see chlorophyll A values.
[50:57] Here you can see the place where you have high concentration. You can download this data either as net
[51:04] CDF file or GeoTIFF file. You can you view them in QGIS or ArcGIS. Or you can have a KMZ file,
[51:15] which you can view with Google Earth. And here is the Google Earth viewing KMZ file of Chesapeake Bay
[51:24] chlorophyll A concentration from Aqua Modis. You can zoom in. And in in in the Giovanni, uh when we
[51:36] downloaded it, it showed the resolution was 4 km. So, you can see these boxes, which are about 4 km.
[51:45] Here, this is much this this is narrower and so 4 km mode is has a lot of land
[51:52] also in it and so it's not chlorophyll a concentration is not available here. It's available when you have clear view
[52:01] of the water body. So, this is basically how you would use Giovanni Giovanni to to analyze chlorophyll a concentration data
[52:14] and download some of the data or view this data. We looked at time series. We saw where higher concentration was and
[52:22] we then looked at map. Once you look at the map then you can see zoom in and see
[52:28] exact area where you have higher concentration concentration of chlorophyll. These are the places where where um um there is likelihood of more algal bloom.
[52:41] And you can also go back and look at MODIS sea surface temperature in similar way way using Giovanni. We are going to
[52:51] uh look at that from NASA Ocean Color Web. So, I'm going to switch to uh NASA Ocean Color Web.
[53:03] So, this next section or next demonstration is of Ocean Color Web. This is the NASA Ocean Biology
[53:12] Processing Group's website and it has every information you need for getting uh NASA Ocean Color information such as chlorophyll a and
[53:22] SST, how the algorithms are derived, how how the in situ measurements are taken, how the validation is done.
[53:30] So, you can get more information here. All the missions are listed here. The current missions we talked about
[53:39] such as MODIS, Aqua Terra, um VIIRS from um SNPP and JPSS um OLCI from satellite Sentinel-3 They're all the past missions
[53:55] such as SeaWiFS, MERIS, um um They are all given here. You can click on any of this and you will get
[54:04] information about sensor about the time period of coverage how to get data from this particular sensor, documentation, and the mission website.
[54:18] So, this is the information about missions themselves and how to get the data. data. Derived data are available from this
[54:27] data link and we're going to see this in some detail. But, there are documentations in which all the products are described,
[54:37] especially um level 1, 2, and 3. The product that we saw from Giovanni was level 3, which was unifor- uniformly
[54:47] gridded at 4 km. Here in Ocean Color Web, all these levels are available. Um and so, we're
[54:55] going to look at level 2 data now, which are actually swath by swath pixel data. Uh and so, all these are available here.
[55:05] Information about data format and specification specification algorithm descriptions and other sources of data used here, it's all described in
[55:16] here. here. There's processing history and technical technical document. Um so, this is something where you will find details of
[55:27] everything that we're going to talk about, the parameters we're going to talk about, the data we're going to talk
[55:31] about. about. Services has information about software and tools. SeaDAS is something that we're going to look at in this webinar.
[55:42] So, from next week onwards, we will be talking about and using SeaDAS. There are also other software libraries such
[55:49] as IDL. Um there are time series plotter, there's Giovanni listed here. Also, something useful here is here. This is
[55:58] the overpass predictor. If you already know that if you are interested in a particular region, then you can pick any sensor here, MODIS
[56:09] Aqua, and let's also pick Landsat 8 OLI, say. And here is this date. And here's the latitude and longitude.
[56:20] So, for uh uh example, let's just go from 8th 8th So, 8/27, 27th of August to say
[56:33] 1st of September. And And for example, I'm going to add um 37 north and and 78 78 um
[56:51] um west. So, this is approximately in Chesapeake Bay region. Here's the daytime daytime um um information daytime overpass. And then
[57:02] here's it You can get it as text or or table. So, if you have inland lake or estuary you
[57:11] want to monitor, you can you can enter latitude, longitude, and dates, and it tells you, once you submit
[57:18] query, it takes a few minutes, but here is a table I already have. Uh it shows dates and time where sat
[57:29] satellite will overpass. So, this is MODIS Aqua and this is OLI. So, between 27th of August and 1st of
[57:36] September, you have several Aqua MODIS overpasses over this particular region. Whereas, you don't have any Landsat overpass in this period. So, if you are
[57:49] planning in situ measurements to coincide with satellite measurements, then this is a nice tool that you can
[57:57] use to look at when there will be satellite overpass, and then you can plan in situ measurements just around
[58:05] the same time, so that you can correlate if you are interested in developing algorithm, or you want to validate your
[58:11] satellite-based algorithm or data. So, that's a useful tool. So, that is available through the services, services, and you can register
[58:25] as a user, and you have data subscription subscription um um here, too. You have to log in using NASA Earth Data
[58:33] here, but you can create a sub uh subscription. So, if you have a particular region of your interest,
[58:42] you can log you can go in here, and you can create your region. So, in here, suppose you say
[58:55] and you can just select the region, say Lake Victoria. And then you can create this region and and then make
[59:04] subscription, so that um um every time there is an overpass here, you will get data for this particular
[59:13] part. So, it will be given to you. So, you go through this procedure to subscribe automatic data.
[59:20] So, many features to look at. If you go to data, though, which we we want to focus on is that you have this
[59:30] interface interface of level one and two browser data and level two three browser data. We already looked at level three data from
[59:39] Giovanni, so we're going to focus here on level one and two data. data. And you can see here on the left-hand
[59:47] side that is direct data access. If you don't want to use this browser, you want to download bulk file, you can go here
[59:56] and download the data. You can search file file and you can also this is the SeaBASS field data. So these are the in situ
[1:00:05] data available through here, too. There are other resources and how to cite this data and this particular
[1:00:12] website, you can visit here. There is in inter-information about quality assessment and again this is the same overpass predictor we just saw.
[1:00:26] One more thing to notice here and this is highly recommended is that there is a forum. This is the
[1:00:35] ocean color forum. If you have any questions about data or software or files, you can post your questions here
[1:00:45] and then there is discussion and there are question answers in here. You can also visit this forum to already
[1:00:53] view all the questions posted in there. So we're going to start with level one and two browser.
[1:01:03] So level one is just the raw measurements that satellite sensors does. Level two now is already geo-located and it is already in terms
[1:01:14] of geophysical parameters. So in this case it is chlorophyll concentration and sea surface temperature as shown here.
[1:01:23] All these sensors are listed here. Uh for example, we're just going to keep MODIS Aqua here. Here you can see a number of options.
[1:01:36] First of all, you can pick how big a region you're going to pick. Uh if you click on any or pick any region, um how
[1:01:45] many kilometer radius that you're looking for for satellite overpass. You can also have um your your area of
[1:01:54] interest, how many percent how much percentage is covered by a swath. You because we're just going to say any
[1:02:01] part. And then, um you can have also select if you want any in situ data from SeaBASS co-located
[1:02:10] with your region, you can filter by that, too. Here is the temporal selection. You have last 3 months here, and then year and
[1:02:20] month here. What we're going to do is we're going to go to May of 2018. This is where we saw in Giovanni when we
[1:02:31] had um larger chlorophyll concentration in recent months. Now, here also you can add uh latitude longitude of your area of interest,
[1:02:44] but there are also um areas which are uh already uh available here. So, one or more region from here.
[1:02:55] These are pre-selected region. You can look at different ocean, and here there is Chesapeake Bay. So, we're going to pick that.
[1:03:05] Once you do that, you can find swath. And that provides you you can see there are many swaths available
[1:03:16] uh since for this, and you can look at the picture by clicking on it. So, this is 31st of May.
[1:03:23] Just for example, I'm showing this. And here is the color bar that tells you what chlorophyll A concentration is and
[1:03:34] what its surface temperature is. So, you can see that it is about green is about 1 mg per m³ and then it goes up
[1:03:44] to about 30 in red. So, here is higher concentration. Here is little lower concentration. And it also shows where you're looking at where
[1:03:55] where the region is. It shows where you So, you can look at chlorophyll concentration and SST. This is SST.
[1:04:07] So, you have sea surface temperature and you have chlorophyll concentration. So, you can pick any region and see.
[1:04:17] You can also pick different swaths. You can pick the best swaths of your interest. And what you will you can do is you can
[1:04:34] also download the data. You can go to these files. So, ocean color is chlorophyll A concentration. concentration. This is inherent optical properties and
[1:04:49] these are SSTs. What we're going to do is download ocean color file. You save it on your
[1:04:56] computer. This is a netCDF file. This can be opened with SeaDAS and that is what we're going to do next week.
[1:05:05] So, you save this file on your computer, which I already have. Similarly, you can save sea surface
[1:05:11] temperature temperature on your computer and we are going to see these files next week week um by using SeaDAS.
[1:05:22] Okay. Okay. So, once you search for data according to spatial region and temporal region, you can then download the data
[1:05:37] and then later on you can analyze this using different software. You can just visualize it here, but you can do
[1:05:45] further analysis as we're going to do next week using SeaDAS. You can also use GIS if you like um or
[1:05:53] any other software such as IDL or MATLAB or R or Python. We are going to use SeaDAS, which is be
[1:06:00] designed specifically to do processing of these data. So, with that, this demonstration um is concluded. So, we looked at Giovanni
[1:06:11] and ocean color. We looked at Chesapeake Bay. We looked at chlorophyll A concentration. We looked at level three and level two
[1:06:18] data, how to download them, how to visualize them. Now, what we're going to do is we're going to stop here.
[1:06:26] So, you can download these two exercises from the pod. What you're going to do is you're going
[1:06:31] to repeat similar procedure for Lake Victoria. So, here is the exercise for Giovanni and this guides you.
[1:06:52] Here is the step-by-step instruction. Once you download this, you will use first Giovanni to get time series and map of
[1:07:06] chlorophyll a concentration over um um Lake Victoria. So, we you can start by going to the Giovanni website.
[1:07:27] Also, please note that since many of us are trying to access these sites, both Giovanni and then
[1:07:35] later ocean color, it's possible that the site may be slow and it may be possible that everybody cannot access
[1:07:43] data at the same time, but you have this entire week to finish this exercise. But, at least you can get started for
[1:07:52] next half hour, you can go through part of Giovanni exercise and also then ocean color exercise. I am going to
[1:08:00] go through some of these while you also work. So, please open Giovanni website on your website on your computer
[1:08:08] in your browser. So, this is the website. You will pick chlorophyll a concentration concentration monthly monthly from Aqua Modis.
[1:08:35] This is the name of the product. We're going to enter exact location and when you click on this
[1:08:55] here, it shows the square square area that you picked here. You can zoom in and see. This is Lake Victoria.
[1:09:12] And enter data range from January 2003 to June of 2018. Again, to find this chlorophyll A concentration, you would enter
[1:09:28] chlorophyll chlorophyll here and pick this from multiple options as we saw in the demo. So, once you pick the parameter, special
[1:09:47] and temporal selection, go to time series area averaged. And once you pick all of that, you can
[1:10:00] go to plot data. And we'll wait for a few minutes catches up. If you have any questions in
[1:10:09] the meantime, you can type in the question and answer box. Once you enter everything and you plot data, actually a workflow will
[1:10:27] launch and you will get results. So, the idea of this exercise is that you get experience in working with this
[1:10:42] site and working with this data. So, please go ahead and follow it on your computer. computer. Even if it is slow, please try to
[1:10:50] navigate through all the options. Even if it is slow, you will see that you it will let you enter all the
[1:10:58] options only when you try to plot data it may slow down. But you can uh repeat this later and during this
[1:11:10] week you should be able to get through this exercise. There are some question and answers based on this Q&A exercise which is part
[1:11:20] of your homework one for the first week. So, please try and go through this exercise. You can start it now
[1:11:30] and then you if you cannot go through the calculation because the site is slow, you can do it later.
[1:11:39] Since I've already done uh some of the exercise before, I have an example. I This is Lake Victoria
[1:11:49] January 2003 to July 2018 and here's the time series that I got. Some of you uh uh who already entered the data and you're
[1:12:02] using this site, you probably have the time series already. Based on this time series, you will answer uh questions posted in the
[1:12:11] exercise document and you will enter the answers in Google form that is available to our site website and we'll talk about
[1:12:19] it at the end of this session. Once you have this can go back to data and try and get
[1:12:36] area averaged map map time averaged map, sorry. So So instead of taking this entire period, I'm going to just pick
[1:12:49] a uh recent month in 2018. So, let's just keep it at July for June for now. So, this is average of May and June. And
[1:13:21] then you can say plot data. So, this is the exercise that you're following. Something that we just went through.
[1:13:38] It's all given here step-by-step. And these are the questions that you will answer using Google Form, which is posted on our set website.
[1:13:59] And in a few minutes, we'll go through the second exercise which is the ocean color exercise. Yes, so if you are getting a pop up it
[1:14:09] says two variables you're probably trying to select differences, but you want just a time average map or area average time series. So, pick
[1:14:21] the analysis uh selection exactly as it is in the exercise. So, the axis that you see on Giovanni
[1:14:32] plot, you see only years, but if you look at the time series, you can see the You can see that each point is marked
[1:14:43] here for each month. So, yes, the changing of is not possible in Giovanni, but you do have
[1:14:50] information. You can see each month marked as a symbol here. So, although the axis is just year, you
[1:14:58] can see each month in here. What you can do is when you download this as a CSV file, you can plot this in
[1:15:09] Excel, and then you can put months if you like. You can change the axis. As I showed in the demonstration, notice
[1:15:28] that the resolution is 4 km. So, although MODIS resolution pixel resolution is 250 m, like but for level three data, there's a
[1:15:41] composite, and it's it's over a larger region, so it's a uniformly graded 4-km data. And as I mentioned earlier, um this is
[1:15:56] just to get you started and to be able to navigate through the site, put all the options in, and find what
[1:16:04] you want to. Then, you have this entire week to complete this. And actually have you have 2 weeks to
[1:16:15] complete your homework. So, you do have time just to go through these steps to get some experience in navigating
[1:16:26] through the site. So, you can do it at your convenience if it is not working right now or it is
[1:16:32] slow. So, here's the um map that I got for May and June of 2018 the chlorophyll A
[1:16:45] concentration over Lake Victoria. Actually, you can look at the options and change the color to make it look better.
[1:17:03] You also get minimum and maximum values here. here. Please note this multiplier. So, this has to be divided by 100 in order to get
[1:17:13] the real number. Real values, actual values. So, you can change the color and replot. You can change things and customize plot
[1:17:32] a little bit. You can zoom in and see. You can see here where the maximum chlorophyll is, mostly in the coastal
[1:17:44] region. So, this was the beta version that worked fine. So, hopefully some of you got time series and map using
[1:17:52] Giovanni. Giovanni. And now we can switch to the ocean color exercise. Now, it's very important to complete
[1:18:04] both these exercises because the first one, Giovanni, you will need that to complete your homework. homework. And this one is even more important
[1:18:15] because you will be downloading ocean color data that you will be analyzing by using SeaDAS software next week.
[1:18:32] So, here's the website that we saw the demo about. And you will go to data and go to level
[1:18:43] one and two browser and make yourself familiar with all the features that we saw earlier. Keep modus
[1:18:54] Aqua. Aqua. You can pick day and night, but we are going to be interested in day images because we're looking at
[1:19:03] reflected visible light. So, it's a daytime image that will be used. If you pick day and night, you will see
[1:19:14] multiple swaths, but we'll pick something that is day. You can keep this any part. So, it says you can check both day and
[1:19:33] night, but we will be using daytime. On the other hand, if you have nighttime images, you can still use infrared
[1:19:44] window window 11 micron or even 4 micron that emits radiation and that's used for SST. So, chlorophyll concentration
[1:19:54] will be available only for day daytime images, but SST can be available from both. So, calendar, if we select August 18,
[1:20:16] which gets highlighted here. And here, Lake Victoria is there in the pre-selected region. region. So, you can pick Lake Victoria.
[1:20:41] For any other lake of your interest or coastal region of your interest, you can enter latitude longitude box in here.
[1:20:56] You can find swaths. So, here is where you have all the swaths. You can see multiple You can
[1:21:22] click on each of them and you will see different dates available here. So, I'm just picking a random
[1:21:47] date here. But, you can see Lake Victoria here and you can look at color bar as we saw earlier.
[1:21:57] So, here is where you can see your swath is is and it's a zoomed in version for
[1:22:04] chlorophyll A concentration and for SST. We're going to analyze this in SeaDAS next week. But, what you will do is click on the
[1:22:16] file file which corresponds to August 4th. And you can the the chlorophyll A concentration file. And SST file as well.
[1:22:40] So, notice that these are level two data. data. These are not uniformly gridded data. So, these are uh if you go back
[1:22:54] and look at here if you actually So, pick any month, um you should be able to see
[1:23:15] Suppose you pick You can see that all these are level two data. You can see individual swath from
[1:23:26] Aqua MODIS for this particular day. As opposed to level three data we saw in Giovanni, which was uniformly box
[1:23:37] gridded. So, you will be downloading this data over Lake Victoria, the swath that goes over it. So, you will pick
[1:23:51] 2018 2018 This is the Julian day or day of year. And OC is the chlorophyll and SST is the sea surface temperature.
[1:24:11] So, this exercise is mostly for downloading these two files, and then we will look at them using SeaDAS next
[1:24:19] week. This site may also be slow, but you still have this entire week to get these two files.
[1:24:35] You can go through all the swaths and see how things are changing, but you can see different areas are covered differently.
[1:24:48] So, this is the 4th August image that you will be downloading. Once you click on this 4th August image,
[1:24:59] you'll be able to see all the files, and you can get OC and SST files, which are Julian day 216 for this year.
[1:25:13] So, again, please make sure that you download exercise one for Giovanni and ocean color from the handout section, or they're also
[1:25:22] available on our site website. These two exercises you must go through between now and next session, because
[1:25:35] because Giovanni exercise will help you answer your homework questions for week one, available on Google form, the link provided here in
[1:25:46] the chat box, and also on the website, our site website. And the ocean color exercise, you will have to download these files
[1:25:56] because our next exercise and homework will depend on this. So, finally, I also want to point out
[1:26:06] something that has to be done before next week. So, there is a document um that you will
[1:26:20] see online. This is the SeaDAS software that is used for both visualization, customizing, analysis, and for image processing,
[1:26:34] even getting satellite and in situ data together. together. This is the main part of this webinar series.
[1:26:43] Earlier, we have covered you all in ocean color, but now we're going to focus more on SeaDAS software, which you
[1:26:50] must download on your computer. So, once you go to ocean color, you will be able to go to SeaDAS site by
[1:27:01] clicking on SeaDAS through services, and you will also see a instruction on our website how to download SeaDAS.
[1:27:10] Once you go to SeaDAS, make sure that requirement for your computer it's met, especially you need uh
[1:27:19] uh version of Java, um you can you will need Python, Git. These three you need. So, SeaDAS
[1:27:32] has a graphical user interface or GUI and also has a command line version. We are going to focus on the GUI.
[1:27:40] So, by clicking on download, you will be able to download for your operating system, if it is Windows or Mac or
[1:27:49] Linux. But, we are going to install this visualization installer from here. So, before next week, on your computer, you should have a
[1:28:08] version of SeaDAS. The latest one is 7.5.1. 7.5.1. For your own operating system, please go ahead and download SeaDAS.
[1:28:20] So, your homework for next week requires that you finish the ocean color exercise and download data for Lake Victoria and download
[1:28:31] SeaDAS. SeaDAS. Then, you can work on the Giovanni exercise and you have 2 weeks before you can complete your homework one. So, hope
[1:28:40] all that is clear. So, we thank you for attending today's session. We will have a question answer
[1:28:48] session right now. So, here is a question. Um in terms of image processing, how different is to process an image from
[1:28:59] Landsat 7 8 compared to Sentinel 2 A 2 B images. So, level one to level two conversion that
[1:29:08] is different for both of both different missions. So, we will see next week that in SeaDAS you can do Landsat 8
[1:29:20] um image processing through GUI, but Sentinel 2 A and 2 B are right now not available in SeaDAS.
[1:29:32] So, for each mission level one to level two conversion is special. I mean, that's where there is mission
[1:29:39] specific metadata going. So, uh the question here, the third one, what is the solution for Landsat Okay.
[1:29:53] Okay. Yeah. Yeah. Hi, Amita. Yes, hi Africa. Mhm. So, I think there are some some questions also about the
[1:30:06] how to use uh satellite data uh to identify cyanobacteria. cyanobacteria. Mhm. So, let me just uh kind of briefly chime in to to
[1:30:21] provide a few answers on that. Yes. Yes. Yeah. Yeah. Thank you, Amita. Um so, as Amita explained, the
[1:30:30] chlorophyll A is a good proxy for harmful algal bloom. Uh Uh however, there is a some work
[1:30:38] uh to identify specifically harmful algal bloom and cyanobacteria using uh trying to derive phycocyanin instead of chlorophyll A. However, you need a
[1:30:50] specific bands uh which uh most of the optical sensors do not carry and they have to be a specific width.
[1:30:59] And uh uh uh MERIS, um which was one of the sensors that Amita presented about, used to have
[1:31:08] this information. MERIS is not currently uh collecting data, but that's one of the limitations and that's why
[1:31:14] chlorophyll A is broadly used as a proxy uh for harmful algal blooms. The identification of the species itself
[1:31:22] mostly is done in situ because we don't we don't have the spectral information to derive uh phycocyanin most of the time. Um
[1:31:33] but, if you happen to have the the appropriate spectral bands, uh uh in theory, you could also extract
[1:31:41] phycocyanin. Uh but, usually chlorophyll is is used. So, there's a question about Landsat 7 imagery gap. So, there is
[1:31:57] when there is imagery gap, there Okay, there's some overlap between 7 and 8, so you can use 8, but there is this
[1:32:06] lines that appear in Landsat 7 ETM+ images, and there is no way around it. You can remove
[1:32:14] certain parts of the image. Both 7 and 8 base NDVI are available. You have to be aware of the gaps and
[1:32:27] those those lines that appear in ETM+. So, once you're aware of that, wherever there are actual data, you can interpret that as
[1:32:36] actual data or NDVI in this case. Also, so if there's a question here, could there be mathematical derivation
[1:32:56] to segregate the water quality parameters from each and every sensor, even if we have access data for a
[1:33:02] combination of sensors? So, actually, what we did was this is just one sensor we looked at, MODIS Aqua.
[1:33:09] But, yes, in principle, you can have mathematical derivation for each one, and it has to be separately for each one
[1:33:16] for level two, because each has different resolution, spatial and temporal. temporal. So, the mathematical expression or relationship would be
[1:33:27] derived for each sensor separately. It's the final product then you can combine from different sensors. I guess, uh
[1:33:47] So, question five, um next CDF file, there are software you can open with, but for now, you just
[1:33:55] keep the file. We will open them using C dash next week. You can use any GIS software. So, QGIS
[1:34:04] is the open source. You can open next CDF file with that or Python or R software can open it.
[1:34:11] There is also a software by NASA. It's called Panoply. It's a open source software that you can
[1:34:18] download. download. I'm going to try and find Panoply information for you. You can download this if you want to
[1:34:47] look at next CDF file using Panoply. In the chat box. And the question number six is about
[1:35:07] using Landsat 8 and 2A to determine setting the sediment river in water body and yes, it's possible. And I'm just
[1:35:17] sharing a publication there where you can check how Landsat has been used to monitor setting sediment in the Mekong
[1:35:24] basin. So, the important thing to note here is that you do need in situ measurements initially to find this relationship
[1:35:34] between satellite data and actual parameter. And then you can use that information information with all other images that come now and
[1:35:45] in the future. Mhm. Mhm. Yes, that's correct. And uh And on the last week we are going to
[1:35:52] work with the in situ data to do those calibrations. But yeah, it's kind of site specific. Okay, so for um
[1:36:18] Question seven, I think one variable is should work if you're trying to do time series or map only if you're taking
[1:36:26] differences then it's asking for two variables. For the time average map, if it's asking for more than one time you can use two
[1:36:38] consecutive months. Yeah, um the following question is related to the uh previous one to answer about how to use
[1:37:03] uh satellite data for harmful algal blooms. blooms. And uh I mentioned phycocyanin which is a pigment that is present in the
[1:37:13] cyanobacteria. cyanobacteria. Uh but to distinguish between two different types of a species of uh harmful algal blooms, that's still
[1:37:24] more challenging and uh you would need in situ observations to do that differentiation. differentiation. Um Um I would say that as much as we can get
[1:37:33] is to differentiate between uh algae and harmful algal blooms uh either using chlorophyll A or mapping phycocyanin.
[1:37:46] phycocyanin. Which are two different pigments. Um phycocyanin is present in cyanobacteria. Amita, would you like to add to that
[1:37:55] one? one? No, no. I think this is fine. So, now now And so, next question is this for next
[1:38:04] week. Um for next week we're just going to use C-DAS. Uh we're not going to use the
[1:38:09] science data processing code, but we are going to show how to do that in the third week.
[1:38:25] So, next week we we will talk about it, but we will not actually be using the science data code science processing
[1:38:32] code. But in third week, uh we will show how to do that. Mhm. So, um the review paper that we talked
[1:38:58] about, you you can you can have innovative product based on the data that you collect. It is possible. It's
[1:39:06] just just um um you you you just have to be careful how you interpret your results in and once you
[1:39:14] validate, yes. So, obviously, you can derive derive relationship between in situ data and that that um combination of
[1:39:25] band products if you like. I hope I understand your question. Yes, you will only download OC and SSD
[1:39:41] for now. Yes, and for the following one regarding big pollution issues, yes, you can use this type of information to monitor
[1:39:59] sedimentation sedimentation and chlorophyll in inland lakes. But for that, you would need to be careful about the special resolution. In
[1:40:08] inland water bodies, usually they are smaller and maybe Landsat and Sentinel 2 will be more appropriate than the MODIS
[1:40:19] or VIIRS. Yes, so it does depend on the size of the reservoir and generally it is it is recommended that
[1:40:29] you should have at least three clear pixels within your water, so there's no land contamination or no
[1:40:36] partial pixel over land. So, So, and for small water bodies, Landsat and Sentinel 2 would be better.
[1:40:46] And we'll we'll see in in the end in the last week, you know, how many lakes you can see
[1:40:52] with Landsat and MODIS VIIRS. Yeah, and next question is can we determine the chlorophyll content of inland lakes using this data?
[1:41:04] And yes, the last week we are going to see how to do specifically that and using Landsat data.
[1:41:15] And again, you have to be careful about the special resolution and the algorithm that is being used. The products that
[1:41:23] we're seeing today, those were ocean color products. Those are already generated information of chlorophyll content that had been generated for the
[1:41:31] ocean. So, even though we have data for large lakes like Lake Victoria, a the algorithms that are behind it were
[1:41:43] created for for the ocean and that's why calibration is needed and the Cidas platform that we are going to see later
[1:41:51] has the capability to do that calibration within C2 observation. And we are going to see that later, but
[1:41:58] yes, you have used satellite data to monitor chlorophyll water in inland water bodies. So, that's an important point that what
[1:42:09] Africa mentioned that the one that we showed to the or what you're working already derived product, the algorithms
[1:42:15] are based on ocean color data. So, the in situ data came from C-BASS cruise data, not from in inland lakes.
[1:42:25] So, So, can use this for inland lake, but but provided that for more accurate information you need in situ data in
[1:42:33] that lake and the data algorithm are using remote sensing and this in situ data for the lake you're interested
[1:42:41] in. So, So, Africa, you can add to this, but total suspended solids, yes, you can look at
[1:43:04] from satellite data. Mhm. Yeah, as long as the constituent that is dissolved in the water affects the color properties of the water, it's
[1:43:17] possible to monitor it. Otherwise, it won't be possible. For example, there is chemical oxygen and that That one affect the optical properties
[1:43:32] of the water, so it won't be feasible to measure for from satellites. satellites. So, like phosphate, something that is
[1:43:41] sedimented sedimentation, you can change its color optical property, then you can. But something that does not change
[1:43:49] color like even I think if it's like solid oxygen, you cannot. Mhm. Total dissolved solids, only if they
[1:44:00] change color then yes, you can. Mhm. Mhm. Like dissolved organic matter can change color and then you can see.
[1:44:13] Again, I think one thing to keep in mind and if you look at literature, you will see that when
[1:44:20] complex water where there is a lot of things going on, color can be changed because of number
[1:44:27] of water quality parameters that's changing, changing, really requires in situ data to clarify what's going on. Just remote
[1:44:39] sensing, just by looking at color of the water may not tell you very accurate information about each parameter if
[1:44:46] they're all present in high quantity. Mhm. So, So, so the question 15 from Giovanni, um you will not see most of the lakes
[1:45:09] because the data available are level three and four kilometer resolution. So, any lake that is bigger than four kilometer
[1:45:18] square may appear as one big box. So, Giovanni is not really ideal to use for small lakes.
[1:45:33] So, Lake Victoria is a big lake, so you can see it. Um Great Lakes can be seen.
[1:45:40] But, if you but but but for smaller lakes, you won't see them in GLOW. GLOW. In ocean color swath level two swath
[1:45:52] data, you may be able to resolve more lakes. lakes. Even then, um um if if the the data, if it is 1 km more than 1 km
[1:46:05] square, maybe it will you can see it. But, to derive information, then it's better to use Landsat data if you have
[1:46:13] small lakes. Mhm. Mhm. Yeah, and the Oh, yeah. Yeah, go ahead. The last question here is uh similar of
[1:46:33] identifying other pollutants in the water like toxic metals, high metallic pollution in fluvial bodies. Again, it depends if it will change uh
[1:46:43] the color properties of the water, and you will need uh as Sumita mentioned, in situ observations as well to to
[1:46:50] determine to if it's due to metals or to other constituents that are dissolved in the water. Just another one, deep pressure.
[1:47:23] Uh that's a good question. Um number 17 Yes, usually uh how the these products are derived is that you don't use the
[1:47:35] pixels uh along the shores because they interfere with the um bottom of the water body and instead of
[1:47:45] being measuring chlorophyll or sedimentation, you're actually measuring uh most likely the bottom of the of the water body. Uh so, depth
[1:47:56] uh does matter, but uh we are assuming here that we are measuring what is on the surface of the
[1:48:05] water. water. Um So, in the shallow water, yes, the reflectance is affected by the surface, then um
[1:48:17] not get very accurate information. Mhm. Mhm. So, So, when satellite sees reflectance, if it is truly ocean the the surface reflectance that
[1:48:28] you're seeing, then there's no problem if the surface if water is so shallow that sunlight can go in and get reflected or scattered by
[1:48:39] the surface itself, the bottom surface, then then you are misinterpreting that reflectance as water leaving reflectance. Okay.
[1:48:50] Okay. Yeah. Yeah. And And a good parameter to use for this is the KD uh 490, which measure measures how the light uh
[1:49:04] dissolves in the water column. So, you can see like uh how the the water is traveling on the
[1:49:12] almost likely from where are you getting your uh your measurements. And but we always assume we are measuring from the
[1:49:20] surface of the water. So, you have to make sure is, uh, pure water where you are looking, and,
[1:49:26] uh, and no shallow, uh, waters are along the shore. Thank you very much for attending today's session. Um, again, we apologize
[1:49:43] for the technical difficulty we had in between. And this afternoon, then, from 4:00 to 6:00 Eastern time, we will have
[1:49:50] the same webinar in Spanish that Africa for us will be delivering. And we will see you next week, on 12th
[1:50:00] of September, is the next session of this webinar. Again, please download SeaDAS on your computer, also ocean color files on your
[1:50:08] computer, so that we can work with them next week. So, thank you, everyone. We'll see you next week. Uh, this session will be
[1:50:18] closed now.
