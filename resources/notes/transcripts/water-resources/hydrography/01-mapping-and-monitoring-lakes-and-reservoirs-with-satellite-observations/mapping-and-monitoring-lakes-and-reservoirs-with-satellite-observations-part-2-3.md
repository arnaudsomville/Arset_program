# Mapping and Monitoring Lakes and Reservoirs with Satellite Observations, Part 2/3

`https://www.youtube.com/watch?v=ELgJ3hvaBUI` · id 179 · 1:20:26 · module 117 — Mapping and Monitoring Lakes and Reservoirs with Satellite Observations

[00:02] Hello everyone. Welcome back. Welcome back to the second session on the webinar on mapping and monitoring lakes and reservoirs with
[00:11] satellite observations. Again, I'm Amita Mehta and this webinar is conducted with my colleague Shawn McCartney. Last week in the first session,
[00:23] we saw information basic information about lakes and reservoirs. Then we had an overview of remote sensing observations
[00:32] relevant for monitoring water extent and water level height and bathymetry. And then we focused on water extent data
[00:40] sets or based on water extent surface area of lakes and reservoirs, we saw a number of data sets
[00:49] including MODIS based water mask. We also saw HydroLakes, which is lake polygons derived from Shuttle Radar Topography Mission. And
[01:01] finally, we saw high-resolution water extent or lake extent data from Landsat that was derived by Joint Research Centre. And we also had a
[01:14] demonstration by Shawn McCartney how to access Landsat based water extent data that is global surface water. Today our focus is going to be on water
[01:25] level height data for lakes and reservoirs based on radar altimetry. altimetry. And then next week we will conclude this
[01:34] webinar series with laser altimetry measuring lake level height and bathymetry. bathymetry. I want to acknowledge help of Dr. Sharon
[01:44] Burkehalter from NASA Goddard. She's the expert on radar altimetry and in deriving lake level heights. She has
[01:52] contributed several slides and information to this webinar. So thank you, Dr. Birkett. Again, this is just a reminder about the
[02:03] website where you can find all the information about this webinar. And homework assignment will also be posted on the same website. Uh last
[02:14] session, which is next week, we will be posting this homework assignment as Google Form, and it's due by March 23rd.
[02:22] And um for those of you who attend all webinars and complete the homework will receive a certificate certificate of completion in
[02:31] about 2 months after the completion of the course. So, with that, we'll start today's session. session. First, we will have a brief history of
[02:42] satellites with radar altimeters, which are used to monitoring lakes and reservoirs. reservoirs. Then, we will see how lake level height
[02:51] data are derived from these radar altimeters. altimeters. And we'll see examples of lake level height applications. Finally, we will have a demonstration of
[03:01] how to access lake level height data. So, we'll start with satellites with radar altimeters. And before that, let's
[03:09] see what is an altimeter. So, altimetry is a technique for measuring height. And a radar that is
[03:18] used for measuring height is called an altimeter, and it operates on on the principle as shown here schematically.
[03:26] A radar transmits a pulse to the target or Earth's surface in this case, and then measures reflected echo back. So,
[03:34] the time taken by a radar pulse to travel from the satellite antenna to the surface and back,
[03:41] combined with precise satellite location, location, it provides information about height. And satellite radar altimeters are used to get sea surface heights, wind speed,
[03:52] and currents. And as we will see next, there is a long time series of altimeter uh flying on
[03:59] satellites. satellites. As you can see, all the blue satellites are past missions. Um the green one are the current missions
[04:08] and the future missions are in orange except for the Jason mission, which is already launched a few months ago.
[04:16] But you can see that starting from '70s, altimeters flying um on on NASA satellite as well as on European
[04:25] satellites. The first one that uh we will see data from is TOPEX/Poseidon. It was launched in 1992. It's a
[04:34] collaboration between NASA and French space is agency CNES. Then this is European European uh radar satellite um GIOVANNISAT. Um
[04:44] and then NASA satellite Jason-1 and we said was again European space agency satellite. satellite. These are all past satellites. They had
[04:55] altimeters flying on them. And then the current missions uh that NASA has are um Jason-2 and Jason-3.
[05:05] And current recently launched Jason continuing uh series or Sentinel-6. And we will talk about some of these
[05:14] satellites. Especially we'll focus on the current satellites uh Jason-2 and Jason-3. Jason-3. Also, Sentinel-3 is a European
[05:24] space agency and Copernicus satellite uh which is um also which also has a altimeter. There is CryoSat. There is
[05:34] HY-2. This is a Chinese satellite. And there's Saral Altika, which is Indian Space Research Organization and uh
[05:43] French CNES space agency collaboration satellite. So these are currently flying satellites satellites um and a future mission is SWOT that we will
[05:53] see uh briefly, but we will focus on the data available from mainly from Jason-2 and Jason-3, but
[06:02] also there's a long time series based on Topex/Poseidon, Jason-1 uh and also there are data from Saral/Altika.
[06:11] Saral/Altika. Um so, we will see um how these data can be accessed. So, So, let's move to Jason-2 and Jason-3, which
[06:20] are the current altimeters flying. So, these two satellites uh so, Jason-2, which was ocean surface topography mission, uh and then Jason-3,
[06:31] uh they continue continue measurement of Jason-1, which was um after Topex/Poseidon, Topex/Poseidon, this was Jason-1 was NASA satellite that
[06:41] launched altimeter. Um Jason-2 and 3, they're collaborative missions between NASA, NOAA, uh CNES, and EUMETSAT or European um
[06:52] center meteorological satellite organization. organization. Uh these satellites, so Jason-2 was launched in in June 2008 and Jason-3 in January 2016. Both are
[07:08] currently flying. The orbits of Jason-2 every 10 days are shown here. The orbits are are circular and they are
[07:17] non sun-synchronous. They provide coverage between 60° South and 60° North. And again, the revisit time is shown here is close to 10 days.
[07:30] So, main instrument on both these satellites are altimeters. So, and and the name Poseidon, so product Poseidon-3 is flying on Jason-2
[07:41] and Poseidon 3B on Jason 3. Um there's also advanced microwave radiometer. So, this is a radar. Um then
[07:51] this radiometer it basically helps in uh looking at intervening atmosphere for correction to the radar pulse echo delay. So, that's
[08:03] for atmospheric water vapor correction. Uh DORIS uh which is for uh having accurate orbital uh position of
[08:13] satellite. Uh similarly, laser um retroreflector also helps in deciding um precision location of satellite. And so does
[08:26] does global positioning system uh payload. So, um there's radar, there's radiometer, and these are to actually make sure make um precision uh
[08:38] information about satellite location in orbit. orbit. These uh altimeters, they operate at two microwave frequencies. Um Ku band is
[08:50] 13.6 GHz and C band uh 5.3 GHz. Uh they measure range, so distance from the satellite to the Earth's surface from
[09:01] the radar echo. Um data are processed, then that's a major part of altimetry. Uh it's it's a complex process. And
[09:10] there are tutorials available online uh about altimetry. You can see here this site. site. Uh Poseidon 3 and 3B uh both uh measure
[09:23] height. They both have um So, Poseidon 3B is improvement over Poseidon 3. And as it shows here, um
[09:34] there are modes of measurements, and they basically either use stories or or digital elevation model. And so, those modes are selected
[09:48] differently in 3 and 3B, 3B being better at that. So, modes are switched when open ocean, coastal, and inland water bodies are
[09:58] measured. So, that's an improvement in 3B. 3B. Again, there are additional resources for details about altimetry tutorials.
[10:07] The links are provided here that you can visit if you're interested in learning more. Because getting data from radar
[10:18] echo, getting height of lakes and reservoirs, it's not a simple process. It's a complex process. Okay. Okay. And then this brings us to the Jason
[10:29] continuing continuity of service mission. mission. And that is Sentinel 6. It's also called Michael Freilich satellite, named after
[10:39] a NASA scientist. And it's an international partnership between NASA, NOAA, European Space Agency, EUMETSAT, and Copernicus. Copernicus. And these are some of the earlier data
[10:52] of height shown here. Um they It It the the the system will include two identical satellites designed to continue sea surface height
[11:04] measurements with radar altimeters. The first one, Sentinel 6, was launched in November 2020. 2020. And the second one will be launched in
[11:17] 2025 time frame. So, So, there's also a future mission upcoming that surface water and ocean topography or SWOT mission.
[11:28] Um this is planned for um um for 2020 time frame, but that's a joint development between NASA, French Space
[11:41] Agency, Canadian Space Agency, and United Kingdom Space Agencies. And um so it So, about a year from now it might
[11:51] be launched. It's designed to make a survey of Earth's surface water to obtain detailed measurements on how water bodies on
[12:00] Earth change over time. And it will cover about 90% of global lakes, rivers, reservoirs, and oceans at
[12:09] least least twice every 21 days. And some orbits are shown here. It will have Poseidon altimeter on it, similar to what is
[12:23] there on Jason 2 and 3 with the same frequencies, but it will also have a wide swath altimeter with Ka band
[12:32] frequency about 35 GHz GHz and have other instruments similar to Jason 2 and 3 to to get orbital position of satellite
[12:46] precisely. precisely. So, this will be launched and then it will provide river products such as height, width, and discharge.
[12:56] There is a If you go to you will see a video which shows how and I'm just going to kind of move
[13:05] through this, but you can watch it later. later. That how river height, width, and discharge will be
[13:12] measured. It is just shown in here. There can be multiple swaths covering different parts of a river.
[13:25] And then you can make a you can form something like this. So, multiple times it will be observed.
[13:32] Similarly, um there is lake product also, and it's height, area, and change in volume. So, at when SWOT is launched, again,
[13:44] this will be available. And this is mostly for your information. If you have time, you can come back and
[13:53] watch this after the session ends, but it basically shows how how SWOT's SWOT's are going to go over lakes and
[14:07] reservoirs and provide information about lake height, area, and volume, everything at the same time. Um we have lake level height data um
[14:23] derived from radar altimeters that we saw, some historical and some current. And that is available from Global
[14:32] Reservoirs Reservoirs uh and Lakes Monitoring or GRMON, that's portally shown here from Foreign Agricultural Service of USDA, that is
[14:42] Department of Agriculture. Uh this is the Crop Crop Explorer site that provides information uh about lake level
[14:50] height at the lakes shown in here. So, we are going to look at uh this site and see how to get this
[14:58] data, but before we do that, let's have an overview of how lake height is actually derived. So, here, uh it's important to know,
[15:09] like last week we saw for surface extent, we looked at MODIS or Landsat, we have horizontal images of lakes. That
[15:18] is not possible in radar altimeter because as you as we saw it is the pulse that is thrown and received back. So,
[15:27] altimeter instrument do not record images, but they collect radar echoes along the ground track. And altimetric range is derived from
[15:38] these waveforms, as you can see here. Narrow peak and broad peak um echoes you can receive. And with
[15:46] knowledge of the satellite orbit location and certain atmospheric and tidal corrections, the range can be converted to a surface
[15:56] elevation. elevation. And usually that is given with respect to a reference ellipsoid on Earth. So, that uh with respect to that ellipsoid,
[16:07] you can uh measure uh convert that radar echo echo with the orbit information uh to surface elevation.
[16:18] Um now, special resolution and temporal resolution resolution of altimeters depends on uh the tracks shown here. So, along track
[16:29] uh information of an altimeter data provide special resolution, which is a few hundreds of meters. Um so,
[16:38] uh and the temporal resolution is the across-track uh time that is taken that defines temporal resolution. So, here
[16:48] the white tracks shown are 35-day ground tracks. This is Lake Nasser in Egypt. So, you can see there are several uh
[16:57] tracks at 35 days. If you go at 10-day track, it is that there are not that many. It's This is the This is just one
[17:08] track. So, uh temporal resolution is decided by across-track timing, and then special resolution is the along track information.
[17:21] So, So, uh altimeter based lake heights are derived from the difference between satellite orbit height and altimeter range. And there is
[17:33] a reference cited here, which is given at the end of the presentation, that describes how it is derived. So, with
[17:41] respect to Earth's uh ellipsoid, um this range corrected for atmospheric contribution and Earth's tide contribution, contribution, uh
[17:55] uh lake height can be derived. Average height over a pixel is derived. So, it is just one number per pixel.
[18:03] And then it is sensitive to satellite orbit accuracy, radar range accuracy, and lake surface conditions. So, if it
[18:12] is a calm or smooth or if it is a if it is a rough surface due to winds or ice
[18:17] or precipitation, that affects accuracy of um height that is um derived from the range. Altimeters on Jason-2 and following
[18:31] mission show improved accuracy compared to previous missions such as Jason-1 uh and Topex/Poseidon. And again, the references are given here for more
[18:41] detail. And the four different lakes are shown here how um and uh so water bodies here you can see um
[18:52] So, this is uh Lake Different Barker in eighth um Lake Powell Reservoir, Lake Winser, and Great Salt Lake. So, these four lakes
[19:03] and um how their altimeter flies over them in narrow swath is shown here. And so, the information you get is where
[19:15] you have No matter how big the lake is, where the altimeter is looking down, that's where you get that lake level
[19:22] height. This figure shows an example of how validation is done of altimeter derived lake heights. So, usually it is done via comparison
[19:35] with in situ gauge data. And studies have shown that accuracies range from centimeters to tens of centimeters. So, the example shown is
[19:45] here here is Lake Ontario and this is Rochester gauge. So, Jason-2 derived altimeter data, so height data for 2000 and 2000
[19:58] 2009 they're shown here. And so, the black dots show gauge level height in in meter and the purple
[20:09] um um signs they show satellite height. And as you can see, um um you know, that there are some
[20:17] differences. There's a range of satellite data around this gauge data, but as you can see, the variations are
[20:27] very nicely captured. And so, of course, the accuracy is within a few centimeters, but basically you can
[20:39] see the variations, so going up or down that you can see with time. So, how many lakes and reservoirs are
[20:48] observed by these satellites? So, the current satellite radar altimeters uh view only a few lakes and reservoirs, just a certain
[20:58] portion of the largest water bodies, and that is shown here. So, there's actually a trade-off between temporal and spatial
[21:04] resolution. resolution. So, this is from Topex and Jason series. You can see that there are 10-day resolution lay
[21:15] available special resolution in the sampling of these water bodies about 800 out of which 330 are uh reservoirs, so
[21:24] which are artificial lakes. And the European Space Agency and ISRO's CNES series like Saral, they show these are 27-day resolution
[21:36] and so the sampling here is 1580 water bodies. Now, we saw earlier that there are more tracks when you have lower
[21:47] temporal resolution. And so you have more bodies covered here, what more lakes covered. And out of that, 400 583
[21:57] are actually reservoirs. So, there is common sampling of about 650 lakes and reservoirs. reservoirs. There are also
[22:06] continental water monitoring web resources. We already talked about this Foreign Agricultural Service Crop Explorer that we're going to see in a
[22:16] minute in a few minutes. And then these two sites also have information about continental water. So, that's just for your information.
[22:28] So, these these are all based on radar altimetry. altimetry. So, there are some clear advantages of using altimetry.
[22:37] First of all, it it contributes to information where there are no gauge site available. And we saw last week
[22:46] that worldwide there are millions of lakes and reservoirs. Of course, they cannot all be sensed through through
[22:53] altimeters, but in situ data even if they are there, if they're not available to everyone for any study or application. So, this way
[23:06] radar altimetry can provide a at least good coverage of larger water bodies all over the world. There's day night and all-weather
[23:16] capability because it's microwave radar. Generally, it's unhindered by vegetation or canopy cover. And surface heights are determined with
[23:27] respect to one common reference frame. So, there's if you have two very different geographical locations, even then the
[23:35] reference is the same. So, then the height can be compared which lake level height is bigger or
[23:41] smaller because the same reference. Repeat orbits so within a kilometer or so enable systematic monitoring of rivers, lakes, wetlands, inland seas,
[23:53] and floodplains as we saw in Lake Ontario. You can clearly see this monitoring over time. You can see
[24:02] that. that. Because of the repeat orbits. Surface water heights are potentially obtainable for any target beneath the
[24:10] satellite overpass. So, um wherever it is going, you actually can derive that height. The ability to monitor seasonal or interannual
[24:21] variations during the lifetime of the mission is possible and that's what it's it's used for as we will see in the
[24:28] applications. Also, the techniques to derive heights are validated and so these are some of the advantages. advantages. Of course, there are limitations.
[24:40] The satellite orbit scenario determines a special and temporal coverage as we saw. saw. Data can only be retrieved along a
[24:48] narrow neither swath. Highly undulating or complex topography may cause data loss loss because the range is affected by that.
[25:02] And um height accuracy about a few centimeters to tens of 10 centimeters of root mean square error
[25:11] can be seen in large open lake lakes and it it is dominated by size and surface roughness of the target. So, we saw that
[25:22] earlier also. Major even wind events, heavy precipitation, tidal effects, ice formation, they all affect data quality and accuracy.
[25:32] Um mini minimum target size is about 50 to 100 km square is also dependent on many factors
[25:42] and what you see is actually average height or the uh footprint. Um it it's not a point measurement.
[25:54] So, these are some of the limitations. So, if but in spite of that, we will see that these data are used for several
[26:05] applications. applications. And a few examples are shown here. So, this is again this G-realm site from FAS. And what this shows is
[26:17] Mosul Dam, Iraq. This is Lake Tahoe in arid region. It it allows you to monitor um how lake level height is changing. So,
[26:29] time series is shown here for this particular lake. So, again, where there are no gauge data, you can at least get some
[26:40] information whether it is above average or below average lake height, you can see that. Um it is used for agricultural decision.
[26:51] And so, this is the crop explorer site. So, multiple satellites and ground-based and model data sets that are all
[26:58] included in here. And so, this data set altimeter based heights are included in here. And this is for
[27:09] in assisting for agricultural based decision decision because several reservoirs and lakes they may be used for irrigation for
[27:19] example. So, then lake level height information is very important. Applications for drought and agriculture that's shown here. These three lakes are
[27:31] in Middle East. This is Base here and Buhayrat and Urmia. So, Turkey, Iran, Iraq. Iraq. What it is showing
[27:44] is that there is a large-scale drought going on. So, all these lake levels are dropping in in this 2001-2002
[27:54] time frame. And so, that indicates um um droughts. So, then there is there is recovery. So, it allows
[28:03] one to see when there is deficit of water and then when there is recovery either because of rainfall or
[28:12] from from other sources. So, um that way even if you just have one measurement per lake, it allows you to kind of see
[28:22] how things are changing in time. This example shows how lake level height can be useful for not only just water
[28:34] resources monitoring, but also in this case for energy resources monitoring. Um the example is shown for El Niño season
[28:44] in Venezuela. There is a reservoir, Hoover Reservoir and Hoover Dam is shown here. It's one of the
[28:54] largest hydropower facilities in the world world and and that provides energy for large part of the country.
[29:04] But it El Nino related drought that you can see in in this area. By the way, the the time series shows
[29:13] altimeter height variations from Topex all the way to Jason-2. So starts from 1992 and goes all the way to 2014 in
[29:23] this case. And important thing to note here is this period, El Nino period when there there was drought because of lack
[29:33] of rain and then the lake level height dropped so much all almost that reservoir reached that dead level. So
[29:42] that not only there was a problem with water resources, but also energy generation generation was was affected and there were power cuts
[29:53] because of that. Not only that, as the news news shown here in from the from the media
[30:02] that even after rain started coming back and water level started coming up, still there were power cuts going on just to
[30:11] kind of catch up with what had happened in the previous year. So if this monitoring monitoring important reservoirs also that was
[30:21] important for energy resources management. This application also is for El Nino La Nina and this is in Zambi Zambia and Zimbabwe
[30:36] where Lake Kariba water level, as you can see, Um, it is the the dry period and uh the power generation got
[30:46] affected. So, this monitoring lake level height allowed to kind of monitor how it affects power sector. Uh, just like drought, there's also
[30:59] applications for flood monitoring. This is in Lake Victoria and these two periods are shown here. Again, these are
[31:07] like 19 798 and 2020 floods which Nile Nile River floods which are kind of indicated in Lake Victoria height
[31:21] above normal as you can see here. Uh, also a a study showed that monitoring lake level height can also
[31:36] help in monitoring fish catch potential. So, that's also very important application. So, it is not just water, but also for
[31:48] fish catch or for that, for flood, for drought, for energy monitoring lake level height data are useful.
[31:59] Now, Now, what the future looks like. So, So, again, this is from Dr. Birkett. Many hundreds of lakes and reservoirs
[32:11] will be added as we go forward as we have new missions and Chirps will continue to supply all
[32:20] of that. So, blue show current Jason lakes and red one show potential and we set lakes that will be included and
[32:30] these are all crop lands are just shown here. So, additional lakes will help for agricultural applications. So, this is what is in plan.
[32:42] And uh this is the site that we mentioned last week. It is under construction right now. It is global
[32:48] water monitoring. Um so, it will it provide information about um lake extent and storage as well as water
[32:57] level products for wetlands and rivers. And next year either later this year or next year, this site will definitely be um
[33:07] operational. And it will provide all the satellite-based data products relevant to lakes, reservoirs, river channels, wetlands, and global mean sea level.
[33:18] And so, um we of course when the website is up, um we will be providing information about
[33:26] that also. And so, the global water monitor for the river reach and water level variations will be included. This is for um example
[33:36] shown here is for Alaska stream flow in 2018 2018 that how um so, Yukon River height variations are shown. So,
[33:47] um not just lakes, but river channels will also be monitored. Here's um a an example of wetland in in
[33:56] in Tanzania. This is um Usangu Wetland. And that also water level uh will be monitored and it
[34:07] will be available from global uh water monitor. monitor. Which is really useful not just for water and energy resource aid, and
[34:15] agriculture, and also for conservation, uh and for ecosystem management and protection. So, um this also is coming
[34:23] up in global water monitor. And so, the global water monitor uh will have lake levels, extent storage and
[34:33] state status indicator. So, So, um, um, so such as, um, storage and status tab will tell you, um,
[34:43] so stakeholders can go directly there and see if there is, um, drought going on, if the recharge is already started.
[34:51] And so that quick indicator will also be available for, um, decision making. And so, um, um, I think it the site is, um,
[35:02] will be up, uh, later this year, but definitely by early next year this will all this will be
[35:10] available. available. With that, we're going to, um, stop and look at, uh, the G-REALM site and see
[35:19] how to get, um, how to access existing lake level height data. So here we are going to have a
[35:27] demonstration of how to access lake level height from altimeters. Um, this is based on this G-REALM site
[35:35] that we've talking, we have been talking about, uh, from USDA Foreign Agricultural Service. So there are two maps you will see here,
[35:45] uh, and all the dots they indicate location of lakes. Um, one thing to note here is that all the lakes we see here
[35:53] in on this site are, uh, 100 km squared and above. That's the size. You can, um, move your
[36:03] cursor to any of these dots and it shows, shows, which lake it is. Uh, also notice that there are two maps,
[36:12] top and bottom. The top one is with respect to single satellite overpass. So this is, um, near real-time product, uh,
[36:22] with, um, single satellite overpass. So when we look at the height, we'll see height um, in meters above mean sea
[36:31] level and variations in height with respect to single satellite. Whereas, if you go here and pick on any of the dots,
[36:39] it shows status data with respect to multi-year mean. So, the reference here in this map is taken from TOPEX era
[36:49] 1993 1993 to 2000 time frame. So, So, the deviation in height or variation in height that are shown in this map are
[37:01] with respect to that mean. Before we actually look at the data, let's quickly look at the left-hand side
[37:08] panel to see what's available. There's some useful information here. So, here there are all the missions that
[37:17] we talked about. We focused on Jason-2 and 3 when we talked about instruments, but you can go through these missions
[37:25] and learn more about European international missions available where altimeters are available. Altimetry data and tutorials are available from NASA PODAAC and AVISO. We
[37:37] talked about NOAA also has information about altimetry data. There is information about ground-based data data over the US, South Africa. There is
[37:49] global lakes and wetland data available. Also, Also, floods and droughts related websites are listed here, such as Dartmouth Flood
[37:58] Observatory. There is NASA TRMM GPM rain, flood, and landslide monitoring site, NOAA floods, and US Drought Monitor. These data are complementary to
[38:10] lake level height variations. If you look at the top, here you will see link to Global Water
[38:19] Monitor when it is up. It can be reached here, reached from this side also. These two, the top
[38:31] This is the list all the lake where they are located, which continent and country, which type of reservoir it
[38:41] is. is. More importantly, it shows what temporal resolution is available for that particular lake. Depending on which satellite overpass is
[38:53] available, so Topex-Jason series 10 days ERS-ENVISAT-SARAL ERS-ENVISAT-SARAL series 35 days and Sentinel series 27 days. So, these are available and then
[39:07] this is the time coverage overall for that particular lake. The second one shows all the lakes for
[39:14] which this long-term mean reference is used and variation in lake level heights are available with respect to that reference. So, again,
[39:25] same sort of information with temporal resolution here. here. Then there are recent updates. Also, you will see that in this
[39:43] background, a lot of information is available about data processing about altimetry itself. All the missions are given here, the timeline and a more
[39:55] complete list of international satellites which carry altimeters there shown here. As you can see the the ICESat, which is already in
[40:07] orbit, we're going to talk about it next week. SWOT will be launched next year. And so, here is a more complete list of
[40:15] satellites with altimeters. Then, there are advantages and limitations that we talked about already. already. Um Um data sets themselves are described here.
[40:29] So, especially the products, and it explains that the lakes are greater than or larger than 100 km squared are included in here. And
[40:41] then, future we will have other lakes which are 50 to 100 km, they will also be included. And then,
[40:51] it talks about the two different products, the one with single satellite reference as well as one with multi-year
[40:58] mean reference. So, with that, let's just look at how to get lake level height. So, So, to be consistent with what Shawn
[41:08] demonstrated last week, let's look at Lake Winnebago. We looked at Lake extent for Lake Winnebago. Here, let's look at the lake
[41:18] level height. If you click you look at the lake and click on that, you will get the time series of height
[41:26] lake level height variations. So, this shows height variations millimeter above mean sea level, and this is with respect
[41:35] to the single satellite reference in meters. So, as you can see, the top panel is raw data this time series of height level
[41:47] variations, and this is the smoothed version of the same data. As you can see for Lake Winnebago,
[41:55] range range of variations is relatively less compared to this in Jason era compared to this Topex satellite.
[42:07] satellite. You also see where there is below Um lake level height was there in 2014. This shows
[42:18] satellite track and over Lake Winnebago. And information about lake can also be found where it is, what kind of watershed
[42:31] management processes are going on, biodiversity, biodiversity, and also different socioeconomic conditions are also described in certain cases. So, here's information about
[42:43] lake. Now, if you just click on it, you will be taken to the file itself that you can download. Information about the
[42:51] lake itself is there. The data are listed here. The time series is given here. And which each column is described
[43:00] here. The most important thing to note here is that, of course, the satellite is listed. Um Um date and time and source are provided.
[43:10] This is the height variations if that's shown here here in in target height variation with respect to
[43:19] Jason-2 in this case. So, that's column six. Impor- Something else to note here is these acronyms shown here. And that is
[43:31] just to summarize that we talked about atmospheric correction. So, this is wet tropospheric correction and dry tropospheric correction applied
[43:42] to altimeter data before heights are derived. And for that, different models are used. And so, which model is used for which one, and
[43:53] that is just described here. So, that's what these acronyms that you see here are. And so, you can go through this
[44:01] file basically to get the uh uh lake level height variation data and you can just go to file and save
[44:12] page as. This allows you to save this file as text file which I already have saved. So
[44:21] on your computer you can just save this file file and have that time series data on your
[44:26] computer. So if you go back we can also look at Itaipu that Shawn demonstrated last week for
[44:40] Lake Extent. This is Lake Itaipu in Brazil, Paraguay and Argentina border. If you click Okay, sorry. So here's again the same
[44:53] information but important thing to note here, this is smoothed version if you can see in last several years there have
[45:00] been several episodes where lake level height has been quite below average. So that's what is shown here.
[45:12] Looking at the second map which is where long-term mean multi-year mean reference is used. Again, if you click on Lake Winnebago
[45:23] you will see this mean level is this and with respect to that variations are shown here. So this again
[45:33] just shows how things vary with respect to that era. So this information tells you how lake level height changed over like
[45:46] between between that 2000 decade and all the way to now. So that is what is important. If there's
[45:55] any long-term trend it becomes visible in here. So basically again here also you can click and download the data. You can
[46:03] explore explore different lakes. Go in here. This is And as you can see there are sometimes missing data.
[46:17] But basically it provides variations in in time. So this basically concludes our demonstration of this data and then
[46:30] let's go back quickly to the presentation slides. Here are the references we mentioned in the presentation for your information. Also,
[46:42] there is contact information and our set webpage and training webpage are given here. here. With that we
[46:52] conclude today's presentation. We will have question answer session now. So please enter your questions in the Q&A
[47:01] box and we will answer them in order in the order that they were received. We will also post the question and
[47:08] answer answer on the training website after the conclusion of the webinar. So here's let's go through the question and answer
[47:19] now. Okay, thank you. Hello everyone. So let's start with the question answer. Question one, is it possible to measure
[47:37] the ultimate tree of lakes using Landsat data? I said no, it is not possible. We need need this technique focuses on ultimate tree
[47:47] and Landsat does not have an altimeter. It's an imaging instrument. Imaging instruments on and the series. series. it it it can only give you surface
[47:59] extent. extent. Sentinel 1 was not mentioned in this particular webinar because it does not have an altimeter. Sentinel 3, on the
[48:11] other hand, has an altimeter, which we mentioned. Sentinel 2 is has similar imagery to Landsat with a little higher resolution,
[48:22] so that was mentioned last time. And for for we didn't through the when we went to the question answer sessions last week,
[48:32] we also talked about using Sentinel 1 for for extent mapping or for wetland mapping. Yeah, so what did question three
[48:51] getting radar altimeter echo over lakes and reservoirs is a complex thing, would you elaborate on that? So, getting echo
[48:59] is one thing, but getting height from that echo, that is what is more complex. And so you we
[49:06] refer to the tutorial. So, what we focused on available height data, which are already derived from altimeter. But if you want to use
[49:19] say Envisat data or Sentinel 3 or even want to explore Jason data for other lakes that then you will have to go through that
[49:31] processing of data. Correction of data. The range depending on what atmosphere is intervening. So, that there are several steps, and so we
[49:46] recommend that you go through the tutorial and also look at Dr. Birkett's papers that we have referred to. Um so
[49:53] so technique is validated and has been used since 90s with success. So it you know, but it's not something
[50:03] uh that you take altimeter data range and then you will get height data very easily. There is a there there are processing
[50:12] steps in between. That's what it means by complex. Is the Jason 3 data available for India and is it free? Yes. So all
[50:24] these data are all free that we talked about from NASA. They're all open source data. data. So Topex, Jason 1, Jason 2, Jason 3,
[50:34] Sentinel 3, they're all open data. Yes. Saral Altika, of course, is there. How is average height derived per pixel
[50:47] in in altimetry? Is if the radar measures the echoes, how can you tell the distance per pulse with backscatter?
[50:56] So that is what we mean by complex processing. processing. It is wherever when we saw um on on one lake or a water body, there
[51:08] could be multiple repeat cycles. And so you do sometimes have multiple height information one per pixel, but
[51:17] that you can average. And and come up with average the height. So per pixel, it is just one
[51:26] it's it's not average height data per pixel. It's one height which which is a reflection of what
[51:35] would be average height in that pixel. So if any satellite footprint you see that you see a composite picture over
[51:42] that footprint and that's what it is here also. Is that irresponsible to assume that the water level of the reservoir is the same at
[51:57] one time epoch? Or some other requirements should be met when we use the average height to estimate the water volume in the
[52:11] reservoir. reservoir. So, that is a good question because um The information we have right now, that is what we can use. We have extent and
[52:22] we have average height. Um So, that that's all can give you estimate mission of volume. That's why I it is important to have in
[52:35] situ data so that you can see by using remote sensing data are there any what what kind of errors you're getting are
[52:43] there any biases in the area in the reservoir of your interest. But that this is one of the limitations that here
[52:50] you have extent and you have one lake level height data per lake. So, if it that that's all you have right now.
[53:01] Assuming one has access to both radar altimeter and lidar data, is the radar altimeter preferred for water level
[53:08] measurements? Um I don't think there's that is true. You we will see next next next week we talk about I said data and
[53:20] that's a laser altimeter. So, it's an altimeter but it uses laser. So, um If you have lidar data flying on
[53:34] on say airplane um over a particular reservoir at uh especially small reservoir where satellite radar altimetry cannot help, I
[53:45] think lidar would be used more useful, yes. yes. Can the altimetry be used for monitoring tsunami? So, um
[53:55] ocean uh for ocean So, for ocean uh level height, um sudden variation would would be indicative when there is
[54:12] tsunami. So, I believe that yes, it could be used. Is the data for Saral Altika free to
[54:24] download and use for research? Um I will have to look uh back into that, whether it's available freely or or not.
[54:33] Um but, lake level data derived from Saral Altika are um part of the G-REALM data set. Uh can we estimate silt deposition in
[54:54] reservoirs? Um we uh we had this question last week also. Um Um I I just by using remote sensing, one cannot
[55:03] estimate how much silt deposition is there. Extent changes as um silt comes in, and that we can see from satellites
[55:14] as uh we saw for um one of the lakes in Middle East, uh or Caspian Sea, I believe, that uh how
[55:23] extent was changing. And so, that you can see, but you cannot estimate how much silt went in just from this uh this
[55:29] data. You have to use a model, I believe. Um laser altimetry will be uh question 11 is uh will
[55:47] it be mentioned that how it can help in overcoming some of the limitations? Yes, next week is about uh ICESat-2 laser
[55:56] altimetry, so we'll we'll talk about that. We will have a guest speaker who is an expert on laser altimetry deriving data based
[56:06] on laser altimetry. Is there a list of lakes which will be included in the water level monitoring
[56:16] network? network? Um and what would be the special resolution? So, our global water monitoring um their their goal as was mentioned is
[56:28] about Right now, all the lakes above 100 km square are observed, but to go down to about 50
[56:37] to 100 km is the km square is the goal. goal. List right now, I don't think is
[56:46] available, but as soon as the global water monitoring site is up, um it should be available. Uh some known lakes, this question 13,
[57:08] some known lakes in my country haven't been captured. What is the reason? Is it the area, depth, or other reasons
[57:16] for this? So, um primarily, it should be area. If it is below 100 km square, you will not see uh
[57:25] the lake captured there. Um I think that would be the main reason. Also, it's possible that some of the lakes were
[57:43] based on where they were located, were there in situ data available that they And we will look into that, but
[57:52] primarily it is the it is the area or the size. Can we use the altimeter data for
[58:00] monitoring lakes in mountains region like Himalaya? As we saw, one of the limitations is that if there's a complex topography,
[58:12] it is hard to interpret radar echo. So, I it is I one has to do research on
[58:20] a particular lake looking at altimeter data. I I'm not sure whether any Himalayan lakes are included in the database
[58:31] itself, partly because of this reason. Could the use of the radar altimetry technique confuse lake shores with wet
[58:41] soils? soils? Um Um I'm trying to think. So, if altimeter is flying in the coastal region, region, then
[58:59] then you probably most likely would not use that information or you would not get data for that.
[59:07] Um Um but I believe that I know I'll I'll find out exact answer, but I believe that
[59:15] for for for SWOT mission, they have been working on coastal region, so I I will have to Um,
[59:26] for a specific answer to your question. But, I I'm I'm still out thinking here that um, lake shores and wet soils,
[59:39] um, altimeter, uh, I'm pretty sure would have, um, issues with that. Is G-BAM already calibrated with gauge station data? Also, is it
[59:55] available to obtain data in G-BAM in table format? Um, so yes, that's what was shown. Okay, first question, are
[1:00:05] they calibrated with, uh, gauge station data? I'm not sure whether every lake is calibrated. Uh, wherever in situ data
[1:00:15] are there, I'm sure they are, um, calibrated. Um, there is a section about validation and calibration, um, in Dr.
[1:00:24] Birkett's paper. Um, He He We saw that you can download each lake file as, um, text file. So, and then you
[1:00:36] can use, uh, Excel to read that. Why is lake height positive and negative? Because it is a variation with
[1:00:51] respect to a reference. That's why it is positive and negative. It is not absolute lake level height. It is
[1:00:58] variation in height. How long does it take for the radar signal to travel from the satellite to
[1:01:14] the Earth's surface and back? So, So, um, um, It is basically it's the electromagnetic as I think Shawn must have answered
[1:01:24] this. It's electromagnetic wave that travels at speed of light and so that when it comes back that time it takes
[1:01:35] for a radar pulse to be reflected that echo echo tells you how much distance it went through and came. That's what provides
[1:01:43] height information. Are there any data sources similar to GRACE but for smaller lakes? Not that we are aware of, no. There are
[1:01:56] no data sets based on altimeter which are for smaller lakes out there. So question 20, what does it depend on
[1:02:15] which lakes are chosen to monitor? I see very few European ones. In is this bound to change or is there any other platform
[1:02:24] which has other data available? Altimeter data are available from all satellites and you can derive height for
[1:02:34] lakes as long as big enough you can derive it I believe. It I the the I have I think the lakes are chosen
[1:02:44] based on it because the GRACE data which is there it's mostly for foreign agricultural service of USDA so lakes
[1:02:54] which are really important for this applica- their application are monitored. monitored. So that's one of the reasons.
[1:03:04] But as you saw in in future there will be more lakes and reservoirs included in the database.
[1:03:18] So here um how how to get data in lakes and reservoirs not listed here, then you have to start with altimeter data
[1:03:28] themselves and and process the data depending on the size of the lake you are interested in. If it is small lake,
[1:03:36] um this data will not be useful. How to calculate the mean level? Does this mean more than one satellite?
[1:03:46] Or do you have other means to measure the mean? So uh that that there are um um multiple time um
[1:03:56] going going over this So between say in this case 1993 to 2000, same satellite goes over a
[1:04:05] lake again and again in so many years. And so based on that mean height is derived. derived. So you have many samples in so many
[1:04:15] years for even from the single satellite because because either every 10 day or 35 day that reservoir is is is sensed and then the
[1:04:25] mean is calculated based on that. Do you have any GEE code for accessing lake heights? I don't believe that these
[1:04:37] data are in GEE, but Sean can correct me if I'm wrong. Currently no. At least have the data
[1:04:46] sets that we're referencing today are not, but hopefully they will be uploaded in the near future. How do you account for missing values?
[1:04:55] Really there is um um no way from satellite to when satellite data are missing, then those values, if if it's just a few
[1:05:07] samples missing, perhaps you can just interpolate, interpolate, but otherwise you need in situ data to for for that missing
[1:05:17] time series location. location. Does the radar altimetry on the satellite measure along a single line only or the data is from several line
[1:05:28] transects along the lake? Yeah, so um at at any time you we saw one swath, but over time yes, there are
[1:05:39] multiple swaths and then there are lines that could be transects, yes. Why is the Ka band in the microwave
[1:05:56] region more preferable over other bands such as C or X band? Um I am not sure if you're asking about
[1:06:08] Sentinel 6, I believe, which has Ka band altimeter. Um it has a partly because it has a wider swath in this
[1:06:18] case. case. Um Um So, that is one of the reasons I can think of, but other uh altimeters like Topex/Poseidon has Ku
[1:06:32] band and C band. So, we'll we'll find out the exact answer, but uh it must be these swath
[1:06:40] width that must be one of the reasons. Is there any way to measure the height of lakes tens
[1:06:46] less than 100 km squared? Not with um altimeters flying on current satellites, no. Is it possible to measure lake level
[1:06:58] variations of small lakes using SWOT or any other existing mission? Uh again, yes, a smaller than 100 km
[1:07:11] squared, several lakes will be included. Um, but if you there are less than 50 km squared, squared, um, not sure whether even SWOT will be
[1:07:21] able to resolve. Should we consider one satellite measurement or more than one for the small same lake? What do you recommend?
[1:07:35] So, I I I I believe that the the the time series that you see uh, from G-REALM, they are from multiple
[1:07:45] satellites and they are intercalibrated. So, So, if you want a continuous time series, you have to use uh, multiple satellites,
[1:07:54] for sure. If you are If you are happy in current time, if you just want to monitor lake
[1:08:00] level height, um, I I guess if you just follow one satellite and if you have in situ data
[1:08:07] in the lake of your interest, you can derive what kind of biases and errors are there. So, then you have better
[1:08:14] estimation of accuracy. Uh, how do you perform an accuracy assessment uh, to validate the results when working with radar altimetry? So,
[1:08:30] the height derived from altimetry, they're compared with gauge data, as we saw for Lake Ontario, the example was
[1:08:37] shown in the presentation, and there are other other uh, validation studies as well. Um, so, where you have gauge data, you
[1:08:45] compare lake level height and and that tells you um, how accurate it is. So, it helps you
[1:08:53] assess that. So, um, there is calibration differences uh, between altimeters. altimeters. I believe there are. Uh It is known that compared to Topex and
[1:09:13] Jason 1, Jason 2 and Jason 3 have better accuracy. How can we access Sentinel 6 data? Sentinel 6 data are not out yet.
[1:09:28] Uh later this year they will be available. Deep learning model would be the best to use to get an image in a high
[1:09:38] resolution. resolution. I am not um It's not my expertise to talk about deep learning model, but we can find out
[1:09:47] about that and let you know. Radar altimetry measures sea surface topography. We have satellite ellipsoidal height. We get mean sea
[1:09:58] level height at the end of the study. How do we get precise undulation information to con- to conclude the result?
[1:10:09] Uh Uh So, I think looking at time series, uh you can gauge how sea level height changed, but
[1:10:20] for for a single measurement, you have just one height. That's it. Must we use specialized software to pro-
[1:10:42] process the radar collected by radar altimeter in order to get the height. Could you mention a few of them? We
[1:10:49] recommend that you look at the tutorials we mentioned from NASA PO.DAAC and AVISO. Uh they are uh
[1:10:59] dealing with this issues and and uh software that you can use. Can the altimeter be altimeter be used
[1:11:11] for extracting the baby metry or lay of lakes? Uh we will have uh next session we'll talk about uh
[1:11:19] uh lake baby metry from ICESat-2 data. I noticed many lakes and reservoirs in the western US are missing from G- along
[1:11:28] site. I was meaning Is there a simple explanation for that? Um Um No, I I'm not sure. I think this was US
[1:11:42] GS selection for these lakes for foreign agriculture service they included these lakes. Um we will find out exact reason, but I
[1:11:51] believe it was um application base decision of which lakes to include in the data set. Can altimeters be used for detection of
[1:12:21] shoreline position? Um Um I think you need an you need an image to do that. Altimeter would not provide an image.
[1:12:34] It's just radar echo uh at nadir. So, you need optical data like we talked about last week to look at shoreline uh
[1:12:44] where it is. What are the limitations when we want to apply ultimate ultimately to the coastal area. What are the processing steps?
[1:12:59] We will talk to the altimetry expert and let you know exactly what the processing steps could be.
[1:13:07] be. Again, Again, as I mentioned in the previous question is that this is not um um you will not get an image. It just
[1:13:17] happens that um altimeter is flying over coastline um and looking at neither at coastline, then how the process has to be done is
[1:13:28] we will we will let you know. We'll look into that. Can we download yearly data from global
[1:13:39] surface water? When I'm downloading, it comes in a TIFF file for 2019 only. How can I change it
[1:13:52] for in between data download? So, this is for um global surface water from last week, I believe.
[1:13:59] believe. Um Um I I I think you have to pick time period for that, right, Shawn? Which year you want?
[1:14:08] Um yeah, so the the global surface water product that we demonstrated last week is really looking at the entire time
[1:14:15] series from '84 to 2019, but there are some other data sets that GRC puts out that are uh based on monthly as well as
[1:14:23] yearly water classification. So, it gets to more the interseasonal as well as interannual. And uh we will put some
[1:14:30] links to that uh to the code to be able to learn more about how to access that
[1:14:33] data. So, so question 41, do you know methods to derive water body bathymetry if you have a time series the water extent and
[1:14:49] water level. Um Um not from those two you you won't be able to derive baby metric but we will see next week again how uh
[1:15:00] baby metric is derived from laser altimeter. altimeter. Um when you say can storage change be accurately estimated?
[1:15:11] Um Um so you will get an average baby metric or lake height um and then you have lake extent so when a water
[1:15:23] body body because of the repeat cycle if it is um um different parts are sensed uh over some
[1:15:31] time then you can get some idea of average height but um that's the only information you have
[1:15:39] lake level height and extent uh just one lake level height when when altimeter is passing and you and you
[1:15:48] look down at meter and get that data. So estimate it's an estimation. How accurate? Again, I think it varies from
[1:15:57] lake to lake. Is it possible to monitor water level height under the forest cover? So So um
[1:16:08] um if you look at this the SWOT global water monitor will have wetland wetland um covered in in their their database.
[1:16:19] They are trying to get uh a water level height in in wetlands. Um in tropical forests um
[1:16:28] um I'm not sure. We'll find out. Can you explain the way to read the lake height you lake mini bagel?
[1:16:39] Well, mean target height is Um but the lake profile states mean depth is 4.7 m. So, um
[1:16:54] um this height, 161 m, it's above mean sea level, variation above mean sea level. Um whereas um mean depth of the lake is
[1:17:05] with respect to the lake geometry. So, that's what um that was the difference is here. How effective are these altimeter
[1:17:20] measurements for water levels of estuaries? So, against what um is working on the SWOT mission will have um
[1:17:29] altimeter measurements used for estuaries. So, those studies will be coming out when the data come out. Again, I believe it will depend on the
[1:17:41] size size that satellite can see. Satellites that will gauge river discharge and height, does it include uh every type of river? For example, how
[1:17:55] much much uh uh precisely it will be in the case of mountain rivers with higher velocity flow. So, again,
[1:18:05] uh uh that remains to be seen because for mountain region with complex topography, topography, um we don't know how accurate altimeter
[1:18:16] uh data would be for deriving height. So, So, um um I think it is still being validated or
[1:18:24] uh studies are being conducted how accurately which river can be sensed. Um Um we don't have that information, but uh
[1:18:33] we can um look into that and see what information is available. So, I think there are some great
[1:18:52] questions here and um um some of the questions we don't know definite answers to and partly because
[1:19:01] um um some some some questions as um there are there are limitations with what we measure. Um but we will be um
[1:19:12] editing this question-answer uh session and then posting it online for your information. Next week we will have our concluding
[1:19:22] session with laser altimetry and ICESat-2 data for lake level height and bathymetry. bathymetry. Um and we'll see how to access that data
[1:19:32] as well. So, we hope to see you next week um at same time. And um thank you very much for attending
[1:19:40] this session. I want to thank all my ARSET colleagues here, um Shawn McCartney, uh Brock Pleavin, Jonathan O'Brien, and
[1:19:51] uh Selvin Hutson. They have been uh great in organizing this webinar, um setting up, and editing presentations.
[1:20:03] So, So, thanks everyone for your help. And we hope to see you next week in the last session of this webinar series.
