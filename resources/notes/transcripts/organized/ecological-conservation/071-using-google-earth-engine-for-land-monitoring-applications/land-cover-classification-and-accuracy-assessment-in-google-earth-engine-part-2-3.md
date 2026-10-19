# Land Cover Classification and Accuracy Assessment in Google Earth Engine, Part 2/3

`https://www.youtube.com/watch?v=JFvxudueT_k` · id 269 · 2:14:24 · module 4 — Module 071 - Using Google Earth Engine for Land Monitoring Applications

[00:04] hello everyone and welcome to the second session of our google earth engine for land monitoring application series
[00:11] uh my name is zach benson and i'm based out of the nasa ames research center in california along with my colleagues who
[00:18] are joining me for this training brittany beaudry juan torres perez and amber mccollum so before we get started with today's
[00:31] session let's cover some logistical reminders uh this series includes three two hour sessions the last remaining session after today will be held on the
[00:39] 30th at the same time of day that's 12 pm to 2 pm eastern time and after each
[00:44] live session recordings of the series can be found on the training webpage there's also one google form homework
[00:51] due on july 14th for this series and i've provided the link to the webpage here on the slide
[00:57] as usual we'll have a q a session at the end of each session but if we're not
[01:02] able to get to your question or if you have any questions after the session is over over please feel free to email us at the
[01:08] addresses we've provided here so as i mentioned this series includes three sessions with each focusing on the
[01:20] use of google earth engine for land monitoring applications in session one if you remember we went over the basics of google earth engine
[01:28] uh calculated a set of vegetation indices in the javascript api and took a quick look at the available
[01:35] python api and after today's session in part three we'll calculate a number of indices to assess environmental parameters over a
[01:44] time series and use this time series to detect land surface change but for today we'll go over methods for completing a
[01:54] supervised land cover classification uh to identify cover types like deciduous tree stands uh mixed forests and uh
[02:01] cultivated lands so we'll also complete an accuracy assessment to evaluate the performance of our classification um and i mentioned our names earlier um
[02:10] but just here's some pictures of the rset eco team so you can put faces to names i mean we're also really lucky to
[02:16] have a guest speaker today brittany beaudry from the nasa develop national program and she'll be walking us through
[02:22] our code demonstration today okay so here's a quick outline of what we'll be covering first i'll go through some slides where
[02:32] we'll cover land classifications using satellite imagery uh supervised classification methods the basics of classification accuracy assessment i
[02:41] mean how we can use google earth engine to complete to complete these types of analysis analysis then we'll transition to the ge code
[02:49] editor and brittany will walk us through landsat data retrieval imagery prep running a supervised lan classification and basic accuracy assessment using the
[02:58] javascript api and to finish things off we'll have our q a session so we can answer any
[03:04] questions that you might have all right so we'll go ahead and get started with our lan classification and
[03:15] accuracy assessment overview these are two pretty extensive topics so we won't be completing an exhaustive overview today
[03:22] and we'll focus mostly on what you need to know for the session but i'll go over a couple of past our
[03:28] set trainings where you can learn more about these topics okay so jumping right in many of you are likely already familiar
[03:40] with land classification in some way but just as a refresher land cover classification is the process of
[03:46] grouping spectral classes and assigning them informational class names i mean spectral classes are groups of pixels that are uniform with respect to
[03:54] their pixel values i'm in several spectral bands and informational classes are categories of interest to users of the data and that's things
[04:02] like water forest urban cover agriculture et cetera and it's important to note that these informational classes vary according to
[04:12] the needs of the user which basically just means that as the user you're able to define what these
[04:18] classifications are and since they're for your own use you can determine those that that you find most useful
[04:24] so here's a lan classification you might be familiar with the usgs national land cover database uses 30 meter pixel landsat data to
[04:32] complete land classifications of the us and this can be a really great place to start if you're interested in looking at
[04:38] examples of land cover classes so in image classification uh like those we complete using satellite imagery uh
[04:50] there are two methods uh the first is pixel based and the second is object-based classification in pixel-based classification each
[04:58] individual pixel is grouped into a class and this type of classification is particularly particularly useful for landscapes that experience multiple
[05:07] changes in land cover within short periods of time since the classification is completed pixel by pixel and it's also best for complete data
[05:17] coverage coverage and ensuring the consistency of time series analysis at the pixel level so an object-based classification pixels
[05:25] with common spectral characteristics are grouped together during segmentation and this method can be particularly useful for reducing speckle noise in
[05:33] radar images and high resolution imagery but it often misses cover type variation at that pixel level so given advantages like full data
[05:47] coverage and uh pixel level sensitivity we'll be focusing on pixel-based classification within this session and this type of classification uses
[05:55] spectral information represented by the digital numbers in sensor data across spectral bands and attempts to classify each individual pixel based on recorded
[06:04] spectral signatures and to clarify digital numbers are the values recorded for each pixel in an image that tell us
[06:12] the brightness of light reflected and since this information is recorded using various bands we're able to compile a spectral signature for any
[06:20] given pixel and these spectral signatures uh capture variation in reflectance at different wavelengths according to the objects on
[06:28] the ground and in our case we're interested in the reflectance of different land cover types so for example
[06:35] in the plot on the right we can see that green vegetation absorbs red wavelengths of light but reflects
[06:40] near infrared wavelengths giving vegetation a spectral signature that is distinct distinct from other land cover types like soil
[06:48] also plotted here so this spectral variation is how we can distinguish land cover types from each other in remotely sensed imagery and
[07:03] typically it's easier to distinguish between broad classes like forest agriculture and bare soil and it's often more difficult to
[07:11] distinguish within broad classes like attempting to classify plant species within a broader vegetation class so in the example here on the slide we
[07:21] can see many spectral signatures plotted for pixels within the vegetation and soil classes but when we plot these pixels together
[07:29] using bands three and four we see that the reflectance values cluster pixels of the same type very closely
[07:36] so this is why you'll likely notice that many land classifications have broader assigned classes however there are advances in
[07:43] hyperspectral and high resolution remote sensing as well as machine learning that can assist in more specific classification of pixels
[07:57] so two different methods are typically used to create land cover maps in the unsupervised method a classification algorithm assigns each
[08:06] pixel into clusters of similar pixels and then the user must interpret this clustering and assign each of the pixel
[08:14] groupings a value corresponding to a land cover class and the supervised method utilizes user-defined areas of known land cover
[08:23] types that are called training areas and these areas are then used to define the statistical parameters of
[08:29] classification algorithms so the algorithm then automatically identifies and labels all the pixels that are statistically similar to the
[08:37] training data in the figure here on the slide the unsupervised classification has clustered similar pixels um which must
[08:45] now be labeled with the class by the user um while the supervised classification has produced a map using
[08:51] an algorithm trained with reference data to automatically assign pixels to a class so so the process is a bit different when we
[09:05] compare the unsupervised approach and the supervised approach for unsupervised we may know a little about the area
[09:14] we may know little about the area so we allow the computer to group pixels without any reference data
[09:21] and the classification algorithm runs on its own and then we evaluate how the computer group the pixels and we assign each of
[09:27] the groups to a set of categories or classes classes so then we evaluate the classes and make
[09:32] edits to those groups as needed and then we run the algorithm and re-evaluate the classification but for the supervised method we first
[09:42] have a set of ground or reference data that we assume to be representative of various classes within the study area
[09:49] and these are our training sites where we know what the land cover class is on the ground and the algorithm then uses
[09:55] this information to group the pixels or objects into those same classes and then we can evaluate the signatures
[10:02] classify the image and run an accuracy assessment on the image itself and for today's session we'll be
[10:08] focusing on the supervised classification method so as we mentioned on the last slide supervised classifications need training
[10:22] data as inputs for an algorithm to classify an image and this requires an analyst to select training areas or points where the land
[10:30] cover class on the ground is known and the simple example here notes the presence of known conifer water and
[10:38] deciduous areas the spectral signatures from these predefined training sites are then used by the algorithm as reference points to
[10:46] classify the remaining pixels and training data can come from a variety of sources like field collected ground data citizen science land
[10:54] monitoring initiatives or very high resolution imagery however i would say that the gold standard of training data is typically
[11:01] considered to be ground observations collected in the field and i've mentioned algorithms quite a bit during our discussion of supervised
[11:13] classification classification i'm referring to machine learning algorithms uh that use inputs like imagery and training data to group and classify pixels
[11:23] these algorithms are a black box which means we're only able to examine inputs and outputs of the chosen machine
[11:29] learning algorithm and essentially we provide the algorithm with training data to teach it how to group pixels
[11:36] into our chosen classes but we're only able to observe its performance by looking at its output classifications
[11:50] so google earth engine has a variety of available classifiers ready for use in the javascript api and these classifiers include the
[11:59] classification and regression trees or cart classifier the naive bayes classifier the support vector machine or svm classifier
[12:08] and the random forest classifier just to name a few so if you're already using machine learning algorithms uh like these within
[12:15] your own work you might find that running classifications like these in uh ge gives you more computing power and
[12:22] takes a little bit less time so i've also shown an example of a deforestation classification in red here
[12:30] using example script from the sdm classifier classifier page that the ge developers have created but for today we'll be using the random
[12:40] forest algorithm for land classification so the random forest algorithm learns from training data and identifies statistical patterns in large data sets
[12:56] to classify pixels for land cover assessment assessment and it's a tree based machine learning algorithm meaning it uses a series of
[13:02] decision trees to select the the best classification for all pixels within imagery imagery it completes many decision decision
[13:10] trees which allow it to vote for the best solution and typically the more decision trees completed by the
[13:16] algorithm the more accurate the classification classification and you'll note that in many classifications the number of decision
[13:22] trees completed by the algorithm is at least within the hundreds and we'll go over how these decision
[13:28] trees work more in the next few slides all right so here we have an example of two random forest decision trees uh
[13:40] attempting to classify a single pixel so you'll note that the tree branches according to spectral characteristics that allow the decision tree to
[13:49] distinguish between pixels and ultimately classify them so in the first tree we start with all pixel types possible
[13:58] for the single classification then filter by a green value above 2000 and then filter by filter further for a
[14:06] red value above 2000 this leaves us with a single class thus classifying the pixel as urban in accordance with the
[14:13] characteristics of the training data so in tree two the classification is distinguished using the specifications of a red value above one thousand
[14:23] and then by a red value greater than one thousand but less than four thousand yielding the classification of bare
[14:29] ground ground so these trees run through a number of decisions and compile the classifications that result assigning
[14:36] the classification as whichever class is most frequently predicted by the decision trees and this is the the voting um that we
[14:44] discussed earlier with each tree getting a vote as to what class the pixel falls under and here we have a third tree um which
[15:00] in this case acts as our tie breaker between the urban and barrier ground classifications classifications uh the tree asks if the pixel's blue
[15:08] value is above 2000 and then if the green value is above 2000. with two yes answers the classification
[15:15] is determined as urban so once the algorithm compiles the votes for each tree um it's determined that
[15:22] the best solution to the classification of this pixel is to classify it as urban uh since two-thirds of the trees came to
[15:29] this conclusion and remember the random force algorithm is making these decisions and classifying pixels according to these
[15:37] specifications because we provided it with reference data that trains it to group pixels in classes according to
[15:45] spectral information so i just want to quickly go over some of the advantages and limitations of random forest
[15:55] in terms of advantages the use of multiple trees in random forest reduces the risk of overfitting which is when a
[16:02] model learns the detail and noise in the training data set to the extent that it negatively impacts
[16:09] the performance of the models the training time is shorter and not sensitive to outliers and training data
[16:17] it also runs efficiently and produces high accuracy for large data sets which is particularly useful when classifying
[16:24] land cover of hundreds of thousands to millions of pixels in imagery i mean it's easy to parameterize
[16:31] as we'll see in our activity later so these advantages are why we've selected uh random forest as our
[16:37] classifier for the ge activity however there are a couple of limitations to keep in mind uh random
[16:44] forest cannot predict spectral range beyond the training data it's given this means that the training data must
[16:50] capture the entire spectral range of pixels pixels throughout the image you're trying to classify or the algorithm will not be
[16:57] able to successfully classify all pixels within the image okay so now that we have more background on the classification algorithm
[17:11] we'll be using let's talk about accuracy assessment assessment so for land classifications accuracy refers to the degree of correspondence
[17:20] between classification and reality and accuracy assessment is the process by which the correctness of an image classification is evaluated
[17:30] and this involves the comparison of classifications determined by the algorithm algorithm to reference data that are assumed to be
[17:37] true true and this reference data is typically um a subset of the training data withheld from the algorithm for comparison um
[17:45] or additional ground troop data so this screenshot here is just a quick preview of what accuracy outputs
[17:53] look like in the ge console and we'll talk more about how we assess accuracy of classifications in google earth
[18:00] engine in the following slides so as i mentioned during accuracy assessment we're comparing algorithm generated classifications to reference
[18:12] data that reflects known land cover type an agreement between reference data and the classifications uh tells us that the
[18:20] classifier is performing well and if there's no agreement then the classifier has incorrectly measured the land class resulting in
[18:28] errors errors and you can see a simple table here i'm compiling agreement information between the algorithms classification and the
[18:37] reference data and to complete this comparison and we typically use a confusion or error matrix for a number of pixels and
[18:45] reference points so we'll go over a simple air matrix i'm in table format to familiarize you with
[18:58] how this works the table shows the comparison of reference classes that we assume to be correct correct these are the columns and mapped classes
[19:08] that are the output of our chosen classification algorithm and these are the rows so the number of correctly classified
[19:16] pixels is shown along the diagonal i'm in the middle of the table you'll see that we have 45 cases of
[19:22] agreement for the urban class 91 for agriculture and so on along that diagonal so then if we look at the column totals
[19:36] these are the total number of reference pixels in each class shown here in gray and outlined in green
[19:42] and these are the total number number of pixels we know to be true for each of the classes urban agriculture forest and
[19:50] fairground the road totals on the other hand are the classified pixels for each land cover class shown here in gray
[20:03] so these are the total number of pixels our classification algorithm identified from that particular class and if you take a quick glance at the
[20:13] row totals and then the column totals you can see that those numbers are not always the same for each land cover
[20:19] class and this is due to errors in the classified pixels so here you can see that all of the
[20:27] pixels off the diagonal in gray are the pixels that were incorrectly classified within the image so for the urban class
[20:35] for example our map classified 45 of those correctly but misclassified 4 pixels as agriculture agriculture 12 is forest and 24 as bare ground
[20:53] and so for the purposes of summarizing this overall accuracy we divide the sum of the correctly classified pixels
[21:00] by the number of total sampled pixels i'm in our example error matrix this means that we take the sum of the
[21:07] correctly classified pixels um right there on that diagonal and then we divide that by the total number number
[21:13] of sampled pixels which in this case is 336. so we then multiply this by 100 to obtain a percentage of overall accuracy
[21:24] um which in this case is 73 and we usually consider an accuracy of 80 or higher as a successful land
[21:32] classification um so in this particular case we would likely want to adjust our classifier parameters um or input more
[21:39] training data to obtain a higher percentage of overall accuracy so a statistic you may also find useful
[21:52] for accuracy assessment is the kappa statistic statistic kappa takes into account the possibility of agreement between classifications and
[22:01] reference data occurring by chance and provides the proportion of agreement after chance agreement has been removed it's calculated from the error matrix
[22:12] and will be relatively easy for us to tack onto our accuracy assessment and kappa values are from uh negative
[22:19] one to one and a higher kappa means a higher agreement and the accuracy of the classifier on the right you can see a breakdown of
[22:27] how we typically interpret kappa keep in mind that you would likely want to aim for value values that fall within
[22:34] the substantial to almost perfect agreement ranges it's important to note that a common criticism of kappa is that it does not
[22:42] typically uh provide you with much more information about accuracy than the overall accuracy assessment uh calculated in the error matrix um that
[22:51] we just went over but we think it's worth showing you the kappa statistic function in google earth
[22:56] engine engine just so that you have an example of applying a statistical function within the api so kappa is calculated using this
[23:10] equation equation uh the observed accuracy is the sum of relative frequency in the diagonal of the error matrix
[23:17] and chance agreement is the relative frequency of a random allocation of observations observations to the cells of the air matrix
[23:26] so to calculate kappa the chance agreement is subtracted from the observed accuracy and then the resulting value is divided
[23:34] by 1 minus the chance agreement so we'll take a quick look at how this works works using our example error matrix
[23:47] so you can see that the observed accuracy is the same calculation we used to calculate overall accuracy
[23:54] and chance agreement is calculated by multiplying column totals by row totals dividing each of these values by the
[24:01] total number of sampled pixels and then adding each of the resulting values together together so the chance agreement is then
[24:10] subtracted from the observed accuracy and then this value is divided by 1 minus the chance agreement value
[24:17] so in this example we've obtained a kappa of 0.64 which indicates substantial agreement and thus accuracy in our classification
[24:32] now with reference to accuracy assessment in ge specifically an error or confusion matrix can be coded in google earth engine uh to test
[24:41] the agreement between our output classifications and reference data and we can do this in a couple of different
[24:48] ways uh the first is more of a quick sanity check um just to test the quality of our training data in terms of its
[24:56] ability to actually train the classifier so this is coded using the confusion matrix function to test the random forest classifier's
[25:06] ability to correctly classify reference data that it has already seen which in this case is the training data
[25:15] and a better way to assess true accuracy is to test the trained algorithm's ability uh to correctly classify
[25:22] reference points that it has never seen before before so since the classifier has never seen this reference data and we can truly
[25:29] assess its ability to correctly classify the land cover class so there are a couple of ways to do this
[25:37] in google earth engines for our purposes we will withhold a subset of the training data from the
[25:44] random forest classifier to use later in an error matrix that assesses agreement between classifications and these previously
[25:52] unseen reference data points and another way to do this is suggested by the ge developers and it's to use another lan
[26:01] classification data set um to compile reference data for use in an error matrix matrix um so i've shown an example here of the
[26:09] modis land cover product that the developers use in some of their example script script to assess accuracy of their own random
[26:16] forest classification however i think it's really important to note that while this might be easier it's better to use reference data that
[26:24] you know to be true like field observations and we can also quickly calculate a kappa statistic for an error matrix using uh the simple
[26:35] kappa function that we'll show you in google earth engine now i know we covered these topics relatively quickly
[26:46] so i've provided links to relevant past trainings here and if you're interested in learning more about land cover classification and
[26:54] accuracy assessment i really encourage you to take a look at the land cover classification with satellite imagery um
[27:01] and accuracy assessment of a land cover classification classification trainings available on our website so for another example of a random
[27:12] forest classification in ge you can also take a look at the remote sensing for mangroves in support of the un
[27:19] sustainable development goals training i mean i believe they complete that random forest classification in session two uh
[27:26] but the whole training provides great information about the functionalities of google earth engine um and they even go
[27:32] into app creation communication of data so it's a really valuable training to take a look at if you're interested in
[27:39] engaging with ge further so you might have noticed that a lot of our credits link you uh to the
[27:52] ge developers website and there's a number of guides tutorials and example scripts on this website that you might find useful um that we've
[28:00] actually used for certain parts of our javascript api activities activities and i've included links specifically for the feature collections uh compositing
[28:10] masking and mosaicing machine learning and earth engine and supervised classification pages on the gee developer webpage but i've also provided the link to the
[28:19] full list of guides and tutorials made available by the developers and these can be a really great place to
[28:25] start start with ge and can provide you with some pre-written scripts that you can adapt for your own work
[28:37] all right so that wraps up the slides portion of this session for our activity in ge you want to use
[28:44] this link to follow along in the javascript api if you weren't able to sign up for a
[28:50] google earth engine account for whatever reason reason don't worry about it you can definitely just follow along on the screen
[28:56] but make sure to sign up for that account before the next session if you can um so that you can follow along in
[29:01] the code editor yourself so our guest speaker brittany beaudry will be walking us through this activity so brittany i'll go ahead and hand it
[29:09] over to you to get started um um hello everyone as sex stated we'll be working out of google earth engine today
[29:21] so just as a quick reminder from the last session uh let's go over some areas of the code editor and interface again
[29:32] so here in the center is the the code editor it's where you write and edit your code
[29:39] and where we'll spend a good amount of our time today with the code and then above this here is the search
[29:46] bar bar here you can search for data sets that earth engine has loaded and you can also search for
[29:54] locations locations here as well below the code editor here is the map this is the map display
[30:03] when you run your code everything that you choose the map to show will show up down here
[30:12] and then here on the left you can pull out a left panel panel and the first tab here is the scripts
[30:20] tab tab it's where you can store your code and projects so that you can return to them
[30:25] when you'd like and then the next tab here is the docs tab this is all the documentation for google
[30:34] earth engine so it's where you can look up uh functions for your code and find more information about you know proper
[30:42] use and syntax and stuff like that and then next here is the assets tab uh so here you can upload and manage
[30:53] assets in earth engine assets include things like images geotiffs shapefiles and tables you can import these into your codes and
[31:05] then use them for various purposes so so also on the the right here there's another panel and let's start with the inspector tab
[31:20] uh this is where you can interact with the map below by clicking around it will give you the location and layer
[31:29] information information about what's displayed and what you're clicking on so the next tab is the console tab
[31:39] when you print something from your console console like text or even objects or charts they will show up there it's interactive
[31:50] so you can learn more about what you put here as well so we'll be checking this tab a few
[31:56] times throughout our lesson today and then the last tab here is the tasks tab tab where you can export items or
[32:06] run computations or tasks and with all that said i think we can get into the code today
[32:16] so so today we're going to be making a supervised land cover classification map of cumberland county maine
[32:27] so looking at the code editor here up at the top we see we have some imports imports you can import in assets from the asset
[32:37] tabs tabs here on the left panel you know something like this or you can call them into your code and
[32:49] import them from the code editor our imports today include the shape file of our study area uh cumberland county maine uh we named
[33:00] it here cc main for short here's a quick view of what it looks like when you click on an asset you
[33:07] might be able to kind of see what it looks like and then as well as any properties or features
[33:15] and the rest of the imports here are points that we're going to use for training and testing the random forest
[33:22] model model later in the script so so let's start looking at some of this code so part one here
[33:34] is looking to add imagery filter to the area and date range mask out clouds and make a composite
[33:44] so the first section of code we're going to look at today are lines 9 and 10 so line 8 is uh just a comment here
[33:55] that tells us what we're going to do in this section it's good practice to add comments to
[34:00] your code so that way you know um what each section is trying to do but to run our our code lines 9 and 10
[34:10] here here we need to uncomment it and you can do that a few different ways you can start
[34:18] by just backspacing and getting rid of these two slashes at the beginning of the the the line here for each of the lines
[34:30] but you can also highlight it and then hit control slash if you have a windows or con
[34:40] command slash if you have a mac so whatever way you like let's uncomment lines nine and ten
[34:50] so that they're not um this green color and instead they're a different color and let's see what's uh happening in
[34:56] them them so here in line nine we're creating a variable using var uh and then we're naming the variable
[35:07] image right here so here uh we're saying that image is an image collection ee dot image collection
[35:16] and the image collection is landsat 8 tier 1 surface reflectance imagery this is the same image collection that we
[35:26] used during the last session uh so then here in line 10 we are using filter bounds to filter the
[35:36] image collection to an area the area that we're filtering to is the cc main import that we have up there at the top
[35:47] that we imported in our shapefile of cumberland county maine so here within these two lines we have
[35:55] created created a variable called image uh where uh which is the image collection of the landsat 8 surface reflectance image
[36:06] collection and we filtered the image collection just to our our study area which is cumberland county maine
[36:16] so moving on to the next section of our code here we're going to be looking at lines 13 to
[36:23] 25 25 so let's uncomment that section of the code now 13 to 25 so remember we can use backspace
[36:35] to just remove these comments or or we can use control slash on a window or command slash on a mac
[36:46] so let's do that give you some time to complete that as well okay so here in this section of the code
[37:02] uh we are creating a function that masks masks clouds out of landsat 8 serpents reflectance data so we do that by
[37:13] looking at the pixel qa bit mask band of our image collection so let's look up our image collection here in the search
[37:22] bar to get a better understanding of uh what we're looking to mask out and how we're gonna do it
[37:29] so i'm just gonna look up this this information which is our image collection here i'm gonna look that up
[37:34] in the search bar i just copied it pasting it so if you click on it here in the search
[37:40] bar bar and you go to the bands section we're looking for the pixel qa bit mask which is right here
[37:52] pixel qa stands for pixel quality assessment assessment so these data have been atmospherically corrected using the landsat surface
[38:03] reflectance code and it includes things as clear water cloud shadow snow and cloud and what this essentially is is looking
[38:13] at every single pixel it's identifying whether whether the pixels contain clear imagery if there's water in the
[38:22] image if it's a cloud shadow or snow or a cloud so so knowing that each pixel has information
[38:32] about whether or not there is a cloud or cloud shadow in it we can mask out that
[38:37] cloud or cloud shadow in our imagery by creating a function so i'm going to hit close here we're
[38:44] going to go back to our our lines 13 to 25 for our function so so we start by defining that this is a
[38:54] function with the words function and the name of the function is mask l8 surface reflectance right there
[39:03] so so uh line 14 here is creating a variable called shadow cloud bitmask and we're using the bitwise shift left
[39:16] operator here to select the pixels that have the pixel qa value of three which when we looked
[39:23] it up here um three was a pixel that has a cloud shadow within it it and we're doing the same thing here in
[39:32] line 15 we're creating another variable called clouds bitmask and we're using that bitwise uh left shift to identify
[39:42] pixels that were labeled 5 meaning that they had clouds in the pixels in line 17 here here we're making a variable called qa
[39:57] and again we're selecting the pixel quality assessment band in the image and then here in lines 19 and 20
[40:07] uh we create a variable called mask right here var mask that takes the qa variable we just made
[40:17] previously here in line 17 and uses bitwise and to select our clad cloud shadow bit mask and our cloud bit
[40:28] mask from above the ones that uh the pixel set have the cloud shadow in the cloud and we make them equal to zero oh sorry
[40:38] with these dot eq zeros therefore we're taking the selected pixels that are identified as cloud and cloud shadow and we're taking them out
[40:49] of the imagery or masking them out so by setting them equal to zero we're indicating clear conditions for our
[40:57] pixels in our image collection and then here in line 22 we are returning the masked image dividing by 10 000
[41:09] to scale to reflectance without the uh quality assessment bands so we then copy the properties system time start
[41:21] so that we can later filter by the dates within the data for our image collection so that's what we're going to be doing
[41:28] in the next code section below so so let's uncomment our next section which are lines 29 to 34.
[41:42] so here we are filtering imagery for 2019. and 2020 summer date ranges we will then use that filter uh to apply it
[41:54] to the image collection so 19 19 to 30 sorry 29 so 34. you can i again either just backspace
[42:07] the uh the slashes out control slash on the windows or command slash on a mac so you see here in line 29 we're
[42:16] creating a variable and it's called sum20 for summary 20. and we're using uh ee dot filter.date along with a date range
[42:27] so here's our beginning date range and here's our end date range it's just the summer months within
[42:34] 2020 2020 and we're doing the same thing here in line 30 with the variable summary 19 some 19.
[42:43] we're using the same ee dot filter.date and we're using the start and end date of the the same months
[42:51] but within 2019. so then in the next variable here on line 32 this variable sum filter equals ee dot
[43:02] filter dot or and we're just using both of these two variables so we're using both date ranges in the summer filter this date
[43:10] range is a combination of just the summers of 2019 and 2020. so here on line 34 we are filtering
[43:21] image image which was our image our variable image way up here back on line nine that image collection filter to main
[43:29] that we talked about so we're filtering that to our summer filter so that means we're taking that
[43:35] image from before and we're just filtering it to the summer date ranges so our next lines uh this next section of code that we're
[43:46] working on we're going to make a composite if we're going to apply the cloud mask function use the median reducer and clip
[43:56] the composite to our area of interest so we're just going to unmask lines 38 to 41 again mask the unmask those
[44:08] i like what's happening in this line is we're creating a new variable it's called composite composite and we're using this image from before
[44:18] all sum meaning all the summers and that's the image filtered to our summer date ranges and we're mapping it
[44:26] and by using dot map we're using that function that we created earlier mask l8 sr and we're masking out the clouds out
[44:35] of that imagery so we're using that cloud mask function on our summer imagery of our study area
[44:43] and then we're using dot median just as a reducer to reduce it to an image and then we're clipping the image again
[44:51] just to our study area cc main and that's our new variable it should just be an image of a composite
[45:00] of uh our image of the summer masked without the clouds in our study area area which brings us to
[45:11] uh line 44. we're gonna unmask this one because we're going to display the composite down within our map area
[45:24] so once you uh uncomment uncomment this line here line 44 we can hit run up at the top here the top right run
[45:36] and now what's important about this line is we hit we're using map dot add layer so we're adding the layer composite
[45:45] and we're using the bands band 342 for some true color imagery we're naming it cumberland cover cumberland color image
[45:56] and then the zero at the end here means that it's not going to initially show up even though we've run it and it's run
[46:03] successfully if you go to layers you can see cumberland's color image has shown up up but we need to click on it in order for
[46:13] it to appear so again just clicking on it it i can scroll up here and here's our color image of cumberland
[46:23] county county you can zoom in or out it just might have to reload but here's what it looks like
[46:33] and then you can change the opacity if you want to look at something beneath beneath which is typically what people do with
[46:40] multiple layers things like that but there is our color image of cumberland county county filtered again just to cumberland county
[46:48] and it's the composite of the summer images masked without those clouds all right so so this part two uh for this section
[47:02] uh we're interested in classifying uh vegetated data so for the purpose of identifying and classifying developed land uh we're
[47:13] going to import data directly from the usgs national land cover database right from earth engine so we're going to
[47:26] map urban development at varying scales using this data so our random forest model is just for vegetated areas but
[47:35] this is an example of how you can use pre-existing layers in earth engine as a way to supplement your own land
[47:44] classification classification so this can be helpful for working around features that you don't want to map or maybe you want to mask out or
[47:52] even just reduce the need to map out features that you're not interested in for your specific work
[48:00] so so we're going to look at lines 50 to 54 here here and we're going again to just
[48:10] unmask i'm not on mask uncomment and uh let's look at exactly what i'm talking about here with the usgs
[48:18] national land covered database you can type in usgs nlcd nlcd and we're looking at the top one here
[48:28] and again this is just the national land cover database uh we're going to be importing uh the
[48:36] impervious impervious uh maps area of our study area so this is uh typically developed surfaces you know
[48:46] sort of man-made things and it's on a scale scale of of uh one to a hundred percent impervious
[48:54] so we're going to be segmenting that into a couple different layers of uh developed land for our
[49:02] classification here later but let's just start by uh adding the impervious surface layer so here on line
[49:10] 50 50 once you've uncommented your code we're going to start with uh the variable impervious and that's just the image collection up
[49:19] here that we just looked up and then we're going to filter it uh to a date range this is the most
[49:27] updated version the most recent version of the impervious layer it's from 2016 to 2017 so that's our date range that we're uploading
[49:37] and then we're filtering the bounds here on line 52 again we're just filtering the area just to our study
[49:43] area cumberland county maine and we are selecting impervious again we're just selecting the land cover type that is the impervious surface the
[49:54] developed areas and then we're using dot map and we are just returning the image of uh the impervious area within
[50:06] our cumberland main study area so from here we currently have it as an image collection and we're looking to
[50:14] reduce it uh just to a single image so we're doing that here in line 57 so if you uncomment that line
[50:24] uh the variable reduced is just impervious again our last our last variable here the image collection and
[50:30] we're using the dot reduce uh function and then median we're just taking the median of of the filter date here
[50:38] and then on the next section of code here just line 60 we're masking out the zero values in the
[50:47] data data so here uh on the variable masked we're taking reduced which is just that image and we're using dot self mask here
[50:57] that's just taking out any values in the data that are zero it's just removing them because we're
[51:03] not interested in them okay so i was referring to these values up here these are the values for the
[51:12] land cover classifications from these feature collections uh with 1 to 100 being the percent impervious surfaces um 100 to
[51:23] coniferous all the way to 105 water 106 years from a previous land cover classification we have masked out the
[51:31] clouds at this point so we don't need to identify them um um moving onwards uh we're looking to merge
[51:40] the land cover classifications into one feature class so let's uncomment line 75 here and look at what's happening
[51:51] so we're using the variable bar using var we're naming the variable new fc for new feature class
[52:00] so we are merging these land cover classifications into one feature class so so we're looking at the ones we were just
[52:07] looking at before you know uh coniferous and then we're using dot merge and we're merging it with mixed forest and we're just
[52:17] using dot merge and all the land classifications that we're looking to use for random forest classification today
[52:25] today um and while they're all merged into one feature class they are still all saving saving these uh lens cover values so they're
[52:34] not all of the same value they're all going to maintain their original values here of 101 to 105.
[52:43] so here in line 78 we're going to specify the bands to use in the prediction so let's uncomment
[52:52] line 78 here and here we're just using the variable bands and we're using bands three four five six and seven for our random forest
[53:04] classification again this section of the code is just preparing for it and then here we are making training data
[53:14] by overlaying the points on the image so let's uncomment lines 81 to 85. i'm going to be doing that lazy control
[53:29] slash slash but you're welcome to again just backspace backspace as well as use command slash if you have
[53:38] a mac so here in line 81 we're using the variable points so so we're selecting our composite our image
[53:49] our variable above composite if you remember and we're selecting the bands here we're selecting the bands from that
[53:55] image and then we're using dot sample regions regions and then with our collection here uh uh new fc new feature class this was
[54:08] this up here all of our our merged uh our merged land cover classifications this is the set of geometries that we're selecting
[54:18] for our training today and underneath that is the uh line 83 the property we're using is land cover
[54:26] this is the label from each of the geometries the number 101 205 that's where we're selecting them
[54:33] and then we're using the scale of 30. we're making sure to sample from the same size as a landsat pixel
[54:43] landsat imagery is 30 meters so our scale is also 30. and then we are using dot random column
[54:54] so this creates a column with random numbers numbers the random values are used to divide your sample into training
[55:03] and validation sets which is something that we're going to be using in the next section of code below
[55:10] so let's scroll to that and let's also clean up down here i'm going to get rid of
[55:15] of the geometry imports and i'll go back to the map just to clear up the imagery down below
[55:20] in case it's a little distracting or it's making your uh your editor a little slow i think it might be making mine a
[55:26] little bit slow all right so so uh this next section of code here we're going to be uncommenting lines 89 to 91.
[55:39] so let's do that now explore what's going on here so so in this section we are randomly
[55:49] splitting the samples to get some aside for testing uh the model's accuracy we're using the random column from above
[55:58] so uh we're using all features with random values again this random column less less than than 0.8 so we're splitting it 80 20
[56:11] so anything less is going to be for training and then the remaining 20 percent that we use is going to be for testing
[56:20] so it's randomized and so these are just the two subsets of the training data oh sorry these are the two subsets of
[56:30] the training data and then here uh on the area below we are just printing these variables just to uh actually get a number for how
[56:40] much training and testing data we will be using in each of these subsections so let's uncomment that and unpack it a
[56:48] bit bit so let's uncomment lines 94 to 96. all right so these are all print statements again print statements are
[57:04] going to show up right here on the console on the right once we run our code again
[57:10] so so line 94 here is printing samples so what it is is it's points and we're getting the count for all of the points
[57:21] so so what is points again that's this up here these are again just all of the points
[57:27] that we're utilizing uh for our classification so we're just printing the amount of points that we're using for our selection
[57:35] and then here uh training and testing we are just printing the aggregate count of all of the training points and all of
[57:44] the testing points that we are going to be using for our random forest classification classification so let's run this and see
[57:53] what it prints again just hit run up here so let's see it's computing right here you can see it
[58:07] spinning away okay okay so so um after a bit we now see that we have 1067 samples that we're going to be
[58:51] using for a random fourth classification 865 of them are used for training and then 202 of what we are saving for testing
[59:04] which will bring us to our our next section here which is part 4 random forest classification and accuracy
[59:13] assessments assessments so so let's uncomment the first section here and these are lines uh 102 oh no sorry 103
[59:26] to 107 so let's uncomment lines 103 207 so let's look at what's going on so we're using the variable classifier
[59:41] and here we are using ee dot classifier dot smile random forest so we're using a random forest model
[59:51] and then these 305 so we're using 300 trees in the five randomly selected predictors per split as we discussed or as zach discussed
[1:00:04] in the uh trees and splitting during his his lesson earlier so then we're going to train using bands in land cover
[1:00:14] property and pull the lens cover property from the classes so again on line 103 we have the variable classifier
[1:00:22] and we're just identifying yeah we're going to be using the random forest classifier in google earth engine it's
[1:00:28] just called dot smile random forest and we're using 300 trees with five randomly selected predictors and then
[1:00:35] we're using dot train so the features that we're using are training again that's our training data from up here on line 90 these are the
[1:00:44] points and again these are the 865 uh points here that's what we're using for our training data for a random
[1:00:54] forest forest and then the class property that we're looking at is land cover those values 101 to 100 to 5 depending on the
[1:01:03] different different classes that we're looking to classify today and then the input properties on lines 106 are bands if you remember
[1:01:13] that was the variable up at the top here let's see line 78 just bands 337 so so we're preparing our our random forest so
[1:01:27] let's uh let's add something here to test the accuracy of the model so we're going to start here with lines
[1:01:35] uh 1 13 two lines 117 let's uncomment that okay okay so so let's start file here line 113
[1:01:56] variable confusion matrix we're uh running classifier dot confusion matrix again classifier was just our our random forest model up here
[1:02:07] and then dot confusion matrix a confusion matrix it will compute a confusion matrix uh for the random force classifier here
[1:02:20] based on our training data the axis of the matrix corresponds to the input classes the rows and columns start at class 0
[1:02:31] and then increase sequentially up to the maximum class value so so some rows or columns might be empty if
[1:02:39] the input classes aren't zero based or sequential but uh this first confusion matrix here is just a basic sanity check
[1:02:48] it's just to make sure that the classifier is working well and if training data had a high enough
[1:02:54] quality to actually train the classifier so so here we're just using a print function again that's going to show up on the
[1:03:03] right here on the console so it's just going to print this confusion matrix here and we're going to
[1:03:08] get that that matrix with all the values just our sanity check and then here on line 115
[1:03:17] it's another print statement and we are printing the training overall accuracy and we're printing uh that's the words that we're printing but the
[1:03:28] value is the confusion matrix dot accuracy accuracy so confusion matrix confusion matrix dot accuracy here creates a new floating point number
[1:03:40] indicating the accuracy of a confusion matrix it's computed as the number of correct classifications divided by the total
[1:03:51] number of classifications and then here on line 116 we have a variable called kappa and that's confusion matrix dot kappa so
[1:04:04] as sax stated before um kappa is in agreement between classifications and reference data that we believe to be
[1:04:12] true true it's essentially evaluating how well the classification is performing as compared to to you know something just randomly
[1:04:21] assigning values so confusion matrix dot kappa uh creates a new floating point number indicating the kappa statistic
[1:04:31] for a specif uh for a the specified confusion matrix and this measures the agreement between two data sets on a
[1:04:39] scale that generally ranges from 0 to 1. to interpret the kappa value anything from 0.6 to 0.8
[1:04:49] is substantial and anything above 0.8 is very good or an almost perfect agreement agreement and again line 117 we are just printing
[1:05:00] it it's called training kappa so that print statement should just give the kappa value here on the console
[1:05:09] so so here we would assume uh this next part to be a much better test as we withheld 20 of our points
[1:05:19] if you remember so we are using them now in an error matrix and an accuracy assessment to test the classifier's
[1:05:27] ability to classify points that weren't used to originally train the classifier so it hasn't seen these before
[1:05:36] so this gives us a more accurate view of the classifier in general so by looking at the agreement between
[1:05:42] the classifier we trained and the reference data that is completely new to the classifier it's going to be a much better test of
[1:05:51] accuracy for this random forest classifier that we're using today so starting on line 119 we're creating a variable called
[1:06:00] validation validation and we're using that testing data from up above if you remember testing so these are the ones that we
[1:06:09] did not use the 20 here the 202 points and we're going to classify them with the classifier
[1:06:18] up above again we're just running them and then we are running an error matrix on them in the next line
[1:06:27] 120. so we're again just doing an accurate assessment on these this 20 of the code are of the points that uh
[1:06:35] the classifier has not seen before so this is the test accuracy and an error matrix it's just like a
[1:06:43] confusion matrix computes computes an error matrix for collection by comparing two columns you get as a result a confusion matrix
[1:06:53] representing the expected accuracy and so then we have print statements again just to print these to the console
[1:07:00] so we can see their values so the one here is for printing and we're labeling it validation air matrix
[1:07:08] rf rf and we're just printing test accuracy right here and then we're also printing the validation overall accuracy
[1:07:18] and that's the test accuracy using the dot accuracy afterwards and then on lines 123 and 124 we're running that cap statistic again
[1:07:31] on test accuracy this validation um the classifier from our testing data we're just running the kappa statistic
[1:07:39] again and then we're printing it again of course to see it here on our console so so let's run this so we're going to get a
[1:07:48] few more print statements here and these are going to be our our accuracy assessments um so now that all of our statements
[1:08:11] here have printed let's look at what our our results are so looking here this is our confusion
[1:08:18] matrix for line 114 here is again just the confusion matrix in all of the elements and followed by the overall uh training
[1:08:29] accuracy from line 115 so that's currently 99.7 percent and then the training kappa value here is represented as 0.9
[1:08:43] and then this next section here is the area that we assumed would be much better test as we are looking at that
[1:08:51] that testing area area so first is the the error matrix for the validation validation which we're printing here on line 121.
[1:09:02] it's again very similar to the confusion matrix of course as you can see they're very long welcome to explore them but i'm going to
[1:09:11] close them up now just to make it easier to scroll here followed by the validation overall accuracy for the random forest
[1:09:21] so so right now it's 79.7 so if we round that up to an 80 we'll just squeak on by
[1:09:27] usually you're looking for a an overall accuracy of about 80 or higher higher and then followed by the kappa value
[1:09:37] here which is 0.6 and again everything from 0.6 and higher you can kind of consider a substantial
[1:09:45] agreement agreement so again if you wanted to improve these values again you probably wanted a little higher than this for the overall
[1:09:53] accuracy accuracy you can do that just by adding more points and again again we only have about a thousand here
[1:10:02] that's you know kind of low if you're looking to do a very in-depth random forest classification um so i definitely recommend adding more
[1:10:10] points and looking at you know high-res satellite imagery to really make sure that the points you are selecting
[1:10:16] are as accurate as possible for your model model and then here on line 127 make sure it's uncommented
[1:10:26] on line 127 we are just applying the classifier to to our image and remember our our image is the cumberland com
[1:10:35] cumberland color image from earlier so we're applying our classifier to that so here um composite composite dot select bands we're selecting the
[1:10:48] predictors predictors and with dot classify and then classifier we're classifying or we're applying the random forest uh classifier which
[1:11:02] which is up here the classifier we're running that random forest model on our composite and we're naming it classified
[1:11:11] so we're running our model so part five let's create a legend for our map so once we uh
[1:11:19] we print our map or we present our map down below of our random fourth classification classification we can
[1:11:26] better understand what each color in each section is going to look like right for our different layers or different uh
[1:11:36] land cover types so to create a legend we're going to start by setting the position of the
[1:11:42] panel panel and you're going to do that by uncommenting lines 133 to 138 so so let you do that
[1:11:55] so we start on line 133 just by making a variable called legend and then we're using ui.panel we're
[1:12:04] creating a little panel down below it'll show up right around here because we're using position bottom left
[1:12:10] so style again this is the style this is sort of looking at the visualizations of the legend already a lot of this part 5 here
[1:12:18] is going to be looking at visualizations for for the the legend so with the style the position is going
[1:12:25] to be bottom left in the padding is uh looking at kind of the size pixels i selected 8 by 15 you're welcome to
[1:12:36] play around with those and see how the the size and position of the panel changes as you
[1:12:42] change different things but for now we can just expect it down there so for our next section
[1:12:49] we're going to create a legend title and we're going to do that by uncommenting lines 141 141 to 149
[1:13:00] so again i'm uncommenting by slash slash because i have a windows um if you have a mac again just command slash or you
[1:13:09] can backspace each line so what's happening here is in line 141 we're creating another variable called legend title
[1:13:19] and uh that's just we're using a ui dot label label so the value or what the title is
[1:13:26] actually going to say it will say classification legends and then for some more style we have the font weight we're
[1:13:33] making the font bold the font size will be 18 and then the margin meaning how far the
[1:13:41] uh the font will be from the edges of the legend so i just have it as four here and i
[1:13:47] don't have any padding in this area again each of these kind of have a little bit of a different effect on the
[1:13:53] legend you're welcome to play around with them but i'm just going to keep these as is for
[1:13:58] now now and so now we're adding the title uh to the panel again nothing's going to show up down
[1:14:06] here until we until we run it but let's start by uncommenting line 152. so so um we're just going to do legend dot add
[1:14:20] and we're adding that legend title up here so so and then this section is creating and styling
[1:14:29] styling a row of the legend so this is a lot of a lot of styles and information for the legend
[1:14:37] um so even though you're styling technically for one row it's going to apply for the entirety of the legend
[1:14:43] so let's start by uncommenting this is a big section here uh line 155 to 174 so i'll give you some time to
[1:14:54] to do that so so in line 155 here we're using the variable uh just called make row and
[1:15:08] this whole section here is a big function function so uh what we're looking to do here is
[1:15:15] again we're just uh making a row and then we're going to use it for all of our rows for all of
[1:15:21] our land cover types later but again this is just very style specific so starting at line 157 we're looking at
[1:15:28] the the color box we're creating a variable called color box again it's just another label label and this is actually going to be sort of
[1:15:37] the background of the area so we're choosing background which is uh just a little little hashtag here plus color we'll see that
[1:15:47] down here in a bit and then the padding in the margin again just keeping it the same as up above so
[1:15:54] it looks you know all nice and neat in a row which you'll see once we run it
[1:15:58] and then uh here in line 165 we're having a description and again it's just the the the label
[1:16:06] and the value is name which is going to come up down below as well well and the style again we're just keeping
[1:16:14] it sort of similar i think this is added here just to make sure that there's enough width for the names
[1:16:23] and then here on line 170 is just returning the panel the widgets are again color box and description we're
[1:16:32] making sure this is added to the to our our our legend legend and then the layout is we're just having it horizontal so
[1:16:40] we're having everything present itself horizontally below so here is uh on these new lines we're adding some of
[1:16:47] these that are mentioned up here so again this is the function and we're going to put these into the function
[1:16:56] so let's uncomment line 177. so this is our variable palette so this is the palette for the legend colors
[1:17:05] these are the colors that we're going to be using in our legend as well as the colors that we're going to be using in
[1:17:10] our map of our random forest model so these look kind of weird they're just some random letters and
[1:17:16] numbers but these are hex codes hex codes are just six six letters and numbers that identify a
[1:17:23] color there's a lot of places online where you can look up good hex code combinations or lookup hex
[1:17:30] codes specifically these hex codes as you're going to see when we um kind of run our our map down
[1:17:37] below or combinations of blues and greens uh purple and a little bit of yellow so so this comes into color box here so it's
[1:17:47] usually like a hashtag or pound followed by these numbers and that's that's the typical hex code so by
[1:17:54] running this function we don't have to run this over and over for every single color we're just putting this variable
[1:18:01] palette through the function and applying this every single time which is a great way to save space on
[1:18:08] code code and we're doing the same thing here on lines 80 and 81 so let's uncomment that
[1:18:17] however you'd like and so this is the variable names so this shows up here as well and these are the names for all of the
[1:18:27] different different uh uh land cover classes that we have again these are the same as the geometry
[1:18:33] imports imports uh cultivated water deciduous coniferous and mixed forest as well as the the uh density developments the imperial uh
[1:18:47] impervious layer that we have we're mixing them low medium and high density development so so let's check here uh
[1:19:00] lines 184 to 186 let's uncomment that so we're adding the color and the names so let me
[1:19:13] so this is just um stating how many rows we're going to have in our in our rows
[1:19:20] up here again that this function here just created one row so we're kind of saying that we actually want uh eight
[1:19:27] rows rows which is that here and so we're making sure that we have eight rows and the
[1:19:33] palette and the names correspond here they're included and again the value here for the color is responsible for the
[1:19:49] name name that is at the same point in it so the first palette's color here will correspond to the first name here the
[1:19:59] second color here will correspond to the second second name here and so on and so forth for all
[1:20:05] types types and then we're going to add the legend to the map which we're just using uh which we're
[1:20:13] just running online 189 map dot add and we're adding our legend let's uncomment that and now let's hit run
[1:20:23] and we should see our legend right away it might take a little bit to load okay okay so here's our legend
[1:20:36] um here's all the rows all of the colors from the palette and then all of the the land cover classes
[1:20:46] so so our last uh section here is part six and it is display the final lens cover
[1:20:53] classification classification um um so we're going to start by creating a palette for the final lens cover map classifications it's um of
[1:21:05] course course good practice to make sure that these colors and these titles are uh combined with our own
[1:21:12] map itself so this is actually sld style but let's just uncomment and we can kind of dive in
[1:21:23] so we're going to uncomment lines 195 to line 207 so i'll give you some time to uncomment
[1:21:32] that so so this is uh so many colors for our our map our final lens cover map um that
[1:21:44] it's in a a css style so it's a variable and it's called urban palette palette so so for each land cover type that we're
[1:21:57] looking to map today we're making sure that there's the color the quantity and then the label so this is where our
[1:22:06] low mid and high density development will appear for our our land cover um impervious surface so low is anything from so these are
[1:22:19] just the highest values so anything from 1 to 22 impervious is considered low density anything from 23 to the highest value of
[1:22:29] 56 is considered mid density and then finally um anything from 57 to 100 percent impervious from our
[1:22:38] impervious surface layer will be considered high density development and then these other values again were just the values that we that we assigned to
[1:22:47] our our our imports here are points so 101 to 105 again so so these are the colors that we're going to
[1:22:58] be using and then we're looking here to mask out the impervious surface we're just going to blend our
[1:23:10] impervious surface uh data here with our random forest classification we're just going to use dot blend so if you
[1:23:18] remember classified is our random forest classification and by uh we're going to use dot blend to add masked which if you
[1:23:26] remember remember from way up in the code is our impervious surface layer masked without the zero so it's just uh percent
[1:23:34] impervious impervious in our study area so with our final map we're using our random forest classified imagery called
[1:23:42] classified and we're just adding that impervious surface area or imagery and so now we're going to add the final map to the display
[1:23:53] so this is on line 213 so let's uncomment that and we're just again using map dot add
[1:24:01] layer layer and we're adding the final map here and then the dot sld style urban palette that's referring to this
[1:24:10] so in the sld style we are utilizing this for the colors and the quantities that we want to be
[1:24:17] assigned to the colors these land cover classifications are being assigned to these colors which is good practice we're making sure
[1:24:25] are the exact same as what's within our legend and then we are just uh naming it land
[1:24:32] classification similar to how we named our cumberland county imagery copperland color image land art land classification we'll just come up here
[1:24:42] this land classification and so then we're going to center the map for the display and you can do that just by running map
[1:24:51] dot set center and then this is just some it's just a point within the center of our our map just to give us a good
[1:25:01] uh centralized imagery for our final product and then this number 10 here is just the zoom level
[1:25:08] so this will just make sure that we can see it fully you're welcome to change the zoom level and see if you
[1:25:14] like it zoomed in or out better but just automatically setting these things so that the map shows up right away right where you want
[1:25:21] it is a good way to not lose your place when you you're running and printing things things so with all of that being said we can
[1:25:29] now run our map all the way up here and we should be able to see our supervised land cover classification
[1:25:39] it might take a little minute to uh to run everything it's a lot of code going on here so
[1:25:47] and again as we we do rerun everything these these samples and these values are gonna come up again
[1:25:55] so keep that in mind but let me just get a nice good look at our final product here
[1:26:14] almost done loading but as you can see this is our our land cover classification through the random
[1:26:23] forest model thanks to our legend we can tell what each one is classified as i think it's fun if you uh
[1:26:32] actually load the cumberland color image underneath and then you can uh play with this and kind of see how well
[1:26:42] it's actually classifying things feel free to you know zoom in and see how well some parts are being classified i think some
[1:26:50] parts are classifying better than other and it's just a great way again to see how well things
[1:26:56] are being classified and where you should add more training points you know what is it classifying incorrectly
[1:27:02] and how should you you know add a training point there to make sure that it is classifying it correctly you know
[1:27:07] really increase that that overall classification for your model and with that i believe that this section section of the code for supervised land cover
[1:27:20] classification classification of cumberland county maine is complete okay okay and with that being said i will pass it
[1:27:30] on to zach awesome thanks for the excellent demonstration brittany and that concludes our second session in the ge land monitoring series uh here's
[1:27:43] a quick summary of the material we covered in this session we went over some of the basics of land
[1:27:49] classification and accuracy assessment we examined the use of supervised land classifications and how to complete them in ge using machine learning algorithms
[1:28:00] taking a closer look at the decision tree based random forest algorithm and we also went over the use of an error or
[1:28:07] confusion matrix for the accuracy assessment of classifications and in our javascript api activity we completed a supervised land cover
[1:28:16] classification for cumberland county maine maine where we imported and processed landsat 8 surface reflectance data trained the random force classifier
[1:28:25] using reference data points ran the classifier to create our final lan classification map and assess the accuracy of our classifications using an
[1:28:33] air matrix so don't forget to join us for session three next week where we'll take a look
[1:28:40] at ways to use ge for time series analysis and change detection and for those interested in a
[1:28:48] certificate of completion for this series there will be one homework assignment uh that i mentioned a little
[1:28:53] bit earlier in the presentation answers must be submitted via google form which can be accessed from the
[1:28:58] training page on the rset website and the due date uh for the homework assignment is july 14th
[1:29:05] uh this is two weeks after the close of the webinar series and the certificate of completion will be awarded to those who attend all
[1:29:13] of the live webinars and complete the homework assignment by the deadline of july 14th and you'll receive a certificate
[1:29:20] approximately two months after the completion of the course from marines martins and here's our contact info again just
[1:29:30] in case you have any questions about today's session that we don't cover in the q a and we'll also provide links
[1:29:37] and we've also provided links uh to the training page uh the rsat website on our social media and we really encourage you
[1:29:43] to follow us on twitter to stay informed about upcoming trainings and events so thank you all for joining us today
[1:29:51] and we hope you enjoyed the session um and a special thanks to our guest speaker brittany beaudry from the nasa
[1:29:56] develop program um and thank you to john gilder from the spatial informatics group and abigail behrenblit from nasa
[1:30:03] goddard who helped us with the javascript api activity and now we'll go ahead and move right on
[1:30:08] into our q a session all right hello everyone um just give us a second to switch over
[1:30:23] to some screen mirroring let's see all right so hopefully you can see uh my ge code editor how can someone
[1:30:38] just confirm real quick that you can see my screen okay yes we can perfect thank you brittany
[1:30:45] um so we want to first clear up a couple of things um it seems like some of you are really
[1:30:50] following along with us and we really appreciate that um and just as a testament to how closely you were
[1:30:54] following along some of you caught a quick error that we had in one line of our code um that we just wanted to sort
[1:31:00] real quick um and that was in line 30 which i have highlighted here um we had just a quick
[1:31:06] little typo of one of our dates in our image date filtering um i believe it was this section right here
[1:31:14] um we had as uh 20 20 09 30. um it should have been 2019 because we were
[1:31:19] filtering for uh all of the summer months within 2019 um um which is an excellent reminder to just
[1:31:27] go ahead and make sure you check your code multiple times for errors um little things like that can definitely pop up
[1:31:32] um but for the purposes of this um everything that we did uh within the majority of the demonstration and
[1:31:38] everything that brittany showed you should have run just fine your results will just end up being a little bit
[1:31:42] different so if you want to just quickly change that from 2020 to 2019 right here that'll give you the appropriate summer
[1:31:50] aggregation of each of those seasons between the two years and then you should be able to run the
[1:31:54] code again i i quickly reran that just to take a look at our classification map um it looks pretty similar a little bit
[1:32:02] different um and that's just because the pixels that were chosen to do the classification on are different in terms of seasonality
[1:32:09] now um so once you make that quick alteration um everything should have gone as planned and then as another
[1:32:19] uh point to mention some of you noticed that the printed numbers that you had um from things like
[1:32:24] looking at the samples the testing and training data were a little bit different numbers within the training
[1:32:29] overall accuracy the the error matrix information were a little bit different in terms of uh how we aggregated
[1:32:38] those training and testing points if you were noticing different numbers of sample points training points or testing
[1:32:43] points um that's probably because uh as we've done different iterations of practicing for for this session we've
[1:32:49] probably added a couple points in there a few times um you may have also added some of your own points to some of those
[1:32:54] training data um if you were going into uh the map window and adding a couple of vector points in there as well um so if
[1:33:01] you had different numbers there um for samples training testing uh these numbers right here don't worry about
[1:33:07] that that shouldn't have really affected anything anything for you walking through the code with us and then if you're noticing any
[1:33:12] differences in the uh training overall accuracy numbers uh training kappa validation error matrix overall accuracy these numbers here
[1:33:24] that's probably just because when you run it at different times of day or are in different time periods um
[1:33:30] for example we ran it at a different time than you might have um these numbers can vary just because the
[1:33:36] matrices recalculate themselves and sometimes there's variation depending on the iterations of those calculations so you should receive numbers that are
[1:33:45] pretty similar um in this case since i changed that time aggregate here just to the summer months of 2019 um for that line 30 of
[1:33:53] code the validation overall accuracy changed for me um as well as the training overall accuracy and they were
[1:33:59] a little bit higher so if you're seeing variations there any large variations say on the order of uh
[1:34:05] like 90 instead of this like 82 percent might be more cause for concern but if you're getting something within say a
[1:34:11] few percentage points um or something that you could easily round to the same number that we we have
[1:34:17] around 80 percent um you should in theory be fine for those numbers as well all right so i hope that clears up some
[1:34:28] of the the issues that you guys noticed within the code editor um so we'll go ahead and transition over to
[1:34:38] the q a doc and just give me one quick second to go ahead and pass over sharing
[1:34:42] uh back to cell one so you can mirror the q a doc right so go ahead and get situated here to
[1:34:57] answer some of all of your questions as i think jonathan mentioned in the chat we had a pretty large number of
[1:35:04] questions questions so we won't be able to get to all of them today but we'll definitely try to
[1:35:08] go through each of them in the q a doc so that we answer um um all the questions that we're able to in
[1:35:13] the q a doc and then if there's anything that we're not able to get to you you
[1:35:16] all have our emails so please definitely feel free to email us with any questions that we can cover
[1:35:24] so we can go ahead and get started with question one which is how do we know of all the
[1:35:30] built-in functions in google earth engine engine awesome so you can use the docs tab um in the ge javascript api that britney
[1:35:38] showed us again at the beginning of her code demo i mean this tab allows you to click through
[1:35:44] or search all of the functions available in gee and you might also want to reference the api guides uh found here
[1:35:51] by uh by the ge developers on their website and so i've provided a link there for you to take a look at that on
[1:35:57] that docs tab is really helpful for any functions that you're looking for if there's a specific function that you want to do you can
[1:36:02] enter keyword and that will typically point you in the right direction to which function you might want to use
[1:36:10] question two for binary classifications should i provide training samples for both classes so our short answer to this
[1:36:19] is yes we would recommend providing training data for any classes that you would like to identify this just really improves the
[1:36:26] algorithm's ability to differentiate between classes uh making your classifications more accurate so in this case uh you might be interested in only
[1:36:34] identifying one land cover type or even one set of uh plant types like say you're interested in aspen tree stands
[1:36:42] or something like that but we would also recommend that you provide training data for other land classifications uh just
[1:36:48] because that that really improves the ability of that machine learning algorithm to be able to differentiate between pixels i mean it's really kind
[1:36:54] of back to that that same principle of the more training data that you're able to provide typically the better uh the
[1:37:00] machine learning that your algorithm completes will be awesome so for question three would you need to use polygons for
[1:37:11] training data or what sort of format is needed needed so you can either use polygons or points
[1:37:17] for your training data but these geometries just have to have a known land cover type so this is your
[1:37:22] your reference training data where in theory you know exactly what land cover type on the ground exists at
[1:37:28] that point or polygon um so you'll notice that a lot of land classifications use polygons these are a
[1:37:34] really great way um to kind of aggregate pixel information across across an entire subsection of a land class
[1:37:41] within your imagery uh points are sometimes a little bit less commonly used we used them in this case
[1:37:47] because we were interested in that fine differentiation uh between coniferous trees and deciduous trees um and then we
[1:37:55] also had a mixed forest classification so for our purposes using point data was a little bit easier because um given the
[1:38:01] the prevalence of mixed forest in this case and we were able to pick out individual pixels that we could identify
[1:38:07] as solely coniferous solely deciduous um or that mixed forest class so it kind of depends on what you're doing with your
[1:38:13] classification um and what ends up being a little bit easier for your purposes right right let's see
[1:38:34] awesome awesome so question four for supervised classification if we zoom in to look at the pixels many would have an
[1:38:42] overlapping color or some mixed color um how do we ensure that each pixel gets classified correctly into the classes
[1:38:51] so in today's session each pixel is definitively assigned to a specific class um since that's a pixel-based
[1:38:58] classification we're classifying pixel by pixel um so i think if you're referring to uh speckling or pixels of
[1:39:04] different classes being uh grouped together in a way that appears to have too much variation for for say that
[1:39:10] segment of the landscape there are definitely methods to do some smoothing out of classifications to reduce this
[1:39:16] type of speckling uh based off of the distance of pixels to one another um um and so this might be a function that
[1:39:23] you're also familiar with in like a desktop gis platform um basically tying pixels that might have been
[1:39:30] misclassified to nearby land classifications of more pixels i mean we'll try to look up some more methods of this i'm going to include
[1:39:38] some links here after the session and if anybody else has any information on this any of our other
[1:39:45] panelists or organizers definitely feel free to jump in hey hey zach just to tack on to that there is a um unmix
[1:39:59] function function for spectral and mixing where you can pass in members members awesome thanks john perfect perfect so we'll look up a little bit more
[1:40:12] information about that unmixing function and we'll definitely provide it here after the session's over all right question five
[1:40:25] so if you have a large set of files is it possible to upload to ge without having to do each one individually so i
[1:40:31] think it depends on the the type of file that you're looking to upload and how your data is organized within a file
[1:40:37] structure structure but i would say that we usually recommend uploading distinct geometries and image collections separately just because this allows you to share
[1:40:46] them individually and and include them in your script on a case-by-case basis and john i don't know if you have more
[1:40:53] experience with that and would like to comment on that as well okay okay cool so we'll just go ahead and move to
[1:41:06] question six so within landsat data how to how do you set up the date range in google earth engine to compute a
[1:41:14] yearly time series land use land cover map so hopefully address we addressed how some of this works um
[1:41:21] within the code demonstration uh but you can filter date ranges for the landsat data set according to your own
[1:41:28] specifications um so for example um you could create images that average the highest quality pixels for all summer
[1:41:36] months of each year from 2015 to 2020 basically just depends on how you're manipulating that that total image collection of all the
[1:41:44] landsat data that's available to you and you can create create uh date aggregates of um yearly pixel information we typically do
[1:41:53] something like that on us on a seasonal level level um so in this case we used uh summer
[1:41:58] dates and for that you would just want to filter your image collection say say however many number of times it takes you to get each
[1:42:07] of those yearly composites and then map your land cover classifications over each of those distinct years to get a
[1:42:14] time series of land cover awesome awesome so question seven can you explain a little bit more about
[1:42:27] this idea of a black box uh how are the algorithms used unknown to us so i apologize if my description and the
[1:42:34] presentation was a little bit unclear about this um but we do in fact know what the algorithm is um and what it's
[1:42:40] doing doing as we saw in the slides describing how the random force algorithm works uh but we're not able to observe um this going
[1:42:48] on kind of as it's happening um with the algorithm so that basically just means that we're able to observe its
[1:42:54] performance performance by examining the accuracy and thereby success of its outputs so hopefully that clears it up a little bit basically what
[1:43:02] we mean by that black box is that we know what the algorithm itself is doing we just can't necessarily observe it
[1:43:09] doing those things as it's happening and our best way to approximate how successful that algorithm was was to
[1:43:15] take a look at its outputs and assess those for accuracy in question eight which classifier is better to
[1:43:39] identify a single crop for the crop type mapping uh can we follow the same code and same
[1:43:44] methodology given in this webinar or should we consider including different data what are the key points for crop
[1:43:50] type mapping so there isn't necessarily a perfect answer to this question um it really depends on the data that you have
[1:43:56] available for training i mean what statistical approach ends up working best for you so in google earth engine i'm in terms
[1:44:03] of selecting a machine learning algorithm algorithm you could definitely attempt this classification in a few chosen algorithms like
[1:44:12] random forest cart or svm and then assess the accuracy of classifications of each of those and then just end up choosing whichever one
[1:44:20] has the best performance in your case um so you could kind of use the the code that we provided today as a skeleton for
[1:44:28] a crop type land classification map um but you definitely want to change your training data so for something
[1:44:35] where you're looking at crop type mapping you're going to want to have good either ground or really high
[1:44:42] resolution imagery reference data where you can pick out training points that are of different crop types for your
[1:44:48] land cover classifications training data is really what teaches the algorithm algorithm what to classify and how to classify it
[1:44:56] so for instance in the code that we provided today we have a series of landing classifications that wouldn't
[1:45:02] necessarily be very helpful for crop type mapping um so you just want to make sure that you get some
[1:45:07] better reference data for training which will ultimately be more crop focused okay question nine how do we know which type of
[1:45:23] classification is best for a particular area area when would you use the different types of classifiers random forest versus cart
[1:45:30] versus svm and knight bays any reference documents we could further explore on this topic is there a paper
[1:45:36] that assesses the fit for different classification models um so each type of classifier definitely has its own pros and cons um so it's
[1:45:44] definitely on that case-by-case basis that i think we mentioned in the crop example um to know which one to select
[1:45:50] uh this article here takes a look at classifiers in google earth engine and how they classify uh
[1:45:56] multi-temporal satellite imagery for crop mapping um which you might find useful and that's probably also useful for that question
[1:46:03] eight eight um so we definitely recommend taking a look at the literature finding out what the advantages and disadvantages of each
[1:46:10] of uh the classifiers are um you'll you'll likely find a lot of information about random forest it's it's kind of
[1:46:17] one of the more popular algorithms at this moment for land classification um and it's something that is pretty well
[1:46:22] utilized within google earth engine and so definitely take a look at this paper for uh classifier selection
[1:46:38] all right question 10 with the landsat data set how do we set the date range in ge to
[1:46:44] compute a yearly time series land use land cover map so i think this this brings up a good
[1:46:50] distinction as well um when we're doing these land classifications um especially in our case we're typically just mapping land
[1:46:56] cover land use and land cover obviously are typically uh pretty intertwined but for the for our purposes we're really focusing on on
[1:47:05] land cover not necessarily ascribing a specific land use to that um but if you wanted to do this on a
[1:47:12] yearly time series i think i probably answered that sufficiently enough in one of the questions earlier but basically what you would do is you
[1:47:20] just change your image collected collection filtering select some sort of yearly aggregate and then map your land
[1:47:27] cover classification over each of those yearly composite images and you don't necessarily have to create a composite per year if there's a a
[1:47:40] really good image from like a say a single landsat scene that you're interested in you can always use that
[1:47:44] i'm something that's just representative of each year question 11 what are your suggestions to solve the memory limit error when running ensemble
[1:48:00] machine learning algorithms such as ee classifier dot smile gradient tree boost over extensive land areas so working around scaling errors can be
[1:48:09] really difficult but one way is to export the imagery you're using for the algorithm and import it as an earth engine asset i
[1:48:18] mean you can also increase the scale of the machine learning algorithm but keep in mind how that might affect
[1:48:23] your results so something that we've noticed in the past is when say you have a a large
[1:48:29] composite that's taking pixels from a variety of images within a collection sometimes that can cause your um
[1:48:36] um your algorithm run to timeout based off of user memory restrictions um so one way to kind of
[1:48:41] subvert this is to export that composite as say a single image and then you can i believe you can export that
[1:48:49] directly as a google earth engine asset or if you end up downloading it on your computer you can just re-upload it as an
[1:48:54] asset and then see if that helps with the algorithm run you can also ask for more memory from
[1:49:01] the google earth engine developers um but but uh john actually helped us with this in the example that we used for this
[1:49:11] session so john if you have any additional suggestions feel free to chime in uh for dealing with
[1:49:20] memory memory memory errors yeah memory no i think you covered it perfectly so the idea is just to
[1:49:30] export export everything you can prior to running your model um um and additionally if you still get errors while running the model
[1:49:42] you can try just exporting the the exporting the classified image from the model model and then you can view the results that way
[1:49:53] that typically will work work if you get the memory error while you're exporting exporting um um you know
[1:50:02] then you'd have to get kind of clever about it and you might have to export it for a
[1:50:08] smaller area or a tiled um sort of depends on how much data you're putting in and and the complexity there
[1:50:19] okay awesome thanks john all right so question 12 can we tune the models on google earth engine
[1:50:32] engine so there are many options within the ge classifiers that you have to control and change things like scale number of trees for
[1:50:42] random forest variables per split and more of those things can be specified within your code so if you're
[1:50:48] familiar with running a certain machine learning algorithms and you would like to update the specifications of those classifiers and
[1:50:56] that's definitely something that you'll be able to do in google earth engine and if you'll notice within
[1:51:01] the code that we presented today for the random forest classifier um there is the the number 100 in parentheses after we
[1:51:08] ran that classifier oh or maybe 300 because i think i believe we ran 300 decision trees um so that was us
[1:51:14] specifying how many trees the random forest algorithm ran okay question 13 how do we calculate the optimal number
[1:51:27] of training points required for an optimal classification so for this we typically function using the principles that the more training
[1:51:35] data you can provide the algorithms the better and there's not a single guiding principle for the number of training
[1:51:41] points that you definitely need to have and this is what makes accuracy assessment especially valuable in this
[1:51:47] case case so if your overall accuracy ends up lower than say 80 percent uh using testing data that the algorith algorithm
[1:51:54] has not seen before you'll likely want to include more training data i mean also when you're completing this accuracy assessment um
[1:52:02] having somewhere around at least 100 points for testing in your in your accuracy assessment is probably a good
[1:52:07] kind of minimum standard um it's at least the one that we kind of have functioned under recently so that
[1:52:13] accuracy assessment can be a really good guiding metric for deciding if you need more training data within your classification
[1:52:31] okay question 14. so what happens to those pixels that weren't supplied in the training data are they all classified in to a separate
[1:52:40] class or less left unclassified um is there an algorithm that can be used to predict the spectral range beyond the
[1:52:45] training data so i think this is two distinct questions um so for the pixels or well i guess the
[1:52:51] reference data that we withheld as testing data um those points were just withheld so that we could use them later on in our
[1:52:58] accuracy assessment um as for the training data we we left that at the 80 range which trained the
[1:53:09] classifier to classify all of the pixels um so within a classification like this no pixels are left unclassified um and i
[1:53:17] think what you're referring to about the spectral range if there were a pixel that was beyond the spectral range of
[1:53:22] the training data um that pixel would most likely just end up misclassified rather than not classified at all
[1:53:29] um and in terms of the spectral range beyond the training data i believe there are some algorithms that can classify
[1:53:36] beyond beyond um um spectral range of pixels but basically what that's just referring to is that if
[1:53:42] there is say a single outlier pixel that has a spectral range different from all of the reference data um then there's a
[1:53:48] really high likelihood that that pixel is going to be misclassified but i do believe that there are other
[1:53:54] algorithms that can compensate for that issue all right question 15 in the tree uh random force classification
[1:54:11] classification if it completely uses the training data um then how do we test its accuracy do we provide another image nearby data for
[1:54:17] accuracy assessment what do we what if we do not have the reference data um so if possible ground truthing can be a
[1:54:25] really good way to test the accuracy of a classification additionally you can split your training data into two groups for training and
[1:54:32] validation and that's that's kind of what we did in this case um it's up to you to decide how many points
[1:54:39] you want to include in the testing data but typically 10 or 20 of your total amount of reference data is suggested
[1:54:47] um um so in this case uh just to reiterate that the testing data that we was held
[1:54:51] that 20 of our total reference data points um was then used in our accuracy assessment class sorry accuracy
[1:54:58] assessment air matrices um and that's something that you would typically want to do if you don't have
[1:55:03] say a separate set of testing data for accuracy assessment purposes okay question 16 can you pull in data apis or web
[1:55:17] services services or does all of your data need to come from ge's available data library or uploaded directly
[1:55:25] so so our short answer to this is that data just needs to be in google earth engine in some way shape
[1:55:32] or form so whether that's using uh the direct google earth engine data catalog or uploading your uh own data as assets
[1:55:39] into google earth engine um that's kind of of uh the requirement of working with data in google earth engine
[1:55:46] um which is one really nice thing about um kind of the the breadth of google earth engine's data catalog um
[1:55:52] typically if you're if you're using um really commonly used optical data say from like nasa or the european space
[1:55:58] agency you likely won't have to upload your own data assets um since they're available in the google earth engine catalog
[1:56:07] but any data that you do end up wanting to use does need to be loaded into google earth engine
[1:56:12] via that data asset upload okay question 17 what do you mean by for the random forest algorithm training
[1:56:27] data must cover the entire spectral range and how can we ensure that training data covers the entire range
[1:56:33] during image classification so when we're referring to uh spectral range we're talking about the amount of reflectance or the
[1:56:44] brightness of each pixel at various uh bands or wavelengths of light um so say you have i don't know
[1:56:53] maximum value at the green band of uh 1500 in one of your pixels but there's another pixel within your classification
[1:57:02] that has a maximum green value of something like 1750. um then there's a higher likelihood that that pixel say might be misclassified
[1:57:13] because the training data doesn't include um banned information at that spectral range so i hope that that clears that up a
[1:57:21] little bit um and then in terms of how you can ensure that training data covers the entire range during image
[1:57:27] classification um you could always do a quick spectral signature plot of um your data if you wanted to just look
[1:57:36] for minimums and maximums of those of those spectral ranges per band sometimes just looking at the min and
[1:57:42] max information as far as those digital numbers per pixel go can give you enough information about the spectral range to make sure that
[1:57:51] your training data kind of falls within that for all of the pixels within your chosen imagery question 18
[1:58:04] is there any option within ge to evaluate the sample set to have an idea of what samples should
[1:58:10] be kept and which ones should be discarded to improve the classification results results so i'm not sure specifically of this i think it
[1:58:19] would be a similar case in which if you were to plot some of your reference data band information it would
[1:58:25] give you an idea about how it might classify other pixels um um but what i would say for this is that
[1:58:34] one really good way to diminish the influence of outliers and your reference data is to just have more
[1:58:40] reference data which is a reason that i think you'll notice that a lot of people end up having
[1:58:46] say say thousands to tens of thousands of reference points within their classification if it's a large enough
[1:58:51] area um so in this case that would be you collecting enough reference data that you can kind of diminish the
[1:58:59] effect of any outlier there might be another way to do this so if anyone has any suggestions feel free
[1:59:04] to tune in okay let's see so question 19 how are producer accuracy and user accuracy different different so producer accuracy is a measure of how
[1:59:36] often real features on the ground are correctly shown on the classified map or in other words the probability that a
[1:59:44] certain land cover of an area is on the ground is classified as such so that's more of a measure of accuracy of
[1:59:52] your actual classification and then user accuracy is the probability that a pixel labeled as a certain land cover class in the map is
[2:00:01] uh really this class so this is more of a measure of the analyst's accuracy in correctly defining training data points
[2:00:08] so it's just a quick overview of those two definitions of accuracy assessment um that's a little bit beyond
[2:00:15] the scope of of today's training but there are functions for producer and user accuracy in google earth engine if
[2:00:22] you're interested in taking a look at those in question 20 if i want to do a vegetation
[2:00:30] classification classification but i only have the gps location of three species um which are the ones i want to identify
[2:00:38] in all the images is this method the best for doing that so so if you're interested in identifying
[2:00:46] three species of vegetation you might run into some issues at the species level there typically vegetation doesn't distribute
[2:00:54] itself um densely enough for you to say for sure that say a 30 meter landsat pixel is all
[2:01:01] a single species of plant i mean that's kind of one of the difficulties of multi-spectral and uh moderate
[2:01:08] resolution or i guess in this case kind of that medium resolution imagery so you might have some difficulty there
[2:01:14] defining species but if you're looking at something that's more similar to uh uh types of vegetation like we did here
[2:01:21] with coniferous and deciduous trees um then landsat um or something like sentinel 2 could definitely be sufficient for that um so you could try
[2:01:29] this classification um to approximate the types of vegetation that you're seeing um but i would recommend recommend that you have more training points
[2:01:39] because within your question it sounds like you have um only three reference data points potentially potentially um so you would want to just make sure
[2:01:49] that you have enough reference data that you're able to train the algorithm to correctly classify imagery i mean as i kind of mentioned a little
[2:01:55] bit earlier um it definitely helps to have have uh uh reference data for other land cover types even if you're only interested in
[2:02:03] certain certain vegetation types just because this can help the algorithm differentiate better between pixels so for for your purposes you might want
[2:02:14] to take a little bit closer of a look um at vegetation type uh classifications in landsat and sentinel 2 and then maybe
[2:02:22] even see if there's any work being done with say hyperspectral imagery which just has more wavelength information about the
[2:02:28] light being reflected per pixel which can be helpful in differentiating between species within a land classification okay question 21
[2:02:42] is there a way to program a k-fold training validation or other types so let's see so this is a little bit beyond the scope
[2:02:50] of this training but we're going to try to take a look at some resources that might help you with this once the
[2:02:55] session's over um unless anyone else has any any information about this awesome awesome so i know a little bit over time we're
[2:03:06] going to go ahead and try to get to question 30 and then we'll we'll wrap things up
[2:03:11] so question 22 how do i get the shapefile and images in my gee is there a particular projection needed
[2:03:20] so google earth engine does this really nice thing where um it kind of keeps a account of all the projections of
[2:03:25] anything that you've imported into google earth engine um so you likely won't necessarily need to worry about
[2:03:32] say the coordinate projection of the data that you're using that's something that google earth engine tries to take
[2:03:37] into account for you um but for the purposes of getting a shapefile and images into your google earth engine
[2:03:44] under the assets tab you can select the red new button and select what data types you want to upload and just upload
[2:03:51] any assets from there but for the imagery you're using um if that's something available in the google
[2:03:56] earth engine data catalog you can kind of just call that in directly via the code editor or via that search places
[2:04:03] and data sets bar at the top of the screen in the code editor so question 23 have a different validation overall
[2:04:13] accuracy accuracy and validation kappa than what brittany got why is this should we run it multiple times and take the mean
[2:04:20] so it's a really good question as i noted um as you run these at different times you'll typically get a different answer
[2:04:28] and i think that is partially due to um computing on the cloud you have some variation in the amount of computing
[2:04:34] that's going on i mean also the analyses that we're using and there's a little bit of variation as you calculate those
[2:04:40] um um in in different times so say running it multiple times and then taking the mean is definitely something
[2:04:47] that you could do if you wanted to be a little bit more sure about that overall accuracy
[2:04:51] accuracy as well as the kappa value all right question 24 does the impervious surface layer from usgs and lcd cover all parts of the
[2:05:06] world world and how do you change the code to classify in a country such as columbia okay so
[2:05:13] the usgs and lcd data set um covers all 50 states and puerto rico um so it's not within the bounds of of
[2:05:20] columbia we basically just showed you this use of the nlcd as a way to use other layers that say have already
[2:05:29] been classified in google earth engine to your advantage for land classifications so in our case we were
[2:05:34] more interested in classifying vegetation um so we used this nlcd information about urban areas um to kind
[2:05:41] of mask out those urban areas or just map them to the default of the nlcd so that we could focus primarily on on
[2:05:48] different differentiation of vegetated areas areas um so to get your question about changing a classification like the one
[2:05:56] that we did in our demonstration for a country like columbia there's a pretty pretty simple way to do
[2:06:02] this which would be to just collect some reference uh training data for for uh uh urban areas themselves so that's
[2:06:10] something that you can do you can basically just create urban reference data for developed areas um um with that reference data just use it to
[2:06:20] to train your classifier and then you can basically just um have the algorithm do the same thing that it did in this
[2:06:27] case for our forested areas for cultivated areas and for our water areas and so that's kind of a principle of any
[2:06:35] classifier any type of land cover that you're interested in classifying um you really just need to get some reference
[2:06:41] data data training points for that type of land cover and then you can use those to train the classifier to to get any land
[2:06:48] cover types that you might be interested in okay question 25. i've uploaded shapefiles in my asset for
[2:06:59] classification classification but i am getting errors while adding the property so can you tell me how to add
[2:07:05] the property to a feature collection so you might want to just email us really quickly for specific clarification on
[2:07:10] this um but you might want to take a quick look at the ge developer page on feature collections i mean i provided
[2:07:16] the link right there okay question 26 is there any option within ge to evaluate the sample set uh to have an
[2:07:28] idea of what sample should be kept and which one should be discarded oh yeah definitely same question as question 18
[2:07:33] so refer back to that once we upload the q a doc question 27 what would be the best
[2:07:39] method to include very high resolution imagery um for example uav data into this landsat based classification process
[2:07:49] process so i think one thing that you could do with this um since you have very high
[2:07:52] resolution imagery um as you could even use that uav data to create training data points um so you
[2:07:59] could use that uav imagery as a way to define reference data at various locations and coordinates um
[2:08:09] so that you have better training data for your landsat based classification process so it's basically taking the
[2:08:15] information that you have from say that uav data which is really high resolution so you can kind of visually distinguish
[2:08:20] whether something say deciduous trees coniferous trees even more specific vegetation types than that that and then you can use those as your
[2:08:29] reference data points to then train a landsat based classification which you can kind of blow up the landscape level
[2:08:36] of so say you only have uav data points for for um um i don't know 50 square kilometers throughout your
[2:08:44] study area um but your whole study area is something like a thousand to two thousand square kilometers um you could
[2:08:50] use that uav data as a way to kind of blow up uh that information to classify a landsat image um to some of the same
[2:08:57] specifications specifications the only thing you wanna be mindful of is that there's a difference in spatial resolution there so if you are using an
[2:09:04] area that's less than a 30 meter pixel size um as training data um that might end up making your classification of the
[2:09:11] landsat data more difficult okay question 28 why is there overlap in the variables cloud shadow bit mask and cloud bitmask
[2:09:24] so so i think i'm going to go ahead and let brittany answer this one um if she's interested
[2:09:32] hi yeah sure thing um so that's a really fun question uh so the values three and five uh for the
[2:09:40] cloud shadow bit mask and the bit uh cloud spit mask are referring to the pixel qa value
[2:09:49] within uh the landsat uh imagery so pixel qa stands for pixel quality assessment assessment it's uh run through this cf mask
[2:10:02] algorithm uh for all of landsat's data so each pixel is assigned a value based on their contents so values three and
[2:10:09] five are pixels that are identified as having cloud or cloud shadow within them so when we make these
[2:10:17] variables cloud shadow bit mask and clouds fit mask we're kind of isolating the values three and five so that we can
[2:10:24] mask them out um if you want to learn more about the uh the pixel qa values where those come
[2:10:32] from and what the cf mask algorithm really does um the landsat 8 product guide is also linked here in the response but it's
[2:10:40] really cool algorithm if you're into stuff like that so i highly suggest it um i hope that answers the question
[2:10:48] awesome thanks brittany yeah okay question 29 how do you handle shadows in high resolution imagery like naip is it
[2:10:59] possible to complete a land cover classification uh without masking out clouds given that no clouds are used in
[2:11:06] the training data all right so so to answer your your second question first i guess um just because you don't include something
[2:11:16] as a classification doesn't mean that your classifier won't try to classify it so in this case something like say cloud
[2:11:25] shadow if you don't provide training data for that to try to classify it out or if you don't mask it out the
[2:11:31] classifier might accidentally classify those pixels as water or say like a darker vegetation type or impervious surface something
[2:11:39] like that some misclassification that would ultimately end up making your your total classification less accurate so so if you're you're working with high
[2:11:49] resolution imagery really any imagery you would want to make sure that you're masking out those cloud shadows if
[2:11:55] possible i mean if not you want to make sure that you have an appropriate number of training points so that you can
[2:12:02] classify cloud shadows or classify cloud pixels to make sure that those pixels don't end up being misclassified
[2:12:16] okay okay i think for our last question question 30. um i'm going to pass that over to
[2:12:21] brittany but i'll go ahead and read it um not clear why divided by 1 sorry 10 000 in the mask
[2:12:29] can you explain it yeah i'm happy to answer this one as well i think this is referring to um the
[2:12:37] function earlier in the code and um in there it's um referring to well that it happens because uh landsat
[2:12:46] 8 surface reflectance data is distributed as a 16-bit integer they do that just so that it reduces the file
[2:12:55] size um [Music] [Music] so as a result of that you have to kind of unscale these things um by dividing
[2:13:03] by ten thousand i'm it's it's a little more uh into the computer science than i'm sort of an expert in
[2:13:11] but i just know it's it's a best practice uh to make sure that you do um divide by 10 000 when you're working
[2:13:19] with the data in the function it's a pretty common thing to have in that function for the masking purposes um you
[2:13:25] can read more about it again just in the product guide for the landsat 8 collection collection but if anyone else has any you know
[2:13:33] further insights into the 16-bit integer uh uh file size info that would be great but that is the
[2:13:41] extent of my knowledge so i hope that's helpful awesome thanks brittany great so with that i think we'll go
[2:13:52] ahead and cap it at those 30 questions but we're going to go through in this q a doc and and answer some more of your
[2:13:58] questions as well um but if you find that your question didn't make it into the q a doc definitely feel free to
[2:14:03] email us um you have that i think um on a couple of different slides within the presentation um so definitely
[2:14:09] feel free to get in touch with us and thank you all so much for joining and we're looking forward to presenting
[2:14:16] session 3 to you next week
