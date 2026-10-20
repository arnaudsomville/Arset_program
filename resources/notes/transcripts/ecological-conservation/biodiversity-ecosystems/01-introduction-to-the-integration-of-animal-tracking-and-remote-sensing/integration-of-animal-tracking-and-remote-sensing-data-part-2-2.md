# Integration of Animal Tracking and Remote Sensing Data, Part 2/2

`https://www.youtube.com/watch?v=xVFU4qHtvW8` · id 249 · 1:30:12 · module 65 — Introduction to the Integration of Animal Tracking and Remote Sensing

[00:03] Hello everyone welcome again to this training series on the introduction to the integration of animal tracking and
[00:11] remote sensing. This is part two which is specifically about the integration of animal tracking and remote sensing data.
[00:19] My name is Juan Torres Perez from NASA Ames. As always I am here with my two colleagues from the eco conservation
[00:25] team from NASA Arset. Justin Fain and Satya Chimal. And And as the during the previous part we also
[00:34] have our invited speakers Morgan Gilmore from NASA Ames and also Claire Terrellbomb from the USGS and the
[00:41] University of Georgia. So welcome again Morgan and Claire. Here's a summary again of our training learning objectives. In general by the
[00:53] end of the this training you'll be able to identify the types of animal tracking tags and sensors that are commonly used
[00:58] in animal tracking. Also to identify the types of remote sensing data and products that can be used for species distribution models and
[01:08] step selection functions. And the process for integrating remote sensing and animal tracking data in species distribution models and step
[01:17] selection functions to facilitate an understanding of animal movements in relation to the environment. And finally to recognize key takeaways from examples
[01:28] of terrestrial marine applications that inform and characterize animal habitats. Again the prerequisites for this training is the fundamentals of remote
[01:39] sensing or to have an equivalent experience in remote sensing. As I said this is part two the
[01:47] integration of animal tracking and remote sensing data. And at the end of this part the homework will will available on the
[01:56] training web page and you have until June 5th to submit the homework. Eventually, if you attended both parts
[02:04] and submitted the homework on time, you will get a certificate of completion by email. It's Elsa Ken and Juan.
[02:14] Uh I'm also here as I said with Sativa Cruz and Justin Payne from the NASA Ames Research Center the Bay Area
[02:21] Environmental Research Institute. And as during part one, today we also have our invited speakers Dr. Morgan Gilmore from NASA Ames and also Dr.
[02:34] Clark Terrellbomb from the USGS and the University of Georgia. For part two in particular, uh uh you will be able at the end of this
[02:47] session to identify the steps in the process for accessing animal tracking data in species distribution models to
[02:55] facilitate an understanding of animal movements in relation to the environment. environment. Uh you'll also be able to identify steps
[03:02] in the process for accessing animal tracking data in step selection functions functions to facilitate an understanding of animal
[03:09] movements movements uh to recognize key takeaways from examples from terrestrial applications on inform and characterize animal habitats and also from marine
[03:19] applications that inform and characterize animal habitats. And as always, uh feel free to enter your questions as the as we go in the in
[03:31] this training and uh in the in the question box and eventually uh once we once the training ends, we'll go into
[03:40] the Q&A session. And uh if by any chance because of time or uh most mostly we are not able to get to your
[03:49] particular question, no worries because uh we'll try to include it in the Q&A document, which will eventually be
[03:55] posted on the training website about a week after the training. And with that, I will leave you now with
[04:04] first with Morgan Gilmore. She's going to be doing uh short will be showing you an example of animal tracking and the
[04:12] use of NASA's remote sensing data, specifically for frigate birds, and then eventually uh Morgan will pass to uh
[04:22] Claire and Claire will do another example but on the terrestrial side. She will be talking about uh tracking beers.
[04:30] So, Morgan, thank you again Claire, thank you again for being here and take it away, Morgan. Okay, uh thank you, Juan. Uh hi, I'm
[04:43] Morgan Gilmore. I'm a research scientist at NASA Ames Research Center in the Bay Area in California and um
[04:50] for our second session today, I'm going to be talking about a case study in the marine environment with frigate birds at
[04:57] Palmyra Atoll and applying species distribution models to those data. And so, when you're starting to think about uh using remote sensing in your
[05:09] with tracking data, you want to um consider a couple of things, including which environmental variables or environmental covariates you're going to
[05:17] use. use. And what I find most useful is to just run a literature search and see what um
[05:24] other studies have done that have used remote sensing either with your study species or in your study region or for
[05:31] similar research question that you might have. And they can point you to um specific data sets or specific types of
[05:38] data sets that could be really useful um because honestly, it's really overwhelming. There's a lot of remote
[05:43] sensing data sets out there and so, it's good to have um some kind of plan going into it.
[05:49] Um also uh you need to consider the temporal resolution. Again, that is best suited for your study species and your
[05:56] site. Um it's fine scale data that is provided hourly or daily sounds really great, but it's not always feasible or available in
[06:04] all regions. Um this is especially true in uh tropical regions where there's a lot of cloud cover. Um and also there
[06:12] definitely seasons, as you can imagine, where cloud cover also affects um remote sensing imagery. And you may also want to consider the
[06:19] scale of your variables. Some things might not change very much on an hourly basis anyway, and um for example,
[06:25] temperature in the water doesn't change very much on an hourly basis in general. Um Um and so these are just some things to
[06:32] think about as you're trying to select um environmental covariates for your models. Uh something else that I
[06:38] recommend doing is to make sure you record the spatiotemporal resolution of the data set you end up working with so
[06:43] that you can report it later. It's really good to know um you know, that your data set has a
[06:49] quarter of degrees uh spatial resolution and you're collecting it monthly or something. something. So, just to quickly recap uh what Claire
[06:57] went through in the first session the other day, um I'm going to be talking about species distribution models, and
[07:03] this is asking the question how the environment differ between where the animal did and did not go. And the
[07:09] ultimate result is a habitat suitability map, which I'll show you in a couple of slides. And um the basic steps are you
[07:16] have your animal tracking data, you define presence and absence points, so where the animal did and did not go. You
[07:22] have your environmental covariates, and then you put all of that into a binary um model where your response variable is
[07:29] either presence or absence, and then your um predictors are your environmental covariates. covariates. And so the tracking data set I'm going
[07:39] to be demoing with you today are from great frigate birds at Palmyra Atoll. And so Palmyra Atoll is in the central
[07:46] Pacific Ocean in that yellow box. You can see in the middle there in the map on the bottom.
[07:52] And And these data were collected in 2022 to 2023. 2023. We use GPS tags and we had seven birds.
[08:01] And you can actually go and download these data. So the data set is available in that bottom link there. And the
[08:06] original intent of collecting these data was to quantify frigate bird and other species movements within and outside of
[08:13] the marine protected area around Palmyra Atoll. And those results were actually just published in a paper in Global
[08:19] Change Biology a couple weeks ago. And so there is the link to that paper there as well.
[08:26] And if you're not familiar with seabirds, frigate birds are seabirds. And so this means that they typically
[08:31] nest on islands, but completely rely on the ocean for food. And so they have to leave the island every day and go and
[08:37] search for things like fish and squid, which they can then return to the nest to feed their chick.
[08:42] And so because they're repeatedly returning to the nest all the time, they're making what we call central
[08:48] place foraging trips where they're tied to that one location but exploring the entire ocean around it. And so the species distribution model
[08:56] can help us answer the question, what's the ocean like where these birds are going? going? And so if you were to go to that website
[09:04] and download the frigate bird data, it will look something very similar to this where we just have a data frame.
[09:11] We've got a time stamp. You have a lot of longitude latitude, the tag ID, which is called tag local identifier in the
[09:17] data set that you download. And then the island is Palmyra. And so I did some basic cleaning on
[09:24] this. I'm just going to show you these screenshots really quickly. One thing you can do to clean the data as we mentioned on the
[09:32] other day is that you can apply a speed filter to it so that you can remove any points
[09:39] that are kind of wonky. And so for frigate bird specifically, the literature, there's another paper that defined a good speed threshold for
[09:47] frigate birds is 90 km per hour, and so I applied that to this data set. I use a
[09:52] package called track R, which full disclosure I am an author on, but there are many packages you can use to
[09:58] calculate speed pretty easily. The other thing that I did to this data set is again, because frigate birds are
[10:07] central place foragers, we are not interested in any locations that are at the island, and so I removed all points
[10:14] that were within 5 km of Palmyra, and everything beyond that we're going to use in the analysis to specifically look
[10:21] look at oceanographic habitat. And so then the next thing I'm going to do is plot it, and so these are what all
[10:27] the frigate bird data look like. You can see there's just this crazy massive points around the yellow star, which is
[10:32] Palmyra, and on the left there, but if you want to just look at one bird, for example, um there are far fewer points
[10:39] for this particular bird, and you can see exactly where it went, which is pretty exciting. And so I'm going to show you two
[10:48] different ways that you can download environmental variables in the program R. The first is the R package ERDDAP Extractor, and this works
[10:59] through through an ERDDAP server, which you can see is stands for Environmental Research Division Data Access Program, but
[11:07] basically it's just a standardized way that you can access lots of different data sets. And so this particular
[11:13] example works through the ERDDAP provided by NOAA, but you can actually substitute other ERDDAP platforms within the R package as well.
[11:21] And so what you're going to do to find a data set is you'll actually go to this website, and you can search for
[11:28] data sets with the red You can see See red circle in the search box on the image on the right. And as this example,
[11:35] I searched for chlorophyll and you can see that 171 data sets come up. And so that's a lot of data sets and so again,
[11:42] this is where other studies and in a literature review would come in really handy to help you kind of fine-tune your
[11:48] search and find a data set that matches your your spatiotemporal spatiotemporal needs. And so if you want to look at the
[11:57] different data sets, you can look at the background info here kind of in the middle column and that will give you
[12:04] more specifics to help you choose that data set. Uh Uh once you find a data set, you can also
[12:12] search for it within R with the info function and if you were to use this info function, then it would
[12:17] just return the metadata for that and so you can see in the dimensions here that it shows you the time frame. So this
[12:25] data set runs from 2008 to 2025. So our data from 2022 fit well within that. Um we're looking at
[12:33] sea level things, so altitude doesn't matter and then our latitude and longitude fit within um these ranges as well. And you can see
[12:42] that the one variable available in this data set is chlorophyll and it even gives you the units. And so this is all
[12:47] really important information to know so that you can report it later. And so the way that you would download
[12:56] these is first you would do what we're going to do is we're going to download a grid of the data so that you can um
[13:03] return to it later and I will show you what I mean by that. Um but first you
[13:08] have to figure out what the size and the extent of your grid is. And so right here I just made two data frames. One is
[13:14] just the min and the max longitude and latitude of the frigate bird data called frigate bird tracks and we made that
[13:20] into a data frame called extent to download. And then I did the same thing with the the dates of the data set. So
[13:26] we have a dates to download data frame. Um step number three there says um we want to put the data somewhere. So, you
[13:33] just um designate something which I called out folder. Um and then you want to set the cache to
[13:38] make sure that the the data go into that out folder. And And moving from chlorophyll to sea surface
[13:47] temperature, um this is an another example um of how you would actually download it. So, once you've defined
[13:55] your extent to download and dates to download, then that it's actually pretty simple. So, um um the R package has a function called R
[14:04] extract 03D. And so, that enables us to a download a grid. And um it might take a little while to download it, but then
[14:11] you have the data, which is great. And then there are options to plot it. And then if you are working within the tidy
[14:16] verse, you can actually um turn it into a data frame with function called tidy grid. grid. Um I do want to make a note that
[14:24] sometimes if you're running into errors trying to download the data, you might need to uncomment this uh Z cord um
[14:31] argument. Um some so, that just refers to altitude. And so, some data sets have altitude where you just have to say 0 0.
[14:40] Um I wouldn't worry about it, but sometimes if you have an error then the Z cord thing might be your way to fix
[14:46] it. it. Um and so, if we were to download the sea surface temperature, you can plot it. And here is a um just a really basic
[14:55] map of the grid of sea surface temperature that we just downloaded. And so, it's really great to plot things and
[15:01] just verify that the data exist and are in the grid that you want. Um and then the second package I wanted
[15:10] to share with you is a package called marmap. And so, this again um relies on data from NOAA. And it specifically
[15:17] downloads bathymetry. And so, bathymetry is really important for um a lot of models that have looked at for uh
[15:23] seabirds and other marine mammal animals in in the ocean environment and so bathymetry is really handy. And so this draws
[15:34] directly from the NOAA ETOPO 2022 database and there is a link to a citation for it right there.
[15:41] This also downloads the data as a grid and here's just some notes. You want to make sure that you actually save the
[15:47] file so you're not repeatedly pulling data and tying up the the NOAA server. And one thing that is really useful if
[15:56] you're working in the Pacific Ocean across the date line, you want to make sure that you set anti-meridian equals
[16:02] true. true. And that makes the data way easier to work with across the date line. And so if you were to
[16:13] So once we have all our environmental variables, then we want to actually for the model attach them to our tracking data set and
[16:21] so I'm going to cut to our studio in a second here to show you what that would look like. But
[16:28] here's just some code to demonstrate how you would load your files into the R environment. They are
[16:36] NC files which are pretty typical for a lot of environmental data. And so you would just use the package
[16:43] ncdf4 and use these NC open NC get um um functions and then you would make it a
[16:50] raster. raster. And so now I'm going to pause PowerPoint and and then I'm going to switch to RStudio.
[17:04] Okay, so we are now in RStudio and I'm going to show you how to attach the environmental variables to the tracking
[17:13] data set and so I've actually got six scripts which I'm going to go through, um, for the species distribution models,
[17:19] and then these are all going to be available online. Um, for each script, I they're just numbered and they have a
[17:25] short description of what they do, and then the packages of that you need to run these different functions.
[17:31] Um, and so I just showed you this code on the PowerPoint slide, but what you're going to do is, um,
[17:38] you're going to read the files in the R, and you're going to, um, just open them, and then you're going to create a
[17:46] raster. You can ignore that warning message. And so now we have a raster of chlorophyll data right here.
[17:55] Um, Um, and so what we're going to do, and, um, this is important because this is actually a step that I'm going to refer
[18:02] to two more times throughout the species distribution model, but we're going to make, um, we're essentially going to attach the the
[18:10] environmental variables to the frigate tracks with a for loop. And so to do that, we're going to create a
[18:19] data frame of all the dates in the chlorophyll file, um, and we're going to loop through the
[18:24] dates to attach it to the frigate data. And so the way that this works is, um, the chlorophyll raster the chlorophyll
[18:32] is a raster and each raster layer is a different date. And so you can see if you just look at names of the
[18:38] chlorophyll file, then these different dates come up, and so we're working with a monthly data set, so you can see that
[18:44] each one of these, um, just represents one month. And you can see that all of the the names of the raster layers start
[18:51] with X, and so we're going to, um, essentially cycle through all these X dates in the for loop. And so here,
[18:59] um, we just create a data frame that has those dates, and then we make a date time out of that. Um, so we remove the X
[19:07] from that, and then we are going to create a column called month date, which just rounds it to
[19:15] uh uh one month, and that will match up with the frigate bird data. And so, we make this data frame, and you can see
[19:23] that we have a column called x date, which is the name of the raster layer, and then we have the normal date time,
[19:29] and then we have something called month date, where June 15th, for example, is down is rounded to June 1st.
[19:36] Um and so, then we have the frigate bird tracks, which um are sampled at 5-minute resolutions, but we're just going to
[19:42] down uh round all those to monthly. And so, you could see that um these here, 9:45, 9:30, 9:45,
[19:51] 10:00. So, that's the normal time stamp, but then all of those are just rounded to June 1st um for the sake of being
[19:57] able to attach the chlorophyll data to these tracks. And so, then what we're going to do is
[20:03] we are going to um make a another data frame, or a vector, rather, of just all the frigate bird
[20:14] dates, which again are just going to be all these June 1st, July 1st, August 1st, 1st, et cetera's, and then we're going to run
[20:22] this for loop. And so, this for loop actually takes a long time, and so, I'm not going to run it, um but I just
[20:27] wanted to show you what's happening. So, for the entire um um the all of the frigate bird tracks, they all
[20:39] have that monthly date, we're going to loop through that, we're going to create um one date, and we're going to say, "Okay,
[20:48] let's make a data frame of all the frigate bird tracks that have that one date." Um we're going to make a spatial
[20:54] points data frame out of that, because that work that plays well with um this function here. And so, really, all the
[21:01] magic is happening right here, and it's just this raster this function called extract from the package raster. And so,
[21:08] we take all the dates that for June 1st for example in the um chlorophyll raster and then we have
[21:18] the frigate bird spatial points data frame, which is just called PT in the loop. And then we attach all those to
[21:23] the frigate bird tracks. And that's all that the loop does. It just takes a really long time because there's 72,000
[21:29] points. points. Um and so uh you're going to run that loop. It's going to work well. And then one thing I really
[21:39] want to stress is that when you're look when you're looking at your environmental variables, you want to
[21:43] make sure that um there aren't a ton of NAs in your data. And so, by running this loop, you can
[21:50] see that or running this table function, you can see that there's 1,242 NAs out of over 72,000 points. And so,
[21:59] that's only 1.7% of those points are NAs and that's totally fine. Um I've heard different rules of thumb about this, but
[22:07] anything less than 10% is pretty good. Um and so, we're with 1.7% of NAs here, we're really it's it's great. Um and
[22:15] again, uh this might depend on your study system and whether um there's a lot of cloud cover, etc. Um so, just
[22:23] keep that in mind. And so, we've attached all those. We're going to plot those really quickly um just to see what this might look like
[22:30] and make sure that we have data. And so, in the plot on the right here, um because we're working with chlorophyll
[22:36] data, we often take the log of it and we work with it in log form. And so, you
[22:40] could see that for the most part, as expected, the pelagic areas around Palmyra um are pretty low chlorophyll,
[22:47] but then you do have a couple of points that are yellow and green, which indicate that there's relatively higher
[22:52] chlorophyll in those places. And so, this is just one frigate bird track. Each point is colored by the
[22:57] chlorophyll. And so, that worked. Um and so, we're just going to get rid of that couple of objects here, and then I want
[23:04] to show you the mar map package really quickly. Um, and so we downloaded the the bathymetry data and it's a CSV. And
[23:14] again, to work with the for loop I showed you above, we're just going to make it a raster. And so, um, there are
[23:20] a couple steps to do that using some functions within mar map. Um, again, you want to plot it and just make sure the
[23:26] data exists and are where you think they are. So, here we, um, are in the location where Palmyra is. So, that's
[23:33] great. Um, we make it a raster, and then if you're looking working with bathymetry data in the ocean, you are
[23:39] not worried about anything that occurs on land. So, any depth data that is greater than zero, we're just going to
[23:45] make it an A. Um, and then we're going to use the same type of loop that I just showed you
[23:50] above to attach the bathymetry data. Um, and so, instead of looping through dates, we're just going to loop through
[23:57] each bird. And the reason for this is bathymetry data doesn't change and there's no date associated with it.
[24:03] Um, and so I'm going to run this loop because it is really fast. And so there we, um, just ran all seven birds and
[24:11] 72,000 points amazingly fast. And then again, we're going to see what kind of NAs we're working with. And so we only
[24:18] have 239. So, that's like I think 0.03%. Yeah. And so we're really we, um, we meet that threshold pretty
[24:25] easily, too. And so next we're going to, uh, just plot the data just again to make sure
[24:31] that everything worked out. And so with that same bird example, um, we've got along that bird's track we have, um,
[24:40] the different points colored by bathymetry. And so the shallower areas are the lighter colors and then the
[24:46] deeper areas are the darker colors. And so that looked like it worked, which is great. great. Um, and so we're just going to get rid
[24:51] of some objects here. And then last, I can't stress this enough, especially if something takes a really long time, you
[24:58] should really save your data. And so, my data is saved, but this is just uh a reminder to do that. Um and so, I'm
[25:05] going to go back to PowerPoint now, and that means I'm going to stop sharing our Okay, so next slide. All right, so um
[25:17] now we're ready to run the species distribution models. And so, as we mentioned earlier, the basic steps are
[25:23] to simulate pseudo absences, select the points where the animals did not go. We're going to run it through a model,
[25:29] and then we're going to assess the model, and we're going to do that by plotting and use some statistics, and
[25:35] also just think about whether this makes sense within the context of your species and your study system.
[25:41] Excuse me. And so, ultimately um we'll make a plot like the one on the right, um which just uh
[25:47] gives a probability of high or low habitat suitability, which is colored by the yellow and the purple in this
[25:54] particular example here. And so, to simulate the pseudo absences, again, these are the points where the animal didn't go, and um you can
[26:04] simulate them in a few different ways. Um so, on the bottom, we have the original track. This is uh
[26:11] just an example, and the far left shows uh handful of points where an animal could have traveled from our tracking
[26:18] data. Um one way to generate pseudo absences is to just conduct background sampling, and so that's actually what
[26:27] we're going to do in the demo today. And so, this just randomly samples points within that whole grid.
[26:32] Um other ways you can do it include choosing um the the turning angles and the transit speeds
[26:39] and modeling those instead, and different ways to do that are random walks and then state space models, which
[26:46] um use something very similar. And Claire's, I think, going to talk more about this idea in her step selection
[26:51] functions. functions. Um and so, there's different ways to do it and again you might need to research
[26:55] a little bit and see what works best for your data set, but um, I've tried lots of different ones and
[27:00] for the figure birds background sampling seems to work the best. And so then we're going to actually run
[27:06] the model and again you have quite a few options and those um, some familiar options perhaps are
[27:12] generalized linear models, generalized additive mixed models, so GLMs and GAMs and um, those both have their um,
[27:20] their advantages and again it just depends on um, your data set that you are trying to model. There's also
[27:27] boosted regression trees which are really similar to random forests and they are essentially decision trees that are iterative and so they run over and
[27:36] over again to improve the accuracy of the model. Um, and so we're actually uh, going to use boosted regression trees in the demo
[27:43] here and that is uh, I run all of these on the figure bird data set and the boosted regression
[27:50] trees seems to work the best. And so now I'm going to show you the species distribution model and go back
[27:56] to our studio. Um, okay, so this is script number two and this is the simulate pseudo absences
[28:05] and one thing I want to point out here is that um, I did not write these functions. Um, there is a really great
[28:12] paper which we provide a link to in the resources slide at the end of today's session um, by Elliot Hazen et al from
[28:19] 2021 and um, he has a really great paper on uh, pseudo absences and that um, all comes with code that you can download
[28:28] from GitHub and so I'm going to provide the functions that I used um, in this demo here uh, as part of our sharing of
[28:36] the code, but you can actually go to GitHub and download all the code from that paper. So I just want to um,
[28:43] make sure that you know that. And so in order to make the pseudo absences, what we're going to do is we're going to
[28:51] again randomly sample those background points, and we're going to do it 10 times per bird. Um just for the sake of
[28:59] saving time. We're going to use more for loops, but basically what you want to do is you
[29:03] want to assign a place where the pseudo absences are going to go. And then, um um you in order to best work with the
[29:12] function, it's easier to change your column names. So, just do this really quickly. So, I have the frigatebird
[29:17] tracks. I assign it to a new data frame called tags, and then I just rename the ID column as ID, and
[29:25] longitude and latitude as long and lat, and then the function requires that timestamp is called dtimes, so I just
[29:30] renamed that. And then, depending on your data type, you may or may not need to include a location class. This is
[29:37] really important if you have data from Argos, but we just have GPS data, so my location class is just G.
[29:43] Um and so, then you can see that that data frame, which looks like that, really simple. And then, we are going to
[29:53] run the We're going to create these background points with this function create background absence, and it's just
[30:00] done in a for loop, really simple. However, when I ran it, it took an hour and a half, so I'm not going to show
[30:04] that to you here, but it really is just a really a simple um um um for loop.
[30:12] And so, what this does is it's going to create a CSV for each animal in your data set, and where you
[30:19] identified your your assigned your out directory. And so, these CSVs are pretty similar to the tracking data. If
[30:29] we look at one example, you can see we have the dtimes, the timestamp, and the lat and the long. And what is
[30:36] different here is that it has this new column called iteration, and so you could see that the iteration I told it
[30:42] to do it 10 times, and so it's creating 10 different background sampling points for each one point in the data set. So
[30:48] you're you're the size of your data set is going to increase by an order of magnitude. Um
[30:53] and so then if we want to see what this looks like, um um we can see for those 10 iterations for
[31:00] this one example bird. Um but it might make this a little bigger. Um Um so so waiting for that to load.
[31:16] But the idea is that um for each of these 10 iterations there is a different set of randomly generated points um
[31:23] relative to the one track that you can see in the red points here. And it may or may not
[31:33] load so you can see those individual points cuz they're just kind of black masses right now. Um
[31:39] But anyway, this has generated uh different randomly sampled background points. points. Um and so that is the end of the pseudo absences.
[31:49] So we've created the pseudo absences. Um and then we're going to make the presence absence data set. Um so again
[31:54] this uses a function called make data set. And what you're going to do um is you're going to make sure that you have
[32:01] your tracking data, so the frigate bird tracks in the original data set. And then um as I mentioned earlier, you
[32:07] might need to rename the columns. And then to save time, I'm only running this for three birds. And so you can see that
[32:14] um we now have a data set that um matches the it's going to match the background points. So that iteration
[32:24] column I showed you in the previous slide, the previous section um were 1 through 10. And so the iteration for
[32:30] this is going to be zero. And then we have all of our environmental variables which we added, which in this example
[32:35] are chlorophyll, sea surface temperature, and depth. Um and so then we're going to read in all the CSV files that I told
[32:44] you the pseudo pseudo absences generated. And we're just going to use uh this function to read those files and then just filter
[32:54] out those three birds. Um and then this is something I'm not going to run, but this is what I mentioned earlier where
[33:01] um you have all these background points, but now you need to assign environment environmental real variables to each
[33:06] point. So you're going to want to take your uh background points and then run it in that for loop I showed you in
[33:12] script number one. Um so we're going to assume that that is already done. Um and then I think
[33:20] I don't need to run this again. Um but ultimately you would have a data set that uh is really similar. So you've
[33:27] got tag, you've got your time, um your monthly date, lat long, and your different environmental variables. And
[33:34] as I mentioned at the beginning, we usually work with the log of chlorophyll, so I took the log of
[33:38] chlorophyll there. Um and then finally we're going to just going to run this really simple function called make data set. So you can see
[33:44] that oops. Um the presence is just the frigatebird tracks with just the three birds. I called it frigatebird tracks three. And
[33:52] then the absence data are those background points, frigatebird background, and again just for the three birds, that's just three.
[33:59] We make that, and it's really quick. And then if we look at it, you can see now
[34:03] it's got this presence absence column, which is either going to be ones or zeros. And so those are going to
[34:08] ultimately be your response variables in the model, which we're going to run next. Um all right. So we
[34:20] all right, going back to our plots. So we now have this uh data set, which includes all of our background sample
[34:28] points and all of our presence points for those three birds. Um and then the next step is going to require that
[34:35] this is a spatial features data frame, so we're just going to make it a spatial features data frame. And what that looks
[34:41] like is we now just have this new, um, column called geometry. Um, and that just means it's spatial features. Um,
[34:49] and that's I don't need to explain that right now. Um, and so then because we have all
[34:55] these, uh, presence and absence points, um, we are interested in whether they're actually different from each other with
[35:02] the different environmental variables. Um, and so that'll help us think about our model. And so one way we can we can
[35:08] do that is to look at Bhattacharyya's coefficient. And so this just looks at the statistical differences between the
[35:13] presence and the absence points. And so you can see here if you run this function function with the depth, um,
[35:21] uh, uh, the value is 0.84, chlorophyll the value is 0.83, and sea surface temperature the value is 0.9 essentially. And so these
[35:29] are all great, um, as I have in the code here. Um, if if this is a scale that runs from zero to
[35:38] one. And so if you're closer to zero, that means that they're not that very different. But if the values are closer
[35:43] to one, it means that they are different. And so these are all great values, 0.8s to 0.9s, indicating that we
[35:49] have data that are actually different from each other and it should help our model run nicely. Um, so we're just going to get rid of a
[35:55] couple of things. Uh, we're going to now run the model, which is a boosted regression tree. And so it, um, uses
[36:02] this function BRT transform data frame that's that's out of, um, the pseudo absence paper code. And it's quite
[36:14] simple. Let me oops. Okay. Okay. Let me just get rid of this and bar. Okay. Okay. Um,
[36:28] Um, and so now we're going to run the model and so in the previous script I said
[36:33] that we need a simple features data frame and so that is really important for this step right here. And so we
[36:39] already have the simple features data frame and we're going to put it within this GBM fixed function. And so what
[36:46] you're going to do is you're going to just like any other model you're going to set your X your predictor variables
[36:52] which is X and so you have to go into your data frame and see what number column they are and so in this
[36:58] particular data frame column 6, 7, and 8 are three environmental variables and then you're going to set your response variable
[37:05] which is Y which is your presence absence absence um um numbers and that would be column number
[37:12] five in this particular example. And then um using these other parameters these are pretty standard 2000 using a
[37:20] learning rate of 0.05 and a number of trees is 2000 I think are pretty standard um parameters to include in
[37:26] these models. And so if you were to run this it would look like that and just say it's fitting
[37:32] your model. This takes a little bit of time but not a ton but I'm not going to
[37:36] run it here. Make sure you save it again especially if it does take a lot of time
[37:40] for your particular data set. And then all we can do is we can actually look at how those how the how the each
[37:47] response each predictor variable interacts with the response variables. So these are marginal effects plots for bathymetry bathymetry for
[37:57] for chlorophyll chlorophyll and then for sea surface temperatures. So you can see that the distributions of the variables in response to the
[38:03] response variable are different here. Um Um and so you can think about that what that means for your study system and
[38:10] your species um and then one other thing you can do when thinking about your variables is uh
[38:18] uh look at the relative influence of the different variables and that this summary GBM is really helpful, and it
[38:23] generates a plot, and it shows you actually um you can't see it in the window here, but bathymetry is actually
[38:29] this big blue top bar. Um and it is showing that bathymetry is actually the leading factor of this
[38:36] model compared with um sea surface temperature and chlorophyll. Um and you can see that actually in uh
[38:42] this number here in the bottom of this script as well. Um so we just ran our model. Now, what
[38:48] we're going to do is we're going to apply the model to a grid of unsampled um area. And so um this also uses um
[38:58] code from uh the pseudo absence paper. And so what we're going to do is um you're going to make a sample grid, so
[39:06] you're just going to take the min and the max of your your data set um just to
[39:12] create a grid and what that would look like. like. You just want to So you can see you just
[39:17] we made a grid of the whole area that we've been sampling. Um you then want to go back to that for
[39:22] loop again and attach your your environmental variables to this new grid so that um you can run the model on it.
[39:30] Um and then what we're going to do um is uh make sure we're going to use log of chlorophyll. You may need to
[39:37] scale and center your variables depending on your data set, and that's something that you will need to explore
[39:42] with your own data. Um and then we would use this predict GBM function where we're using our
[39:49] background points, which is the pseudo absence grid, and our model, which is the BRT background. And um
[39:59] we are trying to predict over the grid, and so that would generate um that runs really quickly, and then
[40:05] that just generates a bunch of numbers, which we would then add back into our data set so that we can plot it. Again,
[40:12] you want to make sure you save. And then this is the moment we've all been waiting for, and this is a map of
[40:18] habitat suitability predicted over a larger grid than what our tracking data are. are. And so, you can see, as I showed you
[40:27] on the PowerPoint slide in the beginning, the areas of yellow are colored to indicate high habitat suitability, and the darker areas are
[40:34] lower habitat suitability. And so, again, you want to look at this and understand whether it makes sense for
[40:39] your study species and your study region. region. And then, finally, the last bit here is really quick is to
[40:47] evaluate your model. And so, to do that, we can look at explanatory power, and so, we can just run a pseudo r squared.
[40:55] And so, the for this particular example with just the three birds, the r squared is about .4.
[41:01] And then, other things you can do is calculate area under the receiver operating curve or AUC, and also the
[41:06] true test statistic, which is the TSS. Again, you need it to be a simple features data frame to do that.
[41:14] And then, we can calculate these variables with um uh uh k-fold validation. And so, this just means that it is taking your model and
[41:24] running it a bunch of times um um to to see if the model runs the same over and over again, essentially. And
[41:33] so, we're not going to That's what it would look like if it was running. And then, you can see that it generates this
[41:39] table of area under the receiver curve, true test statistic, and then um TPR, which I can't remember what it
[41:46] stands for, but we're not actually going to talk about that today. Um and then, you can just take a mean of
[41:51] those 10 iterations. So, you can see that the area under the receiver curve is .9, and the mean of the true test
[41:57] statistic is .64, essentially. And so, with that, that's the end of my R demo. I'm going to stop sharing and go
[42:04] back to PowerPoint for one more slide. Okay, so, back in PowerPoint. This is my last slide. And
[42:18] And something I didn't cover earlier in the PowerPoint, but I just want to reiterate. There's a lot of different
[42:22] ways to assess your model fit. And so you just want to make sure that you're evaluating these different aspects and
[42:26] parameters of your model and your data set to make sure that they make sense within the context of your study species
[42:32] and your study region. And so as I showed you in R, evaluating model explanatory power with R-squared
[42:38] is helpful. Um area under the receiver curve, test statistic, and different types of cross-validation are helpful to
[42:46] evaluate your model's predictive skills. And then as I showed you earlier, understanding how similar different your presence and absence point environmental
[42:55] situations are can be done with Bhattacharyya's coefficient. And then we can also look at the relative importance
[43:01] of your variables. Um as I showed you, bathymetry was driving most of my model with the three frigatebirds.
[43:07] And so with that, I am done and I will pass it off to Claire. Um okay, thank you Morgan. Um
[43:17] Uh again, I'm Claire Titlebaum. I'm an assistant unit leader at the US Geological Survey Georgia Cooperative Fish and Wildlife Research Unit based at
[43:25] the University of Georgia. And in the second section, we're going to go through a similar but different workflow
[43:31] to run step selection functions using a terrestrial case study on red deer. We looked a little bit at the status set
[43:41] in the first part of the training. This data data um is a data set of relocations of one
[43:49] tracked red deer in northern Germany. Um this data set is built into the AMT R package, which we're going to use
[43:57] extensively in this example. AMT stands for animal movement tools. And this package contains a lot of convenience functions for cleaning
[44:07] animal telemetry data, visualizing it, and performing analysis, including home range analysis and step selection functions. functions. These data that come with the package
[44:18] are pre-cleaned, so many of the steps that Morgan covered in the first half of today's training um are going to be
[44:25] relevant to get to the point where we're starting with this data set. As a reminder, step selection functions
[44:32] are conceptually pretty similar to species distribution models, but they use a specific way of defining presence and absence points by
[44:40] simulating alternative steps based on the actual step lengths and turning angles observed in the animal telemetry data.
[44:50] These step selection functions require regularly sampled data. Um They can be performed at a variety of temporal and spatial resolutions, and
[45:01] they can use data from either one or multiple individuals. And if data are available for multiple individuals, um
[45:08] these data can be analyzed either separately to understand individual differences in habitat use and selection, or together to get inference
[45:16] at the population level. Although today we're just going to use an example from a single individual to sort of
[45:22] streamline the process. To put our animal tracking and remote sensing data together in this example, um I want to first go through the
[45:35] process of downloading remote sensing data from the NASA Earth Data Platform. Um This is a really nice centralized
[45:42] location for a wide variety of um remotely sensed um and modeled data products, um spatial data products,
[45:51] um from a variety of different sources. Um these are not necessarily all NASA products, but um most or all NASA data
[45:58] is migrating to the Earth Data Platform. Um so this is a nice place to start um to
[46:05] to try to find um the remotely sensed data products that you're looking for. Um, as Morgan mentioned, um it's
[46:13] important to figure out before going to a platform like this, um what data products you might be looking for. Um,
[46:21] in this example, we're going to focus on NDVI, a vegetation index, and land cover, um because we know that both of
[46:28] these are likely to be important for when and where um deer like to be. So, to download data from NASA
[46:36] Earthdata, you're first going to navigate to the Earthdata search website, um which will pull up a page
[46:42] that looks something like this. We can put search terms in the search box. So, here I've searched for NDVI,
[46:49] the normalized difference vegetation index. index. And that pulls up um in this middle panel a list of products. Um, in this
[46:57] case, this top product is the one that I was looking for. This is a 250-m global product at 16-day temporal
[47:05] resolution. resolution. And you can see um that this product has a temporal extent from the year 2000 to present, um which
[47:14] if you were to download all of the data data would be about 170,000 granules. A granule being um an extent of space in a
[47:23] specific time period. And that is a lot of data. Um, our deer data goes from um 2008 to 2009 and is only in Germany. So,
[47:33] to avoid downloading this massive amount of data, it's also important to filter before downloading to the spatial and temporal
[47:41] extent that we're interested in. Um, filtering by the spatial extent um can be done by uploading um a shapefile
[47:51] um or by entering a bounding box rectangle, which is what I'm showing you here. So, for example, here we're
[47:57] looking for data between 54 and 55° north and between 9 and 10° west, um which covers the study area of the tract
[48:06] deer. deer. And again, we're going to look at data from March of 2008 to May of 2009.
[48:16] When we put in those filtering criteria, um looking down at the bottom of the page, this download all button um shows
[48:22] us that we have 27 granules now instead of 170,000. Um if you think about 16-day windows over a little over a year, that makes
[48:32] sense it should be about 27 time windows. So, it's nice to confirm before downloading that it seems like an
[48:38] appropriate amount of data. On the right side here, um this is the map that you would see um if you had
[48:45] gone through this filtering process, this inner rectangle is the bounding box that I entered, and the outer rectangle
[48:52] is um the spatial extent of the granules that we're going to download. So, here these tiles um of this NDVI data are
[49:00] much larger um than the area of our study. study. We click on the download button, you have a few options of how to download
[49:09] the data. Um I would recommend using this these download files or download script options. Um the download script,
[49:18] in my opinion, is a great way to get started if you're not familiar with command line tools because it provides
[49:23] step-by-step instructions for downloading an executable file and then using it to automatically download all of these files onto your computer.
[49:33] Um the downloads files function, I mean tab, is also um a great way to do it um
[49:39] by using the Earthdata download tool, which is um something you have to download in advance, but again is quite
[49:45] straightforward to use. Once these data are on your computer, um it's important to note that it's likely
[49:54] they'll require some post-processing and it's always important to check the original documentation that accompanies these products. So, um,
[50:03] in this example, we're downloading 27 granules in this case that includes only one tile across space, but multiple
[50:11] dates or times. Um, so we're going to have to deal with that when loading those data into R in
[50:16] order to to extract them at the locations of our animal tracking data. Um, these granules also might contain
[50:24] multiple layers. These might be multiple variables. So, in this case, potentially multiple vegetation indices as well as
[50:31] as well as quality assurance or quality control layers um, that tell you about how reliable um, each of
[50:39] those data points might be. So, this is a point where you can put your GIS skills to use. You might need
[50:45] to combine multiple spatial tiles using a mosaicking approach, stack um, multiple temporal tiles, um, or crop your data only to the needed area. And
[50:56] once again, it's important always to check the original documentation to understand understand um, what each layer that you're loading
[51:03] in means and whether you might, for example, need to rescale data um, um, before extracting it and using it so
[51:12] that it's on a realistic scale. We're going to move into R for a demo next. Um, but first, I just want to go
[51:21] through the key steps of performing step selection analysis. So, the first step is to clean telemetry data and then process it to regular
[51:30] steps including identifying bursts. So, these are gaps in the data that are longer than our expected step interval.
[51:37] In this case, the deer data that we're going to load in have already had these two steps done on it.
[51:43] The next step is to simulate alternative or control steps. These are these absence points in a species distribution
[51:51] model. model. And these simulations are based on models of distributions of step lengths and turning angles in the tracking data.
[52:01] We're then going to identify the spatial and temporal extent of the data and use that to download and process the desired
[52:07] environmental data, in this case from remote sensing. We then extract environmental data at the end points of each step. Um we can
[52:16] also do this at starting points and along the step trajectories, but it's important to note that the way that the
[52:23] control and um the observed steps differ is by their end point. Um so the data at the step end points is usually the first
[52:32] place we're going to start um to try to understand habitat selection. Once we have all this information at the
[52:39] step end points, we perform conditional logistic regression to understand differences um in habitat between used and available points, and then use the
[52:49] results of this model for inference and mapping. And the main output of a step selection function is called relative strength of
[52:58] selection, um which is our way of understanding how animals are using different habitats. And we'll go into
[53:05] exactly what that means in a little more depth later. Okay, so in this example, as I said,
[53:15] we're going to focus on the use of this AMT animal movement tools package, which is going to provide most of the
[53:21] functions we need for this analysis. So after loading all of our packages for analyzing and processing data,
[53:29] we're going to start by loading um the deer data set and taking a look at it. You can see um in the console on the
[53:40] bottom of the screen that the deer data set includes X and Y coordinates, a timestamp, and a burst ID. Um if you
[53:48] looked further down this table, you would see that not everything is burst one um as we have gaps in the data, we
[53:54] get different bursts. Um you'll note that our X and Y coordinates um are obviously projected. These are not geographic coordinates,
[54:03] not latitude and longitude. And if we look at um the help function for this data set, um
[54:11] it tells us the coordinate reference system for the data. So, we can use this um to know where the deer are in space.
[54:21] It's always good to start by exploring and plotting our data. So, as a first step, let's just plot the X
[54:28] and Y coordinates. Um we saw a much prettier version of this map on the PowerPoint earlier, but
[54:34] this can just start to give you an idea of sort of the spatial extent of the data.
[54:40] The AMT package also provides a nice function for sum- summarizing the sampling rate of the data, so how long
[54:47] it is between relocations. Um Um this summary down here in the console at the bottom of the screen shows you that
[54:55] in general points are 6 hours apart, um but we have some um time lags that are much larger than
[55:03] that. that. Um Um we can look at this um um in a different way as well um as a
[55:13] histogram of the time lag between different points. And again, this is showing us that most points are about 6 hours apart, but
[55:21] there are a few that are um 4,000 hours up to 4,000 hours apart. Um the reason this is, if we just look
[55:30] at the distributions of timestamps in the data, is because we are missing data between about August of 2008 and January
[55:38] of 2009. So, this data set is just missing the winter and we're going to think about that a little bit more when
[55:45] analyzing our results. So, after exploring the data, the next step is to simulate these alternative steps. steps. Um before doing that, what we need to do
[55:57] is turn these um this series of locations into steps. A step being a movement from point A to point B.
[56:05] AMT provides this function called steps by burst, um which will calculate um um step lengths and turning angles, um as
[56:14] well as other metrics for each step. So, if we run steps by burst on this data set,
[56:21] what we come out with um has a lot more information than just the track that we originally looked at.
[56:28] What you can see is that instead of just X and Y, what we now have is X1, X2, Y1,
[56:34] and Y2. These being the X1, Y1 being the starting point of each step, and X2, Y2 um being the ending point of each step.
[56:45] It also tells us the step length, so how far the animal traveled during that 6-hour window, and the turning angle, um
[56:54] the angle um between subsequent steps. And turning angle is missing for the first step because you need at least two
[57:02] steps in order to calculate an angle. From um these steps, we can then uh simulate our random steps. Again, AMT
[57:14] provides this random steps function, um and if we look at the help function here, we see we can specify a few
[57:21] arguments, including the number of control steps, so the number of absences per presence essentially, as well as
[57:30] distributions to be used for the step lengths and turning angles. So, we're going to start here just by
[57:37] using the default parameters. Um Um and and when we look at that data set that we've created, you can see it looks really
[57:47] similar um to the the um um to the steps data set. Um but we've added a couple of new column names. And
[57:59] to look at those, we can do it this way. Um and most notably, what we have now is
[58:09] two additional columns in this data set. One is called case and one is called step ID. So, case tells us whether this is an
[58:17] observed or random step. So, you can see there is one observed step and then 10 following random steps.
[58:26] Um Um because we simulated 10 control steps per actual step. And the step ID pairs each focal used step with
[58:35] the corresponding random step starting with a step ID of three, four, and so on. We can also plot these data. Um AMT
[58:47] provides a nice default way of of plotting them where our actual data are plotted in red and then the random steps
[58:55] um um stemming from each of these actual data points um is plotted with these um gray dashed lines.
[59:04] Before we move on to the next step, I do want to point out that we can use some
[59:08] of these arguments in the random steps function to sort of play with um what the random steps might look like.
[59:15] So, if for example, instead of drawing step lengths from an exponential distribution, which is the default, we
[59:21] instead draw them from a uniform distribution, distribution, we can get a distribution of random steps that looks more like this. And you
[59:29] can see that on average um these random steps are much longer than the ones using the default parameters. This
[59:36] doesn't necessarily look realistic to me, so we're not going to use it, but it's important to know that you can play
[59:42] with these um if the defaults um don't look realistic for the species that you're working with. All right, next steps here are to
[59:52] download and process our remotely sensed data. data. Um we're going to start um just by pulling out the spatial and temporal
[1:00:01] extent um that allowed us to go back into the Earthdata platform and download um our NDVI data.
[1:00:11] Which we covered in the PowerPoint, so here I'm just going to tell you that I placed all of these data in a subfolder
[1:00:17] called NDVI_MODIS. Um Um and um so that's where we're going to start here. Um Um we can start just by loading in one of
[1:00:28] those files and taking a look at it. Um here we're loading this in as a spatial data set and then converting it into a
[1:00:35] raster using the terra package. Um Um if we do so, um we can see that um this just this single file, so a single
[1:00:51] granule, granule, contains 12 layers, um and each of them has a different name. Um we want this first layer, which is
[1:01:00] our 16-day NDVI, but you can see that we also have EVI, the enhanced vegetation index, as well as a number of other
[1:01:07] variables available. Another thing to note, um and this is available if you look at the documentation, is that each file name
[1:01:15] also contains the date associated with this granule. In this case, we're looking at the 65th day of the year of
[1:01:23] 2008. 2008. Um, and we're going to use these dates in the names, um, and extract them to assign a time period to
[1:01:32] each, each, um, layer that we're going to create in our stacked raster. We can also just plot this layer, um,
[1:01:41] and so here you have a map of, um, NDVI, um, across, um, this whole pixel, which includes our study area. Um,
[1:01:52] you will notice that the scale is not what we would expect from NDVI, which should range between -1 and 1. And we're
[1:02:00] going to rescale this data late later on, um, again, following the package documentation, which will give us the
[1:02:06] scale that we need to use. So, skipping through all of this, um, which follows those processes of, um,
[1:02:16] reading in the all of the different time periods that we downloaded, assigning them dates, um, and then rescaling them,
[1:02:25] um, um, we we plotting that data, um, this is just going to look like a rescaled version of
[1:02:32] what we just saw. Um, and then I also did the same thing for, for, um, a land cover data set, also, um,
[1:02:41] derived from data from the MODIS satellites, um, to try and understand how deer are using land cover data.
[1:02:51] How deer are using different types of land cover. Um, Um, so, putting that all together, um, we're
[1:02:59] going to have, um, this, um, raster stack called all veg, which I called all veg, all vegetation data,
[1:03:08] um, and this raster called all LC, all land cover data. One important point before extracting our environmental data at our used and
[1:03:18] available telemetry points is that these two data sets need to be in the same projection in order for this
[1:03:25] extraction to work. So, in this case I'm reprojecting each of these rasters to the projection of the animal telemetry
[1:03:33] data. data. In general, it's probably easier to reproject points rather than reprojecting these spatial rasters because it doesn't require
[1:03:43] interpolation methods like these bilinear and nearest neighbor interpolation methods I'm using here. But, I've given you um these just as an example of how you
[1:03:54] might want to do that if you need to reproject a raster. Um if we then plot this reprojected vegetation data, again
[1:04:03] it should look approximately the same, but we have some warping because we're now using a different projection.
[1:04:10] We can also crop our two data sets to the extent of our used and available tracking data
[1:04:19] um just to make them smaller and a little easier to work with. So, finally we get to actually extract
[1:04:28] covariates at each of our used and available points. Um Um again AMT provides a very convenient function called extract variates
[1:04:37] covariates var time. And this is a really useful function because Morgan showed you the manual way to do this
[1:04:45] using a for loop. That's going to be really useful for a bunch of different data sets, but
[1:04:51] if your data are structured in the AMT format, this will automatically match the time stamp of your used and available points to the
[1:05:00] time stamp that we assigned to each of our raster layers. So, here in this function, we're saying we want to extract data at
[1:05:11] each of our random and available used and available points from this vegetation raster. We want the maximum
[1:05:19] lag between um the timestamp of our telemetry data and the timestamp of the raster to be eight days. That's because we have the
[1:05:28] 16-day vegetation data, so everything should be within eight days of one of the vegetation layers. We want to extract it at the end points
[1:05:38] of each step, and then we want to name this covariate NDVI. We can do the same thing for again the
[1:05:45] land cover data, and then put those two data sets together. If we just look at our new data frame
[1:05:54] we've created called deer env, deer environment, we can see it has the same names um as as our
[1:06:04] our um as our original data set with the random steps, but has two additional names NDVI and land cover, which we
[1:06:15] assigned. Um we can also, again looking at the documentation for the um land cover layer, um create binary
[1:06:26] variables that define whether a location is forest or cropland based on whether the location um is assigned to one of those land
[1:06:35] cover classes. Um I chose forests and croplands because we would expect um red deer to be um
[1:06:42] potentially using these two types of habitats. Okay, we're getting close to the end here. Our next step is to actually run
[1:06:51] our step selection analysis. Before doing so, of course it's again important to examine the data. Um one important
[1:06:59] check is to see whether the variables that we're interested in might be collinear. collinear. So here I am plotting a box plot of NDVI
[1:07:09] versus forest. So, on the left zero non-forest habitats and on the right one forested habitats. And you see that there's a
[1:07:20] certainly a relationship here where forested habitats tend to have higher NDVI than non-forested habitats. So, for now, without doing any sort of
[1:07:28] statistical analysis, I'm going to leave forest out of the model just because it might be too collinear with NDVI.
[1:07:36] However, we don't see any strong relationship um for croplands. Um again, on the left non-crop habitats and on the
[1:07:44] right crop habitats, we don't see a clear difference in NDVI between them. And again, as Morgan mentioned, it's
[1:07:51] always good to check to see if we have missing data. In this case, looking at um um the proportion
[1:08:01] um of NDVI or cropland values that are NA, we get zero in each case, so we don't have to worry about missing data
[1:08:08] here. Finally, we fit our step selection function using the fit selogit function in the AMT package. Um this formula here is very similar to
[1:08:20] what you would expect um from uh linear model. Here we have case, that's that binary true false variable telling us
[1:08:28] whether um this is an observed or a simulated step as a function of NDVI and crop cover.
[1:08:37] This argue This part of the formula, strata step ID, tells us that we're comparing within step ID.
[1:08:45] Um again, that's the conditional part of the conditional logistic regression. After running this model, we can look at
[1:08:52] a summary, which again looks pretty similar to what you might be familiar with from linear models if you have run those before.
[1:09:01] This gives us an estimate of a coefficient, coefficient, um, the standard error of that coefficient, a Z value, and a P value
[1:09:09] for each variable. In this case, um, because both coefficients are positive, this suggests that the deer are selecting for areas of
[1:09:19] higher NDVI and for areas of croplands. But, if we take a quick look just at the P values, you see that that relationship
[1:09:27] is much more well supported for NDVI than for croplands. And we can visualize these results, um, again using a few functions, um,
[1:09:39] from the AMT package, most notably this log RSS function, which will calculate the log relative strength of selection
[1:09:48] at a series of points, X1, relative to a reference location, X2. Um, and we'll go into a little more
[1:09:56] detail about that reference location in a minute. But, if we just quite simply plot that, you can see here in this plot on the
[1:10:03] right is the log relative strength of selection as a function of NDVI. And again, this positive slope of the line
[1:10:11] shows that our deer are more likely to use a given spatial location as the values of NDVI increase.
[1:10:21] We can also, um, map those values across space, space, um, using, again, the same log RSS function.
[1:10:33] Um, and here's a plot of what that looks like. This looks very similar to the plot of NDVI across the study area
[1:10:40] because we have this linear relationship between the relative strength of selection and NDVI. And one quick check for how well we
[1:10:48] think this model is working is just to overlay our actual locations of the deer, um, over this map. And you can see that
[1:10:59] these points are generally um in areas of higher relative strength of selection, these yellow areas, and generally not in the more blue areas.
[1:11:08] So, we think this model is probably working pretty well, at least for how simple it is. Um this last section of code is just a
[1:11:17] way to make a slightly prettier version of the same plot. Um so, keep this plot in mind and we're
[1:11:23] going to switch back to PowerPoint. We're back. Yep, looks good. Okay, so this last In this last section,
[1:11:39] I just want to talk a little bit more about this relative strength of selection variable because it's not the
[1:11:45] most intuitively named, nor is it the most intuitive outcome of a model. It's nice when we have a habitat
[1:11:53] suitability or a species distribution model to be able to to interpret the output as the probability of use,
[1:12:01] um the probability that an animal will be in a given location. However, the relative strength of selection requires defining reference
[1:12:09] conditions. So, for example, how likely an animal is to use a given area relative to what is available.
[1:12:18] And the reason for that is because in our conditional logistic regression, um the available habitat changes across
[1:12:25] space. If we simulate a step starting at a given location, um the available habitat is going to
[1:12:33] differ from a step starting 10 km away. Um and so, that's why this relative strength of selection has the word
[1:12:41] relative in it, um and why we can't interpret it directly as the probability of use. The technical definition of RSS is the
[1:12:51] average change in space use probability as we change a covariate of interest while averaging over possible values of
[1:12:59] other covariates. Um Um So, in this map on the right, we're plotting the log relative strength of
[1:13:07] selection. It's also common to exponentiate this and just plot the relative strength of selection. Um and in general, we could interpret
[1:13:16] this as values um negative values being less likely to you be used relative to the average across the study area and
[1:13:24] positive values being more likely to be used relative to the average values across the study area. area. And there's a lot of active research
[1:13:33] going on um to be able to create these more intuitive probability of use metrics and these are often based on
[1:13:41] simulation methods. For example, simulating animal movements starting at a given location um over and over again to see um
[1:13:50] where those animals go. We also have um a bunch of resources and links available for you. Um you can
[1:14:00] check those out in the slide deck online. And with that, I'll hand it back to Juan. Well, thank you again, Morgan and
[1:14:13] Claire, for those examples. Uh thanks so much for uh presentating those uh to our audience. Here's a summary of part two.
[1:14:23] Uh when integrating animal tracking and remote sensing data, it's very important to consider several factors. One of them
[1:14:30] is that the environmental variables that affect the presence and or absence of the animal species of interest. And the
[1:14:37] other one is the spatial temporal resolution of the remote sensing data that you're planning to use. Species distribution models also help us
[1:14:47] understand the likelihood of the presence of a particular animal species depending on the habitat type and the
[1:14:54] selection of a particular species distribution model will depend on the research question and the available data sets.
[1:15:04] As a reminder, there's one homework assignment that opens up today. It's on you can access it through the training
[1:15:12] webpage and you need to submit the answer through Google Forms. And you need to submit the audio
[1:15:20] you just need to submit your homework by June 5th. And if you submitted your homework and you attended both parts of this webinar
[1:15:29] series, series, you will get a certificate of completion via email. And as I said in part one, it
[1:15:36] usually takes about two months to get the certificate of completion because just the amount of participants that we usually have during
[1:15:45] this training series. Again, here's the contact info for Justin, Satya, myself, and also for Morgan and Claire.
[1:15:57] Also, feel free to visit the ARSET website and to follow us on Twitter or X and also to visit the ARSET YouTube page
[1:16:06] for additional trainings as well. And And if you're an undergrad or grad recent grad, make sure that you visit the
[1:16:14] develop webpage as well. And with that, thank you so much for being with us during this two
[1:16:24] parts of this training series and we're going to go now into the Q&A session. So, I'll see you there.
[1:16:36] All right, let's go into the Q&A. I just want to confirm with with our team that uh
[1:16:41] uh that that everyone can hear me here and uh yeah, thanks Brooke for for sharing the screen.
[1:16:50] Um um let's go then to the to question number number one immediately because we have uh just a little bit of time uh today.
[1:17:00] Um and again, thanks Morgan and Claire for for such a great uh demonstrations. So, let's go into uh question number
[1:17:08] one. one. I recently conducted my dissertation on emperor penguins in Antarctica. Antarctica. Uh I use Sentinel-1 imagery simply
[1:17:18] because of their open access, but I was wondering if you know of any ways to access higher resolution imagery without
[1:17:26] uh such a massive financial strain. Yeah, that's a good question. So, some of the platforms that we discussed
[1:17:38] in this training um including NASA Earth Data can be a good place to start just to search for um the available remote
[1:17:46] sensing layers. Um you can filter by spatial extent and resolution just to see what's available. Um and depending on your country or your
[1:17:56] funding source, there might be options for you to acquire commercial high resolution satellite imagery. Um and um we're not aware of all of these
[1:18:07] programs, but for example, if you're um funded if your research is funded by some US government programs, um NASA's
[1:18:17] commercial satellite data acquisition program could be an option. Um there are probably other options available um as well.
[1:18:26] Yeah, thanks Claire. Yeah, that's particularly useful uh especially if if if if people are using or looking for
[1:18:34] uh uh uh, fairly high resolution uh high spatial resolution data. Thanks. Okay. Okay. Uh, Uh, number two, can you explain how you Oh,
[1:18:45] I actually had the same question, uh, to Morgan. Can you explain how you captured the frigate birds and what type of
[1:18:51] sensors did you use? And and how many were installed? Yeah, that's a great question. Thanks for asking. Um, so we captured frigate
[1:19:00] birds that had up their nests and, um, we did that very carefully so that we didn't disturb neighboring frigate
[1:19:06] birds. Frigate birds nest in colonies, so it's really important to be aware of, um, your focal birds' nesting neighbors
[1:19:14] as well and their their nesting contents, so any eggs or chicks that might be in those nests.
[1:19:19] Um, and so once we captured them, we used solar GPS tags. Um, these particular tags for that particular
[1:19:27] project were from the company called EOBs and they're out of Germany. Um, and we, uh, there are seven birds
[1:19:33] that ultimately contributed to the data set that I showed today. Cool. Cool. Okay, so here's a number three is a
[1:19:40] question that actually came, uh, while Morgan was giving her, uh, demonstration and, uh, and I think, uh, Claire pretty
[1:19:49] much covered a lot of it during hers, uh, you know, later on, but I just in case, uh,
[1:19:56] what do you think about the AMT package of R and are better packages or just using AMT?
[1:20:03] Uh, is the R script, uh, I use, uh, available? Yeah. Yeah, so the, um, all the scripts that
[1:20:10] we went through in the demonstrations are available in the GitHub repository. Um, the link is, um, in this document as
[1:20:17] well as on the training webpage. Um, quite the question about the AMT package. Um, as as I said during the
[1:20:24] training, it's a really useful package cuz it provides sort of a central location, um, and a streamlined way of doing a lot of really
[1:20:32] common tasks. However, it's not comprehensive. So, there are a lot of types of analysis analyses that you
[1:20:37] might want to do that AMT doesn't provide functions for. Um, a lot of the functions in AMT are also wrappers for
[1:20:46] other functions from other packages. Um, and they're very good about um, citing what other packages those functions are
[1:20:53] from in the help functions. And so, that could be a good place a good jumping off point um, to try to learn about some of
[1:21:00] these other movement packages. Excellent. Thanks. Okay, uh, question number four. Thanks, Brooke. Brooke. Uh, do you have any recommendations for
[1:21:10] R packages that would be useful for presence-only data with no pseudo absences? Uh, especially using for example using maximum entropy or other.
[1:21:29] And I believe uh, uh, one of our one of our teammates I think it was Justin or someone else
[1:21:34] uh, that put some info there on the uh, Maxent func function uh, from the dismo package, which is useful for
[1:21:42] presence-only data. And there's a there's a manual uh, for that in uh, in particular. So, make sure that you
[1:21:51] you you uh, but in the the person who also who asked this question that goes in there
[1:21:57] and and and get more additional info. Okay, question number five. How can I include the altitude elevation data for
[1:22:05] my analysis? And for example, is in a flood plain um, some areas are aren't available for terrestrial species due to
[1:22:13] the high water level. Uh, yeah, that's a great question and that's a great um, a great way to think about environmental
[1:22:22] data. And so, those can just be like something like altitude or distance to water can just be an additional
[1:22:28] predictor in your model. All right. Um Okay, this uh There are a couple here. Um one of them
[1:22:39] on DOI. Um I don't know why uh well, well, but you know, for the sake of time, let's let's
[1:22:46] go to to question number eight. Instead. Um again, we're uh if we're going to we're going to cover
[1:22:56] your questions eventually in the in the final Q&A document. So, no worries about that. that. Um is there any problem having NAs in my
[1:23:04] data? And if there is, what should I do? Yeah, that's a great question and um there is no problem if you have NAs in
[1:23:12] your data. It's totally okay and it's totally expected because we don't have perfect data sets that cover the entire
[1:23:18] world. And so, some regions might have a little bit more NAs than others. Like we mentioned earlier in the slides, um if
[1:23:24] you have a lot of cloud cover in the tropics, for example, you're going to have NAs because
[1:23:29] the satellite image just shows clouds. Um and so, if you do have a bunch of NAs, um you can either
[1:23:36] you can either just omit them. Um you might consider looking at another data source that maybe has less or maybe
[1:23:42] looking at different data sets. And again, this is really helpful to go back to the literature and see what other people
[1:23:47] what other data sets people have used that might be a little bit more useful than what you initially had
[1:23:53] planned to use in your particular project. Um and uh if you um um Yeah, then if you could um if you know
[1:24:04] why the data are missing, then maybe you could actually add the values yourself. All right. Um Um Is there a reason why SP and raster are
[1:24:15] being used instead of SF and terra for the loop to extract uh chlorophyll A or bathymetry. Uh yeah, no good reason other than those
[1:24:27] are the packages that I used when I wrote this code, but SF and Terra are definitely newer
[1:24:33] packages that could definitely do the job as well. Cool. Cool. All right, in the workflow of importing and extracting remote remotely
[1:24:44] sensed data sets, projections were mentioned. At one point in the process, do you recommend reprojecting data sets
[1:24:52] and could you do that with the netCDF file before extracting? extracting? Yeah, this is a great question, too, and
[1:25:00] I didn't really talk about it with the species distribution models, but the data that you download through
[1:25:06] ERDDAP are typically just from latitude and longitude, and so you can definitely there are functions in R to change the coordinate reference
[1:25:14] system, and usually I know raster has a function that's just called CRS, and then you can change the projection
[1:25:19] yourself, and so you could do something like the the Lambert equal area projection, which might be a little bit more helpful in
[1:25:27] some situations. Um Um but that depends on your data set and how big or small your data set may be,
[1:25:35] but this is definitely something that you can do within R, not so much on the the netCDF file that you download.
[1:25:42] Okay. Okay. All right, number 11. How are boosted regression trees different from random forests? Um so these two methods are similar in
[1:25:57] the sense that they both use trees, but they combine the trees in different ways and fit them in a different order.
[1:26:05] So boosted regression trees use a linear combination of multiple trees to come up with a final model, whereas random
[1:26:13] forests forests use other methods including um, voting. Um, and so the boosted regression tree method allows trees that don't fit as
[1:26:23] well to the data to receive lower weights in the final model, which usually improves model performance. Um,
[1:26:31] Um, and also boosted regression trees are trained sequentially, so each tree attempts to correct errors that um, showed up in previous trees. Um, but
[1:26:41] in random forest the trees are fit independently. Um, and this independent fitting means that random forests are often faster to fit
[1:26:51] because the trees can be fit simultaneously because they're independent, whereas in boosted regression trees they need to be fit
[1:26:58] sequentially. sequentially. Um, on the other hand, boosted regression tree models tend to be more accurate and have higher performance,
[1:27:05] although this can depend on exactly the structures of your data. All right. All right, let's do two more and then
[1:27:16] then we need to just because of of the time constraints we need to end. But number 12, if you generate
[1:27:23] pseudo absences from random locations in a in a SDM, SDM, what makes it conceptually different from an SSF?
[1:27:35] Yeah, so a species distribution model is much more general than a step selection function, um, and in that sense you
[1:27:42] could consider a step selection function a more constrained version, um, of an SDM. So they are definitely very
[1:27:50] similar, similar, um, but an SSF is has a much more specific definition of what, um, the pseudo absences are.
[1:27:59] All right. And finally, uh, what type of model GLM, or boosted regression trees are better in in each context?
[1:28:11] Yes, this is a great question and it really depends on your tracking data and the types of relationships that you
[1:28:16] might expect with the different environmental covariates. And so one good first step is to plot maybe just
[1:28:22] some of your data, your tracking data against the different environmental variables. And so that'll give you the
[1:28:26] shape of whether you think it might be a linear or non-linear relationship. And then you can try running these different subset
[1:28:34] models models just as an exploratory method on some of your data to see which models perform best.
[1:28:44] All right. Thanks. Thanks so much. Okay. Um Um So again, we're going to go over the the
[1:28:51] rest of the questions in the final Q&A document. So no no worries if you just for the sake of time we weren't able to
[1:28:58] cover yours. Um and it will be available become available on the training webpage within the next days or so. Uh again, thanks.
[1:29:08] Thank you so much to Claire Morgan for all the immense help that that I that you provided to the team ARSET on this
[1:29:17] on this webinar series. And and as always, thanks to the ARSET what I call the behind-the-scenes team who are the the geniuses that are
[1:29:28] that help us you know, put all of this together. And and of course, very importantly, thanks to all of our
[1:29:35] audience for being with us during this two-part training series. And we hope to uh have you here with us again in in an
[1:29:45] in an upcoming ARSET webinar. So stay tuned for for the next one. Visit visit the ARSET webpage uh
[1:29:52] where where there's a there's a list of the of the upcoming webinars in the next couple of a couple of months. All right?
[1:29:59] And with that have a great rest of your day and thank you so much for being here.
[1:30:12] Yeah.
