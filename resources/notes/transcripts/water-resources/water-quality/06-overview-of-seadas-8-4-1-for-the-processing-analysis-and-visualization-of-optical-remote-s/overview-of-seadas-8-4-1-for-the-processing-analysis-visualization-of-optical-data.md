# Overview of SeaDAS 8.4.1 for the Processing, Analysis & Visualization of Optical Data

`https://www.youtube.com/watch?v=oGwupIMKvdw` · id 258 · 2:23:00 · module 121 — Overview of SeaDAS 8.4.1 for the Processing, Analysis, and Visualization of Optical Remote Sensing Data for Water Quality Monitoring

[00:00] hello everyone welcome to this rset training on overview of SAS 8.4.1 for the processing analysis and visualization of optical remote sensing
[00:13] data for water quality monitoring my name is Amita meta and I will be conducting this training with
[00:20] the help of our guest speaker Mr Daniel nules from the C team we'll start with a brief introduction to applied remote
[00:29] sensing tra training program or rset program aret is part of NASA's applied sciences capacity building program and
[00:37] it provides accessible relevant and costree training on remote sensing satellites sensors methods and tools ret trainings include a variety of
[00:47] applications of satellite data and the Thematic areas covered by ret are given here on the right hand side also they
[00:54] are tailored to audiences with a variety of experience levels majority of arset trainings are given online but often
[01:04] in-person trainings are offered as well arset trainings are live and instructor le as this one but there are
[01:12] asynchronous and self-based trainings available through our set website their biling well in most cases training material is available in Spanish and
[01:23] often uh trainings are offered in Spanish also our set trainings only use open source software and data and
[01:31] accommodate differing levels of exp so we'll start with today's session about SAS SAS 8.4.1 we'll have a brief overview first
[01:41] and then we'll hand it over to Mr Daniel NOS for details of SAS 8.4.1 and also he will demonstrate some
[01:49] of the features of a SAS so what is SAS it stands for sea Earth and atmosphere data analysis
[01:58] system it's a software that was developed by NASA's ocean biology processing group and it allows processing visualization and Analysis of
[02:09] earth science data uh SAS is available from obac or ocean biology distributed active archive Center which is part of
[02:18] Earth observing system data and information system and the relevant links are provided here as we will see
[02:25] later SAS has a long history as as new satellites were launched over the years and new sensor data became available SAS
[02:36] also evolved to include new sensor data processing capability and the current version of SAS supports the missions
[02:45] listed here uh some of them are past missions many are current um and there are some Airborne sensors are included
[02:54] here now in earlier aret water quality uh trainings we had have um used SAS and we have processed data from modes um and
[03:06] V and also landet only and what is zidas used for it's an important software for satellite image processing specifically
[03:15] for deriving water quality parameters um such as chlorophyll concentration or water surface temperature uh just to give you examples uh SAS also allows
[03:27] calculations of surface remote sensing lances which are used for deriving water quality parameters and these capabilities are available for multiple
[03:39] sensors uh as we saw in the previous slide it also offers image analysis and visualization options and allows
[03:47] comparison with insute water quality measurements as we will see later sidas allows statistical and mathematical analysis of image data as well as allow
[03:58] spectral analysis so why uh SAS 8.4.1 the current version uh has evolved with data processing capability for
[04:08] additional sensors such as Sentinel 3 oi Sentinel 2 MSI and uh base sensors as well now aret has used SAS earlier but
[04:20] the latest version we ever used was 8.1 at that time in that version um Sentinel 3 oi and to MSI were not available they
[04:31] became available since 8.3 but the current version uh includes these two as well as uh Bas sensor um processing
[04:41] capability more importantly the earlier version of SAS did not allow science processing on Windows system virtual machine had to be used on Windows to do
[04:53] that it was only possible on Mac operating system and Unix and Linux operating system this version can be
[05:01] installed and used on Windows machine for science data processing in addition to doing uh analysis and visualization so for this reason we are
[05:12] um focusing on this version a new version uh SAS 9 will also be out soon this will be used as reference because
[05:22] as we move forward and use sentinel 3 Sentinel 2 and base hyperspectral data for water qual monitoring uh we will be
[05:31] using the latest version of SAS and so it's important to know some of the features uh of this version now and
[05:39] that's why this training will serve as a reference for all future aret water quality trainings so that uh based on
[05:48] that our learning objectives for this training are that participants will be able to identify expanded sensor data
[05:56] processing capability of the latest version of SAS 8.4.1 for sensors such as o and MSI use key SAS tools to analyze and visualize
[06:08] water quality parameters such as chlorophyll a concentration and for that uh Sentinel 3 old G will be used for
[06:16] case study will improve awareness of the plans for incorporating base data processing into SE prerequisites for this trainings are fundamentals of
[06:26] remote sensing uh just to know about basic Concepts and this training um past training about Coastal nine water
[06:35] quality that used SAS 8.1 so that's a good reference is prerequisite with that brief overview of SAS here is the
[06:44] outline for the rest of the session Mr Daniel NOS he will talk about SAS user software including general image
[06:53] analysis tools and science processing software software ocsw he will also provide information about reference workflows in SAS for
[07:03] multiple sensors including those from pace and then finally he will provide demonstration of seda's workflow case study using oi level two and level three
[07:14] data processing on the training web page you will find many extra slides for reference about SAS but the main focus
[07:25] of rest of this session is going to be on the demonstration of various SAS features a note about homework here the
[07:33] homework assignment is posted on the training web page and it is due on February 29th a certificate of
[07:41] completion will be awarded to those who attend today's session live and complete the homework assignment by the due date
[07:49] with that um I would like to introduce our speaker uh Daniel nules also we want to introduce our
[07:57] contributors anur Abdul razik and being young both from SAS teams they have contributed to presentation today's session so first Tel noes Jr he is a
[08:09] software developer for the NASA ocean biology distributed active archive Center or obac and has 30 years experience working in the remote sensing
[08:20] field Daniel has been developing Seas for the past 10 years prior to this Daniel worked for 13 years running the
[08:29] operational command schedules for cwi's Mission operations preceded by five years on the pre-launched thermal I band algorithm development for Moes I know
[08:41] rur Rik is a software engineer at Gard space fight centers ocean ecology lab and leads the development of the OBX SAS
[08:52] application the SAS application development team is in charge of application maintenance develop in new features in response to changing needs
[09:02] and providing user support through video tutorials webinars short courses and an online forum bingyang is a software
[09:12] developer for NASA's obac she has been with seda's Team for the past 5 years maintaining the application developing
[09:22] new features especially for Pace data analysis and visualization and supporting users on the the Earth data Forum before I hand it over to Danny
[09:33] here's how to ask questions so please put your questions in the questions box and we will address them at the end of
[09:41] the webinar feel free to enter your questions as we go and we will try to get to all the questions during the
[09:49] question and answer session after the webinar the remainder of questions that we cannot cover will be answered in the
[09:56] question and answer document that will be po posted to the training website about a week after the
[10:03] training with that we invite Mr noes to take it away and provide us detailed information about satas just a brief note here you will
[10:14] see acronyms OC which is ocean color iops inherent Optical properties rrss which are remote sensing reflectances atmospherically corrected and rows are
[10:28] surface reflectance is after top of the atmosphere reflectances are corrected by ra correction so you will see that
[10:36] during the demonstration um so now uh we hand it over to Denny so Denny please take it
[10:43] away uh hi so I'm going to go over some slides here there's um far too many slides um on CS um for this talk but a
[10:55] lot of these can serve as backup reference for you cuz that way we can do a lot of seas demonstration so the first
[11:03] slide here uh is just illustrating uh the background of Cass and why why it came about back and appreciation for the
[11:13] fact that this goes actually back into the early 90s um um but the main thing is back at that point when we were on we
[11:21] were just um serving uh C Whiff's Mission you would get data and back in that day and age it was just a chunk of
[11:30] data and what do you do with that data how in the world would you be able to
[11:34] visualize it and analyze it so the the original Vision which we've um kept up with was the ability to um visualize
[11:42] analyze uh NASA products and to identically reproduce the level one two three data that we distribute and um the
[11:52] other big challenge um which was saw back then as well the continually evolve with uh technology and that is always a
[12:01] challenge to keep up with all the um different platforms and um so this is a quick overview of the the timeline of
[12:09] SAS and um when it was first released and that it supported C uh whiffs uh and um and so we've we've evolved through
[12:20] time um rebranded ourselves um in the past uh year to be the sea Earth atmosphere data analysis system because
[12:30] we certainly supporting more than um seawifs cuz we're up to uh 24 missions uh uh supported so um and again I'm going to
[12:41] go through these slides rather fast because I could get really bogged down on these um and I really do want to demo
[12:47] for you guys so um so here's a an overview of what SAS is and does it it
[12:56] um takes essentially raw satellite data that gets transmitted down that we ingest it in NASA's OB daac and run
[13:09] these Seas processors in order to um apply the different um calibration through it as we go through then the
[13:18] products and then bin it and map it use ancillary data um to um um help with the
[13:26] atmospheric correction and all of this is replicatable from the user end so they basically get the same uh software
[13:34] tools um that they can load on that you as the user can download onto your um computer and run the same programs that
[13:43] are run to um create the data and additional um to that you can do your own um imagery from that statistics so
[13:53] so it's uh not only processing of the science to to replicate or to make your own um variance of these files but also
[14:04] to um analyze and view the images with that the the ocss W so so this is um the
[14:14] part of seas which was the Seas science processors that um use this um it ocsw stands for ocean color science software
[14:26] and um so it's um it's it's one of the Cs Cs processors and this is the official
[14:35] science processor that it's using and for the this processing that's done um this we we saw earlier how the satellite
[14:46] measures the data and the data files come into obac and then what the satellite measurement sort of looks like
[14:53] up top is it's actually it's got a lot in this diagram but you get into digital numbers out as
[15:01] the radiance comes you have the water leading ra leaving Radiance and the top of atmosphere Radiance you have your
[15:09] scan angle you have your satellite Zenith angle and solar Zenith angle and the fact that that the um the sun is
[15:17] reflecting off clouds and aerosols and you have the foam and it so it gives you a good um picture of the complexity of
[15:25] what needs to be done and seas is sorry the satellite is given us uh digital numbers off of sensors but and it and
[15:35] has Radiance coming in but we got to back all this out to ultimately we want to get to the water leaving
[15:42] Radiance this is a repeat of what you saw earlier you can always refer back to this uh full
[15:50] diagram and um I'm not explaining every uh step of the way through it but you'll see some of it as we demo this um to
[15:59] understand the different levels of file the key thing to know about level two files is it's the native resolution so
[16:08] it's it's how the satellite saw the Earth how the pixels lined up and saw the Earth so it's not mapped and the
[16:18] level two files at this point have been U calibrated and they've been um the geophysical variables have been added
[16:27] into them like chlorophyll and Cy cob bacteria the sea surface temperature these um values have been added in we
[16:38] have have suits um actually we'll we'll hit that shortly there's some slides on this um so we'll we this is a good review slide
[16:48] though and it's showing the um uh unprojected um file level two and um yeah these are the slides for
[16:59] level two so as we go through this we have what's called suets so this is called OC Suite which is ocean color
[17:07] Suite so this is a grouping of um products that can be processed together they use the same atmospheric correction
[17:19] um algorithm the same um um gains um all all so that they can be um made together
[17:29] and so they're they're provided together there's other ones that could go in here with this but these are the standard
[17:36] ones that are um provided when we um deliver a uh um level to um file and I
[17:48] think some of these may change um with time certainly with the pace Mission coming up they're reorganized and
[17:58] different Suites but just keep in mind that a suite is a grouping of products that uh level two gen which is the
[18:06] program that makes the level two file was able to um make as one unit and then there's um IOP it's a different one so
[18:17] you wouldn't be able to mix and match these so IOP has different parameters processing parameters that are needed to
[18:25] um make these so that that's the primary reason why these have to be separate Suites separate groupings separate files
[18:33] so um and same with SST that has its own um processing parameters that are going on behind the scenes so you need to um
[18:42] when you make these level two files they need to have been made separately so when you you'll find the level two files
[18:49] with SST and OC they're separate doesn't mean that and later you can put them together for mapping but um
[18:59] just keep in mind that they they will be separate so these are the idea of what is some of the things that we provide
[19:07] right now and each of these level two files has flags and we'll we'll illustrate that a little in the live
[19:16] demo so this is a a listing of flags that you can come back to it's the that
[19:22] each pixels not only has its chlorophyll value or whatever the actual data value but has um additional value that
[19:30] indicate the quality of the data uh point about Native pixels this is the they're grided as the native
[19:38] pixels they're not remapped atmospheric correction is applied so this was the process of getting from the uh the
[19:47] measured um Radiance at the top of atmosphere and and backing it out to get the water leaving Radiance and you have
[19:54] all these parameters that can be derived through using using ancillary sources the mea data and for SST we have this uh
[20:03] Source here and you're backing out things like wind wind speed ozone um concentrations all all of this goes into
[20:13] that that's assessed through these ancillary data files to ultimately determine all this to back out that um
[20:22] there's also vicarious calibration so when we've calibrated the data uh with onboard calibrators we ultimately get to
[20:31] a certain value then we've looked at um overtime vicarious sources and there can be a a gain adjustment factor that is um
[20:43] determined for and this isn't this would be determined pretty early in the mission and would probably stay during
[20:53] the mission it's not something that's just changing um every year or anything factor and this is just an awareness
[21:02] that if you have an elevated Lake um that you would have to adjust where the lat and Lawn of that is and it's just
[21:11] given you um you know an appreciation more of the fact that when the sensor's looking at the the Earth it's got to
[21:18] figure out what latitude and longitude it's actually seen so all of that goes into the level two file and then the next phase of
[21:30] processing if you go beyond level two is at that point you want to um you would go beyond level two if you either want
[21:39] to map it or you want to combine a bunch of files together like this to create a
[21:44] monthly and so the next um phase of the the step towards that would be bending them all together and bending is a form
[21:56] of mapping where you've we've divided the world into equal area bins as we call them it's a senoidal
[22:06] projection and you run the level two file through the binner and it will um take the pixel wherever the pixel is and
[22:16] put it in the appropriate um bin that it goes into so it's um and you can um you can just bend like if you do a
[22:27] monthly then you would take 500 files or however many files were that month and you just run them each through they
[22:33] would keep being thrown into the bin and it would accumulate over time or over over your processing to you till you
[22:41] fill up um till you finish all the files and then you would have um these bins so
[22:47] so when you during the binning step we're dividing the world equally up into um increments and so we divided into
[22:58] like one degree increments and anything divided by that on on the latitudes you're dividing it evenly up and you end
[23:06] up with numbers like um you know 58 M and and 4.64 kilm that's just how it divides out
[23:16] into the world so that's your resolution and you don't want to be thrown off but when you see we release 9
[23:24] kilm and 4 km data that's actually 9 .28 km and 4.64 km data and then the next step
[23:34] after you've b a file is to map it and um above is showing the level two file
[23:43] and then that's what it looks like map that same file and below is um mapping where you've taking um you know hundreds
[23:54] of files to make monthly so with mapping you have much more options you don't you're not really restricted in dividing
[24:03] the world up in the little equal areas you have tons of projections to choose from the default is plat car which is
[24:14] vertical and horizontal llon lines which are evenly spaced but they're not equal area and we'll get into that uh later
[24:24] because it's not a good projection to use for statistics but it's the projection you tend to always see people
[24:31] display unless it's an atlas or something they'll display um in different projections but we will get into other projections in this talk and
[24:42] this is um a slide that's kind of helpful in determining do you want to use the the files that we provide or do
[24:50] you want to use cdas to generate your own own files this is beyond the visualization aspect it's just do do you are the files
[25:00] that we're giving you good enough for your purposes or do you want to process them and and so these are parameters
[25:09] that help you know whether that's what you want to do and so basically uh there's limited geophysical products so
[25:17] there's more available so if you need products that we don't provide that's a reason why you would want to process
[25:23] there's um other ancillary products as well at same concept there's flag thresholds so depending on um if you want to adjust the flag
[25:36] thresholds of when something triggers like say satellite sensor Zenith angle um triggers at 60° usually for most
[25:45] sensors and if you want that at 40° that's something that you would have to run um level two gen in order to um
[25:54] you would make your own file to do that there's more resolution choices in modus anyway um as far and and for binning
[26:04] there's many resolutions available whereas we only have the 4 kilometer that we Supply because it's a global product in
[26:13] 4 kilomet is a lot of pixels globally so if you have um a a region that you want
[26:20] in one kilometer or 300 M depending on the instrument then you know you would want to do the processing yourself any
[26:30] time resolution so if we provide them monthly but if you want like a uh two week file of a certain time period then
[26:39] that's something that you would have to do uh separately for processing um the big Pro on on the blue is the pros what
[26:50] what you gain is for obac it's already it's already processed and already available that's the key it's like
[26:57] that's where obac wins is it's already there and ready so if that's sufficient then that's that's um you know good and
[27:07] it's also referenceable but you can certainly reference that you ran the Cass or ocsw processors but when you
[27:16] actually use a file that we provide then you can actually um reference that exact file so that can be helpful and then for
[27:26] the mapping we provide Global 9 and 4 kilm resolution files but so there's a a lot you can do and this table is meant
[27:37] to help you make that decision on whether you should or shouldn't um you know P pursue learning to um do the ocsw
[27:47] Cs Cs processors so we've got some reference workflows here I'm not going to spend too much time on this because then we'll
[27:56] can do our own um um live demo actually this is the these are really reference ones on all the missions so um you you
[28:06] you just come come back to these as as you need them they they should should be helpful because because it can just help
[28:13] you know um the in the light blue is the name of the processor and the in the
[28:19] green is the name of the file so just to walk through one um which will be like
[28:26] ult ult which is what we'll do today um this is only going through level two gen because after level two
[28:35] everything's the same but before level two every Mission can be potentially different so an example of Ali is you
[28:45] have a level 1B file and that's the actual name of the the file there it'll sorry um so it'll have a file name
[28:55] that'll be buried in in the directory so you you would that would be your input file and then you you would add an
[29:01] ancillary file if you um choose to have ancillary data and then you run it so it's a that's actual a very simple
[29:09] workflow whereas viers would be a little more complicated where you have to take the the level one file you have to
[29:16] geolocate it to make a geolocated file then you take those two files then you calibrate it to make a level 1B file and
[29:24] then that serves as the input to um level two gen along with the Geo file so V is a little more complicated but
[29:32] that's what these workflows can help you um as reference and we have a binning workflow as as well so this um you can just refer
[29:45] back back to back to this but uh this is just showing that that you can bend um
[29:53] um the files um together with level two bin or you can um um create you can bend them all at once
[30:04] like say if you want to do a monthly you could take the the 500 files and bend
[30:08] them all together into one bin file or you could do it by this route where say you did the these you bend those into
[30:17] daily files and then you had uh for your month you would have um 30 or 31 daily
[30:24] files and then you take those and then you bend them to create a monthly and the advantage you would have over this
[30:32] um workflow would be if you want to then later go back and and do it like a a
[30:38] five-day span or a 7day span you already have your dailies bin and it's really quickly to bend them from um with level
[30:46] three Bend so you don't have to go back to your Source 500 level two files or your entire Mission or whatever you have
[30:54] you um so this is like a good um if you have a lot of data um to work with and
[31:00] you can even do this on a single file basis so if you have 500 files you could
[31:05] bin all 500 files into separate bin files and then subsequently um you could then get rid of your level two files and then use the
[31:14] and then you can bend whatever files you want together in the level three bin so it's it's a one of the
[31:22] options this actually kind of reflects on what I was talking about about the dailies and monthlies there's a program
[31:31] called mapj we won't get into that too much but that's just a a wrapper program that that will um um help you um create
[31:43] true color images from a from a level 1B file or other um images um it um that's
[31:52] showing you the uh inputs and outputs to it and behind the scenes map gen is running um multiple multiple ones of the
[32:03] processors like it'll run um it'll it'll um bin it and map it like that the uh L3
[32:10] bin and L3 map gen L2 gen can be buried inside there as well depending on the input
[32:16] input file and this is a idea of what it's like when you run a file from the guy so
[32:24] you this is L2 Ben guy so the guy you fill out parameters within the guey and then you press run and when you run it
[32:34] it will create a PAR file and then that PAR file um will get run and at the
[32:41] command line you're not at the command line but it runs this command which is L2 bin par equals the PAR file um and
[32:50] then it writes that PAR file out and then you can go back subsequently if you want at the command line and rerun it
[32:58] because the PAR file is there or tweak the PAR file or write your own PAR file and not use the guei at all but the GUI
[33:04] serves if anything as a really good tool for um formulating what you want in the PAR file doing a quick test for a
[33:13] particular scene to run it but once you start getting the point where you're going to do entire mission of data or
[33:20] hundreds and hundreds of files then you may end up um not using the guey after you've established um what what the
[33:27] parameters are you want but you still can use the guey because for this particular tool l2b could have a text
[33:35] file as its input which contain 500 files level two files so it has it can do a lot from the guy so let's take
[33:46] a a quick look at a demonstration of um processing with um Seas the Seas science processors and UL image or set of ulie
[33:58] images and we will um look at this more detail in uh the live demo but these slides are good reference and I just
[34:07] want you to be able to follow along with um uh slides and you can look back on
[34:13] these and there's actually um another workflow later in this slide deck that you can look at as well I'm not going to
[34:20] go over it but um uh so here here's an example where I take six six files level two files I've got three
[34:33] sentinel 3A and three sentinel 3B files of level two and they're all from the same same day and um we take all these files and
[34:47] we put them together into a file that it's just a text file so the contents of it um are just the names of these files
[34:57] and I have those files in my same directory that I'm running this from so I run L2 B and I'm going to um create a
[35:07] mapped file of these six Alie files so I open level two bin and we'll show you how to do that in
[35:19] the live demo but you can refer back to this so here's my input text file list and my
[35:28] output file which is going to be a bin file it's called cross sensor usually you'll have a sensor name but since it's
[35:34] multiple sensors um it's cross sensors the default that we use and so we up at the top of the instructions select the
[35:44] iile so that's done next is select a product and a prod type so here we selecting uh chlorophyll a and protype
[35:54] is regional uh a prod types can be like uh daily monthly if if you want to have
[36:01] like um um binning by uh time frame but but if it's just um without time information that you just want to bend
[36:11] them all together then Regional would be the one uh to use and you can specify a resolution the resolution of these level
[36:21] two source files is 200 sorry 300 M so nothing stopping me from picking 300 meter at this point but um but to run
[36:32] you you're usually best to run things to begin with it low resolution especially high resolution things like that just to
[36:39] see the output and then you can um because it then you can up your resolution and it'll take longer to run
[36:46] but I always like to start with low resolution just to to get a ballpark of if if this is what I want to do so then
[36:55] you add in your um flags and um um there's not much room to see the flags in this um current release of ceds the
[37:07] next release we will have a a giant window where you'll be able to see all the um Flags so one of the improvements
[37:14] that will um come with um I probably didn't mention but we will be uh releasing uh SAS 9 UM in conjunction
[37:24] with um the launch of pace so that should be February March time frame so it'll have some fixes and some improvements
[37:36] um and um that's one of the improvements that you'll be able to see all these flags there so we've added all all the
[37:45] flags this is a big list this is a huge list of flags that um basically when you're bending it you you can barely see
[37:53] it but High glints there so it's basically saying if it's TIG lint don't use that pixel so we run it and that would be the
[38:01] output you will get that it created that file and once it's created that file like I said you can't view that file but
[38:10] the next step you can map it so I've I've um running level three map gen and here my input is that the little B there
[38:18] is for Bend and M is for map so often times your bin file and your map file
[38:24] names look almost identical just a b and an M but you might add some information in your mapped file regarding what
[38:32] projection you're mapping it to things like that um so we just select the iile and then we want to select the
[38:40] product if you leave the product blank it'll actually map out all the um products that were in the B file so one
[38:48] option is to leave it blank um but you can specify a product you need to make sure you pick a product that was in your
[38:56] bin fil so if you happen to bin SST um and then you're trying to make chlorophyll but the bin file only
[39:04] contain SST then obviously that wouldn't work so so this um needs to be a subset or all of the products that were in the
[39:13] bin file um pla car is the default projection and we've selected 2 km which was consistent with what we bend it at
[39:25] and I have nearest neighbor selected here I think that might be mentioned next no it's not but nearest neighbor um
[39:33] it just means you don't interpolate the pixels it's much quicker and again this is what you would do for your first
[39:39] round to get an idea of things and then you go back and and and make it more
[39:47] detail um and that's what I've done here is I Chang from nearest neighbor to area for interp
[39:55] interpolation is is what inter turp is and so area will take a little longer and so that's going to do interpolation
[40:03] um between the adjacent pixels and we run it and so this is 2 kilm um so this
[40:11] is the file that was formed now the fact that it's 2 kmet this is a huge area
[40:17] actually so the 2 km isn't um bad um to run with but you can certainly run this
[40:23] at 200 M so you basically have have to the left a sentinel um um 3A and to the right was Sentinel 3B
[40:35] and this was a cherry-picked scene because you actually get the entire Gulf of Mexico with virtually no clouds so
[40:43] it's a kind of a unique scenario um to find that that situation so um so this is a huge huge scene um and like I say
[40:55] you could run this at 300 M it just takes longer and then when you VI view it and in see us it takes longer to load
[41:03] but you can potentially do that at much higher higher resolution and this illustrates that actually I ran it again and mapped it at
[41:14] high resolution and you can zoom in on on New Orleans and and uh see that at 300 M and this is a slide so it's
[41:22] actually probably zoomed out um even right now as far as what you're seeing so Seas is going to support pace which
[41:34] is coming up as I mentioned and it's one of the reasons why you're going to want to update to
[41:42] SAS 9 I would always encourage you when we release SAS to update because we're not just doing cosmetic changes we we do
[41:51] bug fixes and we're adding um you know useful tools we're not just moving things around so it's really um valuable
[42:00] to get the latest um releases of SAS so nine will come out soon and it will support um
[42:10] pace and um past data access is available here we have the simulated data right now on board pace is not only
[42:23] the oci instrument which is the ocean color instrument but you have some polarimeters so this shows within cdas
[42:30] two of the polarimeters imagery um loaded in a HARP 2 and a Specs one that's been loaded in
[42:39] there's a angular view for for Polar emers they have angles and so you have um options um to view there's a tool
[42:49] that um similar to the Spectrum view that we showed earlier that will view across the angles so you can see the
[42:56] values across the different angles and the angular shape that it makes there's the animation tool in there so this
[43:06] isn't limited to pace and it's not limited to um angles but you can take a set of bands and animate across those
[43:13] bands it was originally envisioned as a way to um view um across angles but it can certainly be used to view across um
[43:25] um wavelengths as well or or across time as well so animation is pretty straightforward that it's animation and
[43:34] so so it's um animating these bands so it has a lot of uses outside of um the
[43:41] polarimeter um this maybe yeah this is an example of if it'll play um yeah so so here's an animation uh polarimeter
[43:52] animation where it's looks like it's only a few uh scenes um but but you see the color bar and it it's showing um um
[44:04] the the actual um when you run it you can slow it down so that but that gives
[44:09] you a good idea what um the animation can do and maybe we got more here um so
[44:16] you've got the pins that you can put in there okay and so then the pins um enable you to determine the we showed
[44:26] before the angular um View and you can animate across yeah I showed this before where you you can have the angular view
[44:34] um presented on a plot but you can actually animate that as well so play that and then there we go um so specs
[44:45] one one animation um this illustrate an animation of specs one uh this is a powerful um plot that
[44:58] shows the Spectrum view we saw before where in the past RS we had a few uh points this is simulated data but you
[45:07] can see very clearly uh that one once you go to uh Pace with the hyperspectral instrument that you're with the Spectrum
[45:16] view it's going to really um hun in on on species of phytoplankton and and really tell a more detailed story so um
[45:27] that's example of um past simulated data in the Spectrum view where you see uh so many points and so much uh shape to this
[45:36] okay this portion we're going to do the live demo of Cs and to start with we're going to have a data file that we'll
[45:44] work with so this so we have the ocean Color website to get the data go to data
[45:52] find data and I'm going to use a level two browser here oh it's a pretty sophisticated browser it's it's age look
[46:00] but it's very powerful so I'm going to select the um Sentinel three missions I'm going to um as I look for the
[46:09] matchup I'm going to be aggressive and say I want the the scene to fully match up just to reduce the retrievals and I'm
[46:17] going to click reconfigure page um this just to make sure that all the parameters that I set for the mission
[46:27] are in there you may not have to do that but um just want to make sure I'm going
[46:34] to pick the date July 12th right now we're at July 12th everything is there and then I'm going to pick the
[46:42] Chesapeake go down in here pick the Chesapeake Bay and I'm going to do the mount that is displayed at a bigger
[46:51] number so I don't have to tally through and then this should come back back but try that again so July 12th um um and
[47:00] this this is the file so this is the level two file and this is the um level
[47:06] one file so you would download both those files is which I did and then um that's how I get at the data then to
[47:15] launch CS there's several ways of doing it you can click on it I'm going to um I'm on a Mac so it could be different
[47:22] for you but I'm doing it um from um a terminal window essentially you could open a terminal terminal window
[47:31] and launch it that way or you can do like I did and right click and launch it
[47:36] as a command to run inside a shell I'm doing it this way or you can just click
[47:41] on the icon itself in the dock um sometimes though when you click on the icon itself you might be missing some
[47:49] environmental parameters that are helpful for um when you run the um processors so this is little trick to um
[47:57] get by that and but it's only for the processing that's how I'm going to launch it and the advantage of running
[48:04] it through a a terminal window like that is that it leaves behind a terminal window and when things go wrong or
[48:12] something a heat dump or something happens it'll write to here so it is a um bearing on things that happen but you
[48:19] don't have to launch it that way it's just the way I find that it it behaves the best especially with the processors
[48:27] so I have this um CS loaded in and I'm going to load in a file and we'll start
[48:34] with um loading the level two file that I downloaded so so down here it says it's reading the file it's a level two
[48:44] file it's rather big it's ulie file so this is the full file but I want you to
[48:49] see the the full file before we look at um subsets of it or um expand it versions of it so what you get is you
[48:57] got the RS and chlorophyll so let's open chlorophyll so this is the the full scene um of it and um there's plenty you
[49:09] can do but what I'm going to do is um I'm going to use an extracted scene we'll go over later some of the
[49:16] processors to get to these extraction points but I'm to to make this thing run quicker it'll run fine it is now but uh
[49:27] it I can demo this quicker with an extracted one so let's close that just to give you the idea um the the full
[49:35] file and um in fact I will show you how I made the extract I'll kind of mix it
[49:41] in a little bit so to make an extract and I'm going to come back to level two
[49:47] genen um a couple times but really quickly to show you how I made an extract is that I had loaded as I
[49:57] mentioned that I had downloaded that bigger level one file and I click if you see that flowchart earlier on the slide
[50:05] you load this file in to level two gen as the input file and it's going to give
[50:11] me an automated name out and uh I can pick different products in here this is the default products so I can go through
[50:21] here and um we we there's this thing called the wavelength um toggle selector or limiter what what that what what
[50:31] we'll do is we'll say we don't want we don't want wavelengths outside of 865 and so then if I set that up this
[50:40] way then if I go to the radiances say RS I'll open that up and we see that the
[50:48] defaults are here but what this has done is it's a three-way toggle selection control so now when I click this the
[50:55] first first click will fill it out with all the wav links that are here second click will fill out with all the
[51:02] wavelengths and then the third click removes them all so it's a three-way toggle it's a it's a quickie um to help
[51:09] you with that so and they fill out down here so you have RS vvv which means all
[51:16] the visible bands and these are outside visible so they got added in so this is a product list and um so just increased
[51:26] my products before it said RS vvv now it's added all these on so let's say you want also the row s's which are the
[51:36] surface reflectance bands so same thing with that first click gives all of these bands here and that's what I want if I
[51:45] did more clicks I would get the full thing or remove them so I'll go ahead and add those in and these are radiances
[51:56] in here we have um some derived geophysical parameters like chlorophyll so we can go here through here if
[52:04] there's anything I want in here I just have to be careful not to click things that are
[52:09] conflicting but um that that that can take time to figure out which ones you can add in in general you can you know
[52:17] add them in and and we we can go over that a little bit but um um um as far as which products um go
[52:26] together like the inherent Optical properties prop products you don't want to pick any of those because they don't
[52:32] sync up with um the chlorop fell uh sensor Zenith angle is a really good one to pick that's the angle that the
[52:40] satellites Vie and um I think there was um Cloud albo you can click that one we'll talk about this later but you
[52:52] might click these aerosol U model models here click whatever you want you can also um well within reason not whatever
[53:01] you want but but whatever syns up we'll we'll come back and talk about the aerosols and and some of these
[53:08] processing um options um later um there's also uh subsetting so we can subset this file down to just the
[53:18] Chesapeake if I go back to the main menu this shows the L2 prods that I picked I
[53:24] have the ability to get the ancillary data if I if I run it just like this it's going to use default climatology
[53:32] data it's not going to get all the mea measurements for ozone and and whatever other measurements that can help with um
[53:40] wind speed Corrections and everything so if I do get ancillary click here and do get ancillary what that'll do is it'll
[53:47] go out and it'll pull the ancillary files onto your machine and it put them onto to your machine in these locations
[53:56] and then it's telling the um level two gen that this is where your ancillary data is so at this point I can run it or
[54:06] I can save out the PAR file or I can load in PAR file what I'll do is a load
[54:10] in a PAR file and um I've already created one I could run it but I'm going to just load in the one that I um I'm
[54:19] going to demo and um so I've because I've saved some of those out so this one that I'll demo is this this
[54:30] this one right here which I I just named multi mean multi-products of Chesapeake so I load that in I I I clicked the load
[54:39] to loaded in and so what that just did is it loaded in the PAR file that I had
[54:45] run earlier and so this shows you what I'll be demoing this file so um this is restricting to the uh Chesapeake so what
[54:56] we're doing is we're having a bunch of products which makes it a heavy file but then we're limiting it down to the
[55:03] Chesapeake so that helps um reduce uh processing well not the proc well the processing time but it'll it'll help
[55:10] with the visualization and I've thrown in a shallow water depth of two there's a coastal flag that's at 30 m this may or
[55:22] may not be of any use to you but it just enables you to have a um that would be a
[55:27] six meter flag since we're just going to look at uh Chesapeake and everything in the Chesapeake is you know nothing's
[55:35] less than 30 m so that's a useless um flag so if you want to to override that
[55:42] flag with the shallow water depth of six feet that enables you to um flag out things that are six feet or less so it
[55:49] might be uh useful then then we would run this and then that creat uh the file that I'll show you and I
[55:58] just want to show you um yeah actually that there's a a variant that I made of that where I just did the um um
[56:07] Chesapeake but with just chlorophyll and I probably don't have that in here so that's not a worry but um it's that same
[56:15] file but just with the chlorophyll so I don't have all the other products waiting it down while we're on this um
[56:23] an easy one to grab but another sub that be the surface reflectance one so if I load that that one in this one I guess
[56:32] it's a full scene but this this is an example where I just have um two blue bands and a green and a red band so
[56:40] that's a nice um option to have for making true color images and this is a suite called uh SF ruffle surface
[56:50] reflectance so that particular Suite if you run it this way it'll run much faster because you don't have to do um
[56:57] aerosol correction for doing the true color imagery so um it is helpful in making files that are smaller so if you
[57:07] want to do truec color imagery you don't necessarily need to do with a file that has 50 um products in it you can have
[57:14] the separate one so and um so so that's how I create these level two files or most of them that I'll show you and I'll
[57:24] so um I'm going to demo some of these files now so I've got level two file and
[57:30] what I'm going to do first is just demo the really light one and the light one is just Chesapeake and just chlorophyll
[57:37] because I just want a file that is really quick and easy to work with and then we can look at some of the other
[57:44] products as well so we have the chlorophyll band and when I click on it it opened the chlorophyll image and so
[57:52] these are all layers and you see they're all stacked here as layers we also have um this is level two we have all the
[58:02] masks available so we have a land mask we turn that on we see the the land mask
[58:07] we can zoom in since this is the and we can since this is 300 meter um file if
[58:14] we in the navigation window we can pick pixel and that's going to match the pixels of the file to the pixels of the
[58:22] your computer so that so that way you get an idea of the resolution of of your image and you can see nuances along the
[58:34] coast where you have chlorophyll and that looks good but then if you zoom in at at the patomic um you know the data
[58:42] starts not looking um you know potentially right if you know what you're looking at and so what's
[58:49] happening here is that that's actually data that had aerosol algorithm where it exceeded the maximum iterations and
[59:00] there's Flags here like this they're kind of varied in here but you can expand that so it the aerosol removal
[59:08] exceeded the maximum iteration so basically that's bad data at least um as is with that current aerosols um done so
[59:19] you can certainly set the transparency to zero that kind of hides it because um so if you're using this file as is with
[59:30] the th those aerosols then you don't want to use that data because that's flag data so that gives you an idea of
[59:38] um that flag there's also a TM um warn which is very similar one atmospheric correction um warning so so that's why
[59:48] that data is looking um a little um not to be expected we'll look at shortly how to um change your aerosol correction
[1:00:02] this is the default and it's the one we recommend doing but um because it's going to apply to all the scenes but
[1:00:09] you're going to lose that data if you really want to try to gain some data back then you you'll need to on a scene
[1:00:15] by scene basis um go through the the aerosol correction manually through through picking um models um one one
[1:00:27] issue with this scene that is the the high glint um if I look at a true color
[1:00:35] image I'll come back to the scene but I want to show you um the same scene in
[1:00:42] true color as a full scene so I suppose to just the chesap just so you get a a
[1:00:49] feel for what happens with the glint we saw this in a slide earlier so if I take
[1:00:56] this scene I've loaded in and I'm just going to straight up make it it's just got the true color bands I'm going to
[1:01:03] make a truec color image it's looking for the bands um in it um this will change and
[1:01:13] uh and there won't be as many choices of it's all the same the sensors using the wavelengths um in nine it'll be a little
[1:01:22] less but B basically it's finding a profile that in order to map out the the the true color imagery and that will
[1:01:33] open this it takes a little while probably yeah there it comes so just have to be patient with this um I'm
[1:01:41] going to go with color manager right now it's on the statistics of the band although this is pretty much you get the
[1:01:47] ideal of it I don't really need to tweak it but ideally you would have the um range for red green and blue be be a
[1:01:55] even range and the best way to do that is I've got this A to B button here if
[1:02:01] you aren't a you click A to B and you're on red it makes it go from zero to one
[1:02:06] or I've changed my defaults to go to 0 to eight and then I just go through each
[1:02:11] red green and blue band and I click the A to B and that just makes sure that
[1:02:16] your red green and blue ban are all mapped mapped identically but when you map it on the
[1:02:22] statistics of the band it can pull about things but then your true color image would vary based on what's in the the
[1:02:30] image itself so you want a a standard and and C that's n that'll all be um by
[1:02:37] default and so can zoom in so we see that Chesapeake's actually pretty good but we got a ton of glint to the right
[1:02:46] and that's the importance of understanding the satellite whatever satellite you're going to um be using you want to understand that satellite
[1:02:56] especially regarding glint and regarding what is nater so um the you you would normally think glint should be in the
[1:03:05] center of a satellite scene but Uli is tilted 12.5 degrees Westward so that's why the glint is actually off to the
[1:03:14] side of the scene and this glints only going to be you know where where it's um in in the um near near the subsolar
[1:03:22] point and um so the actual uh nator point of Uli is somewhere around here so so cu the sun is also over that way so
[1:03:34] not only is ulie tilted but the sun is is over there so in general your ulty scenes where there is glint are going to
[1:03:42] be to the right of the image so if you were to look at the the chlorophyll image you actually get good retrievals
[1:03:51] even in this glint area but they're actually not good their compromise so you have to be careful about that so
[1:03:57] when you're picking an UL scene you want to make sure that that the area that you're using um is not in glint itself
[1:04:05] so this is a good scene and lastly about understanding the the sensor is when I mentioned nater that's when the sensor
[1:04:14] is pointing directly at the ground that's when you have the highest resolution so if you get a ulty scene
[1:04:20] where the area that you want is just right to this area of the image that's where the um lowest sensor Zenith angle
[1:04:28] is you'll get the highest resolution which is 300 M but if you're over here then then that's a higher scan angle and
[1:04:37] so you're looking probably more like 750m um pixels so the the the resolution degrades so the key in understanding
[1:04:46] sensors is knowing where um the glint might be and um knowing where your your good images are so and then that was a
[1:04:56] example of how you make true color imagery so I'll close that product is it's best not to have too
[1:05:04] many products open at once although you can but then it can um bog see down so we've seen all the the different layers
[1:05:14] um most of them there's um I'll show you these when we go to mapped images actually there's a land mask and a
[1:05:22] meetry one but there's a so there's a tool that we call the soft button and it's up here so
[1:05:30] what the soft button does is you can click on each of these layers individually or you can use a soft
[1:05:37] button that actually will do it all at once so if I click it it has two steps
[1:05:42] to it it this one it turned on The annotation layer I'll just toggle it so you can witness how it so you have one
[1:05:52] where it zoomed it out and turned everything off and then one where it zoomed sorry out this time and and
[1:06:00] turned everything on or many of the things on so this is basically an assignable um button that I'm just
[1:06:08] trying to drag this here so the controls to that button are up in the preferences so it's a layer button and if you go
[1:06:18] over here and find soft button and these are all the things that it can control so you basic basically set your desired
[1:06:26] um behavior of this button it's a it's a nice little shortcut button that you can pick your favorite things in these two
[1:06:34] toggle States the first and second toggle state so in this case the first time I click it the map grid lines go on
[1:06:42] the second time they go off if I if I can do on on then for every click they
[1:06:47] stay on but other things go on off so it it's a nice way if you have many buttons
[1:06:54] that you continually to having to click for a scene it's a nice uh new shortcut way which is called a soft button which
[1:07:02] basically you're assigning a bunch of um actions to a single button so we'll leave that and next thing we'll take a
[1:07:11] look at is mapped images so to get from level two to level three we we mapped it
[1:07:19] and we're going to go with first I'll show you how I map I actually have to hit level two bin on
[1:07:26] the way to mapping so I go to L2 bin and I'm just going to go ahead and load a
[1:07:33] PAR file in so if I go up navigate to my directory where I stuck some of my par
[1:07:40] files I just named the par files with the L2 bin in front so I have a PAR file
[1:07:48] this one was full scene that doesn't matter um I'll just open that one and show you what that is and that loaded in
[1:07:57] so what that has done is and I don't think it yeah so I have to I have to
[1:08:04] actually I didn't save the the I files in my um par files that way they're more Universal so what I have to do is select
[1:08:13] a a um a a bin sorry a one of the level two files so so I'll pick um one of the
[1:08:22] level two files um I'll get the the one that we the chlorophyll one that we were working with picked that as the input
[1:08:29] and output and now the those parameters I loaded in are applicable so basically it's going to um take whatever's in that
[1:08:39] par F that that level two file which was just chlorophyll and it's going to run it with the the flags that got set here
[1:08:47] which I had in my PAR file and then I would run level two Ben and then after
[1:08:53] that I would run level three bin level three map gen and again that one I I would need a bin file up here I'm not
[1:09:01] going to bother picking that I think you can look at the um diagram to see that but I'm going to just show you the
[1:09:08] parameters um and that's the um so now we're we're going to map so this one will do this particular mapping here so
[1:09:20] this is one mapping where this is actually I would load a level um three bin file here I just don't I'm not going
[1:09:27] to run it so I'm not going to bother doing it and so this has a projection in
[1:09:32] here that is I'm using a Lambert um equal area projection for the one I'm going to show you but we also could
[1:09:40] select um plat car as well and I'll show you that as well and then I have a
[1:09:46] resolution of 250 if you remember we can't we we're limited on our resolution based on the equal divisions of the earth so the
[1:09:56] 300 isn't an option so I'm going since um Sentinel 3 is at um Sentinel two is at um I'm sorry three is at 300 M um I'm
[1:10:08] going a little bit better than that and I'm using area interpolation so that will help fill in um any mix missing
[1:10:17] pixels that um because of my higher resolution I'm picking um and it takes a little longer to run but not too bad and
[1:10:26] and in this case I've actually set a regional bounds on it you noticed before I had set Regional bounds in the level
[1:10:35] two file and so this one I've also set them when I make level two files of regional bounds if my region is um
[1:10:43] whatever my region is I increase the region size by a half a degree in every direction to make sure that when I'm
[1:10:51] running level two gen that that that that level two file has all the pixels that I need for the the mapped one so
[1:11:00] this is more precise when you're at level three map gen when you were at level two gen you just want to reduce
[1:11:06] the size of it but you don't want to try try to get it exactly the size that you
[1:11:11] ultimately want to get to because of the mapping you you'll end up losing data so I'm not going to run it but now that's
[1:11:20] you can go back look at those look at the slides that get the ideal and now we're going to look at those files that
[1:11:26] got got created I've got some level three files and I'll be providing some of these level three files that you all will be
[1:11:35] able to use and and um and um demonstrate with so if even if you don't um create them it gives you um files to
[1:11:46] work with so two key ones I'm going to open I'm just sticking with chlorophyll right now to keep a light file but but I
[1:11:54] can map it with other ones I'm going to um close the The Source One um just to
[1:12:01] keep um my my software light the less files open the better especially when you demo something so that way um now
[1:12:14] these are map files before I show these to you these don't contain land masks in them and one of the tricks to we're
[1:12:24] we're talking about uh 250 M resolution is um getting to be a bit of pixels and then we want um high resolution land so
[1:12:35] we're going to put the land right on right now before we open these so I've I've selected the file and I have
[1:12:42] choices of one kilometer but that's not very good so um but I I can up that to
[1:12:48] 150 and the reason why I'm doing this is um I don't want see that's the freeze but um if you select 150 or 50 m it's
[1:12:59] going to be a lot more pixels to to work with and better resolution I'm going to reduce the super sampling factor to one
[1:13:06] I'm only doing that because of this being ulie and it's a big file um and it's beyond the scope of talking about
[1:13:15] what these mean but if you reduce this to one and this to one it'll give you the better chance of this not freezing
[1:13:23] up and I'm not going to have this enabled um most likely you don't have to do what I'm doing and it won't freeze up
[1:13:30] but if but you will find when you're putting these 50 meter and 150 meter on big big files because of the resolution um
[1:13:40] issues it can freeze up so I don't want to freeze up so so that's the the work around but um to
[1:13:49] that so I'm I'm doing this in both um both um files first and I'm also going to put the bemet there again before I
[1:13:59] view it ideally you would probably want to view it then decide later whether you want to put it but I just want to make
[1:14:06] sure that this um works and doesn't freeze up so I just put some Beth themetry in one of these files I don't
[1:14:12] need it in both of them because I'm going to demo this one mostly so here we have plat car that's the standard
[1:14:20] projection so let's take a look at that and and as I said I made these these um
[1:14:26] coast and land mass which actually created these water fraction band if I toggle that on so we can see the land so
[1:14:34] this is now 300 meter or actually 250 M file so that's been reprojected at 250 M and I want to view the other one that I
[1:14:47] did which is Lambert equal area so the key in that phrase is equal area area so let's take a look at that and I'll put
[1:14:56] the land on that I'm going to use this soft button to when that made it big it
[1:15:04] actually because my soft button was configured to turn the land off but what I want to show you is the difference in
[1:15:12] shape so um so now when we compare these two you see the DraStic difference in shape of the Chesapeake if you use um
[1:15:22] what's commonly uses these um the the lat Lawns where it's a vertical horizontal uh lat lawn that's evenly
[1:15:30] spaced where in reality the Chesapeake is more like that this is the um equal area griding whereas this is not equal
[1:15:39] area so every pixel is not equal area especially as you go north to south so it's okay to present this in general
[1:15:48] unless you get and then case this gets um stretched out incredibly but you don't want to do
[1:15:57] statistics on a file that's not equal area so for statistics you definitely want to use this and then for displaying
[1:16:05] images ideally something like this it's just up to um you know what your time and resources for mapping so to do
[1:16:13] statistics on this one thing we can do is we can pull in a um shape file for
[1:16:20] the Chesapeake so I've pre-made some shape files so import Vector data EZ shape file and you can make your own or
[1:16:31] you can um there's plenty of them out there for um you can I can pull them in
[1:16:36] for Montgomery County or for Maryland whatever you want but this it's a simple shape file that I actually just drew you
[1:16:44] to draw a shape file you would just click on one of these um drawing tools and you would draw the region you want
[1:16:53] and then you can export it in the way you Import and Export into a file a particular shape file is once you've
[1:17:01] made it it's right here if I if that's one I made then I just rightclick on it
[1:17:07] and then I export it it geometry as shape file and then I can save it out so
[1:17:12] if it's one that I made that's how I made this and then exported it and import it in so what do I do with the
[1:17:18] shape file so it looks kind of arbitrary it but it it covers all of the Chesapeake and so then what I can do is
[1:17:26] I can do a mask on this and so so what I can do is a mask that um in The Mask
[1:17:34] manager F ofx if I go over here and I look at just the mask I say well I'm
[1:17:40] interested in just the Chesapeake so what I can do is say I want it to be Chesapeake and then I say and and you
[1:17:48] can either do this and or that and then you do not and and not land so it's I
[1:17:54] want it to be in Chesapeake and not land so now I've just made a new mask I'm
[1:17:59] going to give it a name just call it chess mask is the name of this mask and
[1:18:06] I will make its transparency zero make it stand out and give it a a different color I'll give it blue and then if I
[1:18:15] turn off there's a vector masks if I turn that off now I can see that I have
[1:18:22] a Chesapeake mask that's the region of the Chesapeake only that's in blue so it's not the color that you care about
[1:18:30] but you want the The Mask itself so what you can do then with that Chesapeake mask is you could limit your data on
[1:18:39] that so if I click on the chlorophyll over here right click go properties and then if I do valid pixel expression if I
[1:18:50] type in um chest mask what I've done is I said my data is only valid if it's in that masked region
[1:19:00] so that's called a region of Interest mask it's the mask is representing the region I want if I want to use it as a
[1:19:08] flag mask then you just invert that and I would just say not chess mask and now the data is outside so that is um one
[1:19:20] use of that let's go back to putting it as the data inside so another really nice thing you can do with the the mask
[1:19:29] is I have this region of the Chesapeake and I might want to say well how big is
[1:19:34] that so to do that you go to raster masks and mask area and I can pick the mask that I'm interested in
[1:19:44] Chesapeake mask and run it and so my mask area is 12,000 Square km which is fairly consistent with um the the the
[1:19:55] values you find on the internet it's um it's it's a very it's a tough system because of all the tributaries to um to
[1:20:05] get exact um match I think the numbers on the web are like 11,600 but you you've got all these
[1:20:14] rivers and everything's at at 50 um sorry 250 250 meter resolution here so you not you're not going to get an exact
[1:20:24] match but it looks like in the ballpark of um at that resolution um of what the the actual values are and that's the
[1:20:33] region of the Chesapeake that you're interested in and so then I can say well let's do some statistics on that area
[1:20:42] now so I go up to this here and um I have to if if nothing's selected in here
[1:20:50] that means you don't have a band selected so so right now it's kind of in nowhere land where nothing's really
[1:20:58] selected so just kind of click on that click on your statistics and and um I'm going to
[1:21:07] pick I'm going to limit my region to be water and Chesapeake and I'm going to say give me
[1:21:17] the intersection of that so it's going to look at just um that as my region so it's not it's going to ignore the land
[1:21:26] around it in in the values and then I run this and then what that's showing me is that the the number of regional
[1:21:34] pixels so I'm getting a retrieval rate of of 46% of my pixels in this Chesapeake region um have values which looks
[1:21:46] reasonable that looks like what it is with all the river systems there so as as I mentioned earlier there was there's
[1:21:56] plenty more we can do um I want to show you the arol but I do want to show you
[1:22:02] this a few things sorry with with vetry um let's look at vetry and I have my bearings let's put
[1:22:11] on the land mask and what can we do with meetry well one thing we can do is we
[1:22:17] can um mask on that and we can also um create contour lines on that that's a very useful thing for us to do so what
[1:22:29] we could do is we want to let's say we want to do one at um this is in meters
[1:22:38] so I'll do one at say 10 m and let's say I want to do two sets of contour lines I
[1:22:46] do two levels preview it and my first one is here I actually actually I'm going to go back and I'm going to say
[1:22:54] that the last one is just so it'll be less work on my part it'll Auto make that now I have two one's at 10 and
[1:23:03] one's at 200 M and let's go ahead and cuddler one white so I have two sets of
[1:23:10] contour lines that'll be created there they are so we see the the one along the Atlantic shelf and we have another
[1:23:19] shallow water one that's going into the um um Chesapeake so so now if I want to see
[1:23:26] that on my actual data go back to the data and these are here the contour lines are are layers so they're right
[1:23:35] here and um if I'm in the right file hold on let's see that was not on okay
[1:23:43] so I I don't need the polygon so now I can see these contour lines here um and
[1:23:51] then I could limit the data based on depth instead of being in the Chesapeake Bay so if I want
[1:24:00] to go back to chlorophyll and I want to say Petry e themetry um less than than 200 so now I have my uh shallow water
[1:24:19] emry less than 200 and I could bound it inside uh the shallow water as well so vetry less than 200 and with
[1:24:31] themetry greater than 10 so so that bounds the data within the the that particular um selection so there's a lot you can do in
[1:24:46] comination with the the um masking and the the um contour lines if I want to do um quick extract like
[1:24:56] say you're interested in the this area here can just zoom in do an extract here click okay I just click that tool there
[1:25:07] which is the extract tool take a look at it open it up and so now we're extracted
[1:25:14] here we can add the color bar the map grid lines zoom out and so now we have a
[1:25:20] a zoomed in field and um zoomed in image there's a collocation tool um collocation tool enables you to take
[1:25:34] multiple files and combine them together for that good example of that is let's look at we got the um there's some products I
[1:25:47] mentioned you can't put together when you make them so later you can put them together so let's open the
[1:25:53] cyan cyan product so the cyanobacteria levels we zoom in here we can see the canano bacteria it's not in
[1:26:04] every area but there's it's been detected down here so that's um that that this file would not have been able
[1:26:11] to be combined with the chlorophyll so what I can do is now that it's U mapped and already processed I can combine them
[1:26:21] so if I go to collocation and the products are already loaded in so so sorry you want to pick
[1:26:30] them so um I have one that and they do need to be the ideally the same mapping
[1:26:37] you don't have to make them but the advantage of making them the same mapping is this tool and other tools
[1:26:42] work better when you want to combine them because they're the same mapping so I've got my uh chlorophyll is going to
[1:26:50] be my um Main one that's serving as the map um but the since it's the same mapping it's um not a problem and and it
[1:27:01] runs faster so basically I'm trying to combine these two files together and it's going to be called collocate but I
[1:27:08] can change the name I'm not going to bother and I'm I'm going to um run it and I don't know how long this takes but
[1:27:18] it should be relatively quick some of these tools enable you to go talk about other things while they're running other
[1:27:26] ones lock it up but that one does but it's finished so so then it just made this
[1:27:35] this collocate so now what it did was it appended I had some options to not have it append some things but to the source
[1:27:46] is that came from What's called the master which was the chlorophyll that that's not good that it didn't open that
[1:27:53] um we'll have to look at that um we do have another release coming out so we'll look at this um but for whatever reason
[1:28:01] it's not opening the um resultant Bend but which it should but yeah so we'll have to look at that it's um it um so
[1:28:12] that's how the collocation um tool Works um and there's um when it works so we look at that that subset the Mosaic tool
[1:28:25] is a tool that you would use to combine um many files together which is um a lot
[1:28:32] like the binning process so so it it um I think it would take too long to talk
[1:28:38] about that tool you can figure it out um the reproject tool is another way of reprojecting the single file and that
[1:28:49] would probably be worthwhile to um show so with the reproject tool if we take um one of the source level two files that
[1:29:01] basically you can repeat what you had done or or alternatively um do what you did with L2 bin and L3 map gen so um so
[1:29:11] we have our input level two file reproject this is that plat car projection or if I want to use the
[1:29:20] Lambert as a legal area that's the one I used before and then with this projection you do have to define a
[1:29:30] latitude and longitude at the center so you would um Define the values here and then lastly or not quite lastly but you
[1:29:38] would um um you might not want to preserve the resolution you want might want to pick a specific resolution that
[1:29:45] can be done here and then um now lastly is you can mask it so this is a new
[1:29:51] feature to to reprojection which didn't exist in previous Cass is where you can actually um apply the masks that were in
[1:30:00] the level two file when you um reproject it so that way you don't retain those those bad aerosol values when you bring
[1:30:09] it over because once you bring it over and you didn't mask it then you have bad data and you don't know why it's bad
[1:30:16] because the masks are no longer um there and so I want to probably running short of time but
[1:30:25] but I think it's important to to address the issue about aerosols and and get getting um potentially better retrievals
[1:30:36] so if by too many products open I'm going just close them and sort of start over on that mindset of handling the
[1:30:47] aerosols so so the options for aerosol is you would first um probably want to run level two gen um and get out some of
[1:31:00] the aerosol products so there's a couple aerosol products that are useful so I did a standard run of level two gen and
[1:31:07] I picked these particular products and if I take a look at chlorophyll and zoom in and I see that these were the um bad
[1:31:18] values and then there's there's a thing called Model Max and model men and and it's actually using a blend of these um
[1:31:28] two models and these two models actually have um numbers associated with them and um I may be going fast through this but
[1:31:38] you can rewatch through this but if I let's say if I want to know um you can
[1:31:43] see how it's it's up here the model numbers there's 56 out here but as you get in coastal it changes is the model
[1:31:52] numbers and it's using two of them so and what one of the ways of um doing aerosol correction is doing a fixed
[1:32:00] aerosol where you basically pick a single aerosol model and run with that so I see that there's there's variance
[1:32:10] of uh numbers so what I can do is use the histogram plot right now I'm on aerosol model Min we won't get into what
[1:32:19] Min and Max means but it's just that it's a blend of two models and if I if I
[1:32:25] pick region of interest and I I say actually I didn't load this in this is where it's important that you you want
[1:32:34] to focus in on the area that you're concerned about if if you so I want to um focus just on the Chesapeake in fact
[1:32:42] I'm not going to bother to load because you've seen that I'm going to just going to draw a square here so this little
[1:32:48] square is now my region of interest and so what I'm trying to do is get an aerosol that works good in that area so
[1:32:58] one of the ways is picking the models so now that I have that region of interest I'm going to do a histogram plot and I'm
[1:33:06] going to go down here and pick um my geometry it's it's that's that little square that I wrote It's called geometry
[1:33:15] and if I run it we see that model number three and four are used most commonly there's a few of these other ones being
[1:33:24] used but predominantly we've got model 3 and model 4 being used and if we we also look at model
[1:33:32] max again do the histogram plot again run it we see um here model two and model three so we basically have two
[1:33:40] three and four are the models that we should consider so so then we just need to um run level two gen for each of
[1:33:51] those models RS and see what happens so to do that go to level two gen and go to
[1:33:58] processing options this is where we have this aerosol opt so aerosol opt has all these negative values and that's a bunch
[1:34:08] of blends of mixed models and one option is a single model so to do a single model you actually just give it the um
[1:34:17] um the model number so I'm going to just pick one of these so I can see the value
[1:34:23] because you can't select that but that eror error opt Eros so option is right now minus 8 but I just did that so I
[1:34:32] would have it to edit so what I want to do is I want to set it to four so what
[1:34:37] that's going to do is it's going to run my aerosols using option number four and then I would give it an output file name
[1:34:45] and and some products as well so I did that for model three two three and four based on my observation so is called
[1:34:56] using a fixed aerosol so so then if we go back to the output of what I ran here which is
[1:35:07] model 2 three and four we open those up and a reminder where we're coming from is here
[1:35:18] was and we'll for each one we need the um land to get a bearing on this so
[1:35:25] that's a retrieval from model one don't really need this anymore so I can come back so if we put land on the
[1:35:36] mix mix model and we really should mask out the um values so we're not um deceived by that there there's the and
[1:35:51] then there was um ATM fail also had some is what we're looking for is the to see what
[1:35:59] improvements we have in in um retrievals and I'm going to put the no data layer just so I can compare this easier
[1:36:08] so and I think I can make these are level two uh it's easier at level three but um if I to make if you go to
[1:36:18] navigation and click this here this should um um I'm in the wrong mode here I just drew on that but that's okay uh I
[1:36:29] think that yeah I think these will be synced up yeah they are all right so so we see our original was here using model
[1:36:37] number two we actually lose data and and and actually it gave us a different value of chlorophyll so that's not
[1:36:46] really a good model to use but ultimately when I went through for this particular particular one when I use um
[1:36:54] um model 4 which I think I already opened that one did um look good and so so there's the chlorophyll um I'm going
[1:37:04] to go back to this band everything zoomed back out as it's all synced up I'm going to add on the land zoom in and
[1:37:13] this is the pic here so you so you so you see our original one is here but
[1:37:19] using model 4 we gain some values definitely with the model four and then it's up to up to whether these
[1:37:28] you know the validity of all these um you know darker values um that more research but it definitely looks um you
[1:37:38] know fairly reasonable um going with the fixed aerosol for that region the key is that when you do that you've denoted a
[1:37:47] certain region and it's going to cause uh elsewhere in your um data to be off um so it's it's
[1:37:55] very much depending on the the the region that you're you're picking and the the the aerosol content in that
[1:38:02] region um one thing you notice is that the coloring here is not color blind compliant it hits this bright green so
[1:38:11] to make cadas color color blind compliant you go to General color manager and here's the pet and I'm doing
[1:38:21] it from scheme CU like chlorophyll each one has its own color scheme but it's using a standard palette so we go with
[1:38:29] universal pallet and if I say okay then when I go back to color manager and reload this band so now that's a color
[1:38:37] blind compliant palette that's being used so that's how you do the aerosol correction and I'll do one last thing
[1:38:45] with the um band maths so let's um take two files I'm going to close all these we're going to open two files to compare
[1:38:56] with in band maths I'm going to do um ma files and what I'm going to do is take
[1:39:04] two files that are actually monthlies that I made with SAS and did it the same approach that you would do it in the
[1:39:11] slide where I combined all those ulie files I had a bunch of um um I went through each month and found about six
[1:39:19] files that were cloud-free in the Chesapeake for each month so this is July and um I'm going to as I mentioned
[1:39:28] about the land mass I it is nice to have but ideally you want to do this before
[1:39:34] opening these files so I'm going to do that first just so it's easier to um talk to so create land
[1:39:45] masks and nothing blew up so that so here's July with the land so this is many days in July that have um there was
[1:39:57] six days that were cloud-free but that can be considered a monthly and then let's look at November uh November you get a lot more
[1:40:05] retrievals than you do in the summer and the Val but the values are going to be slightly different naturally because
[1:40:12] it's the summer so um a nice thing to close on would be um taking a look at
[1:40:19] the difference between summer and um and winter or November so to do that we'll we want to
[1:40:28] pick a file to be in where we're going to make a a new ban so we'll do it in
[1:40:31] November doesn't matter what file but um so right here is the make a new ban and um what we'll do is edit expression and
[1:40:41] get rid of the current value and so I want to do 100 time the July minus November divided by November say okay
[1:40:55] I'm not going to bother to name it this time I'll just do a percent difference but I what I wanted to do is not make it
[1:41:02] virtual band so what that's going to do is make it a essentially it's Standalone ban if I left it at virtual then it's
[1:41:11] going to continually look at the other file which is what I wanted to not have happen so I make this new ban this is it
[1:41:19] here so what I can do now is I'm looking for a difference here so I there's a
[1:41:24] anomalies anomalies plot and um what this does is this um takes a while to build initially when
[1:41:33] you load SAS a session there's this um you're seeing all these different pallet images and it takes a while for it to
[1:41:41] assemble all that so there's just no progress bar to let you know that so sometimes um it's hard to know whether
[1:41:49] it froze or it's just think thinking so it was thinking so so I did an anomalies um color bar and now I just want to make
[1:41:59] um my Min and Max sensible so do minus 100 to positive 100 and then I'll go ahead and put the land on so that's
[1:42:07] rather interesting um results because it shows that in the Chesapeake that the chlorophyll value has increased in July
[1:42:16] and and out here it's increased but actually in other areas it's decreased so um I found that to be um rather um
[1:42:25] interesting to see the decrease that goes on as well so um that's an example of um using the band math that compare
[1:42:34] two bands and you've actually just added um I know we saw that the collocation tool did not work but this is a way that
[1:42:42] I actually was able to get um a new ban in here and to end on one last thing
[1:42:51] since the collocation tool didn't work I'm going to go ahead and do get my cyan ban in here by a different means and
[1:42:58] that's using the math band so right now I have chlorophyll in here and I have my difference band let's go ahead and um do
[1:43:06] band mths as a way to get the cyan bacteria into my file so so if you click
[1:43:15] the cyano bacteria file here and this case I I'll name it but sayano and then do edit
[1:43:24] expression and um click over here and um I think I'm in the right file when I'm making it we'll find out um when I make
[1:43:35] it um I think I might be in the wrong file I'm supposed to be here make sure
[1:43:41] I'm clicked on here and then when I do it do it one more time CU I think I was
[1:43:47] in the cyanobacteria file somehow um sorry that's the target product yeah I you don't want to change
[1:43:56] it up here you want to so let me start over again it's easy to when you're um
[1:44:03] you know to click wrong button so so here's where you want to write it so I don't want to change it here I go into
[1:44:09] the the expression and I want to click ciona bacteria and click that product but delete the multiple clicks and the
[1:44:21] a so now we've got the cion bacteria product here and CI cyano give it a name and now it's going to write it into the
[1:44:31] November file so now it should work yes it did so now I have a file that has the
[1:44:38] cyanobacteria merged in with the chlorophyll along with my um difference um so and to polish that all off we have
[1:44:48] um now the file and we want to save it so then we right click on it we save
[1:44:54] it's called a product in Casas but it's a file um so it's don't be thrown off by
[1:45:01] that um so you save this product as this it's going to um convert it to a beam di
[1:45:07] map you say okay you tell it where to save it and then you save this and it'll
[1:45:13] save it and then you can um subsequently come back and open that file up and you'll have a those bands in there and
[1:45:21] so I think there's plenty more that SAS um can do um and I really encourage you to download nine soon as it comes out
[1:45:34] because it will have not only bug fixes but we'll have um up in the settings you'll have a lot more um um preferences
[1:45:44] available to you you can do preferences on the the level um to gen and level two Ben um a lot of the the ocsw tools will
[1:45:56] have have preferences and it will also have the ability to when you click on chlorophyll like right now when you click on
[1:46:03] chlorophyll you you get just chlorop fill but it will actually put be able to put um like the grid lines and the the
[1:46:12] color bar like everything gets put on right away by default when you um open it that's a preferences setting but it's
[1:46:19] um you know a little bit more user friendly um and will of course be supporting uh the latest of pace so that
[1:46:28] wraps up the live demo and and can potentially um add to the demo or answer questions at that time so I thank you
[1:46:39] thank you um Danny for that wonderful presentation and demonstration and um um here is what we we learned today
[1:46:51] I'm just going to summarize um so in in this session we went through SAS 8.4.1 uh Daniel demonstrated it
[1:47:03] beautifully we identified sensor data processing capability and workflow we used oldi as case study but we saw
[1:47:11] workflow for many other sensors that you can um use later on and we demoed Sentinel 3 OG data processing and
[1:47:20] analysis for the tsap Bay Region uh you can choose any other region uh you can do true color image display level two
[1:47:28] level three uh data binning and mapping can check quality Flags you can look at statistical and mathematical analysis of
[1:47:37] of different bands uh we also saw how to use ocsw tool and analyzed and visualize loril concentration and remove sensing
[1:47:47] reflectances specifically for o um we also previewed plan for incorporating Pace data Bas has already launched and uh data will be
[1:47:59] available um in a few months so then we can analyze using uh SAS so again here's a reminder uh that
[1:48:13] the homework is posted on the website um on the training web page you can download and uh answers must be
[1:48:22] submitted via Google forms uh there's also an exercise where you can get uh hands-on experience um working with SAS
[1:48:30] um and some of the uh questions involve um taking screenshot of your SAS window and sending as homework
[1:48:38] answers uh so those who attended today's session and those who complete the um homework assignment by deadline will'll
[1:48:46] receive a certificate of U completion so uh that concludes our presentation part but we want to acknowledge our obas
[1:48:57] team first of all Daniel NOS for the presentation and also iur Abdul razik and um bingyang they helped us in uh
[1:49:07] preparing presentation they um their help was very instrumental they are the experts we also want to thank other ca's
[1:49:15] team members Donald Shia Sean Bailey Alicia Scott Wang cing Wang uh and um many other scientists um are involved in
[1:49:26] developing algorithms that you use in SAS here are some of the resources that you can refer to uh the presentations as
[1:49:36] well as recording will be available on our website very soon um and here is the uh NASA Earth data Forum any questions
[1:49:45] you have about either data or SAS uh you can post the there and uh with that um I
[1:49:53] want to thank our ret team here um we have people helping us with editing and coordinating this training uh so uh I
[1:50:04] want to acknowledge uh BR Levin Sarah caselle Salin Hudson ooi Natasha Johnson Griffin Sean McCartney Susan Monty and
[1:50:15] Jonathan O'Brien all of them have helped in uh creating uh this training so thanks arsa team and thank you all for
[1:50:24] attending this session uh we'll go to question and answer and we have our SAS experts here so uh we'll be able to ask
[1:50:32] them uh questions and and get answers if we don't if you cannot post all the answers today uh we will take care of
[1:50:40] them later and then we'll post them on our website so thank you very much and I'll go back to uh Danny and iur and
[1:50:50] Bing for taking care of the Q&A so we'll start with um our question and answer session and uh see how many
[1:51:05] we can cover right now um and uh Daniel ior and Bing you can unmute yourself and and reply to
[1:51:14] these these answers so let's start with question one how are we uh how can we get help installing SAS on
[1:51:23] a window Windows machine so of course you can post this question on the earth data Forum uh and
[1:51:33] um s steam please um add anything you want to hear um we would like you to uh post the
[1:51:43] U questions on the form because then uh that benefits other users too and and other users might actually
[1:51:51] chime in you know with their experience so that it's the if you have a question the best way is to post the ask a
[1:51:58] question on the Forum okay great thank you B uh second question is also related to SAS on
[1:52:07] Windows environment so yes um it works on the Windows machine um and processing works on windows with Docker um question
[1:52:17] to if you have any um question questions about that you can post them on the Forum um how about ocn 3 so SAS does not
[1:52:27] support oc3 processing uh question four what are the possible applications of SAS for atmospheric analysis and SAS
[1:52:38] team you can uh add to this but first of all you can do atmospheric correction of optical images that you use for a
[1:52:45] quality monitoring U I also believe that since SAS can and open net CDF files you can get any atmospheric files and kind
[1:52:55] of do some of the analysis but I would let see to that the presentation covered um aerosol
[1:53:09] Corrections so I mean Seas does the atmospheric correction so um more details about atmospheric correction questions or
[1:53:21] would need to be more specific and um can be addressed on the Forum to understand what can be done there's a
[1:53:29] lot that goes into it uh question five is what is meant by level one data so there's a slide on there um
[1:53:43] earlier on but level one data when we think of level one data it's the rawest well there's level zero as well but um
[1:53:54] we we um it's unmapped it's it's um it's broad because you have level one b and one C so that's going to that would take
[1:54:06] some time to get in I think the slides covered it some there there's on on our web there's some information about it
[1:54:14] but the the key is knowing that it's not um the geophysical products AR there yet and depending on the sensor it may not
[1:54:23] have geoc coding either also um the prerequisite uh from our set what fundamentals of remote sensing covers some of uh this that what
[1:54:35] are different levels of data uh uh question six how many control points are required for vicarious calibration so here's a a reference um
[1:54:51] one of the earlier references about vicarious calibration that's provided here in the literature I've seen hundreds of points being used but um if
[1:55:00] there's any specific range uh if you know um Tenny or Bing you can mention that that here well I don't know specifically but
[1:55:11] there it's got to be valid data so they're going to take as much as they can in order to understand that mission
[1:55:18] as early as possible and then um and then you know apply that that gain correction it's not something that later
[1:55:28] would just continually change it's a because you still use the onboard calibrators so it's yeah it's basically
[1:55:37] if if they don't get any control points they can't vicariously calibrate until they do so it's but they they don't reject any
[1:55:47] control points so what is the advantage of using Bend products compared to ma ma um well if you're using bin products
[1:56:01] then then then as far as downloading the bin products then as there's one a slide on that that mentioned that then when you
[1:56:10] map you can um map to different resolutions so um yeah so it depends what if the map isn't what you want then
[1:56:21] you would get the bin products the map is like the end of the the line for ocsw processing so you can't run
[1:56:32] processors further on that if you're at the bin level you can continually um use level three B it's basically it can
[1:56:40] serve as an input to other binners so um so yeah it that that sort of answers it
[1:56:50] um it's best I can on the on the you know unless it's a little more specific question uh so question eight um it we
[1:57:02] it's again about um installing SAS um and it says IOD remote server is down ocsw is not accessible please start
[1:57:13] ocsw remote server how do I do that and the answer from the SAS team here is that after you
[1:57:21] install SAS processors through the docker image or virtual machine you need to make sure that the remote server is
[1:57:29] running so it could have been down temporarily when you tried question nine is it possible to run the SAS on remote server or uban to
[1:57:42] um so answer is the SAS processors can be installed on a remote server and SAS Bui can Sy them we haven't tested
[1:57:51] running the whole SAS application the GUI part and the processors on a remote server uh question 10 is how do you
[1:58:04] input the llon for the areas so this is um um exactly it's not sure what the question means um
[1:58:18] so it if you can be more specific otherwise llon can be provided through several um tools and then you can answer
[1:58:29] this question yeah many tools um use lat laon like a abounding area you know if it's like a level two extract level any
[1:58:40] of the extractor tools um Repro uh not reproject Mosaic tool will have area in it there's tons of tools that have um uh
[1:58:50] lat lat lawn um you know like you can make masks um with lat laon so you could uh create
[1:58:59] um you know in The Mask manager a mask that is of the area and then that there's many ways that you can inject an
[1:59:07] area in there including there's a later question on it but um shape files so you can um import a shape file and then that
[1:59:16] becomes a a usable region of Interest area mask uh question 11 is what are the specifications needed for the flagship
[1:59:30] step um I've never heard of Flagship step right so I I think more clarification is needed I'm not sure um if you mean Flags
[1:59:45] then please be um more precise uh question 12 ceda's installation in Windows 10 per platform is asking some
[1:59:59] credentials what shall I do please help uh again I think you can post this on the Forum question 13 what does it mean by
[2:00:16] level 1B file for MSI right now only level 1 C files are downloadable for Sentinel um you don't need um l1b file
[2:00:28] when you do L2 gen you MSI you use l1c yeah I don't know probably there's a typo on our
[2:00:38] slide yeah I think the level one C was not mentioned but that's what is used for MSI
[2:00:47] yeah so question 14 when choosing products in in the L2 gen screen how do I know which products
[2:00:56] might be conflicting Denny yeah so that's the advantage of the product Suites um that are available when you um start
[2:01:07] exploring products outside of those Suites um you know short of you know that in the future you know we'll do
[2:01:16] some more tutorials on specific products but you can certainly ask on on the Forum some questions might
[2:01:25] I mean Sor sorry some products might be obvious I'm not if it's like ancillary things like sensor Zenith angle solar
[2:01:34] Zenith angle those aren't conflicting but if it's products where you think there could be gains involved um other
[2:01:41] atmospheric um correction being done differently um you know if you're if you're thinking about mixing chlorop and
[2:01:49] and a land product well chlorophyll isn't on land so you know that you know intuitive thing might help but um
[2:02:00] ultimately there there's buried inside ocsw there in the directories are some suites it's like ocsw share common and
[2:02:12] ocsw I I forget where um you know the the path um but there's a hierarchy where it's like looking for Suites like
[2:02:20] the OC suite and inside there is um um defin some of the gains and settings so you could explore the directories you
[2:02:31] don't have to go too deep you just have to find the mission directories and go into those and you would look at msl1
[2:02:38] two um defaults that that's um what L2 gen is using and that that's only going to help you though for Suites that have
[2:02:49] been defined so um really if you're looking for a um product that um is not you know the the the um orientation of
[2:03:00] the spacecraft and things that are obvious not associated with algorithms you might be best to post a question on
[2:03:10] it um on the Forum you question 15 is I'm a little confused us are Sr mod L2 data surface
[2:03:21] reflectance or remote surface reflectance data and could you share a relevant publication so Mo this data are
[2:03:28] surface reflectance um when you look at remote uh surface reflectance or remote sensing reflectance that we mentioned
[2:03:36] here U there is a ratio of um flux going in uh and then uh coming out at the surface so for prop proper
[2:03:49] definition you can look at this ocean Optics book uh there's a description about uh different types of reflectances
[2:03:58] that we refer to question 16 is what is Ban data and L2 J could you explain in detail
[2:04:11] please well there's some slides on there um um that we went over um quickly obviously so the B
[2:04:24] uh uh data L L2 gen is a processor that takes um that goes from level level you know one to level
[2:04:37] two so that's um not mapping the data um Benning is the next step that is your first step in mapping data and um it's
[2:04:49] bin data bins are it's dividing the world up in the equal area bins with a senoidal senoidal projection and um so those are special
[2:05:00] formatted formatted files and then you would subsequently map it so I hopefully the the um presentation clarified that
[2:05:12] there's a lot of details if you go to the slide on um there's uh three slides on the level
[2:05:19] that should help a little bit on that concept thank you question uh 17 is how can I import satellite images into SAS
[2:05:32] so it's just uh go to file on top left and there is open product underneath so you can navigate to the file that you
[2:05:42] saved and open question 18 is it necessary to be connected to the internet for using ancillary files as an input and yes um
[2:05:55] or you can get the yeah go ahead yeah yeah well actually I think you got it right if if you have downloaded them
[2:06:02] prior if you've already run that particular uh day then it has downloaded them onto your computer and if they're
[2:06:10] on your computer then it doesn't need to download them again so if you if you know the days that you're going to run
[2:06:19] and you know you're not going to have internet or you know just run for that week of days and then you can go back
[2:06:26] and rerun when when you're on some ship or somewhere where you don't have internet connection and you already have
[2:06:32] the ancillary data downloaded so yeah you don't need an internet connection and that's a really key for um cdas and
[2:06:42] then if otherwise if you don't have internet connection then you just can't um use the answer AR files if you
[2:06:49] haven't downloaded them but you could still run level two gen so question 19 is what's the difference between L2 gen and C2
[2:07:02] RCC which would be more appropriate over larger Lakes like Lake Erie or the Great Lakes is the chlorophyll a product
[2:07:12] generated in Len from uh Sentinel 3 OG appropriate for large inland Lakes like Lake earing so I am not aware of c2rcc um if
[2:07:27] you are Danny or anyone you can say that but uh as long as you can resolve pixels
[2:07:34] in any big lake yes you can use chlorophile products so o chlorophile products you can use for Lake area or
[2:07:42] Great Lakes yes yeah I think I I I'm not sure but I've seen C2 or CC written on
[2:07:49] the the snap uh Forum so I believe it's one of their the ISA processors okay we can provide you reference for
[2:08:01] that uh later on question 20 incidentally um before we move on while I mentioned the snap Forum
[2:08:11] um um the that that for ocsw they're not doing ocsw over there but but the the snap
[2:08:20] snap um it shares a lot of the same tools with uh Seas like the reproject and subset tool and some of the
[2:08:29] visualization tools and so it it's also a good place to if you're not looking at ocsw and looking at um uh some of the
[2:08:40] other tools and have questions on those it's it's a good reference to also go to that form as well and see what people
[2:08:47] are posting in there yes the Forum is a very good resource uh because all the users can
[2:08:55] talk to each other and help um solve some of the problems such as installation and things like
[2:09:02] that uh question 20 I followed the video which which was sent through this course email I installed the docker and SAS in the
[2:09:14] window I started to import the Hawke eye data in SAS but I couldn't do that I was
[2:09:19] stuck here and I couldn't import any other imager either so I couldn't go for further steps kindly help me with
[2:09:35] this so I think bang or ior or Denny it say you do not need Docker to import
[2:09:41] data in Casas please share the name of a hawkey file that you would like to import so I think
[2:09:49] because um you can visualize um without Docker I believe that's why right no you don't need stalker to visualize if you needed to
[2:09:59] import the Hawkeye file you only need uh see that's PR for see that's application and it it should be a fairly um
[2:10:10] straightforward so I don't know why he cannot import it so that's why I'm asking him to share the name of a hul
[2:10:17] file so I can take a look at it thank Youk so question 21 is talker required for Mac or Linux users only no I don't
[2:10:29] think so now the docker image is optional for mac and Linux it's only required for Windows question 22 can we use this
[2:10:40] platform for wetland water quality analysis um I believe you can because there will be you can see the water but I'm not sure
[2:10:58] how accurate that would be any thoughts on that being Denny there's an ndvi product I don't know if that's associated with this at
[2:11:09] all but it's just within the limits of you know what satellites are are seeing and what algorithms we have available
[2:11:20] certainly the row s is available um for um the the the whole earth um but you know RRS and other things
[2:11:31] are uh limited that'll get mased out right so I think you can get rows and then from then on you may be able to
[2:11:44] derive some relationship on your own own uh question [Music] [Music] 23 um is there any option to import our
[2:11:57] study area as a shape file and it's I think um the SAS team has provided the answer it's yes go to
[2:12:07] menu file import Vector data as reshaped file yeah and when you import that then that gives you a um a mask inside there
[2:12:18] and you which we typ typically typically typically call a um region of Interest mask it'll say Roi masks so many of the
[2:12:28] tools use Roi masks so that's um you know the primary use of the and you can also make a shape file in inside SAS and
[2:12:38] Export it I I don't know I think I think I did that in the vid in the demo I
[2:12:44] can't remember but you just draw it and then you export it and then yes you did and also in the
[2:12:52] homework exercise you will be um importing U and as reshape fun it's a simple box region of interest but you
[2:13:00] will be doing that uh question 24 is might be out of scope for this seminar but I'm having
[2:13:09] trouble finding a good answers in documentation that I can find online there are two uh Sentinel 3 oldi
[2:13:17] products for each seen overl Erie one is land processing center and mr1 Marine reprocessing Center these are
[2:13:28] specified in the file name but are there any functional difference between the files and if so uh which would be better for Lake
[2:13:42] AR so I don't recognize that it might be something from Issa files yeah either Noah or Isa so I think we'll have to get
[2:13:52] back to you we'll explore that a little bit and let you know question 25 is there a way to check
[2:14:00] for sunglint contamination in scenes um other than through visual inspection and is there a way to correct
[2:14:12] for sule prior to modeling chlorophyll a concentration concentration well at level two you have sunglint um masks there's there's several more
[2:14:24] questions on it I saw um so there's a high glint and a moderate glint mask and there's also thresholds that can be
[2:14:34] adjusted if you're running level two gen to um affect when that glint gets triggered um but um so that's how you can mask it out
[2:14:47] and and you but you don't have to mask it out and it's already got um glint Corrections
[2:14:56] Corrections so you can just not use the flags and when you're viewing a level two file it's not massed out so you actually by
[2:15:06] default so you can see the um but once you B then the defaults are to mask out
[2:15:14] at least High glint if I remember correct I don't think it moderate glint gets masked out by default but you can
[2:15:21] um change that parameter within flag use so that's when you go bending to mapping um so but you can go well into
[2:15:33] the the glint or chlorophyll it's just then you have to think about whe whether it's um compromised or not to the level that you
[2:15:44] don't want to use it so it's a quality control issue at that point okay great thank you
[2:15:55] um in question 26 what are the specifications needed for the flagship St step okay I don't think that's very
[2:16:04] clear what what you mean by Flagship step also is TSM an option as a derive geophysical parameter um I don't think
[2:16:15] tokal suspended matter is a derived parameter a standard derived parameter on in in L2 gen correct uh I
[2:16:30] yeah I think turbidity is there but total suspended matter uh most likely not but we can check question 27
[2:16:48] does the coastline still overlay a raster or is gssh Vector data used some question same question for B metry and
[2:17:00] gbco data well when you use the coastline land tool it creates both a vector layer and a mask
[2:17:14] raster raster layer and say in the bemet toll creates uh topography and and three band three bands it creates um and
[2:17:30] and um one mask no no vectors created for Beth themetry so actually we are passed our allocated time for this uh webinar
[2:17:47] uh um and we have many more questions to address so what we're going to do is we
[2:17:53] will take care of these questions offline and post them on the training web page um so we really want to thank
[2:18:00] you all for attending um today's webinar and special thanks to our uh SAS team here our speaker uh Daniel Nos and
[2:18:12] thenor abik and ban so thank you so much for your help with this training and answering all the questions uh we will
[2:18:22] take care of uh all the questions which we have not been able to cover now and we'll post that on our our web page uh
[2:18:30] all the training material is on the web page and homework as well uh in the presentation you will there's a there's
[2:18:38] a whole appendix section where there are many slides that we did not cover but they are quite informative so you can
[2:18:45] refer to them and as I mentioned earlier this training is more or less um a reference training that when we do our
[2:18:54] uh water quality training in future our said does that we will be relying on this uh Seas training so to to use some
[2:19:03] of the features that we discuss today so thank you all very much and thanks our arset team as
[2:19:11] well also you will receive a survey from arset um by email so we request you to to take care of the survey so and
[2:19:21] provide your feedback to us thanks all anything from the SAS team if you want to add anything please go
[2:19:40] ahead but thank you all for being here and your help yeah thank you all and thank you
[2:19:49] all for um using seas and you know please U post your questions on the Forum and um SAS 9 will be out before
[2:20:00] Pace has data public so um we're busy on getting that ready for you all so please uh update when that comes out thank you
[2:20:11] which will be around the end of March approximately great thank you wonderful yeah it seems some people have
[2:20:35] question uh problem with Docker installation um when you put your question um please be specific and try
[2:20:44] to attach the actual message to us also uh make sure that you don't have uh network connection issues from your
[2:20:53] own system administrator site you know you don't have a um you don't have any issue with connection for for example
[2:21:02] running a script um you have to have permission so make sure you you don't have any network issues
[2:21:09] first and um we are also um we will provide a tutorial maybe for the docker part to runs through everything the
[2:21:20] installation and configuration that would be great actually yes yes um but I think um once you go through the Forum you'll
[2:21:33] get enough feedback that you can install Cs and Docker on the Windows machine in any case I think if you want
[2:21:41] to analyze level two data or or view them then you you don't need that even on Windows you can use the you see
[2:21:50] without OCS I believe yeah just opening a a file and then analyzing you don't need ocw this that's true and the the uh Isa
[2:22:04] mostly that all the their developers use Windows so they're mostly Windows based so um you know all the general tools are
[2:22:12] um you know definitely wind Windows friendly friendly great thank you all and so much yeah unless you want to process
[2:22:27] something you don't need a darker image installation at this before that step so you can you see that for opening an IM a
[2:22:36] file look at the image and do the statistics analysis analysis great okay thanks thanks again bye everyone
