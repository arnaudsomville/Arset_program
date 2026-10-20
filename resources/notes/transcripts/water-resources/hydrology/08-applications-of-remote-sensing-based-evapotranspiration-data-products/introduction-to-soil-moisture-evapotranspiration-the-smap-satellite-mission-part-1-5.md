# Introduction to Soil Moisture, Evapotranspiration & the SMAP Satellite Mission, Part 1/5

`https://www.youtube.com/watch?v=DFjJbc6VBBs` · id 232 · 1:22:40 · module 111 — Applications of Remote Sensing-Based Evapotranspiration Data Products

[00:01] okay welcome everyone it's about 6:00 eastern US time and it's just about time to start the first session of the
[00:12] webinar so welcome to this applied remote sensing training webinar on applications of remote sensing to soil moisture and evapo
[00:21] transpiration my name is Amita meta and I have my colleague here from NASA JPL Erica podest both of us are going to
[00:30] talk about these topics Erica is going to talk about uh soil moisture and I will be uh providing information about
[00:40] evapo evapo Transportation so before we start to talk about these topics um here is an overview of the course
[00:49] structure uh as you know there are five sessions uh including today um and there will be one session every um Thursday uh
[01:00] for next four Thursdays and um this session is the PM session um we have two sessions uh if for some reason if you
[01:11] missed one you can join the other one as well uh importantly uh there will be two homework assignments given um one at the
[01:22] end of the second week uh third week I'm sorry uh and the one uh the last one at
[01:28] the end of the webinar webinar series both will be due by 31st of October there will be a question and
[01:37] answer session following each session or you can send emails to Erica or me our email addresses are given
[01:48] here some important information about homework um homework assignments are usually given by Google form and the Google form link will be available from
[02:01] our set website uh the address is given here so uh you just go on the link go to
[02:09] the Google form and fill out the answers those who attend all five webinar sessions and submit to completed
[02:17] homeworks by the due date uh They will receive certificate of completion uh just want to uh note here that it takes
[02:26] about 2 months to process everything and send certificate to everyone and our colleague maras Martins will be sending
[02:33] you certificates provided all the conditions are met so as um when you registered you must have seen there was a prerequisite
[02:50] and that was a webinar for fundamentals of remote sing uh this is available through rset website and you can reach
[02:59] there through through the uh website as well uh if you have not reviewed this we highly recommend that you go through
[03:06] this so that um the current session will be um better or easier to understand all the course material for
[03:16] this webinar will be available from ret website uh this is the uh website for this particular event and you will see
[03:24] all five weeks uh you will have presentations as they become available and at the end of each session after one
[03:33] or two days you will have uh recordings of the sessions available as well so uh our resource our set website is the main
[03:42] resource for all the information okay and so this brings us to the course today and the objective
[03:52] here is to learn about um NASA Earth observations both data and tools to access these data which are available
[04:01] for uh Water Resources applications and specifically we are going to talk about soil moisture and evap Transportation so
[04:10] how these components are part of the water cycle how uh what kind of data products are available and how to access
[04:19] and analyze these data for different applications also we will show uh some applications in which soil moisture and
[04:29] evap trans spiration data are used for environmental environmental applications so just to start with and put things in perspective this is the uh
[04:38] Global Water Cycle picture as you can see see precipitation um is a major part of water uh coming over land um water vapor
[04:48] transported from Ocean and precipitation occurs everywhere uh this precipitation over land then uh some of it runs off to
[05:00] back to the ocean or Rivers but some of it really stays on land and and some of
[05:07] it goes in uh the ground as groundwater uh and a lot of it stays on surfaces surface soil moisture uh you
[05:18] vegetation also traps water that's why it's used and so soil moisture and evapor transpiration over vegetated surface they both become very important
[05:29] part part of overall fresh water budget and so both of these are very important to know uh for a number of
[05:37] applications especially in Water Resources management to estimate water budget uh monitoring flood and drought conditions and uh more importantly for
[05:48] agriculture both these parameters are very important so that is why the focus of uh this webinar is Sol moer and ET
[05:56] arset has previously given a webinar about precip vation you can go in the webinar section and look at it so these
[06:05] um sessions will focus on soil moisture and weaper Transportation uh today is overview of both these parameters week two and week
[06:15] three now are going to focus on soil moisture active passive new mission that Erica is going to talk about so next two
[06:23] weeks we'll focus on applications and data access from smap and the last two weeks then we focus on evapo
[06:31] Transportation data sets one data set is based on lens set satellite the other one based on mod satellite and also from
[06:40] a um land data simulation system so this is the overall structure and outline of the the course so today's agenda is that we'll
[06:50] start with soil moisture active passive and then we will talk about evapo Transportation uh some of and so I
[06:58] without further delay I invite Erica to talk about smap thank you Amita so can we go on to the next slide
[07:17] please okay so today I'll give you an overview of smap so smap stands for the soil moisture active passive satellite
[07:25] Mission and its focus is to measure soil moisture moisture globally so I'll talk about first of the importance of soil
[07:35] moisture and why we're measuring so if we go back to the basics if you look at the water Distribution on Earth most of
[07:43] it is in the oceans so most of it is saling and only 3% of water on Earth is
[07:50] fresh water so if we break down that 3% that component most of that is stored in ice caps and Glaciers and 30%
[07:59] is stored as groundwater and then the other which is 0.9% um is primarily lakes and swamps and a very small percentage are rivers
[08:10] so where does soil moisture fall in here um for each kilogram of water on Earth only one milligram is stored as soil
[08:20] moisture so overall if you look at Water Distribution on Earth it's a very small amount that's stored in the soil but
[08:28] soil moisture exerts significant control over hydrological processes ecological processes and meteorological processes so let's look at soil and the
[08:42] different components in soils so here on the very left we have a picture of a soil uh layer and as you can see soils
[08:52] have different layers the further down you go uh the topmost layer is um a layer usually rich in organic material
[09:02] and as you go down you've got different Horizons of soils but soils are primarily composed of uh particles
[09:10] minerals and organic particles and in between the particles you've got air pockets so when these air pockets fill
[09:19] to capacity uh then you've got your soils saturated so about 50% of soils are air pockets so when you hear about
[09:29] 50% of the soil there's 50% water in the soil that pretty much means that the soil is saturated obviously it depends
[09:37] on the type of soils um clay soils uh and and Sandy soils have different holding capacities for
[09:49] water so the next slide uh there are several factors that influence soil moisture so soil moisture varies with space and time and the
[10:01] primary factors that influence this distribution are a couple one is rainfall so precipitation is uh the primary um it it's what affects soil
[10:14] moisture primarily there's also soil texture I talked about clay clay soils and Sandy soils and the the water
[10:23] holding capacity varies so clay soils tend to have um more pores and so water infiltrates quicker through clay Sandy
[10:35] soils than through clay soils and you've probably all tested this uh personally uh putting your foot on a wet piece of
[10:44] soil that's Sandy as opposed to a wet piece of soil that's uh clay uh the clay soil tends to remain wet for a longer
[10:53] period of time so it retains water for a longer period of time then of course there's veget ation um it has a big
[11:01] effect on soil moisture and uh the more vegetation you have the um the more you can uh hold the moisture in the soil the
[11:10] longer you can hold moisture in the soil and then topography um areas with steep slopes uh are areas that tend to be
[11:19] drier because water tends to uh run off uh as opposed to flat areas where water tends to accumulate
[11:29] so why measure soil moisture from space that's a very good question um soil moisture is very Dynamic it changes
[11:40] very quickly and so the graph on the bottom left shows this uh what we're really interested in uh capturing and
[11:50] understanding is this Dynamic nature of soil moisture so you have these wedding periods and these dry downs and so if
[11:57] you look at that graph on the bot bottom left uh you've got um uh Point measurements taken every 7even days and
[12:05] point measurements taken every two days and when you uh take measurements every seven days you really miss that wetting
[12:13] and that dry down as opposed to taking measurements every two days where you capture that Dynamic variability of soil
[12:20] moisture so that's why smack our satellite measures soil moisture globally every 3 days the other reason we want to observe soil moisture from
[12:30] space is because as shown in the slide before soil moisture tends to be very heterogeneous it varies quite a bit
[12:37] depending on the land cover and the topography and the type of soils so even though there are stations on the ground
[12:45] that are measuring soil moisture with the sensor on the ground that soar moisture value is not necessarily
[12:52] representative of what the moisture in the soil might be a couple of kilometers away so satellites really allow us to
[13:00] measure soil moisture over wide areas um it also allows us to monitor soil moisture um in areas that are very
[13:09] remote that are difficult to get to so that's why um ideal it's ideal to have a satellite that measures so
[13:22] moisture so in terms of I've listed a few here uh one is to enhance weather and climate
[13:32] forecasting if you think about the water in the soil that water has a potential to evaporate and when it does it plays a
[13:40] very large role in cloud formation and in in modulating uh at temperature air temperature and humidity uh we use soil moisture to
[13:50] improve agricultural productivity and cropio predictions so plants need water to grow and there are many models out
[13:57] there that predict crop um at the end of a season and one of the primary inputs into these models is
[14:05] solal solal moisture um and then there's drought monitoring and early warning uh so droughts tend to be slow events they
[14:14] takes a while for these events to occur but with a satellite like snap we can monitor the extent and the intensity of
[14:23] a drought and whether it's um increasing in intensity or diminishing flood monitoring and prediction so when you know the amount
[14:32] of water in the soil and for example if soils are near saturation and then you know that there's a big rainstorm coming
[14:40] then uh you can better predict that a specific area might be at risk for flooding and then there's human health
[14:46] and Vector born diseases I'll talk about these a bit more further on in my presentation so the primary objectives
[14:54] of of snap are to measure the amount of water in the soil and the technology that we use allows us to measure the
[15:02] amount of water in the top 5 cm of the soil and we do this every 3 days
[15:07] globally so snap um allows us to understand processes that link the terrestrial energy water and carbon Cycles it allows us to estimate Global
[15:19] Water and energy terrestrial fluxes and to better quantify net carbon fluxes especially in the northern high latitudes so these two slides will give
[15:30] an Pro provide an overview of smap so smap has two instruments one is what's called a radar and one is called a
[15:41] radiometer um they're slightly different Technologies I'll explain those a few charts um ahead but uh we're operating
[15:50] or we're observing the Earth at a specific uh frequency of the electromagnetic spectrum it's called the microwave range and this um using or
[16:01] observing the Earth in this specific frequency which is 1.2 GHz it's elban allows us to see the surface of the
[16:09] Earth regardless of any type of uh weather condition or day or night condition which is extremely useful
[16:15] especially uh when you want to measure things like soil moisture in areas around the tropics areas that are
[16:21] constantly cloud cover or in the extreme latitudes where there's Darkness a good amount of the year so the radar has a a
[16:31] high resolution it has a resolution of 3 kilm and the radiometer is coars resolution it has a resolution of 40
[16:38] kilom and smap was launched on January 31st 2015 so it's been uh about a year and a half since smap has been
[16:48] collecting U measurements um the secret behind smap is a huge antenna it's a 6 m in diameter
[16:56] antenna and it's uh conic scanning at uh rotating at 14.6 revolutions per minute it makes a swath on the surface of the
[17:06] Earth that's th000 kilometers wide and this large swath allows us to cover the entire Earth every two to three days so
[17:14] every 3 days in the equator and every two days in the northern high latitudes because there's more
[17:19] overlap uh smack is at an altitude of 685 km and it's in a sun synchronous orbit so it goes over the equator at 6:
[17:28] a.m a.m 6: p.m so the name I'm sure many of you wonder the about the name smap and as
[17:39] mentioned earlier smap stands for the soil moisture active passive so active passive is descriptive of the instruments that are used and um I'll
[17:48] explain briefly here the the different the difference between the two instruments uh passive sensors are sensors that are just sitting there and
[17:57] collecting emissions that are coming out of Earth or a body so U think of it as like a thermal camera um you have a
[18:06] thermal camera and you point it at a person and uh up comes an image of different colors and the colors
[18:12] represent the temperature the different temperatures in the person so it's similar here where we're collecting the emissions that are coming out that are
[18:21] being emitted from Earth in a specific frequency range in this case it's not thermal but this frequency range is in
[18:28] the part of the electromagnetic spectrum at at lban and then there's active sensors and active is analogous to an
[18:37] ultrasound so uh we send a signal and that's why it's called active because we send a signal towards the surface of the
[18:44] Earth that signal when it it hits the surface of the Earth part of it depending on the characteristics of the
[18:51] surface part of it bounces back uh towards the satellite and this signal contains information about the moisture
[19:01] in the soil so the radar is the active and the radiometer is the passive and um okay so a little bit
[19:10] about microwave remote sensing I I'll briefly go through this one um the reason we use microwave is because it's
[19:16] very sensitive to Sal moisture we can see the surface of the Earth regardless of pretty much any kind of weather
[19:22] condition or day or night and um it's it's really ideal to make continuous measurements over the entire Earth with without being hindered
[19:33] by um uh climatic conditions so in terms of the measurement approach the reason we have two instruments is because the radar
[19:43] even though it's high resolution um it's not so accurate um it or it cannot measure soil moisture as accurate uh and
[19:53] then the radiometer can measure so moisture very accurately but it's got a coarser resolution so we use the
[20:00] attributes the best attributes of both instruments to create a combined soil moisture product that's 9 km so the
[20:08] radar is 3 km the radiometer is 36 km we combine both of them to generate a 9 km
[20:14] product and so this uh chart shows the uh how we measure soil moisture and the reason passive
[20:24] microwave remote sensing can you can measure so moisture accurately is because there's less complexity in the signal we're measuring
[20:32] the emissions that are being emitted from the soil and how those those emissions are scattered by the
[20:39] vegetation also the emissions from vegetation and so um you have kind of a one way it's basically what's coming out
[20:47] of the earth um in terms of the active which is back scatter and it's the image on the right there's a lot more
[20:54] complexity in the signal as you can see with the Red Arrows so you've got the signal C coming down towards Earth and
[21:00] it's interacting with the different components of the land surface including the vegetation and the soil and snow if
[21:06] you have any snow and then it's going back towards the satellite so there's much more complexity and the way we get
[21:12] to Sol moisture is we need a number of ancillary data sets um in order to understand what are the characteristics
[21:21] of the land surface and then being be able to tease out the so moisture component that's part of that signal
[21:32] um so here's a list of the products that are being generated from smap and what you need to know here are uh the
[21:42] generalities of the different products and this goes pretty much for any NASA product you've got the level one
[21:48] products and level one are the actual observations so that's the radar data and the radiometer data and then the
[21:58] level two and the level three are the geophysical retrievals of soil moisture the level two are what's called half
[22:05] orbits so they're these strips um that don't cover the entire Earth it's just the the the strip of the
[22:12] obser observation from which the product was derived and then the level three is a composite of all of the observations
[22:20] for a single day okay and then finally there's the level four and level four are modeled products so for this to
[22:30] generate this product you need a model and there are two level four products one is soil moisture at the root Zone
[22:37] level so that means um we're providing so moisture at the one meter Dove and then there's a level four carbon product
[22:46] which is the net carbon exchange between the land surface and the atmosphere so I'll give you a a briefly
[22:56] here a status on smell I've talked a lot about the radar and the radiometer but we did um uh we had problems with the
[23:06] radar in uh July of last year and it stopped operating and we weren't able to uh get it back up so we've been relying
[23:15] just on the radiometer now to produce Sol moisture so uh what snap is currently producing is a so moisture
[23:23] product that's Global every 3 days we cover the entire globe and it's at 30 6 km resolution and the accuracy of this
[23:31] product is uh 96% accurate so it's got up to a 4% volumetric soil moisture error so the the quantity of the product
[23:42] it's soil moisture is um a volumetric measurement that means we are measuring the volume of water of water given
[23:53] within a given volume of soil so it's CM Cub over CM cub and these are examples of the different
[24:01] products um smap products that I mentioned earlier from that table and by the way all of these products are
[24:06] available they're freely available to the different data archive centers that we have and week three will'll cover um
[24:16] uh the webinar will cover how to access and understand smap data so this is an example of the radiometer data this is
[24:25] the level 1C and radiometer is uh the units are in brightness temperature so it's Kelvin and you can see the range uh of
[24:36] temperatures from 100 to 300 Kelvin so this is an example of the soil moisture derived uh from the radiometer
[24:45] it's a level three product uh the areas that are yellow are very dry and the areas that are cyan and blue are wetter
[24:54] areas okay and the next one this one is an example of the level four so this is a modeled
[25:02] product and this is the um root Zone soil moisture product it's a global product and um again it's a volum metric
[25:15] um measurements of soil moisture and then this is an example of the other level four model product which
[25:23] is the net carbon exchange of between the land surface and the atmosphere so I mentioned that we no longer have
[25:32] the radar um however the map team is looking at different alternatives to produce a higher resolution soil
[25:39] moisture product and there's a team working on using Sentinel radar data so Sentinel 1 is a satellite um that was
[25:49] placed in orbit um in 2015 and it's a European satellite uh European space agency and it has a cband radar so we're exploring
[26:01] ways on how to use this data in Li of the smap l-band radar data to produce a
[26:07] high resolution 1 kilometer soil moisture moisture product uh these products uh or these new products will probably come out next
[26:16] year sometime around March of next year another thing that the team is doing is looking at enhancing the resolution of
[26:25] the radiometer data so the iometer currently has a resolution of 36 to 40 km and there's a group here looking at
[26:34] enhancing the resolution down to 25 km and generating a soil moisture product that's 25 km resolution again this
[26:42] product would probably not be available until um next spring uh around March of next next year so some things that you should keep
[26:52] in mind when you're using the map so moisture product this mask here shows everywhere in the world where we're
[26:59] extracting soil moisture um we do have a mask so we're not extracting soil moisture in areas where there's
[27:06] permanent ice so if you look at Greenland that's white we're going to extract so moisture there um in urban
[27:12] areas large urban areas we're not extracting so moisture over water um and over complex topography but um I talked briefly about
[27:22] the accuracy so um the a is up to 4% volumetric and there's some areas in the world where we don't expect to meet this
[27:30] accuracy and those areas are colored in White in this uh mask here so the reason for this is because those areas tend to
[27:39] have high vegetation cover so um the advantage of using microwave is that it penetrates through the vegetation canopy
[27:50] however when the vegetation is too dense it um it's likely that it doesn't penetrate all the way down to the soil
[27:58] and also there's a lot more complexity in the signal so it becomes difficult to uh produce uh measurements of soil
[28:07] moisture over these areas and even though we are providing them um we they're not expected to meet the
[28:15] accuracy requirement that I talked about so all of the data is available at nsidc or at ASF so ASF is the Alaska
[28:28] satellite facility and you can um access the smap radar data there were the smap radar data was collected
[28:38] for two and a half months and um you can freely access the data from them all all
[28:45] you have to do is register and then you can access the radiometer data and all of the other uh products level products
[28:52] from the nsidc which is a national snow and ice data center um again also freely available all you have to do is register
[29:01] and week three will be focused on data access so this next um animation it shows an example of uh soil
[29:16] moisture and let me just play it there two very interesting things here uh if you look over land um you see
[29:24] variations in solar moisture across time so these are 3-day uh composits and the areas that are yellow
[29:33] are areas where it's very dry areas that are blue our areas very very wet and you can see some interesting things so we
[29:40] start around mid April and go through early this year and you can see for example in Argentina there's a wedding
[29:48] period uh right around now um in India you can see the onset of the monsoon in the Gulf region of the United States you
[29:56] can see a a wedding period and these were massive floods that occurred around Texas um last year so some very
[30:06] interesting patterns uh expected patterns in some places of wetting and drying um also if you see in the
[30:13] northern high latitudes the white areas are areas that have been masked out because there's snow cover and we're
[30:19] not retrieving whenever there's snow cover so another interesting thing here is if you look over the oceans it's also
[30:28] colored so um one of the great things about uh smap and other NASA satellites is that the data itself is available and
[30:38] there other things that can be done with the data so in this case a scientist has produced a C Surface salinity product
[30:46] from the radiometer data and you can see that areas that are blue are areas where the water is not as salty as opposed to
[30:54] areas that are yellow or red interesting things Supply attic is saltier than the Pacific the Mediterranean obviously
[31:02] saltier and there's quite a bit of fresh water around the coastline especially in the northern high latitudes primarily
[31:09] due to um melt ice melt so let's go on to the next slide please okay there so these are examples
[31:24] of some of the applications and I briefly touched on these but um smap is solar moisture is being used to increase
[31:32] the the predictability of um a weather forecast and here you can see um an a case study
[31:44] where uh in one case uh the prediction was only using se- surface temperature and in the other case the prediction was
[31:52] using SE surface temperature and soil moisture so you can see how much better the case uh where soil moisture was used
[32:00] compares to the actual observations uh this is a flood example and this is um worked by a colleague G
[32:09] Schuman and he's been working with the United Nations to develop a an index for for forecasting using precipitation and
[32:17] um smap soil moisture uh his uh study area is focus in the szi Basin and Delta in mosambique
[32:28] crop yield modeling I briefly touched on this too and this is an example of a study uh showing the correlation between
[32:36] Regional crop yield and how well it correlates to so moisture so snap so moisture is helpful for these type of
[32:44] studies that are Regional if uh you want to use so moisture at the field level uh then smap really the resolution is too
[32:53] coarse to observe at the field level but if you're talking about Regional type studies then map data is very
[33:00] useful and then uh Vector bone diseases this is actually one of my favorite applications because uh um mosquitoes uh
[33:09] need certain conditions to breed um they need a certain temperature range certain humidity obviously it depends on the
[33:16] type of mosquito but one of the critical factors for mosquitoes to breed is the amount of water in the soils they tend
[33:22] to really like wet soils and wet conditions so having um better a product like smap can help better predict areas
[33:31] that are at risk for Vector born diseases uh this is a list of what's called smap early adopter so these are
[33:38] application users that the smap mission identified early on and this is just an example of the different areas
[33:47] application areas where smap um data is being used uh weather and climate forecasting um uh uh drought and water
[33:58] fires floods and landslides and week two will focus on different applications thank you Erica um so the next we want to see a
[34:14] overview of evapo Transportation so as most of you know Evo transportation is um transfers water from land and vegetation to Atmos
[34:27] atmosphere so it is from the bare land water transferred in vapor form to atmosphere is evaporation whereas a
[34:38] moisture from root Zone coming through plant and through leaves when it uh it is given to the atmosphere it is
[34:46] transpiration and in when they're combined it becomes evapor transpiration um because of the phase change of water from liquid to Vapor as
[34:57] occurs in in ET process it requires energy to do so and so that is an important concept to keep in mind that
[35:06] it uh evapo transpiration not only uh Cycles water it also uh uses energy and Cycles energy that way so why is it
[35:17] important not only that it is a critical part of overall um water cycle also is a major component that decides like soil
[35:27] and veg station and atmosphere interaction and evapo transportation data they have been used for many applications um including determination
[35:39] of agricultural water consumption and we will see some of the examples later uh assessing drought and flood conditions
[35:47] uh developing water budget monitoring aquer depletion and of course uh monitoring uh crop and carbon uh budgets
[35:57] so these these are some of the applications they already in use how do we uh estimate or measure
[36:06] evap transpiration so it is very challenging because it is one parameter that cannot be directly measured uh even
[36:14] from groundbased sensors it is not that it can be directly measured it is usually derived from a number of
[36:22] parameters um such as solar radiation at the surface length and and air temperatures humidity at near the
[36:31] surface surface winds uh soil conditions in types and vegetation cover in types so all these parameters are required to
[36:43] know evapo transpiration and as you can see from the image here on the right hand side um
[36:51] evapo transpiration varies highly in space because it depends on vegetation and soil uh covers and types so it is
[37:02] one of the parameters that's most challenging to actually measure groundbased measurements of ET are also not direct
[37:11] measurements this is also derived from Eddie flux Towers or Lys meters and usually these towers are placed at some
[37:20] point over some Farm or vegetated area to estimate evapor Transportation uh and they just provide that just a point
[37:28] measurement so vegetation that varies highly um over a region uh there is no way to do this by using ground
[37:39] measurements so they are limited that way in special um extent so that is one of the advantages
[37:46] of using remote sensing for estimating evapor transpiration uh as uh this figure shows on the right hand side this
[37:55] is evap transpiration d from an instrument modus that's flying on uh Terra and aqua satellites as we will see
[38:05] provides um continuous coverage in space uh and so that is why it is beneficial over Point measurements provides large
[38:16] scale patterns as well as with high resolution satellite you can also zoom in and look at details of evapo
[38:23] Transportation so uh advantage of using remote sensing also is that different satellites and instruments they provide all these parameters which are useful
[38:36] for estimating VAP Transportation such as um radiation solar radiation at the surface uh L surface temperatures uh
[38:45] vegetation coverage and density precipitation soil moisture in addition um NASA U has at weather and climate models
[38:59] they assimilate some of the satellite data into the models and have weather parameters or climate parameters used
[39:08] for evapo transpiration calculation so uh it is convenient also to use um a suit of these measurements to U estimate
[39:19] eaper eaper Transportation so next what we are going to do is review uh some methods of estimating evap transp ation where
[39:28] remote sensing observations are used to start with we are going to review uh set sensors that are used uh for evapo
[39:37] Transportation uh estimation so there are two satellit Terra and aqua as you must have seen from the prerequisite uh
[39:45] presentation these are polar orbiting satellites caring uh moderate resolution uh Imaging spectrometer spectro spectr radiometer I'm sorry and
[39:58] land set with operation operational land imager and enhanced thematic mapper so these are sensors uh they are used to
[40:08] derive uh a number of parameters which are useful for calculating ET um such as normalized vegetation difference
[40:16] vegetation index or ndvi uh Leaf area index albo which is fraction of uh surface solar radiation reflected back
[40:25] and this is used for estimating surface energy um uh lens set provides spectral reflectance which is used to calculate
[40:35] um vegetation cover or vegetation plus L surface temperature can also be obtained in albo as well to briefly see uh modus is a
[40:47] versatile instrument with 36 spectral bands the one used for uh ndv uh calculations are red and ir and
[40:58] near IR uh these are the spectral bands used which uh have um resolutions uh ranging from 250 M to 500 M um and uh
[41:11] this instrument flying on both Tera and aqua has coverage uh since um 1998 onwards um and 2002 from Aqua was
[41:23] launched then so has long time coverage being a polar orbiting satellite it has a uh daily to twice daily coverage and
[41:33] it is a global coverage has large SWAT size as shown here it's about uh 23 30 km and Modis has been used to calculate
[41:47] vegetation index which is used for evapor transpiration calculation and a simple concept here is that green uh
[41:56] vegetation that absorbs red light and then it is strongly reflecting light uh radiation in near infrared so that
[42:05] difference can um tell us how much vegetation there is and what type of vegetation is such as uh with in uh near
[42:15] IR reflectant showing differences with um grass or dous orous uh vegetation so ndvi you exploits that uh feature of vegetations and it is
[42:30] simply uh derived as difference and summation of near infrared and red uh spectral radiances from modus they range from minus1 to 1 where
[42:42] one indicates the highest possible density of green leaves um Modis is also used to derive Leaf area index land
[42:52] cover in general albo uh and some of these St data sets are directly available from um lpac which is a uh
[43:02] data data center so this is one product that is used for et calculation and uh that brings us to
[43:13] lset sensors just a brief overview that uh etm plus is flying on board lset 7 lset 7 was launched in April 1999 and it
[43:24] has been flying uh since since then to something to notice here is that uh it the resolution special resolution here
[43:33] is 30 m uh for the bands that we are interested in and it has eight bands blue green green um red and um thermal
[43:46] infrared uh and um so these are used to for uh land cover classfication also for land temperature I'll be also can be
[43:57] derived from this however notice that the revisit time here is 16 days so and it is similar with uh operation land
[44:09] imager only uh that is flying on landet 8 lens set 8 was launched in February 2013 also has high resolution 30 m and
[44:21] has pretty much the same bands plus one um panomatic band is includ Ed in lens at at 8 this also has 16-day revisit time so
[44:33] when you look at SWAT size also it is quite narrow compared to modus but the special resolution is quite High
[44:41] compared to modus modus is uh 250 to 500 M here it is 30 m and on the other hand
[44:50] there is a tradeoff with temporal coverage uh lens that can only see uh same spot spot after 16 days whereas
[44:59] Modis has frequency of about 8 days or 4 to 8 Days depending on acin Tera passage over a region so these are some of the
[45:09] uh tradeoff one has to deal with when estimating estimating ET so one important uh Factor about landet is although it has uh lower
[45:22] temporal frequency uh one can see details um like individual Fields can be seen from lens set data so it has a
[45:32] great value uh for uh irrigation management so uh that's why it is used so still as we mentioned ET
[45:45] requires quite a few parameters and that is why estimation of ET is not easy at all there are three main ways to
[45:56] calculate ET so first is from water balance as a residual um so precipitation and uh irrigation can be
[46:08] source of water and that usually is partitioned as runoff ground water vertical transport of water subsurface flow soil moisture and soil water
[46:18] content plus ET so when ET can be calculated from water components as a residual residual however as you can see all these
[46:30] components are are also not very easy to obtain regionally when you look at groundwater or vertical transport of
[46:39] water these are really not very well known quantities uh so e at a small region from deriving from water balance
[46:49] is not very easy usually at a watershed level or uh River basing level it can give overall estimation of ET based on
[46:59] other components but um otherwise on smaller regions water balance has difficulty in getting all the components next method is surface energy
[47:12] balance here also ET is calculated as a residual of partitioned solar energy so solar energy going into the ground is
[47:24] partitioned in in ground heat flux sensible heat flux that is going to atmosphere and Laden heat flux that is
[47:33] ET so again uh ET is calculated as residual by subtracting um ground and sensible heating flux from uh solar
[47:44] radiation received at the surface uh this is a popular method because it does not require all the
[47:51] water components uh and the third method is again it's a empirical method that um derives evapor transpiration from
[48:02] mological information and vegetation and crop information so we will briefly go over uh some of the some of these
[48:11] methods and then talk about specific products based on these techniques so one more uh one more way to calculate
[48:24] ET is to use numerical models these are sophisticated models such as land um data assimilation or ldas uh system uh
[48:35] elas uses both water and energy balance at the surface so ET is explicitly calculated from water and energy
[48:47] components ldas that we are going to talk in this webinar so Global land data assimilation system uh that uses input
[48:57] this is a model that uses inputs from uh satellite data such as solar radiation um precipitation vegetation
[49:06] classification and topography they are all used from NASA satellites and from this model as a result of both energy
[49:15] and water balance one can derive soil moisture and evapor transporation in addition some other parameters can also
[49:22] be obtained as seen here so this is one a way of getting ET as well we are going to review um surface
[49:33] energy balance quickly because this is a uh popular method it partitions our solar uh RN which is the solar energy
[49:43] resed at the surface in ground heat flux and sensible heat flux so whatever is left is ET so to calculate all
[49:54] GNH um vegetation information is required land temperature is required air temperature is required so these are the information that lens set and Modis
[50:06] do provide and so they are used indirectly to calculate ET so one more like we talked about
[50:18] about um empirical way of calculating or estimating evap Transportation so this is um you can see there is way to
[50:30] calculate reference uh evapor transmutation it is calculated based on panman Mon teth equation so using this equation and we
[50:42] will go back to previous slide but with using this equation evap transpiration can be estimated so this has two parts
[50:52] one is this atmospheric part where radiation is received uh um there is um Vapor uh pressure deficit at surface
[51:02] this is also based on mology uh there is um latent heating constant specific heat constant are used in here to so these
[51:13] are all atmospheric contribution to panman Monti equation whereas there is um ra and rs which are dependent on
[51:22] vegetation height and leaf area index which are aerodynamic resistance so they depend on vegetation part so an Lai also is required for that so
[51:34] this is derived from uh modes as well as can it can be derived from lens set such
[51:40] as uh and so this is a equation that is used to calculate reference ET for um grass surface as a reference
[51:51] so a well-watered uh grass is considered a reference surface and for that uh mological conditions and vegetation
[52:01] conditions are used to calculate ET using panman Monti equation and then for any other surface or for any other crop this reference uh
[52:13] evapor transpiration is then scaled by crop coefficient for that particular specific crop and that gives actual um
[52:23] evapor transpiration over a uh surface which is not just grassland but it has other type of vegetation this again assumes that um
[52:35] all the crops are disease free and they are uh well fertilized and they have Optimum uh soil water conditions which
[52:43] is really not the case always and so there is also adjustment Factor sometimes given to the crop coefficient
[52:52] to take care of the conditions and that that Pro provides adjusted evapor Transportation so using Penman Monti
[53:00] equation and reference evapor Transportation uh evapor transpiration from actual crops can be derived empirically crop coefficients uh they can be derived from
[53:15] uh measurements taken from Airborne or Surface data but ndvi has also been used to derive crop coefficient and as shown
[53:27] here there is a h good relationship between crop correlation and ndbi in this case so mod data sometimes are used
[53:36] uh in such fashion to derive crop coefficients this brings us to actual uh remote sensing products which are um
[53:48] available globally as well as regionally so we saw three methods such as water balance energy balance and empirical
[53:55] method to calculate ET also land data assimilation where both water and energy balance are used So based on these there
[54:05] are four Global ET products which are available the first one which is mod 16 or Modi Global evapo Transportation uh
[54:14] project uh data they're available from University of Montana they are based on Modis ndvi empirically calculated evapo
[54:25] Transportation the next next one is Matrix or mapping evapor transpiration with high resolution uh internalized calibration this um method uses lens set
[54:37] data and provides high resolution evap Transportation lxc which is atmosphere land exchange inverse model this uh started using modes to calculate um EV
[54:50] transpiration so in um Modis is used in energy balance uh method to derive ET however now this method also is going to
[55:01] include gos uh data which are Zer stational data and also landset so a bland blanded lxc product will also be
[55:11] available and finally Global land data assimilation these data are available uh from NASA as well that we are going to
[55:19] see in week five in addition there are some Regional products uh these products can be adapted for other regions and um these
[55:31] are listed here that you can go to the website to get more information Sims is the satellite irrigation management
[55:39] support this is developed for Central Valley California and is used for irrigation management or irrigation control um NL Das is a version of GLD
[55:52] Dash specifically designed for North America America uh SS ebop which is operational simplified surface energy balance this
[56:02] exists for us and Africa and ET watch uh is a Chinese model that is also used for
[56:10] deriving ET and is used for irrigation and water uh balance management we're going to focus in this
[56:19] webinar in the global uh products which are publicly available that includes GL Das we will see this in week five um it
[56:28] is uh derived from a number of remote sensing observations listed here and using both water and energy balance to
[56:37] derive it U mod 16 uses ndvi from modor matric as we said from lset LXE com will
[56:46] soon be available from combined mod is lset and goes and these data like mod 16 are available at 1 kilm resolutions it has 8
[56:58] day um temporal resolution and monthly as well um currently they are available for 2000 to 2014 uh they will be extended to present
[57:10] but there is a data latency on this website uh however um you can contact the data producer to find out where
[57:19] exactly when exactly the data will be updated matric which is the high resolution evap transporation product 30
[57:27] m Global it's available from lens at 8 and um I mean 7 and 8 starting from 2011 and it is a it is continuous uh
[57:39] being produced there is a couple of months of latency sometimes but uh these data are high resolution and there is an
[57:47] interactive data tool um which is based on Google Earth engine so we will see that in week four
[57:56] how to uh obtain this data um GLD Das also will be seen in week four um there
[58:03] are tools available to access data data are available at 1/8 of a degree which is about 12 kilm resolution up to 1°
[58:12] resolution uh a temporal resolutions of 3 hour to month and it is a long-term data set from depending on the version
[58:21] is is 19979 to present LXE um is available from NOA and it has 8 kilm resolution uh has daily and about 2
[58:34] to two weeks composite EV Transportation available currently this is focused mainly on us but it will be available
[58:42] for other regions soon as well this we will see in week four we will also see week five I'm sorry and in during the um
[58:54] during this upcoming sessions we will also see how these data are used for a variety of applications so this brings us to the
[59:02] conclusion of today's session uh we thank you for attending the session and we hope to see you next week which will
[59:10] be focused on applications of uh smap data so thanks again and we'll um open the floor for your
[59:25] questions for so for evapor transportation I want to add that they're based on um thermal data and visible data from modes and
[1:00:15] lens set so one of the disadvantages or limitations is that they are uh affected by cloud cover if there are Cloud
[1:00:23] present then surface is not seen and at that point one cannot estimate evapo Transportation so that is one of
[1:00:31] the drawbacks of these data sets Okay a couple of smap questions smap will be useful in land slight
[1:00:41] prediction yes in fact we already have uh or are working with an applications group and they're starting to use smap
[1:00:49] so moisture for enhancing land slight prediction capabilities another question is uh why only is map measuring the top
[1:00:59] five centimeters of the soil uh that's because that's what the technology is allowing us to do so we're using
[1:01:06] microwave L band and uh we can only penetrate the top most layer of the soil there's a question about uh dxi and
[1:01:20] um I I know that Noah has been working on it and in week five we will revisit
[1:01:26] um this topic we'll talk uh and you can ask when the seexy will be distributed so is thermal band always
[1:01:37] necessary for mapping ET um it has helped uh mapping ET um as you know the the data required to estimate
[1:01:50] PT then thermal band actually helps in that case but without thermal band also it has been calculated as we
[1:02:00] see so how can human health uh be estimated from soil moisture actually I can think of two examples I gave one for
[1:02:08] better predicting the presence of mosquitoes and potentially um mosquitoes carrying diseases Vector born diseases and there's another applications um user
[1:02:20] that is using soil moisture to predict the dust levels and apparently there's been correlations between the amount of dust in the air
[1:02:31] and a certain um respiratory diseases like asthma so he's looking at U being able to better predict the incidence of
[1:02:43] asthma in C in the Middle East I believe that's where his study is focused another question is map
[1:02:55] radiometer combined with Sentinel data available now no it's not that product is not available there's a team working
[1:03:02] on this and it will probably be available in 2017 around March of 2017 um matric data I believe are
[1:03:25] available as binary data yes and we will see that in week five you can get images as well as um
[1:03:33] data in in binary for from E flux uh tool so ET can it be used to determine
[1:03:46] Health uh of men grow um I I am not sure about whether yes or no uh ET is used to look at vegetation
[1:03:58] health and again week five is going to talk about that um vegetation cover impacts ET in in very
[1:04:12] significantly and so really vegetation cover it it is sensitive to that whether Health um how healthy it is if if it did
[1:04:26] if if it affects overall cover vegetation cover then et data reflect that so but we will um find out exact answer
[1:04:40] of that in four and five okay is there a reason the state of I'm sorry go ahead go ahead go ahead is
[1:04:52] there a reason the state of main appeared to be gray on your map of what data access so that was u a map showing
[1:04:59] the areas in the United States where Institute soil is being measured that means there's a ground measurement of
[1:05:07] soil moisture and Maine does appear gray that's because uh probably there's no researcher that has an Institute soil
[1:05:15] moisture station there when this map was produced uh smap as I understand is stored in hdf5 format is there any tool
[1:05:26] for reading the data Yes actually there's going to be a webinar focused on accessing smap data and opening the data
[1:05:35] all smap data is in hd5 you are correct and there are tools available at the data archive Center um that allow you to
[1:05:43] open hdf5 uh data so not only uh open source tools but there's also a code and mat lab and IDL for you to open hdf 5
[1:05:56] there's a question about units of ET and it is kilogram per meter Square so it is that much water that per square area
[1:06:05] gets transferred uh to the atmosphere so thees map so moisture data set agree with smos data set for various
[1:06:16] land covers yes so we have a um a calibration validation team it's very important for us to be able to calibrate
[1:06:25] and validates map data and we have professional Partners around the world um that collect insit to so moisture
[1:06:32] data and we compare those measurements to the satellite we also compare the satellite measurements to other satellites like smos and overall there
[1:06:41] is very good agreement with smos and smap data is freely available so um there is a question
[1:06:53] about whether the data have been tested or compared with field data so um here is one uh example you
[1:07:02] can see giving a link here which Compares matric ET with uh number of um ground base or field measurements but
[1:07:12] again for et um ground measurements are also not direct measurements they are derived from either Edco variant or
[1:07:21] other methods so ground measurements themselves have some error and that's being shown in this link if you go
[1:07:30] through the presentation you will see some of the issues involved with comparing ET data derived from remote
[1:07:37] sensing to ET data derived from field measurements is a map radar to be fixed in the future does NASA have any plans
[1:07:57] to plans to launch another smap radar sensor in the near future um so the the radar is not functioning so we're just
[1:08:05] relying on the radiometer uh there are there any plans to launch uh another smap uh satellite in the future uh
[1:08:14] that's actually uh remains to be seen that's a great question actually so there is also a uh com
[1:08:24] comment here about um weap transportation data being affected by poor weather data and that is true um any inputs they have errors
[1:08:37] they get reflected into ET calculations so it is depend that is why it is one of the most challenging parameters to
[1:08:46] actually actually get okay what is the reliability of smap data for Aid and semi regions actually it works very well over those regions
[1:08:56] especially because there's very little vegetation cover so um our retrievals of soil moisture over those regions do be
[1:09:04] do meet the accuracy requirements of the mission uh when you mentioned that the measurements ignore areas of complex
[1:09:11] topography what about flat areas Wes surrounded by rugged mountains can snap work in these Wes um I believe so I I
[1:09:20] don't I I don't I know what Wes are what what kind of um Cape those are but uh
[1:09:27] over flat areas yes we are retrieving soil moisture and that it works well over those areas so ET formula um whether
[1:09:38] explicitly they take care of increasing CO2 because of that um you know how water loss by transpiration is affected
[1:09:48] um I I think these formula they depend on measured parameters so whatever is measur that is going into it now for
[1:09:59] models when models are used some of these these factors are included especially if you look look at climate models some of for the
[1:10:10] scenario models if these some of these factors probably are included in there but the formula you know they are
[1:10:20] not specifically um I don't believe they are derived for these special condition so here uh new algorithm for et
[1:10:38] availability of smap um so I'm I'm sure smap can be used for better accuracy because um humidity at the surface does
[1:10:51] matter the difference between soil moisture and air humidity um that is critical for uh flux transfer and so I'm
[1:11:01] sure that people will be looking at that issue but I'm I'm not familiar with um any such effort right
[1:11:08] now there was a question where long-term data like 30 years or so can be found um um currently eldas data they are the long
[1:11:23] longest so that they are basically model based data not all observations but they do have smap and ET both available for
[1:11:44] 307 so question here smap data can you tell us the difference between passive data and active data um so these are two different
[1:11:54] instruments uh the active instrument has high resolution 3 km but um it cannot measure soil moisture as accurately as
[1:12:03] the passive instruments the passive instrument is much more sensitive to so moisture we can measure it much more
[1:12:09] accurately but it's coarser resolution it's a 36 km product so the original um concept was to combine the best
[1:12:19] attributes of the passive and the active sensors to produce a 9 km product but since the radar is uh no longer working
[1:12:28] we are just using the radiometer which is passive to produce 36 km Global products of soil moisture every 3
[1:12:41] days how reliable is a data base just on the radiometer without the radar portion it's as reliable actually the accuracy
[1:12:49] uh requirements um for both the radar and the radiometer were the same so it's 4% volumetric a question here about
[1:13:01] different ET products they provide different qu balance closure and um that is true that is one of the issues um ET
[1:13:12] is something uh that's been currently now people are addressing it um I'm not sure whether there is any Ensemble
[1:13:22] product available but um um this has been talked about as you mention here um in a ET Workshop um a few months ago it
[1:13:32] has been mentioned to come up with an anable anable product but I'm not again aware aware of
[1:13:40] such products available what is the reliability of smap data for arid and semiarid regions uh so uh over
[1:14:03] these regions we are uh very confident that we have accurate measurements of soil moisture and it meets the accuracy
[1:14:13] requirements of the mission so there's a question have these products been tested against field data in different areas in the world I'm not
[1:14:51] sure if uh Lucia is referring to smap or ET but in the case of smap uh yes we
[1:14:58] have calibration validation Partners professional Partners around the world that provide us with their Institute so moisture measurements on a continuous
[1:15:09] basis so that we can compare them to the satellites measurements and the data that you can access online uh through
[1:15:17] the data archive Center is fully validated so for et um that is not the case that they
[1:15:28] globally data are not continuously available for comparison uh over the us as the link shown here will give an
[1:15:37] example there are efforts to compare uh these products with field based data uh and some Regional efforts such as in
[1:15:49] North Africa um and so that has occurred regionally regionally but it is not available internationally or many places they're
[1:16:01] not compared systematically people take this data and in their own region they do validation with their own field
[1:16:10] measurements so this information does exist in published literature but um there is no systematic effort of not
[1:16:20] that I'm aware of ET products based on field data available for comparison so what is the best product
[1:16:34] for looking at historical ET or so moisture going back 30 years or so um in terms of uh products generated directly
[1:16:42] from from observations I can't think of anything actually going back 30 years but uh you can probably use model products uh like
[1:16:52] G um to go back that far so about the accuracy of matric or other than agricultural land again um
[1:17:04] based on a few examples that uh we've seen the accuracy is believed to be between 5 to
[1:17:12] 15% depending on what condition so it is difficult to say exactly what it is over forest or shrand but the
[1:17:23] range appears to be uh geographically and this is specifically done over the US so may not be app applicable
[1:17:31] everywhere else but it is 5 to 15% so again I think ET accuracy um and from what I have
[1:17:54] reviewed it it looks like even the field measurements they have errors or inaccuracies up to 10 to 20% so
[1:18:04] considering all that remote sensing based ET that we talked about here um they are still considered within like 5
[1:18:15] to 20% so less than that that's the number that you see from most comparisons done and again I must emphasize that some of
[1:18:28] these results are based on the comparison conducted over the US not other places ER showed an animation of sea
[1:18:41] surface salinity and Continental soil moisture how is the salinity measured so I'm I I don't have uh too many details
[1:18:50] about the generation of the salinity product but I believe it it's due to differences in the dialectric um of
[1:18:59] water salty water and and less salty water as well as differences in the temperature yeah so again um about ganga
[1:19:15] and and brahmaputra ET is large and there's one flux Tower so yes I I don't think over
[1:19:23] Asia there is systematic validation done um if it is done it uh some people may have done it some research group they
[1:19:31] probably is in in published literature but I'm not aware of these systematic comparison in Asia which map data will be useful for snow
[1:20:05] cover dep estimation estimation um yeah that's a a really good question I'm I that's that's very difficult to do
[1:20:18] with uh justice map data so the question is can you you get um vegetation ET and soil ET so soil ET
[1:20:30] what you mean is bare soil so it is more evaporation there is no transpiration and yes evaporation data are available
[1:20:38] based on remote sensing both vegetated surface and nonvegetated surfaces so uh when when you look at ET
[1:20:55] data there uh it's not separated so there's no vegetation it's mostly vation if you go away from Land it is allor so
[1:21:04] these data are available so to ravender uh can I uh download smap data of soil moisture for India
[1:21:31] Himalayas and how so you'll have to uh go online and take a look at the coverage if there's any coverage um over
[1:21:40] that area I believe since it's such complex topography there might not be such great coverage or the accuracy
[1:21:46] might not be that great but you'll have to go online and look and the webinar on week three will cover specifically
[1:21:54] accessing and and downloading and opening smap hdf5 data but if you want to start taking a look at what's available you can go
[1:22:06] online uh ravender to this the link I'm providing so thank you all very much for uh participating in this webinar and we
[1:22:21] hope to see you next week at the same time time we will be closing this session in um
[1:22:28] just a couple of minutes and uh again thank you for attending and uh again thank you for attending
