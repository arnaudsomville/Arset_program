# Data Access and Visualization, Part 3/3

`https://www.youtube.com/watch?v=S_A4switNdU` · id 325 · 1:21:15 · module 309 — Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management

[00:01] Welcome back everyone to our ARSET training series, Introduction to NASA Earth Observations and Tools for Wildfire Monitoring and Management.
[00:10] Today is the final part of our training series, data access and visualization. My name is Melanie Flick
[00:16] Cook. I am a researcher at NASA Gddard Space Flight Center right outside Washington DC and project scientist of
[00:22] the ARSA program. In parts one and two, we introduced the fire information for resource management system or firms application. Learned how
[00:33] fires are detected by satellite sensors, the strengths and limitations of different active fire detection products, and how firms can be used for
[00:41] wildfire monitoring and evaluation, as well as issues that can impact a satellite sensors ability to detect fire
[00:47] activity. activity. Today in part three, we'll focus on data access and vis visualization through firms. And a reminder that there will be
[00:55] one homework assignment after this training. It will be available today after part three is complete and due in
[01:01] 2 weeks on May 14th. A certificate of completion will be awarded to those who attend all live sessions and complete
[01:08] the homework assignment before the given due date. And now we'll begin part three of our training series, data access and
[01:19] visualization. And I'm very happy to introduce our guest instructors from the firm's team for part three. Utmar
[01:26] Olshina is a principal software engineer. Dylan Mendes is a senior applications developer and Asen Rodof is a software engineer.
[01:38] By the end of today in part three, we hope that you'll be able to access fire detection data through file download,
[01:45] web map feature, web map service, and application programming interface or API. Subscribe to receive automatic email alerts when active fire
[01:54] information is available for a region of your interest. download historical fire detection data and visualize fire detection data in Google Earth, ArcGIS,
[02:05] and and QGIS. And once again, if you have questions during today's training, please put them in the Q&A box within
[02:13] WebEx at any time. At the end of the training, we will try and address as many questions as we can and we'll post
[02:19] them and the written answers to the training page within about a week after the training. And now I am happy to hand it over to
[02:28] Omar. All right. Well, thank you Melanie. So now let's look at accessing active fire information on the firm site. So in this
[02:40] part we'll be looking about at uh how to download a simple say CSV file, KML or shape files which can be used in GIS
[02:50] applications or easy to integrate into uh Excel spreadsheets or uh download scripts. Uh then after me uh Dylan will
[03:00] go over web map feature and web map service and also demo how you can integrate mapping services into GIS
[03:08] applications such as RGS and QGIS. And at last asen will go over application programming interface which is very helpful for developers if they
[03:18] want to integrate their data into their incripts. Also in this part we'll look at downloading archive historical fire
[03:26] hotspot detections. So that's for those who are interested in looking at historical records of fire detections and do some of the additional research
[03:35] on that. We also look at notification through email alerts. So if you're interested in finding out fire
[03:42] detections in area of your interest, that's something that you might be interested in as well as getting a
[03:48] summary at the end of day or week how many alerts were generated in your area. And uh so this uh part three will
[03:57] be heavily dependent on demos. We'll show you Google Earth, RGis and QGIS and also point you to additional tutorials
[04:05] and resources that firm's website provides. So now let's go to browser. So you might have seen this
[04:17] front page already in previous uh parts, but I'll go over it again. So the most important links you can find on our
[04:24] front page. And uh we'll be looking today at the active fire data for global and US Canada. Here's a link to the fire
[04:33] alerts archive download and web services which is essentially summary to all of our services how you can access our
[04:41] data. So when you get to our web services page uh you'll be able to see all of the data access points that our
[04:48] site provides. So from the API to the active fire detections mapping services and tutorial and examples. I'm going to
[04:56] first mention these tutorials and examples at the bottom just so we don't forget about it where you can see all of
[05:03] the tutorials some of this uh that we provide and some of these material is covered in this uh uh uh lecture but
[05:11] there's also links to additional uh tutorials and examples that you might find helpful uh when you're doing your
[05:18] research or work. So it's worth to mention that so you remember we have that. So now we'll focus on looking at
[05:26] the CSV, KML and shape files. Uh this link link uh will provide you with uh hourly generated data files uh that provide the
[05:38] most the recent active fire detections. Uh now for those who are interested in uh real time and ultra realtime data,
[05:47] this is not the appropriate service because it's uh updated hourly. So for those we recommend that you use uh
[05:53] different services such as our API, KML fire footprint service or our mapping services. So the information is
[06:01] mentioned here for you and hopefully that will help you to uh get that data into your system if you need it. So
[06:07] these data sets which are generated hourly are good for those users who don't necessarily need up-to-ate information for fires. For added
[06:17] convenience, we have broken down um our data files into major geographic regions. And here's the map highlighting
[06:26] them. So this way you don't have to download the entire world to get the data. And as you can see, they're broken
[06:33] down here. And we provide them in three major formats. Shape files, which are used by the GIS applications such as
[06:40] RGis and QGIS. Then Google Earth keyhole markup language which is generally used by Google Earth. And then text file CSVs
[06:51] we're just uh comma separated files. For those who had never seen one, it looks something like this. Okay, I just do this. So it's a
[07:02] lot of uh data files with comma separating here. Uh additionally uh we have broken down uh our data files based
[07:13] on satellites except for modis where aqua and terra are included in the same file. Then we provide a temporal
[07:22] breakdown based on uh 24 hours, 48 hours and 7 days. Uh these uh except for Google Earth files where we only provide
[07:31] 48 hours. Now for Lancet we only provide Canada and US uh actually continental US files. Now uh for US Canada version of
[07:46] this map I mean of our site. We also provide additional data files for Google Earth KML which are active fire
[07:55] detection footprint and centroids KMLs KMZs and uh they are generated for US and Canadian provinces and they provide
[08:06] essentially the area of the detection instead of just point data and I will be showing you shortly how it looks in
[08:13] Google Google Earth and uh for Google Earth the KMZ bundles. We also have links that provide easy to ingest uh process into Google
[08:24] Earth. And uh if I want to do something like that, I can uh for example click on
[08:31] this Konos latest firms US Canada, download it and then use it uh in a Google Earth once I open it. Similarly,
[08:40] I'm going to download uh for example uh KML file for South America for modus and I'm going to use it right
[08:52] now in uh Google Earth. So I have already opened Google Earth. So if I want to inest data into Google Earth uh
[09:02] I click on new click on import KML file to map project and upload from device and then
[09:10] I use uh for example we downloaded the South American file. So I'll click on that and I click open.
[09:18] Now the Google Earth will load the data and we'll see list of uh fire detections over South America
[09:30] and I can zoom in and click on the individual fire detection and get the extra information that associated with
[09:39] it. it. Now similarly I can go and uh open the Google Earth uh KML file and for KML KMC files uh the
[09:53] bundles we can again click on new project import KML file to map project and upload from device and at this point
[10:01] I will check uh the firepoint area for continental US and Hawaii and once that loads Well, I received this type of uh
[10:13] information and once I start zooming in, you can start seeing that there are fire detections and their area shown on the
[10:21] map. So that does it for the Google error and now let's look at the archive download. So for downloading our archive
[10:29] data uh which you can again access from our front page um through archive download or our hamburger menu on the top left corner
[10:43] under download archive data which will bring you to our archive download application. Now for this we recommend
[10:52] that uh users generate earth data login. So this way they get access to other Earth data NASA resources. But uh for I
[11:01] guess legacy users, we also allow users just to use their email address and they will be emailed the six-digit co code
[11:08] they need to use for authentication. Now once you log in you'll get the application where you can
[11:15] create new request. So I click on that and in our download request I have the option to download the entire
[11:25] world. Select a country of my interest and for smaller and midsize countries we also allow buffer option.
[11:34] So you can set between 0 to 15 kilometers. But this so this is why you can find fires that are just outside of
[11:41] the b uh country's border if you're interested in that. Another option is to select custom region which will provide you with the
[11:51] option to use the map where I can either zoom in to the area I'm interested in or
[12:00] I can uh uh I can highlight the area or draw custom polygon if I'm for example just interested in much smaller section
[12:11] and if I save it it will generate this type of polygon string. So for some of the users that have more
[12:19] complex polygons and they don't want to manually draw them, they can paste and copy it here as long as it follows the
[12:26] same format that we are showing you here. And in addition, we also provide protected protected area and uh these protected areas are
[12:38] provided by the world database on protected areas. So in this case, I don't know, I can pick, for example,
[12:46] Brazil. And as you can see, there are over 2,000 uh protected areas in Brazil. So for added convenience, you can just
[12:55] uh type in the name of national park if you know it and you can select it. And
[13:01] optionally again, you can select buffer. So you can get uh information about fires outside of the protected area just
[13:09] within 15 kilometers. Uh so then next I'll select what fire source I want. So for example modis
[13:18] versus versus NPP and then uh date range. Now this is important to notice because uh uh the
[13:26] satellites uh older missions for example modus start from 2000 but some of the newer one like v noa 21 only from 2024.
[13:36] So it's important to notice that when you want to get information historical data so you are aware of uh how far back
[13:44] you can go to get the relevant information. So now I'll select date range and then I have the options to uh
[13:53] generate it as a shape file, comma separated text file or JSON file and I can get a email confirmation that I
[14:01] submitted this request. Once your download is processed, which may take anywhere between 5 minutes to several hours and sometimes even longer
[14:15] if we have a lot of users uh submitting download requests, you will get an email uh notification that your download has
[14:23] pro uh finished. So you get a little summaries that reminds you what exactly you were downloading with the link for
[14:31] your download. Now one thing I'd like to note about downloads is that uh we provide generally standard data if it's
[14:38] available but not for all of our satellites. So we sometimes have just near realtime data. But uh since
[14:45] standard data uh tends to be 3 months or more behind then uh if you request date range from I don't know 6 months back to
[14:54] present you might receive two files. So once you unzip it, you will be you might receive two
[15:05] files. So once you unzip it, you might receive two files that uh one covers the standard data and the other one uh
[15:13] covers near realtime data. So that's just something to notice so you're not confused why there are two files. But
[15:19] generally if the entire date range uh fits within either near real time or standard data you will just receive one
[15:27] data file. So now let's go and look uh back at the fire alerts and uh fire alerts again you can
[15:41] create uh similarly like the download request You have the option to put your alert name to remind you what type of alert it
[15:54] is. And just like we had in uh download request, you can do it by world, country, custom region or protected
[16:03] area. So in this case, let's just quickly pick one country. I don't know and Pandora even though it's very small
[16:11] country. And I can pick a fire source. So I can do all four of them if I'm
[16:17] interested or I can just do a specific satellite if uh I only need that one. The next important thing is the alert
[16:24] frequency. So we offer daily, weekly, rapid, near real time. So those who are interested in up-to-date information
[16:32] about uh fire detections in the area of interest, you want to select near real time. So generally you will be notified
[16:39] between 1 to 3 hours after fire detection in the area of your interest. It takes about hour hour to 3 hours to
[16:47] process the data and then then additional maybe 5 to 10 minutes before the email alert is sended out to you.
[16:54] Then we also have the daily and weekly which is beneficial for managers who want to keep track of how many fires
[17:01] occurred in their area of interest the previous day or previous week. So this is sort of like a little
[17:08] summary. You can select the email preference whether you want to receive text and map image or just text only. If
[17:15] you select the map image, you also have the option to select size how big the image should be. And then we offer
[17:24] uh English, Spanish, and French version of the email alerts. Optionally, you can also decide if you want the CSV file
[17:32] attachment which will send you the list of the fire detections. if you wish to uh receive that. And once everything is
[17:40] filled, then you click submit and you'll be able to receive the email alerts. And now these email
[17:49] alerts, this email alerts will look something like this. So you will get a notifications that there were 36 fire
[17:56] hotspot detections in your area of interest. And uh you can go click on the map image on the on server and uh access
[18:07] the website from here just so you can quickly get the information. Now with that uh I'm going
[18:15] to pass this to Dylan. We'll go over a map services and demo you how to use RGS
[18:20] and QGIS with firms data. Thanks Omar for the handoff. Now I'll be taking you all through firms in separate
[18:33] GIS applications starting with Q.JS on the right, the logo on the right, and then RJS with the logo on the
[18:42] left. I'm going to quickly go over where I'm going to take you all through. We're going to go through the definitions of
[18:48] web mapping service and web feature service, why you would pick a web service over downloaded data, which web
[18:55] service you might want to pick. Then I'll be demonstrating how to use Q.js and ARJS online to ingest downloaded
[19:02] data into the application. How you would generate a map key on firms for the web services. And then how you would use the
[19:10] web services in the GIS applications listed QGIS and RJS online which are both both free. Now I'll show you how to use
[19:20] downloaded shape file in the GS applications. We'll start with RJS online. Um, your RJS will look a little bit different.
[19:31] This is just NASA's uh enterprise version, but you'll have the same top bar at the top with all the gallery and
[19:37] the content and everything. Um, and you'll want to head over to the content section. In the content will load any
[19:44] content that you've already made. Um, so if you have a shape file here, mine is on my desktop up in the top right. And
[19:51] all I have to do for this is just drag and drop it onto here and it will u pop
[19:56] up this window. It can recognize that it's a shape file. Um and you'll want to create a hosted feature layer so that
[20:04] the layer can show up on the map. Click next. Just name it something different. Downloaded fire data and click save. and it will make
[20:18] the map and put it into your content. Now that you have your layer on the map, you can open this in the map
[20:29] viewer and then view your data in RJS online on the map. And can't really tell where this is at first, but we're
[20:38] looking at um somewhere in the rainforest of Brazil for this data. Now I will show you on QGIS how to add
[20:52] this data in. Also similarly, it's similarly easy to load this data into QGIS. All you do is drag the shape file
[21:00] that you want onto the layer panel over here. Um, and for a little bit of context, I just have a background layer
[21:06] because if that's not there, then you won't be able to see any of the geographic regions. You'll just see some
[21:13] dots on a on a white canvas. But I'll take the shape file. I'll just drag it over here into the into the layer list.
[21:20] And my data pops up. Now I can zoom into Brazil over here. It's in the same region. Take a second to load. You can
[21:29] see uh the shape file data populate into the the here. And that's it for QGIS and RGis
[21:40] for downloaded data. Now, um you can use this uh QR code to take you directly to the firm's map key
[21:51] site. Um but I'll show you um a bit of the snippets and how to generate a map
[21:56] key for using our API services and our web services um for creating a map key. This is what the
[22:05] map key creation website will look like. and you'll want to click get a map key right here, which will help you generate
[22:15] your map key. It will pop up a window just like this in the middle of the screen. Uh behind the box will be shaded
[22:21] out to the rest of the firm's website. Um just enter email in the box and it will send you an email with your
[22:28] generated map key and there's information about the limits there that you can find on our website. on this
[22:36] email email um from no reprely at nasa.gov which will look exactly like this. The map key is at the top of the email in big bold
[22:44] black font. Uh this is the text you need for web mapping and future services as well as the API. Note the notices right
[22:52] under the map key with the limits on its usage as well. Below that are links to the tutorials and other similar ones um
[23:00] I'm about to give on web match web mapping and web feature services. Now for the web mapping and web feature
[23:10] services WMS and WFS respectively. A bit of information first. Since we already looked at downloaded data in shape file format. Um
[23:23] if you have an isolated event in time downloading the the data will preserve the timeline of its occurrence. You do
[23:30] not have access to the internet. This would be a good option to download your data. Say you're working out in the
[23:35] field um or something where you where you don't have access to the internet. An example would be wanting to
[23:41] see the difference between ultra real time versus near real time versus our standard quality data. Um you would want WFS and WMS. Um
[23:51] often for ongoing usage of our GIS data, uh WFS and WMS would be preferred. They provide real-time access
[24:00] to current data without the need for local storage. So you're just connecting to the internet to view our data. It
[24:06] ensures that you're working with the most up-to-date information, reducing any discrepancies from outdated data sets, eliminating the need for
[24:14] downloading large data sets and saving storage space. Standardized protocols facilitate seamless integration um across various different GIS applications. So you can
[24:28] use this in a variety of platforms. Web uh WS or web mapping surfs are map images over the internet to visualize
[24:39] spatial data as rendered images. Um the data is displayed as images in the format of PNG, JPEG, um
[24:47] etc. Primarily it's a visual representation supporting basic panning and zooming but no manipulation on the data. data. Web feature services or WFS are access
[25:01] to manipulatable vector-based geospatial data over the internet retrieving the actual feature feature geometries and attributes. This displays the raw vector
[25:12] data point line polygon etc um onto the map and you are able to perform spatial analysis and data editing in the GIS
[25:20] applications and the dual web feature service. Um this supports operations like querying, updating, inserting or deleting deleting features on your own
[25:32] side. So the difference is or the reason you would pick one over the other. Web mapping services are ideal for
[25:40] applications um that require map visualization without the need for data manipulation. Suitable u for when the focus is on rendering map for the
[25:48] display purposes primarily. And then a web feature service is preferred when an application requires analysis, editing or complex
[25:58] querying. Um, it enables you to do things such as spatial joins and real-time data integration into other
[26:07] systems. Um and I think this image that was on the previous slide in this slide shows well that the computer intakes the
[26:13] data from different sources and can deliver as images on or or features such as polygons and lines and points which are vector- based
[26:25] um shown at the bottom for web feature services and the images at the top for web mapping
[26:32] services. Um you can scan the QR code to see any additional information you'd like. uh on WFS and WMS um from our
[26:42] firm'sformational page. Um can show that briefly. Um but now I will show you how to connect um WMS and WFS in RJS online
[26:54] and QJS. To start, we'll go back Okay, this is ourformational page on WFS and WMS. There's a lot of information
[27:16] that describes all about all our services and what you can do to manipulate manipulate them and such. But first, I will show you how to
[27:29] um import web mapping services into Archis. Um you'll start here. You'll still want to start on the
[27:42] homepage of RJS online. You'll want to go to the content. You'll want to create a new item here at the top
[28:00] left. Since we have a URL that we copied from the web mapping service um on our firm's website, um we'll want to
[28:12] create a URL. I already have these URLs. You'll be provided. This is what the generic URL with the your map key shows. And
[28:23] then I've replaced it with the map key that we already have. So I'll copy this link here.
[28:31] And I'll paste this link into RJS online. And it can already recognize that it's a web mapping service. Um, and
[28:38] it will be able to pull in the correct parameters that it needs. I will want to look at all the
[28:45] web mapping. Actually, don't need to look at them all. Um, we'll do modus 7 days fire hotspot. It comes up the title. I don't
[28:58] need to create a new one this time. And we'll click save like we did before. It loads my web mapping service
[29:06] into the same format that it did before. I'll just want to open it in the map viewer. And now you can see the fire
[29:14] hotspots as images all over um displayed on the map. This is our web mapping service in RGis online.
[29:30] Um, because I'm already on RJS online, I'll quickly go through how to do the web feature service. It's pretty much
[29:37] very similar to what you would do for web mapping service. You go over here to content. You'll want to create another
[29:45] new item. And since we are from the web feature service website, we can copy one of these. And there's a
[29:53] link. Those links are here. Um, your map key is also in the provided link and you'll want to replace that with your
[30:01] actual map key which is replaced in this bottom link. Then you can copy this this out. Click
[30:09] URL. Paste your URL in the box and it can already recognize that it's a web feature service. Pick which uh which layers that
[30:22] you want. and we'll do them about the 7-day fire hotspot. Already comes up with the title for the layer. So, we don't need to edit
[30:31] anything here. And we can click save. And that loads our web feature service into a RTI item. You can open it
[30:45] in the map viewer again. Now, we'll also load our web feature service onto the map. And now you can
[30:54] click on any one of these dots and get information about the fire hotspot itself. Um, something that's not
[31:02] available on the web mapping service. Now, I'll show you how to do the same but in um Q.js.
[31:15] So once you're on RJS, you want to come over here to layer at the top and you
[31:20] want to add the layer and then there's add WMS WMTS layer and that's what we're going to do
[31:28] first. So we'll uh hit add WMS WMTS layer. We'll populate a window. You'll want to create a new
[31:40] service which brings up this window. Um, and then we can copy our WMS link with our map key in
[31:50] it, place in the URL box, and because I already have the title of this layer, and just copy it here, name it there.
[32:01] Um, there's no authentication needed because we have the map key in the um, URL itself. All I have to do is click
[32:07] okay and then connect. You'll want to select one of these with the name that you recognize. So we'll
[32:16] do do fire modus 7 days right here the title fire mode 7 days fire hotspot. Click add which will add it to
[32:27] the layer or add it to the layer list. But this is the fire hotspots and you can zoom in and see exactly where those
[32:35] hotspots are. and you'll see whether when it's loading right here at the bottom. Now we'll try and add the WFS
[32:46] layer into Q.js. We're going to want to gather the WFS link that is replaced with the API
[32:53] key. Um, conveniently I did it here. You're going to copy that link. You're going to go back to the Q.js window.
[32:59] You're going to come up to layer and add layer. You're going to want us to go all the way down to add
[33:06] WFS OGC API futures layer. Click on that. You'll want to make a new connection. Going to tell this firms cuz
[33:15] this is our firms link. Once you pasted your link in there, you're going to click okay and then connect.
[33:30] From there, you're going to want to click no at 27 days or whatever layer you'd like and click add. That will add
[33:38] it to the map and click close. Now, data is loading. See down here the box 45 seconds remaining.
[33:56] We can zoom to layers and you can see even where um the United States outline is from all of the fire data even though
[34:03] there is no map behind it. And that is exactly how you connect a WFS layer to QGIS. And as you can see
[34:12] more data is populating the more time it has to load. Thank you Don. Um hello everyone. My name is Asan Rado and I'm a software
[34:27] engineer at firms. Uh today I will do a high level overview of firms APIs and um how to use them. Here here's a quick
[34:35] summary of what we're going to cover. Uh we'll go over uh how to generate a map key again because this is crucial for
[34:43] using any of our APIs. Uh I will go over the data availability API. Then I will also cover
[34:50] on the missing uh data table that we have. uh then I will go into more details about the KML file footprints
[34:57] API. Then I will also cover the country and the area APIs and I will finish up uh by mentioning about our code examples
[35:07] and tutorials that uh we provide. Um so let's dive right into it. The APIs are under so this is the the main page of
[35:18] our website. Uh the APIs are uh under the web services. Uh and today we're going to review the global APIs. Uh the
[35:26] ones for USA Canada are very similar. See uh so here the the first uh option is where all of our APIs are are
[35:36] located. First I wanted to cover the the map key because that's very important um for using any of our APIs. So the map
[35:45] key the link to the map key is right here. This is uh where you will come to
[35:51] generate a map key. You'll click on this get map key uh button. Uh and all you need for
[35:59] generating a map key is an email address. Uh so once you enter your email address over here and click get a map
[36:07] key uh you will get an email uh from us that uh looks uh something like like this. The email from us will look
[36:18] something like this. Uh the the map key will be at the at the top in bold. Um so
[36:23] there is a transaction limit that every map key has which is 5,000 transactions per 10 minutes. If uh you require more
[36:32] transactions transactions uh we can increase that limit. Uh all you have to do is send us an email at
[36:39] supporta.mnasa.gov supporta.mnasa.gov of and uh we will increase your transaction uh limit if if that's um if if you think that uh the one you
[36:50] initially got is not enough. Also in this email you you you can see there's some information uh
[36:56] important links through some of the resources that we have. So once you you have your map key
[37:04] uh you can start using uh all of our APIs. Um the first API I I wanted to
[37:11] cover is the data availability API. This API is very simple. It only requires a source and and your map key. So the
[37:22] source can be either the default one which is all sources which is selected right now or you can select a particular
[37:30] source if you're interested in just a particular satellite. Um I will do all available sensors and I will enter my U
[37:40] map map key and when you click the display results uh you can see the results. What what this API provides is a date range
[37:51] uh where we have fire detections for the spec specific satellite. As you can see here we have uh for some some of the
[38:00] satellites we have standard processing data and uh near realtime processing data. The difference between those is uh
[38:09] that the standard processing data is usually 3 months behind but that but that is the the best quality data that
[38:17] we have. So it is recommended to use that one when available. it it takes a a longer process to produce that data.
[38:26] That's why it's 3 months behind. The near realtime data is produced usually within few hours of a satellite
[38:33] detection. And that's how we can provide data that it's really really recent. And over here with this API you can see the
[38:44] date ranges for all the satellites and and the difference between when for example let's let's look at modus. um
[38:53] the standard data for modus it's only available until the end of last year 2024 and then the from January 2025
[39:03] until now we have the near realtime data available for for this satellite similarly um for Noah 20 we have
[39:13] standard data available until the end of January of this year 2025 and then for from from today going back until uh February 1st.
[39:25] Uh we have near realtime data. So this is really helpful. For example, if you want to download historical data for
[39:34] let's say a month or or the year 2020, you can come here and use this API and
[39:41] uh you can see that there's only three available satellites that will have data from 2020. That will be the modus
[39:49] standard product data. um that will be also the Noah 20 standard product data and the S SNPP standard data. All of the
[39:59] other satellites have data that is either uh later later than that specific year. So this is very useful for
[40:09] figuring out uh when data is available and what satellite you want the data from. Next, um I want to review the missing
[40:21] data table that we have. This table has two two main columns. The first one is the standard
[40:29] data column and the the the other column is the near realtime data. Uh and then that's also subtracted into the date and
[40:39] the the satellite. satellite. So over here in this table you can see a date and the sensor
[40:49] where a data is missing and that can happen for a variety of reasons. Uh sometimes satellites need to to do some maneuvers
[40:59] or they need to be recalibrated. So when that happens there's usually a day or few days when
[41:06] we don't get any data. So if you for some reason downloaded data and you're interested in a specific date and that
[41:15] date has no data, you can come over here and double check that uh we actually have data for
[41:22] that date because for for one reason or another we we may not have that that data. So for example right here you can
[41:31] see for the swami uh vs MPPP sensor from July 10 of 2024 until July 15 of 2024 there is uh no
[41:48] data. So next uh I want to cover the uh KML fire footprint uh API. This API will produce results in uh a KMZ uh
[42:06] file file format and that file format is suitable for display in Google Earth. As you have uh previously seen this API
[42:18] uh is subdivided into uh 12 different regions. Uh so you can select between Canada and Europe and Australia, New Zealand for
[42:31] example. Uh then the next subsection is by uh the the date or the time span. So there are four different
[42:42] options that we provide either the last 24 hours, the last 48 hours, the last 72 hours and or the last 7 days and
[42:52] finally the uh five different sensors that we have. So all this is uh put into this nice table for you. As you can see the
[43:03] LANCAD product only has data for the Canada and US. Also you can see here in the in the
[43:11] titles the the sensors resolution. So the resolution um so you can see modus has a 1 km
[43:20] resolution. Uh the vs has 375 km uh 375 m resolution and lad is uh 300 uh meter
[43:29] resolution. resolution. So if you're interested in the last seven days uh fires over Europe for example, click on
[43:40] that you and that will download um that file for you which then you can go ahead and use
[43:49] however you see fit. The next API I want to cover is the country API. Uh this is one of our
[43:59] more Yeah. So this is one of our uh APIs that that gives you more information. Um the this API will will return the fire
[44:11] points into a CSV format uh which is like a text file which is comma separated. This requires you to select a
[44:21] country. Um so we have a a dropown of countries that you can select. So for example, if I select Thailand, uh
[44:31] then it requires you to select one of uh the the satellites. I will go for example with
[44:38] the modus near real time data. Then uh it uh the date is optional. You can you can leave it blank
[44:48] and it will default to today's date or you can enter a date in in the in this
[44:55] uh format. It has to be four years uh fourdigit year, twodigit uh month and uh twodigit date. So let's for example
[45:06] let's do 2025 February 10th and there is also a date range. Uh so if you select one it will be just the date
[45:19] that you selected. uh you can go up to 10 days prior to the days that you have
[45:24] se prior to the date that you have selected. selected. So and the last thing uh you need for
[45:31] this API is the map key. Um, so I'll put my math key. And when you do display results, this is
[45:41] kind of the the the format that that you will see all the all the the first uh row is
[45:53] kind of the the title or the the what different what each different value is. And then you will get all the different
[46:02] points in the in in in this format. And just uh one more one more thing to cover here. Um so all this
[46:13] information that I uh just described is also described here in the bottom. What what is the different sensors format
[46:21] that this API uh accepts? the threelet country code that is needed, the date range and uh the day
[46:32] range and the date range. So for the country code if you uh we also have a countries uh table
[46:42] which you can access from the from here. So when I when you are using this API and let's say for example you need to
[46:50] find the country code for Denmark you can come here and see the threeletter country code that this
[46:59] API will accept. And finally the last the last API uh that I want to cover is the area API. So this one is a little
[47:09] more powerful than the country one. uh in here uh it is very similar to the country one but uh with one exception
[47:18] that you can you can do custom area or the world the whole world in this API uh and over here uh you can
[47:29] see the world so by default if you don't provide anything it will default default to the to to give you giving you results
[47:38] for the whole world uh which has uh these coordinates. Uh so this uses latitude and longitude uh coordinates uh
[47:47] which are subdivided uh into this format. It has to be the west coordinate followed by the south followed by the
[47:55] east and followed by the north. Um so if you want to do a custom area it has so
[48:00] here is an example with South America. Um these are kind of the coordinates uh that South America has. Um but if you
[48:10] want to do your own custom area I will show you how for example so you can use for example the
[48:20] the via alert subscription service that we we have and that we reviewed earlier. So if you go in the custom region option
[48:30] uh and then you click use map um you get to this feature that we provide. You can you can draw a custom
[48:41] box over the um the area that you like. And let's say you are interested in the Great Lakes region for example
[48:50] um and you want to do like this area. When you click save, it will give you the area in the
[49:01] format that is needed for this uh for the area API. So you can just copy that um from here. Um, and you can just use
[49:11] it in the API and let's say I will for this example I will just leave this empty. So
[49:21] use today's date. Uh let's go with 10 days and let's go with uh the modus data. And the last thing we need is our
[49:35] um map key. Uh so use the map key and click the display result. So this is an example of uh what uh this API will
[49:48] return. So for the last 10 days in our custom area there were only two fire points uh
[49:56] detected. Yeah. Um so this is all the APIs firms provides. The last thing I wanted to mention is that all of this is also
[50:07] covered here in uh with code examples in our API code examples link. Um this will take you to our fire data
[50:16] academy uh portion of the site. And over here um there's examples of of how to use our API with with code.
[50:29] So you we have some uh some that are in Google Collab which is which is a free
[50:34] tool to use and we also have some examples that uh are with using the the Python programming
[50:44] programming language and you can also see there there are uh you can see the level that is needed to or what level of of of of
[50:55] knowledge is is is recommended for this uh uh tutorials or this uh examples and for example right here this is what I
[51:04] covered uh there there is uh an example. So that is all I wanted to cover for you
[51:10] today. Uh thank you and now let's go back to Melanie. Thanks Thanks Hassan. So once again a quick review of
[51:23] what we covered today. Active fire detection data can be accessed through several firm services. For data within
[51:30] the past 7 days, data can be downloaded directly for specific world regions, time ranges, and sensors in CSV, KML,
[51:39] and shape file formats. If looking for data than the past 7 days, then data can be downloaded by submitting an archive
[51:47] download request. Recent data can also be ingested into GIS platforms like ArcGIS or QGIS using web map or web
[51:56] feature services. Web map services generate geo referenced map images for visualization. Web feature services generate vector-based geospatial data
[52:07] for visualization and analysis. Both of these require the user to generate a map key in order to use them and that can be
[52:15] done on the firm site. Historical data can also be accessed through the firm's API, although this differs from the
[52:22] archive download in that you're limited to a 10-day time range. And this service also requires a map
[52:29] key. We showed how you can visualize active fire information through download and import into Google Earth or using
[52:37] WMS or WFS services to ingest into GIS platforms like ArcGIS or QGIS. You can also create an email alert to be
[52:48] automatically notified of fires in your area of interest. Like many firm services, this can be customized by
[52:54] sensor, region, and frequency. And now we'll give a short summary of uh our entire training. In this training series, we
[53:05] were introduced to the firm's application, which provides geospatial data, products, and services for detecting, monitoring, and evaluating
[53:13] fires. Active fire detection products are the most frequently used data and are available from several polar and
[53:20] geostationary geostationary sensors. In part one, we learned about how active fires are detected by satellite, the strengths and limitations
[53:29] of polar versus geostationary sensors, the impact of sensor spatial resolution, and the location of a pixel within a
[53:37] swath, and how to navigate the global and US Canada firms map applications. In part two, we learned about data
[53:45] latency or the time between when an observation is made and when the data are available and how firms provides
[53:53] data at a range of latencies depending on sensor characteristics like spatial resolution and processing requirements. And we saw how to use the
[54:03] firm's fire map application to monitor and track wildfire growth. We also learned about atmospheric and biophysical factors that can impact a
[54:12] sensor's ability to detect a fire and strategies that can be used to investigate why a fire might be missing
[54:20] such as looking for sensor outages or using imagery to check for the presence of clouds or smoke.
[54:27] And finally today in part three we heard about the many ways you can access and visualize active fire detection data
[54:33] such as through download web map service web feature service or using the firm's API. And one final reminder, you can
[54:44] access the homework for this training series from the training web page starting today or tomorrow and answers
[54:50] should be submitted by May 14th. Participants who attend all three parts and submit the homework before the
[54:56] deadline will receive a certificate of completion. Certificates will be issued by email about two months after the
[55:03] training. And I just want to take another opportunity to acknowledge our fantastic guest presenters, Jenny Houston, Brad
[55:13] Quail, Utmar Oshina, Dylan Mendes, Asen Rodof, and another thank you to Diane Davies who helped with the overall
[55:21] training coordination and Q&A. And a huge thank you to our behind-the-scenes ARS team, training coordinator Brent Blevens, content editor Jonathan
[55:30] O'Brien, and instructional designer Suzanne Monty. And one last time, I've included our contact information and links to our
[55:41] website, YouTube, and Twitter or X, and a link to our sister program develop. Thank you so much again for
[55:50] attending our training series. We will now transition over to the Q&A. So, we'll get started with question
[56:01] one. Um, oh, and um, so just a reminder for everybody, this document will be available from the training web page and
[56:08] you can see we've got a nice direct link to the firm's FAQ there. Um, so question one, how do you obtain and how often
[56:18] update? Uh, I think this is meant to be protected areas from Brazil and other countries. So I would invite um any one
[56:27] of our guests who would like to speak to that answer. uh we update the protected areas like
[56:35] once every two or three years and it comes from the world database on protected areas. Okay, question
[56:47] two. Um what is the difference between nearreal time and standard data? How long before the near realtime data
[56:55] changes to standard or is updated? Yeah, generally there is a lag of the three months, sometimes a little longer,
[57:04] but the standard data is only available for modes, uh, v SNP and Noah 20 currently. And yeah, the information
[57:13] more in detail is yeah, we it looks like we can we've included a link to the FAQ there as
[57:25] well. Excellent. And we'll put that link in the chat. in case there are any follow-up questions. Is there any There's a lot of
[57:36] information there. Does anybody want to say anything else about that one? Uh, I think a lot of that information is
[57:43] coming from our FAQ. So, okay, question three. How can we determine with the greatest possible degree of certainty the range
[57:55] of dates from the earliest start date and latest end date during which a fire was active based on the temporal
[58:02] sequence of hotspot detections within a specific geographic area? Since it seems like this was maybe covered in part two, Brad, did you want
[58:12] to speak to this one? as what's been articulated in response here, you could use our time since
[58:18] detection classification and adjust the, you know, the uh the calendar uh date settings or use the timeline down at the
[58:26] bottom of your screen and you could slide it uh down uh over to where you can see where that fire started and
[58:32] you'd be able to see the origination date there. when you hit the date that um where the fire has you know when it
[58:38] started you know th those detections or those initial detections will be um you know bright reduh if you will and you'll
[58:46] be able to vis visualize them that way. The other way you could do it as well is
[58:50] if you have at least a general idea of the window when the the the fire started on a given day or even within the day,
[58:56] you could use the uh the sub daily thresholding uh tools as well and and isolate the the uh detections that way.
[59:05] You can select the date and you can select an hour window like okay I can you want to look at everything you know
[59:09] within six hours of that that time and uh and then you can you know continue to focus from there to identify when the
[59:16] detection the first detection occurred. Excellent. Thank you. Question four. Given that each hotspot detection represents a pixel with a specific
[59:28] spatial resolution, how can we interpret the potentially burned area associated with each of these pixels reported by
[59:36] modus and viewers? Okay, so I put that insert in there. Um, that's also coming directly from the FAQ
[59:46] link we put um in there. um not generally suggested to use active fire detections as a way to determine um
[59:56] burned area. As Dylan mentioned, it's not recommended to use active fire detection data to estimate burned area.
[1:00:03] In some cases, it may work pretty well. it may be pretty close if you had another source of uh in burned
[1:00:10] area need from imagery and whatnot. But we we recommend that you use like the uh the modus burned area product uh or any
[1:00:16] other type of burned area product that's derived using uh uh reflectance imagery through a change detection process. Um
[1:00:23] and the reason why you know that's better you know you have you know a pre-image and a post image let's say and
[1:00:29] you can do a difference there and change detection process and identify that area of burn based on those that u surface
[1:00:35] reflectance uh outputs there. But if you use active fire detection data, you know, from the polar orbiters, you're
[1:00:41] just getting a look, you know, a couple times a day, uh, you know, that fire could, you know, still be moving along
[1:00:46] in between those observations even when you have a lot of polar orbiters up there collecting data. And if it's
[1:00:52] particularly fast fire in finer fuels and it's wind driven event, um, you would have big gaps in your active fire
[1:00:59] detection data not representing the area burned. So um yeah, those are the you know the primary considerations about uh
[1:01:08] you know avoiding using active fire detection data uh for a burned area. Thank Thank you. you. Okay, question five. If we could scroll
[1:01:24] down so we can see. Perfect. Um, will there be a confidence matrix for all the hotspots that have been
[1:01:34] generated through the detection? This might be referencing the the fire confidence uh metadata. Yeah, I added that answer. Um, if you're
[1:01:47] clicking on an active fire point from the firm's website and the map viewer, um, it will pop populate a table with
[1:01:54] confidence being one of the columns in the table. Um also the FAQ has more information on buyer confidence
[1:02:03] um themselves. Thank you. Okay, question six. Um my question is how much data can a person get using the API and the
[1:02:17] timing of getting that data? And by timing I'm guessing how long it will take. Uh yes. So you can request
[1:02:29] um various sorts um and sources of our data. Um that answer is coming directly from when you apply
[1:02:40] for a map key on the firm's website. So that is what you see. Um the transaction limit is default set to 5,000 d
[1:02:48] transactions per 10 minutes. Um, and on a case-by case basis, we can increase it if you need that. Um, contact us,
[1:02:56] contact us if you need that. Sounds good. And may Okay. And question seven, another thing I want to
[1:03:07] add is that is there any way to access data mountain cover which is oh so snow cover data.
[1:03:24] Yeah. Yeah. Yeah. Brad here I'll answer that. Yeah. Recently uh the you know a snow cover layer has been added to the
[1:03:31] firm's viewer that's derived from beers and uh you know so that uh data set is updated we on a routine basis and the
[1:03:40] reason we've added that layer just as a side note is you know fire uh managers uh you know typically start to watch
[1:03:47] areas closer as the snow line you know recedes and they'll pay attention you know closer to fire
[1:03:54] weather fire weather forecast information and fire danger indices in those areas. And uh so that's why we've
[1:04:01] uh you know provide that product in firms and uh if you're interested in actually getting that data yourself uh
[1:04:09] to work with and download uh yeah you can go to the earth data site and uh you
[1:04:14] know query that data and download it for use. Yeah. And and if you ever have trouble finding a a data set like that on Earth
[1:04:23] data, Earth Data has um a forum which which you can post questions and and get answers from the Earth Data
[1:04:32] help. Question eight, will the area API support JSON or pageionated responses in the future? Yeah, I put that in that answer.
[1:04:46] Um, I think our reasoning, uh, we don't, we only provide CSV at the moment for CSV responses for our APIs. Um, it's not
[1:04:55] in our plan yet. Um, and I think the reasoning is that if you're using the API, it wouldn't it shouldn't be too
[1:05:03] hard to translate into a JSON object. um pagenated responses. I'm not really sure what that means in the context,
[1:05:13] but feel free to email me if you have a more specific question. Yeah. Or or put a followup in the in the Q&A. Um we'll
[1:05:22] see we'll see if we get to it. Okay. Question nine. I was wondering if it's possible to use the API for archive
[1:05:32] data. I would for example like to pull all the fire data from the SOMI MP satellite from 2018 until 2025 for a
[1:05:41] given country. Can I do this with the API? Yeah. Uh hello. Yeah. So, uh you can do this using the API, but I
[1:05:53] wouldn't recommend it. I would recommend to um to go uh with the archive data approach and submit a download request
[1:06:03] for this particular example. Um it will be much faster um to get the data that way. Um and it
[1:06:12] it it depends the the API is I guess the the API is more suitable for um um programming.
[1:06:27] programming. Uh so so when you when you want to get your data programmatically and and do some something with it
[1:06:34] um the um getting the data uh as as a big chunk um that's um I think in this
[1:06:44] example that's what you want. You can you can get it as a file and then and then later on you can decide what you
[1:06:50] want to do with it. Um, so I I would recommend not using the API for this this particular example.
[1:06:57] Yeah, just to add the API is intended for like ongoing use of our current data. Um, our archive download would be
[1:07:06] s be sufficient for the example you put. Thank you. Um, question 10. Is the map key for active information
[1:07:22] timebound? And I agree. I'm not sure exactly what time bound means. I guess maybe does it expire? Um, so the map key does not
[1:07:32] expire um itself. You can get our active fire information also from our active fire download. So you don't need a map
[1:07:41] key. um you'd need a map key if you were going to build some programmatic way to access our most
[1:07:50] recent fire data. Um but if you would just like the most recent fire data on a particular day, you can go download that
[1:07:57] file file also for whatever region of the world you're in. So, okay, question 11. Is there a way to
[1:08:08] extract near real-time fire occurrence or filter imagery to build a nearrealtime fire alerting system using this product for active fire monitoring
[1:08:18] in Africa? Yeah. So it sounds like um um our fire alerts would do what you would what you are searching
[1:08:39] for. I think yeah I I agree from reading the question. Um yeah and if you need more
[1:08:50] information about that we put some links in there uh direct links to the firm's fire fire alerts. Um question 12. If, for example,
[1:08:59] I wanted to intersect the firm's data with a settlement layer like the global human settlement layer to get fires near
[1:09:05] buildings, would it be correct to use a 375 m radius around each fire point as a sort of uncertainty measure?
[1:09:16] So uh for this the 375 meter product that you're referring to here um that means that uh under the satellite
[1:09:26] exactly there will be a 375 m square box on projected on the earth and then if there's a fire somewhere inside that 375
[1:09:36] m box then that pixel will turn red and show up on our firm's map viewer. So any
[1:09:43] red pixel on the firm's map viewer means that there's a fire detected somewhere within that pixel. Um so you don't need
[1:09:51] to go outside of the pixel for an uncertainty measure. It's inside of that pixel. pixel. Um and yes, it would
[1:10:00] be correct to use the global human settlement layer to determine if it was near a human settlement layer or human
[1:10:07] settlement. Um I don't know if there's any more information, Brad. Yeah. Yeah. Um one one thing I may recommend doing
[1:10:23] uh which we've done in some applications before is uh you know getting at the question part at least for considering
[1:10:29] uncertainty uh there is uh you could take the uh diagonal distance as as the buffer instead of the orthogonal
[1:10:38] distance. Um you know half that 375 meter um pixel resolution would be that uh you know buffer to the orthogonal
[1:10:48] direction outward from that centrid. But if you take that diagonal distance and uh use that instead, maybe also apply
[1:10:55] the positional accuracy that you would expect to see with modus and veers. U I can't remember it is off top of my head,
[1:11:00] but uh they would be both be around somewhere between 50 and 75 mters and uh you could uh that could be your new
[1:11:08] radius. So take like that diagonal distance and then apply the positional accuracy and that would be like your
[1:11:13] radius that you could consider using. and and I can write something up there to put it in there on that response
[1:11:21] Melanie. Melanie. Perfect. So I I can uh so what factors is the choice between WFS and WMS based on um I
[1:11:35] have yet I can write something also to put in there but um the choice between web feeder service and web mapping
[1:11:41] service um a web mapping service really just uh puts images over a map. Uh and the web feature service puts the um
[1:11:51] exact features, polygons, uh points, etc. onto the map so you can uh query different spaces that it takes up on the
[1:12:03] map or things of that nature. If you're really just looking to see where the fires are on the map and you're not
[1:12:09] looking for any spatial information on them, then web mapping service would suffice. Um and a web by nature web
[1:12:17] feature service is a little bit more intensive on the server. Okay. Question 14. What's the starting temperature in
[1:12:31] Kelvin of a flame? Is there a threshold of Kelvin or temperature that can be that can help define if it's an active
[1:12:38] flame, a thermal anomaly, or a hot area, for example, just burned? [Music] And maybe I would uh see if Brad wanted
[1:12:55] to speak to that one. Sure. Yeah. degrees Kelvin is, you know, the the estimated temperature based on the
[1:13:03] observed radiance in the thermal bands um for the sensor being used. And u those uh estimated temperatures are, you
[1:13:12] know, factor into the um the fire detection algorithms that we talked about in uh section one of this training
[1:13:20] using the mid uh the midwave infrared and the longwave infrared bands. And uh just for reference you know nominally uh
[1:13:28] the the earth's surface temperature is about 300° Kelvin which you know it's somewhere like around 80° it's that
[1:13:34] average uh temperature of the earth you know for a relationship there but those uh smoldering fires uh versus you know
[1:13:41] what we call an active flaming fire uh you know an active flaming fire can be very hot you know somewhere around
[1:13:47] thousand uh degrees Kelvin or even hotter you know 12 to 1,200 degrees or even warmer and the smoldering fires you
[1:13:54] know stuff that's you know is, you know, kind of is burning low and and maybe takes off a little bit every once in a
[1:14:00] while, but again, it's smoldering, not really active fire. You know, they're they're in that 600 to 800 degree Kelvin
[1:14:09] range. range. Okay. Um, question 15. And it looks like we have two questions left. Um, so if
[1:14:18] you have a question, now's the time. Um, as a matter of interest, how does the firm's historical burned area data,
[1:14:27] and I'm assuming that's the modus burned area, uh, compared to that available from Capernicus CDS fire burned area
[1:14:34] from 2001 to present derived from satellite observations? Um I haven't done a comparison myself uh between uh the capernicus data set to
[1:14:48] the modus burned area but um we'll take a closer look at that. We we have some people on on the firm's team who have
[1:14:54] and we'll be able to provide you a good answer to that that question. So thanks for that question.
[1:15:04] Okay, question 16. Is there an animation or movie like tool in firms for example to play an animation of the detection
[1:15:13] over a day in a sub daily view and it looks like maybe that's a planned development. Yeah. Um this is Diane. Yeah. Lema wants
[1:15:27] to comment. We have um something in development and uh hopefully it'll be released um within the next month or so.
[1:15:36] That's That's exciting. It is. Um, question 17, and this is in reference, I think, to the timebound
[1:15:46] question. Um, they were wondering if the key timed out after use or the same key can be used for multiple days, uh, or
[1:15:55] it's just a one-time request scenario. Yeah. So, the key is good indefinitely. Great. So save your key. Um, question 18. Will there ever be
[1:16:10] a current year archive? In other words, an active fire hotspot information for each satellite since January 1st, not
[1:16:19] only the last seven days, download option for shape files, KLS or CSV without having to do the email
[1:16:26] submission. submission. [Music] [Music] So, we like to keep track of who is requesting our data. So, no, you're
[1:16:38] you're describing what our archive data uh download does it. It has all of our archived data for the past
[1:16:48] u many years before. I'd also just add to that, it's kind of like um a practical reason as
[1:16:57] well because we just have to keep updating it. Um so if there was a enough demand and there was a good reason to do
[1:17:05] it, we might consider it. But um currently we we just do it when a year is complete. Also another thing to to
[1:17:14] note is that the standard quality data isn't available um straight away. So, it's usually available with a 3 to four
[1:17:22] month lag because this is QAD by the the fire science team. So, um it probably wouldn't be as current as you'd like it
[1:17:32] to be. Um so, that's another reason that it's it's delayed. I hope that helps. Okay. Do we have a question for question
[1:17:50] 19? How does NASA show PM data on air quality? So, I'm assuming this means nighttime data for air
[1:17:59] quality. I'm not sure what this person might be referring to. Is that PM particulate matter or I was assuming PM nighttime. you're
[1:18:14] probably right. Um, so that isn't something that we currently have in firms. Um, but it is something that we
[1:18:24] are definitely interested in looking at. We don't have any immediate plans to do anything but it is on our radar and um
[1:18:33] if you have specific use cases um we are always uh interested to hear what they are um and that may help bump it up the
[1:18:43] priority list but we don't have any immediate plans and and uh offline I I can put some links in to
[1:18:53] satellite derived PM2.5 uh data sets Um, so I can I can put some links in there to available uh data
[1:19:07] sets. sets. Okay, it looks like that brings us to the end of our questions. Um, so I just want to take u a second to
[1:19:21] once again thank our amazing guest presenters and guest speakers. Um, thank you so much for these amazing
[1:19:29] presentations and for a great job answering all of these great questions in the Q&A. Thanks to you all for
[1:19:35] attending. Um, I'll just invite, you know, Brad, Diane, Dylan, Asen, Amar, any any of our uh, presenters online
[1:19:45] today if you would like to unmute and say any few words. Um, happy to give you a second to do that before we close
[1:19:51] today. Um I would just like to say thank you to everybody for for showing up for these
[1:20:02] um for these training sessions. Um we're always delighted to see how firms data is being used. So please feel free to
[1:20:11] get in touch if you have suggestions of what you would like to see then again please let us know. But um I hope you
[1:20:17] found this training helpful. Um we're really grateful to the asset team and to everybody that's um all the firms team
[1:20:23] that have presented. Um so yeah, thanks Melanie and the rest of you. Yeah, Brad here. Uh I echo Dian's
[1:20:34] sentiments there. Thank you everyone for your participation and interest in this training. It's great to see this much
[1:20:40] interest and uh um yes, if you have any questions uh about the use of the data or suggestions for enhancements as Diane
[1:20:48] said, yes, please reach out to us via email and uh we look forward to hearing from you. Thank you.
[1:21:01] Okay, thank you once again everybody. Um I hope you have a great rest of your day. Thanks everyone.
