# Improving a Supervised Land Cover Classification, Part 2/2

`https://www.youtube.com/watch?v=6Tv3QxGpMro` · id 310 · 2:08:58 · module 93 — Land Cover Classification with Satellite Imagery

[00:01] hi everyone this is cindy schmidt and i think we'll go ahead and get started with our webinar this week on land cover
[00:09] classification from satellite imagery for this course i'm going to provide an overview of land cover classification as
[00:20] you know and how it works i will not be demonstrating how to acquire landsat imagery that's covered in the prerequisite
[00:28] exercise so all of you should know how to do that last week i provided step-by-step step instruction on how to convert digital
[00:40] numbers to reflectance values how to clip landsat image to a vector shape file and how to create training sites
[00:48] for a supervised classification this week i'm going to show you how to analyze those training sites to improve
[00:56] your land cover map so more specifically i'm going to review training sites special spectral signatures and then demonstrate an
[01:08] exercise in qgis on how to create more than one spectral signature for each class and also how to analyze
[01:15] spectral signatures as i mentioned before because this course is four hours the format allows you to do the exercise on your own and
[01:24] ask questions if you run into problems so first i will review training site spectral characteristics okay okay so we'll get
[01:38] started with turning data into information this is a review from last week week so last week i told you that it's
[01:46] important that you understand the difference between a spectral class and an informational class a spectral class is a group of pixels
[01:55] that are spectrally similar an informational class is a land use or land cover class of interest so image classification is the process
[02:05] of assembling groups of similar pixels into classes that are associated with informational land cover classes in the images below
[02:15] image classification has been used to transform the satellite image of panama on the left to the land cover map on the
[02:22] right so that's what we'll be doing this week a supervised classification method requires the analysts to select training
[02:32] areas where they know what is on the ground ground then they digitize a polygon within that area
[02:38] area these known land cover types can be identified through field work or through the visual interpretation of
[02:45] area photos or high resolution imagery like like through google earth each known area has its own statistical
[02:54] characteristics or spectral signature the image shows three simplified land cover types conifers water and deciduous vegetation and their associated spectral
[03:05] signatures the key to classification and i can't stress this enough is understanding spectral variability looking at the spectral signatures
[03:22] between vegetation and soil you can see that it's easy to distinguish between vegetation and soil but it's much more
[03:30] difficult to distinguish within these broad classes if you translate the graph on the left to the plot on the right
[03:40] you can see that some of the vegetation pixels pixels are spread out but some are quite close
[03:45] together together and this is the same for the soil pixels so this is what causes confusion within
[03:53] broad land cover classes when you do supervised classification or any classification for that matter the spectral signatures from the
[04:06] training areas are then used to categorize each pixel or each segment in the image resulting in the entire image
[04:13] being classified sometimes the pixels don't fit the spectral characteristics of the training signatures signatures in that case the pixel can remain
[04:23] unclassified it depends on the algorithm that you use for classification and we'll discuss that shortly and we'll
[04:30] also also also be demonstrating how that works in the the qgis exercise today as a reminder and i told you um you know
[04:48] i went over this last week but there are some key characteristics of training sites that you need to know
[04:54] as a general rule if you are using n bands of data then you should collect more than 10
[05:02] times n pixels of training data for each class class in reality it isn't a huge concern because most people will not bother to
[05:11] determine the total number of pixels for each class but the point is that you want to make
[05:16] sure you collect an adequate numbers of pixels per class and some of the next rules will address that
[05:22] also i want to mention that that you know ideally you want to get the most number of pixels you can per
[05:28] training class but then there's some reality reality reality checks there where if you're doing field work you can only go to so
[05:37] many field sites so there's some resource limitations or access you can't get to these places so although these are general rules it
[05:46] just depends on the area that you're going to be doing the classification is in the size of the training site must be
[05:55] large enough to provide accurate pixel values but not too large to include pixels that don't really belong to that
[06:02] class it's important to select training sites in various parts of the image not just one small area and that's again
[06:09] to capture the full variability of that particular class it's also important that you have more than one
[06:17] and ideally maybe five to ten training sites per class last week we only picked one training site per class but that was just to kind
[06:26] of show you the process and lastly each training site should have fairly homogeneous pixels the idea with all of these rules is to make sure
[06:36] that you're capturing the variability of each class but not too much variability once training sites are selected
[06:49] classification algorithms are then used to classify the whole image by comparing spectral spectral characteristics of each pixel to the
[06:57] spectral characteristics of the training sites sites so there's lots of different algorithms out out there and we discussed a few of
[07:04] them last week the qgis plug-in has three minimum distance max maximum likelihood and spectral angle mapping so now i'm going to talk a little bit
[07:24] about what we're going to be doing in qgis this week the supervised classification process flow involves selecting training sites
[07:43] editing and evaluating signatures classifying the image and evaluating the classification classification last week we selected one training site
[07:52] per land cover class and then classified the image this week we will be selecting multiple training sites per class and evaluating
[07:59] and edit training site statistics and then we'll classify the image last week we defined the macro class
[08:14] as broad land cover categories as you can see here with the classes as the subcategories so in this example we have
[08:24] vegetation as the macro class and grass and trees as the subclass or class as qgis calls it
[08:33] this week we're going to do do it a little bit differently so this week the macro classes will be a little more
[08:45] specific so they'll kind of be like our classes last week and then we're going to use the class
[08:52] the classes the subclasses to define multiple training sites within each macro class there's various ways you can
[09:00] do this in qgis but this was kind of the most straightforward way so for example we'll have a water macro
[09:08] class class with water 1 and water 2 as classes so they'll both represent that water macro class but they'll be two different
[09:17] regions of interest or signatures and the same with forest and so on i'll give you a table of all the classes that
[09:27] we're going to identify after we create the training sites we will edit and evaluate the signatures there's many different ways you can do
[09:44] this in in q gis and we're not going to do all of them but i'll give you a
[09:48] sample of a few and hopefully give you enough information where you can kind of play around with
[09:54] it yourself in the next several weeks first we're going to visually analyze the classification by creating a preview
[10:04] classification similar to we did what we did last week however this time the classification will be created using something called
[10:12] the land cover signature classification so rather than using an algorithm we're going to use this land cover signature
[10:19] classification and that uses the statistics of the training sites so it does it the minimum and maximum
[10:27] values of the training sites define a spectral threshold for determine determining determining which pixels belong to that class so the
[10:35] preview can be used to determine where you haven't captured all the spectral variability in the image because it
[10:42] won't classify pixels if they don't fit within those thresholds of the signatures signatures so one way to improve the classification
[10:51] is to change the thresholds of the signatures to include or exclude pixels and we'll be doing that in today's
[10:58] exercise exercise we will also analyze the training site statistics by assessing the similarities between the training sites for all the
[11:07] land cover classes generally if there's similarities between classes then you know you'll be getting some confusion so then at that point you have to make
[11:18] to some decisions on what to do do you edit one of those classes do you delete one of the class or one of the
[11:25] signatures signatures there's there's lots of different possibilities possibilities and so as you can see this is a really
[11:33] very iterative and time-consuming process lastly lastly i do want to remind you to seek out support from all the great qgis user
[11:51] guides and support networks that are listed here especially if you're having some general problems with qgis and also don't forget to download the
[12:01] plug-in the scp plug-in manual to provide you with additional support for the plug-in it's really a great manual
[12:08] and it has some good tutorials in there as well so i highly recommend that you download that
[12:14] that that manual so here we go we're going to get started with our qgis exercise so what we're going to do this week is
[12:29] we're going to take um the image the landsat image that we clipped last week to the calaveras
[12:38] county boundary and we're going to classify it again so the only thing you really need from last week
[12:45] we're not going to bring up the new that project we're going to create a new project project is that
[12:51] landsat landsat calaveras image so i'm going to do this all i don't have anything canned this week
[12:58] week so uh and i have to do i do have to tell you that i ran the classification
[13:04] yesterday just as a practice and qgis totally crashed on me so it's entirely possible we'll have that
[13:11] happen today which is fine because then you can see what happens in real life but we'll just go with it
[13:18] so i'm going the first thing i'm going to do is open get that image on here and it's called landsat
[13:30] calaveras calaveras so i'm going to look for it here there it is and i'm going to open it
[13:38] and there it is in its crazy colors so if you remember last week we used the properties to change the colors on this
[13:48] to make it look better i'm going to do that again this week just because i like doing it but
[13:54] on my mac at home i figured out it's this rgb option at the top of the of the um
[14:04] plugin seems to work pretty well with changing the colors so we'll do it both ways oh somebody just told me that i'm using
[14:15] a very old qgis version yeah i i i believe you're probably right the problem is with software on my computer at work is
[14:27] that i can't install new versions i have to have my administrative person do that and and sometimes that's like
[14:36] pulling teeth so some of you may know what i'm talking about here so i'm sticking to this
[14:43] version because one i know it works and two because then i don't have to pull any teeth
[14:48] so i'm going to change the colors on this and bring this over here and we'll do it the same way we did last
[14:59] week and then i'll show you the other way so ben i like this band combination as i mentioned last week you can choose
[15:08] any band combination that you want some people like to have vegetation as green which i do i like to bring in the
[15:16] shortwave infrared band and show vegetation is green but some people like to show it as red so
[15:24] do whatever you prefer so right now i have band 5 in the red band band 4 and
[15:29] the green band and band 3 and the blue band and somebody just asked this is the part
[15:39] i had a problem with last week where do you get the minimum maximum values in the band so
[15:44] supposedly that the minimum and maximum value should already appear um and then you have you do have to say
[15:52] load here so it's really important that once you change your band combinations that you press this load button because
[16:01] if you don't it doesn't get the right minimum and maximum values okay and then you click okay
[16:11] and i'll wait till it shows up on your screen there it is okay so there's the image that we're going to work with with
[16:22] a giant burn scar in the middle should be a big purple scar i think some of you
[16:28] had downloaded a different landsat image it's okay if you don't have this exact same landsat image the process will still work i don't want
[16:38] you to have to go back and download a whole another one so so for example the class that we're going
[16:48] to the burn class that we're gonna select here you may you won't be able to find that class so
[16:54] if you have a different image that doesn't have this giant burn scar in it just just don't worry about including the burn
[17:02] class that we do in this one but you can go ahead and do all the other classes
[17:08] okay so at this point i want to show you the classes that we're going to be working with
[17:20] because there's a lot more okay so you should be able to see my word document right now and this is a
[17:27] table i created it's in the exercise i find with especially when you're doing this this this technique in qgis to have a table
[17:38] like this it's really helpful so you don't get mixed up with the numbers you remember which number corresponds to
[17:45] which class and so forth so as you can see on the left hand side we have um different macro classes um
[17:54] they're more specific than what we did last week so we have water forest oak burned area and for those of you
[18:02] that have a different land landsat scene don't worry about including burned area because you don't have a burned area
[18:10] forest harvest and bare ground okay so there's a macro class id that corresponds to each of those classes
[18:19] and then the class names will just be the same as the macro class names but then they have one two and three after
[18:27] them so we have for example water water one two and three force one two or three etc
[18:34] etc and then the class id will correspond to that that um and so having this table in front of
[18:40] you is really again very helpful in trying to remember when you're creating the signatures kind of what class belongs to what
[18:50] number okay okay now i'm going to go back to qgis i'll wait till you see it on your screen
[19:04] there okay and we're going to go into the scp doc so the way i have my set up
[19:19] is i have these two tabs on the bottom some people have them kind of floating around there's different ways you can
[19:26] set up this plugin but i find it easier to have it sort of in these tabs in the bottom
[19:33] also i do want to show you this actually i'll see we're going to see if this actually works so if you click on the
[19:40] rgb tab on the top hopefully you can see it now and you go to 432 see it doesn't change it's funny when i
[19:53] did it on my mac last night it changed it it oh you know why because i need to put
[19:58] the input image okay so let's put the input image first so again if you click on input image and
[20:05] there's nothing there click the little refresh and then your input image will show up okay okay so there it is it tells it what the
[20:17] input image now we'll try and change the band combination there we go okay so one way to change what you're looking at
[20:31] is with this rgb radio button in the panel across the top this is part of the plug-in which is kind of nice it
[20:38] makes it easier rather than using properties in the layers panel but i like using properties is you can click on that and then
[20:47] you can actually this only has 432 and 321 as the options and i like using as you all know
[20:56] 543 543 so we can change that if we go into tools and i'll wait till that shows up for you
[21:13] okay okay and then i believe it is not settings i have to find it now tools tools oh here it is okay if you go to tools
[21:30] in the plugin and then my rgb list was way off to the right so i just clicked on it next to lcs
[21:40] threshold right here and then you can actually add an rgb combination and you do that by clicking
[21:49] on this add row and wait till you can see that right there there and a little row will show up and then
[21:58] you can put in five five let's see there we go you have to double click on it
[22:12] okay five four three okay i'll wait till you can kind of see that on your screen and you can see when i actually selected
[22:32] that my image turned the color in the pack so now that will be an option for you
[22:39] i'll close that and then if i go back up to rgb and wait you can see that if i go
[22:46] back up to rgb that 543 is now there so i can go between four three two and five four three so whatever you
[23:04] prefer okay so that's a good way to change your band combinations if you don't want to do the properties in the layers panels
[23:14] so now we have to define a training input so we're going to click on we're going to create a new training input
[23:25] by clicking on the new training input i'm going to navigate to the folder where i'd like this to go
[23:41] and i'm going to call it training 2 training training 2. and save that okay so at this point i would highly
[23:56] recommend that you save um this project because last week as i said i forgot to save my
[24:08] project and i um and then when my classification crashed i couldn't bring everything back so i'm going to just call this
[24:22] calaveras calaveras class class 2 and i'll save it and then we'll save it again after we do
[24:34] all the signatures after we collect all the signatures okay so next we click down here on classification doc
[24:48] so this should look familiar to you i'll wait till it shows up there for you this should look familiar because this
[24:55] is what we did last week however last week we only collected one signature signature per land cover class this time we're
[25:03] going to collect three so i'm going to bring back the word document just to take a look at it again
[25:12] so what we're gonna do first is we're going to collect three water signatures signatures so your macro class id will be one your
[25:24] class name will be water one and then your class id will be one okay so we'll do three water
[25:30] classes first i'll wait till that shows up there okay so i'm going to zoom in to this
[25:45] reservoir right here to get my first water class i'm not going to go over again all the different ways you
[25:55] can collect signatures since we did that last week but for all of these signatures i'm actually just going to
[26:01] use use the activate roi pointer tool that i'm showing you right here so we're zoomed in this is a reservoir
[26:11] resumed into this reservoir i'm going to activate my pointer i'm going to click in the middle of the
[26:19] lake lake i'm just trying to see if i want to change my okay let's just click that
[26:27] there we go so remember also i want you to take a look every time you're selecting a new training area
[26:37] take a look at the distance that's at the top because if your training site is too small you'll want to remember to
[26:46] increase that spectral distance the 0.01 right now for the lake is obviously pretty good so we'll leave it like that and this
[26:54] will be our first signature so what we're going to do is go back over to the mcid we know that we want to keep
[27:03] that one we want to keep the cid as one we're going to change mc info to water
[27:14] and we're going to change the c info to water one water one hopefully you guys can all see that and
[27:24] then we're going to save the signature we'll click click the little save temporary roi to training input
[27:34] okay and again the signature pops up in the signature list on the top the color is not what you want the color to be but
[27:44] don't worry about the color right now we'll we'll deal with the color a little bit later right now we're just going to
[27:49] collect signatures so let's zoom out to the whole image again and let's collect another signature we're going to
[27:58] there's not a lot of water in this image as you may notice but there's a few small little lakes so there's one just
[28:07] to the east of the burn scar it's a right here oh wait so you can see that zoom in
[28:17] that's a little lake area just um to the east of the burn scar so we're going to click on the activate roi
[28:25] pointer we're going to click in the middle of that lake and that's a nice little training site
[28:32] there region of interest the mcid will stay as one because it's still water the cid will increase is two
[28:41] so the c info we'll want to change from water 1 to water 2. and then we'll save that signature
[28:57] okay so you'll see that pop up on the roi signature list we're going to create one more
[29:06] so i'm going to zoom into another sort of part of a lake that's in right on the
[29:11] border of the image it's right here here oh wait until you can see that and i'm going to again click the pointer
[29:22] click in the middle of the lake and there's a training site and this time we'll call it cid3
[29:31] so this will switch to water3 and we'll save that okay so wait till you can see that saved
[29:44] so by at this point we have three signatures uh again ideally in a in a real classification
[29:52] you'll want to have more than three even depending on the size of your image but we're just gonna do three
[29:58] um for the next several several signatures that i'm gonna get i'm gonna go through it fairly quickly
[30:06] so let me know if you're missing something or something you don't understand i'll try to keep an eye on
[30:13] the comments um on the questions here it's kind of hard to do both but i will try to keep an eye on the questions
[30:19] to make sure i'm not going too fast but the idea for collecting these training sites sites will be similar across all the classes
[30:28] so i'm going to zoom back out and i'm going to bring up my word document again wait until you can see that
[30:36] okay so our next class will be forest so that will be macro class id 2 and then
[30:42] the class ids again will be 1 2 and 3. so i'm going to move that so forest
[30:51] in this case again i'll explain what's in this image a little bit we have a lot of stuff going on in this
[30:57] image image on the to the west or to the left of the scar is a lower elevation and in
[31:04] california at the lower elevations tend to be more oak trees and grasses grasses and and chaparral chaparral shrubs that that sort of thing
[31:17] and then where the fire occurred it's kind of in a in a transition zone between those oak
[31:24] trees and conifers pine trees so as you go move east east of the fire scar or to the right of the fire
[31:33] scar you get into more and more and more um conifers or pine trees at higher and higher elevations so
[31:41] um that as you go to the east the elevation gets greater and greater so that's just to explain what it is that
[31:49] we're seeing here so forest by forest what i mean is mostly conifers so i'm going to zoom in
[31:58] to an area that's east of the fire scar let's see we'll go to something like this this and wait till you can see that
[32:10] okay okay so right now i'm going to leave the distance as point 1 and we're going to
[32:14] select again activate the roi pointer i'm going to put it into one of the kind of the darker green areas
[32:23] like this and i'll wait till you can see that training site it's pretty small so what i'm going to do is actually
[32:37] increase the distance a bit i'm going to increase it to 0.05 and try to get a little bit bigger
[32:45] training site so the every time you create a training site with the roi pointer it's a temporary training site so it doesn't
[32:53] save it yet so you can just create a new one one and it will it'll just do that so if i use 0.04 as
[33:02] you can see i'm going to move this down a little bit that training site is much bigger and i
[33:09] think we'll just go ahead and go with that one so the mcid when we go back to the left
[33:16] the roi creation should increase to 2 and the c id should decrease to one so it should be two one
[33:25] we change mcinfo to forest and we change c info to forest one and we save that okay
[33:42] okay then we'll zoom out let's go to a different part of the image we'll go maybe a little bit
[33:54] east of there to get into the higher elevations maybe up here wait until you can see that
[34:02] there we go again again i'll leave the distance as 0.04 i'll click on the pointer click in one of the dark areas and there
[34:13] we get a nice training site so the mcid on the left will remain as two the cid will will be two
[34:25] and then we'll change c info to force two two and save that okay so let's do one more
[34:35] we'll zoom back out let's let's do one at lower elevations thank you wait till you can see that
[34:52] okay okay we'll point put a pointer in there put it on one of the kind of the darker
[34:58] areas areas that's a big training site we'll leave it like that we'll call this forest three save that
[35:12] okay okay so next i'm going to bring back my word document and we'll see what's next so next we have oak oak one two and
[35:24] three so i'll zoom back out so as i said before the oak woodlands tend to be at
[35:36] lower elevation so i'm going to go to the left or to the west of the burn scar to to pick some
[35:44] different areas there so i'll do one right here and wait until you can see that okay okay i'm gonna leave the distance at point
[35:56] four again and we'll click on one of the light areas and there's a it's kind of a small
[36:06] training site but i think we'll leave it at that so your mcid is going to increase to
[36:13] three your cid is going to decrease to one so we have three one and we change the mc info to oak
[36:22] and the c info to oak one and we save that okay okay so let's go to a different area zoom
[36:32] back out zoom in maybe a little to this area just east of the reservoir and wait till you can see that
[36:45] there we go create a there's a lot of variability here as you can see a lot of stuff going
[36:54] on not all of it is oak some of the vegetation you see here is probably probably chaparral or shrubs but we're just going
[37:04] to go go with the oak and click somewhere in the green area it's kind of a small
[37:11] training site but we'll go with it the mcid and the cid state that it's 3 2 will change c info to oak 2.
[37:22] and save that okay let's make one more i'm gonna zoom back out and zoom in to an area maybe
[37:37] [Music] just a little bit south south of the burn scar you can see that okay we'll select another training site
[37:53] in there for your purposes obviously you don't know this area very well or at all um and
[38:04] and you know just don't worry too much about the accuracy of what you're doing you don't have to
[38:10] pick the exact same areas that i'm picking picking again this is just an example of how to do this and i'll
[38:18] show you how to analyze the training sites as well you will know your area better than anybody you know
[38:24] and and and and you can really truly only do supervised classification if you know an area so
[38:31] this is just for example don't worry too much about getting the exact area that i'm getting okay so
[38:39] we want to change c info to oak 3 at this point save that okay we've got a few more classes to do
[38:51] so hopefully you're able to follow along the next we're going to do is burned area so for those of you that have a
[39:01] different landsat scene don't worry about doing this one for burned area because you probably don't have a burned
[39:07] area in there that's okay because you can just work with the class the other classes that we have you'll just have to
[39:12] re-number those macro class ids to skip the burned area okay so we'll do burned area right now i'm going to zoom
[39:20] back out i'm going to zoom into the burned area all right you can see that okay so if you look at this burned area
[39:36] so all the purple is where the vegetation is burned and you can see all the different purple colors that we have
[39:42] so there's a lot of spectral variability and we want to try to capture that with our training sites
[39:49] so we're going to click in a couple different areas here one is kind of this lighter purple area
[39:57] i'll just click somewhere in here and and you know we might want to increase the distance distance a little bit
[40:09] i'm going to give that a try i'm going to increase it to 0.08 and do a different training site
[40:20] yeah so that gets a little bit more variability for that particular training site site again again you know as you can see this is a very
[40:31] there's not a hard and fast way to do any of this you kind of have to understand your area understand you know
[40:39] what your training sites what you're collecting and then the spectral variability within that training site so your mcid is going to increase to
[40:48] four your cid for the first training site will decrease to one we change mcinfo to burned i'm just going to call it burned
[41:01] area and then your c info we'll just call it burn one not run can't spell sorry burn one
[41:22] my phone is buzzing because there's a emergency flood alert i'm in california and we're getting a huge
[41:29] rainstorm today so now there's an emergency flood alert in our area no worries we don't have any i don't think
[41:36] we're going to get flooded out here okay so there's burn one let's do another one and it may be a darker area
[41:46] so there's some darker purple kind of further north of here so i'll just pick an area in here
[41:55] that's a big training site we'll keep it we'll call it burn two save it okay let's pick
[42:08] one more area and i'm going to pick kind of a shadowy area i think like on this side here
[42:33] okay and i will call that burn three i see there are some questions popping up here can we edit the mcid i forgot to change
[42:51] it it um that's a good question i think what i ended up doing before was deleting deleting the signature
[43:03] if you make a mistake and you save you know something that's not the right number i'm going to first calculate burn 3 here
[43:13] so you can delete a signature you can select it and delete it by clicking on this delete highlighted
[43:19] items and then you can re-do it yeah and then i think you can also manually change the
[43:34] values in here as well i think you can go in here and actually change the values okay i'm going to zoom back out our next
[43:46] class will be forest harvest wait till you can see that forest harvest will be number five okay let me show you what that is
[44:05] so forest harvests are areas where mostly private logging companies have gone in and logged the conifers and so you can see it pretty clearly in
[44:15] the imagery i'm going to zoom in to an area east of the burn scar so all these little i'll wait till you
[44:24] can see it i'll see the zoom there we go so all these little pink um um kind of squares and different shapes in
[44:33] there are areas that have been cut mostly to private timber companies to cut the conifers and they cut them in these little squares
[44:44] you can see them there's kind of varying levels of colors in here the pink means it's probably
[44:50] been recently cut so it's a bare ground and then some of them you can see some that are where vegetation is growing
[44:56] back you can see some green in it and then some of them you can see where there's a lot of green in them where
[45:03] they're probably older cuts and a lot of vegetation has grown back so we're just going to focus on
[45:10] the bare ground areas for our forest harvest harvest so i'm going to collect a few training sites in here they're going to be small
[45:23] because they're small areas so there's our first one and our mcid will increase to five our cid will go down to one
[45:36] we'll call this forest harvest and and our cie info will be harvest one so as you can see this week you know by
[45:50] the more signatures you collect sort of the longer process it is and i'm going through this pretty quickly
[45:57] you definitely want to take your time with this because you'll see later how the signatures although we'll be able to edit the
[46:05] signatures later but collecting signatures is a really important part of doing the supervised classification i'm going to collect
[46:13] another one just in the same area i'll call this harvest 2 and then i'm going to collect one more
[46:25] maybe off to the west of here way over here and i'll call that harvest 3 and save
[46:43] so we're getting a lot of signatures here here okay okay almost done our last one i'll bring up the word
[46:51] document again is our last one is bare ground so we have as our class six so i'm going to zoom back out
[47:10] we're going to zoom in so most of the bare ground except for the forest harvest there so you can imagine there's
[47:16] going to be some confusions between the bare ground and the forest harvest but we're going to go with it
[47:22] our most of our bare ground is to the west of the fire scar kind of near that
[47:28] reservoir where you can see all that kind of pink and white so we're going to zoom in to that area
[47:38] now wait till you can see that okay okay so you see a lot of different colors here
[47:46] here so we're gonna pick just an area i'm gonna pick one of the white areas right now
[47:56] and we have our distance at 0.08 so it's getting quite a few pixels we'll leave it we'll leave it at that that's fine
[48:04] so the mcid increases to six the cid goes back down to one we're calling this bear ground
[48:14] and we'll call it c info will be bear one one and we save it okay let's pick one of the pink areas
[48:29] maybe like here oops we'll we'll pick this first pink areas maybe like here oh that's another big one
[48:43] let's just keep it this is 6 two so we'll call it bear two and the last one let's move a little bit
[48:58] further this way and which you can see what i just did okay okay and we'll pick one over here somewhere
[49:19] okay okay it's our final training site these are very large training sites by the way i would probably
[49:27] normally normally decrease the distance and this is bear three okay so at this point you should have unless you don't have a
[49:43] burn scar you should have 18 spectral signatures and and so now what we're going to do is we're
[50:01] going to sort of analyze our signatures and see where we need to make some improvements so i'm going to zoom back out
[50:17] and and we're going to first use the preview classification so we did that last week to look at our
[50:26] signatures we're going to use that preview classification to take a look at how we did with collecting signatures
[50:40] so first what we're going to do is is choose colors for our preview classification so in order to do that
[50:50] below roi creation oh first of all before we even do that i want you to save your project
[50:58] so everybody just go ahead and save it right now because you've created all these signatures signatures if something happens we don't want to
[51:05] lose lose those signatures so i'm saving it okay now we're going to below roi creation we're going to click
[51:16] micro macro classes and so when you click on macro classes you can see those macro classes show up
[51:24] and we're going to change this is where we're going to change the colors so you can classify this by your class or your
[51:31] macro class so last week we did class this week we're going to do macro class so we're going to change the color by
[51:39] by double clicking on the color box and i get this kind of color color table that shows up i know on my mac i
[51:51] have a variety of options and probably on more current versions of qgis you may have have different options too but for water
[52:01] we're going to make water blue that makes sense we're going to change forest let's make that a dark green
[52:17] we're going to make the oak a light green you can choose any colors you want for this too
[52:27] i'm generally pretty bad at choosing colors so you may not want to follow what i do um burned area
[52:36] we're going to make let's make it purple i'll make it a dark purple um um forest harvest
[52:52] let's make that orange and then bare ground let's make that a light yellow okay so you should have
[53:15] your colors set there next we want to select below the macro classes we want to select classification
[53:28] algorithm now wait till you can see that and then once we do that you can see where it says use mcid or
[53:39] cid make sure mcid is selected we aren't going to be using an algorithm at this point although
[53:51] just just for the future we're going to be changing that when we do use the algorithm we're going to use maximum
[53:58] likelihood likelihood what we are going to be using is the land cover signature classification located below the algorithm
[54:07] so where it says use lca lcs make sure that lcs is selected don't select algorithm at this point so
[54:17] what we're doing is we're basically checking to see which pixels fall into the the spectral signatures that we
[54:27] created created um and which pixels do not so how do how well did we do at capturing variability
[54:34] in our image okay that's what we're doing with this so next we'll go up to the preview
[54:43] if you remember right the preview is up here on the upper right we want to increase the s to 500 right
[54:51] now it's set at 200 i'm going to increase it to 500 and then you're going to click on the
[55:00] activate classification preview pointer and what we're going to do at this point is is click click somewhere just to the
[55:12] east of the reservoir just to the right of that big reservoir so i'm going to click that
[55:23] and it'll take just a second here and hopefully it doesn't freeze up oh it's freezing a little bit there we go
[55:37] and and now you can see my preview classification so i'm going to zoom into that i'm going to kind of zoom in around the
[55:48] lake we're going to take a look at that actually i'm going to zoom in even a little bit well that's probably good
[55:54] enough enough so when i zoom in let's take a look at what we see here we see
[56:00] the blue pixels where there's lakes obviously we see a lot of light green which is the oak we see a lot of yellow
[56:06] which is the bare ground we see a lot of black there's a lot of black which means there's lots of pixels
[56:12] that have not been classified and then we see some gray where there's a lot of overlap between the pixels okay
[56:21] so so let's figure out some ways to to deal with some of the black first so if you click on and off the preview
[56:31] so let's focus on the lake first if you click off the preview and then you click on the preview
[56:42] what you'll notice is and i'm going to put my cursor in this area right here i'm going to
[56:49] wait till you can see that some of the lake some of the water in the lake did not
[56:54] get classified there's black there actually there's some purple there too but um some of the leg did not get classified
[57:02] so so let's figure out how to include those water pixels as part of the water signature signature so i'm actually going to zoom in a
[57:12] little bit further to that area than i'm talking about okay okay and wait till you can see that
[57:27] and i'm going to click on and off the preview again so you can see this area so i'm going to try to point it out a
[57:33] little bit there's there's there it is clicked off and there it is clipped back on right so there's some area in here
[57:45] that should be water but it's not classified as water so so in order to to classify that area as water i'm going to
[57:57] click back off the preview and i'm going to make an roi in the area where we want to include
[58:11] as part of the water so i'm going to just make an roi like right here in this little area
[58:29] okay so what happens because my distance is fairly big is and this is fine you can do it this
[58:35] way there's a couple different ways you can do this you can create this roi with a bigger distance so that will that as
[58:44] you can see now it's including a lot of those sort of edge pixels so the reason why it wasn't included in
[58:52] that signature is because when i clicked on the lake i clicked in the middle of the lake and it's deeper there on the
[58:58] edges it's shallower so you're seeing some sediment and because my spectral distance was was smaller with the water originally it
[59:08] didn't include those shallower areas so so now if we increase the spectral distance it includes those shallower areas you
[59:17] can see that so this is one way you can do it the other way you can do it is you can
[59:23] um and i'm not finished yet but i'm just showing you a different way you can actually do the um
[59:30] change the values for this signature is if you decrease the distance to 0.01 and you select and you create another roi
[59:41] so it only gets a small area you can do it this way as well okay so what we do at this point we're going
[59:49] to bring up another box we're going to bring up it's called the spectral signature plot and in order to
[1:00:02] look at the spectral signatures more carefully what we have to do is highlight those signatures first um i think in the exercise there's
[1:00:11] actually a typo here it's on page seven seven and we're at the part where it says highlight three
[1:00:19] bare ground signatures in the roi um kind of halfway down a little below halfway down what we want to do is oh it
[1:00:27] might not be page 7 for you guys actually mine's a little bit different but but at this part in the signature it says
[1:00:33] highlight highlight bare ground signatures and what we actually want to do is highlight the water signatures i'll make that change in the exercise
[1:00:42] and make sure we get the updated version on the website apologize for that so we're going to highlight the water
[1:00:49] signatures by just clicking and dragging down so they're highlighted in blue so hopefully you can all see that
[1:00:56] then you're going to click on this little icon below that says add highlighted signatures to spectral signal oh thank you pedro page 11 and 12
[1:01:06] not page 7 is where this is at where um it's in the exercise so we're going to click
[1:01:16] we're going to click on the spectral signature plot and there's lots of stuff going on here as you can
[1:01:22] see okay at the top of this spectral signature plot is the signature list so we're looking at those
[1:01:30] three signatures that we just highlighted the three water signatures and what we're seeing is the minimum and maximum values as you
[1:01:39] scroll across in each of the bands so band one band two band three bend four band five
[1:01:47] band six okay so those give you some statistics we'll talk about the colors in a minute don't worry about those okay below the
[1:01:57] signature list there's a plot and my plots tend to be really funny in terms of how they scale
[1:02:06] you can zoom in and out but essentially what we're seeing on the x-axis is the wavelength and the band number is actually in the
[1:02:17] dotted lines so we have band 1 band 2 band 3 band 4 band 5 band 6 and the
[1:02:22] dotted lines and then the values on the y axis are the pixel values you can zoom in if for me i just zoom in
[1:02:33] using my the scroll on my mouse and i can zoom in okay if you zoom in way in you can start
[1:02:41] to see the signatures a little bit better better it's hard to notice on these on the water signatures because there's
[1:02:50] not much variation across the bands in the water signature as you can see it's very straight but
[1:02:57] but this plot if you zoom way in and i'm actually you can turn on and off these
[1:03:03] particular lines for each signature by going to the signature list and clicking clicking on and off the check mark and
[1:03:15] boxes under s so if right now i'm only looking at one of the signatures signatures you can see in my
[1:03:24] graph right here there's like a green line line and then on either side there's kind of a shaded area so that shaded area shows
[1:03:32] you the minimum and maximum values of that particular signature signature you can turn that those shaded values
[1:03:41] off and on in the plot by clicking on and off the plot value range below the plot so if you click that off do you see
[1:03:49] the shaded values go away and you just see the signature itself or you can turn it back on
[1:03:58] right now we're not going to really work with this plot very much it's good when you start looking at
[1:04:04] comparing other signatures to each other and there's a way to actually adjust the threshold of your signatures through
[1:04:12] this plot but i'm going to show you some other ways to do that so let's click on
[1:04:19] all three signatures again okay so to the right of this signature list there's all kinds of icons
[1:04:30] and what we're going to be looking at is automatic thresholds so you can change the minimum and
[1:04:37] maximum threshold of your signature by these tools right here and what we're going to do is we're going to change the
[1:04:46] threshold using the roi that we just created so where it says from roi that's what we're going to use but let me
[1:04:55] explain the other things that we're seeing here first we have the from roi where you can use a region of interest
[1:05:02] to change the thresholds or you can do it from an individual pixel if if you just want to change
[1:05:10] the thresholds based on a pixel a specific pixel you can do that as well now it's really important that you
[1:05:18] understand what the plus and minus are because i messed around with this earlier earlier and and it really changes the values of your
[1:05:26] minimum and maximum so by having the plus checked that means that whatever the roi that you've selected to change your
[1:05:39] threshold will be added to your current current boundaries your current thresholds for that signature if you select the minus
[1:05:51] that means those values will be taken out of your your so it's a way of making signatures
[1:05:59] smaller so for example if you had a training site that included way too much stuff you can actually tell it what you want
[1:06:10] to exclude okay we're going to include we want to increase the water to include that shoreline area so we're
[1:06:18] going to keep the plus checked okay and then we're going to actually select select one of the signatures and if you
[1:06:30] remember right the first signature was actually that lake um the water signature the water ro roi so we're gonna select that okay
[1:06:41] and then we're gonna click make sure the plus is clicked and then we're going to click from roi
[1:06:51] okay so that will change the minimum and maximum values for that roi to hopefully hopefully include those areas
[1:07:02] that were excluded before so now we're going to kind of check we're going to check on how well we did
[1:07:15] there and make sure i did it right so at this point we're going to close i'm going to close the spectral signature
[1:07:21] plot plot i'm going to zoom out a little bit um i'll zoom out a little bit here
[1:07:33] and then i'm gonna do the preview again the preview classification okay so when i click on preview
[1:07:42] classification the old classification comes up so you can get rid of that old preview classification by clicking on this trash
[1:07:52] can that's to the right of that number 500 and it says remove temporary files so you can click on that trash can
[1:08:00] and it will go away so now let's create a new [Music] [Music] preview classification and see if we
[1:08:11] captured captured if we did better with the water so i'm going to click on the preview i'm
[1:08:17] going to click maybe just to the right of the lake a little bit and i'm going to
[1:08:28] wait okay and as you can see the um the roi is still on there so to turn that off i'm just going to
[1:08:42] click off the roi button okay and then i'm going to zoom in to see how well i did
[1:08:52] so it looks like uh i did much better by including those pixels as part of the threshold for that one signature i was
[1:09:01] able to include that shoreline that sort of more shallow area of the lake as part of that
[1:09:10] water signature so this is just one really really effective method in this plug-in how you can sort of adjust those
[1:09:19] signature thresholds to include what you want to include okay that's that's the first one so next i'm going to
[1:09:28] zoom out a little bit more and we're going to kind of zero in on an area that's to the left of the leg
[1:09:38] kind of to the north left of the lake actually i'm going to zoom out a little bit more
[1:09:44] so you can see that so you see some black areas and the area that i'm looking at i'm going to click off
[1:09:55] the preview okay so the area i'm looking at is is right here hopefully you can see what i'm
[1:10:04] pointing at it's this is an urban area so it's a small town located sort of north a little bit west
[1:10:12] of the reservoir and you can see more urban areas located just a little bit south of that
[1:10:23] and uh and then you see kind of a really light green area that that's like almost in a circle
[1:10:32] shape that's actually a golf course so you can tell that's a it's a populated area but if you click the
[1:10:38] preview back on you notice that those areas are not classified classified so so what that says to me is that we need to
[1:10:48] create a new class and we'll call it an urban class okay so so that's where this preview
[1:10:57] classification can be really effective because it can tell you what kinds of classes what kind of spectral
[1:11:02] variability that you're missing in your classification and in my case i'm missing urban so i'm going to make a new roi i'm going
[1:11:11] to turn off my preview again i'm going to zoom in to the urban area like this i noticed somebody was asking can we
[1:11:27] make a new signature water for water five yeah so um going back to the water by adding um changing the spectral
[1:11:35] thresholds of that one signature that's one way of doing it but another way of doing it is adding a new signature
[1:11:42] absolutely you can make a water 5 signature it does essentially the same thing so i'm going to create a new
[1:11:50] class class first i'm going to create the roi so i'll activate the pointer i'm guessing my distance at .01 probably
[1:11:59] is not big enough because as you can see in this urban area there's a lot of spectral variability but i'm gonna just
[1:12:08] see what happens yeah so if i just choose .01 as my distance it gets like two pixels
[1:12:21] so i definitely want to increase i'm going to increase it to 0.08 and we'll try it again
[1:12:28] so as you can see you know this is a really iterative process there we go if we do 0.08
[1:12:35] that training site seems to work out a little bit better so we're creating a new class if you remember right our
[1:12:47] our bear class was our last one it was mcids6 mcids6 so we're going to call urban seven
[1:12:57] seven so we'll change our mcid to seven we'll do cid as one we call mc [Music] [Music] info is urban
[1:13:07] and c info as urban one and we add that so let's just do a few more urban
[1:13:19] signatures i think that would be a good idea here um we can move just maybe south of there where we see
[1:13:27] that golf course i'm not going to include the golf course because obviously that's vegetated so let's try another area
[1:13:37] here and we collect another urban signature and we'll call it urban two save it and let's find one more
[1:13:55] let's find one more i think there's one over here here we go see this is another urban area but
[1:14:04] there's a lot of vegetation in there but we'll try to get a good training site here yeah i think that's a little big
[1:14:17] i don't like that training site i'm gonna pick another one how about this one see that's that's too big so i'm gonna increa
[1:14:26] decrease the distance to maybe 0.04 try it again let's do this okay okay that's small but that's better than the
[1:14:42] other one which seemed too big to me and we'll call that urban three of course if you were doing this you
[1:14:53] would have a lot better idea of what was on the ground urban three all right so let's take a look at how
[1:15:10] well we classified the ribbon let me zoom back out and i'm going to do the classification preview again
[1:15:22] and i want to trash that one that i just did did so i'll get rid of that one
[1:15:27] and we'll create a new one and let's see if we got that urban i'm going to just do it right in here
[1:15:48] okay okay i'm gonna zoom in oh you know what i forgot to change the color color i'm gonna go see what color my urban is
[1:15:59] okay so the urban is actually like a green color i'm gonna change that to just so i can distinguish it from
[1:16:07] everything else i'm going to change it to a light purple i'm going to trash that preview and i'm going to do another one
[1:16:34] okay okay so let's zoom in and see what we have okay so it looks like we've captured some of the urban anyway
[1:16:46] and probably more than we wanted but but there we go so if i click off the preview
[1:16:58] i'm waiting until you can see that and then you can see where that urban is and then click it back on
[1:17:07] you can see um that i got you know i got some of the urban area so here's the thing with
[1:17:14] urban urban is extremely variable it has a lot of spectral variability and it gets confused with everything
[1:17:23] so and we'll you'll see this later when we start looking at the statistics a little bit more so
[1:17:28] once i define an urban class you'll see it appearing everywhere and as you can see it's appearing along the lake edge
[1:17:35] as is i noticed some of the burn the burn area so burn is obviously getting mixed up with a lot of things so
[1:17:43] you're starting you start to get an idea of what spectral classes are getting confused with what but these are just giving you some
[1:17:52] techniques on how to include classes or um you know work with the confusion the next thing i i want to show you is
[1:18:05] how to deal with clouds so i'm going to [Music] zoom back out we actually it's hard to see them here
[1:18:22] i'm going to turn off the preview for a moment moment um but there are a couple small clouds
[1:18:28] in this image and they are located um to the east of the burn scar and you can
[1:18:36] see a pretty good one right here i'm going to zoom into it i'll wait until you can see that
[1:18:46] okay okay so you can see the little white cloud puff puff and a couple other cloud puffs and you
[1:18:52] can see it's shadow as well so the best thing to do with clouds sometimes you can make
[1:19:00] a cloud mask ahead of time and you can actually pull out those pixels one the other way you can do it is just
[1:19:08] have clouds as a separate class so then we would just pick an roi um um in that cloud region
[1:19:21] oh great matias uh said said isn't it a good idea to save the project again again great idea we're going to do that right
[1:19:30] now we're going to save it always save this because you never know when things are going to crash um
[1:19:40] i'm going to make another cloud signature so the one the reason i'm showing you this is because clouds
[1:19:47] are really variable so i have a distance set at 0.04 right now and i just created a training site and it's really really
[1:19:55] small it's obviously not getting the whole cloud so we're going to increase the distance let's go to 0.8
[1:20:03] and try it again okay so that gets a little bit more of the cloud i'm actually going to go to point one
[1:20:10] and see what happens here and do another one yeah it's um clouds are tough so i it looks like
[1:20:25] there's sort of two separate areas in here so the way you can deal with this is is either have two separate training sites
[1:20:33] you can have this one or you can just keep increasing your distance until you get the whole cloud
[1:20:41] or yes oh you know what that's a great idea pedro or even better use the polygon roi
[1:20:48] um i the spectral one is really good for you to really understand how much spectral variability in there but
[1:20:55] using the polygon roi will capture all that so for you so we'll do that right now now we'll do this
[1:21:02] this this this i'm not even sure if i got it all i probably could do a better job at that
[1:21:11] but but um um if you remember right if you do three corners and the fourth one you can right
[1:21:19] click um and it will close your polygon so well let's go back to roi creation this can be class eight
[1:21:28] mcid is eight cid is one we'll call it cloud and then we'll call it cloud one okay
[1:21:46] and save that i'm only going to do one just for the sake of time here um you might also want to do that with a
[1:21:53] shadow um i just will warn you that your shadows are going to get mixed up with a lot of
[1:22:00] other shadows and other things as well so it might get mixed up with some burn it will probably get mixed up with your
[1:22:08] north facing slopes so even in this particular image that we're looking at you can see some of the shadows just
[1:22:15] north of the shadow that it will probably get confused with so you can give it a try by creating a
[1:22:22] new class if you want with shadows but my guess is that it will get confused with a lot of stuff um and
[1:22:29] there's not much you can do about clouds and cloud shadow it's not like you can see underneath the image you can
[1:22:35] sometimes what people do is they'll fill in with an with a different date image you can do that if you have that imagery
[1:22:42] available um but then you have to realize that you have multi-dates in your image so there's clouds are tough
[1:22:48] luckily there's very few clouds in this particular image hopefully your area of interest isn't underneath that cloud
[1:22:58] okay so i'm just going to leave the one cloud cloud so next what we're going to do is sort
[1:23:04] of analyze the signatures a bit i want to show you how you can look at these signatures in
[1:23:13] different ways so at this point what we're going to do is open up this well first actually sorry first what we
[1:23:24] want to do is highlight all the signatures so let's highlight all of them all the way down so make sure that
[1:23:29] they're all in blue and then we'll open up that plot again again i'm going to make this box pretty big
[1:23:39] so you can see everything so as you can see our plot is crazy it's got all kinds of spectral values in
[1:23:50] there are spectral signatures it's got all of them if you wanted to look at individual ones then you would check
[1:23:56] them off and on on the signature list on the top as i showed you before you can see one signature that's way at
[1:24:05] the top here that's probably your cloud signature signature not because that's going to be really different than and very high
[1:24:12] reflectance value compared to everything else that you have um um again if you if you can look at the minimum maximum
[1:24:21] values of your signatures in the signature list now what's really valuable here is this column that has the colors in it so most
[1:24:33] of you will probably have to expand that column a bit so just expand it open and this is uh this is really great
[1:24:42] because it tells you which which signatures overlap spectrally with other signatures okay so everything that you see highlighted in orange here
[1:24:55] is an overlap with other signatures so as i scroll down you'll see a lot of orange now lots of times
[1:25:05] the signatures are just overlapped with each other which is fine because they all belong to one class
[1:25:12] right or one macro class but but if you look in the column where it says color and
[1:25:21] the overlap you'll see some numbers there and it actually tells you which signatures that it overlaps with
[1:25:29] so for example in in mine right here what it says is my forest 1 signature overlapped with
[1:25:38] signature 4 2 2 and 4 2 is actually burned area it's one of my burn signatures and it looks to me
[1:25:52] like that burn signature is gets overlapped with all my four signatures so that's just something to keep in mind
[1:26:02] let me scroll down and see what else is being confused okay my oak is being confused with something that i
[1:26:09] can't see but we'll i'll be able to show you another way to look at this in a
[1:26:13] minute okay so my burned areas are one of them's getting confused with urban urban one of them's getting confused with my
[1:26:25] fourth classes as we saw before a couple of them are actually harvest is getting confused with bare
[1:26:36] ground and that makes sense right because the the harvest signatures that we selected were actually bare ground so that makes a lot
[1:26:45] of sense and as you scroll down you can see some which signatures like urban again gets confused with everything
[1:26:56] um um so this shows you that is in fact true so this is one way to look at how
[1:27:05] signatures are confused with each other the other thing you can look at is to look at the standard deviations of
[1:27:15] these signatures and the way you look at that is you click below the plot it says signature
[1:27:22] details so i'm going to i'm going to select that and wait until you can see that i'm going to scroll all the way up to
[1:27:32] the top and explain what we're seeing here so for each signature we have the mcid1 info is water so we're looking at the
[1:27:47] water 1 signatures and then it gives you the size of your roi in this case the my first signature
[1:27:57] had had 2 2511 pixels and it tells you the standard deviation for each band so this is interesting to look at
[1:28:09] especially across your different signatures signatures and if you have a particularly high standard deviation that means there's a
[1:28:17] lot of variable variability in that particular signature and you may want to consider deleting that signature and either redoing it
[1:28:26] or or uh or just deleting it all together from your classification um so this just gives you a way to really
[1:28:35] dig into for those of you especially that like to look at numbers instead of graphs graphs this is a really good way to look at
[1:28:44] your standard deviations and if we scroll down to urban so you'll see a lot of these standard deviations
[1:28:50] as .00 something or other which is you know pretty pretty low some are a little bit higher than that if i
[1:28:58] scroll down to urban so you're going to see these standard deviations is higher right so it's 0.02
[1:29:06] 0.02 0.01 part of the reason is because we had increased that distance um quite a bit i think to 0.08
[1:29:15] and and that includes a higher number of pixels so by definition when you increase that distance your standard deviation is
[1:29:22] going to be higher but this gives you the exact number so if you have one particular particular especially if you've created an roi with
[1:29:32] the polygon tool as opposed to the spectral spectral pointer then you really want to take a look at the standard deviations to see
[1:29:41] if you've included if there's too much deviation um heterogeneity in your pixels okay so this is just one tool you can use
[1:29:55] so somebody was asking what does the distance stand for so i explained that last week so i'm assuming you mean the distance in
[1:30:03] roi that's the spectral distance so that's the distance in the values between the pixels and in this case since we converted our
[1:30:12] image from pixel values to reflectance our values range between 0 and 1 so your distances are going to be really
[1:30:21] small so it's just the distance is that is the difference between the pixel values okay then the last thing
[1:30:34] that we want to look at is the the spectral distances there are various measures various measures of spectral distances
[1:30:45] and it gives you an idea again of which signatures are overlapped with each other other so so to look at those spectral distances you
[1:30:56] want to highlight all the signatures in the signature list first make sure highlight everything then on to the right
[1:31:06] of the signature list there's um an icon that's calculate spectral distances so click on that and what will happen is below signature
[1:31:21] details spectral distances will pop up and it's kind of scrolled at the bottom so i'm going to scroll all the way to
[1:31:28] the top so there are four different measures of distance distance and they're really they're measures of separability how
[1:31:40] separate are signatures from each other okay so we have this first one the jeffries jeffries matsu matusita distance
[1:31:50] which is very useful if you're doing a maximum likelihood classification so zero zero means the signatures are exactly the
[1:31:58] same and 2 means they're different there's the spectral angle distance and 0 means they're identical and 90
[1:32:07] means they're totally different and euclidean distance is listed there and then break her dissimilarity where zero is different
[1:32:19] a hundred is absolutely identical um and so that last one is sort of useful for general so they're they're all kind of
[1:32:26] indicators of how similar your um your signatures are to each other so of course if you're looking at the
[1:32:36] same signature within um you know two signatures within one larger class you're going to expect them to be similar if they're not similar
[1:32:45] that's not a big deal because that may mean that you're capturing variability of that class it's just something you
[1:32:53] you want to check on and you want to assess so the other thing that this algorithm does is it tells you that
[1:33:01] everything in red means that those signatures for those measures are particularly similar so probably the first thing you want to
[1:33:11] do is sort of scroll down and see what's in red i'm going to scroll down and see okay so here's one
[1:33:24] a three out of the four distances um and it's water it's my two water signatures water two and water three it's comparing
[1:33:33] so i'm not too concerned that those signatures are similar since they're in the same water class so i'm going to
[1:33:39] keep the ones i be more concerned with are really between classes between the mc classes the master classes so i'm going to
[1:33:49] scroll down i'm doing this kind of quickly but i'm just looking at this point i'm looking for the red
[1:33:55] as an indicator of what might be confused with what oh here's one okay a couple more of forest one and force
[1:34:05] two okay i'm not again i'm not too concerned about that force one and force three three that just means they're very similar
[1:34:14] that's fine i'll continue we have a lot of classes so are a lot of signatures so that's why
[1:34:20] i'm i'm scrolling down through all this here's another one force two and fours three that's fine i'm going to keep scrolling down
[1:34:37] okay here's a couple so it looks like at least for two of the measures my force iii
[1:34:45] signature and my oak 1 and 0.2 signatures are similar so that's just something something that there might be some overlap and
[1:34:52] some confusion depending on what classification method you use i'm guessing i'm going to scroll all the way down to urban
[1:35:05] because urban as i said before gets mixed with everything so let's i'm going to scroll all the way
[1:35:12] down to urban our burn is getting mixed with a lot of things too i noticed okay here's some urban
[1:35:22] urban one is mixed with burn let's see what else is going on harvest and bear of course are confused we saw
[1:35:37] that earlier urban two in harvest yeah so you know the the thing that you do with this
[1:35:48] this is really assess the similarities between these classes and if you're seeing for example similarities across all these different distances you may
[1:35:57] consider again either redoing a particular signature you can delete signatures you may have to sort of rethink your
[1:36:08] classification classification there's other ways that you can deal with some of these issues i think i told you last week sometimes
[1:36:18] when there's to minimize confusion between classes you can divide up your study area by eco regions for example
[1:36:26] or by elevation because sometimes you'll have have some features at some elevations and not at other elevations so it's a good way
[1:36:33] to sort of separate out those areas and then classify them separately um somebody asked can we just manipulate
[1:36:41] the distances to separate them yes i mean and i showed you ways you can manipulate those distances but sometimes
[1:36:48] you have classes that are just too similar similar and there's no getting around it because we're only looked at looking at spectral
[1:36:56] spectral values here you can merge classes somebody mentioned that you can but you have to be careful
[1:37:03] about that because if you're merging it just depends on the goal of your project if you're merging urban and bear
[1:37:13] for example because they're getting confused confused then what do you call that and how useful is that for your final
[1:37:21] classification um you know for for your client or for your work or whoever you're doing that for so
[1:37:29] doing a purely spectral classification is really challenging i i think most people who have higher accuracies in
[1:37:37] doing land cover classic classifications awful often will bring in ancillary data to help them deal with some of these confusion issues
[1:37:52] oh yeah somebody was mentioning you can merge merge you can merge your spectral classes absolutely so you can
[1:37:59] um um you can go back um um into your classification your signature list and if there are class if there are
[1:38:10] signatures that are particularly similar to each other you can um you can actually merge them together into one
[1:38:18] signature signature that's another option that you can do there's all kinds of different things so at this point what i'm going to do i'm
[1:38:27] going to save project again just for the heck of it i'm going to zoom back out and i'm actually going to run the
[1:38:36] classification as is i'm not going to make any more changes even though i clearly need to so at this point uh we'll
[1:38:48] keep the actually what we'll do is we'll change the cloud under mcid we'll change the cloud call it cover to white
[1:38:58] we'll say okay we'll keep all our colors the same then if we click on classification algorithm again we want to use the mcid
[1:39:11] um we will use this time we are going to use the algorithm because we want to classify every pixel so if you don't
[1:39:19] choose the algorithm and you only choose use lcs it will only classify those pixels that fit into your um the thresholds of your
[1:39:29] statistics statistics if you use the algorithm it kind of does like a hybrid classification where it will use maximum likelihood or whatever
[1:39:38] algorithm you choose to to figure out where those unclassified pixels should go so it uses a statistical approach to
[1:39:48] figure that out so it will classify all your pixels so we're going to do it that way
[1:39:55] way select use lcs select the algorithm okay and then click on classification output and i'm going to click run
[1:40:09] i'm going to give it a name and i'll call it cloverus whoops keller i can't spell caleb varus
[1:40:23] class class two that's our second class and we'll call it save save and let's see if we can run it without
[1:40:34] crashing crashing yesterday it crashed so this takes a little while to run so at this point what i'm going to do is
[1:40:43] let it run it's stalled right now and because really the important part of this whole thing i've showed you already
[1:40:54] the classification will just be you know the result of all of this manipulation that we've done with the signatures
[1:41:01] so i'm going to let you go ahead for those of you that want to stay stay stay with me
[1:41:10] go ahead and run through it there yourselves if you haven't done so already and then i'll be here to answer
[1:41:15] any questions and i'll kind of look back and see if i've what questions i've missed as well
[1:41:23] so mine's still running running although it says not responding it kind of goes back and forth i don't know
[1:41:29] about yours but mine goes back and forth between not not responding and then responding and okay so i'm going to look at some of
[1:41:48] these questions oh somebody i think i answered this question but somebody asks what does it mean if urban 1 urban 2 and urban 3 do
[1:41:56] not overlap so that could be good in a way because if they are not uh oh i think we just
[1:42:04] crashed i think i just crashed it so uh uh i don't know why um so i think i have a classification
[1:42:21] that i can bring up for you if you're interested in it i'm curious to know when you guys run it if you are able to
[1:42:28] successfully run it without without crashing it because this happened to me yesterday yesterday yeah somebody said maybe it's a memory
[1:42:36] problem it's entirely possible although i've run it on this computer before so it's a little annoying oh i go back to the question about if
[1:42:48] urban one urban two and urban three do not overlap so that could be a good thing because that means you've selected
[1:42:55] probably some spectral spectral cl um some signatures that have some variability um and like i said before
[1:43:03] the key to this whole thing is capturing variability within your classes without capturing too much variability so
[1:43:10] it could be good that you did a good job of collecting three very different signatures it could be that um
[1:43:17] you know again with urban urban is crazy because it's so heterogeneous that it's easy to get very different signatures
[1:43:28] and it's it's very hard to classify urban so urban in particular is a bit of an um
[1:43:33] an oddball and a challenge so sylvia asked a question earlier it's actually a good question and sylvia
[1:43:47] i'm i'm sorry we couldn't get your problem um figured out before hopefully we can do that in the next week or so
[1:43:55] but but when working with imagery do you need to have knowledge of the area before classification or the spectral
[1:44:02] variations should be able to tell you this like forest fairground etc that's a really great question because i think
[1:44:09] that's the key to understanding how to do this with supervised classification actually i think with any classification you have
[1:44:16] to have knowledge of the area before the classification classification because you can't select training sites and you can't
[1:44:24] create a land cover classification without understanding what's on the ground ground and whenever i teach this class i've
[1:44:31] taught this class at various colleges in the past i always tell students that it's really really important
[1:44:40] that you get on the ground and understand what's going on what you're seeing on your computer and how that relates to
[1:44:48] what you're seeing on the ground it's really really important that you do that that because um when you'll understand what classes you
[1:44:58] need to classify and on the ground you won't sort of understand the spectral variability but you'll be able to see with your eyes
[1:45:06] maybe maybe how similar they might be um so you need to do a little bit of both and that's why i also say
[1:45:14] um for the spectral variations personally i like to actually run an unsupervised classification first to really get a good idea for
[1:45:25] the spectral variability in my study area area and then once i do that i can get a
[1:45:31] better idea of where there might be special confusion between my classes and figure out ways to deal with that so
[1:45:37] that's just my own personal way of doing things and um so it it's really an art to try to
[1:45:45] figure figure out how to deal with the spectral variability but it's very very important that you understand
[1:45:52] that you know what's going on on the ground ground um and you know field work is the best
[1:45:58] but if you can't do that due to limited resources or your you know your project is occurring in a completely different
[1:46:05] country than where you work or something like that then you can use you know other things like google earth
[1:46:11] or high resolution imagery or other kind of data from people that do know that area that's kind of a long answer to your
[1:46:20] question but i feel fairly strongly about that so somebody asked when we go for a supervised class when
[1:46:34] so when do you do supervised and when do you do unsupervised um the supervisors you really do when you
[1:46:43] know when you have those training sites so when you have information that can give you exactly exactly what those training sites are on the
[1:46:53] ground ground then you can do supervised classification you can actually control i think you can control things a little
[1:47:00] bit more if you do a supervised but again you really have to understand what's on the ground
[1:47:05] um you can do an unsupervised if maybe you don't aren't quite so familiar with the area or if you don't have that specific
[1:47:15] training site information then you can do an unsupervised and so obviously just supervise need further ground truth and um
[1:47:24] it doesn't need ground toothing after you've already done the first ground tree thing but you do need a lot of ground truthing
[1:47:31] with supervised so somebody just commented about how they're a water scientist um and i'm glad that land classification
[1:47:41] is important for calculating surface water discharge you know one of the other things that we're um thinking about doing because
[1:47:49] obviously this is focused on on sort of terrestrial systems and not not um water water but we can do a similar kind of thing
[1:48:00] with coastal and and water systems as well i mean you don't do the same level of classification obviously but there
[1:48:07] are things in and around water that it might be interesting to do as well so so make sure
[1:48:15] that that you let us know you know in the future what would be useful to you oh good thank you pedro for
[1:48:27] responding so so somebody just asked about the urban classification a 10 pixel square would cover over 90 meters square on landsat
[1:48:44] so there's a lot of look out there's a lot of material um even so can we use a single pixel roi
[1:48:51] to be very specific at what we're classifying absolutely so you that's a that's a good way if you're if you're
[1:48:57] trying to classify something like urban which is so spectrally heterogeneous it's so spectrally mixed you might want to
[1:49:06] go to the approach of selecting an individual pixel but i tell you even within within within an urban area even an individual
[1:49:15] pixel contains a lot of different um kinds of things on the ground and it could include in an urban area
[1:49:24] could include vegetation and then all the different sort of land surfaces all of these different things and and those pixels still get mixed up
[1:49:33] with other kinds of land cover types so that's what makes urban so challenging this is good um daniel's going to
[1:49:43] experiment with using this approach to identify non-native plants um um yeah i mean i hope that works for you
[1:49:51] the one thing with um trying to get at specific species with landsat it's really challenging because unless those species are you have large
[1:50:03] regions of that species you know kind of homogeneous regions plants because the spectral bands of landsat are fairly broad um plants tend
[1:50:16] to get mixed up with each other i kind of did an oak and a conifer difference here because
[1:50:23] spectrally there they can be quite different but sometimes within plants especially invasive species there can be a lot of confusion between
[1:50:32] those invasive species and other plant species species however however what a lot of people use is hyperspectral data because the narrow
[1:50:41] spectral bands allow you to actually sort of pick out different species types so that's a whole different
[1:50:47] processing hyperspectral data is a whole different sort of ball of wax but just a heads up and be aware of you know
[1:50:54] the confusions that might occur with invasives somebody said do urban areas need radar images instead of landsat images
[1:51:07] um um you could use radar i mean a radar starts sort of getting at texture a little bit more
[1:51:16] so sometimes what people do with combine the radar with the landsat and and try to get at urban a little bit more
[1:51:25] that's you know that's a possibility yeah slim you're absolutely right slim says um classification in grasslands is very
[1:51:40] challenging especially with dry vegetation vegetation um is there any tips to deal with that yeah it's it's really interesting that
[1:51:48] you say that because um nasa has just funded a project to look at grasslands in mongolia actually and um it's it will
[1:51:57] be very challenging for them i there's different ways you can kind of get at um you can kind of get at that um the
[1:52:05] problem is is the soil has such a high um it basically saturates your your signal um in grasslands and even sort of sparse
[1:52:15] shrublands and things like that so sometimes you can you can kind of get at it by looking at
[1:52:21] when those the grasses green up so for example in california we have in the winter in the spring we
[1:52:31] have green grasses and then in the summer we have brown grasses so you can kind of get at grasslands by looking at
[1:52:37] these sort of multi-temporal approaches where you have two dates where you can sort out grasslands from other things there's also some indices
[1:52:46] um some soil adjusted vegetation indices and things like that that can try to minimize that soil signal
[1:52:56] signal so you aren't getting so much soil signal so those are all things you can potentially try
[1:53:03] oh here's a good question are there any digital signature files so basically are there signatures that exist for every
[1:53:10] macro class that can be used as ready inputs in in like an fao system you know so you're you're kind of what you're
[1:53:18] looking for is like a spectral library i think think and oftentimes for hyperspectral there are spectral libraries but not really for
[1:53:29] um um multi-spectral like landsat pretty much everyone just generates their own spectral signatures for their specific region i think partially because there's
[1:53:40] so much variation um between regions as you can see even in this region um there's there's so
[1:53:47] much spectral variation that you can't necessarily get one spectral signature that will encompass one macro class class so somebody's asking about removing
[1:53:58] clouds clouds you can actually create cloud masks and the way that you would do this you know
[1:54:06] one way to do this is to is to do as we did earlier where you're actually um
[1:54:14] well there you can do it spectrally where you select the pixels you kind of really create training sites for those clouds
[1:54:21] because the clouds unless you have snow in your image image generally will have a very unique signature
[1:54:30] signature and then once you do that you create a classification and then use that class use use you you can use raster
[1:54:39] math like a raster calculator to literally literally pull out cut out those pixels from your image and then
[1:54:47] reclassify your image there's not much else you can do you cannot look underneath those clouds those clouds are
[1:54:54] basically blocking out whatever it is underneath them so you can get rid of them you can get rid
[1:55:01] of that part of your image you can classify them as a separate class class there isn't much more you can do about
[1:55:08] that so if you've come just to let you know if you don't have to stay on for the
[1:55:18] whole entire time if you completed the exercise and you don't have any any additional questions you are more than
[1:55:30] welcome um to leave and i want to thank everybody who's on here for participating in this this has been
[1:55:38] a bit of an experiment for us i'm not leaving right now i'm just saying this for those of you that want to leave um
[1:55:43] please feel free we appreciate all your help uh looks like somebody got an error by with the
[1:55:53] survey monkey let me see what's going on so somebody was asking about how do you get the minimum and maximum
[1:56:03] values so i'm not sure i think you're going to have to clarify a little bit where where
[1:56:11] do you want to see the minimum maximum values in the do you want to see the minimum and maximum values of the bands
[1:56:18] or or of the spectral signatures maybe you can clarify a little bit then i can show you
[1:56:25] where to get those now it looks like somebody antonio had a problem with the mc classes you know now that my um
[1:56:36] qgis crashed i have to bring it up again so bear with me a minute and i'll bring
[1:56:41] up qgis again okay antonio i think i have it i have it back up here and you wanted to change the mc i assume
[1:57:00] you mean that in the signature list here um so i'm able just to select i think i can oh yeah you're right i
[1:57:16] can't change it this way so you know what i would do probably in the case of needing to
[1:57:26] change the mcid i am not sure how you can do that at this point once it's saved i think
[1:57:36] probably what i would do is select it and delete it and then create a new one so you can select it like this you can
[1:57:45] delete it and then you create a new mcid with a new number with the number that you want
[1:57:57] ram says you don't need to delete oh i see here we go so you're right ram so it looks like if i i actually double
[1:58:11] clicked in the mcid and then these little buttons came up that i can increase the number i can change the
[1:58:17] number in the roi signature list marcus i think you ask a question about what the homework says yes you can just
[1:58:28] use use the values that you got in the exercise that you use so i think some of these
[1:58:35] answers won't have any standard some of the questions won't have standard answers it will just depend on what you
[1:58:41] got yourself so yes just use whatever you got oh i see right okay so somebody's asking about the minimum
[1:58:53] maximum values when i display the imagery so i'm going to click over to the layers panel i'm going to turn off all my training
[1:59:03] sites and so forth i'm going to zoom back out so when i right click on on the image and i go to properties
[1:59:18] okay and right now i have band 5 band 4 been 3 and the min max is listed here so
[1:59:23] what you're saying is that in yours the min max is not listed you want to make sure also that the contrast enhancement
[1:59:30] is it says stretch to min max right here although if you if you take that away the min max still
[1:59:40] stays but you do want to make sure it's stretched to min min max so i guess what you're saying is that
[1:59:49] you're not seeing that min max in your version version so i'm not sure what the why not
[1:59:56] i'm not sure if i can help you with that question right so okay okay it's hard to talk right with you writing
[2:00:08] on me talking but if you're not seeing the mid max i don't know why i wonder if it's the version
[2:00:14] that you have oh it looks like people are being able to answer the question question about seeing min max so it looks like
[2:01:30] it's a version issue you know aversion issue not conversion issue version your version of qgis so i'm wondering can you
[2:01:43] all see each other's questions can you let me know because it wasn't totally clear oh you're not
[2:01:54] oh you can't see that's one downside to the software is that with the previous software that we used
[2:02:03] you could see each other's questions and answers which was really helpful so maybe what i can do is if some of you
[2:02:13] are answering questions questions that i verbalize then i can copy and paste those into the answer section
[2:02:29] section hopefully we'll get a version of this software that will or will find another alternative to allow you to sort of
[2:02:35] talk to each other as well because a lot of you have some really great solutions to some of these
[2:02:41] issues that i can't necessarily answer and you have some experiences that would be very helpful for everyone else to
[2:02:48] hear so paulo asked if um the person with the i think is that's petrie um that no riko
[2:03:01] with the min max problem is there a thumbnail of visible it sounds like there's a some kind of a drop down that you can
[2:03:20] select with your version hi ram yeah i i'm i'm sorry i left for a few minutes i'm back now so you want the
[2:03:32] spectral distance from signature window okay so so i think this is the window that you want first you have to select the signatures
[2:03:42] that you want so if i'm just doing water for example then you bring up so if you haven't selected those
[2:03:53] signatures then they won't then they won't show up so let me know if that works for you
[2:04:12] oh that's interesting paulo so the clipped calaveras should be a float32 raster stack otherwise the min max will not display
[2:04:24] so i'm wondering is that a default the float32 float32 when you clip it that's interesting it should be the default option yeah i
[2:05:01] agree with you because i don't think i've had a problem with that but it could be a version
[2:05:06] issue so supposedly the float32 is the default option so ram i have the spectral signature plot open i think
[2:05:28] um and then when you go to spectral distances you actually have to select your signatures here and then click on
[2:05:37] spectral distances and they should show up so hopefully that works for you okay good so daniel daniel i'm sorry you're having
[2:06:16] to get back to the drawing board with week one so he says daniel has to start over because he's getting python errors
[2:06:22] on his map and can't select rois you know i love qgis um i really do it has a lot
[2:06:31] of great functions um but i it sometimes is really difficult to work with it because of all
[2:06:39] these errors so it depends on the if you have if you had had python already um installed on your computer then
[2:06:46] trying to install qis qgis can kind of get messy um and then the version matters and then as you could see i may
[2:06:54] have memory issues so i was dumped so it's it's you know it's not perfect um so hopefully you can work daniel
[2:07:03] hopefully you can work through some of those problems hi everyone this is cindy again um we have about 10 minutes left
[2:07:15] in this session there's there's a few of you still left on and i'm not sure if you're still working
[2:07:22] on on the um the lab the qgis exercise but if you are we'll stay on for the
[2:07:30] last 10 minutes that's no problem i just wanted to remind you to complete the surveymonkey if you get a
[2:07:37] chance chance and just let us know how you felt about the course and what you'd like to see
[2:07:42] for future courses and and that sort of thing thing or if you have any additional questions just you know post them here and i'll
[2:07:50] try to answer them but um i'll i'll probably shut down in about 10 minutes or so um and by the way
[2:07:58] if you're finished go ahead and log off you don't have to stay until the very end end um so we really appreciate your
[2:08:06] participation in this this was kind of an experiment for us and and we really hope that you join us again
[2:08:13] for our next webinar okay i'll log off i mean i won't log off to now for now i'll
[2:08:20] i'll mute for now and then come back on and close it down in about 10 minutes okay thanks everyone
[2:08:32] and i will put up my email address one more time there it is cynthial.l.schmidt nasa.gov so please
[2:08:43] feel free to email me any questions you might have and thanks again for participating and we'll see you at the
[2:08:49] next rsat webinar
