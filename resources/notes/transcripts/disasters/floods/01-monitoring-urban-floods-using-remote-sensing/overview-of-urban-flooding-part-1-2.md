# Overview of Urban Flooding, Part 1/2

`https://www.youtube.com/watch?v=fzf_usG5dfE` · id 35 · 1:57:29 · module 45 — Monitoring Urban Floods using Remote Sensing

[00:02] Good morning and welcome everyone. Welcome to this R set webinar series on urban flood monitoring using remote
[00:10] sensing observations. I'm Amita Mehta and we will be conducting this webinar sessions with my colleague Dr. Erica from NASA JPL.
[00:24] So overall training objectives it's going to focus on remote sensing and our system model data and tools which are
[00:32] relevant for monitoring urban flooding especially for planning warning response and recovery phases when a flood occurs. Secondly, we also want to identify main
[00:43] challenges in monitoring urban flooding especially using remote sensing data. So the overall objective would be to learn about remote sensing data and
[00:53] identify remote sensing data that relevant but also see what are the limitations or challenges in using this
[01:00] data and how to overcome them partially. So course outline is there are going to be two sessions as you may know.
[01:10] Today it's going to be overview of remote sensing data for urban flooding. So we will mostly talk about different
[01:16] types of data that can be used for different phases of urban flooding. And next week then we're going to focus
[01:23] on access analysis of remote sensing observations for specific cases and also we're going to focus on flood monitoring
[01:32] tools which can aid to look at our monitoring urban areas and see where surface inundation is occurring. As
[01:40] shown here in the image, this is from Landsat and MODIS and you can see that the the areas
[01:49] from MODIS and Landsat shown here in purple and red, they show surfaces where there is water. So we're
[01:56] going to look at different aspects of urban flooding starting with which data to use which will cover today and then
[02:04] next time then we'll use some of flood tools which can directly give information about where inundation may
[02:11] be occurring. Just a few things to note about webinar series. There will be two homeworks, simple homeworks today as well as after the
[02:24] second session. And there will be a certificate of completion awarded to everyone who attends both webinars and also complete homework assignments
[02:35] by the deadline which is 15th of August and and by this time you have to submit both the
[02:41] assignments. You will receive the certificate approximately up two months after the completion of the course and Marina's Martins whose email address is
[02:51] given here will be sending you an e-copy of your certificate provided that you attend both this webinar and complete homework
[03:00] sessions. That brings us to today's session. Um Um Our plan overall is here. We'll start with something about R set.
[03:11] Some of you may already have taken R set training before and are familiar with R set but those of you who are new to R
[03:19] set, we want to say a few words about R set. We'll start with that. And then we will start
[03:26] talking about urban flooding. First of all, why is it different than any flooding which is non-urban flooding?
[03:34] flooding? Then we'll focus on how to monitor urban flooding using remote sensing and observations and our system model data.
[03:43] Also, we will focus today on analysis of terrain to detect flood prone flood prone area, sorry, and also
[03:54] monitoring approaching precipitation or weather systems. So that's going to be the focus for today. Before we move into
[04:01] talking about flood monitoring tools. Then we will move on to examples of urban flood management using remote
[04:08] sensing. We'll show some examples where several organizations are using remote sensing data for urban flood management. Then we will have demonstration of two
[04:20] flood cases and in this two cases, one is Ellicott City, Maryland. This was a flash flood occurred um in in
[04:30] May of this year and in Houston, Texas, there was also very heavy rain and that caused flooding on 4th of July. So we'll
[04:37] focus on these two flood cases at the end and we'll demonstrate how to look at terrain data and how to
[04:44] identify where there are flood prone areas in within this urban cities and also see how we can monitor
[04:54] precipitation before actually flash flood occurs or just to see how to look at urban area and surrounding area to
[05:03] see if there is a flood approaching. And once the flood occurs, where there may be water logging occurring. So this
[05:12] is the overall outline. We'll start with R set. So about R set. Here is the website and those of you who you have taken this
[05:24] training, you already know this but major objective of R set is to empower our global community through remote
[05:31] sensing training. Especially we do trainings as you see to increase the use of earth science in decision
[05:41] making through training and we focus on training for policy makers, environmental managers and other professionals so that remote sensing
[05:52] data can be used for decision making. R set is part of NASA's applied sciences capacity building program.
[06:01] And the topics that we cover, they include water resources, disasters, eco management and air quality. These are the two thematic trainings on
[06:12] these four themes. Here is the R set website and there is also also listserv where you can sign up. All the
[06:22] training material is available here, the past trainings as well as current trainings. When we post homework or
[06:30] exercises, they will also be posted on this website and you can sign up for the listserv if you have not already done
[06:39] so. so. Once you sign up, you will receive information about upcoming trainings or any news that that are coming from R set, you can see that
[06:49] you will receive an email. So that was about R set and now we want to start talking about urban flooding.
[06:59] Also please take a minute here for you to type in the chat box, have you attended R set trainings before? You can
[07:09] just say yes or no. And also have you attended tropical storms training earlier? You can also type this answer in the chat box.
[07:21] So now we'll start with urban flooding. So what are the causes of urban flooding? flooding? Anywhere you see flooding basically
[07:35] occurs because there is excessive rainfall. rainfall. Anywhere it is true but in urban flooding there are natural and human
[07:45] induced causes and they're listed here. First of all, heavy precipitation can cause flash floods anywhere but in
[07:55] urban area it's very important. They can also occur because of snowmelt. That snowmelt runoff can inundate surfaces.
[08:09] surfaces. Urban area close to a river can be flooded if even if there is no heavy rain in the urban area but upstream if
[08:18] there is heavy rain and river starts flooding then overbank flow can inundate nearby urban area. That could be a
[08:26] cause. cause. Coastal flooding can occur because of storm surges. And if uh if the sea level is slowly
[08:34] rising, that can also increase chances of coastal flooding. So urban area even if there is no heavy
[08:41] rain, if it's near the coast and there is a storm approaching, coastal area can get flooded. But there are also reasons listed here.
[08:51] First of all, lack of proper drainage systems. Any urban area has a usually they have storm water system and the capacity of that
[09:04] system decides how much water can be quickly removed from the urban area. So if the drainage system cannot handle all
[09:12] the precipitation that is coming in in efficiently removing it, then there is usually flooding. If there is no water infiltration in the
[09:22] ground because there is a lot of built-up area such as roads and buildings and parking lots, then surface
[09:30] becomes impermeable. So outside the urban area where there is open land, usually water runs off or it also gets
[09:38] infiltrate in the ground, it seeps in the in the soil. If the area is built, then that
[09:46] water cannot go into the ground and it just stays on the surface. So that also can cause flooding.
[09:55] So unplanned development actually is a major cause of urban flooding. Not only it increases impermeable surface so that water cannot go into the
[10:06] ground, but also it sometimes if it is not planned properly then the terrain changes in such a way or
[10:14] this water has no way to go to the sewerage or drainage system and then water gets accumulated in a particular
[10:22] place. And that causes water logging or ponding or urban flooding. There could be infrastructure failure if there are dams or levees nearby and if
[10:34] they burst or even drainage pipes they burst, then water leaks out and then there could be flooding also. So, there is natural
[10:45] cause of flooding which is basically heavy precipitation or riverine flood or coastal storm surge because of that or there an addition
[10:56] these are other factors which play a major role in deciding intensity and location of urban flooding. So,
[11:05] together all these factors when they come together there could be urban flood that could be really bad. As you can see the flash
[11:13] flooding Ellicott City, Maryland earlier this year was such a flash flood resulting from heavy rain. We are going to look at this
[11:22] flood case later, but it really really flooded a particular area of the city and you can see all the cars in the
[11:31] water and there was not enough um um um drainage system design could not handle removal of the water.
[11:40] Similarly, this is um in Philippines you can see major flooding which is not only because of rainfall, but also because all the
[11:51] coastal storm surge that occurred and then that flooded the city. And obviously urban flood risks are greater because if
[12:03] they're usually populated areas, so there's major danger to human lives. Damages to buildings, housing, roads, utility works, drainage systems
[12:15] um they also are at risk. There are direct economic impacts such as income losses in industries and in trade, loss
[12:24] of household assets, loss of employment for daily workers. Um so, these are direct economic impact. In addition, there could be
[12:34] infrastructure damage that needs repairing and so there are long-lasting economic impacts as well. Uh here the schematic is shown where there are
[12:44] sources of flooding and then there are pathways and then how different systems are affected and what are the
[12:52] consequences. So, urban flood has risks which are immediate and also there are longer-lasting. So, So, it's not only that there needs to be
[13:05] response and recovery in the immediate aftermath of flooding, but there has to be mitigation mitigation efforts they
[13:12] have to be thought of to reduce long-term impact of urban flooding. So, why is it important? Not just
[13:23] because it is um it is really a risk for human lives and everything, but something else to note
[13:32] is that uh there's projections that by 2050 2/3 of the world's population will be living in urban areas.
[13:42] Even now cities are always growing and that's going to continue and so in a few years 20 30 years
[13:52] most of the people in the world will be living in urban areas. So, rapid and unplanned increase in urbanization,
[14:00] growing number of slum dwellers, and inadequate infrastructure will make cities more and more vulnerable. So, and they will
[14:11] affect quality of life for people, ecosystem systems will be affected and also a lot of economic impacts and
[14:19] they'll be vulnerable more than even now. now. So, that's why it's important to understand urban flooding. Um as some of you know the United
[14:30] Nations has sustainable development goals. And for sustainable cities, so there are specific SDGs as they're called, they focus on making cities and
[14:44] communities sustainable and specific indicators or goals are 11.b.2, have strategies for urban disaster reduction. reduction. Uh next one is reduce the number of
[14:58] deaths related to disasters and 15.5.2 mitigate disaster damage to infrastructure for basic services. So, this by 2030 and beyond some of
[15:12] these goals have to be kept in mind and so whatever steps can be taken to reduce uh disaster risk
[15:22] and make cities and communities more sustainable, that should be the goal. Uh so, and as stated here it is both natural and human
[15:33] development they factors they influence cities. And coping with flooding and in expanding urban areas with increasing population and that's going to be a
[15:45] major challenge for decision makers not at community level or municipality level, but also at state level and
[15:53] national level and even international level where disasters can have major economic impacts and long-lasting effects. effects. So, it is really important to focus on
[16:08] urban areas and see how to work with urban flooding in in decision making. making. Can we see
[16:18] upcoming flood? Can we identify areas which are flood-prone? Can can there be infrastructure in place or services in
[16:26] place for decision makers to to to work with or to respond to urban flooding? flooding? So, the data needs for that and for
[16:39] urban flood risk reduction in for for natural causes you first of all have to identify flood plain um and so flood
[16:48] plain maps they are based on terrain or digital elevation model or DEM and also what kind of drainage channels are
[16:58] there, there, natural way of water to flow away from a particular area. So, those have to be known. Um if it's a
[17:08] riverine flood, then river stages and inundation have to be known. Is the stream flow high enough so that there
[17:16] will be overbank flow and cities would be flooded close by? So, stream flow and river stage they
[17:23] have to be known. Uh coastal surges and inundation, so that requires surge height monitoring and also inundation occurring because of that.
[17:35] There is weather data, especially precipitation intensity and frequency. And forecast would help to see where there is
[17:46] major precipitation or weather system approaching and that might prepare urban areas areas for for flood risk reduction.
[17:57] Also flood hazard map and beacon periods, these are developed based on past precipitation and river stage data.
[18:05] Um so, that they can be calculated from other data sets. In addition, there are anthropogenic or human
[18:15] human data needs for flood risk reduction. So, storm water system design and its capacity, so these data if for planning
[18:24] for urban flood um it has to be known what kind of capacities there for storm water system to remove the water. Um
[18:33] then design and capacity of dams and levees if it's relevant for any urban area. Uh land use change, so this is
[18:41] exposed soil versus built area. Uh so, impermeable area versus non-impervious permeable area so that water can be removed
[18:51] in the ground. Uh that that has to be known. Uh human population and infrastructure infrastructure such as
[18:59] buildings and roads and other infrastructure, this information also helps in in reducing urban flood risk. So, together all these
[19:10] factors can help in reducing urban flood risk. risk. And uh remote sensing actually can help in in many of these
[19:21] data. So, as you can see if the storm water and design and dams and levee design, they are something very
[19:31] specific, but all other factors listed here here natural and some of the anthropogenic, they can be accessed through remote
[19:41] sensing data and that is what we are going to see next. So, for that we're going to start with
[19:50] monitoring urban flooding. What kind of NASA remote sensing and earth system model data and tools are available.
[19:57] Uh these tools that we're going to talk about today are mostly for data access. So so So we're going to start with a
[20:07] number of satellites um that NASA has in orbit. orbit. Uh these satellites are relevant for monitoring urban flooding.
[20:15] Um should be noted that it's not just urban flooding. It These satellites are relevant for monitoring flooding
[20:21] anywhere, but we are going to focus on urban areas and how to use data from these satellites to monitor urban areas
[20:29] and flooding in particular. Um very useful satellite system Landsat, uh which is the longest offline satellite uh series of satellite
[20:39] systems. Um and that started in July '72 and uh Landsat 8 is the current satellite that is already flying.
[20:50] Uh Tropical Rainfall Measuring Mission. This uh satellite was designed specifically to monitor tropical rainfall and that was launched in
[20:59] November '97. It ended in April 2015, but as we will see later, uh uh rainfall from this satellite has been
[21:10] used for so many applications, especially flood related applications, that uh these data in one form are still
[21:18] continuing uh with uh climatological trim calibration, um and so that's why we're going to include this satellite,
[21:26] although it's no longer flying right now. now. Uh next uh satellite Global Precipitation Measurement Mission. This GPM is a follow-up mission to TRMM and
[21:37] that was launched in February of 2014 and it is um currently flying and providing uh global precipitation
[21:47] that is uh highly accurate and relatively high resolution compared to previous satellites. Uh Terra and Aqua, these two satellites
[21:57] are so uh long flying uh since 1999 and 2002 respectively. Uh and we will see how these satellites can help in um
[22:07] monitoring urban flooding. Um relatively recent satellite Suomi National Polar Orbiting Partnership or SNPP that was launched in 2011 and it's
[22:17] been flying. Uh the instrument on SNPP are similar uh to that on Terra and Aqua as we will see and they also help in
[22:26] monitoring flooding. Soil Moisture Active Passive, uh that was launched in 2015 and it's been flying. Um that provides information
[22:36] about soil moisture. Um and as we will see that also is useful in indicating where flood severity might be more.
[22:47] There are additional um data data satellites. One is from European Space Agency Sentinel 1A and Sentinel 1B.
[23:23] These two systems uh they've been flying since 2014 and '16 respectively. And as we will see, um Sentinel 1A and 1B they carry uh
[23:32] radar uh synthetic aperture radar that help in monitoring uh land surface and that help in monitor urban flooding.
[23:41] Here is a table of all the satellites that we just talked about and uh sensors carried by these satellites.
[23:49] Um Um Measurements uh either emitted or reflected radiation that is measured by these instruments and the parameters
[23:58] derived from these instruments. So all the acronyms are defined at the end, but we're going to talk about uh Landsat 7
[24:07] and 8, which are currently flying. They have sensors such as Enhanced Thematic Mapper and Operational Land Imager or OLI. Um
[24:16] They uh measure optical reflectances, so visible, near infrared, middle infrared and thermal infrared. Uh and these reflectances and images,
[24:29] they can uh be used to derive land cover and and that's why specifically they can be used
[24:36] to look at inundated surface. TRMM and GPM, these two satellites they carry microwave radiometer and radar. So TRMM has TRMM Microwave
[24:48] Imager. Uh GPM has GPM Microwave Imager, Precipitation Radar and Dual Frequency Precipitation Radar. These are the frequencies for TMI and GMI in microwave
[25:02] uh frequency. These are in gigahertz. And these are the radar frequencies. PR was just KU band and DPR has both KU and
[25:12] KA band. And all these measurements are used to derive precipitation at the surface and also how uh water
[25:23] molecules are distributed in the vertical. That also is derived from these satellites. Okay. So Terra and Aqua, these two satellites
[25:32] have have many instruments, but the one we're going to talk about is MODIS or Moderate Resolution Imaging Spectroradiometer.
[25:41] Um Um SNPP VIIRS has is also very similar to MODIS and both these instruments they uh measure uh reflectance in visible, near
[25:53] infrared and middle infrared. And these reflectances and uh images, they can look at different land cover and therefore can also be used to
[26:04] identify inundated surface. Soil Moisture Active Passive or SMAP has a microwave radiometer currently flying on the satellite. Has L-band uh
[26:16] microwave frequency um and it provides soil moisture um at the surface and um combined with a model it also provides
[26:26] root zone soil moisture. Sentinel 1A and B, these are ESA or European Space Agency satellites. They have synthetic aperture radar, which is
[26:36] a C-band microwave radar and it provides backscattered um radiation that can be used to look at the inundated surface.
[26:47] Finally, Space Shuttle Endeavour carried SRTM. Okay, that was a radar or C-band radar and that provided information about earth's terrain.
[27:02] In addition, uh there is a NASA model. It's called Earth System Model or say Goddard Earth Observing System 5.
[27:10] And this model uh provides precipitation, winds and soil moisture information that can be used in near real time. Also, there's forecast
[27:20] available on hourly basis that can be used to monitor weather system. There are two additional uh data sets that we want to talk about.
[27:31] LiDAR, which is light detection and ranging. Um that's a uh instrument, also a remote sensing instrument that we will see next week,
[27:41] provides high resolution topography mapping and that's why it is very useful for urban regions where um you have
[27:49] buildings and other obstacles that uh needs high resolution observations and LiDAR can help do that. Then finally, there is SEDAC or
[27:59] Socioeconomic Data Center that provides a number of socioeconomic data um in urban area uh specifically that can help
[28:09] in uh urban flood management. So we are going to look at different uh data sets today. Um we'll start with Landsat uh
[28:21] satellites. So as uh we mentioned, Landsat 7 and 8 are flying currently and Landsat 9 is already uh planned. So this
[28:32] is a long-term mission. Uh it had Landsat 7 has uh Enhanced Thematic Mapper um and all the What is important to note
[28:42] here is that with different optical and infrared bands here, the resolution is relatively high here. It's 15 m, 30 m to
[28:53] 60 m or 30 m um in in for most bands. Um However, you look at the revisit
[29:01] time, it is 16 day. So at any even location, every 16 day you can get Landsat image. And also the swath is
[29:10] about 185 km. The next instrument is Operational Land Imager. This is flying on Landsat 8. Has nine bands again, basically covering
[29:22] optical and infrared uh region and has similar special resolution and temporal resolution. So this also is used for
[29:33] looking at uh inundated surface. So where can you get Landsat images and spectral reflectance data? So there are three options here.
[29:45] As you can see, USGS has a Earth Explorer. Explorer. This portal allows you to do special temporal subsetting and picking a
[29:56] particular area for Landsat image. Similarly, there is global visualization viewer or Glovis that also helps in picking individual tiles in which you
[30:08] can look at Landsat images. So, true color images can be seen or all that reflectance can also be obtained from
[30:17] these sites. Similarly, USGS USGS look viewer also helps in in accessing data. data. Personally, for global data, I have
[30:30] always used Earth Explorer, but you can try these different locations and see it's pretty easy to navigate
[30:40] through these sites. And ARSET also has several trainings in which these data have been used. So, if you go to ARSET
[30:50] website in in land management or eco forecasting forecasting webinars, you will see some of these websites being accessed.
[31:02] This brings us to global precipitation measurement mission. As this is the currently flying mission which is a follow-up of tropical
[31:11] rainfall measurement mission TRMM. You can see the orbits shown are TRMM orbits and the blue are GPM orbits.
[31:20] So, as I mentioned earlier, TRMM focused on tropics between 35 south to 35 north, whereas GPM provides observations
[31:29] between 65 south to 65 north, essentially covering major precipitation areas, both rain and snow. And GPM works with a number of national
[31:49] international satellite or constellation satellites. In combined with these other satellites, revisit time is two to four hours. So, that's a useful system to
[32:01] monitor precipitation. And these are the sensors as we mentioned earlier. So, both TRMM and GPM, they used the
[32:11] concept of multi-satellite algorithms. TRMM and GPM core satellites were flown by NASA and JAXA, which is Japanese
[32:21] space agency. But But these satellite data were combined with other constellation satellites, both national and international satellites,
[32:32] all carrying microwave or infrared observations instruments. And so, by combining these different satellite data calibrated with TRMM and GPM, that
[32:44] allowed improved special and temporal coverage for precipitation. And so, one such multi-satellite algorithm from TRMM is called TRMM multi-satellite
[32:55] precipitation analysis or TMPA. That That has been used for many applications. Similarly there is an algorithm with GPM. It's
[33:09] called integrated multi-satellite tables for GPM or IMERG. And this is similar to TMPA, but currently it has
[33:19] better resolution than TMPA. Later this year, a combined TRMM GPM record will be available to have multi-satellite algorithms. And
[33:30] as shown here, the that's the GPM core and these are the national international satellites from US, from Japan, from India and
[33:41] France and European space agency. So, these satellites, they help they're calibrated with GPM satellite observations and they're all combined
[33:54] finally with rain gauge data overland to come up with IMERG. And you can find more information on this website.
[34:06] So, IMERG, which which will be a long-term product eventually starting from 1998 onwards, combined with TRMM TMPA
[34:20] currently has three versions as shown here. There is early product which has latency of about five hours. And this is
[34:29] very useful for monitoring flash flooding. flooding. Late Late product which has latency of about 15 hours. hours. That is more for looking at
[34:40] crop forecasting or water crop. And then there is final which is the research quality data. It has
[34:49] latency of three months, so you receive it three months later. But it is combined with rain gauge data.
[34:56] And all these data are available at hourly, half-hourly, three-hourly, one-day, three-day and seven-day and for different applications. And eventually,
[35:10] IMERG data will be available globally at half-hourly half-hourly interval. And so, focusing on IMERG, it is 1/10 of
[35:21] a degree resolution compared to earlier availability of satellite precipitation like TMPA. And And it's half-hourly and eventually,
[35:35] it will be available from 98 onwards. So, TMPA as I mentioned is widely used for flood modeling and monitoring and
[35:47] IMERG is going to replace this product in the near future. So, where to get IMERG TRMM and GPM data? Here is the website.
[35:59] This is the precipitation measurement mission website and there's a data access link. And there's a quick link to get data.
[36:08] And there's also a training on how to obtain this data. The link is provided here. So, you can
[36:15] download data or you can visualize these data. data. What we are going to do is we're going
[36:21] to use a tool. It's called Giovanni. And this is the website. Those of you who have taken ARSET
[36:30] classes or courses before, they are familiar with Giovanni, I'm sure. And then, what we will do is
[36:37] go through Giovanni tool to see how to access precipitation data and how to analyze this precipitation data,
[36:44] especially in context of urban flooding. We will have a demonstration of this tool later, but as you can see, you can
[36:53] search by keyword. There is special and temporal selection available. There are different analysis options available. And And this can you can pick either by drawing
[37:07] lat/long box or you can pick different shape files for analysis. So, we will have a demo at
[37:13] the end. This provides Sorry, this provides IMERG data analysis analysis capability and that that is what we're
[37:25] going to see. The next satellites are Terra and Aqua. And as we mentioned, MODIS is the sensor we're going to look
[37:35] at. at. So, MODIS also provides observations in optical and infrared bands, just like Landsat. But as you can
[37:47] see see this is a daily polar orbiting satellite which provides daily or twice daily compared to Landsat which provides every
[37:59] 16 days. Terra has equator crossing time of 10:30 a.m. and Aqua is 1:30 p.m. So, at any
[38:09] location, observations are available from Terra at 10:30 a.m. and p.m. or from Aqua 1:30 a.m. and p.m.
[38:18] And these are long-term flying satellites as you can see. MODIS MODIS is a versatile instrument that observes
[38:27] surface, atmosphere and land and ocean both. It has 36 bands in optical and infrared bands. What you notice here is that the
[38:39] resolution is not as high as Landsat. It's moderate. It's 250 m to 1 km depending on the band.
[38:47] But the swath width is quite large, about 2,330 km compared to 185 km for Landsat. So, you can see that there is a good
[38:58] coverage from MODIS. The temporal resolution resolution it's one to two times a day, but there are composite data available at multiple
[39:07] time scales as listed here. This figure just shows different spectral bands here. And data sets can be obtained from land
[39:17] processing distributed active archive center as shown here. This is the LP DAAC website and there is a data discovery
[39:28] link that you can find data information. And for data search, temporal and special subsetting and downloading, you
[39:38] can go to NASA Earth data site. This allows you to look at a particular MODIS product product that you can get more information from
[39:49] LP DAAC and then get that from NASA Earthdata as shown here. So, reflectance data are available as
[39:57] well as derived products are available here, too. Next satellites we want to talk about is SNPP. SNPP. This is also a polar orbiting satellite
[40:08] with 1:30 a.m. p.m. aqua type equator crossing time with global coverage. It also has a multiple sensor suite, but we're going to talk
[40:19] about VIIRS. And And here is the the VIIRS or Visible Infrared Imaging Radiometer Suite. So, similar to MODIS,
[40:32] observations in optical and infrared, there is a special day-night band which is centered at 0.7 micrometer or between 0.5 to 0.9
[40:44] micrometer. This band helps looking at night light imagery as shown here. And as you can see here also, there's a
[40:55] very wide swath and resolution is lower than MODIS, about 375 to 750 m resolution. And this has been flying since 2011. Again, LP
[41:07] DAAC provides information and data access for VIIRS as well, just like MODIS. MODIS. But what why is it useful for urban
[41:15] flooding? As shown here, this DNB, as it's called, day-night band, that provides information about night light. And so,
[41:26] daily images, if you look at this band, you can see if there are power outages in urban areas. So, this example is for
[41:35] Puerto Rico and this was last year during Hurricane Maria. And you can see that this was before hurricane and this
[41:43] was after hurricane. And you can clearly see the decrease in intensity. And if you zoom in, you can see where actually
[41:53] power outages have occurred. So, that's why this is a very useful band. And VIIRS night light imagery is
[42:03] available here in NASA Worldview. And if you go to this website and search for night light imagery, you will be
[42:12] able to get the image. You can also see that if there are clouds, sometimes can obscure, but there is a data set coming
[42:21] out which has cloud cleared night imagery that can be very useful for monitoring monitoring power outages that may occur because of
[42:31] urban flooding or heavy precipitation. Next, Soil Moisture Active Passive or SMAP. This is also a polar orbiting
[42:43] global coverage satellite launched in 2015. 2015. It had both microwave radiometer and radar, radar, but radar currently is unavailable. Only
[42:55] radiometer is available and it provides soil moisture information globally. It has if you can see that the resolution in
[43:08] for radar is 3 km for radiometer, it is 40 km. So, the after processing, what you can get
[43:18] is soil moisture and this is useful for flood monitoring and why? Because Because if there is already soil moisture or if
[43:30] there is rain and soil is saturated, then more rain will prevent water to infiltrate because it's already
[43:39] saturated with soil moisture. And so, more soil moisture already on the ground, there is chances of flooding are
[43:48] being more. So, that um um monitoring soil moisture allows to anticipate what kind of intensity there will be of flooding,
[43:59] how efficiently water will either infiltrate or run off. That depends on amount of soil moisture present. So,
[44:06] that's why this data are very useful. So, not only for just statistically empirically looking at the data, but
[44:13] also in flood modeling, these data provide important boundary condition. And where to get SMAP data? There is a National Snow and Ice Data
[44:26] Center that provides soil moisture. So, level two to level four, so these are raw orbital data and also gridded
[44:36] data. They are all available from NSIDC. So, to look at to get these data, you can here also you can have special and
[44:47] temporal subsetting and can obtain the data. Finally, so there is European Space Agency's satellite Sentinel Sentinel 1A and 1B. They carry synthetic aperture
[45:02] radar. radar. And so, that instrument is an active sensor, so that throws a microwave pulse to the surface as shown
[45:14] here. And then it it measures the backscatter radiation and that radiation is affected by the smoothness or type of surface. So, the
[45:26] backscattered signal after some processing provides information about what kind of surface there is, if there is inundation going on.
[45:38] So, that's why these data, the backscatter signal, are useful. And the scale of the objects on the surface
[45:46] relative to the wavelength, that is very important to to derive information. So, so actually SAR processing is a little
[45:58] complex, but one important advantage of SAR is that it's microwave based, not optical infrared based as MODIS or Landsat
[46:10] sensors. So, that it can see through clouds. clouds. Whenever there are clouds present, optical infrared data cannot see the surface through the
[46:20] clouds, but microwave can. So, SAR that way is quite useful. And as you can see, there are multiple
[46:27] applications of SAR as shown here. So, SAR data can be accessed from um Vertex. This is the Alaska Satellite
[46:40] Facility website. Here you can get these data. There are also also data processing tools. One of them is
[46:50] SNAP or Sentinel-1 Application Toolbox. This is also available from Vertex. And it is an open source toolbox that allows
[47:00] you to download and analyze SAR data. Here you can go here also to download SNAP. SNAP. Processing SAR images, as I mentioned,
[47:12] is complex and it requires advanced training, but it is also very useful for monitoring surface. And ARSET is
[47:24] hosting a webinar on SAR in August. And here's the website where you can go and register. This this will be an advanced
[47:32] training where you will be able to work with SAR data for different applications. Then we talked about
[47:44] Shuttle Radar Topography Mission or SRTM, which is shown here. It's a C-band radar as shown here. It also throws
[47:52] radiation on Earth's Earth's surface and then receives backscattered radiation. And it is measured in such a way
[48:04] difference between that helps in deciding structure of the topography on the surface. So, this was this flew in space shuttle
[48:15] Endeavour. Endeavour. And it covered entire Earth in 176 orbits orbits between 60 north and 56 south latitude
[48:25] bands. And it covers 80% of the Earth's mass and provides topography over this entire area. And so, this elevation map,
[48:36] they can be very useful in looking at terrain and slopes. There was Here's a link where you can
[48:46] get more information about um SRTM SRTM data and its validation and its access, etc. etc. So, that's just for your more
[48:57] information, but we are also going to look at SRTM data for selected urban cases flood cases. Here is a
[49:07] site which provides access to SRTM data. It's called Global Data Explorer from USGS. And it has multiple choices as you
[49:18] can zoom in, you can define region either by box, state, country or lat latitude longitude. And you can download
[49:27] this data. There are multiple choices. NASA SRTM 30 m resolution is is available here that you can download.
[49:38] We'll have a short demo at the end to see how to do that. Then we talked about uh model data. And
[49:46] here is the GEOS file weather data. Um this uh is the website. And these are the variables available. So, precipitation
[49:57] and sea level pressure are there. There is wind speed. And there's also humidity. Um there are different pre
[50:05] predefined regions such as uh North America or global or Australia or uh Pacific. So, you can zoom in to any
[50:13] particular region and you can look at uh sea level pressure and precipitation maps or you can see winds as uh shown
[50:24] here, both speed and direction according to uh typical uh weather map is here. There is a way you can download this
[50:33] data. data. You can either just visually see this. Uh there is also a way to animate this
[50:39] data online. But you can download any data uh using this data access um HTTPS uh HTTPS um option. Uh you can you Once you go
[50:53] there, you will see different uh data options. And so, this is by year and month GEOS data. Then you can pick a day
[51:03] and then there are hourly files. In near real time as well as hourly forecasts up to 10 days are available
[51:10] from this particular site. You can download this data using um this portal. Uh this is the uh NCCS
[51:21] portal where you can download this data. Um and uh once you go to this site um there are two There are single level
[51:31] files. They provide um um um sea level pressure and uh wind data whereas near surface whereas uh flux
[51:42] file provides precipitation information. Um and there is more information about GEOS 5 file convention and different parameters they're given here.
[51:54] So, this is a lot of lot of information from different data sets, but when we do a case study, you will see how we use
[52:02] these different data sets to look at urban flooding. The next ancillary data set that we talked about was CIESIN or socioeconomic
[52:11] data. data. This is available from this uh Columbia University uh website or CIESIN site. It has a number of uh data sets which can
[52:22] be useful uh for risk reduction in urban areas. So, it knows it provides global population density. Uh it has global
[52:31] urban data from Landsat satellite that we're going to see next week. Uh global reservoir and dam information, low level
[52:40] um low elevation coastal zone regions, uh global roads, energy infrastructures. These are some of the uh data sets that can help in focusing
[52:52] um um to see how to uh when there's urban flooding going on if you know, how to
[52:57] mitigate uh around these uh infrastructure um or where there is more population. And so, these socioeconomic data, they help in in risk reduction and
[53:08] planning for flood management. So, this is the list we started with earlier. earlier. So, urban flood related data um
[53:18] and so, we talked about flood plain map. These are the data needs. They can come from SRTM and LiDAR.
[53:26] Uh river stage, stream flow, surface inundation. They can be found based on TRMM GPM um and also there's a tool it's called
[53:36] global flood monitoring system that uses precipitation which we are going to see next week. There's Terra Aqua MODIS and
[53:44] Landsat. They all help in deciding surface inundation. Coastal surges and surface inundation can also be They can also be seen from
[53:53] Terra Aqua and Landsat. So, MODIS and Landsat instruments. Uh weather data, historical, current, and forecast. Um so, precipitation's
[54:02] available from TRMM and GPM and other weather parameters as we saw including precipitation available from GEOS 5
[54:11] model as well. Uh flood hazard map and written period which be um which are used for management, they can
[54:20] be based on past data. So, TRMM and GPM data can be used. Uh GEOS 5 model data
[54:26] can also be used to derive hazard map and also uh return period uh statistically. statistically. Land use change and exposed soil versus
[54:37] built area can be found from Landsat and MODIS because they uh provide uh land cover or land remote sensing.
[54:46] Uh human population and infrastructure. So, all the data sets that we just saw uh right now, all the satellites, all
[54:54] the sensors, all the websites where data can be accessed, they can be used for these um different needs for urban flood
[55:03] um um risk reduction for planning. Um and so, we will see a couple of cases where we
[55:10] put all these two all data sets together to see how they can be used. Before we do that though,
[55:19] uh let's see some examples where some of these data are already used for applications. So, one uh such use is by Asian Disaster
[55:32] Preparedness Center or ADPC. This center is um aided by NASA uh US um AID AID and there's a SERVIR Mekong SERVIR also
[55:44] is a NASA capacity building program. So, this is a collaborative program that uh provides a capability for monitoring
[55:53] flooding in Mekong Basin and how to reduce risk, uh how to manage. And so, you can see this is their annual report
[56:01] uh that provides information about how remote sensing data are used um in in by ADPC for decision making.
[56:11] And so, there all the um lower Mekong countries data set needs are met by some of these data sets that
[56:21] we just talked about. You can see on the right hand side um this is the area. This is the Mekong
[56:27] River. And this is the um area around Phnom Penh in 2013 and 15. And you can see this inundated area
[56:36] uh based on remote sensing observations that we just talked about. Uh so, ADPC works with a number of end
[56:46] users listed here uh which include National Heritage Institution, uh Vietnam, Cambodia, Laos. Um Um their Ministry of Environment and
[56:57] Meteorology and Water Resources are involved as end users. Um their Ministry of Engine Energy and Mining uh Thailand
[57:06] Department of Water Resources, Mekong River Commission, and World uh Wildlife Fund uh Greater Mekong. All these end
[57:14] users use ADPC um information coming from Landsat 7 and 8, SRTM digital elevation, and MODIS data uh to look at surface inundation,
[57:28] identify flood flood prone area, and more information can be found from SERVIR Mekong products and services summary um given here.
[57:39] So, this is one example where data remote sensing data are actually used for decision making by several end
[57:47] users. users. Uh NASA World Bank NASA and World Bank also they have um collaborated in looking at um rapid flood response. And
[57:59] this is um this is again uh GPM data. And so, World Bank uses uh GPM precipitation data to
[58:09] monitor uh heavy precipitation and resulting flooding. As quoted here, uh it says this preliminary results we've seen are
[58:18] promising and options to combine satellite-based measurements with traditional hydrologic model-based approaches are being explored. So, um in
[58:28] long term, the objective is for for any disaster planning or relief, it's it's very important to combine remote sensing
[58:35] data with traditional in situ data and also modeling. And And NASA and World Bank also uh have put
[58:44] together a ebook that you can look at at your convenience. Um this is also based on TRMM and GPM. Uh flood potential is
[58:54] available through this ebook. This is open source. And you can see uh near real time flooding areas where there is
[59:02] severe or moderate flooding or low level flooding going on. That can be seen from this ebook. There's also other
[59:10] information in this ebook about uh remote sensing data used for a number of applications. Next user is Red Cross. Uh their
[59:21] disaster mapping um also uses TRMM data and they also now use uh GPM will be using GPM data. So, American Red Cross
[59:31] uses precipitation data precipitation data and flood monitoring tools for hazard mapping and trim has been a very a major part of this
[59:44] disaster mapping. Um one more example here is Virginia Department of Conservation and Recreation. Their flood plain management, they use NASA disaster
[59:58] portal as uh shown here. And you this uh this portal is being developed for different uh disasters and floods also
[1:00:08] is a major part of it. And so, um for VA Department of Conservation and Recreation for flood plain management,
[1:00:17] they use data available from remote sensing and different flood monitoring tools coming out of um of NASA.
[1:00:28] Uh FEMA also uses some of the remote sensing measurements we just talked about for flood flood plain management
[1:00:34] and you can find more information here. Um Um So, um resources from different federal, state, and professional association that
[1:00:44] include NASA data and includes precipitation and MODIS data map and also this is the Sentinel uh flood map.
[1:00:52] All the red area shown here shows surface inundation. This is in Ohio and Mississippi River region. So, um for identifying uh and
[1:01:03] managing flood plain, FEMA uses uh remote sensing data. So, this brings us to um the demonstration of uh flood cases. So,
[1:01:14] we're going to focus today on precipitation and terrain data to look at flood prone to identify uh flood
[1:01:21] prone area. And we're going to focus on two urban flood cases. First one as I mentioned is Ellicott
[1:01:29] City Maryland. This is off on 27th May, there was flash flood. Uh we're going to focus on that and the second one was on
[1:01:39] 4th of July in Houston. That also resulted from heavy rain. So, what we're going to do is so this is
[1:01:48] then overview of Ellicott City um flooding. So, on 27th May, here is the um um this is the Washington Post reported.
[1:01:59] This is the area where there was this is Ellicott City, there was major major flash flood occurred because in short
[1:02:07] time, there was a lot of precipitation. As you can see, uh 6 in uh fell in Ellicott City proper right
[1:02:16] there and then there is decreasing intensity. This is a radar based image. Um Um if you see on the right hand side, this
[1:02:26] uh area is the flooded area which is called Main Street. And what you see here is this is the Patapsco River and
[1:02:36] there are several um um streams here like Hudson Branch is there, there's Tiber Branch, and then there's New Cut Branch. All these
[1:02:44] streams flow into the river. But it's the topography plus the amount of rain that fell, um uh river stages went up very
[1:02:54] dramatically. All the streams uh flow was very high in these streams and because of the terrain in this area and
[1:03:03] also development urban development around this region, there was no way of that water to go away quickly and so
[1:03:12] quickly a lot of uh water accumulated in this Main Street area and lot of damage occurred. So, we will look at this case
[1:03:21] uh when we in uh look at GPM precipitation, we also look at the SRTM terrain. terrain. Uh Houston flood, um this is also um
[1:03:32] a major rain system arrived on 4th of July bringing more than 200 mm rain in certain areas. And so,
[1:03:41] especially Harris County area, all the streets were flooded. So, we will focus on this uh flood as
[1:03:50] well uh to see how we can monitor arriving rain system and also see if we can look at SRTM to
[1:04:00] identify where there could be more flooding flooding because of terrain. And so, uh I will share my screen with you.
[1:04:22] So, here is I'm I'm sharing my screen now with you. And what we will see is first we will
[1:04:29] see how to look at GPM IMERG data for Ellicott City, how we can analyze the data by using Giovanni.
[1:04:39] And followed by uh SRTM data for the same region. So, this is the Giovanni website. And there's a search by keyword where we
[1:04:49] are going to say IMERG. And we're going to pick IMERG early because that has the lowest latency in
[1:04:57] time and available in near real time. Once you search that, it comes up with this table of all the data available in
[1:05:06] early IMERG and source, temporal resolution, spatial resolution, and uh data coverage dates. And we're going to pick half hourly
[1:05:15] data. Units are mm per hour. You can have inch per hour if you like. We're going to pick this half hourly
[1:05:23] data. And here is an option where you can put uh latitude, longitude. You can enter. And we're going to choose coordinates
[1:05:36] based on um location of Ellicott City Maryland. And this is the box around Ellicott City, a little larger area just
[1:05:43] to see how precipitation systems uh came over the the Ellicott City region. You can also pick uh shape file in which
[1:05:56] you can pick US states uh such as Maryland you can pick. But we are just going to look at a box which is around
[1:06:03] Ellicott City. You can zoom in and pan the map using This is the area where you want to look
[1:06:14] at rainfall. We're going to pick date now. So, we're going to pick 27th of May because that was the the date when flash flood
[1:06:24] occurred. You can see the hours um this is 00. Uh this is in UTC to uh 23:59. This is the
[1:06:35] end of the day for 27th. And here are all the options. We're going to pick animation. We're going to animate half hourly
[1:06:44] rainfall for this day to see how rain systems moved. You can do plot data. And it launches a workflow to
[1:06:54] uh for animation of rainfall. To save time, we already have put this uh uh animation together. And here is
[1:07:04] the the These are the arrows you can look at and you can see all the rain systems moving
[1:07:11] in this area. This is the general area where flash flood occurred. Here is every half hour interval for 27th of
[1:07:19] May. May. You can use the arrows to stop and go back and forth and look at individual
[1:07:26] frames. Here is where heavy rain occurred. So, after 6:00 on uh 27th, these are going backwards now
[1:07:34] looking at um past. past. So, this is 8:00, 8:30, 8:00. So, this is when there was um heavy rain arriving in this region.
[1:07:55] So, now we can go back to the data selection again because we now seen uh we have seen now
[1:08:02] uh how uh rain systems were moving in this area. Now, we are picking a specific point based on that animation map which is
[1:08:10] close to Ellicott City center. This is one one uh grid point from IMERG and we're going to do time series analysis for the same
[1:08:18] day. day. So, now at this grid point, we're going to see time series of rainfall half hourly rainfall.
[1:08:28] And once you uh do the selection and do the time series plot, here's the plot at this particular location.
[1:08:35] As I mentioned, the resolution is 1/10 of a degree or about 10 km. So, in 10 km
[1:08:40] box, rainfall increased after 6:00 that evening and peaked around 9:00 and then there was another small minor peak later
[1:08:49] in in that night. Um 4 mm per hour is the maximum rain noted here. This is just one grid point.
[1:08:56] If you look at surrounding grid points one by one, you can see the intensity of rainfall in this each 1/10 of a degree
[1:09:02] box. box. You can download this data or you can save the image and you can further analyze this for uh this particular
[1:09:12] hours and that's what uh we're doing here. here. Now, uh what we've gone back to data selection.
[1:09:20] selection. And what we've done is picked 6:00 to end of the day. And we're what we're going to do is because we saw
[1:09:28] that that's when the rain peaked and the flash flood occurred very much after that. We're going to look at accumulated
[1:09:34] rainfall for these hours. Again, for the same region in around Ellicott City. And once you select that and you plot
[1:09:45] the data, you get a map of accumulated rainfall. And you can see that this is the scale
[1:09:56] here. Maximum is about 44 mm in in after 6:00 that day. And you can see where where you can see all the 1/10 degree boxes.
[1:10:09] This relatively a lower resolution data, but what we can do is we can download this data and then use it with QGIS or
[1:10:19] any other GIS. The data are available as net CDF file. We can save that to further analyze in
[1:10:26] GIS or we can save PNG image just to look at visually how the rainfall was distributed. So, next So, what we've done is already
[1:10:38] saved this accumulated precipitation. We will use that in GIS to see how it was distributed over around Ellicott City.
[1:10:48] Next, what we want to see is the terrain data. And here is just a little demo for that.
[1:10:58] This is the USGS Cheetahs site that allows data selection for SRTM. What you need to know is that you have
[1:11:10] to log in to get this data. And you have to register to NASA Earth data. Once you go there,
[1:11:26] you if you you can register or if you already have registered, you can log in with your username and password.
[1:11:35] So, this site is free, but user registration is required. So, for downloading data, you have to log in. You can visualize
[1:11:46] the map without logging in just if you want to look at the data. You can see that you can zoom in and
[1:11:53] out. You can pan the map. You can draw a box and zoom in or just go back and look
[1:11:59] at the global view. You can refresh your screen and go back and forth in your frame selection.
[1:12:08] Here is the area defined by the country or states. You can pick any particular country if you just want to focus on that.
[1:12:18] Or you can go to US map and pick states and even counties you can pick. So, in here all the states are
[1:12:31] available. available. And you can also pick county if you know where you want to focus. You can have rectangular area
[1:12:40] defined by latitude longitude. You can have a polygon area selection or rectangular area selection. You can refresh your
[1:12:48] defined area and finally you can download. So, these are multiple options. Also note that when you move
[1:12:54] your cursor, you can see which latitude longitude are at. So, you can just visualize data if you don't want to download. In here, we
[1:13:04] are going to download SRTM terrain data for Ellicott City. And so, the These are the latitude and longitudes around Ellicott
[1:13:17] City. So, you can pick exact latitude longitude that you're interested in. And here is the area that we picked.
[1:13:30] You can see that this is NASA SRTM 1 arc second, which is 30 m. So, once you click on that, it loads the
[1:13:39] data. There is a legend. Here is in meter, it's in elevation. So, this can give you a rough idea.
[1:13:46] Qualitatively, you can see what range is there in elevation on this area. But we're going to look at it in QGIS to
[1:13:54] have a better idea of how terrain distribution is around Ellicott City. You can pick other different countries or boundaries and
[1:14:06] cities. You can highlight that on the map. map. You can download data. Here you can pick SRTM
[1:14:14] SRTM 1 arc second, which is 30 m resolution data. data. And you can download the data as GeoTIFF
[1:14:21] images. Once you submit that, it it extracts the data that you picked and you can save it and saves on your
[1:14:32] computer. And so, once the file is created, you can visually see how terrain is distributed. distributed. And now, what we're going to do is
[1:14:58] actually look at the analysis in QGIS. So, bear with me while I launch this. So, this is the Ellicott City region. I
[1:15:21] have have I merged data um um included in here. So, you can see that data are little
[1:15:33] boxy. So, what we're going to do is we're going to do do actually interpolation of this data that
[1:15:41] allows you to not create new information, but provides higher resolution information. Um Um And so, for that, we're going to use
[1:15:53] that interpolation tool. This is a grass tool available in QGIS. And you can use this tool. You can do
[1:16:02] bilinear interpolation based on this 1/10 of a degree. And we're going to pick about 30 m resolution here, too.
[1:16:12] Uh Uh and we can run this to see a higher resolution resampled resampled precipitation data. You can You can do
[1:16:25] uh uh color color change here according to I'm going to invert this red blue and have have interval say about
[1:16:40] 10. 10. So, it's about 4 mm intervals. And you can see where there were hotspots or a lot of rain occurred.
[1:16:52] You can make this layer transparent to see what's underneath. And so, what you see here is um
[1:17:07] um Here is where you can also look at slope that we add. This is Baltimore and we're going to try
[1:17:20] and zoom in to Ellicott City. So, we can see both terrain and map. Let me zoom in a little more
[1:17:30] and turn this this terrain on. So, this is what I've done actually is calculated slope based on terrain data,
[1:17:41] SRTM terrain data. So, we got the terrain data and Yeah. Yeah. And then used the Sorry. Sorry. Let me zoom in.
[1:17:56] Sorry about that. Let me zoom in again. This is a little tricky, but we just need to
[1:18:16] get I want to show you that Main Street area area and see how the terrain looks. So, this is the Main Street that pass
[1:18:34] through Ellicott City. And if you look at the slope here, derived from SRTM terrain data, is derived from raster
[1:18:41] analysis, the terrain models. And here you can pick slope. And you can pick terrain data, which you can include in
[1:18:52] your layer and then calculate slope. So, this is in degree. You can see that in general, so these
[1:19:00] are the streams that we saw earlier that go into Patapsco River here. But notice here that this Main Street part, this is
[1:19:08] the historic Ellicott City, which suffered a lot of flash flood. There are high terrain slope area surrounded here in the Main Street area,
[1:19:18] which is the low slope area. There are buildings here and in general the terrain is high in here. You can also
[1:19:25] see that in general slopes are low so anywhere you have higher sloping surface and low slope in between the these are
[1:19:34] flood prone areas and in here it is just like a channel that you have all these high terrain and buildings around and
[1:19:43] there's the street that goes through it. When there's a lot of rain there's no way to remove this water quickly and so
[1:19:51] this is the second time in 2 years that a very damaging flood has occurred in this area. You can now look at the
[1:19:58] rainfall. What you see here is that although this we have interpolated at higher resolution really it is the
[1:20:08] around 12 to 16 mm rainfall it shows everywhere. So now if you have this low resolution rainfall but you have high
[1:20:18] resolution terrain data you can first of all identify what area are flood prone based on the slope
[1:20:27] and terrain analysis and then based on past flooding or if you have in situ rainfall data you can derive a
[1:20:36] relationship between I merge high resolution data and in situ data and if you have flooding information from
[1:20:43] earlier flood cases you can come up with a strategy that okay here is the satellite derived rainfall and here is
[1:20:52] my terrain how intense the flood is going to be what what is going to be the probability based on past cases combined
[1:21:00] with some in situ data. So although precipitation available from from GPM here for such smaller urban area like Ellicott City it it's not high
[1:21:11] resolution but combining it with in situ data if you have and if you have stream gauge data if you have rain gauge data
[1:21:19] and if you have this high resolution slope data you can come up with a strategy and some idea to facilitate
[1:21:26] your decision where there will be more flooding or likelihood of more flooding. So this is one way to look at these two
[1:21:34] data sets. Next week what we're going to do is look at inundation monitoring tool using Modis also
[1:21:44] also Erk Cappadonna's from JPL will be talking about SAR urban flooding. For Ellicott City area we'll we'll see
[1:21:51] whether Modis can show us any flooding. So we'll we'll cover that next week and we'll do further GIS analysis to combine
[1:22:00] more data. I just wanted to quickly I did the same for Houston. And so this is the Houston area I
[1:22:15] have resampled I merge data here and there's slope based on SRTM data also. also. You can zoom in
[1:22:27] and see within the city. This is pretty high rainfall in in in Houston region almost 108 mm
[1:22:40] accumulated. This is just one day 4th of July and just if you look at the slope again in the city area you can see
[1:22:49] streets and other buildings and they appear as higher slope region and then in between streets show up as low slope area. So this helps
[1:23:00] you you in seeing especially you can also look at the terrain data itself to see if there is
[1:23:10] any indication of there is a high elevation plateau in certain region so there is a slope in general in certain
[1:23:17] direction or you can just combine again GPM I merge which is resampled with um slope data to see where there is
[1:23:29] likelihood of flooding in which area so like in between you would see if there is likelihood of more flooding. Again
[1:23:40] in situ data always helps in these cases so combining remote sensing and in situ data data especially if you do it for past flood
[1:23:50] cases and that helps you come up with a decision support strategy strategy and to identify where there is more
[1:24:00] likelihood of flooding. So this is a quick quick demonstration demonstration of of rainfall and terrain. Lastly I want to show this weather map
[1:24:13] which is the forecast map. As we talked earlier earlier it's not just near real time data that
[1:24:18] we're interested in for urban flooding but if you have forecast that helps in in in focusing on in certain area. So
[1:24:26] this is even low resolution about like 30 to 50 km boxes so it's it's low resolution but
[1:24:33] if you look at the map these colors are 3 hourly accumulation accumulated precipitation and that's what you see in
[1:24:42] here. here. What you see is that you can pick forecast initial time and lead hour. So you can say
[1:24:53] today we are in 24th of July but 25th of July we can go to say 27th of
[1:25:02] July about 21 Z and and you can actually animate the data. You picked North America you can zoom
[1:25:11] into other regions as well. When you launch this animation it takes a few minutes to actually see the data but then once
[1:25:22] all the images are put together you should be able to see animation between these dates and that shows
[1:25:31] movement of precipitation and that helps you see see in in the next few days hour by hour how precipitation
[1:25:44] precipitation systems might move into certain certain area. So here you can see this um um larger precipitation is here blue red um
[1:25:56] so it it allows you to focus on where there is more rain keeps looping so and then as you come closer to that time you
[1:26:06] can start monitoring I merge data in near real time as we saw. So this this this provides
[1:26:13] guidance in which area to focus on where there may be flood likely where there is rain system arriving and then as it
[1:26:21] comes closer to the area when closer to this date then you can time then you can start looking at I
[1:26:30] merge data in near real time to see how the flooding might occur where it might occur. occur. So this
[1:26:38] ends our demonstration and we're going back to the presentation now. Flooding is the most common and most
[1:26:56] costly natural disaster in the country. In the last 2 years more than 8.5 billion in damages. More than 130 lives lost.
[1:27:12] How many are there of you? Uh there's about there's about 40. In the bus? The question is what can we do to
[1:27:22] mitigate this destruction? A firm as they call it a flood insurance rate map is a panel which depicts flood
[1:27:35] zones and these flood zones give an idea of specific risk how likely you may or may not be to encounter a flooding event
[1:27:43] within a given period of time. These maps need to be updated because the factors upon which the engineering
[1:27:48] is based change over time. You have changes in the composition of the ground material. You may have an increase in
[1:27:56] impervious area. You may have better methods better flood study methods may become available. One of the ways to keep these FEMA maps
[1:28:06] up to date is by tracking urban change using satellite imagery. Take this suburb of Atlanta Georgia. If we look at Landsat images spanning a
[1:28:16] 27 year period we can pinpoint areas of the earth's surface that have changed usually because of construction like
[1:28:24] here where the Mall of Georgia was built. built. A product called NUSE helps to mine these images.
[1:28:32] Well NUSE is especially important when considering risk because it allows us to identify trends in urbanization. Now if you identify areas where urban
[1:28:42] change is accelerating there are consequences. Means you're that increase in impervious area is going to mean altered flood characteristics like
[1:28:50] an increased risk because people are probably building houses there. Impervious area essentially means ground cover which has been changed from a
[1:28:57] natural state to say a paved area which is going to be concrete or asphalt. The infiltration characteristics of that
[1:29:04] ground material have been altered significantly such that the ground is no longer able to hold water which means
[1:29:10] that that local flooding sources are going to receive more of that water and the flooding characteristics are going to
[1:29:16] change. change. Tracking urban change from space helps everyday people understand their flood risk and take action. You can't see them or hear them, but
[1:29:29] since 1972 Landsat satellites have been sending us data and today that data helps us manage the high cost of
[1:29:37] flooding here on Earth. Just a small demo of this urban land characteristics changing and we're going to look at
[1:30:03] this data for the current period what the impermeable surface data are we'll look at it next week. So, what we're going to
[1:30:10] do next week is we'll we'll also look at um um synthetic aperture radar and we'll see how that is advantageous
[1:30:19] um um for flood monitoring. We will also have examples of lidar data. We talked about briefly lidar today which also provides
[1:30:29] terrain data high resolution terrain data over urban areas. So, we'll talk about that. Um we'll talk about urban
[1:30:36] area. We'll talk about flood mapping tools specifically based on modus and also based on trim GPM. And we'll have some other socioeconomic
[1:30:46] data data to see how all these information can be combined together in an urban area to to facilitate decision making in
[1:30:55] different stages during flooding. So, this actually brings us to the end of today's presentation and demonstrations, but there is an exercise
[1:31:05] that you can take a few minutes to follow. In the handouts part you will see exercise one.
[1:31:19] And you can see that over here. It's the monitoring GPM average precipitation for flood monitoring. So, this is something for you to get
[1:31:28] hands-on hands-on um um experience a little bit. So, we'll give you a few minutes say 10 minutes or so and then we can
[1:31:40] go back to our question answer session before we end today's session. So, we'll take a couple of more minutes
[1:32:02] and see if you have if you encounter any problems with Giovanni tool or if it is you can do it later also.
[1:32:15] You can download the exercise now or you can also download from our website later on. So, So, you probably have some idea of using
[1:32:29] Giovanni now. The last part of the exercise talked about looking at PMM site. This is the this is where you look at I merge data
[1:32:39] in latest half hourly map period. You can click on it and you can go to here is where you can see where rainfall
[1:32:49] is occurring. You can zoom in where the rain is in which region. Zoom in further if you like.
[1:33:06] And what you can see here is view an animation of the past 7 days of I merge
[1:33:11] precipitation. precipitation. So, this is also helpful. It allows you to look at the region where persistent rainfall has been occurring
[1:33:21] such as in say monsoon region currently over here. For several days now it's been raining and the rain system's been moving.
[1:33:31] Here also. So, you can look at it and and try and anticipate where there may be flooding.
[1:33:38] So, based on animation so this gives you qualitative idea of where there is high precipitation intensity and how rainfall
[1:33:47] may have accumulated over a particular region in the area of your interest. So, with that I think what we'll do is
[1:33:56] we'll start with our question answer session. So, here are some of the questions that we have from you.
[1:34:08] So, the this was the um question question how there are different scales of mapping and remote sensing different
[1:34:17] sources how would you combine them? So, one way actually is to do the analysis like we did and we're going to continue
[1:34:24] to do that next week also to put more and more data together to to facilitate better analysis.
[1:34:31] You can use different data sets in a hydrologic model and then look at outputs. Here Here the
[1:34:42] the data available Giovanni works for all countries. So, we we just saw the demo here this question three for particular flood
[1:34:56] incident how do we decide capturing data? So, we looked at Giovanni and Gdex today. We also looked at GEOS-5 portal
[1:35:09] for for weather forecast. And next week then we're going to look at some other tools. Um especially for inundation mapping and
[1:35:20] looking at stream flow and runoff. So, the question four is how does forest cover affect SMAP data?
[1:35:36] So, So, SMAP radar I mean it can look because it radar radar if radar is there it could see through
[1:35:46] it, but right now radar is not working. And so, the radiometer data there is an effect on of forest cover. But next
[1:35:57] week we'll see that synthetic aperture radar data they can map map soil moisture even when there is forest
[1:36:05] cover. cover. So, for now yes SMAP has you can get soil moisture data, but it has it has
[1:36:21] influence of forest cover. There's also a modeling product available in which SMAP data are assimilated and that provides
[1:36:32] perhaps better representation of soil moisture everywhere. So, question five is written period of trim and GPM. So, GPM and trim written
[1:36:49] period core satellites have have repeat period which is in hours to couple of days for trim and GPM is a few
[1:36:58] hours, but what the product that we talked about TMPA for trim and I merge which will be
[1:37:06] the the future of precipitation product like I merge that is a combination of multiple satellites. satellites. And so, it is every half hour.
[1:37:21] So, all the constellation satellites are calibrated with GPM core data. And so, data are available at every half
[1:37:31] hour at 1/10 of a degree resolution. So, So, Servir Mekong data I think you can contact Servir.
[1:37:54] You may have to register to download the data. They can help in answering your questions. Um so, the the question here is are we
[1:38:16] focusing on any kind of hydraulic modeling? modeling? Not in this webinar. So, identifying flood hazard using QGIS
[1:38:28] yes a little bit of that. We are going to be putting different remote sensing data in GIS to actually be able
[1:38:36] to to better decisions. But modeling is not part of this webinar this being an introductory webinar. If there is an interest you can let us
[1:38:45] know know at the end of the webinar session when there will be a brief survey. So, question eight um
[1:39:05] answer is um actually yes because if you look at um past data over a particular region of
[1:39:15] your interest where you already know when floods occurred. You have in situ data and you can try and correlate with satellite
[1:39:25] data from the past. And based on that you will be able to decide decide you can once you look at forecast rainfall
[1:39:38] you can look at You you can have a forecast probability for flood. Um Um Yes, IMERG data can be um
[1:39:58] downloaded as TIFF image. Um Um You the PMM site that we just saw That That has a training on how to get
[1:40:13] in different for IMERG data from different locations. I'm trying to find this the link for you. So that provides
[1:40:29] Here also there is registration required. required. But you should be able to look at their webinars how to get
[1:40:48] In the chat box I'm just putting a a link. Um Are any of these data sources exposing
[1:41:08] the data via open So again, yes, IMERG data are available through open applications and um um um Since you asked we we will actually
[1:41:22] cover it next week briefly. So how accurate are these data when relating them to terrestrial data for meteorological
[1:41:47] stations? stations? And if it can be taken as a forecast or prediction for official information or will Yes, I I think local
[1:41:58] validation is highly recommended. As for a a When you look at a meteorological station data a rain gauge data and if
[1:42:07] you have satellite data which is tens of kilometers kilometers um there is not going to be a direct
[1:42:14] match. match. If you see a time series you can do bias correction between in situ data and satellite data.
[1:42:23] And that has been done um by by many groups so that they use satellite data and then
[1:42:30] remove bias based on local station data. So that gives them better idea of how to interpret satellite data at local level.
[1:42:38] So that has to be done. Um sometimes when you look at a large area like IMERG looks at 10 kilometers
[1:42:46] rain intensity would be much less than a station data sometimes. But that is something that that bias bias correction
[1:42:53] is is important. If you actually want to do any quality quantitative analysis, yes. Um so yes, actually you can go to
[1:43:12] Giovanni and you can pick any region upstream of your area and there's a whole time series. You can look at past
[1:43:20] data. data. So you can be you can start following back and see if there's upstream rain and you would expect any flooding in
[1:43:30] your region because of that. So that is that that is possible. So you use the area spatial area and
[1:43:41] temporal range and then you can animate, you can accumulate. You can look at time series analysis. Um
[1:43:55] Um Uh they the question my question 13 um Buildings do pose a problem, yes. Backscatter it is affected.
[1:44:16] But we'll see that when we look at SAR session next week. Uh geo data is available globally.
[1:44:28] And as we saw on the website you can zoom in to particular region. You can go on the website that we have
[1:44:35] in the presentation and download global data. data. If you just want to um have you want to
[1:44:41] do special selection there is a way in NASA Earth data website that we we mentioned in the presentation.
[1:45:02] I'm trying to understand question 15. Uh date range for daily accumulated rainfall. rainfall. Since we cannot choose beginning and end
[1:45:11] time increments. So So time zone is basically this is all the UTC. UTC. These are all GMT time. So your local
[1:45:24] time you have to adjust that way. If you are interested in that. But um you can pick beginning and end
[1:45:32] time. time. Um Um You can pick different dates. You can pick different hours within days. If it is like for IMERG it's half hourly
[1:45:48] data so you can pick which which time you want to to see. So there is a way to
[1:45:53] pick beginning and end. Uh SMAP data has not stopped operating. The radar is not working. Radiometer is
[1:46:04] there. And if if you're if it is useful just to if you if you are looking at a particular area
[1:46:18] if you Again, resolution is a little low but if you look at keep looking at soil moisture maps
[1:46:25] and that tells you that uh before uh like a approaching weather if you're monitoring soil moisture it will give
[1:46:33] you some idea if there is more soil moisture there is less infiltration maybe more possibility of flooding or
[1:46:40] water logging. So it can help that way but more importantly if you're using hydrologic model you can use SMAP data
[1:46:48] as boundary condition. Yes, so here both Landsat and Sentinel 2 data will be available. So resolution could be 10
[1:47:09] meters in that case. So it's slightly better than what we have now. Uh you also have to see that Landsat and
[1:47:19] Sentinel the revisit time is not daily. So you might miss some some flood cases. That's why we use
[1:47:27] MODIS although it is lower resolution it is daily data. So yes, you're not able to look at the
[1:47:35] roads which are which are not very wide and they're surrounded by buildings. One way to to get around is is to have lidar
[1:47:45] data or lidar images of urban area which can help you identify buildings and narrow roads also. And that way you actually have
[1:47:57] all your drainage channels and slopes and everything identified before you see rain and then you can look at
[1:48:05] Landsat and Sentinel data superimposed and that will give you a better idea of where flooding might be occurring. Even
[1:48:11] if the roads are narrow and you can't resolve that in Landsat Sentinel 2, you have lidar data to do some guidance.
[1:48:24] Um Um Question 18, yes, all these data are available through FTP. That that and we will actually
[1:48:38] if you go to our set tropical storm webinar webinar um um I'm trying to give you the link here if
[1:48:48] I can. That has a tutorial on how to subset data and download. I'm sorry, not the tropical but the
[1:49:05] hydrologic modeling webinar we did a few months ago. It was on variable infiltration capacity hydrologic hydrologic model.
[1:49:20] And here's the link. So, So, there were three sessions, but the second session in this webinar that has
[1:49:32] NASA Earth data tutorial that allows you to FTP data. Yes, I merge and TMPA combined will be
[1:49:59] 1/10 of a degree half-hourly data and starting in January 1998, I believe. Should be available later this year.
[1:50:26] Question 20, yes, actually you can. I think it's a good idea to look at terrain data also.
[1:50:45] Is there any way to project the flood? Can you mention about MODIS and other satellite data? Yes. So, this is a
[1:50:54] real challenge um um when when there is major storm passing through or rain system going through, there are clouds.
[1:51:03] And MODIS and Landsat, they both being optical instruments cannot see through clouds. So, that is why um
[1:51:14] synthetic aperture radar data are slightly more useful. They're microwave data and they can see through clouds. So, we'll see next week some of the
[1:51:25] advantage of SAR data. Another way people have done that there are cloud clearance algorithms used. Um sometimes if
[1:51:42] some some more day composite data are used rather than using daily data, you use maybe 3 to 10 day composite that eliminates some
[1:51:54] of the cloud influence. influence. But yes, that is a challenge. That is a problem. So, just a couple of more points here
[1:52:19] before we adjourn for today. Um Homework one, actually there's no submission as such. You are actually downloading and and installing QGIS on
[1:52:30] your computer. And there is also a exercise to for you to to work with SRTM data using G tags.
[1:52:40] This is just for your your own experience. experience. You don't need to submit anything, but if you next week when we do exercise, um
[1:52:50] you will be using QGIS, so it will help if you have QGIS on your computer. If you were not able to do exercise one
[1:53:01] today, you can try that and if you have any questions with that, you can uh ask them next week.
[1:53:15] So, today we focused mostly on precipitation. precipitation. Uh we did not look at riverine flooding or even coastal flooding.
[1:53:24] So, next week when we look at flood monitoring tools, that provides information about if there is any
[1:53:33] river flooding going on that might cause urban flooding. Um you can see coastal inundation in certain cases.
[1:53:44] So, we will see that. Something we are not addressing here is the snowmelt issue. We're mostly focusing on
[1:53:54] flooding resulting from rainfall and and coastal flooding because of either storm occurring in nearby. So, we also want to ask a question if um
[1:54:15] any of you are involved in urban flood management, management, um your feedback would be very useful to
[1:54:22] us. us. So, we have all these data sets, but actual decision making on ground, what kind of data are used,
[1:54:32] what kind of temporal latency um is required, what kind of special resolution is helpful, um and how actually decisions are made.
[1:54:43] If you can provide us feedback about that, that would be highly useful to us also. And if you are willing to talk to us
[1:54:59] offline, we would be very happy to set up a telecon with you. So, since we talked about many different
[1:55:39] data sets today, um and we went over all the satellite sensors, model not in great detail, but
[1:55:46] just in introductory fashion. If there is any particular um topic that is of interest to you, you
[1:55:53] can make note of that. And at the end of the webinar series next week, we will have a survey for you in which you can
[1:56:00] express your interest on the topics that you are interested in learning in more detail. So, if there are no more questions,
[1:56:15] we would like to thank you all very much for attending today's session. And we hope to see you next week at the
[1:56:22] same time. Um and we'll be focusing more on radar data as well as on flood monitoring tools.
[1:56:38] And I also want to thank our our set team helping here. Brock Levins, Elizabeth Hook, and Selvin Hudson. They
[1:56:46] have been helping in setting up this webinar, answering questions and registration and making material available. So, thank you
[1:56:55] everyone. Thanks again for attending today's session and we hope to see you next Wednesday, 1st of August the same time.
