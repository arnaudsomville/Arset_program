# MODIS to VIIRS Transition for Air Quality Applications, Part 1/1

`https://www.youtube.com/watch?v=mu6K4KopEyA` · id 205 · 1:51:07 · module 31 — MODIS to VIIRS Transition for Air Quality Applications

[00:04] hello everyone uh good morning good evening and maybe some good afternoon in some places of the world
[00:13] uh thank you everyone for joining uh today today we are going to provide a training webinar webinar on how to use viirs data and introduce
[00:26] some of the vs data for air quality monitoring monitoring the presentations are divided into two parts parts i will my name is pawan gupta i'm racist
[00:35] scientist here at nasa marshall specific center in huntsville alabama in first session i will provide a some details on the viewers and data
[00:47] sets sets and how to get those and then uh dr melanie for let cook from nasa goddard society center she
[00:55] will talk about how to deep dive into vs data using some of the python tools okay with that brief introduction um
[01:10] let me briefly uh show you where to get the material i'm sure most of you are getting that details through uh
[01:22] emails and through the check box but briefly the training which we are providing today is from through nasa's asset applied remote
[01:33] sensing training program it's a program funded through nasa's applied science program and under which there is a
[01:39] capacity building program which actually the goal is to build the capacity all around the world to use earth
[01:46] observation for various applications so this specific training is focused on a quality application but we do have trainings in other areas
[01:55] like disaster water management water land use management management fires and other kind of stuff so feel free to visit that
[02:04] website which has been provided in the emails and on the check box uh let me just briefly go
[02:11] to the website for this training so that i can show you where to look for the so let me see if i can
[02:19] share my screen screen i think you're already seeing my screen believe believe so what you see here is the website
[02:29] which has been linked so this is our training page you can find some details uh the timing
[02:36] and then if you go a little bit down in this page you will see the material under material the
[02:41] presentation slides for today's which are also provided in a pdf in a link link the homework there is a homework for
[02:48] this training in order to get a certificate and then although we are not actually providing the training itself in
[02:57] spanish but we make the material available in spanish because this is only one session usually we have two to three sessions
[03:10] but this is only one session and very focused focused and we are assuming that most people who
[03:16] are doing this training will have some uh expertise or some knowledge in using satellite data for very receptive
[03:28] so the title is modis to rear transition for higher quality application and again the website have all the
[03:43] presentation homework everything we will also provide the recording should be available in few days if you have questions uh after the
[03:52] training feel free to us to reach out to either me or melanie on the given email address
[03:59] so like i said the objective for this specific training session is to learn about the viewers russell product uh and how to access
[04:07] those uh how and understand the differences and similarities between the modis and rear instruments and their quality
[04:16] product product and then see some of the examples where we can use viirs resource data for air quality
[04:23] application application so before we move on to the data sets i want to just give a very brief perspective historical
[04:33] perspective perspective because the as many of you already might know that veers is a more noah mission
[04:42] and noah has a historical uh view of looking global weather uh through various uh polar orbiting satellites so this is
[04:51] called noaa polar satellite program um and the objective is to actually get a continuous weather observation from all around the world
[04:59] and noaa has been launching this satellite called noaa 14 15 18 19 and then in 2011 uh they launched a satellite called
[05:09] sumi npp it was a partnership between noaa and nasa which has the rears first of the rear
[05:14] sensor it was launched and typically these uh shows actually the lifetime for the mission which is designed so it's
[05:22] typically five to seven years in 2000 um 17 noah in nasa launched another uh mission called jpss-1 joint polar
[05:34] orbiting satellite system program which was later named as nua 20 which is also involved so there are two
[05:42] viewers right now in orbit and as you can see from this chart there are gps's two three and four already planned
[05:51] so the key thing to understand here is that that veers a is a continuous uh the mission the role of beers is
[06:01] actually to provide continuous measurement measurement from all around the world using polar orbiting satellite so if you are switching to rears from
[06:09] the models now it is good time because we will have vs data in next 20 years until
[06:17] 2038 so we will have a continuous records records so just give you a very historical perspective now
[06:24] the first vs was launched on a sumi npp satellite so me murmur uh isumi was well known
[06:31] meteorologist he was considered as father of satellite mythology he was professor at university of wisconsin and the satellite was named in honor of
[06:40] his his hymn and it has five different senses so this this veers is just one of them viewers is
[06:47] trained for visible infrared imager and radiometer suits and it has been designed very much like modis to
[06:54] [Music] [Music] do the application on land atmosphere and ocean but there are other sensors like craze arms atm series they have been also part
[07:04] of this npp satellite and they have different application application objectives so for example arms also provide provide some useful information on air quality
[07:14] and specifically designed to monitor the ozone layer and ozone in the atmospheres cirrus is another relevant sensor which
[07:24] provides provides important information on earth radiation budget budget for those who are new to the satellite world or
[07:35] the modis has been in service for almost 20 years like i described earlier each census i typically design for
[07:43] five to seven years or three to five years but both modis have been actually providing data for almost 17 plus years
[07:51] or one of them is 20 years so we have the data all the way from 2000 to
[07:55] current current and there are two modes one is on terra which makes measurement in the morning one is
[08:00] aqua which makes measurement in the afternoon the special resolution of mode is uh varies from 250 meter to
[08:07] one kilometer depending on which spectral channel we are using uh this is the native resolution and we will talk
[08:14] about the product resolution later on uh there are 36 different spectral channel in modis and it provides measurement both
[08:22] overlaid in ocean so the top image shows the modified quad bottom shows modis tera uh just to for comparison the similar
[08:35] piece of information is here for visible again again there are two viewers in orbit currently one is
[08:42] weirs on sumi npp which i just described and then there is a viewers on nova 20 or jks is one
[08:48] uh like i said the noah has a little bit different way of naming satellite they do provide one name before the
[08:57] satellite is launched in this case it was jpss-1 and when the satellite is launched and operational they rename it and it becomes the part
[09:06] of their nova series so this is now called 20 uh before it was launched it was called
[09:12] jpss one so just don't confuse about that that uh they are the same satellite uh again uh it's a very very similar to
[09:21] modis uh the data sets which we have available from years is 2011 onwards the special resolution varies from 375
[09:29] meter to 750 meter uh there are two types of bands and beers one is called eye band and one is
[09:36] called m band m band resolution is 750 meter resolution resolution and then the eye band is 375 meter
[09:44] resolutions resolutions uh the temporal resolution as you can see in the image and i'll show you next
[09:50] is little bit better than modis and there are 22 spectral bands in the in the beers as compared to 36 in the
[10:00] case of modis so let's look a little bit more uh compare uh see the differences similarities between modis and weirs
[10:11] again uh in historical perspective uh the npp mission which was which carried first beer instrument in 2011 was
[10:21] a uh more like serving between bridge between nasa us mission which was part of modest terrain aqua missions
[10:30] and jps satellite series of satellites like i mentioned earlier there will be four jpss series jpg one to four and there is a mandate for
[10:40] noaa to provide a continuous measurement until 2038. so it kind of bridged between the two uh series of the satellite
[10:49] now if you have been familiar with the satellite community you might have heard the the program called nppos um that was
[10:58] actually previously called the same mission is now renamed as jpss and gps's mission is actually developed by nasa
[11:08] but for the noaa so noaa is more it's more of noah mission than nasa and nasa's part is
[11:14] basically to develop the satellite launch the satellite and maybe maintain the data stream but the noaa is
[11:20] the main users and operating agency for inter jps's mission so here are some details i think i have already gone through
[11:28] these in earlier slides but this is just for your break preference preference now let's see the some similarities and
[11:37] differences between modis and beers in terms of the coverage so on the left you have two modis
[11:43] on top is aqua on bottom is modis chera again modus tera makes measurement in the morning mode is echo max measurement in the
[11:51] afternoon so what you see here the black line in the middle of the swot here this space in case both modis
[11:59] that is called orbital caps and this is because of the swath bit of mod is more modis has a
[12:05] swath width of 2330 kilometer and at the equator uh that swath width actually actually have produced some orbital gaps from one
[12:15] orbit to another orbit and we lose the data in those orbital gas we don't have any measurement so
[12:22] when we say mode is daily coverage it's not not daily it's really one to two days but
[12:28] the advantage is we have two measurement one in the morning one in the afternoon on the right you
[12:34] have the year's coverage for the same day day so uh on the top is weirs on sumi npp on
[12:40] the bottom is piers one number 20. and what you see that those orbital gaps are are gone in case of beers one more thing
[12:49] important to remember here is that weir sensor on both are almost identical there are some differences in terms of their respective
[12:58] response function but otherwise the sensor design channels everything's are identical now the nova 20 actually flies about 50
[13:07] minutes minutes ahead of uh some npp so the nova 20 makes makes both two viewers actually makes
[13:14] measurement within 50 minutes of each other on a given place so if you look the two images uh from the beers
[13:21] they will look really identical because things doesn't move that much in 50 minutes minutes and you will see now those orbital gaps
[13:30] have gone and that is because of the swath width so the rear swath is about 360 kilometer
[13:37] and that actually makes continuous global coverage even at the equator and in fact there is a 15 overlap between
[13:48] orbit orbit in equatorial regions so just keep in mind mind vs does provide better uh global coverage on a daily scale
[13:58] uh again this is for your reference just want to point out some more details on the similarities and differences
[14:05] between weirs and modis like i said there are two viewers viewers if you see both weirs are identical in
[14:14] all of those aspect except this time difference equatorial crossing time vs npp is uh 130 local time
[14:25] and whereas the gears on 120 is 1240 local solar time the swath resolution everything else remains remains same
[14:37] okay now let's talk about the quality product from beers so there are multiple uh product which we have been using
[14:47] uh from modis uh one of the most popular one to monitor the particulate material pollution pollution uh or particles loading in the
[14:55] atmosphere is called aerosol optical i'm not going to get into the details of what is aerosol optical depth
[15:01] i'm assuming most people are uh familiar with that if you're not please go through some of the fundamental training
[15:08] uh which we kind of define what that parameter is it represents the columnar loading and its optical property it's a unitless
[15:17] and it can be used as a proxy for vm 2.5 monitoring monitoring so it does have a russell optical depth
[15:24] fire detection is another which we get from modis and then the true color images which we often use to
[15:30] visualize uh what is happening in the earth atmosphere system so veers has almost all of those both
[15:38] viewers sumi npp and noah 20 almost all in addition uh noah actually provide two additional additional uh important piece of information called
[15:48] smoke detection and dust detection and we'll look into that so in addition to what modis is providing
[15:54] providing vias has some additional information on the air quality uh now we will continue about the looking some
[16:04] of the data sets uh which we have been using from modis and what similarities or differences which we can have when we
[16:15] use use from the rear so first and uh most useful i would say and most people actually
[16:23] like to use that data sets is called true color images so the true color images um as we know
[16:37] are actually uh formed using the measurement in the three wavelength uh red green and blue we have been doing
[16:46] that using these three vents in modis and the beers has almost identical three bands with little bit
[16:54] difference in the specific wavelength uh but we have the similar three wavelengths in the beer so we can get
[17:00] the true color images from the gears as well and you can actually get those two cooler images
[17:05] access from nasa worldview if you have not used it before um feel free to watch some of the tutorials
[17:13] which we have on our website and we can go over that later part in the the training now
[17:21] let's look at the nasa aerosols datasets so so aerosols data when i say resource data mostly mostly we are talking about the aerosol optical
[17:31] depth and as people who are familiar with the modis chair and echo product uh the spatial resolution uh initially
[17:40] when the sensor was launched in early 2000 the data was available in 10 km resolution then later on three kilometer
[17:47] data was also made available and most recently uh there was a new algorithm called maya which actually used retrieved the data
[17:55] at one kilometer special resolution so in case of modis uh and again uh we are going to actually try to talk
[18:04] about the like i said the now the viewers is a mission uh joint mission between nasa and noaa so
[18:12] there for this is some con this there are products which are actually developed by the nasa team and there are
[18:20] products which are developed by the noaa team so we'll go over some of those uh uh both products so this specific table
[18:27] actually described the nasa product all of the modus data is from the nasa there are three different algorithms
[18:35] which works on them w dot target maya and very very important point to note that the modis data are available for past 20
[18:44] years from 2000 to current time from two different sensors data are provided in hdf format now when
[18:50] we talk about the viewers the viewers data from sumi npp again carousel optical depth and product at the similar
[18:57] wavelength wavelength but the special resolution is six kilometer uh so instead of ten kilometer or one kilometer three kilometer we have a six
[19:05] kilometer product again daily um the two algorithm which right now provide from nasa w and dt so
[19:12] in a sense that uh one good thing is that the same algorithm the target and deep blue have been applied
[19:19] on the viewers so you will see a lot of continuity in terms of the data and the
[19:25] accuracies uh the data ability is only from 2012 to current because vs was launched in late 2011
[19:32] and the data format is little bit different now we have a net cdf format because this is much more common
[19:38] and most uh more popular data format which has been used uh nasa does not have currently any data
[19:45] product product on a newer 20 it only has rgbs but in future that may change here is an example of nasa product uh
[19:56] this is a little bit more details on the deep blue algorithm like i said it's a six
[20:01] kilometer product it's called level two the level three product is in the same resolution as mode is one
[20:07] degree resolution uh other components along with the aerosol optical depth is from exponent and aerosol type which
[20:15] are also available from the uh deep blue algorithm from the nasa product product the product name is aer db aer
[20:23] stand for aerosols and db stand for w and level 2 means level 2. similarly dark target has exactly the same
[20:33] naming conventions and products it's instead of a r d bleed now it is called aer dt and this image is just shown from the
[20:44] world view an example of the fires in california california if we look into the file name uh it is
[20:52] very very similar to what we have been used from the modis uh the file name consists of
[20:58] different information the first ones are product name ar db again in case of dt it will change
[21:06] to dt and then this is level two this is sensor name years this is satellite name sumi npp
[21:13] this is the date in format of four digits digits years and then three digits day number so day number means
[21:21] january 1 will be 001 january 31st will be be 0 3 1 and february 1st will be
[21:28] 0 3 2 and so on the time is in utc all of the satellite data data are provided in utc time hours and may
[21:38] tuesday hour 2 minutes and this is version 1 only first version have been released so far from
[21:45] in terms of the viewers and this last piece of information is the processing date which may not be
[21:52] uh too much of use for end users these are the file names for the level three data uh
[21:59] d3 is daily n3 is the monthly everything else else remains same as level two and this is an
[22:06] example of file name for dark target retrieval algorithm again some more details here already i think we talked about what i want to
[22:15] show here is when you open a vsd blue aerosol file which i just described earlier you will see there are several
[22:24] scientific datasets sgs means there are scientific data sets inside and this specific table provides some details if you go on this link you will find
[22:34] more details i just want to point out few of the parameters which are useful and which we will actually get
[22:41] into details uh when melanie shows uh how to use the python script on these datasets so uh there is a latitude and longitude
[22:50] for every pixels and there is a parameter called aerosol optical thickness 550 means 550 nanometer wavelength and lead ocean bass estimate so often
[23:01] um in a file we provide many different parameters some of them are for research purpose some of them
[23:09] are considered with different quality flakes depending on how the retail algorithm has retrieved that specific pixel so this one is considered the best
[23:20] estimate so if you are users and you don't want to worry about the quality flag and want to
[23:25] use the best data this is the parameter you should be using so just note that okay now often we ask that question that
[23:34] okay okay how good are these data sets so to do that that we do a validation and validation is
[23:40] often performed using comparing the satellite data with the ground-based measurement in this case uh the ground-based measurement
[23:49] is called sun photometer and the network is called aeronate and nasa has the network of sun photometer all around the world
[23:57] there are almost 400 plus continuous measurement sites which are making measurements every 5-10 minutes from all around the world and this data
[24:08] sets this has long records and you can get more details in this paper uh by christina in 2019
[24:18] the important thing i want to point out here is that uh here is the comparison between modi's
[24:24] aqua modes terra deep blue aerosol optical depth on the right and the viewers on the left and you can see if the you
[24:32] see the statistics correlation coefficient bias they're very very comparable to each other so again the point is that
[24:40] even even if you are starting using vs data you are getting this almost same quality of the data as you
[24:47] have been getting from the modis in terms of their accuracy so this is a really good news
[24:53] uh for continuity of the data sets here is another example some people often have a concern how the temporal consistency exists
[25:02] between these sensors so here is an example two different sites sites uh on the top you have a bj in china
[25:11] and on the bottom you have a golden specified center in eastern usa uh it's more of a
[25:18] suburban side and then the beijing is more industrial and urban side and what you see is the different
[25:26] colors colors time series starting 2000 to 2018 are different products so aeronautic is the ground truth in the black and then these are monthly
[25:36] mean data actually and the years started in 2012 in a green and then the mod is aqua in 2003 in blue
[25:44] and modis terra in 2000 and you can see on a monthly mean scale they are very consistent they are
[25:51] following the seasonal cycle they are showing the same long-term trend so they the datasets from these three sensors
[25:59] are very consistent on the bottom is gsfc you can see even better agreement between the different census years
[26:08] and i think this provide a lot of confidence in using the vs data for different applications okay i just want to give briefly uh
[26:20] there are multiple research papers published over the years which described a lot of details details on these data sets from the beers
[26:30] including algorithm validations so the top two papers are for beers deeply algorithms bottom paper by virginia sayer
[26:40] she works in our team she has just published a paper in remote sensing uh discussing uh some of the beers
[26:47] target product so if you want to get into details of algorithm validation quality control and everything i would
[26:55] strongly recommend to refer these papers they are very recent studies and provide great details about the datasets
[27:04] okay so now let's spend five minutes to get get how we get this data from nasa site okay
[27:10] so so people who have been using the uh modis data they already know this uh this required a earth data logging as
[27:20] instructed so if you are on internet if you're already on internet actually if you're listening so if you want to
[27:27] follow along with me i'm going to browse this data very quickly and show you how to get the
[27:33] data so let's see if you can see my screen i believe you can still see my screen i
[27:53] hope hope so okay so just so that we don't have to remember where which website we have to
[28:01] go go i always use google to search it's called legs l-a-d-s that's where and then nasa if you type that uh the first link will
[28:13] comes the let's dab this is the website which we will visit to get the data now once you are on the website
[28:21] uh if you have not created your other data login you will need that to actually get the data it's free you
[28:29] just have to register yourself so that you can download the data so just to check you can click on the profile and then it
[28:37] will say earth data login it will take you to the login page if you are already saved your username password it will
[28:45] automatically log in and then we'll get back to you so i'm already logged in now okay if you first time it will ask the
[28:53] username password you can save it if you want to keep it in use for futures futures but this is the website where you will
[29:00] download the data there's a lot of information on this website about the data product but i will go straight to the data sets
[29:08] where to find them so there's a button called find data i'll click on that and this page will appear so now you can
[29:18] actually select using the sensors and the available collection collection but just to let you know that some of
[29:25] the most popular data sets are already listed here on the right so like i said aer db l2 is the year's level two
[29:36] deep blue also optical depth so i'm going to select that and then ar dt level 2 vs npp is the
[29:43] next product which i'm going to select if you cannot find them you can also use the keyword to search here
[29:49] and then you will be able to search those data once i select the product i will select for which date we want the
[29:58] data so you can either select the date range if you are looking for long-term data for one month one week
[30:05] one year or you can select the single date so i'm going to just for example here i'm going to select the data from three
[30:13] days ago from monday october 5th and then edit it now you can also add multiple dates here so let's say you are trying
[30:22] to download the data for five different days spread it throughout the years you can select those individual date
[30:28] and it will save the search the data for you you once you selected the date now you need
[30:34] to to tell the system which part of the wall you want to get the data so the location
[30:41] is important and there are many different ways in order you can actually define the location location you can search by countries you can
[30:48] select the tile this is more relevant for other datasets you can also search by validation sites so if
[30:54] you click on that the validation site the same arrow net network i was talking about will display here and you can select any of
[31:02] those sites and it will download the data data for that but let's uh get back to the more popular one is draw custom box
[31:11] so you can draw a box around any region right and let me draw actually box to here in the distance once i draw the box
[31:25] the latitude longitude will appear here the range you can see below the location it will also show as the current
[31:32] locations here and then i can go to the next next once i go to the next all the files
[31:38] which falls within that region are going to come up here i can download file by just clicking download
[31:47] and it will actually download on my local computer i can also select all the files and then go to the next click on the
[31:56] arrow on the top and all the files are here from the two different algorithms and then just submit order once i submit
[32:06] you will receive an email with details instruction on how to download download all the files in one time so this is
[32:13] very simple process uh just remember uh it's very very uh similar to what we did for modis
[32:21] again if you have doubts uh we have a tutorial on ourselves website we can point to that uh on each of these
[32:30] steps which we just followed along here okay i think uh let's move on we have about 20 more minutes
[32:38] to cover the some more slides so i'm going to move on to the presentation and then we will actually open these
[32:54] files in the melanie will show us actually how to open these files and so here is an example i'm going to just
[33:01] provide very quick example of the data which we just downloaded uh this is a different similarities and
[33:08] difference between modis and weirs for september 27 2020 with very recent on the left you have a
[33:15] modest modest aqua aerosol optical depth derived from the deep blue algorithm again you can see those black spots or
[33:22] the regions with the orbital gaps and there are also some regions so again if you don't know some glint uh
[33:39] refer to some of our old training and we will have some description on those as well well if you look on the right is the weirs
[33:47] you don't see those orbital gaps in the data the color actually here i don't have the color scale but
[33:52] the darker color shows high values and the lighter color shows the low value if you look overall
[33:57] both sensors provide similar special distribution you can see features like this plume going over here very similar the values are very similar
[34:08] there is a dust plume actually originating from the saharan desert which you can see actually better in
[34:13] modis modis because in case of weirs which actually fell in between the sun glint area and both sensors have similar problem
[34:21] when it comes to the sun joint this is more zoomed in case again mode is aqua for september 7 this year's as
[34:33] if you heard in the news there were several fires in the united states especially in california and some of the
[34:39] other districts like utah and colorado which actually created huge air pollution problem and other kind of disaster problem uh
[34:48] for for almost more than one month now still going on some of these fires actually and what you see is the smoke all over
[34:56] the u.s from this fire and if you look there also optical depth retrieved from the modus on the same
[35:02] day you can see some of the high smoke comes in high aerosol optical depth in case of mode is literally but also
[35:09] you will see there are areas where we are actually missing the retrieval of aerosols because of some of the algorithmic
[35:16] restrictions we have if you look the same day uh from the viewers uh remember mode is aqua
[35:23] aqua and beers makes measurement within 15 minutes of each other so if you're not if you need to compare the two uh it is
[35:30] better to compare with modis aqua than terra because notice aqua and beers npp makes measurement within 15 minutes
[35:37] of of each other so this is viewers from the same day you can see i'm going to go and
[35:42] back and forth you can see very similar special pattern but you will see a little bit better
[35:47] coverage of smoke detection or the russell optical death retrieval in case of weirs as compared to modis so
[35:55] again every reason for us to actually switch to rears its quality is same the coverage is better
[36:03] better and it provides a longer continuity in the future okay now i'm going to switch into the
[36:10] noaa aerosols data sets this is very similar table uh like i said weirs is a noaa missions whereas the models
[36:19] was the what is is a nasa mission so noaa does not not produce any modis data sets in
[36:25] operational sense they have some research algorithm but for operational purpose there is no modis product in terms of
[36:32] resource data beers on the other hand they have they are retrieving gears from both satellite although nasa is
[36:40] only retrieving from sumi mpp but noaa is retrieving from both viewers noaa noaa sumi npp and nua 20 they have the data
[36:50] aerosol optical depth and then smoke and dust masks which will see some example the special resolution is 750 meter
[36:58] resolution resolution six kilometer there are two aerosol products from noaa one is 750 meter resolution and one
[37:06] is six kilometer which is very similar to what nasa provide daily global coverage coverage both are use the noaa algorithm uh the
[37:13] data available from sumi npp is 2012 to current current and the years on 120 is 2017 to
[37:20] current time uh similar information on the file name the datasets datasets from the nova comes into six
[37:31] uh 86 second one file contain the data for 87 86 second actually in case of uh nasa data one file contained the data
[37:41] for six minutes uh whereas the noaa data comes in 86 seconds so a little bit different ways of
[37:50] organizing the data a lot of this information is very similar to what we see uh for the nasa product a couple of
[37:59] things i want to point out the satellite name name j01 means this is jpss or num120 npp means some npp so there are two
[38:07] years years it says aod and then s and e is stained for starting dating time and ending date of time of that
[38:16] measurement so you will see that only there is about 86 second difference between the two some of the other product
[38:31] this is where we get the smoke and dust masking masking and in in addition to smoke and dust it
[38:38] also provides other flags like volcanic ash ash uh unknowns like urban cloud flags noise flags and also it does give you a
[38:47] smoke and aerosol index so whenever wherever this pixel is detected as a smoke or dust it will give you a value
[38:53] of of dust or smoke aerosol index and the index will basically tell you whether it's a thick dust or thin dust layer or
[39:01] thick smoke layers or thin smoke layers so higher the value thicker the aerosol layers either dust or smoke
[39:08] and then also provide the quality flag very similar to what nasa products provide here is example showing the smoke mask from noaa this is
[39:19] a little bit older example from 2015 but what you see this pink magenta color is is the areas where the smoke has been
[39:28] detected using the weirs product again these mass smoke and dust are a qualitative indicator of where they have
[39:39] detected either small contact so they have little bit less value in terms of the quantitative analysis than aerosol optical depth
[39:51] but they are very useful in identifying transported dust or smoke and local sources okay another example um again this
[40:02] summer summer uh many people might have heard that uh there was a huge dust storm uh originated in north africa and
[40:10] saharan deserts crossed atlantic in several days and actually created air quality uh problem in many areas including
[40:20] caribbean islands east coast of u.s central central america and southern america parts of southern america and these dust actually carries not only
[40:32] pm 2.5 but pm10 larger sized particles which can be harmful for many different health impacts and they can also be can
[40:41] impact the climate forcing so the dust aerosol index is a great tool to actually track this down uh noah has a
[40:50] very similar tool called jstar mapper and that can be accessed from here you can visualize uh noaa product on this specific tool
[41:02] it's very similar to world view uh with the noir product again the smoke marks example from the
[41:10] fires fires in the u.s western u.s we had a lot of fires here in california during last few months this is from
[41:18] september 14 you can see the smoke over ocean ocean or land actually smoke is crossing atlantic we had
[41:25] seen cases where the fire smoke from the california fire actually crossed all the way to atlantic and
[41:31] uh affected air quality in some of the european countries at the same time there was some dust detected
[41:36] in the north of africa and there was some biomass burning going on in amazonia amazonia in south america so you can actually
[41:44] this product gives you pretty good view of global smoke and dust sources and where things are transporting
[41:54] similar from the noaa star mapper you can also visualize also optical depth again derived from the noah products just want to give you an
[42:05] example here uh i mentioned earlier noah has two data in two different special resolution one is six kilometer which is on the
[42:14] left and one is on 750 meter resolution on the right and this specific example is actually close to where i live
[42:21] in alabama and what you see in the six kilometer there are some uh plume of high aerosol optical depth
[42:29] in in alabama and when you see the same image image same place on the higher resolution then
[42:36] you can exceed those plumes more clearly there are actually several files files which were burning these are prescribed
[42:44] burning and they were actually putting out the smoke plumes in many different parts of alabama and mississippi
[42:50] mississippi and which are very very easily visible in 750 meter resolution which is kind of uh averaged out when
[42:58] you do the six kilometer resolution data so again uh if you're looking for a small scale pollution event uh
[43:06] higher resolution can help you to identify those events events this is validation studies this is just over india but there are
[43:16] other uh studies which actually have done similar analysis globally very similar in terms of the quantity quality as we saw for the
[43:25] nasa product this is just an example of application uh on the left you have a noaa 20 years
[43:33] also optical depth for october 7 this month earlier and this i just got it from the noah's tutor handle aerosol
[43:40] watch watch and what you see this high and also optical depth are basically a smoke blown coming out from the
[43:47] western fire so we have fires in washington in california there are some in the midwest and and all of them are putting out the thick
[43:56] smoke plume in the atmosphere and that can be very very visible in the beers and also optical death
[44:03] now beers more recently have launched a experimental pm 2.5 product uh based on aerosol optical depth which
[44:12] they used to convert into 24-hour average daily particulate matter and what you see on the right is the pm 2.5
[44:19] air quality index derived using this aod so you can see high pm to concentration derived in regions where they were
[44:28] higher so optical depth were found now there is there are little bit difficult it's not that easy to
[44:35] actually derive go from aod to pm to 0.5 because remember aod represent the columnar value for entire column of that mosfet so this
[44:43] aerosols can be anywhere in that atmosphere 2 kilogram to 3 kilometer whereas the pm 2.5 at the
[44:50] surface only so there will be differences in terms of their spatial pattern pattern and when when we go from one to another
[44:57] parameter we have to take care of those differences differences this is the tool which i was mentioning
[45:03] earlier this is how it looks it's very similar to what nasa world view but with the noaa products if you need to get the
[45:12] noaa aerosols data download uh you have to go to noaa class you can register here and then you can
[45:20] download the data all the data are free from nova as well and you can find more details if you
[45:25] click on this link which will provide you you step by step instruction on how to download the data
[45:35] hey everybody um in this section of the webinar i'm going to go over how to to take a little bit of a deeper
[45:43] dive into the data files that paul was describing so we have constructed several python codes in the form of jupiter notebooks to open
[45:54] read read and map some of the vr's data that pollen was describing and before i begin i just want to
[46:03] emphasize that every step i'm going to show you here is documented documented in the presentation materials so
[46:10] actually this is from our website this is the end of pawn's presentation and every step i'm going to go through
[46:18] is detailed here so if you'd like to follow along that's great but if i'm going a little bit too
[46:23] fast don't worry every step is here so the first thing i'm going to show is our nasa arset github repositories
[46:33] here you can see that we have repositories for the nasa viirs data files as well as the noaa
[46:41] viirs data files today i'm going to show you you how to run the jupyter notebooks that we've created for the nasa viewers
[46:49] but the same procedure can be used to run the codes for the noaa files if we click on the nasa viewers
[46:56] repository repository you can see we have several files listed here here the first is an example virus data file
[47:07] you can see as paulin described you we can see that this is a deep blue level two viirs sumi mpp file
[47:16] um here's the date 2020 d number 56 we also have a readme in each repository and if we scroll down we can see that
[47:26] the repository contains the sample spheres data file a readme and this file list list text file and five scripts
[47:34] and then each listed here is what each program does and kind of the steps it takes to do that
[47:45] we have here file list.txt if we click on this we can see this file simply contains one text string stating the name of the
[47:55] file we're going to use we also have five different jupiter notebooks here read in map viewers read aod and
[48:07] calculate pm 2.5 read viewers and list the sds those are the scientific data sets within each viewer's file
[48:16] read viers at a certain location and export export certain variables so what i'm going to demonstrate today is
[48:26] how to copy the code from these files upload them into a google drive and run them using
[48:33] the google co-laboratory application so to start off i'm just going to show one file to demonstrate if you click on the code for one of the
[48:44] jupiter notebooks you can see we scroll down you can see the sample code if we scroll up to the top
[48:54] and we click on the raw to see the raw code code and if you just save this
[49:05] we can just save this as a dot ipynb file so just save that somewhere on your computer
[49:19] i've already done that and you can do that for each of these jupiter notebooks i'm just going to go back
[49:30] so i'm just going to very quickly show that the viirs noaa repository contains the same same files so here we have two example
[49:44] data files from the noaa product similar we have a readme readme a file list and our five codes
[49:55] and here when i'm going to click on the file list you can see that instead of one it just has two text
[50:01] strings of the file names so if you want to to adapt these codes to use them yourself
[50:07] all you have to do is add different file names and i'll talk about that a little bit in a little bit
[50:15] so if we have our codes saved on our computer locally you can go to your google drive if you
[50:27] hopefully okay i'm not sure why i'm getting that error um if you do not have google co-laboratory
[50:36] co-laboratory added as an add-on you can go here search for apps co-laboratory you can see i already have
[50:50] this installed but you can just click this button to add it once you have google co laboratory
[50:59] installed on your google drive you can open the jupyter notebooks in a in a format that they can be run
[51:08] i'm going to close this to copy your your um your codes into your drive drive you can just choose to upload them or
[51:20] you can just drag and drop them into into your google drive i recommend creating this fi this folder
[51:28] colab notebooks to create a folder you can right click and say create a folder or you can use this method to upload
[51:35] files files or upload an entire entire folder um in order for the codes to run properly they need to be contained in a notebook
[51:43] you know sorry in a notebook in a folder called collab collab space notebooks exactly like this i have already copied my codes in for
[51:55] this demonstration today so the first code i'm going to start with is actually the list scientific data sets code
[52:05] and you can see we open with google google co-laboratory and here is our code so the first thing i want to point out
[52:21] is in these two lines right here what this is doing is this is accessing the nasa rset viirs nasa git
[52:29] repository repository and this line pulls all of the contents that i showed earlier i click back to be accessible
[52:40] by google co laboratory if you want you can change these lines to be accessing your own google drive
[52:51] in the future we'll put some commented lines in there to show users how to do that that for right now we click here to run
[53:02] this these cells right now it accesses google file stream in order to run if we click on this link
[53:14] and click on the gmail that you are accessing uh for which your google drive is for click allow we copy this code
[53:28] back to our go back to our jupiter notebook and enter and now it's cloning our github repository
[53:47] repository and when this stops it is complete the next set of cells installs the necessary libraries we need
[53:58] and that usually just takes a second and that is complete this next set is the bulk of the code
[54:06] and i'm going to scroll down a little bit bit to here this is where this is accessing
[54:14] the viirs nasa file list.text file in order to read the text string that contains the file name
[54:24] down here it's saying read that file from the viirs nasa repository so these are the lines that you would have to
[54:32] change change in order to adapt the code to read your own files that you have potentially downloaded
[54:37] downloaded so if we run this block of cells we go down it says would you like to
[54:43] process this the first file in the file list reverse nasa we only have one i hit enter i hit y and then enter
[54:52] and here it lists all of the variables contained within these files so pointing out the some of the sds
[55:08] that um specifically highlighted highlighted highlighted here we have aeros optical thickness at 550 nanometers land ocean best estimate
[55:16] we have latitude we have longitude and various other variables so going back to our notebooks another code we have is to read and map
[55:31] a viirs data file we open with google call laboratory and the same procedure we access google file stream
[55:55] copy the code and we must wait for each step to complete before running the next step we install our
[56:07] libraries and while this is installing i'm going to go over this again is where we open the file
[56:17] list list here is where we're accessing that particular file here is where we are listing each of the scientific data sets that we
[56:30] are are giving the user the option to plot so these if you wanted these could be also changed
[56:39] here we're calculating some statistics about the data and here we're specifying the particular color maps that we're using to plot the
[56:49] data data going up we see that all the libraries have been installed successfully we run our next cell oh and the last
[56:59] thing i want to point out is down here this is where we are saving um our file that we're going to create our
[57:07] map so that is something that you might want to change as well here we're saving right to the collab notebooks folder so
[57:16] yes we would like to process this file i would like to plot number two aerosol optical thickness 550 land ocean
[57:23] best estimate here are some statistics about the data the average standard deviation median and latitude and longitude range
[57:34] i'd like to create a map so i enter y and here it shows a map of this data
[57:42] the colors show aerosol optical thickness thickness and i would like to save a copy of this map
[57:50] and our code has run successfully when we go back let me just close these when we go back
[57:57] to our collab notebooks folder it usually just takes a second but here is our file that we can just open
[58:08] the next code i'd like to show is another one that will generate a map so this code reads aerosol optical depth
[58:24] and calculates pm 2.5 and i want to emphasize it something that's highlighted here this code uses a slope
[58:31] that's just meant for demonstrative purposes only it's not meant to be used in any kind of quantitative
[58:38] analysis to generate your own slope um you would require each slip is probably going to be specific to a given
[58:47] region and potentially even time so we begin again accessing google file stream is a little bit of a tedious step but we
[59:07] only have to do it once if we were going to rerun the code we would not have to do this again
[59:15] you can think uh for each code you have to do it once a session that you're using the code
[59:22] and we're going to install our libraries and again while that's happening i'm just going to scroll down here
[59:28] this is again where we read that file list this is where we read the actual file these are the choices of sds that we
[59:39] give the user to use to convert to pm 2.5 these are just duplicates but obviously i don't think that you'd
[59:47] use a quality flag to calculate pm 2.5 down here is where we ask the user would you like
[59:58] to enter slope we're going to enter no we would not like to enter a slope because we're just going to use
[1:00:03] the default slope and intercept here but again that's just for demonstration for today and then again down here we are going to
[1:00:14] save save a map of that pm 2.5 so everything has run successfully here so we run yes i would like to process
[1:00:29] this file we're again we're going to pick number two aerosol optical thickness 550 land ocean best estimate so we're
[1:00:37] going to enter two and again we have some statistics here um would i like to enter a slope and
[1:00:46] intercept for the pm 2.5 calculation no because i'm going to use the default would i like to create a map yes
[1:00:57] and we're getting some little messages there but what this does is this uses the pm 2.5 and categorizes it into something called
[1:01:06] the air quality index which is an indicator of how healthy or unhealthy the air is and on this occasion most of the air
[1:01:14] over land is qualified as good so if we want to save this map yes yes and if we go back to our notebook
[1:01:32] these take just a minute to appear and here is our air quality index map so the next code i'm going to
[1:01:43] demonstrate is reading a viewer's file at a given location and this might be useful if you have a given
[1:01:52] station that you would like to compare to to or an aeronet station potentially we activate the google file stream
[1:02:06] and get our code copy our code and install our libraries again here's where we're opening that file
[1:02:33] list here's where we're opening the data file here we are specifically saying that we would like to to know the value
[1:02:48] of of this variable sds name at a given latitude and longitude that we will enter yes so this has the libraries have
[1:03:02] installed successfully so we run the rest of our cells and yes we would like to process this
[1:03:12] so enter the latitude that you would like to analyze and here we've stated the range of latitudes and
[1:03:18] longitudes but not ever not every point will have validated because of clouds or because of poor quality
[1:03:25] quality so i'll just demonstrate that so we're going to choose 20 degrees which is within our range and
[1:03:32] negative 100 and at this location this is showing the actual latitude and longitude of the nearest pixel
[1:03:42] the value of aod at that pixel but also uh the values in a 3x3 and a 5x5 grid centered around that
[1:03:53] pixel pixel average median and standard deviation in a by five and average median and standard deviation in a three by three if you enter
[1:04:03] if we just rerun this cell yes okay so now let's enter say 12 and different latitude and longitude we see
[1:04:17] there is no valid data at this at this location so this is the kind of result that will be returned if you choose a
[1:04:25] latitude and longitude that does not have valid data our last code is export csv and what this will do
[1:04:38] is it will export values within a vrc data file to a text csv file if you want to use it in
[1:04:46] something like excel so again we're going to mount our github repository and access google file stream okay
[1:05:22] okay and then we wait for that to complete and we install our libraries again in each file here's where it is
[1:05:30] accessing the file list and here's where it is actually reading the viirs data file for this we have chosen this sds
[1:05:43] list to export so into the csv we are exporting the aerosol optical thickness at 550 over land
[1:05:51] land ocean best estimate quality insurance flag over land the aerosol type overland and ocean and the angstrom exponent
[1:06:01] land ocean best estimate scrolling down it is going to save that csv file to the collab notebooks
[1:06:09] location we scroll back up yes we would like to process this file and it is listing out all of the
[1:06:24] variables that have been saved so if we go back to the colab notebooks again it'll take just a second
[1:06:34] to show up and here is our csv file if we double click on this we can open
[1:06:40] it with google sheets it just takes a second and we can see we have have an excel ready file here where it's the
[1:06:58] year month day hour minute and the um and the fields that we've specified aerosol optical thickness and going back to our so going back to
[1:07:15] our google drive we can see that all the files have been stored here and again i'm just going to emphasize
[1:07:22] one more time that if you want to run these with your own files that you've downloaded you will
[1:07:28] have to change this this is where we're accessing that file list and the files just so it reads your own
[1:07:37] google drive and then change where the program where the code is looking for that file list and where it's looking for the data
[1:07:47] file file and where it's going to save that file out out by changing just these places in each of
[1:07:55] these codes you can adapt them to read your own data files and save to your specified location on
[1:08:02] your google drive again all of this information is detailed in a step by step um within the presentation materials i am
[1:08:15] not a python expert but if you have questions um you can email either me or pawan we've included our emails in
[1:08:25] the presentation materials and i think our next step is to go into the q a thank you
[1:08:42] great thank you melanie i think that was excellent um overview of some of the clubs uh python
[1:08:49] rules which we have developed i just want to emphasize that these codes are provided as a sample code
[1:08:58] which kind of provide basic building blocks like reading mapping extracting data over certain location or converting data
[1:09:07] from from net cdf to csv for people who don't have a lot of expertise in coding but please please make sure
[1:09:18] double check everything which is there in the code when you start this codes for your research research you may often have to modify them to
[1:09:28] serve the specific purpose you want to do do but we are hopeful that these will provide you a basic building blocks
[1:09:36] uh for further developments and if you come up with some other ways to do this or if you have
[1:09:44] developed some other codes to perform some other functionality for example plotting time series or grading data data um we will be happy to hear and maybe
[1:09:55] uh if there's something maybe we can adopt in our future training so feel free to reach out to us
[1:10:02] and use whatever is required and but again be very careful uh of the codes and always double check
[1:10:13] i think uh so a lot of people have questions they have already entered in the question sections and uh
[1:10:26] if you have a still question try to put it there we are going to actually take question
[1:10:32] one by one um salvin is trying to put all the questions here's in a google doc which you should be
[1:10:40] seeing on your screen right now and what we will do is we will take one question at a time
[1:10:47] and then we'll also try to type in the response so that actually we can provide that as a transcript on
[1:10:54] our website for you to later use it so let's take the first one the question one one is i'm going to read in some of the
[1:11:04] question i will respond and some of them i will let melanie's respond depending on what they are
[1:11:12] so the first question is uh at what time does jpss overpass the equator so right now we are only talking about the
[1:11:20] gps's one um it's also called noaa 20 cross equator crossing time is actually 12 40 p.m uh during the day time and then 12 40
[1:11:32] a.m during the night time so it's remember 50 minutes earlier than sunni npp which is 1 30
[1:11:40] pm equator time and then 1 30 a.m night time okay and the second question when both have the same specification i
[1:11:52] believe this is referred to rears then why we have why we need two weirs okay uh so this is really good question man why
[1:12:02] we do need more than beer one beers we actually planning four of them so one thing remember when satellite is
[1:12:10] designed and launched there is expected lifetime and it typically varies from uh five years to seven years in case of
[1:12:20] modis they were actually only designed for to last for three to five years years but now uh because of the advancement in
[1:12:27] technology or more confidence in space technology they are now designed designed uh the veers is designed to last up to
[1:12:36] seven years so in order to have a continuous data records uh every few years four five years uh you
[1:12:43] want to launch a new identical census that we can get the continuity of the data and that is why we have this
[1:12:51] uh so many npp jps's one to four to ensure continuity of the data from these sensors great uh the third question
[1:13:04] are weirs data available on ge which is google earth engine so some of the data are available
[1:13:11] um in the google earth engine not all of them them typically google earth engine only keep the data which
[1:13:19] are gridded so even if there are some viewers data you might find that some land products might be there because they are
[1:13:27] usually graded and some of the level three data sets might also be there because they are also in
[1:13:33] great format okay uh question four on slide 17 the difference in band was specified they are very similar but in
[1:13:44] difference difference is this the difference significant or the third decimal difference not significant it makes the product almost
[1:13:52] comparable and how would you make a continuous time series when combining the the two sources so this is about the uh
[1:14:02] difference in modis inverse channels so when we are creating rgbs modis has three bands which centered around
[1:14:13] red green and blue and then the beers also have a similar but as mentioned here in the question
[1:14:19] there are minor difference in the central wavelength wavelength so for rgb application those difference are okay these those are not significant
[1:14:29] because we are trying to make a image for the visual when we do go to level two data sets um usually
[1:14:37] we considered exact uh bandwidth of each sensor and there is something called a spectral response function function so each uh each band has a spectral
[1:14:49] response function and we consider that while making theoretical calculations and making retrievals so when the final products comes out like for aerosol
[1:14:59] optical depth it will always be reported at 550 nanometer or other wavelength and those are more or less identical between the
[1:15:10] sensors so if you are comparing between modis and aeronate or modis modis and weirs as long as you are using the
[1:15:18] same wavelength they are comparable and there should not be any problem in combining the data you will still have
[1:15:25] to uh consider other aspect which are more related to the calibration accuracies or accuracies in the data product itself
[1:15:35] but the wavelength factor should not provide any obstacle in combining the data okay uh question number five
[1:15:47] is there a way to query the let's tag data through code api so i think api means
[1:15:55] application parameter application programmatic interface i believe for those who don't know and it is often used to do download the
[1:16:05] data in automatic sense through cron job or other kind of application application i think uh what we have is called
[1:16:14] opendap and opendave cloud api access so all the data from modis and viirs are available through the opendap server
[1:16:24] the link is provided in the answer sheet and it's from the same lats website which allow you to access the online
[1:16:34] data through the opendap server i think the question number six is the same uh question and we have provided the
[1:16:42] opendap link there as well question number seven does this portal allow near real-time data download for example for continued monitoring or
[1:16:58] forecasting purpose so there are two data stream often one is called operational uh data stream which is uh we get from
[1:17:07] the lats and the operational data streams are depending on the data product it can be behind behind in data processing by at least two to
[1:17:17] three days so if you're looking for the data data in real time there is another stream called near real-time
[1:17:23] data stream and usually those data are a little bit different they use the same algorithm algorithm but remember there are several ancillary
[1:17:33] data set which we have to use to simulate atmospheric conditions and those data may not be available in near
[1:17:42] real time so the new real-time application often use either climatological values or forecasting from the model so they
[1:17:50] become little bit different in terms of the ancillary data sets but the algorithm remains same and often we keep those data separate uh
[1:17:58] they are available through website uh from the earth data login uh let me and the link is provided in the answer
[1:18:07] sheet so you should be have that but and they are available within few hours of the satellite overpass typically one
[1:18:16] to three hours also uh if you are only interested in visualizing near real-time data data uh they are available through world view
[1:18:27] to to actually display aerosol optical depth fires fires rgb from vias all of them available in world view to display
[1:18:36] within a couple of hours of satellite overpass okay question eight are the noaa adp aod products on a fixed grade
[1:18:52] same sales size everywhere and same centroid for every overpass uh no they are pixel based data so the locations of those
[1:19:03] pixels will change from one day to next day to next day and they are in the same
[1:19:09] way as nasa product like optical depth they are not graded um um the pixel resolution um in case of
[1:19:20] weirs changes as you go from nadir position to the edge of the swath but there are additional
[1:19:28] corrections corrections uh viers team applies to actually minimize that change in size in case of modis the
[1:19:37] pixel size changes uh by factor of four going from node a to the edge of the swath
[1:19:43] whereas in case of wheels because of additional processing applied it only changes by factor of two so
[1:19:51] the pixel size change by a factor of two in case of years okay uh question number nine uh for five
[1:19:59] years temporal change which month data is to be taken so that the five year of terror are combined uh i am not
[1:20:09] sure if i understand that question properly properly for five years temporal change which month data is to be
[1:20:16] taken so that five-year analysis can be done done so if you are doing five-year analysis i would recommend to use
[1:20:24] all of the month 12 month from january to to december if i understand your question correctly but i don't know if
[1:20:33] that is something else you want to ask okay question number 10 so for a daily average data which of the
[1:20:43] data should be should one use what is aqua terra or combined combined so unfortunately we do not have uh modis
[1:20:53] terra and aqua combined data you will have to use individual data if you are trying to get a daily average
[1:21:02] it is uh of course will provide if you average both tera and aqua that will provide you a better
[1:21:08] estimate of daily mean than just one measurement measurement uh but still remember those are two measurements only it's not
[1:21:18] it cannot be considered as daily mean but it's better than one measurement question number 11 with the nasa level 2
[1:21:28] aod data there is an aerosol type flag that has dust and also smoke flex are the same as the noaa dust and smoke
[1:21:39] flag that is calculated in the same way no so yes that is correct that nasa level two data has a aerosol type
[1:21:47] flag flag and they are usually the diff they are basically saying that what aerosol aerosol model they have used to retrieve aerosol
[1:21:59] optical depth so they are not done separately they have not detected aerosols in case of modis vs product sorry in case of nasa vs
[1:22:12] product product uh they are very different than what no others no separate there is a separate algorithm
[1:22:18] in nova which actually do the aerosol detection product product uh and which are based on the spectral
[1:22:25] characteristics characteristics here in nasa it's only identifying the aerosols model which goes into also retrieval and just saying
[1:22:34] that this is the model which we use to retrieve this particular aod pixel so they are very very different
[1:22:45] okay let's see question number 12. the nasa level 2 has a i think sorry then the virus deep blue aerosol product
[1:23:00] seems to retrieve aod over both land and ocean ocean but i believe the mode is deeply productive audio over land only could
[1:23:08] you provide some insight on this yes yes that is true true so modi's deep blue algorithm came along
[1:23:19] very late in the mission's life they started retrieving aerosol optical death around 2008 9 or 10 almost 10 years after the launch
[1:23:30] and the operational algorithm before that was modis dark target which has been retrieving aerosol optical depth both over land and
[1:23:38] ocean ocean and the ocean product on the dark target are very good in terms of accuracy so the moon is
[1:23:45] operational products are still over ocean comes from the dark target algorithm now when it gets to the modus vs aerosol
[1:23:57] data data initially actually mode is w algorithm was selected to be an operational uh to provide an operational
[1:24:07] data sets uh for better accuracies over land so we are steam actually came the w team came along and derived a new
[1:24:18] algorithm to retrieve uh aerosols over ocean as well so now starting weirs uh on suny mpp deep blue algorithm provides aerosol
[1:24:29] optical death retrieval both over land and ocean and the dark target does the same way but the coverage in deep blue is
[1:24:40] better because of the some of the restriction it doesn't have as dark target algorithm has but those two algorithms are completely
[1:24:47] different uh if you are doing uh that kind of research just pay attention to the specific algorithm
[1:25:04] question number 13 uh in the second algorithm calculation of pm 2.5 where do we we define the area that we want to run the
[1:25:13] analysis analysis i believe this is referred to the python script script which we ran to calculate the pm 2.5 map
[1:25:22] so the the way the script work is it takes input of uh aerosol optical depth and that comes from the file which you
[1:25:31] are providing so you can run that anywhere in the world as long as the data file of aerosol optical depth you are
[1:25:39] providing as input is from that region so whichever reason the data file represent it will calculate the pm 2.5 for that
[1:25:46] region again though that is just for an example and the slope and intercept are just to give you a sense of how it
[1:25:55] looks looks uh but for different parts of the world you will probably have to provide your own slope and intercept
[1:26:01] to get better accuracy of the estimated pm 2.5 and it's only for qualitative purpose it's not meant to be used for quantitative
[1:26:10] purpose question number 14 is there an advantage to running the ipy v files in google collab instead of jupiter
[1:26:26] uh i think there's no advantage they should run using the jupiter you can access from the nasa's rsa
[1:26:34] github repository and they should run without any problem you might have to make some changes in terms of the
[1:26:41] path because the way right now we have set up the code we use the path as google drive or google collab so if
[1:26:51] you are running on either on your local computer or some other uh online platform then you will have to take care of the path
[1:27:02] where the data are read from and where you are saving the output put from those codes other than that i think they
[1:27:10] should run smoothly on any platform okay question number five uh mapping export this kind of activity can be do
[1:27:25] in panoply yes pineappley allows uh up to certain you can do the map definitely you can export the csv also
[1:27:34] but the panoply export of csv it's a little bit different formatting uh in this python code you
[1:27:42] actually actually get a little bit more organized formatting of the csv file but definitely you can use panoply as well
[1:27:50] if you are more comfortable with that question number 16 how is the level 3 data produced and how is it decided which algorithm
[1:28:02] will be used so level 3 data are actually produced from both algorithms so right now on weirs
[1:28:14] nasa is running two algorithm dot target and w and both algorithm produce level three data also so the level three data are nothing but
[1:28:23] uh taking level two data retrieved from individual algorithm and averaging averaging over either different time scale like
[1:28:32] day week or month or a year or averaging over larger special areas so for example the level two data are retrieved at six
[1:28:42] kilometer kilometer but whereas the level three data are reported at one degree special resolution which is about
[1:28:49] 110 kilometer by 110 kilometer in specialist so you take all the six kilometer pixels which falls within that 110 kilometer by 110
[1:28:59] kilometer area and average them for a given day that will become daily mean uh aerosol optical depth
[1:29:07] for that day and that we will call it level 3 data similarly we do the same thing for a
[1:29:13] month so you first calculate the daily and then from daily you can calculate the monthly averaging all the days
[1:29:20] within that month that is how the level 3 and there are some more uh details uh which you can find in
[1:29:27] activity and some of the reference which i have given in the ppt okay question 17 instead of index
[1:29:45] can we have the actual values what would be the unit of measurement okay i am not sure
[1:29:52] if i understand that question um aerosol optical depth uh is unit less quantity um also aerosol index if you're referring
[1:30:06] that is also an unitless quantity i think that's all i can say about that question unless you want to revise it in
[1:30:15] another question later on question 18 uh do we have to install necessary libraries each time we run the
[1:30:25] code in google call app uh i think i'm not 100 sure about that but if you are running the code
[1:30:37] you only have to do once as long as all the codes are in the same directory and
[1:30:45] let's see melanie do you have some more inside on that i believe the first two cells are the
[1:30:53] ones that just need to be run once so the one that's accessing and cloning the nasa or
[1:30:59] said git repository that's the first set and then the second set is where we load the libraries
[1:31:05] if when you're starting to work on a particular notebook you run that first cell cell you run the second cell and then if you
[1:31:11] want to be changing things within the bulk of the code don't believe you have to run those
[1:31:16] first two cells again it saves that information thanks melanie okay question number 19 where can we find the methodology on
[1:31:31] calculating calculating area specific slope to convert aodpm to 0.5 0.5 so unfortunately there is no textbook solution for any reason
[1:31:42] you will have to do some research we do have some training material in our past trainings where we have
[1:31:52] actually actually gone into a lot of details about aerosol optical depth and how to convert that into pm 2.5 we discuss
[1:32:01] different ways in which research communities communities have been converting that there are regression methods there are machine
[1:32:09] learning methods there are model uh scaling approaches uh so i think there are uh different ways in which you can do that and
[1:32:19] we will try to provide that link here where we have done an advanced training on those methods
[1:32:33] question number 20 in order to stabilize stabilize stabilize pm 2.5 data by utilizing aod data should i
[1:32:42] i need ground measurement for regression model what if the ground model does not exist in that area okay so the
[1:32:48] question is do i need pm 2.5 data to calculate to develop some regression so it also um if you are trying to build a study
[1:33:03] whether it's a regression or a machine learning model where you're training uh then you yes you need some ground
[1:33:09] measurement but there are other approaches where actually you can use uh global or regional models and use that to scale your aerosol
[1:33:20] optical depth into pm 2.5 and in those cases you really don't need ground measurement but the problem with those things are
[1:33:29] that the research shows they works very well well when you are averaging over longer time period like a year
[1:33:37] and they have often more uncertainties when you do those kind of analysis on a daily scale also i think
[1:33:48] if you don't have a ground measurement then it will be very hard to tell uh uncertainties in those uh
[1:33:56] retrieved pm 2.5 using that method okay let's see uh next question does the aod demonstrated include the
[1:34:10] column integrated value yes the aod values values are column integrated values uh always if so do we get the aod value corresponding to
[1:34:21] the height we need no uh the passive sensors like modis and weirs weirs provide aerosol optical depth for the
[1:34:29] entire column of the atmosphere from the surface surface to the top of the atmospheres we do not
[1:34:35] get aod for different layers of the atmosphere or different height to do that we need something more
[1:34:43] sophisticated sensors called active sensors or lidar and there are are a couple of lidars in this space one is
[1:34:52] called calypso which provides vertical profiles of aod or extinction or aerosol that data can be obtained the only uh
[1:35:01] problem with that the calypso has a very limited ground sound because it's an active sensor so it has to send the
[1:35:08] laser pulse down to the surface to make those measurement and those laser pulse are only can cover
[1:35:15] 100 meter area in a given time so its coverage is very limited but that is one of the option there are
[1:35:22] ground-based lidar also which can provide some information on vertical aerosols aerosols those are located in many places around
[1:35:30] the world okay question 22 how do you compare vs data with sentinel 5p data okay so one good thing about sentinel 5p
[1:35:49] the sensor onboard sentinel 5p is tropomy which kind of provide it's a little bit different sensors than
[1:36:00] vs vs is a we call it multi-spectral sensors whereas the tropomy is hyperspectral sensor it ranges from
[1:36:08] the uv to visible to ir channel in theory you can get similar information from tropomy as well the good and
[1:36:20] you can compare the the data from the two in terms of radians or level two data depending on the
[1:36:26] product product and the another good thing about that comparison is that these two satellites actually makes measurement within five ten minutes of
[1:36:36] each other so sumi npp veers and tropomi uh on sentinel 5p actually flies within five minutes of each other so
[1:36:48] they're very temporarily co-located and there are attempt attempt to combine the data from the two sensors to
[1:36:56] to actually retrieve more piece of information for example viirs has such a high spatial resolution of 375 meter
[1:37:06] resolution resolution whereas the tropomy resolution varies in three to five kilometer range so vs can do better job in detecting
[1:37:15] clouds clouds so you can actually detect clouds from beers beers and then applied that cloud mass on
[1:37:21] tropomy data to actually get more accurate aerosols interest case observation from tropomy so there are different ways in which you
[1:37:30] can use the two data sets jointly and there are research attempts going on in different different resource centers to actually
[1:37:43] make that happen okay uh let's see is it possible to run the jupiter from my computer as against the google drive and what is
[1:37:59] the disadvantage of doing this so i think i'm going to just read what melanie wrote there the code should run
[1:38:05] using jupyter if nasa or said git repository can be accessed you might need to change the file path
[1:38:13] uh where the file list or text and the data files are located and where you are saving the maps so
[1:38:22] the short answer is yes i think there is no advantage or disadvantage only thing is you will have to change
[1:38:30] the path either the file names or the output where you are saving if you make those changes you should be
[1:38:39] able to run it locally question 24 can we detect the impact of tropical cyclone over bayer bengal on aerosol properties
[1:38:54] through beers uh the philosophical answer is yes but it will require research and develop methodologies how to do that
[1:39:04] um i'm not expert of tropical cyclone so i don't know what really goes into that but the data is there and if somebody wants
[1:39:15] to explore that i'm sure there should be some ways to do that uh i just want to add one more thing
[1:39:32] there that to do such studies where you are trying to understand understand weathers and clouds interaction with the
[1:39:41] aerosols aerosols often models are preferred because there we we can actually control uh different things so so usually people use models to do such
[1:39:51] kind of strengths question 25 uh in order to match with the ground measurement should i convert the data time which is originally in utc
[1:40:04] into original time to follow ground measurement time yes always when you are comparing the two data sets
[1:40:12] always ensure they are representing the same time and also sometimes ground data are also repeated in utc so you will really have
[1:40:22] to make that choice based on how the ground data are reported if ground data are already utc dot you
[1:40:27] don't have to convert anything if you think the ground data are in local time then you will have to make that
[1:40:34] correction how often a city is captured by either modis modis or weirs in a given month okay
[1:40:46] so typically um modis probably look at each ct all around the world every one to two day
[1:40:57] viirs looks every single day now when we talk about the aerosol data although although viirs is passing over each city every
[1:41:08] day it doesn't mean it will have aerosol data each day because aerosols data are only available under cloud free conditions and if we
[1:41:18] look the global statistics on a given time on a given place there is always 50 chance of cloud cover so
[1:41:28] if we go by that matrix i'm assuming uh on a given month again it really depends on many factors where the city is
[1:41:36] located located tropics versus mid latitude versus high latitude latitude uh you might get if it is very high
[1:41:43] latitude you may get almost daily measurement because there can be multiple years overpass in a given day
[1:41:49] if you're on a tropic uh then you may get 10 to 15 days of data in a given
[1:41:54] month month typically we have seen around 8-10 days of the data on a given in a given month
[1:42:04] from the viewers question 27 can you please mention the time of measurement in both terra and aqua so tera is 10 30
[1:42:18] local solar time equatorial overpass time time aqua is 1 30 pm local solar time uh overcast and so 10 30 and 133 hours
[1:42:30] apart from each other question 28 how do we get the aod value up to a particular height for estimating pm 2.5
[1:42:46] yeah this is the same question as we discussed earlier the od values are column integrated values values unfortunately you cannot get audi for
[1:42:56] different height from the vs or modis question number 29 is there any algorithm that might be used to get vm
[1:43:07] to point from aod for quantitative yes there are many research attempts and there are some product also
[1:43:17] available there are some which are available globally there are some which are available regionally the one example
[1:43:24] i i gave you in the today's talk was from us so now has an algorithm based on regression method which can
[1:43:34] actually convert aod to pm to 0.5 and they put out that data data through their tools it's called aerosol
[1:43:41] watch and you should be able to get that visualization from them there are other attempts where people have
[1:43:48] used other methods to convert that nasa does not have any operational pm 2.5 product right now so it's only available through other
[1:43:59] agencies for now the question 30 is i think similar again later on i will provide some reference
[1:44:19] papers papers which you can actually refer to get some of those exact slope intercept for different parts of the world
[1:44:35] okay question 31 what are the advantage disadvantage of using data that are in google earth engine instead
[1:44:42] of using what we did today okay so the google earth engine actually um um although we didn't cover that topic
[1:44:52] today but the google attention is uh is a tool uh developed by google and it use the
[1:44:59] power of their cloud services they have a huge cloud which means there are so many super computers and what does what
[1:45:08] google earth engine does is is provide an interface between those clouds clouds and their data center so you can develop
[1:45:15] some python script or javascript so you don't have to download any data their data is connected and then you can run on their computers
[1:45:24] they are much faster in that sense so i think that is the advantage of using and then also
[1:45:30] it provides a lot of gis tech capabilities capabilities graphic data analysis capabilities uh so those are some of the advantage of using
[1:45:38] google earth engine but unfortunately it does not have all the data which you might need i think there is also option in google
[1:45:49] earth engine where you can upload your own data but it has to be in central format question 32 can comparison of aod
[1:46:03] between calypso and vs possible yes there have been attend there are so many i think studies already out there
[1:46:10] which just that and if yes what parameter needs to con so calypso does provide actually column integrated aud values so you can
[1:46:18] actually compare that directly with the vsa od question 33 is there some documentation on the noaa aerosol detection product
[1:46:30] explaining how it is calculated yes so in the presentation uh i have a slide and a link which will take you to
[1:46:39] the another presentation and that presentation actually contained a lot of details on the algorithm and then also it has a link to
[1:46:50] the the their atbt which is called algorithm theoretical theoretical document which provides a very very detailed description of the algorithm
[1:47:02] and we can probably provide that link here later on okay question number 34 how can i get
[1:47:14] repository of fire hot spot in early warning system of fire by running a code like the some of you demonstrated
[1:47:22] so the fire data are available uh in near real time using a website called forms f-i-r-m-s it's a nasa online tool to actually
[1:47:38] download download or visualize uh near real time fire data and if you go on that website there's
[1:47:45] several different options to get the data in kmz format in text csv format text format or you can get
[1:47:54] the data through api you can also get the data and shape files so i think that that website provide a
[1:48:03] lot of different ways to download data either manually or automatically okay i think that was the last question
[1:48:15] do we have more questions or we are done brock silvan do we have more question or we are almost done
[1:48:33] yeah you know that that seems to be it there is just a question about homework and certificates
[1:48:38] i just want to mention that the homework is available on the training web page right now and it's due by the 31st if you turn
[1:48:45] that in it's a google form if you submit that by the 31st and your attendance here was already
[1:48:52] logged by the software you will receive a certificate within two to three months great thanks brock um
[1:49:02] anything else melanie you want to add anything anything i missed nope i think that just about covers
[1:49:11] everything everything great uh salvin do you have anything no i don't have anything power okay great great so i think uh thank you everyone uh
[1:49:24] for joining today uh this was only one session session um and jonathan i see you are also there do
[1:49:35] you have any instruction for participants or anything uh no uh brock covered it uh homework is available on the web page
[1:49:45] and uh that's all i have thanks thank you jonathan so i think that that's all we have today
[1:49:52] uh thank you everyone for joining and thanks the asset team for pulling this together like i said it required
[1:49:59] number of people's to pull trending like that so i really like to thank everyone uh for helping in
[1:50:06] different parts of this training and all the participants for joining us please please feel free to send us your question
[1:50:15] in the email our email address is there the transcripts of this question answer will be we will review it in couple of days and
[1:50:22] hopefully we'll provide with all the links which we promised so it should be available from the website in few days
[1:50:30] for everyone to go through the recordings will also be available and if you want to you if you think that
[1:50:36] you didn't get enough uh tune in again at uh in few hours so we'll have another session
[1:50:42] at uh 3 p.m est time uh which will be basically the same session uh we'll just repeat the same information there so
[1:50:52] with that thank you everyone have a good day wherever you are in the world and we'll see you next time thanks
[1:51:06] you
