# Surface Water Budget Estimation Based on Remote Sensing, Session 4/4

`https://www.youtube.com/watch?v=7A_SHnPbAGY` · id 28 · 1:31:07 · module 110 — Water Resource Management using NASA Earth Science Data

[00:01] hello everyone welcome to this last session of this webinar on applications of remote sensing for monitoring water budget
[00:10] within river basins as we saw in the last three weeks we started with overview of remote sensing
[00:21] data sets also some modeling data sets which can be used for river basin monitoring and management then we had two guest speakers both
[00:31] focused on using remote sensing and applications of remote sensing data including remote sensing based modeling data data in river basin management we focused on
[00:43] nile basin as well as in on mekong facing facing so now today we're going to demonstrate how to estimate
[00:53] water budget or how to look at freshwater components for two specific river basins and so it's the surface
[01:01] freshwater budget estimation tutorial so overall outline would be we'll just review all the data sources that we went
[01:11] through in last three weeks and then we will have a live demo in which we will show how to access data and how to
[01:20] analyze this data using gis or open source qgis and we're going to focus on two river basins
[01:28] basins potomac river basin in usa and parana river basin which is a trans boundary river crossing argentina bolivia brazil
[01:36] and paraguay and then we will summarize not only today's session but also we will see uh some comments based on all four
[01:46] sessions and some take-home messages so that you can use all these data in your own river basin if you wish
[01:55] just a reminder this is the website as always and both the homeworks are posted on the website they're due first one on
[02:04] 4th april the second one on 17th april and again you once you complete the homework and if you have attended
[02:14] all four webinars you will be awarded a certificate of completion and please wait a couple of months
[02:21] after the webinar is over to receive your certificate we'll start with the review of remote sensing data sources that we saw earlier
[02:35] so so just to recap when you want to monitor water availability in a basin or fresh water
[02:43] availability these are the major components or fresh water components that needed so precipitation evaporation and transpiration or evapotranspiration
[02:54] infiltration in soil soil then surface water such as soil moisture a reservoir in addition you need groundwater storage
[03:06] and runoff these components provide complete water budget and as we mentioned we're going to focus more on surface in this webinar
[03:16] we talked about several satellites and sensors and spectral measurements which can be used which are used for deriving these water
[03:25] budget components specifically we talked about tremen gpm and that provides precipitation we also saw in um nile basin and enemy basin applications
[03:38] these data were used taran aqua motors uh provides evapotranspiration and snow cover data landsat provides vapor transpiration
[03:49] so these we we saw some of the products based on these data smap provides soil moisture grace and grace follow on ground water
[03:59] and json provides reservoir height so this is complete water budget we're going to focus mostly on precipitation
[04:06] evapotranspiration evapotranspiration and soil moisture and also runoff runoff so here is a link to get more details
[04:18] about all these measurements and how water budget components are derived we talked about global land data assimilation or gl das we saw
[04:29] application of aldos in nile basin and now now we're going to use this data today to demonstrate our river basin water budget
[04:39] estimation as we know inputs for gldas they come from trim also weather data they come from observation based data from princeton
[04:49] university vegetation mask and other land water mask leaf area index this comes from modis and clouds and snow they come from nova
[05:00] and tmsb satellites as we saw earlier and and this model provides output that includes soil moisture evapotranspiration surface
[05:11] and subsurface runoff and snow water equivalent last three quantities are quantities which you you cannot really measure you they have you have to
[05:21] calculate or derive from other measurements so that's one advantage of this system that we saw earlier that it provides all the components
[05:31] including precipitation vapor transpiration and runoff so that you can look at surface water budget components with that we're going to look at
[05:43] estimation of water budgets and here is the first order equation as we've been seeing earlier also precipitation is it is the source and
[05:54] sink or so surface receives precipitation from which evapotranspiration evapotranspiration is lost to the atmosphere this is the change in storage its
[06:04] surface surface runoff and base flow these two are surface and subsurface runoff or water that either flows on surface or in
[06:14] subsurface subsurface and so these are all the components defined here now it's important to note here that
[06:24] that gl does or any model when we look at these parameters it's a column model and lateral flow is not included so this
[06:34] equation is valid in in the sense that runoff and subsurface runoff actually it is there is no net
[06:42] input in the river basin it it's really going through the eventually go through the the river stream or discharge
[06:51] so that is one of the assumptions in deriving this another important thing to remember is that when
[06:57] we look at these parameters parameters from geodust like system there is no irrigation or other management such as reservoir or
[07:09] dam management are included so this is all natural hydrologic cycle that we are looking at so to actually obtain water budget
[07:19] components you can use number of data sources as we've been seeing precipitation can be from gpm image this is in near real time you
[07:29] can get it or in recent years and you can also use gl dash for the same eop transpiration we saw lxe mod 16 we
[07:39] also saw metric which is really high resolution et but gl dash also provides et uh storage which is change in storage in
[07:49] surface uh water is soil moisture source map and gl dust provides this and runoff it's not directly observable
[08:00] observable from satellite but gl does can provide that so next we are going to go through how
[08:07] to access and analyze these data using web tools and qgis so these are the web tools we talked
[08:14] about earlier for gpm imerg ngldas geomani is the tool that we had an overview of we also talked about alexey ngldas um
[08:28] et so servir global provides alexey giovanni as you can see provides all of them so gl das and smap they're all
[08:37] available from giovanni n appears these are all the website given here that you can access these tools
[08:47] what we are going to do is we are going to demonstrate data access basically from gl dash for these two
[08:54] river basins we'll use banana river basin this uh as shown uh earlier demonstrated hydro sheds was used to get
[09:03] these river basins and also the sub river basins or sub watersheds within the river basin piranha and potamic
[09:10] river basin we will be using gl dust because all of these components are available and one advantage is that
[09:19] they're all at the same special temporal resolution resolution if you use all the satellite sources there is more processing involved other
[09:28] suppose you use image precipitation and et from say modis or landsat different resolutions in space and time are there so you have to do
[09:38] further processing to decide to derive border budget overall in here gl das has that advantage that everything is
[09:49] uniformly greeted in space and time so what we're going to do is we're going to use use giovanni to first access gldas data
[09:59] and then we'll also have a demonstration if you want to download bulk data from geodes how can you do that so that
[10:07] demonstration will be there too that uses quarter earth science data and information service also as you can see these are the
[10:17] website that we will be looking at in addition we will be looking at qgis we will get gldas data into qgis to
[10:26] actually actually calculate water budget or get water budget components there is a link here in our set webpage which
[10:37] describes how to download and install qgis on your computer so you can use that if you do
[10:44] not have a gis software on your computer so before we start uh the demonstration we want to
[10:54] show comparison of precipitation from different sources to different sources sources we've been talking about satellite based precipitation from gpm emerge and then
[11:06] gl dash uses precipitation from trim or tmpa precipitation is the most important component for fresh water and that's the
[11:17] source of fresh water in any river basin so here we want to show a comparison between these two sources
[11:25] what is shown here are maps of precipitation in piranha river basin and potomac river basin and what it shows is
[11:34] average precipitation between april 2014 to june 2018 from gpmi image and it's in millimeter per month and
[11:45] and in the bottom panel what is shown is time series of area average precipitation this is over piranha basin
[11:54] and over atomic basin the blue line shows emerge precipitation and orange shows from gl das so the point here is
[12:03] that that we wanted to see that since we are going to derive water budget estimation from gl does at
[12:11] least how uh it compares with a recent satellite and as you can see that the uh both
[12:18] gpm immersion tmpa based precipitation used in geodes they agree quite well in both these river basins um and again this is monthly data
[12:29] between april 2014 to june 2018 so there are some small minor differences and they maybe because of
[12:40] trim and gpm they have different special and temporal resolutions trim is quarter degree and every three hour whereas gpm image is one tenth of a
[12:50] degree every half hour so there are some minor differences you see but they're not huge differences and so that's a
[12:59] indirect validation for like gl does getting precipitation forcing right also the annual cycle is captured nicely by
[13:06] both the satellites another thing to notice here is that in parana river there is a very nice annual cycle with
[13:16] maximum precipitation in december january february or winter months which is is uh summer in southern hemisphere and if you go to potomac river basin
[13:27] which is in mid-latitude in northern hemisphere you can see higher variability of precipitation and actually may june july um so summer
[13:38] months they have higher precipitation and so that that's a different annual cycle but main thing to notice here is
[13:45] that because um this is with latitude precipitation system you see that um precipitation has high variability whereas here it's mostly
[13:57] related to motion movement of itcz and because of that there is a clear december january february maxima in precipitation so what
[14:08] we will do is when we demonstrate we will focus on rainy seasons in both the basin and then
[14:15] we will also show time series of different freshwater components here is a list of what we are going to
[14:25] do next we will first download data by using giovanni the web tool that we reviewed in session one
[14:35] a note here is that for downloading data from giovanni we have an account on nasa earth data
[14:43] and here is the site where you can register if you don't have an account here is the website once you register
[14:50] with username and password you can download data not only just from giovanni but also from other nasa data
[14:57] centers once we go to giovanni and download data we are going to focus on looking at maps
[15:06] and time series in geomani and then we will download this data and look at water budget components for
[15:14] piranha and potomac river basins by using qgis we will focus on 2017 and 18 to see inter-annual differences as we
[15:25] saw in the previous slide as precipitation was changing quite a lot between these two years one thing to note here is that primarily
[15:34] we are going to focus on gl das to look at all different water budget components but we are also going to start with
[15:42] imerg gpm image precipitation and this is because image precipitation is one of the high resolution data sets
[15:50] available from satellites it's one tenth of a degree latitude longitude and half hourly hourly and it is available in near real time
[15:58] also with four to five hours data latency and 12 hour data latency in some cases cases so if you are interested in monitoring
[16:07] precipitation week by week or even day by day this is the data set to use this will be extended from 2000 onwards
[16:16] in near future so that inter-annual variability can also be looked at by using it this data more importantly for forcing any
[16:27] hydrologic model these data will be quite useful and that's why we'll start for demonstration purposes with imerg
[16:35] and then we'll do the same with gl das we'll download data data using g1e overall flow will be download data using
[16:44] giovani then import these data into qgis and do further processing so we change projection of the data that we get into
[16:54] gis we clip it to river basin and we change units of some of the parameters that come from gl dash this is an import
[17:03] important step that we will review in a minute minute and finally we will see how to estimate water budget in sub
[17:10] watersheds and then overall over entire basin so so for units in gl dash here is a documentation of all the data sets and
[17:21] how different data sets are given in the outputs so precipitation and evapotranspiration these data are available in kilogram per
[17:31] meter square per second and so that if you want annual precipitation accumulated over entire year then then one has to take the precipitation
[17:45] in this units and convert it so that you have multiplier 3600 seconds per hour 24 hours per day
[17:56] and days in whatever time frame you're interested in so for month it can be days in a month or if it's season it's
[18:07] seasonal number of days and year like 365 or 66 so evapo transpiration and precipitation require this multiplier to change units
[18:18] for runoff and base flow these are accumulated over three hourly period they are in kilogram per meter
[18:26] square and to get them in other time interval we need to multiply by eight three hour per day
[18:34] interval so multiply by eight and number of days so we will be doing that in qgis also before we actually can look at
[18:43] total water budget so these are going to be the steps and now next we will start with giovanni
[18:51] we will search and download data by using giovanni as you can see on this webpage there is
[19:01] a keyword search one can enter either product name if you already know or can have source name
[19:08] such as gpm or gldas if you don't know which product to use then one can search by disciplines or by
[19:16] measurements measurements but since we already know we're going to type imerge here once you once you type the product name
[19:26] it shows all the options available in this case you can see i merge early and emerge late these are the data sets
[19:35] with four hour four to five hour latency and 12 hour latency respectively these data can be used for near real time
[19:43] estimation of precipitation imerge final is a research quality product in which satellite data are merged with rain gauge data and so these merged data
[19:56] require processing and that's why there is data latency of a few months so for research this is a great data set to use
[20:05] for more near real time early and late are more useful so we're going to start with imerge
[20:12] final final once you search for a particular product all the variables available for that product are listed here with units
[20:21] corresponding units source source temporal and special resolutions and beginning and end dates are given here as you can see for final these data stop
[20:33] in june of 2018 so there is a latency for this data set for demonstration purpose we are still
[20:41] going to use this and we are going to pick this merged satellite gauge precipitation estimates which is monthly data here as you can
[20:50] see there are daily and hour half hourly data also available we will use monthly data data and you can choose a unit also we can
[21:00] look at millimeter per month which provides accumulated rainfall over a month so pick merge satellite data monthly
[21:11] here there are random error for this data available too if one wants to explore what the errors are
[21:19] for for top selection here that is temporal selection to begin with we will look at entire period so it is 2000
[21:31] april 2014 april to june of 2018 just to get idea of mean precipitation but this also shows how to pick
[21:43] different months if you have daily data then through calendar you can pick dates and if it is half hourly data
[21:53] hour and minute can be chosen through this this box is here so for this what we will get is mean
[22:02] monthly precipitation averaged over these years for for now we are going to pick data for piranha river basin and
[22:15] based on the shape file we have come up with this coordinates with these west and east longitudes and
[22:25] south and north latitudes so once you enter that and click on this symbol here you can see where
[22:34] the domain has been selected so this is for parana basin and once you select select temporal and special and variable
[22:43] selection there are analysis and visualization options up here there are maps maps there are time average maps you can
[22:52] animate over this period of animation of precipitation time average overlay map and monthly and seasonal averages can
[23:01] also be found we are going to look at time average map there are other options that one can
[23:08] explore that is time series also available available and uh their histogram and zonal mean can also be found for further analysis
[23:18] once once we choose all the options we can plot data by going to this icon and it launches a workflow and shows how
[23:29] it is progressing i've already done that to save time here so here is the map of merge satellite gauge precipitation
[23:38] estimates final this is one tenth of a degree millimeter per month and this is averaged over this
[23:46] period and this region on the right hand side you can see the scale or color bar important thing to
[23:54] note here is that there is a multiplier or scale factor here which is 10 and so this is more like
[24:02] 10.92 and this is 330.58 millimeters per month so please always check that there is a scale factor
[24:11] usually available here or given here this provides this box with precipitation so this allows you to visualize
[24:22] visualize to download this data you can go to this download option here on the left hand side
[24:29] and and you can have multiple formats here from net cdf png png and kmz which you can view with google earth we are
[24:40] going to download geotiff image so we can then further view it or process it in qgis just by clicking on this
[24:50] you can save this image on your computer which i've already saved for later use once you have
[25:01] have downloaded the data you can go back to data selection back to data selection and choose any other analysis option or
[25:10] other data if you wish just just to show time series we are going to have area average time series which we just
[25:18] saw for gl dash and i merged earlier in the presentation so area average time series can also be found just by picking
[25:28] that and plot data again again to save time i have this time series already and this is the plot of the time series
[25:41] again for imaging precipitation this is the time series we saw as you can see 2017 and 18
[25:50] there was dif there were differences in peak precipitation of several millimeter per month this is average um
[25:58] accumulated over every month so what we're going to do next is we're going to look at these two years
[26:06] 2017 and 2018 we will go to gl dash and look at different water budget components for surface water balance so
[26:15] that is specifically precipitation evapotranspiration and surface runoff these three quantities we are going to look at we can also download and look at
[26:26] base flow runoff and soil moisture just for comparison or getting overall information about these parameters also so what next we will do is we'll take
[26:38] annual annual mean mean water budget components using giovanni for these two years and then we will focus on rainy season also to
[26:48] see how overall water components change so going back one can select now with gldas there are multiple options again for
[27:07] different versions and and so here 25 is for quarter degree so 0.25 and one here is 1 degree
[27:19] so we will choose 0.5 degree option and we'll choose the latest version this is monthly 2.1 version from
[27:29] noaa or 0.25 gl dash nova 0.25 version so we click on that we can uncheck that and search gl dash data
[27:42] once you search all the entire list appears all the data sets available from the model are listed here
[27:51] and very important to note here are the units for each of the parameter we are going to choose variable
[27:58] evapotranspiration then then total precipitation rate so total means it includes both liquid and frozen precipitation if there is snowfall then
[28:16] it's also included in there further we will look at storm storm surface runoff and one can look at base
[28:27] flow groundwater runoff also although for annual budget we will be looking at just surface runoff and as you can see here
[28:39] the the availability is from 2000 to 2019 february there is a little bit of latency here uh
[28:48] uh one thing is that starting from 2000 where satellite data are assimilated in it so this is a relatively long time
[28:56] record so one can take mean and use that to look at inter annual variability with respect to that also
[29:04] for now what we're going to do is pick 2017 january january to 2017 december december and still this is piranha basin so this
[29:20] is going to provide maps maps time average maps so average annual maps of these parameters again you can plot data here
[29:33] and we will see that we already have this data set so so plots plots these are gl dash data
[29:48] for 2017 january to end of that year uh because it it takes zero gmt on this day it says january
[30:03] 2018 but this is 2017 january to 2017 december midnight so here are all the maps you can see there are precipitation
[30:16] evapotranspiration again there is this multiplier here this quickly provides special pattern of different parameters here is total precipitation
[30:38] and that's that is storm surface runoff so this you can download the same way just by clicking on the download
[30:47] all these geotiffs can be downloaded so this is evapotranspiration precipitation surface runoff and base flow just by clicking on
[30:58] this these files can be saved on the computer and i have already saved them for further use
[31:05] we'll look at it later now going back we're going to pick 2018 2018 january to 2018 december
[31:27] and plot data will provide maps and download options which can be downloaded for picking seasonal one can go to say 2016
[31:42] december 2017 2017 february so this is december january february starting from 2016 december to 2017 february which is a peak rainfall
[31:58] season in piranha basin by doing that and then plotting data we can get maps of these seasonal
[32:07] seasonal variables similarly for for december january february centered in 2018 2018 we will choose 2017 december to
[32:21] to 2018 february this provides rainy season for december january february 17 18 and we can contrast these two using
[32:34] gis later but here you can already see these maps if you look at plots this is december january of
[32:48] december january february of 17 and you can quickly look at the maps and compare visually so this allows you to look at or analyze
[33:04] data without even downloading and if you're not interested in detailed study you can just view and save this as
[33:11] images or you can download save and then later use with different analysis options that we will see
[33:20] so this is uh what we have already downloaded for parana river basin and also for potomac river basin these
[33:29] data are downloaded so next what we will see is we will close giovanni we will go to qgis and
[33:40] look at water budget components through through gis gis clipping to the parana river basin shape file changing
[33:49] units and then combining different different parameters so i'm going to stop giovanni and start qgis qgis analysis here is another website
[34:03] that we want to introduce it's disk or disk gsfc nasa gov this site this tool allows you to subset data
[34:13] temporarily and especially just like giovanni but it allows bulk transfer of data data so as we saw gldas which started in 2000
[34:22] and extends to present similarly other data sets such as trim also is a long-term data set if you are interested in looking at
[34:31] inter-annual variability or long-term mean and want to download all the data sets on your computer then this is a
[34:39] site to use this requires login also through nasa earth data username and password once you log in you can
[34:49] search data by different categories like in giovanni or if you know the product name name you can enter it here
[34:57] and we are just going to use gl das nova 2.1 version that we saw in giovanni giovanni once you search all the options are
[35:07] available available this is quarter degree this is three hourly this is quarter degree in one month and so on this is the data set we
[35:16] use from gmani and we're going to again look at it how to get bulk download you can see that other data access tools are
[35:25] available here including giomani the one that allows us bulk download is subsetting and getting data here there is a
[35:37] time time range that one can choose and for demonstration will start in 2018 january and go all the way to the latest month
[35:47] available for for subsetting specially one can either draw a box approximate box or if you know coordinates which we do for prana river
[36:02] basin you can enter longitude and latitudes here and then it shows where this region is you can also
[36:12] pick variables to download the model variable names and descriptions they are provided here along with the units
[36:20] we will start with evapotranspiration surface runoff base flow and total precipitation once you choose these parameters you can just say get data
[36:50] and it just comes up with list of files these are in net cdf format so these are monthly files as you can
[37:02] see january february and so on this is the range instruction for download is given here by clicking here download the list of
[37:16] links once you download here it saves all these file names as a text file and then on your computer either windows linux or
[37:28] mac any you can go to to the x term or command line and then use either wget or
[37:38] curl command along with this text file name and that downloads all the data on your computer just by clicking on this girl
[37:49] wget you can see the instruction of how to download these open source software and then use install and use on your computer to get
[38:00] the the data data so this is just a useful website that allows bulk data transfer now we're going to go and start
[38:12] looking at qgis analysis so now we will analyze the water budget components that we downloaded from giovanni using this qgis interface
[38:26] here is the window i just opened qgis window and have added open street map through open layer plugin
[38:37] as a reference map or base map in addition i have added the parana reverse basin shape file which we
[38:45] downloaded or extracted by using the hydro shed 2 in session 1. so this is the shape file now eventual
[38:54] goal of this exercise is to estimate different water budget components and overall overall water balance in each of these basins and for that we
[39:06] have to know area of each basin if you check properties of the shape file you will see that the coordinate
[39:16] reference system for the shape file or crs is wgs 84 simple let long projection or crs but for for more accurate area
[39:29] estimation it's important that we use projection which is appropriate for this region region and so for that we are going to reproject this
[39:39] shape file in more appropriate crs and here we've chosen for piranha river basin this one south america albert
[39:50] equal area koenig when we go to putamek river basin we will use usa contiguous equal area conic so for now
[40:00] this is the crs that we are going to use all water budget components that we include in qgis will have to be
[40:09] converted or to the crs so so here we can pick the file name and add add click ok to get the reprojected shape
[40:21] file i have already saved saved the projected shapefile and so i'm going to add that in here
[40:35] so this is the reprojected or with different crs shape file right here now we are going to start adding
[40:44] different water budget components we will start with gl dash data as you can see these are the data we
[40:52] downloaded by using giovanni if you recall in giovani the file names we downloaded were quite descriptive descriptive and quite long and i have
[41:03] truncated the names just for convenience so so it shows source of the data data parameter and for which year the data
[41:13] were averaged so here is for example this is precipitation for 2017. so we're going to include that
[41:23] layer in here and this is the box coordinates that we provided to giovani and extracted the data
[41:32] again again what we're going to do is save this in appropriate crs and we're going to save this file as
[41:47] precipitation projected projected in different crs and we are going to save it temporarily for now and you can say okay
[42:02] and you will be able to see slight difference between the two projection projection we are going to remove this
[42:09] file file and work with this reprojected file from now on so now for precipitation again we need
[42:20] to do one more operation as we talked earlier we have to clip this data to the shape file for that
[42:29] we are going to use raster extraction clipper function function here is the layer that we want to clip
[42:38] to the shape file and again we we can create a temporary file here and select mask which is the shape file to which
[42:57] this layer has to be clipped and then by clicking ok you can get this clipped shape file
[43:07] so if you see this precipitation data now are clipped to this shape file next we have to do unit conversion for
[43:16] precipitation precipitation as i mentioned earlier these data are in kilograms per meter square per second and we want to find out annual
[43:27] precipitation so we are going to scale this by a factor and for that we are going to use
[43:34] raster calculation so use raster calculator calculator we're going to save this file as precipitation for 2000 as
[43:49] annual annual precipitation precipitation we're going to use this clipped precipitation layer that that will add that to this raster calculator
[44:00] expression and now we will multiply this by by 3 600 seconds per hour multiplied by 24 hours per day
[44:18] multiplied by 365 day per year so now you can see that this annual precipitation is given in kilograms per meter square per
[44:32] year rather than per second so this is the data that we will be using to estimate water budget
[44:41] next next we are going to add et et okay okay and et also has the same units we have
[44:50] to go through the same operation where we clip the file and change the unit now et also is in kilograms per meter square
[44:58] per second and so we do exactly the same operation to get this data run off on the other hand and i'm going
[45:07] to demonstrate that here that that runoff data they are in kilograms per meter square per three hours so they are accumulated
[45:21] over three hour so for this once we clip this data and i already have clip data here
[45:31] so i'm going to add that and bear with me while i find the file so this is the clipped runoff
[45:57] so this is the clip run and to get that in in annual units we use raster calculator
[46:07] and save this file as and you will run off so we choose clipped runoff data and multiplied by
[46:29] eight eight so there are eight three hour blocks in 24 hour day so we multiply this by eight as this is
[46:37] accumulated for three hours and then multiplied by number of days in the year so that is 365
[46:45] 365 and so now runoff runoff here is in kilograms per meter square per year so now we have all three precipitation
[46:55] et and runoff once we convert this unit to annual units then we can actually calculate approximate water budget for surface
[47:06] water budget and i have already done this for both uh 2017 and 18 so i'm going to
[47:26] add that project to the qgis here i have you can see here precipitation precipitation evapotranspiration runoff for 2018
[47:38] annual annual and precipitation evapotranspiration runoff for 2017 17 annual so these data were first reprojected then clipped to
[47:49] shapefile and then units were changed then then colors were added and we can just just see how to one example
[48:02] you can go to properties and style choose single band pseudo color you can either fix minimum or maximum or
[48:11] these are actually the ones that were found in the data so they they that range is kept here you can pick
[48:19] appropriate color table and use use i have chosen 20 equal interval here for for the precipitation and that's what this is showing
[48:34] and that is this is 2018 and this is 2017. so as you can see 2018 clearly had more rainfall here in
[48:46] the eastern and northeastern part of the basin and this was uh we also saw this in imerch earlier when we looked at
[48:54] time series also 2018 had more rainfall and if you look at the special pattern it is this region where 2018 had access
[49:02] rain over 2017. similarly similarly i have evapotranspiration for both years and the values you can click and see the table here
[49:16] they range from 480 to 1473 for 2018 and here they go up to 1461 so not a whole lot of
[49:28] a difference but again you can see that if you this is 2017 this is 2018 so you can see slight difference in
[49:39] pattern pattern so evapotranspiration clearly was here more in 2017 and more here in 2018 so interannual differences you can see
[49:52] by looking at these maps lastly this is runoff data this is runoff for 2018 2018 and then
[50:04] this is runoff for 2017. so you can see that the location where maximum runoff is occurring is changing in two years
[50:16] and that will depend on a number of factors such as precipitation itself uh terrain what kind of soil there is
[50:25] so a number of factors will decide how runoff changes but so these are some major differences and some
[50:33] subtle differences are there where you have less precipitation here here that is both evapotranspiration and and runoff both are less
[50:46] as one might expect so these are all the data that we have and to estimate approximate surface
[50:55] water balance what we can do is we can use again raster calculation go to raster calculator and
[51:05] and we can choose a file to save the data here you can so say water balance for 17 say
[51:21] and then in calculation you would use precipitation which is the source minus minus evapotranspiration which is the sink
[51:32] and and minus minus runoff runoff this is a sink 2. so with this expression expression you will be able to get
[51:44] water balance that we already have here so here is the approximate surface water balance derived from precipitation
[51:56] evapotranspiration and surface runoff as you can see from the values so precipitation and evapotranspiration they are the two major components
[52:09] runoff is relatively small order of magnitude small compared to precipitation and evapotranspiration but nonetheless it contributes to overall balance of how
[52:22] much much water is available in each sub basin so here you can see it ranges from -158
[52:32] to to 1549 1549 this is for 2017. so these are the regions where there is deficit of water so runoff and
[52:41] evapotranspiration evapotranspiration are are in access to precipitation so there is deficit of water surface and here you
[52:51] have have quite a lot of precipitation more than evapotranspiration and runoff similarly if you look at 2018
[53:04] 2018 you will see patterns are somewhat similar but there are quantitative differences between how much water is available in which
[53:13] region region so this is 2018 and this is 2017. so here you can see that also these
[53:25] there are regions where you have deficit of fresh water that means evapotranspiration and runoff they are more than precipitation and
[53:36] where usually there is less precipitation these are the area where water is lost to the basin again these are approximate numbers in
[53:47] the sense that we are not including any subsurface runoff or we are not looking at groundwater also
[53:54] but over annual time scale and over a big basin precipitation and evaporation transpiration are the um highest
[54:05] highest components so that's what we are looking at with surface runoff since we have it from gl dust
[54:10] so here is how we can download data pre-process and then estimate water balance for annual time scale
[54:23] next i want to show how you can calculate statistics to see in each basin how much what water is available or if there is
[54:36] deficit or there is excess of water so here also we use zonal statistics and choose say wb 17 here this is the water balance
[54:51] for 17 and you can say wb17 here and what we're going to do is we're just going to look at
[55:02] mean for each sub basin how much mean water is available so that by clicking ok you can calculate that and similarly go
[55:15] back and do the same for 2018. and when you do that these statistics are available or stored
[55:27] in this shapefile attribute table so click on the shape file and open the attribute table table so these are all the
[55:37] sub basin identification numbers and if you go go here you will see this is mean for 2017 water balance for 2017 and what
[55:55] balance for 2018 2018 and for there are nine if you look at the sub base in here
[56:09] there are nine sub basins in this river basin as we saw earlier each of this this this is listed here so as you can see
[56:22] these two basins they have in 2017 there is water deficit almost everywhere there is precipitation dominating over
[56:36] evapotranspiration and runoff but in these these two basins in 2017 there was deficit of water this is just surface water and
[56:45] again these what this shows this is the procedure how you can estimate more accurate data you have and complete
[56:54] budget you have if you have subsurface runoff and groundwater then you can clearly do a better water balance
[57:03] analysis analysis however this gives you some idea of which area had deficit or excess of precipitation or fresh water
[57:15] you can you can click on this and save this as csv files for further analysis another thing to note here is that
[57:31] you can open the attribute table and and go to the edit so it highlights all the basins
[57:42] you can open this calculator calculator field calculator and and you can calculate area of each of these sub basins so this would be the
[57:56] name name let's see subbasin area and and i would because these are huge basin sub basins we can
[58:18] increase increase this and then you can also choose decimal decimal with one point precision and you can increase this
[58:32] to say 20 just to be safe you go to geometry and click on this taller area double click
[58:42] and then click ok and that gives you area of each basin which is available here so this is sub basin
[58:53] area area for each of these these are available and now once you save this files you can then do
[59:06] total total water amount analysis so we are going to do that next using a csv file so before we go to the csv file
[59:27] i want to show the same analysis or the result of the same analysis for putomac river basin
[59:40] and here is the basin it's relatively a smaller basin compared to parana river basin as we talked earlier parana river is a
[59:50] trans boundary river going through multiple countries this is compared to that a smaller river basin and so you can see that this is
[59:59] clipped clipped gl dash data this is precipitation data clipped to the shape file but final results are
[1:00:08] shown here here is the final water balance analysis in the sense that it is precipitation minus evapotranspiration minus runoff so
[1:00:24] for surface year is 2017 again had had less rain in potomac basin also and so you see there
[1:00:33] are some regions where precipitation was less and evapotranspiration and runoff dominated dominated um 2018 um pretty much
[1:00:46] higher precipitation compared to europa transportation and runoff that you can see here so just just this is
[1:01:04] 2017 and this is 18. so this resolution here is a quarter degree latitude longitude and uh being a
[1:01:15] small basin you can see this clearly that these are the each green boxes in gl dash all the blues here
[1:01:25] are where you have less precipitation precipitation which is true in general that precipitation precipitation here is more and here it is less
[1:01:38] so so again here also we did the same analysis with zonal statistics and if you look at the
[1:01:48] attribute table here you can see mean for 2017 and and 18 are here and and basin area is also found just as we
[1:02:17] found for prana river basin so this file is also saved as csv and we will look at
[1:02:23] it next so so we saw that for both the river basins we went through the analysis and next what we want to see is we saved
[1:02:41] the attribute tables or water balance data for each sub basin in this csv file along with the area
[1:02:54] of each sub basin so so here is what i wanted to demonstrate that if you click if you click on
[1:03:08] view and identify feature and you can click on this area it shows which which which basin corresponds to which base in
[1:03:19] here here so what you see is sub area and then this is the identification number you can click on
[1:03:27] different sub basin and so that corresponds to the table so in this table you can go back to the
[1:03:36] shape file identify the features and look at the area and identification of the sub basin to correspond which basin
[1:03:47] we are we're talking about so here now we saw that this is the precipitation minus evaporate evapotranspiration minus runoff for 2017
[1:03:59] in kilograms per meter square plus per year similarly this is for 2018 this the sub basin area this is in meter
[1:04:11] square square so so when you look at water because of the density of the water which is
[1:04:20] 1000 1000 kilogram per meter cube so that way when you convert this numbers numbers this kilogram per meter square of water
[1:04:33] is equivalent to a millimeter of water so this is millimeter per year actually and this is average over the each sub basin so we
[1:04:45] multiply these numbers by the area to get get meter cube of um so we divide these numbers by 1000
[1:04:56] to make it from millimeter to meter and then multiply by this meter square of area so in last two columns these
[1:05:04] multiplications are shown and these are in cubic meters so these are so many cubic meters of data
[1:05:14] of water available in each sub basin so clearly here total water deficit is this much so evapotranspiration and runoff
[1:05:25] are more here uh everywhere it is more positive in 2018 but so here is like total water quantity that you can see
[1:05:35] for each sub basin and if you now you can add them all to get overall for entire basin um how much
[1:05:44] cubic meter of water was there for each year so this is this just bulk idea gives you idea of how much water was
[1:05:53] there in surface water was there in each sub basin how that each sub basin contributed to overall
[1:06:02] overall river basin water availability so this is uh this this is same for potomac potomac river also
[1:06:16] we did the same thing and you can see that of course area here is is smaller compared to parana river
[1:06:27] and also here you can see in both years overall overall mean averaged over each sub-basin mostly precipitation was more than
[1:06:45] evapotranspiration and runoff combined so so this is this gives you idea how each subbasin is behaving how much
[1:06:55] water there is per year and this information can help in managing water better or managing river basin better so
[1:07:05] the idea of showing showing this exercise was that how can you start with remote sensing or modeling data
[1:07:14] go through all these steps and and come up with this final cubic meter of water over this river
[1:07:22] basin year after year you can do this for other years too and see variability how things vary over years and which
[1:07:31] basin are more susceptible for more variability or more extremes and that can help in management better management of river basin or sub
[1:07:41] basin basin so that brings us to the the conclusion of this webinar series and for that we want to summarize a few
[1:07:56] points here so we had four weeks we started by overview of all the data sets and which
[1:08:04] provide fresh water components for second week we had a guest speaker doctor ben zucchini he talked about using
[1:08:15] remote sensing data such as trim and modi's vapor transpiration and alex evapotranspiration and grace data to estimate nile river basin water budget
[1:08:28] he also used elders data to derive nile basin water budget in certain sub-basins sub-basins then week three
[1:08:39] we had uh dr john bolton he talked about water resources and flood monitoring in mekong basin in his
[1:08:47] case he actually used remote sensing data data to to drive or force a customized hydrology model or soil and water assessment tool
[1:08:57] or swot model so we had these two in here we already had remote sensing or modeling data that
[1:09:06] were used here data were used to drive a model and customize the model to look at more detail flood monitoring and
[1:09:15] water resources monitoring and management management then finally today we just saw how we can use some of the data sets that we
[1:09:23] have been talking about uh how we can analyze and get estimate of uh precipitation evapotranspiration runoff which which are major components for
[1:09:34] surface water balance and so we saw that for two river basins two very different types of river
[1:09:41] basins one more tropical one mid-latitude mid-latitude parana was a big river potomac river was relatively smaller river with different
[1:09:51] processes different vegetation and all those features they contribute to sub river beijing also entire river basin and so
[1:10:01] so we saw um how to estimate like a cubic cubic meter of water available within sub basin and by adding that you can look at
[1:10:12] overall overall water available in that entire basin and you can do this year after year one thing uh before we summarize uh we
[1:10:21] want to point out that we did not have time to go through this seasonal contrast we saved data for um
[1:10:28] winter like december january february for parana and may june july for automatic river basins uh what we're going to do is we're going
[1:10:38] to make these data available on our website along with the shape files for parana river and potomac river basins so
[1:10:46] you can download the data in and do the analysis and follow the same steps and contrast different seasons rainy seasons
[1:10:54] for 2 years 17 and 18 and you can even look at other seasons by downloading data from you know
[1:11:01] giovanni and then going through the same procedure so this is one way to look at long-term variability
[1:11:09] also also so to summarize all freshwater components are available based on either remote sensing and or earth system models both
[1:11:22] provide all data components one thing to note though that different satellites and sensors they all have varying special and temporal resolutions
[1:11:32] and coverage also quality differs um in different sensors so if suppose you want to use say i
[1:11:39] merged precipitation and your transfer uh transpiration from landsat uh one is 30 meter resolution one is one tenth of a degree resolution
[1:11:50] so you have to do some more processing to get them all on on same same uh special resolution either upscale or
[1:11:59] downscale the data um so that is one advantage of using a modeling system like gl dash in which you have integrated
[1:12:10] surface-based and remote sensing based data assimilated into model which does water balance and energy balance both and provides uniformly exceeded more
[1:12:22] frequent frequent output output so it's easy to analyze but they both have their advantages and limitations in
[1:12:30] the sense that these are direct observations these have have model processes which may have some assumptions assumptions that we have to work with
[1:12:44] so remote sensing based data together with gis can help in assessing water budget in river basins as we saw
[1:12:52] we focused on surface but if we have groundwater data and we include subsurface runoff we can have all water
[1:13:01] fluxes in the basin on the other hand you can just look at the change in storage so just look at
[1:13:08] integrated soil moisture from surface to subsurface also look at snow depth if snow is present in model we don't have surface water so
[1:13:18] we don't have discharge information so it's very difficult to look at the storage change but that's why we looked at fluxes of
[1:13:26] precipitation evapotranspiration and runoff runoff but um you can go back and analyze soil moisture in similar fashion and see how
[1:13:35] it changes so that also should correspond to change in in p minus e minus runoff and we can do this
[1:13:46] for monthly or seasonal time scale annual or inter-annual time scale for a better better water resources and river basin
[1:13:54] management all these data gl dash data as well as satellite data that we talked about of the products
[1:14:02] they have been validated selectively with surface measurements but for any region if you want to use this it is
[1:14:12] highly recommended that you assess performance of these data sets in your own region so if you have stream gage
[1:14:20] data or if you have other in-situ data it helps to validate model and satellite remote sensing and
[1:14:27] modeling output with that local in-situ data so that you have a better idea of how model and satellite data are performing
[1:14:37] in your region before you start making decision based on water balance that you derive from these data sets
[1:14:45] and more importantly this is one piece of information very important piece of information for overall overall river
[1:14:53] basin management which is water budget components but but additionally we also need uh social economic characteristics of of the basin
[1:15:04] also river discharge so the stream gage data are extremely useful ecosystem information also is useful and so these
[1:15:14] combination of all these data will improve or have a better sustainable river basin management capability capability uh we
[1:15:26] provide we focus mostly on this water budget component part which is of course a very very important part of overall uh
[1:15:33] water base in river basin management and remote sensing or modeling data they provide very nice special and temporal
[1:15:43] coverage compared to in-situ data so that way it provides integrated integrated water resources management capability and so this overall
[1:15:55] webinar was focused on just demonstrating this piece of information coming from remote sensing and model that you can use with other
[1:16:04] information for better river basin management so we thank you for attending this webinar webinar and i want on behalf of our entire rc
[1:16:16] team team we have sean mccartney who helped me with this qgis analysis we have um brock blevins
[1:16:26] and salvin hudson he they have organized this webinar webinar and elizabeth hook she is an editor she's the editor of all these
[1:16:38] presentations so on behalf of our entire team we want to thank you for attending uh this webinar series also
[1:16:47] we have uh these slides available in spanish uh david barbardo has translated this in spanish so if you go to our set
[1:16:55] website you can look at these slides in spanish also on on website website both the homeworks are there in google
[1:17:04] form so please complete both the homework one is due tomorrow and the second homework is due on 17th of april
[1:17:15] so again thanks and if you have any questions we can address those now so uh question one is really a very
[1:17:27] important question uh about base flow so if you consider a base flow can yes it can contribute
[1:17:41] positively or negatively to surface water budget that is true is there a script that allows download of child data directly from giovanni
[1:17:59] if you we didn't have time to go through that but if you go to the download link
[1:18:06] it shows lineage that lineage has all the files and then you can click on them and download or
[1:18:14] you can save those urls and then use wget or curl and download however those files are not subsetted they are
[1:18:22] global so that's why we went through gs this this website that you can subset temporarily and specially and then download the
[1:18:32] files files also these files that you download in bulk they are in net cdf format so if
[1:18:39] you want to use them in gis you would have to either convert them in geotiff or you can use python and r to do
[1:18:48] analysis on nexita file so in in question three how to interpret the deficit in in water budget so here
[1:19:03] i would say that um we're not looking at entire water budget because we do not have we're not
[1:19:12] considering considering ground ground water or subsurface runoff just surface you're looking at precipitation evapotranspiration and runoff so when
[1:19:24] you say negative that means in that region region there was more pres uh evapotranspiration may be more
[1:19:32] vegetation or just bearing length so more evaporation so either evapotranspiration or transpiration or evaporation was more and run off also contributed to that um
[1:19:46] in in oh it's more than precipitation so that you are actually at um annually you were losing
[1:19:55] losing that water more than precipitation can replenish it that's the way i would interpret that but um
[1:20:04] we're not you know whatever is left is is otherwise would be changing storage so that negative number also indicates that the surface
[1:20:16] water storage is negative in that case so it's the same thing that precipitation could not replenish that
[1:20:24] evaporate transpiration and runoff and so you have negative changes negative storage over time the storage is decreasing
[1:20:47] so uh how is runoff estimated in gl does example for purana is it a satellite estimate or a closure term uh it's a
[1:20:56] closure term um it is based on water balance is there any comparison between remote sensing results with the observation
[1:21:11] data data you can definitely find you can definitely find publications publications which compare remote sensing and observation data
[1:21:22] and and we can also try and find some some papers which use gl das or other remote sensing data and
[1:21:33] compare with observations but right now i i don't have those references but i'm pretty sure that there are quite a
[1:21:40] few is it possible to download geo data for the storyboard base in west bengal india so if you go to
[1:22:06] hydro shells and you can try and see if you can isolate that river basin otherwise you may have to go to srtm or
[1:22:16] esther esther dim data and do the same processing remote sanctity of different special is it better to
[1:22:41] upscale or down scale so um upscale upscale would be better because when you downscale you would be
[1:22:55] interpolating data and we don't i don't think that is right like precipitation or evapotranspiration interpolated in space
[1:23:05] would not make sense so so upscaling is better in my opinion so question 8 again um i'm i'm not
[1:23:25] certain of the answer because um um there may there are several papers that compare remote sensing with
[1:23:34] observations observations and we can definitely find a few and post them on our site website so question 9 is about
[1:23:59] decision making in on weekly time scale what is the finer special resolution based on procedure we saw today
[1:24:12] so for if you're if you want weekly weekly time period so gldas data are available on three
[1:24:22] hourly time scale so you can use that so gl dash is available at three hourly time scale so you can use that to get
[1:24:32] weekly weekly water budget data is the gilda soil moisture data validated with some ground to data yes
[1:24:50] they have been validated actually there is a new version it's called land information system system that assimilates soil soil moisture data
[1:25:03] from smac so that is a newer version that is used by by some groups this geodust data that we talked about
[1:25:15] those soil moisture data are validated so if you go to eldar's website and you will find the
[1:25:24] link in session one presentation there are references and there are also presentations which talk about validation if you are not using ground water data
[1:25:48] then is it correct to say that this is data for the river and it's lost only and not the river basin
[1:25:58] you would need to go into the storage data for that yes so actually um that's that's what i mentioned earlier
[1:26:08] that that for this webinar purposes we focus mostly on the surface components you do need to look at storage part
[1:26:19] and ideally you should also have discharge data from river and groundwater so if you have all these components then you can
[1:26:27] be sure of actual water balance but nevertheless annually if you see it is the precipitation received and
[1:26:42] water lost to either ground or to to atmosphere then whatever remains is storage in soil and discharge in river
[1:26:52] so that's how partitioning would occur so i think on large scale precipitation minus evapotranspiration is considered like first water
[1:27:05] water balance whatever is residual is distributed in different ways either in in soil or in in stream
[1:27:17] or in it it percolates in and again somebody who is expert in hydrology somebody who has done hydrological
[1:27:30] analysis using these data they probably have better idea of how to use this information more efficiently the idea here
[1:27:40] from our part was to to introduce all these resources which are available and show a few steps that you can use to
[1:27:52] to utilize this data and analyze this data so there are no more questions we really want to thank you for
[1:28:05] attending this webinar series all the homeworks are posted online all the material is available and also recordings will be
[1:28:16] posted online also for you to work with data shapefile reverb basing shape files and data sets will also be made available
[1:28:29] and we request that when you receive a survey link please give us your feedback more importantly if you use any of
[1:28:40] these data for river basin management in your own region and if you use it for any decision making or management
[1:28:50] purposes purposes and if you would let us know we'd really appreciate that so homework 2 is posted today it's
[1:28:58] online now and it both the homeworks are in google form answer you will have to answer them in google form
[1:29:09] so the first homework is due tomorrow and the second homework is due on 17th of april so here's the website and here's
[1:29:24] homework assignment so on our set if you if you're not part of our set listserv you can join that to
[1:29:39] to stay familiar with all the activities that are going on and all the webinars that are coming up
[1:30:03] so our next webinar is going to be on disaster scenario uh different how to monitor and respond to
[1:30:14] different scenario disaster scenarios that will be the next webinar so this webinar about disaster scenario will be in
[1:30:24] april april and there's also going to be another webinar advanced webinar on water quality monitoring and that's going to
[1:30:33] be in june so if you join our set listserv you will be sent announcement of all the upcoming trainings
[1:30:43] this webinar will be conducted both in english and spanish so again on behalf of the rsat team
[1:30:53] we we want to thank you all for attending this webinar series and we hope to see you in
[1:30:58] our future trainings thank you
