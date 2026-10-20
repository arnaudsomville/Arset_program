# Applications in Urban Heat Island Mapping Part 2/2

`https://www.youtube.com/watch?v=k4ub-CNo6Pg` · id 293 · 2:01:39 · module 302 — Introduction to Thermal Remote Sensing and Applications in Urban Heat Island Mapping

[00:02] Welcome back to our ARSET training series, Introduction to Thermal Remote Sensing and Applications in Urban Heat Island Mapping.
[00:11] Today is part two of our training series, Applications in Urban Heat Island Mapping. My name is Savannah Cooley. I'm a
[00:20] researcher at NASA Ames Research Center with the Bay Area Environmental Research Institute in Mountain View, California, and I'm a trainer with the ARSET
[00:28] Ecological Conservation Team. We have two instructors for part two, myself and our guest instructor Glenn Holly, who is a research scientist in
[00:42] the Earth Science Section of NASA Jet Propulsion Laboratory. For part two, we have two objectives. First, participants will be able to
[00:56] filter and visualize ECOSTRESS land surface temperature data using provided R-based data processing workflows. Second, participants will be able to
[01:08] downscale native 70-m ECOSTRESS LST data to a fine 10-m spatial resolution using a random forest machine learning model
[01:18] implemented on an interactive Google Earth Engine interface to analyze neighborhood-level urban heat patterns. If you have questions during today's
[01:30] training, you can put them in the Q&A box within WebEx at any time. We encourage you to put your questions
[01:38] into the Q&A chat as they arise. The earlier you share your questions in the chat, the more likely it is that we
[01:44] will be able to respond to them in real time during the Q&A session. If there are questions we do not have
[01:52] time to address during the live Q&A session, we will make sure to collect these and post the written answers to
[01:58] the training page within a week after the training. In other words, we will try to address as many questions as we can today.
[02:06] All of these questions and answers will be posted along with the additional questions and written answers to the
[02:11] training page within a week after the training. training. Before we delve into our next section, let's review some of what we learned in
[02:20] part one. Remember, satellite sensors measure radiance and convert it to brightness temperature, which is defined as the
[02:29] temperature a perfect blackbody would have to be to emit the radiance we observe. observe. The problem is that real surfaces aren't
[02:39] perfect blackbodies. They have emissivities that are less than one. If we assume everything has an emissivity of one, we'll systematically
[02:49] underestimate surface temperature. Let's do a knowledge check with a numerical example. What is the radiometric temperature of a
[02:59] sandy desert surface with emissivity equal to 0.9 and kinetic temperature equal to 320 Kelvin? Take a minute or two to work this out on
[03:12] your own before I walk through the answer. With a sandy desert surface having an emissivity of 0.9
[03:27] and a kinetic temperature at 320 Kelvin, we can calculate the radiometric temperature as follows. We would raise the emissivity to
[03:42] the power of 0.5 as shown here, multiply that by 320 Kelvin. Kelvin. And then the result is
[03:59] 300 and 11.7 Kelvin, which corresponds to answer D here in the set of answers. This implies that there is about an 8
[04:13] Kelvin underestimate of the surface temperature if emissivity is ignored. The key takeaway is that the lower the
[04:21] emissivity, the larger the gap between what a sensor measures and the surface's true temperature. This is why accurate
[04:29] emissivity is so important and why we will spend time delving into the topic in this training. With that, I will turn it over to Glynn
[04:42] to tell us about ECOSTRESS land surface temperature data. >> Okay, good morning everyone. My name is Glynn Hulley.
[04:54] I'm a research scientist at NASA's Jet Propulsion Lab. We have spent the past 20 years or so specializing in
[05:02] thermal infrared remote sensing and also spectroscopy applications and science. Today I'll be walking through how we sharpen, also sometimes called
[05:12] downscale, ECOSTRESS land surface temperature from its native 70-m resolution down to a 10-m resolution using a random forest machine learning
[05:21] approach and we'll be doing this within Google Earth Engine API. API. This technique opens up a whole new
[05:29] range of applications for thermal remote sensing, specifically in urban settings. And by the end of the session, you
[05:35] should be able to run the pipeline by yourselves and create your own high-resolution maps over any city in the US
[05:41] using data since 2018 when ECOSTRESS first started taking observations. Okay, so I'll be first going over some
[05:54] introduction on ECOSTRESS followed by urban heat islands and then we'll go into some of the theory of the
[05:58] downscaling. So, um um ECOSTRESS was launched in 2018. Um, it's docked on the Japanese experimental module on the International Space
[06:10] Station and has been delivering thermal infrared observations since about August of 2018. Um, we're currently funded through about
[06:19] 2029 which is really great considering that the initial mission was only supposed to last about 1 year.
[06:27] Um, but we've been extended due to the um credible success that we've had in science and applications from from the
[06:34] data from the instrument. Um, the native pixel resolution size is 70 by 70 m resolution and we acquire data every on
[06:42] average 3 days of the most parts of of the US and also of the globe. And also one unique thing about
[06:49] ECOSTRESS and that we'll cover in the next few slides is that we can take these observations over the entire
[06:54] diurnal cycle. Uh, we also have sparse five spectral bands in the thermal infrared which is also unique amongst current spaceborne
[07:03] thermal instruments. So, moving on to some of the actual characteristics of the instrument. Um, what I've shown here is an actual
[07:12] example snapshot of a of a what we call a scene or a granule that we observe from the the space station. Each of
[07:20] these snapshots, think of a camera snapshot, is around 400 by 400 km wide. So, really wide snapshot and within that
[07:27] we have 70 m resolution pixels which is about the size of a of a small football field.
[07:33] field. And this is currently the highest resolution thermal data from space. Now, with the precessing orbit of the
[07:39] ISS meaning it doesn't come over the same place on Earth every single day like Landsat and Aster, for example. Um
[07:47] this image shows the number of observations we get over a 3-month period over the diurnal cycle, which is
[07:53] shown in UTC time on the on the left Y axis here. So you can see that ECOSTRESS
[07:59] in blue captures a lot more observations than both Landsat 8 and 9, and also throughout the diurnal cycle, whereas
[08:05] Landsat only captures at a single time around the early morning over 12 hours every day. Um the five thermal bands, um which
[08:14] you've probably learned about in Savannah's tutorials, are located between 8 and 12 micron range. This is the classic longwave thermal infrared
[08:23] region where we can retrieve the surface temperature from. And the these five bands, the more typically the more bands
[08:30] we have in this region, the more accurately we can derive the surface temperature and also the spectral
[08:35] emissivity from thermal infrared measurement. measurement. Um so just some quick latest news from from ECOSTRESS. Um currently the
[08:44] collection two products are available from NASA, but we are delivering collection three science products. Um so specifically the
[08:52] level two land surface temperature product is is a has an imminent release at the LP DAAC. And there's a number of
[08:58] improvements in that product product. Specifically, we have a new sea surface temperature algorithm and a lot of
[09:04] improvements to the data quality and also cloud masking. Also very exciting for us this year is that um and I'll show be showing you the
[09:12] of course the demo in Google Earth Engine, is that the entire ECOSTRESS land surface temperature archive has now
[09:18] been ingested into Google Earth Engine over the entire continental US. So this is fantastic news for for us and opens
[09:25] up a lot of data and science and applications that we can use with other data within Google Earth Engine.
[09:31] We have uh more than 1,000 peer-reviewed publications so far, and since early this year acquired more than 606,000 of
[09:39] these 400 by 400 km snapshots I showed you earlier. Um we also have a new applications page
[09:46] uh referenced here. Um you can see that we um support a diverse discipline of different uh science applications.
[09:54] Um Um The one of course we'll be focusing on today is is urban heat and urban resilience.
[10:01] resilience. So, what makes ECOSTRESS unique? As I mentioned earlier, most um thermal sensors in space have a sun-synchronous
[10:08] orbit, meaning that they cross overhead in the mid-morning hours. In this case for Landsat and assets, around 10:00 or
[10:14] 11:00 a.m. And you can see in this Los Angeles temperature profile that I've shown that the morning overpass, which is this
[10:22] white line going across the screen, typically misses the warmest times of the day, the hottest times of day in the
[10:27] peak afternoon hours. And this is critical critical for urban heat mapping because you you will miss the maximum temperatures during um a
[10:37] typical urban heat urban heat extreme event. Um if we look at ECOSTRESS, uh we sample across the entire full diurnal cycle and
[10:46] seasonal cycle, which is exactly what makes it uniquely valuable for heat stress and urban applications. Um so then moving on to urban heat
[10:57] islands, just some I'll give some background on urban heat islands, what we've done so far with ECOSTRESS, and
[11:02] then we'll move on to the fun part, which is the the downscaling. Um Um So, why does this matter to us? Well,
[11:10] heat waves are a lot of people don't realize this, are the single biggest weather-related killer in the United
[11:15] States. They more than double that of of floods, tornadoes, and hurricanes combined even. So, as you can see on the
[11:22] chart on the left, this is the the NOAA National Hazards Statistics chart. Heat fatalities are running by roughly
[11:29] 200 deaths per year over the last decade. And a lot A lot of people don't realize this because they're You can
[11:35] call them the silent killers. They They don't cause as much physical destruction as other natural disasters, and this so
[11:41] you don't hear that hear about them as much. much. And the downstream impacts go well beyond just mortality. For example,
[11:49] there's increased risk of heat stroke or hypothermia. These are the most common year visits. And a lot of these are are
[11:56] are typically make a lot of sense. Increased electrical demand from the use of AC, higher wildfire risk, especially
[12:04] in in Cali the Southern California region in the later parts of the year when we have Santa Ana events. And then of course
[12:10] degraded air quality due to the increase in in near-surface ozone. Um and these health effects also exacerbate, for example, other
[12:21] underlying conditions like cardiovascular and also mental health and cognitive function. Um over the last few years, we've spent
[12:29] a lot of time with a a lot of very enthusiastic summer students at JPL where we have now mapped most of the
[12:36] extreme heat events with EcoStress in cities across the world. So, what you're seeing here are snapshots from these images in European and US
[12:44] cities from Prague to Toulouse all the way to Birmingham, Milan. And sharp EcoStress data have been featured in both BBC articles
[12:54] and also the European Space Agency typically features an article every year on how cities can adapt to heat waves,
[13:00] particularly during the nighttime. And it's also increasingly increasingly up by city planners, public health teams worldwide, and
[13:09] a lot of the media within the within the US. US. Um so, I'll go I'll go through some
[13:16] examples and why EcoStress is unique in its ability to capture urban heat islands and urban heat in general. So,
[13:22] this is a case study over the what is called the Cherbourg heat wave in July 2023 broke all kinds of records across
[13:29] Europe in terms of heat. This is over Athens in Greece. On the left, we have a daytime EcoStress
[13:36] scene, and on the right is a nighttime EcoStress scene at 11:00 p.m. And so, in the daytime scene, you can see
[13:44] an actual urban daytime cool island effect, which most people don't realize is that during the daytime in certain
[13:50] cities, cities, the urban area can be actually be cooler than the than the surrounding agricultural area that is driven by very
[13:56] hot bare rural soils during the summertime, where we have generally less healthy vegetation. Um but at nighttime, that picture flips.
[14:05] So, the city retains its heat due to a high thermal heat capacity during the day, and then that stays significantly
[14:12] warmer than the surroundings at nighttime. And it's that nighttime urban heat island that is really drives up
[14:19] heat-related illness in in cities around the world. And it's only really EcoStress that can capture these type of
[14:25] dynamics and changes in the urban heat island. island. This is another uh fantastic example from Macy Macy Runckle at Chapman
[14:34] University, who was with us last year, looking at how urban heat island intensity changes over a full 24-hour
[14:40] period in Delhi, India, in this case. So, e- each circle here represents the UHI, which is the difference in the
[14:48] rural and urban temperature um every 2 hours throughout a typical summer cycle in Delhi. So, you can see
[14:56] that the urban heat island is at maximum uh during about 10:00 p.m. at night, and then throughout the early morning hours,
[15:03] it slowly diminishes as we go clockwise um around the images here. And then during the daytime, you can see that
[15:10] that flips. So, around 10:00 or 12:00 p.m., that flips to a cool um a cooling urban heat island effect. So, the city
[15:18] is actually cooler than the surrounding dry urban or rural landscape. Um another real striking example here that got a ton of news media attention
[15:28] back in 2024 was led by Ashley Agatep, also from Chapman and another summer student of ours. In 2024, there actually in 2023 as well,
[15:38] there was suddenly a very sharp spike in hospitalizations from um people in the Phoenix area from severe contact burns. And these were
[15:47] mostly due to two several extreme heat events that occurred over those two years. years. And actually resulted in almost 50
[15:54] fatalities. For example, the gentleman here on the left actually lost his leg when he fell on the on the hot sidewalk
[16:01] walking out of the grocery store and wasn't able to get up because every time he put his hands on the on the sidewalk,
[16:06] it would be so hot that he wouldn't be able to push himself up. And he actually lost a leg from third-degree burns um as
[16:13] a result. So, what we did here was we mapped second the second-degree burn risk by downscaling EcoStress temperatures down
[16:22] to 10-m resolution over the city and extracted it over the sidewalks and paved areas. And then we correlated that
[16:29] with the time it would take to get a second-degree burn if someone came into contact with that surface.
[16:35] So, as an example here, you can see over most of the Phoenix area, specifically in the the poorer regions in Maryvale,
[16:42] for example, um where the surfaces exceeded 150° F. That's almost hot enough to cook an egg on on the sidewalk, um by the way. It
[16:51] would take less than 3 seconds to get a second-degree burn risk if you fell on the sidewalk or the or the or the paved
[16:57] area. area. And so, the this work was um was was really popular and was featured in Scientific American, LA Times, New York
[17:05] Times. It even made the nature image of of the month um for for 2024 in August, I believe. And so, it's it's this kind
[17:13] of public health communication um that thermal remote sensing can directly support, especially for city health officials. Um so, in the next part, we're going to
[17:26] Savannah's going to lead you through a hands-on exercise with land surface temperature and in LA County, where
[17:31] she's going to step through how to visualize EcoStress LST using a number of different software. We're going to
[17:37] use a Piers to download the data and then visualize it with QGIS and also um R. >> Thank you, Glenn, for that excellent
[17:50] foundation on urban heat islands and EcoStress land surface temperature. We are now transitioning to a hands-on exercise exploring nighttime land
[18:00] surface temperature in Los Angeles County. County. Nighttime LST is a metric that is often just as critical for public health as
[18:09] daytime peak temperatures, because sustained nighttime heat prevents physiological recovery from heat stress. By focusing on the nighttime, we can
[18:22] accurately quantify the thermal gap created as impervious urban surfaces slowly re-radiate trapped heat, while natural and irrigated spaces provide
[18:34] cooling through evapotranspiration. In this demo, we will use R to define and determine if these natural cooling
[18:45] benefits actually persist as a heat wave intensifies, allowing us to identify the most effective locations for thermal
[18:53] interventions like tree canopy investments. The two objectives for this demo are to access, filter, and visualize EcoStress
[19:05] LST data using a Piers, QGIS, and R. And also to interpret LST characteristics for assessing urban thermal resilience.
[19:18] The activities for this demo include the following. following. There are some preparation steps including cloning the GitHub repository
[19:30] or just simply downloading the R script. Second would be to make sure that you have R and QGIS installed if they're not
[19:39] already. already. And then installing any required libraries that the R script lists. The script processes ECOSTRESS land surface temperature products by
[19:56] converting Kelvin to Celsius and applying mandatory QA and cloud masks to ensure only reliable surface temperature pixels are analyzed.
[20:07] The script then defines and isolates specific geographic boundaries for the Chatsworth Nature Preserve and an adjacent commercial area as an example,
[20:16] which allows for a direct comparison of different land covers. In particular, we will evaluate nighttime cooling dynamics
[20:28] by analyzing the differences in heat release between natural open spaces and impervious urban surfaces during the September 2024 Los Angeles
[20:40] heat wave. We will assess thermal resilience by determining if the cooling benefits of urban green spaces hold or erode as heat
[20:50] accumulates over multiple days of extreme temperatures. By extracting individual 70-m pixel values into a tidy data format, the
[21:00] script generates mean temperatures and standard deviations to quantify the thermal behavior of each site. Finally, the analysis will produce a
[21:12] suite of sophisticated plots including side-by-side LST maps, violin box plot distributions, and a thermal gap bar charts to visualize how the temperature
[21:24] difference between green and gray spaces evolves over a 23-hour window. One thing I'd like to flag is that the
[21:33] nature preserve we focus on for this example comparison with the urban commercial area is in large part
[21:41] possible due to irrigation. So, you will notice that in many of the unbuilt lands surrounding the urban area in the hills,
[21:53] for example, outside of Chatsworth, the temperatures aren't much lower than what we see in the urban areas.
[22:01] This is because although there is vegetation in those areas, there is no irrigation. irrigation. So, the evaporative cooling capacity is
[22:11] much lower relative to the managed parks and other gardens that are well irrigated. irrigated. So, water helps plants stay cool, and if
[22:22] water is limited during a heatwave, plants will close their stomata to conserve water at the cost of having a
[22:29] higher temperature. I won't discuss this in in the demo itself, so I wanted to just state that
[22:36] now as something to consider when we think about temperature impacts of green spaces. spaces. With all that said, let's start the
[22:45] demo. One thing I'd like to note is that these data from ECOSTRESS were obtained through an Appears
[23:02] request. An Appears is the application for extracting and exploring analysis ready samples. Um, it's a tool that has
[23:11] a number of different data sets where through the extract feature, you can get specific points or areas that are also
[23:22] able to be bounded uh both spatially and temporally. So, I'm going to go ahead and log in here.
[23:28] And just show briefly the request process. Um, there is a more in-depth instructional video for accessing ECOSTRESS data and other data
[23:40] sets with Appears that um will be linked to in this training resources page. For the purposes of demonstrating here, I'm
[23:49] just going to show how we submit an an Appears request. So, I'm going to give this request a
[24:02] title. title. And then I have an existing area of interest in Los Angeles County in California that will be the focus of
[24:14] this request. This data request. So, I'm going to go ahead and um upload that file here. I'm adding here
[24:29] a GeoJSON file that is defining the area of interest over LA County for which the data will um
[24:41] were requested for. And this demo will focus on one of the hottest summers on record, which was the summer of 2024th.
[24:55] This in early September. And so, the start date is going to be uh September September 3rd 2024.
[25:15] And the end date will be September 9th. The product we're interested in is ECOSTRESS land surface temperature.
[25:39] Um land surface temperature. This is the one that we will put this on. We will also want the quality control uh
[25:50] data layer QC file as well as the cloud mask. So, those are the three data sets that will be requesting here.
[26:03] And the file output file format will be GeoTIFF. GeoTIFF. Optionally, we can use calendar date and time for output file names.
[26:16] And then, I'm just going to suggest uh include geographic, which is the WGS 84 EPSG 4326 uh coordinate reference system.
[26:30] With that, we'll go ahead and submit the request. Appears requests, depending on the size of the request and the amount of data
[26:42] that are are being requested, can take uh uh some time to process um from hours to even a couple days.
[26:52] And so, to speed things along for the purposes of this demo, I already have an existing request that
[26:59] I submitted ahead of this uh demo and have downloaded that data from the email uh that that is sent automatically when
[27:10] the APPEARS request is ready to to be viewed and downloaded. The way that I will look uh for these data, if you're already
[27:21] logged in, you can click explore. So, because this was a small small area and number of files, the APPEARS
[27:32] was able to process it relatively quickly. And so we have the results of this request already to download.
[27:42] Here are the files that are included. Where we will just go ahead and download all of them.
[28:02] And And this may take a little while. And notice that for the purposes of this demo, I'm only using six out of the 22 files
[28:15] here, which ended up being the ones that had the the fewest number of clouds and kind of were the the covered the most
[28:21] area area um in the study area. So, again, it's okay to just use the data directly from
[28:29] Zenodo, but I just wanted to illustrate how those files were obtained. And the download is now complete.
[28:47] So, So, this is how the data were obtained from appears. Now, we will go to QGIS and
[29:01] inspect the data visually. Let's start by adding a base map. I'm using the HCMGIS HCMGIS plugin plugin to
[29:18] to bring in a satellite base map. Let's zoom in to Southern California and add our data. For now, we will focus just on the land
[29:46] surface temperature data. data. We'll do the filtering with the quality control flags and the cloud mask later
[29:56] on. Um let's go ahead and visualize symbology that has that shows a color ramp. ramp. Notice that the values here are in
[30:16] Kelvin, so we haven't yet to convert these um into Celsius, which we'll do later in R, but
[30:24] for now, just to get a sense of where the hottest and coldest temperatures are, we can go ahead and apply this uh
[30:34] color ramp. Feel free to change if you have a different ramp that you'd like to look at. There's lots of different
[30:39] options here. >> And we'll do the same for the second day that we'll be looking at, which is
[30:51] September 5th. So, notice that these two ECOSTRESS acquisitions acquisitions from these two different days have some amount of spatial overlap, but
[31:12] are not fully spatially overlapped. And correspond to almost 24 hours difference between these two acquisitions. So, just by visually inspecting, we can
[31:30] see that this area of Los Angeles County has a mix of impervious surfaces, kind of built-up areas, as well as
[31:42] um um more vegetated areas and green spaces. And just through visual inspection, we can see uh differences in temperature in these
[31:55] urban areas where there are larger um um green spaces. So, let's start by looking at the the Chatsworth in northwestern corner of LA
[32:12] County, about 30 miles from downtown. And And we will zoom in here. What you're looking at is the
[32:29] Chatsworth Nature Preserve on the left, and then an adjacent commercial area um which is uh immediately east of the
[32:41] nature preserve. These two areas sit almost side by side. So, very similar weather and both experiencing the same heat wave. The
[32:57] question we're asking today is whether the surface underneath makes a measurable difference in nighttime temperature and whether that difference
[33:04] holds up after days of sustained extreme heat. heat. So, So, after the first night of the heat wave
[33:14] on September 3rd, ECOSTRESS captured this image and note that the naming convention here is in UTC, which in in our case we're looking
[33:29] at September 3rd at about 11:00 p.m. local time, so Pacific time. Even just at a glance, you can see cooler tones in
[33:39] over this nature preserve compared to the surrounding area. With with the built areas showing warmer temperatures compared to the nature
[33:51] preserve. And then we can also be curious about the the the second overpass, which is captured almost exactly 24 hours later on
[34:05] September 4th around 10:30 p.m. local time. So, let's go ahead and check that and just see. Note that there are some differences in
[34:18] in in temperature patterns here, but but the overall kind of takeaway is that it there seems to be a consistent
[34:27] difference even after another full day of the heat wave where there are lower temperatures in this nature preserve
[34:35] compared to the surrounding built areas. And by this point, LA had baked through a full day of extreme heat. Burbank hit
[34:48] 108° Fahrenheit that afternoon. So, these surfaces had been absorbing solar radiation for 14 hours before the satellite passed overhead.
[34:59] And as I said, the general spatial patterns do look similar. The preserve still reads cooler than the
[35:06] commercial area, but is the magnitude of that difference the same? Has the heat accumulated enough that even the
[35:11] preserve can't recover overnight? That's what we're going to quantify in R. So, first we will navigate to the
[35:22] GitHub GitHub repository for this training where there is a readme file detailing detailing uh an overview, the prerequisites, data
[35:34] requirements, requirements, downloading process, and uh a few notes on on setup. Um Um we will go ahead and download the R
[35:47] script here. Go ahead and save this file to a location location on your local computer. And open the file in
[36:07] R Studio. Here we have the R script loaded. A written description of the focus of the script is here,
[36:23] which we also uh discussed in the slides leading up to this. So, I'm going to let let uh participants review this on your own
[36:35] time. time. The first section here, section one, is to load all of the libraries. Go ahead and load them. If there are any
[36:47] libraries here that you don't already have installed, make sure to install them. them. And And now we will go ahead and obtain the data
[36:59] for this demo, which is stored on Zenodo. Zenodo. So, So, make sure to update this for uh
[37:13] repo dir variable, which is where the data will be downloaded. Here, I've made a uh a folder 2026 thermal RS urban heat
[37:25] demo, so that's where I am keeping the data for for this demonstration. If you're following along, go ahead and update
[37:32] this variable to wherever you'd like to store the data. This is uh the the link to the data set,
[37:43] which has all of the EcoStress files. And then we will go ahead and uh in this portion of the script, it downloads and
[37:53] unzips the data, as long as it's not already there um in the first place. And I'll call your attention to
[38:02] the two files that were focused on. One is, like I said, the first night, September 3rd, around 11:14 p.m. Pacific
[38:11] time. time. And then we have night two, which is September 4th at 10:26 p.m. Pacific time. So, let's go ahead and run this section
[38:26] of the script. All right, that ran successfully. Section three focuses on is is the processing function for processing
[38:42] ECOSTRESS data. One important note I want to flag here because it's common point of confusion in ECOSTRESS workflows. If you look at
[38:53] the level two algorithm theoretical basis document, known as the ATBD, or older older tutorials, you'll see a 0.02 scale
[39:04] factor applied before the Kelvin to Celsius conversion of the data. And that scale factor is correct, but it
[39:13] only applies for the native HDF5 swath product, where integer storage requires that re-scaling step. What we're working with here are the
[39:24] the GeoTIFF tiled data, which are analysis-ready products from APPEARS, where the scale factor has already been applied and values are stored as float
[39:36] 32 in Kelvin during APPEARS processing. So, we will skip the 0.02 multipli- multiplication entirely and go straight
[39:46] to subtracting 273.15, which is what we do to convert um from Kelvin to degrees Celsius. And this is the line that applies the
[40:03] quality control flag, where we're only extracting bits zero and one. And so, this is the other thing that I wanted to
[40:15] highlight is just the QC masking, where the QC layer is a bit packed integer, where multiple quality flags are encoded
[40:24] in different bit positions within the same value. So, bits 0 and 1 carry the mandatory QA flag, where 0 means high
[40:33] quality and 1 means good quality. Bits 2 and 3 mean poor or cloudy. If we just wrote
[40:46] QC greater than 1 as a raw integer comparison, higher order bits unrelated to quality could slip us into masking
[40:53] pixels that are actually fine. So, the modulo 4 operation here extracts extracts only the two least significant bits,
[41:05] which is the standard bit manipulation approach for this kind of packed flag field. And finally, the cloud mask.
[41:18] The L2 user guide with updated in 2024 to explicitly note that in collection 2, cloud information is not propagated into
[41:30] the QC bit field. So, that means that QC filtering alone is not sufficient to filter out all clouds. So, you must
[41:38] apply the separate cloud mask layer. Our function here does both in sequence. So, I will now run section 3 of the
[41:47] code. Night 1 comes back at at roughly 13 to 29°C, and night 2 goes from about 12 to 35°
[42:16] C. C. That upper bound climbing from 29 to 35 already tells a story. After a full day
[42:24] of heat loading, the hottest urban surfaces are retaining substantially more heat by the second night. Um Um a quick note I'll say on
[42:37] the coordinate reference system situation. So, the file name contains 11N, which refers to UTM zone 11 north,
[42:46] but the GeoTIFF files themselves are stored in geographic coordinates, WGS 84 longitude and latitude. The 11N is part
[42:56] of the ECOSTRESS tiling grid naming convention, not the storage projection. So, to avoid any CRS resolution issues,
[43:05] we keep everything in WGS 84, which is EPSG 4326, and we define our AOIs directly in decimal degrees.
[43:17] So, this is our default AOI that we're looking into. If you remember what we saw the map on QGIS, we have the
[43:26] latitude and longitude bounding box coordinates for the nature preserve area in Chatsworth, as well as uh coordinates
[43:36] box around the extent of the commercial area that's adjacent to this nature preserve. So, So, for the homework, you all will be
[43:55] looking at this other area of interest to do a different um analysis in a different part of LA County. But, for
[44:03] today, we're We're to go ahead and And so, you can see this part is still commented out. Um so you I'm going to go
[44:11] ahead and run this section four here. Section five will produce a side-by-side map comparison where we can see these
[44:27] two EcoStress acquisition dates side-by-side with the two areas of interests highlighted. So, I'm going to go ahead and run
[44:41] section five where you can see we're using the ggplot package for visualization. You can see that these two maps are
[45:04] uh uh helping us visualize the data using an identical color scale which is intentional and important because when you're comparing two images
[45:15] temporally, you need the colors to mean the same temperatures in both panels. Um if each panel were auto stretched to
[45:23] its own range, warmer night two pixels would look the same color as night one pixels and you'd lose the ability to
[45:30] make a visual comparison. So, the green and orange outlines mark our two study areas. Even from the map alone, you can see the
[45:41] preserve tends toward cooler end of the palette in both nights. What we can't see clearly from the map
[45:48] is the magnitude of this gap or whether it changed between nights. That's what the next two figures will quantify.
[46:02] So, in section six here of the code, we are are pulling every valid 70-m pixel that falls within each bounding box for each
[46:14] night. night. Each row in the resulting table is going to be is one pixel, so one actual
[46:21] satellite measurement, and this gives us the full distribution, not just a single summary statistic, which matters because
[46:29] urban surfaces are spatially heterogeneous. A parking lot and a rooftop can behave quite differently, even within the same bounding box area.
[46:38] So, let's go ahead and run section six of this script. This provides a summary statistic table stored in the uh the variable DF
[46:57] summary, summary, where now we can quantitatively look at the mean land surface temperature in degrees Celsius, along with the standard deviation, and
[47:10] the number of 70-m pixels included in each of these areas. So, we can see from this numerically
[47:21] that the nature preserve on night one uh was cooler on average than it was on night two, which is expected.
[47:32] Um Um the standard deviation remains pretty close on both nights, although slightly lower on night two, which is
[47:40] interesting. interesting. And then similarly in the commercial area, we see an increase in temperature from 23.7° C to 26.6°
[47:52] C Celsius on night two in the commercial area. But now let's look at this uh um from
[48:03] from a a a full pixel level distribution for each AOI. AOI. So, that brings us into section seven
[48:14] here of this script, which is which will show a violin plot um with jittered uh raw pixels of the data values
[48:22] underneath. Let's go ahead and run this. So, the points you see are the individual 70-m pixels, and the violin
[48:34] shows the overall shape of the distribution. distribution. Where the box um um shows the interquartile range. And the
[48:44] raw points show you exactly where the data actually are. A few things to notice here. First, the preserve distribution is
[48:55] consistently cooler than the commercial area on both nights, which which we saw in the summary uh table as well. That
[49:02] gap is real and visible. Another thing to consider is the key comparison we're thinking about. Does the gap between the two AOIs
[49:16] change, or areas of interest, change from night one to night two? Hold that question while we look at the
[49:23] next figure here. So, in section eight of the code, our core question is after a full day of
[49:37] extreme heat on September 4th, do we still see the same thermal gap between the preserve and the commercial area on
[49:43] night two? So, we'll calculate the mean LST per area of interest per night and plot the absolute temperature for each area of
[49:54] interest across across both nights. Which shows whether each land cover temperature warmed from night one to night two, and then also the thermal
[50:03] gap, which is simply the subtraction of the temperature of the commercial area minus the temperature of the preserve on
[50:12] each night. If this gap shrinks, the cooling benefit of the preserve is being reduced by accumulated heat stress. But if it
[50:21] persists or grows, the preserve is maintaining its function even under sustained extreme conditions. So again, we're using the ggplot library
[50:35] to make these plots, and I'm just going to go ahead and run section eight. Let's increase the size here for easier
[50:51] viewing. viewing. Panel A shows the mean LST traject- trajectory for each land cover type across the two nights, with error bars
[51:02] showing one standard deviation. Panel B converts that into a single number, the thermal gap, defined as the commercial
[51:10] area mean minus the preserve mean. So, in this case, we see the gap remains very similar on night two, with slight
[51:23] 0.2° C decrease from 4.5° C to 4.3° C. This suggests that the preserves of evapotranspiration evapotranspiration and longwave emission are not
[51:34] overwhelmed by the heat event, at least not after two nights from the start of the heat wave. This supports the
[51:40] argument for urban green space as heat resilience infrastructure, not just as an amenity. Another possible outcome for subsequent
[51:52] analysis might be what to evaluate whether the gap substantially narrows um on further nights into into a heat
[52:02] wave. And for this particular heat wave, there weren't uh Eco Stress data available around similar times after
[52:09] these two days um for for comparison, but that's something to flag and to consider if you're interested in
[52:16] studying another heat wave in a different location. So, it'll depend on what data are available. Um but it's it's something that could be
[52:24] interesting to follow up with um looking at longer-term multi-day heat waves and whether whether even certain natural areas might have a
[52:34] threshold beyond which sustained heat stress suppresses their cooling function. So, this would be interesting to test in future work in other places,
[52:42] like I said. Um if a more prolonged period of the heat wave, the temperature difference between the two areas might actually
[52:49] decrease. So, this is really one big urban heat island resilience question. And it's why nighttime Eco Stress data can be
[53:00] valuable for urban planning, not just because it captures the heat island effect, but because it lets us evaluate
[53:07] whether specific green infrastructure actually delivers measurable cooling when it's needed the most. These are the kinds of analyses that
[53:15] urban heat uh emergency planners, parks departments, and climate adaptation offices um could could use for their local and regional needs.
[53:25] Data like this could identify acute cooling refugees, evaluate where tree canopy investments will have the greatest thermal return, and map
[53:34] residential neighborhoods where nighttime heat exposure is most dangerous, particularly for people without air conditioning. Now, I will turn it over back to Glenn.
[53:53] >> All right, so moving on to section four now, which is land surface temperature downscaling. Um this brings us to the
[54:01] central idea of today's talk. Um thermal sharpening or it's also sometimes called downscaling is often used interchangeably.
[54:10] Um the basic concept is to take coarse resolution thermal data or uh coarser meaning 70 m. It's actually
[54:17] that is the highest resolution available from space, but um um still still pretty coarse if you look at
[54:23] the urban environment. And then combine that with higher resolution data that is well correlated with temperature and
[54:30] that's the key here. And by doing that we can recover the thermal detail at a much finer spatial scale. In this case,
[54:36] we're going to go all the way down to a 10 m resolution. So, this is a nice example that
[54:42] illustrates that where we can go from what looks like blobs of cooler and and warm temperature features in the
[54:50] environment here. This is over the LA by the way. Down to 10 m where we can now start
[54:55] seeing very fine scale detail in the temperatures. We can see the differences between these hiking trails in Griffith
[55:02] Park, golf courses, freeways, building roofs, and so forth. So, so it opens up just a huge capability for us over
[55:11] specifically urban areas, but also in other natural um vegetation areas as well. well. Um so, as you can see these are two more
[55:20] comparisons over different parts of LA. The one I just showed Griffith Park on the top and the bottom is over the Long
[55:26] Beach Harbor area. But, as I said before, we can start really discriminating different urban features from one another. We can see
[55:34] for example, the hot Costco roof versus the cooler cemetery. Um we can see the difference between the freeway and and
[55:41] the uh much cooler fairways on the golf course, for example. Um so, this animation, let's see if it
[55:48] works. Yeah. This shows you the kind of detail that we'll we're revealing from the 70 m down to the 10 m level. This is
[55:55] over Pasadena, and you can see the Rose Bowl highlighted again in the top left corner there. And after sharpening, you can see that
[56:03] we can resolve the distinctive sort of cool areas north of the Rose Bowl on the golf course, and also the hotter parking
[56:09] lots and roads to the southern part of of the Rose Bowl. And we'll be going over that in a
[56:15] quite a bit more detail in the tutorial because this is actually going to be one of the uh venues for the upcoming
[56:21] Olympic Games in LA. And so, this kind of high-resolution thermal information is critical for heat intervention planning, and also um planning for shade
[56:30] interventions in in areas like this. Um this is I think this is a fantastic image. This was also created by a
[56:37] student of ours uh last year uh by Ashley Agatep. And it shows a downscale image over Paris during an
[56:46] extreme heatwave in June 2022, where they actually had to close down a lot of the public spaces and and museums
[56:53] in within the city because it was so hot. hot. Um this is this is um sharpened and then overlaid on Google
[57:00] Earth, which is why you can see the structural features of of the the actual urban area coming to play here. And I'll
[57:07] go through this a little bit. I'll show you how to do this in the tutorial as well. And also, it has its
[57:12] it has its caveats, too, which I will uh go through. But, you know, you can see individual neighborhoods, parks. You can
[57:18] see clearly see the Seine River and other infrastructure standing out uh with the temperature. And it's this kind
[57:24] of intra-urban thermal detail that you simply cannot resolve at the 70 m higher uh pixel scale. As I mentioned before in looking ahead,
[57:34] um, the Olympic Games is coming up in 2028 in LA. This is a sharpened ECOSTRESS temperature map similar to what we did
[57:41] over the Phoenix area where we pull out the temperatures over at the street level. level. Um, and what I've highlighted here is
[57:49] the actual venues of the Olympic Games, um, um, and there's just tremendous potential here for designing, for example, heat
[57:56] mitigation approaches, planning where to add shade both natural and man-made shade structures, and also cooling at outdoor events and watch party locations
[58:04] during the Olympic Games, and even extending these techniques to the coastal zone, coastal water temperature and water quality monitoring.
[58:12] Um, so I will be going over some of these these areas that that will be focusing on also for the Olympic Games,
[58:18] um, in the tutorial. Uh, so moving on to some theory of the actual downscaling, um, um, statistical downscaling what we'll
[58:27] sharpening is so what we're doing is we're disaggregating a coarse scale thermal pixel into its sub-pixel components.
[58:35] components. And the trick here is to use auxiliary data that has a higher spatial resolution that is statistically
[58:40] correlated with the land surface temperature, which is our target here. And so this illustration shows that quite nicely. It's from Chen et al. and
[58:49] colleagues and shows how a single coarse pixel, pixel, A1 in this case, gets disaggregated into four sub-pixels B1 through B4 using the
[58:57] relationships learned from the higher resolution covariates. And we'll actually be doing this at a finer scale, so we'll be taking one
[59:06] ECOSTRESS pixel pixel and dividing it up into 50 different individual, um, pixels. So that's 70 m to 10 m
[59:15] resolution. resolution. So at the highest level the workflow looks like this, um, we start out with ECOSTRESS at 70 m as
[59:23] our target variable, and then we assign predictive variables consisting of Sentinel 2. This is a European Space Agency sensor that was
[59:32] launched in 2015 and generates 10 and 20 meter high resolution visible shortwave infrared data. So, that is our primary predictor here
[59:42] is the reflect surface reflectance from Sentinel 2. We also include land cover types, built-up fraction, and also the
[59:51] elevation. elevation. The output then is a We run that through a random forest regression. We train the
[59:57] data at 70 meters and then we predict the final sharpened LST at the 10 meter scale. scale. So, you may ask, "Well, why do we use
[1:00:07] Sentinel 2 the spectral reflectance bands?" bands?" Firstly, we use We could use the There are some 20 meter bands as well that we
[1:00:15] have been using in the past, but in this tutorial, we'll be focusing on the 10 meter bands which gets a gets us down to
[1:00:21] that sort of street level resolution that we're after. So, the bands are located in the visible part of the spectrum. So, between 400
[1:00:30] and 700 nanometers. This is the part of the spectrum we actually see with our naked eyes. We have three bands there, bands 2, 3,
[1:00:37] and 4, blue, green, and red. And so, these bands the surface reflectance of these bands correlate with temperature because
[1:00:46] the more reflective a surface, the less the surface will be heating and therefore the cooler the surface will
[1:00:51] be. And this is a bit of a generalization that doesn't always occur, but it's a good statistical correlation with the
[1:00:58] temperature. temperature. We also then have band 8, which is the near infrared band. This is right on the edge of the infrared
[1:01:04] spectrum that ends at around 900 nanometers. And this band has actually the opposite information to the other
[1:01:11] three. So, it's in it's sensitive to vegetation health, chlorophyll content, water content, and it's one of the
[1:01:18] strongest predictors in fact of LST spatial variability in urban rural gradients whenever you have vegetation involved and we'll go over that a bit
[1:01:26] later as well. So, why does this work? So, what I plotted here is land surface temperature. Each pixel here has has an
[1:01:34] actual temperature on the ground and I've plotted it versus the NDVI which is a normalized difference vegetation
[1:01:41] index. Some of you may have heard of this. It's a band ratio between band 8 and 4 that I just showed you.
[1:01:47] And generally high NDVI values are greener vegetation and and are generally cooler and and the opposite is true with
[1:01:54] low NDVI values. Um so, because surface temperature is statistically tied to these surface reflectance properties, the bow bare low
[1:02:04] reflectance surfaces like roads, for example, example, um run hot. Vegetated high NDVI surfaces stay cooler and then on the bottom end
[1:02:13] of the spectrum here, we have high albedo surfaces like um white roofs, for example, or white roads um are also cool.
[1:02:22] And so, there's a sort of triangular non-linear relationship between surface reflectance and land surface temperature and these are the exact non-linear
[1:02:31] relationships that our machine learning model is going to be learning at the 70-m scale and then applying down to the
[1:02:38] 70-m scale. So, why sharpen ECOSTRESS down to these levels? Like what are the primary urban applications and what are our reasons
[1:02:48] for doing this? Well, there are six concrete reasons here. The firstly, we're able to, of course, resolve urban
[1:02:53] features from the 70-m down to the 10-m scale. Streets, parks, rooftops blurred together at the 70-m scale and we're
[1:03:01] able to resolve those. Um it lets us validate heat interventions at the scale at which they're actually deployed. So, think of
[1:03:08] cool pavements being applied over cities, cool roofs. Um it also it reduces our mixed pixel error, especially when we're in sort of
[1:03:18] heterogeneous neighborhoods. Um it forth forth it aligns with the parcel level planning data that the city agencies actually already use.
[1:03:28] Um it sharpens heat vulnerability mapping in underserved poor communities, uh which is critical, for example, downtown LA.
[1:03:36] Um and the last part here is really critical is that we apply this residual correction, which we'll we'll go over in
[1:03:42] detail, which means we actually preserve the radiometric by normalizing to that of the ECOSTRESS instrument. So, we're adding spatial
[1:03:50] detail, not inventing temperatures, if you will, and I'll show you some of these examples um in the next few
[1:03:57] slides. slides. So, at 70 m, you can think of we have a like a small city box scale temperature,
[1:04:05] and then after the sharpening, we end up with 10 m, which is equivalent to 49 pixels, and so we have a 50 times
[1:04:11] improvement in the spatial resolution uh using this methodology. So, why random forest for this task? Well, it's
[1:04:21] um inherently available within Google Earth Engine, which is great. And the basis for which it works is you take an
[1:04:28] ensemble of these what we call decision trees. Here, I've outlined them tree one through n. Typically, we take we usually
[1:04:34] start out with about 100 trees, but you can increase or decrease that value. And each of these is trained on a random
[1:04:41] subset of features. So, what I mean here by our features is that it's a subset of our different
[1:04:47] combinations of the predictor variables, and also the different pixels within the scene. And so, we then end up with a
[1:04:55] final prediction, which is an average across all of those trees. So, and it's a very powerful technique
[1:05:02] because it as I said before, it handles these non-linear LST and surface relationships. relationships. It's robust to outliers because it it's
[1:05:10] able to generate an ensemble um, um, mean, which reduces the variance in the data. data. And it's also transferable across
[1:05:17] scales. So, we train at 70 m and then we can predict at 10 m. Also, something that comes out of the
[1:05:24] random forest, which is really interesting, is a feature importance, um, information, which identifies which of our predictors uh were the most, um,
[1:05:34] sensitive or or the most important in arriving at our final result. And I'll go over that in a minute as well.
[1:05:41] So, in, um, from sort of a high level, this is what the, uh, sharpening in Google Earth
[1:05:48] Engine is going to involve. These are the different steps. We start with our training data and our target variable of
[1:05:54] ECOSTRESS LST at 70 m. We then train the random forest model within Google Earth Engine at the 70 m scale, and then we predict
[1:06:03] the 10 m final, um, temperature. And then apply this residual correction, which means we upscale the 10 m
[1:06:11] prediction to 70 m, subtract from the original 70 m observation from ECOSTRESS, and then we add that residual
[1:06:18] back to the 10 m result. And I'll show you that on the next slide. Um, so these are just some cutouts that
[1:06:25] I made, uh, from within Google Earth Engine at various steps along the way throughout the sharpening process. This
[1:06:31] is a cutout of a an area, uh, heterogeneous urban area here in LA. So, on the top in the middle here, you
[1:06:38] can see the original ECOSTRESS LST at 70 m. m. The next step is the initial downscaled LST. So, this is after applying the
[1:06:46] model at 10 m, we end up with this result. So, you can see immediately fine spatial detail coming out, uh,
[1:06:54] within the urban environment that correlates nicely with the the actual visible image on the top left. Now, you
[1:07:00] can also see that the actual absolute values of the temperature here are quite different to the actual observed data in
[1:07:06] the top. We don't see these sort of hot spots in the lower left and bottom uh areas.
[1:07:12] So, then after the residual correction I just explained, we upscale the 10 m to 70, subtracted from the 70 m EcoStress,
[1:07:19] and we end up with this residual corrected final LST at 10 m, which preserves the actual radiometric um
[1:07:27] information in the original 70 m resolution image. And you can see that these correlate a lot better now.
[1:07:34] Um so, I'll quickly go through uh what these predictors look like sort of at a much larger scale over the entire LA
[1:07:42] city and and uh county area. This is the area that we'll be focusing on in the tutorial today by the way by the way.
[1:07:49] Um so, this is the Sentinel 2 um surface reflectance. This is for band 8. This is the near infrared band at 10 m
[1:07:56] resolution. resolution. Um this is um provided by Copernicus and European Space Agency through Google Earth Engine. Engine. Um and so, we'll be using the blue,
[1:08:08] green, red, and near infrared bands. This is the uh near infrared band. And you can see here um immediately
[1:08:15] areas sort of features that pop out. For example, these wide areas that you see here with high reflectance are in fact
[1:08:21] green spaces. So, these are pretty much the golf courses around the LA region, which have a high band 8 reflectance
[1:08:28] because they're um um they're chlorophyllly active green types of irrigated um vegetation. And conversely, we have very low
[1:08:38] reflectance over um dense urban paved surfaces, mostly human-made types of surfaces. Um this is the NDVI as I spoke about.
[1:08:47] It's a band ratio between band 8 and band 4. High NDVI values uh correlate also to um
[1:08:55] dense and green vegetation, and conversely, bare soils and senescent vegetation and more urban materials have a very low NDVI. And conversely with
[1:09:04] temperature, of course, high NDVI values should have cool temperatures and low NDVI values should have hotter temperatures.
[1:09:13] temperatures. Um the other um predictor here that also is the built surface fraction. This is from the um
[1:09:20] European Commission's global human settlement layer available within Google Earth Engine. Um and this data captures gradients in
[1:09:28] urbanization that other land cover land use categories alone are aren't able to capture and especially useful in mixed
[1:09:35] peri-urban regions where you can see the fraction of the built-up area changing very rapidly into um more
[1:09:42] vegetated rural regions. And then our our fourth predictor here is is actual elevation. This is from NASA SRTM's 30-m product. We then
[1:09:53] resample that to 10 m for the training. And elevation really matters in fact in this region because the lapse rate alone
[1:10:01] uh explains a couple of degrees of LST variation, especially across these hilly areas of LA. Think of the Santa Monica
[1:10:07] Mountains here, the San Gabriels. And we want the model to learn that effect explicitly rather than sort of
[1:10:14] baking it into the residuals. And then lastly here, the star of the show. This is the ECOSTRESS land surface
[1:10:20] temperature at 70-m resolution. Um this is the actual image we'll be working with in the tutorial next. Um
[1:10:28] this was uh I believe on the 14th of August, 2020. This was an extreme heat wave event in LA. You can see the extremely
[1:10:36] hot temperatures here in the San Fernando Valley in the northern part here here um that is insulated from the cooler
[1:10:42] ocean breeze. You can see strong gradients here along the coastline uh having much cooler temperatures and then
[1:10:49] uh increasing to much hotter temperatures in the interior urban areas. areas. Um this was at quite a 4:00 p.m. in the
[1:10:57] afternoon, so one of the hottest parts of the day. Also, you notice that there's no cloud um artifacts in this image. So, there's
[1:11:05] a very nice clear sky day, which is why I chose this image. Also, notice that uh very distinctive cool islands here.
[1:11:12] You can notice that these sort of cool little areas within the urban environment. And again, these are these
[1:11:18] mostly golf courses, parks, green spaces that are um 20 30° cooler, in fact, than the surrounding urban landscape.
[1:11:27] And then I mentioned um the the feature importance outcome of the random forest. And this is really interesting and
[1:11:34] something that I will show you how to derive from uh the data in Google Earth Engine as well. And it's how the
[1:11:41] predictors actually rank in the trained model in terms of feature importance. So, So, in this case, elevation actually came in
[1:11:47] at at the top at 17.6% followed by the four Sentinel bands, all clustered around 17%. So, these four
[1:11:56] these five predictors are driving most of the information that is provided in the random forest, getting us to that
[1:12:02] 10-m scale. Um the built surface actually contributed about 11.4%, so pretty significant. But the actual land use
[1:12:10] land cover map um which I included in this example uh had a very low information content. And
[1:12:17] that's actually because it's derived from Sentinel-2 reflectance data. So, essentially, you don't want to add in variables that are correlated with each
[1:12:25] other. So, we should probably remove the land use land cover from from this case. All right. So, that's it on the theory.
[1:12:34] Um we'll now get on to the fun part here, which will be um the actual hands-on exercise where we'll be diving
[1:12:41] into Google Earth Engine and actually showing you how to produce these really nice striking maps over the urban
[1:12:46] environment. Before I get started here, I just want to preface this by saying that we do have everything I'm going to go through
[1:12:55] here, literally every step and click I'm going to make is actually available on a tutorial that we created
[1:13:03] in Microsoft Word. So, um we'll make these available so that you don't have to, you know, look
[1:13:10] through the video tutorial again and and listen to me going going through it all. Um you can actually follow along
[1:13:16] step-by-step every click and every move I make on this document tutorial that you can reference for later use. So,
[1:13:27] starting up from the beginning, um we're going to open a web browser. For example, it tells you here, go to
[1:13:32] code.earthengine.google.com. code.earthengine.google.com. You'll also need to sign up for a free Google account, um and you can do that
[1:13:40] going by going to this website, earthengine.google.com/signup. Um we also have a link to a YouTube video in our resource page, which
[1:13:50] actually shows you step-by-step on how to actually sign up for a free account on Google Earth to start and
[1:13:58] be able to do this tutorial. So, this is what you'll end up with if you start your Google Earth Engine page. Um on the
[1:14:05] left are your various scripts or pieces of code that you can store. We then have a docs page. You
[1:14:13] don't need to look at that. The assets are actually data that your code can operate on. We won't go into that, either.
[1:14:22] Um so, what you'll be doing is you'll be clicking new here. It's a big red icon, okay? Click new, you'll go to file,
[1:14:30] give it a name. Um I'm just going to call it sharp, but you can call it any name you want,
[1:14:36] and it'll create a new file, um um which you then can paste directly um the code that we're going to provide
[1:14:45] for you, which is the EcoSharp V1.1 code which you're seeing right here. Um and so that's that's how to get
[1:14:52] started. So you'll click save and then you have your JavaScript uh Google Earth Engine code ready to go.
[1:14:59] So a couple of just orientation things here. First and center, of course, you can see the actual code. This is
[1:15:05] JavaScript code. You don't need to even look at this if you don't want to. Um but you'll see the buttons on the top
[1:15:11] here showing how to run the code, reset the code. On the far right panel, you can see something called console.
[1:15:18] And this outputs various types of information that the code runs and we'll see that in a minute. Um for example,
[1:15:25] some stats on accuracy, uh what data was used at what time. Tasks we'll also go over um when we're
[1:15:32] going to finally export this data to a GeoTIFF file and open it in QGIS, you'll be able to run a task here to export it
[1:15:40] directly to your Google Drive account. We'll go over that in a minute. Okay, so again, we started um
[1:15:47] we're going to start over the Los Angeles region. Of course, I said we're going to start with that image that I
[1:15:51] just showed you. If you grab this little toggle here, you can actually move the the map up and down to um make it easier
[1:15:59] for you to actually see the data coming in. So I'm going to move it right up for
[1:16:03] now and we're going to hit run. Just simply hit run. And what you end up with is a user interface panel on the left
[1:16:10] and user interface panel on the right. Um what you'll see on the left, let's start with the left. You'll see a date
[1:16:17] range here. So in this case, I've put in a single date, the 14th of August, 2020, where I knew we had the scene over Los
[1:16:25] Angeles during the heat wave event. If you were to change this and say for example, go from June till July 2020,
[1:16:32] what the code will do is it'll take all the EcoStress observations over that time and generate a mean composite image
[1:16:39] over a date range. So we can have either look at a single date for a single image or create a
[1:16:45] composite from a date range. You can also see additional summer years. If we clicked on those additional
[1:16:52] years, we can create a composite over consecutive years over a fixed date range. So, if we want all the summer
[1:16:59] time average temperature across the entire emission period, can click on all of these years and generate a mean
[1:17:06] composite average. And so, this is often useful for city planners and managers that want to know what is the baseline
[1:17:12] average summer time temperature that we've experienced over the last 5 years. Um the next part here is the local time
[1:17:19] window. So, this is in hours of day. What I've done is here is I've converted this. You can convert to different
[1:17:27] time zones around the world. And that makes it easier where you don't have to deal with UTC time. So,
[1:17:33] we're in Los Angeles, we're going to click Los Angeles time zone. And in this case, we're going to look at
[1:17:38] um all hours of the day. We know there's one scene here. You can change this to if you just want the afternoon hours,
[1:17:44] say 12 to 18, we'll get all the data from the hottest times of day, 12 to 6:00 p.m.
[1:17:52] Um but let's go back to 0 to 23. Um the next part here is the max cloud
[1:17:58] tolerance. So, if you want less cloud on the scene, um you can decrease this value. You can
[1:18:04] go down to 10. I would suggest for a long-term composite that you go down to 10%. So, we don't want
[1:18:10] more than 10% of cloud on the scene. The cloud is already screened, by the way, so it won't be included in the data, but
[1:18:18] we don't want um to combine images where part of the image is missing and then we combine it with other images and you get
[1:18:25] some artifacts coming through. So, I would use 10 for a composite and use 30 for a single image is fine.
[1:18:34] Um then you have an option to draw a custom rectangle. So, if I click on that and
[1:18:40] click activate selection, and we just want to do this in the San Fernando Valley, for example, we can drag and
[1:18:46] drop and run our sharpening over that specific area. Um so, I'm going to clear that because what we actually going to do here is go
[1:18:54] to an EcoStress tile, and we're going to run the code on an entire EcoStress tile over this region. So, if I activate that
[1:19:01] selection selection and I click on anywhere in the center of the LA map, it's going to give us the
[1:19:09] uh tile boundary for this specific area. And I won't go through the details of the tile boundaries, but the um
[1:19:16] Sentinel We use the Sentinel-2 tiling structure here, which is based on the MGRS system. This is the military grid
[1:19:22] reference system, where the earth is divided up into these fixed tiles. They're roughly about 100 by 100 km
[1:19:28] wide. wide. And you can go and Google this and and learn more if more info on that if if
[1:19:33] you want. But, this is the tile we're working with that covers the whole LA area quite nicely, as you can see.
[1:19:39] And then on the bottom left here, um you can then run and export. But, before we do that, um let's go over to the right
[1:19:46] here, where we can see we have some other options here, which are really useful. So, um we can choose exactly which
[1:19:52] sharpening predictors we want to use. The Sentinel-2 bands here are required, so that's always going to be clicked.
[1:19:59] But, we can click off the land use, as I said, it doesn't have a huge influence on the final results. We probably want
[1:20:04] to include the surface fraction and elevation. Those had significant feature importance values. I'm not going to include the NDVI just
[1:20:11] because that information is already baked into our reflectance bands. But, you can, for example, use NDVI and the
[1:20:19] reflectance bands, and you can see how what kind of data that provides, for example, over ag areas. That may be more
[1:20:25] beneficial. beneficial. Um next, we can choose the um um the temperature unit here. So, we can go from Kelvin, which is the standard
[1:20:33] unit, the uh scientific unit that EcoStress comes in. We can switch to Celsius and then Fahrenheit. Here, I'm
[1:20:40] going to stick with Fahrenheit. Um Um And then we have the export options. So, this is, you know, the actual data that
[1:20:47] we want to look at in QGIS eventually is going to be the LST 70 m 10 m. Don't
[1:20:53] worry about this model asset. Um as I mentioned before on the top left, if you did export the asset, you'd have this
[1:21:00] available in your assets here, and then you could apply that random forest model to another scene if you wanted um
[1:21:07] later. You don't have to do the training on every scene. Um but that maybe it should be left to
[1:21:12] another tutorial. Um then you can export also the predictor layers if you want to look at, for example, the images I just showed
[1:21:20] you in the slides with the Sentinel bands, NDVI, land cover. You can export all of those that if you wish
[1:21:26] um to. So, I'm going to leave those alone. And if we click run and export, you can see the bottom left here that
[1:21:33] it's already found all the data. It's already on step two. It's now sharpening the data to 10 m resolution. And you can
[1:21:40] just see how quickly this operates. We already have the LST pulled in. This is the the um EcoStress land surface temperature I
[1:21:47] actually just showed you in the slides. And while it's running through its sharpening training process here, if you
[1:21:54] click on the layers here on the top right of the the image, you can actually toggle between the different uh
[1:22:01] predictors in the LST that have been uh brought in by um Google Earth Engine. And also on the right here is an opacity
[1:22:08] slider, which is kind of cool. You can see how the image fades in and out of the background Google Earth map.
[1:22:15] Um so, you know, while this is running, I guess you can play around with the the LSTs and and the other data here
[1:22:22] and look at what the data looks like. Um Um And then, okay, let's go through the console here. There's actually a lot of
[1:22:29] information that gets printed out in the console on the on the right-hand side here. It just gives the a summary of the
[1:22:35] actual options you used, the date range, the time, cloud tolerance. Um it'll show you the actual NGRS tile
[1:22:43] um number that ECOSTRESS um relates to you. This is 11 SLT tile. And then it will show you the actual
[1:22:51] Sentinel 2 scene that was used. So, the the code currently looks at Sentinel 2 data within a month of the ECOSTRESS
[1:23:00] observation. So, in this case, you can see we found a scene on the 12th of July. July. ECOSTRESS scene was 14th of
[1:23:07] August. So, not exactly a month, but close enough. Um the summertime period, vegetation's not going to change too
[1:23:14] much, for example, over LA, so it's fine that it's within a month. Um the code automatically looks for very
[1:23:20] clear Sentinel 2 scenes. So, in this case, there's barely no cloud on the Sentinel 2 scene. That's
[1:23:26] pretty important. You should probably check that, but um the code will automatically check for cloud-free data. Um there's some other information here.
[1:23:35] It shows the the data that you want to export, and then also actually shows the sharpening accuracy, um
[1:23:42] which is the um the the initial 10-m resolution image that that you that I showed earlier. Um now, after normalization, this
[1:23:50] actually dramatically reduces um in the bias and the RMSE after we do the the radiometric normalization to ECOSTRESS.
[1:23:57] So, these numbers may look pretty big, like 8° Fahrenheit, but um they end up being pretty small in the end. And I
[1:24:03] actually might change this so that produces the stats after we've done the radiometric normalization. Anyway, let's go into tasks. This is the
[1:24:12] important part now. We see our three tasks here, or the three data sets that we chose to be exported to our Google
[1:24:19] Drive. So, I've already done this, so I'm not going to We're not going to wait and run this um in real time. It
[1:24:25] actually takes quite a bit of time because if you click on the 10 m here and hit run, it'll give you the the task
[1:24:32] name. You can change that if you want. Shows the coordinate system, the resolution, and the drive shows the
[1:24:39] drive folder that it'll create for you if you haven't created one in your Google Drive account. Um and then the
[1:24:45] file name and the file format, of course, here is a GeoTIFF. So, it has the spatial information included within the data.
[1:24:53] And so, if you then hit run, um you'll see that there's a submitted task. It will be running, and it'll show
[1:24:59] the time and it'll uh it's taken to run. Um you do that with the others, and then
[1:25:05] you end up with your data in your Google Drive. So, in my case, this is the GEE EcoStress
[1:25:12] folder, folder, and you can see a list of GeoTIFF files here. You can see I have quite a few
[1:25:17] because I've obviously been doing a lot of testing on this over the last few months. months. Um and then you can click on the right
[1:25:23] side, you can see these three little dots on each file. Click that, hit download, and it'll download your file
[1:25:29] to your desktop. Okay, so let's move on to the next part here, which is actually visualizing this
[1:25:37] data in QGIS. So, just to recap, everything I've just been through is on this Google Earth Engine running
[1:25:47] EcoShock version 1.1 tutorial. So, you can go through that step by step at your own pace if you want.
[1:25:55] And then we'll be available We're going to be available for questions as well. So, So, uh similarly, um we have a full tutorial
[1:26:03] on the visualization in QGIS. So, every click and step you see coming up now is laboriously documented in this file. So,
[1:26:13] you can go through this at your own pace as well. There's little tip boxes, there's all kinds of nice little
[1:26:19] snippets of information here. And it ends with even a quick reference and troubleshooting guide. So, really nice
[1:26:26] nice uh reference to have handy um while we go through the uh the actual tutorial. So, um
[1:26:33] um let's open up QGIS. I already have mine open. Uh there's a link in the resources on how to download QGIS, and I'm pretty
[1:26:40] sure most of you will have it already from Savannah's tutorials. Um so, let's um um let's begin. So, if you go to the top
[1:26:52] left, hit project, and hit new, we start a new project. Go ahead to project, save as, and call
[1:27:00] it it something. So, let's call it EcoStress uh sharpening. And I'm just going to save it in my
[1:27:08] documents folder, so we have it saved. We have our project saved. We're not going to lose all the data that we're uh
[1:27:13] we're doing. So, next step is we want to um we want to this the Google base map. This is this
[1:27:20] is really important and very useful to have. So, go up to right at the top where it says HCMGIS,
[1:27:27] click on that, go to base map, and click on Google satellite. So, now we have our Google nice satellite base map.
[1:27:35] Um next, we go to uh layer, add layer, and raster layer. And on the source here, you can see I
[1:27:45] already have mine that I've that I've uploaded, but if I click on the right here with the
[1:27:50] three dots, it's going to take us to folder where mine is in our set, and I'm going to upload the firstly the 10-m
[1:27:58] LST, hit add, close, and I'm going to do the same thing for the 20-m 20-m um um Sorry, the 70-m layer. So, if we go up
[1:28:10] here, and it's 70 m, and Okay, now we have on the bottom left on our layers, you can see we have the
[1:28:16] 70-m product, the 10-m product, the Google satellite map. Now, we're not seeing anything yet because we actually have to zoom to the
[1:28:23] layer. So, if we right-click and hit uh zoom to layer, we'll now see the uh the map
[1:28:32] uh centered on our image over Los Angeles. Angeles. And it's all default in grayscale. Um that's kind of boring. We don't want
[1:28:39] that. So, what we're going to do is we're going to double-click or right-click and hit properties on our
[1:28:45] file. file. We end up with this page. Uh we start with symbology. Go to the top where it says render type,
[1:28:53] hit hit single band pseudo color. We don't want it in grayscale. Um Then, for the min max value settings,
[1:29:01] I'm going to click this arrow. And what I typically like to use is I don't like to hardcode the min and max cuz it's
[1:29:08] going to change for every scene. So, I typically like to use between two to five of the lower uh percentile of data
[1:29:15] and then uh on the high side, I either go from 98 to 100. And it kind of varies on the area
[1:29:21] that I'm looking at. Um so, let's use those values for the color ramp. I actually uh So, you can This is really
[1:29:30] a personal preference. You can go magma. Uh Uh spectral works pretty well. Um If you look at all color ramps here, you
[1:29:40] can see there's a really wide variety of color ramps. Um I'll show you a little trick. If you the
[1:29:47] one that I actually like is um if you go to create color ramp, go to catalog CPT city. I know this is a
[1:29:56] bit much, but uh QGIS and then all by author on the top right. I really like this temperature map. So,
[1:30:08] let's let's use temperature. All right. So, if we click and we hit apply, now we can see our image nicely scaled in in
[1:30:18] color scale where the blues are the cooler colors, reds are hotter colors, so it's pretty intuitive. Um and we we're just going to go ahead
[1:30:25] and do the same thing quickly with our second band. And I'll go through this pretty quick. Done it already.
[1:30:33] Change our central thresholds 4 and 100. Um and we'll go with our temperature color map, which again I have to add. I actually
[1:30:47] need to save this one so that I don't have to do this every single time. I have a
[1:30:54] temperature. Okay. Apply. Okay. Now we have both data sets together at the same color range and more importantly in the
[1:31:04] same colors uh ramp. So, firstly, what we can do here, let's go in um let's go into this area in the Santa
[1:31:14] Monica Valley. Let's look at this this little blue island here and see what's going on. So, we zoom in here, um we can
[1:31:21] toggle these on and off, which is really um um really useful. So, you can look at the
[1:31:25] Google background image. Yep, it's a golf course. So, this is a two golf courses in the Santa Monica
[1:31:31] Valley. And on the right side is an actual park. This is an actual uh area where people fly remote control
[1:31:37] aircraft. But, um this image here, this must have been in the spring cuz everything looks pretty green. And in
[1:31:43] actual fact, during the summer, this is pretty barren and bare soil, very hot. And you can actually see that in the
[1:31:50] eco-stress data. You can see the very hot temperatures here over the park and then much cooler over the irrigated golf
[1:31:56] course. course. So, looking at the 10 m, so we just see two big blobs, right? At 70 m, there's
[1:32:03] not much detail there. If we go to the 10 m scale, now we can really see the
[1:32:08] detail pop out. So, we can start seeing the actual trees along the fairways of the golf balls that are cooler than the
[1:32:14] fairways. It's pretty cool. You can see this vegetated waterway going down the center of the golf course. You can see
[1:32:22] roads, you can see specific freeways that are that are hot. Um so, it it just opens up all this
[1:32:31] detail to what's actually going on in the urban environment. So, on the right here, you can see
[1:32:36] um building roofs and parking lots that are distinctive and and have distinctive tem- temperatures from each other.
[1:32:42] And if you zoom into this sort of suburban area, you can actually see the temperature of individual trees. So, this is this is
[1:32:50] really cool. You can actually see the cooling impact of trees and um green grass yards in this environment. You can
[1:32:58] see down to the level of whose roof is the hottest, right? So, you can see the dark roof right here. You can see my
[1:33:05] cursor. This sort of bright red spot is actually someone's very dark black shingle roof. And this cooler area right here, you can
[1:33:14] see it's actually a lighter shingle color, which is a lighter uh temperature. So, really cool in that you
[1:33:20] can really zoom in to very fine scale detail on temperatures. Let's go to another area quickly that I
[1:33:27] really like. I actually used to live close to this area and actually play on this golf course quite a lot. This is
[1:33:32] the Griffith Park Golf Course. Um on the edge of Griffith Park. Um and it's it's really nice cuz there's
[1:33:39] sharp gradients in temperature here from the golf course to the freeway into this more industrial complex zone just off
[1:33:46] the western edge of of uh Glendale. So, So, at 70 m, again, not much detail. You can
[1:33:54] see the broad outlines of of where the hot spots are. But, it's really only when we get to the 10 m scale that you
[1:34:00] start seeing the actual temperature of hiking trails. So, these are bare gravel trails that are hotter than the
[1:34:07] surrounding landscape. Again, trees lining the fairways. And what's pretty interesting here is um let me go to let me change the scale a
[1:34:18] little bit here. Uh this is where as I mentioned, you want to change the uh uh the min and max of the the data
[1:34:29] depending on where you want to look at to increase the contrast. So, this is this fits a lot better for this area.
[1:34:34] One thing I wanted to point out here, note that this is the 134 Freeway running here along the the northern part
[1:34:40] of the the image right now. You can see how much hotter that freeway is. It's running east-west. So, it's directly
[1:34:47] being illuminated by the afternoon sun. There's There's no intervening trees or shade on the freeway. Whereas, if you
[1:34:53] look at the 5 Freeway south, right next to the golf course here, look how much cooler it is.
[1:34:59] Um it's it's actually 10-15 degrees cooler. And if we actually zoom into Google Earth here, you can see that
[1:35:05] there's actually a tree very tall trees lined up on the corner on this side on the western side of the freeway, which
[1:35:12] provides a lot of shading. And of course, you have Griffith Park here, which provides also even more shading
[1:35:18] during the afternoon hours. You have a much cooler freeway. So, it just shows the level of detail that we can get to
[1:35:25] at this resolution by looking at the actual differences in freeway temperatures, which I think is really cool.
[1:35:31] cool. Um okay, then the the last quick thing I want to show you here before we actually
[1:35:36] get to exporting the data as actual imagery. imagery. Um let's go to uh the Rose Bowl. Um this is actually one of the venues
[1:35:44] for for um the World Cup and the Olympics coming up. So, this is a pretty important area that they're going
[1:35:52] to be looking at to try and um implement heat mitigation efforts. If we look at the Rose Bowl here, we have these huge
[1:35:59] massive parking lots, right? These are naturally going to be very hot surfaces, and this large field is actually gets
[1:36:05] very hot during the summer, too. It's It's mostly dry sand and grass. So, looking at the 70-m data again,
[1:36:12] we can see there's some hot spots around. We can't clearly see exactly what they are, but it's only when we go
[1:36:17] to the 10-m scale that you can see here. These are these large parking lots and roads surrounding the southern part of
[1:36:25] of the of the stadium, which are, you know, 20-30° warmer than the golf course, for example, to the north.
[1:36:33] And this If you can imagine if there's there's air flow and wind coming in from the southern southwestern southern parts
[1:36:42] of this image, then you're going to you're going to a lot of heat advection from these hot surfaces into the
[1:36:47] stadium. And so, this is These are the kind of areas that we want to target for heat intervention during upcoming
[1:36:53] events, but also just for the future of sustainability of of heat in in in the LA region.
[1:36:59] Okay, so what If we wanted to export these images, before I do that, I wanted to show you
[1:37:06] another cool trick that sometimes we use, but not very often because physically it doesn't stops making much sense. But, if we go
[1:37:16] into symbology again, all the way down to layer rendering mode is currently normal. If we hit overlay, what it's
[1:37:24] going to do is actually overlay the data directly on Google Earth Engine background map. So, you can It's pretty
[1:37:31] cool. You can see the almost the 3D structure structure coming through with the temperature overlaid on top. And this is how we
[1:37:38] generated that Paris map that I showed you earlier. But, the one caveat here is that you can see the building roofs
[1:37:44] here, which are white, actually come through as looking whereas they they they lose their actual temperature color
[1:37:50] here, which should be the dark red color. The same with green spaces, they come out looking green because blue and
[1:37:56] green gives us kind of a green. Um so, if you can deal with that, that's fine, but it it just provides a really
[1:38:01] nice pretty image. Uh okay, let's go back to the normal Um Um and then we're going to The last thing
[1:38:09] we're going to do today is we're going to show you how to actually export a PNG image or an image in any format that you
[1:38:15] like. So, let's um let's put the image in this at this scale. You can change the magnifier on
[1:38:23] the bottom right, by the way, to any scale you want. And then also you can just use your your mouse to zoom in and
[1:38:29] out. I'm going to leave it at this scale. scale. Go up to project. We're going to go to
[1:38:34] new print layout or control P. Um let's call it um LA LA sharpen. You can You can name the
[1:38:45] print layout anything you want, really. Um you end up with this sort of blank palette here. What you're going to do is
[1:38:51] hit add item at the top. Add map. Okay, now you're going to get a cross and what you want to do is click and
[1:38:58] drag drag across across to fill this entire blank canvas space. And what it's going to do, it's going to
[1:39:04] render the map that you see on QGIS in this region. So, now we can do a couple of things. Um
[1:39:14] we can go to add item. Add a scale bar, for example. Um there's a scale bar on the bottom
[1:39:21] left. Let's add a north arrow. It is also kind of typical. Shows the north up direction. You can
[1:39:28] also add um um What's pretty important actually is a legend, which shows us the the legend of the color scale. I really
[1:39:37] don't like the the the the legends that QGIS comes with, to be honest. So, usually I actually do this kind of work
[1:39:45] in R or MATLAB or Python, but this is possible. So, now you see twos because we have two layers in our QGIS. So, we
[1:39:52] click on that, go to the bottom right here here where it says legend items, click auto update.
[1:39:59] update. Um let's move this up. And let's click on the first one here cuz this is the 10-m map and hit this
[1:40:05] minus red button. So, we delete that one. You can also delete the actual names, I believe, if you like.
[1:40:14] Um but anyway, that that's that's what you can produce with your map as well. And then if we go to layouts, export as
[1:40:20] image, image, you can then export your image in uh typically PNG is a pretty good format to do it in. It preserves the uh
[1:40:29] resolution of the image. You can also output in TIFF or JPEG. Um and then click save. And then export
[1:40:37] resolution, you want to go at least 300 DPI um for looking at uh for importing these into
[1:40:43] PowerPoints or anything else. Hit save. And you'll have your image saved. Now, the the other way we can do this without
[1:40:49] adding all this other fancy stuff to the image is if we just want to directly export this image right here, go to
[1:40:56] project, import export, export map to image, image, change the DPI 300 DPI, hit save. Um and again, I'll just name it
[1:41:09] something and you can directly save just this image right here. Um sometimes what I do is in fact is I I
[1:41:16] crop out the color scale on the on the left here and I I save that and include
[1:41:22] it with the image um which makes it a little easier if you want to do something in QGIS.
[1:41:27] Um I think we have a little bit of time left. The the the last thing I wanted to go through here was how to I
[1:41:36] do some quantitative analysis within QGIS. So, this will take another minute or two and this is all laid out
[1:41:43] in the tutorial again. So, say I want to see what is it what is the temperature difference between this golf course and
[1:41:49] this sort of bare park area. So, what I'm going to do is it's a little bit elaborate, but um if I go to layer
[1:41:56] uh uh let's see vector and um layer uh layer Actually, I've already forgotten how to do this myself. So, let me let's
[1:42:10] Actually, this is a good idea. Let's go to the QGIS tutorial and um let's figure out how to how to do
[1:42:17] this. So, uh create zone polygons. Okay, zonal statistics. Here we go. So, layer create layer new shapefile layer.
[1:42:27] Okay. Okay. Layer create layer new shapefile layer. Um let's call it um zones. Uh geometry type we want to do polygon.
[1:42:41] Um and then we're going to click okay. Go to zones again. Right-click on zones. Hit toggle editing. It says with a
[1:42:50] little pencil mark. And then click this sort of green icon which is adding a polygon feature. Looks
[1:42:56] like a little putting green. And then you can start drawing your polygon to any shape that you wish. So,
[1:43:03] let's let's let's draw the entire golf course here. We then right-click. Go ID. Let's call it one. There we have our first one.
[1:43:11] Let's click on the second one. Which is this little really hot zone park. Right-click. Call it a different
[1:43:18] ID, number two. Okay, then we have our two different zones. Um now what we can do is going to
[1:43:26] processing processing toolbox. toolbox. Search for zonal statistics. Double click zonal statistics. Um we have our input layer as the zones
[1:43:39] that we just created. Raster layer, we want the 10 m data. And we want to see um
[1:43:46] let's do the standard deviation, the mean, that will be important, and the min max. Okay, so run.
[1:43:54] Close that. And if we go to zonal statistics, and open attribute table. Okay, there we go. We finally have the actual
[1:44:04] quantitative results here. So, the ID one, which is the golf course, mean temperature of about 100° F.
[1:44:10] The park next to it was, yep, 20° hotter on average, 120°. But up to 128° F. So,
[1:44:18] that's that's really hot. Um and the the minimum golf course temperature is about 87. So, you can see some zonal zonal stats.
[1:44:27] I usually do this kind of thing in R and and MATLAB and Python, but I just wanted
[1:44:31] to show you that you can actually do this in uh uh directly in QGIS if you really wanted
[1:44:38] to. So, I'm going to remove that layer, um and remove that layer. And then um um See if I can uh
[1:44:48] That's All right. And then if the last thing here is to double click on your file again. If you go to transparency,
[1:44:59] you can change the transparency, let's say 70%. This is a really cool trick to do as well. Now you can start seeing some of
[1:45:06] the background Google Earth imagery coming in the background. Um and it just gives it a a nicer look.
[1:45:11] So, So, that's it. Uh that's all I'm going to show you today on this tutorial. Again, you can go through the actual documents
[1:45:19] um which we'll be sharing that will give you the full step-by-step on on how to do what I just did in the QGIS
[1:45:25] tutorial and the sharpening tutorial. So, thank you very much everyone. I hope you enjoyed that and we'll be here for
[1:45:31] questions questions when this is finally presented. Thank you. >> Thank you, Glenn, for leading us through the downscaling Eco Stress LST demo.
[1:45:48] I will now provide a recap of our training. Here's a summary covering all seven learning objectives from our thermal
[1:46:01] remote sensing training. First, the physics of thermal emission. All matter above absolute zero emits electromagnetic radiation. Planck's law, Wien's displacement law,
[1:46:17] and the Stefan-Boltzmann law govern how much energy is emitted, at what wavelengths, and how sensitive sensitively it responds to temperature
[1:46:27] change. Earth surfaces at around 300 K peak near 9.7 micrometers, placing land surface temperature retrieval squarely in the 8
[1:46:44] to 14 micrometer thermal infrared window. A range of purely emitted energy with no solar contamination. Real surfaces are not perfect
[1:46:58] blackbodies. blackbodies. Emissivity Emissivity being less than one encodes the composition of and the roughness as well as the
[1:47:10] mineralogy of these surfaces. And a 1.5% emissivity error propagates to about 1 K of LST error. The temperature and emissivity
[1:47:23] separation algorithm or test algorithm used by ECOSTRESS, ASTER, and MODIS 21 simultaneously retrieves both temperature and spectral emissivity,
[1:47:37] making it far more accurate than split window approaches over bare, arid, or geologically complex surfaces where split window can err by 3 to 10 Kelvin.
[1:47:52] Unlike optical sensors such as Sentinel 2, Landsat uh uh in the visible and near infrared, which detect reflected sunlight and go
[1:48:02] dark at night, thermal sensors detect emitted surface radiation around the clock. clock. This enables nighttime observations of
[1:48:11] heat retention, urban cooling failures, and ecosystem thermal stress, signals that are invisible to any reflectance-based product. From ASTER's 16-day revisit and 90-m
[1:48:27] pixels pixels to ECOSTRESS's diurnal sampling from the International Space Station, and looking ahead to the uh Eagles or formerly known as Surface
[1:48:39] Biology Geology mission, TRISHNA and LSTM, each mission trades off spatial resolution, temporal frequency, and spectral coverage differently. Choosing
[1:48:52] the right one depends on whether your application demands long-term record, fine spatial detail, or multi-time of day sampling.
[1:49:04] Thermal data underpin not just urban heat island characterization, but many other applications including evapotranspiration estimation, agricultural drought monitoring,
[1:49:16] ecosystem thermal stress detection, long-term climate trend analysis such as lake warming, expanding hot nights, and surface energy balance modeling.
[1:49:27] Making accurate thermal infrared retrievals consequential not just for remote sensing, but for climate projections, ecological conservation, and public health decision-making.
[1:49:40] In the hands-on ECOSTRESS data processing in R, we walked through a complete R-based workflow accessing ECOSTRESS ECOSTRESS LST and emissivity collection two
[1:49:53] GeoTIFFs via APPEEARS, applying quality control bit masking, and cloud masking, converting Kelvin to Celsius, defining areas of interest, and
[1:50:04] producing violin box plots, and thermal gap figures demonstrating how nighttime LST at the Chatsworth Nature Preserve remained measurably cooler than the
[1:50:15] adjacent commercial area even after a full day of extreme heat during the September 2024 2024 LA heatwave.
[1:50:26] For the component of the the second demo, downscaling ECOSTRESS to neighborhood scale with machine learning, learning, we saw that because the physics of
[1:50:37] thermal emission limits spaceborne thermal infrared resolution, uh for instance 70 m for ECOSTRESS versus 10 m for Sentinel-2,
[1:50:48] part two introduced a random forest downscaling workflow in Google Earth Engine that leverages high-resolution Sentinel-2 spectral indices, NDVI, NDWI,
[1:51:00] MNDWI, MNDWI, DWI, DWI, as predictors of land surface temperature, exploiting the strong physical relationship between surface cover type and heat retention to sharpen
[1:51:14] EcoStress imagery imagery to 10 m and reveal block level urban heat patterns invisible in the native product.
[1:51:28] Reminder that the homework for this training opens today on June 2nd. It is due 2 weeks later on June 16th, 2026.
[1:51:40] Upon attendance of both sessions as well as completion of the homework by the due date, participants will receive a certificate
[1:51:51] of completion for this training. I would like to acknowledge my fellow colleagues in the ARSET Ecological Conservation Team who have supported the
[1:52:01] creation of this training. Sativa Cruz, Juan Torres Perez, and Justin Fain. I would also like to acknowledge the
[1:52:08] ARSET program staff who made this training possible, including Selwyn Hudson Odoy, Maria Marabito, Suzanne Romey, and Melanie Follette.
[1:52:21] We encourage you to check out our website as well as the ARSET YouTube channel linked here in this slide.
[1:52:31] You can also join our quarterly newsletter to stay up to date on our latest trainings by sending an email
[1:52:36] with no subject to arset {slash} join at lists.nasa.gov and then follow the instructions sent in the response.
[1:52:48] The contact information for myself and our other guest instructor, Glenn Holly, is also here. Uh if you'd like to email
[1:52:55] us directly with specific questions about this training. Here is a list of references for this training. training. These are all great to start to dive
[1:53:09] deeper into the material that we have presented. Thank you all for your participation in this training. We will now transition
[1:53:19] into the Q&A. So, let's address a few questions now and then the remainder of the questions will address um later this week. So, I
[1:53:35] want to first just thank uh Dr. Glenn Holly who has joined us as a um for for
[1:53:42] this training. Thank you so much, Glenn, for your time and expertise and um yeah, let's dive into the the questions.
[1:53:51] Question one asks, "Given the possibility of a moderate to strong El Niño this year, how could El Niño interact with
[1:54:02] long-term climate warming to increase urban heat island risks and affect glacier mass balance? In particular, how might these impacts differ across
[1:54:10] regions such as tropical cities, mid-latitude urban areas, mountain glaciers, and polar ice environments? Glenn, would you like to answer?"
[1:54:22] >> Um sure. Yeah, I mean, starting off it's a it's a pretty broad question and interdisciplinary, interdisciplinary, you know, covering a lot of different
[1:54:31] um um uh science uh areas and and disciplines. Um Um but, you know, this is our best answer
[1:54:40] on the fly is that, you know, we are getting an El Niño likely this summer. It's going to be strong. Uh NOAA is
[1:54:46] predicting predicting um that as a result, we're going to have a a one of the third warmest years on record
[1:54:54] coming up, 2026-2027. So, So, um in general, um you know, the El Niño has a has a
[1:55:01] positive impact on temperature anomalies. So, we're going to expect warmer temperatures overlaying on a already warming climate, and that is
[1:55:11] going to ramp up the UHI effects that that we typically experience in in urban areas. areas. Um I won't go into detail about how this
[1:55:19] affects different regions. I'm actually not a major expert on on El Nino and and other events like this, but I know for example
[1:55:27] in tropical cities they do uh they should expect less cloud cover. So, you can expect increased solar loading, increased temperatures,
[1:55:36] drought stress vegetation, and combined with, you know, higher humidity, that's it's probably going to be subtropical areas that going to experience the most
[1:55:45] detrimental effects. Um mid-latitude urban areas, think of um western coast of uh uh California, for example, in LA.
[1:55:54] Uh just from experience, usually results in drier conditions and and warmer conditions, less rainfall, higher temperatures. So, in general, the El
[1:56:03] Nino events will will ramp up and increase the UHI effect. >> Thank you. Question two asks, "How does this urban
[1:56:15] cooling effect during the day differ depending on surrounding land type? For example, arid versus agricultural versus forested."
[1:56:30] >> Yes, so so this was actually nicely demonstrated in the the earlier presentation of uh uh two areas, Delhi and and Athens.
[1:56:38] Um Um two quite different cities, but uh you know, Delhi, you think of a typical Mediterranean environment. And what
[1:56:46] happens there during the summertime is that the surrounding rural areas um um uh uh in Delhi, it's actually mostly
[1:56:53] agricultural regions have a very dry, barren, senescent vegetation and an increased exposure to bare soil. And so,
[1:57:03] typically we see a cool island effect during the daytime in cities like that. Especially in Delhi, we see a pronounced
[1:57:13] cool island effect. If you have a a city in a tropical region, you know, surrounded by dense forest, the reverse
[1:57:20] is going to be true. The forest is going to be dense vegetation typically is going to be 10 to 20° cooler
[1:57:27] than the urban surfaces which heat up much faster than the vegetation. So, you'll see the classic urban heat island effect which
[1:57:34] most people are familiar with. >> Great. Let's do two more questions. So, the question three, why does
[1:57:44] near-surface ozone concentration increase in the summer? >> Yeah, that's that's a good question that most people don't realize,
[1:57:53] you know, what the you know, physically what is happening there. And it's actually a photochemical reaction meaning that it's actual
[1:58:03] VOCs, so volatile organic compounds from car exhaust, just think pollution in general in the city that reacts with
[1:58:11] sunlight to produce ozone. And so, the hotter it is, the sunnier it is, the more ozone's going to get built up,
[1:58:20] especially near near the surface. You know, if you have um high pollutants in the urban environment. >> Thank you.
[1:58:31] Question four, which will be our final question for today, asks, can ECOSTRESS land surface temperature data be integrated with
[1:58:39] hydrological or watershed models to jointly analyze urban heat, evapotranspiration, runoff, and the benefits of green infrastructure? Also, are there any NASA-related
[1:58:50] application case studies that demonstrate this type of integrated analysis. analysis. >> Okay, yes, another pretty loaded question.
[1:59:03] Um Um I I what I've written down here just some examples that came to the top of my head. Um
[1:59:10] You know, with ECOSTRESS we do provide a standard standard evapotranspiration product which is derived from hydrological models that we
[1:59:19] actually run at JPL. Um I won't get into the the details of those models, but that that standard
[1:59:26] those standard data products are available and they are in fact fed directly into a lot of watershed
[1:59:32] water balance models as the latent heat term. And you can do your own literature search to find those studies.
[1:59:39] Um Um For the in terms of the benefits of green infrastructure for the LA 28 Olympics, we've actually been working
[1:59:45] with the LA committee and also other groups from USC, UCLA as part of the Shade LA um organization to see if we can
[1:59:55] help use use ECOSTRESS LST data specifically to try and quantify um which areas would be optimal for
[2:00:04] implementing, for example, heat mitigation measures. So, planting more trees, implementing more shade structures, and so forth. And so, we've
[2:00:11] been working on this machine learning model um it's actually a double causal machine learning model that integrates
[2:00:17] ECOSTRESS LST with a number of other different uh variables to try and estimate what the cooling benefits are
[2:00:24] or would be of planting more trees in the city. So, that is work that is ongoing. ongoing. Um it's actually going to be sponsored
[2:00:30] by NASA pretty soon and we're going to be working um more closely with the the city. city. Um two really good papers that look at
[2:00:37] the urban biosphere influence specifically on urban heat and carbon uptake in general um in the urban environments focused on Los Angeles were
[2:00:46] these two papers right here written by two JPLers. Um I would encourage you to go and look
[2:00:53] in more detail detail at those papers for what is done there. >> With that, I would like to again thank
[2:01:02] you, Dr. Glenn Holly, for joining us for this ARSET uh training series, and thank you to all
[2:01:10] of our participants for joining us. And we will again be posting uh all uh course training materials and the Q&A
[2:01:27] document in a week of this training.
