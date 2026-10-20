# Water Budget Estimation using Global Land Data Assimilation Model, Part 3/3

`https://www.youtube.com/watch?v=ez1TuzdAO0s` · id 318 · 1:18:05 · module 116 — Using Earth Observations to Monitor Water Budgets for River Basin Management II

[00:02] hello everyone welcome back welcome to this third session session on using earth observations to monitor water budgets for river basin management
[00:15] this is the third and final session of this webinar series in first week we had a review and an
[00:22] exercise exercise to download remote sensing data and global data assimilation modeling data of water budget components for a river basin
[00:34] we focused on the lymphopa river basin in southern africa and downloaded data for from these various data sources
[00:43] then in week two we focused on remote sensing observations we looked at precipitation from gpm image image evapotranspiration from mode is mod 16
[00:54] and terrestrial water storage change from grace data again over the limpopo basin basin what we did was we derived wet and dry
[01:05] season season water budget components and looked at differences between them using gis and also used gis to do zonal statistics
[01:15] to to derive bayesian average precipitation evapotranspiration and water storage change rates and so we had a demonstration for year 2016 and
[01:26] then you your exercise focused on year 2019 today we are going to do pretty much the same
[01:35] same but instead of using remote sensing data now we are going to focus on gldas data just like week one and two
[01:46] after this short presentation we will have a demonstration and then you will have a lap time to
[01:52] repeat the steps that we go through in this demonstration again focusing on gl gas precipitation evapotranspiration uh
[02:01] terrestrial water storage change and runoff also so that's what we will do do then week one and two the homeworks were
[02:10] already posted on our set website today's homework is also available from the website and the due dates are given here 11th
[02:18] 18th 18th and 25th of august respectively now those of you who attend all three webinars webinars and complete all the homework
[02:27] assignments and submit by due dates will receive a certificate of completion in about two months after the series is
[02:36] over over and you will receive this certificate from marina's martinez so this is today's outline we will have
[02:46] a brief review of gl das data which actually we already saw in week one then we will have a demonstration in
[02:55] which we will use shield as 2.1 data primarily to look at different water budget components over the
[03:02] limpoperival basin however we are also going to demonstrate using using gl dash version 2.2 and uh in your exercise you will focus on
[03:14] 2.1 2.1 but we want to show this newer version of 2.2 just so that in future if you want to
[03:21] use this data you can follow the same steps and use 2.2 2.2 then we will have a summary of this
[03:30] entire session series focusing on sources of uncertainties uncertainties in water budget estimation from various data sets that we used in week 2
[03:41] and today then you will have lab time to work on gl dash 2.1 data analysis in qgis
[03:49] and last half hour we will have question and answer session so we will start with a brief review of
[03:58] gl dash data so this is the basic water balance equation that we saw in week one so if you consider a river basin
[04:10] precipitation is the source of water and evapotranspiration water storage and discharge from the river basin that is equivalent to precipitation
[04:23] over a certain time period and so this is the basic water balance equation we saw that in
[04:31] remote sensing data we had precipitation et and ds available to us but we did not have have any information about discharge from
[04:41] remote sensing from gl dance data runoff is calculated so we will have all of these components actually
[04:50] actually and we will be able to look at seasonal differences between them also so shield as version 2.1 and 2.2
[05:04] then the websites have a lot of information information these are the newer versions of geodes model model they both have boundary conditions from
[05:14] vegetation mask land water mask leaf area index from modis modis they both use forcing data such as
[05:22] precipitation precipitation weather data and surface radiation but they both use different sources for forcing forcing and we'll see that geodust 2.2
[05:35] actually assimilates crazed terrestrial water storage anomaly and it this version is using catchment land surface model or clsm
[05:46] this is the one we downloaded for glass 2.1 2.1 as well but that version does not assimilate greece data
[05:56] so gl dash 2.1 is available since 2000 january and 2.2 is available since 2003 january after grace data
[06:07] became available so here's a table describing inputs for both these versions for gldas 2.1 precipitation data are obtained from global precipitation
[06:22] climatology project or gpcp these are multi-satellite and rain gauge based data sets combined data whether data or which
[06:31] logical data is obtained from ncep jira systems um as shown here and surface radiation is received from
[06:40] air force weather agency all these inputs in glass 2.2 are coming from european center for medium range weather forecasting or
[06:50] ecmwf system and one thing to note here though is that that these forcing data are not open source
[06:59] so they are not available for distribution so not available online for with us but um other outputs
[07:07] are there from uh same as yield as point two one two point one and two point two so here
[07:15] are the integrated outputs they both have evapotranspirations surface and subsurface runoff terrestrial water storage in snow water
[07:24] equivalent equivalent also has multi-layer soil moisture so this is a model so you have all the water and energy parameters
[07:32] available to you except that gl dash 2.2 does not have precipitation as we mentioned earlier also notice the difference in resolution
[07:41] here gl dash 2.1 is 1 degree ah by 1 degree whereas 2.2 is quarter degree by quarter degree
[07:50] these data are available in three hourly and monthly time scale uh geodust 2.2 right now available to us
[07:57] are on daily time schedule we decided to go with gelda's 2.1 because partly precipitation we can look
[08:07] at at which we don't have here so to look at every component also the monthly data are available here
[08:13] so so to do calculation it's easier to work with monthly time scale than daily and considering the limited time we have
[08:23] for this exercise and webinar we decided let's go with monthly gl das 2.1 data and that way we
[08:30] have all the water budget components as well so today though in the demonstration what we'll do is
[08:37] first we'll start with gel dash 2.1 your exercise will focus on gel dash 2.1 but as a part of this demonstration we
[08:46] will also show how to get gel dust 2.2 water budget components and then you can go through the similar procedure
[08:56] um just like you do for gel dust 2.1 you can do for 2.2 to look at different water budget
[09:03] components components you will not be replicating the steps for 2.2 but this is for your information so with that we will start with the
[09:16] demonstration so the first demonstration will be using gelda's 2.1 data and there will be three parts to this
[09:29] exercise exercise you will follow these steps but the first one is to convert units of all water budget components
[09:36] into millimeter per month and then add them to get seasonal accumulated water components if you recall in gelda's 2.1 data that
[09:47] you downloaded each one each parameter precipitation evapotranspiration runoff and uh total uh terrestrial water storage they all have different units
[09:58] so we want to first convert the units and then estimate water budget components for each season wet and dry
[10:06] and then we will go through the raster analysis and zonal statistics like we did in week two so just a note about converting
[10:17] units units so for the lymphoma base in shape file we will be using precipitation which and evapotranspiration both they
[10:28] have units of kilogram per meter square per second these are average over um this month but so this is the rate in
[10:39] per second as you can see and um if you look at runoff it is accumulated over three hours
[10:46] and tws which actually is in millimeter per month so this we do not have to convert uh
[10:54] units because it's already in millimeters millimeters but for precipitation eur transpiration and runoff we have to use these formulae for
[11:04] pr and et ah to convert that in millimeter millimeter because um of the water density kilogram per meter square
[11:15] is equivalent to you can say millimeter so that it remains the same but for this time unit now
[11:23] we are going to multiply these data by 3 600 seconds per hour uh 24 hours per day
[11:33] and number of days in the month that we are considering so for december this will be 31 days for
[11:39] january 31 with february which is 28 but if it is leap year then it will be 29
[11:47] so that's what we will be doing for runoff runoff since this is three hour accumulation data data we multiply it by eight three hour
[11:58] segments in a day and then there are number of days in month so uh for december we take runoff for december
[12:06] multiply multiply by eight and multiply by number of days in that month so that is what we will be doing and so
[12:14] we'll start with the qgs qgis project now let's see okay so i have this project open here
[12:27] first just like we did last week we are going to have a base map i'm going to pick google
[12:33] road but you can pick anything you like and then you will be adding the vector file file which is limpopo river basin
[12:45] shape file that you have been using and so so open that and add that and you can zoom to this layer
[12:55] and you can change properties just like we did last time simple fill simple outline and you can choose color we always
[13:08] choose choose blue for some reason and here you can change the thickness of the line and then you have
[13:16] this shape file now we can start adding all the rasters so i'm going to demonstrate this for
[13:24] 2016 and you will be doing this for 2019 um add raster and i'm going to go to
[13:34] the file where i have all the data from gl dash 2.1 you have these data for 2019 that you
[13:42] downloaded downloaded in week one so let's start with precipitation precipitation so i can add december open add
[13:58] and then january and february also so precipitation [Music] january and february and you can open an ad
[14:19] so now i have uh january february and december so this is the wet season for 16 so december january
[14:28] and february and let's see you need conversion for this and i'm going to demonstrate this okay you can you can see that
[14:37] the projection has an issue here so you don't see the data okay so i think you will have to make
[14:50] sure that the projection is right so then you will it is 4326 and then they show up you can move this
[15:03] shape file up above and let's start for unit conversion we will use raster calculator calculator go to raster calculator and
[15:15] save this file so let's see p i'm going to to save as precipitation for december it's a short name for now and
[15:26] then take precipitation for december multiply it by 3600 seconds per day per hour 24 hours per day
[15:39] and 31 days per month so this is going to give us precipitation for december okay uh you can do the same for january and
[15:52] then for february then now let's do for january anyway anyway so you can do raster calculator um let's save this
[16:03] as pr for january and then take january multiplied by 3600 multiplied by 24 multiplied by 31 okay and let's do it for february
[16:25] calculator save it as pr february take february multiplied by 3600 multiplied by 24 now 2016 is a leap year so we will have 29
[16:44] days in february and so we will have that okay now we have december january and february february precipitation in millimeters per month
[16:55] here here and we are going to accumulate over this entire wet season and so again we use raster calculator
[17:03] and let's see p r d j f you can keep this name and now you can just add these three
[17:16] rasters rasters and say okay and here is what you get for your wet season precipitation precipitation okay so let me uh i already have
[17:30] colored this and i can we we did this last time but let's see you can go to
[17:36] properties single band pseudo color and let's pick color ramp that is red yellow and blue we can keep the same
[17:52] range here take equal intervals to me say 15 or so and say okay and then you will have precipitation for
[18:03] december january february in this case this is 2016. as you can see again as we saw last time
[18:09] from imerch the southern part of basin has higher precipitation precipitation than than northern part this of course
[18:17] is one degree resolution so you can see these boxes here you will do exactly the same for
[18:26] evapotranspiration evapotranspiration that means you can go back to your gl das directory where you saved uh your file from week one
[18:39] and you can add et okay so um going back i'm sorry pre pr also precipitation precipitation similarly for you will do it for june
[18:50] july august so for june then the multiplication will be 30 days july and august will be 31 days but
[18:57] exactly the same formula you will use and the same thing with et you can take et data and add
[19:06] and go through the same calculation go to raster calculator pick e t and multiplied by this is
[19:17] december so 3 600 multiplied by 24 multiplied by 31 in here and you can go through this
[19:28] pro steps and i already have precipitation precipitation and evapotranspiration for wet and dry season season going through all these steps and it
[19:37] i've saved them in a project that we will see next but before we do that let's look at runoff because that has a
[19:44] different different unit conversion involved in here so add here here again go to the gldas directory where
[19:53] you have saved file and let's start with runoff for december 15 for wet season and close here you
[20:06] you have run off this is accumulated over three hours so what we're going to do is raster calculator here we can save it
[20:16] as rod okay just for simple name then take this file this data multiplied by 8 and multiplied by 31
[20:33] so now here uh since it is in millimeter for three hours this is what we are doing and say okay and so here you have
[20:45] december runoff in millimeters per month which is from 0 to 18 and you will load runoff for january february and then
[20:57] june july august and go through the similar conversion select the raster multiply by 8 and then number of days in that month
[21:07] and you will have runoff so let's let's add the last water budget component which is the water storage
[21:16] and we want to look at water storage change change in the wet season and dry season so just
[21:22] like we did last week with grace data we are going to take march 16 water storage data
[21:30] and december 15 water storage data and subtract subtract december from march to get the difference in storage for the wet season
[21:39] and similarly take difference between september and june of 16 for getting traditional water storage change change for the dry season and so let's
[21:50] see now let's add those rasters first also remember that these data tws data are in millimeter so we
[22:00] don't have to change units so let let's add tws for december 15 head um [Music] [Music] okay and then add
[22:13] tws for march 16 this is march 16 open and add and so you have march and december total
[22:31] water storage data here again we use raster calculator and save this say as dt ws change in tws
[22:44] for djf and take march minus december and save and so here is what you have you will do
[22:59] the same with september and june so now when you go through this for each season you will have you will have
[23:07] everything in millimeters accumulated over over wet and dry season and i have saved this in this project here
[23:24] so this is the project with all the rasters all the water budget components from gl das precipitation evapotranspiration surface
[23:32] runoff and change in water storage for wet season and dry season for completeness i've done this for
[23:39] january to december entire year and you can do that if you have time but for the exercise you can focus on wet
[23:46] and dry seasons also note that in week 1 along with surface runoff we downloaded base floor runoff
[23:55] but if you load the raster in here you will see that base flow runoff is negligibly small
[24:00] it's almost zero over this basin if you look at precipitation for wet season it is this is accumulated over the
[24:08] season it's about 62 to 340 et is about 72 to 278 runoff and water storage change their order of magnitude smaller
[24:22] compared to p and e as one would expect because they result from difference between p and e and so
[24:30] here runoff is about 0.5 to 38 change in water storage is about 3 to 80.9 this is over the entire basin this
[24:39] is the range and so next what we want to do is very much the similar procedure we did
[24:46] last week so only difference so far was that we changed units for gl dash version 2.1 as they are
[24:53] different units compared to remote sensing data we saw we had to convert everything to millimeter from now onwards uh we're going to do
[25:01] pretty much the same like we did last week week that means take zonal statistics and so for that
[25:08] we're going to start with just go to this toolbox and search for zonal statistics and you will have the zonal statistics
[25:16] window you will have all the rasters here will go one by one so let's start with precipitation
[25:23] wet season vector a layer for which you want statistics is the limpopo basin and appropriate column prefix so here
[25:32] it's it's wet season precipitation and just like last week let's pick mean so here you get me
[25:40] special mean of the seasonal accumulated data data over each sub basin and say okay and run then you can repeat this
[25:52] procedure for all the rasters so you can also do now et only thing you change is prefix and the
[26:03] raster so just like last week and so you can do that that and once you do that you can i have
[26:13] done this for all rasters so we will look at that in excel but once you do that you can go
[26:19] to to uh this limbo river basin layer ctrl click and open attribute table and you will see that what we did here
[26:30] was was etw and prw we have here you can highlight any of this basins and it will show you
[26:40] uh where you're looking at so for that particular sub basin you can look at mean precipitation evapotranspiration other data sets
[26:50] um you you are going to repeat this for for for all rasters in addition as you remember we want
[27:00] area of each sub basin so that you can have have uh we can have accumulated water over
[27:06] entire basin so next thing to do is calculate area of each sub basin and you can use this
[27:12] field calculator say area we want decimal numbers um let's have a big number here and two digit precision is okay once you do
[27:26] that you can go to geometry and pick taller area double click click and say okay and this gives you
[27:35] area of each of these sub basins so once you have that you can save and then what you can do is
[27:46] highlight this layer go to layer options up there and save as and this opens this window where you can save the attribute table
[28:01] as a csv file we've been through this exercise before so you can just save it as an excel csv file
[28:12] i've already saved this so i'm going to share that with you you can see this is the column with sub
[28:23] basin areas and these columns here are well android precipitation precipitation et water storage change and runoff and last four columns now show the same
[28:35] components for entire year january to december of 2016. the last row here that shows mean for entire basin simply just
[28:47] taken mean for each sub basin mean from each sub basin is taken to calculate calculate basin mean and so numbers shown here in
[28:58] millimeters are just mean precipitation evapotranspiration etc so you can compare how things change from one season to another
[29:10] over entire basin how the average is change and then these numbers are actually for the entire year
[29:17] that you can see now if you remember to get total amount of water the water volume volume what we did last time is we converted
[29:28] each of these columns from millimeter to meter cube by multiplying by area and converting into meter so i'm
[29:36] going to show this one column we've already done this last week with remote sensing data so let's see we can call this prw
[29:45] in meter cube and for that what you will do do is take area and wet season precipitation
[29:56] and multiply it by 0 0 1 to get it in meter and so this is the number we get in meter cube
[30:04] if you just drag this you will get this based on these numbers and so you have have all this in
[30:18] meter cube here you can again what we did last time we're going to do that again uh add all
[30:26] these numbers not take average but summation because now we want to look at total volume of water so this is
[30:34] based on this mean precipitation per meter square multiplied by meter square we get these numbers and then when you add you
[30:45] get total volume of water in meter cube to convert this this into billion cubic meters of water
[30:54] that is more conventionally used we're just going to multiply this number by 10 to the minus 9 this is just unit
[31:06] conversion again and so if we get this is in bcm so this is what season precipitation and
[31:14] we you will repeat for all these columns and so then i have done that already so here is what you get so
[31:28] we have everything in mean here and then we have this billion cubic meters all the way from here to
[31:40] here for wet and dry season let's highlight and then this numbers are for january to [Music] december 2016. so total numbers are
[31:55] given here in uh cubic uh billion cubic meter these numbers i have here are for comparison comparison from remote sensing data as you can see
[32:07] there are differences and we will talk about these uncertainties here you can actually take precipitation minus evapotranspiration
[32:18] minus water storage and that should give you a residual not exactly runoff because this runoff does not include surface water
[32:29] but number should be closed so we are not trying to close water balance here but we are
[32:36] trying to look at each component and see how it behaves over this basin over this different season and then annually
[32:42] so you can do this annually and intra annually annually to see the difference in general how overall water-based components are
[32:50] changing so next you will be working on exercise 3 during the lap time but before we start i just wanted to
[33:00] quickly show you how to get gldas version 2.2 data and for that we're going to use this
[33:09] giovanni portal this is the site we use to download image precipitation and that was demonstrated by sean mccartney
[33:18] last week so uh we we can follow the similar procedure just in the search box you can say gel dash 2.2 and search
[33:28] and that gives you all the variables available from this model you can see the units here these are
[33:34] daily data and then these are quarter degree resolution data for these uh dates so um as we mentioned earlier gel dash 2.2
[33:46] does not have precipitation data that's the forcing data from ecmwf that's not available available here but these are the outputs that we
[33:54] are interested in so evapotranspiration surface runoff subsurface subsurface base flow and then terrestrial water storage storage the reason to show this is for the units
[34:07] evapotranspiration has the same unit as geodes version 2.1 but runoff here is different these are all the same kilograms per
[34:17] meter square per second so all you have to do is convert these time units into uh millimeters
[34:24] per month if you want to do from daily data then from from this rate first of all you can
[34:30] take take average map so you have average uh rate in kilograms per meter square per second for
[34:38] a given month and then you can multiply by 3600 by 24 number of day of month just like we did
[34:46] a few minutes ago you will do the same for runoff also which was different in geodes version 2.1 it was three
[34:54] hourly accumulated data that's why and this is again in millimeter so this does not need unit conversion that way so
[35:02] again you can pick the region of your interest here we have picked limpopo basin just through this shapefile selector
[35:14] like before and this is first month of uh wet season of 2016 and you will have to do it month by
[35:25] month convert the unit in qgis and then do addition for season or any if you want one year or multiple
[35:34] years you can do that too and then just plot result takes you to a plotting page which i already have
[35:42] done here so you can look at let's see here this is terrestrial water storage this is evapotranspiration
[35:56] you can see this is higher resolution is quarter degree and you can just down click on downloads
[36:03] and then this you can download these data so this particular one um is for 2018 uh but
[36:12] you can select any month or year and download all the data at the same time these are geotiff files
[36:19] so here you can pick multiple parameters and download these files so this was just a quick demonstration
[36:25] of how to get version 2.2 data and then how to do unit conversion conversion just wanted to point that out so
[36:34] next let's just summarize what we saw here so we had the demonstration for 15 and 16 16 and we also saw
[36:49] water components how to get from 2.1 and 2.2 2.2 and before you start working on the exercise here is an
[36:58] overall summary first of all this three session webinar was primarily focused on demonstration and hands-on exercise to
[37:07] learn gis based analysis of the key water budget components over a basin and we picked the limp or
[37:14] river basin we looked at remote sensing based observations observations and looked at geodes model outputs so using the example of limpopo river
[37:25] basin basin which is about 405 000 kilometer square amounts of precipitation evapotranspiration and change industrial water storage
[37:36] in the basin for dry and wet seasons were calculated so last week we did gpm image for
[37:44] precipitation precipitation modis for evapotranspiration and grace for terrestrial water storage anomalies and then this week we looked
[37:53] at at gl das both we followed the same procedure procedure and for the year that we considered for
[38:01] the demonstration here i showed you that i have also done annual calculations and that's the comparison presented here
[38:10] for annual precipitation evapotranspiration evapotranspiration and the water storage change data from gldas 2.1 and 2 and also remote sensing
[38:21] observations if you look at the range of differences we got again these are for annual time scale
[38:28] you can do the same numbers for try and wet season what we got here for annual time scale
[38:33] for this year was the range of was about 30 percent 13 percent for precipitation precipitation 16 for et and 21
[38:44] for water storage change and eight percent for runoff for between two point one and two over this basin
[38:52] so uh of course the remote sensing based data and model based data have differences and these are the ranges so
[39:00] these are actually the uncertainty rage range you can consider based on this year year you would be doing this for multiple
[39:07] years to to see what the range is so for more accurate quantitative estimation of water budget it continues to be a challenge because
[39:18] there are a variety of reasons for that and when you look at different data sets or different models you get this spread
[39:24] of values and that are helpful in estimating uh and assessing uncertainties so that's something to keep in mind and so
[39:36] what are these sources of uncertainties that we can expect in water budget estimation and why it continues to be a challenge
[39:44] to close any water balance so first of all there are barriers in estimating estimating total water budget using remote sensing
[39:53] and also modeling data due to limitations in both these techniques techniques observations as well as models all the
[40:02] water components they have uncertainties and there is always some water missing actually not all the water is un accounted for
[40:15] when you use these observations such as when we looked at remote sensing we did not have runoff data
[40:22] when we have modeling data it does not have uh stream flow or surface water then no irrigation is included
[40:29] groundwater pumping is not included or diversion diversion so there's there's always idealized way of looking at water budget in in
[40:38] these cases whereas it misses some water it's not accounting for all the water also terrestrial water storage anomalies
[40:47] from grace and greece follow on they have resolution of about 3 degree by 3 degree and cannot provide accurate information
[40:56] for water shed smaller than 150 000 kilometer square we saw that last week also we mentioned this and
[41:03] so uncertainty become larger for smaller areas of study and it depends on the shape of the basin
[41:12] also also how much it is actually covered with gray's gray's footprint so that we saw also last time
[41:19] that for for small beijing you really don't have enough good independent data from grace to look at
[41:27] uh textual water storage also uh mod 16 evapotranspiration that we saw it may have significant uncertainties depending on watershed
[41:38] characteristics characteristics and some of the references are mentioned here you will find them at the end um it is found that it can
[41:47] depend where you're looking at what kind of surface it is in arid region it might have a little larger errors and
[41:54] and lymphoma basin is a semi area to add water basin so uncertainty can be there for modeling gldas models have several
[42:06] versions versions and they use several land surface model parameterization parameterization so we focused on clsm mainly because it had a terrestrial
[42:17] water storage component derived as output but there is nova and weak components also in which you actually have to calculate
[42:26] tws based on soil moisture and snow water equivalent and so all these they have their strengths and limitations
[42:35] and they have varying special resolutions resolutions these models also do not include a stream flow or routing and they don't represent
[42:45] uh surface water such as lake or reservoir so that water is not included in gel dust similarly um you know
[42:53] irrigation groundwater pumping these are not included so any anthropogenic influence on on water balance is not included here it's
[43:01] just just natural water cycle it that is looked at here here and that too not surface water um here
[43:10] but this is the something to note about that geodes 2 uh simulations uh now have a routing schemes called high map 2
[43:19] and that will be released once the analysis is concluded and it's checked checked and so routing output will include
[43:29] reverse and flood planes in this case so a new version will have a routing scheme included in it but
[43:36] right now it is not there so the ldas models and retrievals of remote sensing based water components
[43:43] they are continually evolving and improving um regional validation of these data with in-situ measurements are required to
[43:51] assess assess biases and uncertainties in these data and that's if that's one point that we want to emphasize that
[44:00] in your region if you want to use this data it's extremely important to validate with in-situ data
[44:07] so some of the recommendations here as is is use of improved and more accurate products products um so especially for evapotranspiration
[44:17] um a number of products are being put out out that is going to be a portal it's called
[44:24] um um open et and that will be available soon uh later next year or so and that will have more
[44:33] accurate accurate and validated evapotranspiration more accurate grace and grace following data data what we used was jpl estimates
[44:44] mostly to show the procedure but as we mentioned mentioned in the grace webinar and also can be
[44:51] found found in gray's website on jpl is that you can combine um grace products from three three different centers here jpl gfc
[45:02] and csr that's been recommended that if you you combine them and take mean of these products then that's more accurate
[45:10] so you can do that also there is a newer version of grace mask on data that is also available
[45:17] there is the scaling involved here and so for simplicity and for demonstration purpose we focused on jpl data but
[45:25] you can in your region you can work with these newer data or more accurate data also for modeling um there is a
[45:35] focus on a customized ensemble modeling approach approach there is a land information system that's available from nasa
[45:45] this software can be customized for any region in which remote sensing data are assimilated and in c to date are also used uh this may
[45:56] this will also include has to include appropriate stream flow routing model and that way you are actually looking at
[46:05] all the water budget components with better accuracy and then that would yield better water component estimates estimates so you can actually look at water budget
[46:15] with little more certainty also one thing for sure we just focused on two seasons you if you do this for multiple years
[46:26] and you have in-situ data or if you have discharge data in your watershed watershed then you can compare that and that
[46:35] will give you some idea of biases and uncertainties involved in these various data sets so in conclusion what we saw is that
[46:46] despite the uncertainties in remote sensing in geodes data they can be used to assess seasonal and interannual
[46:53] variations variations in individual water budget components so precipitation evapotranspiration water storage and runoff they can be um evaluated individually
[47:04] uh look at the differences from season to season or year to year and it it gives you indication of increase
[47:11] or decrease in water availability for relatively large river basins as we saw saw um to the remote sensing and gl dash
[47:20] data data should be validated with in-situ measurements including precipitation stream flow soil moisture and vegetation in the area of your interest that's
[47:32] very very important an evaluation of empirical methodology or local knowledge that you are using in your watershed
[47:41] if you compare that with remote sensing and gl dash based data that will help in assessing the
[47:48] usefulness of these data so what your existing methods are what you are already using and if you use these data what are the
[47:57] differences and that that can be very helpful and give you insight into how to work with different data sets and also
[48:06] feedback about usefulness and limitations of these data that you encounter so if you use remote sensing data or modeling data
[48:14] and if you compare with your empirical or methodology or data that you are using using if you find something that
[48:25] it's useful or if you think that some barrier in using that if you give us feedback based on your
[48:32] own experience that is very welcome and so with that what what we can do is um start with the exercise
[48:40] and before doing that we want to acknowledge um our colleagues here here without their help this webinar would
[48:49] not be the same so we really want to thank um experts here who are working with geoldas and hydrologic
[48:57] modeling modeling and grace data so dr hiroko bordeaux and dr ogusto chatirano they are both from guard space flight center
[49:07] uh dr benjamin zaichik from johns hopkins university and dr felix lenderer from nasa gpl um for grace data so we want to thank um
[49:17] them for their help and helping us understanding um water budget components from different sources so with that i will stop uh
[49:30] my sharing my screen and you can work on the exercise it's the lap time and you can estimate gel task 2.1 based
[49:44] water budget components for year 2019 we will be here online if you have any questions you can also type
[49:52] questions in the chat box um about 11 30 eastern time or in about uh 14 minutes or so we will start
[50:03] with question and answer session uh you will have this time after this session is over you will
[50:10] have time to complete your exercise and submit the homework homework so you can just work on the exercises now and if you
[50:19] have any questions you can type them thank you so we will be starting with the question and answer
[50:39] session right now you have time to complete your exercise after today and before your homework is due
[50:49] so we will go to the questions that we have received here and we also have uh dr acosta tirana he is the expert
[51:01] in in childhood also in in hydrology so if you have any specific questions he may be able to address those
[51:15] so the first question is is there any tool or or to automate all these processes or do we
[51:22] have to write code so yes you can get the data using the tools that we we showed and you can do these
[51:32] calculations calculations in qgis as we showed but for for bulk processing or if you have number of years
[51:41] and bigger area you have to write code to do the calculations why did child has shift to ec and wf
[51:55] when a lot of debate on unremediated uncertainties of ecmw is going on so this is um ecmwf forecasting system is used here
[52:08] and it is used for a specific purpose because geodust 2.2 is used for weekly drought monitoring and so the
[52:17] lower the latency of data forcing data better it is and and because of that is cmwf data are used
[52:27] and it is one of the better products as um um it's believed by the community it's one
[52:32] of the better products so august 2 please add anything that you uh want to to any of these questions
[52:45] would be great ok so question three is something that i wanted to demonstrate uh last week also it says what
[53:03] parameters should we take into account to determine which are the months of dry season or months of wet season
[53:10] so for now though we base that um on just precipitation data you can look at soil moisture but
[53:19] just to quickly see you can use giovanni and i just have an example here um what you can do is
[53:29] go to giovanni and here i have used imerg monthly data that you used last week in the select plot you have option about
[53:44] time series and you can have seasonal time series and then for here you can choose either different
[53:52] months months as you can see or seasons and you can specify specify which ears to use and here again i
[53:59] focused on limp or watershed and once you plot data you get time series uh like shown here and that tells you
[54:12] um that you can this is december january february which is the red season june july august which is the
[54:22] dry season so we picked based on precipitation precipitation and you can do that for your own area of
[54:29] interest interest just make the time series to see how seasonal seasonal uh precipitation is changing and then
[54:35] you can decide uh you can do it month by month and pick certain months as dry months and certain
[54:43] months as uh wet months so i hope that clarifies uh question three so um question four is doesn't run off
[54:56] need to be routed over the basin and i would would request dr jeter to address that this is question four yes so yes uh so
[55:11] the runoff needs to be routed over the basin uh currently there are no um there's no routing in jail does but
[55:21] uh we are working on including uh extreme flow simulations in this next generation generation of gilda's uh
[55:31] if you're if you're working at a a longer time scale like monthly or annual um depending on the basing
[55:41] routing the the runoff may not be required because the monthly timestamp could be enough for all the the runoff
[55:52] being generated within the basin to flow to go through the outlet this means they at the monthly time step
[56:03] you can just accumulate the runoff and consider that that as the average monthly stream flow but that also depends on the the size of
[56:17] the basin for example in the amazon um it takes longer for the runoff to to be generated from being
[56:25] generated to get to the outlet but uh for all the basins like let's say um like smaller basins
[56:34] um like mississippi for example you can assume that the monthly timing step step could should be enough for the the
[56:43] runoff runoff to be converted into a stream flow so question five is about uh do we get some other satellite products
[57:00] with higher resolution for evapotranspiration runoff and precipitation precipitation so okay i didn't see this so yes so gls
[57:11] 2.2 is um it's about quarter degrees it's not one kilometer of course but evapotranspiration from satellite it's
[57:21] available at higher resolution if 500 meters for mod 16 and there are also then set base products which can be of 30
[57:30] meter resolution um for um for one kilometer resolution of runoff and precipitation um i i don't think they're available
[57:45] from from the models that we have and precipitation data from i think chirp they are five kilometers
[57:56] and and hemorrhage are 10 kilometers so no i think think one kilometer precipitation data globally are not available
[58:10] so why is ped negative i think precipitation precipitation minus evapotranspiration can be negative for for a few months that we looked at
[58:20] showing overall water deficit or loss that there is more evapotranspiration than precipitation received and also about count columns in decimal
[58:31] numbers yes if because these are one degree resolution resolution grids so some sub basins have partial grids
[58:39] grids included in them that's why you see that last time we did not include count but if you looked at grace data it is the
[58:48] same same you will see that decimal counts of fraction um and this is again for doctetrana please
[59:00] please explain how to treat base flow in a watershed where it is not negligible so augusto can base flow runoff
[59:14] is is part of groundwater or no no so the base flow from these model outputs outputs is considered as part of the total
[59:28] runoff runoff so when you're routing your runoff uh so actually we call it a total runoff that is the
[59:37] this summation of uh surface runoff in base flow so baseball should be taken into account so you just add runoff and base floor
[59:48] enough and treat that as yeah so and that's yeah that's the total total runoff question eight is how
[1:00:01] precise are these satellite-based precipitation evapotranspiration runoff values values are these values close to those measured from the ground
[1:00:10] so these data do not have the same precision precision everywhere so it is is difficult to say
[1:00:17] that how precise they are in a particular particular water-based watershed that's why we recommend that uh some nc2 validation of different data
[1:00:29] sets sets have to be there uh precipitation is something you can measure with point measure measure like rain gauge and you can have stream
[1:00:38] gauge measurements and then they can help help in in looking at biases between what you get from satellite or model data and
[1:00:49] what you get from enc2 data but that's the only way to look at uncertainties so you have used tws data sets as it is
[1:01:02] you don't remove the seasonal cycle from it it could you please briefly explain if there is any role of seasonality
[1:01:10] in calculating the water budget um and so i will uh be used it the change in storage
[1:01:17] as you saw for a season so i don't think their seasonality matters but question yeah so i
[1:01:46] you usually remove this is on a cycle when you're looking at trends if you're if the goal is to decompose
[1:01:54] the the twss you're trying here um so that's not how you should use tws so yeah so if you want to look at it
[1:02:10] because i mean that because this is an allergy i mean you you see you uh thorough runoff and it see
[1:02:20] composes the uh tws analogy so it makes doesn't make much sense to remove that seasonality to combine tws with et
[1:02:31] and put a runoff pay precipitation so only if you want to look at uh variability variability and change over time yeah the trends if
[1:02:42] you're looking at trends then it makes more sense right um question 10 is wouldn't water pumping and irrigation be
[1:02:59] encompassed with the grace shield as change in water storage variable so glass to where grace is assimilated
[1:03:08] uh would water pumping be part of that would that be reflected in the model output output yeah so uh gel dash doesn't simulate uh
[1:03:20] human activities right so that is not um that those impacts are not taking into account so when you assimilate grace
[1:03:31] uh so you basically and grace observes these these the the the impact of these activities so you change the model states like
[1:03:44] groundwater groundwater um you know soy monster is no um in the fluxes as well you'd see and the
[1:03:52] runoff runoff in a way that the that impact will be represented in the the storages but uh you're still not representing the
[1:04:04] activity the you know the human activities you're just like changing the model like forcing the model to tell you something that you
[1:04:11] want to listen from it like you're you're kind of uh pushing the model to tell you some a
[1:04:17] different story yes so that the model will be changed in in a way that the those states will represent
[1:04:27] that impact even though that impact is not originally represented in the model so could you provide a reference
[1:04:54] with disk which describes difference between between all these models and you can go to this eldas eldas and the website where there are
[1:05:03] publications there that the pi is metronome you can contact him for publications also or more information okay this is something that could we be
[1:05:20] able to calibrate with the nc2 stream flow data what would be the size of the watershed uh oxford i think this is your question
[1:05:31] okay okay question 12. calibrate the model is that calibrate what option 12 it says can could we be able to
[1:05:44] calibrate with the nc2 stream flow data so i think the question is can you calibrate any of these models with nc2
[1:05:53] stream flow data yes when you're simulating if you're simulating the the stream flow uh with these models yes you can there
[1:06:02] are are many studies um showing that like different ways to calibrate hydrological models using in serious stream flow data
[1:06:21] so how to incorporate snow melt into the basin water budgeting presumably with gel dust or other methodology so gel test does
[1:06:31] have have uh snowmelt data right um would that be considered part of runoff augusto or how does it work well that's a different
[1:06:43] variable variable okay i mean that that's that you can [ __ ] get snowmelt as an independent
[1:06:48] variable variable okay yeah so that's already but it's also included you don't have to add that to uh turtle runoff
[1:06:57] so that is also included in the total runoff runoff uh knowing the cold areas the high latitudes or
[1:07:04] high altitudes okay so it's already included in the total runoff yeah but you can also find that
[1:07:13] specific variable yes it is independently so question 14 is when available in situ data are not overlapping with
[1:07:27] any collected data from the existing remote sensing data how is the best way to perform the validation
[1:07:34] how reliable would that validation be so if you don't have any in-situ data really you're not validating anything
[1:07:42] um you were just taking you can take remote sensing based estimations and you can look at these
[1:07:49] various various models so gl does have has multiple parameterizations like nova or wic or cls and vlsn you can look at
[1:08:04] numbers you get from these different models and remote sensing that will give you range of uncertainties uncertainties and that's the first approximation you
[1:08:13] can take that okay no matter which one you use it it may be uncertain by this much amount
[1:08:18] but if you don't have any in-situ data there there there's no way to decide how accurate actual these numbers are you you need
[1:08:29] some in-situ data another way i can think of is that if you have similar region so similar climate conditions in some
[1:08:39] other other other regions where you have in situ data data maybe base and if accuracy is known
[1:08:46] there there then based on that you can come up with some approximation but uh if you don't have any validation data
[1:08:53] it's very difficult if you want to add anything augusto or sean please go ahead well that's good question 15 is
[1:09:10] from last week's exercise was this the tws data for the dry season which was in negative values i was
[1:09:18] wondering wondering what the anomaly realistically means for the bayesian as a follow-up my total discharge values also
[1:09:27] also came out to be negative would that conclude that the basin is water deficit so so um you are looking at seasons uh
[1:09:38] rather than long term or over a one cycle so so then yes negative means there is that in that
[1:09:48] season season there is water deficit but overall if you look at the entire cycle for for annual cycle um that
[1:09:56] number may be different that will be different different so but yes so negative change in what storage would be deflecting that
[1:10:04] basically basically deficit well the other possible conclusions conclusions could be that you know these data sets are not perfect
[1:10:14] yes it could be part of yeah the error the uncertainty um so the uncertainty that we mentioned yes it is based on the
[1:10:42] range range of um or yeah it is sum of all some basin so it's over entire lymphoma basin yes
[1:11:00] so question 17 is does et also multiplied by 3624 multiply by this yes because if that is also in kilograms per
[1:11:10] meter square per second so since we were looking for per month we multiplied by this number so you can continue working on the
[1:11:34] exercise exercise and then please submit all the homeworks by the due dates also you will receive a survey
[1:11:50] from our set this is for your feedback about about this webinar and so your feedback always is very important to us so please
[1:12:02] take time to fill out the survey questions questions it tells us about how we can improve or
[1:12:09] what could have been done differently so please do complete the survey when you receive an email from our set
[1:12:34] so if there are no more questions we will will close the session in a few minutes uh we
[1:12:40] will be here for a few more minutes if you have any more questions um we want to thank dr augusto
[1:12:46] tirana for joining today and for his time time oh thanks for inviting me it was a pleasure
[1:12:56] pleasure thank you okay question 18 is for the purpose of downloading data from moody's et et from appears for ganges it was showing
[1:13:06] error due to complexity in the shape file file what should be done for it to overcome you can actually draw a polygon around
[1:13:14] the basin it appears has that feature also you can take a polygon around the basin and once
[1:13:22] you have the data in qgis you can crop it or clip it to your shapefile um okay so question 19 is the the
[1:13:44] resolution of gl does 2.2 is the fi is finer than 2.1 but precipitation does not exist is there a possibility to use glass 2.1
[1:13:54] data data what will be the special resolution so that is one degree gelda's 2.1 is a one degree resolution
[1:14:05] um you can use child as nova or weak i think they are quarter degree resolution and they have precipitation
[1:14:51] okay so question 20 is is it recommended to estimate water budget estimation for two river basins which
[1:14:59] are are eighty nine thousand kilometer square which is and hundred and twenty twenty thousand kilometer square combined at level zero five or what
[1:15:10] hydro sheds especially in the context of uncertainty involved with gray's data that is what is your recommendation for
[1:15:19] estimating a river basin water budget estimation having an area approximately 90 000 kilometers square square so yes that's a that's a good question
[1:15:30] you can use um gel dust with quarter degree resolution um or you can augusto can you can you tell us how hard a solution list
[1:15:44] can have please um so well you can you can i've been running leaves at uh 200 meters for
[1:15:56] some specific cases so there's no real limitation in terms of uh special resolution resolution but uh for the question here in terms of
[1:16:05] grace grace well i mean it's recommended that you the the the the area should be around like 150
[1:16:14] 000 kilometers that's for you to so you minimize the the errors related to grace but i mean
[1:16:22] if you're basing uh is smaller than that you i mean you can't still use it but i
[1:16:28] should just be you know aware of the fact that you're you know the grace time series that you
[1:16:35] get will be won't be as reliable there'll be a higher error i mean there are there's some i've seen
[1:16:46] cases cases like people applying grace to much smaller smaller domains but um i mean as long as you're
[1:16:55] you know about the error that is included in the data set that you should be fine yeah so i think you you just have to be
[1:17:07] careful that what you see there it has larger errors at smaller domain size exactly sean mccartney and i thank you for
[1:17:26] attending this webinar session and we also want to thank the our set team we have brock levins um sullivan hudson odoi and
[1:17:35] jonathan o'brien um they have helped in organizing these sessions sessions in many ways so um every thank you
[1:17:45] everyone in the rsa team uh thank you augusto for joining today and and so sean and i again thank you for
[1:17:52] attending this webinar and we uh look forward to your feedback through the survey
