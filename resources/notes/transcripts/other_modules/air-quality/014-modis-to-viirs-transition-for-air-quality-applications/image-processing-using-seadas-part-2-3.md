# Image Processing using SeaDAS, Part 2/3

`https://www.youtube.com/watch?v=Mw3hg2w3xNg` · id 22 · 1:39:38 · module 31 — MODIS to VIIRS Transition for Air Quality Applications

[00:01] Hello everyone. Welcome back to part two of the webinar series on monitoring coastal and estuarine water quality.
[00:11] Transitioning from MODIS to VIIRS. Last time we had an overview of remote sensing observations for water quality
[00:20] monitoring in estuaries. And today we are going to focus on processing MODIS and VIIRS level one images using SeaDAS
[00:30] software. Just a reminder that a homework assignment will be posted on September 21st on the RCET website.
[00:42] That's to be submitted via Google Form. Due date for the homework is October 5th, 5th, uh 2021.
[00:51] A a certificate of completion will be awarded to those who attend all live webinars and complete the homework
[00:58] assignment by the deadline. You will receive a certificate approximately two months after the completion of the course from Marisa
[01:07] Martins and her email address is given here. Outline for today is as follows. We will first have a brief review of
[01:18] part one. Then we will have an overview of installation of SeaDAS and Ocean Color Science Software or OCSSW.
[01:28] We will then see how to process MODIS and VIIRS level one images to level two. We will have a demonstration of SeaDAS
[01:37] processing and visualization of MODIS and VIIRS images for the Chesapeake Bay and Rio de la Plata. We will use MODIS and VIIRS images that
[01:49] we downloaded in the previous session. And we'll have finally a demonstration of VIIRS water quality products in
[01:58] coastal waters from NOAA. We will start with the review of part one. We saw that coastal waters and estuaries
[02:12] are transition regions from land to open ocean. ocean. They support a variety of ecosystems and are important for regional and global
[02:21] economies. economies. Increasing nutrients and sediments in coastal and estuarine waters is a major concern as it leads to low dissolved
[02:32] oxygen or hypoxia in the water. This is a major cause of destruction of benthic organisms and fish.
[02:41] For sustainable aquatic ecosystems in these regions, monitoring water quality allows us to understand how to mitigate the impact of land use change,
[02:53] eutrophication, and climate impacts on contamination in coastal and estuarine systems. systems. Remote sensing provides regular and consistent observations over a large
[03:06] area with a consistent revisit time to monitor water quality in these regions. We saw that MODIS provides almost 20
[03:18] years of moderate resolution and frequent observations, so almost daily observations for water quality monitoring, and VIIRS will
[03:28] provide an adequate follow-on to the replacement of MODIS for ocean color monitoring. Earlier, Earlier, we downloaded MODIS and VIIRS level one
[03:44] images from NASA ocean color web for the Chesapeake Bay and Rio de la Plata for selected days in July 2021.
[03:55] Today, we will process these data to get water quality parameters. We will start with uh some information about SeaDAS
[04:07] and OCSSW. So, SeaDAS, here is the website with a lot of information. It's a NASA Ocean Biology official data
[04:24] processing and analysis software. The recently released latest version is 8.1.0. 8.1.0. And SeaDAS has a graphical user
[04:36] interface or GUI version, and uh one can also download code for command line version. version. It is open source and can be downloaded
[04:46] from this website given here. Here is the download button, and it is available, you can download freely from
[04:55] this site. SeaDAS is available for Windows, Mac operating system, and Linux Linux operating systems, and it requires
[05:08] bash shell, Python 3.6 or later, and Python requests package version 2.18 or later. As you can see,
[05:22] uh here is the link to different versions. So, this is for Windows, this is for Mac, and this is for Linux.
[05:32] The SeaDAS GUI version can be used for visualization, processing, and analysis of images, and installation of OCSSW.
[05:43] It also allows running OCSSW to get level two and level three data from level one images. There is also capability of accessing
[05:56] available in situ data from SeaBASS, the SeaWiFS Bio-Optical Archive and Storage System. Uh this is publicly available
[06:05] oceanographic and atmospheric data as uh shown here. Uh there is a link to SeaBASS here. SeaDAS 8.1.0
[06:17] contains SeaDAS toolbox that also includes Sentinel-3 toolbox, which has OLCI in it. This is a new feature
[06:27] included in this version. It is important to note that SeaDAS 8.1.0 8.1.0 version only allows visualization and
[06:37] analysis on Windows operating system. Image processing using OCSSW is not yet available on Windows. But it will be available eventually.
[06:49] In this session, we will use SeaDAS GUI on Mac OS X for image processing and visualization. Before we start processing level one to
[07:04] level two data, here is some useful and important information. So here's brief description of data levels. And so starting with level one A
[07:18] data, data, they are unprocessed instrument data at full resolution, time referenced and annotated with ancillary information including
[07:30] radiometric and geometric calibration coefficients and georeferencing parameters such as platform ephemeris data, so for satellite FM, it's data.
[07:43] Level 1B data are level 1A data that have had instrument radiometric calibration applied. So, these are calibrated level 1A data.
[07:55] Level two data are derived geophysical variables at the same resolution as the source at level one data.
[08:04] For example, remote sensing reflectance, chlorophyll concentration, etc. are level two data. Level three data are derived geophysical
[08:14] variables that have been aggregated, projected onto well-defined special grid over a well-defined time period. So, these are uniformly gridded data.
[08:27] For MODIS and VIIRS data processing, we will use level 1A and 1B data to obtain level two data.
[08:40] A brief summary of water quality remote sensing is given here. Satellite sensors measure top of atmosphere atmosphere uh reflectances or radiances.
[08:53] The TOA radiances result from a combination of surface and atmospheric conditions, including effects of clouds and aerosol
[09:04] particles in the atmosphere. Water leaving reflectance depends on backscattering and absorption of radiation due to water, sediments,
[09:16] phytoplankton, and colored dissolved organic matter or CDOM. The figure shows relative contribution of atmosphere in here. This is the atmospheric path.
[09:29] Uh Uh water leaving uh and then surface reflected. So, again, the figure shows contribution from these different components to top
[09:40] of atmosphere total sensor. And as you can see clearly, atmosphere has the largest contribution to top of the
[09:49] atmosphere radiance. This is TOA and this is atmosphere and this is water and surface reflected. So, clearly
[09:57] atmosphere has the biggest contribution. We saw last week water leaving reflectance is at various wavelengths depend on the inherent
[10:08] optical properties of water resulting from quantities such as algal and non-algal particles and CDOM. Uh, so different colors can be seen
[10:19] in here. So, qualitative technique of deducing water quality from remote sensing depends on visual inspection of images
[10:30] to identify color from water leaving reflectances at various wavelengths. So, just by looking at color, uh, one can
[10:37] deduce whether it's green, so it's chlorophyll. If it's just blue, it is a good quality water. If it is brown, it
[10:45] is sediment, etc. If it is dark, it is CDOM. But, this is qualitative information. information. Quantitative techniques
[10:55] use in situ measurements of water quality parameters co-located with remote sensing reflectance data for a training period and to develop empirical
[11:06] or physical algorithms to derive water quality parameters. These algorithms then can be applied to satellite images subsequently to get
[11:15] quantitative information of water quality parameters. So, in situ observations are required to derive relationship between the satellite
[11:25] data and the actual water quality parameters. And that relationship then can be applied to um future satellite
[11:34] images. So, MODIS and VIIRS standard algorithms from NASA ocean biology group are derived using in situ and remote sensing
[11:48] data. data. Details about these algorithms can be found from the links provided here. And the list of standard parameters is
[11:58] also given in this column. Before we process MODIS and VIIRS data, it is important to talk about
[12:09] atmospheric correction. We saw earlier that top of atmosphere radiance is over water received by satellites at the largest contribution
[12:19] from the atmosphere. Therefore, satellite observations of reflectance have to be corrected for atmospheric effects for getting water
[12:29] surface reflectances. And there are various techniques exist for the atmospheric corrections, and this is really not a trivial task. Um
[12:39] you really have to have information about cloud particle and gaseous molecules, and it also requires radiative transfer modeling along with
[12:50] atmospheric conditions, clouds, aerosols information as I just mentioned. So, there are several atmospheric correction models as listed here.
[13:02] NASA ocean biology processing group has their own atmospheric correction technique or model. model. USGS has model it's called 6S.
[13:16] Um it is second simulation of the satellite signals in the solar spectrum, so there are six S's. This is from USGS.
[13:25] Ecolight is from Europe. Uh that's a European model. Sorry. And Hydrolight is a model that NOAA uses. So, there are various atmospheric
[13:38] correction models. Um and this is also a area of research where people are constantly finding uh better ways to
[13:50] correct water leaving reflectances um and when they reach top of atmosphere that they are properly corrected for
[13:57] atmospheric contribution. So, this is a schematic of how water quality parameters are generally obtained from satellite observations.
[14:10] So, there's an algorithm development phase as you can see here. Um and so, in here uh that uses TOA
[14:19] radiances, top of atmosphere radiances from remote sensing, and applies atmospheric correction to generate water leaving reflectances. So, here is TOA atmospheric correction,
[14:32] and then you have water leaving reflectances. reflectances. You also have in situ observations of water quality parameters during a
[14:41] satellite overpass. This is important because because uh closer you are when satellite overpass and in situ data are are
[14:50] measured, measured, um you have better accuracy of relating satellite with in situ data. And based on this information,
[14:59] statistical or empirical algorithm is developed to derive water quality parameter. parameter. And those uh model coefficients or uh
[15:09] model algorithm, they are then preserved and and in in real time, when satellite um overpasses a water body,
[15:21] uh it is at the top of radiance they are atmospherically corrected to get water leaving surfaces. And then using the model then this water
[15:33] quality parameters are derived quantitatively. So, here is how this is a general way how remote sensing is used for deriving
[15:44] water quality parameters. So, NASA ocean biology group develop such models for various satellite sensors based on institute data from
[15:54] SeaBASS. And what we will do is use these models in SeaDAS and OCSW to get MODIS and VIIRS water quality
[16:04] parameters. parameters. Next, we will have a demonstration of SeaDAS processing and visualization for MODIS and VIIRS images for the
[16:13] Chesapeake Bay and Rio de la Plata. So, in the demonstration we will select a few MODIS and VIIRS sample images and
[16:24] see how to process them. Uh Uh you recall this ocean color web from which we downloaded data a from level
[16:33] one and two browser. We ordered data selected swaths for uh the Chesapeake Bay and Rio de la Plata region and uh we
[16:42] used Wget uh with manifest file to download and save these files. So, A are MODIS files and B are VIIRS files.
[16:53] That's what we did in last session. Today we'll use some of those images and process them using SeaDAS software.
[17:01] This is actually preparation for an advanced training that we're going to offer very soon uh where we will develop our
[17:10] own algorithms based on institute data and satellite data. So, for that it's It's that we process um level 1 to level
[17:18] 2 with the SeaDAS now. So, what we're going to do is walk through how to install SeaDAS and OCSSW
[17:29] and then just proceed with the image processing. So, let's see if you click on SeaDAS. Going back again, here if you look at
[17:39] SeaDAS, there's documentation, there is help, installation tutorial, video tutorials and demos. These are for older versions, but they
[17:50] are very useful. Some of the basic features remain the same even in the older versions of SeaDAS and some other
[17:57] material is there. If you go to SeaDAS, here it says the latest version is 8.1.0 and it includes SeaDAS toolbox and
[18:08] Sentinel 3 toolbox for OLCI. Uh Uh on here it says features for SeaDAS is visualization, science processing and
[18:19] statistics. statistics. Operating systems are Linux and Intel Macs. This is for science processing. For visualization, Windows also can be used
[18:32] and then there is version history and previous version information. You would download appropriate file here. So, um you can
[18:46] download source code and compile. Uh Uh we are going to do that, but we're going to use GUI version of this for now.
[18:55] Uh this is for Windows, Mac and Linux. This is the size. One more thing to note here is that
[19:04] there is a complete list of suggested hardware hardware and software requirement. For data processing, 5 to 10 GB
[19:15] space is needed. For visualization, minimum of 256 color display is required. And it requires Java version Python, as we saw earlier. It requires
[19:27] this request library. These are all absolutely necessary to run this software, this version. When you download SeaDAS,
[19:38] uh and I I'm using Mac. So, once I download the file, I can then go to the
[19:49] to install and run SeaDAS, follow the instruction on this page. And here is for different uh operating systems in in
[20:00] instruction is given. If you go down for Mac users, which is what I'm using, although it is very
[20:07] similar for for Linux and Windows, also. So, basically, uh the .sh is the file that you you would save on your computer
[20:16] once you click on that table. And then, from command line, um um type the so open the monitor, uh and
[20:26] then, type this command sh and the file that you saved. And then, it opens an interactive window where you would um
[20:38] tell it which directory to store it. Uh and here it says, let's find for Mac. Huh. So, for for Once you do that, it asks
[20:51] you for the directory to install it. And for a clickable desktop browser window, uh save it as a SeaDAS home.
[21:02] You name this directory /bin and this app. app. Well, and then so I have already done that. So, if I
[21:14] go to my applications folder where I've saved it as SeaDAS 8.1.0 bin and this is the SeaDAS app. Once you
[21:25] click on that, you can open the the browser version right there. It asks you whether you want to check
[21:36] which whether you're running latest version or not and we are so So, now we have this SeaDAS window open. So, that's
[21:44] just as simple as that. You just click download and then run this from command line and a window will open which will
[21:53] guide you. Ask you a bunch of options. Mainly where you want to install Now, let's see once you are in SeaDAS
[22:02] on top I hope you can see this. It's SeaDAS SeaDAS and then there is SeaDAS-OCSSW on top
[22:10] here. There's view, there's analysis, layer, vector, raster, optical, tools, tools, window and help. If you go to
[22:24] SeaDAS-OCSSW SeaDAS-OCSSW there is an option it says install update OC processors. This is the science processing software.
[22:35] And um it it if you don't have these options highlighted, that means you have to install OCSSW. If you already have
[22:46] installed it, you will be able to select these options in this table. Uh Uh even if you have these and it's okay to
[22:55] say install and update so if there are any new versions or new information, it opens a window. Here is the window. This is
[23:07] Here is where it will install OCSSW. Here is something to note. There are several versions. The latest one is
[23:16] 2021.2. 2021.2. So, important to go with this latest version. Now, here you can pick this is MODIS Aqua. You can pick MODIS Terra if
[23:26] you like. Uh this is VIIRS for S-NPP and for for JPSS. You can also select OLI. This is
[23:39] from Landsat. Um and then there are other past missions there which we're not going to install. Uh
[23:47] you can say clean install so that if there are any errors or warnings, um it they're highlighted and but it it
[23:57] tries to do um installation without any error or warnings that the otherwise you would be notified. And then
[24:06] just say run and then all the processors will be available here. So, when you update or run OCSSW through SeaDAS, it takes a few
[24:19] minutes minutes uh depending on how many sensors you have selected. But then uh once you have it, you will see all
[24:26] these options that you can select. Notice MODIS MODIS MODIS uh uh VIIRS VIIRS um these are level one A
[24:40] processing processing software. software. Then Then more importantly, it is level two generator so L2 gen. This is
[24:51] This is what we'll be using to actually look at uh water quality product. And then there are other options. We are
[24:58] mostly going to work with MODIS level one data, convert it to level two using L2GEN, and then we get water quality
[25:07] parameters, and see if we can compare, even just visually, MODIS and VIIRS data. data. So, that's what we will do next.
[25:20] So, let's start with Chesapeake Bay, and I have picked one image. I So, the steps are start with level one A
[25:32] files that we already saved in the previous session. Once you have those L1A files, we need to find geolocation or geo files for
[25:46] those based on mission ephemeral data. So, here what we are going to do is to first generate MODIS geo file.
[25:57] Because we have level one A, and we need geo file. So, before we select MODIS and VIIRS data to process,
[26:05] just look at the file name convention. The important thing to note about is the first letter A for MODIS, Aqua MODIS to
[26:13] A for Aqua, and V is for VIIRS. Um here, then in both of them, uh uh after the first letter is year, and then
[26:23] there's three digit Julian day. So, we picked July 2021, so it is 2021 and 182, which is first 1st of July, and then it
[26:35] goes on to 31st of July. The Julian day is given here. Then, hour, minute, and uh second. So, 17:35:00
[26:45] for this particular image. And it is the same for VIIRS. L1A, it's the um it is the level of data.
[26:55] LAC here for MODIS is local area coverage. It's a resolution pixel image and it's in HDF format. For VIIRS,
[27:07] it's the same, it's L1A, but here it's telling you it's SNPP. Or if it's JPSS, it will show that. And this is in netCDF
[27:18] format. So, now difference is that both HDF and netCDF um formats, but SeaDAS can read all these
[27:28] files. So, I downloaded 16th of July for Chesapeake Bay. It appears to be a very clear image and
[27:39] we will see what not so clear image also looks like. So, let's start um processing processing MODIS and VIIRS image for Chesapeake Bay
[27:50] first. first. Um we already have installed OCSSW. So, first thing to do is let's look at MODIS. We will find MODIS geolocation
[28:02] file and that's the first thing to do because we already have level 1A file. So, let's click on MODIS geo.
[28:09] Here is input file. I have 16th of July file and you can select that. Once you select it, automatically
[28:21] populates it output file name. It's the same, but now it is not level one, it's geo file. So, it's saying geolocation
[28:30] information information based on ephemeris. Um and so, once you do that, you also want to say refresh database. So,
[28:39] refresh DB and run. Once you run that, it launches workflow and it tells you when it's complete. So,
[28:52] it it says that program execution completed. So, next step after generating the geolocation file, now it's time to get
[29:02] level 1B, which is sensor calibrated radiometrically and geometrically calibrated data from MODIS. So, we can start with a MODIS
[29:14] L1B. Here also, input is level 1A file that we just used to get um a geolocation. And once you choose that,
[29:26] um it now has level 1A and geo file. And uh let's keep everything uh as default for
[29:34] now and say run. And when uh the program uh finish execution, you will have this level 1B files of for local area
[29:48] coverage, half kilometer and 250 um half kilometer and quarter kilometer, that's 250 and 500 m. So, we will still
[29:59] uh work with the local uh area coverage of LAC files. Now that we have level 1B file, we will
[30:06] generate level two files or level two data, which is the main program which gives you water quality parameters. Um
[30:15] it this has This is a complex software main part of um ocean data processing and has many
[30:24] options. Uh we will look at a few. We'll keep everything at default for now. So, now we're going to start processing
[30:34] MODIS and VIIRS level 1B images to to get water quality products in level two. These are level two data that we will
[30:44] get from by using L2 gen. Uh Uh here, let's start by opening MODIS file for Chesapeake Bay, which is
[30:57] for 16th of July and uh we want level 1B file. So, we'll start with level 1B file
[31:04] here. here. And when you input the file 1B, it also pulls geo file and look at the output file. Now,
[31:13] it is level two L2 and OC or ocean color in the description that that shows that it has ocean color parameters in it. Um
[31:24] then, let us look at products. So, products have radiances and reflectances, derived geophysical parameters, inherent optical products,
[31:36] and other information for atmospheric correction, for uncertainty. Um these are there. Uh then, let's see here. These are
[31:46] radiances. RRs, these are remote sensing reflectances or water leaving reflectances at different wavelengths. They're all selected for now, but let's
[31:57] deselect all the infrared. We are just going to keep visible and near infrared, which are used for ocean color
[32:04] algorithms. Um these are also reflectances. Uh top of atmosphere reflectance, this is top of atmosphere, but it is Rayleigh corrected, etc.
[32:15] These RRs are used for developing algorithms. So, we're keeping them on. Next, we're going to look at derived
[32:23] geophysical parameters. And we're going to look at parameters. These are standard parameters as we saw in the presentation. They are
[32:33] given by L2 gen. We're going to keep parameters which indicate outcome bloom as well as hypoxia. So, chlorophyll A,
[32:45] then let's pick CDOM index. Check this off. This is particulate inorganic inorganic calcite concentration. This is particulate organic carbon. Keep that.
[32:58] And also pick SST. Here we are going to keep SST which is from 11 from the window.
[33:07] Get rid of those also. So, these are the basic parameters that we are going to explore from MODIS and VIIRS. This one
[33:15] by the way is for Chesapeake Bay area. Once you have selected this, let's look at processing options. We are going to
[33:23] keep everything default, but it has has This AER Opt is the one that has selection for atmospheric correction.
[33:33] There are multiple options. And depending on the area of your interest or the type of water that you
[33:40] are looking at, different atmospheric corrections might be better and that one has to try and decide which way is best. We are going
[33:49] to use this default one with multi scattering with two band relative humidity based model selection. These wavelengths are for different
[33:58] types of thresholds say to detect cloud, land, etc. And another important thing to notice here is that mask cloud flag is on. That
[34:10] means if it is cloudy, we do not get any data because optical data will not be able to see through clouds.
[34:16] This is mask highlight. This is when radiances get saturated, we do not get data. Mask land. Over land also, we do
[34:25] not have say chlorophyll concentration or SST. And And if one more thing to notice here is it's
[34:35] all processed ocean is one on so that all the water points are processed and processed SST is also checked so that we can
[34:46] calculate SST. One last thing to look at is that we we for atmospheric correction we do need
[34:55] information about atmosphere and for that we can get ancillary data. So, it downloads ancillary files needed for atmospheric correction. But, here if
[35:05] you don't select that then the climatology climatology is used to do atmospheric correction. Once all these are picked, we can run
[35:14] this. this. There are subsetting options, there are different thresholds you can set, ancillary inputs information, IOP options,
[35:25] options, inherent optical property options, miscellaneous miscellaneous information and calibration options. These are all advanced options that we will be covering in future, but not
[35:37] today. And once you do that, you can run this. And it takes a few minutes, but once you
[35:47] run this you should get level two OC file for Modis file, which is a big bay, and it's created
[35:55] here. Let's look at this. All the bands are here. here. And this is CDOM index, two different
[36:04] types, although they are practically the same. same. Uh let's see chlorophyll A. Just Just here. here. This is Chesapeake Bay.
[36:14] One thing to notice here, this is not in geographical projection. This is more like satellite line and pixels. So, what
[36:23] we are going to do is reproject this file. And for that, here is the symbol to click on. Creates a reprojection of a
[36:30] file. file. Once you click there, this is the file selected and reprojection parameters is default as geographic lat/long WGS84.
[36:41] It uses nearest neighbor interpolation or resampling. And when you run it, um um it creates a reprojected file. I already
[36:51] have it, so but let's go ahead and create it. And so here you can see that the
[36:57] reprojected file now is created. And And if you look at the bands, they're the same bands. They're reprojected now. And so this is
[37:09] chlorophyll A looks more like it's a big bay now rather than elongated water body. body. Uh once we have this reprojected file,
[37:17] we can close this original file because we will be looking at the reprojected data. Now, I already have created reprojected
[37:30] files for VIIRS also. Only one thing to notice there and let's go ahead and look at it. Let's see for VIIRS data,
[37:40] if we run L2GEN uh and select VIIRS data for level 1B for 16th of July, um um it will go through the same procedure.
[37:55] Um you'll have geo file and output file. Everything will be the same except for processing options. Here, look at um
[38:06] atmospheric correction, it's multi-scattering with two band model selection and iterative NIR correction. So, this is optimized for VIIRS, so
[38:16] that's just one thing to notice. Another thing we must make sure is that for MODIS, process SST is flag was always on
[38:26] its default, but for VIIRS we have to choose that to be able to get SSD. So, that's the
[38:32] only difference to note here. And once you do that, you can run this this get ancillary and run this to get level
[38:44] two OC file for VIIRS. I already have those and I've already reprojected. So, I'm just going to open
[38:52] that and load here for visualization. So, this is the reprojected file. Okay. Okay. Uh this is both for Lake Titicaca. Now,
[39:04] recall that we have another case study area and we have we downloaded data for that region last session also for Rio de
[39:11] la Plata in in South America. And I have gone through the same process for MODIS and VIIRS. Start with level one B and
[39:21] get to level two. We can open the product here. So, that is for uh 11th of July and this is MODIS.
[39:35] And for VIIRS it is VIIRS. So, now we have two study regions and two sensors as you
[39:50] can see here. Now, for the next few minutes we are just going to focus on visualization of different parameters.
[39:58] In next session then, we will compare MODIS and VIIRS water quality parameters and statistics in both of them. And we will also look
[40:09] at those images at different times to see how they differ over the two case study regions. So, we'll start
[40:17] by visualizing MODIS data. Let's look at bands. bands. Um there are RRs here. These are reflectances. Uh let's see if it will
[40:28] and you can see this is simple reflectances. It's unitless. Um Um these are used for developing algorithms
[40:37] and that's why we are calculating although uh for today we're going to focus on derived products to realize.
[40:46] So, let's start with chlorophyll A, which is a in- indicator of algal bloom. Once you have this, you can add a land mask by
[40:56] clicking on this area. Land mask create create with any color. So, here it's gray. Create mask. And this creates gray area.
[41:09] You can change color table. Here's the color uh manipulation window. We're going to keep this same, but we can
[41:16] change minimum and maximum um just to see the Let's Let's look at the large value here. Uh now you can see this is Atlantic
[41:27] Ocean. Um much lower chlorophyll concentration here. here. Here in the bay, in the coastal region, there are um
[41:37] high chlorophyll A concentration values. As you go in, they're lower. You can add color table to this. Here is in
[41:46] milligrams per meter cubed. This is the color table. This is the typical range for chlorophyll in the bay.
[41:55] Now, one more thing to notice. Go to view, view, tool windows, and pixel info. It opens a window and it shows um
[42:06] latitude longitude and values of the raster we're you're at or So, here when you click here, when I
[42:14] move the cursor, you can see how reflectance that we uh we don't even here and chlorophyll concentration values are changing. This
[42:24] is like 13.98. If you go close to the closest, it's 99.7 mg per liter cube. Okay. Okay. So, now also look at Let's close this.
[42:35] Uh if you look at this, it's not a number. These are not defined data. And how would we find out why these data
[42:42] are missing? And for that, we're going to look at flags. There's a description of different flags on NASA ocean color
[42:54] web page that we've been looking at. So, land pixels, these are high glint pixels, these are pixels with shallow water, foresea, and
[43:05] CLDI, which is probably probable cloud or ice contamination. There is turbid water. Notice also there's there is a
[43:15] product failure. Any of the product fails, that flag is set. Also, there is this bowtie tail or
[43:24] deleted off neighbor overlapping pixels. So, those are missing and this is specifically for VIIRS. And in some
[43:31] images, uh we will see uh this example of how how this affects water quality parameter extraction from
[43:41] the image. So, here when you click here, say, the in this area, it shows these highlighted highlighted masks. So, if it is This is, say, land,
[43:56] so it says it's land and there is uh product failure. If you go here, you can see that cloud, ice, and
[44:05] stray light contamination they're on here. So, that's why we do not have data. Also, this is shallow water
[44:12] because close Z mask is also true. So, this allows you to look at what different reasons are there for product
[44:21] failure or why don't we have beautiful data here. And these are the reasons. So, quickly to look at different masks and see why
[44:30] these data are missing. Clearly, in in this part it's either cloud or it's the shallow water so pixel in shallow water
[44:41] product failure is occurring in in this small water part here everywhere. So, this is uh chlorophyll A. Look at SST.
[44:55] This is in gray, but we can pick another color table. Let's pick this. And And we can This is land mask is already
[45:04] seen. seen. We can also look at Let's look at CDOM index. index. Uh this is an interesting parameter. It
[45:14] is a unitless quantity. It's a ratio between different reflectances RRs. So, it is When it is less than one, it shows
[45:28] deficit of CDOM or decrease compared to mean. And if it is above one, it is excess of CDOM. And it depends on
[45:37] chlorophyll also. This is dissolved organic matter. And so, it both chlorophyll and CDOM they're not independent of each other.
[45:47] And so, because of that, this is more like a relative index. But at the same time, we do have
[45:53] particulate organic carbon and that shows That is shown in mg/m³ as you can see in the pixel info.
[46:02] when I move it, it's about 664, 685. Here as we go, it is about 252. So, particular organic carbon
[46:12] is available. CDOM is available only as as an index. So, it is either more or less than normal. Now, we can also look
[46:22] at this particular inorganic matter. And then here, if you click, it shows its turbid water, and so it is not
[46:33] calculating or retrieving PIC. So, a lot of data are missing because most of it is turbid flow and in shallow water. So,
[46:41] then it is not easy to to retrieve PIC. We We provided the link for algorithms in the presentation and in detail
[46:52] described described It describes the algorithm and caveats for that. Here you can see PIC is 0.021 mole per cubic
[47:01] meter. meter. So, these are different parameters. One more thing to look at is if you go to Windows,
[47:11] you can see all of them at the same time. You can say arrange them evenly. And so, all the parameters that you see,
[47:20] they they appear here. So, we have chlorophyll A concentration. This is POC. This is SST. This is PIC and this is CDOM index. Uh
[47:32] by the way, you can add color table to all of them. Um Um and and individually, and then it appears at the
[47:42] bottom here. So, these are just to quickly visualize everything. And in view, it is synchronized image view. And
[47:52] because of that, when you move one, they all move together. If you zoom in or zoom out, they do it simultaneously
[48:02] also. So, it's easier to look at. If you move anywhere, it shows entire uh water quality parameter information at that
[48:10] pixel including the flags. So, these are um um good uh this is good information to analyze data, okay? So, this is for um
[48:21] uh MODIS. Let's let's for now um look at um VIIRS data and then in our next session,
[48:32] we will do detailed comparison. So, I'm trying to close this. Um Okay. And then look at the VIIRS data
[48:47] instead uh very quickly. Again, start with chlorophyll A concentration. concentration. Add mask. Make it gray. Preview it.
[49:01] And we can also keep the same mean and max so that we can compare with MODIS. And add color table.
[49:16] Here you can see um Again, the pattern is very similar as we saw earlier. Um values are a little bit
[49:24] different. We will compare them next time. time. And again, um you can see pixel information and flag information for all
[49:33] of these. Again here, because of clouds, it's missing data. Okay. Uh we can look at SST. It looks very similar to MODIS. And so
[49:46] far, we will compare them all next time. This is PIC. Again, the pattern looks similar. similar. Slight differences.
[49:57] You will see this is C DOM index. Here, this is different from MODIS and because it's the ratio of reflectances, there are
[50:09] four different bands used. We will talk about it when we compare, but so this is not as useful. C DOM index is as useful
[50:19] as say POC because it actually is particulate organic carbon that you can see here. So, we will we will look at these
[50:30] MODIS and these data next time. One final note before we conclude today's today's demonstration. Let's close this
[50:37] Chesapeake Bay file also. Let's look at Rio de la Plata region. Here is the file from MODIS and start with chlorophyll A
[50:47] concentration again. Here is the river as it opens in the ocean ocean and we can keep the
[50:58] same same values here to compare with MODIS. As you can see, much lower here in the open ocean as you go here.
[51:10] Chlorophyll A concentration increases with the coast. There are missing data, right, as in in this narrow part. It is because, as you
[51:20] can see, there is cloud presence of cloud in the flag. You can see also it's shallow water. So, that is where the
[51:27] issues issues data not retrieved. Let's look at C DOM index. index. We'll look at the color bar here. Again, these data, as we
[51:38] saw earlier for the Chesapeake Bay, they're missing because of the shallow water or turbidity, as you can see in
[51:45] the flag, but it gives you some idea of these are the data are missing. Uh sometimes if you look at time sequence
[51:53] of these images, it tells you how sea dawn is varying, and that's all you can do with this index, but you can look at
[52:02] POC. POC. Again, the data are missing because of shallow water, it's selling shallow water, and presence of cloud. It's
[52:10] probability that SST. SST. So, there's coverage here, and VIC. It shows again these patches and then some missing data because it's
[52:23] basically in shallow water. So, um in open ocean, it works better the algorithms for shallow water, sometimes
[52:31] there are issues, uncertainties, but again, looking at time sequence, at least there is some indication, um and then because it's not possible to
[52:42] have in situ data everywhere, so at least this gives some indication, um it it complements in situ data in in many
[52:50] cases, even if it's shallow water. Finally, let's look at the same thing from VIIRS, and then we'll complete the
[52:57] demonstration. demonstration. Um movie A. Okay. Okay. Here, you can see pixelization in VIIRS. There is SST. We can
[53:15] the color like before. And uh if you look at SST here from MODIS, and this is from
[53:25] VIIRS. VIIRS. Yeah, values are different, but patterns are very similar. We will do statistics in the next session.
[53:34] POC POC from VIIRS. Then also look at sea dawn index. This is really it's not showing from
[53:46] here here very well. But But this basically you see the information for VIC. Again from here and uh
[54:00] So this last part of our demonstration just showed how to display data, how to manipulate color, how to see different
[54:08] flags, how to see pixel level radiance for the two case study regions and from two sensors. So we will conclude this demonstration
[54:20] now. now. Next we're going to have Juan Torres talking about CoastWatch. So I request you to talk about that.
[54:30] So thank you. Okay. Well, this here's a demonstration that I wanted to to do in regards to the
[55:18] NOAA NESDIS website, ocean color website and it's a website that is particularly useful for for visualizing or at least to have an idea on what are
[55:29] the some of the conditions uh in your in your study area in regards to different water quality parameters like
[55:37] chlorophyll A stuff uh vertical attenuation coefficient among others. And uh first I want to go over this uh
[55:46] list of uh of uh uh different things that are uh available. Yeah, you can see that there are
[55:53] different products for beers and there's even a a Sentinel 3 products that are already available at level 2 or level 3.
[56:01] Um there's some information about the data processing, how it was done, and about the ocean color uh website in in general.
[56:11] And um here's some data about calibration validation of the uh of the imagery. Very important also, there's a there's a
[56:21] link here for peer-review publications and it it is on a yearly basis. It's uh it's uh updated very frequently.
[56:30] And this is particularly useful because um pretty much all of them have their DOI and so you can you can go directly
[56:37] to that link. And um most likely you'll be able to download most of them. And like I said, it's by by by year.
[56:48] And uh and you can you can you can download uh a lot of them. It's it's particularly
[56:53] useful for for but if you're working with uh with your own set of data and for references for uh future uh
[57:01] publications as well. Also, there's I wanted to show that there's here's uh the uh well, this is the the link that used
[57:09] to be for the FTP site. It's not I don't think it's available anymore. But this is the one that I we're going to
[57:15] see today, the CoastWatch ocean color data uh site from from from from this main NESDIS site. And
[57:25] And um I wanted to show you that one in particular because it has products that are already available for beers
[57:36] and for for Sentinel 3 at different levels. And some of them are near real-time products such as the one that you're
[57:45] seeing here for ocean color. And others are what they what are what are called science quality products. So this these
[57:52] are they have more rigorous processing. And there there could be a delay in terms of you might not be able
[58:00] to see what it's their science quality data sets for let's say yesterday or today, but there's a delay because it
[58:11] needs some time to be to be processed. I think the delay is about 2 weeks or so.
[58:17] But anyway, it's it's it's not bad, definitely. definitely. And other real-time near real-time products from from beers.
[58:26] And And on on let's they're on a 20-day 20-day merge also. also. And if you go down here, here's the
[58:36] products for Sentinel 3 global coverage and also for CONUS, so continental US, but it includes Hawaii as well. And also there is
[58:50] access to the some anomaly products, particularly for chlorophyll. For For for beers, these are very useful if you want to see what are the trends
[59:03] if there's been any any difference in the trends over time with with some of these data sets.
[59:10] Okay. So here's I encourage you guys to to go to this website. website. I also wanted to mention some some other
[59:19] uh uh other links that are here that are that are particularly useful. There are field observations, uh MOBY website uh for the
[59:28] uh buoys is uh is uh something that people uh rely on a lot quite frequently. In situ
[59:37] situ uh monitoring data for beers in particular, for ocean color. The and there are other resources, the user
[59:42] forum is very use- ful because um um you can talk to other people that have used the data or if you
[59:49] have any questions, you can post them there. And someone will answer them eventually. eventually. And about the the people who work in the
[59:57] program, who to who to contact if you need need some sort of uh help with it. There's
[1:00:02] even a phone number here for a for the uh help desk that it's uh also very useful.
[1:00:08] Okay. So, going back again to our main to the main website, to the NESTED website, I wanted what I wanted to do
[1:00:15] was to show you um you as an example and again, feel free to you're free to to to to play
[1:00:24] with this and and go through all the different uh data sets uh on your own. This is just an as an example because
[1:00:31] this is an this is a MODIS beers uh webinar. I wanted to show in particular the beers so so MPP uh
[1:00:39] ocean color view. Um when you open the the site originally, you will see that it it's uh
[1:00:48] it shows in uh it also it also shows the true color images or composites for the whole
[1:00:53] world. world. And And you see here's a timeline that you can look for particular years or months or
[1:01:01] days, whatever it's more useful for you. There's a daily data, there's an 8-day uh day composite, monthly as well as a
[1:01:09] climatology. climatology. And there are different products uh available here. Here's a list of them. Um Um uh this is the for instance, the
[1:01:20] chlorophyll A and KD 490, which we'll see in a moment. Uh but there's a bunch of others. Uh KD par, uh water leaving
[1:01:28] rate, and normalized water leaving radiance at different wavelengths. And uh there are some in par and suspended particulate matter
[1:01:35] experimental products as well. As well as uh the uh different coefficients for absorption of phytoplankton, uh colored dissolved organic matter,
[1:01:45] among others. So, feel free to to browse through through uh this website. Now, when you look at this, you
[1:01:54] you see that there's a it's a true color image. So, there's there's a lot of uh a
[1:01:58] lot of uh clouds uh through the world. Uh if you want to visualize uh the some of the products, then you
[1:02:08] just need to uncheck the true color, and here you are. Here you have the the In this case
[1:02:15] in particular, it shows the chlorophyllate uh uh data. for beers, and it's on a daily basis. And I have here the September 4th as an
[1:02:27] example example of the of this year. You can go through anywhere in the world where there's data. Obviously, there's
[1:02:34] there's going to be the uh because this is is uh optical data, there's going to be a
[1:02:38] lot of sites or uh areas where there's no data available for that particular day. Let's say uh we zoom in here in the
[1:02:46] Caribbean. Caribbean. You see that, for instance, here's a uh here's a swath, and there's there's there's a lot of sites here that there's
[1:02:53] no data because uh most likely there was uh some clouds uh in that area. But, uh then you can just uh search uh
[1:03:03] our any particular day uh during the year, and you'll see you'll see what it's the what it what's the different
[1:03:12] what data is available for for any of those years. Again, this is only for visualizing. It's not it doesn't have a
[1:03:19] uh uh an area where you can do an actual download from this particular link. Um Um but you can go to the webpage that I
[1:03:30] showed earlier or you can even download the you know the actual data as how we showed during the last session.
[1:03:39] From the from either ocean color web or other website. Um I wanted to as a just to
[1:03:47] walk you through how you can see some of it. I am originally from Puerto Rico so I'm going to show you
[1:03:54] uh uh let's say we want to zoom in into the the island here. There you go. Here's let's say for October 20 I mean
[1:04:06] August 29th. Yeah, I'm just again as a as an example. You can go to pretty much any day. There's like I
[1:04:14] said there's a delay in the in the in in in the when the products are going to be available just because they they
[1:04:21] require some some time for processing. In this case we're seeing KD490 for one of the first products. You can zoom
[1:04:30] in into the island. This is as far as it goes. goes. Um but it is very useful because you can
[1:04:39] move around and things that are 4 km pixels and you can move around it and have an idea of what of in this case
[1:04:48] what was the what was the vertical attenuation in in 490 nanometers through the coastline. Um there's a caveat here that
[1:04:59] that I I'm guessing most of you work with remote sensing have have encountered is that for instance if you
[1:05:05] go really really really close to the because these are 4 km pixels really close to the to the shoreline there's a
[1:05:12] chance that you will see some anomalies there. For instance, in this case and clearly high KD 490
[1:05:21] value value that you know shouldn't be expecting in that in that area. Um Um Let's see let's look at the chlorophyll
[1:05:32] for instance. You'll see for I know this area very well because I've worked there for for many many years.
[1:05:40] And And typical values of chlorophyll are at the the highest are probably around three or even four milligrams per cubic
[1:05:50] meter. Anything above that is is probably an anomaly. I saw a nine nine milligrams here. Uh there it goes at some point.
[1:05:59] Um and there's for the for that particular pixel, there could be maybe a couple of things. One is there's a mix
[1:06:07] is it is a mixed pixel of of water and land. Or there's if if if it's a really
[1:06:13] really shallow area uh this area in particular is called by Yasawa in in the on the the southwest corner of the island.
[1:06:23] And and it's an area that is that is pretty shallow. So there's there's a big chance that there's an influence for the
[1:06:29] bottom reflectance in in that area and that the consequence of that is that we're seeing really high values of of
[1:06:37] chlorophyll that are most likely unreal. Um Um But for areas that are for that are a little bit off the coastline,
[1:06:47] they it's pretty reliable in terms of of uh uh of the products for chlorophyll or or or
[1:06:54] KD 490. So again, I encourage you guys to go to the website for if you're in the academia or so,
[1:07:04] it's a really neat and cool website for showing some of the ocean color products you know directly
[1:07:11] there or have your students play with the the with the with the webpage and and even find some data
[1:07:18] for for pretty much any day there's there's data available from from beers and I believe there's also here from
[1:07:25] Sentinel Sentinel they're all from Sentinel 3 as well and even go see some go see data Okay and lastly I wanted to show this
[1:07:37] website website this is in particular for those of you who are interested in coral reefs it's a
[1:07:45] from the NOAA Coral Reef Watch and they have a number of different products products available from from from this website
[1:07:54] it is an experimental product that is only available so far for the main Hawaiian Islands and for for Puerto Rico
[1:08:03] but if you work in the other what's if your study site is in one of these areas
[1:08:10] areas you can you can definitely download data from from from from from them and and it's something that we've used
[1:08:19] pretty pretty frequently actually I wanted to show you what was other products that were available but for
[1:08:27] instance before I go into that let's say that I want data from Puerto Rico again it will show here's the different
[1:08:36] products from beers the daily uh data or three-day average or eight-day average same thing for KD 490 daily or three or eight days
[1:08:52] averages averages and here's here was the link to download it cuz FTP is not supported anymore what
[1:09:01] you can need to do is that instead of clicking directly on it, click do right click on it, copy the the link address,
[1:09:09] and then open it in a in another browser and you'll be able to access the the folders.
[1:09:15] folders. You might might need to do a refreshing on the the on the cookies and such from from
[1:09:24] from your particular system to access it. But but it's it's it's it's available. And you can even download it
[1:09:33] download the data as a graph as a time series graph. For in this case for for chlorophyll A,
[1:09:39] you see the how it varies through through the months from 2020 to 2021. And lastly, I wanted to show
[1:09:48] that there is other products available for those are interested in coral reefs in particular. The bleaching alerts from NOAA for for
[1:09:57] the whole world also. also. This is on a 5-km daily global resolution. resolution. Yeah, there are different you can go to
[1:10:08] different topics or the East West Indo-Pacific, Caribbean, etc. Also, another product are the degree degree heating weeks.
[1:10:20] Again at 5 km and I and I don't want to forget that it here's a here's a
[1:10:27] just a short briefing brief information about how what is the product about. And and also you can even contact them if there's if
[1:10:38] you need additional data. And hotspots hotspots also for for for coral reefs. Sea surface temperature and the
[1:10:49] anomalies. anomalies. And And also something that particularly managers use very much is the regional virtual stations. Where uh
[1:11:00] that it it shows for the here's a bunch of the different stations throughout the the world. And what is
[1:11:10] what is what it shows the what's the possibility possibility of having a bleaching event in any of
[1:11:15] those areas based on the current sea surface temperatures in the in that particular region. Okay, that is what I wanted to show you
[1:11:26] guys guys today in terms of this this two sites that are available from from NOAA in particular
[1:11:34] particular where but they use beers data for different parameters and let's go back now to the to finish the the
[1:11:44] presentation. Okay, I want to let's I want to remind you that this one I am Juan Torres. I
[1:11:57] want to remind you that uh now that that that you can post your questions in the Q&A box
[1:12:03] and and then we're going to go go in a moment through to the Q&A part of this
[1:12:09] webinar. webinar. And And also I want to remind you that if by any chance we were we're not able to answer
[1:12:17] your particular questions eventually we will is just that we have there's a high volume of of people in this webinar.
[1:12:25] But we'll be sure that eventually the Q&A document is going to be available on our website in the next couple of days
[1:12:33] for you to download or for your benefit. Here's again the the contact information for Amita, myself and also from for Sean
[1:12:48] McCartney. Here's the the our emails and also the the course the website for this particular webinar as a reference and
[1:12:56] also the website for ICRAF. Remember that there's a lot of other ICRAF webinars available in that website. So,
[1:13:03] I encourage you guys to go and browse through through them. And also, if by any chance we're not
[1:13:10] able to answer your particular questions during the Q&A, feel free to send us an email to either
[1:13:16] Amita, myself, or Shawn. And we will do uh what we can to to to to provide an answer
[1:13:25] uh in a on a timely manner. All right. Well, thank you very much again for participating with us today,
[1:13:34] and let's go to the Q&A. Hi everyone. Let's go through the Q&A as much as we can, and if we cannot
[1:13:55] complete that in time, we will um provide these answers online. So, the first question is, I have a a
[1:14:04] question on SEADAS. Is the software in interoperable or interoperable with GIS software packages such as ArcGIS and
[1:14:16] QGIS? So, um So, yeah. The answer is that you can export shape files from SEADAS to um GIS
[1:14:24] software. And uh there is a link given here. here. Yes, so you can also save this data um
[1:14:32] that you do analysis on SEADAS, you can save that. And then open with GIS also and do further analysis.
[1:14:40] Um Could you please provide a step-by-step guideline to activate OCSSW in SEADAS in Windows. So, in Windows,
[1:14:50] I don't believe OCSSW is available yet. Not for version 8.1.0. But, But, we will check with the ocean color forum
[1:15:05] and try to provide more accurate answer that when it will be available. At which level data are geo-referenced?
[1:15:17] So, level one data are geo-referenced. What about the average transmittance? We'll have to check and let you know
[1:15:34] about that. Juan, if you know question four. Um no, but I I don't know if there's a specific
[1:15:44] answer for for that. It will definitely vary through pretty much anywhere where you are in the world.
[1:15:51] Uh Uh typically, people use things you know, instruments like sun photometers and others to to try to to get a
[1:16:01] specific value for for that particular site. But, in theory, usually as as we mentioned in the in the presentation,
[1:16:22] remember that it's a uh uh Well, from when you're looking at a at a at any image from from the ocean or any
[1:16:30] coastal area, pretty much about 80% of the image on an average is is related to the to the atmosphere. And then, there's
[1:16:38] the the rest uh is probably reflected from the from the water surface. Yeah, I think I can
[1:17:12] go over the next couple ones. I'm a little unclear about using C that's all C SSW in Windows. The page
[1:17:22] states that previously that's version 8.0 did not support Windows processing, but the current does suppose support Windows processing.
[1:17:32] So, currently the the OC SSW is not available for for Windows. It's only for visual visualization and
[1:17:41] um um You can you can you can you can both times just just do visualizations with the in Windows. Maybe at some point they
[1:17:51] will also be available for for Windows. Hopefully. Hopefully. Hopefully Hopefully it happens soon cuz there's probably a
[1:18:00] lot of people that are that are waiting for that. Um number six, I can take number six
[1:18:07] here. here. How are the in situ observations estimated every time there's a satellite overpass? overpass? Well, I would say this
[1:18:20] coming from from someone who does field work. It is practically impossible to do in situ observations every time
[1:18:31] there's a satellite overpass. Mostly Mostly because of just many many factors that that that come into place
[1:18:42] budget budget and and you know sea surface conditions and uh or or just you know weather conditions among others
[1:18:50] availability of votes etc. etc. So the for MODIS or beers when you think about uh uh as an example those two systems uh it
[1:19:01] would require pretty much daily in situ data uh to to and uh uh and that's uh you know again
[1:19:10] practically impossible. Uh you what you do is you are establish your your in situ observations timeline based on the research question that you
[1:19:17] want to be answered that you want to answer. answer. And And if there's a particular season with
[1:19:23] let's say less probability of clouds or calmer waters that are preferred um for instance if you're working in the
[1:19:31] tropics you have to take into the consideration the hurricane season or hurricane or cyclones seasons through the year depending on where you are on
[1:19:42] the planet and and that sort of thing. The important aspect is to plan your data collection as we said last uh
[1:19:50] during the last session within plus or minus 30 minutes to 1 hour uh before after the the satellite overpass. And
[1:19:59] that way you are that's uh the purpose of it is to make sure that you are characterizing
[1:20:06] basically the same water mass as when the satellite was uh flying by. So but Questions. Questions. Yeah, go ahead Amina.
[1:20:19] Oh. Oh. Uh Uh yeah I was talking about question seven. Are you talking about uh that or
[1:20:26] are you done? Uh go ahead. Uh I think we're in question seven right now. Question seven is how can I know the
[1:20:36] actual time of satellite overpass? Um Um of our desired area to acquire MODIS data. And so on NASA Ocean Color web and
[1:20:47] the software and tools there's online tools. Um there is um satellite overpass predictor and then if you click on that um it asks you for
[1:20:58] latitude longitude of your interest um and start and end dates. And so during that period how many times um
[1:21:07] MODIS is going to overpass in that latitude longitude band um it will give you time date and time.
[1:21:13] So that way you know when there is overpass. And uh if you can plan taking in situ measurements close to that time,
[1:21:22] that's great. Uh so again question eight is about Windows and SeaDAS. Um it the currently uh I think
[1:21:33] visualization analysis can be done. So if you have level two data already, you can uh work um in SeaDAS with that. But
[1:21:42] uh OCS SW, I don't think it's available. And we will check and get back to you on
[1:21:49] that. We will post that information. Uh question nine is about screen size smaller than 15 in uh can run SeaDAS or not. Um I have run
[1:22:01] it on smaller 13 in uh monitor. So I don't think it's the physical size that matter it matters.
[1:22:08] It's the uh pixel resolution and the um whether it can display 256 colors or not. That's what matters.
[1:22:19] Question 10 is can we expect OCS SW for Windows? Again, we will uh get back about that. We'll check with
[1:22:28] Ocean Color form and let you know. Do we need a source code version of for C does command line model? In command
[1:22:37] line, you can you can get you can install compiled version. So, you don't have to start with um
[1:22:44] source code. You can just get uh There's a way to get the compiled version and that instruction is there on um
[1:22:52] C does page. Install Install from previous course and it says it is updated. Is there any substantial
[1:23:05] difference difference with version 8? So, again, there is addi- addition of Sentinel 3 toolbox in um um in 8.1.0.
[1:23:17] And GUI also looks a little different um uh especially the uh color window the co- color selection window and um
[1:23:27] uh uh layer managers also uh flag uh information display. So, some of some of some differences are there, but the main
[1:23:37] thing I see is this Sentinel 3 toolbox that's there in 8.1.0. Um question three is, "Please, can you
[1:23:51] share the level one data?" Uh so, yeah, that that was done in um level uh in session one.
[1:23:59] So, it's a simple procedure um to to get the data. Um I think anything to do with Windows
[1:24:11] and OC SSW, we will get back to you about that. Uh question 15 also we will have to
[1:24:22] check because netcdf file should work on C does once you download from NASA ocean color so we will have to check on that.
[1:24:34] As we know the correct coefficients very regionally. Can we use a mix of global regional coefficients while algorithm development?
[1:24:46] Um Um I I One I'm not sure I'm clear about question. Yes, the first part is clear
[1:24:55] regionally these coefficients are different so practically for for all regions you you can you have to develop algorithm or at least validate
[1:25:08] it so Can I use a mix of global and regional coefficients while algorithm development? So I believe what you're saying is that if
[1:25:19] you have some algorithm uh like in C does it is based on C does which is um
[1:25:31] not I'm sorry but I'm not sure about global coefficients. Most of them are regional coefficients all the algorithms
[1:25:38] are. If you can clarify your question that would be great. Uh question seven is there a reference
[1:25:51] document to know more about parameters listed in C does that can be understood better before selecting them for
[1:25:58] processing? processing? Yeah. Yeah. So that's the documentation for C does. Is it possible that data MST is lower
[1:26:12] than night time MST in the ocean in any case. case. Um So, diurnal variability of SSTs um
[1:26:29] um it it also has a component of wind and also also um um evaporation evaporation of water can also change
[1:26:39] um um temperature. So, I think um it's possible in in cases um um I'm also thinking that um
[1:26:52] if it's cloudy night then there will be less cooling of the surface if you just think in terms of
[1:27:03] radiative transfer, but ocean is a dynamic place and so we so it's a combination of atmospheric condition plus winds how they
[1:27:13] they act on water and that So, it is possible that in some cases I'm not sure if it's
[1:27:21] possible that everyday everyday um daytime temperature is um lower than nighttime, but that can be cases. I it's not impossible, I think.
[1:27:33] Um Juan, if you want to add anything on that? that? Or Shawn? Next question is for atmospheric
[1:27:41] correction, you point out it depends on water's geographic and other properties. Is there a specific guide for the choice
[1:27:50] of the right atmospheric correction method? method? Um so it is um If if again I I we strongly recommend that you go to
[1:28:07] um um ocean color forum. Uh that has discussion about uh atmospheric correction. The guideline would be to know the
[1:28:23] atmosphere atmosphere and and water both that what kind of correction would be needed but if you if you're
[1:28:33] using SeaDAS then then you probably want to try all the options and see how your answers differ for
[1:28:43] water quality parameters. What are the ranges and then can you compare it in situ data and come up with a good
[1:28:49] option. In many cases I think it's the information about aerosol and cloud themselves. They they are important for atmospheric
[1:29:03] correction. correction. And And so different models where they get the information and how they treat radiative transfer that scattering processes that
[1:29:16] is a big issue. So this really is still not a final There's no final answer yet. That's why
[1:29:25] there are quite a few models and that constantly being evolved. New New sensor like base would have one
[1:29:34] advantage that in the same sensor they will have ocean color bands as well as observations of atmospheric aerosol and
[1:29:44] clouds at the same time. So that might help in better specifying atmospheric condition for atmospheric correction. So I'm I'm I'm not giving you
[1:29:57] straightforward clear answer because I don't think there is any guideline but just to try a different atmospheric correction
[1:30:08] models. This is a good question. 20 What is the advantage of generating L2 files locally to downloading them directly? Is
[1:30:22] there a difference in resolution? So L if you go to L2 data that are there in in C-DAS right
[1:30:35] now and that we calculated and those which are already available from the from the ocean color side.
[1:30:43] They are based on algorithms. They were derived when SeaWiFS was launched years ago and algorithms were developed and
[1:30:53] then they were modified for MODIS. So those are the same algorithms always used. used. Or Or if you want to develop your own
[1:31:04] algorithm, then you have to start with level one data and um work with in situ reflectance data
[1:31:14] basically. Level one reflectance data and develop your own algorithm. That's why we're starting with level one data.
[1:31:22] And then going to level two. So that another thing is about atmospheric correction. If you want to try different
[1:31:32] options, then you would you would convert level one to level two by yourself. If you just want to have want
[1:31:41] some some overall overall pattern, then ready-made L2 data you can definitely look at. We started with L1
[1:31:51] because because of these two reasons that you can pick options for atmospheric correction and other things to convert to level
[1:32:02] two. I think question 21 also is the same. Um similar answer. Uh is there any Yes, so the links are
[1:32:19] given below question 22. There are YouTube YouTube links here. They're They're tutorials about SeaDAS. Can I generate level two data from level
[1:32:31] data in Windows by other image processing software? Um Um not that I'm aware of. You can um
[1:32:46] No, there's no No, I don't think there's any software that would do that. Question 24, I just installed the SeaDAS
[1:32:55] plugin for SNAP. Can it do the same capability as the exercise in the demo? How does one do semi-analytical
[1:33:05] or analytical in SeaDAS? Um this is more advanced training. Um Um Don't think we have we will be able to
[1:33:15] cover this uh question 24. But we can we can share this question with with people who use SNAP and get back to you
[1:33:29] if we can. Question 25 is what are the background expression mathematical equations that were developed to the extra piece water?
[1:33:40] Uh so in the presentation there's a slide where all these parameters are standard parameters are listed. And if you click on those links,
[1:33:50] it describes every algorithm for chlorophyll A for BIC, for POC, for KD. Well, so all the parameters, all the algorithms
[1:34:02] are different defined defined and all the mathematical equations, which bands were used, etc. Are the products generated with L2 gen
[1:34:15] the same as those proposed for download on the ocean color website? Yes, actually, if you download uh
[1:34:27] level two, they should be pretty much the same. They they shouldn't be different. Sorry, I've been on mute.
[1:34:47] Is Is the question at V V 2011 2011 L2 LAC images Okay, yeah. So, where's images some kind
[1:35:01] of stripe pattern is shown and that's that is not uncommon for image processing. So, um that for VIIRS, we also talked about
[1:35:16] this effect it has um overlapping pixels are not considered or you don't have data. So, for VIIRS, that
[1:35:27] also is possible for a particular image that you will see stripes. But um that's basically it is the processing sometimes that does
[1:35:39] that. Um so, if the calibration has some issues, sometimes stripes show up even in that case, also.
[1:35:51] So, question 28 is there a a way to define which Python to use? Yeah, so I I think Python 3.6 or above
[1:36:04] as if you can refer to the the documentation and it um it shows the version you need.
[1:36:17] Are there safe and reliable links where we can download the requirements? That should be available from Yes, there
[1:36:26] is a link and we will provide that. So question 30 is a good question whether if there is a high and low tide
[1:36:44] would there be a difference? Um I don't know the clear answer, but it's possible. Okay, how does one deal with missing
[1:37:09] data? data? So So if there sometimes people do binning uh and so it's basically just interpolation some
[1:37:20] kind of The question 33 is is there an available online data set of historical in situ observations? So yes, SeaBASS has um in
[1:37:45] situ data and they go back several years. Uh so So if you look at SeaBass link, you can
[1:37:53] get chlorophyll and SST data. This is historical time series. Are there chlorophyll product available that were derived from Sentinel 2 data?
[1:38:07] Um, Um, actually you there is in the command line version of OC SSW you can derive chlorophyll A
[1:38:16] concentration from MSI. It's not available in GUI. But But I don't know the product available from Sentinel 2.
[1:38:48] Um, Um, okay. okay. So I think we will address the rest of the questions and provide answers.
[1:39:00] Um, we will see you in session three next Tuesday on 21st. Um, we thank you all for attending
[1:39:09] this session and um we thank everyone Juan and Ashan McCartney. We also thank Brock Lovins, Nelson Odoy, and Jonathan O'Brien are
[1:39:24] our set team for helping with this webinar. webinar. And we hope to see you next Tuesday.
