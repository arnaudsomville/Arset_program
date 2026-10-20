# Read, Map, and Analyze Level 2 MODIS AOD Data, Part 2/3

`https://www.youtube.com/watch?v=eYyWTuWthyY` · id 340 · 2:06:41 · module 33 — Data Analysis Tools for High Resolution Air Quality Satellite Datasets

[00:00] okay hello everyone uh and welcome to the the uh session two of this advanced webinar series on air quality data and
[00:11] tools tools uh uh today we are going to it's a two-hour session session so we will probably
[00:21] take a break uh of five minutes at the end of one hour we have about five different uh
[00:29] python script which we will run to to perform different analysis extract the data data map the data
[00:40] and in session this session we are going to only focus on uh uh analyzing and reading data from modis
[00:50] aerosol data sets which is i'm going to describe in a little bit but i want to [Music]
[00:56] [Music] first first go over some of the logistic for today's so like i said we have five
[01:03] different codes to run through we'll spend about 10 15 minutes for each code so i would expect that everybody will be
[01:12] able to run the code i will share my screen and will go by step by step we'll run the code we
[01:20] will see the output will explain the output we will also talk a little bit about the potential applications
[01:28] and then finally we'll go over some of the section of the code where you can modify things to perform
[01:36] different tasks or to change the parameters or to change other variables which you might want to do
[01:46] so i hope everybody was able to install the python but before let's see so if you can see
[01:57] i'm on slide number three in both this session today's session and session number three we will cover
[02:08] python script to perform similar tasks so in today's session like i said we will go over aerosols datasets in monday
[02:17] session we will go over ome datasets specifically no2 and sr2 using similar python script in order to give you a flavor of two
[02:29] different operating system we will do today's presentations using mac or apple operating system and the monday session will be done in
[02:40] the window machine we will use exactly the same anaconda to do run over all python script the layout structure
[02:51] should remain same in today's presentation you will see the directory structure more from the mac than the window
[03:02] so and we also expect that all the codes should run smoothly smoothly irrespective of the operating system we
[03:11] have test track then and mac and windows and we hope that it works on linux as well why did you have all the right
[03:18] packages okay so this was slide we presented last week week last in the last session wednesday this just gives you the
[03:31] overview of what python packages you need what test run you need to do uh all the the data and uh python script which we will
[03:41] use for today if you have not downloaded those please do that using this link given here that will be very very
[03:50] required to perform the run the script in today's session so this is the how the python test works
[04:00] uh we have again given this in the last presentation i'm just repeating people have not done yet and if they're
[04:07] still trying to do this few more minutes you can start doing that okay so before i go
[04:15] on the data let me ask you a couple of quick questions so i get an understanding on how many people are
[04:23] ready to actually do this so the first question question uh which you can answer using the skip
[04:33] polls polls just want to get a feeling of which operating system you are using okay so looks like uh most people are using
[04:46] window machine uh uh so i i don't see any problem in that you should be able to do exactly the same
[04:54] thing the anaconda structures and the terminals and everything looks very very similar to what they look on the back uh
[05:04] about 12 people are using max and then there are others which i'm not sure what they are
[05:11] but hopefully it should work on everything else i hope you are doing this on a computer not on a uh i on a phone a smartphone or
[05:21] a a tablet tablet it might be difficult to do those on those so if you have a proper computer
[05:27] please switch to that computer so that you can actually work with the script and the data in
[05:33] more efficient way okay uh so the next poll i have is which is more relevant to this one
[05:43] is is have you installed the python including all the packages which we recommended so if you can just quickly
[05:53] respond so that i if you have not done that still we have a few more minutes please
[05:59] go ahead and do that they are really they don't really take a lot of time quickly you can do
[06:06] uh from my own experience when i installed anaconda most package comes with anaconda i had to only install two
[06:14] package one is pi hdf and the next one is the base map other than those two i
[06:24] i all other packages were part of the python installation you might for the session on monday you might also have to
[06:34] install install h5py which is to read the netcdf file or the hdf5 format so these are the three
[06:43] main packages i think you might have installed uh most other packages comes as default with anaconda when you
[06:50] install anaconda okay so that is good news we have 94 people ready with their python package and
[07:03] python installation so most people will be able to do it those who were not able to do it due to
[07:11] any error try if you are facing some problem try to to put that in a question and there might
[07:19] be other people who might be able to help you uh uh as far as from our side we will have
[07:26] very limited actually during the session it will be very difficult for us to help through the installation
[07:33] installation but there may be other people who might be able to help so just just post your question there might be people
[07:40] who can help you okay so the if you already installed all the python and the packages so the next
[07:52] question is were you able to run the test underscore python dot py code which is just to test
[08:00] if you have all the required packages to run the script which will go today and on monday
[08:09] so this is very if you have done already this code should run without any error and it should produce an
[08:19] image image which is modis aerosol optical depth without any error on your screen so in next two three two to three
[09:14] minutes just please go over the all the if you are not able to install any package please do that if you are not
[09:24] able to download the data and codes from the rsi website please do that now and then in about two minutes i will
[09:34] start the will give little bit introduction of the datasets which we are using and then we will go through one by one script
[09:44] okay so two minute break okay you so one point i want to make sure that most people have the data and code downloaded
[10:09] please do that the the link to that is also on the training web page and also on the chat window if you
[10:17] scroll up little bit then it is available there and if you are having trouble in running the
[10:29] test code please please check the error message and see which which specific package is missing the error
[10:39] message should say that this package is not found on your installation if you don't find that package
[10:47] just type anaconda install that package name in search engine uh you can use the google and that will
[10:57] allow that will give you a answer right away it will give you a command from that search you take copy paste that
[11:04] command on your anaconda terminal now it will start with conda install something and that should actually help you install that package make sure
[11:15] you have all the permission on your computer computer if you do not have permission certain permission writing permission on your
[11:22] computer computer then the installation will give come with an error so please do that so so let's start now
[11:42] i hope everybody's got what they need and uh we will start through so now first i will start to
[11:51] the the just little bit about the data sets so now i'm going to start with the data
[12:08] sets sets now now the two data sets which we are going to use today is modis level 2 10 kilometer
[12:18] aerosol product and and as you downloaded the zip file and unzipped that then you will see see four of the files
[12:29] the name start with modo4 or mydo4 depending on whether it's terra or aqua the product that's of the product now
[12:41] the next in the product name l2 it means level two data those those and then the next one start with start
[12:50] with dot a first four digits stand for the year next is it start stand for the julian
[12:59] day the julian day is the day number of the year so january 1st will be zero 0
[13:06] 1 1 january 31st will be 0 0 0 0 3 1 and february 1st will be 0 3 2 and that
[13:16] that's how it goes so depending on the depending on the leap year it will be the last day of that will be 365 or 366.
[13:25] the next is the timestamp two digit hour and two digit minutes minutes the time isn't given in the utc or gmt
[13:36] time it's not local time so please keep that in mind when you start analyzing the data the next three digits
[13:44] are are represent the collections or the version of the data in this specific uh presentation we will use the collection
[13:53] six data it says zero zero six more recently modis team has released a collection 6.1 so you will start seeing 0 6
[14:03] 1 instead of 0 0 6 that's the most recent data which has been released but that data has not been yet
[14:11] processed for the entire mission so we are going to still use the collection six data the last date information is file
[14:18] processing information uh you don't have to worry about that so this is the hdf file typical hdf file name
[14:26] if you go to three kilometer product then what you will notice is everything remains same except the
[14:36] l2 l2 become 3k that just says that it still is level 2 but it's a 3 kilometer resolution
[14:43] everything else remains same and all these hdf files can be read many different different computer codes you can use hdf look
[14:53] which is free panoply which is also free ideal is the licensed you know we have on our side website some codes to read
[15:02] from the ideal uh today we are going to focus on the python but you can also use fortran
[15:07] matlab and any other c or any other pack pages to read this uh they cannot be you specific you need a specific
[15:16] software to read this file they cannot just open in word or text editor okay okay okay so inside each hdf file
[15:27] there are many sds parameter and which we will go through once we start running the code but these
[15:34] are some of the major one which we are going to use today i just want to go
[15:39] over them so the optical depth landing ocean ocean is retrieved using a dark target algorithm and we in the first session we
[15:47] have gone through three different algorithms which runs on the modis so this specific parameter is optical differential notions is you
[15:57] retrieved using the arc target algorithm the data recommended to be used for quantitative analysis by the modus
[16:05] science teams are over land qa theory means quality assurance equal to three so each pixel in the data sets
[16:16] comes with a quality fact value and that quality flag value rate is from 0 1 2 and 3 so for quantitative analysis
[16:25] science team overland recommended you use only value 3 over ocean the qualitation recommendation are one two and three they don't recommend zero zero
[16:38] quality flag is good if you are just making an image for qualitative purpose uh then you can use it otherwise for
[16:45] quantitative purpose it is not recommended recommended both of these optical depth landing ocean data is available in both 10
[16:52] kilometer and three kilometer file the next sds which we will look today is dark target deep blue optical depth 550
[17:00] combined combined as we talked again in the earlier presentation that the two algorithm dark target applies on the vegetated area
[17:10] deeply applies on the bright surfaces like desert and cities big cities this this product is combined of the two products
[17:20] at 550 nanometer and both uh the way that there is algorithm which actually merge this product uh based on specific ndvi
[17:30] thresholds and other criteria but this product is only available at 10 kilometer special resolution this product is not available at three
[17:38] kilometers the reason for that that the deep blue is not available at three kilometers so if you are
[17:44] interested at three kilometer then the only product is available through the dark target algorithm and not from the deep blue algorithm
[17:54] these are the sds name for qualitation and slant quality this is basically showing the quality flag associated with
[18:00] the dark target product and we will see there are some other sds when you start running the script
[18:06] which might be helpful again i think i already gone through this uh the recommended quality flag over ocean is one two
[18:15] three over land only three the factors which goes into this calculating this quality flags uh varies based on the algorithm in case of dark
[18:26] target algorithm they can include the number of pixels to average in the 10 kilometer box uh how the
[18:34] errors were fitted during inversion process when you compare the satellite measured radiance with the radio transfer calculated look up table
[18:46] and over ocean they also take into account how close they were from the clinton clinton remember glenn we talked about the
[18:53] specular reflection over ocean surface in session one our land other other other than those factors surface reflectance become very major
[19:06] part in deciding the quality of the retrieved aod value okay so with that uh let's start with
[19:17] i'm going to now share my screen and we'll go through the process uh first we will see how we can
[19:24] start the python using anaconda and then we will start running code one by one so i hope everybody is ready with the
[19:34] codes and everything is ready so i'm going to go over my window from the mac so this is
[19:51] okay okay okay so right now what you are seeing is my mac computer screen on which this is my terminal and if i do pwd
[20:11] then it shows the correct directory and it's session two and if i do the ls on here it shows all the hdf files and
[20:20] all the python script which we will use today okay okay everybody is that can see this on their
[20:28] home directory where they are okay okay uh uh now now on the mac if i go on the bottom
[20:40] then i see a circle green circle which is basically anaconda navigator on window the icon remains same it might be located in
[20:51] different place or you can search it depending on how it was so just open the anaconda navigator
[20:58] i click on that and then it will start the anaconda application okay okay now when you see
[21:14] it comes up with this screen and there is lot of options here these are some of the ways in which you
[21:22] can interact with the python or you can edit your code now there are different the gui types uh editors
[21:32] consoles in which you can run the python and each of them have a different advantage and disadvantage
[21:40] in two days and even on monday what we are going to use is a python editor called spider which is on
[21:49] the right left side uh uh s p y d e r spider and i will click launch on that
[22:08] okay so i hope everyone is able to see on my screen screen and and if you can see this type of of layout where
[22:22] i have a space on the left where my codes will be there you will see some spider editor
[22:29] and green lines right now i have not opened any code here on the right you should see console of
[22:36] ipython ipython if you click on the bottom of the spider spider console then you will see the two option
[22:46] ipython console and s3 in some cases you might have seen a third window on the top side
[22:54] and you can take that window off if you like to see in this view so if you go on the view there is
[23:02] options how many different windows you want to see the windows layout options and other things so i'm going to just use this to window in
[23:11] this format which on the left side my code will be visible on the right side it's ipython console where the code will
[23:20] run and i will see the output i have specifically increased the font size here so that everybody can see it
[23:29] very carefully it will allow us to see so please if you are facing any problem please uh
[23:37] are not able to see the same thing you can type in your questions in the question answers and somebody from
[23:46] our team or somebody else from the audience might be able to help you so so i'll give you a few seconds to
[23:57] make sure that everybody is on this this page now we are going to move on to the next
[24:05] step if everybody is on here then there are few uh buttons on this spider i would like to
[24:13] point out one is the arrow on on the the left top left side the green arrow this
[24:22] button is to run the code once the code is displayed here you can click that button and it will run on the right
[24:28] there are other ways to run the code also which i'm not going to go and i would encourage everyone to actually
[24:35] explore those you can run directly from the ipython console or there are other ways to do it but we are going to use
[24:42] this arrow button right now uh throughout the session and next session session and please when you click that please
[24:51] watch for result on the right side where the ipython console is uh if you go on the top of ipython
[24:59] console console which is right top then there is a stop button which is a square when your code is running it will turn
[25:08] into i think a magenta or brown color you can click on that and it will stop your code running now if you click on
[25:17] that that option button then you will be also see other options so you can actually reconnect restart kernel so when you
[25:30] restart the kernel it means it will reset all the variable in the python so it's a good idea to restart
[25:38] after each of these codes so that you don't don't get any error okay so the first code i'm going to run
[25:46] is is i will click on the left side please follow with me so that i'm going to do this really slow so
[25:57] move your cursors to the top left and you will see a folder type sign which is second in the list it says open
[26:06] file okay okay now my directory is on the desktop so i will click desktop and then the session two is the
[26:20] directory in which my all codes and programs are there okay okay so the first code we are going to go it
[26:29] says says read read mod mod underscore mod underscore error soul and list as sds.py can everybody find that
[26:44] then you select that and say open and the code start appearing on the left side side screen
[26:56] okay so let me start again if you can see the code on your left side then you will notice on this code that
[27:08] online number 20 which which i have highlighted right now is a file list equal to open bracket
[27:19] file list dot text so this is the file list which the code required and if i go back to my directory where
[27:28] data and codes are located what you see if i do ls if i do ls start.text i don't see
[27:37] any text file here so we need to create a list of files which we want to process
[27:44] so what we want to process is all this so in your command you can do ls ls star hdf
[27:59] greater than sign and then the name of the fact file list dot text when you do this make sure the file list
[28:08] is is is spelled with the same small and capital letter as in the code so f is
[28:15] small everything is small except the l in the list and when i press the enter and i
[28:22] do again alice you will see a file list dot text i can open that using vi editor in mac
[28:31] file list dot text and then you will see all the files are listed in that if you are on window machine
[28:40] you can open a text editor and copy all the names of file in that it's fine to do that way if you are on a
[28:49] linux machine same command which i run on the mac should work just fine the goal is to create this file list
[28:59] make sure there is nothing else in that text file and the name must be file list or text if you change the name you can
[29:10] do that then you also have to change that name here in the code as well in order to make sure to run it
[29:18] completely so so just to remind again on the window machine you have to open a text file using a text editor
[29:39] and then copy all the names of file in that save it as file list dot text if you are using word then make sure you
[29:52] save it dot text file and choose save as dot text otherwise the program will not able to read it
[30:02] okay so although this poll says are you able to duplicate what you see what i'm trying to ask is are you able
[30:18] to to create that file text and you can see that in your directory if you are able
[30:24] to see that please say yes if you are not able to see that please know for those who are having difficulty in
[30:34] creating file lists they can also do there's another way to create this file list list i think specifically for the window
[30:43] users users if you go go let me actually close the poll because i see there are about 30 people
[30:54] who are still having trouble in creating this file list so again i am back to the spider window
[31:02] and i am going on the right side so first thing you have to do is cd cd say
[31:13] pwd okay the same command which i run on the mac terminal you can run on this ipython console and this will tell you
[31:22] the current directory where you are so my current directory is users figure 3 desktop session 2 that's where my code
[31:30] and python codes are there make sure this pwd command is showing your current directory if it is not
[31:40] then you can do the cd and then type in your path path you can do that from the window machine
[31:50] also also it should work as just as this one i'm going to just repeat my path because
[31:57] i'm already on that and then press enter this is another way to go to that directory once you are in the directory
[32:11] you say ls and it should display the all the hdf files and all the codes and a file list
[32:22] now if you are struggling to create the file list you can create that here also you you just run the same command
[32:31] it's ls star star hdf greater than sign space space name of the file list which is file
[32:44] and capital list dot text so you can see ls star ls space star dot hta space space greater than sign space
[33:01] f i l e l capital i s t dot text and then i enter once i do the enter i can see
[33:12] the file then you do again the ls and then you should be able to see the file list dot
[33:18] text now i'm going to ask this question again because this is an important steps and it will be
[33:26] used for all the routines which we are going to use too so i'm going to do one more time poll
[33:33] and again this post says are you able to duplicate what you see but my real question is are you able to see the file
[33:41] list or text in your directory where the code and data is there okay so i believe about
[33:51] most people who are able to see this those who are not able to see it please follow
[33:58] follow the instruction as i described you can see that on my screen they they are actually just here so
[34:09] go to the first first step is go to the directory where the codes and uh uh data is uh
[34:17] capped capped just do the cd on your ipython console do the ls you should see all the list of
[34:24] files here and then you do ls star dot htf and greater than sign file list text that
[34:34] should put all the hdf file into that file file list or text files and now you are if
[34:40] you have everything just done now you're ready to run the code okay okay so what this code is going to do is
[34:48] to read each of this file and we'll display a list of sds sds as i just explained earlier they are
[34:58] scientific data sets they are parameter specific parameter latitude longitude optical depth lend an ocean and they will list this so i'm going to
[35:08] run in order to run i will go on the top of this python spider editor and then i will click on
[35:19] that green arrow which i talked earlier if you click on that it says run file and i say
[35:26] click once i click you will see some action on the right side ipython console you should see
[35:38] it says run file this so you can also run through the command line but it should say that
[35:46] and what it will tell you is would you like to the to process the file name so what it doing right now the code is
[35:55] it is reading the list of files which is in file list dot text and taking one file at a time and it's
[36:04] asking would you like to process now there is a trick here it says you need to to answer yes and no
[36:14] now the trick here is first make sure you click next to the bracket after no and then
[36:22] the way you enter yes or no is it has to be in parenthesis so use use one comma
[36:30] y like this if you just type y then because we are using python 2.7 it will come up with an ad
[36:43] because that's how the code is done if you're using 3.6 uh then you might not see that error but
[36:50] in since we are using python 2.7 it will come up with error so make sure you enter y or n in the same way
[37:02] now once you do that i click enter and what you will see on your pipe ipython console is a list of 52
[37:13] different sds parameter which are inside that hdf file so i just browse up little bit and it
[37:21] says says this is a modest three kilometer file here is list of sds in your file and it will
[37:29] list list all the sds and then the program goes to the next line whether it says do you want to
[37:41] process another file so i'm going to just pause for a minute give everybody two minutes to make sure they're able to
[37:49] run after that i will go through this process again so that everybody who is behind they can and then we'll go over
[37:56] some of this sds to just learn about what they are so please take two minutes to run this
[38:03] and make sure you are on this line don't run through all the files yet i want to go over some of these lsds
[38:11] before we make run to the other files looks like most people are able to see and run in a way i'm doing here uh there
[38:24] are still few people left let me go over very briefly few things which have been pointed out in the question answer
[38:33] one one if you are running python 3.6 then you might be seeing a print error when you run the code and that is most
[38:45] likely coming from the line 50 uh uh so if you see a print statement just before that line in line 49 you can see
[38:56] the print is in whatever i like to print is inside a parenthesis so if you want to make correction you can just put
[39:05] parentheses which i'm going to just do it here but i'm going to take it off again because i'm not running two points
[39:13] 3.6 so if you do this way it should solve the problem if it does not solve the problem
[39:20] please please come back comment this line and just make it inactive so that it doesn't print at all
[39:27] so this will mess up how the output look but your code should run properly so that's one thing
[39:37] second is people also have trouble in creating the file list dot text and that's because when they are running the
[39:46] ls on their computer uh there is lot more information is displayed along with the file name so i think that depends on how the
[39:58] default setting is done on your computer unfortunately i don't know instant solutions to that but what you
[40:08] can do is you can do older style go to the folder copy all the file name of hda
[40:14] create a text file using any text editor you are using either on mac or window copy paste save as that file name and
[40:22] that should do the job okay so i'm going to just for sake of running this code again i'm going to run
[40:35] it for the next file also which is again a three kilometer file okay and it comes from modis aqua
[40:44] and i'm going to just say i'm going to again click here on my ipython console make sure when you are
[40:50] typing something or running your cursor is in that window otherwise that window will not be activated and you might by
[40:59] unintentionally you might be able you might actually modify your code and that can give some error so if my cursor is here and i
[41:07] start typing by unintentionally i'm going to modify my code and that will actually cause error when you're running so
[41:16] i'm on ipython console again i will say yes yes just for the people who are not able to
[41:23] do it in first time it's going to produce same information because i'm reading the same file list
[41:32] okay okay now now i want to go over a few of the sds here the first one
[41:42] uh let me actually i'm going to pick some of them which are more relevant for this this air quality studies so one thing you
[41:51] will need is parameter number 13 which is latitude so for each aod pixel there is a latitude and then there is a
[42:00] longitude also which is on 31 number 31 okay so the parameter 13 is latitude of that pixel parameter 31 is the longitude
[42:13] parameter 30 is also so important as ds it says land c flag it will tell you whether this aod pixel is
[42:24] over land or over ocean uh if you are interested in knowing the geometry there are parameter like sensors
[42:37] anything angle which tells you whether the pixel is at nodded or it at the edge of the swath
[42:45] glint angles tells you where the uh how far is from the glint uh uh sensors sensors assuming angles solos angles all these
[42:56] are are sun satellite geometry related which you may not require in application but if you are evaluating the product then those might
[43:06] become more important some of the product i recommend not to use they are just here for diagnosis
[43:15] purpose for example you will see mass concentration land on eight number i strongly recommend not to use this
[43:25] problem this is not a validated product it is just for purpose of diagnosis and we often check this for some of our
[43:32] algorithm so this is not recommended to be used for any application similarly similarly we have this aerosol type land on 32
[43:46] that's also it's just a way of telling for the algorithm which aerosol model is baked so you will see
[43:54] values like urban sea salt or things like that and again it's not you can use it qualitatively but it's
[44:03] not really telling you what kind of aerosols in there okay so the product which we are going
[44:13] to use are land ocean quality flag 46 this is the quality flag which i was talking earlier this has a
[44:25] value of 0 1 2 3 3 is the best overland 1 2 and 3 are best over ocean so this is the one which
[44:35] we are going to use to mask the bad pixels sds number 48 ocean optical depth landing ocean this is
[44:48] optical depth aerosol optical depth at three kilometer at 550 nanometer retrieved from modis.target algorithm both land and ocean and it only includes
[45:02] data for highest quality so this parameter only have data corresponding to quality flag equal to 3 over land and quality supply equal to 1
[45:15] 2 and 3 over ocean so this is the safest parameter to use for aerosol optical depth analysis for quantitative purpose
[45:25] that will ensure that there is no lower quality data is used there is a also image optical depth land on ocean let me
[45:37] find which number is that uh it's over here number 20. it's called image optical depth land and ocean
[45:47] this parameter is again optical depth over both land and ocean but it does contain all the quality
[45:57] flags so it has zero one two three over land same zero one two three over ocean again this is
[46:04] at five fifteen nanometer so if you are using image optical depth land and ocean then you will also need to use
[46:12] optical uh the quality flag uh parameter which i just showed uh the 46 number parameter land ocean quality effect so if you use
[46:23] this together then you can actually select which texture to use which pixel not to use in your analysis
[46:33] okay okay now i'm going to since this is same file i'm going to just say no next also i'm going to say no because
[46:44] it's again three kilometer file now the next file which is number fifth in your list it's mod
[46:52] mydo4 underscore l2 it means this is 10 kilometer data file we were so far looking three kilometer file
[47:03] now we are looking 10 kilometer file so you will see there are differences in sds between 10
[47:12] kilometer and three kilometer and the reason for those differences are that three kilometer does not have a deep
[47:20] blue product 10 kilometer has a gpu product so i'm going to say yes same way as i did earlier
[47:29] and then press yes so now you can see in case of three kilometer file you had 52 sds now
[47:40] you have 72 different sds and as you browse it up then it space this is mode is 10
[47:51] kilometer file so the code also identify whether it's three kilometer or ten kilometers for the dark target algorithm most of the sds
[48:04] remain same as i discussed for three kilometer product so you will have same latitude same longitude the optical depth parameter image
[48:14] optical depth is all also there uh uh the 21 image optical depth landed ocean with all the quality flag
[48:24] and then it also has optical depth landed ocean uh which is parameter number let's see they have moved around just
[48:37] because because so the land ocean quality flag is at 58 now and optical depth land ocean let me see
[48:49] is 64. now now there are parameter now which is start with the deep view so you can see
[49:00] all the parameters which are coming from the deep blue algorithm they start with the gpu so deep glue aerosol
[49:09] algorithm flag leg blue d blue spectral aerosol optical depth land remember the deep blue product is only available on land it is
[49:19] not available over ocean so that's another difference the the important parameter which we will look our debut spectral aerosol optical depth
[49:32] over land it's in three different channels channels and there is another product called deep blue aerosol optical depth at 550
[49:41] land qa flag so this is qa flags for from the deep blue algorithm again the algorithm flag varies from 0 to 3
[49:50] the w team recommend to use quality flag 2 and 3. and then there are other parameters also
[50:00] available from this uh the one which is combined product is called dpu.target combined let me find it uh
[50:13] here this is quality flag debut okay let's see where is the combined product product deep viewing strong
[50:26] deep blue spectral optical depth tubular spectrum aod aod this is aud 550 dark target debut yeah so the
[50:41] parameter number 38 let's start with aod underscore 550 target dpu combined product this is the one where the two algorithm has been
[50:52] combined for the 10 kilometer so you can actually save this list as one of the file on your computer
[51:00] and that will be useful for you i'm going to just say no for all other files because it's just running the same thing
[51:10] the code on the left side uh you don't really have to change much in this code uh it is very simple code it mostly runs
[51:20] on we have tested on the aerosol product but it should run on any other uh uh hdf file
[51:28] only thing you might want to change if you need to is this file list dot text right now it's reading from this file if
[51:36] you want to change this file name you can do that in the code otherwise i won't change
[51:42] anything anything on this code so let's see if you are able to do what i have done so far
[51:56] and then we will move on from the next the first code was a little bit difficult because we were trying to
[52:06] make sure all the python and everything is in place and all everything is working the next codes
[52:12] piece of code should be relatively easy to run but they will provide more on that so i don't have any new polls here
[52:24] but please i'm going to give like a three minutes to to for the people who are not able to
[52:31] run this and they still want to try please take like three minutes let's take a three to five minute break
[52:39] so you can actually do this code and for those who already done this they can take a
[52:46] break break they can get the coffee water or whatever you like to do and i'm going to get some
[52:53] water so it's a five minute break and then i'll come back and we'll start running the next code this should be relatively more
[53:01] easier because now we have gone through the process of running the code and we have tried to get actually the running
[53:08] process very similar for each of these codes codes meanwhile if you have question please keep typing in the question answer we'll
[53:14] try to answer them as much as we can thank you okay so for those of you who is still having
[53:30] trouble in creating the file list we are actually creating a file list of the data file which we have provided so
[53:40] it will only applicable to the people who are using the data which we have provided in the zip file
[53:46] uh they should be able to download it uh in a few minutes and then start working on that remember all the five codes will
[53:56] use that file list so if you have it do not delete it uh if you don't uh try to download it or
[54:05] create it in one of the method which we described earlier okay so looks like uh most people
[54:14] were able to do this step i can see 82 people were able to do it uh those who are not able to do it
[54:25] now please try uh downloading that uh file list which we are loading and that should help you to run through
[54:38] that that so so meanwhile meanwhile uh in order to prepare for the next i'm going to go on the top of the spider
[54:50] menu and click on the setting if you can see my mouse and i will say restart corner this
[55:01] you don't have to do it but i am going to do it just because i want to make sure my python
[55:10] environment doesn't have anything from my previous code now i will go on the left where the code is displaying and then
[55:20] click on the file name and there's a cross cross on the left which says close the tab i
[55:27] click on that and it will close it and it blocks whether you want to change any of the cells i will say no
[55:38] and then it will close so this is i'm back to my original step where first time i started this console
[55:45] so the next code which we are going to run run is called so so i'm going to just
[55:55] and for those of you actually who would like to do this in the spare time go over this again uh the ppt which has
[56:03] been provided does have a stability by a step instruction and a screenshots so that should also help you to go over in
[56:11] your optimal time so one thing i would like to talk about the application of this code this is basically to provide htf files
[56:23] and the names inside the hdf files [Music] [Music] since htf file is not something which you can
[56:32] open in any text editor or word or powerpoint it required a special code so this actually that is why this python
[56:40] script is created this will help you to see what are the sds inside in a specific http file so that you can use those in
[56:50] your analysis that's the purpose of this code the next one is we are going to do map aerosol optical depth
[57:01] and to do that we will again again now the process for people who have already done successfully the first code
[57:16] the process should be very similar and easy to do again i will go on the left click on that folder menu
[57:26] and then by default it will go to the directory where i have my codes and files if it is not please navigate through the
[57:38] directory and in that directory you will see see the code called read and map mod aerosol dot py this is the file
[57:50] which i want to run say open the code will come up here on the left side you can browse it up and
[57:58] down you can see this is little bit longer code than what we see in the previous previous it does
[58:05] read modis level 2 10 kilometer as well as three kilometer data and provide a nap for each gradual
[58:17] remember one thing each mode is data file contain the data for five minute of observations so as
[58:26] satellite is overpassing it continuously make measurements and when the five minute measurements are combined together it will put
[58:36] together this file which is called granule we call it granules so each mode is granule has five minutes worth of
[58:43] data data and that's what we are processing and trying to map okay so now again i will click on my ipython console
[58:54] and then without making any changes in the code and making sure i have the data file in the same directory and the file list
[59:05] it will still read this same file list you can see on the line number 24 it is
[59:12] still reading file list.text so if that file list is exist and the data file exist in the directory
[59:19] this code should run without any error so i will go on the top here i will click here once
[59:29] again to run i'll go on the top click on the green arrow it says run file and then i will run
[59:38] and if everything is in place the code run exactly the same manner as it was done in the first code
[59:47] so so it will start reading the list of file from the file list dot text in the first
[59:54] file it comes with my do4 underscore 3k i will say i will go to my ipython cons so click
[1:00:04] next to the bracket of n and then enter y in this manner if you just enter y without codes then
[1:00:13] it might come up with error it might work in python 3.6 but python 2.7 will like to use this way
[1:00:23] then i click enter now you see it start printing lot of information on the ipython console i want to briefly
[1:00:36] go over that so in order to make sure that everybody is able to see it properly i'm going to just increase the
[1:00:43] size of that window so first thing it says this is a three kilometer file and here is some information so as we can see
[1:00:53] from the file name it just thrift cloud profile profile now now the formatting is looks a little bit
[1:01:01] beard you can play with it and make it more more more uh more suitable for visibility but this is
[1:01:09] what the information is for white the valid range of value is point minus point one to five so this is the valid
[1:01:17] value range of aod which mode is data contained in this file the average value for the entire file on
[1:01:26] the valid is about point zero eight five the standard deviation is about point zero eight three for the entire granule
[1:01:34] so we're talking about the entire file it also gives you the range of latitude in this file which is from 30 degree to
[1:01:42] 51 degrees and then the range of longitude is minus 138 to 105 remember in session one when we start
[1:01:52] downloading this data from the let's wave we remember we selected a box around the california in the united
[1:02:00] states states during the october 8 and 9 2017 to see the fire so this is one of those files i
[1:02:09] think this i believe this is october 8. so this information provides you what is inside the file how much area it covers
[1:02:18] okay the next is would you like to create a map of this a data please say yes or no i'm going to
[1:02:27] say say yes yes and then press enter and then it should do something and then it comes up with a map on my screen
[1:02:39] now now this map on the top you see it says file name which it is printing and then the by
[1:02:51] default parameter which is mapping optical depth land energy now the next question it's asking is can you save this map
[1:03:06] okay if i say yes then then i will go back in my directory do ls and i will do ls star png
[1:03:22] this is my mac terminal you can look in your window directory just for look for a file name which
[1:03:30] ends with dot png this is my output output which is saved as dot png and i can open
[1:03:40] this and it's the file is there so it created a map which is displayed on ipython console as well as it can
[1:03:53] save that image as a png which you can use in your presentation paper or wherever you like to use
[1:04:03] okay so i'm going to you can run it through the other files i'm going to just run it for a few
[1:04:13] more years while others are catching up uh just to give enough time to other people to run
[1:04:21] through there on their screen i'm going to run to another image image another file for 282 282 it prints out all the details about the
[1:04:32] aod you can see the numbers have changed the area has changed and then i will create a map of that and
[1:04:40] then it start creating a map i will save it as well i'll go to the next file
[1:04:50] and then see i did an error here by mistake instead of one parentheses two parenthesis i only entered one and
[1:04:58] press enter so it comes up with the error so what i will do is i will run it
[1:05:03] again so again when i click on the run file start with that since i have already run through the first three files i will
[1:05:14] say no so that i can move on to the next file right now we are processing three kilometer files
[1:05:41] now it is start with the 10 kilometer files i will say yes and then it will do the same thing
[1:05:47] will create map whiles so depending on what i want i can actually actually choose my output so this is
[1:06:25] you can see actually on this particular image image this is october 9 when the fire started and this actually shows a very thick
[1:06:34] plume of smoke coming out of the bay area in california which is shown as the the orange and red colors and if you look
[1:06:43] the aod values on the color scale that goes all the way from two to three and that's actually a signal that coming
[1:06:50] out from the small aerosols in the atmosphere which is transporting over ocean uh just off the coast of the area in california
[1:07:02] now there are number of things which you can actually change in the code to look this image prettier or to
[1:07:10] actually actually select different sds so i'm going to give like two minutes for everybody to catch up and if you are not able to
[1:07:21] reach to this step let me see how many people are able to do that so i'm going to launch a poll just to
[1:07:31] see how many people have were able to achieve up to the staff where they can see a map and save a
[1:07:39] image on their home on their directory once you do that i will explain through some of the parts of the code
[1:07:50] and then we'll move on to the next code okay so looks like uh i see a poll response where 80 people
[1:08:01] were able to do exactly what i did here and able to reproduce the results of in form of the map
[1:08:11] so now i quickly want to go over this code and point out different uh portion of the code where you can do
[1:08:21] where you can make changes to either enhance the quality of the image or to change the parameter or to
[1:08:29] change the color skills and things like that okay so again the first thing is the file this dot text which is where
[1:08:36] the file list file names were read second uh it does uh actually the code does uh look into whether it's three
[1:08:45] kilometer or level two data file so that based on that it will give you uh in three kilometer it is writing optical
[1:08:54] depth landing ocean this is what the map is the map is produced if you want to map another sds so this is the place
[1:09:01] where you can actually change the name of sds which you want to map map by default in three kilometer this is
[1:09:09] the parameter which is mapped in ten kilometer we are mapping the combined product product uh aod 550. the deep blue
[1:09:19] again you can change the name of sdf here but it has the name has to match exactly
[1:09:26] exactly as it in sj file and where you can get that that running the script one which creates the
[1:09:31] name of list of sds in the hdf file so that's the again useful thing of running the first script
[1:09:41] before this other things it it this is the portion where it is actually reading and finding the minimum and
[1:09:50] maximum of latitude longitude information information uh from the file here it is the this portion is just
[1:10:03] reading the name of the sds the data stored in hdf files are not necessarily in the same format as it displayed so
[1:10:20] they are stored they are stored in unsigned integer the aod values to actually reduce the space this space
[1:10:30] and often that required to scale them once you read them you have to there's a scaling factor and there is
[1:10:39] so there are something called attributes so here is the next three four lines 68 to 74 that's
[1:10:48] where they are revealing the attributes so the scaling factor is there and if there is offset that offset is red once
[1:10:55] you have those scaling factors you you use those scaling factors to get the actual aod values so here is the
[1:11:04] where we are actually doing the actual aod value valid data into the scaling factors factors and this portion of the code also
[1:11:13] actually takes care of any missing data or nand value in other words it is calculating the average standard
[1:11:24] deviation if you want to calculate minimum maximum other parameter median few other things you can do it here
[1:11:32] you can change that the way you want to calculate that okay the next one uh 93 onward line
[1:11:42] number it's basically mapping the data uh we are using the best base map uh uh modules which we
[1:11:53] installed earlier and and before mapping it's just cleaning up making sure that the name data are not
[1:12:01] going into that and they're represented at the right you can actually set different things so if you see line number 106 which is
[1:12:10] highlighted highlighted uh m equal to base map you can select the projection you can select the resolution right now i set the low
[1:12:18] resolution resolution you can actually also define the latitude longitude boundaries uh by default it takes the boundaries of
[1:12:28] the gradual but if you are not interested in the time triangle and if your region is very limited to a small 1
[1:12:35] degree 2 degree pass you can fix that here the next one another important aspect is the line number 1 1
[1:12:48] one where you actually can it is selecting what kind of map you want to create so it's using a
[1:12:56] map type called color mesh map in python and that is used and then the c map equal to plt cm chat this is the color
[1:13:08] scale it is choosing and let me show you on a ppt i have a link here here uh so this is the part i was showing in
[1:13:19] the code here which is pointed out on this this ppt and this is the color scale if you
[1:13:26] look the plot cm.jet which is this one this is the one which we are using if you want
[1:13:32] to use any other this color scale you can just change that name from jet to brg hsb
[1:13:40] rainbow and it will replace there are many many more color scale options in python available which you can access
[1:13:50] through this link which is given here on the left bottom corner that will help you to change your colors okay
[1:14:00] that's another aspect let me go back to the python code here the color bar you can also
[1:14:08] change the color right now the color bar is taking all the value which is there in the file from 0 to 3.5
[1:14:16] maybe the maximum value available in the file but if you want to restrict highlight certain portion of the map in
[1:14:23] more or less then you can restrict to 1 or 3 or 2 or 0.5 depending on what you
[1:14:29] want to highlight in your map that can also be done here in the this portion of the code
[1:14:38] i think here in towards the end if you want to save output other than png format then there are options here right
[1:14:47] now i have like says png.save uh uh you can actually save this figure in other format if you
[1:14:54] change this to line 128 to jpeg or tiff then you should be able to save in that format
[1:15:03] again again in order to really see this more again you can look online tutorials there if you search you will find lot more
[1:15:12] options to save in different format but this is the place where you want to make changes changes if you need to change the
[1:15:20] format of output files okay uh i think uh so we are already 11 38 and we have just
[1:15:30] done two program so i'm going to move little bit faster now onward and the reason is all the codes remain
[1:15:39] the same as we have done here uh uh they will perform different tasks and i will quickly go over those
[1:15:48] one thing to make things faster i'm going to do is i'm going to modify my file list you don't have to do
[1:15:56] it it i'm just doing it so that we can actually go over this little bit faster so i'm going to run through
[1:16:05] one eighty two three kilometer file uh take that off and then ten kilometer file so i'm going to just
[1:16:17] keep the two file in my file list just to make sure just to run through quickly through each code that will allow me to
[1:16:25] do faster but you don't have to do it if you like if you are easily able to do
[1:16:30] it do it you don't have to do it another thing thing people people those who are still
[1:16:38] still struggling with the creation of file this dot text we were not able to actually create that and provide in the handout
[1:16:49] but what you can do is we have sent a list in the chat in the question answer on
[1:16:56] the chat box section you can copy paste that open and text editor copy paste that there save it
[1:17:04] by list.text and that should work okay so moving on to the next code i will restart my kernel
[1:17:16] just to make sure it runs smoothly i will close this code i will open next code by going to the left
[1:17:26] folder options in the next code i want to run is so i created aerosol optical depth map
[1:17:34] now i want to to actually actually get aerosol optical depth at a given location so this is the code which will actually
[1:17:50] print print or extract the aod value over a given location so suppose you want to get aod
[1:17:57] over a let me actually open the ppt to explain this little bit more so what this code does
[1:18:07] actually is print if you provide latitude and longitude of a ground location it will print the value closest nearest
[1:18:19] aod value corresponding to the nearest pixel pixel it will also average the aod value in three by three
[1:18:27] box which is shown here in the left side of this slide so it will take all those nine pixels
[1:18:37] centered around your ground location will do an average of all the validity pixels and provide a mean value
[1:18:44] these are useful when you do validation studies when you do a dpm 2.5 relationship some people use the nearest
[1:18:53] pixel some use three by threes and use five by five so there is all three options are available in this code okay
[1:19:00] you can modify that the way you want to print it but these are options available so so let's do run this code now and again
[1:19:11] i will click on the right side run file on the green arrow and it should run exactly the same way
[1:19:21] as other programs were running it will read the file list the first file is three kilometer i will
[1:19:28] say yes and then it will give you an option which sds would you like to view or the
[1:19:37] type the number or press and press enter so right now i have four option i'm going to choose optical def land and
[1:19:46] ocean ocean number one you can change this list in the code i will show you that in little bit
[1:19:56] again it displays the similar information it gives me latitude and longitude range in the file now it is
[1:20:03] asking asking enter the latitude you would like to analyze so you have to provide a location of ground station or location
[1:20:13] or whatever you want to process just you have to provide one latitude make sure when you providing that
[1:20:21] latitude should fall within this range which is given up if it is outside the range the code will not provide any aod
[1:20:30] values values also it although your value is inside the range does not mean you will always get a ud
[1:20:38] value depending on whether the algorithm retrieved aod on that pixel or not if there is a cloud or any other
[1:20:46] algorithmic restriction applied then you will not see any value there so so i'm going to choose a value of 30 degree
[1:20:57] 30.5 degree let's say if we get any value corresponding to that and then also i have to provide a
[1:21:03] longitude longitude and in this case my longitude should fall between minus 114 to minus 143 i'll choose -125
[1:21:15] and then click enter now now you can read that the nearest pixel to your location is this latitude and longitude my
[1:21:29] initial latitude longitude is 30.5 i found actually very close one thirty point four nine seven and the longitude
[1:21:37] i say 125 i found minus 125 so this is the nearest pixel latitude longitude corresponding to my ground station
[1:21:47] but i selected this parameter called optical depth land and ocean and x value at that pixel is
[1:21:54] -999 it means not a valid point there are no valid pixel in three by three grid box and there are no valid
[1:22:02] pixels in five five required it means there was no a valid aud value were found within that form so let's
[1:22:11] let's try running on another file and you can actually run change filters in the code and run it
[1:22:17] for the multiple station also but i'm going to just run for another file and let's try if we can find a valid aod
[1:22:24] value value in that another files again i will now i have a 10 kilometer file now in 10 kilometer as i said the deep
[1:22:35] blue product is also included so i'm going to just say w uh uh the number one i will just choose that
[1:22:43] again my latitude longitude range is 19 by 240 i will pick 25 maybe similar location location and let's pick the same
[1:22:55] longitude minus 125 and let's see so there's no value in this one as well so let me run it again
[1:23:04] one more time i can click on that green arrow to run it again and let's try to find a value in this one
[1:23:13] this time i'm going to say image optical depth the number three and let's pick another latitude maybe i
[1:23:21] will go a little bit higher 35 35 degree degree or or maybe let's say 32 degree 0.5
[1:23:33] and then minus 123.5 just trying and still there is no way i do this one somehow somehow let me try again
[1:23:47] another file two okay let's see 26.0 and then lat longitude i'm going to try 130.5 okay due to some reason i'm not getting
[1:24:14] any values uh let me check the map actually where i'm get having the value so that this is uh
[1:24:28] 180 180 182 2145 so i'm running this file so it looks like there are values around 105 west
[1:24:55] and then 40 40 around 46 north so let's try that so run it again yes yes and then
[1:25:10] three and then latitude is about 46 degree oh no just does not have that this is different file
[1:25:23] 282 to one phase [Music] oh yeah that's a different file okay i'm just randomly trying to see
[1:25:47] where the aud values is there in that file file [Music] [Music] the other way to look that to do this
[1:25:53] more precisely is run your first code create png files see where the valid values are there and
[1:26:00] then you can actually pick one of those location to test your code okay we found it good so
[1:26:09] i i i i picked 36.6 and longitude is minus 126.5 and then it gives me all the information corresponding to
[1:26:24] that information so this is image optical depth look land and ocean this is the parameter which i selected the
[1:26:31] pixel value closest to that my location is 0.185 it says there are eight pixels within that three by three grid box there is
[1:26:40] total nine possible out of nine we have eight valid the average value for that eight pixels is point one seven nine
[1:26:50] the median value is point one eight both mean and median are very close to each each other it
[1:26:57] indirectly tells me that there is a very less standard deviation and you can see that in the
[1:27:02] standard edition point zero zero right so it's very homogeneous space space there are 17 valid pixels in five by
[1:27:12] five grid centers around that station and if you look the average value for five by five box it is 0.177
[1:27:21] again it's very close to 3 by 3 bar so we have picked a location where aerosols are very homogeneous and there
[1:27:31] is a very less special variability within that 3x3 or 5x5 grid box area okay i'm going to now say no and
[1:27:48] so this is the whole purpose of this code code now if you are looking if you want to do
[1:27:53] validation of aod over certain locations you can use this code modifier to run it automatically so that it can process you
[1:28:02] can avoid all this just no thing on the command line i have created those in that way so that we can see the
[1:28:11] process through but you can automate those you can all go to the code you can change all those things from here so
[1:28:18] that that code doesn't ask from the screen it does the default job again you can change the sds which you
[1:28:27] want to output from here around line 39 the code pretty much remains same as we have seen in earlier version
[1:28:39] only thing changes which i want to show here is it does calculate the distance between each pixel
[1:28:48] and and the location which you have given so this it does calculate the radius using a a it's called a spherical distance on the
[1:28:58] sphere so it does account the curvature of earth and it calculate the distance and find out the nearest pixel so this
[1:29:05] is the portion which is doing that now now this is where it is taking three by three pixels so if you want to do four
[1:29:14] by four you can change this uh this is three by three and this is five five five so
[1:29:22] in five by five you go five pixel three pixel left three pixel right and this is the if you want to change this
[1:29:29] numbers to other number of pixels six by six seven seven seven ten by ten and you can do change that here
[1:29:38] i think that's all this code has in order to change okay so as we are running late
[1:29:46] let me go to the next code okay so since we are running out of time so let's do
[1:30:18] one thing we will go over one more code and then the remaining one more code will remain which we can
[1:30:25] actually cover on monday uh we have we are doing monday analyzing going through the same script but using the only data so
[1:30:37] we can do that so let's go over one more code code for this so in order to do that i'm going to restart
[1:30:45] my kernel and then i will close this code and then i will open my directory to choose another code
[1:30:58] and i think this is useful code is called read mod aerosol and dump ascii dot py so this is the code
[1:31:11] for example you really don't want to deal with hdf data and you are very comfortable working with access or text file
[1:31:21] then what this code is does is it can convert the hdf file you can select what parameter from that
[1:31:29] hdf file you want as output and then dump everything in a text file or csv file the csv file is can be opened in
[1:31:40] any text editor it's comma separated file it can also be opened in excel to analyze or to make charts or to do
[1:31:50] any kind of data modification so again this is same thing the code is very similar it's just
[1:32:01] writing the data in csv form output right now the code actually does let me run this code once and then we
[1:32:12] can look the output actually so running this code again it goes through the same sequence i say yes
[1:32:27] and then it says it won't ask you anything at this point it will just save the data it says this
[1:32:34] is a three kilometer modus file sending sending in order to see the output i can go back
[1:32:42] to my directory if you are on window you can open that or if and then i will look for text file
[1:32:50] so there are two text files one is the file list and then another one is my nydo4 underscore
[1:32:57] three three dot text so this is the file it created i can open that you can open that in any text editor so
[1:33:09] if you're comfortable with the mac commands you can follow what i'm doing otherwise you can just double click on
[1:33:15] that file and it should open so once you open this file you will see data like this
[1:33:37] you can see each column is separated by comma comma and on the top header you will see list
[1:33:44] of the parameters which are output here so you have year month day hour remember this hour is
[1:33:54] in gmt time now or utc time minutes seconds seconds latitude longitude optical depth land ocean image optical depth land ocean
[1:34:06] land c flag which will tell you whether it's land or sea zero means over ocean one is land
[1:34:13] two means coastal areas and lo land ocean quality flag which is the last one which varies from zero one to three so
[1:34:23] again you can go back in the code and change which sds you want to output suppose you want to add two more you can
[1:34:30] add in your go into your code and two more sds and it will output those two if
[1:34:34] you don't want all of them you can ch change that as well so this is the file which you can open
[1:34:40] in excel easily just go to your excel open that file and it should you should be able to open that
[1:34:46] now let me show you the portion of the code where it does change okay where you can change those sds so
[1:35:00] so this is between you see this line number 39 and 43 so line number 39 is for three kilometer
[1:35:08] product product so here is the list of sds which you can actually actually uh output optical development ocean
[1:35:17] image optical definitely direction lens c flag optical depth language these are the sds corresponding to aod values there are some default i will
[1:35:27] show you which are printed like year month month uh if you want to change for level two
[1:35:32] data fields the line 43 is where they are listed deep blue is an optical depth 550 aod dark target combined
[1:35:42] flag with the combine so there are three in the ten kilometer and these on the bottom here
[1:35:48] are some default year month day hour minute second latitude longitude if you want to add another parameter like solar zenith
[1:35:59] angle or other things you can include those as well so again this is a all these codes which we are providing
[1:36:07] today today they are just to get started with they may not do the task exactly what you like to do but if you make some
[1:36:16] changes in these code they can become your base code and then you improve on them you change little bit here and
[1:36:23] there and then you can do the task which you like to be uh want to perform so you can see that the 10k kilometer
[1:36:32] file and then now it is asking for 10 kilometer file i'll say yes now the three kilometer file of course
[1:36:38] will have much more data points corresponding to uh with respect to the ten kilometer file and both of these
[1:36:45] files should be visible in your directory directory okay let me go through a couple of slides here before we
[1:36:54] finish this session uh there is one more code left to do the um uh uh pm 2.5 mapping which we will go on
[1:37:03] monday actually so let me point out few things so one is this is the application for the mapping
[1:37:11] code uh just to give you an example that you can actually map the aerosol optical depth and then superimpose the ground
[1:37:19] station in this case and if you look these as a time series you can see the transport of certain
[1:37:26] aerosol events like smoke or dust or urban pollution or a certain area and you can present in nicely nice way using
[1:37:35] this python script uh uh the the script which we have given does not do exactly the same what you are
[1:37:42] seeing here on the slide but you can make make small changes in that script and will be able to create this kind of
[1:37:51] map another thing i want to point out about this aod when you extract the aod or a
[1:38:00] particular location you can run that for the entire year for certain time over one station or you can run over many
[1:38:08] stations stations that code and then once you have that aod value you can either compare with the pm 2.5 and create relationship like
[1:38:16] this which is shown here in the middle panel panel you can try again you you can actually
[1:38:37] can you hear me now yeah i don't know what happened i was not here okay so in the middle you can see the
[1:38:47] aodpm 2.5 relationship which we talked in session one also so the code which extract the aod over ground location can
[1:38:55] be used and you can create a plot like that actually by creating that kind of database you can also validate modis
[1:39:04] data with arrownet which i talked in session one uh again you can get there online data from your website mode is data using
[1:39:11] this python script and then you can create map scatter plot like that you can also extract aod over
[1:39:20] certain location actually and create a time series like this the one i have created in uh you
[1:39:27] know extreme right on slide number 30 so you can choose any specific city or ground locations or any big area and extract the aod and
[1:39:40] then you can run through the time series and create the tenses to demonstrate uh in terms of the train
[1:39:47] uh how the seasonal aod variations is observing over the that particular location or how aerosol loading in the atmosphere is
[1:39:56] changing over a long period of time as i said earlier we have this data all the way available
[1:40:03] from the 2000 so we have almost 17 18 years of aerosol optical depth record from modis which can be useful
[1:40:11] to look this long-term change in our soul field okay uh so the last code which is left
[1:40:20] is is to create the map like this uh and we will go through that actually on monday uh what i will do is now is i
[1:40:29] will give you two two to five minutes to just wrap up all the python things and then we'll go over
[1:40:38] question answers uh and hopefully most people were able to do it uh let me actually before we go to the question answer i
[1:40:47] have some polls i want to get get let me put out some poles uh while you are closing your python
[1:40:57] sessions so that i can get a feeling of okay so this is first poll i will each poll will be displayed
[1:41:10] by each poll will be displayed for about 40 seconds seconds and i will close after 40 second
[1:41:19] just pay attention to your screen respond to that poll and then we'll take question answer in five minutes
[1:41:35] so the whole question was modest gpu aod product is available at 3 km resolution and and the correct answer is
[1:41:46] no no it's false which most people have done so the three kilometer product is not available from the deep blue algorithm
[1:41:55] it's only available from the dark target algorithm algorithm just to remember it now going back to the code which you
[1:42:03] were running to dump the asti file several people are complaining they are having error so my recommendation to that is
[1:42:14] go to your python i python consoles go on the top right click on the setting and say restart
[1:42:23] corner sometime what happens it does remember remember some i value from the previous run and it might be
[1:42:32] creating that problem if you are seeing that error in line number 74 in the code restart the kernel run again
[1:42:40] and i hope it should work fine we did test here and it was looks like it was working fine so try that
[1:42:51] okay meanwhile for those who have already done i have another poll so let me hide the results for this
[1:43:02] this should be easier we have gone over this many many times so this is just asking about the
[1:43:11] satellite satellite name through which this product comes sorry i was on the mute uh so let me
[1:43:24] explain again so the if it is my d then then it's aqua if it is m o d it's terra
[1:43:33] irrespective of level two or three kilometer product uh again this information is in the slides so just pay attention when you start using
[1:43:43] the database because it does make different different um which satellite you're using now another question related to the quality flag
[1:43:56] the highest aod quality data corresponds to quality flag value of what this is also very very important when
[1:44:06] you start data for quantitative purpose um um now now this is a tricky question so so okay is so the correct answer is quality
[1:44:18] flag three uh uh although over ocean you can also use one and two uh which are recommended by the sciences
[1:44:28] same but the highest still remain three so this is just an order in which the quality flags are assigned okay now
[1:44:35] let's let's go to the question answer session and we have another 20 minutes for until we have this room so we'll try to answer
[1:44:44] as much as we can if we cannot answer all of them we will try to do that on monday
[1:44:51] so we'll move to the question also now okay great so so the lot of question i will go one by one
[1:45:20] the question number one how how can the average median and standard deviation of aod and number of electrics
[1:45:27] will be useful in informing local air quality this is wow okay so this is little uh difficult
[1:45:36] question question and and the answer really depends on what is the when you say air quality policy what it means okay
[1:45:45] so the average value on that three by three or five by five represent what is the average uh
[1:45:54] concentration of aerosols or pn 2.5 in that region median represent basically similar thing but it's a different
[1:46:04] statistical parameter to represent the median it does take into account the skinniest of the data data and how the data is distributed so some
[1:46:15] people people rely more on median others rely on average and again that can vary on this location to location and application to
[1:46:25] application application standard deviation will tell you how much variability within those three by three and five by five pixels are there
[1:46:34] in that region now now in terms of how does it affect the policy policy i think if
[1:46:42] the variability is less in a given over a given city for example you want to monitor air quality over a big large
[1:46:50] city city and and the the area of that city is about hundred kilometer by half kilometer or ten
[1:46:59] kilometer or ten kilometer and you find that the very standard division is very low uh uh consistently over different scissors
[1:47:08] over different time then it's telling you that the source are quite homogeneously located within the city and the distributions are
[1:47:17] homogeneous and not changing too much and that might also suggest that you may not need to make any ground management
[1:47:24] stations but if you see large variability in high resolution data like curriculum it suggests that there's a huge
[1:47:34] variability there are many many different sources and may you may need much more ground this monitor so that's
[1:47:40] more more going back to the policy level but it's it's statistical parameter these are to evaluate evaluate the
[1:47:51] the the the uh uh the distribution of aerosols in that region okay okay the next question mod is three kilometer
[1:48:04] is the re-sample product mode stand limited product what sort of algorithm used to re-sample re-grid okay so mod is
[1:48:12] three kilometer is not a re-sampled product product it's it's the same algorithm which applies on 10 kilometer is applied to run at three
[1:48:23] kilometer resolution as you can recall from session one the original mode is resolution is either 250 meter resolution 500 meter
[1:48:36] resolution resolution or one kilometer resolution those are the three resolution at which different spectral channel of mode is
[1:48:46] makes the radiance measurement when we convert that radiance to aerosol optical depth depth we can choose which resolution we want
[1:48:55] to create that aerosol optical depth we can either create at one kilometer resolution which is original resolution
[1:49:02] uh in this case we have chosen to create a three kilometer resolution and ten kilometer resolution the algorithm remains exactly the same
[1:49:12] there are only a few minor changes when it comes to the pixel selection and cloud masking otherwise
[1:49:20] otherwise everything remains same again there is the link on our ppt yeah called dot target.jssc.nasa.gov that website should provide you more
[1:49:32] details on the three kilometer ten kilometer algorithm you would like to get more on that okay the next question is
[1:49:45] question number three what kind of testing framework does nasa modis use in processing modes data what are
[1:49:51] good practice tips testing satellite data processing and analysis okay i am not very sure what exactly testing framework means if you are
[1:50:01] implying implying to to talk about the validation of the data sets sets uh then we use uh aeronate datasets
[1:50:10] if you are asking about specific programming language then uh different people use different programming language some use ideals
[1:50:20] some use python some use other fortran and other things so it really varies to people to people
[1:50:28] i am not sure what else you mean by testing framework if you can be more specific or you can shoot me an email and i
[1:50:37] probably will be able to answer you more specific on that the next question is the map is saved as
[1:50:49] png png how should we have it saved as geotiff or tiff image that the image can be
[1:50:56] manipulated in arcmap or other software uh so in python uh like i showed in the code there is a
[1:51:04] towards the end there is option to select the extension i believe you can select all the image
[1:51:11] extension like jpeg png tiff tiff uh in order to save as a geotiff i think you have to do
[1:51:21] a little bit more there are other quotes available online if you search to convert from hdf to geotiff also
[1:51:32] as i was talking in session one when you order the data on the let's web website website there is and if you go to the post
[1:51:40] processing there is options to save the data as durative and that's where you can select that option and the data
[1:51:49] which you will receive from nasa nasa will be post processed and will be in geotab which you can open in your arcgis
[1:51:59] software uh there's a question on this type error on the tuple i believe this is related to the
[1:52:12] dump ascii file code and as we mentioned that if you reset your python console that error should go away some time
[1:52:20] python start remembering uh uh value of that specific variable from earlier run and that can can create that problem i'm not
[1:52:30] 100 sure how to fix that uh permanently but i'm sure there should there are there must be ways to reset the variable
[1:52:39] within the code uh next question is each pixel has latitude and longitude data is that the center of that pixel the yes the answer
[1:52:51] is yes when saving the map as png is there a way to increase the resolution yes so
[1:52:59] so if you go to the base map part of the code where we are calling m equal to best map and then we are
[1:53:07] providing all the parameter within the base map there is a keyword for the resolution so i believe you can select
[1:53:15] low high medium or you can even give the dpi dpi uh range there so yes there is way to do
[1:53:23] that is it there is some way to help after the class so uh one thing we would recommend is go
[1:53:36] over the recording which will post soon try to go over the ppt which comes with this presentation where we have uh step
[1:53:44] by step instruction on how to do that and and try yourself if it's still your fine problem
[1:53:53] problem try to write us and we will try to resolve the problem in order to get answers aod data we need
[1:54:02] to download all the modis files or can we obtain ready-made times this data from let's portal uh no you cannot get ready-made
[1:54:11] data from the let's you have to download the files and create yourself again again try try to look the post-processing
[1:54:20] options when you order the data there are certain options in post processing where you can actually combine many different hdf file into one
[1:54:29] single file and maybe that works to clear sciences but i have not done personally so i know i don't know the
[1:54:36] details but please look the post processing option it has a lot of options to manipulate the data
[1:54:48] is optical depth land and ocean already filtered for the quality flag or do we use the land ocean qualifier product for
[1:54:55] filter ourselves yes this is highest quality data already filtered uh for land uh qa equal to 3 for ocean q equal
[1:55:05] to 1 2 3 and this is true for both 10 kilometer and 3 km product from the processed information can be
[1:55:18] can it be converted to a vector shape i have no clue what that mean so i'll just step that question if you
[1:55:29] want to rephrase it or be specific i'll try to answer it question number 12 for the line 106 what
[1:55:38] are the other option for resolution l is for low but what is the medium high i am not sure that at top of my head
[1:55:47] uh i'm sure if you do little search online online uh you should be able to find that
[1:55:54] this whole tutorial online on the use of base map and you can post the link here if you like
[1:56:03] or you can just google it and should be able to find it if you would like to add state borders
[1:56:14] to the map you could a trust it i think this is somebody responding to somebody else this is just to showing how to draw
[1:56:29] straight boundaries or other counters you can always import shape files and do those things i tried to download the data to the ftp
[1:56:47] and i could not do for that i will strongly recommend to follow the instructions given in the email when you order the
[1:56:57] data on the let's website it will send you an email which provides very detailed instructions and multiple options to download the data
[1:57:14] question 15 should we modify read and map aodra soul py code to show maps on showing maps should we modify the
[1:57:23] code for python 3 so looks like somebody might have errors but the read and add and map mod aerosol dot py
[1:57:37] should create a map for you you don't have to change anything in that code if you are using python 3.6
[1:57:44] it should work as it is it might come up with print related error but i believe it
[1:57:53] should work as it is and we can check that in next week actually when we are going to use 3.6
[1:58:02] on monday if it is not bad then it should come up with some kind of ad if it does not come
[1:58:37] up with the error make sure you are writing this right code for that mind running up the
[1:58:44] board uh question 17 is it possible to get the help of the class i think we have the
[1:58:53] answer that question 18 how do i know which variable is just higher yes so this is really important question in
[1:59:07] order to know which sds i would strongly recommend to refer to uh so you can go to
[1:59:27] target.gsfc.nasa to get that atvt where you will find details on each sds for deep blue there is a another website
[1:59:40] called deepblue.jsfc.nasa.gov it provides all the details and documentation on each of those sds and will have some recommendation to be used
[1:59:52] for various applications yes uh question 19 is do you have any recommendation papers to learn more about aodpm 2.5 relationship
[2:00:06] yes so we can post some some we can post some recommendations on the paper but there is a
[2:00:16] very nice review paper in 2009 published in air invest management it's called by half and christopher it's a review
[2:00:26] paper uh and it does provide very basic information about aodp 2.5 relationships there is also a guidebook published
[2:00:36] which is available on our site page is called air quality guide user guide by brian duncan and other people
[2:00:46] it's published in atmospheric environment and that paper is freely available for everyone to download okay the next question uh we have
[2:01:05] a few more minutes and let me check what kind of tools you use what kind of tools you use to bulk process more modis
[2:01:14] file to do to derive your dpm to find i personally use ideal other people use python python so it really varies a lot
[2:01:25] with person to person and what they're familiar with would you mind summarizing again the difference use this case and pro concept
[2:01:35] deeply versus dark target derived very well yes so the dark target algorithm works over dark vegetated areas so as
[2:01:44] the name suggests dark target means the surface should be dark enough so over water dark target is pretty good over
[2:01:51] vegetated areas forest where a lot of vegetation is there even urban areas a dark target is pretty good deep blue
[2:01:59] algorithm works all the places including dog target and bright surfaces so if you are looking to get aerosol optical depth over large
[2:02:10] cities where things vegetation is very minimal deeply you might be providing better accuracies if you are look going to areas where
[2:02:20] the surface is bright like desert areas like in western u.s sahara or middle east or deserts in india and china
[2:02:31] then you might find that the dark target product is not either not available or it's lower quality so that's where you
[2:02:38] want to use the deep blue product okay i want to monitor pm10 which sds do i have to use you can use optical dap land
[2:02:53] and ocean that's the best quality data over from the dark target algorithm if your location involved deep new
[2:03:04] uh uh bright surface then you might want to use the deep blue optical depth best estimate sds
[2:03:17] is necessary to do atmospheric correction to process the image uh uh atmospheric corrections have been already performed on all of when we
[2:03:26] retrieved errors for optical depth so at your part you don't have to do that is aod at 10 kilometer in 3 kilometers
[2:03:41] correlated at all location is three limited data better uh uh so like i said earlier both 10 kilometer
[2:03:49] and three kilometer are processed using exactly the same algorithm the only difference is the resolution and that comes with some
[2:03:59] usually our validation studies shows that the three kilometer data is lower in quality compared to 10 kilometer uh
[2:04:06] three kilometer data are good to pick the small scale features but it also comes with lot more noise
[2:04:14] uh 10 kilometer product has compared better better with aeronaut on a global scale yes you can uh the question number 23 is
[2:04:31] all hdf files have to be processed one by one what if you have hundreds of file is the way to batch process all the
[2:04:38] files yes you have to make some minor change in the code specifically in places where it is
[2:04:45] reading the inputs from the screen if you can comment those and hardwire hardwire that it should process irrespective of a
[2:04:55] screen command it should process all the file in your code then it will just keep running the code
[2:05:01] it won't ask you so those are very small mind change you have to do in the code
[2:05:06] and it should run for every single file currently what are more excited about in satellite monitoring of air quality any
[2:05:18] upcoming satellite we will talk about that actually in on monday when we talk about some of the
[2:05:25] new new uh recently launched satellites and upcoming satellites uh can you suggest any r models uh no i
[2:05:36] cannot i'd have no idea how the r works uh sorry about that okay i think that's all uh
[2:05:47] thank you everyone for attending today's session i hope people were able to run the script if you were having difficulties please
[2:05:55] try to go over the presentations uh the recordings will also be available soon and as i said
[2:06:04] we will come back on monday and we will do similar exercise on monday using window machine and we will look the no2
[2:06:12] and so2 data and and hopefully some of this uh errors which you are getting today you will be able
[2:06:20] to resolve over the weekend and then we'll we'll do that um um i think that that's all i have uh thank
[2:06:28] you everyone and enjoy your weekend
