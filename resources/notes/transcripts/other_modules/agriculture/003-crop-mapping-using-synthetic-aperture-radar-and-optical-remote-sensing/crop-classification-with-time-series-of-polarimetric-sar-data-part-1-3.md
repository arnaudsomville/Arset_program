# Crop Classification with Time Series of Polarimetric SAR Data, Part 1/3

`https://www.youtube.com/watch?v=QP4VPaBovBk` · id 167 · 2:30:45 · module 20 — Crop Mapping using Synthetic Aperture Radar (SAR) and Optical Remote Sensing

[00:05] hello and welcome to the rset training crop mapping using synthetic aperture radar and Optical remote sensing my name
[00:13] is Sean and I'm an rset trainer based at NASA's Goddard space flight center in Greenbelt Maryland it's a pleasure to
[00:20] welcome you all to the first part of this three-part webinar series for those unfamiliar with the applied
[00:27] remote sensing training program or rset ourset is part of NASA's applied sciences capacity building program rset provides accessible relevant and
[00:38] cost-free training on remote sensing satellites sensors methods tools and applications applications trainings are offered online and in
[00:48] person for beginners and advanced practitioners alike trainings cover a range of data sets and Analysis tools and their applications to Water
[00:57] Resources management air quality disasters land climate and energy rset's goal is to increase the use of earth science remote sensing and model
[01:10] data in decision making through training for Professionals in the public and private sector environmental managers as well as policy makers
[01:19] trainings are freely available to anyone with an internet connection and conducted either live instructor-led or self-guided such as
[01:28] our fundamentals to remote sensing training training since 2009 the program has reached over 50 000 participants from over 170
[01:37] countries countries all rset materials are freely available to use and adapt for your curriculum if you use the methods and data presented
[01:47] in rset trainings please acknowledge the NASA applied remote sensing training program over these two weeks there will be three
[01:58] two and a half hour sessions which will include presentations demonstrations as well as question and answer sessions
[02:05] the same content will be presented at two different times each day session a will be presented in English
[02:12] and session B will be presented in Spanish all materials and recordings from each session will be available from
[02:19] the training webpage provided by the link on the slide there will be one homework assignment for all three parts of the training
[02:28] answers must be submitted via Google form which can be accessed from the training page on the rset website
[02:35] homework will be made available on April 11th with a due date of April 25th a certificate of completion will be
[02:43] awarded to those who attend all live webinars and complete the homework assignment by the deadline you will receive a certificate
[02:51] approximately two months after the completion of the course from marinas Martin the prerequisites for this three-part training are the fundamentals of remote
[03:02] sensing Session One agricultural crop classification with synthetic aperture radar and Optical remote sensing part one as well as the mapping crops and their
[03:13] biophysical characteristics with polarimetric SAR and Optical remote sensing sensing links to the each of these trainings are
[03:21] provided and we encourage you to go through them to familiarize yourselves with content directly related to this
[03:26] training training this slide outlines what each part of the three-part training will cover from April 4th through April 11th
[03:35] we hope you will join us for all three parts to gain as much value from the training as possible
[03:41] if you are not able to attend one part a recording will be made available within 48 Hours of the training day on the rset
[03:49] website after participating in this three-part training attendees will be able to explain how polar metric parameters are
[03:58] used for crop condition assessment demonstrate how to perform Sentinel one SAR preprocessing to derive quasi-polarimetric parameters perform a calibration of a sar based
[04:10] vegetation index to ndvi monitor crop growth with multi-temporal polarimetric SAR or Pulsar data from Sentinel one examine crop growth using a canopy
[04:23] structure Dynamic model and time series of Sentinel one imagery and classify crop type using a Time series of radar and Optical imagery both
[04:33] Sentinel 1 and Sentinel 2. it is now my pleasure to introduce the guest trainer for today's webinar Dr
[04:42] Armando Mourinho Dr Armando Moreno received his masters in science in telecommunication engineering from the University ta de
[04:51] nipoli Federico II in Italy and his PhD in polar metric sar interferometry from the University of Edinburgh in the UK he
[05:01] has worked in several European institutions including the German Aerospace Center the University of Alicante in Spain eth Zurich in
[05:11] Switzerland and the open University in the UK since 2018 he has been a senior lecturer at the University of sterling in
[05:20] Scotland UK his research interest is in processing of synthetic aperture radar images with special interest in polar metric and
[05:29] multi-temporal data sets he has worked on several applications in the marine and land domains and has developed
[05:36] ground-based Radars for validation of satellite data Armando over to you hello everybody I'm Armando Marino from the University of Stirling and thanks
[05:50] Shane for the introduction today I would like to tell you to present you this training on crop classification using
[05:58] time series of polarimetric cell data and by the use of python and jupyter notebook so as you heard from Shane my
[06:06] interests are about processing of polarimetrics or data in particularly use in Time series so doing Works similar to what you will see today with
[06:17] different type of application going from Maritime to terrestrial applications but now let's start with the presentation now
[06:28] let's delete an outcome for this for today are listed here you can see at the end of today you will be able uh to run
[06:37] machine learning approach for multi-term oral polarimetric data using python you will see how to preprocess your polarimetrics or data in order to be
[06:49] able to use into machine learning applications you will see how to format your feature vectors which will be the
[06:57] input of this machine learning algorithms and you will see probably that this is one of the most complicated
[07:07] bit to do when you work with with machine learning now the libraries for everything but we still need to format
[07:14] the date in a way that is useful for us to use them then we will run two type of classifiers
[07:22] one random Forest is a supervised one the other the key means is an unsupervised one and at the end I will tell you how to
[07:31] evaluate accuracies for these classifiers and this is really a very important point it is really essential that when you produce these Maps you try
[07:41] to assess the accuracy of your Maps before we start I would like to let you know that this is a continuation of a
[07:49] previous training that we did with our set was called mapping crops and their biophysical characteristics with polary
[07:56] metrics are and Optical remote sensing and you find the link here you will see what we are doing up we are doing here
[08:03] build up on the skills that you will have learned inside this initial practical so unless you are very
[08:11] familiar with python my suggestion will be that you look at this training and go through this training before you start this one
[08:21] otherwise you see some bits may get a little bit complex so you should have received a folder
[08:28] where you will find the data that will be using for this practical they will see you see there are several files
[08:37] there there is a document the word document that tells you how to install Python and how to install libraries and
[08:45] there are the data are there for you to use and there is also some file files that we will use in our jupyter notebook
[08:53] training uh you see there are several version but I can tell you more about these different files in the next slides
[09:02] and so python I don't think I need to talk more about Titan is now one of the
[09:09] most famous programming languages at the moment and the good things are python is that it's quite general purpose so allow
[09:17] you to do really different things not just processing the data do statistical analysis but really you can do many
[09:24] things with it if you're not familiar with python don't get too scared the tutorial now is explained step by step but if you want
[09:34] to know more then my suggestion is for you to do this tutorial here is the say the official Python tutorial it is quite
[09:42] long but after that you really get a good grasp of what python can do for you and to install python uh message
[09:51] suggestion is that you use Anaconda so by following this link here uh the Anaconda provides you with the store for
[10:02] the python for the the editor and also a lot of libraries that comes with it and is all the libraries we will be using
[10:11] today are inside the nakuda installer so if you manage to install this you don't need to install any other library for
[10:19] this training and so once you go to the website you have to choose your repetitive system uh be very careful to
[10:28] choose a three-point something version day 3.9 will be very good uh the 2.7 version is the old one and the code that
[10:39] you're using today will not run with a 2.7 version so if you use 2.7 do not be able to run the trading today
[10:48] so once you have installed um if you have Windows you will see that you will find inside the start menu you
[10:58] will find the information about your Dana content installers what you have installed and what we will be using
[11:06] today is this one jupyter notebooks you will find a button there you just click on it and you will start I will show you
[11:13] how to do later you once you click on that button so once you start your jupyter notebook a
[11:22] browser will open so this is inside the browser that you are using here is a default browser
[11:29] and you will see a list of several folders here which are your jupyter notebook folders in order to create a new folder you can
[11:40] go here new you say new folder if you want to run the scripts that I have given you for this training you will
[11:49] need to upload them to the folder that you have created you see here River folder are set 2023 you can call it as
[11:57] you want you go inside there and upload the files on that folder your attention to this other editor
[12:06] called spider which will come with an accord installer as well and spider is a one of the editors that you can use
[12:15] there are many others despite that I quite like it is quite easy to use also if you are a user of things like Matlab
[12:22] uses value or R you will see is very very similar to things like our studio or Matlab but anyway this allows you to
[12:30] run the code without opening a browser and without you clicking all the times that you want to run and sell so if you
[12:39] won't go out to meet your processing chain that is my suggestion is that use an editor like spider
[12:46] afterwards about the data set that we will be seeing today so this is Sentinel one data you know SAR satellite from the
[12:57] European species agency in C band and it is dual pole so you have two polarization channels there the location
[13:06] of Interest it is Scotland this area here which is a child called Angus near the city of dandi which is displaced
[13:15] here here so here I have um a land cover map of the area although the the crop area is
[13:26] not classified in different type of crops you just agriculture crop and there are several classes here there's the city here
[13:36] marshes and these are the tidal areas because the tiles here are quite large so six six meter you can get
[13:45] this is how this area look with the Sentinel one data so this is an RGB obtained using the two polarizations I
[13:55] will tell you more how to obtain this image later and was taken in 2009 2019 and this is the city of Dundee and the
[14:05] area that you can see from the map before is represented here during this practical we will focus on a
[14:14] small area of all the data set this is to allow you to run on machines that may
[14:20] be not very powerful or very fast so we just considered on a 500 by 500 snippet little image a little part of
[14:29] the image inside your data set that I'm sharing with you and here you can see the agricultural fields are this part
[14:37] here the Urban Air is represented here this is actually a town more than more than than this that the town on the side
[14:45] of dandi and this is pasture and marshes and the Sea AJ is down here we're now ready to start our tutorial
[14:58] first things you will need to do is to start your Jupiter notebook application in Windows you will find in
[15:07] the start menu and you just click on it you'll see there is a terminal here opening opening where the software is started and there
[15:17] will be a link here inside your browser close these two so that we have more space to see this one and these are the
[15:27] folders that I have inside my notebook you will not have this to as a as a default inside yours but you can add a
[15:36] new folder by going here new and then folder invite the name and once you're ready ready you created that you can do an upload
[15:45] which will lead you to then your browse your files and get those files uploaded inside your notebook
[15:55] and so then your notebook should look something like that maybe you will not have this folder called Old here but
[16:02] will look similar so we start with this file here Pulsar Time series once you click on it then you should
[16:13] start see looking at the script so in this first file here what we do with this will script we apply machine
[16:21] learning to pulse our time series using Python and the idea here is to format the data in a way that we can more
[16:29] easily easily use in a machine learning approach so we are producing the elements that you will be using inside our feature vectors in
[16:40] the next part of the training as I said before we are using Sentinel one imagery which are from the European
[16:47] species agency they were acquired into in 2019 and here I'm sharing 19 images with you in this area in Angus near in
[16:58] Scotland near Dandy uh if you go to Copernicus so you go to the Alaskan satellite facility you will
[17:07] see there are many more images over the area and this is a quite well covered area actually from Centennial one I
[17:16] didn't provide I'm not providing you with original data because they are way too big to share so there will be many
[17:24] many gigabytes which is not possible to share in this training so what I'm giving it to you is just a small area
[17:31] where we can run this training but once you feel confident that you can run this code properly my suggestion is that you
[17:39] go to the Copernicus or the Alaskan satellite facility and you get the data yourself and you do all the passages so
[17:46] that you make sure you can apply this not just in Angus but anywhere you want around the world the landmass of the
[17:54] world where centrelier one images are available available few words about what we did what I did to this data before creating a
[18:04] formatting as you will find so what I did is to calibrate the data I applied or orbit files I made a subset then
[18:15] produce the covarence Matrix multi-looked four to one to make the pixel more Square on the ground co-register the stack and your coded the
[18:25] images so what you get are Joko did encourages registered images the format that is not I forgot to say I
[18:35] used snap for this in particular I use the GPT the graphical processing tool of snap which you can call directly from
[18:43] python so it's all automatic after you install snap so it's all um you can do it automatically straight from python
[18:52] so the images comes out of a snap in a binary MV format so they are binary file
[18:59] within headers headers and to read them you can use any GIS software all will do but the good things
[19:09] there so that relatively easy to read also with title because they are binary so do you need really special libraries
[19:17] to be able to do that so there again is this one and this is the land classification map I was
[19:28] showing before but let's start with the ducture practical practical first of all I would like to tell very
[19:37] few words about how to run a Jupiter notebook script and so when you see when you click over
[19:46] a place in The jupyter Notebook the things will highlight this bit here is called the cell this cell in particular is a markdown
[19:56] you see you can select between markdown code and other things like headings and once if you want to modify to edit
[20:07] the content here you have to double click once you double click you see the the editing function comes into play and
[20:16] these things looks a little bit like latex if you are you're into that so you can like sort of write in in latex not
[20:23] exactly the same but you can sort of use this kind of things to to write your markdown once you are happy with what
[20:31] you brought you can run the cell either by clicking run or by the shortcut Ctrl enter in in Windows or shift return in
[20:42] Mac Mac once your brand you see it goes outside from the editing view if you want to have a new cell so
[20:52] then you go to the side here so that you are in View mode and not editing mode
[20:57] and you press the button bin click the button B this create a cell below if you want to remove a cell you go
[21:06] again on the side here to highlight the cell but not editing and you press Double D twice the key so DD and it
[21:16] disappears disappears and this is possibly everything you need to know in order to run this code another thing says that if you're in the
[21:24] code you see anash it means that it's a comment comment comments like markdowns are written for humans you know for machine when the
[21:34] machine see the markdown or C Dash it just goes through doesn't run it it just text messages for humans it and
[21:43] having a look at the code so we can now start and then briefly introduce the different parts of this
[21:52] initial script that you will need to run in order then to run the second script which is the core of the trading today
[22:01] so at the start we always put all our import all our libraries here and then we have a bit where we Define
[22:11] functions this feels set of functions are for changing the name Convention of file they come from snap so the file
[22:21] name convention coming from snap is not the easiest to use to do what I'm doing here you may want to change the file
[22:31] names you can do it manually expand our 3D with that or you can write some code with python and let the machine update
[22:41] the file names [Music] [Music] and get the dates from the stack next bit is about next function is about
[22:54] reading a single NB image the remember the image is coming out from of now of snap are in binary MV
[23:04] format so we need to read them and if you manage to install this Library called spectral where we call the function NB here I can
[23:15] show you the things before so if you manage to install this Library here uh then you can use it straight away and
[23:27] you make you are able to make your code more robust without avoiding hard coding but if you don't manage to install this
[23:36] Library spectral then you will be stuck so remember that what I did I coded away around it where
[23:47] you you basically use the same only the libraries they come straight away from Anaconda you don't have to install extra
[23:54] libraries libraries I will tell you more about this when it comes to the hard coding bit but it's
[24:00] not good to add code so if you manage to install spectral your code will be better better so anyway this reads a single image
[24:09] this function here reads a set of polarimetric polarimetric acquisition a set of images in the Dual pole case we have two images
[24:22] as input which is the change and even but after we are all the VV VH depending which type of dual pole the satellite is
[24:32] acquiring acquiring but once we run the snap script we will have data formatted as covariance matrices matrices these are two by two matrices where you
[24:44] have three independent images two of them the C11 and c22 are intensity intensity of BB intensity of VH
[24:55] and the C12 is the cross correlation between the channel PV and VH so they are complex you have an imaginary and
[25:05] imaginary part the difference with what we were doing before is that now we are using Sentinel one which is a dual polarimetric
[25:14] satellite the problem metric modules so we have two channels next step is to have a function for
[25:23] running the clock here dual polarimetric decomposition this is because two of the cloud protein parameters will be features for our machine learning
[25:35] methodology in particular we will be using the entropy and Alpha and here I need to stress something that
[25:44] this is the Dual polarimetric version decomposition is not the quad polarimetric one so when you go doing this beside having
[25:56] less outputs so you don't have recent anisotropy you don't have for instance the beta angle but also the alpha angle
[26:05] that you get out from a dual polarimetrical decomposition is not the same than the one you get from a quad
[26:14] polarimetric so don't please don't use the same physical interpretation for this Alpha angle then you were using for
[26:25] the quad polarimetrical triangle they are not the same they are similar but not the same and the problem is that in
[26:32] dual pole we cannot construct the power lead basis the poly basis is needed for that physical interpretation of alpha if
[26:40] you do not have quality bases then your Alpha is not it's ambiguous you cannot really refer as you were doing before
[26:47] still very useful just that the physical interpretation is not the same so please give careful with that
[26:55] now next step here is set in the um the file path where you want to where you have your data so that you can
[27:06] process process this data a path is the folder containing the data that I'm sharing with you so the 19 scenes
[27:19] and you see the way I wrote it yes double backslash is here the double backslash is needed because if there is
[27:29] a slash in the number python is interpreted as a symbol so we make us out we make a symbol out of it
[27:37] but if you put a double backslash in those and it doesn't do that mistake so my suggestion is that you go to the
[27:46] folder where these things are which in my case is this one you go here you do Ctrl C and then Ctrl V you copy paste
[27:54] inside the file inside the the script and just a note about what you will find inside this folder you see there is a
[28:04] lot of images here you start with the C11 for the different dates then you go to the C1 to imaginary
[28:13] C1 to real c22 c22 is just real it's an intensity and all the files have they're attached to it this thing CL
[28:25] which is a text file so if you this one sorry so if you click on it you
[28:31] see the text file where all the information about your images are going back to the code so and also in
[28:44] this folder here what you want to do is to have the folder where you're saving your outputs these outputs are the one
[28:52] that will be used in the second part of the thing the second script where we actually learn machine learning
[28:59] algorithms so I hope you managed to do this copy and paste here and this really should be
[29:10] the only bit that you will need to change in order to to run this code then this part here is where we are to code
[29:20] the information about the image where do we get this information from the the header of the file so you see samples
[29:31] and lines these two numbers here and this go here and also this is the format so it says
[29:39] the beginning floating F4 is the type of format if you use the library spectral you will not
[29:46] need to do this the the library is able to go in the the header and read this
[29:52] information but if you are not using that then you need to hard code so this bit here is extracting information about
[30:02] so it's actually Redeeming the file names so to have a different convention the file names that comes out from snap
[30:11] they are a little bit longer and they they don't come alphabetically in terms of dates which I don't like elective
[30:20] alphabetical order inside the folder so I do this renaming here this bit here is uh getting the list of
[30:31] dates inside the the folder that you have and one note of quotient here if you try to run this function and it's
[30:41] not working because you have a different operative system and the function abroad is not appropriate and then you will get
[30:49] stuck stuck to avoid that please uncomment these lines which will give you the list date there and then you will be able to to
[30:59] run it after the next part of the code what you do is to prepare the the tube for the tubes
[31:08] for processing so as I've mentioned before we are only taking a small part of the data set we are not using the
[31:16] full images this is because you will struggle running on a computer which is not a super computer if you have the
[31:24] alarm of 80 gigabyte eight gigabyte or 60 gigabytes you may struggle running the full image so we take a block this
[31:33] type of way of thinking of working with data is also called block processing what we do here is the first step we
[31:41] just select a block we don't do for all the image but if you want to run this
[31:47] over large array yes then you will need to extend this to move this zoomed area took over all your data of Interest
[31:57] and you will be doing something called block processing python is quite good in dealing with these things yes some
[32:03] Library they can do that so this is way to advance concepts for including here and the the Mantra here is to keep it
[32:13] simple so I didn't include all these bits but by any means once you get to certain level you may need to use it
[32:21] so in this part here we select an area of Interest this is the area that I showed in the slide so the little
[32:29] snippet 500 by 500 pixels if you want to use all the area that will be this part
[32:37] here if you would use a very small tile tile of the image just to see if the code is
[32:45] running properly you can use this one and with if close you can activate one of these but just and commenting the
[32:55] line of Interest so now in this way we are running area one if you want to run area 2 then
[33:03] we comment this and we uncomment this one now to do this three credit adjusted to comment on a governmental line was
[33:12] done by pressing Ctrl and then back shift shift so I'll type it here control plus this one if you type this
[33:21] if you press this one then it will comment on or uncomment the line very quickly quickly so now we run today we will run just
[33:32] this area here but by any means try to change locate in different areas and explore the data
[33:40] and also see things that I'm not telling you I'm skipping quite quickly on that is that there are exercises here that
[33:48] you can do things to make it more automatic more robust so once you're confident with this code that it runs
[33:58] properly then try also this other way of processing to make it more efficient here you are ready to process the images
[34:09] and before I start with this what I'll do is can select everything is above this by just control and arrow up and
[34:20] then I can run everything pressing Ctrl enter enter so let's go back to this point so I
[34:27] press now Ctrl enter and just run everything everything Above This cell here so now we are in the cell here and this
[34:36] cell would does the processing image by image it loads the Dual polarimetric acquisition does some filtering here or
[34:47] take a little Aid in it then does the filtering and then runs the clue put here dual
[34:53] polarimetric so once you're here control enter and you see there is an asterisks here which tells us that the machine is
[35:02] processing processing you're good bottom here and they put a let's say a countdown where we can see
[35:09] how the processing is proceeding so now it's processing the feast they eat and there are 19 days left
[35:16] and now it's processing the second one and so on this will take some time so I will go explaining the rest before this
[35:24] is finished sometimes you get these messages here These Warnings don't worry about them about them it is okay so there are
[35:34] places where the there is some error calculating quantities it's mostly in the club but here uh the composition
[35:42] that happened that but it's okay just a few pixels um the processing was not appropriate they were errors there they were
[35:51] problems but it's not really a bug it's just keep on going but once you have to trans program this to an operational
[35:59] level then you will need to do it then you will need to make sure that there are no places where the daggerate
[36:06] doesn't work and give some spurious result so you need to make sure that the code is robust but here we are just
[36:14] learning how to run it so you can leave it for the moment keep it for another day
[36:23] in this part of the code here we want to visualize the images and again this is the the area of
[36:30] Interest with the different targets inside and this is just a PNG so if I click on this you see just a con a link
[36:39] to a PNG uh the actual image come out from the these other lines here so if you run the cell then you will see
[36:49] the image is coming out and not running this now because it's still running the part on top but you will see
[36:59] the different images here and you see this each one of these is for a different date because I put a for Loop
[37:06] here which was going from date to date and the next part is about visualize in the group of two parameters again for
[37:18] Loop to grow from each for each state and then here we bulk the images in a two by two format
[37:27] so if you see what we have here there are four images for each date if you're interested in looking at the
[37:37] evolution evolution of this feature in a smaller area then you can proceed with the following code where we select some Roy region of
[37:48] Interest Interest now to do this there are several ways and I will also tell you more about this
[37:55] later here we do the ECUA by just selecting the pixels in the image that we want to look at
[38:03] and then here we visualize the strains that should look something like this one and the final part of this script is
[38:13] about saving these results into tubes that then will be loaded in the new in the second part of the for the
[38:23] second part of the training the easiest way the most the quickest way to save this these images is by
[38:32] using numpy arrays which are again type of binary arrays but property of python and then it is very easy because it's
[38:41] just a line of code for saving which is the same here where you have to tell where our file where we want to put this
[38:50] file and then for reading you will see it's a single line of code it's called load so it's very easy to do and that's
[38:58] why we are doing it but you can of course save this in other formats it is just up to you I do this
[39:06] every this format just because this is the quickest way to do it this leads us to the end of this uh this
[39:14] part here if by any means you got stuck before there was a bug in your code that you
[39:20] couldn't run my suggestion is that you continue with the second part you leave if you're listening to me live uh listen
[39:28] to whatever I gonna say in the second part and then come back and try to do this using the recording but let's now
[39:36] move to the second part um of this training so we can go back to our initial folder
[39:46] Jupiter and you will see the polls are time series with we just worked with is highlighted in green and so it's active
[39:57] is running as you see here what you need to do is to shut it down so that it's
[40:03] not using resources anymore so it's now it's off you see it's not highlighted anymore it also allows you to close this
[40:12] window but if you can close this one and not start with the second part which should appear like that
[40:20] but before I start with this I would like to lead your attention to this other file here actually what you do I
[40:30] will show you it is easier than describing it so you see there are two files one is called Pulsar time series
[40:38] ml the other is called Pulsar time series ml quiz now if you are doing this live so you're
[40:46] listening to me live then my suggestion is just go to this one you don't do the quits but if you're looking at the
[40:53] recording then I would suggest you to go and try this one first so if you go through this file the quiz
[41:02] one you will see that some in some places inside the code I substituted the actual code the script with the word
[41:11] quiz quiz if you try to run this of course it will crash because the work with doesn't mean
[41:17] anything you will have that it will crash and when it crash you will have an error message underneath say what is
[41:24] that quiz what does it mean so what you have to do in this exercise is to change
[41:28] the word quiz with what you actually want to do there for instance in this case you will need to change this one
[41:35] with the so you will see this word appearing a lot in the script and this an exercise
[41:51] for you to to fill in this is quite important because it makes this training active for you not just passively
[42:00] listening to me but you actively try to do the exercise but now we can close this one just to
[42:08] show if I try to close this one it will not like you will see are you sure so
[42:13] what you have to do is to shut it down wait a few seconds and then close it
[42:22] so let's go now to the second part of the training where we apply so we use the actual machine learning methodology
[42:34] and again we'll be using the same data that I was introducing before the sentient one which we pre-process
[42:41] with part of the script which is also the the training that I described in my last tutorial
[42:50] the complexity of the script so this one is a bit higher remote complex than the first script so you start doing things that
[43:01] are a little bit more complicated and my suggestion is that you approach this step by step line by line you try to
[43:10] understand what it is and also try to do the first training before you do the second the attempt the second one
[43:17] if you have questions about the code please ask during your the Q a I'm very happy to try to help with that
[43:27] now again the same the sides in area and here the the libraries we have all the libraries that we used before again
[43:39] if you can install spectral Ado we don't use here but if you can install it will be good otherwise you still can run this
[43:46] code code the difference with before is this bit here where we are using the sky layer Library
[43:54] Library particular we are importing these functions here I use this way of importing functions because then the the
[44:02] call to the function gets smaller so you have less things to write by any means you can just import Skyler
[44:12] and then all the time you do scalene.ensible dot randomforest classifier you can do this in this way
[44:18] if you prefer but I prefer to to have it a little bit shorter so you see there are
[44:25] libraries for random forest and for validation and for the key means scallion should come with an account
[44:34] installer if for some reason doesn't come then you will need to install it using either pip or conduct if you ever
[44:42] look at the file that I shared in in the folder the doc the word document you will find information about how to use
[44:51] kunda to install any libraries you you want want again Define functions we need still to use this one to get the dates from the
[45:01] the stack from the folder where our images are and we can now start loading the numpy arrays that we saved in the previous
[45:12] step step so the images are located in part safe which is the place where you have saved
[45:22] the images in the previous step if you remember remember also have a link here to the folder
[45:29] where the original images are this is to get the dates the list of the dates this is the list of all the file names
[45:40] that you used to call our our tubes remember we have the C11 so the BB c22 VA uh VH the C12 cross correlation pdvh
[45:52] the span the entropy the alpha and also the dominant Alpha we will not be using here but still I put it there in case
[46:01] you want to explore adding some Dimension to your feature Vector you have this extra tubes you can use as
[46:09] some for training so these are the line of code that we actually use for loading the images you
[46:16] see it's just a single function load and you you get the the tube quite quickly so we run we have to run this one first
[46:30] step so I'm running all these cells before and we are now to this cell here with this cell as we
[46:43] did before we get the list of dates that we will be using in the following in case that it gets stuck then you will
[46:52] need to fix it but in order for you to run this today I hard coded all the name
[46:58] of the the or the list of the dates here so you will just uncomment this initial work
[47:08] the first part of applying a machine learning algorithm a supervised one is about training so this is all explaining why the learning part
[47:21] of the word machine learning is because the machine learn how to see the data how to segment the data and to do
[47:28] regression using the data so the first part is about training this first cell here I want to set some
[47:38] of the values that we will be using after after index image is the index of the image
[47:46] inside the stack that we want to use when we are using just a single image like visualization purposes and let's
[47:53] add this to the first image inside stack remember titles start from zero not from one one so 0 is the first element
[48:03] um since state is a value that will be used in our machine learning methodologies you will see later what it
[48:11] is but I set it on top here so that it's always the same and we don't mess up
[48:18] with that and here is the number of classes that we want to use I set it to four
[48:25] but of course you can choose more classes classes we can now run this this cell move to the next bit
[48:33] selecting the region of Interest inside to to put our classes but since we need to tell the machine
[48:42] now the data look for that class we need to select our class inside the data set data set and we do that by selecting
[48:51] here by selecting region of interests inside the data so what I did here we just select digimes inside the image G
[49:01] cells small squares inside the image that you can do straight away now a little note on how python deal
[49:11] with images uh the images are two dimensional entities or Dimension One in dimension two in Python the First Dimension
[49:27] is the vertical one so if you look at in an image the um image visualized in Python the First
[49:37] Dimension the first coordinate will be the vertical one the second coordinate would be the horizontal one if you think about it this is a little
[49:46] bit not what we normally do right if we have a 2D image X and Y we say the x is
[49:54] the horizontal Y is the vertical so we'll have the horizontal and vertical flipped compared to part this creates some confusion in people
[50:04] then are not used to python be careful first coordinate is vertical second coordinate is horizontal keep this in
[50:12] mind it's opposite to what you may think it is so so um we want to select um this images this portion of the image
[50:24] inside the the larger image um what way do we need to visualize the image as a first thing otherwise you
[50:33] won't be able to to work with it so this cell visualize a single image you see it creates an RGB I RGB
[50:43] container three-dimensional where the fixed two Dimension is the image the third dimension is the color RGB red green blue
[50:55] so you create you fill this container with the content of your image and for 40 different colors here we are
[51:06] putting the r the red color is the magnitude value of the Cross correlation between Co and cross polarizations the
[51:16] green color is the cross polarization the blue color is the BB polarization it's the corpularization then you need normalize all to one
[51:29] because python represents images between 0 and 1 when you use this function in Show Show so we create this uh this image here and
[51:41] again if you want to know more details about that the first tutorial will explain why we need to do this
[51:46] normalizations but then we visualize using the emission function so once we run this what you get is this
[51:55] image you see the North north south direction is now horizontal uh East West is now vertical this is
[52:07] because the the python flipped the two so we we need to flip it again when we want to visualize but don't be afraid
[52:15] about that so keep this in mind the python always flip the coordinates so now we have these things we need to
[52:23] select places where we want to um they really want to call as a class and my suggestion is that we choose
[52:30] something in the scene something in this Marsh area something in the town and something in the fields here
[52:40] how do we do that we create a right train train array composed by four classes these are four rows and uh so
[52:53] sorry the four elements and four classes here remember number of classes is four they are both four actually and the four
[53:05] rows here they contain the start and end of the the pixel of interest in this format here we start to work we start
[53:16] with the first point in range then the last point in range the fifth body mode last point in attribute
[53:27] okay so uh this here represent the coordinates for the fifth point so from from 100 to 430 and then under 19 to
[53:39] 220. this is the second tier than fourth you will see these points later when I run after I run this this cell here
[53:50] one thing that is important is to keep on my keep in mind number of pixels in each row because this is the the size of
[54:00] our training data set and this is quite important to to make sure that we don't make mistakes later on
[54:07] so by saying last to First in each Dimension then multiply the two we know how many pixels we have there so
[54:19] let's run this one then we want to visualize it so that we can see the area that we selected
[54:26] remember when we create this contain and container I RGB we are actually selecting the three colors red green and blue in order
[54:39] so what we could do here is to take the RGB as we did before so this is the same
[54:45] code we used before so it's the same image and then we overlap a different color in the area
[54:53] related to our class so the first class so the one with zero CR see one that ends with zero the first class we have a
[55:04] one for the red and we level zero for the green zero for the blue so it will
[55:09] appear red the seventh class will level one for the green so will appear as green the third class
[55:18] so you see the third class you can see from here these two is here you'll only have a blue
[55:24] before class will have all the colors which make white so if we run this one then we see that
[55:32] we are coloring the area of interests here here and now taking these two to the next level
[55:42] um if you want to add more classes so if you don't like to use these three colors
[55:46] you can try to use different combination of weight for each color to obtain other columns like you can get purple you can
[55:57] get yellow whatever you want to to obtain so try that um if you want we can you can try that
[56:05] another thing that you can try after you run this code first is to find different four classes of selecting a different
[56:13] area of Interest or add in a new class NC audio classification or your classification proceed the next bit of the script deals with
[56:24] the random Forest and you will see we approached it in three different ways in one the first approach the fifth way
[56:35] we applied is by selecting one single image inside the full stack of images so we have 19 images we just select one of
[56:46] those and we run with that so we run the the random forest with that you can say this is not really making
[56:55] use of the time series you just select one one you may argue selecting the best one of
[57:01] them but still you're not really using the machine learning methodology this way I put it to the the sorry not
[57:07] usually using the time series information in this way I put it here because it's the uh saying
[57:14] the first approach and this also because it's a benchmark for us to see what extra gains you have by adding the the
[57:23] time as a dimension instead of just picking one image by using that the second approach we go the opposite
[57:32] way you go Brute Force we take all the 19 images and the 19 Acquisitions and we use them all of them inside our to train
[57:43] our random Forest this again is the opposite approach we are using everything and this may have some disadvantage as I
[57:52] will tell you later and then we see another way for doing this where we synthesize the temporal
[58:00] information inside our time series and then we use that to train our random Forest so we don't just cook Brute Force
[58:11] Chuck you know lean and letting the machine decide what is important what not we try to understand what could be important and
[58:20] offer this to the machine so is that cell intermediate approach first bit as I said when you want to use
[58:28] machine learning is creating this training it's creating these feature vectors vectors so so a machine learning approach
[58:39] is to try to connect some data to uh their target Vector the class of Interest using a function or a model
[58:49] call it f here so try to connect these two two let's start with X first the x is
[58:58] actually the data to fit and we normally call it feature Vector although it's not really a vector it's a matrix in most of
[59:05] the cases so X contains the samples that they were actually measured in the data so the the pixels contain the
[59:14] observables coming from the satellite is generally considered a sample here in this practical here we use five
[59:25] polarimetric observables which are the C11 c22 C12 entropy Alpha 5 5 images if you want so means that for each location or for
[59:39] each pixels you actually have five data points or samples that you need to store we store them as columns
[59:51] so along our route so if you have say the first row here for instance we represent pixel number
[59:59] one and you will have the four the five feature feeding to this row here here if our Roy our region of interest is a
[1:00:11] 30 by 30 pixel area pixels area then it will contain 900 pixels so 30 times 30. will have a feature Vector which is five
[1:00:27] columns and 300 rows because we stick all the pixels in the vertical Dimension a row as rows
[1:00:36] together with the data data the feature Vector with the data to fit we also need to have what is called the
[1:00:48] target variable so we have something that we want to link to this function to this model this
[1:00:55] is generally Fair the default there's a y small y because it's a vector while X is Big because it's a matrix normally
[1:01:04] so if we have 900 samples inside our Roy sorry sorry if you have another sample inside our
[1:01:13] drawing then y will be one column and 900 rows in this column we contain the information about the class of Interest
[1:01:25] now let's see let's see in our case where we end up where we have four rows four classes
[1:01:34] so the simplest feature Vector you can have say it considers only one channel so only one feature it will be a single column and
[1:01:46] 900 samples if you have four classes so four rois of Interest Interest then you will have that the total number
[1:01:58] of rows inside X will be 900 by 4. 3600 rows as I said before the results of function
[1:02:08] that is linked in the data to the class to what is called the target Vector Y and so this is this FX here we often
[1:02:20] refer to that as a model so when you hear people's talking about um um data models they often refer this one
[1:02:29] the link that the machine created between the data and the class that we are giving now let's put this into context with
[1:02:40] what we want to do inside this practical the most important thing and this word is the really the bottom line the most
[1:02:50] important part of this is that the number of rows for the future Vector for the Target Vector are the same the boat
[1:03:01] has to be 3600 in our case if you have that you have more rows in one case in the lock then so in the same
[1:03:11] mix then in y then you end up with some points that Miss a class because there are too many data and not
[1:03:20] enough class to them or if it's the opposite there will be class for no points for Pixel they don't exist so
[1:03:27] there will be a mismatch between the two the machine learning will crash it will not be able to to run so very
[1:03:34] importantly make sure the two things are the same otherwise it will crash it will not run okay let's start with the first example
[1:03:44] using a single image from the stack and the first bit here in this cell here we want to initialize the different
[1:03:55] parts that we'll be using later you want to say the number of polarization features is five if you want to initialize this Vector CR
[1:04:06] one-dimensional vectors I will come back on this later initialize our Target vector here we do the the
[1:04:17] assignment we create this feature vectors vectors you see I'm using a for Loop where we go class to class for doing
[1:04:26] that this is by far the easiest way to get you already around it there may be more efficient way of doing it but then
[1:04:35] things can start getting quite confusing I think at least my head works that by using a for Loop you it is easier to
[1:04:44] don't make mistakes also they are only only for classes so it's not a big deal it's not a big
[1:04:51] number of iterations so what we do we go in the X C11 Cube or any of the tubes
[1:05:01] then we select the pixels representing the area of Interest the reader Roy this is the Roy represented
[1:05:11] by the E Class the eye class I start from zero so these are the fifth iteration is the
[1:05:23] Roy representing the first class the class called zero because we start things from zero this part here
[1:05:32] represent the image in the stack that we are using remember I set this to zero the first image you can change it
[1:05:42] but basically we are going to tube go into the first image and taking the portion of the image uh
[1:05:50] uh inside the first drawing what do we do then we use this function rather to make this 2D little image into a 1D
[1:06:00] array array this is what it does takes the multi-dimensional array and it makes it 1D just stack one one after the other
[1:06:09] all the pixels we call these things as c11d then in this line here we append these values this one the array to a previous
[1:06:25] one which contains our full column of the [Music] [Music] um um of the feature Vector in this case is
[1:06:37] the column representing C11 so this x strain C11 1D is the column of the feature Vector which we'll call ctrain containing C11
[1:06:51] so again what it does depend it takes these values that we got from here this one the array and we push it at the back
[1:06:59] yeah pins then at the back of this other array whatever this is at the start this is zero see extreme
[1:07:09] is zero doesn't contain anything so what it does in the first iteration you put the elements of the fish story
[1:07:18] in this array which was empty before now it will contain the first drawing and appending in damage in the dimension
[1:07:28] zero which is the first Dimension remember Titan starts from zero not from one so it's creating this 1D array the
[1:07:37] Sargon iteration it goes to this the second rowing because I became one so it goes to the
[1:07:44] second row it makes again a 1D array and this time append this one the array to what we had before before we had the
[1:07:54] elements of the first drawing so he appends the second drawing the values for second row at the back of the values
[1:08:02] of the first drawing third iteration go to the third region of interest and append the third elements to what we have here which is
[1:08:13] second and first for iteration 40 elements godera pen to three two one elements that we are already here end of this
[1:08:24] story we have all the elements there stacked one after the other along the First Dimension the only dimension in this Vector
[1:08:34] actually have then we do the same for the two two Cube to two so this will be the the cross
[1:08:43] polarization we do for the cross correlation we do for the entropy we do it for the alpha we just repeat things
[1:08:52] and you see this is a bit random than this could you can make it more efficient by creating uh say happy cubes
[1:09:01] and then spine things them and reading it here we have less line of codes but you have also less easiness of reading
[1:09:12] it it gets more strange the chord so I prefer to just repeat these lines and make it easy for you to
[1:09:20] understand but you can optimize it in terms of line of code and therefore regarding the Y train what
[1:09:28] we do we again start from a y train which is there's nothing inside it's at zero here
[1:09:37] and we append the samples uh so the right amount of samples which is equal to the size
[1:09:50] of your Roy elements so you've got number of pixels of the Roy for the first case Creator ones and then multiply by the
[1:10:01] iteration value here I in the first case is zero so the first 900 samples will be zero then we'll append this the
[1:10:12] second 900 samples with ones so we'll have zero then once then this will begin two and you will append two
[1:10:25] zero one two three one after the other again on the fifth dimension here what we do we get the the number of
[1:10:36] samples contained inside this training we could get this from this Sol we do from here just for because it's just
[1:10:46] because it doesn't you can get it from this information too by the sum of all the samples here as well if you want
[1:10:53] and it creates the full feature vector and then loads the different columns with this 1D array one after the other
[1:11:03] so this at now is five dimensional and yes the 3600 samples inside once you have created the feature
[1:11:12] vectors we can actually run the model first things is to create an insta I think this one
[1:11:21] no I didn't run the one before too I'm missing some cells including erosion it's okay so um
[1:11:33] um these things is to create an object called random Forest this is the random Forest basically classified model is an
[1:11:40] object represent in the model with an empty model say but ready for hosting the model and the way it does it but simply run
[1:11:51] this code and selecting a initial seed for this random State now I have no time to talk about random forests I will
[1:12:02] need one extra section for for doing that we have used in a pragmatic way but please read about random for us before
[1:12:11] using this so you know what is going on bottom line random Forest is called random because there is some
[1:12:18] randomization there happening that is the why it's so powerful because of this thing and being that adomization in
[1:12:29] could be computers means that you have some Pluto random variables that you generate there and pseudorado means that
[1:12:39] you can set a seat and get always the same results so the way you get out is
[1:12:44] random but if you set the same seed is always the same so each time you run you
[1:12:50] get the same so it makes it repeatable if you don't do that every time you run this code you will have a different
[1:12:57] classification different accuracies different numbers which are a bit weird tight look but if you set a seat and so
[1:13:07] you make your generator of pseudorandom variables always the same then you will get always the same number always the same
[1:13:18] classification and accuracies which is easier if you want to report also because you will need to report this if
[1:13:24] somebody want to repeat your your algorithm algorithm so this create the object and this line here fit the model the connect our
[1:13:40] Target the variable y to our feature Vector X so this is creating the model this this symbol line of code a single
[1:13:51] line of code we have seen how many line of code we need for this one quite a lot
[1:13:56] how many line of code for running the model one so as I was saying the difficult bit is to get this thing
[1:14:04] now now let's have a look at this uh feature vectors that we created you go on this line here and we run it
[1:14:13] will give us the shape so the dimensions for the future Vector which is 306 3600 by 5. remember the first is the
[1:14:26] vertical Dimension so it's rows the second is the horizontal so is the column so we are 3600 sample four five
[1:14:34] classes oh sorry for five features for five uh polary Magic observables While y is three thousand six hundred
[1:14:44] the numbers of row of these two match and so we have no issue here we didn't have any problems within crash
[1:14:55] now once we have these things build up this model build up we can try to do predictions so we can try to do
[1:15:03] classification on areas which are not covered by our training uh the trick here is that we need to
[1:15:11] create uh we need to reshape our data set in a way that fits the feature Vector that we created remember for
[1:15:21] creating the extreme feature vector we had to ship all the files as rows so the two Dimension is to became a
[1:15:32] one-dimension and it needs to have five columns so we need to create a container C for our data
[1:15:41] which mimic this type of um of Dimensions type of shape or that is equal to the feature vector
[1:15:51] so we still we start creating the container so in the most natural way that we'll do we will contain the first
[1:15:59] two Dimension will be the image dimensions and then we have the five features for our polarimetric information and then we stack the
[1:16:10] different different polarimetric cubes inside this container here here by selecting one index of interest when we want to apply the classifier remember
[1:16:21] this is only using a single image so we are only doing this classification using a single image at the moment
[1:16:30] so this creates this container and then we have to reshape it in a way that mimic the feature vector
[1:16:39] so so we do that by using the functional reshape and by saying that the First Dimension is equal to the multiplication
[1:16:49] to the the size of the dimension 1 times Dimension two which will contain all the pixels and the number of features of interests
[1:17:04] so once we we do these things let's get our head around before we proceed with this if Dimension 1 is 500 pixel
[1:17:13] Dimension two is also 500 pixel this new X underscore variable will be 2500 250 000 000 rows in size
[1:17:30] at N5 columns so it will be 2 250 000 by five this will be the dimension of C underscore because you have stuck
[1:17:42] all the elements of our image in a single dimension once we have that in the proper format
[1:17:51] we can feed directly to the um to the random forest and ask for prediction on which class this pixel
[1:18:01] should be you to do that we use the function predict predict so the argument of the function is this
[1:18:10] new uh shaped data our data shift in this format and the output will be the class they
[1:18:19] belong to so this y y hat underscore will be 250 000 000 uh in size will be one column 250 000
[1:18:32] row row that is not what we we want to see so that's not what we want to visualize
[1:18:39] to visualize it we need to reshape back to what it was at the start so again if
[1:18:44] we use the functional reshape for this y hat underscore but now the dimension will be dim one dim two so we go back to
[1:18:54] what we did before before we shaped the div one times D2 now we reshape in the one and Nim talk two dimensions
[1:19:04] as long as this is correct so as long as the number of pixels at the end is the
[1:19:12] same this shape will be happy it will give you the give you the new array if that is not correct so if like here
[1:19:20] you see a plus one then it will crash because the two Dimensions don't fit okay so the two has to fit as long as
[1:19:28] they fit it will be okay and so we get a classification map using one date then we can visualize it using
[1:19:39] this code here and this is how it looks like quick look at these results you see the C is quite
[1:19:46] well classified the marsh area is also quite well the city is a little bit of this classification and also you see
[1:19:54] it's a little bit where it should then be so it is okay but maybe it's not the the best if you
[1:20:01] use different uh area for training a different image in the stack you may get a better results
[1:20:10] but the other will still be some submission there there will be some ambiguity because sometimes you see look
[1:20:16] like the land inside the side image at a single date here is where uh we want to check this
[1:20:25] Dimension this is more for you to have to get you already around what is going on you see the C the full container is
[1:20:33] an image of five say five elements and then it became this 250 000 long feature Vector then you I had the two
[1:20:49] much in terms of length and after we do the classification it will ship back we have our 500 by 500 back
[1:20:58] always make sure these things coincide they are correct or otherwise it will crash most likely next things I would like to tell you and
[1:21:10] would like to show you inside this script is what we do we try to assess the curacy of our classification so we
[1:21:18] try to do what is called a validation these are an essential step when you run some machine learning algorithm
[1:21:25] algorithm you should always check your your accuracy you should check that is doing things well and there are several
[1:21:34] ways of doing it if you do the wrong way you will end up having extremely high accuracies and not really inside the
[1:21:46] data so you change data set and the classification map will be horrible so you really need to be careful now you
[1:21:54] assess your accuracy here I show you a simple way because I'm only using the Roy that we considered
[1:22:02] before but if you want to make this more powerful you may want to consider or you also in other data sets in other places
[1:22:10] keeping of course constant the timings and the say incident saying all of these things but you want to make
[1:22:20] this a little bit more General here is very specific to the small area we are doomed to have very high levels
[1:22:28] of accuracy but it shows you the way you do it so it gives you the tools to be
[1:22:34] able to do this and take it to another level level so the first things is to split the
[1:22:40] simplest way you could do it is to split your your training data so your your area where
[1:22:48] you know what is what is going on inside a test in the training area respectively so normally you use a 33 percent for
[1:22:59] test and the rest for the training so 67 in this case is is possible to do cross-validation so to
[1:23:13] split again in this 3367 but doing it many times and in here I will show you a three-fold
[1:23:24] so you you find the three way but machine actually finds three way to split this data feel completely independent way and then
[1:23:34] assess the accuracies for each one of them and if you have not enough data you can also say leave one out so you always
[1:23:43] take one sample train with rest and test with this thing again take another sample train will rest and test with that sample that is
[1:23:52] leave one out so this is the extreme of this cross validation when you apply this type of
[1:23:59] validation methodologies you generally find out that your accuracy go down because this one all yeah generally you
[1:24:10] find out that it's more complicated when you when you do these things so what we represent here is the
[1:24:18] accuracy accuracy which we Define as the correct classification divided by dual classifications classifications so tell us how many uh write calls the
[1:24:31] algorithm apps over all the calls so how many pixels are good or well classified basically it is the say the possibly the
[1:24:42] simplest way to to do this and there are other ways more powerful but this is the most clear and possible the most
[1:24:53] straightforward and most people use it so that's why I include it here but they also lose that confusion magic
[1:25:01] since you will see later now how you do the split likely python the Escalade library of python and some functions for doing that
[1:25:14] so we use the function train test split here what you do you write your feature Vector your target vector and how much
[1:25:24] you want to have the split you will see 33 percent and then again a random state to enter every time you run it is the
[1:25:32] same if you want to share the code also the best that we run will get the same result
[1:25:38] and what you get out is a split between a train this one this one and a test
[1:25:46] area for both feature backed in Target vector vector then what you do you create a new model
[1:25:54] object run on Forest you train with the spring the train part of your split and you produce the results of the test area
[1:26:07] by predicting use in the test see so we trade using the train and we tested using the test
[1:26:17] part that we obtained here and then we use this function so this one sorry accuracy score to tell us
[1:26:28] about the accuracy and we need to give the the results of the prediction and the actual value that we
[1:26:38] have there to get an accuracy also we can get a computer matrix by tell that tells us
[1:26:45] where the error comes and here we do the cross validation part where we say that we will do good this
[1:26:54] to be three-fold so ubd three times and if we run this these are the results the accuracy the first case is very very
[1:27:03] high high the the confusion Matrix is this one and three accomplish our Matrix you when you look at the computer Matrix you see
[1:27:14] where we make mistakes like there are mistakes in class between class one and two there is some mistakes the sixth
[1:27:21] year misclassified misclassified so tell us where you make the mistakes actually and the threefold give us this result
[1:27:31] here you look at these three accuracies you see they are lower than this one it is what you expect
[1:27:39] normally what people do is average this three to give a final accuracy in this case will be around 0.96
[1:27:48] what I would like you to see is that your results the accuracy that you get is really sensitive to the way you
[1:27:56] select your Roy you move your Roy a little bit and your results is very different so this is because we are using very
[1:28:04] small noise and so that is not ideal you want to to have a better way of selecting the targets but in general the
[1:28:14] results you get from machine learning is really strongly dependent on the area that you select for trading and test
[1:28:23] then second part the script consider multiple dates the fist case is when we use what is called Brute Force we just keep
[1:28:37] everything all the pixels as they come to the machine and we let the machine figure out if there is patterns there
[1:28:45] how to find out the patterns and this is the the say possibly not the approach that I
[1:28:53] like the most because there are ways you could format the data so that is better for the
[1:29:00] machine to then extract this pattern find out the patterns if you give them everything everything sometimes they just they there will be
[1:29:09] mistakes coming out so that is my Approach you you can have a different approach you may prefer brute force it
[1:29:17] is up to you but here I show you how to do it so we have 19 dates here and five
[1:29:24] polarimetric features the easiest way to do this is to use to add new columns every time we add
[1:29:34] features features so the first five columns will be the features that will be the polarimetric feature observable for date one
[1:29:43] then from 6 to 10 will be date 2. from 11 to 15 will be day 3 and so on so you
[1:29:51] stack them horizontally as columns all the dates if you do that with 90 dates and five polarimatic features you end up with 95
[1:30:03] columns or 95 pictures for your vector here is where we do it first of all we want to
[1:30:12] understand how many features we will have at the end with this time series approach we have number of Acquisitions
[1:30:18] sure multiplied number of features and then we create again this container and start it doesn't have any
[1:30:28] samples here is still empty because we want to fill it in the easiest way to do this filling in of the feature Vector I
[1:30:38] find I found find is by using two uh for loops loops um um two nested for Loops one in the other
[1:30:48] the first one is for the number of acquisition the second one is for the number of classes you remember this part
[1:30:57] here is basically the same that we did before but now because we have more acquisition we have to invest this
[1:31:04] inside another loop which works for the number of acquisitions again you will find different ways of making putting these things together we
[1:31:16] realize Less on for Loops but I guess four Loops are the one that are more intuitive and that's why I'm using them
[1:31:23] here here so the first for Loop is about the uh the times we are selecting so we start
[1:31:32] with the first acquisition so J equal to zero and then what we do we create this one dimensional features as we were
[1:31:41] doing before just the same thing then we start the second Loop which is on the number of classes remember is
[1:31:50] what we were doing before so we go on initial Cube this Cube C11 we select the index for the first acquisition remember
[1:32:03] before here we have the index of the image now we substitute with J which is the index running over all the images
[1:32:13] and we select the parts part of the image inside the row number one because I is equal to zero in this case
[1:32:26] uh we Ravel so we make it one day we store inside the c11d and we are paying
[1:32:33] to these vectors which we have been initialized here as zero vectors so as before we go fifth Comcast one then
[1:32:44] Class 2 the pixels for Class 2 get appended at the back of plus one then class three at back of Class 2 and class
[1:32:52] 1 then class four are back of clustering Class 2 in class 1. lead your attention on the fact that we
[1:33:00] are piling them up in the Fifth Dimension which is the vertical Dimension remember samples are in the
[1:33:06] vertical dimension we do the same for the element for the image C to two for the cross
[1:33:15] correlations you want to for the entropy and for Alpha just as we were doing before before we create again your our Target Vector
[1:33:25] here see we were doing it before and at this point here we load all these one dimensional vectors inside this x
[1:33:36] strain temp temporary vectors this x strain 10 temporary will be will have a number of row equal to the number of
[1:33:48] samples we are considering and five columns for the five feature vectors that we are adding here this one
[1:33:59] dimension one-dimensional features so it is not the temporal full temporal feature Vector is a temporary one considering one single date
[1:34:14] the full feature Vector comes here so what we do we take this temporary feature Vector which is only five
[1:34:22] columns and we append at the back of the final feature Vector in the second dimension C axis equal here is equal to
[1:34:34] one so we are doing the pain in the horizontal Dimension so along the columns we are appending it not anymore
[1:34:43] as samples vertically but as features horizontally so be very careful of these values here because it really change a
[1:34:54] lot with your doing and also this is the bit where one is to get the head around
[1:34:59] how to pile up these feature vectors end of the story we have piled the first image the
[1:35:08] feature Vector the first image inside this Vector because it was empty at start then we go second acquisition
[1:35:16] again we initialize this body vectors we do all the for Loop for the four classes and we obtain again another extreme temp
[1:35:27] future Vector temporary for one acquisition acquisition we pile it with an append on what we had before
[1:35:37] before so now we will have that the first five column will be class will be time one
[1:35:43] which acquisition the second uh five columns will be for the second acquisition acquisition because we are pulling up along the
[1:35:54] um um the horizontal axis axis is equal to one which means horizontal is what you will call to because python starts from zero
[1:36:06] next acquisition you will pile up the field acquisition to The Columns of the second and the first
[1:36:15] acquisition you pile up the bad book at the back at the bottom of what you have for 14 second and one and so on until
[1:36:24] the ninth acquisition so all of them one after the others you pile them up and at the end you get the vector which
[1:36:32] is with 95 columns can we run this one and then we want to check that we are right when we we're
[1:36:41] talking about these Dimensions so we see that the single 1D feature Vector is just 3600 just one single column
[1:36:52] that this one could C11 the the target Vector is just a single column as before the temporary one is considering one
[1:37:04] acquisition with all the features so it'll be three thousand six hundred times five five columns the final one
[1:37:13] which is this one for the time series yes yes it will include 95 columns so 3600 by 95
[1:37:23] which is what we want at the end so once we have our feature Vector sorted we can again run the uh the
[1:37:34] classifiers here and you do you see the same way you just change the feature Vector you put inside
[1:37:41] and you just get the same to do the classification so the predictions we need to rearrange our
[1:37:50] data in this look very big cube with the 95 features so what we do we create again a simple
[1:38:01] one for one acquisition a c for one single acquisition and then we reshape this into a what is
[1:38:13] [Music] [Music] in the bigger one in the one that con that is like we did before you remember
[1:38:20] so we we make the 2D image in the uh say 1D image four five columns again and then we are paying these to what we
[1:38:30] had before so we do the same processing we were doing for the future Vector but this time with data
[1:38:39] so X is equal to one which is the horizontal one otherwise you will append the other dimension it will not work it
[1:38:48] will crash it has to be columns but once we have done all this beta pending and creating this huge uh data
[1:38:58] you say the data frame what we can do is to run the the code but before we do that let's have a look
[1:39:08] at this electron this one let's have a look at the dimension of these things so we believe that the the new
[1:39:16] shape data set will be 250 000 rows in 95 columns this this includes absolutely all the data that we have all
[1:39:29] the dates all the polary magic features the CV which is the one for one date is 250 000 by 5 because it's only a single
[1:39:41] date before we are paying the to the big one one and see the start one is again 500 505
[1:39:49] so before we do this reshaping to make it to make the image into a line once we have this we can do the
[1:39:59] predictions and we look at the results look at results they are better than before before although the seed is still less on
[1:40:08] misclassification but yeah they are improved a tiny bit from what you had before but it is hard to say this
[1:40:17] thing by just looking at images we can do the validation you will see here it is exactly the same
[1:40:25] that we were doing before it's the same line okay they only change the names of this variable that we put inside so we
[1:40:33] split our the area so weak there is our row is into 33 for tests and 67 for train
[1:40:42] and then we train over the train after it and we test we predict over the test part of it of this these samples and
[1:40:53] then we can calculate the accuracy and computer Matrix and we do also a cross-validation to have a bit more
[1:41:01] robust way to see this thing you see the accuracy is improved here and uh the results you see are and again
[1:41:12] for the cost validation is lower than when you do the you just select one but they have
[1:41:20] improved so you have a better classification now this one may looks quite ridiculous to solve and indeed it
[1:41:28] is if you use a bigger data set if you tried on more images you will not have
[1:41:34] one dish is this because you are using Small Voice and a single image it is very easy for the machine to do it that
[1:41:42] is uh you have to be careful when you get this accuracies to make sure that your drawing are constructed properly
[1:41:50] otherwise you get ridiculously high accuracies accuracies but anyways higher than before so you know there is something we are adding
[1:41:58] there there and the next step of the script is by using the synthesized multi-temporal information and the idea here is that you don't
[1:42:10] stack the 19 images as Brute Force inside there but you try to to synthesize it in a limited amount of
[1:42:19] features so not 19 would show the full Trend but in this case it's two but you can have four of five which are some
[1:42:28] characteristics that represent this type of trend for that observable but without using the actual values for it
[1:42:38] why you do you may want to do that there are some cases like in agricultural for instance where you may have the same
[1:42:47] Target the same type of crop see badly it's actually see a city that different times so the sewing happens at different
[1:42:55] times quite different if this happened the time series for field a may look delayed compared to the same series for
[1:43:05] field 2. if you try to do classification the machine will see field 1 and field 2 is
[1:43:12] different different this may be fine because you may want to separate the type of agricultural practices or may not be fine because you
[1:43:21] just want to know where barley is so once you use the full-time Series in a Brute Force
[1:43:27] you may risk to have this issue when there are delays between the trends of different targets but if you consider a synthesized
[1:43:36] information for instance you consider the mean the standard deviation minimum and maximum and there are other things
[1:43:43] like the temporal Land review other things so you can consider if you do that then does it matter when the
[1:43:51] process start these values will be will be the same say or very similar to depending on your problem Brute Force
[1:44:00] may not be the cleverest way to do it maybe you still have to help the machine a little bit to see this pattern by
[1:44:07] adding by using a different way of formatting your data what do we do here just as an example of what you can do is
[1:44:16] by using the mean and the standard deviation so very simple is the simplest you can get but it tries to you know you
[1:44:26] know to step in that direction where you synthesize the temporal information before giving to the machine it is a step forward to using just one
[1:44:37] image because he's using mean standard deviation deviation but also you you could add more features for instance two maybe it's not not
[1:44:46] enough to get the best accuracies out but it's a start so again uh we consider the mean of an
[1:44:56] observable cc11 by calculating the mean over the tube and it's important to tell python with which axis we are doing the
[1:45:09] mean mean means that we are doing the mean over the third axis of the tube remember the
[1:45:16] tube and first waxes were the dimensions the third axis was time so we are averaging over time this is the time
[1:45:27] Mean Time average of the C11 images inside stack we do the same with the standard deviation deviation standard deviation over the time
[1:45:40] then we repeat it for c22 for C12 entropy Alpha features again we need to initialize our Target
[1:45:59] vector and initialize these 1D vectors there are several way you can do it you can pile this thing together into cubes
[1:46:10] and then feed the tubes after I do the simplest you could think about which is considering different 1D features for
[1:46:21] each of these say temporal features that you are considering and so there will be a 1D training feature for the minutes
[1:46:31] standard deviation and so on what we do here as we did before we have a for Loop over the classes we are
[1:46:41] considering and this if you look at this is identical to the one with a single image image with only difference here is that we are
[1:46:51] we don't have an index for the image remember remember and we have this double of the features
[1:46:58] we were having before we have mean and standard deviation and for each one of the polarimedic observable but for the
[1:47:06] rest it's identical you will find so we pile up all these 1D features here we create again our Target Vector
[1:47:18] here as we were doing before be careful to append on the axis equal to one sorry the the fixed Axis or X is equal to 0
[1:47:29] for python which is the vertical one where our samples go the vertical axis and here we build all this inside this
[1:47:42] feature Vector which is now 10 Dimensions it was five before but before we extracting two time features for each
[1:47:52] polarimetric features we have added 10 10 features in total we can run this and then we run this one
[1:48:05] to look at the size of these things if we consider the one dimension temporally polarimetric feature we have 300 some vector
[1:48:18] vertical so column Vector of 3600 samples 3600 just one vector a column while our synthetic one is three
[1:48:34] thousand six hundred times ten ten columns because we are considering 10 features combining polarimetry and temporal information
[1:48:45] what we do here we fit again the model same day before you just change the name you put inside here and we we test it
[1:48:57] in this line here and what we do here we select all our so we will create again
[1:49:05] this big container with all our features there and we reshape it so that we can feed to the machine then we do our
[1:49:14] predictions and we the results of these things will shape so that is equal to an image again and this is our result and
[1:49:25] if you look at this jume audio it's a bit better than the other one and the from just a visual look when CDC is a
[1:49:34] little bit reduced but yeah it is uh at this point this can be a little bit subjective because we don't really have
[1:49:42] a fantastic uh training data so we just select this on the image by eye and uh again my suggestions that you
[1:49:56] look at the three results and you try to compare compare but what we do here is to run the
[1:50:02] accuracies same thing the before we just change the names of these things and you have that your assist now are very
[1:50:11] similar to the time temporal one higher than a single image which is what we we are happy about so it's better to use
[1:50:19] the stack not single image but uh at this stage they are similar to what we have with the 19
[1:50:29] um um pictures 95 features available Force approach and you will need better training data to be able to
[1:50:39] see differences between these two okay so that is the random Forest finished and here there is a bit of
[1:50:52] suggestion of things you could try to do like make this into functions and make the Discord a bit more modular and my
[1:51:00] suggestion is that you do this using spider instead this one so you create these libraries and then you call the
[1:51:06] libraries by importing them but it is up to you it's something to make it a little bit more
[1:51:13] automatic and mostly operational what I would like to you do to do now if you have the opportunity is also to
[1:51:22] think a little bit about that so what do you how do you assess this random Forest performance the performance of the
[1:51:31] random Forest algorithm how do you think it was of the three approaches which one do you think is more accurate for your specific
[1:51:40] application application and why these things is happening how you could improve results in your case by producing a better feature
[1:51:54] Vector that we should bear your specific scenario scenario and things like that if you have the opportunity to discuss this with
[1:52:02] somebody else that would be great so that you can also share your EDS otherwise just reflect on how you can
[1:52:09] you know take this and make the useful for you with your data set the last part of the the script would be
[1:52:18] quite quick and just want to show another type of algorithms that we could use which is unsupervised so it does not
[1:52:26] require us to select this row inside images we just give the data to the machine and the Machine will tell us the
[1:52:34] classes we just tell how many classes classes we want to have and the Machine will care for all the rest
[1:52:41] possibly the most popular of this unsupervised classifiers is the key means means and this is the bit that you will need
[1:52:52] to create to initiate this object he means so you need to tell how many classes you want to have in our case is
[1:52:59] for you to sell out you want to do the initialization which is random how many times you want to repeat it
[1:53:09] the different seeds so to to get your results the maximum number of iteration for each one of these iteration the
[1:53:17] tolerance level and the initial random state that you want to have so to make it um say repeatable so every time you run
[1:53:26] you get the same result so here we see a little difference from what we were doing before
[1:53:33] many machine learning algorithms will need our feature Vector to be normalized or standardized this because they're based on distances between these points
[1:53:45] this these vectors in their in the future space and and standardization General help within the features in a
[1:53:56] better way otherwise one feature may be having more weight than another when the the distance here calculated
[1:54:04] random Forest doesn't the way is built because we create this uh these trees it doesn't really need
[1:54:11] this this standardization this normalization but many of the other machine learning algorithms do need it so I also want you
[1:54:20] to show you an example here with a key means that does need this kind of can be
[1:54:24] improved by doing this standardization so what we do here is to take each of the features for instance the
[1:54:33] C11 then we subtract the mean and we divide by the standard deviation and we do this for all the features or
[1:54:42] our our vector and then we run the k-min with this function fit predict see we don't need to train because it's unsupervised
[1:54:54] so we just we just need a single function call to do the classification what comes is one dimensional then we
[1:55:02] need to reshape in order to make it similar to an image okay we can that we can visualize
[1:55:10] and the results is what you can see here you see it's not better than what we were doing with
[1:55:18] supervised classification like the yellow is supposed to be the C is a lot here but uh it's in unsupervised the
[1:55:27] machine is trying to find the pattern inside the detail on its own it can be quite useful as a step before you really
[1:55:36] start your supervised classification leader so you can be quite useful and in some cases we want to do the same for the case of
[1:55:48] Time series so again we normalize the features and we produce the our big um um data frame or big
[1:55:59] feature Vector like we were doing before and then we can run the fit predict adopt in an image between a
[1:56:08] classification map this one will take a bit more time because we have the data is Big so it's really calculating a lot
[1:56:15] of distances in order to to perform the classification so it may take a little bit of time but on the mean while while
[1:56:24] this process I can show you the last bit where we again use uh um use the data with the synthetic
[1:56:32] temporal information and as before we normalize and then we can feed to the k-means algorithm here which I will run
[1:56:45] here if we have a look now what you obtain using the time series you see the result is a bit cleaner than before less
[1:56:52] noticing that when we will get in here but still there is a little bit of confusion because the machine doesn't really know
[1:57:01] what is what doesn't have so it may confuse the water with the within land areas and this is the results where we acquire
[1:57:13] with the synthetic information which again is a bit better but there is a bit of confusion there
[1:57:20] nevertheless this this type of unsupervised algorithms are useful sometime and you may want to um to exploit them in some situations
[1:57:35] that is really old code is finished now and I would like to finish this with the uh this bit here so you I would like you
[1:57:44] to think a little bit about uh this came in k-means classifier and now it compares to the random Forest one and
[1:57:53] try to get your head around when you could use okay means why it could be useful for you right as a maybe as
[1:58:03] initial step to then go to our a supervised classifier or if this could be really useless for you just think a
[1:58:11] little bit about it the potentiality of this type of algorithm and when you may want to use it
[1:58:18] take this to the next level as you have seen here how to use random forest and key means but there is so many other
[1:58:27] machine learning methodologies you could use even just inside the Skiller library for instance you can have support Vector machines there are
[1:58:39] networks and many others you will see that as long as you have a pixel based classifier so means means one pixel one
[1:58:48] sample then you can really apply all these things by just changing almost a line of code two
[1:58:57] lines of code and you apply a new classifier you see these libraries um um what I suggest you is to you try more
[1:59:06] than the random Forest is normally considered a good one and often give the best results but not necessarily in some
[1:59:15] situation is not the best so you'll be able to run other algorithms and see how they compare as well
[1:59:23] um what we didn't cover today is deep learning if you want to use deep layering methodologies then the thing is
[1:59:31] different because you use imagit to train so you don't use a single Pixel training like object oriented type of
[1:59:38] thing and because it's based on this convolutional neural networks and so this was not covered maybe in the future the future practical
[1:59:49] but not here so this will not allow you to to run those algorithms but once you have learned how to use the pixel based
[1:59:56] one one doing a step to decide their deep learning it won't be that complicated the step is not as big as you can think
[2:00:06] once you know how to use the pixel based one one so so and and in these uh have a look also the
[2:00:16] other other areas inside the data set and play a bit around with this code if you have any issue with these things please
[2:00:27] ask your question I will be now answering answering after the session I will be answering the Q a I will be answered your
[2:00:35] questions and I hope you you enjoy using this this this data so this is this methodology so
[2:00:45] I would like to thank you for your attention and also would like to acknowledge the data providers in this
[2:00:51] case is the European Space Agency thank you very much Armando thank you for the wonderful presentation and demonstration we will
[2:01:03] now transition to the question and answer portion of today's training please enter your questions in the question and answer box and we will get
[2:01:10] to them in the order they were received we will post the question and answer document to the training webpage before
[2:01:16] the start of next week's training below is the contact information for Dr Mourinho along with links to the trading
[2:01:24] webpage website and social media if you enjoyed today's webinar we hope you will sign up for the rset list serve
[2:01:31] to receive notifications of future trainings and follow us on Twitter for other relevant announcements pertaining to NASA's Earth science
[2:01:46] I want to thank everybody for submitting such wonderful questions and again we do encourage if you have any questions
[2:01:51] based on what you've heard today from Dr Reno please do uh submit them to us and we'll try to get to them before looks
[2:01:58] like we have about 30 minutes left so we'll try to get to as many as we can in
[2:02:02] the next 30 minutes um so Dr Marino question number one is it possible to follow the Pulsar
[2:02:09] approach for urban classification or is it only recommended for different vegetation types that types areas thanks for for this opportunity so let's
[2:02:21] go to to answer this one uh yes you can do urban area classification or generally Pulsar applications and there
[2:02:29] are quite a lot of them one thing that is quite curious is that possibly the most famous training data set ever used
[2:02:37] by the Pulsar Community is in San Francisco it's about the city and also the the sea surrounding in the forest
[2:02:45] so definitely you can use and especially gets very powerful when you combine it with interferometry so you do what is
[2:02:52] called pollings are because you also have some information about elevation of your target application on Urban are related to
[2:03:02] change detection so the buildings that new construction say a new land change type of things but also classification
[2:03:09] the type of urban areas where people can classify the type of settlement as well so it's a quite um
[2:03:17] the other people work on that great question number two there are some similar pixels in the RGB SAR image in
[2:03:27] your slide how do you differentiate agricultural Fields with out of marsh or even Wetlands yes these are also a very
[2:03:35] good question the first thing that I would like to say here is that what we see in an RGB is just three channels a
[2:03:42] red a green in the blue but impulse are images you have much more there is more information there you have seen in this
[2:03:49] tutorial today we extract five observation observables and here we are only plotting three inside RGB so my say a note of caution is that when
[2:04:01] you look at this RGB which are beautiful uh don't think all is there it's like a multi uh multi say a spectral image
[2:04:11] um with respectable images it's not all there there is something hidden that is not shown in that image and so Explore
[2:04:20] More Than Just RGB but RGB a very useful for trying to get a feel about what you
[2:04:25] have there and there is for sure an ambiguity between different targets especially if you see a different time
[2:04:35] during their phonological stage so you say you can have a type of wheat that's what month of the year which will look
[2:04:44] exactly the same of the grass or some something different so they will be ambiguity that is for sure what we will
[2:04:53] I want you to show here is that by using temporal information so by look can also at all these things evolving time
[2:05:01] you can get extra information and understand better which is the type of Target for instance maybe the grass will
[2:05:08] stay more or less stable do which field will change a lot a CET will be very different as well and very sort of
[2:05:16] stable and so on so temporal information I think is the key otherwise you will always have ambiguities even with
[2:05:23] polarimetric data it will always be ambiguity ubiquities between some type of Target which will just look the same
[2:05:30] but you should not be too surprised in Optical is the same you take a sentinel one image so not very high resolution
[2:05:37] and sometimes you cannot really tell what is there it's very complicated you know that is well temporal data
[2:05:46] okay wonderful question number three can we map crop damage using Sentinel one this very good question and so you can
[2:05:55] do something similar to that the people are working on detecting anomalies into the evolution of uh something some crops
[2:06:03] so you you need to build a model about that crop is supposed to evolve in time so the different if you want colors that
[2:06:12] will assume in RGB so the different characteristics polymeric characteristics although there's more than RGB but to tell you so the the
[2:06:21] different polar limited characteristics in time and then once you have this model you can look at your data now and
[2:06:29] see if your crop is following the train then you suppose it should follow so you do something called like gaussian
[2:06:36] filtering is one way you can do that and then if there are with all the Kalman filters the famous one if there are
[2:06:43] differences between what you have and what you expect then you say something is going on inside that field so indeed
[2:06:51] yes you um suggest you to tell you something you can do is not as easy as what we did
[2:06:57] today but this is visible great question number four is it the same definition of the Dual polarimetry
[2:07:06] decomposition as coded into snap uh yes it is the same code not in the same type of decomposition which is also
[2:07:16] developed in snap by using Java so we use Python but that's the same thing yes great question number five can you
[2:07:24] please explain saving the input image stack is binary NV format if possible please briefly show how yeah this is not too complicated but it
[2:07:36] was too much for doing in this this training also the one issue is that people if people could not install the
[2:07:44] library they won't be able to do it so I that's why I removed it but this very
[2:07:50] few lines of code here I put a link where you can see how to do it and this
[2:07:55] is really very few lines of code the important there so the the things get very simple if the U extract so you read
[2:08:03] an image important maybe image in Python and then you obtain some added value product to your map and then you export
[2:08:12] this again in Envy the same image with the same number of pixels and then it's very easy it's just two line of code if
[2:08:19] you start modifying the size of the image you play with these things then the image will be distorted you cannot
[2:08:26] do it anymore you it's more complicated to do it but if you really want to do things that a little bit more complex
[2:08:33] than just that so read the image and then put out the get the output with the same format then my suggestion would be
[2:08:42] to install gdal and to do this the hard way but also the more robust way that you have more control of things and you
[2:08:50] can also you don't have to export your name you can use I don't know adjective whatever you want to use
[2:08:57] so yeah easy if you do easy things get complex and then suggest gdal if you want to do more
[2:09:05] operational things and question number six can you explain the data preparation stage please also the format of data
[2:09:17] yeah yeah that's a good question and I can direct you to the previous tutorial that we we
[2:09:25] were doing so I think one year ago I remember we did on this um so if you so that is basically the
[2:09:33] tutorial we were suggesting you to see uh before starting this one and if you go on YouTube on YouTube video you
[2:09:42] should find it around middle 30 so there is where more or less you defined what we do all these passages and it's quite
[2:09:51] a lot of things and you've got quite some time so for the sake of time I will
[2:09:56] direct you to that instead and explain it now um um wonderful and I also had two in the in
[2:10:04] the slides that are on the trading web page on the prerequisite slide I forget what slide number that is we do have
[2:10:10] links to all of the previous trainings that we strongly encourage all the participants to go to if they want any
[2:10:17] background information especially more on the theory of SAR polarimetry we have all those links for those prerequisites
[2:10:23] we do encourage you uh to to go check them out so question number seven which SAR indices will you recommend to map
[2:10:31] and monitor crops from Sentinel one data these are very interesting question very topical series there's a lot of research
[2:10:39] going on on this at the moment so to try to find what are the best vegetation indexes to to describe your type of
[2:10:46] specific type of crop again there is another tutorial on that so you can redirect you to the to the previous
[2:10:54] training but I can give you my two Penny contribution here very quickly but but you learn more from another tutorial and
[2:11:04] that is usually depends on the type of vegetation you are dealing with so the type of scattering model polarimatic
[2:11:13] scattering model that best fit that type of vegetation some indexes are more sensitive to a certain type of model so
[2:11:21] mother that sends it to another type of model so the uh I think there is not really one that performs best you will
[2:11:29] need to say to check what you have on your data so to try this several and Seed one they
[2:11:36] give you the best accuracy great and as stated in the first line of the the answer we will be covering uh
[2:11:44] SAR vegetation based indices in part three of the training so we do hope all of you will be able to join us for all
[2:11:51] three parts of this webinar series question number eight how to run snap GPT graph using python can you please provide any small example
[2:12:00] or used in this for generating inputs for this tutorial and and that is a good thing so there's
[2:12:09] a good point so using the GPT is quite powerful because what it does it doesn't it take you see out of the process of
[2:12:19] being there in snap and running the things manually you can do it all automatically and it is really core if
[2:12:26] you are doing something like inline processing you get a new image you want to go that goes inside your pipeline you
[2:12:33] need to get an output in six hours so you cannot be there every time a new image arrive to click on Snap for doing
[2:12:40] it it um if you don't have any requirement in this context that you can simply run does not batch processing so you go
[2:12:50] there you have your graph you put everything inside you click run and then come back on your machine few hours
[2:12:56] later that is you can do it it's not it's allowed it's okay but if you want to do all in line so that that's
[2:13:04] automatically New Image come get out and then this graphical processing tool is really the way to go
[2:13:12] um it is a little bit fiddly at the start because sometimes especially when it crashes are to debug I would redirect
[2:13:21] you to this training on YouTube so you can can start having a look at what it is and
[2:13:28] when you debug your code make sure that the graph works very well in snap already so try it for batch processing
[2:13:37] CO2 images and see if it works okay and then you try to approach it in python the most time most of the case is python
[2:13:46] with two errors if they say the file names are wrong or the the folder is wrong and it will be very hard to
[2:13:54] understand that that is the error because it's quite it's not easy to debug but when you're sure it runs well
[2:14:00] it's not then it's a good step and you can try to implement in implementing in Python and there's really a few lines of
[2:14:07] code you're talking about I don't know 10 lines of code for doing it but it needs you need to be careful on the way
[2:14:14] you approach it okay question number nine is it possible to extract these parameters using Pulsar pro software using a batch processing
[2:14:23] tool tool yeah very good question yeah Pulsar Pro is a very powerful software for polarimetric data developed by Eric
[2:14:32] Potter in Rain um so indeed you can do it do batch processing of course our Pro it's a
[2:14:39] little bit more complicated than doing it in in snap but it's still very feasible you you can definitely approach
[2:14:47] that the good thing supports are pro that you find processing that are say better for Quad pole because I'm not
[2:14:56] including the snap yet so they you will find the composition that you will not find is nap the crop out here you also
[2:15:04] find this map but others you won't find this map pro has it so that you can try
[2:15:11] to see how to implement this routine batch processing you can try to to find the way but also going to let you know
[2:15:20] that at the moment we are converting Pulsar Pro C routines into python this will sit in the map platform it's a
[2:15:31] collaboration between us and Isa where you if there will be all these um um say routines python the data will be
[2:15:41] there especially nicer in biomass that will be there and so on can really harness the cloud computing and cloud
[2:15:49] storage and you don't you need to download stuff and you can run your python code there and the python code
[2:15:54] that we will put there and among other things there will be the routines for Pulsar Pro now I said still at the start of map so
[2:16:04] you will need to wait maybe one or two years before seeing it happening but it is getting there we are working on it
[2:16:10] and hopefully you will find it useful in the future terrific question number 10 can we use Earth engine python API to execute this
[2:16:20] exercise I mean using the Google Earth engine Sentinel one catalog and not downloading all the images yes
[2:16:28] so he announced it is yes and no so this specific exercise then the answer is no because on Google Earth engine you only
[2:16:38] find the grd ground detected images so these are the images the intensity images without the face to do what we
[2:16:47] are doing today you need SLC single Loop complex which obsess the phase and so you can do the say the correlation
[2:16:55] between the the two Precision channels this won't be possible at the moment in Google Earth engine that it are not
[2:17:04] there but you can of course upload your uh your data your SLC in Google Earth engine and then run it there so that is
[2:17:15] a possibility and you need to see if you want to do it I think the good things is
[2:17:20] that you don't have to download and also the processing it helps but the processing time but the the good things
[2:17:26] is you don't download but if you have to upload your your data you have to download them before so this baby that
[2:17:33] is not the the great use of Google Earth engine but if you are all your see processing stack
[2:17:41] all your presentation of data the thing useful you just stay colder in is immigration immigration then there is a possibility to do that
[2:17:50] in other things that is really useful and is coming up more recently is this Google call lab platform collaborator
[2:17:58] collaboration platform and their Duran Titan so in Google collab you really run you can run a script that you have now
[2:18:08] that I made available you can run it in in Google Cola but it's a little bit like a Jupiter notebook but you can also
[2:18:16] run the dot Pi so it's not just the notebook and the thing there is again you need to upload this data so you need
[2:18:23] to put them on Google server before you you run but then you can use cloud computing so if you have limitation in
[2:18:32] terms of computing computation and then Google collab may help you also I think you can if you pay premium you have
[2:18:40] faster processing as well so so it is really uh cool things and possibly we will see more about that in the future
[2:18:49] so if you trying to harness cloud computing with Google then it's Google call lab where I will point you but you
[2:18:57] will still need to download the data some point until Google decide to put slc's great and question 11 I'm just going to
[2:19:08] talk through myself it looks like one of the participants got an error message in their code using the numpy integer
[2:19:14] function using numpy version 1.24.1 and this participant was able to troubleshoot and resolve this issue by replacing uh the
[2:19:26] numpy.int with numpy.int 64. so if anybody else is getting that error message thank you to that participant
[2:19:33] who was able to troubleshoot that and share it with everybody so again all of these questions and answers will be
[2:19:39] uploaded to the training Page by next Tuesday so we will everybody will have access to it so question number 12
[2:19:46] is there a way to directly download data from the esa website using apis that's where is yes you can use these
[2:19:55] apis that are available and then you can see how to meet your download also you can do a request this ask is there a new
[2:20:05] image and when the answer is yes you download or you don't these kind of things you can be very clever in making
[2:20:11] these things more operational and make a decision in line for the inline processing if it is not
[2:20:19] um in line things that you needed to do so then if you just need to do batch
[2:20:26] download and then maybe my suggestion is to use the Alaskan satellite facility the very easily allow you to to create a
[2:20:36] python could you create this for you then you just need to run this code on your machine and download start it's
[2:20:42] really super easy and you can see a link there or how to do it otherwise batch downloading by clicking on each
[2:20:51] one of the images is enlightenment when you have lots of them I it's not something I don't suggest doing if you
[2:20:58] can avoid it but there are a way of doing this batch download as you will see in the ASF website
[2:21:07] terrific question number 13. can you can you please specify which versions of the libraries you are using for sklearn
[2:21:14] numpy scipy Etc yeah and yes I was checking this way like you remember I didn't remember the
[2:21:23] exact version but the scaling I'm using is 0.19.1 and room by 1 is 0.14.2 if you download an account more recently you
[2:21:34] will have bigger numbers there but if you did in the past you may have smaller smaller numbers more is it more old older
[2:21:44] versions I cannot tell about the older version but the new version of people with more modern version than mine that
[2:21:52] branded it was okay so it should work um if you have something before that you may not so you may need to to get the
[2:22:00] new versions question 14 how do you clip the exact same subset area because I think there's some shift sometimes up to one pixel
[2:22:11] between different images yeah this is a very good point um to create this stack of images you
[2:22:20] need to do some co-registration so the if you just joke out the images by using even if you
[2:22:28] use the accurate the precise orbits of Sentinel one you may still have a little bit of a shift it's not perfect so it's
[2:22:36] a pixel is something that you can easily have have [Music] [Music] um itself try to do its best and it's very
[2:22:47] good most of the time but sometimes there is a little bit of a shift and you need to correct for that and make sure
[2:22:53] that all the images overlapped very well on top of each other and this is done by doing some co-registration you will see
[2:23:03] a link here where there is some registration for Cosmos climate it's a different type of satellite and those is done for
[2:23:13] interferometry so the co-registration they do there is the good one the one that will allow you to do interferometry
[2:23:19] as well for doing Paul Pulsar polarimetrics are you have less strict requirement when it comes to co-registration for us a shift over
[2:23:30] almost a pixel is sometimes acceptable because impulsory with leverages and then we consider that we overlap the
[2:23:39] different images without calculating their correlation so like what you do in interferometry so you have a covariance
[2:23:47] matrix for each image in the stack and you use that now if you shift of almost one pixel your covariance Matrix will
[2:23:56] not change that much because you're doing some average there so you are considering many pixel inside still you
[2:24:03] possibly you cannot accept the shift to see a couple of pixels but a very little one you may still be okay if it's Pulsar
[2:24:12] if this interferometry not at all you will not be able to do anything you really need to be super precise there
[2:24:19] much smaller than a pixel and so try to give a a go so if you want on
[2:24:28] your data try to give a go with this registration stack stacking of images don't forget about that otherwise the
[2:24:36] images will not overlap you will see very weird things in your data it is registration is an essential step when
[2:24:44] you want to do multi-temporal analysis terrific question 15 I'm not sure about defining the file paths in part 3.1 of
[2:24:54] the Pulsar time series document should I set it up with the cubes or the imagery uh so in the fifth file so the time
[2:25:02] series file where we we create the tubes then the pointers or your folder should point to where the images are
[2:25:13] in the second file you want to test the ml in the file name then you can point
[2:25:18] to to um when you saved your cubes so where the cubes are but in the first one will
[2:25:26] be the the images and make sure as if you are getting errors there make sure you put the
[2:25:33] double slash at the end make sure you use two double slashes if you are using Windows and all this kind of things
[2:25:41] that is you should be that wonderful this this okay question 16 is there a maximum number of vegetation classes
[2:25:52] that is a a big question uh in theory yes so you the more classes you are there
[2:26:01] then the harder your classification task became so it gets more complicated to separate different crops and if you have
[2:26:11] just one C crops it's easier that if you have 10 type of crops or 20 or 50 or
[2:26:16] whatever but it may be too much but anyway if you have many of them then it gets really more complicated there are
[2:26:23] also some crops that are pretty similar they are pretty similar even Optical you look at them if you are not an expert
[2:26:30] you won't be able to discriminate them like the cereal for instance they are quite similar to each other and often
[2:26:37] you have errors inside the um the your classification will have errors there then you classify all inside a single class and it gets all
[2:26:47] higher accuracy so it really depends what you're trying to do my suggestion is that you try to start slow and then
[2:26:57] try to include more more if the tourists are still okay and then produce some some confusion matrices to know what
[2:27:05] where you make mistakes so then once you go to your user and say this could be this or that because these
[2:27:13] are where we we don't really know exactly so to to the same to get some extra information from the computer
[2:27:20] Matrix and that there's many as you can deal with yeah yeah wonderful and we are reaching the top of
[2:27:30] the Horizon conclusion of this webinar series we just have two minutes left uh before I wrap up uh Armando Dr Mourinho
[2:27:38] I was wondering if you had any uh closing thoughts or or um anything you wanted to tell the participants that are
[2:27:44] still on the training think I would just like to thank everybody for being here today or listening to this very long two-hour
[2:27:55] video I hope I didn't bore you too much with all this explain the whole line of code there and I hope you will be able
[2:28:02] to extract this code there and use for your application and as I was saying at the start this is just a it's a starting
[2:28:10] point that try to bridge the gap between machine learning methodologies and between using Pulsar data you see we the
[2:28:20] main training is about getting this Pulsar in South machine learning you will find training on poles around
[2:28:27] itself you find training on machine learning itself here I was trying to bridge this Gap and I hope it is useful
[2:28:34] you will need to personalize some of the Beats to make it more powerful more robust less with accuracy less
[2:28:41] ridiculously high but I hope this gives you the lets you hit drone running when you won't apply your methodology and
[2:28:50] just finally to suggest you to keep on using polarimetrics or data there is more missions coming in the future they
[2:28:59] will be nicer soon they will be biomass and there are many other missions that will acquire also quad polar Imaging
[2:29:05] data so there is a lot of information there a lot of research needs to be done but I think we are getting to better
[2:29:13] better products uh with these these things so thank everybody for for this time and I hope you this will be useful
[2:29:22] for you well documento thank you so much we uh this was an excellent excellent presentation and demonstration and and
[2:29:28] the way that you were able to answer so many of the questions uh so succinctly and thoroughly uh is it's just fantastic
[2:29:35] well I do want to remind everybody that the question and answer document will be uploaded to the training Page by next
[2:29:41] Tuesday so please do uh if we did not get to your question today uh we will address it we will answer it and you
[2:29:47] will be able to get that answer by next week and also a video of today's presentation and demonstration by Dr
[2:29:53] Marino we'll also be uploaded as a YouTube link uh to our website by by tomorrow within 24 hours
[2:30:01] so as we conclude I want to thank everybody for joining today we do hope you will join us on Thursday
[2:30:06] for part two of this webinar series we have a lot of great material that we're going to be covering over the next uh
[2:30:12] over the next two parts uh so please do join us for on Thursday and as we conclude I want to thank Dr Marino one
[2:30:18] more time for the excellent excellent uh kicking off this training series and I also want to acknowledge all of the rset
[2:30:24] team that is working tirelessly in the background to uh to produce this training for you that's so on Hudson
[2:30:30] odoi Sarah Cacho Natasha Johnson Griffin Jonathan O'Brien Brock Blevins and Amita macda so thank you to the rset team and
[2:30:38] we look forward to seeing you all on Thursday
