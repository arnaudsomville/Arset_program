# In Situ Data Acquisition using SeaBASS and Image Processing using SeaDAS, Part 1/2

`https://www.youtube.com/watch?v=aXiKibOJWKg` · id 36 · 1:26:45 · module 123 — Monitoring Coastal and Estuarine Water Quality using Remote Sensing and In Situ Data

[00:02] Hello everyone. Welcome to this RC training on monitoring coastal and estuarine water quality using remote sensing and in situ
[00:10] data. data. My name is Amita Mehta and this training is conducted with the help of my colleagues Shawn McCartney and Juan
[00:18] Torres Paris from RC. So before we go through the training objectives, let's look at this acronyms here that we will be using again and
[00:29] again throughout this training. SeaBass, it's an in situ data portal which stands for SeaWiFS Bio-Optical Archive and Storage System.
[00:39] Where SeaWiFS stands for Sea-viewing Wide Field of View Sensor, which was one of the earlier satellites to monitor ocean colors.
[00:48] MODIS is Moderate Resolution Imaging Spectroradiometer, it's a sensor. VIIRS also is a sensor, Visible Infrared Imaging Radiometer Suite. And SeaDAS,
[00:59] it's a software which is SeaWiFS Data Analysis System. So with that, the objectives are given here. We will learn to select in situ
[01:09] water quality data from SeaBass. We'll use the SeaBass data to validate chlorophyll a data derived from MODIS
[01:19] and VIIRS imagery using SeaDAS. And these in situ measurements, and then prepare your own in situ data to use
[01:28] along with satellite images in SeaDAS for algorithm development. And finally validate derived water quality parameters for a selected
[01:37] coastal and estuarine region. This will be the case study that we'll be presenting. presenting. Also note that we will be focusing
[01:44] mainly on chlorophyll a concentration here, but this methodology can be used for other parameters as well. So there are several prerequisites for
[01:57] this webinar. Fundamentals of remote sensing session 2C available at this link has general background about remote sensing,
[02:06] satellites, and sensors useful for water resources. resources. More importantly, a couple of months ago, asset conducted a training on
[02:16] monitoring coastal and natural water quality focusing on transitioning from MODIS to VIIRS. In this webinar, we demonstrated how to
[02:26] download MODIS and VIIRS data for a particular coastal and natural region and how how to use those images in
[02:35] SeaDAS to process and get water quality parameters. parameters. So, we assume that either you attended this training or at least you have gone
[02:44] through the material so that you can follow the steps that we are going to go through in the current training.
[02:51] Also, Also, we need SeaDAS installed on our computers. In this training, we will go through some exercises
[03:00] on and you will be conducting that on your own computer using SeaDAS. In SeaDAS, we will do image processing for
[03:08] MODIS and VIIRS and also use SeaDAS in situ data. So, please make sure that you have SeaDAS installed on your computer.
[03:18] There will be two sessions, two hours each, today and then 7th of December. Both these sessions will be repeated
[03:26] twice in the sense that this afternoon also this session will be repeated and same next week. In addition to English, all the training
[03:36] materials are available in Spanish also and can be downloaded from the website. Today, we will focus on SeaDAS data
[03:45] portal and how to acquire in situ data for region of interest and also acquire remote sensing data for the same region.
[03:55] So, we will work on that part and then we will see how to get these data into
[04:00] SeaDAS. That is for today. And then next week we will use these data that we download today. We will first derive
[04:08] water quality parameters from MODIS and VIIRS and compare with in situ data that tells us whether we if
[04:17] you know to validate remote sensing data or how to adjust data based on in situ data. So, that will be next
[04:24] week. Here's the outline for today. We'll start with an overview or brief introduction to our set. We'll have review of water quality
[04:36] monitoring using remote sensing. Then we will have an overview of SeaDAS portal and how to get in situ data.
[04:45] And then we will have a demonstration. I will use coastal Gulf of Mexico as a case case study.
[04:52] And what I will show is how to get SeaDAS into the in situ data for Gulf of
[04:58] Mexico. Mexico. And also get MODIS and VIIRS data for the same region. Then Then we will also look at some independent in
[05:09] situ data that we can use to validate satellite data. And And finally after the demonstration, there will be a lab time for all of you to
[05:19] work on exercise one. This exercise is available from the website and also from this meeting website. You can download that. There is
[05:29] step-by-step instruction given for working on a case study. Again, we will focus on Gulf of Mexico, but you can
[05:38] also do that for region of your interest. interest. There will be one homework assignment that will be given on December 7th at
[05:47] the end of the webinar series. And the homework will be due on January 5th, 2022. Uh the answers of this homework must be
[05:57] submitted via Google Form, which will be accessed from the RZ website. And also RZ email address will be available where
[06:06] you will be submitting part of your homework. homework. A certificate of completion will be awarded to those who attend both live
[06:15] webinars and complete exercise. Also complete the homework assignment by the deadline. And then you will receive a certificate
[06:23] approximately 2 months after the completion of the course and will be uh given to you by or sent to you by email
[06:32] by Marinus Martins. So we'll start with introduction to RZ. Applied remote sensing training program or RZ, it provides accessible, relevant,
[06:46] and cost-free training on remote sensing satellites, sensors, methods, and tools. And our trainings are online and in-person, although uh currently we are
[06:57] doing all of them online because of the COVID not no not in-person. Um they're open to anyone.
[07:04] Uh live instructor-led trainings are available as well as self-guided trainings through our website are available. All trainings we
[07:13] do are always available through our website, so later on also they can be reviewed. reviewed. They're tailored to those with a range
[07:22] of experience in remote sensing from introductory to advanced. And these are the themes in which RZ offers trainings.
[07:31] For more information, please visit the website. website. Next, we will have a brief review of water quality monitoring using remote
[07:39] sensing. sensing. We have covered this earlier in our introductory webinar, so we will not go through all of this in great detail, but
[07:48] here is just to remind you what we covered and to see what we're going to use in this webinar.
[07:56] So, this table provides a list of satellites currently flying, which are useful for water quality monitoring. And these are the sensors flying on
[08:05] these satellites with with this special and temporal resolution listed in this column. So, here we know that Landsat missions
[08:15] are there with high resolution measurements, measurements, but we are going to focus on Terra and Aqua and SNPP and JPSS. So, these two
[08:26] satellites, Terra and Aqua, they have MODIS flying on them and SNPP and JPSS has VIIRS flying on these two
[08:34] satellites. And then there are these European satellites, Sentinel 2 and 3. Um both have a couple of satellites.
[08:43] We are going to focus on MODIS and VIIRS because though they have moderate special resolution compared to say
[08:50] Landsat or Sentinel 2, they have much broader uh swath width and one to two day revisit time, so they have good near
[09:00] daily global coverage of observations. So, this is what we're using. In this list, we see the temporal
[09:09] coverage for each of the missions. Of course, Landsat is a long flying mission. mission. Um Terra and Aqua combined also have
[09:20] observations available since 1999, so MODIS has long time series. And as Terra and Aqua and MODIS, they
[09:29] come near to the end of their mission, uh VIIRS will take over and continue the time series, so SNPP and JPSS will
[09:38] continue these measurements. We saw in earlier webinar that VIIRS has very similar characteristics to MODIS, both spectrally and specially and
[09:48] temporally. And so, that is why we're going to focus on these two sensors, so a long time series can be constructed
[09:56] from historical and current MODIS data and VIIRS data, which will also continue in future. In the last webinar, we also talked
[10:07] about levels of data. Here is just a reminder. Level 1A data are unprocessed instrumental data. They are at full
[10:16] resolution, resolution, they're time referenced and also geolocated. geolocated. But 1B data are then radiometrically calibrated, so they are radiances.
[10:28] And they are also at full resolution. And they are used to derive level two data, which are geophysical variables at
[10:36] the same resolution as the source. And geophysical variables such as chlorophyll A, sea surface temperature, color dissolved organic matter, etc.
[10:49] Based on level two data, level three data are derived, which are either aggregated or projected onto a
[10:57] well-defined special grid over a well-defined time period. So, these are further processed and usually they have lower resolution than level one and two.
[11:08] In this webinar, we will focus on level one and two data. Actually, satellite sensor they measure top of atmosphere radiances when they
[11:18] fly over a water body, top of atmosphere radiances, they have contribution from surface as well as atmosphere, including clouds and aerosol
[11:29] particles in the atmosphere. As you can see, if is the top of atmosphere radiance in this wavelength
[11:37] range from visible to near infrared infrared range. The contribution is largest from the atmosphere, atmosphere, then surface. And here is the water
[11:48] leaving uh reflectance and that depends on backscattering and absorption of radiation um due to water, sediments in
[11:58] the water, phytoplankton phytoplankton, and CDOM in the water. So, if we know what the water leaving reflectances are,
[12:08] then we can infer these parameters from the radiances. So, that is the principle that um remote sensing of water quality
[12:15] uses. uses. If you look at a satellite picture, usually um they uh different parameters affect different wavelengths or
[12:25] different colors. And so, greenish bluish is chlorophyll, blue is water, uh this grayish is non-algal particles or
[12:35] sediments, and CDOM, which is this brownish bluish kind of uh signature here. here. And that comes from their signature in
[12:46] different spectral bands. So, this is sediments, which is mostly in um red part. Water is blue, CDOM is this um
[12:58] grayish mostly here in in in 400 to 600 nanometer, and chlorophyll here uh almost 400 to 700
[13:08] nanometer range um peaking here in green. So, different constituents in the water, they affect color differently, and that is what
[13:19] satellite measures. Now, for quantitative derivation of these parameters, here is a flowchart. Okay. okay? And we have gone through
[13:29] this earlier, so let's see. What we need is satellite top of atmospheric reflectance over water body, which are atmospherically corrected to
[13:40] get water leaving reflectances. We also need in situ observations of water quality parameters, which are co-located with satellite data in space
[13:51] and time, so that they can be matched and used to develop statistical or empirical algorithm. So, based on
[14:00] satellite data and in situ data, and these are past observations. Based on that, that, um this is done. And as we saw earlier,
[14:11] NASA ocean biology group, uh they have algorithms, they have developed these algorithms based on satellite and in situ data, and these
[14:20] coefficients are then used for near real-time satellite data, which are atmospherically corrected, and then these coefficients are applied to get
[14:30] water quality parameters. So, this is the overall flow chart. What we are going to do is look at
[14:39] uh these two components and also this. So, um if if you look at MODIS and VIIRS processing algorithms,
[14:49] we reviewed them in our last webinar. Uh so, ocean color algorithms, they derive level two water leaving remote
[14:57] sensing reflectants co-located with in situ measurements to derive algorithms and to derive quantitative water quality parameters. parameters. And here are the links for the uh
[15:11] algorithms they were developed and used and they're currently used by the um ocean color uh group at NASA.
[15:21] So, what we are going to do is look at uh MODIS and VIIRS images, look at in
[15:28] situ data from SeaBASS. We're going to use both of them in SeaDAS software, and then validate uh water quality parameters derived from
[15:40] MODIS and VIIRS using SeaBASS data, and see how they compare, and can we modify the algorithm uh to match the uh two of
[15:50] the two different measurements, and we'll do that using SeaDAS and OCSSW. So, this is what we're going to do in
[15:58] this webinar. Overall requirements for algorithm development here is that we need to know which geographical region we want to
[16:07] focus on because different estuaries and coastal regions have different characteristics because of watershed processes um around that region or
[16:17] terrain terrain uh or land uh use pattern or what kind of um land cover is there, and
[16:25] uh also um in situ water quality parameters are uh measurements are needed, which are specially and temporally collocated with
[16:35] satellite overpass, so that algorithm can be developed by matching them. More Most importantly, that for development of algorithm, uh spectral
[16:46] water reflectances are required, and for that cloud-free scenes are uh absolutely necessary. If there are clouds present,
[16:54] then satellite sensors will not be able to see the water surface. Seasonal to annual coverage of in situ
[17:01] and satellite data are preferable because or water quality changes with time because of rainfall, because of runoff, and sediments and nutrients
[17:11] going in the water. So, that usually has a seasonal to annual cycle, and so if we have long-term coverage of in situ
[17:19] measurements and satellite data, then better, more accurate algorithm can be derived. derived. So, analysis and statistical algorithm
[17:28] coefficient derivation from the in situ and remote sensing observations, they have to be done. Um and then there have to be independent
[17:37] in situ data for validation of this algorithm. So, this is our ideal for and the requirements for algorithm
[17:44] development. development. This has been done by the NASA Ocean Biology Group uh for different satellites using SeaBASS data. And so,
[17:53] that's what we want to review uh next, um in situ data from SeaBASS. So, about SeaBASS, here is the link with
[18:02] a lot of details about this program. Uh so, OBPG, uh it maintains a repository of in situ oceanographic data
[18:13] to support satellite data validation. Um it was originally developed during SeaWiFS period to develop algorithms. So, all the in situ data were um
[18:24] obtained, algorithms were developed, calibrated, and validation activities were conducted. Um SeaBASS data include measurements of inherent optical properties,
[18:36] phytoplankton pigment concentrations, and other data sets such as water temperature, salinity, uh stimulated fluorescence, and aerosol optical depth.
[18:46] This is more for atmospheric correction. Data are collected using a variety of platforms including ship and moorings,
[18:55] and different instrument packages including profilers, buoys, and handheld instruments. The SeaBASS data uh can be obtained through this website,
[19:08] and we are going to have a short demonstration of that also. Not only that, uh if you have your own
[19:15] in situ measurements and if you want to contribute to SeaBASS, so that uh other people can use it for validation, you
[19:23] can do so, too. One thing to note here is that SeaBASS data have to be in a specific file
[19:29] format and we will review that in shortly. shortly. So, here is the get data. That's the part we're going to review in
[19:39] our demonstration how to get SeaBASS data. So, if you in your own region of interest, you can search for file
[19:48] and download data. There are multiple options here. There is time series tool, there is SST search, there is validation
[19:56] search for different regions. We will look at the file search, so that you can pick a geographical region and see how
[20:04] many in situ data are available there. Then, there is contribution of data. You can review that if you want to submit
[20:12] data. data. Uh important thing to note here is the file format. Uh the in situ data have to be in uh
[20:22] text uh ASCII file format and they have to have a name that ends in {dot} SB for
[20:29] SeaBASS or it has to be a text file {dot} txt. This is required. So, data files, they have header
[20:39] and they have columns of measurements here. So, usually it starts with begin header and ends with end header,
[20:50] begin {underscore} header and {underscore} header, and then you can have a number of parameters here. Uh you can have investigator's name, you
[21:01] can have affiliation, email address, experiment, if there is cruise, which kind of data um these are the northern and southern
[21:13] latitude and eastern and western latitude longitude boundaries of the region where in situ data are taken. Missing data value, there is water depth
[21:25] that can be specified or it's not applicable, then you can say NA. Um Um there several parameters you can
[21:34] specify. These are optional, but delimiter is is mandatory. In here it says says how the data are delimited. It's here it
[21:45] says comma, but you can have a space, then you have blank in between or you can say tab, then they are tab delimited
[21:52] data. This is very important. Also important is fields, where you have what is in this column. So, it's
[22:03] station, station, uh there is latitude, longitude, this is time of observations, depth, and then there is uh CHL or chlorophyll,
[22:15] and units for each of these. Station has no units, so none. Latitude longitude in degrees, time time uh hour minute second, depth in meter,
[22:29] and chlorophyll in milligrams per meter cubed. So, header describes what's in these columns, and then data are
[22:38] actually just listed in lines, uh delimited by this delimiter. So, this is in situ measurement, this is header.
[22:46] Oh, important to note is that once you put this in situ data into this format, then SeaDAS can read SeaBASS file. So,
[22:56] that is also important to keep in mind that we're going to use SeaBASS into SeaDAS along with satellite data.
[23:04] So, let's look at the SeaDAS website to search and download in situ data, which we can use along with satellite data to
[23:13] validate or develop algorithm later on. Um as I mentioned earlier, we'll look at case study of Gulf of Mexico.
[23:22] So, what we're going to do is go to SeaDAS website and select the region of Gulf of Mexico.
[23:28] Then select temporal range for which we're looking for in situ data. Uh we will download SeaDAS files and
[23:35] view the format. More importantly, we're going to look at this site. It's Gulf of Mexico Coastal Ocean Observing System or GCOOS.
[23:45] And this has independent measurements, independent of SeaDAS. Uh there are cruises going on and and data taken in
[23:54] Gulf of Mexico by this program. So, we'll look at those data, download selected files, and prepare GCOOS data
[24:02] into SeaDAS format so that both SeaDAS and GCOOS data can be read into SeaDAS and can be uh used along with the
[24:12] satellite um image processed data. So, that's what we'll look at next. Once we're done with that, we will also look
[24:20] at um MODIS and VIIRS data. So, let's start with SeaDAS first. I'm going to go to the SeaDAS uh website
[24:30] here. here. Uh this is the website we just saw in the presentation. Here's the get data uh
[24:36] link. link. Um I encourage you to search this site. There's so much information, so you can explore and see uh what different way
[24:45] you can download data by cruises, by experiments, by investigators, different fields. fields. Bulk download is available, SST time
[24:53] series. Uh validation search for a particular region. We're going to focus on Gulf of Mexico. So, So, any region you want to look at, file
[25:03] search is the link you would click on. And here is the range for which measured between these dates and archived between
[25:14] these dates. So, we can start ideally with MODIS. So, it's 2000, but but since we want to look at both MODIS and
[25:24] VIIRS, let's start with 2012 and because VIIRS on SNPP was launched in in 2011. 2011. So, I'm going to start with
[25:36] pick years for in situ measurements, which are uh starting from January 1st, uh 2012 to current and same here.
[25:53] So, this is the temporal range. And here we can if we know the exact latitude longitude, we can enter
[26:02] um south north west east uh coordinates or you can just draw approximate box, which is what I'm going to do here in
[26:11] Gulf Gulf roughly covers Gulf of Mexico. So, I'm just going to do that. And here are the coordinates
[26:21] used now. There other options. We're going to leave that as default for now. Any water depth, any string. Uh what we're going
[26:31] to to make sure is that we have chlorophyll in the measure in situ measurements. As I mentioned, we're we are going to focus
[26:40] here in in one parameter, which is chlorophyll A concentration, uh but you can do the same with say particulate
[26:47] carbon. This is suspended particulate matter. You can look at nutrients, different uh in situ parameters. You can
[26:55] uh For example, we're just going to look at uh chlorophyll. And then, you can perform file search.
[27:03] Once you do that, it tells you total number of files available for this region, for the selected temporal range,
[27:12] and this is the water depth, um and then the product. And here are all the files you can view
[27:21] more files in in in one column. And so, there are 29 files, and just by clicking on it,
[27:32] you can save it in a directory, which I already have done. Uh I've saved several files. So, let's
[27:41] look at uh those files. So, look at an example. So, notice that they all end in {dot} sp.
[27:53] And let's see if If you click on one of these files, you will see this begin header, and
[28:03] there is also end header in between all the metadata. Uh most importantly, these are north, south, west, and east la- latitude,
[28:13] longitude uh coordinates, and delimiter is space here. So, as you can see, these columns or these numbers
[28:21] are separated by space. Uh fields are described as year, month, day, hour, minute, second, latitude, longitude, station, depth, chlorophyll con-
[28:31] chlorophyll, and these are uh non-photosynthetic non-photosynthetic uh pigmentation. So, we are interested in CHL here. Uh so, here you can see the
[28:42] units, also. This is in milligrams per meter cubed. And so, year, month, day, time, time, latitude, longitude.
[28:51] This is um station. This is depth in meters, and this is chlorophyll uh concentration in milligrams per meter
[28:59] cube. All these files have different uh dates. And in your exercise, you will download a file for your own study. So,
[29:09] this this ends the SeaBASS uh data search and download demonstration, and we also looked at the file format.
[29:20] So, next, we will try and get one of these SeaBASS files into SeaDAS to get in situ data along with MODIS and VIIRS
[29:28] images. And for the demonstration purpose, I have chosen one file, this 2C7 2C7 30B, etc., from SeaBASS that I
[29:38] downloaded. Here are all the metadata parameters. parameters. And you can see that space is the daily meter here, and fields and units are
[29:47] given here. What to note here is that there are 4 days of in situ data, um October, November 2013,
[29:56] uh that's 3 days, and then um in 2014, April, there is 1 day. Now, in if you want to compare
[30:04] uh this is chlorophyll data, by the way. So, if you want to compare chlorophyll in situ data with uh those derived from
[30:11] MODIS and VIIRS, we want to make sure that we have uh cloud-free some pixels available where where in situ data are.
[30:21] And for that, we can check um two websites. For VIIRS, it is uh NOAA NOAA Ocean Viewer, and for MODIS, it's NASA
[30:31] WorldView. WorldView. And here, uh in in in WorldView, you can see MODIS true color image. So, white
[30:41] uh parts, the white color shows clouds it's it's So, here it's overcast, more clouds. Here it's uh not completely
[30:49] overcast. overcast. This These are the year month date. So, 2013 26th October. This is the first day
[30:56] where we have in situ data. You can see that part of uh Gulf of Mexico especially where the
[31:03] data are is is partially cloud-free. So, we can use that date date and if if we go to November
[31:12] and we go to say this is 21st, that's another in situ day. There are more clouds. Um if you go to 17, which is yet
[31:22] another day for in situ data, um all these parts are cloud-free. Along the coast there are some clouds. And uh
[31:31] you can also check it for April 2014. Now, next week we will see how to look at multiple days along with satellite
[31:39] images. But today let's just pick one day and I'll pick 26th of October to view along with uh
[31:47] MODIS and uh VIIRS data. So, again, let's make sure that this is um NOAA site ocean OC view.
[31:57] Uh if you look at VIIRS SNPP and if you go to 2013 uh uh October October 26th.
[32:10] 26th. You can see that again this part is more or less cloud-free. So, uh for demonstration, let's just look at 26th
[32:17] of October along with MODIS and VIIRS um images. So, what uh we will do next is download uh data for uh MODIS and VIIRS.
[32:29] And for that, we are going to use NASA ocean color website. Uh so, let's go to website. And here there is data. We went
[32:40] through this in our uh previous webinar also. You go to data and and pick level one and two browser.
[32:48] Here is the calendar for different missions. First thing to choose is date. So, let's see 2013 October
[32:57] October and here is the calendar for that. So, let's pick 26th of October. Next here in the select one
[33:07] or more regions Gulf of Mexico is already given here. So, let's pick that. Uh Gulf of of Mexico
[33:17] Mexico and make sure that Aqua MODIS and SNPP VIIRS are selected. And once you have that, you can say find swath.
[33:27] And this gives you all the swaths. So, A files are MODIS files and V files are VIIRS files. And you can see there are
[33:36] multiple swaths for each day. So, we have multiple images for uh MODIS and VIIRS for 26th of October. You can
[33:44] simply click here and download uh save on your computer. I've already pre-saved, but you can click on it and
[33:53] it gives you what to save. We are going to save this ocean color uh file. You can also have other files. This is uh
[34:01] level one files are there and um uh SST and inherent optical properties are there, but we are going to look at
[34:09] chlorophyll. So, ocean color file. So, click here and save that. Uh I've already saved that, so I'm not saving
[34:16] it, but it shows exactly where you have. So, this is a very small part of Gulf of
[34:21] Mexico, but for each of these swaths, just click and save. If you order data, uh you can have bulk order data and in
[34:30] the previous webinar we've gone through those steps. So, let's just have all these swaths and look at these images
[34:37] along with SeaDAS data. So, that's the next step now. Uh I have already downloaded um VIIRS and MODIS swaths as shown here.
[34:47] Uh we will open them in SeaDAS. However, since there are multiple swaths, what we're going to first do is
[34:54] mosaic them together so we have single image for single day for Gulf of Mexico. So, for that, uh you will go to where
[35:03] SeaDAS is saved and open SeaDAS. Once it opens, here is the symbol to use for mosaicking different swaths.
[35:12] Uh you can go here and I/O parameters, you can say plus and uh then you can shift and select them all.
[35:25] These are MODIS swaths. We're working with MODIS first and then open. So, it adds all of them here. Next, what you
[35:33] want to do is make sure that they are in geographical projection and that they are uh for variables,
[35:44] once you click here, it shows different bands available in this file and we're going to look at
[35:50] chlorophyll A concentration and choose that. And then you can run. Uh before that, you can go back to I/O parameter
[35:59] and save MODIS. MODIS. Uh Uh I think this is October. October. It's 2014. Mosaic uh and you can run.
[36:14] Uh Uh when it completes, it gives you a message. So, it's trying to uh mosaic all these swaths and uh
[36:23] if there are overlapping pixels, it averages uh pixels. So, it takes average pixels for that. And so, once it is done, you will get
[36:32] this message, and you will see that the mosaic appears here. You can close this. And if you go to bands, this is one band
[36:42] that we mosaic, chlorophyll A. You can do other reflectants and other data as well. So, it opens
[36:50] this data, chlorophyll data, uh mosaiced for 26th of October from Modis. You can add land mask by clicking here.
[36:59] Um so, land mask, you can pick color. Let's pick gray. Create mask. And you can see Florida
[37:06] here in this um eastern shore, but it puts uh looks better with land mask. And so, here's
[37:14] where we have data. Here there are missing data uh because of clouds, as we saw that um this part was clear
[37:21] relatively. And so, uh this is chlorophyll A concentration from Modis. Now, if you want to bring in SeaBASS
[37:29] data, you have to first open an image. Uh on its own, in SeaDAS, you will not be able to place uh SeaBASS data because
[37:38] uh according to coordinates, you will put the data in. So, once you open the image, you can click here, go to file,
[37:48] import, vector data, and SeaBASS data. So, I have saved this file, but I have saved only with 11 uh 26th of October.
[38:00] And so, if you click here, um uh so, out of four days, I've just uh selected subsetted just for 26th of October, and
[38:10] then I say open. And here, the data are added. You can zoom in. So, click in this and zoom in it. You can see
[38:19] um um these are the points where in situ data are available. If you want to change this color or
[38:27] symbol, you can click Here's the vector data. Here's the file that we added. Uh you can click here. Go to layer, layer
[38:38] editor. editor. Uh and then you can change this color. Let's make black. Um stroke and fill data you can
[38:48] Uh and then you can pick any symbol here. It would be a cross or a star or
[38:54] you know, you can change. So, that just um way to make it um more visual. And so, now we have added
[39:03] this data. Uh notice that you can s- When you say close all products, it says that has been modified. Do you want
[39:13] to save it? When you say yes, then you are saving this project um in CIDAS format and then you will be
[39:20] able to open that later. So, this is C-BASS data into um MODIS mosaic image. I've done the same with
[39:30] VIIRS data. Um Um collected all three swaths for 26th of October 2013 that we downloaded from NASA Ocean Color Web and made a
[39:41] chlorophyll image and also added C-BASS data. So, here uh you can zoom in. I just used different symbology. Uh but
[39:50] it's the same in situ data. So, here it's MODIS. And here it's VIIRS. So, now you will be going through the same
[40:02] steps in the exercise um using different C-BASS file and different dates for images just to learn this procedure. And
[40:10] in next session next week, we will learn how to compare in situ and um satellite data. Next step that we want to see is
[40:19] um um if we had independent data other than SeaBASS, suppose you had in situ data from either buoy or from some ship-based
[40:28] measurements, can you use that with MODIS and VIIRS to either validate satellite data or look at what kind of
[40:36] biases are there or if you want to develop algorithm, can you use your own data? And so for that,
[40:43] we're going to look at some independent data and that is going to be from G- Coos, so I'm going to
[40:50] close this SeaDAS file for now and look at G- Coos data for the same day, how to download
[40:57] that and then we'll again come back and put those data into SeaDAS. So, I'm going to stop this and
[41:08] go to G- Coos website. So, here's the G- Coos Gulf of Mexico Coastal Ocean Observing System site. And
[41:16] you can read about this, how data are collected, how many organizations are involved, involved, and what different data sets are
[41:25] available including meteorological and weather data sets over Gulf of Mexico. We're interested in what quality data especially chlorophyll
[41:34] A concentration. So, let's go directly to data portal. For current year, you can go to this HTTP data request and
[41:43] select a geographical region subsection of Gulf of Mexico and get the data. For our date, 2013, let's go to web
[41:53] accessible folder where past data archived. archived. Here you will see that different options again are available. We're going to go
[42:02] CSV by observation so we can pick chlorophyll A concentration. Also note here all the parameters available, mass concentration of chlorophyll in
[42:13] seawater, this is given in microgram per liter. So, if you convert that to milligram per meter cube, it's the same
[42:21] number because 1 microgram is 0.001 milligram and 1 liter is 0.001 meter cube. So, it they are equivalent. So, we
[42:33] are going to use the same numbers and consider that as milligram per meter cube the same as in SeaBASS. So, we're
[42:41] going to go to CSV by observations 2013. 2013. You can see all the parameters are given for this is January
[42:52] and we will look for October of 2013 and we want mass concentration of chlorophyll for October. So, we
[43:02] click on here and I have already saved this file. Let's look at the file that I saved. This is GECOS October 2013.
[43:11] And And here are the stations. If you see, there are several. They go by numbers here. And this latitude
[43:21] longitude, so four to five stations. You will see that these are pretty high temporal resolution data every 15 30 minutes they
[43:33] are taken for entire day. And we have just one image for 20 6 of October from MODIS and VIIRS each.
[43:44] This is chlorophyll concentration in microgram per liter or milligrams per meter cube. So, what we're going to do
[43:54] is let's find first of all 26th of October, which is what we are going to work with. And so, we can
[44:02] filter this data and search for 26 time and and So, here you will see 26th of October
[44:13] for 2013 entire day in 15 minutes or so. We're going to pick one time which is closest to the Aqua satellite overpass
[44:23] and that is 1:45 p.m. Um so these data are in Greenwich Mean Time or UTC time. So, if we take the difference
[44:35] closest, we are going to uh take 2:00 p.m. and that is 18 uh Z. So, let's look for 18 Z data and you
[44:47] can see these are the stations 18 Z 2 p.m. So, this is um 2:00 p.m. over Gulf of Mexico and I have saved these
[44:59] data in a separate file. So, this is 26th of October 2013. Okay, so this is in SeaBASS
[45:07] format. So, first I saved uh 26th data in Excel uh file and then I used SeaDAS template and created this SeaDAS format
[45:23] file so that we can read in um SeaDAS. So, same thing it is header um um begin and end space delimited and there
[45:34] are five stations and these are the data. If you have your own observation like GAC data, you can make uh SeaBASS
[45:43] format file and work in SeaDAS and compare with uh remote sensing data. So, now that we have uh this data in
[45:51] SeaBASS format, let import it into SeaDAS so that we can look at uh these data along with MODIS and
[45:59] VIIRS. So, anything other than SeaBASS, if you have your own data, own measurements, then you can put it in
[46:07] this format and just like that, you can take them, import them into SeaDAS. Um we already have this SeaDAS project
[46:15] we're working on MODIS and VIIRS data. We put this SeaBASS um points from earlier files, if you
[46:23] remember. Now, to put GAC's data, I've exactly done the same like we did, go to import, vector, SeaBASS data, and then
[46:33] imported the file um this GAC's 26th October October 2013 2013 that we just created. And so, if you
[46:43] turn that on and zoom out, they're uh further south, it's there in here. Uh let's focus here.
[46:54] And um we can change symbology to see it better. Um we can take this color so it stands out.
[47:06] Okay. Okay. And here you can see these points. These are GAC's data. So, overall, if you see,
[47:13] you have SeaBASS data from earlier uh file that we had, and this is what we created. And this is also same for
[47:23] VIIRS. Here, again, you can do the same thing like before to see it better. You can pick this color again.
[47:34] And maybe make this circle. So, now you can see these are GAC's data we just put, and these are SeaBASS data. So,
[47:45] this is This is where we're going to end today's exercise. So, now you will have lab time. So, let me remind you here um
[47:55] First, when you start working with SeaBASS or ocean color data, you will have to log in with NASA Earth data
[48:01] credentials credentials so that you can download data. You can work on exercise one. You can start working on it.
[48:09] We will be online. So, if you have any questions, we can help. But, you must have downloaded the exercise from the
[48:16] website or here from the meeting site. So, you you will be following exactly the same steps that we just showed. Only
[48:24] thing is that you will be using different data. Hello, everyone. We can start with the question and answer session now.
[48:42] And again, I want to thank the SeaBASS team members here, Daniel Noles and Ben Young. They have helped us with a number
[48:49] of questions, and they are here to answer answer and also help with some some characteristics that we might have
[48:58] missed. missed. So, a question one is, is SeaBASS data available only for the US or for the
[49:06] whole planet? I I believe it's not just US. Global oceans are covered. You can go to the map, and you can also look
[49:17] find find draw over the map and see where the data are. And if anything you want to add,
[49:26] Danny or Ben Young, please do. Uh yeah, yeah, it would be global wherever um wherever missions and uh
[49:36] cruises are available. Great, thanks. Why is SeaBASS files in SeaBASS the data is not requested? Only time is
[49:50] requested. Um no, we have requested time. We also picked time special domain and if you scroll down below the map
[49:59] towards the bottom of the that selection page, page, we selected chlorophyll data to download. You can choose other data. So,
[50:08] data can be selected. Is there an automated way to generate a C-Bass file header for already structured data?
[50:24] So, Danny and Vinyard, do you have any um um answer for that? I I believe there is a
[50:33] You can make a template where you can provide data and make a header file. Can you repeat the question? I can't see
[50:44] anything, so. Oh, okay. I I guess you can click on the QA link link um um in the chat box,
[50:54] but the question is that can header data in C-Bass be generated automatic Can Can you automate a way to generate C-Bass
[51:04] file header? Uh, Uh, uh that that I don't know. That would be part of the C-Bass team. You can
[51:14] certainly cut custom edit these C-Bass files if you have your own data, but I don't know about auto-generating these.
[51:25] That That question could be posed on the forum. There is a C-Bass um But, I'm not aware of any tools, but
[51:35] they may have something for auto-generating. auto-generating. Okay. Thank you. Next question is, I'm currently using a Windows system. Can I still go ahead and
[51:50] carry out the exercise? And the answer is yes. Um on our site website, the instruction is given both for Windows
[51:58] and Mac for SEADAS as well as OCS-W. It's a little involved for OCS-W, but yes, it they work on Windows machine.
[52:14] Question five is about um if values of -9999 are present in the required SEADAS data, are these values preserved when
[52:25] preparing for file for SEABASS? So, uh you can ignore them because you you will not be plotting them or not be using
[52:34] them, but you if there are many missing data and you just want to keep the whole record, if you specify missing data in
[52:42] the header, then it knows that these are missing data and they will not be plotted. So, question six is how do I download
[52:54] EC2 data from SEABASS? We had the demonstration for that, and the exercise also guides through these steps.
[53:04] Uh question seven is can you please share the link for SEABASS data download? And it's shared here. Uh it's
[53:09] also given in the presentation and in the exercise. The question eight says I'm trying to install SEABASS after successfully
[53:21] installing the SEADAS. The problem is that the SEADAS has failed to detect Python. Um Um So, SEABASS is some you are just trying
[53:36] to get the file, I believe. Um I'm not sure what you mean by install C-bass, but um
[53:45] C-bass has failed to detect Python. You do need Python 3.6 or above, I believe. Right, Danny? Um I think I don't remember the
[54:01] the the number. Yes, I think that if you look at the requirement, requirement, how you require I think it's 3.8.
[54:11] Okay, 3.8. Okay. I think when they say install C-bass, they probably just mean loading the file. file. Yeah, that's what I I think that's what
[54:22] Yeah. Yeah. So, I think if you update your Python version, that might work. Um I correct myself. We need the Python
[54:30] 3.6 or later. Yeah. Thank you, Bin Yu. Uh are there any global product for SPMs? SPMs? I believe um so SPM is part of the
[54:47] C-bass uh data list, if you see. So, best thing would be to keep the domain global and
[54:53] search for SPM data. And we will also check that. I'm installing the OCSW plugin in C-bass, but it is quite complicated to
[55:07] install. install. Is there any way to walk me through the installation process in Uban Uban? I think
[55:16] think uh the procedures already there, step-by-step step-by-step um um instruction. instruction. Uh Selvin has put them for Windows,
[55:25] right, Selvin? Selvin Hudson Odoy uh from our team has gone through these steps and that document should be
[55:33] available from the website. Uh hey Amir, can you hear me? Yes. Okay. Um the instructions for that
[55:43] um they are the same for Ubuntu, which is a Linux operating system, as they are for Mac OS.
[55:49] The instructions for that, I just needed to go through it again. I will be posting that sometime today or tomorrow
[55:56] for you to be able to walk through that exercise. Okay, thank you, Solomon. So, yeah, I think before next week when
[56:03] we actually use OCS SW, you will have the instruction. Question 11, once I download the data from C bars as a {dot} SP file, I should
[56:17] open it in C bars directly, isn't it? But it doesn't work. Am I forgetting some steps? So, um you should be able
[56:25] to, but if you if you tell us what the error you get uh one thing that um
[56:34] Shawn, you may want to explain, we noticed that if you if you save um text file, which is not just simple
[56:44] text, it you know, then it adds this return character, and sometimes that doesn't work. Shawn, you can explain it better, maybe.
[56:53] Yeah, so if you're if you're saving a lot of these as as as text files, which is what you should be doing, or as a
[56:57] {dot} SP, uh sometimes it defaults to the RTF, rich text format. And so, what you want to do is go into your system
[57:05] preferences, uh depending on whatever uh text editor that you're using, and just make sure that you change that from a
[57:10] rich text um uh font to just a a plain vanilla text editor, and that will uh and that should
[57:17] work. Um but if not, and what I will do is I'll repeat what Amita just said. If
[57:21] you are getting error messages uh it to help resolve or or troubleshoot, if you will be more explicit and let us know
[57:27] exactly what those error messages are saying, we'll be uh better able to assist you. All right, thanks.
[57:32] Great, thanks. I might be able to add to this a little um you want you want to
[57:37] think of SeaDAS as a satellite data um that you're loading in satellite data and that SeaDAS is additional data that
[57:47] gets added in as a layer on top of that satellite data. So, what you have to do is you you have to
[57:54] first load in a satellite data scene like a MODIS and then you have to click on that, open a window probably in in in
[58:04] um that band or at least um be um have selected the satellite data. So, now SeaDAS says, "Okay, I have
[58:13] satellite data here." Um and then you're allowed to add the SeaDAS as a a vector uh data layer on top of that satellite
[58:24] data. So, then when you open a SeaDAS file, you don't go open SeaDAS. You you go to file then uh
[58:34] Um hold on, it's file then import and then vector data and then SeaDAS data. So, you're specifically telling it that
[58:43] it's going to be SeaDAS data that you're loading in. So, that way it knows that this text file like what it is.
[58:50] And um you're loading it in as a layer on top of your satellite data. So, that's probably where you go might be
[58:57] going wrong is you might be just trying to load it in directly. Yeah, that's a good point because you
[59:04] have to uh if you maybe in the demo we we mentioned this that you have to first
[59:10] load your satellite image, then you can add this vector layer on top of that. Question 12 is I'm doing all the steps
[59:20] that they indicated uh it does not give me any results. What could be the reason? So, if you are trying exactly which
[59:31] steps you're talking about, you already have satellite images in C-DAS, and then you are trying to add
[59:38] uh C-BAS data to it, or exactly which steps are not giving you results? Uh please let us know specifically.
[59:47] Question 12. So, it could be the symbology. Sometimes it's there, but it the color is such that it's not showing up in the
[1:00:00] satellite image. That's possible. Question 13 is, I log into C-BAS and enter data date range, area of
[1:00:18] interest, select chlorophyll as product, and when I select results, all data is reset. I'm not sure. If you go through the
[1:00:36] exercise, there are screenshots given. And if you go through the demo, which you which will be uploaded soon in next
[1:00:44] 24 to 48 hours, the recording, um you should be able to see Uh question 14, not directly related
[1:01:06] here, but it says, "Can we measure water depth of small water bodies using remote sensing?" sensing?" So,
[1:01:14] So, um um I think the new mission that's coming, SWOT, that should be able to help with
[1:01:20] that. that. Um Um we we did reservoir height and bathymetry webinar last year and in our set and then we will provide link here
[1:01:31] so you can visit that. I don't know if the I don't know if this is relevant to this 14 question, but
[1:01:50] there is a bathymetry from external sources that can be integrated into uh SeaDAS, so you can know how deep that
[1:02:00] the water actually is where you're analyzing the data. But if you're talking about the satellite itself knowing how deep the water is,
[1:02:11] um, um, it it can only see as deep as it can see. So there's a there is one
[1:02:17] uh product KD490 which is an attenuation of how deep it can see, but that doesn't mean you're seeing to the bottom
[1:02:26] of the uh water. So question 15, um, it says that the SeaDAS file, um, this should be downloaded and then
[1:02:45] delete lines um, with dates other than 11th October. There are several dates listed in the file. Can you explain where exactly to
[1:02:55] delete lines? So if you look at the dates in the file in in the data columns, you will on different rows are
[1:03:02] different dates. You just want to keep 11th October for now. I mean, if you keep all the dates, you will get those
[1:03:11] um um points in the image because it as long as they're in the file, they will go on
[1:03:18] to image. But if you are trying to compare in situ data with satellite data, data, then you want to make sure that at least
[1:03:25] the dates match, not the time. So, cut everything which is date other than 11 October. That's what the instructions is.
[1:03:49] One one of the rule of thumbs that SeaBASS SeaBASS uses in a validation step where where they're
[1:04:00] they're they're comparing with satellite data in general, they they like to have satellite data within 3 hours of the
[1:04:08] measurement. measurement. Of the you know, um of the in situ data measurement, but that all depends on your your own um
[1:04:18] purposes of studying the water and and the variabilities of that, but in in general, that's sort of a a rule of
[1:04:25] thumb is a 3-hour window is what tends to be used is what tends to be called validated data.
[1:04:35] Whether whether a a station SeaBASS station is is validated to a particular satellite scene that there's a
[1:04:46] several factors that go in, whether the view angle is okay, whether there's stray light or clouds around and and uh
[1:04:56] and the temporal alignment. Yes, we'll talk a little bit about that next week, but you're very right you're
[1:05:03] right because right now, the we're just focusing on same date, but actually it's the window should be as short around easy to data
[1:05:14] plus or minus three hours is what usually is used for either validation or even for development of
[1:05:21] coefficients. So question 16 is I added the SeaWiFS data on Modis 11th October mosaic, but when I
[1:05:33] went to investigate the reason how many do you see on the image? Can you explain the difference? I look for the S. SB
[1:05:42] file and see one row of data. Um do I make a mistake? I At least there are four lines I believe. I can go back
[1:05:51] and check. Um So if if it shows as one point, but if you zoom in that there are at least
[1:06:00] three points visible. So I'm giving you the answer of the question. And then you can go back and see .SB
[1:06:07] file file um how many lines are there and do you see corresponding points on the image? That is the question.
[1:06:24] They might want to make sure they downloaded the right SB file as well cuz they may have multiple files there as I
[1:06:33] was saying about validated files. So there could be um a a you know, a similar file that only has
[1:06:41] one one one line in that file because it's only validated file uh point stations. Um that's but my guess is he's got a
[1:06:51] different file that he's downloaded. Yeah, that's possible. Question 17 is can we do the same exercise using SNAP software?
[1:07:03] So I I have not used SNAP to do this processing, but some of the features are similar in SEADAS and SNAP like both are
[1:07:12] derived from BEAM. Um, so it's possible, but I have I have not used SNAP for this processing.
[1:07:20] Yeah, that this uh aspect should be the same. I don't think we've uh modified anything for SNAP specific to uh SEADAS.
[1:07:30] So, you'll know right away if you get SNAP and and do um file um you know, if
[1:07:37] it has the C if it accepts the SEADAS format, but I believe it does unless it's something that we added, but in
[1:07:44] general as we um add stuff to SEADAS, it gets migrated over to uh SNAP some of the stuff, not everything, but it's a
[1:07:54] it's in very close alignment. The difference between SEADAS and SNAP is most the um well, it it varies as we're going
[1:08:04] along, but it it's it's sort of the same software at at its core, but SEADAS comes um already with the OCSW
[1:08:14] installers and some um some modifications and adjustments that are different, but I think this is the same.
[1:08:24] same. Okay. Okay. Thank you. So, question 18 is I have installed SEADAS SEADAS uh in Windows 10 with Python 3.10, but
[1:08:33] when I run SEADAS, it says remote server is down and OCSW is not accessible. Please start the OCSW remote server.
[1:08:43] When I'm trying to configure the OCSW remote server, it asks for the server address, which I didn't find anywhere.
[1:08:51] Yeah, so Selwyn's been working on that, has spent a lot of time in figuring this out. out. It does not work directly. You will have
[1:09:02] to go through uh Ubuntu, I believe. Through a virtual machine. And these steps will be posted very
[1:09:11] soon, today, tomorrow. We have also posted this question with Ocean Color form and not sure what the solution is here. So, best thing
[1:09:33] would be to use a virtual machine configuration. configuration. And use that on Windows. So, So, can you talk a little bit about the pros
[1:09:50] and cons of SEADAS versus SNAP versus GEE? GEE? So, SEADAS, I've not used SNAP for the same processing. I've used or I've at
[1:10:00] least seen detailed demos for using SAR data. data. More for on-land flood detection and so I'm not sure I can I'm in a position to
[1:10:15] compare SEADAS and SNAP. They should have pretty much very similar features features because they both are derived from the
[1:10:26] same software beam. Um Um versus GEE. So, GEE has if the data are available in GEE. So,
[1:10:38] like SEADAS data, you would have to upload in GEE as an asset somehow. And try and read
[1:10:46] that as a layer with your image. So, MODIS, Landsat where MODIS and Landsat definitely are available in in GEE. So, you don't have
[1:10:57] to download data. On the other hand, um the atmospheric correction used the only top of atmosphere radiances are
[1:11:07] available in GEE currently from MODIS and Landsat. So, atmospheric correction um um whatever you find is done by USGS
[1:11:20] um um program or algorithm not the same that uh ocean biology group has used for SeaDAS. SeaDAS. So, I I would say that um for quick
[1:11:33] looking at uh something GEE might be useful because data are there and you can quickly kind of look at them.
[1:11:40] Uh but if you are trying to compare in situ and satellite data, then you would have to uh put SeaDAS data or somehow
[1:11:50] import that into GEE before you do that. SeaDAS, on the other hand, can automatically read SeaDAS formatted
[1:11:57] data. data. So, uh for algorithm development, um if you want to use GEE, GEE, um um it might handle time sequence part
[1:12:13] better than SeaDAS GUI. Um on the other hand, OCSSW all the routines that we're going to see next
[1:12:21] week, those can be run through command line and bulk processing can be done quickly if you're familiar with Python
[1:12:29] or um any other programming language. Um uh uh you on Unix machine or Linux machines, easy to run. Um so, both, yeah. I I
[1:12:40] would say that um if you are trying to develop algorithm using SeaDAS uh with its various options. Um
[1:12:54] using in in in Linux through command line in bulk processing mode would be better better to quick checking GEE would be easier, I
[1:13:05] think. But then you're you you just have um um you don't have options for atmospheric corrections only unless you upload your
[1:13:15] own uh algorithm and and incorporate them in. So, ease of GEE is that all the data are
[1:13:23] there, you can quickly click them to your domain and and those things are there. You don't have to download
[1:13:30] anything. anything. Um Um that's the biggest advantage of GEE. So, again, depends on what exactly you're trying to do, then you can select
[1:13:39] the the the tool. SNAP, of course, I I'm not in a position to comment because I've not
[1:13:44] used SNAP for this processing. So, So, sort of Bart he said this a little bit, but um you can consider CE DASS and SNAP
[1:13:55] to be the exact same tool. It's um being developed. Um so, sometimes CE DASS will get ahead of um SNAP on
[1:14:04] certain things and then the those things will migrate over to SNAP and um vice versa. You can um
[1:14:12] install the CE DASS toolbox inside of SNAP. Uh so, um that's um um there's a few So, I would more say that
[1:14:24] you know, that SNAP is tailored towards the um Sentinel 3 community and um uh ESA and the CE DASS is more tailored
[1:14:38] towards the NASA ocean color uh uh community needs. Um and but these, you know, our our long-term goal is that
[1:14:47] they're going to be uh quite quite similar. similar. Yeah, as we develop and we're sharing code between
[1:14:56] the two um um um softwares. So, and uh it's uh when I talk about SeaDAS and SNAP, I'm
[1:15:08] talking about SeaDAS, the current one, eight. eight. We we used to have SeaDAS seven, which was was in a similar fashion, um similar to
[1:15:19] BEAM. So, it's an ongoing development of these two softwares where we we do try to keep when SNAP does a release, then we merge
[1:15:33] in in their changes. So, in general, SeaDAS will have everything SNAP has and a little bit more.
[1:15:42] Because we've added stuff. Um there will be some stuff in SNAP that we don't in SeaDAS put in there, but you can install
[1:15:51] it if you want because there is all these different toolboxes. So, um you know, if you get SNAP, you'll get
[1:15:59] some of the ESA toolboxes, which you may not get in SeaDAS, but you can install it inside SeaDAS. So,
[1:16:07] um don't worry too much about the differences. You can kind of consider them as the the ultimately sort of the same software,
[1:16:16] just tailored differently. Thank you. So, So, hold on, let me go over to next question. Is Sea SeaDAS has
[1:16:32] little information on in situ data of the Arabian Sea. Is there another source of in situ data? So, I
[1:16:40] quickly went through and checked at there are data um in Arabian Sea if you just go and draw a box around the region
[1:16:49] of interest in Arabian Sea. You should be able to have some data because if I if I cover
[1:17:01] huge part of Arabian Sea, Persian Gulf, everything then I do get almost 155 C bus lines. And so
[1:17:12] if you draw small box around the region of your interest and I search for chlorophyll there are
[1:17:21] these 20 files a very close to the coastal Arabian Sea near Indian West Coast. How do I install update OC SSW manually
[1:17:36] on Windows? So that instruction will be coming soon. This question 21. Question 22. When I try to add the land
[1:17:46] mask it is not loading and C does is not responding. Any suggestions? Not sure if you once you choose a color and create mask
[1:18:08] if you click on create mask hopefully it will create and respond. So you click on the land mask
[1:18:23] a symbol and then there are multi there is water there is coast and land mask. You go to land, select the cover and
[1:18:32] then say create mask at the bottom and it will hopefully create the mask. Depending on the speed of your machine
[1:18:43] and the size of the file you have loaded, loaded, maybe you have some RAM issues. You can always try There's a tool called
[1:18:55] crop. You could take your image your loaded satellite data and zoom in and crop it so it's small
[1:19:04] and then try to put the land mask on that. That way you can at least rule out whether
[1:19:11] it's it's computer computer RAM issues or something else. So for your information in our first webinar, which we did a couple of months
[1:19:23] ago, we we demonstrated the crop feature. So you can go back and review that if you want to crop an image
[1:19:31] in SeaDAS. Uh question 23, can I import ocean model data, data, chlorophyll, chlorophyll, indeed after re-gridding and compare
[1:19:45] with satellite imagery? I believe you can put it in SeaDAS format. format. Or can you add If it's a net CDF file, I believe it you
[1:19:58] should be able to open it in SeaDAS. Right, Danny? Yeah. Yeah. Yeah. As a raster, yes. So you can
[1:20:12] uh get ocean model data in into that. Question 24 is where can I get these standard SPM satellite products like
[1:20:25] Aqua MODIS chlorophyll A products? Uh I I think there is standard SPM product available. From sat- satellite derived, there are
[1:20:38] the the originally, there are papers published papers you will see where people have in situ SPM measurements and they derive
[1:20:46] their own algorithm to get satellite based SPM, but SPM from satellite is not available through through NASA OB PG site.
[1:21:10] So, uh question 25 is, can you please repeat the data name for bathymetry for Q- question 14? So, in SeaDAS, it is inbuilt and I'm
[1:21:23] sure we should be able to get you name of that file, um that bathymetry data. There's also a tool in SeaDAS called
[1:21:43] bathymetry that you run and you it looks like a ocean wave at the top of the icon
[1:21:51] and you click on that and that will create create bathymetry and topography bands and mask that you can use.
[1:22:15] Yeah, I will I will share my screen um if not today, maybe next time just to show where the bathymetry
[1:22:26] option is. If you go to SeaDAS as Tanya said on top next to the landmass you will see this wave ocean wave kind of
[1:22:35] symbol. That's where you can access bathymetry data. Question 26 is OCS SW is not working on Windows operating system. I think um
[1:22:55] they're working on that and should be available soon. I can't enter the SeaDAS page. Question 27, apparently they are blocking all the
[1:23:10] requests requests from this network because from other network network if we can Um I'm not sure. It's an open source
[1:23:33] data and if you if you log in with NASA Earth data credentials it should let you in. I'm not sure why the
[1:23:41] um um this IP address is blocked. I'm not sure. Yeah, and SeaDAS could be experiencing some issues.
[1:24:12] So yes, um the date and time mentioned is is 20090210. 20090210. That's where it's all it's 2009
[1:24:22] uh February 10th. That's what it is. So thank you everyone for attending today's session. Hopefully you can work
[1:24:59] on exercise one and finish that before next week. Next week we will be working with OCS SW but
[1:25:07] considering the difficulties Windows machine are having right now, we might shorten that part and work more with
[1:25:15] already derived data or we will provide process data for you to work with. So um hope to see you next week.
[1:25:24] Um and um we really want to thank the SeaDAS team for their help, especially Daniel Knowles and Bing Yang. They've
[1:25:34] been very helpful. Daniel has also been a guest speaker with us earlier about SeaDAS. So thank you both for attending
[1:25:43] this webinar and helping us with all the question and answer. Um and then we on behalf of my colleague
[1:25:49] Shawn McCarthy, um um I want to thank Sabina Hudson-Odoi for his effort in putting OCS SW and SeaDAS
[1:25:58] for Windows steps together um and team that helps us organizing the webinar, our set team, that's Brock
[1:26:07] Lovins, Sarah Kachelle, Jonathan O'Brien. O'Brien. Um and we also want to thank our colleague Juan Torres Perez. Um he also
[1:26:15] is part of this team, working with ocean um um biology. So, it's a team effort, and we thank you for
[1:26:25] attending today's session. Uh we hope to see you on 7th December, same time. Thank you.
