# Assess Water Quality using Satellite and In Situ Observations, Part 3/3

`https://www.youtube.com/watch?v=tetTo4i_Etg` · id 133 · 1:42:38 · module 109 — Using Earth Observations to Monitor Water Budgets for River Basin Management

[00:00] Hello everyone. Sean McCartney and I both welcome you back to this session on monitoring water quality of inland lakes using remote
[00:11] sensing part three. We're going to focus on assessing water quality using satellite and in situ observations today.
[00:20] We already had our first two sessions and today is the concluding session of this webinar series. Uh just a note here that uh homework
[00:29] will be posted today on our website. It is also available from the meeting site and will be due on 8th of August.
[00:39] We started with overall training objectives as listed here. So that by the end of this training you
[00:46] should be able to identify remote sensing observations useful for assessing water quality parameters in inland lakes, recognize the importance of in situ
[00:56] measurements together with satellite observations in developing method- ologies for operational water quality monitoring, monitoring, obtain an overview of cyanobacteria
[01:06] assessment network or cyan, an early warning system to assess algal blooms in freshwater lakes, and access satellite
[01:14] data and develop methodologies to assess water quality parameters. More like see how to develop methodologies and we'll
[01:22] talk about it later today. In part one we saw state of the art high special and spectral resolution
[01:32] observations from Landsat 8, Sentinel 2, and Sentinel 3 for water quality remote sensing. sensing. We described selected open source in
[01:41] situ measurements of water quality parameters including from USGS water dashboard and lake water quality portal, national harmonized chlorophyll data,
[01:51] UNEP Chemstat, and Gloria. We reviewed algorithm development requirements for remote sensing of water quality parameters, explored and downloaded Gloria in situ
[02:04] measurements of chlorophyll A concentration, total suspended solids, and Secchi depth for Lake Erie, and searched and identified optical
[02:14] surface reflectance data from Landsat 8 and Sentinel 2 collocated with in situ measurements for Lake Erie using Google
[02:21] Earth Engine. Last session was about cyan. We learned description of cyanobacteria assessment network. Uh so CI or cyanobacteria index
[02:36] data products are available daily and at 7-day maximum value composites from MERIS and VISSAT satellite which is 2002
[02:45] to 2012 and the current period starting from 2016 to present is covered by Sentinel 3A OLCI and Sentinel 3B OLCI.
[02:56] Uh we had a demonstration and application of cyan web app and you also had some hands-on exercise with cyan web
[03:03] app. That brings us to our today's session assess water quality using satellite and in situ observations. Sean and I will be uh doing this webinar
[03:16] today. And for up for today the objectives are listed here. By the end of this session you'll be able to identify NASA image
[03:27] processing software for water quality monitoring, monitoring, understand strengths and limitations of remote sensing and available in situ
[03:35] data for inland water quality monitoring, describe upcoming NASA missions relevant for water quality monitoring, and derive statistical
[03:44] algorithm coefficients for getting chlorophyll A concentration and total suspended solids. Also we will touch on how to get water quality clarity using
[03:53] satellite spectral reflectance and in situ water quality measurements. We'll do this using GEE. And so the outline is we'll start with a
[04:04] brief introduction to NASA image processing software for water quality monitoring. monitoring. We'll go over strengths and limitations
[04:11] of observations of water quality monitoring both in situ and satellite. And we'll have overview of upcoming NASA
[04:19] missions. missions. Then Sean McCartney will have a demonstration and exercise and derive statistical algorithm coefficients for getting water quality parameters. We'll
[04:30] focus on these two considering the time availability, chlorophyll A and total suspended solids in GEE, and you will also get some idea
[04:40] of how to get Secchi depths or water clarity using similar method. And then we'll summarize what we did in
[04:48] this series. So next we have a brief overview of NASA image processing software for water quality monitoring.
[05:01] In this training we have been using Google Earth Engine to get Sentinel 2 and Landsat 8 images which are already
[05:11] level 2 which means that they're processed and we have atmospherically corrected surface reflectances. Now Now NASA software SeaDAS that allows uh
[05:25] more flexible calculations. You start with top of atmosphere reflectance and you can choose atmospheric correction process and come up with level two water
[05:35] leaving reflectances. It's a very widely used software, pretty sophisticated. Uh so SeaDAS it's NASA ocean biology official data processing
[05:46] and analysis software. The latest version is 8.3.10 and earlier uh ARSET webinars have uh introduced SeaDAS and used as well
[05:59] uh earlier versions of course. And there is a graphical user interface or GUI version for SeaDAS as well as uh can
[06:07] also be downloaded and the code can be used used as command line version if you want to
[06:13] do bulk processing. It's open source and can be downloaded from this link here. Uh SeaDAS webpage has a lot of information about the
[06:24] software and tutorial also. It's available for Windows, Mac OS, and Linux operating systems. Earlier it was not available for Windows but it is now.
[06:38] Uh and it requires bash, Python 3.6 or later, Python requests package version 2.8 or later, and installer and source
[06:50] code they're available from SeaDAS uh website and the links are available through this slide here. So the SeaDAS GUI can be used for
[07:02] visualization, processing, and analysis of images. Um it's easier. You don't have to code anything. It you just click and get the
[07:11] data through GUI. Installation of OCSSW is required for converting data from different levels, level one to two or
[07:20] two to three. Um and running OCSSW can get you level two and level three data from level one. Accessing available
[07:30] in situ data from SeaBASS. We talked about SeaBASS in part one um which are in situ data mostly in estuary and open
[07:40] ocean but there are some inland lake data available as well. So they are available through SeaDAS. You can
[07:47] automatically load those observations in there. there. Uh SeaDAS 8.3.10 that contains SeaDAS toolbox that includes Sentinel 3
[07:57] toolbox. Earlier Sentinel 3 OLCI was not included in here. Uh SeaDAS OCSSW can allow atmospheric correction options.
[08:07] Uh it requires downloading level one satellite images for processing. Uh you can look at this earlier webinar
[08:14] for a demonstration of SeaDAS and its features. But in this training we focused on GEE because you're not
[08:23] downloading any data. You can just work on the cloud environment and process the data and visualize. So that is just for your information
[08:35] that you can explore that if you want more options and you want to start with top of atmosphere radiances or
[08:41] reflectances and want to correct uh data for atmospheric correction and come up with your own surface reflectances
[08:50] you can do that. So let's look at strengths and limitations of observations of water quality monitoring. So advantages of remote sensing for
[09:01] freshwater systems. Uh Uh satellite has long-term imagery available. It's a long record so it's not intermittent, it's continuous such
[09:11] as Landsat it available since 1972. MODIS also since 1999. Um VIIRS then and then then Sentinel 2
[09:23] and 3 MSI OLCI. So ongoing commitment for space agencies to continue data collection. So more and more missions uh
[09:33] and improved missions with better observing capability are planned. Uh reliable data for operational early warning and forecasting systems. Landsat
[09:45] and Sentinel 2 have sensors with moderate to high special resolution appropriate for lakes. And all these data are open source. So
[09:55] these are some major advantages of remote sensing data for freshwater system water quality monitoring. There are also limitations of using
[10:05] remote sensing for water quality monitoring in lakes. First of all, if water body is shallow, then interference from the bottom the
[10:16] bottom reflectance if they has to be corrected for or it adds inaccuracy in your water quality parameter. Too small.
[10:26] Water bodies too small cannot be resolved from some sensors. We talked about it that roughly at least
[10:34] three pixels are needed within the water body away from the shoreline. And so which water bodies or lakes will be
[10:44] resolved by which sensor, that is dependent on sensor resolution. The limited number of standard algorithms for these optically complex
[10:55] waters. What that means is that each lake or reservoir water body, you have to develop your own algorithm
[11:02] and for that you need in situ data and so if there's no one algorithm that fits all all the water bodies.
[11:12] Atmospheric correction is a challenge because you need information about gaseous molecules in the atmosphere but also about clouds and aerosols.
[11:25] Also optical sensors they cannot see through clouds and so whenever there's cloudy condition you cannot see the
[11:32] surface and you cannot get water quality information. information. Ground truthing is costly. There are not very frequent
[11:41] ground measurements for either algorithm development or for validation, but they're absolutely required. So co-locations of satellite observations and surface measurements
[11:52] both in space and time are required for algorithm development. And for accurate retrievals of water quality parameters, and that also it
[12:02] doesn't happen as we saw in section one when we are trying to match Gloria data with a satellite data,
[12:10] we don't have that many matches. We do have in situ data, but we don't have satellite overpass at on the same day
[12:17] or when we have satellite overpass we don't have in situ data. So there's recommendation for in situ
[12:26] data collection. NASA ocean color provides overpass time for various satellites for selected geographic region and here is the webpage or link
[12:36] you can go to and it's an overpass predictor. predictor. You can go here and look at different
[12:43] satellites satellites and pick latitude and longitude and geographic region and time and it tells you when there will be satellite
[12:51] overpass over the lake of your interest and then you can plan to go out and take water samples during that time so you
[12:59] have co-located data. So collecting in situ water samples within two to four hours window of the satellite overpass would greatly benefit
[13:08] algorithm development and activities. That way you know that when satellite is looking that's when you have in situ
[13:14] data data relationship can be there between that and that that can be used. So that brings us to upcoming NASA
[13:25] missions and there are three of them. The first one is Plankton Aerosol Cloud Ocean Ecosystem or PACE.
[13:35] This is planned for launch in early 2024, actually January 2024. It has advanced optical spectrometer ocean color instrument OCI, which is
[13:48] hyperspectral measurements of water quality products. So ultraviolet to near infrared range is covered by this instrument. instrument. SBG is surface biology and geology.
[14:00] That will be launched in 2027-28 time frame. It's in the initial phase of development. That will also have
[14:10] hyperspectral imagery from visible and shortwave infrared range and it will be multi or hyperspectral imagery in the
[14:19] thermal IR. It will also have thermal IR. GLIMR is going to be one mission that will be in geostationary orbit. And so
[14:29] that is also planned to launch in 2026-27 2026-27 time frame. It will have hyperspectral imager and landmark imager and will provide
[14:41] information on harmful algal bloom, oil spills and sargassum accumulation. So geostationary orbit that means it will provide more frequent
[14:52] observations or diurnal observation can be obtained over waters. And it will help in resolving diurnal cycle of many water
[15:02] quality parameters. It will be placed somewhere between 88 to 108 degrees so it will look at this
[15:11] part of the world. And focus on 1/3 of the earth disk as you know geostationary orbit looks at
[15:19] partial earth disk and it will focus on this region and provide this information. So we want to talk about
[15:30] PACE in a little more detail because it's upcoming mission. These slides are provided to us by Natasha Sadoff. She is the PACE
[15:40] applications deputy coordinator. And so thank you Natasha. So here is the information about the mission. PACE is NASA's next great investment in
[15:53] hyperspectral earth imagery and multi-angle polarimetry. And as mentioned it will be launched in January 2024. It's designed to have three year
[16:05] lifespan lifespan and 10 year propellant. Hyperspectral imager OCI spectral resolution will be high so UV to shortwave IR
[16:18] 340 to 890 nanometer. Every 2.5 nanometer there will be observation. And then there will be other wavelengths
[16:28] as well. Temporal resolution will be two days. Special resolution would be 1 kilometer square at nadir. There will be two multi-angle
[16:40] polarimeters HARP2 which will be wide swath swath with vision NIR near IR. And then Specs 1 narrow swath and that's
[16:52] hyperspectral UV NIR. With multiple viewing angles. So So these these the instruments will help resolve different algal groups.
[17:09] Dark ocean versus bright land and clouds. Image stripes, sunglint, absorbing aerosols, all this information will be obtained from PACE instruments.
[17:23] So So if you go through this detail you will learn more about what are the what will be the
[17:32] measurements and how it will expand our current knowledge. So the main idea is to moving from multi-spectral radiometry to
[17:43] spectroscopy and these are the historical missions starting from 1978 all the way to VIIRS here here and this is the range. You can see that
[17:55] all these instruments start from blue and go to shortwave IR. PACE will start with UV and go to shortwave IR with
[18:04] hyperspectral hyperspectral resolution and it will help in dissolved organic matter can be derived from this absorbing aerosols. Phytoplankton
[18:16] community composition can be derived as well as phytoplankton physiology. So these are some of the additional benefits.
[18:27] And one example you can see from VIIRS these dots they show fish food and turtle food. So these are diatoms and
[18:37] this is what PACE OCI will see because of hyperspectral nature of the instrument. So PACE data products are listed here.
[18:49] The there are standard products will be chlorophyll A, diffuse attenuation coefficient between 400 and 700, absorption coefficient of colored
[18:59] dissolved organic matter plus depigmented particles of 440 nanometer. Particle backscatter coefficient, plank phytoplankton carbon apparent visible wavelength and there will also
[19:16] be provisional or experimental products. Suspended particulate matter absorption coefficient of colored dissolved organic matter. matter. Phycocyanin or cyanobacteria, floating
[19:29] algae flag will be there. The other pigments will be resolved. Phytoplankton community composition will be available. And
[19:38] And there will be water quality products we this is tentative but then these are all the products that you can look forward
[19:46] to once the PACE is in space. More information can be found about PACE. If you want to join, there
[19:57] is a workshop coming up in early September. You can register for it. It will be focusing on PACE applications.
[20:06] So with that, we we want to focus now on statistical algorithm development for acquiring water quality parameters.
[20:18] parameters. You recall this diagram, we got in situ data for Lake Erie here from Gloria. We obtained Landsat 8,
[20:28] Sentinel 2 data for using GEE. So today now, the focus will be on model coefficient development that we can then
[20:37] apply to other images to derive water quality parameter. So we'll start with this this algorithm development procedure.
[20:50] Just Just to note about atmospheric correction, we've already talked about its importance and that it requires radiative transfer modeling along with
[21:02] atmospheric conditions, clouds, and aerosol information. So there are various techniques. NASA ocean biology processing group has an
[21:12] algorithm. You can learn more about it. There is USGS second simulation of the satellite signal in the solar spectrum.
[21:22] This is 6S that has been used. So Landsat data that we use is corrected using 6S. And then there is ECOLITE.
[21:31] This is European software that provides atmospheric correction and HYDROLIGHT. That also is available. I think NOAA uses this atmospheric correction. So
[21:42] this is just for your information that atmospheric correction has to be done. SeaDAS has that option inbuilt that you
[21:49] can use to correct data atmospherically correct data. So what we are going to use when Sean McCartney is going to to show
[22:02] how to the methodology to develop algorithm to derive water quality parameter using GEE. So there are various models for deriving
[22:13] water quality parameters. Most of them are statistical and empirical. As we talked about earlier, each water body
[22:22] needs its own algorithm. And they can be quite simple to quite complex. For demonstration purposes, here is what we are following.
[22:32] So for chlorophyll A, we are going to use its color index of CI. And that is defined
[22:44] from from surface reflectance in green and this is blue. It's a green minus This is the wavelength difference green and blue and
[22:56] red and blue. And this is the reflectance difference between red and blue. So this algorithm was derived
[23:04] starting from SeaWiFS to MODIS and it's been used to get chlorophyll A concentration. Here is the reference who
[23:11] at all describes CI. And so what you do is you have in situ observations of chlorophyll. You take log 10 of that
[23:22] value value and find collocated satellite images to calculate CI and then fit a regression line to find coefficients A0
[23:32] and A1, which are line fit intercept and slope. And then use those to calculate chlorophyll A concentration based on CI
[23:43] for for locations where you don't have in situ data or for images for which you don't have in situ data.
[23:51] This works mostly for low range of chlorophyll A concentration. So the current version of algorithm that NASA
[24:01] uses is OC4. It is called. It's a fourth order polynomial fit. It's applied to blue green reflectance
[24:10] ratio. And so there are five coefficients that you need to get a log 10 of chlorophyll A concentration.
[24:19] In In GEE, it's difficult to do this part. You have to do it offline and then use
[24:26] coefficient to calculate chlorophyll A. So for demonstration, we are going to focus on CI, but you can
[24:34] use other software like Python or IDL or R MATLAB to fit fourth order polynomial if chlorophyll values are high and then you get more
[24:46] accurate chlorophyll concentration from that. There are models for TSS and Secchi depth, which represent what water clarity. So um
[25:00] if if you search the literature, there are many many models with combinations of spectral bands. There is simple
[25:10] two band ratios or there are multiple bands used. So So it really there is no standard algorithm. So for demonstration purpose
[25:22] again, we use these two near infrared and red reflectance ratio for TSS. And references are given here. These are
[25:35] again derived from different lakes, not Lake Erie, but we are going to try and find coefficients for Lake Erie
[25:44] based on this band ratio. Similarly, for um um depth, depth, these ratios are used from Sentinel 2
[25:58] based on this paper here. So this is blue and this is red edge. Now Secchi depth is or water quality
[26:08] clarity, it's not that easy to obtain, but still empirical relationships are used here. There are analytical models
[26:18] which are more complex. For our purpose and at considering the level of this training, we are going to stick to this band ratio
[26:27] models here. So there's some caveats and there's this caution regarding model selection and usage for water quality parameter
[26:36] retrieval. retrieval. In here in this training, we have selected simple models based on band ratios as we saw for the water quality
[26:45] parameters. But a vast literature exists with a variety of models, linear and non-linear, single band, band ratios, and multi-band
[26:56] combinations. They're all used. Each water body is different in characteristics and it is recommended to explore, develop, and apply model
[27:05] algorithms for each sensor for the lake of your interest. So not only each water body is different and algorithm or
[27:14] models have to be derived for each water body, but each sensor is different, too. So if you
[27:23] develop a model for Landsat 8, those coefficients are not always going to work with Sentinel 2 or MODIS. So your
[27:31] models are sensor dependent as well as lake dependent. There are advanced and more complex models for water quality parameters.
[27:42] They're based on neural network, artificial intelligence, and machine learning techniques are developed. Many researchers are working on these areas
[27:51] and very complex and sophisticated models are available. But again, one has to one train these models for the lake of your interest.
[28:04] Also, as many collocated points between in situ measurements and satellite observation should be used for developing the models. In demonstration
[28:15] today, we are just going to use limited samples from Gloria just to demonstrate how to do this. But in practice, you
[28:26] want as many points as you can find when you have satellite and in situ collocated measurements. And models should be validated by using
[28:38] independent in situ data. So you need a substantial amount of data to develop model and you will have some
[28:46] data to validate the model performance. So these are some of the things to keep in mind. So with that, we will start with a
[28:57] demonstration today. Sean McCartney will show how to derive statistical algorithm coefficients for acquiring water quality parameters. Again,
[29:08] considering the time we have, we'll focus on chlorophyll A and TSS. But we'll talk about Secchi depth or water
[29:15] clarity. clarity. It's The methodology will be similar in which you use just different spectral bands to derive Secchi depth.
[29:25] Um Um And so with that, I'll hand it over to Sean. He will be starting his model
[29:31] algorithm demo. And then you will also have time to explore the scripts and and work with some of
[29:38] the data. Sure. Sure. Well, thank you, Mita. In today's demonstration, I'll be showing how to derive statistical algorithm
[29:46] coefficients for acquiring water quality parameters, specifically chlorophyll A and total suspended solids, using Google Earth Engine. The first part of this demonstration,
[29:57] we're showing how to take a spreadsheet, in this case a CSV file or comma separated values file, and bring this
[30:04] into a GIS so that we can create a shapefile and then bring that as an asset into Google Earth Engine to do
[30:12] some analysis. So, in the spreadsheet, we can see we have a number of columns, everything from the site name to country. And we
[30:21] also have two very important columns, latitude and longitude. That is how we will define the locations to bring the
[30:28] spreadsheet into the GIS, specifically QGIS. And we also have a number of other columns, such as chlorophyll A, total
[30:36] suspended solids, turbidity, Secchi depth, etc. So, now that we've explored this file, what we're going to do is open QGIS,
[30:47] which is a open source GIS software that anybody can use on either a Mac operating system or a Windows operating
[30:56] system. system. And I'm going to go ahead and click new empty project. And then once I have that, to be able to
[31:03] bring the spreadsheet into the GIS, I'm going to go up to layer. And you can see here the data source
[31:11] manager. I'm going to go ahead and click on that. And what we have here on the left are a
[31:16] number of options for browsing for a file that we want to import. So, I could import a vector or raster, but in this
[31:25] case, I'm going to be selecting the delimited text. I'm going to go ahead up to the file
[31:31] name. name. And I'm going to select the spreadsheet that I just showed to you with all the columns and rows.
[31:44] And after I select that file, we can see the file format. I want to make sure that the CSV or comma separated values
[31:51] file is the radio button that's selected. And then in the drop-down under geometry definition, we want to
[31:58] confirm that the X field is the longitude field. These are all of the different columns that I can choose from
[32:06] from the spreadsheet, but I want to make sure that X field is synonymous with the longitude and the Y field is the same as
[32:13] the latitude. I also want to confirm that the geometry CRS or coordinate reference system is selected to the EPSG
[32:22] 4326. 4326. And once I have all that, I'm going to go ahead and click add. And then you can
[32:28] see that the I'm going to go ahead and close out of this window now. And you can see that the locations have now been
[32:33] rendered in the map pane within the GIS. And to make a little bit more sense of this, I'm going to bring a base map into
[32:41] the map window. So, I'm going to go ahead and go up to map and then quick map services. And then let's go ahead
[32:47] and bring in a Google satellite view. And if I pan out just a little bit more, we can see that in fact all of these
[32:55] locations are in the western part of Lake Erie. Lake Erie is a freshwater lake, a large watery body of water in
[33:03] between the countries of Canada and the United States. Now, if I zoom back in, what I want to do is open up the
[33:11] attribute table. So, I'll go ahead and right click on the layer that I just brought in, that spreadsheet that I just
[33:17] brought in. And I'm going to go ahead and click on open attribute table. And what I'm looking for are all of the
[33:24] dates dates around July 15th from 2019 that are co-located with the Sentinel-2 data that I'm about to bring in in Earth Engine.
[33:35] So, what I'm looking for here are every location where in situ data was collected in this lake from around the
[33:43] time of July 15th, 2019. Great. Once I have all of these selected, these are all of the in situ
[34:02] data points that were collected on this date. date. I'm going to go ahead and close the attribute window. And now if I zoom in
[34:10] to any of these clusters of locations, you can see that one of these points is highlighted in yellow and I'm circling
[34:16] that with my cursor here. So, each of those dates of July 15th, all of them that I selected
[34:25] are are now highlighted in yellow. And what I want to do is export this specific date as its own shapefile. So,
[34:32] to do that, I'm going to go ahead and right click again and I'm going to go to export. And then
[34:38] I'm going to go to select save selected features. These are the features that were from that specific date. And when I
[34:44] click on it, you can see that I have different options for format. I want an Esri shapefile, which is quite common.
[34:53] And I want to give it a file name. For now, I'm just going to give it a general
[34:57] name called test. And I want to confirm that the coordinate reference system or CRS is in fact EPSG 4326. And I also want to make
[35:07] sure that all of the different columns that came in with that CSV file are selected. selected. And I'll scroll down just to make sure
[35:16] that everything else looks good. And once that's the case, I'm going to go ahead and actually, you know what? I'm going to
[35:23] select the location of this. So, I'll go to the project folder in which I'm working. And I could save it there. I've already
[35:34] saved it, so this is just a demonstration for you, but this is how you would click okay and then you would
[35:39] have a shapefile saved into a directory on your personal computer, be it a Mac or Windows operating system.
[35:50] So, now that we have a shapefile saved from the location and date that we're interested in, and again, this date we
[35:59] selected because it was co-located with a Sentinel-2 overpass. To bring that in as an asset into Earth
[36:07] Engine, Engine, what I would like to do is go to assets. And then we can go to new.
[36:14] And then I would say table upload. And then I would select the source files. And for that, I would navigate to
[36:22] the directory in which I saved the file. And you can see that the file is already saved in this directory. I
[36:30] would select the corresponding file types that are required and you can see them all listed here, the allowed
[36:38] extensions. extensions. And so, I would select all of those from this red button. And then I would select
[36:45] the the directory that I want to save them in. And I would go ahead and click upload.
[36:50] Now, I've already gone ahead and done that, so you can see in my assets, I already have a asset that which I've
[36:57] named a Lake Erie underscore July 15th, 2019. 2019. Now, if I want to bring this asset into
[37:04] my script, what I would do is go to the right arrow button, click on that, and you can see that I don't know if you saw
[37:12] that, so I'll go ahead and delete it again, but you can see currently I have two imports, one named Gloria and one
[37:19] named Erie. So, again, if I wanted to import an asset, I would go to the asset of my choice, and you can see the arrow
[37:26] the right arrow which says import into script, and when you click on that, there you go, that table now appears as
[37:33] one of my imports at the top of the script. Now, I'm going to go ahead and delete this. If you wanted to, you can
[37:38] rename this anything you want. I'm going to call it test just for fun, but you can rename it anything you want
[37:44] that's logical to remember. I'm going to go ahead and delete this because I've already imported the same asset and I've
[37:51] already renamed it Gloria. And Gloria, if you remember, is the name of the the data set which is in situ freshwater
[38:00] in situ data that's been collected all over the planet. So, that's why I gave it that name. And then also at the top
[38:07] of the script, we give some instructions such as what this training and the the link to this training if you ever wanted
[38:13] to come back if you have access to the script and go back to the training page. And the start of the script is really
[38:20] selecting your area of interest. And to do that, you can go to the map window below and you have different options for
[38:29] drawing a rectangle. And you can draw a bounding box around the lake or part of lake of your
[38:36] interest. You can also draw a polygon. That's another way of capturing your area of interest. And once you've done
[38:42] that, that, which I've already done, and then I renamed that bounding box, in this case I used a bounding box, to Erie to
[38:51] to be congruous with the name of the lake. lake. Now, that's one way of defining your area of interest. Another way of
[38:57] defining your area of interest is what I just told you. If you have a shapefile which you have for your specific area of
[39:06] interest anywhere on the planet, you can upload the upload that as an asset and bring it in
[39:11] import that into the script as well. So, just different ways of constraining your analysis to an area
[39:17] of interest. The next section of code that we're going to be looking at is dealing with the
[39:24] the Earth Engine Palettes module, which is a color palette module which was crowdsourced and created by the Google
[39:32] Earth Engine community. It's a really awesome community and they've created this module for all public users to be able to use to be
[39:41] able to visualize their different maps in the map window. So, in this case, I'm going to define a variable
[39:48] and then I'm going to pass the file path for the Earth Engine user community, which in this case is
[39:56] users Gina packages palettes. And the next thing I'm going to do is block block block of script is define a new
[40:04] variable, which I'm going to name palette. And in this case, I'm going to bring in the variable I just defined
[40:10] above and then I'm going to specify the specific palette within that module that I'm interested in. In this case, it's
[40:17] the color brewer brewer spectral and this is defining the number of different palettes that I would like to use, which
[40:25] is part of this color brewer spectral. So, I want in this case, I want to bring in all 11 options and I'm going to
[40:31] reverse the order from the default that they give it to you. This next section of code is saying I
[40:38] want the base map in the map window to display anytime I run the code as the satellite option.
[40:49] Then this next section of code is setting the map center to a specific longitude and latitude as well as
[40:55] setting the zoom extent. So, anytime I run the code, it will pan to that zoom extent. And again, if I set this to one,
[41:02] that would zoom out to the entire planet. And if I set this to 24, that would be the smallest region that Earth
[41:08] Engine allows you to render the map window. window. Then in this next section of code, I'm actually defining a variable to create a
[41:18] function. function. Uh in this case, this function I am calling F. And then within this function, I want to
[41:26] return return everything in the data set of the Gloria data set and I want to return that and
[41:33] buffer all of the points within that by 10 m. This 10 indicates the meters as the distance.
[41:42] So, once I have that variable defined to and define this function, I want to go ahead and run a
[41:49] print statement or a use a print statement as a gut check and I'll show you what that means in 1 second. If I
[41:55] can just bring this out. So, all of the print statements are going to go to this console tab, which
[42:01] is the middle tab within the three options on the right of the Earth Engine interface. interface. And if I scroll to the top,
[42:10] uh you can see that I I has printed the buffered 10 and that is the feature collection that we can see here. And so,
[42:17] if I'm want to interested in all the metadata, this is all of the different columns again that were from that
[42:22] original CSV file. They've all been brought in as the shapefile and now I can see them all within Earth Engine
[42:28] once I use this print statement as well as a lot of other metadata about each of the data points within each of the
[42:35] locations. So, what I like to do use a lot of print statements just as a gut check to make sure that I'm
[42:43] running the code line by line, that it's actually giving me an output that one makes sense and two that is actually
[42:49] what is a value to me later on. So, this next section of code is creating another function and this is
[42:57] going to be a cloud mask function. So, when I bring in the Sentinel 2 multispectral imagery imagery bands, that I'm able to mask out
[43:06] all of the clouds and then return and then also divide the updated mask by 10,000 so that I can bring the
[43:16] digital number for each of the pixels into a reflectance value. And that's why after we've masked everything, we divide
[43:22] by 10,000 so that we actually have a reflectance value from the original digital numbers. This next section of code is actually
[43:33] defining a variable for Sentinel 2, which Sentinel 2 MSI, that is the the mission and the instrument which we'll
[43:40] be using for this analysis. And so, once we've defined that variable name, I'm going to pass in the image collection,
[43:47] which is the Copernicus Sentinel 2 surface surface reflectance harmonized. And if you're ever curious about what any of these
[43:56] image collections are, I can copy and paste and then when I go to the top of the window for searching the data sets,
[44:02] I can go ahead and paste that in and then when I click on that, I can actually learn a lot more about what
[44:08] that image or image collection is. So, it tells me about the description of the image as well as the bands. So, I can
[44:14] see what each of the band band one, band two, band three, band four, etc. all the way to band 12 as well as some of the
[44:20] terms of use. So, anyway, so if you are interested in any of the image collections, you can always
[44:27] copy and paste that at the top of the script in the search bar and then learn more.
[44:33] This next section of the this block of of code is filtering the image collection to to be collocated with the July
[44:45] 15th 15th institute data. The date that that institute data was collected. This next line of code is filtering that image
[44:53] collection by cloudy I cloudy pixel percentage, which is less than 20%. And then I'm going to map the mask to clouds function, which
[45:06] we defined up here. So, I'm going to map that across all of the bands in this filtered image collection so that all of
[45:15] the bands, which I am filtering, are masked out for clouds. And then I'm going to filter the bounds by the again,
[45:23] this is the area of interest, which I drew the bounding box around. So, I'm going to filter it by the bounding box of Lake
[45:29] Erie and then I'm going to use the median filter. So, for any overlapping pixels within that date range, I'll take
[45:36] the median of all of the pixels that happen to be within this date range. And then again, I'm going to use a gut
[45:44] check to use a print statement to print the results to the console window. So, again, I'm going to use a statement here
[45:53] filtered image collection by July 14th and then we can see here again filtered image collection July 14th and sure
[46:01] enough, we have 23 bands within that date range that we filtered by. So, this is just a gut check to make sure that
[46:08] the code is performing as we wanted to. This next block of code is setting visualization visualization min and max values
[46:17] defining a variable to set the min and max values. And again, these are reflectance values. Again, that's why we
[46:24] divided the um the the image by 10,000 so that we could go from the digital number how the bands
[46:33] originally come to be a surface reflectance. And then we're going to select these bands for visualization purposes bands 4 3 and 2, band 4 3 and
[46:43] being the red band or red part of the spectrum, band 3 being green and band 2 being blue.
[46:52] This next section of code is defining a variable variable for converting the buffered vector to a raster file and we're going to be
[47:00] selecting the chlorophyll A from the from the the buffered file that we defined above. Again, this is the buffered 10. So,
[47:14] again, this is the uh this is the the variable that we defined to run the function to buffer all of the points
[47:24] that were in the CSV file. So, we're going to define that variable and then we're going to select just the
[47:32] chlorophyll A. And then we're going to return that. And what that's going to do is going to it's going to convert that
[47:39] vector-based file to a raster or an image file. And this next section of code is going to calculate the log 10 of the
[47:51] chlorophyll A image and then rename that to something logical such as chlorophyll A or the log 10 of chlorophyll A.
[48:01] And then this next section of code, or I should say the next two sections of code, are using print statements just to
[48:07] make sure that the code again is performing as we wanted to. And then this next section of code,
[48:13] lines 99 through 103, is defining a new variable variable total suspended solids {underscore} buffer and it's basically doing the same
[48:22] thing that we did just above here in these front lines of code. It's selecting the total suspended solids
[48:28] from the buffered locations that we brought in as a shapefile. And so, we're just selecting just total suspended
[48:35] solids and then we're going to create an image or a raster-based file from that vector or feature class file. And then
[48:44] we're going to define another variable to rename the band from first to TSS just so that we have a more
[48:53] logical name for that band. And then we're going to use another print statement just to make sure that
[48:59] the code is working correctly. And this next line of code from lines 111 to 126 is creating a histogram so that we can
[49:12] view the spread of all the values of chlorophyll A. And so, that's what we're looking at here in this on the again,
[49:18] this is on the console tab and we can also, if you can see here, you can actually pop this out into another tab
[49:24] if you want to view it in in much larger text and much larger font. And so, this
[49:30] is just a way of exploring the range of values, the chlorophyll A values, that we just subset from the shape file.
[49:41] And this next sections of code are actually where we start getting into more of the algorithm development.
[49:48] So, this next section is going to be calculating total suspended solids and the color index so that we can start
[49:56] doing some regressions. So, this first section of code is calculating the total suspended solids and we're going to do that for a by
[50:06] creating a band ratio and in this case it's going to be taking that filtered Sentinel-2 MSI band ratio and in this
[50:13] case we're going to be using the reflectance values for the near infrared also the band 8 from Sentinel-2 MSI and
[50:22] then the red reflectance which is synonymous with the band 4. And this is the actual equation that we
[50:30] do to calculate the total suspended solids. solids. Uh we're going to take the 10 ratio of the or the log 10 of the near
[50:40] infrared band and divide that by the log 10 of the red band and then this next line of code is just
[50:46] indicating what the near infrared band is actually doing. It's actually synonymous with the band 8 and the
[50:55] red here in the in the text equation is synonymous with band 4 and then once we've derived that
[51:02] through that algorithm we're going to rename the output total suspended solids underscore BR for band ratio. So, this is a way of deriving total
[51:12] suspended solids from a log ratio of two bands from the Sentinel image collection which is or Sentinel
[51:20] image which is just the near infrared and red band. And then this next chunk of code is driving a different
[51:29] uh uh a different algorithm in this case to derive the color index which we'll use to regress or perform a regression
[51:38] with the chlorophyll A. So, in this case we're going to this is the algorithm here and we're
[51:45] taking the reflectance from the green and the blue and also the red and we're going to perform this mathematical operations
[51:56] from from um um and then we're going to select these different bands which again the band 2
[52:04] is synonymous with blue, band 3 is synonymous with the green wavelengths and band 4 is synonymous with red
[52:11] wavelengths. And then once we've calculated that we're going to rename the output CI which again stands for the
[52:20] color index. And then we're going to use a couple print statements just again as a gut check to make sure that the code
[52:27] is performing as we want to so we can actually go down and see that yes in fact total suspended solids calculated
[52:34] and that renamed band is actually what we want it to be and then again from the color index calculated from Sentinel-2
[52:41] that we have renamed it as we want it in terms of CI. So, just making sure that
[52:45] the the the code is working properly. And this next lines of code from 161 to 165 is clipping that output to the
[52:56] um um the bounding bounding box around Lake Erie. Next we're going to calculate the mean band values
[53:07] from the expressions above and then we want to create create the mean within the 10 m buffered
[53:13] areas and the result of this will be a feature collection. And so we're first going to define a
[53:20] variable variable and then we're going to pass the expression that we created above for the color index and we're going to reduce
[53:27] regions and again because we have multiple locations where all these different in situ points were collected we're going to select reduce reduce by
[53:36] regions plural and we're going to use the buffered 10 again that that 10 m buffer around all
[53:44] these locations and we're going to select chlorophyll A and we're going to reduce by the mean. And we're going to set the scale as 10
[53:51] and this again is in meters and we want that 10 m because this is the resolution the spatial resolution of the Sentinel-2
[53:58] imagery. And we're going to also specify the coordinate reference system again to be EPSG 4326. This is the same
[54:07] coordinate reference system we've been using from the beginning. And once we have that feature collection with the color index
[54:16] also with the chlorophyll A we're going to use a print statement just to make sure that the output is is working.
[54:26] And then we're going to do the same thing but in this case we're going to do it with for the total suspended solids
[54:32] and again we're going to use another print statement just to make sure that the output is where we want it to be.
[54:38] Next we're going to define a variable properties properties and we're going to list the properties that are of interest to us for when we
[54:46] perform the regression. This is going to be chlorophyll A and mean and mean is going to be the output when
[54:54] we ran the total suspended solid reducer and the color index reducer. You can see that we reduced it by the mean and anytime you
[55:03] use a reducer the default band name defaults to whatever the name of that reducer is. So, in this case because I
[55:10] reduced it by the mean the default here the output band is going to be mean as well.
[55:16] well. So, we want to define that variable of properties and then we're going to define another variable properties one.
[55:22] So, this is going to be for chlorophyll A and then this next variable will be defined for total
[55:27] suspended solids and again use some print statements just to make sure it's working. working. And then we're going to create a new
[55:34] function function to iterate over the list of properties which and again these properties are what we defined right up here
[55:42] and create an image from that feature collection and then we'll have one image with multiple bands with the bands that
[55:50] we will need to perform the regression. And so in this case I'm going to define a variable image
[55:55] and then I'm going to pass the properties variable that we defined above that chlorophyll A and mean
[56:03] and I'm going to uh create a function that function is going to be named property and then within that function I'm going
[56:10] to return the CI reducer which is what we defined above and we're going to select property the name of the function
[56:17] and then we're going to reduce the image cuz again we're going from a feature collection to an image and again we're
[56:23] going to use the function the property function and we're going to reduce by the first and then we're going to rename
[56:29] by property and again that property being the names of the properties up here. So, both chlorophyll A and mean.
[56:39] And after we use a print statement just to ensure that the code is working as we would hope it to be we're going to do
[56:44] something very similar but in this case it will be with the total suspended solids instead of with the chlorophyll A
[56:52] because we want to derive the regressions for both total suspended solids and then separately for the chlorophyll A.
[57:01] And we'll use another print statement just to make sure everything is working correctly then we'll also create another
[57:07] histogram from the in this case it'll be from the chlorophyll log 10 and then just to make sure that we can see all
[57:15] the spread of values that we have within that histogram. And we'll use another print statement and then next thing we're going to do is
[57:24] define another variable and the whole purpose of this variable is just to rename that mean band to CI or color index just so that we
[57:33] have something more logical than just a very generic band name. And then we'll do the same thing for the
[57:42] total suspended solids band ratio. We're going to create a variable total suspended solids band ratio and we're going to pass in the
[57:52] image that we created above. Again this is the image with two bands both for the total suspended solid in situ data and
[58:00] then also from that band ratio and then we're going to select mean and this is that band ratio and we're going to
[58:07] rename it total suspended solids underscore BR for band ratio. Again we'll use a couple print statements just to make sure that the
[58:15] output is what we would hope it to be. So, in this case select a band select a
[58:20] band by name CI and so we can just make sure that again that that band is being renamed
[58:28] appropriately. appropriately. And then we're going to add bands to we're going to define a new variable image and we're going to take
[58:38] the log 10 of chlorophyll A and we're going to add the CI band to that and we're going to do the same thing we're
[58:46] going to add the total suspended solids band ratio this is the the ratio that we created from between near infrared and red and
[58:54] then we're going to add that to the in situ total suspended solids and then we're going to create some
[59:00] statistics and this is just in case if any participants or future users or future colleagues wanted to export any
[59:08] of this as a CSV file I just wanted to give the option of writing some lines of
[59:13] code to be able to generate a a feature collection that one could export as a CSV file and I'm also adding
[59:21] back in the latitude and longitude fields for in this case it would be for the chlorophyll A and color index and if
[59:29] for the stats one it would be for the total suspended solids. And again, lastly, I'll use a couple print
[59:35] statements just to make sure that everything is working correctly. And this last few sections of code are actually
[59:45] creating a regression. In this case, it would be a linear fit regression, which is the simplest regression available in
[59:52] Earth Engine. And we do this to be able to uh uh uh use the uh to see a regression between the
[1:00:01] chlorophyll a and the color index. So, we want to be able to derive both the the slope and the the Y intercept so
[1:00:10] that we can use this for the entire image of the color index instead of just for the
[1:00:17] specific locations that we have uh performed so far. So, first we're going to do is define a variable linear fit.
[1:00:24] And then we're going to pass in the the variable for the image that we uh derived above, and then we're going to
[1:00:31] reduce the re- region, and we're going to reduce it by the linear fit. And so, this is again the type of
[1:00:38] regression which we're performing is linear fit, and we're going to define the geometry, which is constrained by
[1:00:44] the buffered 10. That's all of the in situ locations that were buffered by 10 m. And again, this is the scale 10 m,
[1:00:51] and best effort true. Use that just to avoid any error messages in terms of maximum pixels. And then we'll use some print statements
[1:01:00] to actually print the uh ordinary least squares regression output to the console tab. In this case, it'll be the offset and scale. So, uh
[1:01:12] the uh offset being the Y intercept, and then the slope being the scale. So, we've printed all this from that
[1:01:18] regression equation. And we're going to do the same thing for total suspended solids. So, we're going to take the in
[1:01:24] situ total suspended solids measurements, and then we're going to uh perform a regression with the band ratio
[1:01:32] using the near infrared and red uh to find out the slope and the Y intercept for that. So, we can see here, we also
[1:01:41] have the output once I use print statements. We've been able to derive the output for the Y intercept for total
[1:01:46] suspended solids and the slope for the total suspended solids as well. And so, we can use this to be able to perform on
[1:01:54] uh uh on any of the band ratios that we have to be able to derive that for the entire
[1:02:00] image from the entire Sentinel-2 image. And then this next section of code is adding all of the layers to the map
[1:02:08] window. So, if I bring the uh if I bring this up so we can see more of the real
[1:02:14] estate down here, we can see that I've output the color index, the total suspended solids, the imagery, which is
[1:02:22] again, this is filtered by the median filter. And then these are all of I'm sorry, these are all of the if I zoom in
[1:02:29] all of the in situ locations. This is the July 14th, 2019. And then if I zoom in a little bit more,
[1:02:35] we can actually see that these are some of the buffered areas that I derived a buffer around all of
[1:02:43] these different in situ locations. And lastly, we have the imagery itself, which is the Sentinel-2 imagery. So,
[1:02:52] I've output all of these as layers into the the um into the map window. And lastly, this last section of code,
[1:03:03] if you choose to uncomment it, uh is to export the results in CSV format. So, maybe you wanted to share this with a
[1:03:11] colleague who's not as familiar with JavaScript, and maybe they just wanted to work with CSV files. Well, we've
[1:03:18] uh created these couple lines of code to be able to use the stats variables and stats one variables that we defined
[1:03:23] earlier to export. And to do this, you'll need to uncomment this code. Um so, this is again up to you if you
[1:03:32] choose to do it. And then also, we've also provided the opportunity if you wanted to export uh any of the layers
[1:03:38] that we derived through this analysis as a GeoTIFF file and export these into you uh into into your Google Drive to be
[1:03:45] able to bring into, say, a GIS to do more analysis. So, this concludes the demonstration. I do hope that you enjoyed it. And
[1:03:55] again, this is the demonstration on deriving statistical algorithm coefficients for acquiring water quality parameters, both chlorophyll a and total
[1:04:04] suspended solids, using Google Earth Engine. I'll now turn it back over to my colleague, Dr. Amita Mehta. Amita, back
[1:04:11] over to you. Thank you. Thank you so much, Shawn, for the demonstration of T W statistical algorithm coefficients for getting water
[1:04:24] quality parameters. And also, thank you for walking us through this in GEE line by line. Um you will have chance to work with the
[1:04:35] scripts and replicate some of the results and uh try on your own to change things and uh see how um
[1:04:44] coefficients change or your results change. change. Um before you start working on that, let's summarize what we learned in this
[1:04:54] training. So, in this training, we learned current and upcoming remote sensing observations useful for assessing water quality
[1:05:03] parameters in inland lakes. Uh we want to say inland lakes because that's the the mean freshwater lakes here as
[1:05:13] opposed to coastal uh lakes or lagoons, which are brackish. So, that's not what we are talking about.
[1:05:19] Um we selected in situ water quality parameter measurements to be used with satellite observations to maximize accuracy.
[1:05:28] accuracy. Uh explored cyanobacteria assessment network and early warning system to assess algal blooms in freshwater lakes. Used GEE to access Landsat 8,
[1:05:39] Sentinel-2, and Sentinel-3 optical and speckle data for water bodies of interest. Our case study was focused on
[1:05:46] Lake Erie, but you can uh replicate this for any other lake of your interest. We explored Gloria uh in situ water
[1:05:54] quality measurements and how to access those. those. Uh today we walked through algorithm development steps for water quality
[1:06:03] parameters parameters based on remote sensing and in situ measurements. measurements. We primarily uh showed chlorophyll a and
[1:06:13] TSS uh retrieval. Uh very similar uh method can be used for water clarity, which is Secchi depth, and uh different
[1:06:22] band combinations as we mentioned before. before. So, this is what we did in this three-part session. As I mentioned earlier, homework is
[1:06:31] posted today on our website and also on the training uh webpage. Uh answers must be submitted via Google Forms by August
[1:06:40] 8th. 8th. Um and we In the homework, you will find a Google Drive folder link where you
[1:06:47] will be uploading some of the screenshots that you've taken in part one and two, and you'll be doing the
[1:06:53] same today. So, those of you uh who have attended all three live webinars and complete homework assignment by the deadline,
[1:07:04] which is today, will receive a certificate of completion uh email approximately 2 months after uh today. We want to thank our guest speakers, uh
[1:07:17] Blake Schaeffer, Pete Zagers, and Daniel Sobota. We also want to thank Dr. Neema uh Boulware and Natasha Sadoff uh for
[1:07:25] their help with with with Gloria data and with PACE uh mission information. Um Um We are on Twitter. You can follow us,
[1:07:36] and we also have YouTube channel. Also, there are sister capacity building program uh development survey that you
[1:07:44] can check out. So, we will go to question and answer session soon, but before that, we're going to have some free time to work
[1:07:54] with the scripts that Shawn uh demonstrated, uh and then we will start the question and answer session. So, you
[1:08:03] have some free time to try the script um and replicate some of the results. So, we'll start with the question and
[1:08:15] answer session now. We have received several questions. Um Um hope you were able to work with the
[1:08:23] scripts a little bit. Um and if you do have questions, uh please post them um on in the chat box.
[1:08:34] So, we will start with the question one. Is there any way to simulate a water treatment and determine how many
[1:08:43] times it will take for a harmful algal bloom to come back in acceptable uh quantity? So, um
[1:08:52] um E uh yes, there are water treatment simulation softwares available. That is not our expertise, uh not don't know
[1:09:00] much about it, or haven't used those. But, there are some uh links provided um in the answer
[1:09:08] and that you can look at. Um Um so, yes, there there are ways to to gauge that, that how, you know,
[1:09:17] what's the present water quality, and then what will you have to do to get how many times you'll have to go through
[1:09:24] that to get a acceptable uh HAB count. So, you can search around. There are softwares available. Question two, is there any way to know
[1:09:37] the location of the lake where the cyanobacteria are concentrated? So, So, in cyan web app we saw that it provides image of
[1:09:48] counts. And so, that tells you where there higher concentration of cyanobacteria. So, you can. Yes, from remote sensing data you can see that. If
[1:09:58] you can resolve the lake, you can. How to download GeoTIFF images for selection location from the cyan
[1:10:07] webpage? I will have to go back and uh look into that and then provide this answer later on.
[1:10:16] Question four, I want to know what are the bands considered by cyan index? And also, if possible the formula as
[1:10:24] well. well. Um Um so, so, we can relay this question to Dr. Blake Schaeffer and Dr. Sigers,
[1:10:34] Bridget Sigers, but their references available here describes how um cyan index is cyanobacteria index is derived and both
[1:10:46] for MERIS and OLCI what bands are used and the formula used are shown there. Question five would like to ask whether
[1:10:57] any processing has to be done to compare reflectance images from different dates. Um so, yes because when when time changes,
[1:11:08] atmospheric conditions change. Uh maybe there more aerosols or clouds or um so, atmospheric correction has to be done
[1:11:19] when you want to compare uh surface reflectance. It also depends sometimes on solar zenith angle. So, all
[1:11:27] those things have to be taken care of when you want to compare quantitatively. You can look at top of atmosphere
[1:11:34] reflectance images quickly and look at qualitative differences for sure. So, depends exactly what you are comparing. For
[1:11:43] surface reflectance, yes, you have to um do the atmospheric correction properly. Question six, I'm working on a project
[1:11:53] that uses drone imagery for water quality monitoring in South Africa. How can I share with you the in situ
[1:12:00] measurements of my study site? So, there are two ways you can contact um um Gloria data coordinator here at NASA,
[1:12:10] Dr. Nima Pelwan. Uh his email address is provided here. Also, um NASA ocean color group has a
[1:12:18] form and you can join that and post this if anybody is interested in in situ data, uh you can communicate with them.
[1:12:30] Question seven, has there been any testing or parameterization of PACE on lake or any on only over oceans?
[1:12:40] So, um there there are people have started looking at simulated PACE data. So, I'm trying to find out if it's
[1:12:52] they have been looking at um lakes or not. Um ideally, it is for coastal and open ocean because the pixel size is 1 km
[1:13:03] square, but we'll get back to you on that one. Question eight, if it's impossible to collect in situ data for a lot of small
[1:13:14] small lakes, is there a way to improve the generalizability of a model? Um unfortunately, there's there's no definite yes or no, but
[1:13:26] unless you test clearly, there's no way of knowing. Um but what you can do is that you can
[1:13:34] use models developed for either nearby lakes or lakes which are similar in characteristics, either they are have dominated or CDOM dominated or
[1:13:44] sediment dominated. Depending on that, you may be able to use coefficients derived for other lakes and then
[1:13:53] see the changes. You can definitely see changes by using those model coefficients. Quantitative accuracy, um cannot be um
[1:14:04] judged without in situ data. Question nine, is there a rule of thumb for a minimum number of in situ
[1:14:12] measurements to develop algorithms for remote sensing images? Um as such, there is no rule of thumb, but you want statistically significant
[1:14:22] coefficients coefficients which they encompass all conditions. If you derive coefficients based on one season, season, and the next season,
[1:14:33] say chlorophyll concentration goes much higher in summer, you derive your coefficients in winter, it's not going to give you accurate results in summer.
[1:14:40] So, So, depending on your goal, you have better coverage in space and time, better coefficients, statistically significant numbers you will get. Um
[1:14:54] in literature, you see coefficients derived from tens of points and then a couple of thousands of points. So,
[1:15:05] there doesn't seem to be a rule, but I think you want to make sure that those coefficients are statistically
[1:15:12] significant and also that um you are encompassing all the conditions that you are trying to to cover.
[1:15:22] Um what we demonstrated today obviously is not ideal. We just used eight points. That was mostly for showing um
[1:15:32] but but more points you have, the better. More independent points you have. They all they have to have information. So,
[1:15:40] that that Um question 10, any suggestions for models of lake CDOM using Sentinel-2 MSI? MSI? Uh there is this is one of the first
[1:15:50] papers that um you you we have listed here. You may want to look at the paper for some
[1:15:56] information. Uh please explain a little more about the co-location concept. Um so, ideally, um when satellite orbit passes over a
[1:16:09] lake lake and sensor is looking onto the lake right there and if you collect water sample below where
[1:16:19] satellite is looking, that's ideal co-location in space and time. But that doesn't always happen for a number of
[1:16:26] reasons. First of all, maybe you cannot go out and take water samples. So, you can plan it so that you
[1:16:32] can go within few hours of satellite overpass. Sometimes, if you have in situ data and satellite is going over, but
[1:16:41] it's cloudy, then you know, you cannot connect surface satellite is not looking at the surface. So, you don't have
[1:16:47] satellite data. So, because of that, um co-location can be within a few hours, within a few days.
[1:16:59] Ideally, Ideally, special co-location within a few meters is good. A few pixels of satellite data. Uh question 12, is it possible to use
[1:17:15] model CHA concentration value derived from another sensor with co-located in situ data to derive an algorithm for another sensor?
[1:17:25] Without co-located in situ data. Um Um So, again, you have to check whether it's going to work. If the both the
[1:17:34] sensors you are looking at have similar spatial resolution, spectral bands are close enough and bandwidths are close
[1:17:43] enough, then you might be able to use it, but you have to just check. Question 13, are these algorithms valid
[1:17:55] in high concentration of CHA such as comes? Is it necessary to apply different algorithm in these circumstances?
[1:18:03] circumstances? So, So, there is again no standard algorithm that works in all cases. And if you go
[1:18:11] through this document where NASA algorithms are described, you will find information that that there are several algorithms are used in a for different
[1:18:23] sensors in different cases. Say, for high chlorophyll value or low chlorophyll value, there different models used. So, you can get some idea
[1:18:31] if you read this document. But yes, I think um any any um um you cannot assume that one standard
[1:18:42] algorithm will work in all cases. At least you have to verify it works or to what extent it works.
[1:18:52] Would there be a bias correction needed? Would there be large errors? You have to sort of work through that.
[1:19:00] Um Um Okay. Sean, you want to address question 14? Uh yes, I'm sorry. Yes. Question 14, is buffering a point vector data the
[1:19:12] same as interpolating to get a rasterized image? I could see how there might be some uh a lot of similarity and some confusion.
[1:19:21] So, I would say it's not the same as interpolation. interpolation. Uh I I I fast and loose definition of
[1:19:26] interpolation is using multiple values instead of just one, but multiple values at multiple locations to create a
[1:19:33] continuous surface uh that can be used for mapping and analysis purposes. Uh these are usually continuous continuous uh
[1:19:42] uh quantitative data sets. Um but, if you set your buffer at an an reasonable distance, uh say
[1:19:50] like if you're collecting data in situ, and you set your buffer for something that's, you know, beyond reason, then
[1:19:57] there would be some level of an un interpolation and probably uncertainties that arise as you farther away from that
[1:20:04] point location. Uh in the demonstration, we buffered at 10 m because we wanted to match the spatial resolution of the
[1:20:11] Sentinel-2 MSI image, and we didn't want to buffer too far from that known location of in situ data. So, that's
[1:20:19] what we did there, and there are some similarities, but I would say that there's um uh but they're not the same.
[1:20:27] Okay, question 15. Can the this method be applied with water quality in a pond? So, that depends on two things. First of
[1:20:35] all, how Well, usually ponds are shallow, so bottom reflectance would be an issue. So, uh you want to test uh and maybe
[1:20:45] correct for it. Um and also depends on the size of the pond. Is it big enough to be resolved by
[1:20:52] satellite sensor that you are you're using? So, uh you can um um you can get you can use these
[1:21:00] algorithms, but how accurate that is something that you have to decide. It depends on the type of the pond.
[1:21:09] Question 16. Is there a way in GEE to correct data for sun glint? So, So, I think that Shawn, you have question
[1:21:22] 16, you have uh put in an answer that there's a publicly available code using Earth Engine to correct for sun glint, and
[1:21:30] here is the code. Okay, is there any part of the GEE code that would need to be changed in order
[1:21:41] to work for coastal salt water ecosystems? If so, what are the specific changes that would need to be made?
[1:21:48] So, first of all, you will have to have in situ data in two coastal salt water ecosystems that you can relate with
[1:21:56] satellite reflectances. So, So, algo models can be similar uh uh that you empirical models, basically, they just exploit information in
[1:22:09] different spectral bands. So, that you can do, but uh you you have to have in situ data where you actually want to
[1:22:17] retrieve water water quality parameters. Question 18. What is the atmospheric correction used for harmonized Sentinel-2 uh being used in this demo?
[1:22:31] So, it it um harmonized Sentinel-2 data that we used, they are from Sen2Core. And so, that's the their standard
[1:22:40] atmospheric correction's been used, and you can you look at this handbook for more information. Question 19. Are there rules of thumb
[1:22:49] necessary to apply for thresholds in CI, MCI, etc.? For when the uh concentration is high enough that the bloom is likely uh scum,
[1:23:00] or is it a separate algorithm like the floating algo index? Uh we will have to get back to you on
[1:23:07] that one. I don't have specific answer on top of my heads. Question 20. Is there a way to mask out
[1:23:16] the land pixels in the end image products for GEE? Shawn, you want to uh address that? Sure. What what question? Question 20.
[1:23:27] Okay, question 20. Uh yes, is there a way to mask out land pixels? pixels? There are some land and water masks that
[1:23:34] are available in GEE. Uh you can actually, if you go to the uh search terms, you can actually just filter by
[1:23:40] your search, and you'll be able to find them. I would say the caveat being that in the spatial resolution we used today,
[1:23:46] uh the Sentinel-2 MSI harmonized product, that's a 10-m spatial resolution. So, if you're going to use the water masks that Earth Engine
[1:23:54] provides, those are derived from the MODIS instrument at a much more coarse spatial resolution at 250 m. Some
[1:24:01] alternatives, if you if you're if you're savvy enough, or or if you want to challenge yourself, you can either uh
[1:24:07] create your own mask using different uh bands within Sentinel-2, or you can uh derive a or source a mask, a water mask,
[1:24:17] uh outside of Earth Engine, and then import that as an asset, and then use that in your analysis. So, those would
[1:24:22] be different options. Thanks. Question 21. If multiple images are available with in situ match-ups, um is it better to develop the algorithm
[1:24:36] for only the image that's closest temporal match, or use them all and calculate the median value for a given
[1:24:44] pixel for all the available images within a certain time period around the in situ samples? So, both
[1:24:52] both these approaches have been used. If you look at the literature, that just, you know, temporal co-location is used,
[1:24:59] or there's median value used. And um so, I think um you will have to just test it out,
[1:25:08] develop the algorithm, and then um um validate it with some independent in situ data to see which one gives you
[1:25:16] more accurate uh results. But, if you look at the literature, both these approaches are used. They if there are multiple images, then
[1:25:24] median value is used. Uh question 22. Are there plans to launch additional Sentinel-2 satellites? Um Um So, Sentinel-2C is also going to be
[1:25:45] there. Uh it will be it will be launched um next year. Uh question 23. When working with GEE,
[1:25:56] is it ideal to export the files into another application after producing a final classified image in order to apply
[1:26:04] color bars and final analysis? Uh Shawn, do you want to uh take that? Question 23. Uh yes, 23. When working in GEE, is it
[1:26:13] ideal? ideal? Oh, got it. For apply Yes, so this is I think this question is is for providing
[1:26:19] a very professional professionally looking uh map as your end product. So, in the script that you have access to
[1:26:28] from the training page, uh we've we've play posted that under part three. Uh we did provide a Earth Engine palette
[1:26:34] module. module. This was mentioned also when we were discussing the script. This is a a crowd-sourced uh palette uh a module
[1:26:42] created by the Earth Engine user community. So, there's a lot of different options for visualization, and you do have access to that through the
[1:26:49] script that we have provided for you. And I would also say that most analyses that people will attempt uh
[1:26:57] can be achieved in Earth Engine as well. So, I wouldn't I would probably search around for what exactly level of
[1:27:04] analysis and what type that you're trying to do before trying to go to say uh QGIS or some Esri ArcPro, etc. Um
[1:27:11] but, I will say that if you if you want to get really creative with making a polished professional map, Earth Engine
[1:27:18] is not necessarily the best for that. So, if you wanted to make something with a lot of detailed symbologies, changing
[1:27:24] uh you know, different fonts and colors, and moving text, annotating text, etc., you probably want will want to export
[1:27:32] that final image into your Google Drive as a say a GeoTIFF, and then bring it into a GIS of your of your choice.
[1:27:39] Everybody has their own. I like QGIS cuz it's, you know, open source. Some people prefer to work in ArcPro or ArcGIS, and
[1:27:46] those certainly have plenty of tools to to make the most polished final product. So, I would recommend doing that if you
[1:27:53] had to present this to say somebody in your department on your job, or if you had to submit this for, you know, a
[1:28:00] publication, I probably would bring it into a different application to polish it up. Thank you. Thank you, Shawn. Uh question 24. How do
[1:28:11] you collect the Gloria Western Erie data like TSS, chlorophyll A, and Secchi depth? Um I I'm not clear about the question. Do you Are
[1:28:22] you asking about what methods were used, or um Um it it it was collected by the Gloria
[1:28:30] team, uh and we shared the reference with you. Um Um the TSS and chlorophyll A were done were
[1:28:38] derived from lab analysis. Water samples were collected, and then lab analysis was done to to to come up with TSS and chlorophyll
[1:28:47] numbers. And Secchi depth was uh actually, an observer would go out and dip uh Secchi disk in the water, and the depth where
[1:28:58] it disappears, you can't see it, that's the depth reported. reported. So, So, uh if you go to the
[1:29:10] um um the the reference we provided for Gloria, the paper describes how these were collected. At also there is a CSV file that provides
[1:29:23] which methods were used if there were different methods used to derive these quantities. Question 25. I would guess that the
[1:29:33] average depth of a smaller lake is shallower than a larger lake. With the increasing resolution of satellite imagery, will there ever be a
[1:29:43] minimum size of dissolved lake based on its likely depth if bathymetry is unknown rather than its surface area and
[1:29:52] the special resolution of the satellite sensor. I think this is an excellent question. That it's not just the surface
[1:29:59] area, but it's the depth it should matter that so because you want to be away from the edge from the land effect
[1:30:07] and also the bottom reflectance can be avoided. So, um um I am not familiar with my head if that's how things have been
[1:30:19] done, but that's certainly a great suggestion and we can look into that. Question 26. How you How have you
[1:30:29] incorporated the field measurements in this GEE code? If not, could you please share GEE code that incorporates the
[1:30:36] field samples and then calculate water quality based on those samples which also provide the RMS or correlation between field
[1:30:45] measurements and measurements made by satellite data. So, Sean you may want to address that, but yes, you we
[1:30:55] Sean provided shapefile uh for Gloria in situ data. Sean, you want to address question 26? Uh yes, question 26. Uh
[1:31:04] corporate field Yes, so the the field measurements have been brought in. Uh they were brought in as an asset.
[1:31:10] Uh that asset has been shared with you. It's part of that script. So, if you go to the the imports at the very top of
[1:31:16] that script, you'll see that the you'll see that table uh which was imported as a as a shapefile is there. Now, if you
[1:31:23] wanted to work with any of the other data sets that weren't collocated for that specific date, that date being in
[1:31:30] the script July 15th, 2019, we did provide a CSV file which can also be found on the training page which has all
[1:31:38] of of uh different options for collocating Gloria data with Sentinel 2 data. So, you can do that and another option would
[1:31:46] be to go to the uh if you if you don't find the lake and the date within that
[1:31:51] CSV file that we provided on the training page, you can go to the Gloria website and you can try to find dates
[1:31:58] that where you can collocate with Landsat one of the Landsat missions or Sentinel 2 etc. Maybe a mission of your
[1:32:05] choice. So, those are different options, but the code is there if you wanted to to to do that. So, yeah, thanks.
[1:32:16] Question 27. If we have a list of sampling points from different lakes and the sampling is done in different years,
[1:32:25] how to automate this process? Is there a function written in JavaScript that does this as far as you know? And I think
[1:32:32] Sean has provided a link here. Uh Yes, I provided a link to a publication that does just that. They used Earth
[1:32:41] Engine to uh and and some algorithms to be able to collocate different satellite surface reflectance with in situ data on
[1:32:51] multiple dates over multiple lakes. So, I would refer that our participant who asked that question to the link that
[1:32:57] we've provided. Thanks. Question 28 is will it be necessary to use codes for cloud masking if we use
[1:33:06] cloud-free image instead of image with cloud coverage? Um so, if you use level two data like we
[1:33:14] have done here, um cloud cloud information that it picks each pixel is available. So, based on that you can
[1:33:23] mask it. So, um if if or you can at least make sure that it is cloud-free. Um if you are confident that there are
[1:33:33] no clouds in this scene and you want to use the data as is, then perhaps you can
[1:33:46] Question 29. My Google Earth Engine is not exporting anything to my Google Drive even after uncommenting the lines
[1:33:55] and making sure my accounts were the same for the GEE and Drive. What might be the cause for this and how
[1:34:03] can I resolve it? Yeah, I would say it I would answer this as it depends on how large the file is.
[1:34:11] If you're working with say Sentinel 2 data, these are very large files and especially if your domain, the area in
[1:34:17] which that you're trying to export from, if it's quite large and that file is large, this will take some time. So, I
[1:34:23] would uh one check the the status of the export just to make sure that it is indeed attempting to export. If if
[1:34:33] you're not even getting to that point, that could be something else in which case, you know, definitely reach out to
[1:34:37] me. I we've I've provided My name is Sean McCartney. I provided my contact information on the PowerPoint. So, you
[1:34:42] can certainly reach out to me. Please, when you do, explain the the issue and also send a link to your code. That will
[1:34:48] help me to troubleshoot your issue, but I think a lot of times the most common is if you're working with a large file,
[1:34:54] it just takes a long time for the export to go through to your Google Drive. So, I would give it time,
[1:34:59] you know, definitely at least 20 to 30 minutes and it could be even longer depending on the size of the file and
[1:35:04] definitely refresh often just to make sure that maybe sometimes if you're not refreshing, you might not see it within
[1:35:10] your drive. So, those were the first two things I would do and then if you're still having issues, say like tomorrow,
[1:35:16] if you're still not able to export it, please do send me an email with a link to your code. Thank you.
[1:35:21] Uh you may want to look at question 30 and 31 as well, Sean, if you don't mind.
[1:35:28] Great. Yes, so it's how can you get long longitude and latitude within the GEE code without getting from somewhere
[1:35:33] else? else? So, there's different ways to do this. Um in the Gloria files which we imported as assets, there are columns which have
[1:35:42] the latitude and longitude. So, if you're working with in situ data and you're bringing it in uh from, you know,
[1:35:48] as a shapefile or or somewhere else, there you should have ideally uh at least those columns that specify the
[1:35:56] locations for latitude and longitude. And those have been provided in all of the Gloria CSV files that we've been
[1:36:02] using in this training from part one till now. So, uh and then another way if you if you're
[1:36:07] just curious, if you just want to know, say a latitude and longitude in general within GEE, if you're if you're in the
[1:36:15] map pane, so below the um the code editing section on the top, if you go to the inspector tab which is on
[1:36:23] the upper right portion of Earth Engine and if you click on that tab and then if you click anywhere in the map pane, the
[1:36:29] first uh line that you'll see as a result will be the longitude and latitude. So, that's a quick way of
[1:36:35] investigating a specific location without having to, you know, use any code to query a file etc. That's just a
[1:36:42] quick way of inspecting where that location might be in terms of latitude and longitude. Thanks. So, next question is about QGIS. How can
[1:36:53] I get the Google satellite option? Um I know that there is plugin of quick map service. I think
[1:37:01] that has all the map options. So, you may need to install that plugin. Question 32. When you filter the image
[1:37:15] collection for a specific date, the optical images may have a high percentage of clouds, but our AOI might be cloud-free.
[1:37:26] So, when you uh apply a filter, it considers the total percentage for clouds in the whole image leaving out some of them that
[1:37:36] might be useful for AOI. Uh how can you apply filter cloudy granule considering not the entire optical image, but just the
[1:37:47] area of Um can you check that precisely without checking each date? Um so, it is not just AOI. When you
[1:37:59] cloud mask like we have done for Landsat 8 and Sentinel 2, it is the it each pixel
[1:38:07] pixel is is checked. Yes, of course, if you go to Earth Explorer, you can also see that
[1:38:12] entire image what part is um cloud-free and what's not. That's available, but in here, each pixel is
[1:38:20] masked as cloudy or not cloudy. So, you're not really um you when you look at your AOI, you are
[1:38:30] looking at each pixel within that and saying whether this is cloudy or not cloudy. Question 33. What about the solution
[1:38:43] using a geospatial model? We're only concentrating on monitoring. Uh what about an algorithm which can lead us to solve the problem within a
[1:38:54] remote sensing method? Um I'm not sure I clearly understand uh what that means. We're only concentrating on monitoring.
[1:39:05] What about an algorithm which can lead us to solve the problem within a remote sensing method. Uh I I'm sorry, but I'm not clear what
[1:39:16] the question is. Question 34, are there other sensors used to detect monitor algal bloom uh other than optical
[1:39:30] multispectral, hyperspectral. So, open-source uh satellite data that we have mentioned here, they are I used for uh monitoring algal bloom.
[1:39:42] There may be commercial optical uh data available, but these are the one these are open-source. There are satellites
[1:39:54] um um international satellites are there which we are not talking uh we have not included. These are European satellites
[1:40:02] are included, but there's also a Korean satellite, I think OG. Um Um So, there there are other international
[1:40:10] satellites that may be providing the same information. Question 35, is it possible to derive lake bathymetry using satellite-derived
[1:40:21] data? data? Uh so, there's a mission ICESat-2 that provides information about lake bathymetry based on lidar observation.
[1:40:48] So, two important notes here. We will post this question and answers on our website um in a week or so
[1:40:58] um um so that you can go back and look at those. those. Uh there will also be a survey sent to
[1:41:06] you, this end-of-training survey that um ARSET sends everyone your feedback. Um so, if you take time to complete the
[1:41:15] survey, it helps us. Um so, it's coming. It'll be sent to you via email. So, we we're almost out of time here,
[1:41:40] and we really want to thank you for attending this entire uh webinar series. Um Um And hopefully, we'll see you in our next
[1:41:49] training as well. Um you have our contact information, so uh please do not hesitate to contact. So, again on behalf of the entire ARSET
[1:42:00] team, we want to thank you. Um also want to thank the team here, uh especially my colleague Shawn McCartney,
[1:42:07] uh Selwyn Hudson-Odoi, Natasha Johnson, Griffin, Sarah Paciello, Jonathan O'Brien, um Brock Blaine, and Sue Aunty. All of them have helped
[1:42:19] in coordinating this webinar series and helped in many ways. So, thank you all ARSET team, and again, thank you all for
[1:42:27] attending this training.
