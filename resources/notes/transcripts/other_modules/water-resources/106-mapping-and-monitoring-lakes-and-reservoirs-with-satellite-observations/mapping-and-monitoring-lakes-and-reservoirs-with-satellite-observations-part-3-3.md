# Mapping and Monitoring Lakes and Reservoirs with Satellite Observations, Part 3/3

`https://www.youtube.com/watch?v=-wVpoYszRCs` · id 14 · 1:30:32 · module 117 — Mapping and Monitoring Lakes and Reservoirs with Satellite Observations

[00:04] Hello and welcome back to the third and final part of the ARSET training, mapping and monitoring lakes and
[00:11] reservoirs with satellite observations. We are honored to have two guest presenters from NASA's ICESat-2 team with us today, Dr. Michael Jasinski and
[00:23] Sabrina Delgado. Michael and Sabrina will be presenting on surface water heights and bathymetry for lakes, reservoirs, rivers, and
[00:36] coasts using ICESat-2 laser altimetry. As a reminder, there will be one homework assignment which is accessed from the ARSET training page.
[00:49] Answers must be submitted by Google Form by the due date of March 23rd. A certificate of completion will be
[00:57] awarded to those who attend all live webinars and complete the homework assignment by March 23rd. You will receive a certificate
[01:07] approximately 2 months after the completion of the course from Marilena Martin. I now have the honor of introducing Dr.
[01:17] Michael Jasinski. Mike holds a science doctorate in hydrology from the Massachusetts Institute of Technology. He is a research hydrologist at NASA's
[01:27] Goddard Space Flight Center and is the hydrology lead for the ICESat-2 science team. team. He's also the principal investigator for
[01:36] the ICESat-2 inland water data product. We are delighted to have him join us today and without further ado, I will
[01:44] pass it over to Mike. Hi everyone. Welcome to the NASA Applied Remote Sensing Training Program. The title of our talk today is analysis
[01:56] of surface water heights and bathymetry for lakes, reservoirs, rivers, and coasts coasts using ICESat-2. I'm Mike Jasinski. I'm a hydrologist at
[02:06] the Goddard Space Flight Center and a member of the ICESat-2 science team. team. Before we get started, I would first
[02:13] like to thank Shawn McCartney, Amita Amita Mehta, Mehta, and Sabrina Delgado Arias for helping put together this presentation.
[02:25] The line of this presentation is first, an overview of the ICESat-2 mission and the science data products that come from
[02:33] the observations. Second, a more detailed look at the inland water data products or also known as ATL13.
[02:42] Third, analysis tools that ICESat-2 has provided for evaluating the raw data as well as the data products.
[02:54] Uh next, a more detailed look at a a particular inland water case, that of Eagle Lake in Northern California
[03:03] in October 2018. Uh finally, a look at the applications of the products to 2D bathymetry followed by a
[03:14] summary and acknowledgements. Now, here's a quick quick mission overview for those who are unfamiliar with ICESat-2. ICESat-2 was launched in mid-September
[03:26] 2018 and started producing data products a month later. The instrument aboard ICESat-2 is the Advanced Topographic Laser Altimeter
[03:34] System or ATLAS, which is a micro pulse 532 nm lidar with a 10 kHz pulse rate and a single
[03:42] photon detection capability. The The lidar is split into six beams, three pairs of strong and weak beams
[03:50] with an energy ratio of about 4 to 1. And it contains a approximately 11-m footprint. footprint. Now, when you add in the factor that
[04:00] there is a ground speed of about 7,000 m per second, you can see on the figure at the right
[04:06] what this uh results in. It results in about only a 70-cm translation between the pulses, which delivers therefore a nearly
[04:18] continuous altimetry of the surface you're looking at, whether it's land or water. A few words on the ICESat-2 data
[04:29] products. products. Up to now, most of the effort has been on the development of continuous along-track products for six general
[04:37] areas of geophysical products, including land ice, sea ice, vegetation, atmospheres, oceans, and inland water. These are pretty much in a mature stage,
[04:48] and one doesn't expect major changes to them in the future. Most of the action now seems to be in
[04:56] the development of the gridded products uh in this tan area. In the particular case of inland water,
[05:04] gridded products don't really make a lot of sense, and we are more focused on developing the means for
[05:10] each of the water crossings. Now, an interesting feature to point out is ICESat-2's unique observation strategy, one for the polar regions and
[05:21] one for the non-polar regions. In the polar regions, there's an exact repeat after every 91 days. But in the non-polar regions,
[05:31] after the first 91 days, the instrument off-points for the second 91 days, resulting in a strategy as shown in this
[05:39] figure below for Lake Erie. After 1 month, there were 10 crossings. After 3 months, or the first 91-day
[05:46] cycles, there was about 30 crossings and and after the next three additional months, there was 60 crossings but all in different areas.
[05:59] On this slide, I would like to provide further clarification of what is meant by the ATL13 along track product.
[06:07] So, if we start on the left, we have the principal highlighted geophysical products for inland water which include the height of the water
[06:17] surface in both geodetic and orthometric units, the subsurface attenuation coefficient, along track slope, the standard deviation of the water surface,
[06:26] significant wave height, water depth and wind speed. And these sort of top level products for inland water are supported by a large
[06:35] number of secondary products, only a few of which are listed here in the table. Now, in the middle, we have a schematic
[06:43] of the ATL13 product where the six beams of ICESat are represented as dash lines. This is intentional because the
[06:54] reporting unit of the ATL13 product is a short segment represented by each dash. Now, the short segments are defined
[07:06] uh not by a physical length but by capturing 100 signal photons and therefore the uh length of which these
[07:17] signal photons are obtained can range depending on atmospheric conditions or the state of the water surface and
[07:24] therefore range from anywhere from 25 m to a couple hundred meters but generally average between about 50
[07:31] and 75 m. On the far right here, we've also spent time this year producing quality flags to help the user better understand these
[07:44] uh geophysical products, these quality flags are unitless, generally ranging between 0 and 9, and can be based on the
[07:54] processing of the data, on the fit of the data to our model, or taken from other ATLASs, such as the
[08:04] atmospheric ATL for wind speed or temperature, or other products that are available on the web, say from NOAA,
[08:13] including such products as snow and ice. Now, slide seven shows a domain of ATL 13, 13, which is defined by a global inland
[08:26] water mask. This inland water mask was developed by merging together various masks, including hydro lakes, the global river width from Landsat
[08:36] database, database, and the global self-consistent hierarchical called high-resolution geography database. This has resulted in approximately 1.4 million shapes or water bodies, each
[08:50] with a unique ID. They include lakes and rivers greater than about 0.1 km squared, rivers rivers greater than 100 m,
[09:00] transitional waters, including estuaries, bays, and near coast. Now, every time ICESat-2 flies over any one of these shapes shown here for North
[09:12] America, America, uh uh the ATL 13 produces the full suite of inland water data products, of course assuming
[09:22] favorable weather conditions. Now, on this slide, we provide a summary table table of the development of the ATL 13
[09:31] operational product. And as you can see down below here, we are currently operating with version three, which was first published in
[09:39] March 2020. And each time a new version is published, we go back and reprocess all the data products from launch to
[09:47] present. present. Now, the exciting thing here about version three is that we have opened up the analysis to all the different water
[09:55] body types and shapes, which now number up to a potential of 1.5 million shapes. Also noteworthy here in column four
[10:06] is that with each new release we provide not only an improvement uh in the quality of the data product, but
[10:16] also in the types of parameters that are being published. For instance, in version one we were focused conservatively just on
[10:23] the surface water height statistics. But in version two, we added significant wave height and coarse bathymetry. And
[10:31] in version three, we've added uh wind wind speed. I'd like to note uh also that we soon
[10:39] expect uh to release version four either late this year or early next year covering the same domain.
[10:48] Uh but really it focuses on an improvement of the uh uh quality classification of the photons. And also here a new product uh that
[11:00] we're actually kind of excited about uh is ATL 22 which will provide the transect mean quantities for the variables published
[11:10] in ATL 13. So, the question may be how do I obtain the ATL 13 data? Well, the answer is right here uh
[11:25] and where I have downloaded the landing page page uh uh from the NSIDC site that hosts the
[11:32] ICESat data. And here for this particular case is the ATL13 inland water surface height version 3. NSIDC does a wonderful job with
[11:47] descriptions of the overview, how to download the data, citing the data, user's guides, several technical references including the team ATBD, and
[11:56] support if the information you you're looking for really is not on there. You can email them and they will provide an
[12:02] answer to you. One just caveat here is that when you look at the data, make sure you have the latest
[12:10] version, in this case version 3, because there are still some versions 1 and 2 floating around out there.
[12:16] And you might miss it. ICESat 2 also provides several more very useful analysis tools that are available on the on the on the
[12:29] ICESat 2 site, not just open altimetry, but all of these here listed on the left. And these
[12:36] are very useful depending on what degree of analysis you're interested in. I'd now like to go through an example of
[12:45] one particular case of retrieving inland water data from ICESat 2. And the particular case I want to study is Eagle Lake in
[12:56] Northern California here in North America, of course. Now, I think one of the use most useful tools that the ICESat project has
[13:05] created for this purpose and for the purpose of browsing is from the open altimetry altimetry website. website. And when you open the landing page here
[13:17] you are presented with a map of the world with approximately 2 days of reference track crossings. Now, one of the first things you should
[13:31] notice when first landing on this page are the two toolbars for both browsing and processing the data. One in the
[13:39] upper right-hand corner and one along the left-hand side. Pretty much everything you need to do or would like to do uh
[13:48] can be found in these toolbars. Now, Now, the database, of course, includes all the data products from ICESat-2. So, if
[13:57] we're looking for just the ATL13, we want to make sure that we click on the ATL13 button over here on the right-hand
[14:04] side. Now, when we get that far, uh we then do our search over California in the vicinity of Eagle
[14:15] Lake. And then you can see here that there is a reference track that goes up uh the middle of of California
[14:22] uh for October 19th, 2018. And you have to currently search day by day to get in the proximity of the lake uh that you
[14:33] want. want. And so, I've circled this here in yellow. And it And this lake right now just shows up as one little dot.
[14:44] Now, I have zoomed in a little further over that particular location. And as you see uh now in this larger yellow
[14:51] circle, circle, the data product for ATL13 in that particular spot is becoming better and better defined. Now, as we zoom in even further,
[15:04] we can begin to see the definition of the lake and also the the three pairs of ICESat-2 tracks over
[15:12] that lake for October 19th. And each one of these uh spots here, these little circles, represent um an
[15:22] elevation measurement. Now, another really handy feature at this point is that when you click on this this particular reference tracks, it not only
[15:34] identifies this particular instance of October 19, 2018 when we flew over that area, but it also gives you, that is,
[15:43] Open Altimetry also gives you all the other other all the other, uh, times when that particular track crossed
[15:51] over the lake. Now, you can see that these tracks aren't aren't particularly centered over, uh, the reference track. And that's due to the
[16:01] off-pointing of the satellite, uh, due to the, uh, vegetation monitoring scenario. Now, as you zoom in even further,
[16:15] uh, things start to get very interesting. And you can already, uh, start to make some preliminary conclusions
[16:22] conclusions on the, uh, quality of this data product over this particular case. First of all, um, um, stepping back, you can see that
[16:32] uh, uh, you have, uh, three pairs of beams, and each of these pairs is separated about 3
[16:39] km. km. And, uh, if you look closely enough, um, each pair, they're practically sitting on top of each other here cuz
[16:47] we're so far zoomed out. Um, you can see that there are many more strong beam short segments than there
[16:54] are weak beam short segments. For instance, on the far left beam, uh, there are approximately only 1/4 as
[17:02] number of yellow circles as there are green circles. Um, Um, secondly, secondly, um, um, I want to call your attention
[17:14] to this white box, uh, just outside the circle here, which allows you to go to the next step to actually look at the
[17:21] elevation profiles of those crossings. So, then at this point, open altimetry takes you to a graphic that shows the
[17:37] elevation profiles, and you can click on elevation profile or ATL 3 photon heights. So, in this case, I have clicked on the
[17:47] ATL03 photon heights and also checked this box under overlay 3A, that gives you the primary data product, that is the ATL13
[17:58] inland water height in WGS84. So, what do we have on this page? Well, there's a lot of information. So, I'm
[18:08] going to go before I go into detail on this plot, I want to describe what's to the
[18:14] the what is on this plot. First, um um on the right-hand side, starting at the top, this plot will give you not only
[18:23] the particular date that we have chosen, which is 2018-10-19, but it'll also give you the similar plots for all the other crossings within
[18:37] that particular square. Secondly, Secondly, you can choose which beam you want to look at in this plot. It unfortunately
[18:46] only plots one beam at a time. And then third, it mentions the sampling profile. It shows the sampling profile
[18:56] for in our this particular case, I chose the photon heights and the data product. So, in our case, the
[19:04] inland water height data product in WGS84 datum is this orange line that goes through the middle of the lake. So,
[19:12] it looks pretty good. Um Um So, that's a zoomable quick look. Now, also the colors represents the
[19:22] signal confidences. So, the highest confidence photons are the blue. Where in the medium confidences represent the green. And you can see
[19:32] here as you go further into the water depth, you lose confidence in these photons. They're not as dense. So,
[19:39] obviously there's some bathymetry or something occurring here on the right-hand side in the bottom. Very well observed uh
[19:46] at the onset here, but as you go deeper and deeper and as you proceed to the left, you lose confidence in those
[19:52] photons. In the middle, you can see a couple little islands as well. And then also here uh at this point, you
[20:00] can uh use this browser to uh uh acquire some of the data so you can download and process them yourself as
[20:09] you wish. Now, now that we have finished browsing the product, uh what I've done here is pulled the data.
[20:20] Uh I actually put it into an Excel spreadsheet. And I downloaded uh not only the ATL03 uh photon heights, but
[20:28] also the the inland water products that I was uh interested in for this particular case. So, you can see here on the right, uh I
[20:37] have we have uh the green dots which represent the photon heights. I have plotted on the surface here the
[20:44] height of the short segments uh which have centimeter levels of elevation differences as you go across this lake.
[20:53] I've also produced uh the output for uh the ATL13 bottom topography which corrects the uh elevation elevation uh for the speed of light in water. That
[21:08] is due to the refraction of the light. And also the product uh I don't have it shown here, but we have com- computed as
[21:16] we go across this lake the uh attenuation of the 532 nm beam into the water surface. Now, when we look at the analysis of the
[21:25] water surface heights uh compared to root means of in situ data over 2 years, we we find that we
[21:33] have a root mean squared error less than about 6 cm uh when compared to about uh 10
[21:39] observations over 2 years. I would like to point out uh that when looking over the data products
[21:50] um there are still some known issues out there that need to be rectified in in further version. One particular uh one
[21:57] common uh known issue for inland water uh is a striping effect in the data product. product. Um sometimes when it occurs
[22:06] uh as a gap in the returns from the water surface. This is due to a dead time effect and the kind of a related to
[22:13] the saturation of the sensor. And a secondary after pulses that appear usually at about a depth of 2.1 m and
[22:21] 4.6 m respectively. Uh these are not bottom. And And uh uh both the project office and our ATL 13
[22:31] team is working on rectifying these problems. So, I've only talked about open altimetry because that's what I know the
[22:40] best. However, if you are real expert in processing processing large data sets, uh please uh uh take a look at the ICESat-2 tools and
[22:53] services provided by NSIDC. There's some really great stuff out there. there. And I've shown the link above here in
[23:00] the header, and there's a pretty good tutorial tutorial um um listed at the bottom. A few words on data format.
[23:11] ATL13 data, like all ATL ICESat data, are produced in HDF file format uh uh at the granule delineation.
[23:24] Each granule consists of about five files files per day, which includes several reference ground tracks. Um in the particular case of ATL13, the
[23:34] data exist only over water bodies. Each granule consists of metadata, ancillary data, orbit data, quality assessment, and
[23:48] and uh a six-beam structure of the actual uh geophysical data. Uh Uh the naming convention uh for the granule is
[24:00] date and time, reference ground track, cycle, segment, release, and version. The six-beam structure for the for each
[24:09] ground track follows an along-track hierarchy. Uh important metadata include the ancillary data, the reference ground tracks start and
[24:20] end, end, and orbit information, and spacecraft orientation. orientation. Down here on the left there's a table of
[24:27] the segments. Uh Uh the globe is divided into segments or regions regions uh uh according to ascending or descending
[24:37] uh uh orbit uh and latitude. So, now if you dig into any one of the ground tracks, uh in this particular
[24:49] case I've shown uh uh GT2R, GT2R, uh you will find the actual data products along with the relevant
[25:00] information. information. So, for instance, here we have identified uh, uh, as I said, GT2R, but with uh, in the
[25:09] first file, ATL13 reference ID, and I've highlighted the height orthometric and the height uh, of the water surface in WGS84 and the
[25:21] standard deviation and subsurface temperature and each weight and water depth. So, each of these files are now
[25:27] running in will run in parallel. So, any information you look at a row uh, of of of the ATL13
[25:35] uh, reference ID, you will see uh, the equivalent rows of the geophysical data products. So, digging a little further here, we
[25:48] can look open up the um, the data's uh, at the short segment rate. These are produced in 1D arrays, and we have uh,
[25:58] three values. We have the reference ID, the orthometric height, and the standard deviation of the water surface. So, you
[26:04] can see here that from uh, in rows 83 through 92, uh, for that particular uh, water body, uh, we have in the same rows
[26:15] the orthometric height and the standard deviation of the water surface. In sum, the ATL13 data product provides water
[26:29] surface elevation root mean squared errors of less than 5 to 10 cm under most conditions. And this is true not
[26:37] just for the Eagle Lake case, but for most most water bodies we've looked at. It does very good in the vertical
[26:44] accuracy of the elevation. Other ATL13 products are consistent with above. above. Now, for bathymetry, uh these products are retrieved mainly
[26:56] in clear waters and near shorelines. The best examples are in the coastal zones where one can often see 20 to 30 m.
[27:04] We have good cases for reservoirs where we often see down at 10 to 15 m. These are still near the shoreline.
[27:11] Uh Uh but for full two-dimensional bathymetry, this requires merging with multispectral imagery and it's really uh a field that
[27:21] uh many people are are looking at and and there's several very good publications already in the literature
[27:28] on this. So, I I refer uh folks interested in this to just do a quick look at through the literature
[27:34] review and you'll and you'll find some good cases and approaches on how to how to do it that way.
[27:41] Uh Uh for ATL13 continuous products, these are suitable for detailed hydrologic process-related analysis. For ATL22 mean products, which are a new
[27:54] product will be coming out this year, uh these are most likely more useful to applied science users, especially in
[28:00] water resources applications and the calibration of satellite altimeters, including radar. Anyway, I'd like to thank you all for
[28:11] listening listening and I would like to also acknowledge uh the many folks who have been involved in
[28:18] this uh project. Many of these are listed in the ATL13 ATBD, but especially uh the team who has worked uh day in and
[28:27] day out here to develop this product. These are listed below and the support we've received as well
[28:34] from the ICESat-2 project office and the NASA Cryosphere program. Thank you. Thank you, Michael. So, you now have learned about ICESat-2,
[28:43] the inland water data products, as well as the various tools that are available through the National Snow and Ice Data
[28:49] Center Deck to access, visualize, and analyze ICESat-2. I have been asked by the ICESat team for this part of the webinar to talk to you
[28:58] about ICESat-2 applications. ICESat-2 hosts an applications program which facilitates the feedback between the user community and the mission on
[29:09] the functionality and utility of ICESat-2 for practical applications. So, in this talk, I will provide you with an overview of mission
[29:17] applications, of the applications or some examples of applications for the inland water data product, and also opportunities for you to get involved in
[29:27] our program. I am presenting on behalf of our applications team, which I will introduce momentarily. Mission applications is one of the
[29:37] current key areas of the NASA Earth Science Division Applied Sciences Program. It responds to the recommendations prioritized by both the
[29:45] 2017 and 2018 decadal surveys for Earth Science. This include the idea of societal needs helping guide scientific
[29:53] priorities more effectively, and also that emerging scientific knowledge be applied actively to obtain societal benefits. benefits. The applications program for ICESat-2
[30:04] was created in 2011, 7 years before launch, and has as its goal to identify items that will increase or diminish the
[30:13] applications value of the mission, consider the use of the data products and measurements by end users other than
[30:19] the research science community during satellite mission planning and requirements development, and examine applications-oriented concerns and opportunities. The ICESat-2 applications program has
[30:32] been successful in engaging with users and raising the visibility of applications of the data. Collaboration with the science team, project science
[30:40] office, and the National Snow and Ice Data Center Distributed Active Archive Center has led to a vibrant and active
[30:47] applications program. Molly Brown from the University of Maryland and myself guide and coordinate the application efforts for the mission.
[30:56] We get direct feedback and guidance for all of our initiatives from the project office, from the science team, and from
[31:02] headquarters. As part of our team, we have Woody Turner, program applications lead at NASA headquarters, Lori McGruder, who is the ICESat-2 science
[31:11] team leader, Mike Jasinski, who acts as the applications liaison to the science team as science team member for hydrology,
[31:18] and Tom Neumann, who is our project scientist for ICESat-2. You have heard me say application several times. What do we mean by
[31:27] applications? We define applications simply as innovative uses of mission data products in decision-making activities for societal benefit.
[31:36] Applications research provides fundamental knowledge of how mission data products can be scaled and integrated to inform resource
[31:43] management, policy development, and decision-making. decision-making. We are guided by three fundamental goals: enhancing applications research, increasing collaboration, and
[31:53] accelerating applications. In engaging the user community, we want to understand how ICESat-2 can be effectively used within analysis,
[32:03] forecasts, and models so as to improve decision processes needed to address practical societal needs. Also, the scientific information flow
[32:12] for different applications starting from observation all the way to an end use and who's involved. Finally, we want to understand how
[32:19] ICESat-2 observations can be leveraged or complemented with other data sources so as to lead to improved data products.
[32:28] In examining the opportunities and challenges that exist in integrating ICESat-2 data for applications, we created discussion around key data
[32:35] characteristics such as latency, mission lifetime, and resolution. We have learned, for example, that length of data stream is really important when
[32:44] exploring growth and change, and it increases the security associated with investment in tools, techniques, and decision support.
[32:52] Similarly, for some applications, such as sea ice forecasting for navigation, ICESat-2 data product latency of 45 days
[33:00] for its surface-specific data sets prevents assimilation operationally in near real time. The applications program has hosted at
[33:08] least one workshop, focus session, or tutorial per year since 2012 to create awareness of ICESat-2 and to foster
[33:16] dialogue on requirements and needs for ICESat-2 data. We invite you to join us at one of our upcoming events, which are
[33:24] all listed in the ICESat-2 mission website. website. Development of the applications community for ICESat-2 began in 2012
[33:33] with attendees of the first ICESat-2 applications workshop. The community now consists of 651 individuals who have expressed interest in the practical use
[33:43] of ICESat-2 data by either signing up to the community mailing list or through actual engagement with the mission via
[33:50] the various outreach events and the early adopter applied user programs. In 2013, we established an early adopter
[33:58] program to promote pre-launch applications research. The mission hosts 24 early adopters which have played a key role in
[34:06] facilitating the dialogue needed to understand their specific user community needs and requirements. Post-launch, we now have an applied user program that
[34:15] allows you to partner with science team members for guidance in your exploration of ICESat-2. We host quarterly calls with all of our
[34:23] applied users to highlight their research and to facilitate information exchange and feedback. Now for some examples of the ICESat-2
[34:33] data by our applied users. TCarta Marine, a global provider of marine maps, is using machine learning and
[34:39] artificial intelligence to estimate seafloor depth using data from NASA ICESat-2. ICESat-2. In an interagency collaboration, the National Science Foundation awarded
[34:48] TCarta, a small business innovation research grant to commercialize new satellite derived tools that use ICESat-2 data to map coastal water
[34:57] depth. depth. With ICESat-2, TCarta has mapped over 147,925 km² of coastal regions, gauging seafloor depths down to 100 ft with a plus or
[35:12] minus 1.2 ft accuracy. Using this new tool, TCarta derived over 10.8 million depth measurements in over 45 locations around the world during
[35:22] 2020. 2020. These new maps will help ensure the safety of ships, evaluate long and short-term changes in coastal areas, and
[35:31] improve the lives of humans and marine species around the world. Rodrigo Paiva and his team at the
[35:38] Federal University of Rio Grande do Sul in Brazil are one of the mission's early adopters who are investigating how to
[35:44] effectively assimilate ICESat-2 elevations into a continental scale river hydrodynamic model for South America to improve the symmetry and
[35:54] roughness parameters, aiming at improving hydrology predictions such as river discharge, water surface elevation, and flood extent used for
[36:03] example by the National Water Agency of Brazil. Brazil. Paiva and colleagues have developed the first high-resolution 30-m water depth
[36:11] and topography maps for middle-lower Amazon using ICESat-2 for terrain elevation and vegetation cover to correct for vegetation bias. They have
[36:21] also investigated the use of ICESat-2 to improve the accuracy of riverbed elevation estimation. Steven Song at the Center for Space and
[36:30] Remote Sensing Research of the Taiwan National Central University is exploring how to integrate water depth data from
[36:36] ICESat-2 with optical imagery from Sentinel-2 to improve electronic navigation charts for navigation in South China Sea. Steven has determined that it is
[36:45] possible to model underwater terrain of South China Sea islands with ICESat-2. The water clarity in the region allows
[36:53] for penetration of photons down to 20 to 30 m. Currently, Steven has mapped six islands with promising results and will continue
[37:02] to work with the Ministry of Interior to produce 10 to 20 more maps to increase reliability. reliability. In 2022, uh Steven will aim to
[37:10] operationalize satellite derived bathymetry fusion method to map all islands in the South China Sea. So, this concludes our brief overview of
[37:20] ICESat-2 mission applications. I hope that you will consider participating in the program and sharing your experience using ICESat-2 data. Uh particularly, if
[37:30] you have any questions on the Applied Users Program, you can feel free to reach out to me directly by email in the
[37:37] email provided below. There's also more information on how to apply via the ICESat-2 mission website under applications. We also, as I mentioned,
[37:46] host a number of activities throughout the year and we provide updates on those activities via the mailing list. So, I
[37:52] welcome you to sign up to the mailing list as well. I'll be here to uh answer any questions that you may have. Uh
[37:59] thank you for your attention. Thank you very much, Mike and Sabrina, for the wonderful informative presentations about ICESat-2 data and
[38:18] applications. applications. Um this is This brings us to closer to the conclusion of this webinar series. And before we do that, here is a short
[38:29] demonstration of how to bulk download ICESat-2 ATL13 data. We already saw in Dr. Jasinski's presentation this YouTube link about
[38:42] exploring ICESat-2 data uh through NASA NSIDC DAAC. So, this video has a lot of information and demonstration of how to use
[38:52] different tools from NSIDC and uh look at Open Altimetry. Um, what here we want to do is just quickly
[39:02] show you how to use NSIDC um um bulk download data feature. And so, here is the NSIDC site.
[39:14] Here, we have a search window. You can go to ATL13 and search for the data. Here is the inland water surface height
[39:27] ATL13 version 3 data, which is the latest one that we want. When you scroll down, you will see that
[39:36] uh there is overview of data, there is data download link, uh citation of um this data, there is user guide
[39:46] describing file name convention, metadata, and a lot of information, as well as there is technical information how the data derived uh is given in
[39:57] here. Through support, um one can ask questions and get answers from NSIDC. The focus here is on quick demonstration
[40:06] of two things. One, how to bulk download data, and then how to quickly browse those data by using an open source NASA
[40:15] software, it's called Panoply, and the website website web link for NSIDC download is available through our site website.
[40:27] So, here, once you go to the data download link, you will be able to choose region of interest as
[40:36] well as temporal selection is available here. Just to be consistent, we picked area Itaipu Reservoir, which we looked
[40:44] at in last two sessions. We looked at Landsat data and looked at surface water extent as well as we looked at radar altimetry for
[40:54] lake level height. And so, just to be consistent, here is the box I've chosen using latitude longitude, but you can draw a
[41:03] box or a polygon in the area of your interest, or you can upload a shape file with polygon of your interest.
[41:11] Once you do the spatial and temporal selection, all the files available are visible in this window here.
[41:21] Note that on top, you will have to log in to NASA Earth data. If you don't have
[41:27] an account on NASA Earth data, you can go here, and you will be able to register with your email address and
[41:33] other information. Once you log in to data NASA Earth data, you can download data for free. Here are all the files HDF5 format.
[41:46] These are the file sizes in megabytes, a start and end time for each of them. Once you have all the files, and if you
[41:55] have longer period, you will have many more files, and you can still download them all at the same time by ordering
[42:03] these files. Once you click on this and order your files, you will get all the files zipped.
[42:12] Once that your order is ready, you will receive an email from NSIDC that your data files are ready.
[42:20] You can then download the data on your computer. Notice also that to work with this HDF5 format, there are Python scripts
[42:29] available. In the YouTube video just mentioned has information about how to use the scripts also. And there are some tutorials in there about
[42:41] the scripts. You can download them. I have already ordered this data and I have received this email from NSIDC
[42:49] which has the order history. Once you go there, you can go to the order ID. This is the ATL1 that I chose.
[43:00] And that gives me option to download all the zip files or individual HDF file. Once you download and save on your
[43:10] computer, you can quickly browse through this data by using Panoply. This is the open software from NASA. It's very easy
[43:18] to install and can read and netCDF file, HDF file, and also grip file can be opened using
[43:27] Panoply. Panoply. So, here is the inland water data. You can open file, navigate to where you saved on your computer, and here is this
[43:40] ATL13 file, the HDF5 format file that I saved on my computer. This is just one example. And here you can see ancillary data are
[43:51] there. All these geophysical data from three pairs of beams. Metadata are available here, orbit information, and quality assessment.
[44:02] Let's just look at one example. Uh Uh this particular beam, a lot of information again is here,
[44:12] uh, but we are looking for water surface height, and we can also look at water depth. depth. But let's just focus on
[44:22] um, water surface height. Once you click on this, it tells you it's a trajectory feature type file, and you can create a
[44:30] fall, uh, uh, plot. Uh, here, you will see that in we picked a region here, uh, for that particular month of
[44:41] July, uh, all the, um, tracks available are, uh, uh, shown here. And And water surface height in meters, you can
[44:54] see the information here. So, in the region of our interest, it is a few meters, and you can find that out by
[45:02] clicking on this array here. You can see that this is time, longitude, latitude, and value of height
[45:11] in meters is available here. So, you can, can, um, actually look at digital data, uh, by going here.
[45:20] Also, Also, you can, um, uh, command on on, um, Mac, you can click on that, and then your mouse,
[45:32] that helps you zoom into this region. And you can, uh, go through all these and display, uh,
[45:46] uh, this data. So, they quickly tells you if you pick different months, you can see how, how, um, water surface height is changing.
[45:55] So, So, this is just a quick way of browsing. You can bulk download, and then you can
[46:02] um um just through Panoply browse how uh water surface height is changing. So, that is uh just quick bulk download
[46:14] and uh visualization demonstration. Um that concludes our uh today's webinar. webinar. And so, here is our summary for this
[46:25] webinar session. This was the last session. session. In the first session, we looked at um all the satellites and sensors that are
[46:36] relevant for looking at lakes and reservoirs. Um and we looked at uh Landsat and MODIS-based uh surface water
[46:46] extent, how to access that data. Um in n- last session, we focused on radar altimetry and currently available uh
[46:58] Jason and Sentinel um altimeters, how to access the data. We looked at G-REALM site from uh uh Foreign Agricultural Service and how
[47:09] to access a lake level height data. We saw that as well. And today, we had uh information about ICESat-2 um altimetry
[47:19] data. So, uh water surface height, how to access those. Uh we saw that. Um so, uh with that, we really thank you
[47:30] for um attending this webinar series, and we want to uh thank our guest speakers for today, uh
[47:39] Dr. Jasinski and Delgado, for their wonderful presentations. Uh here is the contact information uh if you have any
[47:48] questions, and our SCED website and training website page uh are shown here. With that, we invite you to post your
[47:58] questions uh in the chat box and we will answer them in the order that they were received. So, we will start with the
[48:08] question and answer session now. And again, thank you for attending this webinar series. Wonderful. Thank you so much, Amita. And
[48:30] we are now starting the Q&A session. So, for any of the participants listening, please do post any questions that you
[48:37] may have in the chat and we have a great panel panel ICESat-2 experts that are here to answer
[48:44] any of your questions. So, jumping right into it. Question one, I wonder if there's any related information about the lakes in the
[48:53] central part of Turkey, which lies on the 36 to 42° northern parallels and 26 to 45° eastern meridians in the
[49:03] Middle East. Sabrina or Mike, one of Can one of you answer that? You might have to unmute yourself to to
[49:16] answer. Okay, Sabrina and Mike, I cannot hear you, but I will go ahead and start answering. answering. Okay, yes, please go ahead.
[49:30] Can you hear me? Sorry, I was muted. I think Yes, we can hear you now. Great. Yeah.
[49:34] Yes. Yes. Okay, thank you. Quickly, uh I think Sabrina already typed in an answer there using Open Altimetry, but
[49:41] certainly Amita showed a great way of doing this with Plan Apply. So, the answer is is is uh that information is there.
[49:51] So, just just use those two search tools and you should be able to come, you know, directly to that answer.
[49:57] I hope that answers your question. Okay, great. And it looks like there's some some links there, too. So,
[50:04] hopefully hopefully And And again, all these question and answers will be posted to the training page. So, anybody can come back and get
[50:11] access to these to these links to explore more. So, question two, rivers with large service areas, such as the
[50:17] Mississippi River, are significant landscape landscape Unlike lakes and reservoirs, their surfaces have a shape. How are sloped
[50:27] water surfaces handled, and how often is a river's surface updated along its length? length? Okay, I typed in an answer for that.
[50:37] This is Mike again. Currently, we only produce the ATL13 along-track products. And just like any other spot on Earth,
[50:47] uh uh we're just uh producing those at the along-track product and at the repeat frequency that's that's that's given.
[50:56] Now, true, the larger water bodies, be they lakes or very large rivers, uh have a shape, and
[51:04] uh uh you know, one could, you know, conceivably look at doing some cross-track analysis, but won't improve
[51:11] on the resolution uh uh uh uh you know, of the model. We have what we have. But, if you're
[51:20] you know, have some ingenuity, uh you can you can start to look at what's between the tracks.
[51:26] Uh you know, for the the strong and the weak beams, they are only 90 m apart nominally. Uh that that can change
[51:34] different spots on the Earth. But, the the the beam pairs are uh uh 3 km apart. So,
[51:43] uh uh you know, you would have to have a moderately large uh even a large you know a larger water
[51:49] body to uh to look at the cross track slopes. Great Mike, thank you so much. And question number three, uh how can you
[52:00] find the dates for which data is available? Uh if no dates are available uh as shown for Eagle Lake, does it mean
[52:06] that no data is available? Um Um in Open Altimetry, the best way to do that is is was as mentioned in our presentation
[52:17] uh is once you find the lake and the closest reference track, you when you're in the browser, if you click on that
[52:25] reference track, it will give you the dates of all the ICESat-2 crossings. Now Now in many cases, there are no data. If it
[52:34] was cloudy uh you won't find the data. And that will become apparent very soon when you know when you click on a number of those
[52:41] dates uh like if you go into Alaska, there's you know a certain time of the year like in June and July
[52:47] where you know just cloud covered. You know, can't get anything out of ICESat-2 in those situations, you know,
[52:54] unless you peek through some of the clouds clouds and there happens to be some broken uh uh cloudy areas.
[53:02] Uh so yeah, no data are available if nothing shows up uh even though you have a date when you
[53:08] look at the browser, if there's no data there there uh uh you know, you just out of luck.
[53:14] Uh let's see. You know, also you know, what Amita showed today, you know uh takes it a step further, you know and
[53:26] I think uh in Panoply, you know, you can use that uh uh as a browsing resource as well.
[53:37] Great. And it looks like Brock has has dropped some uh some links in in the chat for the audience as well. So,
[53:42] hopefully uh that that link we provided in the Q&A doc as well as that was shared with the uh the audience. So,
[53:48] please do and and and look at that document uh to learn more information. So, question four, are you aware of any Sentinel-3
[53:56] processing steps to get inland lake height? Uh do you have in your previous repository or do you intend to publish a
[54:04] webinar with that regard? Okay, I am not aware. Uh so, but I'm sure there's folks out there
[54:14] who are looking uh at this problem. So, I I just have to punt on this one. Uh but
[54:22] perhaps some of the NSIDC tools can be used for Sentinel-3. And in question five, uh is uh can these
[54:36] can the data sets be used for dam monitoring? Absolutely. Absolutely. Um so, I I answered this question here.
[54:46] I'm aware of of two groups who have who have done this, but I'm sure a lot more people have done
[54:51] this. It's a very hot topic. Uh certainly the folks out of Willand Gauls uh uh uh uh uh research at Texas A&M. She's a grad
[55:03] student there. Uh actually, he's graduated. He's a post-doc now, Yaoli, who's pu- pu- who's already published a paper on
[55:11] uh uh is either T- TGRS or Remote Sensing and Environment. Environment. Uh they looked at like 350 reservoirs
[55:21] using not only ICESat but also uh uh uh radar. Uh there's another nice paper by Jonathan Ryan out of Brown.
[55:31] It's in GRL. Um Um and uh he's already published uh, uh, sort of a time series of of the
[55:41] reservoir heights uh, uh, during the period of ICESat-2. Just so just over, you know, a year or so of
[55:49] data. data. Nice paper. So, that's in GRL. And what we will do, Mike, before we post this to the website, which
[55:58] hopefully will be by next week, uh, we'll go through and we'll try to dig up some of those references and we'll put
[56:02] links to them so the audience can uh, access them in the future. Yeah, sorry. I don't Yeah, I don't have the link. I'm I'm,
[56:09] you know, Oh, that's not a problem. Usually, uh, usually after the the the time, we'll go back through and we'll we'll clean this
[56:16] up, edit whatever we need to, and we'll start adding some of these links. So, we just wanted all those that are listening
[56:20] now that uh, please do come back and access this when it's when it's up on the website, and hopefully we'll we'll
[56:25] we'll provide some of those links that that Mike was just referencing. Um, so question six, is this data
[56:30] available for the Indian subcontinent? Absolutely. You know, one disadvantage as you move further in the lower latitudes, so you don't
[56:40] uh, uh, get as much uh, repeat or or the number of crossings uh, sort of spreads out. This is a polar orbiter,
[56:49] so all the orbits converge in the high latitudes. So, if you're working in you know, northern Canada, Siberia,
[56:56] Alaska, you know, you get a lot of nice close repeats, but uh, as you move further south, the frequency will be
[57:04] much less. Okay, and question seven. Which start date of the uh, ICESat uh, can we download? And I believe they're
[57:16] referring to ICESat-2 there. Uh, Uh, ICESat ICESat is available from from from mid-October 2018, around the October 15th or so.
[57:28] So, this answer has already been addressed by someone else, maybe Sabrina. And Mike, real quickly, can you because
[57:36] this is obviously the ICESat II, there was a previous mission ICESat. Can you just give the audience
[57:41] just kind of a reference of when that mission when when that mission life was? For ICESat, the original ICESat
[57:49] uh I think it went up around around 2009 or so. Uh you'd have to look this I don't I
[57:57] don't remember this offhand. And then it it operated uh sporadically. There was some trouble with the lasers
[58:06] after about a year. So, they'd only turn the instrument on I think it was three periods of the year four periods of the
[58:12] year for about 30 days. Um and then I don't remember when it finally finally uh uh gave up its last breath. Uh but
[58:23] I think it was in the early I I can't say, but it was it was it was in
[58:26] operation for maybe you know, sort of five to six years stretched out. Okay, great. Yeah, thanks thanks uh just
[58:35] to build more context. It was 2000 Yeah, I think it was you know, that can be looked at easily on the web. I I
[58:42] think I I apologize I don't know the answer in the detail. no, no worries. No, no worries at all.
[58:49] And question it was more Go ahead. Uh Uh how how can we create a uh a time series
[58:56] of the surface of a lake? I think follow the outline that Amita provided today in her presentation.
[59:07] Uh Uh download the the you know, you have to download each data set. It looks like separately and then and
[59:18] then process the data. Uh great. And question nine, does water turbidity affect the bathymetry accuracy estimated by ICESat-2?
[59:33] Absolutely. Turbid water um um prevents the penetration of the 532 lidar. lidar. So, you know, um um your best retrievals are in in very
[59:47] clear water uh like in the coastal zone or in reservoirs where there's, you know, sort of calm
[59:54] uh not a not a lot of resuspension due to wind and things. Uh Uh it's poorest in the rivers
[1:00:01] uh cuz rivers are moving generally and and they're picking up and carrying sediment with them. So, I
[1:00:09] you know, in the coastal you can go 20 to 40 m. In in reservoirs, you know, we often see
[1:00:16] more than about 10 m. In rivers, you have to hunt around a little bit and see what's what's there.
[1:00:29] And question 10, is a variable uh bathymetry height reliable? When I checked before, it was not. Is there any
[1:00:36] way to use accurate bathymetry height? And they're referring to ATLAS uh the ATL13 product. Um Um the current retrieval being used in
[1:00:49] ATL13 is a statistical approach and it can be affected by uh uh other other uh uh well, it's affected by the, you know,
[1:01:01] the uh the amount of backscatter uh uh random backscatter in in the water. So, um as as you go deeper
[1:01:12] uh you the the percentage of your of your photons that you're processing are are just more and more
[1:01:21] and it's harder to retrieve. So, there's a lot of There's currently uh uh you know, many areas where there's
[1:01:29] there's error. That's why when we publish the data product, we we put a we we indicate uh a flag on it and the how
[1:01:38] reliable we think that measurement is. Great. And question 11, maybe I missed it. How was the look geometry of the
[1:01:49] ICESat-2? Is it a side looking or vertical to the target? Yeah, Yeah, you can you can read the details in
[1:01:59] ATL03 and uh the ATBD. Um it slightly points forward and it slightly points uh obviously since there's uh
[1:02:10] uh three pairs of beams, one is pretty much nader in the center. Uh but the two side beams uh you know,
[1:02:19] point off uh whatever uh you get for a radiance uh a radian um of 3 km at an altitude of 500 uh
[1:02:31] 500 km. Now, that's said, as we mentioned previously, there's an off pointing scenario in the low latitudes. So, those
[1:02:43] uh angles will even further be uh uh you know, enhanced by the off pointing uh depending on what cycle you're in.
[1:02:54] Now, ICESat uh uh records and and produces uh in the ancillary files the information on what what the angle is.
[1:03:07] So, you should be able to retrieve that. Okay. And we have a Yeah, please, Mike. Yeah, so it slightly points forward but
[1:03:18] it also slightly points uh to the side. Uh so it's it's not directly nadir because if if you had that you'd
[1:03:28] get a incredibly specular return and it and it would would really oversaturate the sensor. Uh you know, especially in something
[1:03:36] like water or ice. Okay, question 12. Hello. I have really enjoyed the webinar series. Thank you. Well, uh to whoever
[1:03:47] wrote this, we thank you for joining. I'm really interested in understanding what other remote sensing data we can
[1:03:53] use on lakes. I'm aware we can look at algal blooms. Is it possible to get gaseous data, example given methane or
[1:04:01] carbon dioxide? Are there any other data sets that might also be useful for studying lake dynamics? Well, I'm not probably the best person
[1:04:11] to answer that question but obviously, you know, there's a lot of work with with radar starting way back with Topex/Poseidon,
[1:04:19] the Jason series 1 2 3 and now with the Sentinel uh data data uh uh you know,
[1:04:29] those, you know, work great for altimetry. altimetry. For the you know, probably when you're really looking at water quality, uh
[1:04:37] you know, you have you know, there's a lot of effort with the uh with the multispectral data, you know,
[1:04:43] starting with Landsat and MODIS. You got multiple beams so you can look at you know, how the
[1:04:50] the light penetrates uh with the different beams and that will give you some idea of what's what's in
[1:04:55] the water. I think it's really a you know, it's a science that's people are are jumping into and trying
[1:05:03] to understand more. And certainly with all the uh high-resolution data uh from Planet and Maxar, there's tremendous opportunity for
[1:05:15] for, you know, trying to look into uh, you know, what's into the water and at what depths. It's really an exciting area.
[1:05:26] I don't know about the methane, though. Great. And yeah, as as as Brock just typed in that last comment, our set has
[1:05:34] conducted quite a few webinar series on water quality. So, please go to the website and you can actually filter the
[1:05:40] training based on with the application area. So, uh please we do encourage you to go to the website and and dig up some
[1:05:46] of those past trainings that we've done that might help answer some of your questions. questions. So, question 13, are there any resources
[1:05:52] you recommend with practice data and workflow recommendation/steps that one could use to learn to process data? Um
[1:06:11] No, I I don't I can't answer any more than what's someone already typed in here. Great. I think that was Sabrina that
[1:06:22] that typed that. Sabrina, do do you have any more information on that? Mike, can you hear me?
[1:06:30] Yep, we sure can. Oh, perfect. Okay. Uh yeah, so the NSIDC has a section on their website for
[1:06:37] knowledge. It's called knowledge base and has a number of documents and webinars that people can access. Uh
[1:06:44] there is also um the hackathons. Uh Mike, maybe you know a little bit more about this. Uh but but
[1:06:50] the NSIDC also uh had uh hackathons with ICESat-2 data. They were focused on sea ice. Uh but but you can use that to also
[1:06:59] um practice using ICESat-2. And all of that um I can provide the link in the document. document. Great. Sabrina, a follow-up question to
[1:07:09] that hackathon, is that something that if some of our listeners, participants were interested, they could potentially get involved in the future?
[1:07:16] Yes, definitely. And um what I would recommend is signing up to the NSIDC mailing list. They have a mailing list
[1:07:25] that you can sign up to uh that provides you information on the data products as well as the upcoming
[1:07:31] hackathons. Uh there is uh also uh a community um and um I have to remember the name, but
[1:07:39] there's a now an a community um that is available for people that want to share uh their code. Um and so that's
[1:07:47] also available. I'll pull up the name and and put it in the in the document for you guys.
[1:07:53] Great, wonderful. And uh yeah, in question 14, how does one find out which coastal region {slash} reservoirs have bathymetry data
[1:08:01] available to the ATL13 product and ICESat-2 data products? Uh so, a follow-up question to that, can we get
[1:08:08] bulk download of data for all bathymetry products for ATL13 and ICESat-2 for all times? times? And uh another question, we would like
[1:08:16] to be able to import in our database and run queries so we can merge this data with those from other sources, uh NOAA,
[1:08:23] etc. Um I don't I don't know a way to do that, but I think if you're clever, uh you can
[1:08:36] you can use the tools that are provided in and and get the information you need there. So.
[1:08:44] I'll add to that. Um actually, we have one of our early adopters from the mission and he developed a uh website
[1:08:51] called shallowbatheverywhere.com. Um so, you might want to take a look. It's there's a couple of bathy locations
[1:08:59] that are listed there um for people to get started. Shallow bathymetry everywhere. One word. Great. And and maybe what we can do is
[1:09:11] as we go in these questions if somebody can maybe drop a link to that um, so people can come back to it. I think uh,
[1:09:17] they would they would certainly appreciate whoever asked that question would certainly appreciate that. Um, question 15, the new uh,
[1:09:24] ALT 22 product from ISAT will have a mean of the transects. Uh, can you give a couple of examples of
[1:09:30] the products and applications from these products? Well, you know, obviously uh, uh, I mean, these would be more water resources
[1:09:45] applications. Um, Um, so, you know, many scientists don't don't many many fo- many folks don't want the full
[1:10:00] transect across body and and you know, they don't need all that information. information. Uh, Uh, a lot of, you know, USGS models or
[1:10:09] other, you know, flow models would require just height measurements, the mean height of the river. So, those those types of those types of
[1:10:17] applications would work. I think you can use your imagination and and uh, it's up to you to decide where how how this
[1:10:25] information can be applied. That is a great point, Mike. Hopefully we have a lot of um, researchers out there that are are
[1:10:35] listening and and might want to see what they can do in their own uh, respective study areas.
[1:10:41] Uh, our question 16, are these data going to be available in Google Earth Engine also? I don't know.
[1:10:51] Uh, Uh, I mean, if somebody else wants to jump in and uh, help me out here. I don't know either, uh, but we can
[1:10:59] definitely contact the MSIDPC and, um, provide you with an answer. Yeah, it's always a We get this question
[1:11:08] actually a lot, uh, Mike and Sabrina. You know, there's always the patience of of hoping that Google Earth Engine will
[1:11:15] ingest the data sets that are are, uh, most sought after by by specific users. And it's, uh, I mean, obviously it's out
[1:11:21] of our hands, but, um, you know, and actually one thing that you can do, whoever asked that question, you can
[1:11:26] contact Earth Engine. Uh, they do have a forum where the more people that that request certain data sets, the more
[1:11:33] likely they are to ingest those other before others. So, if this is something, cuz it is currently not in Earth Engine,
[1:11:39] this is something you'd be interested in, uh, certainly take part in that activity because your your vote, that
[1:11:45] email, that that that reference will count towards their decision on on what data set to ingest next. So, just FYI.
[1:11:52] Uh, question 17. Hello, are there any other options in Panoply to do further data analysis data analysis or the or is this done in
[1:12:02] Python? I think Amita should answer this question. If she's still available. Yeah. Yeah. Uh, you're talking about uh, Python,
[1:12:19] right? right? Oh, they're just wondering if if if is there is can you do further analysis within Panoply or is it more of a
[1:12:26] visualization tool? And we do have to do the further analysis, say, outside and say a different application.
[1:12:31] You can, uh, do uh, further analysis. Uh, you can compare data in Panoply, and we will There are tutorials online. Uh,
[1:12:40] we will post the links here before we post this uh, document online, so you can, uh, use that.
[1:12:47] You can make uh, time series also if you have uh, multiple data sets. Um, it for multiple time
[1:12:55] days or months. So, that's possible. And there are great tutorials out there, so we'll provide you links. Of course,
[1:13:04] you know, using Python or any language would be more flexible flexible to for analysis, but yes, Open Altimetry
[1:13:14] can be used. Okay, great. Wonderful. Thank you. Thank you, Vida. And question 18, after your experience with this satellite, how do you imagine
[1:13:26] an optimal satellite for the purposes described here? Well, Well, how do you imagine an optimal satellite? I think
[1:13:45] there are you know, as as the technologies improve, ICESat-2 has been a pathfinder for for further uh
[1:13:58] uh remote sensing lidar sensing of of the Earth's surface and and and there's certainly um you know, numerous
[1:14:09] ideas and and improvements that will come in future missions. So, I believe ICESat-2 is a pathfinder for for
[1:14:20] for remote sensing of of the land surface, not only water, but you know, for vegetation, snow, ice,
[1:14:31] um um you know, and for the atmosphere. Obviously, for the atmosphere, you got all the CALIPSO and the CALIOP data that shows its
[1:14:40] effectiveness for atmospheric characteristics. CALIOP, the C A L I O P, Great. And question 19. Uh can you give a sense of how effective
[1:15:00] ICESat-2 is in mountainous terrain such as Southeast Alaska? Yeah, there's certainly a lot of mountains in Southeast Alaska and
[1:15:10] there's a lot of glaciers there. Um Um I think um it comes down to the reflectance of the
[1:15:22] of the surface you're looking at. In highly reflective areas uh uh you'll have uh uh more chance of defining the the
[1:15:31] topography of the surface. But in dark areas uh because of the variable variable topography topography uh uh it may be a little more difficult.
[1:15:43] But this this is like, you know, we mentioned before, it's up to you, the user, to be creative.
[1:15:50] Uh the data are there. You know, photon elevation is a photon elevation. And you just have to
[1:15:57] use your ingenuity to uh uh you know, figure out how to aggregate and process the data. So it's, you know, it's a beautiful
[1:16:06] opportunity opportunity for for uh for people to to work with the data. And question 20. Uh I would like to ask
[1:16:17] about data processing and how to use deep learning to get uh high resolution and how to get data
[1:16:24] preprocessing for this operation. Well, Well, the data are preprocessed at the level of ATL03. ATL03 provides the geo-referenced
[1:16:47] uh uh photon heights. And as ATL03 Um Um so then it's up to you, I think, the user
[1:17:04] uh uh again, as in the similar question, to to see how you can take these geo-referenced photons and optimize the
[1:17:12] information you you re- you know you can get out of them. That sounds like a research question and
[1:17:23] hopefully uh whoever asked that can um yeah, uh continue down that path. Question 21, I opened openaltimetry.org/data/icesat
[1:17:34] and found many points on water/sea uh have positive elevation. Uh and then they gave some examples uh
[1:17:41] lat and long, and they uh clarified that that's on the street. So, how how do they actually read this information?
[1:17:50] Example. Minus 5° longitude and Well, Well, um um I'm not exactly sure what what you're looking at here, but
[1:18:08] water sea is positive elevation, well um um make sure you're in the right uh datum. Uh Uh in the case of
[1:18:21] uh uh inland water we produce so ATL13 produces the water surface heights in both orthometric units, that is EGM2008
[1:18:36] and geodetic units, which are WGS84. WGS84 will be the closest to uh uh you know, sea level elevation.
[1:18:48] The The the W uh the EGM2008 uh uh are really used uh over land because that that's the most
[1:19:06] representative datum that hydrologists use. It's a more practical datum. So, those those two elevations will not be the same.
[1:19:21] Um Okay, and moving on, question 22, I believe this is question for Amita. How do I download and install JavaScript and
[1:19:35] using Panoply software on my computer? I'm just going to um um post a link so you can uh download the
[1:19:51] Okay, so um How do I download the and install JavaScript and using Panoply software on my computer? Hold on. I should
[1:20:04] Actually, in our very first uh session session in the prerequisites and also on the website, we had
[1:20:13] recommended and that's where Panoply link is there where you can download. But, I will try post it here.
[1:20:22] Okay, so we'll we'll go to the next question and then we'll make sure that link is is uh dropped in there so so
[1:20:27] they can go back and and read some more on that. So, question 23, is it possible to process this information in uh PCI
[1:20:35] or QGIS? I don't know. Okay, we will look into that. We will we will uh post an answer. So, please come back and
[1:20:50] and and use this resource in a week from now. So, question 24, which data level is for direct user processing? I found
[1:20:58] many levels of ICESat-2 products. Okay, so someone already answered this, but this is an excellent question. Um
[1:21:10] Um the the the the the ATL03 data, as someone already answered here, is the basic level of georeferenced photon elevations.
[1:21:25] That's the starting point for all the uh uh additional additional uh uh geophysical products. Now, Now, ICESat-2
[1:21:42] ICESat-2 uh processed those geophysical prod- products products in in in various along-track lengths. And as correctly written up here, maybe Sabrina
[1:21:57] wrote this, is that the you know, the whole prod- the the prod- uh the products from ATL06 to ATL13 and
[1:22:06] above are the aggregated versions and the processed versions of the ATL03. Wonderful. And question 25, uh it looks like Sabrina is answering it
[1:22:25] now. Uh is there any documentation on how many water bodies are covered through ICESat-2 data? Uh Sabrina, can you answer this one?
[1:22:36] Sure. Uh so, yeah. So, all documentation is available for all of the data products via the National Snow and Ice
[1:22:43] Data Center. You have the user guide as well as the technical references. Um so, uh so, yeah. So, all of the information
[1:22:52] is there. And uh the user guide will will provide you with um the table that Mike uh showed you earlier, which shows
[1:23:01] uh what the the number of lakes that are covered. covered. I don't Is there I can I can add.
[1:23:14] Okay. Sabrina, I can I can add to what you said here. Um Um the the the the greatest number of water bodies
[1:23:25] are are come from the hydro the hydro lakes database. database. Um Um and there's approximately 1.4 million
[1:23:36] uh uh lakes lakes uh greater than 0.1 km². Uh the additional uh water body shapes due to rivers
[1:23:51] uh estuaries and bays uh uh are on the order of maybe a couple hundred thousand. Great. Yeah, thank you so much for that
[1:24:06] clarification. Thank you, Sabrina and Mike. And question 26, could you provide provide some more information on tools
[1:24:13] available to process the raw data? Example given some machine learning tools to cleverly extract information. I cannot.
[1:24:28] Okay, we can move on then. Uh question 27, if I wanted to get code for data pre-processing for ICESat-2,
[1:24:35] where could I get it? I'll just jump in here. I think you know, I got it goes back to the other
[1:24:42] question that you just asked. Um You can there is that ICESat community uh what that has um
[1:24:52] that is the the people, you know, data users and developers uh that are working together to develop a a shared library of
[1:25:01] resources including code and tutorials and examples. So, that would be a good place to Uh but also of course then there is the
[1:25:10] NSIDC and then they have the uh the tools page that you can access um to look at at the different uh tools
[1:25:19] that are available to be able to process the data. For code, I would suggest the uh the
[1:25:25] ICESat community. Place to start. All right, thanks. Thank you, Sabrina. And I will say Mike and Sabrina, you
[1:25:34] guys are all-stars. You've done what very few have ever done is actually get through through all of the questions and answers. That
[1:25:41] is that is not happened often. So, big thanks to both of you for this. Um I actually have a question since we've
[1:25:47] gotten through all the questions from our participants. Uh I I I I I understand that the uh the ATLAS
[1:25:52] instrument was actually at Goddard Space Flight Center. It was being designed and built and calibrated. And this is where
[1:25:58] both of you work. So, I'd love to hear how cool that must have been to be working on a mission where you can
[1:26:03] actually go and and see this instrument being built uh in in real time. Well, the instrument was
[1:26:12] well well well, the mission was conceived and and developed and specked, I think, at at Goddard. The actual
[1:26:21] instrument, instrument, uh uh I think it was built by Orbital, uh uh and I believe they're in Arizona.
[1:26:31] Uh we So, I may be wrong on this. Um so, we didn't actually see it being built, although before
[1:26:40] uh before launch, it was shipped to Goddard and and we had an opportunity to see it there.
[1:26:49] there. And I They were doing some testing there, so they brought it to Goddard. Uh very cool. That must have been
[1:26:57] exciting knowing that uh you're going to be working with the data coming from this instrument. We We we get excited, you know, I mean, we
[1:27:05] just, you know, saw this nice launch out of JPL of the Perseverance uh Mars rover. And to me,
[1:27:16] that I had just as much joy uh watching the success of that mission as as we had uh six
[1:27:25] uh with the success of the ICESat-2 so far. Yeah, and hopefully everybody who's listening was able to see uh the the the
[1:27:36] the Perseverance rover uh both launched uh as well as land uh last week. And and if you haven't, definitely go to
[1:27:44] nasa.gov. nasa.gov. Uh there are some amazing video and images uh that are coming out of that mission that just landed. Really, really
[1:27:51] exciting. Um so, yeah, Mike, thank you for bringing that up, and thank you for I think this is This is actually going
[1:27:57] to conclude the the last part of this this webinar series. Uh we would like to uh deep deep appreciation to both Dr.
[1:28:05] Jasinski and Sabrina uh Delgado Arias for joining us today, both from the ICESat-2 team. We cannot thank you
[1:28:12] enough. Uh I know that a lot of the questions obviously we could never fielded without you. Your insights and
[1:28:18] your contribution to this webinar we just are are are immensely grateful. So thank you for that. I would also like to
[1:28:24] thank my colleague Dr. Amita Mehta for for leading this training as well as to the whole team, the ARSET team behind
[1:28:31] the scenes that you don't see but that are working tirelessly to make this a success. That's Brock Lobsenz, Jonathan
[1:28:37] O'Brien, and Selwyn Hudson-Odoi. Thank you all for all your contribution and for everybody that's joined us. We do
[1:28:43] hope that you will join us and and come back next week to the website so you can
[1:28:46] access this question and answer doc and don't forget the homework is now live on the website. So if you want the
[1:28:52] certificate, please do go to the website and you are now able to access that and start working on the homework. So thank
[1:28:58] you everybody again and we hope to see you in the future. Thank you. Yes, thank you so much.
[1:29:03] Thank you. And thank you for all the attendees. Thank you and just a quick reminder that you will receive a survey
[1:29:12] from ARSET team. So we request that you fill that out and provide your feedback about the webinar series. Thank you.
[1:29:21] I I would like to say that we are just we are just you know uh uh a small a small a small contingent of of
[1:29:31] this mission. You know the you know the appreciation goes to the thousands of people who who put this
[1:29:37] mission together and to all the other data data processors and all the upper level data products. products. You know and and and the team working
[1:29:45] together. So you know we're just doing our small part here. And um and it's exciting to to be a part of this team including all
[1:29:55] the applications folks who are are making this available to the public. I mean ultimately you know we want this
[1:30:01] data in the hands of the people and you know we get we We motivated, we get ideas, and we get motivation from the
[1:30:09] public who who use these data. So, thank you. you. You get the bigger part of the thanks in
[1:30:14] my eyes. Thank you, Michael and Sabrina. It was great to have you here and share your presentations and knowledge
