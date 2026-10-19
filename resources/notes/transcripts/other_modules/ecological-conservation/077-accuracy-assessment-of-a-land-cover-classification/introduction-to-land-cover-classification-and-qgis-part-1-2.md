# Introduction to Land Cover Classification and QGIS, Part 1/2

`https://www.youtube.com/watch?v=ZtSlipKIH8E` · id 176 · 2:38:02 · module 92 — Accuracy Assessment of a Land Cover Classification

[00:00] all right everybody i think we're going to go ahead and get started now um hopefully you all can hear me
[00:08] we've got um a lot to do today and i'm really glad for everyone um joining us so welcome to week one of our advanced
[00:17] webinar series land cover classification from satellite imagery my name is cindy schmidt and i'm going to be your instructor today
[00:34] for this course we're going to have two four-hour sessions so one is this tuesday and one will be next tuesday at the same time
[00:43] from 12 to 4 eastern standard time this advanced course will work a little differently than other advanced courses
[00:51] that we've offered in the past so i'm going to lecture for about an hour probably a little bit less than
[00:59] that that and then i'm going to go through an exercise step-by-step using qgis software software so the remainder of the time is to allow
[01:09] you to work on the exercise on your own so this is kind of like being in a
[01:13] classroom where i will lecture i'll demonstrate the exercise and then you can work on the exercise on your own
[01:21] however i'll be staying online to answer any questions or any problems that you might run into as you're going
[01:28] through the exercise so i won't be talking the entire time probably only the first maybe hour hour and a half or so
[01:37] and then allow you kind of to to continue on your own 15 minutes before the end of the session
[01:45] um so at about three hours and 45 minutes i'll give a quick summary and ask if there if there are any um
[01:53] final questions and we'll kind of gauge how many people are still online by the end this is kind
[02:00] of a new format for us so if if nobody's left at the end then we'll end it early
[02:07] but we'll be glad to stay online and tell tell everybody has their questions answered [Music] [Music] so there's going to be a homework
[02:16] exercise at the end of the second week for you to complete if you would like a certificate of completion and i'll talk
[02:23] more about that in a minute you can find all the course materials as usual usual at the website listed at the rsat
[02:32] website listed this includes the past recordings data links the in-class exercises and the homework although this format allows for a fairly
[02:44] lengthy q a session you can also email me at the address listed below if you have any additional questions during the
[02:53] week week lastly for those of you who have taken our set weapon webinars before you're going to notice that we're using
[03:01] some different software this time although this software which is called go to meeting has some really great
[03:08] features it does not allow you the participants to chat with each other you can only send me and the other
[03:16] organizers questions we really like that feature where you can chat with each other so we're hoping to find a solution
[03:24] to that in the future but since this is the first time for us using this new software
[03:30] software we're going to go with this format for this one okay i do have a few ground rules
[03:39] because this is a really different way for us to be doing things and there are a lot of you over 100 of you and
[03:47] probably more as we go through this course and there's only one of me so um it's a lot easier if we kind of
[03:55] stick to these rules um the first thing is that questions can only pertain to the topics presented in the webinars so
[04:04] if you have other questions about remote sensing or about qgis or something like that that i'm not going to answer those questions
[04:12] just because we simply don't have the time or the resources if you have not watched the prerequisite
[04:19] introduction to remote sensing webinars you probably shouldn't watch this webinar because you need to have this is
[04:24] a fairly advanced webinar i'm going to be going through things fairly quickly and it and you need to have at least the
[04:32] basics basics of remote sensing before you take this webinar webinar again please no general questions about qgis we're going to kind of just focus
[04:43] on on the plug-in that we're using for this particular course um you if you have questions about qgis and or the plug-in
[04:51] that pertains specifically to that this topic that i'm presenting then that's fine fine and then please know other questions
[04:59] about other remote sensing topics simply just we don't have the resources of the time in this particular course if you
[05:06] have other questions that you'd like to ask me outside of the course that's fine just send me an email and i'll be happy
[05:12] to answer those questions okay this is a topic everyone wants to know about homework and certificates we have two homework assignments for
[05:23] this course one that should already have been completed before this so it was part of the prerequisite requirements
[05:31] and then one which will be available after the second session so not this session but next week's session will
[05:37] have a homework available for you to fill out so you will submit both through google forms you will need to complete the course
[05:46] exercises in order to answer the homework questions to get a certificate of completion you have to attend both
[05:55] live webinars and complete both homework assignments you don't have to stay on for the full four hours of the webinars for each
[06:04] session but at least for the lecture and the exercise demonstration if you can we realize that there are sometimes some
[06:12] bandwidth issues um on on your end and sometimes that is makes it difficult for you to stay on the line we we
[06:23] understand that so we can make some exceptions for those situations just let us know it takes some time to process the
[06:31] certificates so you can expect to receive them about two months after the completion of the course from
[06:38] marines martin's um and her email addresses listed here but no need to email her unless after about four months
[06:46] you haven't received anything yet there are two main prerequisites as i mentioned previously for this course first you should know and understand the
[07:00] fundamentals of remote sensing again i can't stress that enough because this is a you know a little bit more advanced
[07:06] course and so it really helps for you to really have those fundamentals already under your belt so you can watch our on-demand course
[07:15] listed above which includes two one-hour recorded webinars that you can watch on your own time or if you've taken a
[07:23] course or something else previously that's fine too it's also necessary for you to download and install qa qgis so you have to do
[07:32] that before you start this course so hopefully all of you have done that already already this is the freely available open source
[07:39] software we'll use throughout the remainder of this course so it's available for both macs and pcs and i've
[07:45] used it on both and in addition to qgis you also need to install this plug-in that we're going to
[07:52] be using called the semi-automatic classification plug-in we have included some helpful instructions for installation on our webinar web page
[08:03] in addition to the software you need to download the data required for the exercise as well as complete the
[08:10] prerequisite homework assignment so there's a landsat 8 image that you need to download and please note that the prerequisite
[08:19] homework assignment gives you instructions on how to use that imagery using glovis website um um however just to give you a heads up
[08:31] glovis is undergoing some changes right now so it's a little more difficult to access that website so i would recommend
[08:38] using something like earth explorer to download your imagery if you haven't done so and to make it easier for you
[08:45] we've we've provided some written instructions that's available on our website on how to download the imagery through earth explorer
[09:00] as i mentioned previously you can access all the course materials on the rset website each week you'll be able to find
[09:07] a pdf of the presentation that i'm going to be giving in both english and spanish the pdf of each week's in-class exercise
[09:18] a link to view the recording of each week's webinar and after week two the pdf pdf and the google forms of the homework
[09:28] assignment assignment for homework's mission for this course i'm going to provide an overview of land cover classification
[09:41] and how it works i will not be demonstrating how to acquire landsat imagery this time since that's covered in the prerequisite
[09:49] exercise so hopefully all of you should know how to do that i will also provide step-by-step instruction on how to convert digital
[09:59] numbers to reflectance values which we haven't done in the past but we've had a lot of demand for it
[10:05] how to clip a landsat image to a vector shape file how to create training sites for a supervised classification and how
[10:13] to analyze those training sites and finally how to create a land cover map so this week i'm going to give you an
[10:25] overview of land cover classification and provide instructions on how to do a basic supervised classification using the plugin in qgis
[10:35] next week i will show you how to analyze the training site statistics to refine your supervised classification
[10:46] so this week again i'm going to give you a short lecture on land cover classification and then demonstrate spend most of time
[10:55] demonstrating an exercise on how to create this supervised line cover classification classification as i mentioned before because this course is four hours the
[11:05] format allows you to do the exercise on your own and ask questions if you run into problems so you can either follow
[11:12] me as i'm demonstrating the exercise or you can use the exercise the written exercise and go through it yourself after i've done the
[11:23] demonstration so first i'm going to start with an overview of land cover classification it's important that you understand the
[11:44] difference between a spectral class and an informational class a spectral class is a group of pixels that are spectrally similar
[11:54] an informational class is a land use or land cover class of interest like water or forest or urban or agriculture
[12:03] image classification is the process of assembling groups of similar pixels into classes that are associated with an
[12:11] informat with informational land cover classes classes so as shown in the images below on the left hand side is a satellite
[12:24] image of panama and on the right-hand side that satellite image has been transformed into a land cover map
[12:37] just as a refresher so all of you have should have seen this kind of figure before in the intro
[12:44] to remote sensing each object on the earth's surface has its own spectral signature in this example vegetation
[12:53] characteristic absorbs electromagnetic radiation and the red wavelengths but reflec reflects it in the near infrared soil on the other hand which is shown in
[13:04] the red line there reflects higher radiation in the infrared wavelengths than the visible wavelengths we can look at these objects a little
[13:21] differently if we plot one band against another actually this is not the right slide sorry sorry we'll do this one we can look at these
[13:38] objects a little bit differently if we plot one band against another in this case um we're plotting the band
[13:45] landsat band three so this is landsat actually five and seven not landsat eight which is the red band versus
[13:54] landsat band four which is the near infrared infrared um so that results in water in the lower left because it has
[14:03] low reflectance in both bands vegetation on the lower right because it has low reflectance in the red band but high in the near infrared
[14:13] band band and dry soil with higher reflectance in the red band but somewhere in between water and vegetation for the near
[14:22] infrared band so the software uses this information to distinguish between different land cover types if we just focus on the vegetation
[14:44] spectral signature but plot several types of vegetation as shown here in this image you'll notice that although the general trend is the same
[14:55] so you see that decrease in band three and that increase in band four there's some variation between the
[15:02] different vegetation types so the key to understanding how to do a land cover classic classification and i
[15:09] can't stress this enough is how to deal with this variability looking at the spectral signatures between vegetation and soil
[15:25] you can see that it's easy to distinguish between vegetation and soil right so you see the different
[15:31] signatures in the between the green lines and the red lines but it's much more difficult to distinguish within these broad classes
[15:40] if you translate the plot on the left to the plot on the right you can see that some of the vegetation
[15:47] pixels are spread out but some are quite close together this is the same thing for the soil
[15:54] pixels pixels right so if you look at the circles within the green circle and within the red circle
[16:01] there are some pixels that are really close together and some that are a little bit farther apart um so if you
[16:07] want to distinguish between different vegetation types you have to somehow figure out how to understand what that variation is
[16:23] to make things even more confusing we've been looking at spectral plots in two dimensions using only two image
[16:31] bands so like the picture on the left there there most of the time you will be using more
[16:38] than two bands for classifying imagery so the spectral plots become much more complicated complicated on the right hand side you can see what
[16:46] a spectral plot in three dimensions might look like so if you have three bands instead of two
[16:53] then your spectral plot gets again more complicated so you can imagine how difficult it is to determine
[17:00] the pixel characteristics of land cover types in using five or six bands or in five or six dimensions
[17:08] but fortunately the software can do that for us the process of image classification is defining the boundaries of classes in
[17:24] n-dimensional and and the dimensions stand for the number of bands that you're using in n-dimensional space using statistics
[17:32] of groups of pixels that represent land cover classes each group of pixels can be characterized by a variety of statistics
[17:41] including the mean the minimum value the maximum value and standard deviation the standard deviation is important because it tells you how tight or how
[17:51] spread out that group of pixels is in image classification you can assign a class name to the group of pixels in the
[17:59] spectral plot and all the pixels in the image that fall within those class statistics are given those labels
[18:08] for example you may identify a few vegetation pixels in your image but since you can't easily identify all the
[18:16] vegetation pixels in your image the computer looks at all the pixels in the image that are similar to those pixels
[18:23] that you identified and labels those pixels as vegetation and that's kind of a simple version of how classification
[18:32] works there are many different ways to classify imagery but almost all can be categorized into two approaches pixel base and
[18:48] object-based object-based in pixel-based approaches each pixel is grouped into a spectrally similar class these approaches are most useful where
[18:58] there are multiple changes in land use within a short period of time and they are best suited when there is wall to
[19:05] wall data coverage and time series consistency at the pixel level is required required object-based approaches partition an
[19:14] image into groups of pixels that are spectrally similar and spatially adjacent adjacent boundaries of pixel groups delineate
[19:23] ground objects in much the same way a human analyst would do based on shape tone and texture
[19:30] this process is called segmentation these kinds of images can be easier for an analyst to interpret this approach is also used on radar
[19:41] imagery to reduce speckle it's especially useful for high spatial resolution imagery because sometimes pixel based approaches using that high
[19:51] spatial resolution imagery tend to be very noisy the images below show the visual differences between the two approaches
[19:59] on the left is the pixel-based approach and on the right you can see the same image that
[20:05] has been segmented and classified it produces a much smoother image in this course we're going to be using a
[20:12] pixel-based approach to image classification but hopefully in the future future we'll be able to do another course
[20:21] using the object-based approach two different methods are typically used to create land cover maps the supervised method
[20:37] can use either a pixel-based approach or an object-based approach the unsupervised method uses a pixel-based approach the supervised method uses user-defined
[20:49] areas of known land cover types that are called training areas or training sites we're going to be talking a lot about
[20:56] that that in the next several minutes these areas are then used to define the statistical parameters of classification
[21:05] algorithms algorithms the algorithm then automatically identifies and labels all pixels or segments that are statistically similar to the training data
[21:16] in the unsupervised method a classification algorithm assigns each pixel into one of a number of user specified classes
[21:25] then interpreters assign each of the pixel groupings of value corresponding to a line cover class this is the process flow of supervised
[21:39] and unsupervised classification methods and the supervised method you select training sites based on your local knowledge about the region then you
[21:49] evaluate and edit those training site signatures and classify the image in the unsupervised approach you run a clustering algebraic algorithm
[21:59] first to identify spectrally similar pixels pixels then you identify classes in the image sometimes i like to run an unsupervised
[22:09] classification first just to get the feel for the spectral variation in the image image there are also ways you can do more of a
[22:17] hybrid approach where you do a supervised classification first using your training sites and then you can do
[22:24] an unsupervised approach for the pixels that were unclassified in the supervised approach and the plugin that we're going
[22:30] to be using in qgis actually allows you to do that a supervised classification method requires the analyst to select training
[22:45] areas where they know what is on the ground and this is the key to the supervised approach is that you
[22:52] have to have enough knowledge about what's on the ground in order to collect those spectral signatures then you digitize a polygon within that
[23:03] area or if the image has been segmented then the analyst identifies segments associated with the known land cover
[23:11] types types these known land cover types can be identified through a lot of different methods that includes going out and
[23:18] doing field work or you could use visual interpretation of high-resolution aerial photos or high-resolution satellite imagery like
[23:28] quickbird quickbird each known area has its own statistical characteristics or spectral signature the image shows three simplified land
[23:40] cover types conifers water and deciduous vegetation and their associated spectral signatures the spectral signatures from the training areas are then used to
[23:57] categorize each pixel or each segment in the image resulting in the entire image being classified actually that isn't always true
[24:08] different algorithms do it differently and sometimes an entire image may not get classified if there are pixels that
[24:15] don't fit well into those spectral signatures signatures and there's ways we you can deal with that and we'll talk about that during
[24:22] the exercise sometimes the pixels since they don't fit the spectral characteristics of the training signatures then you can use an
[24:32] unsupervised approach or you can actually alter the statistics of your spectral signatures to incorporate more pixels so there's some key characteristics of
[24:47] training sites that you need to know as a general rule if you're using n bands of data then you should collect
[24:55] more than 10 n pixels of training data for each class because a lot of people say well how many pixels should i
[25:02] collect for each training site so this is just a general rule however in reality it's not really a
[25:10] huge concern because most people will not bother to determine the total number of pixels for each class
[25:17] um um the point is that you want to make sure you collect an adequate number of pixels
[25:22] per class and some of the next rules will will actually address that the size of the training site must be
[25:31] large enough to provide accurate pixel values but not too large to include pixels that don't really belong to that
[25:38] class and i'll show you pictures of what that looks like in a minute it's important to select training sites
[25:45] in various parts of the image not just one small area and this is really important because there's spectral
[25:50] variation variation throughout an image and so you don't want to be collecting your training sites in in just one part
[25:58] of your image you actually want to collect training sites if you have training if you have those kind of line
[26:04] cover areas throughout your image sort of in different parts of your image it's also important that you have more
[26:13] than one training site per class so again to capture all the spectral variation in a particular land cover
[26:21] class class you want to have you definitely want to have more than one training cyber class um and you know ideally maybe five to
[26:30] ten per class minimum and lastly and probably most importantly each training site should have a fairly homo has should have fairly homogeneous
[26:41] pixels pixels um the idea with all of these rules is to make sure that you're capturing the
[26:47] variability of each class but not too much variability this is demonstrating what i mean by capturing the appropriate variability
[27:04] or minimizing confusion minimizing confusion between classes will be one of your biggest challenges in land cover classification
[27:13] confusion between classes can be caused by by land cover types that are spectrally similar and there's a lot of those as
[27:20] you'll see when we do our exercise by shadows or clouds or by training sites that are delineated too broadly
[27:29] so the image on the left and it's a bit it's a bit extreme but you get the idea
[27:34] shows a training site that's been delineated too broadly because it includes roads and bare ground as well as agricultural fields so
[27:44] all the red squares that we're seeing in there there are all fields that have been planted they're all agricultural fields all the
[27:52] kind of bluish areas there are also agricultural fields but they are not planted and then you'll see lines
[27:59] between them and those are the roads so if you're interested in collecting a training site for a particular field or
[28:05] for crops that image on the left is not a good way to collect a training site because not
[28:12] only are you getting crops but you're getting getting some of the road pixels as well the image on the right actually shows
[28:21] you a better way to collect training sites sites and you can see there's a couple different vegetation fields in that one
[28:28] that are just getting the vegetation but still capturing the variability within the field and then you see sort of other field
[28:39] three and four that are capturing those fields that are not planted planted and again you can still see a lot of
[28:46] spectral variability within those fields and you want to capture that so you can see how challenging this process can be
[29:00] so now we'll talk more specifically about getting training site information there's a couple different ways you can
[29:08] select training sites most image processing software packages will offer both methods one is by digitizing your own polygon as
[29:18] shown on the left so in that area we have a large lake um there on the left that's actually lake
[29:25] tahoe tahoe and i've digitized a square polygon a square training site within that large lake so this is good for large areas
[29:35] like lakes that are fairly homogeneous you have to be a little careful with this approach because it's easy to
[29:42] capture pixels that you may may not want to include so sometimes if you're catching if you're you're doing a training site and you're cl and
[29:51] you're drawing your own training site you have to zoom way way way in so you know exactly what you're getting
[29:58] the second way on the right hand side is called region growing which is which is shown sort of in the
[30:05] in the image on the right and i'll explain a little bit more what this is on the next slide but this approach is
[30:12] good for areas that have a lot of spectral variability region growing tools allow you to create training sites based
[30:28] on spectral characteristics so you can select an area where you would like to create a training site and
[30:35] use some kind of a pointer tool to select a pixel and those we called seed pixels the software will then select adjacent
[30:44] pixels within a spectral and size threshold that you choose so you need to understand the pixel values in your image
[30:53] an image that's been converted to reflectance will have much different pixel values than one that does not has
[31:00] not been converted converted similarly a landsat 8 image that hasn't been converted to reflectance will have a have much different pixel values than
[31:11] a landsat 5 image because the landsat 8 image is 8 is 12 bit and the landsat 5
[31:18] image is 8 bit so your total spectral values are going to be much different so for example an image that has been
[31:28] converted to reflectance values which range from 0 to 1 may have a spectral threshold of 0.01 or 0.04 or 0.08 something like that
[31:42] if you want to make the threshold small enough so you are only including pixels of interest but you also make i don't want
[31:52] to make it big enough to include an adequate number of pixels so these are all things that will kind of play around
[31:59] with using qgis and you'll see the difference between choosing a smaller threshold versus choosing a larger threshold
[32:15] this is an example of how region growing works in this example the central pixel in image a
[32:24] is known as the c pixel and it's the starting point to grow a region region if you specify the spectral distance as
[32:33] 0.1 the minimum size of the region as one pixel and the maximum width as 5 pixels as
[32:42] defined on the right hand side then the algorithm will pick the pixel shown in image c in the lower left there
[32:51] and then finally image d shows what the region looks like after it's selected once training sites are selected
[33:06] classification algorithms are used to classify the whole image by comparing spectral characteristics of each pixel to the spectral characteristics of the
[33:15] training sites there are many different kinds of algorithms out there the plug-in that we're going to use in g
[33:23] and qgis has three algorithms minimum distance maximum likelihood and spectral angle mapping these methods use different approaches
[33:35] to define the classes the next slide shows how minimum distance and maximum likelihood work for a minimum distance the mean value
[33:51] for each class in each band is calculated and a pixel is assigned to a class which has the shortest euclidean
[33:59] distance to that mean this algorithm is mathematically simple and computationally efficient but it's not necessarily good for classes that
[34:10] may be spectrally similar to each other maximum likelihood on the right uses the mean and standard deviations to
[34:19] calculate the probability that a pixel falls within a particular class this algorithm tends to be computationally more intensive but it allows for pixels
[34:30] to be classified to a class even though it may not be closest to its mean so i think the more popular of the two
[34:40] here is maximum likelihood the one i'm not explaining is the spectral angle mapping and that is often
[34:48] used for hyperspectral imagery so we'll be really focusing on in our exercise on using maximum likelihood so next i'm going to talk a little bit
[35:01] about about qgis so hopefully by now you'll all know that qgis is freely available open source geospatial software that has many of the
[35:20] same functions as arcgis it can run on macs or pcs and plugins are the main tools that
[35:27] allow users to do specific processing steps and for more advanced analyses you can use similar file types that you
[35:36] would with arcgis as well like shapefiles geotiffs and geodatabases it's important that you have a basic understanding of the geospatial software
[35:46] for this webinar series please make sure you have qgis downloaded and properly installed before trying to complete any of the exercises
[36:02] in this course we'll be using a plug-in called the semi-automatic classification plug-in developed by luca congido this is really an amazing
[36:12] plug-in that allows you to download several types of imagery pre-process imagery select and analyze training sites and use various algorithms to
[36:22] classify the image we're not going to be going through all of these things that it allows you to do
[36:29] but i highly encourage you to download the documentation for this plugin which is really thorough and helpful it will
[36:37] give you information on many more things you can do with this plugin then i will be able to show you in this course
[36:49] so here's the process flow we will use to conduct a supervised classification this week and next week
[36:57] so this week we will convert the image to surface reflectance subset the image set the input image create the training
[37:06] input file and create regions of interest or training sites so i'm going to kind of use those terms
[37:13] interchangeably interchangeably regions of interest is what the qgis plugin plugin calls them but they are the same thing as training
[37:22] sites um so just to not to get you confused confused um we will also create a classification
[37:29] preview and create a land cover map this week week so next week we're going to create more
[37:34] regions of interest and then learn how to analyze them and create a land cover map map a more refined land cover map
[37:48] before we get started i also need to clarify how the plugin allows you to define land cover classes
[37:55] you can define two levels of classes there's a macro class and a regular class class this week we will define the macro class
[38:06] as the broader land cover category similar to what you're seeing here and then the class is going to be more
[38:14] specific class for example in this example macro class can be vegetation vegetation and the classes can be grasses and trees
[38:24] next week we're actually going to do things a little bit differently but for this week we're going to follow this
[38:28] same kind of approach lastly i want to make sure that you please take advantage of the great
[38:37] support network for qgis since i am by no means a qgis expert and we'll not be answering general
[38:46] questions about qgis in this course i encourage you to all all of you to seek out these different
[38:53] avenues if you have questions other questions about qgis the user guide and training manual has many similar exercises that will guide
[39:02] you through different tasks you can also use stack exchange for specific questions that can't be answered from the user guide and
[39:11] tutorials tutorials additionally the qgis website has case studies that highlight new tools or techniques that may be useful
[39:21] for your analysis and again i can't stress enough for those of you that are interested in this land cover classification
[39:29] is to download the the manual that's associated with the plugin because it's it has some really great
[39:36] information in it so now we're going to move on to today's exercise exercise so this is going to be fun bear with me
[39:49] while i switch um a little bit here i'm going to go to qgis qgis and for those of you that are following
[39:58] along hopefully you have the exercise in front of you and it should you you should be able to get it through
[40:11] our website and it says exercise one supervised classification so i'm going to follow along with that hopefully you can follow along too
[40:21] again i'll be giving the demonstration on how to do this classification and then then at the end of it you will have the whole
[40:29] rest of your time to do it yourself and i will stay online to answer any questions you might have or any problems
[40:38] that you might run into so hopefully you can all see the qgis interface right here just to kind of remind you of what what
[40:49] we're seeing here we have i already have the um the plugin installed installed so if you look i have it also
[41:01] as a tab tab with the layers panel so i have the layers panel right now showing and this
[41:08] is how you can display imagery and qgis and then i have the plugin dock next to that
[41:16] which is right here so we'll kind of be going back and forth between those two i'm going to start off
[41:25] with the layers panel and the first thing you want to do with qgis no matter what you're doing
[41:32] even if it's a classification or not is you want to start a new project and give it a name so in order to do that
[41:41] you go up to the project to the menu to block toolbar up to project and say new
[41:49] okay and that kind of clears out everything that's there and then once you get started we can start it right
[41:56] now but we can save as and then you'll want to save it give it some kind of name and in this case what
[42:04] i'm going to do is i'm going to give it a name calaveras calaveras class class is what i'm going to call it
[42:11] and the reason it's called calaveras is because that's the county that we're going to be doing the classification on
[42:18] it's a county in california and i'll tell you more about that in a minute all right so if you've done the
[42:27] prerequisite hopefully you have the imagery already downloaded downloaded i'm hoping that you have that image you downloaded because i'm not going to be
[42:37] showing you that here so the first thing we're going to do is we're actually going to pre-process the
[42:46] imagery imagery so so if you look up at the toolbars on the top there's a lot of toolbars the top
[42:55] layer the top row is the qgis toolbars then the third row is actually the plugin toolbar so you see all of these
[43:04] things around here that's all we're going to be using for for the scp the plugin so the first thing we're going to do is
[43:13] click on the pre-processing icon which is this one right here it's an arrow to a blue thing and the
[43:22] the plug-in all the different things you can do with a plug-in will will pop up so you can see that here and i already
[43:30] have there's a pre-processing tab already selected you can see a lot of other tabs along here as well
[43:40] so the first thing you're going to do is you're going to go to the directory containing your landsat bands
[43:47] so as i mentioned in the exercise it's important that you have all the landsat bands including this mtl
[43:58] file file um in one directory and nothing else should be in that directory you should only have um
[44:06] those landsat bands in the directory so and i'll show you what i mean if i go to
[44:10] that directory i'm going to navigate to this kgis kgis and sat okay so here's my directory right here
[44:26] so as you can see this is the name of the landsat image right there so in that directory if i were to you
[44:35] can't see it but in that directory are all the landsat bands and only the lampstat bands there
[44:42] should be nothing else inside there so i'm going to select that select the folder and what happens is if you look down um
[44:54] oops i lost it there it is if you look down at the metadata all the metadata for those bands will appear
[45:04] you can see that you can see the radians you can see reflectance you can see all kinds of things here
[45:12] and this is all information that's needed in order to convert it to reflectance values okay the next thing it says select mtl file
[45:23] but you don't have to select that file if it's in the directory so if you download the imagery from globus or
[45:31] earth explorer that mtl file should be in there already so i do not need to go to that directory for the mtl file
[45:41] then the other thing you want to do is click right here where it says apply dos 1 atmospheric correction
[45:53] and then you also want to click this one create band set and use band set tools and i'll explain why you need to do that
[46:01] in a minute okay so this is all you need to do the next thing you do and i'm not going
[46:07] to do this right now because it takes a long time to run this process so hopefully a lot of you have already done
[46:13] this but if you haven't done it you can start doing it now and it'll probably take anywhere from depending on
[46:19] your computer from five to ten minutes to actually run this process so you collect click this little icon which is the like
[46:28] the run icon in the lower right right hand corner um and that will run the process so i'm going to leave this up right now
[46:38] and i'm actually going to display the corrected imagery okay so this is what you should see once
[46:52] that process is done these are all the different bands that have been corrected to reflectance from 1
[46:59] um to 11 and you can see they're all displaying here as they go along takes a little while to display them all
[47:07] and they're all black and white because you're only looking at single bands we're not combining anything yet
[47:12] and so and as you notice the name of the imagery has rt in front of it so you know those are the
[47:20] corrected ones because it has rt in front of it so hopefully that's fairly straightforward for you just
[47:31] remember it takes a while and two just remember i'm displaying this in the layers panel right now so
[47:39] yeah everything will pop up in the layers panel so the next thing we want to do is actually
[47:45] combine combine the bands that were interested into one file and the plugin will do that for us so if we go back to the same
[47:58] box that we use for the preprocessing preprocessing and we click on band set like this this one right here so right
[48:09] now there's nothing in it because i didn't actually run the pre-processing [Music] [Music] today but if i had
[48:19] what we would see is something like this so i have a picture of it if you click on bandsat and you can see
[48:28] in this word document that the top where it says ban list gives you the whole list of bands
[48:35] and the bottom gives you the just the bands that you're going to be using for this classification so as
[48:42] you can see it's bands 2 through band 7 for landsat 8. okay okay so i wanted to show you this just
[48:52] because because since i'm not running through this process because this actually takes a little while as well so i wanted to have
[49:00] the imagery all ready for you so once you get those bands in place there you'll click this box right down here that says
[49:10] create raster of band set or stack bands and then you click the run button which is on the
[49:21] lower right hand side again and that will will put all of those bands into one file and i'm going to show you i'm also going
[49:30] to bring up that imagery imagery it's this one right here so that image see now we see some color we'll change
[49:42] that color in a minute but that will have the rt in the front and then the suffix will say b stack raster so
[49:52] you know that image is the one where all the bands have been put together so just to make things a little simpler i'm
[50:00] going to turn off all the other images because we really don't need those to do what we're going to do i'm
[50:09] going to turn everything off here okay and the first thing we want to do is make those colors look a little nicer
[50:18] because they look a little strange so if you guys have done qgis before the way to change the colors is to right
[50:27] click click on the image and go to properties and then once you're in properties we're going to click on the left mine
[50:45] was already there to under style there's a bunch of options there on the left hand side general
[50:52] style style transparency etc but we're going to click on the style we're going to change the bands that are in these red bands so
[51:03] what we want to have is band 5 and the red band band band 4 4 and the green band
[51:16] and we can leave band 3 in the blue band for contrast enhancement we want to make sure it says stretch to min max
[51:25] and then on the right hand side we want to click load so that changes these min max values as
[51:33] you notice and then we just click ok and in a minute a new image will pop up where the colors
[51:44] look a lot nicer so let's take a look at this image for a second since a lot of you may not know california
[51:53] very well this is actually an image that covers actually half of kind of half of california half of nevada so on the
[52:01] left or the western side is california and where there's no vegetation on the right-hand side most of that's nevada
[52:10] in the middle you see a big lake that's lake tahoe one of the largest lakes in the
[52:17] in the u.s um and all this green that you see here is all the sierra nevada mountain range
[52:26] so it's all forested um and at the higher elevations we typically have conifers mostly just conifers so pine
[52:33] trees trees and at the lower elevations as you kind of go down to the left it turns into
[52:41] more deciduous vegetation and oak type of trees so from hard from soft woods to hardwoods hardwoods and then as you go even further left um
[52:53] it gets down into some flat areas that um the pink areas are sort of like bare ground bare soil
[53:00] you will also see some large sort of brown brown scars in the forested areas and those are actually large forest fires that
[53:08] have taken place in the last several years years from some very large forest fires and so those are very apparent in this
[53:16] in this image but we're not going to want to actually do a supervised classification of this entire image because it would just
[53:27] take too long and we're not interested in the whole image so what we're going to do is clip this image to a vector
[53:35] layer that we have so in order to do that i need to display the vector layer so
[53:44] i'm still in the layers panel here i'm going to go to the left hand side and it says at the very top there's an
[53:51] icon that says add vector layer so i'm going to click on that and up will pop a box
[54:02] that says add vector layer and and below source where it says data set i'm going to browse to where that vector
[54:11] layer is and luckily for me it popped up the vector layer popped up right where i wanted it to pop up so i'm going
[54:22] to click on calaveras.shape so this is a shapefile and open that up and then say open and you'll see it pop up in your layers
[54:39] panel but um for some of you it may not actually pop up in the image and as you notice it
[54:46] didn't pop up in my image so that's because the calaveras shape file and the image are in two
[54:54] different projections so in order to make that calaveras shape file appear we need to go down to the lower right
[55:04] where it says epsg and then it gives a number and you click on that and another box will show up
[55:14] and in order to make that shapefile appear you need to click this little box on the top that says
[55:22] enable on the fly crs transformation so it will automatically as arcgis and other software packages do allow you
[55:33] to display two different geospatial data types even though they're different um projections so then we just say okay
[55:44] and wait a minute and there we go so now you can see this is a county so
[55:55] california california and other states in the united states are divided into administrative counties and this particular county
[56:06] is called calaveras county um and it's actually where my dad lives and as you can see it actually doesn't
[56:13] cover the whole the image doesn't cover the whole county but that's okay we're only going to be classifying part of the image and
[56:23] because i think many of you will be interested in using some kind of an administrative boundary to
[56:32] to clip your imagery so we wanted to make sure to show you that so let's clip it
[56:38] to do that we'll go to raster at the top and we go to extraction and then we go to clipper
[56:53] so the clipper box comes up the dialog box and in the top you can see that the b stack raster
[57:01] image is already there so that's the one we want to use then the output file we actually want to
[57:07] give it a name and i'm going to call this output file landsat landsat underscore underscore calaveras calaveras you can call it whatever you want just
[57:22] remember what you um what you called it and then you and then keep the file type as geotiff
[57:31] then we'll say save then the next thing we want to do is make sure our no data value is zero
[57:42] and that the clipping mode will be mask layer if you have some some some coordinates coordinates for an area that you'd like to clip you
[57:55] can use that too with extent so this allows you to put coordinates in there there or you can drag
[58:04] you can draw a box or something on your image but we have the calaveras mask layer so we're going to use that
[58:13] so when we select mask layer you can see there it says calaveras and that's what we want
[58:20] we also want to make sure that down on the left hand side it says load into canvas when finished you
[58:27] want to make sure that's clicked on now we just click okay and it will clip the image it takes a
[58:42] takes a minute or so mine's taking a little bit longer and then when it's done a little box that comes up it says
[58:59] processing completed so you say okay and then you close the clipper dialog box box so now your image looks a little weird
[59:09] so we're going to fix that we're going to turn off the larger image we're going to turn off
[59:18] the vector file and we're left with our landsat calaveras so to zoom into that you can actually
[59:27] click on this this icon at the very top and we'll use this a lot especially when we're doing
[59:34] training sites it's called zoom full if you click on that it'll go zoom right into that image
[59:44] so again the colors on this are really kind of um strange so we're going to fix the colors doing
[59:50] the same way that we did the larger image we're going to click use your right hand right click on the image name
[1:00:01] go to properties and then once you do that you'll be in style we'll change the band one for the red
[1:00:15] band to band five band band four four for the green band and keep the blue band at band three
[1:00:24] make sure contrast enhancement is stretched in max click load on the right and you'll see the values change here
[1:00:34] and then say okay and there we go we've got an image that looks a lot nicer in my opinion
[1:00:43] so let's take a look at excuse me let's take a look at this image a bit because
[1:00:51] because you kind of have to understand this image before we start getting into training sites because as i said before to do a
[1:00:59] supervised supervised classification you really have to understand understand you know what it is that's on the ground
[1:01:05] and what clan cover classes you're interested in um um classifying classifying so in this image you can clearly see a
[1:01:14] fire scar it's from the butte fire that started on september 9th in 2015. so that's this big purple area right here
[1:01:23] it's a huge fire scar so the forested area which is all the green extends from the lower elevations in the
[1:01:33] west or the left to the higher elevations in the east and as you can see there are both light
[1:01:40] and dark green vegetated areas so in the lower elevation sort of on the south facing slopes the vegetation
[1:01:49] generally consists of oaks oak trees and shrubs shrubs the dark green vegetation is mostly conifers or pine trees
[1:01:59] you're also going to see some small lakes in this image so there's a large reservoir down here to the west of the fire scar you
[1:02:07] can see that right here and then to the right of the fire scar there's some smaller lakes there's a
[1:02:14] really small lake um right here and there's another one right here and then if you look further
[1:02:24] east of the fire scar and we'll zoom in a little bit later to see this more closely
[1:02:30] from a bit of a distance you can see these little patchy areas what that is is logging companies going
[1:02:38] in and logging the forest so they've clear clear clear-cut patches in that forest to take the trees for harvest
[1:02:50] and then these pink areas that are to the west of the fire scar are areas with little to no vegetation they're much
[1:02:58] more sort of lower elevation um and then this is late summer so uh uh in california the grasslands go brown
[1:03:10] and in the winter and the spring they are green so this will look much different different in a winter scene than it is does in the
[1:03:17] summer scene in the winter scene it'll be be all green so this is just to orient yourself
[1:03:23] yourself to what's going on in this image okay so now let's get started with our supervised classification
[1:03:33] so in this portion of the exercise we're going to do a classification using regions of interests again
[1:03:40] again those are the same things as training sites so so to do that i'm going to click now the
[1:03:48] way i have my qgis qgis setup is i have a tab here in the lower left called scp doc so i'm going to
[1:03:59] click on that tab so to start off with we need to tell the computer the software what image
[1:04:09] we're going to be classifying so we'll do that right up here so if you click on the triangle
[1:04:16] you'll probably see nothing up here so i click on that there's nothing there okay so in order to make our image appear you
[1:04:23] have to click on this refresh button on the right hand side so i'll click on that that and then if i click on the triang
[1:04:32] triangle again you'll see landsat calaveras so select that so that will go in the input image then we're going to want to create a
[1:04:43] training input file and and so you would click on this icon right here that says create a new training
[1:04:51] input so i'm going to go go navigate to the directory that you are interested interested in in and in this case
[1:05:08] my directory is called landsat landsat and then i'm going to call my training input training training [Music]
[1:05:20] [Music] and i'm going to call it session one for this week training underscore session one and that
[1:05:28] will be it's saved as this scp file so you'll see that appear under training input on the right hand side
[1:05:44] so the way this plug-in works is you identify the image you name the training input and now
[1:05:53] we're going to start collecting training sites so in order to do that and this is kind of hard to see sometimes if you
[1:06:00] haven't used this before is you go down to the bottom here and it says classification doc and then this other whole
[1:06:09] dialog box will kind of pop up there so you'll see roi signature list on the top and then halfway down you'll see roi
[1:06:18] creation creation so these are what we're going to be using for the next little while but before we do that
[1:06:27] it's really important for you to identify what your lend cover classes are going to be so i'm going to show you a word document
[1:06:37] right now this is our exercise document on what classes we're going to define so that should show up here in a second
[1:06:48] there they are so again this is in our exercise document we're going to define for this first exercise it's going to be
[1:06:58] very basic we're going to define six land cover classes we have water water we have two kinds of forest we have
[1:07:06] conifers conifers oak and shrub forest and then we have three types of bare ground we have burns
[1:07:12] so that large burn scar we have forest harvest which is the area that's been cut by the timber companies
[1:07:20] and then we have bare ground so other so that's basically all of those areas that are sort of this that
[1:07:29] pinkish color so we're keeping it very simple right now just so you can get the idea of how
[1:07:35] this whole thing works but it's really important that you define the land cover classes before you start any of your
[1:07:44] supervised classification and as i explained before the way this plug-in works and i'm going back to the plugin right
[1:07:57] now is you will see the mc which is sort of the master class the overall class and then the c
[1:08:05] which is the the class so what i had like to do is create a table and this helps me keep everything
[1:08:15] straight i'm going to bring back the document our exercise document and show you the table i created
[1:08:23] and this is what i'm going to refer to as i'm creating [Music] [Music] my training sites and this week again it's really simple
[1:08:33] next week it's going to get a little bit more complicated so it's even more important that you and create these
[1:08:39] tables before you start collecting the training sites so you can keep everything straight so in this table on the left hand side
[1:08:47] you can see the macro class names that i just showed you water two vegetations three bare grounds
[1:08:54] and each id number will match um the class name right so water is one vegetation is two bare ground is three
[1:09:03] so we have three macro classes and then the class name are the subclasses underneath each macro class so for water we have lake for
[1:09:14] vegetation we have forest and oak scrub shrub shrub for bare ground we have burned forest harvest and other
[1:09:22] and then the class id for this exercise and again you can do this different ways but for this
[1:09:29] exercise i've given each class name a different class id so so each class name will have a
[1:09:39] macro class id and a class id okay so these are the things that you need to keep clear
[1:09:46] before before you start doing training site classification so i'm going to use this table now to create training sites
[1:09:59] so the way to collect a training site there's various ways in there's two ways actually in the plug-in
[1:10:06] so if you look at the toolbar across the top you'll see right in the middle there's a
[1:10:14] an roi radio button that you can click on and you can click off so we're going to want
[1:10:21] to make sure that's on and then next to that button where it says roa roi you're going to see kind of
[1:10:30] this funny shape which is create a roi polygon and then next to that you're going to see a box with a square on it that says
[1:10:41] activate roi pointer so the first thing we're going to do is create a training site for our water class
[1:10:51] using using the roi polygon okay okay so so in order to create training sites um and i recommend this um no matter which
[1:11:03] method you're using is to zoom in to the area area that you want to create your training
[1:11:08] site so i'm going to do that i'm going to click on the zoom tool i'm going to zoom in since water and
[1:11:15] lake is our first class i'm going to zoom in to this lake right here so now you can see the the leg zoomed in
[1:11:28] and we're going to create a polygon in here here remember i told you there's two ways to
[1:11:33] do training sites you can do your own polygon or you can select a pixel and do the region growing so first we're
[1:11:41] going to do a polygon polygons are great for areas where you have have large areas that are homogeneous so
[1:11:49] lakes are great because a lot of these pixels in this lake are very very similar so in order to do that you're gonna
[1:11:57] click on the crate and roi polygon icon icon you're gonna go down into the lake you're to left click
[1:12:09] your first point oops oops let me get there oh there it is so when your first point
[1:12:18] clicks you'll see a little red x then your second point you'll again you'll left click and you'll see a line
[1:12:26] form form your third point again you left click and in the fourth point you can actually right click
[1:12:36] and it will close the polygon and that is your first training site right there so that will be water
[1:12:46] so these are only temporary until you save them so it's really easy if you make a mistake or something like that or
[1:12:53] you want to move it is you just you don't have to delete this one you can actually just
[1:13:00] digitize a new one so on the left hand side in the scp dock we want to make sure our mcid is one
[1:13:11] and our c id is one because that matches with our water and our lake and then the info you'll actually write
[1:13:20] the names in so mcinfo will be water sea info will be lake and then once you do that to save this
[1:13:34] signature you have to collect the save temporary roi to training input this little icon right here and when you do that
[1:13:46] you'll see the signature pop up in the signature list so it says um um it's the signature it tells you the mcid
[1:13:58] the id the label this the class label which is like and then a color and don't worry about
[1:14:07] the color for now we'll be able to change that later because we probably don't want to have like
[1:14:12] like as green but we'll change that later later now remember for this exercise we're only going to create one um training
[1:14:21] site site for each class however in reality you're going to want to cr you know collect a lot more
[1:14:28] training sites for each class but this is just to show you the process next week we'll do things a little bit
[1:14:33] different different so i'm going to zoom back out so remember i'm going to use this tool that
[1:14:38] allows me to zoom to the full image and then i'm going to look at my table again i'm going to bring this back for
[1:14:46] you to look at and my next class is going to be actually my next two classes are going
[1:14:54] to be vegetation classes so as you see i have vegetation forest forest and i have vegetation oak scrub
[1:15:02] and notice the class ids it'll be 2 2 and 2 3. okay okay so first i'm going to do vegetation
[1:15:13] forest forest so in order to do that i want to zoom in to a forested area i'm going to go way
[1:15:20] to the east here and kind of get an area that has some light and dark vegetation and i'm going to zoom in
[1:15:34] and and this for this training site i'm actually going to use the region growing tool so i'm going to click on activate roi
[1:15:44] pointer pointer but actually before i do that you remember that you can specify the spectral distance and the size
[1:15:55] of your training sites that you want so in order to do that i'm actually right now the distance says .01
[1:16:04] i'm going to increase that distance to .08 now you can play around with this a little bit and i'll show you what
[1:16:14] happens when you do change it then i'm going to click again on that activate roi pointer and i'm gonna
[1:16:22] select somewhere in sort of the darker green vegetation so maybe around here and i'm just gonna click
[1:16:33] so as you can see there's a training site that pops up there and a region of interest and all
[1:16:40] of those pixels that are in that orange color are similar pixel values to each other within point
[1:16:47] zero zero eight eight pixel values to each other and you can see it's a very irregularly shaped
[1:16:54] um polygon and it x it excludes pixels that are not within that same distance area now since this is a temporary polygon
[1:17:06] i'm going to show you what happens if you decrease the distance if we go back to 0.01 so i'm going to go back to 0.01
[1:17:17] i'm going to click on my pointer again and i'm going to select somewhere else in the image
[1:17:23] i'm going to select there so so when i do that you can see how much smaller smaller that region of interest that training
[1:17:32] site is because you've decreased the spectral distance by so much so you are really going to have to kind
[1:17:40] of figure out what kind of training site works best for for the landcover class that you're interested in
[1:17:49] for now though i'm going to go back to the 0.08 i like the larger size and i'm my
[1:17:55] training class i mean my lend cover classes are so broad that i want them to include more pixels
[1:18:03] so i'm going to go back to what we just did so that's our training class for vegetation slash forest
[1:18:14] now if you remember right now we have to label that this training class right so the the the math macro class id is going to be 2
[1:18:25] for forest that remains is to but we're going to change the info to vegetation which is the macro class
[1:18:33] and the subclass is called forest and then you save that okay okay then our next class is also vegetation
[1:18:46] but it's going to be the oak shrub class so i'm actually going to zoom back out and i'm going to go where i know
[1:18:59] there's more sort of oak and shrub which is kind of down in this lower elevation area so you still see
[1:19:06] green there but it's a different kind of green green actually there's several different kinds of green there but we're just going to
[1:19:12] kind of pick one um um and again i'm going to use the region growing tool because there's so much
[1:19:20] variability around here and i'm going to drop it in one of my green pixels here and again it creates a fairly large
[1:19:30] training site and and i'll go to my roi creation site and the vegetation vegetation [Music] [Music] macro class id is going to remain as two
[1:19:41] because it's vegetation the oak shrub class id is three so these all stay the same i'm just going to change my c info
[1:19:50] to oak slash shrub and then i'm going to save it so next we're going to do our three
[1:20:00] bare ground classes i'm going to zoom back out and the first one is the burned area so
[1:20:08] i'm going to zoom in to the burned area oh wait do you see that okay so if
[1:20:19] you look at this burned area it's kind of interesting because there there's a lot of spectral variability here
[1:20:27] and that's just something to keep in mind when you're collecting training sites is to make sure you're
[1:20:34] capturing all that spectral variability and to do that and we'll do this next week is the best way to do it is to really
[1:20:44] make sure you're getting more than one training site per class this week we're only going to do one training site so
[1:20:52] we're not going to capture all the spectral variability probably but you can see why we need to do that so
[1:20:58] i'm going to click on again on the activate roi pointer i'm going to click somewhere in the
[1:21:06] purple area and a huge training site will appear so so the macro class for for bear ground is
[1:21:18] three so i need to increase my mcid to three three for burned the class id will stay as four
[1:21:26] i'll change mc info to bare ground ground and i'm going to change c info to burned okay and i'm going to just bring up the
[1:21:38] table again to show you what i'm doing just so you don't get confused again i highly recommend that you have a
[1:21:46] table next to you when you do this so here's where we're at where we are right now we're doing we just did the bare
[1:21:52] ground macro class with a class id of three the class name is burned and that class id is four okay
[1:22:02] so the next three we're gonna have a macro macro class id is three and then the class id
[1:22:07] will increase for the three different bare ground areas all right so going back to our image we
[1:22:20] haven't saved our signature yet so we make sure to save our image our signature signature and you'll see a pop up under the roi
[1:22:29] signature list here again don't worry about the colors we'll change those in a minute minute so after bare ground burned we're going
[1:22:37] to do bare ground forest harvest so i'm going to zoom back out to the whole image image and and i i can't stress enough how much
[1:22:47] you need to zoom in and out and in and out all the time when you're doing these
[1:22:51] um um special these training classes so we're going to go into zoom into a an area that i know has a lot of these
[1:23:01] clear-cut areas so as you can see this is a forested area all these little squares in here have
[1:23:09] been areas that have been cut um the force has been cut down for timber sales and you can see again there's a lot of
[1:23:17] spectral variability the very pink areas are sort of newly cut areas then you see there are also areas that
[1:23:26] have a little bit of green on them and that means they've probably been cut a little while ago and there's some
[1:23:31] vegetation regrowing and then you can also see some outlines of areas that have been cut but have a lot of vegetation growing
[1:23:40] back back what we're interested in for this particular land cover classification are the areas that have been
[1:23:48] cut and cleared with no well with not much vegetation yet because this is a bare ground class
[1:23:55] so i'm going to select my activate roi pointer again i'm going to drop put the crosshairs in one of the areas
[1:24:06] i'm interested and i'm going to select select create a region of interest in there and you can see this one's much smaller of
[1:24:15] course because it's surrounded by forest when i go back to my table bare ground is three forest harvest is five so the numbers
[1:24:27] look good i just need to change my c info to forest harvest harvest okay and then save that signature
[1:24:37] so now that appears in the roi signature list list and lastly our very last class is going to be called other
[1:24:47] that's kind of a catch-all um um so other i'm calling all of this bare ground that's kind of down to the west
[1:24:58] of this burn scar so all of these sort of pink and white areas that you see in kind of
[1:25:05] purpley colors this is all in the winter it's normally grassland so it's green but since this is sort of a late summer
[1:25:13] image everything's brown it's dry or bare ground so this is what we're going to try to classify get a good training site for
[1:25:22] this area so again i'm going to select my my pointer tool you can choose either one you can choose the polygon making one or
[1:25:33] the pointer tool i like the pointer tool so i'm going to use that i'm going to plop it in one of the bare
[1:25:39] ground areas and it creates this huge training site and then i'm going to go to roi creation
[1:25:49] and my bare ground number is three my other class id is six the mc info is still bare ground but i'm
[1:25:57] going to change c info to other and i'm going to save that one okay i'm just going to go back to this
[1:26:07] table to show you one more time what i just did so as you can see this last one
[1:26:16] we just did vera ground forest harvest and that had a class id is five and the bare ground other
[1:26:23] has a class id of six okay so these are all our classes now it's not very many
[1:26:29] but but it's so you can get the idea of what we're doing okay so now once you do this
[1:26:44] you can this plug-in is great because it allows you to do a preview classification so you can kind
[1:26:52] of take a look at how well you've collected signatures because it will classify pixels within a specific area but without having to
[1:27:03] classify the whole image because sometimes sometimes that takes a long time so first we're going to do a preview classification
[1:27:12] so i'm going to zoom back out to the whole image and this is the point where we want to
[1:27:20] change colors because in the preview classification you'll actually see the pixels and the colors that you want your
[1:27:27] final classification to be so in order to do that up here in the roi signature list um
[1:27:37] we are going to change the colors so to do that you double click in the color box
[1:27:45] and then you'll see a color table appear now i notice that in this particular version of of qgis
[1:28:00] qgis and the fact that i'm using a pip a pc rather than a mac um that my color table looks a little
[1:28:07] bit different than it did on my mac so on my mac and i think i have a new version newer
[1:28:12] version of qgis on my mac and you have various options um to choose colors there's it's kind of cool has these little
[1:28:21] crayons that come up or there's various things you can choose so you may see that when you double click on your color
[1:28:27] you may not see exactly this but just to let you know there's various ways you can choose colors in this
[1:28:33] particular version on my pc i only have one way i can choose colors so so we're going to
[1:28:41] the first one is lake so let's make lake blue blue i'm going to choose a blue color
[1:28:49] and say okay and then the color changes to blue so forest we're going to do the same
[1:28:56] let's change it to like a a dark forest green and we'll say okay and then the oak shrub
[1:29:07] let's change that to a light green we say okay and for the burned area let's change that to a purple
[1:29:23] maybe a darker purple we'll do i'm terrible with colors okay let's do dark purple and let's do forest harvest let's make
[1:29:35] that orange and this all of these colors just enable to you to see the different classes better
[1:29:45] and then other let's change that to like a light yellow yellow okay okay and then you can customize any of this
[1:29:55] as you can see from the color chart there but we'll just leave it like this all right so we're going to go further
[1:30:02] down the scp doc and if you click on macro classes first the one thing i wanted to show you is
[1:30:16] that you can actually choose to classify your image either with the macro classes or with the classes it just depends on
[1:30:26] how you have things set up this week we're actually going to um we're actually going to classify the
[1:30:36] image with uh classes and not the macro classes but next week um we're going to use the macro classes
[1:30:43] so when you do that you can see you can change the colors of your macro classes too here if you're interested in doing
[1:30:49] that but we're just going to use the classes so we're going to keep things as the same
[1:30:55] to set things up for the preview you need to go again to the toolbar across the top
[1:31:02] and if you look on the far right hand side side past where it says the roi information you'll see preview and
[1:31:10] you'll see a radio button that you can click on and off and it should be on you can see i can
[1:31:17] click it off or i can click it on and then to the right of that i'm actually going to make my
[1:31:24] window a little bit bigger so you can see everything you'll see a button where it says activate
[1:31:34] classification preview pointer so that is where you want to create your preview and then on the to the right of that
[1:31:45] you'll see a t and that stands for setting the preview transparency so that allows you if you
[1:31:52] want to make it a little more transparent so you can see underneath it you can increase that number we're going
[1:31:58] to keep it at zero for right now but as you play around with it a little bit you can play around with that
[1:32:04] transparency transparency and then the s is actually the size of the preview so how many pixels will that
[1:32:12] preview be and right now it's set for s equals 200 why don't we increase that to 500 so we
[1:32:20] want want the size of our preview to be 500 by 500 pixels pixels okay so we get that all set up
[1:32:30] then we're going to go click on the scp doc we're going to click on classification algorithm and once you do that you can see where
[1:32:47] you can use the macro class id or you can use the class id so we want to make sure it's set to
[1:32:55] class id cid right now because that's what we're going to use to classify our image image these other things
[1:33:03] for the algorithm why don't we set that as maximum likelihood right now the default is minimum distance but we'll
[1:33:10] change that to maximum likelihood and then below that you see something called land cover signature classification we aren't going to do
[1:33:19] anything anything with that right now we'll be working with that next week um but that allows you to sort of play
[1:33:25] with the statistics of your signatures a little bit more and then you can also do a hybrid classification using this
[1:33:31] approach but we won't do that for right now okay and then the last tab where it says
[1:33:42] classification output we're not going to actually run that until we're ready to run the whole classification so at this point we can
[1:33:50] do the preview so in order to do that we're going to go back to the top where it says preview
[1:33:56] we're going to click on activate classification preview pointer right there click on that and then we're going to put that pointer
[1:34:09] somewhere where we want to see a preview classification and we can do this various times if you want to look
[1:34:15] at various parts of your image so right now i'm going to click just to the east of the burn scar
[1:34:23] kind of by that little lake there i'm just going to click right in there and you'll see it running
[1:34:29] and then you'll see uh the classification appear so let's zoom into that take a look at what we've done
[1:34:39] okay so as you remember the dark green colors forest the light green color is sort of the oak
[1:34:47] shrub areas the purple is burnt scars and then blue is supposed to be like so you see a
[1:34:58] lot of one thing is there's a couple things that we can see with this preview classification one is that there
[1:35:05] are a lot of black pixels and what black pixels means is that those pixels did not fit well into any
[1:35:14] of your um signatures any of your regions of interest the statistics so they fall outside sort of the minimum and maximum
[1:35:24] values of your statistics okay so what that means is that you need to collect more training sites generally or you can
[1:35:32] adjust the statistics of your um existing signatures and we'll be doing that next week we won't do it this
[1:35:39] week but that's what those black pixels mean mean okay so um if i turn on and off the preview
[1:35:47] you can kind of see what we're getting and what we're not getting getting um so we have a lot of other in there
[1:35:55] which is kind of that light yellow area and that's actually pretty good we have a lot of forest
[1:36:04] which seems to be getting the dark vegetation vegetation and we have the light vegetation which is oftentimes
[1:36:13] oak trees but you know i'd have to go down there and do field work to find out
[1:36:18] the burn area if you look closely at the burn area you'll see a lot of purple so
[1:36:23] we got some of it but you'll see a lot of black too so that means that you know for future like next week we'll
[1:36:31] be collecting more training areas in those regions where there's black right now now and you can see it's funny the lake
[1:36:39] areas didn't get classified as at all either so we got the one training site in the one large lake area so in order
[1:36:47] to include these two lake areas we'll have to do more training sites in those areas again next week
[1:36:55] okay so you can see how useful this preview classification can be it can give you an idea of how well you've done
[1:37:02] with getting your training sites and what you need to do more so at this point let's say we're happy
[1:37:09] with what we've done and we want to run the whole classification so in order to do that
[1:37:14] we'll go back to the left hand side i'm going to zoom back out to the whole image
[1:37:21] image i'm going to turn off the preview you can also you can also trash the preview and put it in the trash can on the right
[1:37:29] hand side it says remove temporary files and that will get rid of your preview then it goes away and you can do a
[1:37:36] preview somewhere else if you want to so now we're going to go to the scp doc on the left hand side and we're going to
[1:37:44] click click um um run which is the little icon on the lower right hand side we'll click that
[1:37:55] and we're going to give it a name so i'm going to call this calaveras calaveras underscore underscore six class because there's six
[1:38:07] classes classes you can call it whatever you want and you save it and then it starts running
[1:38:23] so it takes a little while to run the classification which is why it's really great to run previews first
[1:38:32] and sometimes qgis does some funny things so this is as this is running i'm going to let it run
[1:38:41] because it might be hung up this is the end of the exercise that we're going to be doing for this week
[1:38:50] so so at this point you are more than welcome to go through the whole exercise yourself if you
[1:38:57] haven't done so already or or if you have questions right now i'll be here to answer any questions
[1:39:06] that you might have looks like my my qgis is a little hung up right now but that's okay um i've noticed that
[1:39:17] happens before it'll eventually kick back in and then you can see what the classification looks like so
[1:39:24] like i said i'm willing to answer any questions i'll be on here for a while you can run through it yourself um
[1:39:30] especially if you haven't done this before it's you know it takes a little while to sort of figure it all out
[1:39:36] um and please feel free to ask any questions i hope you are enjoying this format please give us feedback on how this works for
[1:39:44] you you we'll be doing this again next week again i'll be focusing on refining those spectral signatures
[1:39:54] and and i wish you luck okay i'm going to try to answer some questions here that i see
[1:40:18] have been asked so that this software just to give you guys a heads up this software is new to me too
[1:40:27] um and so i'm a little slow sometimes getting to this stuff but i somebody asked why i was using maximum
[1:40:41] likelihood algorithm earlier as i said before there's only three options for qg for this plug-in there's maximum
[1:40:53] likelihood minimum likelihood and spectral angle mapping i would encourage you guys to try the different algorithms to see
[1:41:03] what works best for your area um i chose maximum likelihood just because that is a very common algorithm to to choose
[1:41:12] but you know go ahead and and try other algorithms because each one depending on your area will produce slightly different results
[1:41:21] so that's a just a personal preference so somebody seemed to have a problem retaining the band combination we are
[1:41:36] seeing with the landsat stack um so i'm not sure i'm not sure what happened there but in order to get the band
[1:41:46] combination you have to make sure you go to the layers panel and in the layers panel oh sorry my
[1:41:58] classification is still running so it's not letting me do anything right now but it you'll have to
[1:42:04] go back to the layers panel and right click um on the preferences to to get the color combination that you
[1:42:12] want okay so you should see my classification now it finally it finally popped up um and it shows up in your layers panel
[1:42:35] so if you click back on the layers panel on the right hand side you'll see at the very top
[1:42:43] calaveras 6 class 6 class dot tiff showed up and then it has the legend underneath it so you can see xero
[1:42:52] is is unclassified unclassified so those are all the black areas that we'll try to take care of next week
[1:42:59] and then you see the six classes that we classified um so generally you know did a pretty good job but we can do a lot
[1:43:06] better and we'll do that next week so then you can take this and you can put this into a gis another gis or you
[1:43:14] know do whatever you need to with it because it's now a tiff file so hopefully you guys can get to this
[1:43:24] point fairly easily okay so let me go down i'll take a look at the questions you've been asking
[1:43:39] uh there's a great question here about clouds so we're going to deal with clouds next week um
[1:43:44] because there are a couple small clouds in this image and i didn't actually even notice them until i went through this uh
[1:43:51] through this supervised classification exercise and then i noticed the clouds there's some small ones so the only
[1:43:57] thing you can really do with clouds is uh you can't eliminate them so you're going to have to actually
[1:44:06] create you can create a mask and you can uh have them as a separate class so your clouds will be and the cloud
[1:44:15] shadows you can't forget the cloud shadows as well because they cause a difference in spectral characteristics as well
[1:44:23] you have to create those as a different class class and then you know there are ways you can
[1:44:27] sort of eliminate them from the image but you can't see under them so we'll deal with some of that next
[1:44:33] week yeah so somebody asked how you do an unsupervised classification with this plugin i don't think there's a way you
[1:44:41] can do it i think this is really just for because i looked around to try to find ways to
[1:44:48] do an unsupervised classification and and this plug-in is really focused on using the supervised approach the one thing
[1:44:58] you can do however however again it's sort of a hybrid approach and again i'll show this i'll show you how to do this next week
[1:45:07] but under classification algorithm you can actually use the um you use the spectral signatures to classify most of your pixels and then
[1:45:17] you can use an algorithm to to classify the rest of the pixels so that's kind of a
[1:45:24] it's kind of a hybrid approach but you can't as far as i can tell anyway unless somebody knows this
[1:45:31] better than i do which is entirely possible possible you can't do unsupervised with this plugin somebody asked
[1:45:41] about how this can help with for red plus force carbon reference emission levels levels um so again
[1:45:47] i'm not going to be answering questions outside what we're presenting here um we did have we are set did have a series on
[1:45:56] um carbon management last year that i highly recommend that you watch because it discusses some of the
[1:46:07] image processing approaches you can take for estimating estimating emission levels um we're not going to we don't have time to do that here this
[1:46:20] is simply an approach you can take to get land cover information the one thing we aren't doing also in this
[1:46:30] class is we're not looking at change so this is one static land cover map we're not looking
[1:46:37] at change over time that will be a future future webinar that we definitely will do we'll do a change detection webinar
[1:46:45] which we've had a lot of demand for but we wanted to start it off first with at
[1:46:49] least getting a basic land cover map so somebody asked what if we already have a shape file that contains the
[1:46:56] training sites can we import it or should we manually recreate them that's a really good question um
[1:47:07] i'm not entirely [Music] [Music] sure if you can use looking at the input right now if you can use an existing
[1:47:20] um if you can use existing shape files or something for training sites sites if yeah i'm kind of looking sorry i'm
[1:47:30] looking through things right now just because i don't know the plug-in well enough to know if you can use existing
[1:47:35] ones my guess is that you have to recreate them them i see oh there is an import signatures i
[1:47:46] take that back so so there's a function and i have it up on the screen right now
[1:47:54] where you can import an scp file but that's a previously made signature file of course using this
[1:48:02] plugin there is a usgs library an astra library or a csv file so if you had your training sites in a csv file it
[1:48:13] looks like you can import a shape file to use as signatures so there you go but not it doesn't or yeah or you can
[1:48:26] import a shapefile here we go that's great see all your great questions are i'm learning stuff too
[1:48:36] for those of you having problems with globus um i know elizabeth and brock are doing a great job answering those questions but
[1:48:43] again again the globus website they're they're transitioning to a new form of globus so i would not recommend using glovis at
[1:48:51] this point i would recommend using earth explorer and we've provided a tutorial for you to download imagery through earth explorer
[1:49:03] on our website oh somebody's asking about the rgb in the top so so this is the from the plug-in
[1:49:15] tools across the top you see this rgb honestly i haven't had a lot of luck with that um some of you may want to
[1:49:24] play around with that which is why i chose to display my imagery in the layers panel and do it that way
[1:49:35] and then put that image into the scp dock because i was not super successful in selecting that rgb color composite using
[1:49:47] the radio button that was just that was just me i just found it a lot easier to
[1:49:51] do it the other way so you may find it otherwise you may be able to successfully use that rgb radio button
[1:49:57] at the top i just found it easier to use the layers panel panel so there's a question does qgis help us
[1:50:05] for change detection after this classification you can use qgis you wouldn't use the same plug-in um obviously but there are options for you
[1:50:15] to do change detection and again um um probably not this year it'll probably be next year that we will do another
[1:50:24] advanced webinar focused on change detection probably using qgis as well oh here's a good question does the scp
[1:50:37] save the project in the event qgis does crash and thus you wouldn't have to recreate the aois yes so
[1:50:45] the best thing to do is to save the project so i found that if you save the
[1:50:50] project at the top you know we created a new project at the very beginning and you continue to save
[1:50:57] it it it will save everything also in the training input since you put a a file you gave the your signatures a file that
[1:51:15] ends in scp whatever you've done to that point it will save those signatures to that file so even if
[1:51:24] qgis blows up at that point you can bring in the input image and then you can bring in that training
[1:51:32] input again using that scp file so somebody asked how to change the view of the landsat calaveras
[1:51:48] calaveras so i'm going to go back i'm going to i'm going to turn off my class and go back to
[1:51:58] okay just to zoom in and out if you go to the toolbar at the very top there's all
[1:52:07] kinds of zoom and pan options so right now i'm i'm i have my pointer on pan there's you can pam to selection
[1:52:20] [Music] [Music] you can zoom in so this is how i use this plus to zoom into specific areas
[1:52:30] so right now i'll click on that and then i click a box in an area and then i can zoom in
[1:52:41] and then to zoom back out to the whole image image i go to the icon at the top that says
[1:52:51] zoom full so it's a little magnifying glass with all the arrows on it and if i click on
[1:52:58] that that then i go back to the whole image so i i really encourage you to sort of
[1:53:04] understand how qgis works first it'll help you a lot in kind of maneuvering around your image play
[1:53:10] around with that a little bit somebody said they saw a pca option which is unsupervised i don't remember seeing a pca option but
[1:53:30] well at least in the algorithms unless it's somewhere else i'm not saying a way to do unsupervised but
[1:53:43] maybe i'll look into that a little bit for you and then have a better answer next week
[1:53:59] is there another method which makes band set stacks bands yeah so there there are other methods in qgis
[1:54:06] where you can put bands together this was it's nice because it just kind of does it all for you
[1:54:15] and if i remember right i believe if you go under raster and i'm going on it right now
[1:54:28] miscellaneous merge that actually will also put bands together so if you didn't want to have bands two through
[1:54:40] seven seven which is what this plug-in does it only does bands two through seven if you wanted to do a
[1:54:47] subset of that or include more bands or whatever you could bring the bands together using this merge function
[1:54:59] oh pca is under the pre-processing tab i'm learning a lot from you guys okay let me see
[1:55:07] pre-processing oh look at that huh huh oh it's a principal components analysis okay okay i can look into that a little bit
[1:55:34] more too it's not a it's not really a um a classification algorithm it it uses principal components analysis
[1:55:48] so somebody had said it looks like they were displaying the imagery in 543 and layer properties but it's
[1:56:00] it looks like it's giving a false color which is vegetation is is red so it sounds like you may have a different
[1:56:08] combination of bands then because if that's the case it shouldn't be if you have 543 and you're using a landsat 8 image
[1:56:20] if you use the exact same image that we are using um this is landsat 8 if it's landsat 5 or 7
[1:56:27] then it's going to be different but landsat 8 you should have an image where the vegetation is green not red
[1:56:35] so you might want to double check what image you're using and then also when you did the stack of
[1:56:41] bands make sure it was two through seven so so the question is qgs gives a similarly similar quality result comparing with an
[1:56:56] envy envy um um and thank you brock and elizabeth for answering that question um so so when you assess the results
[1:57:12] of your classification that's a whole nother different thing that we're not um going to approach with this
[1:57:20] course which is accuracy assessment so theoretically if you're if it's using the same algorithm so say you're using
[1:57:29] maximum likelihood in nv and you're using maximum likelihood in in qgis then you should have pretty similar
[1:57:38] results you can use different algorithms and envy then there's more options in envy than there are in this plugin so then
[1:57:48] you probably would get different results and it also depends on how you define your your spectral signatures your rois
[1:57:58] but when you start getting down to looking at assessment of you know quality or accuracy or anything like that then we
[1:58:09] have to start discussing accuracy assessment approaches and we're not going to do that we don't have time to
[1:58:14] do that in this particular course but we will definitely have a whole separate course focused on accuracy assessment
[1:58:25] so there's a great question should the training site selection be randomized um it so so what a lot of people tend to do is for
[1:58:39] training sites is they will collect uh training sites information information if you're setting aside some of your
[1:58:48] training site information to be used in accuracy assessment which is what people do so maybe you collect
[1:58:57] 50 training sites and oftentimes two-thirds of that will be for your classification and one-third you'll save for your accuracy assessment
[1:59:09] in that case you do want things to be randomized randomized because your accuracy assessment you know needs to have some kind of
[1:59:18] randomness to it if it's all in one area or something like that then um then you have to question
[1:59:25] your accuracy for just doing um training site selections the randomness isn't important what's in most important is collecting trying to
[1:59:38] collect signatures that capture all the spectral variability in a particular land cover class and to do that what's important is to
[1:59:48] to collect training sites that are scattered throughout the image okay so it doesn't necessarily have to be random the random part really comes
[1:59:56] with the accuracy assessment when you do that that but but in order to get capture spectral variability
[2:00:04] variability it's good to get capture get training sites that are located throughout the whole image so somebody asked a question suppose we
[2:00:14] are working on classifying crops and get a hundred signatures what algorithm will we use again the algorithm is really your own
[2:00:24] personal preference you might want to try a couple different algorithms algorithms the thing about crops and and other
[2:00:33] vegetation is that you you end up getting a lot of confusion between the crops because the spectral
[2:00:41] signature for crops between different crops crops depending on the crop is very um they're very very similar
[2:00:50] and so it's it's probably better for example if you were using this plug-in to use a spectral angle mapper or a maximum
[2:01:02] likelihood over the minimum distance because i think you'll be able to distinguish things a little bit better
[2:01:09] however i think you're still going to get a lot of confusion no matter what algorithm you choose and
[2:01:14] so when that happens for crops and for other types of vegetation types where you're getting a lot of confusion is you
[2:01:25] probably want to bring in some ancillary information to help you identify and then you can turn it into
[2:01:31] sort of a decision tree process so for example um if you have crops um that have certain characteristics maybe
[2:01:41] they're located in certain areas maybe you have some information about um um the environment around it you want to
[2:01:51] add that information somehow to your um decision tree process for areas like mountain areas like this or where you
[2:02:00] have a lot of different sort of what we call bioregions what a lot of people will do is they'll
[2:02:05] divide their area into bioregions so for example looking at our calaveras county we have the central we have sort of the
[2:02:14] lower elevation area where you see all that pink and then you have sort of a mid-range area where you have a lot of the oaks
[2:02:22] and the conifer oaks and the shrubs and then you have the higher elevation areas that are mostly conifers
[2:02:28] so if you wanted to get a more accurate classification one thing you might do is divide this particular area up into
[2:02:36] maybe three different areas and you classify them all separately and then you can bring them together at
[2:02:42] the end and then there's other things you can bring in as well you can bring in dems to look at maybe south facing
[2:02:49] slopes slopes or different aspects because different vegetation types grow in different regions things like that and and a lot of people who do fairly accurate
[2:03:01] classifications bring in that other kinds of information to help identify what land cover classes are especially vegetation when there's a lot of
[2:03:11] confusion oh somebody okay here's a couple questions about the pre-processing so somebody asked what's the difference in using an atmosphere correction and
[2:03:27] not using it ndos is that dark object approach so if you're doing a single classification classification a single image classification like this
[2:03:41] lots of times doing an atmospheric correction correction doesn't matter a whole lot it does it may change the pixel values a bit
[2:03:50] to sort of correct for atmosphere so it's always a good idea to do however if you didn't have that approach
[2:03:59] available to you or you didn't know how to do it or something like that because classification is really looking
[2:04:05] at relative pixel values it's really looking at the pixel values in that image and it's classifying those pixel
[2:04:12] values according to you know the statistics in that image you're not comparing it to anything else um
[2:04:20] um you can get away with not doing an atmospheric correction just remember the pixel values will be
[2:04:26] different so when you're say to get collecting regions of interest you want to make sure your the distance
[2:04:33] is appropriate for the pixel values that you have however because that process the pre-processing is is was so it's so easy to do in this
[2:04:46] plug-in plug-in it doesn't hurt to do the atmosphere correction and it's especially important when you're comparing one date of image
[2:04:56] to another date of image so if you plan on doing change detection at some point um it's highly recommended
[2:05:04] that you do the atmospheric correction and somebody asked about pan sharpening as a preprocessing step my answer to
[2:05:18] doing pan sharpening before you classify is is to not do it so and the reason is uh because
[2:05:25] if you pan sharpen an image you're changing the pixel values so what pan sharpening does is it combines the
[2:05:32] higher resolution of a panchromatic image so landsat no matter what landsat you're using has a except for the earlier landsats has a
[2:05:42] higher resolution panchromatic band that you can use to sort of sharpen your image it so you get
[2:05:48] the the higher spatial resolution of the panchromatic band combined with the spectral resolution of the multispectral bands
[2:05:59] bands the problem is when you do that you change the pixel values of your image and so that completely changes
[2:06:07] um um the the spectral values of the objects that you're trying to characterize characterize so i would recommend not doing pan
[2:06:17] sharpening pan sharpening is really just for for visual purposes so you're trying to make an image look
[2:06:24] better and clearer but not for processing so somebody asked when i was doing band rendering the band 3 showed up without
[2:06:35] minimum and maximum values um um it's hard for me to know what happened there um does that mean when you did the
[2:06:50] after you did the the pre-processing the atmospheric correction that it didn't show up um in the list that's what i'm assuming
[2:07:01] that you meant any any one thing you when you do the preprocessing you want to make sure this
[2:07:09] is really important that only those landsat bands are in that folder you want to make sure only those landsat
[2:07:18] bands are in that folder nothing else because because when it goes to stack those bands into an image
[2:07:25] it is looking at the order of things and so make sure there's nothing else in that folder
[2:07:32] so somebody asked which one of the following band combinations is best for land cover classification 432 or 543 so
[2:07:40] in my opinion the best combination and i assume you mean for just for looking at the imagery
[2:07:48] 432 or 543 is completely personal so this is a band combination the 543 where the vegetation is green
[2:07:59] is my personal preference and i like the 543 because it includes a mid infrared band so you can kind of see some
[2:08:07] moisture differences in soil and vegetation and that sort of thing but some people really like looking at
[2:08:14] things in false color where your vegetation is red and you can see distinguish you know you can distinguish
[2:08:19] vegetation types a little bit better with the red the human eye can actually distinguish red colors sometimes a little bit better
[2:08:26] than green colors so it is completely a personal preference and you're only setting that up so you can go in and choose your
[2:08:36] training sites so if you prefer looking at the image in false color where your vegetation is red instead of
[2:08:43] green then you should display your imagery that way so i i just display it this way because that's what i
[2:08:49] personally prefer doesn't make any difference in the outcome so so somebody's getting confused between displaying imagery and what's used in
[2:09:00] the classification so the question is why did we compose multi-band with three bands um um and and or did we use the other bands in the
[2:09:10] classification so just to make it clear when we're displaying imagery you can only just display imagery in three bands
[2:09:19] and that's just because it's that's the nature of the software you can you can you put things into red green and blue
[2:09:28] color bands to make color so you can only do that with three bands and so that's merely
[2:09:34] for displaying imagery the the bands that go into the classification part is completely different different and so the number of bands that you have
[2:09:45] in that stack that you made and i'll go back to layers panel if i go back to layers panel
[2:09:51] and i look at my b stack raster right right that has more than three bands in it as does my
[2:10:02] landsat calaveras because i clipped landsat calaveras from the b-stack raster file so that has many more bands and just doesn't have three
[2:10:12] so when you run your classification it's on all of those bands it's just it's not just on the three that you're displaying
[2:10:20] so somebody asked about um um whether i'm going to show you how to stitch adjacent images no we're not
[2:10:26] going to do any kind of mosaicing or anything like that in this it's simply showing you how to
[2:10:33] do a supervised classification oh i see it looks like some people didn't get exactly the same image
[2:10:43] we originally when we made this first exercise we had a different landsat image that we were using and we changed
[2:10:50] it it and so it looks like maybe the old exercise was originally put on the website so now we
[2:10:59] should have the new exercise up for you and elizabeth has provided a link to the new exercise that has the correct
[2:11:07] landsat image so if you're displaying a landsat image and it doesn't have this big burn scar in it you can still do the
[2:11:13] classification um you just have to kind of take out the burned the burn part um otherwise i i recommend
[2:11:21] going back and getting a different the other landsat image that we changed to apologize for that so we still have a lot of you on um
[2:11:32] that's great over 100 people i guess so hopefully you're going through the exercise exercise maybe you can let us know if you are if
[2:11:41] you're kind of going through it and if you're running into any problems it's 11 21 so we have a while that we
[2:11:49] can stay on we're happy to do that i'll probably go on mute for a little while and as as questions come up
[2:11:56] i'll come back on and answer them uh verbally verbally and then elizabeth and brock are kindly answering questions
[2:12:04] um that have to do with our set or other kinds of organ organizational things so will still be on for you if you have
[2:12:14] questions and then add about a quarter to four east coast time i believe quarter to one my time i'll come back on
[2:12:24] and kind of close things um close things up hi everyone i'm just noticing some questions coming in sorry
[2:12:37] um um i didn't see them coming in before because of the order of the question so i apologize for that um i meant to come
[2:12:43] on and answer your questions there's one question here if i need to identify other attributes in the
[2:12:50] landscape like urban areas is it necessary to change the band's order so i assume that question means
[2:12:59] do you need to change the order of the bands that you're that you're viewing um in order to see maybe urban better
[2:13:08] and the answer the short answer would be yes yes you want to display the imagery that shows
[2:13:16] shows the information that you're most interested i'm going to zoom into an urban area there aren't a lot of big urban areas in
[2:13:28] this particular image but there are a couple small ones and i'm going to zoom into that because
[2:13:37] because most band combinations will be able to show the urban areas it's just how big those urban areas are and what you want
[2:13:46] to see in them um and so i'm going to zoom in here here so hopefully you all can see this
[2:13:54] it's right by a little bit north of the lake lake it's very small as you can see they're
[2:13:59] very small cities in this area so so this this i'm going to make sure you can see this
[2:14:09] yes now you can see this i put my pointer pointer here but see these little blue kind of
[2:14:16] blue purple areas those are actually urban and next week when we do more more with our training sites and kind of
[2:14:27] kind of work with our signatures a little bit we'll be dealing with urban urban is difficult because it's very
[2:14:33] very heterogeneous has very many different pixel values in it so there isn't just like one urban signal necessarily it gets mixed up with
[2:14:42] a lot of things so so urban is very challenging um unless you can use something else to help identify
[2:14:50] it like elevation or something like that and in this urban area you can see this small urban area kind of in the middle
[2:14:57] here this blue bluish purpley area if you go south from there you will see this kind of green area that's actually
[2:15:06] a golf course and it's surrounded by other urban types of area but part of that urban area has a lot of vegetation
[2:15:14] in it so you can see that blue purple but you can also see the green in there
[2:15:18] so you can see why urban itself would get very confused with other things and it does it's very challenging to
[2:15:25] classify classify and even if you look over to the lake on the right hand side here at the edge of
[2:15:32] the lake where it's there's no water but it's it's that same kind of purpley blue color you can get urban mixed up with that
[2:15:44] kind of stuff pretty easily so urban is challenging challenging this combination works pretty well to look at urban areas and other areas as
[2:15:52] well but again the band combination is really dependent on on your own preference so i would try different band
[2:16:00] combinations to see what you prefer and to see what land cover type that you're mostly interested in hopefully
[2:16:06] that answers your question so somebody's having some problems with the pre-processing part it doesn't recognize the mtl text file
[2:16:28] in your imagery folder i just want wanna i'm gonna bring up my folder just to make sure that your folder looks
[2:16:38] like my folder let me do that actually okay so the the images in your folder your landsat
[2:17:01] images should look exactly like this for landsat 8 if you have other landsat files i mean if you're following this
[2:17:10] exercise it should look exactly like this so you can see the mtl file at the top and then you can see all the other bands
[2:17:23] there shouldn't be anything else in this file file in this folder and like i say that the terminology
[2:17:32] should look exactly like this if it doesn't it's not going to recognize i went through this as well
[2:17:39] but i had i had a lot of other stuff in my folder for whatever reason and i had a problem
[2:17:46] with the pre-processing part the other thing is if for some reason it's not recognizing the mtl file which
[2:17:53] it should but if it's not you can also specify where that mtl file is in that second line in the preprocessing
[2:18:01] part so you can see how that works oh somebody uh said that their pre-processing is taking a long time
[2:18:16] it really depends on your system and sometimes i notice um on my pc when i run some processes on qgis
[2:18:29] that qgis will actually become non-responsive for a while so you noticed that when i actually ran my
[2:18:35] classification that it kind of hung for a little bit but then it came back um so so this person was saying that their
[2:18:45] pre-processing is taking about 30 minutes it it could possibly take that long it does take a long time to run it
[2:18:53] it probably didn't take that long for my computer but it really just depends on your computer and what else is going on there so i'd
[2:18:59] i'd hang in there a little bit more to see if it if the process ends the one thing qgis doesn't
[2:19:07] always do so well is show you sort of a status bar sometimes it does sometimes it doesn't
[2:19:13] it's kind of hard to know where you are in the process but hang in there a little bit longer
[2:19:19] and see if it finishes up so a lot of you are asking whether you need to stay here for the whole session you
[2:19:34] definitely don't if you're done with running an exercise or you know you need to go into other things in your life
[2:19:40] um please feel free to sign off we're just staying on here in case you have questions if you are running through the
[2:19:47] exercise if you're running into problems if you have questions then i'll stay on here until for another hour or so
[2:19:59] but if you're finished or if you just need to go that's fine you don't you don't have to stay on here
[2:20:07] and then we'll come back next week for part two okay have you resampled the landsat image image oh so somebody asked how did i resample
[2:20:20] the landsat image you are rendering as it seems sharper than mine no i actually did not resample it um i
[2:20:27] didn't do anything with it it's directly as it was downloaded from um globus globus so i'm not sure it could be maybe a
[2:20:38] screen resolution that make a difference not entirely sure but it should be exactly the same as what
[2:20:45] you're seeing okay so i see your folder name so somebody who is still having problems with with the pre-processing part
[2:21:04] oh i see and also right i i think some of you may be using a different image um and that was just
[2:21:13] that's our mistake because i think we put on the older version of the exercise it's okay you can still go through this
[2:21:20] process you're just not going to see the burned area so sylvia you that folder name um um actually looks good
[2:21:32] i'm going to go back to my folder if i can find it yeah yeah your folder name is a little bit
[2:21:42] different um because where it says 249 mine is actually 265 26249 if you use 249 you will not see
[2:21:51] the burn area if you use 265 you will see the burn area so that's the difference between the two
[2:22:00] so if your folder has all of those files it it that pre-processing should work so i'm not entirely sure why it's not working
[2:22:09] for you somebody had a problem with the band stacking bands python crashes and won't complete the process uh i'm
[2:22:22] sorry sorry i shut down qgis and we'll attempt again yeah i shut down qgis try it again
[2:22:30] the stacking bans part is pretty straightforward straightforward um so i'm not entirely sure why it's crashing on you
[2:22:42] i know qgis i knows can be a little stable sometimes so there's not much i can do about that
[2:22:50] unfortunately you can also try stacking the bands the other way using the other approach if if that one approach doesn't seem to be
[2:23:00] working if using the plug-in keeps causing a crash mark then i would try going doing raster miscellaneous
[2:23:14] merge merge and if you do that you can stack files you can stack images that way you just
[2:23:21] have to choose the bands that you want to stack yeah a lot of people are saying pre-processing takes a long time it does
[2:23:34] take a long time that's why i didn't do it in the demo um um so somebody asked what if i clip the
[2:23:42] image first and then launch pre-processing um you can probably do that actually because then it wouldn't take so long
[2:23:50] the i the only thing is i hesitate doing that because you might need that rest of that image at some
[2:23:56] point um and it would be nice to have that all already pre-processed but you can give that a try go ahead and clip
[2:24:07] the only thing is then you'd have to clip the individual bands and they'd have to have the exact same
[2:24:13] file names you know what i mean because the the software is looking for very specific file names
[2:24:21] when it does the stacking when it does the pre-processing sorry when it does the pre-processing it's looking for very specific file names so
[2:24:32] you'd have to be very careful about what you rename those files i think it would be faster though
[2:24:51] please ask the person for a long folder path or spaces on folder name path not sure what you're asking there paul
[2:25:00] but but paulo sorry not paul paolo um every computer is different i i never put spaces in folder path names it's just a habit
[2:25:13] of mine i always use underscore or something like that so i don't have any problems um um with the path names at all i don't know
[2:25:23] if any of you have out there have tried using using um um path names with spaces in them um i just
[2:25:30] i just find it in general to be a good habit not to put spaces in past names for things like this
[2:25:56] oh i see so paulo saying python may fail with spaces and long paths got it so that may be part of the problem with
[2:26:03] python python not working for various processes as if you have spaces in your path name python may not deal with that very well
[2:26:16] got it thank you space is no way perfect i agree with you avoid spaces yeah paulo also made a really good point
[2:26:46] that um that you should keep the plugin updated as well as the version of qgis updated mine actually isn't i'm not even
[2:26:57] following my own advice but um but especially to keep things stable to keep things from crashing especially
[2:27:05] with python and so forth it is really important to keep everything updated to the current version version thank you paulo
[2:27:19] so um for those of you still on paulo just made a request that we could all run the same set of signatures
[2:27:30] provided by our team um um and there's i think there's pros and cons to doing that i think the pro would
[2:27:39] be then we could all have a similar output and and you all don't know this area very well
[2:27:49] for sure but but the con is that i really want you to experience experience what it's like developing these training
[2:27:57] sets on your own so in a way it doesn't really matter what the output is really because you don't have anything
[2:28:05] to compare it to anyways i mean the the whole point of this is for you to get a feel for how these training sites
[2:28:12] work and so when you do it yourself i think you get a better feel for how the training sites work and
[2:28:19] you know what the statistics will look like and they may differ from mine they won't differ that much because i think
[2:28:24] you get the general idea of it um but we're not going to be doing any kind of accuracy assessment
[2:28:30] um and so i just felt like it'd probably be easier it would add another level of complication
[2:28:37] i think to try to send you all training site um you know like shapefiles or something like that so
[2:28:43] anyway it's a great suggestion paulo um um but but just to keep things simple i think we'll
[2:28:50] just keep it this way okay so tim is having a problem with clipping it works but when i set bands to 543 the
[2:29:03] output is mostly yellow rather than same as the b stack raster that's interesting okay so let's take a look at your
[2:29:13] at your clipped image if you i'm gonna display display some properties of my clipped image so i'm going to go to layers panel
[2:29:27] and go to landsat color virus and right click on it and go to properties first of all
[2:29:42] just to start off with tim tim is that what i'd like you to do if you go to
[2:29:49] properties is take a look at the band values values for each of the different bands so if you go to the red band and you
[2:29:59] have band 5 you can see my values are 0.04 min min 0.39 max band 4.07 and 0.29 and band
[2:30:10] 3.02.15 first to see if there's similarities between those and and it almost sounds like maybe two of your
[2:30:19] bands are are the same um um is what so if two of those numbers are equal then two of your bands are the
[2:30:28] same and you may have to repeat um the clip actually what you may need to do is take a look at your
[2:30:36] b stack to make sure all those bands look normal too and then what we can do is
[2:30:44] is go under information and properties and if we go down to if we go down and it will say
[2:30:56] band 1 band 2 and so forth and give all the statistics band three band four band five
[2:31:03] five band six um what i would do is make check those values values to to make sure none are the this that
[2:31:13] they're all different from each other like i say to to make sure you aren't repeating bands um
[2:31:23] um that that that's what i would do at this point see if there's any differences there because it sounds like maybe two of your
[2:31:34] bands may be for some for some bizarre reason reason may end up being the so let me know what you find when you
[2:31:45] go through that process somebody will fredo said google earth might help with selecting training sites for sure um google earth is great to
[2:32:01] help with selecting training sites that's what i was saying earlier in the lecture is that you can use high
[2:32:07] resolution resolution aerial photos or you can use high resolution satellite imagery such as google earth to help you both select training sites
[2:32:19] and then also do accuracy assessment as well well i absolutely agree with that oh somebody says he needs to load min
[2:32:31] max values oh maybe that's what he didn't do so charles said i think tim maybe when you
[2:32:40] you um um i'm going to go back to my properties here here and go back to style
[2:32:52] you have to make sure that you click load on the right hand side that the contrast enhancement is is set to
[2:32:59] stretch to min max and then click load that may be part of the problem too bingo excellent
[2:33:16] thank you everyone who who figured that out yeah so daniel said that he used spectral angle mapping that
[2:33:33] gave him a better result than max likelihood it's entirely possible um you can try both different ways to see
[2:33:41] what works better for you and next week maybe when we do when we look at spectral signal
[2:33:48] signatures and we run the classification maybe we can do it both ways to compare the two and he's also running a newer version qg
[2:34:01] i know i just haven't loaded the new version on yet so everybody got the load thing in rgb for tim
[2:34:13] glad we figured it out for you tim well tim i'm impressed that you're hanging in there and it's after 4am
[2:34:24] there i don't know where you are but thank you we appreciate your dedication hey everyone if you're done if you are
[2:34:37] done with exercise you can certainly log out anytime so thanks for everyone for hanging in there and running through the exercise
[2:34:44] um and we'll we'll see you next week i'll all um i'll stay logged on for another half an hour or so
[2:34:54] for those of you finishing things up hey mark good luck with the python thing i hope um shortening the file path name
[2:35:10] works works if any of you have any expertise in python maybe you can give mark some ideas on how to deal with
[2:35:19] that but let us know we'll catch up next week and see how it's going hi everyone this is uh cindy i'm back um
[2:35:39] and i'm just kind of checking in to see if if anyone is still working on the exercise
[2:35:45] if you could let me know in the questions section that would be great if you're all done
[2:35:54] that's great too you're welcome to leave the session if you are still working what i'll do is
[2:36:00] stay on for another 15 10 or 15 minutes or so till 1 o'clock my time if no one is on anymore i still see a
[2:36:10] few few people online so if if if you aren't working on the exercise okay some people are still working so
[2:36:19] that's great no worries i will stay on until until for another 10 minutes or so and and hopefully if you have any questions
[2:36:29] you're still feel free to to ask them you can always email me as well during the week if you need to
[2:36:36] finish it later on and and so i'll wait for another 10 minutes or so and then i'll close things off
[2:36:45] thanks everyone all right everybody it's about that time so hopefully you've all had a chance to run through the exercise if not you know
[2:37:08] if you have questions during the week if you try to do it please don't hesitate to contact me my email is listed
[2:37:14] right here cynthia.l.smith nasa.gov if you have general rset questions you can contact anna pratos or you can go to
[2:37:24] our website listed there and i just want to thank everybody for attending this week and hanging in there
[2:37:32] for four full hours it's a really different format for us so we'd appreciate any feedback that you
[2:37:39] have about how this format went for you and we look forward to seeing you at our class our course next week where we will
[2:37:49] work on improving the supervised classification so thanks everyone and talk to you next week you
