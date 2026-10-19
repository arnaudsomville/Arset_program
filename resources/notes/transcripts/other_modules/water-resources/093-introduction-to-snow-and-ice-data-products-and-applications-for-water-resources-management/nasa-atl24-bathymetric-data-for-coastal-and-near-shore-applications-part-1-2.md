# NASA ATL24 Bathymetric Data for Coastal and Near-Shore Applications Part 1/2

`https://www.youtube.com/watch?v=FoOSm5VQ0lc` · id 95 · 1:36:31 · module 106 — Introduction to Snow and Ice Data Products and Applications for Water Resources Management

[00:00] Thank you for joining today's RSET training. NASA satellite laser alimemetry for coastal and nearshore bimetry. I'm Sean McCartney from NASA
[00:09] Gddard Spaceflight Center in Maryland serving as your RSET trainer. I'm excited to begin this first part of our
[00:15] comprehensive two-part satellite bethimemetry training with all of you. For newcomers to RSET trainings, the following slides present a short program
[00:25] introduction. introduction. The applied remote sensing training program or RSET part of NASA's Earth action capacity building program offers
[00:34] free accessible training on remote sensing technologies, methods, and applications. applications. ARSET's mission is to increase Earth Science remote sensing and model data
[00:45] use in decisionmaking by providing training for professionals in the public and private sectors, environmental managers, and policy makers. On the
[00:55] right of the slide, you can see all the different thematic areas in which we conduct trainings. Our set offers both online and in-person
[01:04] training sessions designed for beginners through advanced users. All trainings are provided at no cost through live instruction, instructor-led sessions, or
[01:14] self-paced formats like the fundamentals of remote sensing course on ARST's learning management system. Materials are available in multiple languages and
[01:23] can be freely used and adapted for educational purposes. Users of our set methods and data should acknowledge the
[01:30] NASA applied remote sensing training program. Additional information is available on our website. The following slides provide an overview
[01:39] of the two-part webinar series NASA satellite laser alimemetry for coastal and nearshore bethimemetry. So, why would somebody want to take this
[01:49] training? Well, nearly 80% of the world's oceans are unexplored and unmapped. unmapped. Successful coastal management depends on
[01:58] monitoring and mapping. Coastal bathimemetry is essential for navigational hazards for vessel operations, title modeling and prediction, tsunami risk assessment and
[02:10] forecasting, underwater cultural heritage preservation and environmental change monitoring. Satellite derived bthimemetry enhances capacity for collecting highresolution accurate depth
[02:22] data supporting varied applications. By the end of this two-part training, participants will be able to identify NASA bethimemetry data used for global
[02:32] coastal and nearshore bethimemetry mapping for risk reduction relating to shipping and navigation. Identify the applications and limitations of ISAT 2 bimetry data ATL
[02:44] 24 for coastal and nearshore bethimemetry mapping. Plot and download ISAT 2 bimemetry data using slide rule web client and analyze ISAT 2 bimetry
[02:55] data using slide rule python climate client. client. The prerequisites for the training are two arset courses fundamentals of remote
[03:05] sensing course and mapping and monitoring lakes and reservoirs with satellite observations. From December 2nd to December 4th, there
[03:15] will be two one and a half hour sessions which will include presentations, demonstrations, and question and answer
[03:21] sessions. All materials and recordings for each session will be available from the training web page. If you are not
[03:29] able to attend one part, a recording will be made available within 48 hours on the RSET training web page. Homework
[03:37] opens on December 4th and will be due on December 31st. You will be able to access the homework
[03:44] from the training page on Thursday, December 4th. A certificate of completion will be awarded to those who attend all live
[03:52] sessions and complete the homework assignment by the given due date. Part one of the training is focused on
[03:59] NASA ATL 24 baometric data for coastal and nearshore applications. The objectives of part one of the training are as follows. By the end of
[04:10] today, participants will be able to identify NASA bethimemetry data used for global coastal and nearshore bethimemetry mapping for risk reduction
[04:19] relating to shipping and navigation. Identify the applications and limitations of ISAT 2 data ATL 24 for coastal and nearshore bethimemetry
[04:29] mapping and plot and download ISAT 2 data using slide roll web client. Please put your questions in the
[04:39] questions box and we will address them at the end of the webinar. Feel free to enter your questions as we go. We will
[04:45] try to get to all the questions during the Q&A session after the webinar. The remainder of the questions will be
[04:51] answered in the Q&A doc which will be posted to the training website about one week after today's training.
[04:59] It is now my pleasure to introduce the guest trainers for today's webinar. Dr. Lori McGrder, Dr. Dr. Diane Fritz and
[05:05] Joseph Paul Swinsky. Lori McGrder serves as associate professor in aerospace engineering at the University of Texas at Austin with previous roles at Jet
[05:15] Propulsion Laboratory and John's Hopkins Applied Physics Laboratory. Following nine years of science team leadership on NASA's ISAT 2 mission encompassing
[05:24] mission development, imple implementation guidance and operational instrument pointing strategies. McGrder was trans has transitioned to leadership positions on additional remote sensing
[05:34] science and instrument teams. Diane Fritz holds the position of associate scientist at the National Snow and Ice
[05:41] Data Center, NSIDC, located in Boulder, Colorado, and serves as a remote sensing educator at the University of Colorado. Her academic
[05:51] credentials include a doctorate in geological sciences. JP Swinsky is a 24-year NASA Gddard software developer who spent most of his
[06:01] career creating flight software for spacecraft and science instruments. He led flight software development for the Atlas instrument from 2010 to 2016. In
[06:10] 2018, he transitioned to cloud-based data processing solutions. And in 2020 co-developed slide role with ISAT 2 project scientist and University of
[06:19] Washington, which is a public web service providing fast cloud access to ISAT 2 data, Lori, over to you.
[06:31] >> Thanks, Sean. I'm so happy to be here and talk about uh ISAT 2, the new uh
[06:36] Bethimemetry product that has just come out earlier this year. Um I can honestly say that ISAT 2 is my favorite satellite
[06:45] and I've worked on it for many many years and so this is just a really exciting time for me to be here and
[06:51] provide an overview of the mission and uh introduction to the ATL24 uh coastal and nearshore bethimemetry product.
[07:01] product. So let's start with the mission overview. overview. The ice cloud and land elevation satellite 2 is an earth observing laser
[07:09] altimery mission uh that launched in 2018. So we've been on orbit for a little more than 7 years. It completed
[07:17] its prime mission um and successfully satisfied all its science requirements in 2021, but all operations are still
[07:25] nominal and it's continuing to uh give us amazing data. ISAT 2 carries a single instrument called Atlas, the advanced topographic
[07:35] laser altimeter system. Atlas is a photon counting laser altimeter, meaning it's sensitive to single photon reflections from the Earth's surface.
[07:43] This state-of-the-art technology uh to date has produced over two trillion laser pulses. Turns out that's a whole
[07:50] lot more than the two billion from the original ISAT mission in 2003 to 2009. Um right now the prediction is that ISAT
[07:59] 2 has all consumables on board meaning laser energy and fuel to to continue operating until uh 2033.
[08:10] So Atlas uh uses a neodyenium doped yitrium ortho vanadidate laser uh to produce six individual beams that's
[08:21] configured into three beam pairs that you can see in the schematic here on the slide. Each pair contains a weak and a
[08:29] strong beam with respect to laser energy at a 1:4 energy ratio. The pair components are separated by 90 m in the
[08:38] cross track direction and uh the pairto pair separation is 3.3 km. Each of the six beams provides an
[08:48] elevation profile of the illuminated surface with a around a 12 m diameter footprint. So these are just creating
[08:56] pencil lines of elevation across the the earth's surface. uh Atlas output wavelength is a 532 nanometer which is in the visible green
[09:06] uh part of the spectrum and a pulse width of one nancond with one nancond which speaks to the the high vertical
[09:14] resolution of the system. Photon counting alimemetry allows some unique uh advantages in terms of data collection. So since the receiver is
[09:23] sensitive to single photons, it allows the system to operate at a lower energy level compared to previous or other
[09:30] types of LAR technology. In turn, that means that the system can pulse at a faster repetition rate. Um and and in
[09:38] this case Atlas uh has a 10 kHz repetition rate that at the altitude which is about a 500 kilometer average
[09:46] altitude. It can produce a laser footprint or puts down a laser footprint every 70 cm in the along track
[09:54] direction. direction. The final thing I'll mention here in terms of the collection strategy is the fact that the orbital plane is inclined
[10:02] at 92 degrees from the equatorial plane which means that the coverage for ISAT 2 goes from 88° south latitude to 88°
[10:11] north latitude. So I think it's important to get oriented with respect to what the ISAT 2 data looks like. So I'm showing you an
[10:21] example elevation profile over west Greenland, west central Greenland. Um the horizontal axis is latitude and the vertical axis is the elevation. So each
[10:31] of these black dots indicates the atlas detection a detected photon by atlas. Every photon has its own latitude,
[10:40] longitude and elevation. So the challenge with photon counting is the need to separate the signal photons from
[10:46] the noise photons. So although in this case it's pretty easy for us to look at the profile and identify the surface
[10:53] which is this dense black line, it's a lot more challenging to automate the process of signal finding. Signal
[11:00] finding also differs greatly with surface reflectance, surface type and surface feature length scales. So ISAT 2 provides data products for
[11:10] specific surface types that have been produced with unique algorithms optimized for the surface characteristics. characteristics. So when we start to explore these data
[11:19] over the last seven years on orbit, you can see through aggregation um all of the impact that ISET 2 has had with
[11:27] respect to the specific data products it provides. We see sea ice measurements both in the southern ocean and the
[11:33] Arctic. We see the land ice and uh mass change change for Greenland and Antarctica. And next comes the brown or the the terrain the
[11:44] land surface elevations. and then the vegetation canopy heights which will be uh in green here in just a
[11:51] minute. Additionally, we have data products uh over the ocean and inland water surfaces. However, what was somewhat unexpected
[12:03] was the ability of ISAT 2 to measure beneath the water surface or measure underwater topography which is also
[12:11] called bethimemetry. Um, it's common knowledge that the green laser wavelength can penetrate water, but it was not fully anticipated that a photon
[12:20] counting system from 300 miles in space would perform as well as it does. You can see here an example of of the
[12:29] pimemetry that we've been seeing for for quite some time. It's the sea surface which is this dark black line horizontal
[12:36] on the elevation profile and then underneath is the underwater topography or bethimemetry. In this case we're at
[12:44] the Great Barrier Reef. Studies of this performance or the capability of bethimemetry um has happened at in various locations and
[12:53] ultimately we we know that Atlas can measure bethimemetry uh at up to 40 meters in depth for clear water
[13:00] conditions. Certainly, it varies depending on where you are geographically. geographically. However, until this year, we've not had
[13:08] a dedicated bethimemetry data product from the mission. I thought it'd be important to just show you a snapshot of the data products uh
[13:16] for ISAT 2. The level zero and level one products are telemetry and converted telemetry products. The level two
[13:26] products are ATL3 which is the geoloccated point cloud and then ATL4 which are normalized um back scatter
[13:34] profiles. profiles. ATL3 is the input to all of the level 3A products and those are those blue boxes
[13:43] in horizontal uh or in the middle of the slide. slide. These are a long track products produced
[13:50] from these optimized algorithms that I mentioned previously. These level 3A blue boxes include those data we saw
[13:56] from land ice heights, sea ice, um sea ice, freeboard, land and vegetation, inland water and ocean. But then you can
[14:05] see this uh this newly added box here ATL 24 which is the along track nearshore coastal bethimemetry product
[14:15] which I'm happy to introduce to you today. As an introduction, ATL24 was developed by the collaborative team. Um, my team here at University of
[14:28] Texas at Austin Center for Space Research, Jeff Perry and Matthew Hallwell. and uh our teammates at Oregon
[14:36] State University, Chris Parish, Kiana Keefe, uh JP Swinsky at Slide Roll, and all of the mission or project science
[14:44] office partners, uh Jeff Lee, Tom Newman, Dennis Felixson, uh we're all working together and and uh released ATL
[14:53] 24 on April 1st earlier this year. Um ultimately ATL24 is designed to provide the community signal finding and
[15:02] photon classification for sea surface and seafloor along global coastlines. We had the goal of creating a robust
[15:09] algorithm that could be successful at the global scale um provide appropriate corrections to the data and confidence
[15:17] values of the signal classifications and then also a per point uncertainty. So these were the goals of ATL24
[15:25] um when we first initiated development which was a couple of years ago. What I'd like to emphasize here is the
[15:33] significant challenge with developing a single algorithmic approach uh that could satisfy all of those product goals. However, to meet this challenge,
[15:43] we uh use a novel machine learning approach called an ensemble. The uh ensemble creates a robust capability in
[15:51] the environment that is highly variable when you consider that uh everywhere there's a different bottom type, a
[15:58] different surface reflection, um changing water turbidity levels and sea surface conditions. So ATL24 also provides a confidence value for each
[16:08] photon that in indicates an estimate of the classification fidelity. Um and then additionally we correct this with an
[16:16] index of refraction correction. The inputs of the ensemble are classification predictions from several base algorithms. And when I say
[16:26] classification predictions, it is that photon a surface, is it themetry or is it unknown? Right now the ensemble
[16:34] gathers input from six distinct methods. And since the errors of each classificationbased algorithm are uncorrelated, the ensemble is able to
[16:44] predict bethimemetry from the combination of predictions from the base algorithm input. So this creates a scenario for the of the whole is greater
[16:53] than the sum of the parts meaning that the ensemble performs at least as well as the best performing algorithm for a
[17:00] given location. Ultimately, we're taking advantage of the fact that the single that a single signal finding algorithm
[17:07] cannot perform equally everywhere. So, what I want to point out here in the upper right is just a a granular a
[17:15] transct that we pulled out and it shows the different colors just below the area where the turquoise photons are those
[17:22] classified as sea surface and the the brighter blue photons are those that the ensemble predicts as bethimemetry.
[17:29] And then I'll point out here this this plot on the bottom right is each column is the uh F1 score of the base
[17:40] algorithms and the ensemble for predicting sea surface and C floor. So the ensemble is the column in the middle
[17:47] and then you have three base algorithms on each side to the left and to the right. F1 score is a metric that we
[17:54] often use in combination with a lot of other metrics to understand how good we're doing in terms of accurately
[18:01] classifying the photons as sea surface or seafloor. So the green labels are each algorithm of how they they predict
[18:10] sea surface. And you can see that each of those values is almost they're pretty equal and almost to one which would be a
[18:18] perfect classification score um F1 score but the brown values are the class the F1 scores for classifying C floor and
[18:27] you can see here that there's a variable in this location each algorithm performs differently um based on those variation
[18:34] of values but the ensemble the column in the middle shows the highest F1 score for classifying C surface and like I
[18:42] said the the ensemble is created to perform at least as well as the highest performing base algorithm.
[18:52] Um, another key benefit to this ensemble, which is is an XG boost, is that it can look at its decision trees
[18:59] and create a probability of classification classification correctness, if you will, and that's what we've turned into a confidence
[19:09] score. score. This is a really good visualization, and then I'll get to the confidence score of of the comparisons of classifications of
[19:19] the base algorithms. So you can see here the top is manually labeled reference data. So this is what we say is the
[19:26] quote ground truth of sea surface and seafloor for this particular profile. Then each profile moving down from the
[19:34] manually labeled reference data is the output. So the top one is the ensemble. And you can see as you go through we
[19:41] have um this the six input. I think we just have five because I couldn't fit it on the slide but you can
[19:48] see the variation. And like if you look at the Bathy Pathfinder algorithm that over here toward the right, it gets a
[19:55] little confused and grabs some of the water column and labels it as bethimemetry. Whereas maybe if we skip
[20:00] down to the median filter, which is second from the bottom profile, you can see that for whatever reason that
[20:06] algorithm misses some of those bethimemetry points on the right. So each of these algorithms has a different
[20:13] type of error uh associated with it or capability in correctly signal finding. Um but we can use all of them in the
[20:22] ensemble to create the best uh the best guess of classification. So the confidence as I mentioned is a is
[20:29] an output of the XG boost ensemble and it it's kind of internally generated but it it has a lot of variables and it's
[20:38] also based on this current uh composition of base algorithms. So what I want to emphasize here is that right
[20:46] now for version one release one we feel that the confidence level of 6 or higher is a good way to users can filter the
[20:56] data for high confidence uh classifications. However that's based on the input algorithms as I said and so
[21:04] next versions might have a different uh threshold recommended of of confidence. So be be mindful of that as you look to
[21:14] version two release excuse me version uh one release two and version two that comes out probably next year that those
[21:21] confidence thresholds or filtering might change. This shows you those uh seafloor classification photon classifications uh from about 6 to 0.1 and you can see it
[21:34] is just by visually inspecting that it's seems pretty accurate and there's very few outliers in terms of of what the
[21:42] ensemble is predicting. So in terms of the full ATL24 workflow, uh I have a a version here. Um
[21:55] so let's start in the upper left box that shows the intersection of the ATL3 granules and then our ATL 24 search
[22:04] mask. The search mask uh is a global mask that uses um a derived retrievability score for probable ISAT 2
[22:13] detection. And this is based on water turbidity and maximum depth of a given region. And then we take that mask and
[22:21] we uh widen vertically and horizontally to ensure that we don't miss anything. And the mask uh guides the processing of
[22:29] ATL 24 to just our coastline nearshore environments. So moving down along the left left side, we process the data and
[22:38] use a function we created called coastnet to make a first pass at identifying water surface photons. Um
[22:45] this is because we have these six independent algorithms for classifying bethimemetry photons, but some of them need a starting point of where the water
[22:53] surface is. And that's why we do a first approach to water surface classification. classification. Um each of these these algorithms use a
[23:02] different approach to signal finding. [snorts] Some of them are histogramming approach or density evaluations. Uh some of them are machine learning approaches.
[23:10] But again all of these in all of these predictions from these base algorithms are fed into the ensemble.
[23:17] Once the ensemble uh provides the classification predictions again which is supposed to be the uh greater than
[23:25] the sum of the parts, we perform some blunder detection and outlier removal which are if we go down the gray boxes
[23:32] in the middle of the flowchart and then we do a final sea surface finding and provide a uh correction for the index of
[23:41] refraction of water for any of the photons that occur beneath the sea surface. Um the uncertainty calculation
[23:49] is is calculated u from a subacquous uncertainty lookup table which is the of parallelogram at the bottom and then it
[23:59] also uses uh the coefficient of diffusion diffusion the diffuse coefficient excuse me from vs the KD490 value. So then that's our uncertainty
[24:10] value on per point level. And then our data product is generated with a variety of parameters. Some of them are listed
[24:19] here on the far right. Um seafloor ellipsoid height, seafloor orthometric height and uh uncertainty estim estimates along with the confidence
[24:28] value. value. And I should also mention for the refraction correction as it you can see up in this top parallelogram uh we do
[24:38] have our own refractive index layer that's created from um global level temperature and salenity uh values to to
[24:47] create the most accurate correction um in time and space. So we kicked off the full production of
[24:56] ATL24 back in February. uh it took about 13 days to produce uh 27.6 terabytes of data. We processed this um in AWS. Uh I
[25:08] thought these metrics were pretty interesting to say that a total linear coverage of bethimemetry was 13.7 million kilometers. And then you can see
[25:18] here the number of our bethimemetry points which we do follow the ASPs convention of classification. So our
[25:25] bethimemetry is class 40 and our sea surface is class 41. Um we collected a little over 7 billion bethimemetry
[25:33] points and if we just filtered those by our confidence value of 6 then um we had more than half identified as high
[25:42] confidence bethimemetry. And you can see here in the in the figure the just the the coverage in in yellow of where we
[25:48] have bethimemetry um within the product. We we chose uh eight sites that had that we had uh
[25:56] pretty consistent reference data to compare to to understand what how accurate not not the classification confidences but the how accurate the
[26:06] actual bethimemetry elevations uh were. And you can see here this is uh on the left column are the the accuracy test
[26:15] results for all of bethimemetry points at those eight sites. And you can say we have an RMSSE of of 0
[26:23] 68 mters. And then if we we threshold uh those values for high confidence on the right plots showing uh a reduction in
[26:32] RMSSE of down to 43 cm. And so it does improve the overall quality of of the symmetry elevations by just using high
[26:43] confidence. But you also have to weigh the the impact of of removing some of those uh bethimemetry
[26:52] points that could very well be bethimemetry but uh not all of the algorithms uh predictions supported that. One of the things that that is I'm
[27:02] sure would be interesting are some strengths and limitations to the current uh version the of ATL 24. And I just
[27:10] want to emphasize that the the ATL24 is a global coverage of the Earth's coastlines. And we have yet to have a
[27:18] space-based laser bethimemetry system uh that that provides the the wealth of data that ISAT 2 is providing. Um I
[27:27] think our approach for signal finding and classification is pretty robust because it can leverage the advantage of
[27:34] each individual algorithm or base algorithm where it works well and and we don't lose any uh quality of the output
[27:43] data and signal finding. Um it's accessible in in a variety of ways. You can download the data from several um
[27:51] methods which sure is part of this training. Um the architecture of the algorithm is also configured for
[27:58] continual improvement. Meaning that we can right now we have six base algorithms but we could up that to 24
[28:05] base algorithms and it's it's all set up the structure is set up to to continue to add algorithms as as methods are
[28:12] identified and um implemented. And then also the accuracy of this product is is pretty great and it has been proven
[28:21] suitable for for calibration and validation of spectral satellite derived bethimemetry in most cases. Some of the limitations though uh uh you can mention
[28:30] here are that some of the conditions do have result in variable data quality uh as you can imagine and then the current
[28:38] uncertainty estimates are overly optimistic but we're still working on uh refining that and making them a little
[28:44] bit more realistic. Uh the data exists only on the coastlines and coincident with the current search mask. So uh the
[28:51] ATL24 algorithm is not run anywhere except the intersection of the ATL3 granules and the search mask and then
[28:59] the photon classification um conflicts between ATL24 sea surface and ATL8 terrain surface do exist. So if you are
[29:09] interested in seamless, you know, topo bathy profiles along our coastlines and you pull in ATL8 terrain heights,
[29:16] there's some some confliction in in the in the photon classification. So it's not there's not that continuity yet in
[29:25] those two long track products. And I wanted to point out a few resources that might be helpful in using
[29:34] AIL 24 or understanding more about ATIL 24. Um the first two uh bullets are papers that were recently published this
[29:43] year in earth and space science. The first one perish at all it provides more detail about the accuracy analysis uh
[29:51] that those eight sites that I was showing earlier and then the second one uh my mcrder at all is is a in-depth
[29:59] description of the base algorithms and the ensemble and talks a little bit more about the metrics associated with with
[30:05] understanding the performance of of the classification. classification. And then uh the algorithm theoretical basis document is the last bullet and
[30:14] that gives you even more information about the algorithm. It includes the refraction correction approach. It also includes uncertainty uh evaluation and
[30:25] all of the other details uh about the product. product. And I think that's all I have. I'm so
[30:33] happy to be here today with you and I will throw it back over to Sean. Thank you, Lori, for the excellent
[30:43] overview of ISAT 2 and the ATL 24 bthimemetry product. We will now transition to Diane Fritz from the
[30:50] National Snow and Ice Data Center to present on ATL 24 data resources and access. Diane, over to you.
[31:00] Hi, I'm Diane and I work at the National Snow and Ice Data Center or NSIDC and I am going to do a quick segment to
[31:11] show you ATL24 data that bathimemetry product and the resources and access that we have for you at the deck or
[31:21] distributive active archive center. So what is the role of NSIDC? We preserve many many data sets um
[31:31] including all of the products from ISAT 2. Although we are the national snow and ice data center um focused on the
[31:40] cryossphere, you'll notice from professor McGreder's previous uh video that she showed. ISAT 2 is a global um
[31:51] data set. all of the ones that get derived from that mission. And so we have all of those products at NSIDC.
[31:59] We have a lot of products from other satellite missions, airborne surveys, field observations, all sorts of different things related to
[32:07] the Krysphere. And we are one of 11 DAXs and you can see on the map here where
[32:13] some of those are located. We are in Boulder, Colorado, but we are accessible all over the globe by
[32:23] emailing us at nsidc nsidc.org. Data is a free for anyone. Um you just need an earth data login to be able to
[32:34] access it, but it's free to um create that as well. And it's helpful to be able to work with geotiffs, net cdf, hdf
[32:45] files, things, other kinds of science files like that. But we have user guides also to help you. And my job in the user
[32:54] services office at NSIDC is to help anybody use the data that we host at the DAC. DAC. So this is an example of one of our data
[33:07] set landing pages in particular. This is the ATL24 bathimemetry product landing page. And I just want to show you some
[33:15] useful things that if you um go here, you'll be able to find a user guide that talks a little bit more about what the
[33:25] data is. We have a citation so you can easily give credit to the people that produced this data but also know who they are and
[33:35] be able to look up the papers and other research that they've done. And we also have a subscribe possibility here. So if
[33:45] you want to know more about a particular data set, you can sign up for email updates of that data. So if there is an
[33:54] update um something that is a new parameter or something like that that gets added to a new version you can get
[34:03] a notification about that. But on our data set landing pages in addition to these icons um at the top we
[34:11] also have a menu for being able to find things on the side that right menu that you see there. So, this gives you access
[34:22] tools, tools, documentation, and help articles. What I have on this screen right here is an example of two different access tools
[34:33] that we have for ATL24. One is the NASA Earth data search, which I'm going to do a quick little demo of
[34:41] how you can use that to find ATL24 data and actually subset it. There's also slide rule earth um as one of the tools
[34:51] and many more and you'll get to hear more about slide rule earth later. We also have documentation these
[34:59] technical documents if you want to dive further into the algorithms um that were created to get the bimetry product out
[35:09] data dictionaries and user guides. And then we also have help articles that are going to help you maybe just understand
[35:18] how to work with a certain kind of platform um with HDF files for example or know a little bit more about the
[35:26] data. So all of these resources are available from that data set landing page. page. Now, if I go to um the tool NASA Earth
[35:37] data search, I will see some kind of visualization like this. And I'll demonstrate this. You can search for data by um mission.
[35:50] So, I can put in ISAT 2 and see what's available. I can look for keywords. If I
[35:56] know the data set short name ATL24, I can put that in and look for it. So, this is a way to access um data from all
[36:07] of the NASA DAXs, not just NSIDC. There are customization services for select data sets in here as well. And
[36:17] so, I am going to um show you what it's like to just pull a small spatial chunk
[36:23] of an ATL 24 file and visualize that. So So this is a picture of Paniply. It is a
[36:37] nice kind of um visual browse platform and it does some more things as well. But NASA developed this and it's a
[36:44] really nice way to quickly look at a ATL24 granle and see what is available in it. As um professor McGreder
[36:55] mentioned there are classes of photon classifications in this data set and that variable is class pH for photon
[37:06] and 40 represents a bathimemetry photon and 41 represents those seurface photons. So on the left here in the the
[37:17] small side, I've got a full granle download and I've zoomed in and changed the scale so that um 40 the bathimemetry
[37:27] photons show up in yellow and you can see that in here that we have some pretty good returns in the area of the
[37:36] Bahamas for bathimemetry. So, I'm going to show a little demo using NASA Earth Data Search to grab one
[37:46] of these ATL 24 granules near the Bahamas and um show you what it's like when we open it in Paniply.
[37:58] So, I'm going to dive over to my um browser now. And this is the data set landing page um for ATL 24. The URL is
[38:10] nsidc.orgdata24. You don't have to type in the rest. Um the version will um self-populate. But if I scroll down,
[38:22] you'll see a map that shows that the ATL 24 coverage is global. And you'll see these different data
[38:29] access tools that um you can get slide rules down there. We're going to go to NASA Earth Data Search and click on
[38:39] this. this. And it's going to take us to a page already with ATL 24 loaded into this.
[38:49] Now, I can hover over these different granules. I'm going to click on this one, and it'll take me to a place where
[38:59] this one exists. >> [clears throat] >> So this is that one that I showed on the slide deck.
[39:06] I can do spatial search here. I can also do temporal search with these controls. I'm going to just draw a little box and
[39:18] grab a little bit of this granle in this upper part. But in doing that spatial search constraint, I still have all of
[39:28] these other granules here as well. So you can see that I've I still have 212 that go through this over the course of
[39:35] the mission. I'm for the purpose of this demo I am just going to copy this granle name and search by it as well and reduce
[39:48] it down to one. But you can use wild cards in here or you can do a temporal
[39:53] search to narrow it down a little bit more. more. So with this, I'm going to say I want to download all,
[40:03] which is down to my one granle at this point. point. And it's going to take me to this
[40:10] platform where it's going to give me an option to say, do you want to just download this data
[40:18] straight or do you want to customize it? and harmony is the um tool that we have for doing spatial and temporal
[40:27] subsetting on some ISAT 2 data sets. So I'm going to choose a service. The only option here for this data set is the
[40:37] harmony trajectory subsetter. And once I've selected that, I can scroll down and see that had I had more
[40:48] um data sets or a temporal constraint, I could use that. But I still have just that one granle. So I have my spatial
[40:56] subs setting here. That looks good to me. I'm going to click done. Go to click download data. and it's
[41:05] going to start putting in that order for me with that taking that bounding box and actually trimming my granle just to
[41:15] that area. I can go to my order status and see how harmony is doing and it's looks like that job it's going
[41:27] to look at that job code it was already successful. successful. This takes a little bit of a lag time to
[41:34] show that, but that's where you can go and get that link directly. Um, it can also notify you
[41:43] when the everything is finished processing and um, you can pull data from here. So, I'm going to hop over to
[41:51] Paniply. I've already um, downloaded a subseted file before this. And this is what it looks like when you open that.
[42:01] And you can see the three beams here. And when I expand one of those from the this is the ATL24 product. And we have
[42:11] our class of photons. We have heights um of different kinds and flags and different kinds of information.
[42:21] And then I can plot these. And if I'm looking at my class of photons and again I've changed my scale here in paniply
[42:32] from 0 to 41 to 39 to 41 just so I can see that bathimemetry photons in the
[42:40] side. So I can see that I've got some good response there. I can also uh bring up the height
[42:51] data as well. And so if you recall the way that I grabbed that data, there was a little bit of um an island going
[43:00] across here. And you can see some of that height shown in this area. So that's how Paniply can help you um
[43:13] inspect these HDF files pretty quickly. I'm going back to our data order and see that it's here. I can actually click on
[43:23] this link and get this um subseted file directly downloaded from clicking here. But if I have a lot more granules in
[43:32] here, I can use this earth data download and it can pull everything in one download for me. This is a different
[43:41] software you need to put on your computer to have that work, but it's really quite simple and we are happy to
[43:48] help out with that. So I have one more slide to um show and that's just some resources that I've
[44:00] provided. This is a link to the ATL24 data set landing page. Um a way to get the Earth data login for NASA data in
[44:09] case you don't have that already. Here's a direct link to NASA's Earth data search for all the DAXs. the
[44:17] Paniply software um from NASA and we have some help articles, the Earth data search guide. This will tell you how to
[44:25] use Harmony subsetting a little bit, but we also have Harmony in um as an API as well. And there is a Python library
[44:35] called Harmony Pi that you can use as well if you're doing programmatic subsetting in a Python notebook for
[44:42] example. And then here's also a link to slide rule earth, but um other people will be talking about that. So I hope
[44:51] this helped you um get a good orientation to resources that we have for supporting ATL 24. And in the user
[45:00] services office, we are here to help you. So feel free to email us at nsidc nsidc.org. Thank you, Diane. Next, we'll hear from
[45:15] JP Swinsky, who will present on the slide rule web service for plotting and downloading ATL24 data. JP, over to you.
[45:26] Okay, thanks for that introduction. I'm going to be talking about Slide Rule Earth, which is a collaboration between
[45:33] NASA GDDARD and University of Washington. Washington. So, what is Slide Rule? Uh, slide rule is a public web service that has
[45:43] restlike APIs for processing science data. Uh, the the goal is to provide researchers with low latency access to
[45:52] on demand data products and we provide those data products using parameters supplied at the time of the request. So
[45:58] it's like a real time data access system. Uh the entire system runs in Amazon Web Services US- West 2 and we
[46:06] have access uh very efficient access to all of NASA's Earth data products stored in US West 2 like ISAT 2, Jedi, LANCAT
[46:18] and a growing list of others. Uh as a team we support multiple clients for accessing slide rule. The two main
[46:26] clients are our Python web client and our Python client and our web client which I'll be talking about today. But
[46:35] we also support a Node.js and and for those power users uh you can access our system with curl. Uh here's on the
[46:44] screen you see just a a cartoon of what the system looks like at a very high level. uh the the users typically
[46:51] interact with slide rule using either Jupyter notebook or their web browser if they're using the web client. Uh we run
[46:59] a bunch of servers under the domain slidewear.io slidewear.io and then behind those servers we have access to things like NASA's common
[47:06] metadata repository uh which is their index for the NASA's earth data products as well as the Earth data cloud uh that
[47:16] I mentioned before. Uh you can find us uh more information about us on our website which is slideworth.io. You can
[47:23] point your browser to that. Uh you're always free to contact me. I have my contact information there. And for
[47:29] developers uh please look us up on GitHub. Uh we're completely open source under a BSD3 clause license.
[47:38] So why did we create slide rule? Uh so the the the idea is that we're hopefully improving the way data is accessed in
[47:48] the cloud. So here's just a a picture of what it's like to access data in the cloud without a service. So here you
[47:57] have different S3 buckets holding different data products like the ATL3 data from my 2, the Jedi data, the blue
[48:05] topo data, the harmonized lancat sentinel uh data and um it immediately becomes evident that if you're working
[48:14] from a single Jupyter hub instance or your laptop, it is very challenging to work with these data sets at a global
[48:21] scale. There's just too much data to work with. You also need to know the format of all
[48:28] these different data sets. For instance, if you're trying to correlate ATL6 uh ice surfaces to the Arctic DEM, uh you
[48:39] need to be able to figure out how to get the acquisition date from the Arctic DEM raers. And and that's going to be
[48:44] different than the way you're going to get an acquisition date from HLS and different than it's going to be from
[48:48] Blue Topo and so forth. And then lastly, there's going to be common uh operations that you're going
[48:57] to want to do on the data uh that are going to be very compute intensive. For instance, if you're working with a
[49:03] photon cloud like we are with ATL24, it is very compute intensive to take that photon cloud and resolve it to a
[49:11] single elevation over a certain aggregated area. So that is why we came up with slide rule as a service for accessing this
[49:22] data. We provide optimized direct access to the raw data. So if you want to just read ETL24 or blue topo, you can you can
[49:32] use our services and we will very efficiently in a parallel way read the data as fast as possible and and give it
[49:40] to you directly. But we also supply efficient subsetting services. So if you want to take the [clears throat] ATL24
[49:48] data and look at it uh just in in the in an area of interest, you can provide
[49:56] that polygon to slide rule and it will go out and it'll pull all the different granules and in a parallel way provide
[50:02] them to you in one single response. And then we do on demand processing right next to the data. So we are
[50:09] running in US West 2 right next to the buckets that are stored in that same data center and we can produce
[50:15] customized data products uh on demand uh using parameters supplied by your request. request. So that's in a nutshell what slide rule
[50:25] is and now I'm going to transition to talk about uh to give a demonstration of our web client. Uh so this is pretty
[50:33] new. It's it just came out this year and this is one of the ways maybe the easiest way to accessing uh slide rule
[50:40] which is doing so from your web browser. So this is the uh this is the web client. You can you can get to it going
[50:55] to client.slidewear.io and you can also find links to it. You can also find links to it uh from
[51:05] our main web page. Uh so when you navigate to the web client, this is the screen that you'll see. And and the
[51:12] first thing you're going to want to do for accessing the ATL24 uh coastal bethimemetry data is you're
[51:19] going to want to go over here and select the ice 2 coastal bethimemetry selection box. What that does is that puts a
[51:27] search mask up onto overlays it onto the the map showing you where there's data available. So everything that you want
[51:36] to do should be within that search mask so that you're sure to get uh a response back from our service. So, I went and
[51:47] did a little poking around and I found a spot that has some good bethimemetry bethimemetry off of the coast of Cuba. So, I just
[51:59] searched for it and it zoomed me in there and and I know that there's some good beimemetry in this area here. So,
[52:04] what I'm going to do with the ISAT 2 coastal pithmimemetry box selected is I'm going to take the the box tool and
[52:11] I'm going to draw just a a bounding box over this area. And you can see that it
[52:17] automatically shows you the size of the area. For requests using the our public service for ATL 24,
[52:25] we ask that it be underneath less than a thousand square kilometers. So 550 some square kilometers is is just fine. And
[52:35] you can see what it is if you hover over it. Once you have the bounding box, you
[52:39] can just click run slide rule and it will generate that request for you. Send that request to the servers running in
[52:47] US West 2. Uh those servers will subset all of the data that needs to be subsetted, collect it all in a single
[52:55] response, and send it back to the browser uh that you're running. Once the data is all loaded, it'll pop
[53:05] up this analysis screen on your browser. Um, the first couple times through, you're going to get a lot of help
[53:13] helpful advice. I think it's after five requests, we figure that you've read all the helpful advice and you'll no longer
[53:20] see those. If you ever want to um uh uh reset or get it back, you can always reset the system here and you'll
[53:30] go back to being like a a new user. So now we have a a display of all the
[53:36] different tracks. You can hover over it to see the information of the different photons uh returned. These are all the
[53:44] bethimemetry photons in that bounding box in ATL 24. Uh so you can hover over you can see the
[53:53] confidence level, the orthometric height, the reference ground track, uh things like that. Uh you can select the
[53:59] different tracks and on the right you'll see see uh a plot of of the along track photon
[54:08] cloud just the bethimemetry photons. So let me just I'll just show a couple different ones and see what you can see
[54:15] what they look like. That's a neat one. Um, Um, okay. Let's Well, let's choose that or maybe choose this one here. Let's choose
[54:28] this one here. Um, it goes down to five uh 5 meter depth. So, now this shows me
[54:34] a zoomedin view of theimemetry, but I want to get a better context, but I want to look at the whole photon cloud
[54:41] that it comes from. So if I click this uh show photon cloud, it actually goes out and makes another request to the
[54:48] server to grab the ATL3 uh raw photon cloud and combine it with the ATL24 photon classifications. And then it
[54:59] gives us now this full view of the data. So what we're looking at now is the input data, if you will, to the ATL24
[55:09] algorithms that produce the classifications that what we saw on the previous plot. And so if we zoom, let's
[55:16] zoom in here. So I just zoomed into a section. You can see the the white here is our C surface.
[55:25] That's the Curface classified photons. The purple are the unclassified photons. uh the ATL24 algorithm is just saying
[55:33] it's neither C surface nor bethimemetry and then the green is the photons that the algorithm identified as a
[55:41] bathometric return. Okay. Um I think one other thing I'll show here is let's go back to this um is sometimes it's
[55:56] useful to just get a quick view of what the whole data set looks like. And so we
[56:00] do for that we do provide a 3D view of it. And so this here uh is showing what the what
[56:11] the whole data set looks like. And you can see there's some sea floor here at the bottom there.
[56:21] Um I guess also we can you have a lot of things at your disposal as far as controlling what the
[56:32] what the plot looks like. So here we are coloring the points based on based on the orthometric height. If we wanted to
[56:40] color them based on their confidence level, level, this is now the same plot, but it's showing which photons have a very high
[56:49] confidence in the algorithm of being a bometric return versus ones that have a low confidence. So you can see up here
[56:56] we have some really high confident ones. And then right here appropriately so it's a little bit less confident.
[57:06] Um lastly uh I will just say there is uh for those that are power users um you
[57:15] can see what the actual request to the server looked like here. Okay. So this flow has so far been
[57:26] just a very simple straightforward flow of getting access to the ATL24 data. We do have in the web client some options
[57:34] for some more advanced access. So now go over here, go back to the request and go up here to this selection button and
[57:44] choose advanced. So now we see we're selecting the ATL24X API. And this is going to give us access
[57:53] to more features that the server exposes. exposes. Uh, specifically, I'm going to go now to this ATL 24x fields. Um,
[58:05] before I do that, I'll draw a bounding box and I'm going to make this a much smaller bounding box because we're going
[58:11] to get some more data. You'll see why. Okay. Okay. So, I'm going to go here and now in my
[58:18] request of ATL 24 instead of saying, you know, I don't just want the bethimemetry, I want all of it. uh the
[58:27] unclassified and the C surface similar to what we saw when we did the ATL3 request and use the ATL24 as a
[58:33] classification. And then also I there I don't want just the main fields. I want all of the fields that are in the data
[58:43] product. So here I'm just going to select select uh this whether or not this compact selector and I'm going to leave it off
[58:51] now because uh I don't want the compact version which happens to be the default version when we do just a general
[58:58] request. request. If you wanted to you could also do some filters here like you could filter on
[59:03] the confidence threshold. you could filter on the turbidity and the and whether or not there was valid turbidity
[59:10] or wind speed um and the and whether or not it was at night and the sensor depth
[59:15] was exceeded. You could also even pull in some ancillary fields uh from the the data product, but we'll leave it just
[59:23] like this. And um we'll show the request parameters and you're going to see now we've got some
[59:30] additional parameters in our request. and we'll make this request. Um, [clears throat] so this is again a
[59:39] smaller area because my guess is it's going to pull in a lot more data because we're asking for all the photons and not
[59:45] just some of the photons, not just the bethimemetry photons. Yeah, look at that. So you you can see um this just in
[59:52] this really small area. And and I would we would just caution if you want all of the photons
[1:00:00] beyond just the bethimemetry photons, you you do want a small area not just for the load on our servers, but it can
[1:00:06] very easily overwhelm a typical client uh laptop running this in your browser as well. So this very
[1:00:13] small request had 709,000 photons returned. But you can see uh this is um this is a plot here. And
[1:00:24] then we can do things like now instead of doing orthometric height let's do the photon classification. And you can see
[1:00:32] that over here we have uh the these higher classifications which is sea surface andimemetry. So right away I can
[1:00:39] look at this and I can say h over here's land and over here is your is your sea
[1:00:44] surface and bethimemetry. And if if that wasn't super clear just by looking at it here, here, I'm gonna keep my pointer here and and I
[1:00:54] want you to look over at the left side of the screen where you see the the geographic map and you should see a
[1:01:02] moving target showing which photon you're highlighting on the map corresponding to this elevation plot on the right. And that just confirms that
[1:01:12] yeah, this is what what you're looking at here is land and what you're looking at here is the water. Um,
[1:01:20] now what you can do when you get all of the data is you can export it if you
[1:01:26] want. So we can go to our table and this table tab. And now we can run an SQL
[1:01:32] query against the data and we can get a full now all of the raw data is being
[1:01:37] shown. Well, actually just the first thousand. So you can if this is more for power users uh but it gives you full
[1:01:44] access to all of the data that you're looking at. Uh I should note right now that this entire application everything
[1:01:50] you're seeing here is running in the client. So this is a browser side client side application single page
[1:01:56] application. Uh all of the the querying all of it is done on your computer. So you own the data. Uh this is not being
[1:02:04] stored on the server anywhere. And so we're just giving you tools to be able to interact with the data data that is
[1:02:10] being returned by the server. So you make the request to the server using this client. The server returns the data
[1:02:17] and then you own that data and can interact with it how you please. And if you if you build a query that you really
[1:02:24] like, you can export the CVS to your computer. computer. Um, or if you want to just export the
[1:02:34] raw data that came back from the server, you can go over here and choose either geo parquet or CSV as the format to
[1:02:42] export. Coming soon is LAZ. That should be out um probably mid December. Uh we now we support it on the server side uh
[1:02:53] and and very soon we're going to tie it in on the client side as well. Okay, I think with that
[1:03:05] I'm done. What a great demo on the use of slide rule web service for accessing and plotting ATL24 data. Thank you JP.
[1:03:18] The following summarize the concepts covered in part one of the webinar series. NASA's ISAT 2 carries a photon
[1:03:26] counting laser altimeter which is named Atlas. Atlas provides near contiguous along track sampling using six individual beams of green light at 532
[1:03:36] nmter wavelength providing high vertical resolution. resolution. Every photon detected by Atlas has a latitude, longitude and elevation
[1:03:45] associated with it. Atlas provides surface specific data products developed by experts and include products for land ice, sea ice, the atmosphere, vegetation
[1:03:56] and land, oceans and inland water. ATL 24 product provides atlas derived coastal bimetry via ensemble machine learning models where each photon
[1:04:07] classified as bethimemetry will have a confidence value assigned. The National Snow and Ice Data Center or NSIDC provides access to ATL24 data,
[1:04:17] metadata, and tools. NASA's Earth Data Search is used to find and spatially subset ATL24 bathimemetry data. Slide Roll is a public web service
[1:04:30] with low latency access to ondemand data products stored in S3. And slide roll provides on demand processing next to the data for
[1:04:39] generating customized data products using parameters supplied in the user's request. request. Looking ahead to part two of the webinar
[1:04:48] series, we will be covering the following topics. How to generate satellite derived bimetry using method method methodologies combining ATL24
[1:04:57] bthimemetry with optical satellite data from Sentinel 2. Python workflows for filtering, visualizing and analyzing baometric point clouds. Integration of
[1:05:07] ATL24 into existing Noah workflows for nautical charting and coastal zone management. An overview of Noah's SAT bathy tool and its capabilities for
[1:05:18] automated satellite derived bethimemetry generation using ATL 24. Before we transition to the question and answer session, I want to remind you
[1:05:29] there will be one homework assignment which you will be able to access from the training page on December 4th.
[1:05:34] Answers must be submitted by Google form with a due date of December 31st. To receive a certificate of completion, you
[1:05:42] must attend all three live webinars and complete the homework assignment by the deadline. You'll receive a certificate
[1:05:48] via email approximately 2 months after completion of the course. We want to thank once more Dr. Lori
[1:05:56] McGrder from the University of Texas at Austin, Dr. Diane Fritz from the National Snow and Ice Data Center, and
[1:06:03] JP Swinsky from NASA Gddard Spacelight Center for their presentations and instructive demos. Below is the contact information for
[1:06:11] Lorie, Diane, and JP along with links to the RSET website and social media. If you enjoyed today's webinar, we hope you
[1:06:18] will sign up on the RSET listerve to receive notifications of future trainings and follow us on social media
[1:06:24] for future relevant announcements pertaining to NASA's Earth Sciences. Below are a list of resources relevant to the material covered in part one of
[1:06:35] the training. We will now transition to the question and answer portion of today's training. Great. And and thank you for everybody
[1:06:49] that's been submitting your questions. Uh we've gotten a lot of good ones so far. So jumping right into it. Question
[1:06:55] number one. Can we develop watershed models using the data from the ISAT 2 imagery? What would be the minimum
[1:07:02] resolution? >> I'll go ahead and take that. Um I'm not 100% sure about the kind of model that
[1:07:14] is wanting to be developed but um I think hopefully the presentation was good at describing this data format. So
[1:07:24] we have a long track photon returns and those those tracks um we have six beams that are
[1:07:34] come in three pairs and the pairs are 90 m apart from each other with three kilometers separating each beam pair.
[1:07:42] But the along track resolution is quite good at around 70 cm. And so it's really the the elevation data that you get from
[1:07:52] ISAT 2 regardless of which product that you're looking at is really good validation data at along that um track.
[1:08:03] So I hope that helps answer that question. >> Okay Diane, thank you. Uh question number two, can we der can we derive
[1:08:14] data for different time periods to do comparisons? It would be useful for seabbed mobility assessments. Um this was me as well. Um so ATL24 as
[1:08:28] um many of the other data products are derive derived from the main ATL3 photons and those have been gathered
[1:08:37] since 2018. and you can separate out those files with temporal um queries and pick what you're looking at at different
[1:08:47] time periods. Of course, the um return time of the ISAT 2 satellite is 91 days. So, So, between that and getting good data at
[1:09:00] your particular location may limit um some of what you're trying to do with those comparisons, but those are the
[1:09:07] parameters for it. Awesome. Thank you, Diane. Question three, is the ATL 24 product already corrected for tides or is this a
[1:09:16] post-processing step we have to consider, especially for locations where title range is considerably wide? >> This is Chris. I'm a speaker on the um
[1:09:25] Thursday session, but I can answer this if if uh nobody else wants to jump in. Um we we actually don't need an explicit
[1:09:34] tide correction step in the ATL 24 workflow because we use a process similar to what's called ellipse orderly
[1:09:39] reference surveying in hydroving world. Basically it means that our our data our heights or our depths are not based on
[1:09:47] the instantaneous water surface. They're relative to a vertical datam at every step in the process either an
[1:09:52] orthometric datam or an ellypoidal datim. And for people that want to transform to a a tidal datam like main
[1:09:59] low or low water in the US at least we can use a tool called Noah's vatim to be
[1:10:04] able to do vertical datam transformations. So basically we don't we don't actually need an explicit tides um tide step but we leave it to the user
[1:10:12] to be able to transform to different vertical datms including title datms if they want to do so.
[1:10:21] >> Great Chris. Thank you so much. Question number four. That's a very clear scatter plot. Could you tell me about the steps
[1:10:28] taken to check for overfitting? >> Um, I can answer that if if no one else is. Um, this is Jeff Perry. I'm on uh
[1:10:37] UT's ATL 24 team and uh I I kind of wrote this assuming I understood the the question correctly. I don't I don't
[1:10:46] actually have the plot in front of me, but um uh the individual al I should have wrote this first. the individual
[1:10:53] algorithms may or may not overfit depending on their nature. They're all different, right? They all are are are
[1:10:58] very different algorithms. Um the final model, the ensemble uh is we use XG Boost um just because it's fast for no
[1:11:07] other reason. Uh it is prone to overfitting. We can we can fix that by adjusting the hyperparameters of the
[1:11:14] model. But um after all is said and done uh a lot of the overfitting we correct by applying this blunder detection
[1:11:22] that's like you know really obvious errors that that some of the models can make like they can some of them can put
[1:11:29] bethimemetry on top of seaf surface and obviously you can't have that. So so that that fixes a lot of those
[1:11:35] overfitting errors. Um I hope I answered that sufficiently. Great Jeeoff, thank you so much. Uh, really appreciate that. Question number
[1:11:46] five. five. >> You're welcome. >> How much work will it take to extend this approach to inland waters? Is it
[1:11:52] possible and is any team working on such a product? What about in northern latitude lakes and ponds?
[1:12:00] >> This is Chris again. I can answer this one if um no one else wants to. We in
[1:12:05] developing ATL24 we very purposefully did not consider inland waters because there's already a dedicated uh data product for inland waters which is ATL13
[1:12:14] and uh ATL13 does um also include a aimemetry attribute. >> Terrific. Uh thank you so much Chris and
[1:12:24] hopefully whoever asked that question can go and search for that ATL13 product. Question six, what applicability does this data have for
[1:12:33] bethimemetry mapping of inland and near coastal lakes >> is that the sorry is that one seemed like similar to the it seems similar to
[1:12:44] the previous question right inland waters again that's uh ATL20 ATL 13 is um inland waters >> okay great thank you Chris
[1:12:55] uh question number seven are positive depth bias ies in ATL 24 common and what could be the cause?
[1:13:04] >> I I can maybe take take that one too unless Jeff or somebody else wants to go
[1:13:08] ahead. I think that's still to be determined. I think that's a a great case where um we'd like to hear from
[1:13:15] from users of of the data as they do comparisons against uh independent reference data if they're seeing
[1:13:21] positive depth biases. In that accuracy test that was in Lori McGrder's um presentation, uh we actually didn't see
[1:13:32] a bias being consistently in one direction or another. I think we saw biases of around 10 cm that were that
[1:13:38] could either be positive or negative. Um there are some reasons why we might expect a a bias. For example, one of the
[1:13:47] things that our ATL 24 team has started talking about recently is um what's known as forward scattering bias and
[1:13:54] mathtric LAR. But I think we just haven't I mean part of the importance of of ATL24 and a vice 2 bimemetry in
[1:14:03] general is that there's just so many areas in the world where we don't have really good existing bethimemetry. Um
[1:14:10] and so that's kind of a a double-edged sword. It makes the data products quite valuable, but it also means that there's
[1:14:17] in many ca in many places in the world not a lot of existing data to to uh
[1:14:21] compare to. Okay, great Chris. Thank you so much. Question number eight. Does the slide roll web client apply any
[1:14:29] dinoising or classification algorithms before presenting ATL24bitry points or are we viewing the raw ATL24 photon returns? returns? >> This is JP. Um what was shown when we
[1:14:43] show it through the accessing it through the web client it's it's just the raw bethimemetry. Um in the general tab we
[1:14:52] do by default filter any low confidence bethimemetry just to uh keep the requests as fast as possible but then
[1:15:02] allow the the user to to drill down um and raise the threshold if they want. Um now uh in in a couple days we'll there's
[1:15:13] other APIs where you can apply different processing steps to the data being returned. Um those steps aren't
[1:15:21] available in the in the web client but are available through the Python client. Also I guess just going back a couple
[1:15:29] questions for those interested in ATL13 inland bodies of water. Uh there is also uh slide rule also supports accessing
[1:15:38] that data from the web browser as well. Instead of the coastal bethimemetry tab, you just select the inland bodies of water tab
[1:15:47] and you'll get the ATL13 data product. >> Great. Uh JP, thanks so much. Question number nine. How does ice distinguish
[1:15:55] between photon returns from the sea surface and photon returns from the sea floor in shallow coastal waters,
[1:16:02] especially considering issues like photon noise and surface wave variability? >> Um, this is Jeff again. Uh, Matt had
[1:16:14] answered this, but he's having technical difficulties, otherwise he would probably be speaking up. Um uh uh but as
[1:16:24] you can see in his his answer there, sorry now I'm just kind of reading it, but uh uh the the question is how does
[1:16:31] it distinguish between photon returns and shallow uh coastal waters? I mean we like he says we train on a lot and a lot
[1:16:42] of data and sometimes in really you know high waves we do make mistakes and the trough of a wave can be classified as uh
[1:16:51] seafloor. Um uh in release we we've had so what we've been calling version one of the algorithms we've had uh two
[1:17:00] releases of this and the second release uh fixes a lot of those. it goes back and and looks especially for those um
[1:17:10] places where this uh trough of the wave is mclassified as bethimemetry and fixes them. So that's one way we we we deal
[1:17:18] with that. >> Okay, Jeff, thank you so much for for chiming in and we apologize that Matt is
[1:17:26] not able to uh to access or or unmute himself, but uh but moving on. Question number 10. How does ATL24 handle the
[1:17:34] challenge of separating uh true seafloor returns from water column back scatter in shallow coastal zones where turbidity
[1:17:41] is high? Hi, it's Jeff again. Um, so I mean obviously if there's too much turbidity and the the signal disappears, there's
[1:17:52] nothing you can do. Um, you know, at some point that's going to happen, right? And and if the noise is too high,
[1:17:58] well, there's, you know, if you lose the signal, you lose the signal. Um but uh the you know again we have an ensemble
[1:18:05] here multiple algorithms and so for example the algorithm coastnet it operates on high uh you know imagery
[1:18:14] with high vertical resolution you can very clearly separate the two signals if there's not too much turbidity um and so
[1:18:21] it it it separates those out and and again as we keep saying the ensemble has an opportunity if some algorithm misses
[1:18:29] it or confuses the two signals or makes assumptions about the signal. Like I mentioned in the beginning, uh some
[1:18:35] algorithms don't don't won't even predict bethimemetry if the bethimemetry signal is stronger than the sea surface. Um but but the ensemble and the blunder
[1:18:46] detection has a chance to go back and fix all that. Um it doesn't always fix it, but but it has that opportunity.
[1:18:55] >> Great Jeeoff, thank you so much. Question number 11. Is bethimemetry available for large river systems like
[1:19:00] the Mississippi River? Or are there too many issues with turbidity or orbital path shoreline geometry? I I think that's again um similar to the
[1:19:15] previous questions on inland waters where um that would be the ATL13 product and not ATL 24 which is coastal focused.
[1:19:25] >> All right, Chris, thank you. Question 12. In slide rule, is the data derived per line only? So the spatial
[1:19:32] variability is poor. Yeah. So I think what you're asking um is is all of the data products right now
[1:19:41] that we generate or provide services for along track and they are um we would love to have produce image data, raster
[1:19:52] data sets. Um we hope to in the future uh but right now um we're funded only to support the along
[1:20:01] track uh products. >> All right, thanks JP. Question 13. Does the Python library allow for larger bounding boxes?
[1:20:17] So this this is just limited by um the retrieval of the granules from the cloud hosted data. So you can make larger
[1:20:27] bounding boxes, but your your code may um stall a little bit, but I put in um a
[1:20:35] reference here for being able to look up harmony and look into the harmony pi library and um see. So I to be honest I
[1:20:45] haven't done a very large grab myself. So I don't feel 100% confidence about um this answer. >> And and for a slide rule um the
[1:21:02] it's really easy and I'm I'm guessing the harmony would have the same um fundamental fundamental problem. It's It's really easy when
[1:21:11] you're looking at a a globe to not realize how big of a request you're making. Um I don't know if you remember
[1:21:19] when I was drawing that really small box in the demo. Uh and that had 700,000 points in it. You can imagine a factor
[1:21:28] of a hundred a factor of a thousand on that that easily. You know, you you're easily talking a billion rows.
[1:21:36] and and so with these photon photon cloud data sets, it's very easy to get um huge huge returns. So all that being
[1:21:48] said, on slide rule, we we let we let you do it. Um and and we'll do the best
[1:21:53] we can. Uh but uh it's typically the client crashes before the servers do. That's just what we we notice.
[1:22:04] >> Yeah. So, so um as JP is saying these data sets are massive. So really kind of doing some
[1:22:12] prelook of you know what is your temporal subset that you might want or your spatial subset and really
[1:22:18] restricting it to what you truly need is the best way. >> Yeah. >> Thank you Diane and JP. Uh question 14.
[1:22:30] Is turbidity the main thing affecting the confidence level? Does that come from beers? >> Um I I'm not sure who who put this
[1:22:44] answer in. So I can answer if no no no one else is. Um the the I mean yes the
[1:22:50] answer to the first question is yes. Turbidity and background noise is what's affecting the confidence level but it's
[1:22:57] implicit. It's not we don't measure the turbidity and then measure the background noise and then make assumptions you know make predictions
[1:23:06] based upon that. It's just implicit in most of the algorithms when there's more turbidity and more background noise.
[1:23:13] It's just going to have a harder time uh deciding what you know what the label what what classification a photon is.
[1:23:21] and and so uh and then down in the answer the XG boost model it's a treebased model and so it uses that tree
[1:23:30] structure to to determine what the uh what the confidence level is. It's like a probability. It's a soft max if you
[1:23:38] know what that is. But uh that it's it's not strictly speaking. It's not a probability, but it looks like a
[1:23:44] probability and acts like a probab. So so um that's where that comes from is it's it's part of the uh uh decision
[1:23:52] tree model uh uh will'll for every photon assign probabilities or softmax probabilities to each label and then
[1:24:03] choose the most probable one. Thank you, Jeff. Question 15. Uh, can we use it for detecting plate movement of
[1:24:11] tidal areas to get information about upcoming earthquakes? I'm just going to unmute and say that this is a really interesting application
[1:24:30] idea. Um Chris if you um please comment but I think th this is beyond the the production of ATL24 data but it's great
[1:24:42] to um have people thinking this way and thinking about applications for this data. data. >> I I was going to say the exact same
[1:24:50] thing. It's really interesting but beyond the scope of of what we've looked at. I don't know if the special
[1:24:54] resolution and accuracy support that. Um, yeah, if if anybody looks into that, I' I'd be very curious to
[1:25:02] to hear what they find. Diane and Chris, thank you. Uh, question 16, I think, has been addressed in
[1:25:11] previous questions. Uh, so for those that are interested in inland bethimemetry, definitely check out the ATL13 ATL13 uh, product. Uh, question 17. In
[1:25:20] satellite derived bethimemetry workflows that use ATL24 as reference data for training models on Sentinel 2 imagery are tubidity and bottom type limitations
[1:25:29] generally encountered first in the multisspectral reflectance rather than in the ATL24 LAR signal. I was just reading um
[1:25:43] this question. Oh, somebody scrolled and I'm not sure which one was this again. 0710. 0710. Um on in the Thursday uh sessions this
[1:25:52] week in uh the presentations that both I give and and Gretch Mori from Noah um we're going to we're going to talk about
[1:26:00] uh using ATL24 in combination with um satellite drive with imagery from multisspectral imagery. Um so hopefully those presentations will
[1:26:11] help answer this. Let me read this question again though. are turbidity and bottom type limitations generally encountered first in the multisspectral
[1:26:20] reflectance. reflectance. Um Um they're sort of independent workflows but um some of the constraints are the same. So obviously in any method
[1:26:34] of satellite drive with imagery relying on on spectral data and relying on having returns from the seafloor
[1:26:40] turbidity is is one of the the main limiting factors and and that's the case also with um with ISAT 2.
[1:26:49] Uh generally the ranges in which they both work are are pretty similar which makes um ATL24 a pretty good choice for
[1:26:59] uh calibration and validation or just integration with spectral retri. I hope that answers the question and I
[1:27:07] hope that the talks that Gretchen and I give on Thursday will also help answer that. >> Great Chris. Thank you so much. Uh
[1:27:16] question 18. Are there tools available for accessing the ATL13 products such as slide rule? And Diane, thank you so much
[1:27:22] for adding this link so that they can access that data set. Uh question 19, is there a graded product available or plan
[1:27:29] for the future for the US East West? Uh it's covered by coasts. Thank you. I I don't think our team has explicitly
[1:27:47] talked about doing a gritted product. Um from the beginning the intent was for for ATIL24 to be a long track product.
[1:27:56] Um I think that uh certainly there there are tools and and options that will help um end users create creative products.
[1:28:06] In some areas, I think we're just starting to see enough coverage from all of the different ISAT 2 overpasses that
[1:28:13] that we maybe have enough data in places to do like a grided bathtric DEM um solely from ISAT 2 data. But in other
[1:28:23] areas where people want a a grided product kind of like wall-to-wall coverage um those are cases where the
[1:28:30] integration with uh spectrally driveimemetry from multisspectral imagery can be very valuable. >> Great. Thank you Chris. Uh question 20.
[1:28:40] What changes are expected to the confidence levels next year? It looks like Matt might have answered this one and unfortunately Matt does not
[1:29:00] have access uh to this WebEx. Um but he did provide an answer which I will read but I apologize because I'm not the one
[1:29:08] that contributed this answer but uh we are actively improving the constituent models and investigating new models to
[1:29:14] add into the mix. The confidence levels are entirely dependent on capabilities of the constituent models. After building the ensemble and prior to
[1:29:22] publishing the next version of ATL24, we will conduct a study of confidence values relative to reference data sets
[1:29:28] to determine the updated best practice value to use. Uh thank you Matt for adding that and uh and and for answering
[1:29:35] that question. Uh question number 21. How critical is V's uh KD490 to the uncertainty assessment? I would think
[1:29:43] clouds and land adjacency would greatly reduce the quantity of KD490 retrievals and quality of these retrievalss would
[1:29:50] be reduced in optically optically shallow waters unless alterations to the standard KD490 algorithm are used to minimize benthic contamination.
[1:30:05] I'm not sure who typed that answer but I I agree with what's um given there as the answer. the the deers KD490 is not
[1:30:12] directly used in um the uh the depth retrieval. It is uh the only place where that's currently used is in the
[1:30:21] uncertainty calculation. Um and as it says in the answer there that that's used in in data that's that goes into
[1:30:27] the uncertainty um lookup tables. >> Yeah, hopefully that that answers it. And and Chris, I don't know if you can
[1:30:37] answer this next one as well, but why not use KD490 in a green band example given the Ver's uh 555 nanometer.
[1:30:45] >> Um the the global um KD uh diffuse attenuation coefficient of downwelling or radiance, that's what KD represents. The global
[1:30:56] data products that we're aware of and work with are generally provided as KD490, meaning diffuse um attenuation
[1:31:04] coefficient at at 490 nanometers. Um it would be better to use one closer to 532 nmters, which is the wavelength at which
[1:31:14] ISAT 2's um ladder system operates. Uh what we do is we actually provide a a con a conversion from um KD490 to to
[1:31:25] KD532. KD532. Um and that's that's based on a a a derived uh empirical linear relationship between KD490 and KD532.
[1:31:37] That said, um, and I'm not aware of it, but if there is a global readily available, um, Vers KD or Vers KD55,
[1:31:46] uh, the question is a is a good one, that probably would be a a better product to use.
[1:31:54] >> Thank you, Chris. Question 23. Can I get access to the data for Nigeria? um it is a global data set so um along
[1:32:09] the coast there I don't know what the mask actually looks like in that space so Chris maybe at the top of your mind
[1:32:16] you might have a better sense but yes um what is available from finding baimemmetry from ATL3 to ATL 24 should
[1:32:26] be in that area. >> All right, Diane, thank you. Question 24. Could this be used to map objects
[1:32:35] near coasts like vessels, buoys, jetties, etc.? I wrote um what is there, but Chris, you you will definitely have a better sense
[1:32:49] of this because depending on the size of the sunken vessel, things like that, and the clarity of the water, being able to
[1:32:56] um see that in the seafloor, I'm not sure if if anybody has come across that in the tests, but possible if if the
[1:33:06] there isn't any turbidity in the water, I would think. Chris, I think you're still muted. I I >> I was just saying I I agree with Diane.
[1:33:20] It's it's really just a function of the of the resolution. And I think that one was addressed already, but basically in
[1:33:26] the along track along any any individual beam track, the resolution is um approximately 70 cm. Although it also
[1:33:35] depends in the pimemetry case, it depends on water water clarity. Um and then it's coarser across track spacing.
[1:33:41] So just you know is the size of an object is it is it detectable at that spatial resolution. At least for things
[1:33:49] like jetties or you know large um you know coastal engineering structures. Uh if if you happen to get a track line
[1:33:57] over it, you will you'll you'll most definitely see it. And I've seen cases where you can get right up to um say a
[1:34:04] jetty and then and then you'll see the see the um surface elevations um going over the top of the jetty.
[1:34:15] >> Okay. Uh Diana Chris, thank you. Last question. 25. What happens in the presence of algae blooms or seaggrass?
[1:34:26] Um, that's a great question and I I think the answer is it just it just depends. Uh, you know, when you've got
[1:34:32] LG blooms, that's obviously impacting the turbidity, impacting the the ability of that laser light to penetrate through
[1:34:38] the water column and to get a reflectible reflection off the seafloor that makes it back up to the to the
[1:34:44] sensor. Um, and then it's kind of a similar thing with with uh with um seaggrass uh that can do a couple
[1:34:53] different things. It it can obscure the seafloor. It also um seaggrass tends to have relatively low reflectance at 532
[1:35:02] nmters. So it can make it difficult to to get returns. But um more commonly what I've seen in in areas uh for
[1:35:10] example, you know, we we've looked at um some data around uh uh St. Croy um where there might be a particular track that
[1:35:18] goes over a seaggrass bed and uh you know sometimes we have seen um what looks like good bethimemetry in those
[1:35:25] areas. Uh I don't think we've done an accuracy assessment specifically over overseass. So you know how much does
[1:35:32] that impact the accuracy? I would say kind of unknown at this point and probably depends a lot on um you know
[1:35:39] density of the seaggrass um uh depth and other factors. >> Great. Uh Chris, thank you so much. Uh
[1:35:49] as we wrap up, I just want to thank uh one all the participants that joined wherever you joined from. Uh thank you
[1:35:54] so much. We do look forward to seeing you in two days on Thursday for the second and final part of this training
[1:35:59] series. Uh we also want to thank once again uh Lori McGrder, Diane Fritz, and JP Swinsky. And uh also for those that
[1:36:06] were able to join to help answer the questions, uh Jeff Perry and Chris Parish. Thank you both. And we also want
[1:36:12] to acknowledge Amy Neely who's also uh helping out and supporting this training as well. So thank you to all the people
[1:36:18] that presented and also helped to answer the questions. And we look forward to seeing you all in two days for the
[1:36:22] second part of the webinar series. Thank you.
