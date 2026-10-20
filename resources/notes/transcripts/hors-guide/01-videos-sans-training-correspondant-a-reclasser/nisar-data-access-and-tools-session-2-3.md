# NISAR Data Access and Tools, Session 2/3

`https://www.youtube.com/watch?v=B1HPbpfg4oI` · id 357 · 2:07:09 · module 311 — Vidéos sans training correspondant (à reclasser)

[00:01] Hello and welcome to this webinar series harnessing NISAR next generation radar observations for Earth applications. I'm Erica Podest, the scientist at NASA's
[00:12] Jet Propulsion Laboratory and also an instructor with the ARSET program. Today's session will be an overview of
[00:19] NISAR data access and tools, which will be delivered by invited experts, Dr. Franz Meyer from the Alaska Satellite
[00:28] Facility and the University of Alaska Fairbanks, by Heidi Christensen from the Alaska Satellite Facility, and by Anupama Sharma from the National Remote
[00:41] Sensing Center, Israel. This is the training outline. Today is the second session of this three-part webinar series.
[00:53] The third and last session will be next Thursday at the same time, and that's going to be focused on monitoring
[01:00] earthquakes, volcanoes, and landslides with NISAR's InSAR capability. As a reminder, there is one homework associated with this training. It will
[01:11] open next week on the last day of um the the training um on July 16th, and the homework is due
[01:21] on August 6th. You can You will be able to access the homework through the training webpage. There will be a certificate of
[01:30] completion awarded to all of those participants who attend all of the live sessions and complete the homework
[01:39] assignments by the due date. Next, I'll provide an overview of today's session. So, these are the objectives for today's
[01:51] session. session. By the end of the session, participants will be able to identify where to access date NISAR data, whether through the
[02:01] Boon ED platform, ISRO's Boon ED platform, or the Alaska Satellite Facilities Facilities uh platform. Participants will be able to recognize
[02:11] the data format and tools for reading the data, and apply tools for visualizing and analyzing NISAR data.
[02:22] How to ask questions? To ensure we see your question, please write your question in the Q&A box,
[02:30] which you can locate it um by doing a click on the three dots in the bottom right of your um uh of the
[02:39] window window in the platform. And there you'll see a Slido, a Q&A option, and you can also see a standalone Slido
[02:48] tab or app. Write your questions or all your questions there, and we will answer them during the Q&A session at the end. And
[02:57] we will try to answer all the questions during the Q&A session. The remaining questions will be answered
[03:04] in a Q&A document, which we will post on the training website about a week after the training.
[03:14] Today's guest instructors are Dr. Franz Meyer, who's a professor of remote sensing at the University of Alaska
[03:20] Fairbanks, and chief scientist at the Alaska Satellite Facility. Heidi Kristiansen, who's a senior GIS specialist at the Alaska Satellite
[03:30] Facility, and Anupama Sharma, who's group lead with the data dissemination and workflow automation group at the National Remote Sensing Center at ISRO.
[03:42] So, we'll start out with Dr. Franz Meyer, Meyer, and welcome to all three of our guest instructors. It's a a real privilege to
[03:53] have them be presenting here today. Welcome Dr. Meyer and the floor is yours. >> Thank you Erica for the introduction.
[04:05] Yes, so NISAR data will be available in various places. One of the main ones is the the Alaska satellite facility
[04:14] and its discovery services that Heidi is going to present to you later on in this in this session.
[04:21] So ASF is an organization at the University of Alaska Fairbanks and our main goal is to make remote sensing data
[04:29] accessible including those from NISAR but including also other data sets that we hold in the archive. ASF is a remote sensing center
[04:39] specializing in synthetic aperture radar data sets and we operate the NASA data center for SAR data which is hosting data back to
[04:49] 1978 and is also hosting managing NISAR's L-band data sets those those that are being processed by JPL on a global scale.
[05:02] In addition to just hosting the data and making them discoverable, we also provide provide a bunch of tools and
[05:08] services and additional resources, training materials and so on so on that help you working with SAR data
[05:15] sets, sets, understand the content of the data, how to access the data and how to do various
[05:21] applications with the data sets. All data that you discover through ASF NISAR of course but also the other data
[05:29] sets we host are freely and openly accessible for you and for download and for doing your research work.
[05:37] So let's talk briefly about NISAR data availability and accessibility. So currently NISAR data there is a set of free
[05:47] calibration data sets available through ASF. ASF. It's a little bit more than 100,000 products products that were acquired prior to February
[05:56] 2026. 2026. Um this the coverage map that you show on this see on the slide shows you all
[06:03] of these data sets are located. These are really there to get you used to the data set to get you used to how you read
[06:09] these data sets, what layers are contained, what types of products will become available. Um information about these
[06:18] pre-calibration products, including some known issues with this particular set of products, can be found on the following
[06:25] the link that's on this slide. Um very very soon in July of 2026, uh we expect the global release of
[06:34] forward process NISAR data sets to become available. So this is when really starting from July 2026, all the
[06:40] observations going forward will be accessible on a global scale through ASF, all the L-band NISAR data sets.
[06:49] Um if you have questions about uh data releases releases uh and and products that are available through ASF, you can follow this link
[06:58] here that says NISAR data user guide uh available NISAR data sets. So this link will get you to a page where latest
[07:06] uh release information is being tracked. So NISAR, in contrast to many other traditional SAR missions, is providing a
[07:14] larger suite of data products. Um so of course we will provide the traditional level one SAR data products
[07:21] that you are used to if you have used uh SAR data before. Uh this includes um um RSLCs. These are radio coded single
[07:29] or complex images. So these are data sets that contain both the full amplitude information, so the image
[07:35] information, but also the underlying phase content which you would need if you wanted to uh do a nicer um inside
[07:43] type applications. The RSLC data are available on a global scale. scale. Additionally, in selected regions, uh particularly uh the cryospheric regions,
[07:54] so the large ice caps and the the large glaciers, there's also a radar coded interferogram available, the RIFG
[08:01] product. It's a range Doppler wrapped interferogram, and also a range Doppler unwrapped interferogram. So, if you are
[08:08] familiar with interferometry, these products uh might be useful for you uh to do some uh displacement analysis in
[08:15] these cryospheric regions. Lastly, there's an offset product available. So, these are pairwise pixel offsets calculated between pairs of
[08:24] images. images. Uh these offsets also useful to track motion in the cryospheric region. So, these are, you know, level one data
[08:32] sets. Uh those are more familiar to to folks that have used SAR before, but NISAR will create additional products
[08:39] and make available additional products, so-called level two products. These are still radar observables, so amplitude and phase information and polarimetric
[08:49] information, but they're available now in a geocoded uh form, so in a in a ground coordinate system.
[08:56] Uh and so, the products are listed here on a global scale. We have the GCOV product, the geocoded covariance
[09:02] product. This is just a complicated word for saying these are the normalized radar backscatter layers for each
[09:09] polarization. So, you have in for most land areas, you have a horizontally polarized um fully calibrated image uh available
[09:17] there, and also a cross polarized polarized uh fully calibrated uh amplitude image that you can use for
[09:24] mapping, or if you have sequences of them, as we'll show you later, you can use them to look at changes uh in the
[09:31] environment. environment. The GSLC product is a geocoded single look complex product that's also globally available. Again, this is very
[09:40] useful for folks that want to get into interferometry. interferometry. It gets you very rapid and easy access
[09:46] to interferogram generation. To create an interferogram, you simply will have to cross multiply two repeated images, two repeated GSLC images.
[09:59] Then there's a G on wrap or gun gun W products that we often call it. It's a
[10:03] geocoded unwrap interferogram. So this is one that's ready to go for your analysis of geophysical displacements. It captures displacements of the Earth's
[10:14] surface that occurred between two subsequent images, so within a 12-day time period. Associated with that are also coherence
[10:23] layers. They are really useful for coherence change detection to identify damage or to identify deforestation or any kind of other
[10:33] change feature that you're interested in. in. And lastly, again over the cryospheric regions, there's another offset product,
[10:40] a geocoded offset product similar to the what the level one product that I talked about earlier, but this one's really
[10:46] good to give you offset estimates in a UTM or polar stereo projection. The image on this on the
[10:55] on the right-hand side shows you one of these unwrapped interferogram products of a co-eruptive interferogram for an
[11:02] earthquake in Ethiopia showing you the kind of phase quality and displacement quality that NISAR will be able to give
[11:08] you. you. Lastly, in terms of data products, there's a level three data product that's also being made available. So
[11:15] this is a science product. It's called the SME2 or the soil moisture a soil moisture retrieval product.
[11:23] So this provides you soil moisture information at a 200-m pixel spacing derived using three independent algorithms. So there are three
[11:32] algorithms that are listed here that are used to derive soil moisture. So, you get three different layers.
[11:38] Um and these algorithms that differ um >> [clears throat] >> They have different dependencies on time series. So, some use more time series
[11:47] information, some less. Uh some use more ancillary data, some less. Some do more regularization, some less. So, you get three solutions that
[11:55] you can compare and analyze uh for your soil moisture applications. There are also additional layers included in this data set. Um you have
[12:05] the 200-m aggregated radar brightness information for all polarizations and additional reference information like insula- incidence angle maps and
[12:14] statistics information. The uh soil moisture product has an accuracy goal of 0.06 cubic meters uh um over over unflagged areas.
[12:27] Um uh you know, allowing for areas that have a vegetation water content below 5 kg per square meter.
[12:36] So, there's a lot of uh calibration and validation that was done uh for this product. Uh they were pre- um launch
[12:43] calibrations where um ALOS 2 images were used to simulate NISAR data sets and do the validation. And in post-launch, there's uh sparse um
[12:53] soil moisture networks that are being used for calibration as well as there are supersites that are being used to
[12:57] ensure that the product meets uh requirements and user expectations. So, these are all the data sets that are
[13:04] available through ASF, the Alaska Satellite Facility on the NASA side, but there is additional data available through the Indian Space Research
[13:13] Organization, ISRO. Uh remember that NISAR is a two-frequency mission. It carries an L-band radar, but also an S-band radar.
[13:22] And all NISAR S-band data will be distributed through ISRO uh through uh the discovery uh portals that ISRO
[13:30] provides. provides. In addition to that, ISRO will also distribute some L-band data. These are data collected concurrently with S-band
[13:39] acquisitions over areas of interest to ISRO. ISRO. And so, the ISRO distributed L-band data might have slight differences compared
[13:48] to the ones um available through our through the NASA interfaces. They're independently processed um and may look um have some
[13:58] value differences compared to the ones that you get from NASA. The locations where S-band data are are
[14:04] available are shown in these maps. Uh so, you see some areas in the Antarctic, of course, lots of areas in
[14:10] India and around India, but also certain um um selected areas uh throughout the rest of the world.
[14:18] To discover um the S-band data hosted by ISRO, uh ISRO has uh a very nice uh discovery platform that's called Bunedi.
[14:28] The link um on this page, the one behind NISAR information page, gets you to the Bunedi page, uh specifically the one
[14:36] that's designed for NISAR. Gives you some background information about the mission. Uh and if you scroll down,
[14:41] there's then information about how to access uh and discover uh NISAR data sets. You will hear more in this session
[14:48] about uh ISRO's capability from a presenter uh from ISRO itself. And with that, I am handing it off next
[14:58] uh to Heidi for the next section of the training. >> Thanks, Franz. There are a number of tools available
[15:08] that allow you to find and access NISAR data. Vertex is ASF's data search portal. It's a map-based interface that you open in
[15:20] your web browser, and it allows you to explore and access all of ASF's SAR holdings. holdings. This interface is really optimized for
[15:28] looking for SAR data. There are customized filters that allow you to search for things like polarization, orbit direction, product
[15:36] types, or acquisition modes. And each data set that you can search for in in Vertex has a custom suite of
[15:44] filters. filters. Vertex allows you to view all of the available products for a mission in the same search results.
[15:52] And in the background, what's finding these data sets is actually the ASF search Python package. If you're interested in interacting with
[15:59] the data programmatically, you can use ASF search to build a script that will find and access any of ASF's data
[16:07] holdings. holdings. So, let's take a look at Vertex. When you open Vertex, by default, it will be a geographic search for
[16:18] Sentinel-1 data. We can search for NISAR data by clicking the down drop-down menu and selecting NISAR. NISAR. You can see that there are more than
[16:27] 100,000 files available, so it's important to apply search filters. One of the easiest ways to restrict your
[16:35] search is to draw an area of interest. So, by default, I can just draw a rectangle, rectangle, but I can also place a point, a line, a
[16:45] polygon, draw a circle, or even upload a geospatial file. This brings my search down to 181 files,
[16:54] and I can also apply some additional filters, including a date range, and I can search for a particular product type.
[17:06] If I don't select anything in this in this menu, it will return all of the different products in my search,
[17:13] but I can restrict it to a single product, or if I have several products that I want to to include, I can select
[17:20] all of the desired products. I'll just search for the G-cubed products. products. Now, going back to the area of interest,
[17:27] you can see that the area of interest that I drew is is indicated here, but I have this option to import a
[17:33] geospatial file. I can use a shape file, GeoJSON, or KML if I want to use that to
[17:38] set my area of interest. >> [snorts] >> If I scroll down, you can see that there are a number of additional filters, and
[17:44] as you become more uh familiar with the data set, you may want to use some of these filters to further restrict your
[17:50] search. search. Uh if you're unsure of what the filter is used for, you can click the documentation link. So, for example, the
[17:57] scene name patterns, this documentation link tells you about the ability to use a wildcard query to search for any
[18:04] portion of a NISAR file name. So, I'll launch my search, and I have 33 results. If I click on an item in my results,
[18:19] you can see that it displays the footprint for that item in red on the map. I can also
[18:27] click on the map to select a footprint, and it will highlight a product with that footprint in my results.
[18:35] If I find a product that covers my area of interest particularly well, I can use the more like this button
[18:41] to restrict my search to just items that have that same footprint. Essentially, what this is doing is
[18:47] adding a track and frame filter to my search, search, and that uses the track and frame from
[18:53] that that granule that I selected. So, now I have a list of seven files that all have that same footprint.
[19:02] If I click on one of these files, you can see a a long list of associated files that I can download.
[19:09] For most people, the HDF5 file for that product is what you're interested in. And I can either just click on this
[19:16] download file icon to launch the download directly in my browser, or I can choose to add the file to my
[19:23] download queue. If I want to explore the images a little bit more before selecting which ones to
[19:30] download, I can choose this option to open the image viewer. And I can actually zoom in to browse
[19:37] images and examine my area of interest a little bit more closely. That zoom extent is is kept as I go
[19:45] through the different products. And if I find a product that I like, I can also launch a download directly from
[19:53] this interface. So, I can either download it through my browser or add it to my queue. You can see that I now have two items in
[20:03] my download queue. If I decide that I actually want all seven of these and and I want to do a
[20:10] time series analysis, I can use this queue button at the top of the list and either download all associated files
[20:17] or just select the file types that I want. want. So, I can select all seven G-Cov HDF5
[20:23] files and add that to my downloads queue. queue. Now, you'll see that I have seven items. It recognized that the two that I'd
[20:30] added already were already in the list and did not duplicate them. So, I now have seven items ready to
[20:36] download. I could just go through and click each one of these download icons, or I could leverage the option to
[20:43] download a Python script. If I download a Python script, it saves that that to my computer and I can simply launch
[20:52] that to download each one of the items automatically in in order. I can also use this option to copy the
[21:02] URLs. So, if you have a script that you already used to access data based on their URL. You can copy that list.
[21:10] Or if you want to use direct S3 access, these products are stored in AWS S3. And so I can copy a list of the S3 URLs as
[21:21] well. As I mentioned, in the background, ASF search is doing the work to find these products. products. And there is the option
[21:32] with for any search that you do, you can export a snippet, a Python snippet that shows you
[21:39] what was done to find these data sets. And so if you're interested in getting started with the Python package, this is
[21:45] a great way to start as it shows you the particular syntax that would be needed to find those data
[21:51] sets. So that's Vertex. Let's take a look at Earthdata Search. Earthdata Search is similar to Vertex in
[22:04] that it's a map-based interface that you run in your web browser, but rather than just having access to SAR data sets, you
[22:11] can search for any data set in the Earthdata system. Many of you may already be using Earthdata Search to find data, and you
[22:19] can now search for NISAR in that same in that same location. Earthdata Search provides built-in support for Harmony data transformation
[22:27] tools, which I'll talk a little bit more about later. >> [snorts] >> And similar to ASF search, the Earth
[22:33] Access Python package allows you to find and and access data from any of the Earthdata Earthdata any of the Earthdata collections.
[22:45] So let's launch Earthdata Search. The landing page is simply a search bar. I can type in NISAR.
[22:54] And you can see that there are 49 collections that match my search. Not all of these are actually collected
[23:00] by the NISAR mission itself. So you may want to use this platforms filter to restrict the search to just NISAR.
[23:08] So, I'll select space-based platforms, Earth observation satellites, and then NISAR. There are still quite a few collections,
[23:18] and so if you're just exploring the data set and you're not exactly sure what you're looking for, the processing
[23:24] levels may be helpful. Now, these descriptions are more specific to optical imagery, so they don't always translate to SAR, but level
[23:33] zero is still raw data for NISAR. The level one data are any data sets that are still in the range Doppler
[23:40] coordinate system or the the radar geometry. geometry. Level two data has been geocoded to a map projection,
[23:48] and then level three data are higher level products generated from those level two products. The only NISAR level three data
[23:55] available are soil moisture products. Now, the 1A designation is used for any of the ancillary data sets for NISAR.
[24:05] So, this is mostly for users who are doing some advanced processing and want access to data sets such as the orbit
[24:12] ephemeris files. So, I'll restrict my search to just level two data, which are the geocoded products, products, and you can see that there are a number
[24:20] of options. I can apply again a spatial restriction, restriction, so I'll draw an area of interest on the map,
[24:32] and I can also set a date range. To see the actual products, I need to select a collection, so I'll look for
[24:40] the the data, data, and if I click on an item in the results, it shows me the foot
[24:49] Or again, I can click on a footprint on the map to highlight one of those products in the search results.
[25:01] If I find a product that I'm interested in, I can click on the download icon, and this gives me a link to the to
[25:08] download the download URL. I also have the option to copy the S3 access path. Or, I can add this item to a project.
[25:20] So, this is similar to the download queue in Vertex. So, I'll add a couple of items to my
[25:28] project project and then open it up. You can see that this is redirecting me to my Earthdata to use my Earthdata
[25:39] login credentials. And Earthdata login credentials are required when downloading data from Earthdata, and this same login applies
[25:49] to any data set across the Earth observation platform. So, you just need one set of credentials to download anything from Earthdata.
[25:59] Uh if you are logging in and you don't already have Earthdata login credentials, there will be a link where you can register.
[26:07] It's free, and it's very fast, and and then that gets you access to all of NASA's Earth observation data.
[26:14] Uh the same thing applies in Vertex. Here I have some options for for downloading. I can either just download
[26:23] all of the HDF5 files, or I can choose to customize the data sets. sets. Now, Harmony is Earthdata's data
[26:31] transformation tool. Um it allows you to extract or pull out data in the format that you want to use
[26:40] it in your application. >> [sighs] >> So, for the nice the nice R G curve products, the net to cog service is
[26:48] available, and this allows you to extract individual data sets from the HDF5 file and output them as
[26:55] cloud-optimized GeoTIFFs. So, if I select that option, I can click the edit variables button, and you'll see that there's a data structure inside
[27:04] of the HDF5 file. I'll go into this more later, later, but there are a number of different data
[27:09] sets all packaged together, including from different frequencies. Now, I can select individual products that I'm interested in,
[27:19] and rather than downloading the entire HDF5 file, it will extract each one of these layers as a cloud-optimized
[27:27] GeoTIFF and provide me a download link just for those products. So, if I click the download data,
[27:34] instead of having a list of links ready, it's uh shows me a status page where in the background Harmony is extracting
[27:42] these layers and preparing download links for me to use. So, I can come back later, and um
[27:49] there'll be something that looks like this, which is a list then of all of the the different individual layers that
[27:56] have been extracted. The Harmony interface in Earthdata Search is currently being overhauled, so things may actually look a little bit
[28:04] different later this summer. The functionality will remain the same, but don't be surprised if the the menu looks
[28:11] a little bit different. Uh we will provide update guidance for how to use the new interface in our
[28:16] NISAR data user guide, which is a resource that I'll talk a little bit more about later on.
[28:24] So, that's Earthdata Search. >> [snorts] >> Now, as Franz mentioned, NASA serves the L-band data from the NISAR mission,
[28:33] and the Indian Space Research Organization serves the S-band data. I'm going to pass it over to Usha to
[28:40] introduce you to ISRO's data discovery platform. >> Hello everyone. I am Anupama Sharma from National Remote Sensing Center
[28:55] ISRO ISRO and today I'll be talking on Bhuvanidhi, which is ISRO's EO data hub and also on
[29:01] the access mechanism of NISAR SR and ISRO interested LSAR data from Bhuvanidhi. My presentation will uh majorly cover
[29:14] the introduction to Bhuvanidhi, the NISAR information side, uh the data access mechanisms and tools available at Bhuvanidhi for
[29:23] analyzing the NISAR data. Bhuvanidhi is ISRO's EO data hub and it hosts an extensive IRS and non-IRS
[29:33] catalog for the data which we have acquired since 1988 and daily acquisitions which we do at our ground
[29:40] station, covering India and surrounding regions, are also added to the catalog of Bhuvanidhi. We also facilitate the regional
[29:48] distribution of Sentinel data and also the data of Landsat 8 and 9, which we acquire over our ground station.
[29:56] Bhuvanidhi provides a single window interface for both open and commercial that data access with a near real-time visualization tool
[30:05] and the data dissemination at Bhuvanidhi is guided by the Indian Space Policy 2023 2023 and as per that, even the NISAR SR data
[30:15] and the LSAR data of ISRO interest will be available as an open data access at Bhuvanidhi. Like I said, Bhuvanidhi has a vast
[30:26] archive of data. To begin with, the Resources series uh ranging uh from 5 m to 56 m sensor
[30:34] LISS 3, AWiFS and LISS 4 uh wherein we also have global coverage. Then the SAR satellite, which is RISAT
[30:43] 1A. And the acquisitions on the left side show the medium resolution scan SAR sensors acquisition. Wherein it show
[30:54] shows the global archives as well. Then as I said said we are the regional distributors of Sentinel 1A and 1B. This
[31:02] is how the archive is at Bhuvanidhi. Then the Landsat 9 acquisitions. The NovaSAR data which we have at our
[31:13] archives. archives. Moving on to the Oceansat series satellite which has the local area and global area coverage and in the global
[31:22] area coverage the entire globe is covered in two days. Even that data is available at Bhuvanidhi for access.
[31:30] To the same archive we we will be adding the NISAR data as well. The The image shows the G-COF product of NISAR
[31:40] SAR which we took for a smaller data range just to give a feel of how the SAR
[31:45] data spread is available at Bhuvanidhi. We have also launched the NISAR information website wherein we have made
[31:54] every information available on the NISAR specification. specification. The observation plan for SAR data, the data products formats, the access
[32:04] mechanisms and the science and application and the associated resources. resources. So from the NISAR page itself since we
[32:15] have also provided the data access mechanism details at the site you can move on to the data download
[32:23] Bhuvanidhi page directly from the information page itself. These are the products which will be available at Bhuvanidhi. The starting
[32:33] from the level zero product which are the raw science products to level one which are the products in
[32:40] radar coordinates and the level two products in geographic coordinates. Eventually, we will be also adding the level three and level four products
[32:48] which are the large India mosaic, large area mosaic, and the science products. These products are available in the H5
[32:56] format. format. This slide shows the type of products of NISAR both for S and L SAR and the volumes of those corresponding
[33:08] product wherein you can see the volume ranges from 0.5 GB and it goes up to 54 GB for the S SAR data products.
[33:19] Coming on to the NISAR data access mechanisms, the data will be available as an open data and the two major access mechanisms are
[33:28] the browser and order wherein we have provided a web interface where the data can be searched and then adding on to
[33:35] the cart with using an interactive map interface, the data can be then downloaded. For programmatic access of
[33:43] NISAR data, the APIs are also available. We have enabled the spatiotemporal asset catalog which makes our catalog
[33:52] interoperable and writing a Python program, the data can be daily taken from the catalog that Bhuvanidhi. Bhuvanidhi. We have the data visualization tool as
[34:03] well and the near future we plan to release the VISTA tool which will be augmented for NISAR data
[34:11] and based on the augmentation of resources which we do at Bhuvanidhi, we will be planning to release the code lab
[34:18] as well as the Geo raster platform which are for online coding as well as for readily available tools at
[34:25] Bhuvanidhi for NISAR data processing. So, to begin with the direct download access of NISAR data, this is for the
[34:34] users who would wish to browse and download the data sets through a map-based interactive web application. We have provided various search options
[34:44] to target the area of interest. Various advanced filters specific to NISAR data ordering are also provided like track, frame, polarization, radar
[34:54] config, and node. The data sets can be searched using these filters. They can be then download downloaded after adding to the cart. So,
[35:04] login is mandatory. That That means you have to register at Bhuvan Nidhi and once you get the user ID,
[35:12] you can access the data. So, if we go to the steps which are to be followed in
[35:17] order to get the direct access of the data data after the registration is done and the login credentials are available,
[35:25] on login, you have to then get the target area of interest by specifying the AOIs, the period of interest, and using various
[35:35] filters, the common as well as the NISAR specific filters. So, the video on the right side is
[35:43] actually depicting a small session of how the data can be downloaded from Bhuvan Nidhi. It shows various filters which are
[35:52] available and selection of those filters can be done and then based on the filters selected, the satellite and
[36:01] sensor and product combinations are to be taken. We have added all the NISAR satellite uh sen- product combinations at the
[36:10] filters. And once the product is selected, selected, you can also go for advanced filters which are specific for NISAR data.
[36:20] Like I said, the polarization, the radar config, node. And once the sent- uh satellite specific filters are selected,
[36:32] on click of submit button, Bhuvan Nidhi fetches all the data products which are available at the archive for those filters.
[36:43] Besides every every scene which we fetch, this is the sub-sample view of the product. So, beside the every scene which we
[36:51] fetch, there are some tools using which the data can be either published onto the map, the metadata can be seen, and
[36:59] the same metadata can be downloaded as well. well. The video is showing the same. And once the product is added to the
[37:08] cart, the the cart option is to be selected, and you can see the product which was added to the cart. So, suppose if the
[37:20] product is available at our live archive, over the scene we make a green window, which information to the user
[37:27] that the product is available, you can directly download. If there is a red window above it, then
[37:33] that means we that is a delayed download, we will be bringing it from our cold archive. So, this is how the product gets
[37:40] downloaded. Now, if the data is to be programmatically accessed, then we have made available the Bhuvan Nidhi APIs
[37:51] through a REST-based API. We have also enabled a specification page at Bhuvan Nidhi, which gives every detail about
[37:59] the APIs, right from authentication to data search to data download. Because it is available as a spatio-temporal asset
[38:07] catalog, we have even given small programs which can be then seen, and a Python program can be then written to
[38:14] directly download the data using the program. program. The right side shows the NISAR data collections uh which will be enabled for
[38:23] uh for the NISAR data. Uh very soon in near future, we plan to release first uh visualization of NISAR
[38:34] data. data. And then uh the code lab platform using which which is a Jupiter Hub interface using which online coding can be done
[38:44] on the BHUNIDHI platform. Now, in order to analyze these products, uh we have added few tools at BHUNIDHI.
[38:54] To begin with is the HDF to TIFF conversion tool, which converts this NISAR data sets in H5 format into
[39:01] GeoTIFF. GeoTIFF. And it also supports the special subsetting, which enables the users to extract only a smaller area of interest
[39:11] by providing the by providing either a point or a location or a polygon as a shapefile. shapefile. Then the next tool is the SAR Pole tool,
[39:19] which is available as an integrated package with QGIS. And it has a comprehensive suite of utilities for SAR data processing
[39:28] and analyzing by providing advanced hybrid polarimetric decomposition techniques. techniques. So, it facilitates tools for leveraging the rich information content of NISAR
[39:40] data sets and enables SAR-based application within an open-source GIS environment. environment. Very soon, we are planning to release
[39:50] our NISAR reference observation plan visualization tool, which will actually help the user to know how, when, and
[40:00] where the NISAR data is actually planned and to be acquired, and then subsequently, when it comes to our
[40:07] archive, we will try to bring the footprints of that data also on the tool. tool. >> [snorts]
[40:13] >> So, by using filters such as observation cycle or a time range or a radar configuration ID or the node, the users
[40:21] can see how the observations are being planned. planned. And over that, even the track and frame footprints can be put. And users will
[40:30] know exactly how at a given time which observation was planned. We have released a limited set of NISAR
[40:41] S-band data sets at Bhuvanidhi. The information about the release detail is available at the URL which is put on the
[40:48] slide at the bottom right. Uh in the first release, we have put RSLC, GSLC, and GCOF products, which are
[40:58] not only covering the Indian land mass, but we have also selected few global locations. locations. This this release is
[41:06] uh for the users to understand the data structures, the product format, and the characteristics of NISAR S-SAR observations.
[41:18] Uh this brings me to the end of my presentation. presentation. But before that, uh we have a resource
[41:24] page at Bhuvanidhi, wherein we have added very many frequently asked questions. In order to access the data
[41:30] from Bhuvanidhi, there are various help videos, which you can check and check the procedure through which the data can
[41:37] be accessed. Uh the NISAR satellite can also be tracked through our Bhuvanidhi Upagraha tool. tool. And in case of any queries or any
[41:46] feedback you have on Bhuvanidhi application, please write to us at bhuvanidhi@nrsc.gov.in bhuvanidhi@nrsc.gov.in or you can also connect with us at our
[41:55] forum application, the URL for which is also available in the slide. Thank you. >> Now that we've introduced you to some of
[42:08] the platforms that are available for finding and accessing the data, let's talk a little bit about using the data.
[42:16] Some things to be aware of about the NISAR data format is that it's in HDF5 format. You got a bit of a preview of
[42:22] that with the Earth data search demonstration. But basically, this allows the data producers to package together multiple data sets along with
[42:32] metadata and ancillary files all together in a single file. NISAR uses a specific flavor of HDF5 in
[42:40] that the coordinate system is encoded using CF conventions. This is more common for netCDF files, and so you may
[42:46] need to use netCDF drivers to read the data rather than the current HDF5 drivers. drivers. Otherwise, it can't access the
[42:55] geospatial data. NISAR HDF5 files are cloud optimized, so you can access access them in small chunks, which allows users to stream the
[43:04] data into memory rather than downloading the entire file. So if you want to access just specific parts of the data from the file rather
[43:12] than downloading the whole thing, both ASF search and Earth Access have workflows for doing that, and I've
[43:20] linked to some documentation that walks you through how you can stream the data rather than downloading it.
[43:26] NISAR has a has a large spatial footprint. The the data is acquired in a very wide swath of about 240 km. So the
[43:36] footprint of the individual files is quite large, and then with having many data sets packaged together in a single
[43:42] file, it does result in some very large file sizes. So for it varies depending on the type
[43:48] of file and the acquisition mode, but for example, many of the G-COV products over land tend to be on the order of
[43:56] about 7 GB each. If you're looking at single look complex data sets, those are often close to 30
[44:03] GB each. So it is important to be aware of the the options available for subsetting or just pulling out what you want from the
[44:10] data set, especially if you're limited by download bandwidth. There are a number of different projections used for the level two data
[44:19] sets. sets. These diagrams show the the range of of projections. So, between 60° north and 60° south,
[44:29] the data is projected into the UTM zone for the the location of the data set. So, if you your area of interest crosses
[44:38] multiple UTM zones, you may want to reproject some of your data so that it's all the same.
[44:43] And similarly, if you're working in um above 60° north, those that area uses a north polar stereographic coordinate
[44:52] system, which may be less familiar. And so, if you add your data set to a GIS software or take a look at it, it may be
[45:00] oriented in differently than what you expect. So, you might also consider reprojecting your data if you're working
[45:07] in those areas. Similarly, everything south of the 60°, so all of Antarctica is is projected into a south polar
[45:15] stereographic system. There are a range of software platforms available that support NISAR working with NISAR data. We'll cover just a handful of those
[45:27] today. today. For GIS software, ArcGIS Pro has supported the NISAR HDF5 data format since version 3.4, which was released
[45:37] back in November 2024. The most recent release, which is version 3.7, was just released this past May,
[45:45] May, provides additional support specifically for the NISAR G-cubed products. So, I'll be doing a demonstration of how to work
[45:51] with those products in the newest version. Users can also leverage QGIS to work with NISAR data, but there are some
[46:01] workarounds currently required in order to view the data in QGIS. Basically, you have to treat it like a netCDF file.
[46:08] Uh JPL is developing a GDAL driver for the NISAR HDF5 format, but it's not yet available in the main GDAL distribution,
[46:15] so it's not accessible to the GDAL installation that comes with QGIS. So, I'll be demonstrating some of the um
[46:25] GIS workflows in both Pro and QGIS. And then, we'll also talk about some of the open-source software packages that
[46:32] are available for working with the data programmatically. programmatically. So, ISCE3 is the software package developed by JPL for specifically for
[46:40] the NISAR mission. And then, plant ISCE3 is a is kind of a a wrapper software package for ISCE3
[46:47] that makes it easier to use some of the ISCE3 functions. And then, GMTSAR is a commonly used SAR
[46:53] processing package, which now supports NISAR products. And OpenSARlab is a collection of open-source tools developed by data
[47:01] specifically um for subsetting and transforming the data. So, Frans will be going through a a programmatic workflow after we've uh
[47:13] looked at uh GIS workflows. So, for working with NISAR data in ArcGIS Pro, we do have some tutorials
[47:22] that are available. So, if you're working with earlier um versions than 3.7, uh you can check out
[47:29] our NISAR and GIS story map, which goes over how to work with NISAR in ArcGIS versions 3.4 and newer, and it also
[47:37] links to content for older versions as well. well. And it covers uh many of the different products in in the NISAR data suite.
[47:48] Um so, if you're interested in in working with any of those products, or if you're using a slightly older version
[47:52] of ArcGIS Pro, I encourage you to check out that tutorial. And we also have a newly published
[47:58] tutorial that's focused on working with the G-Cube products in ArcGIS Pro 3.7. So, let's switch over to ArcGIS Pro.
[48:10] Since ArcGIS 3.4, we've been able to treat NISAR data as a multi-dimensional raster. I can simply click the add data
[48:18] button and from the drop-down menu select multi-dimensional data, navigate to my NISAR data file, and select it to see the data sets that
[48:32] it contains. Now, within the HDF5 file, there are a number of different data sets, including two different frequencies.
[48:42] Most of the G-Cube products have both frequency A and frequency B, and these are collected at slightly
[48:47] different frequencies. Um and in general, the frequency A is the data set that most people will want
[48:52] to use for analysis because it is a um a pixel spacing of usually 10 or 20 m,
[48:58] depending on the acquisition mode. Whereas, frequency B is generally at an 80-m pixel spacing. So, I'll add the two frequency B. You
[49:10] can see that there's a a layer, a covariance layer for each one of the polarizations that are available. So,
[49:16] I'll select those two and add them as multi-dimensional rasters. >> [snorts] >> They're each added as their own layer,
[49:25] and they display radiometrically terrain corrected backscatter values in gamma not power. SAR backscatter values are generally very close to zero,
[49:36] especially in the power scale. But, if you have a few very bright pixels, it can really skew the dynamic range of
[49:41] your image. And because the NISAR footprints are so large, the chances of having some of those bright pixels is
[49:48] quite high. So, often we'll have to adjust the symbology. So, I'll I'll take a look at my my
[49:54] co-polarized co-polarized covariance product and change the symbology. So, I'll just set a custom minimum and maximum. 0 and 0.3.
[50:12] And now we can see some features on the surface. surface. So, if I zoom in, I can see that surface
[50:17] water tends to be a dark blue and then we can see agricultural fields and urban areas in in varying brightnesses of the
[50:25] SAR backscatter. So, this is the traditional way of of working with the data as a multi-dimensional data set.
[50:33] But, there is now another option in when you're using ArcGIS Pro 3.7. If I navigate to a GEE Cubed product and
[50:42] if this is specific to the GEE Cubed products only, if I navigate to a GEE Cubed product and
[50:47] expand it, I can see that there's an entry for each of the frequencies. So, we have that frequency A and frequency
[50:54] B. B. If I just grab one of those and drag it into the map, I'm going to
[51:01] cancel the pyramids. It takes a while for these large data sets. And it does take a while to render the
[51:07] frequency A data. So, um um it is added as it's a it's a two-band raster that has
[51:14] one band for each polarization. If it's a quad pole data set, then it would have four bands included. But, it renders it
[51:21] as a as an RGB image and by default the HH is a is assigned to the red and the
[51:28] HV to the green and blue. So, we can change that symbology. I'll switch this so that both the red
[51:38] and the blue show the HH. And I again I'll set some custom ranges so that it's more in line with the
[51:46] values that we expect to see. So, I'll use 0.3 for both of the co-pol bands and then 0.5 for the cross-pol
[51:56] band. So, now we can see a a color decomposition where the surface water is very dark. Um urban areas tend to be quite bright,
[52:07] and then we can see a kind of the patchwork of agricultural regions um in a mosaic of of varying varying
[52:14] colors and intensities. So, this is one way to interact with the GEE Cub data set by integrating both
[52:23] polarizations into a single into a single representation. But, we can also work with these data sets sets one polarization at a time.
[52:33] So, if I select one of these layers that I've added with by the new drag-and-drop GEE Cub method,
[52:40] you can see in the menu there's this SAR tab that's available to me. If I select one of these layers that I
[52:47] added as a multi-dimensional raster, that's not available. Um there's some multi-dimensional tools that I can access, uh but by selecting it by adding
[52:56] it as a SAR product, we then get access to this SAR menu. So, there's an option to visualize or
[53:03] just pull out one band of the raster to visualize. visualize. So, I'll look at the HH, and by default
[53:11] this shows a a color bar that kind of goes from a rusty red to a yellow. Again, I could adjust the symbology to
[53:18] see the features better. I can also choose to look at the HV instead. Some processing tools are fine with a
[53:29] two-band raster or multi-band raster, but for some analysis workflows you may want to have each polarization at as
[53:36] available as a standalone raster. And so, to To that, we can we can leverage the existing imagery and uh SAR
[53:44] specific tools, either the the geoprocessing tools or the raster functions that are available in ArcGIS Pro. Pro. And so, we'll
[53:54] open the raster functions pane and search for extract to pull out just one of the two bands
[54:02] from that two-band raster. So, under the extract bands, I'll select my two-band raster. And I'll select the HH polarization.
[54:18] I can create a new layer and this just then shows me the HH from the frequency A.
[54:25] A. And again, I could adjust the symbology. But at this point, I can select the right-click and select the data option
[54:33] to export the raster to a standalone format. So, I can output it as a GeoTIFF, for example, and then it's
[54:41] available for me to use just on its own. So, I'll output this as as the frequency HH
[54:54] GeoTIFF. I have the option to clip my output to a specific geometry. I can either select an existing layer or I
[55:03] could add a shapefile and use that extent. extent. Or I can just use the current display extent. So, I'll just clip out this part
[55:11] here. And under the settings, I prefer for SAR data for SAR data, I prefer nearest neigh- nearest neighbor resampling
[55:21] rather than bilinear. And I'll export that raster data set. So, now I have a standalone GeoTIFF that I can use in other projects as
[55:34] well. And if I zoom out and compare it to the full footprint. I've extracted just a small part of that.
[55:41] And again, I can adjust the symbology. So that I can better see the features. And then I can use any of the analysis
[55:52] tools or geoprocessing tools or raster functions functions that I want to apply to that image. So that was ArcGIS Pro. Let's take a
[56:02] look at QGIS. We do have some resources for working with QGIS as well. There's a really nice
[56:09] demonstration video that will go through some of the content that I'm I'll be covering in my demo as well. That was
[56:15] recorded after the last NISAR town hall meeting. meeting. And then we also have some step-by-step documentation for working with NISAR
[56:22] data in QGIS that covers quite a range of the different product types and and different things you might want to do
[56:28] with them. So let's launch QGIS. If I >> [clears throat] >> If I navigate to a NISAR data set, I've
[56:39] got this G-cup data set. You can see that it it recognizes the data. It can see that there are many layers
[56:47] included in that HDF5 file. And it's very tempting to just want to drag and drop these right into my
[56:54] project. Unfortunately, QGIS does not recognize the geospatial coordinate system. And so we can't do that. It would be just It can't place it on the
[57:03] map. map. So in order to to work with the data, we have to treat it like a netCDF file. One
[57:09] way to do that is simply rename the file so that instead of the .h5 extension, you have .nc.
[57:15] But another way is to simply define the netCDF driver when adding the layer. So if you go to the layer menu, add
[57:24] layer, add a raster layer, I'll navigate to my NISAR file. And then I'll go to the very front of
[57:33] the path and just type in netCDF and a colon. And now if I click the add button, it
[57:41] shows me all of those data sets that are possible to add. So again, we've got the frequency A and
[57:48] the frequency B with one layer for each polarization. polarization. I'm going to select the frequency B just
[57:55] so that things render a little bit more quickly. quickly. And I'll add those layers to my project.
[58:04] So now there's a a layer for each one of those polarizations. You can see that I've got HH and HV.
[58:15] Again, the symbology needs adjustment, so we can open the symbology pane. And again, we can just set our minimum
[58:25] and maximum to a custom number. Now there's a a glitch in QGIS that sometimes doesn't allow you to
[58:33] type in decimals, but you can just copy and paste from a text file and then it works. So that's a
[58:40] quick workaround if you wanted to use decimals for your maximum. All right, so we have this this image
[58:48] of the of the SAR backscatter. And um we can work with it using the whatever tools are available
[58:58] for dealing with HDF5 data sets, or we may want to export this to be a standalone raster.
[59:07] And that can be done by opening the processing toolbox. And I'll search for ex- for clip. And we can clip the raster by extent.
[59:21] So I'll select my HH layer. And then again, there are some options. You can calculate it the extent from an
[59:29] existing layer. You can calculate it from a bookmark. You can even just draw an area of interest on the map. Or we can just use
[59:38] the current map extent. So, I'll choose that option. By default, it will just save it to a
[59:44] temporary file. But, if you wanted to actually have it a standalone GeoTIFF that you could use in the future as well
[59:50] or share with somebody else, you can actually save it to a file then. I'll I'll tag it with a subset.
[1:00:06] All right. So, now I've added my subset to the map. I'm going to uh change the color so that we can tell the difference
[1:00:16] between between the original and the the subset. And again, I will set my max to 0.3. So, now you can see I've got this nice
[1:00:32] subset image of the raster. So, zoom in and see that this is the All right. And so, that's uh a way to
[1:00:53] subset the nicer data if you wanted to work with a smaller area of interest. I'll pass it over to Franz to talk about
[1:01:03] programmatic workflows. >> Thank you, Heidi, um for handing it off one more time. Yes, I want to show you a
[1:01:12] little bit more involved workflows. I'm going to give you a sneak peek to just show you how this would work if you want
[1:01:19] to dive in deeper into the data set or if you have graduate students that you want uh to spend uh
[1:01:25] more effort into diving deep into the processing algorithms. So, first, if you wanted to work with data sets and develop algorithms around
[1:01:34] the data set, NASA is committed to make this easy for you, no matter what your access patterns
[1:01:41] are. If you are a person who's interested in downloading data sets to your local machine and work with the
[1:01:47] data sets locally, we are set up to support you fully. We have very high bandwidth data download capabilities. We can distribute
[1:01:56] up to to 10 petabytes per month of data sets sets through the ASF data interfaces, and we
[1:02:02] have very thick pipes to get large amounts of data to you quickly. So, fear not if you like downloading data sets
[1:02:10] locally, locally, this is perfectly fine, and we we have the systems in place to support this kind of access pattern.
[1:02:18] If, however, you're interested or you are somebody that is interested in working in the cloud or moving basically
[1:02:24] your algorithm from your local machine to the archive, there's a variety of ways of how you can
[1:02:30] get started with cloud workflows. One of them is the ASF OpenSARLab platform. There's a link here to the
[1:02:38] OpenSARLab platform. You can sign up for that platform and and try to do your work, but you have
[1:02:43] also a team here at OpenSARLab that can give you suggestions for how to start with your cloud-based workflows.
[1:02:52] There's also NASA has a community that's called NASA Openscapes. This community is particularly designed to help people
[1:03:01] with getting started in the cloud and moving their workflows into the cloud. So, if you follow the link to the
[1:03:06] Openscapes platform, there's a lot of information and material available for you to get started with your lifting
[1:03:13] your workflows into the cloud. Um Um >> [clears throat] >> And so, whether you work locally on your
[1:03:21] local computer machine or whether you work in the cloud, there is a number of workflows available that you can use that can help
[1:03:29] you get used to accessing NICER data sets and getting an idea how to use Python and Jupiter notebooks
[1:03:38] to interact and and do scientific analysis with NICER data. You can follow this QR code snap this QR
[1:03:46] code or also follow the link that's on the slide here to navigate to a page that has a lot of
[1:03:51] information. So, what I'm just briefly going to do with you is I'm going to go to that page
[1:03:56] to show you where you can find NICER cookbooks and NICER tutorials. I'm going to talk a little bit about who the
[1:04:03] target audience for these workflows is. Um Um and we already talked about where to run these. You can run them locally on your
[1:04:11] Linux machine or you can use a platform like OpenSARLab. I'm going to use OpenSARLab to demonstrate one of those
[1:04:16] workflows for you at the very end briefly. briefly. So, let's dive in. I'm going to click this link.
[1:04:23] For you, if you want to follow along, you can snap that QR code. If you have the slides already, you can also click
[1:04:28] that link and follow along with me. So, you're landing again at the NICER data user user guide that was referenced
[1:04:35] a number of times already. Super useful place for you to find all things NICER. >> [clears throat]
[1:04:42] >> And so, here you see a section that's on NICER tutorials. There's a set of tutorials available. There's story maps
[1:04:48] tutorials tutorials that you've already heard about. And then there are Python resources. So, these are more Python based involved
[1:04:56] science workflows and and cookbooks that help you get started with these workflows. So, we'll look here quickly at the NICER
[1:05:03] cook cookbooks as it shows here that were developed for accessing and working with NICER the So, if you click that,
[1:05:12] you see a little bit more information. You see a link to the GitHub repository. Always [clears throat] important to say
[1:05:19] that all of our workflows are fully open source and openly available. So, everything you find at ASF is exposed on
[1:05:27] public GitHub and you can clone it to your local machine and work with these workflows yourself. For now, we'll go to the cookbook
[1:05:34] website. website. And so, this website is really useful because it tells you a lot about what these cookbooks are about. So, they are
[1:05:45] >> [clears throat] >> workflows that help you get started with like accessing G-COV and GUNW and SLC data sets. So,
[1:05:53] how do you read these data sets? How do you subset the data sets? How you How do
[1:05:57] you stream files? And how do you do simple workflows using Python scripting? It's important that we are accepting
[1:06:06] community contributions. So, we we are envisioning this as a growing sort of collection of cookbooks that include contributions from all of
[1:06:16] you over the years. Um Um The motivation is that, you know, NISAR provides an incredibly comprehensive data set
[1:06:27] and and we want to provide hands-on examples that help you understand how to work with this growing archive over time.
[1:06:37] Um so, we'll we'll talk a little bit real quick on how to get how to run these
[1:06:43] cookbooks. These cookbooks are done as Jupiter notebooks. You can run them on your local machine or you can run them on platforms like
[1:06:50] OpenSARLab. That's what I will do to demonstrate demonstrate those cookbooks to you. To get started, you would install the
[1:06:59] software by basically cloning the the code from the GitHub repository using commands that are listed here. So,
[1:07:07] if you've never done interacted with GitHub before, there's information in this in this document that help you
[1:07:13] understand how to how to get started. And so, in our case, I have already cloned these cook cookbooks on my
[1:07:23] platform my OpenSARlab platform. So, I'm going to switch over to OpenSARlab, which is a Jupyter Hub in
[1:07:31] the cloud that is basically running in a web browser. It's it's you know, very easy to access and doesn't need any local
[1:07:39] install. And in in OpenSARlab, I have already cloned the NISAR cookbooks. So, let me show that to you real quick
[1:07:50] on my screen. Just a second. Clicking away these boxes. So, in in my folder, I've cloned the
[1:08:00] NISAR cookbook. So, I have a folder here that's called NISAR cookbook. If I go there, there, you have a bunch of files in in
[1:08:09] in this in this folder. And I have a little symbol here that's called JB. It's a so-called Jupyter Book structure
[1:08:17] here that basically lets me look at all of the individual notebooks contained in this folder like they are chapters in a
[1:08:25] book. book. So, here that if you go through this cookbook in the individual chapters will tell you a bunch of things
[1:08:32] about what these cookbooks are about. So, this is the page that you've already seen. seen. It tells you how to install the
[1:08:39] software. It tells you how to get an Earthdata login to be able to access NISAR data. It tells you then how to actually access
[1:08:47] data sets. And then further down here in this section G-COF are a bunch of notebooks that let you play around with
[1:08:54] data sets where you can test some first examples of workflows. And so, I'm going to look at one of the
[1:09:03] amplitude backscatter tutorials. And so we just will load real quick a time series of NISAR images into a notebook
[1:09:11] and do a simple time series animation of these data sets. So this here, the thing that you're
[1:09:18] seeing on the screen now is what's called a Jupyter notebook. A Jupyter notebook is basically a data
[1:09:25] recipe that's composed of individual cells that you have to look through in sequence. So there are two kinds of
[1:09:34] contents here. One of them is text-based contents contents in so-called markdown cells. So this is instructions and graphics that you can
[1:09:42] embed here. And then interspersed with the text content are individual cells shown here in gray. These are, you know,
[1:09:51] Python-based a code cells that you can execute to run the code behind that's embedded in this particular notebook.
[1:10:02] To run these code cells, there's a little little sideways triangle here which would run this particular cell. So when I click
[1:10:10] that, it executes that particular code cell, executes the code, and and does the work that this particular cell is
[1:10:17] designed to do. So I'm going to do something real quick. I'm going to quickly run all these
[1:10:21] cells. cells. Oops. Oops. And then show you what is happening by going through them real quick. So what this notebook does, it fetches a
[1:10:33] small series of NISAR GCOV products. So GCOV again are the amp calibrated amplitude products that have layers for the
[1:10:44] horizontal polarization and the cross-polarized data sets. And we are fetching a bunch of data here that are constrained by a start and an
[1:10:53] end time. So we I'm looking for data between November 22nd of 2025 and January 16th of 2026.
[1:11:01] Actually 2028 in this case, but the latest scenes is in 2026. Then I create an AOI sort of a geographic bounding
[1:11:11] box. So I'm looking here at an area that in this case is southern Nepal in the in the Himalaya mountains.
[1:11:21] And I'm searching then the ASF archive for areas that fit you know this area of interest and fit
[1:11:30] the start and end time time that I defined and I'm looking only for these cheek off products now.
[1:11:36] And so in this case I found five repeated images. You see the URLs to these images. You
[1:11:44] could click those to download the files to your local machine if you wanted to. So we have five repeated data sets.
[1:11:50] The next cell is making sure that sometimes currently in the archive we may have certain products more than once
[1:11:58] processed with different processing versions. You very likely will be interested in the one processed with the most recent processor version. So this
[1:12:06] next code grabs the newest one if they are if they are identical products. Grabs Grabs the one that was created with the most
[1:12:15] recent version of the processor. In our case there are still five products available so there were no duplicates in
[1:12:21] the archive for this particular area of interest. interest. Then we can start loading these data sets. sets. In this case we show you how you can
[1:12:31] stream data without to actually having to download them. So nicer data is stored in a way that you can stream them
[1:12:37] from the archive like you would do in an ArcGIS platform where you actually don't download the data sets but you stream
[1:12:43] the data set through the internet. And so we can do this using HTTP S approaches. In order to do this you need
[1:12:52] to log in and you need to do this by retrieving what's called an Earthdata login bearer token.
[1:12:59] And it is explained here how this works. Essentially, you go to your Earthdata login page. If you don't know how to get
[1:13:07] there, you can just Google NASA Earthdata login and then click on that first link that you find on the web.
[1:13:16] Um if you're not logged in, let me log out real quick to simulate that. You would get to a login page. In my
[1:13:22] case, my credentials are already here, so I would log in. It gets me to my home page. And then
[1:13:28] here you see a variety of menu items, and one of them is called create a token. token. If I click that, it will create for me a
[1:13:37] so-called bearer token, which allows me to access and stream data sets directly from from the cloud. And so, it has the token here. You can
[1:13:45] either show it. Easiest thing is to just click on the symbol next to it and copy that code uh token into memory.
[1:13:53] And then in this back at the notebook, you then copy-paste that bearer token into your notebook, and now you're ready
[1:14:01] to access and stream your data sets. So, now we can access these data. Um so, we briefly
[1:14:09] >> [clears throat] >> fetch them uh and and lazy load them, so we we keep the you put them in memory um
[1:14:15] so that we can work with the data. And then we extract real quick the date information that's associated with these
[1:14:23] files and um and can show them here. So, we have five different dates. They're between November 23rd of 2025 and January 10th
[1:14:33] of 2026. These are on the dates. So, there's year, month, day, and then the the hour, minute, and second
[1:14:40] um time of the observation time. Um Um then we can extract a layer from from this data set. So we're extracting only
[1:14:49] the horizontal polarized data set. Um and we get some information about it. So we have extracted a a small subset of
[1:14:59] the data set that has about 3,000 by 2,000 or 4,000 by 4,000 samples. Um and totally has a file of file size
[1:15:07] of about 400 megabytes in this particular case. We can then visualize where this data this subset that we created is located.
[1:15:16] Uh so this just spins up a little map. And And um um And so um the red um box here is where the
[1:15:28] where the data set is located. So we're in the southern Nepal region in the Hindu Kush Himalaya
[1:15:33] in sort of the the foothills in front of the Himalayas in just south of the Himalayas. Himalayas. So now we are ready to potentially work
[1:15:41] with this data set. Um what you can do now once you extracted the subset you want, you can load only this subset to
[1:15:48] your local machine. This is useful because once it's on your local machine, you can access them again. So if you come back to this
[1:15:56] notebook later, you don't have to reload it. You can just start at this particular cell and and load the data
[1:16:02] from your local storage. And because you already subsetted it, it's a much smaller data volume and much easier to handle.
[1:16:11] So here we um you know, created the folder and now we are saving the data set to this folder.
[1:16:18] And once the saving is done, we can close out the file and just work now on our local machine with the subset we've
[1:16:25] defined. defined. So instead of downloading a huge frame and huge amount of data, what we did now
[1:16:30] is we access the data directly in place. We found the subset that we're interested in and then only really saved
[1:16:38] that subset to your local machine saving you lots of download time and lots of local memory. You see that this takes just
[1:16:46] a hot second for the data data set to save. save. And once it's saved, you can walk away
[1:16:53] from this notebook and come back, you know, a few days later and then start directly with section five and load that
[1:17:00] data set back into the notebook for your further research analysis. Okay. So now, if you want to and you come back
[1:17:13] to this to this section of the notebook later, you can now reload this data set from your local machine, go super fast,
[1:17:20] and now you can start working with the data set. In this particular notebook, there's some instructional content in there that
[1:17:27] talks about the different ways how data sets are presented to you. These SAR images often are presented in
[1:17:36] what's called a decibel scale. The reason why that's done is because SAR data have a very large dynamic range
[1:17:43] from the very darkest pixel to the very brightest pixel. They're usually orders of magnitude of power difference.
[1:17:51] And so that's sometimes difficult to visualize in in an image in like 256 gray values. Um so what we often do is we do a
[1:18:00] transformation to the decibel scale, which performs a logarithmic transformation, which sort of squeezes that dynamic range down and
[1:18:10] makes it easier to visualize in sort of a grayscale image. Um this is super useful for visualization. It's not a good way of
[1:18:19] doing actual actual math with the data set. set. The decibel scaling is a non-linear transformation, and it actually causes a
[1:18:26] lot of biases in the mathematics. So this part of the notebook shows you how you can transform the data into the dB
[1:18:33] scale. It shows you a a bit what kinds of values would ex- would expect. So, there's a histogram that is being
[1:18:39] plotted here that shows you for a typical SAR image, what kind of dB values you would expect. They're
[1:18:46] somewhere between, uh you know, zero or maybe a a value of one down to values of minus 30 dB.
[1:18:53] So, this is the range that you would typically expect. But, then it also shows you how you can
[1:18:58] go back to the power scale. So, if you want to do any kind of mathematics, averaging, or so uh of a data set, you
[1:19:04] should always do that in power scale and not in decibel scale. And so, then it again shows you um what
[1:19:11] the you know, the statistical distribution is in a power scale and the values that you would expect in power
[1:19:16] scale. scale. And so, lastly, this notebook just shows you how you can then take In this case,
[1:19:22] we have five repeated images to do a small time series animation. So, this creates a little time series
[1:19:30] animator that you can use to start inspecting your data set. And you can imagine after 1 year of NISAR, you have
[1:19:36] a you know, you get a nice and deep data stack that you can start analyzing over time. Uh so, you see here how a small
[1:19:44] image is being pulled up. I'm going to zoom out a little a little bit. So, this is this part in Nepal. And uh there is a
[1:19:50] little play button that you can click to sort of start looking at the variations in this data set. And one of the first
[1:19:56] things you notice that there is a lot of stability in the data. SAR is a super repeatable data set. So, if you take
[1:20:05] repeated observations from the same place in the orbit, um the images should look identical unless the physical uh
[1:20:13] properties of the ground have changed. Say, if you have changes in soil moisture, changes in vegetation cover,
[1:20:19] or if there was a physical change like in, you know, harvesting a field or an earthquake or any kind of change that
[1:20:26] happened in the surface. So, it's a great tool for change detection. So, mostly there's stability. Uh if you
[1:20:32] look very carefully, um the brightness goes down a little bit over time, but we can quantify that a bit more.
[1:20:40] Because we can calculate mean values. And so here we do calculate a mean where we average across the AOI for each
[1:20:50] time step and we calculate sort of a mean value as a function of time. We can plot that here. And so what you
[1:20:56] see is that the average rate of brightness is decreasing over time in this sequence. And we did the
[1:21:05] calculations of the mean in the power scale. And in this particular notebook there there the calculated mean is then converted
[1:21:12] also to the DB scale. So you see them in both in both sort of projections in the DB
[1:21:18] scale and in the power scale annotated on this plot. But you see the slow degradation of brightness over time.
[1:21:25] Here in Nepal this has mostly to do with the drying out of the surface. The soil moisture is decreasing during this phase
[1:21:32] which is the the the dry season in Nepal after the monsoon and that typically corresponds to a slow lowering of the
[1:21:41] radar brightness. And then ends with a little two panel figure that is being created created where you can see side by side
[1:21:52] the mean value development and the image itself. itself. So this is going to just take a short
[1:21:58] second to pull up. Here we go. So you see on one side the image itself on the right on the on the other side
[1:22:06] you see the mean value over time and you can start you know linking the overall lowering of the
[1:22:14] brightness in the scene with sort of a change in the average rate of brightness value for that particular scene as well.
[1:22:22] And again this this can be really useful to just get used to a data set, you know, inspected and understand what
[1:22:28] is the dynamic of the data set, what what kind of signals are in there, and start to think about what may cause the
[1:22:34] changes that you see in a data set. So, this is one of many data recipes that are already made
[1:22:43] available by the team. And again, going back to the earlier slide, we are very interested in having you
[1:22:52] contribute to the set of tutorials and expand about on you know, beyond this set of tutorials, and give us feedback
[1:22:59] to some of the workflows that are currently available. And with that, I hand it back over to
[1:23:05] Honey. >> ASF is developing a number of tools and services to help users work with NISAR data.
[1:23:17] data. And the first resource I'd like to mention is the NISAR data user guide. This is intended to be an information
[1:23:23] clearinghouse where you can find what you need to know to work with the data. There are guidance and tutorials in the
[1:23:29] in the website, but it also leaks out to a lot of existing content from JPL and other trusted sources.
[1:23:36] It's a living document, so we're frequently updating it with additional content. There are lots of things we'd
[1:23:41] like to add in as time allows. And we also keep it updated so that as new information, especially about which
[1:23:48] data is available, is is known, we can update those pages with the new information. information. So, let's take a quick tour.
[1:23:58] >> [snorts] >> There is a brief introduction to the NISAR mission, including the instrumentation. instrumentation. And then, an important page is the
[1:24:06] available NISAR data. This is where we talk about what is currently available, but also present the data release
[1:24:12] timeline so that you can know what's coming in the future. So, we currently have pre-calibration products is
[1:24:20] as Franz mentioned at the beginning. Uh but we are expected or we are expecting calibrated data to arrive in
[1:24:27] the archive starting in July. If you are working with the pre-calibration sample products, it's important to know that there are some
[1:24:36] known issues with these data sets. And so you may want to reference this page that goes through some of those
[1:24:41] issues. issues. We expect that most of these will be fixed with the calibrated data release, but for the data that's currently
[1:24:49] available, this uh provides important information. information. We also link to NISAR observation plan resources, including some interactive
[1:24:59] apps that are really handy if you want to see what's available in your area of interest, either for the pre-calibration
[1:25:05] data set or if you're looking ahead to see what will be collected over your area of interest.
[1:25:13] The data products section introduces each one of the products and links to it its product specification file.
[1:25:19] And it also goes over some of the naming conventions and the HDF5 file format in more detail if you're interested in
[1:25:26] learning more. The accessing NISAR data section goes over what we've demoed in in today's presentation using Vertex, Earthdata
[1:25:35] Search, the ASF Search Python package, the Earth Access Python package, and then if you want to interact with the
[1:25:42] data directly in S3, how you can uh access those data products. The using NISAR data section has
[1:25:51] guidance on ArcGIS and QGIS. And there are also a lot of tutorials available that either step-by-step tutorials that
[1:25:58] walk you through interactively, and we also have Python cookbooks that are linked here. I'll skip down to the contact
[1:26:06] information. If you do have questions, you can contact ASF, but if you have questions about NISAR data in
[1:26:11] particular, we encourage you to post to the Earthdata forum. Uh this allows you access to a wide of
[1:26:18] of experts and specialists. So, rather than just relying on ASF to answer your question, we can open it up to people at
[1:26:23] JPL and the NISAR science team. Um, so it gives it broadcasts your question more widely. And it also allows us to have that
[1:26:32] information available for other people who may have the same question. So, they can see the answer already.
[1:26:38] ASF is also developing Harmony services to work with NISAR data sets. You saw a bit of a the first effort um in the
[1:26:45] Earthdata search demo, but Harmony is Earthdata's Earthdata's data transformation tool. And we have that option now to extract data sets
[1:26:55] from the G-cubed products as as cloud-optimized geotiffs. Um, and the next thing on the docket is to use spatial subsetting so that you
[1:27:04] can clip that extracted data set to an area of interest. Uh, next after that we'll be looking
[1:27:10] into clipping the the full HDF file to to find extent. So, if you're interested in in seeing
[1:27:17] what we're working on now and what's coming up, uh, we do have our tools and services roadmap. And so, you can check that out
[1:27:23] and see what we're working on and what's coming soon. Another great tool is NASA's Worldview, which is a visualization platform. There
[1:27:32] are hundreds of layers in there from different from different sensors and data sets across NASA's ecosystem. And we are really excited that we'll be
[1:27:42] we'll have daily NISAR G-cubed mosaics available in Worldview. Um, these will be available once calibrated data is released. So, we
[1:27:51] expect going forward from July we'll have these daily uh, mosaics available. Um, but I'll give you a bit of a sneak
[1:27:58] peek peek in the um, development environment. So, here we've loaded 13 days of data and and you can see that we use a RGB
[1:28:09] decomposition. decomposition. You can click through the dates to see where acquisitions occurred and kind of what they look like.
[1:28:18] And you can also zoom in to these to these different products and there's actually actually uh quite
[1:28:26] a lot of detail available. Uh the mosaics are are posted to about a 15 m pixel spacing and most of the G-CODE
[1:28:35] products over land are either 10 or 20 m. So, this is pretty close to the source data.
[1:28:41] Um so, it allows you to to take a look at your area of interest, see if there
[1:28:45] was an acquisition at the time that you're interested in and if it captured the event that you want to know about.
[1:28:52] It also has the option to to compare layers either different layers, different data sets, or different dates
[1:29:00] from the same data set. I'll set the time slider to December 28th and December 29th. And you can see that this area has
[1:29:16] overlapping acquisitions. So, I can swipe back and forth to compare the two acquisitions. So, this is a really powerful
[1:29:31] visualization tool. It's a great way to see if there's data available for your area of interest that captured an event
[1:29:37] that you care about. And with that, I'll turn it over to Franz to talk about the level three
[1:29:46] science algorithm notebooks. >> Thank you, Heidi, for handing it over to me uh one last time. And like in the
[1:29:56] demo earlier, I'm going to show you uh some additional notebooks. So, now you know what the Jupiter notebooks are. Um
[1:30:03] and the nicer science team has actually developed a number of very nice notebooks that uh show you how to create
[1:30:11] level three science products from NISAR. NISAR data is being useful is useful for a variety of of different disciplines and notebooks are
[1:30:20] available for a variety of applications in the cryospheric sciences, you see in the screenshot, in the ecosystem
[1:30:27] sciences, sciences, and in the solid earth sciences. There's also some data available for the soil moisture products.
[1:30:34] >> [snorts] >> So, each of these folders, if you follow this link to the Git Lab repository, you
[1:30:40] find a set of notebooks that you can, similarly to earlier, clone to your local machine and run if
[1:30:47] you are interested and want to dive deeper into the science algorithms behind NISAR. You can run those similarly to what
[1:30:55] we've shown you before in the in the demo earlier. So, feel free to play with these following this link and by cloning
[1:31:02] the repository and playing with these notebooks. notebooks. An additional service that might be of interest to you is
[1:31:10] the observational products for end users from remote sensing analysis, or so-called OPERA project, has been or is going to develop level three
[1:31:21] science products from NISAR data sets. Specifically, it will use NISAR data sets to create products such as surface water extent, such as
[1:31:34] surface displacements. So, this is going to be a North America-wide NISAR-based surface displacement product, as as well
[1:31:41] as a vertical land motion product that will also integrate NISAR data sets. So, vertical land motion and surface
[1:31:50] displacements are available on a North America scale, while surface water extent will be available on a global scale derived from NISAR
[1:32:00] data sets. These There's a link to the Opera website on this webpage. The displacement data sets will be
[1:32:07] hosted by ASF. The surface water extent data set will be hosted by different of them NASA DACs, but all
[1:32:16] these level three data sets are freely and openly available to end users for a variety of applications.
[1:32:24] And so stay tuned for those data sets. Those will be created and come out soon. So here's a little rundown of what the
[1:32:33] different products are that Opera is creating overall. So you have the surface water extent on the left.
[1:32:39] There's a surface disturbance product, basically a change detection product in the second column. Then you have the displacement
[1:32:48] and the vertical land motion product. And out of all of those, it is these that are left that will be derived also
[1:32:55] from NISAR. So again, surface water extent, displacement, vertical land motion, as well as an intermediary product, which is a so-called
[1:33:03] co-registered SLC product, will also be made available through Opera to a global community. So again, stay tuned
[1:33:12] for these data sets. They're slated to come later in 2026 for your analysis and your you know, download and research
[1:33:22] pleasure. So with that, I want to just wrap it up by summarizing a bunch of resources on this last
[1:33:31] website on this last PowerPoint slide. You can see all of these links that are available here. Anything from data discovery to
[1:33:41] variety of tools that are available that are available to all of the you know, further research tools that we
[1:33:49] talked about throughout this session. So this is a one-page, one-stop shop for all the links that you found throughout
[1:33:58] this tutorial. Um, I thank you all for your attention and I'm looking forward to all of your
[1:34:02] questions. >> Thank you very much to Dr. Meyer and to Heidi for those those great demonstrations and presentations.
[1:34:16] Next, I want to summarize the most important points discussed today and then we will start our question and answer session.
[1:34:28] So, in summary, NISAR data are freely and openly available. L-band data can be accessed through the Alaska Satellite
[1:34:36] Facility, while S-band data, along with coincident L-band observations, are available through ISRO's Bhuvan platform. platform. L-band provides near global coverage
[1:34:48] every 12 days with an exact repeat of every 12 days, whereas S-band observations are acquired primarily over
[1:34:57] India and selected science and calibration validation sites outside India. India. NISAR data are distributed in HDF5 format. Level two products are geocoded,
[1:35:09] allowing them to be readily overlaid with other geospatial data sets. Open-source Jupyter notebooks implementing algorithms for the
[1:35:19] mission's different science disciplines are publicly available. The only global level three product generated by NISAR is soil moisture with
[1:35:30] a spatial resolution of 200 m. The The uh, G-Cov product is a level two product and it's the most
[1:35:43] suited for those that are not so familiar with radar and that are working on ecosystems, uh, looking at things like land cover,
[1:35:54] biomass, agricultural growth, floods. Um, so these are radiometrically terrain corrected backscatter images in gamma naught. naught. The GUNW
[1:36:08] is the most suited for those that don't have much experience with InSAR. Again, that's a geocoded product that contains
[1:36:16] both the wrapped and the unwrapped interferogram, which is generated every um, with pairs of images from uh, every
[1:36:25] 12 days. And finally, NISAR data can be downloaded for local analysis or accessed and processed in the cloud,
[1:36:35] depending on your workflow. Looking ahead to next week's session, session three, which is focused on monitoring earthquakes, volcanoes, and landslides
[1:36:48] with NISAR's InSAR capability, participants will be able to identify the NISAR InSAR data products and their characteristics,
[1:36:58] characteristics, recognize the uses of the NISAR InSAR data products and their uses and limitations, limitations, and apply InSAR data to assess ground
[1:37:08] surface displacement due to earthquakes and landslides. Homework and certificates. There is one homework assignment associated with this
[1:37:18] training. It opens on July 16th and the due date is August 6th. You can access the homework through the training
[1:37:25] webpage. A certificate of completion will be awarded to those participants that attend all three live webinars and
[1:37:33] complete the homework assignment by the deadline. deadline. You'll receive a certificate via email approximately two months after
[1:37:41] completion of the course. And of course, for those of you that have any questions about the material
[1:37:50] that was presented today, please feel free to contact Dr. Frans Meyer or Heidi Christiansen through their emails listed
[1:37:59] here. So, we reached the end of today's session, and we will now be starting the question and answer session.
[1:38:17] Great. Thank you so much to our guest speakers today. Wonderful, wonderful presentations from um Dr. Meyer, Heidi Christiansen, and
[1:38:28] Upulama Sharma. Um and of course, thank you to all participants for all of your questions and and so much enthusiasm for
[1:38:36] this amazing mission. So, what we've been doing has been uh gathering your questions into a document that you see now on your screen, and we
[1:38:47] will uh start answering your questions. Our time is a little limited, so we will try to answer as many questions as
[1:38:54] possible. However, the questions that that we do not have time to answer, we will answer on this Google Doc, which we
[1:39:02] will post on the web page on the training web page. So, let's get started then with uh the
[1:39:08] first question here, here, uh which is uh question number one. Does NASA or ASF plan to provide cloud-ready NISAR products or
[1:39:21] APIs that facilitate large-scale machine learning learning uh workflows or platforms such as Google Earth Engine, Open Data Cube, or cloud
[1:39:30] computing environments? So, go ahead um Dr. Meyer or Heidi. >> Yeah, so as as it says here, so the the
[1:39:39] data products available through ASF uh A, they are stored on the cloud, uh specifically on the Amazon Web Services
[1:39:46] cloud. And they are stored in a cloud-optimized HDF5 format. Actually, the NISAR project led by JPL has worked
[1:39:56] extensively on making sure that the HDF5 data format is cloud ready, so that folks that want to access data sets in
[1:40:03] place and stream data directly from the bucket can do so. Um Um the the um I It It is If you are a user of Google
[1:40:14] Earth Engine, I would inquire with the GEE team directly to see what their plans are for adding NISAR data sets. I am
[1:40:24] um quite sure that they're interested in also making NISAR data sets available through GEE, but I can't speak for
[1:40:31] Google in this case, but please direct your questions to the team. Um Um and and but I would expect that there
[1:40:39] will be some availability also through that platform, especially if the community requests it. Um Um There are some limited cloud computing
[1:40:48] environments available. Open Science Lab is is one of those. There's also um resources around NASA that have made
[1:40:59] um um you know, offer cloud computing environments. Um um and and NASA has a a group um
[1:41:08] uh What is What is it called? Heidi, help me. That That is sort of designed to make to teach you how to
[1:41:15] access data sets in the cloud. Um so, I think I showed those on one of the slides. So, you can go back to that
[1:41:23] slide to to find it. And there's the NISAR data user guide is always a good place to go back to. This
[1:41:29] is, as Heidi said, a living document that will list resources as they become available. available. Um so, just navigate back to that page
[1:41:39] over time um for sort of a one-stop shop with links and information available. >> Great. Thank you very much, uh, France.
[1:41:49] And just to add to that, um, uh, the the component of the question related to Google Earth Engine,
[1:41:57] um, right now, what you can do is upload your data onto Google Earth Engine and and work with that platform that way.
[1:42:08] Okay, the second question, number two. Is there an exact data available for NISAR S- RSLC? >> Yeah, um,
[1:42:18] yes, so, wasn't quite sure what the the question was referring to here, but um, the RSLCs are an official product that
[1:42:25] NISAR um is releasing. So, once uh, the global data release will occur, um, it will include also the
[1:42:34] um, RSLC products for every acquisition uh, uh, that that is being made. Uh, so, it's it's one of the official products
[1:42:43] supported by NISAR and will be available with the full data release. And then, if you are referring to
[1:42:50] the date annotation, so, every product will have its acquisition date and time annotated both in the file name, very
[1:42:57] long file name, and in the metadata information. >> Great, thank you. Let's move on to question number three, then. Will we get
[1:43:07] the whole raw data set or pre-processed ones that we can clip to save RAM and storage for low-end laptops?
[1:43:16] >> Yes, so, go ahead, Heidi. >> Uh, so, there are quite a range of products available. You can uh, so,
[1:43:24] there are not currently the level zero B products. Um, they weren't included in the February release, but
[1:43:30] they're they will be included with the July release or the foreign processing. Um but you have the choice. You if you
[1:43:38] want the raw data, you can access that um or you can choose one of the higher-level products, whatever best
[1:43:44] suits your workflow. >> Great. Thank you, Heidi. Uh question number four, are there recommended pre-processing pipelines for
[1:43:55] combining NISAR products with optical data sets such as Sentinel-2 or Landsat before applying machine learning models for glacier monitoring?
[1:44:06] >> Uh I'm not sure if I read the question all the way to the end, but uh
[1:44:10] uh yes, so um so the nice thing is NISAR provides um fully radiometrically terrain corrected data products. So, if
[1:44:18] you're interested in looking at amplitude change, um the data sets are pretty ready to use alongside Landsat. Uh they're fully
[1:44:26] geocoded, but you may want to make sure that they are sampled the same way. So, I would you may have to resample one of
[1:44:32] them to to match the sampling of the other. other. Um and there is a valid pixel mask and a
[1:44:37] calibration mask available for each NISAR product uh that tell you which pixels are are to you know, to be
[1:44:44] trusted and which ones you may want to mask out. Um but then if you're looking for like just looking at melt processes
[1:44:51] on glaciers, uh you should be ready to use them uh jointly. >> Okay. Question number five then. I'm
[1:45:01] working in the archaeological field and I'm studying GIS and its usages to apply them in archaeology. How can NISAR data
[1:45:09] and its tools benefit this field in the sense of discovering and identifying lost structures that sometimes can be
[1:45:16] hard to identify because they're underground. underground. >> Yeah, L-band is a a known source for doing um sort of satellite archaeology.
[1:45:26] L-band does have some ability to penetrate uh into vegetation and also into surfaces. How far and deep you can
[1:45:34] penetrate will depend though strongly on the surface itself. What kind of soils or rock structures you have and what the
[1:45:41] soil moisture is. High penetration you get in places like sandy deserts. The Sahara is a really good place and
[1:45:48] there have been some past studies using L-band to do archaeology in the Sahara. And there's also been some work on
[1:45:56] looking like the large ice sheets and especially in places where you have deeper snow layers. Where people have looked for you know
[1:46:04] down aircraft or you know installations that over time were buried in in snow. So there's some some literature that you
[1:46:12] can look through and some opportunities that L-band data will offer. >> Great. Question number six is a G-COV
[1:46:21] product radiometrically corrected for topography and if so which algorithm and DEM is used for this correction? >> Yes, [snorts] the G-COV covariance
[1:46:32] products are our RTC products. I've added a link to the product specification document for details. It uses essentially the
[1:46:41] the Copernicus 30 meter DEM with some modifications for the RTC. >> Super. Thank you Heidi. Next question number seven. Can we have
[1:46:54] more information on when forward processed data will be available? Is it in one week, two weeks, July 31st?
[1:47:04] >> Yeah, so there is no firm announced date as far as I know and Erica you can chime in
[1:47:10] here too. But we know that data will be flowing soon and once data are becoming available we will make sure that the
[1:47:18] community will know that data are rolling. rolling. Um Um uh don't know if Eric here if you have
[1:47:24] any any uh additional info. >> No, no additional information other that I think it will more likely be toward
[1:47:31] the second half of July, sometime in the second half of July. Okay, the next question number eight for
[1:47:40] NISAR L-band dual polarization products, how does the mission account for ionospheric Faraday rotation? Will the standard products any
[1:47:52] correction quality flag metadata such as estimated Faraday rotation angle? And what best practices would you recommend for users analyzing
[1:48:01] two uh uh um two polarizations that may be affected by by uh FR induced channel mixing? >> Yeah, there's some ionospheric
[1:48:11] information annotated in the metadata. Maybe Eric can help out with that, too. I'm not sure if it's Faraday rotation or
[1:48:18] TEC TEC uh in this particular case. But um as most data are acquired in dual pole, uh there isn't an easy way of
[1:48:26] correcting for Faraday rotation. Um there are some quad-pole data available, but those currently are also not operationally corrected, partly because
[1:48:35] the acquisition happens at 6:00 a.m. 6:00 p.m. And um the Faraday rotation at these times is uh going to be
[1:48:43] comparatively low. Um so no current operational correction. Um most likely low Faraday rotation in most places uh around the globe because of
[1:48:54] the acquisition time and geometry. >> Great. And we do have uh Dr. Eric Fielding online in case uh Eric if you'd
[1:49:03] like to chime in. Okay. Um so just FYI for everyone here, the third session will be focused on
[1:49:17] INSAR and there'll be discussion on ionospheric uh corrections. Okay, question number nine. How should uncertainty and latency in NISAR urgent
[1:49:30] response products be incorporated into disaster response decisions, especially when rapid action is required, but the data may not be yet fully refined?
[1:49:44] >> So, we do have an urgent response section that goes through the the latency and kind of what uh the
[1:49:49] trade-offs in terms of processing for those urgent response products. And so, it would really depend on the particular
[1:49:55] application whether that is a a good trade-off. >> Okay, great. Thank you, Heidi. Uh and the next question number 10, how
[1:50:06] can the multiple multi-algorithm NISAR soil moisture data, along with aggregated backscattering and ancillary layers, be integrated into GIS
[1:50:16] and predictive models to support resilient infrastructure and climate responsive land use strategies in urban planning? planning? >> Um yeah, this is a very um sounds like a
[1:50:28] fairly specific workflow. Um as demonstrated, all of these products are supported in GIS and so, how you um
[1:50:37] choose to use them in that in that environment or your particular workflows will depend on your particular
[1:50:43] application. >> Great, thank you. Next question number 11, where can I get more details of the NISAR products that were mentioned like
[1:50:54] GSLC, GSLC, uh GEOFF, the GOF, GEO and WGCOV, etc.? >> Uh so, the data user guide has a section
[1:51:06] that goes through the data products overview, goes through kind of the the different levels, and then there is a a
[1:51:13] page for each one of the products that links to the product specifications. So, that's a a great place to to start to
[1:51:20] get a sense of the products that are available and what you might use them for. for. >> Yeah, absolutely. The
[1:51:28] the NISAR data user guide has an excellent description of the different data products. So, that's the best place
[1:51:33] to start. Okay, the next question. Number 12, I cannot find NISAR data for Southeast Asia. When will it be
[1:51:41] available? >> Yeah, same as as before. We expect the global release uh in in the second half
[1:51:49] of July as as Eric has mentioned before. And that will include um Southeast Asia. It will cover all land masses plus some
[1:51:58] adjacent oceans around all the land masses. >> Okay, question number 13. What minimum time period or number of NISAR
[1:52:08] acquisitions would you recommend before attempting a meaningful deformation time series analysis? >> Yeah, that is a question. So, if you
[1:52:19] know, whoever asked this, I would recommend going to the third session also where Eric is going to talk
[1:52:24] extensively about NISAR InSAR. How many data you need will depend a bit on your application. The if it's a large signal like an
[1:52:33] earthquake signal, a single interferogram is often enough. If you're looking for very small data signals that compete with like
[1:52:41] atmospheric noise, you may want to use a certain time series. How many you need is is going to depend on how small your
[1:52:50] signal is relative to the noise. But Eric, I would expect will be a better source to answer this in a
[1:52:56] in the third session. >> Yes, absolutely. I agree. The third session will be focused on this and Eric
[1:53:02] will be covering all of these things and these are uh, questions that he, uh, he, he'll he'll be addressing.
[1:53:10] All right, so the next question, number 14, can ASF be used through API call to automate for multiple downloads?
[1:53:20] >> The ASF search Python package can be used to script workflows both to search for data and download it. Uh, same thing
[1:53:27] with the Earth access, uh, Python package. So, that's uh, probably your your best bet for a programmatic
[1:53:33] workflow. >> Okay, thank you. Number 15, could you recommend a simple workflow for going from NISAR data download to a basic
[1:53:44] deformation map? >> I think I answered this. Yeah. >> Go ahead. I I think, uh, in session
[1:53:55] three, um, uh, uh, Eric Fielding will be showing that workflow, but, um, but I see that you've included some
[1:54:03] additional information here. Go ahead, Franz. Franz. >> Yeah, and the simp- I mean, there are these gondola or G unwrapped
[1:54:09] interferogram products available that you can scale for large events like earthquakes or or stronger volcano displacement, uh, you
[1:54:17] can scale to displacement line of sight displacement right away. Time series analysis may be required at times. Eric will talk about this and
[1:54:25] there's also a link for some additional materials, uh, that we'll share with this document. >> Okay, great. Next question, number 16,
[1:54:38] can a user download clip NISAR products covered by the bounding box instead of the entire area? >> So, as uh, Franz demonstrated, there are
[1:54:48] ways to subset, um, programmatically, but there are currently not, uh, tools available for spatial subsetting in Earth data searcher Vertex. Um, ASF is
[1:54:58] working on that, and that's kind of the next thing on our docket for Harmony services. So, you can check out our
[1:55:04] development road map to see the the efforts our development efforts that are planned, currently underway, and planned.
[1:55:17] >> Okay, great. Thanks, you Heidi. Uh let's move on to the next question. Uh let's see. Any news on whether S-band
[1:55:27] will have any availability within the US? >> Yeah, I linked um a um um ArcGIS map uh here that shows the
[1:55:39] observation plan uh for NISAR, and there are some S-band data available also over the US over some some calibration sites. I showed it
[1:55:47] on one slide as sort of uh uh on a on a world map, uh but if you go
[1:55:52] to this link that will be in this document, uh you can explore which which sites are covered in in S-band uh and also jointly
[1:56:01] in S- and L-band. >> Great, thank you. Uh the next question, number 18. Downloading SLC files for interferometry
[1:56:12] purpose and time series analysis, each scene is seven around seven and a half gigabytes. How do we deal with these big
[1:56:19] size images? >> Yeah, as I I think we showed some some samples in a sample notebooks how you
[1:56:29] can subset in place uh and download uh data smaller subsets of data sets. Again, also because of the to avoid you
[1:56:37] having to process the interferograms yourself, um there are interferometric data products that NISAR delivers uh operationally. operationally. Um so, you don't have to compute them
[1:56:47] yourself, at least not all of them, and they're also smaller in size. Um and uh there is a likelihood that the
[1:56:54] community over time will develop services that you can utilize uh to help you out with with handling these large
[1:57:02] data volumes. >> Okay, great. Uh next question. The question number 19, will the acquisition grids be updated to include the mission
[1:57:15] the missing grids in the future? And if so, will it also be available from June 2026? 2026? Or
[1:57:23] Or the providers will only include some specific dates. >> So, uh I'm assuming this refers to the
[1:57:34] initial release not having global coverage. Uh NISAR does provide global coverage of all land masses up to
[1:57:42] uh what is the northern latitudes? There's a there's a hole in the Arctic uh at I can't remember what the cutoff um
[1:57:50] latitude is, but for the rest of it it's it's it's global coverage uh every 12 days in ascending and descending. Um
[1:57:58] So, all of these will become available starting with the release date uh coming soon. soon. Then there is going to be a reprocessing
[1:58:05] campaign where where some of the past data sets uh will also be reprocessed and made available since global
[1:58:11] acquisition has started. So, you should be able to access most of these data sets on a global scale.
[1:58:19] >> Absolutely. All right. Uh the next question number 20, what opportunities exist within the NISAR community for contributing to
[1:58:29] collaborative projects, data-driven publications, or applied case studies specifically in urban resilience and infrastructure systems? >> Yes, it is. Um
[1:58:42] if you're familiar with sort of the NASA solicitation, there's sort of an omnibus solicitation that comes out every year
[1:58:48] that's called ROSES. Uh so, just look for the for solicitations. There are many of them will mention NISAR. Uh, there might be
[1:58:56] some that are specific uh, to NISAR, but many of the other ones will mention NISAR in the call.
[1:59:03] If you know somebody that works with NISAR already, feel free to reach out. There's a a new selection of NISAR uh,
[1:59:10] applications and a NISAR dark team, which used to be called the science team. Uh, and so who's on the science
[1:59:17] team will become publicly available. Uh, feel free to reach out to them um, and and see if they're interested in
[1:59:24] collaborating. And maybe lastly >> We are we are hoping for open code. So, we we mentioned a few times you can
[1:59:32] contribute workflows. Um, all of the workflows that we do know uh, that the community is developing, we
[1:59:40] will uh, share with you through the NISAR data users guide. Um, so you can contribute as a member of an
[1:59:47] open science community uh, all the time. >> Great. Okay. The next question, uh, are the data compatible with Panoply?
[1:59:59] >> Yes. [snorts] Uh, NISAR data can be used in Panoply. There's a a guidance document. Um, it was developed for working with the
[2:00:06] original NISAR sample data, but it applies to the to um, newer NISAR products as well. So, if you're
[2:00:12] interested, um, you can refer to that documentation. >> Great. How about uh, okay, let's move on to question number 22. Will the NISAR
[2:00:24] S-SAR data acquired over calibration sites in the US also be made available to Bonedi? >> Yeah, so the simple answer is yes. All
[2:00:32] NISAR S-band data will be available through Bonedi. Uh, also those over the US. >> Okay, wonderful. Um, so how about we uh,
[2:00:42] take a couple of more questions. I know we're at time, but uh, we have had so many amazing questions. So, how about
[2:00:48] about uh three more? Uh the next question number 22, will Sorry, 23. Do you know if it's possible
[2:00:55] to open the NISAR data in SNAP? >> Yes, I say here SNAP supports, but I think the better answer is will support
[2:01:02] NISAR. Uh so, you can already open SNAP data as an HDF5 file, a generic HDF5 file in SNAP, but it will have specific
[2:01:11] NISAR support, I think, coming, as far as I know, with SNAP version 14. >> Okay, great. Uh the next question, uh what is the
[2:01:22] number 24? What is the difference between ASF and Earth Access when pulling data programmatically? >> The um ASF search package, it's it's
[2:01:32] similar to using Vertex versus um Earth Data Search in that um ASF Search is really optimized for finding data that
[2:01:39] ASF hosts. So, there are a lot more um parameters that are specific to the SAR data sets, and so it may be easier to
[2:01:48] find what you're looking for or honing on what you're looking for using ASF Search, but it really just depends on
[2:01:54] user preference. Um so, um you can find data using either package, and it's just what you prefer.
[2:02:03] >> Okay, wonderful. How about question number 25? Is there an ETA for the GDAL HDF5 driver that JPL is developing?
[2:02:14] >> Yeah, that'd be a a question maybe for Marco. Maybe he can take that back to the team. Uh
[2:02:19] I am not aware of a specific ETA, but uh but maybe the JPL team is. >> Yeah, absolutely. We'll update that
[2:02:27] answer here in the document, but we do have to consult with uh with that team to see what is the uh
[2:02:33] what is the intended development timeline. timeline. All right, so how about um something Let's just skip question number 26.
[2:02:42] Um how about something more focused on uh the data itself and data access? So, let's just go to question
[2:02:50] uh 28. Can we work on these data sets in QGIS as well? >> Yes, and uh again refer to the um
[2:03:02] the the uh video or our documentation. You just need to treat it currently you just need to treat the data set as if
[2:03:09] it's a net CDF file. And as long as you do that, then you can access the the
[2:03:14] data sets and and use them in QGIS. >> All right, great. So, let's go with uh let's go with three three more
[2:03:21] questions. Okay, I promise, just three more. Okay, so how about number 29? Um if we would like to
[2:03:29] process the data in slant range geometry, how can we do it? >> Yes, so there's I think we had pointed
[2:03:38] at some resources. Ice 3 uh is a resource, that's the software package that is also behind the operational
[2:03:44] NISAR processing. There's some courses that I linked earlier uh on how to use Ice 3. SNAP uh
[2:03:52] is a software package that will support processing data in slant range uh geometry. And very likely uh I mean,
[2:03:59] commercial SAR data processing tools such as Gamma and similar uh tools will also uh uh support NISAR
[2:04:08] um and traditional NISAR processing from the slant slant range uh geometry. >> Okay, great. Um okay, the next question
[2:04:17] number 30. What is frequency A and frequency B? >> Yeah, we can tag team this. So, uh NISAR
[2:04:26] operates operates transmits two different frequencies mostly to facilitate ionospheric correction. The main imaging band is frequency A. So, if you have a if you
[2:04:36] hear of a 20-MHz data set or 40-MHz data set, um those are the bandwidths of the frequency A transmission. So, that's on
[2:04:45] one side of the spectrum that NISAR supports. Additionally, there's signal transmitted on the other side of the spectrum using then the frequency
[2:04:54] diversity to correct for ionospheric delay in in the operationally processed inside data. Frequency B is a narrow bandwidth, so lower spatial
[2:05:05] resolution, but still provides you really nice image. And so, both of those are available for you to analyze. So, two products,
[2:05:13] slightly different center frequency, and slightly different resolution that you can leverage. >> Okay, great. Thank you. That was a great
[2:05:21] explanation. All right. So, how about question number 34? This is the last one. Is there documentation on how to
[2:05:27] use the Earth Access Python package, and can we use it to search for available images in a specific area and time and
[2:05:35] download only, for example, G-Cov at frequency A? >> Yeah, so you can refer to the Earth Access section of the NISAR data user
[2:05:45] guide, which goes through the capabilities there. I I'm not sure if you can extract specific variables. I
[2:05:54] I think so, but I'm not certain. >> Okay, yeah, we will look into this and and update this document. So, with that,
[2:06:05] I I I thank everyone for their patience. I know we're over time. I first of all, I
[2:06:11] do want to thank our experts today, our invited experts, Dr. Franz Meyer, Heidi Christensen, as well as our colleague
[2:06:19] from ISRO, Miss Dr. Sharma, and of course, the ARSET team, who's been amazing in putting all of this together, and to all
[2:06:31] of you participants for your great interest and enthusiasm and amazing questions related to NISAR today. Um, so
[2:06:40] please please stay tuned. There's one more amazing session and that'll be next Thursday. It'll be focused on InSAR and my
[2:06:49] colleague Dr. Eric Fielding will be the invited expert for that session. So, see you um in a week. Have a great
[2:06:59] day everyone and uh stay tuned. Bye-bye.
