# Crop-Specific Time Series Analysis for Growth Monitoring, Part 4/4

`https://www.youtube.com/watch?v=wgTmTB3GlTI` · id 337 · 2:01:12 · module 21 — Mapping Crops and their Biophysical Characteristics with Polarimetric SAR and Optical Remote Sensing

[00:03] welcome to the part 4 of the training entitled mapping crops and the biophysical characteristic with polarimetric synthetic aperture radar
[00:12] and optical remote sensing my name is pierre de fournie professor at uclu in belgium and with my colleagues from the european
[00:21] space agency fabrizio ramoino we will have the pleasure to introduce you to the crop specific time series
[00:29] analysis for growth monitoring this session is the last one of a sequence of four sessions talking about subpolarimetry for
[00:41] agriculture practical on polarimetry and then introducing also the sunforstat open source toolbox today by the end of this training you
[00:53] will learn what is the time theory of satellite multispectral reflectance and how to prepare such a time series using snap
[01:02] toolbox toolbox you will learn how to retrieve the livery index from an optical time series and how to control the quality of this
[01:12] time series finally we will see how to explore it in a crop specific manner the lai time series at regional level
[01:24] as well as to assess the entire and intraparcel heterogeneity of all cornfield in a given region the session is sutured in three main
[01:37] parts parts first fabrizio mourinho will introduce you to the pre-processing of optical time series and on the retrieval of liver and
[01:47] re-wire index from the sentinel 2 using the snap toolbox i will then through a jupiter notebook introduce you to a practical exercise
[01:59] to analyze in a crop specific manner the livery index time series for growth monitoring monitoring we will then conclude with the section 4
[02:09] made of question and answer as you know since decades the ndvi the normalized difference vegetation index allowed to monitor
[02:23] the greenness of the vegetation along the season time theory analysis for crop growth monitoring is not new but today we
[02:33] rather prefer to look at crop traits or crop biophysical variables which are typically key indicator of the
[02:42] vegetation development for instance the livery index also called green area index is a key indicator to assess over time the
[02:54] development of the vegetation on the left side you can see a temporal profile along the season showing the green biomass increase
[03:05] with the development of the crop on the left side you can see for a given parcel the heterogeneity
[03:13] intraparcel level showing the different value for each pixel pixel of these parcels and the different value of lai in this
[03:22] case case unlike the ndvi the library index can be measured on the ground ground and is a meaningful variable for
[03:33] crop growth model for instance it is measured for instance from digital hemispherical photograph processed using a canary software which
[03:43] allow to estimate at the best possible delivery index which is observed on the ground when it comes to satellite remote
[03:56] sensing sensing there are two ways to estimate the liver index index on one side we can use empirical
[04:03] regression between ground observation and spectral signature from the satellite observation and to develop a local model which allowed to estimate
[04:16] from the satellite observation a live area index estimation at the opposite we have developed as a community
[04:27] an approach which is much more physically based providing a model which can be transferred from one place to
[04:34] another and which can be applied from one year to another to do so we base the approach on a radiative
[04:43] transfer model which mimic the physics of the electromagnetic properties of the different surface interacting with the sunlight
[04:56] for instance at least level the prospect radiative transfer model is a major major achievement to simulate the behavior of a leaf
[05:09] with regard to the sunlight the leaf is made of a structure of different layers and for each layers we have defined
[05:19] different different electromagnetic properties interacting with the sunlight for instance the layer with containing the chlorophylls will actually absorb a lot of the red
[05:33] light to do the photosynthesis while the structure of the mesophyll will interact with the near-infrared providing a large reflectance in the
[05:44] near-infrared bands the prospect bundle allowed to simulate the spectral signature of a leaf based on its biochemical component
[05:59] as well as based on this structure as you can understand this prospect model will be used to
[06:10] actually describe the behavior of each leaf of a macroscopic canopy indeed from this leaf model we will
[06:20] build a macroscopic model to mimic the behavior of a canopy with regard to the sunlight to do so we have to define
[06:32] crop structural parameters like the livery index the density of the plant the clumping effect describing the aggregation of the
[06:45] different leaf around that stamp and so on on in addition the optical properties of each of these components will be
[06:54] described based on the prospect additive model model by doing so we have prepared a numerical model of the vegetation at
[07:04] canopy level then we can eliminate the canopy using the sunlight and see how much of this sunlight is
[07:15] absorb or much of the sunlight is transmit and how much of this sunlight is reflected to the observing instrument
[07:25] this is done for the different wavelengths wavelengths providing a simulated reflectance for all the spectral bands which are typically observed by
[07:35] satellite observation additionally additionally we can play different sun angle sun zenith angle and sun azimut angle will define
[07:49] the bio bidirectional reflectance distribution which allow to mimic the surface reflectance for the different position of the sun
[08:01] similarly similarly the viewing geometry knowing the viewing angle of the instrument will define how this situation is observed by the remote
[08:15] sensing instrument therefore therefore we have on one side the live array index which allow to define the microscopic
[08:26] model model and on the other side we have simulated reflectance reflectance which can be used to retrieve the lai
[08:35] estimation to do so we will use a neural network to allow to move from the liver index to the reflectance level
[08:49] by doing so we will build a model which can relate the liver index value to the spectral signature in the different
[08:58] wavelengths wavelengths we will invert this model to make sure that we can do the opposite from the simulated reflectance value we
[09:07] can retrieve the li which was initially defined for the microscopic model on the upper corner corner you can see how well
[09:20] the model has been trained and how much the green area index which has been initially used in the model can be
[09:30] estimated from the simulated reflectance once this calibration has been completed successfully successfully we can then use this model which has
[09:42] been trained on a numerical model to be to be applied to the actual observation as recorded by the satellite
[09:54] therefore therefore we will invert this neuronal network model to retrieve the library index for each pixel which has been observed by the
[10:05] satellite satellite this allows to provide maps of library index from a multispectral observation dataset it still remains to validate this
[10:21] inversion of the model and to do so we will have a set of ground observations which are precisely measured on the
[10:29] ground ground and simultaneously observe from satellite the correlation between the green or the livery index estimation with the
[10:45] ground measure greenery index or liver index observation observation show that the performance is quite high with with a roon mean square error of
[10:55] dot dot seven seven this allow to use this model to convert any optical time series into a live area index temp series
[11:09] once you have the liver index time series you can analyze it to derive the vegetation productivity indeed the evolution of the library
[11:21] index index allow to depict a set of variables related to the vegetation productivity and to the vegetation phenology
[11:32] we can look at the start of the vegetation this would be the a value or the end of the
[11:39] growing cycle it would be the b value or the length which is the interval between both or the minimum which is the
[11:48] best oil lai value or the peak of the season which will be a variable that we will derive in the
[11:55] section 3 of this training the amplitude is the of course the range of the li value here corresponding to f
[12:05] and then we will use also in our section 3 exercise the large integrated value corresponding to the area under the curve of the la
[12:17] profile over the season this area under the curve here in grey and and blue correspond to the vegetation
[12:26] productivity productivity before looking at do this variable to relate to the crop growing cycle i will leave the floor to fabricio ram
[12:38] mouninho to introduce you to the pre-processing and the snap toolbox welcome everybody my name is fabrizio ramoino i work in isa esrin since 2011
[12:52] as optical and thermal data exploitation expert expert and i would like to present you how to process sentinel 2 data using giza snap
[13:00] software in order to retrieve biophysical variables a radiometric indices for vegetation to account for atmospheric effect we
[13:11] need to pre-process the optical data we need to apply atmospheric correction to take into account gases and particles
[13:18] present in the atmosphere that can affect the incoming radiation and we need to compensate this effect optical data pre-processing includes
[13:28] also cloud detection and cloud removal algorithms algorithms other pre-processing steps that may be needed to apply are the reprojection
[13:36] resampling and co-registration for further analysis we want to use a surface reflectance product in order to allow comparison between images allow
[13:50] repeatable measurements repeat a no physical unit for this reason to retrieve surface reflectance we need to add back the
[13:59] component lost in the atmosphere the other pre-processing steps are the reprojection if the input of the time
[14:10] series comes from several sources with different coordinate reference system the reprojection to a common coordinate reference system is needed
[14:20] resampling data coming from different sources could have different special resolution resolution therefore in this case before analyzing the time series a
[14:31] resample resample is necessary there are different methods to apply the sample the most common are the nearest neighbor the bilinear
[14:44] interpolation and cubic convolution co-registration in order to maximize the geolocation accuracies in time series analysis analysis deco registration is needed especially
[14:58] if you work with very high resolution and high resolution data why use time series a time series is
[15:08] defined as a set of satellite images taken over the same area of interest at different time and it can make use of different
[15:17] satellite sources to obtain a larger data series with short term interval time series of satellites observation offer opportunities for understanding
[15:28] how earth is changing for determining the causes of these changes changes and for predicting future changes now i would like to show you a great
[15:42] example of optical high resolution satellite which is the sentinel-2 copernicus optical high-resolution mission mission which is used for monitoring land and
[15:54] coastal regions on board it has a multi-spectral instrument which means that it register incoming radiation in multiple spectral
[16:03] bands bands we have 13 bands 4 bands at 10 meters blue green red and near infrared we have six bands a 20 meter resolution
[16:15] two bands in the short wave infrared three band in the red edge between red and near infrared and after we have a
[16:23] narrow band in the near infrared on top of it we have three bands at 60 meters meters and these bands are mainly used for the
[16:32] atmospheric and serious correction if you compare sentinel-2 to landsat the difference is bends that sentinel 2 operates in a
[16:43] red age but we missed the thermal bands which are present in landsat the special resolution of landsat is 30
[16:51] meters and the revisit time is 16 days the revisit time of sentinel 2 at the equator is 5 days with two satellites
[17:01] sentinel 2a and 2b that are in the same orbit here we can see the map of sentinel 2
[17:08] coverage coverage so practically you see that we have whole land and coastal areas covered by sentinel 2 systematic image acquisitions
[17:17] even the islands we have two levels of sentinel-2 product level 1c a level 2a distributed by 100
[17:28] kilometer by 100 kilometer clannuals which are the minimum indivisible parts of the product these products are distributed free of
[17:38] charge and free and open mode through copernicus openatcha sub level 1c is the top of atmosphere reflectance in cartographic geometry
[17:49] and level 2a is the bottom of atmosphere reflectance in cartographic geometry so the sentinel-2a level 2a data
[18:02] are atmospherically corrected the atmospheric correction is performed by by using a process so called sent to core
[18:10] this processor is the one used in the isa payload data ground segment but it's also available for the users
[18:19] the sent to car is distributed via step scientific toolbox exploitation platform and it can be used as plugin snap
[18:27] software or via command line standalone tool tool the output of sent to core is the bottom of atmosphere reflectance in
[18:36] cartographic geometry but also we have as output a scene classification map that contains basic land cover layers including clouds
[18:46] we have water vapor map and that also optical thickness map apart from sent to core sentinel-2 data
[18:54] can be atmospherically corrected using other different processor depending on your application for instance we have maya las rc i-core
[19:04] and cora and many other here we have the example of level 1c level 2a sentinel 2 data on the left you
[19:16] see level 1c product the top of atmosphere product and on the right you have the atmospherically corrected
[19:24] product level 2a you can see on the left the rgb natural color combination for level 1c and on
[19:32] the right the same rgb combination for level 2a after the atmospheric correction you have also as mentioned before the
[19:40] scenes classification map the water vapor map and optical thickness map sentient to data can be used for various
[19:54] applications like land cover classification classification agriculture forest and vegetation monitoring water quality coastal zone and batimetry regional to urban application geology
[20:07] and many other going a bit deeper into data processing and how multispectral data can be used to monitor vegetation and crops one of
[20:26] the main methods used for monitoring vegetation but also soil water are radiometric indices the radiometric indices are quantitative
[20:35] measures of features that are obtained directly by remote sensing data by combining several spectral bands if you want to retrieve information
[20:54] about physical features of canopy we can use so called biophysical variables the biophysical variables are not derived directly from remote sensing
[21:04] data but auxiliary information are needed needed there are several of them but the one which are more important for crops
[21:13] are for example lithari index fa par fractional vegetation cover chlorophyll content in the leaf and canopy water
[21:22] content content in the second part of the webinar i will show you how to retrieve these variables
[21:29] using isa snap software in this image you can see which biophysical variables can be used for monitoring
[21:40] monitoring certain features of crops for instance for monitoring phenology as a first choice you would use life era
[21:50] index and the secondary measures you could use fa power and def cover to complete information the same if you want to see the impact
[21:59] of pests on crop you also use leafy index now after this short optical remote sensing refresher we would like to
[22:10] present the isa snap software which can be very useful to process optical imagery but only optical even radar and
[22:18] thermal data snap is an acronym for sentinel application platform even if it can be used not only for sentinel but also for
[22:32] the data coming from other satellites the software is free at open source built in common java framework
[22:41] isn'app is also possible to include your own python plugin apart from the functionalities already provided in the
[22:48] software software it has an intuitive graphical user interface interface there is an online help with many tutorials and even a very active forum
[22:59] where you can discuss with user and also developers of snap it's possible to download snap software freely from step.isa.int
[23:12] here we have some statistics recently snap reached almost 960 000 downloads and on step we have more than one
[23:24] million five hundred thousand visited session since june 2015. step is the is a community platform where you can access the software
[23:34] download documentation and communicate with developers and expert users welcome to everybody to the second part of the webinar focused on the
[23:47] introduction to isa snap software and how to use it to pre-process and process sentinel-2 data in order to
[23:55] retrieve biophysical variables and radiometric indices for crop monitoring snap snap is the acronym for sentinel application platform
[24:06] platform but as already said before it's a multi-mission free ad open source software software in fact we have
[24:16] a lot of readers dedicated to optical sensors sensors sentinel 2 centimeter 3 but also is a tpm and commercial
[24:25] satellites satellites like landsat plyad rapidi and many other we have also read that's dedicated to some sensors
[24:40] sentinel one and heritage mission from isa like canvas at the ers and also tpm data like carlos pulsar and
[24:51] cosmos comment so let's go to open ascentia to product file file import import optical sensors sentinel 2
[25:06] level 2a there is the product we open and we select the xml file at the import product
[25:25] from the name of the product we can get some information like which satellite acquired the image in this case sentient way
[25:34] which processing level and in this case is level 2a and we have the date and time of the
[25:41] acquisition and after we have the sentient ii tile id that identify the tile of sentient two that are 100
[25:54] kilometer by 100 kilometer in utm wgs 84 coordinate reference system let's go inside the file we have the metadata
[26:08] where we can find information about the product general info geometric kim for auxiliary data info we have the sentinel 2 bands
[26:21] in level 2a we don't have band 10 because it's used only for atmospheric correction purposes it is not in the output of the level 2a
[26:31] processor sent to call we have the 10 meters bands then 2 three four four and eight we have the 20 meters band that are the
[26:44] red age bands five six and seven the narrow band in the near infrared band 8a and two swear bands
[26:55] band 11 and band 12 that are very sensitive to hot surfaces the last bands of the products are the
[27:07] one related to the scene classification map map is a set of masks reporting basic land cover layers like vegetated no vegetated
[27:17] water snow and ice but also it contains marks related to cloud probability cloud shadow think clouds clouds classified pixel
[27:29] no data pixel and saturated pixel as well well you can use this information to detect remove no usable pixels the
[27:40] one that you don't want to use to use in your processing now we can open the product we can
[27:49] select the product right click and open rgb image window we have different rgb image combination for sentinel 2
[28:12] natural color false color infrared atmospheric penetration we are going to use the natural color for the red we have band 4 for the green
[28:25] band 3 and 4 blue band 2. this is a sentinel-2 product it's 100 kilometer by 100 kilometer
[28:43] on bottom right of the screen we have the pixel position x and y and the coordinates lat long for each
[28:51] pixel pixel on the left part of the screen we have the navigation window where we can move
[29:02] the visualized window we have the color manipulation tool using the it we can stretch the histogram histogram we have the word view
[29:16] that showed the footprint of the open product product in this case we selected selected a product over belgium
[29:34] on top bar we have several tools we have the analysis tools where we you can find the correlative
[29:44] plot scatter plot profile plot histogram statistics statistics we have layer manager and editor vector manager and editor
[29:57] raster functionalities badmat using it the user can edit his own equation and create a new band in
[30:04] the product dm tools we have geometric where there are some pre-processing tools like reprojection resampling co-registration collocation
[30:18] we have mask tools data conversion image analysis classification processes unsupervised and supervised classification classification with the most common classifiers
[30:32] segmentation segmentation processor and export processor here we have the tools and functionalities dedicated to optical we have several processors for sentinel
[30:48] 2 2 tree tree the pre-processing tools and the thematic land cover land processing biophysical processor to retrieve biophysical variables from
[31:02] sentinel and landsat 8 3 families of radiometric indices one for soil the other for vegetation the last one
[31:12] for water we have the sanity that is a plug-in for to calculate the evo evapotranspiration from sentient to
[31:27] ascent in a tree and we have the forest cover change processor processor we have also tools for other
[31:37] for interferometry and other cell application application under tools we have the graph builder use it to generate and build your own processing
[31:47] chain to run it on a single image or using it on a batch processing tool to run it on a stack of images
[31:57] we have the plugin manager to manage or install all the available plugins for snap including your own one
[32:07] at the end we have window on the right part of the screen we have the product library
[32:18] using using it you can download directly the data there are several repositories from where to download the data center
[32:28] one sent into a center tree we have the layer manager you can import your layers just clicking
[32:37] on the plus sign here here and you as you can see several data formats are hallowed ship file rgb image from file and
[32:52] all that we have the mask manager here you have all the mask included in the product and you can create your mask
[33:03] clicking on the function icon and edit your own expression so now let's go to the first step of the
[33:17] pre-processing the resampling i said before in sentient 2 we have bands the special resolution and if you
[33:25] want to combine or work with bands a different special resolution you need to resample them click raster
[33:34] geometric geometric resampling and we start to set up the module here we have our input and the resampling parameter
[33:50] if you don't know how to set up these parameters parameters for each of this num module we have the help in which you can find a
[34:00] brief description of the algorithm of the tool and for some of them you will find how to set up
[34:08] properly the parameters for assembling we have three options to resample the product by reference band snap takes a special resolution the
[34:31] resolution of the reference band if you want to resemble a telemeter you have to select turbine 2 3 4 or 8
[34:42] by target width and 8 and by pixel resolution if you want to resemble a 10 meter [Music]
[34:53] [Music] you you you should insert 10 meter here and you can define the upsampling method we leave nearest neighbor
[35:13] we don't save the product in order to save time and the default output for snap is bimd
[35:20] map format we click or run and the product has been generated the next step is daily projection
[35:40] so we select the second product raster geometric reprojection we we don't select save as in the reprojection parameter we have a
[35:56] lot of coordinate reference system in this case we want to reproject the sentient to data from utm wgs84 to
[36:06] geographic latlan wgs84 wgs84 and preserve the resolution we run and the product has been displayed here the next step is the subset in order to
[36:27] speed up the processing we are going to subset subset the image over our area of interest so select the last product raster and
[36:37] subset we have the window so you can resize to subset the product you can resize the window to subset the
[36:48] product product or you can subset by pixel coordinate or gel coordinates in this case we use pixel coordinate
[37:00] from pixel 2000 and from pixel 8004 8004 y to 5000 and 9 000. there is the possibility also to
[37:26] resize the number of the bands of your product product select one in this case i'm going to
[37:32] select all the bands of sentinel 2 plus some additional bands quality arrows optical thin fast water vapor
[37:48] and zenit and that's what mean sun zenith azimuth okay this is our subset as done before we click
[38:16] on with the right button of the mouse on the product open rgb image window with the new
[38:35] coordinate reference system geographical atlanta is possible to export the image for google earth as came that so right
[38:46] click on the image and export view as google earth kmz now i'm going to show you how to use
[38:58] bed matt tool so select the last product generated raster band mat we are going to create the ndvi
[39:10] [Music] [Music] we unselect virtual and edit expression the ndvi is defined as near infrared minus red band
[39:44] divided by near infrared plus red band okay this is our ndvi and this band has been attached to
[40:07] the product here here here we have our band using the color manipulation tool we can stretch the histogram
[40:21] between between 0 0 and 1 [Music] [Music] and we can change the color we put green for the maximum orange for the medium
[40:40] value value and blue for the minimum now we are going to split the the screen using this button tile
[40:53] horizontally horizontally and here we have the two images one the natural color rgb combination and the other the ndvi
[41:08] we linked even the cursor so you can observe observe that that over bad soil we have low values of ndvi and over
[41:19] green areas we have i values of ndvi now we are going to calculate the the life era index the biophysical variables
[41:36] so we select the product optical optical thematic land processing biophysical processor processor by a physical processor sent here to a
[41:49] 10 meters the processing parameters is different index fapr and and fvc we run okay okay and the new product
[42:08] it's touched here we are going to open the life index okay we do the same color manipulation as
[42:30] done for the ndvi green for maximum orange for medium and blue for the minimum and we can observe that life index and
[42:41] ndvi i quite are quite well correlated each other so over green area we can over green area we have high values of
[42:56] ndvi and the referral index okay now i will show you how to build our processing chain using the graph
[43:06] builder so we select the first product the original one tools tools graph builder by default you have two initial blocks
[43:26] read and write right click on the dashboard and you can add all the modules of snap the first one is the resampling
[43:43] after the project then the subset and after the bend mats so so we have the raster raster geometric
[43:57] geometric resemble then the reproject after subset then we have the biophysical variables biophysical operator optical thematic land processing
[44:29] here we have the bend mat to calculate the ndvi and and at the end we have the bad merge
[44:44] in order to merge the original bands with the biophysical variables and the the ndvi band we connect the graph
[45:14] so as done before we have to set up all the parameters so the resampling is 10 meters
[45:24] and after we have the projection that is fine as it is the subset we select only the
[45:35] first bands and here the coordinate to subset the image [Music] by physical parameters we are going to
[46:05] calculate all the biophysical variables bad math [Music] we use the same expression as done before band-aid minus band four divided by
[46:32] pen date plus band four okay okay after we have the band merge and the right block i forgot to put the
[47:02] even the subset on bank merge okay now we have all the bands the right you can run
[47:12] the graph on the single image or you can save the graph i already saved here and use on batch processing
[47:27] save this one okay close everything tools batch processing you can add all your images here i will add
[47:47] directly the zip files okay okay all the files have been added here and after you can load your graph
[48:04] here it is so we have all the sentinel 2 data is input we have should be 18
[48:33] now 17 files as input and we have all the blocks blocks of our graph with the parameters that we set up
[48:45] before using this tool is possible to apply your processing chain on a stack of sentinel to images
[48:57] is quite fast and it will help you with though to apply the same processing chain at each
[49:06] file i would like to thank you for your attention attention and i'll leave you with pierre defourny
[49:20] thanks to fabrizio you know how to produce live array index image using the snap software the section three
[49:30] will now focus on the use of a jupiter notebook to exploit this la-i-time series corresponding to the growing season of
[49:40] the maze crop we will have three step to follow the first step correspond to a quality control process and aim to detect any
[49:51] image of the time series showing outliers or marginal behavior it allows to remove the suspicious image from the lai time series before any crop
[50:03] growth analysis the second step investigate the respective temple profile of each corn field of the study area
[50:14] in order to classify their different growing patterns for the given season finally finally the third step will assess the inter-field and the
[50:29] intra-filled heterogeneity for the maize crop all these results are typically very useful useful for operational crop monitoring
[50:41] at the regional level are also of great interest for the farmers to improve their agricultural practices before starting the analysis with the
[50:58] jupiter notebook the environment has to be set up and the different packages have to be installed to run
[51:07] interactively the jupiter notebook a jupiter notebook is an open source web-based computer rational environment to develop application
[51:19] to create and share documents that contain live code processing workflow and visualization of the result which are displayed within
[51:31] the document based on this jupiter notebook you will be able to run this training exercise on your local computer
[51:44] and later on you could also modify the code code to repeat this exercise from another data set
[51:52] acquire over your own area of interest first to install the environment required to run this jupyter notebook
[52:05] please follow closely the instructions include in the readme file or or report it at the beginning of the
[52:15] jupyter notebook here as you can see there are 11 open source library that need to be installed
[52:26] to enjoy the interactivity of this notebook notebook beyond geopanda the plotline library provides interactive tools to to handle the graph
[52:43] and the volume library allow it to interact with the visualization of spatial data to avoid any conflict and bugs
[52:58] a yml file has been prepared to install all the required packages in an automated manner over a new empty environment
[53:14] this yml file has been provided separately separately once the yml file has been has been successfully run
[53:26] all the packages are expected to be installed successfully and then you can still you still have to import
[53:38] all these packages in the environment of the jupiter notebook this is the name of the ym yml file
[53:52] and this is the importation of the packages packages into the jupyter notebook you are all set to start with the
[54:03] importation importation of the data set to be used in this notebook all the sentinel 2 images has been
[54:14] pre-processed and transformed into lai index index using the snap software as explained in the previous section however
[54:28] however if by accident you don't have access to these sentinel 2 lai images you still may use the so-called backup
[54:39] training data to continue with this jupyter notebook anyway anyway you will have to edit one element in
[54:51] this jupyter notebook this is to specify the folder containing this data make sure that you specify the work path
[55:04] in order to allow the jupiter notebook to find where you put the data set to be used
[55:16] if if the work path has been set properly the jupiter notebook will find out that it contain 28 image for the rain balance
[55:28] 28 image for the green band and 28 image for the blue band we will add also the near-infrared bands
[55:37] here that we will not use in this context context in addition two shape files are also provided
[55:47] provided one corresponds to the delineation of all the fields corresponding to maze in the study area in addition
[55:57] another file is provided to to define the invariant surface that will be used in the next step
[56:13] let's start with the quality control process process indeed we want to detect any outlier before the crop growth analysis based on
[56:23] the time series to do so we propose to use the invariant target approach approach this means that we will look at the time
[56:35] series series specifically specifically on environ targets which correspond to very stable surface not expected to change along the
[56:46] season season that kind of target can be fine in most landscape landscape in our case we can look at the landscape
[56:56] and figure out what are the invariant targets here these are surfaces that will not change along the season
[57:08] a very first one is the airport strip that can be delineated delineated in a q gis software for instance
[57:18] in order to provide a polygon for the analysis analysis we can also the the warehouse airport and more specifically the roof of the
[57:31] warehouse airport which will be also very stable along the season in addition we may look for dark targets which are
[57:44] also invariant like the central part of a big river as we do have even grain coniferous forest in our area
[57:58] we can also delineate a polygon corresponding to this forest stand finally it may be good to have a bright
[58:07] surface and as we can find a query in our area we will delineate another polygon polygon corresponding to very bare bright soil
[58:21] this this allows to rely on five different land cover which are fully invariant or expected to be so
[58:35] all this polygon has been delineated in a regular gis software and has been imported in the jupyter notebook here
[58:48] what is important to know is to mention that the quality control process will not be applied on the li-time
[58:59] series series because because the quality process will be much more efficient efficient by looking at the surface reflectance
[59:08] which are very sensitive to the residual atmospheric perturbation the residual cloud or the residual has indeed indeed we want to be
[59:23] as sensitive as possible to this artifact that we don't want to have in our time sorry for the analysis
[59:33] as you know when we built a time series from a full set of imagery we will have close free images
[59:43] like the one displayed here in the natural color composite the the green green the red green blue band
[59:54] composite composite showing showing all the surface without any cloud without any shadows at the opposite any time series will also include
[1:00:08] images images with cloud cover showing also cloud shadows and maybe hazes indeed indeed the combination of these cloud cover
[1:00:21] images and code free images will be part of the regular time series to simplify our process here
[1:00:32] we will select only the fully cloud-free images for our analysis however however we have prepared an optional part in the
[1:00:43] jupyter notebook to allow you to deal with this cloud cover image as you know centocore is the
[1:00:55] algorithm selected by default to process the sentinel to imagery send to core transform the radiance image image into
[1:01:08] into surface reflectance image and provide a set of masks which will be very useful for a time series analysis
[1:01:17] indeed indeed the center core in addition to the atmospheric correction and the radiometric calibration will also classify
[1:01:28] according to a dozen of classes the different pixels these classes will be used as mask to remove from our time series
[1:01:41] the cloud the cloud shadows the snow and the thin series as you can see here all these
[1:01:50] classes are not usable in the time series series similarly the cloud shadow will be masked masked as well as a defective pixel or the
[1:02:00] saturated one and no data pixel as you can see in the code here all these numbers allow to use this mask
[1:02:13] and to keep only the valid value in the time series again in our case as we don't have any
[1:02:27] image which are not cloud free we don't need to apply that in in in the time series
[1:02:37] let's leave a look at these equal three images here we will use a volume library to display our surface reflectance
[1:02:47] in the natural color composite actually we will use separately the different bands which are typically used in the natural composite
[1:03:02] this allows us to verify that the the red bun correspond to a very bright image in the beginning of the season
[1:03:14] which is quite logical because most of the soil are bare and and only some parcels are absorbing the red light
[1:03:25] to do the photosynthesis these correspond to the meadows to the permanent meadows as well as to the winter cereals
[1:03:37] the spring crops are corresponding to bersole which appear here very very bright when we look at the green band
[1:03:50] the contrast is a bit less mark but we can still see these differences looking at the blue band
[1:04:07] we can see a similar contrast as in the red band as the chlorophyll and the other pigment
[1:04:17] are absorbing the blue light as well for the photons and photosynthesis based on these images and we have seen
[1:04:32] only one of them we will compute the time series for our invariant target to do so we need to select each of the each
[1:04:44] polygon corresponding to each invariant target target and to compute the mean reflectance value for each debt and each band
[1:04:56] this will allow us to look at the viability over time of this invariant target but before that we need to count the number of
[1:05:10] non-valid non-valid pixels pixels which are included in the polygons indeed indeed this non-valid pixel value could influence the mean that we just
[1:05:23] compute compute and we want to check that there is none of them included in the polygon as you can see here
[1:05:33] known on there is there are no zero non-valid non-valid value pixel corresponding to any date out of the 29 28
[1:05:48] image image forming the time series therefore this means that we can use the mean we just compute
[1:05:57] to assess the stability of the invariant target let's plot this surface reflectance time series for the different bands
[1:06:13] here is a time series for the blue band for the five different invariant target you can see here with the dot the
[1:06:25] different value corresponding to the different dates and the green line corresponding to the median value of all these dots
[1:06:37] as you can see here the invariant target corresponding to the evergreen coniferous forest is very very stable
[1:06:47] showing a high value high reflectance value in the blue band but very very stable over time to assess
[1:06:59] the stability of this invariant target and therefore the quality the consistency of the time series we have set a threshold
[1:07:10] of dot 0 1 reflectance value as a tolerance to deviate from the median median and therefore we add this 0.01
[1:07:22] reflectance value to the median to have the upper limit and we subtract dot one zero one one value
[1:07:36] value to the median to get the lower limit as you can see the water is also a very stable
[1:07:46] surface surface which which shows no variability over time when we look at the quarry or at the
[1:07:56] airport rack we see a much higher viability which still remain within the interval between the lower limit and the upper limit of our
[1:08:07] tolerance tolerance when it comes to the warehouse roof we observe a very stable signal signal except for one image
[1:08:22] which is the 21st of november which is getting close to the limit we have set and then as a result
[1:08:33] none of these debts seems to be corrupted corrupted or suspicious and therefore they all qualify to be part of the time
[1:08:44] series series let's have a look at the grid ban now and we can carry on carry out the same
[1:08:52] analysis analysis and similarly we can see that the invariant target corresponding to the pine tree and the water
[1:09:01] are very stable while the all three others are much more variable and similarly we have a high value for the 21st of
[1:09:13] november november for the warehouse roof which seems to be a very special date indeed for the airport track this value
[1:09:24] seems a bit higher as well it worth to mention that this this interval are bigger when the reflectance value are much
[1:09:35] lower than the other invariant target when it comes to the red bands we can do the same analysis
[1:09:49] and see that the 0.3 environ target is still very stable as the water is but for the three others the viability
[1:10:00] is getting bigger and even for the warehouse roof we have an outlier exceeding the upper limit of our
[1:10:11] tolerance tolerance this means that this debt could be considered as an outlier and could be removed or should be
[1:10:20] removed for our time series analysis we say could be removed because we fully understand that this depend of the
[1:10:31] threshold that we have set to define the interval of the tolerance but here as we set this tolerance close to the
[1:10:40] level of the radiometric performance of the instrument instrument we consider that this this dead need to be removed
[1:10:50] therefore therefore the 21st of november 2020 has been detected as an outlier and remove from the time series
[1:11:01] in the following exercise we will therefore use only 27 images for the time series once the quality control
[1:11:15] is completed we feel counterfeit comfortable with our lai time series and we can go to the crop growth analysis
[1:11:28] first let's visualize the extent of the area of interest including all the parcels cultivated with mace we can count this parcel and we can
[1:11:43] figure out that there are up to 614 parcels cultivated by maze for maze we can look at the lai time series
[1:11:58] for this area corresponding to this extent and we can see that when we look at the first debt the date
[1:12:08] corresponding to the 1st of june we have very dark value mostly with some very bright parcels parcels the price person corresponds to high lai
[1:12:21] value value this ilai value are most probably winter serial parcels and maybe also some permanent medals when we go
[1:12:35] into this growing season we get to the 31st of july and there are many more bright parcels
[1:12:46] and and [Music] [Music] some motors are getting dark indeed the winter cereal has been harvested and therefore the lai has been
[1:12:59] lower to zero value probably while the spring crop has been planted in early june and are growing
[1:13:10] at that level for the lai when it comes to late september or mid-september we have a a higher value of lai
[1:13:24] which correspond actually to the full development of the spring crop and of course the harvest of the
[1:13:33] winter cold all these value allow us to follow the season as the growing season is very variable according to the
[1:13:45] different crop calendar of course we have here only three of these la value while there are 27 as you
[1:13:56] know another way to visualize these lai time series is to build a lai multi-temporal color composite using the same dates
[1:14:12] the 1st of june in the red ban the 31st of july in the green ban and the 14th of september in the blue band
[1:14:20] we can display an image showing showing a very contrasted parcel parcel patterns patterns indeed indeed the red
[1:14:32] the red parcel are most probably corresponding to the winter serial which are fully developed in june therefore very reddish in june
[1:14:44] and and will be arrested in in july or early august with a very innocent pattern already in the 31st of july
[1:14:56] in a birth soil on the 14th of september the parcel which are over orange color are most probably a mixture
[1:15:08] of the red and the green which correspond to the spring crops crops the spring crop has been planted in april or early june
[1:15:20] in in may or early june and is developed probably to a certain level on the first of june
[1:15:29] and then are fully developed on the 31st of july but most probably senescent already by mid-september mid-september indeed
[1:15:40] indeed this 20-20 years has been a very very dry year providing or impacting the crop very significantly at the end of the season
[1:15:53] the blue correspond to maybe very dry parcels parcels which were planted but did not successfully develop and therefore
[1:16:07] probably lately so with a different crop let's have a look now on the parcel of mace as mentioned before
[1:16:22] there is 614 maze parcel in the area but for the sake of simplicity and visualization we will handle only
[1:16:34] 20 of them here and we will select 123 parcels for our analysis they are all displayed here
[1:16:47] and we will use them for the time series analysis first first we need to compute the li value at the
[1:16:59] parcel level for each date of the time series this will be done through the code display here
[1:17:07] and as all the pixels a valid value we can use all the pixel li value to compute the mean li for each
[1:17:19] date of the time series we will store this into a vector file and we will store this into
[1:17:28] a table that we call data frame this table are displayed here below and this table corresponds to the 27
[1:17:41] dates dates and of course 123 123 colon correspond to the 123 persons these li mean value are the
[1:17:57] information that we want to handle of course it will be much easier to display them in a very systematic way
[1:18:10] and therefore we can use this this plotline plotline interface interface to look at the different profile profile as you can see here in dark
[1:18:26] in black you have the mean profile corresponding to the mint value for each date of the time series
[1:18:36] we can also compute the 25 percentile corresponding to the first quarter of the value of the distribution for each date and
[1:18:48] similarly we can look at the 75 percentile percentile what you can see here is a very large dispersion of the profile
[1:19:00] which depicts actually much more than mace parcels indeed indeed before before may may it's probably not at all
[1:19:14] the the maize crop which developed this la value but rather the winter cover crop which are not destroyed
[1:19:25] before before the the the spring similarly after the season the growing season of maize some some cover crop has been planted right away
[1:19:38] and develop a new peak of lai before the end of the year therefore therefore it sounds meaningful to select
[1:19:48] strictly the growing season corresponding to the growth of the maze this is the reason why we will start the
[1:19:57] growing season on the 1st of may and we will stop the growing season at the end of the curve corresponding here
[1:20:07] to the 15th of november therefore therefore let's focus specifically on the corn growth cycle we will cut
[1:20:19] the profile according to this starting and add date and death of the growing cycle this allows us to
[1:20:32] build a new table and to display a new distribution of the parcels as you can see here we can see that the
[1:20:43] percentile and the mean are still available available but we can look also at all the other parcels
[1:20:57] some parcels behave very strangely as you can see here and some other bf blackberry expectatively we can select
[1:21:10] specific specific specif specif specifically specifically some parcels when we click twice and there is a single parcel which can
[1:21:22] be displayed this profile is a typical profile profile with a planting date probably probably current may a full development
[1:21:35] starting in june reaching the peak by august and the citizens starting during september and then harvesting harvesting take place
[1:21:48] at a different time it could be in november november we can look at other crop and of course as i mentioned it was a
[1:21:58] very dry season some maize crop did not develop as expected and this crop seems to correspond to very very poor
[1:22:09] patterns patterns of course the crop development seems very low compared to others we can look at an
[1:22:20] even better crop with a peak of li which is very very high like five or six while other crop have a lower
[1:22:32] peak and senescence which is earlier most probably because of the soil water capacity with with lower lower water available for the crop and
[1:22:46] therefore therefore a reduction of the development of the crop and a shortening of the crop cycle in the worst case probably on soil which
[1:22:59] have a very little water capacity we will have a very small development for this 20-20 years even worse
[1:23:13] some person which seems and were declared as corn persons seems to be actually underdeveloped during the the may cycle
[1:23:25] and then probably plant it with another crop before the end of the growing season and as you can see we can display many
[1:23:36] of this profile some are very similar some are very different different all of them correspond to a different
[1:23:44] story what is important here is to be able to interact with a different profile and to understand the behavior of each of these
[1:24:08] parcels once once it is done we would like to to go beyond this qualitative analysis and to use a
[1:24:19] quantitative matrix to compare the different temporal profile to do so we propose to use the area under the lai curve
[1:24:32] which can be computed by the integration of the area under the curve and provide a single matrix
[1:24:40] which depicts actually the vegetation productivity productivity indeed this corresponds to the photosynthetic activity and the production of green materials all over
[1:24:52] the season therefore we will have this computation of the area under the curve curve which provide this kind of information for each parcel
[1:25:07] we can read here in the table the different different value of lai integrated under the curve we can also display the distribution of
[1:25:20] the 123 parcels parcels according to their area under the curve as you can see there is a very large
[1:25:29] dispersion between the different parcels and the mean is fit around 15. furthermore furthermore we could consider that
[1:25:43] that we want to classify all this temple profile according to quantiles meaning that we can classify into five
[1:25:54] categories categories the different temporal profiles as we have seen above in the graph there are many curves
[1:26:05] which are very low and that we don't want to to display anymore anymore therefore therefore we will cut
[1:26:14] the analysis and the display at the percentile 15 considering that below the percentile 15 we are not dealing with mace for this
[1:26:26] growing cycle therefore we will have five class one one from 15 to 20 percentile percentile the second one from 40 to 60 and so on
[1:26:41] this allows us to define five class corresponding to five five quality quality of growing season five five productivity of the vegetation actually
[1:26:58] we will display all these according to the plot using the different color listed here when it comes to the colors we can see
[1:27:10] that of course the the very very good growth cycle are displayed in blue here the green corresponds to the
[1:27:21] very good the good one the the orange correspond to the medium one the yellow one and so on
[1:27:31] till the red one this allow to label the different profile according to this category of quality of growing
[1:27:44] season season we can join this information into the table table and therefore all the person's number will have not only the polygon but also
[1:27:57] the quality attribute related to the parcels parcels this can be exported into a shapefile to be further explored in a qgis or a
[1:28:11] gis software in addition once we have let's say carry on the analysis at the regional level for the different
[1:28:26] temple profile of the corn we may look at the intra-filled viability viability the intra-field viability is more
[1:28:35] important for the farmer to assess the the the way it could improve his productivity productivity by tuning
[1:28:45] according to precision agriculture the different management management within the parcels to do so actually we will now
[1:28:57] look at the different categories that we label just above and pick three parcels for the three extreme category
[1:29:09] for the very low pass very low quality parcels we will pick three parcels for the very good quality good
[1:29:17] condition condition we will pick three parcels and for the intermediate level we'll pick three persons as well
[1:29:26] we will compute them and again display them in a way that we can look at the intraparcel variability
[1:29:35] this is what we can do here and as you can see on the right side the very high
[1:29:42] quality or very good condition of mace for this 2020 season season show these images corresponding to the
[1:29:54] peak of lai indeed indeed all these plots has been selected according to the profile of the image
[1:30:04] of the parcels and selecting the peak lai to display the corresponding image here at the peak lai this is the maximum
[1:30:15] development of the vegetation we could expect a minimum metallogenity this is what we can see when we look at the
[1:30:25] favorable growing condition for the what we label very high quality parcels parcels we see that the la reach
[1:30:35] up to five or six value for all the parcels in a rather homogeneous way when it comes to the
[1:30:45] medium quality persons where the growing cycle was only intermediate we can see that the li value at the peak
[1:30:55] of the temporal profile are much lower around four and actually also show that at the border of these parcels
[1:31:07] we have mixer or we have impact of the border of the parcels which reduce the productivity of the vegetation
[1:31:20] when we look at this class these parcels we could consider that it would be very meaningful to have
[1:31:28] a buffer around these parcels before we compute the mean li value however however when we look at the other parcels
[1:31:38] which are of high quality it seems that this buffer is not that important important therefore depending of the use depending
[1:31:48] on what we look at it may be important and relevant to apply a buffer around the boundaries of each parcels before
[1:31:58] computing the mean lai value when it comes to the very low quality parcels parcels we see that not only the
[1:32:11] peak lei value is much lower can be below 3 but we see also a much higher heterogeneity
[1:32:21] heterogeneity at the peak lei value this heterogeneity as the one observed here is probably due to the sole properties
[1:32:33] as we can see a gradient which corresponds probably to different texture or different saltwater capacity which has been very
[1:32:44] well marked due to the dry condition of the 2020 season season on these parcels it seems that we have two historical
[1:32:54] parcels which has been merged into a single one but because of their previous rotation rotation they seems to behave differently with a
[1:33:05] less productive area in the northern part and more productive in the southern part what is important is we can move from
[1:33:15] these parcels to of course the profile to better understand how this person develop along the season we took the number
[1:33:29] and we know that we are looking at the fourth fourth fourth fourth four 4341 and we will look to that
[1:33:47] which is a blue one and which is this one therefore this is the parcel that we have been
[1:34:00] looking at this is a very productive person's where we can see a very good start of the
[1:34:06] season season a very high peak of lai but most importantly a very long season therefore the water remains available
[1:34:16] and this senescence has been very very low low very slow we can look at the intermediate parcel
[1:34:27] which is a 16 and should be in the yellow and this is the second parcel corresponding to the
[1:34:45] middle middle or the intermediate label label where we can see that the the start of the season has been very similar
[1:34:55] the peak of the growing season is not that high but but the senescence has been also much
[1:35:04] earlier than the other one maybe because of the different rainfall regime or maybe due to the soul condition as i mentioned before
[1:35:20] the last person will be in the reddish one and this is the the heterogeneous parcel that we
[1:35:31] have looked at where we have a very contrasted value of lai lai which seems to to have started a bit
[1:35:40] later later with a lower lei peak value but most importantly probably a harvest which took place by mid-september
[1:35:50] and reduce actually the capacity of crop development development over the the lead season what is important is to be able to
[1:36:03] interact between the temple profile and the special distribution of this la value value to better understand the reason of this
[1:36:13] heterogeneity heterogeneity and the reason or the interaction between the the crop management and the development of the lai curve along the season
[1:36:26] i hope this introduce you to the way we can interpret from a agrocultural point of view view the different remote sensing product
[1:36:37] related to the lai time series thank you for your attention thank you pierre fabrizio for the wonderful presentations and
[1:36:49] demonstrations demonstrations below is the contact information for fabrizio ramoino and dr pierre de fournie along with links to the training
[1:36:58] web page and esa's eo for society website as a reminder there will be one homework assignment for all four parts of the
[1:37:09] training training answers must be submitted via google form form the homework assignment can be accessed from the training page on the rset
[1:37:17] website with a due date of may 17th a certificate of completion will be awarded to those who attend all live
[1:37:26] webinars and complete the homework assignment by the deadline you will receive a certificate approximately two months after the
[1:37:35] completion of the course from marines martin we will now transition to the question and answer session of today's training
[1:37:46] please enter your questions in the question and answer box and we will get to them in the order they were received
[1:37:53] we will post the question and answer document to the training website by next week week thank you
[1:38:10] we've been getting a lot of terrific questions so for those that are attending please do continue to post
[1:38:16] your questions in the question and answer box so why don't we jump right into it question number one
[1:38:23] do send to correct 2.5 and 2.8 both reduce the spatial resolution example given each band to 60 meters if working
[1:38:33] in command line code without any parameters how to work with sent to core in offline mode and whoever answered that please feel
[1:38:48] free to unmute and you can answer would you like to answer this one otherwise i can do it
[1:39:06] yes the user can define the resolution of the old button as you know there's three special resolution in the sentinel
[1:39:14] 2 imagery and and you will be able to select your output special resolution using the the the option that you can set in into
[1:39:25] the center core software okay thank you pierre uh question number two looks like it has to do with uh from
[1:39:34] last week's send for stat so how can i download the send for stat application to be able to practice
[1:39:43] send for start is currently not available as it is now running on a beta version and will be officially released
[1:39:50] by early july 2022 therefore today if you want to train the best is to use the centroidal system
[1:39:59] which can be download from the website which is displayed here and which is available and related to the send for start system
[1:40:08] sent to agree is a predecessor of the central start system thank you question number three is a
[1:40:16] windows operating system compatible compatible with using send for stat unfortunately at this point sanfordsat can only be installed in centos 7
[1:40:30] which is a linux operating system this is because the center 7 is very stable and very compatible with large scale
[1:40:39] processing processing and also this is an open source software like the send for start is and and the intention was to remain in open
[1:40:49] source system maybe in the future it will be translated into a windows version but this is not for seen today
[1:41:00] question four to use send force stat do i need a computer now actually you you don't need a special computer to
[1:41:17] run send for start however you need to have a compatible computer computer i mean a computer which is compatible
[1:41:27] with the size of the area you want to process and the duration of the season you want the process
[1:41:34] therefore this is more related to the volume of the data to process than to the software itself
[1:41:42] terrific question number five can you please explain how the 21st of november 2020 was identified as the outlier
[1:41:51] during the practical session to set an image at the node layer we have defined a threshold and the red
[1:42:03] reflectance or one of the environment that we have select is identified as an outlier outlier as on this date the red reflectance
[1:42:13] deviates deviates more than the set threshold meaning that it deviates more than the median plus a tolerance factor of 0.01
[1:42:24] we can say that this threshold is rather strict strict this is the maximum deviation that we select to reject an image
[1:42:32] and it is related to the radiometric calibration performance of distance i keep here question number six regarding the invariance aren't the
[1:42:44] titles shuffled the reflectance time series seems high for pines and low for water and airport track i would have expected the opposite
[1:42:54] this is an excellent question and we are currently checking that this could be the case but we are not
[1:43:01] sure yet because this need to be verified according to what we have now in our hands uh we we cannot answer strictly this
[1:43:11] question but we will do so in a couple of minutes or hours great and for whoever asked that
[1:43:20] question when we post this to our website next week we do hope to uh to have that answer for you so question
[1:43:26] number seven what should be the interpretation of bright white pixels in the different date composite rgb image
[1:43:36] when this is a rgb image you know that the combination of the colors will provide a single
[1:43:44] combined color and in this case the price pixel corresponds to the i value in all the display bands meaning that
[1:43:52] the combination of high display value in red green and blue channels lead to a white color the opposite would be a dark color
[1:44:02] because there won't be any red green blue uh let's say intensity and then it would lead to the to the black or the dark
[1:44:12] color terrific question number eight how does lai provide different or additional information than traditional vegetation indices such as ndvi
[1:44:29] the ndvi is correlated to the livari index index it's not a linear calendar correlation correlation this is a
[1:44:39] this is a curvilinear correlation because the ndvi is saturating a high value of biomass of green biomass
[1:44:50] furthermore ndvi does not correspond to any ground measurement while the live area index correspond to biophysical variables which can be
[1:44:59] measured on the ground and which is used in cobb grove's model are in yield model to estimate for instance
[1:45:08] the vegetation condition or the vegetation stages wonderful thank you pierre question number nine along with lai which other biophysical parameters can
[1:45:22] be estimated with sar ah ah we did not mention an isa imagery today i don't know if
[1:45:32] the the question is strictly related to sar let me first reply for optical optical imagery we can derive the fa par
[1:45:42] the f cover and the chlorophyll canopy content in addition to the lai these are the four typical
[1:45:51] biophysical variables that can be retrieved from optical imagery when it comes to sar but this was not introduced today
[1:46:01] we can indeed retrieve to some extent the delivery index from the sar backscattering coefficient as well well but we cannot retrieve the f cover or
[1:46:14] the fa from the sun wonderful question number 10 in the case of parcels doing agroforestry how can we compare
[1:46:30] the productivity versus parcels using open field principles and fertilizers of course when it comes to comparing cropping system it is very important to
[1:46:43] to know what we look at and for instance cyclophores3 will allow trees to be in the in the field
[1:46:53] and therefore if we want to compare this with open field we would need to mask out all the trees
[1:47:01] in the agroforestry system to make sure that we will compare only the crop on both sides one in the agroforestry
[1:47:09] system and the other one in the open field field system system therefore we cannot mix crown cover from a tree
[1:47:19] with the wheat green biomass it won't make sense okay question number eleven is it possible to get lai from fusion of
[1:47:38] sentinel 1 and sentinel 2 how effective is it in yield prediction this is a state-of-the-art question today the research tried to fuse
[1:47:51] the livery index which is retrieved from sentinel-2 typically optical imagery and and the livari index v3 from sentinel 1 from
[1:48:02] microwave imagery today these are two different time series which cannot be used easily in a consistent way
[1:48:13] however sentinel one provides information when we don't have the sentinel-2 sentinel-2 capacity to observe the green biomass
[1:48:23] and therefore it could be very valid to combine them to to be able to predict the yield in a cloudy
[1:48:30] area great and question number 12. does sentinel msi level 2 data require atmospheric correction like using send
[1:48:52] to core now indeed sentinel 2 level 2 level are already atmospherically corrected meaning that we don't need to apply any
[1:49:06] additional atmospheric correction for the sentinel-2 imagery which is distributed by isa through the copernicus open up access
[1:49:18] access then then they are by default processed by the centucore algorithm which allow to rely i mean to provide a
[1:49:27] surface reflectance value and therefore no need to be atmospheric correctly i mean correct it again of course if you want to apply a
[1:49:38] different processor or or atmospheric correction then you need to start from the level 1c the top of atmosphere data
[1:49:49] that can be also download from the isa website website and then you can apply one of these
[1:49:56] algorithm it could be maya could be ice aiko or lars great question 13 refers again to agroforestry systems so is lai providing
[1:50:13] any information regarding biomass or shade level for agroforestry systems lai refer to the green biomass materials and therefore when it comes to
[1:50:31] agroforestry system the biomass is also in the wood stamp and which is not related at all with the
[1:50:39] leave area index therefore therefore this is not safe to rely on library index to estimate the biomass in a agroforestry system
[1:51:00] question 14 how do i set a threshold in order to detect the outliers when checking quality control of the lai
[1:51:12] the threshold need to be aligned with radiometric radiometric calibration performance meaning that it does not make sense
[1:51:25] to set a threshold at a lower level than the noise level in the time series as you know any instrument provides
[1:51:36] provide some noise level and therefore the threshold need to be upper the regular noise of the instrument
[1:51:45] instrument what we want to screen out using this outlier detection is to screen out the residual atmospheric
[1:51:56] atmospheric perturbation and of course this is on the top of the regular regular instrument noise and question number 15
[1:52:14] what is the significance or advantage of using l1c data if s2a is corrected atmospherically this is an excellent question
[1:52:26] the sentinel-2 level two imagery are already atmospherically corrected corrected but sent to core is a very generic processor
[1:52:38] and in some area it can be not the best or the most appropriate appropriate for instance in equatorial area
[1:52:48] santuco may face some problem with high water vapor and an alternative processor may probably better deal with this kind of
[1:53:02] situation situation therefore therefore sent to core is probably a very good solution solution in general but more specific solution may be
[1:53:14] required required in very specific conditions and question number 16 what is the correct tool in snap for
[1:53:35] image to image registration like in envy abracio would you like to reply to that one maybe i can read it in snap there is a
[1:53:59] collocation module under the raster menu which allows the user to collocate meaning to co-register two different images
[1:54:12] and therefore will be the same then like in envy and question number 17 do we have to always create a subset of
[1:54:30] the image in snap before doing our analysis what is the main significance of creating a subset the subset allow to actually reduce the
[1:54:43] volume volume of the data to be handled and in this case as this is a training exercise
[1:54:50] exercise doesn't make sense to handle a full tile meaning 100 by 100 kilometer at 10 meter resolution which is typically
[1:55:00] 600 megabytes and far too heavy to be handled as a time series having many of them therefore having a subset allow to
[1:55:12] reduce the volume for the exercise if you want to do it for operational purpose or specific scientific studies you can of
[1:55:22] course skip the subset step terrific question number can we use the la lai from sentinel 2 as
[1:55:36] input for crop simulation models without ground truth today we consider that the the bvnet software which is often used
[1:55:50] is generic and validated enough to be used without branch rules of course this can feed the simulation model
[1:56:03] the crop simulation model but but you still need to validate the performance of your crop simulation model
[1:56:14] but you don't need to validate delivery index and question number 19 when adding irrigation during the growing season can
[1:56:37] it be seen like a booster on the normal growing curve exactly exactly if you look at the temporal profile of a
[1:56:47] liver index as well as on the ndvi profile you will see that the well-watered well-watered fields or
[1:56:58] best irrigated field will have a much much faster growing curve reaching higher level of green biomass and question number 20 can we link the
[1:57:24] area under the curve to the total yield for a given parcel of course this is to be
[1:57:35] let's say analyze careful carefully but for some crops like the corn this is the case we can consider that the total green
[1:57:46] biomass biomass will give us a good indicator of the yield of the corn however however in some specific season
[1:57:58] you may have a great great leaf development with a poor grain feeling which come as a surprise
[1:58:08] in that kind of situation therefore this need to be an indicator not a yield estimate i do believe we've gotten through all of
[1:58:41] the questions so thank you for everybody that did post your question in the question and answer box
[1:58:47] before we wrap up i would like to hand it over to dr defourny for any closing comments you might have
[1:58:56] thank you shin for you know your your kind organization and the very good support we do hope that with this training
[1:59:08] you have learned a lot about polarimetry and learn a lot about the exploitation of of optical imagery and polarimetry for
[1:59:18] actual agriculture application this last session aimed to introduce you to the thematic interpretation of time series indeed to go beyond the
[1:59:33] data data handling and to be able to interpret in an agronomical way the result that you may get from the
[1:59:41] earth observation and this is probably the great challenge of today the remotest thing reached to a major
[1:59:48] maturity level which allow the different field field to make use of this data using their own knowledge from their own
[1:59:58] discipline discipline and i wish you to be able to do so and to make progress as a community to learn how to use at
[2:00:07] the best the earth observation data set that we have today thank you for your attention dr tufarni thank you so much we also
[2:00:16] want to recognize fabrizio ramoino from issa as well as amalia castro from issa who also contributed very much to both parts
[2:00:27] three and four of this four-part webinar series so thank you to all the presenters uh today we greatly appreciate all the effort you
[2:00:35] put into making this training such a success we also want to thank all of the attendees that joined us today from
[2:00:42] wherever you're joining from uh thank you so much for for spending your time to learn uh about um about remote
[2:00:48] sensing and how we can apply that to crop mapping i also want to thank everybody from the
[2:00:52] arset team for contributing to this training and we hope that you will join our list serve to learn about all of our
[2:00:59] upcoming trainings so thank you to everybody we hope you have a wonderful day you
