# Overview of Blue Carbon Ecosystems & Mapping Mangrove Ecosystems, Part 1/2

`https://www.youtube.com/watch?v=C7HHhHpOxgg` · id 111 · 1:28:35 · module 43 — Earth Observations of Blue Carbon Ecosystems

[00:04] Welcome everyone to our ARSET training series, Earth Observations of Blue Carbon Ecosystems. Today is part one of our training
[00:12] series, Overview of Blue Carbon Ecosystems and Mapping Mangrove Ecosystems with Earth Observations. My name is Brock Blevins. I'm a training
[00:21] coordinator for ARSET, and I'll be your host for this training. Before we begin today, I'll say a few words about the ARSET
[00:28] program. program. ARSET is an acronym which stands for the Applied Remote Sensing Training Program. ARSET is part of NASA's Earth Action
[00:36] Capacity Building Program. ARSET provides accessible, relevant, and cost-free trainings on remote sensing satellites, sensors, methods, tools, and
[00:46] applications. applications. The goal of our training is to increase the use of Earth science remote sensing and model data in decision-making, and
[00:53] our trainings are tailored to audiences with a variety of of experience levels, from introductory to advanced. On the
[01:00] right side of the panel, you can see the six different thematic areas in which we conduct trainings.
[01:05] Trainings are offered online and in person, and are targeted for beginners and advanced practitioners alike. Trainings are freely available and
[01:13] conducted either live, instructor-led, or self-guided, such as our Fundamentals of Remote Sensing. Since 2009, the program has reached over
[01:22] 140,000 participants from over 185 countries. countries. All our trainings are cost-free, with materials offered in bilingual and
[01:31] multilingual languages, and are freely available to use and adapt for your curriculum. If you use the methods and
[01:38] data presented in ARSET trainings, please acknowledge the ARSET Applied Remote Sensing Training Program. If you want to learn more, please visit
[01:45] our website. And now we'll start by giving an overview of this training series, Earth Observations of Blue Carbon Ecosystems.
[01:55] By the end of this training series, participants will be able to identify blue carbon ecosystems and the
[02:01] role they play in the global carbon budget, budget, map the extent of blue carbon ecosystems using satellite observations,
[02:09] measure the carbon stock of mapped blue carbon ecosystems, and identify contexts in which Earth observation data of carbon stocks in
[02:18] blue carbon ecosystems can inform reporting, monitoring, accounting, and advocacy. In part one today, there'll be an introduction to the importance of these
[02:30] blue carbon ecosystems, key considerations for mapping mangrove ecosystems, ecosystems, and an overview of the existing mangrove data sets, and a demonstration in Google
[02:40] Earth Engine. In part two, we'll focus on salt marshes and seagrasses, with demonstrations using Google Earth Engine to map them.
[02:49] There'll be one homework assignment after this training. It'll be available after part two is complete, and due two
[02:55] weeks later on December 19th. A certificate of completion will be awarded to those who attend all live
[03:01] sessions and complete the homework assignment before the given due date. Now we'll begin part one of this
[03:08] training. training. Overview of Blue Carbon Ecosystems and Mapping Mangrove Ecosystems with Earth Observations. We are very fortunate today to be joined
[03:21] by Dr. Siti Maryam Yaakub, Senior Director for the International Blue Carbon Institute. Dr. Adia Bey, Assistant Research
[03:31] Scientist and Geospatial Analyst at NASA's Goddard Space Flight Center. We'll also be hearing from Dr. Lola Fatoyinbo, a research scientist also at
[03:41] NASA's Goddard Space Flight Center. If you have any questions during today's training, you can put them in the
[03:48] questions box within the Webex at any time. At the end of the training, we'll try to address as many questions as we
[03:54] can, and we'll post these questions and written answers to the training page within a week after the training.
[04:00] And now I'm going to hand this off to Siti to start us off. Thank you very much.
[04:12] Hello, and welcome to the segment of the course where we will be introducing blue carbon ecosystems. The topics we'll be
[04:19] covering here today will provide context for understanding how the learnings from this training can be used to support
[04:25] policy and management of blue carbon. So, let's begin with a definition of what blue carbon is. The technical
[04:33] definition of blue carbon is carbon that is captured, removed, and stored by ocean systems, both in the biotic
[04:40] components, or living things like flora and fauna, and the abiotic components, such as sediments. The sediments in these coastal
[04:49] ecosystems are frequently inundated, which results in an oxygen-poor environment that causes slow breakdown of organic materials, which then results
[04:58] in significant carbon storage. Three ecosystems in particular, mangroves, seagrasses, and salt marshes, have been identified to play an outsized
[05:10] role in carbon sequestration and storage. storage. These three habitats are actionable as climate mitigation solutions, and can
[05:18] therefore be integrated into current climate mitigation policy. The three ecosystems share these following traits. Number one, the
[05:27] presence of high carbon stocks. Number two, evidence of long-term carbon storage. And three, the capacity for people to manage and effectively measure
[05:37] GHG emissions and removals resulting from changes to these ecosystems. In contrast, while some ocean and coastal ecosystems and organisms are
[05:50] essential components of the ocean carbon cycle, cycle, their climate mitigation capacity is not directly responsive to management
[05:58] actions, and they do not store carbon long-term. long-term. So, let's talk a little bit more about these three coastal blue carbon
[06:06] ecosystems. ecosystems. As mentioned in the first slide, there are two main components where carbon is stored. stored. Carbon that is stored in the plant
[06:16] biomass, and carbon that is stored in the sediments that these plants grow in. In the context of remote sensing, it is
[06:24] useful to think of these components as what's above ground, or what's emergent and sticks out of the ground, and what's
[06:30] below ground, things like roots of the plant and sediments, which are hidden and therefore harder to detect from
[06:37] space. space. In mangroves, the parts that are above ground make up roughly over a third of total ecosystem carbon stocks.
[06:46] Whereas the percentage of carbon in the above-ground biomass of seagrass and salt marsh ecosystems are much lower, at
[06:53] around 5% or less. This is because, unlike mangroves, seagrass and salt marsh plants are smaller in size, and they do not have
[07:01] woody components that contain a lot of carbon. In contrast, the below-ground carbon stock is higher in all three ecosystems,
[07:11] comprising around 60% of total carbon stock in mangroves, and more than 95% of total carbon stocks for seagrass and
[07:18] salt marshes. So, when we think about detecting blue carbon from space, what we are detecting are the ecosystem components that are
[07:28] emergent. emergent. Mangroves are probably the most readily detectable because mangrove trees are emergent, and their leaves have a unique
[07:37] spectral signature that makes them amenable to Earth observation approaches. approaches. Salt marshes are tidally inundated, and they frequently occur in the upper
[07:48] intertidal zones. This means that they are rarely fully submerged, and the above-ground plant biomass can also be
[07:55] detected via remote sensing approaches. Seagrasses, on the other hand, are marine plants that are usually underwater, but they can still be
[08:05] detected from space. However, factors such as the size of the seagrass species, water quality conditions such as turbidity, or the presence of algal
[08:14] blooms can impede their detection via remote sensing approaches. And last, but not least, we have the sediments, and this is usually not
[08:24] detectable from space because it is covered by the plants that grow on top of them. Carbon that is found in the sediments of
[08:33] coastal blue carbon ecosystems can be split based on their origins. There is carbon that originates or forms within
[08:40] the ecosystems, otherwise known as autochthonous carbon, and there is carbon that is brought into the ecosystem, usually by way of
[08:49] hydrology and hydrodynamics, such as river runoff, currents, and waves, and this is known as allochthonous carbon. These forms of carbon are virtually
[08:59] indistinguishable in the field and to the naked eye. I'll now turn our attention to each of the three actionable blue carbon
[09:08] ecosystems. ecosystems. First up, we have mangrove forests. These trees are typically found along sheltered tidal coastlines, around river
[09:17] mouths and deltas, where there is an accumulation of fine, soft, silty to sandy sediments. They are regularly
[09:24] inundated by tidal exchange, and can tolerate a wide range of salinities. Of the three actionable blue carbon
[09:31] ecosystems, mangroves sequester and store the largest amount of carbon due to the combination of their large biomass and the typically rich organic
[09:41] sediments in which they grow. They can sequester between 6 and 8 tons of carbon dioxide per hectare annually.
[09:50] Seagrasses are marine flowering plants that typically grow in sedimentary environments along shallow and sheltered coastal waters. They have a global
[09:59] distribution and can be found in both tropical and temperate regions spanning every continent except Antarctica. There are more than 60 species of
[10:08] seagrass globally with the highest diversity occurring in the Indo-Pacific. Seagrass species have a wide range of morphologies with leaf sizes ranging
[10:18] from as small as 1 cm to as large as 1.5 m in length. Most of the carbon stored in seagrass
[10:26] occur below ground in their deep root systems and the sediments that they grow in. in. The carbon sequestration rate in
[10:33] seagrass range from between 1.5 to 4 tons of carbon dioxide per hectare per year. year. And seagrasses are particularly
[10:41] effective at trapping sediments and are a good barometer for both water quality and ocean health. Salt marshes are coastal wetlands
[10:51] characterized by their saline conditions result from the tidal influx of seawater and the gradual accumulation of sediments.
[11:00] sediments. They are typically found in intertidal zones and river systems in temperate regions although there are some examples
[11:06] of subtropical salt marshes. As with seagrass, most of the carbon in salt marsh ecosystems are found below
[11:14] ground in the roots and sediments. Their sequestration rate can range between 2 to 6 tons of carbon dioxide
[11:21] per hectare per year and they're particularly effective at long-term carbon burial and trapping carbon-rich sediments transported from upstream and
[11:30] through tidal exchange. Although the focus on blue carbon emphasizes the importance of these ecosystems for their climate mitigation
[11:41] value, mangroves, seagrass, and salt marshes have many other functions and co-benefits. co-benefits. For example, they support high
[11:49] biodiversity. These ecosystems are rich nurseries for juvenile fauna of endangered and commercially valuable species. species. They also have high climate adaptation
[12:00] value in their protection of the coastline from erosion, floods, and storm surges. They support diverse livelihoods and
[12:08] income streams for coastal populations especially for local communities and indigenous people. And lastly, they also support ocean
[12:17] health through nutrient cycling, bioremediation, bioremediation, and maintenance of water quality. Despite their important role, coastal blue carbon ecosystems are at risk of
[12:29] loss and degradation and this could result in carbon stored in these ecosystems being returned to the atmosphere.
[12:36] atmosphere. Common drivers of loss include land conversion to aquaculture and agricultural uses, unsustainable logging and harvesting, pollution and deterioration of water
[12:48] quality as well as coastal development. There is urgent action needed to conserve, protect, and restore blue carbon ecosystems and we need to develop
[13:00] effective policies that can support this. this. Some examples include international policy frameworks such as the UNFCCC and recognizing the value of blue carbon
[13:10] in countries' nationally determined contributions. contributions. The NDCs are a good mechanism because they allow countries to commit to
[13:19] restoring and conserving their blue carbon ecosystems based on best available information with the intention of increasing ambition with each reporting cycle.
[13:29] This means that countries can initially commit by just acknowledging the existence of blue carbon ecosystems in the first cycle and then raise their
[13:37] ambition to document, measure, and verify ecosystem extent and carbon stocks in the next cycle and so on.
[13:45] There are also related mechanisms such as a national GHG framework which is suited for countries where there is
[13:51] currently sufficient data on their blue carbon ecosystems to include them in the national inventory. Achieving climate and biodiversity goals
[14:01] requires innovative financing strategies for nature-based solutions that consider social, environmental, political, and economic contexts. Broadly, there are market and non-market
[14:14] mechanisms for financing blue carbon restoration, protection, and conservation. conservation. Market mechanisms include approaches in carbon markets where the carbon
[14:24] sequestered in blue carbon ecosystems can generate carbon credits that can be sold and exchanged. Non-market mechanisms are more diverse
[14:33] and include examples like payments for ecosystem services and debt for nature swaps. Data continues to be a barrier in
[14:42] scaling up blue carbon projects, policy, and finance and remote sensing offers an important tool in building our
[14:49] understanding of blue carbon ecosystems. Applications of remote sensing in policy include understanding the aerial extent and existence of blue carbon ecosystems,
[15:01] monitoring for national GHG inventories, in carbon projects, they can be used to identify project areas, setting baseline
[15:09] rates of ecosystem degradation, estimations of biomass and monitoring. And in management, they can be used for monitoring and surveillance of illegal
[15:19] destruction or logging across a large scale as well as remote detection of health and condition of these plants
[15:25] from space. And with that, thank you for your attention and I'll now turn it over to the next speaker.
[15:39] So, my name is Adia Bay and um I work for NASA Goddard Space Flight Center in Dr. Lola Fatoyinbo's mangrove science
[15:48] team. team. It's a pleasure to join you today and to tell you more about our work using Earth
[15:53] observations to measure mangrove blue carbon ecosystems. In this first part of the ARSET module on blue carbon ecosystems, we'll focus
[16:03] on mangroves. I'll explain the basic steps and key considerations for mapping the extent of mangrove ecosystems. Afterwards, Dr. Lola Fatoyinbo, the head
[16:13] of the mangrove science team, will explain how to use Earth observation data to measure mangrove height, structure, and biomass.
[16:23] So, there are several learning objectives that we'd like to to cover before the end of this presentation. We
[16:29] hope that you'll be familiar with existing global data sets that show mangrove extent, canopy height, and biomass.
[16:37] biomass. We hope that you'll understand how these data sets were produced as well as some of their limitations.
[16:44] Our goal is that you'll have a basic criteria for assessing the suitability of existing data sets for your purposes
[16:51] and that you'll know how to use Google Earth Engine to generate your own mangrove extent data. Uh we also hope that you'll be able to
[16:59] estimate mangrove canopy height, biomass, and carbon stocks in your area of interest and know what data is
[17:06] necessary for more precise mangrove ecosystem carbon stock estimate. So, before we dive into the module, um I
[17:17] should mention that there are tons of resources available that can help you uh learn more. As this is an
[17:24] intermediate-level module, we'll focus on remote sensing data and basic processing and analysis steps that are useful for assessing mangrove ecosystems
[17:35] for one point in time. If general introductory information about remote sensing would be useful or if you need more guidance on how to get
[17:44] started with Google Earth Engine, please see these three prerequisites. Um conversely, if you're a more advanced user and you'd like more advanced
[17:53] guidance on using mangrove mangrove data to map loss, gain, and other ecosystem changes over time, you may want to see these additional
[18:05] resources that dive into depth on mangrove change mapping and using Google Earth Engine um for other applications.
[18:18] Many of the resources that I'll show you in this first part have been developed by the mangrove science team um
[18:26] including several resources that are available on ARSET's website that have been developed by Abigail Barron-Blitch, Celio Resende de Souza, Marc Simard, and
[18:35] Lola Fatoyinbo. So, today uh I'll explain why mangrove specific data is needed. We'll review key things to consider when mapping
[18:48] mangrove ecosystems. I'll provide an overview of existing mangrove data sets that can help you quickly generate metrics of mangrove extent and change.
[18:58] And we'll map mangrove extent at at a sample site in Senegal's Saloum Delta. So, mangrove ecosystems are extremely
[19:11] valuable valuable locally and globally. Although mangrove forests are often compared to terrestrial forests, they differ in several significant ways including
[19:22] ecosystem services that they provide, the threats that they face, their and their biophysical conditions. Mangrove forest metrics, models, and
[19:31] remote sensing techniques are not interchangeable with those of terrestrial forests. So, if you're interested in assessing mangrove ecosystems, it's really
[19:40] important to use mangrove specific data. Mangrove cycle nutrients and improve water quality by filtering nitrates, phosphates, heavy metals from water.
[19:51] They serve as important spawning grounds for nurseries. Over 4.1 million people depend upon mangrove forests for their food and
[19:59] livelihoods, and as much as 80% of global fishing catch can depend directly or indirectly on mangrove habitats.
[20:07] Mangroves also serve a critical role in combating climate change and also for supporting adaptation. Mangroves sequester vast amounts of carbon in soil
[20:17] and vegetation above and below ground. It's estimated that over 6 billion metric tons of carbon are stored in the
[20:25] first meter of soil in mangroves worldwide, and mangroves can sequester four times more carbon than most rainforests per hectare.
[20:35] Mangroves also provide a natural buffer against coastal coastal erosion, storms, floods, and extreme weather events caused by that may be caused by climate
[20:44] change. Despite their global importance, 35% of the world's mangrove forests may have been lost between 1980 and 2000. On
[20:57] average, mangroves are being lost at a rate of 2% per year. Although several global studies have found that the rate of mangrove loss has
[21:05] been declining since 2010. The recently released IUCN Red List of mangrove ecosystems has found that half of the world's mangrove areas are
[21:16] considered threatened. Most drivers of mangrove loss are directly anthropogenic, such as the expansion of aquaculture, commercial agriculture, and urbanization. However,
[21:28] mangrove loss due to sea level rise and increasing storm intensity is becoming more prevalent. So, recognizing the importance of
[21:39] mangrove ecosystems for sustaining life on land, and also recognizing that these ecosystems are under are under threat.
[21:47] Um several international agreements have been established that support the conservation and restoration of mangrove ecosystems. These include the United
[21:57] Nations Framework Convention on Climate Change, the Convention on Biological Diversity, the Sustainable Development Goals, and the Ramsar Convention on
[22:06] Wetlands. Wetlands. Nevertheless, only 14% of the world's mangroves benefit from the highest level of protection, and mangrove loss
[22:14] continues inside and outside of protected areas. Mapping and monitoring mangrove ecosystems ecosystems is really essential to understanding
[22:29] where and how these valuable ecosystems are changing. Earth observation data can be used to map current and historic
[22:37] mangrove extent, the condition of mangroves, for example, whether or not they're intact or degraded, the height and structure of mangroves,
[22:47] above-ground biomass and vegetation, and some biophysical conditions and drivers of mangrove change. When mapping mangroves and other
[22:55] ecosystems, it's important to consider exactly what you're mapping and why. Maybe you're interested in mapping the extent or current carbon stocks or
[23:05] habitat distribution, or maybe you want to use Earth observation to identify hotspots of mangrove loss to inform
[23:11] conservation and restoration efforts. Remote sensing can inform a wide variety of mapping objectives. Identifying the objective that you're
[23:24] most interested in will have an impact on the type of methods that you use. For example, guidance from the
[23:31] Intergovernmental Panel on Climate Change should be followed if you're interested in mapping mangrove extent and change for national level reporting.
[23:38] The Center for International Forestry Research provides protocols for gathering ground-based data through forest inventories that can be used to
[23:46] estimate mangrove carbon stocks. If you're mapping mangroves to develop and sell blue carbon credits, you'll want to select and follow an approved
[23:55] methodology that covers the specific activities you plan to implement. These methods may include recommendations for specific types of remote sensing
[24:04] analysis, as well as ground-based data that should be collected. In short, there are many ways to map
[24:11] mangrove ecosystems, but before you start, you want to be confident that the methods that you're using are likely to
[24:17] produce the quality of results that you need. So, some key considerations when you're starting to map mangrove ecosystems.
[24:31] There's a wide variety of data that you can be using, and you'll want to keep in mind the spatial resolution, spectral
[24:39] resolution, and temporal resolution of the data. Uh Data from passive optical sensors like Landsat and Sentinel-2 can be useful for mapping mangroves, as
[24:53] well as active radar and lidar sensors, um such as data from NASA's radar Shuttle Radar Topography Mission and the
[25:02] Global Ecosystem Dynamics Investigation. For national level mapping covering multiple decades, 30-m Landsat data may be a great fit for your project. If
[25:14] you're mapping mangroves at a subnational level or for more recent time period, a finer resolution data set
[25:20] like Sentinel-2 might be preferable. If your study area is persistently cloudy, using radar or lidar data that
[25:28] penetrates clouds can help make map mangroves in these challenging conditions. Another thing to consider when mapping mangrove ecosystems is the tier of level
[25:41] the tier of analysis that's needed. The IPCC IPCC provides a framework for structuring different methods that are used. The most basic method the most
[25:54] basic tier is tier one. This draws upon coarse resolution data and globally available estimates. On the far other end of the spectrum,
[26:04] you have tier three methods, which use higher resolution data in conjunction with national or subnational level data
[26:12] on biomass and carbon stocks. This usually is drawn from ground-based forest inventories, and it's geared toward capturing the variability within
[26:21] ecosystems over space and over time. And this is really geared toward estimating estimating mangroves mangroves at a quality and confidence that's known
[26:34] with the highest level of precision possible. This This This module on mapping mangrove extent is really geared toward tier one level
[26:46] mapping. mapping. And if you review the IPCC guidelines that are provided in the wetland supplement, you can see some global
[26:54] default values for mangrove carbon stocks per hectare. However, um colleagues in this part of the module, as well as in the second
[27:04] part, will dive into more detail about how you can improve upon these global default values in mangroves, tidal
[27:12] marshes, and in seagrass environments. Nevertheless, if you're lacking ground-based data and you want to get started, using IPCC's tier one default
[27:22] values for mangroves are a good place to start. But of course, you'll need to combine this data
[27:28] with information on mangrove extent. The mangrove science lab has produced a large number of apps that analyze
[27:40] Earth observation data available through Google Earth Engine to help people quickly generate metrics on mangrove extent, height, biomass, and carbon
[27:49] stocks. stocks. Google Earth Engine's cloud resources facilitate remote sensing analysis of vast amounts of information, and these
[27:57] apps can also be useful for disseminating results and sharing spatial data in a user-friendly format. This can be really advantageous if
[28:07] you're trying to make data accessible to non-technical audiences. However, there are some limitations to relying upon existing data. One key limitation is
[28:16] that the data and methods the limitations of these may not always be clear to end users. So, this is why some
[28:23] people may choose to generate their own maps of mangrove extent. To help users better navigate the data
[28:31] that is available, the mangrove science team developed a data set exploration app. This app shows national level
[28:38] estimates of mangrove extent from five different data sets, as well as estimates on above-ground biomass and carbon stocks, which will be discussed a
[28:46] bit later. If we zoom in to a specific country like Senegal, and if you click on the country
[28:56] using the app shown in the slide before, you can see a wide range of values. Um for Senegal, these estimates of mangrove
[29:07] extent range from 16,500 hectares to over 140 hectares. It's a huge range, and part of this difference
[29:15] may be attributable to differences in methods, differences in types of Earth observation data used and calibration data, as well as differences in the time
[29:24] period assessed. To help people understand where these differences may be impacting the spatial extent of mangroves identified, the
[29:37] mangrove science team developed a mangrove data set selector app. With this app, users can select certain parameters like the date range, the
[29:46] temporal resolution, the priority metric, and the spatial resolution preferred to get a recommendation for a certain data set
[29:55] that may be a good fit. For many users, Global Mangrove Watch data set and app will be very useful.
[30:05] Version 3 draws upon 25-m SAR data to map mangrove extent and change for over two decades with an accuracy of above
[30:13] 86%. 86%. In 2024, uh version 4 will be released, which draws upon Sentinel 2 data, so finer
[30:22] resolution, finer spatial resolution data, and it improves the accuracy of its mangrove extent mapping by nearly 10%.
[30:35] The app is really easy to use, and it's very easy to generate metrics for an area of interest.
[30:42] You can search for specific locations, like countries or protected areas, or you can upload your own boundaries for
[30:49] an area you're interested in as a shapefile. Global Mangrove Watch app or platform online, it'll generate extent over time.
[31:00] It'll It'll show you change over the past 20 years, and it will also show you some summary
[31:07] of alerts of mangrove loss. Global Mangrove Watch may be sufficient depending upon what your objective is, but for those of you who'd like to
[31:18] generate your own data, we provide um a script. We prepared a script that runs in Google Earth Engine to guide you
[31:26] through this process. So, many of the data sets that the team uses to map mangroves are already available within
[31:33] Google Earth Engine, including Landsat 8 um and really the entire Landsat archive, Sentinel 2, Sentinel 1 radar
[31:41] data, Pulsar, SRTM, and to a certain extent Jedi data. Um And all of this information can be
[31:51] accessed through the cloud, and you can essentially use your algorithms to run your analyses on the pieces or the parts
[32:00] of this data that are within your area of interest. So, understanding the basic components of Google Earth Engine will make it
[32:10] easier for you to use and adapt the script that we've prepared. Um but to provide a very brief sort of crash
[32:19] course, basically, there are four panels. Um Google Earth Engine is comprised of four panels. When you click
[32:26] on the link provided in the slide um in the next slide, it'll open a script in the middle.
[32:33] In this middle pane, you can edit the code, you can save a script, you can share a script, um
[32:41] and you can run it. Uh Uh on the left-hand side, you can see all of the scripts that you've written and
[32:48] saved. You can also view the assets that you have uploaded, and Earth Engine assets are basically data sets that you
[32:56] have uploaded yourself, such as shapefiles, CSV files, and GeoTIFFs. You can also access documentation that can help you
[33:09] learn how to use Google Earth Engine. When you run a script, like the script that's shown um on the next slide,
[33:17] layers that you're mapping will appear below, and you can also turn these layers on and off, change the
[33:25] transparency in the layer manager. You can also generate new polygons and um new points. This is something that is
[33:34] useful if you're trying to generate some on-the-fly training data for running a classification algorithm or for validating it. Um
[33:46] And you can also print results. So, some of your results will appear on the right-hand panel. So, in that panel, you
[33:53] have a console output, and you have tasks. So, if your script generates exports, they will appear there.
[34:02] there. Lastly, on the right-hand panel, there's an inspector. So, if you take your mouse and click anywhere within the map, and you have
[34:09] some data loaded, it'll tell you the value of that layer at the point that you've selected. So, for more information on Google Earth
[34:19] Engine, to get started, or to learn how to start writing your own scripts, feel free to visit some of these key
[34:24] resources listed on the left. So, we're going to stay in Senegal, and we're going to visit the Saloum Delta.
[34:34] Um and if you click on the link in the middle, top in the middle, and you click run,
[34:41] uh you'll see five different layers will be added to your map down below, and 10 different outputs will be printed on the
[34:50] right right in the console, and two tasks will be added um to your task manager on the right.
[34:58] Um so, we're I'm going to walk you through these outputs, just showing you the highlights, and then we can dive
[35:05] into detail about what this script is doing and how. So, basically, in the maps in the maps
[35:13] panel, you'll see the results of a mangrove extent well, supervised classification and the mangrove extent pulled from that. Um
[35:23] this classification is drawing upon Landsat imagery for the year 2020, as well as the year before and after, so
[35:31] plus or minus 1 year. You'll see the relative importance of each of the input variables. So, in
[35:40] addition to using bands from Landsat to train the algorithm, we've also generated some additional features, such as
[35:48] as um um different vegetation indices, which we'll go through. We have tested We've generated some training data and testing data quickly
[35:57] within Google Earth Engine to validate the classification algorithm. Um but to do a more robust accuracy assessment, we
[36:06] have also gener- generated stratified sampling points that we can assess either on the ground or perhaps with
[36:14] very high-resolution satellite imagery in Google Earth Pro. And lastly, we are also loading to the map um
[36:22] the results of Global Mangrove Watch version 3 for our area of interest, so that we can compare our supervised
[36:29] classification with the results of Global Mangrove Watch. So, So, I'm going to revisit the script in a
[36:39] minute, but I just want to walk you through some of the basic parts of doing a supervised classification.
[36:46] Um basically, you need some input data. And so, this is one of the aspects of the script that you would have to change
[36:53] in order to make this work in your area of interest. We generate polygons, and from those polygons, we extract a random selection
[37:03] of points. We also are using in the supervised classification uh a composite. This is a multi-temporal composite drawing upon 3
[37:14] years of Landsat imagery. And we use our training data um at each point where we have samples, we
[37:22] extract the value from our composite and from our different features, and we use that information to train uh random
[37:31] forest classifier. So, this is uh essentially one on the far right at part E. Um we run that classifier on our input
[37:43] image, which is the Landsat image from 2020, 2020, uh uh the composite, and we use a subset of the data. Um so,
[37:55] a set of testing data points to validate the classifier. Just to make sure that the results that
[38:01] we're getting are um just to make sure that the classification algorithm is functioning properly. properly. And as a result of running that
[38:11] classification algorithm on the imagery with our training data, we'll have a classified image. This script is very basic. It just has
[38:20] mangrove areas and non-mangrove areas. You might want to make this more complex by adding additional land cover types,
[38:27] but to help you get started, we've just built a basic one for now. Um Um and and to assess the accuracy of that
[38:36] classified image in a more robust way, we've generated stratified random samples, so meaning we have a random
[38:43] selection of samples in mangrove areas, and a random selection in non-mangrove areas. And you can use that for your
[38:50] next step, um either on the ground or assessing those sites with high-resolution imagery. So, how does that translate in the
[39:00] script? script? We have a couple of steps. First, we define our area of interest, which is Saloum Delta in Senegal, and we set up
[39:08] the map. Um we're not going to I can show you the how the script looks in more detail, but
[39:15] just to walk you through the basic parts. We set up the map. We choose our start and end dates for the compositing
[39:21] period. We select the imagery. We can load that directly through Earth Engine by loading it from the catalog.
[39:28] We add some additional features, um such as vegetation indices and elevation data. data. We We create polygons of training and testing
[39:37] data. data. We use this to run a random forest classification algorithm in part e. And we load Global Mangrove Watch data
[39:46] to compare the results, generate the sampling to assess the accuracy. So, just going to show you what that looks
[39:54] like in the script. And also tell you a bit more about different parts of this script that you
[40:02] would need to change if you wanted to adapt this to run in your area. So, there are different ways of defining
[40:13] your area of interest. Um Um you can load a polygon, you can draw a polygon in Earth Engine. You can also
[40:21] find different publicly available data sets through the catalog. catalog. Here we've loaded um protected areas from the World Database of Protected
[40:31] Areas, and from that we filtered it down to Saloum Delta. We're defining our center, the center of
[40:40] our map, the boundaries of the project area. In part B, we have the years of the reference period that we're using to
[40:51] create our multi-temporal composite. This helps us generate a cloud-free input image for our supervised classification algorithm. In part C, we prepare our input imagery
[41:03] by by running a cloud masking function. And then we also prepare some additional features, such as normalized difference
[41:13] vegetation index, normalized difference mangrove index, a simple ratio, green chlorophyll vegetation index. These are essentially calculations that
[41:25] use the bands in Landsat to run simple calculations that make it easier for vegetation health to pop out and for
[41:33] mangrove features to appear more distinctive than other features in the landscape. Because the cloud masking isn't always
[41:44] 100% effective, we are also uh preparing a we do a median composite to pull the median value and to have a more robust
[41:53] cloud-free image. We add elevation data. Mangroves tend to appear at lower elevations. So, this will be a useful feature that can help
[42:05] with running the classification algorithm. algorithm. And And we define our our classes, mangrove and non-mangrove classes. And to generate some simple training
[42:18] data, we've drawn some polygons um um down here in the mapping panel. panel. This is a quick and easy way to get
[42:27] started, but one challenge with generating training and testing data this way is that we don't always know
[42:33] what the time period is of this high-res base map data. So, it's good to to generate data perhaps in Google Earth
[42:43] Pro or generate data in the field, but this is just a quick and easy way to get
[42:47] started. We have a part of the script that tells us how well each of those features are
[42:54] performing in terms of generating the classification algorithm, to what extent they're important. We can see those results here in the console.
[43:04] We can also review the size of our training and testing data, the extent to which they fall within
[43:11] non-mangrove's area, non-mangrove areas, which is zero, and mangrove areas, which is one. And at the end of all of this, we also
[43:21] have an estimation of mangrove extent. The first value is from our supervised classification, that's 500 around 503 km², and the second value
[43:34] is the estimate from Global Mangrove Watch, which is around 621 km². And in the layers panel, you can
[43:44] turn these on and off to view the results. Takes a minute to load. In pink, you'll see mangrove extent.
[43:57] And in yellow, you'll see Global Mangrove Watch data. I'll give this a second to load. And then we will transition to the next
[44:10] part of our module. In the next part, uh Dr. Lola Fatoyinbo will tell you more about how to take this mangrove extent data
[44:22] and go deeper into detail um to help you estimate mangrove height, canopy height, um understand mangrove structure, and
[44:32] use that information to estimate mangrove carbon stocks. So, basically in pink, you have the results of our classification algorithm.
[44:42] And in yellow, you have the results of Global Mangrove Watch. There are a lot of similarities, but if you zoom in, you
[44:49] can see where those two results differ. So, in this next section, we will be focusing on how we use Earth observing
[45:00] data to map mangrove height, structure, and biomass with the ultimate goal of being able to estimate carbon stocks.
[45:10] So, as we mentioned before, there are different tiers by which you would report your mangrove ecosystem carbon
[45:18] stocks. stocks. And there are several factors that influence how you might calculate your tier two estimates of mangrove carbon
[45:28] stocks. And these are the same factors that influence the above ground biomass and the soil carbon in mangroves.
[45:36] So, when we are interested in understanding and estimating above ground biomass in particular in mangroves, we have a range of factors
[45:48] and indicators and measurements that we can use to estimate the above ground biomass. biomass. So, some of these factors are the height
[45:56] of the vegetation or the structure. Um essentially this we mean, you know, how tall is the canopy of a tree? How
[46:03] tall are the trees? What type of tree is it? Um the condition of the forest, is it densely vegetated or is it sparse?
[46:13] We're also looking at tree species diversity and composition. So, knowing what the main species are that you will find on the ground is very
[46:22] important because that affects your allometric models that you will use to go from your field measurement or your
[46:31] remote sensing-based measurement to above ground biomass. And um some other important measurements that you might need are measurements of
[46:42] tree density, of basal area, knowing the solidity, and knowing the age of the forest patch that you're looking at. But
[46:51] of course, we don't always have access to all of this data. This would be very detailed measurements that you might get
[46:56] from from measurements in the field um when you're doing doing in situ measurements of forest plots. Um when we're comparing or trying to
[47:05] estimate above ground biomass and carbon stocks using remote sensing data or using using um Earth observation data, we don't have
[47:14] access to these really detailed measurements that we could use to map and model and estimate above ground
[47:22] biomass and carbon stock mangroves. And so here on the right in these models, it really gives a a
[47:30] a nice overview of what uh the structure of a mangrove forest is and why it might be challenging or different in a
[47:38] mangrove to estimate above ground biomass from a more typical forested ecosystem. ecosystem. So, as you see here, mangroves are
[47:46] really characterized by these complex above ground root systems. And those systems also allow you to know which
[47:53] species you are primarily working with. Um Um but they also grow in tidally inundated areas. So, you might have the presence
[48:02] of water that can change essentially the height of the trees depending on whether it is uh high tide or low tide.
[48:11] Um but when we're looking at estimating above ground biomass and canopy structure structure using spaceborne or remotely sensed
[48:19] data, um we essentially ignore a lot of these detailed measurements and really look primarily primarily at the canopy
[48:27] height. height. Because if you know the height of a tree, that is a very good indicator of
[48:34] how much biomass is actually stored in that tree. Uh generally speaking, when we're working in the field, we would work with
[48:42] uh measurement called the DBH or diameter at breast height, which is essentially the diameter of the tree,
[48:47] which is an even better indicator of what the biomass might be of the tree. Um however, we cannot directly measure the diameter
[48:58] of individual trees using spaceborne data. We can measure the height of the trees using several different spaceborne
[49:05] data sets, and that's what I'll be talking about in the next few slides. So, as I mentioned before, there are a
[49:15] range of different mangrove data sets. Um Um some of them have some of these data sets use very similar
[49:23] methods. Um and then some of the data sets use different methods that are similar, but with different results. And
[49:30] so, one very important thing to take into account when looking at this whole range of data sets that might
[49:37] exist is really which data set works best in your area of interest. So, linking again to the mangrove data
[49:44] comparison tool that was mentioned earlier, you can see here that we also have in there different different data sets of ground biomass,
[49:52] of soil carbon that can be used to estimate a range of above ground biomass measurements or get a range of soil
[50:00] carbon measurements. And they're also very useful to compare to with uh in situ or field-based measurements of both
[50:08] above ground biomass or soil carbon. So, when you're clicking on this app, you can also look not only on the extent
[50:16] data sets, but also at above ground biomass and soil carbon. And in the next few slides, I will also describe a above
[50:23] ground biomass data set that you can use to look at above ground carbon and above ground biomass measurements.
[50:32] So, here I'd like to provide an overview of some of the existing mangrove data sets sets uh that are available for measurements
[50:40] of above ground biomass. One thing to note is that here we are really only showing two different data
[50:46] sets, one that is produced by our lab, and another one that was published uh about 10 years ago. Since the
[50:53] publication of both of these data sets and both of these papers, there have been several other regional and global estimates of above
[51:03] ground biomass of above ground carbon and of soil carbon that have been published with various ranges of accuracy, of resolution, and
[51:13] covering covering different time frames. So, it is very important when looking at these data sets to make sure that the methodology
[51:21] used is really appropriate for the objective of the use of that data set. One other thing to note is that
[51:29] oftentimes these global data sets are calibrated on a very limited amount of field measurements of above ground
[51:38] biomass, soil carbon, or total carbon. So, another really important consideration when looking at these data is to make sure that what you're seeing
[51:49] on the ground or what measurement or site that you're selecting is actually well represented in this data set. So, for example, when looking
[51:59] at the Hutchison et al. map, you'll see that there isn't any data available from the Atlantic coast of Africa. Similarly,
[52:08] when you look at the Simard et al. map, you see that there is a wider distribution of sites from which we were
[52:15] able to get in situ data to calibrate the map. However, it is still limited, especially looking at Asia, for example.
[52:24] Every single map has its qualities as well as some of the limitations, but generally speaking, provide a good
[52:32] overview of what the trends are and what the the total above ground biomass and carbon stocks are for the time frame selected.
[52:42] Looking at the mangrove data comparison tool, we can also see the wide range that might be present when looking at these
[52:50] different maps. Again, focusing on Senegal here, we'll see, for example, that when we look at this Hutchinson map
[52:56] from 2014, the mean above ground biomass density for Senegal was found to be 142 tons per hectare. While using the Simard
[53:06] map, the mean above ground biomass density was only 28 megagrams per hectare. So, this is a very large range,
[53:14] and this might be influenced by the type of data that was used as an input, used So, essentially looking at
[53:23] what data sets were used to create this model. It could be due to the resolution, it could be due to the
[53:29] timing timing of the measurement, and it also could be due to the type of measurement that was used.
[53:37] In our case, we were working with global spaceborne SAR data, as well as global spaceborne lidar data that allowed us to estimate
[53:51] the canopy height, biomass, and carbon stock across a wide range of heights. But there were some limitations in areas
[54:00] of very short mangroves, which may lead to a skewing of the actual measurement to a lower to a lower biomass. Similarly, in other
[54:14] data sets, you might find that they underestimate how many short trees there are, leading to skewed or biased estimate of the total
[54:24] biomass or the or the biomass density towards the higher higher higher numbers. So, So, following up and going now into the soil
[54:38] organic carbon data sets, so now providing an overview of existing mangrove data sets specifically that are focused on the measurement of soil
[54:47] organic carbon. Similarly, there have been now several global and regional data sets of soil organic carbon that are available for
[54:57] download and for analysis. Specifically, the data set produced by Sanderman et al. in 2018, which provides the 30-m
[55:05] resolution estimates of the first meter of soil carbon for all mangrove areas worldwide. It is based on the Global
[55:13] Mangrove Watch extent and uses a wide distribution of field measurements of soil soil carbon to model what the
[55:21] global estimates of soil carbon carbon are. are. Um other data sets that were produced or that can be used or
[55:28] are mentioned here as well. They were published by Atwood et al., Rovai, or Jardine and Simard et al.
[55:36] Um Um but as mentioned before, some of these older data sets may have been based on a
[55:42] more limited amount of in situ measurements to train their models, and therefore, keeping an eye out for more updated
[55:52] data, data, more updated versions of the data is always really important because there might be a better estimate of
[56:02] soil carbon or above ground biomass available. available. One other thing to note is that it's very important when looking at soil
[56:10] carbon to note the depth of the measurement. So, in the Sanderman et al. paper, for example, all of the
[56:18] measurements are published or for the first meter of depth of soil. Now, in some areas, you might have
[56:25] peat soils or mangroves organic soil that are really, really deep and that go beyond the first meter. Um so, to this
[56:34] date, there is not a data set that allows us to know what the depth of the soil is, which is also
[56:41] a very important measurement. We also don't have many data sets that allow us to go past 1 m
[56:49] of soil depth of to know what the soil carbon is. Finally, I'd like to provide you with a
[57:00] quick overview of the first global map of mangrove canopy height and mangrove biomass measured at 30-m resolution. This is a data set that
[57:13] was produced by our team back in 2019 and is heavily based on uh data from the Shuttle Radar Topography Mission, which
[57:22] is a mission that allowed us to have the first global digital elevation model, and also allowed us to then get
[57:30] estimates of mangrove canopy height measurements on a global scale. When you look at the map and at figure
[57:38] one here in the top inset number A, you'll see there are several numbers on those maps highlighting the areas where there were
[57:50] field measurements taken to estimate above ground biomass, canopy height, and also soil carbon in these mangroves. These are all the sites that were used
[57:58] to train the models to estimate above ground biomass. These are also the sites that were used to validate the estimates
[58:07] of canopy height in these areas. And one of the reasons we're so interested in better understanding what the
[58:13] distribution of canopy height is and what the range of canopy heights is in mangroves is because this really allows
[58:20] us to get a more constrained measurement of the environmental conditions that mangroves grow in, but also of the
[58:31] total carbon estimates in terms of both above ground biomass and below ground soil carbon. So, one of the big discoveries that came
[58:39] out of this work was to actually be able to directly measure what the maximum height is of a mangrove tree. And what
[58:50] we found when looking at this map is that there are patches on the planet, especially looking here
[58:56] at Gabon, which I'm showing in the inset on the right, where there are mangrove trees that are able to grow up to 65 m
[59:04] in height. Um so, there are patches of mangroves where almost every tree is over 60 m, and individual trees that
[59:12] grow up to 65 m in height. These are patches that would not have been found, most likely, if we did not
[59:19] have access to this amazing data set that gives us these measurements of uh topography and can be used to estimate
[59:27] canopy height. Finally, um the SRTM data set is now quite old. Um SRTM was flown back in
[59:39] 2001. 2001. Um so that data set is now over 20 years old. old. Um and it's really important to be able
[59:48] to update these data as possible. So, we've recently worked on a new updated version of the global canopy
[59:58] height model. This data is now available for download and for use including in Google Earth Engine and that is based on
[1:00:06] a a uh data dataset called TanDEM-X, uh which stands for TerraSAR-X add-on for add-on for digital elevation measurements.
[1:00:15] The beauty of this data set is that it's even more recent and it also is at much
[1:00:20] higher resolution than the SRTM data set that is now over 20 years old. So, the TanDEM-X model is actually
[1:00:28] available at 12 m spatial resolution um and the vertical accuracy is much better than that of SRTM as well. And
[1:00:38] so, we can now look at almost uh canopy level or at least patch level variation in canopy height in mangroves. Um this
[1:00:47] also allows us to do a better job at delineating areas that are dense mangrove versus areas that are maybe not
[1:00:56] as dense mangrove uh because of the higher resolution and getting hopefully much improved estimates of aboveground biomass
[1:01:06] uh and carbon stocks in mangrove forests worldwide. Now, finally, um all this information on canopy height is of course very useful
[1:01:18] to to uh be able to generate your own map of mangrove height and biomass. Uh as I mentioned earlier, uh one of the
[1:01:27] really important factors in estimating the aboveground biomass and soil carbon is really the avail- availability of in
[1:01:34] situ data sets. So, here we have provided a script that can be used to generate a uh localized
[1:01:43] uh estimate of uh aboveground biomass. It will allow you to estimate aboveground biomass uh on existing mangrove canopy height
[1:01:53] data sets. Uh to do that, we use a generic uh allometric equation that goes from the height measurement directly to
[1:02:01] aboveground biomass. This is using a generic global aboveground biomass allometry uh that was developed using those 330
[1:02:13] plot data sets that I showed in the previous slides. Um and there are two different models that can be used to estimate aboveground
[1:02:21] biomass either they're looking at using a a metric that is called basal area weighted height or using a metric called maximum canopy
[1:02:30] height. But generally speaking, this is a script that allows you to go from canopy height to aboveground biomass and
[1:02:38] then from aboveground biomass to carbon essentially is a division by two. So, generally speaking, when we go
[1:02:47] from when we estimate aboveground biomass in a forest, uh the assumption is that about 50% of that biomass uh or
[1:02:55] of that value of biomass is the carbon. So, to move from aboveground biomass to carbon stocks, you would essentially
[1:03:03] multiply by 0.5 or in the case of mangroves, we use the value of 0.49 as was recommended by publications.
[1:03:12] Thank you. And next, we'll go to the summary part of the slides. Thank you very much, Lola.
[1:03:23] So, let's take a minute to review the key points from part one of our training. training. We hope that you became familiar with
[1:03:31] global data sets that show mangrove extent, extent, canopy height, and biomass as well as understand how these data sets were
[1:03:37] produced as well as some of their limitations. limitations. We introduced basic criteria for assessing the suitability of existing
[1:03:46] data sets for your purposes and how to use Google Earth Engine to generate your own mangrove extent data.
[1:03:52] We also explored how to estimate mangrove canopy height, biomass, and carbon stocks in your area of interest
[1:03:59] and know what data is necessary for more precise mangrove ecosystem carbon stock estimates. estimates. In part two, on December 5th, we'll see
[1:04:07] demonstrations of mapping salt marsh and seagrass with Earth observations. Specifically, demonstrations on how to map the extent of salt marsh and
[1:04:16] seagrass ecosystems using satellite observations, observations, calculate the carbon stocks of mapped salt marsh and seagrass ecosystems, and explore synthesis methods to
[1:04:27] estimate blue carbon across ecosystems. Quick reminder, this training series will have one homework assignment. You can access the homework from the
[1:04:37] training webpage starting December 5th and the answers should be submitted via Google Forms by December 19th. Certificates of completion will be
[1:04:45] issued to participants who attended both live trainings and submit the homework before that deadline. Certificates will be emailed about 2
[1:04:53] months after the training. This slide shows the contact information for myself and today's speakers as well as links for the ARSET website, YouTube
[1:05:01] channel, and Twitter or X, and our sister programs Develop and Serveir. Thank you very much. We'll now be moving over to the question
[1:05:12] and answer session. Hi, everyone. Um we are still in the process of answering your great questions, uh but I'll start
[1:05:32] with one that I've already answered. Um it's question number five. Mangrove species have varying capacity to store
[1:05:40] carbon. carbon. Uh therefore, a finer classification into mangrove species may be important to have a more accurate estimation of
[1:05:48] mangrove ecosystem biomass and carbon storage capacity. Can Google Earth Engine be used for mapping mangrove extent extent uh
[1:05:57] uh to provide a finer classification of different mangrove species? Uh the short answer is yes. Um but the longer answer is it really
[1:06:08] depends on the training data that you have and the type of satellite imagery that you use. Um so, Google Earth
[1:06:17] Engine, there's a difference between the software or the you know, the remote sensing software that you're using or
[1:06:22] tool tool and the input data that you're using. And so, really the limitation is about the data.
[1:06:29] Um Um going from Well, stratifying based on species is a very complex way to stratify mangrove areas into different uh strata that may
[1:06:41] have different carbon stocks. An easier way to begin to do that would be to stratify based on
[1:06:49] uh like vegetation health. You could use potentially vegetation indices like normalized difference vegetation index or there's a normalized difference
[1:06:58] mangrove index. Um which I think both of those are provided within the the script, the first part
[1:07:05] the first script. Uh a second way to stratify mangroves into uh different different groups which will have
[1:07:13] different aboveground biomass values and carbon stocks could be to stratify based on height. Uh and so, you could use some of the the
[1:07:23] mangrove hot height canopy height and structure um techniques that Lola Fatoyinbo just presented to to stratify mangroves in this way.
[1:07:33] This can be very useful because um mangrove height, you know, it depends on on a variety of things, but uh
[1:07:42] for example, you'll find that in areas with more freshwater, mangroves will grow taller and mangroves where where
[1:07:49] the salinity is lower will be shorter. So, for example, um like with Rhizophora mangroves, you'll see you're you're more likely to
[1:07:57] find these taller mangroves in areas that are less saline and they will have more carbon stock, more aboveground
[1:08:04] biomass values than for example, shorter mangroves like Avicennia which tend to be sparse. They will also have a higher
[1:08:12] um um soil adjusted vegetation index uh and lower carbon stocks. So, those are just a few approaches, but
[1:08:21] yeah, your ability to apply these is not limited by Google Earth Engine. It's more limited by the data that you have.
[1:08:28] And even though some of the types of data you might wish to use for the more complex methods like hyperspectral
[1:08:35] imagery, even though that may not necessarily be publicly available in Google Earth Engine, you can always download that sort of data um
[1:08:44] from other platforms and import it into your own workspace in Google Earth Engine as a as a GeoTIFF as an asset.
[1:08:55] Okay, let's see. How did you How do you define training data? How did I define training data for
[1:09:02] the module model? Do you acquire them from the field and what about areas that were difficult to reach?
[1:09:09] Uh so, for the training model it in the first part and potentially in the second part as second part of part one
[1:09:18] as well, uh we just generated polygons on the fly in Google Earth Engine. Um Um and this was in mangrove areas, which
[1:09:27] are relatively easy to identify with the the base imagery that's in Google Earth Engine. However, that is not recommended for
[1:09:39] like a more robust study because the image acquisition date of the base map imagery within Google Earth Engine is
[1:09:47] not it's there's no way to identify it. Well, I shouldn't say that there's no way. It's not readily identifiable.
[1:09:53] You'd have to go to Google Earth and then find that exact image and then you would know the image acquisition date.
[1:10:01] This is important because when you generate your training data, whether it's points or polygons, you want to be
[1:10:08] really sure that mangroves are there or that some other forest type is actually there. And because land cover can change
[1:10:17] at any point in time due to natural causes or anthropogenic disturbances, it's good to to be sure to match the
[1:10:26] date of your training data to you know, some sort of reality that you know to be true in the field or um
[1:10:35] from very high spatial resolution satellite data. So, gosh, sorry. That's sort of a roundabout answer, but we did not
[1:10:43] acquire our training data in the field. We use the very high resolution satellite imagery that is in the base
[1:10:49] map of Google Earth Engine, but a better way to do that would be to use the very
[1:10:54] high spatial resolution imagery that's within Google Earth Pro where you know the image acquisition date and can
[1:11:01] essentially train your algorithm to uh uh classify an image that with the date that matches your training data.
[1:11:10] Or if you have a lot of time and resources, you can also go to the field and collect the training data in situ,
[1:11:17] which is really ideal. Of course, the challenge is that as you mentioned in your question, some areas will be
[1:11:22] difficult to reach and it may be challenging to acquire sufficient number of samples in order to train an algorithm well.
[1:11:32] Can tools and data sets used for mangroves such as Global Mangrove Watch be adapted to evaluate ecosystem
[1:11:38] services like carbon sequestration and biodiversity in support of non-mangrove wetlands? Hm. That's a really good question. We
[1:11:48] may have to come back to this. Um Um not sure. Okay. I know that the the IPCC wetlands
[1:12:05] supplement that was linked in the first part of of part one, that includes coastal wetlands as well as inland
[1:12:14] wetlands. wetlands. So, that will have some good methodological guidance for um um assessing flooded forests, inland flooded forests.
[1:12:26] But my understanding is that Global Mangrove Watch is really focused on mangroves. mangroves. This is kind of sometimes the the
[1:12:35] techniques that are used to to map mangroves, people may put a filter on it and limit the scope of image the
[1:12:44] geographic scope of imagery that's assessed to be restricted to within a certain number of kilometers from the
[1:12:51] coast. And so that's really not ideal if you're if you want to assess inland forests forests like for example in the Congo Basin or
[1:12:59] in the Amazon Basin where there are large swaths of flooded forests that are nowhere near coasts. Yeah, I it's a good question. I makes me
[1:13:11] wonder if the Global Mangrove Watch team will will ever expand into that, but something that we'll revisit later.
[1:13:29] Okay, so question six. Uh Uh Considering the importance of diameter at breast height DBH of mangrove species
[1:13:41] in improving the accuracy of above-ground biomass calculations, are there databases that provide estimates of DBH of various mangrove
[1:13:49] species at various heights or stages of growth? growth? The allometric models that help us relate mangrove measurements like DBH
[1:13:57] and height etc. to estimate biomass or carbon are active areas of research. These relationships are often species
[1:14:04] and region specific. Although there's not one single database, there are some reviews on mangrove allometry that may be a good
[1:14:11] place to start. We will um I think we we may have one or two links that we could add to that in the future.
[1:14:19] We will circle back to that and see if we can add a bit more. Hi everyone. This is Lola Fatoyinbo. I
[1:14:30] can also um jump in and and answer this question. Um I think what what this question is also
[1:14:38] asking is whether how we can measure DBH or estimate DBH based on height. And so just to follow up on what Adeea said,
[1:14:49] which was correct, is that for that we would use an allometric equation or an allometric model that gets you from a
[1:14:56] height measurement to a diameter measurement. But actually we we use those um um that that's essentially what we do when
[1:15:07] we use height as an input to measure biomass is that we use the relationship between height and diameter
[1:15:14] um to estimate what the volume of the tree is and then that tells us what the biomass of the tree is as well.
[1:15:21] So, I hope that also gave some more clarification. So, I guess going to question eight, how can I
[1:15:36] identify restored mangrove sites by using SAR data? If your restored site has undergone structural changes detectable by SAR,
[1:15:45] you can begin with a simple two-time point change analysis using one image prior to the restoration activity and
[1:15:53] one image post restoration. Um another potential approach could be to use multiple images prior to restoration and
[1:16:04] and uh uh sort of assess uh trends over time looking at essentially building an average over multiple years and then looking for
[1:16:15] deviations from that established trend to help you see the differences between pre- and post-restoration. And I can answer question nine.
[1:16:35] Um which is a question about whether the generic allometric equation that uses basal area weighted height and SRTM data
[1:16:44] is recommended for time series analysis. The SRTM data became available in the year 2000, but topographic conditions
[1:16:51] may change over time. Um and is SRTM still reliable for estimating above-ground biomass in that case? That's a very very correct
[1:16:59] question um because the SRTM data is now outdated. It's quite old um and there have been many changes that have gone
[1:17:08] that that mangroves have undergone since then. Um so in that case, there are there are now newer digital elevation
[1:17:15] models and there are newer models of global canopy height that can be used uh instead of SRTM.
[1:17:23] Um and here SRTM is really used as an example of what can be done and how to
[1:17:27] do this analysis. Um some examples include Jedi data, which gives us actual canopy height um and other DEMs that you
[1:17:35] could use are the TanDEM-X DEM or the Copernicus GLOW 30 DEM. However, one thing to note is in every
[1:17:42] one of those cases, you do have to develop the relationship between mangrove canopy height and the height
[1:17:50] that you and the height measurement that you get from the digital elevation model. It's not necessarily guaranteed
[1:17:55] that the uh that the equations we use to get from um the SRTM height to mangrove height will
[1:18:05] be be the same. So, really you have to you have to make sure that you have um
[1:18:12] data set specific models so that you are able to estimate your canopy height correctly and for the
[1:18:20] year that you are interested in. Um okay, I can also uh try to answer question 10 which is
[1:18:44] asking about Sentinel-2 for subnational level and how to and how to approach at subnational level where other data is required to support
[1:18:56] granular analysis for example gender roles but still developing it in an African context. So, I'm assuming that what this
[1:19:04] question is asking is how do we use um the earth observation data such as Sentinel-2 at level that is more that's
[1:19:15] at a higher resolution than you know, what we've presented here. So, not at a national level. Um in that case, I think
[1:19:22] you would you know, use the data set that's at a resolution that is more appropriate. So, it's correct here to
[1:19:28] say that Sentinel-2, for example, might give you a more a higher resolution result. Um, Um, and then I think the the the one thing
[1:19:39] that you can do for this particular analysis is just to do a site-specific analysis of what it is that you're
[1:19:45] looking at. And there will always be some limitations to what you can do with the remotely sensed data.
[1:19:54] So, it really depends on what your application is and what your what your what your questions are and what your
[1:20:00] other data sets are that you're using in conjunction with the mangrove maps. Just a quick note to mention that we've
[1:20:18] we answered question 12 in our response to question five. So, essentially, you can stratify based on uh, based on height. And this is an
[1:20:31] approach that's that's often used as tall, dense mangroves will tend to have a more above-ground biomass and higher
[1:20:38] carbon stock than shorter uh, dwarf mangroves. Okay, and then I'll answer question 11, which is asking about species
[1:21:02] species-wide or species-specific mangrove standard spectral signature data available for identifying the different species of mangroves in the
[1:21:11] study area. If yes, then from which platform can we download? Um, I don't think that that is available on a global
[1:21:17] scale, but it might be available or there might be publications that have done this on a site-specific scale. And
[1:21:23] otherwise, this is something that um, you would do when analyzing your own data. Um, and you know exactly which
[1:21:30] species are located where, you could then look at the spectral signature and try to use that to predict species
[1:21:35] distribution distribution or species presence and absence. Um, but in the case of mangroves, one thing that you have to take into account
[1:21:43] is the fact that they are tidally inundated. So, you would probably get differences in your spectral signature
[1:21:52] depending on the tidal level, which is a very important thing to take into account. So, there's a question about CO2
[1:22:48] sequestration and you had earlier on had a really good answer to that. Um, looking at the different
[1:22:54] sequestration rates in mangroves and other blue carbon ecosystems. Ah, yes. Sorry, I just I'm just now seeing question 13. Just give me 1
[1:23:09] second. Okay, sorry. So, I see this question is is somewhat different from the question earlier about yeah, different CO2
[1:23:21] sequestration rates within the blue carbon ecosystems. But, um, how do you get it from mangrove mapping? I mean, this was partially covered
[1:23:33] through your presentation. We have uh, uh, around 30 to 40% contained within above-ground biomass and vegetation, especially in woody
[1:23:44] vegetation and in uh, leaves and 60% within uh, within soil and uh, believe that also includes includes CO2 within below-ground vegetation.
[1:24:00] Um, Um, when I mean, also what you covered in your presentation on mapping mangrove canopy height and structure, this will
[1:24:10] give us a lot of good information to help us better better understand, better estimate uh, above-ground biomass and
[1:24:17] the carbon that it contains. So, this in conjunction with extent and strata, looking at different types of
[1:24:25] mangroves, tall, short, um, dense, sparse, all of this can be used to to better calculate carbon stocks in
[1:24:35] mangroves. Do you want to add more? I I think the one thing that I would add is that um, measuring CO2 sequestration
[1:24:44] using uh, the data that we presented here directly um, is really challenging. Um, Um, what what can be done and what people
[1:24:54] are working on is using the maps and field-based estimates of CO2 sequestration to build models that relate um, you know,
[1:25:04] sequestration rates to um, um, to the signal of the satellite data that you're using. Yeah, just to add on to that, I think
[1:25:17] CT's presentation in the introduction um, um, also helped explain this. You know, there's there's part of the mangroves
[1:25:25] that you can actually detect with with Earth observation data. This is what's going to be above ground. And everything
[1:25:33] that's below ground, um, you can use equations like root-to-shoot ratios and you can use modeling to to understand
[1:25:41] how carbon stocks in soil may be distributed and may vary across a landscape, but uh, at the end of the
[1:25:49] day, we're not directly detecting that with Earth observation data. We're using Earth observation data and in situ data
[1:25:56] to um, begin to to attack that sort of below-ground carbon stocks through proxies, essentially. Okay, and question 14 is
[1:26:17] how can we consolidate the difference in satellite data with ground truth data if there's a significant difference between
[1:26:23] the two and the difference is not consistent? So, this is where doing an accuracy assessment is really important.
[1:26:30] Um, when comparing two models, there will always be some uncertainty and some error. You're not necessarily measuring
[1:26:36] the same thing in the field that you're measuring measuring uh, from space or at the same resolution
[1:26:42] or at the same time. So, you will have some differences in your measurements. But, this is where doing an accuracy
[1:26:50] assessment gives you a measurement of the error or gives you a measurement also of uncertainty. So, you know,
[1:26:57] uh, for example, that your map is 90% accurate. So, you can say we have a 10% error on that. And almost all
[1:27:05] measurements have some error in them. Even when we measure height a height of a tree in the field,
[1:27:11] we assume that there is about a 10% error on that height measurement. Because if you compare the height that's
[1:27:18] measured between two different people, it might not necessarily be exactly the same even if they're both standing in
[1:27:24] front of the same tree uh, using the same instrument to to take the measurement. So, there might always be
[1:27:30] some error or some difference between two measurements. And the important thing is to get the uncertainty uh, understand how to do the the
[1:27:41] modeling or the measure the how to how to calculate the uncertainty um, or the accuracy assessment and then
[1:27:49] take that into account when doing your analysis or your reporting. Okay, well, thank you, everyone. It seems like there are no more questions
[1:28:06] coming. coming. Um, also, just so you know, there'll be a transcript of the questions and we'll put that online so that you can have
[1:28:13] these these uh, for your reference. And if there any more questions that come in, we'll also try to answer them and and include them
[1:28:20] in there. Thank you. Thanks, everyone.
