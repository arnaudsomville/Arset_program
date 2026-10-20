# Techniques for Plotting and Analyzing ATL24 Coastal Bathymetry Part 2/2

`https://www.youtube.com/watch?v=vLcK5-QnlOY` · id 356 · 2:02:33 · module 307 — NASA Satellite Laser Altimetry for Coastal and Near-Shore Bathymetry

[00:01] Welcome to part two of the arset training NASA satellite laser altimemetry for coastal and nearshore bethimemetry. My name is Shan McCartney
[00:09] from NASA's Goddard Space Flight Center in Maryland serving as your RSET instructor. Wherever you are joining from, welcome.
[00:18] The following slides provide an overview of the two-part webinar series. So, why would somebody want to take this
[00:25] training? Nearly 80% of the world's oceans are unexplored and unmapped. Successful coastal management depends on monitoring and mapping. Coastal
[00:35] bethimemetry is essential for navigational hazards for vessel operations, title modeling and prediction, tsunami risk assessment and forecasting, underwater cultural
[00:46] heritage preservation, and environmental change monitoring. Satellite derived pimemetry enhances capacity for collecting highresolution accurate depth data supporting varied applications.
[01:02] By the end of this two-part training, participants will be able to identify NASA bethimemetry data used for global
[01:09] coastal and nearshore bethimemetry mapping for risk reduction relating to shipping and navigation. Identify the applications and limitations of ISAT 2
[01:18] be aimemetry data or ATL24 for coastal and nearshore bethimemetry mapping. Plot and download ISAT 2 bethimemetry data using slide roll web
[01:29] client and analyze ISAT 2 beimemetry data using the slide roll Python client. The prerequisites for the training are
[01:38] two arset courses. the fundamentals of remote sensing course and the mapping and monitoring lakes and reservoirs with
[01:46] satellite observations. [clears throat] From December 2nd to December 4th, there will be two 1 and a half hour sessions
[01:55] which will include presentations, demonstrations, and question and answer sessions. All materials and recordings from each session will be available from
[02:04] the training web page. If you are not able to attend one part, a recording will be made available within 48 hours
[02:11] on the RSET training web page. Homework opens today, December 4th, and will be due on December 31st.
[02:19] A certificate of completion will be awarded to those who attend all live sessions and complete the homework
[02:25] assignment before the given due date. Part two of the training is focused on techniques for plotting and analyzing
[02:34] ATL24 coastal bethimemetry. The objectives for part two of the training are as follows. By the end of
[02:42] today, participants will be able to identify the applications and limitations of ISIT 2 data for coastal and nearshore bethimemetry mapping.
[02:53] Plot and download ISAT 2 epimemetry data using slide rule web client and analyze ISAT 2 epimemetry data using slide rule
[03:01] Python client. Please put your questions in the questions box and we will address them at the end of the webinar. Feel free to
[03:10] enter your questions as we go. We will try to get to all the questions during the Q&A session after the webinar. The
[03:17] remainder of the questions will be answered in the Q&A document which will be posted to the training website about
[03:22] one week from today's training. It is now my pleasure to introduce the guest trainers for today's webinar. Dr.
[03:30] Christopher Parish, Joseph Paul Swinsky, Gretchen Imori, and Kiana Keefe. Dr. Parish is a professor of geomatics in
[03:39] the college of engineering school of civil and construction engineering at Oregon State University. He also serves as director of the geospatial center for
[03:49] the Arctic and Pacific, a university-led advancing research and education in geodysy, geomatics, and geospatial geospatial engineering. He is past
[03:59] president of the American Society for photoggramometry and remote sensing. Prior to joining Oregon State University, he held the position of lead
[04:07] physical scientist in the remote sensing division of Noah's National Geodetic Survey. He also serves as an affiliate
[04:15] faculty member in the center for coastal and ocean mapping joint hydrographic center at the University of New
[04:21] Hampshire. Hampshire. JP Swinsky is a 24-year NASA Gddard software developer who spent most of his career creating flight software for
[04:31] spacecraft and science instruments. He led flight software development for the Atlas instrument from 2010 until 2016. In 2018, he transitioned to cloud-based
[04:43] data processing solutions and in 2020 co-developed slide roll with the ISAT 2 project scientist and University of
[04:50] Washington, a public web service providing fast cloud access to ISAT 2 data. data. Gretchen Imohori is a staff staff
[05:00] scientist and SAT Bathy project manager at Noah's National Geodetic Survey. With 26 years at Noah, she supports
[05:08] hydrographic and remote sensing operations. She holds a Bachelor of Science in Chemistry from State University of New York, Buffalo, and a
[05:16] Master of Science in Earth Science Ocean Mapping from University of New Hampshire. Hampshire. Kiana Keefe is an analyst programmer
[05:24] with two plus years experience working in Chris Parish's research group at Oregon State University. She has a
[05:31] bachelor of science in computer science from Oregon State University. She is a lead developer for Noah's comprehensive
[05:37] baometric LAR uncertainty estimator Satathy Satathy photoggrammatic shoreline uncertainty estimator and a contributing developer of NASA's ATL 24
[05:50] Chris over to you. Okay, thanks Sean and hi everyone. Uh again my name is Chris Parish. with
[06:03] Oregon State University and I'm really honored to give a demo on ATL 24 and how we're going to use ATL24 and Sentinel 2
[06:10] spectral imagery alongside each other for bathometric analysis and and also maybe looking at bathometric change. So to uh set the stage for this um if
[06:20] you're going to follow along with me uh there are some things that you need to set up ahead of time. Uh so first of all
[06:25] there are a couple files that you should have been able to find on the uh training website. There's a shape file
[06:30] which is called hyannis AOI. Um, and then there's also a Python script which is called PSTB linear regression.py. So
[06:39] you want to go and download those two uh files. If you haven't already done so, you also need to set up an EU capernicus
[06:46] account in order to be able to uh download Sentinel 2 imagery. Um, you'll also need to download and install QGIS,
[06:54] also known as CQIS. uh that's free and open source GIS software uh that we're going to use in this demo. And then
[07:00] there's three sites that you want to uh go ahead and bookmark. One is the Capernacus browser. Um the second is the
[07:05] slide rule Earth web client. And then the third is the Noah uh web map tile service electronic navigational chart.
[07:16] Uh so here's our um our project site. Uh this is where we're going to be working for this demo. Um this is Hyannas Harbor
[07:22] in uh Cape Cod, Massachusetts. This is a site that is meaningful to me um because it's actually where I started my career.
[07:28] At the very beginning of my career, I worked on a Noah hydrographic survey ship and this is where I first met the
[07:34] ship and and where we spent a few weeks working um before uh transiting down south. So, um just to to kind of take a
[07:42] quick look at the site here, one thing that you might notice is that there's a lot going on um in terms of where we
[07:48] are. Uh so, this is on the southshore of Cape Cod. You can see in the in the
[07:52] image up in the upper left where we are relative to Boston. Um but in terms of things going on in the harbor, uh there
[07:58] are a lot of coastal engineering projects um uh you know engineered structures, some of them going back uh
[08:04] nearly uh 200 years um such as the breakwater uh the original breakwater. Uh we've also got a a jetty groinfield,
[08:12] other shoreline protection structures. There's a dredged channel that's used by the ferry. Um and then there are also a
[08:19] lot of storms that impact this area including a lot of times um large nor eisters. Uh so really a lot of different
[08:26] reasons why um there could be changes to the bethimemetry in this site and why we might be interested in monitoring the uh
[08:33] bometric change over time. And just to make the point that uh bethimemetry in this area has been of
[08:40] interest for a long long time. Um here we're looking at an 1894 US coast and geodetic survey uh chart of
[08:47] Hyannis Harbor. So quickly this is the workflow that we're going to go through. Um we're going to start with just a a visual
[08:56] analysis of our project site. Uh we'll do that in QGIS um just to kind of gain familiarity with the site. Then we're
[09:02] going to go into um the slide roll web client and this is where we're going to be able to um view and and download
[09:09] ATL24 withmetry. So, ISAT 2 withmetry um from our our new ATL24 data product that Lori talked about in the earlier
[09:18] session. And then we're going to integrate that ATL24 bethimemetry with um satellite drivemetry from Sentinel 2 imagery and generate final bathtric data
[09:28] layers for visual assessment. Before I jump [clears throat] into uh actually doing the demo, there's one step that I just want to talk about
[09:37] briefly um so that it doesn't uh confuse anyone when we get to this step. So there's going to be a step where we're
[09:43] going to do this integration of the ATL24 withmetry with um Sentinel 2 imagery. And the way we're going to do
[09:51] that, we're going to run a widely known algorithm known as the Stumpf algorithm. This is actually going to parallel in
[09:57] some ways I think a workflow that Gretchen is going to show later um in demonstrating the Noah saty tool. I'll
[10:03] just say the version that we're going to do um it it's going to be a little bit
[10:07] basic compared to what uh Gretchen is going to show. So we're not going to make use of some of the um the new
[10:13] elements such as compositing and the switching model and acolyte and other things that Gretchen might mention. But
[10:18] um for visual analysis uh this should be a pretty good workflow. So we're going to start by generating what's called
[10:24] pseudobithmmetry or PSDB and that's going to be the logarithms the ratio of logarithms of two different spectral
[10:31] bands. We're going to re um blue and green. And then in the next step we're going to do a linear regression of that
[10:37] pseudobithmmetry pseudobithmmetry uh on ATL 24 or regression of ATL24 reference beimemetry on this pseudobithmmetry and that's going to
[10:45] give us the parameters of a linear transformation that we can use to to transform that pseudobithimemetry to
[10:52] actual depths. So with that um let me go ahead and at this point and just uh just start in on
[11:00] the demo. And the first thing we want to do is I'm just going to bring up uh
[11:04] QGIS. QGIS. Again, this is uh free and open source GIS software. The version I've got is 3.40, but any recent version should work
[11:13] reasonably well. And I'm going to go ahead and uh just uh open a new empty project. And at this point, I want to
[11:22] navigate to those files that I mentioned were on the training website. And so hopefully you had a chance to download
[11:29] those. If you did, um, some of the files that you grabbed hopefully were the ones, um, called
[11:36] Hyannus AOI shape file. And I, in this case, I can just kind of drag and drop. I'm going to take the one with the
[11:42] extension of SHP. And I'm just going to drag and drop that right into QGIS. Uh, there you can see it opened up.
[11:52] The first thing I want to do is, um, probably just change the symbology. Uh, I'm going to double click that to bring
[11:57] up the symbology. And I want to change it to just a a red outline. Um, something like that and say, "Okay, so
[12:05] there's my project site. Uh, the next thing I want to do is let me see if I
[12:10] can move that screen move that screen sharing box out of the way. Okay. The next thing I want to do
[12:16] is um just like usual in a GIS, I want to bring up some base map imagery. And
[12:22] so, uh, to do this, um, I'm actually going to bring up some, uh, Google imagery. Uh, if you're, if you haven't
[12:29] set this up already, what you want to do is you want to go into plugins, manage, and install plugins,
[12:37] and that should pop up this list of plugins that are both uh, installed and not installed. So, in my case, you can
[12:44] see this one called Quick Map Services. That's already been installed. If you don't have that yet, you want to go to
[12:51] um not installed, search for it in the search bar and install it. Because I've already got it, I'm going to go ahead
[12:57] and just close this. And then hopefully at this point um you'll see over here on the on the right hand side of the screen
[13:04] the search nextgis QM. If you don't see that, the way to get that to pop up is um you want to go
[13:14] into uh you should be able to go into just web quick map services and search next uh GISQM.
[13:23] So in this box, I'm just going to type Google satellite and the one I want to pick is the one
[13:31] called Google Satellite hybrid. And I'm going to say add. So, that went ahead and and uh opened up
[13:38] the the imagery for my site. And at this point, I can just kind of explore a little bit. I'll turn off the um the
[13:46] project site outline just so we can see what's going on. Here are some of those engineered structures that I've talked
[13:51] about. Um the jetty, uh the the um breakwater, and then over here we've got a a groin field. There
[13:58] are also some uh uh private revetments that have been um installed for shoreline protection. um the dredged channel that's used by
[14:07] the ferry. And so like I mentioned just a lot going on and a lot of reasons why bethimemetry
[14:13] in the site um might be changing and might be of interest. So in terms of looking at existing bethimemetry, one
[14:20] one thing we might want to do at this point is go ahead and bring in some uh
[14:24] Noah nautical chart data data. And so to do this, I'm going to go up here and click on layer
[14:32] data source manager. And I'm going to scroll down here until I see uh WMS. That stands for web map
[14:40] service. WMTS, web map tile service. I'm going to do that. And just uh click on new. And I think I've already got this
[14:48] set up, but it it shouldn't hurt. I'll go ahead and do it anyway. I'll call this uh I'll call this Noah um web map
[14:55] tile uh service enc um should have been available on the on the um trending website. So it's
[15:11] actually this one here that starts with GIS chart tools. I'm just going to grab that that um that whole URL
[15:20] and go ahead and put that in here and say okay. It looked like I had already set that
[15:26] up. So, it says do you want to overwrite it? And I'll just go ahead and say sure,
[15:29] overwrite. overwrite. Okay. And then I can I can close out of this box. And then back over here. Now,
[15:35] when I scroll down um in this in this browser, uh I scroll down to where I see
[15:41] WMS WMTS. Expand that. Pick the one that I just added. Whoops. I want to expand it and expand it again until I see
[15:51] something called default 028 mm. And I'm going to rightclick that and say add layer to project. And that worked. it went ahead and
[16:01] popped up the the um electron u electronic navigational chart for this area. Uh so we can we can zoom in and
[16:09] and look at what the the chart um soundings look like for this area. One thing we might see I I found this kind
[16:15] of interesting just in exploring the ENC. If we get uh close to shore and for example uh close to this breakwater here
[16:23] you see that there are a lot of these rock a wash symbols but actually it looks like uh in the
[16:29] very shallowest areas maybe um not a great density of sounding. So hopefully we'll be able to use ATL24 and and
[16:36] sentinel tubemetry to get a good idea of what's going on in in those areas. So with that in mind, let's go ahead and
[16:44] just uh jump into the next part of this where I'm going to show you how to get I
[16:48] set to um ATL24 bethimemetry. And to do so, I'm going to go to the next of the
[16:57] um uh uh links that was shared in the in the uh demo in the training website. And
[17:03] so this time I want to go to the one that's called slide rule earth. That's going to take me to this website
[17:09] here. here. So, this is how we're going to be able to get um uh NASA ATL24 data through uh
[17:16] through um slide roll and this web client. So, I want to click on the link that says web client.
[17:25] It's going to pop up. Um I want to make sure this is something that I sometimes forget to do actually. I want to make
[17:30] sure that I'm I've selected the tab that's called I set to coastal methimemetry. And then we're going to be
[17:35] able to just zoom into our area and take a look at uh bethimemetry. in that site. Before we do that, I just wanted to make
[17:42] a a a quick point here. So, in picking out the site for this demo, I very specifically chose a site that was
[17:50] somewhat on the challenging side. So, a mid- latatitude site, a lot of times when you see people do um satellitemetry
[17:56] or or icemetry, uh a lot of times we're focused on these um very clear tropical waters where we
[18:03] just know things are going to work great. Um so, I I purposefully tried to pick a little bit of a a more typical
[18:09] project site. But just while we're here, I do kind of want to take this opportunity um just to show you what it
[18:16] looks like if we um you know, if we were to select a site that was in a uh a a
[18:23] really, you know, sort of amazing um tropical area here. Uh it looks like I thought I had a a site selected, so I
[18:31] might have to do this kind of on the fly. So, I'm just zooming in here on Turks and Caos. And I'm just going to
[18:36] draw a project box. I'll do one maybe that goes about like maybe something like that. And I'm going to double click
[18:48] and hit um run slide. While this processes, again, the reason I'm doing this, this is not our site. I just want
[18:54] to show what it looks like um when we've got a site where uh here what's going to
[18:58] happen is when it gets done processing we're going to see that it's selected all of the different track lines of ISAT
[19:05] 2y 2y and for a site like this what we should see is that uh throughout the entire
[19:12] site we've got really amazing um I'll give this a second to just finish processing Okay, there we go. So, that worked. That
[19:26] came up and it we can see it found all these different tracks of mythimemetry. And in any given track, I'm going to
[19:31] change the the color scheme. I'm going to change it to this cool scheme. So, any track that's within this site,
[19:41] I'm going to see this really just nice bathtric profile. I'll see the depths dropping off to to greater than 15
[19:46] meters depending on where where I am in the profile. Um, I can pick another line. Basically, any line I pick, I
[19:53] imagine it's just going to look like a pretty amazing bethimemetry. And in this case, another thing that I
[19:59] can potentially do here is I can go to this 3D view. And when this loads, um, if I can get
[20:08] this to work, what it should do is is Oh, yeah. There we go. I should be able
[20:15] to um just sort of drag this up and kind of rotate this around and look at the
[20:21] bethimemetry for that site in 3D. And in a case like this, I could have even made my site a bit bigger. In a case like
[20:28] this, you can imagine that we could generate a pretty good um bathometric DEM even without incorporating any
[20:36] additional data. Okay, with that in mind, let's go ahead and go back to requests. And now I'm
[20:43] going to go up to the site that we actually are uh interested in for this demo. So I'm going to I'm going to um
[20:49] scroll all the way back up to New England England and to Cape Cod and to our Hyannis project site. So here we are.
[21:01] Here's our here's our actual site of interest. I'm going to do the same thing. I'm going to draw a box. I can
[21:08] make it pretty big. I just basically want to make sure I'm covering the whole area. area. So I can do something maybe I'll do
[21:16] something maybe about like that. And then same process before I'm going to hit run slide rule. It's going to go through and process
[21:26] again. It's finding all the tracks of set 2 imagery. So this one um in this case uh if you're to spend some time
[21:34] investigating these different track lines. Basically what you'll see is it's not um as amazing as when we were just
[21:41] looking at Turks and Caos, but we do seem to have some pretty good bethimemetry bethimemetry uh going through the going through the
[21:48] harbor. And so I can, you know, just try try a different couple different track lines. And so it looks like we've got
[21:54] some goodmetry. This is all great at this point. Let's go ahead and and and uh download it. And there's a few
[22:00] different ways I can do this. One way, if I want a little bit more control, what I could do is I could go ahead and
[22:06] select these um individual track lines one at a time and I could click on this thing that says 3D view.
[22:13] Oh, excuse me, not the 3D view, sorry, that um table. I could click on table. And when this pops up at this point, I
[22:20] can actually um edit the command that's shown here. And I can do things like I can pick exactly what parameters I want
[22:26] to um export. I can I can pick different uh you know filters or or do things in
[22:31] different ways. However, um for the sake of this demo, I'm going to do things in an easier way. I'm just going to go kind
[22:38] of right in the middle of my screen. If you see this button that says export, I'm just going to go ahead and click
[22:43] that. And I'm going to choose an export format and I want to make that uh CSV comma separated values and say export.
[22:51] And I'm going to go ahead and put this into the folder that I created for this training. So I created this uh G Hyiana
[22:58] Harbor ATL24 demo. I'll make a new subfolder that I will call ATL24 and I will um put this uh CSV file right
[23:09] in that folder. Something I should point out at this point um because I was kind of um I
[23:16] wasn't very discriminant in picking out exactly what tracks I want. I just grabbed them all. Uh that was the
[23:22] easiest way to go and grab the data. I am gonna pay a slight price for that later and I'll talk about that when I
[23:27] get there. For now, we're actually done in slide rule though. So, I can go ahead and and uh close the web browser and get
[23:34] back over into uh QGIS and back to our project site. And at this point, since I just grabbed
[23:42] that uh that ATL24 data layer, why don't I just go ahead and and uh bring that into um QGIS.
[23:50] So the way I'm going to do that is I'm going to click on layer and under layer
[23:55] I'm going to do add layer and there should be one that's called add delimited text layer. So I'll click
[24:01] that. Uh now I want to just browse to find that file. So it's the file that I
[24:07] I just created there. I'm going to go to the HL24 folder, select that CSV file and say okay. Um, if I want, I can
[24:16] scroll along down here in the bottom and see the individual fields that came in in that file. Um, so all the different
[24:23] information. Uh, refraction corrected orthometric height. So all of the bimemetry has been refraction corrected. It's got a confidence interval. I think
[24:32] that's something that, uh, Lori um covered in her talk, but basically the confidence and the and the beimemetry
[24:38] classifications, spot, granle, etc. Um everything basically autopop populated. It it said that my X field is um
[24:46] longitude pH. Y field is latitude PH. I can go ahead and set my Z field to ortho_h.
[24:53] ortho_h. That's my Z. And I can go ahead and just say add. And at that point I should be able to close
[25:00] this window. And if you can see all these um uh orangeish dots that just got added, that's the ATL24 data. If I want
[25:09] I can change its symbol. I kind of like doing this as a a blue dot. I think that
[25:13] looks pretty good. But there's my ATL24 data. So, at this point, we're we're really doing well. Um I would make an
[25:22] observation here though and that is that uh even though this brought in a lot of uh of um ATL24 data, it still is is kind
[25:30] of sparse in terms of you know there's areas of the harbor where if we're interested in looking at at nearshore
[25:35] bitmetry all we've got is these individual discrete tracks. So this is the point where we want to see how we
[25:42] can combine ATL24 bit with um spectrally drivemetry from Sentinel 2. So to do this, I'm going to go to the
[25:52] third of the web links that uh were shared in the training website. And the third link is the one that's called
[25:59] Copernicus browser. So I'm going to open this up. Um you'll need to create an account for this. It's
[26:06] free. Uh so free to create an account and then you'll have to log in. I happen to already be logged in and you can tell
[26:12] that because it it's got my name listed up here. Um but go ahead and and sign in
[26:17] if you need to. Okay. Uh, so the next thing I want to do is just go over to our project site. So
[26:25] I'm going to um scroll over to Cape Cod and uh and to our Hyannis Harbor um project site.
[26:36] At this point, I want to draw an AOI. And so I'm going to use this uh little
[26:41] polygon tool. And then once I select that, I want to grab the tool next to it that looks like the pencil icon. I'll
[26:47] select that and I might scroll out a little bit. And I'm just gonna I'm just going to go ahead and and and digitize
[26:54] something. It doesn't it doesn't have to be perfect. And it's okay if I make this a little bit bigger than what it
[27:01] actually needs to be. So, I'll maybe do something and just finish it off off like that. Okay. Now, we want to put in a date. And
[27:11] this is the point where you could actually spend a lot of time looking through the different dates trying to
[27:16] find imagery that looks good. Cloud-free water looks uh reasonably clear. Um I'm going to do a little bit of a shortcut.
[27:23] I've already done some analysis and I found a date that looks good. So I'm just going to go ahead and put that in.
[27:28] The date that I found is 2023. Uh 2023 0320. 23 03 20. All right, there it is right there. So,
[27:45] it brought up that date. Um, I want to make sure I'm in the the visualize uh tab here. And at this point over on the
[27:53] right hand side of the screen, I've got this download uh icon. So, I'll click that download icon.
[28:01] And then here, I want to click on the tab that says analytical. And I want to be careful with the
[28:06] settings here. Um, I want my image format to be TIFF, 32-bit float. I want to change my resolution to high. Uh, I'm
[28:16] going to go ahead and keep uh the co the um default coordinate system. And then I'm going to select uh three different
[28:23] uh images to download. I'm going to do true color. So that's going to be the RGB. And then I'm going to pick just two
[28:28] of the bands. I'm going to do band two, which is blue, and band three, which is green. And I can just click the um click
[28:37] the download icon. So that should be saving them to my downloads folder. I can go ahead and open that up.
[28:49] There it is. Um it just downloaded. I'm going to say we'll just do cut and I'm going to paste this into the to the
[28:57] folder that I set up specifically for this demo. I'll do a new subfolder. My new subfolder will just be called
[29:02] Sentinel 2. two two and uh copy in that zip file. I'll go ahead and extract all of the different
[29:15] um images that are in that in that. Let's do Okay, so that worked. It extracted all the images. I'm going to do one more
[29:28] thing just because these are fairly long and cumbersome file names. I'm going to rename these. Uh the thing that says
[29:35] band two, I'm just going to rename that to S2 for Sentinel 2 uh blue. The one that says band uh three, I'm
[29:45] going to rename that to be S2 green. green. And then the final one that's the the true color RGB, I'm going to rename that
[29:56] to be S2RGB. So, I've got those three uh three different images um all renamed. At this point, I can um get out of that
[30:10] capernicus browser, and I can actually just uh this is another case where I can just drag and drop this. So, I'll just
[30:17] I'll just drag and drop those right in. Whoops. So, it looks pretty good. Uh here I am back in in uh QGIS. I've got
[30:25] my uh my RGB image up at the top. If I want, I can go ahead and and take my
[30:31] ATL24 bit imagery and drag that up to the up to the uh very top so that we can
[30:38] see where the where the um ISO 2 bit imagery is on top of the Sentinel 2 imagery.
[30:47] Okay. Um at [clears throat] this point, we're going to move on to the next step which is uh that stump ratio that I
[30:53] showed you earlier in the slides and we're going to create that pseudobithmmetry layer. So this is going
[30:58] to be the ratio of the logarithms of the two different spectral bands, the blue band and the green band.
[31:04] So the way I'm going to do this is I'm going to click on raster and then raster
[31:09] calculator. calculator. So that brings me up here to to raster calculator. I'm going to create an output layer and I want to give this a
[31:17] name. Uh so I'm going to put it right back in my in my demo folder. I'll do a
[31:21] new subfolder called um PSDB. Again, that stands for pseudobithimemetry. And that denotes the fact that we're not
[31:29] going to have actual depths. It'll just be sort of pseudo depths or pseudobithimemetry. So I'm going to go
[31:35] in there and I'm going to make my file name. I'm going to do um sdb.tiff. Say save. Um and then the next thing I
[31:45] want to do is I just want to go ahead and and and create that uh that um stump
[31:50] ratio. So this is going to be natural log of 1,00 times times the um blue band. So S2 blue
[32:04] and parenthesis divided by natural log of 1,00 times times the green band. This might look a little funny. What
[32:20] what is this? Again, this is just this is just the stump ratio that that we saw earlier um back in the in the slide. So,
[32:27] we've done log of blue over log of green. That factor of a th00and that's just a constant that is designed to keep
[32:33] the keep the logarithms positive and and linear linearly related uh to depth. So, I'm just going to go ahead and run this.
[32:40] I'm going to say okay. And it worked. It already generated my um pseudobithimemetry layer. All right, the next step I want to do at
[32:52] this point is like I mentioned earlier, our ultimate goal here is we want to use the ISAT 2 from ATL24 to calibrate our
[33:00] pseudo symmetry. And so to do this, we need to create a uh a layer that has both values. We want to we want a layer
[33:10] that has the um ATL24 uh um heights. I should have mentioned by the way uh in in the ATL 24 um the
[33:18] heights are orthometric heights based on the EGMO8 GOAD model. So those are you know actual uh databased heights and
[33:26] then the the pseudobithmmetry that's not those are just sort of relative values. But what I want to do is create a layer
[33:31] that has both of those together. And so um to uh to do this I'm going to go up
[33:38] to uh the processing toolbox. I might need to go processing toolbox. I've already got this up. So in this search
[33:44] window for the processing toolbox, I'm going to search for clip raster by mask layer. Clip raster by mask layer.
[33:55] And in this case, uh my um input layer is going to be um let's see, I want to
[34:05] do uh I want to do Oh, it looks like I made a mistake. I I called the the thing that I wanted to be
[34:14] pseudobimemetry. I actually called SDB. That should say PSTB, but that's okay. Um my um input layer is going to be uh
[34:24] just my um STB layer and my mask layer is going to be Wait, Wait, I'm sorry. I see what I've I've done.
[34:35] I've done the I've done the wrong tool here. The the tool that I actually wanted Sorry. back in this search box.
[34:41] The tool that I want here is the uh sample raster values. That's the one that I I meant to bring up. Sample
[34:47] raster values. So, my input layer is going to be my HL24 data. My raster layer layer is going to be SDB. And
[34:55] again, I should have called that uh PSDB. PSDB. I'm going to create an output column. I'm going to call that uh sample
[35:04] sample_pdb. And just go ahead and run that. And I can close. And that ran. And uh that created this layer called sampled
[35:17] which now um that has all the ATL24 uh heights and it also has the pseudoithmmetry. pseudoithmmetry. So at this point we're actually really
[35:26] close to being able to generate our final uh STB layer. We just need to do a linear regression in order to to
[35:33] calculate linear transformation coefficients that are going to allow us to transform our pseudobithmmetry to to actual beimemetry. Uh so to do this
[35:42] there's a Python script. I'm going to go plugins uh Python console and then open up the the Python editor.
[35:51] And um there's this script that's for me already open. But if you don't have this open, you just want to click on the the
[35:58] open script and you want to browse and find the script that was made available on the training website. It's the PSDB
[36:05] linear regression.py and go ahead and open that up. That will open up the script. The only thing that you should
[36:11] actually have to change here is if you go down to this, it's line seven and you'll see this path um to where the
[36:18] where that CSV file lives um that you created. Again, that's the CSV file that we need, the one that has the ATL24 data
[36:26] and the pseudobithmmetry. You want to change that to to your path. Um, and make sure you've got your slashes going
[36:33] in the right direction. And at that point, you should just be able to hit this green uh run script icon.
[36:40] And hopefully this will run. And okay so that went ahead and that uh finished running and it gave me the
[36:52] scatter plot. So what I see here is on the x-axis those are my pseudobithimemetry values on the y ais
[37:00] that's my isat 2mimemetry from ATL24 and then it fit a linear regression line. The first thing I want to note in this
[37:08] case is that our R squared value is actually fairly low. So we've got an R squar of 0.54.
[37:14] Usually in my research group, we wouldn't move on with um using this for uh bithimemetry unless we had an R
[37:21] squared of about 7 uh or or higher. Um the reason that I happen to know that this is okay in this case is if you'll
[37:28] remember that there was that step when we were in the slide rule web client and I said that we could have been a little
[37:34] bit more selective in just picking out exactly which tracks we wanted to download, but we didn't do that. We we
[37:40] went ahead and just sort of grabbed everything. So, I know because I I actually tried this um that if id spent
[37:46] a little more time in that step of grabbing just the tracks that I knew had the best bit imagery andor if I'd done a
[37:52] little bit of cleanup afterwards, um I could get a much better R squared value here. But actually, it doesn't really
[37:58] change uh the parameters of this linear transformation, the the the um slope and and uh intercept constant. So, uh that's
[38:06] what we're really interested in here. So, we're not going to worry too much about the the kind of lowish R squ. we
[38:12] just need these um the values the the um slope and intercept uh constants. So at this point we are actually very
[38:22] close. Uh this is a point where we're going to go back into raster calculator. Let me see if I can do it this way. I
[38:29] need to keep the scatter plot up because I I need to be able to see these um
[38:33] numbers. So I'm going to go back to raster raster calculator. And what I'm basically going to do is I'm just going
[38:40] to apply a linear transformation that is going to um transform my pseudobithmmetry to actual bithimemetry. So I'm going to do an output layer. I
[38:51] will call this um I'll I'll create a new folder here that's just going to be called SDB. SDB.
[38:59] And I'll give this a file uh a file name. And because I accidentally called the other one STB, I'm going to call
[39:05] this one I'll just do something like STB uh final. STB final.tiff. And I'll say save. And now I'm going to
[39:17] uh create um an equation to compute this. And it's going to be uh I'm just going to look over here. This is why I
[39:25] kept the scatter plot up. I want to look at uh at the two constants. So I'm going
[39:29] to do -25.850 times times SDB which really again that should have been our pseudo symmetry uh minus oh I'm
[39:42] sorry not minus plus plus 21.53 where those two constants again are just from over here in our scatter plot.
[39:52] I can say okay and it looked like that that went ahead and ran. So, I've got a layer that's now
[39:59] called SDB final. I do probably want to uh clip that to just our project site. So, we can and I can I can get rid of
[40:07] the Python script at this point. Uh this is where I want to clip it. So, um this
[40:12] is the point where I actually want to do the the tool that I I started to show
[40:15] last time. I'm going to do this uh clip raster by mask layer. And I'll do I'm going to clip SDB final. And the mask
[40:22] layer is going to be the the hyenas AOI. And you just let that run. Oh, wait. Oh, I guess it didn't select
[40:33] it. Try one more time. Run. Okay, that ran. Now I can get rid of this one. And
[40:40] I can turn off that and that. And I've just got my my final SDB layer. And if I
[40:47] want to change the symbology, I can double click it. I can change from single band um gray to single band
[40:54] pseudo color and just pick out a color ramp. I kind of like this one. This one looks kind of like pimemetry. And go
[41:00] ahead and apply and close. And so now I've got a a bathtric DEM for this project site. And that was created using
[41:07] the combination of ISET 2 from ATL 24 and Sentinel 2 values. Um it it looks pretty interesting. I can clearly see
[41:15] the dredge channel through there. I can see some of the deeper areas like in the anch uh in the um in the anchorage
[41:20] behind the breakwater over here. Um I can see some of the really shallow areas that are are closer to shore. So
[41:26] everything looks pretty good. Uh so at this point if I wanted to um if I were interested in in bometric change and in
[41:33] kind of seeing how uh the bethimemetry in this site uh changes over time, I could just repeat that process using
[41:40] multiple dates, multiple epics of Sentinel 2 imagery. And then I could do differences of the DEMs or just sort of
[41:46] look visually at howimemetry in this area is changing over time. So that's it. Um that is the uh that's
[41:55] the end of the demo. Um but I just wanted to say thanks and uh if you want
[41:59] to reach me, my contact information is here. Christopher.parish atorggonstate.edu. atorggonstate.edu. Thanks Thanks >> Chris. Thank you for the excellent
[42:08] demonstration of ATL 24 integration with Sentinel 2 and generation of baometric data layers. We will now transition to
[42:17] JP Swinsky who will provide a demonstration of slide roll Python client. JP over to you. Okay. Well, thank you. I'm going to be
[42:28] talking about Slide Earth again. And just as a refresher from what we talked about a couple days ago, uh, slide rule
[42:35] is a public web service with REST-like APIs for processing and accessing science data. And specifically what we're talking about, uh, here is
[42:45] accessing the ATL24 uh, bethimemetry data. Uh, last time we talked about the web browser and I gave
[42:52] a a demo of that web client. Uh today we're going to be talking about the the Python client that typically runs inside
[43:02] a Jupyter notebook and I'm going to be giving an example of how to access the ATL24 data from a Jupyter notebook using
[43:10] the side rule Python client. Now before I do that though I want to uh just show our landing page of our website. So the
[43:21] the Python client is can be a little intimidating. it's not as easy to use as the web client and so we provide a lot
[43:29] of documentation to to go along with it to help to help you out to help you get
[43:34] started. Uh so if if you navigate to sidewallorth.io sidewallorth.io in your browser you'll find you'll come here and the first thing I want to point
[43:43] out is this contact us page. So you should always feel free to reach out to us. Uh here's this email here goes
[43:51] directly to me. Uh, I'm always excited when users uh, email us and we do our best to get back to you as soon as
[43:59] possible. Uh, you're also free for people that are a little bit more on the developer side if you want to go to
[44:06] GitHub and open up an issue if you find anything wrong or want a feature request. And certainly we we're an open
[44:12] source project and we invite collaboration. So you're also free to to open pull requests and start discussions
[44:18] on features that you'd like to see. Uh but now about the documentation. So clicking on the documentation link takes
[44:27] you to our documentation site and this is this is it here. Uh on the left you can kind of walk through it in the order
[44:36] of which you would typically want to approach it if you're a new user. So getting started the first thing you're
[44:42] going to want to do is know how to install the the Python client. And this is instructions on how to install it. uh
[44:49] we support and uh pi pi. You can also directly install it from GitHub. Uh then we have a really short the simple hello
[45:01] world type Python program that can just get you started and make sure everything is installed correctly and you're you're
[45:07] running okay. And then we move into examples. I don't know about you, but I learn best from
[45:12] examples. So here's some examples that we've put together. And the one we're actually going to be going through today
[45:17] is this ATL24 example. example. But then as you progress, uh, you can go through the users guide. You're going to
[45:26] find out all the different parameters and and APIs that are available. Uh, there's some more information for
[45:34] specific to ISAT 2 right here. Um, and then then going down even further, uh, we have, uh, our developers guide. So, if you're
[45:46] if you're really interested in how this all works, we have a map of our project, why we develop Side Rule. Here's an
[45:52] under the hood. So, here's a an eye chart on on all the different components and an explanation of those. Uh, but
[46:00] just wanted to let you know this is where to go when you have questions about using the Python client.
[46:07] So now I'm going to switch over and actually look at our ATL 24 example. Uh so this is just check I've checked out
[46:16] the repository uh in and I've opened it up in VS Code. And so under the slide rule repo from GitHub I go to clients
[46:25] Python examples and then under the examples you'll find this notebook that I'm going to walk through right here. So
[46:33] I've I've set this all up. So I'm going to just run through the cells. So this is I'm importing the
[46:40] slide rule client into my cond environment. Oh, I should point out this file right here is all of the packages you need to run
[46:51] all of our examples. You don't have to use it, but if if you're wondering, man, I wish I had a quick way to get all the
[46:58] dependencies, this is what you'd use. Okay, so now I'm going to initialize the client. You will find one difference
[47:05] here. I'm running against a private developers cluster just so so I don't uh pound the the public cluster. Um this
[47:13] organizational organizational uh setting is absent in the in the version that is on our repository and and it would go right to the the public
[47:22] cluster. cluster. Um here are some helper functions. I'm not going to talk too much about those, but you'll see them being used. It's
[47:29] really just to plot the data that we get back from the server. So I have functions to plot ATL24, ATL06 and ATL3.
[47:40] Uh and now I'm also going to define an area of interest. It's just on the north shore of the Dominican Republic. And
[47:46] this is in there are many ways that you can find an area of interest using our Python client. This is the simplest.
[47:52] It's just creating a list of latl longs. You can also use giojson and shape files, files, but I've done this this way here for
[48:02] clarity. So now if you just want I just you just want all the data ATL24 data in
[48:08] this area of interest. This is one line here. You run it. It's going to it says that there's 110 ATL24 granules that are
[48:18] intersect this area of interest. It ran in 8 seconds. It processed all 110 of those granules in parallel on the
[48:26] server. So, so just to talk through what's happening here, the the Python client built a request when you hit this
[48:34] run and it sent that request to the server. The server is sending back status messages which we see displayed
[48:41] here and then it sends back a data frame um um encoded as a geoparet file that the
[48:49] Python client then opens up. And so that's all what happened right there. And now I'm just going to look at that
[48:55] data frame and it has 44,000 rows. That means it's got 44,000 bethimemetry photons. And these are the columns that
[49:03] come back by default when you just do a simple access of the ATL24 data. So you'll see here that each photon has the
[49:11] same classification. It's allimemetry. This is an encoding for which ground track it is. Uh this is the height of
[49:17] the surface, the orthometric height of the surface. This is the reference ground track. If you know anything about
[49:22] ISAT 2, all of the tracks are are labeled. Um, and it's so it's reference ground track 758. Here's the orthometric
[49:30] height of each of these photons. So, this has a depth of about 20 meters here. And here's the confidence level
[49:37] that the ATL24 algorithm assigned to it. Uh, this is which spot it was on the the six spots of the ISAT 2 at Atlas
[49:47] instrument. Here's the along track coordinate across track coordinate and then this source ID is allows you uh to
[49:58] look up which granle the data came from. So embedded in the metadata of the geo data frame is a dictionary that links
[50:05] source ids to granual names. And then lastly this is which cycle the data was collected at. Uh oh and we have the time and the lat
[50:15] long. uh and if you're familiar with geod data frames that this latl long is encorded as a a point geometry.
[50:21] So let's plot this and see what it looks like. Okay, this is just a quick view of what
[50:30] it looks like. And so I can see here underneath where it's white, this is probably land. And then this is where we
[50:36] get a lot of good bethimemetry near to the shore. And then the algorithm is doing its best to find bethimemetry as
[50:42] it goes farther offshore. Right. So, this is a lot of data. Now, let's say, you know what, there's actually a
[50:48] particular track that I'm interested in. And so, I've I've pre-constructed this. So, now instead of pulling all of the
[50:55] data, I just want the ground track three, the right beam, I want the reference ground track to be 202. And I
[51:04] want it to be from cycle 12 of the ISAT 2 collection. So, now let's run that. It's going to the client's going to
[51:11] construct a request, send it out to the server. The server is going to process that request and send the data back. And
[51:16] it happens now in 3 seconds. So I'm going to look at this data frame. And so now I've only got 861 bethimemetry
[51:24] photons. So this set of photons is a subset of this one up here. And the subset is defined by these parameters
[51:33] here. The beam, the reference ground track, and the cycle. You can use others. You can include just one or
[51:39] include others that are uh in the data set. All of which are going to be explained in our documentation.
[51:47] Okay. So now let's plot this. Ah okay. So this is now a a side view of the the photons.
[51:57] Let's go back up here again. This is a top- down view looking plotting them all of the the bethimemetry
[52:05] uh based on its latl longl long coordinate and kind of color coding it to to show some depth. But now we're
[52:11] turning this on its side and looking at just one of the tracks and we defined which one of those tracks are and we get
[52:17] this nice plot here. So this is a a profile of the uh sea floor. Okay. So now I'm like oh I really like this. I
[52:27] want to I want to dig in and and get more information about it. So now I'm going to do a detailed access of this
[52:33] single track. Uh similar to what we talked about a couple days ago with the web client, I'm turning the compact flag
[52:40] off so I get all of the data. I'm going to now say I don't want you to I don't
[52:45] want the server to threshold on confidence at all. Give me all of the bethimemetry even if it's very low
[52:51] confidence and then give me all the different classifications. So, let's run this. It's going to construct this
[52:58] request. It's going to send it to the server. Server is going to respond with the results. And it just didn't. And now
[53:06] we have 35,000 photons. [music] Again, the reason we have 35,000 photons. So, now we have 35,000 photons.
[53:17] The reason we have 35,000 photons instead of the uh 800 sum up here is because we're asking for all the photons, not just the
[53:28] bethimemetry. So we're getting a lot of sea surface and unclassified photons. So let's plot that. And here you see it. So you can see the
[53:37] gray is the unclassified. This looks like land. And then we come down. There's a little drop to the to the
[53:43] ocean. And then we've got the C surface in blue and we've got that same track now in red in the context of the other
[53:51] photons. Let's look at this based on confidence. confidence. And you can see here we have uh a bunch
[54:00] of different confidence values spread throughout the the beimmetry being identified there. Okay. So again, something that we talked about a
[54:11] couple days ago was using the web client, we were able to instead of going directly to ATL24,
[54:18] go to ATL3 and use ATL24 to classify it. So this is a more sophisticated request. Um the
[54:27] ATL24 is is run against the release 6 ATL3. So I have to manually specify that in the request parameters. I'm going to
[54:37] ask for everything. Uh because this is an ATL3 request, I'm going to turn off any filtering based on its own
[54:45] confidence values. And I'm going to ask for the same beam reference ground track and cycle. So this is going to go out um
[54:54] and grab that. We got that there. And so now this is all of the ATL3 data classified
[55:02] classified with the um ATL24. You notice it's a bigger area here. Uh and there's more data data that wasn't used by the
[55:14] classifier because it was outside of a band considered um outside of the band in which there'd be valid bethimemetry. So that's why
[55:23] there's there's even more data now on ATL3. But I also want to point out back up here, we're going to get different
[55:30] fields. So now we get what the spacecraft velocity was at each of these photons. We get what the solar elevation
[55:36] is. Um, see, we get the background rate and we get the quality pH flags. These are all fields that come in the ATL3
[55:45] product, but do not come in the ATL 24 product. So therefore, if you want those fields, this is an easy way to get that
[55:53] data and overlay the ATL24 classifications. classifications. Okay. So now um let's combine some features of ATL3 and again combine
[56:08] it with ATL24 to do some filtering at the ATL3 level. So here I'm going to do the same request as before except I'm
[56:15] going to do two new filters. I'm going to say only give me ATL3 that has a high
[56:22] confidence according to the ATL3 algorithm. And the ATL3 has this uh classifier called YAPSY. Yet another photon classifier which gives a score
[56:32] based on the local density of the photon. How many photons are near it? And so I'm going to say only give me
[56:40] photons that have a high density. So so this is saying filter the ATL3 with these parameters and then overlay the
[56:49] ATL24 classifications. And so we run that request and we get the data back. Took a little bit longer a second longer
[56:56] because it's it had to uh do some more processing with the the YAPSy and the confidence filtering. And now we have
[57:03] much less uh photons than before. And and we see uh interestingly we see some gaps here now where there were photons
[57:13] that were filtered out by the ATL3 filtering um but were classified by ATL24. And and we do see though some
[57:21] more photons that were classified by uh ATL24. And then it cleans up all of this all of the photons. If you look back up
[57:30] here, all of this stuff that was obviously not a surface uh reflection. Some of these filters very quickly
[57:36] cleaned up all of that. And here we're now taking the same plot and we're overlaying color coding it
[57:44] with the Yapsi score. So you can see what the Yapsy score is of some of these uh photons that were identified as
[57:50] Pimemetry. Okay. So here is now a final step uh to this process of using um ATL3 and that is we're going to take
[58:05] ATL3 data. We're going to classify it with ATL24 data. Then we're going to specify to only use the bethimemetry
[58:12] photons. And then we're going to run the ATL6 surface um surface finding algorithm on it to produce an aggregated
[58:21] surface elevation of the bethimemetry photons and we're all going to do that on the server making this request here.
[58:27] So this request is constructed. You can see I talked through what it's doing. And this is the the magic to tell the
[58:35] server to use the ATL3 surface finding uh algorithm. And so it ran it took 3 seconds to run. And now this is the this
[58:46] is the data. We're going to get different fields in this data set because it's this is really now like an
[58:51] ATL6 product but we've fooled it by giving it bethimemetry instead of uh land ice elev uh photons. So we get you
[59:01] know number of fit photons we get the surface window. We get the the misfit the armas of the misfit we get the slope
[59:09] here um and so forth. Okay. So now let's plot this and we get a very nice smooth
[59:17] return of the of the um sea sur uh sea floor. Uh now again you may say well there's some things
[59:26] here that that aren't right. You can go back and tweak the parameters here and say oh you know what let me get rid of
[59:33] low confidence photons or let me do an ATL24 confidence level that's that's higher. I only want the really high
[59:40] confidence photons based on ATL24. And you and you can tweak that to get a very clean, but even just with these
[59:48] parameters, we've gotten a very clean surface that's easy to work with um and is only a handful, right? 81, right?
[59:56] This this data set represents the same surface, but is much smaller and easier to work with. And then lastly, for for power users
[1:00:07] that you just want access to the raw data, here's a request that does some different filters just based on ATL24.
[1:00:15] So again, now we've moved past the talking about the ATL3. We're back to talking about ATL 24 and some of the
[1:00:21] more corner case features that we support. Um, this set here, I've just chosen to turn off the low confidence
[1:00:28] filter. You could turn on a night filter. Say you you want say you have an area of interest and you're just
[1:00:34] interested in bethimemetry that was collected at night. Well, you could turn this on and then we'll only return
[1:00:40] accepted uh um that was collected at night or there's we have a calculation of what the the maximum sensor depth is
[1:00:50] for the Atlas instrument. uh when measuring bethimemetry sometimes we get we think the algorithm will find bethimemetry beyond that
[1:00:59] sensor depth. But if you want to just reject all of that you can turn this on and say if the sensor depth is exceeded
[1:01:06] um turn it to to false and that way you'll only get photons in which the sensor depth is not exceeded. So let's
[1:01:15] take a look at this. Um, and you'll see now fewer photons because we've uh done some filtering here.
[1:01:25] Just for completeness, I'll I'll plot that there. Uh now lastly uh an exciting uh feature that we've just added um is the ability
[1:01:36] to directly query for ATL 24 resources from the client just hitting the the Python Python um just hitting the slide rule servers.
[1:01:48] So these are requests that do not use CMR in order to query ATL24 resources and therefore we expose
[1:01:57] some additional query parameters. So here is an area of interest. I'm going to build a a polygon
[1:02:05] string from that. And now I'm going to make a request for ATL24 granules with this polygon. And I'm going to say I
[1:02:12] want the maximum I want to have a maximum mean depth of 10 meters. So nothing should have a max
[1:02:21] a mean depth of greater than 10 meters. So only mean depths for granules less than 10 meters. And I only want granules
[1:02:28] that are collected in the fall. So there's an encoding for which season? Winter is zero, spring is one. Uh um oh
[1:02:37] actually this is the I have that wrong. This is the uh this is the summer. I only want to collect in the summer.
[1:02:44] Summer is two and and the fall is three. So I'll run this request. It's going to go out to the servers. It's going to
[1:02:50] make that query. And now this is all of the granules. I found 53 tracks and it's returning the granular names with the
[1:02:57] beam that meets this criteria. We we have mean depth, min depth, max depth, uh season, um we have the number of bometric
[1:03:07] photons, um and a few other things that we you can look at. And then also now if
[1:03:13] you want more information about a granle itself, we have an API that allows you to say give me information just about
[1:03:23] this granle. And so we'll run that. It went out very quickly ran out. It made a request to the server. The server um
[1:03:31] queried our own database and said, "Okay, for this granle here, it has these beams. This beam was collected in
[1:03:39] in the summer." Oh, there's no bethimemetry in any in that beam. Okay. Beam three, it was collected in the
[1:03:47] summer. Had four photons. And this was the mean depth, minepth, and max depth for that. And so forth.
[1:03:57] Thank you JP. Great demonstration for participants wanting to explore the slide roll Python client. Next we'll hear from Gretchen and Kiana who will
[1:04:05] present on Noah's SAT bathy tool and integration of NASA's ATL24 product. Gretchen and Kiana over to you.
[1:04:17] >> Thank you very much. We're very excited to talk about our work today um on Noah's SAP tool and the integration of
[1:04:25] NASA's ATL24. To begin with, we're going to give a little background, talk about um SAPI and what SDB is and its importance and
[1:04:36] then give a um a few examples from our SAPI desktop tool. I'll run through a quick demo and then pass that off to um
[1:04:45] Cana to talk about our ATL inter ATL 24 integration and her demo and then if we have time we'll talk about the future of
[1:04:52] sapi so no sat valley test stop tool version 3.1 is now official this is the interface the whole purpose of the sap
[1:05:04] valley tool is to automate the creation of satellite drive bethimemetry and I should say that this desktop tool
[1:05:12] was for Noah internal use only at this point but I will talk about the future at the end of it.
[1:05:18] So for those that did not catch Chris Parish's talk in the morning, um satellite drivethimemetry or SDB is an
[1:05:25] indirect method of bometric measurement. And while it is not the most direct um compared to u multi-beam sonar and
[1:05:33] bimetric glider, STB is um uh more direct than the gravity based pithmmetry. pithmmetry. But given that why do we care about STB?
[1:05:44] The example on the left or the right um give a good example of um why it's important. The top right image is the
[1:05:53] bometric lightar example from our group and remote sensing division in the national geek survey. And this is a st.
[1:06:00] If you look at the lower SDB um example that Dr. Rick Stump created, it fills in the gaps of the bometric
[1:06:08] lighter. So there are some uses for it. But what is satellite driveth imagery in detail? For our purposes today um in
[1:06:19] sapadi we use the method of using sentinel 2 um resolution of 10 meters and updated research from Dr. Brook
[1:06:27] Stump and Dr. Isabelle Compello and I should note that all SDA methods can be grouped into three method major
[1:06:35] charact categories. The first one is spectral SCP spectral radiance for example radio transfer equation or RTE optimization
[1:06:46] optimization RTE empirical and band ratio. The second is phototric and the wave and the third is wave kinematics. For our purposes
[1:06:55] today we're going to focus on the band ratio approach which is based on a statistical race relationship between
[1:07:01] reflectance and depth and it often requires but not always which I'll explain in a little bit when we talk
[1:07:06] about Um our simplified calibration um requires a known depth data to calibrate. The compos compositing approach for the data the compositing
[1:07:18] approach for the van ratio solution inherently removes a lot of the faulty data. So what we're asked a lot of times is
[1:07:26] why do we need SDB? For our purposes at Noah, it's for interautical chart updates, hydrographic survey planning
[1:07:33] and reconnaissance, change analysis, and to fill in um bometric glider caps in non-navigationally significant areas. In the um image below is an example from
[1:07:47] our Noah chart. these areas of unserveyed um locations still exist in areas like Alaska, but I'm going to focus on um the
[1:07:57] hydrographic survey planning and reconnaissance. reconnaissance. The reason ISTB is so important is we've been using it quite a bit is it's become
[1:08:05] a vicious cycle where hydrographic survey data sometimes doesn't exist. We need the data and the hydro data, the
[1:08:13] hydro vessels need to collect the data. However, if they're in an area where there isn't any data to operate safely,
[1:08:20] it becomes very dangerous. This is where SDB is very has become very important to provide some amount of
[1:08:26] data so the surveys can be as safe as possible. So, my first example is of St. Matthews.
[1:08:35] St. Matthews is off of um in Alaska off the coast and the ENC or electronic navigation chart while it does show some areas
[1:08:46] where there are rocks and areas of danger which the um a survey vessel like the fair weather um need to stay away
[1:08:53] from. Uh the we were asked when the north ship fair weather had to um survey this area if we could run the sad valley
[1:09:04] tool to provide uh reconnaissance data. The pseudoithmmetry red um examples on the left and it shows some areas that
[1:09:13] are not captured in the um ENC current chart. chart. This helps keep the noise ship fair weather safe to the best extent
[1:09:24] possible. possible. Another example is in Kotibu, Alaska. That's in the northern part of Alaska. And if you can take a look at the ENC on
[1:09:34] the left, there's a lot of gray areas. That basically says there there are no charted depths here. And so you're
[1:09:40] basically working blind when you're serving in this area. Very dangerous. Again, we were asked to run the Stat
[1:09:46] Valley tool and to provide data that would provide some information on the bethimemetry. bethimemetry. What we found was not just
[1:09:54] [clears throat] the bethimemetry but channels, multiple channels, two channels to show that where they can navigate somewhat safely.
[1:10:03] So the next I'm going to run into the Sap Valley desktop demo. So this is the um the Sap Valley desktop
[1:10:12] tool interface. And I'm going to zoom in on our area of interest, interest, which should be around the area of
[1:10:22] Miami. Miami. Each of these squares are the Sentinel two tiles. And I will select the tile that I'm interested in
[1:10:33] and zoom in further and draw the area of interest. You can also uh provide an AOI that's a
[1:10:45] zip shape file. And then I'm going to um select the project directory. Next, we're going to figure out um what
[1:11:04] start date we want. So, for the Miami area, it's relatively clear. Um, in Florida most of the year, except when
[1:11:11] there's hurricanes. We're going to go up to January. Do January 1st and we'll do an end date
[1:11:24] a couple weeks be um earlier. For the cloud cover, we'll just leave it as default is 20%, you can move it to 10
[1:11:32] um 10% or less. um cloud shadows. We'll talk a little bit about that um as we're processing
[1:11:39] some of the data. Snow and ice you don't have to worry about. And I'll show example of the no data cover what I mean
[1:11:44] by that. So now we're set. We're going to search for the imagery. The little dial shows that it's
[1:11:51] searching. And while we're doing that, I'm going to talk a little bit about Oh, it's already finished actually.
[1:11:59] Okay, let's look at our search results. Was pretty quick. So this is what it looks like after um
[1:12:06] the imagery is um uh run through and we can go through and select which ones are the least turbid have the least amount
[1:12:15] of clouds. This is quite bit turbid so we don't want to use something like that. We don't want to use the stuff with all the
[1:12:22] clouds. clouds. I'll explain a little bit more about that. I'm going to go back to the first one.
[1:12:33] This looks pretty clear compared to this one. Looks pretty turbid still in this area. So, go ahead and select it.
[1:12:39] In um a perfect world, if we had more time, we would select ideally six to eight images
[1:12:46] to create the composite. And I'll talk a little bit more about that. For the interest of time, I'm just going to
[1:12:51] select one. And then I'm going to submit the scenes. The SAP Valley workflow and composite product procedure for a given area of
[1:13:00] interest or AOI. Multiple Sentinel 2 L1 scenes are collected and atmospherically corrected to remote sensing reflectance or RSS.
[1:13:09] Red, green, and blue bands are used as inputs to the band ratio models. PSTB red and PSTB green, which stands for
[1:13:17] pseudo STP. In addition, turbidity proxies are specified in the red edge 704 band and the OC3 based chlorophyll a product.
[1:13:28] This is the PSD red and the PSD green. These are the red edge chlorine. Individual pseudobithimemetry layers are
[1:13:37] generated and then composited along the temporal dimension by selecting the maximum PSTV value per pixel representing the deepest least turbid
[1:13:47] observation. The temporal index of this maximum pseudo STV is recorded and applied to extract corresponding values from the red edge and chlorophyll a
[1:13:56] letters producing composite turbidity turbidity peroxy maps. These composite products provide context for any resid res residual tubidity and serve as
[1:14:07] inputs to the subsequent steps within the sapi processing chain. As I spoke about before, um when you're
[1:14:16] selecting imagery, there are a few things you need to um take into consideration. We want low turbidity.
[1:14:27] When there's turbidity in the water column, the calculated depth is going to be more shallow than the actual value.
[1:14:34] So that's important to know. We also want little or no sunglant or the reflection of the sun off the
[1:14:40] water surface obscures the ability of the satellite sensor to properly capture reflectance. And then C little or no
[1:14:48] cloud uh little or no shadows due to clouds. clouds. Those are the dark areas here. Shadows cast by clouds obscure the final
[1:14:58] estimate product by overestimating depth values. values. And then D, little or no clouds in the AOI. We talked a little bit about that.
[1:15:07] The presence of clouds also affects the final STB results by underestimating depth values. Snow and ice is another
[1:15:15] one. Little or no snow and ice. Snow and ice on or near the shoreline affects the final STB results and also
[1:15:24] underestimates the depth results. So I'm going to see if it's ready and it is. Process is then complete. Take a
[1:15:36] look at our map results. As you can see there um is our items. Take off some of these
[1:15:50] a little easier to see. So this is the S the PSP red and the PSTB green. We're going to focus on the
[1:15:58] PSTB red first. So now I'm going to walk into the walk you through the simplify calibration procedure.
[1:16:13] make that. There we go. So, SAP's uh simplified calibration procedure, as you recall, I said you normally need the um charted soundings
[1:16:23] or reference uh survey to help um tie the um the PSDB down to um to have actual uh true drops and meters. So um
[1:16:36] we're going to convert the pseudo SDB drive from spectral ratios into true drip centimeters. This option is
[1:16:42] beneficial for areas um where we can we don't have um reconnaissance or we lack recent highquality reference data and
[1:16:51] the relationship is defined by PSDB red I'm sorry SDB equals M1 which is this slope time PSDB
[1:17:00] minus M which is the offset here where M1 represents the slope and M represents the offset. Okay.
[1:17:12] All right. So the next thing I'm going to talk about are is the uh offset parameter or m
[1:17:19] which is this item here. The offset parameter is selected by sampling a nearshore pixel at the land water
[1:17:25] interface which serves as an approximate local datam. It represents the PSD value at depth of zero and serves as initial
[1:17:32] reference point for the relationship between PSD and water depth. When title information is available, the offset parameter can be further refined with a
[1:17:42] well with a known vertical reference such as local mean sea level. Okay, so we're going to take the
[1:17:49] magnifying glass to hover over these area along the shoreline. You'll see these values here will change. Through our research, we know that the
[1:18:02] PSDB offset range is between 93 and 1.03. We'll head towards the interior, not the channel. channel. See if we can find something.
[1:18:33] Looks pretty good. Okay, so they now that I've clicked the offset, it fills in automatically. We're going to do the
[1:18:39] same thing for the PSTV green. Flip this down to PSTV green. You can usually pick the same from the same
[1:18:48] areas. The range through research the for the PSV green offset is between 085 and 0.95. See See that looks pretty good.
[1:19:07] Okay. So now that's filled in to the offset. So 0.928. We're going to go ahead and submit the
[1:19:14] parameters. Zoom out a little bit. Okay. So, a little bit more uh slope parameters um M1. M1. The slope M1 value is roughly indicative
[1:19:30] of how strongly light attenuates with depth in the water column. Higher attenuation, for example, more turbid or
[1:19:36] scattering waters requires a steeper slope while lower attenuation in clear water corresponds to a sharp uh shallower slope.
[1:19:45] An initial value is provided based on the mean of slope estimates reported by publications from Rick's Dr. Rick Stump
[1:19:51] and Dr. Isabelle Cabell which derive the calibration parameters to the regression with reference light data sets and or
[1:19:58] charted sonics. Go ahead and stop because the optical properties and water clarity can re vary regionally. Users
[1:20:09] can fine-tune the slope in plus or plus or minus 5% increments to better match local water conditions. The adjustment
[1:20:16] is constrained within specific ranges where the PSDB red is between 4.88 and 16.5 16.5 and SDB green is between 42.7 and 88.45.
[1:20:28] supporting tubidity indicators such as the 704 red band which is here in our litterary products. Here we go.
[1:20:42] So that's the red edge. This is our chlorophyll. Oops. Here we go. Red edge and chlorophyll. [snorts]
[1:20:54] [snorts] um can guide this adjustment by providing context on prevailing water quality. For example, clear, moderately turbid, or extremely turbid.
[1:21:03] [clears throat] Okay. So, now that we have that, we're going to we'll now have the we should now have the the STV red and
[1:21:19] the STV green layers now available. Okay, so now you'd want to do a quick check of the SDB red. Make sure there's
[1:21:27] no negative values. Looks pretty good. We're going to just stick to the shore between zero and five cuz that's where
[1:21:34] the um SDB red generally um where the limits are. It works the best. best. And then the green, we're going to do
[1:21:43] the same thing. Everything from probably about 5 mters to on should be in the positive range. You
[1:21:54] just want to do a double check. That looks pretty good. Okay, so that's the first initial check on that.
[1:22:05] So the area in Miami has um uh basically a low tide. This is optimal for a sapathy. So in this slide um I'm going
[1:22:15] to talk about the importance of tides in mic micro and macrotidal areas. These red points that we created um represent
[1:22:23] the tiegate stations and their values are calculated through Noah's v datam tool by subtracting the mean low water
[1:22:29] value from the mean high water value for that station. The difference between the two valued represents the tide range of
[1:22:35] that location. If the tide range is a meter or less, it simplifies things for S Valley. This means and though it is
[1:22:43] case dependent in general tide adjustment is not necessary because it falls within the vertical uncertainty of STB generated through Zapi when the
[1:22:53] tide range is larger than 1 meter locations require a tide adjusted because the potential vertical difference between the tidal stages
[1:23:01] exceeds the inherent uncertainty of sap valley. We'll talk more about this when we discuss the time model.
[1:23:09] I'm going to [clears throat] go back to Pro tool and select the different options. I'm going to add the
[1:23:25] reference data. That's another way to kind of see if we're in the ballpark. So this is um remote sensing um our
[1:23:35] remote sensing division um topobatti data under the national genetic survey and that will show up when I select
[1:23:47] there we go. So let me take off our term product so you can see this. So this is
[1:23:52] a little snippet of our data or reference data and then I'm going to expand this cuz okay so the STB red so the auxiliary um
[1:24:07] grid the values are shown here that's for the reference data and I'm going to flip this to STB red and as I move
[1:24:14] across you'll see that the the numbers change so I'm going to stick probably close to the shore
[1:24:22] I'm just going to run around and see how close we are. So, we don't anything like a half a
[1:24:29] meter is between is okay. That's roughly okay. Okay. We'll do the same thing for the SDV green.
[1:24:39] Oops. Again, um we're going to go a little farther out for the green. need sometime after five meters.
[1:24:52] We're just doing a cursory glance here. All right. So, those values look um generally okay. We're going to go ahead
[1:25:00] and you can always come back and adjust it again. Um but we're going to go ahead and submit those parameters. So before I
[1:25:09] um hand this over to uh Kiana, I'm going to um talk about our motivation at Noah for integrating the ATL 24 into SAP.
[1:25:19] First off, it's an entirely uh independent reference data source. Um it's near global coastal coverage is ideal for us. Um well, it has maximum um
[1:25:31] depth ranges which are generally quite comparable to a one depth. um and occasionally slightly diaper and our the
[1:25:38] ATL 24 actually tests confirm its suitability for STB calibration and validation. So, like I was talking about
[1:25:45] with the um the future of Sapy um the reason why we're interested in things like near global coastal coverage
[1:25:54] is because um we were asked to expand the the SAM valley to not just um create just for United States but to go
[1:26:04] globally to work with our federal partners and um with coast survey. So um the global coverage is is very
[1:26:14] advantageous as well as the accuracy tests um to make us um assured that like that we're using reference data that's
[1:26:22] suitable. So that's uh um a really incredible option and we are working on um although the desktop tool is just
[1:26:32] available for Noah at this point there is a a public um site that's going to be that's in work now um that's going to
[1:26:40] take advantage of the ATL 24. So we'll talk about that hopefully in in another presentation. Now I'd like to pass this
[1:26:48] off to Cana to talk about her uh ATL 24 demo and um yeah thank you Cana. >> Thank you Gretchen.
[1:27:03] So we get ATL24 data in SideRule using Slide Rules Python API which allows us to request granular data from October
[1:27:12] 2018 to November 2024 when release 1 of ATL24 was published in Satbathy. We use a greater confidence threshold than the
[1:27:23] default value of 0.6 six and this is to prevent some false bethimemetry that occurs especially around the sea surface
[1:27:31] where the bottom of the sea surface can get falsely identified as bethimemetry. The ATL24 implementation implementation uh takes the satellite derived
[1:27:46] bethimemetry photon data and then it regrids that photon data into a 10-meter resolution raster to match the
[1:27:54] resolution of SAP bathy. This is to make it easy for use with Brian Eers's validation code which produces error
[1:28:02] analysis analysis heat scatters and histogram plots for SDB red SDB green and SDB merged. These values can be used to validate results
[1:28:13] or can be used to recalibrate the shoreline. shoreline. If we go to an example here, I have set
[1:28:23] up a sapathy run that is very similar to what Gretchen showed us just a moment ago. I've got a similar area of interest
[1:28:30] selected. I've gone through the tile selection and calibration steps. And so now all you need to do to get ATL24
[1:28:38] products is check this ATL24 comparison check box before you click create final products. products. If you look at the terminal while this
[1:28:47] is happening, you'll see the request to sat bathy start to generate, it's going to return photons in a random temporal
[1:28:55] order just due to the nature of how side rule gathers the data. And so we do a
[1:29:00] sort on that data from oldest to newest. That way if a photon shares a pixel in the final raster, it'll use the newest
[1:29:09] photon to generate that pixel's value. This can take a moment to process. So I will just go and take us to an already
[1:29:19] completed folder. So to get to your data, you're going to go into your output folder. You're going
[1:29:26] to go into the prod folder and into the ATL24 subfolder. In here, you're going to see the error
[1:29:34] statistics, heat scatter, and histogram results for your SDB green, SDB merged, and SDB red. You're also going to have a
[1:29:42] data subfolder and in here will both be the atl24.tiff raster that we use in SATBY, but also a
[1:29:50] CSV file that contains all the photon data retrieved for this request. That way, because it is slightly lossy to
[1:29:57] generate the raster, you can access all of the ATL24 data, including any of those photons that didn't make it into
[1:30:04] the final raster. This ATL24 TIFF, for example, can be used to pull it into QGIS. Um, I've
[1:30:16] already loaded the data just by taking the file and dragging and dropping it onto QGIS with a base map already loaded
[1:30:23] in. And then I've set the colors to go from shallow, which is a yellow color, to a darker color in purple. And we can
[1:30:31] zoom in and see these lines here are our granle tracks that relate to the photon data that we've returned.
[1:30:40] Just an example of what this output file looks like. We'll go ahead and look at the merged values. So in merged we have
[1:30:49] error statistics. And so this will give you the median absolute error, the mean absolute error, the bias, and then the
[1:30:56] number of photons relating to that bin that we've done for the statistics. So from 0 to 10 m, the bins are in 2 m
[1:31:06] increments and then from 10 m onward the bins are in 5 m increments. um just because in your those deeper values you
[1:31:15] can see like 10 six and one photon returns the the returns just get smaller. This is an example of what the heat
[1:31:25] scattering looks like. On the yaxis we have the reference data set which in this case is ATL24 and on the x-axis we
[1:31:33] have SDB merged which is the SDB merged results from our satbathy run. As we can see there is fairly good correlation on
[1:31:41] this one one axis which generally means that the ATL24 data is validating the results from SAPY. And then we can look into these
[1:31:54] histograms that give us an idea of how the photon spread is within those bins. All righty. And then that's my portion
[1:32:12] and I'll pass it back to Gretchen. >> All right. So, thank you Ka. Um, now I'm going to give um uh some major updates
[1:32:19] for uh talk a little bit about major updates for the Sap Valley desktop version 3.1. So, as uh Kana mentioned, we have um the
[1:32:29] validation code um that should be ready to show you in our actual data. So, I'm going to
[1:32:38] that's in our validation folder. folder. We can see how we did. So, let's take a look at the SB merged heat scatter plot.
[1:32:54] Let's get this one. Okay. So, um this looks pretty good. This is the generally from like I said the zero to
[1:33:02] four is uh the STB red. So, they get merged. It um the green STB which is from about 5 mters to looks like it's
[1:33:13] about a little over eight. So, this aligns pretty well. The reference data set we used was again our um remote
[1:33:21] sensing division to batty lighter under the NAS geodetic survey in Noah. Um we have a lot more data compared to the
[1:33:31] ATL 24s. So you can see a lot of more data points which is nice. So it looks
[1:33:37] like it lined up pretty well. the items the [clears throat] the uh values we picked look like it was
[1:33:43] on. But if it is a little off, you would do adjustment in the um in the tool, you could use the
[1:33:52] multiplier. Let's say the green was a little um the dark spot was a little below that line, you would do the
[1:34:00] adjustment um for the green here down here and we probably do the minus. And um um and you can always go back. That's the
[1:34:10] nice um ability of the tools to be able to like adjust and recreate the products. It's a nice benefit.
[1:34:21] Okay. Go back to So that's um and then H can already talked about the histogram and the error statistics. I won't go
[1:34:31] over that, but um it's it's very similar. similar. And then um I'll talk a little bit about the tide
[1:34:41] module as um I spoke about earlier for areas like Miami and Hatteris those are below 1 meter um tide uh or water level
[1:34:52] but for areas in Alaska that we've been working quite a bit sometimes it can be 5 mters. So in these cases in other
[1:34:59] areas where we don't have um information on tide um we can use the um on datam uh
[1:35:06] SDV composite product um using the vizio tide model. So the workflow is as follows. Um we extract a sentinel 2C
[1:35:14] scene gradual um sensing time, query the tide model at each XYT point, create a grided water level raers um at local
[1:35:23] meano and um composite the water level raers according to maximum PSC router green and then finally we adjust the
[1:35:31] calibrated STB red or STB green products using the water level grid composite. The examples that we have to the right
[1:35:38] are for Hatteris. That's one of our test uh regular test locations to make sure everything was working correctly. Um
[1:35:44] normally we already know what the tides are for Hatteris. But um for places uh outside that don't or um uh maybe
[1:35:53] globally that we may not know is will be very helpful and there is uh um uh plans
[1:35:59] to update to the most recent Vizio. So, going back to where everything is. Um, if you want to access that um that's
[1:36:12] in the SDB uh uh composits folder. So, if you see the local mean sea level and the the
[1:36:21] beginning of the tiff and the water level, I have that already up along with the um the final project uh STB merged.
[1:36:30] So, this is the STB merged. This is indicates deeper water here. And then um the tide module
[1:36:40] local mean sea level adjusted. Um that is the um product for my Miami. So resources going forward for folks
[1:36:51] that are looking for more information on um sat bathy and um actually the research that all went into it. These
[1:36:59] are papers with um from Dr. Cabelo and Dr. Rick Stump. And I really like to uh do a special
[1:37:08] thanks to the Sap Valley team, especially Brian who's been a huge help um for all their continued support.
[1:37:20] And thanks to um NASA for allowing us to do this presentation and training. Thank you Gretchen and Kiana for the
[1:37:32] terrific presentation and demonstration on SAT pathy. The following slides provide a summary of the concepts covered in part two of
[1:37:41] the webinar series. ATL24 can be integrated with optical bands blue and green green wavelengths for deriving satellite drive pathimemetry. Slide roll
[1:37:51] is a public web service with low latency access to ondemand data products stored in S3. [clears throat]
[1:37:59] Slide provides an ondemand processing next to the data for generating customized data products using parameters supplied in the user's
[1:38:06] request. request. Slide Python client can be used to access ATL24. Slide roll provides documentation for the Python client including example
[1:38:16] scripts, user guide and developers guide. Satpathy is a hybrid web desktop tool created by Noah for automating
[1:38:25] automating satellite derived pathimemetry. pathimemetry. Satbathy utilizes 10 meter resolution satellite imagery from the Capernacus Sentinel 2 mission, Amazon Web Service
[1:38:36] and Acolyte atmospheric Correction Processor. Processor. Sat Bathy integrated the ATL 24 product as an independent reference data source.
[1:38:47] The following is a summary of topics covered over both days of the training. NASA's ISAT 2 carries a photon counting
[1:38:54] laser altimeter named Atlas. Atlas provides nearontiguous along track sampling using six individual beams of green light at 532 nmter wavelength
[1:39:05] providing high vertical resolution. Every photon detected by Atlas has a latitude, longitude, and elevation associated with it. National snow and
[1:39:15] ice data center provides access to ATL24 data, metadata, and tools. Slide is a public web service with low
[1:39:24] latency access to ondemand data products stored in S3. Slide Python API can be used to access ATL24.
[1:39:34] ATL24. [clears throat] Satbathy is a hybrid web desktop tool created by Noah for automating satellite derived bimetry.
[1:39:41] Satbathy utilizes 10-meter resolution satellite imagery from the Capernicus Sentinel 2 mission, Amazon Web Service and Acolyte. Sat Bathy uh integrates the
[1:39:52] ATL24 product as an independent reference data source. Before we transition to the Q&A session, I want to remind you there will be one
[1:40:02] homework assignment accessible from the training page starting today. Answers must be submitted by Google form with a
[1:40:09] due date of December 31st. To receive a certificate of completion, you must attend all uh live webinars and complete
[1:40:18] the homework assignment by the deadline. You will receive a certificate via email approximately two months after the
[1:40:25] completion of the course. We want to thank once more Dr. Christopher Parish from Oregon State University, JP Swinsky from NASA's
[1:40:34] Goddard Space Flight Center, Gretchen Imohori from Noah, and Kiana Kee from Oregon State University for their presentations and instructive demos.
[1:40:44] Below is the contact information for Chris, JP, Gretchen, and Kiana along with links to the RSET website and
[1:40:51] social media. If you enjoyed today's webinar, you will hope you we hope you will sign up on the rset listerve to
[1:40:56] receive notifications of future trainings and please follow us on social media for other relevant announcements pertaining to NASA's earth sciences.
[1:41:05] We will now transition to the question and answer portion of today's training. >> Okay. Um, can you guys hear me? Okay.
[1:41:20] [snorts] [snorts] Uh yes, Gretchen. Yes, we can hear you. Yes. Yes. >> Thank you. Um I can start on the
[1:41:27] questions. Um starting with the question 19. Does that sound okay? >> Um actually we we start from the the
[1:41:34] first. So we're going to jump into question. question. >> So yeah. So question one, uh when integrating ATL 24 data sets from ISAT 2
[1:41:42] for shallow water beimemetry, do you typically use machine learning approaches? If yes, which techniques are most frequently applied? uh example
[1:41:49] given random forest convolutional uh neural network XG boost etc. and why are they preferred over traditional methods?
[1:42:03] >> I think that was my answer um to that question and sorry my answer ended up in
[1:42:07] a couple different flexes on the on the screen there. Um that's a really active research topic. Uh it seems like there are papers being
[1:42:15] published every month on looking at different uh machine learning um methods for for STB. Uh so um I would just point to a couple
[1:42:25] recent review papers that were published on um on STB and also uh we did a recent asset to imagery review paper that was
[1:42:32] by Jung at all just published this year that contain contains a lot of references. >> Hey Chris, thank you so much. Question
[1:42:41] number two. Could you suggest some case studies where ISAT2 ATL24 imagery has been applied for ecosystem monitoring or
[1:42:48] restoration projects? For example, [snorts] coral reef mapping, seaggrass monitoring or coastal habitat restoration. >> Yeah, I can take that one too. Um, there
[1:43:01] was a a paper by Lqualik at all. Um, Mike Mike Jazinski of NASA was also a co-author on that. Sorry, I was trying
[1:43:08] to pull up the exact reference for it. Um but that was a paper uh specifically looking at um uh isotubemmetry for
[1:43:17] bentic habitat mapping and then our research group is actually currently looking at um use of ATL24 for uh coral
[1:43:25] reef restoration site monitoring in the Florida Keys that's in collaboration with Gendextra at the University of New
[1:43:32] Hampshire Center for Coastal and Ocean Mapping. >> Okay, Chris, thank you so much. Uh question number three, if we are
[1:43:42] integrating ISAT 2 ATL 24 data sets with multisspectral remote sensing data such as sentinel imagery, what are the best
[1:43:48] practices to improve accuracy? Which remote sensing data sets are most frequently used for this purpose and why? Are there any tips for
[1:43:57] pre-processing, filtering or modeling that can enhance bethimemetry estimates? I can keep going because I put the first
[1:44:07] part of the answer in the chat, but maybe Gretchen or others will want to uh chime in here as well. So, um and I
[1:44:12] think this was covered in in part in Gretchian's presentation, but careful selection of the input scenes, trying to
[1:44:17] find scenes that uh avoid clouds, turbidity, artifacts, um compositing of several scenes uh can improve the accuracy, robust atmospheric correction,
[1:44:27] which was a step that that uh that Gretchen mentioned. Um and then uh another thing that we recommend is
[1:44:35] performing accuracy testing using independent reference data where available as uh as shown in in um Gretchen's and and Kiana's uh demos.
[1:44:47] Uh Chris, thank you again. Uh question number four, will this work for the purpose of archaeological diving?
[1:44:59] I can keep going but obviously anybody else jump in at any time. Uh archaeological uh marine archaeology is
[1:45:06] a is a potentially a really interesting application of eyesight tubithmmetry and and ATL24 and it's one that I've heard
[1:45:14] mentioned in the the peer-reviewed literature. To date, I haven't seen a um a published study dedicated to marine
[1:45:22] archaeology, but I I know that again, it's an area that people are interested in and and uh I think are are maybe um
[1:45:29] currently actively working on. >> Very cool. I look forward to reading some of those papers when they're
[1:45:36] published. Question number five, are ISAT 2 ATL24 data sets used for applications like natural resource exploration or disaster monitoring such
[1:45:45] as tracking sediment deposition and can they be applied in hydrocarbon exploration as well? >> I can take just the the first part of
[1:45:58] that or the second part I guess on um disaster monitoring. So uh a former student Joan Herman did a an excellent
[1:46:06] um study on uh use of uh solely satellite based methods. So is tube bimemetry and and spectral drive bimetry
[1:46:15] or looking at uh hurricane change analysis and um in Joan's study uh it was shown that um we could actually see
[1:46:23] sort of at least broad patterns of uh spatial change for example moving sand um sand bars that occurred uh due to the
[1:46:32] hurricane. I think the the resource exploration again that's another kind of topic that I I think people are are
[1:46:40] interested in right now. It's it's one that I've certainly heard people mention. Um I don't have any uh studies
[1:46:46] to point to off the top of my head. >> Well, Chris, thank you so much again. Question number six. How does the
[1:46:56] vertical accuracy of ATL 24 compare to standard single beam hydrographic surveys in clear water? Can I use ATL24
[1:47:04] to validate or even correct my existing field data? >> This one was also my response. I and
[1:47:13] again anybody else any of the other panelists please chime in. I I was trying to answer some of the questions
[1:47:18] in the in the chat as um as others were presenting. Uh my answer to this one um
[1:47:24] I set 2 is generally not as accurate as a single beam or or multi-beam echo sounding. Um we did a study of ATL24 uh
[1:47:32] accuracy and that was uh just published in a a paper in earth and space science earlier this year. What we found from
[1:47:39] the ATL24 beimemetry we we had eight different test sites. Um the RMSSE of the ATL24 beimemetry was uh 0.68 or 68
[1:47:49] cmters using all points. And if we filtered by just high confidence points, it was 43 mters or 43 cmters. So I think
[1:47:57] you know halfmeter or or better than halfmeter is is really quite good for a lot of applications but still not
[1:48:04] approaching what you can get from uh sonar. >> Great Chris thank you again. Question number seven. Did you use Sentinel 2
[1:48:14] data instead of Lancet for the for the spatial resolution for the model? Does this improve the model?
[1:48:24] >> Uh we've used both. We've used both LAN uh 89 and Sentinel 2. Um uh both can
[1:48:32] both can be uh great sources of of input data for for SDB. >> Um the Sentinel 2 spatial resolution is
[1:48:39] a little bit better in the in the um red, green, and and blue uh spectral bands which can be helpful.
[1:48:47] >> Okay, great. Chris, thank you. Uh question number eight. My area of interest is a coral reef with high
[1:48:53] morphological complexity uh such as rough slopes, sudden drop offs and narrow valleys. Since the iceatu laser footprint is roughly 11 to 17 m, does it
[1:49:03] effectively capture these sharp changes or does it smooth out the bethimemetry too much for precise coastal mapping?
[1:49:12] >> Yeah, that one again was a great question. Um and that's correct. the the ISAT 2 uh footprint is around 11 uh
[1:49:19] meters and that can be a limiting factor in extracting really high frequency spatial detail. Um something that's
[1:49:26] important is that uh the along track spatial resolution of ISAT 2 is is is quite good. Um points in the along track
[1:49:33] direction and nominal point spacing is about 70 centimeters. So that can help in resolving features. But really my
[1:49:40] main suggestion here is is just investigate it. Um, in several of these, uh, talks by, uh, you know, JP and and
[1:49:46] others, you saw examples of using that slide rule web client. That's a really fast and easy way to go in and and
[1:49:52] visually grab some, uh, ATL24 data for for your site. And I would just start there in terms of looking at um, how
[1:49:59] good the resolution is and and if it's going to support your needs. >> Awesome, Chris. Thank you so much.
[1:50:06] Question number nine. When do you change when you do the change analysis with Sentinel 2? Do you calibrate the
[1:50:12] reflectance with ATL again or use the regression coefficient from the original calculation and apply it to all the
[1:50:19] Sentinel imagery? My recommendation is if you're doing multi-temporal analysis, so change detection or something like that where
[1:50:28] you've got input scenes from different times, I would um if at all possible, I would do the calibration separately for
[1:50:35] for each epic. Um but if you wanted to, you could start with the calibration parameters for the first from the first
[1:50:40] epic and uh and just refine them as needed. >> Awesome. Thanks, Chris. Question number 10. Data collection model for water
[1:50:51] turbidity based on size, weight, composition, settling rate overlay with world currents and closest coastal impacts. impacts. Question mark. Does it need to include
[1:51:02] baseline turbidity levels? Possible to make moving animated data overlay over seasonal title and trade wind change prediction models for cumulative
[1:51:12] impacts. impacts. >> My my answer here was this sounds like an amazing tool. To the best of my
[1:51:18] knowledge, that's not something that currently exists. But if there are people who want to um take the lead on
[1:51:24] developing something like that, I can see it being beneficial to a lot of different people. >> Great. Thank you again, Chris. Question
[1:51:32] number 11. How can tide be applied or removed from pseudo satelliterivedimemetry? >> I'll give my answer here and and
[1:51:44] Gretchen or others may want to um jump in. Uh so regarding tide correction if you're doing single scene STB so you're
[1:51:51] not compositing multiple scenes and if your calibration data are uh already referenced to a vertical datim then your
[1:51:58] output STB are going to be inherently referenced to that same vertical datim as the as the the reference data that
[1:52:05] you're using for calibration. Um, and so for that reason, in that specific case, you don't need a a tide a dedicated tide
[1:52:13] correction step. And to kind of explain that, if you're doing a if you're doing a linear transformation from your pseudo
[1:52:19] SDB to SDB and and the transformation parameters come from something that's already referenced to a vertical datam,
[1:52:26] any kind of vertical shift, for example, due to tides is just going to be inherently accounted for. The time that
[1:52:32] you do need a tide correction is if you're using if you're sort of compositing or pulling together multiple
[1:52:38] sands collected at um at multiple different stages of tide. >> Okay, Chris, thank you. Question 12. Since the interest is in bethimemetry,
[1:52:49] would we want to sample satellite data just after ice to avoid phytolankton that might be growing in the water
[1:52:55] column in the later spring and summer which could mask that bethimemetry? quite possibly yes. I I would monitor um
[1:53:05] global uh turbidity or you know KD490 data sets to to try to find optimal times for um optimal water clarity that
[1:53:14] that is uh generally going to be the driving factor and whether you get good bitmetry or not.
[1:53:22] >> Okay. Question number 13. Does the stump approach only work with the ratio of uh of the log of of blue and green or could
[1:53:32] other band ratios be applied? >> Absolutely you can do other band ratios and I think this was shown in in
[1:53:39] Gretchen and Kiana's talks for example there uh STB green and STB red um those refer to uh respectively ratios of log
[1:53:49] blue to log green and then log blue to to log red. So those are those are both
[1:53:54] uh combinations that can be used and uh and really any any other combination potentially as well if you're working
[1:54:01] with hyperspectral imagery for example. Right Chris thank you again. Question 14. Have you tried to compare your depth
[1:54:10] data or the data source being discussed against real world bethimemetry data products such as the Noah blue topo to
[1:54:16] assess its accuracy? We have um in that uh accuracy test that I I think I put in the in the chat. Um
[1:54:26] that was a comparison against uh Noah data um a lot of it was a lot of it was
[1:54:32] airborne um topography ladder data available on Noah digital coast and a lot of that same data is available in in
[1:54:40] blue topo. Um for the next release we're going to try to do an automated uh accuracy test using all of the blue topo
[1:54:50] um all of blue all the Noah blue topo data uh but the development of that is something that's still in the works.
[1:54:59] Okay, thank you Chris. Question 15. What quality criteria in ATL 24 would you specify to filter out noisy data? Since
[1:55:07] I will be working with an inland water body, can you specify comparable quality criteria for ATL13 data?
[1:55:15] >> For ATL24, we we've um typically recommended a a confidence threshold. So, one of the parameters is that
[1:55:23] confidence parameter. It was discussed in in Lori Mcrder's presentation that provides a confidence of the the um
[1:55:30] classification. We've used a threshold of 6 as a a good starting point for filtering out some of the lower
[1:55:36] confidence data, but that's kind of sight specific. So, you might want to um sort of play around with that and and
[1:55:42] fine-tune it. Um the second part of the question is correct. ATL13 is the is the um corresponding product for inland
[1:55:50] waters. Um ATL 13 provides a lot of other parameters. Uh but there is a there is a bidimemetry parameter to the
[1:56:00] best of my knowledge. There is not a similar um confidence parameter. Um but I would definitely encourage reading the
[1:56:08] algorithm theoretical basis document which provides all the technical specifications for uh the ATL13 data product. product. Uh
[1:56:18] Uh >> terrific question number 16. How would you integrate the STB layer with the pointimemetry data? This may have been where um Gretchen was
[1:56:30] gonna step step in. Does Gretchen or somebody else want to want to pick up the the questions from this point or um
[1:56:37] would you all like me to keep going? All right. Not not hearing anyone else. >> I'm sorry because I was muted. Go ahead.
[1:56:52] I was going to pick up at 19. >> Okay. All right, I'll turn it I'll turn it over to you at um integrate the STV
[1:56:58] layer with the with the point bethimemetry. Um I'm not uh I'm not totally sure I understand the question, but if if it's
[1:57:06] referring to how do you actually um how do you take your pseudobithimemetry and then integrate that with the individual
[1:57:12] points from ATL24? Um that was one of the steps that I showed how to do that in my demo just
[1:57:19] using uh QGIS and and basically it was using that um uh sample raster values tool to to have the pseudo SDB and then
[1:57:28] just at each um at each raster uh or each location of a ATL 24 point to sample the corresponding pseudo STB
[1:57:36] value. >> Okay, question 17. What about the difference in pseudo STB per S2 detector? >> Yeah, I think that's I think that's
[1:57:50] interesting. Um, one of my recent uh students, Ruth McCulla, uh, looked at actually using small sets where you've
[1:57:58] got, you know, each each individual um, satellite has has its own imaging sensor on it. So, you've got just
[1:58:05] differences between the the different sensors. Um, I think that's just a I don't have detailed information other
[1:58:12] than I think that's a great question and and most definitely an area for ongoing research. Great. Question number 18. I've
[1:58:23] collected hydrographic survey data across my study area. How should I combine field-based hydrographic data with ISAT 2 along track measurements to
[1:58:31] create a more robust validation data set? What are the trade-offs between them? them? Um my answer to this one just in terms
[1:58:38] of things to consider um you know need to pay attention to differing spatial resolutions and accuracies. Um differing
[1:58:45] datoms uh can definitely be a factor when you're trying to um uh combine data. Uh so for data collected in the in
[1:58:53] the US Noah's vertical datam transformation utility batim um can be a a uh really useful utility for that.
[1:59:03] >> Great. Question number 19. Where can I access the SAT bathy tool? >> Okay. Um yeah, right now uh the SAT
[1:59:13] valley tool is for Noah internal use as a desktop tool, but we are working on a larger cloud effort um public cloud
[1:59:20] effort. This will incorporate lessons we have learned over the years as we've worked with um Noah's Office of Coast
[1:59:27] Survey u for our re reconnaissance projects with them and our other federal mapping partners. Um, but I I think you
[1:59:35] gave my Sean has my information on the slide. Um, so folks that are interested, you can feel free to contact me for um,
[1:59:44] updates on our status. >> Great, Gretchen. Thank you so much. Question 20. The example in Alaska was
[1:59:50] fascinating. Have there been any studies looking at the efficacy of these approaches in polar regions in particular given the challenges
[1:59:57] presented by snow and ice? >> Yeah, that's a really good question. Um we have found that working in Alaska has
[2:00:04] been very challenging. Um and uh we have been trying to do um where possible some parallel research
[2:00:12] along with the uh SDV uh reconnaissance operational work for uh nose office of coast survey. Um Alaska alone is
[2:00:22] challenging area. So there's more work needed um there as well as the other northern areas and polar regions.
[2:00:32] Okay, Gretchian, thank you. Last question. Uh, 21. I missed the definition of SDB_merged and SDB red. Could you explain?
[2:00:45] >> Hi, Christian. Uh, should I answer this? >> Yeah, Brian, thanks. That'd be great. >> Great. Um
[2:00:52] so SB red and SB green are the two products that are created from the um from our STB algorithm or SB approach.
[2:01:01] Uh we found that SB red typically works uh better in shallow regions while SB green uh is more suited for deeper um
[2:01:10] water. So STB merged um uses a combination of those two algorithms um relying on SB red um for the shallow
[2:01:20] water and then transitions to SB green uh for the deeper areas. More information about how that works can be
[2:01:28] found in some of the publications that were were listed. Hey, Brian. Thank you. And thank you to
[2:01:36] everybody that asked uh questions and want to thank everybody that attended today's training. Actually, both parts of the training. Uh today was the the
[2:01:43] last day of this two-part webinar series. So, for wherever you were joining from, uh thank you so much. Uh
[2:01:48] we also want to thank once again our amazing presenters, uh Dr. Christopher Parish from Oregon State University, uh
[2:01:54] JP Swinsky from NASA's Goddard Space Flight Center, Gretchen Imori from Noah, and also Keani from Oregon State
[2:02:00] University. We also want to thank uh subject matter expert Brian Eder uh from Noah from joining today to help as a
[2:02:07] subject subject matter expert answering some of the questions and also want to thank uh Amy Neely uh from uh from NASA
[2:02:14] Gddard Space Flight Center as well for her vision in having this training take place. So thank you to all the wonderful
[2:02:19] presenters and we look forward to seeing you in the future at an upcoming RSET training. Thank you.
