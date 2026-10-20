# Mapping Mangrove Extent, Part 2/3

`https://www.youtube.com/watch?v=5Venmt7t6BI` · id 75 · 1:50:09 · module 82 — Remote Sensing for Mangroves in Support of the UN Sustainable Development Goals

[00:01] Hello everyone, and welcome to the second part of our mangrove workshop. The The This part of the workshop will be
[00:10] covering mangrove extent mapping and time series analysis, and we will also be covering how to perform an accuracy
[00:18] assessment of our resulting map. So, for this part of the workshop, we will be exploring some of the themes that we
[00:24] discussed last week and going through the methodology of how we can actually create those maps using Google Earth
[00:31] Engine. This workshop is structured as a series of three 1 and 1/2 hour sessions, the first occurring on November 5th, which
[00:42] can be found on our set website. Uh today's session on the 12th, and then there will be a third session on the
[00:48] 19th. 19th. The same content will be presented at two different times each day. First session happening between 10:00 and
[00:56] 11:30 Eastern Standard Time, and the second session happening between 3:00 and 4:30 Eastern Standard Time. All webinar recordings, PowerPoint
[01:07] presentations, and the homework assignment can be found through the appliedsciences.nasa.gov appliedsciences.nasa.gov website uh by following this link, and
[01:15] they can be found after each session. And if you have any questions that were not answered during the lecture, you can
[01:21] follow up by emailing us at our NASA emails. Again, there are three homework assignments assigned after each weekly
[01:30] part, so there will be another assignment after today's workshop. And answers must be submitted via Google Forms. In order to achieve the
[01:38] certificate of completion, you must attend all three live webinars, complete the homework assignments by the deadline, which you can access through
[01:45] the ARSET website, and you will receive certificates approximately 2 months after the completion of these of the
[01:51] course from Arnez Martins. There are several prerequisites that were posted on the Arset website for this course. If you don't already
[02:03] have it, you will need to download version 3.10 of QGIS. You will also need to download and install class accuracy
[02:10] plugin for QGIS through the following link. There we also have instructions for download available on the Arset
[02:17] website for this workshop. For additional prerequisites, we recommend the fundamentals of remote sensing and intro to JavaScript for
[02:27] Google Earth Engine since we will be diving in pretty quickly to coding in Google Earth Engine. I will be covering
[02:34] a bit of a review of intro to Earth Engine, but we will not be going into it
[02:38] extensively. extensively. You will also need to create a Google Earth Engine account if you do not already have one.
[02:45] We've also provided some optional links that can help you as you're trying to learn Google Earth Engine including a
[02:51] beginner's cookbook, a guide to managing assets, and introduction to Google Earth Engine tutorial. For today's workshop, we will be going
[03:02] over the basics of Google Earth Engine. And by the end of this presentation, you will also understand how to create a
[03:08] mangrove extent map using a random forest classification and create a time series for mangrove extent change. Over the course of the workshop today,
[03:22] we will first be doing a quick review of Google Earth Engine followed by a review of time series analysis and what we mean
[03:29] by that analysis. And then I will be going through a demo of performing a time series analysis for
[03:35] Guyana as an example study site. We will go over how to set up our map and filter a Landsat composite. Then we
[03:43] will be constructing a random forest model. model. We will then do a time series comparison, a new random forest
[03:50] classification for that comparison. We will go through calculating mangrove area from our resulting maps. We will cover exporting layers of interest, and
[03:59] finally, we will go through a demo of the QGIS Class Accuracy plugin to determine how accurate our resulting
[04:05] model is. So, as a quick review of Google Earth Engine, this is a free, open-source, cloud-based geospatial processing
[04:19] platform. It comprises of a catalog of publicly available data sets such as Landsat imagery or land cover imagery,
[04:28] Google's computation power, an application programming interface or an API, as well as a code editor. We will
[04:36] not be covering the API today. It's more for exploratory purposes to see what data is available through Google Earth
[04:43] Engine, whereas the code editor is more useful to us for actually performing robust calculations and analyses. What's great about Google Earth Engine
[04:56] is that it is freely available to to the public and it grants us fairly easy access to satellite imagery from a
[05:04] number of NASA and ESA satellites including Landsat and Sentinel. The way Earth Engine works is that it is
[05:15] a cloud-based platform with client and server functions. Essentially, the user, which will be us, manipulates proxy objects through the server. So, we work
[05:26] with the Earth Engine interface to manipulate these objects and send instructions to Google for processing. So, instead of performing these analyses
[05:36] on our computer's engine, we are sending requests to Google and results are being sent back to the web browser for
[05:43] display. display. Everything in Earth Engine defaults to WGS84 projections, which is important as we learn how to export our data and if
[05:53] we decide to work with it in ArcMap, QGIS, or another platform. EarthEngine grants us a lot of
[06:00] capabilities. It has access to data at a planetary scale and again, it grants us fairly easy access
[06:09] to satellites like Landsat. However, there are quota restrictions due to its open-source nature and you can be
[06:17] limited in terms of the user memory. As you get more familiar with EarthEngine, we you can learn how to work around some
[06:24] of this and how to process different requests to minimize how much data processing you're actually requesting from EarthEngine.
[06:36] And again, this is just a visualization of what EarthEngine is doing. The user or the coder is sending a request to
[06:45] Google's computer processing power using these geospatial data sets of interest. The requests are being sent to Google where computations and analyses
[06:55] are done. Then, the results are sent back and displayed on our web browser. So, today we will be using the code
[07:07] editor side of Google EarthEngine. Again, we will not be focusing on the API. This is for me more detailed
[07:14] analyses such as the one that we'll be running today. It involves using a JavaScript code editor. There is Python availability,
[07:21] but we will not be covering that. There's also a map display, an API reference documentation or the docs tab,
[07:30] the console output or the console tab, a task manager, which is the tasks tab, and then an interactive map query, the
[07:37] inspector tab. Again, this is a quick review of glossary of terms, a Google Earth Engine asset is an external data set loaded
[07:48] into Google Earth Engine for analysis. Tables are vector data in shapefile format. So, for example, this could
[07:55] include ground truth location data or shapefile of your study area. An image refers to raster data composed
[08:05] of one or more bands. So, for example, distance to stream. And then an image collection is a stack
[08:11] or time series of images like Landsat 8 imagery. So, we will be working with an image collection today and mosaicking
[08:18] that to an image for easier working purposes. If you're unfamiliar with what Google Earth Engine looks like, this is uh an
[08:31] example of what the code editor looks like and what we will be working in today. And after we go through some more
[08:37] introduction, I'll be moving over to displaying my screen in Google Earth Engine. If at any point you are looking for
[08:47] extra help with understanding some of the code we'll be using, I highly recommend exploring the docs tab in
[08:52] Google Earth Engine. There's also a developers guide through the Google Earth Engine website. And then there is a Google Earth Engine
[09:02] Developers Group available as a Google Group that it works like Stack Overflow where you can ask questions or you can
[09:09] explore questions that other users have asked that may reflect something that you are trying to do in your own work.
[09:21] Now, we'll be moving into actually performing the time series of mangrove extent for today's workshop. We want to perform a time series because
[09:31] we want to understand change over time. So, as Lilith talked about in the last part of the workshop, mangroves change
[09:40] over time due to different natural and anthropogenic effects. So, we can use a time series analysis to understand how mangroves
[09:50] have changed over time. We can identify areas of loss and gain, and then understand patterns of change to see if
[09:58] those changes are linked to any sort of source in particular or source that we are interested in studying. So, this
[10:05] image is an example of what we are hoping to end up with at the end of this
[10:09] series. This is showing a zoomed-in image of mangrove extent in Guyana for 2000, 2010, and 2020. For time series analysis, we are going
[10:22] to be examining the same study area over several years. So, we are going to focus on specific years of interest. Depending
[10:30] on the type of study you are conducting, you may be interested in decadal information, you may be interested in
[10:36] annual information, and we can apply the techniques that we are going to review today to a number of these different
[10:42] studies. So, for example, this is a comparison of mangrove extent in Colombia in 2000, which is the map on
[10:50] the left, and 2019, which is the map on the right. To do this analysis, we are going to be
[10:59] using Landsat data. So, this is a representation of a false color composite of Landsat data in 2000 and
[11:07] 2019, and we are going to figure out how to train a model to interpret this data to help us map mangroves and determine
[11:16] the amount of change over this time period. So, we can compare values of different indices like normalized difference
[11:26] vegetation index across different years to understand how mangroves are changing over time. And I will be defining some
[11:36] of these indices later on as we go through the demo, but this example index, the normalized difference
[11:42] vegetation index, is essentially a display of greenness and how green a certain pixel is that we're studying.
[11:51] So, higher values of NDVI indicate higher levels of vegetation, i.e. mangroves. mangroves. We're able to plug this information into
[12:00] a model then to determine where mangroves are found without having to do the heavy lifting of doing ground-based
[12:08] studies studies of delineating where mangroves are on the ground. So, through Earth Engine and using Landsat data, we can create samples of
[12:19] areas with and without mangroves using this imagery. And machine learning allows us to use these samples to detect mangroves across
[12:27] the region. For this workshop, we will be using a random forest classification. This is a type of machine learning. And machine
[12:38] learning essentially uses statistics to identify patterns in large data sets. It is a type of artificial intelligence
[12:46] that learns from data. This is a tool that allows us to process large quantities of data to answer
[12:52] particular research questions. A random forest classification is an ensemble tree-based learning algorithm. Essentially, what that means is we are
[13:02] creating trees that are looking at a single pixel of our data, and each tree is looking at different variables such
[13:12] as the NDVI, such as different bands of Landsat imagery that may help us figure out where mangroves are.
[13:20] And each tree is using that information to make a vote. So, one tree may vote that that pixel is mangrove, another may
[13:28] vote that it's not. And And these decision trees select the best option based on how many trees vote in
[13:37] one direction versus another. And this is a type of supervised uh machine learning because we are giving this
[13:43] training data. So, you do not have to be an expert on machine learning to use it in your
[13:53] research. research. This is kind of a black box where we are giving input and training data to a
[14:00] machine learning algorithm and then achieving some sort of output. So, we can only observe what goes into the
[14:06] algorithm and what comes out of it, and then we can manipulate those inputs until we get a result that we feel
[14:12] reflects um the area of interest more accurately. So, again, this random forest classification classification constructs these decision trees for each
[14:25] sample. sample. Based on the predictors, these bands from Landsat, the trees will vote for each pixel to detect mangrove versus not
[14:32] mangrove. And the most supported value is assigned to each pixel. So, you are welcome to delve further
[14:40] into machine learning, but again, you don't need to be an expert on it for us to move forward and actually apply it to
[14:47] this particular study. Essentially, the process that we'll be using to run this random forest classification is we will create samples
[14:58] based on the available Landsat imagery within Google Earth Engine. We will then feed these samples into our
[15:04] random forest classification, so into our machine learning model. And then we will take these results and we will continually refine our model
[15:13] until we feel that we are happy with the results. After we have created a map that we feel
[15:21] is accurate, we then need to validate it to see if it's actually accurate. Understanding the accuracy of our model
[15:28] allows us to understand how reliable our results are. And we can use stratified random samples to run an independent accuracy
[15:35] assessment. So, if you have available ground truth data, this is also something you can use to run an accuracy
[15:42] assessment, but in this case we do not have that, so we're going to create our own sample data.
[15:49] We are going to to then visit each point using satellite imagery, and then we're going to mark if they are correct. So,
[15:56] rather than using ground truth data, we are going to zoom in on very specific points that we've created across the
[16:04] landscape, determine is this point mangrove or not mangrove, and then see if the model that we created reflects
[16:10] those points correctly. For this exercise, we'll use the class accuracy plugin in QGIS 3.10. And again, this is another link to that plugin if
[16:20] you don't already have it. And today we're going to go through this iteration iteration once really, but this is a continual process until
[16:33] you get a model that you're happy with. So, we run our model, we see how accurate it is, and if it's not
[16:41] accurate or we're not happy with it, we can refine our model. We can input more training data, and we'll go over some
[16:47] other ways that we can refine that model. For today's workshop, we'll be using Guyana as our study area. NASA and
[16:57] SERVIR work with in-country partners in countries like Guyana to help them monitor mangroves, and Guyana foresees future flooding and
[17:06] saltwater intrusions as sea levels rise. So, in this case this is an area where mangroves may be threatened by sea level
[17:15] rise, and so we want to understand where mangroves are currently found and how they have changed in the past decade or
[17:22] so. so. So, this study is going to show how main how mapping mangroves can help us focus
[17:28] conservation practices. Now, I'm going to be switching over to the code editor for the rest of the
[17:39] demo. demo. You can follow along with a script by clicking this link. You can also follow along with the
[17:45] PowerPoint presentation that we made available on our set website, which contains all of the code for the
[17:53] analysis that will be running today. So, if you're following along with the link that I provided, all of the code is
[18:03] already included in the code editor. And you can run it as is, and you will get the final results of our model.
[18:12] But, But, otherwise, you can type along with me or copy-paste some of the code over, whichever way suits your learning
[18:21] purposes. For the first part of this analysis, we first need to include our imagery that we're going to be using. So, in this
[18:32] case, we're we're going to be using Landsat 8 surface reflectance tier one. You can see that it's already been
[18:38] imported for me, but we are going to look for it anyway just so that we know where to find it. So, if you type in in
[18:46] this search bar at the top of the screen, Landsat 8 surface reflectance, we'll see this option pop up.
[18:57] Before we import it, we can click on the title and double-check that this is in fact the
[19:02] image collection that we want to use. We can see what the ID is for it. We can
[19:08] see which bands of interest are available. And look at the image properties and what's actually contained in this data
[19:17] set. set. And this looks good. So, I'm happy with what I've imported. The other data set that we need to
[19:25] import is SRTM digital elevation information. Again, Again, we can search for it up top. We'll see our SRTM digital elevation
[19:38] data version 4 and then digital elevation 30 m. The 30 m option is what we want to be using. Again, this
[19:46] is from the Shuttle Radar Topography Mission. This is going to provide us with elevation and slope, which we'll be
[19:53] using later on to narrow down our study area to areas where mangroves are more likely to be found.
[20:03] And before I jump into actually running the code, I will be going through this demo fairly quickly. And we are not
[20:11] expecting you to necessarily keep up at my pace. However, this workshop is going to be recorded and will be available
[20:18] within 24 hours, so you can refer back to this video as well as the link to the
[20:24] code that I provided. Our first step of this analysis is going to be setting up our map. I like to
[20:35] start off by centering the map to my area of interest so that when I return to the code, it's a lot easier to get
[20:41] started because I'm already centering in on my study area. So, in this case, I have drawn a geometry for
[20:52] my area of interest. And this is reflecting the coastline of Guyana. And if I wanted to create a new geometry,
[20:59] all I would have to do is move over to this tool for drawing a shape and I'll
[21:05] select draw polygon. I will create a new layer. And I will start drawing my area of interest.
[21:27] And then I'll exit out of that. So now I have this new polygon. I'm going to get
[21:30] rid of it because I've already drawn one that fits the coastline a bit better. Because we are only interested in
[21:37] mangroves mangroves and mangroves are found on the coastline, this seems like it will provide a pretty good study area.
[21:45] As you refine your model more, this is one of the things that we can manipulate. So say I wanted to make my
[21:53] study area a bit more exacting, I could then click on that geometry and move some of these vertices around to hug
[22:01] that coastline a bit better. But for now, I'm pretty happy with that. And so I'm going to center my map
[22:12] around that geometry using dot center object. And then into this, I put the geometry that I want to center on
[22:21] and then my zoom. So right now I'm zoomed at seven. If I wanted to zoom in or out, I could play with that number.
[22:29] So now we're zoomed in a little bit too far. If I zoom out of it more, to me that's too far away. So I like
[22:37] seven, but um you can manipulate that number based on what visually do you see easier to work
[22:44] with. with. The other thing that I like to do, which is optional, is to set up my map with
[22:50] this satellite base map. So you can either do that through the code so that every time you run this
[22:57] code, it automatically sets up with the satellite base line. Otherwise, it's going to default to the Google Maps background.
[23:09] You can work with the whichever one you think is easier to visualize. I personally think the satellite data is
[23:17] makes it easier for me to visualize where mangroves are found. All right, so we have our map set up the
[23:25] way we want it and we have our Landsat and SRTM data pulled in. So, the next thing we need to do is we actually need
[23:32] to filter that Landsat composite to a cloud-free mosaic. So, Landsat data includes a pixel QA band which contains information about
[23:50] the quality of each pixel and if those pixels contain clouds or other features that may obscure the data.
[23:58] And we're going to create a function to mask out any of these cloudy pixels. So, this function mask clouds is
[24:08] something that you will tend to use over and over again. Essentially, what it's doing is it is
[24:15] creating these masks in the Landsat imagery and pulling out any sort of data that may have clouds
[24:24] and that we want to remove from the images that we're looking at. So, we create this function
[24:30] and it's going to return an image that is updated with a mask that will mask out areas of cloud.
[24:42] Now, you'll notice that if we run this, nothing happens yet. This is because we haven't actually asked anything to
[24:49] display on the map. So, just keep note of that that as I'm going through some of this code,
[24:55] until we actually write in code to print something or to add a layer to the map, we won't actually see anything display.
[25:03] However, we can definitely check ourselves by running the code. And the way I'm running the code, I'm on a Mac,
[25:09] so I'm hitting control enter. I believe on a Windows it's command enter or we can hit run at the top of our code
[25:17] editor. And it it's great to check as you're going if the code is running. Because for example, if I forgot to
[25:26] include a curly bracket at the end, I will run this code and I will get a syntax error.
[25:33] And And I can see it that there was an error here. I have an unmatched curly brackets
[25:39] and that would be this guy. So, you'll also notice that you can code things in or out by adding these two
[25:48] dashes. And on a Mac, you can use command command {slash} to code out a whole line. And I believe on Windows it's it's
[25:59] control {slash}. Our next step is going to be adding spectral indices to our Landsat data using data that's already provided
[26:11] through this Landsat 8 imagery. So, we'll be adding seven indices to the Landsat imagery. So, we're going to be using NDVI,
[26:23] normalized difference vegetation index. This relies on red and near infrared bands to quantify vegetation. NDMI, normalized difference moisture index,
[26:34] which uses near infrared and shortwave infrared. And this helps us get a vegetation water content. NMDWI is modified normalized difference
[26:44] water index, which uses green and shortwave infrared. And this will provide some water information. And then we have a few ratio bands. So,
[26:53] we have SR, simple ratio, which uses red and near infrared to provide a simple vegetation index. There's ratio 54,
[27:01] which is shortwave infrared and near infrared. This maps water features. Ratio 35 uses red and shortwave infrared
[27:11] to map water features as well. And then we'll also be using GCVI, green chlorophyll vegetation index, which uses
[27:19] near infrared and green to map green leaf biomass. So, essentially we are adding a bunch of different indices that provide some sort
[27:28] of information on not only the vegetation in a pixel, but also water content. And this is because we are
[27:35] looking at mangroves, which are found close to water. So, to add these indices, we are going to create a function called add indices
[27:46] L8. And for each of these indices, we are going to actually calculate them out using the bands available. So, for NDVI,
[27:59] we're going to take the normalized difference between red and near infrared bands. bands. You're also going to rename this as
[28:07] NDVI. So, you'll notice this pattern for each of these lines of code. So, from lines 55 to
[28:17] 69, 69, we are performing calculations of the bands that we're interested in and you're renaming them so that we have
[28:27] bands that are easier for us to work with. And then, as the final part of this function, we are going to return our
[28:35] image, which will be our Landsat image, with all these bands added. So, we're going to use {dot} add bands to add our
[28:43] NDVI, NDMI, and all of the rest of our indices of interest. Again, I will just run that real quick
[28:52] and I'll notice that I don't have any errors, so so far so good. Now we need to actually filter down our
[29:02] Landsat data by date and region. So right now we have Landsat data available globally, but we are only interested in Guyana. So and
[29:14] we're also only interested in the year 2019 for the moment. So first we're going to set up our
[29:21] temporal parameters. We are going to create a variable called year and we're going to say year equals 2019.
[29:30] And what's nice about setting it up like this is that we can change this line at any point to reflect any year where
[29:38] Landsat 8 data is available. So you'll notice that these next couple lines where we create a variable for our
[29:46] start date and our end date, we also include this variable year. So rather than typing out our variable start date
[29:56] equals equals 2019 01 01 and then having to find these lines of code, I only have to find line
[30:07] 87 and change this around if I decide that I have a different year that I would like to look at.
[30:13] So we're going to look at 2019 minus 1, so we're actually going to be looking at 2018
[30:21] 2018 through through as much data as we can acquire from 2020. 2020. And this is because we are trying to
[30:27] accumulate as much Landsat data as makes sense to create a cloud-free composite. The thing about studying mangroves,
[30:35] especially in areas like Guyana, is you often are studying them in areas that are cloudy and have a lot of rainfall.
[30:43] And so we can't just collect imagery from one month in a year because we are likely to only get cloudy images that
[30:51] are not useful for analysis. So instead, we look at imagery from a year before and a year after and we look
[31:00] for the best pixel available within that time period and we mosaic those pixels together to create a cloud-free image.
[31:11] So now we're going to start applying some these filters and masks to our Landsat 8 imagery. So for that, we are going to create this
[31:21] new variable L8 and we are going to take our capital L8, our Landsat data. First, we're going to filter it by our start
[31:29] date and end date. So now we've only filtered it down to 2018 to 2020. We are going to use {dot} map to apply
[31:39] that mask clouds function. And then again, we are applying another function so we're going to use {dot} map
[31:45] again and we are going to add our indices. So NDVI and all the other indices that we are interested in for
[31:53] the purposes of this study. So right now, our Landsat imagery is still in an image collection and we we
[32:04] could see that if we wanted to just double-check ourselves by using print. And if we print it L8, we'll see that
[32:11] it's printing as an image collection. So right now, it's not in a format that we can use to run our random forest
[32:19] classification and we need it to be an image. It's also, as you can see, a fairly large image collection because
[32:26] we're still looking at global data. So we need to mosaic our image collection to an image and also filter
[32:34] it down to just our study area. The way we do that is we composite on a per pixel per band basis. We are going
[32:44] to use a median reducer. You can use other reducers such as quality mosaic using a band of interest
[32:56] or index of interest like NDVI. Median works pretty well for filtering out clouds. You don't want to use something
[33:05] like maximum because it is more likely to result in cloudier images. So, our dot median reducer works really well and
[33:13] this essentially is mosaicking our data down and then we're going to clip our composite to our area of interest.
[33:22] And just to check ourselves, I'm going to use print and I'm going to print this new variable.
[33:30] variable. And we can see that now it's an image with 19 bands. And if I expand this and
[33:35] expand the bands, I can see the different bands that Landsat 8 already comes with and then further below I can
[33:42] see the indices that we actually added through that function. Let me get rid of this. Next, we need to filter down a little
[33:57] bit more using other information that we have available and our prior knowledge about mangroves. So, right now our
[34:05] Landsat data has been filtered to this whole study area, but we know that mangroves are found generally in low
[34:12] elevation, that they are going to have high NDVI values and high MNDWI values because they are highly vegetated and
[34:22] they are associated with water. So, the first thing we're going to do is we are going to clip our SRTM data to
[34:29] our study area. So, SRTM.clip and then we're going to use our geometry to clip this data. And the next thing we're going to do is
[34:38] we are going to mask to elevations less than 65 m. So, we're going to create a mask called
[34:46] elevation mask. We [snorts] are going to use this clipped srtm data. And we are going to say
[34:53] say we want areas that are less than 65 m. Now, this is a value that I played
[34:58] around with that worked pretty well. You can refer to other data sets of mangrove studies to explore other values. Or this
[35:08] is a value that you can manipulate as we work with our model a bit more. So, for
[35:13] example, if I felt that this was not constructive enough, I would say, "Okay, give me areas that
[35:19] elevation is less than 45 m." And if I felt that this was too too constructive and I wasn't getting enough of my study
[35:26] area included, then I could raise that number again. But, we'll stick with 65 m for this. And then we will create our NDVI and
[35:36] MNDWI masks. So, we are going to call in our composite, so our Landsat image. We are going to select our bands of interest,
[35:48] so here our NDVI band. And we are going to mask to areas that are greater than 0.25.
[35:57] So, all these indices are going to run from -1 to 1. Areas that are greater than 0.25 are
[36:04] going to be highly vegetated. And for MNDWI, we want areas that are greater than -0.5. And then finally, we want to
[36:18] apply these masks. So, we are going to take our Landsat composite and we are going to use dot update mask to mask out
[36:28] areas that are not high vegetation, areas that are not associated with water, water, and in areas that are too high elevation
[36:35] to support mangroves. So, we are making it easier for our model before we actually even run the
[36:42] model. model. If we run the model across the entire landscape, it is going to be looking at
[36:47] areas of vegetation too far inland to actually be mangroves. So, we're going to exclude those areas and just narrow
[36:56] down to where it is already more likely for mangroves to be found. And now we get into actually visualizing
[37:06] those results and seeing what that looks like. So, the first thing that we need to do is we need to set up our
[37:12] visualization parameters. We are going to do a false color composite in this case. case. So, I'm going to use bands five, six,
[37:20] and four. I find this easier to use for forest classifications for mangroves than a true color composite, which would just
[37:29] be the red, green, blue bands. Um that is up to personal preference, but you'll see when we display this that it it's
[37:37] fairly easy to pick out vegetated areas from non-vegetated areas using the false color composite rather than using the
[37:45] true color composite where you can see everything just kind of in the background imagery looks pretty green.
[37:55] Then we are going to use map.addLayer to add this Landsat composite that has been masked to our map.
[38:04] So, if we run this, map.addLayer will use composite new, which is again our filtered composite that has been masked to our area of
[38:14] interest and clipped to our geometry. We're going to use our visualization parameters, and we are going to give it
[38:21] a name so it's easier for us to take out from other layers as we add more. more. And real quick, these numbers for
[38:30] minimum and maximum are going to be the minimum and maximum values that we are stretching those bands. These are again
[38:37] numbers that you can play with for display purposes. They don't actually affect what values are contained in the
[38:44] data. They just affect how the data is displayed. displayed. So if I run this, you'll see I now have a layer being
[38:51] added to the map. For now, I'm going to turn off my geometry for the study area so that I
[38:58] can better visualize what Landsat imagery I I'm left with given these masks that I put in place.
[39:11] So you'll see we have our Landsat data available through a false color composite. composite. Areas that are darker red um and orange
[39:21] are going to be areas that are higher vegetation. So for example, this area where it's dark rusty orange is
[39:35] pretty likely to be mangroves. Whereas if we move further along, we'll see other areas display that are green
[39:45] or are this dark orange on this black and those areas are pretty clearly not mangroves. So the false color composite, if you
[39:58] haven't worked with it before, is something to adjust to, but the changes in amount of vegetation appear to
[40:10] be of starker contrast than using a true color composite. Next we'll be moving on to constructing our random forest model.
[40:31] So the first thing we need to do for this is actually prepare treating data and predictors that we'll be feeding
[40:38] into our model. Now as you can see by the geometries that I've drawn on here, I've already
[40:45] created training data. And I created data for 2019 and also for 2009 because we'll be doing that for our
[40:54] time series to do a decadal analysis. Now if I turn on these geometries, I can see where
[41:06] I've already drawn training data. So for these geometries, my non-mangrove geometry is dark blue. So you can see these points pointing to
[41:36] areas where mangroves are not found. And then mangroves are the screen geometry. geometry. And if I want to add to these geometries
[41:44] at any point, I can certainly do that. To create a new one, you would go to new
[41:49] layer. layer. You would have a new geometry display. And then before you do anything else, you needs to move to settings.
[41:59] And you need to actually change this title. So for here, I'll just do mangrove test. And you need to change it
[42:08] from a geometry to a feature collection because by doing that, we can then add a property. Now, the property that we want to add is
[42:19] land cover. And we are going to give mangroves a value of one. So, we will be doing this for
[42:29] all of our geometries that we use to train the data set. And this is because we will later be
[42:36] looking at these feature collections, and we will be looking at these values of land cover to help train the model
[42:44] and show it these are areas where we as a user define mangroves as being, and these are areas where we as a user are
[42:51] defining mangroves being excluded. So, I'm going to cancel out of that. I'm going to delete that for cleaning purposes.
[43:01] And then if I wanted to take any of those feature collections that I've created and add to them,
[43:07] I would then select it. I would see make sure that it's bold. And then I would zoom in to any other
[43:14] areas where I feel like it is very clear that something is mangrove or not mangrove. mangrove. So, once this displays, you'll see that
[43:23] this area is again this deep rusty orange. orange. So, I would classify this as mangroves. And further north on my map, again I see
[43:39] other areas of rusty orange. You can use the background satellite imagery that Google provides to help kind of verify that, but you
[43:50] don't want to rely completely on it because it may not be from the same year that you're performing your analysis on.
[43:58] But, I will add this area as a mangrove sample. I can add polygons like what I'm doing now, or I can add
[44:07] points if I think that that is easier. And there isn't necessarily a set number of training points that you need to
[44:17] provide. You will notice that if you provide too many training points, the model can be a bit slower.
[44:24] And it is sometimes more helpful to start with fewer training points and then work your way up. So, we're on the model, see how
[44:32] accurate it is, and if you feel that it needs improvement, add more training data. data. So, we're going to do the same with our
[44:40] non-mangrove feature collection. All this area looks like it's either agriculture or urbanized. So, I'm going to add some points here.
[44:49] And then I'm going to add polygons. So, I now have these two feature collections, mangrove and non-mangrove,
[45:01] and they both contain some sort of training information about where mangroves are found. The next thing I need to do is I
[45:09] actually need to set up my model. So, after we draw these training polygons, we can merge them together
[45:17] and create a new variable called classes. And we are going to take mangrove, which is the mangrove training
[45:24] data set for 2019, and we're going to use dot merge to merge it with non-mangrove. So, if I wanted to print this,
[45:34] and see what that looks like, we see that we have a feature collection. collection. And we can see that has 33 features in
[45:44] it. it. And that each of them has a property for land cover. And if we click around, we can see that
[45:51] some of them have land cover equals one and land cover equals zero. So, we can see that that worked.
[46:02] And next, we are going to define the bands that we want to include in the model. In this case I'm going to be using bands
[46:14] 5, 6, and 4. So you'll notice these are the same bands we used to display display our false color composite.
[46:22] We're going to use NDVI, MNDWI, SR, and GCVI. So I haven't included all of the indices that we have attached to our Landsat
[46:33] imagery, but that does mean because they're there, if I run my model and I feel like it needs additional
[46:39] information, I could later add that in here and and just attach it to the list of bands that we're including.
[46:51] So next we're going to create a variable called image, and we are going to take composite new, which is again our
[46:57] Landsat 8 composite. We are going to select these bands, and then we are going to clip it to our
[47:05] study area. Next we need to actually assemble samples for the model. The way we do that is we use sample
[47:17] regions, and this is going to work over our image collection, and it is going to take our collection
[47:25] that we created, our classes, which is again our mangrove versus not mangrove training data. It's going to look through this data set
[47:34] for the land cover property, and it's going to use that and attach that to the image. So
[47:43] for these areas, at these pixels, it is going to get information on what the values are for each of these bands.
[47:54] And then finally we are going to attach a column to this with numbers. And this is going to be used for a first test of
[48:02] the model's accuracy. This will not be an independent accuracy assessment, so just take note that the numbers that we're going to be seeing
[48:11] here do not reflect the actual accuracy of the model. Instead, it's going to help you determine how well the model
[48:20] fits itself. So, it's more of a sanity check than actually looking at quantifying the accuracy of the model.
[48:32] Now, we are going to end up splitting our data, and we are going to take 80% of the data within our sample variable
[48:42] and use it to train the model, and we are going to set 20% aside for testing. So, again, testing that model's fit to
[48:49] itself. itself. So, we take this random column, and we set up a filter. So, we use dot
[48:55] filter, we create an integer filter, and we are going to take a split of that data based on this random column, and
[49:06] we're going to take 80%, and we're going to use it for training. training. So, we use LT to determine like to
[49:15] determine less than our split, and we are going to use GTE greater than or equal to to subset 20% of the data
[49:24] for our testing. Now, we can print these different variables to see how much training and testing data we are actually using. So,
[49:34] how many pixels are we using to train our model? And if we run this, it's going to compute that number for
[49:44] us. So, we can see this is our total for pixels available for our samples. And then since we subset 80% of our data
[50:03] for training, this is how many pixels are actually used to train the model. And as you add training data, if you
[50:11] decide to do that, you'll see these numbers change. Finally, we are going to actually set up our random forest. So here we're using
[50:26] dot smile random forest, which is an update from dot random forest in Google Earth Engine. We are going to run the model using 100
[50:35] trees and five randomly selected predictors per split. And if we want more information, we can always go back over to the docs tab and
[50:46] we can type in dot smile random forest. You'll see there are a number of different classifications available. So cart is
[50:53] another one you could use. Um but today we're using random forest since it's a fairly robust machine learning
[50:59] algorithm. algorithm. We can see that by using dot smile random forest, we create an empty random forest classifier and we can provide
[51:09] different arguments. So the number of decision trees to create, the number of variables per split, um and so on.
[51:16] So if at any point you need any more information about some of the code we're using, I highly recommend you just type
[51:23] in things in to the docs tab to get more information. So for smile random forest, we're going
[51:34] to to create a variable called classifier. We're going to use ee.classifier.smile random forest. This is going to create
[51:44] again an empty random a forest classification that we then provide information for. So, using 100 trees with five predictors
[51:54] per split, so each split it's going to look at five of these bands. So, it won't look at all
[51:59] of them, it'll just look at five randomly selected bands from that list. And then it's going to train that model
[52:07] using our training data and selecting not only our bands of interest, but also the land cover defined by that training
[52:17] data. data. So, it's going to pull that land cover property from our classes variable, and it's going to use our bands as our input
[52:25] properties. So, just by running that we see again, we only still have numbers for our training data
[52:34] and we need to actually do a little bit more to see what that did. So, first let's check the
[52:43] validation of our model and see how well the model fits itself. We are going to use testing.classify.
[52:51] testing.classify. So, this is actually applying our classification classification to our testing data to see how well the
[52:59] model model classifies that testing data now. And we are going to use an error matrix using land cover, which is our input and
[53:08] classification, which will be the output value that the model gives us. And if we print these, we'll see that ee. machine calculates a
[53:21] confusion matrix for us and then provides us with the overall accuracy. accuracy. So, this number should be very close to
[53:30] one, because again, the model is kind of testing itself against itself. We will do an independent accuracy
[53:38] assessment in QGIS to see how accurate the model actually is. So, this model should be fairly close to
[53:46] what it thinks of the current accuracy that we're looking at. Now, we have to actually apply the
[53:53] classification classification to our Landsat imagery. So, we're going to take this variable classified RF using our Landsat imagery,
[54:05] selecting the bands of interest, and then classifying it with our classifier. So, applying the random forest. Now, something that I've added here that
[54:17] is optional is that we can clean up the model before we we manually clean it. And we can use that by reducing noise.
[54:28] So, essentially, what these two lines of code are doing by creating this pixel count, a count mask, is we are looking
[54:35] at all the pixels within the results model, looking at if any of them are unconnected to other pixels. So, we are
[54:44] going to create an image that shows the number of pixels each pixel is counted to, which is
[54:51] done with this counted pixel count. And then we are going to filter out filter out all pixels that are connected
[54:59] to four other pixels or less. So, rather than having random pixels appearing in areas across the landscape that may be
[55:07] defined as mangrove, we're going to eliminate those because it will clear up the model a bit and
[55:14] make it less noisy. And then these are created as masks, so we need to then apply them.
[55:25] And we are going to also create a mask to show us just values of mangrove. So, the final classification is going to
[55:34] give us a map of mangrove and non-mangrove areas, but since we're only interested in mangroves, we can use
[55:40] {dot} select classification, which is going to be a band that contains land cover values, so mangrove or not.
[55:49] And then we're going to select values that are greater than zero. So, any value that is one is going to be
[55:55] mangrove. mangrove. And then we create this new variable called {class} and it is going to use this classified RF and update a mask
[56:05] using this count mask and class mask. And finally, we are going to add these classifications to our map.
[56:21] So, we'll see here where I've used map {dot} add layer, I've pulled in our {class} image, so our final model.
[56:29] I've given it min max values of one cuz again, we're only displaying mangroves, and then I've just used palette to give
[56:36] it the color blue. And you'll see that it's displaying across our study area. I can already see that there may be some
[56:45] problems in it, so we'll see later on how we may want to adjust that. But first, something that we can do
[56:53] fairly quickly to see see how how accurately think the model is from a visual standpoint, we can compare our
[57:02] results to another available data set. So, in this case, we are going to use Global Mangrove Watch.
[57:11] So, So, I'm going to create this GMW layer and I'm going to call in an image from a
[57:21] image collection that I already have or an image I already have available in my projects. projects. And then I'm going to add
[57:29] this layer to my map as well, and I'm going to color it green so I can distinguish it from the two of them.
[57:37] And to make it a little bit easier, I'm going to zoom in. You'll see the blue of our map
[57:58] displaying. And then you'll see the green of GMW. And I can either toggle these on or off
[58:08] or I can just play with the opacity of my layer. So you can see that I am still picking
[58:14] up a lot of mangrove in areas where GMW is not picking them up. I can refer back to my Landsat composite
[58:22] to see if I feel like that is accurate. I think these areas are a bit too bright, which means that they are less
[58:30] vegetated, so there's probably not mangrove there. So there are a number of things that we can do to adjust our model. You won't go
[58:39] and do them in detail right now, but again, one thing we could do is we can adjust our study area. So for example,
[58:47] in places like Guyana, mangroves are really found really close to the coast. So I could pull in my study area to hug
[58:58] the coast much more tightly and get rid of these inland patches that I think are unlikely to be mangroves.
[59:06] And some of this really just depends on some prior knowledge that you already have about your study area.
[59:13] Other things that we can do is we can add to our training data the way I showed before.
[59:20] And we can also play with the numbers of our trees and our splits. So, these are all places
[59:30] where you can adjust your model in Earth Engine after your first run. So, just know that that is available to
[59:38] you as you continue to make better and better models. But for now, we're going to move into our time series comparison.
[59:46] And for that, we are going to pull in Landsat 7 imagery. So, up at the top, you'll see that I
[59:54] have already imported Landsat 7 surface reflectance tier 1 imagery. Again, you can search for it up here.
[1:00:09] But I've already imported it and I've already verified that this is the image collection I want to use.
[1:00:15] And so, back down with our time series comparison, again, we're going to create a function to add spectral indices for
[1:00:23] mapping to our Landsat 7 imagery. And this time, we have to create a different function. This is because Landsat 5 and
[1:00:33] 7 have different band numbers from Landsat 8. Landsat 8 also collects images in wider slots. So, we need to
[1:00:42] assign spectral indices using a different function. As you get more advanced with Google Earth Engine, there are examples for how
[1:00:50] to harmonize Landsat 5, 7, and 8. But for the purposes of this training, we are just going to create another
[1:00:56] function. So, you'll see I'm still calculating my NDVI, NDMI, NDMI using normalized difference, but instead of the other
[1:01:08] bands I was calling in, I'm using bands 4 and 3, and so on and so forth. So,
[1:01:13] you'll see that these numbers are a little bit different from the initial function we used to add indices to our
[1:01:20] Landsat 8 imagery. We are going to apply some of the same filters that we used before. So, this time our year of interest is
[1:01:33] going to be 2009. So, we are going to perform perform uh decadal comparison. Again, you'll see we have three data for
[1:01:42] start date and end date. I'm not going to go into all of this again in too much depth because a lot of
[1:01:49] this reflects the code that we used previously. previously. We will then apply the same filters to our imagery. We can reuse our mask
[1:02:01] clouds function to mask out clouds because this refers back to the same band name that we used for Landsat 8.
[1:02:09] So, we're going to use dot map to add our mask clouds to mask out those areas that we're not interested in because
[1:02:15] they don't have enough reliable data. And then we're going to use it to add indices to our Landsat 7.
[1:02:25] Again, we will composite this data using median and then clip it to our study area. And we are going to mask two areas of
[1:02:34] low elevation and high NDVI and MNDWI. Again, in this case we can use the same number values, so 0.25 and
[1:02:46] negative 0.5, but we have to use the band associated with Landsat 7 so that we get an accurate depiction.
[1:02:57] We'll apply these masks. And we can use the same elevation mask because we're relying on SRTM for that.
[1:03:09] So, we'll display these results and see how that differs from our Landsat 8 imagery. imagery. I'm going to turn off
[1:03:19] our model results for now just to make it easier to load and visualize. So now that we have our Landsat
[1:03:55] composite for 2009 and our composite for 2019 displayed, we can toggle between the two to see if
[1:04:03] there's any obvious changes. So right now we're seeing 2019, this is 2009. 2009. And so already we can get a picture. For
[1:04:12] example, if you look at this area here, we see some changes happening in the vegetation between 2009 and 2019.
[1:04:20] So we can see that this area looks like it actually may have expanded. Or Or this area actually may have been lost
[1:04:42] within those years. So already we're getting some sort of sense that there have been changes in vegetation
[1:04:50] during this time period. So next we need to figure out how to quantify that. Again, we're going to create a series of
[1:04:58] training data. So here I created new geometries for mangrove versus not mangrove. So mangrove 2009, let's make sure that I'm looking at the
[1:05:11] right layer. Now would say that this area is probably So, you would go through the same process of
[1:05:24] creating polygons for mangroves and non-mangroves so that you have an entirely new set of training data that
[1:05:32] is specific to that year. We are going to define the bands that we want to include. You'll see it's same
[1:05:40] list of bands even though the numbers are different. We're still using the same same um same color bands.
[1:05:49] And then we are going to create a new variable for our L7 image using our Landsat 7 composite with our bands of
[1:05:57] interest. And you'll notice we're just going through the same process of creating samples specific to our image with our
[1:06:07] training data for 2009 looking at our land cover properties within that data. We are subsetting our training data
[1:06:17] based on this random column so that we have some subset to test the model. I'm going to skip printing these, but
[1:06:26] you can print that data if you would like just to verify how much training data you have for each year.
[1:06:34] And then we assemble our random forest classification. So, we create this variable L7 classifier. We again use
[1:06:41] ee.Classifier.smileRandomForest. We use the same number of trees and predictor variables, the same bands, and then we run it with our Landsat 7
[1:06:52] training data. We then classify this model using our L7 classifier. And again, we can clean this up using
[1:07:06] our pixel count and count masks. So, So, we again create a new mask so that we are only looking at results for areas of
[1:07:17] mangroves, and then we apply these masks, so our count mask to filter out noise, and then our class mask to help
[1:07:26] us display only mangroves. And we can now add this layer to our map. And to make it easier and faster to
[1:07:41] display, let's turn off some other layers, layers, and I'll zoom in to that same area that we looked at
[1:07:51] earlier. And we'll see how that map has changed from just our first iteration. So, let's zoom into a nice big block
[1:08:10] like this. Again, our blue layer is going to be our extent map for 2019. And then our 2009 extent map is going to
[1:08:21] be the screen layer. So, I can see because there is some modeling in this area, and it looks like
[1:08:28] this area is now agriculture, these are areas that I may want to clean up in future iterations of the model,
[1:08:36] but for now, let's just compare this this big chunk where it looks like both models picked up as being mangroves.
[1:08:45] Again, we can just play with the opacity of that and see how those areas have changed over time.
[1:08:54] Now, if this model is accurate, it looks like that this is displaying that there was actually mangrove growth.
[1:09:00] I would want to verify the accuracy of the model and work through a different a few different iterations of cleaning up
[1:09:08] the model before I say that's a trend that I can actually um follow. But, just to go ahead and see what some of
[1:09:21] the results of this sort of classification give you, we're going to go ahead and calculate mangrove area for
[1:09:28] our different years. And we do that using a reduced region to calculate the sum of pixels within our model that are going to be
[1:09:42] mangrove. So, we're going to use L7 class class and that is referring to our masked Landsat image. So, only
[1:09:52] areas of our model that are mangroves, we're going to multiply this by our ee.image.pixelArea ee.image.pixelArea to get the actual
[1:10:03] scale of each pixel rather than getting a count of pixels. We're going to convert that to hectares by dividing it
[1:10:11] by 10,000. And this is where we apply reduced regions to get the sum of all pixels within the model.
[1:10:21] I'm going to use a scale of 100. You want to try to get the scale to be close
[1:10:26] to what the Landsat scale is, which would be 30. But, sometimes that runs pretty slowly, so I upped it just to
[1:10:34] show you an example of how this calculates. calculates. And then, we are going to print those results.
[1:10:43] So, now we have our values for mangrove extent in hectares for 2009, and we're going to do the same for 2019 so that we
[1:10:50] can compare values. So, we can see that these do change between 2009 and 2019. It looks like from the initial run,
[1:11:03] there's actually a significant mangrove growth, but I don't think that's an actual trend. I think that that is an
[1:11:09] indicator indicator that I need to refine my model a bit more, test the actual accuracy before I
[1:11:16] can see if that trend is displaying truth. So, for the last part of the code, we will be actually setting up to run this
[1:11:28] independent accuracy assessment. So, we are going to create stratified random sampling points in Earth Engine to use in the class accuracy plugin in
[1:11:37] QGIS. So, the way we do this is we create a variable for our stratified random samples. samples. We can take our final classification, so
[1:11:50] classified RF, and then we're going to use {dot} stratified sample to create a number of random samples.
[1:12:00] So, we are going to use 150 points per class, class, which means that there will be 150
[1:12:09] points for mangrove and 150 for non-mangrove. non-mangrove. We're going to use the classification band to determine that information, and
[1:12:17] we're going to look at a scale of 30. And you can adjust this number higher or lower depending on if you feel like this
[1:12:26] is a robust accuracy assessment or if you um want to run it more quickly just to get a first test of it, you can
[1:12:32] always lower this number so you can get a feel for how the accuracy assessment runs. Next, we actually want to add a buffer
[1:12:46] to these points so that we can look at points with a 30-m diameter radius, and this will reflect the scale of the
[1:12:56] Landsat imagery that we are also looking at. at. So, to do this, we're going to create a
[1:13:01] function function using using our classification values, and we are going to set a buffer of 15 m, so a 15-m
[1:13:12] radius or 30-m diameter buffer around each point from our stratified samples. samples. And after creating that function, we
[1:13:22] then map it across those samples. The last thing that we need to do is we need to export layers of interest. So,
[1:13:33] a couple things we might want to do here is we might want to export the results of our model, so export our final maps.
[1:13:42] We do that with these lines of code, export.image to drive, and we just make sure that we call in
[1:13:49] the correct image. We give it a description that's meaningful to us. We set a scale, and then we include max
[1:13:57] pixels because sometimes Earth Engine um runs out of space, so if we define max pixels, sometimes we can get it to give
[1:14:04] us a bit more um um memory to actually run that export. And then for our stratified random
[1:14:12] samples, we are going to use export.table to drive, and we are going to take those stratified points
[1:14:23] and export them as a shapefile. And now if I run my data, you'll see that if you if I run my code, you'll see
[1:14:30] that my tasks tab lights up, and you'll see I now have three different different objects I can export. So, if I click
[1:14:40] run, run, you'll see it's already it's um already going to my drive. I could also export it as an asset to go straight
[1:14:48] back into my Earth Engine assets. But, since I'm exporting this to QGIS, I'm going to export this to my drive.
[1:14:58] And I'll run that. And then you could also run these other images to export to drive. Now, I'll run those, but we will not be
[1:15:09] working with those for the rest of the day today. Um Um I recommend playing around with exporting images and
[1:15:18] tables so that you're familiar with the process. Images take a lot longer to export than tables. So, I'm just going
[1:15:25] to let this run, but we will not be using these for the rest of the tutorial. And for next week's tutorial,
[1:15:33] I will actually be providing you with images that I've already created. So, if for some reason you struggle with the
[1:15:41] export or it's taking too long, just know that we will be having images available for you to use for the last
[1:15:47] part of this workshop. So, now we'll be moving over to QGIS to use the class accuracy plugin.
[1:15:56] If you have not already installed it or have had any trouble installing it, just remember to refer back to the
[1:16:02] instructions on the ARDSET website. You will be downloading a file that contains a readme file, and the readme file needs
[1:16:11] to be taken out, and you can zip together the main class accuracy folder and install this into QGIS.
[1:16:21] So, this plugin was created by Dr. Peter Bunting, and this tool takes the user through each randomly stratified point
[1:16:28] that you provide. And essentially, you are visiting each point and then defining whether the point was accurately classified the model or not.
[1:16:37] The result is an assessment of the overall accuracy of the model. So, moving into QGIS, the first thing
[1:16:48] that we want to do is we want to add our our stratified random points. So, you can
[1:16:56] see that I've done that here. And these points will display here. And you'll see that they're they're
[1:17:05] pretty well stratified across our land cover. And then we are going to choose some satellite imagery to have in the
[1:17:14] background. So, in this case, I've used Bing aerial imagery. You can also use Esri World Imagery. If you have access to other data sets
[1:17:23] such as WorldView imagery or imagery that is more specific to the time period of interest, those can also be really
[1:17:34] great to use and really effective in QGIS. QGIS. But for now, we'll use the Bing aerial. So, I've already gone ahead and I've
[1:17:46] installed the Class Accuracy plugin, and it will now appear under your plugins. And we can see it here.
[1:17:54] Before we go into that, we need to check a couple things within our attribute table. So, right now we just have our
[1:18:06] classification output from the model. But we need to make sure that we add a couple of columns for the processing.
[1:18:15] So, we need to ensure, first of all, that all of our columns are in string. So, for example, if you had a data set
[1:18:22] where classification, instead of being one, was mangrove spelled out in string, you could also use that. So, we are going to edit this.
[1:18:33] And we are going to add three columns. The first one is going to be class. We're going to make sure that it's text.
[1:18:46] We will add another one for output. Again, make sure it's string. And then finally, we are going to add
[1:19:04] one one for for process. If you don't have these in string, you will get an error as you try to run the
[1:19:16] class after you see Python. So, we are going to fill in this class column using our field calculator.
[1:19:26] And we're going to update an existing field. field. And we are going to update our class field, and we're going to say that it
[1:19:35] equals our classification output from Python. So, So, so you can take out that equal sign. Give it okay, and we see that it's
[1:19:50] filled in. Now, these other columns remain blank because we are going to have those filled in as we move through
[1:20:07] our class activity Python. So, we can close, we can save our edits. We can stop editing, and we can close
[1:20:14] out of this. Now, we can move into our class activity plugin. You'll see here that we have this new
[1:20:23] pop-up, and we can select a vector layer. In this case, we've only got one loaded, so I know it's easy.
[1:20:29] And then we We to select our column. So, our classified column, which is the column that has the points classified by
[1:20:37] the model. We're going to select class, because that is our new string column. An output column, and our output column
[1:20:45] is going to contain the values that we as a user assign to each point. So, for example, if a point is classified by the
[1:20:55] model as mangrove, but we as a user see visually that it should not be mangrove, it will be marked as not mangrove in
[1:21:03] this column. And then this process column is just to help track which points have been processed. And I like to click visit process points
[1:21:11] in case I want to return any points that I have second thoughts about. And we just hit start.
[1:21:20] And you'll notice that we start visiting each of our points. Again, once it gets to our inland, it's
[1:21:56] not not this dense vegetation that we're seeing like in this patch over here. And I'll just click through a few
[1:22:04] points, so you that you can get a feel for for how this actually works. And you may get some that you're not
[1:22:21] sure. This one I think maybe mangrove, and I'm going to classify that as mangrove, but I can make a note
[1:22:29] and I can see that this is 0.4. So, I can always revisit it if I decide that I'd like to. And I can also go to a
[1:22:39] specific feature. So, let's say I want to to revisit feature 136. I can type it in here.
[1:22:46] here. I click go to and I can see this feature specifically. specifically. So, once you have done all of this, you
[1:22:54] will click calculate error matrix and this will produce an Excel file for you outside of QGIS. So, I've already gone ahead and run
[1:23:09] through all of the points and and I can see what the overall accuracy of my model is and right now it's about 78%
[1:23:20] which is okay. I would like it to be better. So, in that case I would go back to my model
[1:23:26] in in um Earth Engine. I would try to make some changes. I would run a new accuracy
[1:23:33] assessment. assessment. And there are ways to take the points that you created through QGIS to plug them back into Earth Engine to make it
[1:23:42] easier to run the accuracy assessment in mail. mail. But, class accuracy actually divides this Excel spreadsheet with the
[1:23:51] overall accuracy and then it shows us the error matrix. So, we can see that 85 of 115 points I ended up using were
[1:24:02] considered to be not mangroves. So, 85 of those 115 not mangrove points were correctly assessed. And then 122 of 130 points
[1:24:14] for mangroves ended up being accurately assessed. And you can see that in this case I had added in a couple of other
[1:24:23] categories. So if you're noticing that you're seeing areas that may be in between or aren't really classified as either. So
[1:24:33] in an example where you have multiple land cover classes, class accuracy allows you to add these as land cover
[1:24:38] types as you saw me add that zero as an option. option. And then down below you can see what the
[1:24:44] actual accuracy is for each land cover category. So we'll see that here non-mangrove was assessed a bit better than mangrove.
[1:24:56] So this is how we start seeing how well that model is actually performing and then move forward in improving the
[1:25:04] model. So to recap over the course of this lesson we covered how to map mangrove extent during two different time periods
[1:25:14] so that we could run a time series analysis analysis and then we went through one example of
[1:25:19] performing an independent accuracy assessment of that model. There are tools outside of TIA's and outside of this class accuracy plugin but this is
[1:25:29] providing one such tool that does a really good job of helping you assess the accuracy of model of a model that
[1:25:35] you produce with your extension. For the final part of this workshop we will go over creating country specific
[1:25:41] apps and we will also have example applications of results from mangrove mapping and other analysis. So next we'll be moving into the
[1:25:53] questions and answers section of this workshop. workshop. Please feel free to post any questions into the Q&A box. Any questions will be
[1:26:04] posted on the training website so if you're unable to answer your questions during during the workshop feel free to follow up with
[1:26:12] the conclusion of the course and homework will also be available now on the outset website for this training.
[1:26:21] Again, here is our contact information. If we are unable to address your questions over the course of the Q&A
[1:26:27] session, and if you have general outset inquiries and need access to the outset website, here are links for that.
[1:26:36] So, thank you so much for joining the second part of this training, and we look forward to having you join us for
[1:26:42] the final session next week. Okay, great. So, we're going to move into the questions and answers portion.
[1:26:54] Um I know that we're close to the scheduled end for this webinar. I can go until um quarter to noon, so 11:45 Eastern
[1:27:04] Standard Time. Um Um and then anything that we don't address today will still be available through the uh outset website for this workshop.
[1:27:14] We'll still be answering any questions that you have that we weren't able to address. address. Um Um one thing that you may have noticed
[1:27:22] towards the end is that we had um an issue with the class accuracy plugin where we weren't actually didn't realize
[1:27:29] that we didn't record the pop-up where I was moving through the different points. There is a picture of what that pop-up
[1:27:39] looks like in the PDF version of the presentation. presentation. And um there will be more details available. You can also have access to
[1:27:48] what it looks like through the links we provided for installing the plugin. There's more information there. So,
[1:27:54] hopefully hopefully um um that helps. So, apologies for that issue. Okay, so the first question, how do you
[1:28:04] deal with the SLC error of Landsat 7 between 2003 and 2014? So, Earth Engine already masks this
[1:28:12] error for Landsat 7. So, if you were to pull a single image, essentially, you would just see stripes because it's
[1:28:20] already masking out uh places where that imagery is missing. To compensate for this, we end up taking
[1:28:26] a mosaic of several Landsat images. So, if you'll remember from going through the code, we're pulling imagery from
[1:28:34] either side of the year that we're interested in, so that hopefully we're getting enough pixels that we can have a
[1:28:40] clear picture of that error area. Question number two, how can we unfold the black box and prepare our own
[1:28:49] algorithm according to our own needs? So, understanding the black box and preparing new machine learning algorithms uh
[1:28:59] requires a deeper understanding of machine learning than what I have and what um a lot of uh
[1:29:07] folks in my lab have because we are using it as a a tool that we know works.
[1:29:13] Generally, we are interested in using models that someone else has already proved to be robust. So, I would say if
[1:29:21] this is where your interests lie, then uh you would have to delve further into a study of machine learning. Um so, un-
[1:29:31] unfortunately, I don't have a a really uh clear answer to that just because that's uh the limits of my own
[1:29:38] knowledge. Question number three, uh is there a reason you choose QGIS 3.10 versus 3.14? You can really use either. We chose 3.10
[1:29:51] cuz that's what I had on my computer. Um and I tend to have more difficulty installing new software onto this
[1:29:59] machine, so I went with what I already had. However, someone actually emailed me between sessions to say that they
[1:30:05] were able to install the plug-in on 3.14. So, you can definitely use the plug-in on other versions of QGIS.
[1:30:15] Question four. I have some doubts in exporting the mangroves data from GEE. I'm trying to export the data with a
[1:30:23] resolution of 10 m. The GEE shows an error that it cannot be exported because of greater pixel size. So, what should I
[1:30:31] do to reduce the pixel size? So, if you're trying to export what we worked on today or something based on
[1:30:40] Landsat imagery, the spatial resolution is going to be 30 m. So, I would export at a 30-m resolution to match that. Um
[1:30:49] in that case, trying to extrapolate to a 10-m resolution is not really going to yield accurate results anyway.
[1:30:57] Um if, however, you're working with a different data set and the resolution is that fine, what you may have to do is
[1:31:04] export the data in smaller in in batches. So, essentially, you could create several geometries that cover your study area and export for each
[1:31:15] individual geometry rather than across the entire study area. Um question five. Can we use this method to predict future
[1:31:27] extent and distribution? So, So, not I I wouldn't say you can make robust predictions based on the methods that we
[1:31:36] used today. You can potentially extrapolate extrapolate trends of loss. So, you could make statements like if loss continues at the
[1:31:45] rate that we have seen to date, this is how much mangrove would be lost into the future. But, in terms of mapping where
[1:31:53] that loss would occur, um the losses that we're seeing are attributed to several different factors. They could be attributed to erosion, to
[1:32:04] conversion to uh commodities, to urbanization. And so, some of those things we don't necessarily have models that we can
[1:32:14] use to project mangrove area. So, it's a bit different from model projections like climate models uh because these
[1:32:23] drivers vary. So, it's it's definitely more robust if you're looking at changes from past to present. Okay, question six. Um as you write that
[1:32:38] code in Earth Engine's website as JavaScript, but in QGIS with a GEE plugin, it will be Python. So, in this
[1:32:47] case, you uh could you I think it's could you provide the GEE code in Python as well? Um I do not
[1:32:56] have this code in Python since I primarily export what I've done in Earth Engine to QGIS, and I work with the user interface
[1:33:05] portion of QGIS. Um there are capabilities of using Earth Engine directly through QGIS as you mentioned, but it's it's not something I've been
[1:33:14] able to explore yet. So, this code that I've provided, I only have in in JavaScript. Uh question seven. What is the median
[1:33:26] reducer? Is it a filter? Can any other filters be used to remove cloud contamination? contamination? Um that's a great question. So, the
[1:33:34] median reducer is essentially filtering through all of those Landsat images that we collected, and for each pixel, it's
[1:33:42] grabbing the median value. And that kind of helps create a a cleaner mosaic that's cloud-free. However, you can also use other
[1:33:53] operators. So, you could use um maximum, but it tends to yield a cloudier image, and you can also use dot
[1:34:01] quality mosaic, and this essentially uses a default to grab the the {quote} {unquote} best pixel value for that stack of images that you've
[1:34:11] assembled. assembled. Uh question eight, I would I would need to be rephrased. Um can you please explain why FCC is more useful than TCC
[1:34:21] for identifying mangroves? Um I'm not familiar with those um acronyms, so if you could please clarify that question.
[1:34:30] Okay. Question nine, the instructor is adding and removing comments double slashes from lines of code to run
[1:34:37] portions of the code. How is this done? If you are on a Mac, you can hit command
[1:34:42] and slash on after you've highlighted a line. On a PC, it's control slash. Question 10, in Sundarbans, mangroves of
[1:34:53] Ganges uh from a from a picture delta region, elevation shelling and SRTM is zero or negative Z values, so how to correct it?
[1:35:05] Um while the video is playing, I checked in Earth Engine, and I wasn't having this issue, so I can't really say
[1:35:13] more about what's going on until um you know, I could I could look at your code for you, but I'm not really sure
[1:35:18] what's going on. Um Um Question 11, is it better to use points or polygons for the classifications?
[1:35:27] So, polygons are really great if there are areas that are uniform. It It makes it easier to collect a bunch of training
[1:35:34] data at once. Um and if the Landsat imagery imagery looks very clear, like this area is mangrove, this area is not, it helps us
[1:35:43] build our training data much more quickly, and points can be really helpful for refining the model, but
[1:35:48] honestly, you can really use either. It just depends on if you want to save yourself a bunch of clicking,
[1:35:55] then polygons, if the area is is pretty clear to pick out um the different land cover types, I would go with those just
[1:36:04] in terms of um efficiency. Okay, question 12. In general, how many pixels should a training area cover?
[1:36:15] It This one is is not really something I have an answer for or could give you an
[1:36:20] answer for. It depends on how clear that area is. So, for example, if you're working in a stark contrast area where
[1:36:30] it's desert versus vegetation, you may not need as much training data to train the model. Um in areas like this, where
[1:36:38] we're picking out different types of vegetation, you probably need more training data. So, it's one of these
[1:36:44] things where you generally start with fewer pixels or fewer polygons, and you test the model, and then you add more as
[1:36:53] you refine the model. You don't want to start with a bunch of training data at once because it can slow Earth Engine
[1:36:59] down without necessarily providing um help to the model. So, you kind of just want to start small and then work your
[1:37:07] way out. Question 13. Can you explain the random forest model again? Is it a sort of hierarchical clustering?
[1:37:18] Uh so, yes, the The model works through a series of decision trees, so essentially a hierarchy, and there are
[1:37:25] several trees for each pixel. And what's happening is that each tree is going through a series of decisions, and then
[1:37:32] coming to a vote on the classification of a pixel. And so, the majority of votes from each of the trees for a
[1:37:41] single pixel will decide what the pixel is classified as. So, if the majority of trees are coming to the conclusion that
[1:37:48] a pixel is uh mangrove, then that's what the pixel will be classified as by the model. Uh question 14, how do you know if you
[1:37:58] have too much training data? So, the quickest way to figure this out is that Earth Engine will just time out on you
[1:38:04] or give you an error for memory limit exceeded. Um and sometimes you can tell if you provided too much training data,
[1:38:13] it may you can look at your map and um it just may not be as accurate because
[1:38:20] you've given it too many um contradictory pixels. But generally, the quickest way to find this out is that
[1:38:27] Earth Engine will just time out on you. Question 15, how do we know the dates of the satellite imagery we're using? That
[1:38:36] is to say, day and month of 2009 or 2019 or is it an annual average? So, the
[1:38:43] pixel we use So, the model we use pulls each available image from the study period that we specify.
[1:38:52] So, rather than it being a pre-made annual average, we are we are going pixel by pixel selecting the median
[1:39:01] value for each pixel across that study period. And we are essentially filtering through all those available images and
[1:39:09] picking out the best pixel. So, each So, one pixel may come from October in 2019, another pixel may come from September,
[1:39:18] um but that was the best pixel from that image stack. So, you could use the inspector tool, I believe, to get
[1:39:26] information, um but it it would I think to get for each image of each year, you would have to
[1:39:35] run a different analysis. Um but I I hope that helps a little bit just to clarify that's not an annual
[1:39:41] average. average. Okay, question 16. I guess all the signatures were made once for both pre post years and then
[1:39:52] same training data was used for classification 2009 and 2019. Does the Google Earth Engine base map satellite
[1:40:01] um um Sorry, could you scroll up? Thanks. Thanks. Um Um does this Google Earth Engine base map
[1:40:10] satellite switches back to 2009 when I call my image of 2009? Is it okay to redraw signatures for 2009
[1:40:17] separately for the purpose of classification, too? Um so, I wasn't sure I completely understood this. I think you're
[1:40:25] referring to the training data we created and we do create training data specific to each year of interest. So,
[1:40:31] we create training data for 2019 and then we create additional training data for 2009. Um now, in terms of the I think there
[1:40:40] were two questions here. The other question about the base map, so the satellite imagery that or um Earth
[1:40:47] Engine just provides as an option for the background, um it we don't know what year this is from, so we don't want to
[1:40:54] rely on it for the classification. It will It will not switch back between 2009 and 2019. Only our Landsat data is
[1:41:02] doing that because we specifically called it in that way. Okay, question 17. Could we select a location using polygons and points and
[1:41:15] then the computer Earth Engine tells us the possible bands we can use we can select instead of telling the model the
[1:41:21] bands a priori. Um I don't personally know how to do this ahead of time. Um however, what you can
[1:41:30] do is you can run the model and you can use dot explain. This will print out how
[1:41:36] much each band is contributing to the model and from there you could change the inputs and you can provide
[1:41:43] additional bands or remove a band that isn't really helping the model. Okay, question 18. How is Python used instead of JavaScript
[1:41:56] in Earth Engine? There is a Python Python plugin for Earth Engine, but it's still a bit clunky from last time I heard. You can
[1:42:04] use the QJ SG plugin as well, but I find that JavaScript is the best option for now. So, um of course this it's easier
[1:42:13] to use a coding language you already know, but sometimes coding languages you switch between them depending on which
[1:42:20] tool you're using and so I just work in JavaScript for Earth Engine. Uh question 19, why did you create a
[1:42:30] Landsat 7 mask instead of a Landsat 8 mask? So, if I'm understanding this right, for the second part of the
[1:42:37] tutorial we were looking at 2009 imagery, which is not available through Landsat 8. So, for that reason we
[1:42:45] switched to using a different satellite, Landsat 7. Okay, um question 20. When we cloud mask the collection, how
[1:42:57] likely is it the median composite would have the masked pixel? If still there exists if there's still a masked pixel, how do
[1:43:08] we resolve it? So, you can still have masked pixels. So, um um after you mosaic your image collection,
[1:43:17] you may notice that there are pieces of the Landsat data missing. One way to work around this is by expanding
[1:43:25] the study period that you are pulling Landsat data from. So, for example, if you're looking at a year on either side
[1:43:32] of 2009, but there's still a lot of data missing, you would then maybe look at an additional year, so 2007
[1:43:41] through 2011. And then hopefully across that whole study period, you would have enough pixels to have a cloud-free image
[1:43:49] mosaic. Um the other thing that you can play around with is other reducers, so you could use that quality mosaic um
[1:43:57] command instead of median, and see if that provides a better image. Um okay, as the median composite may
[1:44:07] have different bands with different time stamps stamps time time stamps would that impact classification? If yes, how to
[1:44:19] address? Right, so because we're pulling the median composite, we do have pixels that are coming from different times through that
[1:44:29] study period that we suggested. Typically, we just um are working under the assumption that it's going to be close enough to our
[1:44:41] time period that we're still getting a clear picture across the landscape as a whole. whole. Um this is why like
[1:44:51] I previous I for last question I just said that you could expand your study period. You don't want to expand it too
[1:44:58] far because then you are increasingly you're increasing the likelihood that you're going to be pulling pixels that
[1:45:05] are too far from your study period to um really be accurately saying this is a classification of the year that you're
[1:45:13] specifying. specifying. So yeah, I I would say that the the best way is to try to work within a smaller
[1:45:22] study period, so work within a year, and then only expand out if you need to. Can we use question 22? Can we use
[1:45:34] Google Earth Engine to determine the future pathways of a certain scenario? Example BAU versus green economy scenario.
[1:45:45] scenario. Um, I would say I personally do not work as much with projections and with future modeling.
[1:45:54] Um, Um, however, my instinct is to say that yes, you could you could do this with Earth Engine because in Earth Engine, if
[1:46:02] you already have access to raster layers and to model outputs, these are all things that similar to any other
[1:46:12] GIS platform, you can import these data sets and perform these models. So, I know that there that climate modeling is
[1:46:20] available in Earth Engine. So, I would imagine that these other scenarios um, you could you could run these analysis
[1:46:27] in Earth Engine. Um, I think I'll I think I'll be able to finish this off um, since there's only two more
[1:46:36] questions. questions. Uh, so question 23, is it possible to use pan-sharpened imagery to generate a classification map? What would be the
[1:46:44] advantages and disadvantages? Um, absolutely. So, I work with pan-sharpened imagery or um, high-resolution WorldView imagery to to
[1:46:55] generate training data. Um, what I generally do is I generate the training data from this imagery but still use the Landsat
[1:47:06] imagery to run the classification. The disadvantage of working with high-resolution imagery is that it is quite large, so it can slow down your
[1:47:17] analysis analysis and it can it's not as consistent as Landsat imagery. So, for example, you may have one really clear image for
[1:47:27] study area, but if you're trying to do some sort of annual analysis, um you may not get the same coverage
[1:47:34] each year. Um Um I would I would say that's the main Those are the main disadvantages of
[1:47:41] using the high-resolution imagery. Um and I do my You could run the random forest classification classification using the this pan-sharpened imagery as
[1:47:53] well, and that may give you an even more accurate um model, but it really depends on how much imagery you're using, how
[1:48:01] much it's going to slow down Earth Engine or whatever platform you're using, and um if you are trying to to do a time a
[1:48:11] one-time one-time um um picture of what mangroves or your land cover class looks like in a given year,
[1:48:19] or if you're looking at annual trends, and just from there how much data's actually available. And then last question, question 24. Is
[1:48:30] it possible to perform trend analysis of mangrove loss gain in Earth Engine? Yes. So, we um in the next portion of
[1:48:41] the workshop, we'll be going through creating a GUI or an interactive app through Earth Engine, and one of the
[1:48:48] things that we pull in is calculating the values of uh mangrove extent for the years that we
[1:48:55] mapped. mapped. So, what you could do, if you're not interested in the GUI side of things, is
[1:49:02] in the code that we used today, you can generate a mangrove extent map for each of your years of interest, and
[1:49:10] from there, you can calculate the total extent in an area, and you can also create um rasters of pixels where
[1:49:20] mangrove was lost or mangrove was gained. So, you can definitely do this analysis in Earth Engine. Okay.
[1:49:30] Okay. I think looks like that's it and we're over the time. So, thank you so much for
[1:49:36] joining today. These the the questions and answers session will be made available to all of you. So, if there's
[1:49:44] anything that you wanted to refer back to, this will be provided on the ARSET website. So, we are excited to see you
[1:49:52] next week for the last section of the workshop where we will be going over creating an app in Earth Engine. So,
[1:49:59] thank you again so much and hope everyone has a great day.
