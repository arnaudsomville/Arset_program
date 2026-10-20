# Introducing TROPOMI - High Resolution NO2 Observations from Space, Part 2/3

`https://www.youtube.com/watch?v=-yOInEUJTYM` · id 279 · 1:35:13 · module 32 — High Resolution NO2 Monitoring From Space with TROPOMI

[00:00] okay again welcome back everyone this is part two of three part series on no.2 observations from space in part 1 on
[00:13] last Tuesday Melanie my colleague she covered data from oh me and some of the introduction to the only sensors and how
[00:23] to get the data of omean trough or me a NASA Earth Observatory website so again my name is Pawan Gupta I'm Marisa
[00:34] scientist here at NASA's Marshall Space Flight Center in Huntsville Alabama and I will be making today's presentation so
[00:45] as as you can see the webinar agenda session where we already covered using the OMA data session - in today's
[00:58] session I am going to introduce the Trop or me which is a new sensors and it's data product specifically focusing on
[01:06] no.2 observations and on the week or the Monday next Monday which is session 3 or part 3 we will take this data from Umi
[01:19] and Trapani and use some Python scripts to display extract and map the data and that part three will be to over long
[01:31] session on Monday for that now we will do some preparation today as well in terms of getting the data and making
[01:40] sure everybody has Python installed on their system and it's working so I will show you some of those
[01:48] preparation towards the end of the the session but let's start with session towards part 2 of this series so in
[02:01] today's session we are mostly going to focus on trough homee which stands for tropospheric monitoring instrument we
[02:12] will try to learn about omid data products we will go and access from the trauma data through various
[02:20] online tool Melanie has shown some of the data exes already during the part 1 of the series and we will also use a
[02:31] tool called panoply to display properly data so the learning objective or the expectation after completing this session we expect that people familiar
[02:45] with the Trapani satellite and its capability in global air quality monitoring you should be able to download the drop on me data and also
[02:54] able to display some of the trauma data products so just taking you back in the past and some historical aspect of ozone
[03:09] and other tropospheric trace gases measurements from space so this specific slide basically gives an overview of of
[03:21] the space missions mainly operated by European Space Agency and they goes back from 1995 when the goal which is staying
[03:33] for global ozone monitoring experiment and there have been multiple series of the go means two main since it was first
[03:41] launched in 1995 go was one of the first UV measurements which makes measurement in ultraviolet part of solar spectrum
[03:53] and mainly used to exchange the information about tropospheric trace gases come tropospheric in a stratospheric trace gases then gamma key
[04:04] umi is currently operating and it's one of those two men which we looked in the part one of this series and you can see
[04:13] that i'm going to a comb to be and then coming 2017 the trough or me was launched on sentinel p5p platform and
[04:24] then there are following going to see sent in four and Sentinel five some of those missions including and gems and tamko
[04:34] which are geostationary missions to perform similar tasks but with very high temporal resolution and they will be
[04:42] focused more on a regional scale and Melanie introduced that some of those in the part 1 where Sentinel 4 will cover
[04:52] the European and African continent gems will be launched by the career space agency and it will be covered
[05:00] it will cover good part of Asia including Australia temple will be launched by NASA in here in the US and
[05:07] that will cover North America so there is lot of space sensor already up then there are several inclined to make
[05:19] tropospheric and stratospheric our atmosphere composition in general for various applications including air quality and climate with that
[05:32] tropospheric monitoring instrument is aboard Sentinel 5 P precursors it's 10 4 s 5 P so there will be separate Sentinel
[05:43] 5 launch later in the time but this is a precursor it's again low-earth orbiting atmospheric chemistry mission just like
[05:54] aura which has a ward home instrument which we talked last year's day it was launched by European Space Agency last
[06:03] October the good thing about the Trapani that it make measurements in multiple part of solar spectrum UV visible near
[06:15] IR shortwave IR and it's basically a spectrometer the typical pixel size at the Nardi position is about seven point
[06:26] seven into three point five square kilometer for all the spattered band with the exception of that UV one band
[06:33] and short where I Bank has a little bit coarser resolution in one of the direct of the swath so we will learn about more
[06:43] about those as we go along this presentation now here are some more information about the Trop ami the sort
[06:53] is about 2,600 kilometer which is about the same as only repeat cycle is 16 days it's in the similar orbit as aura
[07:03] satellite about a hundred kilometer above the earth so it takes about 16 days to make measurement of the same
[07:13] same exact same position to the earth but the group in terms of the global coverage it provides the daily global
[07:22] coverage and we'll see some global pictures coming out from the drop on me in a as we move along this presentation
[07:30] local solar time this is the overpass time at the equator which is 1:30 p.m. so during the day time around local
[07:41] solar time 1:30 p.m. the satellite over past the craters this time can differ at different places but typically if you
[07:50] calculate the local time then it's about 1:30 you must have heard in previous presentation the typical lifetime of
[07:59] these space sensors designed earlier are used to be for example Terra acquire or they were designed to work for 3 to 5
[08:11] years with the advancement in the technology and more confidence in the space mission now these lifetimes have
[08:22] been increasing so this specific mission is designed for seven years so we assumed that this will last 15-20 years
[08:30] at least and will provide useful measurement of about atmosphere composition another good thing about the Trop amine that it makes measurement
[08:40] within the five-minute of NASA so me NPP satellite which has multiple sensors including arms and beers which provide
[08:49] very useful information about clouds aerosols so these synergy of these tools to my ears arms and troppo mean will we really help us
[09:01] to provide better tresca's product because viewers can provide very high-resolution cloud information and that feedback to trough for me
[09:10] algorithms in terms of cloud sharing the same and that helps actually improve the accuracy of trace gases which we
[09:18] retrieve for the atmosphere from the top only measurement the spectral coverage the spectral coverage is a very unique
[09:30] from the Trapani as we have seen in homie operates around 270 to 500 nanometer so it mostly operates in UV
[09:42] and some visible part of solar spectrum so the if you look this table the first row 274 ninth that's basically where the
[09:51] OB was operating mostly so it has additional channel from homie drop only has seven ten to seven seventy five
[10:00] which specifically used to get height information of arrow solar layers and clouds and then you also have another
[10:12] channel which is ir near IR channel to 0.3 two point three to two point two in the range of twenty three nanometers and
[10:23] that specific bands with very high spectral resolution of 0.05 nanometer has been specifically going to be used
[10:34] to retrieve information of methane and carbon monoxide so the different spectral channels having you are going to be used in the
[10:45] retrieval algorithm to extract different component of earth atmosphere so mostly the first part of the solar respect from
[10:55] UV to visual they are used for ozone as a to farm whole died and the no.2 which
[11:03] we are going to talk a little bit more so in terms of number of channels you can compare with the more
[11:08] is people who are familiar with Morrison's that it has on the 36 channels as compared to here you can see
[11:14] there are more than 2000 channels in this specific sensor advancement so we will always be going to compare how the
[11:24] Trapani is advancing as compared to its previous sensors including ghom Omi's Kaimuki and others so a bit of a special
[11:32] resolution it's almost 6 times higher than booming so if you compare the homies footprint on the surface in terms
[11:40] of the area and spectrometer and it's trough home is about 6 times higher special reservation the signal to noise
[11:50] ratio is another very critical component of any sensors and that determines how good the data you will receive or a trim
[11:59] what will be your accuracy imprecision and the signal-to-noise ratio is very high in case of Tron for me compared for
[12:06] me since it has additional band so they provides and it can listen it make measurement within five minutes of beers
[12:17] it provides additional information on cloud which was under will which was limited actually in case a movie so the
[12:26] cloud clearing cloud masking algorithms are better for top of me and they provide additional improvement in accuracy when we retrieve to persuade
[12:36] compass or that must become compositions from crop ami ah we will have in from only to trump or me will have carbon
[12:48] monoxide and methane measurements and they these datasets are already available and we'll see them some example today the data rate is very high
[12:58] also compared to Oh me okay so what I am going to do is there are several tools
[13:07] or online resources to extract the information or to get the information about the trope or me it's data quality
[13:18] lot of documentation and European space she has specifically put together a lot of efforts in providing all those
[13:27] information to the public on the to the end-user so I'm going to just browse through some of the website we show you
[13:33] some of the places or specific capabilities you can get through this website so this is the first one it's
[13:41] called science website and if you click on the link I will take five minutes to browse this website for you let me make
[13:50] sure you can see my screen so I'm going to switch to the I hope you can see my
[13:58] screen now you know which I am showing a website called observing our features so this is a science website you can see on
[14:07] the right bottom right side and you will find lot of details on this website so if you kind of move up and down you
[14:16] start seeing some of this little icons start appearing and basically they are different product which will come out
[14:24] from this specific sensor so you have a zone motion profiles which will give you the vertical information nattering
[14:32] dioxide sulfur dioxide form hydrate cloud methane aerosols and other products now if you go on the top tab it
[14:43] says mission status so people who wants to learn about the mission they can find details here so the the first line it
[14:51] says it has been launched in October 2017 that time in all the details and if you go on the right side every page of
[15:01] this website actually has this documentation and this is really important so you can see on the right
[15:08] side mission Performance Center put different portals different ways in which you can access the data and some
[15:19] of the tools and some additional links so just in your own time try to browse this website if you click on the data
[15:27] product you will reach to this page and on the left side you will see there are level 1
[15:35] level two as Larry validation data access nation performance so I'm just going to click on level two
[15:41] just very quickly to show you so you can see the list of all the data product which are here and there is a table here
[15:49] which are a little bit in details in a few minutes again on the right side you can see the link of important
[15:57] documentation ETB t which is algorithm theoretical basis documents so anyone who is interested in learning how exactly no.2 or
[16:08] any other product is retrieved from the fundamental measurements of radians in those spectral band they must refer to
[16:19] this document called algorithm the theoretical basis talking it has all the details all the norman cultures algorithms and everything you should be
[16:28] fine then there's P um which is basically product user manual so it will give you details about the products and
[16:38] the files readme is the file about data product file and you will see all the names of SDS which will go through
[16:48] submitted but this is really really important resource for M users who like to use the proper me data no matter
[16:58] which product you are using users should be familiar with all this documents and they should look for information if they
[17:06] don't find in these documents there are more under more you can see the tools documentation public gallery features
[17:18] results will show some of their exciting results and I will show you few of those hills in today's and in about if you
[17:26] find information and not able to find under the website or your hand trouble there's the contact me forum and you can
[17:34] message them and I hope they will respond you okay so this is one of the website which is really useful
[17:44] anyone who like to use the trauma data I strongly suggest mark this and go off and here whenever
[17:52] you find time okay so moving on to the next slide it's called again you can actually go to
[18:01] this webs the next slide directly from here also if you click on the mission status and click on go down and there is
[18:10] a mission instrument and data status and called a calendar and if you click on the calendar then you will see lot of
[18:22] data okay not many users really need all this information but this is for people who are really interested in learning
[18:34] engineering and monitoring in various things so I want to show very quickly one of the tool from this website called
[18:42] orbit when you click on the orbit what did we do is basically come up with a map and it will show the current
[18:51] position of drop M is currently so you can see very green and red line and the Trop ami is moving here right it's
[19:03] currently over Alaska and it's moving town and the shaded area the darker area is basically a reason of Earth where
[19:16] currently it's nighttime so it's right now it's passing from the daytime to nighttime actually troppo me and you can
[19:24] see orbit details here on the right top corner where it says state latitude longitude speed and all the details so
[19:33] this is interesting just to see where the drop on me is currently making measurements so then you can go to earth few on the earth
[19:44] view you will find a those who have used NASA's more W - this is something like that it's not exactly what view but
[19:56] something like that for me only and here remember what you see here is kind of a false color RGB on this snap right now
[20:08] and then there is a daily RGB also if you click on the daily RGB true color so one thing anyone who has taken
[20:19] introductory of satellite remote sensing or familiar with the image processing they know that RGB or the true color
[20:27] images are made of three bags red green and blue and while we were discussing earlier the Trapani has does not have
[20:36] red paint but it has kind of a green bang which is not exactly 550 nanometer with about 500 in a meter and then it
[20:45] has blue bag so it is this is not exactly true color RGB image but modified was some of that and that is
[20:54] why you see it's not very as good-looking or as clearly showing features as you will see on Moody's or
[21:06] peers data but you can see things here and you can zoom specific areas you can change there are other other options to
[21:18] see the images there's minimum reflectance which you can see so this is the slot of tools there is a kicked look
[21:29] here you can actually see some of the data products quickly and some of the fundamental data sets and how things are
[21:39] changing people who are interested in monitoring the performance of the instrument in terms of the calibration or other things they can go to this link
[21:49] called trends and this trend will show you some of the trends related to do some particular on the x-axis you have
[21:58] this orbit numbers it's basically showing on the y-axis how the performance of specific channel is changing with respect to the first orbit
[22:09] I believe or the certain number of orbit they chose and if you look although it looks looks going down but if you look the number on
[22:17] the y-axis this is a fractional change so it's really within two three percent things are changing and if there is
[22:25] anything abnormal happens there is a calibration team which makes sure that those adjustments are made in the data
[22:34] set so that the level two data sets are unaffected by these calibrations adjustments okay so I'm going back to my
[22:45] presentation now and let's see okay so you are able to see my presentation now I'm going to so this we already note
[23:07] this is the current Earth you know this is a website very similar to what you have seen in in part one where Mimi has
[23:22] shown you how to download the data from the earth data from the NASA this is similar website called euro browser here
[23:33] you can actually browse the specific data set so just let me quickly go through this website this will require registration to use
[23:43] certain features so if you have not registered you can click this link and register but I'm going to click here on
[23:51] the top link and that way it should take you to the Sentinel hub our website and I will show that to you okay so now you
[24:03] should be able to see my webpage and on the most of the repair shows the map and
[24:10] on the left you have some panels on the right you have some bangles which should be very familiar if you are using the
[24:18] any of the worldview or any of the similar tools okay so I'm going to go and folk
[24:28] on the United States for this specific view on the right there are several option which I will show you in a minute
[24:38] but on the left if you see this panel the top top left panel then you will see
[24:47] there are various satellites here Sentinel one Sentinel to the one which we are looking is called Sentinel 5 P
[24:56] because that's where the Trop army is aboard and once I click the Sentinel 5 P then you see the name of data product
[25:06] start appearing so ARA i just also index then you have methane cloud carbon monoxide for my date no.2 ozone and so2
[25:18] so let me click first one which is also index and then I can choose the date range from here so I'm going to just
[25:28] pick a date in let's say August 2018 I will pick 24 and then again I'll go to
[25:40] August 2018 August 24 to 25 it just shows one day range to search the data and what I am searching for
[25:50] arrows or index you can select any of the data in this no.2 also if you like to see that
[25:56] and then I'll say such so since I have zoomed into my area to United State it will show the orbits which have on those
[26:08] two dates on this location and now I can see all the orbits which actually covered that area and then this button
[26:18] called visualize so I will say visualize and then what I see is there are two aerosol index product one is like toms
[26:30] those who are familiar with aerosols this is a 342 380 nanometer which is close to what Tom's used to provide and
[26:38] then there is the 354 to 388 this is close to what Oh me this is exactly actually same as always
[26:46] aerosol index so now you can start seeing the arrows for index over this location I'm going to pick the one with
[26:55] the only equivalence and if you click this arrow on the then you will see scale which goes from minus 1 to 5 there
[27:09] also index values can vary actually from minus 10 to minus 10 to +10 and I can zoom specific areas I can change the
[27:23] date from the left so I can go one day back I was 24 this is I was 24 in the
[27:32] image will change in a minute and you will see this huge plume of aerosols coming out of the fires during the that
[27:42] time in us in Canada and with the weather system it's actually transporting over a 20 and over
[27:50] the Europe so he was a really nice flume once it slowed completely here in this image just give give it little time so
[28:03] if you are browsing with me this is really great too to see almost near real-time data and visualize them or
[28:17] this and you can use this share this again on the right side there are many many different option you can select
[28:25] specific area you can go to the specific point and then click on that plot thing so this is specific is not available
[28:36] let's see if you click on this bottom panel which is kind of animation it will animate all the images which we have
[28:47] searched and you can play those animation by clicking here you can also download so you can see how the
[28:55] Saur Saur moving with the weather system you see this lines this are basically orbital line in while satellite is
[29:04] making measurements so you see some discontinuity but you should be able to see how things are moving from one day
[29:12] to another game so this is really nice okay now let me get back to the presentations again spend some time as
[29:23] part of your homework I strongly recommend you browse this site get familiar with yourself from this website
[29:30] and if you plan to use Sentinel 5p or toe for me data this is really good resource for you to be to use so I'm
[29:40] going to back to my presentation okay so I hope you are able to see the slides now okay let's move on so this is the
[29:56] table which I showed you from the on the website but these are all the product and if you look the last column of this
[30:04] table then you see it says released or give some dates so for example air also layer height this product has not been
[30:14] yet released it will release sometime this year ozone profile which will provide actually the vertical information about ozone this is also
[30:24] going to be released sometime later this year but otherwise most other products have been released we are going to focus on nitrogen oxide
[30:33] in today exercise and in the on Monday while we start doing the Python script so this specify winner is focused on
[30:43] inner probe but same all those same information can be applied for all of the products and feel free to use any
[30:50] one which make which you are using in your own research analysis or applications so this is just an example
[31:00] this is the same image which I just showed you on the central hub just created using a different tool it's UV
[31:07] eros or index again verse 24 2018 those red colors actually shows the aerosols coming out from the
[31:16] fires in terms of the smoke particles and traveling long distance with the weather system on the right side you see
[31:24] an example of air ozone layer optical depth which is tau on the Left panel and the right panel is height of their solar
[31:33] layers this is just right now showing just an example this data product has not been as least but once it is
[31:41] released you will be able to get the height of aerosol layers in the atmosphere and this specific product is
[31:48] really very useful for people who are doing modeling of air quality if you are a modeler then one of the parameter
[31:57] which goes into the model is called injection height of the height layer height and those can be very critical in
[32:04] actually providing accurate air quality forecasts so look the specifically modeling community is looking forward to have this product from the tropical
[32:17] maintained this is again showing some example of those product which we just saw the list within this is a global map
[32:25] from May 2018 to January 2019 six about eight months global mean and this is the mixing ratio of methane all around the
[32:37] world and you can see how the resolution is very high at different parts of the world where the methane is there in that
[32:47] mysterious on the right you can see the so2 again it is ambition for several months and you can identify actually
[32:56] different specific source location using the so2 data and by looking these datasets for long term as melanie has
[33:05] been showing some example how the ohmy so2 data has been used to see the trends in so2 to amount in the atmospheres over
[33:17] last several ten to twelve years and drop ami is going to further enhance our capability to identify those specific sources just
[33:26] because it has a really high special resolution compared to only and the accuracies are also expected to be
[33:33] better the no.2 data which is focus of this webinar there are three different types of the datasets you will see one
[33:45] is called near real time whenever satellite is launched and the algorithms are developed for each satellite those
[33:54] algorithms goes through the revisions multiple time during the lifetime of the mission so when satellite is flowing
[34:04] there is a pre-launch algorithm ready to be used once the satellite starts sending the data and as we start
[34:12] learning more about the data we do the validation we learn new things about the data and some of those new learning
[34:19] aspects some of those science thing we implement in the algorithms and once those new things are implemented in the
[34:27] algorithms or Corrections are made the data are reprocess so there are different versions of the data available
[34:34] every time you look from the satellite any of the satellite data products so currently you can already see there are
[34:41] three different versions already happened actually in very short period of time from for me and currently that
[34:49] 1.03 version is the latest version there are two different strains of processing actually three one is called
[34:58] near-real-time which is identified as an RTI and there is offline and there is another one which is currently
[35:04] processing so depending on if you are reprocessing the entire mission then you use those stream the near real-time data
[35:12] are available within few hours of the overpass of the satellite and they have been used for real-time application like
[35:19] a quality forecasting and other disaster management type of applications so there are several assumptions made in real-time algorithms which are corrected
[35:32] when you early processing the data because you always end and depends on ancillary set of the data
[35:38] sets to retrieve certain parameters so we will see little bit more on that in coming slides special resolution like we said in the
[35:50] beginning Trapani is about six times higher in terms of the spatial resolution here this image just shows
[35:56] the no.2 on the left from the homie again this is just one lane number 22 2017 on the right is the same area of
[36:06] the earth observed by drop Oh me you can clearly see from left to right the resolution is very high on the top of me
[36:17] you will also see some gaps in the data in Umi and those gaps are coming from there's something called a row and
[36:25] overlay and this is instrument certain sensor or CCD cameras on the instrument are not working as expected
[36:33] and therefore those data has been masked to make sure we are getting accurate and of the measurements so that is why you
[36:43] see some of the data gaps in homing but in proper me you don't see those gaps the instrument is working fine and
[36:51] providing very high quality high resolution no.2 data and throughout this presentation we have tried to provide various links of source of this images
[37:04] in additional where you can find the additional information about this data products okay so excuse me just give me rinse water so those who
[37:27] are interested in algorithm how the no.2 is retrieved from those spectral measurement by Trapani one of the
[37:37] strongest suggestion I will give you is to go through that 80 BT which we talked earlier algorithm theoretical basic
[37:45] document the link is also given in the bottom of this slide you can look at but you should also just to give you a
[37:54] very big picture overview of how this algorithm works is you have this spectral radiance measurement from the
[38:02] Trapani which we just talked and looked and then there is an algorithm called dose differential optical absorption
[38:08] spectroscopy this is a radio transfer based algorithm which accounts for different absorption spectrum that must be as specifically for no.2 and this
[38:22] algorithm you provide the spectral radiance to this algorithm which operates in the wavelength range of 405 to 460 nanometer specifically for no.2
[38:34] retrievals if you want to learn more about the doors again and you can find a lot of information in a t bt but also
[38:41] there are some references about earlier work on this algorithm which are given here the output from the dose algorithm
[38:51] comes the no.2 slant column density and there is a data simulation system which provides what information on the
[39:00] vertical distribution of these no.2 so when you combine this slant column density with the data s initial system
[39:07] you get two piece of information phosphoric and notice one column density and the stratospheric arrow to slant
[39:16] column density so you have two pieces of information for a stratosphere and for troposphere now since for air quality we
[39:25] are mostly interested in Cooper spheric column and o2 this is further corrected for air mass fraction to convert into
[39:35] the vertical column density and the air mass vectors are basically function of surface albedo Fahrenheit satellite geometry in the cloud fractions and
[39:49] those are derive a used in form of look-up tables this data simulation system is nothing but a TN v NP model which data are
[40:00] available of it about 1 degree by one degree degree and acid combined with that electric value so this is in very a big picture
[40:11] view of how the algorithms run so there are three different pieces of other algorithms and all the details about
[40:17] this all those pieces can be found in this algorithm theoretical basis document the product inner product in
[40:25] the file name so when we start downloading and playing with the data you will see the file name is very long
[40:31] it's about 86 character in the length and the table actually gives you specific the character numbers 0 2 or it
[40:45] is 6 and what those means so I'm going to focus mostly on the one which are importing so from 0 to 3 which is s5p is
[40:55] nothing but mission name and it says always it will be s5p % now for trouble me together for
[41:04] sentiment 5b precursor NRTI we talked about the near real time versus offline so the NRTI is basically saying area
[41:12] time data if it is offline it will say offline ofl if it is reprocessing it will say are PR or reprocessing so
[41:22] depending on which stream of the algorithm it is going through this will change then you from 9 to 9 the product
[41:30] identifier and these are listed in the earlier table which we saw about the product so in this case this is level 2
[41:38] n or two then you have the the data are provided actually for each orbit in one orbit of troppo we contain the data for
[41:48] about 100 minutes later another one minute about and in this specific case this is the start time which is
[41:56] highlighted in blue color and in the format of a four-digit year two-digit month two-digit day and then the T is
[42:06] common which start 4 which is 10 for the time and then you have 18 hours 30 minutes 16 seconds and this is a GMT
[42:15] time or UTC time is not your local line if you want to convert that into your local time you
[42:21] have to make the correction for the UTC to your local time this is start time and this is ten times so this specific
[42:29] granule is for 2018 August 16 1830 GMT to 2011 GMT which is about hundred and one minute two minute time window and
[42:41] then you have orbic numbers some people like to use orbit numbers to identify their animals and then there are some
[42:50] other processing information which you may not be using but that's there for you to use if it makes sense for certain
[42:58] application each data products comes with quality assurance or QA filtering so there are QA values for no2 there are
[43:12] two different suggested Q values point seven lakh if the K value is larger than 0.75 this is recommended filter so when
[43:21] you start using the data for quantitative purpose make sure you read the Q parameter in the SDS and we'll go
[43:28] through that I'll show you how to get that and make sure you use filter your data for those recommended values of QA
[43:36] so when you use the 0.75 larger than that value it means it removed route scenes and when you are using the Q and
[43:45] you larger than 0.5 it means the you are getting good quality data over cloud scene and yzma and ice as well so this
[43:56] possibility of cloud contamination when you reduce the quark QA values so just keep keep an eye on that when you start
[44:03] this data this may not be that relevant when we are just making the images for visual purposes but when you start doing
[44:12] quantitative analysis making calculations then this Q value becomes really really important ok another to document which we already I think kind
[44:24] of gone through but very very important if you plan to use trauma data these are your go-to guide actually so a
[44:32] tivity we already talked on the left side and then the user manual for no.2 which is on the right again the links
[44:40] are given here and these are like I said these are your go-to document for any of the further information on the NLT
[44:48] product from the Trop home validation is an important aspect of any satellite retrievals algorithm it's integrated part of data analysis in terms of no.2
[45:02] we talked a little bit about that in OB presentation and similarly to owe me another product from Proform we are
[45:11] validated using the ground measurements which comes from and either pandora network or the next Ross networks in the
[45:20] expected errors in no.2 or for specific no.2 it's about less than 10% and for proper silicon o2 it's about 25 to 50
[45:30] percent so it can be large so remember most of the no.2 I propose fears near the source because of the short lifetime
[45:38] and since the word information on the vertical destitution of no.2 is coming from the model there are high
[45:48] probability of larger biases in tropospheric column near the source this is a validation website for trop Oh me
[46:02] where they do routinely validation of each of the product and provides the reports he is I'm going to just very
[46:08] quickly show this so that you I'm going to click this website and then it will take me to let me see if I can show you
[46:20] the comb okay I hope you are able to see my web page so this is a validation
[46:27] facility and you can click on any of these products in case of nitrogen dioxide dioxide once I click nitrogen dioxide reach to
[46:36] this page and here you can see quarterly validation report then first to an addition results and there are like weekly also I think there
[46:47] are reports available here once you click on the first validation results there's a diagram that shows scatter
[46:54] plot between matched dots absurd energy molecules per centimeter spheres versus the Trop homie in the correlation is
[47:03] about point six so you can see some bias consistent bias low bias in in Trapani data in this specific validation if you
[47:15] click on the download PDF file here this symbol then you will reach to a document which can give you more details on those
[47:24] validations more insight where those locations are of the dos instruments are located on the earth and some more
[47:33] details and this I think they do revise this quickly in very often to provide up-to-date validation results and this
[47:45] is again important aspect if you plan to use the data make sure you refer to the validation and make sure you account for
[47:54] those potential bias in the datasets specifically when you are making quantitative calculations okay moving forward data use of guide this is
[48:06] another resource for you to find all the details about the data products what are the specific scientific data sets inside
[48:14] that and you will find lot of useful information here as well ok since I have left only ten minute I'm
[48:24] going to go quickly to exercise to a panoply I hope as part of construction we have given for this webinar series I
[48:35] have requested you to download the panoply on your computer so if you have panoply already installed on your
[48:43] computer we are going to go through this exercise and see some of the data file which we downloaded ok so
[48:54] how to get the data first we have gone through that exercise in part one through NASA earth data the link is
[49:02] given here it required registration there is others another source of getting data from Copernicus open access how it's called sentinel hub it also
[49:14] required registration we have provided these links in the on a ship training page they are given also here feel free
[49:23] to register and both datasets either they are coming from the nasa earth or isa they are the same product so there's
[49:32] no there's no difference whether you download the data from the nasa our isa you should get the same file make sure
[49:40] they are same coming from the same streaming of processing as we saw nearly time versus offline versus reprocessing
[49:49] okay this is the how the sentinel hub data center work we already looked actually the nasa earth part and since
[49:58] we already looked i'm not going to go over the sentinel hub but this link will take you to there again if you are
[50:04] registered they will allow you to search the data and will be able to download the data so with that i'm going to move
[50:12] to the panoply panoply is an open source software which runs offline on your computer it has Windows and Mac both
[50:23] version today we are going to use the Mac version 2 I will show you on from my
[50:28] screen if you have already installed the software on your computer feel free to follow those who are on the window most
[50:36] of the stuff should be same if there are differences I will point them out if you do not have go to this link and download
[50:44] it's very quickly it should not take more than 5 minute to download and install the software so with that let me
[50:53] go through one just before actually and go through the exercise I just want to show cute slide so that you those who
[51:01] have not downloaded the data next first slide shows the link to get those data so this is El Sol index if you
[51:10] click on the link at the top you should be able to download the data make sure these links are from the NASA earth data
[51:17] so it may ask you to log in so if you have not registered it may not be allow to download the data
[51:24] so make sure you register and log logged in to get that this data this is methane data this is carbon monoxide and again
[51:36] we are looking the August 2018 case just to see some of the images from those fires this is nitrogen dioxide and then
[51:44] we will talk about next week's preparing so now I am giving everyone about one minute to prepare for this exercise and
[51:55] then I will start showing panoply exercise here in a minute okay I think let's ledge two couple of
[52:09] polls before actually we move to dependably I think we have some time so I am going to drop some polls here's and
[52:16] polls are basically quiz as you are done in the part 1 similarly so just to make sure that everybody is listening me okay
[52:29] so the first poll is can you see it you have about 30 seconds to respond to this
[52:40] so here you can see 80% people responded correctly it's a European Space Agency mission ISA mission it's not NASA
[52:50] mission and it's not a slow machine definitely so just just to make sure that you understand that part ok now the
[53:00] next question is so the next question is tropi means special resolution is approximately times higher than only how
[53:14] many times higher than Oh me we talked about that little bit again you get about 50 seconds to come
[53:22] so I got 57 people 57% people voted for this poll and the correct answer is about six times so 72% people got it
[53:35] right it's not definitely hundred times higher we are not there yet so this correct answer is six percent
[53:44] okay since we are running out of the time I'm going to go back and show you very quickly some of the panoply
[53:50] exercise okay now you should be able to see my screen then I'm going to come out of the
[54:04] PowerPoint mode and then show you the panoply so the panoply icon looks like this if you can see it's a group with
[54:16] the blue and red shade and once you start it you will see let me start from the bin link you will see a window like
[54:29] this or if you are on math and window the appearance might look a little bit different but on the top you will see a
[54:42] panel where there is a file in the file you can click on open once you click the
[54:50] open you should see the directory structure now you can select where you have kept your the data so remember
[54:58] those four files which we asked you to download you need to have those file in order to see this so since we are
[55:05] actually kind of running out of time I am going to extend this about five seven more minutes so that we can go through
[55:12] this exercise so those who can stay longer longer please stay so I have already selected my directory English the data are capped
[55:24] and since this software already identify which file it can read you can see there are four files in my directory which
[55:33] tick tick which ends with dot NC in there are no2 co ch4 and aerosols so I'm going to go
[55:42] one by one and open this file so first let us start with the arrow sold file it
[55:48] says TR AI once I open it shows there are two different separate part of this panel a panel one on the Left shows the
[55:59] list of the product or the SD is what we call scientific data sets on the right it shows all the metadata about those
[56:09] specific product so for example if you click there are various subgroups of the data in this specific dotnet CDF files
[56:23] the product which we are interested are under the tab called product or the subgroup called product if you click the
[56:32] product you will see also index 314 380 eros or index position they are also low index 354 to 388 again the index 342 380
[56:47] if you click on that on the right side panel you will start seeing details all the attributes for that product so it
[56:56] shows what is their unit what is their dimensions it has a time dimension of one versus the skin line is 30 to 45
[57:07] with the grant per set of 450 long name the wavelength range coordinated 72 inch coordinates and the field values it does
[57:18] not have any scaling values or anything I click that and I'm going to actually plot the one which is corresponding to
[57:25] the only wavelength which is 354 to 388 and then on top left there is a button called create plots I click that it will
[57:35] show me a panel with three different option he says created cheer offense 2d plot and then the horizontal and ground
[57:45] pixel axis I am going to create I want to try ma'am so I will say create a
[57:50] geo-referenced plot and click on the create and it should show a map like this a new window should appears where
[58:00] you will see a map after one so this is one orbit of trop or me on august 16
[58:12] 2018 passed over United States in part of the South America the aerosol index range by default it takes the minimum
[58:21] and maximum values you can change that so you can go to the scale window on the left of this drop or me on the panoply
[58:30] window and you can change it to make it visualisation little bit better so I'm going to start this with minus one to
[58:41] six just to see some features better so now I can see actually very high values not more contrast in this picture in now
[58:54] if you want to zoom in certain part of this you can actually click command button on your Mac and start will show
[59:02] you a plus sign and you can click any part of the image and it will zoom if
[59:09] you do not have if you are on the Linux machine on the window machine you can actually go to plot on the top panel and
[59:25] there is a zoom brought in and zoom plot out you can do that click on that and
[59:30] that will also soon in Exuma actually sexism in and then zoom out again you can see very nicely result tools coming
[59:41] from those fires okay now let's move to the next data product I'm going to very quickly show two other open no2 file
[59:57] open no.2 file and again in no.2 you can see the similar data structure under the product we have all the different
[1:00:10] parameter which we need so one of the things which we are interested is nitrogen dioxide troposphere column that
[1:00:17] is what we are going to use for air quality application and you can also see for the sts there is aq value which we
[1:00:25] looked earlier remember in the slide and then there are other information as well here so I am going to plot the nitrogen
[1:00:33] dioxide proper spheric column again create plot and bring little bit quickly here because I don't have really time
[1:00:42] again the scale is the values are very small in this case so you have to adjust the scale in order to move to see the
[1:00:52] features so you have to adjust this scale to make sure that your when users but if you go back to the PPT I was
[1:01:08] showing you if you make some adjustment you will be able to do this kind of scaling and start saying some of the
[1:01:15] no.2 hotspots similarly you can look other data products like methane a carbon monoxide which is given in those
[1:01:24] files since we are little bit behind in this webinar this part I am NOT going to go through all the files but this is
[1:01:32] very very easy to use - it gives you a very good insight on those netcdf file and then you can make it keep Lots once
[1:01:42] your practice ready you can go to the file you can export as a save image as and you can save them as a PNG image or
[1:01:51] something else you like to do you can also extract the data into CSV format so export the data right so if you click on
[1:01:59] this specific parameters and then export data export as CSPA and then you will be able to export that
[1:02:08] entire data into CSV file which can be opened in any text editor or Excel while we will go through this little bit
[1:02:17] more actually on one day when we use the Python scripts to read similar files we will read these same
[1:02:26] files files mostly for no.2 and go little bit more into depth when we do the Python scripts
[1:02:35] with that I'm almost done I just want to show quickly another slide before it's kind of homework for Monday before
[1:02:48] Monday session so we have posted instruction to install Python and there will be code testing code will be posted
[1:02:58] on our side website please make sure you download and install and make sure your Python is working we are going to use
[1:03:07] anaconda to run the python script the data also instructions are available on in the slides also as well as on the
[1:03:18] outside web page so please make sure you have the data in Python trading on Monday session which will be two hour
[1:03:25] long session where we will read and extract different types of information from the data sets both for troppo me
[1:03:34] and ami so with that I will end sorry for little bit late but we should be ready to take question answer in few
[1:03:43] minutes thank you ok everyone I think we are ready to take question answers you should see the
[1:04:00] screen with a Google document showing question and answer for Session two we have taken questions you posted in the
[1:04:11] question section of GoToWebinar and pasted here and we will try to go over one by one and my colleague Elizabeth
[1:04:22] she is going to type the response here and we will share this transcript once we review and clean it up we will post
[1:04:32] this on the training page for you to further refer those responses so that I am going to start taking the first
[1:04:41] question so what general pre-processing and calibration need to be performed while analyzing drop on my data ok so
[1:04:54] the short answer if you are using level 2 data or like the one which we showed today like you know two arrows or index
[1:05:04] or any of those things then most you should be aware of the calibration but you do not need to make any correction
[1:05:15] yourself you should be aware of the errors which can occurs due to those calibrations changes but you do not help
[1:05:24] you make those changes those changes are already performed in level 1 data which are used to create labor to let us so if
[1:05:34] you are doing your own retrieval algorithms then you may have to perform those calibrations depending on which
[1:05:44] version of the data you are using can we transform the transform the netcdf format pro-forma data into more similar
[1:05:55] tabular format like CSV if we can do we lose an information by doing that yes you can do that and that's exactly we
[1:06:05] are going to do on they using Python script you can also do actually using the panoply which I just
[1:06:13] showed and you do not reduce an information question three are you aware and can cite example of
[1:06:26] omean drop on my data product application in air quality managed by management by national and regional public organization so o my data has
[1:06:38] been used for a long time in various by various agencies specifically to look for trends in no2 and peso to US EPA has
[1:06:56] specifically used o me and a to trend to confirm their ground measurements trends over United States there are many other
[1:07:10] applications people have shown for example gas and oil and gas activities in different parts of the world
[1:07:19] Melanie has shown some of those examples trough for me data are injected actually into Copernicus global air quality
[1:07:32] monitoring program they have been assimilated into those models but I am not sure if proper me date has been
[1:07:43] already started by any of those air quality management agencies yet o mediate has been used in several cases
[1:07:54] but it really depends on the scale is very different for different agencies okay question number fo any timeline on
[1:08:14] James and Chen poor launch date for NASA is aside okay so James is a Korean satellite it will be launched in 2020 or
[1:08:25] 2022 2021 I could say tempo is a NASA mission it will be launched in late 21 to 22 question five can be retrieved an
[1:08:47] approximate value of no.2 concentration for a specific light long from top of my product is it just visualization yes you
[1:08:57] can get specific value of no.2 on a specific location and we will show you how to that using Python script on
[1:09:07] Monday question number six does the data from prop ami can be used to do the air quality modeling first small-scale area
[1:09:27] short answer is yes it will really depend on what small area you are talking about and what kind of air
[1:09:37] quality modeling you want to do but tropic data can be used to inter compare model outputs it can also be used to
[1:09:49] assimilate the data into model it can also do a number of other things for our project modeling
[1:10:01] question number seven can be you access the data through API yes the short answer is yes I do not have the exact
[1:10:13] link at this point but if you go on the drop on the web side which I showed
[1:10:18] earlier there is a section called data in tool and under which you should find ways to get the data through API but I'm
[1:10:28] sure they have API access to the trough on it a town if there are restrictions to be made on the Trop um instrument
[1:10:39] when it is on the routine runtime environment how are these Corrections made in the instrument of the Trapani I
[1:10:50] am not sure if I understand the question correctly but there are instances when instrument usually instrument runs
[1:11:03] continuously there is no unusual switch on and off of the instrument or maintenance but some time satellite
[1:11:14] orbit has to be manually Wynyard to avoid certain space debris and during those time the data can be affected but
[1:11:26] otherwise it's continuous instruments are running continuously cursor number nine trauma data provided in the trouble meter at you and are the same yes they
[1:11:44] are the same for analytics panoply does not help much is there any other tools such as RGS Pro can be used if you can
[1:11:56] open netcdf file in arcgis then you can use it and we will show some Python tools Monday to analyze some of the some
[1:12:09] of the Trop on a data question 11 does Sentinel oh three product cover hold the globe yes if you
[1:12:24] are talking about trough or me ozone product ten years into our whole globe on slide 16 can you explain why ch4
[1:12:41] looks high concentration in Cambodia I'm not sure why it is high in Cambodia beta let's see let me see if I can see slide
[1:12:53] 16 I'm not sure why it is high but you have to look into the sources of ch4 usually
[1:13:13] methane is emitted by fossil fuel-burning and some of those how what do you call them like in areas where
[1:13:26] they have a lot of animal forms and things like that you can see high concentration of ch4 but you have to
[1:13:34] look a specific resource in Cambodia in order to in order to identify why the high values not showing in Cambodia I'm
[1:13:46] not familiar with that region question 13 NRTI versus offline data stream what is the different explained in their
[1:13:58] application okay so an RT is near real-time they are produced within within one to two hour of the overpass
[1:14:11] of satellite so if suppose Trapani is over passing over europe at 10:30 the data should be available in next one to
[1:14:20] two hour over the euro and since as you saw on the algorithm verbs slide there are additional information required to
[1:14:31] retrieve certain parameter in those additional parameter may not be available in real time so we need to
[1:14:39] make some assumption about those parameters so in the the way near real time algorithms are designed they are
[1:14:48] fast to work faster and produce the data offline algorithms are much more robust they have all the necessary supporting
[1:15:01] data sets and model required to produce more accurate and more realistic value of a specific product and they are
[1:15:11] usually delayed by several days depending on the specific data products mirre time data are specifically used for application which required the real
[1:15:24] time data for example quality forecasting natural hazard mapping like during the volcanic eruption where things are moving like a during the Y
[1:15:35] fires like how their sources are moving for those you need real-time data accuracy becomes second bringing those
[1:15:44] cases for more quantitative analysis scientific analysis like long-term train or quantifying impact of certain things on a quantifying impact of fires on
[1:15:58] arrows or loading or quantifying impact or emissions from certain power plants you need more accurate datasets best
[1:16:08] data sets and for that usually we use the offline processing or reprocessing streams question 14 yr- aerosol index so
[1:16:24] arrow so index is a quantity calculated for every single measurements irrespective of cloud or no cloud so
[1:16:34] usually when you have absorbing type of aerosols the value is positive when you have scattering type of aerosols like
[1:16:43] sulfate aerosol or cloud then the values are usually negative so most most often which when you see negative values of
[1:16:53] aerosols they are usually cloud or or in urban areas you will see if there is dominant in type B scattering back to
[1:17:02] particles question 15 in your opinion did the calibration performed for homie for for the no.2 data have enough
[1:17:15] validation to be applied in South America without additional modeling again I think current televisions and the data quality is good but I am not
[1:17:27] specifically sure about the performance South America I will strongly suggest you go to their validation website look
[1:17:37] even for some of the papers they might have published or contact some of the people and you will be able to find
[1:17:44] little bit more better answer in that way if you still don't find feel free to email me and I will try to find a
[1:17:54] specific paper for you and we try to put you in touch with people who make those validation how to separate the
[1:18:05] tropospheric a not too firm statistic and to do the bride surface reflectance effect no.2 okay so let me take the
[1:18:13] second part of the question fast yes the bright surface reflectance does affect another retrieval and therefore the
[1:18:21] modeling or the characterization of surface reflectance become important and we in the algorithm key team currently use the oume based reflectivity surface
[1:18:35] reflectivity but in future ones more data are accumulated from properly they will start using the drop on the based
[1:18:45] reflectivity now the part one of the question the separation of column or value of no.2 are separated into
[1:18:56] stratospheric and tropospheric part using a global model it's a chemical transport model which runs at about one
[1:19:05] degree one degree in the vertical profiles of no.2 is obtained from that and based on that the scaling is done
[1:19:12] and converted into two different piece of information so if you look the algorithm slide there is a data
[1:19:20] simulation system block on that and that's where the vertical information comes from question 17 can you explain the
[1:19:34] difference between real-time offline and reprocessing version of the data gain okay I did I just explained and I think
[1:19:41] the answer is there so you can just check the previous answer how to calculate aerosol height okay so also
[1:19:54] height are actually in case of tropi me the algorithm will use the bank in 700 nanometer range of solar spectrum in the
[1:20:08] way it has been done is the choose specific absorption line in those spectral range to calculate the height
[1:20:18] at different altitude depending on the sensitivity of a specific wavelength to a specific component of that Monsieur
[1:20:26] they try to figure out where they're also layer hydrates again I'm not really sure about the specific details of the
[1:20:38] algorithm but if you are interested please write to many male and I can provide the activity or you can just go
[1:20:45] to the drop on the website and click on that arrow so height product page and you should be able to find the a tivity
[1:20:53] document there which will help all the details above the algorithm could you give a significance on UVA F 3 at index
[1:21:06] and how we can use it to calculate measures such as PM 2.5 concentration so in general UV aerosol index are not used
[1:21:17] to calculate pm10 concentration UV r also index demonstrate the amount of absorbing l source in the atmosphere the
[1:21:27] their value also depend on the height of their sole layer in that mosque you'll typically these measurements are
[1:21:35] sensitive for high altitude air source so they are not recommended to use to calculate PM 10 or
[1:21:43] PM 2.5 question 20 how are the QA values are created QA values are created based on certain decision which are made
[1:22:02] throughout the processing of the data so when you start with level one Big Data radians and go through the algorithm in
[1:22:11] the algorithm there are several steps like cloud clearing snow ice masking surface reflectance value completion lookup table air must factors all those
[1:22:24] factors on tribute in calculating the Q arranges this is a know one single mathematical formula but there are many
[1:22:35] different pieces of algorithm in which errors can produce so basically Q s shows how your algorithm has performed so it's
[1:22:47] indicator of the performance of the algorithm and the value is decided based on the various factors which are
[1:22:55] accounted in the algorithm in case of drop or me I don't know those specific factors but again give ities your document to look
[1:23:09] for those specific details can we analyze the data in our again I'm not sure but if you can open the net
[1:23:23] signifying yes sure question 20 to any gaseous mercury data is there again I am not familiar in such
[1:23:37] data what are the cloud screening criteria for Co and no.2 so the cloud screening is done using standard method
[1:23:53] and also they sometimes they are also going to use crowd from the veers data again if you want to go into the
[1:24:02] specific details you can find those into a tivity document I am not familiar with the very details of crowd screaming
[1:24:11] false you are in every product question 24 is it possible to subset the resultant model image to smallest shape
[1:24:28] while I we are not I don't think I understand the question but if you are asking if you can convert the next CDF
[1:24:40] into shape file the short answer is yes there are various ways in Python which can do that I am NOT expert on that so I
[1:24:50] will not comment further question 25 I think I just responded to that and how to use just for no.2 there is a slide in
[1:25:06] PPT where we specifically talked about the QA value which are recommended by the science team of rama v which you can
[1:25:15] use question 26 2006 a OD plot I wonder if you happen to know the general wind direction and can point out the wire
[1:25:27] file location since files should be at location of most intensity OD when things decrease with distance from the
[1:25:34] fire is the correct assumption first of all those plots were not of Eros own optical depth but also index
[1:25:41] from the drop on me and this is significant difference between the two product second I'm not sure about the
[1:25:49] wind direction at this point but there are ways in which you can do the wind direction and the assumption is correct
[1:25:57] you should see high values close to the source and away from the source but at the same time depending on the time of
[1:26:07] the observation you might see less amount of smoke near the source in high amount of smoke which has been
[1:26:15] transported to the long distance so you may not see your assumption can become invalid in those conditions so it
[1:26:23] depends on at what level the fires were and when the satellite was making measurement remember this is only one
[1:26:30] time measurement from this satellite question 27 which spectral data we are supposed to take for error soul so for
[1:26:48] eros or index there are two sets of their lengths they are using right now 380 and 3 sorry if 354 and 380 which is
[1:27:01] corresponding to Omaha or Toms wavelength and there is another one which is 354 say 54 to 388 which is
[1:27:14] corresponding to OB wavelength so there are two arrows all indexed which are provided 342 3 and T and then 354 to 388
[1:27:35] question 28 how to extract Netscape data with latitude longitude we will go through that exercise on Monday question
[1:27:46] 29 when it is useful to use for me data rather than drop Oh mediator if you are
[1:27:53] looking for high resolution data then the top of my data should be used can wear retrieve emission data instead of
[1:28:06] column concentration now so there are methods which can be used to convert those column data into emission data
[1:28:16] sets sets but those data sets are not available on operational bases but individual groups of people have developed methods in
[1:28:27] which column data can be converted into emissions what percentage of error is happen due to cloud by processing energy I'm not
[1:28:41] sure you will have to refer that to the ATV to document for that question 32 how much is the correlation
[1:28:58] between satellite derived product and ground-based observation data so one of the validation which we just looked in
[1:29:08] this exercise says correlation of 0.76 but that was first validation exercise so I won't go on that number but you can
[1:29:18] again check their validation website and make sure they have make sure you are using the up-to-date validation numbers
[1:29:29] and then we'll give you little bit more into details about how the performance as compared to the gamma Simmons
[1:29:42] question 33 how large settlements can be monitored with tropi meat-eater again I'm I'm not sure if I understand
[1:29:54] the question correctly but if you are asking it really depends on how big the sources the Trop of me is very sensitive
[1:30:04] because of its high signal-to-noise ratio and high spatial resolution so you should be able to see even smaller
[1:30:12] sources but really it's a very subjective question so I don't know what exactly how small you can go in terms of
[1:30:23] the source is there Hoover for this session yes the homework is make sure you install the Python properly make
[1:30:31] sure all the data sets are ready and make sure all the packages of the Python which are required for this exercise for
[1:30:40] Monday works in on your computer we will go through each exercise on Monday I want met make sure that everybody
[1:30:48] everyone who is online on Monday should be able to actually go through those exercises okay question 35 how many molecules per
[1:31:03] centimeter only what is the calibration correlation previa one I'm sorry but this is I don't understand this question
[1:31:15] at all question 36 can we transform abundance or density of no.2 molecules into concentration I think so oh there
[1:31:34] are ways in which you can count convert things into different units I don't remember my top of my head how
[1:31:44] to convert the molecules into ppm or PPV question 37 we'll be able to look at 7 left overs NYC for an isolated power
[1:32:02] plant on the South Shore of Long Island yes yes on Monday when we do the python exercise
[1:32:11] you should be able to extract the data at any location like looks like Pandora and Meg's task
[1:32:28] elevation uses ground-based air column spectroscopy are there any other ground-based air quality monitoring uh such as here now so the pendulum X does
[1:32:37] kind of make measurement of the same quantity which comes from the satellite retrieval also on the other hand their
[1:32:46] quality agencies like air now network makes surface level concentration so those are little bit different quantities so there is some conversion
[1:32:58] required when we start comparing satellite data with the ground measurements such as air now network question 39 can be gate PM 2.5 and PM 10
[1:33:11] from proc only short answer is there is no such data product but he but you can probably use also optical depth along
[1:33:30] with some other parameter to get PM 2.5 and PM 10 with some us concert entities but they there is no standard product
[1:33:43] and I don't think there's any plan to produce any standard PM 2.5 or paying time for a problem when converting to
[1:33:53] image question number 40 when converting to image in panoply for example dot jpg the result is that you referenced image
[1:34:02] raster yes the images G reference we will see basically exactly the same map as you see on the screen can you convert
[1:34:14] prop immediate entity format yes you can convert that you can do that using [Music] [Music] panoply or you can also do that using
[1:34:25] any of the GS software which can handle next simulator okay I think it is 9:40 now and I see
[1:34:37] the questions 41 we responded if you have further questions we can take more actually we'll have a little bit more
[1:34:43] time on Monday longer time again please make sure for Monday you have working Python in the data or downloads with
[1:34:53] that I think that's all I have thank you very much for attending and I will see you everyone back on Monday
[1:35:03] Thanks bye-bye
