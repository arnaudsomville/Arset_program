# Monitoring MODIS- and VIIRS-Based Water Quality in Selected Estuaries, Part 2/2

`https://www.youtube.com/watch?v=V0pwwG8YOUg` · id 34 · 1:18:14 · module 31 — MODIS to VIIRS Transition for Air Quality Applications

[00:00] Hello everyone. Welcome back to the second and last session on the this webinar on monitoring coastal and estuarine water
[00:09] quality using remote sensing and in situ data. We're going to use two softwares, SeaDAS and Ocean Color Science Software or
[00:19] OCSSW. OCSSW. You must have used SeaDAS in last week's exercise. We'll continue to use that and we will use OCSSW
[00:30] through SeaDAS GUI. You must have installed OCSSW on your computers through the instruction available through our set website, but
[00:40] if not, you will have time in the during the lab time when we work on exercise two today to install OCSSW.
[00:50] So, today we will focus more on comparing comparing in situ and remote sensing data and go through procedures for developing
[00:58] algorithms. The homework assignment is posted on the website. website. It's due on 5th of January. Please note that you will be answering
[01:11] question using Google Form, but you will also submitting a couple of images from exercise one and exercise two to our set
[01:20] email. Here's the address given at this link. link. Those of you have attended both the webinars and complete the homework by at
[01:30] the deadline will receive a certificate of completion in after a couple of months after the webinar is over.
[01:37] We'll start with a very brief overview of session one and exercise one. And we'll go right to demonstrations.
[01:46] We'll first look at chlorophyll a concentration derived from MODIS and VIIRS and compare with in situ data from SeaBASS
[01:55] and GEOS. Then we will go through procedure for developing algorithm for deriving water quality parameters. Again, we will focus
[02:04] on Gulf of Mexico region and will focus on chlorophyll a concentration. Then, we will have lab time when you
[02:12] will be working through exercise two. The exercise is already available um and you can download that from the meeting
[02:19] page or from the website. So, here's the review for last week. Um we talked about water quality
[02:27] parameters uh from remote sensing observations, how to derive them. So, for that we need satellite reflectance data or water body. We got
[02:38] that MODIS and VIIRS data um from NASA Ocean Color Web. We also got in situ observations from SeaBASS and GCOS.
[02:47] Today, we are going to focus on this part. Uh we'll talk some about atmospheric correction and about
[02:53] statistical or empirical algorithm development. development. We will also validate chlorophyll a concentration from MODIS and VIIRS with
[03:02] SeaBASS data. And we went through a number of steps already. We have picked Gulf of Mexico as our case study region. We located in
[03:13] situ water quality parameters uh from SeaBASS and also independent data from GCOS GCOS uh specially and temporally co-located
[03:22] with satellite overpass. We picked images uh for the same day when we have in situ data. And we also looked for
[03:29] cloud-free images for those days when we have in situ data. We did not look at seasonal to annual
[03:37] coverage of in situ and satellite long time series of data. Today, we will see examples of looking at multiple days
[03:45] from remote sensing and in situ data. But, we'll focus on analysis and statistical algorithm coefficient derivations uh from in situ and remote
[03:55] sensing observations. We looked at SeaBASS site, how to select temporal and special domain and download data. data. We also looked at GCOS site, how to get
[04:09] data from that. More importantly, we went over SeaBASS file format. Any in situ data that you want to read using SeaDAS, they have to
[04:20] be in this specific format where you have a header and data, there are two sections. There is delimiter that you
[04:28] have to specify and fields and units for the data and then the data themselves are listed in text format as
[04:36] shown in this file. Then we started SeaDAS GUI and imported MODIS and VIIRS chlorophyll a concentration images and also imported
[04:50] SeaBASS and GCOS in situ data. We really focused on single day where I focused on for my demonstration, I
[05:01] focused on 26th of October 2013 and for exercise one, you focused on 11th October 2017. This is just one day and just a few
[05:12] points are there, but it gives us understanding and steps of all the procedure that's required without really
[05:20] looking at a lot of data. It just kind of guides us through the procedure of how to look at this data in
[05:27] SeaDAS and today we'll focus on how to compare them. them. We looked at NASA WorldView and NOAA
[05:35] ocean color website where we learned how to monitor cloud-free images where there are in situ data available.
[05:44] And then download MODIS and VIIRS level two data, chlorophyll A concentration and other parameters from NASA Ocean
[05:53] Color Web. We picked Gulf of Mexico as a region, region, selected days, sensors, and then looked at different swaths, and we
[06:03] picked swaths and downloaded ocean color files. files. Now, if you want to download bulk data, then here's the procedure we covered in
[06:13] last webinar. You can have all the years and all the days and global data, and you can bulk download
[06:21] that. that. For this webinar, we're focusing on just a few days because the focus is on learning procedure.
[06:31] And with that, we're going to start with our demonstration. The first one will be to compare chlorophyll A derived from SeaWiFS
[06:40] with MODIS and VIIRS. And for my demonstration, I will stick to the same date for this part, 26th of
[06:48] October 2013, and later on, we will look at multiple days. After that, we're going to have a
[06:55] demonstration of how to develop algorithm for chlorophyll A concentration derivation from remote sensing and in situ data. So, the focus
[07:05] will be on procedure rather than analyzing a lot of data. So, we'll go through the demonstration first, and then you will be repeating
[07:14] some of the same steps in your exercise two today. Let's just compare remote sensing chlorophyll A data with
[07:22] in situ data. And for that, I'm going to use the same data I used last week for
[07:27] exercise or demonstration. That is 26th of October 2013. If you recall, for Gulf of Mexico, we had multiple swaths for
[07:36] this day, and so we had mosaicked both MODIS and VIIRS data, and save those files last week. So, in this SeaDAS, I
[07:46] opened that uh go went to this open product, navigated to where the files were, and then just uh imported them in SeaDAS
[07:57] here. So, if I go to MODIS band chlorophyll A data, uh here's the map. Uh this is
[08:05] chlorophyll A. Also see that SeaBass data for this day and GOCI's data that I had imported last
[08:13] week, they are also in here. Uh you can zoom in and see. So, here is SeaBass data. So, let's compare SeaBass
[08:24] data with MODIS data and chlorophyll data. So, for that, uh two things to keep in mind. First of all, these are
[08:32] point measurements, the in situ data are. Whereas, MODIS data are 1 km resolution. VIIRS data are 750 m
[08:40] resolution. So, it's it's not like uh fair comparison the sense that we cannot expect that uh chlorophyll data from remote sensing and
[08:52] in situ, they will match exactly. But, this gives us overall statistical idea of what the relationship between
[08:59] satellite data and in situ data are. So, in our region of interest, we can um access satellite data to take care of
[09:08] that uh locally. And so, for that, uh some quantitative comparison has to be done, and there's a
[09:15] way to do it. So, if you go here next to this this symbol, symbol, uh uh two arrows, and this plot is there, it's
[09:24] correlative plot. You can click on correlative plot, and here, let's let's look at uh uh this panel.
[09:36] So, here we have point data is the SeaWiFS file for the same day. Uh data field we have chosen is
[09:44] chlorophyll. And this is Y axis, that is uh MODIS chlorophyll A concentration. Here, we have chosen box size of three. We can
[09:56] have one, but three is better statistically because sometimes there is no exact match between uh pixel location
[10:07] and in situ data location. If we have a box, then in situ data appearing in that box, that probability is much larger.
[10:16] So, uh one can take 3 by 3. So, the points here are mean of 3 by 3 uh
[10:25] pixels. And this shows the range in each of that box. So, you can also show regression lines, so that's the green
[10:33] line. And this is the relationship with with R squared being 0.6 in this case. And so, this tells us that of course uh
[10:42] MODIS data have much higher value than in situ data, but then again, it it is expected that, you know, this is much
[10:51] larger domain that we're looking at. I One thing to to be very uh cautious about is that here we're just
[11:01] looking at the procedure, how to do the comparison. We just have one day and a few points. So, what we find here is not
[11:10] really statistically very significant. We need many more points, many more days um to derive this relationship, and then
[11:17] it's um more statistically significant and gives us idea of how satellite data related to in situ data. But this is the
[11:26] way to compare the data. Uh we can do the same with GEEKO's data, although we just have two valid points there, and so
[11:34] it hardly matters if we take 3 by 3. You can see how this relationship changes, and there's two points, but it
[11:44] shows how you can compare. Again, let's go back to the C-BASS data as we have more points. One thing to notice here,
[11:52] if you go to this table view, click here, then you can get actual numerical values. So, this is
[12:00] uh co-located satellite data in 3 by 3 box with in situ data. If you right-click on this and copy this, you
[12:10] can can paste it in a spreadsheet, such as Excel or OpenOffice, and then for multiple days, you can keep accumulating
[12:20] co-located data to do more statistically significant significant or relevant analysis. So, that's the way to do actual analysis, but this shows
[12:32] what features can be used in SeaDAS to to compare remote sensing and in situ data. data. So, we can do the same with
[12:42] VIIRS data here. Go to chlorophyll A. A. Again, here also you can see C-BASS data and Chico's data.
[12:56] And we can do the same thing. Um we can go look at correlative plot. Here again, it's table view, or this is
[13:07] point view. Okay. And here, we can see that relationship R-squared is smaller, and much bigger difference is between VIIRS data and in
[13:25] situ data. So, again this is um um to show that how you can compare this data. data. We can have more days and then we can
[13:37] derive this relationship which is more significant. So, this concludes the first part of our demonstration where we see how
[13:48] remote sensing and in situ data can be compared and relationship between them can be found. So, next what we want to do is derive
[13:57] our own level two data from remote sensing level one data. We last week, what we did was we
[14:04] downloaded ocean color level two data from MODIS and VIIRS. Um that was already derived. Today, we want to start with level one A and
[14:14] derive our own level two data. And why we're doing that? Because when you're dealing with your own
[14:23] own regional interest, you may want to derive your level two data with revised options and we will go
[14:32] through that process. Also, look at here this is VIIRS image. All the coastal region, because they are partially land
[14:40] covered, they are usually missing and these there are no water quality data derived here from um say MODIS or VIIRS. So, can we do
[14:51] something about that if we change some options and get uh some values here for level two data
[14:58] derived from level one. We also talked about atmospheric correction, which is really a very important point and
[15:07] atmospheric correction changes with different areas because atmospheric aerosol and cloud characteristics are different. And so, if we have flexibility to derive level
[15:21] two data, we can adjust that for our own region. So, that's why this procedure is important. And so, we're going to do
[15:28] that. I'm going to close this uh product here for now. And start with level one data. For level one data also, we can use the
[15:40] NASA Ocean Color Web that we used last time. time. Here, we don't want to look at entire
[15:47] Gulf of Mexico because we already know that in situ data are very close to coastal Florida in Gulf of Mexico.
[15:54] So, I have chosen latitude longitude points based on uh GICO's and SeaBASS data uh availability. availability. Uh and I'm also focusing on the same day
[16:04] that I have on 26th of October. And MODIS and VIIRS, we can find swaths. And here you can see that uh this is
[16:16] VIIRS data, this is MODIS data. And we can you can click on this file. Last time we downloaded level
[16:27] two OC files. Today, we're going to download level one data. And I have already done so for
[16:34] both MODIS and uh VIIRS. So, this is uh uh MODIS data. It's in zip format. It's compressed, so
[16:46] you can double-click and then it uh uh uh unzips or uncompresses. And VIIRS data are already in netCDF format.
[16:55] So, once we have these level one data, we want to see how we can go to uh level two data.
[17:03] So, for that, we need this SeaDAS OCSSW. Okay, now this file is uncompressed. So, we can start with MODIS
[17:13] level one data. First, we want to geo-locate the data and so so from OCSSW we start with Modis geo.
[17:25] And have input file which is this level 1A file. And here you can see that it populates
[17:34] this geo file. When you run this, it creates this geo file. It takes a few minutes and I already have saved this
[17:44] geo file for Modis. So our use, but this is basically what you do just get a level 1A file in here and then run this.
[17:56] Once you have both level 1A and geo file, next step is to get level 1B. And this is also where you can
[18:08] get level 1 A as input. And it also puts geo file in here. Once you do that, you can run this and
[18:21] level 1B file is produced. Not only just one, but there are three level 1B files. This is a half kilometer and this is
[18:31] quarter kilometer. So you will see all these three files once you run this. Finally when this is done, we can do
[18:40] level two processing which gives us geophysical parameters. So we go to SeaDAS and we use L2 gen or this is level two
[18:53] generation. generation. And this window opens. Now here there are many options. You can get uh first of all, let's get the file
[19:04] in. Uh now we will have L1B LAC is our input here. That's what will be converted to level two data.
[19:14] So now here this is L1B, this is geo file, geolocation file, and output will be level two ocean color file. Similar to
[19:25] what we downloaded from NASA ocean color web. You can get ancillary data. This is for atmospheric correction if you're going to do it.
[19:37] Look at the products here. We have radiances and reflectances, so these are water leaving reflectances. We want them all. But we
[19:50] don't don't have to look at all infrared now. We can just look at optical and near infrared data.
[19:58] If you look at derived geophysical parameters, all of these are default including chlorophyll A. Let's just leave that as default.
[20:08] If you go to processing option, here is where number of things we want to look at. at. First of all,
[20:15] this is AEROPT is the atmospheric correction, correction, and there are multiple options. Uh Uh depending on which region you are in,
[20:25] you can try different options and see which works the best in the region that you are concerned with. Or sometimes
[20:34] it's a turbid water, especially there are lakes or coastal region, region, atmospheric correction might introduce more error. So sometimes um
[20:46] no aerosol subtraction is also chosen. That's what we want to choose now. Um So we're going to do this extreme
[20:56] options and see what we get. Scroll down here. Leave all these different wavelengths for different thresholds the way they are.
[21:06] But here what we're going to do is mask mask this highlight or saturated um radiance that we want to
[21:17] mask cloud, mask land. Let's not mask any of these. Also, if you go down, here it says
[21:26] proc ocean. You can choose that, okay, force all pixels to be processed as ocean. This is what we're doing just to see
[21:35] whether we can get all that coastal region which was previously blocked. It was considered land. Um and so, if we
[21:44] force it to be ocean, maybe we'll get a few useful pixels in that coastal region. So, we're trying to do that.
[21:51] Uh and then, you can run. And it takes a few minutes. But, you will get level two file.
[22:06] So, once it is done, you will get you notice that it is complete and you will see this L2 OC file.
[22:14] Uh you can open that. So, and you will see in in the file manager manager um um you
[22:23] you go to view, tool windows, and file manager, and it shows uh this level two file. All the derived
[22:32] uh data are here. And this is chlorophyll A uh map that is shown here. Now, you can see that everything is
[22:40] treated as ocean. So, no land is masked. So, we have all this region. If you zoom in,
[22:52] uh you see this um everything where you have some data. So, that is one way uh to
[23:03] to deal with that missing data because of coastal region. Now, these data are still in satellite projections, so we
[23:11] need to change projection of um um this file. Um and it should be in geographical projection WGS 84.
[23:22] Um you can say run. Um and it creates a reprojected file, which is what uh we have to work with
[23:33] when when we actually compare with in situ data. So, now we have the reprojected file here, and we can open chlorophyll a data
[23:52] here. Now, it looks uh uh more geographically uh uh proper shape than before. Um Um and one thing you can do is you can look
[24:05] at this mask manager, and if you Now, you go back and say this high saturated radiance, if you
[24:14] if you turn that on, what it does is it essentially masks um regions where uh there clouds and and
[24:25] land. So, what although everything is treated at ocean, you have masked that, and you have still managed
[24:33] managed to to look at this coastal region where there are less data missing. Now, you can see
[24:40] this region where you have data now. So, um when you have your own level 1 to level
[24:48] 2 conversion, you can customize this customize it for your own region, um and uh compare with in situ data.
[24:57] So, you will be working with uh this for your own data in exercise two at the end of the demonstration.
[25:05] Working with this reprojected level two chlorophyll data from MODIS, I've imported this C bars and G codes in situ
[25:13] data back in here uh to compare. Uh if you go to correlative plot again, uh this is C bars.
[25:23] Um what you can see is that uh compared to earlier um when I was using level two data from ocean color
[25:32] web, which I downloaded, uh there were biases significantly larger compared in between um satellite and in situ data.
[25:41] Now, you can see that biases have gone down. R square also has gone a little down, but the range uh that we saw that
[25:49] has decreased uh in in the box. Similarly, if you look at G codes data, uh now we can see that earlier we just
[25:58] had two points because other points G codes points were in the location where MODIS did not have any data because it
[26:06] was in coastal zone, and it was treated as land. So, uh here we have at least a
[26:11] few more points. So, the idea here is that you can generate your own um level two data,
[26:19] uh and if you go to again go to gen, uh several uh options you can change here uh for atmospheric
[26:29] correction. You can set different mask and see how it works in your own region. There are also thresholds that you can
[26:37] choose, choose, uh zenith angle, solar zenith angle, and satellite zenith angle. What are the ranges ranges uh you can work with, um what which
[26:46] wavelength to use for discriminating clouds, and what kind of threshold for reflectance for that. All these can be
[26:53] changed and level two data can be customized for your own region for better comparison with in situ data. And
[27:03] then that's the scheme we use then. So, this ends the demonstration of OCSESW and generating level two data for your
[27:11] own region. So, next we want to see is that can we derive derive algorithm algorithm based on in situ data and remote sensing
[27:21] data to derive chlorophyll a concentration. concentration. And before we start that, here is the documentation on NASA ocean color web.
[27:31] Uh this is the from document. This is algorithm description. And if you go to chlorophyll algorithm uh for MODIS, it's given here. It's a
[27:43] fourth order polynomial. For low values, a color index also is used. But can we derive these coefficients based on remote sensing and
[27:54] in situ data? That's what we want to learn for our own region. region. So, to do that, I've chosen a few days
[28:05] in October 2013. Uh I've chosen more or less cloud-free areas where we have GAC data. So, the
[28:14] idea is that if in your own region, if you have in situ data, you can find images where you have cloud-free data
[28:22] and then try and collocate them and then derive coefficients. So, using a few days, I'm going to
[28:31] demonstrate how we can do that. So, let's start with one day. Here we're going to work with
[28:39] reflectants data. Again, going back to the document, this uh term here is the ratio of reflectances in blue and green
[28:49] wavelength wavelength and log 10 of that. So, logarithm of chlorophyll is this. So, what we want to do is we have
[29:00] reflectances here. We'll We'll be using 443 and 547, so blue and green. Can we come up with that term here? And for
[29:10] that, we're going to use raster data, raster and math band. We're going to go to We can name this here and say RBG
[29:26] one, say blue green reflectance blue green one. Then edit expression. And we know that it's a log 10. So, here in function, we have
[29:37] log 10. So, we can go to log 10. Here we have a ratio. So, we can choose that.
[29:57] And this is now blue wavelength reflectance and this is green wavelength reflectance. So, now we have logarithm of that and we can say
[30:13] okay. Okay. Okay. And you can see that this is the log 10 and the reflectance that shows up
[30:23] here. here. Now, what we're going to do is again again go back and get in situ data
[30:34] from C G codes here. So, So here's the G close data for this particular day. And we can do the same thing.
[30:54] Find correlative plot. And um get chlorophyll. And look at table. And here what we can do is
[31:10] copy this in Excel file. So this is from uh remote sensing. This is the blue green ratio and this is in situ
[31:18] chlorophyll. chlorophyll. So I have actually done that for all the MODIS days I have. I'm going to share that with you.
[31:32] So here are the data I picked from about 6 days or so. so. So this is uh
[31:44] uh log of remote sensing reflectance ratio. And this is chlorophyll. And I've taken log 10 of that. So now we
[31:58] have these two terms. We are going to make our um remote sensing data X axis and uh log of
[32:08] in situ data our Y axis. So the idea is that um we derive in situ data based on
[32:16] remote sensing data and those coefficients then we can use um in future uh when we have more satellite
[32:24] data, we can use the same coefficients to generate chlorophyll data. So here we can can insert a chart.
[32:34] Make a scatter plot. So So here is the Here's the plot between remote sensing and in situ data.
[32:50] You can go to chart design. Add chart element. Trend line and more trend line options. Here Here the linear
[33:05] line is fitted, but we know that we want a fourth order polynomial, so we can go to polynomial, increase
[33:15] it to four, and we can also say display equation and display R. Uh so this You can change font. So we can read that
[33:31] a little easier. Okay. Okay. So this is the equation we got. Uh as you can see, uh these are the coefficients and this
[33:42] is R squared and this is fitted here. So uh this is the way to do it. Again,
[33:49] um um we don't have enough samples to consider this statistically significant. In Ideally, you will be taking You will
[33:59] be taking hundreds of points um distributed over uh different seasons. And so then uh you can find these
[34:09] coefficients coefficients that you can use for future uh along with uh future satellite data. So once you derive these coefficients, you keep
[34:19] them as your model coefficients, and as new satellite data come in, uh you can uh process uh level one to level two,
[34:28] and then use uh these coefficients to uh get chlorophyll concentration based on new satellite data. So, that is
[34:37] basically basically uh, the flowchart of how we would work with this data. Um, here, again, the goal was to demonstrate
[34:49] how SeaDAS and um, uh, remote sensing data can be used to uh, look at a variety of properties and
[34:59] learn more about water quality. So, this concludes the demonstration and I'm going to go back to the slides. Uh,
[35:07] so, again, uh, uh, uh, we can't emphasize enough that this training demonstrated water quality data validation and algorithm generation
[35:18] using sample data and the results presented are not are not statistically significant. In practice, many more observations spanning multiple seasons
[35:28] are required for the validation and algorithm generation from remote sensing and in situ data. An example is given here for Gulf of
[35:37] Mexico, how many points there are um, in situ to actually validate the data. So, you do need um, sufficient
[35:46] number of data. Um, Um, so, to summarize what we learned in this webinar, uh, we primarily focused on
[35:55] acquisition of available in situ data uh, from SeaBASS and MODIS and VIIRS images. As we mentioned, SeaBASS
[36:04] is a global data set. Um, we focused on Gulf of Mexico. Um, we also learned about preparation of
[36:11] in situ data in SeaBASS format, which is SeaDAS readable. So, any independent data we want to work with SeaDAS in
[36:18] SeaDAS, then they have to be in that format. format. Uh, we learned about SeaDAS features, um, open and display level two data,
[36:27] mosaic satellite images, import in situ data along with satellite images, correlate in situ and satellite based chlorophyll a data.
[36:38] Uh, we also learned how to re-project data. data. Re- learning OCSSW today, uh, we focused on generating level two data from level
[36:47] one. one. Uh, we demonstrated MODIS images, but the same can be done with VIIRS. Uh, get familiar with different
[36:55] processing options. Uh, generate chlorophyll coefficients using level two water-leaving reflectants from MODIS and VIIRS. And then we had that procedure
[37:06] where we fitted the polynomial and got coefficients. So, that's that's what we did today. Here's some useful information.
[37:16] Uh, Uh, for a cloud-free image search, you can use NASA WorldView and NOAA Ocean Color page. Uh,
[37:25] to find satellite overpass over a region of interest, there is an overpass predictor available in NASA Ocean Color
[37:32] web. web. So, that you can coincide in situ and satellite data for validation and for algorithm generation.
[37:42] Uh, Uh, for questions about SeaDAS and OCSSW satellite data and processing, there is Ocean Color forum, where
[37:50] already there are many questions and answers from which you can benefit or you can post your own own question
[37:56] there, too. Uh, finally, we want to leave with a couple of future missions or upcoming missions which will focus on, uh,
[38:06] water quality. PACE is Plankton, Aerosol, Cloud, uh, Ocean Ecosystem mission and it's uh, planned to be launched uh, sometimes next year or so.
[38:18] Uh, it will carry Ocean Color instrument. It's a spectrometer, uh, taking hyperspectral measurements in 350 to 885 nm.
[38:29] And it has the wavelength range, and it is at 5 nm interval. So, it's pretty hyperspectral. PACE's hyperspectral coverage will
[38:39] provide provide to identify phytoplankton community composition. It's designed to improve our understanding of Earth's changing marine ecosystems,
[38:51] manage natural resources, fisheries, and identify identify harmful algal bloom. Just an example shown here that what PACE can see and what VIIRS can
[39:03] see. So, that's the difference because of of hyperspectral data. This is the algal and non-algal particles that PACE will see, and this
[39:15] is what VIIRS sees currently. So, there is more information in this wavelength range. Next mission, which is surface biology
[39:27] and geology mission. It's currently in its design phase, and it's planned to launch 2026 or beyond. Current plans are for hyperspectral
[39:39] imagery in the visible and shortwave infrared, and multi- or hyperspectral imagery in the thermal IR. And in its
[39:50] observing priorities, inland and coastal aquatic ecosystem physiology, functional traits, and health. It's one of the top priority observable in here.
[40:04] So, this concludes our our webinar. And we want to acknowledge and thank our C-DAS team. Ainur Abdul Razik, Daniel Naults, Shawn
[40:18] Bailey, and Yang Bing. They've helped a lot and guided us through many questions related to SeaDAS and OCSSW.
[40:28] We also want to acknowledge the help we received from NASA Ocean Color Forum. And I especially want to thank
[40:36] Shawn McCartney and Selwyn Hudson-Odoi from ARSET for their efforts in documenting the procedures for SeaDAS and OCSSW installation on Mac and
[40:49] Windows, Windows, and how to configure virtual machine for Windows computers. So, that ends today's today's presentation and demonstration. And now
[41:01] it is lab time. So, you have exercise two. two. The first two part are basically comparison comparison of
[41:10] of in situ and remote sensing data and generating level two data. But, the last part is optional, but that is the one
[41:19] that generates coefficients, so you can do it. It's a long exercise, so it may not be finished today, but you have time to
[41:28] work on it. And your homework also will have questions based on exercise one and exercise two. So, it's important to work
[41:35] through all those steps and get images that you will be submitting for your homework. So, thank you.
[41:54] So, first question is, can someone help with the virtual machine installation? I am stuck at the line to install pip.
[42:04] And answer is, if you're having difficulty installing pip, you can try this following command. Um Um either Sullivan or Daniel or Being,
[42:16] Shawn, any of you have more insight into this, please go ahead and and share your answer. This is question one.
[42:33] Hey Amita, can you hear me? Yes. Yes. Good. Good. Um with this, you you shouldn't be having too many issues, but um this is
[42:44] just another alternative command you can use within terminal in Ubuntu to install Python pip. Mhm. Mhm. And if that doesn't work, you could also
[42:55] try um Google searching the problem as well and seeing seeing what other alternative answers you can find to this question.
[43:04] Okay, sounds good. And there is a lot of um um discussion um you know, um install the pip request on the forums, so yeah.
[43:16] And and the pip, yeah, if you want to do the uh install pip uh you can Google it.
[43:22] You know. Yeah, thank you uh Being. I think uh Ocean Color forum has a lot of information. Sometimes you um
[43:32] same issues faced by other people and um you you find answers just by looking at uh Ocean forum. Ocean Color forum.
[43:43] So, question two is that in situ data values vary quite a bit from the remote data sets in the table we were shown. I
[43:51] understand that the values may vary, but the difference in values were almost twice or higher. What do you make of
[43:58] that? And um as we talked about it, um it's not really surprising when you compare in situ data with satellite data
[44:06] because the scales are different. You have point measurements of water samples from which water quality parameters are derived in
[44:15] in situ data and MODIS and VIIRS are almost kilometer box that's and so you were comparing average or area average value with the
[44:27] single point value and um So So basically that's why it's important to look at large number of in situ data
[44:37] coincident with satellite data. So you can can understand statistically what the differences are and then access your
[44:50] remote sensing data according to that. You might want to look at this website here here where where you might find some insight. There are a
[45:00] lot of research papers regionally how they're removing bias in remote sensing data. They you can find those as well
[45:07] online. online. If anything you want to add Seadragon, please go ahead and add to this question answer.
[45:17] Yeah, this is probably a good point to bring up. Two issues that I wanted to bring up
[45:23] anyway. Um Um so we don't want to make any judgments about satellite data based on in situ measurements especially
[45:35] not only single in situ measurements but in situ measurements which are coastal because that's very um turbid
[45:45] turbid mixed data. Ideally you want to if you want to validate satellite measurements you want homogeneous homogeneous water and so you want to do that a
[45:56] little more offshore where pixel to pixel it's not going to um, be varying in a, um, predictable way. It'll be more
[46:05] random and and so at that point, you know, if you if you get measurements more offshore, and then you use those to compare the
[46:13] satellite data, then you then, um, you know, over a large amount of measurements as well, you can, uh,
[46:20] start, um, seeing that the satellite data, uh, matches up better than you would see in a, um, a very turbid, uh, coastal
[46:30] region. The and, um, some of the issues in the coastal region is, um, you know, whether you're actually seeing the, uh,
[46:38] surface of the, um, the the, um, lake bed or wherever you're measuring as well. Cuz if you're taking
[46:45] measurements of the water, but you can see the, uh, uh, you know, if you can see down and see
[46:50] the surface then the the satellite data is, you know, not going to match. So, um, there's a lot of issues with the
[46:57] the, uh, coastal data. Um, in that, um, you you you basically have to anticipate that it's, uh, you
[47:06] know, that that these factors, um, will be in there, um, and, um, then there's also a pixel size.
[47:15] Um, there's two issues with pixel size. One is whether the satellite was looking at nadir, like straight down, or whether
[47:24] the optical angle was very large. Um, what if you're looking at the NASA, uh, WorldView and you see that
[47:33] you're using a a level two file or a, um, you know, satellite data where the the location
[47:41] that you're interested is way out on the edge, then those pixels aren't going to be 1 km by 1 km. If it's MODIS, it'll be
[47:50] more like 2 km by 5 km. They're like huge because of your your optical angle. One of the ways to um, reduce that is
[47:59] you can, of course, you know, look at you know, you can pick your scenes accordingly, one one scene at a
[48:07] time, look at it. Uh when I say scene, the satellite scene, and if it's way out on the edge of the
[48:14] level two file, then you can decide whether you want to use that or not because it will be a big pixel.
[48:21] And that um is shown up if you do uh the processing of level two, that's the satzen that that Amida showed where it
[48:30] said at 60, so you could reduce that to something more um conducive to in situ comparisons, which would be like a 40°,
[48:40] so that way it reduces the allowed um um angles. Um the other thing with pixel size is um um we've been looking at
[48:51] mosaic here, and when you mosaic by its very nature, your pixel size just grew um larger because the pixels of the
[49:01] instrument are actually angled as the detector. It's like a projection of the detector on the ground, um but if you
[49:09] you know, when you map it onto the ground, then then you change the basically the shape of every pixel on
[49:15] the ground will be the same, and so you're going to map pixels into um Earth-based pixels, and so then you you
[49:24] basically basically get into situations where you're it it's it's less reliable. Like you wouldn't really want to use mosaic for comparison
[49:36] with I mean, if you really want to get the best data possible, you want to use the direct source level two file
[49:43] because it's still at the detector resolution. You haven't remapped it. And that's your best chance of getting your
[49:50] best comparison. So, you those are the two things that are, you know, just to keep in mind about
[49:56] satellite data that the the um that the you know, the homogeneousness of the water, you know, and and also the pixel
[50:05] size. Thank you so much. Both of these points are excellent and we specifically didn't mention, but comparing
[50:17] comparing with smaller zenith or almost nadir, that would be one way to validate data. If you If you look at your exercise and
[50:26] if you look at part three of exercise B, not mosaicking for that reason. Also, we have chosen
[50:33] now area which is right around where we have in situ data. But we haven't considered considered satellite zenith angle in this
[50:41] comparison that we're doing, but that's a great point. We For actually validating, that's that's one thing, zenith angle, and then
[50:53] one one question is that if you have satellite data matching well in open ocean or homogeneous region,
[51:04] region, um um would you would you assume that it it's okay in coastal region also? That um
[51:13] So, So, validation has to be done more away from coastal region and then sort of assume that what you see there
[51:23] If that's good comparison, then you can extend that to coastal region. You assume that it accuracy must be
[51:30] close. close. Is Is that a valid assumption or because of of if the shallow water and turbid water if
[51:37] you're looking satellite is influenced by bottom reflection, then you might get Um not very accurate answers, right, Danny
[51:48] Danny? Danny? I I mean it it's it's good at understanding water, um but as as you get close to the uh
[51:57] shoreline, you've got the um you know, the the stray light coming off of um the the coast. There's a lot of aerosols, as
[52:07] you noted, uh different um atmospheric issues going on as well as the more turbid water, all kinds of
[52:16] other factors are going on and you know, these equations um you know, are based on on on water and try to reduce all
[52:26] this, but so um you know, it that coastal you know, processing gets more challenging to, but uh
[52:38] but you do want to validate that, you know, when when you measure water that, you know, it matches, you know, the the
[52:46] I mean, it's the same algorithm that you're applying essentially to the basics of the for chlorophyll, but then
[52:53] you're doing all that, you know, removal, so it's um yeah, basically it's tough to validate coastal water cuz of all the um
[53:03] Um Um issues. issues. Not to mention biggest Oh, one thing I wanted to add also, which might be helpful in the the
[53:12] the uh cuz the other point that I noticed noticed um about processing the whole world as an ocean to get rid of the land, um one
[53:21] thing to to note is that you if you have a high-resolution satellite data, uh currently and maybe for the
[53:30] foreseeable future, our landmasses are 1 km data that inside there, so um that's the data that's stored, so if
[53:41] you have a high-resolution satellite like uh Landsat or even Vera's slightly higher or Sentinel 3 if you get
[53:50] to 250 something like that, then if you're using the the land mass, you're you're you're you're knocking off 1 km blocks and so
[53:59] you're losing data. So, by processing the ocean that the world has ocean basically ignoring the land, you get all
[54:06] this data, but then you still have land. So, one way to then subsequently get rid of the land at a higher resolution and
[54:13] SeaDAS has a land mask processing tool which you can set at a higher resolution. resolution. So, so then you can mask out the land
[54:25] subsequently at higher resolution, which can be helpful cuz then you can get some of these pixels that were masked out as
[54:33] land back because they actually weren't land at high resolution. Good point. Thank you. There is SRTM based land mask available also, which is
[54:44] 30 m. So, yeah, that is useful for masking land. Um So, question three is um is the L1B the file that we should
[54:58] use for L1B processing? No, for L1B processing inputs are L1A and geo files. One thing that's helpful, every
[55:08] processor has its own name, but in general if something's called level two, then it's it's what the output file is.
[55:16] So, the level 1B you're creating a level 1B. 1B. Mhm. Mhm. So, question four is when we have many
[55:24] in situ data points, how do we match them in SeaDAS with satellite images? The demo given was for a single file. If
[55:32] we have many files, do we do it manually or is there an automated way of doing it?
[55:39] So, my experience working with SeaDAS, um what I showed actually did manually, uh compared image by image and then made
[55:48] that Excel file. Uh when we use command line, uh we can process many images at a time, but um
[55:56] Danny, you might have a better insight into that suggestion for that. Well, Well, I mean, I have
[56:10] I mean, not not offhand. There there there is There are there are some tools in there. I think it there's a pixel extract tool.
[56:20] So, um that might be used. You would have to you know, process you you you would need to learn the GPT
[56:29] uh aspect of SeaDAS. Um So, I I haven't explored that as much. I mean, SeaDAS but but but if you can
[56:40] figure out how I obviously if if you need the GUI to do it, then you can't do it this way cuz the GUI is one by one
[56:48] kind of, but if you can figure out a processing way that that you could run something from the command
[56:54] line and tell SeaDAS to do what you want from the command line, then you can loop through files.
[57:01] Um Um Yes, so working with GUI, I think um work with a single file and then extract
[57:09] data, which is basically what we did when we created that Excel file for multiple days. Um it gets tricky if you
[57:16] have 100 days or a season like or one annual data, one year worth of data, then it helps to go to command line and uh
[57:25] use GPT to do that. Okay, uh question five is could you talk more about the SBG inland water mission?
[57:35] Are these ocean prod procedures amenable to working in freshwaters? freshwaters? So, um I don't have exact answer for that.
[57:46] A lot of these sensors are used for inland monitoring, freshwater monitoring also. also. But, we will find out precise answer and
[57:55] let you know. Question six is do you have any idea when OC SSW will be integrated in the
[58:12] SeaDAS for Windows? I think we'll have to look to the SeaDAS team to answer that question. Yeah, OC SSW is available for Windows
[58:29] right now. Sorry? Sorry? Uh the question is when the OC SSW will be available in Windows? Is that the
[58:37] question? question? Yes. And it when it when will it be integrated in the SeaDAS for Windows? So, right now I think you have to
[58:50] install OC SSW in in virtual machine. Is there any way that step can be eliminated? I think that is
[59:00] the question here. Uh okay, that um um I don't think so. Because OC SSW is developed in
[59:10] C++ and C and other Python like multiple languages. languages. Um it cannot run on Windows in the native environment.
[59:21] Uh Uh so, right it can only run on Linux environment. environment. Um that's why we have to install
[59:28] you know, the Windows Linux app. Windows Windows or you know you have to have virtual machines that you can install
[59:38] Linux environment. I think think I have a like executable or CCW on Right. So you know if if you look at ocean color
[1:00:01] form you will also might find some answers to I mean not answers but solutions to some of these problems that
[1:00:11] how to install installation part in CCW because it's integrate into CDS because you can access CCW from the CDS
[1:00:23] application. Yeah. Yeah. Thank you. Question seven is during exercise one after step three of creating land masks
[1:00:36] I'm not able to add the vector file of sea bass. While adding the seed file it does not properly show the location on
[1:00:44] the map. How do I add the sea bass file? So basically you you have to select the image you
[1:00:53] want to put sea bass on and then import data from file vector import vector sea bass and as we
[1:01:05] saw in several cases that's the way you just get import the sea bass file. So not sure what the problem you might be
[1:01:15] having. having. You do have to select an image on which you want to put this data. That's for
[1:01:21] sure. I would suggest if you're having problems like something like this to make the essentially make what your
[1:01:30] problem is into step one. Um so you don't do all this other stuff and find a single file, open that file, and
[1:01:39] make sure that that file contains the coordinates like of your um SeaBass file. So that way you know that the the
[1:01:48] lat lon would fall in there and then just you know, do what um Amita said that the open the core FL or
[1:01:57] one of the bands of that and then import the SeaBass data. That way you're not doing other things. That way you
[1:02:05] just see how it works. And it should automatically be selected. There's a toggle in the layer manager to
[1:02:13] toggle it on and off. But um when you do import a SeaBass uh vector, it will be toggled on to
[1:02:21] begin with. So the question eight is can we process Sentinel Sentinel um base data on SeaDAS? If so, are these
[1:02:31] steps going to be the same as MODIS or VIIRS? Any suggestions? Um I have used uh I don't think through
[1:02:39] GUI you have um MSI. Uh I think OLCI was going to be added, but um through SeaDAS GUI um if
[1:02:49] you look at that OCSSW, uh you don't see uh Sentinel sensors in there through GUI. But in command line,
[1:02:57] of course, you can use uh Sentinel data with uh with OCSSW. And once you uh you can display if you have uh
[1:03:07] product derived from OCSSW in command line, um for Sentinel, those data can be imported into SeaDAS to visualize and analyze.
[1:03:19] But for generating level two data in in through GUI, uh I don't think it's it's possible yet.
[1:03:29] Um Um and to to for OLCI OLCI you need to install the the processors for it. So, that needs to be done at the
[1:03:39] command line, but I believe once that you've you've at the command line made it operational so it will process,
[1:03:49] then I believe you should be able to process to use the GUI to process Sentinel Sentinel data.
[1:03:55] data. Um Um Yeah, OLCI I think there is a there is a OLCI OLCI tool in the new version of C DAS, but I
[1:04:04] have not tried that I for Sentinel, so I'll have to check. Yeah, and this is beyond the the topic
[1:04:11] of of C but C DAS also is essentially SNAP as well and Sentinel SNAP was built for
[1:04:19] Sentinel, so we're not addressing any of their processors, but they have their own own um um set of processors, I believe somewhere
[1:04:29] in in the in there or that data, but it's it's separate and it's specific to Sentinel 3.
[1:04:39] So, question nine is there are four C DAS data points in the file, but the correlative plot shows only two. Why?
[1:04:46] So, there there can be two reasons. One is in one of the files you can see that
[1:04:52] data are at the same location. There are two points but at same coordinate. And so, when it displays, it displays as one
[1:04:59] point. point. Ideally, you would average that those two points and make one point. So, that's one reason. Another reason is
[1:05:09] there's no our data available. Maybe it's in that that coastal zone where it was masked as land. So, that there's no remote sensing
[1:05:17] data available. So, then that point will not be displayed on your correlative plot. plot. So, uh Uh when when we masked all the coastal
[1:05:29] uh region as ocean, um in the second part, you we we increase those points because satellite data were
[1:05:37] available there. So, these two reasons can be there. Well, one of the things with SeaBASS data, depending on how it was measured,
[1:05:45] they can measure it over a period of time. They can move around from station to station and actually return to a
[1:05:50] station. So, if you have if you have two points of data that are at the same station, but they could be drastically
[1:05:58] different by days and time. And so, you may want to um um I did ideally, if you're um
[1:06:05] you you want to edit your SeaBASS files, make a copy of them, edit them down to be matching up with your uh satellite
[1:06:13] data, so they don't contain points that are away from the time of your satellite data or the day of your satellite data.
[1:06:21] And that's easy to do because the SeaBASS files are text files. So, you can just make a copy of that file, edit
[1:06:28] out just the lines that you want, keep them in it, and then load that file in instead of the whole SeaBASS
[1:06:35] file. file. Yeah, so uh for GCOS data, we were able to pick um because they were high-resolution data
[1:06:43] and we were able to pick points which were close to a satellite uh overpass or a revisit time. Uh for SeaBASS, we just
[1:06:52] uh followed that date. Um and last time as uh Daniel mentioned, ideal window uh for comparison would be plus minus 3
[1:07:01] hours um of in So, they are within that period, satellite data and in situ data, that's that's that's good. Uh
[1:07:08] in a day a lot of things can change. But for understanding the procedure, we just went ahead and selected days rather than
[1:07:16] day and time. There's There's one other thing and I don't remember all the terminology of it. Um SeaBass folks do, but they they
[1:07:26] have your base in the SeaBass files, they there's a depth to it. So, you know, you're measuring
[1:07:34] at certain depth, but they they also sometimes will make files where they they adjust the depth to be at the
[1:07:42] surface. So, they use certain equations to bring bring it up to the surface. So, to to so that So, those would be closer
[1:07:52] to what the satellite might see. And I can't tell you how they do it or any of the equations on it, but but just
[1:08:01] keep in mind that some of these measurements are are not at the surface of the water, they're down below.
[1:08:08] Yes, so SeaBass has that information what depth and you can choose at what depth you want the data.
[1:08:16] That that is one of the options. Um okay. Question 10 is I'm currently stuck at providing a proper link for Python 3.
[1:08:32] Could you please advise what should I provide to Sudo so that this command works? works? I think Selvin or Shawn, I think this is
[1:08:41] your question. You might want to talk to your system admin. admin. Um Um Um because they they might know your
[1:08:50] machine better. Um yeah, so that's what we suggest. You know, we're not your system admin, basically. Question 11, when I'm calibrating RE
[1:09:04] errors, I get the following error, execution exception Java IO exception calibrate wheels failed with exit code one.
[1:09:14] Uh what why is this happening? I think we'll have to check. Um I'm not sure what the error means.
[1:09:24] Because obviously I didn't get that. Uh and so I I will have to go back and see
[1:09:28] what that means. Has it something to do with Java? I'm not sure. What is the concept of taking
[1:09:49] logarithmic values while calculating and comparing coefficient values? Um Um So if you if you look at the plot um
[1:10:00] relationship, it it's um either you can So when you find when you find uh you look at log of chlorophyll and log
[1:10:11] of reflectance ratio, they have that relationship uh that we saw. saw. So that's why we are taking that
[1:10:19] logarithmic value. So when you you get the answer from coefficients, it's log 10 of chlorophyll. So you have to take
[1:10:30] exponential of that to get actual chlorophyll value in milligrams per meter cube. Question 13 is also similar to question
[1:10:49] 11. 11. Um Um It has execution exception with Java IO. So it it looks like that could be something with Java version
[1:11:01] on your machine. I think this is if it's like execution exception, usually it's something was wrong on the
[1:11:09] server side or the OSISW execution. And then it just something was wrong if the execution it didn't complete.
[1:11:19] And that's why it gives this exception here. So, we have to check what was the parameters and what was the message from
[1:11:26] the OSISW execution. But we will try to provide a better message than this one. That this is
[1:11:33] um um maybe this is not really helpful for the end users. So, we will try to give
[1:11:39] another another um um better descriptive message what's wrong. But but you need to give us other than
[1:11:46] this message they will they will be something you know what was the you to return return um string from the server side.
[1:11:54] Okay. Yes, if there's any additional information, you can provide that would help. help. I yeah, this basically this is more like
[1:12:01] the execution on the server side. It was OSISW execution. For example, most of the time if you repeat the same command
[1:12:09] you were trying to execute on the OSISW from the command line that that it it will not complete.
[1:12:22] But yeah, we can look at this. I see. And provide more you can send us screenshot what was the whole message.
[1:12:34] Great. Great. Also, is he trying to run Modis L1B from an Modis L1A file plus a geo file or
[1:12:47] what what is anything to do with Modis L2 data? I I really understand what is he trying to do.
[1:12:59] Yeah, it it to me it looks like uh trying to run level two from level one B
[1:13:05] um has this problem. But but the exception says modus L1B failed. So, it looks like he's running
[1:13:13] modus L1B. Okay, yeah. Right. L1B does have L2 as a input. My guess was that this was his tar- target
[1:13:23] ultimately down the chain. He wanted to get to level two, but if that's not the case, then Bing's right that
[1:13:30] the inputs to level one B are level one A and a geo file. Right. Right. Level two comes much later. That level
[1:13:39] one B then serves as an input to the level two gen, which will then create the level two alongside a geo file again
[1:13:48] as inputs. If you look at the exercise, all these steps are are given uh which file sorry
[1:13:57] input for which processing. So, carefully if you follow the steps, um you at least that part uh can be taken
[1:14:04] care of. Yeah, and there is also a um a menu help um page online uh see that
[1:14:13] gsfc.nasa.gov/help. So, it'll you know, like a it'll show you what what input uh you know, for each process or what's the
[1:14:25] input and the output. Okay, I think I'm just going to put the Yeah, I put the link in the chat.
[1:14:47] Oh, okay. Great, thank you. So, you can check this link for more help. help. Yeah. Um I I think exercise two will take some
[1:15:22] time to finish and so you have um 2/5 of January to finish both the exercises and it looks like uh based on
[1:15:32] your own computers systems, it you might have some issues, but you can contact uh NASA Ocean Color Forum. They There you
[1:15:45] will find uh more expert answers about SeaDAS and OCSSW. Um you can always contact us and we can talk to SeaDAS
[1:15:53] team, but usually through Ocean Color Forum, uh you can get the same um access to same SeaDAS team, I believe.
[1:16:03] Um Um So, So, it's almost noon here and um if you don't have any more questions, we want to thank you for attending
[1:16:15] this webinar series. And hopefully um at least it it gives you idea of complexity and still usefulness of some of these
[1:16:24] tools uh to learn more about water quality based on remote sensing. So, we will uh close the series soon. Um you will receive a
[1:16:37] survey uh in a day or two um um which asks for your feedback about the training and it's very important for us
[1:16:46] to get the survey back and your feedback about how we can improve or what other topics you're interested in. So, please
[1:16:55] take a few moments to finish the survey when you receive the link. And you can finish homework is posted online also. So, you
[1:17:06] can work on homework between now and 5th of January. So, if there are no more questions, we
[1:17:14] want to thank you for attending. We want to thank entire seedas team, Aynur, Bing, and Daniel. You've been
[1:17:23] great help in in answering all these questions. And then I also want to thank our seedas colleagues who help us in
[1:17:32] organizing this this webinar. So, in addition to Sean McCartney and Saman Khodai, Khodai, we had help from
[1:17:43] Rob Lovins, Sara Khosrowjerdi, and Jonathan O'Brien. So, thank you seedas team for your help. And thanks everyone for attending this
[1:17:52] webinar. webinar. We hope to see you in our future webinar soon. It's almost 3:00 now, so wishing you happy holidays
[1:18:04] and happy New Year in advance.
