# Applications of the EO Toolkit to Measure and Analyze SDGs, Part 2/3

`https://www.youtube.com/watch?v=hSCqJ0BrqFY` · id 207 · 1:18:37 · module 102 — Developing Sustainable Earth Science Applications

[00:00] hello and thank you for joining us for our three-part webinar series earth observations toolkit for sustainable cities and human settlements
[00:09] today we have part two of our training on applications of the eotool kit to measure and analyze sustainable
[00:16] development goals once again my name is arjiro cavada and i'm the program manager for sustainable development goals at nasa earth science division
[00:25] applied sciences program this three-part training is a collaboration between nasa's supplied remote sensing training program the un habitat the group on earth
[00:36] observations eo4 sdg initiative the geohuman planet initiative and the ceos working group on capacity building and data democracy
[00:47] this training we have three parts each being one and a half hours long these sessions will consist of lectures
[00:56] and demonstrations it's followed by a question and answer session you can find all the course materials on the website
[01:03] listed here and after each part the recording can be found here too there are two prerequisites for this
[01:10] training first you must have an understanding of the basics of remote sensing with our course on those
[01:16] concepts listed here if you're not familiar familiar also it is recommended that you have attended or watched the materials from
[01:24] the training we held last spring on an introduction to population grids and their integration with remote sensing
[01:31] data for sustainable development and disaster management this training will be delivered in english and spanish so if you're more
[01:40] comfortable attending the spanish version we will conduct that session later today and you can find the registration link through the link found
[01:50] in the chat for this series we will have one homework assignment the link to the homework will be made
[01:58] available during the last session and will be due on tuesday february 24th the homework will be a google form that
[02:07] you submit online if you attend all three parts and complete the homework by the deadline you will receive a certificate of
[02:15] completion completion please be patient as it takes a couple of months to process and send out these certificates
[02:24] the objectives for this training series are to understand the value and usefulness of earth observations to monitor and report on urban sustainable
[02:34] development goal indicators and the new urban agenda learn from inspiring examples of cities using earth observations for sdg 11 and
[02:43] in urban agenda understand how to apply earth observation based toolkit resources to enhance urban resilience and improve
[02:53] decisions regarding planning planning monitoring and operational preparedness for example including informal settlements open spaces for public use
[03:04] access to public transport and urban greening greening monitoring such as for air quality or land consumption and operational
[03:13] preparedness including for example for emergency response to different types of hazards as i mentioned this series consists of
[03:25] three parts today during part two we will cover applications of the eu toolkit to measure and analyze sustainable
[03:34] development goals including the degree of urbanization tools and sdg 11 indicators indicators demonstration of the pop grid website
[03:45] and viewer evaluation of the accuracy of gridded population data sets for sdg 11.1.1 on adequate housing and demonstration of the pop grid
[03:58] for data set comparison for sdg 11.5.1 on people directly affected by disasters disasters and for our last part part three on
[04:09] february 10th we will go through a couple of use cases from the national and city level and so now i would like to introduce our
[04:22] colleagues colleagues thomas kemper project leader from the european commission's joint research center and cascade tacholsky post doctoral research scientist at the
[04:33] center for international earth science information network at columbia university university first we will go to thomas thomas over
[04:42] to you welcome to this course that will introduce the degree of urbanization the degree of urbanization is the method
[04:54] enabling the classification of a territory by human settlement types such as cities towns and villages this classification can support the
[05:03] reporting of progress in achieving the sustainable development goals the team of the global human settlement layer layer developed data and tools that enable
[05:14] mapping and analyzing the degree of urbanization worldwide all tools and data sets are available also in the earth observation toolkit
[05:25] my name is thomas kemper and i'm leading the ghsl project at the european commission joint research center
[05:32] i have a wide experience in remote sensing for the detection and characterization of settlements in support to eu policies
[05:42] in this course you will learn how to use your own data in simple software tools to assess the
[05:49] degree of urbanization and employs this definition for policy purposes in comparison based on a standard definition definition first
[06:00] we will introduce the policy context linking urbanization with sustainability then we will introduce the degree of urbanization method and see how it
[06:08] serves the production of global online open data available to your analysis purposes we will also cover the usage of our free tool suite
[06:19] that allows applying the degree of urbanization to custom data more significantly we will see how classified settlements issued as output
[06:28] of such tools can be matched with other data of your interest making few examples examples we will focus in particular on sdg 11
[06:37] but explore the application also to other sdgs and to national statistics as well well at the end of the presentation find the
[06:45] links to our support material if you want to go deeper human activities take place on the earth's surface our home and workplace
[06:56] the settlements where we live and work are at the center of the many challenges we collectively face that prompted the
[07:03] adoption of several international agendas for development and sustainability sustainability such as the agenda 2030 for sustainable development
[07:13] development the sendai framework for disaster risk reduction reduction and the new urban agenda monitoring progress towards the
[07:21] sustainable development goals or sdgs is based on metrics called indicators that tell us how far we are from reaching the targets
[07:32] computing these indicators requires harmonized definitions of what we are measuring and data to measure cities and human settlements are still
[07:45] growing growing and it is certain that most of the challenges faced by humankind will happen there according to the united nations more
[07:55] than half of global population today lives in urban areas and it is expected to increase even more
[08:02] however however these figures are based purely on very different national definitions to count urban and rural population
[08:16] the way urban and rural areas are defined influences how urban and rural population is accounted in this map you see the diversity of
[08:25] definitions used by national statistical offices of different countries to report to the united nations most of them
[08:34] in the lightest shades are based on different population size or densities thresholds sometimes in combination with other indicators
[08:43] however you see many countries in darker colors which adopt different methods or do not adopt a statistical definition but rely for
[08:52] example on administrative breakdowns such situation does not favor internationally uniform way to report the progress towards the sustainable development goals which
[09:05] are monitored through indicators collected for urban and rural areas agreeing on a common method to identify what a city or town is where it begins
[09:16] and where it ends and what is rural is key to ensure whether we monitor the evolution of
[09:22] urbanization worldwide this is essential to identify best practices and improvements in policy making this is the reason why several
[09:35] international institutions agreed to develop the degree of urbanization method as an entrusted and reliable international standard using ghsl global data sets as a
[09:46] reference data six international institutions developed the degree of urbanization together and presented the methodology to the un
[09:54] statistical commission which endorsed it officially in 2020 currently several custodian agencies of the sustainable development goals recommended the use of the degree of
[10:07] urbanization to facilitate international comparisons reporting of urbanization statistics and calculation of indicators new method has several benefits
[10:21] it can be applied in a very cost effective manner existing data collection such as household surveys can often be
[10:30] used as an input to the degree of urbanization urbanization by proposing three classes it captures the urban rural types range
[10:41] because this method is based on the population grid it reduces the distortions created by a variable size
[10:48] of statistical and administrative units it improves global comparability by capturing the spatial concentration of people directly instead of relying on
[10:58] proxies such as built up areas or night lights lights but not not but last not least the
[11:05] method is independent from the presence of amenities as it was designed to monitor access to services and
[11:12] infrastructures in areas with different population densities and sizes the degree of urbanization workflow starts from a population census as input
[11:24] which details the number of inhabitants per census unit census units are usually administrative or statistical subdivisions of the
[11:33] territory of interest interest stored as polygons in a vector data set like a shapefile the population must be an attribute of each census unit
[11:44] for the degree of urbanization to work in some cases population counts may refer to household point locations
[11:52] forming geocodes or population registers the population within a sensors unit is distributed or aggregated on a grid made
[12:01] of squared cells typically one kilometer large that covers the extent of all census units the methods enable
[12:11] classifying cells by degree of urbanization according to their population density and size the degree of urbanization is then
[12:19] traced back to the initial territorial units based on the grid level classification the global human settlement layer team
[12:30] applies this method on a global scale and in various epochs to obtain chronological worldwide coverage of the
[12:37] degree of urbanization to do so it starts from global satellite imagery and uses artificial intelligence to mark down built up surface
[12:47] census data on population is available from this official state level surveying campaigns for given administrative boundaries boundaries harmonized by researchers at the center
[12:57] for international earth science information network seasons in the united states this population is allocated to grid cells into proportion to their share of
[13:07] built up area population density amount and distribution are the basic criteria to subdivide the territory into settlement
[13:15] classes by degree of urbanization the result of such work is a set of free and open data with global coverage that
[13:25] you can look at and download online in particular in particular such data can be useful to support your
[13:32] calculation or to cross check and compare your results against a consolidated data set at this link you will find the built up
[13:41] surface under the ghs build abbreviation the population grid based on csin data as ghs pop and the pres respective settlement
[13:51] classification grid as ghs s mod and the classification of global administrative areas ghs dark in addition you will find all derived
[14:02] data sets such as the urban center database the ucdb and the functional urban areas ghs four the ghsl team produces different maps of
[14:13] buildup for different applications the ghs build is the most used built-up product product in its latest latest release it covers
[14:21] the entire world with images taken in 2018 2018 having a resolution of 10 meters the main product part of ghs build is
[14:32] the built up fraction which reports the share of build up surface per each 10 meter grid cells in 2018 on a scale from
[14:40] 0 to 1 to 1. as by product the morphological classification is a 10 meter raster that offers the subdivision of built up into
[14:50] residential and non-residential categories plus some vegetation categories categories in addition the multi-temporal rosters record the epoch during which build-up
[15:01] surface was first detected in each 10 meter grid cell other build up fraction layers are available for older epochs but but are
[15:10] only in aggregated format at coarser resolutions like 100 meters or one kilometer kilometer for the application of the degree of
[15:20] urbanization it is best to choose the built up dataset with the highest resolution matching the most recent
[15:26] available sensors data now that you have seen an overview of the degree of urbanization method you are certainly wondering how it can be
[15:36] applied to your own data the ghsl team has designed a set of tools to accompany each phase of the
[15:44] calculation process in in particular the pop2g tool helps you in distributing population data from census units to a population
[15:53] grid grid in case you have your own population grid already which is projected according to your national standards the
[16:01] pop2warp tool can help you it will translate the grid to a worldwide worldwide projection which is the one used within
[16:11] the degree of urbanization framework for international comparisons without going through bulky resampling operations the dac tool allows converting the
[16:21] population grid to settlement grid by classifying grid cells according to population density and size to achieve the stage 1 of the degree of
[16:29] urbanization urbanization finally the do took tool uses such classified grids to assign a degree of urbanization to the initial territorial
[16:39] units holding census information completing the stage 2 of the degree of urbanization urbanization let's now see together how each tool
[16:47] works in more detail we start with the pop2g tool to create population grids for the degree of
[16:57] urbanization urbanization the pop2g tool requires two inputs a sensor vector map of the area of interest typically a polygon shape and a
[17:09] built up surface raster relative to the same area of interest you will have to provide the first one
[17:16] containing the population counts for all units units in the area of interest the second one if not produced specifically for the
[17:23] area of interest is available from the ghsl web portal when sensors data is is a collection of
[17:30] household points a buildup surface is not necessary in case of a sensors based on administrative units the pop2g tool
[17:43] will match the registered population with the territorial distribution of the build-up surface this process produces a one kilometer
[17:52] resolution grid in an equal area projection compliant with international standards and other fine finer scale grids whenever possible
[18:02] the cell size of the output population grid should not be smaller than the one in the input buildup layer
[18:09] as this would not add any detail in case of the sensors based on geocoded points the tool will perform the
[18:18] aggregation of points to create a raster grid grid at the necessary resolution of one kilometer kilometer the logic behind this procedure is the
[18:26] preservation of the total population volume to comply with the original sensors the degree of urbanization is a method
[18:37] to capture the full spectrum of settlements from the hamlet to the city and consists of two levels
[18:44] the first and main level divides the territory into three classes urban centers urban clusters and rural grid
[18:51] cells cells as such while most of the national standards are based on a binary definition of either rural or urban
[18:58] territory the degree of urbanization introduces a third intermediate class urban areas are defined as urban centres plus urban clusters however the use of
[19:11] all three classes helps to capture more details because urban clusters differ significantly from both urban centers and rural grid cells
[19:21] a second level provides more detail by splitting urban clusters into dense and semi-dense plus suburban and peri-urban
[19:29] grid cells rural grid cells are split into rural clusters clusters low and very low density rural grid
[19:37] cells if you are wondering how all these datasets datasets and settlement types look like in this slide you have
[19:48] an example from satellite imagery this only gives the flavor of the most evident differences between classes for example see the decreasing the
[19:58] concentration of people from the urban center grid cell to the suburban grid in the urban art area
[20:05] among rural areas you can identify the isolated settlement in the rural cluster grid cell and scattered distribution in
[20:12] low density rural grid cells and the remoteness of very low density rural grid cells talking practically what you will need
[20:22] to run the degree of urbanization grid tool duck is again the population grid as issued from the pop2g tool and the
[20:31] build-up grid with the same resolution and the same extent the built-up grid is needed only if the
[20:38] 50 built up density option is selected in case you don't have the version of this dataset you can always download it
[20:47] from the ghsl portal another input that can be useful useful is the land grid it is a continuous raster holding values
[20:58] in a range from 0 for water to 100 for landmass issued from land pixel aggregation a default version of this raster is
[21:07] pre-loaded in the tool but at best you can provide your own in case available in short the tool will analyze the
[21:17] population grid and build up input to take care of the classif of classifying all the raster cells based
[21:24] on population size and density criteria here you see an example of a real case scenario namely the classification of
[21:34] the city of cork in ireland you can see how the urban center is rather compact in spite of the conspicuous spread of
[21:42] the population and how a system of satellite urban clusters emerges from large rural hinterland now we want to trace the degree of
[21:53] urbanization back to the territorial unions unions let's see what those are in an example this is the french region of corsica
[22:03] split hierarchically into several territories corresponding to given administrative competences all such levels could be used as source
[22:13] of territorial units as they include include close defined boundaries administrative boundaries at various levels are available for free for
[22:23] non-commercial uses from the database of global administrative areas linked here here which covers the entire world however territorial unions are not
[22:36] constrained to to be administrative boundaries they could also be statistical units used for censuses like the theon lines
[22:44] you see here on the corsica map or postal code areas or any other exhaustive and coherent subdivision of
[22:52] geographic space the general recommendation is to use the smallest spatial units for which regular data can be produced to compile
[23:01] statistics by degree of urbanization along with the vector of the territorial units there is other necessary input to
[23:11] the degree of urbanization territorial units classifier the d you took one is the population grid and the other
[23:19] the degree of urbanization grid produced earlier earlier to facilitate the classification process the degree of urbanization grid should
[23:27] be at the standard resolution of one square kilometer once the computation is launched the software will rasterize the territorial
[23:37] unit boundaries and match them with the degree of urbanization grid then it will calculate the proportion of
[23:43] the unit's population in each degree of urbanization class or the proportion of unit surface in case there is no
[23:50] population population the algorithm assigns the class that corresponds to a given mix of population or surface within the unit
[23:59] we could visualize the possible shares of population or surface by degrowth urbanization using urbanization classes on a plot the
[24:08] possible combinations determine the attribution of a certain class to a given unit by majority rules the first level classification is
[24:17] carried out first then second level subclasses are attributed in the second phase under the first level classification
[24:26] territorial units are classified as cities if they have at least 50 percent of the population residing in underlying
[24:34] urban center grid cells rural areas come from territory territorial units having more than 50 percent in rural rural grid cells within
[24:45] their boundaries towns and semi-dense areas result from territorial units having less than 50 percent of population living in urban
[24:55] centers and no more than 50 percent of population living in rural grid cells irrespectively from the population in
[25:03] urban urban cluster grid cells the same logic can be applied to surface in unpopulated areas under the second level classification
[25:15] the first level class is split based on relative majority of inhabitants the assigned class corresponds to one to the
[25:22] one with the highest share of population a particular case occurs in towns and semi-dense areas when a first comparison
[25:31] is performed between total population living in dense or semi-dense urban clusters and population living in suburban and peri-urban grid cells
[25:42] a territorial unit is classified as suburban or peri-urban if the population living in such class is at least 50 within urban
[25:55] clusters clusters conversely the unit is classified as dense if the relative population is greater or equal to the one in
[26:04] semi-dense urban clusters or vice versa by looking at the example of the city of corgan island again you can see how the
[26:12] urban center matches the respective territorial unit pretty well but suburban polygons appear much larger compared to the extent of the underlying
[26:22] grid cells classified accordingly this is a consequence of their size in relation to the population distribution the degree of urbanization grids can be
[26:36] easily overlaid in other raster datasets like gridded air pollutant emission datasets datasets this way researchers can perform spatial
[26:44] statistics of different kind in this work carbon dioxide emissions observed in various geographic areas of the planet are broken down by degree of
[26:55] urbanization class no wonder that urban centers are the ones that increase more drastically their emission between 1970
[27:04] and 2015 with the exception of europe similar similar zonal statistics can be done on night time lights by degree of
[27:13] urbanization to identify inequalities with regard to the sustainable cities and communities sdg goal 11 dhsl data classified through the degree of
[27:26] urbanization allowed to estimate the indicator 1131 called land use efficiency efficiency this indicator assesses the ratio between the rain rate and build up area
[27:37] divided by the the change rate in population across time epochs on a logarithmic scale the degree of urbanization is
[27:46] fundamental to delineate urban areas as the areas of interest as such settlements where population growth rate is greater than the pace of
[27:56] built up area expansion lie in the range between 0 and 1. settlements in the class are respectively urban centers in africa
[28:06] settlements with values outside the 01 range indicate faster build-up area expansion compared to population change like in europe and asia
[28:17] sometimes the ratio is negative meaning continuous buildup area expansion and population decline this trajectory is typical for eastern europe and japan
[28:29] and parts of central china urban centers have the most efficient trajectory both in towns and semi-dense areas as well as in rural areas
[28:40] built up surface expand at a faster rate compared to the rate of their population growth another another beyond population change and build up
[28:57] change urban centers from a grid based degree of urbanization classification can be crossed with continuous exposure data on certain characters
[29:06] categories of disaster risk here you see the risk categories for a seismic hazard calculated in each urban
[29:14] centers centers once exposed settlements are identified population and buildup area exposure statistics can be calculated for example
[29:22] based on the ghsl data we estimate that the large cities of the developing world exposed to earthquakes are growing
[29:29] faster than global average posing challenges to resilient urban futures another typical continuous variable is the frequently used temperature
[29:43] in this plot you see the temperature changes in urban centers since 1990 with clear peaks in eastern europe and the
[29:51] middle east at global level more than 400 million people live in urban centers that experience the temperature change
[29:59] of more than 0.8 degrees celsius between 1990 and 2015. such changes affect large populations and cause considerable
[30:11] stress to the health systems delineation of urban centers is useful for combining other data from satellite sources like the normalized difference
[30:24] vegetation index also known as ndvi to monitor greenness for example sdg 1162 aims to quantify green open spaces
[30:35] accessible by inhabitants an overall trend has increased often green green increased greenness between 1990 and 2014 is observed in most urban centres
[30:46] across the world the effect of greenness greening is found also for most of the 32 world megacities
[30:53] megacities nature-based solution and ecological renovation can help urban centers coping with climate change and build resilience now let's have a look at the application
[31:06] of the degree of urbanization for more for monitoring and assessing the sustainable development goals combining combining it with official statistics
[31:16] the classification of settlements can be matched matched with living condition surveys to break down well-being indexes by degree of
[31:24] urbanization in the plot here we are focusing on access to food and we represent statistics and food
[31:32] insecurity from the food and agriculture organization of the united nations on territorial subsets for selected countries rural areas are often found to be
[31:43] significantly more food insecure than cities but not everywhere focusing on focusing on access to health cares in many countries
[31:55] many countries are covered by the demographic and health service dhs infant infant mortality is notably higher in rural
[32:03] areas than in cities in a few countries cities had a higher infant mortality rate but the difference tended to be
[32:10] smaller now let's use the possible application of an effective classification of territorial units the classification of territorial units
[32:22] by degree of urbanization has two principal objectives primarily to relate available statistics like demographic and health surveys
[32:31] statistics on labor or housing to a degree of urbanization classification namely urban or rural and second to account urban and rural
[32:41] populations for administrative areas both applications would harmonize nationally collected statistics to a common urban rural classification of
[32:50] territorial units useful for international statistical comparison comparison as recommended by the united nations statistical commission for example the 2008 to 18 census of
[33:03] colombia was used to apply the degree of urbanization and to disaggregate the statistics of services by degree of
[33:10] urbanization like access to electricity fresh water and internet connectivity and then among others from our analysis 90
[33:21] 97.1 percent of the households in colombia have access to fresh water but this share decreases to 54
[33:29] when moving from urban to the low density rural grid cells sdg reporting becomes easier and more informative with such classification
[33:38] tools now it's time to recap in this presentation you learn how the degree of urbanization is relevant to
[33:50] sustainable development goals to assess and monitor key indicators as well as to envision development policies and strategies we looked at the global data
[34:01] sets provided freely online for your analysis and we discovered a common methodology for classifying settlements according to the degree of urbanization
[34:11] which was endorsed by several international organizations we explored the free toolkit available to compute the degree of urbanization
[34:19] and how to use it and apply it successfully for policy design if you need support remember to check
[34:28] the ghsl website which contains a set of handy user guides for each of the presented tools a full manual detailing
[34:35] the methods and the atlas of the human planet series with plenty of application examples with different thematic four
[34:42] key each year and don't forget to check our online training selection tool which provides more details of the methodology
[34:51] thank you for listening thank you and thank you everyone for being here today my name is cascade
[35:11] toholsky i'm a postdoctoral research scientist at the center for international earth science information network network which is a part of the columbia climate
[35:20] school at columbia university and i work closely with the national nasa associate economic data and application center one
[35:27] of nasa's dax and i'm really excited to be here today to talk about applications of the eo
[35:34] toolkit to measure and analyze sustainable development goals so as i said i am a postdoc at season
[35:43] i'm a human environmental geographer my research focuses on extreme heat exposure climate change and food security largely outside of the
[35:52] north american and european context my goal as a scientist is to inform adaptation strategies that reduce the
[35:59] harmful and inequal impacts of extreme heat events and i received my phd in geography from the university of
[36:07] california santa barbara in 2020 so in this webinar i'm going to do an uh provide an introduction to pop grid and
[36:19] if we hold on one moment i'll explain what pop grid is and the importance of comparison of
[36:25] gridded population data sets to the sustainable development goals i will show how gridded population data sets have been used
[36:34] to evaluate sustainable development goal indicator indicator 11.11 or adequate housing and how earth observation data can be
[36:44] used to inform slum or deprivation areas or deprived habitat housing in urban settlements settlements i will then
[36:53] provide an overview of the pop grid website and the pop grid viewer and then i will briefly
[37:00] demonstrate a new data set that is an alpha release or it's not formally released by nasa cdac but it will be
[37:08] called the pop grid compare data set for more advanced users with background and geographic information systems or scripting language like
[37:17] python or r so the united nations sustainability development goals uh have been talked about extensively throughout these
[37:28] webinars webinars [Music] [Music] are comprehensive there are 17 and this toolkit really focuses on sustainable development goal 11
[37:38] in terms of uh understanding or ensuring more sustainable urban populations across the face of the planet and with each sustainable bell pardon me
[37:48] with each sustainable development goal there are target indicator indicators and for sdg 11 most of the indicators require a
[37:58] population input into parameter to track whether a country is making project progress towards a specific part of sdg
[38:08] 11. 11. so as you can imagine it's really important that we have the best available data for urban population
[38:16] distributions as well as the location and boundaries of urban settlements and urban infrastructure so again sustainable development goal 11
[38:29] is to make sure cities and human settlements settlements are inclusive safe resilient and sustainable so today i will present
[38:41] efforts to use gridded population data sets to focus on std target 11 0.1 and target 11.5 and then for target
[38:51] 11.1 the specific indicator or metric used to track stg 11.1 is 11.11 the proportion of urban populations
[39:01] living in slums informal sediments or inadequate housing so again as you can imagine we would need a
[39:09] count of people living in informal settlements or slums across the face of the planet for us to be able to track
[39:16] this indicator to achieve the target 11.1 second i will discuss um how graded population data sets can be used for
[39:26] target 11.5 the target 11.5 is by 2030 significantly reduced the number of deaths and the number of people affected and sus pardon
[39:36] me substantially decreased direct economic loss relative to global gross domestic product caused by disasters including weather related disasters
[39:45] with a focus on protecting the poor and people in vulnerable situations so in some or in short sdg 11.5 is really to
[39:54] reduce the number of people who are harmed by disaster events sustainable apartment gridded documented population products can be used
[40:06] to estimate two sdg indicators related to scg target 11.5 11.5 11 pardon me indicator 11.51 is the
[40:16] number of deaths missing person or directly people uh pardon me directly affected persons attributed to disasters per 100 000
[40:24] people so for a given disaster event or a given hazard the goal is to reduce the the number of people impacted relative
[40:34] to the total population second target is 11.5.2 focuses on economic loss so direct economic loss in relation to global gdp
[40:46] damage to critical infrastructure and number of disrupt uh disruptions to basic services attributed to disasters here here it's really important to have uh
[40:56] accurate infrastructure data as well as ways to assess economic damages related to any disaster or hazard so i know thomas presented a bit on one
[41:10] gridded population data set but i'm going to just re-emphasize what gridded population data sets are and walk you through several of the
[41:21] gridded gridded population data sets produced by different teams across the planet and ways that you can compare those gridded
[41:28] population data sets so first again to review what graded population data sets are essentially it is a lattice or a grid
[41:39] laid over the surface of the planet and then each cell in the grid gets a population count there are several
[41:45] gridded population data sets in existence and several products identify urban versus rural settlement types this screenshot right here is from the
[41:56] pop grid data viewer viewer with the url below i will provide a demonstration of the pop grid data viewer in a moment
[42:05] and as you can see there are four different graded population data sets on the web page in this example
[42:12] the graded population of the world version 4 world pop 2020 land scan 2018 and the high resolution
[42:20] settlement layer 2015 count as you can see for this geography the number of people living in each good
[42:28] cell varies quite substantially across these four gridded population data sets this is because each populate gridded population data set
[42:39] generally uses a different modeling approach approach so i'm going to walk through two general approaches used by different teams who
[42:47] create gridded population data but again remember gridded population data are a lattice or grid and each grid cell is assigned a
[42:56] population those population estimates are derived by combining remote sense earth observation satellite data and sometimes gis data to develop a
[43:06] relationship between census-derived population population counts and remote sense information and then computer algorithms are used to allocate populations based on that
[43:18] relationship in areas where we might have earth observation data but not good census information as i said there are two general approach
[43:29] in terms of measuring sustainable or pardon me in terms of measuring gridded population data estimates there is a top down approach
[43:39] and a bottom-up approach the top-down approach uses a large area so for example in the united states we
[43:46] might have a large census area account for say a state and then we use earth observation data
[43:52] to identify everywhere within that large census area estimation that we think people exist then a computer algorithm proportionally
[44:01] allocates allocates people to grid cells within that large area area to derive the location and the population counts within it the
[44:11] settlement grid the bottom-up approach uses high-resolution micro-censuses to get a good estimate of a small geographic area similarly computer
[44:23] algorithms derive the relationship between that small area and earth observation and sometimes gis information to then go out
[44:34] and tessellate populations or estimate populations outside of that census area based on the relationship between the earth observational data and the high
[44:43] resolution census both these approaches have their advantages and their disadvantages and data sets that use these approach can be used to
[44:53] estimate the proportion of people living in slums and portal sediments or inadequate housing related to tracking sustainable development goal 11.1.1
[45:06] but as i mentioned because these debt gridded population data sets use different modeling approaches they estimate where people
[45:15] live live differently or they map where people live in different ways so right here we have a map from a paper i publish in
[45:22] sustainability recently of nepal the colors indicate whether or not a gridded population data sets a data set agree
[45:32] if a given pixel is habited or not so so dark blue pixels all five gridded population datasets used in this
[45:42] analysis agree that that pixel has at least one or more person living in it as you can tell especially in rural areas
[45:50] and as you approach the himalaya mountain range in northern nepal there's disagreement about whether a gridded population data whether the
[45:58] gridded population datasets agree if a pixel is inhabited or not in terms of mapping scg 11.1.1 a recent paper by my colleague dana
[46:10] thompson used different graded population data sets in this case nine of them to measure the number of people living in slum
[46:22] slums or informal set of settlements across nine areas uh two in nigeria and i believe one in kenya and they found
[46:30] that no matter which gridded population data set employed these gridded population data sets greatly underestimate the number of
[46:38] people living in informal settlements in the three case studies the high resolution settlement layer tend to capture more population
[46:47] you can see here that the coarse grain data sets where the pixels are only available say at one kilometer like
[46:53] landscan which is the cell in the middle earth which is the panel in the middle of this plot
[46:59] tend to just assign one big population count for a very small area and thus may not be appropriate to try to estimate
[47:07] slum areas uh uh necessary for sustainable development goal 11.1 whereas finer resolution datasets like hrsl may be more
[47:17] appropriate to track scg 11.1.1 because they have the fine resolution allocation of population to capture the spatial variation of
[47:28] human population within a city or in formal settlements similarly if we apply this uh compare the estimates of graded population data
[47:41] sets for 11.5.1 or or our efforts to reduce the number of deaths deaths or missing person directly affected
[47:51] by a disaster scenario the populated population data sets vary fairly substantially this example again is from nepal and the earthquake
[48:00] that struck nepal in 2015. when we sum up the number of people impacted impacted by the intensity of the earthquake we
[48:12] get fairly substantially different population data set our population estimates estimates so right here we have a graph
[48:20] divided by uh intensity where we sum up the number of people impacted for five different graded population
[48:27] data sets and then we assign whether those populations were rural or urban based on auxiliary remote sense
[48:34] information and you can see a fair amount of variation this is really important not just for tracking
[48:40] stg stg 11.5.1 but also disaster risk reduction and rapid response because practitioners need accurate or at least estimations
[48:52] of the number of people impacted by a hazard and having a range can help facilitate decision makers
[48:59] help decision makers understand what kind of resources needed to be deployed in a rapid rest upon scenario
[49:06] like the 2015 earthquake i've overviewed how there are wide-ranging wide-ranging population pardon me there are several gridded population data sets for
[49:18] practitioners to use and that these data sets often provide different population estimates related to the sustainable development goals nonetheless all of
[49:27] these data sets are very useful and the scholars and scientists who have built these data sets have come together to
[49:34] work collaboratively on the pop grid data collaborative which provides an overview of the modeling techniques the input data as well as an ability to
[49:43] compare these data sets over space and time this effort has been supported by the columbia climate school nasa scsn trends
[49:52] and the bill and melinda gates foundation foundation i'm going to now provide a brief tutorial tutorial to walk through the pop grid data
[50:00] collaborative website so so if we go to www.popgrid.org we get the popular popular data collaboratives website we have a
[50:22] list of the data providers who produce gridded population data sets you can link to their information you can learn more about pop grid about
[50:30] the evaluations tab the news often provides frequent updates of new scientific manuscripts and applications of creative population data
[50:41] and then the explore data table or the explore data tab is really important for understanding the various graded
[50:48] population data sets and how they're built so if you click on the input layers you'll see the gis and remote sensor information
[50:56] that goes into building a given pop grid population data set second if you click on the pop grid
[51:04] mapping tool you will be piped to nasa cdx top grid viewer this is from this is the screenshot that
[51:12] i had up at the beginning of my presentation presentation you'll see uh in the four panel viewer
[51:17] that you're able to fly around the planet planet and zoom in on different geographies to see how these different uh graded
[51:26] population data sets estimate population over the surface of the planet if you click on a pixel uh you will get a population count um
[51:37] for that value integrated viewer so right there where i clicked on in afghanistan ghs says there's no people
[51:43] world pop estimates about 80 people land scan says zero and gpw uh estimates 429 gpw just as a caveat is the only
[51:54] unmodeled population data set that means that from a top down per approach populations are just equally distributed over the finest scale
[52:04] geography so they don't account for anything like mountain ranges or lake beds and it's just an equal allocation
[52:11] of population within a given census boundary if you switch modes to comparison viewer the interface will refresh
[52:25] refresh and you can actually um do area estimates of uh different different across the different population data
[52:38] sets apologies this takes a minute to load this help function is really useful to understand how you can do area
[52:46] estimations to count populations across the data sets so you have how to draw a polygon how to edit a polygon
[52:54] how to draw rectangles with little video tutorials how to edit rectangles and how to delete them so i'm going to close this window oops
[53:06] excuse me i'm going to close this window so you can fly around you can load different layers
[53:16] so if i unclick gpw version 4 there's nothing there now we have the ghs pop count and when you're in this mode you can get
[53:28] an area estimation in real time this will take a moment to load where on the back end
[53:43] uh seasoned servers are counting the number of people in that polygon i just or that rectangle i just drew
[53:50] and when this is done loading we'll be able to see the population counts apologies my internet is slow today
[54:02] and so you can similar to that graph i put up for nepal you can estimate or get
[54:07] different area estimations of population counts and then you can export this either as an image or as a csv file for
[54:15] your analysis needs similarly i'm not going to do this in my demonstration today but you can upload
[54:21] shape files as long as they're zipped and contain all the auxiliary needed files to produce area estimates
[54:31] the last thing i'll present today is for more advanced users pot gritted population data sets tend to come with different geographic
[54:42] coordination uh quarter j pardon me different geographic product projections areas um and because of that they're sometimes
[54:52] misaligned a new product that season will be releasing is pop grid compare where all the graded population data
[54:59] sets are matched to a common grid for end users to do more advanced calculations or automate um
[55:08] area estimates so right now the yellow areas are just an estimation based on modus of where urban and rural
[55:14] population or settlements exist but if we click through here this is global human settlement layer for 2015 the colors are log scale
[55:26] population counts from one to ten thousand if we overlay world pop you have uh the world pop estimates again in the
[55:37] same colors so these stacked rasters that are in a native or a common reference geographic reference system or
[55:43] coordinate system in a common grid will make doing rapid analysis of population area accounts for any uh practitioner
[55:52] who is familiar with geographic information systems or geospatial scripting and say are python much easier than just the native pop grid viewer
[56:06] these are the references from my talk today please feel free to reach out to me my email address is cascade
[56:13] season.columbia.edu i'm happy to speak with anyone who is here today at the webinar or later on anyone watching it
[56:21] i'm more than happy to discuss which graded population data set or data sets may be best for your uses and even help
[56:29] you develop your analysis thank you for your time really appreciate it as a reminder here is the contact
[56:43] information for myself thomas and cascade you can find all the information about the training including links to download
[56:51] the materials from the training website shown here and do please check out the many other trainings we have available on the rced
[56:59] website listed here we also encourage you to follow us on twitter to stay informed about upcoming trainings
[57:07] trainings as well as sdg related events and activities as part of part three on february 10th we will cover a number of use cases from
[57:21] the national and city level demonstrating how city and national level governments are leveraging earth observations to calculate
[57:31] calculate sdg 11 indicators such as sustainable urbanization open spaces for public use and mean on your level to find
[57:40] particulate matter in cities thank you very much and we will now go to our q a session
[57:51] great thanks again everyone so um we will now share uh the document where we can look fantastic
[58:00] so so we have your questions and we've already started providing some responses uh so we look with we'll try to address all
[58:08] questions today but if we don't have a chance to get to some of the questions we'll make sure
[58:13] that that we follow up and provide responses to these questions and then share them uh with you along with all other training
[58:22] material so let's go to question one how do you normalize unified territorial units between different countries which
[58:32] may have very different names to call their administrational units and so there is an answer already there
[58:40] we can keep the original administrative units the only requirement is that the administrative information covers the full territory of analysis
[58:50] how does your model deal with human mobility such as moving from one city to another or from different census units
[58:57] within the same city this is particularly challenging in developing countries which are experiencing a fast urbanization rate
[59:06] while sensors are taking place every uh several years so perhaps you can go to our colleagues at the joint research center pietro or
[59:17] thomas would one of you like to respond to that yes uh thank you i can i can uh take up this this
[59:25] question so this is this is really one of the strong limitations of the approaches and and all the data we're
[59:31] dealing with here also the uh with what was uh presented by a cascade all the data on population that we are making
[59:39] use of are relying on sensors and the best of cases this is done every ten years so if
[59:46] larger population movements happening in between they are not covered so we have to try to find an
[59:53] other solution one option is to to do micro sensors in those areas where we had those changes and try to project this into
[1:00:02] larger areas or the entire countries but this is of course creating then more instability in the system so um it's not
[1:00:11] obvious to to get out such migration effects and that's also a big problem in developing countries where
[1:00:18] very often the census is not taking place so frequently so there are there's a number of countries where we
[1:00:26] didn't have census for more than 20 years thank you thomas the following question was the elaboration of slide 35 on access to
[1:00:37] green green in urban centers part of a publication is it possible to share the reference and so we have already included the
[1:00:46] reference reference there there uh show you and uh i think yep so you can look that up we'll go to the
[1:00:57] following question can these rasters be incorporated with openstreetmap uh to perform service area analysis for transit transit systems
[1:01:08] systems so so we have a response here that yes indeed the degree of urbanization is a geo-referenced product and assassin can
[1:01:16] be combined with openstreetmap data however it is important to remember that the degree of urbanization is produced
[1:01:24] always at a special resolution of one square kilometer and so this can limit some applications that are
[1:01:31] focused at a very local level we will go to the following question is it possible to classify formal
[1:01:42] settlements and let me invite colleagues from the panel to take this on so let's let's go back to you thomas first and
[1:01:50] then perhaps if someone else from the panel wants to contribute as well okay thank you um yes of course um
[1:01:58] this this degree of urbanization is made to classify entire settlements uh into the different classes of cities
[1:02:08] cities towns villages etc it does not allow really to differentiate with different usages within a city so
[1:02:19] informal settlements slums versus formal residential areas or industrial complexes this is not the task of this method it is just looking at the
[1:02:30] population densities of course population densities in slum areas are often very high but then they they are
[1:02:38] what happens is they would be included mostly into the the dense dense cities urban center of this
[1:02:47] classification but but not more um i put there a reference to two other remote sensing techniques that can be
[1:02:56] used with the same input data that we use for the build up mapping then to come up with some classification of
[1:03:04] informal settlements and so on thank you we we move to the next question does the eo toolkit also provide the platform to
[1:03:17] customize classification of satellite data using python or r libraries so as as noted here so the toolkit is a
[1:03:26] knowledge resource so it provides a number of tools but can then be accessed so it points to the original locations
[1:03:34] of the tools where then the data can be found visualized and analyzed and so we do invite you to investigate and see
[1:03:45] um um investigate each of the tools and see whether whether um um this is applicable what you're
[1:03:53] requesting here and so we have an example here the um global human settlement layer tools are mostly provided as compile programs
[1:04:01] but we will also start providing source codes in the future that's from our joint research center colleagues
[1:04:10] let's go to the following question question seven so which would be the most appropriate pop grid data sets for
[1:04:17] local and regional analysis cascade would you like to take this please please yeah i um put two links in there um
[1:04:28] but the the consensus right now is that it really depends on your specific use case and the question that you're uh chasing
[1:04:37] um so i put two papers and i'm gonna add one more in there that really walk through the different modeling
[1:04:42] techniques and provide much more detail overview of helping end users choose which graded population data set may be
[1:04:49] best for them so i highly recommend the snow leaving no one left off the map guide and the second recommendation
[1:04:58] depending on your use case is to calculate your population estimate with a few of the greater population data
[1:05:05] sets so that you have a range estimation um um [Music] [Music] but really it's it's uh use
[1:05:13] you specific unfortunately thank you cascade and i think i i will also add a link to a story map that is
[1:05:24] based on one of the publication by dana thompson and all and i think that may also be
[1:05:31] an additional um um useful resource so thank you for that um um wonderful let's go to the next question
[1:05:41] um in assessing urban heat island effect in urban areas be classified as potential heat islands is urban heat island effect an urban
[1:05:57] disaster disaster would somebody from the panel like to take this answer i start again because i put in
[1:06:07] there what is written written there then the others can can come in i i gave gave here the example of europe where when
[1:06:17] they pass with the number of heat waves that that were in those respective years killing more people uh than than other natural
[1:06:25] disasters in the country so i remember a strong heat wave in france and central europe so so most of the people were dying in urban
[1:06:37] areas because people didn't have access to green spaces it was difficult for elderly people to to get to shaded places etc so i think
[1:06:47] it is definitely an urban disaster and as such can be addressed but um i found out that
[1:06:55] the slums are per se heat island so the heat islands i think are created in to a larger extent and then it
[1:07:02] depends also a lot on on the construction construction of uh slum areas in formal areas and the location where they are but
[1:07:12] i think i heard dennis maybe you can come in here thank you thomas let's go to dennis or
[1:07:22] cascade whoever else wants to contribute please i can this is cascade here um so in terms of the urban heat island
[1:07:32] effect uh in terms of uh measuring it within cities or on the planet i'll post uh two data sets that
[1:07:39] have or one data set that has attempted to do this but in terms of heat health impacts
[1:07:45] there are no two meter air temperature data sets for the planet that can resolve that at the
[1:07:51] neighborhood scale and it's something that i know nasa the world meteorological organization and others are working on
[1:08:01] using new satellites to measure two meter air temperatures of finer spatial resolutions but it really is a difficult challenge for which we
[1:08:09] don't have the data to measure both both some area mapping at a global scale and two meter temperature and humidity
[1:08:19] combinations okay thank you cascade we will go to the following question uh i would like to know if we can use hexagons as
[1:08:35] units for analyzing urban areas and territories within the tools mentioned today today do they have to be one kilometer area is
[1:08:44] the question this is an interesting proposal that we were discussing also when developing the method i think this
[1:08:50] is the response was coming from our uh jrc colleagues so perhaps one of you would like to take this
[1:08:59] yes yes i can jump in again yeah indeed we would like to still experiment with uh using hexagons from from the theory
[1:09:11] and the mathematics behind uh it's indeed important to stick to the one square kilometer resolution but it
[1:09:17] doesn't have to be square as we are using now unless we most of us are used to it could also be
[1:09:24] hexagons hexagons in the end we didn't pursue this roads because working with hexagons is still still not so so widely
[1:09:36] widely used and we want to to not scare people by coming up with such more complicated complex methods to
[1:09:46] work with but um i think it has a big potential because if you look at our urban areas based on one kilometer
[1:09:53] square square grids now they they come very edgy so if you have hexagons uh it may look much
[1:10:03] much more much closer to reality thank you thomas we can go to the following question under types of built up
[1:10:18] slide number 18 what criteria is used to classify the built-up areas into residential and non-residential some cities have a substantial amount of
[1:10:27] urban population in informal settlements slums slums others hardly have defined urban planning and you find residential factories warehouses and other
[1:10:38] commercial entities were found in the same neighborhood and so we have an answer here but the classification of residential
[1:10:47] versus non-residential areas is mostly based on the size of building complexes it is mapping mostly larger industrial
[1:10:55] buildings and complexes smaller non-residential areas might not be detected anybody else wants to to complement or add to this sensor
[1:11:09] yes rg i can i can we are aware of those limitations so that what was described earlier this
[1:11:18] this mix of residential small factories some shops these settings are currently not covered and it would be
[1:11:28] classified classified by this approach as residential areas but uh here it's important to understand also our our use case for this because this
[1:11:38] built up data are then used for the population disirrigation and what we want to avoid is that we put a
[1:11:45] lot of residential population in those industrial areas so while it might still be okay that they live in that there's
[1:11:53] people distributed in the buildings in this mixed environment we want to avoid that there's a lot of residential
[1:12:00] population put in industrial buildings where they usually don't live so that is where we already quite happy that we came up with a
[1:12:09] stable global approach to come up at least with the large non-residential areas great thank you we'll go to the next
[1:12:22] question question question number eleven how demanding is the pop grid viewer in terms of data transfer speed or other pc requirements
[1:12:34] cascade would you like to to respond to that please yes thank you um and generally it's very
[1:12:40] fast um and it works across you know slow and fast bandwidth internet connections um because mostly calculate or all the
[1:12:49] calculations happen on the back end right now if you want to upload a custom geography right i believe it can only
[1:12:56] handle one polygon in your shapefile um um but more features we expect to add more features in the future thank you
[1:13:06] great thank you a couple of additional questions uh so the next question is how can i use this
[1:13:14] mapping tool for urban liveability mapping at the block or town level level and i suspect that they are referring to to
[1:13:26] the pop criteria but potentially a different mapping tool as well so can cascade or thomas one of you take that
[1:13:34] question please cascade it for referring to the proper viewer um right now the pop grid viewer uh
[1:13:47] primarily just contains or only contains population density estimates um which do depending on the locale and question
[1:13:56] relate to livability um but in terms of like pop uh block level mapping and comparative mapping uh
[1:14:05] uh that's not possible because the gridded population data sets in the pop grid viewer tend to be at uh one kilometer
[1:14:11] spatial resolution which is uh fairly course for black global mapping however i think thomas can speak to this
[1:14:17] regarding the global human settlement layer which has a lot of auxiliary data products with it yeah thank you well i think
[1:14:26] to to come up with information about urban livability especially at the block and town level it is important to use
[1:14:36] the information that we are providing basically as only one ingredient so our core core ingredients are the
[1:14:47] the the build up areas and the population but for for livability you may want to combine it
[1:14:54] then with other information so again from earth observation you can derive information about greenness so if you combine those those
[1:15:02] three already you can start analysis like how many people are living in the vicinity of larger green green areas in
[1:15:11] the city so that could be one example of how how things things could be done to come up with urban
[1:15:18] liveability liveability the important thing really is is to combine different data sets and not only use earth observation data and stick to
[1:15:27] that but see also if there is other information available may be coming from the sensors that can help you to to come up with
[1:15:36] some indicators of relivability great thank you both let's go to question 13. 13. even though there is a rapid increase of
[1:15:54] population in the developing countries which gives rise to so many challenges to the population such as unemployment
[1:16:01] high depends on agriculture in which way should be appropriate to enhance the problems problems using remote sensing and gis
[1:16:18] rg i understand this question how we can support solving those problems uh using remote sending in gis
[1:16:27] and um if that is uh the question then i think think i've basically previously given already the answer that
[1:16:36] we can extract a lot of information from earth observation data on on the the size and density of houses on
[1:16:45] on the greenness greenness on the the road network etc but that should then also be combined with
[1:16:54] other other openly information that that can help solve certain certain issues so i think we we still underexploit a lot the the value
[1:17:06] of uh geographic information in general and earth's observation in particular if we combine those those sources we can still generate a lot of new
[1:17:16] information information thank you very much sir yes thank you thomas and and you know i'll add to that that as you may
[1:17:25] have seen already the toolkit shares or has a number of filters that the different data and tools can be
[1:17:32] categorized by and so you can already have have uh an idea if you're trying to identify what data sets can be used as proxies or
[1:17:42] help you derive information on access to public transport or on adequate housing and informal settlements you can filter by those
[1:17:55] indicators and then you can look at the relevant data sets and tools uh uh wonderful so i think that this is the
[1:18:08] last question that we have so with that we we want to thank you very much for joining um today's part two of the
[1:18:20] three-part uh training and of course we invite you and and look forward to seeing you next week for
[1:18:28] for part three so thank you very much everyone
