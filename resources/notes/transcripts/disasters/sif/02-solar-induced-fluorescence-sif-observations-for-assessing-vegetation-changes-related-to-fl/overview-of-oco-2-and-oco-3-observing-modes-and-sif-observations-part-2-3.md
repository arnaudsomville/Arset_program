# Overview of OCO-2 and OCO-3 Observing Modes and SIF Observations Part 2/3

`https://www.youtube.com/watch?v=ygdK8uMxi8A` · id 346 · 1:34:37 · module 53 — Solar Induced Fluorescence (SIF) Observations for Assessing Vegetation Changes Related to Floods, Drought, and Fire Impacts

[00:01] Hello everyone and welcome to the second session of this intermediate three-part ARS training titled solar induced fluoresence or CIF observations for
[00:11] assessing vegetation changes related to floods droughts and fire impacts. I'm Dr. Erica Pist, a scientist at NASA's
[00:20] Jet Propulsion Laboratory and also an instructor with the ARS program. Today's session will provide an overview of OCO2
[00:29] and OC3 observing modes and CIF observations followed by a demonstration on using the snapshot area mode data
[00:39] from OC3. We have two invited experts, Dr. Yunji Louu and Jackie Ryan, both from NASA's Jet Propulsion Laboratory.
[00:52] This is the training outline. There are three sessions associated with this training. Today is session number two
[01:00] and it consists of an overview of OCO2 and OCO3 observing modes as well as CIF observations. Uh there will be a
[01:09] theoretical se section and a demonstration on how to access and visualize OC3 SAM mode data. The The third session will be next Wednesday,
[01:25] October 29th at the same time. There is a homework associated with this training and that homework will open on October
[01:33] 29th. So at the during the last session, it'll we'll open up the homework and it's going to be due on November 12th.
[01:42] You can access the homework through the training web page and um participants who have attended all three sessions
[01:52] live sessions and complete the homework by the due date will be given a certificate of completion. And just a reminder, these are the
[02:03] prerequisites for this training, the fundamentals of remote sensing. And couple of years ago we did a an
[02:11] introductory training on CIF. Um it was uh CIF and LAR to assess vegetation change and vulnerability. So the
[02:18] prerequisite would be a review of the CIF component of that training. In the next couple of slides I'll
[02:27] provide an overview of today's session. So today's trainers are myself. I'm acting as the ARSET training coordinator
[02:37] for this webinar series. And we have two invited experts. We have Dr. Yunji Leu. She's a scientist at NASA's Jet
[02:46] Propulsion Laboratory. She will provide the theoretical component of today's webinar. And we have Jackie Ryan. She's a data visualization developer at the
[02:58] NASA's Jet Propulsion Laboratory as well. And she will be leading the demo. Here are the objectives for today's
[03:09] session. By the end of this session, participants will be able to identify the characteristics and operating modes
[03:17] of OCO2, OCO3, and other SIFT data sets. Recognize the synergistic use of CIF with other data sets. Recognize some of
[03:27] the applications of SIF. uh recognize how the OC3 snapshot area mode uh or SAM mode can be visualized
[03:38] using an opensource Jupyter notebook as a means to evaluate land change due to fire impacts. Run this Jupyter notebook environment
[03:47] from lesson one and run the OC3 SAM notebook to analyze and visualize vegetation change due to fire across two
[03:56] case study sites. And finally, quantify the CIF GPP relationship by comparing remote sensing data with OCO3 uh or or um sorry, remote sensing data
[04:09] from O3 with Eddie Flux tower data at the two case study sites. How to ask questions? Please write your
[04:20] questions in the questions box which is located located um in the bottom right. There are three points. There's a menu that will pop up.
[04:30] Select the first option which is Q&A and there you can write your question. Feel free to enter your questions during the
[04:40] presentation and we will try to respond all of the questions during the Q&A session after the um after this
[04:48] presentation. the remainder of the questions. If we don't get to answer all of the questions, uh we will answer them
[04:56] in the Q&A document. Uh so we compile all of the questions into a Q&A document and we will post that document on the
[05:04] training web page um in about a week. So today's session is focused on OCO2 and OC3 observing modes and CIF
[05:15] observations. Our guest instructor is Dr. Yunji Leu. As mentioned earlier, she is a principal scientist at NASA's Jet
[05:25] Propulsion Laboratory, and she is an expert on CIF. So, we're very grateful to have her uh lead this part of the
[05:34] training. Thank you very much, Dr. Louu, and welcome. Uh thanks Eric for the introduction and thank you all for um joining the second
[05:47] part of the RA training on CIF. Uh in this part of the uh um lecture I will
[05:54] first give a overview of the orbiting carbon observatory 2 and o3 observing modes and their solar induced
[06:02] chlorophyll fluorosis safe observations and then followed with a brief introduction um to the level three uh safe products. In the end I will end um
[06:12] I will talk about uh application examples using these observations. So O2 and O3 um both observes two main
[06:25] observables column CO2 and the so and the safe observations using reflected sunlight but they are in different
[06:33] platforms. platforms. So here the animation shows the column CO2 from both O2 and O3 and O2 is on um
[06:42] a train. So it has poleto-pole coverage depending on the seasons and it has fixed uh s like 30 p.m. equatorial
[06:52] crossing time and was launched in uh July 2014. So it has more than 10 years of record. Um so it had the the
[07:00] footprint size is pretty small. is about 1.3 by 2.3 kilometers and but it has a very narrow swath so it only had eight
[07:09] footprints across track. It has about 16day repeat cycle for O3 is mounted on international space station so it only
[07:18] has observations within 52 degrees uh latitude bands. Um it also has uh different coverage depending on the
[07:27] season and observations also have different time of the day overpassing time. So this is very unique compared to
[07:34] OO2. So it has irregular repeat cycle and also irregular overpassing time and was launched in May 2019. So it has a
[07:44] little bit more than five years of record. So here I will talk a little bit about observing modes. Oio2 has uh three
[07:55] observing modes. So nater uh glint and target mode. For the nater mode on the left uh panel looking straight down. So
[08:04] it provides the highest spatial resolution of footprint size on the surface. So it has better coverage over
[08:12] like partially cloudy or uh like the sur surface with high topography but native observations doesn't have very good signal to noise ratio over
[08:23] dark ocean surface just because ocean is highly absorbing of sunlight at a nater mode. So this comes to the glen mode. Uh
[08:33] in the glim mode the spacecraft points the instrument toward a bright glint spot. So the solar radiation is
[08:40] reflected from the surface. So this increase the observation uh the signal to noise ratio over the high latitude
[08:47] and also o over the ocean surface. So all over the ocean surface we have glint observations observations and then uh for the target mode the
[08:58] observatory locks its view onto a specific surface location and then retain that view uh while flying overboard. So the target mode are
[09:07] primarily used for validation um purpose. purpose. Besides the land nator glint and the uh native observations, o3 has this various
[09:19] unique snapshot area maps. Um for the same observations o3 scan this 80 kilometer by 80 kilometer area within
[09:29] two minute. So it has a little bit broader observation coverage compared to target modes. And this plot showing the
[09:37] uh special distributions of SAM observations focus on the SE. The yellow location shows the location with a
[09:45] little bit low uh with lower safe observ values representing lower productivity while the purple sites are the high safe
[09:53] uh sites. Um and then you can also request additional safe observations by uh request by filling up online form on
[10:02] O3 SAM website. So I put the link for both the form and the OIO3M website here. And between the request time and
[10:12] the uh the first collection it takes about uh 16 days. Here are two examples of OO3 SAM SIF
[10:24] observations. The left is over Cairo uh Egypt and the right over inran China. So both sides are semi-arid region with uh
[10:35] crop uh coverage. So you can see that the crop and forest area has much higher safe value uh indicating much higher
[10:44] productivity compared to uh the background. So for both sides you can see that feature. Um these are two uh examples of SIF maps
[10:58] from the OU3 website where it has all the uh column CO2 and CIF uh maps from the uh same uh locations. So the uh this
[11:09] the left shows the CIF uh maps over hover forest flux tower sites uh in the winter time while the right is at the
[11:18] same location but during the summertime. So you can see during the winter time the safe value are relative much lower
[11:25] because of lower productivity while the right has much higher uh safe values and I can also see this spatial gradient. So
[11:34] it has much higher values over the uh top uh right uh corner indicating higher productivities productivities um of the uh plants.
[11:50] Uh so this animation displays monthly mean safe values uh from O2. It highlights this consistently high productivity uh throughout the year in
[12:00] tropical regions as well as this seasonal shift. You can see over the mid and high latitude. So during the boreal
[12:08] summer, the Midwest shows very high productivity primarily due to um crop growth. And you can I can see that over the high
[12:20] latitude there is no observations during the winter just because OO2 using reflect sunlight and there is no light
[12:26] so there is no observation during the winter time. Well, this animation presents uh a bi-weekly SIF observations
[12:35] from OU2 and OU3 together. Um well, the safe spatial patterns are very similar to the one that I just show, but the
[12:43] distinct sampling pattern of OU2 O3 are much more uh obvious here. Uh you can see like the OO3 has this irregular
[12:52] spatial uh coverage, but OU2 had this fixed pole-to-ole observation uh coverage. Um as mentioned earlier um so OU3 is
[13:05] mounted on the international space station. So it has this irregular orbit and also irregular local overpassing time and this allows O3 to observe safe
[13:15] at different time of the day across its uh different overpasses. So these six plots display the local overpass time um
[13:24] measured at the difference between the local passing time and the local solar noon over 60-day uh period. Um so this
[13:33] data shows that o3 local or passing time can range from approximately like minus 6 to 6 relative to uh new time. So
[13:42] because of this different overpassing time the OO3 observations can help us understand dial cycles of plants productivity.
[13:53] Um this shows a example of safe donal cycle observed by O3. This is over Santaita uh California. Um although the
[14:03] observations at different time of the day were collected uh across multiple overpasses but the the the patent
[14:11] generally uh shows a higher productivity um during the noon and early afternoon while lower productivity during the
[14:21] early uh morning and the late afternoon. And this example shows um regraded target safe observations. During target
[14:34] mode, the different footprints has a very large overlaps. So we can take advantage of this feature and regraded
[14:41] the target mode observation to a much higher spatial resolution than the original footprint size. So this rig
[14:48] graded product is at um 500 by 500 meter resolution instead of the original 1.3x 2.3 km resolution and this is over Kotek
[15:00] site in Los Angeles. On the left is the safe value in October 19th while the right shows the um safe
[15:09] value in uh April uh 2022. Um for for California in October we have much uh little water available. So the
[15:20] uh productivity is very low uh shown here as low s values. While during the spring we have uh much more water
[15:29] available. So there has higher productivity and shown here um as higher safe values. And this is the special distributions of
[15:41] the target sites across the globe. And those sites are also corresponding to surface remote sensing uh ton sites
[15:49] which are used for validation of the uh CO2 observation from uh O2 and O3. So those sites are mainly uh concentrated
[15:59] over uh North America and Europe and some sites over uh East Asia. um both OU2 and OU3 um have very narrow
[16:12] swath as I mentioned earlier. So this results in a very significant uh spatial gaps between observation tracks. Um so
[16:21] this can become very inconvenient for a lot of uh data users. So in this next section I will talk about the level
[16:29] three gap field safe products that derived from OO2 O3 level two observations. Unlike level two data products, level three had this
[16:40] wallto-wall spatial coverage and also has much higher uh temporal coverage. Um this schematic plot uh illustrates a
[16:50] general process that has been used to generate level three safe products. Um this approach the different approaches
[16:58] generally just combine the satellite derived um like vegetation indices such as EVI um fraction of uh PAR or
[17:08] meteorological variables such as air temperature, vapor pressure deficit, so moisture and then uh combined with uh the machine tech machine learning
[17:19] techniques to uh derive a relationship between the input variables and the the uh output the variable SIF and then we
[17:27] can then um we can use this trained model to predict the SIF values where we don't have uh SIF observations.
[17:37] There are a few uh level three SIF products that's based on the OO2 level two. So GOIF is one of the most um
[17:46] broadly used products is generated by University of New Hampshire. So it has three temporal resolution 8 day, monthly
[17:54] and annually. It has 8 uh 0.05 0.05 uh spatial resolution. Um it also has uh uh GP products corresponding to
[18:05] this resolutions and CF uh was produced by University of Colombia. It has 4 day uh temporal resolution and same um spatial
[18:16] resolution as GOF. Well, OU2005 resol uh products is generated by um Cornell University. It has bi-weekly temporal resolution and same special
[18:28] resolution as GOF and uh CF and this shows um example of OO2 level three product and also corresponding
[18:40] level two product. So we can see the difference between the level two and the level three product. on the top shows
[18:47] annual mean safe at one degree resolution and the right shows maximum safe and also at one resolution while at
[18:55] the uh at the bottom two panels shows the um the corresponding level three products at 0.05 resolution. So you can
[19:06] see like for the level two safe product still has some temporal uh gaps has some has still has some special gaps while
[19:15] for the level three products it has this very nice wallto-wall coverage but retains this um special characteristic
[19:25] characteristics at the level two products for example both shows the maximum SIF values over the Midwest um
[19:33] during this um maximum in the maximum safe maps for level three for O2 for O3 as I
[19:45] mentioned before that because O3 is on international space station so it has different time of the day at different
[19:53] overpassing time and this actually allows the community to generate dial level three safe products. So the left
[20:02] panel shows the hours from local noon for these three days while the this animation so shows the hourly level
[20:10] three safe product derived from O3 uh SIF. So it has showing this very nice dial cycles of O3 of the SIF values and
[20:22] this data also available on uh this uh link. This shows example how the um the level three uh donosafe products can help us
[20:35] understand the dono cycles um of GPP over the globe. So the the plus shows the difference between GBP in the
[20:46] afternoon and in the morning for two July months. The top shows the dry July months while for the bottom shows a wet
[20:54] July and the wet and dry are defined at each pixel. And then we can see for either dry July or wet July, the
[21:04] afternoon GP is lower than the morning GPP uh indicating that the productivity is reduced in the afternoon due to the
[21:13] water stress. Well, in the dry July, the depression due to this water stress is even larger, which is very uh obvious in
[21:23] the southeast of US and also over the tropical region uh indicating that the wa the plants is much more water
[21:33] stressed during the dry year of the in July. July. So this indicates that level three diono safe products can help us understand the
[21:43] dial cycle of the plants photosynthesis. Um another uh level three don products I want to introduce here is called geo. It
[21:56] combines O3 SIF and u um the greenness from a geostationary satellite called GK2A. So GK2A is situated over eastern
[22:07] Asia and Oceanania region. Uh it has reflectance and short wave radiation and also vapor pressure deficit derived from
[22:16] uh this satellite. Gio SF has hourly uh temporal resolution and at 2 kilometer spatial resolution. And this the top left shows the OCO3 SIF
[22:29] uh values and the top right shows the um reflectance the near uh the the greenest products from GK2A. While the bottom two
[22:39] panels shows the level three SIF uh in the morning and the level three SE in the afternoon. So it shows the morning
[22:46] self has much higher values than the more than the afternoon self. This shows the similar feature as I just showed in
[22:53] the previous slide that the afternoon productivity is reduced just because of the uh water stress especially during
[23:01] the summertime. Um on the next I would talk a little bit about synergistic use of o3 stiff and
[23:11] ecos data. um on the international space station uh it has a a a suite of the uh
[23:19] cell missions that can that observe the earth. The ecos is one of uh those satellites that observes uh the um
[23:28] surface temperature and also retrieves water stress. I will give a brief introduction of the ecostress instrument. Um so the ecos
[23:38] uh has special resolution about 70 mters and 7 by 70 m. So it has much higher spatial resolution than O3 but it also
[23:47] has very uh wide swath. So swath width is close to 400 kilometers. The plot on the right shows O3 SE
[23:57] overlaid on top of the land surface temperature uh retrieved from EOS stress. You can see that the higher SI
[24:06] values are uh on top of the lower uh temperature. This is because when plants photosynthesize photosynthesize it uh release water to the atmosphere
[24:18] and at some time absorbing um heat so then cooler cool the the land surface. Um so this can really tell us how
[24:28] effective the plants um convert water to productivity. So the community had defined a quantity to measure this is
[24:37] called water use efficiency. It is defined at the ratio between the productivity. Here we can use sift to
[24:44] repres represent productivity and evaporate transpiration which is the amount of water released uh dur photosynthesis which can be def uh
[24:53] derived from land surface temperature from ecos and o3 uh project team has generated this colllocated ecos and o3 data
[25:05] products and it's available on uh nasa data service and also I provide the link Here Here here um I show an example
[25:17] um using both SIF and ET from EOS stress to investigate the donal patterns of uh vegetation photosynthesis and the
[25:27] coupling between the water cycle and the carbon cycle. And the top two rows shows uh the SIF donal patterns and ET donal
[25:40] patterns over uh Amazon. So you can see that um both SIF and evaporation respiration increases toward uh the noon time and decreased toward
[25:54] the afternoon time. Um that's because we have more sunlight. Um so you have more productivity but at the same time you
[26:03] release more water. But for water use efficiency is actually decreasing clouds close to the noon time. That means the
[26:12] plants is more water stressed close to the the noon time and also means it needs more water to fix the same amount
[26:20] of carbon at noon relative to the morning time. So thisam example tells us that we can use SIF and ET together to
[26:32] understand the coupling between the water cycle and the carbon cycle at DAL uh cycle DAL scale. Uh at last I will give you a few
[26:44] examples of um using CIF to solve the to understand the climate impact on the productivity and how we use CIF to
[26:54] improve the crop yield predictions. The first example is um is is the first example investigates the response of the
[27:08] productivity to uh climate anomalies is here is showing um the the response of this productivity to 2020 heat wave uh
[27:19] in Siberia and the top panel shows the temperature temperature anomalies in March, April, May uh in 2020. 20 and it it shows that
[27:30] the temperature anomaly is can be above 5° Celsius in this region and in in year 2020 Siberia region experienced the the
[27:40] warmest spring uh in the record we're corresponding to this warm temperature anomalies we can see this increase of
[27:49] productivity this based on the gov gp products um so this indicating the warmer temperature in the highlight
[27:57] latitude in springtime it actually promotes a plant's growth. This is because over the high latitude where is
[28:05] normally very uh cold so the plant's growth is uh limited by temperature. So when the temperature is warmer the
[28:14] plants actually grow better. So this tells us this example tells us that we can use SIF uh products and also the GP
[28:22] products to understand the um the climate anomalies on the uh plant's growth. growth. The second example I want to show is how
[28:33] we can use uh CIF and GBP products derived from OU2 and O3 to understand the drought impact. Uh so this study
[28:42] look at uh the drought impact the drought impact on the for the census over Southeast Asia. So the left panel
[28:50] shows the uh land cover types over this region. You can the green color represents forest while the yellow
[28:57] represent um the crop mainly crops uh crop land. Um the middle panel shows u the drought index averaged uh between September 2014
[29:09] and August 2016 about two-year time period. So red color means um much more severe drought. um relative to this um
[29:20] corresponding to this severe drought especially over the central part of this map um with the gopher shows the a large
[29:28] reduction in the productivity especially over this cropland area. So this uh example indicates that go products either the SIF uh derived level
[29:41] three products could help us understand the drought impact on the uh productivity. productivity. Um so the last example I want to show is
[29:51] how we use SIF to improve the crop yield predictions. Um as we all know like it's very critical to to know the uh crop
[30:02] productivity for uh early warning of the um the food insecurity or for the economic uh planning purpose. Well the
[30:12] the crop yield is normally generated by the statistical method at end of the uh harvest season which can be very late
[30:20] for the planning purpose. Well, this study demonstrates that we can use SIF to generate low latency crop yield
[30:28] prediction. Um, so the left panel shows the crop yield prediction based on the climate data and also SIF uh O2 uh SIF
[30:36] data and the middle panel shows crop yield prediction uh over middle west US uh only use climate and land surface
[30:44] temperature while the red panel shows the uh the the observation from statistical uh method. Um so this three
[30:53] the comparison of these three plots you can see that the sif based prediction better captures the spatial distribution
[31:00] of the observation than the prediction only based on the climate. So this really shows a promise of uh generating
[31:09] the low latency um crop yield prediction based on um safe products from o2. So this come to the summary and uh some
[31:20] resources that you can check later on. Um so OO2 had this global observation coverage while OO3 has observation at
[31:29] different time of the day that really complementaryary. Um so we have both level two and the level three safe
[31:36] products available and this can be used to understand the impact of climate prohibitions on uh vegetation uh health
[31:45] and can also be used in drought monitoring and crop yield predictions. And here I list um a few websites that I
[31:54] have talked about in the lecture including O7 website and also uh the products that I have mentioned
[32:02] throughout the slides. With that I will hand it over to Jackie. Thank you so much. Thank you Ginger. Now we'll begin the
[32:16] second exercise of this SIFT training course covering the OC3 snapshot area map mode and flux tower data by looking
[32:24] at case studies in two different regions of the United States. This is following up from our previous session introducing
[32:31] SIFT data and how to work with it. If you've been following along from the first exercise, you should have already
[32:37] installed the course materials and have the Jupiter and notebook environment set up. If you have not done so yet, please
[32:44] review the readme in the code repository or the instructions that we provided in part one before proceeding with this
[32:52] exercise. The first thing I'm going to do is open up my Jupiter notebook in my browser. And so I'll turn over to my
[33:01] desktop so that I can do that. And you can see I already have the Jupyter notebook code open in my text
[33:11] editor, although you can use the terminal as well if you prefer. And I'm going to run the setup script
[33:20] that we ran in part one again. And there's no harm in running this script more than once. Um, and when I do so,
[33:28] it's going to open the Jupyter notebook in my browser. And we can see now I have the Jupiter
[33:38] server running. So I'll pull my browser window down to my screen. And here you can see our notebook
[33:49] exercise exercise one. And I'm going to turn over to the second exercise. With our Jupiter environment open, we'll
[33:59] want to make sure that we're looking at the notebook exercise 2 OCO3 snapshot area map. Um, as you can see on my
[34:07] screen. screen. So, now that we have that out of the way, what is SAM mode? While OO2 and O3
[34:17] share the same spectrometer design, OO3 incorporates a new component, the pointing mirror assembly or PMA. This hardware addition enables the instrument
[34:28] to rapidly sweep a mirror back and forth inside the optics, expanding the observation swath within time windows of
[34:35] several minutes. OCO3 can collect data over a nearly contiguous 80 km by 80 km region. This capability makes SAM
[34:45] particularly valuable for SIFT measurements as it captures finecale vegetation heterogeneity that would otherwise be missed due to the
[34:53] spacecraft's long revisit times. In this exercise, we'll discuss what SAM data looks like, how to retrieve it, and
[35:01] improve upon the method that we used for plotting granules from the first exercise to incorporate footprint coordinates for each sample. Once we
[35:10] have a handle on plotting SAM sift data itself, we can talk about how SAMs are acquired repeatedly at different sites
[35:17] over time to build up a picture of vegetation dynamics in different seasons. The function of SAM observations is similar to that of Eddie
[35:26] Coarian's flux towers, a wellestablished groundbased measurement technique that is used by ecologists to study vegetation dynamics. We can compare data
[35:35] from these two sources to determine if we're getting the same story so to speak from the data in both cases. To
[35:43] accomplish that, we'll correlate gross primary production, in other words, GPP with OSU3 SIF values from SAM mode. The
[35:53] first site that we'll be using as a case study in the exercise will be the University of Michigan biological
[36:00] station in Northern Michigan in the United States. This site will provide a baseline for ideal conditions when
[36:07] studying a temperate deciduous broadleaf forest and we'll contrast our results here with the second site that'll be
[36:14] mentioned later. The site lies in a rural area on the northern tip of Michigan's lower peninsula and is
[36:21] comprised of about 60% vegetation cover with some agricultural fields and small towns interspersed in the surrounding area.
[36:30] area. If you want to investigate a particular site on your own, one of the easiest ways to do that is actually with Google
[36:36] Maps. So, I'll actually go to Google Maps so that we can pull up this site ourselves. ourselves. And what I'll do is I can either input
[36:47] the coordinates of the site itself, um, or I can go to the rough location if I know where that is. Um, in my case,
[36:57] I'll be inputting the coordinates of the site itself. I've included those coordinates in our fourth notebook that
[37:04] we'll be discussing later. Um, for now, we'll skip a specific discussion of that. Um, so here's the latitude and longitude
[37:15] coordinates of our site. And I'll talk about where I got that information later, but first I just want to discuss
[37:23] what this location looks like. And so I've put this into Google Maps and you can see that if I switch to the
[37:31] satellite layer, this is the location of the case study site that we'll be discussing today. When I zoom out,
[37:41] you can see that this location is on the lower peninsula of Michigan. Here's the upper peninsula. And when I zoom in
[37:52] to the highest zoom level, the highest resolution data that we have available, you can see that there's an interesting
[38:00] feature here, which is the tower itself. It looks somewhat similar to a cell phone tower. The next thing we'll do to investigate
[38:09] this site is turn over to the O3 SAM website itself to investigate this tower location in the mission repository.
[38:20] And the website that we use for that is included in the introduction paragraph of our notebook. So I'll go to this link
[38:30] here. here. You can see the URL is up here. And this website contains a map of all
[38:40] of the various sites that OCO3 has studied using the SAM mode over the life of the mission.
[38:50] You can find a specific SAM site by heading to the curated SAM web page that we're looking at right now and searching
[38:57] for it by name or finding it on the map. The different colors for these pins represent different types. In other
[39:05] words, different local ecological conditions that can guide our expectations of what level of plant activity we can find at that location.
[39:14] Let's look at our University of Michigan biological station site just by zooming in on the map and looking around for the
[39:23] location specifically to see how that site is categorized. So if I click on this pin, you can see that this is the site that
[39:34] we're interested in. It's called CIF, University of Michigan, USA, and the OC3 database or CIFUMB is its short name.
[39:44] The type of the SIF site is SIF high. And so the classification that we've given this particular site is that it's
[39:53] a location where we can expect to find high sift values during the growing season. season. The nearby site that we see to the north
[40:03] over Sue St. Marie with a blue square represents a fossil site and this is a location where we would expect to find
[40:10] industrial emissions, more urbanized area and increased emissions, perhaps lower sift compared to a rural or wilderness area
[40:23] like we have in the case study site that we're using. You'll also notice that there are yellow
[40:30] pins and squares representing CIF low sites such as this one to the west. And this is where we would expect to find
[40:38] less dense vegetation and ecosystems like grassland or rural or wilderness areas. So, let's turn back to the infobubble
[40:49] for the site that we're interested in, and we'll use that site name that was mentioned up here to actually search for
[40:59] the SAM acquisitions that were acquired at this site. And don't worry, we'll actually be plotting what these SAM
[41:07] acquisitions look like so you can see the actual data that we're talking about. But first we need to find what
[41:15] data we can actually retrieve. You can see when you click on the pin down below in this form the site name
[41:25] gets populated for you automatically and that site name should be sufficient to find the SAM acquisitions. So if we
[41:34] just type search, we can see a table with all of the SAM acquisitions at this particular site.
[41:45] The table of results describes the time of each observation as well as the number of soundings, which roughly
[41:51] corresponds to the number of samples we can expect to find in the data from each SAM acquisition. So here's our column
[41:59] with soundings and you can see some of them have a value of zero and some of them have a much higher value.
[42:08] To choose the best possible example, we should therefore select a SAM acquisition with a large number of
[42:13] soundings to ensure that we find one with lots of sample points to look at. There are a couple to choose from in
[42:20] just this first page of results. So I'll choose the August 11th, 2019 example. um for no particular reason other than
[42:29] that it has a large number of soundings. When we click the plots button on the right side of the table, we can see that
[42:38] the OCO3 team has already processed the SAM acquisition with a number of different products. So I'll click that.
[42:46] Now Now the first product that we're presented with is the XCO2 data which is the primary product of the OC3 mission.
[42:55] However, when we scroll down, we can also see that there are a number of other different pieces of information,
[43:03] including a SIF 757 nanmter product. And this is the one that we'll be reproducing today. There are two important details we
[43:13] should note before heading to the notebook to actually reproduce that plot, though. Number one, we'll want to
[43:20] note down the geographic extents of the plot data, which are helpfully marked along the X and Y axis.
[43:27] The extent of SAM coverage will vary slightly between acquisitions at the same site. So, you will need to adjust
[43:34] these values a little bit for each date you want to visualize or else use a larger bounding box. The other important
[43:41] detail to note down about the plot is the large red star on the map. And this marker represents the location of the
[43:48] tower site associated with the region. And recall that that tower site is the location that we were looking at in
[43:56] Google Maps. So let's look at this plot a little closer so you can see the exact details that I'm talking about.
[44:03] Remember, we'll want to note down this bounding box, the extent in latitude and longitude, as well as the location of
[44:11] our red star marker on the plot. Okay, with all of that out of the way, we can finally turn over to the notebook
[44:19] and begin running some code. As with the first notebook, in the first cell, we'll just import some necessary
[44:27] dependencies that we need. So, I'll run that now. And with that out of the way, you can see I've also included the same
[44:41] information that I just discussed in a static form in the explainer text for the notebook in this section.
[44:50] In the second cell, we will supply the data of interest and the data set, which is the same OC3 data set that we used in
[44:58] exercise one. So again, we're using the Jezdisk downloader that we used from section one and we'll get the granle for August
[45:10] 11th. Now that we found the granle, we need to filter the data before plotting. To do this, we'll pull up the measurement mode
[45:21] and quality flag variables from the granle. granle. And we know to do this by looking at section 4.7 of the O3 data users guide.
[45:32] I won't pull up the users guide for this particular exercise, but you can look at it on your own if you're interested.
[45:39] Measurement mode 3 is referred to as an area map. And this is what we're actually going to be filtering the data
[45:46] on. on. We'll also filter to just select points with a quality flag of zero or one, which if you recall are points that have
[45:57] a quality of best or good. Additionally, the last filter I'm using is the SAM extent variable that you can
[46:09] see here in the code cell itself. And this extent is based on the latitude and longitude extent that I asked you to
[46:18] note down in the SAM plot from the O3 website. website. So now that we've selected the actual filter criteria that we want to
[46:31] use for creating our plot, the last thing to do is to run the cell itself. So an important detail is that we're
[46:47] using the same plotting function that we used for plotting any other CIF granle from the first exercise. In this case,
[46:56] we get a plot that looks like this. Now this plot is pretty okay. It looks somewhat similar to the SAM plot that's
[47:07] on the OCO3 website. Similar enough that we can tell that we're looking at the same data. So, if I scroll down, I've
[47:15] included the SAM plot itself. And you can see that the shape of data points and the values that we're using or the
[47:23] values that we're observing are pretty much the same between the two with some minor cosmetic differences. So that tells us that we're at least
[47:37] retrieving the correct data. On the other hand, one of the most crucial differences you'll notice right away is that the samples in the official
[47:46] plot are represented by quadrilaterals at varying angles. So, let me scroll back down to that so that you can see
[47:52] it. And here we see the quadrilaterals representing each of the SIF samples. One of the variables provided in the
[48:02] granle file that we haven't considered yet are footprint vertices. Each sample acquired by the instrument has an
[48:10] associated geographic extent of about 2 km cross track and 1 km along track. When using SAM mode, the samples or
[48:19] pixels of the data become skewed as the PMA moves, adjusting the view zenith angle as it goes. To characterize SIF
[48:27] observations as accurately as possible, we should incorporate this information into our plot so that we know the exact
[48:34] area covered by each SIFT value that we see. see. This is especially important in regions with a lot of spatial
[48:42] heterogeneity, heterogeneity, such as where the transition between urban and forested areas is particularly sharp. One other piece of information
[48:51] we'll incorporate in our improved plot will be the tower site coordinate. I've written a function called plot SAM that
[48:59] is included in this cell. So this next cell contains the function plot SAM. And this will actually incorporate the
[49:10] footprint coordinates to make our plot from up here look more like the official plot down here. Specifically, the way that we'll do that
[49:26] is we'll use the geoloccation footprint latitude vertices variable and the same one for longitude. And we'll also use the map plot live
[49:41] patches module to create a set of polygons containing these footprint vertices. as the vertices of the quadrilaterals used to represent each
[49:56] sample. sample. And don't think too hard about that. We're just taking the list of these coordinates and putting it into this
[50:04] patches.polygon class that you can see here. here. Since these patches will be in the same order as the SIF sample values from the
[50:13] granle, we can color map each polygon with its associated value using the set array method. in our patch collection
[50:22] that we've created up here. And this will automatically handle assigning the correct value to the correct quadrilateral.
[50:31] quadrilateral. Another point that we'll add is satellite imagery base map using the contextally module. For the scale of this plot, I've used a
[50:41] zoom level of nine, which I think strikes a good balance between the detail of the satellite data versus the
[50:51] amount of data that's required to actually display the plot. Each zoom level is about four times higher
[50:58] resolution as the previous one. Uh, two times in each dimension. So if you have a slower internet
[51:07] connection or you want to use less data, you can choose a zoom level of seven or eight depending on your specific needs.
[51:18] And that comes at the trade-off of lower resolution for the base map. The last detail that we'll want to note
[51:27] down is that our original plot used an equangular pro projection. For the updated plot, we're using Web Merkar to
[51:36] match the projection of the official plot. And you'll notice the difference there in terms of the subtle difference
[51:46] in the shape of the data itself. So here you can see that the angle of this tail
[51:53] of SAM samples is somewhat different than the angle of the same feature in the official plot. and that's due to
[52:02] projection differences. So, accounting for all of those cosmetic differences as well as the very important inclusion of the footprint
[52:13] vertices, let's see how our own version of the official SAM plot looks. So, I'm running the cell. It's going to
[52:23] take about 30 seconds, and that's because we're actually downloading the satellite imagery to use for our base
[52:29] map. And here we can see that the code has completed and our result looks very close to the
[52:36] official SAM plot. Despite this, the important detail is that we are now incorporating the shape of the SAM footprints into our
[52:46] visualization. visualization. A single SAM plot on its own can be useful for context on a specific day and
[52:54] to get a sense of the SIFT behavior in your region of interest. But we can only truly build up a picture of vegetation
[53:00] dynamics around a site through many successive observations across seasons and years. So let's move to the second section now
[53:08] where we'll be performing a more long-term analysis of ours case study site. Now we'll compare the SAM acquisitions
[53:22] to the flux tower data collected by instruments located at that red star on our plot. Edcoarian flux towers measure carbon
[53:31] dioxide exchange between ecosystems in the atmosphere. Since plants take in carbon dioxide and release oxygen when performing photosynthesis,
[53:41] we can measure this behavior by tracking minute changes in gas concentrations around the tower site. The towers are
[53:48] also effectively weather stations and the additional data they collect can be used to differentiate the motion of
[53:54] gases in the environment due to wind and other effects from the influence of primary production. Although some towers
[54:01] measure SIF, this is somewhat uncommon. So we can't perform a direct SIFT to SIF comparison between the tower and OO3 for
[54:11] this particular site. When we look at tower data, the two variables we're most interested in are net ecosystem
[54:19] exchange, NE, and GPP, gross primary production. In this exercise, we'll pull GPP values from the MBS tower. Data from towers all
[54:31] across North America are archived on the flux website and can be accessed for free with an account. In this
[54:38] demonstration, however, we're not going to guide you through creating an account or downloading the data yourself since
[54:44] you can do this on your own later. That also means that we haven't automated this step. So, you'll have to manually
[54:51] download data for any particular site that you want to study outside of our two case study sites.
[55:00] As I mentioned, we've already downloaded the tower data and included it in the CSV files in the same directory as the
[55:10] notebooks themselves, which you can see over here. Let's briefly pull up the Ammeraflex page for the MBS tower anyways so that
[55:22] we can see what the information that gets provided for a given tower looks like. like. and I'll do that by clicking on the link
[55:31] that we've included in the description text. Okay, so looking at the flux website, we can see that the coordinate that I input
[55:44] into Google maps at the beginning of this lesson is included right here. Uh, we've also got a description of the
[55:52] vegetation information around the site, which I also mentioned at the beginning of this exercise, a helpful picture showing context of
[56:02] what the tower and the surrounding area looks like, and we have links to download the data down here.
[56:10] AFLUL data is provided in a CSV format at monthly, daily, and even sub daily time scales of either 1 hour or every
[56:19] half hour. For our purposes, using daily tower data will be sufficient. And going back over to our notebook,
[56:28] this is the CSV file that we've provided in the course materials itself. And here you can see that file name in its full
[56:39] detail. Let's talk about the file name itself so that you can get a sense of what we're
[56:48] actually working with. So for a given CSV file with a flux data, data, AMF tells us that this is a flux data.
[57:00] USMB tells us that the site identifier code is for the UNMBS tower that we're interested in. Fluxnet refers to flexnet
[57:10] data as opposed to badm base or any other type of data set that might be included for this tower. The subset
[57:19] identifier tells us that this is only a subset of the variables. However, since we're only interested in NE and GPP,
[57:28] that's sufficient for our use case. DD tells us that this is the daily time cadence data and 2019 to 2021 tells us
[57:38] that this data only covers the years 2019 to 2021. I've manually cropped the number of dates in this data to include
[57:50] data only from the lifetime of the OO3 mission. If you had downloaded this data yourself, you would get 2007 through
[57:58] 2021 worth of data. So, let's take a look at what we're actually going to be doing in this code
[58:06] block. We'll open the CSV with the GPP data and create a time series plot of its values. For comparison, we'll also
[58:15] plot the average SIFT value from the area around the tower site, which has already been pre-processed in the JSON
[58:22] file that you can see down here in the included course materials. The code to perform this step is included in the
[58:30] optional appendix notebook that I briefly looked at at the beginning of this exercise, 04_appendix.b. And that code has already been run for
[58:41] you to save time since the search code itself to perform this pre-processing can take upwards of 2 hours. For the
[58:49] time series, we'll use two different channels from the CSV file itself corresponding to two different retrieval methods for estimating GP from Eddie
[58:57] coariance data. If you're interested, citations have been provided on the details of these two techniques. And here are the sources for how this GPP
[59:07] data is actually derived. So let's plot the time series now and see what it looks like. All right, we only have a little over 2
[59:20] years worth of data to look at here and that's enough for us to observe the cyclical nature of the data. Remember
[59:27] both GP and CF are proxies for plant activity. So we would expect to see a seasonal pattern in the data. Indeed, we
[59:36] can see that the GBP peaks in the growing season from May to October and that there are dormant seasons in winter
[59:45] and early spring from November through April. The deciduous broadleaf forest we are studying at this site exhibits rapid
[59:52] transitions during leaf out in spring and when the leaves fall in autumn. In this case, we can also note that the two
[1:00:01] GPP retrievalss agree with each other pretty closely, represented by our two differently colored lines in the plot.
[1:00:08] Although there are some outliers where the two GP retrieval methods do disagree, it's clear that the SIFT data
[1:00:15] follows the same phenological trend of high values in the growing season and low values in the dormant season. Before
[1:00:22] we move on, let's think about the differences in the GPP and SIFT data a little more critically.
[1:00:30] GPP is a measure of primary production and is therefore a direct measure of the carbon produced by plants through their
[1:00:35] photosynthesis. photosynthesis. While SIF is a good proxy for photosynthesis activity, it only represents the light reactions in the
[1:00:43] plant. And when observed from space, only those plants representing the canopy rather than the entire ecosystem are included in the measurable SIF value
[1:00:56] that we get. Broadly speaking, observed CIF will depend on the light use efficiency of the plants being observed,
[1:01:03] which can vary by species and plant physiology. For example, a crop like corn, a common C4 photosynthesizer,
[1:01:11] has a different light use efficiency compared to soy, which uses C3 photosynthesis. Additionally, changes in plant health can have very fine spatial
[1:01:22] heterogeneity that affects the SIF signal in some places differently than in others. While a tower only observes a
[1:01:29] small area, the spatial aggregation technique that we use to get the SIF values that are included in this plot
[1:01:36] average samples across a broad area of several square kilm. If there were an ecological disruption like a flood or a fire, how might you
[1:01:46] expect the SIFG GP relationship that we're looking at here to be affected? Do you think that ecological disruptions
[1:01:53] can impact the phenological or seasonal patterns that we've noticed? At the end of the exercise, we'll use our second
[1:02:00] case study to run these plots again and see if there's any difference that we can note. Okay, so now that we've looked at the
[1:02:10] time series, let's try to correlate our remote sensing data with the towerbased GP data to see how related they are. You
[1:02:19] can see the general pattern of CIF follows the pattern of GPP in our plot, but we'd also like to quantify how well
[1:02:27] it does. So in in in this last cell in the section, we'll be performing that correlation. To do this, we'll create a scatter plot
[1:02:46] with CIF on the X-axis and GPP on the Y-axis. Y-axis. For the GPP data, we'll choose the
[1:02:53] nighttime partitioned retrieval method from the tower. Although you'll obtain a similar result using the daytime partition values, either of the lines on
[1:03:03] the plot. We'll add in a linear regression line using the sklearn module and compute an R 2 value.
[1:03:13] Finally, to make the points easier to parse, we'll give each point a color based on the season that it came from.
[1:03:19] We've provided the option to use different marker shapes depending on the year of the data point. But to keep the
[1:03:25] plot simple, we've disabled that feature by default. Let's run the code to create this scatter plot and see what we get.
[1:03:33] So here you can see that we've sorted data into seasons. We perform some simple filtering of our input data
[1:03:42] values. values. We We create the plot here and we calculate an R squar value down here. So again, let's run the cell and see the
[1:03:56] result that we get. It's quite a lot of code um which I won't be going through in this exercise, but there's plenty of
[1:04:04] comments. So if you're interested in the specifics of the implementation, you can review it on your own after this
[1:04:10] exercise. exercise. And here we have the correlation plot. Our R 2 result of 0.73 suggests that these variables are well
[1:04:22] correlated and it's only a little less than the R squar value reported from comparing daily SIFT to J daily GPP in
[1:04:31] the Pierat atall 2022 paper. That's the basis for this exercise. We can improve the correlation further by filtering the
[1:04:40] data on biome type when doing the pre-processing to create the JSON source file that we use for creating this plot
[1:04:48] in the first place and that comes from the appendix as I mentioned. As with the time series plot, we can see
[1:04:57] that there are some outlier points in the data. In particular, these points over here, the points far to the right of the trend
[1:05:06] line suggest times when the observed SIF was higher than expected compared to the GPP value measured at the tower.
[1:05:15] We can use the SAM plot that we generated in section one to pull up context for one of these points so that
[1:05:23] we can observe if there's anything that we can notice about the spatial distribution of SIF points that could
[1:05:30] indicate why we get this result. The summer data point, this yellow one furthest to the right, corresponds to
[1:05:37] June 2nd, 2021, which we can note down by looking at the time series plot. Let's pull this up as a SAM plot. And we
[1:05:46] do so in the last cell over here. We can see that while there are some large SIF values near the tower
[1:06:01] indicated by the darker green, others are quite low indicated by the light green or yellow. Additionally, there are
[1:06:09] gaps in the data caused by clouds and lowquality data. The SIF value we observed could have a variety of causes
[1:06:16] such as our spatial aggregation picking up agricultural fields in the vicinity during peak growing season or due to
[1:06:24] surface and isotropy playing a larger role at the time of the SAM acquisition. Unlike nater mode where the view zenith
[1:06:31] angle should be at or near zero, the SAM mode can have varying view zenith angle values between samples due to the action
[1:06:41] of the pointing mirror assembly. In this particular case, it looks like we have low data availability noted by the lack of data up here in the
[1:06:52] forested region directly around the tower causing the crop land to the east over here to be over represented in the
[1:06:59] spatial average. We can test this observation by filtering our data in the appendix pre-processing step to only consider
[1:07:06] sift samples with a deciduous forest or mixed forest biome classification. If you were to do that, you would see
[1:07:14] that the observed CIF at this outlier point would be closer to the trend line and our R squar would be improved to
[1:07:21] 0.76 overall. That's left as an exercise to the reader. So to review what we've learned so far
[1:07:31] and deepen our understanding of the SIFT DPP relationship, we'll move to the second case study of this exercise
[1:07:39] by creating the plots in section 2. Over again, we should hopefully see some different results. This time we'll be using the MLUS forest
[1:07:48] site in Oregon, also called USME2. So I'll pull that up by searching for it directly in the Ameroflux website.
[1:08:00] I'll search for USME2. If you don't know the site identifier of your specific site, that's okay. You can
[1:08:09] find it by using the OC3 SAM website that I mentioned at the beginning of this exercise. And here we see the second case study
[1:08:21] site as opposed to the Michigan site. This location is an evergreen forest on the side of a mountain in the Cascade Range
[1:08:32] of the western US. Because we are talking about an evergreen forest. Now, one of the patterns you'll notice is a less
[1:08:39] pronounced drop off and ramp up in activity during seasonal transitions. Another important detail to note about USME2
[1:08:48] USME2 is that there was a major wildfire in this region of Oregon in August 2020 and the area around the tower itself was
[1:08:55] burned. Despite this, the tower managed to continue collecting data. So, we have a valuable resource on how this
[1:09:02] ecosystem responded to the disruption. Let's turn back over to the notebook and run the plots again to see what we can
[1:09:10] observe. So, I'll scroll back up to the beginning of section two, which is where we created the time series plot in the
[1:09:19] first cell of this section. And you can see we've already provided a line with the CSV file of a Maraflux
[1:09:30] data for the USME2 site as well as our pre-processed SIF values from OC3 that again come from the appendix notebook.
[1:09:39] I'll comment out the original lines that we used for producing our plots with MBS site data and I'll uncomment these lines
[1:09:50] to represent the USME2 site data and then I'll run the cell again. We don't have a ton of pre-fire, CIF,
[1:10:02] and GPP data to work with, although we could look further back in the GPP record if we wanted to. We've cut it off
[1:10:10] to the beginning of the OC3 mission for this particular exercise. This is still enough for us to see about
[1:10:17] one year worth of data before the fire and give us a picture of the phenological cycle in the material.
[1:10:25] This is enough for us to see about one year worth of data and gives us a picture of the phenological cycle in the
[1:10:31] Mousleius forest region. As I mentioned, the dormant season down here is shorter and has less of a stark drop off
[1:10:40] compared with the deciduous forest that we studied earlier. This can also partly be attributed to the climatology, although you would see
[1:10:48] similar effects when comparing forests with the same climate classification. And hopefully these two sites have a very similar latitude.
[1:10:58] After the fire, GPP drops off significantly, noted by this flatline down here. Nevertheless, it is possible to see a
[1:11:09] small peak in activity during the summer of 2021 with a larger peak, at least in the nighttime partitioned data, in 2022.
[1:11:20] This recovery around the tower can likely be attributed to serial growth in the region where the burn scars filled
[1:11:26] in with grasses and opportunistic brush. The serial growth is s the seral growth is stronger in the
[1:11:34] subsequent year possibly due to young trees taking the place of burned and logged mature trees affected by the
[1:11:41] fire. fire. Now let's look at the SIF values that we see in this plot. While the initial SIF
[1:11:48] values from 2019 and 2020 agree with the DPP behavior around the tower, the two measurements diverge after the fire.
[1:11:57] In summer 2021 and 2022, we see peaks in CIFF to a similar level that we saw prior to the fire, a trend that is not
[1:12:06] reflected in GPP. When the wildfire burned through this region, not every area was as heavily impacted as the
[1:12:14] region directly around the tower site. Therefore, we can still observe some CIF activity from unaffected strands of
[1:12:21] trees in the vicinity. Now, let's generate our regression plot for this example and see what information we can note.
[1:12:33] And again, as with the first cell that we ran, I'm going to uncomment these two lines containing the updated GP and SIF
[1:12:41] file. file. Okay. Our R squar value is significantly worse than the Michigan site at just 0.121. In the absence of additional context,
[1:12:57] this might suggest that these variables are almost uncorrelated. But as we observed in the time series, there's
[1:13:03] still a seasonal pattern to sift. It just diverges from the GPP data due to the effects of the fire. Taking a look
[1:13:11] at the SAM plot for a specific date can help to make this more apparent. For the final plot of this exercise, let's pull
[1:13:18] up a SAM of the Musleius Forest region before and after the fire to see what spatial patterns we can observe, at
[1:13:25] least qualitatively. For the pre-fire data point, we can look at June 19th, 2020. And then after the fire, we can
[1:13:34] study May 28th, 2021. We can plot those two SAMs ourselves using the notebook. However, you'll have to find the SAM extents manually by
[1:13:46] checking against the official OC3 plots. An easier way for us to do this is to just look at the official OC3 SAM plots
[1:13:55] themselves since they've already been generated for us. So, I'll return to the O3 SAM website and I'll find the USME2
[1:14:04] site on the map. I know it's in the US state of Oregon. So I'll zoom in and the CIF low site that we can see
[1:14:16] here is referred to as Ecostess USME2 on the map. Let's now search for all of the SAM
[1:14:25] acquisitions. The first date we'll want to use is June 19th, 2020, as I mentioned. And let's pull up the tab with the plots.
[1:14:38] If I scroll down to the CIF 757 nanometer plot, we can take a closer look at the spatial features that we
[1:14:47] note note in the 2020 data. We note a pattern of growing season behavior in this region under normal conditions.
[1:14:59] CIF is generally higher in this season despite a somewhat lower average value compared with the GPP. But we can observe that the area around
[1:15:09] the tower has a somewhat lower value and low data availability. It's only when we average points from
[1:15:18] around the region of the tower that we achieve the value that you can see in the time series and the correlation
[1:15:26] plot. plot. Now, let's take a look at the 2021 data to see if we can note anything different
[1:15:33] about that particular acquisition. So, I'll go to the next page of results and I'll go to May 28th
[1:15:43] and let me pull up this plot. In this example, we noted a much higher CIF value than the corresponding GP
[1:15:55] value in our time series. Let me turn back over to the time series plot so that you can see what I'm talking about.
[1:16:02] Over here, you can see the time series for this site. And we're looking at May 2021, which is around here.
[1:16:13] And CIF is peaking for the growing season in this region despite GPP being very low around the tower site. Let's
[1:16:21] turn back over to the plot and see what we can notice. data availability is still quite sparse
[1:16:29] like we saw in 2020 around the tower site. But in the 2021 data, we can definitely see that the value closest to
[1:16:38] the tower is relatively low compared to the surrounding area. There are sporadic samples in the forest in this region that have high cif these
[1:16:50] darker green values especially higher up in the mountain range that show that the spatial heterogeneity of this region is
[1:16:58] quite high. This suggests that the fire affected different regions of this forest in quite a fine pattern with
[1:17:09] areas that were completely burnt in some regions and unaffected in other areas. You can investigate this relationship by
[1:17:20] analyzing more dates and even other sites on your own. And now that we've explained the basics of performing a
[1:17:27] SIFG GPP correlation, you should be able to perform it for any arbitrary site within the Ammerlux data set.
[1:17:35] That concludes this exercise and thank you very much for your attention. Thank you very much Jackie for that
[1:17:47] great demonstration and to Dr. Lou for the great presentation. Next, I will provide a summary of today's session.
[1:17:57] So, in summary, OCO2 has global coverage while OCO3 has observations between more or less 52 degrees north
[1:18:06] south latitude and at different times of day. Um, OCO3 has an extra observing mode which is called the SAM mode, the
[1:18:15] snapshot area mode. and L level two and level three SIFT data can be used for um understanding or addressing different
[1:18:24] applications such as understanding the impact of climate perturvations on vegetation health, drought monitoring and crop yield prediction.
[1:18:36] And here's a list of resources for those wishing to dive deeper into the material that was presented today.
[1:18:46] If you have any questions about the material presented today, please feel free to contact uh Dr. Jane Jaloo, uh
[1:18:54] Jackie Ryan or Karen Yuan. And then just a reminder that there is a third session, a third and final session
[1:19:05] next week, next Wednesday, October 29th at the same time. And that session will uh run a Jupyter notebooks to compare
[1:19:16] how gapfield sift products such as GOIF can be used for assessing the impact of floods and droughts on cropland through
[1:19:25] specific case studies in the Midwest. Uh you'll be using Jupyter Notebook tutorials to choose an other region or
[1:19:33] time frame of your choice and reproduce new products for another analysis. And uh you'll compare CIF products
[1:19:43] aggregated in space and time using open-source tools and how they can be used to study vegetation change across
[1:19:50] different regions in a variety of science and applied use cases. So with that we've reached uh the end
[1:19:59] now of session two. Um, thank you again to our guest instructors and to the participants for their interest and
[1:20:08] we've been receiving a lot of questions. So, we will be starting the Q&A session now. So, we've been compiling your questions
[1:20:21] onto a document and we will uh go through the questions and we will also uh edit this document and post it on the
[1:20:30] training page within a couple of days. All right, so let's just start from the top down. Um the first question, will
[1:20:39] snow and ocean and oceans show as black? Could we still see pine trees or will it appear
[1:20:48] black due to snow? So, Dr. Leo, if you'd like to go ahead and respond to that. Um, so her response is that snow is
[1:20:59] highly absorbing at the near infrared band. So it it does appear black and snow can reduce the amount of light
[1:21:07] reaching the canopy and as a as a result reduce the CIF signal. Um that said CIF signals from non-dormant photo systems
[1:21:21] are detected in evergreen needle forest during winter and spring in the presence of snow. And she has included here a
[1:21:29] reference article if you would like to dig deeper on into this. Great. Let's go on to the second
[1:21:37] question. I'm doing a SIF study for different biomes in India. Where can I get flux tower GP data for different
[1:21:45] biomes to compare with SIF generated GPP values? values? and her response is that you can find the flux tower data at the fluxet
[1:21:56] website with the link that is posted here. However, the coverage in India is somewhat limited and you will want to
[1:22:05] check whether India has flux tower data that is um not part of flux net. So there are many flux towers around the
[1:22:15] world. Obviously, there's the FluxNet uh network, but um there might be other networks and you might want to check.
[1:22:24] Let's go on with the next question. Correlation between CIF and GPP tower data within each season does not appear
[1:22:33] to be strong other than in the fall. This seems to suggest that we cannot reliably interpret changes within a
[1:22:43] season even in the summer um outside the noise. noise. So I will let maybe either Dr. Leu if she
[1:22:58] has resolved her technical issues or uh Jackie uh respond to that. I do think that's a little bit of a
[1:23:08] better question for uh Dr. Leo, but I'll try to answer as best as I can. >> Um so towards the end of the notebook, I
[1:23:18] include some suggestions on how to improve the correlation. Um, one of the challenges that we have with using SAM mode data is as I
[1:23:30] mentioned like data can be very sparse around a tower for any given observation which requires us to do the spatial
[1:23:38] aggregation aggregation but at the same time because of that we're including a lot of points that aren't
[1:23:46] aren't necessarily the same as the tower site itself. Um, so typically the best comparison that you'll have is when a
[1:23:55] tower has photospec as well, uh, which is relatively uncommon. With that being said, um, you can still
[1:24:05] use the data, but it is, like I mentioned, recommended to filter by biome type. Okay, thank you very much
[1:24:18] for that response. We'll go on to question number four. What is the difference between daily civ 740 nanome
[1:24:29] and cif 740 nanome? So I'll go ahead and read the response that's being typed. Daily SIF is the daily mean CIF. So it's
[1:24:45] the average value which accounts for changes in solar radiance throughout the day. While CIF 740, so daily SI 740 is the average value
[1:24:58] while CIF 740 is the instantaneous CIF value retrieved from that specific band from that specific 740 nanometer band.
[1:25:14] The next question, question number five. What are the specific characteristics of each retrieval band? Is there a
[1:25:25] preference between 7557 nanometers over 740 nanometers? Um, I'll let Ginger add any details if she'd like, but the 740 nanometer data
[1:25:44] will generally have a stronger SIF signal, but it doesn't come from a measurement taken directly by the
[1:25:53] instrument. instrument. So, it's um interpolated from the 757 and 771 data. If you would prefer to use a measurement
[1:26:07] directly from the instrument, that's a case when you would want to use 757 instead. Okay, thank you. And let's move on. So,
[1:26:23] it looks like that's the last question. However, I believe there have been new questions questions um added. Let me take a look.
[1:26:35] No, it looks like that's the last question. question. Any additional questions, please go ahead and write them or what we'll do
[1:26:47] is um any additional questions that we receive. receive. Oh, here's one. Okay. So, let me just include it in the Yeah.
[1:26:58] All right. So, question number six. Why do the result resulting data visualizations visualizations appear as sparse pixels that don't cover
[1:27:07] the entire study area. So assuming we define the specific geographical boundaries, what methods are used to compensate for the missing data gaps in
[1:27:17] the final map products? Uh generally speaking, you can use gap filled products if the data availability is not enough for your
[1:27:32] use case. Uh other than that, uh there's not really a way for us to improve upon the
[1:27:42] gaps without synthesizing or estimating data from other predictors. So with SAM um the gaps occur due to bad data points
[1:27:56] or um the presence of heavy clouds for instance preventing the estimate. Okay, thank you very much Jackie. The
[1:28:09] next question, regarding historical baseline data for regional studies, since satellite imagery isn't available for periods like the early 1900s, could
[1:28:20] you recommend any key repositories for declassified aerial photography or historical topographic maps that are freely accessible for scientific use?
[1:28:35] >> I'm sorry, I don't know the answer to that question. Yeah, I I think we'll have to take a look unless um Karen or
[1:28:43] Yanji if if you have any uh insight into this otherwise we will look into it and responded in the document.
[1:28:53] >> Yeah, I think this is dependent certainly on the area you want to look at, the country you want to look at
[1:29:00] because obviously aerial photography and the practice of it would be much later on. Um, when you're saying the early
[1:29:07] 1900s, I that would be difficult to get anything in the 1900s just because of the availability of the equipment to be
[1:29:15] able to do that and to do the surveillance. Um, I would be hardressed to find anything before 1950 I think.
[1:29:23] And um, and also the historical topographic maps. I would have to check when USGS or other agencies would have
[1:29:34] started collecting that because that would all be produced during land surveys. Um, so that would also be
[1:29:41] country dependent. >> Thank you very much Karen. Okay, we have another question or more of a state. Okay, so it says the
[1:29:53] measurements have been directly or have the measurements been directly acquired from sensors. Uh I I I'm not sure if this is a
[1:30:04] question or it says the lesson seems more advanced now. So uh yes, what we were doing in this
[1:30:12] lesson was comparing two different sensors. One was from space and one was on the ground. Um the continuous line plot that we
[1:30:24] looked at in the time series was the groundbased data. Uh and that's a real sensor. The SAM plots also were real
[1:30:34] acquisitions taken over what we can consider as like one time point um um from the OC3 instrument.
[1:30:48] >> All right. So I think that is it in terms of questions. Um just to remind you there is one more session as part of
[1:30:57] this training series and that session will be next Wednesday at the same time. Uh we're going to be looking at gap
[1:31:06] filled products. It's going to be uh u primarily a demonstration that Jackie will be leading. So please uh tune in.
[1:31:15] And as a reminder about the homework, there is one homework associated with this training and that will open up next
[1:31:24] Wednesday and it'll be posted on the training web page. All right. Uh with that, we've then uh
[1:31:33] reached the end of the second session. I'd like to give the opportunity to our our guest experts to say some final
[1:31:40] words. So, uh, Jackie, if you would like to say some words before we close. >> Yeah, I have two comments. There was
[1:31:48] actually another, uh, question that came in. Um, is it possible to integrate a second variable such as land surface
[1:31:57] temperature or soil moisture with the SIFT data to understand the underlying changes or or causes of observed changes
[1:32:05] in vegetation health? And uh this is an area of active research within um our science community. And on the OCO3
[1:32:17] website, there's a recently released product that combines Ecostess with OC3. Uh so Ecostess provides land surface temperature
[1:32:29] temperature and it enables you to calculate water use efficiency. Um so if we do eventually do an advanced
[1:32:38] course that might be a topic of discussion that we would cover there. >> Yeah absolutely. Thanks for bringing
[1:32:46] that up and I think data integration is always a great interest in um for our ars community.
[1:32:54] >> Certainly certainly something to consider. Go ahead. The second comment that I um wanted to make was a lot of
[1:33:04] you last time mentioned that you use for your Python environment and so I added a cond setup script for both Mac and
[1:33:14] Windows. So um you should be able to install the course materials using now. Thanks uh Jackie and uh Karen, would you
[1:33:25] like to say some closing words? >> Um just thank you to all the participants for joining us today and uh
[1:33:33] please join us next week. Uh because I think for those who want to work with our data, you'd be very pleased with
[1:33:40] what Jackie has put together and um and as you can see, she's very responsive um real time and followup for um to to help
[1:33:49] and support our users. So, we look forward to seeing you next week as well. Thank you. >> Thank you very much, Karen. Again, thank
[1:33:56] you to our invited experts to uh Jackie, John G, and Karen for today's presentation demonstration. And of course, thank you to all of the
[1:34:08] participants uh for tuning in, for your interest, for your questions and enthusiasm about this topic. And finally, I'd like to thank the ARSET
[1:34:17] team uh for for making this possible. So with that, um we will see each other in one more week. So until then, I'm
[1:34:29] wishing you all a good day. Bye-bye.
