# Hands-On Analysis of AERONET Data, Part 2/5

`https://www.youtube.com/watch?v=wSCFtOjQw0o` · id 278 · 1:47:57 · module 27 — NASA Atmospheric Composition Ground Networks Supporting Air Quality and Climate Applications

[00:03] all right welcome back everyone to part two of this training on NASA atmospheric composition ground Network supporting
[00:10] air quality and climate applications today we're going to continue with aeronet and do some Hands-On analysis of
[00:17] data again I'm Dr Carl malings and again joined by Dr poan Gupta one of the aeronet co-leads and today we're also
[00:24] joined by Peter gorov a scientific programmer from science systems and application Inc here at Godard who supports the aeronet
[00:33] program in this part we'll be showing you how to access relevant aeronet data for given locations and different
[00:40] application purposes in a variety of different ways and also showing you how to compare and jointly analyze the
[00:46] aeronet data together with relevant satellite aerosol Optical depth data products from the V instrument for a given location and
[00:55] time just as a review last uh session we learned about aeronet it's a passive remote sensing instrument measuring
[01:02] aerosol Optical microphysical and radiative properties from more than 600 active sites around the world giving total column aerosol
[01:11] information and if you have any questions during this training please put them in the questions box in the
[01:16] WebEx tool and we'll address them at the end of the webinar and also uh in a document which we will post to the
[01:23] training web page uh after the training today and now let's hand it over to Dr poen Gupta to talk about Hands-On
[01:31] analysis of aeronet okay great uh welcome back everyone to the part two of this webinar series thanks to call for introduction
[01:42] and continuing this series into part two so in part one we learned a lot about aeronet Network how it make measurements
[01:52] what kind of instrument we make what uh what kind of uh different geophysical parameters on atmospheric aerosols are
[02:00] produced by aeronet and how International Community comes together to run this great Network which has been providing data for last 30 years in part
[02:11] two what we are going to do is we going to start looking some of the AET data
[02:17] using some of the online tools which we have in house through aeronet uh we will also go over specific websites show you
[02:29] uh what you through with some of the tools uh and I would also recommend everyone to uh have a uh internet web
[02:38] browser open so that they can actually walk through with me and I will in between I will also ask people to do a
[02:46] small exercise as we move on towards the uh this part two so let me quickly start with uh some of the slide deck which we
[02:59] have created as a reference slide for this uh this part of the part two of the presentation will not use uh the part
[03:10] two of the presentation will not use lot of the slides but we will do online uh demo and online uh walk through to the
[03:20] different tools but I want to actually just go over this slide tag which we have prepared as a reference slide when
[03:28] I say reference slide it means if you have something missed during the demo if you want to come back later on and take
[03:36] a link or refer uh what particular part of the website or tool is doing what then you can come back and look at this
[03:44] slide so this can serve you a reference slide later on time uh this is just the list of things which we are going to do
[03:51] today uh we will have data display data download uh we'll play with some of the Jupiter notebook uh python codes to uh
[03:59] visualize aeronet data into different uh uh different ways quickly this is the main page of aeronet website again we are
[04:09] highlighting and I will walk you through actually different component as we go again showing where the data part is
[04:16] located on the aeronet website again a great reference slide this is how the data station data looks like um I will show you how to
[04:26] access this particular uh file uh this is a site information page how it looks like again we'll walk through this
[04:35] and go over it when in the live demo this is the data display page uh again it shows very quickly what to look for
[04:44] but uh when we do the demo we'll walk you through and understand each of these plots more carefully this is the data
[04:51] download page uh how to download the data this is a data Synergy tool Aon data Synergy tool
[04:59] here we actually try to bring aeronet data along with some of other satellite data uh realtime imageries some model
[05:09] output to look them together to understand a specific atmospheric phenomena or atmospheric aerosol properties this is a very new inworking
[05:20] uh Tool uh called mapping uh through API where we can actually map the aoso data from aeronet from all around the world
[05:31] uh on a map uh more recently aeronet data has been actually Incorporated uh into NASA worldview tool anyone who is using
[05:43] satellite data for any of the application uh they are familiar with the NASA world view tool is one of the
[05:49] most popular tool to visualize uh near real time satellite data and aeronet has been just added to
[05:58] that uh these are little bit more on data API people who are more data savy if they wants to access the data in more
[06:06] automated ways API is the way to go and this is the part where the we have some uh Jupiter notebook in Python
[06:16] which we have put out on GitHub uh they perform different operation and my colleague uh Peter uh will actually go
[06:25] over this part uh some example what we can do using those Jupiter python codes uh so you can do the map in different
[06:35] projections you can do the time series you can do some kind of a tile plot showing over different time of the
[06:43] window you can do some Trend analysis uh simple or using annual main numbers uh calendar plots so we have uh several
[06:52] python codes which do these task and finally uh aeronet data how we actually collocate in a space and time with
[07:02] satellite data in this case uh we have an example code uh which does this for the vi data which will show and
[07:10] demonstrate using the jupyter notebook uh these are some specific details how to connect with our code and
[07:18] uh so on and so on we have also included couple of slides uh to guide you to
[07:24] through to get some the aoso data from satellite because in our last code we we use the satellite data so we just want
[07:31] to make sure people are aware of satellite data although we assume anybody who is comparing aeronet and
[07:39] satellite data already have good understanding where to get the satellite data again on the satellite data specific part okay so I think that's all
[07:51] those slides are and before I move on to the actual uh demo let me take a pause
[07:58] for a um for a few seconds uh 10 seconds so that people can uh get into their
[08:05] browser and uh get ready to walk along with me okay great so before we start on the
[08:17] web demos um let's find the aeronet site so it's easy to remember the aeronet website it's a. gsfc nasa.gov but if you
[08:29] cannot uh the best way to do is just search aeronet NASA in the Google search engine or any other search engine you
[08:37] like and hit and the first one will come up as error Soul robotic network homepage and if I click on that you will
[08:46] reach to this page now let's me make this little bit bigger in terms of fonts so that everybody is able to visualize
[08:55] see that more clearly so when you go to this website this is our homepage on the top we have different
[09:05] components of aeronet which we talked about in part one uh this gives you a little bit introduction about aeronet
[09:13] again we talked about this all in part one and describe what different component does uh this is the map
[09:21] showing all the stations and if you come on the bottom here we update this particular section with with the news
[09:30] and announcement so for example NASA AET data recently added to the world view which I talked earlier uh is the news
[09:40] item here we have some specific about uh maintenance issues for people who are using data on regular basis we have a
[09:48] big meeting coming up in September so that announcement is here we have a newsletter so that announced so anything
[09:56] sometime we also put out some quick analysis on interesting aerosol events which are happening so this is from the last year
[10:04] when Canadian Wildfire actually happened and lot of smoke was transporting here in the east coast in the US we put
[10:12] together how aeronet is actually measuring those smoke uh Aerosoles in the atmosphere and how it is impacting
[10:20] their quality in the eastern coast so there's a lot which we put here time to time so anybody who's really looking for
[10:27] this aeronet data watch out this space for new and updates information one more thing I want to
[10:34] point out uh we have a list uh so on homepage you can see this yellow highlighted part so if you are
[10:42] interested in receiving regular uh updates about aeronet and any uh specific things through aeronet uh you can click on that link and join uh uh
[10:55] aeronet list ser and you will get in regular updates uh from team on the left you will see different
[11:04] parts right so you have networks campaign collaborators data Logistics all different things are there listed here okay so I will go over some of
[11:15] these uh more more detail but let me go through the homepage first this section is where the
[11:25] aeronet aeronet data section so anybody who's interested accessing data or displaying data this is the section to watch the panel
[11:34] vertical panel on the left side where you have visualization tool we have the data display download in different ways
[11:46] uh and these are divided into different types of data sets which we talked in part one so these are direct sun
[11:53] measurement aerosol Optical de these are inversion data product like single sking ELO and other things uh we have some
[12:00] other things also like solar flux these are the ocean color data which we talked about aeronet OC these are the nighttime
[12:08] data using the lunar and then we have some other Cloud mode which we have not talked in more great detail but these
[12:16] are some experimental data sets Okay so before we move on let me show you one of the thing which often
[12:25] people use specifically people who have used a lot of data so one what is we called is site list okay so if you click
[12:34] on the text format then you will get a list like this and this list combines all the sites aeronet ever has created
[12:44] so it has site name the first one and then the longitude and then latitude and then the elevation in meters so this
[12:53] site is generated I think every day uh and it is get updated so there are if you look counts I think there are 1,600
[13:01] some odd number of sites which ever created so this is this can be a good source for people who want to analyze
[13:08] global data sets the site list is also available in Google Earth format so if you want to download that and display in
[13:16] Google Earth you will see all those uh dots all over the world and if you click on the all list
[13:24] you can get that the same list in Google Earth format or text format by year so you can generate this list by any years
[13:34] so let's click on uh 2024 and then you will get a list like this this list is very similar to what
[13:42] we saw earlier but in addition to those station information it also has information in terms of data
[13:51] availability so the the way data ability is displayed we have done in one way so for each month we have set up the flag
[14:00] one or zero so if there is a data available for that particular month it is saying one if there's no data
[14:07] available then it is says zero so there is a this flag for each month is available and this again can be very
[14:14] useful for people who wants to analyze and understand how much data is available from particular side on
[14:21] particular year again there are so many list here uh people can browse through okay so let's go back to the uh
[14:31] homepage after browsing those list now first thing I want to go over is called what we call site information so again
[14:41] on the left side panel if you click on the site information page you will reach to this
[14:50] page now you will see a notice here that if you want to stabilize a new aeronet site if anyone is interested in getting
[14:59] a new aeronet site near them uh they can contact us uh and we can see if aeronet
[15:06] just remember um every we cannot fulfill every single request there are so many factors which determines where we will
[15:13] put theet a station so uh but this is a way to uh start the process whether it
[15:20] is possible or not now we have a similar map as we saw on homepage this map is very uh inter
[15:29] active you can zoom in zoom out any parts of the world uh there are four buttons on the top uh by default all the
[15:38] stations are displayed but you can also display active stations so remember in part one we talked about that although
[15:46] there are 17 1800 stations dis deployed during entire time window of aeronet but the currently about 600 stations are
[15:56] active so out of all if I just click active then these are the sites which are active in last one year sites which
[16:05] we the way we Define the active sites are sites which have produced any data in last 365 days that's the side we call
[16:15] it active then there are inactive sites which have not produced any data in last one year and then there are some sites
[16:24] which are limited so these limited sites are created sometimes to test the instrument or to make measurement for
[16:32] just for a few days uh sometime they can be very specific to fil campaign or something but they are very very rare uh
[16:40] limited sites I think we Define them uh if the data is available for less than 10 days then we don't call them
[16:48] permanent or campaign site they comes into the limited site page so the most important one is the active site page
[16:56] now on the bottom of this map you will see a list of all the sites okay and as
[17:03] you start zooming into the map you will notice that that station list also start reducing it only shows the list which is
[17:13] displaying on the map so I'm going to go to the NASA guarded area that's where we are located that's from where we are
[17:21] doing this webinar Series so I'm going to I have already clicked all the active sites so this is the area where
[17:30] we are located and if I go down to the map then you will see there are only nine stations
[17:38] which are displaying in the map which we have and this particular site is the one where we are located it's called gsfc
[17:48] there are two sites actually on the same location one is called gsfc which is the oldest one and more recently we started
[17:56] a gsfc polar which is a polar instrument uh on the CED site so I if I click on the gsfc you get to this
[18:07] page let me zoom out a little bit so that you can see what is the on then
[18:13] page you have site name you have coordinates and the elevation same information as we saw earlier in the
[18:22] file list here is the picture typically we we have two three pictures so this is our aeronet since it is a calibration Center
[18:34] uh we have uh mounted many many instrument here for calibration purpose which get swap out on a daily basis
[18:42] there is some size description there are some information about if you want to contact the pi site manager there are
[18:49] some information here so for each site we have this information so let's go back to the map here now as exercise
[18:59] I want you to take 2 minute of your time time and zoom in to the area where you are
[19:08] physically located and find a site which is nearest to your location and note down the name and piece of pen paper or
[19:16] on a uh notepad on your computer and that is side we will use throughout this rest of the uh presentation to actually
[19:25] evaluate or download the data so I'm giving 2 minutes time for everyone's to look browse through this map find the
[19:34] site Which is closest to you and note down the name thank you e e e okay great so I hope everyone uh with
[21:45] internet connection uh you have uh ability and you have explore the site information page and find the nearest
[21:56] tonet site which is close to you okay now let's move on just remember that site name and we'll use it later on
[22:05] now let me also go through some of the other pages on this website uh we have a
[22:13] uh link which is says campaigns so again I talked about this in part one aeronet supports several NASA and non NASA field
[22:25] campaigns specifically designed to make a measurements sometime for air quality applications some for time to do the
[22:33] climate application some time to understand more atmospheric uh behavior of atmospheric aerosols in chemistry and um energy budget so these measurement
[22:44] aeronet um has been taking to support this field campaign since beginning of the program as you can see in
[22:52] 1993 and since then it has participated in many many uh F campaign uh starting 2011 we started deploying this high
[23:02] density Network called Dragon uh the most recent one we deployed uh aeronet is in the Asia AQ so I'll just give you
[23:12] a flavor of how this campaign information looks on our web page so once you click on this campaign page you
[23:20] will get to that you'll have some background information about the campaign itself and then uh we will
[23:27] display and provide the near real time data to actually not only people who are doing The Campaign on the ground but to
[23:37] the community as well and this data helps them to actually do flight planning if they are flying aircrafts uh
[23:45] they can actually uh change uh their uh flight plans based on where the aoso events are happening based on their onet
[23:54] data which becomes almost in real time available available so again during Asia AQ we deployed in South Korea Philippines Taiwan and
[24:04] Thailand uh these are the locations specifically actually done just for the field campaign there are additional sites which you don't see here which are
[24:15] permanent sites in that particular regions of the world so this is just example here from the same page you can download the data
[24:25] also um you can also get the list of uh location list here uh there's a map where the new sites are displayed in
[24:35] blue color the permanent sites are displayed in green color very similar to what we saw earlier and if I just click
[24:42] on the campaign then you will just see the blue color sites which are specifically uh falls in the and then
[24:50] there are some more details contact information so very important if you interested in field campaign data sets
[24:56] uh this is the uh aeronet contribution to those uh campaigns okay now let me go to the
[25:04] operation operations is a specific page not may not be so much useful for the data users but this
[25:15] is more for site managers and principal investigator of each site people who actually manage the instrument on remote
[25:25] locations at universities or Institution misss or remote or individual houses this is for them and what this does is
[25:35] it provides a lot of information about the health of the instrument so if I click on for example instrument status
[25:43] let me click these are the different aeronet networks partner networks as remember we talked about that aeronet is
[25:51] a networks of networks so these are the different networks so if I just click on the aeronet then you will see all all
[25:58] the instruments which are actually deployed and you you'll see many many stations many many with the gsfc because
[26:06] these are all deployed for calibration purposes so you will see a lot of specific details about those instrument
[26:13] again not so much useful for the data users but for more for site managers in pi okay uh now one of the most important
[26:24] uh thing is about the system description we talked about very briefly in part one what kind of measurements uh sun
[26:32] photometer or what kind of instrument aeronet use uh here you will get lot more details about that so you can click
[26:40] on the measurement system and you will learn about all that SML instrument what each number in that name means different
[26:49] wavelength combinations all the specific things including the communication um in the calibration section you will read about about uh
[26:59] entire calibration process which I have briefly gone through in part one but if you are interested in more details you
[27:07] will get a lot of details here there is a operation page uh there is a data transfer page
[27:18] you will get lot details specifics uh if you're transferring data through GSM or Internet or satellite uh we have a data
[27:27] process in process setup how the data are processed we get the data and then it get to different and then finally the
[27:35] data distribution which I will go over a little bit more okay so that is what system description takes you now let me take
[27:46] you to one more important topic is logistics again this is not so much for data users but this is for people who
[27:55] manage those site uh but it has a lot of important information so we have all the manuals of all the different models of
[28:03] sun photometer which we ever used we have several videos to travel shoot the instrument to install the
[28:11] instrument so these are very uh instructional videos uh we have some tools uh how to trans how to actually do
[28:21] some data transfer uh we have some we do lot of shipping as I mentioned earlier in the part one the syst system has to
[28:28] come every 12 to 18 months to NASA Gard or any other calibration Center so there's a lot of shipping happens back
[28:36] and forth uh from the site to one of the calibration Center so there's a lot of information here uh again not not so
[28:45] much useful for the data users but for the site managers and Pi okay one more thing publication uh since the beginning of
[28:55] program there have been a lot of uh uh research article which uh are published by aeronet team and aeronet partners all
[29:03] around from all around the world and we have tried to Archive them here most of them you can directly get to the links
[29:11] some of them are very old one and you can actually find through the search we also have link to the quarterly
[29:18] newsletters uh we also uh have several reports um on aeronet different data setes some details uh about a specific
[29:30] version a specific products there's lot of uh reading material available for people who wants to use the Aon
[29:40] data okay so this is main parts I have gone through there are some other things which you can go over in your own
[29:49] they're very uh clearly written now I also want to show quickly about ocean color which we talked about aeronet OC
[29:58] in part one uh this is a specific page on that they have their own news uh although it's component of aeronet but
[30:07] it operates only over ocean their sites their data downloads all the details are there about aeronet similarly we have
[30:15] for maritime aerosols which I discussed earlier uh using handheld microtops uh this is a uh old paper but it describ
[30:27] the men Network very clearly uh we provide the data sets here again all the data sets are produced here and they are
[30:37] named based on the ship cruise and time window when it happens and you can download this data actually so you will
[30:45] see a long list of shift Crews from where we collect the data and the data are reported
[30:52] here okay so I think that kind of completes the first part now I'm want to get into the data
[31:01] part part so aeronet data access right so let's start with for optical death because that is the most common parameters used
[31:13] um from aeronet so the first one is called Data display I will click on the data data display and it will take me to this
[31:25] page so on the data display now again this map is there you can actually filter this map in many different ways
[31:33] how many years of data are available what level of data you want uh you can also pick individual years you can pick
[31:41] month day you can pick active inactive sites all kind of things you can do here but I'm going to just look the gsfc site
[31:50] and then what you can do is when you're walking through with me you can select the site which you identify earlier is
[31:58] the nearest site to your location so instead of gsfc you can pick that site yeah so I'll just so I pick the
[32:07] gsfc site I click on that the map shows the location of the site and then when I
[32:15] click on the gsfc it will take me to the data display page for the gsfc site so once you click on the GSF site
[32:26] you will come here the page look like this okay now let me walk you through very quickly
[32:34] so again this is the site information page link which we saw earlier here there some details about the people who
[32:41] manage the site here are some statistics on the data avability so from this particular site we have 25
[32:50] years of data record started in 1992 93 92 993 and currently data is so the total number of days are these almost 30
[33:01] years of the data are available from this particular site data arranged in different years you can select any years uh these are
[33:10] the parameter which you want to display you can select I have selected the aerosol Optical depth first and these
[33:16] are the different levels again level one is the cloud raw data without cloud clearing level 1.5 or cloud Clear
[33:24] automatically Cloud clear data and level two are quality assured and calibration applied so for on quantitative purposes
[33:34] we recommend that users use level two data you can display daily averages or All All Points um so let me go
[33:48] to level 1.5 data because that is available in real time okay level two data takes 1 to two years and this this
[33:57] is is 2024 2024 August and today is August 2nd right so this is showing August one and August 2 data and
[34:13] then this is just for the August 2nd these are the time in uh UTC so you can see these different lines
[34:23] shows aerosol Optical depth corresponding to different wavelength which are represented here aod at around 500 nanometer is 344 which is actually
[34:34] pretty high for this location so there's a wildfire going on in the west coast which may have some influence
[34:42] transported but also during summer time sometime a can be high uh because of the hygroscopic effect on
[34:52] aerosols on the bottom you have several link you can download the data directly from here uh or there are other ways to
[35:00] download which I will show you so this is what the first visualization looks like now let me go to the download tool
[35:10] next the interface is very similar okay you can select any site so since I am going directly to gsfc on the search box
[35:21] I'll click put gsfc click on the gsfc and then we'll take once I click on the station it will take me to the
[35:30] download page and you can see various options here okay you can select the date range so I'm going to just select
[35:39] 2024 for a sample download from January to December 2024 and then there are different types of measurement which you can download
[35:50] which we talked earlier and you can get now what you can do here is you can click on this data description page and
[36:00] you will get description of all the things which are written there how the daily averages are calculated how the
[36:05] monthly data are calculated what it means for different parameters all the raw data and inversion and so very
[36:14] specific and details informations are actually provided on this page the unit page gives you the units of all the
[36:22] parameters which we provides so you have a specific units for each of those uh parameter which we
[36:32] we provide so just for sake of uh demo I'm going to choose level 1.5 uh aerosol Optical depth
[36:41] precipitation water and then angstrom parameter and then I will choose all points means all the measurements which
[36:48] are taken and then the daily average is just the daily average so to keep things faster I will choose daily average level
[36:56] 1.5 1.5 January 1st to December uh 31st 2024 and click on the data download Once I click on the data
[37:07] download you will get to this page which is basically aeronet data policy so since aeronet is a
[37:17] collaboration uh among many countries many individuals um we try to make sure that people who manage the individual
[37:26] sites uh uh get credit when their data is used for publication for research purpose and that's what exactly this
[37:35] data policy page shows how to refer the data before you use the data and research and Publishing uh do you want
[37:44] to give some credit to the people who are managing and collecting the data uh from that particular station believe me
[37:51] it takes a lot of efforts to maintain these instrument they often gets uh problems and the site managers have to
[38:00] continuously watch for them and make sure the data continuity remains so that is the whole purpose of this data policy
[38:06] page uh you click accept and then you immediately it downloads the file it's the files are downloaded in this form
[38:17] this is the uh initial date and this is the ending date of the data and the site
[38:23] name in level 1.5 so these are downloaded as asky file uh I can open this using Excel or text I will just
[38:34] open in the text here just to show you how it looks but you can also these are
[38:39] basically CSV files so you can easily open them in a Excel spreadsheet this is the header of the
[38:46] file you will see all the details about the data sets different columns so you will notice there are many many
[38:53] different columns presented here uh but this provides you everything you need to use the data for various scientific
[39:03] research or application purposes so it's very simple format very easy to use data and very easy to
[39:12] download the data okay now let's say you want to download all the global data for the entire time frame everything together
[39:23] then we have this as well this is called download all the data of all the sites all times 10 and they are provided in
[39:30] two different format one is star. gz and then just the zip format so depending on your requirement
[39:39] you can uh download any of these uh they are again separated by All Points data daily average or monthly average and
[39:48] again these are different uh parameters these are SDA AOS Optical whatever you need and again users guides are also
[39:56] given here so this is another way to download the it's huge file when you click on the download you will get a
[40:02] several gigabyte of file so it's it's a little bit bigger file but you get everything into single
[40:09] file climatological tables now this is another piece of information which we provide again very similar interface uh as you see
[40:20] earlier what it does is it provides climatological values for each site again this is the data policy I'll just
[40:29] say accept and then you get to these tables so what these tables provides you are the climatological mean for each
[40:38] month and year so this is entire time window for each month how the aerosol Optical depth is and this is yearly
[40:48] mean8 and then this is one standard deviation this is angstrom exponent this is standard deviation in Ang from
[40:57] exponent this is precipitable water vapor this is standard in water vapor these are the number of days which are
[41:07] used to average get this value and these are the number of months for which uh annual data
[41:14] average so this is for the entire time window but you can also get into each year this is 1993 and remember whenever
[41:22] we don't have the data we don't provide it we don't try to fill it so if any of the month is missing yearly
[41:30] means are not calculated user can calculate their own annual mean but we don't provide it here and you can
[41:38] download the data using these uh files which we have here overall download combined downlo so this climatology is
[41:47] very very useful they are calculated with lot of precaution quality control and people who are interested in Trend
[41:54] analysis uh they can actually get this quantities easily okay uh so now the next thing I want to do is click on the web
[42:09] services so on the web service we have uh data access through API again different types of the data we are going
[42:18] to look into the aod and SDA these are different parameters and their explanations in the API okay and in the bottom these are the
[42:30] different examples how the apis are called so let's say I want to get level two level 1.5 data from all sites
[42:40] available from the aod right or I want to get level one data uh for one of the
[42:46] site so let's click on this particular link this is a web link which you can actually Des uh
[42:52] Define so instead of what I will do is to get the data for the guarded site I
[43:01] will change in the web link link site equal to card site instead of card site my site name is gsfc and you can
[43:12] change to the site name which you have noted down earlier so once I change the site name I rerun and that's what now
[43:21] the site is gsfc and this is for 2,000 data now instead of 2,000 I'm going to get the data for
[43:29] 2024 so this is 2024 and then now this aod 10 is level one so I'm going to change this to a
[43:53] aod 15 equal to 1 it means I'm getting the data for level 1.5 so this is level 1.5 data uh all the
[44:05] points uh which were given for that particular this is gsfc this is the day month uh and this is since we are doing
[44:18] average equal to 20 it means it is going to give me daily average if I do average
[44:24] equal to 10 I think this will give me all points so this gives me all point now this API is very useful people who
[44:32] wants to access data in more automated ways we will show you some example how we use this API in Python code with when
[44:39] we get to that part okay so I hope you are able to follow along and get up to this point
[44:48] let me go back to this website again so this was Data display and data download part now you will notice that although I have
[45:00] only gone through aerosol Optical depth but these similar capabilities are built for each type of data sets which you can explore
[45:09] in your own time now in the next few minutes I will quickly walk you through two more tools
[45:18] which we have one is called map Explorer uh this is a I'm going to reduce this is a visualize the data and
[45:29] it can visualize either near real time data or daily main data so select a mode it's near real time and then if I select
[45:39] the daily then this day night flag should go away and you will see let me select from
[45:48] yesterday so you can actually map Theos Optical depth over the entire globe and let's since we know already there
[45:58] are have been a lot of fires in the US currently going on so I will just go
[46:03] back uh few days and let's look uh July 26 for example example uh so this is July 6th 202 uh
[46:19] 2024 you can see some of the stations let me zoom in to this area they are really
[46:28] really High aerosol Optical depth in this particular part of the the gray area uh stations shows inactive sites on that particular day
[46:38] and I can turn them on and off if I want if I don't want they can be turn
[46:44] off now if you Mouse over any of these sites you will see specific details about the site it will can take you to
[46:52] the data page also from here but if you click on them you will get a time series
[46:58] of the data from last 30 days so you can see how on this particular side aerosol Optical depth was so low in the earlier
[47:07] in the July aod values were less than 0.1 very clean condition as soon as fire started a started jumping up up and then
[47:17] it reached to all the 1.24 and these are daily mean values if you look hourly values they can be much more
[47:25] higher so this is a nice tool to visualize the data if I do on the near real time basis then it basically takes
[47:34] the current time and display the data which are available in last one or two hour time window and you will also notice that
[47:44] this also displays a day night uh separator so the area which are kind of hidden Gray colored they are nighttime
[47:54] and this is the daytime so AET is an optical measurement uh most of the our sun data are during daytime there are
[48:02] some night data which we don't display here but we do have night time data as well so again very nice Tool uh if you
[48:10] want to visualize data on the map okay now let me go to the Synergy tool tool now so we can click go to the data
[48:20] visualization click on the Synergy tool here uh I want to spend a lot of time but again you can do similar things you
[48:28] can choose the date time site information and then you can select different things from here what you want
[48:35] to visualize some of them uh may not be readily available and some of them may be available so
[48:45] aod inversion products right so you can display select again what parameter you want to display you can choose water ER or
[48:58] angong angong parameter so you can actually decide which parameter you want to display here are the size distribution reflective
[49:07] index or other parameter which you want to to display so for this particular date probably we don't have the data
[49:15] available so let me switch to level 1.5 and then here also level 1.5 then let's pick another
[49:33] date yeah now this is for January 14 so you can see um some other parameters so this is reflective Index this is size
[49:46] distribution yeah so if you click on that you'll get a size distribution basically it's showing that there are
[49:53] two modes in January one is do minating in the smaller size particles and one in the coarser size particles and depending
[50:02] on time of the years this size mode can change so let's look at the size mode just now what is happening during the
[50:10] fires and we have some impact of fires right so size distribution now you can see a little
[50:17] bit different now dominating mode is the fine mode smaller size particles whereas the course mode is not that much of
[50:25] domination so this this is also a good Tool uh to actually look several data sets together okay great uh so that was uh
[50:39] aeronet website tools and data download now I'm going to pass along to my colleague Peter uh he is also part of
[50:47] aeronet team and he's has developed some of the Python tools to visualize map do time series uh and do inter comparison
[50:58] with the satellite data uh so he will show you how to access these codes and how to run them uh using Google collabs
[51:06] so for this specifically I'm hoping everybody has Google account so please sign in your Google account if you have
[51:14] not uh because we are going to use Google account to uh do this so Peter take over thank you pan uh hi everyone my
[51:26] name is is Peter gorov and I'm aon's new scientific programmer I developed the following Google collab codes in the
[51:32] infancy of my career and we think those codes are very important because it gives people outside of our Network the
[51:38] capability of interacting with AET data and producing some cool plots so there are five codes that we're going to go
[51:46] over the first to read and map aeronet aerosol data onto a global map one of them produces a series of static plots
[51:54] that can be saved uh onto your machine while the other ones produce more interactive visuals with some widgets
[52:01] another script accomplishes a similar task uh except it uh uh produces except it reads inversion uh AET inversion data
[52:12] um and then another script reads aerosol data once again but it instead produces a variety of Time series plots and the
[52:21] final script collocates aeronet aerosol data with the VR satellite data and then does a comparison so first code we're going to
[52:31] open up is the read and map AET data or aod and just note that uh this uh these
[52:39] codes are on the AET GitHub and they're open and the link to this repository is I think on slide
[52:48] 17 okay so now that we have uh this code open so the purpose of this uh code is
[52:56] is to read and map airet data directly from our web API this data includes our aod measure measurements taken with
[53:05] different wavelengths as well as Anam exponent exponent parameters uh different parameters can be specified by uh by the user such as
[53:14] the geographical box of the coordinate box of latitude longitude um the type of average whether it's daily or
[53:22] hourly um the time frame uh Channel Etc and the output of this code is those geographical maps with the
[53:31] circle markers and color bar which represent the average daily or hourly values of the products the main use of
[53:37] this tool is to track the movement and density of aerosols over time and this tool was first deployed in June of 2023
[53:44] and mapping the aerosols produced by the Canadian Canadian wildfires um then this time we focus on the time frame from July 25th to August
[53:55] 1st where we would track some of the wildfires that are affecting the west coast of the US and the spreading
[54:03] throughout so this module makes use of uh certain um uh certain libraries so the first thing that we would have to do
[54:12] once we run the script is we'll have to mount our Google uh sorry we have to mount our Google drive onto this collab
[54:19] notebook otherwise if we do not do that we're not going to be able to you know save our our produced plots so you just
[54:27] have to click continue make sure you have a Google account as pan had previously mentioned and these are some of the
[54:35] libraries that we make use of uh the numpy library is for array manipulation pandas is for um data cleaning and data
[54:44] processing uh some of our map features such as coastlines State boundaries Etc are done with uh ctie and in addition to that uh some of
[54:56] the projections that we use such as the orthographic or the plate carry projection those are imported from the
[55:03] ctip library as well beautiful soup uh kind of an odd name but that one uh is a
[55:10] is the most popular web scraping library from python where it would access a website send a request using the request
[55:19] module and then it would read that data that text file on the website um as a text file
[55:27] and then geopandas is similar to pandas except it's for geographical data so now we've gone over some of the
[55:35] relevant libraries and we've mounted our uh Google Drive the next part will be the input parameters so how the web API
[55:44] works is we have some parameters and those parameters such as the date the level data the uh features
[55:54] the coordinates there used to construct a URL hyperlink and depending on those parameters it it'll produce a different
[56:03] hyperlink a different sorry a different URL that contains that uh relevant data so our initial and final dates are in
[56:12] four digigit year two digigit month and two-digit day format our level as Pavan mentioned a has level 1.0 data uh level 1.5 which is
[56:23] U Cloud screen and quality assured then level 2.0 data is in addition to uh quality assured in Cloud screen it's
[56:31] also um calibration uh verified the average type um so we have three types of averages here either we
[56:39] can produce daily plots which is the average for the day we can produce by hourly bin or the time average is the
[56:49] total average for the entire selected data frame the DAT time frame which will produce only one plot
[56:56] um these two variables viz Min and viz Max they are the color color bar bounds so we've defined that aod value greater
[57:06] than than 1.0 is going to show as a magenta on the color map anything less than zero would
[57:13] show up as gray or unavailable and anything in between will will follow this color pattern where for low aods
[57:21] will be uh dark green for high aods it will be dark red and then anything in between so um so after defining this
[57:31] color bar uh our final some of our final um parameters for data aggregation will be selecting our feature and our
[57:41] channels so if you would like to select aod or anr exponent we either do one or two otherwise um um and then after that
[57:52] is done we select um our specific Channel so we have dozens of different wavelengths but the most popular aod
[58:01] that almost always has data is the 500 nanometer and then here's the bounding box so uh they have to be in a decimal
[58:12] format because the uh web API does only take a um a decimal format when constructing the links so we can run
[58:23] that and um and since everyone can download a copy of uh this this code they they're free to do so and and
[58:33] everyone can change their parameters as they as they wish this next cell uh what it does is
[58:40] it validates some of the data uh and then and It prepares that those inputs for constructing the link so first um
[58:49] this block here takes the initial and final dates and extracts their year month and date components here uh in this block we take
[59:01] the user input of the level data and we convert it to an integer number so if it's level 1.0 it'll become 10 if it's
[59:09] level 1.5 it'll become 15 the purpose of that is the web API reads it uh in in
[59:15] such a way and then the same thing some the some data verification for vimin and vimax make sure none of them are
[59:25] negative make sure they're not flipped and then this is the last verification check which prevents users from selecting a the current year and
[59:33] level 2.0 data because as pavon earlier mentioned it takes a couple of months maybe up to a year for level 2.0 data to
[59:40] show show up and after that is done we construct the URL as is seen here from all of the
[59:47] input parameters and then we pass this URL onto this request module which sends an HTTP uh request using the web and uses the
[59:59] beautiful sup package to convert that to a text file that is saved so that is uh after that is being saved it will the
[1:00:11] file would show up onto your U uh Google Drive so once that is done we read that
[1:00:20] text file and we assign it to a pandas data frame so data frame is kind of like
[1:00:27] um uh it resembles an Excel file it has column and then uh this is where the some of the data manipulation begins
[1:00:36] because our our date and time uh format for era data they're little different than uh the conventional ones so this
[1:00:46] block of code basically converts them to Python's daytime format which follows a four digigit year-2 digigit month- two
[1:00:53] digit day for erret data it's using two digigit day colon two digit month colon four digigit year then depending on the average type
[1:01:03] that we specify we group them based on the eress site and date if it's daily if it's hourly it's site date and hour and
[1:01:13] if it's uh for total average we just group everything by the site and the numeric columns argument pretty much
[1:01:21] uh make sure that string columns do not get get aggregated otherwise that would cause an error because we cannot average
[1:01:29] non-numeric non-numeric columns and there's a check here that if for example if um our data frame is is
[1:01:40] does not exist or if there is no data they will print the message that there's no data to pars and then you will prompt
[1:01:45] the user to retry with different parameters so now we have some data so the next uh after we have our data
[1:01:52] processed it's time to select the data that we want to work with so this uh this cell this particular cell does
[1:02:01] exactly that it extracts the all the aod columns and the uh it sorry it reads all the aod columns or the action exponent
[1:02:09] columns then it matches the proper columns based on the user input so depending on if your feature choices aod
[1:02:16] or if your feature choices anram or um what um aod value you use it parses through the file and it matches your
[1:02:27] input with the proper file and at the end it isolates the data frame to just include the S side L latitude side
[1:02:36] longitude and the um aod column or the acram exponent column after that is done we produce a uh we first things
[1:02:49] very important to drop all values that are um undefined and to reset the index so resetting the index does remember we
[1:02:58] Group by error site and date for daily averages to do further manipulation we have to reset the index so we can
[1:03:05] include the site and date back into our data set so now we have data set that is
[1:03:12] ready for plotting so here we make use of uh all of those uh plotting packages such as ctip and matplot
[1:03:23] lib then we produce those plots for each day so now um the coast should generate a plot for the
[1:03:32] first day which is uh July 25th and then it will keep loading until it goes to um
[1:03:39] the last date which is August 2nd so here we have um for July 25th you can see some high aod valleys in the
[1:03:47] Midwest and here's some some forest fires on the on the uh on the western side of the US around ID in
[1:03:57] Montana and some more for that day here's on a 28 they're spreading to the north Great Plains same for
[1:04:07] 29 and 30th and here's where um they're kind of like subdued and they've already pushed they've moved a little Eastward
[1:04:15] you see some higher aod valleys around the Great Lakes region and now here um the aods are uh a
[1:04:25] values are pretty much uh [Music] stable so that was for the plate carry projection and a similar thing can be
[1:04:35] done except in the orthographic projection uh which some people may um prefer because it gives you the the it's
[1:04:46] it's like you know looking at a globe instead of just a map right so uh the computational expense is a little
[1:04:56] greater for for this type of a projection so it will take a little longer for the plot to produce but
[1:05:02] should still not take that um big of time so this is I have to zoom out a
[1:05:07] little bit so everyone can see so we have for the 27 28 29 30th 31st and and after uh the scode finishes running
[1:05:32] everyone has the opportunity to uh decide if they want to save all these files all these files that have been
[1:05:40] produced produced here would like to download as a zip file or not so I'll say yes so they will
[1:05:46] compress compress them could have chosen a more creative name but feel freid to modify the code and
[1:05:57] and put a different different name for the the output and I'll just put in my downloads folder and it's going to be
[1:06:09] there and let's see okay so uh that is the end of the read and map AET code so
[1:06:16] now um we will go back and and launchy I launch a different one so let's try the uh the more
[1:06:32] interactive code for reading and mapping ER the data so the only difference between the this interactive code and the previous
[1:06:41] code is that this one makes use of um widgets from the from Python's IPI widgets Library as well as mapl Libs
[1:06:50] animation um package so um it's the same procedure as always we Define the um same input parameters we produce the the link the
[1:07:01] exact same way um we process the data in the exact same way and as well as uh the anram exponent
[1:07:09] aod selections the only difference is that uh in terms of the plotting at the end we get uh this
[1:07:20] map which it's one plot but it works like an image Carousel where you select the slider let's put the
[1:07:28] 30th there's going to be a a few second delay depending on how big the data is but that would go directly to the
[1:07:35] specified date and similarly this is done for the orthographic orthographic uh projection it's a and again if you uh
[1:07:50] if you define uh hourly average then actually what produce two sliders one for date and one for hour but for
[1:07:59] demonstration purposes we're only going to stick to date so our plot has been produced and we can select let's say
[1:08:16] 28 and and here's the plot and the second piece of uh interactive widget that decided to use
[1:08:26] here is an animation similar to a a gif except um there's some uh control buttons such as uh pause play uh we can
[1:08:44] either run it to go through ones or we can just we can Loop it and we can also adjust the speed of
[1:08:55] you know how how how fast the um images switch or you could also go in reverse I think reflect
[1:09:06] was yes reflect is where you would go in reverse reverse yeah and then same thing for the
[1:09:16] orthographic uh projection and um there is no U I did not put in the script to um uh save the
[1:09:26] uh I think uh this interactive code is better for just the purpose of displaying and viewing uh the data which
[1:09:35] is why I did not put um anything to save it but yeah this uh this will work the
[1:09:40] same way okay so moving on to one of the more recent developments sorry uh the more recent
[1:09:52] developments it is the this script which reads and Maps inversion products so this is no longer aod this um runs uh it
[1:10:04] plots some inversion products like single scattering uh uh albo or um like a single scattering OBO or aod
[1:10:15] coincident inputs or Extinction and absorptions Etc and this and we can select our inversion type whether it's
[1:10:22] Alma counter or hybrid and we can specify again our wavelength of interest and similarly like before uh there's
[1:10:30] some data validation and uh constriction of the of the data year month or uh sorry constriction of the converting the time
[1:10:41] stamp to individual year month and day constructing the hyperlink and then reading it through beautiful soup and so here I combined all the data
[1:10:53] processing and plotting into one big cell so it should start plotting some of them so uh this particular the script
[1:11:03] just because I combined everything in one cell it would take uh a few minutes to run maybe between three and four but
[1:11:11] at the end it would uh produce uh it would produce everything for you uh so we have for each hourly
[1:11:20] bin I guess this is why it took a little long this time because instead of daily averages I did hourly average
[1:11:26] for each day so there it is you can see some uh so this plots the single scattering oido at 440
[1:11:37] nanometers each hour and I think it also does it for the orographic projection eventually but you can just take one
[1:11:51] plot Tab and you can see in detail so yeah this uh this script runs same very similar fashion the way
[1:12:02] that uh uh the read the original read and map AET aerosol data Works uh except there's some more data
[1:12:13] validation and um and I've combined all the cells and uh uh together so uh the next uh script we're
[1:12:26] going to run will be for the read and map AET time series so we can just close out of that
[1:12:37] uh can go back to our Google collab okay so now that everybody has that open so the purpose of this script
[1:12:56] is to read airnet data again from the aess API and plot time series graph to visualize changes in uh aod or Antion
[1:13:05] exponent parameters except this time it does not do it for the whole um you know the the whole geographical domain it
[1:13:12] does refer a specific AET site um so again we can specify you know site name uh average type data level
[1:13:20] wavelength time frame and it produces three plots it will produce a um standard um time series graph it'll produce a standard time
[1:13:32] series graph um it will also uh produce some uh calendar uh a tile plot and at the end
[1:13:43] it'll it'll it produce a um an annual variability plot with some standard deviations deviations um over superimpose on the graph as a a
[1:13:56] shaded shaded region region right right so we pretty much use almost the same uh packages uh we have Cal uh except yeah
[1:14:10] cowplot is another package that we have to install that one's different from uh the previous one all the other ones are
[1:14:17] are pre-installed already we have math for um some more complex equations we have uh some other map lib uh
[1:14:29] components like MDES which converts a date time to numeric and then again we'll have to our drive onto the scab notebook just
[1:14:46] quick continue so obviously the only difference of the input par parameters is that um we also have to specify site
[1:14:58] name and actually the web an aess web API you can put uh the site as a parameter and it'll generate a link with
[1:15:06] data just for that specific site so in this case we choose uh NASA GED is gsfc and we're doing it for a period of
[1:15:16] 10 10 years so starting yeah so averages we can either choose uh daily or monthly uh so uh daily averages
[1:15:33] is preferable here because you're also going to get the calendar plots and the tile plots and unfortunately you cannot
[1:15:39] produce a calendar plot with with monthly averages because the purpose of a calendar plot is to show the value for
[1:15:46] um each day so now we read our a URL same data validation as before uh same uh um same
[1:15:58] data processing and same feature selection and at the end for our specific site notice that the a site name is no longer
[1:16:09] there because now it's it's redundant because we're doing that for each specific site so we have the date day of
[1:16:15] the year and the aod measurement da of the year is uh important to have here because uh
[1:16:25] because date is it's it's an object it's not a an integer value so it's going to be difficult to manipulate whenever
[1:16:32] we're doing um counters so the first plot is a Time series graph depending on the average type it will produce either monthly
[1:16:41] average or daily average little clutter here because um again it's a daily average so it's valid for each date and this is over the
[1:16:50] course of 10 years so but we can spot some uh season it here with some of the
[1:16:57] um Peaks and obviously here we know this is during the period where there was a lot of wild fires in Northeast
[1:17:05] Canada so that's that was roughly yeah looks like that's around summer of 2023 and this is where we produce our
[1:17:13] tile map so tile map is let me zoom out a little little bit it it resembles a tile basically uh
[1:17:25] the months are on the y a uh x axis sorry and the years are on the y- AIS
[1:17:31] you can actually specify a monthly average except for the month of January instead of having 30 values it'll have
[1:17:38] one value so just going to look like a less CL tole plot you can spot specific days where the aod might be
[1:17:46] higher and this calendar plot is for again for daily averages only U it would not reproduce if average
[1:17:55] type is not one it's not daily so we wait for it to um produce and it looks like it is done so
[1:18:12] I cannot zoom out far enough to see the whole thing because it's a very large data frame but here it is uh side gsfc
[1:18:21] and not only does it show uh the month and the year it also shows the day of
[1:18:25] the week here that gives us a more clear view we can spot particular days where the aod will be really high and then
[1:18:35] once and again we can see for the month of June the Wildfire season we can see some some of those particularly um High
[1:18:43] aod days and finally is the annual variability plot which again can only be shown for daily averages so what it does
[1:18:54] is Aggregates the data and shows for a particular year what the average aod was at that site and it creates a linear
[1:19:02] regression line along with a standard deviation and we can see the the long-term long-term trend of aods and we can see that for
[1:19:11] the G site it's been the average has been pretty uh consistent but if we generate some plots for um other places
[1:19:21] where where recently the the governments have uh have have um have have implemented some measures to reduce the
[1:19:30] level of pollution you can see that the trends have gone down over the years so again this last part will um
[1:19:40] prompt the user if they want to save those plots to zip folder in this case I would not want to save it and so this is
[1:19:49] it for the time series script so uh now we can try transition to our final script which is the one that collocates
[1:20:00] AET data with V's data let wait a little bit for everyone uh open this one up okay
[1:20:19] so this is this code I would say is probably the most involved in terms of what the user has to do okay um so first
[1:20:29] we obviously want to install some of the libraries here um and while that runs I can explain uh what this code does so
[1:20:38] after mounting the Google Drive continue continue yeah so um this code includes uh so yeah it collocates AET data with
[1:20:53] V's data includes some some functions for spatial averaging statistical comparison it retrieves and processes a aerosol data uh from the uh NASA's lad's
[1:21:04] uh query data query and it also retrieves and process aess aerosol data in a similar manner uh using the the web
[1:21:14] scraping uh capabilities from from the web API but the catches vus has vus uh CH uses the 550
[1:21:24] NM Channel which ARA does not have so for proper comparison we do um some statistical interpolation using the 440
[1:21:33] 500 and 675 channels to infer what the a aod measurement would be at the 550 nanometer Channel and I think we use a
[1:21:43] cubic spline uh in interpolation yep it's a cubic spline correct and after the collocation is done we we produce um
[1:21:53] two outputs one is an Excel spreadsheet with the collocated data and the final one is a um
[1:22:01] visual a collocation plot so uh we use a 5.5 pixel um grid to get those to obtain those spal
[1:22:13] averages and this is the statistical statistical function which where we uh compare the actual and then the
[1:22:22] predicted values and when we we obtain some uh values some metrics such as the bias uh root mean square error and the
[1:22:32] percent error so uh the setting up pass and directory uh this script um what this script does
[1:22:48] is is um so in our case we made it a little a little easier we have put our query file
[1:22:56] our last query file into our um GitHub so now we can just read the file directly from the
[1:23:02] GitHub and uh what that file contains is a URL a link to every all the net CDF
[1:23:09] files in our query so in this case we chose uh July 15 through July 31st and we focused on the region
[1:23:19] of South and Southeast Asia uh so that's all the aod 5509 met measurements it then constructs of the file name uh it Con it
[1:23:31] sets up some of the working directories and this is this URL is the one where um those measurements are taken uh are um
[1:23:40] are obtained from so a running disc code is more involved as it requires herb data credentials and the ability to use
[1:23:47] the NASA Lads archive to query cloud and er website the user will need to generate a token
[1:23:55] uh which serves as authentication to download and access that data that token is unique for each user
[1:24:02] and it expires every 60 days and that token is actually specified right here after the uh Bearer
[1:24:10] attribute attribute so once logged in and Earth data the token can be generated by clicking the generate token menu um which which Pavan
[1:24:21] had had went over and we inserted in at line six here sorry not line six uh that this is
[1:24:31] cell cell six so um so in this cell we download and process this uh vs data so the data set is being um read uh
[1:24:46] we calculate the moving averages uh we uh we obtain the latitude and longitude we format the data and time and and at
[1:24:55] the end we we concat all the data sets together because again uh this does this produces one data set
[1:25:05] per um per hour or per I think it's per hour correct so so um so depending on um the length of of
[1:25:17] the daylight they could be up maybe anywhere between eight and 14 files per per day and each of these net CDF files are
[1:25:28] saved in your local drive my drive and we can see our set workshop and we can see the uh the r
[1:25:38] erdt query we have all those vus files indeed saved for that time frame so now we're done with downloading and
[1:25:46] processing vs data now the next step would be the download and process erret data in a very similar fashion right so
[1:25:54] we can choose Minimax aod so we only chose standard aod between zero and one not too high aod we specify our
[1:26:02] coordinates in the similar way now make sure sure that the boundaries the coordinates that you use in your Lads data resemble the
[1:26:13] coordinat that you're using when querying the erret data because otherwise at the end um the code will
[1:26:20] crash because there will not be any data to um to uh collocate so now after processing the
[1:26:31] error data this is where the collocation happens the collocation is uh we use the Cub exp spline to um where we tplate the
[1:26:41] 550 uh nanometer uh value based on the three channels the 440 500 675 this section of the code will take
[1:26:50] the longest time because uh because uh it uses some uh not complex but computationally consuming consuming um um
[1:27:04] arithmetics and after this code is done it saves the collocated data as a CSV file which is also going to be found in
[1:27:10] your working directory and that can be downloaded from your uh Google Drive and uh if you if you'll notice you
[1:27:25] don't have to specify date here because why you don't specify date for the for airnet because uh it takes the dates
[1:27:36] that is produced the dates from the v data set it assigns them to a list it's called date time and then that list is
[1:27:45] then uh being fed in a loop right the loop is called Date uh date time for each index of the date time
[1:27:54] um list is used to access the URL and then uh download that AET data so in this case we're not producing
[1:28:05] one Ur URL with from AET we're using it multiple times as many as their unique date times in the v data
[1:28:20] set so after the um Excel file is is um is produced there's going to be a um the
[1:28:27] final section of of this code which is which is plotting so to plot it uh we isolate um the necessary
[1:28:36] columns uh and and we we filter the values uh based on uh uh aod and produce the following
[1:28:48] visual let me zoom out so we have the uh measured V aod at 550 and the interpolated AET aod at 550
[1:29:00] the solid so the solid line represents um the line of best fit and the dash line represents what
[1:29:11] theoretically the line should be if there's perfect collocation between AET and V's data so our R is
[1:29:21] 0851 so r s will be will be me means we Pro roughly around 65 or 7 which means
[1:29:27] that the um collocation is is fairly uh reliable and uh deterministic the samples are 93 which means that there's 93 sites that this
[1:29:40] interpetation has been uh this this collocation sorry has been done for so yeah um more details on how to uh
[1:29:53] run run the script like how to set up your account how to query Lads um how to
[1:29:59] authorize um The Lads applications on your account and how to generate a token can be found on the V airnet comparison
[1:30:07] readme file which is once again on the airnet GitHub so um thank you everybody for um are running these scripts with me I hope
[1:30:22] you enjoy them and I hope they're not to complicate it and now back over to pavon for the closing remarks thank you
[1:30:31] very very much okay great um thank you Peter very much for excellent uh overview of the Python codes again uh if anybody has
[1:30:42] trouble in running up those code please contact Peters all the links his contacted details are there on the
[1:30:49] GitHub and on those individual codes and we will be happy to to help uh if anybody has trouble in accessing or
[1:30:58] running those codes so quickly I want to summarize uh all the things which we have covered today um again aeronet is a network of
[1:31:11] ground based Sun photometer uh it makes aerosol measurements uh from around 600 active stations from all around the
[1:31:18] world it's not surface measurement but it's a total column measurements of that MOS speres the data has been around for
[1:31:27] last 30 years extensively used in air quality air pollution climate changes search uh to validate the satellite to
[1:31:34] validate the model outputs um in this particular uh part two we have actually gone through different parts of aeronet
[1:31:43] websites uh which include interactive site Maps data visualization in many different ways and then most importantly data download which is free for everyone
[1:31:55] to download and access in simple to use asky asky format we have bve API also for super
[1:32:02] data users or people who want to automate and display that data into their own system uh apis does that vary
[1:32:10] cleverly and easily for everyone uh and then Peter finally covered some of the Python tools uh which are available
[1:32:16] through the aret GitHub page for uh to move to download and analyze the data uh along with the satellite data in more
[1:32:27] quantitative quantitative analysis and then finally again I think as uh I mentioned uh in the part one aeronet is
[1:32:39] a collaborative efforts International Community actually contribute to all the ronet data which are we Distributing so I really acknowledge every single person
[1:32:51] directly or indirectly involved in aeronet either their site managers pis from all over the world and the uh
[1:32:59] various uh network teams from uh partner networks including uh NASA G team who actually works very hard to make this
[1:33:09] data available for the community so yeah I think that's all from me uh I thank you aret team for
[1:33:18] organizing this I want to hand over back to call uh to continue from here all right thank you very much p and
[1:33:29] thank you Peter for that uh overview of how to access aeronet data looking forward to the next part of this
[1:33:35] training we'll be learning about Pandora which is another groundbased passive remote sensor which actually provides complimentary information to the aerosol
[1:33:44] network uh the aeronet network rather on Trace gases like ozone and nitrogen dioxide in the atmosphere just as a reminder the
[1:33:53] homework for this will be posted at the end of our last session which will be August 22nd and you'll have about two
[1:33:59] weeks to complete that homework assignment before the deadline here's our contact information uh if you want to contact us and again
[1:34:07] there's an aeronet mailing list you can register for if you're interested in using aeronet data and here's a summary
[1:34:14] of some of the links that we showed you to the different resources so thank you very much for
[1:34:19] your attention today and we'll now move into the question and answer session and because we're um over our schedule
[1:34:31] time uh we're going to try to go through some of the high priority questions that are really focused on uh the tools and
[1:34:38] the data sets we talked about in the training um so I think we're going to start off um a little bit lower again
[1:34:46] we'll we'll cover these and these answers will be posted to the website after the training but because of time
[1:34:52] we'll just focus on a few questions so first we'll start with question six um which is in the aeronet downloading
[1:35:00] tool what is the meaning of the the different levels uh so the and what are the implications of using the different
[1:35:06] aod aod levels um this was I think yeah go ahead yeah uh thanks call uh so I think we
[1:35:15] discussed this in part one but just I think it's a nice to refresh that so we have three levels of data level one
[1:35:23] level one .5 and level two uh level two are the highest quality of the data which are done after the post fill
[1:35:30] calibration and we recommend that for using for scientific research analysis uh level one are basically raw data without any Cloud clearing uh so we
[1:35:40] don't recommend those data unless uh you're looking for uh some other piece of information level 1.5 data are very
[1:35:49] similar to level two data in many ways except it does not have the post field calibration uh so for many application
[1:35:57] uh people who need the data in real time they can also use level 1.5 uh uh but
[1:36:04] for quantitative scientific research analys analysis we always recommend using level two data okay great thank you um I think our
[1:36:15] next uh question that we prioritized was question 15 here um so on the tool and specifically they were referring I think
[1:36:23] to the data Explorer map tool showing the the near real time data on a map uh what is the time being used is it GMT or
[1:36:31] is it local time in the the time selection yes so the way the tool work is all the time first of all in all our
[1:36:38] data sets are expressed in GMT or UTC because we want to make sure that it is consistent globally uh you can always
[1:36:47] convert that time into your local time using either standard or suntime now on the map tool what happens is it reads uh
[1:36:57] if you have if you're displaying the near real time data on that tool it reads the time from your computer so it
[1:37:06] reads the local time from your computer and will gather the data from past 1 hour or one to two hour exactly and then
[1:37:14] display the data there so although the the it is reading your local time from your computer the data is still
[1:37:22] displayed in uh GMT time it just Gathering the local time information to to make sure that you get the time data
[1:37:31] closes to what you're looking for okay great thank you um the next question related to tools was 18 which
[1:37:39] is um how do we adapt or Port the Google collab example notebooks into Jupiter Hub um what kind of modifications might
[1:37:48] be needed there so um I don't think you need to modify anything as long as uh you have
[1:37:56] all the dependence packages uh you can download uh the data files directly either py or IP nvy um and you should be
[1:38:07] able to upload to any uh Jupiter Hub on either on your local computer or uh some online Hub uh so I I don't think you
[1:38:17] need there is any changes you need to make only thing you will have to be careful about is uh in often in the code
[1:38:25] uh there are directories uh and paths file paths are defined where you're reading either data or you're saving
[1:38:35] data to Output so those paths has to be changed depending on where you are running currently those paths are
[1:38:43] defined while considering that everybody is running on Google callab but if you're running on some other um uh Hub
[1:38:51] then you will have to adjust those path according to your local settings okay thank you um so the next
[1:39:00] question is how do how are missing data or or not a number data values handled um both here specifically and maybe I'll
[1:39:09] generalize the question to uh if you're taking a long-term average of aod for example uh what fraction of missing dat
[1:39:18] are there recommendations about what fraction of missing data is acceptable versus what should be fil out yeah so call that is a very
[1:39:28] philosophical question in many ways uh yeah because it really depends on your application uh the tolerance level of
[1:39:35] missing data right uh if I'm looking for a day-to-day change within a month uh then I would like to have data on every
[1:39:45] single day uh if I'm looking for dinal cycle then I would like to have data almost every hours or even finer time
[1:39:52] scale if I'm looking for long-term trends um then I think having majority of the months of the data for a given
[1:40:00] year is recommended because then you don't don't miss certain types of aerosol Optical depth values like let's say you're
[1:40:10] looking over uh Green Belt Maryland in go where the Gard is located and if you're looking for long-term Trend and
[1:40:18] if you're consistently missing aerosol Optical depth values during months of June July where the values are highest
[1:40:26] then your Trend will be actually biased towards the low aod values so I think that missing how much missing can be
[1:40:37] there uh or what is recommendation I would say more the data better you have the chance of getting accurate results
[1:40:45] or Trends or ready forcing calculations or how the changes are happening in the atmosphere uh uh Miss more the missing data you have
[1:40:57] more uncertainities in your analysis and your outcomes uh will be more uncertain in that sense and like I said in the
[1:41:07] beginning it really depends on specific application so you you will have to make that judgment yourself yeah okay um the next one is
[1:41:18] maybe another philosophical question but so if you're looking at uh an aod time series this is question 22 um and you
[1:41:26] see an unexpected single day Spike which you can't easily explain by knowing for example that there was a wildfire nearby
[1:41:32] on that day what would be some of the next steps or the next tools that you'd recommend to try to identify what the
[1:41:39] source might be yeah I I think that's again great question so uh there there can be many
[1:41:46] things happens right so if you see a sudden spikes first of all you want to see how long that Spike sustain right if
[1:41:54] it is just one single measurement and then there was nothing before or after uh then it it could be a cloud
[1:42:02] contamination one of the suspect suspect it could also be a very uh fine um air mass a small part of the
[1:42:14] air mass which is passing over the location which probably is not explained by big event it could be a small dust
[1:42:25] gust or something which passed by uh Sometimes some people and we have seen this sometime um this aeronet station
[1:42:35] and some people are smoking next to the station for a few minutes it can create an Spike easily um but from the data
[1:42:44] perspective I think what you can look is um uh aeronet provides the data in many different wavelengths so I think if
[1:42:51] you're seeing a spike in one way wavelength uh I would also recommend to check in other wavelengths is it
[1:42:58] consistent in that in other wavelengths or not that can give you an indicator whether it is real or it is an artifact
[1:43:06] um and I think uh the the suspect will be I would say the cloud contamination could be a problem and typically aeronet
[1:43:14] data are very well Cloud Mast uh except for the thinus cloud if there is a thinus um then we may miss that sometime
[1:43:26] we although we do them also very cleverly clear them but we have noticed sometime uh that we may have some
[1:43:35] serious contamination in our data okay great um so the question 23 rather is is it necessary to modify the
[1:43:47] URL to download the lunar or the nighttime uh aeronet data in other words Maybe are the nighttime data also
[1:43:55] accessible through the same API as the the regular daytime data yes so if you look all the apis are
[1:44:05] very similar in nature uh and there are different flags um or keywords in in a way in which you can uh Define in the
[1:44:15] API and um I think there is a keyword which specify whether you want daytime data or nighttime data
[1:44:23] uh the and therefore we have a separate API for nighttime data uh it is specifically designed to get the
[1:44:32] nighttime data but I'm I think there is also way to get both day and nighttime data using same API call I don't
[1:44:41] remember the specific at this moment but I I'm sure in the examples uh on the API page there are example which shows you
[1:44:50] how to get both data together m mhm okay uh great so this is um that was the the main questions that are the most
[1:45:00] relevant to what we covered today um again we'll go back and we'll post this to the training web page in the next
[1:45:08] week probably um once we've gone through and we've we've written down answers to all to all the other questions as
[1:45:15] well um unless PA on you want to re uh re revisit one of the questions now sh
[1:45:23] so let me I think I I read through the question so few things I want to just
[1:45:26] make a a generic note here okay which kind of covers some of the question but also people have question so a lot of
[1:45:34] people have asked about uh if they are interested in a new site or if they want to uh revise a an existing site which is
[1:45:43] not working so I think those are very uh logistic type of question and what uh I would recommend please email me
[1:45:53] on those uh separately uh specifying which site you looking for my email address is there um because each site is
[1:46:02] unique uh each sit has its own story and depending on what you're looking for we can uh coordinate and work with you and
[1:46:11] see what best uh solution we can provide so that's one thing and that applies to the new site also if you think um in
[1:46:20] your region you don't have any aeronet site and you or your institution is billing to support an aeronet site um
[1:46:28] please contact us and we will work with you to see uh explore that possibility like I said in the presentation also
[1:46:36] it's just not possible to fulfill that globally because it involve um commitment uh of lot of resources so but
[1:46:48] we are open to the suggestion and we are willing to work with anyone who wants to stabilize sites in any parts of the
[1:46:55] world um it it will just take a discussion and um at different level so please feel free to email us uh email me
[1:47:05] on any new site request okay yeah that's a good a good point point um all right so we're we're a little bit
[1:47:16] after uh the lot of time but I think we had we did have a lot of nice questions
[1:47:20] so we did want to answer at least some of them live um and again everything else will be answered in this document
[1:47:26] which will be posted to the training website uh in about a week uh after we've had a chance to go through and and
[1:47:32] finalize all the answers so thank you uh everyone for attending uh thank you very much to poan
[1:47:39] and Peter for presenting today and we look forward to seeing you uh two days from now for part three of the training
[1:47:47] session thanks call and thanks everyone for attending this is great
