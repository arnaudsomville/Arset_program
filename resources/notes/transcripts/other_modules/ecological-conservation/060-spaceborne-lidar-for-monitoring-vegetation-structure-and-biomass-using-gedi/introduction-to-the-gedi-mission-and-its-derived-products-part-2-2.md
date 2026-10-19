# Introduction to the GEDI Mission and its Derived Products Part 2/2

`https://www.youtube.com/watch?v=C8t1isFGWrM` · id 213 · 1:38:39 · module 75 — Spaceborne Lidar for Monitoring Vegetation Structure and Biomass using GEDI

[00:02] Welcome to our training series, Spaceorn LAR for monitoring vegetation structure and biomass using Jedi. My name is Savannah Kulie. I'm a
[00:13] researcher at NASA as Research Center with the Bay Area Environmental Research Institute in Mountain View, California, and I'm a trainer with the ARSET
[00:21] ecological conservation team. There are three parts in this training. In part two today, we'll further introduce the Jedi mission and its data
[00:32] products with a hands-on exercise for accessing and analyzing data from Jedi's level 2B HDF5 files. Part one covered full waveform LAR
[00:44] foundations, and part three will cover estimating biomass change with the OB1 application. Remember that the homework opens on the last day of the training on
[00:56] November 6th, 2025. It is due 2 weeks later on November 20th. A certificate of completion will be awarded to
[01:04] participants who attend all live sessions and complete the homework assignment before the given due date. Let's dive into part two of the series,
[01:14] Introduction to the Jedi Mission and its derived products. We have one guest instructor for part two. Stephanie Himemenz is a research
[01:25] associate with the satellite needs working group management office based out of the National Space Science and Technology Center with NASA Marshall
[01:33] Space Flight Center and the University of Alabama in Huntsville Earth System Science Center. Additional support for this training
[01:41] came from NASA Earthrise, an Earth action program at Marshall Space Flight Center. I would like to acknowledge our fellow
[01:51] colleagues at NASA Earthrise who supported the development of this training. training. There are three learning objectives for
[02:01] this session. By the end of the session, participants will be able to first identify the general characteristics, strengths, and
[02:09] limitations of the Jedi mission and its data. data. Second, identify Jedi data products and their characteristics for elevation,
[02:17] canopy height, vegetation structure, and biomass estimation. Third, access and visualize Jedi elevation, height, vegetation structure, and biomass data sets for an area of
[02:31] interest using openly available tools. If you have questions during today's training, you can put them in the Q&A
[02:40] box within WebEx at any time. At the end of the training, we will address as many questions as we can and we will post
[02:48] these questions and written answers to the training page within a week after the training. With that, I will pass to Stephanie.
[03:02] All right. And with that, let's dive into section one, which reviews what the Jedi mission is and how its data for
[03:09] ecosystem structure can be used. Jedi is a joint project between the University of Maryland and NASA Gddard
[03:17] Space Flight Center and is a NASA ventures instrument housed aboard the International Space Station. The sensor produces highresolution laser ranging
[03:26] observations of three-dimensional structures on Earth's surface. The use of near infrared wavelength and SC the science team's waveform processing
[03:35] algorithms enable Jedi to optimally capture detail in the structure and density of vegetation. The mission was launched in 2018 and
[03:45] began collecting data from April 2019 through March 2023. But from March 2023 to April 2024, the instrument went went
[03:55] into hibernation but has since returned. Return of the Jedi um and will collect data through this decade.
[04:05] So the purpose of this mission is to assess the current state of Earth's forest structure. From these
[04:12] measurements, models can be tested to observe how forest dynamics have changed historically and predict how they may
[04:19] change over time. From each Jedi sample or observation, we gain a better understanding of how ecosystems are
[04:27] structured. um dynamically. These novel perspectives of ecosystem structure can better inform the status of habitat quality and other biodiversity
[04:36] indicators when combining the data with other ecosystem information. Jedi not only observes forests, but it can summarize topography below vegetated
[04:47] canopies, track surface deformation, assess continental and coastal water resources, and even predict weather impacts. Jedi can inform humanto
[04:57] landscape interactions such as when managing ecosystems, modeling fires, and assessing the carbon cycle with its data. data. So, the next few slides will offer a
[05:09] brief overview of possible applications of Jedi data. Biomass estimations are essential for quantifying carbon storage and fluxes in terrestrial ecosystems.
[05:20] Information on biomass can inform models of the carbon cycle by constraining estimates of carbon sources and sinks.
[05:27] Improved models enable more accurate assessments of how forests contribute to climate regulation. Biomass can be modeled from Jedi's data
[05:36] since it captures vegetation height and structure. Jedi's biomass in estimations at the footprint and grided scales provide high resolution and globally
[05:46] consistent measurements to track global carbon budgets. Jedi's height metrics and its ability to measure structural complexity make it
[05:55] possible to assess dynamics in vegetation strata, ages, types, in competition, etc. as shown in the leftmost image. From this more in-depth
[06:06] understanding of vegetation, professionals can better inform their efforts in conservation, restoration, habitat modeling, and fire management. An example data flow in the rightmost
[06:18] figure demonstrates how local measurements are matched to landscape scale measurements like those from Jedi or other remote sensing satellitebased
[06:26] sources. Integrating data at this scale over time enables greater spatial extent to monitor fuels or vegetation regrowth
[06:35] or ecosystem disturbances. Jedi data provide detailed measurements of the canopy structure and ground elevation which enhance land surface
[06:46] models used in weather prediction by improving the representation of vegetation height, density, and distribution. Jedi data can help refine
[06:55] simulations of surface energy balance, evapo transpiration, and even wind dynamics. Each of these are diversely influenced by different ecosystem
[07:05] structures. structures. These atmospheric effects are key processes influencing local and regional atmospheric conditions. Lidar in general is commonly used to
[07:16] monitor water volume changes, wetland water levels, river reach slopes, stages or discharge across inland water surfaces or coastal regions. Jedi can
[07:27] support these same hydraological analyses with its subcometer sampling of elevation, including that of water, and water under highly vegetated areas such
[07:37] as in mangrove forests. Accurate elevation data, including those beneath vegetation, are essential for mapping topography and detecting surface
[07:47] deformation, such as in landslides or subsidance. Understanding elevation and slope changes, especially below forest canopies, can be crucial for disaster
[07:56] risk management, such as when managing and responding to flooding, fire spread, or landslides. By capturing precise ground elevations
[08:05] even in densely forested areas, Jedi enhances elevation modeling across diverse land cover types. So the mission specifications could
[08:15] potentially impact your ability to apply its data products for your study area. This is a reference table for
[08:22] recognizing systematic considerations which may impact data availability. Given that Jedi is on the International Space Station, it only samples between
[08:32] 51.6° 51.6° north and south, leaving out the far southern and northern study areas or regions of the globe, which are actually
[08:40] shaded in blue gray on the map below. It is important to recognize the sampling density of the sensor itself, where each
[08:47] of the eight beams lie 600 m apart, and each sample or footprint is located 60 m from the other within beam.
[08:57] Temporal availability is important as well. Though samples may be available spatially, available records only fall between April 2019 to March 2023 and
[09:08] then again from April 2024 until now. Where data is available, the resolution and geoloccation accuracy may be a big
[09:16] contender in how representative that data is of your desired application. Updated versioning and improved data products such as fusing Jedi with other
[09:26] full coverage data sets like optical or SAR can improve accuracies but may change resolutions. The 25 meter
[09:34] footprints are valuable for their higher resolution and customizability while the 1 kilometer or more grids and fused
[09:41] products may provide more reliable information for landscape scale studies. Spaceorn LAR is an incredible novel technology advancing the field of LAR uh
[09:54] which has been a common and trusted remote sensing technique used to manage and monitor land and re water resources
[10:01] across available LAR systems whether free and open source or commercial. There are several major differences and/or trade-offs. As shown in the
[10:10] figure, various methods for measuring vegetation with LAR or field studies occur at different spatial sampling patterns as shown on the bottom or
[10:19] sampling resolutions as shown in the middle and by the size of the beams which are part in part dictated by the
[10:25] LAR system itself as you can visualize by the altitude of the sensors. As with many applications, some of the
[10:33] most trusted data are with field plots or humanled observation. While highly accurate, field surveys can be costly
[10:39] and timeconuming, involving a lot of manual input. Because of this, these campaigns tend to cover small areas and
[10:46] are collected inconsistently, making it difficult to pair timely, relevant data with other remote sensing products. Terrestrial LAR systems or TLS are
[10:57] similarly reliable since they are placed on the ground in location. TLS can be costly uh costly instruments um and
[11:06] require specialized software, computation, storage or skills to process and interpret the results. While quicker and incredibly detailed, repeat
[11:15] coverage can also be costly. Airborne LAR systems like NASA Elvis uh which is the land vegetation and ice
[11:23] system based out of the NASA Jet Propulsion Laboratory um can be used to calibrate and validate spaceorn LAR
[11:29] missions like the ISATs and Jedi because they cover large areas while collecting high density and accurate observations.
[11:37] Unmanned aerial vehicles like drones are similarly flexible. Greater spatial coverage can promote increased frequency of observation and coverage when funded,
[11:47] yet also require specialized software, computation, storage, and skills to process and interpret large amounts of data. data. Space-based LAR, though a great
[11:57] technological feat, introduce trade-offs in accuracy and resolution compared to airborne, UAV, terrestrial LAR, and field plot data. The density of the data
[12:07] may vary though repake coverage over a particular landscape globally is highly advantageous. advantageous. While NASA works to improve accuracy,
[12:16] accessibility and ease user skills to interpret the data, the ISAT missions and Jedi remain free and open source on
[12:23] public repositories. Many field inventory plots or other field data plots were used to derive Jedi metrics based on alometric
[12:33] equations that relate what is observed and measured on the ground with what Jedi and other remote sensors capture.
[12:39] The field inventory and analysis plots can also be used for local calibration or validating results. NASA has committed the past few decades
[12:50] to advancing space-based LAR systems. Here are the Earth observing satellites collecting LAR perspectives of Earth from ISAT to ISAT 2 to Jedi and the
[13:01] Future Edge and STV missions. Earth observing LAR capabilities have undergone multiple iterations across time, starting with full waveform
[13:10] observations over predominantly water and ice landscapes. Full waveform LAR was then adapted to measure vegetation with increased
[13:19] density and resolution. A photon counting LAR for ice, water, and terrestrial area with ISAD 2 also greatly improved the spatial resolution.
[13:30] Features from each of these systems have contributed to the design of future missions like Edge, who will increase
[13:36] sampling density with additional beams and swath mapping for improved change detection capabilities and repeat coverage. coverage. Now, let's dive into section two to
[13:47] overview Jedi's data products, including the waveform metrics and estimations and derived products for vegetation structure and biomass.
[13:56] When Jedi samples data, which occurs millions of times per week, several data products can be derived. The samples are collected as received
[14:06] waveforms which are geoloccated to Earth's surface and presented as the level 1B product. These waveforms capture the height structure of the
[14:15] surface features within the waveform. Several algorithms that are developed by the Jedi Science team make sense of the
[14:21] waveform shape and its intensity based on its geographic location, the land cover type, and more to generate each of
[14:28] the other data products. These interpretations result in elevation and height data sets for bare earth elevation, top canopy height, and
[14:37] relative heights across the vertical profile as found in the level 2A product which are footprints. Level three and the other derived
[14:46] products aggregate and reformat those elevation and height metrics at different resolutions and with certain quality checks applied. Additional
[14:55] measured variables for vegetation structure include canopy cover, plant area index, plant area volume density, and foliage height diversity in the
[15:03] level 2B footprint data set. The waveform structural complexity index in level 4 captures the complexity of the
[15:11] canopy within the entire LAR waveform return. Several of these metrics are total summaries or they are calculated
[15:18] across the vertical profile along the height of the surface feature. From these different types of metrics, biomass can then be modeled, either the
[15:27] density or the total biomass with associated uncertainty metrics that are included in Jedi's level 4A footprint and level 4B or other derived biomass
[15:37] data products. The footprint level data sets are publicly available as HDF5 files. But what is an HDF file? These files
[15:48] organize data sets of multiple formats into hierarchies or groups along assoc alongside their associated metadata. The root group stores all data within
[15:58] the file under which additional groups are housed. The groups direct to several stored data sets of metrics and metadata
[16:05] for each observation. An example of the fire file. Oh my god. Okay, let me repeat that. An example of
[16:14] the file structure is shown on the right. The level 1B waveform, level 2 A heights, level 2B structure, level 4 A
[16:23] biomass, and level 4 C waveform structural complexity index are accessible as HDF5 formats. To date, opening and handling the HDF5 files,
[16:34] including converting from HDF5 to say CSV, shape file or array, requires either using coding solutions in Python,
[16:42] R or in Google Earth Engine. Um, and there are some non-coding oriented existing tools with great visualization
[16:50] capabilities with some limitations to data sets available over a certain study area with some size constraints. And by
[16:58] the way, the Google Earth Engine Jedi footprints are formatted into monthly raers, which is a bit more convenient to
[17:03] use. When managing the HDF5 file itself, knowing this file structure will be really important for opening, subsetting, and visualizing the data
[17:14] themselves. Each product has a unique setup. So, the data dictionaries and specific path names become particularly important when working with a file. Beam
[17:24] XXX indicates that the same groups of data sets are hosted eight times, meaning that they were collected and
[17:31] stored separately by for each beam. For example, if you want to find the latitude of the lowest mode of the
[17:39] waveform, you'll need to follow the path from the root group down to the data set. So if you're working with the root
[17:46] group, which it would be, for example, Jedi level 2A, you'll have to navigate to one of the beams, say beam 1000, then
[17:55] go to the geoloccation group where the latitude lowest mode group is housed and all of the data values um for each
[18:04] observation are there. If you wanted to get lat lowest mode for all of the beams, you'd have to select and go
[18:10] through this process eight times. Note that programs like ArcGIS or QGIS cannot read the Jedi HDF5 files
[18:19] directly. So they will need to be opened or transformed by alternative methods which we can talk about later in this
[18:27] section. section. So all the other data products are provided in a more familiar geotiff format. This includes the level three,
[18:35] level 4B and all the other grided or derived products. These however may have predetermined quality filters and be at
[18:43] lower resolution um but could be more accessible and applicable to larger scale studies. Each product will include some
[18:55] combination of the listed conventions for identification and definition that could be with a particular time period, version number, spatial resolution or
[19:04] instrument as listed on the slide. For the rest of this section, we will share Jedi products reference tables
[19:13] with important information for choosing a Jedi data product to work with. For more detailed information on each of
[19:19] these products, I encourage you to review the linked reference flyers. So, the waveforms, as we detailed in
[19:26] part one, are the basis for all of the other Jedi metrics and estimations. The original transmitted and received
[19:33] waveform data which are shown as TX and RX and not publicly available are geoloccated to Earth's surface and made
[19:41] available as a level 1B product. We went over how to access this in part one. Level 2A is the next product level built
[19:50] from those geoloccated waveforms. It includes data for the detected ground elevation, top canopy height, and relative heights along the vertical
[19:58] profile. That's RH0 to 100 uh from interpreting the waveform itself with the level 2A processing algorithms. The level three grided surface metrics
[20:10] pictured on the bottom here offers a grided approach to the elevation and height metrics in TIFF image format
[20:16] rather than as footprints within the 1 kilmter by 1 km grids. Globally, the Jedi data footprint counts are recorded
[20:23] within each grid to calculate the mean canopy height, specifically with RH100, and the mean ground elevation along with
[20:31] the standard deviations for each. The calculated elevation and height variables are produced for a set of five
[20:37] different time periods of the mission in order to incorporate more of the footprint level data that's been
[20:43] accumulated as the mission continues. Now a lot of the other gritted um products and derived products follow a
[20:50] similar method of aggregating over different time periods to generate those data sets. Level 2B is also based on the
[21:00] geoloccated waveform as well as the derived elevation uh and canopy top height from level 2A, but it mostly
[21:07] relies on the probability of complete laser penetration through the canopy and to the ground in order to accurately
[21:14] calculate the structural metrics. The vegetation metrics from level 2B are all built off one another along the vertical
[21:21] profile of the surface feature. Canopy cover and plant area index are calculated from the vertical metrics. A
[21:29] total value for canopy cover fraction and the total plant area index can also be calculated from those plant area index results. The
[21:38] vertical profile plant area volume density is also calculated and from that the foliage height diversity is derived.
[21:47] Each of these data sets offers a unique perspective of the vegetation characteristics, though they are closely linked algorithmically.
[21:55] The figure shows an example subset of the waveform structural complexity index prediction from level 4C over the
[22:01] eastern Amazon. Level 4C provides an index for the structural complexity of the waveform and is estimated with models that are
[22:10] specified over four plant functional types. The index values for high and low complexity are available as a total for
[22:17] the entire footprint or as multiple values along the vertical profile like those in level 2B. The index combines
[22:25] the information from the vertical and horizontal canopy layers from the waveforms in relation to available airborne LAR data into a single
[22:34] interpretable metric. The figure on the right shows above ground biomass density over the US uh with cloud-free data from February 2023.
[22:46] The biomass level data sets are available in footprint and grided formats offering related information at multiple resolutions or aggregated mean
[22:54] over a 1 kilometer grid. The biomass is modeled in each case with environmental conditions in mind such as leaf status
[23:02] whether it's leaf on or leaf off. Uh depending on the land cover type, the plant functional type and geographic
[23:08] region considered respective to the algorithm that's applied to each footprint or grid. Since Jedi is a sampling mission and not
[23:17] an imaging or wall-to-wall mapping sensor, many workflows may need to combine Jedi with other data to fully
[23:24] map a landscape and measure change over time. An example of this is in the derived product put out by the Jedi
[23:30] mission and many of the derived products put out by the Jedi mission that help increase the quality and density of the
[23:36] information. information. For example, a simultaneous spaceborne LAR mission, ISAT 2, collects photon point clown data over vegetation and
[23:46] terrestrial areas as well that can be fused with Jedi for increasing the 3D sampling density and temporal coverage
[23:53] of the observations and it's provided as a fuse product at lower resolutions for select panropical forests shown on
[24:01] the leftmost map. Height and biomass are calculated with a combination of Jedi and Insar from the Tandem X mission by
[24:08] the European Space Agency. These are tropic tropically optimized wall-to-wall maps of height and biomass information. The figure on the bottom left presents
[24:17] canopy height from that tandem fusion over Gabon, Mexico, French Gana, and the Amazon basin. Two other available products from the
[24:28] mission are highlighted here. The gritted version of all the level 2B vegetation structure metrics are presented at multiple resolutions and
[24:36] have been processed with stricter quality filters applied. For example, the mean foliage height diversity in the leftmost map was generated with Jedi
[24:45] shots acquired between April 2019 to March 2023 and aggregated in six kilometer grid cells. The level 4B country level summaries for
[24:55] above ground biomass are also completed at multiple time periods throughout the Jedi mission to help countries meet
[25:01] reporting standards. The figure on the right demonstrates countrywide estimates of total above ground biomass in pedagrams created using the level 4 2.1
[25:11] version. This data set also includes biomass estimated by FAO for comparison. More details on how these metrics and
[25:21] data sets are calculated or derived will not be reviewed in this training. But there are additional trainings and
[25:27] resources in the NASA DAX. You can reference the data dictionaries, the algorithm theoretical based documents um or reference some additional trainings
[25:36] like the one we'll discuss at the end uh by NASA Earthrise for data preparation techniques for applied users.
[25:45] And with that, we'll dive into section three to discuss resources and tools for accessing, visualizing, and analyzing
[25:52] Jedi data products. So, there are many considerations when choosing a data product to work with. Of course, as previously mentioned,
[26:02] ensuring the coverage and spatial and temporal resolution is primary. Your choice in using Jedi may depend on those
[26:09] mission specifications that we showed earlier. earlier. If you're looking to select data from specific timestamps, you may need to
[26:16] work with the footprint level samples. Since the grided or other derived products aggregate annually or over larger time periods across the lifetime
[26:25] of the Jedi mission, working with the footprint level data sets will be at 25 meter resolution which could be useful
[26:32] for localized applications or for use as calibration and validation or as training data themselves. However, these data sets are not
[26:41] represented analysis ready. This means that the user will need to deploy footprint level specific means of access
[26:49] preparation and visualization strategies to work with the files. And we'll go over some open source tools and a
[26:55] demonstration with a Python notebook to exemplify this. If you are applying uh to a landscape, country, regional or
[27:04] global scale application, um using the grided or derived products that are already quality filtered and aggregated over certain time periods could be
[27:12] really flexible options. These data sets are easy to work with since they're in geotiff. Um, but it's recommended to
[27:19] refer to the data preparation descriptions in order to better understand the assumptions that were made when generating those derived data
[27:26] sets and review whether those assumptions are optimal for your particular ecosystems characteristics. So this reference table can be used to
[27:36] help you decide on how to handle your desired Jedi data product. So we will review the Earth data guey,
[27:44] TES viz, slide rule and harmony API in part two while part three will review accessing Jedi data sets in Google Earth
[27:51] Engine. And the rest of the options are up here for your exploration. So the takeaway here is that not every
[27:58] product is available for access or able to be processed across every platform. Some platforms like Earth data search
[28:05] are really only for data access and basic boundary overlap or temporal filtering. While platforms like TESS viz, the Harmony API, slide rule client
[28:16] go beyond access and allow for more customized data processing, download, formatting, and visualization. For the greatest customization
[28:25] capabilities over large study areas, the user may need to deploy programming oriented approaches, especially when handling the footprint data. So
[28:33] platforms like and and other packages in R Jedi, Google Earth Engine or other Python workarounds like Jedi DB and
[28:42] other ones that we'll present in our demonstration today are good options that can enable you to have within
[28:48] platform data storage processing or link to other APIs or platforms. Any Jedi data product can be accessed
[28:58] via the Earth data search. Um it can be single download or bulk or cloud optimized methods. There are already
[29:06] many tutorials that exist to help you navigate the Earth data system and interface that we will not replicate
[29:11] here today. And the same goes for coding related bulk access with the LP and ONL DAXs that provide command line and
[29:19] Pythonbased Pythonbased guides to download from the catalog with specific spatial and temporal subsetting linked here. You can acquire the footprints and
[29:30] download the HDF5 files uh that roughly overlap with your location and time period from Earth Data Search, but
[29:37] further spatial clipping, variable subsetting, and any type of processing that will need to be done would have to
[29:43] be done on an alternative platform once you've acquired those files from the platform. So, let's take a quick look at how the
[29:53] Jedi data products show up on the Earth data search interface. On the top left, I typed Jedi into the
[30:01] search bar to get all the possible data product collections available to be filtered by the temporal and spatial
[30:08] extent specifications. On the top left panel, there are the main options for temporal and spatial filtering. This is what that controls
[30:16] the search results of the data products that can then be further opened or visualized. The geotiffs and HTF
[30:22] products meet that will meet the filter criteria will appear and you can download the data but they might not be
[30:27] necessarily clipped or subset to the exact spatial extent we defined here with the polygon tool. So you input the
[30:35] time period um use the polygon tool to get a rough area of interest and as you can see the entire swath which includes
[30:43] the trajectories of all the eight eight of the beams are shown overlapping with the study area. The indiv individual
[30:50] beams and samples are not visualized here. You can highlight the overlapping orbit to see its location and download
[30:57] the H5 file. For example, other tutorials can go over AWS access for bulk download, but the level 2B and
[31:06] level 4 A, level 1B and level 4C waveform footprint product. So basically all the HDFI data sets show up in the
[31:15] same way where you're just seeing the outline. And going back to the main results, level three grided elevation and height
[31:25] metric are actually visualized on the map where you can see the values and the spatial extents of each of those grids
[31:33] with a particular color legend and can be downloaded in a similar way. The level 4B biomass data values are
[31:44] also conveniently visualized with the color scheme and demonstrated with the grids. Some of the derived products are global
[31:55] TIFFs and will have associated PGs for your convenience to visualize the data set. set. But other products the data will have to
[32:06] be downloaded to properly visualize. So for here we see the outline the global outline of the data set but there's no
[32:13] visualization. visualization. When we zoom back in we see that it just highlights that it overlaps. The terrestrial ecology subsetting and
[32:27] visualization services platform is exclusively for the level three grided height and biomass and level 4 A and
[32:34] level 4B biomass products. You can use this platform for acquiring data from conveniently pre-processed locations or use the API tool for customization or
[32:46] subset by a userdefined location. So let's walk through how to select a location for data processing of for
[32:56] example the grided level 3 product. Though you can acquire the prepared data sets or use the web service tool, we are
[33:04] going to demonstrate the userdefined subsets tool. From here, you can define a location point or customize by manual input to
[33:13] grab generally overlapping data. This could pose an issue if you're looking to subset by larger areas. Scrolling down,
[33:20] the sensor and the data product uh can be selected. You can select multiple products at a time or type them in. You
[33:27] can also select specific variables if you desire. The next step is to input the desired time period to filter by
[33:34] followed by optionally choosing to generate geotiffs um and choose between the projections. The data request will be submitted and
[33:41] take some time to deliver depending on the demand of the request. The resulting subset data sets get sent
[33:51] to your email when they are ready for download in multiple formats. The user is directed to a temporary page
[34:01] where the data in multiple formats can be downloaded. The order summary is also available with auxiliary maps and
[34:07] statistical summaries for modus and land cover and phenology and other resources for visualization as well as some
[34:14] statistics. statistics. In addition, the citation is generated and the location subset and projection are summarized. If you wish to download the data, you
[34:24] can click the link and a local directory page pops up to save the files on your local computer. The same process can be
[34:32] applied to each of the available download links. Here you can see that each of the bands are available
[34:38] separately and in multiple formats like geotiff or as CSVs. Finally, the visualization tool can be accessed under the tab for order
[34:48] summary. From here you can run the visualization visualization where each band from the level three data set is visualized in a uniform way
[34:56] and a comparative table. So with the same color scheme you're getting each of those bands uh for the level three product
[35:06] and statistics associated. Next we have slide rule client. It it's a platform made in collaboration with the University of Washington uh and NASA
[35:19] Gddard Space Flight Center. It's an open-source framework for ondemand processing of science data in the cloud with AWS. It also has access to ISAT 2,
[35:29] Jedi, LANCAT, Arctic DEM, Rema, and a growing list of other data sets that are stored in AWS S3.
[35:37] This solution includes an API for customization and is well documented. Customizing the API may allow for more
[35:44] flexible use over larger areas, but this user interface tool that we'll go over today is also built for the ISAT data
[35:51] sets, which is a plus if you're looking to fuse these data sets in your application. application. But it is currently only developed for
[35:58] three of the footprint level data sets, which includes the level 1B waveform, level 2A heights, and level 4A biomass
[36:06] data. data. Let's take a look at how to interact with Jedi data using slide rule clients functionalities.
[36:16] On the left panel, the user can select the data set they would like to visualize, process, and download one at
[36:22] a time. On the map, use the polygon tool to define a relatively small study area to work with. This can be a limitation
[36:28] for users looking to use slide roll for larger studies. I can check the request parameters on the top left and using the
[36:35] advanced settings, additional parameters to what is predetermined for the selected data set can be applied. You can control timeout checks, select
[36:42] specific data variables only, specific beams or quality flags that you'd like to include in the final data set. And
[36:48] there's another parameter for raster data sets that we won't use. And as you can see, the request parameters are
[36:54] updated with these customizations. You click run to process the data. May take a little while. And then the user will
[37:00] be automatically directed to additional processing and visualization tools once the acquisition is run. There's a map that visualizes the beam transsects and
[37:09] has advanced filter controls that allow you to specialize the visualization layers by individual beams, ground tracks, or select a particular orbital
[37:17] path. The map plotting can also be controlled where the data values for each of the shown attributes get
[37:22] displayed when you hover over the data point. The user can interact with the map and retrieve the data data values
[37:29] for every included Jedi variable. Next, the rightmost feature generates an elevation plotter for the data along the
[37:35] latitude. This is most relevant for the elevation and height products. Uh there is also a 3D viewer that displays the
[37:42] values along the latitude and longitude with a particular legend to demonstrate the range along the Z-axis. And then much of the parameters below
[37:50] are to control the interactive 3D visualizations mostly. Finally, there is a table tab that allows you to run an SQL query to
[38:01] visualize the data sets that can be exported as a CSV. Okay. So now for a demonstration, uh
[38:11] we'll give an example of how to use the Harmony API. There's going to be a focus on accessing,
[38:19] downloading, visualizing, and analyzing the footprint level data. So really the question that we're trying to address is what do you do once you
[38:28] have the HDF5 bios in you know whatever format that you selected if you want to work with a larger area um or specify
[38:36] with a particular shape file um you know how can you do that so when you download the H5 files from
[38:46] Earth data access they're not necessarily clipped directly to your spatial extent so this solution will help you do that uh when you download
[38:55] the file it also includes all of the variables that could be hundreds of variables and most of those you do not
[39:01] need maybe you want a handful about 22 recommended so how can you down select those from the HDF5 and then transform
[39:09] that data into a preferred format something that's maybe more compatible across multiple geospatial platforms like a shape file or a CSV
[39:18] and just uh um that to know that Harmony API works with the all of the waveform data. So that's level 1 B, 2 A, 2 B,
[39:26] level 4 A, and 4 C. Um, and so what you'll need is the NASA Earth Data Access account, the Google Drive account
[39:35] as well. Oh, and you'll need your credentials for the Earth Data Access ready to plug into the script, um, and
[39:41] access to Google Collab. So this Python notebook will demonstrate how to download the data, select certain variables to subset that you'll want to
[39:50] analyze, generate some statistics and visualizations. We're going to use two example study areas. One of them is of
[39:58] pinon pine uh forage sites around Albuquerque, New Mexico, as well as a paint rock research forest in North
[40:06] Alabama, which is part of the geo trees field data network and is largely managed by Alabama&M University.
[40:15] So just as for your awareness uh the Google Collab notebook if you do command or control question mark if you're
[40:22] looking to customize a notebook and plug in your own AOI or change the the data product. So we'll be using an example
[40:29] with level 2B vegetation structure if you wanted to look at level 1A or look at 4 A for biomass. Um, you can command
[40:39] uh search for the question marks and follow the input prompts throughout the demonstration. Okay. So when you click the link, it
[40:54] will take you to this GitHub repo uh for Raid 2. This is where our script is held, the tutorial. Um, there's a little
[41:03] readme here that gives an overview of what we'll be doing. So, you're going to search and retrieve the Jedi footprints
[41:11] over particular areas of interest. You're going to filter them by specific metrics and other important variables, which we'll talk a little bit about.
[41:20] We'll be able to visualize them with different figures, get some statistics, as well as some threedimensional figures. You can export them as a CSV or
[41:28] a shape file. Um and everything is run in the Jupyter notebook. So there's no um setup on your local computer
[41:36] required. required. And um just to for a quick overview, this is all the steps that we'll be
[41:42] doing within the script. So we'll set up our environment by getting our libraries with pip install, import our core
[41:52] dependencies, set up some directories. So that's using the temporary space um which is housed here on the little
[42:01] folder tab that when you're connected to the runtime, you're able to save all your files here. Uh we'll get access to the NASA Harmony
[42:11] API uh capabilities. We'll set up our study area and I'll show you a couple ways to connect uh
[42:19] your study area data. establish your temporal period to filter Jedi by and then we'll go ahead and execute the
[42:28] downloading the HDF5 files with the Harmony API. But when you download those files, you're going to get a bunch of data that
[42:36] you probably don't want. There's in some of them hundreds of variables that you know you're probably not going to use.
[42:42] And we list the about 22 recommended and that varies depending on the level product. So, we're going to be looking
[42:49] at level 2B, the vegetation structure metrics. Um, and we'll go ahead and subset the files, greatly reduce how
[42:56] much data is being stored, which will really help with computation and when you're working with it in other
[43:01] platforms. Uh, we'll take a quick look at those files to make sure that everything was good with them. And also
[43:06] just to demonstrate how to open the HDF5 file in the collab notebook, convert them to a geo data frame which is uh
[43:15] usable within the Jupyter notebook in that temporary computational space and then offer some options to export it to
[43:22] your drive as a shape file or a CSV. We'll talk a little bit about some quality filtering techniques that were
[43:29] discussed in part one. Um but if you would really like to go more in depth on preparing the data for uh with more
[43:38] application specifications in mind um the repo that this is housed in is a training that goes more in depth on
[43:44] that. Um and so there's several modules that talk a lot more about um application specific quality filtering.
[43:50] We'll just be applying a couple which includes getting rid of no data values and seeing how that changed the data
[43:56] set. We'll map those and take a look at what the data set looks like before and after that quality filtering. We'll do
[44:03] some basic statistics on counting the observations per year over the study area and generate our final filtered
[44:10] data set. Uh we'll go ahead and and plot and explore the data set. So we'll have some violin plots that look at each
[44:17] variable from the vegetation structure metrics per year per study area. generate a pair plot that will show some
[44:24] relationships between those uh available data sets and generate some 3D visualizations. visualizations. So when you're here, you have a couple
[44:32] options to access the file. So you can click this tab here and that will bring you to the script that you can run. So
[44:44] I'll open that in a new tab just for reference. You can go to the file itself here and click download.
[44:52] Uh that's just a GitHub error that they're they're still fixing, but it's it's still a valid data um script. So
[44:58] you can download it and then upload it to your Google Drive. Or another neat trick is when you're open to this file,
[45:05] you can hit to collab right after GitHub and you'll see that the icon changes, hit enter, and then you're taken to the
[45:13] script as well. So, So, when you get to this area, um, you're probably going to need to connect here.
[45:21] So, you hit connect and it'll set up. Um, and just two important tabs here to note are this table of contents, which
[45:30] is essentially that outline that I just went over, which when you click somewhere, it jumps you to the section
[45:36] where you can start executing code, and the folder here. So this when you don't have it connected uh will not have
[45:46] these two folders. You'll just be connected to this temporary space as you can see here in this this disc. This is
[45:51] what you're computing under. Um but I'll show you when we start off. We connect to your drive. So here is your personal
[45:59] drive that you can um connect to data or upload data sets to which we'll show. And then when you connect to the
[46:07] temporary space and we start running through the code, it will generate this folder here that only exists in this uh
[46:14] when you're working through this script live. Um so when you start um we have a again a little overview and
[46:25] just a note um here. So you can follow along with the script and run cell by cell. That's uh just kind of at your own
[46:34] pace, but you can also hit run all and follow the input prompts which we'll show in this tutorial
[46:43] um in order to run through what's written in this script. If you want to do further customization and change, so
[46:50] we're working with level 2B. If you want to go to level 2 A, level 1B, level 4 A
[46:55] biomass, um you will be prompted to input certain variables and you or you can search. So you can do command F for
[47:05] a question mark and you'll see all of these areas here where you might want to customize. So oh, I want to work with
[47:12] level 2A instead. That's somewhere where I would type in the code to change that. If you want to input a different AOI and
[47:19] say you're working California or something like that, you would need to rename these. And just for the sake of
[47:26] how this tutorial is written, if you want to customize it, it is written in dictionaries. So it's going to iterate
[47:32] over multiple AOIS. Um, so just a reference on you'll have to modify some of the script if you want to look at
[47:39] just one area. Um, so that's just a little thing to work around. So when you start um you can either hit
[47:50] run all, follow the inputs, or go cell by cell. But here we're going to go cell by cell. So to set up your collab,
[47:56] you're going to install. So I'm actually going to head over to some pre-run code here. It should take in total about 30
[48:05] minutes to run the whole thing depending on the size of your AOI, which isn't too bad. So when you do pip install, you get
[48:12] a bunch of these prompts. uh it may prompt you to restart the session. Uh you don't need to do that. You can click
[48:19] cancel and as long as this green check mark comes up, you're good to go. And then from here, you want to mount
[48:26] your drive. So when you mount your drive, uh a popup will come up and it'll ask you to put in your Google Drive
[48:33] credentials just like you're signing in to your email or what whatnot. Um, and then the folder will pop up here like I
[48:40] showed. Um, where you can access all of your content. Now, we're going to establish the directories. That is how we're going to
[48:50] save data and locate to our AOIS. So, you can add more AOIS if you wanted. Um, again, be careful with some size. It's
[48:58] not, you know, unlimited, but you want to, if you're working with a product, you want to make sure that this variable
[49:04] is changed and make sure that your AOIS are set. So you can just click run for that.
[49:10] that. And I put some directions here on just clicking run, which means that it's just kind of automated. Everything is
[49:16] connected to the variables that you change. So you can just go ahead and click and this sets the folders where
[49:24] everything is located. So you have paint rock that's within that main directory and pion. So uh we create this base path that we
[49:34] then change our directory to. So this is just telling our code, hey, we want to work out of this main folder, not
[49:40] anything else. So that helps us execute all of our code. And this may take a little while when you run the required
[49:48] packages. Um, so we need all of these to plot, to use the widgets, to map, to get Earth data
[49:57] access, to uh get harmony, all that kind of stuff. Um, Um, and then we're ready for step two.
[50:08] So, here, this is where you're going to need your uh credentials for Earth Data Access. We're going to basically set up
[50:15] the request for Harmony API. Um, set up all of the requirements to make that call to Harmony to get the data. Um, so
[50:24] first we need to input our credentials here. Um, and it'll prompt you with an enter to enter your um, your username
[50:35] and your password. This was also shown in part one. Um, and then we go ahead and actually
[50:42] use that password to authenticate and connect to Harmony client. It might take a little moment. And then
[50:50] from here, this is where we define the Jedi product that we want to use. So when you hit this code, it'll ask you to
[50:58] enter something. And so Harmony works with all the footprint level data. We're going to be working with Jedi 2B. So you
[51:05] can either type it or copy it. So if you were plugging in another data set, you would copy any of these other names here
[51:10] and hit enter. And there you go. So from here, we want to make sure that the Harmony client is actually accessing
[51:20] the variables and all of the capabilities specific to the Jedi product that we just defined. So when
[51:25] you run that, it allows you to see that. Oh, great. So for each beam, this variable in RX processing called shot
[51:34] number, I'm able to access it. And so you see there's hundreds of different variables which we will show you how to
[51:41] choose from and get. So now we go ahead and um get the collection ID. This is what's going
[51:49] to be used in the Harmony API request. So really we're just telling it to give us these in a variable that we input
[51:57] later. later. And now we want to set up a uh a a variable that allows us to connect to
[52:06] the path the read the area the folder that is connected to our AOI that we'll use in the later functions. Um again
[52:15] when you change these above these should change if you're plugging in your own AOI. AOI. And now we want to import our AOI data.
[52:24] So [sighs] this is uh you're going to have to have them in gojson format. So that's quite important. What we're using
[52:31] here is the GitHub um a GitHub giojson. So you can do this as well in your own
[52:38] repo. You would be able to upload wherever. It doesn't have to be in the same exact folder, but you could upload
[52:47] a gojson. you go ahead and click it and GitHub has this nice thing where you can visualize
[52:54] but you want to click raw over here which gives you the raw file and then you just copy this URL here and paste it
[53:02] into your code here. So for here we're just using what's openly available in our own repo. So you can run through
[53:09] this tutorial but you can change that yourself or you can connect to a giojson that is located in your own drive. So,
[53:18] uh, a neat trick here is when you connect to drive and let's say I just pick a random
[53:25] I'll just pick a random file here. Um, so say we are looking at this video and we want to copy the path here. So,
[53:34] we click those three dots, copy the path. That's what gives us this path right here. You would paste that. You
[53:41] would need to uncomment. So, you would need to get rid of these hashtags in front if you were to run with the
[53:47] plugging in your AOI to the drive instead. Um, and that should work. Then you go over here and you want to
[53:54] convert those GOJSONs into a geo data frame. So, that's basically just reading the file in this collab notebook.
[54:02] So, when we do that, it makes it available to be mapped. And so, we click this here too, and it'll display your
[54:11] AOI sites. So we're looking at pinon pine forage areas. So really yummy pine nuts. Um here outside of Albuquerque,
[54:21] New Mexico. So that's quite a large area. area. Um and then we're looking at a very small area of a cons conservation forest
[54:32] here in northern Alabama. Um Um not much has happened here. not much um you know any logging fires and what have
[54:42] you. Um super beautiful site. So those are what So that's great. We have those AOIS. They look great. Um and
[54:51] notice that uh well this one was a rectangle, but this one had as a more complex polygon. So you're able to
[55:00] upload your gojson that's more complex, but when you actually run the Harmony API, it takes a bounding box. So you may
[55:08] need to uh clip your data afterward um in a different like within Collab or whatever platform you're comfortable
[55:16] with. Um but when it makes the request to NASA uh the DAX uh it needs just a
[55:23] really simple polygon. So this is what's taking the shape file that you input and making a box around that instead of
[55:30] using a complex polygon. Um Um then we define uh these this variable that is just configuring the names of
[55:40] the sites uh that we're using for the AOI bounding boxes that we've created to the folder that it's housed in. So
[55:51] that's over here these folders um to help us with later functions. Um so now we've established our uh AOI.
[56:02] So, where are we here? So, we've gone through and we've gotten harmony. We've defined our Jedi product. We've
[56:10] defined our AOIS. Now, we want to establish our temporal filter. So, remember, just a reminder here, this is
[56:17] when the data is available. And um you're going to get to input that yourself. So here um when you run this
[56:27] it will allow you to um hit enter. So I'm going to try this over here just so
[56:34] I don't um Okay. Okay. So we can hit enter here and we can type in 2022 January 1st. Hit enter. Then we can do
[56:56] to the end of the year. Let's see that. Um you don't have to use the zeros in
[57:03] front. It takes um regular uh singledigit numbers as well. So you can have this enter or if you want just for
[57:11] something static, you can uncomment this and use a static variable. Um, so now we're going to actually
[57:19] prepare for downloading the data with the harmony and uh API and request it. So we're just going to define some
[57:27] tracking functions that you'll see in the the code that's printed out. These are really helpful for understanding the
[57:35] size of the data. Um, you know, how many files did you download? Um, and you know, just other tracking information,
[57:43] how long did it take, things like that. Um, and so we'll run this download script. This can take a while. Sometimes
[57:51] if I did the whole time period here, the whole time period of all the data that's available, as you can see, um, for the
[57:57] most part, uh, and it takes about 10 minutes to run over these AOIS that can differ by the size of your AOI as well.
[58:06] Um, so you don't need to know much about this code, but I did just want to show
[58:10] what the actual Harmony API request looks like. So remember we defined our concept ID. So that's what's specific to
[58:18] our level 2B product. Then we have our bounding box and this is our dictionary of data that we input for our two AOIS.
[58:28] And then we've defined our temporal range. And so that's what's actually getting the file. So there's no uh
[58:34] variable subset. You can do v variable subset with harmony. Uh and I you know defer you to the documentation to do
[58:42] that. The reason why we chose this alternative is because there were uh really uh big limitations on the size of
[58:49] the AOI that you can use and we wanted to enable a solution that would allow us to look at a larger area or look at
[58:56] multiple areas to compare over any time period that we'd like. Um there are still limitations here. You can't do the
[59:03] whole globe. you can't do a whole country um that you would have to customize coding for, but it's a lot
[59:08] more flexible than having harmony itself parse through the HDF files to get the specific variables. So instead, we
[59:16] download the files in the temporary space, so not onto your local folder, and then move on to step three to
[59:22] actually subset the data to the variables we want. And so here, this is what it looks like. Um, it's a lot of
[59:29] coding, but it reminds you of what your temporal range is. It lets you know which AOI it's working on, um, where
[59:38] it's at, you know, what is what's the, um, percentage of processing that it goes through, and then it actually lists
[59:45] out all of the files that it downloaded successfully. successfully. And um, and it does that for both of the
[59:52] AOIS. And then at the end you get a nice summary of how many AIs were processed, how many raw files were there. It was 6
[1:00:00] gigabytes gigabytes um and the average size per the files so that you understand what's going on and
[1:00:06] where they're located. So you see, wow, the Pon area, we knew it was larger. It had 106 files. Paint Rock only had six
[1:00:13] files even though we're looking at the whole range of years in 2019 to 2025. So I wanted to show these really big
[1:00:19] differences. Uh, and we'll see that throughout the figures. You can have, you know, Jedi, you could be wanting to
[1:00:25] use Jedi over an area, but it really depends on what your area looks like and how it how Jedi uh happens to collect
[1:00:34] over that region. Um, so now we're going to move on to actually subsetting these variables. So we don't want, you know, 6
[1:00:42] GB of data. Um, and we don't need all of those. We don't need hundreds of variables. So from here, we're going to
[1:00:50] uh use this text file. This is located in the repo that I showed before. It's basically uh just a text file of um all
[1:01:00] of the variables. It's like a dictionary of all of the variables that are available in the level two products. So
[1:01:07] as you can see, hundreds and hundreds of variables. Um and we don't need all those. Uh so we're going to use this
[1:01:16] text file that we'll just load in by running this code and see here great it gets all the data
[1:01:22] um um in order to then plug in hey I only want level 2B data from this. So this will
[1:01:30] prompt us to put in and from here you can I'm working with level 2B so I can
[1:01:37] copy this or you put in the product that you're working with enter it here. Great. And then it gets
[1:01:44] me only the variables that are available for that product. That's still many more than I might need uh depending on my
[1:01:52] application and what I'm doing and the research that I'm doing. Um and so from here we actually want to select those
[1:02:01] variables. So what's important about this list here and you can also visit the NASA data dictionaries is that we
[1:02:06] need this full file path name. So even if I just want to get the leaf off flag,
[1:02:11] I can't just type leaf off. I need the folder or the group that it's in in the
[1:02:15] HDF5 file. So this changes across the product. So that's why this step of visualizing and getting all of the data
[1:02:23] or looking at the NASA data dictionary is really important to get what that real total value is. So I want latitude
[1:02:29] of the highest return. Well, it needs to be written as if it's from the geoloccation folder. So from here um
[1:02:37] this is going to ask you to input. You can either enter or you can uncomment here and create this list yourself
[1:02:44] depending on the product. So something to note is because we're working with level 2B, these products are specific to
[1:02:51] level 2B for the most part. And these ones are just we recommend these. These are pretty commonly used um uh if you're
[1:02:59] working with any Jedi data set that will are important for quality filtering for getting your location coordinates for
[1:03:06] being able to understand the behavior uh or penetrative ability of each of the shots. Um so highly recommend keeping
[1:03:15] these although the prefixes might be different. So in like a different product um you know maybe the degrade
[1:03:24] flag is in a different path folder here might not be in geoloccation might be somewhere else. So you might need to
[1:03:30] double check that with when you're changing your folder to that. And so from here I'm just I already wrote this
[1:03:36] out. So you just have the full path name separated by commas in a space. Copy that and input it into your enter here.
[1:03:45] Or you can put a bunch of apostrophes like this and use this variable instead. So great, it loaded those in and it
[1:03:53] formatted it the way that it needs to be. be. And now we're going to define some functions that help us select the
[1:03:59] variables itself. So you just click run here to subset. Now you can also specify how many beams that you want. So again
[1:04:07] subsetting the variables and by beams is something that's available in harmony API, but it greatly reduces your
[1:04:13] computational ability. So we're doing it here post download. Um so a really common thing to do is to use only the
[1:04:20] power beam. So power means that the laser was at full power. Coverage means it was about reduced to about half of
[1:04:27] the amount of power which means that maybe it wasn't able to penetrate denser forests all the way through. That
[1:04:33] depends on the AOI and a lot of people are still researching that. So if you want to include all the beams and look
[1:04:38] at a comparison and we'll show you um a little bit uh of how to do that. um that
[1:04:43] could be really really interesting. Um or if you already know that you're working in a really dense tropical
[1:04:50] forest or something like that, you should probably just use the power beam, you can just select these four beams
[1:04:55] instead. But for this, we want to look at all of them because I know that we don't have as dense forests in the US,
[1:05:02] and I would like the ability to compare them if I really wanted to. So, and also when you separate uh those
[1:05:09] beams, you're greatly reducing the amount of data that you have available. And as you'll see, that can be a huge
[1:05:15] barrier to to using Jedi when you actually apply these quality filters. How much data is left? So, now we're
[1:05:23] going to define some helper functions to actually download the HDF file. So, we'll just click run on these. These are
[1:05:29] just some functions that help us do stuff. Um, and this is just basically opening the HTF5 file,
[1:05:38] uh, getting the the data sets, putting them in the right place, in the right order, reformatting them into the way
[1:05:45] that we want. Um, and then we'll execute that function here. So, you just click run on all of
[1:05:51] these. Um, and what it'll look like is, so I have it print out each of these things just to keep track of what's
[1:05:58] going on. So for Paint Rock AI, our really small AOI, we're making we're creating a folder that's going to be our
[1:06:07] raw downloads um or uh where we're getting the the raw downloads from is from this folder, but we're going to
[1:06:14] create a new folder that's for variables selected. Um and actually you could see that here. So if we're in Paint Rock,
[1:06:22] great. We created a folder here where we got all of our subset variables in. So as we do that, we're opening each of
[1:06:32] those files and it's um you know get going through and finding each of the 22 variables that we specified from each of
[1:06:40] the eight be themes that we want um and processes each file. So it fi defines these summaries of how many variables
[1:06:48] we're getting. But from this first file that we see here, this uh from 2022 whatever um you see that there's no
[1:06:56] beams here. So it's skipping them and that's just because of the spatial clipping that we got. So even if you had
[1:07:05] the full file available because of the spatial subset it did not include all of the beams. So even though you're
[1:07:14] requesting for all the beams to be selected that may not be the case depending on where they fall over the
[1:07:19] earth and over your shape file that you defined. So this is where we really get into and something that you know earth
[1:07:26] data and until you convert the HDF5 into something more readable and are able to look at this kind of information. You
[1:07:32] don't really know exactly how many shots within each of the beams are available over your AOI. So this is really useful
[1:07:39] for tracking what's actually going on and then you realize that oh you know I only I don't actually have coverage
[1:07:46] beams for this area. Um so we'll we'll actually visualize this and make it a little easier to read. This just uh goes
[1:07:52] through tracking. Uh it defines the size and then you get to see, wow, we reduced that file 98%. Which is great because we
[1:08:00] did not need all of that other data. So now we just do a quick check. Are they
[1:08:06] where we want them to be? Um it's just for security. And then uh we're going to go ahead and
[1:08:14] look at those HDF5 files. So just something interesting to look at. We're not really going to work with them
[1:08:19] anymore since we're going to convert it. But if you want to look at the raw files, so let's take a look at a file in
[1:08:25] pion and we're looking at the raw files here. So you can choose from any of these that you want. You can say, okay,
[1:08:34] cool. So all of these beams are potentially available um as well as these other groups and these are all of the variables that are
[1:08:44] there from each of these beams. in the raw data set. We don't really need all of them, but just to see.
[1:08:51] Great, they're all there. And then if you want to look at um look at the variables selected, see what happens
[1:08:58] after you subset them. Then you get to see, oh, okay, great. So, we actually only have these two beams available
[1:09:04] after we subset. And looks like we got all of the variables that we selected. So, that's pretty good. And you can go
[1:09:11] ahead and look at the other files and see how these change specific to each file. file. Um, so now we're going to actually look
[1:09:20] at those variable characteristics um across the HDF5 file. So this is another example of opening up. So you hit run on
[1:09:29] that and you run this. And um we're just going to look at first the the raw download just to be able to see what's
[1:09:37] going on with this data set. And so something that we learned about in the lecture part of part two was that the
[1:09:44] HTF files are holding um data sets in each group. So if you have ancillary or the beam group that are of different
[1:09:52] types and so when you look at this file here and it's also in the data dictionary that's um you know an online
[1:09:58] page through the NASA catalog um but you get to see the shape of the data set. Is
[1:10:04] it you know onedimensional, two dimensional? Um how many points are in it? Uh and what type of data is it? So
[1:10:12] is it integer? Is it float? Is it this or that? Um so if we want to look at
[1:10:17] okay, so let's look at this. We have cover here from this file. Looks like there's only one shot available. Um and
[1:10:26] the cover is a float. So, this is just really to check um what's going on if you needed to do some extra research
[1:10:33] with that uh and understand what's going on with each of those files. Um so, these are again all the data sets, but
[1:10:40] if you want to look at something that you subset and see what's going on. Okay, so there's nine shots that are
[1:10:46] available here. Um in this here, you'll see that PAV, PAZ, the Z profile. So we won't talk as much about this and
[1:10:55] there's another training with Earthrise that talks a little more in detail about this but this is um where how just how
[1:11:02] it's a two-dimensional uh data set of how the PAV values are stored along the vertical axis. So, you know, along the
[1:11:09] heights you get a P AI, a plant area index value. Um, and so there's 30 different value possible values. Not all
[1:11:18] of them may be valid data um for each of the shots. So, it's a different format. It can't be opened the same way. We
[1:11:25] won't go over that in this training, but just to recognize that there are data sets of different sizes. Same thing
[1:11:30] here. Look, there's just different ways that they're formatted within the HDF file. So if you were to customize, you'd
[1:11:36] need to pay attention to that. Um, and then we get a summary of those information. So here, this is an
[1:11:43] optional step. If you're working and your disc is full and something's going on, um, you might want to go ahead and
[1:11:51] uh, delete the raw downloads folder to get if you're not needing that and you just want to work with your final data
[1:11:56] set. So when you click run here and it's on false, it'll tell you, hey, set it to
[1:12:02] true in order to rerun and actually delete your files. So that means uh come over here and again there's a question
[1:12:09] mark to find that and you'll just change that to true. Hit run again and then it will delete this entire folder.
[1:12:18] And if you do that again, if you needed that later, you're going to have to rerun the download to get those back.
[1:12:25] So now uh we're going to actually create the geo data frame with a subset of HDF5 files. So this is what's going to help
[1:12:31] us start thinking about visualizing the data um and being able to convert it to another data format. So we're going to
[1:12:40] define some functions that help us do this. Um lots of documentation throughout if you're looking to customize. We try to make it easy um and
[1:12:48] understandable. understandable. Um, so now we're going to go ahead and actually execute converting those HDF files for
[1:12:59] each AOI and we're going to create a dictionary of geod data frames. So that's one geod data frame per AOI uh
[1:13:07] that we'll use to plot later. And again, it's going to be using the data that was subset uh in order to do so.
[1:13:17] So when we do this, it goes through and it tells us what's going on with each of
[1:13:21] these. Again, just to help us track. So here we have uh that it went for each beam. It's getting all of the records.
[1:13:30] So those are the the individuals the 16 shots here, 36 shots, 58 shots in each of these beams for that file. What did
[1:13:37] it do to each of those data sets? So P gap theta Z. you don't really work with
[1:13:42] this, but um this is something that it it truncated the information that might be something that needs to be um
[1:13:49] investigated and fixed if you're using that data. Um but here uh it just lets you know, hey, I wasn't able to find
[1:13:56] this in these beams because those beams don't exist or uh how many records were actually processed. Um, so for the most
[1:14:04] part everything was successfully processed, but it might need to uh uh you know be changed if uh you're working
[1:14:13] with these data sets and you find that they're not correctly downloaded. Um and so here also the reference length that
[1:14:20] we're using, where did that go? Um the reference length is essentially just looking at lat lowest mode. So that's we
[1:14:28] know that if we're looking at the latitude and longitude of each shot, uh we know that that shot exists. So if
[1:14:36] there's 36 latitude points, then we're just going to assume that those are the 32 shots that we want uh to be able to
[1:14:45] um generate our geo data frame from. So that's just a bunch of uh tracking records for that. And then we're able to
[1:14:54] say, great, we have this available. Um, we want to create uh a variable that allows us to access the individual geo
[1:15:04] data frame for each product or for each AOI for that product. Uh, so that you can look at the data set. So
[1:15:11] great, we have the latl longlong. Okay, everything looks great. It's in its it's in order. You can see every every data
[1:15:18] set here, some of the values. Um, and so this is what we're more familiar with. So now this is an optional step. So what
[1:15:27] we downloaded here was the so we had the raw file that was subset to the variables that we wanted and then we
[1:15:35] converted that to a geo data frame but no quality processing, no getting rid of no data values, no look into the actual
[1:15:46] uh data sets themselves and their quality um has been done at this point. So if you were looking at a study that
[1:15:52] was you know comparing different quality filters that you wanted to apply or looking at um you know validated the
[1:16:00] difference in was different validation of the results that you get. You might want to save the original um data set
[1:16:07] that has had nothing done to it um itself. So this is an option to do that here before you start applying different
[1:16:14] filters. And this might help you compare if you're if you're doing that or maybe you found some literature that you think
[1:16:21] is really applicable to your ecosystem. You don't really care about the raw files. You've already you know you know
[1:16:26] you're just going to apply the final filter data set and that's what you're going to work with and you can skip this
[1:16:30] step. But when you do this uh it connects to your drive and it creates a uh folder for shape files um or CSVs
[1:16:42] where the data is actually saved. So you have uh that's just so it should look like this pion with the product and then
[1:16:52] um you have your shape file files all there. there. Uh and again that's the original nothing done to the data set.
[1:17:03] Um and now we're going to start thinking about exploring the quality filtering techniques. So we just click run on
[1:17:09] these cells um to establish this just helps us visualize um um and then so we may have defined the
[1:17:19] beams by listing when we wanted to subset but it's kind of hard to remember what each one of those numbers is
[1:17:28] corresponding to. You'd have to you know memorize that. So instead we want to actually label them as power or coverage
[1:17:36] themselves. So we're going to define this function that allows us to create a column that tells us whether it's
[1:17:43] coverage or power instead of the individual beam name. So that'll help us generate some later figures. So now we have our original data set and
[1:17:52] we're really interested in seeing well some basic statistics of what's available when. This could be make or
[1:17:59] break for your application of Jedi. And um so we're going to define some of the uh functions that help us actually get
[1:18:08] this uh figure going um plot it. So again, you just click run on all of these. There's not much else
[1:18:16] to do. Uh if you were changing some of the AOIS, you might want to change some of the colors or if you added, you might
[1:18:24] need to add some specifications to colors here. Um, and we go ahead and click run here. And so this is an example of what the
[1:18:35] output would look like. So here we have, wow, we have 250,945 total shots that are total observations
[1:18:46] that were available between 2019 and 2025 for pinon or Jedi level 2B. And now we get a little summary chart here that
[1:18:55] tells us across the years how many of those shots are associated with those years what was the peak month of how
[1:19:02] many shots there were. So you see that can vary by oh what is that thousands um across
[1:19:09] across uh across each of these months uh per year. So that can be really important if you're looking at seasonal uh seasonally
[1:19:17] specific applications. Um so I think I have this actually pulled up here. So what this does is it puts all the AOIS
[1:19:25] on one subfigure for each year. So you can do a comparison between them. Uh and as you saw, Paint Rock has very very
[1:19:34] few. It only has total of 64 shots across all of these years. Now it's a small AOI. I don't know why it has that
[1:19:42] few, but this could be your point. you know, if you're looking, hey, I want data from, let's say, 2022
[1:19:51] in April or May for either of these, I you can't do your study with data from that area because it's just not there.
[1:19:59] So, that's what thiso uh code helps facilitate is understanding, you know, even if they is potential, um it really
[1:20:06] is variable. You just have to open the data in order to see how much is is available for that time period. um or
[1:20:12] you see, you know, there's only nine 10 shots here. There's no data from paint rock in this time period. So, uh yeah,
[1:20:21] it can be incredibly variable. Um so that's what this uh figure is doing. Uh and then we get a nice uh other kind of
[1:20:30] descriptive comparison across those years to just help us understand. So if you're using it as train data, this
[1:20:36] could be really really valuable for understanding um the representativeness. Of course, this is uh total shots. This
[1:20:43] isn't even over individual land cover types. If you put a land cover mask, that could also greatly change the
[1:20:48] amount of available data. Um uh depending on your application. So now we're going to make a bar plot
[1:20:58] that is uh similar to this, but now comparing beam types. Like I said, there could potentially be a very big
[1:21:04] difference between the power and the coverage beam. Uh so when we define we just click run define this uh this
[1:21:12] function in order to generate our plot. And so we're going to get this monthly observations for one AOI. So we're just
[1:21:19] looking at payrock and we have colorcoded for each of the years separated by power and coverage. So we
[1:21:26] see okay well of all of the shots they are all power. So maybe that's possibly more reliable shots. really depends on
[1:21:34] the application, but this will help us better understand when we actually go and validate. And then for this one
[1:21:40] here, we have some coverage in 2021, but as you can see again, there's a very uh different distribution across the years.
[1:21:49] And of course, we get a table that helps us visualize that. And I think I have Yeah.
[1:21:54] Yeah. Uh, and you can switch. So, this widget here allows you to switch to the other AOI. It might take a while depending on
[1:22:02] how much data there is that you're working with. Um, and I kind of wanted to show jumping over here
[1:22:22] to I only selected one year's worth of data from 2022. And again this is summarizing all of it
[1:22:29] but if you just wanted to select you can do some comparison there. So for pion we have a bunch of data that's distributed
[1:22:39] uh very differently across the coverage and power beams. Um, this could really help you understand, again, if you're
[1:22:47] using it as training data, um, could help you understand the behavior of that information and summarize that across as a table. Okay.
[1:22:59] Now, we're going to look at a scatter plot and see how many of these values are node data values. Um,
[1:23:06] we want to get rid of those. So, here we have before we separate, it's really difficult to see what's going on. and
[1:23:13] just understand how many of those values are removed and what our information looks like across all the years, all the
[1:23:20] data for the AI um when that node data is removed. And see there's a lot more information that we're seeing here
[1:23:28] um across the the track of observations. So this is along each of the observations that get dealt. So you see
[1:23:36] there's a lot again there's only 64 in paint rock um but we understand the behavior a lot better. So now with that
[1:23:43] understanding of a little bit about the no data and how much is available, we want to go ahead and generate our
[1:23:50] filtered data set. So again, if you don't have any data over the time period that you're looking at, then for the
[1:23:57] study area that you want, this might be the end of, you know, you using this script or you'd have to change course if
[1:24:04] you want to use Jedi. Or if you have data and you want to make it higher quality, then you know start applying
[1:24:11] these filters and see what happens. So we're going to remove the no data values. This will change when you're
[1:24:19] using a different product. You're going to use uh uh you know uh this is for FH a FH foliage high diversity plary index
[1:24:28] and cover. This is what we're going to be looking at in this uh level 2B data set. But we also want to look at um uh
[1:24:35] if you want to look at level 2 a elevation and height, you would change these here and get rid of those no data.
[1:24:40] And then we have the quality flag and the degrade flag which we talked about in part one that we'll apply
[1:24:47] um to remove to keep high quality flags and get rid of degraded flags. There are many other types of filtering that you
[1:24:54] can do that we won't cover in this training, but you would add them to this section here if you wanted to apply
[1:24:59] those and compare. And now you see that the data sets reduced. So instead of 64 now we have 42 in paint rock. And
[1:25:05] instead of 250,000 we have 124,000. So again that'll vary by the um study area that you have. We can map the
[1:25:17] differences between that. Uh so we have the original here um and then we have the filtered data
[1:25:26] set and we can see just how different those are again the scale between the no data and the data values change from
[1:25:35] what's available and we can check that for the different data products as well PI plary index yeah
[1:25:46] yeah um now just to show what happened after we filter what does our uh distribution of the data across the
[1:25:55] months look like after we get rid of that data. So again, that can be really variable. You just kind of have to see
[1:25:59] it to see what happens. Um it could stay largely the same. Paint Rock didn't have uh too many points that were taken out.
[1:26:09] Um but you'll see sometimes that could get rid of an entire month that you were hoping for by applying the filter. uh
[1:26:17] which can be really important. Okay. And then again an option to save it to shape file or CSV. This is your final filtered
[1:26:24] data set. This would be your analysis ready data. It would be saved in the same location with a different suffix
[1:26:32] specifying that it is filtered. So now we're just going to generate a few figures. um we're going to make a violin plot
[1:26:41] that's going to again help us summarize um but get a little bit more information on some statistics of what's going on
[1:26:47] with each of these variables. So we have you know the width the size of the violin plot is telling us how many of
[1:26:55] the data are there in that month that are are contributing to these statistics um across. So as you can see there's
[1:27:04] just different uh shapes that allow us to understand that and I believe um we can see a little bit more with pion
[1:27:13] here. here. So you'll get uh a plot for each month to understand a little bit more about
[1:27:19] the distribution per you know okay what's going on here February not much variability um so yeah lots to look at lots to
[1:27:29] interpret um over your study area um and then you do that for each variable so for level 2B we just looked
[1:27:41] at the foliage height diversity and you can do that for plant area index. So again, you'll have the same time periods
[1:27:49] because all of these variables are built off of the same original shots. Um, but they'll have different values and
[1:27:56] distributions. distributions. Now, we'll generate a pair plot. Uh, this in will include all of the variables that are
[1:28:07] included in that original subset that we copy and pasted everything. So, um, we don't go over all of these. uh you might
[1:28:14] need to take uh an additional training or go to the algorithm theoretical base document for that but this just helps
[1:28:19] you understand the behavior a little bit more. So we know plant area index against cover. We see that there's a
[1:28:26] really strong relationship here. Um and so this is just uh a nice way to start understanding a little bit more about
[1:28:34] the data sensitivity of the beam. How well is the um the beam the shot able to penetrate through a canopy and how does
[1:28:44] that relate to canopy cover? Um you get to see a little bit more about that information here. And so that plots
[1:28:50] across all of the available data sets that are in your in your uh file that you subset. Um or you can select down a
[1:29:00] few. And finally uh we'll go over some threedimensional plotting. So here we're going to make an interactive plot that
[1:29:08] allows us to play around with what's available. So these are our 42 shots because we're looking at the filtered
[1:29:15] data set and how it looks. Um it's plotting the visual of um of the uh the value of the variable itself. So right
[1:29:26] here we're looking at uh plant area index, right? Um, and the value of that plant area index is what's put on the
[1:29:34] Z-axis Z-axis uh for each of the shots. So, you can look at it in different ways. You get to
[1:29:39] see the tracks there um and whatnot. So, there's uh different ways to view. You can save it as a PNG. You can pan. You
[1:29:49] can do different types of rotation um across. Make a video of yourself looking at it. Uh pretty cool. Hollow views uh
[1:29:57] interactive site. Uh and yeah, there's a lot more in that other one. We'll see if it loads. But uh then you can also
[1:30:05] create a static 3D plot. So something that's a little bit um easier to save and visualize. So
[1:30:12] here we have this example from Pon. That's you know thousands of shots that we see um in order to better
[1:30:19] understand each of these variables. cover, plant area index, foliage height, diversity, get a sense for what our
[1:30:27] landscape looks like with all of these shots. Um, and then again, you see, wow, you know, this might not be um a lot of
[1:30:37] data. You'd have to think about what kind of value that plays in your study area. And again, this is across all of
[1:30:44] the years, so it could be greatly reduced if you're just looking at a particular time period and not
[1:30:49] aggregating over. And this is what it looks like when you have a lot of points. Okay. So, thank you very much. Um, if you have
[1:31:01] any issues, there is a discussion forum on the repo here uh having to do with these tutorials. And I hope you have fun
[1:31:11] exploring Jedi. So to conclude uh this part two just wanted to leave with some recommendations on additional resources
[1:31:23] and how to stay updated. So, as we've mentioned before, a really great reference for understanding the basis
[1:31:30] and background of all of these data sets are their individual algorithm theor theoreticalbased documents as well as
[1:31:37] the individual user guides that are hosted by the DAX. Um and on Earth data catalog catalog the ONL and LP doc sites are always
[1:31:49] processing updating products uh you know uploading new versions and archiving older versions as well. So these are
[1:31:57] really the best sources of information uh original and new data sets that Jedi and the Jedi mission team are putting
[1:32:04] out. out. Google Earth Engine, R Jedi, Jedi DB, which is a Python API that recently came out, as well as some of the other tools
[1:32:14] that we mentioned are continuously advancing their functionality. So, always revisiting their resources and their their main pages um you know, will
[1:32:24] be updated with new functionalities to test. And if you're interested in learning more applicationspecific information on, you know, once you have
[1:32:34] the data or you're looking at it, you finally mapped it with some of these example scripts or the tools that you've
[1:32:41] been able to access and run through. Um, you know, how to interpret the data, understand some quality checks, um, how
[1:32:48] to improve it or optimize it with other data sets. Um, you can take the NASA Earthrise uh, Jedi applications focused
[1:32:55] training. It has another series of hands-on tutorials uh in collaboration with some of the other collaborators who generated this
[1:33:03] training with ARSET uh that are specific for data preparation and analysis recommendations. recommendations. And given that Jedi is a novel sensor,
[1:33:12] it was launched in 2019. The research is still very active. So the literature is also a great place to go and keep up
[1:33:19] with in understanding new applications or recommendations of using Jedi. and the Jedi mission page conveniently hosts a uh Jedi related literature Zotterero
[1:33:30] group that gets continuously updated with the latest literature. So, thank you very much and I hope uh this
[1:33:37] training advances your use of Jedi. Thank you so much Stephanie. Now I will provide a summary of part
[1:33:52] two. Let's review the key concepts from part two. two. First, we covered Jedi's mission objectives and applications. Operating
[1:34:04] from the International Space Station with data from 2019 to 2023 and resumed in 2024, Jedi quantifies three-dimensional
[1:34:12] ecosystem structure for carbon cycle tracking, fire management, weather prediction, water resource monitoring beneath dense forests, and topography
[1:34:21] mapping in vegetated areas. We explore Jedi's data product hierarchy. hierarchy. Level 1B products provide geoloccated waveforms. waveforms. Level 2A extracts elevation and canopy
[1:34:35] height metrics. Level 2B calculates canopy cover, plant area index, plant area volume density, and foliage height diversity.
[1:34:46] Level 4 A models footprint level biomass while level 4 C provides a structural complexity index capturing three-dimensional canopy complexity.
[1:34:58] Understanding file formats is crucial. Footprint level data sets at 25 meter resolution use HDF5 hierarchical format requiring specialized tools or coding
[1:35:10] skills. skills. Grided products like L3 and L4B use familiar geotiff format at 1 kilometer resolution with quality filters already
[1:35:20] applied making them more accessible. Data fusion products overcome Jedi's discrete sampling limitations in certain ways. The mission team developed fusion
[1:35:33] products combining Jedi with ISAT 2 for increased sampling density. Tandem X Insar for wall-to-wall tropical maps and
[1:35:41] LANCAT for continuous canopy height products leveraging Jedi's vertical precision alongside broader coverage sensors. Field inventory plots from networks like
[1:35:56] US Forest Service Inventory and Analysis established the alometric equations relating ground measurements to Jedi observations. observations. Future missions like edge will build on
[1:36:09] this with increased beam density and swath mapping for improved change detection. Finally, you learned about access tools.
[1:36:20] Earth data search provides downloads with spatial temporal filtering. Testfist offers subsetting for level 3 and level 4B products.
[1:36:31] Slide rule client enables cloud-based processing. processing. Harmony API handles HDF5 transformation. Coding platforms like RJ Jedi and Google
[1:36:42] Earth Engine provide custom analysis capabilities. Matching the right tool to your workflow is key to working efficiently with Jedi
[1:36:52] data. data. In part three of this training, you will be able to utilize Jedi standard biomass products at both footprint and 1 km
[1:37:02] scales to map forest resources. You'll be able to access the open-source OB1 API to generate estimates of biomass
[1:37:10] change in areas of interest. You'll also be able to identify how Obi-Wan can be used to create baseline scenarios for
[1:37:17] forest carbon accounting projects. To receive a completion certificate for this training, you will need to submit the homework assignment, which opens on
[1:37:32] November 6th and closes on November 20th. This is the contact information for our guest instructor, Stephanie Himenez, as
[1:37:45] well as for myself listed here. We're also including links to the RSET website and the RSET YouTube
[1:37:53] channel channel where you can find many more trainings like this available for free online. Here is a list of references and
[1:38:06] additional resources to look into. Thank you so much for your participation in today's training.
