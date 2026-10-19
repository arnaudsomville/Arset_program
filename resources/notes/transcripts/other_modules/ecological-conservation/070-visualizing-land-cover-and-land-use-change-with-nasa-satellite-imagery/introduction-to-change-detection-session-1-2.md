# Introduction to Change Detection, Session 1/2

`https://www.youtube.com/watch?v=du0fPyiZrpk` · id 215 · 1:42:24 · module 85 — Visualizing Land Cover and Land Use Change with NASA Satellite Imagery

[00:02] Hi everyone, and welcome to this advanced webinar on change detection for land cover mapping. My name is Cindy Schmidt and I will be
[00:10] your instructor today. So this webinar series consists of two two-hour sessions uh on one on Friday, September 28th,
[00:21] today, and one next Friday, October 5th. So that we're also going to have two sessions each of those days, a session A
[00:31] and a session B. Those sessions are exactly the same thing, so you only need to sign up for one of those sessions.
[00:38] The webinar recordings, the presentations, and the one homework assignment that we're going to have can be found after each session at the at
[00:48] our website listed here. And then also after each session, there will be a Q&A, um and then you can also have additional
[00:57] give us additional questions via email at um my email address here or my colleague's Amber McCollum um during the week.
[01:09] We'll have one homework assignment. Answers have to be submitted via Google Form, Form, and that will be given to you at the end
[01:18] of the second webinar. So in order to get a certificate of completion, you have to attend both live
[01:26] webinars and complete the homework assignment, which is due October 19th. You will receive your certificate about two months after the completion of the
[01:37] course course um from Marinas Martins listed here. So we have a few prerequisites for this course course because it's an advanced course.
[01:50] The first one is to make sure that you have viewed our fundamentals of remote sensing webinar series, which you can
[01:57] view anytime from our website, or at least have taken a remote sensing class. We also require that you've taken um the
[02:07] advanced webinar land cover classification with satellite imagery because we will be doing a land cover classification classification um during the second webinar.
[02:17] We also require that you download and install QGIS and all accompanying software. We have some R um scripts that we have you
[02:27] download. Um you can use this exercise is a link there that you can use for help in downloading and installing QGIS
[02:35] if you haven't done so already. You will also need to down download and install the R statistical program and
[02:43] then also download and install RStudio. You can access all our course materials on our website um the webpage is listed
[02:56] here. It has the recording. Um it will have the link to the homework and it has the exercises and all associated
[03:04] material with those exercises. This is our course outline for this week and next week. Session one will be an
[03:17] introduction to change detection and then session two, we will show you how to do a change detection using
[03:23] classification approach. Since it is an advanced webinar series, both both both sessions will include exercises in QGIS. So, you will need to have QGIS
[03:35] loaded for this week's exercise. This week I'm going to give you an overview of change detection. Then
[03:45] describe different methods for detecting change with satellite imagery. Then I will do an exercise how to visualize change two different ways in
[03:55] QGIS. So, I'll first start with the overview of change detection. Detecting change in satellite imagery generally referred to the conversion of
[04:12] the landscape from one dominant feature type to another. Examples of that include changes in tree cover due to the wildfire or land
[04:21] clearing, clearing, urbanization and land degradation due to overgrazing. overgrazing. The type of information you can get from
[04:29] satellite imagery is where and when has change taken place, how much and what kind of change has
[04:37] occurred, occurred, and what are the cycles and trends in the change. There are several broad categories of
[04:46] change that you can detect with satellite imagery. Those include change the change in shape or size of patches.
[04:54] Urbanization is a great example of that. Slow changes in cover type um is a little more difficult to detect than
[05:02] abrupt changes due to wildfire or deforestation. deforestation. Slow changes in the condition of a single cover type like forest
[05:10] degradation due to insect or disease can be easy or difficult depending on the extent of the damage.
[05:18] Lastly, changes in the timing and extent of seasonal processes such as decreased rainfall and its effects on vegetation
[05:26] can be monitored using satellite imagery. The way we detect change using satellite imagery is by detecting changes in the
[05:38] spectral values of pixels. Pixels will have different values before and after changes have occurred. In this example,
[05:47] we see that healthy vegetation has high reflectance in the near infrared, but low in the shortwave infrared.
[05:55] Burned areas are the opposite with low reflectance in the near infrared and higher in the shortwave infrared.
[06:03] So, you can use that information to not only detect burned areas, but also detect detect detect the severity of the burn.
[06:17] The goals of detecting change in satellite imagery include identifying the location and type of change, quantify the change, and assess the
[06:26] accuracy of the results. It's important to understand that identifying the location of and quantifying change is pretty easy. Identifying what caused the
[06:37] change is not easy, and I'll be um um reiterating that over the course of our webinar series that it again, it's easy
[06:47] to detect the change, the location of the change, when the change occurred, and sometimes the severity of the
[06:53] change. Identifying the cause of the change is much more difficult. The key to successfully detecting change is to separate real change from spectral
[07:08] differences that are due to other factors, such as images from different seasons. seasons. So, you need to choose images that are
[07:16] collected at approximately the same time of day, collected during the same season, nearly cloud-free, hopefully, co-registered with one another, and
[07:26] radiometrically and atmospherically corrected. I can't stress this point enough that the key to detecting change is to detect the actual change, not not
[07:37] any kind of spectral differences due to pick difference in pixel values because of atmospheric differences and so on. Um
[07:46] this is this is really the key to getting at identifying change. Images need to be collected about the
[07:56] same time of day to reduce differences of sun and sun angle. Ideally, images from different years should be within the same month to avoid
[08:05] seasonal and phenological differences. For example, if you choose an image in the dry season and an image in the rainy
[08:12] season, assuming you can actually find one cloud-free, then you will be seeing differences in vegetation greenness due to different
[08:20] different precipitation amounts, not due to land cover change. Similar to this, even if you choose images from the same time of year, you
[08:29] need to be aware of different annual precipitation amounts for those particular years. If one year experienced extreme droughts
[08:38] and one year experienced normal rainfall, rainfall, you will be seeing differences in vegetation amount due to their
[08:45] differences in rainfall. Now, if that's what you're interested in looking at, then that's fine. But if you're looking
[08:51] at, say, deforestation, you have to be aware that you're going to see changes in vegetation due to
[08:59] those rainfall amounts as well. You can currently acquire Landsat surface reflectance products for Landsat 4, 5, and 8. These products are
[09:10] generated using the Landsat Ecosystem Disturbance Adaptive Processing System or LEDAPS, which was developed by scientists at NASA Goddard as part of
[09:19] the MEASURES project. The USGS now maintains the system and provides these products via via their Earth Explorer data portal listed here.
[09:33] So, there are a few caveats of using the surface reflectance products. Um one is that the Landsat 7 images are not gap
[09:41] filled. filled. Um and the usefulness of using these products is reduced in certain areas, such as very hyper arid areas or snow
[09:51] covered regions. Um it conditions where there's low sun angle, um coastal regions, and then areas with extensive clouds.
[10:01] The um panchromatic band, um so the Landsat 7 band 8 is not available um in the surface reflectance product.
[10:12] And the product for Landsat 4, 5, and 7 are only available for specific dates. Actually, they're they're available for
[10:19] most dates, um and we'll give you a website where you can see the exact dates that they're available. They They
[10:24] are not available for a few dates um that they list on their website. So next, I'll be describing some of the
[10:34] change detection methods. There are lots of different kinds of ways to detect change in imagery. I'll be telling you about four of them:
[10:48] visual analysis, classification approaches, image differencing, and temporal trajectory. Visual interpretation involves the delineation of change on a computer
[11:01] screen rather than a paper map. This allows production of results that are automatically in digital form. The method works best if image analysis
[11:12] tools and experiences are limited, but it doesn't take full advantage of spectral responses, and it's not good
[11:18] for subtle changes, like land degradation. degradation. So the images on the right show how deforestation in Peru between July 2013
[11:28] and February 2015 was delineated. So we call that also heads-up digitizing, where you just have the image on the screen and you're
[11:38] digitizing a polygon around the areas that you're wanting to analyze change. And you generally can use GIS software
[11:49] or some image processing software to do that. The two main classification approaches are post-classification comparison and classification of
[12:02] multi-date imagery. In post-classification comparison, two dates of imagery are classified separately and then one date is subtracted from the other.
[12:13] This approach is not recommended because the final change map will reflect errors from each classification. Also, this
[12:21] approach tends to ignore subtle changes that occur within a class. In the classification of multi-date imagery approach, you stack two dates of
[12:31] imagery into one file and then you classify the two date image. So, that's what we'll be doing next week.
[12:39] You can also include image transformation, such as NDVI, the vegetation index, to help identify subtle changes. The result is that you
[12:49] will get an image where the class changes will be unique. This approach is recommended because it uses the raw pixels to identify change
[12:58] and it can detect subtle changes. Um the challenge to this approach is that sometimes it's difficult or at least
[13:07] challenging to interpret. The image subtraction method works by simply taking a single band from two dates of imagery and subtracting one
[13:21] from the other that results in the change image. The change image consists of positive and negative values where
[13:28] change has occurred and zero values where no change has occurred. The advantage to this approach is that
[13:35] it also can detect subtle changes, but again, it may be difficult to interpret. So, we'll be doing this approach in
[13:44] today's exercise. Calculating the difference normalized burn ratio to assess burn severity is a good example of image differencing
[13:57] between image transformations of two dates. dates. This approach involves first calculating the normalized burn ratio for each image
[14:06] date and then subtracting the post-fire NBR image from the pre-fire NBR image. Recent developments in change detection
[14:20] methods take advantage of the entire freely available Landsat archive by using monthly or annual time series to
[14:28] look at changes or trends. While in the previously described method, you would only use two or three
[14:35] image dates, in this method, you could use 20 or 30 or more image dates. This method allows the capture of short
[14:44] duration disturbance events as well as long-term disturbance trends. This approach is founded on the recognition that change is not simply a
[14:54] comparison between conditions at two points in time, but rather a continual process operating at both fast and slow rates on the
[15:02] landscape. landscape. There are several different algorithms um that are out there, and this is an example of LandTrendr developed by
[15:11] Kennedy et al. at Oregon State University. University. The results of this algorithm include the magnitude of change that identifies
[15:19] the percent of tree cover loss, the duration of the disturbance, and the year of onset of the disturbance.
[15:28] ARSAC plans to do an advanced webinar on image time series analysis in 2019, so stay tuned for that one.
[15:40] So, next I'm going to give you a few case study examples of how satellite imagery is used for looking at change.
[15:51] This example shows how you can clearly see some types of extreme changes like mountaintop mining in West Virginia.
[15:58] These images show the elimination of vegetation for mining operations between 1984 1984 and 2015. The resulting rock debris piles have
[16:10] increased sedimentation in nearby rivers. Fan et al. used a vegetation index differencing approach to map rubber plantations.
[16:24] plantations. This is a little different than analyzing change between two time periods. It identifies rubber plantations by taking advantage of two
[16:31] distinct phenological stages, leaf off and full foliation. These two distinct stages enable identify identification of rubber plantations compared to the surrounding
[16:44] vegetation. vegetation. This approach could then be used to look at the expansion of rubber plantations over time.
[16:56] This example shows the changing land use and land cover in a watershed in Southwest China between 1974 and 2008.
[17:05] This study used a post classification and comparison approach, which will not capture subtle change, but as you can
[17:11] see it does capture broad land cover changes. changes. It is also easy to quantify the changes with this approach.
[17:23] Next, I'm going to show you some web tools that you can use to do change detection and analysis.
[17:33] We've talked about Global Forest Watch in previous webinars, but we did want to show you this again because such a it's
[17:39] such a great uh web tool for looking at uh forest cover change. It's a interactive online forest monitoring and
[17:47] alert system designed to empower people everywhere with the information they need to better manage and conserve forest landscapes.
[17:55] It provides information about the status of forest landscapes, including tree cover gain and loss, which most people
[18:01] use it for, land cover, land use, conservation, population density, and then you can also get country-specific data.
[18:11] data. The tree cover loss and gain product uses Landsat at a 30-m spatial resolution from 2001 to 2015,
[18:22] although I think that's um been updated to 2016 recently. It shows the location and amount of disturbance, but not the cause. So
[18:33] again, it's easy to get at location um of disturbance and how much disturbance, but it's really challenging to get at
[18:41] the cause of disturbance unless you have some good ground data. In this example, we're zoomed in to the
[18:51] DRC to look at to look more closely at the area of tree cover loss in that country.
[18:57] country. If you click on the purple country data tab on the far right, you can type in
[19:02] the Democratic Republic of Congo, and then you can click on analyze to obtain specific country metrics that will show
[19:09] up on on panel on the right. Here you can see that from 2001 to 2015 there was over 9 million hectares of
[19:17] forest loss in that country. You can also download the data directly from the map viewer. So, it's a really great resource for
[19:27] examining forest cover change. I also wanted to let you know about a Piers we've we've discussed Piers in
[19:38] previous webinars as well. Um it's a great resource for really looking at MODIS um imagery and looking at sort of
[19:49] changes over time and getting statistics about various MODIS products. Landsat will be incorporated into this into a Piers um at some point, but it's
[19:59] not there yet. So, you can get um a Piers through the LP DAAC. Um and we'll give you that
[20:08] um website a little bit later. Um so, outputs not only include the actual data, but you can get um
[20:18] you can you can get the imagery itself, but you can also get the data in CSV form for easy analysis. And they also
[20:24] have these really nice plots that they do um as you can see in the lower right. Um and that will give you they'll give
[20:31] you those plots automatically. So, as part of our time series analy- analysis webinar that we'll do in 2019,
[20:39] we will include some exercises on using a Piers. I also wanted to mention another system called S-PAL, system for Earth
[20:51] Observation data access, processing, and analysis for land monitoring. This also has some really great cloud-based um tools for doing uh two-date change
[21:04] detection and also time series analysis. Uh you do have to get an account to access these tools, um but it's pretty
[21:13] easy to do. Um and it's developed by the uh by the FAO. So, I highly recommend that you take a look at this website as
[21:20] well. So, at this point, we're going to jump into doing an exercise on visualizing change using QGIS.
[21:33] So, just bear with us for a moment while we switch over to um bringing up QGIS. All right, everyone. Let's get started
[21:57] with our exercise now. You should all have a copy of the um exercise downloaded from our website.
[22:06] So, you can either follow along with me um and try to actually do what I'm doing. I But, if I'm going too quickly,
[22:13] what I recommend is that you just watch um and then do it at your own speed using our exercise a little bit later.
[22:23] It It's fairly straightforward, but um in case I I speed through um too fast through this, then um I recommend that
[22:31] you just try it a little bit later. So, for this exercise, you see QGIS up, we're going to be looking at vegetation
[22:41] changes in Tanzania from 1993 to 2016, again using two different visualization techniques. techniques. So, for the first image in 1993, we have
[22:55] a Landsat 5 image, and then for the 2016 image, we have a Landsat 8 image. So, the first thing we're going to do is
[23:04] we're going to add those images to um QGIS. QGIS. And when you download these images from Earth Explorer,
[23:17] the images come each band is in a different file. So, we'll have to load each band uh separately. And then we'll
[23:26] have to stack them together in order to to process the data. The other thing I wanted to let you know is I am using the
[23:33] newest version of QGIS. So, if you have an older version of QGIS, you will notice thing there
[23:41] there's some differences in terms of um how things look and how how you do things. You You can still figure out how
[23:49] to do it using the older version. All the functions are still there. They just may look a little bit different. So,
[23:56] uh just to give you a warning about that. that. And the first thing that's actually quite different about this new version
[24:03] is that um loading raster datasets is is a little different. So, if you click on the the icon for loading the raster data along
[24:15] the panel along the side, this um data source manager will come up. And here it says it's looking for what
[24:24] raster datasets you want to choose. So, I'm going to click on the dots on the side. side. And I'm going to add
[24:32] the Landsat 5, the 1993 bands. bands. So, as you can see, I have them all listed here.
[24:42] Everything's in there. There's a lot when you order the surface reflectance data, they have a lot of sort of quality
[24:48] bands um and a lot of other information um that you can use to do things like cloud masking um and looking at your
[24:57] data quality. But, right now, we're just going to load the bands that are there. So, it's, um,
[25:06] one, bands one, two, three, four, five, and seven. Band six, um, for Landsat 5 is the thermal
[25:16] band. We won't be needing that band. So, you open all three of those, and then add them.
[25:29] And then, I'm going to close this for now. now. So, now all the bands, it looks a little
[25:34] funky. We'll We'll work with the display a little bit later, but what we want to do is actually,
[25:41] um, stack these bands into one file. So, in order to do that, you go up to raster,
[25:50] raster, then miscellaneous, and then merge. We're going to be using this function quite a bit through this exercise.
[26:02] So, we're going to add our input layers. Um, the nice thing is when you use the merge function, that even though your,
[26:11] um, bands aren't in necessarily in the right order when you load them, as you can see I have seven at the top and one
[26:18] at the bottom, it will put them in the right order during, um, in the merge function. So,
[26:24] has all the bands there, one through one through five and seven. We just want to select them all,
[26:30] and say okay. This The one really, really important thing that you do when you use the merge
[26:37] function, function, is click this guy right here, place each input file into a separate band. I can't
[26:44] tell you how many times I've forgotten to do that, um, and then you don't get the results
[26:49] that you want. So, make sure you click that when you're merging multiple bands together. Then, we're going to want to
[26:57] give it a file name. So, in order to do that, you click on the three dots here. We're going to save
[27:05] it to a file. I'm going to navigate to my exercise one. one. And we're going to call it
[27:16] Tanzania 1993.tif. So, I actually already have um an image called Tanzania 1993. So, I'm um going ahead and cancel this.
[27:34] But, what you'll do um um is create that image here. You click run in background, and then
[27:42] you close. And it will run it. And what will happen though is you'll get a temporary file
[27:50] called merge appearing your um legend here in your layers. And you'll want to just make sure you
[27:59] display display your 1993 image that you just created. So, I'm going to do that right now. And I'll add that.
[28:13] Okay. Okay. So, I have a multi-band 1993 image um right there. It's the The colors are still um not the way we want them, but
[28:23] we'll change that as soon as we stack the 2016 image. So, I'm going to bring up the 2016 band.
[28:36] And that's a Landsat 8. So, there's a few different bands if you remember in Landsat 8. Um and so, it's something you need to
[28:48] keep in mind when we're doing some of these vegetation indices that the bands are a little bit different.
[28:56] So, I'm going to select again band 1 1 2 3 4 5 6 and 7. And we'll open that.
[29:09] And then we'll add them. And close. And again, we'll want to merge this. So, we would go through the
[29:17] same process of of miscellaneous, merge. We select our Landsat 8 bands here. So, we have um, you can see Landsat 8 at
[29:31] the top. We select them all and then say okay. okay. Save them to a file that we call
[29:38] Tanzania Tanzania uh, 2016. tif. And then we run that. And I'm just going to bring up, since I
[29:46] already did that, I'm just going to bring up that image land um, the Tanzania 2016. If I can find it.
[29:57] There it is. Okay, so the next thing we're going to do is make our image look a little bit
[30:12] better. I'm going to close everything up so we can see things. I'm going to move at Tanzania
[30:25] 1993 1993 above the 2016. We'll get rid of all the other images in a little bit. Um, but there's one thing
[30:35] we need to do before we do that. Um, but before but I'm going to click off also.
[30:42] I'm going to click off all these other ones cuz we don't need to be looking at the individual bands.
[30:50] Okay. So, for 1993, I'm going to right-click and then go to properties. And then the properties dialog comes up.
[31:02] So, in order to make this image look a little bit nicer, we're going to select this this
[31:10] multi-band color here. And then we want to um put band five, which is the mid-infrared band, in the
[31:21] in the red band. We want to put band four, four, which is the near-infrared band, in the
[31:28] green band. And then we can leave band three three um in the uh blue band. And then if we
[31:36] say apply, you can see that the image looks a little bit better. I'm going to move it aside a little bit
[31:45] so you can see it. But, we can actually make it look a little bit nicer, too, because the colors are actually being
[31:53] affected by the background cuz we didn't indicate what the background is, as well as the clouds that you can see in the
[32:00] imagery. imagery. So, what I'm going to do actually I'll close this. I'm going to zoom in to an area that
[32:08] doesn't include the clouds. Something like that. It doesn't have to be perfect, but I'm going to make sure
[32:17] Actually, what I'll do is zoom in a little bit more. Okay. Okay. That's close enough. There's a few
[32:30] clouds in it, but that's okay. I just don't want the background in there, either. Okay. So, if you right
[32:38] click on Tanzania again, 1993, you click on properties, um um it has 5 4 3 in there. What we want to
[32:46] do is click on the min-max value setting and select mean plus or minus standard deviation of two.
[32:55] And then under statistics extent, instead of saying whole raster, we want to do the current canvas. So, that's just going to look at the
[33:04] statistics within this canvas and then we say apply. And now you see a huge difference in terms of what the image looks like and
[33:13] I'll click okay. And I'll zoom back out to the whole image and you can see how different it looks.
[33:23] You can still see a lot of clouds in there. Um, and we'll we'll talk about that in a minute, but you can see a lot
[33:29] more contrast between the areas that are vegetated and not vegetated. I I like this um band combination that uses the
[33:38] mid-infrared band because it it really allows you to look at things a little bit differently, but please feel free to
[33:44] use your own um band combination that you prefer. Now, I'm going to do the same thing to
[33:51] um the 2016 image. I'm going to go to properties. Actually, what I'm going to do is zoom in to begin
[33:58] with. I'm just going to zoom in right off the bat here. I'm going to go to Tanzania 2016.
[34:06] Remember, this is a Landsat 8 image, so instead of doing 5 4 3, we're going to do 6 5 4. So, band 6 in
[34:16] the red band, band 5 in the green band, band 4 in the blue band. We'll click on the min-max settings,
[34:27] again select mean plus or minus standard deviation, deviation, and instead of the whole raster we'll select current canvas and then
[34:37] click apply. And and you'll see the same sort of contrast in this image that we saw in the 1993 image.
[34:49] So, let me zoom back out to the whole image. Now, if you do a quick sort of
[34:54] comparison of the images so, these are the exact same location you will see you'll automatically already see some
[35:03] differences in the vegetation. Um and so, we're going to be narrowing down our analysis to a particular area in
[35:14] this image. Um one to sort of avoid the clouds, but two so you can um really see
[35:21] some of the vegetation change that's that's going on in this image. So, we're going to clip clip the image to um to a smaller area
[35:34] and in order to clip the image, we'll go to raster at the top here. Extraction Extraction and clip raster by extent.
[35:49] So, the first image we'll clip is the 1993 image. So, make sure it's selected here. Tanzania 1993
[36:01] There it is. And we've already identified what the um coordinates are for this clipping extent. Um so, you'll
[36:10] need to look at your exercise, your written exercise for the exact numbers, but I'm going to type them in here.
[36:18] So, the coordinates are 3 3 4 4 2 3 7 5 and then comma for the next one.
[36:28] 393 255 and then another comma and then a negative 1113255 and then a comma and then a negative 10
[36:47] 6 6 8135 You can also draw a box that allows you to draw a box if you want to, but since
[36:59] we want to do the exact same clip for both images, um we're just going to use these these coordinates.
[37:07] And then you're going to want to save it um again to not a temporary file, but a save it
[37:16] to a file and call it and this particular image will be called Tanzania 1993_clip um dot tiff. So, as you can see I have
[37:28] already done that. So, I'm just going to cancel this. Um you'll run it in the background and then
[37:35] again a temporary image will show up um in your layers, so you'll have to display the clipped image. Um so, I'll
[37:42] do that now. Bring up 1993.clip 1993.clip is right there. We'll open it up and we'll add it.
[37:58] And close this. And we'll show you what it looks like here. Hopefully I put it in the top.
[38:12] Sometimes it doesn't want to go in the top. There we go. So, you can see the area here that we clipped. The colors
[38:18] again are a little um not exactly what we want, so we'll change the colors in a minute.
[38:23] minute. But, you can see the area that we're going to be focusing on. So, the next thing we'll have to do is,
[38:31] um, um, clip the 2016 image. So, again, we go to raster, extraction, clip, clip, um, um, and what you can do
[38:47] is you can actually use, um, an existing layer. And you can pick your clipped image, um, to clip to that area. So, that makes
[39:04] it a little faster where you don't have to type in the coordinates. And then again, you're going to save it
[39:10] to a file here, and we'll call it Tanzania 2016 {underscore} clip, which I've already done, so I'm going to bring
[39:18] that one up. And there it is. So, I'll open that. And then we'll add it. Okay, so now we have two clipped images.
[39:40] I'm going to zoom in. And again, it looks I'm going to put the 1993 1993 on the top.
[39:49] Um, so the colors are a little weird, so let's just go back and change into something that looks a little nicer.
[39:55] Again, we'll go, um, we don't have to worry about the clouds in the background on this one.
[40:01] So, we can just do our standard deviation if we want and apply it. Oops, we have to get our bands right. That's
[40:09] the important thing here. So, we need five, five, four, four, and three, um, and then apply, and there we go. I'll move it aside
[40:20] there. It looks a lot nicer now. And we'll do the same for 2016. 2016. So, I have to remember that we want band
[40:35] uh, six, five, and four. We'll do apply. apply. And there we go. So, So, just take a look at these images for a
[40:52] minute. minute. Right now, we have 1993 showing on top, but if I click that one off, you'll see
[41:03] you'll see two things. You'll see a lot of areas where there was no vegetation in 1993. So, those are
[41:12] the pink areas, um, but then became vegetated in 2016. And then you'll see a lot of the
[41:21] opposite, too, where you see vegetated areas areas that are green in 1993, but then became unvegetated in 2016.
[41:32] So, what we're going to show you is ways to, um, in one image, ways to make each
[41:39] of those kinds of changes really, really pop out. So, the first thing we're going to do is
[41:55] we're just going to look at a single band of, uh, um, imagery for each date. And actually put those bands together
[42:06] into one image. Um, and this is sometimes a a quick and dirty way to look at to look at change. Unfortunately
[42:15] with QGIS, it doesn't make it quite so quick, but other software packages allow you to do it a little bit a little bit
[42:24] easier, but I wanted to show it to you anyways because it's a really great way to to to visualize change. So, for
[42:34] this this part of the exercise, we're only going to be using the near-infrared band for each year. So, for the Landsat 5, that's
[42:43] band 4, and for the Landsat 8, that is band 5. So, we'll want to clip clip the band 4. I'm going to go to raster
[43:01] extraction. Again, clip by extent. Okay, and I'm going to pick band 4 from Landsat 5, which is right here.
[43:19] I'm double-checking to make sure I get it right. Landsat 5, band 4, okay. And then your clipping extent is going
[43:25] to be the same as the 1993 image. So then you can use the layer canvas extent. You can clip You can select your
[43:34] clipped image. And then you can give it a name. And we will call it tan 1993_ I call it B4, or you can put band
[43:50] 4_clip.tif. So, you'll put that here in the clipped part. And then you'll run it in the background. So, I already have that
[44:00] done, so I'm just going to display it now. And show you what it looks like. I just got to find it now.
[44:14] Here it is. So, tan 1993 before band four underscore underscore clip. clip. I'm going to open it
[44:27] and add it. Okay, so that's just the near infrared band. band. Um I'm going to turn off the
[44:37] all the bands and so that's what it looks like. It's just a a gray level since it's only a single band. So, we're
[44:43] going to do the same Basically, you do the same thing for uh band five for the Landsat 8 and I'm going to bring that
[44:51] one up. I won't show you how to do that again since you all know how to do uh
[44:54] clips now. One thing I noticed is I actually gave it the wrong um label. 2016 tan 2016 I said underscore band four,
[45:08] but it's really band five. So, I apologize for that. Um underscore clip, but it truly is band
[45:13] five. I just gave it the wrong name. Okay, so we'll add that one, too. So, now what we have to do is we have to
[45:27] merge those two images together. So, we've done merge before. Again, it's raster raster miscellaneous miscellaneous merge merge and we're going to
[45:43] select those two bands. The They both say band four, but one should say band five. five. These two bands right here. 1993 first.
[45:54] Actually, what we want is the 2000 um and six first because um you can do either way, but it just makes
[46:01] it a little easier and that's what we have described in this exercise. So, you can actually move this up.
[46:06] So, 2016 is first. So, you select these two and then say okay. So, those two are selected. Make sure that you click this
[46:16] right here. Place each input file into a separate band. It's very important that you do that. And then um we're going to
[46:24] give it a name. And we're going to call it NIR_2016_1993_clip. So, I've already done that, and I will
[46:37] display that now. Hopefully, I gave it the right name. Here it is. NIR_2016_1993_clip. So, that's our merged
[46:54] near-infrared files into one file. And we'll say add. Okay. Now, it looks a little weird because because um
[47:05] um there's two bands in there, so so there's some color. But, we're going to um display the bands so you can
[47:12] interpret the color a little bit. So, we're going to go to symbology on your clip image. So, you right click again, go to
[47:22] properties properties um and symbology. All right, it's We say multiband colors. So, now what we're going to do
[47:33] is in the red band, we're going to put band two, which is the 1993 near-infrared band. In the green band, we're going to put
[47:45] band one, which is the 2016 near-infrared band. And then in the blue band, we're going to put band two again.
[47:59] And you'll see why we're doing this um in a minute. Now, what happens is, if you notice,
[48:06] even if you were to click apply, that there's no values in the blue band right here. So, what we'll need to do is just
[48:15] copy within the blue band up here into the blue band down here. So, the minimum is is 1989.03.
[48:29] And the maximum is 2918.84. Um and then we can go ahead and click mean and standard deviation, that's
[48:42] fine, and we click apply, and now our image is going to look really different. So, what we see is a lot of purple
[48:51] and green and gray. So, what does this mean? What this means is that everywhere you see purple,
[48:59] there's been a decrease in vegetation between 1993 and 2016. And everywhere you see green, there's been an increase in vegetation
[49:11] between 1993 and 2016. And all the gray areas in there are is basically no change. And the lighter the color, the
[49:21] less the change. So, this actually gets at at you know, amount of change to some degree. degree. So, for example, if we if we zoom into
[49:33] an area where there's let's say a lot of we can do a lot of green and purple. I'm
[49:39] going to zoom in down here. Okay. I'm going to turn off some of these other I'm going to bring
[49:58] Actually, I'm I'm going to bring Tanzania 2013 down here. I can't. There we go. I'm actually going to get rid of these,
[50:17] too. too. We're getting a lot of images in here that we don't need now. Okay. Oh, we don't need this one, too.
[50:34] Okay. So, as you can see in the uh near-infrared image right now, we see a lot of green where the vegetation has
[50:44] increased between the two years, and we can confirm that by looking at the 1993 image, where you see in that area
[50:52] there's no vegetation. It's all pink. And then by 2016, in this area is green. So, it the
[51:03] vegetation um has increased in those particular areas. And likewise, if you look Well, let's go to another area.
[51:13] Let's go to a area that has a little more purple in it. So, let's say in here.
[51:21] It has a little green and purple, but let's just focus on these purple areas right here. And turn that off, and you can see in
[51:29] 1993 there's vegetation, and in 19 and 2016 there's no vegetation. So, it gives you sort of a a
[51:38] really really quick idea of where change has occurred, and to some extent, you know, depending on the intensity of the color,
[51:49] the intensity of the change as well. So, that's the end of the first part of this exercise.
[52:01] So, then part three of our exercise is to use a transformation, um which will apply to each date of our
[52:11] imagery, and then uh subtract one from the other to look at changes. Um and that allows us to um
[52:21] really get at, again, not only where the changes are and the extent of the changes, but to some extent the
[52:26] intensity of the of the changes. And get that in one image. Um as you with the last exercise, we can visualize
[52:36] the change, but it's not easy to quantify that change in this particular approach. approach. Um this next approach, again, will be
[52:44] more for visualization, um and less for quantification, although we could do that a little bit more with
[52:50] this approach. Next week we'll be able to actually quantify some of the change that we're seeing. So, there's If you look at the exercise,
[52:59] especially on page um on the when uh starting with part three, there's a lots of different kinds of transformations
[53:07] you can use uh to do uh image subtraction. There's NDVI, uh there's the EVI, um and there's the normalized
[53:17] burn ratio. There's a lot of other transformations that you can do as well. It just depends on your study area, um
[53:24] and really what kind of change you want to be looking at. We're going to be using the normalized
[53:29] burn ratio, um even though we aren't looking at burns in this area. I really like the inclusion of the shortwave
[53:37] infrared band because it allows you to look at different aspects of vegetation, um vegetation moisture, um um soil
[53:45] moisture, those kinds of things. So, it gives it um gives you a little more information than if you're just looking at the uh near
[53:54] infrared and the red band. So, we're going to be doing um NBR transformations on each of the
[54:02] dates. That's the first thing that we're going to do. Um before I do that, one I have a little clean up to do um
[54:12] with my QGIS window. So, I am just just going to get rid of all of the imagery I don't
[54:20] need need at this point. Just remove them. The other thing that I realized I've neglected to do is remind you all to
[54:34] save your project. And you can save it as whatever you want. I've actually saved it as um exercise one,
[54:45] but make sure you do that. Probably be better to do that earlier early on in our exercise.
[54:51] Um Um but I'm going to actually just save it. Uh save it right now. I'll save it as
[54:59] exercise one. It says it already exists cuz I already um made it once, but I'll just say yes.
[55:07] There we go. So, just remember to save often if you want to do this over multiple days. It'll It'll save you a
[55:13] lot of um pain later on. Okay, so I'm just going to move this clipped image um this NIR image down kind of to the
[55:25] bottom cuz we aren't going to be using that very much um either. So, the first thing we're going to do is
[55:32] calculate the normalized burn ratio for both 1993 and then for 2016. So, in order to do that, we need to use
[55:42] raster calculator. So, we'll go up here to raster and then raster calculator. And the expression we're going to use,
[55:53] so again we're using the near infrared band and the mid infrared band. Um this is Landsat 5 that's because 1993, so
[56:02] that's bands 4 and bands 6. So, our expression will be and it's written in the exercise, so I recommend
[56:11] that you take a look at the exercise to get the Make sure you get the expression right. It's 1993
[56:18] um um clip 4 minus 1993 band 6 this is here and then put the parentheses in there
[56:34] divided by band 4 plus band 6 band 6. Okay, and I always for- forget these parentheses, so I'm going to add it in
[56:50] there. And this one at the end. Okay, and when you get the expression right then down here it says expression
[56:59] valid, so I know I got it right. Now, we need to give it a name. So, this is the 1993, so we're going to
[57:07] go to our exercise one folder um and we're going to call it NBR NBR uh uh 1993.
[57:20] _1993.tif And you save that. And everything else stays the same and then you say, "Okay." So, it automatically creates that TIFF
[57:37] um pretty fast. As you can see, it's kind of hard to interpret that image. Uh so, we can
[57:48] change how it looks by going into the symbology again. And we'll keep it We don't want it
[57:55] single band gray, we want to give it some color, so we'll call it single band pseudo color.
[58:03] And the color ramp is spectral, which is fine. fine. Um since we aren't going to be We're
[58:11] going to be doing some subtraction with this imagery, so I'm not too worried about the the values at this moment. Um
[58:18] so, I'm going to keep the values as they are, are, and just say apply. We can We can change the values to give
[58:26] it a little bit more meaning, but um I'm just going to keep it like this for now.
[58:30] So, when you look at this image, what you're seeing um is basically wherever there's there's red to sort of the orange and yellowy
[58:40] colors, that's that's less vegetation. So, if I were to compare that, say, with the 1993 image, you can see that those
[58:47] areas areas correspond with areas where there's no vegetation. vegetation. So, that's what we're looking at here. And then the blue and the green areas
[58:56] are areas where there are where there is vegetation, okay? So, we're going to do the same thing for
[59:03] the 2016 imagery. We're going to create an NBR image. Um just remember that the band combinations are a little bit
[59:10] different for the 2016 imagery, since it's a Landsat 8. So, you instead of bands 4 and 6, you're going to use bands
[59:18] 5 and 7. So, again, raster raster calculator um um 2016 band. I will I'll put the parentheses.
[59:32] parentheses. Band 5 minus band 7 parentheses divided by band 5 plus plus band 7 Forgot the parentheses again.
[59:51] Okay. Okay. And then we'll call all that NBR 2016 .tif up here. So, I've already actually done that. So, I'm going to just display
[1:00:03] it. And bring it up. Which I have right here. NBR 2016.tif. So, I'll open that up. And again, it
[1:00:18] will be um It'll be grayscale. So, we can actually give it the same scale um as the 1993
[1:00:30] image. If you right click on the 1993 image and you go to styles and you say copy style.
[1:00:40] You can go to the right click on the 2016 image. Go to styles and say paste style.
[1:00:48] And there you go. So, it has exactly the same same uh values and stretch that and then you can click
[1:00:56] kind of compare them to each other. If you click one off, one on, and one off, you can see which areas are not
[1:01:02] vegetated and which areas are vegetated. But to make this really um um more helpful is subtracting one from the
[1:01:13] other. So, the last thing we're going to do is go to raster calculator again. And we're going to subtract the 1993
[1:01:26] from the 2016. So, we have NBR underscore 2016. And we subtract it from 19 or we subtract 1993 from 2016.
[1:01:40] So, that's all that there is. And then we'll save the new um output layer. We're going to call it
[1:01:49] NBR underscore diff, which is right here. So, you can see I've already done that. And then you'll say okay and run it.
[1:01:59] So, I'm just going to bring up that image. NBR underscore diff and then open that. Okay. Okay. Now again, it's in gray scale, so we
[1:02:18] want to um turn it give it some color. That makes some makes some sense. So, we'll go to properties,
[1:02:26] symbology, symbology, and then we'll change the single band gray to um single band pseudo color. We'll go ahead and use the same color
[1:02:36] ramp. But, what we want to do now is make these values a little bit more meaningful. meaningful. So, if you remember from doing uh from
[1:02:45] the lecture that I did, um everything that is zero means there's been no change. Everything that is
[1:02:53] negative means that there's been um some uh decrease in vegetation, and everything that's positive means that there's an increase in vegetation
[1:03:05] between 1993 and 2016. So, what we'll want to do is really take a look at the values, the range of
[1:03:15] values in this particular image. And one way we can do that is by looking at the histogram
[1:03:24] of this image. So, if I click on histogram, um you'll see that a lot of the values
[1:03:32] center right around zero. A lot of them are negative though, so um not exactly on zero. So, there's probably a lot of
[1:03:40] decrease in vegetation. Um and then you'll see the tails uh they start around -0.5 and positive 0.5. So, we can use this
[1:03:51] information information to change our um our values and our symbology. So, um I think a really good and we have
[1:04:01] this in our exercise as well, that if we have our break points at um um we can just double click on the value
[1:04:09] and we have the first one at uh negative point 0.5 and then the next one will be negative
[1:04:21] 0.25 0.25 and then the third one will be zero. And then the next one will be positive 0.25
[1:04:33] and the next one will be positive 0.5. And then the labels just so the labels come out okay when you display it,
[1:04:42] you'll want to copy do the same on the labels. labels. Um it will go to -0.5 -0.25
[1:04:54] zero zero You can also give these um you can give them names and stuff, but we'll just keep it like this for now.
[1:05:03] 0.25 and then 0.5 Okay. And now we'll say "Okay." So, now we have our change image. And what we're seeing here is the blue
[1:05:20] area is kind of the blue and the light blue uh represent increases in vegetation, and all the red areas um
[1:05:30] represent decreases in vegetation between 1993 and uh 2016. And what I recommend that you do is going to zoom in to some of these places
[1:05:42] to just um compare them. And I can do that right now. Like, we can come into this area over here.
[1:05:52] Um and And the other thing I want to point out in these images is you'll see some areas that are really sort of
[1:05:58] bright red and some areas that are sort of less red and that orange. Um and that kind of shows you differences in
[1:06:06] intensity of the change, and same with the blue areas. So, some of them are some big increases in vegetation, and
[1:06:13] some sort of more subtle. So, this gives gives you information about some of the subtle changes um that are occurring in
[1:06:20] the image. I'm going to turn these off, and then you can just use this to look at uh
[1:06:28] um um at the raw imagery. Um Um If you look at what's going on here, so increase in vegetation, this little blue
[1:06:36] spot right here, as you can see in 1993, there was no vegetation there, and then by 2006,
[1:06:44] there's vegetation there. So, you can see what's happening. But, this technique um really allows you to just
[1:06:53] focus in on the areas of change. Um and then everything that's yellow is really no change. So, uh it's hard to You'd be hard to
[1:07:03] quantify this at this point because it's a continuous image, it's not um it doesn't have um classes that you can actually quantify,
[1:07:14] which is what we'll do next week. So, we'll be able to create a classified image where you can actually quantify
[1:07:21] the change, but this allows you to really look at um where the changes are occurring. And then one last point I
[1:07:28] want to make is that again, we don't know the causes of these changes. So, you need to get information about on the
[1:07:36] ground or some other way about what has actually caused the change. So, that's the end of the exercise for
[1:07:44] today. I hope um that you were either able to follow it or you'll be able to follow it later. Um
[1:07:53] and if you have any questions while you're going through it later in the week, please feel free to to email me
[1:07:59] and we can uh we can walk through it and maybe address some of the issues um during next week's webinar.
[1:08:06] I want to uh give you our contact information, but we can open it up to questions that you might have.
[1:08:16] Um and uh otherwise, we want to thank you for joining us today. So, here's our contacts again. This is
[1:08:25] um my email address. Um my colleague's Amber McCollum's. If you have uh general ARCSAT questions, you can contact Anna
[1:08:32] Prados. Um and then again, our website is listed here. So, we'll go ahead and take some questions now.
[1:08:52] So, the first question that we have is what is the use of satellite data during leaf off season of rubber for plantation
[1:08:59] change detection. So, that refers to the example that we showed in the the lecture part of this webinar.
[1:09:08] And the answer is that rubber plantations as do other kinds of vegetation often have distinct periods with leaf on and leaf off. And so you
[1:09:18] can use that information especially if it's different than the surrounding vegetation to identify the locations of those plantations.
[1:09:29] With the satellite imagery and that's what they did in that particular study. And the second question for change detection analysis is it
[1:09:40] necessary to have same the same spatial resolution of satellite data? Can we do analysis with spatial resolution of 20 m and 30 m?
[1:09:49] So if you have different spatial resolution data you can do a visual analysis but you can't do like image
[1:09:56] subtraction or use any of the indices like we did it in this exercise. You need imagery that have the same spatial
[1:10:05] resolution in order to do that. Question three does one have to select different bands for to inspect different elements?
[1:10:18] So this goes back to some of the beginning webinars that we did like the introduction to remote sensing to answer
[1:10:25] some of these questions about visualizing the imagery. So the selections of bands for visualizing imagery it's a it's a very
[1:10:33] personal preference. So if you're looking at vegetation for example then using the near infrared band and either
[1:10:41] the red or the green color band is important. So some people look like looking at vegetation as red some people
[1:10:48] like looking at it as green some people look like looking at true color. So again I I I
[1:10:55] that you review the intro to remote sensing webinar that tells you why you might look at different band
[1:11:03] combinations and the importance of it. So, question four, can you share some guidelines on band stacking color selection? So, again,
[1:11:16] it's I think this question refers to what's similar to question three. So, color selection is again very very
[1:11:23] personal. Um and also again, if you're looking at vegetation, then using the near infrared band in either the green
[1:11:33] color gun or the green band or the red band is really important. Does Does the data need to be
[1:11:41] atmospherically um and radiometrically corrected for change detection? So, that's a really good question. I'm going to actually type um as I talk
[1:11:54] just so we can everyone can kind of see the answer. But, But, it it it it's best
[1:12:03] if the data can be um corrected, but because you are looking at change between two images, um often time you don't need
[1:12:25] to do the correction. If If it's If it's hard for you to do it. Now, it could be that you'll see
[1:12:35] additional change. Um you'll see some differences that may be due to differences in atmospheric conditions between the two years. Um so, which is
[1:12:47] why it's preferred that the data be corrected. Um but because you're looking at differences, um, the differences in
[1:12:55] that atmosphere correction in that atmospheric differences will be quite small. small. Um, but you just have to remember that
[1:13:02] when you're looking at at change between the two times. I'll type that in there. Okay, so hopefully you can all see that
[1:13:11] answer. answer. The question six, does the data need to be atmospherically Okay, it's the same question as question
[1:13:19] five. five. Okay, question seven. Some of the raster bands are not showing in the calculator. Do you know why?
[1:13:28] First it was only band seven, but now I've tried again all the other apart from band one are
[1:13:35] missing. missing. Actually, I don't know the answer to that question. Uh, I'd probably have to see your
[1:13:43] specific, um, QGIS. Uh, usually if you're if you're going to the right directory, you should be able to see all the bands.
[1:13:56] Um, and as long as the bands are in there separately, you should be able to see them. So, unfortunately, I'm not
[1:14:03] sure if I can help you with that. You know what I recommend, um, for you is that you take a screenshot and then
[1:14:10] email it to me and maybe we can troubleshoot a little bit. What are the equivalent bands in MODIS
[1:14:20] for this exercise? Um, so for doing the NBR, NBR, um, you know what? I'll have to look
[1:14:27] that up for you exactly what the equivalent bands for MODIS. We can give you um, a webpage
[1:14:36] and maybe, um, Selena and Amber, you guys can look up the webpage that identifies the MODIS bands and, um,
[1:14:44] put it in here. So, what we're looking for is the shortwave infrared and the the near infrared bands.
[1:14:56] How to measure How do you measure precipitation influence on vegetation values in a change detection um approach?
[1:15:06] That's also a very good question. Um Actually, trying to measure um um quantify uh precipitation influence on
[1:15:21] vegetation is going to be really challenging unless you have um unless you have precipitation information for that area
[1:15:29] at the same time that the land that the imagery was acquired. Um certainly, if you were to look at
[1:15:38] a couple dates of of imagery um that had different precipitation amounts, you would physically see a difference a greening
[1:15:48] difference between the two images. Um and then you could subtract them and you know, get some kind of some kind of
[1:15:54] numbers. But, if you're trying um um if you're trying to quantify that, that's going to be a little bit more
[1:16:01] challenging. There's a question now. Could you please provide information for a peers? Uh yes, we will um
[1:16:18] um give you the link um to answer 10 in a second. So, Amber, Sal, and I'm hoping you guys
[1:16:27] can um grab the link to a peers and also um for the MODIS bands as well. Which bands Question 11. Which bands are
[1:16:43] useful for analyzing urban change detection? detection? In subtropical areas, there's a lot of commonality between urban reflectance
[1:16:50] and dry river Oh, that's interesting. Yeah, urban's always hard. Um urban's hard because it gets mixed up with
[1:16:56] everything. everything. So, So, sometimes you can um um you can get at urban by looking using the that
[1:17:07] mid-infrared band and that shortwave infrared band um because of um kind of looking at moisture differences. differences. Um between urban if there's trees, for
[1:17:19] example, in the urban area, um that won't be in the dry river bed. But, I tell you um
[1:17:26] the difference between those two is often very challenging. And sometimes you have to use something else besides
[1:17:31] spectral reflectance to look at the differences differences um between the two. So, for example, if you're uh
[1:17:41] uh if you have a river um um if you have like a river layer, that's a vector layer, you can do some kind of uh
[1:17:51] um um buffer from that river layer to try to get at, you know, where the dry river
[1:17:56] beds are versus urban reflectance. There's other ways you can kind of try to separate out those two, but sometimes
[1:18:02] spectrally you just can't do it. It's just very challenging. And I see that um someone put in the
[1:18:12] uh link for Piers. Thanks for question 10. Ha. Ha. Uh question 12. So, your area of interest happened to be cloud-free. Yes,
[1:18:24] it did. Um we did that for a reason. Um uh what if the area of interest had
[1:18:29] some cloud cover? So, one of the things um that we will mention, especially next week will mention um is you if you have
[1:18:39] clouds in your study area, you need to do a cloud mask. And luckily, um, the surface reflectance data from
[1:18:47] Landsat imagery includes cloud information. So, you can use that to actually mask out those areas. Um, unfortunately, you can't
[1:18:59] see, um, underneath the clouds. You just can't do it. Um, and so you have to mask out that
[1:19:05] data using that cloud information from surface reflectance. Um, if you don't have that surface reflectance data or the cloud data, then you have to
[1:19:15] create your own cloud mask. And there's various ways, um, there's various ways to do that. Um, and we can give you some information
[1:19:24] on that later. So, there's a question here, if I want to evaluate loss and gain annually, will
[1:19:36] this method out will this methodology allow you to do that? Yes, of course, this will allow you to look at loss and
[1:19:43] gain annually as long as you have imagery that, um, matches the period of time that you want to look at. Um,
[1:19:50] that's the key here. Um, Um, also, also, probably, as I mentioned before, and sometime in 2019, um, we'll be doing a
[1:20:01] webinar on time series analysis, which really looks at enables you to look at, um, um, closer time steps. So, whether it's
[1:20:09] annually or monthly or something like that. Um, and it allows you to, um, quantify that change in in closer time
[1:20:19] steps. This you can do it with this approach as well. It just takes a little bit longer time to do it.
[1:20:27] A question, can we identify the tree types like big and small trees on Landsat data. That's a good question. Um
[1:20:34] trying to get at tree types is always really challenging um using Landsat data um in particular. Uh sometimes if they if they are
[1:20:45] spectrally different from each other so if the big tree types uh look spectrally different than the small tree
[1:20:52] types, then then yes. Um oftentimes though trying to detect differences between different tree types is very challenging because they are so
[1:21:02] spectrally similar. How do you explain the use of severity of fire to make change detection? So as
[1:21:19] I explained earlier um we used that ratio, so the burn severity ratio, the NBR that we used um is simply a ratio.
[1:21:29] It it allows you to look at burns, but it also allows you to look at any change
[1:21:34] anything about other characteristic of vegetation. So we could have easily used an NDVI, um we could could have used a moisture
[1:21:43] index. There's all kinds of different indices but that we could have used, but I like using the burn ratio cuz it
[1:21:52] includes the mid-infrared band which allows you to look at things like vegetation moisture a little bit better
[1:22:01] than just using the near infrared band. So So the burn ratio is typically used for burns burns but it is simply a ratio. It's a
[1:22:11] vegetation ratio, so you can use it for more than just burns. So there's a question about using about
[1:22:28] the more subtle land degradation detection. detection. It is It is harder to look at that. This approach that we use today certainly
[1:22:37] allows you to look at more subtle land degradation. degradation. Um although you can't quantify it, it really is uh more of a visual analysis.
[1:22:47] So, remember when we saw the darker colors versus the lighter colors, the lighter colors um tend to be a more
[1:22:54] subtle land degradation. Um next week when we do uh classification, classification, that approach will also allow you to
[1:23:05] look at more subtle degradation as opposed to the big um changes. So, again, here question 17 says, "Is it
[1:23:20] possible to make quantitative conclusions from values um in the NBR?" Um so, again, this is a continuous
[1:23:29] image, so it's going to be really difficult to quantify it. We can actually uh next week we will be doing a
[1:23:36] land cover classification. So, each class Each class will indicate some level of change, and that we can
[1:23:44] quantify. So, question 18 um could you explain more why you use NBR to detect changes when the NBR is an index?
[1:24:06] So, I explained why we use NBR before. Um an index will give you often more information than a single band might.
[1:24:17] So, if you're just doing image subtraction, you're you can only use a single band to do image subtraction.
[1:24:29] So, you could choose, say, the near infrared band and just subtract that and get very similar information to what we
[1:24:38] used. But, if you use an index, that actually allows you to subtract two bands, but it has more information in
[1:24:47] it. So, the NBR index, for example, has the shortwave infrared band and the near infrared band. Um and or you can use NDVI, which is the
[1:24:58] near infrared band and the red band. So, if you're doing the subtraction approach, you have to use a single band.
[1:25:05] You can use a single band or you can you can use an index. That gives you more
[1:25:10] information, which is why we use it. So, question 19. Can we subtract other changes to display only a change in one
[1:25:29] land cover type? So, I'm not exactly sure what this question means. Um so, I think it's asking, can we just look at, for
[1:25:44] example, only vegetation change or only urban change? So, these approaches don't allow you just to look at one change. It It looks
[1:25:53] at change across the whole image. So, anywhere there's change, you're going to see see in this case, either the red or the
[1:26:03] purple or the green. There's no way to sort of separate out that change. And in most cases, it's going to be
[1:26:11] really hard to do that in any approach because you're because Landsat or because satellite imagery is continuous across a
[1:26:21] landscape landscape unless you just select out the vegetation ahead of time, you're going to get change wherever it's occurring.
[1:26:33] If we want the question 20 says, if we want to observe the changes of the surface of the soil, is it
[1:26:42] possible to do that remote sensing data? That's a good question. Possibly. Um it depends on how large the soil is. Um I mean, if you
[1:26:55] have soil with no vegetation on it, you might be able to see changes in the surface of the soil. It's going to be a
[1:27:03] very subtle change. And it depends if the surface of the soil is changing because of difference in moisture or difference in soil type.
[1:27:16] Um usually for something like that, you might need hyperspectral data, not multispectral data, because the spectral differences between the different soils,
[1:27:28] whatever is happening to those soils, may be too small for something like Landsat to detect. Oh, here's a good question. So, question
[1:27:47] 21, pixels in Landsat 8 images have different radiometric resolution than the previous series. Yes. So, how can we
[1:27:56] make image difference? That's a great question. So, Landsat 8 images have are 12-bit and Landsat 5 images are
[1:28:07] 8-bit. So, we in this particular exercise, we use the surface reflectance data. So, all the imagery both the 5 and
[1:28:17] the 8 had been converted to surface reflectance, so they had the same value range. range. And that's important. Um
[1:28:27] that's an important thing to continue if you to consider if you didn't have the surface reflectance. One way to get around um that is to do
[1:28:40] these image ratios. So, compare an NDVI from one date with an NDVI from another date um because
[1:28:49] you're looking at the ratio of the pixel values, which NDVI for example, no matter what the uh radiometric resolution is of the
[1:29:00] imagery, will always go between -1 and +1. +1. So, that's one way of sort of getting around doing surface reflectance data,
[1:29:11] but in this exercise, we use surface reflectance reflectance um which then both images have the same values.
[1:29:21] Here's a question. What should I do when I deal with change analysis in grassland, which may be caused by
[1:29:26] delayed rainfall and not anything permanent? How do I take control of that? that? You know, that grasslands are really
[1:29:35] tough system um to do remote sensing in because they are so sensitive to uh rai- rainfall and um drought and
[1:29:45] things like that. So, So, you really have to think about what you're looking at if you're trying to
[1:29:52] look at say grazing land degradation, you know, due to overgrazing or something like that. You really have to look at
[1:30:04] the rainfall occurrences and try to time your imagery around sometimes when the rainfall might be consistent. That's a very difficult
[1:30:17] um um thing to do in grasslands and it's always been a challenge. Um we might be able to get you some
[1:30:27] references to some ways to look at change in grasslands. Um so we'll um if if you can email me um I'll try to get
[1:30:38] you some references on that. Can you use the top of atmosphere product for change detection? Um you you
[1:30:47] can but just remember that the the values the radiometric values um between Landsat 5 and Landsat 8 will
[1:30:57] still be different. So that's why it's best to get to surface reflectance. Does Sentinel 2 data give a better land
[1:31:07] cover change than Landsat? Um Um it depends what you mean by better. Um it certainly has a higher spatial
[1:31:15] resolution. resolution. So you might get more details details than maybe Landsat can give you but it it really is dependent on the type of
[1:31:27] change that you're looking for. Can this principle be used um around in coastal vegetation to differentiate between aqua planktons
[1:31:39] and the land surface vegetation in that area? That's a very good question. question. I believe it can be used. Um I know that
[1:31:49] there are similar indices that are used to detect um coastal vegetation um especially on the surface of chlorophyll
[1:32:02] and things like that. Um and I believe you can use the same approach to look at changes in the amount of chlorophyll
[1:32:11] um in the coastal regions. So, there's a question here. What differences have you noticed with this method and that of Class Light?
[1:32:21] So, um I'm afraid I don't know what Class Light is, what that method is. So, maybe you can Whoever asked that
[1:32:29] question can clarify a bit more. Oh great. Amber has found the um link to the Class Light method. So, we just
[1:32:39] haven't used those techniques yet. Maybe that's something we can look into and um think about doing at a future webinar.
[1:32:47] Thanks for the information on that. So, here's somebody who wants to look at landslides. Will the same band as used
[1:32:57] in this exercise be helpful be helpful? Um I would say yes, the same band would be helpful. Although, I encourage you
[1:33:05] all of you for any of your applications to try different band combinations. Um this This is a good one. I I really
[1:33:13] again like the inclusion of the near infrared band and the um shortwave infrared band. But, um every application is different.
[1:33:24] So, you can try this band, but I actually encourage you to experiment a little bit and try other band
[1:33:31] combinations combinations that might bring out whatever um change that you're interested in a little better. That's the fun part about doing remote
[1:33:44] sensing um and working with this software is there's not always one answer to everything. So, question 28 is asking about the best
[1:33:56] change detection method for detecting damage to crops. Um again, I think NDVI would probably be good for that one. Any of the vegetation
[1:34:04] indices, NDVI, um NBR. Um again, I really encourage you all to experiment a little bit with different vegetation indices. And in the
[1:34:16] exercise, we've given you ideas for looking at different vegetation indices for your study area. So, usually every anything to do with
[1:34:28] vegetation, vegetation, um the you know, NDVI, NBR will be useful, but please please um experiment for your own study area.
[1:34:43] What machine What can machine learning techniques bring to change detection? So, next week we will be using um random
[1:34:51] forest to classify change. And uh that's a really great way to uh use sort of a supervised
[1:35:02] classification approach um and and use machine learning to identify where change is in an image. It's actually easier, I think, uh
[1:35:15] to use that approach to identify change than it is to do a land cover classification because you have fewer
[1:35:23] classes. And I think it's easier for random forest, uh those kinds of approaches to identify change. Here's a question. Um is the conversion
[1:35:37] of rainforest into oil palm plantation well detectable with change detection methods? Um so, that was the example
[1:35:46] that we showed in our lecture, and they used um differences in um leaf on and leaf off
[1:35:56] to look at that. So, it depends on the surrounding vegetation. Uh often times, you know, once an area's
[1:36:04] been cleared, you can detect it then and see new plants coming up. Um it really depends on your study area, and I know
[1:36:12] there are lots of projects out there and publications publications that um address this issue. So, maybe we
[1:36:21] can we can find some of those publications for you. So, there's a question, is the extensification versus intensification
[1:36:35] detection possible through day change detection? So, that is a very broad question. Um Um if you could be more specific as to the
[1:36:47] extensification extensification or intensification of what? So, what is changing? changing? Um and really to answer any question
[1:36:57] about whether remote sensing or satellite imagery can look at change, you have to think about whether there
[1:37:06] will be spectral differences between the change you're trying to detect. detect. If there are no spectral differences, if
[1:37:14] you cannot see a spectral difference between one time and another with change, then you will not be able to see
[1:37:20] that change with satellite imagery. Oh, this is great. Amber just found a really great reference uh for using remote sensing to look at oil
[1:37:34] palm. So, we'll be uh posting these questions and answers um on our website, too. So, you'll be able to go back and take a
[1:37:46] look at some of these um answers as well as the references. Okay, so question 31 looks like it's
[1:37:56] um um clarified here. Uh talking about agricultural change. So, from grasslands to crops. So, again, the thing to think about is
[1:38:08] whether you're going to see some spectral change. And you can look at an image without doing any analysis to
[1:38:15] determine whether you think you might see change in the satellites or not. Often times, grassland spectrally looks
[1:38:24] very different than crops. So, without knowing the area that you're interested in, I would say it would be most likely that you'll be
[1:38:35] able to see a change from grassland to crops. crops. But again, I need to I would need to
[1:38:43] look at the area to determine that for sure. So, question 32, can we use a threshold to separate vegetated
[1:38:59] from non-vegetated areas in each year? Then do image subtraction to get a quantitative assessment of changes in
[1:39:08] vegetation. So, I'm trying to figure out exactly what you're asking. So, are if you're saying to do before you do the subtraction to
[1:39:28] try to separate vegetated from non-vegetated, then then you'd have to do some kind of processing to get to that point. So, whether it's a
[1:39:46] land cover classification of two different years and then subtract those, that's possible, but it's not preferred. Um and the reason is
[1:40:04] if you do a land classification on two different years and subtract those, you're not really getting at
[1:40:12] subtle differences between the two years that in the changes between the two years. A better way is to really use the raw
[1:40:28] imagery or to do some kind of index like we did in today's exercise and subtract those. The downside
[1:40:40] to that approach is that it's very difficult to quantify. Next week, when we do a land cover classification,
[1:40:50] we put both images together and we do a land cover classification, then it's easier to quantify that
[1:40:57] change. All right, everyone. I think we're going to wrap up the session for today and I want to thank
[1:41:11] everyone for attending. We had a lot of folks on today, so I hope it was helpful for you.
[1:41:19] And again, I want to remind you that if you have any questions, I will try to bring up our
[1:41:33] uh contact information again. And uh please feel free to email us. There we go. So, there's our contact information.
[1:41:50] Please feel free to email us during the week with any questions you might have. And please tune in next week, next
[1:41:57] Friday, when we will be having a a exercise exercise lecture and exercise again on advanced change detection using classification
[1:42:09] where you can actually quantify the change. So, thanks again, everybody, and we look forward to talking with you
[1:42:16] again next week.
