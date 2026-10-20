# Extreme Event Statistics during 21st Century using NEX-GDDP Data, Part 2/2

`https://www.youtube.com/watch?v=L9UTzIeIhKs` · id 316 · 1:30:55 · module 114 — Assessing Extreme Weather Statistics using NASA Earth eXchange Global Daily Downscaled Projections (NEX-GDDP-CMIP6)

[00:00] Hello everyone. Welcome back to this ARSET training on assessing extreme weather statistics using NASA Earth Exchange Global Daily Downscaled
[00:08] Projections Coupled Model Intercomparison Project Phase 6 or next GDDP CMIP6. This is the last part of this training
[00:17] and part two today we will focus on extreme event statistics during 21st century using next GDDP data.
[00:25] Our guest speakers today are Dr. Hugo Keoli from NASA JPL and Alexander Goodman from NASA JPL as well. We'll
[00:33] also have Ashish Pantha from University of Utah and we will be hearing from them soon. soon. Let's start with a brief review of part
[00:42] one about next GDDP CMIP6. Dr. Abhijit Nag described about NASA Earth Exchange which is a collaborative supercomputing and data
[00:52] analytics platform to improve availability of Earth science data from NASA missions and models. We talked about downscaling which is a
[01:01] process that transforms coarse resolution climate model data into high resolution suitable for regional and local impact studies.
[01:10] We talked about two types of downscaling. downscaling. Dynamical and statistical. And finally next GDDP CMIP6, it is a
[01:18] statistically downscaled output from 35 of CMIP6 models at daily global 1/4 degree output. There are four shared socioeconomic
[01:29] pathways considered 2.5, 4.5, 7 and 8.5 from two 2015 to 2100 and it's created using two-step methodology, bias
[01:40] correction and special disaggregation. We also talked about next GDDP CMIP6 data variables and how to access them.
[01:52] We saw that there are nine daily downscaled variables available, surface relative and specific humidities, precipitation, surface down willing long
[02:01] wave and short wave radiation, near surface wind speed, surface minimum, maximum and average temperatures. And there is one file for each year per
[02:13] variable. variable. We also saw that GDDP data can be accessed through NASA Center for Climate Simulation, that's where they are held.
[02:22] They're also available from Amazon Web Services and through Google Earth Engine. Engine. We had a demonstration of how to use
[02:31] Google Earth Engine to access NASA GDDP CMIP6 data. And we saw some JavaScript codes to analyze data. We used Nebraska
[02:43] in USA as our region of interest and we looked at annual mean maps and time series between 2020 and 2100 of
[02:54] surface air temperatures and precipitation. precipitation. We also looked at extreme cold and hot event frequencies and extreme dry and
[03:01] wet event frequencies. Today in part two, we will continue to look at extreme event statistics during 21st century using next GDDP data.
[03:13] Today however, we will have additional methods of looking at this data or accessing this data and we'll talk about that shortly.
[03:22] There is a homework posted on the training website and it is due on October 17th. A certificate of completion will be
[03:30] awarded to those who attended all live sessions and complete the homework assignment before the given due date.
[03:39] We'll start with today's session. So objectives for today are that by the end of part two, you will be able to use
[03:47] given Python Jupyter Notebook code for GDDP data access and special temporal customization. customization. Recognize how to calculate frequency and
[03:56] intensity of extreme hot, cold, and dry wet events for a region of interest using the Python Jupyter Notebook code.
[04:04] Identify changes in the extreme event statistics over the 21st century for a region of interest. And visualize maps
[04:12] of key variables for a region of interest using uh next GDDP dashboard. Here's the outline for today.
[04:22] We'll start with an introduction to computing environment needed for today. And topic will be accessing and running
[04:28] analysis scripts using binder hub. And presenter will be Alex Gutman. Then we'll talk about data access option
[04:36] one using Amazon Web Service or AWS. And topic will be finding and downloading next GDDP CMIP6 netCDF files from AWS
[04:45] cloud storage to a local disk. And presenter will be Dr. Yuqiong Liu. Data access option two will be about
[04:53] streamlining data loading. And topic will be introduction to the intake catalog for efficient handling of next GDDP CMIP6 data. And presenter will be
[05:03] Ashish Panda. There will be hands-on lab of calculating climate indices. You will be given scripts. So activity one will be
[05:12] run scripts to calculate ETCCDI. Or that is expert team on climate change detection and indices. Uh Uh that there are number of temperature
[05:24] precipitation based indices from downloaded data. Activity two will be analyze and visualize the calculated indices for a specific region of
[05:34] interest. interest. And discussion will include interpreting trends and patterns in the results. Uh there will be interactive dashboard. Uh
[05:42] Ashish Panda will talk about that. So I will introduce our speakers and contributors for today. Our first speaker will be Alex Goodman
[05:52] from NASA's JPL. Alex is a data scientist with a strong background in both software development and climate science. He has particularly
[06:02] strong interest in analyzing big data sets, computational science, and cloud computing. He received his MS in atmospheric
[06:11] science from Colorado State University in 2016. Our next speaker will be Dr. Hugo Li from JPL, specializing in atmospheric sciences,
[06:24] climate modeling, and advanced data analytics. analytics. Dr. Li leads research that integrates satellite observations with machine learning and uncertainty quantification
[06:35] to improve the evaluation and prediction of extreme weather, air quality, and wildfire risks. Dr. Li has contributed to the
[06:43] development of NASA's regional climate model evaluation system or RCAMES, and is actively involved in advancing digital twin frameworks for wildfire and
[06:55] climate applications. He holds a PhD in atmospheric sciences from the University of Illinois at Urbana-Champaign and a BS from Seoul
[07:04] National University. Our final speaker will be Ashish Panda. He is a graduate student at the University of Utah working with the
[07:14] Center for Extreme Data Management, Analysis, and Visualization CEDMAV Group at the Scientific Computing and Imaging Institute. His research interests include
[07:26] large-scale data management, visualization techniques, and leveraging machine learning algorithms on large data sets. He has contributed to several
[07:36] interdisciplinary projects focused on improving the efficiency and scalability of scientific data workflows and collaborated with domain scientists to
[07:47] develop user-friendly visualization tools. tools. We also want to acknowledge and introduce two of our contributors for today's session.
[07:57] Uh Professor Valerio Pascucci is the John R. Parks Inaugural Endowed Chair of the University of Utah and the Founding
[08:06] Director of the Center for Extreme Data Management Analysis and Visualization CEDMAV. CEDMAV. Professor Pascucci is a faculty of the
[08:16] Scientific Computing and Imaging Institute, a Professor of Computer Science of the School of Computing of the University of Utah, and a DOE
[08:26] Laboratory Fellow at PNNL. His research interests are in the areas of scientific visualization, high-performance computing, large-scale scientific data management, and
[08:39] computational topology. And our second contributor is Georgios Corselli. Corselli. Uh Uh he is the director of uh CEDMAV
[08:52] within the Scientific Computing and Imaging Institute at the University of Utah. Utah. He is recognized as an expert in
[08:59] software engineering, particularly in transitioning research into production-ready software, and has played a key role as a principal
[09:09] software design engineer and a co-PI on NSF DOE projects focused on large-scale imaging technologies. So, with that, we'll start today's
[09:19] session, and I first invite Alex Goodman. Goodman. >> Okay, so I'm Alex Goodman from JPL, and I will discuss today a bit about the
[09:30] computational environment that we'll be using for this session. So, the main uh interface that you're going to be using
[09:38] to do these examples is through our deployed binder hub. And I'm sure some of you may have used
[09:46] binder before, but if you are not familiar with what binder is, what binder does is essentially it takes an
[09:51] existing GitHub repository full of Jupiter notebooks and a list of dependencies and it automatically builds an image, then executes that image for
[10:01] you and deploys your own isolated instance of Jupiter notebook over the internet and it'll have all the
[10:07] necessary packages and notebooks in that repository installed and ready for you to go, so you can just get straight to
[10:15] computing everything you need without having any difficulties doing all the installation yourself. So, let's go and showcase where that is
[10:26] located. This is on the first URL in this slide here. So, when you click on that URL,
[10:33] you will uh get into a screen kind of like this one. And the main points of interest start to
[10:42] your left. You'll see your files that are of importance. So, under scripts, this is going to contain all the
[10:49] notebooks that are needed for these exercises, including Python modules and other dependencies. And then if we go
[10:56] back to the root directory, uh there's a shared folder. So, this shared folder is actually a file share that has all it has some
[11:09] samples of the next GDP CMIP6 data that we've discussed earlier. So, we have two models or sorry, we have one model here,
[11:17] just guess, that we will be using in these examples for you. And again, this is shared, so everyone
[11:26] access to this. So, the last thing I want to note is that this environment is only going to
[11:34] be available for today. So, after this session ends, you will need to go to this GitHub repository here.
[11:45] And this is the actual GitHub repository that that the instance we just showed is built from, and this also has all the
[11:53] notebooks. notebooks. But, this doesn't have the data. So, if you want to get some copies of the data,
[12:00] I suggest doing this while you are in the middle of the exercises today. But, if not, you can either go through some of the
[12:09] resources that we linked earlier, or you can send an email to me or Kiyo, and we will get you set up with a personal
[12:18] JupyterHub environment that you can access for the duration of this training. >> Thank you, Alex. So, uh So, my name is
[12:31] uh Kiyo, and I'm a data scientist at uh Jet Propulsion Laboratory. Here, uh I will show how to access the next GDDP
[12:39] CMIP6 data set. Another option to access this data set. So, uh Amazon Web Service is Amazon's cloud service.
[12:50] The version two next GDDP files are stored in an Amazon S3 bucket. An S3 bucket is a public cloud uh and this uh
[13:01] S3 bucket is a public cloud storage system. The important point is that anyone can access this data set without
[13:10] logging in or creating an AWS account. On the uh slide, you can see the registry page uh registry page, and this
[13:22] is uh where you can find the basic documentation, and you can also browse the uh data repository.
[13:32] repository. And And here here Yes, here on the AWS register page, you will see a description of the data set,
[13:42] and also under resources on the AWS. Notice that this one doesn't require any AWS credentials to access the data. If you
[13:55] click here, you can also browse the bucket, and even can download the data. So, for example, I
[14:08] I selected the access model and this scenario and ensemble and variable. And okay, this is a version 2.0 like a net
[14:19] CDF CDF file. I click it, and it starts downloading the data to your computer. Then, Then, let's go to the
[14:34] our binder hub. And here, if you go to the screech folder, you can find this Python script. This is
[14:47] not a Jupyter notebook script. We provided this Python script to make your data access easier. So, it's called
[14:56] a download_nextgddp.py, and you can run this script here on Jupyter binder hub, but I suggest right click this file,
[15:10] and choose download. And now, you download this file. Then, what you can do is go to the
[15:23] download folder, then you can run this script. And let's open this script. And this Python script is a simple to
[15:50] filter by variables. So, for example, I want to download the three variable, precipitation, precipitation, and maximum daily temperature, and
[16:02] minimum daily temperature like here. And also here the out dir output dir, this is a folder where the downloaded net CDF
[16:13] files are saved. And also you can choose like a scenarios, and you can choose like a multiple scenarios. And here are
[16:22] all the available historical and SSPs like a scenarios. And experiments wise, you might want to go to the
[16:32] AWS registry page and check if it's it's it's what kind of ensemble members like each model is
[16:42] providing. For example, the access model only provides like this one ensemble from R1 I1 P1 F1. Then also you you have to choose like a
[16:56] one of those CMIP6 models. And this workers variable like set up how many files like you want to download
[17:05] in parallel. So, in this case like it's a six, so now it's downloading six files like all together. And you don't really
[17:15] have to change like the last last one. This is uh the MD5 like a file like a to check if
[17:23] the downloaded file uh downloaded file is uh same as the uh same as the the one on the AWS like a repository.
[17:34] So, and you should be able to run this script on your local computer, but you have to install like a some of the
[17:42] Python dependencies uh libraries. And if you have any questions like we'll provide like a more detailed like
[17:50] instruction on the website that after like a two-days like a session. In the next part, our rising star Ashish will show another
[18:05] way to access and analyze next GDD data without downloading them. Ashish? Ashish? >> Uh thank you, Kyo.
[18:16] Uh hi, everyone. Um let me briefly introduce myself. Uh I'm Ashish Panda. I'm PhD student at University of Utah. Uh and I'm doing my
[18:26] computer science major. So, as you all know, downloading the data from uh from AWS buckets can be
[18:33] pretty troublesome. Uh so, in this slide, I will be showing how we can stream the same data set
[18:40] uh using the intake catalog without downloading uh running the download script. script. So, basically, an intake catalog is a is
[18:47] a metadata file that points to some data that's located somewhere in the cloud. Uh it's like a library card for for a
[18:55] catalog thing. And the benefit of using intake is that you can easily search for search and browse for the
[19:03] for the available data sets. Uh you don't have to know about any existing cyber infrastructure. Uh you
[19:09] don't have to know which models are available. So, as long as you do the right query, you can easily see which
[19:16] data sets are available. So, from the Jupiter Notebooks, from the binder of that you are in right now,
[19:23] to access this notebook, you have to go to the scripts folder. Inside the scripts folder, we have a
[19:29] file named streaming via intake. Double-click that and you will be seeing a Jupiter Notebook. So, inside the scripts folder, there is
[19:40] a notebook called streaming via intake. And this is what it looks like. So, all the libraries required for this
[19:49] are already installed with the binder up. So, you don't have to worry about manually installing any libraries.
[19:55] But, once you are here, the first step is you just import all the required libraries. Some of the basic libraries are like
[20:05] intake, some matplotlib, numpy, and xarray. xarray. So, in order to like browse through the catalog, you have to use this URL
[20:15] using the intake library. Once you open that, you can run the script to see what models or variables
[20:22] are available from this catalog. As you can see, we have almost nine or 10 models available from this specific
[20:31] catalog. We have all the variables, all the scenarios, and all the time ranges for that. Now, once you have loaded the catalog,
[20:40] the next part the next part is reading the data. For that, you specify the model of your
[20:45] interest, your variable, scenario, and the time step. Now, once that's loaded, in order to see the data, you just have to call this dot
[20:55] read functionality. Dot read function, just like an xarray. Once you have that, you can get like a
[21:04] data array, uh unlike latitude and longitude. Now, you can also set like uh start date and end date or any other variables you
[21:14] want. And it will give you the list of all the models, variables, scenarios as well. We also support other parameters like
[21:23] quality. So, if you want to see like lower resolution data set, you can decrease the quality to minus two, minus
[21:30] four, or minus six. Uh you can also specify the latitude and longitude uh for the region of your interest.
[21:39] Now, here I'm just using a uh default Xarray tool to uh to plot the data set. As you can see, it is now returning the
[21:47] specific lat-long data selected and the data is way coarser. So, if I want it finer and if I want
[21:54] like a broad uh global region, then I just have to go back and manipulate these parameters. Now, you can see the same you can see
[22:10] the same data set for the entire region uh with much finer details. And uh this is the basically the same
[22:18] thing, but uh uh using like Xarray. Now, in order to visualize the data, uh you don't have to depend on you don't
[22:27] have to always rely on Xarray. You can use custom libraries like Matplotlib as well. well. Now, let's say you don't want a specific
[22:36] date, you want like a range of date. So, here I'm specifying start date to uh 10 10 and end date to 2020.
[22:45] Setting the quality to minus four. Now, what it is doing it it is basically extracting all the dates uh between the
[22:57] year between these ranges and trying to plot it. >> As you can see, we have all the dates
[23:08] plotted here. Now, let's say you don't want a range, you just want specific dates for the variable.
[23:15] variable. For that, you just specify the dates of interest interest and pass it as time stamps. Now, once
[23:21] you run this, it will basically extract these time stamps of interest and plot them. And basically, this is how you can
[23:30] leverage intake to query for the data sets. Now, coming back to the slides. Here, we'll take over the next slide.
[23:54] >> Okay. Now, let's use the downloaded net CDF files in Jupyter notebooks to calculate the expert team on climate change
[24:07] detection and indices. So, ETCCDI indices and make maps. If you could not download those files, yeah, no worries,
[24:19] yeah. I think it's still I'm also still downloading those files like into my computer. computer. We already We have already downloaded
[24:31] these files from this model on the Jupyter Hub. Hub. So, we have already downloaded the three variables here.
[24:46] Precipitation, daily maximum temperature, and daily minimum temperature. And these three variables are those variables that are needed to
[24:56] calculate ETCCDI like indices. So, ETCCDI is a set of 27 internationally recognized like indices for analyzing changes in climate
[25:14] extremes. And as I mentioned, we just need like three variables. And there are will also Is it we can visit their website and
[25:28] you can on this page you can see the list of all like 27 indices with their definitions
[25:38] and mathematical formulations. And references. They also provide ours library to calculate these indices. And we are providing Python version of
[25:57] these these modules to calculate these indices. And for today's hands-on, we'll focused on precipitation-derived indices only. However, later you can extend the same
[26:14] workflow to temperature-based indices using daily minimum temperature and daily maximum temperature data. The functions are already included in
[26:27] in the Python modules. Yeah, you can find in this script folder and also the GitHub repository. So, you will have
[26:36] everything you need to calculate ETCCDI indices on binderhub or on your local machine. machine. And today you will working with uh, two
[26:50] scripts. scripts. So, the first script is, uh, this is a Jupyter notebook that you will actually run.
[27:03] It loads, uh, precipitation data from the this model and calculate eight precipitation indices. Actually, there are modules to calculate
[27:14] all of the 10 precipitation indices, but I only included, uh, uh, eight indices like for today's, uh,
[27:23] today's today's hands-on lab. And this file, this Python script is a Python module containing the subroutines and subroutines or like you can call it
[27:34] functions that could that do the, uh, actual index calculation. So, the notebook is like the driver's seat and
[27:45] the .py, the Python file is the engine under the hood to calculate ETCCDI calculation. And now, let's
[27:56] look at the notebook. So, you go to the script scripts folder. Okay, and this is the file.
[28:16] Okay, here, step one parameter. So, notice that there is, uh, this, uh, user, uh, parameter section at the top.
[28:26] And this is, uh, where you need to, uh, modify, uh, for your, uh, own, uh, calculation or for your own needs. So,
[28:36] the root folder is where data are stored. In this case, we have already downloaded, uh, uh, this model data in this folder. and
[28:48] when you uh, run this script on your local machine and down and you might want to refer to the directory where you
[28:56] downloaded next GDP data. And this is the model to use, and this is the scenario. Here I chose like a
[29:07] historical, historical, and the ensemble member it's almost a fixed and depends on like which model you're using. This is already a fixed
[29:18] value. value. And here like this is the two variables for the time period start year and end year. Because
[29:28] my start year is 1985 and end year is like a 2014, that's why I chose the scenario like a
[29:36] historical. If you somehow choose some period that doesn't belong to historical, you will output some error messages. And you probably know that
[29:47] historical runs are from 1961 through 2014, and from like a 2015 to the 2100, that's covered by one of these SSP
[30:00] scenarios. And yeah, be careful that we are only provide data from one one model this model and only for the
[30:12] historical and SSP 5 85 on this binder hub. hub. And yeah, and these are only settings you need to change.
[30:25] And let me quickly look at these Python module. And this is the supporting Python module. Inside you will see functions
[30:36] that implement the ETCCDI Uh, Uh, here. This is the same as the the website. For example, K,
[30:48] uh uh RX 5-day is period. It's a maximum consecutive 5-day like a precipitation. So, internally in this function, it
[30:58] calculates consecutive 5-day maximum precipitation precipitation for the period, then find out the maximum value in each year. Oh, oh, I forgot to talk
[31:13] about the the season variable. So, ETCCDI index is calculated like a per each year, but you can get a like one index like a per year
[31:26] by using the entire uh annual data starting from January 1st through December 31st, or you can choose
[31:35] one of the seasons. So, right now like the season I chose is the annual, so you will
[31:41] will calculate, for example, for RX 5-day, it will will calculate the five consecutive day precipitation for the entire
[31:52] year at each grid point and find the one maximum value and save it as a RX 5-day
[32:00] index for each grid point. However, you can also choose like a JJA, which represents for the summer time in northern hemisphere
[32:12] from June, July, like August, then it will only search data between June 1st and August like a 31st.
[32:24] And also, probably you don't need to modify any of these like functions here in this Python model, unless you want to explore or
[32:35] like extend and this notebook automatically call these functions, and we can run these notebook together. So, I executed the
[32:51] first cell like a by clicking this play button. button. And these are like some helper like a
[32:58] functions and subroutines. K. And K so far no problem. So, now it's loading this file. So, there are 30 files, and
[33:15] because uh uh as I mentioned in the last week's training, there's only one file like a per each year because I'm loading data
[33:27] for 30-year period uh between 1985 and 2014, that's why I'm loading 30 files. Now, this is the
[33:40] cell calculating each of these indices. Wow, now it already completed the calculation of a yeah, RX1 day. Now it's
[33:52] all moving all the way to the uh CWD, and if you are curious what CWD stands for, you can go to the ETCCDI
[34:03] website or go to open this Python module and CWD stand for consecutive wet days. So, it is uh checking all the precipi-
[34:16] daily precipitation and find out like a days whose precipitation is equal to or greater than 1 mm like a per day, and
[34:26] see if those precipitations are consecutive. consecutive. Now, the calculation is done. Then, now it's time to save this calculated
[34:40] results results into netCDF file. So, in this case, because my outdir parameter is ETCCDI underscore out, it will create and save
[34:59] calculated indices in this folder. And it will generate one file per each index. Yeah, so it will take some time to
[35:20] finish calculation and save files. Okay. Okay. Now, Now, we've calculated the ETCCDI indices. And yeah, it will take some time
[35:38] to write the indices into netCDF file. However, as we did previously, you can find those indices calculated using
[35:50] this model here. here. So, if you go to the top folder and shared directory and under nextGDP
[36:00] CMIP6, CMIP6, there's a folder named ETCCDI, and you can find all the calculated indices here. And these files are
[36:13] exactly same as what your script is writing in this folder. It just takes some time. Hey, now we'll do uh now using like uh
[36:38] these calculated indices, the next step is is to analyze them for for a specific country of your interest.
[36:52] And we'll do this uh together using this notebook script named uh ETCCDI_country_stats.ipynb. Okay, the notebook will load the uh
[37:09] ETCCDI and STDF files uh uh we are creating right now, or you can use the one we uh are providing uh under
[37:19] the shared folder, and the script will compute the long-term mean climatology of the indices. It will also calculate the annual
[37:30] regional averages for a chosen country, then it will plot time series and histograms across years, and it will uh lastly, it
[37:42] will fit a linear trend to the annual values and plot the slopes and R square values. values. Okay?
[37:51] Okay? And let's run the script here. here. Yeah. This is that script. Oh, I'm sorry. I accidentally closed that uh
[38:10] driver uh script that's writing the ETCCDI like indices, and but uh as I told you now it's stopped writing the file, you can
[38:20] find the same file under the shared folder. So, I already explained about what this model is doing and now if you
[38:29] click this file like before, all the key settings are these two parameter cells like in here the top, but here now you have to
[38:42] modify both like a step one cell and step two cell. And let me explain like what these start. So, this data DIR is
[38:53] where you have ETCCDI calculated ETCCDI nested files. And if you complete the calculation using that our driver script, you can find that those
[39:08] indices in your ETCCDI like out folder. And you don't have to change it like anything here, just to change like a
[39:18] data DIR and or then this like a step two in parameters, you can now see that the file name. So,
[39:28] here here I will run this step one. And you can find that we already provide uh the files for 18 ETCCDI like indices.
[39:46] And so, this first shell like just the list all the available ETCCDI calculated like files. And you have to
[39:59] give a one of the those like index files like and you have to choose one of these
[40:04] files. Here I chose this Alex 5 day file, but you can copy and paste like any of other
[40:14] files. Yeah. Among these. Then Then this one. Region method. So, there are two options available. So, here I chose
[40:25] like a country. If you choose country, you also have to provide name of the country that you are interested. Here I
[40:34] chose Thailand as an example. And there's another option to plot a map for B box. So, in this case
[40:44] you are giving like a four boundary values of rectangular box. So, the these four values are minimum longitude,
[40:53] maximum longitude, and minimum latitude, and maximum latitude. But here because I chose the country as my region method,
[41:02] it will ignore all the values in this B box. And we are providing shape file like under this shape file folder under
[41:15] scripts. So, you can easily download this shape file like and you can use your own shape file, but if you want to
[41:24] use our shape file, you can also go to this this select this shape file folder and right
[41:31] click. click. Then Then oh, you cannot download the like the folder itself. I'm sorry, but you can go
[41:38] to the folder and download each of the files to your local machine. And yeah, so once you choose like
[41:50] everything, yeah, and that's pretty much everything. And this is the color map the the Python matplotlib color map name and we
[41:59] are using like a this color map like a FYI default, but if you want to change it like a feel free to change to like
[42:06] different uh color map. And also this is is uh uh folder where the all the output of this
[42:14] script is archived. So, let me just run this this this cell. Okay. Now, these are some interesting
[42:28] subroutines and I just compile them. Now, Now, it is loading data. Okay. And yeah, already load the data
[42:41] and calculated the multi-year mean. And it doesn't take as long as loading the original next GDDP because there's only
[42:51] one value per each year. Now, Now, this one is applying the mask and it will mask out all the data
[43:10] except the country you chose. In my case, it's Thailand. Tada. So, this is a multi-year mean of
[43:24] RX5Day RX5Day because the period I chose is uh between 1984 and 2015. This is a 30-year mean of this
[43:35] extreme uh ETCCDI index that we calculated using next GDDP precipitation data. Oh, uh yeah, daily precipitation data. And okay, so here's a map and you
[43:52] know that these are the unit uh RX like a 5-day. In this case, it's a millimeter. millimeter. Then, how does this uh values
[44:01] distribute? Let's run the next cell. So, this is the distribution. Yeah, you have to remember that this is a special
[44:10] distribution of the climatological climatological RX5 days shown on this map only over Thailand. Thailand. Not for the globe. So, if you choose
[44:23] like a B box region, it will not mask out the values outside the certain country. It will use all the
[44:32] values within the box boundary, but it will show the special statistics of all the values uh plotted here. And let's go to the next
[44:47] one. So, and so, here's a histogram and this is the all the statistics associated with this histogram.
[44:58] Then now, the final thing is is Okay. Okay. We calculate Now, we calculate the regional mean per each year. When calculating like a
[45:16] regional mean, we are considering the uh latitude and so, this is a cosine latitude weighted regional mean in each
[45:27] year. So, there are 30 years from 1985 to the 2014 and you see the time series. And because there are like a two years
[45:38] where those RX5 days are like much much much greater than the rest of the years. Well, this orange line is a
[45:49] linear fit like of a It really explains like a the trend because of these two extreme values.
[45:58] Then, you can also see like a how these uh uh RX5 values are distributed across like a
[46:06] 30 years. And here you see that like yeah, there's a one value. I think it was uh
[46:13] 1997. 1997. Yeah, there was like a almost uh close to the like a 200 like a 75
[46:20] like a millimeter like over 5 days. And the second peak was happened in 2006. And the uh 5-day uh maximum
[46:32] precipitation is over 175 mm. And you should remember that this is a regional mean and average over the entire
[46:44] Thailand. So, in certain regions the actual RX5 day values must be much higher than that. And you can go to the
[46:55] actual uh file. Here, it is CCDI. And for example, if you open this file and look at those values and like and
[47:07] check those values in uh 1997 and also 2006 and to see which region got the the most extreme precipitation on those
[47:20] like years. Then the last cell is just the saving these plots, histogram and also map plots. And to close our session, uh I would
[47:37] like to highlight that beyond coding and notebook we also have an interactive dashboard for next GDP scenarios six uh
[47:48] data set. And this uh dashboard makes it possible to explore like climate projection from next GDP directly in your browser and no
[48:01] coding required and I will now hand it over to our rising star Ashish Panta who will introduce the interactive dashboard and
[48:14] give us a live demonstration. >> Uh we basically see how we leveraged Intech and open research to visualize these massive data sets.
[48:27] Uh you can scan the QR code from your phone or you can click the dashboard link and access the dashboard.
[48:37] Basically we we basically leveraged all the models and scenarios that we showed earlier with Intech and made them available from the
[48:46] dashboard itself. So once you are here you can see all the models that are available from the
[48:51] dashboards. You can select any of them. We have like nine variables available and three scenarios for now.
[49:00] All 150 years of data are available from the dashboard itself. Once you specify the scenario you just
[49:06] have to come back and change the year change the year to your interest. Uh you can specify specific month or
[49:13] dates as well. If you want to you can take screenshot and save this locally as well. well. If you
[49:22] basically depending on your interest you can set the user range to to just visualize the data set of your
[49:28] interest. interest. Uh you can change the frame rate and we will come back to that in a second. So
[49:34] we have this play button that lets you play through the data set. For now as you can see it's interactively
[49:43] fetching the data set directly from the cloud and visualizing this from this UI. There is a palette option as well lets
[49:53] you choose from multiple palettes of interest. interest. For example, I can switch to like different palettes uh that intrigues me.
[50:01] And then there is a mapper that lives like that plots the data using linear or log logarithmic color map.
[50:08] There is a resolution slider that lets you uh change the resolution of the data set. Meaning, higher resolution means
[50:14] more details, whereas lower resolution means coarser uh data. You can change this uh For example, if you have uh slow internet speed, uh then
[50:24] you can change this to 15 or or lower values, and then it will only query the data at that specific uh resolution.
[50:32] Meaning, you can uh meaning visualizing these data sets uh can be way faster, even in like slower
[50:39] bandwidth conditions. And we have this show stats button that lets you see the statistics of the data
[50:47] set. For example, the general stats lets you see mean, max, and average of the entire global region. As you play over
[50:55] time, all these are updated as well. Now we have other static statistics available from the dashboard as well.
[51:04] For example, a histogram shows you where where the values lies, uh which range of values has the maximum
[51:11] frequency. And then we have CDF uh as well. And uh average over time that lets you uh see the average of this over the
[51:19] entire global region. Another functionality we have available from this dashboard is the turn on region of setting. So basically, you can
[51:31] uh compare the entire global region with with a specific region of interest. For example, once you I click the selection
[51:37] box here, I can select any region from this uh from the main canvas. Once I select this, you can see this
[51:45] pop-up menu, uh and you can save this data as a numpy array locally, or you can download the scripts that you can
[51:51] later run and just plot this a specific region. region. I'm closing this for now, but uh once
[51:58] you close that, you can see the zoomed-in view of that specific region here. Now, you can basically compare the stats of the of
[52:07] the global region with the with your region of interest as well. All these uh statistics and features are
[52:16] available from this interactive dashboard dashboard uh uh as well. And the goal of this is to make
[52:22] the data accessible to general public and scientists as well. Coming back to the slides, uh I will let Keo take over from slide
[52:31] 17. 17. Uh if you have any feedbacks on these slides or these dashboards, please fill out feel free to reach out to us.
[52:39] Uh and you can save this QR code and access the same dashboard from your phone as well. Thank you.
[52:45] >> Yeah, now let's wrap up uh with a quick summary of what we have covered uh today. We started by
[52:55] providing a hands-on guide to analyzing extreme weather events using the uh next GDDPC6 data set. For the computing
[53:06] environment, we used uh BinderHub, which allowed us to launch a preconfigured uh Python setup directly in your browser.
[53:17] And this ensures that everyone has the same consistent and reproducible environment without needing to install anything locally. And as Alex mentioned
[53:29] uh previously, if you need uh this uh BinderHub-like BinderHub-like computing environment for your homework, and uh we can give you an account. So, please
[53:42] contact us if you want to main continue to use this binder hobby for your homework for the next four weeks.
[53:54] And for data access, we explored the two different approaches. First, yeah, you can download next GDP CMIP6 NASA data files directly
[54:07] from Amazon Web Service. And by running the script, you can get a local copies for the repeated use of those model files.
[54:22] Then, secondly, you can also stream the next GDP data efficiently into memory using an intake catalog. catalog. And this approach avoids the need for
[54:34] local downloads and makes workflows much faster and lighter. In the hands-on lab, yeah, we work through Jupiter notebook scripts to
[54:45] calculate several ETCCDI indices. And these indices are uh developed by the expert team on climate change detection and indices are based
[54:58] on daily maximum and minimum temperature and precipitation. By calculating these, we can identify uh also long-term trends in these climate
[55:10] extremes extremes for a country of your interest. Finally, Finally, the Ashish highlight is the visualization component, the interactive
[55:21] next GDP CMIP6 dashboard. And this is a powerful tool for exploring and visualizing changes in climate variables
[55:31] across the 21st century, and it makes it much easier to see how climate extremes like evolve over time in a way that's
[55:42] accessible to both researchers and decision makers without any climate science background. So, in summary, you now have the tools to access, process,
[55:56] analyze, and visualize extreme indices using next GDDP CMIP6 data and all within a consistent and reproducible environment.
[56:12] >> Thank you very much, Alex Goodman, Dr. Hugo Keoli, and Ashish Pantha for your demonstrations and very useful
[56:20] information about how to access GDDP data using a number of methods, and also for providing a Jupyter Notebook code
[56:30] and introducing next GDDP CMIP6 dashboard. So, we thank you again. This brings us to the end of this
[56:39] training. training. In this two-part training, we had an overview of GDDP. We saw how to access GDDP data and analyze extreme event
[56:51] statistics. statistics. In part one, in overview of GDDP, we saw that it is a statistically downscaled output from multiple CMIP6 models.
[57:03] Data are produced by using two-step methodology, bias correction and spatially segregation, and data are available at quarter degree
[57:12] resolution, special resolution, for four shared socioeconomic pathways shown here. Also, we saw that there are nine variables available at the surface
[57:25] including including minimum, maximum, and average temperatures, temperatures, uh, precipitation, relative and specific humidity, uh, short wave and long wave radiation,
[57:37] uh, and, uh, wind speed. Uh, we also saw that the data are available from multiple locations, um, NASA Center for
[57:46] Climate Simulation, Amazon Web Service, and Google Earth Engine. Uh, we had demonstrations of how to get data from, uh, by using GEE, and we
[57:58] calculated extreme hot and cold and wet and dry event statistics between 2020 and 2100, uh, using GEE. And today, uh,
[58:09] we saw how to calculate ETCCDI indices, um, using, uh, Python Jupyter Notebook code, and also looked at, uh,
[58:18] interactive GTDP dashboard. There is one homework assignment posted today on the training web page. Uh, the homework is due on 17th of October. The
[58:29] answers must be submitted via Google Forms. Forms. In the homework, you will see that there are two exercises. One is based on GEE
[58:38] JavaScript, and the second one based on today's demonstration, and there is a Python, uh, code available, uh, for you
[58:46] to work on. Uh, you will be working on these exercises, and based on that, you will be answering some questions in
[58:53] Google Forms. Certificate of completion will be awarded to those who attend all live webinars, complete the homework
[59:02] assignment by the deadline, and you will receive, uh, certificate via email approximately 2 months after completion of the course.
[59:13] We thank all our guest speakers and trainers for this training, uh, Doctors Bridget Thrasher and Hugo Heoli, uh, also Alexander Gutman and
[59:23] Ashish Bhanta. Thank you all for your presentations and demonstrations. Um their their contact information email addresses are
[59:32] given here. Our set contact information is available here. Our set website with all the training material you can find
[59:40] there and our set YouTube where training recordings will be available. Thank you so much for attending this
[59:50] training and we will go to the question and answer session now. Yes, thank you all very much for
[1:00:05] attending today's session and we thank our guest speakers once again. And we going to we have a few questions.
[1:00:14] So let's address them. We also have some time to work on part two exercise that we will share with you. You It's part of
[1:00:23] your homework but you can start working right now. Um and so let's start with question and answer. So
[1:00:31] first question is why are we using binder? I understand it is a per pre-installed environment but it doesn't
[1:00:41] come with additional compute to my knowledge. So will the binder work on all hardware and are there any other
[1:00:49] dependencies we should be aware of before running the installer binder? >> Uh I can answer that question. So
[1:00:59] So So all the actual compute is running remotely on a cluster that's deployed on Amazon Web Services.
[1:01:07] So you do not need to install the Python packages yourself for today while the binder hub is up.
[1:01:14] I will say access technically does depend on your browser but most modern mainstream browsers should work. >> Okay.
[1:01:26] Um next question is why are there only 10 12 models available? What about the rest of the models? The total 35.
[1:01:35] >> Um I can jump in and answer that. So, 10 to 12 models are available from the
[1:01:40] intake catalog only uh because like it's a part of our ongoing research. research. Uh in the future we are planning to make
[1:01:48] all 35 models available from the catalog itself. But for now uh you might have to rely on uh downloading the data or using
[1:01:56] like Google Earth Engine to like access rest of the models. >> Thank you Ashish. And then next question
[1:02:04] is how do you calculate for other season uh definitions like DJF, MAM, JJA, and SON? So, uh
[1:02:14] I think you did go over it, but you can mention it here. >> Yes, you can. Here is the parameter
[1:02:21] uh you can change in the driver script to calculate ETCCDI. >> Uh you can go back and look at the
[1:02:33] recording of Dr. Lee's presentation. He has He mentions where you can instead of annual if you want to look at
[1:02:41] seasonal data um you will you will see that in the demonstration. demonstration. >> Yes, that's the parameter name the
[1:02:51] season. season. >> So, clarify. Sorry, I'm looking in the chat here. It's I think the question might
[1:02:56] have been clarified to be not just if you're it's just the standard for seasons, but if you want to define an
[1:03:03] arbitrary season. Uh I I think that's what the actual question is. >> Oh, I'm sorry, but currently uh we don't
[1:03:12] provide the options for those customized periods, but uh if you can send me email and I can help you to modify the script.
[1:03:26] >> Great. Thank you. Um question four is how do you use this data for ideological model like the soil
[1:03:33] and water assessment tool? Um Um So, uh I'm just going to what I know about SWAT, I'm just going to uh reply
[1:03:43] to that and you uh any of you can add to this. So, SWAT model input if uh if you
[1:03:48] look at the link here requires temperature, precipitation, humidity, wind speed, surface radiation components. All these are available from
[1:03:58] GDDP CMIP6 models as we saw. So, you can specially and temporally extract this data um and and for the region of your
[1:04:08] interest and then input to SWAT. You'll have to look at the I mean, you have to convert the format uh according
[1:04:15] to what SWAT requires, but data you can download download um either by GEE or from AWS uh
[1:04:24] for your region of interest. Next question is can we access the Jupyter notebook for examples and practice? What do we need to do to
[1:04:36] extend the access to Binder Hub? >> So, if you open the homework and exercise page, you can find the link
[1:04:52] where you provide your name, affiliation, and email address, then we'll issue an account and send an email
[1:05:03] uh with an instruction how to access the Jupyter Hub after this Friday. Friday. And until this coming Friday,
[1:05:14] September 19th, you should be able to continue to use the binder hub. >> Great. Thank you. Question six is, if we
[1:05:26] need to evaluate the model with a local monitoring system, for example, a local model or climate data register, how can
[1:05:34] we integrate without generating an uh oversaturation or bootstrapping? I I Any Any suggestion? I think you You will
[1:05:57] have to download the data, right? To actually quantitatively compare with local data. >> Yes, and also we do provide that script
[1:06:11] you can run on your local computer. It's named as download nextgddp.py, and you download those data. And also,
[1:06:23] once you have those local data to compare with the nextgddp, yeah, then you should be able to compare
[1:06:32] those data. And I could not really understand about uh generating the oversaturation and uh bootstrapping part. And but if you can
[1:06:44] send me an uh email uh with the more detailed uh uh like details, I will uh try to answer
[1:06:51] it. >> Question seven is, why are shapefiles used instead of more modern single file formats like GeoJSON or Parquet? Uh
[1:07:03] shapefiles are fine, but the file management is more effort and if it's only used to clip the data from the model,
[1:07:13] the precision of the coordinates can be low. >> Yeah, thank you for the suggestion. And as you know, the next GDTP data has
[1:07:26] approximately approximately the special resolution of 25 km and I think the shapefile we are providing has a
[1:07:37] a high enough regular resolution to visualize next GDTP CMIP6 and but will yeah, we know that there are other
[1:07:47] options that to subset the data over a region of interest and thank you so much for the suggestion and hopefully that
[1:07:56] it's it's uh uh using our script with this state file doesn't really slow down your workflow workflow and any data analysis
[1:08:08] process. process. >> Right. Thank you. Thank you. Uh question eight is what is the coordinate system of the shapefile and the model? How are
[1:08:17] we ensuring that the right area is extracted? extracted? >> Uh that's why we are plotting and to
[1:08:26] check check if the the data is subset properly over the country of your interest. >> But but this is we we are using any
[1:08:43] particular particular coordinate reference system here or it's it's geographic system, right? >> Yes. >> Yeah. So something like WGS84
[1:08:58] would work. >> Mhm. >> Mhm. Uh question nine is is there a way to pull probabilities from these models
[1:09:07] rather than what I understand to be specific estimates? For example, what is the 1% annual probability extreme event
[1:09:16] for T and PR in the future? So, So, I I guess can um it's it's you need further calculation
[1:09:35] for that or what addition to your script, correct? >> Uh, yes, there's our matrix that we didn't calculate uh
[1:09:45] today and for example, the R99P total is the total precipitation from any precipitation uh uh at above 99%
[1:10:01] of a wet day precipitation. So, those are uh those So, that R99P total should be uh very equivalent to the top 1% uh
[1:10:13] annual precipi- uh extreme precipitation. precipitation. We couldn't include the calculation of those indices today, but you should be
[1:10:24] able to do it offline later in this after this training. >> Great. Um thank you, Keo. Um we have uh some
[1:10:39] time. Uh and you can continue to post your questions in the chat box. Um also, um um since we have time, uh you can work on
[1:10:50] the exercise. If you go to the training page, there is a homework document. And if you um
[1:11:00] scroll down there is part two exercise. So, you can skip other questions for now, but just go to the description um
[1:11:10] of the exercise and you can work on it. And And um because we have uh Dr. Keon and his
[1:11:16] team here, so if if you need any help, you can ask questions. Also, the binder hub is available for next 2 days. Um
[1:11:24] just openly so you can uh start working on it. Um Um and so I I think uh it
[1:11:33] Okay, there's one more question. Are the uh model bias corrected? If so, what is the process for producing bias corrected
[1:11:41] data? >> I can answer that since I'm online. Yes, um as was discussed last week in part one of the training, the uh GDD
[1:11:58] profiles are in fact bias corrected before they are spatially disaggregated to the target grid. >> Great, thank you.
[1:12:11] Um So, uh you we can we are all online still. If you have any more questions, um please keep uh typing them in the
[1:12:23] chat box. In In in the meantime, if you want to access the binder hub and run the scripts, uh
[1:12:32] exercises given in the homework um session homework of part two exercise, you can scroll down to homework. The
[1:12:40] link is available from the training page and we can also uh share um our screen here. Okay. So, um you can see on the screen
[1:12:55] um um part two exercise. So, you can uh work on the exercise. The questions you will be answering via
[1:13:15] Google Form, but it's important that you access Binder Hub now um and uh there's also in uh contact information uh if you
[1:13:25] want access to the Binder Hub after uh 19th of September uh you can send your name and email over there so then um
[1:13:37] Dr. Lee and his team will give you access to to run work with the Binder Hub. So, in the meantime there's also a
[1:13:46] question, which uncertainty is methods are suitable for uncertainty analysis? Perhaps Prachet, you can also um answer to this because I think this is
[1:14:03] about model uncertainty. Right? I I honestly don't know. I believe that would would most likely be dependent on your
[1:14:22] application um you could look at comparing um um the historical I assuming you're you're talking about GDP
[1:14:38] um sorry, where is the question? There we go. Oh, no, that's not it. Um oh, um you could compare them directly to the
[1:14:53] the the the reference data set, which is GMFD, which again is linked in the previous um the part one.
[1:15:04] Training session has all the links to to those data. >> Thank you. So, while you work on the exercise, um
[1:15:27] I just uh want to thank you all for attending this series, and uh you you will receive a survey
[1:15:37] link from ARCSET. Um so, please take a few minutes to complete the survey. Uh this is our end
[1:15:44] of training survey that provides us feedback from you. Um and uh there will be a number of
[1:15:49] questions, so just a few minutes of your time, but it's really valuable to us to get your feedback. So,
[1:15:57] um um you will receive that by email. >> Uh hi Amita. So, there is a question in
[1:16:09] the chat. Um how is this affecting the values when the resolution is changing and is shown in the web app? Uh I can answer that.
[1:16:18] So, So, the resolution uh the changing resolution from the web app, it does not affect the the
[1:16:24] notebooks. notebooks. Uh it is just for quickly viewing the data set from the browser interface interactively, and it depends on a lot
[1:16:32] of factors like uh your screen resolution, uh your internet speed, and so on. But, setting that resolution
[1:16:40] slider to like higher values uh queries for more data and and give you like finer details. But, if you have like low internet
[1:16:48] connection, low bandwidth connection, uh then but still want to run everything interactively, then you might want to
[1:16:54] change the resolution slider to like 15 or 16 or or lower values. That that's how it's working. Uh it's basically like
[1:17:03] progressively fetching the data set uh from the cloud. >> Yes. So, with the different resolution, it doesn't change the value. It's just
[1:17:15] the samples. That's the subset of When you lower the resolution, it is going to automatically subsample the
[1:17:23] values. >> Yes, so you can you can try and and go to the binder hub and try to run at
[1:17:33] least um one script so that you going to get used to it and see that it works and you you
[1:17:40] see the the results there. You can also look at the output statistics. So, based on that, you'll be
[1:17:48] answering the questions. Uh we'll be here for a few more minutes. Um And you can always contact us via email
[1:17:59] if you have additional questions. I I see a question here. I think there is an error in the take screenshot
[1:18:10] button in the dashboard. I'm not able to take the needed screenshot with different model selection. It is downloading the same screenshot
[1:18:23] every time I try to click the button. Can you check uh it check it. I think it saves as PNG on your
[1:18:34] computer, right? Is that right? >> Yes, it should save it as a PNG on your computer. computer. Uh
[1:18:43] Uh There might be a Well, I was not expecting that, but yeah, let me look into that actually.
[1:18:54] >> So, um the question about part one and part two exercises, exercises, uh they're both if you go to the
[1:19:02] homework homework document uh that is shared on the screen, you will see part two for today and above that there is part one
[1:19:10] exercise exercise uh which is part of your homework. It was to run uh Google Earth Engine script. Um
[1:19:17] we didn't have that much time last in during last session, so um it's part of your homework. Uh you'll
[1:19:24] be going through that. You'll be running a script to get dry and wet even frequencies. frequencies. Um it looks like um
[1:19:33] dashboards dashboards screenshot is having an issue, but I guess guess um um uh Okay, there's a question, what is the
[1:19:45] deadline for this these tasks? So, for this homework, this is part of your homework, so you have a month to
[1:19:51] complete. complete. But to be able to use the binder hub, you will have to send a request uh
[1:19:57] unless you use it in next 2 days. Uh it's free for next 2 days. Uh even even
[1:20:02] after that, it's free, but you will have to register uh as a user. So, there's a contact information given to you for
[1:20:09] that. But you have a month to finish homework. So, if you look at the screen right now,
[1:20:25] uh this is contact us. That's where you have to uh just click on the link and send the
[1:20:31] information asked to you. Uh no, the contact is given in in Ashish of KIO. Can you type the contact
[1:20:48] information here? In the chat. For the binder. Okay, Okay, we still have a few more minutes. If you
[1:20:59] have any additional questions, otherwise you can work on the exercise and if you have any problem with that, you can also post
[1:21:08] your questions now about that. There is one question about what does the stats table show in the country
[1:21:20] scale? >> Oh, the stats table shows the the summary statistics of the values that are plotted on the map.
[1:21:45] >> So, is it area averaged over the country? country? >> Uh it's all from the all the values as
[1:21:53] it it plotted. >> So, the follow-up question to the previous one, it's just calculating calculation R5. What about other
[1:22:07] indices? >> Yes, so if you run the first cell, it will list all the files. Then if you change the file,
[1:22:25] it will show Yeah, you can Yes. You can choose another file for another ETCCDI, then then Yep, you can replace that part.
[1:22:39] >> Uh the question where is uh the doc part two exercise questions? So, um um they are part of your homework. Um and
[1:22:49] once you go to Google Form from the website, you will see the questions. There's one more question about I have
[1:22:57] used Oh, hold on. Yes, sorry. It says, "I have used some workflow using GitHub's code space. Can I
[1:23:08] download the given workbooks and work locally with Anaconda?" >> Uh yes. On the main page of the GitHub, you can
[1:23:20] find all of the required Python library to run the script. >> So, we'll be here uh for 15 more minutes
[1:23:32] or so, um and you can continue working on the exercise or post your questions. In the meantime, I want to thank all our
[1:23:40] speakers one more time. Bridget Thresher, um Dr. Keole, um Alex Goodman, Ashish Pantha. Thank you for your contribution uh to this
[1:23:52] training. Also want to thank our R safety team. Um Shawn McCartney, Salvin Hudson-Odoi, Brock Levens, Sara Kashell,
[1:24:00] um Sue Monte, uh Jonathan O'Brien, um Maria Marabito, and Natasha um Justin Griffin. Uh we thank our team for
[1:24:11] helping with this. And as I mentioned, you will be receiving a link uh for a survey, so please take a few
[1:24:22] minutes to complete the survey and provide your feedback to us. So, again, I see a question about
[1:24:29] exercise one, um, um, but you've not missed it. It's part of your homework. We did not have a lot of
[1:24:36] time to work with Google Earth Engine script, but the link will be provided to you in the homework document. So, uh,
[1:24:45] exercise one is there. Uh, you can run the script and answer the questions. So, uh, you you still have a month to
[1:24:53] complete everything, part one and part two exercises and questions. >> Hey, everyone. I just want to, just give
[1:25:03] you a reminder about using BinderHub that's sort of important for the sake of these exercises. So, your session is not permanent or
[1:25:12] persistent, and generating some of the data through these scripts can take an upwards of around 30 minutes. So, I
[1:25:20] highly, highly suggest that after you are done running the scripts to save the data locally, because if you decide to
[1:25:28] leave and come back later, it will not be there. So, yeah, just remember, save all your data.
[1:25:34] Thank you. >> So, there's a question, um, on the AWS S3 bucket. I can see the GEE21G folder,
[1:25:48] but not the ECCDI folder. Is there another location where I have to access to download those files?
[1:25:58] >> So, the AWS S3 bucket provides provides only the original next CDDPCM is fixed data. data. And those ECCDI folder, you can find it
[1:26:16] under shared folder on binderhub, not the AWS. >> Um there's a question um in the chat box. Can I upload manual shape file in
[1:26:51] binderhub? >> Yes, it is possible to upload it. So, if you go to the tool pane on the left
[1:27:01] side, side, just underneath the menu where it says file edit view run kernel etc., there's an up arrow thing. So, navigate to the
[1:27:08] shape file folder, and then uh press the upload button. I think you can also you should be able
[1:27:15] to right click, too, I believe, and you'll see an option to upload. But, again, just want to remind you all as I
[1:27:20] mentioned earlier, all data on binderhub, besides the stuff that's in the shared folder, which is read-only, is temporary. So,
[1:27:28] uh uh just keep that in mind. >> So, um I I have a question to that that
[1:27:36] um um all the shared folder files, will they be there after 19th or they won't be there?
[1:27:46] The netCDF files based on >> Ah sorry, yes, yes. Uh so, so, well, that data is permanent.
[1:27:53] >> Okay, good. >> But, well, but as we mentioned earlier, if we want to have direct access to
[1:27:58] that, you'll need to fill out that form cuz the binderhub link. >> Oh yeah, I know that. That's That's
[1:28:01] right. Okay, great. Thanks. Uh there's a question um about uh running ETCCDIPR indices driver. I received an error in
[1:28:21] computing the indices. Um, that that's a question and I think you need to rerun, right? Reset all
[1:28:32] Reset all Go to kernel, reset all and start again. Try one more time, please. Uh, there's a question What we did in
[1:28:41] BinderHub can we can be done in GEE as well? Um, so for now, the code that we
[1:28:49] have shared in GEE cannot, do the same. ETCCDI is not calculated in there. It just calculates, um, by some threshold,
[1:29:02] uh, it calculates, uh, extreme frequencies. But, one can write code to calculate ETCCDI in JavaScript in GEE. And perhaps, um,
[1:29:14] we we can do that, yes. Um, it's not available now, but it's it it is doable. >> Um, I think I think I heard you talk
[1:29:26] about an error. Was that the person who posted the warning message in the chat about invalid You can just ignore that. You don't
[1:29:35] That's not an actual, uh, error that you need to worry about. >> Thanks, Alister. Um, so there's a question. Yes, if you
[1:29:45] have, um, completed the homework, all the questions, then you can submit and go to the optional exercise, for sure.
[1:29:55] So, on the training page, you will see a Google form link homework. So, there are more questions, not just part two
[1:30:02] exercise, but you go through all of them. them. There are about 11 questions. Um, you will be answering those and that's your
[1:30:10] homework. homework. Yeah, so for the survey for for the binder hub access, yes, all you need is to send your name, affiliation,
[1:30:20] and email. We will be closing the training in a couple of minutes. So, if you have any
[1:30:28] more questions, this is the time to post them on the in the chat box. Otherwise, you can continue working with
[1:30:37] the homework. And we look forward to see you at future RStudio trainings. Thank you so much.
