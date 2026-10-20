# Data Analysis and Visualization Part 2/2

`https://www.youtube.com/watch?v=iNWlKhZSykU` · id 327 · 54:54 · module 310 — Advanced NASA Earth Observations and Tools for Active Fire, Smoke, and Post-Fire Monitoring

[00:03] Welcome back to our RSET training series, Advanced NASA Earth Observations and Tools for Active Fire, Smoke, and
[00:12] Postfire Monitoring. Today is part two of our training series. My name is Brock Blevens, a training coordinator for the
[00:19] RSET program, and I'll be your host for today's training. As I mentioned in part two or the final
[00:27] part of this training series, we will have an overview of static thermal anomaly data inside firms. How to use
[00:36] static thermal anomaly information to identify thermal anomalies that are not likely vegetation fires. How to visualize active fire information
[00:46] on static graphs and interactive maps. and how to analyze active fire information using a fire count histogram.
[00:57] histogram. Once again, the homework is available now on the training web page. It will be due December 3rd and a certificate of
[01:06] completion will be awarded to those who attend both live sessions and complete the homework by December 3rd.
[01:14] And with that, let's begin part two of the training series, data analysis and visualization. visualization. I'm very happy to introduce our guest
[01:23] instructors for part two. Brad Quail joins us from the US Forest Service where he is the lead for the disturbance
[01:32] assessment and services program. And we also have Dylan Mendes, a senior applications developer for firms. Part two objectives. By the end of part
[01:43] two, we hope that participants will be able to recognize how static thermal anomalies associated with industrial and
[01:50] natural sources are identified. Use data available in firms to identify locations of routinely detected static thermal anomalies
[02:01] and use Jupiter notebooks to access and visualize firm's data. Once again, if you have any questions during today's training, you can put
[02:11] them in the Q&A box within WebEx at any time. At the end of this training, we'll address as many questions as we can and
[02:18] then we'll post a transcript of these questions and written an answers [clears throat] to the training web page
[02:24] within a week. So, let's get right to it. First demonstration by Brad will be on static thermal anomalies.
[02:36] In particular, his outline will show an overview of static thermal anomaly data available in firms, accessing STA data, associated data and
[02:47] tools in firms, and how to use firms to highlight examples of thermal anomaly activity that are not likely vegetation
[02:54] fires. fires. Over to you, Brad. Thank you. >> All right. Thank you. Well, today what I'm going to demonstrate is our new
[03:07] static thermal anomaly data that we've incorporated in firms along with some associated data sets and tools we've
[03:13] included to use those data. And what you see here is a firm's map of of Oregon and western Idaho. And I'm going to zoom
[03:19] in here to northeast Oregon uh to a little town called Derky, Oregon. And as you can see, if I zoom into this uh
[03:27] location here, just outside that town, there's a large excavated area with an associated uh uh area of infra uh
[03:36] industrial infrastructure here. And um [clears throat] this uh particular area, if I uh turn on the fire detections, I
[03:43] can see I'm getting some uh detection activity associated with that infrastructure next to the uh excavation pit. Well, this area here is is a cement
[03:52] plant. And this is a really good example of a static thermal anomaly feature because cement plants have large kils
[04:00] that they use to heat up material to make cement. And these kils uh burn at very high temperatures or have very high
[04:07] temperatures approaching 1500° centigrade. And these uh features can be detected uh by satellites and included in active fire detection data. That's
[04:17] why we can see them here. If I u back off a little bit here on the scale, you
[04:23] can see those features. And here's some other detected activity here likely associated with a fire. But if I jump
[04:30] ahead one month to the end of July of 2024, again, looking back 31 days in the active fire detection record, I'm have
[04:41] all these other fire detections that are associated with wildland fire activity that was occurring at that time. And as
[04:48] you can see, as those uh detection data fill in, I have a lot of detections uh you know, for the month of July for that
[04:54] cement plant we just looked at before. Now, if you're a wildland fire manager, you may u that may give you pause and
[05:02] you'd wonder if you're not familiar with the area that might be associated that detection activity might be associated
[05:07] with a wildland fire. Um so having uh these static thermal anomaly features uh inventoried and identified uh allows
[05:17] users to uh identify these u areas of fire detections that might be associated with industrial features or natural
[05:25] features that are uh um giving off heat or thermal activity and can be detected in active fire detection products.
[05:34] So um static thermal anomalies what are they in the context of firms? They're basically semi-persistent or persistent
[05:42] sources of uh thermal energy that we can detect routinely in active fire detection products. Um but they're not
[05:50] vegetation fires. They're associated with uh industrial features or industrial activity. And in some cases they can be associated with natural
[05:58] features that are giving off heat such as volcano and other sources of geothermal activity. And what we did in developing this uh
[06:08] static thermal anomaly feature or layer that is in firms right now is we started with year 2023 cumulative active fire
[06:16] detection data that was acquired by SNPP beers. There's about 21 million active fire detections worldwide. And then we
[06:24] also included Terara and Aqua active fire detections [snorts] for the same uh year which was an additional 8 million. So we had about 29
[06:32] million active fire detection data that we processed and analyzed and um thresholded accordingly. And we summarized those data and we identified
[06:43] um uh features that we determined were static uh emitters of thermal energy and we identified well over 6,300 of them
[06:52] and they're represented here on this map. So, uh, the next thing I'm going to show is we're going to we're jumping to a map
[07:00] in firms for western Turkey. And, um, what, uh, if you want to access the static thermal anomalies layer mask,
[07:10] it's under this static thermal anomalies, uh, group in firms. And you can see I I have it drawn up. And you
[07:17] can they're very u small features at this scale and they're they're showing up in magenta. But if I, you know,
[07:24] change my background layer to a dark gray, uh, they stand out a lot better. You can see them here throughout Turkey
[07:30] and into Greece and whatnot. Um, we also, uh, have, um, sources of industrial heat or industrial activity
[07:41] identified. Now we didn't develop this these layers um in firms but we um went to authoritative sources who inventory
[07:50] and compile this data globally and we've provided these data in firms for reference. So we have all types of
[07:57] different uh industrial plants and also power plants which may be emitters of heat. And so if I turn on, you know, a
[08:04] couple of these uh layers here, you can see these are iron and steel plants, um cement plants and so forth. And if I um
[08:13] [clears throat] go to the layer info for those layers, you get a brief description of what this layer entails.
[08:19] And you also have a um a citation um a link to um to get to the source data if
[08:27] you'd like and also a citation for the uh data layer. If you have any questions about these layers, uh we recommend that
[08:34] you contact the uh authoritative sources for these data because these data again are not developed by NASA. They come
[08:40] from these various sources and we're just pri providing them here as a courtesy and firms for folks to have
[08:45] context and reference to these data. So I'm going to switch back to the image base and I'm going to zoom in here on
[08:56] this town in Turkey called Hero Deiji Turkey. And I've turned on the static uh thermal anomalies mask in magenta there.
[09:05] And you can see that this uh area corresponds to an industrial area there on the coast. And if I turn on the fire detections for
[09:15] this day, I'm I'm looking at June 26 of 2025. And I'm just I have a one-day reachback. So, we're just looking for
[09:21] the detections that occurred on this day. day. Um you can see that there is a uh fire
[09:28] that's burning in this forested area to the south of town and we're also picking up uh thermal activity associated with
[09:35] this static thermal anomaly area. Well, what we've done in uh firms is provided the capability to uh filter and identify
[09:43] active fire detections that are associated with the static thermal anomalies um layers or features I should say. And under the static thermal
[09:51] anomalies group, there's a static thermal anomalies detection layer. And if I turn that on in cyan, these
[09:58] detections that are uh that correspond or that are associated with the static thermal anomalies feature will be
[10:04] highlighted. And basically what it's doing is features that directly intersect the static thermal anomaly area as well as are within a predefined
[10:14] uh buffer tolerance are selected. So we can see that these detections are associated with um the industrial
[10:21] activity here. And we're picking up a little bit here that uh some detections that are associated with that fire, but
[10:27] that's due to the buffer tolerance we're using there. We try not to get too aggressive so we don't pick up uh
[10:32] detections um too far outside of the static thermal anomaly feature. If if I jump ahead one day, this fire started
[10:40] the day before. You can see again for that day on the 25th, here's all the fire activity associated with that um
[10:48] forest fire south of the city. And these are the um active fire detections associated with that static thermal
[10:55] anomaly feature. Um just want to note here you notice on the previous day and today we have some detections in this
[11:02] area. Um this um is obviously um of industrial origin these active fire detections but we our static thermal
[11:11] anomaly feature does not extend out there and capture that. And that's because again for this initial prototype
[11:17] layer we have um we did not we only used the you know year 2023 active fire detections and so we just didn't have
[11:25] any detected activity in that area that met our thresholds and criteria to identify that as a static thermal
[11:31] anomaly. Um, so just you for little things or nuances like that for users to be aware of when they're using uh these
[11:39] uh static thermal anomaly features. U for the next part of my demo, I'm going to jump to the Hughes fire, which
[11:50] was a fire that burned in Southern California in January of 2025. And what I'm looking at here is uh on
[11:57] the date of January 28th reaching back from one week all the cumulative active fire detections for modus and veers that
[12:05] occurred [clears throat] with this fire. And as you can see here we have a little cluster of detections here couple
[12:13] kilometers away from the fire that's associated with this uh excavated baron area. And what this area is here is uh
[12:21] it's a landfill area. And uh if I I zoom in here on it a little bit and turn off
[12:27] the detections, you can see that area and what it looks like up close there. But I'm going to
[12:34] zoom back out and turn the detections back on. And if I turn on my static thermal anomalies layer,
[12:45] let that render there. It's a little bit slow displaying. And you can see th those uh magenta [clears throat]
[12:51] that magenta polygon is our static thermal anomalies mass that was derived from the 2023 uh active fire detection
[12:58] data. So what what is going on here is upon doing a little bit of research in this area this um this is a landfill
[13:07] that in uh 2022 uh basically um an underground fire started there. So the the uh the garbage
[13:16] and the waste that's been buried there in that landfill was ignited and fire has been burning underground and
[13:22] smoldering and whatnot for the last 3 years. And these this uh thermal activities routinely detected uh by the
[13:30] active fire detection sources in in uh in firms. So, uh, having this information would, you know, possibly
[13:38] help a fire manager to know that these fire detections that are close to the, you know, the Hughes fire when it was
[13:43] going on, they they are not associated with um that incident. But as you can see as I jump through um time here and
[13:52] maybe if I jump into February, well after the Hughes fire was over, we're still picking up these detections
[14:00] through time. So just to show you that that you know relatively small subtle smoldering thermal activity that's
[14:08] happening there um with that landfill fire is being uh picked up and detected. And of course I can turn on my static
[14:15] thermal anomalies detections and isolate those detections um with that activity if I'm interested in doing so. Okay. On this last example of working
[14:27] with static thermal anomaly uh data, u we're going to focus on a natural heat source. And where I'm at right now with
[14:36] this map is this map shows the uh East African Rift Valley. And you can see here we have the um a couple volcanoes
[14:44] that are present and where we have some active fire detections that are occurring with those volcanoes. And this
[14:50] area here in general is the Democratic Republic of Congo. And um to identify where these volcanoes are at, if you
[14:59] look under the overlays layer, we have a volcano layer and you can filter these volcanoes for what's displayed based on
[15:06] um their most recent activity. Um we have here by default only those volcanoes that have been active in the
[15:14] last 60 years are displayed. But if I toggle it to display all of them, you can see we have all these other dormant
[15:19] volcanoes that have not also uh um erupted in the past u you know 60 years. So I'm going to toggle that back to just
[15:28] the ones that have been active in the last 60 years. And I'm going to zoom in on this uh volcano here. It's called
[15:34] Naim Malagra. And this is the most active volcano in Africa. And as you can see on this particular date for July
[15:41] 30th with a one-day reachback for the active fire detection data, we have a lot of active fire detections that are
[15:48] associated with the u volcanic activity that that's occurring on this volcano that day. And if I draw the static thermal
[15:57] anomalies layer and turn off my active fire detections for a moment, you can see um the static thermal anomaly
[16:03] feature that we uh discerned using the 2023 active fire detection data is pretty pretty large. It's extends about
[16:10] 3 to four kilometers from the main uh crater of the volcano. And if I turn my detections back on from modus and beers
[16:18] for this day, both the day and night detections. And if I turn on my static thermal anomalies detections, I can
[16:25] easily filter and identify those uh active fire detections that are associated with the static thermal anomaly feature. But I'm going to turn
[16:32] that off for a moment. And also the static thermal anomalies mask. And I'm going to turn off all the active fire
[16:39] detection layers except for the Noah 21 beers u data for that day. And I'm also going to turn off the nighttime
[16:47] detection. So, we're just looking at the daytime detections associated with the volcanic activity. And if I turn off the volcano layer
[16:56] here, so you can see it a little bit easier. You can see these are the detections right here on the on the
[17:01] volcano volcano itself. Uh that we got some activity there, but we also have some activity here off the west slope as well as
[17:09] trending down the east slope of the uh volcano. So, um, if I look at the Noah 21 beers false color composite imagery
[17:19] on this day and turn off my active fire detections, uh, for a moment, um, again, this is relatively coarse resolution
[17:27] imagery at this scale, but you can see, uh, with the shortwave infrared response, we have some thermal activity
[17:32] going on here and faintly you can see some thermal activity out here far on the west on the west slope as well. I'm
[17:39] going to turn my beer's active fire detection back on and also turn off my Ver imagery. And I'm going to take a
[17:48] look at the HLS imagery. And it happens on this particular day, July 30th, both LANCAT and Sentinel 2 imagery were
[17:56] acquired for the area. And if I draw up the true color composite imagery, this is what it looks like uh on that day,
[18:03] the Sentinel imagery. And now I'm going to draw the um [clears throat] false color composite imagery for the Sentinel
[18:11] uh 2 acquisition. Here it comes in. Patience here as it draws in again. It repeating me some of
[18:22] the what we learned with the working with the HLS data before. The true color composite imagery draws in uh very fast,
[18:29] but the false color composite imagery is rendered a little bit slower than the true color composite imagery.
[18:38] And if we uh [clears throat] take a look close look at this uh imagery, if we take a close look at this imagery
[18:46] in the context of the active fire detection data from beers, you can see with the uh if I turn off the active
[18:53] fire detection data, I have all these areas that are easily visible in the shortwave infrared data that are
[19:00] resulting from the u the thermal activity, the lava and the eruption activity that's going on around the main
[19:07] um part of the volcano here and it's coming down the east slope as well as all this activity that's easily se seen
[19:14] in coming down the west slope. So these are lava flows you coming down from the main crater of the volcano. And so
[19:21] that's what we're seeing when we uh see those detections farther out to the west and also creeping down the east slope.
[19:29] And this is a good example of how you can use the hls imagery which is much higher spatial resolution than the uh
[19:36] veers and modus uh imagery to discern and determine maybe what is going on there on the ground and is the source of
[19:44] the thermal detected activity that you can see there. Um this wraps up my demonstration here today with the static
[19:52] thermal anomaly data. And I just wanted to say again that this uh current static thermal anomaly layer that we have in
[19:58] firms is uh a prototype layer uh and needs more work and improvements and uh the firm's team is working on doing that
[20:06] and we plan to uh release an updated static thermal anomalies layer in the future. Thank you. Thank you very much, Brad, for that
[20:21] thorough demonstration of static thermal anomaly data and firms and its functionalities. It was great to get a
[20:28] tour of how to use it. In this next demonstration, Dylan will be showing us how to generate a firm's
[20:36] map key, how to visualize active fire information on a static graph and interactive map, and how to analyze that
[20:44] fire data. If you would like to replicate the demonstration provided by Dylan, please see the link to the GitHub
[20:52] which can be found under part two of our training web page as well as a link on
[20:57] how to generate a map key. We'll make a recording of this demonstration available by tomorrow so you can go
[21:04] through the process at your own pace. >> Amazing. Um well thank you uh for the more technical part of this training.
[21:19] Here is where you'll start for the uh the coding portion and this is a GitHub repository. Um
[21:28] there should have been more materials provided if you'd like to check out how it works and all but it's pretty simple.
[21:34] Um first you all need to go to the firm's website here. Um get an API key. When you come over here, you'll just
[21:43] click get map key, put in your information, and click get map key. You'll then get an email where the body
[21:50] looks something like this. Um, this is just a demonstration key for the webinars that we do, but you'll take
[21:57] this key right up here at the top and that will be your map key that you will
[22:00] need to use the notebook that is linked down here. To get to the notebook, all you have to do is hit open any collab
[22:07] here. here. This will take you over to Google Collab and then you'll be able to um make a
[22:15] copy and then do some work from there. So, I'll take my uh API key. There's some uh API overview information and
[22:27] different information on our sources and all the different satellites that are available. But the code starts down here
[22:36] in the setup and authentication part. And then uh you'll take your API key and where this big green bar is, you put it
[22:43] in between these two quotes. Once you've done that, this will um enable uh you'll click run. And then this will
[22:54] um ask you if you're connect if you'd like to connect to Google. It came from GitHub. Uh so you click run anyway.
[23:03] After that is done, it will connect to some server provided by Google and it will import all of these uh packages
[23:11] that are used in this in this training and you'll see setup complete API key is loaded. Then we can come down here to the world
[23:23] example. this function I wrote to query the firm's API for um the world with all of the information on the different
[23:33] sources, day range, date string, all of the things like that. Pick play just to load this function.
[23:40] Once you load this function, uh you can pass the details into it. And we're looking at the world here for the date
[23:47] of August 20th in 2025 for the ver no 20 near real time. um data set, it'll print out exactly what API link
[24:05] you used here. You can click on that and then it'll bring you into a new tab with
[24:08] the a the raw data itself. Um but this this will load the data into a data frame from pandas and you can see an
[24:20] example of the first couple lines here. the information included below. Um there is all these columns and this little uh
[24:29] backslash is showing you that it's continued on the next line. So these are the rest of the homes.
[24:37] And now I'll move on to showing you um a bounding box example. We'll need to run this to load the
[24:47] function so that it can be called in the next block. Um, Um, this bounding box is in the Amazon basin
[24:54] and I prepared it ahead of time just so that um, everyone could get a quick example. example. Once you run this, it will show you the
[25:04] date of August 26th, 2025 for the data inside the bounding box. And then it will also print out an
[25:15] example of the data frame here which is similar to the one above for the worlds. In this case, we're using the Beerus
[25:23] SNPP satellite in the near real time. Um these are our available sources below with information on their real- time status, standard status
[25:39] where they cover in the case of LANCAT. And that just shows you how to get the data in a bounding box and a function to
[25:47] use that to uh pass a bounding box in to ingest the data uh into a geo data frame from the firm's
[25:59] API API with latl long coordinates. We'll run this function that turn turns it into um a geo data frame. Then we can run the
[26:10] data on the dataf frame area from the world example which is up here. See how it's labeled dataf frame area.
[26:22] This will take in that dataf frame area and then turn it into a geod dataf frame uh as as exampam um shown here with the
[26:32] points. points. Um you can do [clears throat] an exercise here to see um how do some continue to do some coding and see the
[26:43] uh amount of or the number of points or active fire detections in this example with a confidence above 80. you can
[26:52] easily filter on the confidence which does not look like there's one on the beer SNP satellite but manipulating
[27:03] the function up here or a different uh source or calling it in the when you call the function itself
[27:13] will be able to uh reveal some different confidence values that are not available for all of our satellites for various
[27:20] reasons. reasons. But so that we can view some of these satellite detections, we're going to use um the geo data frame and then um a plot
[27:31] function in that so that we can show these active fire detections uh in the world um for the same date uh of August
[27:40] 20th um plus one day. So there's two days total. Once we run this, it will show the exact
[27:50] same plot that we were showing earlier, showing the world. And you can kind of make out Africa over here and North
[27:57] America into South America over here and Europe and Asia over here. This will this is a static plot so you can't um
[28:09] zoom in or click into it. However, we can use the Folium map to uh show the same data on a interactive map so that
[28:21] we are able to uh zoom in and such and see different areas. Um in this case it's colored by confidence.
[28:32] It's taking a little bit to run right now. Now that it's finished executing, we can scroll in the bottom box below the code
[28:50] and see the different um parts of the map. We can zoom in or out. I send that
[28:56] backwards and take a look at the different uh fire detections based on confidence. And we can go to part of
[29:04] Brazil over here and see that it is colored in the way that we wanted it to be.
[29:15] All right. Moving on. We will now count buyers by the day. So using the same data frame earlier on the
[29:28] acquisition date uh variable we will convert it into date time and then create some group by date time or
[29:36] group by acquisition date and then the size of those acquisition dates. So it'll be the number of fire detections
[29:44] um by the acquisition date and then we can use plt to plot the figure. Right now, it's only showing one day.
[30:00] Let's go up and show. Let's go change this to two. We will now um do some manipulation.
[30:20] based on the date. And you can do this for any of the different um columns that are available in our output or
[30:27] additional data that you have brought in to uh do some subsetting or some charts on. on. But right now, we're going to take the
[30:37] data frame and the acquisition date. We're going to turn it into um a daytime object so that it can be grouped by the
[30:44] date. And the size in this case is the number of fire counts. Uh I just showed this earlier. Um but now you can see
[30:53] that it went from one day to two days uh worth of data of August 20th and August
[30:58] 21st showing that there was more fires on on or more active fire detections on August 21st in the world than there was on
[31:07] August 20th. Um, as a conclusion, we set up authentication for the firm's API, retrieved data using the firm's API
[31:18] and bounding box queries and for the world, world, uh, ingested the data into pandas and geopandis, visualized the fire
[31:26] detections with the static and interactive maps and then analyze some temporal patterns. That is just some um
[31:33] basic manipulation of our BMS active fire detections using our API. You can um expand this to historical trends over
[31:44] time. Overlaying fire detections with different different information that you may have about uh various things that have to do with land
[31:55] such as land cover or population data sets. Um, and you can also develop automated monitoring pipelines from
[32:01] things like this. Below is the homework section, which is where you'll be able to do all of the
[32:07] homework here below. And yeah, that's it for me. Thank you all for watching. Great. Thank you very much, Dylan. And
[32:23] as I mentioned, we're going to make this recording available by tomorrow, so you can go through this uh on your own time,
[32:30] but let's summarize what we learned here today. today. First, Brad showed us how to access and use STAs and firms, which included the
[32:41] display of STA layers, how to display the STA feature source types such as industrial heat sources or natural heat
[32:49] sources, and identify active fire detections associated with STAs. And we also saw how to access, ingest, and
[32:57] visualize firms data using a Jupyter notebook. notebook. And just to summarize this training series, series, this two-part training demonstrated to
[33:08] participants several new capabilities within firms. In part one, we looked at burned area mode in firms, new ver
[33:15] burned area product, and the use of HLS imagery and indices to perform burned area assessments. This is useful as
[33:23] monitoring postfire impacts to vegetation is essential for evaluating burn severity which informs post-fire debris flow risk, understanding patterns
[33:32] of ecosystem recovery and identifying areas required for restoration intervention. [clears throat] We also looked at smoke and aerosol mode
[33:41] in firms, the use of aerosol index and pyrob layers to identify and track wildfire smoke. And as we learned,
[33:50] wildfire smoke monitoring is critical for air quality and public health applications as exposure to fine particulate matter within smoke can
[33:58] cause respiratory issues and other health complications. Then in part two today, we looked at static thermal anomaly information to identify
[34:06] satellite active fire detections that may be associated with industrial sources and then also how to access, ingest, visualize, and manipulate firms
[34:16] data using a Jupyter notebook. Homework is available now on the training web page. It'll be due on the
[34:24] 3rd of December. And for those who attended both live webinars and completed the homework by the deadline,
[34:31] you'll receive a certificate of completion via email approximately 2 months after the completion of this course. course. Here
[34:40] Here we've included the contact information for myself and today's speakers as well as links to the RSET website and YouTube
[34:48] channel. channel. I would like to take another opportunity to acknowledge our fantastic guest presenters Jenny Houston, Brad Quail,
[34:57] Dylan Mendes, Diane Davies, as well as Aston Rodoff and Akmar Bolsina from the FMS team. Thank you very much for joining us on
[35:11] this training series and now we'll move over to the question and answer session. We've been monitoring the Q&A box for
[35:25] questions and we've been moving them over to this document. If you have future questions, please locate the
[35:31] three little dots on the lower right hand side of the application or web browser um for this WebEx and you'll see
[35:40] a Q&A section. Please enter your questions there. But the ones that we have, we've tried to start answering. So
[35:46] we can start off with uh question number one. one. What are the data we rely on for fire
[35:54] detections? Is it only thermal data or smoke? Or is there any other data that helps identify false positives
[36:02] like wind congestion or accuracy metrics? Um, I think I got the gist of what this question was asking.
[36:12] >> Hey Brock, this is Brad. I can take that question. question. >> Oh, hey Brad. Great to
[36:18] >> Yeah, great question. Um yeah way the way the um active fire detection works is it's reliable or it's reliant on
[36:25] thermal data thermal detection of activity and um [clears throat] it can be affected by heavy cloud cover heavy
[36:33] smoke cover as is noted in response here um and the way it works is uh you know
[36:38] when it identifies obvious uh you know thermal activity uh you know above average temperatures there uh in a given
[36:45] pixel uh what it does it slides into what we call a contextual ual analysis part of the algorithm and it looks at
[36:52] neighboring or adjacent pixels to assess their thermal response in order to figure out what that pixel uh would look
[37:00] like in the absence of fire. And if we have a large enough departure there's statistically from that thermal response
[37:06] based on the the response of its neighbors which are not also obvious fires. Uh the algorithm can then
[37:12] determine uh with a certain uh level of confidence whether or not that's an active fire detection or not. And the
[37:18] second part of your question, you know, as far as using information that can help you uh identify if there's, you
[37:23] know, potential false positives on a detection, uh you can use the confidence information um that that I mentioned. So
[37:30] like on the um the modus uh active fire detections, there's a confidence level that ranges between zero and 100%. And
[37:38] uh with the beers data, it's um um a categorical uh rating of uh you um low, moderate or high uh confidence. And that
[37:49] um um th those confidence levels are affected by you know where the detection is like if it's adjacent to a water body or
[37:57] cloud edge or whatnot which may cause some confusion in the thermal response and determining those statistics I
[38:04] mentioned before. Uh so you could uh look at those confidence uh levels for an active fire detection and and uh
[38:11] maybe you know consider excluding some of those uh very low uh confidence level detections which may be uh actual false
[38:18] positives. positives. >> Great. Thank you. And I put the link that you see right here to the firm's
[38:25] facts uh in the chat. Question number two. How about aerosol layer? Is it possible to estimate spatial distribution? Have we ever used
[38:35] other satellites like Tempo or PACE to integrate into the results? >> Hi Brock, this is Jenny. I can take that
[38:45] one. So BMS [clears throat] uh currently makes available >> aerosol index layers from ops which is aboard uh S snP as well as Noah 20 and
[38:57] and this was covered uh last week by uh Diane in webinar one. This uh particular set of aerosol
[39:06] index layers are useful for both det both the detection as well as the tracking of aerosols and aerosols from
[39:14] um from smoke from fires as well as uh interestingly dust storms. Um and I also wanted to highlight that that
[39:23] NASA's um overarching nearrealtime system which is called LANS and within which the firm system is situated continually investigates additional data
[39:36] sources that could be useful for for a range of applications including wildfires for example and uh has
[39:43] recently made available multiple nearrealtime products from ESA's tropommy sensor including uh an aerosol index product as well as selected near
[39:55] real time products from PACE. Um and we are currently uh working to make available um selected near realtime
[40:06] tempo questions which I know the the uh questioner had specifically asked about um so I will provide the links for those
[40:14] as well for the pace one. Thank you. >> Thank you very much. Yeah. So it sounds like uh uh you are already on top of a
[40:26] lot of this other data being integrated. Question three, what is the definition of data ingestion? And I think this was
[40:34] asked during Dylan's demonstration near the end. Um yeah, and the answer here just just a means of acquiring the data.
[40:46] If there's a follow-up question from that participant, please please let us know if there's more that you wanted to
[40:51] know. Um for another question is it possible that firms captures temperature anomalies caused by other sources rather
[40:58] than fire? I saw areas on the map I know and suffer from urban heat islands by high levels of imp permeable surfaces
[41:07] such as asphalt or buildings. >> Yeah, Brock Brad here. I'm happy to take that. Um yeah, that that's another
[41:18] really good question. Um yeah, the fire detection algorithms are used for you know modus and beers and you know the
[41:24] other sensors are available uh in in in firms. Uh they're they're designed to uh detect and measure uh uh thermal
[41:33] radiation that you know at very elevated or high uh temperatures that are associated with you know combustion and
[41:41] fire and whatnot. So, uh, these types of, uh, you know, thermal anomalies that you're describing here with urban heat
[41:48] islands and whatnot, they're there's not designed to, uh, you know, detect activity at that particular temperature, uh, and whatnot. In some cases, you
[41:57] know, it in some sensors uh you know, particular um how should I say approaches have had to be taken to
[42:05] exclude those areas so we don't end up getting false positives all over the place like from urban heat islands and
[42:11] you know desert surfaces and whatnot. But uh but yeah, the algorithms are designed to not u you know capture those
[42:18] areas as thermal anomalies. [clears throat] >> Great. Thank you very much, Brad. Um it it sounds like yeah the sensors aren't
[42:28] just designed for that particular detection. Uh qu question five. I was wondering if the static thermal anomaly
[42:35] masks we saw on the firm's website are made available somewhere as shape files. Uh I would be interested to use them to
[42:42] improve the maps I use to distinguish vegetation fires from non-veget fires in my own algorithm. And it looks like there's a start of an
[42:53] answer here. Yes, I can take that one. Um, so we do not distribute the static thermal anomalies layer, but the information
[43:01] tab, the little eye icon on the firm's website gives you all the information about where we are getting our static
[43:10] thermal anomalies um, information from. >> Okay, thank you very much. Uh question number six. What sort of
[43:25] time intervals with the WRT? Um I guess what kind of temporal resolutions or flower vacations are are
[43:36] you working with your data? And I'm going to assume this is going to vary depending on what sensor platform we're
[43:41] talking about. >> Yeah, I can take that. Um there are various um temporal [snorts] sampling uh based on the
[43:53] satellite you're looking at. Uh it's different for modus and different for beers, different for geostationary satellites all across the world. Um our
[44:03] frequently asked questions would be the best place to find information about that or in the information tab on
[44:08] whatever layer you are looking at. >> Okay, great. Thank you very much. So find the layer and then you can find
[44:16] some information on how often that is being sampled. Thank you. >> Yeah. And one more note in our um
[44:25] advanced mode I think is where it is um there is uh orbit uh overpasses of the polar orbiting satellite. So modus
[44:35] interferes interferes that can help you identify when the satellite has overpassed your area or area of interest. Oh, great. Thanks for
[44:44] pointing that out. If I remember correctly, the intro to firms earlier this year uh had a section where that
[44:51] was being displayed. Okay. Uh I have a question I haven't moved over here yet, but um going to throw it in here so everybody
[45:04] can see it. Um what about solar farms? Is it possible that they will show a map like a false
[45:12] positive? >> Yeah, Brad here, I can take that one. Um Brock, um yes, potentially solar farms can uh um you know, due to sunlint uh
[45:27] cause false uh positives in various active fire detection products. these uh polar orbiting active fire detection products um like from modus and beers
[45:37] the the NASA algorithms are are very robust you know they use uh uh additional bands in the in the visible
[45:44] and uh near [clears throat] infrared wavelengths to help identify those areas of sunglint and reject those uh false
[45:51] positives. So the the the beers and modus data are are pretty good in rejecting or keeping those false
[45:58] positives out of the uh the data. However, um the uh the geostationary uh active art detection algorithms uh uh
[46:07] are are not as quite uh as good as uh motus and beers in rejecting those identifying and rejecting those false
[46:14] positives. So you would have a tendency to see those uh false positives from Sunlint from solar farm showing up in
[46:21] the geostationary active fire detection data. [clears throat] >> So >> thank you. Um I have another question here.
[46:35] Would S what's would STA detect Pete fire in context of a belowground pete fire? Um and would it be obscured by
[46:44] heavy smoke from vegetation fire? >> Um yeah, I'll take that one again, Brock. Uh we the short answer would be
[46:57] generally no. uh we're trying to uh exclude these natural uh fire events or you know vegetation fires from the STA.
[47:07] Um and you know we're we're doing that by looking at persistence of the fire activity. For example, you
[47:14] know, an an industrial source would have uh uh detections, you know, over a long period of time throughout the year,
[47:21] whereas, you know, a wildfire, you know, pete fire or whatnot, uh would not be um you know, persistent throughout the
[47:28] year. So, we're trying to, you know, exclude those uh areas um wildfires and whatnot by looking at the persistence of
[47:36] those detections. >> Great. Thank you. Um, look like there was a question in the chat. I'm not sure what the question
[47:48] was, but the answer from Jenny. Um, there's been a lot of coverage of the pollution in India in the news that uses
[47:58] firms. firms. Oh, I am from India and I have a yearly problem of farm fires that can
[48:05] contribute to pollution. How can we distinguish general fire from stubble burning through veers or other NASA products?
[48:15] Thanks Brock. Um sorry I I saw that question in the chat so I just started answering it. Uh so so interestingly
[48:23] there has been a lot of coverage of the pollution in India uh in various uh news sources and firms are being used data
[48:32] from firms are being used to help inform um the what what is happening and as far as um can we distinguish general fire
[48:43] from stubble burning. So additional contextual information, so [clears throat] spatial extent of the farms etc. uh could be used to to
[48:53] further kind of refine the the locations and potential sources of the fires. But these fires are are certainly being
[49:01] captured um by both vas aboard Noah 20, SNP and Noah 21 as well as by modus aboard uh terror and aqua.
[49:16] Great. Thank you very much. Uh I did see a a question regarding to the homework. Uh once again that uh link can be found
[49:24] under part two on the training web page and uh it is live right now. Question number 10. How does static
[49:36] thermal anomaly filter out thermal anomalies from industrial facilities? So it's more like how does it work? Are
[49:41] they using coverage binding from some TIF file or with the nearest neighbor algorithm? Can you tell us a little bit
[49:50] more about this feature? Looks like we have a link here some put in the chat. Uh yeah. Yeah, Brock, I'll be happy to
[50:02] answer that. Yeah, as uh is noted in response there uh we have a an Earth data article posted uh about the STA and
[50:11] how you know a general description of how they're derived. But um as uh mentioned before in the demo what we
[50:18] what we did is we you know took the cumulative vector actor fire detections for lep vs over the course of the year
[50:24] and also uh terra and aqua modus we use modus uh primarily take advantage of terra's morning uh observation
[50:34] capabilities and then we'd have aqua and snppp ver for the afternoon observations and uh yeah we we identified those uh um
[50:45] persistent areas where there was persistent uh fire detection activity um within or I should say over you know
[50:52] extended periods of time. Again looking at that persistence measure and uh we're able to uh you know identify those uh
[51:01] areas or locations as static thermal anomalies which may be due to industrial heat sources or uh natural sources like
[51:09] volcanoes and whatnot like as we discussed during the demo. [clears throat] Um we provide the uh sources of um
[51:19] industrial heat um activity in firms as a reference because you know we're we're not trying to capture all industrial um
[51:29] sources of heat out there on the landscape. We're just trying to capture the ones that are, you know, or at least
[51:34] identify the ones that are routinely identified in the uh modus and beers active fire detection products and uh
[51:41] that helps users uh you know identify those particular detections that are associated with those features. Um [snorts]
[51:48] [snorts] so uh yeah, that's all pretty much have to say on that one. Brock, >> uh here's a question. Do uh is there a
[51:59] way to delineate surface versus atmospheric thermal energy? Up here in Canada, we have a large smoke columns
[52:05] that carry lots of heat and appear to artificially inflate the size of the fire. But once the smoke subsides, their
[52:11] hits are no longer valid. It often appears in a repeating grid pattern um of hits along the direction the smoke
[52:18] column is heading. Uh it looks like we're going to get back to you on that one. look for this answer
[52:25] to be filled in, but um we're going to consult our our science team and get a little bit more of an accurate answer
[52:30] for you here. >> Yeah, thanks Brock. And just to note that again webinar one kind of touched
[52:40] on this and um and so that would be another source of information and um as well as um we will consult our science
[52:50] team and um provide additional information. >> Great. Thank you very much. Okay, that seems to be the last question
[53:00] right now. Um we have a few minutes left before the top of the hour. So, uh, if
[53:06] anybody has any more questions, um, feel free to type them into the Q&A box. And as it comes to the, uh, the
[53:16] homework, um, it's due by the 3rd of December, and then it's going to take a little bit of time for us to process
[53:24] attendance and homework submission. So typically you can expect to see your certificate of completion sent to you as
[53:32] a PDF in your email about two months after today. Uh in the meantime, um this is an advanced training that builds
[53:49] off of one that we did earlier this year u that was offered in English and Spanish. Um there are plans to deliver
[53:58] this in Spanish as well in the near future. Um so please look for that. If there's anything any of our guest
[54:07] speakers want to offer in general to the participants here today, I I welcome you to do so.
[54:16] >> Well, thanks Brock. I would uh like to say thank you to everybody for for participating participating and um we hope you found this
[54:26] information very useful. >> Well, thank you very much. It's great to be back and uh we we thank everybody for
[54:36] hanging in there with us and look for more wildland fire trainings to be offered by the RSI program in the
[54:43] future. And have a great rest of your week everybody. Thank you.
