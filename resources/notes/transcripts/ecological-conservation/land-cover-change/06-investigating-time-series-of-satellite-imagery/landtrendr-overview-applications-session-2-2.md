# LandTrendr Overview & Applications, Session 2/2

`https://www.youtube.com/watch?v=5BZvjVUfBG0` · id 157 · 2:03:21 · module 90 — Investigating Time Series of Satellite Imagery

[00:00] Oh thank you all for joining us today this is session 2 of investigating time series of satellite imagery my name is
[00:10] amber McCollum and I will be your presenter for this training we have two two-hour sessions on April 15th and
[00:20] April 17th note that you only need to attend one session per day and the miss the same material is presented twice we
[00:30] just have two sessions for our international audience you can also find all the course materials listed on the
[00:36] website here this includes past recordings data links and homework exercises so we will have time for questions at the end of the session
[00:46] however you can also email myself or my colleague sandy Schmidt at our email addresses shown here we will have one follow-on homework and
[00:59] the homework should be available on the website now via Google Forms so you'll need to complete the homework and attend
[01:08] both of these sessions to obtain a certificate of completion also just to let you guys know that on the homework
[01:17] there are questions from both lectures and both exercises so it might be best to look at the homework while you're
[01:27] completing the exercises and then even maybe write your answers down on a separate sheet of paper or have them
[01:33] ready to go for when you submit them in the Google Form and there's a note about that shown at the top of the homework as
[01:40] well and as I mentioned you need to finish that homework by the deadline Wednesday May 1st that's two weeks from
[01:50] today and attend both live webinars to obtain the certificate of completion and it does take a little bit of time to get
[01:59] all of these certificates processed and out to everyone so do please allow for about two months before you will receive
[02:07] your certificate again here are the course prerequisites you should take our e-learning course introduction to remote sensing or have some equivalent
[02:21] knowledge you should also take our previous webinar on change detection for land cover mapping also for this session
[02:30] in particular we will use Google Chrome to conduct our exercise and it's also a really good idea to have a Google Earth
[02:40] engine account we won't actually be doing any script within the Google Earth engine code editor but you might want to
[02:52] if you're familiar with the language so it's great to have that account its free for folks to register and the link to
[03:00] sign up is as shown here so as I mentioned you can access all the course materials at our website shown
[03:11] here and this includes a PDF of the PowerPoint presentation and that will be available in both English and Spanish
[03:19] and a PDF of each weeks in class exercise and The Associated data that you need a link to view the recording of
[03:29] the webinar and then again the the link for the homework submission so in session 1 we provided an introduction to
[03:38] time series analysis and we completed an exercise with the LP DAC appears on line tool so in this session we will review
[03:49] other vegetation disturbance algorithms and focus on land render with an exercise at the end so this is our
[04:00] agenda for today's session we will first briefly discuss forest disturbance algorithms and then we'll talk in depth
[04:08] about the land render algorithm then I'll provide an overview of some other types of vegetation disturbance algorithms that you may be interested in
[04:18] and there's this really great review paper shown here Cohen at all from 2017 called how similar our forest
[04:27] disturbance Maps derived from different Landsat time series algorithms and so a lot of the material I'll present at the
[04:36] end of this lecture comes from that paper so that's a great place to go if you have questions about those specific
[04:43] algorithms and then finally we will conduct our land Trender exercise so first an overview of forest disturbance algorithms
[04:57] you you in order to assess change through a series of images various algorithms are used they can be used for general
[05:07] mapping of disturbance patterns across a landscape and for the establishment of relationships between human activities and drivers of natural disturbances with
[05:19] time series of data and information about ground-based activities you could establish the differences between things like Urban development's or tree
[05:31] mortality from insects they can also be used to map things like recovery of a forest after a wildfire event most
[05:40] algorithms use one of two primary approaches either they focus on a deviation from normal patterns or they
[05:48] evaluate long-term trends those focusing on the deviations use multiple dates to first establish some type of stable
[05:58] condition then you can separate true change from background noise others analyze trends to separate longer term duration events from year-to-year noise
[06:10] like phonology and vegetation in some instances algorithms can use both of these approaches so we will examine some
[06:20] of these later on therefore depending on your question or study area you may want to use one algorithm versus another
[06:31] additionally some algorithms are refined further to meet the needs of a specific region of interest some algorithms use different bands or
[06:42] indices in their analysis such as the use of the normalized difference vegetation index or NDVI or the
[06:50] normalized burn ratio or NBR they can also simply use specific bands of an image to analyze spectral properties
[06:59] some algorithms also work better primarily in forests or in all vegetation types that could include things like shrub lands or grasslands
[07:10] additionally some have higher accuracy for high magnitude events so these are things like really intense wildfires that have high burn severity while
[07:23] others are better at detecting subtle changes on the landscape such as those that pertain to insect on disease so for
[07:35] this training we're going to focus on the Landsat based detection of trends in disturbance and recovery or land render
[07:43] and this algorithm really performs well in a variety of applications and because it has this really great user interface
[07:54] via Google Earth engine it's a great use case to show in this type of training so first I just want to give you an
[08:04] overview of what that land Trender algorithm does and looks like so the land Trender algorithm was developed by
[08:14] Robert Kennedy's lab at Oregon State University and it recognizes that change is not generally a contrast between two
[08:22] dates but it's a continual process operating on multiple time scales and therefore this algorithm is really good
[08:31] for both short and long term events land Trender generates one yearly composite image and forms a Landsat time series
[08:41] stack or LTS and it does this across a date range of interest land Trender focuses on three
[08:50] primary components the use of yearly data analysis of each pixel from a year within this stack and the ability to
[09:00] temporarily segment events therefore preserving both of these short and long term changes we've also included the link at the bottom of the
[09:11] slide to that the kennedy paper that outlines land Trender so while i'll go through an overview of the algorithm
[09:20] here i want you to direct you to that paper for more more detailed questions so again going back to the process of
[09:32] what land Trender does first yearly Landsat mosaics are created to eliminate issues with data gaps clouds snow smoke
[09:44] and shadows for each image geometric and radiometric correction is applied then each image is normalized using a
[09:54] tasseled cap transformation in order to properly evaluate images that may have been collected from different Landsat sensors and to account for variability
[10:04] in things like brightness or sun angle then a composite image is used for each year in the stack
[10:15] so to explain this pixel-based approach a little bit more in order to assess the influence of gaps clouds etc each image
[10:24] in the time series was compared to a single reference image the tasseled cap transformation was applied and a cloud score and a shadow
[10:34] score for each pixel is generated based on the brightness and wetness values from that transformation these scores
[10:43] are based on a single reference image and thresholds are then determined if a pixel occurs if a pixel has a value
[10:52] outside of that set threshold it will indicate that that pixel has one of these issues and it's removed and
[10:59] another pixel from that years used the next pixel is chosen from the image closest to that in needy and Julian days
[11:08] of the image of the whole stack this is done iteratively until you have a pixel that meets the outline criteria so this
[11:18] is done for all pixels across each yearly mosaic and then that that stack is generated for each year of the date
[11:30] range that you are doing your analysis over temporal segmentation is used to capture both abrupt and slow phenomena
[11:42] in the Landsat time series by temporal segmentation we refer to modeling a pixels spectral time series as a
[11:51] sequence of straight-line segments that capture the broad features of the trajectory eliminating noise but not sacrificing sufficient detail
[12:05] so you can see this figure here on the right shows how the image data is reduced to that for each index and
[12:15] divided into these segments so the steps of this process essentially are to create a complex fitted model then
[12:24] iteratively simplify the model then choose the best model based on statistics of of the model and then
[12:34] finally to remove any change that is considered noise and again I really want to direct you to Kennedy's paper that I
[12:44] showed earlier on slide 13 for some of these more minut details so here's an example of the best fit model from
[12:57] multiple pixels in an image from the Cascades in Oregon along the top of this figure you can see three dates 1984 1995
[13:07] and 2004 and here we have six pixels selected from each of those dates along the bottom you can see the NBR or the
[13:17] normalized burn ratio values from each pixel plotted across time from 1984 to 2006 the figure displays each value from
[13:29] each pixel for each year black line represents the model with the best fit for each of those pixels
[13:38] notice that the number of segments differs depending on the nature of change reads each pixel this example
[13:47] represents the various types of change you can observe for example pixel 1 is a region that shows slow-moving
[13:54] disturbance caused by insect infestation there appears to be a gradual decline from about 1984 to 1994 and then some
[14:04] kind of recovery where the vegetation is growing back pixel 2 shows a short duration very high magnitude event like
[14:16] clear-cutting clear-cutting where the NBR value is negative the year after the trees were harvested picks picks or shows gradual decline for many years
[14:29] and this is likely caused by insects and then we see a major high magnitude event like a fire
[14:40] five shows a stable forest that has a wildfire event around 2007 and then six shows gradual increase in the NBR
[14:50] throughout the series and this could maybe indicate potential recovery from a fire that occurred before the 1984 image
[15:01] so by examining both of the short-term and long-term changes we can see many kinds of change in this type of dynamic
[15:12] ecosystem and that's really the benefit of using this type of algorithm here's another similar example also from Oregon
[15:26] at the beginning of its record around 1984 there was a mature second growth conifer stand and for about 17 years
[15:36] little changed then between the summers of 2000 and 2001 a service road was built removing some of the vegetation
[15:45] over the next year experienced clear-cut harvest removing all of its remaining vegetation for the last 14 years there's
[15:56] been regeneration most recently it was a closed canopy maturing conifer stand and so you can see those dynamics happening
[16:05] here in this image along the bottom from each of those years so the land trout Trender algorithm was
[16:19] originally implemented in an interactive data language but with some of the help from google engineers it's been ported
[16:28] on to Google Earth engine or GE II the GE framework nearly eliminates the onerous data management and image
[16:37] pre-processing aspects of that initial IDL implementation it's also much faster than I do we're computing time is now in
[16:48] a matter of minutes instead of a matter of days in GE the process is written in JavaScript so if you have familiarity
[16:57] with that language you can process it on your own and you could also make more specific adjustments however for this
[17:06] webinar we will only focus on the user interface or the UI within that GE program two really important steps in
[17:15] image collection building include one masking cloud and cloud shadow pixels during that annual image compositing like I mentioned earlier and then to to
[17:30] ensure that the spectral band or the index that is that is to be segmented is oriented so vegetation loss is
[17:38] represented by a positive Delta so for example the NBR in its native orientation results in a negative Delta
[17:50] when vegetation is lost and in this case the NVR must be multiplied by negative one one before being submitted within JavaScript
[18:01] the implementation takes nine arguments to adjust the spectral temporal segmentation and the dates for the annual image collection so all of these
[18:12] parameters can be set specifically in the user interface as well or if you are writing in JavaScript you can modify
[18:20] these parameters through the code editor and we are just going to be working with the default settings for a lot of these very
[18:30] specific parameters again in this training but if you're interested in how to modify those again reference that
[18:39] paper after this lecture is over we'll be walking through the exercise using the LAN Trender user interface but I
[18:51] just wanted to mention a few of these pieces before we get started we are just going to be exploring the pixel time
[19:00] series plotter and the change mapper in the exercise and we won't cover the fitted index delta RGB mapper but I'll
[19:10] talk a little bit about it so first off you can see here what the pixel time series plot or interface looks like some
[19:20] of the parameters are defined on the left and we'll work through some of these then there are plots generated on
[19:28] the right such as the NBR or other indices like NDVI so this is really useful for simply exploring and
[19:36] visualizing the spectral temporal space of a pixel and for comparing the effectiveness of a series of indices for
[19:45] identifying landscape change and you can also use this to sort of parameterize your land render work for your study
[19:55] area so you can really hone in on the indices and the values that are useful for you in your region so this image
[20:07] shown here is a pixel that was randomly chosen near Prospect Oregon and we can see some changes on the the landscape
[20:19] here just by looking at a normal Google Earth image in the change mapper once you select a
[20:29] location three maps will be produced year of change deception magnitude of change and duration of change event you
[20:40] can also view the pre change spectral value of that pixel in this image again here the year of detection is displayed
[20:50] meaning that the year where some type of disturbance happened is identified as a different color and so this is the same
[20:57] area that I showed in the previous slide and you can see just like glancing at it even without looking at the legend there
[21:04] appears to be a lot of disturbance happening in many different years with multiple colors shown here the fitted
[21:15] index Delta our genie mapper is designed to help you identify areas of change or non change over time each
[21:25] color red green and blue are assigned a year of spectral data and then those data are composited into an RGB image or
[21:36] red green blue image where each of the colors are mixed by a weighting of spectral intensity for that year that's
[21:45] represented represented this is again the same location and same time period that I showed from the last
[21:53] two images again you can see high variability among much of these patches throughout the region and this could be
[22:03] some type of clear-cutting or agricultural development in the region so this figure helps you identify what these colors are representing in terms
[22:15] of red green and blue from that last slide here you can see three location examples in all three examples red is
[22:25] dominant when change is observed in the earlier years or closer to 1984 green is dominant in the middle years closer to
[22:34] 2000 and blue is dominant when changes observe closer to the later years such as 2016 so each pixel will be some color
[22:44] combination of the three and will vary based on when the change is occurring on the landscape this is essentially like a
[22:53] ternary diagram where each value is plotted as a proportion of three variables or colors and in this case
[23:01] each variable is one point in time so if you look at this image on the far right
[23:06] of the slide you can imagine what that would be in terms of percentage or closeness of the disturbance happening
[23:14] in that year or another and then the color diagram will represent where when the change is is likely occurring
[23:26] so with that in mind based on the color you observe in the map you can begin to
[23:32] get an idea of the date of change in your region and where you might be interested in investigating then you can
[23:39] take a look at the pixel plotter or the change mapper after you get a feel for what's happening on the landscape the
[23:46] way that I understand this tool is it's best to sort of begin your investigation and start to get an idea of what's going
[23:56] on is change occurring over multiple years around the same year is it patchwork is it one large landscape
[24:04] change and then you can use the other two the pixel plotter as well as the change mapper to investigate further
[24:18] so now before we go into our exercise I wanted to speak briefly about a few other vegetation disturbance algorithms
[24:29] and what I'm going to do here is I'll first mention those best designed for forests only and then I'll outline a few
[24:38] that can be used for a wider wider range of vegetation types the forest only algorithms will be indicated with a
[24:46] little tree icon along the top while the all vegetation algorithms will be indicated with a grass icon so you'll
[24:54] see those in the subsequent slides here the vegetation change tracker or VCT algorithm is similar to land Trender
[25:06] however it should only be used for forested regions and it has been shown to work best for short-term discrete
[25:14] events it has a two-step approach first each image in a Landsat stack is analyzed to mask out water clouds and to
[25:24] assess the likelihood of each pixel to be forested then it uses this integrated forest score or likely of it likelihood of it
[25:34] to be a forest with the NBR to assess change over time for all of these algorithms again we've included a the
[25:46] link to the paper and this is the peer-review publication about the algorithm so please refer to those
[25:55] papers for more in-depth questions about these these specific algorithms as that that's where you could find that
[26:04] information information probably better than I can explain it offhand so I just wanted to make note of
[26:10] those papers shown here next the expo actually weighted moving average change detection algorithm was developed to address issues of data gaps again like
[26:27] we've mentioned things like cloud cover data quality issues in a series of Landsat images this algorithm uses a
[26:35] time series approach that focuses on the residuals from a harmonic regression and they do this in order to identify
[26:47] more subtle changes such as slow land degradation on the landscape this process however also still allows for
[26:59] identification of high magnitude changes such as wildfires to be observed in this image here you can see the wide range of
[27:11] change from growth in green to sinning and yellow to removal of vegetation in orange and red and this large
[27:22] identifiable line you can see across the image is a tornado path that occurred near Tuscaloosa Alabama so this gives
[27:33] you an example of what the outputs from this type of algorithm look like the vegetation regeneration and
[27:44] disturbance estimates through time uses neural networks to detect clouds for masking and to explore the spectral information so this is different from
[27:56] the land Trender algorithm in that it constructs segments of pixels and assigns a common value prior to
[28:04] detecting change it can be used for discrete events and gradual change thus variable length disturbances and for a
[28:15] broad range of magnitudes so low low magnitude disturbance high magnitude disturbance however again this can only be used in forests in this example in
[28:29] the image shown here on the right the magnitude of change is indicated with the intensity of the color where darker
[28:39] areas have higher change than lighter areas disturbed regions are shown in red regenerating regions are in blue and the
[28:52] green regions have both the image trends from regression analysis is a simple approach that's focused on linear
[29:06] regression of a series of Landsat images and this is done on a pixel-by-pixel basis note that I've included both the
[29:15] forest and the grass icon here because the algorithm is best for all woody vegetation and so this could include
[29:23] shrubs because this algorithm is a linear regression approach it works best for gradual trends and a broad range of disturbance instead of
[29:38] just focusing on really short-term events this algorithm has also been shown to be effective in a broad range
[29:47] of vegetation types as I mentioned all woody vegetation and the image shown here is from Nebraska where the
[29:56] vegetation ranges from grasses to brush and agriculture shown here as well with with most algorithms an index is used to
[30:09] analyze these changes here the NDVI is shown and is the most common to be used with this type of algorithm so the last
[30:22] two algorithms that I will mention here can be used for all vegetation from forest - grasslands and therefore have
[30:30] this grass designation icon here along the top the Multi Index integrated change analysis is one algorithm used in the development
[30:43] of maps for the u.s. national land cover database or nlcd with the development of land cover maps
[30:51] comprehensive change detection methods are used which incorporates this algorithm and another approach called zone and the zone approach focuses on
[31:03] just two Landsat images in time so it's not necessarily a time series approach the land cover maps are also generated
[31:13] using ground data and specialist knowledge for this national land cover database but it's a very commonly used
[31:20] and extensive on database the unique feature of this algorithm is that it uses four spectral indices for analyzing
[31:30] change over time the difference normalized burn ratio the difference normalized difference vegetation index the change vector and a
[31:41] new index called the relative change vector maximum and again you can learn more about these algorithms in the paper
[31:51] shown here at the bottom of the slide this algorithm works best for discrete events and for high magnitude events one
[32:00] potential weakness of this algorithm is that it might miss some subtle changes on the landscape finally the continuous change detection
[32:13] and classification algorithm focuses on multi-year departures of a phonology model which uses seasonality trends and high magnitude events or breaks to
[32:27] analyze change as with many of the algorithms it first masks out clouds and in this case snow before it constructs
[32:36] the time series analysis land cover classification is also conducted after the time series analysis just like the
[32:45] last process shown for the national land cover database this algorithm is best for identifying discrete events but it's
[32:56] limited in terms of the range of magnitudes and again this this algorithm is most effective for high magnitude
[33:04] events okay so to summarize here time series analysis is a really powerful tool to identify disturbance patterns
[33:19] across a landscape this is especially important for establishing relationships between human activities and drivers of natural disturbance in this session and
[33:31] for the exercise we will focus on land trend er which is used to identify patterns of change in forests
[33:40] that differ in length and magnitude when conducted in Google Earth engine the processing can be done really quickly
[33:48] and the visualization is done on the fly which we will see soon finally there are many algorithms for mapping disturbance
[33:57] as I've gone through some of these here so it's really important for you as the user to decide which to use based on
[34:06] your region of interest and your things like your vegetation type the length of the disturbance the magnitude of
[34:15] possible disturbance and what you could also do is conduct analysis with multiple algorithms and test the accuracy of your map to identify which
[34:28] type of algorithm might work best for you so if you are an advanced user and you're somebody who has the ability to
[34:37] do these types of calculations it might be advantageous for you to take a look at multiple algorithms and just see
[34:46] which one's going to work best for whatever your specific region of interest is okay so now we will go
[34:57] through the steps of our land render exercise so just bear with us here as we transfer over and get this set up in and
[35:08] moving all right everyone so now on to the land render exercise so I would recommend that you just follow along and listen to
[35:27] us going through the step by step of the of the actual exercise but what we'll probably do is have a lot of these maps
[35:39] pre-generated so it's going to take you a while to get through the exercise because especially depending on your
[35:48] connection speed some of the layers can take a few minutes to load so I just want to make you all aware that if you
[35:57] are trying to follow along you might get behind and so what I would suggest doing is just kind of listening and watching
[36:05] and then using the recording that'll be available in a few days to actually go back and do the exercise if you have
[36:14] questions about what we did here but everything is also outlined step by step in your exercise guide as well so we are
[36:25] going to explore land Trender in Google Earth engine and I've just displayed the main website for the land Trender page
[36:35] here and this is a really great resource for you to come back for any specific questions here you can also obtain Java
[36:47] scripts to run the algorithm yourself without using the user interface so take a look at some of this documentation
[36:59] here I really do suggest going through some of that on your own and as I mentioned earlier we will be exploring
[37:10] two of the three on user interface applications in this exercise so here we've essentially brought you to
[37:22] the user application website to begin the exercise so here you can see some information about each of these UI
[37:32] applications and we're going to start off with the change mapper and we are going to examine a really large wildfire
[37:44] that occurred in right outside of Yosemite National Park here in California called the rim fire that happened in 2013 so on page two of your
[37:56] exercise you'll see an image of that fire and then we will do some investigating on that so the first thing
[38:03] that you need to do is you can see each of these features for the user interface and if you just click on the link here
[38:11] you'll be taken to each of these different options so as I mentioned we are going to first go to the change
[38:25] mapper and this is what the change mapper looks like when you first arrive at the website and just take a look and
[38:36] review the features for the user interface you can see you can define a lot of the parameters here on the panel
[38:44] on the left but we what we're going to do is zoom in to a pixel a specific
[38:50] pixel within the rimfire and take a look at that so what you're going to do is come over here to the define pixel
[38:59] coordinates and the longitude and latitude here and on page three we've specified the actual values to enter
[39:09] here so what we're going to do is in longitude enter negative one one nine point eight five two nine and four
[39:22] attitude we are going to go to 37.85 one four and now we're just going to go ahead and leave all the other options as
[39:35] default we'll talk through some of them later but leave them as default for now and then scroll down to the bottom of
[39:42] the panel here on the on the left and click Submit when you do this you'll initially be
[39:52] taken right to that location so you can see here on the image you can see Yosemite value that Yosemite Valley here
[40:01] on the closer to the bottom of the image and were we're essentially looking at much of the Sierra of California and
[40:12] what you'll start to see is as the processing takes place you'll start to see the image layers pop up here what
[40:24] you'll notice along the top are these layers so we have year of detection magnitude and duration and as the image
[40:34] is processing you'll see these gray bars sort of turn to white so each layer is is pretty early in its processing step
[40:45] for me it's been taking about two to five minutes for depending on how far you're zoomed out so what Google Earth
[40:58] engine is actually doing is it's conducting all its processing the algorithm for the area that you see in
[41:07] the user interface so if you're zoomed in further it might not take as long to generate these layers because it's only
[41:16] doing the processing over a smaller region so as the image populates as I've already done this before sort of like a
[41:37] baking show where we have our beautiful cake already made we'll just go ahead and take a look at this image here and
[41:46] this is essentially just the layers have all been processed for the same region in sight where we just were so here if
[41:59] you take if you hover over each of these layers you'll see a little gear symbol up here and if we just click on the gear
[42:07] symbol for the year of detection you can see a the legend for the colors that are being displayed here you can
[42:18] also see the date range so the range is 1985 to 2017 and you can modify these if
[42:27] you'd like as well so what this is essentially showing you is the color is being represented for the year where the
[42:40] disturbance occurred and we'll take a little bit of a closer look so now you know if you're if you're following along
[42:48] if you're looking at the exercise we're on about page six so if we want to see when the disturbance occurred if we want
[42:57] to investigate this we can click on the inspector box which is here along the right-hand side and now what I'm going
[43:06] to direct you to do is click somewhere in here along this big orange area and this is the outline of the rimfire so if
[43:15] you just direct your hover your mouse over that red area and click on it after a moment a figure will be displayed
[43:29] along the right-hand panel so you just saw that pop up there and what this shows you is the NBR the normalized burn
[43:39] ratio for that pixel across that time frame frame you can also then click on this little small box with the arrow and it should
[43:51] open up a new tab in your window and you can see the graph more clearly you can
[43:59] also download these these images as a PNG and you can download the specific data as a CSV file as well if that's
[44:09] what you're interested in so what we can see here is we see a little bit of decline occurring in this pixel in the
[44:18] early 90s but it's pretty stable which means that the forest has been pretty stable throughout time and then we see
[44:29] this really sharp drop in 2014 so this also helps display the each yearly pixel value is in the blue as the original and
[44:44] then you can see the fitted line is essentially like those segments from the different trajectories that we talked
[44:52] about in the lecture so that's the red line so what we can see here is from 2013 there was a positive NVR value of
[45:05] 538 and so I've made a note here in on page 6 of the exercise but each of these
[45:13] values should be divided by a thousand so we're normalizing these so this is essentially 0.53 eight and in 2014 we
[45:28] see this large decrease so this is essentially indicating to us that at some point in 2013 a fire occurred after
[45:41] this date of the pixel was taken and in 2014 there the vegetation signal it appears that there was some kind of
[45:52] event disturbance a burn and then you can start to see recovery as in 2015 and 2016 and then maybe
[46:05] something's happening here after 2016 where we're seeing some vegetation decline again but it's it's very clear that some large scale high magnitude
[46:16] event occurred in 2013 so the value if you're following along to this your value will look a little
[46:28] different unless you clicked on the same exact pixel that I did which is unlikely so if we just go back to our change
[46:37] mapper here what we were looking at initially you can keep doing this kind of inspection you can click around
[46:48] different dates different colors so if I just click on a blue spot somewhere in here we can see that the the graph
[47:00] changed along here on the right we can see that the year of change where the largest amount of change was detected
[47:09] was 1997 and again we could open this up and take a closer look at all of these
[47:15] if we if we'd want it if we wanted to but it looks like there are multiple sort of large-scale disturbances
[47:21] happening throughout the record on that pixel so you can investigate this a little further here go ahead and close
[47:31] the legend for the year of detection and what we're going to do now is just come over here and turn off the year of
[47:39] detection layer so we can see the magnitude layer underneath and so you just uncheck this box and now we can see
[47:47] the magnitude now it looks pretty clearly like some kind of fire occurred if you compare this image to the outline
[47:57] of the burn area shown on page 2 of the exercise you can see that it this is
[48:04] this is in fact the rim fire that occurred here so what you're seeing here now is higher intensity burns in the red
[48:15] and the orange colors and lower intensity in the greens and blues so we can also take a look at the legend
[48:26] for the magnitude and here the magnitude ranges from zero to a thousand and the magnitude of the
[48:37] disturbance is defined as the distance in spectral values in this case NB are values between the beginning of the
[48:45] disturbance and the lowest NBR value reached so if we come in here and then we close the magnitude legend
[49:00] we will also now come in here and look at the duration layer so come back and turn off the magnitude layer and we can
[49:08] see the duration of change again let's take a look at the duration legend so the duration is shown with
[49:20] each year being resented as one value so the length of change that we're observing is happening on a range of 1
[49:32] to 10 years so the short-term events such as things like wildfires are indicated in red here with this color
[49:44] palette shown in the in the legend and then the changes that are occurring may be more gradually over longer a period
[49:52] of time multiple years are shown in the greens and blues so what we might take from this in just an initial
[50:01] investigation is it looks like there's some kind of large-scale short-term event that happened ie the rimfire but it also looks like
[50:11] there's some kind of change occurring a more gradual change over much of the Sierra to the east and this could be
[50:22] indicative of something like mountain pine beetle infestation these longer-term longer-term on events could also be related to
[50:30] multi-year drought some kind of decline in the vegetation that's occurring more gradually over a longer period of time
[50:41] ok so we'll go ahead and close this this layer now so there are as I mentioned there are
[50:51] many things that you can change in the panel here we're not going to go through a lot of them in this training so I
[50:58] encourage you to do it on your own but one thing I did want to mention that's very specific to Google Earth engine is
[51:05] this define date range and for those of you who have worked in Google Earth engine before you might know this exists
[51:16] but it's it's a little different than if you're doing image processing in software like envy or Erdos imagine
[51:24] where you have downloaded discrete dates where you have one date from Landsat and all of the pixels displayed from that
[51:37] single date what Google Earth engine does to generate these cloud free images is it it takes the pixel value that is
[51:49] maybe not masked by clouds or snow or shadows within some kind of date range so what's being displayed might not be
[52:03] the same pixel the same pixel from the same date across the entire image so what this tells you is that the pixel is
[52:14] being displayed are selected between June 10th and September 20th for each year so if for example the Lance Lance set
[52:27] passed over this area on June 11th most of the images are likely from June 11th if it's a clearer image but if it's a
[52:38] cloudy image the pixels might be chosen from the next revisit time which is 16 days about 16 days later so it's just
[52:48] something to be aware of I mean you can get more guidance about this on some of the Google Earth engine documentation of
[52:55] how they display the images but it's really important to to know that this defined date range is you if you want to
[53:04] be very specific if you want all of the pixels to come from one date in time of
[53:10] a Landsat overpass you're going to need to really refine this date range however you might get missing data or data gaps
[53:20] if you do that so there's sort of a trade-off here that you need to be aware of and you need to think about using
[53:26] this technique so hopefully that didn't confuse everyone more but I wanted to make you all aware of the caveats of of
[53:34] using Earth engine for this type of analysis okay so now if you're following along the exercise we're on the bottom
[53:43] of page 10 and now that we visualize some of these dynamics and the change mapper I wanted to show you what the
[53:51] pixel time series plot are looks like so if we come back to the initial documentation again you can see the
[54:02] pixel time series plot or link shown here and we can go directly to that link maybe open it in a new tab so we don't
[54:13] get confused and the pixel a time series plot or looks really similar as a change mapper but it will display some
[54:23] different things when we actually click on a point or identify a specific latitude and longitude so what we're going to do here is we're
[54:36] going to use that same value for the pixel coordinates and then we're going to select a few indices to examine so
[54:45] again for following along we've indicated to change the start year to 2000 and the end year to 2017 so
[54:54] essentially what you're going to see is a value from each year from 2000 to 2007 teen and you can make this as as wide or
[55:06] as narrow as you'd like depending on the date range that you're interested in or again you can leave it as default if if
[55:14] you'd like here you can see that we have the option to we're also just to let you
[55:21] know we're going to leave this date range as the default and they've set this as sort of the in the Western
[55:28] Hemisphere the summer date range where vegetation is the greenest but you could change this if you'd like as well
[55:40] here you will notice that there are multiple indices that you can take a look at so the nice thing about this is
[55:47] if you select a specific pixel of interest you can see these indices side-by-side so you might see some
[55:57] differences depending on your study area in between between these indices again you can obtain information about these
[56:07] indices and what they mean by going back to things like the introduction to remote sensing and there there's a lot
[56:15] of literature about these indices out there so um so what we're going to have you do is select the NBR NDVI and DMI
[56:24] the normalized difference moisture index we won't talked about that much and the TBC which is the tasseled cabinets
[56:31] tasseled cap brightness and then under here where we're going to define the pixel coordinates if you don't have a
[56:40] specific coordinate in mind you can just click on the map as you see when I hover there's a little hashtag here where you
[56:49] can just click but we want to make sure we're looking at the same exact thing so we'll type go ahead and type it in 1 1 9
[56:57] 8 5 two nine an hour at the top of page 11 and again 37.85 1/4 so we're going back
[57:13] to that same area in the Sierra Nevada of California and then just click Submit and this works a little quicker than the
[57:25] change mapper because you're not generating all those layers and running the process for every pixel displayed here on the map you're just essentially
[57:35] you're just plotting the time series plots of this very specific pixel so what you can see here now is the plot
[57:52] for each of these indices that you selected before you click Submit so the NBR NDVI and emi and TC be
[58:06] so let's go ahead and take a the NDVI here and we see similar patterns that we observed with the NBR
[58:14] right where we saw the decrease from 2013 to 2014 as indicated again there there's a scaling that needs to occur here so we
[58:29] go from essentially 0.7 which is a pretty high NDVI value and Evi ranges between negative 1 and 1/2
[58:42] Oh point two eight nine in 2014 so you can see a pretty dramatic decrease in the vegetation index thus indicating
[58:54] less healthy vegetation in this region okay so that is of the time series pixel time series plotter shown with that
[59:11] example of the rimfire so what we're going to do now is take a look at a different type of disturbance event and
[59:19] in this example we're going to look at mountain pine beetle infestation in Colorado so for those following along at
[59:28] the bottom of page 12 going on to page 13 we've included a figure there from this really great Forest Service paper
[59:40] that outlines mountain pine beetle tree mortality in the rapaho roosevelt National Forest and this is just outside
[59:51] of Denver along the Front Range region of of Colorado so what we're going to do here is we're going to use the pixel
[1:00:04] time series plotter as our starting point as opposed to the change mapper but we'll get to that one
[1:00:11] so you can just stay right here in your pixel time series Potter or you can start over fresh if you'd like as well
[1:00:20] we've included the link again um so here we're going to ensure that our date range is from 1984 to 2017 just starting
[1:00:33] off with a broad swath a really wide date range we're going to keep the date range here
[1:00:42] set to default for now we are only going to examine NBR NDVI and DMI we're going to take this tasseled cut brightness off
[1:00:53] and now we're going to zoom in to a different area so we have indicated new pixel coordinates for you
[1:01:02] so here it's negative 1.05 105.7 seven two six seven and forty point zero eight two five six now we're going to keep
[1:01:23] everything else as default keep it simple and click Submit again what you can see here now is our image
[1:01:36] has moved over to the Arapaho Roosevelt National Forest and you can see our pixel here just first glance at what
[1:01:51] this Google Earth image looks like it definitely looks like the trees here are little sort of brownish reddish maybe
[1:01:59] more sparse than the some of the other regions up here in the northwest so just by first glance if you're
[1:02:09] familiar with mountain pine beetle infestation this looks like potentially a hot spot for for that occurring also again you can see the time series
[1:02:22] plots shown shown over here on the right and let's just take a look at the NBR more specifically so what you can see
[1:02:32] here now in comparison to the previous example that we did with the rimfire is it appears that we have pretty stable
[1:02:41] forests some you know hi some declines some increases but then from about 2005 to about 2012 we see a more gradual
[1:02:55] dekat decline in this vegetation so this is more indicative of the mountain pine beetle signal in the time series record
[1:03:05] where it's not this one big extreme event it's sort of slowly progressing as the trees slowly die off and you can
[1:03:17] observe that in the other indices as well in back here in the time series plot if you would like and again just
[1:03:27] hovering over these moving them along you can see the values offhand but then you can can obtain the actual data if
[1:03:36] you'd like as well okay so the next step that we're going to do is we are going
[1:03:43] to take a look at the change mapper for this specific region as well so we're going to go back to our land
[1:03:55] render application page and then go right here to the change mapper open that up and we're going to make a
[1:04:12] few modifications here that we didn't in the last example so we're going to keep that define your ranges default so we
[1:04:21] have that broad range but we're going to change the date range so again this is what I mentioned about being very
[1:04:28] specific about the pixels that you're including based on that the date and time and we're just going to go ahead
[1:04:35] and change this to only include pixels from July so we'll change this to 701 and Oh 801 so 401 so for every year when
[1:04:51] a composite Landsat image is generated it's only pulling pixels within July for this example for the state range that we
[1:05:02] have you might want to play around with that if you have to narrow a region you might have a lot of missing pixels
[1:05:14] but if you have too broad of a region you might have you might be observing some noise or change in phonology that
[1:05:22] you may not be interested in observing so those are the ups and downs pros and cons of changing this this date range
[1:05:31] here we are again going to change our latitude longitude to our Colorado example example you and again we're going to keep all of
[1:06:03] these other parameters as default if you're interested in these segmentation parameters I would really refer to the
[1:06:10] the paper about what what all of these mean so things like math max segments so that's the threshold enforced number of
[1:06:22] discrete segments that are going to be generated in the the fitted model that we talked about earlier right there is a
[1:06:31] piece of the model where they pull out a really large spike that may be some kind of random event or noise or things like
[1:06:41] that and again you can you can see what all of these specific parameters mean but essentially it parameter eise's the
[1:06:51] model that's being used here so we'll go ahead and click Submit and again this is going to take a little
[1:07:05] while for these layers to pop up as you can see the layers panel here is working it's when it's gray it's working
[1:07:16] and processing and then when it's white it is totally done okay so now this is the fully finished
[1:07:28] loaded layers of the process that we just entered so we went and I went ahead and in 1984 to 2017 and then we changed
[1:07:41] this start and end date here for this region and click Submit and now each of our map layers have loaded so the first
[1:07:53] thing that you might notice is in comparison to the last example that we did the year of detection is more varied
[1:08:05] we don't see that one large bright red area where most of the change occurred in that single year what we're observing
[1:08:14] now is change occurring over many different years and in certain places throughout the image here so what we're
[1:08:25] going to do is just again if you hover over these layers and go to your of detection until the gear symbol appears
[1:08:34] and go ahead and click on the gear symbol and what we're going to do here is change the range here in the
[1:08:44] symbology so that we can really zoom into the date range where we're observing a lot of the change occurring
[1:08:52] in this region and based on the paper and some of the other information that we have we know that most of the change
[1:09:00] is occurring from 2000 to 2017 so again like we just showed the example of the time series plotter that might be a
[1:09:10] great place to start and identify when you want to zoom in on and in terms of the year of focus so when we do that we
[1:09:22] need to click apply and we're going to need to wait for that layer to reload only that one layer will reload but
[1:09:32] sometimes I close this and I click back on the layers panel or just hover over the layers panel and
[1:09:39] you could see it loading here and that's not all three it's just the the one the year of detection that's that's showing
[1:09:49] change as this is loading I just want to mention that you can also filter by specific dates in these define change
[1:10:10] mapping parameters so these are these are really interesting because you can look at things like loss or gain of
[1:10:19] vegetation you can sort the change based on greatest newest oldest so for example when you do that inspector option over
[1:10:29] here on the right and click on inspector you can have it the inspector is default set to the greatest change is that the
[1:10:39] year of change that's identified but you can set it to the least or the oldest whatever you're interested in but you
[1:10:47] can also filter use these filtering to change the start and end date of change that's displayed in the layer of the map
[1:10:57] so while you have your defining your range at the very top going across the entire time period what's being then
[1:11:07] displayed in the map layer can be filtered so you can actually have all that data being process but just filter
[1:11:16] it to display a little differently over here so the same thing can be done either in the legend which is what we we
[1:11:24] showed which is what's loading now or you can filter it here it just in terms of the display so now as this is loading
[1:11:36] we can see this change occurring in terms of the year of detection we're seeing a lot of change that's
[1:11:56] happening at to year 2000 or before but then also a lot of change that's occurring a little later so these each
[1:12:06] color square is representing about two years in this example and so we can see the the change really happening close
[1:12:17] here too late Granby around that two thousand five six seven timeframe with the blues and the Greens represented so
[1:12:29] you can modify these features and really zoom in even more in the exercise we also have you change the year range to
[1:12:40] 2000 to 2012 so if you really again want to zoom in even more and have each of
[1:12:49] these represent a more discrete time period you can do that you can also add or subtract the color scheme here and
[1:13:02] change the color scheme to whatever it is that will help you identify your patterns more clearly and visually so
[1:13:14] if we in the year of detection legend and now change the date to 2012 we can click apply again and the process will
[1:13:25] run again and it will look a little different just because we've changed the color the color legend again sometimes I
[1:13:33] like to just hover over this to make sure it's going so what we're going to do now is we for example want each year
[1:13:47] to be representing or each color to be representing two years in time we could even change the range to have each color
[1:13:57] represent one year in time to really get the specific date on when the change is occurring but here for this example
[1:14:03] we'll just do it by two years at a time so we have our range of 2000 to 2012 so
[1:14:09] if we have six different color options then each color will represent two years so what we've instructed you to do for
[1:14:20] those on the exercise it on page 16 towards the bottom here is to just subtract one of those and now we'll have
[1:14:30] two thousand two two thousand two two thousand two two thousand four and so on as you move through the map each color
[1:14:40] will represent two years again reloading this image a lot just to give you an example of what we can do with the color
[1:14:51] scheme and how things can change it might take you a little while to have these features load
[1:15:01] so what we'll also do here is zoom in to Lake Granby which is located right here where we're starting to see the map
[1:15:11] layer load and that will start the process over for everything so if we zoom in twice to Lake Granby we will see
[1:15:26] all of these layers reload so again like I mentioned earlier whenever you zoom in or out Google Earth engine will run that
[1:15:36] process over only the area that's being displayed in the map so if you really want this to go a lot more quickly zoom
[1:15:46] into an area that's really small if you have a small area of interest and you're maybe having issues with with the map
[1:15:59] loading because I know that some of you might be in an area where there's lower bandwidth etc etc so that might be more
[1:16:07] difficult also here you might notice as the maps are loading that because we've defined this date range to be a smaller
[1:16:15] range there are some areas where there are missing pixels in terms of our layers the the Google Earth image being
[1:16:27] displayed will still just be the composite image that's generally displayed in Google Earth but the layers are only selecting from our date range
[1:16:37] so in this area there might have been some clouds with the overpass of Landsat in this region and therefore those
[1:16:46] pixels were removed in the process you okay so now that the layer has loaded we can see that the year of detection of
[1:17:03] change is occurring in certain specific years down here so now that we have six different colors in our palette and twelve years of data
[1:17:15] each color is representing two years and if we want to investigate further in terms of where what time we're seeing
[1:17:26] this disturbance occurring we can use again the inspector option and we're seeing a lot of disturbance occurring
[1:17:36] here just south of Lake Lake Granby with the yellows and greens so if we go ahead and click on a yellow or green pixel we
[1:17:52] can see this change occurring here in 2006 which should be represented by the within the green range there again if we want to
[1:18:13] take a closer look we can investigate this NVR chart a little closely by opening that up into a new tab
[1:18:28] and we can again see this sort of steady decline occurring in the vegetation due to mountain pine beetle infestation so
[1:18:40] if we come back to our change mapper layers we can go ahead and close the year of detection and then let's go
[1:18:50] ahead and turn off the year of detection layer and what we can see here in comparison to the previous example of
[1:19:00] the rimfire is that much of this change is a lower magnitude so if we want to take a look at the the legend we can see
[1:19:11] on this scale of a range of zero to a thousand in terms of the magnitude of disturbance much of this is green which
[1:19:21] is lower disturbance we do see a high disturbance event here that could be clear-cutting clear-cutting or could be a small wildfire as well
[1:19:30] with the orange and reds indicating higher magnitude change so again they all of these signs are pointing towards
[1:19:43] a mountain pine beetle infestation in comparison to a wildfire event and I just want to mention that there are many
[1:19:52] different options you can explore on your own in terms of the parameters you can change and if you are a JavaScript
[1:20:05] person you can use the code editor and modify these parameters really easily and quickly and potentially even more
[1:20:14] parameters that you that are displayed here in this user interface so to wrap this up the time series analysis is a
[1:20:24] really important technique for analyzing changes in the landscape over time and the land Trender in Google Earth engine
[1:20:33] provides a really nice approachable way to start doing this type of time series analysis without having to download a
[1:20:44] lot of imagery and do the processing on your own computer and it's really a much more approachable way to start off and
[1:20:54] you know there might not be as many specific changes you can make to this user interface but if you're a more
[1:21:02] advanced user you can go ahead and do that using different algorithms or different options so what we're going to
[1:21:10] do is I'll just close this down and we'll get back to just a few things I wanted to mention before we end our
[1:21:21] session and get into the question and answer portion again you can hopefully you are adding your questions to the Q&A
[1:21:32] box right now and we'll try to get to as many as we can if we don't get to your
[1:21:37] question you can email myself or my colleague sandy Schmitt at our email addresses shown here for general
[1:21:45] inquiries about our set you can email our program manager and produce her emails shown here and we also have the
[1:21:53] the are set website so I want to thank you all for joining us today and we'll stay on for a few more minutes
[1:22:00] for questions I also wanted to remind you all that the homework is due in two weeks please complete the homework and
[1:22:08] submit the Google form by me first and you might want to go through and take a look at that before you complete these
[1:22:15] exercises for any of you who have tried to start doing this exercise the lai-lay are loading will take a
[1:22:25] while for some of the parts so you might want to have that available have the option to see what the questions are for
[1:22:37] the homework and then maybe jot down your answer as you as you go along as opposed to having to have the Google
[1:22:44] form open during the entire time you do both exercises so just a heads up with that so again thank you all and we will
[1:22:52] now take some questions all right everyone please bear with us while we pull up our Google document
[1:23:07] with the questions and thank you all for submitting them along the way here we were able to sort of preview a lot of
[1:23:18] them and answer them already and I'll go over what those questions are I did want to mention as well that I know yes on
[1:23:29] Monday we are having a few issues with the links to the data for exercise one and all of that should be fixed now so
[1:23:36] if you are having trouble accessing those data or downloading the exercise please go back to the site and try again
[1:23:49] and I mentioned it but please complete the homework if you wish to receive a certificate of completion and oftentimes
[1:23:59] we get emails asking for the certificates and they do take a while so just please be patient if you don't
[1:24:07] receive it within two to three months then let us know but we do have a lot of
[1:24:13] folks attending these webinars so to get them out to everyone it does take a little bit of time but I want to thank
[1:24:20] you all for being with us again today and so now we will try to address some of these questions that you've asked and
[1:24:30] get to as many as we can here here now okay so the first question that was asked is a really great question and a
[1:24:48] pretty commonly asked question and question is how is it possible to combine different time series of different satellites such as Sentinel 2
[1:24:58] and then the various lands at sensors to have a complete series so this this is definitely being done however if you do
[1:25:09] this process Yuni there are some really important things to think about so Landsat sensors for example if you're
[1:25:18] combining multiple Landsat sensors together they have different properties they have different radiometric resolutions different bands and so I
[1:25:29] recommend using the surface reflectance products that are now available for all of the Landsat sensors and so these have
[1:25:40] all been you know atmospherically corrected radiometric ly calibrated and they are more easily used to create these types of time series and it's
[1:25:51] pretty common to do that also there are some new products available on earth Explorer called these Landsat analysis
[1:26:00] ready data products and they have applied some algorithms to compare across different sensors there are also new indices available such as open water
[1:26:12] bodies through these Landsat application analysis ready data products so we've we've included a link to that resource
[1:26:28] there for comparing Landsat and sentinel there are more things to consider so Lance Benson all have different spatial
[1:26:37] resolutions The Sentinel 2 has a higher spatial resolution of 10 meters but this is something that folks are really
[1:26:46] working on in the research community right now um it's a it's a it is really beneficial to have these multiple
[1:26:58] overpasses we can get a higher temporal resolution if we're using Sentinel versus Landsat and so more to come on
[1:27:06] this but I've also included a link on the document here for more information on the Landsat sentinel harmonized
[1:27:14] products so i believe these products will be more readily available pretty soon and i also wanted to mention that
[1:27:25] we will post this Q&A document on to the website within a couple of days so you can come back and
[1:27:34] access all these links that we provided and and look at these answers again okay so question two is the time of year the
[1:27:51] same for each of the years you know for example 1984 95 2014 so in reference to the land trend or Google Earth engine
[1:28:04] user interface it sets a default to use the same time period each year and that time period is
[1:28:14] June 10th to September 20th you can modify that date range however it's suggested to use the same date
[1:28:26] range for each year of analysis so that way you can generally expect the vegetation conditions to be similar
[1:28:34] right we we modified in the exercise we modified the last example to just show data from July so you could change this
[1:28:44] to whatever timeframe you are interested in okay the next question is land trend or open source and could it be applied to enter
[1:29:00] annual time series so the answer to the first question is yes it's open source you can run the Google Earth engine UI
[1:29:11] using the essentially it's built off of the Google Earth engine platform right so Google Earth engine is accessing all
[1:29:20] of these satellite data and pulling them in and then this land render user interface essentially sits on top of
[1:29:28] that so there there are a lot of questions about modifications to the land render algorithm and included I'll talk about it with some of
[1:29:44] the other questions but you can you could code all of this yourself in JavaScript or Python within the Google
[1:29:51] Earth engine code editor if you don't like the settings of the user interface we won't go over any of those but the
[1:29:58] scripts there are some example scripts available online and so we've provided some of the links here but I just wanted
[1:30:04] to mention that currently the way that the user interface is set up is for annual comparisons as you've you've
[1:30:12] noticed through the demonstration of the exercise however if you are running the algorithm via your own coding I believe
[1:30:21] you could change those some of those parameters so take a look at those specifics but for the user interface
[1:30:27] sets sets it's just annual comparisons currently so for question 4 here there are a lot of questions about this the question is
[1:30:46] can we use land Trender for a group of pixels for example shapefile or polygon the short answer is no not with the user
[1:30:55] interface and but there's a longer answer within the way that Google Earth engine is structured currently it's it's
[1:31:04] a really kind of arduous process as to pull in your own polygons whether they be pulling your own shape files whether
[1:31:11] they be polygons or points right now you have to convert a shapefile to a kml file you have to upload it to your
[1:31:20] Google Drive and you have to create a specific link to that shapefile that zipped folder of the kml file to pull it
[1:31:31] into to be displayed in Google Earth engine so I believe that this is changing soon from some folks I've
[1:31:42] talked to who are working directly with Google I think they're going to be making this process a little more
[1:31:47] streamlined so stay tuned for that but right now there are some tools and examples available on how to
[1:31:57] do this I also want to make a plug for climate engine which is a really great tool where you can do some of these
[1:32:04] similar time series analysis such as NDVI etc and they have an example there on how you do the process of uploading a
[1:32:14] shapefile to sort of that interface it also sits on top of the Google Earth engine platform so a convoluted answer I
[1:32:24] know but currently within the user interface you cannot analyze larger regions it's just a pixel-by-pixel basis for creating the time series and and
[1:32:37] doing the sort of the inspector of those time series so okay question five there were a couple questions on marine
[1:32:55] habitats so the question is what kind of algorithms can we use to detect change in marine habitats and so this is really
[1:33:04] dependent on the types of change you're investigating I'm not a marine coastal ecosystem scientist so I hesitate to
[1:33:14] provide some suggestions but if you think about it in terms of the ecosystem if you're monitoring something like kelp
[1:33:24] forests that you can identify changes in NDVI over time it seems to me that these algorithms would be very applicable for
[1:33:34] monitoring those types of things however I do understand that the marine ecosystem is very dynamic and constantly
[1:33:44] changing changing it doesn't really tend to stay in one place like our forests over multiple years so there's there's probably a lot
[1:33:54] of other complications and things to consider when doing you know change mapping or running these algorithms over
[1:34:01] their marine system and so I've included a couple papers that I found just by doing so some searching online about monitoring
[1:34:11] wetlands coral reefs and sea grasses using remote sensing and change over time so please do take a look at those
[1:34:33] okay question six the algorithm is presented besides land Trender is it possible to implement them within Google
[1:34:42] Earth engine are the scripts available so I'm not sure I'm I don't know the specifics about implementing some of
[1:34:49] these other algorithms so I would again just reference fallback those papers that we referenced in the lecture we for
[1:35:01] this training wanted to sort of have a more approachable first step at looking at one of these algorithms so that's why
[1:35:10] we chose the user interface for land Trender but again I would suggest reading through those papers and
[1:35:17] contacting the developers it's very likely that you could run these algorithms using your own sort of coding
[1:35:26] or analysis and whether it be in JavaScript and engine or our the our statistical program has a lot of
[1:35:34] packages to run change detection algorithms such as random forests which we did another training on recently so I
[1:35:45] would do a little digging if you're interested in running some of these other algorithms on your own I just
[1:35:54] wanted to sort of make you aware of what's out there and give you some some references for sort of taking that
[1:36:04] deeper dive so um okay the next question question 7 are there plans to add data from 2000 eighteen and nineteen and the
[1:36:18] short answer is yes if you are playing around with the land render UI you'll see that you can at
[1:36:27] least with the time series and maybe a change mapper it probably would change mappers only to 2018 but I believe that
[1:36:38] because the land render UI is just built off of Google Earth engine as soon as the data are being pulled in
[1:36:47] to the engine collection they can be used and processed within this user interface so just take a look at that
[1:36:57] and for seeing what what data are available now and I think that it's a pretty quick pretty quick in terms of
[1:37:09] the time that the images are taken until they are included in the Google Earth engine collection there are a couple
[1:37:21] questions about global forest watch and we've talked about global forest watch a lot in some of our other trainings and
[1:37:30] it's a really fantastic tool for mapping forest change so for those of you who may not be familiar with global forest
[1:37:41] watch watch I would suggest googling that and taking a look at their online tool but the algorithm used by Hansen's group at the
[1:37:52] University of Maryland for creating the global forest watch change maps are is different than land render and we've
[1:38:01] included the paper here for more information about that specific algorithm but it is different then then land render that we mentioned here
[1:38:25] okay question nine oh this is another really great question the question is which algorithm is the most adequate for studying agricultural
[1:38:36] or phenological phenological change throughout an entire growing season where you know yearly composites might not be useful right if we're seeing
[1:38:50] change occur within the year so I believe that for a lot of these scripts again for a lot of these algorithms you
[1:38:58] can run them enter annually currently as I mentioned previously you can only analyze yearly change in the user
[1:39:07] interface of land render so again here I kind of revert back to do your own digging on on some of these algorithms
[1:39:16] and see if you can implement them through other means and I mentioned previously to but another for another
[1:39:26] algorithm you could investigate as random forests and I've included a link to our training that we did on change
[1:39:34] detection a little a little while back so in the change detection webinar we actually had a tower script for running
[1:39:47] random forests that was developed by the some folks at the Natural History Museum I believe and so take a look at those
[1:39:58] and you can maybe modify those and play with those for for this inter-annual analysis um also again making a plug for
[1:40:09] climate engine but with in climate engine you can also zoom into an agricultural region of interest create
[1:40:20] your own polygons for example on the asset center pivot irrigation plot and look at something like NDVI over time
[1:40:28] from the Landsat record and so within that tool you can create these figures directly online using the power
[1:40:40] of G as well and you can see inter-annual phenological changes so you could see things like the multiple cuttings of
[1:40:48] alfalfa throughout the year and that's just based off of looking at NDVI values for example so that might be another
[1:40:57] nice resource for you okay the next question cans that can the change map or maps be exported as geo TIF the answer
[1:41:19] is again yes and no no from the user interface not that I'm aware of yet but yes if you do your own scripting so
[1:41:29] within JavaScript you can write a short little script for exporting your Maps and I believe you can do that as geo
[1:41:39] Tiff's again take a look at the example scripts available they are pretty great I ran a couple of them in preparation
[1:41:49] for this webinar and you don't really need to do a lot of modification to it so if you're not a coding person and you
[1:41:59] just want to kind of go in and look at those parameters and run them all you need to do is is get set up with the
[1:42:04] Google Earth engine code editor log in and you can essentially just open up this script that's an entirely written
[1:42:17] within your own interface so take a look at that okay question 11 similar to some of the
[1:42:37] other questions that we've had how can I use NBR so the normalized burn ratio for seasonal burning of crop residues so
[1:42:47] again what we've shown here only shows annual change you could again this is something I hadn't mentioned before but
[1:42:59] you can you could also analyze seasonal change on your own by downloading the imagery and running the analysis on
[1:43:08] something like QGIS or ArcGIS instead of just using the earth Engine cloud to run these processes for you so it's a little
[1:43:18] more involved in terms of timing but you can download the Landsat data on your own for specific dates of interests and
[1:43:28] run something in your own geospatial software as well so either with these some of these other algorithms that were
[1:43:37] presented here using random forests or some other tools out there so yeah okay okay the next question is there a
[1:44:03] technique to analyze the change in urban areas yeah we get a lot of question about urban change we are actually going
[1:44:12] to be doing a another advanced webinar in July I believe where we will be showing trends north which you you can
[1:44:26] use to analyze change in urban areas as well as in forests and so stay tuned for that one will be hopefully putting out
[1:44:39] the registration and things for that within the next month or two so take a look at that but yes I mean you can
[1:44:46] apply these types of change detection algorithms for urban mapping some may be better than others and we've included a
[1:44:57] paper there about monitoring urban change but that's a good question urban systems are tend to be a little
[1:45:13] more difficult because if you think about urban areas they there there's a lot of mixed pixels so there are
[1:45:22] tree-lined streets that might have a spectral signature of a building as well as a plant and so it's a little more
[1:45:33] complicated for urban systems but it can be done okay the next question for the pixel time series plotter for any index of
[1:45:53] interest for example NDVI with the graphs generated show years where there's missing data or breaks in the
[1:46:02] data and is it necessary to download the data as a CSV to inspect whether there is one point for all the years of
[1:46:13] interest so the Google Earth engine algorithm interpolates values for years that have missing data so the ability to
[1:46:26] interpolate values is really useful so it essentially aligns each observation to a trajectory that's consistent to where the pixel has been and where it's
[1:46:39] been going so you can think of this as sort of this hindsight enhanced image time series data so I think some of this
[1:46:50] might have been taken from the land Trender website that we have here but this really essentially what this does
[1:46:59] is it allows you to maintain consistency throughout your analysis so for each Landsat stack each year of data that you
[1:47:12] have you have a point there I also wanted to take this time to talk a little bit about the way that Google
[1:47:24] Earth engine creates these Landsat composite images so I mentioned this when we talked about the exercise but
[1:47:33] you have the ability to identify the start and end date within each year that you want to obtain the Landsat image the
[1:47:44] way that Earth engine displays the image to alleviate missing data is within that range it will take pixels from
[1:47:55] potentially multiple different lands scenes within that date range so you might have five or six Landsat images
[1:48:04] within a certain time period but you you don't necessarily know with an earth engine what specific date is being
[1:48:14] displayed for each pixel unless you make the date range small enough to be only one Landsat overpass um that's really
[1:48:24] different from the way that folks have been doing this type of analysis in the past where you download a very specific
[1:48:33] Landsat date and analyze that so it's just one caveat that I like to make people aware of so if you want to
[1:48:43] really ensure that you're getting a pixel from a specific date within what within what's being shown in Earth
[1:48:52] engine you have to be very narrow with your time window otherwise you might have pixels next to each other that are
[1:48:59] just from slightly different dates just one thing to be aware of there um that was a bit of a tangent but I when I
[1:49:12] first realized that I was kind of like wow I couldn't believe it something to be aware of with the way our Earth
[1:49:20] engine works okay the next question is it possible to modify the scripts for example to calculate NDVI
[1:49:43] originally used by earth engine so the user can set additional parameters yeah so again you can code all this up
[1:49:54] yourself if you know what you want to do and you can't do that with a user interface yes you can run it and you
[1:50:06] could create an NDVI calculation itself within the earth engine coding editor so you have the flexibility to do all of
[1:50:17] that you just have to be familiar enough with the coding and Google has some really great resources so I encourage
[1:50:24] you all to take a look at what they have but they have a lot of example scripts
[1:50:29] on how to do some of these things on your own okay um next question how does Earth engine deal with the SLC
[1:50:51] failure in Landsat 7 data which started in 2003 so for those of you familiar with the Landsat 7 data they have the
[1:51:00] striping where there are these large gaps and data and within land Trender if the algorithm will not fill the gaps
[1:51:14] with an earth engine they as I mentioned as I just went off in my tangent about the way they create these composite
[1:51:23] images but if you are for example looking at a time period where the you only have Landsat 7 data you're not
[1:51:37] pulling from Landsat 5 data or you don't have Landsat 8 yet you'll just see that the missing data gaps in there but Earth
[1:51:47] engine really does try to do its best to create these no missing data composites again we have for reference a link to
[1:52:01] the algorithms that they use to create those composite images so take a look at that oh my colleague just wrote in there
[1:52:25] happy 20th birthday the Landsat 7 I was not aware so happy birthday ok next question if I understand correctly the
[1:52:35] pixel time series plotter allows a user to understand the original and fitted curves of an index of interest if I want
[1:52:44] to combine the time series data for a certain number of randomly selected pixel is that available in a streamlined
[1:52:54] manner within Google Earth engine as opposed to generating these pixels individually and downloading each CSV separately so this is really similar to
[1:53:03] some of the other questions we've had the short answer is no um not within the user interface you have to look at each
[1:53:13] pixel individually and take a look at the answer to Question 4 for more specifics about that I really do think
[1:53:24] that this change is going to be happening pretty soon but I'm not I don't have the inside Intel with Google
[1:53:33] so that's something that they're there they will be working on but again if you are interested in this type of area
[1:53:45] analysis there are other tools for doing that you know I know we talked about appears last session and there are other
[1:53:57] packages and tools for doing this within other software as well so ok question 17 ax is also a bit of a repeat and can you
[1:54:11] tell the link between land Trender and global force change so the land Trender algorithm and the global forest watch
[1:54:20] algorithm developed by Hansen at all and at University of Maryland is different um if you want to see how different
[1:54:30] they are I would suggest taking a look at the papers shown here we have the link to the Hanson paper in a previous
[1:54:39] or we have the citation for the Hanson paper which is the global forest watch paper in a previous question and then
[1:54:47] I've included the link here to Robert Kennedy's initial paper in 2010 that outlines all the specifics of land
[1:54:56] Trender and how that algorithm works okay question 18 is also repeat I know we all want the area analysis you know
[1:55:17] who's doing a study over the single pixel I get it not currently available so the question was get a summary of
[1:55:24] NDVI change over an area there are other tools available for that type of stuff I take a look at climate insurance really
[1:55:33] the first thing that comes to mind in terms of identifying your own area using the Landsat imagery or them for the
[1:55:42] modis imagery using appears so both of those tools are really great and then appears should be getting the lanta amid
[1:55:49] imagery soon as well so take a look at that question 19 how can i download the processed images if i want to play with
[1:56:06] them within Google Earth engine you can download them yourself if you script it but I would also recommend going to one
[1:56:20] of the data port data portal so earth Explorer is a great place to obtain the Landsat imagery and many other remotely
[1:56:29] sensed images yourself so take take a look at Earth Explorer you can you can google that NASA Earth Explorer that's a
[1:56:35] really great place where you can download the images there there's also there are a few others such as Landsat look viewer but I'd
[1:56:48] start with our earth Explorer and yes you can download them you can open them using QGIS or arc or imagine or env
[1:56:58] whatever software that you are most familiar with and and run the analysis yourself and again that's if you are
[1:57:05] interested in a very specific date that might be the best route okay question 20 I was wondering if there's a
[1:57:25] similar application to get soil moisture point data like snap wow that's a good question not that we are aware of there
[1:57:36] are some visualization tools for soil moisture that we've included here as well so maybe take a look at those and
[1:57:50] see what they have available for assessing change in soil most moisture over time you know that the time frame
[1:58:00] available for this map data is it's much shorter than say a whole Landsat archive but I would imagine you could at least
[1:58:10] investigate changes in soil moisture property over different time periods you could create sort of a change map
[1:58:20] yourself using this map data but I'm not very familiar with accessing and downloading those data so maybe start
[1:58:28] with those links and you could follow up about via email if you have other questions okay next question can we use land
[1:58:42] Trender for marine habitats so there was a marine question earlier we provided a couple links to some papers about
[1:58:50] monitoring change detection and for marine habitats but again the marine system in a lot of ways has
[1:58:59] complications that the the land doesn't so penetration of the data through the water column is an issue right so for
[1:59:14] corals especially some sometimes the seagrass is tend to kind of float on top of the surface you can pick up things
[1:59:22] like NDVI a little easier but corals are really difficult to to get information about due to the fact that they're
[1:59:31] underwater at least with these passive type optical sensors the next question how do we integrate our own algorithms
[1:59:51] through Google Earth engine and we've provided a link tool and render the online Land Trender guide to but also I
[2:00:02] would suggest just googling basic Google Earth engine example scripts or something like that they have a lot of
[2:00:12] resources so you can they have a whole like getting started packet where you can go through a lot of those codes and
[2:00:23] JavaScript or Python so yeah take a look at the land Trender link but also i'll google that as well and get the link and
[2:00:38] we'll post it here on this document too but yes there are a lot of resources available for Earth engine
[2:00:49] the next question what about the deal with spacial resolution through different images right so we that was
[2:00:57] sort of similar to the very first question that we had if you're using Landsat data it will all have the same
[2:01:04] spatial resolution of 30 by 30 meters if you want to include other data types such as data from sentinel you're going
[2:01:14] to need to do something to resolve those spatial differences right so you might have to do some kind of Riesling on the
[2:01:23] sentinel data to conform to the 30 meter Landsat pixel something like that so take a look at those resources that we
[2:01:31] provided there as well and so I know that we do have a few more questions here and what we'll do is we've reached
[2:01:49] the time limit here now and what we'll do is we'll take a look at those questions that we didn't get to during
[2:01:59] this Q&A session and we will respond to them by just writing them writing the answers in on the document and then
[2:02:08] we'll post the document on the website the are set website in a couple of days so if you had a question later on and we
[2:02:18] didn't get to it we apologize but it's great you know we really love this interaction and the ability to answer
[2:02:27] your questions and try to get through them so if you didn't get your question answered answered maybe check back on the are set website
[2:02:34] in a couple of days to see if we answered it via the document and if we still didn't answer it you can email
[2:02:42] myself or my colleague Cindy Schmidt with any follow-up questions so I just again wanted to thank you all for being
[2:02:51] here today and and spending the time with us be sure to complete the homework that we need to have those inba in two
[2:03:01] weeks so I believe that is May 1st for the deadline on the homework and please let us know if you have any other question
[2:03:13] so thank you all and have a nice day
