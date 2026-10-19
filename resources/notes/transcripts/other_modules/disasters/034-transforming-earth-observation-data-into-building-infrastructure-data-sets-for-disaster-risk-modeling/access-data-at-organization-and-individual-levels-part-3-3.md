# Access Data at Organization and Individual Levels, Part 3/3

`https://www.youtube.com/watch?v=myCgQ_EzCEA` · id 148 · 1:35:53 · module 51 — Transforming Earth Observation (EO) Data into Building Infrastructure Data Sets for Disaster Risk Modeling

[00:00] Hello, and welcome back to the ARSET training, Applications of NASA's SPORT Land Information System Soil Moisture Data for Drought. My name is Sean
[00:09] McCartney, and I'm an ARSET trainer based out of NASA's Goddard Space Flight Center in Greenbelt, Maryland. It's a
[00:14] pleasure to welcome you all to the third and final part of the webinar series. The following slides will provide an
[00:22] overview of today's training. According to the World Health Organization, an estimated 55 million people globally are affected by droughts
[00:31] every year. Traditional drought applications and indices focused on sensible weather and precipitation trends and their impacts on the hydrologic system.
[00:41] This training is focused on the introduction of NASA Land Information System or LIS output of soil moisture at
[00:48] various depths for drought analysis and monitoring. monitoring. Soil moisture plays an important role in drought monitoring. LIS output of soil
[00:56] moisture will enable a more efficient drought analysis via a gridded product at relatively high spatial resolution as
[01:03] opposed to sparse in situ measurements of weather parameters and even less dense soil moisture and vegetation health in situ observations.
[01:13] The spatial tracking and analysis of soil moisture by LIS provides a unique tool for those monitoring drought
[01:19] locally compared to large-scale traditional indices forced by weather factors. After participating in this three-part training, a user will be able to apply
[01:30] LIS output to efficiently analyze drought over large spatial areas in conjunction with current practices and to integrate this capability with
[01:38] existing data. The The training learning objectives are to identify the NASA LIS basics regarding the framework, input forcing,
[01:47] static fields, land surface modeling structure, and output most relevant to drought. drought. Summarize the derived soil moisture
[01:54] percentile products and how these are created. created. Apply SPORT LIS output and or derived products to both complement existing
[02:02] data and overcome limitations to monitoring drought over large areas. Recognize best practices for LIS impact related to drought. And configure LIS
[02:13] output file for viewing within a GIS-based display tool and for tailored output products and graphics. The prerequisites for the three-part
[02:22] training are the ARSET fundamentals of remote sensing session one. Download and install QGIS and all accompanying software.
[02:31] Register for a Google Colab via Gmail or a Gmail-enabled account. And basic Python experience is beneficial but not required.
[02:41] All materials and recordings from each session of the webinar series are currently available on the training web
[02:47] page. In part three, the focus will be on accessing data at organization and individual levels. Following each session, there will be a
[02:56] self-paced micro lesson which will not be graded but will serve as a knowledge check and prepare you for all of the
[03:03] webinar series as well as the final homework assignment. There will be one homework assignment which will be posted
[03:09] today with a due date of June 14th. A certificate of completion will be awarded to those who attend all live
[03:15] sessions and complete the homework assignment before the given due date. Listed below are the trainers for today's webinar.
[03:26] Jonathan Case is a research meteorologist meteorologist with NASA SPORT at NASA's Marshall Space Flight Center. Matthew Smith is a research scientist
[03:36] with NASA SPORT at NASA Marshall Marshall Space Flight Center. Ryan Wade is a research scientist with NASA SPORT at NASA Marshall Space Flight
[03:46] Center. And Chris Hain is a physical research scientist at NASA Marshall Space Flight Center and a project lead
[03:53] for NASA Sport. The objectives for the third part of the webinar series are as follows. By the
[04:01] end of part three, participants will be able to access and East Africa output via Sport Web Viewer.
[04:11] Acquire and display Sport Liz continental United States GeoTIFFs via QGIS. QGIS. And read and display outputs for Sport
[04:20] Liz tailored to users need user needs and custom domains using Google Colab and Jupiter. Questions are strongly encouraged. If
[04:31] you have any questions, please put them in the question box and we will address them at the end of the webinar in the
[04:36] order that they were received. Feel free to enter your questions as we go. We will try to get to all of the
[04:42] questions during the Q&A session after the presentations have concluded. If we run out of time, the remainder of
[04:48] the questions will be answered in the Q&A document, which will be posted to the training website roughly 1 week
[04:54] after the training. We will now transition to Jonathan Case to learn about the web page interface for Sport Liz output. Jonathan, over to
[05:04] you. Thanks and welcome everyone. This is Jonathan Case again here for session three and in this brief tour we're going
[05:14] to take a look at the Sport Liz web page viewer for displaying Sport Liz graphics and the capabilities in the various
[05:23] geographical zooms. So, let me start off first by doing a Google search of the NASA Sport page.
[05:33] And we're just going to go straight to the Sport page here. And at this point I'm going to zoom in a
[05:42] little bit to make sure everyone can see this fine. So, what we're going to do is we're
[05:47] going to navigate to the sport viewer, which is underneath data and products. And we're going to click on sport
[05:53] viewer. viewer. And underneath data set, we are going to bring up list. And if I expand the list menu by
[06:03] clicking on it, you'll see that there's a whole variety of geographical zooms underneath here. So, let's start off with the Continental
[06:10] US. US. And we'll load the default image. The default image is going to be relative soil moisture and integrated over layers
[06:19] 1 to 3 or 0 to 100 cm. So, here's the default viewer that comes up. up. And if we go ahead and animate it, it's
[06:28] going to show the last 20 images that show up on here. So, we can pause that animation.
[06:36] And And let's next go and look at uh survey of the various graphical fields that are available underneath product.
[06:47] So, let's just scroll through this briefly. briefly. And we can see there's a whole variety of of fields that you can view.
[06:56] So, let's go ahead and change the times now on this 0 to 100 cm relative soil moisture. What
[07:03] we're going to do is go to the bottom of the page here. And you can select a starting image. It
[07:09] goes back as much as 3 months. So, let's just start with let's go back to the 1st of May here.
[07:17] And these are hourly output fields, so there's going to be a lot of times to select on many of these images that are
[07:23] in hourly form. And let's just do the first 2 weeks of May. May. So, I'm going to go down to May 14th
[07:29] here. here. And just go to let's do 0Z then May 15th. I'm using my mouse wheel to scroll
[07:36] up and down through these times. So, now we have the first 2 weeks of May and we can animate this.
[07:44] And you could see the rainy system in the northeast and so now you get a feel for how to display this.
[07:51] And the default frame delay is 100 milliseconds. milliseconds. So if you wanted to slow this down, you
[07:58] would would increase that number in milliseconds. So 500 would be a half a second per frame. And then you could in decrease that
[08:08] number to make the animation go faster. So we'll go ahead and pause that and let's load up a different hourly image
[08:22] at this point. I'm going to load up the total column 0 to 200 cm relative soil moisture.
[08:31] And so that's RSM int 0 to 200 cm. And one thing to note in the behavior of
[08:40] this viewer is that it resets back to the first to to the most recent 20 images. So we're back to May 17th to 18th at
[08:50] this point. So let's go back and do those two weeks, first two weeks of May. The good thing is that when you load a
[08:59] start and ending image, it will show up in that menu when you select your start time, it will show up in the among the
[09:07] available times. It will zoom right back into the range of times that you had previously loaded. So now we're back to the first two weeks
[09:15] of May when we load that starting and ending image and we can go ahead and animate that again.
[09:26] So let's load up a different view region. We're going to go back to the list menu, click on it to expand all the regions.
[09:37] And let's look at the Midwest at this point. point. And again, it's going to load up the
[09:42] default image of 0 to 100 cm relative soil moisture. And we're back to the the most recent 20 images once again.
[09:58] So at this point, let's load a new field up. We're going to look at the grid point percentile for 0 to 100 cm.
[10:07] So we'll select that and load that up. Now one thing to note is that the percentile images have one image per
[10:19] day as opposed to one image per hour in many of the other fields. Other fields that are daily frequency
[10:27] include the VEERS green vegetation fraction down here. So if we look at the 20 most recent images now, it's going to be the last 20
[10:38] days. So again, if we wanted to look at the first 2 weeks of May, notice that there's a frequency of just one per day
[10:49] at this point. So we can select the starting and image ending images. And we have now a
[10:57] a 2-week loop of one image per day of the percentile here. So the last thing I want to demo here is
[11:10] to what you can do is when you create an animation, then you can go ahead and download that animated GIF and save it
[11:18] to your local system. So let's click on download GIF. And at this point, you can choose the you can alternatively choose
[11:29] the delay you want per between frames or you can enter the actual number here. It loads up 100 milliseconds per frame
[11:38] by default. And it's usually good to lag the final frame, so that way when you're animating the image, it's going to increase the
[11:45] dwell rate the delay in that last image before resetting and showing the beginning of the animation. So, if we click on get animation, it's
[11:55] going to prepare that animated GIF at this point. And once that becomes ready for download, download, it's going to prepare it on the system.
[12:08] Takes a little moment. The more frames you have in an animation, the longer it's going to take
[12:13] for that animation to be prepared for download. Okay, at this point we have the preview of the animated GIF showing
[12:24] up in a thumbnail view below. And now we can click on download animation, animation, and you can select whatever folder you
[12:31] want to save it on your local system. You click save, and now you have this animated GIF on your system. So, let's
[12:39] just go back one last item here, and I did want to point out that most of these
[12:45] geographical zooms are valid for the sport list CONUS run over the continental US, but there are a few outside the CONUS
[12:56] runs. We have a run over Africa, Eastern Africa. So, if we click on this, this brings up our real-time sport list
[13:05] run that's over Eastern Africa. And there's a smaller subset of images available, but we still have a variety
[13:13] of fields there. And on this same run here, we can zoom into Kenya. We had one of our
[13:19] international collaborators using sport list data over Kenya. And we have we have a list Alaska run, which is available here and it's divided
[13:33] up also into north and south parts of Alaska. And we also have a 1 km Caribbean list
[13:41] run that extends from Mexico all the way to the eastern Caribbean. Currently, we only provide graphics over Puerto Rico
[13:48] and the Virgin Islands for collaborators in the San Juan National Weather Service office, but we do have uh geotiffs available for the
[13:58] entire Caribbean list domain. So, that's all I want to show today and hopefully you find this web page
[14:06] interface easy to use and very convenient for examining different uh sport list output. Thank you for your
[14:14] time and attention. Thank you, Jonathan, for the terrific demonstration. When I'll go to Matthew Smith to learn about using the SPORT
[14:26] website for accessing near real-time data as geotiffs, accessing near real-time data from the NASA Disasters Portal, and visualizing the data in
[14:34] QGIS. Matthew, over to you. Thank you. I'm Matt Smith. SPORT is pleased to partner with ARSET to bring
[14:48] you this training today. I'll be sharing some of the ways you can access near real-time SPORT LIS CONUS
[14:54] data for use in drought-related applications. Two main points today, where to get SPORT LIS files and how to use SPORT LIS
[15:06] geotiff files. I should mention first that near real-time SPORT LIS imagery is available at the SPORT website and our SPORT
[15:13] viewer. viewer. For non-image data, these are available on SPORT's file server at the link shown at the top.
[15:22] There several formats available. First, GRIB 2 or gridded binary files. These are files created specifically for distribution to National Weather Service
[15:32] forecast offices for their use in their decision support system called AWIPS. Next, Next, PNGs and GeoTIFFs located in the same
[15:44] directory on the server. These files contain one variable each, so the file name describe the variable within.
[15:52] within. The variables are listed here. Portable Network Graphics files are CONUS images, as you can see, in a simple cylindrical equidistant
[16:02] projection along with a legend and color map. map. Also, there are two types of GeoTIFFs available. available. One with actual floating point values
[16:13] with the string float in the file name, and another with one byte values with the string byte scaled in the name.
[16:21] The byte scaled file is already mapped to a color scale, the same one as shown on the sport data
[16:27] viewer and here as well. And soil moisture histograms, animated GIFs of 30, 60, and 90 days in length.
[16:38] We've taken relative soil moisture data from 1981 to 2013, for 33 years, for 33 counties across the US.
[16:48] As seen here, these show how each day compares statistically with the full 33 years of data. The NASA Earth Science Disasters Program
[16:58] operates their mapping portal at the link shown. It's a web mapping service site where you can view several important near
[17:06] real-time geophysical parameters, including six SPORT list products for CONUS and four for Alaska. They also provide REST service links, so
[17:16] you can access these products in your own GIS package in addition to simply downloading GeoTIFFs yourself. So, how can you explore GeoTIFF files on
[17:27] your own? There are basically two options. First, you can write your own software. There are several languages that allow you to
[17:33] read, write, and manipulate GeoTIFFs. Python is the most extensive with many libraries available. Also, C++ and other libraries offer Oh.
[17:44] offer libraries as well. And even IDL, JavaScript offer APIs. Also, newer collaborative tools like Google Colab might be helpful.
[17:55] The other option is to simply use one of the GIS packages available. I said simply, but these are powerful
[18:02] packages with lots of analysis options, and most of them have significant learning curves. The top proprietary GIS package on the
[18:10] market is produced by the company Esri. Their main GIS software app is ArcMap, but their next-generation package,
[18:18] ArcGIS Pro, will replace it in the next few years. There are many other GIS packages on the
[18:24] market, several of which are free and open-source. open-source. Today, I'll focus on the most popular open-source package, QGIS or QGIS.
[18:33] It's available for multiple operating systems and is very popular in the science community. Since this is not a QGIS training
[18:40] course, and we're short on time, we'll just briefly demonstrate how to visualize two GIF raster images, one
[18:47] downloaded from our file server, and one downloaded from the Advanced Hydrologic Prediction Service or AHPS, and a rest service link to the Disasters
[18:56] Mapping Portal. So, let me get over here to QGIS, and I'd like to start a new project, so
[19:04] follow along with me. On the top menu, new, and there I have a new project, and like
[19:12] to to add two layers. So, I select collect select the layer option, add layer, add raster layer.
[19:23] I'll make sure the file source type is chosen. chosen. Click on the ellipses on the far right
[19:29] here. here. Select the two files I want. Open. And then I can click on the add button.
[19:36] That will load the two layers. layers. This is the sport one here with the word float. float. Um the floating point values and this is
[19:48] the one from AHAPS. So, as you can tell, they look a little strange at this moment. So, let's take
[19:53] care of that. I double click on the sport list layer. Within the left side panel, I choose symbology.
[20:03] I change render type to single band pseudo color. Since these are percentiles, I want to change the min max from 1 to 100. I'm
[20:12] going to leave the color map alone. I click okay. All right. There's our soil moisture values. values. And now let's take a look at the AHAPS
[20:23] product. I'll double click that. Once again, the layer properties. I want to change in the symbology panel on the left. Change render type to
[20:32] single band pseudo color again. This has four bands, but I happen to want band one, which is the observed
[20:40] rainfall for the month of April of this year. year. And I'm going to set this from 0 to 10
[20:46] inches of rainfall. Again, I leave the color ramp alone. Click okay. And there I've got a layer
[20:54] for for April rainfall. All right. Now, I'd like to go back to the disasters mapping portal. If I scroll down
[21:08] to the disaster topics, click on near real-time products, it takes me to this page where I see lots of their products that
[21:17] are available. I want to get the list CONUS soil moisture percentile for 0 to 200 cm. And I want to click on the
[21:25] text, not the image, which takes me to a description page. There's a lot of metadata about the
[21:32] product, product, but I'm really concerned with this URL right here, which is the rest endpoint. And I can copy it,
[21:43] dismiss that, go over here to QGIS, and at this time I want to add a layer. Down here, it's called ArcGIS rest
[21:53] server layer. All right, I'm going to create a new connection. I'm going to give it a a name.
[22:02] And I want to paste with control V on my system system what I just copied a second ago
[22:07] for the rest server connection, and click okay. Now I need to click the connect button, select the layer I want,
[22:20] and choose add at the bottom. And I instantly see a layer there. I'm going to close this window now.
[22:28] And there you go. There is the rest server layer, which is showing the volumetric soil moisture percentiles for the full 2-m column.
[22:38] And that is the most recent data, and I can turn these layers on and off, and reorder them in any way I choose, change
[22:46] their transparency, their colors, and lots of other options. One final point before I am done, SPORT plans to make all of its SPORT
[22:59] list product data available at the Global hydrology resource center, which is one of NASA's distributed active archive centers or DAACs.
[23:08] Our goal is to make this happen in calendar year 2023. You can see the various types of data
[23:14] that will be archived and available there. there. And that's it. Thank you very much for your time.
[23:28] Thank you, Matt, for the great demonstration of accessing near real-time data and visualizing the data in QGIS. We'll now go to Ryan Wade to
[23:36] learn how to use Google Colab and Jupyter for displaying and differencing snap SPORT LIS soil moisture data. Ryan,
[23:43] over to you. Okay, hello everybody. Welcome to the working with data in Jupyter notebooks portion of session three on the
[23:58] application of NASA SPORT land information system soil moisture data for drought. The authors of this are Robert Janod and Ryan Wade. I am Ryan
[24:10] Wade. So, what we'll do is we will go through this Jupyter notebook example. We'll scroll through. There are no
[24:18] PowerPoint slides for this portion. We may go to some other tabs just so that you can see where to get some of the
[24:25] data from and we'll go ahead and take it away. away. So, once again, this particular session you've all heard about the NASA land
[24:34] information system flexible land surface modeling and data assimilation framework. And so, with this land surface modeling concept, right? This
[24:46] includes several parameters within this including precipitation, all parts of the hydrologic cycle, basically. Precipitation, longwave and shortwave
[24:56] radiation, of evapotranspiration, energy balance, and then that infiltration into the soil moisture. That's what we've been focused on so far with this list
[25:06] for drought course with the applications for list for drought course. Specifically, the purpose of this module is to introduce you to working with list
[25:16] data data within a Python framework with a focus on GeoTIFF geo-referenced raster data. There are other data types for list. You
[25:29] can find, especially with GRIB 1 and GRIB 2 data as well. You may also find some list data out there that has
[25:37] netCDF, but specifically to the SPORT list run, we typically have GRIB data and GeoTIFF data, okay? Which can be imported into
[25:51] multiple GIS frameworks. For this, we're going to use this Jupyter notebook in order to work with that GeoTIFF
[25:59] geo-referenced raster data. Now, Now, we are in Google Colab, and so you should have started this up. You should
[26:07] have gone to the NASA ARSET uh GitHub page, specifically with the NASA ARSET SPORT list GitHub page, and from there,
[26:19] you can access this Python notebook as well as some of the data that's there. As I scroll down here, you'll notice
[26:26] that um that we do have this data uh both posted on the uh on the NASA ARSET GitHub page, and you can also find
[26:38] this in the GeoServer on the NASA SPORT website. Okay, so let's go ahead and take things away with this Google Colab. The
[26:49] benefits of running things within Google Colab or that you don't have to install Python on to or to your local machine.
[26:59] Everything that you are running is in the Google Cloud. So, when you go through and install all of these
[27:06] different packages, when you're working with data, everything is primarily pulling from the cloud. So, this section we'll go ahead and get going with the
[27:16] Jupyter Notebook. There's a couple of ways that you can interact if you're not familiar with Google Colab and Jupyter
[27:23] Notebooks. We can run these individual cells of data either by hitting the little play button or by highlighting
[27:32] some text or highlighting one of these cells and then holding down the shift key and hitting the enter or return key,
[27:39] depending on what operating system you are working with, what type of computer, whether it's a Mac, Linux, or a
[27:45] Windows-based, or even a Google Chromebook. So, we'll go ahead and get things going and this is cell you would
[27:53] only run if you are using Google Colab. What we've done is we've made sure that you are installing the correct version
[28:02] of these specific packages so that they work well together within Google Colab virtual environment. So, I'll go ahead
[28:11] and run this and the first thing is it's it's going out to the web and it's downloading and
[28:18] installing lib proj develop and project data and project bin. Also, lib geos, cython, cartopy. Cartopy is key when you
[28:30] are doing any type of GIS-based geo-referenced work. Rio xarray so that you can use arrays efficiently when you are transforming
[28:42] your data arrays and then we'll also in install the correct instance of Cartopy here. Additionally, in order to reshape
[28:50] some of these files, files, some of these arrays, you will need something called Shapely. Now, this goes
[28:59] ahead and if you notice, we have a pip uninstall Shapely and then a pip install Shapely with no binary. And that's
[29:06] because there are conflicts between Cartopy and Shapely, so we're uninstalling the native version of that that already comes with Cartopy, and
[29:16] then we're reinstalling the version of Shapely that works well with Cartopy. So, as you see here on my screen, it
[29:25] only took 23 seconds to download and install all of these beginning packages. For you, it may take up to two to three
[29:34] minutes depending on your internet connection and bandwidth. So, I'll go ahead and scroll down just so that you can see you can collapse these
[29:45] so that you don't see every bit of text as as part of this as as part of running these packages,
[29:54] but if you wanted to go through and error error you know, error check and troubleshoot, it's got every piece as you scroll down.
[30:02] And then finally looking at that successfully installed Shapely, successfully installed this and this and this and that.
[30:08] Okay, so we'll go ahead and move forward. forward. The other thing that we've done for you as part of this Jupiter notebook is that
[30:17] we have gone ahead and made sure that you have all the packages that you need to to to to run all of the plotting and data
[30:26] routines and functions within Google Colab, we've created functions for you so that you can mimic the color map, the
[30:35] color bar, the color scale that you'll find in the NASA Sport Viewer. For example, if I go over to this other tab,
[30:42] you can see I already have in the NASA Sport Viewer uh some of the list data, the 0 to 10 cm relative soil moisture,
[30:50] and all of this uh the this function that that we're about to go into will go it has it's hard-coded the color map so
[30:59] that it mimics our color map. You can go in and create your own RGB color map. So, the first thing we'll go ahead and
[31:07] and import warnings, and we'll go ahead and import other uh packages. Once again, it's not downloading. These have
[31:14] already been downloaded, but these are being imported and installed such as NumPy, Rio Xarray, Cartopy, and we're
[31:21] doing this shortcut where we import Cartopy CRS as CCRS so that we can more efficiently call specific features from
[31:30] and specific functions from Cartopy. So, Cartopy feature as CF, Cartopy IO shape reader uh as SHP reader, and Matplotlib as PLT
[31:43] so that we can uh access those plot commands more efficiently, and then some of the uh importing some of the color
[31:50] maps and and boundaries. So, once again, I've run these. These only took about a second, maybe even
[31:56] less to run at least on my computer here. here. The color map below, once again, we've hard-coded and defined our RGB color
[32:06] maps so that they match the NASA Sport Viewer. I'll go ahead and scroll down just before running this so you that you
[32:12] can see it, but we're defining the color map for relative soil moisture, RSM, volumetric soil moisture, VSM,
[32:22] green vegetation fraction, GVF, any of our change when we're doing a change from one volumetric soil moisture to another or
[32:34] one relative soil moisture to another, we have a color map specific to those when you're doing any kind of 1-week,
[32:41] 1-month, 2-month, 6-month changes. And we also have our percentile color maps for all of those. And then
[32:49] you can see we created dictionary here for these that you will then call this function and your specific variables and
[32:58] parameters from the dictionary later on when we're working with the data and we're plotting. So, I'm going to scroll back up and go
[33:05] ahead and run this particular cell. Did not take very long to do at all. Okay. Okay. So, we'll go ahead and scroll down and
[33:17] you can once again, you can collapse these so that you don't see all of these, but I'm going to go ahead and
[33:22] leave these up so that you can see them. We also go into our date time so that it
[33:27] will read the date time from the file names. names. Okay. Okay. So, I'm going to go ahead and take just
[33:35] a brief pause here for a moment in case you need to get caught up just for about
[33:41] 5 to 10 seconds and then we'll go on to our specific drought monitor examples. Everything that we've done so far is
[33:48] just prepping so that we can work with our data. We have everything that we need to efficiently create plots.
[34:08] Okay, great. Hopefully you're caught up at this point. And now we're going to move into actually reading in, downloading and
[34:17] reading in the NASA sport list data and plotting that data. So, what I've done here is I've used an
[34:24] example from the drought monitor, the US drought monitor from September of 2022. In this specific case, the drought
[34:34] monitor, the US drought monitor offer authors were trying to make decisions on what level of drought, once again,
[34:42] intensity is over here, none, D0, abnormally dry, D1, moderate drought, D2, severe drought, D3, extreme drought, and D4, exceptional drought. So, they
[34:54] had to make decisions, and one of these was specifically on this area in Central Arkansas. Actually, a good bit of
[35:00] Arkansas. Arkansas. And so, our goal, well, is to mimic as if you were a drought monitor author,
[35:07] and you wanted to create your own visualization of NASA Sport data to more efficiently be able to conduct your
[35:13] analyses. So, your goal is to create a CONUS view similar to the US drought monitor maps of volumetric soil moisture
[35:20] percentile to aid in your analysis. So, I have this nice image here from the US drought monitor from the end of
[35:30] September of 2022 as a guide for what you're going to do for the NASA Sport list data.
[35:39] So, once again, we would start by downloading and reading in the Sport list data in GeoTIFF format.
[35:45] Specifically, we're going to start with just pulling in the 0 to 10 cm volumetric soil moisture percentile
[35:53] product. We're going to start with the shallowest layer for right now. Now, once again, this can be done through the
[35:59] NASA Sport's uh GeoServer, and we will have some of this data both on the GeoServer as well as on the uh NASA
[36:08] ARSET GitHub page as well. But, for this, anything that has a hash uh or pound symbol is commented out, so I
[36:16] have this set up so that you can be ready to go ahead and access some of that. Uh
[36:22] and I'll show you where to get that. Once again, if you go to this particular directory, geo.ndc.nasa.gov/sport,
[36:31] this is what this uh site looks like. And if you were just to go to the SPORT
[36:36] website, website, the geo.ndc.nasa.gov uh directory, here at the bottom, you would click on SPORT. Then you would click on modeling.
[36:51] And you would go to list, l i s. Now, from there, it really depends on what data you want. We have data for
[36:59] Africa, 3 km data for Africa, we have data for Alaska, right? And what we're going to do is we're going to go ahead
[37:05] and uh the Caribbean, and we're going to go ahead and pick the CONUS, Continental United States, 3 km data.
[37:13] From here, you can see there's all sorts of data that's out there, some that are in AWIPS format for the weather service,
[37:18] some forecast histograms, all sorts of things, and even you can find some of the GRIB data, but we're working with
[37:24] GeoTIFFs. GeoTIFFs. So, I go ahead and click on GeoTIFFs, and you have all of these here. You have
[37:31] green vegetation fraction, you have relative soil moisture 0 to 10 cm, you have some differencing, some 14-day,
[37:38] 7-day differencing, relative soil moisture 0 to 2 m, which is the 0 to 200 cm, percentile data, um relative soil
[37:47] moisture 0 to 2 m, volumetric soil moisture 0 to 10 cm, and the volumetric soil moisture percentiles. If I click on
[37:56] that, then you can see that you have a wealth of data to access. From the VSM, you can access the the volumetric soil
[38:05] moisture percentiles for 0 to 10 cm, 0 to 40 cm, 0 to 100 cm, and 0 to 200 cm.
[38:15] All of these in this particular folder here, in this directory, are all live data. data. What we're doing here is we're working
[38:23] off of some archived data. But if you want to go grab the live data, there it is. You know where to access it now.
[38:32] Okay. So, I'm going ahead and accessing some archived data. Once again, specifically, we're uh going ahead and
[38:38] setting the base geo URL where we get the data from, specific directory, as a variable, and then we're going to
[38:47] combine that with the actual file name. For the actual file name, we're going ahead and we're going to pull this in
[38:54] from 2022, September 30th at 0Z for the volumetric soil moisture 0 to 10 cm percentile data for the entire
[39:06] continental United States at 3 km grid spacing. spacing. We'll use this uh as a data structure. We'll open that up in the uh rasterio,
[39:16] use that because rasterio is an important package that allows you to read in raster data, especially GeoTIFFs, very efficiently.
[39:28] So then, we will go ahead and run this cell. It's going out to get that data, and then it's downloading it, putting it
[39:38] in virtual memory, and reading it in to these specific variables and data structures. structures. One of note that we have for read in,
[39:48] I've set this up here at the top so that it's doing this for the volumetric soil moisture percentiles. If you wanted to
[39:55] do this for relative soil moisture, uh the volumetric soil moisture, not the percentiles, okay? If you wanted to do
[40:03] green vegetation fraction, or if you wanted to do some of the difference data, the you would just copy and paste
[40:09] these sections up here in place of where it says {hash} VSM 0 to 10 cm percentile. percentile. Notice that under product type, you need
[40:20] to be sure and specify the product type, whether it's a percentile, relative soil moisture, volumetric soil moisture,
[40:27] green vegetation fraction, or change, because that's going to the specific product back up in the function that
[40:35] defined our color maps and defined our products in that dictionary. So, the way that we've set it up because we've hard
[40:43] coded this to give you this example, you need to be sure and go and specify the actual product. I'll scroll up one more
[40:52] time just so that you can see where the product is. There's the percentile, there's the change in the color map,
[41:00] there's the green vegetation fraction, there's the volumetric soil moisture, and there is the relative soil moisture. Okay. So, let's scroll back down.
[41:12] And this is not a cell that you're going to read in. This is just a note so that
[41:16] you know that you can copy and paste that up in the cell above. above. Okay. So, let's go ahead and plot this.
[41:23] I'll go ahead and we set our color map, our levels, and our product type for the file that we just read in.
[41:31] We do our appropriate projection for this. We go ahead and reorient our data that fits to our map
[41:41] and our projection. We go ahead and set our coastlines, our state boundaries, and labels, and we have this set to go ahead and
[41:50] automatically pull in the label that's here at the top of the plot based on the file name. So, I'll go ahead and run
[41:57] this for you. Run this. And it'll take a moment for it to go ahead and set up the palette,
[42:05] uh bring in all of the appropriate uh functions to then read in that data and plot it the way that we have asked it to
[42:14] plot. plot. Now, we have not specified any type of a lat long boundary. We're just doing it
[42:20] for the for that entire data plot, which is for this is the continental United States is the
[42:28] default. default. So, you can see here for the volumetric soil moisture 0 to 10 cm percentile, you
[42:34] can see very low percentile for volumetric soil moisture through Oklahoma, Missouri, Iowa, Minnesota, and the Dakotas, as well as Arkansas.
[42:47] Okay, well, that's great. So, if you're a US Drought Monitor, you're like, okay, well, wait a second. We didn't have
[42:53] Arkansas in the D2 drought but last week, you know, or last month, but we have to make a decision. So, let's go
[43:02] ahead and take a moment and let's zoom in. Specifically to Arkansas. So, now you're a US Drought Monitor author
[43:13] considering whether to include central Arkansas in the D2 severe drought category. Based on this need, you decide
[43:19] to create a zoomed-in view for Arkansas with the counties overlaid just like this US Drought Monitor state plot
[43:29] and you want to go ahead and do this so that with that county data, it has that specificity so you know which
[43:39] counties to include and which counties to not. Okay. Okay. So, the first thing you have to do is
[43:46] download the county base shapefiles. I've gone ahead and downloaded that for you and I've posted that to my own
[43:53] personal server space here. This will also be available on the NASA ARSET GitHub page as well at the
[44:02] time of this uh course. And so, you can also find it there. So with this particular cell
[44:13] you can also find this out on the web. You have to download it un- unzip it and then have all of the
[44:22] data ready as a shapefile. If you look at this, what I have here is I have the county shapefile
[44:33] in a directory. It's got the database file. It's got the project file. It's got the .sbx .sbx .shp. It's got the
[44:42] .sxml, the .shx. It's got all of these files that are needed. It's not just the .shp file. You need to be able to access
[44:51] all of these in the same directory if you've never worked with any of this GIS-based data before.
[44:58] Okay. Okay. So this cell will read will download and read in the county-based shapefile data using the reader.geometries
[45:09] and using shapely. Once again, shapely was an important package for us to download and make sure that we had the correct version of it,
[45:19] the non-binary version. Okay. So we've read that in. Took 4 seconds on my computer. So now let's go
[45:27] ahead and zoom in. We're going to create our plot, set our color map, overlay our coastlines and county borders
[45:33] onto that. But what we're going to do is we're going to set custom bounds for our zoom in view. We're going to do
[45:40] 32° north to 37° north and 95° west to 89° 89° west. west. And that's what we've done here. All of
[45:52] this up here at the top is exactly the same as the continental US portion of it. it. Okay.
[46:00] Okay. Everything up here is exactly the same. The only thing that's different is that we have now set an ax.set_extent
[46:14] and from this within these brackets we've put in -95, -89 for our longitude, positive 32, positive 37 for our
[46:25] latitudes. Let's go ahead and run this cell cell and let that do its work. Okay. For me, it took 9 seconds. For
[46:43] you, if you're on a wireless network or something like that, because once again, we're all working from the cloud and
[46:49] we're working from you know, from from Google Colab, it could take a little bit longer depending on your bandwidth, things like that. So,
[46:56] here is the volumetric soil moisture for 0 to 10 cm percentile. And once again, you can see, you know, extremely dry for
[47:04] that shallow near-surface layer in through western Arkansas and relatively dry through much of central Arkansas. And then once again, over here into the
[47:13] Arkansas Delta, you know, exceptionally dry for that that shallow near-surface layer, that 0 to 10 cm. Okay. Well, once again, as I just
[47:26] mentioned, this is valid only for a single day at a single depth. And the volumetric soil moisture at 0 to 10
[47:37] is fine if you're looking at, you know, immediate impacts in anywhere from minutes to hours to a day or maybe a
[47:46] little bit more for you know, precipitation impacts on soil moisture. But if you're looking at drought drought and trying to decide, you really want to
[47:57] be able to probe deeper and deeper into that depth. You want to be able to dig into the 0 to 40, the 0 to 100, and even
[48:05] that 0 to 200, depending on the time scales, and depending on the the impact and severity of that lack of
[48:13] precipitation. precipitation. So, So, let's say you want to dig into this data a little bit deeper, both literally and
[48:23] figuratively. figuratively. You want to create a four-panel plot of these various depths for the volumetric soil moisture percentiles to aid in your
[48:35] analysis. Okay. Well, that's great. So, what we've done is we've created a panel of a cell here that defines the depths,
[48:44] 0 to 10, 0 to 40, 0 to 100, 0 to 200, which is the 0 to 2 meter, and we've
[48:52] done a nice little wildcard character in here so that it will go out and define our files into an array, and it will go
[49:01] and grab the specific file names based on the depth. Okay? And then we'll put all of that
[49:10] into a dictionary. So, we'll go ahead and run that. If you don't want to use the the wildcard character for geo URL,
[49:17] you can just go ahead and give the entire file name, the entire URL, if you know where those are located. This is
[49:24] just trying to make things a little bit more efficient and customizable for you, but you can go ahead and list each one
[49:30] of those individually with the full file name, with the full URL path. So, I'm going to go ahead and run that.
[49:39] And it's once again going out, downloading it, creating it, putting it into a dictionary. Okay. So, we're going to go ahead and
[49:46] define some of these parameters into a dictionary, and then we're going to go ahead and do a check. Because we're
[49:51] doing a four-panel plot, we got to make sure that there's only four inputs. So, we'll go ahead and run this
[49:58] to make sure that we uh uh both once again go ahead and make sure that we define our parameters. We
[50:05] check to make sure there's only four data inputs. We have a nice little error message if it doesn't. We go ahead and
[50:11] set our figure plot. And then from there, we loop through our dictionary to pull the appropriate file names and parameters from that.
[50:25] From from uh what we just read in. And we also assign the appropriate color maps based on the product type.
[50:37] Okay. Then once again, we go ahead and set our coastlines and we set our state boundaries and we set our counties that
[50:44] we just did and we set our title, everything that we did before. We're also going to keep it with the same
[50:49] extent extent access extent here. -95 to -89 longitude, 32 and 37 north latitude. latitude. And then we'll go ahead and create our
[51:02] four panel plot. Okay, let's go ahead and do that. We've looped through there and it has created a four It's set up
[51:12] the panel and now let's create the plot. Have that as a second uh panel for uh second cell for execution here.
[51:22] But what we did in the previous cell was we set everything up so that we're ready to plot.
[51:29] And we're pulling in everything from our dictionary. There's our product type, looping through those files, and making
[51:36] sure that we have our counties plotted on here. And by the way, if you don't like the
[51:41] way that the borders are set and you don't like the way that the state borders or the county borders, you can
[51:46] come up here and you can change it. You can change the line width for the counties. counties. You can change the line style
[51:54] for the counties. You can change that for the states. You can change those all up here in the previous
[52:02] cell. cell. States line width, you can change the thickness of the line width for the state borders. You can change the county
[52:10] line style and line width. You can change the face color. Right now I have I have it set as none,
[52:17] which by default makes it gray. So, there's your four panel. Volumetric soil moisture 0 to 10 cm percentile, the
[52:25] 0 to 40, the 0 to 100, and the 0 to 200. And you can see that through Arkansas
[52:34] this lack of precipitation has really greatly impacted the shallowest soil moisture. It's definitely dry in that 0
[52:44] to 2 m, which is that 0 to 200 cm, but the the closer you get to the surface,
[52:51] you see that impact. But you can really see that the 0 to 10, 0 to 40, and 0 to
[52:57] 100, it's pretty dry. Now, of course the US Drought Monitor uses other products and a convergence of
[53:05] evidence approach, but you can see why they decided to put Arkansas, much of central Arkansas, into D2 drought.
[53:17] Okay. Okay. So, what we've done in review so far is we have read in our data, multiple types of GeoTIFFs from multiple
[53:28] file names, and we've pulled in and we've created custom plots. First we started at the conterminous United States,
[53:38] and I'll scroll back up for that, to match the US Drought Monitor's Continental United State map. map. We've taken a zoom in level for
[53:52] Arkansas, brought in shape files for counties, and we've created a volumetric soil moisture percentile zoomed in to
[54:00] Arkansas. Arkansas. And then we wanted to dig down into some additional depths so that we could more deeply analyze the
[54:11] impact of a lack of rain on soil moisture, and we've created products based on that, a four-panel product.
[54:19] So, I think this is a good opportunity for us to take a pause just for a moment
[54:23] before we go into our international examples. I'll pause for about 5 to 10 seconds for you to kind of get caught
[54:29] up. up. And if you're following along in real time, then a great opportunity for you to get caught up. If you're following
[54:39] later on with a recorded example, then it's a great opportunity for you to hit pause and then go back and run those
[54:45] cells yourself interactively. Okay. Okay. So, we will forge on and we've got just a couple of international examples
[55:09] specifically focused on Africa, and then we will do some back come back to CONUS and do some
[55:16] custom differencing to wrap things up. So, let's say that you're interested in relative soil moisture plots for all of
[55:25] Africa, and then to be able to zoom in on a specific area. Well, we've done this for the United States, so it's it's
[55:31] not that different. The only thing that you really have to change is, you know, okay, the file names and maybe your lat
[55:39] long files, okay? So, first thing we're going to do is read in our relative soil moisture data
[55:45] for Africa. For this, I have this on my web server here, but you can also find this once again on the
[55:53] NASA ARSET GitHub page as well. And so, we're going to read in from this geo URL the Africa data from 2021
[56:05] November 1st. And specifically, we're going to take a look at the list relative soil moisture for the 10 cm to 40 cm for all of Africa
[56:18] at 3 km grid spacing. I've left several other parameters and products in here so that all you have to do is remove the
[56:28] hash and comment those out, but once again, the important thing here is to have the file in to assign that variable
[56:36] and the product type, P type, which is RSM, relative soil moisture. Then once again, we have to come down
[56:44] here to open our file using rasterio with the name with the file that we just put into our our variable.
[56:54] And we have to make sure that we are specifying our our our product type. In this case, um
[57:03] the the product type it's just going to check to make sure it's not volumetric soil moisture, and if it's not, then
[57:09] it's going to go ahead and multiply everything by 100 so that we can deal with things in terms of percent.
[57:16] Okay? So, you don't have to change this here. This is just simply a check to make sure that it's not volumetric soil
[57:22] moisture. If it's not, then it multiplies everything by 100 to make sure it's not that that Okay.
[57:29] Okay. So, I'm going to go ahead and run this cell so we've read in this Africa data.
[57:39] And now, once again, same thing. We're going to set our color map. We're going to set our level levels, our label,
[57:47] and based on the labels, we'll use our product type and the name of the file, and it will cut out part of that file
[57:55] name as to to uh seed our title here at the top of the plot. We set our figure
[58:07] canvas, our axes, our projection. We transform our data to fit our map. We're bringing in the right color map.
[58:23] And that's really it, right? We make sure that we have our coastlines, we make sure that we have our borders.
[58:28] Notice that I'm not using the states because we're not using the continental United States, so I remove that from our
[58:34] previous uh uh cells, our previous parts of the script. And we'll go ahead and run this. And it's reading in that GeoTIFF
[58:46] of the 3-km data from Africa. Okay, so there we go. We have Africa, we have our available water, which is our
[58:54] relative soil moisture in percent. Once again, the relative soil moisture is a percent of saturation. Okay, it's a percent of saturation.
[59:04] Whereas the volumetric soil moisture is the percent of the column, but this is relative soil moisture, and
[59:11] we've created our plot. Can see very dry up here towards the Sahara. Sahara. You have a lot higher relative soil
[59:20] moisture down here in the Congo. And it's particularly dry over here in the southeastern portions of the
[59:30] African continent. So, going back to the sport viewer, one of our default areas on the sport viewer, if you look at lists, is Africa.
[59:43] And we have Africa Kenya as well. And so, let's go ahead and say that we're going to take this Africa data and we're
[59:51] going to create a similar zoomed-in plot that focuses more towards Southeast Africa. So, I want to mimic this plot here.
[1:00:06] Okay. Well, let's scroll down. And this right here is an example from the sport list viewer. It's also got
[1:00:15] precipitation contours on there as well. We're not going to create that, but we're basically going to try to mimic
[1:00:20] this zoomed-in view. You can see that we're looking at approximately approximately 22, 23° north, about 22, 23° south,
[1:00:33] about, you know, 53° east, and about, you know, 26, 27° east. Okay, well, we'll try to mimic this the best we can.
[1:00:44] We've already read in the data. All we have to do is change the palette for our plot based on our custom bounds. So,
[1:00:53] everything up here at the top of this cell is exactly the same as what we see for our entire
[1:01:03] continental plot for Africa. Nothing has changed between this here here in our plot and the top part of this cell. The only
[1:01:17] thing that we're doing is, once again, we're calling that ax.set_extent. And by the way, if you hover over it,
[1:01:25] you get some of the uh you know, some some of the uh parameters, some of the specific info.
[1:01:31] That's one of the nice things about Jupyter Lab. But, we're going to go ahead and set this for
[1:01:36] 22° East to 53° East, and then -22° latitude, which is 22° South, and +21° latitude, which is 21° North.
[1:01:52] That's approximately what we see here on our original plot that we also see in the sport viewer.
[1:02:02] Okay, so we'll go ahead and run this cell. cell. And once again, you can combine all of
[1:02:06] this into scripts to optimize and automate, but we're all doing this in Jupyter Notebooks, Jupyter Lab, because
[1:02:14] it's interactive, and you can see these things in real time. Okay, great. So, you can see, back from
[1:02:21] November November 1st of 2021, really dry in our uh in in our uh relative soil moisture. In that 10 to 40°, which is 10 to 40 cm,
[1:02:36] which is really a key layer to look for when it comes to drought. Okay, so we've created a nice
[1:02:46] customized zoom area for this international example. And so, I'll take about another 5 seconds, and then we'll wrap things up
[1:02:56] with a custom difference example. Okay, welcome back. So, now we're going to come back to the continental United States
[1:03:18] with our sport list custom differencing example. example. So, So, what we have here already default plotted and I just pulled this straight
[1:03:27] from the sport viewer was a 1-month difference in column relative soil moisture moisture percent. percent. Well, let's say that you don't want a
[1:03:37] 1-month. Let's say that that you're part of the drought monitor or some other, you know, drought you're you're you're
[1:03:43] assessing drought and you want to do something for 6 months or maybe 1 week or 2 weeks and you want to see just what
[1:03:50] has happened. Especially, maybe you are looking at flash drought and you want to really look at that 1-week and 2-week
[1:03:57] change or maybe even 3-week in relative soil moisture. You don't want 1-month, 3-months, 6-months. Okay? Okay? So, let's take a look at what we would
[1:04:10] do in order to do this. All right. So, I've got some of these cells are hidden. I'm going to go ahead
[1:04:15] and expand these out and scroll down. Now, once again, we will read in our data and what we're going to do is we're
[1:04:23] going to start with a 1-week relative soil moisture 0 to 2-m difference plot. And everything that we've been looking
[1:04:31] at has been for September 30th of 2022. So, let's grab data from both September 30th of of 2022 as well as September
[1:04:42] 23rd of 2022 so that we can do a 1-week difference. difference. So, here file one, we're going to grab
[1:04:50] our relative soil moisture 0 to 2-m and we will go ahead and read in that 2022 0930
[1:05:00] for the relative soil moisture of 0 to 2-m for the continental United States 3-km and we're going to use the float
[1:05:07] data. data. We'll go ahead and open it up using once again raster IO and put it into our first data structure
[1:05:16] DS1. We'll also read in file number two, which is going to be from September 23rd, one week prior.
[1:05:28] Our product type once again is relative soil moisture. You have to have that product type here the way that we've set
[1:05:34] up this notebook. And we'll read it into data structure number two with raster IO. IO. Then what we'll do is create a data
[1:05:43] structure number three where we'll say data structure number one, which is the most recent, which is September 30th,
[1:05:51] and subtract from that one week ago September 23rd. Now what's important here is that you change your product type. Notice that
[1:06:02] the product type up here was relative soil moisture. Now we're doing a differencing. Now we're doing a change.
[1:06:10] So with this change we will set that because we need that for our color map. All right, so we'll go ahead and run
[1:06:17] this. Took 2 seconds, not bad. So we're reading everything in and putting it into the appropriate data structures and
[1:06:27] doing our differencing. Now we're setting up our plot exactly like we did before. No difference here. And I've went ahead and left this
[1:06:37] commented out where if you wanted to do some kind of custom bounds it's ready for you, but we're just going to go
[1:06:42] ahead and do the entire continental United States for our relative soil moisture 0 to 2 m difference plot
[1:06:48] between the 30th and the 23rd. We'll go ahead and run this. And you can see what that percent
[1:06:59] difference is. For example, in Arkan in parts of Arkansas with that we focused on before, it's down anywhere from 2% to 4%. Along
[1:07:10] the Gulf Coast, there are poor parts of it that the one-week change in relative soil moisture for the total column from
[1:07:18] 0 to 200 cm, it's down anywhere from 4% to 8%. Meanwhile, on the lee side of Lake Erie,
[1:07:29] in November, probably some lake-effect rain, lake-effect snow, or well, probably some lake-effect rains. Um in the in September, you see that
[1:07:38] it's actually up. That one-week relative soil moisture in that total column is actually up anywhere from 8% to 16%. In Florida, hmm
[1:07:49] we got some interesting things going on here, right? Potentially some tropical activity activity along the Florida Peninsula. It's up as
[1:07:56] much as anywhere from 24 to 28% in some areas, just off of Cape Kennedy in Florida. Okay, so now let's say that you want to
[1:08:08] do a 0 to 2. Well, then you just change. You change that Once again, we're going to do read in the ninth September 30th,
[1:08:16] then we're going to read in September 13th September 16th, rather. S- still and we're going to read this in.
[1:08:31] And once again, our product type is RSM, but we're but we're checking to make sure it's not volumetric soil moisture.
[1:08:37] So, this is where you need to change your product type, not up here. Don't change this part.
[1:08:45] We've done our differencing, we've done our plot. I just combined it all into a single plot, and then there's our
[1:08:50] difference in our soil moisture. I'll run that one more time just so that you can see it.
[1:08:55] Our two-week relative soil moisture difference, you can see how dry it's down 4 to 8% even some areas as much as 8 to
[1:09:08] 12% in parts of Arkansas, Mississippi along the Texas along the Gulf Coast even up into parts of the Midwest.
[1:09:17] And once again, we see increases in soil moisture in that total column up into the northeast and down in
[1:09:25] Florida. Okay, so review. We've just gone through some international examples for some custom plotting and zooming and we just
[1:09:35] did custom differencing where we did a one week and a two week. If you had data for 3 months, 6 months, a year, you can
[1:09:44] do all of the differencing and these plots. You have the color maps, you have the code, you have what you need to get
[1:09:52] you started all in a Google Colab framework. framework. So that you don't even have to install Python onto your local machine if you're
[1:10:03] not able to. And as one final follow-up for folks, just a reminder that after each session, we have self-paced items for homework
[1:10:17] for completion and you will have a separate Jupiter notebook for you to use that you will access some data
[1:10:26] just like I did today where you will go in and do some custom zooms, zooms, some four panel plots and custom
[1:10:35] differencing and then you will take those images that you create and you'll have a one final image to upload as part
[1:10:44] of the homework lesson. Once again, thank you very much. We appreciate your attention and your interest in the sport version of the
[1:10:55] land information system. Thank you, Ryan, for the terrific demonstration on using Google Colab for displaying and differencing SPORTLIS
[1:11:05] soil moisture data. As we wrap up the webinar series, we'll go to Chris Hain, project lead for NASA
[1:11:12] SPORT, to summarize the training and provide closing comments. Chris, over to you. Uh thanks, Sean. Um I hope you all had a
[1:11:23] chance to enjoy the hands-on experience from uh from Ryan in the previous presentation, and got a chance to work
[1:11:29] with the data, and hopefully work with the data in the homework exercise coming up, too. Um so, I wanted to provide a few closing
[1:11:36] statements uh to the the the the three-part training that we put together here on on our our SPORTLIS for drought.
[1:11:42] Uh what you have there in the background is an animation showing I really just wanted to kind of go over how, you know,
[1:11:48] important important um um land surface modeling systems like SPORTLIS are for for for looking at things like drought, and for other
[1:11:56] applications that we didn't cover in this training. Um Um obviously, this is a community-driven um development, and we really do take a lot
[1:12:06] of the feedback that we get from stakeholders um to to better improve this system, and to figure out how
[1:12:12] people are using it. Um going forward, you know, there will be some improvements to the system focused on more forecast capabilities.
[1:12:21] Uh we will also be hopefully refining and improving spatial resolutions. Um maybe going from 3 km to 1 km. Um and
[1:12:30] also looking at um additional advanced data simulation capabilities. Uh this really allows us, as you as you saw some
[1:12:36] from the some of the previous presentations, to better constrain some of the variables that we are predicting
[1:12:41] within the land surface model. Now, when we do all this stuff, we really do hope to improve the specification of drought,
[1:12:48] so we understand how important this is for decision-makers to get a really accurate representation of the current
[1:12:54] conditions, um so that those maps can then be used to to motivate things like the US Drought Monitor,
[1:13:01] which then also tie into you know, really on-the-ground impacts for agricultural producers, water managers, and other users who really
[1:13:09] rely on this information in their day-to-day. day-to-day. So, it really is a nice kind of encapsulation of taking research,
[1:13:18] creating a product that can then be used by our operational partners. And then, you know, bleeding down to actually
[1:13:24] being used by the general public. So, when we all get into science, this is a good example of a project that we
[1:13:30] really wanted to, you know, take something that we we develop and and then, you know, kind of transition it so
[1:13:37] that it could have broad societal benefit. benefit. Uh I do also want to close with saying that this training would not have been
[1:13:46] possible without many of the collaborators you heard from over the last 3 weeks. And I wanted to make sure
[1:13:52] that we recognize them again. The group that we've been working with over the last decade has been a really
[1:13:59] great group, and it's really great to engage with everything from the scientists and developers who developed the SPORT system and the SPORT LIST
[1:14:07] system and the LIST system at Goddard. And then also for the work with some of our users and see how they use the data
[1:14:14] in some of their decision-making. So, the first group that we really like to thank is Sujay Kumar and his team,
[1:14:21] the Land Information System team at Goddard Space Flight Center. We've collaborated with them for over a decade, and we will continue
[1:14:28] collaborating with them to further refine our system to really meet the needs of our end users. Chris White,
[1:14:36] he's our applications integration meteorologist here at SPORT, but he's also a forecaster for the National Weather Service at the Huntsville office
[1:14:42] here. here. And he has really spearheaded the use of of SPORT LIST data within the National Weather Service and to other agencies.
[1:14:50] Um he's really our conduit from uh the production side of this product into the users. users. Uh Richard Heim and other authors of the
[1:14:58] US Drought Monitor, you know, these are the guys and women who have to really sit down every week and draw these lines
[1:15:05] uh for the US Drought Monitor that are, you know, a map that's really important and used for a lot of different policy
[1:15:12] and a lot of other different uh decisions uh for their downstream stakeholders. Um and he's provided a
[1:15:18] great example of how uh the US Drought Monitor's authors are able to integrate different sets of information each uh
[1:15:26] week uh when it comes to producing their maps. maps. Uh also, I'd like to thank Corey Davis
[1:15:33] uh from the North Carolina Climate Office. Um he was also uh gave a nice example of uh how sport list data is used in some
[1:15:41] of his operational decision-making. Um and he has been a long-time user and promoter of the sport list system. Uh
[1:15:49] Barrett Smith, um a s- uh National Weather Service hydrologist at the National Weather Service office in Raleigh, uh he also provided a nice
[1:15:57] example of uh some of the the uses of sport list data in his his his in his uh
[1:16:02] decision-making process. Um and then, you know, I we can't call everybody, but the hundreds of people who we've we've collaborated with over
[1:16:10] the last decade and the users of sport list. list. Um we continue to see the system grow
[1:16:15] and we will continue to hopefully continue to grow that system and grow the number of users um who who show benefit uh from our
[1:16:24] system and, you know, we always like to hear about how people are using the system uh because then we can then tell
[1:16:30] our management here at NASA the kind of benefit of their investments. Um and that helps facilitate further
[1:16:37] investments in some of the things that we're able to develop here at SPORT. So, I just wanted to close with this
[1:16:47] kind of bringing back our the first slide that I showed during the introduction. introduction. Um Um really what
[1:16:56] SPORT is focused on is this research to operations and operations to research paradigm. paradigm. And I kind of close with this, you know,
[1:17:04] obviously SPORT Liz was developed as a research to operations capability. We talked to the operational community and
[1:17:12] noticed that there was a need for high-resolution land surface modeling with low latency to support things like
[1:17:18] drought monitoring. And so we developed that and obviously the system is developed. We've been we've been maintaining it for almost a decade, but
[1:17:26] we're constantly in this kind of iterative process where we learn from our operational stakeholders on what could actually be used to to better
[1:17:35] improve or refine the system. So we're kind of constantly with this system in this operations to research process.
[1:17:43] And what I'd really like to do is you know, call out to the community is that our future developments are really
[1:17:48] driven by your the community needs and we need your feedback. So we like to hear about what is working in the system
[1:17:55] for you, what isn't working and what you wish you could see in a system like this to better facilitate some of the
[1:18:00] decisions you have to make. So with that I will close. I'll once again put our contact information up.
[1:18:07] Um Um you can contact me as I'm the principal investigator for SPORT, but also we have a support email which goes to our data
[1:18:14] production team. If you ever have issues with the SPORT Liz system or if you would just like to
[1:18:19] provide some feedback on how you use it or something or a capability that you would like to see within the system. So
[1:18:25] with that I will throw back to Sean for a couple of parting words in the training and I would just like once
[1:18:31] again thank you all for attending this three-week session and we hope to hear from you and and and hear more about how
[1:18:38] you use our system. Thanks. Thanks, Chris, for the closing statements and acknowledgements uh for SPORT Liz contributors. I'd also like to
[1:18:48] acknowledge members of the SPORT team that contributed to this training, but were not presenters. Kevin Fuel, Liz Janod, Rob Janod, Lori
[1:18:57] Schultz, Amy McAlister, and Chris Schultz all helped in preparing the materials and coordinating each session of the webinar series. Big
[1:19:06] thanks to everyone on this slide. One last reminder, there will be one homework assignment for all three parts
[1:19:13] of the training. Answers must be submitted via Google Form, which can be accessed from the training page on the
[1:19:20] ARSET website. Homework is now available with a due date of June 14th. A certificate of completion will be
[1:19:27] awarded to those who attend all live webinars and complete the homework assignment by the deadline. You will receive a certificate
[1:19:33] approximately two months after the completion of the course. Below is the contact information for today's trainers, along with links to
[1:19:42] the SPORT webpage, ARSET webpage, and social media. If you enjoyed today's webinar, we hope you will sign up on the ARSET listserv
[1:19:50] and social media to receive notifications of future trainings and other announcements. We will now transition to the question
[1:19:58] and answer portion of today's training. And we did want to leave you with a few course conclusions as well. So, my
[1:20:12] apologies for jumping right into the Q&A session, but we did want to leave you with some of the applications of SPORT
[1:20:18] Liz for drought. And these are kind of the concluding uh the concluding uh thoughts from the entire three-part
[1:20:24] webinar series. Uh the first one being the NASA Land Information System Modeling Suite is used globally by a
[1:20:31] wide variety of user and research groups for many applications related to land surface processes, stream flow, ground
[1:20:37] water, and data assimilation with direct application to drought. The sport configuration of of Liz or sport Liz uses the Noah land surface
[1:20:47] model forced by NLDAS-2 for a 1981-2013 climatological period as well as GDS and MRMS precipitation forcing in near real time.
[1:20:59] Sport Liz is a is unique in that it incorporates daily daily satellite derived green vegetation fraction for
[1:21:06] near real time vegetation coverage and health as opposed to a monthly static climatological estimate. The Sport Liz output provides soil
[1:21:15] moisture over the entire contiguous United States at 3 km resolution within layer depths to 2 m. The analyses are
[1:21:24] updated four times a day in real time with hourly output frequency. Soil moisture percentiles product historical context of current soil
[1:21:34] moisture values relative to the 1981-2013 1981-2013 climatological period. The 0 to 200 cm relative soil moisture percentiles compared favorably to the US
[1:21:45] Drought Monitor drought designations where soil moisture deficits strongly correlate with episodes of drought. Sport Liz has experimental forecasts of
[1:21:55] soil moisture percentiles out to 14 days using the US GFS forecast model as forcing updated daily in real time.
[1:22:05] And lastly, real-time Liz applications managed by Sport are provided in several output data formats for the continental
[1:22:12] United States, Alaska, and the Caribbean. But, there are also Liz instances that cover Africa and Southeast Asia for research activities.
[1:22:21] So, with these concluding remarks, we will now transition to the question and answer session. And I do want to thank everybody that
[1:22:34] has submitted a question, and there's still plenty of time left in today's training. So, if you do have a question,
[1:22:40] please do submit it in the question box. But, jumping right into it, question number one, can you use this data
[1:22:46] outside of the United States of America? And whoever answers that, feel free to unmute. Hey Jonathan, Case here.
[1:22:57] Uh so, predominantly, uh you notice that we highlighted it the continental US uh sport configuration of the land information system.
[1:23:09] However, we do also have other international runs active that sport manages. manages. And uh we highlighted some of those
[1:23:17] earlier on in session three when I demoed the sport list viewer. And so, some of those uh runs and data
[1:23:27] output are available over Eastern Africa, Alaska, and the Caribbean regions. regions. Uh you can also get the full 1-km
[1:23:36] Caribbean uh domain via GeoTIFF, and I answered that in question two. But, uh and there's a lot of other app
[1:23:45] organizations that run international applications of LIST. Uh so, this this actually is pretty closely connected to question two, but I'll go ahead and let
[1:23:54] Shawn read question two as well. Great, thanks Jonathan. Uh can you provide a few examples of where sport
[1:24:01] LIST data is available and how to find if data is available for my location? Okay, so again, I'll reiterate that most
[1:24:10] of the content we highlighted here was for the sport LIST run that is over the continental US, and
[1:24:17] that does include adjacent parts of southern Canada and northern Mexico. However, the land information system framework uh I'd like to emphasize is
[1:24:27] that it's fully global capable. So, there's global data sets as long as you have static and the meteorological
[1:24:37] forcing available in a global perspective, then list can support that and you can configure the list framework to set up a domain anywhere
[1:24:49] across the globe. And so, many organizations have done that. that. We ourselves at sport have set up
[1:24:56] applications for some of our sister organizations such as NASA SERVIR and other international capacity building organizations and and
[1:25:07] applications. applications. And so, we've we have examples of those on our sport list viewer over Eastern Africa, Alaska, and the Caribbean
[1:25:19] specifically over Puerto Rico and the Virgin Islands. Uh however, feel free to to Google search and look through the
[1:25:27] land information system project page where they have a lot of other applications applications uh such as uh
[1:25:35] the South Asia land data simulation system system the famine early warning uh If you could scroll down a little bit,
[1:25:43] I'll define the Yeah, the famine early warning systems network, which is over Africa. Africa. Uh so, there there are a lot of
[1:25:50] applications applications of list for drought monitoring, which includes stream flow and soil moisture deficits and even snow analyses.
[1:26:03] Great. Thank you, Jonathan. Uh question number three. From the different from the different depths, can the relative soil moisture
[1:26:10] or volumetric soil moisture of the depth be calculated? For example, 0 to 10 cm and 0 to 40 cm used to estimate the 10
[1:26:19] to 40 cm depth profile. Yeah, and so actually I'm going to start my response by reading my last sentence
[1:26:27] there. there. Uh in essence the order of operations is opposite of how the question was stated. So actually the individual layers are
[1:26:36] solved by the Noah or another land service model within list. And And the the the variable that is directly solved is
[1:26:46] the volumetric soil moisture. And so that's going to give you the water content by volume in each of these
[1:26:53] layers 0 to 10, 10 to 40, 40 to 100, and 100 to 200 cm as defined in the Noah
[1:27:01] land service model. And from those primary fields that are solved in the equations within Noah, we derive other fields such as the
[1:27:12] relative soil moisture, which is going to scale the volumetric soil moisture between the prescribed wilting and saturation points
[1:27:21] at each given soil type or classification. classification. And then we use the climatological outputs of the VSM and RSM to derive
[1:27:33] percentiles of soil moisture for giving the climatological context. So I'd like to refer back to the session
[1:27:43] one content and specifically that online starter package micro lesson, which will help instill the concepts of how the
[1:27:51] land service model is run and how these various fields are are derived and generated. generated. Wonderful. Thank you so much, John. I
[1:28:00] think question four, where can we download previous archived data or non near-time data? Yeah, and so I'll just keep on going
[1:28:10] then. then. So we are in the process of hosting the entire Sportless archive, both the climatological outputs,
[1:28:20] the percentiles, and the near real-time output onto a distributed active archive center, uh specifically at NASA's Global
[1:28:29] Hydrometeorology Hydrometeorology Hydrometeorology Resource Center. So, uh we're actively uh creating the archives and preparing them to be hosted on this DAC system.
[1:28:42] And once that is available, with the goal of the end of this year, then we would uh have that data be completely
[1:28:50] and publicly available for download and perusal uh for anyone else's applications. Terrific. And moving on, question number
[1:29:02] five, can you explain whether it's possible to always reference the most recent file in the Google Colab script?
[1:29:17] Christian, this is uh Kevin Fuellet Sport. Um I think uh Ryan Wade and uh Rob Junod probably um they might have
[1:29:23] had to go to a separate call, but they're probably the ones who were probably could most easily uh answer
[1:29:28] that question. We'll be sure to put an answer in here uh so that folks can refer back to that.
[1:29:33] Great, Kevin. Yeah, thanks so much. I appreciate uh appreciate that update. Uh and then last question, uh question
[1:29:38] number six, can you do a time series analysis of the data? Okay, I This is Jonathan again. I'll
[1:29:46] I'll take a stab at this one, and and I will refine the answer, since I haven't prepared one yet, but this is an
[1:29:53] excellent question, and we have done time series analyses of the data. Uh if you read in, say, uh let's let's say we want
[1:30:03] to read in a year worth of data, there's a couple of ways of doing time series analysis.
[1:30:09] One way that I've done it in the past would be to look at time depth cross sections.
[1:30:15] sections. And what you would do is have time along the x-axis and then you could have the depth of the land surface model
[1:30:23] layers in the y-axis. And then you could see that explicitly that dry down through the soil layer at a particular latitude
[1:30:32] longitude point. So, that could be an extension of what was presented here in the Google Colab script. Whereas once
[1:30:40] you read in, let's say a a period of data, maybe a multiple months of daily data or
[1:30:49] an entire year. And then you could pick a specific point and then look at the time depth cross sections, which would
[1:30:57] show really nicely illustrating that rainfall events and dry downs leading into drought episodes. So, that would be
[1:31:05] one way to do time series analysis. And another way that I've done it and it was published in a 2021 paper in the
[1:31:14] National Weather Association's Journal of Operational Meteorology, where we looked at time series of the soil moisture percentiles over the entire 200 cm
[1:31:26] column. column. And we looked at these time series associated with the with extreme rainfall events in tropical cyclones that occurred in the
[1:31:37] Sport List domain. And so, one one thing you could see is the extreme increase in the percentiles
[1:31:45] to near the 100th percentile associated with a very high rainfall event. And then you could look at the time that it
[1:31:54] is required to decline back to, say, near median percentiles, you know, in the months that follows an
[1:32:02] extreme rainfall event. And that can give you an idea a feel for how the land surface model is adjusting to kind of
[1:32:10] nominal nominal uh uh atmospheric and rainfall conditions following an extreme event as an example. So, we'll try to write up that uh rather
[1:32:21] comprehensive answer into the our response. But, that's that's an excellent question and a and a good way
[1:32:27] to analyze the sport list especially given its high temporal uh frequency of outputs. outputs. Sean, this is uh Kevin Fuel at Sport. If
[1:32:38] I can just add to it uh John uh indicated there. Uh we have a little bit of experience with some of the time
[1:32:44] series analysis uh via an instance of the list that was set up by Dr. Clay Blankenship uh over Alaska.
[1:32:51] And so, for example, the similar plots that John was just talking about of looking at the various soil moisture at
[1:32:56] various depths um our time series plots that Clay has created uh in the past. And also, some of the uh surface-based
[1:33:04] uh output such as like snow cover or uh snow water equivalent uh compared to like in situ observations have been time
[1:33:12] series that Clay has made. Now, I'll just make a little note that I you know, do you need you do need to be careful
[1:33:17] about uh making those time series uh versus uh in situ observations for many of the reasons that we've stated in the
[1:33:23] past in terms of the um you know, limitations of you know, a 3 km or whatever resolution you have pixel
[1:33:30] compared to a specific uh point. So, for example, when we were doing some of the uh snow water equivalent comparisons, um
[1:33:38] the elevation, for example, of the in situ site was maybe slightly different uh than the actual uh grid
[1:33:47] point within the list uh Alaska domain that we were using. So, you have to be a little bit careful when you do those
[1:33:51] comparisons, but we do have some of that experience and I think Clay would probably be willing to uh share some of
[1:33:57] that experience with anyone that makes contact with us via one of the emails at the top of the question and answer or
[1:34:03] that's accessible via the course. Wonderful. Yeah, thanks so much, Devin and Jonathan as well. Well, it looks like we've gotten through
[1:34:12] all of the questions for the gentleman or gentlewoman who asked question number five, we will be completing that question. We'll answer
[1:34:21] it and we will post this to the training page. We were shooting for next week. So I know we did not get around to
[1:34:28] answering it in this in this live session, but it will be posted within a week. So please do go and and look for
[1:34:34] and try to access the the document then. Want to thank all the participants for joining us for all three parts of this
[1:34:39] webinar series. As a reminder, there there is a homework assignment. It is currently active and accessible on the
[1:34:45] training page. So please do go there if you wish to receive a certificate of completion for attending and completing
[1:34:52] this training. We do hope that you will go and and complete that homework. And we also want to let you know there will
[1:34:57] be a survey sent out sometime next week as well. And we hope that all of you that are are taking it, we do hope that
[1:35:02] you will give us feedback. All of that feedback does go into iterating over subsequent training so that we can keep
[1:35:07] improving and making these trainings of the highest value to all those that are that are attending. So big thanks to
[1:35:13] everybody online. We also want to thank all of our guest presenters today. Jonathan Case, Matthew Smith, Ryan Wade,
[1:35:21] and Chris Hayne for presenting in this third and final part of the webinar series. I also want to thank the entire
[1:35:26] Sport team for all the work that you've done in putting this webinar series together. I also want to acknowledge the
[1:35:32] R set team as well for all the work that you did to to be able to make this
[1:35:36] training of such a high caliber to all the participants. So we do hope that you will to see you again at a future R set
[1:35:43] training and we wish you all the best in your future work. Thank you.
