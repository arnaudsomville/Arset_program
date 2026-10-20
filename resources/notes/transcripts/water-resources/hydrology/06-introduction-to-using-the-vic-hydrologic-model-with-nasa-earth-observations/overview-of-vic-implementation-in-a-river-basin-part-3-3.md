# Overview of VIC Implementation in a River Basin, Part 3/3

`https://www.youtube.com/watch?v=4H-OANBWxfg` · id 315 · 1:40:11 · module 305 — Introduction to Using the VIC Hydrologic Model with NASA Earth Observations

[00:01] Hello everyone. Uh welcome back. This is the third and final session of webinar on introduction to using the VIC model with NASA remote
[00:11] sensing observations. Uh we had uh two webinars already on 15th and 22nd of February. And first in first Kel Market talked
[00:25] about introduction to the VIC hydrological model. He went through all the processes that are involved in the
[00:33] model and um all the parameterizations that are there in the model. So, general layout he also talked about the model
[00:42] itself. itself. Last week we talked about overview of remote sensing based input data for VIC. Uh we went through step-by-step
[00:51] demonstration of how to get forcing data uh from different websites that NASA provides and how to pre-process some of
[01:00] the data. So, today's session will focus on implementing input data that we downloaded uh last week into VIC model.
[01:10] In addition, uh Kel Market is going to walk us through how exactly to reformat inputs so that they are compatible with
[01:19] what VIC requires. Uh he's going to demo some of the scripts that he has developed to do
[01:26] uh the same. And uh What we're going to do is uh Kel is going to show cases of VIC applications
[01:35] in Mekong Basin. And then we are also going to have a couple of slides showing uh results for 2017 flooding in Mekong
[01:45] Basin. Uh this is based on the input data we downloaded last week. So, again, this is the Arset site where
[01:55] you can find course material. Um I'm sure you all have looked at it now. Uh uh All the slides or presentations are
[02:03] available here and after the session, you find recordings also. So, you can go back and review the recording at your
[02:10] convenience. Just to recap, we have a homework posted on the website as well. It It is there
[02:19] today. And it will be due by 16th of March. Um then all those of you who have attended all
[02:28] the webinars and who submits homework through a Google form link, you will receive a certificate of completion in a couple of months after
[02:37] today. today. So, with that, we're going to start with overview of week implementation for river basin and
[02:46] again, the example we have considered is the Mekong River Basin. Uh the idea here is to introduce
[02:53] everyone what is involved in running a hydrologic model. So, actually, this is just gives you a flavor of what is
[03:02] involved starting from downloading model, then downloading inputs, reformatting them, and then running the model and looking at the output. So,
[03:12] this webinar focused more on just giving you information about it. And if you want to download the model and go
[03:21] through the same steps, uh you can go back and look at the presentation slides as well as the recordings and that is a
[03:29] guide for you. You can also contact us for more information if you like. And also, also, uh we if you are interested, we may plan
[03:39] a more advanced training for you, which will be much longer and more involved in which you actually have
[03:48] some hands-on experience in working with input data and downloading downloading model and running it. So, if you are
[03:57] interested, please indicate in the chat box that you would like such a training in future. So, this is just a general outline.
[04:09] We'll Kel, Mark will go through VIC input data formatting, VIC simulation, and output analysis. He will also touch on how to calibrate the
[04:20] model. And then, we will conclude with examples of where VIC is already used for applications. And then, we will
[04:29] summarize today's webinar as well as this webinar series. Thank you. So, Kel, with that, please take over.
[04:42] Thank you, Amita. And hi, everyone. So, now I'm going to walk you through how we take the NASA Earth observations data
[04:50] sets that we downloaded last session, and how we can format them and put them into the VIC model and run the VIC
[04:56] model. model. So, So, we're going to walk through a specific application we have for the Mekong Basin.
[05:04] Basin. So, So, what Amita and I did is we downloaded the same data sets we walked through
[05:10] last week, like I merge and mirror and motor sign cover. cover. We set up the model for a 0.01 degree,
[05:18] sorry, 0.1 degree resolution grid cell. Of course, we used all 16 land cover classes and specified 100 m elevation bands.
[05:30] And so, for um um for this VIC model, we used I merge precipitation and mirror reanalysis meteorological forcing data
[05:40] sets. sets. And so, we plan to use this for some flooding and stream flow monitoring, drought monitoring, or basin management
[05:47] applications. So, we're going to show a specific um um highlight from last year's flooding in Northeast Thailand, and Nita will walk
[05:56] through that later on. So, before we start uh going through the setup of the VIC model, I want to note
[06:02] that the data was uh preprocessed beforehand, and I'm not going to show that because that takes a little bit of
[06:08] time, and we want to make sure that we're getting through the session in our allotted time. So, the data was clipped to the Mekong
[06:15] Basin. What I mean by clipped is we, you know, added the data set to QGIS or ArcGIS, and we used um some extraction
[06:23] tools to make sure that the data was only for the Mekong Basin. Uh we made sure that all the pixels
[06:28] align spatially, and what I mean by that is that for each grid cell, all the pixels um
[06:34] overlay each other perfectly. And then also some additional data set was derived, such as slope from elevation data set and average annual
[06:43] precipitation from climate data sets. Also too, so the model has some uh lookup parameter parameterizations, and so
[06:55] um when we go into the when we're going through the scripts, um I won't show that, but just
[07:00] understand that on the back end uh we're deriving some additional uh parameterizations from these GIS data sets.
[07:09] sets. Okay. So, uh here I wanted to highlight um um that we're using this package or this
[07:16] code code um um that's available freely on GitHub um to do this process. So, when I'm walking
[07:23] through these processes and showing scripts, um they're all from this package, and you can download it uh
[07:28] using the link to the left there. Okay. So, we're going to dive into a video. It'll be about 25 minutes long.
[07:35] Um I will go a bit quickly just to make sure that we're uh staying in with time.
[07:42] Um and by the end we're going to have a VIC model run and look at outputs. Okay. So, here I've downloaded that
[07:52] package that I just showed in the previous slide and now I have my scripts and everything. Right now, what I'm
[07:58] going to do is show you guys how to install the VIC model. So, let's go ahead and start.
[08:03] So, here I'm just showing you the web address of where to download the source code of the VIC model.
[08:13] So, you go here to And this is all the source code and you can also go and open the docs
[08:22] and you can see documentation information. information. So, this too has multiple versions of the model. So, I use the VIC 4.2.D.
[08:34] Um and it also has all that information as well. Down there. Um to download the data, you just click
[08:42] on the green button on the right and download the zip file. So, I've already downloaded this and so
[08:49] I'm going to show you what I have from the downloaded. So, you see here I have my VIC zip file and a folder. So, I'm
[08:56] going to change directories into the folder. folder. And when I list everything it has a bunch of like documentation and samples
[09:06] and the source code and some tools. So, I'm going to move into the source code directory. directory. And if we look at all of the
[09:15] files in here, they're all C files. And there's one particular file that we're interested in, that's a make file.
[09:21] So, to make the model we're just going to type make, m a k e, hit enter, and
[09:26] then everything should start compiling. At the end, we should exit out with no errors. It's nice. And then if we list everything again,
[09:39] on the in the folder, then we see that we now have these object files. And if we scroll up, we now see that we have
[09:46] the VIC executable file. So, that's how you compile the model. We can check that the model model compiled
[09:51] correctly by typing in the command VIC NL - H will give us uh help information, and now we can see
[09:58] that it's compiled, and we can uh pass information into the model. Okay. So, next we're going to show you
[10:10] how to set up the model. So, right now I'm starting off. I have my global parameter file. That's in in
[10:16] the um example folder that the VIC model has. And so, I'm just going to change my directories into where I have my model
[10:25] set up, my scripts, and my data. So, here I'm just changing directories into there. So, I do this all in the terminal via
[10:34] command line on Linux. And so, the CD command is change directory. Now, I'm just passing in the path to
[10:44] that directory. Okay. So, now I'm in my scripts folder that I downloaded from my GitHub repository. repository. So, now I'm just typing in a command
[10:55] using Python. So, my OG pie is a alias for my pipe my Python 2.7 command. And so, now I have this
[11:06] script format snow params .py, and this script formats GIS data into our snow parameter file data. So, I pass in my Macon grid file,
[11:18] which is the grid that I want to create the um the model for. I'm passing in some elevation
[11:26] information, information, and my output snow parameter file path path and the elevation uh interval that I want to create the
[11:38] snow parameter file for. So, I hit enter. And now it's crunching all the data. Give it a few seconds here.
[12:01] It's taking quite a while cuz it's a large basin and the interval's pretty high. high. Okay. So, now it exited out.
[12:09] And so, we saw that we have 21 bands. bands. So, that'll be important later on. So, here I open up my snow band file
[12:19] and I can see my information on the left is the grid cell and then it calculates the fractional cover of each elevation
[12:26] band and the mean height for each elevation band. In a format that VIC needs it. So, there's a bunch of lines of code um
[12:37] that script just handles that all for you. you. Okay. Okay. So, now that I've created that, next I'm
[12:44] going to create my uh soil parameter file. So, there's a nice script there called format {underscore} snow params.
[12:55] And here I'm passing in a lot of information. So, I have to pass in my grid file
[13:02] which is the grids that I'm trying to create the model for. I have to pass in elevation data.
[13:18] Or sorry, so uh soil majority data. So, this are These are the soil classes from the Harmonized World Soil Database.
[13:27] Next I'm passing in my elevation data. And then annual precipitation for our initial soil moisture conditions to
[13:37] parameterize the initial soil moisture conditions. And lastly, the slope information for each grid cell. So, these are all in GeoTIFF format.
[13:58] And so, what the script is doing, much like the format snow params, it's taking GeoTIFF information and then converting
[14:04] it into a format that the VIC model can read. So, lastly, I need to uh uh define my output path.
[14:19] So, So, writing the file to the snow.param file. And I hit enter, and it crunches the data, and now we have a
[14:32] soil param file. So, if we open that up, now we see that there's a bunch of information. We have
[14:39] our grid cell information, our latitude longitude information, and our parameterizations for the soil files. And so, this is all this information is
[14:55] either used from lookup tables, which are included into in that Git repository I showed earlier, and then also some
[15:05] initial parameterization and guessing. So, next, um we need to create our vegetation uh uh parameter file. And so, here, again, have a script for
[15:19] that. So, here we're inputting in our grid file again. So if you notice we always enter in this grid file
[15:27] and then that's to make sure that all of the um cells align spatially. Next I'm putting in my land cover
[15:34] classification file. Here I used that MODIS um IGBP file. Now I am outputting my vegetation parameter file
[15:45] and then specifying that land cover classification. classification. All right. So that ran pretty quickly. So now I have my vegetation parameter
[15:52] file and I have my grid cell uh with information on number of land cover classes, the land cover class uh name or
[16:00] code, percent area coverage and also rooting depth information for each grid cell. Again, the VIC model takes these
[16:10] specific uh setups or these specific uh formats for files. So all we're doing here is just taking GIS data and
[16:17] converting it into that. Next I am creating my vegetation library file, which is a lookup table for all
[16:27] the for more vegetation parameterizations. parameterizations. And so here I am inputting in my land cover data. And so I'm grabbing
[16:36] this parameterization for each land cover data. I have to specify my monthly LAI. So I have uh 12 bands of LAI data.
[16:45] And same with albedo. So I'm putting in that entire folder. And now I am specifying the output file and the land cover
[16:55] classification. So that way I can keep all the land cover classes the same that are in my vegetation parameter.
[17:01] Okay. Okay. Runs pretty quickly. And so now we see in my folder I have my vegetation library,
[17:10] which has my class number, uh parameterizations, LAI information. Um and if we scroll over it has Yes, so there are my land cover classes.
[17:20] If we scroll over, it has all the um, additional information and also some comments of what are the land cover
[17:26] classes. classes. Okay. Okay. So, now I've created uh my primer parameter files. Now I need to go and
[17:34] create my meteorological forcing files. So, this is a somewhat specialized script. Um, you may have to update this
[17:43] for your own uh needs. So, what we're doing here is where again specifying that grid that we're uh creating the
[17:51] files for. And then I am specifying a file path that contains my meteorological data in that CDF. And so,
[18:01] this is where um you need to update the file to actually read in and uh extract out that uh meteorological information
[18:12] that you need. So, just passing in my file uh path to my forcing data, my raw forcing data,
[18:23] and then specifying my output path to to the the um um forcing files that we want. And then also passing a
[18:34] time period. So, here the data is from 1980 to 2010. So, I hit enter. It actually takes a
[18:40] really long time to run. Uh maybe on the order of a couple hours to a day depending on your time series.
[18:46] But, here we see that for that grid cell we have our precipitation, uh maximum maximum minimum temperature, and wind speed.
[18:55] And so, it creates a time series. So, each line is a time step, and then we'll create multiple files for each grid
[19:01] cell. cell. Okay. Okay. So, whenever So, I'm going to skip forward. That's going to take some time
[19:08] to run. So, I'm going to skip forward. And next we're going to move on to actually running the model.
[19:14] So we're going to open up the global parameters file and here's where we specify our start year, end year, and
[19:19] some additional information. So I'm going to change the start year and end year to make sure we're doing quick
[19:24] model run, but you can specify all these different parameters. It has a lot. Typically you might want
[19:30] to leave those as true at least initially and then you can specify those later on or tweak those later on.
[19:38] Here I um input in the um file path to my forcing files. Um and then also my file path to my
[19:47] parameters. So these are the land surface files and parameter section. So for soil profile and this is all
[19:54] relative to the VIC model executable. executable. So I put my VIC model executable in a folder just above examples or example.
[20:04] And so here I am changing my file path to read in the files and then some parameterizations.
[20:11] parameterizations. And so remember here my snow bands, I had 21 snow bands in the file. So here I specify the number of snow
[20:17] bands as well. And also how the VIC model reads specific things like where the vegetation LAI and albedo are coming
[20:26] from. And so I put those in the vegetation library file and so I set that. that. Lastly we're setting our
[20:36] output path to our flux file. So these are the outputs of the VIC model. And then we can also specify which
[20:43] outputs we want here. I'm using precipitation, evapotranspiration, runoff, base flow, snow water equivalent, soil moisture, and for
[20:51] example I'm adding in a last variable, surface temperature. So once that's done, I hit save and now
[20:59] I go to my terminal and I'm going to run the model. So I do that dot forward
[21:04] slash VIC capital N lower case L dash G and the path to my global parameter file. file. So, the global parameter file controls
[21:14] all the paths to the other parameter files in the VIC model and we hit enter and we see now that the model's running.
[21:21] So, again, this may take a little bit of time time depending on the length of the um
[21:28] model simulation and also number of cells that you're running, but we could see here in my outputs
[21:34] that it's starting to populate these fluxes. So, this is a time series for each each um um for each grid cell.
[21:43] So, I fast-forwarded. My model's done now, so I'm going to open up this file. file. So, the outputs are actually a time
[21:50] series again, so it has a um year, month, date and then all the parameters that I output, which is the
[21:56] precipitation, evapotranspiration, and so on. So, this doesn't bode well for usability. So, now we're going to actually
[22:05] actually uh change how we're formatting the output fluxes. We're going to convert this into a netCDF. And I have a script called flux netCDF.
[22:15] And so, we enter in the output file where the fluxes are, output flux files are. And then we specify output file or
[22:24] output folder for the netCDF data. And then we hit enter. And it'll prompt us. So, now we select
[22:32] what what uh variable we want. So, I'm going to choose evapotranspiration. Enter the start year, which was 2008,
[22:40] end year 2010. And then I hit enter and it'll uh read in all of the time series
[22:47] information in the fluxes files. And then um extract out the evapotranspiration. And again, this is a netCDF.
[22:57] So, we have to have a little bit of special software to read it in. So, I'm going to show you guys
[23:03] um um you know, using Panoply the outputs of uh VIC model. So, So, just need to open up a new terminal here
[23:15] and and change my directory to where I have uh Panoply. Panoply. Um Um Oops, forgot a little bit where it was,
[23:25] so here I'm just trying to find it again. So, I need to go into Panoply J and
[23:32] Oh, Oh, wrong file again. Okay. So, it's panoply.sh. And so, now I'm running Panoply. And And Okay, now I'm changing my directory to
[23:45] read in the output evapotranspiration netCDF data. So, I just changed my directory there. Okay. Okay. Example, my netCDF and then evap2008.
[24:02] So, I could create a simple plot, which are my last lawns. And there we go. So, we could see that's
[24:08] where the Mekong Basin is. So, I'm going to zoom in there uh to explore the data a little bit.
[24:15] Um Um it looks like we have some negative evapotranspiration. evapotranspiration. Uh you can get negative evapotranspiration using Penman-Monteith
[24:24] equation. So, we're just going to force that to be zero. Um And so, now let's look at some of the
[24:30] time series. So, just stepping through. So, this is total evaporation at each time step in millimeters per
[24:39] day. day. And we can see now that we have outputs from the VIC model. Okay. Okay. So, now that we have outputs from the
[24:50] VIC model, now let's use them. So, I'm going to just clear this out and end that. Now, we want to get stream flow.
[24:59] So, I went ahead and fast-forwarded and created our runoff and base flow net CDF data. data. And now we have uh a route vic.py
[25:09] program which takes inputs and creates and turns the runoff into or the runoff and base flow into
[25:18] stream flow. And so, here I'm inputting in a unit hydrograph file and I'll talk about that in a little bit.
[25:25] Um what that is. And I'm specifying my fraction of each grid cell. So, I have a geotiff that's
[25:33] specifying fraction of each grid cell that contributes to that outlet. And I have a specific station in the
[25:42] Mekong that I'm running this for. And now I pass in my runoff and base flow flow data.
[25:54] So, there's the path to the runoff file. And now I'm specifying the path to the base flow file.
[26:10] And now I'm specifying my output file. So, it outputs a CSV, comma separated um comma separated file.
[26:29] And so, I'm specifying my start year and my end year. So, I actually ran the simulations again and did it from 1980
[26:37] to 2010. So, now I'm running this um um model or uh routing stream flow for 1980 to 1990.
[26:50] And I'm outputting daily data. Oops. Oops. I messed up the time. There. There. Uh I just need to change this to
[27:03] 12:31. Okay. So, I'm going to fast forward cuz this takes a couple minutes to run. Uh next Well, I want to show you the
[27:13] unit hydrograph file. So, that's important component of the routing model. model. Uh unit hydrograph is a normalized
[27:20] stream flow, and so VIC takes in monthly normalized stream flow as the unit hydrograph. So, we have our
[27:26] month, and then we have a normalized stream flow. So, divided by the sum of the monthly data, and we get the sum of
[27:35] that should be one. So, that's going to run a little bit. I'm going to fast forward here.
[27:45] Okay. So, it should be outputting a file soon soon to our example output folder. folder. Okay. There we go. So, now it's run
[28:00] successfully. So, if I open this up, now I see I have a time series of discharge. So, I'm going to plot this time series
[28:08] to show you a little bit. So, we got quite a few questions about model spin-up, and this will illustrate some
[28:14] model spin-up. So, remember I did my simulations from 1980. And so, we can see here in our
[28:22] model outputs that our year for 1980, which are over here, are really wrong. So, we have that large spike, and then
[28:29] some um variations in 1980. Oh. And that's because the model uh wasn't stabilized. And so, now I'm going
[28:39] to start the stream flow from 1981 to illustrate. I'm just grabbing this data here. So, I'm going to start, I'm going to plot
[28:48] the results from 1981 to illustrate how after 1 year the model stabilizes. And we can actually get results.
[29:03] Oops, went a little too far. Okay. So, I'm just plotting these results here. Okay. So, now that's as expected.
[29:20] It looks much cleaner than a large spike. spike. Okay. Okay. So, that was a quick 20-minute introduction on how to
[29:28] set up the VIC model. Again, we had a lot of data preprocessed to enable this. Um and
[29:39] and by doing this, uh by pre-processing and using those scripts, we can then effectively effectively um um set up the model quickly and get
[29:49] results. Okay, so now we have a VIC model that has run successfully uh for the Mekong Basin. Um and so, here
[30:01] we're going to um talk about some calibration processes. So, calibration is a process of programmatically setting up and
[30:09] iterating over the model, and we do this to really find the best uh parameters for for uh our basin, so that way we can
[30:20] accurately simulate the um um um the basin's observations. Um so, typically we apply an optimization algorithm until our best
[30:30] parameters are found. And when we're calibrating, it's necessary to have an independent record of calibration and validation. So, what I mean by
[30:38] calibration is you're using a data set to fit the model. And for validation, we're using a independent data set that we didn't
[30:45] touch to actually check if our calibration was successful or not. Uh so, we typically So, what I typically
[30:53] do save uh about half the observations of time series um or you know, at least five years um
[31:01] to use for calibration. And so, what we're doing here is um I'm going to show a cascading basin
[31:10] approach. approach. And so, what we're doing is we're calibrating for each individual sub-basin. So, we here see here we have
[31:16] a sub-basin and the gauges. And so, we're calibrating all the parameters for each grid cell that contribute to that one uh gauge. And
[31:25] then we're stepping through, we're saving this calibration for uh the first uh sub-basin. And we're step- stepping to the next
[31:32] sub-basin and calibrating those parameters and so on. And so, you could see here I put an example calibration plot.
[31:39] Um so, you see here that for the the first basin um and and um um the Mekong,
[31:48] we can uh more accurately predict the low flow period in the Mekong basin. So, this red line here is uncalibrated and
[31:57] the blue line is calibrated. And so, when we're uncalibrated, we're actually having um too much base flow in the dry
[32:03] season. And so, by calibrating the model, we can um account for that for those errors. Okay, so next we're going to show a
[32:11] video um that will quickly step through the calibration process. Um Um and so, this was a pre-setup case again.
[32:21] And And uh for the for the calibration process, it actually takes quite a while depending on the
[32:30] power of your computer. Uh for example, for me to calibrate the entire Mekong basin, it took me about a
[32:36] week to a week and a half uh on my computer and I just have a regular desktop laptop. So just be aware
[32:43] that that is a limitation, it's time. And so and the reason why it takes so much time is because it keeps on setting
[32:51] up the model, running the model, checking the outputs and then finding those best parameters. And so just understand that it takes a while if
[33:00] you're going to do it on your laptop. It would be a whole lot more efficient if you load it up on a server or a cluster
[33:06] and do the calibration process there. Okay, so here we're going to walk through a little bit of the calibration
[33:13] process. This is a little bit more in-depth cuz it takes quite a bit of programming and finagling of the data to
[33:22] get it to get it all set up. So the calibration process is really programmatically setting up the model so that way it can
[33:31] iteratively iteratively create these parameter files like we showed earlier. And then chain and tweak those parameters within this parameter files
[33:40] and then get the results and compare that with observed data and then retweak those parameters. So here
[33:52] we have a script which is our calibrate VIC example. example. Basically the whole idea is we have our
[34:01] VIC model, we run the VIC model. So here we have paths into all the parameter files. files. We have our output flux files.
[34:11] Um Um our our variables for the routing file. And so here we're basically creating the soil parameter file
[34:23] iteratively iteratively and then running the VIC model. So you see here that VIC and now G and
[34:29] then passing in that global parameter file. And then routing the VIC model using this function here and then returning the data.
[34:40] So here I'm using a uh package called Spot Pi. Uh it's a really good package for calibrations if you guys are interested.
[34:49] Uh highly suggest it. And so we specify our start and end date and then which parameters to calibrate. So I'm
[34:57] calibrating my infiltration curve, my um fraction of maximum uh soil water where non-linear base flow occurs, um my fraction of maximum base flow
[35:13] where non-linear base flow occurs, and then my two uh soil depths. My two lower soil depths. Okay. Uh so this script just basically
[35:24] iteratively goes through um it estimates the parameters and then iteratively runs the model and then outputs results.
[35:33] Okay. So let's see this in action. So I'm going to use uh my terminal again to run the programs. So I have my Python
[35:41] call. call. So I'm going to do I do Python cali great vic Oops. example example Uh for this particular instance, I have
[35:55] to specify my station name and the number of iterations. So I'm just going to put 10 for example.
[36:03] Theoretically, you want to put maybe 5,000 to 10,000 iterations for it to actually run uh and get the best parameters. And that
[36:13] can take weeks to run uh depending on your machine. So I'm just going to hit 10 so that way we can
[36:20] get an example of running it. So right now our algorithm is starting with 10 repetitions. Um and so it's going to set up the model
[36:31] and then rerun the model and then output some results. And then so the end results of this will actually
[36:39] be a CSV and it will give you a parameter set and a objective function like root mean
[36:46] square error or Nash-Sutcliffe uh how it how that parameter set compared to the observation data set. And then you use the
[36:56] um um use the objective functions so you find which parameter set fit best and then you just pass those parameters or you
[37:04] create your soil parameter file with those parameters. So here I wanted to highlight some example streamflow and flood monitoring
[37:16] outputs that we can get from VIC. Um so this was using that pre-setup case that I showed earlier. Um so we have uh
[37:24] routed VIC outputs um to simulate discharge and you can see here that we're getting a hydrograph on the right
[37:31] and then uh runoff on the uh above the hydrograph. And you can see that there was like a big wave of runoff
[37:38] that was simulated uh based on precipitation precipitation and you can see this red line here. Yellow line means warning, red line
[37:45] means flood. Um that we're actually getting flood um levels at that red dot. The gauge at that red dot.
[37:54] And so this is highlighting uh flooding in uh 2007 where heavy rainfall in early August we'll see it coming up here soon
[38:02] um um created flood level discharge. And so there's the runoff and then the flood peak. Okay. Next we're going to talk about
[38:15] some drought monitoring applications. Um so VIC is used um in quite a few drought monitoring, um, um, frameworks and, um, the flexible
[38:27] outputs of VIC. So, we saw earlier that we can change which outputs we want to get out. Um, and so, like soil moisture
[38:34] or, um, evapotranspiration, all of that can be used for drought monitoring. And so, here we can see that there's like
[38:41] moderate or severe drought or red, uh, colors mean that's more drought conditions conditions uh, throughout the Mekong Basin and this
[38:49] was during the dry season um, after El Nino event, which in the Mekong Basin creates drought or heavy
[38:55] drought conditions. Um, and so, we can extract out, uh, point in time and get a time series of
[39:02] droughts. And where typically we see here here in the dry season that it's just picking up droughts and that's because it's
[39:11] there's no precipitation during that time. Okay, lastly I want to talk about some, uh, VIC applications for basin
[39:19] management. management. And so, what I mean by basin management is that we use a hydrologic model and
[39:26] some, uh, additional, uh, scenario information and we use that to create scenarios, uh, like what if scenarios
[39:34] for a basin uh, to understand if you implement this policy or change this kind of, uh, area in the basin, what's going to
[39:43] happen. And so, um, what we did here was we, uh, simulated hydrologic changes for different changes in, uh, land cover.
[39:54] Um, in the lower Mekong Basin. So, this figure on the left here shows a increase in forest by 10%. So,
[40:02] for the entire basin, um, areas or, uh, the entire forest area will increase by 10% and we can see the,
[40:10] uh, changes um, uh, spatially throughout the basin. So, here we're getting a lot of storage occurring in the lower parts of the
[40:18] basin, and we're also increasing evapotranspiration. evapotranspiration. And then on the right here is increases in agriculture area.
[40:25] And so here we can see that there's decreases in storage and decreases in evapotranspiration because there's less
[40:32] leaf area. And so um um this kind of information can be used uh just to understand what's going to
[40:41] happen happen um um with these with these small changes. And also we see changes in discharge too
[40:47] where forest area is decreasing discharge, agriculture area is increasing discharge. Okay. So next I want to hand it off to
[40:58] Amida. So she's going to talk about some specific uh VIC applications that are used uh more widely. So I was talking
[41:05] about um applications that you can use for your uh for your setup where you can customize it and um look at different
[41:15] outputs, and Amida is going to talk about some just general VIC applications that are used in the community.
[41:24] Okay. Okay. Thank you so much, Kel. Um I think it was very informative uh just to walk
[41:30] through all the steps that are required to to prepare for VIC in uh running and also how to run it and
[41:38] then finally how to calibrate it. So as you can see um it is a time-consuming process, but then any
[41:46] modeling is and especially as important as hydrology is, um it is justifiable that um it requires a little bit of
[41:56] effort. So with that um we here are some examples of VIC applications. And before actually we start uh talking
[42:05] about how VIC is used in the community, I want to show here um some preliminary results of what we show what we did last
[42:13] week. We downloaded 2017 uh input data as you remember, we started in 2016 January 1st because we needed 1 year of
[42:25] spin-up time and finally we ran the VIC model for starting in January 2016 all the way to September 2017 because we
[42:35] wanted to study July-August flooding event in um Mekong Basin. So, on top left you can see here this is the I merge rainfall
[42:46] time series. This is uh basin average uh rainfall. But, and what you can see here is that in in in July end of July, this
[42:56] is 24th of July, there was a spike in in uh there was heavy rain and then it
[43:01] continued uh there are there were several uh rain episodes and this is 1 month accumulated rain over the basin
[43:10] and you can see in this area there was a lot of rain during that month and VIC
[43:18] model we ran with meteorological forcing for this period and what we see here is the runoff produced by the model at this
[43:26] particular location uh 103° east and 17.4° 17.4° uh north and you can see that following that rain spike VIC captured
[43:38] uh uh increase in runoff um and this is the base flow map uh and runoff map just a
[43:45] snapshot for 26th of July and if you looked at the time series or animation of this base flow and runoff, uh you
[43:53] would see how flood evolved in this region. Um and so, this is preliminary results. Now, we are calibrating this
[44:01] model and then we will be doing some more analysis, but this is just to show you that um
[44:07] what we got from the inputs we downloaded last week. So, we're going to now switch to how VIC
[44:14] is used by the community. And one such applications is for global flood monitoring. Here is a web tool based on
[44:23] VIC. It is global flood monitoring system or GFMS. And here's the website that you can look at in detail. But this
[44:32] uses VIC model. And input is from near real-time trim or tropical rainfall measuring mission multi-satellite precipitation analysis, which is called
[44:41] TMPA. TMPA. Some of you already indicated earlier that you have used trim data. And even now, although trim is not there, trim
[44:52] calibration is used to uh uh to access other satellites available currently. And then this near real-time analysis continues until this will be
[45:03] taken over by I-MERGE. TPMI merge very soon. soon. All other meteorological forcings are obtained from mirror analysis. And there
[45:12] is a routing model used which was developed at University of Maryland. It's called Maryland dominant river tracing or routing or DRTR model. Here
[45:22] are some of the references. And when you go to this website, you get near real-time flood detection or intensity.
[45:30] So, all the rivers where there is stream flow that exceeds flood level that's been indicated. Some more analysis is available also.
[45:40] And here's a case of earlier this year, there was a flood in Paraguay river in January 25th, 26th. You can see here it
[45:50] shows flood detection intensity about threshold. It was above by about 100 to 200 mm in this area. You can blow this
[46:00] up, zoom into this map and see how exactly which area had a lot of overflowing flood. And then
[46:10] you can pick any particular pixel and see how flood intensity change. You can also look at stream flow how it
[46:18] change. So there's a lot of information based on VIC in which trim and MERRA were used as
[46:25] inputs. So again, this is a a overview of the same thing that it's a Paraguay River flood forecast. So this
[46:38] Now Now MERRA, we talked about Goddard Earth Observing System or GEOS. This has been used used for forecasting. So MERRA is
[46:50] analysis, so it is near real time. So near real time flooding uses MERRA as forcing, but for forecast GEOS forecast
[46:59] is used and it VIC gets forcing from this forecast. And based on that, about 4 to 5 day flood forecasting is done by
[47:08] GFMS. So again, this is a very useful tool that is based on VIC and it has been used for flood
[47:16] management in a variety of regions and areas. One more application is for water resources management at continental
[47:26] scale. scale. And here is a system it's called Global Land Data Assimilation System, the North American Land Data Assimilation System, and
[47:37] Famine Early Warning System Network Land Data Assimilation System. So it's FEWS NET. NET. ELDAS it's called. These
[47:49] systems, they are gridded forcing from a variety of sources such as MODIS, NOAA sensor, there's land cover FAO
[48:00] that we talked about. Uh uh MERRA-2 again is used. So, a number of inputs are given to these systems,
[48:09] and VIC is coupled, so that's uh used in a land surface model, and that provides um fluxes based on water and energy
[48:20] balance. And so, this is widely used for water resources management because it provides consistently derived uh water
[48:29] resource components, fresh water components such as precipitation, evapotranspiration, runoff, soil moisture. So, uh as Kel showed earlier,
[48:39] uh looking at like a basin scale, you can look at different uh some of these components and can
[48:46] decide decide uh how to how where the water excesses or where more availability or depletion of fresh water is. And one such example
[48:56] is I'm showing is this Fews Net. This is the FLDAS uh site, and this is you can go here,
[49:05] and there's a lot of information for different regions. Here's this one example for Southern Africa. And one
[49:11] parameter that I'm showing here is monthly soil moisture in 10 to 40 cm depth. Uh and what you see from FLDAS is
[49:21] uh the This is the actually soil moisture. This is in September 2017. And here, you can see that there was
[49:29] deficit. This is the anomaly or departure from long-term mean. So, you can see that there was depletion of soil
[49:36] moisture, there was deficit, and that uh this is the percent change in soil moisture. And so, this information is
[49:43] used to uh give warning about food security. So, if you go to Fews Net site, you would
[49:50] see that how hydrologic information derived from models such as VIC can be used look at different water components
[49:59] and then link it to food security in different regions. At this specifically Fews Net works in Africa.
[50:09] Um then there's one more uh web tool. It's called Princeton Global Flood and Drought Monitor. Um sometimes you may
[50:18] have data lagging this in the sense it may not be near real time, but this is also based on trim TMPA and it did I VIC
[50:28] derived streamflow. It's displayed and you can you have on on left hand side if you go there you will you can pick
[50:36] temporal and special domain and zoom in and look at what kind of stream flow that you observe. So this is also um a
[50:45] tool that provides information using VIC and remote sensing data. Lastly, uh this is a uh report that you
[50:55] can look at for example, it's um again for for uh water resources management and VIC has been used by US Bureau of
[51:03] Reclamation to manage Colorado River Basin water supply. Uh if you will go through the report and you can see that
[51:10] this was this is in 2011. So VIC has been used uh it was developed in 1994, uh got mature over the years and been
[51:20] routinely used by uh many uh entities and and US Bureau of Reclamation used uh earlier to to do uh basin management in
[51:30] Colorado River. So this these plots basically just show a validation of VIC. So what one can do is you run the VIC
[51:40] model for your own river basin and validate it uh calibrate it with certain um um in situ observations such as if you have
[51:49] stream gauge, then you can uh calibrate it and then you can also validate it. And once you do that, you know the error
[51:58] bar over um what VIC produces in your region, and then you can consistently interpret uh VIC output for your own river basin. So
[52:09] again, it it is it it requires a little bit of work, but VIC is mature enough that it has been used by uh many
[52:18] uh entities. So, these are some of the applications, and this brings us to the end of this
[52:25] webinar. webinar. We had three sessions, so I want to summarize what we just saw in last 3
[52:32] weeks including today. So VIC summary is that it's an open-source grid-based hydrologic model. Uh we've talked about all the websites
[52:42] where you can download the model. The model code is written in C language, and it is tested on computer which are
[52:50] Unix and Linux uh operating system. So on Windows or Mac, if you want to run this model, you have to have a virtual
[52:59] machine. So you have to install a virtual machine which can um which is basically Linux-based, and then you can
[53:07] run VIC model on your on your desktop if you have. Um it can be set up to run at grid
[53:14] resolution ranging from 3 km to about 2 degree. That's where it is quite accurate. accurate. It requires daily input for water
[53:23] balance mode as we talked about um earlier. And if you want to use energy balance mode, then you have to have
[53:30] sub-daily or uh like 3-hourly or 6-hourly 1-hourly data uh should be used. And there is a routing scheme that
[53:39] is required um um to actually look at um where you use VIC simulation um along with some additional information to
[53:49] actually route the runoff and see where the stream flow is increasing. And um very important to keep in mind is that it requires
[53:59] regional calibration and validation before you actually use it for any decision-making. It's good to know how well it works in your river basin or
[54:07] watershed. watershed. We talked about inputs and outputs in in great detail in last week's and today's uh webinar. And what's important to know
[54:18] is that um NASA provides remote sensing-based input data. We earlier we saw what what is required. And then here is a list of
[54:28] parameters that we can actually get from remote sensing uh meteorological forcing. Uh you have vegetation cover, um albedo, surface albedo, initial soil
[54:39] moisture condition that can be derived from precipitation climatology, soil characteristic data, elevation. These things you need as input. And many most
[54:48] of them are available from remote sensing. And output again is all the freshwater components that you can
[54:55] analyze to to to either do your basin management, you can get idea of whether there is data I mean water excess, there
[55:06] is flooding situation, or there is water deficit. deficit. Uh not only you can see it evolution with time, but in different uh special
[55:15] region in within different parts of basin how water balance is changing depending on how land cover is changing
[55:22] as Cal showed earlier in example, whether it's agricultural land, or it's forest land, or it's urban area, how
[55:29] things are changing with changing land cover, and meteorological forcing uh that um you can use for uh management
[55:38] what resources management. What is important is that you re- quire quire um input data and you have to format it
[55:50] in specific way. So, that's a time-consuming process. So, model downloading and installing it's relatively easy. Model is already
[56:01] developed, but to create input in specific format, gathering it from different sources and feeding into the model, that's a time-consuming process.
[56:12] At the same time, analyzing output, then calibrating it and routing it, uh that also is so pre-processing and
[56:21] post-processing both are extremely important. Although, the most difficult part, which is model development and and and validation, too. They are done, we
[56:33] still need um lot of effort and training and understanding of how inputs and outputs can be handled. So, that's
[56:41] that's the message we wanted to give here. Here is the summary of all the input data sources that we used.
[56:48] Uh Uh where you don't have ground-based data, uh remote sensing data can be really valuable where you you can actually use
[56:58] them to run hydrologic model. If you have very sparse um in situ data, you can use them for
[57:06] calibration and validation and use remote sensing data as input. So, here is the summary of all the forcing data
[57:13] and other parameters that we used and sources and the websites where we got the data they are summarized here for
[57:21] your information. So, at later time, if you want to uh grab the data for your own uh river
[57:28] basin or any watershed, you can go ahead and do that. And then we also reviewed uh how VIC is
[57:37] used for water resources applications, especially basin management and flood monitoring flood and drought conditions. Okay, so this is the end of the This
[57:47] brings us to the end of end of this webinar, and we want to thank you all for attending this series.
[57:54] I also want to thank Keil Margaret for giving this webinar. He has used VIC model for Mekong Basin, and as we saw um
[58:05] he has developed scripts and procedure to streamline how to put input and how to analyze output. So that's a great
[58:14] help Keil, and we really want to thank you on behalf of our set team for giving us this information.
[58:21] Uh also I want to thank Prof. Levins for organizing this webinar, and Elizabeth Hook. She has uh edited
[58:30] all the presentations, and also helps with our question answer session. So again, on behalf of uh the RC team, we
[58:38] thank you for being part of this webinar series. And if you have any questions, please as usual uh type in the chat box,
[58:46] and we will try to answer them um now, or if you have any at a later date,
[58:53] please uh send us by email. Uh again, the homework link is given on our website, and please submit the homework
[59:00] by 16th of March. Uh you will be awarded a certificate of completion um if you attended all three webinars live, and
[59:09] you also submit the homework by 16th of March, then in a couple of months you should receive a certificate by email.
[59:16] So thanks again, and uh we can take your questions now. And Keil, if you want to add anything,
[59:22] please do. Hi everyone, I just want to say uh thank you for your time and attention and
[59:32] thank you to the our set team for allowing me to uh come and you know present on this
[59:37] work and help make uh make hydrologic modeling more open. And uh yeah, I hope I hope everyone is
[59:48] able to follow up and use the VIC model. Um if you do, I'd be happy to hear how
[59:53] you're using it. Um and if you have any questions, feel free to contact me. Thanks again. So, question one, does the VIC model
[1:00:08] work on hourly time scales? Um Um the answer is yes. So, the VIC model uh will be able to simulate
[1:00:17] um any kind of step or time step less than one day. So, the maximum or the minimum time step
[1:00:26] you have to have is daily data. Um any kind of data after that, uh the VIC model will be able to run.
[1:00:33] As long as you specify what time step that is. Okay, so question two, how can we analyze for changes in terms of time
[1:00:46] series? series? So, um there's a lot of research that has been conducted looking at time series analyses.
[1:00:56] analyses. Um it really depends on how you want to or what kind of information you're trying to get from
[1:01:04] your analysis. If you're looking at say long-term changes, then maybe just looking at your percent change uh
[1:01:13] from a climatology would suffice. Or if you want to look at trends, so you can use your time series to calculate uh
[1:01:22] like the change per year or something or change per time step. So, it really depends on your analysis, but I would
[1:01:29] suggest um you know, taking getting an idea of what you want to and then uh searching literature
[1:01:42] for what other people have done. So, also if you just quickly want to view the time evolution, you can use the
[1:01:50] N Apply tool that um Brock mentioned and uh you can that's very easy to um um install on your computer
[1:02:01] for analysis. Okay, question three. Are Python scripts used in the pre-processing public or custom-made? Um the answer is both. So, um
[1:02:20] I created these scripts as part of my graduate research uh to make the modeling or the model
[1:02:26] setup a lot easier uh at least from my perspective. And so, um so, in that case, they're
[1:02:34] custom-made, but what I've done is I made these publicly available for everyone to use. So, um I did send a
[1:02:42] script into the chat or a a link in the chat box to where you can download that.
[1:02:47] Uh Uh the link is also in the PowerPoint presentation. presentation. Um Um so, yeah, you can go on there, download
[1:02:53] the scripts. Uh some of the scripts are uh custom towards the model setup that uh we had, uh specifically the
[1:03:00] meteorological forcing um creation. creation. But, um you are able to you know, if you have any trouble, please let me know and um
[1:03:11] I'd like to hear feedback so that way I can make it uh better and fix any issues
[1:03:16] that that um come up. Okay, question four here. What initial parameters are you guessing about? Um there's actually quite a bit. So,
[1:03:37] the soil parameters that we initially guess about are the infiltration curve, the the maximum or the fraction of maximum soil
[1:03:48] moisture where non-linear base flow occurs. We also guess the fraction of maximum base flow where non-linear uh base flow occurs.
[1:04:01] And we also um we also estimate or uh I guess guess about um some parameterizations for each
[1:04:10] land cover, uh such as your stomatal resistance, which is important for evapotranspiration evapotranspiration um calculations. And also um
[1:04:23] some other parameters that go into that like minimum um minimum solar radiation before evapotranspiration occurs. So, there's
[1:04:31] all these that kind of get guessed, but there are um published research that have these parameterizations, and
[1:04:39] that's what we're taking. And so, if you have um specific local data for that information, then it'd be best to insert
[1:04:46] that into the model. Okay, so question five here. Um does it take days to run the weather
[1:05:01] time series? So, I'm assuming this is talking about the creation of the meteorological forcings. Um in some cases, yes.
[1:05:10] So, um what the script is actually doing is it's looping through the entire, um, um, model grid that you have set up
[1:05:21] and then it loops through the entire time series. So, if you have a very large basin and you're
[1:05:28] modeling a very long time series, then this script can take quite a while. And again, these these models aren't
[1:05:36] meant to be, um, very So, the the the setup on the models are are somewhat time consuming. And so,
[1:05:44] once you have the model set up at least for the meteorological forcing side then it becomes quite easy to adjust the
[1:05:52] parameters, but the meteorological forcings are somewhat of static information and, um, at least if you're doing hindcast
[1:06:04] thing. in your old time sense and you want to just append new data to it then the script actually runs quite
[1:06:14] pretty quickly. So, what I meant and it takes days to run is for the Mekong Basin, it's a very large basin and
[1:06:22] it uh we're running it for a very long time period, 30 years, and so it just takes a quite a while.
[1:06:29] It also depends on the resolution, special resolution to you choose to run it. Okay, question six. Could we get the
[1:06:51] video file for model input and pre-processing steps? So, I believe, um, Amita will will share this recording of
[1:06:59] today's webinar, correct? Yes, it will be on the RSet website. You can watch the recording. recording. Okay. So, yeah, you can watch a
[1:07:08] recording through the our set website. Uh Uh Um it's actually quite large, so I would I'm I'm you know, if you really need it, then I
[1:07:21] guess I could share it, but uh it also doesn't have any um Audio recording. Yeah, it doesn't have any um voice
[1:07:29] recording over it. So, I would suggest going to the our set website and looking at it. Okay, question seven. Does Panoply
[1:07:52] software come with VIC or is it independent? Um Panoply is an independent software. Uh it was created at or it's created
[1:08:01] with NASA uh for viewing netCDF and HDF5 data sets, and I think we pasted the script um
[1:08:09] or sorry, the link a little further up, so that way um you guys can access it. Yes, right there.
[1:08:18] Um Um Easy to download and install? So Yeah. Question eight. Is it necessary to install additional Python libraries for
[1:08:33] running VIC model? Um so for running the VIC model, the actual model, no. But, for setting up the
[1:08:41] model, model, um like what we showed in the uh in today's session, then yes, it requires um a couple packages such as
[1:08:51] GDAL, uh netCDF4, um um also requires uh package called shapely. And there's a couple other ones, but if
[1:09:06] you go to that website um um where are uh with all the scripts and everything, there's uh documentation and it will
[1:09:15] tell you which specific packages and software um I used to set up the VIC model. Okay, question nine. Where can we find
[1:09:40] scripts for VIC? Um again, all these are free and open, so I posted them online for anyone to
[1:09:46] access. access. Um and so all the scripts are available through that uh link that um we've typed
[1:09:55] in here. And um so there's a there's quite a bit of information, so there's actually a um
[1:10:04] there there are the scripts, there's um documentation documentation and then there's also test data. And so um what we did is we packaged
[1:10:14] this all up into a virtual machine. Um and you can download that. There's a link on the GitHub page to download the
[1:10:23] virtual machine. And so you can go through an example case that um that's in uh Eastern Eastern Africa uh
[1:10:34] to set up the model and and explore it using using the uh the tutorial that's in that package.
[1:10:50] I think the next question is quite important, Kale, if you can address it about the snow parameter.
[1:10:57] Okay, yeah. Um Um so, is a snow parameter file necessary? My study region does not have any snow.
[1:11:04] How to address this situation? So, the snow parameter file is not necessary. necessary. And the reason for this is because if
[1:11:14] the VIC model, if you do not use the snow parameter file, the VIC model will assume a constant elevation across the
[1:11:21] entire grid cell. So, what that means is you're just going to be uh simulating um the hydrologic
[1:11:29] fluxes at that one elevation across the grid cell. With the snow parameter file, what that allows you to do is actually simulate um
[1:11:38] different elevation changes within the the model. And so, if if you're And also, um so, this takes into account temperature
[1:11:48] as well, which is important for the energy balance. And so, if your model doesn't or if your
[1:11:53] region does not have any snow and doesn't have a very uh much terrain, then you can not use the snow parameter file.
[1:12:07] Sorry, let me rephrase that. Then, it is not necessary to use the snow parameter file. Okay, question 11. Where can I get the
[1:12:23] calibration scripts? Can you help me with calibration setup? So, with the calibration scripts, again, are on the GitHub page uh under the
[1:12:33] scripts folder. So, there's um a There's two scripts there. One is calibrate VIC, the other one's calibrate VIC. So, the calibrate VIC
[1:12:46] uses a simple Monte Carlo simulation, so it randomly um um so, it randomly selects parameters and then for however many iterations and
[1:12:55] gives you the best parameter set. The SCE-UA uses a optimization algorithm where where it um it first randomly picks parameter
[1:13:09] sets and then within that and then it takes that initial guess and then fine-tunes parameters. So, the the way the scripts are set up
[1:13:21] are actually using those workflows that I um um presented where we're creating the snow uh uh soil parameter file
[1:13:31] um um turning our flux data into netCDF and then running the routing model and then it checks those results.
[1:13:39] So, in this case the calibration scripts are somewhat custom. Um if you do have any questions on
[1:13:45] calibration, uh let me know and I will try and help out as best as I can, but um
[1:13:53] just know that the calibration setup is somewhat uh customized for your own uh application and where all your files are
[1:14:00] and everything. Also, I have a suggestion about um contacting Cal or any of us about calibration is uh please do
[1:14:11] try and uh run the script according to the instructions that you got today. And if you have any specific questions
[1:14:21] or if you're stuck at some specific point, it's good to just ask those questions. questions. It would be very difficult for Cal to
[1:14:30] walk everyone through the calibration process. So, uh at least you can watch the recording go through the process and wherever you
[1:14:38] have either questions or if you are stuck at certain uh points, then you can ask a specific
[1:14:44] question. That would be helpful to us also. Next question is about homework. Um, in homework you're not actually running
[1:15:00] the model, so it should not take weeks. Uh, this is the all the questions are based on the three webinars that you
[1:15:06] just watched. Um, the information that you received based on that, there are some questions. These are all multiple
[1:15:12] choice questions. You do not need to download any data or you do not need to run the model.
[1:15:18] So, it shouldn't take more than a few hours actually. Okay, question 13. I am calibrating the VIC model by energy balance. In my case,
[1:15:38] the peak flow is too large. I tried a lot of manual calibration, but peak does not match the observed flow.
[1:15:44] Any suggestions? Uh, yes. So, peak flow is uh, really dominated by your surface runoff. And in the model,
[1:15:54] the surface runoff is most sensitive to that B infiltration if I remember correctly. So, your higher B infiltration parameter, uh,
[1:16:09] higher B infiltration parameter yields higher surface runoff. Again, I um, I may I may be remembering this
[1:16:20] wrong, but I can I can go back and check and um, actually get the correct results, but
[1:16:27] it's that B infiltration parameter that you need to calibrate and it's either you need to increase it or decrease it
[1:16:34] to adjust for uh, higher surface runoff. So, Kale, would the elevation band set up affect runoff? Yes and no.
[1:16:49] So, um Well, I I would say yes. I would say yes. yes. Um and the reason being
[1:16:56] um is that your depending on your region, if you're having um a lot of terrain in the region,
[1:17:04] then you can have accumulation at the peaks of mountains. And with that, so um by having accumulated snow, that's actually
[1:17:15] adjusting your timing of runoff. So, if you think about it, soil or uh snow snow is storage, and then it actually has to
[1:17:25] melt before it's considered runoff. And so, if you're having if you have a lot of terrain in your region, and then
[1:17:31] there's snow accumulation, and you're not actually capturing that snow accumulation, then that would probably give you um
[1:17:38] more runoff than you were you were expecting. So, in addition, I just want to make sure that we convey this, and I'm trying
[1:17:49] to understand that if even if there is no snow, if you are rather than using mean terrain, if you use actual terrain,
[1:18:00] would that affect stream flow? That would, right? Maybe not the total runoff. So, amount of water running off
[1:18:07] will not change, but stream flow will uh uh change depending on how you represent your terrain, even
[1:18:16] if there's no snow. Yes, that's correct. Um you do have to like peak flow, uh so it it does matter, I think,
[1:18:24] elevation, how you represent that that will have some um impact in addition to infiltration. And Okay, so question 14.
[1:18:47] Can we find all the commands of the VIC model including parameter creation and running? Uh yes, there is a tutorial
[1:18:53] available available uh with the uh with explanations on the commands uh that I demoed. All on the all within the
[1:19:03] um GitHub page that uh or that link that we shared. Okay, so question 15. Where do I get
[1:19:23] parameters required in vegetation library file for different vegetation classes in MODIS? Um the answer to that is I would look at
[1:19:30] literature. So, I um So, what I did is I I I skimmed through a bunch of um
[1:19:39] published research and created a parameter set for IGBP um land cover classifications. And so, that is also available on the
[1:19:50] GitHub page. And from what I found, so I've set up the model in a couple different regions and uh for a couple
[1:19:56] different applications and what I found is that parameterization set actually does a fairly good job. Um so, I would suggest doing uh using that.
[1:20:06] Or else, you can uh look at published research and use their parameterizations. Okay, question 16. Is it possible to run sub-daily model
[1:20:27] runs using the scripts that were shared? Uh yes. So, So, a lot of the scripts are set up um so
[1:20:34] the parameter are the soil parameter, the vegetation parameters, the snow parameters, those are all static. Uh or
[1:20:42] those are not dynamic in time. The meteorological forcing is the only one that would be dynamic in time
[1:20:50] for the parameter set up. Um and so you would just have to customize that formatting of the meteorological forcing
[1:20:56] script uh to read in your data at um sub-daily time steps and write the data at that sub-daily time steps.
[1:21:19] Okay, so question 17 was I have a VIC model, but the correlation between observed and predicted data is only 0.3
[1:21:27] m. m. How can we get good correlation between observed and predicted data? Um Um so I would
[1:21:37] I'm looking at that 0.3 m and I would say that's somewhat pretty good depending on your area.
[1:21:44] area. So, if we in the Mekong Basin, if we get an error of 30 30 cm, then I would call that really good.
[1:21:53] Um but so I I I I guess it really depends on your region um um and I would try
[1:22:01] performing some calibration processes on that to make sure your um trying to capture or you're getting the best
[1:22:09] parameter set. Also, too it depends on your input data set. So, um the model's pretty sensitive to
[1:22:18] errors in precipitation. So, if you have um um precipitation data that has or does not capture peak uh runoff or peak stream
[1:22:30] flow or those high intensity storms or does not get the right um um amount of precipitation that occurs,
[1:22:40] then that can cause errors within your results. Okay, question 18. Uh so, the vegetation and soil data used
[1:22:55] in the examples are available at a global area. Uh yes, they are. So, um in session two,
[1:23:01] we went through and um talked about how we can or where to get these data, the soil data and the MODIS data,
[1:23:11] and uh what all the data is. Um so, um like like the file types, uh like what kind of classes they are,
[1:23:22] and then here was showing how we can um use that data as inputs into the model. Question 19. Can I calibrate the model
[1:23:38] on Windows Cygwin by your giving calibration scripts? scripts? I don't know. That would be I I would need to try that out because I
[1:23:51] wrote the scripts for uh a Linux environment and not a Cygwin environment. And so, you would need to make sure that we have
[1:24:02] all the necessary packages involved or installed on Cygwin before you can do the calibration process. So, question 21 says, "Do we have to use
[1:24:21] Panoply to produce the transform data and process the the transform data. Not necessarily, it's just easy. It reads netCDF and HDF file and it
[1:24:35] provides provides um maps as well as navigation through the time plots like multiple times it can go through back
[1:24:45] and forth you can make time series. So so it it's just um convenient to use but if you want to if
[1:24:55] you have any other analysis or graphic package that works with netCDF file you can use that as well.
[1:25:10] Okay, question 22. My question's related to precipitation inputs. If I use a local graded precipitation product, do I have to
[1:25:19] resample this product to the same resolution as other inputs or is that not necessary? Yes, you do have to
[1:25:26] resample it to the inputs or the grid cells that you're running the model at. So the model
[1:25:34] um um assumes that your precipitation is the average aerial precipitation for that grid cell. And so what the model actually does on
[1:25:44] the back end is it takes that average aerial precipitation and it uses that um um the area of the grid cell and all that
[1:25:53] other in- formation to calculate your volume of water later on. And so that's when you um um that's how we know how much water's
[1:26:02] actually coming into the to the region. So um so if you do resample as long as you're
[1:26:07] having a an accurate mean for that area then the model should capture all those dynamics. Okay, question 23.
[1:26:26] Can the calibration based only on discharge ensure the realistic measure flow duration curve of Sorry, um ensure the realistic individual
[1:26:37] hydrologic component simulation since it's important for hydrologic process characterization. characterization. That is a really good question. And um
[1:26:50] So, this this is somewhat of a research and I I believe that um the calibration process on discharge
[1:27:02] only solves for water balance. So, when you calibrate your model on discharge, you're only getting your components of surface runoff and base
[1:27:11] flow correct. And then it's assumed that the other balance components equal out to being correct. correct. Whether or not it's actual
[1:27:22] um actually modeling those processes correct like snow um snow water equivalent or evapotranspiration, um the model doesn't care about that as
[1:27:32] long as it's able to um um model the runoff and base flow correctly. If that makes sense.
[1:27:41] So, there there are ways to do what's called a multi-objective calibration process. process. And so that way you are calibrating your
[1:27:49] model on discharge for example or evapotranspiration or soil moisture. Um so that way you are um using multiple
[1:27:59] um um pieces of information to calibrate the model. Okay, do you have a multi-objective script including for example signature
[1:28:22] measures flow duration curve soft data uh uh surface runoff base flow uh besides the uh calibration of
[1:28:30] discharge discharge uh for model calibration. Um right now, no, I do not. Um so uh I am
[1:28:41] working on a calibration process that's uh taking into account uh soil moisture evapotranspiration and uh discharge so
[1:28:50] that way we're capturing all those uh components correctly, but that's still in the works. Um if you're interested in that, follow up
[1:28:58] with me in about a month or two. Okay, question 25. What is the minimum area of a basin that should be applied
[1:29:20] for VIC? Um I would say you have at least three good or four grid cells. Um so that way you are
[1:29:31] capturing the spatial um components uh in the basin, but you're also um Yeah, uh so that way you you capture the spatial
[1:29:45] components, but um you can also Sorry, I'm blanking on what I want to say here. And so what I think Paul is trying to
[1:29:55] say is that um highest resolution you can run VIC is 3 km. So you need at least four grid
[1:30:03] points, which are at least 3 km. So I think the smallest watershed, I would say say um
[1:30:10] um about about 9 to 12 sq km. That's the minimum. Would you say that? Yes. Yes. Thank you, Amida.
[1:30:25] So, that's the minimum you That's the the smallest watershed that you can work with with with with some accuracy and reasonable
[1:30:34] representation of all the processes. Okay, question 26. Uh before calibration, model is sensitivity analysis necessary so we can limit the
[1:30:48] parameters to calibrate. Um it's not necessary, but if you do a sensitivity analysis, then yes, that would definitely help with your
[1:30:56] calibration process. So, that way you can um um simulate or calibrate on the parameters that are only going to
[1:31:06] really affect your results for that basin. And so, um there are methods to do sensitivity analysis. analysis. Um I haven't done one myself, but um I
[1:31:18] think it'd be really good if you do do one. So, the next question is about has the
[1:31:28] VIC model applied in watershed in Arctic region? So, University of Washington has developed a regional model for Arctic
[1:31:36] using VIC, and DOE is I think funding it. I'm I'm giving Elizabeth will type the the link here that you can look at. And if
[1:31:46] you just search for VIC for Arctic, you will be taken to a report or presentation that University
[1:31:54] of Washington has put together. Okay, question 28. Can we transform the output files into a different format to
[1:32:08] be read by other programs? Uh yes. So, I personally um like using netCDF data sets. Um that doesn't mean you have to use them.
[1:32:21] So, if you have a specific format that um you like to use, then please use that. Um
[1:32:31] and just make sure you understand how that how those flux files are actually calculated. And so, the flux files again are um
[1:32:42] the flux files are a time series at each grid cell. And so, if you want to use any other
[1:32:49] kind of data set like a GeoTIFF or HDF5 or or something else, just make sure you understand how the flux files are
[1:32:58] formatted so that way you can properly format your um your other data set. Okay, so question 29. What interpolation
[1:33:15] methods do you suggest? Regridding all the data to a common grid? Um so, it really depends on the data
[1:33:22] set. set. Um Um so, what I use is for uh discrete data like the soil classes or the uh land
[1:33:34] cover classes, I use nearest neighbor. Uh be- cuz it doesn't make sense to interpolate or get half of a class value or
[1:33:44] something. Um or for elevation, since the VIC model needs mean elevation for the grid cell, then I just aggregate each grid cell to
[1:33:54] the mean value. Um in the case of other data sets, like if you're trying to to uh, specially interpolate or snap
[1:34:04] elevation data, then you can use or sorry, not elevation data, but um, yeah, so you're yeah, your high
[1:34:13] resolution elevation data, which is needed for the snow primer file, then you then I use bilinear interpolation.
[1:34:20] And that typically does the trick. Okay, is it possible to have the setup of a model for specific basin in West
[1:34:39] Africa? Africa? As the model has been used for flood and and and drought monitoring projects of Princeton. In case it is possible to get
[1:34:49] it, who can I contact? Um, so yeah, you can s- set up the model for theoretically any basin.
[1:34:57] Um, but I would um, I think Justin Sheffield is the PI for the flood and drought monitoring project for
[1:35:10] Africa. Africa. And um, I would suggest contacting him if you would like to um, learn more about the
[1:35:21] model setup that he has. And um, if you can access that model. So, question 31. How long is it necessary to perform
[1:35:41] automatic calibration using the um, SCE-UA algorithm and regional uh, small watersheds with lakes and reservoirs to get optimal parameters.
[1:35:54] Uh so the SE SCE-UA uh calibration uh program uh actually converges uh fairly quickly compared to other
[1:36:04] calibration processes. Uh and I would say it's about 5,000 to 10,000 iterations. Um it really depends on how many
[1:36:14] parameters you are trying to calibrate and your region. Um question 32 is VIC available in as R
[1:36:31] scripts? scripts? So So um um I want to distinguish here. So the VIC model itself is written in C
[1:36:40] uh programming language. And so um right now, I don't think there's any plans to make it into R scripts.
[1:36:51] Um they do have Python bindings for the for the model right now, but those are more in development. Um so the actual
[1:37:01] VIC model, I don't see it being written in R. But for the setup process, um um that so uh what I demoed earlier using
[1:37:12] Python, then yes, um we can make those available in R scripts, but that would take quite a while uh translating
[1:37:20] between Python and R. Okay, question 33. At what point would you consider your surface runoff calibration good enough for the Mekong
[1:37:40] Basin example? I've used root mean square error and other statistical methods comparing real to simulated data, data, but I'd be really interested to hear
[1:37:49] what is generally used for uh uh for your use in the VIC model. So, what I use is um
[1:37:59] I use a a article as a standard guideline. Um I will I don't remember it I know the
[1:38:10] citation is Moriasi et al. 2007. Um I don't remember the specific name of the article, but I can um
[1:38:19] put that into the QA document later on when we share it for you so you can look
[1:38:24] that up. That is a really good um article that basically creates a standard for evaluating models. And it gives you guidelines on what is
[1:38:36] what error statistics such as your Nash-Sutcliffe model efficiency coefficient, uh your R or your correlation or your root mean square or
[1:38:45] bias. bias. It gives guidelines on uh which thresholds to use are or that are that you can use to be considered a
[1:38:55] an acceptable or good or an excellent model setup. And that's what that's the those are the guidelines that I follow.
[1:39:08] Thank you so much uh Kale for all the answers. And thank you all for attending and taking interest in this uh webinar
[1:39:16] and this topic. Um we look forward to your feedback. You will get a survey um about this webinar. And
[1:39:26] that will be your chance to give us uh your feedback how we can um improve our training and how we can provide more
[1:39:33] training in future. So, please uh when you get the survey link, uh we request that you do take time to fill out the
[1:39:41] survey about this webinar. Thank you again for attending this session and uh we look forward to see
[1:39:48] you in future. Please stay tuned and uh connect to the RCTC listener so that you can uh stay updated with all the
[1:39:56] trainings that RCTC is uh offering. And you can contact us via email so that if you have any specific
[1:40:04] questions. Thank you.
