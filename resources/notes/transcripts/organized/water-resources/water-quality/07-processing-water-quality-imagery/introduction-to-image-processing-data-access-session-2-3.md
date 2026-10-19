# Introduction to Image Processing & Data Access, Session 2/3

`https://www.youtube.com/watch?v=T1wLWzpgOVI` · id 26 · 1:42:54 · module 10 — Module 07 — Processing Satellite Imagery for Monitoring Water Quality

[00:03] So, wel- welcome everyone. Welcome back to the second session of monitoring water quality using satellite image processing webinar.
[00:14] Last week we saw an overview of NASA remote sensing satellites and sensors, uh which are useful for water quality monitoring.
[00:26] We had a brief review of how water quality is monitored using qualitative and quantitative methods. We also had hands-on exercise
[00:37] um specifically to look at chlorophyll concentration and sea surface temperature as HAB indicators, how they can be used for monitoring a HAB.
[00:47] So, we looked at Giovanni and Ocean Color, these two web tools to look at water quality parameters.
[00:58] And we looked at Chesapeake Bay and Lake Victoria. Victoria. These were two case studies that we did.
[01:07] This week now, we are going to move to a software software that is SeaDAS, which is used for image processing to
[01:16] derive water quality. So, this software allows you to look at level two data that we downloaded from Ocean Color
[01:25] web web last week. And so, we'll have details of this software today. We're going to have it
[01:35] as demonstration. Just a reminder that this is the asset website where all the training material is available.
[01:45] The homework based on exercise one that you did last week, that's also available here. The link is here in Google form.
[01:53] And so, please do the homework online. And here's the Arset listserv. Just as a reminder that you can join it
[02:02] to keep in touch with Arset activities. So, today we're just going to have an overview of SeaDAS.
[02:12] We'll have demonstration in which we will analyze MODIS images using SeaDAS. And again, we'll focus on Chesapeake
[02:19] Bay. Bay. Then, you can repeat this exercise for Lake Victoria using SeaDAS. So, between last week and this week, you
[02:29] must have downloaded and installed SeaDAS on your computer as it was instructed last week. And so then, you will be able to use
[02:38] SeaDAS to do image processing. We're also going to have a demonstration of downloading Landsat uh operational land imager images or OLI
[02:48] images. images. We will do that for Lake Victoria. Next week then, we will be processing these images. These are high-resolution
[02:58] images for Lake Victoria. How to use them and how to process them, uh that will be demonstrated next week.
[03:07] So, today then, what we're going to do is start with SeaDAS demonstration and then work with the data.
[03:16] So, overview of SeaDAS, and we want to acknowledge Daniel Lots. Um he is the one who is developing Sea- a part of
[03:25] SeaDAS team developing SeaDAS software. And he has helped us um in uh answering some of the questions with SeaDAS.
[03:34] He will also be available later to answer your questions about SeaDAS. Here's the website where you can get a lot of information
[03:45] about SeaDAS, but you already have downloaded SeaDAS, so you've seen this site. It's a comprehensive software package.
[03:54] See that? It processes and displays and analyzes analyzes um data. Water quality data. You have latest version of SeaDAS here that is 7.5.1.
[04:10] So, SeaDAS actually was developed in collaboration with European Space Agency. Agency. Uh their software is called Beam and
[04:18] SeaDAS is based on that. Some of you who may have used SNAP software that is similar to this, too.
[04:28] There's online documentation, download, and tutorials which are all available available from SeaDAS website. SeaDAS is available as a graphical user
[04:40] interface or GUI as we are going to use it here. But there is also a command line version
[04:46] that you may use to do bulk processing. So, so once you go to SeaDAS site, you know that it you can download it.
[05:01] There is configuration requirement available from SeaDAS site. What else is needed? So, you need Java, you need Python, Git, Curl, etc.
[05:15] It's available for three operating systems. It's Linux, Mac OS 10, and Windows. You can use it on any of the
[05:23] platforms. platforms. The original source code is in C and that is also available for installation. So, some of the features, they include
[05:37] visualization. visualization. So, this GUI, if you already have data, it's great for visualizing and customizing your visualization.
[05:47] There is advanced layer management. There is mapping and reprojection. There are different masks such as land, water, coastline.
[05:58] Uh there is bathymetry and elevation information available. Most importantly, there are operations available uh mathematical and statistical to do an all data analysis.
[06:09] You can plot histograms, scatter plots, and correlation plots. You can also um get in situ data into
[06:21] um um into this um GUI which from SeaBASS such as that is SeaWiFS Bio-Optical Archive and Storage
[06:30] System or SeaBASS. So, you can get in situ data directly into this um SeaBASS also. Here is the snapshot of the interface
[06:40] and we're going to see that in uh detail. Next feature is processing. You can see as shown here uh there is a
[06:52] um um ocean color science software. And this is This allows you to work with different sensors. So, although this was built primarily
[07:04] for SeaWiFS mission, now it is it can be used for MODIS and other sensors. These features include processing level
[07:13] zero to level one data. Then more Most importantly, it includes atmospheric correction that we talked about last week.
[07:23] We talked about it that to derive water quality information, you want to look at water leaving uh
[07:30] radiances or reflectances. But what satellite measures is top of the atmosphere radiances or reflectances. So, you have to subtract or correct for
[07:42] contribution from atmospheric gaseous molecules, clouds, and aerosol particles. particles. So, that correction is already done for MODIS and VIIRS data in here.
[07:54] But, as we will see, we can do this for Landsat Landsat data also. So, for SeaDAS, uses
[08:06] uses it helps analyze level two MODIS data, but for Landsat, you have to create level two data from level one data by using
[08:16] atmospheric correction, and that requires using this ocean color science software. software. And so, that we will demonstrate.
[08:25] Once you do that, you can convert level one to level two data. You can bin level two data to level three, so you can have
[08:32] uniformly graded level three data based on level two data. And then, you can map all three levels,
[08:39] level one, two, and three. All this is possible using SeaDAS. Most important is that there are many
[08:50] tutorials already available online. There are presentation slides available online. online. You go to material from SeaDAS presentation and workshops, you will see
[09:02] information about introduction, SeaDAS tools, okay? And there walk-throughs, how to use it step-by-step instruction. There are video tutorials which are
[09:13] extremely useful. There's installation tutorial and how to use this for analysis, to use different types of masks, to do
[09:24] the statistics. All these tutorials are available in here. This are new to and you have many slides available for
[09:34] you to view as well. Now, week also we talked about this C does form. You can join this or you can post
[09:45] questions on this. There are FAQs. And you can get many answers just by looking at this forum question and
[09:53] answer sessions. And for different topics then you can post your own questions. If you're trying to install you C does and you
[10:02] have specific questions, even if you get any errors, you get stuck, here's where you post your questions. And then you
[10:10] get answers from this large user users of C does. With that we're going to have a demonstration of these features. Again
[10:24] for this we're going to focus on Chesapeake Bay and then you will be able to work on this using
[10:31] MODIS data that you downloaded in exercise one using ocean color for Lake Victoria. So this is the demonstration of C does.
[10:45] On your computer you must have saved C does downloaded and installed during last week. So on my Mac it's in this bin
[10:53] directory and application folder. And you can click on this C does icon and it opens the software.
[11:03] So you can navigate to the directory you have saved C does and open it. Once you open this
[11:11] you can see that it's version 7.5.1. This is the latest version available online. online. It also checks for new available
[11:20] software. For now we're going to say no because we already have the latest version for now. And once you open this you have one,
[11:28] two, and three panels you can see. If this panel main panel is blank for now. On the bottom, you have a file manager,
[11:36] layer manager, mask manager, and color manager. manager. On top, you have many features. Some of them we will be using today,
[11:47] and some you can explore later when you have time. On top also, you have options. Um you
[11:54] can look at layers, vectors, rasters, and we'll also talk about the software. There's a different tools and different
[12:04] analysis options here. Some of them are also available here as shortcut. Like particularly, you can go here and open
[12:12] the file, or you can go here and open the data file. Uh there's something like coastline, land and water masks are there.
[12:23] Here there are grids you can put on the map. map. There are ways you can create a new
[12:29] raster band by applying a filter, new raster band using a logical math expression. So, this is a math band.
[12:39] You can generate a true color image, or red, green, blue band. Using that, you can make a true color.
[12:47] You can collocate two files, crop a file using special subsample uh raster. You can create a mosaic of
[12:56] multiple files. You can apply a map projection, uh uh edit layer properties, uh export color bar, and these are some of the options. Then
[13:11] finally, finally, you can zoom in, you can pan, excuse me, and you can create a new vector data container, so you can put
[13:23] your own shape file, or you can use some of these shapes to define file shape. You can have place mark using these
[13:33] pins. pins. And then these are statistical options. You can display statistics for bands, for parameters you can have histogram,
[13:42] scatter plot. You have spectrum. There's also a way to import field measurements from SeaBass and we're going to see this next week.
[13:54] So these are some of the features. Uh we will be focusing in a few and then you can explore this at your
[14:01] convenience. convenience. So what I'm going to do is walk through a case study for Chesapeake Bay. And then you will have time to explore
[14:10] some of the same features for Lake Victoria using the file that you downloaded from Ocean Color last week.
[14:18] So what I'm going to do is you can open the file. You go to your computer, select the
[14:24] directory and get the file. I have already opened this file which is Chesapeake Bay file for uh
[14:34] uh level two data on May 12th, 2018. And I'm going to open the file. When you open the file on this left-hand
[14:45] window, you will see the information about the file. This is the file name. And what we're interested is metadata
[14:51] information. What we're interested in the rasters available in this level two file. file. So this was the file again we downloaded
[14:58] from Ocean Color website just like you did for Lake Victoria. This is level two. Now we also went through this list of
[15:07] parameters available in this site. So for example, you have um inorganic carbon, organic carbon, you have chlorophyll A concentration.
[15:18] Uh these are the parameters we're going to focus on. So especially chlorophyll A concentration and these are surface reflectances in
[15:26] different bands. These are the bands useful for water quality monitoring, especially blue to red to infrared near
[15:34] infrared and there is also chlorophyll A concentration. So, let's start with chlorophyll A concentration. Once you click on this raster, you will
[15:44] see the map and now what we want to do is to put a map on this. First of all,
[15:51] you can use this mask manager. This is the easiest way to look at different masks. We're going to look at
[16:00] land mask. You can turn it on. And then it puts the land in it and now you can see that this is Florida. Here's
[16:08] Chesapeake Bay. This is the Atlantic Ocean. Ocean. And you can change the color of this mask also by
[16:15] clicking on the color. We're going to keep it gray. And And uh we will look at a couple of more
[16:23] masks later. But this is the most important thing that you want. This is to give a reference. You can also put grid line on
[16:31] the map so that puts you uh that gives you latitude and longitude lines on the map. So, this is the feature we used.
[16:40] And you can zoom in. Just click on the zoom and do that or look at the left hand right hand side
[16:49] panel now. Here it is showing you the swath you're looking at, the file that you downloaded. It's covering this area.
[16:57] And then here you have the raster. When you move your cursor or mouse on the image, you will see here
[17:06] latitude, longitude and chlorophyll concentration in milligram per meter cube. So, here it is say 20, here it is
[17:13] more like .4. And here also you have a navigation control. You can move around. That takes you to different areas.
[17:24] So, you can just go here. You can zoom in here, also. Or you can use features on top, and you can pan the window as
[17:33] you like. So, this is a quick way to just zoom in and look at different areas. So, this is the Chesapeake Bay area.
[17:48] And what we can see now is we can see color. color. Here is the basic method. You can look at the table.
[17:57] It gives you which color is in which range. You can use a slider from this. I find it easy to use this
[18:07] basic to begin with. You can have different palettes. Um you can use this. Or you can use this
[18:17] blue to red. And And we know that colors are saturated here, so values are a little higher. I'm going to try with,
[18:28] say, 60. Or even 70. And you can have Here you can have, say, point 0.05. You can try different palettes. If you
[18:47] By using different colors, you can perhaps get more gradient on your images. And so, I Let's pick this.
[18:55] And then, again, you can pan it. And when you go to a particular area, you can see this is 20.9 mg. Here, it is
[19:04] more like 44. If you go here, it is 2.5. So, this This a quick way of looking at
[19:13] if you have multiple images for different days, you can quickly just keep taking this different rasters, chlorophyll
[19:22] rasters and view them one at a time. Open each file and then it provides you a visual information of how chlorophyll
[19:31] is changing over the bay. So this is a uh just a simple way to visualizing level two file. On ocean color webs, we
[19:41] had a way to visualize it, but this has more zoom in features and also you can change colors and you can add different
[19:50] coastlines and here if you go excuse me. You can also have a coastline you can add and you can change
[20:03] um um transparency of the coastline. Um and you can add bathymetry information also. So this is These are some of the
[20:14] features that you can explore. Here's where you can add bathymetry and elevation band mask. They They are
[20:25] available at different uh resolution, but you can use this and create a band and then it wants to install the
[20:36] file. So you can go ahead and install this file to be able to use bathymetry and and um
[20:43] um elevation mask. So in here, what we want to do next is see see how we can look at
[20:54] other layers also. So now we are going to see reflectances. reflectances. We already know that this chlorophyll A
[21:04] concentration is derived from using blue green band from here bands from here but we can also look at individual image
[21:15] individual individual reflect reflect wavelength reflectance in different wavelengths so you can click on say blue and here on top you can see that both
[21:30] are available you can switch in between and here also you can add land mask so now what you have either you can look at two
[21:48] days you can go back to file manager also include another band band so green band and again
[22:02] add add land mask okay okay now we have three bands on top or three different rasters on top
[22:10] there is a way to see them all at once either tile them horizontally horizontally or tile them vertically
[22:21] and then what you can do is go here and it says synchronize windows so once you synchronize
[22:32] you see them all at once they all move where you move this this area area so they are synchronized and so any
[22:44] feature you want to see in the reflectance raster or in the chlorophyll raster or different bands you can see
[22:50] them simultaneously now when you go over here you will see on the right hand side that you have
[22:59] all three raster values so reflectance is in these two bands are there, per steradian, and you have chlorophyll
[23:06] concentration. All three at this pixel, all three values then are provided. There's also one more thing to notice
[23:17] here is that if you go to color mask, you have in you can say no data color. You can perhaps
[23:24] make it black, and then all of them you can highlight no data. And And if you focus here on the chlorophyll
[23:39] data, data, mostly either if there are clouds present or if the algorithm fails, then you do not have chlorophyll data. So,
[23:48] you can see that almost everywhere where you don't have data in reflectances, of course, you don't have chlorophyll also.
[23:56] If you go to mask manager, there is a mask you can see it says cloud ice. If you highlight that, you can see here
[24:06] that most of this missing data are because of clouds. So, this is a quick way to see where you can't see surface
[24:14] because there are clouds present. So, next what we want to do is we're going to focus on
[24:28] starting with just chlorophyll first. You can fill the window like this. And then we're going to do some statistical
[24:42] analysis here. Before we do that, I just wanted to quickly show that you can add um or
[24:50] export this color bar. Once you click on that, you can pick whether you want a horizontal or a
[24:56] vertical color bar. Do you want it inside the image or outside the image? And where do you want, whether you want
[25:05] it in uh center or left. I want this left center. And here are all the values that you
[25:15] will get, and then you can create the layer. And then if you zoom in enough, you will see that
[25:27] there's a bar added here for your reference. You can always go to here and look at the values here also.
[25:40] Okay? Okay? So, if you change the color bar, then you'll have to add um color bar again,
[25:45] but that's just to show you. Again, zooming in to Chesapeake Bay here. here. Now, Now, we want to do some statistical analysis.
[25:59] So, in order to do statistics on any of the data that we have here, um you can do either entire image that
[26:08] you have, or you can zoom in and crop any particular area of your interest. Once you zoom in, that is the default
[26:18] area that you can crop to. And to do that, that, you can actually go to raster and crop.
[26:25] So, either you can just crop this entire window that is visible here, on which you have zoomed in, or you can also pick
[26:34] a small region that you want to uh have statistics on, or you want to crop to. So, here I'm just going to pick a small
[26:42] region by geography, and so you can look at latitude longitude here approximate. Uh you can see this is -76.24.
[26:52] Here it is -76 and you can have 37.6. This is 37.4. So, you can crop to a small box if you
[27:03] like. like. This is just for an example. You can also see that it is special subset. You
[27:08] can also do band subset. You can pick any one or you we are going to pick all
[27:13] the bands and you can also do metadata subset. subset. So, here you can pick by geo coordinates
[27:20] or by pixel coordination which also appear here. So, here I'm just going to pick pick a small box.
[27:41] And then you can crop and that uh layer gets added here. You can turn this layer off and go to raster
[27:54] here. This is the crop layer and we can go to chlorophyll A and it just shows this small region that we picked of
[28:01] Chesapeake Bay. Now, you can either uh uh of you can pick any region or you can do
[28:10] statistics on here. I just want to show example. You can you can do display statistics. statistics. You can say
[28:22] This is the chlorophyll A concentration and what you can do is in region I look and say water only.
[28:31] Okay. Okay. And then you can run. run. Once you run that, you will actually get this statistics as you can see here.
[28:41] And so, how many regional pixels are there? How many valid pixels are there. Uh mean value in um
[28:50] mg/m³, so this is 27.45, standard deviation, and variance are given here. Coefficient of coefficient of variation um and uh being information
[29:02] is given here. So, you have minimum and maximum. Uh you have percentile threshold of chlorophyll concentration. And so, this is you can see uh for a
[29:14] given region the stat- statistics that you can get for this region by using this statistical analysis. You can do
[29:23] histogram. And then you can refresh it to get the histogram. Here is chlorophyll um values and then here
[29:35] frequencies. You can see that here is where a peak is between about 15 to 30 um mg/m³ as we knew 27 27 was the mean.
[29:46] So, this shows a histogram of chlorophyll concentration in this area. So, it's really useful if you have
[29:53] multiple images from different days, then you can quickly compare how the histograms is shifting, how the statistics are changing, how visually
[30:01] you see the image where the region where you have chlorophyll concentration is changing with days. So, this is a quick
[30:09] way of looking at statistics. Further, we want to mathematical analysis of some of these data. So, since we have this reflectance data,
[30:20] we can uh try and use this information. If suppose you have an image where you have reflectances, but if you do not
[30:29] have chlorophyll A concentration, but you do have say ocean color algorithm or coefficient derived from previous data,
[30:36] then you can use that to derive chlorophyll A concentration. Just example is shown here to do band
[30:43] mathematics and so for that uh we're going to say let's pick the original image. This is the original
[30:51] image that we had, not the cropped one. So, this is the entire image. And now what we can do is to band math. We can
[30:58] go to this raster math band option. Here is the original image that we have. This is the level two ocean color
[31:07] chlorophyll concentration notice for 12th May 2018. You can name this and I'm going to say band ratio
[31:17] because that is what we're trying to calculate. calculate. And you can go to edit expression. Here you have all the data sources from
[31:26] this particular raster. raster. Then you can have different constants here. here. You can have different operations. And you have different functions.
[31:40] What we're trying to do is take log 10 of blue green band ratios, which is used by chlorophyll a concentration
[31:47] algorithm. So, I'm going to pick that. And now this is the Here is where we take ratio. So, we can say ratio of two
[31:55] bands. bands. This particular one would be blue and this one would be green. And when you say okay and okay you will
[32:08] get a new raster here for band ratio. You can go back and add the land mass to it.
[32:18] You can also pick a particular color and now you have band ratio. When you go here, here you will see band ratio
[32:26] values. This is log 10 of band ratio, so it is negative, that's why. And if you had
[32:32] had uh say coefficients, you can use the same polynomial that's used to derive chlorophyll a concentration based on
[32:39] this band ratio. So, this is if if suppose you just had reflectances and you wanted to derive
[32:48] chlorophyll a concentration, you can use already derived algorithm, take the band ratio, and use the algorithm coefficients to get chlorophyll a
[32:55] concentration. So, you can also, if you have different images, then you can collocate and do subtraction of two
[33:04] images to see how chlorophyll a is changing in time, say. So, there are multiple use of this particular feature
[33:12] in math band, so you can explore that. When you do this exercise for Lake Victoria, you are going to follow
[33:21] the same step and see how things change. And you can also see how if you look at
[33:27] chlorophyll chlorophyll and band ratio, you can see how low and high values do correspond to change in
[33:34] this uh band ratio values. So, that's basically how you do band math. math. And so, next week, what we are going to
[33:44] do is go a little further, and we're going to see how to use this uh software installation for um getting
[33:53] from level one to level two, and then we're going to do some Landsat image analysis. So, this is a demonstration of how to
[34:08] search and download Landsat images. And for that, we're going to use Earth Explorer USGS site shown here.
[34:16] Now, as we saw earlier, ocean color data are available for MODIS and VIIRS ready-made from the ocean color website.
[34:25] So, we not only have surface reflectances, but we also have derived products such as chlorophyll a concentration, which you have downloaded
[34:33] and you're going to analyze by using SeaDAS. SeaDAS. If we want to do the same with Landsat
[34:39] data, they're not readily available in Ocean Color Web. And so, what we have to do is pick a region of interest,
[34:48] download available Landsat images, and then convert them to ocean color products. It is possible to do this
[34:56] using a software in SeaDAS, but we have to start with level one Landsat data, convert them to land level two data, and
[35:04] then then work with them in SeaDAS. So, we're going to demonstrate this next week when we process Landsat data, how we are
[35:12] going to find level two data which are atmospherically corrected level one data, and then you also have surface
[35:20] reflectances and derived products such as chlorophyll a concentration. So, this today what we're going to focus on is just how to get Landsat images,
[35:30] and then we can process these images next week. So, as you can see here, this site does require registration. If you
[35:39] don't have a registration on this site, you have to set up it by clicking on this link. Once you register though,
[35:48] and you have a username and password, you can download this data for free. You can see this map that allows you to pick and pan
[36:02] different regions. If you look at left-hand side, here's where the selection criteria are for searching Landsat and other images.
[36:10] You can have different data sets as we will see, and then search criteria. You can have multiple options here. Either
[36:19] you can choose particular address or place, by path and row, or by features, or US and world features,
[36:27] or you can quickly just use this map and look at the area of your interest. So, we are going
[36:36] to focus here. I'm going to use Lake Victoria again as an example. This is going to be our case study.
[36:44] So, you can pick coordinates. If you want to see coordinates, I'm picking decimal. You can have degree,
[36:50] minute, second if you like. Once you have zoomed into the map and you know the area of your interest, you just have
[36:58] to click and have a polygon that covers the area of your interest. And that that these coordinates appear in this window here.
[37:10] You can even change your polygon if you like by deleting and re-entering the points here. So, once you pick this,
[37:22] all Landsat images that cover this polygon can be searched and downloaded. Here's also date range. And for example,
[37:31] I am going to pick July and August of this year. But, you can pick uh any year that
[37:42] Landsat data are available for. And as we will see, all the data from Landsat 4 5 onwards, you can
[37:50] download from here. So, this is the date range that we have picked. And or you can just select a
[37:56] particular month from here if you like. Or you have all months, but you can pick a particular date range also.
[38:03] Once you do that, you can pick data sets because this site has just not Landsat data, but other sensors are there, too.
[38:11] As you can see, AVHRR data are there. There are some commercial data available like IKONOS and OrbView.
[38:18] Uh SPOT data are available also. Um EO-1, which is a past mission, um and Sentinel X 2 MSI data available here.
[38:31] Here, we are going to focus on Landsat data, so you click on the Landsat, and you can see that uh Landsat collection
[38:39] level one data are available here. There are level two data here also. We're going to start with level one data. Once
[38:46] you pick level one data, you will see that there's Landsat 8 7 4 5 and then 1
[38:52] to 5. We're going to pick Landsat 8 OLI and thermal IR data level one. There are additional criteria that you
[39:04] can read manual on Landsat data collection. Uh you can find this in the check box, the website, which
[39:13] describes each and every option. So, these are the world reference system path and rows, which describe each
[39:20] Landsat image. Uh you can pick by that. You can pick images by particular cloud cover criteria, and you can have
[39:31] different types, such as uh day and night. You can have either one sensor or multiple sensors, and you can have
[39:40] either tier one, tier two, or real-time data. Again, the manual describes them in great detail, but tier one is the one
[39:47] we generally have because they are radiometrically calibrated data and geographically and geometrically. So, we can use all for now. So, you can keep
[39:58] all the default criteria, and then you can look for results. Once you search for results, it comes up
[40:07] with lists of all the images that cover this polygon for the date range that we picked. And once you have all the
[40:18] images, you can click on this footprint and it shows which area it's covering. Here, not much of the lake is available,
[40:26] but you can see that this particular one has some area covered. And this one, too. So, you can Once you know by clicking on
[40:43] the footprint, you can pick which images you want to download. Either you can do bulk download and then add to the cart
[40:52] and download them at the same time. Or, as you keep finding them, you can download by clicking here.
[41:00] When you click here, you will get a list of different products, and what you want to download is the level one GeoTIFF
[41:07] data product. You can click on download and save on your computer. I have already saved some of these
[41:16] images, and we will be sharing these images with you uh so that you can analyze them next week. But, this quick
[41:24] uh demonstration was just to show you how to use Earth Explorer and get the data Landsat level one data for
[41:32] analysis. So, I'm going to stop this demonstration here. You can continue to work with your SeaDAS exercise now, and
[41:41] we will use this data, similar Landsat data, uh next week when we demonstrate how to use these level one images to
[41:50] convert to level two images using SeaDAS. SeaDAS. For now, uh we're going to stop here, and then you can do the exercise using
[41:59] SeaDAS that you downloaded on your computer using the Lake Victoria ocean color data that you downloaded from
[42:06] ocean color. So, here is the SeaDAS window 7.5.1. You must have downloaded this and installed on your computer.
[42:24] And in the handout section, you have exercise for using SeaDAS to visualize MODIS ocean color data over Lake Victoria that
[42:36] you downloaded from ocean color web last week. week. Hopefully, all of you were able to download and install SeaDAS.
[42:47] If not, you still have 1 week to catch up with it. And at the end of this exercise, we will
[42:55] have a question-answer session. And then, if you have any specific questions or if you're having any particular
[43:01] difficulty, we can discuss that as well. So, here is the exercise that you have on the handout section and also
[43:16] available from our site website. So, I am also going to walk through this with you, but will give you a few minutes to catch
[43:31] up and get here so that you can navigate to where SeaDAS is on your computer and open it.
[43:39] Also, Also, get familiar with some of the steps that are listed here that you will be doing.
[43:47] This is the file you downloaded we downloaded last week for Lake Victoria using the ocean color web.
[44:03] Must have that file saved on your computer. So, once you open SeaDAS, that is the file you will have to
[44:17] navigate and open using using either file open or by using this. I have this file saved on my computer
[44:40] and I'm just going to open it. Once you open it, you will see all the information. You can click on
[44:48] rasters. And then, you can explore different variables or just go right to chlorophyll A concentration. Here's Lake Victoria.
[45:11] Here's the mask manager. And as we did, we can pick land mask. We can also put grid lines.
[45:23] And now, I'm going to wait for everyone to uh indicate that they have reached this step. And you can zoom in.
[46:02] So, once you navigate through all that, open Cedas, open the file, look at the rasters, click on the
[46:11] chlorophyll A concentration, and you will get this image. So, once you are here, then you can uh work with different colors.
[46:45] So, here is the color manager. And again, you can try to see different colors if you like.
[47:14] Try and get the gradient. And you can look at the table. You can see that most of these
[47:27] chlorophyll values are in this range. And when you move your cursor here, you can see the values.
[48:05] This is in 20s up to 30. As you go down, it's about three here. Something else you see is this white
[48:22] region here. So, you can see if you can see mask manager and go to You can change this color
[48:42] just to see where there are clouds. Here's where all the clouds are. Just highlight them. That's why we don't see
[48:51] any data here. We've repeatedly talked about this that any optical sensor, this is one of the limitations that if there are clouds
[49:00] present, you will not be able to see the surface. surface. So, clearly where the data are missing,
[49:05] so many of them are actually because of clouds. And it will give you a few more minutes
[49:19] to add this color bar if you like to the image before going further. Here it says 0.1 to 60. You can try
[49:52] that. that. You can follow the PowerPoint. So, you can try and pick different colors and see how they look.
[50:43] There is a way to customize your colors, also. And if you go on C does website, you
[50:50] will see a tutorial on for these features. Also, how to work with layer manager, that tutorial is available. There's a
[51:01] video there. You can add color bar as shown in these steps. Here are the values. You can pick your options and create
[51:56] layer. So, here's the color bar you can see. You zoom out. So, this feature, this navigation control, that helps
[52:23] in actually picking the window you like easily. So, I know there is a feature that helps you reset your
[53:07] original view. This reset to default layout will get you back to where you were from you. You can say reset to default layout, and
[53:40] then you can go back to where you started. So, as we this slide that just tells you
[54:27] to do to explore chlorophyll values, and you've already done so. So, here are higher values. As high as this is this particular one
[54:36] is more like 85. So, you can see that there are spots where there is much higher chlorophyll
[54:44] concentration. concentration. Uh we have not we did not include surface temperature in this particular exercise, but you have downloaded
[54:56] surface temperature. So, what you can do is import that, too, in uh uh SeaDAS. SeaDAS. And we'll give you a few minutes to do
[55:07] that if you wish to at the end. Then, you you can see where there is higher temperature, where there is
[55:13] higher chlorophyll concentration, there is more likelihood of algal bloom. This feature also is useful because if you are working on a project and you
[55:41] want to save it Here is a procedure that you will follow so that you don't have to start again.
[55:48] If you want to quit this in between you can go back and start where you left. So basically
[56:11] you can save as and you will be asked to save this as time at format and you
[56:32] click yes. Since I've already done so I'm going to quit this. Now if you want to open this file you go
[56:58] to file. Session save is what is needed here to follow the steps to enter new name of the file that you
[57:19] want. want. And then when so that that's the session that you save. So whatever you have done
[57:26] this project you have done that will be saved. So go ahead save this. So, you'll be asked. You can say yes.
[57:51] And then, it's writing. These are the exact steps that you can save the file in this format.
[58:05] Then, you can save the session. I'll take this. And you can save it. And then, you can go back
[58:28] and session open that file. So, you can follow these steps. For now, you you just have to make sure
[58:41] that you save this file. Later on, you can open it. The idea is to just show how you can
[58:47] save your work. So, if it's a long project or you want to go back and change things, you can
[58:56] start where you left. So, actually, what we will do is in the demonstration, you saw that you can crop any small
[59:25] region by geographical area by using crop raster crop. And you can add coordinates or pixels and pick a small box
[59:41] for just learning what here what we're doing is sort of just picking to zoom in to this entire lake region.
[59:57] And then do the statistics as the instructions says. So, this is the window that you zoom into
[1:00:14] when you crop, that will be the window that will be cropped. And once you crop it, this is the
[1:00:39] raster, you will see a new raster here. And once you go to that, this is the original, this is the
[1:00:58] cropped one. You can put grid lines on that, too. And so, the crop layer is the one that
[1:01:14] you want to do statistics on. Actually, what we're going to do is next few steps you can just follow once you crop.
[1:01:27] Um because your homework is based on the statistics statistics we encourage you to do it now. So, go to the
[1:01:41] use the statistics and also the histogram. If you pick a smaller window, you will have um different numbers and histograms will
[1:02:01] pretty much look the same. If you pick like small region, your statistics and histograms of course will change. Um
[1:02:08] depending on how you have cropped, numbers might change a little bit. But still um basically keep the entire lake in your
[1:02:19] cropped window. And do the statistics and histogram and answer the questions best you can in your homework.
[1:02:29] So, we'll give you a few minutes to catch up here, maybe 10 or 15 minutes so that you all
[1:02:35] of you can play with this crop features. You can even go ahead and do the small cropping.
[1:02:42] For your homework though, keep the entire lake in your cropped window and do the statistics. Also, please uh try to save this session
[1:02:54] so later on when you're answering your homework homework questions, you can go back and look at the values and um
[1:03:02] visualization if you like. So, I'm now actually going to mute and stop and let you catch up.
[1:03:18] So, homework one and two both are available on our webpage. These are Google form links. You will be answering
[1:03:26] questions using the Google form. So, please go to the website RSET website. That's where the homeworks are.
[1:03:43] So, there's also I see comments about people having different images and that is okay as long as
[1:03:51] you do the analysis. The whole idea behind this exercise is just to get hands-on experience working with the SEADAS GUI.
[1:04:03] So, if you have a different image, that's okay. But last week we did download SST image also. So, we
[1:04:12] encourage you to explore that. You can import that and view that as well. So, this is the SST that you saved, and
[1:05:24] you may have a different date, but basically you can also look at that. After you're done with
[1:05:36] chlorophyll, we're going to focus on chlorophyll, of course, but you can also look at SST if you have
[1:05:44] time and interested in looking at it. So, here we are also looking at RGB true color image.
[1:06:47] You can use either cropped image, or you can go back to the original image, which is not cropped. It's your choice. This
[1:06:54] is mostly just to get familiar with SeaDAS. Here is where you can get RGB image. So, red, green, and blue, these are the
[1:07:20] default. If you actually want a um um image that is not true color, but you want a false color image, you can change
[1:07:30] these bands around. You can use different bands just to see different information. But, this is more like a This is the
[1:07:42] true color image that you will see. And you can see that on on the in the raster window here,
[1:08:00] once you go here, all three band reflectance values you can see. You can see where there Excuse me, some negative values which
[1:08:10] are not physical. I mean, uh there may be multiple reasons. But, otherwise, you can see here where
[1:08:24] there are clouds, of course, you will not have data. And you can change colors or play with
[1:08:37] this this image. image. Try and make it more informative if you like. But, this just shows you uh how you can
[1:08:52] look at true color image. And you can go back and look at individual bands also, like we did for
[1:09:00] Chesapeake Bay. You can look at blue, green green uh bands or red band or near infrared band. If you want to see
[1:09:10] different bands, you can. You can tile all the windows horizontally or vertically as we did for Chesapeake Bay.
[1:10:09] You can see all of them when you zoom in or zoom out, you can all You can see them vertically if you like.
[1:11:19] So you can just keep the these two images now if you like. And now you can work with this band
[1:12:05] ratios. You can whichever whichever image you want to work with at the cropped or original, that is fine. This is mostly to
[1:12:16] get your hands-on experience with the band math. So hopefully all of you have been able to do the statistics and histogram.
[1:12:46] If you are done with the statistics and histogram and you have saved the session. You can start with this
[1:12:58] mathematical operation. So, next week we will have Africa Flores showing in more detail um how you can use these band ratios and
[1:13:13] also in situ data to derive to be able to derive your own algorithm if you want to.
[1:13:20] But But for today, we can just focus on learning how to use this operations. So, you can open it.
[1:14:08] Go to edit expression. And you want to find this log 10 function. And this is we're following what ocean
[1:14:37] color algorithm does. It's a We talked last week. It's a fourth order polynomial in this band ratio blue and
[1:14:45] green band reflectances. So, that is why we are doing the same, but you can use this to do any mathematical
[1:14:56] operations you see here. If you have different data, you can definitely use this. If you have raster
[1:15:03] data, so, you can pick appropriate reflectances here. As you can see the Here's the instruction. Just follow
[1:15:36] the PowerPoint. So, this is the expression you actually want on on your mathematical operation. And as we saw last time, we have say
[1:15:52] weird data or only data. Uh they may not be exact uh same wavelength, but closer to blue these wavelengths like blue and
[1:16:01] green, these ratios are commonly used to get chlorophyll concentration. So, once you go through the operation, you will see this band ratio here.
[1:16:39] This is log 10, and you can just add colors, you can add land mask, you can go through the whole
[1:16:48] analysis. When you move here, you will be able to see see what the band ratio is. Log 10 of band ratio actually.
[1:17:28] Here are the spots where we did see higher chlorophyll concentration. Again, we will have a brief review next week that if you have in
[1:17:50] situ data in a particular format, you can write it and then get it into SeaDAS and then compare with what you have from
[1:18:00] satellite. That is possible. If you have in situ data for different days, days, you can have co-located satellite images as much as
[1:18:19] possible or you can give a window plus or minus one day if there's no exact overpass available.
[1:18:28] You can get the band ratios, you can save them and then use the in situ data and
[1:18:39] and the imagery from which you can average band ratio values around your in situ measurements and then derive a
[1:18:49] regression or statistical relationship between satellite and in situ data and you can use those coefficients then everywhere
[1:18:57] wherever you have satellite data available. available. So that just tells you what you can do if you have
[1:19:05] those band ratios and you have in situ data in the area of your interest how can you derive your own algorithm? And
[1:19:12] we'll see this in a little more detail next week. So we'll we'll still wait for a few more
[1:19:20] minutes and see um that everybody does the mathematical operation that we just did. And here are the
[1:19:33] uh questions that you will be answering using Google Form. Hopefully all of you have been able to
[1:19:47] go to this point where you can do mathematical operations using different reflectances. So we actually focused on a small subset
[1:20:01] of features that are available in SeaDAS. But you can go through the documentation and tutorials online also to see what
[1:20:15] additional features are there, how you can customize visualization even more. But the idea here was to to guide you through how to look at
[1:20:28] level two data using SeaDAS which are already there. And then next week we'll go one step more advanced that we'll start with
[1:20:38] level one data. We'll convert that to level two data. This is we'll do this for Landsat. And
[1:20:44] then then um you that also using SeaDAS and then you can again visualize and do operations as we
[1:20:52] did did here with MODIS data. So we can start the question answer session soon. Okay, so question is,
[1:21:24] can you review difference difference between level one, two, and three? So we talked about this last week.
[1:21:35] Um Um level level one data are the raw satellite data. They're how satellite measures. When you go to level two, they are
[1:21:47] actually uh geophysical parameters derived from satellite data. They are geolocated also. They're still on the satellite swath and
[1:21:58] pixel resolution. So those are level two data that we looked at uh from ocean color data that we use
[1:22:06] SeaDAS to see today. That you downloaded from ocean color web last week. Level three data are the uniformly
[1:22:15] gridded data based on level two data. So they're more composite in space time sometimes, sometimes just space, the
[1:22:22] special uh binning. It's done so that you have um um regularly greeted data. We saw that using Giovanni last week.
[1:22:34] Those data uh were 4 km grids as we saw. So, these are the differences. So, level two, they are geophysical data, but they
[1:22:47] are geolocated. They're in swath and pixel resolution that the satellite provides. And then level three has uh
[1:22:55] most lower resolution compared to level two. They're uniformly gridded. They're binned. They're composite data. So, both have their limitations and
[1:23:05] advantages. Uh level two, of course, are the data that you get directly as satellite sees. They're converted to geophysical
[1:23:14] parameter. Level three is easy to use because it's just uniformly gridded. So, if you want to compare with modeling
[1:23:21] data or, you know, they're just easy to visualize also and uh handle with different software. If you go on Ocean Color website,
[1:23:35] there is a If you go to uh documentation, this was pointed out last week. If you go to documentation,
[1:23:45] uh products, there's the first link is to level one, two, and three definitions. definitions. We went over this last week, but you can
[1:23:55] go back and review on the Ocean Color website. Go to docs. Products, and the first uh be
[1:24:05] Just below the products is the first link is to level one, two, and three definitions. So, um does SeaDAS feature atmospheric
[1:24:23] correction for Sentinel 2A, 2B MSI? And Daniel, if you're here, maybe you want to take over and answer this question.
[1:24:35] Hi, Amita. This is Africa. Yes. Yes. Yeah, just in case Daniel is not here. Yeah. Yeah. I can provide us some
[1:24:47] Please do. on this Um he may be muted. He can chime Please Daniel, feel free to chime in at
[1:24:54] any time. Um what I understand is that there is atmospheric correction for Sentinel 2. But in the command line um
[1:25:05] of CEDA's. In the GUI, there is not. But Daniel can expand more on that. So, there is, but only on the command line.
[1:25:17] For OLCI, uh Sentinel 3, also I think is available through command line. I'm not sure about Sentinel 2, so we'll
[1:25:26] As you say, not in GUI, they're not available. Mhm. Yeah. You can definitely do atmospheric correction in
[1:25:37] CEDA's, so whether that should be supported in Sentinel 2. But I just don't want to commit to that
[1:25:44] cuz I don't know with Sentinel 2. Yes. So, I know that for OLCI, definitely GUI doesn't work. If you have
[1:25:51] to have through command line. And as Africa said, that may be true for Sentinel Sentinel 2 also, and we will check on that.
[1:25:59] Yeah, probably the GUI doesn't work for Sentinel 2, but I don't know for sure. Definitely not for OLCI.
[1:26:05] Right. So, the next question Daniel is about coastlines, like Louisiana are very dynamic. How current are the coastline masks available in the
[1:26:22] software? And how detailed they are. I know that that different resolutions are available, right? Yeah, I can't remember where the sources
[1:26:33] were, but there's 1 km that comes with SeaDAS, and then there's a 50 m and 150 m
[1:26:43] that you can install from within SeaDAS. I can't remember where we get those from. They're They're basically
[1:26:49] basically land masks that we then create coastlines around. So, I don't have memorized where they come from.
[1:27:00] from. No, but that documentation is there, and you go on SeaDAS. We saw how to install that. We saw that link.
[1:27:08] Yeah, that's within the the coastlines, where you click on the Italy boot, and then inside there, if you select the 50
[1:27:14] m 150, it's grayed out, but then gives you the option to install it, and it'll install on your machine. We
[1:27:21] didn't have it installed by default because it's very large, and we wanted SeaDAS to be small. So, things like
[1:27:28] this, extra data, we have them you install from within SeaDAS if you need it. The next question
[1:27:38] are those coastline coastlines updated? I don't We don't update them ever. I mean, they come from external
[1:27:47] source. I don't know that they're ever updated unless the Earth changes. I don't know. To be honest, I'd have to see where
[1:27:56] they're coming from, but at 50 m, I can't imagine they're changing that quickly. quickly. But they're not coastlines. They're
[1:28:05] land. It's basically areas of the water to determine whether it's land and and um um water, and then SeaDAS can make a
[1:28:13] coastline coastline based on knowing whether it's land and water to draw on the edge of it. But when you're running level two gen
[1:28:27] itself, you do not don't have access to that. That's as Shawn has answered in one of the foreign posts, that's a lower
[1:28:34] resolution. I think it's 500 m Which atmospheric algorithm is used? How do we do that in SeaDAS graphically?
[1:28:49] So, are you talking about atmospheric correction, I believe? So, the algorithm, the link was provided last week. This is the ocean color
[1:28:59] processing biological processing group that uses um atmospheric correction. That um um link was provided in week one.
[1:29:09] And when we talked about atmospheric correction, correction, and um so, MODIS and VIIRS data we saw they are
[1:29:17] corrected, and then we have level two data. Um next week when we look at Landsat data, you can use this algorithm
[1:29:26] which which uh to generate level two data. So, that that is available through SeaDAS uh GUI. You have to install that
[1:29:35] software, and um we'll see that next week, but yes, that is possible at for a few sensors. So,
[1:29:43] you will not be able to do that for all chi, say, um using GUI. But But you have this algorithm available, and
[1:29:52] as we talked last week, there are other atmospheric correction algorithms available, too. Uh Uh so, you can use any of them in command
[1:30:02] line or in different software. Okay, so there is a question here. How do we estimate chlorophyll value at the
[1:30:15] pixel that's missing? So, obviously from satellite that data are not available either because of clouds or because of algorithm failure
[1:30:25] for whatever reason if you don't see chlorophyll chlorophyll value value the best perhaps you can do is you can
[1:30:32] interpolate from surrounding pixels. And that's it. That would be an estimation or more like a guesswork that okay
[1:30:39] uh you you can do bilinear interpolation. But that's that's all you can do if there are missing data.
[1:30:46] Or or you can or you can either change algorithm or adjust your thresholds which are throwing away your data.
[1:30:54] Um Um the the data is missing either because it's missing or because it wasn't considered considered um to meet our quality criteria.
[1:31:06] So, you can adjust the masking thresholds and what gets masked out. Um Um Things like that. You can also even adjust. It's a little
[1:31:17] more bold, but you could adjust so that the Earth no longer has any land and if you treat the entire
[1:31:24] world as an ocean then you get a lot more retrieval results. So, then you subsequently would have to
[1:31:31] mask out the land and then but then you wouldn't have any of these uh coastal um removal. So, anything you
[1:31:38] do do outside of the norm is is um um definitely okay for uh imagery, but can be a little um
[1:31:47] you know, worry some if you want to talk about science quality data. So, next question is about where to get
[1:32:00] Victoria Lake Victoria surface temperature and it's the ocean color web. web. Same place where you downloaded chlorophyll concentration data. There
[1:32:09] was a file there that is SST. We downloaded that, too. If you go to exercise one for ocean
[1:32:19] color, you will see Um and so wherever you got that chlorophyll concentration file, in that list SST is there, too.
[1:32:41] So, question seven is about changing um um color, I guess, the value in the range. And as you saw, it worked for us, so I'm
[1:32:53] not sure. Um if you're trying to get the color bar, every time you get the color bar, I think I mean, every time you
[1:33:00] change the values, you have to redo it. So, you can try that again. Okay, and uh for the histogram, there is
[1:33:12] a a reset button on top. You go to If you go to the PowerPoint, you will see uh
[1:33:22] there's this refresh or reset button that you have to press and then you will see the um
[1:33:30] um histogram. Also note, you can make histograms in that statistics tool as well. Okay. Okay. So, that's a a newer
[1:33:41] thing, so you may not need the histogram tool. It's an older one, but it still may have something not available in the
[1:33:49] new one, but the new one is pretty uh uh refined and has histograms in it. So, here the question is what's the
[1:34:04] reason to take log of band ratio? Um so, only specifically here, this was to just follow the algorithm
[1:34:13] that um ocean color group uses. And there was a review article provided last week where different algorithms are
[1:34:22] used, different band combinations are used for different parameters. For chlorophyll A concentration, it is usually blue-green band ratios and uh
[1:34:32] log of that that is used. So, the algorithm uses log 10 of band ratio polynomial in that quantity.
[1:34:41] That's why we use that. But, as I mentioned, there are so many other operations you can you you can use math operations if you
[1:34:50] want to. Here, this was just an example following the ocean color algorithm. So, in question nine, uh is the computed
[1:35:07] histogram based on the viewed area or on the image extent? So, once you crop the image and you have this view area, if
[1:35:15] you crop to that, so, on SeaDAS, if you look at in the central window on the left-hand
[1:35:23] side, all the rasters you can see. Whichever rasters you highlight on, that's the highlight that's the raster
[1:35:31] that is used. So, if you highlight the original image, the original entire image is used. If you highlight the cropped image, that
[1:35:39] that's the one that's used. I'd like to add that in uh his both histogram and statistics, you can mask,
[1:35:47] so you can um you don't have to actually crop. Um you can take your original one and within the histogram tool there's
[1:35:55] like a ROI region of interest masking so you can select masking, you can select you could have drawn a vector square on
[1:36:03] your image and then select that vector square as your um region of interest. Um, Um, in the more advanced
[1:36:13] uh statistics, that little sigma uh as the icon, that one you can do a lot of masking. You could essentially
[1:36:24] say I want it in my square and then I want it to be not land and I want it to
[1:36:29] be water depth of you know, a certain range. So, there's a lot of masking you can do to do the histogram on just the
[1:36:40] you know, the uh masked data. So, for Chesapeake Bay we did pick a small region by drawing a square so you
[1:36:50] can do that. Um, but as Daniel said I think these features where you can mask according to
[1:36:57] water depth, I mean these are all very useful features for getting statistics. Correct. For for Chesapeake Bay the best
[1:37:09] way would be to draw a polygon around the bay and and that extends into the land and then then it's uh
[1:37:17] then you just do where it's uh in the polygon and then not land and then you get a nice uh shape of the Chesapeake
[1:37:24] Bay. Mhm. Mhm. Right. I think you use the 50 m land mask of course. The question 10 is about homework um and
[1:37:43] it says that what do you mean by um units of chlorophyll concentration? That That Clearly it's asking for what units are
[1:37:53] there. there. What are the units of chlorophyll concentration values that you see? And we talked about again and again, but
[1:37:59] just to make sure that you know where to look for it. And peak in histograms is it's not the
[1:38:07] highest peak value. In general, if you see the histogram, you will see uh how many many uh
[1:38:15] uh How many clear clusters are there if you say that then there is a peak in between
[1:38:19] that cluster. So, that's what we're looking for. If you're using different image than what we looked at here, that's fine. You
[1:38:28] can can it just This is just to be able to do all these operations and look at the
[1:38:34] data. Okay, we already answered that about taking log. So, uh the question here is that uh you know, in near the coast is
[1:38:59] chlorophyll coming from tree growing or vegetation growing or it's because of algae. And so, that uh if it is
[1:39:09] if the pixels are clearly in the water, that's what you want to make sure then they are
[1:39:14] chlorophyll pixels. Land contamination near coast, yes, of course, that's an issue depending on the special resolution of
[1:39:23] the sensor that you're using. That's why uh really if you look at where the pixel is clearly in the water, you can have
[1:39:36] um um probability of that being just water chlorophyll because of algae that's high. high. And not you're not looking at other
[1:39:47] vegetation. So, I see a question about homework one. The There is a second part which was asked for, but it's not in the Google
[1:39:58] form. That's okay. You can just post for your It's not in the Google form. That's okay. You just answer the questions
[1:40:04] which are there in the homework form. Um if you are using the same file, I'm not sure why you are getting
[1:40:26] different results. For statistics, it may be the cropping that you do is slightly different and that's why you're
[1:40:32] getting different numbers. But if you are downloading the same file, then I'm not sure why it should look any
[1:40:49] different visually. But statistics, of course, will depend on how you're cropping or, you know, it That That can change a little bit.
[1:41:29] Next week then, we will um um look at some more analysis. We'll look at Landsat example of Landsat analysis and then
[1:41:39] Africa will also demonstrate how to use in situ data along with satellite data to do some more analysis.
[1:41:49] And we want to thank Daniel Nones for joining today and his comments and his helpful question and answer
[1:41:58] session. session. Thanks Daniel for your time. And Africa, thank you also. And we'll With that, we'll end today's session and
[1:42:11] thank you all for joining. And please continue to work on your exercises if you haven't completed them and complete
[1:42:18] the homework assignments also. Again, to repeat, if you don't have exactly the same image, if you haven't
[1:42:25] cropped exactly the same way, you may not get exact numbers. But whatever you get, you do um do that in your homework question and
[1:42:34] answer session and put that in your answers. Thanks everyone. And we will see you next week at the
[1:42:45] same time.
