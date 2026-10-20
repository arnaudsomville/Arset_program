# Visualizing Land Cover Change Part 2/2

`https://www.youtube.com/watch?v=2in7i2qiIpw` · id 266 · 51:54 · module 85 — Visualizing Land Cover and Land Use Change with NASA Satellite Imagery

[00:03] Hello everyone and welcome back for part two of the RSET training on visualizing land cover and land use change with NASA
[00:10] satellite imagery. My name is Justin Feain and I'm part of the ARSET ecological conservation team based out
[00:16] of the NASA as research center at the south end of the San Francisco Bay. As before, I'd like to take a moment to
[00:24] go over some details of the ARS program. RSET is the applied remote sensing training program. We provide free
[00:32] trainings on a variety of topics which are divided into thematic areas which is what you see listed here on the right.
[00:38] We do our best to listen to feedback from our audience to make sure we're doing trainings on the topics you are
[00:43] most interested in. We cover remote sensing satellites, sensors, methods, and tools at various levels of complexity from the fundamentals of
[00:51] remote sensing to advanced trainings. Our set trainings come in a few different formats. They can be online or
[01:00] in person, live and instructorled or asynchronous and self-paced, but they're always provided free of charge. Many of
[01:07] our trainings are available with bilingual or multilingual options. We only use open-source software and data, and the trainings are targeted at a
[01:15] variety of levels of expertise. This training is called visualizing land cover and land use change with NASA
[01:23] satellite imagery. These are the learning objectives for the entire two-part training of which this is part two. By the end of this
[01:32] training, you should be able to access NASA NASA Earth observation data relevant to land cover and land use
[01:39] change mapping. Convert NASA Earth observation data into distinct land cover land use classes using supervised and unsupervised machine learning
[01:47] classification methods in the R programming language. Recognize the role of classification methods as one part of a change monitoring strategy. Compute a
[01:56] change matrix representing the change in land cover and land use between two dates and create a map in our studio
[02:02] visualizing the differences in land cover and land use between two dates. The prerequisites to get the most out of
[02:10] this training are the fundamentals of remote sensing course and some experience working with R and R Studio.
[02:17] Note that I'm not asking you to have downloaded any of the code or data for this training. I'm going to be jumping
[02:22] back and forth between slides and code later in a way that will probably be hard to follow. And I've also gone ahead
[02:29] and prepared some of the parts which take a while to run so that we can keep the training moving along. I suggest
[02:34] that you follow along with this presentation and then explore the code afterwards. afterwards. The code and data I'll be using in both
[02:41] sessions of this training will be available on the RSE GitHub, which you can find on the training web page along
[02:47] with these slides, a recording of this presentation, and all of the other materials. materials. If you're not familiar with cloning data
[02:54] from GitHub repository, we've got you covered on that topic as well. There's a short video linked on the training web
[02:59] page which covers the cloning operation. This is the second part of a two-part training. The homework for this training
[03:08] will open following this session and will be due on March 12th, which is two weeks from now. You can find the
[03:14] homework on the training web page, and we'll send out a certificate of completion to all who attend both parts
[03:21] of this training and complete the homework on time. With the logistics covered, we can begin part two, visualizing land cover change.
[03:32] Once again, I'm Justin Feain and I remain your sole instructor for this training. I'm a research scientist with
[03:38] NASA as the Bay Area Environmental Research Institute in Mountain View, California. California. Here are the objectives specific to the
[03:47] second part of this training. By the end of part two, you'll be able to apply a random forest model to NASA imagery to
[03:54] create land cover and land use maps for two different time periods and analyze both numerically and visually the change
[04:00] in land cover and land use over time. Please put any questions into the Q&A box in this training. There are a bunch
[04:10] of our set people watching the Q&A who are working to answer your questions while I'm presenting. We'll try to
[04:15] answer any questions you submit at the end of this training. But any questions we don't get to because of time or
[04:22] because they require some extra time on our end to answer fully will be answered in that Q&A document and uploaded to the
[04:28] training website in a week or so. The questions you ask and the responses we get from you and the post training
[04:33] surveys help us decide on topics for future RSET trainings. So your contributions are appreciated. Now we can get started.
[04:45] Just to review, here are some important concepts which we went over in the first part of this training. And the image on
[04:50] the right is where we're headed today as we learn how to implement a random forest classifier in R and use it to
[04:56] show land cover and land use change over time. In the previous session, we looked at one unsupervised classification method K
[05:06] means in detail. Today we're going to focus on supervised classification and ultimately build that random forest classifier for land cover.
[05:17] Recall this table from part one. With supervised classification, we're limited by the quality and specificity of the
[05:23] training data. Classes are targets which we establish ahead of time when we collect and label the training data.
[05:30] We'll focus primarily on random forest today since it's a great introduction to some other important concepts. However,
[05:37] since we discussed K means in detail in part one, let's briefly discuss the related K nearest neighbor.
[05:45] K nearest neighbor uses the class labels of the training data to decide how to classify new data. K means being
[05:52] unsupervised has no predetermined classes and only relies on similarities. In brief, this is how K nearest neighbor
[06:00] works. Given a new sample, check the k nearest points or neighbors and assign the new point the class which is most
[06:07] frequent among those neighbors. K can be any integer greater than one, but it's usually good to choose an odd number to
[06:14] help avoid ties. The points on the right are examples of known samples of different classes where each class is
[06:21] represented by a different color. We can go through an example step by step step to see how this works in
[06:28] practice. Watch how k nearest neighbor classifies a new point. We'll set k equal to three. Find the closest neighboring points.
[06:42] Tally the votes. And the class that's most frequent in the list of neighbors is the class of
[06:50] the new point. We'll now shift our focus and explore random forest models and lay the groundwork for making our own random
[07:01] forest model in R. Random forest is a treebased model which means that it works by creating decision
[07:08] trees. The decision trees explain possible ways to divide the data on based on binary true false filters.
[07:17] New data is classified by applying the decision trees which work to split the training data most accurately.
[07:25] To see how this works, let's assume we have a training data set which consists of aliens and acorns.
[07:32] Random forest knows that they are different classes because the training data is labeled with class information. There are some features which separate
[07:41] the aliens and acorns and our training data. data. Aliens can be blue or green and acorns are smaller than aliens.
[07:56] Each split in the tree represents a binary decision. The first decision, the first question might ask, is it larger than some size?
[08:12] The next might ask, is the object green? And finally, it might ask, is the object blue? blue? Note that we didn't tell the model to
[08:21] make these splits. The random forest model actually makes hundreds of decision trees, each of which is the
[08:27] result of leaving out a random set of variables and observations. But for demonstration purposes, we're only going
[08:33] to consider the single tree where we're using all of the variables and all of the observations. So, we've built a decision tree that
[08:43] describes a series of questions which we can answer to sort objects. Any objects sorted into the lefthand
[08:50] side is more likely to be an alien. And any objects sorted into the right hand side are more likely to be acorns.
[09:01] Now, we can apply this to some data that the model hasn't seen before and observe what happens.
[09:14] The decision tree correctly sorted all of the objects, but notice that there's an unused path. This would represent
[09:22] acorns which are bigger than aliens, but neither blue nor green. In this case, we got lucky and the big
[09:32] acorn still being correctly classified. But we might also ask, what about small aliens? And now we see that we have a problem.
[09:47] There were no small aliens in the training data. So our model couldn't classify it correctly. This highlights the importance of having
[09:59] highquality training data that's representative of variations in the real world. In part one, I mentioned that it
[10:05] was a good idea to have multiple samples for each class in your training data. As you can see in the false color image of
[10:12] our study area, the water has a high degree of variation due to suspended sediments. sediments. If we only took one or two measurements
[10:20] for our training data, the model might not correctly classify clear and turbid water as both belonging to the water
[10:26] class. Taking many training data measurements ensures that we're providing the model with a full picture of the variability of spectral
[10:33] reflectance within a single land cover class. In this example, I've pulled the data for two of our water training points.
[10:43] I've indicated the actual points these correspond to in the map on the right where you can see that one sample is
[10:49] very turbid and the other is relatively clear. Providing both samples to the model helps it learn that water can have
[10:55] a wide range of characteristics so that it can correctly classify pixels of water that lie between these extremes.
[11:02] To return to our previous analogy, we're accounting for both big acorns and small aliens. Here I've laid out a highle overview of
[11:15] the workflow we'll be covering in R as we build a random forest model for classification. classification. So, let's head to R Studio to see how
[11:23] it's done. Just as a reminder, you'll have access to the code, data, slides, and training materials via the training page and the
[11:34] RST GitHub. I highly recommend that you watch the demonstration and then explore the code after the training is
[11:41] concluded. I've also premputed some of the results for the sake of time, so if you try to follow along, you'll probably
[11:47] fall behind. With that, let's build our own random forest model. We'll be building a random forest model for supervised
[11:56] classification. And we'll begin by loading all of the libraries we're using in this training. This is the same set
[12:03] we used in the code for part one. And I'm also setting the same random seed so that your outputs will look like mine.
[12:12] Just as in part one, we need to load the raster data for 2017 and 2024. I'm also
[12:18] going to go ahead and make the same RGB plots for both years as we did in part
[12:22] one so we have them ready if we need to use them as base maps later. I won't go
[12:27] over this since you've seen the process before, but you can refer to the comments in the code block for a quick
[12:32] refresher. Now, we can also load the training data points that I prepared for this training. The points are associated with
[12:41] the image from 2017 since we are going to build our model on the 2017 data before applying it to the 2024 data.
[12:50] Notice that I also apply the na emomit function to remove any points that are missing a class label. The training set
[12:57] small enough that we could do a manual check for missing class labels, but this is just good practice for cleaning any
[13:03] training data set. It's also useful to take a look at the training points in the context of the
[13:12] imagery. So, let's plot them on top of the RGB plot for 2017 we stored earlier. The points should be colored according
[13:20] to their class so we can confirm that they're representing the land cover types we expect. Here, I'm using a
[13:26] variant of the okabia eto colors for the points and setting the fill aesthetic to match the LC class variable.
[13:43] We find ourselves in a situation where the training points and the underlying raster are spatially associated, but the
[13:50] training points don't have any information about the reflectance values stored in the raster. We can extract the
[13:57] reflectance values of the raster at each of the training points using the extract function with the bind option set to
[14:04] true so that the results include the reflectance values as well as the land cover class labels. We also need to ensure that the LC class
[14:13] variable is stored as a factor which is the R data type for categorical values or random forest will assume we're
[14:20] trying to do regression and throw an error because regression on character vectors is undefined. Here's a quick check of our combined
[14:31] training data to make sure everything worked as we expected. And we can see here that we have the land cover class
[14:38] and the reflectance values for each of the bands in our raster. We can also see that land cover class LC
[14:46] class variable is listed as factor uh which indicates that it's been converted to the r factor data type just like we
[14:53] wanted. The reflectance values are still listed as double which is double precision floating point data. Uh that's
[15:00] a numeric data type. Uh, and with that sorted, we're free to move on. There are a few important elements to
[15:09] the random forest function call. We'll go ahead and run the function here and then explain what each part's doing.
[15:19] This is a breakdown of the arguments to the random forest function call. Uh, these aren't all of the possible
[15:25] arguments, but they're the ones that I think are core to understanding random forest or just practical to know.
[15:33] The formula is a formula describing the relationship between the objective and the predictors. When we type LC class
[15:43] tilda period, the variable is predicted by all of the variables in data. LC class is excluded since it's the target
[15:53] of the predictors. For classification, this always takes the form class tilda predictors where the period just stands in for everything
[16:04] that's not the class. Data is the data from which to draw all of the class and value information. This
[16:13] must contain labels as factors as that factor data type for classification to take place. proximity equals t proximity equals true
[16:26] uh uh gives you an output where the values are closer to one when the pair of observations are more similar. We'll
[16:35] look at how to visualize these later. Um you can set this to f to false to turn
[16:40] it off if it's not important to you. Speaking of importance, importance equals t returns information about how much each of the predictors
[16:49] contributed to the final model. In tree equals 100, adjusts how many random trees to build. This defaults to
[16:59] 500, but we're only using 100. Uh, our example is very limited. So, in my testing, building more trees didn't
[17:07] really seem to improve the results, and it just takes longer to run. do trace false. If you set this to one
[17:16] or true, then it returns verbose information for each tree built. For any number greater than one, it will give
[17:23] the verbose information for every n trees. So if you're doing 500 trees and you set in to 50 or set do trace to 50,
[17:34] uh it will give you 10 trees. every 50 trees it will give you an output. But now we have a trained random forest
[17:45] model which describes the classification process. To return to the example in the slides, you can think of this as being
[17:51] equivalent to the decision tree with all of the yes no questions filled out. Importantly, the model object is not a
[17:59] raster that we can plot. In order to get from the model object to a raster output, we have to apply the trained
[18:06] model using the predict function. Since the model's already trained, we can apply it to both the 2017 and 2024
[18:14] imagery. So now let's jump back to the slides to look at how we can quantify the land
[18:22] cover change. Here I've laid out another highle overview of the workflow we'll be covering in R as
[18:34] we look at how to quantify land cover change with a change matrix. We'll apply the model which you just saw at the end
[18:41] of the last segment. Compare the model results for two dates. Compute the change matrix and then talk about how to
[18:48] interpret changes overall. So now that we have the two maps of land cover change in 2017 and 2024, we can
[19:00] create a change matrix which shows how many pixels of each class in 2017 became pixels of the same or a different class
[19:08] in 2024. To do this, we'll join the single band raers for each year into a multiband raster and use the cross tab function.
[19:16] I'm actually going to do this in two slightly different ways. The first will return a matrix style table whereas the
[19:23] second will return the same information in a long format which is conducive to sorting and a bit easier to read in my
[19:29] opinion. First let's look at the change matrix in the typical form. In this case the rows correspond to the
[19:40] predicted land cover class in 2017 and the columns correspond to the predicted land cover class in 2024.
[19:48] It may look a bit complicated at first, but let's just consider the changes in pixels that were classified as water in
[19:55] 2017. Here we see that of the pixels classified as water in 2017, uh about one and a half million were
[20:06] classified as barren, 90,000 were classified as forest, 168,000 were classified as vegetation, and 1.2 2 million remained classified as water.
[20:18] Notice that when something's classified as a change from water to water, we can instead say that those pixels did not
[20:25] change and all of these A to A pairs lie along the diagonal of our matrix. Since the diagonal of the matrix
[20:35] represents the number of pixels which didn't change or rather were a change from the class to the same class and the
[20:44] sum across the rows represents the total number of pixels for that class in 2017. We can very easily calculate the
[20:52] percentage of each class that remains unchanged as I've done here. We immediately see that the baron class
[21:00] changed the least at 92.25% of the pixels classified as barren in 2017 still being classified as barren in
[21:10] 2024. 2024. Vegetation saw the most change as only 13.44% 13.44% of the pixels cla uh which were
[21:19] classified as vegetation in 2017 were still classified as vegetation in 2024. Referring back to our change matrix, you
[21:28] may also notice that the 2017 vegetation pixels most commonly changed to barren in 2024. And with only a bit more math, we can
[21:37] calculate that 66.35% of the vegetation pixels became baron pixels in 2024. Notice that this matrix format gives us
[21:49] a handy uh from class to class syntax for isolating specific changes between any pairs of classes. The long version I mentioned earlier
[22:00] simply takes all of the information in the change matrix and stretches it out so that each of the possible from class
[22:06] and toclass pairs are listed individually. This is particularly useful if you want to filter and sort your data to get the magnitude of
[22:14] change. You could summarize the data further such as when you're looking for the total loss gain of a particular LC
[22:25] class. In this case, I'm doing vegetation. Now you can see that we've isolated the overall changes in vegetation measured
[22:36] by the magnitude of both gain and loss and determine that the vegetation class only lost 67.1% of the pixels it gained. To put that
[22:46] another way, even though vegetation experienced the greatest overall change, it still had a gain of about 1 and a
[22:52] half pixels for each pixel it lost. We can therefore say that the vegetation class expanded between 2017 and 2024
[23:01] overall, but areas which were previously vegetation didn't tend to remain vegetation. vegetation. Change matrices give us a really good
[23:11] quantitative insight into the magnitude and direction of change over time. But it's also important to understand where
[23:18] these changes occur in space. We'll return to the slides while I will lay out the process for turning all of
[23:25] this information into a map of land cover and land use change. So, we've applied classification to the
[23:36] imagery for both of our dates and the change matrix gave us some information about the direction and magnitude of
[23:41] land cover change. But now that we've answered the question of how land cover is changing over time, we want to map
[23:49] the changes to figure out where the changes occur. Instead of an overview as I provided for the last two sections,
[23:56] let's look at a simplified example. We use simple mathematical and logical operations to compare land cover maps
[24:04] and create maps of land cover change. A simple approach to finding which cells have changed is to use uh not equal
[24:13] operation. Going cell by cell, the operation checks to see if the earlier and later land cover classes are different.
[24:25] Where there has been a change, the output returns true or one. Where there's not been a change, the output
[24:32] returns false or zero. The result is a binary map with the same dimensions as the input which answers the question
[24:41] where change has occurred. You might want to apply this binary map as a mask over land cover maps to figure
[24:51] out what types of change occurred in the areas we identified with binary mask. In practice, this is really as simple as
[24:58] multiplying the mask by the land cover map. The result is a change map which shows only the pixels where we detected
[25:05] land cover change and shows what the land cover class changed to. This is very simple to do programmatically. So
[25:14] let's go back to R to see how it's done. Just as we did in part one of this
[25:21] training, I'm going to use a plotting helper function so that all of our plots use a consistent layout and legend. This
[25:28] is very similar to the plotting helper function in part one. So I won't go over it in detail.
[25:34] Now I can use the plotting helper function to create plots of each of the classified raers and arrange them side
[25:39] by side, which is what you see here. In the 2017 image, the one on the left, we see a large extent of flooded areas
[25:51] outside of the main course of the river, which are replaced by the Baron class in the 2024 image on the right.
[26:00] We also see some significant expansion of vegetation in parts of the forested area to the south of the river. This is
[26:08] giving us visual clues about the strange metrics regarding vegetation we were seeing in the change matrix. Although
[26:15] very few pixels which were vegetation in 2017 remained vegetation in 2024, the expansion of ve vegetation in the
[26:23] forested areas explains why there was still an overall gain in the vegetation class. In the slides, I mentioned that all we
[26:34] need to do in order to create a binary change mask is to use the not equal logical inequality operator. So let's do
[26:41] that now and then plot the results. And here we have our binary change mask. That's exactly what I demonstrated in
[26:55] the slides with the small toy model. It follows exactly the same procedure. And following on from the slides, we
[27:04] might be interested in applying that mask back to one or both of the previously classified lane cover maps,
[27:11] which is as simple as multiplying the original map with this new change mask. However, the Terra package in R gives a
[27:18] much cleaner way of achieving the same result using the mask function, which is much easier to remember, and specifying
[27:25] that we want our mask value to be zero or false. Now we can plot both maps using the same
[27:36] helper function we used earlier. By only highlighting the pixels that experienced change between 2017 and 2024, we can get a better idea of the
[27:52] locations where certain changes took place. If we think of these maps in terms of the change matrix, we've
[28:00] essentially visualized everything except for the diagonal of the matrix which is now NA. We can see in stark contrast the loss of
[28:10] loss of forest to vegetation and the loss of water to baron as well uh as where in the scene these changes are
[28:18] occurring. That map on the right is the same one I had promised to show you how to make at the beginning of this
[28:24] presentation. presentation. So, for one final time, we're going to return to the slides for a summary and
[28:30] conclusion and then we'll open up the Q&A session. I will say at the end of this document, which will be on the
[28:36] training web page, I've provided some additional details which I don't have time to get into now about other ways
[28:42] that you can visualize the results and assess the the appropriateness of your remote sensing random forest model.
[28:54] So let's review what we've learned today in part two. Today we've learned how to recognize the importance of training data for
[29:02] supervised classification. Compare K means and KN&N methods for clustering and classification. Construct decision trees as used in
[29:12] random forest models. Apply a random forest model to NASA's imagery to create land cover land use maps at two
[29:19] different time periods. and analyze both numerically and visually the change in land cover and land use over time.
[29:30] So now let's review what we've seen in both parts of this training. Over the course of this two-part
[29:36] training, we've hopefully learned how to access NASA Earth observation data relevant to land cover and land use
[29:43] change mapping. Convert NASA Earth observation data into distinct land cover land use classes using supervised and unsupervised machine learning
[29:52] classification methods in the R programming language. Recognize the role of classification methods as one part of a change monitoring strategy. Compute a
[30:02] change matrix representing the change in land cover and land use between two dates. And finally, create a map in R
[30:09] Studio visualizing the differences in land cover and land use between two dates. A reminder about the homework. It will
[30:18] open today following this training and will be due in two weeks on March 12th. You can find the homework on the
[30:25] training web page and will submit your answers via Google Forms. You will qualify for the certificate of
[30:32] completion if you've attended both live webinars and complete the homework assignment by the deadline. Of course, I've been your trainer, but I want to
[30:42] thank the rest of the RSET team as well. You've been hearing me talk for a long time, but there are many other people
[30:48] who put in countless hours to bring these trainings to you. They're the ones who handle the logistics, the review of
[30:54] the materials, and all the other behind-the-scenes work to make RSET trainings possible. You can contact me via email or direct
[31:04] any questions and comments to RST to the RST Gmail address. You can sign up for the arset newsletter to stay uptodate on
[31:11] future trainings following these instructions. And here are a couple links to other resources I personally recommend. Geeks
[31:21] for geeks has a good selection of articles about data science and the random forest algorithm which covers
[31:27] some of the other details I had to skip over for the sake of time. IBM has a fantastic guide to machine
[31:33] learning which has subsections for supervised and unsupervised models but also some other types of machine learning that I didn't cover in this
[31:41] training. training. The R Terra package we've been using is an incredibly powerful set of tools for spatial data analysis and has a really
[31:50] good set of tutorials. And finally, I want to give a shout out to Josh Dharmmer's Stat Quest videos,
[31:57] which are fun and easy to understand videos on statistics and machine learning. Whenever somebody contacts me with a question about stats or ML, I
[32:05] check to see if there's already a Stat Quest playlist on the subject and send that to them first.
[32:12] And for one last time, I want to thank you all for attending the SARS set training. In just a moment, we'll jump
[32:18] over to the Q&A document and address some of the questions you've submitted. Okay, let's get into the Q&A for part
[32:34] two. two. So, question one was actually a question uh that we had in the earlier session, session A this morning. Um, but I wanted
[32:44] to bring it up again here just in case anybody else ran into the same uh the same issue. Um I was storing the
[32:53] multiband HLS data with the git large file storage. Uh it seems that we had so many people uh wanting to take this
[33:02] training and trying to download the data at once that we hit a rate limit. So I went ahead and put the data up on Google
[33:07] Drive. Um you're welcome to download it from there instead if we continue to run into issues with the Git LFS.
[33:19] Question two, what's the difference between this method and Google Earth Engine GE? Uh, also is land cover and
[33:26] land use data for Iraq available only for the year 2017. So this should be equivalent to the uh GE implementation
[33:37] of random forest and there may be a an already existing land cover and land use data set for Iraq. Um or you can make
[33:49] your own using hyperspectral or multisspectral imagery uh using the same process we showed today in R or uh find
[33:57] an example in in Google Earth Engine. Um, I know there are some examples out there, uh, one of which I reference in
[34:04] question four. Question three, with regard to forest, what classification method should I use in addition to reflectance values if I
[34:14] want to add elevation, aspect, slope, or any other values such as tree type, evergreen, deciduous, will there be too
[34:20] many variables to consider? That doesn't seem like an unreasonable number of variables to consider if you think that those might be important for
[34:30] the land cover type in your study area. For example, if one of the target classes that you're interested in is a
[34:38] plant that only grows on a south facing slope, um adding adding the the slope and aspect or if you have like a a
[34:47] highly varied topographic area, uh I could see elevation coming into into play there. Uh you simply would need to
[34:56] stack all of that extra data with your multisspectral bands um using the RAS and SPRC functions. uh just like we we
[35:04] did in the first part of both sections to to bring our data in. Uh before you extract the band information uh for your
[35:15] training data point locations uh as to which classification method you should use. uh that's going to be highly
[35:25] dependent on on the constraints and and the particulars of the study you're looking to do. Uh could be done with
[35:34] random forest. Um but there might be better options out there. Uh just depending on exactly what it is you're
[35:40] you're trying to to answer. Uh Uh as I mentioned in in the answer to question two, uh question four, can we
[35:49] do random forest classification in Google Earth Engine? Yes. And there is an example I've linked here from uh the
[35:59] folks at NASA Gddard uh who have made a Google Earth Engine app uh for random forest methods to detect mangrove maps
[36:10] uh to detect map mangroves. So it's a very cool tool. You can also find other uh other implementations of random
[36:18] forest in Google Earth Engine for examples. Question five, how were the locations for the training data set generated? Was
[36:29] it done in points on QGIS? Yes. Um I used the 2017 imagery as a base map and
[36:36] drop the points uh on the base map using QGIS so that I could see what label I
[36:42] needed to to add. um that makes it very easy and quick and then I could zoom in
[36:48] and out as I needed to make sure that my training data points were accurate and that I was capturing a good range of the
[36:56] variability within each land cover class such as when I took points for both the clear and turbid water to include in my
[37:05] water class. Question six, what is the most efficient way to obtain a training data set for a
[37:16] random forest model? The gold standard is going to be getting data on the ground through field work and having
[37:24] that tied to a date for which there is a a cloud-free satellite image. For practical reasons, sometimes that's
[37:33] that's harder to do than others. Um, so it's it's perfectly perfectly acceptable to do uh what I've done here and use
[37:42] high resolution imagery and drop your points on the imagery. um uh just just as I I described.
[37:53] Um, as far as the efficiency of using points versus lines or polygons, uh, for homogeneous areas, it's more efficient
[38:03] to use polygons. Um, because you're sampling many pixels, all of the pixels that are covered by your polygon at once
[38:13] rather than taking individual samples of individual pixels at a point. Question seven, the label classes used in the training uh they use the 2017
[38:29] imagery. Uh but note that the 2017 and 2024 imagery were taken roughly the same uh time of year. So we can assume that
[38:40] the spectral profiles for each land cover class are similar between the years. That is to say that the
[38:46] vegetation in 2017 should be analogous to the vegetation spectral profile in 2024, which is why we're able to get
[38:54] away with with training the model on data from one year and applying it to two different years.
[39:03] Uh what about metrics? How can we evaluate classification performance? Um again, this is fantastic. uh I wanted to
[39:12] to get into this um but really wanted this training to focus on giving you an intuitive sense of the how and why of of
[39:21] classification. There is an additional information section at the end of the part two document uh where I cover some
[39:28] of the topics and explore some of the available functions in the random forest explainer package uh which I very
[39:36] cleverly uh had added to the package imports at the top of both of the sections. So you should already have it
[39:44] downloaded if you're running the code. Uh question nine, when using the R random forest tool, does Randomly create
[39:57] the training and validation data from the entire data set or is this a manual process? There are evaluation metrics that are
[40:08] inherent to the way that the random forest model builds many trees using subsets of the training data points and subsets of the
[40:20] variables for each of those training data points. Um, however, if you wanted to do a a post-classification
[40:29] assessment, uh, you could make, say, um, a 7030 split on your training data. Uh, but you would have to do that manually.
[40:37] Um, some of the evaluation metrics that are already available to us are things like the out of bag error. Um, if that
[40:44] makes sense. If not, um there is more information in in the random forest explainer package uh help and in the
[40:53] additional information section. Uh question 10. What would be the best way to do a multi-year analysis of land
[41:08] cover in the same area in several different times, months, or years? As I mentioned briefly, uh when doing
[41:19] direct comparison, it's important to make sure that the images you're comparing are in the same part of the
[41:25] phenological cycle. Uh as you can imagine, green vegetation has a significantly different spectral profile than vegetation that is scinsesscent or
[41:36] you know at in the autumn as it were. Um but you can um train a model for each
[41:46] each pair of months if if there is significant difference throughout the year uh throughout the phenological cycle. Otherwise, what you've seen today
[41:55] uh works yeartoear as long as as long as you're keeping track of the time of year and the part of the phenological cycle
[42:02] you're looking at. reading question 11. Um, I'm not sure if this is within the scope of this webinar, but can you talk about
[42:23] the relationship between study scale and resolution of images? For example, if one wants to examine the changes in
[42:30] vegetation in the home range of an animal species that lives in a forest in the DRC in the last 25 years paired with
[42:36] changes in the vegetation in the African continent during the same period require different resolutions. Yeah. So the issue uh you're you're
[42:47] going to run into here is that as you move to lower resolution uh lower spatial resolution satellite imagery to
[42:55] deal with larger study areas such as a continental scale. Uh you're going to get more mixed pixel effects which uh is
[43:07] to say that a single pixel might contain multiple target land cover classes. Um, there are some some uh spectral unmixing
[43:17] techniques that can help get around this, but in general, you would prefer to be able to use the same resolution at
[43:26] both scales and and uh even better if they're on a commonly aligned grid. Uh, is it possible to have the R script
[43:40] used for the demo? Uh, yes. the R script um the our markdown files and the rendered HTML versions which are just a
[43:50] little nicer to look at. Uh all of those for parts one and two are available on the GitHub which is linked there and
[43:56] also on the training web page. Okay. And it seems that questions are already slowing down. Um, I'm actually
[44:14] going to scroll back to the questions from part one and see if there's anything that I think might be
[44:21] important to bring up. All of these questions will be posted. Um, so don't worry don't worry if I bring something up that
[44:37] you you haven't seen yet. Oh yes, the other thing that I would like to bring up um which
[44:54] was question 38 in the first session. Um which satellite data set is best for land use land cover assessment from 1980
[45:03] to 2015? What do you recommend and why? Um, this is going to be dependent on your study area, but I do want to point
[45:11] out that it is um, best practice to ensure that you're using the same sensor for both uh, your your previous and
[45:22] current or each of the the time steps in between for your land cover and land use analysis. um random forest will only
[45:30] work if the bands are exactly as they were um in in the the training data. So if you were to say train your model on
[45:42] landsat and then try to apply it to tanager data uh which has a different set of bands the random forest model
[45:50] would fail. So that is a consideration uh when working with these these longer term projects. Uh given that working with spatial data
[46:06] in R can be computationally intensive, what would you recommend for this type of analysis? Specifically, what spatial
[46:12] resolution and approximate raster size and number of pixels would be reasonable to handle on a standard personal
[46:17] computer? computer? This is something that has been greatly improved in in just the past few years. Uh with the Terra package which we used
[46:28] in the demonstration uh today and and uh on Tuesday there is the capability of doing ondisk processing which means that you're less
[46:41] limited by the uh RAM that your personal computer has. Um, I have done all of this on a a standard uh consumer-rade
[46:52] laptop. Um, and uh these images are roughly on the order of half a gigabyte. Um, but you could reasonably do do
[47:06] images up to say 5 gigabytes. Um, it's really just just depending on on what makes sense for your study area. And
[47:15] there are always ways that you can go about uh letting the process take longer or spreading it across multiple cores to
[47:24] to conserve your computational resources. Uh question 14. My supervisor suggested to use the LANSAT and DEM. Is it
[47:43] possible to lay them out together for LULC analysis? Uh, yes. I don't recall which question that was, but the process
[47:52] would just be to to stack your uh raers before you do the training data extraction. So you would take your your
[48:01] multiband raster and uh combine it with the DEM data before you do the extraction so that your labeled
[48:09] extracted training data points uh contain all of the bands as well as the DEM value. Question 15. How does the spatial and
[48:29] temporal resolution of NASA satellite imagery affect the accuracy of land use change detection? Uh I will take this in two parts because
[48:38] the answer for spatial and temporal resolution are slightly different. the spatial resolution. Um, particularly when dealing with legacy
[48:48] products that have lower spatial resolution, you do run into the issues of mixed pixels where a single pixel
[48:56] might actually represent um a portion of one land cover class and some some portion of another. Um, so it's always
[49:05] best to understand the scale at which your your landscape is self-organized. that is the minimum pixel size you need
[49:15] to be able to to distinguish one land cover from another. Um, in terms of the temporal resolution, uh,
[49:26] you're not only dealing with the the temporal resolution in terms of revisit time, which, uh, depending on factors
[49:34] like cloud cover might limit your ability to get accurate, uh, imagery at exactly one year or two years
[49:45] uh, uh, on, which is necessary for for addressing the seasonality. of things like vegetation. Um, but also the period of record. So,
[49:57] if you're looking to go back a very long time, you're limited by what products are have been available for for that
[50:04] long. And the further back you go in time, the the lower the spatial resolution tends to be. So, there's sort
[50:12] of a tradeoff there. And just a reminder, all of these questions will be up on the training web
[50:40] page within a week after I've had time to go through and and clean up and answer everything more thoroughly.
[51:07] And yes, thank you. I see in the chat uh Elizabeth uh the link on slide 39 uh
[51:14] does appear to be incorrect and that is the correct link. We'll have that fixed on the the upload to the training web
[51:20] page. But yes, thank you for catching that. Seems I copied the same link twice. And since it looks like there are no
[51:32] more questions coming in, I think we can go ahead and call it a bit early. I do
[51:37] want to say one more time, I really appreciate everybody attending both these sessions. Um, don't forget to do
[51:42] the homework and we'll send out that certificate of completion. Thanks again, everyone.
