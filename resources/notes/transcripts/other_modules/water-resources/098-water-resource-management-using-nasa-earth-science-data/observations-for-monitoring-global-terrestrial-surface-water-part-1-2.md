# Observations for Monitoring Global Terrestrial Surface Water, Part 1/2

`https://www.youtube.com/watch?v=9pjNfRAz7TA` · id 261 · 1:33:05 · module 110 — Water Resource Management using NASA Earth Science Data

[00:01] Hello and welcome everyone. Welcome to this Applied Remote Sensing training on monitoring global terrestrial surface water using remote sensing.
[00:11] My name is Amita Mehta and I will be conducting this training along with my colleagues Sean McCartney and Erica
[00:17] Podest. Podest. We also have a guest speaker today, Dr. Matthew Bonnema from JPL. I will be introducing him shortly
[00:26] and will focus today's session on overview of remote sensing observations for monitoring global terrestrial surface water in large rivers and lakes.
[00:37] We'll start with a brief introduction to Applied Remote Sensing training program or ARSET. ARSET provides accessible, relevant, and
[00:47] cost-free training on remote sensing satellites, sensors, methods, and tools as NASA's Earth Science Applied Sciences capacity building program.
[00:57] Uh ARSET trainings include a variety of application topics as shown here and trainings are tailored to audiences
[01:06] with a variety of experience levels. ARSET trainings are either online or there are in-person trainings also. They're live and instructor-led or there
[01:18] are asynchronous and self-paced trainings available from ARSET website. They're cost-free. Uh there are bilingual and multilingual options
[01:27] available as you can see today's this session will be available in Spanish, also, um this afternoon. Uh only we use
[01:36] open source software and data and we accommodate differing levels of expertise. So, we'll start with um background about monitoring global
[01:45] terrestrial surface water uh using remote sensing and we'll start with some facts about fresh water or terrestrial surface water
[01:54] in the Earth system. Uh surface water consists of all water bodies located above ground and that includes salt water such as oceans and
[02:04] fresh water streams, rivers, lakes, wetlands. wetlands. And as you can see from this figure from USGS, from total water only 2.5% is
[02:16] fresh water. Uh out of which only 1.2 uh percent is surface uh fresh water and that is distributed between lakes,
[02:27] rivers, atmosphere, living things, swamps, marshes, soil moisture, ground and ice and permafrost. So again, close to 70% is in ground ice and uh
[02:41] permafrost. And whatever is left uh which is very important, especially lakes and rivers because they're primary sources for water supply for drinking,
[02:51] agriculture, energy, and transportation. And they support aquatic ecosystems and wildlife. So why do we monitor terrestrial surface
[03:02] water? water? First of all, environmental changes, land use, and other water supply and demand changes, they affect fresh water
[03:10] sources. sources. Rivers spanning multiple countries or states within countries, they pose challenges in estimating water availability and usage.
[03:21] And therefore, monitoring surface water extent and amount are crucial for sustainable water management and also for disaster management as it helps us
[03:31] track flooding or droughts or water excess or deficit. For measuring surface water, remote sensing has been used for a number of
[03:42] years because remote sensing provides global observations. And um ARSET conducted a training a few years ago on mapping and monitoring lakes and
[03:53] reservoirs with satellite observations has a lot of details about how to monitor surface water and there are two
[04:01] parameters we're interested in when we look at surface water. First is water extent, so aerial extent where the water
[04:09] is and second is water level height that provides information about water amount. So, global surface water extent that has
[04:20] been mapped by using optical satellite observations observations from Landsat series for more than 40 years and from Aqua and Terra MODIS
[04:29] sensors for more than 20 years. An example is shown here with this site global surface water explorer allows you
[04:38] to look at annual water extent and shown here is an example of Lake Mead in the US and it
[04:48] shows change in the surface water extent. So, blue is the permanent water and the red areas they show either
[04:55] seasonal or permanent loss of water. So, this site provides global surface water extent and for for ocean as well as lake level heights
[05:08] altimetry is used and a series of NASA satellites are they had been launched since 1992 and then there are current satellites they
[05:18] provide altimeter observations and they are used to derive water level heights. Now, in the in that context the latest
[05:26] NASA mission which also uses altimeter is surface water and ocean topography or SWOT which is the focus of this training
[05:35] that was launched on December 16th, 2022 and that allows global surface fresh water mapping including rivers, lakes
[05:44] and wetlands with high resolution measurements with about 200 m resolution. And here is a site global water
[05:55] measurements portal that provides information about lake level heights. So, we will review that later on. So, with that
[06:05] our overall training objectives are that by the end of this training you'll be able to identify available historic and
[06:14] current lake elevation data using satellite remote sensing. Recognize key science and technology advances behind how surface water and
[06:23] ocean topography or SWOT measures surface water bodies. Identify ways to access SWOT data for water resources and disaster management
[06:33] applications. Monitoring parameters such as elevation, slope, width, and discharge for global river reaches. Identify ways to apply SWOT data for
[06:46] water resources and disaster management applications. And learn how to utilize SWOT ways and WISP web tools for data
[06:56] visualization. There are prerequisites here. Fundamentals of remote sensing and as I mentioned mapping and monitoring lakes and reservoirs with satellite
[07:07] observations. observations. These two trainings should be helpful in following this present training. There will be two parts to this training.
[07:16] As I mentioned, today will be on overview of remote sensing observations for monitoring global terrestrial surface water in large rivers and lakes.
[07:25] And the next session will be on 15th of May, day after tomorrow. It will focus on SWOT mission applications and access
[07:33] for retrieving, visualizing, and manipulating SWOT data. There will be one homework assignment that will be posted on our website on
[07:43] 15th of May and it will be due by 31st of May. A certificate of completion will be
[07:50] awarded to those who attend the two live sessions and complete the homework assignment before the given due
[07:57] date. date. With that, we will start with today's session. session. And the objectives for today's session are
[08:05] are that by the end of part one, you should be able to identify available historic and current lake elevation data using
[08:14] satellite remote sensing, recognize key scientific and technological advances behind how SWOT measures surface water bodies, and identify ways to access SWOT data for
[08:27] water resources and disaster management applications. applications. The outline for today is that we'll start with an overview of lake level
[08:34] elevation data and we'll have demonstration of global water measurements to see past and current altimeter altimeter based data other than SWOT.
[08:46] And then we'll focus more on overview of SWOT mission, SWOT data products, and there will be demonstration of data
[08:54] access and download, SWOT tools and resources, and SWOT applications. Just a note about asking questions. So, please put your questions in the
[09:07] questions box and we will address them at the end of the webinar. And feel free to enter your questions as
[09:13] we go. We will try to get to all the questions during the question and answer session after the webinar. And the remainder of
[09:21] the questions will be answered in the question and answer document which will be posted on the training website about
[09:27] a week after the training. So, starting with the overview of lake level elevation data, Uh, Uh, a
[09:37] a brief introduction to altimetry and again details can be found at this training. training. So, altimetry is a technique for
[09:44] measuring height. A radar used for altimetry is called an altimeter. So, here is a depiction of how altimeter
[09:54] works. So, the time taken by a radar pulse to travel from the satellite antenna to the surface and back, uh,
[10:02] which is radar echo, it's combined with precise satellite location data and that is measured in altimetry. Satellite radar altimeters are used to
[10:13] get sea surface heights, wind speed, and currents and that is what uh, we are using to get lake level heights as well.
[10:23] So, here are historical and current missions with radar altimeter and uh, these satellites are NASA satellites. Uh, so these are the past satellites
[10:36] starting from 1992, Topex/Poseidon, then Jason-1, Jason-2, and Jason-3, uh, Sentinel-6A, Sentinel-6A, and now SWOT. These are the missions
[10:49] which provide altimeter data or provides uh, surface uh, water height and these are the temporal resolutions and there
[10:58] are additional um, satellites as well from European Space Agency and um, Indian Space Research Organization and French uh,
[11:08] Space Agency. So, you can see that. The resolution here, uh, with Sentinel-3A, 3B, and these satellites, it's 27 days
[11:16] and 35 days. So, this is a snapshot of all the satellites from the past and present. Uh, the current satellites
[11:23] which provide altimeter uh, data and they are used to get um, ocean surface height as well as
[11:32] inland water body uh, surface water height. So, altimeter-based lake level height that derived from the difference between
[11:44] satellite orbit height and altimeter range. range. Generally, microwave bands KU or KA bands are used for altimeter radars.
[11:54] And picture shown in these pictures, these red lines they show satellite track. So, along the track over each pixel, depending on the pixel
[12:06] resolution, average height is derived over that pixel. So, you get one number per pixel along the track.
[12:13] And so, algorithm to derive water level height is complex. It requires correction for Earth's tides. And also, it is sensitive to satellite
[12:24] orbit accuracy, radar range accuracy, and lake surface conditions. You can refer to these references for more details of the algorithm to derive
[12:36] lake level height from altimeters. So, in addition to microwave radar altimeters, we have ICESat-2 laser altimeter. ICESat-2 was launched in on
[12:49] September 15th in 2018, and data are available from 2018 October. So, this is laser altimeter that also
[13:00] provides provides lake level height. It also provides bathymetry in lakes. Again, this ICESat training provides more information about
[13:11] it. it. So, with that overview, now let's have a demonstration of global water measurements, where you can actually
[13:20] visualize some of these altimeter data in terms of lake level heights. heights. Global water measurements portal, this
[13:28] is relatively a new portal and this is the first time we are introducing in our site. site. This site is a repository of all the
[13:38] altimeter data from Topex/Poseidon all the way to Sentinel 6. Based on altimeter data, lake level heights are
[13:45] derived and they are available from this site. There are some additional data available as well as we will see.
[13:51] And one can access, download, and visualize data. So, in this demonstration, what we will see is Lake
[13:59] Powell in the USA and Lake Nasser. This is in the border of Egypt and Sudan. So, we'll look at these two lakes and see
[14:07] how lake level heights varied over last several years. So, let's go to global water measurement portal. portal. Here you have important notes. Describes
[14:24] all the data sets here in briefly. This is the main contact about the data sets and the portal as well. All the data
[14:32] sets are listed here, lakes and reservoirs, rivers, and wetlands. Two trial measurements from ICESat-2 laser altimetry and SWOT lakes.
[14:44] So, these data are not there yet. ICESat data are still not on the website. There are some SWOT lakes are included in
[14:53] here. here. And there's also global mean sea level. There are some wetlands available. available. But the longest data sets or longest
[15:03] longest time series is lakes and reservoirs. So, let's focus on that. Once you go to this lakes and reservoirs
[15:13] link, you will see on the left-hand side a lot of information including project background, background, references, and frequently asked
[15:21] questions. They provide information about the technical and scientific background about data derivation of data. The different missions used to
[15:33] generate data are described in here and all the ancillary data used are available from here as well.
[15:42] There are two data products available at two resolution. 10-day resolution and monthly. So 10-day resolution and monthly if you look at satellite
[15:53] missions here, this is Sentinel 3A and 3B and we set and SWOT. This is monthly data and these are
[16:02] 10-day data from Topex/Poseidon, Jason series and Sentinel 6. If you look at if you point at any of
[16:14] the dots, they are lakes and you when you point, you see the lake name here. Uh colors show deviation from the mean
[16:23] so it's high or low with respect to mean. So anywhere you see reds and oranges, it's lower than mean and blue
[16:32] is higher than mean standard deviation in terms of standard deviation. Um if you go down, you will see lake
[16:42] extent. This is showing lake area. And so let's start with Lake Powell. Let's start with lake extent actually.
[16:51] You can zoom into the map and this is Lake Powell. Uh Uh once you click on that, you can see
[17:01] area here. Uh and this is from MODIS Aqua and Terra. Terra. This is in kilometer square and it shows
[17:09] variation. There are some missing data sometimes but then you can see this time series here how um area of the lake
[17:18] varied over uh last 3 years or so. And the mean here, since 2023, you can see it's about
[17:27] 2,000 km squared, and then there is uh variation on top of that. If you look at lake level height,
[17:36] uh again, let's find Lake Powell here. Once you click here, uh you can see that uh time series that these data are
[17:49] missing, uh I think from Jason-1, but Jason-2, 3, and Sentinel-6 are given here from 1992 all the way to 2025.
[18:00] Um colors show which satellite um was used to get these lake level heights. heights. And this is
[18:09] uh actual lake level height variation. This is the smoothed version of it. It So, it's in meters. And last 3 years, um
[18:18] recent 3 years are from Sentinel-6A are given in here. So, let's look at uh this uh curve here. Uh you can see
[18:28] that the variations in lake level height in Lake Powell, um it was um higher above mean uh by about 10 to 20 m, and
[18:38] then it has decreased, and in recent years, it has gone down to about minus 20 to minus 30 m. Now, this is with
[18:47] reference to a geoid which was used uh in um calculating uh height variations all through this period. Uh you can
[18:57] convert it to WGS84 geoid and get variations as well. And in the frequently asked questions, that has
[19:04] been described. So, you can look at it if you want to change that. But this reference is for TOPEX/Poseidon, and
[19:11] with respect to that, the entire record uh is shown in in terms of height variation. variation. So, here you can see that area, of
[19:21] course, varied, but lake level height has uh decreased for Lake Powell in last several years. Um you can download the
[19:30] time series here. If you look at storage and status, um this is pretty much the same data,
[19:37] but it is 10-day to 10-day comparison for different years here. And so, uh now year-by-year data are shown how things
[19:46] have varied. Um so, this is in um height, so in meters with respect to this Topax Poseidon ellipsoid.
[19:56] Uh if you look at Lake Nasser, um this is Lake Nasser. If you go here, you can see that
[20:07] um this is smoothed version. This is last 3 years. Here, you can see that there is interannual variability. And um
[20:19] there is like height variations is from minus six to about eight meters over this period. Um so, this is Lake
[20:30] Nasser. Nasser. And again, you can download the time series and look at storage and status. Again, compare for different years how
[20:40] this height varied with respect to uh Topax Poseidon ellipsoid. If you look at the extent for Lake Nasser, here now you can see
[20:55] that um km² you have from 2022 onwards, you do see variations in area again. It's more interannual and seasonal.
[21:09] As you can see, this is a larger lake than Lake Powell. So, height varied between minus six and
[21:17] eight, rather than having a decreasing trend as we saw in Lake Powell. So, you can do comparative studies for different
[21:24] lakes in different regions. And you can download the data and compare with say rainfall or if around the lake if you are trying to
[21:35] look at land cover or crop production, you can compare with that as well. So, then when you click on this product
[21:44] table, you can download the product table, which I have. I'm just going to show a sample here.
[21:50] You will be able to see lake ID, lake names for different time period, how many total lakes were seen.
[22:02] They are shown here globally. And then you can see that so how many observations and then which continent,
[22:11] country, what type. So, and then resolution, this is 10-day satellite observation period. or was there any ice start and date? This
[22:24] is provided and different advisories are given. Again, if you look at frequently asked questions, all these are described
[22:32] in there for your information. So, So, this is just a brief overview and then you can explore this at your convenience, but
[22:45] this allows quick view of how lake levels have varied over last last 30 some 30 years or so.
[22:56] So, with that I want to end this presentation. And um, we're going to start with a now SWOT.
[23:08] Next we invite Dr. Matthew Bonema from NASA JPL and Caltech to talk about SWOT mission data and applications.
[23:17] Dr. Bonema is SWOT mission applications lead and he received his PhD from University of Washington in 2019 in
[23:26] civil engineering. He is a scientist now at NASA JPL. His primary research interests are in the use of satellite remote sensing
[23:36] observations to better understand the impacts of dams on river systems and particularly in developing regions. We also want to thank Dr. Angelica
[23:47] Rodriguez. Rodriguez. She helped us coordinate this training with JPL. She is the SWOT project applications lead. lead. Dr. Rodriguez received her PhD in
[23:58] physical oceanography in 2019 and since then she's a scientist at the center for climate change impacts and adaptation at
[24:08] JPL. So with that we invite Dr. Matthew Bonema. Matt, thank you. All right, thanks for the introduction.
[24:18] I'm going to be talking about I'm going to give an overview of the SWOT mission, its data products, specifically those
[24:26] related to inland water bodies and as well as some interactive examples that show a few different ways to get
[24:34] the data and how to visualize it. And lastly I'm going to be talking about some application examples
[24:40] to show off some of the great things that people are already using this SWOT data for. So let's back up. First, what is SWOT?
[24:49] So SWOT stands for surface water and ocean topography. It was a satellite that was launched in December 2022
[24:57] Uh and it measures global ocean surface topography and land water surface extends and elevations. So, what that
[25:04] means is it provides a essentially provides a three-dimensional map of where the water surface is uh over the
[25:09] entire globe. So, over the oceans and then also all uh inland water bodies. Uh it has a 21-day uh orbit cycle. So,
[25:17] that is it comes back to the same location in space every 21 days. Uh but it's uh observation it observes in these
[25:24] wide swaths as you can see in this little video and these swaths overlap. So, So, uh within that within each 21-day uh
[25:31] orbit cycle uh you see uh most areas of the most land surfaces most parts of the earth more than
[25:38] uh on an average of twice per per cycle. Uh and that's is to say it's between it's up to 78° uh latitude. So, this
[25:47] doesn't get you uh really far up in the Arctic. Um so, let's talk about what it what it
[25:53] measures. So, uh uh to simplify things a little bit we're looking at two common uh inland water bodies uh two two types
[26:00] of targets that you might want to look at when considering inland water. So, rivers and uh lakes. So, on the left
[26:07] we've got uh a sketch of what it's measuring for rivers. So, it measures the uh elevation the water surface
[26:13] elevation uh of the river and it also looks at the extent. So, from the extent you get the width how wide the river is
[26:19] at a given spot. And now you also because it measures this height in this in this distributed fashion you get
[26:25] height over a long reach of the river and from that you can uh we get slope. So, we actually get the slope of the
[26:31] water surface and you put height, width, and slope uh with uh and you measure that over and
[26:37] over over again through time uh and apply uh some very complex algorithms you can actually produce estimates of
[26:44] discharge and that's what the product uh will eventually do. It does not produce discharge right now, but it that will
[26:50] come out in a in a future release. Similarly for lakes, we're measuring the height of the of the
[26:57] water surface in the lake and we're measuring the the extent, so the kind of the area, the spatial footprint of the
[27:03] water body. And repeat measurements of this height and extent get you estimates of volume change. So we're not actually seeing the volume
[27:12] that's the total volume that's in the water body, but we are seeing how that water body is changing between satellite
[27:18] observations. observations. Now the requirements for this mission is to see produce these products for rivers larger than 100 m wide and lakes larger than
[27:29] 250 m squared. But however, the uh instrument is perform appears to be performing considerably better than that, but it is an open question about
[27:39] how small of water bodies you can see and still maintain good accuracy in the measurements. So this if you take all the observations
[27:50] from 121 day cycle of all the rivers larger than 100 m wide of the earth and visualize them, this is what you would
[27:56] get. get. So what this is is showing is water surface elevation along each reach of the river that is produced by by the
[28:04] SWAT product. So the the number one outcome of this of this plot is that water flows downhill. That's not that in
[28:11] itself is not very exciting. We already know this, but what is amazing about this is that we're
[28:18] actually seeing we're actually producing these estimates from space and also this kind of zoomed out approach hides the
[28:23] really fine scale centimetric accuracy detail along of this these slopes and elevation elevation estimates from from SWAT.
[28:34] So I did mention it also observes the ocean. So this is just kind of show that you know, we're not
[28:39] ignoring the the ocean side of this here. We acknowledge that it's also doing some really great things there of
[28:43] producing globally complete estimates of of surface height. Um and that is uh uh really amazing. It's a bit beyond
[28:51] the scope of what we're going to be talking about here. We're mostly going to focus on the inland water bodies. I
[28:55] did want to just throw this up there though in case you're doing some work potentially at the coast or or some
[29:00] other work related to to oceanography. Um SWOT's also got you covered there. All right. So now I'm going to go switch
[29:08] into and talk about kind of the more nitty-gritty details of the SWOT data products, how you access
[29:14] them and download them. Um so here's a list of all kind of the hydrology relevant level two SWOT
[29:21] products. We've got the water mask pixel cloud cloud at the top. This is kind of they're ordered in kind of uh
[29:28] descending descending in in levels of processing. So kind of the source, the root for the rest of these
[29:35] products on this list is the water mask pixel cloud. Uh and what that is is is is you can think of it as just
[29:42] XYZ points. Uh uh where water was detected. And each of those points has say a certain footprint area associated
[29:50] with it and then it's where that footprint is located in latitude, longitude, and then also elevation. Um
[29:57] so you've got you know you know this huge data file with lots of different pixels all over the place and most of these are
[30:05] derived from uh uh directly from from that product. So then moving down some ones to highlight, we've got the raster product.
[30:16] This is if you take these pixel these this huge pixel cloud data product and you aggregate it and grid it and put it
[30:23] on a normalized grid. So that is it comes comes I'll talk about these more in detail later. Let's skip I won't get too too
[30:30] far into that right now. Uh so let's see that's all I'll say about the raster product putting them on
[30:36] a normalized grid, the lake vector shape files, and the river vector shape files Those all ones that we're going to be
[30:42] diving into. And at the very bottom we have this interesting sounding one called the flood plain digital elevation
[30:48] model. That is to say if you after many years of SWOT's observation, it we will eventually build out
[30:58] a essentially the bathymetry of global flood plains. That is very exciting. It's still it's still under development requiring
[31:07] more more time to work on and just simply more SWOT observations. So that one's not available yet, but the rest of these are
[31:13] available or in in part or or in full. All right. So let's let's dive a little bit deeper
[31:22] into the ones we're going to be talking about. So I already mentioned about this pixel cloud. Up up in the left and then these three
[31:29] kind of derived products from it. The raster product, the river vector product, and the lake vector product.
[31:35] Before we get into these data, we're going to talk about some terminology related to how you would locate the
[31:43] data products themselves. So we've got these three three kind of terms: swath, tile, and scene. So some data is
[31:50] oriented to the a swath and that it is denoted by a half globe orbit track. So that you can
[31:56] see on the on the right here that the yellow line. That is the orbit track of a
[32:03] as it goes from all the way -78° -78° to +78° latitude. And some some data products are oriented to by this
[32:13] organized by swath. Other ones are organized by tile, which is a half swath width 64 by 64 km squared.
[32:22] And you can see kind of here there there how it's tiled along the swath. So to identify the location of those
[32:29] products, you you would need a specific tile location within the swath. And then scene is simply uh two tiles stitched
[32:38] together. So, it's that it's the essentially the full swath, but still broken down into these discrete grid
[32:44] chunks. Okay. So, first let's talk about this uh uh high-rate uh pixel cloud product. So, this is a point cloud of water mask
[32:55] pixels. So, that is as I that is uh the location of water as detected by SWAT in three-dimensional space. So,
[33:03] it's at each point represents a certain footprint of of water, and that footprint varies depending on where the
[33:09] pixel is within the swath uh the the the pixel size. Um so, it it is variable across the scene about how much water is
[33:16] associated with each pixel. Uh Uh and uh each one of these pixels comes with uh a number of variables associated with it
[33:26] that is like it's geolocated height, uh some uh radar uh uh fields like backscatter, uh and as also
[33:34] a number of quality flags uh to to to to look at. Um and so, this is kind of uh
[33:41] a a a good uh product if you want to really get into the details of what SWAT is sensing. Um
[33:48] however, the downside is it's quite a large product. It's it just volume-wise it's it's uh a bit unwieldy to work
[33:55] with. Um so, my recommendation was is unless you need something that is uh unless you need all of this detail uh to
[34:02] work with one of the other products uh instead first at least. Uh all right. So, that brings us to uh
[34:10] the raster product. Um this is if you take that SWAT product or the This is if you take that uh pixel cloud
[34:19] product and you aggregate those pixels, uh aggregate the elevations and the areas and everything within those pixels
[34:25] uh to a normalized grid, uh and and uh produce uh derived variables there like water surface elevation, the area of
[34:34] water, the fraction of water detected within a given pixel, uh, as well as some other things like backscatter, the
[34:40] things that it also inherited from the, uh, uh, from the pixel cloud itself. Uh, and again, uh, comes with a a variety of
[34:48] quality flags that are need to be, uh, uh, managed to, uh, properly filter the data out and and and get some high quality
[34:57] maps. Um, these products are, uh, generated uh, natively in at 100 m resolution and 250 m resolution.
[35:07] And one thing to say about, mention about the elevations here, uh, is that, um, the pixel cloud, the
[35:13] individual points in the pixel cloud, uh, the elevations of them can be can be noisy to the point where you you maybe
[35:19] don't want to trust an individual pixel that you see, but, uh, by aggregating them down to, uh, at these grids, uh,
[35:27] we're actually, uh, limiting that noise, uh, considerably, so and producing higher quality estimates of of your water surface elevation for a given
[35:34] water body. The next product I'm going to talk about is the river, uh, shapefile product. Uh, this is, uh,
[35:43] this actually consists of two different flavors of a product. This is a, uh, vector vector product of river reaches,
[35:50] approximately 10 km long, and, uh, a vector product of nodes, uh, which is kind of a points along the river at
[35:57] approximately 200 m spacing. These products are referenced to a prior river database, which defines, uh, where these reaches, uh, begin and end. Uh,
[36:08] the some variables that these products include are water surface elevation, uh, so uh, width, uh, slope, and, uh,
[36:15] derived discharge. Now, discharge, some of these, uh, uh, more derived products are only available in the, uh,
[36:24] uh, in the reach product and not the node product, because we need to aggregate up to the reach to to be able to estimate
[36:30] some of these parameters. Uh and I should also mention that discharge uh is uh not yet available uh
[36:37] within the product and will be available uh in the future uh as part of a a reprocessing campaign um for all of the
[36:45] uh SWAT observations uh taken so far. Uh next up, we have the lake shapefile. Now, this is a vector product of lakes.
[36:55] And it, similarly to the to rivers, it's referenced to a prior lake database. Uh however, it it does also have a a flavor
[37:04] of it where it identifies unassigned lakes. That is, if if it if uh the algorithms detect a lake-like water
[37:12] body within the pixel within the SWAT pixel cloud um that is not uh associated with any uh lake currently in the
[37:19] database, it will uh still produce a uh uh uh a shapefile for it uh and label it as as
[37:27] unassigned. The other two of flavors of this are uh observe are the obs observation product and the prior product. And these are
[37:36] just two different ways of how the lake product is referenced to the uh um um uh to this database. And I'll get to
[37:44] that in in in another slide. Uh but uh some of the variables that come with this product are the water
[37:49] surface elevation, surface area, and then uh derived storage change. So, here's an example uh to illustrate uh the difference between the three uh
[37:59] flavors of of lake product uh produced by SWAT. Uh the orange is observed, the blue is prior, and the gray is is
[38:07] unassigned. So, the gray is simple. That's simply lakes that were not in the database in the prior database at all,
[38:14] uh but were detected in the in this one SWAT observation. Um so, those those are easy to you know, to identify in the
[38:20] outside. outside. The prior is uh referenced uh directly to the database. So that is to say if
[38:27] there's a lake in the database, we produce an observation of it or we we produce a shapefile of it in the prior
[38:36] product. The observed is still referenced to this this prior objects in this prior database, but it allows for
[38:46] single lakes in the database that are lakes that are individual single lakes in the database to be split into multiple different
[38:54] lakes if the if SWAT observes them as multiple different lakes, for example. Here are three additional hydrology products that are are derived
[39:06] from the from what we talked about. There's the river average and lake average products. These are cycle
[39:12] average products where they took the observations of where they they aggregated together an entire 21-day cycle worth of
[39:21] observations observations and produced a you can think of it as this is like a globally complete shapefile
[39:31] product for the rivers and and lakes that is aggregated from from 21 days as opposed to the
[39:38] uh uh SWATH oriented versions versions identified with a single overpass of the of the mission. And lastly, we have this flood plain
[39:49] digital elevation map which after multiple observations from SWAT of water level in rivers, water level and extent of rivers at many
[40:01] different river stages uh we can eventually build out a DM of the flood plain. This is very much still a work in
[40:10] progress and is not not available yet. All all So just to um touch very briefly on the oceanography
[40:20] related SWAT products. We have various levels of processing here similar to the similar to the hydrology kind of culminating in sea
[40:31] surface height. The sea surface height problem problem the sea surface height product that you see at the bottom.
[40:38] Uh, and just to kind of visualize what those look like. I'm again, I'm not going to go into depth about what these
[40:43] are how to use them, but I just did want to bring them up because they are a
[40:47] valuable outcome of the mission. Um, all right. Let's talk let's get into how you actually access Let's get into how you actually find and
[41:02] access this the SWAT hydrology products. Uh, so kind of the simplest way is to use Earth data search which is a web
[41:14] web-based web-based graphical user interface where you can get all NASA Earth data including including SWAT data. data. Um, and it allows you some for some very
[41:26] basic basic subsetting by time and and spatial extent and then download the selected products. products. Um, so let's dive in there. You can
[41:35] simply search for Earth data search and you should find this or follow this link here. here. Okay, so here we are at at the kind of
[41:44] home page for for Earth data search. The default view will just kind of show you some of the most popular collections
[41:50] that it has. Uh, before we get started you are going to need to log in. Uh, so you'll have to click that if if
[41:57] you want to download the data you'll have to log in so you can click that and you can set it you can
[42:01] set up a free a free Earth data login credentials through there. Um, so what we're going to do is we're just to
[42:12] search for SWAT and see what comes up. Uh we are going to look for we're going to try to find a lake product.
[42:23] So let's see. Uh default of um One thing to note about Earthdata search is that the default sort for products
[42:30] when you search for them is usage. So we're going to go ahead and switch that to relevance.
[42:35] Um just be uh to make it a little easier to find what we're looking for. All right. And now we get a list of SWAT
[42:45] data products. So the things to look for uh right now the the current version version C is as I believe the most
[42:52] up-to-date you're going to find on Earthdata search. Um right at this moment they are rolling out version D and beginning forward
[43:00] production and and back production of version D. And once that is um complete this version C will likely be hidden and
[43:08] all that you'll be left with is version D. Um so this is all just to say that um
[43:12] if you see multiple different versions in here um try uh you may want to go find um
[43:18] check out the release notes for these different versions to find out uh what the most up-to-date and and which one is
[43:23] the most appropriate to be used. So right now version C is the is the most up-to-date one we have available at the
[43:29] at the time of recording. Uh so that's what we're going to be looking at. Uh and I'm just going to simply scroll
[43:34] through here find my lake single pass vector data product. We're going to click click on this for some information
[43:41] on that product first. And this will bring you to this will bring you to a page that has some
[43:52] different user guides to relate to the user manuals so you can read up about all the different uh
[43:56] um um variables within these products and everything and and um there's a lot of good uh information there and you can of
[44:02] course read read a little blurb about what the what the the is. So all right. We're we're sure that this is the one
[44:08] that we want, so we're going to go back. And we're going to click on that. And it will bring up a list of
[44:25] of products. There we go. So we've got a list of of different products and you can see
[44:31] within here we've got different if we just look at the file names here, SWAT level two HR, that stands for high rate.
[44:37] Uh that means that is essentially all the products that are over the land. Uh land only are the high rate. Lake uh
[44:44] sing- SP, single pass. Uh and then you have this one that says obs, so that's the obs flavor. And then
[44:50] over here we have unassigned and then prior. So all three of these flavors are all contained within the same
[44:56] collection. So you may um so uh once you've searched for uh exactly the file that you know, the if
[45:02] if you've searched for exactly the time and place of a file you should actually have three results. Um one one of each
[45:09] flavor and you can decide which one which one you want. Um so we can do some a quick kind of
[45:13] temporal search here. So let's just see uh let's just look in January 1st to uh uh January. Let's just find all the
[45:25] products that were taken on what day. Here we go, January 1st to January 2nd. Uh and we're left with these products.
[45:32] And now it's important to note you can see a little bit of the spatial extent of the ones that are come up here on top
[45:38] um are you can see it's just covers this kind of South America here. Um so that's another thing is these products are all
[45:43] all uh organized by um uh continent as well. You can kind of see the continent code uh if you follow
[45:50] the product name a little bit farther, you have this underscore SA, that's South America. And if we keep going you see a different
[45:58] one uh AS, that's Asia. Um so it's they're organized by first by um, by uh, pass. So that is where their, you know,
[46:07] how that pass goes from from um, -78° to positive 78° across the um, across the Earth and then they're
[46:14] further broken up by continent. Um, so you want to use those continent codes. Um, Um, now we can move on to spatial search.
[46:21] However, spatial search uh, for some of these SWAT products uh, particularly the ones that are swath oriented like these uh, vector products
[46:30] uh, will tend to get you more products than you more uh, observations than you're looking for. That is a lot of observations that don't
[46:36] actually uh, intersect with your your area of interest and the reason for that is uh, just within how the data is is
[46:44] cataloged in in Earth data search to make it quick to search. It's simply provided a bounding box like this over
[46:50] here on the right. However, uh, uh, the actual swath, the actual observation from that product here that's covering this bounding box
[46:58] uh, is just a line that goes through it. Is or you know, a swath that goes up
[47:02] through it. So, um, however, if you spatial searched anywhere in there, you will still get um, you will still get this product back
[47:09] which may or may not intersect with with your thing. So, a better way uh, to do this is to
[47:17] um, search by actually find whatever cycle is uh, part of your um, Sorry. Sorry. Uh, a better way to find your to find
[47:27] your product by uh, spatial search is instead to simply use the file name, the the the uh, pass number in the file
[47:35] name. So, if we wanted to get this pass 283, 283, um, we can go over to this granule IDs
[47:43] and you can do something like star underscore underscore 283 283 underscore and then put the put in the
[47:52] continent code that you want. So, we want South America and then hit star. And what that does is it it's going to
[47:59] search through your results and and only give you ones where the file name has matches this pattern within it.
[48:15] So. So. Now, the problem with this is it's a little bit slow. But um okay, so here we are. Uh now we've
[48:23] just have just that one product that we were looking for. Uh so now you may ask, well, how do I know what paths I
[48:28] intersect with my location? The way that you do that is by uh downloading the uh orbit files for the uh for the mission
[48:38] and loading it into say a GIS program and finding your location uh your area of interest and simply seeing
[48:46] which which orbits uh overlap with that. So, to get the orbit files, you can go to this site called AVISO, which is a uh
[48:53] site made by our uh French counterparts. Uh Uh um um and what you could do is scroll down to
[49:02] uh uh their um the scientific orbit, that's what we're going to look for. Uh and you can
[49:09] find this SWAT science HR uh uh uh science orbit and you can go download that as a shape file or you can download
[49:17] it as a KML file, which would load into into Google Earth uh quite nicely. And you can download those and visual load
[49:24] those into a GIS program and uh simply find all of the paths of the the um SWATHs that overlap your uh specific
[49:32] location and use that to narrow down your spatial search. Um a little bit uh uh a little bit unwieldy, um
[49:41] but for right now, that's the kind of the best way to to um identify exactly what products you
[49:45] want to look for. And I should say you you only have to do this once for one area of interest. Your
[49:51] um that cycle or that that pass number will not change for observations that intersect your area of interest.
[50:00] Okay, once you have the data that you want, say we want this prior version here, you can go ahead and click
[50:06] download and if you're logged in, it will take you to a page where you can download the data to your local
[50:13] computer. computer. So now I'm going to go over some tools and resources that you should be aware
[50:20] of for furthering the use of SWAT after after this training session. One is the GitHub collaboration space.
[50:31] There's a SWAT community GitHub. Which consists of repositories produced by the the SWAT user community. A lot of SWAT science
[50:43] team. team. Members use this as a place to share their data organize and and and share their code. So you may find something
[50:51] useful to your specific use case there and not have to not have to recreate the wheel. Next up is this Po DAC cookbook.
[51:06] Right, we we already looked at one tutorial there when for figuring out how to do data access.
[51:13] And and download of the data. Um. It it has a a number of of other tutorials and and things to walk through
[51:21] for both. SWAT specifically but also just just data access NASA's Earth data access things in general. general. So it's a very very great resource that
[51:33] I I personally keep returning to to in in in my own line of work to to um
[51:41] um find out how the best way to to access and and use some of these data sets.
[51:47] All right, and I'm going to close out going over uh some applications of SWOT. That is what um
[51:53] uh high level, what what um can you use SWOT for? And then zoom in specifically on some some SWOT early adopters who
[52:00] have already taken on SWOT data and are are um applying them to specific problems. problems. All right. So, we have never had
[52:09] observations uh of uh the world's uh surface water and ocean uh like we have now from from SWOT. And that opens up a
[52:18] variety of different uh uh use cases for this data that we have now been able to uh address
[52:25] uh with uh satellite observations in the past. And now here's kind of some broad categories uh that that we defined of of
[52:31] where uh where this data ought to be impactful. impactful. Um, Um, and to that end, uh we've uh actually
[52:39] been working with this group uh called the SWOT early adopters uh early adopter program. This is a group of about 40
[52:45] early adopters. Um, they're US and uh uh this is a a joint effort between us and uh our our French counterparts at at
[52:53] CNES. CNES. Uh and uh there's actually had this applications program going since 2012. Uh so, we've spent a lot of time
[53:01] thinking and trying to engage uh groups in uh in uh applications on how about how we're actually going to use this
[53:07] SWOT data uh for for societal benefit. So, I'm just going to go through a few examples of the way this data is being
[53:13] used. Um, and the first up is this water information from space uh dashboard. Now, I do not need to say a lot about
[53:21] this because you're going to hear uh about this late about this uh later in the in the session, but that this is
[53:26] just to say that uh we're we're thankful for USGS's partnership in making this data more uh uh more accessible
[53:33] alongside their uh uh uh already extensive in situ gauge network. network. Uh all right, another one of our uh
[53:41] another early adopters is the Texas Water Development Board. Uh They are using SWAT to monitor unmonitored reservoirs in in Texas.
[53:50] There's about about a third of their their major reservoirs or actually don't have regular observations taken of them and they're
[53:58] using SWAT to kind of close that observation gap and eventually estimate the volumetric evaporation loss from these reservoirs.
[54:08] We're also working with Swedish startup called Water Insight which uses a variety of data sources including satellite data as well as
[54:20] community-driven community-driven data data and makes those available in places with few resources for extensive in situ networking campaigns. So we're we're
[54:33] partnering with them to bring the information from SWAT to to people managing water there on the ground.
[54:42] ground. We also have some exciting work put in by by ocean early adopters. So the Navy US Naval Research Lab and so
[54:51] far oceans have both taken the taken SWAT data and done assessments of it and used it to
[54:58] integrated integrated it into their ocean models and ocean observation networks. Thank you so much Matt for the wonderful
[55:09] information and presentation about SWAT mission data and applications. And that brings us to the conclusion of this part and just to summarize
[55:20] today we reviewed altimeter-based lake level height data from historical and current missions and we also had a
[55:28] demonstration of global water measurements where you can visualize lake level height data on the time series of it and download the data as
[55:37] well. well. Then, we had an overview of SWOT mission and data products, especially hydrologic relevant level two data products. We saw
[55:47] data access through NASA Earth data search and Hydrocron Hydrocron API. API. And we also saw SWOT applications and
[55:56] early adopters program. Especially, these are the thematic areas where SWOT data contribute. And these are the missions
[56:06] missions which all have altimeter data and they provide surface water height. So, with that, our next part is going to be on 15th of
[56:18] May and we will identify SWOT data for water resources and disaster management applications and recognize how to
[56:26] utilize these SWOT reverse data visualization tools such as SWOT ways and VAST to monitor water availability and flooding potential.
[56:38] As I mentioned before, there will be one homework that will be posted on 15th of May on the training web page and answers
[56:45] must be submitted via Google Forms and the homework will be due on 31st of May. Those of you who attend all live webinar
[56:55] sessions sessions and complete the homework assignment by the deadline will receive a certificate of completion via email approximately two months after
[57:06] the completion of the course. With that, we want to again acknowledge and thank Dr. Matthew Bonnema for his
[57:14] wonderful presentation. We also want to thank Dr. Angelica Rodriguez for her help in coordinating this training and
[57:24] special thanks to Dr. Perry Odum. He is from NASA Earth Science Division, uh, uh, the program coordinator for NASA's water
[57:32] resources program and we want to acknowledge his help in coordinating this training as well. Here are all the contact information for
[57:44] our guest speakers as well as our set hosts. This is our set website. This is our social media
[57:52] link and here is our sister program develop. You can check it out. Link is given here. And here are some references that we
[58:04] refer to in the presentation. So with that we want to conclude today's session and our next session will be on
[58:13] 15th of May and we'll go to an our question and answer session. Thank you. Thank you all for attending to the
[58:27] today's session and thank you Matt for the presentation. We also have Dr. Angelica Rodriguez here and um
[58:35] our our set hosts Curtis and Shawn McCartney are here as well. So we want to go through question and answer session.
[58:44] Just a note before that. We have some Python code and Jupiter notebook code that Matt mentioned. They will be available
[58:55] and also want to mention that we will have an advanced training later this year early next year in which
[59:02] we will be demonstrating how to use this software. So with that we'll start with question and answer session and I invite
[59:13] anyone from the panel to answer the questions as appropriate. So question one on the website global water measurements
[59:22] portal, what is the criteria in including lakes in the data set. There are some lakes that do not have data from specific
[59:32] satellites, um such as Lake Velasco uh Ribera does not um have SWOT data. Um does the website pick only one
[59:44] satellite source? If it does, how does it make the selection? Uh can one access the data for smaller
[59:52] lakes not visible on our global water measurements website? So, the the answer is actually much simpler because it
[1:00:01] depends on the lake size and uh altimeter resolution. So, uh from TOPEX TOPEX/Poseidon all the way to Sentinel
[1:00:10] we we only can see lakes which are uh most lake which are 100 km or above, they are included um when they're
[1:00:22] observed. If there are multiple uh satellites are observing at the same time, um they that's in that's indicated
[1:00:30] in that table that I showed you in advisory that um uh both um are either averaged or
[1:00:37] sampled and showed. Uh but basically it's the resolution of the altimeter that limits what you can see, which
[1:00:47] lakes you can see. Um and um the next question, uh can you elaborate more on the understanding of
[1:00:55] high resolution measurements uh of SWOT? And I invite um Angelica to uh to to answer this question.
[1:01:13] Hello. Um yeah, so the actual resolution of the any given SWOT uh data product will depend on which product you're looking
[1:01:23] at. So, the satellite actually has two operational modes. Over the ocean, it's um considered um low-rate data, and over
[1:01:32] inland water bodies, it's considered high-rate data because of the way that the um returns are processed on board the
[1:01:39] satellite. And so, we keep the higher-rate data over land because there's just less of it that um we need
[1:01:47] to to process because we have a lot of land returns. And so, for example, a higher-rate data product might be the
[1:01:55] raster product. And so, we can grid the data for the raster product to about 100 m, but that is actually
[1:02:03] derived from even higher resolution product such as the pixel cloud mask that Matt mentioned. Thank you. Um
[1:02:15] Um you may also want to take the next question. Can we measure the lake level of any lake from the world or specific
[1:02:23] lakes? Is the data available just for the specific lakes? Is there a way to get the raw data from the satellite with
[1:02:31] all its special extent? Uh sure. So, we do use some a priori information for the lake products, and
[1:02:44] um this sort of determines where the water surface elevation processing will occur, and and that is derived from a lower-level data
[1:02:53] product. And so, what I think one would consider raw would be the interferograms. interferograms. And um that, you know, is a is intended for a
[1:03:04] pretty advanced user, and something indeed that the JPL engineers leverage to create the higher-level data products. And so, if you wanted to go
[1:03:12] into that, I would um suggest, you know, having a a pretty strong background in um interferometry. Great. The next section is can Jedi
[1:03:28] mission data be used similar to the ICESat-2? Uh the wavelength for Jedi is infrared like ICESat. Does that
[1:03:36] matter for water um altitude calculation? So, um it it does matter, but uh it there there are research
[1:03:45] papers out there. Uh they have used Jedi to improve um um water level height. So, it is
[1:03:52] possible and there is one example uh cited here. You can see that um and and learn more from that.
[1:04:02] Um Um so, question five is are river um cross-sections or bathymetry generated? generated? Um Um so, I don't think bathymetry is
[1:04:15] generated. Um right, Angelica? There's no bathymetry available, but That's right. So, um at some point down the line in the future,
[1:04:25] uh uh we are hoping to create a DEM product from SWOT data, but that's not currently available as it requires a lot of data
[1:04:35] to be um acquired and we're still, you know, um in the first couple years of the mission.
[1:04:42] Thanks. Thanks. Question six is why is WISP limited to the US? And um so, answer six here says WISP is developed by the USGS,
[1:04:56] a federal agency within the US. This partnership between NASA and USGS focuses on serving the US water
[1:05:04] information needs and we'll have more information about this in uh part two. Because we're going to have
[1:05:11] demonstration of whisk. Now question seven for SWOT data, when looking at the SWOT L2 level 2 HR raster
[1:05:20] 100 m raster product, what matrix would you use to filter for high confidence since elevation area etc. components
[1:05:29] have their own confidence and uncertainty components? I I I can take that one. Um so as as written here, so there's there's a
[1:05:40] lot of variables within the raster product that you can use and but I I kind of listed out a few
[1:05:46] good starting points ones to start with and that is the quality flags associated with both the water surface elevation
[1:05:51] and water area measurements on per pixel and then as well as the uncertainty associated with those both
[1:05:58] of those measurements. And also the water fraction. So that is each pixel has a an estimate of what fraction of
[1:06:05] that pixel is inundated. And removing low water fraction pixels can significantly reduce the noise of your raster image.
[1:06:15] And then I put a link to where you will find some product documentation to find all of the different variable fields
[1:06:21] because there is some location location specifics specifics depending on your region of interest what your target is what you're trying
[1:06:30] to do would determine what fields you might want to use to to filter the data and and and clean it up.
[1:06:39] Thank you, Matt. Uh question eight, how can I set two and SWOT data be related from their different special
[1:06:48] resolutions like 11 m footprint versus 100 m? So the answer is the comparison would need to be done over similar water
[1:07:02] bodies and then sampled to similar time and space resolutions. Uh this process is typically done by taking the higher resolution product and
[1:07:12] manipulating or averaging to a lower resolution. Uh question nine is for global water measurements data set height variations
[1:07:23] are relative to what? Geoid, ellipsoid, initial water level, etc. And the question is it's with respect to a geoid
[1:07:32] uh and you can find specific information on uh global water measurement site. If you go to frequently asked questions, it
[1:07:40] is described there. And if you want to convert it to uh standard WGS 84, you you there is a
[1:07:48] procedure there too um given. Question 10, when we saw the name of different satellites uh website where um
[1:07:58] 10 Hz and 20 Hz given, what do they pointed? So these frequencies um they show tracking rates or um
[1:08:08] we saw earlier that to get surface elevation, we have to know satellite position accurately as well. And so
[1:08:15] these are the frequencies uh at which satellite positions are are tracked. Uh question 11, if we want to
[1:08:26] operationalize the data acquisition in order to provide an EO service, um will we be dealing with any kind of
[1:08:34] quotas, uh limited bandwidth after too many downloads per month, etc. uh similar to the Copernicus data space
[1:08:41] ecosystem. I I would say Matt and Angelica, if you can um if you have the information, yeah. Y- Yeah, yeah. So uh
[1:08:51] as I don't think uh you're going to be limited by any quotas. If you try to go
[1:08:54] and download the entire NASA Earth Data Archive, um you um the DAACs will reach out to you and ask if you meant to do
[1:09:02] that. Um and and you know, find out what your specific use case is, but as far as
[1:09:06] like regular usage, um you're you're not limited in terms of like download bandwidth or or quotas. Um I will say if you're using some of
[1:09:15] the heavier SWAT um data products, they like perhaps the Pixel Cloud or maybe even the raster over really large
[1:09:22] domains, you're going to have to deal with um managing a large amount of data um on your you know, for whatever with
[1:09:29] whatever compute resources you're using. Um Um but that's the only limitation uh in the in the space that I can I can think of.
[1:09:39] Great, thank you. Uh question 12 is how long will SWAT continue to make measurements? Um at one point I recall
[1:09:46] it was planned for about 3 years. How accurate are SWAT measurements uh of river uh lake height, width, and
[1:09:53] slope? slope? Uh yeah, I can I can take that one, too. Um Um so SWAT, yeah, the the design the
[1:09:59] science mission uh is is uh requirements are to to measure for 3 years, but that doesn't mean it will stop measuring
[1:10:05] after 3 years. Um historically our altimetry missions uh that we've launched have have um far outlasted their initial mission
[1:10:14] design length. Um so, I think the the you know, the nominally the the plan is that it will
[1:10:19] continue to fly um for as long as it has uh the fuel resources and the um and the
[1:10:25] uh uh instrument uh remains uh performative. Um as far as the accuracy of the SWAT measurements, um
[1:10:33] I don't know that we have a a global, say, number for exactly how accurate the mission is. I can give you the mission
[1:10:40] requirements for accuracy and say that we are uh uh that the um all signs point to it uh the the instrument uh vastly
[1:10:49] outperforming these these requirements. Um Um so, the the nominally the the accuracy requirements are a of the area foot area of water that
[1:11:00] you're looking at. So, that is if you're averaging area over smaller and smaller or if you're averaging water surface
[1:11:06] elevation over smaller and smaller areas, the noise in that measurement goes up. So, our our height accuracy is
[1:11:12] relative to the area that you're looking at. So, for lakes and reservoirs, the height accuracy requirement is that it should be one
[1:11:21] 10 cm or better for water bodies whose non-vegetated surface area exceeds 1 square kilometer. And then 25 cm or better for water
[1:11:31] bodies that that are between 250 m squared and 1 square kilometer. And then similar height accuracy for
[1:11:41] rivers, but just as a function of of length and and width. This is for rivers larger than wider than 100 m.
[1:11:49] Um Um And then sorry, I was I was just looking up the slope accuracy. I don't recall it
[1:11:56] off the top of my head. Um but I I can find that and perhaps after the next question we can come back
[1:12:03] to it. Thanks. Thanks. So, question 13, what's the main difference between the acquisition techniques used with SAR and that used
[1:12:14] with altimeter satellites? Erica, maybe you want to address this. So, it's described um that you know, conventional
[1:12:27] conventional radar altimetry um this technique operates by transmitting radar pulse directly downward and measuring the time it takes for the pulse to reflect.
[1:12:38] Um that's just conventional radar and it essentially measures the range to the closest point to the surface with a relatively
[1:12:49] large footprint. Our data is collected along a narrow strip directly beneath the satellite. SAR imagery on the other hand,
[1:12:59] utilizes the Doppler effect by processing a series of radar pulses transmitted as the satellite moves along its track. So, by coherently processing
[1:13:11] the echoes from multiple pulses over a synthetic aperture, SAR altimetry can synthesize a much longer antenna and allows for a
[1:13:21] significant improvement in a long track special resolution. It focuses the radar beam and reduces the footprint size in the long track
[1:13:32] direction. direction. So, but in summary, basically, SAR has this synthetic antenna that creates images high resolution, whereas
[1:13:44] altimeter looks directly below, throws a pulse and measures echo back and converts that to elevation. Question 14, can I use suspect data
[1:13:56] quality points? They are the only ones available in my case. I can take this one. So, the data that is flagged suspect
[1:14:11] currently was done so for a logical reason, but we have made significant developments in the processing algorithms that are currently being
[1:14:21] employed in a in a new version update. And so, there is an ongoing reprocessing campaign to transition the current data
[1:14:30] products from version C to version D. And you may want to have a look at the new version D products because
[1:14:40] some of those suspect data points might now be good. And if they remain suspect, then I um, would recommend treating that
[1:14:48] data with caution um, because there was likely a good reason. Uh, question 15, uh, SWOT measures water
[1:14:58] surface height, uh, but can we get depth from it? I I can take that. Um, yeah, so what uh,
[1:15:06] yeah, so it only measures from the water surface height. It doesn't see anything below uh, the water surface on a single
[1:15:11] observation. So, in order to get water depth, you need to combine it with um, some other source of uh, of of
[1:15:18] information, uh, whether that be if you if you know a DEM or the bathymetry, uh, something of that sort.
[1:15:26] Um, I have found some SWOT um, uh, slope observations, I think vector products in Missouri basin having width
[1:15:38] less than less than 100 m, quality flag between one to two. Why is that if it can see rivers more than 100 m wide?
[1:15:50] Yeah, I I can I can take that, too. So, uh, as you know, as is written here,
[1:15:53] certain high priority uh, uh, water bodies uh, have been added to the database that SWOT uh, can
[1:16:00] process. Um, this we can do this because the instrument is performing better than the mission requirements. Um, and we can
[1:16:07] resolve uh, many water bodies that are smaller than this. However, we can't uh, process all of them uh, for now. So, uh,
[1:16:14] the determination comes by looking at the uh, prior database. So, here's a link to uh, and there there's a link to
[1:16:19] the prior uh, river uh, database um, here where we uh, which essentially decides which rivers are are processed for SWOT.
[1:16:29] So, question 17, is there a way of processing this data in the cloud? I guess they might have very high memory
[1:16:37] requirements. Uh, yes, all the data is available uh uh in the AWS cloud uh from from PoDAC and uh here's a link to a tutorial
[1:16:48] uh that um involves kind of basic accessing the data and and doing some processing on it uh in in the cloud.
[1:16:56] Uh question 18, I'm particularly interested in the variations in water level of small lakes. Uh there are about
[1:17:03] 300,000 lakes in Finland. And um did I understand correctly that the resolution extends to water bodies as small as 250
[1:17:13] m². m². Yes, uh but so small detail, so it's um not 250 m², it's 250 by 250 m. Uh so
[1:17:24] uh which is, you know, about 62 500 500 square meters. So not not as small as as
[1:17:32] uh 250 m² um but um so that that's kind of the the lower limit. I believe the data base the
[1:17:40] uh prior lake database goes smaller than than that um in in some cases uh certainly, so it's
[1:17:47] definitely worth um um taking a look at what products are are produced uh over there. And then a final kind of caveat
[1:17:53] there is even if they are not in the prior lake database, some of water bodies or some uh if the SWOT uh detects
[1:18:01] a water body that looks like a lake, um it will uh um produce a uh the um the lake product for it in the
[1:18:09] unassigned version of the lake product. So if your lake is not in uh the official um the the prior lake database
[1:18:15] product, there's still a chance that it did get um detected and aggregated in the uh in the
[1:18:20] unobserved um or the unassigned uh product. Thank you. Uh question 19, is land area filtered out or not measured, so only
[1:18:32] water pixels are represented? I believe that is true, at least in if you go to global water measurements, the
[1:18:40] lake lake database they have used, it's given there. So, all the water um surfaces are are are used for that and
[1:18:49] not not Yeah. Yeah. So, yeah, so some some Yeah, so for things like the um the raster product and for the lakes and
[1:18:56] rivers, like they're they're really just trying to use like uh use water pixels. Um in the If you go all the way back to
[1:19:03] the pixel cloud, um that does include pixels that are land pixels that are near uh near water. So, um you have to
[1:19:11] look at when you going back to the pixel cloud, you have to look at the pixel classification
[1:19:15] classification um to identify which ones uh are actually identified as water. Great. Great. Um question 20 is, if I wanted to look
[1:19:25] at a river from source to mouth and it crosses um SWAT SWAT would I need to look at all the SWAT or
[1:19:35] tiles or scenes that the river crosses and stitch it all together? Um this is a good question because we
[1:19:43] we're going to have a demonstration of SWAT Wiz tool next in part two uh where you will be able to see different
[1:19:51] reaches of a river. So, you we will talk more about that in part two. Yeah, and if I can add one thing to
[1:19:59] that, um yeah, you you you you do have to stitch the the tiles together if you want to if you're you know, getting the
[1:20:04] data. Um but um I'll I'll put a link to a tutorial um that that follows um how
[1:20:10] you could kind of automate you know, select a a river reach and then automate um getting all of the upstream or
[1:20:16] downstream um reaches as the data from those reaches as well. So, I'll I'll find that link to that tutorial and and
[1:20:23] and include it here. That's great. And and I want to take this opportunity since you mentioned tutorial is that uh
[1:20:29] we are planning an advanced level training where we will go through some of these tutorials. Uh question 21, how do snow and aquatic
[1:20:38] vegetation growth affect the quality of SWAT products? Uh okay, I can take that. So, aquatic vegetation does not strongly affect the
[1:20:53] the uh returns. Um so, that is if you uh yeah, you know, any vegetation that is is under the water surface um is not
[1:21:01] going to or you know, right at the water surface is is not going to affect it as
[1:21:04] much. Um and then we have a recent publication uh like say if it's in wetland areas, so
[1:21:09] herbaceous wetlands. Um and we actually find that SWAT is performing quite well in those in those regions. Um it's still
[1:21:15] an active area of research about how well it does um um uh uh uh everywhere, but we have some some
[1:21:21] good some good signs that shows that it it it does uh pretty well there. Uh yes, uh then question 22, does SWAT
[1:21:36] provide simulations of rivers and lakes in which their measurements, lengths, and volume changes according to the position we move it to?
[1:21:47] Uh there's we don't have uh there's no simulations uh included in these um the the the the current suite of SWAT
[1:21:54] products. They're they're purely based on the the observations uh from the satellites and some some a priori a
[1:22:00] priori data sets. Uh question 23, what is the accuracy of water elevation observations? And does it vary? So, yes, it does vary with
[1:22:12] satellites used. And if you look at Topex, uh Poseidon, and Jason series, um you will see that the numbers that uh
[1:22:22] are quoted there are 3 to 5 cm uh accuracy. accuracy. And uh I think it's comparable to SWOT.
[1:22:31] Yeah, yeah, yeah. I so that you know, I I mentioned up above that we have the the mission requirements and then and
[1:22:36] then some a lot of signs that we are performing better than the mission required uh we're exceeding the mission
[1:22:41] requirements. So, um in the in the previous question um we'll we'll include uh kind of the what the mission
[1:22:46] requirements are for SWOT and and that um nominally it seems to be doing uh considerably better. Great. Thank you.
[1:22:55] Question 24 is um can you explain the parameters under SWOT level 2 HR raster 100 m? Uh yeah, so that's related to the
[1:23:04] question earlier where I I asked about how to filter the the the raster product. Um so I there I included like how to um the
[1:23:13] the parameters that you might use to to clean up the data. Um kind of the main features of the data product are the um
[1:23:20] WSE and uh you know, the water surface elevation and the water area um estimates for each uh
[1:23:28] 100 m or 250 m pixel. Um so those are kind of the main data um you know, the
[1:23:32] main main uh uh the the the valuable data um variables and then the rest is uh there to uh help
[1:23:40] you clean it up and interpret those variables. variables. Um and then above there's a link to the
[1:23:45] uh uh documentation documentation uh for the product where you can really dive in because there there are quite
[1:23:50] there's a great uh number of of variables within the product. Question 25 to clarify, one SWOT image
[1:23:59] is a radar image and we need two images to make an interfe- interferogram or is it an interferogram itself? If the
[1:24:07] second is correct, what images are being used to create the interferograms? I have downloaded a couple of images and
[1:24:14] each file has several raster layers. Uh okay. So, I I guess the the first part um so it it um the SWAT satellite actually
[1:24:24] has two two antennas on on each end of it. So it's it's making the interferogram in one observation rather
[1:24:32] than than you know if if you've used other SAR sensors you may be used to making an
[1:24:37] observation and then coming back some other point in time and making the interferogram through time. This is
[1:24:42] making essentially making interferogram at the same time with the with the two sensors. Um So so but that is with the data products
[1:24:52] we've gone over you shouldn't have to worry about interferograms. I would really highly suggest unless you're a radar expert to start
[1:25:02] with the with some of these higher level products and then work your way back as you need more information to to
[1:25:08] interpret them. And then to kind of get in with their the raster product yeah comes with a number of
[1:25:16] layers so it comes as a it's a net CDF file and within there there's you know tens of
[1:25:23] of data variables and each of those variables has its own layer. But all of those layers correspond to
[1:25:30] the same observation in in time and space. I hope that answers this this question. Thank you. Question 26 what is the
[1:25:40] difference between obs unassigned and prior? prior? That's a great question. So the lake is referring to the lake product that comes
[1:25:48] in three different flavors. So for every SWAT observation if you go to get the lake product there you'll find three
[1:25:55] different types of lake product that coincide with the same spatial temporal observation. And that's obs unassigned and prior. So prior is
[1:26:06] referenced directly to the database so every lake in the database will have one polygon in the final in
[1:26:14] the in the SWAT product in the in the SWAT measurement that flies over it. Um Um Obs is still referenced to the database,
[1:26:22] but it allows for lakes to uh to split and join. So, that is if two uh two
[1:26:28] separate lakes in the database actually expand and grow or to the point where they they join to be one continuous
[1:26:34] water body, in prior, they will be um um uh they will be split down the middle um
[1:26:40] kind of arbitrarily. Um but in in Obs, they will be joined as one single water body. Uh and then and referencing those
[1:26:48] two objects in the initial uh database. And so and the you know, the the the same could be said about uh one water
[1:26:54] body in the prior that splits into two. Um so, that there's kind of a a very fine distinction between the differences
[1:27:00] between Obs and prior. Um unassigned is uh are water bodies that SWAT detects that are not included
[1:27:07] in the database, but still look like lakes or or rivers. Or they still look like lakes. Lakes or reservoirs, sorry.
[1:27:14] Um so, that is if there's a water body that's not in the database, um but SWAT sees it, it will still produce a polygon
[1:27:21] with those aggregated uh variables uh uh uh uh uh in the and that would show up in the
[1:27:26] unassigned. Q Met. Uh question 27 is all satellite data products come with certain limitations or inherent errors even
[1:27:38] after processing and filtering. In the case of SWAT, particularly for elevation, river, and lake products, what types of errors or uncertainty
[1:27:47] should be should we be aware of? Hm, okay. Let's see. Well, there's uh There there there is a lot of um
[1:28:03] um um Let's see. Can Can we come back to this one? I'll prepare my answer a little bit
[1:28:06] a little bit more. Definitely, yes. Thank you. Uh yeah. So, all the question and answer, this will
[1:28:13] be available through our website later on, so in a week or so. So, we'll post all the correct answers. Yes. Yeah, all
[1:28:20] all the answers. Mhm. Question 28 is, can you explain the parameters under SWOT level two HR? I
[1:28:27] think you mentioned this before. Yeah, I think we've already had a question on this. So, so yeah, we've got a link to
[1:28:33] the documentation. I've kind of gone over the main the main ones to to be aware of. Um
[1:28:39] Yeah. Thank you. Question 29. Are there any indices for IDs containing the particular reservoir or continent? Uh yes. Okay, so to get the reservoir or
[1:28:53] lake or reservoir IDs, you would need the prior lake database, which is distributed by uh the French space agency, our our
[1:29:00] partners on this mission. Um and I'll I'll provide a link to uh how you download that. Um as far as uh
[1:29:08] let's see, continent, um I'm not sure if this is what the this question is asking, but in um uh the the
[1:29:15] SWOT I think most of the the high rate products um are broken down by continent as as certainly the SWOT oriented ones
[1:29:24] are, like the lake and river product. That is if if one um pass of the satellite crosses, say,
[1:29:31] uh North America and South America in one go, that um that data product will be split in half.
[1:29:38] It will will be split at the continent so there's a certain continent code associated with each um with with with
[1:29:45] these products that you can use to help uh narrow down your your uh search for the product. Um and I can I can provide
[1:29:51] a a link to the uh a page a tutorial from PO.DAAC about um that lists all those continent codes and has a little
[1:29:59] more information about um spatial search. Um I think we'll take one or two more questions and then we'll address the
[1:30:09] rest of the questions later on. Can we use this data to estimate water quality parameters? So no, SWOT can only provide elevation
[1:30:20] data and all altimeters they only provide elevation data and water quality information is not available here, but
[1:30:29] our site has a number of training about water quality. You can look at our website. The latest one was using PACE
[1:30:36] satellite. And so we will provide links here. Last question, how does high relief topography near water bodies impact
[1:30:47] measurements? For example, the Grand Canyon, Arizona. Yeah, so the high high relief topography can have an impact on the on the measurement
[1:30:58] depending on the its orientation to the to the SWOT sensor itself. The The the degree to which it's impacted yeah,
[1:31:11] is highly dependent on on the observation geometry. Thank you. We're almost at the end of our session here. We have a few questions
[1:31:28] left unanswered that we will answer them and post them on our website in a week or two after today after the
[1:31:36] training is over, but we really want to thank you all for attending today's session and our our
[1:31:42] special thanks to Dr. Bonema and Dr. Rodriquez Rodriquez for for for their presentations, their help and answering all the questions. We really
[1:31:52] appreciate your help. And there's a lot of good information here. All the slides, our presentations and recordings will also be available from
[1:32:03] our website in in a few days. So again, thank you for attending today's session. I also want to acknowledge our our set team
[1:32:13] here, our coordinators Selvin Hudson Odoy and Brock Plevins and Natasha Johnson Griffin. Also want to thank Sara
[1:32:22] Caswell, Jonathan O'Brien and Susan Monty for for their help with editing and communication about this training training and so on behalf of Shawn McCartney and
[1:32:35] Erica Porteus, I really thank you all for attending this session and we hope to see you on
[1:32:42] 15th. 15th. We'll have more demonstration on VSB and SWAT ways. So So same time and same you'll we'll see you
[1:32:53] here. here. Thank you so much.
