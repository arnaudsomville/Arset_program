# Overview of Monitoring Waterborne Diseases using Remote Sensing Observations, Part 1/2

`https://www.youtube.com/watch?v=_LXgg2yzYH8` · id 320 · 1:16:33 · module 308 — The Application of Earth Observations for Assessing Waterborne Disease Risk

[00:05] Welcome to this applied remote sensing training on the application of earth observations to assessing waterborn disease risk. My name is Amitita Ma from
[00:15] ARSET and I will be conducting this uh session on overview of monitoring waterborn diseases using remote sensing
[00:23] observations. observations. We will start with a brief introduction to to ARSET. ARSET is part of uh NASA's
[00:34] capacity building program and it provides accessible, relevant and cost-free training on remote sensing satellites, sensors, methods and tools
[00:44] for societal applications. RSET provides trainings on these thematic areas listed here and trainings include a variety of
[00:53] applications of satellite data and are tailored to audiences with a variety of experience levels. Ours trainings are online or
[01:05] there are also in-person trainings offered. Um they are live and instructorled like this one or there are
[01:12] also self-paced asynchronous uh trainings available from RSET website. They're costf free. Uh there are bilingual and multilingual options
[01:22] available. U most of our training material is available in Spanish. Uh certain trainings are also conducted in
[01:29] Spanish and uh there are other options available such as French. We only use open source software and data and
[01:37] accommodate differing levels of experience expertise. We'll start with an overview of the application of earth observations to assessing waterborn disease risk.
[01:52] uh waterborn diseases uh they're defined as the US Centers for Disease Control or CDC as diseases which are spread through
[02:00] exposure to infectious pathogens from water. Uh these can include outbreaks of respiratory, skin, intestinal or other types of illnesses which are spread
[02:11] through either contaminated drinking water or recreation water activities such as swimming in water with poor water quality and consuming contaminated
[02:23] seafood harvested from contaminated water. And you can find more information at these references about uh general information about waterborn diseases.
[02:35] So with that our overall training objectives are given here. So by the end of this training uh we will be able to
[02:44] identify the factors that affect the presence of microbial contaminants in water leading to waterborn diseases in which satellite remote sensing can
[02:53] improve risk assessment. Identify Earth observations used for monitoring key environmental factors relevant for assessing the presence of contaminants in drinking and
[03:05] recreational waters and risk of waterborn disease outbreaks. Finally, we will recognize how satellite observations are integrated with INC2
[03:15] water quality data to develop risk assessment models for waterborn diseases. In this uh we will use collera
[03:24] as an example. There is a prerequisite fundamentals of remote sensing that provides uh explanation and description of concepts
[03:34] remote sensing concepts of satellites and sensors, orbits, swats, pixels, spatial and temporal resolutions, electromagnetic spectrum, spectral bands, and various data processing
[03:47] levels. We will be referring to some of these concepts throughout this training. is the reasons why we want to
[03:57] understand and predict waterborn diseases that listed here. Uh first of all there's worldwide impact according to CDC wash which is water sanitation
[04:07] and hygiene. Um there are over two billion people worldwide. They lack access to safe drinking water and about
[04:14] 1.5 billion lack basic sanitation facilities. And that leads to globally at least 1.7 billion people are drinking
[04:24] water with microbial contamination causing diseases such as diarrhea, cholera, dentary, typhoid and polio. Annually more than 3 million
[04:35] deaths result from poor wash conditions worldwide and diarrhea alone is responsible for approximately 1 million deaths. The majority of which are
[04:46] children under the age of five. So an example is shown here which is mortality due to unsafe wash conditions and this
[04:55] is for 2019. Um and what is shown here is the mortality rate per 100,000 population. As you can see, Africa has
[05:04] the largest mortality rate because of waterborn diseases. Then Southeast Asia, uh, Eastern Mediterranean, America's, Western Pacific and Europe. Uh,
[05:15] different countries are also shown here with uh respective uh mortality rates because of waterborn diseases. In the US each year, um, pathogens
[05:29] transmitted through water cause an estimated 7.2 million cases of waterborn illness, about 120,000 hospitalization and 6,600 deaths and u estimated cost to
[05:44] the US health care system is about 3.3 billion just because of the waterborn illnesses. As shown here, waterborn
[05:53] disease outbreaks between 2015 and 2020, they show uh cases outbreak cases ranging from more than five to more than
[06:04] 20. Um states such as Florida, Illinois in these 5-year period had many outbreaks of waterborn diseases and
[06:14] there are several other states which also experience waterborn disease outbreaks. So because of that monitoring risk of waterborn disease outbreaks is
[06:24] crucial for protecting public health and prevent the spread of waterborn diseases. There will be two parts to
[06:34] this training. Today we will have an overview of monitoring waterborn diseases using remote sensing observations and next session will be on
[06:45] 27th of March that will focus on using remote sensing based collera predictive intelligence for intervention and mitigation. There will be one homework
[06:55] assignment that will be posted on our website on 27th of March and the homework will be due by for 10th April.
[07:04] uh certificate of completion will be awarded to those who attend uh both live sessions and complete the homework
[07:11] assignment before 10th of April. With that we'll start with today's session on monitoring waterborn diseases using remote sensing
[07:23] observations or earth observations. Overall objectives for today are that at the end of this session we will identify
[07:32] diseases resulting from the presence of microbial contaminants or referred to as pathogens in waters and identify earth observations
[07:42] used for monitoring key environmental parameters relevant for assessing the presence of contaminants in drinking water leading to risk of waterborn
[07:52] disease outbreaks. We will have a brief overview of waterborn diseases. Then how waterborn pathogens are monitored. Then we'll move
[08:04] on to overview of earth observations which are relevant for inferring to waterborn pathogens. And then we will
[08:13] have a demonstration of uh data access. So how these earth observation data can be obtained by using NASA web tools uh
[08:22] which are relevant for monitoring motorborn motorborn pathogens. Just a note about asking questions. Um there will be a question
[08:32] and answer session at the end of the webinar. So please put your questions in the questions box and we will address
[08:38] them uh at the end. Uh feel free to enter your questions as we go. We will try to address all of them today but uh
[08:46] some if we cannot then uh we will answer those in the question and answer document and that document will be
[08:54] posted on the training website about a week after the training. So we'll first have a brief overview of waterborn
[09:02] diseases. As we saw earlier from CDC, waterborn diseases are caused by pathogens in drinking or recreational waters, beverages and food that comes
[09:12] from contaminated water such as fish and seafood. And pathogens, they are disease producing producing microorganisms and they include
[09:24] bacteria, virus and parasites. So bacterium is a single cell living microorganism. So many bacteria are are good and they make up our microbiome but
[09:36] many are bad and they cause diseases. Virus is a microorganism that needs a host such as a human, animal or
[09:44] plant to reproduce and they cause infection as we know for example COVID 19. Parasites um are microorganisms.
[09:54] They cannot live independently. They need host to survive and spread. And example is uh intestinal worms. Here is a microscopic view of uh
[10:07] pathogens coming from EPA. Some common waterborn diseases are listed here. Diarrhea, it can be caused by viral or bacterial infections from
[10:19] water and food and can also result from food allergies. Um dehydration resulting from diarrhea can be life-threatening
[10:28] and particularly for young children. Typhoid it's caused by salmonella bacteria in water and food and it's a
[10:35] highly contagious disease. It's um regular outbreaks can be found in Southeast Asia and Africa. Cholera is caused by vibrioa bacteria from
[10:47] contaminated water and poor sanitation and deadly if it is not treated immediately and more prevalent in Southeast Asia and Africa and recent
[10:57] outbreaks in Haiti and Middle East. They have also been noted. Ecoli they caused by bacterial infection. Gardia it's caused by
[11:07] parasites infecting intestine and they're found in waters worldwide. Hepatitis A. It's caused by hepatitis A virus and it's highly contagious liver
[11:18] infection. Polio is caused by a virus that mainly affects nerves in the spinal cord or brain stem and high-risk areas
[11:28] are Africa, the Middle East and Southern and Central Asia. monitoring waterborn diseases then it requires detection of pathogens in
[11:39] drinking water and recreational water as well. So conventionally uh water samples are collected and then analyzed in
[11:47] laboratory to assess types and concentration of pathogens. And you can see an example here uh water sample
[11:54] collected from river uh shows ecoli in this scanning electron microraph. There are several challenges in this process. Low concentration of pathogens
[12:06] in a large volume of water requires enrichment and concentration of the samples prior to detection processing. There's no unified method
[12:16] for collection and analysis that affects reproducibility of results. Differences in pathogen groups require different different treatments and inadequate special and
[12:28] temporal samplings is also a big problem. Uh it's not very cost effective uh to collect water and analyze from so
[12:36] many water bodies and rivers which are used for recreational purposes and also where drinking water is collected from.
[12:45] In the US, CDC provides statistics about waterborn diseases via these two portals shown here. As you can see, specimen
[12:55] source here are uh from the patients uh or from from the medical side of diseases. The beam is its bacteria,
[13:05] entics, amoeba and micotics dashboard. And there is national outbreak reporting system. Here you can see this is by
[13:14] year. How many uh numbers were there? How many cases by month? This is for vibrio. You can select salmonella and
[13:24] other um pathogens as well. And you can look at the map of um where the outbreaks occurred in the United States
[13:33] by each state. Now it is not possible to have such information or database in other countries or other places where
[13:45] waterborn diseases are more prevalent. And therefore the question we ask is can pathogens be detected by using satellite remote sensing.
[13:58] There are several open-source global satellite remote sensing data sets as we will see later and they have been used
[14:05] to monitor water quality in coastal and inland water bodies. What the satellite sensors do is they measure spectral
[14:14] signature of the water surfaces. Uh and the a figure is shown here. A few of the sensors are shown here. Um current
[14:24] sensors um are modus wers and oli. What you see here is that these sensors measure reflected sunlight from water
[14:33] surfaces from ultraviolet to short wave infrared spectrum which is the optical spectrum and each sensor has discrete
[14:42] medium resolution spectral bands and the number of bands of course vary with different sensors. Now can these sensors detect pathogens?
[14:52] So the answer is yes and no. If the pathogens change color of the water then they can be detected directly from the
[15:01] sensor observations and examples are syobacteria and harmful al algal bloom in water. But so many pathogens that we talked
[15:12] about such as Salmonella or Vibrio, they cannot be detected by these medium spectral band observations from satellites. However, there are several
[15:24] environmental parameters that affect waterborn pathogens and they can be monitored by using satellite data. These environmental parameters include
[15:37] water temperature, precipitation and flooding, uh nutrients and chemicals from agricultural and industrial runoff, uh chlorophyll, harmful algal bloom,
[15:48] dissolved organic matter, salenity, water currents and stagnation of the water surface, solar radiation and bofilms which is communities of
[15:59] pathogens attached to surface. And if you look at the list here, the highlighted parameters, they can be
[16:06] obtained from satellite data. So chlorophyll and harmful alcohol bloom and colored dissolved organic matter, they can be detected in water bodies
[16:17] from satellite sensors directly by looking at the images and deriving from that. Other parameters can be obtained
[16:24] from satellite observations or earth system models in which satellite data are used. So the environmental parameters that we just saw available from
[16:38] satellite observations are weather, climate and hydrarology parameters. So com combination of INC2 and remote sensing data are used for monitoring
[16:48] prediction and risk mapping of pathogen occurrence and disease outbreaks. Conventionally empirical relationships between disease incidents and relevant
[16:59] geohysical parameters are used to predict disease outbreaks and you can find there are challenges and opportunities both in using remote
[17:08] sensing in um looking at disease outbreaks. outbreaks. Commonly used parameters they include water surface temperature, chlorophyll a
[17:19] concentration, land cover type, precipitation and runoff. And what we are going to do next is look at a couple
[17:28] of examples where some of these parameters are used. Here is an example in which uh environmental parameters
[17:36] were used for non-typhoid salmonella prediction. Uh this is from tech at all study conducted in Democratic Republic
[17:44] of Congo and so NTS prediction study was conducted for children under 5 years of age admitted to hospital uh and INC2
[17:55] data were used from hospital admissions and also uh blood cultural surveillance. What they did was derived an empirical
[18:04] model based on rainfall data from climate hazards group infrared precipitation with station data or chirps and 2 m air temperature data from
[18:14] European center for medium-range weather forecast. And what they found was that the model showed a direct epidemiological association between
[18:23] rainfall and NTS infections. And the results are shown here. This was conducted from 2013 to 2019. And you can
[18:33] see that observations and model predictions they match quite well. And time series also uh show a good match
[18:42] between um NTS prediction using environmental data. Another example is from European space ay's eoscience for society and that has
[18:55] launched a vision or waterborn infectious disease and global earth observation in the nearshore. So they built capacity and
[19:04] resilience against waterborn diseases under extreme weather conditions using flooding information from Sentinel one and sentinel 2 observations. We'll talk
[19:14] about this satellite soon and you can browse through this website for more information. So this is another example
[19:23] uh given on eoscience for society that's impact of monsoon floods on waterborn pathogens in south India. Um so they
[19:32] examined extreme rain events and floods in South India using Sentinel 1 and Sentinel 2 flood maps and they used
[19:39] E.coli data from EC2 water samples and incidence of acute diarrhea disease. They were all co-analyzed and uh flood
[19:49] maps from remote sensing along with maps of water quality information showed potential to assessing risk of pathogens
[19:57] in water based on this analysis and figure is shown here. Uh this is the area where floods occur. This is um
[20:08] false color image uh from Sentinel 2 and these two are flood images from Sentinel one and Sentinel 2. And so this is
[20:17] another example how environmental parameters can be used to look at uh waterborn disease outbreaks. With that we will have an overview of
[20:28] earth observations relevant for inferring to waterborn diseases. As shown here, NASA has a fleet of earth observing satellites and many of these
[20:41] are useful for monitoring water quality or looking at environmental parameters uh such as precipitation or soil moisture or land cover which can be used
[20:54] to infer to waterborn pathogens or waterborn waterborn diseases. Also, there are some new missions coming up. NISAR will be coming
[21:04] up soon. Uh Lancet next and SBG. These future missions will also uh help in in looking at water quality as well as
[21:14] watershed processes and environmental parameters uh useful for detecting waterborn diseases. Here is a list of current satellite missions relevant for
[21:24] inferring to waterborn pathogens. The names are listed here. Some are acronyms which are defined on subsequent slides
[21:32] and you have launch dates for each satellite mission as well. If we go through the panel, what we see is
[21:40] different satellites with different swath. Uh their orbits are shown and so these satellites include Lancet 8 and 9,
[21:50] Aqua and Terra, SNPP, JPSS 1 and 2, GPM, SNAP, base and Sentinel 1, 2 and 3. These are European Space Agency
[22:02] missions. missions. All these satellites can be used to derive some environmental parameter or parameters which can be used for
[22:10] inferring to waterborn pathogens. These satellites have multiple sensors and different swath widths as we can see there are also orbit gaps in between uh
[22:21] in you can see um and they all have different special and temporal resolutions. resolutions. Another thing to note here is that other
[22:30] than GPM all other satellites are polar orbiting satellites covering from poleto pole and global observations. GPM is a
[22:41] low inclination orbiting satellite and has 65 south to 65 north coverage. Um so next here's a summary of satellites and
[22:53] sensors for monitoring land and water body parameters. So the satellites listed here uh parameters are given here
[23:01] and their special and temporal resolutions are provided here. All these satellites they have uh either optical sensor or optical and
[23:12] thermal infrared sensor flying on them. So starting with lens set 8 and 9 uh has um oi operational uh land imager
[23:23] optical and then thermal infrared sensor which is thermal IR uh Terra Aqua SNPP and GPSS. They have modis and ve uh they
[23:34] are optical and thermal IR um sensors. Sentinel 3A and 3B. uh they have ocean and land color
[23:44] instrument and optical sensor and uh SLSTR C and land surface temperature radiometer that's an optical and thermal
[23:52] uh sensor center 2A and 2B has multisspectral imager which is optical sensor and PACE which is the latest NASA
[24:01] mission has ocean color instrument which is an optical sensor with hyperspectral measurement capability. All these satellites provide surface
[24:12] reflectances in um optical bands and also provide emitted thermal radiation and can be used to derive water quality
[24:21] parameters listed in this column. Uh most of them they provide temperature uh chlorophyll concentration uh sediments and seedom they can be obtained from
[24:32] these optical sensors. Um and if you look at um land properties, land cover can be obtained from um optical sensors
[24:42] as well. Um there are standard products from um Modis and Wes and also from Sentinel to uh A and B. These land cover
[24:52] products are available uh and some of these uh water quality parameters are also available uh from these satellites
[25:00] as we will see later. Um a note about base has hyperspectral measurement. So not only it provides conventional water
[25:10] quality parameters such as chlorophyll a and suspended particulate matter or serum but also uh has capability to
[25:19] provide phytolanton uh community constituents and they will be available um soon from paste. If you look at the special and
[25:29] temporal resolutions, Lancet has higher res uh smaller um swath so does uh Sentinel 2 185 to 290 km and modis and
[25:42] we have broad swats. Uh next and also has broader swath base also. You can look at the special pixel resolutions or
[25:54] special resolutions here. uh Lancet and Sentinel 2 uh have higher resolution uh 10 m to 60 m 15 m to 60 m here and uh
[26:07] these three sensors so modes uh vs and they are medium uh resolution from 250 m to 1 kilometer and pace also has uh 1
[26:19] kilometer resolution other than lancet and sentinel 2 uh other satellite have 1 to2 day coverage. Um, Lancet is 16-day
[26:30] and Sentinel 2A and 2B combined they have 5day uh temporal resolution. Then there are satellites and sensors which are useful for
[26:41] monitoring hydrarology parameters. Uh that includes global precipitation measurements. Now with GPM that has a microwave imager and a dual frequency
[26:54] precipitation radar. Uh these measurements are used to calibrate um constellation of national and international satellites data with
[27:05] microwave radometers and sounders to derive a integrated multi-satellite retrievalss for GPM or IBG product. uh that precipitation product um is
[27:15] available at onetenth of a degree uh every half hour. Then there is SMAP with Lband microwave radiometer to measure
[27:25] soil moisture. Uh has relatively um broader swath and two resolutions are available 36 km and 9 km and 2 to 3 day
[27:37] revisit time. Then Sentinel 1 has Cband synthetic aperture radar that allows uh surface ination detection or flood
[27:46] detection has 80 kilome swath 5 m resolution and 12 day revisit time. In addition to the satellite data, there
[27:56] are earth system models uh which provide weather and hydrarology parameters. Uh global land data simulation system and
[28:04] North American land data simulation. These models they integrate surface-based and remote sensing based observations in land surface models and
[28:14] provide a number of hydraology parameters including parameters which are not directly observable such as runoff. runoff. um MERA 2 which is a uh reanalysis model
[28:28] uh uses gdard or thazuring system or goss 5 model in which um vast quantity of observational data are assimilated as
[28:37] shown here but for different years and this model provides state-of-the-art global analysis of weather parameters here is summary of all the
[28:49] model model parameters 2 provides weather data temperature rains and humidity at half a degree degree by667° hourly and monthly timestamps
[29:00] from 1980 to present. These are global data of course and from GLDAS and NL DAS uh runoff and soil moisture are
[29:10] available in addition to other uh hydraology and land surface parameters. um glas is available at quarter degree
[29:18] hourly resolution uh since 2000 and NLDS is available at 1/8 of a degree hourly data from 97
[29:27] onwards. Next we will demonstrate how to search and access these environmental parameters using NASA web tools. We will
[29:37] see how to subset these data specially and temporarily and download uh either data parameters or images. We will also
[29:47] see how to visualize the data parameters without downloading data. So I'll start with the demonstration. Before we start
[29:56] the data access demonstration, I want to present a couple of examples uh which we will use to search uh and access data
[30:05] for. First one is um algal bloom in Northern Ireland in UK. There is a freshwater lake L nay uh that had an
[30:17] unprecedented algal bloom occurred in uh July uh in August September of 2023. uh sentinel 2 images and normalized
[30:28] difference vegetation index calculated from the imagery showed the extent of the alkal bloom. Here is the lake. You
[30:35] can already see it looks greenish. Um in this picture uh this is sentinel 2 image and this is NDVI calculated from the
[30:45] image and you can see that it is showing algal algal bloom. Analysis of the algal sample showed the presence of pathogens such as
[30:55] E.coli, Salmonella, Enterobactctor and Clustridium and several types of microcyines and cyanotoxins and nutrient runoff and water temperature were responsible for
[31:10] the algal bloom as shown in this study. Another example is about algal bloom in New York finger lakes. Here finger lakes
[31:22] are shown in in uh New York states. You can see they look like fingers. And some of the lakes include lakes sica
[31:30] canondua, skinny atlas and kauga. And there was a toxic cyanobacteria bloom that spread across all the lakes between
[31:40] June uh to October 2024. The alol outbreak affected swimmers, animals, and some local drinking water supplies. And
[31:49] the environmental protection agency warned of the risks of skin rashes and blisters if people came in contact with
[31:58] uh the water or if they ingested uh warning was about gastroenteritis, liver toxicity and neurotoxicity. So we will look at these
[32:10] two examples to search and visualize data. The first uh web tool we want to see is NASA earth data. Uh so if you
[32:22] look at uh earth data portal you will see that this is the gateway to NASA earth observation data. Um this is still
[32:34] being populated. Not all the data are available through this website but you can always search the data and it will
[32:42] point you to the right website where you can get the data. By 2026 all the data should be available from this site. You
[32:50] can see there is data catalog, data tools, uh there's data alerts and outages for various reasons. You can
[32:58] browse data by topic at different areas. Uh there are uh featured news and events. You can look at data tools. Uh
[33:10] we are going to look at a couple of them. Uh especially worldview. So this uh site is really uh the master uh site
[33:20] to search uh the data set. If you look at go directly to earth data search uh you will be taken to this data search
[33:32] website. You can take the tour to go through all the features. Uh and one thing is that you have to have a
[33:41] username and password to access these uh data sets. uh you can log in if you do not have um can skip tour and I've
[33:53] already logged in but otherwise it will take you to a registration page. It's NASA earth data registration and you can
[34:00] create an account and then you can uh access and download data. Of course the it's data are free. You just need to
[34:07] register to access them. So we search for uh specific data set uh you have a number of options to filter
[34:19] data. You can narrow your search by keywords. So if you are interested in atmosphere or say oceans, you can pick
[34:27] that or agriculture. Um and so it allows you to narrow your search. Platforms are available. we can say uh space-based or
[34:37] landbased or other um and uh instruments if you already know if you want modes or vs or GPM, GMI or immerge you can select
[34:50] according to that. So there are options if you already know what you are looking for or you can just start searching with
[34:59] specific uh data set. So we can start searching uh data that we are interested in and I'm going to start with the uh l
[35:11] example. So here let's search for chlorophyll concentration which is used as proxy for algal bloom. So you can say
[35:23] chlorophyll and we can say modus and search for the data. You will see several matching collections. Could also
[35:32] see that it shows vegetation indexes. It's chlorophyll over land. So to further filter we can say ocean
[35:42] color chlorophyll modes. And then you should be able to see chlorophyll from Aqua and Terra Modis. And you will see bin data which
[35:58] are raw data bin. We want globally mapped data. So we can select aqua modis globalmapped globalmapped chlorophyll. And you will see a number
[36:10] of granules uh starting from um 2024 December. Here uh we can filter it by dates or calendar. Here uh we know that
[36:23] the agul bloom in Loch Net occurred in August September uh 2023. So you can select data based on that uh filter by
[36:35] temporally filter the data. So this is August and September and you can apply. Now you can see that the matching
[36:44] granules are much smaller. Uh further you can do special um subsetting for that you can go to the map and here if
[36:57] you zoom in you will see this ln and um you also have latitude longitude you can zoom in that way also uh and pick either
[37:08] a polygon or a circle square or point I'm going to for simplicity I'm going to use a square here. You can have a bigger
[37:18] area if you are interested in watershed uh itself for other data sets. Uh for example, I have picked this and um now
[37:28] if you look at you have specially you will have specially subsetted data. You can either add uh uh each granle or each
[37:43] image map separately or you can say download all for bulk download. Then it allows for edit options. So you can
[37:52] customize customize uh you can just download all the data or you can customize. If you have multiple
[37:59] parameters in uh this file then you can pick variable as well. Um here you can see documentation
[38:09] uh subsetting we've already done uh you can see edit variable. So here we can pick everything uh and this allows us to
[38:21] now download data uh based on that. Uh you can also see um net CDF. You can choose net CDF and
[38:37] say done. And now you have picked uh specially temporarily subsetted uh aqua modes chlorophyll data uh for uh this
[38:48] region for 2023 August September data will be in net CDF format and you can download and uh save on your
[39:00] computer. Now that we already have uh specially and temporally subseted data, we can search additional data set
[39:12] and get the data set. So say for example, if you're interested in looking at runoff around the lake, then you can
[39:21] see see gildas runoff. um you can refer to the data tables that we looked uh during the
[39:29] presentation and you can see uh which source to use. So here we are using glas uh runoff and you can search uh we can
[39:40] there are multiple options again this is quarter degree 3hourly you go down and you will see monthly data then there's a
[39:49] onederee data we want quarter degree 3-hourly data so we can pick that one thing to note uh let's pick
[39:58] this granle for example for uh 30th uh September in 2023. And if you say download here uh you will see
[40:17] that if you look at edit options you don't have customization options like we had for modis chlorophyll. So what it
[40:26] means is that you will have to download uh this entire file uh for this day in which you will have uh variables
[40:35] additional addition to runoff you will have soil moisture precipitation evapor transpiration and other data sets then you will have to do post-processing to
[40:44] subset the data um if you are interested in just one variable and then you can uh just download the data
[40:56] So through earth data search we saw that we we can search and access data. We can do
[41:05] bulk download or can download individual maps or images and almost all data sets that um we want to look for we can
[41:16] search and this site will point you to where to get the data. However, if you just want to quickly look at the data,
[41:26] visualize the data, then there is another tool that we can use and that is NASA worldview. So our next
[41:35] demonstration is going to be about NASA worldview. So now we will see how to visualize data using NASA world view.
[41:46] You can click on these events uh for information about the specific events in world view. But let us look at the data
[41:55] that we are interested in looking at. Um if you look at this panel, these layers, the reference layers, you can turn um
[42:05] place labels on. You can turn coastline borders and roads on. These base layers are true color images from V and Modis.
[42:16] You can turn many off. Um all of them. Right now what is showing is Terra Modis True Color image. Um this is for
[42:27] February 18th, 2025. But you can navigate through this uh timeline. Uh many data are available in near real
[42:36] time with low latency such as 4 to 6 hours. Um and so near realtime and historical data can be accessed through
[42:44] world view and can be visualized on on this map panel. Add layer allows you to search for data and add to this panel.
[42:54] Um now one thing to note here is if you look at uh Modi's aqua um it for the
[43:02] same time it's not showing where the terra um image was and that is because as we saw earlier they all have
[43:11] different equator crossing time. So local time of observations are different for different satellites. They all have uh so different swats cover different
[43:21] parts at different time and so not all of them are coincident but we can keep one of them on just as
[43:30] reference. So before we start looking at uh environmental parameters other parameters I want to show that we can
[43:39] add a water mask. There's a global water mask at 250 m from Terara Modis and shuttle radar topography mission that
[43:47] you can select and that shows where all the lakes are and of course oceans are. Let's go to our case study that we have
[43:56] been looking at that this is in UK Northern Ireland. This is Lakn and this is the lake. You can see it's demarcated
[44:04] by this musk. Now we can look at uh chlorophyll uh concentration data that uh we we searched in uh NASA earth data
[44:14] search. So here we can se we can search for chlorophyll and all the options are shown here. Now paste chlorophyll uh is
[44:28] available here but that starts in 2024 and our case study is in 2023. So let's go to
[44:36] 2023. This is year, month and day and go to August when the algal bloom was noted August and September. So let's start
[44:45] with August. So first of uh first of August and uh now we can look at the data here.
[44:58] Let's pick Sentinel 3A and BLI data. There There is Nova 20 and 21. These are GPSS satellites. We have uh data from WE SNPP
[45:12] WE. These are past data. Uh look at uh Aqua and Terra Modis. So if you remember the table, we have these data available
[45:23] from number of optical sensors and they're all they all can be visualized here. So we have picked them
[45:29] all and you can see get that there are some data showing. Uh this is overlap of all different satellites and sensors we
[45:39] have picked. If you want to know which satellite is giving what value, you will have to turn this one by one off. I'm
[45:47] going to keep them on uh so that we have a better view of u how chlorophyll a is
[45:54] changing. Now if you go to August 2 all of a sudden you see there is no data and
[46:01] that is because of this presence of clouds some uh most of the time when there's overcast or very high cloud
[46:09] cover um optical sensors cannot see through and cannot see the surface in that case we do not have chlorophyll
[46:17] data and so we don't have you know for this day if you go through the time March here 5th
[46:26] relatively clear spot over here and then you can see that um you see this chlorophyll data clearly
[46:36] here. uh you can go through this and uh you will be able to see that if it is
[46:44] really cloudy then you do not have data but let's go back to 5th of August when we did have data and we see uh
[46:54] chlorophyll concentration all the yellows and reds are higher concentration 6 to 10 and then this uh dark red spots are more than 20 mg per
[47:05] meter cube uh so we can see this and you can work through all the days and see when you
[47:14] see higher concentration. Addition to the chlorophyll in water body that we saw uh as we talked about earlier there are
[47:24] weather and hydrarology parameters that impact waterborn pathogens. Uh and so we can view those as well. For this case
[47:33] study, uh there was excessive runoff um bringing nutrients in in the lake and that caused algal bloom. So we can look
[47:43] at at um precipitation and uh so let's let's look at land cover also. Uh there is Terra
[47:54] and Aqua Modis based annual yearly land cover type. We can add that. Uh then we can can add
[48:09] precipitation. Uh and we can pick IM merge. This is from GPM. Uh and even we can look at soil
[48:21] moisture. Uh there are multiple choices here for all parameters. I'm going through the table that we covered. Here
[48:28] we have soil moisture um 9 kilometer from map. So uh let's see we can use that this is daytime this
[48:43] is night time we just want to see an example so we can select that and uh we
[48:49] can view this parameters. So first of all, let's just uh look at land cover around uh the lake and
[49:00] um the when you when you point to these uh squares will tell you which color means what. So this this
[49:11] color is [Music] [Music] savas. This is grassland. This is crop land. So you can see that all three are there. Um
[49:23] especially uh grassland and croplands are surrounding here. Also you can see urban areas uh right along the lake. So
[49:34] when there is runoff from these different areas, different nutrients or different debris or chemicals they flow into the water and then waterburn
[49:46] pathogens are flourishing because of that. So you can look at land cover to see where uh more precipitation is in
[49:55] which area. And so let's look at um I merge precipitation. Now this is a uh halfhourly data as we saw earlier. Uh
[50:07] you you can see daily data here. So if you if you zoom out a little bit you can see
[50:15] precipitation system processing uh pro progressing in this area. So there is no rain on August 3rd. uh fourth there is a
[50:25] system coming in and there is more rain on fifth and then that moves on. You can also look at soil moisture
[50:36] in this area. Um and if you navigate uh when the data are when there is overpass year or when the data are there
[50:46] you can see that around the lake there is moderate amount of soil moisture a higher soil moisture in this areas and
[50:55] you can look at how it is changing um with time again around the lake uh soil moisture um will also determine amount
[51:06] of runoff in the water. Uh in addition to terrain and when there is rain, if soil moisture is higher, there will be
[51:16] more runoff because there will be less percolation in the or infiltration in the ground. Uh so you can look at
[51:24] different variables here um and visually uh understand or try to judge a situation that's going on. You can also
[51:34] look at additional data such as MERA 2 that we mentioned earlier for weather data. So temperature wind you can select
[51:42] those and display uh to look at the situation around the case study that you are interested in the region you are
[51:51] interested in. Um and the advantage of this tool is that you can have many data sets in near real time. Um some other
[52:01] features are you can uh share this map, you can save the link and email it to yourself or somebody else somebody else.
[52:09] Um switch projection uh take a snapshot. You have information about the tool. Here you will see for each data set
[52:19] there is information about that data set as well. Um there is also uh a feature for animation. You can uh let's look at
[52:31] animation of precipitation just for uh example. You can select days here. We can go from 1st to
[52:46] 16th or you can even go later for this whole month. Um and then you can see how
[52:56] precipitation systems are moving through this this area. You can change speed of how uh the rate at which the frames are moving. And
[53:08] this allows you to look at progression or precipitation or any other parameter that you are interested in. You can also
[53:16] download data. when you say download it will uh show up uh all the layers available. some layers if they they're
[53:25] not available for this particular date then they won't be available but as you can see the download data will be
[53:33] performed using NASA's earth data search the tool that we already saw earlier and uh so with that um one final uh tool
[53:44] that we want to talk about is cyan or which allows us to monitor cyanobacteria bloom in the lakes in the
[53:56] US. So let's start with syobbacteria assessment network demonstration or cyan. This is a web application. Cyan is
[54:05] a joint project between EPA, NASA, Nova and USGS and it focuses on cyanobacteria uh density or concentration in lakes in
[54:16] the US. Just a note here, Arset conducted a cyan training earlier and you can view um a YouTube video at this
[54:26] link provides uh detailed information about can. Let's go to the website here and you will be asked to either create new user
[54:38] information or if you already are um user you have a username and password you can log in and start
[54:52] using. This is the main page of the application and um you will see that there are u number of options here. My
[55:03] locations uh locations we pick through this marker. We can just click on any water body and then that puts a marker
[55:11] there. Um and uh let's come back here later. But there are there is water body stats. You can search for a water body
[55:21] and get cyanobacteria statistics. Uh there are options here. You can have a street map or you can have imagery and
[55:30] you can also highlight water bodies or look at the outline of all the water bodies they're covered. uh this data
[55:37] sinobacteria data uh it's coming from Sentinel 3 OLE data and so from 2016 these data are available as we saw earlier OL has a
[55:50] resolution of 300 m by 300 m square that's the pixel size so legs which are bigger than at least three pixels of gi
[56:00] that means 900 by 900 m square or bigger those are seen by OG and they are included in
[56:08] can. You can zoom in uh on the map by using this plus sign or with your mouse and you will see that
[56:18] there are markers which I have picked here. This is lake area and then these are finger legs. We can zoom in further
[56:27] to the finger legs region and these are the finger legs. This is lake saka and this is lake
[56:37] kyoga. And uh you can see that there are two markers that I have placed here earlier. You can click on any location
[56:45] any water body and um it will place a marker there. You will also see that they these markers have different colors
[56:54] and to see what they mean you you can go here and uh see the uh marker color
[57:01] configuration. configuration. What they show is at that location uh syobacteria density in cells per milll. If it is lower than 100,000 it is green.
[57:14] If it's between 100,000 and 300,000 it's medium. And so then it's high. And so these are the ranges. But you can also
[57:22] change this range. And if you update it then colors also change accordingly. So you can also decide how you want to
[57:31] define the thresholds. Um and so that's what the colors show here. If you go to my my locations, you will see that wherever
[57:43] you have put markers, those locations will show up. I have one in Lake Erie also. But this one is in Saka Lake and
[57:53] this is in Kyoga. Let's focus on this one. Um it provides uh information about the point where the marker is. Um it
[58:04] shows uh cells per milliliter and also change in cells per millimeter. Um since this and this is the image for which the
[58:14] data are there. So one more thing you can do is if you select this it provides overview that means uh
[58:25] all the Sentinel 3 OG images available which have overpass over that location that pointer uh location uh they will be
[58:35] here you can see uh slideshow you can download this uh as TIFF images as well and for each image you will see
[58:44] cyanobacteria concentration ation in here. If you click on the chart, it shows chart uh for sinobacteria concentration and this starts. So
[58:56] whenever there are images and they're uh able to uh cover that marker and it's cloud-free then you have data and as you
[59:07] can see in 2024 you do see uh increase in cyanobacteria concentration in in September October of this year which had
[59:18] health implications as we saw earlier this chart is just for this pointer location. If you want to see the
[59:31] statistics for this entire lake, then you can click on this symbol. It opens this panel with water body information.
[59:40] Senica Lake in New York State, coordinates, area, and elevation. You can uh look at daily histogram for a
[59:49] single date or you can have 7 day or 30-day history of sinobacteria concentration. Uh you let's pick 30-day
[59:59] history and select end date in 2024. I'm going to select September 30th. So we can look at the entire month
[1:00:09] of September. So whenever there is satellite data available, satellite overpass from Sentinel 3 is available and when there
[1:00:20] is algal uh syobacteria bloom going on then you will have uh information. So here based on that you
[1:00:33] have two charts. This is total cell count. These are oli pixels number of pixels. And for for these dates when
[1:00:44] there was a a cyanobacteria bloom and when satellite could observe it, you have uh data that how many pixels had
[1:00:54] low concentration, how many pixels with medium, high and very high concentration. You can see that it's the
[1:01:02] same information provided here but now it's broken down by range. So you can see time series of how many pixels in
[1:01:10] low sinobacteria concentration range then middle and uh high and very high range. So you can see the history of uh
[1:01:20] syobacteria bloom over the lake over this month. You can also see slideshow. So you can see special distribution
[1:01:29] where you see cyanobacteria bloom and whenever you see the bloom and also at the same time you have satellite data
[1:01:39] going over it you will have information here. So for here this is 14th of uh September. So if we go
[1:01:49] there we should be able to see an image and right there uh you can see u cyanobacteria bloom over there. It works
[1:01:59] through the history and shows whenever and wherever in the lake uh there was a cyanobacteria bloom that satellite uh
[1:02:09] can can observe. So based on this you can pick the lake of your interest and look at
[1:02:19] the algal um syobacteria bloom and then you can go back to world view and look at other environmental parameters around
[1:02:28] the uh lake of your interest. So with that uh we conclude uh the scan demonstration. Just a note here that if you click here
[1:02:42] you will have documentation about can and about this website and web app. There's also a mobile app that you can
[1:02:50] use. Uh but all that information you can uh find here. So in summary today we reviewed common
[1:03:02] waterborn diseases and pathogens. Identified environmental parameters relevant for inferring to the presence of pathogens. Introduced satellites, sensors and earth system models to
[1:03:17] obtain the environmental parameters. and finally demonstrated web tools to access satellite and model data and to monitor
[1:03:25] cyanobacteria bloom in selected water bodies in the US. We looked at NASA Earth data search and world view for data access and
[1:03:36] analysis and we looked at scan web app to look at cyanobacteria concentration in selected lakes in the
[1:03:46] US. A note about advantages and limitations of using earth observations for monitoring waterborn diseases. We saw that not all waterborn
[1:03:58] pathogens other than alkal bloom are directly observable from satellite data. But there are various environmental parameters which are observed and they
[1:04:09] provide valuable information about waterborn disease risk. These parameters include precipitation, uh water temperature, um soil moisture, runoff,
[1:04:21] etc. Earth observations complement sparse and infrequent INC2 data. There are regular and consistent observations over large areas with consistent spatial
[1:04:33] and temporal resolutions and a wide range of free and open access data products are available as we saw.
[1:04:42] Some of the limitations are that various satellites and models they provide data with different spatial and temporal
[1:04:49] resolutions and coverage have different characteristics. So it is important to understand that characteristics and select data sets that's ideal for your
[1:05:00] area of interest. So region of interest. um optical observations cannot see through the clouds and so surface is
[1:05:10] obscured when there are clouds present. So we cannot see the surface. So there are data gaps because of
[1:05:17] that data extraction and processing are required for developing water bond disease prediction models and that is what we are going to see in our next
[1:05:28] session. On 27th of March, we'll have part two and we will have guest speakers presenting case studies showing model
[1:05:37] development for predicting collera outbreak using earth observations. There will be one homework posted on 27th uh and uh it will be available through
[1:05:51] the training web page. uh it will be submitted via Google forms and will be due on 10th of
[1:05:59] April. Those who attend all live webinars and complete the homework assignment by the deadline will receive a certificate of completion. Uh email
[1:06:10] will be sent with the certificate approximately 2 months after the training is over. With that we want to thank everyone for
[1:06:21] joining today's session and uh want to thank our coordinator Natasha Johnson Griffin our editors Susan Monty and
[1:06:31] Jonathan O'Brien our set coordinators Brock Ble Sarah Kersel and Svin Hudson Odoy this is our set website link here
[1:06:42] and here is our social media presence if you want to check it out. So with that, thank you so much for attending today's
[1:06:50] session and we will go to the question and answer uh session. Now thank you all uh for attending this
[1:07:06] session and uh we have received several questions. So we will work through the questions here. Um we'll start with question one.
[1:07:22] Um is the key issue sewage contamination or wastewater treatment for the US waterborn illness impacts? Um it is one
[1:07:33] of several factors um as I understand but not just the key um issue for waterborn diseases in in the US there
[1:07:42] urban industrial agriculture runoff they all contribute to uh growth of pathogens in water bodies. So it may depend on
[1:07:51] which region you are considering or which water body you are looking at and then the these factors may contribute uh
[1:07:59] in different uh capacity for that particular water body. Question two is can unusually low dissolved oxygen be quantified with
[1:08:09] remote remote sensing. So um dissolved oxygen does not change optical properties of waters. Um so directly if you look at satellite
[1:08:20] image you will not be able to say whether there is decrease or increase in dissolved oxygen. Uh however uh it can
[1:08:27] be inferred from other parameters such as if you have more uh chlorophyll concentration then it would um cause
[1:08:36] hypoxy or decrease in dissolved oxygen. Or there are uh really biogeeochemical models which you can use um to based on
[1:08:47] processes uh biogeeochemical processes uh to to derive uh dissolved oxygen concentration in in water body and we'll
[1:08:57] provide you um some references for that. Uh this has been done uh um for for regional water bodies for especially for
[1:09:07] estuaries. It's been done. Question three, is there a scale to rank a region's wastewater mitigation, remediation, treatment,
[1:09:18] success? Um, I do not have expertise in this topic. Uh but just by looking at some of the
[1:09:27] um literature what we see is that if you monitor water quality or the plumes if you uh monitor around the wastewater
[1:09:36] treatment plant um then it can give you some idea of um how to mitigate how how wastewater treatment is changing water
[1:09:47] pollution nearby and uh again there are uh some examples that we can provide uh are published in published
[1:09:55] literature. So, uh it it has been used um it's um something that I'm not my expertise. So, I'll provide you some
[1:10:04] references references there. Uh question four, are there additional hyperspectral imaging instruments on the ISS? Uh so, yes, I
[1:10:14] emit is a hyperspectral imaging instrument on ISS. That's um uh currently I think the website about emit
[1:10:22] is down but I'll provide um link to learn more about emit instrument. There is also a European or
[1:10:31] Italian instruments called Prisma that also has hyperspectral uh information. Um and um I will try and um get all the
[1:10:40] links for you in the document when we post it. Question five, is there a specific definition or range for thermal
[1:10:51] pollution in regards to wastewater that is discharged? Um so there are a number of research studies uh you can find
[1:11:00] there looking at uh thermal imagery um and it can be used to monitor thermal pollution um mostly uh if it's cooling
[1:11:09] or heating water due to um either industrial cooling or um that that that will warm the temperature or cool the
[1:11:21] temperature if there's discharge in a water body. So I think range would be uh water body specific and um what kind of
[1:11:32] discharge you're talking about that will also decide what range to look at. Um one thing to do is if you look at world
[1:11:40] view and search for um sea surface temperature uh you will be able to see surface temperature anomaly in world
[1:11:49] view from multiple satellites and uh you can monitor that uh around the area of your interest or water body of your
[1:11:57] interest uh to see if um changing temperature is giving you any indication of uh wastewater discharge. Question six, uh, is it possible to
[1:12:13] animate average rainfall pattern over a specific period? So, uh, world view can help in animating um images. But there
[1:12:24] is also another um um tool it's called Giovani that allows you to look at average precipitation and can animate that uh
[1:12:36] and we will provide link for these tools. Question eight, is it possible to develop a realtime application utilizing
[1:12:48] these platforms to notify individuals about waterborn disease? If so, how? Please provide me with um some question
[1:12:57] directions. So that is precisely what we're going to do in our next session that that um we're going to use a case study for
[1:13:07] collera and we have um subject matter experts people who have developed collera prediction models based on uh
[1:13:15] earth observations. So they are going to show how it can be done. So it's combination of um environmental
[1:13:23] parameters, remote sensing imagery and also uh water sample analysis and disease incidence information all can be combined. Um so economic factors and
[1:13:36] wash conditions can also be examined to come up with better risk assessment for a particular disease. So um I next
[1:13:44] session should help uh in that uh subject. So one uh uh comment here about that uh you can use the data sets we showed in
[1:14:06] in in the in the tables in the presentation as reference. uh and you can use either combination of these data
[1:14:15] sets or uh look at any one depending on the size of the water body you are interested in. Um and you can pick uh
[1:14:23] both satellite data as well as model data based on uh the area of your interest or water body of your interest
[1:14:30] and any particular um um issue such as if if there is a wastewater plant uh that has discharge in the water body. Uh
[1:14:40] you can look for uh true color imagery. Start with that and see if there are plumes you can see. You can look at uh
[1:14:48] sea surface temperature or water temperature to see if there is any change in temperature or if you're in
[1:14:54] area where there is a lot of agricultural runoff and nitrogen and phosphorus are washing in a water body
[1:15:01] uh you might have a lot of algal bloom so you can focus on that. So depending on the issue and the what body of your
[1:15:10] interest you can pick the data set and parameters that you want to look at specifically for uh risk assessment for
[1:15:19] a specific disease. uh you will we will walk through the procedure in next session how to develop um a model or a
[1:15:28] empirical scheme to come up with um a waterborn disease um prediction. If you have any questions, you can uh still add to the question and
[1:15:48] answer answer document. If not, um we will see you on Thursday which is a day after tomorrow
[1:15:57] on 27th of March. So hope to see you in the second session of this webinar. Thank you and thanks to our RSET
[1:16:12] team, Natasha Johnson, Griffin, Jonathan O'Brien, Selvin Hudson, Orodoy, Brock Blind, and Susan Monty, Sarah Kshell, everybody uh helped in putting this
[1:16:24] series together. So, thank you all.
