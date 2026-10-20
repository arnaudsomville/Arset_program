# Introduction to Python Tools for Visualization and Analysis, Part 2/3

`https://www.youtube.com/watch?v=Cr6xtc_ITf4` · id 70 · 1:40:45 · module 29 — Tools for Analyzing NASA Air Quality Model Output

[00:04] okay so it's about time and we have critical mass so let me begin today's uh presentation this is a three week uh or
[00:18] three session uh webinar Advanced webinar on introduction to python tools for visualization and Analysis of uh NASA model air quality model
[00:30] outputs and this is part two uh where we are going to introduce some of the Python tools so here is our training agenda in
[00:45] week one we have reviewed NASA air quality forecast and reanalysis in addition to that we have also done Exercise to download and
[00:56] analyze data using NASA ge1 Tool uh as well as some other justes tools including jupyter notebook and in today
[01:08] part two we will uh look a little bit more on the python tools and play with some more data in week three we will use
[01:16] some of the tools and knowledge which we learned in part one and part two and perform uh air quality assessment uh for
[01:25] two different case studies here is our team uh myself myself uh paan Gupta I'm senior scientist here the picture is on
[01:34] the the rightmost uh here at usra at Nasa Marshal space flight center in Huntsville Huntsville Alabama my colleague Dr Sarah stro she
[01:44] will be doing week three presentation and exercise she is a scientist at Nasa Gard space flight center Dr Melanie fet
[01:53] cook she has already given presentation during part one she's also uh scientist air quality scientist at Nasa specii
[02:01] Center in Washington DC so here are some of the our uh outline or what we call learning
[02:10] objective for today's session uh in today we expect after the end of this presentation that uh we will be able to
[02:19] teach you how to download read subset and do mapping of various output coming from NASA's g mark model using some of
[02:31] the Python script we will also look how we can extract data on a given ground location uh using some python script we
[02:42] will also look how to save some of the model outputs in more userfriendly format uh CSV file and then we will learn to do a
[02:54] special and temporal collocation methods an example of comparing uh model output with the satellite data and then
[03:02] performing some validation analysis uh with the surface observation so these are the number of topics which we will
[03:08] be covering in today's session so before we start today's uh presentation in Python I would like to make sure that
[03:18] everybody is able to uh walk along with me or perform the exercise along with me in order to do that uh we will need a
[03:27] Google account which we will mention as a pre back so if you do not have a Google account this is a good time to
[03:33] create one uh Earth data login uh has uh if you want to download any of the data
[03:40] you will need the Earth data login uh if you don't uh we specifically will not download any data in today's session um
[03:48] so principally it's not required but uh it is good to have it and then the download data and codes for today's
[03:56] session so you will see a link in the uh chat if you have not already done this
[04:03] please do it now uh the next step in that will be to uploading to the Google Drive so what I'm going to do next is uh
[04:12] let's go let let's check quickly how many people actually have done this task I'm going to just put out a poll
[04:20] question um and if you can answer that that will help me to understand where we are so you should see a poll
[04:30] uh on your screen you can choose uh one or more options um and this will be open
[04:37] for about 30 second so today's session uh we will have more interactive you will see poll question quiz question in between the
[04:47] presentation and we will move back and forth between the presentations and the Jupiter notebook python script another
[04:55] reminder while you responding to this poll if you have questions uh please use the questions uh Buton or options in go to binar control
[05:07] panel to put your question we will address all your question at the end of uh presentation or uh exercise okay so
[05:18] we got few more second and then I'm going to close about we have about 45% people people voted so if you really wants
[05:28] to go go along with me and do your run the python script I would strongly recommend you do all those three tasks
[05:36] uh let me see the result okay so all those who responded responded uh still about 50% of people have not
[05:48] downloaded the data so let's go through that that exercise um how to download the data and get to your Google drive to uh make it
[05:57] ready for the presentation so to do that uh the next few slides basically shows how to do that uh for your future reference but
[06:08] what I'm going to do is uh we will walk you through that exercise so I will minimize my presentation and again I
[06:16] strongly recommend that you uh close all your uh other windows or things which you are not using so that your computer
[06:25] is on full power and your internet uh works perfectly fine throughout the exercise so again uh in the chat you
[06:33] will find a link to the training web page if it is not there you can Google search this is the same link where you
[06:40] have gone for the registration or for the to get the material in that link if you go to that link you will see part
[06:49] two introduction to python tools for visualization analysis here if you click on the part two data that will take you
[06:58] to the Google Drive which is should be available to everyone publicly if I click on the part
[07:06] two then there is a folder called part two codes and data and I can click here go on top right here there is a small
[07:17] arrow and if I click there and there is a download second last butro if I click that it will zip all the files within
[07:28] the code if this can takes little bit time depending on your internet speed uh but there's not too much data uh so let
[07:37] it take for a minute or so uh while I'll show you how to uh upload this data uh to our drive so uh it's
[07:48] almost done for me um if it is not fast enough let it happens and then you can
[07:54] follow along uh later on so let me since I already have have downloaded the data it's already on my try let me show you
[08:04] how to put it here onine to to uh to add this data to your Google drive what we
[08:12] will do is we will need Google code lab notebook and as we saw this features in presentation one uh if you do not have
[08:23] you can uh click this plus sign on right side get add on and that will take you
[08:29] to this here you can search collab and then it will come up here if it says installed it means it is already
[08:38] installed and ready for you to use if it is not you can click here and it will
[08:43] take uh very few uh seconds to install on a once you do that what you will do
[08:50] is you click on my drive this will show you all the folders which are there if you edit that Google
[08:58] code nightbook uh already then you will see a folder called collab notebooks you click on that folder and let me change my account for
[09:13] some reason it has changed so make sure I'm in the right account so Google coab notebook and then once you that then you
[09:22] see there are multiple folders these are my pre-existing folders if you are doing this first time you will not see any
[09:28] pile up you can unzip the file which you have downloaded or folder which you have downloaded from the Google Drive and
[09:39] then there will be you see a drive and then you will see there are five files in that folder you can select all of
[09:46] them and then you can drag here and bring them all on your Google Drive so depending on your internet speed the
[09:55] data files are little bit larger in size the total size of the file is about 500 MB uh they can
[10:03] take a couple of minutes uh depending on the internet so once they are downloaded we are almost ready to go through the
[10:12] exercise so what I'm going to do next is while I'm going through the rest of the presentation I will strongly uh
[10:20] recommend everyone to actually uh go through this exercise and make sure your uh Google Drive is ready for the uh to
[10:31] do the exercise so let me quickly show one more step uh before we go to the uh
[10:39] presentation presentation back since I have already done this exercise previously so I have a folder called aqf fb22 session 2 and it has all
[10:52] the code and uh uh there are three Net CDF files and there is this uh CSV file
[11:00] and there is a python file again if you have already added the colag notebook then your python file will be easily uh
[11:09] detected uh by the Google Drive and it will show this uh infinity symbol okay so if it is taking more time for you um
[11:19] you can uh you can let it happens but I want to go ahead and show the python
[11:26] code uh steps before we go back to the presentation to to show that what I will do is I will double click my code name
[11:38] read and map GEOS final ipynb this is a python script file or what we call jupyter notebook file if I double click
[11:50] this then it will automatically open the file in called cab. research. gooogle okay and you will see this on your computer
[12:04] screen there is some description here uh I would like to thank Dr Alma s who actually helped in developing this code
[12:15] for this training uh Dr Alma is also scientist here at us uh at Nasa Marshall specifed specifed Center I would like to again notify
[12:26] everyone that these codes which we are showing today are sample code it means uh we are providing them you to build
[12:36] basic functionality to access GS data sets GS model output in different format uh it is if you're using them for
[12:45] research or application it is highly recommend that you check the accuracies of each of these code and modify them
[12:53] according to your own need since uh the code in involves downloading the data uh downloading some of the Python package
[13:04] uh in order to run this uh it can take some time so what I'm going to do is
[13:09] first thing I will do is I'll go to runtime and make sure that everything is reset so that we can see how each
[13:19] function is running so I'll go and say factory reset run time once I do that all my code all my
[13:28] setting is reseted to the factory setting means no code has been run there's nothing in the memory of collab
[13:35] or jupyter notebook this will allow me to run everything fresh now the next step what it does is
[13:44] the Step One is we want to read the data from the Google Drive which where we downloaded these are the data where we
[13:52] downloaded and these are the Google uh drive so we want to mount that drive and to do Mount there's a first
[13:59] function here just to line and you if you click on this Arrow it will start mounting the drive now when it does the
[14:09] mounting you will see it will ask for permission to access the Google Drive and you will see this a note here which
[14:18] says permit this notebook to access your Google Drive if I say connect to Google Drive it will open up and ask me to
[14:26] select the account for which I want to connect if you're already logged in your Chrome uh browser then it will do things
[14:35] automatically for you you just have to select uh and then it says allow once I do it will Mount the drive
[14:46] so that I can access the data files from the drive in this code and read them so once I done that it says
[14:56] mounted at contain Drive the step two is installing the useful python package which will be required to read and map
[15:08] and do other stuff throughout the python script and since this can take some time that is why I'm showing this step and
[15:17] again you click on the step two it will start downloading again it can take few seconds few minutes depending on your
[15:25] internet speed so once this is done once once you click on the step two I also want you to click on the step three well
[15:34] let's click on the step two now and let it download let it run it do not close
[15:40] this window and we will go back to the presentation and then we'll come back hopefully this should be downloaded and
[15:47] will be ready for us to do it so let me give you just uh one minute before I
[15:53] start on the presentation uh so that you have time to go through this St step again these are the same
[16:03] instruction which I just showed you uh through the walking uh if you need reference or you need to do this in
[16:11] features uh all the screenshots are here step by steps how to do those steps after all the things which we have
[16:21] gone through your drive should look like this and let me just see how many people were able to get to at this point in
[16:30] this time uh so I'm going to just put another quick poll question and if you can response that quickly I will know uh
[16:40] if you are ready uh for the next step so please respond to the poll question uh we will keep it open for another 30
[16:49] second again this is time for you to perform those steps if for whatever reason Internet is slow or whatever
[16:56] reason you're not able to do those this is the time to catch up okay great so more and more people um we have 23%
[17:06] voting as of now um it's just a yes no question um I know a lot of people are still working
[17:15] on it so that is good uh hopefully by the time I present the next set of slides uh your drive in the Google
[17:23] collab notebook will be ready for doing some data analysis okay uh so let's move on we have about
[17:38] 50% people already done that's great so let's move on to the uh next slide okay so what we are going to do
[17:49] next is uh learn about the some details about when we compare the satellite data with the model uh model output s and
[17:59] then we'll do the same thing for the ground measurement okay so I I understand that this training does not include any
[18:10] introductions or covering any of the topic related to the satellite data uh because we consider this is an advanced
[18:17] training so if you like to go through uh any of the satellite data or learn about satellite data I
[18:24] would strongly recommend these two trainings one on the nitrogen dioxide side and one on the NO2 the training
[18:31] page and their YouTube videos are here for your reference similarly we have a extensive training session on using
[18:41] Python scripts to read and analyze vs data again all the codes and the training materials are available for you
[18:49] to to refer okay so quick reminder uh we have been uh looking this special resolution in present presentation one and the
[19:00] PRACK about their quality forecasting Basics training uh I just want to remind everyone that the three data sets which
[19:08] comes out from the GEOS model called GEOS FP uh which provides forecasting GEOS safe which provide chemical
[19:16] forecasting and then Marat 2 which is a reanalysis uh they have uh diff little bit different special resolution each of
[19:24] them have their own special resolution both fpn CF are typically around 25 km special grid uh with little bit
[19:34] different uh along the longitude line and then the Marat 2 is about half of that resolution which is half degree by
[19:42] 62550 kilm so just keep in mind when you're using the output the resolutions are uh take uh
[19:51] known okay so let's move on the first step is uh how we can qualitatively compare uh the model output uh from the satellite
[20:04] imageries uh when we say satellite imagery satellite data comes into various format the the the the level one
[20:12] data what we call is trol imageries or rgbs are shown here on the left and you can access that using a NASA tool called
[20:21] worldview earth. nasa.gov the link is provided if you have taken any of our previous training you must have heard
[20:28] about it again it's a very excellent tool to access realtime imageries and what you see here is an example from June 25
[20:36] 2020 uh this is image taken by a VI sensors uh and what you see here over Africa is it dust outflow from Saharan
[20:46] deserts over Atlantic Ocean and this haziness which isue over Atlantic Ocean and over uh close to the coast of uh us
[20:54] and Central America is a dust which is transporting and and when you look the same um date uh from Mara 2 this is
[21:04] aerosol Optical thickness which is a column quantity again uh if you go through any of those satellite training
[21:10] you will learn more about that quantity but this is represent total amount of Aerosoles in the entire column of the
[21:16] atmosphere and you can see that Mara 2 the reanalysis product uh nicely capturing this dust plume uh outflow
[21:27] from s desert or Atlantic and it's a transport now if you can see in the true color image there are a lot of clouds um
[21:35] but the model does not have that limitation so when you compare the satellite data during the Cloudy
[21:41] condition you will see the satellite data has limitation of retrieving quantities uh under Cloud free condition only whereas the model provides those
[21:50] values um all the time so this kind of comparisons uh shows a broad um uh capabilities of model to capture the
[22:01] large scale phenomenas such as this one so a qualitative way to compare the data now this is a special pattern comparison
[22:12] uh similar thing uh but we are using here Giovani Giani has been introduced in the last session uh we did not go
[22:21] through the comparison part in the Giovani but I would like to just highlight that Giovani in Giani you can
[22:28] compare me to uh product U with any of the satellite or product so this is the same product called aerosol Optical
[22:37] depth on the left is mod is aqua uh for July 2020 uh so for the entire month and
[22:46] remember uh mod is is a satellite sensor so it only provides this data during Cloud frequ conditions all the data for
[22:53] the entire months are averaged to create this map on the left similarly Mara 2 which is available almost every hour uh
[23:02] for the entire period is averaged for the same period and create a nice uh smooth features uh which shows the high
[23:10] value of aerosol Optical depth indicating High loading of dust in the atmosphere in big pictures both satellite and Mara are able to capture
[23:19] the larger scale features so again uh qualitatively and uh in fact if you're using level three data which is a one
[23:29] degree graded data uh in GE warning you can do some more quantitative analysis as well uh in using
[23:36] GE but before we do the quantitative analysis uh let's little bit know your data and when I say know your data means
[23:46] the model is different satellite is different there are fundamental differences the way uh they have the data so the number one is uh satellites
[23:56] are instantaneous means typically they overpass certain location make measurements and then move on right so they don't stay in one place uh so
[24:06] typically when you are using if Leo that is uh low earth observing satellite uh for example Modis or viers or Omi they
[24:15] will provide one measurement per day on a given location if you're using a gational satellite then they can provide
[24:21] more frequent measurement every 5 minute every 10 minutes or every few minutes depending on what uh uh what sensor you
[24:29] are using and what parameter you're looking for on the other hand models can be instantaneous or averaged over time
[24:37] so just make sure you understand the timing or the averaging window as I mentioned earlier satellite data are only available for cloud-free
[24:46] condition for most pollutant uh model does not depend on that uh I uh model provides outputs irrespective of the
[24:54] cloud cover satellite data can be averaged um on a hourly daily monthly or annual scales uh and then forecasts are
[25:04] typically provided hourly or three hourly depending on the uh model output but the reanalysis can be averaged over
[25:12] different time window satellite data typically have if you're using level two data the high resolution data then they typically have
[25:20] a varying SP exercise means there special resolution changes from the N positions to the age of the swad we will
[25:27] see that in a minute if you're using level three data then they are grided means they are averaged
[25:33] over certain time and over certain uh speciaal area whereas the GS outputs are on fixed angular grids um which are
[25:41] provided as outputs so these are some of the things uh to note down now in terms of uh more quantitive
[25:51] analysis we must uh make sure that the temporal uh the two data sets are Meed in time so that what we call a tempal
[26:00] matching so they can be matched on a different time scales like hourly every 3 hours daily or monthly one of the most
[26:09] important thing which we should be careful about is is no your data time zone I understand most of the satellite
[26:18] data are reported in UTC and some of the global most of the global uh model outputs are also reported in UTC but
[26:27] sometime if you're using a Regional model or you're using some specific satellite uh they may be reporting in
[26:33] local times so know the time zone uh if you if you know the time Z you can make
[26:39] the conversion before the comparison python has nice functionality which we will see uh in the part three okay little bit more about the
[26:49] quantitative comparison so another thing is the special uh matching means we want to in addition to matching with the time
[26:58] we also want to match where on the earth you're comparing the two data sets now this can be tricky and uh as I mentioned
[27:07] the size of the satellite pixels changes so this is a typical SWA of a orbit of a
[27:13] satellite data and if you look in the middle uh it will be a smaller pixel size as you go the pixel size will
[27:19] increase uh for Polar orbiting or just St satellite on the right it shows this each box represent one pixels so size as
[27:28] you see as you go away from the Ned position at the age of the SWAT the pixel sizes changes models are typically
[27:36] fixed grid uh again sometime they can be nested model means certain area which is focused will have higher resolution
[27:44] another area will have a lower resolution so you need to know about the spatial resolution very very
[27:52] critical some examples of special resolutions are given like for example mod isal Optical death is available at 1
[27:59] kilomet 3 kilm 10 kilm or 1 degree resolution So based on your application based on science question you can choose
[28:07] uh which data sets you want to compare against okay uh so I think uh it is important that to resample both data
[28:16] sets uh on a given special grid before we compare quantitatively the true data sets uh just a little bit more on that
[28:26] special uh comparison um you could actually extract the data from the model and from the satellite uh for different
[28:38] specific uh region right you can average over a country or a state or any other bounding box or a polygon whichever you
[28:47] want to Define right and you can average the two data sets on that and then compare that's perfectly
[28:53] fine but you can also resample the data uh if you want to do a more special comparison so for example in the picture
[29:02] what you see is an example of swath data which we just saw earlier level two Satellite sth data in the middle these
[29:11] are the fine resolution data means the this in all this four box you can assume that the area covered by this entire
[29:20] rectangular box is the same so in this final resolution you will have more number of values within that same box so
[29:28] this is a 4x4 16 pixels or 16 grid uh uh sorry 12 grids in this course resolution
[29:37] the same area is covered by only six grid means we will only have six values so if I want to compare this F
[29:43] resolution data which comes from the satellite to the course resolution data which comes from the model let's say
[29:49] then I cannot compare directly them I will have to resample the data before I compare them one option is I average
[29:56] both data on entire High big rectangular box and then compare that's visible second option is I can resample this
[30:06] fine resolution data to same as the course resolution data so instead of 12 pixels or 12 grid cells I can have six
[30:13] grid cells just resample or average based on the resolution of the course data the other option is I resample both
[30:23] find resolution and course resolution to another resolution which is much courser than both of the resolution to start
[30:31] with so this final is a resampled at new course resolution U where we have only four value instead of six or 12 in the
[30:41] original data so the choice of this cocation really depends on your application and the science questions uh
[30:48] what you want to do uh one thing uh uh there are different methods to do this uh
[30:54] uh resampling uh there can be linear interpolation there's can be nearest neighbor there can be box averaging and
[31:01] we will see a code uh using a box averaging method in our uh python demo okay so tools for the comparisons
[31:12] uh again I want to highlight that Giani does have this specific set of analysis called comparison where you can actually
[31:20] produce scit plots you can do the maps of correlations and difference between the two data sets this is an examp
[31:27] examples showing the mar to aerosol Optical depth with modus Aqua aerosol Optical dep so correlation on the top
[31:35] and the difference between the Bott again Giovani has very uh nice interface and you can do this but it is only
[31:43] limited to level three graded data sets from the satellite it does not provide the SWA data okay another tool which we already
[31:51] looked called resampler or re subset uh this is uh available for Mara 2 and n data which you have already seen in part
[32:00] one so I will not get going through that but that's another to tool to resample the the data okay so let's move on to the uh
[32:11] python demo now uh since we have gone through some Basics about and what we will do in the python demo is uh quickly
[32:19] uh we will use that Google notebook or the Jupiter notebook which we uploaded to read the gsfp download the data have
[32:28] the data export into CSV file and then extract on a ground location so let me switch to
[32:38] the my Chrome Notebook here this is the part where which we were working I'll just pause here for 30 second so that
[32:47] people can get to this notebook and make sure your step two is run if you have not started this may be a good time just
[32:56] click on this arrow and it will start downloading and install everything uh as you can see in my case it has been
[33:03] already downloaded all the things which I needed successfully installed all the things and I'm ready to go to the next
[33:11] step but I will pause here for 30 seconds so people can catch up and then we'll move
[33:17] on okay so I assume everybody is on the same page here um I will try to go
[33:24] through slow so we already completed mount in those who joined late uh please run the mounting the Google Drive steps
[33:35] and then installing all the python package before we go to step three now in a step three what all we are doing is
[33:45] just importing all the packages which we installed or there are some packages which already available in the Google
[33:51] cab notebook so that we can call them when we need to use them again the same method I'm going to use click that
[33:59] little black white arrow and it will basically import all the codes so the importing function does not take a lot
[34:07] of time one thing you will notice that all these functions or parts of jupyter notebook or python script once they run
[34:15] you will see a a uh sign which says this is done and uh it shows the time so it
[34:23] took 2 minutes 1 second and so on so that um tick sign Mark uh demonstrate that your uh that part of the code is
[34:33] run and ready to use so you will notice that before we get to the actual data reading and mapping we will run several
[34:43] functions uh this is called additional resource this function is to download the meatu data we are not going to do
[34:50] that right now because we already have a sample file on which we are going to work which is already uh up loed on the
[34:58] Google Drive uh but in future if you need uh this is developed by uh NASA Gau group who produced the meatu data all
[35:06] the documentation and the links are provided here just in case I'm going to run this function it doesn't take a lot
[35:13] of time again when I I'm running this as a function it means I'm just running it I'm not calling it so once this is run
[35:21] then I can use it later on okay so that's another additional resource using the same function to download the marra
[35:30] 2 Data again since we already have we're not using it but it's still I'll just run it uh just in case we run into some
[35:39] problem here okay everybody's here ar2 same thing for GS FP which is a forecast aerosource data um it the way this
[35:52] function is written it uh download 3 days worth forecast uh from you can change this to five days um and as long
[36:03] as you provide the date in directory where you download want to download it will work so again I'm not calling the
[36:11] function yet I'm just running it means making it ready to be called when if I need it similar thing for Goos CF this
[36:21] is a chemical forecast uh which will provide in addition to aerosols other components such as ozone nitrogen
[36:29] dioxide s dioxides and other things so the file formatting and the file name condition condition is a
[36:36] little bit different we have gone through that in presentation one and in the introduction of the quality
[36:41] forecasting pre training so I'm not going getting into details of those but I will just run this function again just
[36:49] in case I need it now I'm on the step four uh this is the function to read GS
[36:57] FP file again GS FP is uh means forward processing it's for cost mostly we are relying uh aoso forecast in this
[37:06] particular uh for air quality um the GS FP is U assimilate uh several satellite data including modus aerosol Optical dep
[37:17] to provide this forecast so what this function is doing is as you can see the name is read file file name will ask
[37:25] file name and the domain domains mean it's asking for the bounding box of the latitude longitude where you want to run
[37:34] or the read the data or map the data we will provide that in little bit again this is a function so we are not calling
[37:41] it yet we just running it so that it is ready when we need to call it just
[37:48] quickly want to go through this function is uh here you will see a list of parameter which we are reading from the
[37:55] file and this list of the uh parameters are some of the aerosol component which we already looked through in part one and
[38:07] in addition to that as we noted in part one that Mara 2 or gsfp does not provide
[38:14] pm2.5 Mass concentration at surface uh directly as output uh you have to calculate using the equation so
[38:23] this is the same equation which Melanie has shown in her part one presentation we are using the same equation to
[38:29] calculate once this is done everything is return and then we can move on again same functionality but for GS CF this is
[38:41] uh chemical forecast uh about quarter degree resolution and again in addition to pm2.5 we have additional air quality
[38:51] relevant parameter like Co NO2 ozone so SO2 all of them are reading and then we can map and extract the information
[39:00] which we need you will notice that each of these uh functions also read the latitude and longitude and that is
[39:09] required in order to map this parameter or extract this parameter on a given ground ground location so we gone through the step
[39:19] five now the step six is the same thing but for the maratu data again you will notice that Mar 2 and GS FP parameter
[39:30] names are very similar and we can see them because they comes from the similar model and uh system modeling
[39:40] system Okay so we've gone through the step step six next is a step seven this is a more
[39:48] cosmetic step where we are trying to define the variable name for GS FP and Mara 2 as I mentioned they are almost
[39:55] same so we just defined everything here together and this is just to title and name uh the maps uh which we are going
[40:04] to do so this includes their name and their units and things like that again all are editable you can change them
[40:11] anything you want uh or any parameter you like to extract step eight is same thing but for GS CF parameters again G
[40:22] CF has carbon monoxide nitrogen dioxide and ozone sufer dioxide in addition to pm2.5 okay so we gone through the step
[40:34] eight and now the step nine is a little bit different function what this function is doing is go ahead and click
[40:43] run it but what this does is it extract data on a given location if you provide the latitude longitude and data
[40:53] array of the input data then what it will do is it will ask you question about the ground location once you put
[41:00] the ENT the ground location it will give you some statistics extract the data using two different methods one is the
[41:07] nearest never and the Box averaging method I will show you how that output looks from this function uh this is a function design
[41:18] like I said it calculate for the nearest never using considering Earth spherical nature so it does calculate some earth
[41:26] radius and the nearest distance in kilometer and based on that it picks the grid corresponding to your uh ground
[41:36] station okay now we are getting close to running or doing actual data analysis so far we were running all the uh all the
[41:47] function which we may need to process the data so let me give 30 second pause here quickly so that people are up to
[41:57] step nine if you click up to step nine then we are good to go but I'll just
[42:01] pause for 30 second so that people can catch catch up okay so the step 10 is where we
[42:13] start working towards data analysis and the first thing like we discussed earlier we need two things one is we
[42:19] need to know where we are trying to analyze the data in geographical location and for which date so this step
[42:26] 10 is asking for the date of the data analysis although the way this function for this training purpose designed this
[42:35] is uh kind of a repetitive process here in this but anyway we are going to go ahead and enter the date so that in case
[42:43] data is not available the function which we used for downloading they can run and download the data so since I already have the data so
[42:53] I'm going to put uh 20 22 and if you running along with me make sure you use the same date so that it
[43:02] can read the data which you already have on the drive if you put a different date than what I'm using then the code will
[43:09] go and try to download and it can slow your process and you might not get to the next step so make sure for the
[43:16] purpose of this training uh make sure you use the same date so I'll use the date in this format four digit year that
[43:23] is is 2022 January 1 that is 01 and then sorry January is 01 and the day is 31st so I'm
[43:34] using 22 0131 and if I go back I can check this is the date of my data from
[43:42] GS FP January 131st January 131st so that is what I am using here once I do that I click enter and the date is
[43:53] stored in the function which is or the variable called user date the next is special domain where you want to map or
[44:05] extract or do things in your domain so since I know um based on my earlier look I know there was a dust activity during
[44:15] this time I am actually going to pick a latitude longitude range uh which corresponds again for the purpose of
[44:25] training again I strongly recommend so that you can walk with me using the same latitude longitude range but if you want
[44:33] uh to pick a really different latitude longitude range you can pick that the data files are Global so it should work
[44:41] irrespective of that so the order in which we have to pick is minimum longitude let's say I want to
[44:49] do uh - 60° - 60- us maybe let's say- 100° so that I can see the United State Coast uh maximum
[45:03] longitude about 30° East uh maximum latitude 60° North and then minus 20° South is my minimum longitude again I
[45:18] click and then that domain information is saved here you can also reset this while we call the function later on
[45:28] step 12 is a quick step to uh design the name of output file so that it can have
[45:36] this uh bounding box information in the output file which we will save uh during the next step so just click on the step
[45:45] 12 and then it will takes the convert that string bounding box into the string the step uh 14 or the a
[45:55] additional resource 4 four is an additional steps uh we don't need that to run it here uh this is if you are
[46:03] doing automatically selecting the file with GS FCF or Marat 2 it will do that automatically for you but since we are
[46:10] not uh we are going to anyway anyway uh run different functions so it doesn't matter whether you input that or not but
[46:20] just for sake of running I'm just running and just selecting just FP this is most important step uh if you
[46:29] want to make sure that your code is working in today this is the most important steps what it says is the
[46:36] drive it shows the drive where my data is located so aqf F22 session two this is the directory where my data are
[46:48] downloaded now how I how do I get this directory location in Google directory to do that uh again please look very carefully
[47:00] because if you do not do this correctly you will not be able to run rest of the
[47:05] code so I will click on this files folders on the left side you see these three lines and there's a find and
[47:13] replace and there are a few other things and then there is a folder logo on the left side which case files I click on
[47:21] that it will open the locations it will the first one is the drive that's where my folder is my
[47:30] drive and I have many many different folders the one which I'm working is called Google collab notebooks in the col notebook this is
[47:41] the folder where my data is located now when you upload the data to your drive make sure you use the same folder so I'm
[47:49] going to click on this and then if I click on this three dots on the right it
[47:56] will open up and it says copy path once I copy that path I can enter use the directory and
[48:08] then make sure you put a back slash at the end so that it it knows that this is
[48:16] the directory so this is my directory make sure you make that change in your code since I
[48:23] already have it I'm just going to delete to to avoid any confusing so make sure this directory path is there so again I
[48:31] will pause for 30 second to people to go through that exercise if you have not looked at again
[48:37] click on this file or the folder browse through the folder which you want where the data is located make
[48:48] sure the code and data are in the same folder if they are not in the same folder then it can create another
[48:53] problem click on those three dots click the copy Cy path and then paste it here make sure to enter a backs slash after
[49:02] you paste the copy path because that is the folder which we are going to read the data from okay I hope everybody has
[49:12] done this I will just once I made make the folder correct file path provided here then I click this arrow and let it
[49:23] run okay now the step 14 is the where we are actually processing the data and that's where we are going to call the
[49:35] function the first function is to GS FP and as we can see user input and the date I have actually redefined here so
[49:47] if you have defined already it will overwrite here uh if you want to use those function which I defined earlier
[49:53] you can command them here then it will take whatever user input you have provideed earlier but since we are going
[50:00] to run for the purpose of this training each data set one by one I have actually selected uh uh redefined this user input
[50:09] just to make sure that it works I also have a NASA World viiew link here uh this is uh if you want to
[50:18] uh do a quick uh check uh on the image for that particular day uh you can go
[50:26] there and you see that dust outflow which we saw earlier again it's going to ask you certain questions and then it
[50:35] will do certain task so let's instead of going to the code itself I want to go through the uh functionality how it runs
[50:43] so once you click on the Arrow it will run and this is a interactive code it means once you click
[50:54] on the Arrow it will not move on to the next step until you answer the questions which are displayed on your screen so
[51:02] the first question it is asking is enter the varable to process like I said there are many variables in Mara 2 which comes
[51:09] the first one is total aerosol Optical depth or Optical thickness uh both are same and then the aerosols component
[51:18] Mass concentration near the surface for nitrogen organic carbon sulfate dust and everything else and then we also have a
[51:27] PM 2.5 we showed earlier that we calculating that equation so just for sake of this um comparison I'm going to
[51:36] do the pm2.5 here so my option is 10 so you need to put the number for which you
[51:43] want to process the variable so I say 10 and then enter and it will go you can
[51:49] browse back and then see that once I put it started is saying processing GS FP processing pm2.5 and then it will give you this
[52:02] nice map with the level pm2.5 Mass concentration for the date which you selected again uh you can see the pm2.5
[52:12] concentration from GS FP is kind of showing the dust outflow which we saw earlier uh from s and deserts over
[52:22] Atlantic Oceans so this is for January 3 first quickly I want to show you the link uh the satellite image here this is
[52:33] link is provided again in the chat and in the in the notebook you will see this dust outlow and there's a smoke B
[52:42] burning happening here so both of them are nicely captured by uh GS FP in the pm2.5 and you can see how it is flowing
[52:51] over at L potion okay so once this is done then the next question it is asking is do you
[52:58] want to save the variables to CSV file so if you are more comfortable in using the data into CSV format you can say yes
[53:07] it will save all those variables into the CSV files it can take some time depending on how big your area is so
[53:15] it's already done now the next question which is asking is we are calling those function which we defined earlier the
[53:23] function which extract the data on a given location so it say location within the domain do you want to extract the
[53:29] data on a given loc if I say yes then it will give me some statistics of all the data within that domain so
[53:40] these are the uh mean standard deviation and medium value for the entire domains for the entire box which we
[53:48] mapped now I want to extract the data on one point location or one city location or one pm2.5 monitors or whatever right
[53:57] but that location has to be within that domain and I can just pick let's pick one location here let say 20° North and
[54:07] maybe 2.5 degree West okay so 20° North and and then the longitude is minus 2.5 because it is west once I give that it
[54:23] prints the nearest pixels is located exactly in the location where we have um by coincident and then we also have the
[54:32] data so these are the values corresponding to the 3X3 pixels centered at that locations which is picked by the the the code uh or the
[54:48] latitude longitude which you have given these are the again mean median and standard division similarly for the 5x5
[54:54] pixels so these are important and as we look through the validation exercise you will see how you can modify this part of
[55:03] the code to actually extract the data on a multiple location so this is right now since it's a training we want to make
[55:11] sure that uh it is more interactive that is why we Cod it this way but you can
[55:15] provide a list of station and that should uh actually uh be able to modify the code to perform that task so once
[55:23] you do this it has gone through all the process for the gos uh FP data now there
[55:31] are two things which it has done so to see what it has done we will go back to
[55:36] our folder and just refresh it then you will see the additional files appeared in the folder one is the
[55:46] file which we mapped so this is a PNG file it means it's the map which we kind
[55:51] of displayed it's automatically saved in your same folder which you can use it second it created a CSV
[56:00] file uh for the data which we have so if I click on that this is a little bit
[56:06] larger side so it may take some time uh let me see quickly if it can preview me
[56:12] I just want to show how that file looks okay here it is so the way we have
[56:19] designed this file is it gives you latitude and longitude for the each grid box in the domain which you defined and
[56:26] then it also gives you all the parameters which are there in the file now one thing you will notice here
[56:33] um for some reason the NH3 is not printing so we will check on that code U there maybe some bug there but I think
[56:41] rest of the parameters are printing here and all the values are here so all the data are saved for you in a CSV file and
[56:50] uh uh output in a nicely format tated format if you're more comfortable using the data this way okay now let's go back to the code
[57:01] we will do the quickly since we are almost one hour in our training and I have few more slides to go over before
[57:07] we get into I want to quickly show some more same thing same functionality can be done using CF so I will quickly run
[57:15] CF again uh CF is a chemical uh forecasting in addition to pm2.5 it gives other components so let's
[57:24] do uh maybe Co or the first one um carbon monoxide and then it will process it will plot for
[57:36] the same domain again if you want to change the domain you can change as I mentioned earlier there is a biomas
[57:41] burning going on in this region and that's what providing a lot of carbon monoxide in this part uh you can do all
[57:49] the same steps you can save the data um if I say yes it will save all the data
[57:55] from gos uh CF uh it will extract the data since we have already gone through this I will skip this step and will say
[58:03] no so that because it's exactly the same step only thing is it is going to produce the parameter which this carbon
[58:11] monoxide in this case Okay so step 17 exactly same functionality but for naratu data you click arrow and then it
[58:22] will go through that screen let's see if we can produce choose another parameter let's say dust PM 2.5 so I'm going to
[58:33] select uh parameter or maybe we can select the aerosol Optical dep actually let's do the aerosol Optical dep which
[58:39] is is one click enter it says processing Mara 2 tow EXT is the total aerosol Optical depth you
[58:51] can can see again how the dust PLO is now remember the mara 2 Data are little bit
[59:00] behind so these are not corresponding to January 1st these are corresponding to 2021 June 30 so this is a different date
[59:10] and uh I just want to let you know that when you use the data make sure you're
[59:15] using the latest version of the data I somebody just notified me yesterday that this data set which I'm using are an old
[59:23] version and Mara has reprocessed after that so make sure you're using the latest version of the data uh when you
[59:30] get to the data download there's always information about uh what is the latest version so all those be again it's part
[59:38] of know your data make sure you're using the best and latest data available for your your analysis again you can save it um as a
[59:49] CSD file and just say no to save the time here um same steps extracting data on a given location I'll say no uh just
[59:59] to because we have already looked that exercise okay the last function before we move back to the slide is called
[1:00:07] regrading as we was looking earlier we did did intercompare uh satellite data with uh with maratu or other other parameters so
[1:00:21] this is uh if you want to do comparison like this you have to regrade the data uh from one resolution to another
[1:00:29] resolution and we have gone through this slide where we show how to do that so this particular function here is exactly
[1:00:36] doing that we are using one of the method there are many different methods to regrid the data like interpolation
[1:00:44] near snavs and this what we are doing is called Box aaging means we take all the pixels or grids which Falls within the
[1:00:52] newly defined box and then grid the data in that particular uh function uh that particular grid box so this is a
[1:01:02] function again I'm just going to run it and we will call it uh in an example so
[1:01:07] in this particular example we are actually using maratu data which we just ran through over earlier and I'm
[1:01:17] defining my grid size to be 1° by 1 degree which is corser resolution than the original Marat resolution which is
[1:01:23] about half degree and you can also Al redefine your domain here but since I'm using the data from previously
[1:01:30] processed uh I'm going to actually just use the same domain so again this is a demonstration function
[1:01:38] uh I'll click here and what it does it goes through all the data in the which we have already processed so it will
[1:01:49] make a map of the data original data this is a um original data original resolution for June 30 total aerosol
[1:01:59] aerosol Extinction or aot or aerosol Optical depth at original resolution it will also map a transform regraded
[1:02:08] resolution this is you can see that uh this is lot more smoother function which higher resolution whereas
[1:02:16] the data here are more pixelated me they are coarser resolution and you can do this this exercise and uh do this comparison
[1:02:25] quickly you can save also the data here uh I don't have the function put it right here but you can use one of the
[1:02:32] function which we showed earlier how to save the data into CSV file okay so I think that's all I wanted to show before
[1:02:42] we get to the validation part I hope you were able to do some of these things uh
[1:02:47] in your uh exercise uh while we were doing so let's move on to the next part uh of our presentation which is a
[1:02:56] validation and Inter comparison so I'll just give pause for another 15 seconds to make sure people are back
[1:03:10] here okay so the next part of presentation is going to be validation and interc comparison and when we say validations
[1:03:17] interc comparison means we are trying to validate the model output using the ground location or ground truth in other
[1:03:25] words so there are some challenges when we start validating model output they are not straightforward and some of the
[1:03:33] challenges are very similar to what we saw when we are comparing with the satellite data but some of them are can
[1:03:39] be new challeng so why we do the validation validation is required independent validation which we call often is
[1:03:49] required to assess the accuracies and uncertainities or in other words to characterize the errors in model output whether it's
[1:03:58] reanalysis or analysis or forecast it doesn't matter and we do this because our Earth atmosphere system is very
[1:04:06] dynamic in nature so it's continuously changing so things are continuously happening and model is trying to simulate those changes so it's a really
[1:04:14] uh very very critical that we time to time validate uh using ground through data uh how the model is
[1:04:22] performing now the frequency of ground measurements can vary uh means in terms of geographically you will see that uh
[1:04:30] certain region of the world has more ground measurement certain region of the world has less ground measurement so
[1:04:36] where you're comparing uh it depends on the availability of the ground data uh the length of the ground measurements
[1:04:43] are also sometime they are only available during a specific period a specific season Once in a week once in a
[1:04:49] day uh it depends on the frequency of the measurements from the go and then often these uh ground
[1:04:57] measurements are basically um very stationary Point measurements they represent a small area near where you are making the measurements such as
[1:05:07] shown here whereas the model outputs are defined or averaged over a large special area uh what we defined as a special
[1:05:14] resolution or GD so make sure that you these these you're trying to compare this point measurement with the larger
[1:05:21] spatial area model output so there has to be some assumption which we have to make in order to make this comparison
[1:05:28] happen kly some of the most popular uh Global networks through which we can get some of the air quality related data uh
[1:05:38] the first one is the aeronite this is a NASA operated uh aerosol Optical depth Sun photometer Network all around the
[1:05:45] world there are about 4 500 stations which makes measurements uh and it is a federally monitored uh Network so it
[1:05:53] provides best available Optical depth data uh in in order to do for air quality the open AQ is a platform it's
[1:06:02] not its own network but what it does it is gathers the data from all the available U sources uh provided by the
[1:06:10] government regulatory grade monitors and some low cost sensors so this is another source to get the air quality data such
[1:06:17] as pm2.5 and other component purple air is a uh low cost sensus air quality monitor this data is also available uh
[1:06:27] but it is a locost sensus means the data quality can be issue when we use this local sensor but this is also a source
[1:06:35] for inter comparison at least if not the validation Sparta is a network specifically designed to support the
[1:06:43] satellite remote sensing of air quality it does make measurements of optical and mass concentration but there are very
[1:06:50] limited numbers of uh ground monitors right now available but again a source for validating your model output okay so let's look a little bit
[1:07:01] more into what it involves to validate or compare the model output with the ground station so first you need data
[1:07:10] file definitely um any model output whether it's GS FP CF or Mara or for that matter satellite you need the input
[1:07:20] data file and then you need to know Ground locations latitude longitude ude of the stations or the city or the place
[1:07:28] where you are making ground measurement in order to do the special matching uh you can do the nearest never
[1:07:36] just like we looked into the python script which can actually find the nearest never of the given latitude
[1:07:43] locations or the ground M location using that code in the python you can use that but you can also use box averaging and
[1:07:51] other methods to get the special matching uh there are some popular averaging like 3x3 pixels around the center of the
[1:08:00] pixels 5x5 or you can pick certain radius so in this picture you can see if this is my ground station I can draw a
[1:08:09] circles I can draw a rectangles or I can pick a grid model grid closest to my station or
[1:08:17] the model grid where my station is located and then uh it does once you extract the data then make sure you also
[1:08:27] include date and time out information from the model and from the ground data so that you can make them temporally
[1:08:34] matching also which will look next step so the temporal collocations and the step two which is critical is
[1:08:42] temporary cor location so in order to do temporarily match the two data sets uh we should have uh ground data file with
[1:08:51] date and time information and then the extracted data which we done in the step one with the date and time information
[1:08:58] now if you have only if you're comparing with the satellite data typically most of the air quality measurements are
[1:09:05] available at 1 hour temporary skills means every 1 hour we have the data if you're comparing with the satellites
[1:09:12] like modes you will have one observation so you pick the nearest hour for that observation so if it is 10:30 satellite
[1:09:18] overpass time then you pick either 11 or 10 or you average the two to get a average value for that uh to compare
[1:09:27] with the satellite data the model outputs are typically hourly or 3 hourly like GS CF is um G
[1:09:37] both GS FP and CF are hourly hourly and three hourly available so depending on how you want to compare your data you
[1:09:43] can average them or you can pick the nearest hour depending on the uh model time stamp and this uh ground data time
[1:09:53] stamp U one thing to remember about when you're doing the temporal matching like I mentioned earlier most of this data comes with UTC
[1:10:04] time stamp but some of the uh air quality data from the ground if you're getting from the local station they
[1:10:10] comes maybe in local time and when they comes in the local time it is very critical to convert that local time into
[1:10:16] UTC time or you convert the model output from UTC to local time to match the two and we will see that exercise um or an
[1:10:24] example at list in part three when we get to that point okay so quickly uh I just want to
[1:10:33] uh go through some of the statistical uh parameters which typically we calculate again if you have taken the PRACK you will have seen this
[1:10:42] couple of slides we can calculate the accuracy here using this formula where f is your forecast value and O is your
[1:10:50] observation as you can see we have taken the absolute value of the two so this gives you an ABS in absolute scene sense
[1:10:57] mean closeness between the forecast and obser the N is your number of data point similarly bias is very similar but this
[1:11:05] gives you not absolute this is giving you actual Valu so if it is negative means the bias is negative it means the
[1:11:13] model is underestimating if bias is positive it means the model is overestimating some example of correlation correlation is one of the
[1:11:24] thing which we first learn look when we compare the two data sets um on the right you see four example in the first
[1:11:31] one the two data sets are correlating really on one to one line is correlation almost one on the second they are
[1:11:39] negatively correlated means if if one parameter X is increasing then Y is kind of decreasing so they are considered
[1:11:46] negatively negatively correlated the third plot is more realistic way uh where you have some sced along the one to one line but there
[1:11:55] is a offset also as you can see where the regression lines the fourth one is really bad where there's almost no
[1:12:04] correlation the data is scattered all around the one to one line and that can be considered as really bad
[1:12:11] correlation you can also do some uh categorical uh checking for example air quality is often defined by calculating
[1:12:19] air quality index and that can be converted into good moderate unhealthy very unhealthy categories so you can
[1:12:25] also calculate uh this kind of Matrix which we call confusion Matrix where you have forecasted how many days uh
[1:12:33] forecast data are showing good and on those days what was observation showing so this is what it is divided when you
[1:12:41] do this kind of analysis again look for the uh task uh the recording of uh introductory of air quality forecasting
[1:12:50] training which was PR we have gone into exercise doing this exercise details if you don't understand how to calculate
[1:12:57] the confusion Matrix and that will give you a good idea how we should do it okay uh one more quick example of analysis
[1:13:07] which we call typically density scr plots so this is a version of scatter plot and this we do typically when we
[1:13:15] have a data data points are large in number if you have a several thousands of data points and if you plot them
[1:13:21] together they'll plot on each other and it will be very hard to see the real distribution of the data So to avoid
[1:13:30] that or to mitigate that problem of uh more data points what we do is we call density SK PL it's also called a 2d
[1:13:39] histogram where you basically calculate the number of data points in each region of the SC plit or each bin so let's say
[1:13:49] if I take a bin of X and Y of 2020 and then calculate between 20 20 and 25 how
[1:13:55] many data points are there and I just color code according to this color scale and then once you do this what it does
[1:14:03] is it provide you a density of the points corresponding to certain value in the SK blot so I can see in this example
[1:14:12] here the red color shows the high density appointments most of the points are located around this one to1 line and
[1:14:19] lower range pm2.5 there are Blues which are scattered more and they are very Less in numbers so this gives you really more
[1:14:28] confidence about uh uh how your comparison is looking if I don't have this s density scatter plot but had a
[1:14:37] simple scatter plot then I won't be able to see uh this I will I would assume that the my everything will look one
[1:14:45] color and I will have no way to find whether data density is high here and low here so this gives you an ex idea
[1:14:52] there are python uh notebooks out there uh we will see one example just in a minute but uh there's a lot of them out
[1:14:59] there and the link is provided here if you want to explore yourself so let's go back to the python notebook and I will
[1:15:07] quickly give you a demo of making that scrit scrit plot I hope everybody is having that notebook not closed
[1:15:16] it okay so we are on step 19 and the step 19 what it does is it's a very
[1:15:24] simple step it's a function to basically calculate some statistics which we looked earlier right so it calculates
[1:15:31] the number of data points slope of the line regression line one to one line r² is your correlation coefficients uh bias
[1:15:41] uh root minus square error and the P value which kind of shows uh how realistic significant your correlation
[1:15:49] between the input uh between the observed and model output so here is a function to make that skitter plot it's a simple function
[1:16:00] there's a lot of option there you can change that I will not go through them and in the last actually once that
[1:16:07] function is run it also save the data into um sorry save the output as a PNG file if I run this it is going to read
[1:16:17] that file which is there here this is my ground data collocated file uh date and time information Mar to data and the
[1:16:28] ground data so this file I created in advance using a modified version of the code the get the data which is I showed
[1:16:37] earlier in the presentation this one uh let me just quickly show it here one more time okay should
[1:17:02] be no hold on on yeah this one so this is the function called get Point data where we enter one
[1:17:14] Ground locations and get the data I use the same modified version of this code you just have to instead of doing all
[1:17:21] these things on a screen you can feed a list of uh station here and uh and list
[1:17:29] of date and then Loop through and then it will uh give you all the data corresponding to your ground location
[1:17:35] and that is what we have here and these are the ground data for that particular location that is what I am using here in
[1:17:43] my step 19 uh towards the end of uh notbook so I'm reading this file from the same directory and then
[1:17:55] calling this function to make the SC plot so this is sample data again your xaxis y AIS whenever you are comparing
[1:18:04] the same model output um same variable make sure your X and Y scales are on the same uh range so that it is better to
[1:18:13] see now I can see by looking this most of the density is close to one to one
[1:18:18] line but there is overestimation in the lower range of pm2.5 values by the narrative so this is just an example uh
[1:18:27] strongly recommend you validate your model output in your own location or your study Vision okay so I think that is all I
[1:18:36] have here uh I will go back to the presentation and then I'll show you some quickly some more um let me
[1:18:46] actually go to few polls here and see uh how how many of you were able to do some
[1:18:53] of this python things so uh let me quickly do some KCK polls and make sure we are on the same page uh
[1:19:03] okay so take about 30 seconds and respond to this call which model output can be compared with the satellite data
[1:19:11] in Giani we just looked one example we gone through the Giani last week uh last in the last part on Tuesday uh I just
[1:19:21] want people understand that uh there are certain data which are available in Giovani and there are some which are not
[1:19:27] available in Giovani so we only see 4% voting would strongly recommend everybody to vote so that we can see and
[1:19:37] we can work on it if we need to revise some of the concept 10 more second okay so it's almost 1 minute I'm
[1:19:48] going to close the poll uh we only have 30% people voted um and the results are Mara 2 is correct answer uh currently GS
[1:19:59] FP and CF are not available in uh Giani okay uh next question I want to quickly see if you
[1:20:11] were doing python run with me select all those component you were able to perform during the python exercise were you able
[1:20:19] to upload the data to Google notebook were you able to install the packages were you able to to do any of those
[1:20:26] analysis part where reading mapping or extracting the data or were you able to do any density SC
[1:20:36] lot okay uh few more second we only had 4% people voted so if you have done walk through please
[1:20:46] respond to this question so that we have a sense of uh how how much uh our training were effective or if we need to
[1:20:54] modify something or if you need to revisit okay five more second we have about 40 people 40% people
[1:21:12] voted okay I'm going to close the poll have about okay so look like about 90% people were able to everything and install the
[1:21:26] package about 70% 60% were able to do all those who responded so which is pretty good and then uh 49 50% people
[1:21:35] were doing the uh were able to do the Scutter plot which is good okay the last question before we move on to the next
[1:21:42] part of the presentation is tricky one and it's a little bit Advanced which but I have gone through this in the exercise um can
[1:21:53] you use any of the Python script shown today to extract GS FP forecast parameters for a list of 10
[1:22:00] cities so select the best answer especially those who were able to run uh yes I can use it as
[1:22:08] it yes but it will need minor editing or it will need additional coding no or I'm not really sure so just
[1:22:17] respond whatever you feel um you have another 10 more second so after this poll I have few
[1:22:24] more more slides to go over and then we will be done for the day okay so I'm going to close this
[1:22:34] poll and share the results so the answer is yes uh but it will requir uh some editing so the
[1:22:46] whether it's minor or additional coding it's subjective it depends on how much and what exactly you're trying to do
[1:22:53] that but it will require some editing the get the data point is the function which you need to modify in order to uh
[1:23:02] perform this particular task okay great so let's move on to the remaining presentation we have quickly 5 seven minutes more to go over
[1:23:13] and I will try to finish it again this is a um schematic of uh python jupyter notebook which we did uh we had three
[1:23:24] different things to set up the environment we have additional functions to for downloading any of the data and
[1:23:30] then we have some analytical function which can map output and uh extract or regrid or density SC plot so just to
[1:23:38] give you what we just uh did using the python script okay so we shown you some uh some
[1:23:51] analysis and you will see some more type of an analysis in part three when we do air quality assessment case studies I
[1:23:58] just want to give quickly that those are not the only limited analysis you can do lot more type of analysis depending on
[1:24:05] your end goal so one of them is like looking their Quality Index you can calculate the air quality index and
[1:24:12] compare for example in this particular site uh this is a air quality Explorer for Thailand which we have developed
[1:24:19] through another NASA program where we are comparing the 24-hour air quality index so so this is the date and then
[1:24:26] the Blue Line shows the measurement the green shows the forecast and you can see both of them are showing close to each
[1:24:32] other you can then compare in real time also hourly values this is every three hourly so another way to look your
[1:24:41] forecast sometime you can also do a uh reanalysis comparison so this is from NRA 2 this is over India uh one of the
[1:24:50] group in India published a paper where they compare the mar to and actually uh shows how the actual data looks on a
[1:24:59] daily scales on a monthly seasonal scale and then they come up with a bias correction method and then they were
[1:25:06] able to match the measurement with the maratu with some correction so you could do some correction locally regionally uh
[1:25:14] to make model outputs more accurate uh when you do this uh comparison or that Scutter plot I showed
[1:25:23] earlier when you do on our scale you will see uh there is a lot of variability uh from the observation and
[1:25:32] uh output from the model and this variability can be due to many reason right we saw Point versus Grid
[1:25:40] resolution uh comparison there can be uncertainty in the model itself because of the way model is forecasting because of lack of
[1:25:50] emissions or lack of proper boundary conditions or lack of ological condition and there can be practical challenges
[1:25:58] right the the observe Point location may be looking a clean area whereas the model which is a 50 kilomet box maybe
[1:26:07] looking pollution event so in those case there can be a differences so when you look this data on a smaller time scale
[1:26:13] you will see lot more variability lot more more noisy but as soon as you start them averaging over longer time scale like
[1:26:21] this is a daily you will see the skitter is reduced significantly on a monthly and annual scale they will start showing
[1:26:28] up more and more um closeness between the two so depending on your application you will have to choose the averaging
[1:26:36] window you can also map the statistics you can calculate all those statistic bias root minus sare correlation again
[1:26:44] showing an example from Thailand where you can actually once you do this kind of thing you can actually see how the
[1:26:50] special distribution of model performances so for example in this case uh while looking the bias I can see
[1:26:57] there is a high bias in the Bangkok area whereas there's low bias in the northern Thailand and this also kind of shows you
[1:27:03] the gaps in ground monitors so in this area we don't have any ground monitors which means we really don't know the
[1:27:09] accuracy of the model in that part uh so you can make some assumption and then uh uh do this analysis which to give you
[1:27:18] more insight about the model assessment okay so the last slide uh summary summary just want to remind or the take-home
[1:27:27] message uh we looked three different data sets uh again sorry there is a typo in the first one it should be NASA not
[1:27:35] go gios provides mea 2 which is a reanalysis with a data simulation system GS FP a three hour aerosol forecast with
[1:27:44] satellite data simulation into it and then GS CF which provide hourly forecast of pm2.5 Interest G using a GEOS scan
[1:27:54] model and chemistry uh we have seen multiple satellites provide valuable parameters to evaluate the model output it includes
[1:28:03] NO2 s SO2 some some level of ozone uh for column values and then the aerosol parameters including aerosol Optical
[1:28:13] D we also saw some example of there are several ground networks available for validating mod model output some of them
[1:28:20] are Global in nature some of them are local and I understand many of you might be making measurement at your own
[1:28:26] institutions or through your organizations the python codes again want to repeat we provided as just an example you must check their accuracy
[1:28:36] modify to fit their uh fit your analytical analytical needs uh again the analysis types which we showed are some of the popular
[1:28:46] examples uh you can expand them uh into different directions uh to evaluate the model performance using additional
[1:28:55] analysis and finally I think this is most important that know your data know the model most importantly know your
[1:29:03] application and Science question before you begin any of the analysis so this is really really important uh aspect of an
[1:29:12] analysis so let me before I end I have couple of more quick question um and that will be all uh and then we'll go to
[1:29:22] uh question answer session okay so here is first this is again um we did not cover specifically I did
[1:29:32] mention this aspect the question is if you must compare hourly aerosol forecast from model with satellite data select
[1:29:40] the best option uh so there are two types of satellites polar orbiting satellites and then the geost stational
[1:29:49] satellite um which one will you pick and I depends on your application where you're located and everything but
[1:29:57] uh what will be your preference provided both are available okay uh I'll allow another 30 second you have only 28% people voted so
[1:30:21] far okay last few second okay so here are results the correct answer is G station satellite if it is available because
[1:30:36] geost stationary provides more frequent observations so it will be nice to compare your hourly forecast from the
[1:30:43] model if you don't have G stationary then satellite polar Orting satellite can also be used for that particular
[1:30:49] hour to compare okay and the last question for I answer your questions questions um we should use blank to compare model
[1:31:04] output with ground data for validation and intercomparison purpose select the one which you want to put in a blank
[1:31:13] space tempor cocation special collocation or both okay we only have 3% people voted so far have another 10 more
[1:31:31] second okay so let's see the correct answer is both and I'm glad almost everybody got that correct
[1:31:42] um again this can differ um but uh anywhere you want to compare the two data sets uh matching the time of
[1:31:52] measurements and the or the location is very very critical if we don't do that the comparison will not be correct okay
[1:32:00] that is good uh so I think that's all I have thank you everyone for attending and we will move to the question answer
[1:32:08] in a minute I'd like to thanks all our team um Sarah Melanie um Brock uh Sarah Jonathan and salvin for supporting in
[1:32:21] the back end of this training without their hard work this would have not been possible so thank you uh everyone and
[1:32:28] let's move on to the question answer okay so let's get to the questions okay so the question one I
[1:32:54] will read it loud so that everybody have a chance to listen why s data for instant mod is 3
[1:33:08] km or 10 km are not available Giovani any plan to incorporate in so the Giovani tool was designed
[1:33:18] initially to do uh some analysis which can be easily done online in real time and in order to do that uh you need data
[1:33:27] which are well formatted and easy to access in small in size so they started with the grided data and uh over the
[1:33:36] years Giovani has expanded lot of features uh but the nature of the tool is such that it only works on the grided
[1:33:43] data so they are going to currently stick with the grided data there's no plan currently to include the sth data
[1:33:50] but I would strongly recommend there are others uh ways in which you can get the SWA data uh from other tools some of
[1:33:57] them are offline uh which may be useful to you will there be any major difference in outcome if I apply bilinear
[1:34:10] interpolation instead of cuic convolution interpolation to resample the the data uh I think it will depends on the
[1:34:18] variability in your data so let's say uh you are doing aerosol Optical depth over a clean ocean and you are trying to uh
[1:34:30] use different interpolation method then I would say in those case where the variability within your Grid or region
[1:34:37] is not big uh the difference may not be that big but if you're looking in a region where things are very Dynamic
[1:34:45] changing or for example there's a biomass burning and smoke is transporting and weather condition are very Dynamic and and you're trying to
[1:34:54] use different method then I would say uh the end results will be different depending on the method which you're
[1:35:02] using so I think the method should support the physical processes in the atmosphere which can capture which
[1:35:11] method can capture that those physical process in a best way uh sometime there's not just many options
[1:35:19] so then you you will have to make a assumption that okay I'm going to use the nearest never or linear
[1:35:25] interpolation and I believe that will work question three is there any equation for calculating pm10 and pm1
[1:35:36] similar to pm2.5 okay so I think there are uh there is the equation for pm1 and PM 10 and
[1:35:46] those are listed on that web page which is given there again I want to let everybody know that this transcripts of
[1:35:53] the question answer will be available for everyone to download uh after the uh after we review all the question answers
[1:36:00] from the training web page so you will have that link uh available to you okay question four when entering the
[1:36:10] domain bounds integer were used when specifying the point to be analyzed floats were entered I wonder if one can
[1:36:18] use integer floats integer yes um that was just convenient um you can use either integer or float it should accept
[1:36:27] both both values question five how can we save the image file of air quality so that we can
[1:36:36] further process it using GS software okay so we have not gone through that process here but uh there are two thing
[1:36:45] one is if you are downloading the data uh from one of the sites which we shown there is option to uh
[1:36:54] uh import the data into geotiff uh that is one there is also uh python script which can read the
[1:37:06] called gell I believe the python package which can read the net CDF file and convert into geot uh type of format
[1:37:15] which is uh GS software uh user friendly so question six is regridding same as resampling um so in my view yes um but
[1:37:34] it really depends on how you are defining them the I believe they're not very very strict there's no very strict definition
[1:37:45] of the two terms uh most of the time they are used for the same thing uh but
[1:37:51] um it really depends on how you using them okay the next question question seven optg is not
[1:38:08] recognized as an internal or external command opal program or bch file I think this is because I'm not Linux user is
[1:38:17] there any alternate code to replace opt gate for window users I'm not sure um I don't know if
[1:38:25] anybody in our team who is window users and python expert can comment on that anyone Sarah do you have any thoughts on
[1:38:41] that I know you or you use Mac so we we can find and I think U probably you can
[1:38:48] search little bit on internet and you should be able to find the uh alternate question 8 the regridded
[1:39:00] output is a raster right if so then can we save it as a geot with the help of
[1:39:06] JAL model yes you can it's a grided data so you can save it using geti or as a
[1:39:13] gooti using Jal question nine is it possible to download mult temporal geotif gal data for a given
[1:39:27] location from JIS portal is there any python code for that so I think uh I'm not sure whether
[1:39:36] you can download as a getif or not but uh in next part we will show a quick
[1:39:44] example where you can download um time series of data specifically for Mara uh on a given location okay thank you everyone uh for
[1:40:15] attending uh and be uh we are going to use in part three Sarah will show us some more python tools and how to use
[1:40:22] all these tools tools and data to analyze actual air quality events um on next week so stay tuned and uh we have
[1:40:31] questions our emails are there and uh we'll be happy to help you further thank you everyone
