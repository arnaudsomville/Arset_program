# Introduction to Full-Waveform Lidar Part 1/2

`https://www.youtube.com/watch?v=2GZfn6Z6v4Y` · id 118 · 2:00:00 · module 75 — Spaceborne Lidar for Monitoring Vegetation Structure and Biomass using GEDI

[00:03] Hi everyone. Welcome to our RSET training series, Spaceborn LAR for monitoring vegetation structure and biomass using Jedi. Today is part one of
[00:16] our training series introduction to full waveform LAR. My name is Savannah Kulie. I'm a researcher at NASA Ames Research Center
[00:27] with the Bay Area Environmental Research Institute in Mountain View, California, and I'm a trainer with the ARSET
[00:33] Ecological Conservation Team. Before we begin today's training, I'll say a few quick words about the ARSET program.
[00:45] program. The NASA applied remote sensing training or arset program provides cost-free training on the use of remote sensing
[00:54] observations, analysis methods and tools. We provide training in several thematic areas including agriculture, climate and resilience, disasters,
[01:05] ecological conservation, health and air quality, water resources, and wildland fires. Our set provides trainings both online or in person. Our online
[01:16] trainings are delivered in two formats, live and instructor-led like today's training or asynchronous and self-paced. Like NASA's free and accessible data,
[01:26] all of our trainings are offered at no cost. We try to offer trainings in more than one language whenever we can, and
[01:33] we only use no cost and open-source software and data. We offer our trainings at a range of
[01:40] levels so you can find a training series that fits your level of experience and interest. Please visit us at our website
[01:47] to learn more. We'll start today by giving an overview of this training series. Spaceorn LAR for monitoring
[01:54] vegetation structure and biomass using Jedi. Jedi. One fundamental question that many of us are interested in is thinking about
[02:05] forest canopies and what's happening specifically beneath the canopy which from many traditional satellites we don't actually know because a lot of
[02:19] optical remote sensing instruments can tell us about for instance greenness of the canopy. but can't actually tell us any
[02:30] structural information or information about the understory. Spaceborn LAR can do this. Spaceborn LAR instruments such as NASA's Global
[02:41] Ecosystem Dynamics Investigation, known as Jedi, measures forest structure across over 20 billion locations on Earth. Earth. Today, you'll learn to use this data.
[02:56] By the end of this training, you will be able to first identify the fundamental physical principles of LAR remote
[03:03] sensing, including the uses and limitations for terrestrial applications. applications. Second, access and retrieve full waveform LAR data from public NASA
[03:13] repositories to visualize vegetation structure. Third, identify key Jedi products, including elevation, canopy height, vegetation, structure metrics, and biomass across different processing
[03:25] levels and spatial resolutions. Fourth, access and visualize Jedi data related to elevation, height, vegetation structure, and biomass for specific
[03:35] areas of interest using openly available tools. tools. Fifth, utilize Jedi standard biomass products at footprint and 1 kilometer
[03:45] scales to map forest resources. Sixth, access the open-source OB1 application programming interface or API to generate estimates of biomass change in areas of
[03:57] interest. interest. Finally, seventh, identify how OB1 can be used to create baseline scenarios for forest carbon accounting projects. The
[04:09] only prerequisite for this intermediate level course is the RSET training on fundamentals of remote sensing. Here we
[04:18] provide three other suggested trainings as well as a resource from the land processes DAC which has a number of data
[04:29] tutorials for Jedi and the other three trainings are our set trainings. All of them are available on our training web
[04:39] page. page. There are three parts in this training. In part one today, we'll introduce the full waveform LAR with theoretical
[04:49] background and two hands-on exercises using Jedi level one and level two data. Parts two and three will cover
[04:57] additional spaceorn lighter products from the Jedi mission as well as biomass estimation. estimation. The homework opens on the last day of
[05:05] the training on November 6th, 2025. It is due 2 weeks later on November 20th. A certificate of completion will be
[05:13] awarded to participants who attend all live sessions and complete the homework assignment before the given due date.
[05:23] And with that, we'll begin part one, introduction to full waveform LAR. We have two instructors for part one.
[05:34] myself. My name is Savannah Kulie. And our second trainer is Naara Pinto who is a research scientist in the suborbital
[05:43] radar science and engineering section of NASA Jet Propulsion Laboratory. I would also like to acknowledge my fellow colleagues in the RSET ecological
[05:53] conservation team who have supported the creation of this training. Sativa Cruz, Juan Torres Perez, and Justin Feain.
[06:02] By the end of this session, participants will be able to first recognize essential physical principles of LAR
[06:10] remote sensing. Second, identify different types of LAR sensors. sensors. Third, assess the uses and limitations of full waveform LAR technology for
[06:23] terrestrial ecosystem management and conservation applications. Fourth, access public NASA repositories to retrieve full waveform LAR observations to visualize and quantify
[06:36] vegetation structure. If you have questions during today's training, you can put them in the Q&A box within WebEx at any time. At the end
[06:47] of the training, we will try to address as many questions as we can and we'll post these questions and written answers
[06:55] to the training page within a week after the training. All right, let's dive into section one, which focuses on the fundamentals of LAR
[07:04] remote sensing. Remote sensing systems can be classified into two fundamental categories, passive and active sensors. Passive sensors detect natural
[07:15] electromagnetic radiation reflected or emitted from Earth's surface, such as sunlight reflected from vegetation or thermal radiation from the ground.
[07:24] Examples include optical satellites like LANCAT and thermal infrared sensors. In contrast, active sensors generate their own electromagnetic energy and
[07:36] measure the signal returned from the target. LAR, which is short for light detection and ranging, is an active
[07:43] remote sensing technology that uses laser pulses to measure distances and properties of objects and surfaces. LAR operates on the principle of laser
[07:54] ultimate, measuring the time it takes for a laser pulse to travel from the sensor to a target and back. The full
[08:02] equation governing LAR distance measurement is that distance equals the speed of light which is a constant multiplied by the time of flight divided
[08:15] by 2. The system emits short laser pulses typically in the near infrared spectrum at 1,64 nanometers and
[08:26] precisely measures the time delay of the returned signal. This time offlight measurement combined with the sensor's position and orientation allows for the
[08:37] calculation of three-dimensional coordinates of the reflecting surface. LAR's ability to penetrate vegetation canopies and provide three-dimensional structure information makes it sensitive
[08:49] to several biohysical parameters. Elevation and topography is the first that I'll talk about where lighter can create highresolution digital elevation
[09:00] models referred to often as DEMs by measuring ground returns beneath vegetation canopies. The difference between the highest
[09:09] vegetation return and the ground surface provides direct measurements of canopy height which is another key parameter often used for forest biomass
[09:17] estimation. Lighter captures the three-dimensional distribution of vegetation elements, revealing canopy layers, understory density, and structural complexity that cannot be
[09:27] observed with passive optical sensors. These structural measurements support forestry applications, wildfire applications, and conservation applications. LAR focused on terrestrial
[09:39] studies operate at either green or near infrared wavelengths. The frequencies of these wavelengths, unlike microwave frequencies, cannot penetrate through
[09:49] clouds. LAR for terrestrial applications uses the near infrared lasers like Jedi's 1,64 nanometer laser because it reflects
[10:01] strongly off of vegetation. In contrast, baometric lidar uses a green light laser because that wavelength effectively penetrates water.
[10:13] On this slide, you can see a list of some of the available LAR instruments that are include both spacebor and
[10:22] airborne instruments firing in the near infrared as well as in the green portion of the electromagnetic spectrum.
[10:31] LAR systems can be deployed on various platforms, each offering distinct advantages. Groundbased systems known as terrestrial LAR provide extremely high
[10:41] resolution measurements up to the even millimeter accuracy for detailed studies of forest structure, archaeology and engineering applications. These systems
[10:51] are ideal for smallcale intensive studies but are limited in their spatial coverage. coverage. There are also aircraft and unmanned
[11:01] aerial vehicles or UAV platforms offer a balance between resolution and coverage. Airborne LAR typically achieves point densities of 1 to 50 points per square
[11:14] meter and is widely used for topographic mapping, forest inventory, and hydraological studies. Third, satellite based systems like NASA's Jedi and ISAT
[11:24] 2 provide nearly global coverage, but with lower spatial resolution. These systems are essential for understanding large scale patterns in vegetation
[11:34] structure, ice sheet dynamics, and global carbon cycles. Modern LAR systems employ different technologies to capture and process laser returns. Discrete
[11:44] return LAR systems record individual return pulses when the laser encounters reflecting surfaces. A single laser pulse may generate multiple returns as
[11:56] it interacts with different canopy layers and eventually the ground. Discrete return systems typically record about one to five returns per pulse and
[12:06] are common in airborne applications. Single photon counting LAR systems, which include NASA's ISAT 2 mission, detect individual photons rather than
[12:16] complete pulses. While providing less energy per measurement, these systems can operate from much higher altitudes, including space, and offer unique
[12:26] capabilities for ice sheet and vegetation studies. Instead of recording discrete returns or individual photons, full waveform LAR systems capture the
[12:36] complete energy profiles called waveforms of the returned laser pulse. This provides more detailed information about the vertical distribution of
[12:46] reflecting surfaces and is particularly valuable for vegetation studies. The entire waveform can be analyzed to extract multiple metrics describing
[12:56] canopy structure. Our training today will focus on this latter category of full waveform LAR. First, we'll talk a
[13:05] little bit more about discrete LAR. For discrete LAR systems, return pulses are classified into one or more discrete
[13:14] returns. These returns are recorded when the intensity exceeds a predefined system threshold. That intensity is shown here on the x-axis as returned
[13:24] energy. The last returns are especially important for detecting the ground where you can see there may be uh one to five
[13:33] returns and here in this schematic we can see that the fourth return here is corresponds to what's called the ground
[13:41] return. Now let's discuss some differences in terms of the spatial sampling patterns of discrete versus full waveform LAR. The decision to
[13:52] choose one system over the other involves a trade-off between the level of vertical detail captured and the
[13:59] achievable spatial coverage for a given project. In essence, full waveform LAR excels in providing intricate vertical information at the cost of reduced
[14:09] spatial coverage, while discrete LAR can often allow for prioritizing a high density of samples due to less detailed
[14:17] vertical information. Here is an illustration from a study in Taiwan of the spatial coverage differences between a full waveform data set from Jedi which
[14:27] has the rich vertical profile data and discrete return airborne system which has as you can see nearly wall-to-wall
[14:36] coverage. So the Jedi footprints correspond to the light green. I set two observations correspond to the black
[14:44] dots and the airborne laser scanning data or the ALS data which is which was used for validation purposes for this
[14:54] study and is the discrete system is shown in the in the brown points. Instead of just recording peaks, as in
[15:03] the case of discrete LAR point clouds, full waveform LAR systems capture and digitize the entire profile of the
[15:10] returned laser energy. This results in a continuous waveform that represents the vertical distribution of all surfaces the laser pulse encountered.
[15:21] For the example shown here, in a forest, the shape of the waveform reveals the height of the canopy, its density, and
[15:30] the location of the ground beneath it. This detailed information is exceptionally valuable for complex vegetation and biomass studies.
[15:41] Now, we will move to section two, which focuses on full waveform LAR from the Jedi mission. NASA's global ecosystem dynamics
[15:52] investigation or Jedi produces highresolution full waveform lighter observations of 3D structure of the earth. earth. Jedi is deployed on the Japanese
[16:04] experiment module exposed facility. The highlighted box shows the location of Jedi on this part of the international
[16:13] space station. This diagram shows how Jedi's three lasers work. One laser is split into four coverage beams shown in blue that
[16:25] create four ground tracks. The other two full power lasers shown in orange are not split and create two
[16:34] ground tracks each. In total, this creates eight parallel tracks of data collection on the Earth's surface, separated by about 600 meters.
[16:47] Jedi Science data products include footprint and grided data sets that describe the 3D features of the Earth.
[16:55] These data products are assigned different levels which indicate the amount of processing that the data has undergone after collection.
[17:04] All products are publicly available with the lower level products level one and two from NASA's land processes
[17:13] distributed active archive center or LPDAC and the higher level level three and four are from the Oakidge National
[17:22] Laboratory DAC data are initially transferred to the Jedi mission operations center at the Gddard Space Flight Center that deploys
[17:33] acquisition plans planning on a weekly basis and then processed through the science operations center to distribute science data products to the DAXs. The
[17:43] physical theories, mathematical procedures and model assumptions that are used in the creation of these data products are described in what are
[17:51] called the algorithm theoretical basis documents. These documents can be found at the link provided in the slide here
[17:59] which then these slides will be posted again on the training website. In today's training, we are focused on the
[18:07] level 1B and level 2A data products. So the level 1B data are the geoloccated waveforms and the level 2A include the
[18:21] ground elevation, the canopy top height and what are called relative height metrics which we will get into in the
[18:28] next slide. This is a representation of a waveform which contains information about both the vegetation canopy and the
[18:36] underlying topography. A near infrared pulse in the case of Jedi is fired towards the surface of the
[18:45] earth where it is reflected by leaves and branches within a nominal 25 meter diameter footprint which is shown and
[18:55] the on the right. The returned waveform which is shown on the left is processed to find ground topography, canopy height
[19:04] and relative height metrics. Relative height metrics quantify the vertical structure of vegetation by calculating the height at which a
[19:15] specific percentage or quantile of the total laser energy returned to the sensor is reached relative to the ground
[19:25] surface. surface. So in this case what you can see here from this waveform is although there is
[19:32] some small amount of energy here we would consider that noise and we'll talk more about noise in um the in the demo.
[19:41] But from this waveform the top the height at which all of the energy of the waveform is is returned to the to the
[19:49] sensor occurs here. And that's known as relative height 100. So 100% of the energy of the waveform has been returned
[19:58] by this height. Similarly, relative height 50 is the height of median energy. energy. In other words, this is the height at
[20:08] which 50% so this amount of energy has been this lower part of of the waveform has been returned to the sensor. But
[20:17] still 50% of the remainder of the waveform energy has not been returned. Right? So RH50 is by definition lower
[20:26] than RH100. So now let's take a tour of a real world example level 1B waveforms from Jedi
[20:39] that we will be looking at in more depth in the hands-on demo after this presentation. presentation. Here is an example of a waveform from
[20:52] Jedi's level 1B data set plotted in Bankhead National Forest in Alabama. We are looking at an area of the forest
[21:02] where some of the trees in the stand appear brown indicating damage and possible mortality of the trees which is
[21:10] likely due to the presence of dendrocttonus frontalis the southern pine beetle and the southern pine beetle is currently widespread in this region.
[21:21] The trees within the highlighted yellow example footprint in the forest appear mostly green. Looking at the corresponding waveform
[21:29] plot to the right of the map, the first peak of the waveform that you see circled in brown corresponds to the
[21:37] laser energy returns that reached all the way to the ground since these correspond to the lowest elevation peak.
[21:45] In this case, there is a range of high amplitude above ground returns starting around elevation 180 m all the way up to
[21:54] about 210 m. The observed wide distribution and multiple peaks of returns along this elevation profile could indicate the presence of some
[22:05] healthy trees and intact branches in the shot despite widespread beetle infestation in the immediate surrounding area to the north. Here is another
[22:16] example of Jedi level 1B uh waveform plotted in Bankhead National Forest. So in the same uh general region but a
[22:26] slightly different uh track of data from the waveform plot we can see very low amplitude signal in the above ground
[22:36] return. return. The lack of high amplitude returns higher up on the elevation profile could possibly arise because of low tree cover
[22:45] and/or tree mortality within the footprint of the shot. You might be wondering though that at least from the satellite image base map,
[22:56] it seems like at least most of the of the area with within this 25 m diameter footprint, the trees appear green.
[23:06] Although in the satellite Ezri worldview base map that we are using here, we see some green trees. It is important to
[23:13] note that there might be a temporal disconnect between the satellite imagery base map that we're using for reference
[23:20] and the Jedi shot we are looking at here. The imagery for the EZRI worldview base map is stitched together from
[23:26] various different acquisition dates. And the exact acquisition date of this image could be anytime between 2019 and 2024.
[23:34] Meanwhile, the Jedi shot here is from 2019. So there may have been some tree recovery and or regrowth captured in the
[23:42] optical satellite image that is not what's shown and represented by the the time slice that the Jedi observation
[23:51] reflects. Here is a third example of Jedi level 1B data. The waveform shows a single ground return with no above ground signal
[24:01] whatsoever. In this case, we can see from the base map that this actually makes sense where this footprint is in a
[24:09] sparse vegetation area featuring grass and small shrubs, but no trees in the 25 m diameter area. So, it's very possible
[24:18] that the small amount of grass or very small uh shrubs were not picked up by the waveform signal at all. Let's look
[24:28] at a final example. In this case, we see multiple peaks of the waveform, but it is unclear from visual analysis at least
[24:37] what portions might correspond to the ground versus what portions of the waveform correspond to vegetation above the ground. When you explore these data
[24:46] in an area of interest of your own using for instance the Python notebook that we will be looking at in the in the
[24:53] upcoming demo, you will notice that some waveforms show clear sharp ground returns with minimal activity below. However, other shots will show more
[25:04] complex patterns such as the one we are looking at here where we can see multiple peaks in what we think is the
[25:12] ground return or the initial part of the vegetation signal. The good news for us is that in the level two data
[25:20] processing, shots like this would likely be would be clarified through an additional set of processing where there
[25:30] are six different algorithms that all contribute to identifying where the actual ground is. And if these six
[25:39] algorithms don't agree within 2 meters, they are generally excluded from subsequent analysis. The most common reason for a complex or unclear ground
[25:50] signal could be due to noisy measurements either with from system noise or from thermal noise. Another possibility is that more heterog there
[26:05] may be more heterogeneous terrain within those footprints. On sloped terrain, the 25 m Jedi footprint may sample across
[26:13] elevation gradients. Combined with Jedi's geoloccation uncertainty, which we'll mention in a later slide, the assumed ground elevation may not
[26:22] represent the true ground within the foot. foot. And then a third potential reason is that different vegetation density might
[26:31] be affecting scattering where laser photons can scatter multiple times within vegetation before reaching the detector arriving later than expected
[26:42] and appearing at lower elevations in the actual ground. So you may remember seeing this figure before when we first
[26:49] the idea introduced the idea of the waveform. Now we are seeing a third plot which shows the cumulative energy
[26:56] returned at each height as a percentage of the total energy of the waveform. So this is called the cumulative return
[27:04] energy profile with present with percentages converted to cumulative probabilities that range from 0 to one. So the RH metrics that we've that we
[27:14] already defined or that we that we're circling back to now quantify the vertical structure of vegetation by
[27:20] calculating the height at which a specific percentage of the total laser energy returned to the sensor is reached
[27:26] relative to the ground surface. So, as you can see here, RH95 RH95 canopy height is often defined as RH95,
[27:38] but can also be up to RH 100 depending on the particular application. Here is an example of canopy height data
[27:47] from Jedi in the region of Ukayali, Peru. The rectangular areas are oil palm plantations and the surrounding areas
[27:55] are a mix of mature forest, secondary forest, actively used pastures and abandoned pastures. In this case, canopy
[28:03] height is quantified as RH95. Although, as I mentioned, RH98 or some other similar upper RH metric could also
[28:12] have been used. Notice that there are some points along the tracks of data that are excluded. That is because we applied a standard
[28:20] filtering procedure that removed any observations with a with a low quality flag. Lowquality data could be instances
[28:28] of observations that either did not meet the beam sensitivity threshold of 0.9 or that showed a deviation as I mentioned
[28:35] before greater than 2 meters among the six algorithms used to identify the ground elevation. This graph shows the mean and standard
[28:43] error of relative RH metrics in the cumulative energy profiles for different forest classes in Ukayali, Peru. We can see the mature forest class shown
[28:56] in blue, the secondary forest class in dark green and the young vegetation regrowth which is generally uh in areas of abandoned
[29:07] pasture lands that is shown in light green. We see that mature forests have the highest canopy heights and the
[29:17] lowest variance in canopy height relative to secondary and young vegetation regrowth. This is pretty consistent across all all
[29:26] RH metrics, not just these upper metrics which correspond to canopy height. Meanwhile, RH50 corresponds to the height of median energy as we as we
[29:37] learned in the previous slide. And this this metric RH50 tells us about the distribution of understory vegetation
[29:46] which also varies by forest type among the forest classes. Again we see that mature forests have the highest RH50
[29:56] values relative to secondary young vegetation regrowth. RH metrics can be compared across land uses. Here is that same data set that we
[30:08] saw on the previous slide from Ukayali, Peru, showing the median and interquartile range of relative height metrics of interest over tropical
[30:18] lowland forest regeneration classes which we saw in the last slide including mature forest, secondary forest and young vegetation regrowth typically
[30:26] after abandon pasture abandonment. And then we also see some agricultural classes including oil palm plantations as well as cacao plantations including
[30:36] both monocrop and agroforestry cacao systems. systems. Despite their their power for capturing detailed vertical structure, spaceborn full waveform LAR systems like Jedi face
[30:49] numerous operational limitations. One limitation is geoloccation error. Jedi has positional uncertainty of each footprint of about plus or minus 10 m
[31:01] for a one sigma error. This requires careful filtering and the use of buffers, especially in heterogeneous areas where a footprint might
[31:10] incorrectly sample an adjacent land cover type. A best practice is to filter Jedi observations to only include a
[31:19] include footprints with homogeneous land cover types of interest within a diameter of 45 m say 25 m of the
[31:28] original diameter area of the beam and plus orus 10 m additional buffer to account for geocation error as shown in
[31:35] the figure here. Another limitation is the inability to fully penetrate clouds which unlike other active sensors that
[31:44] are radar systems um LAR systems aren't able to penetrate clouds. Another limitation is that in exceptionally dense canopies such as tropical for
[31:55] forests that we saw in the Peruvian Amazon, the laser signal can be entirely attenuated. In other words, absorbed or
[32:04] scattered before it reaches the forest floor, resulting in an inability to detect the ground. And as a part of the
[32:13] level two filtering that we did in the examples that we show that I showed here, this limitation was accounted for
[32:21] by the filtering that we applied. Another limitation is that the data is collected in distinct footprint tracks
[32:27] rather than a continuous map leaving large spatial gaps. This comes back to that difference that we were talking
[32:34] about earlier between many airborne discrete LAR systems versus spaceborn full waveform LAR systems. So essentially this makes the data
[32:45] unsuitable for applications requiring wall-to-wall coverage of a region. Another related limitation is that of limited temporal resolution. Due to the
[32:56] spatial sampling of the Jedi mission and the sparse spatial sampling, it is very rare for any of the Jedi footprints to
[33:07] be repeated and observed uh by a second time. There are some cases where this happens, but there are not very many
[33:15] over the globe. Finally, another limitation is slope induced waveform contamination. In areas with steep topography, the large laser
[33:28] footprint can hit the ground at different elevations simultaneously, distorting the shape of the return waveform and complicating the
[33:35] identification of the true ground surface. surface. Before we move into section three, which will focus on practical force ecosystem
[33:44] applications with Jedi full waveform data, we now have a 15minute break for questions. I will start by addressing question one
[34:00] which I believe was asked during the conversation about discrete versus full waveform LAR and airborne versus spaceorn LAR if I'm correct and um the
[34:14] person who asked this question can can let me know if if if this was if I'm appropriately addressing it. So the
[34:20] question being does the platform and fine resolution of airborne lighter sensors is what I'm I'm inferring here
[34:28] guarantee accurate biomass estimates in temperate and boreal forests. So the short answer is no. While airborne lighter provides more accurate estimates
[34:41] than spaceorn systems, it does not guarantee accuracy due to numerous fundamental in uncertainties. So airborne LAR is more accurate than
[34:54] spaceorn for a few reasons. One is the reduced geoloccation error as we talked about. Um the other is the higher point
[35:02] density. density. Um, and then finally, there's generally better ground penetration. So, lower altitude and denser sampling increase
[35:13] the likelihood of being able to detect ground returns, especially in dense canopies. Um, which I guess more applies
[35:20] to tropical forests than you were specifically asking about temperate and boreal forests. um where essentially with denser canopies spaceorn systems
[35:30] may experience um complete signal attenuation. So that is the first question and then question two why do we use RH98
[35:46] for canopy height and not say RH100 for example right so and then then the second part of that is
[35:55] what is the possible application of RH50 does RH0 correspond to ground elevation so great questions so let's start with
[36:05] the question about canopy height. This relates to the fact that there is often noise as a part of the Jedi well the spaceorn
[36:23] LAR waveform that causes RH100 to be an artificially high estimate of canopy height. So, and and and this this does vary shot
[36:42] by shot. So, that's why there's no single RH metric that across the board is used as canopy height, right? It's it
[36:53] can be RH95, it can be RH98. Generally, I haven't seen for most spaceorn LAR studies, I haven't seen folks use RH100
[37:02] just because of that um the reality that a lot of times the noise is is present um and not fully processed out in level
[37:12] two data processing of of Jedi data. And if I can add something to what you're saying, Savannah, this is not
[37:21] >> sometimes our H100 doesn't capture the canopy surface, you know, depending on the the resolution that you want to
[37:29] study. Say you need to characterize the canopy surface with 30 m resolution, right? And you might have a Jedai shot
[37:37] that is centered on one very tall pine tree that has a sticking uh top and that is going to drive your RH100 up, right?
[37:48] That um that's going to be your RH100 essentially. So that doesn't really represent the canopy surface at the
[37:56] resolution you're trying to study. So that might be another reason in addition to noise it might be like a real return
[38:05] but it's coming from an outlier tree and it's not necessarily how we want to quantify canopy height.
[38:14] Yeah, thanks for that addition, Naara. And let's let's go into the and unless there's follow-ups about that, we can we
[38:23] can go into the question about RH100, which is the height of median energy of the waveform. So because
[38:34] because these RH metrics, you know, they reflect the and the waveform itself reflects the amount uh the distribution
[38:45] of of biomass along the vertical profile. when when there when we look at RH50 for example, we can learn about the understory
[39:03] in a way that can tell us about how much vegetation is is is dist how it's distributed, right? So, for instance, in
[39:14] a forest that has, and since someone did ask about um temperate forest, maybe we could use that as an as an example. If
[39:25] there's a temperate forest that has a denser understory um with which is allowed, you know, can often happen when
[39:37] this when the the taller trees are more separate and and that allows for light to get through to the understory that
[39:45] will be detected by higher RH 50 values. Um and and whereas if there was less of an understory maybe those RH50 values
[39:58] would be lower. So that's just one example. Nara, I'm not sure if you'd like to add to that explanation as well.
[40:04] >> No, nothing to it. Thank you. >> Okay, great. And the question about RH0 is is a good
[40:13] one because actually I wonder in in the in the followup when when we post this question and answers document
[40:23] to the to the course website, I can add a visual that might help explain or kind of speak to this question about RH0
[40:32] because because it it some RH metrics often RH metrics in the level two data uh Jedi data are negative
[40:44] meaning that they're part of the ground return energy but as you saw in the in the one of the previous you know slides
[40:54] that was showing kind of this waveform um um showing the multiple waveform examples. You'll notice that a lot of the energy
[41:06] that reaches the ground due to a c a couple of factors and I I could get into them but I also want to
[41:14] be mindful of time um that essentially some of those returns will end up being registered as below zero ground surface.
[41:25] So sometimes RH0 is negative and sometimes it is around zero and sometimes it's slightly and so I think
[41:34] it basically it varies on the topography and um and on the the level two processing algorithms that are where
[41:44] there's basically six different algorithms that are used at least in the Jedi data processing pipeline all of
[41:50] which are designed to identify the ground and have slightly different ways of doing that. Anything to add, Naara?
[42:01] >> No, nothing to add. Thank you. >> Sure. So, what is the global availability of this data?
[42:12] Great. So we already um have kind of a an explanation here where um for Jedi in particular which is on board the
[42:24] international space station and and due due to this due to its placement on the ISS in the ISS orbit there is um a
[42:33] bounding of latitudes between 51.6 degrees north and south. So that is that's where the data are available and
[42:44] then as of course mentioned in the presentation there this is a sampling mission right so it's not wall-to-wall
[42:51] coverage um in and and and neither is our other uh LAR uh spaceorn LAR missions from NASA
[43:01] right so ISAT is also not um wall-to-wall coverage so sampling uh they're both sampling missions So question four, since LiDAR is an
[43:19] active data collection platform, why is it limited by cloud cover? This is yeah, this is a good question.
[43:31] And And so there I think maybe another another thing to think about is that there are different
[43:41] types of active sensors and Nara's expertise is actually in radar remote sensing. And Naira, maybe you could also
[43:47] speak to this. Um because radar radar systems are able to penetrate clouds. Um but jedi which fires in the near
[43:57] infrared portion of the electromagnetic spectrum spectrum um that wavelength essentially often can does not penetrate through through
[44:08] clouds. And so N that's the short answer and Nara if you want to elaborate more and kind of explain how how um radar
[44:16] systems are able to penetrate clouds I think that would be really helpful for the audience. >> Yeah the essentially the active has to
[44:25] do with whether the instrument makes its own signal or not and then the issue of signal penetration depends on the
[44:33] wavelength. So you have LAR that is can penetrate through clouds but radar you also have different wavelengths and some
[44:43] of them can penetrate through canopies and some of them can't. So it that's why we usually talk about the wavelength
[44:51] when you characterizing those systems. So the the issue of sensitivity has a lot to do with how the signal penetrates
[44:59] in in different media. So this is a very good question. Question five, you stated the green band
[45:14] penetrates water. Can it be used to study water pollution from an industry like mining? So that is
[45:26] is an interesting question. I I'm not aware of applications. It's it's not my area of expertise. And I I
[45:37] wonder if we could do a followup on this question to to kind of look a little a little more.
[45:47] I mean in terms of lidar it's it's I I don't think there would be an application for water
[46:00] quality. I think the the water applications of for instance isat which which fires in the green is is more for
[46:10] detecting quantities of water and changes um in ice. So for LAR specifically, I'm I I'm not sure that there would be an application
[46:22] for water water pollution um the way that you know optical sensors are are used, but I'm I'm learning things every day.
[46:35] So, you know, it's very it it could be. So, I I think that I'll leave that as my
[46:40] answer for now. And if anyone else wants to chime in, Niara or um yeah, we will follow up before
[46:47] >> Yes, we will follow up and look for some references. >> Is there any filtering applied to filter
[46:57] out shots with clouds? So, this will depend depend for Jedi specifically. This will depend on the level of processing I believe.
[47:10] in and Naara's demo actually focuses on level two data. So maybe you're more refreshed up on on the the exact
[47:17] filtering uh steps in the in the different levels, but for level 1B, which is what the demo the upcoming demo
[47:24] will focus on. I believe there's no filtering. It's up to us essentially to apply the filters. Um so there's no
[47:34] pre-filtering when you when you you know request the data. All of it will come back. Um but then there are two
[47:40] different quality flags which we'll learn to use and and then those will help with um with the removal of observations that
[47:54] may that may be um contaminated from clouds. Sometimes you also see a canopy height that is unusually high. So you see our H
[48:10] 95 that's like 200 m and that's might be an indication that that's an area with clouds. So one simple thing that you can
[48:20] do is to threshold the RH95 and say you know just consider uh shots where our H95 is the the
[48:31] maximum canopy height in your study area. Then you would exclude buildings as well. So, I'm assuming we're interested
[48:43] in in vegetation and and land cover, but not buildings. That's a great point. How can Jedi be used to estimate or
[48:57] identify deforestation? So Jedi can be used to Jedi can, you know, tell us about the presence of of trees
[49:11] or lack thereof, right? By by the the waveform, you know, returns that that we see. And so if if we only see actually
[49:22] and in in one of the examples I gave um we saw a very you know a sparse area
[49:31] which I think was mostly grass with a few shrubs that all there was in the in the waveform signal was a single ground
[49:37] return right and so that's an indication that there's no forest right when when the the you know when there's no
[49:46] amplitude above the noise threshold um for above the ground return. Question eight, are there some types of
[49:59] forest that Jedi is not able to fully penetrate and thus not reaching the ground? If so, how is that detected and
[50:06] how is the structure analyzed? Great question. Um so tropical forests are the type of forest that are most where
[50:17] this where this happens most most often right where there's such a dense canopy and understory that it is possible that
[50:25] some of that that none of the energy of the laser pulse reaches the ground. And in that case the
[50:35] the level two algorithms I believe that are applied and we will follow up just to provide more details on this but
[50:43] essentially like I said there's six algorithms that are um part of the standard Jedi processing pipeline that
[50:50] their job is to identify where the ground is. And so there's a number of different ways that we could like
[50:56] identify cases like this um where there is no ground return identified. And one of the ways is by looking at these six
[51:04] different ground algorithms. And if there's greater than 2 meters disparity between them in terms of their calculation of where the ground is
[51:13] relative to the reference geoid, then that will that will be um a a flag, right? And and and
[51:22] excluded uh as from from the in the in the quality filtering. So, for now, maybe we can go into the
[51:34] demos and then we'll have a second Q&A session after the demos. Um, and we'll do our best to address as many questions
[51:40] there and then those that aren't addressed, we will answer all of them and post the Q&A document on the course
[51:48] website. We are now starting section three which focuses on practical forest ecosystem applications with Jedi full waveform data.
[52:08] Exercise one has two objectives. First to enable participants to access, filter and visualize Jedi level 1B full
[52:17] waveform data using NASA Earth data application programming interfaces and two to teach interpretation of waveform characteristics for vegetation
[52:27] structure analysis. In this hands-on demo, we will start by authenticating with NASA Earth data login credentials. Hopefully everyone has their Earth data
[52:43] account already set up. And then we will search for Jedi level 1B granules using the Earth Access
[52:51] Python library. We will download Jedi data for the specified area of interest. Apply quality assurance filtering using the
[53:01] quality flag and the degrade flag fields. So there's two different fields that we'll be searching for. Then we
[53:07] will plot raw waveforms for multiple footprints. footprints. We will identify and interpret ground return signals versus canopy returns.
[53:16] And we will analyze waveform morphology to assess vegetation vertical structure. This will be over the same region that
[53:24] we saw in the slides that have been presented presented which is focused on bankhead national forest Alabama in the USA.
[53:35] The default latitude and longitude bounding box can be changed to your own area of interest if you clone the GitHub
[53:42] repository and modify your local copy of the uh Google Collab uh notebook. So for this demo, we will be using the
[53:53] default AOI but I encourage you all to modify to your own area of interest either now or in the future. um with
[54:03] with the code we will focus on the entire set of observations collected to date from the Jedi mission starting uh
[54:12] in April 2019 all the way to up and through through October 22nd of this year. All right, let's get right into
[54:23] the Python notebook. Now, I'm going to walk you through a Python notebook for processing NASA's Jedi level 1B full waveform LAR data. As
[54:39] a reminder, Jedi collects detailed 3D information about Earth's forests and topography from the International Space Station. So
[54:48] this notebook demonstrates how to search for, download, quality filter, and visualize visualize the Jedi level 1B waveform data for a
[54:59] specific area of interest. This is the readme file for the repository. repository. and we will go ahead and and it it does
[55:13] list all the steps of setup but we will just walk through each of these steps um together in the Google Collab
[55:22] environment. So we will just click on this button here on the top of the readme file. This will bring us to the
[55:34] Python notebook shown here. We'll start with step one, which is to clone the GitHub repository. And this
[55:44] will allow you to access this notebook and any supplemental files with this step. So, we'll press play here. That's
[55:53] allows the cell to run. You can just click uh run anyway from for the warning because it was not a the script wasn't
[56:03] authored by Google and and This is what the output would look like. Once it says 100% done,
[56:13] we can go into the next cell here which involves installing the required libraries. libraries. So there's a few necessary Python
[56:23] libraries. We will use pip to do that. So, Earth access is a library that we are using for authenticating with NASA
[56:35] and searching the data archive. H5PI is used for reading Jedi's HDF5 file format. Geopandas's Geopandas's library is used for spatial data
[56:50] operations. operations. Mattplot lib and seaborn are both used for creating visualizations. And then finally, Folium is used for interactive
[57:01] mapping. So let's see how we're doing here. Once we see at the bottom of the output that all libraries were imported
[57:13] successfully, we can move on to the next step which is to mount your Google Drive. Drive. We can run that cell.
[57:24] And in order to do this, you need to be signed into a Google Drive account or have an account that you can sign into
[57:32] where you will connect to Google Drive and choose the account that you want to use. Pressing continue. You might have
[57:41] to do this twice. That happened for me uh during one of my installation setups. It will run for a bit. When it that's
[57:49] done successfully, it'll say mounted at and then it'll say content drive. In this next part, we will authenticate
[58:02] with NASA Earth Data. You'll need to enter your credentials when prompted. And again, these are free and can be
[58:11] obtained from earthdata.mnasa.gov. And actually before I run the cell, I also just want to highlight in the code
[58:18] here that we are using the default AOI which uh the area of interest is in William Bankad National Forest and the
[58:29] surrounding area in Alabama. If you would like during this demo, either now or there will be time after
[58:40] we go through this first uh default AOI example to update this bounding box. Note that there's um then you will be
[58:50] able to do that. And note that there are four coordinates that you need to enter here to change from the default to
[58:57] whatever area of interest that you want. And so what you would need to enter is the minimum longitude,
[59:05] the minimum latitude, the maximum longitude and the maximum latitude of your area of interest separated by commas.
[59:14] commas. So I'm going to go ahead and run this cell where you'll see that we are prompted to enter
[59:25] our Earth Data login username and password. And once that happens, the rest of the cell will run.
[59:42] I'll also point out that we have a temporal range defined here as you know all available Jedi data uh available to
[59:50] date. And then the search for the data starts by focusing only on full power beams and this is
[1:00:05] to increase the chance of having high quality data. So you in the data with when we apply the filtering uh that we
[1:00:17] apply a lot of the data from coverage beam lasers will gets removed. And so we want to
[1:00:28] just focus on the power beam for now. And so what this function does is the search Jedi level 1B function um takes
[1:00:41] the input bounding box that we provided the temporal range of the of the data that we are wanting to search for and
[1:00:50] then also a maximum results list just to uh put a cap on how much processing time we're going to take to retrieve some of
[1:00:59] these data. Once those files are uh returned, there is a step of extracting the data. And so
[1:01:11] we will go ahead and just look at the output here um in the interest of time. This is what the the top of the output
[1:01:30] um looks like where we can see our longitude and latitude range and uh the focus on just the power beams
[1:01:45] which are listed here. Here are the granules that were retrieved. It was a again a maximum of
[1:01:53] 20 that were searched for for this time. Um and for this code for the purposes of the demonstration
[1:02:01] I it will stop at the first granle that has has some quality data. So if if this first
[1:02:15] granle um which is this is the name the full the full name of the file here the hdf file.
[1:02:25] Um but if this were to have no data then the code would automatically try a the next file down on the list.
[1:02:37] And this can take a little while the queueing um well the specifically the processing step of processing the data
[1:02:44] because each each file can be several gigabytes. So so in this case the HDF 5 file that we're looking at is 4.19
[1:02:55] gigabytes. So each one takes a while to process. And for the purposes of this demo, there were several files on this
[1:03:03] list that that didn't um pass the quality flag filtering and didn't have quality data and were were skipped. And
[1:03:11] so I wrote something into the code that if it's the specific bounding box that we're using for the demo, it will skip
[1:03:18] straight to this fifth file on the list. So for those who might be pay paying close attention to the code might have
[1:03:25] noticed that I just wanted to say that in general if you put a different area of interest it will go in order um file
[1:03:33] by file until it finds one with at least some quality data to analyze further. Here is a summary of each of the beams.
[1:03:46] how many uh shots were retained after the quality filtering step. And as you can see here, all in all of these uh
[1:03:57] full power beams, 100% of the data were retained. So overall, we have 335 shots across all beams.
[1:04:09] This section of the notebook generates four different visualizations. So plot one shows is the shot locations map. This shows where each Jedi shot
[1:04:23] landed landed colorcoded by elevation using a terrain color scheme. This helps us understand the topographic variation in our study
[1:04:33] area. area. Plot two to the right here shows an elevation histogram. So this displays the distribution of
[1:04:44] elevations. The shape tells us about the local topography. A narrow peak suggests flat terrain while a broad distribution
[1:04:53] indicates varied terrain. And as we can see here, most of our shots fall within 250 and 300 m of elevation. So that's a
[1:05:04] pretty narrow range. Plot three shows shots per beam. This is a bar chart where it indicates data availability
[1:05:18] across the full power beams. So an uneven distribution is normal due to Jedi's orbital geometry and data
[1:05:26] quality. And then finally we can see a pie chart here which is the processing results pie chart summarizing how many
[1:05:35] files were tried and their outcomes. successful, no spatial data or no quality data. And as I mentioned before,
[1:05:42] uh many files have uh don't have 100% quality data, but for the purposes of this demo, I'm using an
[1:05:51] example that does. Moving on to level 1B waveform visualization. We will first produce an interactive map where you will be able to
[1:06:10] look at the AOI boundary, zoom in and pan around the study area and then click on individual and click on individual
[1:06:19] points to see shot details. You'll also be able to distinguish between different beams by color and then understand the spatial patterns of
[1:06:28] Jedi coverage. So let's go ahead and run this cell. So it will take a little while to run
[1:06:37] and our output will be shown down here. First we see a quick summary of the uh user configuration.
[1:06:53] I'll note that there is a function that is called select shots by elevation deviation deviation and in this code segment and this
[1:07:08] function selects shots based on standard deviations from mean elevation. that allows the user to define different standard deviation values that
[1:07:22] you'd like to focus on in the plots. So there's just 10 shots of the 335 in this
[1:07:29] case total shots that are going to be plotted. And so which of those 10 shots are plotted is up to the user to define
[1:07:36] as uh based on what elevation they they would like to focus on. in the default of the code is currently written here.
[1:07:48] I'll just show that we have negative0.5 standard deviations. So in other words, the 10 shots that we're that we're
[1:07:59] plotting um in the wave the in the waveforms will be will have slightly lower than average elevation among the
[1:08:08] 335 shots total that of of that were extracted from the HDF file. So here we can see the interactive map
[1:08:23] where The lowest elevation shots are shown in dark blue and blue. And the medium to high elevation shots are shown in green
[1:08:39] and red. And as I mentioned, we're showing slightly lower than average elevation shots. These 10 shots highlighted on the map. And all of those
[1:08:52] are in the blue um colored is well are in the blue c category but are highlighted in yellow so that we can see
[1:09:01] uh spatially where each of these uh coincide into. And then we can pan in and out whatever zoom level you'd like.
[1:09:17] And let's let's look into an example that the same example that we saw from one of the slides in the presentation
[1:09:31] which is shot two where you can see by zooming in I believe this is the maximum zoom level that that's allowed uh here
[1:09:39] on this on this map but we can see that basically this is a pretty sparse area. Um, there aren't any trees within this
[1:09:47] shot and there's what looks like either grass or small shrubs um in this footprint. footprint. So now let's take a look at the waveform
[1:09:58] that corresponds to this particular footprint that's highlighted. And in order to do that, what we'll we'll need to put the cursor inside of
[1:10:09] this cell and then scroll down to see the plots below. So these are the 10 different plots
[1:10:18] that were selected again as a as a based on the standard deviation that we put in. and they're numbered here um where
[1:10:27] we have plot number one corresponding to the footprint one and footprint two is the one that we zoomed in on above here
[1:10:37] in the map which has a lot of bare ground and very short vegetation and grass which basically shows up as looks like a
[1:10:49] single single ground return without any with very minimal minimal uh indication of above ground vegetation. vegetation. On the other hand, we can see this
[1:11:02] waveform to the right or also we could look at to the left. Let's look at both of these. So, shot number three to the
[1:11:09] right is showing a ground return. Looks like a pretty clear ground return here. And then some evidence of above
[1:11:18] ground vegetation with most of the waveform amplitude um right above the ground return but then some um non noise uh return of the
[1:11:34] waveform returns of the waveform appear um a bit higher higher up in in elevation from that initial uh second
[1:11:42] pulse. So let's take a look here on the map map of for looking for footprint three. So if we
[1:12:00] zoom out here and look into footprint three and again if we click on the footprint we can see
[1:12:12] some of the information about the beam and shot number as well as the elevation, latitude, longitude and So what we can see from the base map
[1:12:29] is it looks like there are some healthy trees within this footprint, footprint, which makes sense given that we saw
[1:12:39] above ground returns. And if we zoom out a little bit, you can see that darker shades shades uh in the surrounding neighboring area
[1:12:54] looks uh could be evidence of beetle infestation. And and we know from colleagues uh that we that we
[1:13:02] collaborate with who study these regions um that these beetle infestations the south pine beetle have been uh very
[1:13:10] prevalent in recent years in these forests. So if we zoom out again and this time look into
[1:13:23] waveform number one. We can see that there that the forest does begin right after two. Right? There's looks like there's an edge here
[1:13:36] where there's more of a thickly dense canopy. And by this first footprint here uh or footprint number one here,
[1:13:50] we can guess that there will be at least some um above ground vegetation vegetation returns. And like I mentioned in the
[1:14:05] presentation, we want to be wary and cognizant of the fact that the base map that's used here is
[1:14:17] from the EZRI world view um satellite imagery composite which comes from different dates and based on you know
[1:14:28] best optimal cloud-free acquisitions and is kind of stitched together that way. And so we don't have a way of
[1:14:36] knowing exactly, at least not with the script written here, um what the temporal difference is between what we
[1:14:44] can see on the base map versus what when the the Jedi waveform um was plotted, which as you can see from the file name,
[1:14:53] 2019 was the year that was plotted. And then this is the Julian date. So here we see waveform footprint one
[1:15:08] where there's a clear ground return and also indication of above ground vegetation vegetation that has as shown by the kind of
[1:15:22] multiple peaks of higher elevation um returns that are above the the waveform or above the ground return
[1:15:31] rather. rather. and below the kind of remaining noise of the signal past around 210 m or so.
[1:15:44] So, we looked at a couple of different waveform plots and their corresponding locations on the map here.
[1:15:57] I would encourage you to go back into the code and modify the standard deviation that you use to select the 10
[1:16:10] waveforms that you'd like to plot. So for this example, I'm going to increase this to two standard deviations
[1:16:22] above the mean. And then press and then run run the cell. And rerunning this cell is going to
[1:16:33] produce a different set of results that we'll take a look at. It will take a little bit to rerun.
[1:16:53] I will I would like to say that for those of you looking at areas of interest that are different than this
[1:17:00] default AOI, you might notice that changing the elevation, especially if it's um high higher elevation shots, these might be
[1:17:12] areas that are these might be more noisy or um more noisy shots or shots that waveforms are or maybe more difficult to
[1:17:23] interpret. interpret. In this case, there's some elevational gradient but not not a ton. So with the 10 different examples that we're looking
[1:17:36] at here, if we scroll down again to the 10 10 waveforms, we can see that in all of
[1:17:46] these cases, there seems to be a clear ground return except um for this one, which I believe was the same example I
[1:17:53] provided in the slides. And in areas that have even more complex topography than the area that we're looking at
[1:18:02] here, I would anticipate higher elevation areas to be associated with waveforms that are, you know, challenging to interpret such as such as
[1:18:12] this one. And so for now, in the interest of time, I will conclude this demo. Um but please
[1:18:24] feel free to note any questions that you have and share any ideas for um future improvements uh with the code
[1:18:36] and yeah so all your your feedback is is always welcome and with that I will pass to Nara to
[1:18:46] look and to walk us through exercise two. Thank you, Savannah. So, we are going to do an exercise
[1:19:01] processing Jedai level 2A data sets uh using the NASA harmony tool and our goal is to display relative height metrics
[1:19:14] for vegetation structure analysis. And uh the basic steps are to to order the data sets to do a spatial subsetting
[1:19:26] and then we're going to import the results into a Google Collab notebook. We're going to do some filtering based
[1:19:34] on existing quality metrics and then display in QGIS. So, uh, we're going to get started by looking at the the repo and opening the
[1:19:46] collab notebook. So, let's get started. We start by navigating to the veg mapper repo. And when you get there, let's go to the
[1:20:05] Jedai folder. That's where the routines for processing Jedai data sets are located. So we click here and we want to use the Jedi L2A_rset.
[1:20:21] So we click on this notebook and you it should have a button that says open and collab.
[1:20:31] And if you are not signed into Google at this moment, it will prompt you to sign for for Google using your Google
[1:20:40] account. So once you get in the Google Collab notebook, the first thing to do is to install the packages and the
[1:21:03] dependencies. dependencies. So we're just going to run these two cells without changing the inputs. And it will take a minute. Um, but
[1:21:17] Google Collab has already many of the libraries that we need and we don't need to install them.
[1:21:24] So let's wait a minute. You can disregard the error messages here. And let's just move to the next
[1:21:40] cell where we import the packages that we need. And the main one to keep in mind is the harmony package which gives
[1:21:49] us an API to connect to the NASA deck and request the spatial subsetting of the Jedi orbits. Uh these are really
[1:21:59] large files. So we're trying to do the spatial subsetting in the cloud and so we just download the smaller files.
[1:22:10] Now we need to authenticate with Earth Data. If you haven't signed up for Earth Data, you can do it. It's free. So, I'm
[1:22:18] going to put my credentials here. And if your credentials are up to date, it will give you a a green check mark.
[1:22:36] Then the next thing to do is to upload my area of interest. And I'm using a gojson file which I'm going to import
[1:22:45] here into this area. So I'm going my local files and importing into you just drag the file into
[1:23:03] collaboratory. collaboratory. And now when we press play, it's going to request the path to this file. And
[1:23:12] you can click on those three dots here, copy the path, and then paste here. So essentially, it's in a folder called
[1:23:22] content, and this is the the file name. So So check make sure that the gojson is correct. you might have an issue if your
[1:23:35] uh shape file or for your gojson has too many vertices in which case you have to simplify it. But what we have is just a
[1:23:43] square. So it um it was accepted with no issues. I can show you briefly where the site is and how big this area is.
[1:24:01] This is Brazil and the site that we're working with is in the Atlantic rainforest in the southeast part of the
[1:24:08] country. And I picked this site because it has a very nice variability and structural signatures that will help us
[1:24:17] gain an intuition for what the the relative height metrics are giving us. So you have here some water, some forest
[1:24:26] fragments. We also have some agriculture here and some urban areas and we have a ton of bare ground. So the expectation
[1:24:35] here is that the top height is going to show us the differences between forest fragments tall versus short and also
[1:24:44] between forest fragments and the farms. So for step four, we're going to define the date range for the subsetting
[1:25:02] and uh we're also going to define where we want to save the results. So for run this cell,
[1:25:10] I'm going to put the entire range of Jedi observations observations from 2019 to the present day. And I'm going to define a folder to save
[1:25:32] my results. So I just want to save here in this content folder. So again I go to
[1:25:39] the three dots. I copy my path and paste it here. So that's where the files are going to
[1:25:49] be saved. Next step I'm calling the harmony client. client. And for this size of area of interest is
[1:25:59] going to take about 10 minutes. And in the interest of time, I'm going to bring the resulting files here. But uh when
[1:26:09] you run yourselves, please wait 10 minutes and you you're going to see the files being generated. So for step six, we are just saving the
[1:26:30] file. And because I already have my file, I'm not going to run this cell. But if you run the harmony cell and you
[1:26:39] wait the 10 minutes, you have a file there. And you can you can run the cell to save the files in your folder. And
[1:26:47] it's going to look like this. You're going to have a text file. And if I open it,
[1:26:52] it, it doesn't have the Jedai data sets themselves. Those are just links and each one of them is a file in H5 format.
[1:27:04] So for the next step, we're going to define how we're going to further filter these files and I'm going to use some
[1:27:13] criteria that are commonly applied to this level 2A data set. So if I run this, one of the criteria
[1:27:24] that's commonly used is the sensitivity. And the sensitivity is the maximum canopy cover through which the lighter
[1:27:31] can detect the ground with 90% probability. So because I'm working in a forest, a tropical forest, I'm going to
[1:27:40] set this to.9. And then the minimum RH 95 value. This is if you want to for example exclude
[1:27:50] areas where you have a canopy a height equals zero. So I usually put one and then two or false. Do you want night
[1:28:00] only? Uh I'm doing false just to get as many shots as possible. But uh one way of getting data sets with more signal to
[1:28:10] noise ratio is to select night only. But for now I'm just going to put false. So we will get shots from daytime and
[1:28:19] nighttime. nighttime. So I selected my inputs and then they got checked here and we can go to the
[1:28:27] next step. So now we are running the main function that does all the filtering. It's going to download all the H5 files from the
[1:28:40] file list and uh one by one it's going to apply the filtering using the criteria specified on step seven and
[1:28:50] then everything is going to be combined in the end in a single CSV file. So for this cell we don't need to do
[1:28:58] anything. We're just running to get the the function. Okay. So, at this point, we're just running the function and we're just
[1:29:16] going to choose the location of the input file. So to get this file, you just click on the three dots here and
[1:29:25] copy path and then paste in this box. And now we're going to choose where we want to save the resulting CSV file. So
[1:29:36] what I'm going to do is to copy the path for this folder and then add the file name that I want to use.
[1:29:46] So, it's up to you and then it will take about 10 minutes to do the processing. Uh, I do have this
[1:30:07] file generated already. So, what we're going to do is to move to QGS to explore the data. And to get this into QJS, you
[1:30:16] would click on the three dots and download the file. And then we can bring it into QJS as a vector layer. So let's
[1:30:26] do that. So we're going to add this layer to QIS. Just choose a limited text layer. and we just navigate to location of your
[1:30:47] file and Q just will try to find the latitude and longitude columns for you. So it we
[1:30:59] just guessed and it was correct. So just say add and close. So here are my shots. Now I
[1:31:11] want to just change the display to show RH 95. So instead of a single symbol I'm going to have graduated
[1:31:23] symbol based on RH95. And let's change the color here and we click on classify. So this is the range on my data. It goes
[1:31:44] basically from one. Remember we we asked to be to filter out things that are shots that are lower than one. And
[1:31:55] maximum canopy height here is about 24 m. You do have some outliers. Uh that's not uncommon. I would filter out shots
[1:32:06] where our H95 is over 60 m or 80 m depending on your forest. So let's apply. So now looking at this landscape, the
[1:32:22] first thing to notice is that you have somewhat irregular sampling of the landscape, right? You don't have a
[1:32:29] wallto-wall image, but it's still giving you very important and interesting information. information. And you can see here that the
[1:32:40] each one of the dots has a value which has the maximum canopy height for my forest fragment. And the areas of bare
[1:32:50] ground look orange and red as expected because they have lower canopy height and the forested areas have a higher
[1:32:59] value. And you can also see some variation between forest fragments. Some of them are taller than others.
[1:33:10] And And you would need to make some assumptions about the spatial variability in this landscape to be able to to derive
[1:33:22] metrics at the patch size. Right? Because as you can tell here, we're not covering the entire patch.
[1:33:32] This area here is an agricultural zone is a sugar cane. So the height is between 3 3 and 6.2 m which makes sense.
[1:33:46] You have also shots in urban areas. Uh this is an area that with not a lot of buildings
[1:33:53] here. So about 6 m for houses and again the red low values for bare ground. So it's
[1:34:03] always good to have some bare ground as you trying to get used to this data set to get a reality check. But of course
[1:34:12] your base map can have a a temporal uh properties that don't match up with the Jedi shots. So we need to keep that in
[1:34:22] mind as well. And the other thing to keep in mind is that sometimes you you don't have shots
[1:34:32] in the forest. You can almost see like the beam is being interrupted. And this is happening because we filtered them
[1:34:39] out either because sensitivity was low uh or because um you might you might select uh nighttime only and the beam
[1:34:50] was uh was acquired during daytime. So one thing that can be done for each one of your sites is to experiment with
[1:35:01] the filtering variables. And I I know for other modules of this tutorial, this is going to be discussed in more detail.
[1:35:10] So thank you everyone for your attention and I'm available to answer any questions that you might have.
[1:35:18] So with this I'm going to send this back to Savannah and Savannah you can summarize the discussion.
[1:35:27] >> Thank you very much Nara. Now we will move into the summary of session one introduction to full waveformed LAR.
[1:35:40] Let's review the key concepts from part one. First we covered LAR fundamentals. LAR is an active sensor that measures
[1:35:49] distance by timing how long laser pulses take to return. This gives us detailed information about elevation, canopy
[1:35:57] height, and the three-dimensional structure of vegetation. We learned that full waveform LAR, unlike discrete return systems, records
[1:36:05] the complete energy profile of each pulse. This captures the entire vertical distribution of vegetation within Jedi's 25 m diameter footprints, providing much
[1:36:15] richer structural information. The Jedi mission operates from the International Space Station with eight parallel laser tracks. It covers
[1:36:25] latitudes between plus and minus 51.6° and produces both footprint level data at 25 m and grided products at 1
[1:36:35] kilometer resolution which we'll talk more about in the upcoming uh session two. A major focus of today's session
[1:36:44] was relative height metrics. RH95 gives us canopy height. RH50 tells us about understory characteristics and the ratios between these reveal canopy
[1:36:56] layering and structural complexity. These metrics are powerful for distinguishing forest types and land uses. We also discussed important
[1:37:05] limitations. Jedi has about 10 meters of geoloccation uncertainty. The instrument also can't see clouds. It provides discrete sampling rather than
[1:37:16] complete coverage and has limited temporal resolution for any given location. location. Finally, you gained hands-on experience accessing NASA Earth data, downloading
[1:37:26] and filtering Jedi data, and interpreting waveforms to understand vegetation structure. These are the foundational skills you'll build on in
[1:37:36] parts two and three. Looking ahead to part two of this training, you will be able to describe the general
[1:37:42] characteristics, strengths, and limitations of the Jedi mission and its data. Identify Jedi data products and their characteristics for elevation,
[1:37:51] canopy height, vegetation structure, and biomass. Access and visualize Jedi data data sets, including elevation, canopy height, vegetation, structure, and
[1:38:01] biomass for an area of interest using openly available tools. This is a list of resources that were
[1:38:10] cited throughout today's presentation and also could be useful future reading after this session. I'd like to remind everyone that there
[1:38:22] is one homework assignment for this three-part series course and it will open on the day of session three on
[1:38:34] November 6th, 2025. The due date for the homework will be 2 weeks later which is on the 20th of November. You can access
[1:38:45] the homework from the training page and note that your answers must be submitted via the Google forms. If you attend all
[1:38:56] three live webinars and complete the homework assignment by the deadline, you will receive a certificate via email
[1:39:04] about two months after completion of this course. Here is my contact information as well as the contact
[1:39:11] information for Nara Pinto and also linked on this slide is the RSET website and the RSET YouTube channel. With that,
[1:39:20] I thank you all so much for your participation today and look forward to seeing you next session in part two. And
[1:39:28] now we will move in to the second round of Q&A. All right. Thank you all for adding more questions into the document
[1:39:43] here. here. I will start by talking through some of the questions that came up that were specific to the demos
[1:39:54] and we'll see how far we get in the 15 minutes that we have. So let's go with
[1:40:05] part one B. Question one was a question about um how can Jedi level 1B data which is in HDF5
[1:40:18] format be converted into a shape file using code or what is an alternative method to achieve this conversion.
[1:40:28] So So the demo script um does extract the coordinate data and then the attributes from the HDF5 file into a pandas data
[1:40:40] frame. So that's in what what's called result do um_df. And then to convert that to a shape
[1:40:48] file, you can add a few lines of code following the data extraction. Um, and in order to do that, the the
[1:40:57] library we recommend using is GeoPandas. So, you would need to import geo pandas install and import. Um, and then convert
[1:41:08] the pandas data frame to a geod dataf frame. And then this is the code that you could use to export that geo pandas
[1:41:18] uh the geo data frame into a shape file. But that said, I do want to highlight um
[1:41:24] alternative formats that are um vector-based, you know, formats, but um have some advantages um specifically gojson is a great option
[1:41:38] um which is great for web mapping and there's no file size limits. Um the geo package package format
[1:41:50] format has no attribute name length restrictions which shape files do. Um and then and then we also kind of talk about CSV
[1:42:00] as another as another option. So because of the limitations of of shape files, both the the character field name limit
[1:42:07] of 10 characters and having multiple files as opposed to just one, that's one of the key advantages of these other
[1:42:14] alternatives that we're listing here. Um you could consider, you know, replacing the uh the shape file with with one of
[1:42:21] these options. Um Um okay, let's move into question two. Is RH98 available with the level 2B data or
[1:42:36] only with level 2A data? So all RH metrics including 98 are available in level 2A only. Level
[1:42:50] 2B 2B are uh which which the next training actually will will cover more. Right? So this training actually didn't didn't
[1:43:00] discuss level two beta 2B data that that is um canopy cover and vert vertical profile metrics. So basically more
[1:43:11] processing is used on the RH metrics to create derived products such as the plant area index which is essentially
[1:43:20] analogous to leaf area index. I'm not sure if you all are familiar with LIi, but that is um the the area the the leaf
[1:43:29] area plus the woody vegetation, the woody uh biomass area per unit ground area. That's that's the definition. Um and then foliage height
[1:43:40] diversity is always another example of of such derived products in the level 2B. And so so the next session we'll
[1:43:46] we'll discuss more in depth all of these derived products. Um and so the RH metrics though specifically are just the
[1:43:54] level 2A data. Question three, can I do the analysis in a heterogeneous urban environment? So So technically, you know, you can obtain
[1:44:11] data from Jedi over urban areas, right? So the the the NASA APIs will not prevent you from doing this, but there
[1:44:19] are very big uh challenges and important caveats to think about. So Jedi was designed and optimized for vegetated
[1:44:28] ecosystems, ecosystems, particularly forests. Um and so starting with the plus or minus 10 meter geoloccation uncertainty combined with the heterogeneous land
[1:44:40] cover of urban areas means that a Jedi footprint right with a 25 meter diameter footprint might sample a tree, a
[1:44:49] building, a street or a mix of all of these within that that footprint area. So a best practice um which was
[1:44:58] discussed in slide 38 of our training is to filter observations to areas with homogeneous land cover within a 45
[1:45:07] meterish or so diameter. Right? And so that accounts for the 25 meter footprint plus a 20ish meter buffer for
[1:45:15] geoloccation error. And the 10 plus or minus 10 meters comes from kind of the one sigma error. So if you want to be
[1:45:21] more conservative, you know, you can add a slightly larger buffer or you could be, you know, less conservative if you
[1:45:26] want to be able to have smaller kind of uh buffer zones. So, you know, that's up to the individual researcher and
[1:45:34] research project needs. Um, but that's the general rule of thumb, right? So, in urban areas, you would want to apply
[1:45:41] this strict spatial filtering to ensure that these footprints are sampling vegetation only. So, for example, maybe you could study a large park in an urban
[1:45:51] area or a street that has lots of trees and it doesn't have many buildings that are right up against the street, right?
[1:45:59] So, to be able to cover that large of a buffer area and then you could essentially exclude shots near buildings
[1:46:05] and carefully interpret the results um since the waveforms may be contaminated by non-veget returns. So hopefully that explanation
[1:46:16] provides some uh you know is is useful as you as you think about uh urban areas and and just really thinking carefully
[1:46:27] about the caveats before before moving forward with that question four and Nara please chime in uh at any point if if you'd like to add
[1:46:39] on to any of these explanations. So question four is uh uh there looks like there was a
[1:46:54] warning. Um and let's so in my collab environment I'm getting the following dependency conflicts when running the pip install
[1:47:04] code cell. So, PIP's uh dependency resolver does not currently take into account all the packages that are installed. This
[1:47:13] behavior is the source of the following dependency conflicts. So, these dependency conflict warnings are common in collab environments
[1:47:22] and usually your code will be able to run even with these dependency conflicts. Um so if the notebook ran
[1:47:33] successfully then that basically means that the version differences in these in these dependencies won't break functionality and in that case I would
[1:47:42] sec just recommend you can ignore the warnings. Um there are a couple other uh ways to address this. So one is to use
[1:47:51] the is to restart the runtime in collab um and then kind of rerunning the cells from the from the top of the script. So
[1:48:02] this can resolve some issues. Um, and then there's also a way to kind of specify the the versions of of what
[1:48:16] pip install uh what pip in is installing. So, here's an example of of a way to to do that um which I'm
[1:48:24] highlighting here. And then there's also a way to run Yeah, there's also a way to run the pip
[1:48:35] install command with with to specify no dependencies. So that's um d-no- depths flag. So um um and you can do that if you know other
[1:48:50] dependencies are are satisfied. Um so essentially in summary for training purposes if your code and uh your code
[1:49:00] runs and you can authenticate and download Jedi data successfully you can safely proceed despite these warnings. Um they're primarilyformational and
[1:49:08] won't affect the Jedi data processing functions. All right, let's get into question five, which asks, "Why do you think plot six
[1:49:19] in the two standard deviations example had a much more complicated structure than visually similar plots like plot
[1:49:26] one? Is this potentially a factor of slope or likely just a more complex structure underneath the canopy?" So
[1:49:35] this is really interesting question and um and just to kind of elaborate a little bit more about what what I think
[1:49:42] this this first part of the question is is meaning is talking about. Um, the much more complicated structure
[1:49:49] that we saw was was specifically where it was unclear just from visual inspection of that waveform where the ground return was and where
[1:50:02] ended and where the vegetation began, right? And so and then and then it's it's it's great that this that this
[1:50:10] participant, you know, thought of of a couple possibilities as to why this is happening, right? So one one question
[1:50:18] was could it be slope or could it be more complex structure underneath? And the the answer I have is that both
[1:50:23] factors could contribute to this complex waveform structure that you're seeing. So we discussed this on slide 38 where
[1:50:33] slope induced waveform contamination is a known limitation. Um and so you can imagine we have a 25 meter footprint
[1:50:40] right and then if there's a lot of steep topography within that those 25 meters the the the laser pulses will hit the ground at
[1:50:50] different elevations simultaneously distorting the waveform shape and creating multiple peaks. So that could be happening, right? Um and then you but
[1:50:59] you can also think about ways to determine which of these factors is is dominant um by checking the elevation
[1:51:06] bin zero values and examining whether there's a significant kind of terrain variation within the area. And then you
[1:51:14] can also look at the degrade flag for the shot. So if the six ground finding algorithms disagreed significantly so
[1:51:23] more than 2 meters then it would be flagged and might indicate slope contamination. Um that said complex
[1:51:30] waveforms can also genuinely reflect real vertical structural complexity where if we have multiple canopy layers d especially dense understory or
[1:51:41] heterogeneous vegetation in the footprint. So the example on slide 33 showed how the ambiguous waveform um with the multiple peaks can result from
[1:51:52] either terrain effects or actual vegetation complexity. So So if the particular area of the footprint has relatively flat terrain based on a
[1:52:04] digital elevation model that we data set that we could look at then the complex structure is more likely of a of a
[1:52:12] possible reason um why there was real can you know the the real canopy architecture with multiple layers um
[1:52:21] close to the ground could could be happening. happening. Great. So, question six asks, is it possible to access the Jedi data
[1:52:32] and use the functions shown in the exercises using the R software package um our software packages? Is there an
[1:52:40] equivalent of Harmony for R to allow spatial subsitting of the orbits prior to download? So yes, our users can
[1:52:49] access and work with Jedi data using the R Jedi package which was developed by the Jedi science team specifically for
[1:52:57] processing Jedi data in R. This package provides functions to download Jedi data from the LAN processes DAC, read HDF5
[1:53:08] files, extract metrics, and perform spatial and temporal filtering for harmony like spatial subsetting capabilities in R. You could try the
[1:53:19] HARP R package which provides an R interface to NASA's harmony services and should support spatial subsitting of
[1:53:28] Jedi granules before download. And this I I haven't actually you it's been numerous years since I've used R
[1:53:38] for for this kind of functionality with Jedi data. So, I'm not sure, you know, what the up-to-date versions uh look
[1:53:46] like and how what's been developed in in the past couple years. Um, but I think the HARP R should still be working. Um,
[1:53:55] and and and there are also other kind of standard R spatial packages like R HDF5 um for reading HD5 files and SF for
[1:54:05] spatial operations. um and terra for raster operations can also you know be work work well for this.
[1:54:14] >> And one thing to add here is that in addition to the language another thing to keep in mind is if you're running
[1:54:22] this in your local laptop or in the cloud. So one critical step here is to download files from the repository right
[1:54:32] from NASA doc and then you're doing the sub setting and we did this in collab because we wanted to do this in the
[1:54:39] cloud. So you're avoiding downloading very large files into your laptop >> to do the sub setting um or to to do the
[1:54:48] filtering I should say. So Harmony is doing the the sub setting for you. So that's that's another thing to consider.
[1:54:54] And in collab, of course, you can you can implement things in in R as well. So >> yeah.
[1:55:02] >> So we're we're coming close to the top of the hour here. So we'll answer I'll answer question eight. So it looks like
[1:55:08] question seven was a repeat of five. So you can see that explanation which we covered. Question eight. Is there a
[1:55:14] legend planned for the future that explains the colors, line types, and axis labels RH25, RH50, RH75 appear as
[1:55:23] labels, but without any explanation of what they mean. And then uh there's an example here of RH50 equal is is the
[1:55:33] height below which 50% of the reflected energy was received. Median height of vegetation. So that is actually um in my
[1:55:42] explanation here I'm going to address that because that's actually not quite uh correct interpretation of RH50. Um
[1:55:52] so so let's start actually uh just with the overall point you know I think is that for lay people you know and it
[1:55:59] sounds like this this participant is specifically in public health applications um you know just looking at at a graph without much interpretation
[1:56:08] of a waveform is is is not you know there's not inter it's not interpretable and that's I think um you know an
[1:56:16] important point about thinking about how we can make Jedi data and visualizations more accessible to interdisiplinary audiences. So I really appreciate that
[1:56:25] the question and the intention. Um I do want to quickly clarify a distinction that so so the first part here so RH50
[1:56:36] is is the height at which 50% of the cumulative energy return has been received. So that's the height of median
[1:56:43] energy of the waveform not necessarily the median height of vegetation. Just want to clarify that. Um and so and just to further elaborate
[1:56:55] a little bit is it just that the energy distribution reflects complex interactions between laser penetration and canopy density throughout the
[1:57:02] vertical profile. So it's probably related and close to median height but not not exact not exactly and it it
[1:57:12] could it could vary. So the training addresses waveform interpretation through annotated examples that we provided in slides 30
[1:57:23] through 33. Right? So we identif we added interpretations directly onto the figures where we were circling where the
[1:57:29] ground returns were versus where above ground vegetation returns were explaining how with multiple peaks there's likely an understory as well as
[1:57:41] uh you know a canopy height corresponding to one to the the top you know the tallest elevation peak. Um and
[1:57:50] and then we talked about, you know, the cases where there's just a single ground return and how generally that that
[1:57:56] corresponds to areas where there aren't any trees in the footprint or the sparse vegetation or bare ground. Um however
[1:58:03] hard coding these interpretations into the automatic plotting of the code would create issues uh in terms of broad
[1:58:11] applicability and reproducibility across different forest types and conditions and across the different you know standard deviations even right that we
[1:58:18] that we plot. We wanted to make the code flexible and versatile for adjusting the areas of interest, adjusting the um the
[1:58:28] standard deviations that we're using to select which waveforms we wanted to plot. So that's why we kept the demo
[1:58:34] code plotting functions just generalizable and and and basic in terms of the axes that we that we have and and
[1:58:41] not refraining from labeling the waveforms directly. um you know but for other interdisciplinary uses there um developing materials for non- remote
[1:58:56] sensing audiences you know I think would would certainly benefit from adding custom annotations to plots with for
[1:59:03] example Matt plot lib and creating supplementary documentation or you know on on your own you you can you can copy
[1:59:12] this this code from the demo and then modify the code and then the plotting functions to include text boxes that you
[1:59:19] know do explain the key features if that's something that you'd like to do. All right, we are now a few minutes past
[1:59:28] the hour. So, I think that's going to be the last question that we'll answer in real time here, but look for the Q&A
[1:59:36] document where we will fill out answers to all the questions that we receive. And And I just want to thank everyone again for
[1:59:46] your participation and looking forward to seeing you all next week for session two. two. >> Thank you everyone. See you next week.
