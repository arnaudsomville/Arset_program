# Introduction to ECOSTRESS ET, Part 2/3

`https://www.youtube.com/watch?v=Yc8QDt2f4hs` · id 204 · 1:32:10 · module 70 — New Sensor Highlight: ECOSTRESS

[00:01] Hello and welcome everyone. Welcome back to the second session of this webinar on applications of remote sensing based
[00:08] evapotranspiration data products for agricultural and water resources management. Last week, we had a presentation and data demonstration from Forrest Melton.
[00:23] He focused on OpenET, the product based on multiple satellites and multiple models. It's an ensemble product. And
[00:32] this product was a regional product. It is available over the Western United States. States. As Forrest mentioned, it will be
[00:39] extended to the entire US uh in about a year or so, and it will be extended to
[00:45] other countries as well as more easy-to-use data become available in other countries. Today, the focus is going to be on the
[00:55] ECOSTRESS ET product, which is a global product. Uh ECOSTRESS is relatively a new sensor. And we have a guest speaker today from
[01:04] NASA JPL, uh Gregory Halverson. Uh he is going to focus on how to access data, data, um ECOSTRESS ET data, how to subset it
[01:15] and analyze it in in great detail. Then, next week, we have exercises uh where we will also go through some of
[01:24] the steps of to get OpenET data and ECOSTRESS ET data. So, we'll start with a very brief
[01:33] introduction of ECOSTRESS today, and then Gregory Halverson will have the demonstration of data products and analysis. analysis. Just to make one point, um the one point
[01:45] of clarification is that the demonstration that you will see from Gregory Halverson, um if you wish to
[01:51] replicate that, then these are the steps required. You are required to create a NASA Earth Data login as a new user if
[01:59] you are not already a registered user and that is required to download data. Then download and install the latest
[02:08] version of QGIS. Download and install Anaconda. And download and install Visual Studio Code. So these are the links. Now it is
[02:19] not required for you to replicate these steps now or for this training. This is mostly for your information and
[02:29] reference. A recording of this demonstration will be available within 48 hours on our website. So later on or
[02:36] whenever you need to follow these steps or to analyze ET data, you can follow this demonstration, use these softwares, and do the
[02:48] analysis. So again, to clarify, this is mostly for your information and reference. There will be a homework that will be posted
[02:59] next week on June 15th. And And those of you who complete the homework by deadline and those of you haven't
[03:07] attended all the live webinars will receive a certificate of completion. So just to talk about ECOSTRESS briefly.
[03:18] ARSET actually already conducted a webinar a couple of years ago on introduction to ECOSTRESS. And here's the link with a lot of very informative
[03:29] details. But just at a glance, the ECOSTRESS mission was launched in 2018 in June and it started operations
[03:40] in August 2018. It was launched to the International Space Station. And it has a global coverage as we
[03:48] talked about. We It was first mission to have Wi-Fi for a science mission and it it has
[03:57] raw product and many detailed products. So, all L1 to L products are available. And here's the website with more
[04:05] information about ECOSTRESS. One important thing to note here is that ECOSTRESS is on ISS which has varying
[04:16] overpass time. So, on different regions it passes through different time of day and so has it samples diurnal cycle and
[04:23] so ET from ECOSTRESS can have that leverage that it can look at different parts of diurnal cycle and how
[04:32] ET varies diurnally. And USDA actually uses that to fill gap between say Landsat data which is 16
[04:40] days apart and so ECOSTRESS ET is quite useful to fill that gap in between. So, these are
[04:48] if you go through the the webinar link that we just showed, you will be able to see lot more
[04:54] applications and details about ECOSTRESS ET. ET. So, next we will have demonstration from Gregory Halverson. So, Gregory has been at JPL since 2015
[05:07] and he is a scientific application software engineer. He develops geospatial data processing software for remote sensing systems.
[05:17] And his current projects include a redesign of the ECOSTRESS product generation software. He also generates daily high resolution
[05:26] remote sensing data fusion techniques, thermal stress on coral reefs, thermal habitat compression in the California Bay Delta and evapotranspiration
[05:36] monitoring applications in the western states. states. So, with that we invite Gregory Halverson. So, Greg, take it away.
[05:51] Hello, I'm Gregory Halverson from the Jet Propulsion Laboratory. Welcome to our tutorial for using ECOSTRESS surface temperature and
[06:00] evapotranspiration evapotranspiration to monitor agriculture. I would like to acknowledge my co-authors, Kerry Cawse-Nicholson and Christine Lee of the Jet Propulsion Laboratory.
[06:13] This research was carried out at the Jet Propulsion Laboratory, California Institute of Technology under a contract with the National Aeronautics and Space
[06:23] Administration. Reference herein to any specific commercial product, process, or service by trade name, trademark, manufacturer, or otherwise
[06:35] does not constitute or imply its endorsement by the United States Government or the Jet Propulsion Laboratory, California Institute of
[06:44] Technology. We're interested in our ability to sustain food production. We're interested in our ecosystem health, and that's all tied to water. How much water
[06:59] our plants, our crops need, we want to know. And as water resources become more uncertain, more variable, we need to
[07:06] really track that really precisely. We can't just guess anymore. So, ECOSTRESS is going to measure the surface temperature, and then we're
[07:13] going to use that surface temperature to be able to determine how much water the plants that we're looking at are using.
[07:19] We'd like to show how we can use ECOSTRESS data to optimize agricultural water use. ECOSTRESS is an instrument that's going
[07:31] to go on the International Space Station. It stands for the Ecosystem Spaceborne Thermal Radiometer Experiment on Space Station.
[07:39] It focuses on how much water plants use all over the planet and how much water plants need and if there's stress, water
[07:47] stress or heat stress that plants are facing. facing. We can measure the surface of the temperature of the earth within a few
[07:52] tenths of a degree and then we can use that information to look at objects on the surface of the earth and in this
[07:58] particular case we're interested in looking at plants. Plants, as they start to suffer from heat or water stress, they begin to heat
[08:05] up in a similar way to a human with a fever. We can pick up that stress before
[08:11] the plant is visibly affected. So there's this window where water resource management and agricultural users can actually allocate more water before they
[08:20] die, before the damage is irreparable. The space station is going to fly over at different times to be able to look at
[08:27] how the stress is changing through the day and allow us to characterize vegetation in ways that we've never been
[08:34] able to characterize it before. The instrument itself is looking down at the surface of the earth and uses a mirror
[08:42] that rotates to scan across the surface. This measurement's being made in microseconds but it's enough time for us
[08:49] to measure the energy that's coming off it and then translate that energy into a temperature. temperature. The temperature measurements from
[08:56] ECOSTRESS can detect volcanoes. We can detect urban heat from cities. So although we're focused primarily on looking at plants and making sure that
[09:05] we can maximize the amount of food that we can get back for the water that we use, the mission can be used for many
[09:11] other purposes. What hasn't been possible in the past is to make the measurements as frequently as we need to make them with sufficient
[09:19] detail and it's that combination that is so important and really that's just a reflection of the improvements in
[09:26] technology. technology. Our ability to sustain livelihoods, food production, ecosystems and health of the planet through ECOSTRESS data is
[09:34] invaluable. To access ECOSTRESS data, we'll use the application for extracting and exploring analysis-ready samples or APPEARS. To use APPEARS, open your browser and go
[10:01] to appears.earthdata.cloud.nasa.gov. Once on the APPEARS site, go to the sign in button on the top right. If you do not already have an Earthdata
[10:25] login, you'll need to register for an account with the blue register button. Once you've registered for an Earthdata
[10:49] login, login, proceed to log in to the APPEARS system. Once you're logged in to APPEARS, go to
[10:57] the extract tab on the menu at the top, and this will give you an option for area or point.
[11:04] Point extraction will produce a CSV table table of points queried from ECOSTRESS images. This is good for
[11:14] comparing ECOSTRESS to ground data at points. points. Also on the extract tab is the area extraction, which we'll use to request a
[11:26] time series of ECOSTRESS images. We'll you're on the extract area sample page on Appears, go to start a new
[11:40] request on the left. Now that we're on extract area sample, we need to select the spatial area of
[11:59] our request. We'll use the Web GIS map on the right of this page. And we're going to zoom in
[12:10] using the zoom in button to Farmington, New Mexico on the northwest corner of the state of New
[12:19] Mexico. We want to explore ECOSTRESS surface temperature and evapotranspiration evapotranspiration over agriculture in Farmington, New Mexico. To select the spatial area surrounding
[12:40] these farms, we're going to click on the draw a rectangle button on the bottom left of the map.
[12:49] And we're going to draw a rectangle surrounding surrounding the agricultural area. To search for ECOSTRESS products in this
[13:04] area, area, we're going to click in the search for a product box beneath select the layers to include in
[13:11] the sample and type in ECOSTRESS. The first product we want from ECOSTRESS is the ECOSTRESS level two land surface
[13:22] temperature and emissivity product. The surface temperature layer from this product is called SDS LST. We'll click on the plus sign to add this
[13:36] layer to our request. Now, let's look for other ECOSTRESS products by clicking the X on here and going back to search for a
[13:47] product. product. We would also like to request the ECOSTRESS level 3 ET and level 4 evaporative stress index.
[13:59] Here is the ECOSTRESS level 3 evapotranspiration PT-JPL product. We'll click on that. And we want to request
[14:10] the total instantaneous ET layer called ETinst. Now, let's search again for evaporative stress. Here is the ECOSTRESS level 4
[14:29] evaporative stress index. And the evaporative stress index layer is called ESI AVG. For the surface temperature layer, we're
[14:44] also going to need a cloud mask. Here is the ECOSTRESS cloud mask product. product. And we want the SDS cloud mask layer.
[15:06] We need to select a date range for our request. For our first request, let's select the summer of 2019
[15:19] starting from the beginning of July until the end of September. Down in the output options at the bottom
[15:37] of the page, we'll select GeoTIFF as our file format. And then in the search for a projection
[15:45] box, we'll select native projection. Before we submit our request, we need to give our request a name.
[15:58] We'll go up here and click in area sample name under enter a name to identify your sample
[16:04] and we'll put in our name. This area is Farmington, New Mexico and we're requesting ET for the summer of 2019.
[16:24] To submit the request, we'll scroll to the bottom of the page and click on the blue submit button.
[16:34] The request has now been submitted. Go to the explore tab at the top. This lists our active requests.
[16:46] We can see that our Farmington ET summer 2019 request is still processing. Now, let's go back to up here and check
[17:01] on the status of our request. To check our requests, we'll go to the explore tab at the top.
[17:08] We can see that our Farmington ET summer 2019 request now has a status of done. We're now able to download our ECOSTRESS
[17:16] data. data. To download, we'll go to the download button in the middle of the three blue buttons on the right side of the
[17:23] request. This page gives you a listing of the ECOSTRESS files available to download. We're going to select all the files by
[17:36] clicking the checkbox at the top left. And then we're going to start the download with the download menu on the
[17:43] top right and click download files. Now that we've downloaded the files from our request, we should organize our
[18:10] project into a folder. Let's create a folder to hold our request files. These are raw files that we'll need to
[18:47] cloud mask and clean up. Now let's go back to QGIS and save our QGIS project in our project folder.
[19:14] We'll go to project and save and navigate to our project folder and give our QGIS project a name.
[19:34] Now in project home, we can see our project files. Now let's examine one of our ECOSTRESS surface temperature images by dragging
[19:49] and dropping it into QGIS. We can see the surface temperature of the farms in this image, but we can also see dark patches
[20:02] of clouds. We're going to have to cloud mask these ECOSTRESS images using Python. While we're waiting for our request to
[20:17] process, let's install QGIS. QGIS is a free and open-source geographic information system or GIS that is cross-platform that anyone can
[20:30] use on macOS or Windows. To find QGIS, go to qgis.org and select the download now button. Download the latest release for your
[20:49] platform. From your downloads, run the QGIS installer. Now that we have QGIS installed, we need to install a plugin to use a base map.
[21:25] From the menu bar, go to plugins and manage and install plugins. In the plugins pop-up, search for HCMGIS
[21:40] and select HCMGIS. Click install plugin. Now on the menu bar, there's an HCMGIS menu menu that will give you a selection of base
[22:00] maps. maps. Let's use the Google satellite base map. Moving around in our map, we'll use the plus and minus hourglass buttons at the
[22:14] toolbar to zoom in and out. Let's zoom in with the hourglass plus button. button. And we'll zoom in to our study area in
[22:25] Farmington, New Mexico. We can pan the map around using the hand button on the toolbar. To get started with Python, go to
[22:51] anaconda.com. Anaconda is a scientific Python package manager that we'll use to download the dependencies we need to process this
[23:04] raster data. At anaconda.com, click on download to download the latest version of Anaconda for your platform. Once we have Anaconda installed, the
[23:21] first thing we're going to want to do is install the mamba package. To install the mamba package, we'll use
[23:28] the command conda install -c -c conda-forge conda-forge mamba. Once you have the mamba package installed, installed, we're going to use mamba to create an
[23:57] Anaconda environment that contains the Python packages that we need for geospatial analysis. To create this environment, use the
[24:07] command command mamba create We're going to give our environment a name with -n and we're calling it rset_ecostress.
[24:23] We're going to set the channel that we want mamba to pull these packages from with -c and conda-forge.
[24:32] And then we're going to list the packages we need starting with Python itself set a version 3.9
[24:41] Jupyter, which will allow us to use Jupyter notebooks rio-xarray is the package we're using to open rasters
[24:51] and hvplot is the package we're using to make maps. To run a Jupyter notebook, we're going to use Visual Studio Code.
[25:18] For Visual Studio Code, go to code.visualstudio.com and download the latest version for your platform. Now, let's open our project folder in
[25:41] Visual Studio Code. We'll go to file, open folder, and navigate to the project folder we created. Now, we can see our project files in the
[25:58] explorer panel on the left. Now, let's try cloud masking an ECOSTRESS level 2 surface temperature image using the ECOSTRESS cloud mask in
[26:12] a Jupyter notebook. First, we'll need to create a notebook. We'll click in the explorer panel on the
[26:19] left left and click on the new file button. And we'll give our notebook a name. This file needs to end with the
[26:33] extension .ipynb. Now, we've created a Jupyter notebook. You want to make sure that the environment is set to the environment we
[26:49] created for Python. In the first cell, we're going to import the packages we need for our notebook.
[27:05] We're going to use some built-in commands for handling file names. We're going to use the datetime package
[27:12] for handling dates and times. We're going to use the NumPy package for handling arrays. We're going to use the Rio xarray
[27:20] package for handling rasters. And we're going to use hvplot.xarray to make maps. To execute these lines of code in your
[27:31] notebook, notebook, hold down shift and press enter. Now we've imported the packages we need for our notebook.
[27:43] Now let's examine an ECOSTRESS level 2 surface temperature image in a map in our Jupyter notebook. First, we're going to define the file
[27:53] name for the image that we want to open. Then we're going to parse the timestamp from that file name.
[28:04] Then we're going to open the file using Rio xarray.open_rasterio. This file includes uh scaled 16-bit integer digital number
[28:21] values, which we're going to need to convert into temperatures. In order to do that, we're going to use NumPy where,
[28:30] which allows us to use per-pixel conditions. conditions. And the condition will be if the value in the data array
[28:40] is a zero, we're going to insert a not a number np.nan value. And if it's not the fill value, then
[28:51] we're going to multiply it by the scale factor factor 0.02. And this will give us an array of
[29:00] surface temperature in Celsius, which we want to convert to Kelvin by subtracting 273.15. And we'll assign this converted array
[29:13] to the dot data data array of this surface temperature data set that we've loaded with rio xarray.
[29:22] xarray. And now to look at this image on the map, map, we're going to first reproject this
[29:27] image to the EPSG 3857 3857 coordinate reference system used for web GIS maps. To reproject, we're going to use dot rio
[29:40] dot reproject and then the coordinate reference string. string. To plot the image on the map, we're going to use dot hvplot
[29:50] dot image and then set the parameters for this map. map. The c map determines the color scaling
[29:59] of the map. We're setting this value to jet, which will be a rainbow color map with with uh low values being blue and high values
[30:09] being red. We're also going to select a base map using the tiles parameter. We're going to set that to open street
[30:17] maps with OSM. We're going to make the map layer semi-transparent over the base map using the alpha parameter
[30:27] and set that transparency to 0.7. We're also going to give a title to our map map using
[30:36] using the date and time that we parsed from the file name. And we're going to set the width and
[30:43] height of our figure in pixels. Now let's execute this cell by holding down shift and pressing enter or return.
[30:57] Our first ECOSTRESS map in our Jupyter notebook has appeared. And we can see that we still have the
[31:05] the cold cloud portions of the map that we need to mask. Now let's load the ECOSTRESS cloud mask
[31:17] product corresponding to the surface temperature image. Here we're defining the cloud mask file name with the same timestamp
[31:32] as the surface temperature image. But for the STS cloud mask layer that we downloaded from Appears. Again, we're going to open the raster
[31:42] using Rio xarray open raster IO. To process this quality flag image into a cloud mask, we're going to access the data array of
[31:56] this data set with dot data. And we're going to bit shift this array two bits to the right
[32:05] and then and with one. And this will produce a binary cloud mask. We're again going to use hvplot.image
[32:17] to look at this image on a map in our notebook. You hold down shift and press enter or
[32:25] return. return. And now we can see our cloud mask on the map map with the areas of cloud that we're going
[32:33] to mask out. Now with the ECOSTRESS surface temperature and cloud mask images loaded into our notebook, we're going to
[32:44] combine them to produce a cloud masked surface temperature image. We're going to use numpy.where for a condition.
[32:56] The condition being if the cloud mask is true, true, then we set that pixel to the no data
[33:04] value, value, np.nan. np.nan. Otherwise, we keep the surface temperature value. And then, let's apply that and look at
[33:15] that on the map again. Now, we can see that we've cloud masked our ECOSTRESS surface temperature image.
[33:35] Now, let's apply the cloud masking techniques we've learned to process our bad to be ECOSTRESS data we downloaded
[33:42] from Appears. First, we'll create a new notebook to process our Farmington summer 2019 data. We'll go back to new file
[33:53] and set a name for our notebook. Make sure the extension is i p y n b. And make sure that the environment is
[34:12] the arc-sed-ecostress Python environment that we created earlier. First, we'll load in the packages we need. Again, we'll use uh built-in
[34:28] packages for handling files, date time for handling dates and times, NumPy, Pandas, Rio xarray for handling rasters,
[34:39] rio xarray.merge for forming composites of rasters, hvplot.xarray hvplot.xarray for making maps, and matplotlib for making and saving figures.
[34:53] And we use shift and enter or return to load these imports. Now, we'll set some constants for our project.
[35:08] So, the raw data that we'll be processing is coming in from the directory we we created to hold our ET files,
[35:19] Farmington Summer 2019 Raw. We're going to write the processed files in the Farmington Summer 2019. We're going to use makedirs to make sure
[35:32] that that directory exists so we can write files to it. And then we'll set some aesthetic options.
[35:39] options. For Pandas, we'll make sure that we can see the entire uh table when it prints to the screen.
[35:47] We're going to set the transparency of our map layers to 0.7. And also set the width and height in
[35:56] pixels for our figures. We're also going to write a series of colors that we want for scaling
[36:06] evapotranspiration maps. These are hexadecimal values of colors in a list. Let's use shift and enter or return
[36:19] to execute this cell. So, to go about processing uh in bulk the files that we downloaded from Appears,
[36:31] first we need to collect their file names. names. So, first we're going to use glob to scan through all the files in our in
[36:43] our directory of raw geotiffs. And then we're going to insert that list of files into a Pandas data frame.
[36:55] Then within that Pandas data frame, we're going to parse each one of those file names into a date and time
[37:05] and insert that date and time into another column in that table. Then we're going to do the same thing
[37:12] for the cloud file names. Instead of searching for the layer LST in our geotiff files, we're going to search for the layer
[37:21] cloud mask in our geotiff files. And also parse the date and time from the timestamp in the file name.
[37:31] Then once we have these two tables with a matching column of date and time, we'll use Pandas to merge these tables.
[37:41] And Pandas will merge them using that matching date time column. Once we have that merged a data frame,
[37:55] then we're going to construct the output file name for the the file that we're going to write after we've done the cloud
[38:03] masking. And let's take a look at that table by executing this code with shift and enter return.
[38:18] So, now we're ready to go about running through each row in this table, reading in the raw surface temperature
[38:26] GeoTIFF, GeoTIFF, the cloud mask GeoTIFF, and writing out the cloud mask GeoTIFF. So, now we want to iterate through each
[38:48] row in that table. And to access each row in that Pandas data frame, we're going to use {dot}
[38:56] iterrows. And then, we can loop through each one of those rows with a for loop. So, in each iteration of this loop,
[39:10] we'll have a new date and time, a raw surface temperature file, a cloud mask file, and the file that we want to create.
[39:23] So, first we open the raw surface temperature file with rio xarray {dot} open_rasterio. Then, we convert that raw surface
[39:38] temperature image into temperature by filtering out the fill value, replacing it with a not a number value,
[39:49] applying a scale factor to the raw 16-bit scaled integer digital number, number, and then converting from Kelvin to
[39:59] Celsius. And then, we're also opening the cloud mask again with rio xarray {dot} open_rasterio. open_rasterio. And then, we want to make sure that this
[40:12] cloud mask uh is on the exact same spatial grid as the surface temperature. So, when we open it,
[40:20] we also use dot RIO.reprojectMatch so that it matches the surface temperature image. And then we run the uh
[40:33] bit masking to convert this quality flag into a cloud mask. And then we apply the cloud mask to the surface
[40:43] temperature image. And now, as an additional step to filter out out any pixels that were not recognized as
[40:53] clouds by the cloud mask, we're going to remove outliers from each image image by calculating the quantiles.
[41:05] We're using numpy.nanquantile to calculate the 8% and 98% quantiles here. And then we're using numpy.where to replace any values lower
[41:24] than the 8% quantile or higher than the 98% quantile with a not a not a number no data value.
[41:36] And then, to make sure that we're only using using high quality scenes in our seasonal aggregate, we're using np.count_nonzero
[41:49] and np.isnan to quantify how many of the pixels in this image are missing. And And if it's more than 50%, we're going to
[42:06] skip over this image. Once we have an image that we're happy with, with, then we're using dot rio. to raster
[42:19] and then a geotiff file name to write that image as a new geotiff. And then to make things easier,
[42:28] we're also plotting this figure and writing it as a PNG. Now, let's execute this cell to bulk
[42:46] process our EcoStress surface temperature images and write our cloud masked EcoStress surface temperature images. Now, let's utilize our cloud masked
[43:17] EcoStress surface temperature images to form a seasonal composite for the set of summer 2019 images we collected from Appears
[43:28] over Farmington, New Mexico. So, first we're going to scan for our our cloud masked surface temperature geotiffs using glob.
[43:39] And then we're going to open each one using rio xarray.open_rasterio. And then when we have this list of open
[43:50] rio xarray data sets, we're going to form a composite of those data sets with rio xarray.merge.merge_arrays. We'll give it the list of the rasters
[44:08] that we've loaded from GeoTIFFs and set the no data value to np.nan. And now we're going to replace the data
[44:19] array array in that composite data set with a median calculation using NumPy nan median. We're going to run that median
[44:33] calculation calculation on a stack of the data arrays from each one of these rasters using np.stack. Once we have that median image
[44:50] we're going to filter out zero values with np.nan. And then once we have a clean composite image, we're going to write that to a
[45:03] GeoTIFF GeoTIFF using dot rio.to_raster and then the name of our GeoTIFF. Here we'll call it Farmington st_median_summer_2019.tif.
[45:19] And then let's take a look at our composite composite on the map in our notebook. And let's execute this cell and take a
[45:29] look at our first composite. So here is our first seasonal composite of EcoStress surface temperature over Farmington, New Mexico for the summer of
[45:47] 2019 aggregated by median. And we can see uh areas of cool farms in this image. And some portions of the agriculture
[46:02] are warm. Now, let's also clean up the evapotranspiration images we downloaded from Appears. First, we're going to search for all the
[46:23] files containing ETinst in the file name. name. And then, we're going to run a for loop through each one of those file names.
[46:34] Parse the timestamp into a date time. And then, we'll construct the output file where we're going to write
[46:46] our clean evapotranspiration image. Here, we're opening the uh GeoTIFF file of ET that we downloaded from Appears using rio
[47:02] xarray.open_rasterio. And we want to filter out any values uh erroneous values that are less than or equal to zero
[47:15] and replace them with uh not a number, np.nan. For this product, the ECOSTRESS Level 3 Evapotranspiration Product, we do not
[47:29] need to do cloud masking because it's already cloud masked. And we also do not need to convert the
[47:36] units because it's already in units of watts per square meter stored as a floating point value. So, here, we're just filtering out any
[47:47] erroneous values. And we're also doing an outlier removal, uh uh filtering out uh low than the 8% uh, 8% tile or 98%.
[48:08] And again, if, uh, uh, the proportion of missing pixels in this image is more than half, then we're going to skip this image.
[48:21] And again, we're writing this image, the clean image now, to a new GeoTIFF using .rio.to_raster .rio.to_raster and the name of the GeoTIFF we want to
[48:32] write. write. And then, for convenience, we're also plotting this figure and saving that to a PNG file.
[48:46] So, now let's execute this cell and generate our cleaned-up ECOSTRESS ET GeoTIFFs. Now, let's take our cleaned-up ECOSTRESS
[49:10] ET images and form a seasonal composite. First, we're searching for the GeoTIFFs that we've written, uh, uh, with ET.
[49:24] And we're opening each one of the ET files that we've written with rioxarray.open_rasterio. We're forming a composite
[49:36] of these images with rioxarray.merge.merge_arrays. We're calculating a median of these images with np.nanmedian. Filtering out erroneous zero values from
[49:51] the composite and then we're writing our composite with dot rio. two raster and the geotiff name which we'll call Farmington ET median
[50:05] summer 2019.tiff. And then we'll take a look at this image on the map. map. Here we'll set the color scale, the C
[50:16] map value instead of being jet for rainbow, we'll use the ET color map that we defined earlier here
[50:26] with these hexadecimal values. So let's generate our our ECOSTRESS ET composite and take a look at it on the map.
[50:49] So here is our ECOSTRESS evapotranspiration evapotranspiration uh seasonal aggregate uh the median over the summer of 2019
[51:00] and we can see that areas of irrigated agriculture have high ET values shown in blue here along with uh
[51:10] the riparian areas along the river and areas of non-irrigated lands outside of the farms have low ET shown here in
[51:20] brown. So far, we've run the seasonal analysis on the ECOSTRESS level two surface temperature product and the
[51:34] ECOSTRESS level three evapotranspiration product. product. Let's also run this on the ECOSTRESS level four evaporative stress index
[51:43] product. product. The evaporative stress index gives us a value between 0 and 1 that tells us how much uh the ratio of actual
[51:55] evapotranspiration, which we're seeing here, to potential evapotranspiration. Uh how much the plant activity there could be, how much there actually is as
[52:07] a proportion. So, let's form a seasonal composite of this normalized form of evapotranspiration evapotranspiration from the EcoStress Level 4 product.
[52:26] First, we'll filter through the files that we downloaded from ET and search for the ESI AVG layer
[52:37] using glob. And then, we'll use a for loop to loop through each one of these file names.
[52:46] And parse the uh date and time from the timestamp in the file name. We'll We'll construct the file name that
[52:57] we want to write out. We'll open the evaporative stress index image from the GeoTIFF using rio xarray.open_rasterio.
[53:13] Now, since the valid range for uh this index is from 0 to 1, we want to filter out any erroneous values in the
[53:24] file that are outside of that range. And we'll also do uh it's an outlier removal by uh calculating our quantiles again,
[53:38] just like we did for surface temperature and ET. And also filter out any images that are more than half missing.
[53:50] And then we'll write out our ESI uh our cleaned up ESI file to a new GeoTIFF and write a preview image.
[54:02] And let's execute this cell to filter through our evaporative stress index images. And finally, let's take our cleaned up
[54:23] evaporative stress index images and form a seasonal composite of evaporative stress index. Searching for the ESI GeoTIFFs that
[54:34] we've written, opening them with rio xarray.open_rasterio, xarray.open_rasterio, merging with rio xarray.merge.merge_arrays, calculating median with numpy.nanmedian, writing the GeoTIFF we want with
[54:50] .rio.to_raster, and then plotting a map with hvplot.image. Let's run this cell and look at our evaporative stress index
[55:05] composite. composite. This is very similar, this level four evaporative stress index has a very similar spatial pattern to
[55:16] the level three evapotranspiration, evapotranspiration, but it's slightly different because it's normalized. normalized. But you can also see
[55:28] uh uh that areas of irrigated agriculture have a high ESI. The actual uh versus the potential is a
[55:39] very high ratio. And then areas outside of irrigation tend to be lower. Now we want to repeat our analysis for
[55:59] summer 2020 and 2021. To submit a new request, we're going to go to extract and area. This time, we're going to copy a
[56:11] previous request here in the middle. We'll click on our previous request to open a copy. Now we're going to alter the start and
[56:22] end date. So our new start date is going to be July 1st, 2020. And our new end date is going to be
[56:37] September 30th, 2020. We want to keep the EcoStress layers the same, same, the projection the same. We want to keep our same bar bounding
[56:54] box around Farmington, New Mexico. Before we submit, we'll give our new request a new name. This one is
[57:07] Farmington ET summer 2020. And we'll go back down to the bottom and click on the blue submit button.
[57:25] Now with our modified request still open, we're going to modify it again one more time for summer of 2021.
[57:34] I'll modify the start date to July 1st, 2021. And the end date will now be September 30th, 2021.
[57:54] And we'll update the year in our title. And we'll go back down to the bottom and click submit again.
[58:10] Now, we'll check on the status of the requests that we've submitted. We'll go to the explore tab at the top.
[58:17] We can see our previous completed requests is still here. And now our two new duplicate requests with different start and end dates are
[58:27] still processing. Now, let's repeat our summer aggregate analysis at Farmington, New Mexico with the 2020 and 2021 data requests we made.
[58:45] And up here, so we'll go to the explore tab at the top. And then we can see that our 2020 and
[58:52] 2021 requests are now completed. And our 2020 request we're going to download with the middle blue button on the right of the request.
[59:05] Click the check box at the top left. And then the download menu on the top right and download files.
[59:28] We should organize the raw EcoStress geotiffs we downloaded from Appears for 2020 2020 into a new directory in our project
[59:40] folder. We'll call this Farmington summer 2020 raw. Now let's download our final Appears request. Explore tab at the up at the
[1:00:13] top. Our completed uh Farmington ET summer 2021. The middle blue button on the right, go to the download page.
[1:00:27] Check box at the top left. Download menu at the top right and download files. We'll also organize the 2021
[1:00:43] images we downloaded from Appears into a new folder. Now that we have our project files organized for all three years, let's go
[1:01:22] back to Visual Studio Code and reproduce our 2019 analysis for 2020 and 2021. We can reuse our 2019 notebook
[1:01:36] by making a copy of it. I'll right click on this ipynb file, copy, and then right click in our
[1:01:44] Explorer pane, and paste. And now we'll rename this file for 2020. Now in this new notebook, we want to
[1:02:03] select our kernel for the Python environment we created for this project. And we'll change the directory and file
[1:02:15] names for 2020. Now, to run this entire notebook, we're going to use the run all button at
[1:03:33] the top. Now that we've reproduced our summer 2019 analysis for summer 2020, let's reproduce this analysis one more
[1:04:48] time on the 2021 files we downloaded from Appears. We'll duplicate our notebook one more time with copy and paste.
[1:05:04] Rename our new notebook. Select our kernel for our new notebook. And change the year from 2020 to 2021.
[1:06:14] And now we'll run this notebook with run all. Now we've reproduced our again for our third year
[1:07:11] for 2021. Finally, let's bring this all together by plotting a time series of the summer aggregates of surface temperature and
[1:07:25] evaporative stress index that we put together from our eco stress data. Let's create one last notebook called fountain time series.
[1:07:42] .ipynb Make sure we're in our Python environment. For this project, we're going to use NumPy, Rio xarray, and Matplotlib.
[1:08:13] We're again going to use our custom color map for evapotranspiration. And to make this compatible with Matplotlib,
[1:08:22] Matplotlib, we're going to use linear segmented color map. To generate our time series, first we'll load in each of our surface
[1:08:39] temperature images from summer of 2019, 2020, and 2021 using Rio xarray.open_rasterio. Now we want to calculate a minimum and maximum value to display
[1:08:56] on all three maps together. So, we're going to take all of the values from all of our images,
[1:09:05] stack them together, and calculate the 2% and uh 98% quantiles. quantiles. We're going to do the same thing
[1:09:16] for our evaporative stress index images from 2019, 2020, and 2021. And also calculate uh uh a stretched minimum and maximum value.
[1:09:32] Then we're going to set up our plot using using uh matplotlib subplots function with two rows and three columns.
[1:09:44] And we'll set the color and size of the figure. And this will give us six panels to
[1:09:53] arrange our our surface temperature images on the top row and our evaporative stress index images on the bottom row.
[1:10:04] And then for each panel, we'll use the dot plot function from the data set we loaded with the
[1:10:12] xarray. xarray. We'll set the axis for it to plot to to one of the axes supplied by the
[1:10:21] subplots function subscripted by zero-based row and column. column. For the surface temperature images, we'll use our jet color map.
[1:10:36] But for the Vmin and the Vmax, we'll use the quantiles we calculated collectively from all three images.
[1:10:45] And we'll supply this same Vmin and Vmax to all three plots so that they're scaled in exactly the same way,
[1:10:54] and we can notice changes in in temperature throughout the time series. On the bottom three axes of this plot,
[1:11:06] we'll do the same thing for evaporative stress index, but the color map we'll supply is our custom color map for
[1:11:15] evapotranspiration. evapotranspiration. And the Vmin and Vmax we'll supply are the quantiles we calculated across all three evaporative stress index
[1:11:26] images. images. And then once we have this plot in memory, memory, we'll both show it in our Jupyter
[1:11:36] notebook, and we'll save it to a PNG file. So now let's run the final plot of our
[1:11:44] project. So here's the final figure of our project. project. We have a PNG copy of this as well
[1:12:03] that we can look at full screen. So we see in the top row our time series of
[1:12:11] of uh surface temperature uh for the summer of 2019, 2020, and 2021. 2021. We can see that in 2019,
[1:12:22] it was a rather cool year compared to 2020. In the bottom row, we have the time series of evaporative
[1:12:35] stress index corresponding to these surface temperature images. We can see that in that cool year of 2019,
[1:12:45] 2019, when the area outside of the farms is somewhat cooler, the evaporative stress index is because there is more ET.
[1:12:56] And in 2020 when this area outside of the farms was warmer warmer the evaporative stress index was much
[1:13:06] drier. And in the evaporative stress index we can see uh changes in which farms are wetter or
[1:13:19] drier from year to year. Utilizing ECOSTRESS data in such a way will help us to better monitor and
[1:13:28] manage agriculture and natural resources. resources. This concludes our demonstration of utilizing ECOSTRESS surface temperature and evapotranspiration for monitoring agriculture.
[1:13:59] Thank you so much. Thank you, Gregory, for such a detailed and wonderful demonstration of how to actually download and analyze
[1:14:12] um um ET from ECOSTRESS. And uh I just wanted to share this slide with everyone. We have a question answer
[1:14:20] session now. So, please enter your questions in the Q&A box. And um we will answer uh the questions as they were
[1:14:29] received in the order they were received. received. Um and uh the Q&A script will be posted on our website.
[1:14:38] You'll be able to see the question answers later. Also, here is the contact information for Gregory. If you have any specific
[1:14:49] questions, if you have any general questions, you can contact me. Um training webpage is shown here. You
[1:14:56] will have the recording available here in next 48 hours. Uh here's the Earthdata website uh for information about future training and
[1:15:07] everything. Um so what we'll do is now switch to our question-answer session and let's see um Okay.
[1:15:19] Okay. So question one is I would like to know if ECOSTRESS data is available on cloud computing platforms such as Google Earth
[1:15:27] Engine just like Sentinel-2 and Landsat SR data. Gregory? Gregory? Hi. Yeah, so ECOSTRESS is not available yet on Google Earth Engine, but we're
[1:15:38] working on incorporating ECOSTRESS Collection 2 data into Google Earth Engine and OpenET. And ECOSTRESS Collection 2 will also be
[1:15:47] available on the LP Cloud environment through HTTP and S3 URLs. Great. Thank you. Uh second question is,
[1:16:01] can we um aerially subset the data product product of our interest in AppEEARS using the latitude and longitude of the corner
[1:16:10] points of the rectangle similar to Earthdata? Earthdata? So I think if you want to precisely define specific coordinates for your
[1:16:19] area, then you should use uh you should create a GeoJSON or shapefile and then upload that file into the
[1:16:26] AppEEARS request instead of using the uh the the box or polygon tools on the map. And the
[1:16:41] second the third question is why do we need Mamba? Can't we directly install the required packages using pip or conda
[1:16:50] or directly run the notebook in a browser? browser? So, we're using Anaconda because the conda-forge channel in Anaconda is the
[1:16:59] most comprehensive repository for geospatial Python packages. And then unfortunately, the conda command for managing packages itself is
[1:17:10] sometimes very slow. And the mamba stand-in for the conda command runs much faster. So, I recommend using Anaconda with the
[1:17:19] conda-forge channel and the the mamba command to manage packages. Okay. Okay. Question four is I'm trying to download
[1:17:29] data for South Africa. I didn't get the drop-down options of data products in AppEEARS. Any reasons why this happened?
[1:17:38] Is ECOSTRESS only available in the US or South America? Uh yeah, so ECOSTRESS is available globally and it's available in in South
[1:17:49] Africa. Africa. And then when I saw that question, I I tried um going to make an AppEEARS
[1:17:55] request and drawing a bounding box in Namibia and search for ECOSTRESS and I was able to pull up ECOSTRESS products
[1:18:01] and add layers to the request. So, if you're having an issue a technical issue using AppEEARS, then you
[1:18:09] should reach out to uh the LP DAAC team regarding your technical issues. Question Question five is can we access the script file
[1:18:27] after this training? Yeah, so unfortunately, I can't make those actual notebook files available yet. I'm trying to get them cleared
[1:18:37] through release at JPL and then I'll keep you posted how that goes. And And I made the video
[1:18:46] so that the walk-through in the notebooks goes slow enough that you should just be able to pause
[1:18:53] when you're looking at one of the chunks in the notebook and and write similar code in your own
[1:18:59] notebook so you can use the video as a reference. Yeah, so the demonstration itself is as Gregory said it's slow enough that
[1:19:10] you can follow and make your own code just using that as a reference. So that's the best thing to do for now
[1:19:17] before it actually gets permission for release. release. Question six is is VSC better than Jupiter notebooks for processing
[1:19:27] geospatial data? Yeah, I find the Visual Studio Code is a bit cleaner and and and a bit a more
[1:19:35] all-in-one solution to using Jupiter notebooks rather than running Jupiter notebook or Jupiter lab from the command line
[1:19:44] because it's the VS Code app handles running the Jupiter server and managing the Python kernels that run in Jupiter
[1:19:54] server internally. And And it's you can just run it straight out of the box with VS Code
[1:20:02] with with with little experience. Okay. Okay. Next question is when we selected the data format we selected GeoTIFF and an
[1:20:15] image for data and variable was downloaded. If we select the NetCDF format, will it download a unique file
[1:20:23] for each variable? Yeah, so EcoStress and AMSR-E is only available in GeoTIFF format. The AMSR-E request form has a net CDF option, but
[1:20:35] it doesn't work for ECOSTRESS. Okay. Okay. Um question eight, the ECOSTRESS index was described as um actually
[1:20:47] evapotranspiration evapotranspiration to potentially evapotranspiration. Is this PET for a reference grass uh such as in Penman-Monteith implemented for a grass using FAO 56
[1:21:02] specified parameters? Or if if it is supposed to be the PET for the actual cover type present,
[1:21:12] where did this come from? Uh so, the potential evapotranspiration uh that we're calculating here is using the Priestley-Taylor equation,
[1:21:22] which is equation one in the ECOSTRESS level three ATBD. It's not exactly the same as as reference evapotranspiration.
[1:21:32] You could reach out to Dr. Joshua Fisher, Fisher, uh the inventor of this method if you would like further details on the
[1:21:40] nuance. Yes, so here is the link for the TBD document, and you will find reference in there, too. So, important thing like
[1:21:53] you noted, it's not exactly same as reference ET. Question nine, is the climate of Farmington, which is semi-arid a reason
[1:22:04] for the irrigated agriculture, sticking out so much? Would you expect similar results in a humid climate? Yeah, I I I selected Farmington, New
[1:22:14] Mexico Mexico for this demonstration because it was a good visual candidate uh because it's irrigated agriculture surrounded by an arid landscape. So,
[1:22:26] that that usually has a a very high a very high contrast in temperature and evapotranspiration. Thank you.
[1:22:39] So, ECOSTRESS data is available for northern Mexico. Do these data have the same accuracy as USA information?
[1:22:48] Yes, ECOSTRESS is available globally and the ECOSTRESS Collection 1 evapotranspiration product that we're using here was validated using the
[1:22:58] FLUXNET ground observations. So, So, this question 11, um is it possible or scientifically acceptable to compare ECOSTRESS ET P to
[1:23:15] ETA to Penman-based land-measured ET0 and ETA? For our local area, flux measurements are difficult to obtain, but climatic
[1:23:26] data to calculate ET0 comparatively easy to obtain. Yeah, and similar to the earlier question, the the the Priestley-Taylor
[1:23:34] PET that we're used that we're using here isn't exactly the same estimate as reference evapotranspiration, and you
[1:23:42] can reach out to Forrest Melton and Joshua Fisher to discuss that nuance. Is there any limit to downloading data
[1:23:53] from Appears? Can we request a large time period of the ECOSTRESS data data set, or is it recommended to split our
[1:24:01] request into small periods? Yeah, Appears imposes data volume limits on each individual request, so you can try making your main request as is, and
[1:24:14] then if it if it gets denied, you get like a little red um message up at the top saying that
[1:24:21] it was it was much request at one time. So then you just have to split it up
[1:24:25] into years or seasons or something like that. that. And then keep changing the dates in the boxes and submit
[1:24:33] several requests instead of one. Next question is are the results of the ET product in daily values such as millimeter per day?
[1:24:47] Uh Uh no, the everything that we're looking at here is watts per square meter instantaneous ET. There is a daily average ET that's also
[1:24:58] in watts per per square meters which you would have to convert to uh millimeters per day. For EcoStress Collection 1,
[1:25:07] uh the upcoming EcoStress Collection 2 will have a daily millimeters per day layer. Question 14. If we create an AOI with a shapefile or
[1:25:24] GeoJSON, what coordinate system projection do we need to use? Probably best just to stick to WGS 84
[1:25:33] latitude and longitude. I'm not sure if I've tried using projected coordinates in an AppEEARS request. Uh you could reach out to the
[1:25:43] LP DAAC for further questions about um AppEEARS. Question 15 is there are some limitations for the extent in AppEEARS.
[1:26:15] Um how to cover a large extent? Um, yeah, so similar to the previous question, Appears imposes some data
[1:26:24] volume restrictions on each individual request. request. So, if you try to um, upload a shapefile of the entire like
[1:26:33] requesting the entire planet at once, then it might say it's too large. And then you might have to break that up
[1:26:39] in the like continental scale requests or something like that. Great. If you have any more questions, please type them in the QA box.
[1:27:08] Uh, so one more question. Um, is it possible to apply an example where there is is bio
[1:27:16] bio biomol biomol re- binomial it should be or rainfall distribution distribution I don't know. Mhm. And we
[1:27:26] use ECOSTRESS to ECOSTRESS for long-term ET projections? I'm not entirely clear on what the question is is asking. Um, but yeah, if
[1:27:39] you're if you're looking at seasonal or or um, or annual um, aggregates of of the ECOSTRESS ET products, uh, that could be
[1:27:49] useful for comparing to to um, uh, precipitation for hydrology. So, I guess we what you would say
[1:28:02] biennial maybe that's what it means that maybe ITCZ going back and forth and you have two rainfall
[1:28:11] without irrigation, um, can you use ECOSTRESS for long-term ET projections? projections? Um Um I I Well, well, well, well, well, it's the
[1:28:24] ECOSTRESS is an it's an estimation based on an observation in hindsight. I'm not exactly clear what you mean by using it
[1:28:34] for ET projections, but um yeah, I I think at a at least a a a seasonal temporal scale, if you're
[1:28:42] making seasonal or annual aggregates of ECOSTRESS ET, you could utilize that information for modeling projections. As an input to to a projection model.
[1:28:55] Right. Right. Uh next question is following up to nine, question nine, is there any additional masking required when the
[1:29:04] contrast between irrigated and non-irrigated land cover is not as great? I mean, southeastern United States. States. Um
[1:29:16] Um we don't include any quality flags that would let you within the product that would let you distinguish irrigated land
[1:29:24] from non-irrigated land. Uh you would have to get CDL or some data set defining where the boundaries
[1:29:33] of farms are if you want to do that. So, I'm I'm just this is my conjecture here is that because in the humid
[1:29:42] region, PET would be high, too. Right? And so, maybe there will be enough gradient between irrigated and
[1:29:51] non-irrigated area. Um Um because there's not enough water availability in non-irrigated area, so e- evaporative evaporative stress, if you look at, you might be
[1:30:05] able to see the difference between irrigated and non-irrigated. That's just my Yeah. Question 18 is what is the resolution of
[1:30:22] the BET product? Uh all the products are 70 m. Okay, Okay, so next one is why does the water in ET
[1:30:38] appear as NA? NA? The EcoStress Collection 1 algorithm that we're looking at here does not process um water surface evaporation.
[1:30:49] The upcoming EcoStress Collection 2 products will. Great. Thank you so much. Thank you Gregory for such a great
[1:31:06] demonstration and for your time and effort. And thanks everyone for attending today's session. We are almost at the end of the time.
[1:31:15] Uh we will see you next week at the same time where we will actually go through some exercises, basic exercises just to
[1:31:22] get the data and visualize and compare. Um so that will be our last session uh on 15th of June.
[1:31:32] And we want to thank all of you for attending today's session. We also want to thank our ARSET team
[1:31:38] uh for their help and support um um Brock Levin's, Sarah Prischel, uh Shawn McCartney, um Selvin Hutson O'Joy, Jonathan
[1:31:48] O'Brien, and Eric Kapotiz. They all helped uh with this webinar organization. So thank you very much. Thank you all.
[1:31:57] And uh we will see you next week at the same time. Thanks Gregory again.
