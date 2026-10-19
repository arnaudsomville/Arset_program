# Conducting a Change Detection Analysis, Session 2/2

`https://www.youtube.com/watch?v=-IOiwRJPtlY` · id 102 · 1:49:33 · module 85 — Visualizing Land Cover and Land Use Change with NASA Satellite Imagery

[00:06] Hello everyone and welcome to the second webinar on change detection for land cover mapping. My name is Cindy Schmidt
[00:14] and my colleague and I, Amber McCullum, will be giving the presentation today along with a guest speaker, Jenny
[00:22] Houston, for from Conservation International. Just as a reminder, this is the second of two sessions that we've had on change detection. And then
[00:35] with each session, we have a session A and session B that are repeat of each other, so you only need to sign up for
[00:42] one of these sessions, either session A or session B. All our recordings, the presentations, and the homework assignments will be
[00:50] found at our website listed here. And then following each lecture and the exercise, we'll have a Q&A session.
[01:03] For this webinar series, we'll have one homework assignment that will be available after this session and all
[01:09] answers must be submitted via Google Forms. You can also get a certificate of completion if you attend both live
[01:18] webinars and complete the homework assignment by the deadline. The deadline for that assignment is October 19th. You'll get the certificates about two
[01:28] month two months after the end of this course. There are several prerequisites for this course. The first is fundamentals of
[01:40] remote sensing, which you can watch from our website anytime, or if you have equivalent experience from a class
[01:48] course on remote sensing, that works as well. well. Also, we advise that you take the advanced webinar on land cover
[01:56] classification with satellite imagery. That's also available on our website. That's especially so for this particular exercise that you'll be doing this week.
[02:06] And you must download and install QGIS and all accompanying software. We have a link to exercises that will help you do
[02:17] that. You also have to download and install R statistical program and also download and install R Studio.
[02:29] Again, to access our course material, you can go to our website listed here. And then we also have it
[02:36] available through GoToWebinar today. So last week we did an introduction to change detection and also did a short
[02:46] exercise using QGIS. This week will be conducting another kind of change detection with QGIS and R. So today's agenda includes doing an
[03:02] overview of supervised classification. And then describing methodology for two-day classification and change detection. And that includes image
[03:12] preparation, developing training sites, a discussion on random forest, classification refinement, and lastly image post-processing. And then following that lecture by
[03:25] Jenny, Jenny, Amber McCollum will lead you through exercise two. So right now I'm going to turn it over
[03:35] to Jenny Hewson from Conservation International. Here you go, Jenny. Thank you, Cindy. And again, I am Jenny
[03:48] Hewson from Conservation International. And first of all, we will quickly discuss supervised classification. So, So, in image classification, it is important
[04:08] to consider that there are generally two methods, supervised and unsupervised. In supervised classification, the analyst is the expert.
[04:20] And the analyst uses their knowledge to generate expert-defined representative areas of known vegetation or land cover types.
[04:32] These are termed training areas or training data. And these are then used to train the classification algorithm.
[04:43] The algorithm then uses this information of known information to identify and label areas that are similar to the training data.
[04:55] Conversely, in unsupervised classification, classification, the algorithm drives the process. And it clusters pixels into class groupings groupings based on generally a number of
[05:12] user-specified user-specified classes. classes. The analyst then assigns each of the class groupings to a land cover class.
[05:25] So again, in a supervised classification approach, approach, the analyst defines the training data based on their knowledge of what is on
[05:34] the ground, and then they generate training sites, which can be done by digitizing a polygon, for example.
[05:42] And as Cindy mentioned in session one, this is all based on exploiting the reflectance properties of different materials,
[05:54] whether that is water, background, background, or vegetation. And these different spectral reflectances reflectances are called spectral signatures. Each
[06:08] material has a spectral signature. In this example above, we can see that water generally has a low reflectance,
[06:20] which is slightly higher in the blue portion, but then declines. Conversely, coniferous forests and deciduous forests have these peak and
[06:29] valley reflectances, which again we can exploit when we are classifying imagery. So, with this information, one is then able to build a training
[06:50] data set of mean spectral signatures for the various classes of interest, and then the classification algorithm uses this information to match
[07:04] unknown pixels with the mean spectral signatures of the classes of interest, and identify the best match or class for that pixel.
[07:24] Element two of this webinar includes reviewing the methodology for two-date on multi-imagery supervised classification and change detection.
[07:38] So, in the two-date supervised classification and change detection process. process. There is sequence of steps that are
[07:46] implemented in the methodology. And these include, first, a number of pre-processing steps. Importing the imagery, applying the
[07:57] cloud mask as needed, creating a two-date image stack, followed by enhancing the image in terms of stretching
[08:08] and exploiting different band combinations. combinations. Step three includes the development of training data sites that are then used to
[08:20] run the random forest algorithm, which will be implemented in R. Step five includes refining the classification by
[08:36] tweaking the training data to get the best classification possible. And then step six is the post-processing step.
[08:57] On the pre-processing side, we first need to deal with the presence of clouds. clouds. Clouds affect the ability of optical
[09:06] satellites to see the land surface. And persistent cloud cover is a factor in many areas of the world, especially
[09:14] in the tropics, and can result in incorrect classifications. So, the process of cloud masking aims to remove cloudy pixels
[09:26] in the Landsat surface reflectance products, which as Cindy mentioned in the first session, are generated using LEDAPS and more recently
[09:38] the Landsat surface reflectance code are supplied with a cloud mask layer in which pixels are flagged as clouds
[09:50] based on their reflectance value. And you can see an example of the cloud mask layer for Landsat 8
[09:59] in this figure on the right. So again, the analyst can use this mask to remove or mask out cloud in each
[10:09] image. The next step is to take the two images that have been cloud masked as needed and generate a stacked two-date
[10:26] multi-band image. In the hands-on exercise, this would include taking the date one image, which is a Landsat 5 image with six bands,
[10:38] bands one through six, and the date two image, which is a Landsat 8 image with seven bands, one
[10:45] through seven, and then stacking these into a combined image of both dates with all the bands, so we now have a new 13-band image
[10:58] in which bands one through six are Landsat 5 and bands one through seven of Landsat 8 will be in bands seven through 13.
[11:13] And again, you can see the bands in this new combined stack in the figure on the right.
[11:28] The next step in the classification methodology is to perform various imaging enhancements to improve the interpretation of the image
[11:40] and essentially highlight different features that are present. First, we can stretch the image by adjusting the minimum and maximum pixel
[11:52] value ranges used or by using the standard deviation of the pixels. To highlight the utility of different
[12:04] band combinations, we have a figure on the right and in the natural color or two-color band combination in the second row,
[12:15] we're capturing how our eyes perceive color. color. So, the red band, which is band three in Landsat 5 and 7,
[12:24] is displayed as red, the green band displayed as green, and the blue band displayed as blue. Conversely, the color infrared and false
[12:37] color band combinations or or color composites composites can be used to highlight, for example, vegetation vegetation by exploiting the different reflectance
[12:50] properties of vegetation in different portions of the spectrum. Again, as Cindy mentioned in session one. one. So, in this color infrared example in
[13:02] the top row, the reflectance of healthy vegetation increases dramatically in the near infrared. infrared. So, by displaying the near infrared
[13:12] band, which is band four in Landsat 5 and 7, and band five in Landsat 8, in the red filter,
[13:22] we get a bright red color for vegetation. So, how does this work in a two-date multi-band image such as the one we will
[13:40] use in the hands-on exercise? Now, instead of six or seven bands, we have these 13 bands all stacked into one
[13:53] image. image. And the beauty of this multi-date stack is that we can now highlight changes between the two dates.
[14:04] For example, if we place band 12, which is uh um shortwave infrared from date two in the
[14:13] red filter, and band five, which is our shortwave infrared from date one, in the green filter, and band eight, which is our
[14:22] blue band from date two, in our blue filter, we can see the change that has occurred between these two dates.
[14:34] And again, our example is from an area in Southeast Tanzania. Now, we have our stacked multi-date cloud masked image
[14:55] that we know how to exploit by stretching and using different band combinations to highlight different features, features, and we use this to develop training data
[15:07] sites that in turn will be used to train the algorithm. A few guidelines on collecting training data
[15:17] data include include making sure the training sites are distributed across the entire image making sure that both change and no
[15:28] change areas are captured. Keeping in mind that the size of the training data is is driven largely by
[15:38] the spectral characteristics of the image. image. In general, large training sites are reasonable for simple images. Conversely, smaller training sites are
[15:50] required for spectrally complex images. Again, the training sites need to be distributed across the entire image and
[16:00] they must capture the spectral variability of the image. And it's important to consider a little bit of housekeeping when dealing with
[16:18] the collection of training data sites to ensure consistency in the naming and labeling used. In a single-date classification,
[16:28] normally we would use a single digit such as the number one for forest, the number two for non-forest, number three
[16:37] for water, and so on. For a two-date classification, we are interested in capturing the transitions or the changes that have
[16:49] occurred between the dates. And therefore, we need to capture this as follows. So, forest forest or stable forest would
[17:00] be coded 1 1. One for the first date, one for the second date. One two would be used to capture a
[17:10] change from forest in the first date to non-forest in the second date. And code 21 would be used to capture
[17:20] non-forest in the first date and forest in the second date. And so on. Because we're using a decision tree
[17:39] classification approach, we do not need training data sites to be homogeneous. homogeneous. So, this means that when collecting
[17:50] training data, it is feasible to mix forest types and non-forest land cover types. However, it's important to capture the
[18:05] spectral range throughout that class. And if you have an image with with background pixels, which you generally will do when using
[18:19] Landsat, for example, you will need a class of that background area, which we generally assign the code 88.
[18:36] And now a few notes on supervised classification algorithms. They aim to classify the whole image by comparing the spectral characteristics
[18:48] of each pixel to the spectral characteristics of the training sites that have been collected. There are multiple different methods
[18:59] available. available. Some examples include the minimum distance, maximum likelihood classifier, spectral angle mapping, and random forest. In this webinar, we will use the random
[19:15] forest algorithm. The random forest algorithm is an example of an ensemble model, which means that it combines the results
[19:34] from multiple models. And the logic for this is that the result from this combination will be better than from a
[19:43] single model. It incorporates a supervised learning component, which means it gets better as it learns. And essentially, it uses two steps in
[19:58] that it takes a random set of the training sites, usually 2/3, and builds these multiple decision trees
[20:06] or classification trees. And then it uses the remaining third to both estimate error, as well as highlight the importance of
[20:17] each predictor variable in the process. The trees that are developed have branches, and these are called node,
[20:35] as well as leaves, which are termed class labels. As mentioned, there is a random component to each decision. Think of
[20:46] this as as a coin toss. And there is this continual learning component. The pixels are assigned to the classes
[21:01] based on a majority rule. So, this adds an element of voting in that each decision tree votes on which
[21:11] class the pixel belongs to. And finally, while in this webinar, the exercise will be based on spectral data,
[21:22] random forests have the ability to incorporate additional data into the decision process such as DEMs, climate layers, vegetation maps, soil maps, etc.
[21:38] and and can use both continuous or categorical data. A couple of advantages as well as limitations of random forests.
[22:00] In terms of advantages, there is no need for for pruning of the trees that are generated. Overfitting is not a problem for random
[22:11] forests forests and can be a problem in in other decision tree algorithms. It's not sensitive to outliers in the
[22:21] training data and it is easy to parameterize. The limitations include the algorithm cannot predict spectral ranges beyond the training data, which
[22:38] again reiterates the importance of capturing capturing all of the spectral range in the training data. The image classification process is is
[22:55] iterative iterative and the number of iterations will depend on the complexity of the image, the spectral complexity,
[23:04] the number of classes defined by the user, user, as well as the intended use of the final
[23:11] product. product. After each iteration, the user needs to review the results, to check the map accuracy, and then change and update the training
[23:25] data sites as needed, rerun the random forest algorithm with the new data, and then finally, conducting filtering
[23:38] as needed, and then checking the map accuracy again. The post-processing steps can include filtering, which can be used
[23:59] to remove noise or isolated pixels that may have been incorrectly classified in the image. In the majority filter process,
[24:12] each group of pixels are considered in the map. The filter assigns the predominant class to the central pixel,
[24:28] and and a user-defined number of pixels surrounding the central pixel may be used to change the class of that
[24:39] central pixel. And again, this post-processing step step aims to remove noise or isolated pixels from the classification.
[25:01] So, to recap the methodology for the multi-date classification and change detection process, step one and step two
[25:14] capture the the pre-processing that is needed in terms of importing the imagery, imagery, applying a cloud mask if needed, and
[25:23] creating this two-date image stack. Step two is to perform image enhancement and different band combinations to exploit the different characteristics of
[25:36] the image. The third step is to develop the training sites, and the fourth step is to run the training sites in the random
[25:49] forest algorithm. And in this webinar, we will be using R. Step five five is to refine the
[25:59] classification classification through this iterative process. And again, step six is the post-processing step. And now, I will
[26:22] pass this along to Amber and Cindy for the hands-on exercise. Thank you, Jenny, um for that really
[26:49] clear presentation. So, now what we're going to do is we're going to step through exercise two and
[26:56] go through the methodology that Jenny explained so very clearly. So as we've talked about first we're going
[27:03] to to stack the bands from two dates. We're going to generate training sites for our classification and then we're going to
[27:12] jump into the R software to run the random forest algorithm. algorithm. And then we're going to look at the
[27:20] change image that we create and apply a color scheme that makes sense to us and then then conduct some of the post processing. And
[27:29] we won't be doing multiple iterations here, but as Jenny mentioned that's a really important piece of this type of
[27:35] classification. So if you're running this in your own study area checking the accuracy and going back and and looking
[27:44] at how well you did is really important. And we do have a another webinar on our Arset website for accuracy assessment of
[27:53] a land cover map. So if you're interested in looking at the accuracy of your change map and conducting the iterations, we
[28:03] encourage you to go take a look at that webinar as well for some insight there. One other thing I wanted to mention
[28:11] before we we get started, we've used the QGIS 3.2 software in our previous exercise, but we also are going
[28:23] to be using the R statistical program as well as RStudio here. So those are important that you have
[28:29] those those ready to go and installed. And for the data we're going to be using two of the
[28:36] images we created in the week one exercise. So you do need to run that before you you jump into this. And then
[28:42] we'll be using the classification R script that's available on the Arset website as well. So, just make sure you
[28:49] have all of those ready to go and create a folder called exercise two on your computer before we get started.
[28:57] Okay, so you can follow along with me or you could just listen and maybe view the recording at a later date to to follow
[29:05] along with the exercise. So, what we're going to do first is we are just going to open up our QGIS.
[29:16] And what we're going to do is do the band stacking and a little bit of image enhancement.
[29:23] And so, this is similar to what we've done in the past. But, we're going to stack the bands from
[29:29] both dates. So, we're just going to start a new project. And I'm just going to make this full
[29:38] screen here. So, that we can see everything in our QGIS map. So, the first thing we're going to do is just navigate to our
[29:50] exercise one folder and add the 1993 and the 2016 images. So, we're going to go to layer layer
[30:00] add layer and then add raster layer. Navigating here to our folder and yours might look a little
[30:11] different. This is just how I have mine organized. organized. And we're going to go ahead and add in
[30:17] the two dates from last exercise, the Tanzania 93 clip and 2016 clip. Click on open and then add and then
[30:28] close. Now, what we're going to do is use the merge function to stack the bands of the
[30:37] two images. So, we're going to come up here to raster raster miscellaneous miscellaneous and then merge. And so, we're going to click on this
[30:47] these three dots next to input layers and select both of our images. And it's really important here that we have the
[30:54] 1993 image on top of the um 2016 image. We also want to make sure we place each
[31:04] input into a separate band. So, each of those files have multiple bands and in the new file, um the bands from both
[31:13] images will be included. We're going to keep the output type as float 32. And then here on the merged, next to
[31:23] merge, we're just going to save this to a file. And here I'm in my change detection exercise two and what we're going to
[31:33] um change this to is tan 1993. 2016 stacked. And we're just going to make sure that this is a TIFF
[31:53] file. If we specify {dot} TIFF here, that'll be just fine for us. Then click save. And now we're going to click run in
[32:04] background. And now the process has run and you can see we have a temporary merged file lists listed here.
[32:18] So, um for clarity in this exercise, so we can go ahead and close this. For clarity within this exercise,
[32:26] whenever we run uh some of these processes, um a temporary file is created and automatically add added to
[32:33] our our QGIS map. However, we're just going to go ahead and remove these temporary files and add in the files that are
[32:41] actually saved in our file structure. This isn't an absolutely necessary step for you, but it really helps um in
[32:49] making sure that we have the right file that we're using um appropriately. So, we're just going to um right click on
[32:55] this merged file and go to remove layer. And then we're just going to go in and add the layer that we just created. So,
[33:05] let uh layer add layer and add raster layer. layer. And now we're going to navigate to our
[33:12] exercise two, and you can see we have this stacked TIFF here. And so, we're just going to open that
[33:18] and add it. So, now uh we're just going to go ahead and save our project. Uh I'm a big fan
[33:30] of saving along the way so you don't lose anything. Um and we're just going to go to project and then save as, and
[33:37] you can save this as exercise two. And it'll automatically add the um QGIS file extension. Click save.
[33:50] Now, we're going to enhance the image like we did in exercise one. And um as I've mentioned, this new image will
[33:58] have the bands from both dates. dates. And we've included a link um within the exercise. So, for those of you that
[34:07] might be following along, we're on page four of the exercise, close to the bottom here. And we've added a link on
[34:14] um Landsat band combinations. And so, here's the link that we provided, and you can just see some common um
[34:22] band combinations and uh what bands they are to create these kinds of images. So, color infrared, natural color, and false
[34:31] color. Um so, we'll be primarily focusing on false color here. Okay, back to our map. So now what we're going to do is we're
[34:41] going to create duplicates of our stacked image in order to have essentially three different images. The first one displaying the bands of
[34:50] interest from 1993. The second one displaying the bands of interest from 2016. And the third displaying the change
[35:00] identified between those two images. And so we'll we'll then use these three images to define our training classes to
[35:09] to run our classification. So we're just going to create duplicates of this stacked image here. So we're just going to right click on
[35:20] this here. And then go to duplicate layer. So now we can see this copy here that was just created. And we're just going
[35:34] to go ahead and right click again and then rename this layer. And instead of copy at the end, we're just going to add
[35:42] 1993. 1993. So here's where we're going to display the bands from the 1993 image into this copy.
[35:52] Okay. So now we're going to do the same thing where we duplicate our initial stacked image. Right click duplicate layer.
[36:01] And then right click again and rename. And this is going to be our 2016 image. And then we're just going to change the
[36:16] name to this initial stacked one. Rename layer. And we're just going to add change at the end.
[36:27] And this is where we're going to display the bands from both dates that will highlight the changes in forest cover
[36:34] between those two dates. And what we're going to do just to clean this up a bit is we're just going to
[36:41] remove the initial clipped images. So you can highlight those both. Right click and then remove layer. And okay.
[36:51] All right. So now we have our three images that we're going to use to um compare here.
[37:04] So now what we're going to do is um we'll first turn off all the layers except for our 1993 layer.
[37:12] And we're just going to change the um bands that are in each of these um color channels to identify to be the
[37:20] bands of the '93 image. So we'll right click here and go to properties. And we're going to change this um band
[37:28] combination to 543. So five four four and three. And now you'll notice, as I mentioned, that we have 13 bands here
[37:42] cuz it's the bands from both dates. Okay. Okay. So 543. We're going to just modify our min and
[37:52] max settings. And again, this is just to um change some of the the visual colors that we are viewing. Doesn't really
[38:00] affect any of the values of the um layers themselves. But we're going to go down here to min
[38:09] mean plus or minus a standard deviation of two. We can keep this here as the whole raster. Um in exercise one we just
[38:18] uh down selected a specific area um of our Landsat image to remove the clouds. But since we've already clipped the
[38:26] image, we can just apply it to the whole raster here. So then we could click apply and okay.
[38:35] So now you can see the areas where we have forest identified in bright green and non-forested areas
[38:44] identified in the purple colors here. So now we'll just repeat these steps for the 2016 stacked image.
[39:00] So again, turn that image on and go to properties. properties. And now the band combination we're going
[39:06] to use are bands 12, 11, 11, and 10. And that's because these bands correspond to bands 6,
[39:25] 5, and 4 of our second date, so our 2016 date. Again, we're going to change the min-max
[39:36] value settings to this um standard deviation stretch, click apply, and then okay. So similarly, the green areas are
[39:48] forested in 2016 and the purple areas are non-forested in 2016. So if we just click these on and off, we can kind of
[39:56] already start to see how some of the features in this landscape are changing. Okay, so finally is to repeat this for
[40:07] the change image. However, we're going to be using some of different bands here. So right-click, going to
[40:13] properties. properties. Now we're going to set these to bands 13, 13, band five, and band eight. And so, Jenny mentioned this in um the
[40:26] exercise today, but what this is showing you are the shortwave infrared bands from the 2016 image, from the '93 image,
[40:36] and then we're using the blue band from the 2016 image. For the min-max value settings, we're just going to go ahead and leave the
[40:47] default set here because that looks pretty good when we um take a look. And then we'll click apply and okay.
[40:56] So, now what you can see are you'll notice that the areas that have lost forest land, or have been deforested
[41:06] from between 1993 and 2016, appear in purple. purple. And the areas in green are the areas that vegetation or forest has um regrown
[41:18] or expanded between those two dates. The areas that are dark, um this very dark green and black, uh those are areas
[41:29] that have not changed, um that have uh remained remained that were forest in 2000 and were forest
[41:37] in 1993, and were also still forest in 2016. And then the areas in white are areas that weren't that were not vegetated
[41:48] forested areas in either date. Um so, again, we can start to see some of these um differences in the the
[41:56] images here. So, now that we have these um three stacked images, we are going to create our training sites based on some of
[42:05] these features that we can now identify. So, in order to do this, we're going to create a new polygon.
[42:14] And we will do this by going up to layer and then create layer and then new shapefile layer.
[42:26] We are going to navigate to our exercise two folder and we're going to go ahead and call
[42:33] this training. And it's really important that you call it training and you spell it correctly in order for our our code to work later
[42:44] on in this exercise. So, just be really cognizant of that. And it's a training shapefile shp. Click save.
[42:57] We'll keep our file encoding as UTF8. This may or may not be the default depending on some of the versions are a
[43:05] little slightly different between Mac and PC, but just make sure that's um UTF8. We're going to change the geometry
[43:12] type to polygon cuz we're going to create polygons. And then um we're also going to make sure that our
[43:22] reference system is this projected reference system. And again, the names might be slightly different. It might have project at the beginning or the end
[43:32] of the name depending on if it's a Mac or PC, but um just have making sure that it's the
[43:38] projected um WGS84 UTM zone 37 north. And this is in order to have our new polygon shapefile match the coordinate system of
[43:52] our Landsat images so that it all lines up and is found in the same spatial place. place. Under new field, we're going to type in
[44:03] notes here cuz for each polygon we create, we're going to make a little note on um what kind of change we're
[44:09] observing. And then the length we can go ahead and change to 20. And then we want to make sure we click
[44:19] on this add fields to list so that we see the notes down here. So that'll just be another feature in
[44:26] your attribute table for your shapefile layer. layer. Then we're going to go ahead and click okay. Now you can see that we have a new
[44:41] training layer added to our map here on the left. And for this exercise, we are going to
[44:50] keep our uh change categories really simple. We are only going to identify forest to non-forest. non-forest. And then whether or not that um we see
[45:02] change or or not in those simple categories. categories. So again, if you're following along with us, we're now at um towards the bottom
[45:10] of page nine where you can see the cover classes and the code that we're going to give to each of these classes.
[45:19] So you may be working in an area that's uh much more um complicated. You might want to have many
[45:26] different classes. Uh you might want to look at things like urbanization so you could have an urban class maybe.
[45:32] Um but that presents some difficulties um um in in calculating accuracy and and things like that. Um so depending on what your area
[45:43] looks like, that's going to be what you want to use for your for your classes. But just note that um the larger the
[45:52] number of classes, the more training sites you have to create. And um the potential is there for less accuracy in
[46:00] your maps um especially with things like urban areas as those often have um low accuracy due to potential for vegetation within those
[46:09] urban areas and getting confused with the pixels. So, so we're keeping it really simple for you, but just to note that you can make
[46:17] it more difficult on yourself if you want. Okay, so now what we're going to do here is we're just going to make sure that um
[46:27] we have our layers in the right order. So, this makes um makes a little bit sen- more sense to us here.
[46:34] And we have our training polygon on top, our stacked change 2016 and 1993. So, we're good there.
[46:45] Now what we're going to do is start to draw some of these polygons. And the first feature, the first uh
[46:55] training type that we're going to do is going to be code 11. So, this is going to be an area where
[47:03] it was forested in '93 and is still forested in 2016. So, those are going to be the really
[47:10] dark regions that we see on our map here. here. So, in order to start to draw some of
[47:17] these features, we want to make sure that um we we click right click on the training polygon.
[47:24] And then we're going to click on toggle editing. editing. Once you do that, you should see a
[47:29] digitizing toolbar that pops up here along the top. What we want to do is we want to use
[47:37] this add polygon feature to create these training sites. Once you click on that, you'll notice that there's a crosshair that appears
[47:47] when we hover over the map. And that's going to be where we select our area. So, now we want to really zoom in to a
[47:56] region that we don't see a lot of change. So, we're just going to start simple. Maybe um take a look at this
[48:03] area here and zoom right in where we think it's a forest in both images. Again, um you can use your pan tool
[48:14] um the little hand to kind of move around. around. And what I really recommend is first we
[48:20] have the change image um shown, but then let's just take a look both years to see if we're still um kind of seeing the
[48:29] same patterns. So, So, we do see some pink areas of non-forested, but we do see some areas
[48:37] that really look heavily forested in both regions. And I'm kind of looking right in here now. So, it's really dark in our change
[48:47] image, image, green in 2016, also pretty green in '93. So, that looks like a good area for me.
[48:55] Now, I'm just going to again make sure I have my create polygon selected, and I'm just going to click on the map here. And
[49:04] you could see it starts to create this polygon. polygon. And then um clicking in four places and
[49:10] then to um stop the polygon from being created, we just left a right click, excuse me. So, once you right click there, you'll
[49:19] be asked to put in an ID and notes. So, our ID is 11, and our notes are forest to forest, four
[49:30] four. four. That all looks good, then we click okay. Now, you can see your polygon shown here.
[49:39] So, what we're going to want to do is repeat this step. Um so, this is a little tedious.
[49:45] Um so, bear with us. Uh you have to create multiple training polygons for each of those classes that you um want where you
[49:55] want to identify change or no change, right? And we want to make sure that we have enough pixels to select from when
[50:02] we run our training algorithm so that the training algorithm does a really good job. Um Um So you can be as particular as you'd
[50:12] like. like. Um I'm going to sort of maybe a little more quickly go through this process, but select about
[50:19] 10 polygons in each of these categories. So what I like to do sort of is zoom to
[50:26] the entire layer and kind of get it get started with another area. So this looks pretty dark and green and and both
[50:35] uh uh dark in the change and pretty green in both of these, maybe especially right over here.
[50:43] So again, I'm just going to come in and it's up to you which layer you have shown when you actually create your
[50:51] polygon. polygon. Whatever your whatever you're feeling. And then again, this is ID 11 and this is forest to forest. And what's really
[51:03] important here is that we make sure we get the ID right every time. If we have a typo with one of the IDs,
[51:10] it might create some errors in creating your classes later on. So again, I'm just going to zoom out so
[51:17] that we have two now. And as you can see, this process might take quite a while. while. But
[51:24] But the more you do it, the better you'll become. So again, this this looks like a pretty
[51:31] good area. Oh, it's also a good point that you always have to have your training file selected and then the add polygon
[51:39] feature before you can create your polygon here. So, as you can see, the more you do it,
[51:59] uh uh the better you should uh you should become. become. And one other thing to note is that it's
[52:05] it's pretty important to um um try to create your training sites and distribute them across the entire image.
[52:16] So, that really helps with um making sure you have kind of the spatial distribution distribution um that's useful here.
[52:27] Again, we're just going to go in and create our little polygon where we don't see much change.
[52:33] And you may or may not agree with my training sites. Um this part is a little subjective, so um it'll be a little
[52:40] different for everybody. Okay. So, now that we've created a some of training sites from the forest to
[52:53] forest, so the areas of no change, we are going to create some polygons for the next ID. And this will be areas
[53:02] that were forested in '93, but were not forested in 2016. So, these areas are going to be shown in
[53:13] this bright sort of magenta um purple in our change image that we see here. So, we'll first um just zoom in to an
[53:24] area that looks very purple in our change. change. And then we'll take a look. So, here is
[53:31] the 2016 image. It looks pretty bare, no no forested areas there. And then with our our 1993, we can see some green pixels. So,
[53:42] we know that there was forest and then there wasn't. So, now we'll just create a polygon in
[53:50] this area. And we're going to change this ID to 12. And the notes are forest to non-forest.
[54:03] Click okay. That's great. So, then we'll um zoom out and we'll do a few more of these areas.
[54:12] You can see some really bright regions coming up in our change image that are are very clear.
[54:22] Oop. And so, we need to make sure we have our training feature selected. And just um going in and selecting a lot of
[54:28] these um sort of purpley colors here. And again, I'm just now showing the 2016 image, but it's up to you um
[54:39] which which which uh date you want to view when you're creating your training features. So, this is forest to non-forest.
[54:51] And this is 12. Okay. So, then we'll repeat that process for about 10 or so training sites for the
[55:03] forest to non-forest category. Again, where we see these really bright magenta regions. And we want to get a
[55:10] good distribution across our image as well. So, now I'm going to move on to our um next ID, and this is going to be areas
[55:21] that were not forest in either region. So, this is going to be ID 22, and it's going to be non-forest to non-forest.
[55:33] So, these are going to be areas maybe that were urban in both images. And And these will be indicated as white in our
[55:41] change image. So, we can see there's a town here. There's another um looks like small village here. So, we'll really
[55:48] focus on these white areas. And this might be one of the more difficult uh training uh class types because we do see a lot of
[55:59] variability in these types of urban areas. Um but we'll we'll do our best here. So, I'm just going to uh go ahead
[56:05] and zoom in to this this very white area here. And again, you can see there's a lot of
[56:12] variety of pixels, but looks pretty uh pink in 2016 as well as in '93. So, again, just toggling back and forth.
[56:23] And I'm just going to go ahead and select select um some of these pixels here. Now, this category is going to be ID 22.
[56:33] And it's non-forest to non-forest. Okay. Again, it helps just to kind of zoom out, zoom to layer. And the change image
[56:48] really is the best, I think, for first identifying the regions where you want to zoom into. And then you can kind of go back and
[56:55] forth between the the two images and say, "Oh, okay. Those both look like non-forested in both of my dates."
[57:04] So, I'm just going to go in and select some of these pixels here. ID 22, again, non-forest to non-forest.
[57:15] Okay. Now, back to zooming out to the layer. And then what you'll want to do is add,
[57:25] as I mentioned, about 10 classes for 10 polygons for for this class as well. In the interest of time, we're going to
[57:33] go ahead and move on to our final category, which was not forest in 1993, but is forest in 2016. So,
[57:45] these areas might be areas of of reforestation reforestation um um or they might be areas where there was a
[57:53] fire close to or just before the '93 image, but then the the forest has re- regrown um
[58:00] in 2016. And so, these areas are going to be the bright green areas that you see in your
[58:06] map. map. So, we'll just go ahead and zoom in to this very green region here. In the change and then you can see 2016
[58:17] looks pretty green. '93 does not. So, this is going to be a really good area to choose our site.
[58:31] And for our final ID, this is going to be 21. And this is going to be non-forest
[58:38] to forest. And then put our change image back on. This area looks pretty good. good. Looks like uh we've had some regrowth
[58:53] here. Looks pretty green and looks pretty non-green. So, I'm just going to select some of this area here.
[59:17] 21 21 and non-forest to forest. Okay. Okay. So, again, we're going to repeat this process process for
[59:30] for many different uh training polygons. Here's another really good area where it looks um pretty green in 2016, but not in um
[59:44] 93. 93. And I'll just create one final polygon here. And you can see there might be some
[59:54] error here in in what I'm doing um as I create these cover types. Um Um and this also just kind of highlights
[1:00:04] the um usefulness of being very meticulous when creating your training samples. So, once you've done this for each of
[1:00:13] the the categories, and you have about 10 for each category, we're going to go um and right-click here on our training
[1:00:22] polygon, and then go to save layer edits. edits. And then we're just going to turn the top the toggle editing off so that we
[1:00:30] don't make any other changes. And again, it's always good to save your map along the way. So, now the next step that we're going
[1:00:40] to do is we're going to run the random forest classification algorithm in our R program. Um so, we're going to jump into
[1:00:49] to that. So, now we're going to minimize our QGIS layer and open up RStudio. Now, remember um
[1:01:08] you need to have your classification file saved somewhere on your computer in order to run this here.
[1:01:15] Now, you can see that I um once I've opened my RStudio, I was practicing with the script earlier, so it came up
[1:01:23] automatically. But if um you have not done that, you simply go here to open file, navigate to your folder, and then
[1:01:33] you can find your um classification R file, and then you'll just click open here, and you'll see exactly what I see
[1:01:40] in my um console. So, for those of you that are not very familiar or comfortable with R, we're
[1:01:50] not going to be doing a lot of modification of the code here. And RStudio is really great because it
[1:01:55] has a lot of point-and-click options. Um so, you don't need to really understand what's going on in this entire code. Um
[1:02:04] but just to give you a little um overview, everything that has this hashtag hashtag area and um and text here that's shown
[1:02:15] in green is our notes. So, if you want to read through this, you can kind of see what's going on with the script and
[1:02:23] um all the features, who created it. You can also look at the references in our exercise, and then you can start to see
[1:02:31] here where we have uh blue and black code is where um part of the This is actually parts of
[1:02:39] the code that are going to be running. So, um that's just a little note about the way that things are color-coded in
[1:02:47] the RStudio. Um you can also change these these color-coding um options. So, the first thing we're going to do is
[1:02:55] we're just going to set our working directory so that we know um so, we tell R to essentially look in
[1:03:02] the right place to find our images and our training file. So, we're going to come up here to
[1:03:08] session, session, and then set working directory, and we're going to choose directory, and then you're going to come in to your
[1:03:15] folder, your file structure, and just set it as exercise two. So, it's really important that you save everything just
[1:03:23] to that exercise two folder without any sub folders, so that R can actually access the right things.
[1:03:30] Once you've selected that, click open. And now we've we've set our working directory here. Then you should you should see the
[1:03:39] images if you have your files um option open here, you should see uh all your files in that folder here.
[1:03:49] Now, we just need to install a few really important packages. So, if we just come up here to tools and
[1:03:55] install packages, then you're going to type in these packages we have listed now on page 14 of our exercise.
[1:04:05] Map tools, and so if you start to type them in, you should see them pop up here
[1:04:09] automatically. So, uh map tools, and then we just want to space in between each of the packages.
[1:04:15] So, SP. If you don't see it popping up, that means you might not have the right version of R, so just um
[1:04:24] be uh mindful. mindful. And you need internet connection in order to um to um download these new
[1:04:35] uh packages. So, I'm just going through these five that we have listed. Okay, map tools, SP, ra- random forest,
[1:04:50] raster, and rgdal. Now, Now, you can click here on install packages. Then this process will run. You might
[1:05:04] see some um uh some red code happening here, and this is just um letting you know um sort of some attributes of the
[1:05:13] packages. Um but you should see that um the packages installed correctly with this black code showing up in your
[1:05:20] console. And then whenever R is ready to continue once everything's done, you'll see a little blue arrow.
[1:05:29] So that all looked good. I downloaded my packages. So now we just need to change two lines of this code. And the reason
[1:05:43] we're changing this is um very specific to each individual user. So you're going to need um to change yours to modify
[1:05:51] your code um a little differently than everyone else. So here, if we um if we navigate here
[1:06:02] down to line 65, you can see we have notes along the way. So we're just going to set our working directory.
[1:06:11] Now mine is already set. And this is the directory that you will have in the R code that you obtain. Now that's not
[1:06:21] going to work because the for you because your uh computer will be referencing a different um set of folders. So what you
[1:06:31] need to do here is just change each of these these to uh point R to the place where you have your
[1:06:41] documents stored. So this might be, you know, desktop, change detection exercise two, um whatever that may be. Just make sure
[1:06:51] that this is correct. Double check for typos cuz it'll it's um it needs to be exact. And um
[1:06:59] make sure that you have uh your your especially your stacked band image and your training um shape file
[1:07:07] all located in the same folder without any subfolders. Really important there. So, that'll be the first thing you change.
[1:07:17] And then the second thing you change is is very similar here in line 67. So, again, you can see
[1:07:25] this is referencing my file structure. You're going to want to change that to your file structure. And then, again, as I mentioned, having
[1:07:35] the training shapefile and all spelled correctly. Um, so this is essentially setting the working directory within your code. And then making sure that
[1:07:44] you're referencing your training shapefile when we run this classification system. Now, um, for those of you that might be
[1:07:53] interested, we've, um, included, uh, on the bottom of page 16 of the exercise, a little bit more information about what
[1:08:00] the the other pieces of the code are doing. And we're not going to run through it here, but, um, you can see,
[1:08:07] um, things like class numbers. These are the same classes that we created in our our um, training and the number of
[1:08:15] samples, etc. So, you can look through that code at your leisure. So, once you've done you've changed
[1:08:21] these two lines of code, everything should be good. Um, you might want to go up to file and then save your your code
[1:08:29] if you've made those edits. Now, what should happen is we should be able to click on source and the entire
[1:08:37] code should run. So, go ahead and click here. So, when the code is running, you'll start to see these, uh,
[1:08:49] notes coming at you from R. So, um, it created the training data to train the model, pixel values, and then
[1:08:57] you'll see this, um, little note here. And all you need to do here is type in um
[1:09:06] um any really any key besides those keys that it mentioned. So, I'm just going to type in K
[1:09:12] and then hit enter. So long as it's not C or S or N. So, I just going going to use K and now
[1:09:23] you'll see that um the the code is is essentially creating those random forest blocks blocks and training the model and running the
[1:09:34] processing um that Jenny mentioned. You also will see a little um image being created here along the side for
[1:09:54] each of the classes. We're not going to talk about any of that, but that's um more things you can investigate if you
[1:10:01] want to um sort of look at some of the uh attributes that that are happening here. here. Okay, so great. Our
[1:10:09] our our code ran. Um again, as I mentioned, if you want to assess the accuracy of your newly
[1:10:15] created map, um you can here look here at the confusion matrix. And so again, take a look at our um accuracy
[1:10:22] assessment exercise if you want more info on that. So, now um we are done with the running of the R code and we're going to
[1:10:32] go back to our um QGIS to analyze the map and do a little bit of cleaning up.
[1:10:39] So, you can go ahead and minimize this and we're just going to jump right back in to our um
[1:10:45] exercise two of our um QGIS. If you want to double-check to make sure that your code ran properly, you can
[1:10:54] just take a look here at your exercise two folder. Now, what you should see, and most importantly, is this new stacked class
[1:11:03] TIFF. And this is where um we've classified our change image. So, that's there. That's all good. We're
[1:11:12] going to go ahead and add that layer into our map. Now, you'll see here um again, this may
[1:11:29] be a slight variation depending on Mac versus PC. You'll either see one through four, or you'll see 11 through 22. And
[1:11:38] so, these are just those categories that we created in our training file. So, we're just going to come in and um just
[1:11:46] really make a few different symbology changes um and take a closer look at this. So, right click, go to properties.
[1:11:55] We're changing the render type to single band pseudo color. Our interpolation, I'm going to go ahead and use exact here. It should work for
[1:12:06] linear or exact. For our mode, we're going to change to equal interval. And then for our classes, we're going to
[1:12:13] have four. So, now each of these four uh different values correspond to those four categories. categories. So, um
[1:12:25] we're just going to um change these colors and labels to um be more appropriate. So, one corresponds to
[1:12:33] 11. So, we're going to make this label going to double click here on this label, and this is our forest
[1:12:45] to forest category. And then we're going to change the color. color. and and um we can use standard colors and just
[1:12:56] change that to black. And click okay. Now, our second label, this is the forest to non-forest category.
[1:13:12] Two corresponds to 21. And we're going to change this color and we're going to make this color red
[1:13:22] to indicate deforestation. You can change these colors to something different if you'd like. Value three or 21 is non-forest
[1:13:34] to forest. And we'll go ahead and just change this to green. And finally, 22 or four is non-forest
[1:13:53] to non-forest. So, no change there. And we'll just make this yellow. Again, you can change this to whatever
[1:14:06] color you'd like. So, now we can click apply. Don't close this window just yet, but you can see our categories shown in that
[1:14:19] image. image. What we want to do is we want to save these colors and these categories because we're
[1:14:24] going to make some changes to our map and we want to use this these again. again. And I just noticed I had a typo.
[1:14:35] Forest to forest, forest to non-forest, non-forest forest, non-forest non-forest. Okay. Now we can apply. So, what we want to do
[1:14:45] here is click on this export color map to file. And we're just going to save this in our
[1:14:54] exercise two folder as class colors. Click save. And now we can click okay. So, as Jenny mentioned, we want to
[1:15:15] essentially look at the accuracy of our map and conduct multiple iterations of that entire training samples and random
[1:15:23] forest algorithm. So, we're not doing that here to save time, um but I want to recognize that that is an important
[1:15:30] process in um creating a map that has the kind of accuracy that's useful for you. you. So, what we're just going to do now is
[1:15:39] run a few processes to clean up the image a bit. The first is going to be that majority filter that we had um
[1:15:46] talked about before. To find the majority filter tool, we're going to come up here to processing and
[1:15:53] then toolbox. And you can see that I recently used the majority filter, um but you can go ahead and type in
[1:16:01] majority filter here and then you should find it um pop up here. And we'll just double click on it there.
[1:16:09] We want to make sure our stacked classified image is shown in the grid. We're going to leave everything else as
[1:16:15] default and then click here to save the file under filtered grid. And we're just going to call this
[1:16:26] We're going to call this image tan 93 2016 stacked class 3 by 3. And we're going to go ahead and save the
[1:16:37] file type as Sdat. And um this is just a a file that a type of file that's used commonly with QGIS. And
[1:16:46] click on save. And then click on run. And now this process will run. And what this is doing is essentially cleaning up
[1:16:55] our image and removing some of the noise in the image. And you'll see that after the process runs,
[1:17:04] the process list will disappear and you see a new image was just added to our map. map. So what we can do is go ahead and close
[1:17:13] the majority filter tool. Again, it's it shows up as this black and white gray color kind of image.
[1:17:22] And we'll just apply the same color scheme scheme that we applied to the previous image by right clicking and going to properties.
[1:17:31] Changing this to single band pseudo color. color. And then what we can do, since we've already saved our color class, is we can
[1:17:39] load the color map from the file. Click on class color that we just created. And look at that. It added all
[1:17:47] of our colors and labels appropriately. Saves us a lot of time there. Then we click apply and okay.
[1:18:02] And as I mentioned previously, what we want to essentially do is to color up our our create our images that we create when we
[1:18:14] export the file. And here you'll see filtered grid is just that temporary file again. And what what we're going to go ahead and do
[1:18:24] is remove this layer and and add in our actual raster that was created created just to make sure that we are doing the
[1:18:36] right thing here. So, our 3 by 3 S stat add close and then right clicking here, going to
[1:18:45] properties properties single band pseudo color coming in and adding that color class. Okay. So, now we can see if we turn on
[1:18:58] and off these uh the uh majority filtered image and the initial image, you'll see some differences in sort of these stray
[1:19:06] pixels in the speckle effect. So, it looks a little nicer there. So, we're going to apply one final type
[1:19:14] of filter and this is the sieve tool. So, again in our processing toolbox we are going to look up our sieve
[1:19:25] and I've just recently used this, I could find it here. Double click. We are going to use this 3 by 3 input
[1:19:35] layer from our majority filter. We're going to continually decrease the noise in the image, make it look a little bit more clear,
[1:19:44] make those classes more defined. We're going to leave the threshold default 8 to 10. We're going to click on use eight
[1:19:52] connectedness and this is just a feature of using eight eight eight pixels in a connected network in our sieve.
[1:20:01] And then we are going to save this save it to a file and then we're just going to add in
[1:20:11] S E at the end of this file to denote that it's this final filter method that we're doing.
[1:20:18] Click on save and then again run in background. background. So, now that was pretty quick as well.
[1:20:25] We're going to go ahead and close the um tool. tool. Again, I'm just going to go ahead and
[1:20:31] remove this temporary layer and add in the actual layer that we created created by navigating to my folder here.
[1:20:42] And you'll see it's this S that file here with the SE at the end. Click add. Close.
[1:20:52] Close. Let's go ahead and change those properties again. Very simply single band pseudo color opening up our color class
[1:21:01] clicking open apply and okay. So now what we can see is we can take a look at our our two different filters
[1:21:10] and our initial image and really see the differences here. So just starting with our initial image majority filtered image
[1:21:22] and our saved image. You can see how how much clearer those look as we click these on and
[1:21:28] click these on and off. So the final thing we want to do is just export this final map. We're we're happy
[1:21:37] with that map with this map. We're going to right click on it here go to export and then save as.
[1:21:45] We're going to save this here as a GeoTIFF. We're going to navigate to our exercise two folder
[1:21:54] and we're just going to save this as tan 1993 2016 2016 change final. Click save. And then um
[1:22:16] we'll make sure we're in this projected file file um um type and then we'll just click okay.
[1:22:25] And you know, if we want to change these properties, we can. We don't don't necessarily need to because it's the
[1:22:32] same same um um map that we just took a look at, but why not? So, now we have our our final change map
[1:22:40] here. So, what we can start to do is analyze these um changes in the map. You can see um
[1:22:48] there are quite a quite a lot of red areas where we're seeing deforestation happen. happen. This area in green, um maybe a previous
[1:22:57] fire that's now been reforested. Um and we can start to look at some of these patterns um
[1:23:04] across our image. And again, it's really important to look at the accuracy of your map. Um if you have any kind of
[1:23:10] ground data, that's really useful as well. Um so, um we can take a look at all of those
[1:23:17] things at the end of our um exercise. So, the final thing to do, just go ahead and save your map.
[1:23:24] And that is the completion of our exercise two. Um so, we'll just wrap up here um by
[1:23:33] um making a few uh comments about our um about our our webinar series as a whole here.
[1:23:43] here. Um again, just a reminder um that for the land management and wildfire areas of our set, you can contact um myself or
[1:23:52] my colleague Cindy Schmidt with any questions. Um we uh please contact our program um director Anne Apretus with any
[1:24:03] general Arset questions, and then our website's listed here. So, want to thank you all for participating in um this
[1:24:11] um more advanced webinar series, one of the most advanced that we've done. And so, now um with the time that we
[1:24:19] have left in the session, we will uh take your questions. So, I'll go ahead and start with the
[1:24:29] questions. questions. The first question is, "How can I apply the cloud elimination algorithm?" Um actually, the first two
[1:24:38] questions have to do with um with cloud masking. Um Um one thing I want to um um note is that I posted a link to a cloud
[1:24:52] masking plugin that's available through QGIS. QGIS. We haven't demonstrated it in this webinar, um but I highly recommend that
[1:25:02] you download that plugin and take a look at that. Um oftentimes, there is no set algorithm. algorithm. Um so, you can use the Q&A image
[1:25:12] provided by the Landsat surface reflectance product, and then um with QGIS or actually any other image processing or GIS package, you can use
[1:25:23] the raster calculator to figure out which pixels um what the what the pixel values are for the clouds and the cloud shadows,
[1:25:32] and you can create a mask and just eliminate those pixels from your image. That is typically the way that you do
[1:25:39] it. it. One thing that we're thinking about, based on the questions that we're getting, um is maybe doing a very quick
[1:25:48] webinar on how to do cloud um cloud masking. It will probably not sure if it will happen in 2019 or
[1:25:57] depending on our schedule, but just to let you know um that we think it might be a really good idea
[1:26:04] to show a short webinar on how to do cloud masking. So, now I'm going to jump to question
[1:26:10] three. three. Which Which of the two ways do you recommend to improve the visualization of the image,
[1:26:18] the stretch or the combination of bands and how to select one or the other way. So, my answer is usually you use both.
[1:26:28] So, you need to stretch the image to see the feature any of the features better. You always have to stretch the image. Um
[1:26:35] and then you need to use the different combinations of bands to see the image in color. So, the band combination that you choose
[1:26:43] depends on whatever your preferences um and whatever features you are interested in. in. Um this may be another great
[1:26:52] um um idea for a short webinar is to show the different band combinations and how they highlight different features. But, we
[1:27:01] did find a really great link that describes the different band combinations um specifically for Landsat 8, but you can also transfer that to
[1:27:10] Landsat 5 or 7 for looking at um different features. So, it gives you all different band combinations and what they're um good
[1:27:19] for looking at. So, I I recommend that you um take a look at that link. Question four.
[1:27:28] How can we reduce spectral mixing of different classes during unsupervised classification? So, in other words, two different types of vegetation having
[1:27:36] spectral similar reflectance. Um is it an inherent property of satellite data? So, So, a Landsat pixel averages the spectral
[1:27:46] reflectance of everything on the ground within that pixel. That's just how that works. works. Um so, Landsat pixel is a 30-m pixel.
[1:27:55] So, everything within that 30 by 30-m pixels averaged. So, in these classification processes, whether you're using unsupervised or
[1:28:04] supervised or whatever, there's really no way to get around that. Um the process is actually looking at the
[1:28:12] average reflectance. However, there are some unmixing algorithms that you can to some extent um it will give you an idea
[1:28:22] of what percentage of land cover is in each pixel, but that's not something we address in this webinar and it's it's
[1:28:28] also quite advanced. Question five, in the random in random forest it's not required to select pure training areas.
[1:28:37] Does this mean that you can select training areas without specific care? For example, can a class of latifolia be
[1:28:44] mixed with soil and other types of vegetation? vegetation? Uh so, it depends. Um it's always you know, although you can sort of
[1:28:53] get other kinds of land cover mixed in with your classes, um you can do that only if you don't have
[1:29:00] separate classes for those other things. So, for example, if you have a cloud class, if you're if you're wanting to
[1:29:10] create like a cloud class and you want to include shadows, then that class will be called cloud and shadow and you can
[1:29:16] include both clouds and shadows in that. So, in this case, if you have a certain type of vegetation
[1:29:23] that you're trying to um collect training information on and it's blended with other things, but that's the nature
[1:29:30] of that class, then you can include those other things in your class. So, there are lots of questions about um
[1:29:41] the random forest algorithm and um the R script. So, we're not going to be addressing specific information
[1:29:51] about the R script, but what I really recommend is that you first of all, you can go um this particular script was
[1:30:00] written by Ned Horning at the American Museum of Natural History. So, I want to give him huge credit for writing this
[1:30:07] great random forest R script. Um and you could and we've posted the website both here in this question and answer
[1:30:14] document and then I also posted it earlier earlier in the chat box. Um I recommend that you
[1:30:20] go there. There is some information additional information about the R script there. And then if you have
[1:30:26] specific questions about that script, I recommend that you email Ned. Um his email is is listed on that website.
[1:30:37] And ask him specific questions about that R script. Is it question seven? Is it important to have roughly the same number of pixels
[1:30:48] in each class when using this method? No, you don't need to use same number of pixels um in each class. You probably
[1:30:56] want to have a minimum number of pixels. Um you don't want to have a bunch of small um classes, but it doesn't you
[1:31:04] don't need to have the same number of pixels per class. Question eight. If I want to classify the type of crops
[1:31:14] in agriculture, which one is the is best among pixel-based and object-based classification? classification? Is it possible to classify crops at
[1:31:27] field level using Sentinel data? So, So, this webinar is really about change detection and not necessarily about land
[1:31:37] cover classification. Um and so if you could whoever asked that question, if you could send us an email, we might be able to
[1:31:48] give you some better information on agricultural classification um since we're just focusing on change detection for this particular webinar
[1:31:58] series. So, question nine. how do I use land change detection to map biological diversity and species distribution of animals with respect to
[1:32:14] change in their microhabitats? Okay, I think there are whole papers written on that question. So, again, I don't think that's something we can
[1:32:24] easily answer in this short Q&A session. So, if you could send that question to us separately, we
[1:32:34] might be able to um give you some references or later on I'll try to go back to this question and
[1:32:41] see if we can post it in this Q&A. The question 10, can we do this process if we have three or more images of
[1:32:51] different years? Yes, you can do the same process with multiple images. I also want to remind you um if you
[1:33:01] didn't watch um the webinar last week that sometime in 2019 we will also be doing doing a webinar on time series analysis, which
[1:33:14] allows you to do multiple time series um in one algorithm. And so, this particular one is really just looking at
[1:33:24] two or three dates. You can add another image um if they're in there if you wanted to, but there are some other
[1:33:31] algorithms out there that allow you to look at multiple dates um of imagery and process them. So, there's a question about how you can
[1:33:52] use your results to this is question 11 to look at iterating the process. So, typically what you do after a
[1:34:01] classification and in this case um using the classification to look at change is you analyze your training statistics,
[1:34:08] which we didn't do in this um class. But, um again, maybe that's another webinar we can do um later on, but you
[1:34:19] analyze your straight training statistics and this particular R code provide you with some outputs that you can use to analyze your training
[1:34:29] statistics and then you can decide whether whether the training sites are are good um or they're not good and you eliminate them.
[1:34:38] Um uh and then once you change the training sites, you know, whether you're eliminating them or you're adding more,
[1:34:47] some classes might be more, then you run the algorithm again. So, there's a question 12, could you
[1:35:00] explain if we could use ground truth points to classify the image in QGIS? Yes, you can use the ground truth
[1:35:06] points. points. If you have ground truth points, then you would create a shapefile based on those ground truth points and then you
[1:35:13] go through the same process um with points rather than polygons. Question 13 um has been answered. What is the
[1:35:28] difference between a S DAT image and a TIFF image? So, the S DAT file is a different type
[1:35:37] of gridded file that um one of the tools, Saga tools, use in QGIS. So, that's a tool associated with
[1:35:44] QGIS. QGIS. Um so, you will need to create those S DAT files um in those final post
[1:35:52] processing steps we did in exercise two, but you can always export the files as a TIFF if you're using them
[1:36:00] in either ArcGIS or QGIS or some other um, um, software. software. And there's a link um, um, that explains it as well.
[1:36:18] There's a question 14 besides random forest, which other machine learning methods are out there for image classification? We'll have to
[1:36:25] investigate that um, and give you some ideas. We're really just focusing on random forest for this particular
[1:36:32] uh, webinar. But I mean, you could easily do a search yourself on machine learning algorithms for for image classification um, and get that
[1:36:45] answer also. So, it says you mentioned in random forest for training data it's important for covering the entire brightness
[1:36:58] range. Um, how do you ensure your training data is doing that? It's a really great question. Uh, one way is to make sure
[1:37:07] that you're getting a good distribution of your training data. Um, the other way um, sometimes you don't actually know until you analyze
[1:37:19] your training site afterwards. So, again, we didn't do that in this particular exercise, but there are some products that are
[1:37:27] produced um, from the R code from the random forest algorithm that allows you to look at your training
[1:37:35] site statistics and it really gives you a good idea of um, how well you did in characterizing
[1:37:43] the spectral variability. Oh, Amber, you're actually I just answered question 16. So, the answer to that is question 16. Sorry.
[1:38:02] So, there's question 15, which I should have answered first. Uh Uh can I combine images with different spatial resolution and
[1:38:11] run random forest? I believe you have to have the same spatial resolution because it's comparing um it's for change detect detection
[1:38:21] especially, it's it's looking at the difference in spectral value between two pixels. So, if you have different spatial
[1:38:30] resolutions, resolutions, uh it won't be able it won't be able to look at the difference between two
[1:38:36] spectral values very easily. So, having two two images of the same spatial resolution is important. So, question is why did you choose to do
[1:38:52] the classification on R Studio, not QGIS or ENVI? Um we wanted to use random forest, which is available with the R code.
[1:39:06] ENVI, we don't do our webinars using ENVI because it's a commercial software package and many of our
[1:39:15] um registrants for this webinar don't have access to that package. So, we like to use open-source software
[1:39:23] whenever we can for our R set webinars. Question 18, how do we deal with the same random forest process
[1:39:35] if there are multiple years map? What will be the different band combinations for displaying the change? So, I'm not exactly sure what the
[1:39:54] question is here. Are you asking if there are more than two years? You can add a third year if you want. You
[1:40:02] just stack them all together. And then um it you know, for for looking at at imagery um stack together. If you're trying to
[1:40:15] look at one image and change over those two dates, then you can only do those two dates. But for processing, you can
[1:40:23] use multiple dates. Um and again, in 2019, we will be doing a webinar on time series, which allows you to look at more
[1:40:33] than two dates of imagery. It's a different kind of processing approach. Question 19, does cloud elimination algorithm affect the reflection after
[1:40:47] removing clouds from the image? No, it doesn't reflect affect any of the pixel values that don't have
[1:40:55] clouds um after removing the clouds. You literally just pull out those pixels from that image. Is it required to classify all spatial
[1:41:11] variation in an image that you are not interested in? Let's say for example, I'm interested in different forest types in wetlands.
[1:41:21] But I'm not interested in other forest types. So, usually with satellite imagery in an image, you need
[1:41:33] to classify all the variation in that image. image. Um even though you're only interested in one class. Now, if you can cut down the
[1:41:42] size of your image to just include the area that you're interested in, then you'll have less spatial variation.
[1:41:56] So, the last question, if I don't have ground truth points, is there any other way to assess the accuracy assess the
[1:42:03] accuracy of classified results? So, there's several ways you can do it. If you don't have ground truth points, you
[1:42:09] can use high spatial You can use higher spatial resolution imagery like from um, from Google Maps or Google
[1:42:18] Earth. Earth. Um, that's a visual interpretation that you would do. So, you wouldn't have to know that area ahead of time. You can
[1:42:25] also use other Landsat imagery. I mean, some people um, if they don't have good ground control points and you don't have
[1:42:33] access to aerial photographs or high spatial resolution imagery, you can actually use Landsat imagery to help you
[1:42:40] identify what those points are. It won't be as good as if you had ground truth, but you can do it that way.
[1:42:56] Somebody asked, "How good is um, there's a plug-in for QGIS for change detection?" Um, I I don't know the
[1:43:03] answer to that question cuz we haven't used that plug-in. So, there's a question, is the spatial resolution of the images important for
[1:43:38] picking pixel-based classification? Um Um if one processes, say, UAV images, maybe object-based is better. Yeah, typically um for high spatial resolution,
[1:43:52] uh people like to use object-based because because in in say, UAV imagery or in other high spatial resolution imagery, it's quite
[1:44:03] noisy, and so trying to do a pure spectral-based spectral-based um pixel classification can get very confusing. Um and so, a lot
[1:44:15] of people like to use object-based classification for that. And then, there's a question for what reason have you chosen standard
[1:44:31] deviation of two during image processing? So, standard deviation of two just is just a stretch you do on the imagery. It's a
[1:44:41] typical stretch that captures most of the spectral range of the imagery and cuts off the tails. There
[1:44:50] are many different ways you can stretch it. That's just a standard way of doing it. So, that's just a way we chose. You
[1:44:55] can choose a different way if you'd like. All right. So, question 25 is the question I was expecting.
[1:45:09] Surprised it wasn't asked earlier. Can you use a tool in QGIS to determine the percentage of area in
[1:45:15] each class? Um yes, you can. So, that's one thing we didn't demonstrate, and I will um um answer this question more specifically
[1:45:25] in the Q&A that you can look up afterwards, but um in QGIS QGIS if you go to the tools that include
[1:45:36] GRASS tools um on the right panel there's a tool called r.stats r.stats and you can use that tool to look at the
[1:45:48] area for each class. Actually, I'll bring it up right now so you all can see it. Hopefully, you can see my QGIS window
[1:46:04] right now. I have a different image up at the moment. It isn't the same image that you
[1:46:12] use, but I can still show you. This is a land cover classification um and to get the the stats
[1:46:26] you go on the First, you have to open the processing toolbox, which is up here. Click on processing and toolbox.
[1:46:34] And that brings up these tools on the side here. I'm going to close this so you can see
[1:46:41] it all. So, you see all the tools. You see GDAL, GRASS, um um SAGA, etc. So, if you click on GRASS and then you
[1:46:52] click on raster and you scroll down till you see r.stats It's right here. And you click on it.
[1:47:06] So, you can select your land cover map here here and then down here at the bottom you see
[1:47:14] where it says you can click print area totals or you can print cell counts um for each class.
[1:47:22] And you'll want to click off one cell range per line. So that allows you to get area totals or
[1:47:29] cell counts, whatever you want. Uh you can also print the category labels. Um but this is a great function for
[1:47:37] for getting the area for each class. Oh, and just to let you know, I actually am running the older version of QGIS on
[1:47:44] my computer here. It's 2.18. Um but I'm pretty sure it has the same function in the and the newer version as
[1:47:51] well. So at this point I think we're going to go ahead and um end the webinar for
[1:48:17] today. We want to thank you all for joining us. We had a great turnout today. today. Um I know there were a lot of questions
[1:48:24] um at not about change detection, but about classification. Uh if you want to send those questions to me,
[1:48:32] um um uh send them via email. That would be great and I'll be able to get I'll be
[1:48:37] able to answer them a little bit more thoroughly that way. It's hard to do it um in the Q&A period
[1:48:43] uh for this webinar series. So we hope you enjoyed it. Um let us know if you have any questions or any issues as
[1:48:49] you're running through the exercise this week. Um again, if you want more um answers about the specific script, I
[1:48:57] recommend that you go to the American Museum of Natural History website that we listed earlier. Um they'll be
[1:49:04] able to give you a lot more questions. Um and please let us know how you're using um
[1:49:10] all of these uh processes and algorithms in your work. We always enjoy hearing that. that. So thanks again, everybody, and uh we
[1:49:20] hope you join us for our our next webinar um sometime in the next few months. Thanks a lot.
