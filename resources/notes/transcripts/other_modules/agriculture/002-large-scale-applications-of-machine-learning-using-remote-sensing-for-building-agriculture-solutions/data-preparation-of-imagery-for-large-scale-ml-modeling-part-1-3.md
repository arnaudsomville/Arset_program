# Data Preparation of Imagery for Large-Scale ML Modeling, Part 1/3

`https://www.youtube.com/watch?v=wwhb14hDhEQ` · id 172 · 1:47:49 · module 19 — Large Scale Applications of Machine Learning using Remote Sensing for Building Agriculture Solutions

[00:00] welcome to the rset training large-scale applications of machine learning using remote sensing for building agriculture Solutions we're delighted that so many
[00:09] of you are joining us today and wherever you are joining from welcome my name is sea McCartney and I'm an arset trainer
[00:15] based at NASA's Gard space flight center in Green Belt Maryland it's a pleasure to welcome you all to the first part of
[00:21] this three-part webinar series for those that are new to rset trainings the following slides provide a brief overview of the program
[00:30] rset is an acronym which stands for the applied remote sensing training program rset is part of NASA's Earth action
[00:37] capacity building program rset provides accessible relevant and cost-free training on remote sensing satellites sensors methods tools and applications
[00:48] the goal of our trainings is to increase the use of earth science remote sensing and model data in decision-making
[00:55] through training for Professionals in the public and private sector environmental managers and policy makers on the right of the slide you can see
[01:03] the different thematic areas in which we conduct trainings and I hope you would join the list serve to learn more about
[01:08] upcoming trainings as they are offered trainings are offered online and in person and are targeted to beginners
[01:16] and advanced practitioners alike trainings are freely available and conducted either live instructor-led or self-guided such as our fundamental to
[01:26] to remote sensing training since 2009 the program has reached over 100,000 participants from over 170 countries all
[01:35] our trainings are costree with materials offered in bilingual and multilingual languages and are freely available to use and adapt for your curriculum if you
[01:45] use the methods and data presented in our set trainings please acknowledge the NASA applied remote sensing training
[01:51] program and if you want to learn more please visit our website the following slides provide an overview of the three-part webinar
[01:59] series on large- scale applications of machine learning using remote sensing for building agriculture Solutions so why would somebody want to
[02:09] take this training well timely and accurate inseason crop maps at local to Regional scales is crucial for
[02:16] agricultural decision-making and management a regularly spaced time series are common with Optical satellite images training robust models on remote
[02:26] sensing data often requires very large data but but processing and training is complex the cropland data later cropland
[02:34] data layer provided by the United States Department of agricultures National agricultural statistic service only gives estimates of the types of crops
[02:43] released to the public a few months after the end of the growing season and not their sequence or
[02:50] timing by the end of this training participants will be able to use her me recommended techniques to download and
[02:57] process remote sensing data from Sentinel 2 and the cropland data layer at large scale with Cloud tools produce interactive plots of maps
[03:06] tables time series for investigation and verification of data and models filter data from both the measured and Target
[03:13] domains to serve modeling objectives based on quality factors land classification area of Interest overlap and geographical location build training
[03:23] pipelines in tensor Flow To Train machine learning algorithms on large scale remote sensing and geospatial data sets for agricultural monitoring and
[03:31] utilize random sampling techniques to build robustness into a predictive algorithm while avoiding information leakage across training validation and
[03:40] testing testing splits the prerequisites for the three-part training are the fundamentals of remote sensing crop classification with time series part two and you must
[03:51] sign up for the sign up for and access the data bricks Community Edition links to these trainings and how to sign up
[03:58] for the data bricks community Edition are are provided over these 3 weeks from March 5th to March 19th there will be three 1
[04:07] and 1 half hour sessions which will include presentations demonstrations and question and answer sessions all materials code and recordings from each
[04:16] session will be available from the training web page if you not able to attend one part a recording will be made
[04:22] available within 48 Hours of the training day on the ret website homework opens on March 19th and will be due on
[04:30] April 1st if you uh you will be able to access the homework from the training P web page on March 19th a surf
[04:37] certificate of completion will be awarded to those who attend all live sessions and complete the homework assignment before the given due
[04:45] date please put your questions in the questions box and we will address them at the end of the webinar feel free to
[04:51] enter your questions as we go we will try to get to all the questions during the question and answer session after
[04:57] the webinar the remainder of the question will be answered in the Q&A document which will be posted to the
[05:03] training website prior to next week's training it is now my pleasure to introduce the guest Trainers for today's
[05:11] webinar Dr John just and Eric Sorenson Dr just is a principal data scientist at John Deere and an an affiliate assistant
[05:20] professor at Iowa State University in the Agricultural and biosystems engineering department Mr Sorenson is a senior data scientist at John Deere
[05:29] where you utilizes large scale remote sensing data and machine learning to unlock insights and efficiencies for agricultural producers John and Eric
[05:38] over to you thanks Sean uh yes my name is Eric senson I'm a data scient senior data
[05:47] scientist at at John Deere uh I'm happy to kind of present this uh series to you all yeah thank you Sean also uh this is
[05:58] John and we're happy to be part of this uh program and I'm a principal data scientist at John Deere and also an
[06:06] affiliate faculty assistant professor at Iowa State University uh in the Agricultural and engineering department great yep thanks John so with
[06:14] that yeah I'll take it take it away um so part one will be dealing with data preparation of imagery and labels for
[06:22] large scale machine learning modeling some of the part one objectives by the end of part one participants will
[06:29] be able to programmatically submit lists of boundaries to the nas API and retrieve the cropland data layer rasters
[06:35] back subsample and visualize retrieve data from the cropland data layer with interactive spatial images and other statistical plots obtain Sentinel 2
[06:43] raster files for a given area and time frame corresponding to the retrieved CDL data and manipulate the Sentinel two
[06:50] rasers into tables in preparation for analysis and model training as well as verify correct processing of the data
[06:56] via various interactive plots for example we'll be dealing some uh time series of pixels and various land
[07:05] covers so in section one we'll deal with irregularly spaced time series modeling and methods and processes uh to deal
[07:12] with with that so what is regularly space time series modeling when dealing with satellite imagery um it's very common
[07:21] that we'll have irregularly space time series uh data which means that we're not going to have you know one image
[07:28] every five is guaranteed for example um this is common due to multiple reasons such as orbital geometry variations in
[07:36] exact orbit timing and geolocation and image extents as well as atmospheric disturbances due to things like clouds
[07:42] and smoke or other random events that obscure the view of the earth which is what we care about so for example um
[07:49] this plot showcases uh kind of ndvi which is the normalized difference vegetation index um for two fields from
[07:56] Sentinel 2 uh ndvi really just showcases the levels of vegetation amounts and so we can see kind of over the growing
[08:03] season for these two Fields um the vegetation is low when during the bare uh showing bare soil before the crop uh
[08:12] grows uh as the crop grows nvi spikes and then as the crop gets harvested and dries out and DVI goes back down what we
[08:20] can see in this plot is that there's a lot of noise scattered on throughout these images um and these these are
[08:26] often due to things like cloud cover um that add noise and data that we don't want during our modeling
[08:34] process additionally um these two fields are spaced approximately 2 kilometers apart however a has about two times the
[08:43] scene coverage and this is just caused by uh an orbit data overlap and so there's multiple processes and methods
[08:50] that we need to consider um to make this irregularly space time series a little bit more regular to prepare it for
[08:58] modeling so what's the motivation for this example that we'll go over in this training Series so we propose a
[09:06] real-time prediction of the crap land data layer labels as the working example for this tutorial the CD algorithm is
[09:14] already using the same or similar satellite data sources in regularly spacing timing to make predictions and so this is kind of a document and
[09:21] example of success of using a regularly spaced time series modeling for prediction of crop type classifications these labels are readily
[09:30] available via API calls and so we can easily grab them at scale and they're they're freely available the accuracy of
[09:38] this is also well studied and documented and so again we can kind of use this process to to to work with the satellite
[09:44] image and the CDL data and the resulting code from this training is highly transferable to other problems and use
[09:51] cases as well uh by simply just kind of changing out the maybe the CDL algorithm for for a different task and so this
[09:59] should be useful um for these training purposes so a little bit of background um on predicting the Cop Land data layer
[10:08] in real time so according to their FAQs the the CDL program uses medium spatial resolution about 30 meter satellite
[10:16] imagery because it's too costly to use higher resolution satellites to perform crop acreage estimation over large areas
[10:22] um any higher resolution um the data scale grows really really quickly and so it's it's much Fe more feasible to kind
[10:30] of train uh to create cropland data layer predictions at every 30 meters the cropin data layer is also
[10:38] considered confidential and Market sensitive during the growing season and cannot be released until after the official Nas year end area County
[10:45] estimates are published in late January early February following the end of the typical us growing season and so the CD
[10:51] only gives estimates of the types of crops but not their sequence of timing either so for example if we have double
[10:57] crops or two crops grown within the same growing season um the CD will say that the that there was a double cropping
[11:04] that occurs but it won't give the order of of which crop was uh grown first and and
[11:10] and second so our question really is is you know do we really need to wait until the
[11:14] following year for accurate estimates uh for crop type and looking at kind of this example here we're comparing corn
[11:22] and soy time series of of ndvi images again uh it becomes really apparent quickly that from this time series
[11:28] Imager we can be pretty confident in the crop type just from looking at the ndvi in this area um so for example in early
[11:38] May and in June we can quickly see that the ndvi curves diverge between corn and soy and so we can be pretty confident in
[11:46] our model predictions between corn and soy predictions in this case and then especially in late August um as the ndvi
[11:53] growing curves um grow down as the vegetation decreases as the crops dry out and get harvested we can be very
[12:00] very confident about August um in the crop type prediction which is six months prior to when the CDL is typically
[12:07] released so we can really get ahead of a curve here and make these cedl predictions ahead of time um before the
[12:13] official um model is results are released for the year the approach that we teach in this in this series is also very
[12:24] generalizable um so robust models require large scale data management tools and approaches leveraging multi-core multimachine parallel Computing is a very necessary step to to
[12:34] scale up and working with satellite imagery so we demonstrate these tools and approaches with this series and so
[12:40] you should be able to use the same code um and methods to solve any other problem as well with other data sets as
[12:48] well including other satellite images we'll use sentinel 2 for this training series note that a similar approach to
[12:56] crop modeling with the time series imagery could be used for estimating other things as well other than the crop
[13:01] land data layer labels such as things like crop health or other time dependent factors as well I mentioned do double
[13:08] cropping before uh you could use this method to for example predict if a field was double cropped and which crops were
[13:16] were planted and harvested in what order uh so for example we can see in this time series imagery again this is a
[13:22] clear example of double cropping in the in the first part of the year uh winter wheat was harvested it was planted
[13:30] likely in the fall and then harvested around uh May time frame and then right after winter wheat Harvest soybeans were
[13:36] planted and we can see the the growing curve for the soybeans um in this DVI plot and then Additionally the the
[13:42] soybeans were were harvested in the fall um so we can use this exact same method by just to predict double cropping by
[13:49] just simply changing maybe the the the label that we're predicting on on furthermore um there's not many examples
[14:02] of statistical theory around unevenly spaced time series and so there's not much for outof the-box methods to apply
[14:09] directly for these situations the most common solution uh to applying machine learning models on a regularly spaced
[14:16] time series is to manipulate the data into a more regularly spaced time series and then apply more standard machine
[14:22] learning methods so for example interpolation or interval binning is often applied the CDL algorithm actually applies the interval bidding method um
[14:31] and then transs a decision Tree on it note that the resulting data format from this part one demo will support any
[14:39] modeling approach um so we will follow a very similar approach as the CDL does with Bend intervals for parts two and
[14:46] three of this demo for data loaders and model training due to its Simplicity um so then you can train any
[14:52] traditional machine learning model um on this more regularly spaced time series of imagery there are some newer machine learning
[15:00] sequence models such as Transformers um and self atttention uh that accept positional encodings of inputs and outputs and learn meaningful absolute
[15:10] and relative input and output information which could facilitate direct modeling of unevenly spaced satellite data but due to the increased
[15:17] complexity of those uh examples we don't incorporate it in this training series we'll we'll stick with um regularly
[15:24] bending the the irregularly spaced time series and then training a more traditional machine learning model on that
[15:32] that data so that will get into section one of this training Series going into detail on the crop land data
[15:39] layer so the crop land data layer is um a model that is released by the USDA um that predicts the crop types for
[15:51] the contiguous United States and where crops what crops are planted in what locations the best place to find
[15:56] information about this is the US Nas FAQs and the metadata on their site so some relevant info and highlights the
[16:03] model they use is a decision tree classifier it handles missing noncontinuous non-normal nonlinear data um and it's very efficient in its
[16:10] computation it also provides probabilistic output so we can actually provide um confidence bands on how confident the model is in its prediction
[16:22] and we can convert that to a class uh to whichever class the model more confident in will be its ultimate prediction for
[16:30] that location the input to their models they use three different satellite sources uh NASA lands at 8 and nine as
[16:37] well as the IND Indian space research organization uh resource set two at list three as well as the European Stace
[16:45] agency Sentinel 2 and 2B the imagery is downloaded daily with the objective of obtaining at least one
[16:52] Cloud for usable image every two weeks throughout the growing season this strategy is pretty common when working
[16:57] with satellite imagery a strategy of combining multiple different satellite sources as input um as it minimizes the
[17:03] chance of of getting bad pixels or bad images due to things like cloud cover the ground truth used for the
[17:11] model was the FSA common land unit for crops uh and the national land cover database for non-agricultural areas so
[17:19] like cities or urban areas the accuracy of the model is generally 85 to 95% correct for the
[17:25] major crop specific land cover categories and this resol ution is 30 m speaking more on the Kline data layer
[17:35] accuracy as noted earlier the Kling data layer accuracy is well studied and documented belows an excerpt from the
[17:41] USDA quality checks for Arkansas in 2022 additional studies of accuracy can be found at the USDA Nas cropland
[17:49] metadata site some crops for example like sorgum may have very low accuracy but they also represent a tiny
[17:57] proportion of the farm l land so this is something important to note as we're using this to train another model um
[18:05] crops that the more major crop types have more representation and thus the cropland data layer is more accurate to
[18:10] predict them so things like corn cotton rice and soybeans have much higher representation in the data and so the
[18:16] cropland data layer is more accurate to predict on those crop types than say soron which have a very um low
[18:22] representation of total farmland and so it has a much lower accuracy we can see here that for Arkansas in 2020 to the
[18:28] accuracy prct for predicting correctly the sorum crop type is 22% where the other major crop types varies about 85
[18:35] to to 25% and so that's important to keep in mind as you know if you were interested
[18:41] in predicting sorghum for example using prop land data layer as input um you might get lower quality results than if
[18:50] you were trying to predict corn or cotton so now for some content text on some data how how big the data can get
[19:02] for these types of problems and specifically for the crap line data layer if you're going to try to train
[19:07] the cropland data layer on the contiguous United States so even though only about 20% of the United States is
[19:12] specifically used for crop land any given model must run across all the United States area to classify the land
[19:19] so let's make some assumptions here so assume that we use sentinel 2 for land classification at 10 meters resolution
[19:25] and we get one cloud-free image every two weeks that's 12 bands The Sentinel Tu provides us with 12 bands each of them at two
[19:32] bytes uh which is 16 bits per pixel this totals up to about 26 images total per 100 square
[19:40] meters uh this sums up to about 7.5 million square kilometers of of land to process and this equals about 44
[19:49] terabytes of data post-processed to run a predictive model so that's not trivial it's a very large data set although
[19:56] storing this data set um about a 10 terabyte drive costs about $200 in Cloud compute costs so it's you know it's
[20:03] doable um but this is the primary motivation of reducing the resolution as if we reduce the resolution from from 10
[20:10] meters to 30 square meters the data set drops down from 44 terabytes to about five terabytes to work
[20:17] with so if only using Sentinel 2 roughly about 28 terabytes of raster data must be downloaded and processed over that
[20:25] land since Sentinel 2 tiles are about 10 square kilm uh and have 12 bands so this amounts to roughly 640 megabytes per
[20:34] scene that occur every 5 days so that being said this data scales up very very quickly H which forces us to adjust our
[20:42] approaches approaches to work with this data and train models on this data in ways that are efficient
[20:48] and effective so section two we're going to be discussing Sentinel 2 Optical data and um some of this ramifications for
[20:59] using it for predicting the crop L data layer so there are multiple things that can affect both the quality and temporal
[21:07] spacing of satellite data so some example factors impacting kind of the temporal spacing um there's things like
[21:14] orbit path overlap uh which means that as you get closer to the poles you get more increased coverage just due to how
[21:20] the orbits work uh the orbit path and the image capture repeatability there's also some variance in in two passes over
[21:27] the same area just based on um variance in the orbit locations and so the exact position of the images can vary east to
[21:34] west which results in areas on the edges of the scenes to have more uncertainty and and coverage uh thick cloud cover can also
[21:41] occur and obscure the view of the earth uh causing data gaps in coverage and then also the there's
[21:51] something called the scene classification layer uh which identifies if it predicts if a image has significant cloud cover or not often
[22:00] times uh this algorithm has some errors and can be wrong and so when the prediction is wrong say it predicts that
[22:08] there's a cloud here when there's really not or vice versa this can introduce unnecessary gaps in coverage in in the
[22:14] time series of the data there's also factors that affect the quality of the imagery as well so
[22:19] things like thin Cloud Haze um flouds can kind of occur in all different shapes and sizes including kind of a
[22:26] gradient system and so sometimes it's hard to identify when the clouds are very thin as they won't appear as kind
[22:33] of thick objects but it'll just alter the reflectance values uh as they'll be transparent so you can see to the Earth
[22:41] you can see the Earth surface but it will alter kind of the reflectance values that we get back and might not be
[22:46] captured by something like the scene classification classification layer additionally there's tiling system overlap so at the edge of
[22:53] tiles uh and tiles is how the data is stored and queried in senel 2 there's overlap in this system and slight
[23:00] differences between the values of the same scene and location at different tiles due to postprocessing techniques of the data that Sentinel 2
[23:09] provides glocation and G referencing lastly um can also affect the quality of of our data so location of pixels can be
[23:18] incorrect and vary by more than the size of a pixel resulting in wrong information for any given point
[23:25] location so here's one example of what kind of the orbit path overlap uh is for different locations in North America
[23:35] normally uh if there's no cloud cover we'll get a sentinel to uh image every five days however there is overlap
[23:44] between adjacent orbits which increases further from the equator so thus certain parts of the United States on the
[23:50] borders of orbits get up to two times coverage per satellite and results in intervals of two or three days instead
[23:55] of five and this occurs as you get closer to the the Equator so the orbit path repeatability
[24:03] this is one visualization an example of that so even within a distance of one kilometer shown here in the image the
[24:09] same nominal orbit path has several actual orbit path variations which can affect the availability of imagery each
[24:15] of these red lines in this image showcase uh one of the edges of the same orbit path and you can see it varies
[24:22] quite dramatically from orbit to orbit for different dates even across the same 1 kilometer location time span so now we'll discuss a little bit
[24:37] on the ramifications of the tile system which is how Sentinel 2 kind of cuts up its images and locations and cuts up the
[24:43] globe and these different tile sections which which identifies uh how we can find where an image was taken uh on the
[24:53] globe so some considerations to be aware of when we're processing this data using the tile system that these these scenes
[25:00] are captured from Sentinel 2 are processed and made available using this tile system that's a slightly modified
[25:05] version of this military grid reference system the mgrs these tiles can overlap slightly and result in values of the
[25:11] same scene and up to four there's different Geor referencing or calibration for each tiles the band values for the same scene location in
[25:21] different tiles can be slightly different so what can happen is for example if you have four different
[25:26] images all within different tiles a different post-processing can be applied to each of these images which can
[25:32] slightly adjust the image even though it's the same image can slightly adjust it based on which tile it was identified
[25:38] um to be in so this can cause some some noise and duplication of the images in our data set that we'll have to um
[25:47] process to D duplicate um and make it so that we can actually input you know one image per location in the time
[25:56] series lastly the orbit paths and the tiling grid don't line up one to one uh so the
[26:07] Sentinel two scenes are much much larger than tiles uh the swath width of 290 kilometers versus a tile size of about
[26:17] 110 kilometers the overlap at the edges of orbit paths can cover an entire tile at certain latitudes um and so this is
[26:25] relevant when we're talking about kind of the duplication of images and and scene processing per tile um and this is something that we
[26:33] have to take into account as we're processing the data uh for Sentinel 2 so lastly we're going to discuss
[26:42] briefly the scene classification layer or the um this this is another band that's provided uh is part of the
[26:49] metadata layer for Sentinel 2 imagery and it's useful for Rapid identification of data of Interest while it's not a
[26:55] proper land classification uh like the crop land data layer it does facilitate rapid classification of pering pixels into 12
[27:04] categories so some of the most important things that we care about is identification of cloud cover and images
[27:10] so that we can remove them from our time series there is a separate Cloud mask available with
[27:15] probabilities um using the Cent to core algorithm and we'll also use it for identifying pixels that contain
[27:22] vegetation in this demo so theal has a 60 meter resolution using a single Pixel from a single scene
[27:30] for for prediction H however there's something useful to note is that this layer can be error prone um so there was a study done
[27:41] by Holstein atal research paper to showcase the uh error rates for different uh algorithms including fmk C2
[27:53] core and Sentinel Hub C2 core is what we'll be using in this demo um as we we
[27:57] can see there's different classification probabilities between the three s Sentinel Hub actually performs the best for cloud
[28:06] classification um with 99.4% accurate C Core is 97.5% accurate forting accurately clouds um but one thing to
[28:15] note here is that it also has a very high misclassification rate for other classes so things like snow for example
[28:22] uh it has a very high misclassification if there's snow on the ground you know 30% of the time it will classify it as a
[28:29] cloud 39.2% of the time for fask it will classify snows as clouds um so that's just something that can add noise as
[28:38] we're processing this the data and trying to clean it up and remove cloud cover that there can be some
[28:44] mispredictions um using this method that can contribute and add some noise so here's some common issues and
[28:52] limitations um mentioned the geolocation GE referencing of pixels uh and we're showing the default scene classification labels on the right from
[29:02] providers uh this is an example of the layer from Sentinel 2 these aren't always accurate so for example on the
[29:08] left we're showing that there can be inconsistent inconsistent geolocation of about 10 to 15 minute meter disagreement between subsequent
[29:16] images that are 5 days apart you can see that the uh images shift uh about 10 to
[29:21] 15 meters um between these two images and on the right we have por scene classification of an IM
[29:27] that has thin Cirus Cloud covered um this particular example um the can often struggle if the clouds are just thin and
[29:38] wispy I can often it's predicting here that there's you know definitely uh Farmland here but it's predicting it as
[29:45] water cover or snow um or just doesn't know what it is and is misclassifying it as unclassified and so these types of
[29:53] images can add significant noise as well as we're processed the image and trying to clean it up and remove clouds using
[30:00] the band so now into section three we'll talk a little bit about how to actually run this code in data bricks and provide
[30:12] a demo at the end so an overview of the datab bricks Community Edition um datab bricks Community Edition it provides uh a free
[30:24] environment for working within a data braks uh tool the link to instructions for sign up is is listed here you will
[30:32] have to sign it for an account uh to use datab bricks Community Edition it provides Jupiter style jupyter notebook
[30:38] style coding um and allows up to 10 gigabytes persistent storage on what they call their file store where you can
[30:45] store generic files tables and and code uh in their system these notebooks are stored in a separate area called the
[30:52] workspace within data bricks you can spin up small instances with two two CPUs 15 GB of RAM and 130 GB of local
[31:00] storage and these Cloud instances uh Cloud compute instances have spark enabled out of the box and Spark is a well-known cloud computing
[31:11] tool that allows you to work with distributed computing on larger data sets for more efficient workflows anything stored in the local machine is
[31:20] lost when the entrance shuts down so going back to the file store it's very important that after you're done working
[31:26] uh in your jupyter note books or data bricks types notebooks that you store any data that you would like to keep in
[31:32] your next session into the file store else anything stored on the local machine will be shut down when that
[31:37] instance shuts down uh another thing to note is that when you're running these notebooks and any code that takes longer than 60
[31:45] minutes to run will cause the node to shut down automatically it will time out however as long as you're interacting
[31:52] with the notebook you know writing and running code manually it will reset that timer and will the instance will stay up
[31:57] longer so for example if you have a script that takes longer than 1 hour to run it's recommended to go into maybe
[32:04] like another notebook and execute any command to reset that timer countdown um so you have another 60 Minutes to to run
[32:13] any jobs that you're you're doing so we do provide some code and materials for this demo we'll provide a
[32:23] three data processing scripts for part one including CDL acquisition senel acquisition and final data manipulation the code we we uh created
[32:35] it in such a way that it is generalizable to new and other problems so the CDL table could be any ground
[32:41] truth label uh and point location and time frame and the rest of the data acquisition and modeling including the
[32:47] processing of the senel 2 imagery can remain the same so for example if you had labels on crop health or vegetative
[32:52] stage or any other types of land cover classes you could replace the CDL processing with with that to change the
[32:59] the problem structure any systematic error from the CDL will also likely pass the model trained on it we mentioned this before
[33:07] so for example if you were really interested in in training sorgum just know that the CDL you know has a higher
[33:12] error rate for predicting sorghum uh and that airor will pass on to any models trained on these
[33:19] labels to get data as it would exist after running the scripts in this training demonstration you can download
[33:25] the zip files located with other training material for this course and if you want to download any
[33:31] of your files from datab bricks to your local system you can do so by going to the URL and changing this path to the
[33:41] directory path to where your file exists in the file store and then that will download the file from the datab Breck
[33:46] system onto your local machine so high level overview the code steps we'll be taking for processing and
[33:54] storing this data step one will Define areas of Interest or aois step two we require the corresponding CDO data for
[34:00] those aois step three we'll search and filter for available satellite data step four we'll acquire the corresponding
[34:06] satellite data and then in step five we'll rearrange into paret file of a satellite band value data into a single
[34:13] row per pixel location and season with columns for time series components in the form of lists of values so for
[34:19] example all the band values and scene dates will be in the list format uh saved as a parquet file um and this is
[34:26] to support kind of modeling processes that will and the and the pipelines that we'll develop in part two and part
[34:32] three it should note that Park file is a well-known uh file format system for efficiently storing larger uh data sets
[34:43] um that has more support um than say something like a CSV which has very low efficiency for for storing very large
[34:50] amounts of data in this demo we'll also be working with a couple of API so in place of manually retrieving data
[35:00] apis make data acquisition and processing significantly more scalable by providing a consistent interface to search for and retrieve large amounts of
[35:07] data via web requests and so we'll rely on two apis in this demo for data acquisition the first API is the CDL API
[35:14] from nasgo data to get the cdl uh labels and then we'll also use the AWS stack API for Sentinel 2 imagery
[35:23] searches uh The Sentinel 2 image raster data can be download via a web URL download links that we can access
[35:30] directly once we know uh once known from the image research that we'll conduct so since these are large uh they will slow
[35:40] down processing so we'll do our best to minimize the downloading of any Superfluous or low impact scenes as this
[35:45] is the bulk of the data processing um that we'll do in this in this course so the first step I mentioned we
[35:55] have to create an area of Interest or an aoi uh for the areas that we're interested in training the model on so
[36:02] the only prior step is defining these aois we'll we use the nas geodata web guey to draw seven boxes of area of
[36:10] interest that we're interested in and then exported them as e reshaped files then we convert them into bounding
[36:18] boxes using the left bottom right and top latitude and longitude coordinates and then convert it into the epsg 570c
[36:26] coordinate reference system and this is just a requirement by the nas go data API uh we provide these bounds already
[36:34] in the Cal acquisition code so you won't have to necessarily reprocess this um for this course but if you wanted to get
[36:40] you know different area of interests uh you could follow the same process uh to get these bounds so here's an example
[36:47] python code to get the bounds from the the zipped asz re-shaped files from nas geio that we get from the web guei um
[36:54] ultimately what it boils down to is we'll get the list of the file paths for the downloaded shape file boundaries
[36:59] which are zip files we'll read those shape files into a geopandas data frame and then append those data frames to a
[37:06] list so that we end up with a list of GE data frames that contain the shape file
[37:11] information from the zip shape files and then we'll concatenate all of those data frames into one single large ganis data
[37:19] frame that contains all the boundaries of the arrow of interest that we're interested in and convert them into the
[37:25] uh coordinate reference system as specified as necessary by the nasgo API for to prepare for the acquisition of
[37:34] the crap land data layer uh data for those aois so now we'll get into the CDI acquisition code and just a summary um
[37:44] the results of the first part are spatially downsampled version of the CDL for the user specified AOE aois that we
[37:52] just just generated this code part executes pretty rapidly in only a few minutes and results in a parket table with a single
[37:59] 30 m Square pixel a year per row with Associated CDL estimate so for each year that we're interested in and for each of
[38:06] the aois we'll get the crap land data layer predictions from this API this is a kind of a summary table uh
[38:15] of the the data that we get in part one for the from the CDL API uh we can
[38:23] see the top five CDL categories across R all of our areas of interest that we pull as well as the percentage of entire
[38:30] data set per year that each CDL category represents so for example in 2021 the soybeans represented approximately 36.6% of the land cover
[38:41] for that year and we can see stats for the other crop types um for these area of interest and years uh in this table
[38:47] as well so now that we have the CDL labels we can Acquire The Sentinel 2 imagery that we'll use for training to to
[38:56] predict the crap land data layer label so for each of these pixel years from the satellite uh from the crapp data
[39:05] layer acquisition code we will acquire the associated Sentinel 2 data for that entire year and saves the data into a
[39:13] parquet table this part is the bulk of the data processing that will be performed for the series and it takes
[39:21] quite a long time to execute um by a long time mean longer than an hour so note that if you let
[39:30] this running it will time out the free version of data bricks and so to reset that timer you can run manually some
[39:37] code in another notebook just to reset that timer so that this can process in the datab bricks Community Edition
[39:43] without timing out note that um due to the previously discussed tile overlap uh and post-processing techniques that Sentinel
[39:54] 2 um does to the IM imery there will be duplicate images for the same tile and there's an example of this where there's
[40:02] two rows each containing one pixel worth of imagery for aligned with the cpan data layer label um taken on the same
[40:11] date um in the same tile uh it's two images with slightly different values and so we do need to do a strategy um to
[40:21] duplicate the images to reduce the noise in the time series and make it better modeling uh make a better data set clean
[40:30] up the duplications for before we train for for modeling the results here uh results in 123 rows totally total available for
[40:41] this particular pixel and year um each row includes the band values for that location from a single scene and date so
[40:49] the band values there's 12 band values for Sentinel 2 including kind of blue green red red Edge Etc and this contains
[40:57] all of the pixel values that we we could pull from The Sentinel 2 and available from The Sentinel 2 satellite as well as
[41:03] the associated label and so we can use this to uh design our data loader to prepare to use these band values in
[41:13] structure it in a Time series format to then finally predict uh the crop land data layer prediction for this location
[41:19] and and year so we can plot the results of the Sentinel 2 acquisition code um here using the ndvi signature across the
[41:27] growing growing season given this plot we can clearly see that there are errors in the scene classification layer uh that we
[41:35] discussed before so for example um it's there's clearly an ER in classification where it's predicting a topographical
[41:43] castet Shadow which we know in this area this is just Farm fields and there's no topographic things that would cause
[41:50] casted Shadows um so this is likely caused by other things such as like Cloud Shadows or other errors in the
[41:55] system system we can also see the issue of the duplicate data showing up in this time series where these two values are very
[42:02] close together on the same image or the same date um and so we need to handle uh
[42:08] the duplication of values and D duplicate it before we uh plug this data into a model training system and then
[42:16] lastly again um there's error in classification in the in the scene classification layer where it's predicting not vegetated areas where
[42:25] this area is very clearly vegetated using the ndvi um values we can we can clearly see this is vegetated uh date um
[42:34] and so just to note again um there are errors in the that can cause noise even after um processing the data that we
[42:43] will have to to further clean up uh before we enter the model training phase so lastly the last step we do to
[42:53] the data after we acquired the crab land data layer and the uh Sentinel 2 images and the pixels per crop data layer label
[43:04] uh we will finally combine all available scenes into a single Row for each pixel year um so instead of having one row
[43:13] being one pixel uh for one location we will concatenate all of the time series of images into a list of values from the
[43:25] scenes for each row including the band tile image dates and value uh cting them all into to one row and
[43:34] then these list of values are then converted into binary strings for more efficient storage eliminating the list
[43:40] data type and commas for everything except for the tiles column um so we do this so it's more efficiently being
[43:45] stored and this also makes it easier to read in this file uh this data format when we're working with tensorflow data
[43:52] sets in part two so the results of this um um grouping it means for each pixel with
[44:00] 123 scenes we would have 123 123 uh by 12 values in the list in the bands column so 123 dates each date has 12
[44:11] pixel values associated with it and so this will be stored kind of in this bands in byes format and then stored
[44:17] into parket format ready to be injested into a tensorflow data set which we'll do in part two so with that I'll hand over the
[44:25] presentation to John who will give a demo of the code and that can be run in data
[44:31] data breaks thank you Eric so as I jump into the tutorial or the demo part I'd like to first start
[44:40] out just quickly going to the the place where we drew boundaries for this demo to show people what it looks like the
[44:47] links were in the slide here you can come to cropscape and within cropscape you have the option to uh use some of
[44:55] their tools to drop boundaries um certainly this isn't the only way but it was a fast way to do this especially
[45:01] because our data source is coming from the CDL and you can look at the CDL overlaid on the map when you're drawing
[45:09] the boundaries so uh we actually focused on the lower Mississippi Delta for this tutorial because of crop diversity
[45:20] so I'm just zooming in here but it it will refine the resolution as you zoom in in and again you can go in uh you can zoom
[45:29] in as much as you want and draw your boundaries and then uh once you have them drawn there's the options to export
[45:36] them so uh you can see export area of Interest after drawing your boundary and this is this is all we did so uh then
[45:45] you can use the code also to extract them and um just note it's in epsg uh 5070 it's not 4326 which is uh not in
[45:57] other words it's not latitude longitude so all right uh let's move on to data bricks so in data bricks we have the
[46:05] main page you will see when you first get into it uh here it's giving you options to import data create a notebook
[46:14] um they also have a a guide like a a tutorial um it's it's really not a bad
[46:19] idea if you want to go through this really quick to look at this uh in case you uh you know forget what we discuss
[46:26] or you have questions um because we do not do a comprehensive uh discussion around uh data bricks uh itself we we
[46:34] are just trying to show how to use the tool to uh do what we're intending to do
[46:38] but there's more functionality within here than what obviously we are using so uh it's a great tool and we encourage
[46:44] you to explore that um if you are to create a notebook uh it's going to look just like a Jupiter notebook so uh and
[46:51] I'm going to jump in some of the ones we created here and then also uh we we
[46:55] typically don't upload data via this we'll go into catalog and then dbfs which is the uh dbfs is data Brit file
[47:05] system or file storage and so this is the persistent storage it's not on a temporary cluster um also note that if
[47:14] you want to get any work done you're going to need to start up a cluster that again in the quick start guide they'll
[47:20] teach you that but here you can see uh if you come to right here Compu it will
[47:26] take you to this particular look page it should look something like this and within this you can create a a compute
[47:33] and so if I were to do this it will give me the option to uh enter a computer
[47:37] name there's not really much other options you can specify here with the Community Edition so you don't need to
[47:43] worry about configuration too much if you have a uh an actual uh subscription to data bres there there are many
[47:51] options here so all right with that we'll jump into to part one I'm actually going to take you through four well
[47:59] three parts and then a final uh data quality check uh so to speak on on some of our process data um and we'll
[48:09] probably spend most of the time in part one where we acquire the CDL data uh I have a lot of code there to visualize it
[48:17] and then part two uh we'll we'll spend a little bit less time part three even less time and then we'll finalize uh
[48:24] some of the uh this discussion with plots in our quality check scripts so all right with that we'll jump into the
[48:32] first one this I have some notes in here I try to put comments so that you can
[48:36] see uh what each part of the code is doing and uh we also provide some links were relevant so you can go and look for
[48:43] yourself um uh at some of our sources but uh this this really starts out most notebooks are going to start out with
[48:51] some type of uh pip install we're working in Python um and then we'll we'll jump into Imports uh you'll see
[48:59] the Imports for the notebook I try not to or we generally try not to import things down further into the notebooks
[49:06] we try to do all the Imports up top so you see what's needed um just note that
[49:10] you want to run this first because if you don't run this and then you come back and try to run it it will uh kind
[49:17] of restart your notebook you'll lose um you it kind of flushes your memory out so you would lose anything that you
[49:23] loaded uh so with that um we'll have some helper functions here most of these are going to be around um geospatial
[49:31] functions and web requests uh and a couple other things that are useful um from pypar so uh because that's the main
[49:40] uh reason why we're using data bricks here is it supports py spark and it works really well for querying and
[49:47] working with large data tables so I have a few helper fun helper functions I I first specify uh these
[49:54] helper functions are are um needed for uh some of them are needed for visualization some some of them are
[50:00] needed for actually uh getting the data so they're actually querying apis this particular one um I'll just walk you
[50:07] through this I tried to put notes here but things like this which match the color scheme for the CDL allow us to uh
[50:14] make some nice plots later on and so again you can kind of see how we are getting these uh these things we use as
[50:22] much as possible we use functions that can uh just grab data off the web so this is part this particular file comes
[50:27] from nas Geo uh and then as we uh go down here we're going to see uh some
[50:34] helper functions again that this is uh primarily um hitting the uh this is well doing the the majority of the work to
[50:42] get the uh the uh it's doing the query to the API the nasu API for CDL data so
[50:51] when we send a query to it it has certain requirements uh or needs the to see a bounding box and a you know for
[50:58] instance a year um because between those two things you can get CDL data um CDL data is a once per year thing so if I we
[51:08] have some defaults that we put in here so if you just call this you'll get back uh that data in a certain format um of
[51:15] course this this uh we try to put notes it comes back as a as a bunch of bytes
[51:21] um and it's really a tiff file but it's a b bunch of btes so you need to
[51:25] do some conversions there to actually see it as a an image and we'll show how to do that later in this file um or in
[51:32] this notebook uh again these are some helper functions it it may not be clear what these are doing but it it allows
[51:39] some manipulation to the data for plotting uh and sampling um and and again we we try to
[51:46] put some notes this is the helper function such section of the uh the code um as we come down here you know again
[51:53] we try to title these appropriately um this some functions to to plot the data and get statistics um again this is
[52:01] useful for uh quality checking making sure especially if you're trying to train models you want to make sure that
[52:07] you have a a fairly um evenly sampled data set it's not too skewed towards one class uh this is something you're going
[52:15] to want to check as you sample your data um then again some plotting functions uh actually within data bridge
[52:24] data Bridge has some very nice plotting functions um and they actually I believe use plotly which is an interactive tool
[52:31] it's very nice tool in the background for some of their work but uh for spatial plots and some some complex
[52:38] image plots um they don't really have as many uh tools directly so uh we we do create a few different functions in here
[52:46] to help plot some of the images and then this is finally a function to help uh read the uh bytes of
[52:55] of of an image so um if if you have questions on this uh you know you can
[53:01] put them in the chat but this is something that uh we we really feel that it's better to try it out and play
[53:08] around with it um and and maybe get a feel for what it's doing so all right um so moving on down um and I try to put
[53:20] notes that this was primarily for if something was primarily for debugging or getting info so uh here we get into the
[53:29] visualizing uh of the aoi so we've drawn these boundaries we uh actually Define them here I've copied and pasted some of
[53:36] these boundaries um in a certain format these are just the Min match lat Lawns and then we're going to we're going to
[53:43] use those along with um so these are for this bbo uh list and the years are for
[53:49] training data this is for the the test data um we come down here and and I actually called some functions very
[53:58] quickly to view the data to see what's in there so in this case I just used the
[54:02] first boundy and I use the year 2018 and I get some CDL data back and what we do
[54:08] is we look at some BGE plots and and some uh an actual map of that uh and these are all interactive so
[54:17] the functions that the helper functions defined above allow you to create an interactive map uh similar to what you
[54:23] would see on the the the U C website where you have the interactive crop land data layer available so again this is
[54:33] all plotly in the back end but we can see some statistics about what types of crops are in there in this case I'm
[54:38] ignoring anything less than 1% to clean this up and you know we can see there's a quite a diversity here with soybeans
[54:45] rice corn and other things um as we move on down uh again um we kind of look at
[54:52] in this case uh the what I'm calling the test data set where it's a very dense area of various crops um we're getting
[55:00] this for one year 2019 and again I want to look at the the diversity or the distribution of crops here so that when
[55:07] we do test the final model um we know that we're testing it across to broad range of different
[55:12] classes um okay as we move on from there uh what we want to do is we're actually
[55:18] going to end up uh subsampling a lot of our data because these boundaries that we create we want to draw large
[55:23] boundaries to get sampl over a large area but uh if we were to actually densely uh sample that and and acquire
[55:31] Sentinel 2 data for it it would be too much data to work with on data bricks um
[55:36] community so we and and really for most people on their laptops for a demo so we wanted to make that a little bit uh more
[55:43] lightweight even though it will scale the methods here will scale to very large data so in this case um I have a
[55:51] function to sample the roster and we have an interval uh that you can specify how much you sample it by so this will
[55:59] uh generally space it out evenly both um in the horizontal and vertical directions uh so this is just a default
[56:06] interval of three and this is pixels um and then again some supporting functions for that subsampling is uh
[56:17] provided right here so uh here I actually show a plot of what that looks like to subsample and uh the intention
[56:24] here is this may look kind of uh interesting in in terms of how these lines these blot lines are here but what
[56:32] this plot is intending to do is show you how it's been subsampled so if I were to
[56:37] zoom in and it's important to view your data to make sure whatever your code is you think it's doing that it's doing it
[56:42] the way you intend if I zoom in here what we see is that indeed if I've specified an interval of three I see
[56:50] that actually being happening so what I've done here is i' I've B basically blocked out all the pixels that didn't
[56:57] get sampled and the ones that did get sampled are given their you know original CDL value so if I zoom in even
[57:04] further it can be seen very clearly that that subsampling of three pixels was uh uh uh effective at doing what we
[57:12] intended to do so here we have uh one sampled and then two ignored and that's in both the horizontal and vertical
[57:19] Direction um and then of course we can reset the axes on this uh with this so that the nice part about these uh
[57:26] interactive plots is we can kind of zoom in and check things like that um I also zoom in uh on this in a different way I
[57:36] wanted to uh look essentially at the extents of the original data um making sure we were again subsampling correctly
[57:45] over the entire um interval and uh here's here's again an example of that it's just another way to view the above
[57:55] but it was instead focusing on latitud and longitude instead of just the image plot which is why you see it like that
[58:03] so um again this uh this is maybe not so clear what was happening but uh we were
[58:09] trying to view the the aoi the boundary that we drew in latitude longitude and kind of looking at the subsampling over
[58:16] that so that's why it's kind of uh warped like this it's not it's it's in latitude and longitude all right uh now
[58:24] you know we've verified that our functions work and now we want to actually you know scale this so here I I
[58:31] just simply use the function defined above that we know Works to retrieve data over our boundaries and years um
[58:38] this is for the training and test data so uh we get the data this is now a list
[58:43] of bytes now we're going to then uh quickly come down here we don't use this even though this function is available
[58:50] to analyze some of the statistics uh we don't use that but here we can come down and actually plot again uh one area just
[58:58] just the first boundary first year um and what we're doing here is we're actually uh taking this and eventually
[59:06] subsampling to an interval of 10 so I this doesn't have the spacing between it just shows again double-checking that as
[59:14] we expand out our subsampling it's still doing what we intend and it did it it it very coarsely sampled one of these areas
[59:22] um so from there uh we actually end up uh scaling this even more um to uh write this out so uh
[59:33] in this case um again we can see the interval is set to 10 but what we're going to do here is we're going to well
[59:41] the default interval is set to 10 but we're going to essentially run this over all our data now so we've actually got
[59:47] the full rosters available the full by strings of the data but now we need to subsample it and then write it out to
[59:53] tables and so that's what we do here um now we do it with the D with the test
[59:58] data set first that one we densely sample it because it's a very small area um and we want to have some nice plots
[1:00:04] at the end and so we sample that then we uh write the results of that um after we
[1:00:12] well after we sample it um via this function and then we read it back in and make sure that it this is just a check
[1:00:18] to make sure that it wrote properly so we see about 15,000 rows and uh so that that's seems very reasonable um same
[1:00:27] thing here except now we are going to Loop through all the training data and we move to a sample interval of 15 to be
[1:00:34] very coarse because again we want to limit the data significantly over a very large area so we have seven different
[1:00:40] boundaries we Tred to give a very large area and in turn to limit the data we have to subsample um and then finally
[1:00:47] again we read the the uh data that was written out um back in and we do a
[1:00:54] couple pivots on the table to see that the the data looks all right um and that's where we're looking at right now
[1:01:00] again a table uh based on some different uh years and um you know the the crop type and the percentages that were
[1:01:09] available for those uh different classes and if you'd like the nice part about data Brits I'll show this later is that
[1:01:15] you can actually add a visualization if you'd like um and so if you wanted to see a bar plot of some variable or a
[1:01:22] histogram of something um you you could do that uh so as an example if I were to
[1:01:27] drop in a particular uh column it would then try to make a plot of that in this
[1:01:34] case that it's not doing anything but um you would be able to decide how if you play around with this you'll get a
[1:01:40] preview of how it would look if you tried it so um just know it's a nice feature uh in data Brits that you can
[1:01:48] you can utilize all right and then uh so as we move down again some more advanced p and our window functions to view the
[1:01:56] data and that concludes this script so uh at the end we just kind of verify that it processed correctly all right so
[1:02:04] now that data will exist and that data will exist within uh our dbfs system as I mentioned before uh the way I've set
[1:02:12] it up is to uh write out to one of these files so we'd have the dense test as I
[1:02:20] mentioned and then the subsampled CDL for training and validation of models um and so you you will be able to see
[1:02:28] something similar to this if you're in the the data Bridge file store after you run our code it it only takes a few
[1:02:33] minutes to run it's a very quick running code and if you were to dive into here you'll see that actually a park file is
[1:02:39] not a file but a set of folders based on partitions and then you finally have some files way back here that are uh
[1:02:49] what what are the actual parket files and these are Park so um all right so that's part one uh now
[1:02:58] we have our CDL data but we need to get uh satellite imagery associated with that so we moved to the acquisition code
[1:03:04] for that um this is in in increasing complexity there's a also a lot of uh places when you're acquiring Sentinel 2
[1:03:12] Data to possibly make a mistake especially when doing it at scale so uh this code took a lot of time to write um
[1:03:21] it's just a note that you know you may not understand everything that's in this code right away uh because it's quite
[1:03:27] complex and there's subtleties to it that are important to uh just just know that if you change something um it could
[1:03:36] impact your data quality uh there's there's just there's subtle things that can that have have taken a while to work
[1:03:43] out and uh so we provide this to you as is and uh it's it just note that is on
[1:03:49] you to double check that it's doing what you expect it to do uh we believe we worked out most of the bodge but but um
[1:03:56] uh yeah we we want to make sure as a disclaimer you know that hey uh always double check your data after processing
[1:04:02] to make sure it's what you uh think it is so uh as mentioned uh when we start
[1:04:07] this code we're going to uh install different packages and then import the the F the the what we need here um to do
[1:04:16] the processing uh again mostly spatial libraries um we're not doing a lot of plotting in this particular file this is
[1:04:24] just mainly for processing and one thing that I'm going to highlight here is we do multiprocessing we don't use pypar to
[1:04:29] do the processing because uh I found it to be quite um uh unstable for the the goal of when you want to actually
[1:04:38] parallel process uh with very unique functions and that's what we do here so here we just rely on python standard
[1:04:45] multiprocess processing functions um so as we go down here um we do have a couple helper functions that like we did
[1:04:54] in the last file this one particularly deals with the fact that again Nas Geo data that we got um the it
[1:05:03] likes to the the API uh it dealt with 5070 um our bounds therefore are in 50 EPS uh g570 and we want to convert those
[1:05:14] bounds to 4326 when we're uh doing searches this we still use the bounds that we originally defined when we're
[1:05:21] doing the imag res searches instead of the points uh because um just it's a it's a it's a quick way to uh easily do
[1:05:30] our um uh kind of searches for scenes it uh maybe a better way to do this that
[1:05:36] someone could come up with is uh and it wouldn't be too hard to do is to take uh
[1:05:40] The Sentinel 2 tiling system and group all your data ahead of time from the CDL into tiles and then do the processing
[1:05:48] but here we don't do that we just we just use the bounds we originally defined uh to do our image
[1:05:54] researches okay so here's the uh the the actual query function we use this is how we get uh Sentinel 2 Data uh back and
[1:06:05] well in the sense of when we're looking for what's out there so we want to know what's available and we use this stack
[1:06:10] API that's uh essentially at this location right here uh it's provided via AWS um it's open to everyone so you
[1:06:20] don't have to have an AWS account and that's the advantage of Sentinel 2 Data here is is the availability of it these
[1:06:26] are Cloud optimized geotiffs that essentially uh are made available so this this Rec Returns the available Cloud optimized geotiffs and it also
[1:06:36] gives you links to those files so uh the we end up being able to just download them via web request which is a very
[1:06:42] nice feature and it scales very nicely uh so it's open to all um and uh it works really well as
[1:06:51] scale all right um as mentioned we do uh we do kind of Chunk the data in this
[1:06:58] case um by bounding boxes and years uh it just makes it more manageable when we're doing our image researches so
[1:07:05] we're going to have some Target um time frame and when we do an imagery search and some Target area when we do a scene
[1:07:13] uh well imagery or scene search and so the way we've chunked this is Again by the bounding boxes and by the years and
[1:07:19] we've just defined the time frame as being uh from you know the 1st of January to December 31st of a given year
[1:07:26] so if the year is 2019 we uh search for the entire year for the available scenes from Sentinel to and and those are what
[1:07:33] we're in a process um there's some helper functions here uh to to split that that data apart it's it's actually
[1:07:41] it's first getting the data from the CDL paths uh that we just mentioned you know the ones in the data brid file store and
[1:07:49] then we're going to uh split that up and decide how to how to for Loop it all all
[1:07:54] right um moving down uh this is an asset list of what we're going to get from uh
[1:07:59] the uh what we're actually going to download and process uh for files this I got this these are actual these names
[1:08:07] are important to keep uh as they are they are the same strings used by the stat API to uh uh denote their assets um
[1:08:17] and then here uh I put a reference we are not going to process any we're not going to get data for many pixels that
[1:08:25] have uh you know no they're missing data or there's a saturated pixel it's unclassified uh there's High cloud cover
[1:08:34] uh or high probability of cloud cover or if there's snow or ice uh we ignore all those but the rest of these we are going
[1:08:41] to get allow data to come through for all right so uh one note here we made this code efficient so that uh
[1:08:50] again as noted by Eric these clusters will only stay up for a certain amount amount of time um after 60 minutes of
[1:08:56] running a particular uh uh cell the cluster will shut off I do have a cluster on right
[1:09:04] now you can see it's green um you know that that that may shut off earlier if I'm not using anything than an hour but
[1:09:11] if you just strictly are for looping or processing one cell it will shut off after an hour so uh because of that if
[1:09:19] we want to restart this we want to get all our existing data and not reprocess that we want to actually start from
[1:09:24] where we ended so this function allows us to do that and so uh that's there and then um you know a little bit to we want
[1:09:31] to monitor that we're not getting too much data so I have a function to check the data size um again this is really
[1:09:38] focused on uh the I can do I can actually run this right now to see what size the dense data is but this was
[1:09:44] focused on the dense data set so it's only point it's only uh2 gigabytes not too much data um right now from uh the
[1:09:52] actual CDL data uh and this is after having um processed the The Sentinel 2 data for so this is
[1:10:02] this is a uh this is showing what what exists in the file right now because I've already run this code and just note
[1:10:09] that if you were to run this code for the I have two different file paths here if you run it for the train test data um
[1:10:17] you will never be able to finish it and I mean it would take days and days of
[1:10:20] rerunning your script uh because there's so much data but for the test data set because it's small um and that's the one
[1:10:27] I have specified you should in one or two runs be able to complete uh the processing of that data uh within this
[1:10:36] within this scrip so it should be able to acquire all the Sentinel 2 Data available for that particular boundary
[1:10:41] um all right uh as I come down here um we have some uh D duplication of scene
[1:10:48] IDs again it's it's something to uh primarily eliminate um what we believe to be reprocess scenes um so we want to eliminate the
[1:10:59] original one and get the get the most up-to-date one and then finally we get to the the the real meat the real engine
[1:11:06] of this and that's the uh uh the loop to retrieving sample the senal 2 Data um I
[1:11:12] won't go into a ton of detail on this because it's quite complicated uh suffice to note it does rely heavily on
[1:11:20] roster IO um and it is using multiprocessing to to try and move as fast as possible there's only two cores
[1:11:27] on this particular data bir instance if you have a larger machine um because we aren't really relying on spark here you
[1:11:34] should be able to easily uh you know take this code and just change a few file path uh pointers and you know be
[1:11:41] able to run this on your local machine and that's the way we intended it this part that would really be the most
[1:11:46] important part to scaling and where we don't use data bricks or uh we don't use highpark at least can be run on other
[1:11:53] resour sources um so we have one function to sample the geotiffs um and then we have this this other function
[1:12:01] that kind of more generally speaking is helping eliminate um as I mentioned certain bands or certain I shouldn't say
[1:12:08] bands but uh certain classes within the scene classification layer like dense clouds um it's it's uh not even it's for
[1:12:17] scenes that don't have a lot of valid area it's not even bothering with them uh so it does a lot of the work here to
[1:12:24] um again just uh make sure we have a clean data set in the end sample it as
[1:12:30] fast as possible so that we have a highly scalable uh data processing Pipeline and then eventually it writes
[1:12:36] it out uh into the par files so and then this ultimately it it it writes them out
[1:12:43] into certain partitions so that in the end you have one kind of big parket file and you can query that I'll show how to
[1:12:49] do that um in the last step but uh this is is uh this is really intended to
[1:12:55] scale and it and it works very well so um yeah and once you run it you will see
[1:13:00] some output below if you do see errors like this don't worry too much about it generally you'll see it something along
[1:13:07] the lines of it's starting a worker and then it'll tell you the scene that it's processing the idea of the scene it'll
[1:13:12] tell when started and it'll tell you when it finished so you kind of track progress as time goes on um in this
[1:13:18] particular case uh you know I just I actually reran this and started where it left off and it finished up real quickly
[1:13:25] so this is the kind of output you see so all right uh with that after you're done
[1:13:30] with that you will have in your data store or your data Bridge file store you will be able to see something like this
[1:13:39] where we have what I S2 sample that's how I've labeled it and then under here there's a few different files uh we'll
[1:13:47] have the uh the S2 sample this is the training and test data which again um is so B B that you're probably uh not going
[1:13:55] to be able to run it here but we will uh in part two we will upload a zip file
[1:14:01] with all of that we'll make that available to everyone we'll upload the zip file and just unzip it so it's all
[1:14:05] available but the dense one you could probably finish and and if I were to drill into this again we'll see that
[1:14:11] there's a partition on the bounding box and then there's a partition on the year and then there's a partition on the
[1:14:16] tiles and then we get to uh from there um we see here with that uh there's ACH
[1:14:23] scenes available in each of these tiles in this particular case it was uh two different reprocessing of the same tile
[1:14:30] but there shouldn't be much overlap in dates between these two so uh like as an example we wouldn't expect because 1112
[1:14:38] was one of the reprocess dates we won't see that available here so it's D duplicated duplicated that okay all right moving on to part
[1:14:47] three um and this is the final step in the processing the intention of this is really not to we don't get any more data
[1:14:56] at this point we just manipulate it so that it's it's it's friendly for modeling so we're moving it into more of
[1:15:02] a Time series format as we mentioned we're dealing with a regularly spaced time series so because of that there's
[1:15:07] an uncertain amount of uh available imagery for each pixel location that that we have from the CDL each year um
[1:15:16] and so we need something that's very flexible uh according to that and and most of the time that's something like a
[1:15:22] list um so we we do utilize list to a point but we actually end up converting to by strings ultimately um and that
[1:15:30] ends up being the the format that we use so if I scroll down here this particular part that's that's uh commented out will
[1:15:39] become useful in part two when we actually extract the uh Trin and test data and uh well if if we want to do
[1:15:48] that we need to unzip it and so um we'll provide zip files but we also provide code to unzip files uh so that that's
[1:15:58] commented out but it's available here and then we have um as typical the import functions and then moving right
[1:16:05] into this it's a very it's I mean really we jump right into the the the meat of
[1:16:10] this code that this is a very complicated piece of code uh again it's really not something um you should touch
[1:16:17] until you're really comfortable with it but there's certain parts that you I mean you could probably add some things
[1:16:23] in if you once you understand it but it does it does quite a bit and it's really
[1:16:28] it's using functions that are um not what what are typically seen in Python they're uh they're py spark specific
[1:16:36] things like create map array um and and so we're ultimately I'll walk you through what we're doing but what this
[1:16:43] code does is it first uh it first pulls all the bands for uh any given pixel location or well for any given row it
[1:16:52] pulls pull all the bands from that row into a single column array so each row currently um from step two each row is
[1:17:01] just a single Pixel on a single date where we sampled a a scene and so we'll have 12 band values we'll have a scene
[1:17:10] classification value for that we'll have also um some type of you know CDL label and an image date things like this so
[1:17:19] what we do is we got to pull all those band values together uh we got a group
[1:17:23] together into a single um list or or array uh so that's that's for one date um after that we also create a
[1:17:32] dictionary so we have an image date and then the array of band values uh bands 1 through 12 uh and the scene
[1:17:38] classification layer available for that so that's what that's doing it's it's just Crea a dictionary so that's step
[1:17:45] two step three now we need to start moving towards uh some type of Time series format because that's only we
[1:17:53] only right now have it as a single date we need to have each row contain multiple dates and and therefore uh
[1:18:03] essentially we have a lot of data if we're talking about an entire year oftentimes that could that could mean
[1:18:09] you know 40 uh 50 different um uh actual scenes that were're sampled from um depending on what was blocking it or
[1:18:20] where it was located if there was overlap with another satellite pass but we need to group that all into one
[1:18:26] single row and so uh the bands are all grouped into one column so it's essentially a list of lists so each as
[1:18:33] mentioned we're going to eventually end up with something that um each subl list is 12 bands and then the entire list is
[1:18:42] you know the different scenes and so uh then we'll have image dates associated with each of those um those those
[1:18:50] sublists tiles Etc um we also made sure to sort those in ascending order so that we it's it's a
[1:18:58] Time series otherwise if we don't have that order um the what we're intending to do with time series modeling would uh
[1:19:06] be more difficult so and essentially we don't get to take advantage of the the time series structure so that's one
[1:19:13] thing that happens here as well and again it's a bit complicated how that happens but we end up sorting based on
[1:19:19] the image dates and then using the indices of that sort to to sort all the other data like the bands and the tiles
[1:19:26] and things like this um and then and then finally uh we look to convert these into more standard formats lists are a
[1:19:35] very uh unusual format to store data uh at scale in so we move them to by strings for more efficient storage and
[1:19:43] uh standard loading by data loaders uh wherever possible and then we write to par and uh that's that's essentially
[1:19:50] what this code does is I'm just scrolling down to show you what's in here but just note um that it's it's not
[1:19:57] necessarily going to be entirely obvious uh outside of the comments for for many of you and don't feel too intimidated by
[1:20:04] this the code has been tested to run um it works really well it's very robust and I I don't see a lot of problems from
[1:20:11] this um and just note it's not really adding anything new to the data it's simply just reformatting it for modeling
[1:20:18] later um so uh essentially that's the function to do all the work and then down here we have uh you know where
[1:20:25] where the just simply we're we're dealing with loops of data so we're We're looping through in this case again
[1:20:32] the different bounding boxes and years for the training data set um and there's only one bounding box and year for the
[1:20:38] test data set so um and then finally so we get to we go down here we we uh we do
[1:20:44] eliminate any uh existing um uh partitions from reprocessing again uh in in case we need in case you were
[1:20:53] restarting the script because it took too long and then there's just a for Loop to run the code so again we're just
[1:20:59] calling that function with uh some very simple input and output um lynchs and then a a file so or or a partition I
[1:21:10] should say all right so that's that uh now after you've run all this um you will have something in your uh data
[1:21:21] Bridge file store that looks something like I'll show you the output of the final it'll be something like this so we
[1:21:31] have seven different bounding boxes within each of these bounding boxes there'll be different years available um in this case I think I didn't run this
[1:21:39] all the way through so you'll see some of these only have two years but we actually have three years uh in in the
[1:21:46] final zip file uh for all of these uh because this is the training data set so as we go through the partitions we have
[1:21:51] Bounty botch year here and then we we don't have CDL as a partition in the final one this this is how we did it
[1:21:57] this is an earlier one so you will see at this point you will actually see uh the the data not the CDL as a as a
[1:22:06] partition so um but you will have something like that and again that's that's in a format where for part two we
[1:22:13] can show you how to how to create data loaders that are going to take advantage of the time series format then so all
[1:22:20] right and then I wanted to show fin what you can do uh to view this and again
[1:22:25] this leverages some of the strengths of data bricks it it has some very nice uh abilities to query the data and also
[1:22:32] plot it with interactive plots right in the uh the the the gooier itself so uh typical Imports um here uh at the top
[1:22:43] and then again we'll make this code available to everyone but to show you what it does um we want to mainly Focus
[1:22:49] right now on the processing after part two part I just as I mentioned part three um has the exact same data just in
[1:22:56] a different format so we could write a few different uh uh uh functions to do the same thing we're going to do here um
[1:23:06] with the part two data it's just a different a couple different functions uh to view the data so first we read in
[1:23:13] the data um when you do read in the data it looks something like this and I'll run this because uh it'll keep my
[1:23:19] cluster alive and hopefully during this live demo works but if I run this it doesn't take too long usually uh you'll
[1:23:26] see the spark job run and the nice part about spark is you kind of see here how
[1:23:30] long it took me to run each part of my code so uh we load the dense D the dense
[1:23:35] test data and this is again this is the output from part two and so now I have
[1:23:40] this if I wanted to I have a function here also to convert to ndvi because it's a nice way to view uh so we
[1:23:48] actually add a column for ndvi so um but uh one function you're going to want to know really well is just the display
[1:23:54] function so you can display that particular paret file that you just loaded so when I run this it's actually
[1:24:01] going to I'm not going to run it here it just it takes like 30 seconds but um
[1:24:05] what you're going to see is output is a table just like this and so uh it'll plot up to a certain number of rows
[1:24:11] depends on how many columns you have to here it plotted 10,000 rows um but you can kind of scroll across and look at
[1:24:17] your data and actually you can sort it by whatever you want to sort it by too so if I want to sort the column I can
[1:24:24] sort it ascending or descending um you know there's there's all sorts of things you can do in this case uh I believe
[1:24:30] it's probably the first 10,000 rows are all from the the same date uh in this case so we're not really seeing a
[1:24:38] difference um you could sort it by CDL um so in this case you know we could see
[1:24:46] again we could see the data however we want to see it I guess um we could sort
[1:24:50] it by lat laon Etc all right so uh as you can see this as and as we saw
[1:24:55] earlier the the test data set actually has a lot of different prop types in it so um we're going to take this and we're
[1:25:03] going to view some of these we're going to pick these are actually um you know each of these is a specific date and a
[1:25:10] specific pixel but what we want to view is I actually so this particular pixel this is the center point of a CDL pixel
[1:25:18] I want to see all the data I want to see all the data from one of these pixels I
[1:25:23] don't want to just see one I just I don't want to see a table of band values
[1:25:26] I want to see a Time series of maybe ndvi so what I do is I use this ndvi
[1:25:31] function up here and I have a function down here to display the table of data for one pixel so I picked out one pixel
[1:25:40] in this case it was one that was cotton and so what I did was I st I took the
[1:25:46] original data frame and I used aware and Weare is essentially a filter so I'm filtering for primarily this
[1:25:54] pixel now likely I don't need to add in in this case actually I wouldn't I wouldn't need to add in these other
[1:26:01] factors like it's cotton and it's you know this year I put these here just to you know for a reminder but because this
[1:26:08] is only one year and because the this pixel is unique um you're going to get the same results if you had that just
[1:26:15] that pixel and then at the end I do a dowith column which essentially adds a column on the end where I can also run a
[1:26:22] function on each of the rows and so this function is that ndvi function and we call this a UDF a userdefined function
[1:26:30] in P spark and this will this will create uh ndvi values and so that's what we have now I'm just viewing this single
[1:26:38] Pixel I have 37 rows so I had 37 scenes unique scenes that I sampled from on unique dates uh for this particular uh
[1:26:48] pixel and you can kind of sort by date here and um then we can see how this how
[1:26:53] this looks as we go down here and the at the very end I have my additional column
[1:26:57] and DVI that I can view now the nice part is I don't have to create a a
[1:27:02] visualization from code I can actually just uh add one and I did that already right here but I'll show you how that
[1:27:09] works again just by if I take this I can just click on visualization and I can click on the type of visualization I
[1:27:16] want to use so I could go to scatter plot I could choose that I want to actually plot by scene date and then for
[1:27:21] the column on why I want I want ndvi and here we can see it actually generates that plot for me as a preview um now it
[1:27:30] it laps something that I want and I want to color by this scene I want to actually color it by the scene
[1:27:34] classification layer and that's the group by column so once I do that I just save this and it adds that column in or
[1:27:41] that visualization in and it's interactive again you can highlight it and it'll show you the value the date
[1:27:47] you know stuff like that you can zoom in if you'd like or or whatever but uh that's it's as easy as that to create
[1:27:53] plots in data bricks all right so this is also allowing us to confirm that our data was
[1:28:01] processed correctly so as I look at you don't know this from this dot here but uh if we were to go back to part uh two
[1:28:09] and we were to look at some of the scene classification values we'd see that a value of five is not vegetated a
[1:28:17] value of four is vegetated so if I go here and look at this well I see just
[1:28:22] what I would expect a value of four if I select this uh off it'll it'll remove it
[1:28:28] but I see right here around July that we start to see vegetation forming and for this particular crop it's actually
[1:28:35] cotton that seems about right for that area and then it's unvegetated outside of that there's a few others these blue
[1:28:41] ones are actually the Cirrus layer cirrus cloud classification um so it's it's a quick way to verify that
[1:28:48] everything looks properly processed at the end you know we see what we would expect to see with an ndvi curve uh the
[1:28:56] scene classification layer seems to be correct you know labeling as vegetation when we see the peak in N DVI uh that
[1:29:03] all makes sense so let's move down and do that again I picked out another pixel in this case a rice one uh to confirm
[1:29:10] that and this is this is the visual that I got out of that so um again a very
[1:29:15] very a very clean very nice uh Trend in ndvi over the entire year and we can see
[1:29:21] these are probably just a single crop grown in each of these cases um in this case you know again vegetation the
[1:29:28] colors are different but you can see for for class 4 the veget it's vegetation it peeps right here in the middle of the
[1:29:35] year uh middle of the summer when we would expect the crop to be growing and it's labeled as rice and that's what we
[1:29:41] expect now we took a there was actually a double crop within the the test um data so I wanted to view that as well
[1:29:47] see what a pixel of that looks like and uh it again just as we would expect effect so earlier in the year this is
[1:29:54] this is going to be the winter wheat crop uh and we see that the vegetation Peaks it's labeled as such and then it
[1:30:00] actually we see that it it must have been harvested and then there's a very low low point where in the ndvi where
[1:30:07] it's also classified without vegetation which then Peaks again when the soybeans are at full growth so and this is
[1:30:14] labeled as winter Wheats and soybean and then finally uh you know I use a a uh a
[1:30:20] soybean one well I don't think I have a corn one as well um but again double-checking all these you know again
[1:30:26] we're seeing the the peak we're seeing it labeled properly um with a few scattered clouds um you know these are
[1:30:34] labeled as uh light clouds or cirrus clouds uh for each of these so this is a corn pixel and this is a a soing pixel
[1:30:41] so again just some different visualizations that are possible um and and you can do many other types of
[1:30:46] visualizations as well to double check the data but this this shows that you know we have our data formatted in a way
[1:30:52] that's ready for time series modeling where we can start doing crop predictions um but the next step will be
[1:30:59] to get these formatted for a data loader uh or or to to you to to basically pull
[1:31:05] these into a data loader um and and prepare them for modeling and so uh that will be part two of this series um so
[1:31:14] this concludes uh the demo part though and uh uh yeah so let me know if you have any questions in the chat but uh we
[1:31:21] appreciate you uh tuning in thank you Eric so for the summary of part one uh we covered how apis can allow us
[1:31:34] to automate and scale very large data processing pipelines in preparation for analysis and model building we covered
[1:31:40] how storing data in parquet format and using spark and data bricks to query and pivot or manipulate the data enables
[1:31:46] rapid investigation and transformation the parket file format also has useful abstraction like partitions which are also directories
[1:31:53] which help us uh process the data in a more efficient manner and a convenient form for modeling time series imagery data
[1:32:00] involves storing in parquet table format with each row representing a pixel for a given time interval and having Columns
[1:32:06] of band values scene dates scene classification values over that time interval and scalers for latitude and longitude representing the center point
[1:32:14] of the pixel which could be substituted for any other goo referencing system like uber H3 hex or Google S2 cells
[1:32:22] instead as well as lastly but most importantly the prediction Target which is what the model will use to to inform
[1:32:30] its learning processes so looking ahead to part two we will process the data to prepare for model training using tensorflow data
[1:32:39] sets we'll prop properly split the data into train valve test splits to avoid data leakage we'll convert the regularly
[1:32:45] space time series imagery into bucketed time series to prepare for model training and we'll modify the CDL label
[1:32:51] to align with our training goals thank you for joining us today Eric and John thank you for the
[1:32:59] wonderful presentation and demonstration before we transition to the Q&A session I want to remind you there will be one
[1:33:05] homework assignment which you will be able to access from the training page on March 19th answers must be submitted by
[1:33:11] Google form with a due date of April 1st to receive a certificate of completion you must attend all three live webinars
[1:33:19] complete the homework assignment by the deadline deadline and you will receive a certificate via email approximately 2 months after
[1:33:26] completion of the course below is the contact information for Dr John just and Eric soron along with links to the rset website and
[1:33:35] social media if you enjoyed today's webinar we hope you will sign up on the rset L serve to receive notifications of
[1:33:41] future trainings and follow us on Twitter for other relevant announcements pertaining to Nas's Earth Sciences we will now transition to the
[1:33:49] question and answer portion of today's training training please answer your questions in the question and answer box and we will get
[1:33:55] to them in the order that they were received we will post the question and answer document to the training web page
[1:34:00] before the start of next week's training thank you okay hello yes John we can hear you uh
[1:34:18] wonderful looks like Natasha is bringing up the Q&A doc great thank you so much and for everybody that's been submitting
[1:34:23] questions really great questions have come in so thank you to everybody that has posted them again it's not too late
[1:34:28] uh please do enter them in the Q&A box and we'll get to them in the limited time that we do have available so
[1:34:33] jumping right into it question one is there any statistical analysis between interval grouping and interpolation I mean why exactly is interval grouping
[1:34:41] used in the CDL algorithm okay so I tackled this one uh this is John the interview uh the interval grouping we
[1:34:48] used is just simpler it's easier it doesn't require additional assumptions of of smoothing that you need for
[1:34:52] interpolation and also that's the method used by the CDL so we just went with it um you know if you wanted to uh go go
[1:34:59] forward with um some type of interpolation you could great thanks John question number two for the CDL model why is the
[1:35:08] accuracy changing from 85% to 95% if I can take this one um this is Eric um so yeah the accuracy of the CDL
[1:35:16] differs between different crop types um there's many different crop types that CDL predicts makes on and each of those
[1:35:22] predictions have varying accuracy um specifically generally the more common crop it's has a higher accuracy rate like corn and soy beans but it's less
[1:35:32] accurate on the more Uncommon crops like sorghum um there's also uh there's a link posted here that kind of discusses
[1:35:40] um some of the different metrics including that user versus producer accuracy which is um related to the
[1:35:46] common labels um and how that impacts the the accuracy awesome thanks Eric question number three in machine learning working
[1:35:55] with satellite data which will be the minimum amount of images that you need for the model I also answered this one um so I
[1:36:03] would say that the number of images um or the time series uh that you need varies depending on kind of your use
[1:36:10] case and the complexity of the task uh for the for the model um for our task in
[1:36:15] this training series of predicting the CDL in real time uh we included about 80,000 time series of pixels with an
[1:36:22] average of approximately 60 60 pixels per time series um for the training set um which seemed to work quite well and
[1:36:30] we'll get into some of these details um in part two awesome thank you Eric question number four why not use radar synthetic
[1:36:40] synthetic aperture radar sensors with 12 bands of Sentinel 1A to improve accuracy and overcome the factors that can affect
[1:36:48] the quality of satellite images yeah that's a good question so I I answered this and really you could do you could
[1:36:54] definitely do that you could combine SAR with Optical and uh you could improve your temporal resolution and you might
[1:37:00] even be able to I mean hopefully get more accurate results uh on your detection of crop types um however it's
[1:37:08] it's more complex and this is already as you guys probably have seen it's it's some fairly complex code and we wanted
[1:37:14] to really try to pick a narrow scope so we just wanted to use um just uh senel
[1:37:21] Sentinel 2 for that reason also Sentinel 2 is available free at Large Scale um so if we tried to use other data sources it
[1:37:28] could get very complex pulling from different sources then trying to combine them and model them so we wanted to
[1:37:33] provide a minimally useful uh example here all right thank you John question five what would be the Sentinel 2 image
[1:37:43] quality if we would apply Cloud masking between the scam classification layer and the quality assurance 60 bands yeah
[1:37:49] I don't I don't expect this to change uh the the quality of the detection of clouds a whole lot um really I think
[1:37:56] from what I know about the QA 60 it's it's just a the kind of the same version
[1:38:00] of the but applied to the level onec the top of atmosphere processing so I wouldn't expect much difference there
[1:38:07] now if you're using a different Cloud detection algorithm like what they have on Sentinel Hub uh you might get better
[1:38:15] results all right thank you John question six what analysis do you use to convert gaps due to seen classification
[1:38:22] layer errors into appropriate values such as missing value imputation yeah that's a great question I'm kind of looking ahead here um to uh
[1:38:31] probably have to solve in in the next Parts um but the strategy that we did as we actually didn't impute any missing
[1:38:38] values uh due to things like errors or clouds but rather we'll we'll pad the missing values in the time series with a
[1:38:45] constant value um which when we go to part three um and implementing this in data loader when we actually train this
[1:38:51] in with a CNN uh the CNN is kind of basically telling the CNN to impute the values Force implicitly during his
[1:38:58] training process so um and again we'll get into more of these details in in the next two
[1:39:03] parts great thanks Eric question seven what do we need to create a crop data layer for Morocco like the one in the US
[1:39:11] yeah these are some great questions and you know whether you're talking about Europe or Morocco or wherever you're
[1:39:15] from if you want to do this for your area one way you could do this that we
[1:39:20] recommend is to Simply do what you're what we're doing here train your model on the US uh CDL data but maybe sample
[1:39:26] the CDL so that it's more uh you know uh uh formed around the type of crops you
[1:39:32] have in your area whether that's Morocco or Europe and then so you get this this model trained on on on that type of crop
[1:39:39] and then try try predicting on your area so pick out some area aois from Morocco or Europe or wherever you're from and um
[1:39:47] go you know run this run the part two Sentinel uh process processing uh script get the get the data and then run part
[1:39:54] three and manipulate it um and then and then predict on it and see how it does and if it looks like it's reasonable
[1:40:00] maybe you're done if it doesn't you might just need to find tune but you'll need a lot less data to find tune than
[1:40:04] you would if you tried to train from scratch for your area great John and this one is very
[1:40:10] much uh kind of falls on the heels that last question is uh please how can I download the cropland data layer plots
[1:40:15] and what kind of code should I use to have them them yeah and uh oh great question yeah so um
[1:40:25] the let's see so the actual plots are I I don't know if this is referring to the
[1:40:32] plots in the in data bricks um or if this is referring to uh uh the the the
[1:40:38] actual data the CDL data but um we do have like within the script uh basically the first script that's where uh we we
[1:40:47] actually obtain all the CDL data it only takes about 5 minutes to to run and so if you run that um it's it's really you
[1:40:55] don't have to change anything it will get all the data for the area of Interest we've pre-selected for you and
[1:41:00] then you know you can start you know running the plots you could take some screenshots of them you could download
[1:41:05] them uh directly from data bricks um but uh that's hopefully that answers your question great and question nine uh is
[1:41:16] the is hierarchical data format version five also a common file format used in remote remote sensing yep good question um I I'm not
[1:41:27] sure if it's a necessarily a common file format specifically for remote sensing but certainly um when you're working
[1:41:32] with large data and distributed cloud computing um hdf hdf5 and park files are are very common when working um with
[1:41:43] this type of data um so it can certainly be used for remote sensing data like we do in in this training um
[1:41:51] and yeah it works very well great thanks Eric and I will say that yes NASA does distribute a lot of
[1:41:59] uh a lot of different data products in hdf5 so that that is quite common fire format for for NASA and question 10 can
[1:42:06] we use xarray to make a process easier to handle yeah I'm sure and if you liked other functions in Python besides roster
[1:42:13] IO like xarray sure I'm sure that you could probably substitute uh for that all I would recommend is like uh you
[1:42:20] know just compare to the original function so you know run the same exact data through the the original um make
[1:42:27] whatever modifications you want with x-ray or whatever functions you like um you know run it again get the data out
[1:42:33] and and make sure that it matches what you you know the the original the original original output great thanks John question 11 can
[1:42:41] I run the code on Google collab yeah this should be possible as long as you kind of have uh spark
[1:42:47] installed you get spark installed on your Google collab instance or whoever environment that you're running in um I
[1:42:54] will note that if you just use these python files directly in Google cab it won't likely work without making some
[1:43:00] changes uh the biggest change is likely um the file path for where you store the data U most the files uh paths that we
[1:43:08] work with in datab bricks uses the datab brick file store which um is not going to be available in Google clab so those
[1:43:14] those will need to be changed um but yeah this this code that we generated is is generalizable to the computer
[1:43:20] environment that you're using as long as you can get spark installed great thanks Eric and questions uh 12 uh is very similar to
[1:43:29] question seven uh it's can I try on other areas of interest that are not within the United States yep and it's
[1:43:36] very similar to question 14 as well I know there's a lot of questions on this yes this is very very much intended to
[1:43:41] be applicable to other areas um we really intended for you to to try this out on the CDL in the US get a feel for
[1:43:48] how it looks uh to try and build a model at at very large scale um on on
[1:43:54] predicting crop type and then you know you can you can apply it to your area so that as I mentioned before that could
[1:44:00] prob that could be just that you you pick out crops from the CDL that um you know are simply uh you know matching the
[1:44:08] crop distribution in your area and then and then once you have a model trained for those crops you can apply it uh to
[1:44:16] areas you know that you you know from your country or your region great thanks John and I think uh just
[1:44:23] trying to be respectful of everybody's time uh maybe we'll end it on this question here so question 13 uh do we
[1:44:28] resample Sentinel 2 Data to 30 meter spatial resolution anywhere in the code yeah that's another good question if it
[1:44:35] wasn't clear we we are not like actually resampling what we are doing is we're just sampling The rosters so we're we're
[1:44:41] trying to move from roster format a spatial format into a a tabular format because it's easier to work with so each
[1:44:48] each row of the pixel of or each row of the table eventually finally the output of part three ends up being um like a a
[1:44:56] single CDL pixel for a single year so it's kind of a 30 meter area that that represents and then we have a Time
[1:45:03] series of imagery associated with that that we use to train our model on and and then we can same thing for the test
[1:45:09] data set so that's that's what that act that's what that final table actually represents so each row is a 30 m pixel
[1:45:16] but we didn't actually like resample anything you know so to speak we really just um were sampling data and putting
[1:45:23] it into a specific time series format so that we could model it so we moved from spatial to uh maybe you would say vector
[1:45:30] format so to speak and and we have the ability to move back to spatial later wonderful uh well we do realize
[1:45:37] that we're 15 minutes over the time but but thank you so much for everybody that did submit a question and we know that
[1:45:42] we did not get through all of them uh in today's for uh part one but what we will
[1:45:46] do is uh address and answer the rest of these questions that we did not go through in today's part and we will post
[1:45:52] them before next Tuesday which is the next uh second part of this webinar Series so I'll have them posted uh to
[1:45:58] that our training page before next Tuesday um uh John Eric thank you both so much I mean you guys knocked it out
[1:46:04] of the park today just tremendous job as we wrapping up I just want to give you an opportunity if you wanted to any
[1:46:09] closing comments that you might have for the part participants today yeah just thank you everyone for attending we
[1:46:16] really enjoy uh seeing everyone from all over the world kind of commenting in the chat and uh we love to answer your
[1:46:22] questions see that you're learning and have have some use cases for this we really tried to make this scalable in
[1:46:27] general for you all so reach out if you got any questions our emails are um in the in the documents and uh you know we
[1:46:34] we look forward to the next couple training sessions as well where we show you how to model with this
[1:46:41] data and Eric did you have any closing comments for yeah ditto I'm just ditto John's comments we're excited to kind of
[1:46:48] see what the participants do with uh do with this training series and some of the results that they come up with so um
[1:46:55] yeah definitely uh send us any examples of of the things that you're able to do with this pipeline um we're excited to
[1:47:02] kind of see see some of the results so um yeah thank you all great well John and Eric thank you
[1:47:09] both again and I also want to acknowledge the arset team that is working in the background you might not
[1:47:14] have heard their voices you might not have seen them uh but that is Natasha Johnson Griffin s Hudson ooy and Sarah
[1:47:20] kuta so thank you to the rset team and again I want to thank all the participants uh we know that you have
[1:47:25] busy schedules uh in your personal life and professional life so we really hope that you got a lot out of this training
[1:47:30] and we do hope that you'll join us all at the same time next Tuesday for part two of the webinar Series so thank you
[1:47:36] all again and we look forward to seeing you next week thank you thanks all byebye thanks
