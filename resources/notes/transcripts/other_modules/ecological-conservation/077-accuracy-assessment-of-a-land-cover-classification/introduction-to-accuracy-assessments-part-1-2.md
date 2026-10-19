# Introduction to Accuracy Assessments, Part 1/2

`https://www.youtube.com/watch?v=jxeUy2JZYB8` · id 45 · 1:43:45 · module 92 — Accuracy Assessment of a Land Cover Classification

[00:01] hi everyone and welcome to assessing the accuracy of land cover classifications webinar my name is cindy schmidt
[00:10] schmidt and i and my colleague amber mccullum will be your instructors for today for this course we will have two two
[00:21] hour sessions each tuesday on february 13th today and february 20th from 11 to 1 pm eastern time
[00:30] we offer a repeat session in the evening from 11 pm to 1 a.m eastern time but please only sign up for one session each
[00:39] week week each session will consist of a lecture followed by a hands-on exercise you can find all the course materials at
[00:48] the website listed here this includes past recordings the presentation materials and the link to the homework we will also have our presentation
[00:58] materials available in spanish if there are any questions you can also email me or my colleague amber mccollum
[01:06] at the email addresses listed here we will have one homework assignment available after the second session next
[01:16] week week the homework will be submitted via google forms and the links will be listed on the course website
[01:22] to receive credit for homework you must submit all answers by march 6. to receive a certificate of completion
[01:31] you must attend both live webinars and complete the homework assignment it takes some time to process these
[01:37] certificates so you can expect to receive them about two months after the completion of the course there are several prerequisites for this
[01:48] course course first you should know and understand the fundamentals of remote sensing you can watch our on-demand course
[01:56] listed above which includes two one-hour recorded webinars that you can watch on your own time because because accuracy assessment is a follow-on to
[02:06] land cover classification you should have an understanding of land cover classification which you can do by completing our advance webinar listed
[02:14] here here lastly for the hands-on exercises we will be using arcgis software normally rsat uses open source software
[02:24] such as qgis whenever possible but for this webinar we determined that using arcgis provided the least complicated approach to teach
[02:33] accuracy assessment you can do accuracy assessment using qgis and if you're interested i suggest that you contact
[02:41] the very active online qgis community lastly you will need microsoft excel to complete the exercises both this week
[02:51] and next week as i mentioned previously you can access all the course materials on the rset website each week you will be able to
[03:03] find a pdf of the powerpoint presentation in both english and spanish a link to view the recording of each
[03:10] webinar session and links to the google form for homework submission please note that in order to view the
[03:18] webinar recordings you must register this helps us keep track of who is viewing them once you register you'll you will
[03:25] automatically be taken to view the recording so this is the course outline for this webinar series this week we will focus on accuracy
[03:36] assessment basics and next week we will include instruction on how to calculate an unbiased area estimate of your
[03:44] classes using the error matrix before we go on with the next slide i was wondering if we could have a quick
[03:53] show of hands to let us know if you've done a land cover classification before and if you have what have you used it
[04:01] for we'll wait a minute for you to type in your answers because we'd really like to know
[04:09] know how you use these land cover classifications and also if you want to add something in there if you've
[04:14] actually done an accuracy assessment before also and your results from those accuracy assessments that would be great as well
[04:29] so the agenda this week includes defining accuracy assessment discussing sample design and methodologies identifying appropriate reference data
[04:41] describing how to create an error matrix interpreting the error matrix to determine class accuracy and then we will start with the hands-on
[04:50] exercise exercise and then finally we will conclude with a short q a session so what is accuracy assessment
[05:02] it's the process used to assess the accuracy of a land cover classification or a change detection map
[05:09] it uses reference data that are assumed to be true it's a very important part of the land cover classification process
[05:16] because in addition to giving you an overall assessment of accuracy it allows you to determine the accuracy of
[05:23] individual classes accuracy assessment requires that you collect information about the land cover that is assumed to be true
[05:35] since you can't identify what every pixel of your classified land cover map is is you have to acquire information that is
[05:43] representative of the population the population in this case is the number of classes in your land cover map
[05:50] as well as the size of the classes to do that you must use the sampling strategy or design
[05:58] the basic rules for sample design are that one if you collected training data for a supervised classification
[06:06] the data used for accuracy assessment must be independent of the training data in other words you can't use your
[06:13] training data as accuracy assessment reference points this is really important important they must be completely different avoiding bias and the collection of your
[06:23] accuracy assessment data is key to this whole thing that's why you must spend time developing a good sample design and make
[06:32] sure you aren't using training data already used in your classification number three reference data must be collected for all of the classes in your
[06:42] land cover classification even if some of those classes are less important than others and even if they are very small
[06:49] classes classes to develop a robust sample design you have to consider the sample size and the sampling method
[07:02] starting with sample size the number of samples or points must be sufficiently large enough to statistically represent
[07:10] all the classes with enough in each class class to determine how many samples or points you need to collect for each class there
[07:18] are several different methods including the binomial probability theory which uses the expected percent accuracy and allowable error and other methods which
[07:29] use the proportion of area of each class no matter what method you use generally at least 50 points per class
[07:38] is recommended we will not be discussing the different methods to determine sample size in this webinar webinar excuse me so for more information
[07:47] you can view our set session 4 webinar from the carbon monitoring webinar series or go to the boston university
[07:55] biota site bee dot org listed here how you select the location of your points is also extremely important
[08:10] there are several different types of sampling methods including simple random sampling sampling stratified random sampling and systematic sampling
[08:20] simple random sampling means that you place the points randomly across the landscape the randomness reduces bias but there's no certainty that you will
[08:30] have all your classes represented or enough points in each class so this is not the preferred method for land cover
[08:37] classifications classifications on the far right is systematic sampling where points are placed at equal intervals according to some pre-decided
[08:46] strategy for example the points may be spaced equally 100 meters apart or 50 meters apart using this method you are likely to
[08:56] include every class but you may not have enough points per class so this generally is not the preferred
[09:03] method either for land cover classifications the stratified random sampling method is the preferred method in this method a minimum number of
[09:17] points are randomly placed in each category category the randomness reduces bias and by placing points in each category or class
[09:26] all land cover classes will be included so what are the best sources of reference data the preferred method is ground collected
[09:39] reference data because it is most likely representing the true land cover class however it's also the most expensive and
[09:47] time consuming sources of reference data could be an existing map existing inventory data such as forest inventory data or visual
[09:59] interpretation of air photos or high resolution satellite imagery whatever source you use ideally the reference data should be acquired at or
[10:08] near the same time as the classified data data if you collect the reference data at a later date than your classified data you
[10:16] may be collecting erroneous reference data if changes have occurred during that time in the region the reference data that you collect will
[10:28] typically have geographic coordinates and a land cover label that matches your land cover map in other words you wouldn't want to have
[10:35] a reference point labeled grassland if there's no grassland in class in your land cover classification you can then create a point or sometimes
[10:44] polygon file using gis software like arcgis or qgis the first step in the accuracy assessment process is placing the
[10:53] reference points or polygons on the land cover map using the gis software software you will then select the land cover map
[11:01] pixels that correspond to those points that results in the table that gives you the land cover class
[11:09] the associated reference point land cover label and the number of pixels or frequency of each combination in the picture on the left
[11:20] you can see the reference points overlaid on a land cover image in the table on the right the land cover
[11:26] classes are represented by numbers so for example class 1 might be water class 2 might be forest class 3 might be
[11:35] grassland and so on the first column are the classes from the land cover map the second column are the classes from
[11:43] the reference points and the third column are the frequency of pixels in each combination of the two
[11:53] so let's examine this table a bit further so we can create an error matrix in this example
[12:01] class 1 is hardwood class 2 is conifer and class 3 is other when the land cover classification and
[12:13] the reference points are the same that means the pixels are correctly classified classified in this example 24 pixels were correctly
[12:23] classified as hardwood 30 were correctly classified as conifer and 23 were correctly classified as other other the other pixels were incorrectly
[12:34] classified 10 were classified as hardwood but their reference data identified them as conifer five were classified as hardwood
[12:45] five were classified as conifer excuse me but the reference data identified them as other and one pixel
[12:54] was classified as other but the reference data identified it as hardwood now we can turn that information into an
[13:06] error matrix this matrix compares the reference data which is typically across the top and the classified data which is
[13:15] typically on the left hand side the diagonals in the arrow matrix are the pixels correctly classified according to the reference data
[13:31] the column totals are the total number of reference pixels in each class so there are 30 hardwood 41 conifer and
[13:39] 29 other reference pixels the row totals are the total number of classified pixels in each class so 38 pixels were classified as hardwood
[13:53] 37 were classified as conifer and 25 were classified as other the off diagonal values represent the errors in the classification
[14:07] for example 10 pixels were classified as hardwood but identified as conifer in the reference data five pixels were classified as conifer
[14:16] but identified as hardwood in the reference data it gets a little confusing but if you can remember that the reference data is
[14:24] across the top and the classification data are on the side then that helps you keep things a little bit straighter
[14:35] the overall accuracy of the land cover classification can be calculated by summing the diagonals and then dividing
[14:42] by the total in this example the overall accuracy is 24 24 plus 30 plus 23 divided by 100 which is the total
[14:54] which equals 0.77 or 77 accuracy the individual class accuracy is the diagonal value for that class divided by
[15:07] the row or column total total in this example the conifer accuracy is 30 divided by 37 which is 81
[15:19] or or 30 divided by 41 which is 73 percent so what does this mean and which one do you
[15:27] choose classification errors occur when a classified pixel gets misclassified either it is included in the wrong class
[15:41] or it is not included in the correct class class these two types of errors are called errors of omission and errors of
[15:49] commission commission errors of omission occur when a pixel is left out of the class being evaluated so
[15:56] for example all of the pixels that are actually conifers as identified by the reference data data those that have been classified as
[16:06] hardwood are errors of omission errors of commission occur when a pixel is incorrectly included in the class
[16:15] being evaluated so for example of all the pixels that have been classified as hardwood in your land cover map
[16:23] those that are actually conifers that have been identified by your reference data data are errors of commission
[16:31] you can also state those errors in terms of measures of accuracy user's accuracy measures errors of commission while producer's accuracy
[16:42] measures measures errors of omission so let's go back to our error matrix and determine the different accuracies
[16:53] the user's accuracy or errors of commission commission are the diagonal values divided by the row total so
[17:03] so in this example the user's accuracy for conifer is 30 divided by 37 which is 81 to interpret this you can say that of
[17:15] the 37 pixels classified as conifers 30 were identified as conifers and the reference data five hardwood and two other pixels were
[17:27] incorrectly included in the conifer classification the producer's accuracy or errors of omission are the diagonal values divided
[17:39] by the column total so in this example the producer's accuracy accuracy for conifer is is 30 divided by 41 which is 73 percent
[17:52] to interpret this you can say that of the 41 pixels that were referenced as conifer in your reference data
[18:00] 30 were correctly classified as conifer 10 were classified as hardwood and one was classified as other the users and producers accuracies give
[18:17] you a better indication of which classes have the greatest errors although the overall accuracy is 77 you can see that the user's accuracy for
[18:29] hardwood is 63 percent and the producers accuracy for conifer is 73 while all the other accuracies are
[18:37] higher this means that in your classified map you've overestimated the amount of hardwood pixels and under underestimated the amount of conifer
[18:46] pixels pixels so really there's probably a lot of confusion in this map between hardwood and conifer pixels
[18:57] to conclude i want to stress that determining the sampling methodology is not trivial trivial trivial according to
[19:06] avoiding bias by developing a random sampling strategy and using good reference data is important important generally eighty percent overall
[19:15] accuracy is considered good so you can see the example i use with seventy seven percent accuracy is sort of borderline
[19:23] however it's important to understand that identifying error is much more complicated than just reporting the overall accuracy
[19:31] it's really important to know which classes have the greatest error by calculating the users and producers accuracies
[19:39] accuracies next week we're going to use the error matrix to calculate unbiased area estimates of each class
[19:48] before i turn it over to amber mccollum to lead you through the exercise i want to test your memory on something that i
[19:54] said earlier so what is the preferred sampling method for doing accuracy assessment and you can type the answers into the q
[20:06] a box i gave you three methods earlier so if you can let me know what the preferred
[20:13] method is we can test your memory i'll give you a minute or so to type it into the box
[21:17] so if you typed in stratified random sample you were correct and the reason we choose stratified random sample it's stratified because
[21:27] you have land cover classes and you'll be able to put all your point your points into each landcover class and
[21:34] it's random so you can reduce the bias in picking your points now amber mccullum will lead you through
[21:43] our exercise for today thank you cindy the next step we are going to take for this webinar is to go
[21:56] through step by step the first exercise so exercise one accuracy assessment now you can go ahead and follow along as
[22:07] you listen to me go through the steps or you can do this on your own by going
[22:14] through the steps in the exercise one document it's totally up to you whatever you feel comfortable with doing
[22:22] for this exercise we are going to be performing an accuracy assessment of a classified landsat image we're going to review
[22:32] the sampling strategy and talk a little bit about reference points we're going to add reference points to a
[22:38] map and create an error matrix to assess the level of accuracy in the classification classification before you get started with this
[22:47] exercise please make sure that you have esri arcgis version 10 or higher and and a newer version of microsoft excel
[22:59] you also need to make sure that you download the associated data so you'll need the clipped and
[23:05] classified landsat 8 image and this is saved as landsat classified.tiff as well as the reference point shape
[23:13] file and these data can be found on the webinar website so you want to make sure you have those downloaded before we
[23:20] begin for this training we are conducting accuracy assessment using using arcgis software as well as excel while we have in the past used the
[23:36] freely available or open source software like qgis we determined that for this training it would be the most
[23:45] straightforward way to show you accuracy assessment using arcgis software we understand that some of you might not
[23:54] have that software freely available however there are some tools and and useful websites for using qgis for
[24:05] accuracy assessment and we have listed those in the training materials and you can contact us for for questions on where to find that
[24:17] information but we won't be able to provide any kind of support for actually conducting accuracy assessment with the qgis
[24:27] software we will just be using arcgis software here so there are some tools available for using accuracy assessment with qgis
[24:37] the university of maryland has created a tool set called biota which is a really nice go-to place to
[24:44] find information about qgis and also some of you on the line here might be experts in the qgis community so if you
[24:53] have any examples of tools or resources for using qgis for accuracy assessment feel free to share them with the community on here today
[25:06] so as we begin we are just going to launch arcmap as our first step so i'm just going to click on this here and
[25:14] launch arcmap as that launches i'll talk a little bit about what the what to expect for this
[25:21] exercise exercise so we are going to use a landsat 8 image that we have already classified if you're interested in conducting a
[25:31] land cover classification we've actually done that with a previous rsat webinar last year so you can go to the rset
[25:38] website and view that webinar to see how you you could create um a classified um map you're on your own
[25:48] but for this training we had we are just giving you the classified map ahead of time we are also going to be giving you
[25:59] reference points in order to assess the accuracy of the map map so as cindy mentioned in her lecture
[26:07] accuracy assessments allow us to evaluate how closely the classified image is to reference data from a different data source of information and
[26:18] ideally we would like to obtain reference data or truth truth um by visiting the locations on the
[26:25] ground so you're out there in the field with your gps taking point locations and you are making note that this is a
[26:35] agricultural area and you have that point right there that's the ideal way to obtain reference points you can also obtain reference
[26:44] points from aerial imagery or even high resolution satellite imagery so long as it's taken within a very close time
[26:53] window from your map your image that you're classifying in this exercise we've already provided the reference data and these
[27:05] were generated using the stratified random sampling approach and as cindy mentioned in the lecture this this generates random points within sub areas
[27:16] so it takes into account the area for each class and has a number of points distributed proportionally depending on
[27:26] how large the area is you can do this in arcmap using a handy tool from noaa's biogeography
[27:35] branch branch and it's a sampling design tool for arcgis and there's more information provided in the exercise about this
[27:44] okay so let's go ahead and get started so once you've opened arcmap on your computer computer just hit click cancel and we will start
[27:52] with a new untitled blank map one really important feature to have when using arcgis in order to do any
[28:02] kind of remote sensing or spatial analysis is you need to have this spatial analyst extension so we just want to make sure that we
[28:12] have that extension checked and it activated before we run any of our analyses analyses so if we go up here to customize
[28:21] and then to extensions we see here that we have the spatial analyst extension checked so we're good
[28:28] to go so we can go ahead and close that out out the next step we are going to do is add
[28:35] our classified landsat image so we go up here to the add data icon and we'll navigate to our exercise
[28:44] folder so once you have saved your data in an accuracy assessment folder it should look something like this
[28:54] you'll have a landsat tiff and a reference point shape file first let's just add the landsat tiff
[29:01] by clicking on it and then clicking on add so your color scheme might look a little different than this
[29:12] the colors are just generated randomly whenever you open them up in into arcmap but we're going to go ahead and change
[29:20] the names of our classes as well as the color scheme to reflect reflect what we would like to see
[29:28] so in order to do this in the table of contents we will just right click on our
[29:34] image image and then go to properties now if you click up here on the symbology tab you
[29:45] you will then see unique values and you will see each of these categories listed here so what we've
[29:54] shown you here on the document for the exercise on page four we have the land cover categories that we have
[30:03] already already created in our classification so we have water agriculture hardwood or light forest conifer or dark forest grass scrub and
[30:16] bare ground so we're just going to rename these labels to match those categories categories so the first one is water and again you
[30:25] can reference the exercise on page four to see these and then agriculture hardwood hardwood or light forest
[30:45] conifer conifer or dark forest grass shrub and finally bare ground now you can change these colors by
[31:10] clicking on the color icon here and you can change them to whatever conceptually makes sense to you so by
[31:17] doing that you can click on the color here sorry you have to give it a second to come up
[31:34] and then you can change the colors here here so i'm going to make my water dark blue
[31:44] my agriculture i'll change to orange my light forest i'll make a lighter green color i will make this a
[31:55] dark green grass shrub i'll make a sort of a brown color and then bare ground i'll make a
[32:05] tan and again you can change these to whatever colors fit in whichever colors you like then you can click apply and okay
[32:16] and now we can start to see some of these classes identified here in our classified landsat image
[32:24] so this is an image from northern california taken on april 6 2016. and so you can see that it is a pretty
[32:35] rural area there's a lot of forest forest region it looks like there's some agriculture here with a river
[32:44] running through this here and then we have a lot of shrub land and some bare ground now it's always a really good idea to
[32:56] save your arcmap along the way as you're working on it it's something i do very often as i've had
[33:05] my my information erased or my steps i've done um um not saved so you just go up here file
[33:13] save and we are going to save this as accuracy ex1 and we can just go ahead and save it
[33:21] within our accuracy assessment folder you can save it within your exercise one folder however you like to do it
[33:31] just to be consistent consistent so we should have this mxd extension already listed and one other tip while
[33:40] using arcmap or other geospatial software it's it's a good idea not to have spaces in your name so
[33:46] we often use these slash marks to avoid spacious spaces okay so we'll just save our map there
[33:55] so next we will add our reference points and ideally as i said it's great to have on the ground reference so you really
[34:04] know that that is true we're going to go ahead and add our reference points in in the same manner as the landsat image
[34:15] just by clicking on add data and clicking on reference points and add so then you should see a lot of points
[34:24] pop up on your map now we are going to identify the unique values within our reference points file so if we just right click on
[34:35] it within the table of contents we can then go to properties again go to symbology under categories
[34:51] then unique values under the value field here we're going to select land cover and then we're going to click on add all
[35:06] values now what you should see here are the same land cover categories that we have classified classified so it's really important to
[35:18] match those up so you want your reference data to have the same class distinctions as your land cover classified map
[35:29] so that's that looks good so now we can click apply and okay so you should see these classes listed
[35:37] here um on the side as well so the next step that we're going to do and now we've moved on to page 7 of the
[35:47] exercise for those of you that might be following along next what we're going to do is extract
[35:53] the pixel values to each reference point so what we want to do is we want to identify
[36:01] identify where all of these points are located what we've classified that in the image as as so we are going to use a arc
[36:10] toolbox this little red toolbox icon shown here along the top and and you can also if you'd like if you prefer
[36:22] you can use the search icon to find these tools we'll go through it the long way to just to ensure
[36:30] that that we're finding the right tool but it's up to you if you're really familiar with arc you can take the shortcuts when
[36:37] you'd like so we are going to use a spatial analyst tool extraction and then extract values to points
[36:51] so when you see a little hammer icon that means it's a tool you can double click on it
[36:59] for the input features we are going to select our reference points for the input raster that's going to be
[37:10] our landsat classified and now we're going to go ahead and save this output as values and we're going to save this in our
[37:21] folder with our other data you might see a security warning depending on the the computer you're using here at nasa we we often get that
[37:30] warning just a heads up that we're saving stuff to our our computer don't worry about it if you
[37:36] didn't get that so now we're just going to go in here to our accuracy assessment folder and save this as values
[37:48] and this will be a shape file and the extension should add dot shp if you don't add it yourself because it'll
[37:56] it'll save as a shape file but it's always a good idea to add the dot shp now click on save
[38:05] and then click on ok so you will see that when we conduct some of these processes you might see a
[38:14] earth icon here along the bottom you might also see the name of the tool being kind of displayed
[38:21] along the bottom and when the the process is finished running you'll see this little check mark if the process didn't work you'll see an
[38:31] x and if that happens you'll have to do some troubleshooting so our process worked and you may notice
[38:38] that we have a new file here called values so now we're going to go ahead and open
[38:46] the attribute table of the values by again right clicking and then going to open attribute table so now you can see here that we have a
[39:01] few different columns and we have a values column and a raster value column and what this actually is are the values
[39:12] are the reference categories and the raster values are the categories that our landsat image was classified as
[39:21] so you'll see just by kind of glancing at it that most of the time those are the same and
[39:28] however there are some places where they're different and so that's where the error is occurring in your classified map
[39:36] however the column names of values and raster value aren't very explanatory so we're just going to create new columns with new names just
[39:46] to make sure that we're not confusing ourselves along the way so in order to do that we are going to click on the table of
[39:56] contents table options here and then add field the first one we're going to add we're going to call it classified
[40:12] and it's fine to be a short integer and then click ok once we've done that the new column appears here
[40:22] what we can then do is right click on that column and click on field calculator you'll receive this warning that says
[40:31] you're about to edit this file and that's okay we know that we're going to edit it so click yes
[40:39] now all we're doing here is moving the the values from the raster value field to this new column called classified
[40:49] we're essentially just renaming it very simple simple so classified is going to equal raster value so we're just going to
[40:58] double click on raster value it should show up here down below and then we can click ok
[41:09] now you can see that all of the values in raster value are the same as in the
[41:15] classified column so we're going to do the same thing for our reference data we're just going to go up here and add
[41:23] another field call it reference click ok right click on our reference column go to field calculator yes it's okay that we're editing it
[41:41] and you you might see raster value down here so we're going to make sure we delete that
[41:46] and our reference column we're just transferring the values from the values column column aptly name and now we click ok
[41:57] and now you can see that all of these are the same as our reference column so now we're just going to go ahead and
[42:04] delete the values and the raster values column just avoid confusion so we can just right click on each of
[42:13] those columns and then delete the field it asks us are we sure we want to delete it yes
[42:21] and do the same thing for raster value delete field yes okay so now we are towards the end of page nine if you're
[42:40] following along in the um exercise document so now that you have your two new columns of classified and
[42:49] referenced the last thing you want to do is really be sure that you sort your reference column so this is
[42:58] going to be important when we do the error matrix later on we want to make sure that our
[43:05] reference columns line up with our classified so what we're going to do here is right click on our reference
[43:16] and then just click on sort ascending so now you will see that the land cover type type lines up with our classified image here
[43:29] and this is going to be important when we then create the error matrix so you can see
[43:35] what we first have water and then agriculture and if you were to scroll down you would see the other categories
[43:42] so just double check that before we go ahead and save our our values table so now the next thing we're going to do
[43:54] is is calculate the frequency so we have all the values of the reference points and we want to isolate
[44:02] the frequency of those values in our classified image as well as our reference points so then we can compare how well our classified
[44:13] map is doing in comparison to the reference so we're going to go ahead and close this and we're going to navigate to the
[44:25] frequency tool in arc toolbox again you can use the shortcut if you'd like but you can also do it the long way
[44:33] that i'm going to do here so we want to use an analysis tool statistics statistics and then double click on frequency
[44:45] in the input table we're going to select values this will automatically load those columns from the attribute table that we
[44:59] were just looking at for the output table we'll navigate again to our folder for this exercise and we're going to save this file as a
[45:14] frequency table and this is a database file dbf click save for the frequency fields we are going to
[45:30] select classified and reference we'll keep the summary fields unclassif unchecked unchecked and now we'll click ok so once the process is complete you
[45:52] should see this frequency check here and now you'll notice that we've added a frequency table to our table of contents
[45:59] in the map here so if we right click on this and click on open we can take a look at it
[46:06] so this shows us this table shows us how many pixels were correctly predicted in the landsat image
[46:13] for each reference point so if we were just to look this over we could see that our reference
[46:22] class is one so that's water and we've classified that as one five times so that's the frequency
[46:32] so now we can start to get a handle of what's going on here however this is still a little difficult to read so what
[46:39] we're going to do is input the frequency into a pivot table so we're just going to shift around some of these to make a
[46:45] little bit more sense so we're going to go ahead and close this here and we're not going to navigate to the
[46:56] pivot table tool again we'll do it the long way go through data management tools then table and then double click here on pivot
[47:09] table for the input table we're going to select our frequency table for the input fields we're going to select
[47:25] classified for the pivot field we're going to select select reference and then for the value field we're going to select frequency
[47:42] and this will all make a little bit more sense once we start to look at our table
[47:47] now we're going to go ahead and call this table our error matrix so again navigate to our exercise one folder
[47:58] save this as error matrix dot dbf click save and then click ok so this process should run fairly
[48:14] quickly quickly and now you should see an error matrix table shown here also in the table of
[48:20] contents contents so now we're just going to right click on this again and click on open and take a look at this here
[48:28] so now you'll see a table with six land cover classes and six reference point columns so it's starting to look a little bit
[48:38] more like that error matrix that cindy spoke about so we have our classes here and then the classified values so we'll
[48:48] start to look at this a little bit more the final thing that we're going to do within arcmap is
[48:56] create a excel file based on this table so we're going to go ahead and close this this table
[49:04] table and we're going to navigate now to the table to excel tool so this is a conversion tool
[49:12] excel excel and table to excel for the input table we're going to go ahead and select our error matrix
[49:23] so that's the what we were just looking at at and then we're going to again navigate to our folder
[49:31] our exercise one folder and call this error matrix and save it as an excel file that xls
[49:45] click save and then click ok now once this process is done running you'll see this table to excel check but
[49:56] you won't see any files added to our table of contents just because it created a new excel file
[50:05] in our folder it didn't really add anything to our map here for the rest of this exercise we're
[50:11] going to go ahead and use that file that we just created and do some of our calculations
[50:19] so again it's always a good check to save our map here before we close it out or or
[50:27] x out of it if we want to take a look at any of this at a later date and do any analysis
[50:35] so now we are on to part four calculating error in excel and this is the top of page 13 for those of you that
[50:43] are following along in your exercise so what we'll do here is just minimize our arcmap and then we're going to go ahead and
[50:53] open up our excel document so we can navigate here to our error matrix or sorry our accuracy assessment
[51:03] folder and open up our error matrix excel file you can also navigate to excel and then open
[51:12] do a file open and find your error matrix so now this error matrix is showing you your reference data in columns
[51:30] and your classified data in rows the classes are still labeled as numbers so we'll need to rename them
[51:39] in the rows under the classified column and also for each reference label to correspond to our land cover classes so
[51:48] we'll do that and we'll clean this up a bit bit the first thing we'll do is delete this
[51:53] oid column because we don't need it so if you just go in here and right click click we can click
[52:00] delete delete and just get rid of that column there the next thing we'll do is input our
[52:14] same classes one through six that we had from our our reference points and our image so we want one is water again following
[52:26] the same um um order as we had in our initial list so then we have agriculture and then we have hardwood
[52:48] or light forest conifer conifer or dark forest grass shrub and bare ground we can change the size of this column so that
[53:14] we can read all of our writing here and now we're going to do the same thing for each of these
[53:22] reference reference columns here so we have water agriculture agriculture hardwood light forest conifer dark force and bare ground
[53:50] again we can double click on these to make them a little bit bigger so we can see everything clearly so now this
[53:58] is starting to look like the error matrix that we talked about previously the first thing we're going to do is add
[54:08] a total reference points column at the end end and sum the values across so we'll add another column here
[54:18] call it total reference points and then we'll use the sum function so those of you familiar with excel are
[54:36] probably very familiar with these simple tools these simple functions you can use whenever we do a calculation we use the
[54:43] equal sign and then we can use these very simple functions functions so we're going to use equals
[54:51] and then sum and what we're going to do is sum across this entire row for water so we can click on b2 and drag it across
[55:06] and and to g2 and select all of those so what we're doing is summing all of these values
[55:15] then we can click enter and the equation worked for us there there are a lot of quick
[55:24] quick shortcuts that you can use in excel one of which being this nice little drag option option so if you want to apply that same
[55:34] equation of summing from your b column to your g column and apply it to the next row down
[55:43] you can just hover over this in the bottom right corner to when you see the hashtag here the hash symbol here
[55:51] and drag it down so we can go ahead and drag it down so the next thing that we're going to do
[56:08] is add a total classified points row at the bottom of the classified column so we'll just type this in here total
[56:18] classified points and then we are going to sum the values of each column here so for the water category
[56:44] we have five pixels that were classified as water for the agriculture we will have 12 so we see what we've classified them
[56:57] as as and then we can compare them to what the reference points tell us so we're starting to build this error matrix
[57:05] again we use the sum function and we can just drag and select each of these we want to apply the same equation to
[57:19] the agriculture column and again we can use this handy trick of dragging the equation across so it
[57:27] applies to each of these columns all the way to fair ground the last thing we want to make sure that
[57:42] we do is so is find the sum of all of the total reference points so that's going to
[58:06] be the same thing here we can drag it over over and we should have 200 reference points
[58:13] the sum of all of our rest reference points here so now to calculate the error we want to
[58:28] sum the pixel values that correctly match match with our reference points and then divide them by the total
[58:36] reference points so underneath your table we're going to skip a row to avoid confusion and call this
[58:44] this this row total correct reference points again we can make this column a little bit bigger so to calculate the total correct
[59:03] reference points we are going to use the sum equation and hold down the control key and add all of
[59:11] the values that are diagonal so here we are now moving on to the top of page 16 if
[59:21] you're working along with us in the exercise so the total correct reference points are all of these diagonal diagonals
[59:31] along our error matrix and this is what cindy talked about in the the lecture so we'll see this here we'll
[59:39] we'll first do this for water and then we'll add in agriculture and then hardwood and conifer grass shrub and then bare ground
[59:52] so what we're going to do here is use equals equals and you can or cannot use the sum
[59:59] function in the exercise we had you use sum but you actually don't need it because we're adding plus for each of
[1:00:05] the cells that we're adding together it's totally up to you so now we're going to select each of the diagonal so here we
[1:00:15] have have classified as water and it's a and its reference point indicates that it's water so b2
[1:00:26] plus plus we have classified as agriculture and our reference is saying that it's agriculture agriculture c3 c3 hardwood hardwood so where these things
[1:00:38] are lining up is where we add them into the equation equation conifer conifer conifer so these are all of the ones
[1:00:48] that we're getting right in our classified image and make sure we put a plus between each of them
[1:00:56] grass shrub and then finally bare ground so now if we hit enter we can see that we have
[1:01:08] 156 156 total correct reference points out of our 200 total reference points so now we can calculate the
[1:01:20] overall accuracy of the map just for simplicity's sake we're going to to move the total correct the total true
[1:01:33] reference points down here so we'll create another column called total true reference points and this is just going to be our total
[1:01:47] reference points here so it's going to equal equal h8 again we're just doing this to make everything clear and organized for for
[1:01:59] you all and maybe we'll make these bold just to make them stand out a bit again this is kind of formatting but it
[1:02:08] simplifies things a bit when we have it all all laid out here so now we're going to skip another row
[1:02:14] and and create a row called percent accuracy and here at the top of page 17 in the
[1:02:27] workbook in the exercise outline outline we see that the percent accuracy is equal to the total correct reference points
[1:02:37] divided by the total true reference points multiplied by a hundred so we're just going to add that equation
[1:02:45] in so here this this cell will equal the total correct reference points divided by the total true reference points
[1:03:04] multiplied by a hundred and the multiply symbol is this little star symbol here times 100 so your equation looks just like this
[1:03:16] and then hit enter so now you can see that our percent accuracy our overall accuracy for the map is 78 percent
[1:03:33] we're just going to go ahead and make this bold and just for security's sake we're going to
[1:03:39] go ahead and save our file here so we're not losing any of this work that we've done
[1:03:45] done okay so the final part of this exercise we're going to assess errors of omission and commission
[1:03:54] and as cindy mentioned errors of commission commission are are identified as the user's accuracy and errors of omission are the producer's
[1:04:05] accuracy accuracy errors of commission occur when a pixel is incorrectly included in a category being evaluated while errors of omission occur when a
[1:04:17] pixel is left out of a category being evaluated evaluated so we'll first start with the user's accuracy or the errors of commission
[1:04:29] so this occurs when we've included a pixel into our category that's not within that category okay okay so we're going to add a row down here
[1:04:41] called called user's accuracy and we'll go ahead and skip another row just to make it look nice
[1:04:54] and then we're just going to copy each of these categories because we're going to do it for each land cover class
[1:05:03] and we'll put them down here now what we're going to do is for the user's accuracy this is found by dividing the diagonal
[1:05:19] number number by the by the row total and multiplying by a hundred hundred so it's this diagonal where we got it
[1:05:30] correct correct divided by the the total reference points for that category okay okay so now we're just going to do start with
[1:05:40] water water where it equals b3 b3 b2 excuse me divided by the total number of reference points
[1:05:58] multiplied by 100. so you can see here that we the accuracy the user's accuracy is a little over 83
[1:06:11] for water now we can do the same thing for each of these categories so again it's the diagonal so where we
[1:06:19] got it correct here divided by the total reference points in that category multiplied by 100. we can do this for each category so now
[1:06:34] for hardwood and and conifer conifer just making sure we're selecting the correct diagonal for grass shrub and finally for bare ground
[1:07:19] now just for again for simplicity's sake let's clean this up a bit we can highlight this format ourselves
[1:07:28] to have one decimal point by using format cells decimals 2 okay we can clean this up a little bit also
[1:07:40] by merging this this these two cells to have the user's accuracy accuracy over this entire area so if you
[1:07:48] highlight the the two and then click on merge and center we're just gonna give it a nice gray
[1:07:55] shade shade and bold it to make it look like our nice little arrow matrix up above here
[1:08:05] so now we can see the with each of these different categories we have a different level of
[1:08:10] accuracy accuracy so you can see for example the agriculture is has a lower accuracy than say water
[1:08:20] and again remember these are errors of commission commission so so something's going on here where we're including
[1:08:30] including a a incorrect category into our agriculture category and seeing seeing a little bit more error in this category
[1:08:41] so now we are going to take a look at the producer's accuracy so these are the errors of omission when
[1:08:48] we're not including them in the category when we should be okay okay so we're going to do this in a similar
[1:08:55] manner we're going to skip a skip a row call this producer's accuracy copy our same categories over
[1:09:17] we can go ahead and merge these cells cells make it bold give it a nice header there
[1:09:28] so now the producer's accuracy is found by dividing the diagonal number by the column total and multiplying by a
[1:09:43] hundred so now here we for water we are going to use the diagonal divided by the column total the total classified
[1:09:59] points points multiplied by 100 and we'll do this for each category so again equals the diagonal divided by the
[1:10:14] column total times 100. so again what we have correct versus our total classified points multiplied by a hundred
[1:10:55] and then finally our bare ground and again we can just clean this up by formatting selecting going to format
[1:11:12] cells cells number and having two decimal places here now you can see that the producer's accuracy accuracy and the user's accuracy are a little
[1:11:26] different here so here we included all of the water pixels that that within that category so none of the pixels
[1:11:42] that were referenced that are truly water were excluded from our water category here so here you can see how accurate your
[1:11:57] classification is for each land cover class class and if the map has greater errors of commission or omission
[1:12:06] so you can see generally it looks like we have greater errors of commission instead of omission so commission is users
[1:12:18] omission is producers um generally producers are higher but not that's not true for all of them right so we see some differences in
[1:12:28] agriculture agriculture the the errors of omission are actually greater for bare ground so we can start to make some of these
[1:12:40] analyses and really think about where we're seeing the most confusion in our land cover map where we might want
[1:12:48] to obtain more sampling points for reference data areas where maybe we want to take a look at the spectral properties of our
[1:12:57] different land cover classes that we categorized initially and make some changes to those so this provides some really good
[1:13:08] insight into where we're seeing confusion and how we might want to modify modify our next land cover classification
[1:13:18] so oftentimes this is an iterative process process we want to make sure that we're evaluating the accuracy of
[1:13:26] our map before we start using the map so this is really an important step to analyzing your land cover classification
[1:13:37] next week in our exercise two and in our lecture for for next week we will really focus on this idea of standard error
[1:13:47] and in our classification and think about the area over which we have each of these categories categories so we may
[1:13:58] see some differences in our accuracy if we include the area for each of these categories for example
[1:14:06] the water category might have a smaller amount of error area in our entire map and therefore the
[1:14:15] error we might want to account for that error error a little bit less in comparison to some
[1:14:21] of the other land cover classes and so that's going to be the focus of how we calculate standard error
[1:14:28] and how we include a non-biased estimate of error by evaluating the area in our each of our land cover classes
[1:14:42] so that will be for next week our additional we have some additional online resources at the end of this
[1:14:49] exercise if you're interested in any of them there's a nice overview of map accuracy assessment and area estimation from the food
[1:14:58] agriculture organization and some others listed here so that concludes our exercise for session one don't forget to save your
[1:15:11] save your excel file and we will see you next week and i think we'll have some time for a question and
[1:15:19] answer session if some of you followed along but had some errors or some questions along the way so thank you all
[1:15:43] all right everyone so we have about another another little over half an hour left in this session
[1:15:50] session mainly to answer questions that you might have if you have questions specifically about the exercise that amber just went
[1:15:58] through through i do advise that you take more time and go through that exercise yourself to because it's fairly straightforward
[1:16:07] but if you do have any issues after you go through it yourself please feel free to email us
[1:16:16] and amber and i will be online here for a while to answer your questions and i'll try to
[1:16:22] [Music] so we have a few people asking about the kappa index we have actually chosen not to include
[1:16:38] the kappa index in this particular webinar and that's primarily because there's a lot of evidence in the
[1:16:46] literature right now that the kappa index is not a very useful index to use i know it traditionally
[1:16:53] was used in the past for accuracy assessment after the producers users and overall accuracy was done then
[1:17:03] a lot of times people would use the kappa index to give you sort of a another good measurement of accuracy but
[1:17:12] there have been some recent papers out there in the literature saying that that particular index is not very useful so
[1:17:21] we chose not to include the kaffa index in our webinar i think next week when we do the estimated
[1:17:29] unbiased area estimation that will be much more useful to you we've had a lot of questions about
[1:17:56] classification classification and as we said at the beginning of this webinar series this webinar is focused on accuracy
[1:18:04] assessment not classification we actually did a webinar series about a year ago focus on land cover classification
[1:18:12] classification so we're not we don't really have the time uh to answer questions about classification in this particular
[1:18:17] webinar series however if you do have questions that you would like answered i would advise first that
[1:18:25] you look at the webinar that we did a year ago on land cover classification and then if you still have questions
[1:18:33] that you email us and we'll be able to hopefully help you out or at least give you some information that might be
[1:18:41] able to help you out so there's a question about how to minimize the error of commission actually trying to minimize any of your
[1:19:04] errors errors at this point what the accuracy assessment does is it gives you a good idea of where you have confusion
[1:19:11] between your classes so you may have confusion between different vegetation land cover types and so forth and that that point what you need to
[1:19:20] decide is whether you accept those errors or whether you go back and redo your land cover classification
[1:19:31] understanding where those errors are so you might bring in additional information that will help you with that
[1:19:35] land cover classification for example and one example might be that you are having confusion or errors of commission
[1:19:44] in in in in vegetation areas that have vegetation but maybe they incur occur on different elevations so you might be able to bring
[1:19:56] in an elevation data set that helps you sort of separate out different vegetation types depending on where it is in that elevation
[1:20:05] spectrum spectrum so there's many ways you can go back and improve your land cover classification based on the results that you get from
[1:20:12] your accuracy assessment here's a question is it appropriate to use google earth imagery as a reference for accuracy
[1:20:37] assessment the answer is yes there are some really good resources out there for the best ways to do that
[1:20:48] honestly any kind of imagery that is a higher spatial resolution than the land cover classification will give you
[1:20:59] better information than not having anything at all we'll we'll get you some information on resources on the best way to use the google earth
[1:21:08] imagery yeah there's uh several questions here about kappa again and there there's one paper in particular and i'll need to
[1:21:27] reference it but it's called death to kappa kappa and that's the one that's been most widely published and used and then
[1:21:34] there's been some follow-up papers after that about how kappa is not being used in the literature for accuracy assessment these
[1:21:44] days days again i'll try to get the reference for that paper and we can post it there's a question earlier on
[1:22:04] question two where it says typically scientific method takes dictates 20 plus one samples samples why is it so much higher for error
[1:22:13] estimates so i'm not i don't quite understand where the scientific method dick takes 20 plus one samples it
[1:22:22] getting getting samples for doing accuracy assessment is really dependent on how many classes you have have and
[1:22:31] and understanding the statistics that go into creating a stratified random sample and generally the recommendation is to have at least
[1:22:41] 50 50 per class i also notice that a lot of people are giving great advice on how to use
[1:22:52] qgis for this assignment and i i highly encourage that you use qgis we chose arcgis just because for us it
[1:23:02] was a little bit easier to put together this webinar however i think if we were to repeat it
[1:23:07] again again we would try to use qgis so i recommend that any of the advice that people are giving you here online
[1:23:18] if you're interested in using qgis that you should go for it and maybe you can send us
[1:23:24] the process that you use to get there and some of the issues that you've run into somebody asked if you can use sentinel 2
[1:23:39] data for accuracy assessment of land cover classifications derived from landsat 8 data the answer is yes i mean you can use
[1:23:49] you can use anything that you think is of higher quality than your land cover classification data the sentinel 2 data
[1:24:00] don't necessarily have higher spatial resolution resolution so so i'm not sure if the question is referring to using doing
[1:24:11] visual interpretation of the sentinel 2 data or to do a land cover map and use that for your accuracy assessment that
[1:24:19] would probably be least preferred but but oftentimes oftentimes in various locations you don't have a choice right there is no other better
[1:24:30] reference data to use so in some ways you have to use what you can even though your
[1:24:36] your errors or what you define as true for your reference data may not be as precise as if you went on the
[1:24:44] ground and tried to collect that information yeah so again somebody asking to use the same imagery as the reference data if
[1:25:00] you don't have anything else manual interpretation essentially of your landsat imagery or your sentinel imagery whatever it is that you're classifying
[1:25:09] can you use that do manual interpretation of that to use as your reference data yes if you don't have
[1:25:16] anything else then yes you can use that if you feel fairly confident in your interpretation interpretation of those data
[1:25:29] okay i'm starting with question one elizabeth elizabeth i've noticed here's a question i've noticed that changing projection of point samples
[1:25:36] from utm to gcs so geographic coordinate system to be used with gps device or google earth results
[1:25:44] in shifting in point locations yes which in turn affects the accuracy of the collected reference data how can
[1:25:51] we manage this that's a really good question sometimes sometimes what people do is rather than collecting a single individual point they'll
[1:26:04] they'll collect points say in a particular area so if you know your pixel size is 30 meters by 30 meters you
[1:26:14] might collect information in a larger area than that so you can compensate for any difference in those pixel locations
[1:26:34] okay question six i think amber answered that what was your reasoning to not simply rename the fields with the alt
[1:26:41] with the ultra field tool i think uh amber answered that online but i think she just wasn't aware of
[1:26:49] that particular tool and i noticed later on that a lot of people were mentioning that tool although there may be some limitations
[1:26:56] if you use that tool and then bring that information into excel so here uh question 11 elizabeth
[1:27:15] if you are working with 2015 images is it okay to use 2016 reference data assuming that is only close reference
[1:27:25] data available so ideally as i said before you want to use reference data that's exactly the same time as your
[1:27:36] classification classification because if the any changes have occurred during that time in this case between 2015 and 2016
[1:27:46] then your reference data is going to be different than your actual classification data but if you think there hasn't been much
[1:27:53] change or you know where that change has occurred occurred then if that's the only reference data that you have
[1:28:00] then you can go ahead and use it there's a question here land cover class provided with fluxnet data are often
[1:28:16] different from those of the igbp land cover class is this indicator of bad accuracy of igbp so there's no way for me to answer
[1:28:27] that question at this point with the information that i have right now question the next question what spatial
[1:28:40] resolution resolution raster pixel size do you suggest to use for a national scale in a land cover generation of seven
[1:28:50] classes based on remote sensing so again we aren't really focusing on land cover classification in this particular webinar
[1:29:01] we did a land cover classification webinar about a year ago and i suggest you take a look at that
[1:29:08] i'm not an expert in national land scale land cover generation so i'm not sure if i can answer that
[1:29:15] question however i know there are some global efforts going on um mapping land cover at a national
[1:29:24] scale using landsat landsat spatial resolution imagery so around 30 meters question the next question how can we
[1:29:38] explain the reason for low and high percentages for users and producers accuracy well those are errors the the low
[1:29:50] percentages are errors in your classification classification and that's letting you know that you are some of your classes are being confused
[1:29:58] with each other so at that point you need to either go back and take a look at your
[1:30:05] classification to see where those confusions are occurring and seeing if you can improve that classification maybe bringing in some ancillary data like
[1:30:15] elevation elevation or dividing your region up into bioregions or something like that are there any recommendations or rules
[1:30:36] of thumb on defining the optimal sample size with respect to the area of analysis analysis and the number of classes
[1:30:44] so as i said at the beginning there actually are some fairly rigorous statistical statistical processes that you can use to determine
[1:30:52] what your sample size is and we aren't going through that in our webinar this week however i know that in practice
[1:31:06] a lot of people will say say use use a minimum of 50 points per class that's just a ball
[1:31:16] park and it's also dependent on what you're using for your reference data so for example if you if you're doing field
[1:31:24] work to collect your reference data it may be really difficult for you to get 50 points per class
[1:31:32] because of the limitations of going out in the field and in addition to that's also very expensive
[1:31:39] if you're using aerial photography or high spatial resolution imagery then you might be able to get at least
[1:31:47] 50 points per class if you're doing an object oriented classification classification so that's using segmentation how can i
[1:32:01] get the accuracy assessment it's the same process you you get reference points and you relate the reference points to
[1:32:13] your your to your segments essentially it's exactly the same process so there's a question in these exercises
[1:32:24] of land cover classification was supervised or unsupervised the area so is the area different is the error
[1:32:32] different depending on whether you're using supervised or unsupervised classification classification every classification will be different whether you're doing unsupervised or
[1:32:42] supervised so there's no way for me to really answer that question so there's a question can we use this
[1:32:54] method for accuracy assessment with polygons polygons as reference data instead of points yes you can you can use polygons instead of
[1:33:02] points points and collect sort of average information about the land cover class within a polygon there's various ways you can do it it's
[1:33:15] easier with the points but then you run into the issue of accuracy of location of those points as somebody had
[1:33:22] asked about that earlier somebody asks in the case of this exercise how did you choose the 30 meter
[1:33:33] cell size of your raster data set we use landsat imagery for this exercise as we do in most of
[1:33:43] our exercise and the cell size of landsat imagery is 30 meters so we didn't choose it it was
[1:33:51] that is the characteristics of that data set again there's another question about how many samples per class are enough for
[1:34:00] accuracy assessment and i'll again i'll say that you have to do a thorough statistical analysis to determine that however
[1:34:10] in practice a lot of people give a ballpark of about 50 per class but that's also dependent on what you are
[1:34:18] physically able to do depending on whether you're going out in the field and collecting the data or
[1:34:25] you're using an existing data set somebody asked what about working with pan sharpening of images so i'm not sure
[1:34:40] um what the question is exactly exactly if you're talking about if you're asking a question about using pan sharpened
[1:34:48] images for your reference data that will often work it's similar to using any higher spatial resolution imagery where you're getting slightly
[1:34:59] better information than a non-pan sharpened image so you could use a pan syrup an image for your reference data
[1:35:10] if you didn't have anything else somebody asked how to handle pixel shifting in the time series for
[1:35:26] for classification the first thing you should always do with imagery if you're doing time series um if you're looking
[1:35:33] at a time series and looking at changing detection or something something like that the first thing you should always
[1:35:39] do do is is overlay your imagery on top of each other to see if there's any pixel
[1:35:46] shifting and if there is you have to fix that that right before you do any other kind of processing now that this answer
[1:35:56] is more addressing a change detection issue or time series issue not accuracy assessment here's a question can we produce
[1:36:13] reference data from ndvi calculation that is probably not a preferable choice for reference data it sort of depends on what you're
[1:36:29] comparing the reference data to so if you're if you have an ndvi calculation and you're trying to identify a land
[1:36:39] cover classification then that doesn't make much sense okay here's another question i have two landsat etm plus images of my study area
[1:37:08] of my study area with hillary terrain for two different periods the data resolution is 30 meters how can i differentiate between current
[1:37:18] fallow ag land at pine forest and scrub land land again this is we are not focusing on
[1:37:25] land cover classification for this particular webinar series although i can see that maybe what we need to do is
[1:37:32] another land cover classification webinar focused on distinguishing particular land cover types for this webinar we're really just
[1:37:41] focusing on the accuracy assessment portion portion of the land cover classification process so differentiating between different land cover types it's a really difficult
[1:37:56] question question depending on where you are in the world and what the chara what the spectral characteristics of those land cover
[1:38:04] types are and that's that answer is far more involved than what i can do in the next few minutes
[1:38:20] so here's an interesting question any suggestions for improving accuracy when you have spectral mixing within a pixel
[1:38:30] so i'm not exactly sure if i understand the question so all pixels if if you're using landsat or whatever
[1:38:41] will have a combination of land covers within that pixel pixel most of the time so within say a 30
[1:38:48] meter pixel you may have more than one land cover class but you may have a dominant class in that pixel
[1:38:57] so depending on how you're collecting that that accuracy information you'll have to understand understand that if there's more than one
[1:39:08] land cover type within that pixel you will choose the dominant type that's one way of addressing that
[1:39:14] question can error be explained by the pixel size as well and proximity with the boundary between between two different classes absolutely there's
[1:39:34] error can be explained by a lot of different things the pixel size certainly plays a part in that depending on
[1:39:43] the level of detail of your reference data so if your reference data are really very detailed and you have a
[1:39:49] pixel size of 30 meter or more there could be some error due to those discrepancies hi everyone this is amber so we had a
[1:40:05] question earlier on pertaining specifically to the exercise about about seeing some negative negative 99999 values in the
[1:40:20] um raster value column when you extract the values to point and and this shouldn't be an issue if you use
[1:40:33] the files that we provided you with so just making sure that that you're using that landsat tiff as well
[1:40:40] as the reference data that we provided on the website usually a negative 99999 indicates that there's no uh data so
[1:40:50] it's a no value essentially and and given the files that we provided you with they should line up and they should
[1:40:59] be fine and you should not receive the negative nine nine nine um so also i would just recommend that at any
[1:41:07] point if you are creating a table where you don't see any values values or um the file can't be opened in arcmap
[1:41:18] i would just recommend repeating that step again going through very slowly in the exercise document because because if you are using the
[1:41:30] arc arc 10.0 or higher all those steps should um you should be able to follow along those
[1:41:37] without any issue so i always recommend just stepping through it again slowly and and seeing if you have the same problem and
[1:41:46] if you have the same problem over and over again um you know one other thing i would suggest
[1:41:51] is is saving your arcmap document and restarting arc sometimes it can get a little weird depending on your computer
[1:42:01] if you keep running into the same issues another tip that i would also give you all is make sure you're saving the files
[1:42:11] to your computer sometimes if you're working in arcmap and working off of a thumb drive for example
[1:42:19] example there might be some issues with opening the data or saving it in the right place so
[1:42:25] just a few tips along the way if you start to see some issues issues but if you keep having the same problem
[1:42:32] over and over again you can also email us with those questions all right everyone so it looks like
[1:42:46] we're winding down with the questions so we're going to sign off for now we thank everyone for joining us today for the
[1:42:53] accuracy assessment session session if you have questions while you work through the exercise please feel free to
[1:43:01] email us during the week we'll be happy to answer your questions again as a reminder there's going to be a homework
[1:43:07] at the end of next week's session not this week but next weekend there's only one homework so to get a certificate you
[1:43:14] have to be on both live sessions and do the homework lastly lastly i hope you join us next week for the
[1:43:23] session where we focus on estimating estimating area using some unbiased approaches i think this will be really useful and
[1:43:33] interesting for you so thanks again for everybody for joining us and we'll see you next week
