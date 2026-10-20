# NEX-GDDP-CMIP6 Overview, Data Access and Application using Google Earth Engine Part 1/2

`https://www.youtube.com/watch?v=SxSA76J9NvI` · id 20 · 1:50:35 · module 114 — Assessing Extreme Weather Statistics using NASA Earth eXchange Global Daily Downscaled Projections (NEX-GDDP-CMIP6)

[00:00] Hello everyone. Welcome to this applied remote sensing training on assessing extreme weather statistics using NASA Earth Exchange
[00:09] Global Daily Downscaled Projections for Coupled Model Intercomparison Project Phase 6 or next GDDP CMIP6. My name is Amita Mehta from ARSET and we
[00:21] have a guest speaker today, Dr. Abhijit Thresher from Climate Analytics Group. Um I will be introducing her shortly.
[00:29] Uh part one today is going to focus on next GDDP CMIP6 overview and then data access and application using Google
[00:38] Earth Engine. We'll start with a brief introduction to Applied Remote Sensing Training Program or ARSET. ARSET provides accessible, relevant, and
[00:50] cost-free training on remote sensing satellites, sensors, methods, and tools. Trainings include a variety of applications of satellite data and are
[01:00] tailored to audiences with a variety of experience levels. ARSET trainings focus on these thematic areas listed here on
[01:09] the right-hand side. ARSET trainings are online and there are in-person trainings offered as well. Uh most ARSET trainings are live and
[01:20] instructor-led, but there are a few asynchronous and self-paced trainings available through ARSET website. They're cost-free. Uh they're bilingual and sometimes
[01:32] multilingual. Bilingual because most of our trainings are translated in Spanish and some are even offered in Spanish.
[01:39] Occasionally, uh they're offered in French. French. ARSET only uses open-source software and data and they accommodate differing
[01:49] levels of expertise. We'll start today's session with a brief background about uh extreme weather events. events. So, why study extreme events?
[02:02] According to World Meteorological Organization, the frequency and intensity of extreme weather events, including heat and cold waves, heavy
[02:11] precipitation and droughts, and wildfires, have increased fivefold in last 50 years. The latest WMO European State of the
[02:21] Climate 2024 report shows spiraling effects of weather and climate impacts, and that is shown in this animation.
[02:29] What this shows is monthly mean temperature differences for all months for multiple years, starting from 1860 all the way to 2023.
[02:40] And these temperature differences are taken with respect to a baseline temperature of 1850 to 1900. And we see
[02:50] that that as years progress, the temperature differences differences are increasing. And we are currently here in 2023. So,
[03:04] this is what this report means spiraling effects of weather and climate impacts. And as a result, extreme weather continues to
[03:13] bring devastating consequences globally and has significant economic and social upheavals. upheavals. So, to understand societal impacts of
[03:23] these extreme weather events, it is important to study them. Now, Earth observations from NASA allow monitoring of extreme events from the
[03:34] last 20 plus years to near real time, and you can look at these websites to get more information how satellite data
[03:44] have been used to monitor extreme events from the past and in near real time. However, for developing regional
[03:53] adaptation and mitigation strategies, it is crucial to assess how extreme events will unfold over the coming decades.
[04:03] So, we want to know the future of these extreme events, and for that, we have global climate models.
[04:12] Globally, there are more than 50 modeling institutions working on developing Earth system models or ECMs, and currently, more than 100 ECMs are
[04:22] available. available. Leading modeling groups have coordinated simulations of climate change scenarios within Coupled Model Intercomparison Project or CMIP, which is currently in
[04:35] phase six. As we will see later in this session, there are more than 30 models participating in uh CMIP6, and the CMIP6
[04:46] global climate models, they're constantly improving, and they provide predictions and projections of extreme events. events. However, the typical special resolution
[04:58] of GCMs is lower than 1° uh latitude and longitude, longitude, and therefore, for regional applications, NASA Earth Exchange Global
[05:10] Daily Downscaled Projections provide global high-resolution bias-corrected projections of daily weather parameters from CMIP6 GCMs at 1/4° resolutions. So,
[05:23] it's improved high-resolution, and it's bias-corrected data that we're going to focus on in this training. Here's an example of next GDDP climate
[05:36] evolution projection. What this shows is special pattern of years exceeding the 2° warming with respect to the baseline period 1950 to
[05:47] 1979. 1979. The 15-year moving average of the ensemble median of near surface air temperature from 35 CMIP6 models are
[05:58] considered here. And the scenario considered is SSP5-85, which is the highest emission or highest radiative forcing scenario.
[06:08] And what we see here is that this is the time length and this is the pattern. In so in in northern hemisphere at
[06:17] higher latitudes already uh temperature has exceeded 2°C. And as we go to other parts of the world
[06:27] uh between now and 2050, most of these parts will exceed 2°C warming. warming. There are some parts which will catch up
[06:38] later after 2050. But what we want to know is that as this warming is occurring, how do we see
[06:48] change in uh extreme weather conditions? And so the training learning objectives based on that are given here. That by the end
[06:58] of this training, uh we will be able to identify available daily high-resolution geophysical parameters from next GDDP CMIP6 to
[07:09] assess extreme weather statistics at a regional scale. There will be three ways how we can access this next
[07:19] GDDP CMIP6 data and analyze so that what we will see is that access daily temperature and precipitation data for a
[07:27] region of interest to calculate and analyze weather statistics using next GDDP CMIP6 data in Google Earth Engine.
[07:37] Visualize maps of extreme weather statistics for a region of interest using next GDDP dashboard. Customize provided Python Jupyter
[07:48] Notebook scripts to calculate extreme weather statistics for a region of interest. And finally, assess projected statistics of extreme heat and cold wave
[08:00] events and excess and deficit precipitation events from these models at regional scale during the 21st century to evaluate risk for a region of
[08:14] interest. interest. There are several prerequisites for this training. training. These are past RCIT trainings, which are highly recommended
[08:25] to follow this current training better. Fundamentals of remote sensing, then this drought monitoring prediction and protection training has a session on
[08:37] GDDP data. Also, there are trainings on climate change projections and climate change monitoring and impacts. So, these
[08:46] trainings are highly recommended. More importantly, there will be hands-on exercises and homework in this training. And for that, you need to create a user
[08:59] account on Google Earth Engine and register to a non-commercial cloud project. So, here is the link and then
[09:07] get started and follow the steps so you can create a cloud project on Google Earth Engine and you will be provided Google Earth
[09:18] Engine code so you can execute and work with GDDP data. Then, more importantly, there are these two sites.
[09:28] Before the next session, you should be able to access these sites so that you can work with the data. And there's a
[09:36] dashboard that you will be working with to look at visualization of GDDP extreme weather statistics data. And then you
[09:48] will be using Python Jupyter Notebook code. So, for that, please make sure that you can access these sites.
[09:57] So, these are the prerequisites. Overall outline is that there will be two parts. Today, we will focus on overview of next
[10:08] GDDP CMIP6 and data access and application using Google Earth Engine. And the next session will be on extreme
[10:17] event statistics during 21st century using next GDDP data. And this will be looking at GDDP dashboard as well as
[10:28] learning to use Python Jupyter Notebook code for accessing data. There will be one homework that will be
[10:35] posted on 17th of September. That's the last day of the training and it will be due after a month on 17th of October.
[10:45] So, this homework will include some hands-on exercises from today as well as from 17th and you will be answering a
[10:54] number of questions based on that. A certificate of completion will be awarded to those who attend all live
[11:02] sessions and complete the homework assignment before the given due date. So, we start with part one, next GDDP
[11:11] CMIP6 overview, data access and application using Google Earth Engine. Our objectives for today are that by the
[11:22] end of part one, you'll be able to identify next GDDP CMIP6 data characteristics characteristics and recognize how to access and analyze
[11:32] GDDP data for applications using GEE. Outline for today is that we'll start with an overview of next GDDP CMIP6
[11:45] project and data, and this will be by Dr. Bridget Thrasher. After that, we will have a demonstration, an analysis of extreme
[11:54] event statistics from GDDP data using GEE. GEE. We'll have a case study focusing on Nebraska, the state in the United
[12:03] States, and we will look at seasonal extreme cold and hot event frequencies and wet and dry event frequencies using
[12:13] GEE. GEE. After the demonstration, there will be some time for hands-on exercise uh in which you will be using the same
[12:22] script just repeat the uh calculations to so that you can use your Google Earth Engine account, and
[12:31] there will be a homework based on this um exercise. How to ask questions, just a note, please put your questions in the
[12:43] questions box and we will address them at the end of the webinar. Feel free to enter your questions as we
[12:50] go, and we will try to get to all the questions during the question and answer session after the webinar.
[12:58] The remainder of the questions will be answered in the question and answer document, which will be posted to the
[13:04] training website about a week after the training. With that, I want to introduce our trainer for today, Dr. Bridget
[13:11] Thrasher. Thrasher. Dr. Thrasher is a co-founder and climate scientist at Climate Analytics Group. Her areas of expertise are climate
[13:21] modeling and methods, including statistical and dynamical downscaling, as well as scientific programming and data analysis. Her employment background includes
[13:33] Oracle, NASA Ames, and various Silicon Valley startups. She holds a BS from the California Institute of Technology and a PhD in
[13:43] Earth Science from the University of California, Santa Cruz. Dr. Thrasher is awarded NASA Exceptional Public Achievement Medal this year. So,
[13:54] we're fortunate to have Dr. Thrasher talking about next GDDP CMIP6 project. And with that, I hand this over to uh
[14:03] Dr. Thrasher. Bridget? >> Thanks, Amira, for the introduction. And hello, everyone. Uh thank you for joining us today. My name is Bridget
[14:14] Thrasher, and I am the creator of the next GDDP CMIP6 archive, as well as other next downscaled data products.
[14:27] So, before we get into the details of downscaling and GDDP, I would like to just take a moment to
[14:35] tell you about NCCS. And that stands for NASA Earth Exchange. And NCCS is a platform for collaborative
[14:44] computing and data analysis. Uh the purpose of NCCS is to improve the availability of NASA's Earth Science
[14:53] data through this centralized environment. So, at and access to NCCS is available to researchers who are supported by um the ROSES program and
[15:05] various flight projects. In addition to ROSES and the flight projects, NCCS also supports a variety of NASA programs
[15:17] such as the MEASURES program, the Carbon Monitoring Systems program, the Global Ecosystem Dynamics and program, the national climate
[15:27] assessment, geostationary research, advanced information systems technology program, program, applied sciences program, and the end visualization for the Earth observing
[15:40] system data information system. Okay, so now that you understand what NEX is, let's take a look at downscaling
[15:50] in general. So, what is downscaling? Well, downscaling is a process that transforms low-resolution model data into higher-resolution
[16:03] information. information. Uh this is with the goal of making that information more suitable for regional and local scale impact and adaptation
[16:14] studies. studies. And there are two types of downscaling methods. One is dynamical downscaling, and this involves using a regional
[16:25] climate model over a specific geographic area with the boundaries of that region being driven by the low-resolution global
[16:37] model output. The other type of downscaling method is statistical downscaling, and this method uses statistical relationships between
[16:49] large-scale and local scale climate data to to perform that transformation to the global model output. So, let's look a little further into
[17:04] these two types of methods. Uh so, what is dynamical downscaling? Well, as I just mentioned, this method
[17:11] uses a regional climate model driven at the boundaries by global climate model output. The advantages to this type of method
[17:22] are one, it does not rely on the stationarity assumption, meaning that instead of assuming that the properties of regional
[17:32] and local climate will remain constant over time, those characteristics are allowed to evolve with the physics that underlie the
[17:42] regional model. And two, the regional model does not require any inputs other than the GCM model output, the global climate
[17:51] model output at its boundaries. However, as with all models, there are disadvantages to this method as well.
[18:00] First, it's computationally very expensive, especially as you increase the target resolution. So, this makes creating a large ensemble
[18:12] of downscaling output from many GCMs a challenge. Um second, the regional model will automatically inherit the bias and
[18:23] uncertainty that's contained in the GCM output. output. And this is actually in addition to the bias and uncertainty that's associated
[18:33] with with the regional model itself. And lastly, the regional models are limited to recreating the large-scale atmospheric patterns of the driving GCM.
[18:46] So, for example, the regional model won't adjust the location of the jet stream as is determined by the global
[18:55] model. And what is statistical downscaling? Again, as I stated earlier, statistical downscaling downscaling uses the statistical relationships
[19:10] between large-scale and local-scale climate data to transform the global model output. Um again, because no method or model is
[19:21] perfect, it has its advantages along with disadvantages. So, the first advantage is that the output from the global models are
[19:30] adjusted to alleviate their systematic bias. bias. Um second, the spatial coverage and resolution are determined by the reference
[19:43] observational data as opposed to being determined by computational resources. Um therefore, these methods are much less computationally expensive and can
[19:57] therefore be easily used to create large ensembles of downscaled output. The disadvantages to statistical downscaling methods are that they do rely on the
[20:11] stationarity assumption, so that the large-scale characteristics of the reference data are assumed to be constant over the time
[20:20] period being downscaled. Um second, your downscaled variables are limited to those that are available in the reference data set.
[20:36] Okay, now let's move on to the details of next GDDP CMIP6, which I I will just refer to as GDDP
[20:46] from here on out. Um GDDP stands for global downscaled daily projections, and this is an ensemble of statistically
[20:56] downscaled output of models from phase six of the climate model intercomparison project, otherwise known as CMIP6. And CMIP is a project of the World
[21:10] Climate Research Program that provides climate projections from modeling centers around the world to understand past, present, and future
[21:21] climate changes. So, the GDDP products have a daily temporal resolution and span the globe at a quarter degree
[21:31] horizontal resolution. The archive contains downscaled output from 35 different CMIP 6 models and five different CMIP experiments.
[21:43] Uh the historical experiment spans 1950 to 2014, while the forward-looking experiments span 2015 to 2100. And these experiments of future climate
[21:59] comprise four different pathways, as shown here. So, SSP1 is considered a sustainability sustainability scenario scenario that ends with 2 and 1/2 W per square
[22:12] meter forcing by the end of 2100. Um SSP2 is a middle-of-the-road scenario with with uh increased uh carbon forcing followed
[22:24] by uh mitigation. SSP3 is a regional rivalry between different parts of the globe. SSP5 is a full fossil fuel development
[22:38] scenario, also often called business-as-usual scenario. And just to let you know, GDDP earlier this year we released uh version two of
[22:49] the the of the archive. So, if you're going to use it, make sure you're using the version 2.0 files.
[23:01] And GDDP contains nine different climate variables as listed here. Uh relative humidity, specific humidity, precipitation flux, surface down welling
[23:16] long wave radiation, surface down welling short wave radiation, near surface average wind speed, average daily temperature, maximum daily
[23:27] temperature, minimum daily temperature. And these nine were processed for each of the CMIP experiments as available from each global model.
[23:45] The GDDP files have the following properties. So, each individual file contains one year's worth of data for a
[23:54] single variable. Um please note that not all the GCMs use the same calendar, so the number of days
[24:03] within a file will depend on the original calendar system used by the model. model. All files are in a compressed netCDF
[24:14] classic format and follow the CF 1.7 metadata conventions. The files average around 250 megabytes each each for a combined data volume of about 30
[24:30] terabytes. terabytes. And lastly, the archive is made available through a Creative Commons Zero license, which means that it is
[24:39] entirely within the public domain and can therefore be used for any purpose. Okay. So, now that I've given you the
[24:57] overall details of GDDP, let's move on to look at how it was actually created. So, as discussed, GDDP is a
[25:08] statistically downscaled product. Um in particular, a method known as BCSD, which stands for bias correction spatial disaggregation,
[25:19] disaggregation, was used to process the global climate models. models. This method was actually first developed for use with early iterations of CMIP
[25:31] output, which way back then were only available as monthly aggregates. Uh so, this method was later modified to
[25:40] use use with data at a daily time step. Um beyond the global model output, the BCSD method
[25:50] requires a reference data set. These are typically gridded observations or reanalysis product. Uh for GDDP, we used the Princeton
[26:02] Global Forcing Data Set, which is also known as the Global Meteorological Forcing Data Set, or GMFD. Just as a side note, um because the
[26:15] forcing data required some uh adjustments before use with the BCSD algorithms, I made the processed version available
[26:27] through a Google Drive that is linked here. here. Um in order to calculate the statistics and adjust the GCM biases, the reference
[26:38] data set time series must overlap with the output from the CMIP historical experiment. experiment. So, for GDDP, a reference period of 1960
[26:50] to 2014 was used. So, with both of these ingredients, the GCM output and the reference data set,
[27:00] we can apply the two-step BCSD algorithm, algorithm, which consists of a quantile mapping scheme scheme for bias correction followed by a
[27:12] spatial disaggregation of residual fields. All right. So, let's look at the details of the first step, which is an adjustment of the biases
[27:28] of the raw GCM output. And why do we want to do this in the first place? Well,
[27:34] Well, as you see here in this diagram, all GCMs have inherent biases, such that while they likely have a have
[27:43] reasonable large-scale properties, the exact values can be far from those seen in the observation record. record. We can therefore use this comparison to
[27:56] adjust the GCM results to be closer to those that we expect. So, BCSD uses a quantile mapping scheme
[28:12] for adjusting that bias. Uh Uh we're going to walk through an example of how that works. So, in this example,
[28:21] let's assume that we are adjusting the daily maximum temperature on February 14 or Julian day 45 of some year that's
[28:31] been output by our GCM. The daily BCSD method uses a plus or minus 15-day moving window to form a
[28:47] sample from which to calculate the bias corrected value. And this allows us to have a large sample size while also ensuring that the
[28:57] variables are all being adjusted from values that are taken from the same time of year. So, in this example that we're stepping
[29:07] through, our sampling window spans Julian days 30 to 60. Now that we have the extent of our
[29:20] sampling window, we need to gather all the values for all the days within that window for each year in the reference
[29:30] period. So, in the case of GDDP, this reference period was 1960 to 2014, which yields approximately 1,700 data
[29:43] points points when taking the full sampling window into account. So, we gather these values from both the
[29:53] output from the CMIP historical experiment experiment for the GCM being downscaled and from the reference data set, which
[30:04] has been aggregated beforehand to the native GCM horizontal grid. Next, we take those two pools of values
[30:20] and create cumulative distribution functions or CDFs for each one. And those are shown here in the bottom
[30:28] panel. The green line is the GCM model output, and the red line would be the observation of the reference data set
[30:36] output. >> All right. So, now that we have the two CDFs in place, we use them to adjust the
[30:52] GCM bias for the value on the day of interest. See here, Julian day 45. So, here our GCM value in this example is
[31:03] 29° C. And based on the CDF created from the GCM values in green, this equates to a
[31:16] quantile of 0.78. Next, we use the CDF from the reference data set in red to find the temperature
[31:32] value that lies at that 0.78 quantile. So, in this example, that's a value of 32.5° 32.5° C.
[31:45] So, we replace the original GCM value of 29° with the reference data set value of 32.5°. We then repeat this process for every
[32:04] day and every grid cell within our region and time span to be downscaled. This results in bias-corrected GCM output that is now
[32:23] more closely correlated with the reference data set. And now we have concluded the first step in the BCSD downscaling process from an
[32:41] uh uh low resolution native GCM output to a bias adjusted version at that same resolution. So, the bias correction step takes place
[32:59] on the low resolution grid that's native to the GCM being downscaled. So, now we must take those low
[33:09] resolution resolution bias corrected fields and disaggregate them to the target high resolution grid of our reference data set.
[33:20] While at the same time preserving the daily climatology in the process. So, first we need to calculate the daily
[33:30] climatology of the reference data set at its original horizontal resolution. In this case, it's at a quarter degree
[33:39] resolution. Next, we aggregate that high resolution climatology to the native grid of the GCM we are downscaling.
[33:53] And that low resolution climatology is then removed from the bias corrected fields we created in the first step
[34:04] BCSD to create these residuals. And this is done in an additive way for temperature and a multiplicative way for
[34:14] the fine out variables since they are bounded by zero. Uh the residual fields that are left over are then disaggregated
[34:24] through bilinear interpolation to the target high resolution grid native to the reference data set. And then lastly, that high-resolution
[34:36] climatology that we created up in step 2A 2A is returned to the disaggregated residual, again additively for
[34:47] temperature and multiplicatively for the other variables. And we have now used the daily BCSD method to statistically downscale output
[35:03] from a relatively low-resolution global climate model. And if you would like to see all the details, you can find the code used to
[35:15] produce GDDP on GitHub at the link provided here. All right. So, because our goal is to make the next products available to
[35:31] anyone who wants to use them, we have made GDDP available through a number of different outlets. The authoritative source for GDDP
[35:45] will always be through the data catalog at the NASA Center for climate simulation, NCCS. The link is provided at the bottom.
[36:02] However, for those who work in a cloud environment, um you can also access GDDP on Amazon Web Services through their
[36:12] registry of open data, and these are free to access. Again, at the link provided. Lastly, and what you will be learning
[36:25] about later, GDDP is also available through the Google Earth Engine. Okay, so let's recap what I've been
[36:42] discussing here today. The NASA Earth Exchange or NEX is a collaborative supercomputing and data analysis platform. It improves the
[36:56] availability of NASA's Earth Science data from various missions and other sources. sources. And NEX supports many programs
[37:07] throughout NASA. Uh what is downscaling? So there are two is downscaling is a process that transforms coarse low-resolution climate
[37:19] model data into a higher-resolution data that are suitable for regional and local impact and adaptation studies. And there
[37:29] are two types of downscaling methods, both dynamical and statistical downscaling. NEX GDDP CMIP6 is an archive of
[37:43] statistically downscaled CMIP6 models, including daily output from the historical experiment from 1950 to 2014 and four future scenarios out to 2100.
[37:59] The archive was created using the daily BCSD BCSD downscaling method, which is composed of a bias correction process and a spatial
[38:10] disaggregation process. There are nine variables included in GDDP GDDP as as available from 35 global models, these include both relative and specific
[38:27] humidities, precipitation, both long wave and short wave downwelling surface radiation, near surface wind speed, and daily minimum
[38:37] maximum and average temperatures. Each GDDP file contains 1 year of data for a single variable, and the files can
[38:46] be accessed through NCCS, AWS, and Google Earth Engine. Uh thank you for your time and attention today, and I look forward to taking any
[38:57] questions shortly. >> Thank you so much, Bridget, for your excellent presentation and such useful information about next GDDP CMIP6 and
[39:08] how to access the data. And that brings us to the last part of today's session, and that is going to be
[39:14] a demonstration of how to access GDDP data using Google Earth Engine. So, what we're going to do is use Google
[39:24] Earth Engine to analyze extreme event statistics from GDDP, and we'll use 2020 to 2100 data from GDDP using Google
[39:34] Earth Engine. For the demonstration, uh we've chosen a case study focusing on Nebraska in the USA. This is the state
[39:42] of Nebraska. Uh now, Nebraska's economy is heavily dependent on agriculture. Uh it grows corn, soybean, and wheat, and cattle
[39:51] farming is also big in Nebraska. And because of the agricultural activity, uh it's it's quite sensitive to climate variability and change. And
[40:01] uh also, it's part of the Tornado Alley in the US, this red area that you see here, where the most uh frequent number
[40:08] of tornadoes occur annually, and Nebraska is part of that. So, that's why we're going to see how uh extreme event
[40:16] frequencies change over Nebraska uh during 2020 to 2100. In the demonstration, we will do GDDP data analysis for this period using
[40:28] Google Earth Engine JavaScripts. There are four different scripts and you have access to these scripts through links provided on the training
[40:37] webpage. webpage. What we will do is first look at annual mean temperature and precipitation time series over this period and have maps of
[40:49] long-term mean temperature and precipitation over Nebraska. Then, we will look at extreme cold events during winter seasons, extreme
[40:58] hot events during summer seasons, and look at extreme dry and wet events during summer seasons. So, analyze
[41:07] temperature and precipitation over Nebraska. So, I'm going to share my screen and show Google Earth Engine scripts here.
[41:20] We'll start with Google Earth Engine main window here, this earthengine.google.com. earthengine.google.com. You have to have a user account created
[41:29] with username and password to be able to get into Google Earth Engine and also have to create or register a cloud
[41:36] project with GEE in order to run code on GEE or to use it. If you don't already have a cloud project registered,
[41:46] then you can go to this non-commercial option and follow the steps in there and create a cloud project. And then you'll
[41:54] be able to run the scripts that we will share with you. you. On Google Earth Engine main window, you
[42:02] will see these two options. So, let's start with data sets first. If you go to data sets, there's a
[42:09] search window and you can search by either parameter name or data set name. Here we already know we are looking for
[42:16] GDDP next GDDP data. So, when you search with that string, all the options you will see here about
[42:25] the the related to next GDDP. The data set that we are going to use is next GDDP CMIP6.
[42:34] Once you click on the data, it provides you information about that data set. Uh in this case, you can go to description,
[42:43] read about the data. Here you see Dr. Thrasher's paper referenced for uh GDDP. Uh data set availability, so
[42:52] temporal coverage, uh temporal resolution, which is daily, um and data set provider. Uh this is a Earth Engine
[43:03] uh image collection, so EE image collection. This is the name. Um every time you want to access this data in uh
[43:11] JavaScript code, uh this is the image collection you would start with. If you go to bands, you will see that um names of these
[43:24] parameters, these nine parameters that um Bridget mentioned in her presentation, presentation, uh they are described here. Uh this is
[43:32] near surface relative humidity, specific humidity, et cetera. Uh units are given here, minimum and maximum possible values, and pixel size, which is in
[43:42] meters. Another important thing to note is image properties. Here you will see by string all the CMIP6 models included in GDDP are listed
[43:54] here. here. For each of uh these models, data uh sets are available, and uh you can pick
[44:01] either one or many of these models by using this string. Uh for this for our purpose, we are
[44:09] going to pick one model and we are going to pick GIS E21G. This is the NASA climate model, so we will take that as
[44:19] an example today, but you can try different models as well. In In addition to these models, one can pick
[44:30] scenario for which all the models and parameters are available. First one is historical. These are retrospective model runs
[44:38] pre-2015. pre-2015. And these two are shared socioeconomic pathways or emission scenarios SSP245 and SSP585. We'll talk more about it when we extract
[44:50] data. So, you can pick a scenario, a model, and parameters that you want to use for your analysis. There are some
[44:58] additional image properties that you can review here. If you go back to the data description, you will see that
[45:08] along with the image collection, there is a snippet or a code snippet available. If you click on that
[45:16] in this arrow, then it takes you to the Google Earth Engine JavaScript screen here, and you will see three panels.
[45:25] Here is your repository with different code or scripts, information about um Earth Engine documents and assets where
[45:35] you can upload your own data if you want to use in your script. And this panel can show results of your code as well as
[45:46] there is a map panel here or map window here. here. Anything that you plot or maps that you make, they will be
[45:57] shown here. So, your results can be uh found here if you're uh plotting maps or a uh if there are any other analysis like
[46:07] time series, you will see in this window. You can start with your own code and build it or in this case we already have
[46:18] a link for you and you should have this link on the training page if you want to follow
[46:24] along. Uh this is exercise uh annual temperature and precipitation. Uh so this is what we'll start with
[46:33] uh and then we will go to uh extremes analysis. analysis. Uh so we'll start with the top two
[46:40] lines. Uh this imports and you will see that there's countries and subregion and there are two tables or feature
[46:49] collection. These are from Food and Agricultural Organization FAO. Uh these are global administrative unit layers or GAUL level zero is country
[47:00] level shapefiles and level one have uh states or provinces within the country that you have selected. You have
[47:08] different shapefiles that you can uh import and then use in your code. So this is important to note that you you
[47:17] will have to import uh shapefile of the countries and region of your interest. This is the training description and
[47:32] training webpage uh given here. This is the script name. Uh this code is free and open so you can save the script uh
[47:40] to your Google Earth Engine account and modify it and customize it the way you like it. Uh but by using this code you
[47:47] agree to cite the following reference in any publications derived from them and that is NASA Applied Remote Sensing
[47:54] Training Program. So please acknowledge our set. Um there's a disclaimer that every effort is made to ensure the code is
[48:02] free of errors, but there is no warranty for the maps and their features are either specially or temporarily accurate
[48:10] or fit for a particular use. This code is provided without any warranty of any kind whatsoever, either expressed or
[48:18] implied. We've seen some of this information earlier already that in Google Earth Engine this data set has image
[48:28] collection name uh as NASA/GDDP-CMIP6. This is the collection you will always use to access this data in GEE.
[48:37] And as we saw earlier uh in image collection bands and image properties, you will find options for
[48:45] choosing multiple atmospheric parameters and also different CMIP6 models are available um in there, too. There are two shared socioeconomic pathways for
[48:56] which data sets are available. First one is SSP245, that is the middle pathway, and that is projected to have radiative forcing of
[49:06] 4.5 W/m² by 2100. And SSP585 has radiative forcing of 8.5 W/m² by 2100. In this exercise uh we will go through
[49:23] the following steps. Um we'll uh select one model from GDDP model ensemble. We'll select one SSP scenario, in this
[49:32] case SSP245, the middle pathway. We'll select parameters, surface air temperature, the daily average temperature we'll pick, and precipitation. Uh first we'll
[49:43] collect daily data for these three years, 2020, 2050, and 2100. Clip the global data set to the area of
[49:52] interest. In this case, it will be Nebraska. Um and then find annual mean of near surface air temperature and
[50:00] precipitation for the 3 years for the area of interest. And we'll map these parameters and also their differences to see how uh patterns
[50:10] change in temperature and precipitation from 2020 to 2050 and 2020 to end of the century. century. Then, we will have annual mean uh
[50:22] temperature and precipitation uh for each year from 2020 to 2100 and we'll make a time series to see
[50:30] uh variability and change in the time series and we'll have this area average toward Nebraska. We've already talked about FAO GAUL data
[50:39] set. set. Um and these are definitions of variables used in this code. Uh I'm not going to read every line, but you can
[50:48] refer to these definitions or descriptions here. As we go through the calculations, I'll refer to some of
[50:54] these uh names or variables. So, starting GDDP analysis here for Nebraska. This is assigning uh country and state
[51:07] uh from this level one uh administrative uh GAUL data. So, here we are picking this feature collection and filtering it
[51:16] with the country of our interest and state of our interest and assigning it to my AOI. These two lines uh
[51:27] they add this my AOI layer to this map. Uh here it focuses or it centers on my AOI, in
[51:36] this case Nebraska, with zoom factor six and uh colors the shapefile uh with blue color. And if you look at the map panel,
[51:47] once you run the script, this Nebraska will be highlighted here in blue. The shape file will appear on the map.
[51:57] If you don't want to use country or state, but you have your own shape file for a county or a watershed or even a
[52:03] city, city, there is a way to use that. That means upload your own area of interest. In that case, you will go to assets here
[52:14] and pick shape file from your computer with these extensions. And once uploaded in in this tab, you can then
[52:26] if you go to assets, there are some examples here. You will see an arrow and then you can import
[52:32] that in your script. So, this allows your own shape file to be used instead of any predefined shape
[52:40] files for countries or state. So, that also is a possibility. Now, we're going to start with GDDP
[52:50] analysis. We define a variable data set. We start with this image collection for GDDP data. data. Filter by dates from 2020 to 2100.
[53:04] Filter it for a specific model GS E21G and filter for one scenario SSP245. Here, we are checking our data set
[53:17] and so when you print something, it appears on this console window. And so, this is print data set and this
[53:26] is data set first 90 elements are printed here. So, this is the collection. collection. If you look at the bands, all nine
[53:36] parameters are available. And when you go to properties, this is the model name, this is the scenario, and this is 2020 day one, and
[53:45] it's for first 90 days. It shows uh, that the data set that you have picked, it it it's kind of confirming that the
[53:54] data we uh, put here are the one stored in data set. Next, in this block, now we are getting
[54:03] just one parameter out of those nine parameters. parameters. Um, and we'll start with uh, defining a variable airt. This collects uh,
[54:14] surface air temperature, daily temperature, temperature, uh, and this is daily mean temperature TAS. So, we start with that. So, this is
[54:22] global air temperature uh, TAS. We further clip to my AOI. So, this is airt regional. Now, we take our global airt
[54:35] collection and clip it to our uh, area of interest. In this case, it's Nebraska. Nebraska. Now, as we saw earlier, temperature data
[54:44] are in units of Kelvin. And to convert it to Celsius, we have to subtract uh, this number, 273.15,
[54:52] from the Kelvin temperature. And that's what is done here. So, at the end of this operation, airt uh, underscore
[55:01] ridge or regional uh, temperature will be available in Celsius because we're subtracting this constant. Again, this is printing
[55:12] uh, for checking uh, our data. And you can perhaps confirm that by looking at image collection and
[55:22] features. features. And look at the elements. So, here now you will see that uh, you will have just um,
[55:32] surface air temperature, uh, not all nine parameters, and same image properties are there. So, this is the data set we will be
[55:41] using to calculate annual mean and then time series. So, first we will make maps or annual mean maps for 2020, 2050, and
[55:52] 2100. This entire block does that. Uh starts with year start date and end date. So, it's starting from 2021 first
[56:03] day to last day. Uh defines an collection TYY and so that just has one year worth of
[56:12] daily data and then T2020, that's the annual mean temperature that takes this TYY image collection and uses this reducer mean to get annual
[56:26] mean for T20. This is again just printing and checking down here. You can click and see what it shows.
[56:36] Uh Uh After doing this for 2020, it's exactly the same procedure for 2050 and then again for 2100.
[56:47] So, at the end of this section, we have three maps, annual mean 2020 surface air temperature, 2050, and 2100 surface air
[56:58] temperature. temperature. Next, we take differences of these different temperatures. And here we define two variables shown here.
[57:10] here. Tdiff, this is 2050 minus 2020 and this is 2100 minus 2020. And that's exactly what it's doing, taking annual mean and
[57:19] subtracting uh T2050 T2050 T2020, T2100 all calculated in previous segment. segment. And so, at the end we have uh
[57:31] temperature differences. Now, we are actually mapping or visualizing maps. So, we are defining visualization parameters for air
[57:41] temperature, uh we fix minimum to 5 and maximum to 15° C and assign color table here. And for temperature differences, our
[57:52] minimum and maximum values are -0.5 to 4° C and again colors are assigned uh for maps. Um and these five statements
[58:04] map.addLayer map.addLayer actually uh plots map on this map panel. Uh three uh years annual mean temperature and then
[58:15] the two differences. And we will inspect them at the end of the script. Next segment does the same for
[58:24] precipitation. We have precipitation maps for 2020, 50, and 2100. Only thing changes is that our data collection now
[58:33] is uh PR uh instead of airT, now we have precipitation data set and it selects PR. PR. Then it defines uh PR_rich
[58:46] and it clips to my AOI, my area of interest in Nebraska. And again, this is printing. And here there is one more
[58:54] constant. Uh that what that does is converts mm per second uh precipitation to mm per day. So, it multiplies precipitation values
[59:06] by 3600 seconds per hour, 24 hours per day. So, when you multiply by this constant to precipitation values, you
[59:14] get data in mm per day. Uh once we have that in this um um block, we start with 2020. Uh this is
[59:24] again PRYY is the annual image collection for 2020 day one to last day and then this is just finding annual
[59:36] means from daily data now we have annual mean data for 2020. Similarly Similarly we have the same for 2050
[59:46] and for 20 2100. 2100. Then we also check differences between precipitation so we define PR diff here precipitation difference
[1:00:01] 2050 minus 2020 and 2100 minus 2020 by subtracting this annual mean data. This is very analogous to what we did for
[1:00:11] temperature and here we define visualization parameters 0.5 to 3 milli millimeters per day for precipitation and for differences it's
[1:00:22] minus 1.5 to 1 millimeters per day and we add layer map.add layer so add map to the
[1:00:33] map window three mean precipitation data and then two differences. Next we will make time series of surface
[1:00:43] air temperature and precipitation for this 81 year period 2020 to 2100 for both temperature and precipitation calculation steps are the same we first
[1:00:55] start from the data collection or image collection collection calculate annual mean so we have first we have 81 maps and then
[1:01:08] for each map we find area average quantity quantity for 81 years so for each year we have
[1:01:15] number average over Nebraska or my AOI here then we plot the time series fit a trend line, and plot that, too.
[1:01:26] In this segment, uh the year list is formed, so it's starting from 2020, increase by 1 year
[1:01:34] to to uh uh total 81 years. And then, from filter collection, which is um daily data, from that annual mean
[1:01:47] uh data are found, so T annual from this image collection. And um here, uh we have used original uh image collection,
[1:01:57] which was in Kelvin, so again, we are converting uh data to Celsius. So, at the end of uh this segment, we
[1:02:06] have T annual image collection, uh which has um annual mean uh for 81 years, so we have
[1:02:15] 81 maps here. Now, we are plotting time series by using this ui.chart.image.series by region uh command here.
[1:02:24] Uh we define a variable time series. Uh image collection is T T annual is used, and so each image now is uh
[1:02:36] averaged, found mean over my AOI. The scale for this data is 25,000 m, because the resolution of the data is 25 km.
[1:02:47] So, based on that, this um mean over uh my AOI is found, and um then, the property here is this is the
[1:02:56] administrative uh region name. Uh you can have multiple uh shape files, you can define multiple administrative level
[1:03:06] for which you want to do this analysis. Um Um that's why uh we are identifying this with this particular um administrative
[1:03:15] uh name. Um this is for visualization. Uh, this is the title of the uh time series vertical and horizontal axes
[1:03:25] titles and their values are given. So, um max and mean are 8 and 15 uh degrees Celsius.
[1:03:34] Celsius. Uh, and uh then uh we are labeling it as T air. Once that is done, it part of that there
[1:03:44] is a trend line trend line fit to that time series and then that is also part of this time series both annual mean and
[1:03:55] then the fitted line as well. Here, this time series variable now is set to chart type line chart, so we can
[1:04:05] plot lines. And when you say print time series, that time series is plotted on the console window here that we will
[1:04:14] see. see. This was for temperature. Exactly the same steps are followed for precipitation making annual uh image collection then
[1:04:26] uh taking uh converting it to millimeter per day and here for um each uh each year now precipitation is averaged
[1:04:40] over my AOI and trend line it uh fitted there and then it's um plotted. So, PR time series
[1:04:49] also is printed on the console. So, when you go through the script and you run the script uh you will see
[1:04:57] results. So, let's first of all look at time series. Um, this is annual mean surface air temperature for Nebraska and
[1:05:05] this is linear trend. Um, and you can see for 81 years, this is in Celsius. You have increasing
[1:05:13] temperature trend in surface air temperature. temperature. So, you can see the slope and intercept shown here. Uh you can point to any of this and you
[1:05:26] will see the number for that particular year. You can also see there is variability around this trend line. So,
[1:05:34] interannual variability is there as well in temperature. If you look at the precipitation, you can see that there is
[1:05:42] interannual variability. Initially, there is more rain. Slowly, there is decrease in precipitation over Nebraska over this year. So, clearly,
[1:05:53] both both surface air temperature is getting warmer slightly and precipitation annual mean precipitation is decreasing overall. overall. Both have interannual variability.
[1:06:11] Next, let's look at the maps that we plotted for different years and temperature differences and precipitation differences as well. So,
[1:06:20] here, all the layers you can choose to plot here and to make them visible. Uh this is just the shape file for
[1:06:30] Nebraska. Let's start with air temperature 2020 in Celsius. If you click on this wheel here, here, it shows the range.
[1:06:43] Uh if you go to custom and stretch 200% it shows exact range and then it distributes with this color palette.
[1:06:52] So, range here is about 8.2 to 13.1 and you can see that temperatures are colder in northern part and as you go to
[1:07:01] southeast, southeast, um they are getting warmer. If you look at uh 2050, uh slightly warmer temperature there.
[1:07:10] And if you look at 2100, almost everywhere there is slight increase in temperature. And now, let's look at difference
[1:07:19] between between uh 2100 and 2020 surface air temperature. temperature. Um what you see here is that there's much larger differences in the
[1:07:30] northern part, northeast part. Uh and there are less differences in the southeast part. Uh so, this is the
[1:07:39] special pattern we get uh in differences. Um if you look at precipitation for 2020, um and values are shown here about 1.3
[1:07:52] to 3.3 mm per day. Uh much larger rainfall in the eastern part, and it decreases there's a gradient as you go
[1:08:01] towards towards uh western part. Um If you take 2050 and 2100, now you see that there is a decrease in
[1:08:12] in precipitation over western part. Uh and if you look at the differences, and let's look at the numbers here. It's
[1:08:22] minus 1.15 uh to about zero. That's the difference. Uh here, um it's negative. So, that means more
[1:08:31] decrease in rainfall in this part. And if you compare this with the temperature difference here, uh you will see that in this part, you have
[1:08:45] um warming going on and decreasing uh precipitation going on in the uh northeastern part of the state. So, you
[1:08:53] can see the special pattern also. This is again from one model, GISS. Um you can explore this from other models
[1:09:03] and compare. Um, ideally for your own region, you would pick the model that is closest to observations in your area and
[1:09:12] then follow that model. Or you can take ensemble mean, you can take multiple models and take average precipitation
[1:09:21] and temperature and do the same analysis. Um, it's computationally, um, um, takes more time, so that's why we right
[1:09:29] now are focusing on just one model, but all these possibilities are there. So, this concludes our precipitation and
[1:09:39] temperature, um, analysis. Uh, and now what we're going to do is look at the extremes. Next, we are going to examine how
[1:09:51] extremely cold even frequencies are changing between 2020 and 2100. And for that, we are focusing on winter
[1:10:00] season and daily minimum temperatures. Now, this script for cold events is also available to you through, uh, training
[1:10:09] webpage and you can follow along. Uh, we The first part of the script is pretty much the same. All the
[1:10:16] definitions are the same as we saw in the previous script. Uh, so we will not be, uh, going through that in detail,
[1:10:24] uh, but just, uh, main analysis is what we are going to focus on. So, these are the databases that we used before for
[1:10:33] country and state level. We are going to use the same image collection, NASA GDPC MIP6. We are going to pick GISS NASA
[1:10:42] model, GISS, for analysis and SSP245 uh, scenario, uh, for analysis. Uh, here we are going to select daily
[1:10:54] minimum surface air temperature. First, we're going to collect daily data for 2020 to 2100. And from that, we are going to form
[1:11:04] seasonal image collection for December, January, February of each year. We're going to clip the data to our region of
[1:11:13] interest. Again, we're going to focus on Nebraska. Nebraska. And then, we are going to look at extremely cold
[1:11:20] events. So, first, based on the seasonal time series of images between 2020 to 2100, we will calculate 10th percentile value
[1:11:35] of daily minimum temperatures. Then, Then, we'll compare each daily image of minimum temperature with this 10th percentile value. And if the daily
[1:11:47] minimum temperature is colder than the 10th percentile value, then it will be considered extremely cold event. So, 10th percentile value of temperature
[1:11:57] is used as a threshold, and that is how we count extreme cold frequency. So, we do that by for each year for
[1:12:07] winter season. This section is just definitions of variables, and we'll start with the analysis. analysis. This section selects region of interest,
[1:12:20] and it puts them adds to the map below, just like we did in the previous script. And now, we will start with the
[1:12:31] analysis, main part of the analysis. Here is our data set variable, which filters our original image collection with dates, with model, and
[1:12:43] with scenario. And print statement, as in previous script, it just writes on this console window, and we can check
[1:12:53] the data. Next, we define airt from data set image collection. It selects daily minimum temperature tasmin and assigns it to airt.
[1:13:12] This is still global image collection for daily minimum temperature. In airt_rich airt_rich now we clip it to my AOI, Nebraska, and
[1:13:24] so we have regionally clipped airt_rich image collection of daily minimum temperatures. temperatures. Here we define start year and end year.
[1:13:37] Here Here years are listed from start to end year. And this entire block here here it forms image collection in such a way
[1:13:53] that for each year daily images from December, January, February, or winter season are stored and they're tagged by
[1:14:02] each year. Variable DJF image list is stores the list of processed images. It iterates over each year and populates this image
[1:14:14] list. list. Note that for a winter season December of previous year is considered and January and February of current year
[1:14:24] are considered. So that is taken care of by this dot subtract here from year. So for winter season of say 2025,
[1:14:37] December from 24 and January, February from 25 will be considered. Also, it checks for leap year. If it is
[1:14:47] a leap year, then last day of February is considered 29th, otherwise it is 28 days. days. And so, at the end of this segment,
[1:14:58] um we have season images which holds daily images for each winter season uh for DJF per year. And they are listed
[1:15:09] here. Furthermore, this list now uh is made into converted to uh DJF collection or image collection. So, this is the
[1:15:21] final DJF collection which holds uh image collection for winter season for each year, and that is used to calculate
[1:15:32] uh 10th percentile value of temperature as shown in this segment. We define a variable T10_perc that uses DJF collection and uses dot
[1:15:44] reduce use reducer.percentile10th uh percentile to get 10th percentile value in this variable. variable. Uh also note that in GEE percentile
[1:15:56] values are stored in a default band. So, it would be in this case if it were 20th percentile
[1:16:06] value it would be P20. If it were any other variable, that variable name would be here. So, further
[1:16:15] this uh T10_perc is in Kelvin. We're converting it to Celsius like we did in the previous script by subtracting
[1:16:23] 273.15. 273.15. So, we have T10_perc_C in Celsius. So, this is the variable that holds 10th percentile temperature
[1:16:34] value in Celsius based on this entire time series. So, now we calculate frequency of extreme cold days.
[1:16:44] We define variable T10, which holds a band values of tasmin underscore P10 for also that is the 10th percentile
[1:16:55] value for temperature minimum daily temperature. temperature. Then we have a variable seasonal cold counts counts that is applied to each year and it's
[1:17:08] the result of this calculation here. So, what it does is for each year, first of all, all, defines a season images variable in
[1:17:19] which which just one year of winter season images are held and they are filtered from DJF collection, which
[1:17:30] is all the DJF images for all the years. So, per year season images are stored. So, these are daily images for one year
[1:17:41] for one winter season. And for each image image grid point by grid point comparison is done with T10
[1:17:51] value. And so, if it if for any day at any grid point, if daily minimum temperature is less than 10th percentile
[1:18:02] value of temperature, then it is assigned extreme cold event value and it is set to one. Otherwise, it is set to
[1:18:10] zero. So, we have binary images collection collection that is arrays of one and zero for each day in a season. And so, then cold count
[1:18:24] is just sum over entire season. It counts ones and zeros of for daily binary images in one winter season and comes up with
[1:18:37] cold count, which is for that particular year, that season has this cold count, which is the cold
[1:18:46] number of days, and that is returned back to this variable. At the end of this block of code, we
[1:18:58] have variable seasonal cold counts that is converted to image collection cold frequency. frequency. And what cold frequency image collection
[1:19:07] has is maps for each year from 2020 to 2100. For each year, each winter season, what was the frequency of extremely cold
[1:19:20] days that is stored in here. And for example, we are plotting one map for 2020. It shows
[1:19:31] map of extremely cold days over Nebraska for 2020, and this will be added to our map panel that we will view in a few
[1:19:42] minutes. minutes. Next, now we make time series of extreme cold events for my AOI, or Nebraska in
[1:19:51] this case. So So here, here, variable time series is defined and as we did in the previous
[1:20:01] script for average temperature and precipitation. Here, also we are using UI chart image series by region. Image
[1:20:12] collection is cold frequency for each winter season per year. We are averaging over my AOI. This is
[1:20:22] the the resolution of GDDP data, 25 km or 25,000 m. m. And then these are annotation for plots
[1:20:32] for vertical and horizontal axis and title. title. We also fit a trend line and we plot that also. Here we define time series to
[1:20:46] set chart type to line chart and when we print time series, we find that this time series is plotted in the console
[1:20:55] window. window. And we can expand this. So, here is the cold frequency between 2020 to 2100 for winter seasons.
[1:21:10] So, we have used minimum daily surface air temperature to find this. What is striking here is that
[1:21:18] there is very strong interannual variability. variability. Extreme frequency cold frequency varies from 2 days to about 19 days
[1:21:29] and there is a decreasing trend in the sense that number of overall days are decreasing between 2020 to 2100.
[1:21:40] So, cold frequency days are decreasing less numbers of days which are extremely cold colder than 10th percentile value.
[1:21:50] But, you can see that there are very many years where frequency frequency is very high. It's a
[1:22:00] Many days have 15 days or so. So, out of 90 day season 15 to 19 days can be extremely cold. That's what this
[1:22:12] is showing. And if we look at the maps, this is the 10th percentile value of minimum surface
[1:22:20] air temperature. This is somewhat consistent with what we saw in climatological mean temperatures. The northern part uh temperature are
[1:22:31] much colder than in the southern and southeastern part. Here we see that 10th percentile values are much lower in
[1:22:40] northern part and they are higher somewhat in southern part. So, there is a clear pattern here. If we look at cold
[1:22:50] day count, this is just for 2020. Um the the the values we check, they vary between 2
[1:22:58] to 12 days. Um number of extremely cold days are less in in eastern part here, north and
[1:23:06] eastern part. And they're somewhat higher. Uh there is an um pattern here you can see. Uh Here there is medium, there is low, and
[1:23:18] then somewhat higher. Um extreme cold days are seen here. This is just for 1 year. Uh but this is just an example.
[1:23:28] So, this allows you to check um extremely cold frequency. Next, we're going to look at uh extremely hot days
[1:23:37] in summer in Nebraska. After examining the extreme cold event frequency in Nebraska during 2020 to 2100, 2100, next we are going to examine how
[1:23:52] extremely hot um event frequencies they evolve uh during 2020 to 2100 uh over the same region. Um so, the logic here is the
[1:24:03] same. We are looking at extremes. Uh in last script, we looked at extreme cold events. Here look Here we are looking at
[1:24:11] extremely hot events. So, by now you know the flow and logic of um this script. So, I'm not going to
[1:24:19] go through every block because most of this is the same. I'm going to focus on what is different here in this hot event
[1:24:28] detection script. By the way, this script is also available to you for your use. use. You can follow along if you like.
[1:24:36] Um now, in here, we are picking summer season season uh daily maximum surface air temperature to detect very hot um extremely hot
[1:24:47] events. So, we pick June, July, and August months, and we consider daily maximum surface air temperature uh instead of looking at average or
[1:24:59] daily minimum surface temperature that we have looked before. So, we uh for for looking at the extreme
[1:25:07] hot temperature, we calculate 90th percentile value of daily maximum temperature uh for summer, that is June, July, and August, considering the entire
[1:25:18] period of 2020 to 2100. And then, uh uh compare each daily image of maximum temperature with the 90th percentile
[1:25:28] value, use that as a threshold, and count as extreme hot event when the maximum daily temperature is warmer than
[1:25:36] the 90th percentile uh temperature value. So, that is the flow here, and pretty much uh it follows the same path
[1:25:45] as we did for extreme cold events, but now we are looking at summer season 90th percentile, and we are looking at uh
[1:25:55] daily maximum uh temperature, not minimum or average. Uh this is the same part we uh load uh our
[1:26:04] um area of interest. Um we start with the uh data set uh image collection here from GDDP with
[1:26:13] the same model and SSP scenario. We go down and here now we define air temperature and extract TAS max. This is
[1:26:26] the surface air temperature maximum surface surface temperature day daily from data set and this is still go global data. Now we
[1:26:36] clip it with our region of interest to get regional um temperature um and define our start year and end
[1:26:46] year and here now we are collecting JJA image list. Uh you can see that this block uh it creates
[1:26:56] um um image list for all daily images uh for summer seasons for every year. Um and for that we consider
[1:27:07] starting date as 1st June and end date as 31st of August. So for each season for each year
[1:27:20] June, July, and August daily images are stored in season images and uh by the end of this block
[1:27:28] uh we have JJA image list variable containing all the daily uh images for June, July, August for each year and we
[1:27:38] convert that to uh image collection JJA collection which we use to calculate uh 90% tile value. Here uh we define T90 percent
[1:27:52] variable and use JJA collection uh to find 90% tile value. We convert uh T90 perc this variable which is in
[1:28:04] Kelvin so convert that to Celsius just like we did for um previous script. And so now we have T90 perc C. This is
[1:28:15] in Celsius. And And this is the one that we are going to visualize here. Now we calculate frequency of extreme
[1:28:28] hot days. The logic here is very similar to what we did for extreme cold days, but now we are comparing the threshold
[1:28:36] of temperature 90th percentile. And so that is the difference here and we are using June, July, and August maximum
[1:28:45] daily temperature for that comparison. So T90 holds threshold that is 90th percentile value of daily maximum air temperature from this band.
[1:28:57] And then we define a variable seasonal hot counts. This loops over each year. For each year all the JJA daily images
[1:29:09] are collected. And from this large image collection and then extremely hot days and not extremely hot days are
[1:29:20] decided based on the threshold. So this binary image collection is working for each year. It compares daily
[1:29:31] surface maximum air temperature with value in T90. That's the percentile value. Comparison is done at grid point
[1:29:40] by grid point basis and so we have image collection here for each day with one and zero
[1:29:49] defining detecting whether it's extremely hot day or not. Finally this hot count sums for each season and it holds number of hot event
[1:30:01] frequency for that particular season. At the end of this loop for each year between 2020 and 2100, we have uh
[1:30:11] seasonal hot counts uh for each summer season, and that is converted to image collection hot frequency, and that uh
[1:30:21] is plotted here for first 2020 as an example. So, here uh hot frequency has 81 um in the image collection for each
[1:30:34] year, and we are just plotting the first one here and adding to the map. Then, we go on to
[1:30:42] uh make time series from uh hot frequency uh image collection. We use the same uh procedure as we did
[1:30:50] earlier to make time series. Here, we start with the image collection average over Nebraska here, and this is the
[1:30:58] scale of the GDDP grid resolution, uh that is uh 25,000 m. Uh we annotated um our plot. Uh we fit a trend line to um
[1:31:12] this this time series, and we plot that uh as well. well. Uh Uh We further define time series as set
[1:31:20] chart type to line chart, and then print time series, uh which then is displayed here on the console window.
[1:31:29] So, we see this time series here. If you look at this frequency um for year, uh days with warmer than 90th percentile uh
[1:31:40] value, uh frequency varies from almost zero to here almost 28, 29 days. So, uh you Here, you can see clear
[1:31:51] increase in uh frequency of extreme hot days, and also see interannual variability. There are years with extremely uh high frequency of extreme
[1:32:05] hot days, 25 to 30, and there are many days between 15 and 20 which are extremely hot. So, considering 90-day season,
[1:32:18] here you have 1/3 of the season with extremely hot days, and 1/4 or 1/5 here. So, So, between 2020 and 2100,
[1:32:31] you see clear increase in frequency of extremely hot days. You can also view maps in this panel. You will have two layers,
[1:32:48] 90th percentile value of maximum surface air temperature that is shown here. You can see that the value in 90th percentile value is
[1:32:58] much higher in the southern part of the state and western part, and it is lower in this
[1:33:04] part part in the northern part. You can also look at hot day count for June, July, August
[1:33:11] 2020. This concludes our demonstration of these three scripts, one with annual precipitation and temperature time series, series, one with extreme cold event frequencies,
[1:33:28] and second one, our current one, which is extreme hot event frequencies. We looked at those. And so, we're going to
[1:33:36] stop this demonstration now. And what you can do is whatever time you have, you can work on this fourth script,
[1:33:46] which is exercise for wet and dry event statistics, and it has the same logic. Now, we are looking at precipitation
[1:33:58] data data uh uh from data set. It's uh named PR. Uh and uh so, we are using PR and using the
[1:34:07] same logic that we find 10% value of precipitation and 90th percentile value of precipitation. Then, we go through
[1:34:16] each image for each year uh in summer season, June, July, August. And whenever we have precipitation that's less than
[1:34:25] 10% 10% that is considered dry event, and if it is more than 90% value, then it is
[1:34:31] considered um wet event. And we uh have time series for those. So, this is for um higher than 90% uh this is lower
[1:34:43] than 10% uh. So, when you run this script, you should get these time series, and you will also see
[1:34:50] corresponding maps uh for 90th and uh 10th uh percentile value here. So, what we're going to do is give you have some
[1:34:59] time, you can copy this script on your own Google Earth Engine account and try to run this script.
[1:35:10] So, you can work on the exercise using this extreme dry and wet events during summer season link.
[1:35:17] And this will be a part of your homework. You will be submitting these time series as a part of your homework.
[1:35:26] Looking ahead to part two, uh we will have several demonstration. We will learn to visualize maps of
[1:35:32] weather statistics for a region of interest using next GDDP dashboard. Then, using Python Jupyter notebook code for GDDP data access, we will learn to
[1:35:43] customize special and temporal selection of GDDP data. Uh calculate frequency and intensity of extreme hot, cold, dry, wet
[1:35:52] events for a region of interest and then assess changes in the extreme event statistics over the 21st century for a
[1:36:00] region of interest. So, we are going to do this uh using uh Python and Jupyter Notebook, something that we did today using GEE.
[1:36:11] Uh here, uh however, you will be using some different indices to look at uh statistics. There will be one homework uh posted on
[1:36:23] 17th of September, that is uh next week after part two. Um and that will You can access that from training web page.
[1:36:32] Uh you will uh submit answers using Google Form, but also you will be provided information how to submit your
[1:36:40] figures um as part of your homework. Um homework will be due on 17th of October. October. A certificate of completion will be
[1:36:49] awarded awarded to those who attend all live webinars and complete the homework assignment by the deadline. You will receive a certificate via email
[1:36:58] approximately 2 months after completion of the course. Once again, we thank Dr. Bridget Thresher for uh her excellent presentation and her
[1:37:10] help with this training. Here's the contact information for Dr. Thresher. You can always contact us My colleague, Shawn McCartney, and
[1:37:21] myself from ARSET will be happy to answer any of your questions. You can visit ARSET website, and this is our
[1:37:28] YouTube link where all the training material um uh recordings will be available. So, thank you for attending today's
[1:37:37] session. Thanks again for attending today's session, and um I hope that you can copy the GEE script and work um
[1:37:47] on the dry and wet event calculations. Um we are going to go to the question and answer session. Uh in the meantime,
[1:37:55] you will have the link for this script. So, please go ahead and copy and try to run it. Um you have a month to complete
[1:38:02] this. this. Uh it'll be part of your homework. Uh we will start with the question and answer session.
[1:38:10] Question one is I want to know about the climate resilience in urban areas from the urban heat island. What are the
[1:38:18] climate models that I can apply to? >> I um >> Yeah, go ahead. Yeah. Would you, please?
[1:38:31] >> Yes. Sure. Sure. I I any any of the climate models could be applicable. applicable. Um Um Uh I'm thinking of the GCMs that start
[1:38:46] or whose output is already at a slightly higher horizontal resolution are going to obviously be the same ones that are at
[1:38:56] the same latitude. lat long Um Um Sadly, the GCMs are not all on the same They don't output
[1:39:08] their results on the same horizontal grid. So, you would have to do do do some research in to find out which
[1:39:17] ones ones are as I said, that are at a whose native resolution is already on the higher
[1:39:25] side. And those are going to, again, they should do a better job at capturing that that effect.
[1:39:36] >> Next question is what is the resolution of original data that NEX is downscaling. downscaling. >> Yeah.
[1:39:45] Um this follows on from the previous question. They're all as I said, they're all different. They could be anywhere from
[1:39:53] say a possibility 3/4 degree resolution to as much as two maybe slightly more than 2°. So, it's highly variable.
[1:40:03] They range from 100 km up to 150 km. Um but so So, So, yes. >> Question three is do you think it would
[1:40:17] be safe to use the next GDPC 6 projections for future downscaling to 1 km in one's area of interest using the
[1:40:26] BCSD methodology? Historical reference would be different. >> Uh yeah, that's not a problem. I don't see I don't
[1:40:38] see any problem with that. If you're I will just put in a plug for a different product.
[1:40:45] If your region is actually over um the US over CONUS, the lower 48 states, uh we have a a different NEX
[1:40:53] product called DCP30, which is just over the the lower 48. Um It's at an 800 m resolution. So, if
[1:41:03] that's that's where you're you're looking, if your region of interest is in the lower 48, then I can point you to that data set,
[1:41:11] and then I will have already done the work for you. >> Great. Um question four For bias corrections,
[1:41:20] how did you manage to get observation data for every uh where over the globe? >> Yeah, that's um
[1:41:30] the reference data set that was used is actually a global product, the GMFT. There are several re-analysis they're
[1:41:37] called it's called a reanalysis, and there are several reanalysis products out there. That's just the one that I happen to
[1:41:48] use, and these reanalyses use a model to basic- they fill in all the gaps, um from the
[1:42:02] disparate locations of off- various observational observational uh inputs. So, that's how they can make a global product.
[1:42:13] >> Question five, how is this data going to complement other NWP and reanalysis data sets, including the data from ECMWF?
[1:42:22] ECMWF has much more granular resolution. >> Yeah, to my knowledge, ECMWF is is a it's weather forecasting. It's
[1:42:35] medium-range, I think it goes out three, maybe six months into the future, so this is obviously GDP covers that time
[1:42:45] period, but also goes out to end of century and involves three dozen models. >> Yeah. >> Um
[1:42:54] yeah. yeah. >> Yeah, so that's not it's not a comparison because you're talking about climate many climate models and their
[1:43:01] projections in future, and ECMWF is purely a uh weather forecasting model here, so Okay. Is there a Python version
[1:43:10] available for this code? >> Yeah. Hm, no, there's not. Um I do have a colleague that approached me
[1:43:19] about possibly creating one, um um but I just haven't I haven't gotten around to making that switch. Uh
[1:43:29] the code is all in NCL and car command language, which has served me well over many years, so
[1:43:39] that's that's just what I I've kept with so far. Yeah. >> Right. So, for data access though, there
[1:43:46] are Python programs and then next week will will see that. Uh question seven is that >> Yeah, to access the output
[1:43:56] >> Yeah, yeah, sorry. Uh Uh thank thank Thank you for the workshop. I'm interested in when GDPC MIP6 version 2
[1:44:04] will be released. >> Uh it's already out there, at least on NCCS. NCCS. Um Um the version 2 files are available there.
[1:44:15] Uh Amazon and Google Earth Engine, I I honestly don't know if they've been pushed out yet. They
[1:44:24] They're they have their own schedules for making making their updates on their side. Um Um but they are currently available through
[1:44:33] NCCS, yes. >> Great, thank you. Question eight is I'm working at the watershed level. So, is it generally better to use regional
[1:44:43] climate model data for global climate model model uh data or for such studies? Uh Uh Additionally, in this context, which
[1:44:53] downscaling method, dynamic or statistical, would be more appropriate and reliable? >> Um They are This is your question somewhat context
[1:45:16] dependent. dependent. Um Um the the as far as applicable and reliable, they they all have their you know, pros and cons, plusses and
[1:45:28] minuses, and they all do some things better than others. So, I can't really answer that question as much as I want to say mine mine are
[1:45:38] the best. It could It could well be that that's not the case in your particular watershed. Um
[1:45:48] Yeah, I'm sorry. Did I answer the full question? I lost track. >> Mhm. Yeah, I think um
[1:45:56] It's fine. Uh question nine is is there some guidance document or best practice article for the way on how many and
[1:46:05] which models to select in building an ensemble time series for particular region or adaptation application? >> Mhm. Mhm.
[1:46:16] Um I would say to uh be sure to check the scientific literature to see what evaluations have already been done
[1:46:25] in your region uh with the CMIP6 models themselves. Uh there there's a whole body of literature out
[1:46:33] there that uh has explored these these questions already. already. Um Um Yeah, so that's where I would start.
[1:46:43] >> Uh question 10 is on further BCSD downscaling. downscaling. Uh would it be okay to filter out a
[1:46:50] narrow set of um um model projection? Is there a rule of thumb uh for narrowing? >> For choosing the the projections?
[1:47:06] >> Yeah, it looks like uh set of model projections for ensemble. >> Yeah, it's basically what I just stated
[1:47:16] to um and evaluate the models themselves for your for your area, which has likely already been done
[1:47:26] to some extent. And in the in the scientific literature right now. >> Great. So, I as far as
[1:47:43] far as which Sorry. As far as which um like SSP to choose, if that's sort of what you're asking about, it's really
[1:48:01] Again, it's kind of application dependent and would be dependent on what your what question you're you're trying to
[1:48:14] answer with the data. If your tolerance is if for your application is if you have a large risk tolerance or if
[1:48:25] you then maybe looking at, you know, the 25th, 50th, and 75th percentile is per- perfectly acceptable. If you're
[1:48:34] if you're if you don't have a lot of tolerance for risk, maybe you need to look at the 10th and 90th percentiles.
[1:48:41] It really just depends on what question you're trying to answer. >> Thank you. If we have a few more minutes, if you
[1:48:52] have any additional questions, you can add to the chat box. Um also, we have a few minutes, so if
[1:49:00] you want to go ahead and start running the script, that would also be possible um um on the Google Earth Engine.
[1:49:09] Our next session will be at the same time next week on 17th. But we want to thank you for attending
[1:49:18] today's session. We also want to thank Dr. Bridget Thrasher one more time for her time and her presentation and
[1:49:26] answering all the questions. Also our set team Shawn McCartney, Solvin Hudson Odoy, Sarah Cashell, Brock Levins, Jonathan
[1:49:36] O'Brien, Sue Monti, Natasha Johnson Griffin. Griffin. We want to thank the team for helping with this training and coordination.
[1:49:45] >> Oh yeah, by the way, the version 2.0 2.0 of next GDDP CMIP6 files are available from Amazon Web Service and will
[1:49:57] provide provide examples to use the latest version of next GDDP CMIP6 next week. >> Oh, that's great.
[1:50:07] >> Oh, thanks Keio. I haven't looked recently, so I'm glad you were able to follow up on that.
[1:50:12] >> Mhm. >> Great. Thank you, Keio. There are no more questions. Thank you for attending today's session. We hope
[1:50:24] to see you next week.
