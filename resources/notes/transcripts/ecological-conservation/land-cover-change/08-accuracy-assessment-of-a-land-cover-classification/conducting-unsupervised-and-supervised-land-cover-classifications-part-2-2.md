# Conducting Unsupervised and Supervised Land Cover Classifications, Part 2/2

`https://www.youtube.com/watch?v=LtM4X5J4OuI` · id 309 · 59:07 · module 92 — Accuracy Assessment of a Land Cover Classification

[00:03] Hi everyone, and welcome to the second session of assessing the accuracy of land cover classifications. This week we will be
[00:11] focusing on unbiased areas estimation. My name is Cindy Schmidt and I will be your instructor today. We will have one homework assignment
[00:23] available after the end of this session. The homework will be submitted via Google Forms and the links will be
[00:29] listed on the course website. To receive credit for this homework, you must submit all answers by March 6th.
[00:37] To receive a certificate of completion, you have to attend both live webinars and complete the homework assignment.
[00:44] It does take some time to process these certificates, so you can expect to receive them about 2 months after the
[00:50] completion of the course. I just want to remind you that there are several prerequisites for this course.
[00:58] First, you should know and understand the fundamentals of remote sensing. You can watch our on-demand course listed here, which includes two 1-hour
[01:08] recorded webinars that you can watch on your own time. Because accuracy assessment is a follow-on to land cover classification,
[01:17] you should have an understanding of land cover classification, which you can do by completing our advanced webinar
[01:23] listed here. Lastly, for the hands-on exercise today, we will be using ArcGIS software, although we will mostly be working in
[01:34] Excel. Excel. Normally, ARSET utilizes open-source software such as QGIS whenever possible, but for this particular webinar, we
[01:43] determined that using ArcGIS provided the least complicated approach to teach accuracy assessment. You can do accuracy assessment using
[01:52] QGIS, and if you are interested, I suggest that you contact the very active online QGIS community. As I mentioned previously, you can
[02:03] access all the course materials on the Arset website. Each week, you will be able to find a PDF of the PowerPoint
[02:11] presentation in both English and Spanish, Spanish, a link to view the recording of each webinar presentation, and links to the Google form for
[02:20] homework submission. Please note that in order to view the webinar recording, you must register. This helps us keep track of who is
[02:29] viewing them. Once you register, you will automatically be taken to view the recording. Last week, we discussed the basic the
[02:40] basics of accuracy assessment including how to create an error matrix. This week, you will learn how to use the
[02:47] error matrix to calculate unbiased area estimates of your classes. So, in this session, we will give you an
[02:59] overview of unbiased error estimation, briefly review error matrices, calculate area estimates along with their standard errors. We will also determine users and
[03:11] producers accuracy with the unbiased area proportions and then compare last week's results with this week's results. After that, we will start with the
[03:22] hands-on exercises and conclude with a short Q&A session. Last week, we discussed how error matrices provide information about the
[03:35] accuracy of a land cover classification based on reference data collected through sample-based approaches. This week, we will discuss how error
[03:45] matrices can also provide information about the estimated area of each class adjusted for the map bias, and also
[03:54] characterize uncertainty of those estimates. estimates. The first thing to understand is that the land cover classified map is
[04:02] considered biased. So, the areas of each land cover class are also considered biased. biased. In the example below,
[04:12] the hectares for each class in the land cover map are considered biased. So, for example, 45,000 hectares of hardwood, 36,000
[04:22] hectares of conifer, and 18,000 hectares of other come from that classified image. image. If the reference data were collected
[04:32] using a stratified random sampling approach, approach, then those data are considered unbiased. You can use that information to derive
[04:42] unbiased estimates of the areas of each class. First, we will review creating the error matrix. matrix. As you recall, your unbiased reference
[04:55] points are overlaid onto your land cover map using GIS software, which allows you to create this table, where the
[05:02] frequency of pixels of each combination of land cover pixels and reference points are identified. So, in this example, 24 pixels are
[05:14] correctly classified as hardwood, 30 pixels are correctly classified as conifer, conifer, and 23 pixels are correctly classified
[05:24] as other. The other pixels represent errors in the classification. The error matrix compares the reference data to the classified map in terms of
[05:37] pixel counts. So, here's a quick quiz for you. Which are the reference data, and which are the classified data in this table?
[05:51] I'll give you a moment to type in your answers into the Q&A box. So, if you said the classification are
[06:07] data are on the left column and the reference data are across the top, then you would be correct.
[06:13] The correctly classified pixels are the values on the diagonals and the incorrectly classified pixels are on the
[06:21] off diagonals. The total number of classified pixels are on the far right column. The total number of reference data
[06:28] pixels are along the bottom row. Now, we are going to add some additional information to the error matrix to
[06:38] enable us to calculate unbiased area estimates. The first thing we need to do is calculate the total number of pixels
[06:47] in each land cover class. You can do this using your GIS software. In this example, there are 500,000
[06:55] pixels in the hardwood class, 400,000 pixels in the conifer class, and 200,000 pixels in the other class.
[07:04] You can then convert the pixels into hectares by using the formula specified here. The next thing we will do is calculate
[07:15] the proportion of each class to the total, total, which we will call W sub I. To do this, you simply divide the total
[07:24] area of each class by the total area. So, for example, for hardwood, if you divide 45,000 by 99,000 hectares, you get .455.
[07:37] The total of W sub I should equal one. Since the number of pixels per class is disproportionate relative to the area of
[07:51] the class, it's necessary to estimate the area proportions for each cell in the error matrix. matrix. We can use the area proportion
[08:00] calculated from the land cover map with information about the pixels that were correctly classified to estimate the
[08:07] area proportion. To do this, we divide the total correctly classified pixels for a class by the total classified pixels for that
[08:18] class and multiply that by W sub I. In this example, we divide the correctly classified pixels for hardwood, which is
[08:27] 24, by the total classified pixels for hardwood, which is 38, and multiply that by 0.455 to get 0.2871.
[08:41] We will use that new information we just calculated to create a new error matrix. The new error matrix looks just like the
[08:50] old one, where the classified data are along the first column and the reference data across the top.
[08:57] Also, we included the total pixels, total area, and W sub I because we will use those later.
[09:05] Instead of pixel counts, you will put the class area estimates in each cell. So, in the previous slide, we calculated
[09:12] the correctly classified hardwood area estimate to be 0.2871, which you'll put in that cell in the blue specified there.
[09:25] You will then calculate the estimated area proportions for each class and fill in the table. You will also total the columns and
[09:34] total the rows. Often, this is a preferred way to calculate an error matrix because the estimated area proportions normalize the
[09:43] absolute sample counts by the map area. And then it can be used to calculate the users and producers accuracy, which we
[09:51] will do at the end. This new error matrix contains all of the information you will need for
[09:58] estimating the area of each class. The estimators are actually the column totals you just calculated. The next step is to calculate the
[10:11] unbiased class area estimates in hectares. hectares. To do this, you just multiply the total proportion in each column and multiply
[10:20] it by the total area in hectares. In this example, we multiplied the hardwood total estimated area proportion,
[10:29] which is 0.3435, to the total area, which is 99,000, to get 34,007 hectares of hardwood. You then calculate the class area
[10:46] estimates for each class and fill in the cells. The next step is to calculate the standard error for the area estimate of
[10:57] each class. This equation is used for a stratified random sample. This is a very complicated equation, and
[11:05] we'll we will go over it um in more detail during the exercise. For each class, use W sub I on the far
[11:14] right. For hardwood, P sub IJ is 0.2871, 0.0491, 0.0491, and 0.0073. To get N sub I, you need to go back to
[11:31] the first error matrix. N sub I is the total number of classified pixels in each class, so will always be 38, 37,
[11:40] and 25 pixels for each class. Again, we'll go over this more specifically in the exercise. Once you calculate the standard error
[11:50] for the area estimates, you put them in the cells for each class. To be most useful, the standard error
[12:00] should be converted to hectares. To do this, you multiply the standard error by the total number of pixels, multiply by
[12:08] 30 squared, and divide by 100 squared. For hardwood, the standard error is 4,179 4,179 hectares. So, you do this for each class and fill
[12:22] in the cell values. The next step is to calculate the confidence intervals for each class. There's a lot of information you can
[12:33] find out in the literature about how to decide on a confidence interval, and for more information on this, I suggest you
[12:40] consult the literature. A standard comfort confidence interval is 95%, which means that there is a 95% probability that the true value lies
[12:53] within that interval. The 95% confidence interval is calculated by multiplying 1.96 by the standard error. So, if you multiply 4,179
[13:07] hectares for hardwoods by 1.96, you get 8,190 8,190 hectares. The next thing we'll do is calculate the
[13:19] users, producers, and overall accuracy. We calculated exactly like we did using the pixel counts last week. So, here's another quick quiz.
[13:33] Is this calculation that we specify here to 0.2871 / 0.455 which equals 0.632, is this calculation users or producers
[13:48] accuracy? accuracy? I'll give you a minute to type your answer into the Q&A box. If you guessed users accuracy, you would
[14:10] be right. Users accuracy for hardwood would be 0.2871 / 0.455 which equals 0.632. Producers accuracy for hardwood would be
[14:26] 0.2871 0.2871 / 0.3435 which equals 0.836. You can calculate this for all the classes and fill in the cells.
[14:43] The overall accuracy is the sum of the diagonals. You don't have to divide by the total because it's one. So, the
[14:51] overall accuracy here is 0.749 or 75%. This is a summary table of the new error matrix we completed.
[15:05] These are the unbiased area estimates for each class including a 95% confidence interval based on both the
[15:13] reference data and the land cover classification. classification. So, that means that the unbiased area estimate for hardwood 34,000
[15:23] and 7 acres plus or minus 8,190 acres. acres. You can also see the users and producers accuracy for each class.
[15:37] So now let's compare this to our first error matrix using pixel counts and the area of each class in the land cover
[15:44] map. map. You can see that the users accuracies are the same, but the producers accuracies are a little different. This
[15:52] is because the users accuracy is based on the map data and can be calculated using either the estimated area
[15:59] proportions like we did today or the pixel counts like we did last week. However, the producers accuracy is based
[16:07] on the reference data and has different results depending on whether the calculation uses pixel counts or estimated proportions.
[16:16] The overall accuracy is a little different as well. For hardwood, the unbiased area estimate was 34,007 acres.
[16:29] acres. But the classified image resulted in 45,000 acres of hardwood. This means that the land cover map overestimated
[16:37] hardwood. On the other hand, the unbiased area estimate for conifer is 41,751 acres. acres. But the land cover classification
[16:52] resulted in 36,000 acres of hectares of conifer. conifer. Which means that the land cover map underestimated conifer.
[17:04] In summary, reference points must be derived using an unbiased method such as stratified random sampling, which is
[17:11] preferred for land cover maps. The error matrix is important for understanding where your errors are and often you have to report overall
[17:20] accuracy. Using sample counts to create an error matrix gives some indication of map error, but incorporating area
[17:28] proportions results in a much more informative error matrix. You get an unbiased estimate of the area of each class as well as confidence
[17:38] intervals. And ultimately, this gives you a much better idea of where you have underestimated and overestimated class
[17:46] areas on your land cover map. Now, we'll move to doing the exercise for today. Next, we will be starting with exercise
[18:00] two, unbiased area estimation. To get this exercise, if you don't I already have it, make sure you go to our
[18:08] document there, and you can also it's also available available um on the software that you have um
[18:20] to see this webinar. The tools you'll need for this exercise is is ArcGIS um 10, but we're only going to be
[18:30] using it for short a very short while. Mostly, we're going to be using Excel. And creating a new error matrix. So,
[18:41] we're going to be spending a majority of our time using Excel. The other thing that you're going to
[18:47] need is the land cover map that we gave you for this particular exercise. You won't need the points for this one, but
[18:55] you will need the land cover map just briefly. So, that's what I have showing right now in Arc uh GIS. So, we'll go
[19:03] ahead and get started with this exercise. The first thing we're going to need to do is get the area of each land cover
[19:15] type in this particular map. And we can do that in ArcGIS. And to do that, you right click on the
[19:23] name of the file and you open up the attribute table. And here's the attribute table here. And you'll see the values which
[19:34] represent the classes here: water, agriculture, hardwood, conifer, grass, shrub, and bare ground. And then you see the pixel counts. And those pixel counts
[19:45] are what we need to put into our spreadsheet. spreadsheet. So, what I'm going to do is copy those numbers into the spreadsheet.
[19:57] And then from here on out, we will be using the spreadsheet and we'll be able to close ArcMap.
[20:07] So, So, off screen, I'm going to What I'm going to do is copy in those pixel numbers and
[20:14] then I'll bring it over for you to see. So, the first one Actually, what I'll do is I'll bring
[20:21] over the spreadsheet first. I'll switch things. things. I'll bring over the spreadsheet. So, this is the spreadsheet, the template
[20:30] that you should be using for this exercise. This template you can also download from the RZ website. Um and it's Excel
[20:41] format, it should be already set up for you to go. It should look exactly like this. this. All right. So, what I'm going to do now
[20:49] is actually type in these counts into the spreadsheet that I'll be showing you in just a minute. So, the total area of
[20:59] pixels for each class will be three 3 6 8 1 for water, 2 3 2 5 2.
[21:11] For agriculture, 1 1 7 5 2 0. For hardwood, 7 0 4 6 9. For conifer, 1 1 1 1
[21:29] 8 9. For grass shrub, and lastly, 7 8 8 6 5 for bare ground. Okay, that's all we need from Arc right
[21:43] now. I'm going to go ahead and close this, and I'm going to bring over my spreadsheet, and you'll see where
[21:50] I've typed those in. So, let me me talk through the spreadsheet a little bit. We have our
[22:00] error matrix that we created last week here on this top part of this spreadsheet. So, on the
[22:07] far left-hand side, we have our classified um classes. So, we have our classes listed here. We also have the
[22:14] classes listed across the top, which are our reference pixels. Um we have all our correct and incorrect pixels filling out
[22:25] this spreadsheet. And on the right-hand side, we have our total classified points. And on the far right, we have
[22:32] total area in pixels. So, this is just what I filled in just now. I'm highlighting these from the Arc map.
[22:43] And the next thing we'll want to do is sum those pixels, and you can just do that by clicking on the auto sum, and it
[22:50] will sum those pixels. So, with this information added to your pixel-based error matrix, we will be able to create a whole new error matrix
[23:01] that's focused on getting unbiased area estimates for each class. This is all you need. So, just my advice for doing this particular
[23:13] exercise is maybe to listen to me go through this all because it will be a little hard to follow. There's
[23:20] a lot of calculations to put into these cells. cells. And then And then listen to the recording again a little bit later when
[23:27] you have a little bit more time and you can walk through it yourself. That would be my advice. Um but if you
[23:34] can follow through as as I'm doing it, then I recommend you can do that as well. well. So, the next thing we do after we put in
[23:44] the total area of pixels for each class, um we want to convert that to hectares. And in order to convert it to hectares,
[23:53] we have to multiply by 900 squared and divide it by 10,000 squared. So, the formula for that
[24:03] I'm going to put into this cell right here. This top cell right here. So, it takes the total area of pixels,
[24:19] multiplies it by 900 and divides it divides it by 10,000. And so, for this In this case, you get
[24:30] the total area of hectares is 331. And then you'll want to do that same formula all the way down for all the
[24:38] classes. So, you can just drag the plus like Amber showed you last week and do the same thing for all the
[24:44] classes. classes. And then we're going to want to calculate the sum again, the total hectares for all the classes by just
[24:52] clicking on the sum. And we get the total reference points um in hectares. Then the next thing we're going to want
[25:06] to do is calculate something called the stratum weight or W sub I. So what that is is the total
[25:14] individual class area in hectares divided by the total area. So what that looks like is this. So for water, you want the total area in
[25:29] hectares, which is 331, divided by the total area in hectares for all the classes, which is 3,000 3,648.
[25:43] And this is your answer. So this is called the stratum weight or the class weight. weight. And you want to copy that all the way
[25:51] down. So you get W sub I for all the classes. And then if you sum that, you should get
[26:03] one. Okay, so for the next step, we are going to calculate um area proportions. So area proportions are going to be
[26:32] um um we're going to be creating a new error matrix right here. So we're going to be
[26:37] starting to fill in this matrix down here, similar to what we did with the pixel-based error matrix above. But the
[26:47] formula will be a little bit different. The formula for area proportion for each class will be this W sub I, so the stratum weight,
[27:00] multiplied by the total the pixels in each class divided by the total pixels for each class. Okay, so what does that
[27:09] look like? I'll show you. So, that again is the stratum weight. So, for water, it's this number right
[27:22] here, 0.00909, multiplied multiplied by the pixels in each class, which is five, divided by the total classified pixels
[27:37] for each class, which is six. Okay? Okay? So, So, also just to let you know, if you're
[27:45] following the exercise that we've given you, the formulas for this are actually in that exercise. So, it'll make it a
[27:52] lot easier for you to um to do these calculations is just to use the formulas that are already in the exercise.
[28:03] So, once I've calculated this for water, I'm going to drag it across all the different reference classes to
[28:10] get the same calculation. And as you can see, there are zeros in agriculture, hardwood, conifer, and that's because
[28:20] there are zeros in the pixel-based error matrix across the top. So, we're going to do this exact same
[28:27] thing for agriculture. I'm just cheating a little bit because I'm just copying and pasting formulas in here as opposed to typing everything
[28:40] in because I'm a terrible typer. So, we're going to Once you do it for agriculture, you're going to drag it
[28:48] again across the top. We'll do it for hardwood. Bear with me while I copy and paste the
[28:58] formula in. And drag it across again. We are doing conifer next. So, definitely take your time with this
[29:15] with these calculations because it's easy to sort of get the different cells mixed up. That's why I'm
[29:24] recommending that you sort of watch me go through this first and then go through it yourself. Oops, I just
[29:33] realized see, I'm talking and trying to do this at the same time. It's like chewing gum and walking. Okay.
[29:43] Grass. Copy. Paste. Paste. A lot of zeros. That's okay. Drag those across. Last one, bare ground. ground. Same thing.
[30:10] And it's always good when you put the formulas in, whether you're typing them in or you're copying and pasting them
[30:15] in, to make sure you're getting the right values. So, I'll just double check with bare ground here where we have
[30:21] um the pixel count, where we have the total classified points, and we have the stratum weight. So, those are exactly
[30:27] the values we should be using for this cell. And then again, I'll copy them across. So, now what we want to do is add up
[30:40] both in the um across the columns and down the rows, we want to get the totals of each of these.
[30:47] So, in this case down the the rows with water, we just do a sum. And then drag that across all the
[30:55] different classes. And we're going to do the same um on the side for all the rows. We're
[31:03] going to sum those. And drag them down. And of course, if you do a a sum of all of these, it should equal
[31:17] one. one. Cuz these are proportions. So, the next thing we'll do is we're actually going to copy um some
[31:28] information from the pixel area matrix to our new area-based area area matrix just to make things a little bit easier
[31:36] when we do some future future calculations. So, in this case, we're copying total area pixels, uh total area in pixels,
[31:45] and total area in hectares, and also the stratum weight. All of those things we're going to copy from the top matrix
[31:52] to the bottom matrix. So, all we have to do here is say equals the cell um that you want it to be. Um so, in this
[32:03] case, it's equals I3. Um and then I'm going to copy it all the way down. And we're going to do the same here.
[32:13] Equals Equals J3. J3. So, it's the same as up here, and we'll copy it all the way down.
[32:21] And then, uh the labels are different, but the values are the same. Um the stratum weight is equal to the percent
[32:28] of total. So, I'm going to say equals K3. And do that all the way down. Okay. So now we have everything uh we did we
[32:48] uh all the information that we need to actually determine the class area estimates. So in order to do that, the class area
[32:59] estimates, I'm going to start with water here. here. Is the estimated area proportion, which is what we just calculated, multiplied
[33:11] by the total area in hectares. So I'll show you what that means. So what that is is this number that you
[33:23] just calculated, which is called the estimated area proportion, multiplied by the total area in hectares, which is
[33:32] what we just copied from the pixel-based error matrix. And this is what you get. So this is the
[33:43] area estimate for water. And we're going to do that across all the classes now. You can just drag the plus across. You
[33:52] don't have to type it in. And there you go. You get the class area estimates for each of the classes.
[34:00] Now what we're going to want to do is determine what is the error. The estimated error for these estimates.
[34:09] So this is a huge equation. This is a really complicated equation. So I highly recommend that you sort of type it in
[34:17] once, um and then copy and paste it um because it's easier easy to um easy to make mistakes with this one. And
[34:30] I'll show you what this looks like. So, if you remember right, this particular equation uses a lot of
[34:43] different values in both tables, actually. So, it uses um um the the percent error here in our
[34:54] area-based error matrix, it also uses the percent of the total or the or the W sub of I that we created um based on the
[35:03] total area, and it uses the total classified points from our first error matrix. So, you can see in this formula, it's quite long,
[35:18] and you have to do this for all of your classes. So, that's why I recommend typing this
[35:25] in somewhere first and then copying and pasting in to make sure you're getting all the right cells. And the actual
[35:32] formula, um you can go back to the PowerPoint that I gave earlier to get the actual formula that we're using
[35:41] for this. So, I'm going to just say So, right now it says zero, and that's just because the number of decimals is
[35:48] only one. So, I'm going to increase the number of decimals so you can see what the actual number is. So, if I increase
[35:55] it to five decimal places, you can see there actually is an error in there. And I'm going to So, the really awesome
[36:05] thing about Excel is that when you have these really complicated formulas and you put the dollar signs in the proper
[36:12] spot, you can you can copy it across all the cells just like this. Make your life much easier.
[36:26] So, in order to make these uh standard area standard error of area estimates useful, you want to convert them to
[36:34] hectares. So, in order to do that, um you use the same formula that we used before. before. But, since we already um calculated
[36:46] hectares previously, we can just use I'll show you. We can just use the total area in hectares. So, what you do is multiply
[37:00] the standard error of area estimates that we just calculated by the total area in hectares. And that will give you the standard area
[37:10] of area estimates in hectares. And again, we can copy that across all the classes now. And the last thing we do
[37:26] is the confidence intervals. So, again, if you're using 95% confidence intervals, you simply multiply the standard error by 1.96.
[37:41] So, I will do that now. As you can see, I took the standard area of area estimates in hectares and just
[37:52] multiplied that by 1.96, and that gives you the confidence interval in hectares. So, we will copy that again across all
[38:03] the classes. So, we have everything we need now to look at the estimated area proportions, the error, and then the
[38:12] confidence intervals. The very last thing we're going to do is something similar to what we did last
[38:20] week is that's calculate the users and producers accuracy and you do it exactly the same way as you did with the other
[38:29] error matrix. So first we'll calculate the overall percent accuracy. And that's again summing the diagonals. You can see that diagonals highlighted
[38:47] here here and then multiplying by 100 just to get percent. You don't need to divide it obviously by
[38:57] the total area because that's one. So in this case for this error matrix you get an overall percent accuracy of
[39:07] 78.04, 78.04, so about 78%. Then for users accuracy it's again the same calculation that you did for the pixel base matrix
[39:25] where you divide the the water, um, the correct, um, area estimates in water divided by the total
[39:34] area proportion. And you multiply it by 100 just to get the percentage. So there's users accuracy for water, um,
[39:46] and in this case I have to copy and paste all the formulas for each one because because the locations vary a bit. So I'll do
[39:56] that, try to do that quickly here. There's agriculture. Hardwood. Conifer and I'm reason why I'm cutting and pasting is because again I don't
[40:15] trust my typing. Next is grass shrub. And lastly, bare ground. Oops. Oops. See? Uh oh. The format of that is a little funky. Um
[40:48] I'll change that in a minute. Let's just get on to producers accuracy. So, for producers accuracy, again, it's
[40:56] the same thing as we did as with the pixel-based um error matrix. It is the water the correct water area
[41:13] estimates divided by the total estimated area proportions along the column. So, in this case, it's 100%. So, these are going to be the same.
[41:29] Let's see. Copy. Oh, sorry. I shouldn't do this and talk at the same time. Hardwood will be next.
[41:49] Conifer is after that. Grass is after that. And lastly, bare ground. Okay, so now we have the overall percent
[42:23] accuracy, the user's accuracy, the producer's accuracy for our new error matrix. matrix. Um and it shows up very nicely
[42:34] in this table. I'm going to zoom in a little bit more so you can see it. This
[42:38] table on the bottom. So this is what you can do with this information. Now you have an unbiased
[42:47] accuracy assessment um and you have unbiased estimates of area for each class. So the way to interpret this is
[42:57] for water, the area estimate is 276 276 acres, a little over two hectares, a little over 276 hectares plus or minus
[43:09] 108 hectares based on that 95% uh confidence interval. And then you can see the user's and producer's accuracy for that
[43:19] particular class. Now the interesting to thing to do at this point is compare the area using this approach with the area that
[43:29] you got for uh your land cover classification. So what I'm going to do is copy the total
[43:37] area in hectares for each class. And put it right next to where you can see it and compare it to the estimates we just
[43:55] made. There we go. So for example, this was the the land cover class and I'm just going to put
[44:07] land cover classification right here, so we can look at the difference. is if you compare the unbiased estimates area estimates
[44:21] for water in the case of um water, it's 276 ha, and the land cover classification said 331 ha, so the land
[44:30] cover classification overestimated water by by a little you know, little not too much, actually. It's not too bad there. Same
[44:38] with agriculture. Agriculture, um the unbiased estimate is about almost 1,900 um ha, and the land cover classification said
[44:50] a little over 2,000 ha, um and so forth. So, this allows you to see where your land cover classification has either
[45:01] overestimated or underestimated your classes. So, at this point, we're going to end this exercise. Um again, if you have any
[45:13] questions at all, please feel free to email me as you're going through this, because I know this is um complicated,
[45:20] and there's a lot of formulas you have to put into this Excel spreadsheet. So, please, as you're going through this, if
[45:27] you run into prob- problems, just just email me, and we'll work you through it. Um and at this point, we're going to
[45:34] open it up to any questions and answers that you might have. Hi, everyone. This is Cindy Schmidt, um
[45:46] and I see we have um we've had a couple questions about what W sub I is. Um W sub I is is another name for that,
[45:53] it's the stratum weight. So, if you go to the spreadsheet spreadsheet and that's probably the easiest way for
[46:01] you to see exactly what W sub I is. But it's the the weight, the the percentage of
[46:15] the total area of classified pixels for each class divided by the total area of the whole classified map.
[46:40] So there's a second question here, can we have reference that pixel-based error metrics matrix is biased? So I'm not exactly sure
[46:54] what you mean by that question. Do you mean do you want some reference in the literature about this approach?
[47:10] There's another question, is accuracy is area accuracy better to use than pixel-based accuracy? I think that that area accuracy gives
[47:20] you a better gives you better information about the accuracy assessment because it takes into account the area of each class and then the the
[47:32] percent uh percent correctly classified pixels. So you get a better indication using some unbiased area estimates of
[47:43] the the overall overall accuracy of the map. And plus it gives you better information cuz it does give you an unbiased
[47:59] area estimate for each class, which you can't get um using the pixel-based error matrix. So, question four, could you please give
[48:29] an example how you would describe the classification accuracy using calculated values, especially connection to the area in hectares?
[48:45] I I I'm not sure if I understand this uh what this question is, but the classification accuracy is in percent.
[48:53] It's not in hectares. So, essentially, if you have an overall accuracy accuracy of 78%, that means overall,
[49:08] on average, that the chance that you'll that a pixel will be correctly classified is 78%. It doesn't translate into
[49:19] area or hectares. There's a question. What do you think is the final conclusion about the overestimation in the area?
[49:39] The fact that you find that the land cover classification has overestimated an area is the final conclusion.
[49:46] So, that's just something to be aware of when you're if you're reporting the total area of a class to understand that
[49:54] if you just use the land cover classification, you are overestimating that class. And then you need to go into the error
[50:03] matrix to really understand where you're getting confusion from. So, what is being included in that class that
[50:10] shouldn't be included in that class? So, for example, in our example, we tend to get hardwoods and conifers confused.
[50:20] Um and so, maybe you need to go back to your land cover classification and um figure out some ways to minimize
[50:28] that confusion. So, here's a question. Would this approach help you to decide how to aggregate pixels into polygons to gen-
[50:46] In other words, to generalize uh to a coarser resolution than the native pixel? That's a good question. I don't know if
[50:59] you can if this is a good way to do that. I mean, certainly this approach tells you where you have confusion
[51:05] between classes, but I don't think this approach can tell you how to aggregate your pixels necessarily. So, there's another question. Might be
[51:27] my question is different than accuracy of statistics shown here. Could you please tell us what is the statistic indicates precise
[51:37] accuracy of image classification among kappa then there's a bunch of kappa stuff. So, last week we discussed why we
[51:45] are not including Kappa. In the literature in the recent years, um a lot of researchers are determining
[51:54] that Kappa is not a relevant statistic to doing accuracy assessment. And we can give you some references to
[52:03] some of those papers that have been written. written. But, Kappa we chose not to use Kappa in our
[52:13] webinars because of these findings in the literature. Here's a question. What is the spatial resolution of the classified image? So,
[52:27] the spatial resolution of the classified image is the same spatial resolution as the imagery. So, we use Landsat imagery
[52:35] to do our image classification, which is has a 30-m pixel size. And so, our classified image also has a 30-m pixel
[52:43] size. Can Question 9, can we get a copy of your spreadsheet to make sure we did it
[52:51] right? right? Uh we can include the spreadsheet, but I do believe that we included the answers to the spreadsheet at the end of the
[53:05] um at the end of the exercise. The next question. So, should our numbers match the exercises we go along?
[53:21] Yes, your numbers should be exactly the same same as in the exercise because you are using the same error matrix that is in the
[53:32] spreadsheet as well as the same land cover map that we provided you. If you use a different land cover map and a
[53:38] different error matrix, then of course your answers are going to be different. So, everyone, I want to emphasize that
[54:13] we realize that this particular exercise will take some time for you to go through. There's a lot of equations to
[54:20] put into that spreadsheet, and that's fine. So, if you haven't gone through it yet, yet, I recommend, as I did at the beginning
[54:28] of the exercise, that you watch it first by yourself, and then go through it just step-by-step. Take your
[54:36] time going through it, and then if you have questions as you go through it, then you can send us some emails, and
[54:43] we'll be able to answer your questions. So, here's a good question. How do you recommend to calculate area statistics
[54:57] over time in a consistent manner using maps that are updated with a change detection? So, there's some really
[55:04] good reference information on how to do that, and we can give you those references. This is through um
[55:15] Boston University has developed some methodology for doing area um um assessment change detection error matrix for change detection.
[55:28] Sorry, I'm getting my um words straight here. Um and it's essentially the same process, but you have to understand and
[55:37] you have to know what that change is. So, whether you're doing a error matrix for a land cover
[55:44] classification or you're doing an error matrix for change, essentially your classes are change and no change, and
[55:52] then you might have a few other classes in there as well. But, we can give you the reference to
[55:59] some good methodology that you can use for doing error matrices for change detection. Yeah, somebody mentioned it's this is a
[56:15] very good statistics class refresher. Yeah, there are a lot of statistics in this particular exercise. Uh and so, it does help if you sort of
[56:24] either have a little background in statistics or brush up on statistics um like confidence intervals and things like
[56:33] that. Uh that will help you sort of understand this process a little bit better. So, I think we'll answer one more
[56:47] question and then we'll close it for today. Um this last question is how does users and producers accuracy
[56:58] have influence on future simulation? Does do both have different impacts in terms of errors of omission and
[57:05] commission? So, yes, the users and producers accuracy or errors of omission and commission, so they're the same thing
[57:16] essentially, you're just saying it in a different way, gives you an idea of where you're including pixels in a
[57:23] classified image that you shouldn't be including or you're excluding them. They're put in another class. So, it you an idea where
[57:31] your confusions are. That is the best use of users and producers accuracy to really understand which classes you're confusing with each
[57:42] other. other. Because then you can either go back and redo your classification and try to figure out how to separate those
[57:53] classes a little bit better. Or you just have to understand however you're using that map and everybody has a different use for their
[58:02] maps that you're going to have some confusions between certain classes. Those Those are really the best uses of
[58:09] those particular errors, errors of omission or commission or users or producers accuracy. All right, everyone. So, at this point I
[58:37] think we will close the session. We'll end the session. session. We thank everybody for attending this week.
[58:46] week. If you have any questions as you go through this again, please feel free to email me and I'll try to walk you
[58:52] through some of this stuff. So, thanks again and hopefully you'll be able to join us for our next webinar
[59:00] series. Thanks, everyone.
