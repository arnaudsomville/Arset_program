# Calculation of Precipitation Statistics Using IMERG, Part 1/3

`https://www.youtube.com/watch?v=6sbuIKunCGU` · id 262 · 1:31:08 · module 115 — Applications of GPM IMERG Reanalysis for Assessing Extreme Dry and Wet Periods

[00:02] hello everyone welcome to this advanced webinar on applications of gpmi merch re-analysis for assessing extreme dry and web
[00:12] periods periods imerch here is integrated multi-satellite retrievals for global precipitation measurements or gpm my name is amita mehta and i will be
[00:25] conducting this webinar along with my colleague shawn mccartney overall objectives of this advanced webinar webinar are learn to access eye merge data and
[00:40] derive regional precipitation statistics that is mean standard deviation anomalies which is departure from mean and percentile values of precipitation
[00:51] all these are useful for deciding try and wet episodes regionally as well as locally locally and further objective is to learn to
[01:01] calculate and interpret the standardized precipitation index or spi using imerg and that also helps in assessing extreme
[01:10] dry and wet periods so there are multiple ways to look at precipitation statistics and that is the focus of this
[01:17] webinar there are three sessions this is the overall outline for this webinar today we are going to
[01:26] calculate precipitance precipitation statistics using imerg and so the way it is planned is that today you will be using
[01:38] web-based tools to access precipitation as well as to some calculations and then use qgis which is open source
[01:47] geospatial information system to calculate some statistics so there is no explicit programming needed here you will be able to calculate statistics
[01:57] just by using graphical user interface and web tools tools next week then we will focus on using
[02:06] scripts and they will be provided by sean mccartney to calculate spi again based on eye merge and in both these weeks we will have
[02:20] hands-on exercises that you can conduct to learn to follow the procedures and learn how to use the
[02:27] data and calculate statistics then the last session on february 4th um we'll be focusing more on how to
[02:36] assess flood and drought risk in which you use statistics that we calculate in these first two sessions and then
[02:44] combine it with some additional socioeconomic data to see can we assess risk of flood and drought in a given region
[02:53] not only that the last session will be mostly hands-on exercise where you the participants you will be
[03:03] conducting hands-on exercises that we provide instructions about so here are the prerequisites for this webinar series if you have not gone through some of
[03:16] these these information provided here we recommend that you go through this between now and next week just to be
[03:24] able to keep up with whatever is going on in this series first of all fundamentals of remote sensing that's an online
[03:35] presentation as well as a video that you can view to learn about jargons about remote sensing more importantly here is a webinar and
[03:46] there are also slides associated with them overview and applications of imerg long-term precipitation data products it's crucial
[03:55] that you know details about the data sets sets since this is more advanced webinar we assume that you have basic information
[04:02] about imerg and our set also has conducted several webinars in which we have talked about imerg what is special
[04:09] about this particular data set is that it is now long-term almost about 20 years long and the important part is how to access
[04:20] this how to work with this data to look at inter annual variability in try and wet episodes
[04:27] in addition um in to be able to access data and to analyze data these uh some of the software and uh
[04:38] information is required first of all uh you have to register on nasa earth data to be able to download data so here's
[04:47] the link where you can go on and register register it's free but you have to have a
[04:52] username and password also also there has to be qgis installed on your computer so that you can do the
[05:01] exercise exercise pen apply this is also a software available from nasa kiss this has to be installed on your
[05:09] computer to be able to do analysis and this is for week two also also um anaconda python version 3.7 again
[05:19] websites are given everywhere you need to install that on your computer because you will be using python scripts to
[05:28] calculate standardized precipitation index and for windows users only you need to install install git bash and again website is given here
[05:39] so these are all the prerequisites so training format overall is given here we have three sessions as i mentioned
[05:49] each of them it's two hour long not only that we have two identical sessions uh in the am and pm uh so that
[05:59] we can cover all time zones each session will have two parts so first part is going to be presentations and
[06:06] demonstrations in which we talk about the data sets about procedure about how to access data and then demonstration
[06:14] will be walking through how to use this data to calculate statistics or spi and then the second part which is which
[06:21] would be a lag time in which you will do a computer based exercise on your own we will stay online uh so it will be
[06:30] about an hour long or a little more longer exercise that you can stay here and do if you have any
[06:37] questions we will be here to help you if you cannot finish this in the given time then you have this week to complete
[06:44] that exercise and the exercise exercises they're already available from this portal as well as they're available from
[06:53] the um the website the webinar website rsi website website after each week or each session you will have
[07:02] homework assignments posted online again on the webinar website and um so there will be three homeworks and the due
[07:10] dates for each one is like 11th 18th and 25th of february so for example the homework that you
[07:17] receive today is due on 11th of february and so on if those of you who attend all these
[07:25] sessions live and complete the homeworks will receive certificate of completion um and they will be awarded um in about
[07:35] two months after the webinar series is over and you will receive the certificates from marinas martins her email address is given here
[07:47] so here is today's outline we'll have a brief introduction of our set we'll talk about our set and then
[07:55] again we will have a very brief description of imerg data and access information information again as i mentioned earlier the
[08:03] prerequisite webinar already has this information in details but we will just learn enough for now to start the
[08:12] process process then we will have a demonstration of a case study um in calculations of precipitation statistics today we will be using
[08:22] web-based tools in qgis to do so and we will focus on state of texas and that that's the region we're going to focus
[08:30] on for example and then we'll then go to a local scale city of houston so can we
[08:37] understand how precipitation changed entirely over the state and then over the city and how can you identify try
[08:45] and wet periods based on uh precipitation statistics so what we're going to do is we're going to have look at long term
[08:54] mean precipitation map we will have time series of precipitation and percentile value of precipitation based on which
[09:00] you can see how heavy it is compared to mean and then we will also calculate precipitation any anomalies which is uh
[09:09] departure from mean precipitation so is it um drier than normal or where should it normal and the exercise that
[09:18] you will be conducting will be some it's identical but you will use the area given here so you will look at country
[09:27] of musambi and then focus on city of maputo which is the capital city for mozambique so we will have a
[09:35] demonstration and then you will repeat the procedure on mozambique and maputo so that you get experience in using
[09:43] imerge data and calculating precipitation statistics so we'll start with um introduction to our set um nasa's applied remote sensing
[09:56] training program on our set it's a part of nasa's applied sciences capacity building program and as you can see on this side the
[10:05] topics of training they include water resources air quality eco and land systems and disasters and the goal here is to empower global
[10:14] community through remote sensing training training and our goal is to increase the use of earth science and decision making
[10:21] through training for policy makers environmental managers and other professionals both in public and private sector as you can see here uh our set's now
[10:36] a little more than 10 years old and has conducted 130 plus training trained 30 000 plus participants in 165 plus
[10:45] countries and have reached more than 8 200 organizations as you can see from these bubbles different trainings have grown over the years
[11:00] and our set has a website where which has a lister that you can join to stay in touch with upcoming activities also
[11:10] all the information about this webinar all the slides all the homeworks all the demonstration um and exercises that you
[11:18] will be conducting they're all available from this website so next we will have a brief introduction about i merged data in
[11:28] access access so so imerg imerg which is based on gpm satellite global precipitation measurement mission is shown here it was launched in 2014
[11:43] february february in non-polar orbit and as you can see this goes from 65 south to 65 not the
[11:50] blue blue orbits orbits if you see here um um trim satellite which was a predecessor of gpm covered only 35 south to 35 north
[12:02] and so gpm kind of follows stream but it enhances and expands the domain that trim cover and the sensors uh included in gpm are
[12:13] gpm microwave imager or gmi and dual precipitation radar or dpr so gpm has products based on gmi and dpr
[12:23] as well as combined gmi and dpr but as the name suggests the multi-satellite analysis or imerg which
[12:32] is which uses not just gpm data but it uses a constellation of satellites shown here and over
[12:41] it overall they're like five polar orbiting microwave imagers and also five sound sanders they are included in
[12:50] this constellation satellites they're all used to produce eye merge and that really increases both spatial and temporal coverage and frequency of
[13:01] precipitation available not just from gpm but now the combination of this constellation satellites so input precipitation estimates use a
[13:12] number of algorithms and again pre-requisite has detail about this this is based on dr george hoffman's uh
[13:20] presentation and webinar and he is the data producer and then he describes each and every step each and
[13:28] every algorithm so basically um this is the imager algorithm sounder algorithm that is also a cloud classification scheme
[13:40] then then main calibration is done through radar radiometer combine algorithm or quora and then finally there is global
[13:50] precipitation climatology project which has been going on since 1980 um monthly satellite gauge data they are used also as in calibration for this
[14:03] product product imerg is at version 6 now and they have multiple multiple data sets as shown here there is early
[14:13] version version late version and final version they have latencies the four hours 14 hours and three months respectively and
[14:21] then they have different purposes for flash flooding early for crop forecasting example it's late and then finally is more research quality product
[14:30] because because uh that is combination of satellite as well as gauge data it's calibrated with drainage data over land
[14:40] the data resolution is 0.1 degree it's a global grid and so although precipitation from gpm is available 60 south 60 north there are
[14:53] other satellites there combined and morphing is used to get global precipitation precipitation and as mentioned earlier trim gpm
[15:01] combined algorithm is used as calibrator so trim which flew from 2000 and actually it was launched in 97 but the
[15:10] data here covers june 2000 to may 2014 from trim and gpm after that so now this is a one long combined record earlier we
[15:21] used to have two records one from trim which was 98 onwards and then gpm which was 2014
[15:28] onwards now they're all calibrated and so that we have one long time series and those of you who
[15:36] use precipitation to look at water resources or look at climate variability um you know that longer the time series
[15:45] better it is to [Music] [Music] to trust the data and do analysis and come up with decision making criteria
[15:55] and finally again it is assisted with gpcp climatology as shown here too to remove biases in the data
[16:04] imerg has been used for many applications as you can see from ecology water and agriculture energy disasters
[16:12] health and weather and you can get more information from gpm gpm application training site about these different applications we're going to
[16:22] focus on drought and flood based on precipitation long-term precipitation analysis so i merge data access that's shown here
[16:34] again here is a link where there are step-by-step tutorials available how to download i merge data and there are multiple ways to look at
[16:45] or download uh image data there is direct ftp there are special websites where you can do level two visualization and level
[16:54] three visualization and download what we are going to do is we are going to use these two features giovanni which is
[17:00] from which is a website that we have often talked in our set webinars and which is widely used to access
[17:08] analyze and visualize data as well as we are going to have direct ftp also from data recorder data information
[17:16] system so today we're going to focus on using giovanni and then next week it will be using disk to use ftp to download data
[17:28] so with that what we're going to do is we're going to have a pres demonstration now in which
[17:34] we're going to take image precipitation using giovanni this is the site then we'll calculate long-term mean precipitation maps for
[17:45] taxes we will also calculate area averaged monthly precipitation time series for about 20 year period then using qgis we will calculate
[17:57] precipitation anomalies as well as we will look at standard deviation of precipitation and uh see how we can look
[18:06] at dry and wet areas within texas finally we will look at will focus on houston city of houston where
[18:15] we will learn to calculate mean standard deviation anomalies and percentile values over the city and that helps in
[18:23] in in in deciding thresholds for dry and bed episodes episodes so with that we will move to a
[18:30] demonstration demonstration and then as demonstration after the demonstration ends you will be going through the same procedure you will
[18:40] you have downloaded this procedure from the website or from this adobe portal and then or go to
[18:48] meeting portal and then you can calculate precision 36 for mozambique and city of map we'll start with a demonstration
[18:59] so next we're going to have a demonstration demonstration of of how to download access and analyze image
[19:06] precipitation data using giovani which is a web tool and then learn to find regional and local precipitation
[19:13] statistics using open source gis and excel excel so here we have picked a case study which is the state of texas and
[19:24] for region and for local area we are going to focus on the city of houston and see how to calculate different
[19:31] statistical parameters using both giovanni and gis and excel following this demonstration there will be an exercise that you will be
[19:41] conducting which will follow the same procedure and same steps but you will be focusing on on the country of mozambique
[19:49] and and then within that country city of maputo to find out precipitation statistics so we picked these two regions because both
[19:58] have inter-annual variability of precipitation with dry and wet events both are affected by tropical cyclones and hurricanes
[20:07] which cause flooding in many seasons over these two regions so that's why we've picked these two for demonstration
[20:15] exercise in the last session then you will have a chance to do similar exercise for the area of your interest
[20:23] so first we're going to start with giovanni and see first of all how to derive precipitation long-term mean maps
[20:32] over the state of texas so this is the geomoney web tool as you can see there is a keyword search
[20:40] for data here or you can search variables on from this left hand side menu as well through
[20:47] disciplines observations measurements platforms etc here are the analysis options you can have maps of data comparison of two data sets vertical
[21:00] profile profile time series and some miscellaneous parameters are there as well here is the temporal selection with year month date
[21:12] and here you have special selection you can either choose by drawing a box here here on the map or you can
[21:23] choose choose by entering a predefined shape file which is what we're going to use for texas so we'll start with imerg
[21:34] and we are going to pick i merge final this is the data set which is research quality data set and calibrated with
[21:41] rain gauges over land so that's what we're going to use for this demonstration study if you look at different
[21:49] you uh param different data sets you can see that it's monthly daily half hourly we are going to use monthly this is
[21:58] merged satellite gauge precipitation estimates final run recommended for general use this is latest version 6. and we're going to pick that
[22:08] as you can see the extent of data is from 2000 june to 2019 september september also we're going to change units to
[22:18] millimeter per month because what we are going to do first is look at long-term mean for different seasons and
[22:26] for that we're going to have units in millimeter per month we're going to choose maps as monthly
[22:34] and seasonal averages once you choose that a window will open you can choose seasons here december january february march april
[22:47] may june july august and september october november so we chosen this seasons we're going to find mean for each season for 2000 to
[22:58] 2019 2019 so this mean provides a good reference precipitation precipitation uh sort of climatology this is about 20
[23:08] years but compared to that you can look at departure of precipitation in individual ear or fine anomalies and
[23:18] then that tells you whether it's a wet ear or drier particular area is experiencing drought or flooding
[23:27] then we're going to pick texas as our shape here once you choose texas shape file you will see this is
[23:40] highlighted here you can zoom in and pan the data if you want to but here's the region
[23:47] that we are going to look at once you choose all these parameters you can then go to plot data
[23:56] for saving time i've already plotted the data but once you click here you will see workflow and then
[24:03] eventually you will get results which we already have here so these are monthly and seasonal averages and plots are already here
[24:17] so if you start from top this is december january february 2000 to 2019 this is the extent of the data
[24:26] and as you can see all the maps are here we are going to analyze these maps in qgis so for now
[24:34] what we are going to do is see how to actually download these data so for that you can go down here on the left hand
[24:47] side and click on downloads all the seasonal data are available in multi for multiple formats here you have
[24:55] net cdf files you have png images geotiff images and kmz files which you can can view using google earth
[25:06] so what we are going to do is download geotiff files all four of them so these are long-term mean
[25:12] all four season winter spring summer and autumn or fall i have already downloaded all you have to do is click on the file and save on
[25:22] your computer for simplicity you can give a shorter name such as i merge mean texas or you know you can define a name
[25:34] that is shorter than this giovanni descriptive name that's what i have done and i've saved all these files that we
[25:40] will eventually see in qgis to analyze the data but this provides you long-term mean mean especially and temporarily subsetted
[25:50] data can be used this way in giovanni so that you don't have to download the data you can
[25:55] just download the final result as shown here long term mean that you can analyze um in gis download these yout files you
[26:04] can go back to data selection for some more analysis next what we're going to do is we're
[26:11] looking we're going to look at time series so we are going to look at long-term time series for four seasons
[26:18] averaged over the state of taxes once you select all the parameters you can again plot data and then i've already done so so to save
[26:29] time and so we're going to look at the result we're going to look at the time series that i got
[26:34] this is seasonal time series the plot here shows inter-annual variability of precipitation for four seasons over last
[26:45] 20 years or so as you can see eminem or march april may june july august september october november
[26:53] generally have much higher rainfall than december january and february in many years june july august have more
[27:01] rain sometimes it's march april may or sometimes it's september october november so you can see that seasonally
[27:08] and intra-annually rainfall is varying so it is good to look at seasonal rainfall and anomalies so you can
[27:14] identify which season seasonally you can identify wet and dry period and so based on this for example what i've done is picked
[27:25] june july and august season for detailed studies using qgis partly because it is one of the higher
[27:33] precipitation precipitation seasons and it is the crop growing season also the summer season so for example we're going to
[27:41] look at june july august but you can look at all seasons and follow the same procedure for all four seasons
[27:49] so this is once you have the time series you can download image by clicking here or you can download the data
[27:58] it's say you can download this data as csv file as shown here you can also have this
[28:09] netcdf file for for all seasons as well so there are multiple options once you have that and we've decided
[28:17] that we're going to focus for the demonstration purpose on june july and august we are going to find
[28:23] mean precipitation for each individual year so again you can go back to data and now what you're going to do is again
[28:30] go back to math monthly and seasonal averages everything else remains the same now you're going to find seasonal meal
[28:40] precipitation and for now i'm just going to pick june july in august but for your your case study you can do all four seasons
[28:50] here we're going to just go one year at a time so this is going to find seasonal
[28:57] precipitation for 2000 you can again plot data then you will get a map of of june july august for
[29:13] 2000 2000 and and i can give you some examples here so monthly and seasonal averages so this one is for 2001 june
[29:35] to august so in that case you go individual year you can pick here 2001 to one two to two
[29:44] similarly i've done all 19 years so i have 19 maps so i have mean map for june july august
[29:52] and i have 19 individual seasons from 2000 2019 i've saved them all and these we're going to analyze in qgis to look
[30:02] at statistics especially we're going to look at anomalies of this precipitation and standard deviation of this precipitation over this time
[30:12] a new interannual period so i'm going to stop using giovanni and go to qgis so this is the qgis window
[30:26] i have already loaded some data into this qgis project but we're just going to walk through the
[30:34] procedure and you will also be doing the same steps so first of all you can see this
[30:39] background map here i've added this after opening qgis and starting the project at the new project or if you already have one you can open
[30:50] the existing one and you can add a background map i have used quick map services services open street map open state standard map
[31:02] that's what is shown here you can use other options if you like if you do not find this quick map
[31:10] services plugin here you will have to go to plugins manage and install plugins find quick map services and install it and
[31:21] this procedure is given in exercise one once you have the background map you can add shape file
[31:29] here is i already have downloaded this shape file so you can go to vector layer add vector layer option and navigate to
[31:40] your computer where you have all the files shape files so here i have shape file from from this is i believe from usgs its
[31:54] texas state shape file i have picked a particular shape file open open and then add and that's what's shown here so you can
[32:08] see it here you can zoom to this layer now now so that we can see this zooming version
[32:15] these different areas are counties in the state similarly i have added city of houston metropolitan area with
[32:27] 13 counties and city of houston so this is the city limit and then there are surrounding counties
[32:34] counties so we are we can find precipitation statistics on all these areas starting from state level all the way to this
[32:42] city level that's what we're going to do next so so as we downloaded seasonal mean data from
[32:51] giovanni that's what we want to get in here which i've already added these are the raster layers for
[32:59] that you would go to add raster and navigate to to the the [Music] [Music] giovanni giovanni tiff files the duty files that you save
[33:11] so here i have saved as i merged access march april may september october november december january february and
[33:19] june july august and just by clicking on it open you can add and that loads faster in the project
[33:27] that's what we have here so we have all four seasons let's start with december january february so if once when you add the raster it
[33:37] usually adds as black and white raster but but as you can see here i have added a color
[33:44] table by clicking this you can see that and i'm just going to show this one layer layer you can go to properties
[33:53] symbology symbology you will go to render type single band pseudo color then you can either select minimum maximum values or you can
[34:06] leave default like in some cases i have default here here i have fixed 10 millimeter per month to 210
[34:15] millimeters per month and for all four seasons i am using this same color table so we can intercompare all the seasons
[34:22] how precipitation varies here interpolation is linear color ramp there are several options what we've chosen here is
[34:31] red yellow and blue so that blue is the higher precipitation you you have fixed equal interval to 11 and so
[34:39] these are the values at every 20 millimeters per month and then click ok then the color table is loaded in the
[34:48] raster raster one more thing is the transparency of the raster layer here it's 50 percent transparent so once
[34:57] you you set the transparency you can see underneath if you don't have a transparent layer you will not be able
[35:05] to see what's underneath but if layer is transparent then you can see the city names and the map underneath so that's
[35:12] your choice but depends on the analysis that you're doing but this is december january february february one thing to note is that here in
[35:22] eastern part there is more rainfall as you go west if rainfall decreases and when you go to march april may
[35:34] as you can see that more and more in the central texas also there is more rain now compared to
[35:39] december january february when you go to june july august uh not only only precipitation values increase now you
[35:48] have this coastal area where you have much higher precipitation although more than 200 millimeters per month and
[35:56] similar pattern is there that as you go westward precipitation is going down for september october november pattern
[36:04] is pretty much the same you have much more rainfall in coastal region as well as in eastern part
[36:11] some in moderate rainfall in central texas and then it decreases as you go westward so this is the general mean seasonal
[36:19] pattern that we find and let's keep june july and august because that's what we're going to focus
[36:25] on on so what we want to see now these are the mean maps individual season is not going
[36:33] to look like this it is going to be either more or less in certain regions and that's what we want to see how it
[36:40] varies and that tells you whether it's rainfall is deficit or excess for a particular season compared to long-term
[36:47] mean mean but before we do that there's one more parameter that we can look at and that
[36:54] is standard deviation of precipitation so so some deviation is just a measure of um variability within this period so around
[37:06] this mean how much variability is there that's what it tells us and to find map of standard
[37:13] deviation for finding variability at each grid point we can use a routine and we are going to use a grass rooting
[37:21] for that so in qgis window you can go to this processing tool box and type grass a number of routines will
[37:33] appear from which you can choose r dot series series this has many statistical parameters that you can find from a time series of
[37:42] raster raster and for that once this window r series window opens you can choose the in input raster
[37:49] layers layers so when you click on that all the rasters that you have loaded in your project they show up and we are
[37:57] going to use the seasonal seasonal june july august meme for each and every year from 2000 to
[38:06] 2019 you can select and you can then add by clicking ok and it shows that 20 element our elements
[38:20] are selected also you want to have propagate null you pick that aggregate options are shown here these
[38:29] are all the statistical parameters you can calculate we already have average from giovanni that we just saw so let's
[38:36] not have that we were looking at standard deviation but you can look at range like minimum and maximum
[38:44] so for 20 in the 20 year period what was the minimum and maximum value of precipitation precipitation accumulated precipitation variance um
[38:54] different moments you can find all this but we are going to look at standard deviation deviation you can use rest of the parameters can
[39:02] leave as options one thing though for um minimum and maximum value you may want to set it
[39:13] it to a certain value sometimes if there are undefined values you certainly don't want to include them in the calculation
[39:20] so you can set a range which you know is valid for precipitation for your data and this is a good range so after
[39:28] setting that now this is going to save this to a temporary file once you set this you can run
[39:39] and okay you will get a map of standard deviation once this is completed and so this layer is
[39:53] added here as aggregated air layer and values is value shown here like minimum is 10.5 millimeters per
[40:08] month to about 84.5 millimeters per month month i have actually used and renamed this standard deviation june
[40:17] july august and i have added color table to it so these these are the values we just saw so again you
[40:26] can see that where there is in june july august we saw that much larger rainfall in eastern part and
[40:34] also in coastal texas that's where more variability is there too too um um so almost if you say 200 millimeter
[40:45] is the mean then 85 it is almost 25 percent variability uh over so in 20 year period that we
[40:55] looked at rainfall is varied about 25 in this region you can say that so that's how standard deviation helps
[41:03] you you look at overall variability now we are going to look at individual years how each year varies
[41:11] what it shows compared to mean and for that we have calculated anomalies so animal is nothing but just departure
[41:19] from me and to calculate that what we would do is go to raster calculator before that though all these individual
[41:30] seasons are loaded in your qgis project so just add raster and all these files we save from jiovani so mean june july
[41:39] august specification for each year now go to raster calculator when you click on it you have this
[41:47] operators window you can see that all the rasters that you have in your project are also listed in here
[41:54] and you can define define a given name so say here is anomaly 2000 and you can say save
[42:06] and and now the operation would be now you find 2000 2000 june july august image precipitation minus
[42:18] minus it's the mean 20-year mean precipitation for july and august once you complete this operation you will get numbers which are either
[42:30] positive or negative so positive precipitation means 2000 season had more rainfall compared to the mean and when it is negative that
[42:41] means means 2000 had less of deficit of rainfall compared to mean and that's what has been calculated in
[42:49] these anomalies here so so this is now anomaly of 2000 i've done same for 2001 to 2019 that
[43:02] means take individual season and subtract the long-term mean for that season and that gives you anomaly for here
[43:12] i have set color table to minus 50 to 50 millimeters per month this is there are some values which are outside
[43:21] but these are typical values also you can see that minus 10 to 10 milliliters per month around the mean is
[43:30] white so this is near normal rainfall let's say when you go to red and blue here they
[43:37] show show deficit and excess compared to long-term meal meal so if you look at anomalies for 2000 you
[43:46] can see this special pattern in which eastern part has deficit of rainfall especially in near coastal region it's
[43:56] minus 50 millimeters per month or even even lower i have kept the same color table for all
[44:07] years so we can compare them let's just turn them on now and look at each year very quickly to see how
[44:18] precipitation precipitation deficit and access vary with year so we saw now this is 2001. so 2000 had deficit
[44:30] where here you have excess of rainfall and deficit over this part 2002 again you can see a lot more rain
[44:39] in the central texas 2003 2003 2004 entire state had about normal rainfall rainfall five five six is the central texas head deficit of
[44:54] rainfall rainfall 2007 again had much wetter in this part just a little bit of dryer in the northern part of the
[45:04] state state so year after year june july august shows this variability now this is based on emerge here there is deficit here
[45:13] there is excess of rainfall nine again that is deficit now now 10 10 11 11 this was a major drought
[45:25] in texas and it shows that anomalies are all negative here similarly 12 also was more or less a drought year and that so
[45:36] both 11 and 12. now 2013 um also the eastern part was was had deficit of rainfall so all three
[45:46] years 11 2013 there was more less rainfall rainfall 14 then also in certain part there is recovery but there are also parts where
[45:57] there is drug like condition 15 16 then has more more rain rain and 17 this was hurricane harvey so june
[46:09] july august august had very heavy rainfall and that sort of sort of shows in this region so anomalies
[46:18] clearly show which area which areas of the state have normal rain more rain or less rain and
[46:29] as you can see there is quite a lot of variability and once you have this long precipitation period and if you keep
[46:37] tracking anomalies you can then strategize how to deal with either deficit or excess of rainfall so that was
[46:47] at state level what we saw was long-term mean standard deviation anomalies anomalies if we are interested in local region to
[46:57] look at time theories over say one city in this case we can look at city of houston how would we do that in
[47:05] qgis qgis if you were to do that in giovanni you can pick a smaller domain but it has you
[47:12] cannot have like small shape file there are predefined shape files in in gui so either you have to go to the
[47:20] smallest level like one grid point or you have to just use predefined shape wise if you have smaller region that
[47:29] you're interested in at bounty level or even at roads roads of other infrastructure level then you can use qgis you can extract time series
[47:41] and do statistics at that level and that's what we are going to see now for that we have um
[47:49] two python spirits one that works with mean seasonal precipitation so time series of each seasonal year with this
[47:58] each year the seasonal precipitation and second python script works with anomalies so by running this python script what you
[48:08] can do is extract time series and statistics that region within these polygons so we're going to start with these 13
[48:18] counties and then we'll pick harris county which is here where the houston city limit is so that is what we
[48:28] are going to do we have these two python scripts and these are available for mozambique in your
[48:38] exercise exercise the files that you downloaded today should have those this is for texas so here just quickly going through the script it
[48:49] picks all the raster files which has imerge string in it so this is for mean precipitation seam will
[48:57] mean precipitation and here that's the raster and it takes this this city of houston counties as the
[49:08] input vector or within that it finds statistics and in here stats stats when it's two it finds mean so you'll
[49:20] get mean precipitation within this polygon so average within that polygon and since there are 13 counties we will
[49:29] have means for each county in that so so for that what we do is actually in your case you will have instead of
[49:40] coh here this is maputo that's what you will have when you do exercise basically just just you will be copying the script
[49:53] and and go to plugin by tonka python console and and you can just paste here is where you say run command you can run
[50:13] this and what it does is go through all the image file so all the mean files and then you get
[50:27] time series so mean precipitation within that polygon and the way you can look at is first of all you can close this
[50:36] python python console console go to cto cto houston counties and go to attribute table when you open attribute table
[50:50] you will see that you have two thousand two thousand main 2001 mean two mean and these are all 13 counties you can see
[51:02] here here all 13 counties you can [Music] [Music] click click on each id and it shows it highlights which
[51:17] county county if you go to three that is the county that has houston city limit within this and so
[51:26] we can look at that one or you can look at all these counties if you want entire metropolitan
[51:35] area you would actually add these numbers and come up with one number or take mean and get one number for each
[51:42] count for entire metropolitan area here you have county by county uh information for all years you can do the same
[51:52] with anomalies but let's work with this mean first once you have this attribute table then you can save this file as a csv
[52:03] file and for that you need a plugin it's called mmqgis if you don't have this then again you
[52:12] can go to plugins and find it and install it but you here we have it and you find
[52:20] import export attributes export to csv file once you have this window where it's export attributes now you can
[52:35] pick all the files that all the means that you have 200 200 2019 me and now you can save this as let's keep this as
[52:50] temporary file you can save this and give a name here say coh counties or co h precipitation
[52:59] and then you can apply and when you apply it says 13 records exported it goes into this temp 1 csv
[53:09] file that we will look at later similarly similarly you can copy the second script which is the anomaly
[53:22] script anomaly zonal statistics so basically what this uses and i'll show its own raster zonal statistics so here
[53:31] is what again in within this it gives anomaly time series of anomaly so mean anomalies and just type similarly in
[53:41] python console and you can get anomalies in csv file by using mmqgis basically what it does is actually there is a routine it's
[53:54] called zonal statistics and in here if you look at statistical calculation here all the calculations you have
[54:06] for that polygon within that polygon and we just use stat equals 2 so 0 1 and 2 that's mean but again you can have
[54:16] standard deviation and other statistical parameters as well so this is the routine that is used in that
[54:24] script but it just does automatically so that you don't have to do it raster by raster so at the end of this procedure now we
[54:36] have two csv files that i want to share with you which were created using zonal statistics function in the python script and using
[54:48] n and gis these files are saved as csv files files this file is for city of eastern
[54:55] precipitation mean precipitation and you can see the top row shows years from 2000 to 2019 and then 13 numbers following that are
[55:06] the numbers for each counties counties so now you can average these numbers and then get one number
[55:15] for houston metropolitan area or you can do statistics county by county for example we are going to look at
[55:23] this county in here it's number four as we saw this is the harris county uh for which within
[55:30] which city of houston limit is there and so what we're going to do here is use this autosum function and find
[55:44] average average so this is the mean for all these years next you can also find standard deviation and for that you can use more
[55:54] functions here there is standard deviation if you don't see that you can search by stdev in this
[56:01] window window and then you can say insert function insert function here here the actual time series is a4 to t4
[56:10] and so this will be the standard deviation when you say done this is standard deviation as you can see this
[56:18] is almost like 65 millimeters per month and that's the variability over this indicates indicates variability over this 20 year period
[56:29] next we going to find percentile value so percentile values are if we pick a 90 percentile value then in the time series
[56:40] all the values will be 90 percent of the values will be below this and ten percent values above
[56:46] this particular number and this helps us identify uh heavy precipitation events so that the top ten percent top ten
[56:55] percent heaviest precipitation so you we're going to use percentile and again you can type here if you don't find it
[57:02] in more function then insert function and it's a 4 2 d 4 t4 again and and for
[57:14] for percentile number it is in fraction so for 90 percent it is 0.9 and this is the number you get
[57:22] so it is 199 millimeters per month so 10 values within this record would be above above 199 and 90 below so those are the
[57:35] heaviest event so this this is the way you can find statistics for a local area based on time series
[57:44] you can plot this as a line this is just to visualize this and as you can see
[57:55] so this is about goes from 50 to almost 350 and 199 which will be 99 percentile value
[58:07] it's somewhere here and so actually you have one or two events about that if you look at mean it is 142
[58:16] somewhere here and on top of that if you add 64 or below 64 that would be the
[58:22] range of standard deviation within which your rainfall would be there so this allows you to for the given time
[58:30] series you can see the characteristics uh over that local area and once you know that from the past data you can
[58:38] expect expect when you look at current data value current precipitation value you can quickly place it in this chart is it
[58:49] in top 10 percent is it so you can find different percentile values and have a range within which current precipitation
[58:56] value will fall and based on that you can use that number or that information for planning for if there's going to be
[59:05] flooding in the city or so so it can help in many ways the statistics so this is simple way of doing statistics for
[59:13] one county we can see this is the anomalies here it's the same years and then these are anomalies for
[59:23] each county and for harris county i've plotted this here anomalies as you can see it's almost minus 60 to about
[59:33] 200 and this 2017 year is because of hurricane harvey over houston there was a lot of rain and
[59:41] that's what it's indicating but you can also see that there are years where you have positive anomalies
[59:49] whereas there are there are periods where you have deficit of rainfall even within that city area so looking at these parameters you can
[59:59] and looking at statistics also you can come up with um some kind of reference precipitation values which can help in
[1:00:08] decision making for either flood or drought or or dry or wet events so that's basically the demonstration for
[1:00:18] texas and houston and this concludes our demonstration part but what you will be doing is following the same procedure and do this
[1:00:28] analysis for mozambique and also for the city of maputo so what we will do is we will stay online
[1:00:36] you can work on the exercise and if you have any questions we will be online and at the end of
[1:00:46] uh one hour now after this we can have question answer session if you like if you cannot finish the
[1:00:54] exercise you have still one or two days to finish that your homework is based on that so
[1:01:02] you can finish the exercise and then attempt the homework one so um i'm going to close this
[1:01:09] demonstration now and you must have downloaded all the files and again we will also guide you through
[1:01:16] this exercise while you are working on on it so thank you and and you must have downloaded this
[1:01:30] exercise it says calculation of expectations 36 case studies in in so the demonstration we saw this is very similar follows the same
[1:01:44] procedure for region and so you can go through this what we will do is we will stay online
[1:01:54] if you have any questions you can type in the check box but basically it's your lab time to work on this
[1:02:01] and and first of all work is based on this exercise which is due on 11th of february
[1:02:06] february so actually you if you cannot finish everything today you do have some time um um although it's not it looks long once you
[1:02:17] start going through the steps it should go very quickly uh if you have any questions or if you get stuck we you can
[1:02:24] ask us now or you can send email us to either me or sean mccartney you have email address given to you at the
[1:02:33] end of the exercise also so we start with this exercise and if you have any questions uh please type in the
[1:02:45] check box and we will try to address those those okay so we will be online and we
[1:02:50] recommend that you start this exercise now everything you need uh is available from outside website also also um you will see that you will be
[1:03:03] calculating a number of senses and you will be creating number of files using giovanni giovanni but but sometimes because of the internet speed
[1:03:15] if you have difficulty in downloading data we already have provided this data for you to do gis analysis so you can
[1:03:24] download the data files so seasonal precipitation and also anomalies they're already given python scripts are given as well to find
[1:03:33] some deviation and um so you can and to find the time series over the polygon so please
[1:03:42] use those files so so you can of course download all the chip files anomaly files and csv files
[1:03:55] but the idea is for you to go through the steps so that you can you can download data start from this beginning
[1:04:03] and go to end so by all means do download data but do attempt all the steps all the pioneering as i said earlier can
[1:04:13] be uh can be found from the after website and exercises are also available in handouts from this photo
[1:04:24] [Music] [Music] comment can we see this section again but but actually if you go through the procedure
[1:04:31] it's all listed so the steps if you follow them it's exactly what we did in the demonstration
[1:04:40] and the idea is that you don't have to go back and see the demonstration even in future when you do it for other
[1:04:47] region you can just follow these steps there is a question here that someone has problems downloading the pdf file
[1:05:00] it should be available from i said website also there's a first comment here somebody i mean you're stuck with
[1:05:10] python on part three exercise can you tell us what exactly the problem is did you copy the script
[1:05:24] and itupix in the python console and run it it do you get any errors yes so for downloading data
[1:05:36] from giovanni you will have to login to nasa's data in jewelry if you go in map you can
[1:05:56] go to select seasonal monthly and seasonal and that's where you find seasons so that's where you will be logging in
[1:06:39] to earth data so here in monthly and seasonal averages just click that i think it's slowing down because
[1:07:28] everybody is searching for the data so when you go here you will see seasons let's see some data we go here you can
[1:08:17] find scissors in maths if you should have monthly and seasonal leverages in time series also you should have season long
[1:08:39] once you choose select seasonal date you should be able to pick start and end years there's a question can we pull this
[1:08:50] product to hyperlogic model we'll talk about that later after the exercise is over over so once you
[1:08:58] go to plot data and your workflow will start and then you should go to the you will see the plot on the
[1:09:08] same tab if it is taking a long time to do that at this point you can download data or
[1:09:16] use a zip file to get the files there's a question can you provide options to select and plot and date
[1:09:27] range range so here is uh it's not very clear but here is where there is weight range
[1:09:37] and here are all the plot options options the question here is what was the base period for calculating anomalies and yes
[1:09:44] it was 2000 2019 the standard deviation tool is should be in the graph r dot series so if you're having trouble downloading
[1:10:02] data or even plotting from giovanni please use the files from the zip file all the files are given there
[1:10:10] we realize that when several hundred people are trying to access the same data set on giovani at
[1:10:16] the same time it slows down a bit for quite a lot and so you know just so that you don't get
[1:10:22] stuck we have provided you all the files so you go through all the steps but if you don't get the data right away please
[1:10:33] go ahead and use the data from this file so you actually don't have to wait for downloading the data it's good to just
[1:10:42] go through the steps so that next time if you want to do the same exercises same uh study for your own
[1:10:51] region or area of interest then you know exactly what the step should be but please go ahead and use the data
[1:10:58] that we have provided once you go through the procedure you don't have to wait to download it
[1:11:07] once again please do not wait for jio only logs or download data just go ahead and do the procedure but use
[1:11:16] data from the zip file one question here is i have the data but how to put it into qgis
[1:11:24] if you have the exercise with you it shows shows step by step how you can add both
[1:11:32] vectors and rasters in the data mozambique shape file is also available as you must have seen from the
[1:11:41] from the website so that you know this vector and and precipitation as a raster data in part two you will see how to put data
[1:11:55] into qgis to calculate standard deviation we are just using the mean image data seasonal each year 2000 2019
[1:12:08] not the animals and nothing else chassis by much mean data for djf in in case of musambi
[1:12:19] so the question is you need to group the rasters rasters if you you can you actually don't have
[1:12:24] to because for standard deviation if at this point it doesn't matter which order they are in as long as it's like a
[1:12:31] continuous time series for 19 years so i mean even if ears are in different orders you will still
[1:12:38] get the same answer if there is some air in grass seven it could be difficult for us to
[1:12:48] fix this because this may be relative to your your version of grass and qgis so plugins are not provided in the zip
[1:12:59] file quick map services you will have to search and find from qgis logins there should be a dot prg file for
[1:13:08] mozambique in the zip file i believe quick quick map services there are several options we just use osm open suite map standard
[1:13:24] version that's what we use the qgis may be okay maybe grass version is what you need to check for some
[1:13:34] education routine if you do not have grass in your futures or if you're having trouble um um you can
[1:13:47] try and figure out which how to detecting plants in qgis how to get grass in there but
[1:13:54] if you don't get that's fine you can still you will be able to go through the rest of the exercise because you have
[1:14:00] the data if you get stuck on standard deviation don't worry about it you can move fast and get the anomalies
[1:14:13] so i think ugis 2.18 it's an older version um all versions that this was tested on is 3.6 8 and 10
[1:14:23] so so those should work so um we have about 10 minutes you can continue with the exercise also if you
[1:14:37] cannot finish it now that's okay you have a few days to finish it you can send us emails
[1:14:48] if you have any specific questions only thing we cannot really fix is if your python version or grass version
[1:14:56] or a few gis versions they're different then we really have no control of how to fix that
[1:15:06] other than that you can send us questions and you can finish it before you complete your homework one which is
[1:15:12] due on 11th of february so if you cannot go through the whole exercise in next 10 minutes that's okay
[1:15:20] you can keep working on it so even later if you want to download data from jiovani and if it is
[1:15:31] slow slow in the chatbox you have giovani beta version link available you may be able to use that as well
[1:15:42] just we just have a few minutes left so you can continue with the exercise later on uh in your own time
[1:15:49] uh we can go to the question answer session so question one how is the base period for the mean calculated for the anomaly
[1:16:00] so that is 2000 to 2019 yes that's correct so we already went through question two and then qgis is there a way to separate
[1:16:25] the snow from gpm yes actually um um next week when we go to a download of data um in in
[1:16:35] the the along with the data itself there is a parameter or there is a indicator that says probability of
[1:16:46] liquid precipitation and so that tells you so which is the higher the probability less the probability of liquid phase
[1:17:00] than it is now and i i will give you if you go to i'm giving you a
[1:17:28] link for image detail so that you can go back and look at how they derive all the parameters in
[1:18:07] so you will see the link in the checkbox which is about i merge how it is detailed and there you will
[1:18:17] see how the snow and rain are separated so so in python on part three if you can tell us what the error is if
[1:18:35] is it because of the script or because the python version we wouldn't know so if it can be more specific whatever you
[1:18:44] get we might be able to have okay we went through where i can choose a seasonal part in giovanni
[1:18:55] and you can see it in the steps also so basically in the time selection part you will have in the
[1:19:06] map map last is monthly and seasonal when you go for date selection it will ask you for
[1:19:12] seasons seasons we had a demo of that so questions is similar to question five once you click on the date range people
[1:19:56] ask you month or seasons question seven is the same as question five and six once you select in the map
[1:20:08] or time series and click on date range you will see the option can we import the image product
[1:20:21] discussion a uh into hydrologic model for further analysis yes actually you can and we have done that if you go to our
[1:20:32] set webinar on week link for you here that shows exactly how to use image data you may
[1:20:47] some some older version may use trim data but now this new image data can be used exactly
[1:20:53] the same which tab will i get plot you should get to the plot once the data plotted it was just slow
[1:21:55] perhaps today in which step will i get lot i just answered that once the plots are there you will see
[1:22:37] them in the same tab and then at the bottom right you will have have go back to data selection
[1:22:50] to go back to july main window what can question 10 can you provide options to select and plot the date date range um
[1:23:15] yes in your time series you can pick different dates with different years if you like and that that's what you get in your
[1:23:25] plot plot so in the time selection part you can do that which tool is to be used for grout
[1:23:42] monitoring monitoring so so if there's no one single tool people have used different ways to look at draft so
[1:23:51] anomalies can simply tell you deficit or excess of rainfall [Music] [Music] next week we will calculate standardized
[1:24:01] precipitation index which also shows trump and drug drug detection capability this is mostly focusing on neurological drought but if you want to look at
[1:24:19] other types of drought like hydrologic and agriculture then you have to look at soil moisture groundwater etc
[1:24:27] etc and so there isn't one index for one to each out it is depending on what time period you are
[1:24:35] interested in what type of ground but there is a site the u.s child monitor is there it has a
[1:24:48] lot of information and and go to trouts.gov that also has quite a lot of information yes so uh
[1:25:20] for i merge merge merge three level level three data that we have looked at you can get
[1:25:27] either liquid precipitation or frozen precipitation so probability of liquid and frozen so if um data you will get in millimeters per
[1:25:38] month but there is an additional flag in the data pile which tells you probability of liquid precipitation
[1:25:44] higher it is more it is rain um lower it is it could be more towards frozen precipitation but um drizzle hail
[1:25:55] these are not distinguished in that for that you can look at precipitation radar data and that is something is given on the pmm
[1:26:07] website that we mentioned precipitation measurement mission website you can get more information about that if you look
[1:26:13] at at precipitation radar data dual precipitation data data from gpn that may have some information okay so here how to download data to 30
[1:26:28] meter special resolution so downscaling data is precipitation data is really not as simple but you can use
[1:26:40] something like terrain or land cover as a interpolator or as dependent variables to to to downscale this situation
[1:27:04] i also questions 14 zip files are only for djs season that's fine homework is also based just on that
[1:27:19] there is a batch download question 16 you will see that next week to calculate seasonal standard deviation
[1:27:37] in this you just you see me seasonal mean for each year that's those are the only 20 or 19
[1:27:45] images depending on what you're looking at those are the images you will take just the seasonal mean precipitation for
[1:27:52] standard deviation so that was question 17 so we see that there are more questions coming in since we have limited time uh we will
[1:28:40] have to close the web in our room but we will go through the questions and they will be posted on the website for your
[1:28:46] information so thank you for attending today's session session please send us email if you have any specific questions about the exercise
[1:29:08] and homework we will go through your questions here and you will see that on you will see
[1:29:14] that on the website also next week we will have calculation of standardized precipitation index based on my merge data
[1:29:32] so thanks again for attending today's session and we hope to see you next week at the same time
[1:29:37] and i want to thank everybody from the asset team for helping here sean mccarthy my colleague who will be
[1:29:46] conducting the session next week salvin hudson odoi brock levins and jonathan o'brien they all helped in coordinating editing and putting this
[1:29:57] webinar series together so thanks everyone okay so we have uh sorry part two is actually on thursday on 30th
[1:30:27] of january not next week next week will be part three three so so on thursday we will see you for part two
[1:30:51] so again i want to repeat this part two is on thursday the day after tomorrow so please join us
[1:31:08] you
