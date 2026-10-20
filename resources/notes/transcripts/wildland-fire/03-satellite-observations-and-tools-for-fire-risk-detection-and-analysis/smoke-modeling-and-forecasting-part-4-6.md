# Smoke Modeling and Forecasting, Part 4/6

`https://www.youtube.com/watch?v=hx-m1XMJlfc` · id 329 · 1:32:31 · module 124 — Satellite Observations and Tools for Fire Risk, Detection, and Analysis

[00:02] hello everyone and welcome to part 4 of our rset webinar series satellite observations and tools for fire risk
[00:10] detection and analysis here's a little reminder of our over webinar agenda um last week we had two
[00:19] sessions on pre-fire conditions related to climate hydrology and vegetation and session three this past tuesday dr pop doctors pawan gupta and anna
[00:30] prados cover the different ways fire is detected by satellite as well as several available smoke and aerosol datasets
[00:42] in today's session we'll shift gears a little bit and focus more on the modeling side um you'll be hearing from me um my name
[00:50] is melanie filet cook i am a research scientist at nasa goddard space flight center in washington dc that's me on the
[00:57] left left and dr anapratos will cover this material in spanish during our afternoon session today so in today's session we're going to
[01:10] understand the different ways fire emissions are estimated using satellite observations observations we'll also identify several different fire emissions data sets that are
[01:21] readily available and locate several global and u.s air quality forecasts if you have questions during today's presentation please enter
[01:36] them in the q a box we'll answer them in the order they were received at the end
[01:40] of today's presentation and then we'll post the q a document to the training website following the conclusion of the
[01:48] webinar so first we're going to talk a little bit about why we want to model smoke from fires and what exactly we mean by
[02:00] that that fires and the smoke that results from them can have a wide variety of important impacts
[02:07] smoke particles can affect the earth's energy budget in several ways smoke can scatter and absorb radiation and also alter the properties of clouds
[02:18] and their lifetimes forests are usually sinks of carbon meaning they take in more co2 from the atmosphere than they release
[02:28] carbon is taken up through photosynthesis and stored within plants dead organic matter and soils however however when large areas are burned forests can
[02:39] become a carbon source by releasing more carbon than they absorb fires are a significant source of trace
[02:48] gases and aerosols or particulate matter fires emit pollutants like co nox and particulate matter co is carbon
[02:58] monoxide and nox stands for oxides of nitrogen nitrogen in fact fires contribute about 50 percent of global co emissions but 20
[03:09] of nox emissions and about 40 percent of black carbon emissions and about 74 of organic carbon emissions
[03:17] emissions black carbon and organic carbon are types of particulate matter fires or sometimes it's referred to as
[03:25] biomass burning they're also responsible for a lot of the inter-annual variability in these species species smoke from fires also reduces visibility
[03:35] and contributes to tropospheric ozone formation another pollutant smoke also degrades air quality leading to negative health impacts ranging from
[03:46] exacerbation of asthma symptoms to premature death each year globally millions of premature deaths are attributed to poor air quality
[03:57] the vast majority of negative health impacts is caused by exposure to fine particulate matter modeling the emission and transport of
[04:06] smoke is the only way we can forecast future conditions and plan accordingly so we're going to take a little step
[04:17] back and talk about modeling three-dimensional atmospheric chemistry models are usually grid-based models meaning they divide the atmosphere into
[04:28] a set of three-dimensional grid cells the size of the grid cell determines the spatial resolution of the model
[04:36] the smaller the grid cell the more detailed the information and the more computing power needed to run the model
[04:44] models can be run at a variety of spatial scales from urban models that focus on only a city
[04:50] to regional models covering a domain like the united states to global models because of the computing power required
[04:59] in most cases if a very high resolution or or smaller grid cells are needed the model domain will be smaller
[05:08] but at agencies like nasa and europe's ecmwf ecmwf global models are being tested at about one kilometer spatial resolution which
[05:18] is pretty cool atmospheric chemistry models simulate the emission transport transport chemistry and removal of trace gases and aerosols within each
[05:31] grid cell to do this they need information about the physical state of the atmosphere or meteorology meteorology information about the chemical
[05:42] interactions within each grid cell and information about the emission of trace gases and aerosols into the atmosphere
[05:50] atmosphere some examples of emission sources are power plants cars and fires once emitted into the model these
[05:58] emissions are subject to transport and chemical transformation but but how much is emitted where where and when these emissions are released
[06:09] into the atmosphere is critical for the accuracy of error quality predictions so how are emissions from fires
[06:20] calculated and how do models simulate fire and smoke well first there has to be a fire we know from session three
[06:30] that satellites and other instruments can detect active fires but what about periods of time in the past when there were no satellites
[06:38] or further off into the future for those scenarios specialized fire prediction models use special schemes or parameterizations to predict
[06:48] the occurrence and spread of fire but for this presentation we're going to focus on calculating emissions from
[06:55] fires that have been observed by satellite as we heard a couple slides ago emissions from a fire consists of a
[07:04] combination of trace gases and aerosols in addition to how much where and when the smoke is emitted into the model
[07:13] other information is needed such as how high did the smoke get how long did the fire last hours days
[07:21] and did the emissions change over the course of the day observations can tell us some of this
[07:27] information for example active remote sensing measurements like lidars can give us information about the height of a smoked plume but they don't
[07:35] have a lot of spatial coverage on a given day and geostationary observations can give us some information about
[07:40] changes in fire strength throughout the day or from day to day but clouds typically always interfere with our
[07:47] ability to see fires so when we don't have observations a model makes assumptions about each of these factors
[08:00] two kinds of satellite observations are used to calculate fire emissions the first is burned area which reports
[08:08] the spatial extent of an area that's recently been burned you'll hear more about these products during our
[08:14] post-fire session number six these observations are not usually available in near real time from satellite satellite the second kind of observation is the
[08:25] detection of thermal anomalies from active fires session 3 covered these observations in detail detail these product files contain two pieces
[08:34] of information important for the calculation of fire emissions the location and time of the active fire and the fire radiative power or frp
[08:45] we'll talk up more about frp in a couple of minutes these observations are typically available within an hour or so of
[08:52] observation observation so they can be used near real-time applications applications the picture on the right shows a map of
[08:59] the burned areas detected by modis and active fire detections from beers from september 1st to september 15 2020.
[09:08] this corresponds to one of our california to one of our case studies over california this was made using the gewis mapping
[09:17] tool that i'll show a demonstration of later later you can visually see the difference between the two products and i want to
[09:24] highlight highlight how much larger the number of active fire detections than the areas of burned area so
[09:35] so emissions from fires again contain a mixture of a lot of different trace gases and aerosols emissions from fires include all the
[09:43] important species here and more greenhouse gases trace gases aerosols but but the actual composition of the emissions
[09:53] from a given fire will be a function of the fuel source or what is burning is it a forest is it a tropical forest
[10:01] is it savannah and grassland is it shrub and the environmental conditions the amount of a particular species
[10:14] emitted whether trace gas or aerosol is directly related to the amount of dry fuel burned through an emission factor
[10:22] like seen in this equation emission factors vary depending on biome or vegetation type so in other words
[10:32] for every unit mass burned of say tropical forest an emission factor tells us how much for example
[10:41] example pm 2.5 is estimated to have been admitted as you can imagine mission factors are very uncertain
[10:50] most have been calculated in laboratories or through in-situ measurements and are then applied to broad regions that might have more
[10:58] varied vegetation there are two primary ways that groups estimate the second part of that equation or the amount of fuel burned
[11:10] one is through the use of burned a burned area approach these use observations of burned areas such as the modis burned area product
[11:21] or make assumptions about the the amount of burned area based on the location of an active buyer
[11:28] examples of these types of emissions datasets include g-fed and fin which we'll cover in a little more detail
[11:35] the second uses the observed thermal energy of a fire examples of these types of emissions data sets include q-fed g-fas and fear
[11:46] we'll cover key fed and g-h g-fast in a little more detail here using the burned area approach the
[11:56] emission of a species is calculated as a function of the burned area or how much area burned
[12:04] the mass of available fuel the fraction of that fuel that has burned burned and the emission factor for that species
[12:14] here here an emission specifies a mass per unit area per unit time which can also be referred to as a flux
[12:22] you can see from this equation that in order to calculate fire emissions using this method you not only need information about fire
[12:30] you also need information about the amount and condition of the vegetation frp-based approaches utilize the fire radiative power or frp
[12:45] of a fire the fire radiate of power is the rate of radiative energy emitted by a fire
[12:52] as explained in session 3 sensors detect fires by looking for enhancements in the 4 and 11 micron
[12:59] bands bands frp is calculated using the difference between the brightness temperature of an identified fire pixel and the
[13:08] surrounding background at 4 microns studies have shown that you that burning dry vegetation yields a similar amount
[13:19] of energy regardless of the type of vegetation being burned using this concept the emission of a species s is a function of the frp
[13:30] the emission factor of that species and a constant alpha this alpha represents a constant relating frp to
[13:41] the amount of dry fuel burned this method has the advantage of not having to estimate the total fuel load
[13:49] or combustion completeness or the amount of fuel that actually burned burned examples of emissions inventories that use this method are g-fed and gfas
[14:04] other fire emissions inventories such as the nasa fear inventory relate frp directly to the emission of a given
[14:12] species through the derivation of emission coefficients so now we'll review a few commonly used fire emissions inventories i've given a
[14:25] couple examples and first i've included a quick reference table showing the four fire emissions inventories i'll describe
[14:32] today along with the fear inventory on the right which i'm unfortunately not covering for the sake of time
[14:39] the satellite product time period spatial resolution references and websites are all listed in this table so first i'm going to talk about g fed
[14:56] the global fire missions database or g-fed is probably the most well-known and widely used fire emissions data set
[15:06] other emissions data sets typically use g-fed to scale or correct their own emissions emissions in g-fed fire information is obtained
[15:15] through the modis burned area product and therefore follows the burned area methodology methodology vegetation information such as ndvi and
[15:26] fractional tree cover which were discussed in session two and meteorological information such as air temperature soil moisture and solar radiation
[15:37] are all used as inputs to the casa or carnegie ames stanford approach model model this is a terrestrial carbon model
[15:49] casa then calculates fire carbon emissions as a function of vegetation type type trace gas and aerosol emissions can be
[15:58] calculated at that point using emission factors that gfed provides g-fed offers actually two emissions data sets for download
[16:11] the g-fed version 4 primarily uses the modis burned area product product along with other satellite observations to create emissions for the pre-modis
[16:22] era era however however modis has a fire detection limit of about 100 meters squared and therefore misses smaller fires
[16:33] in g fed version 4s where the s stands for small fires the modis one kilometer thermal anomalies and surface reflectance
[16:43] are used to detect smaller fires not captured in the burned area product the algorithm then derives an associated burned area
[16:53] for these smaller fires and adds that to the burned area detected by the burned area product both products are available monthly with
[17:03] factors allowing for scaling to daily and three hourly time scales all files are in hdf or hdf5 format
[17:14] and the website has python and matlab data readers because both gfed4 and gfed4s use the modis burned area product they are not
[17:25] available in the real time but there is a new g fed near real-time product in development it's not currently available for
[17:35] download as a complete data set but can be viewed and downloaded in part using the g fed website analysis tool
[17:41] which i'll demonstrate shortly in this new methodology fire detections from beers are used to map a burned area of
[17:51] slow-moving forest fires with a spatial resolution of about 550 meters comparison with other burned area maps indicate that this works best for
[18:00] forested ecosystems so how much do the addition of small fires really matter when we look at the difference between g
[18:11] fed 4 and g fed 4s we can get an indication indication about how much the inclusion of these
[18:18] matters to the calculation of fire emissions emissions these plots show monthly fire carbon emissions from g-fed 4 in red
[18:26] and g-fed 4s in gray the inclusion of small fires generally means an increase in fire emissions but
[18:34] the magnitude can vary with region as one might expect the largest increases are seen in regions with a lot
[18:42] of agricultural fires like southern africa in the u.s as a reminder agricultural fires tend to be smaller and might not be detected by
[18:53] the bird area product alone g-fed has a fantastic website full of great features including the amazon dashboard and analysis tool
[19:08] information on their global fire atlas and a place to download g-fed data so i'm now going to switch over to the g
[19:18] fed website to show you the different features and how you can make a time series map like this and download the
[19:24] data okay okay so this is the g fed website the tabs at the top will take you to the different
[19:35] various various pages pages and there's information and references listed here as well as contact information if we click on the data tab
[19:49] there's information about the g fed 4 burned area without small fires and g54s emissions with small fires
[20:00] other data as well as figures these are the the g fed basis regions you can see they divide up all the land
[20:10] into these different regions i point that out because that's going to be relevant for the analysis tool
[20:17] they have some pre-made plots of burned area fuel consumption and carbon emissions annually averaged from 1997 to 2014
[20:28] as well as some of the plots that i just showed the comparison between g bed 4 and 4s
[20:35] as well as carbon emissions from different different different types of fires boreal forest fires tempers forest fires heat fires
[20:44] agricultural waste etc there are also there are all these pre-made plots ready for viewing the the amazon dashboard
[21:01] shows a newer site using the that newer viirs method method i was talking about the g fed near rail
[21:08] time time this has some information on the burned area of fires as well as distinguishing between different types of fire here savannah
[21:19] grassland small clearing and agriculture understory and deforestation and you can also download the latest data here there is a note
[21:32] um they are undergoing updates currently so so just just take that into account if you're going to poke around
[21:41] there's also the global fire atlas the reference for that is here this is a data set containing
[21:50] information about fire size duration speed and direction you can explore this data online online there's a data viewer here where you can
[22:03] look look versus day of burn speed fire line and direction an overview data summary and a user guide
[22:16] um and a place to download the data as well as some sample file sample files and references
[22:27] there's there's a lot to explore here today i'm going to focus on the analysis tool clicking on the g fed analysis tool um
[22:41] can show us their their current estimates of carbon emissions from g fed here because i'm going to focus on the
[22:56] western u.s um um kind of bring it back to our case study the first thing we want to do is
[23:03] click here about the tool and that will give you information about data sources a little bit more information about the
[23:10] years near real time estimates and other sort of resources about this tool looking back here so so as i said this is viewing carbon
[23:25] emissions from g fed so bringing it back to our case studies let's change the date that we'd like to view
[23:43] to mid-september 2020 during um during that bad fire season in the western u.s and here we can see the gridded
[24:03] that's why they look like squares here grid of g fed emissions going up here you see that you can change the base map
[24:13] from the map to an aerial view and here you can either draw a polygon a rectangle input a geo json shape
[24:26] or upload your own shape file to calculate the g fed emissions within each of these shapes for today
[24:37] we're just going to draw a rectangle around these emissions around northern california california and it labels that area one we could
[24:45] change this label if we wanted to we're going to focus our analysis on this rectangle here following the instructions
[24:56] we can add a chart by clicking this and and you can select our region so here's where uh
[25:08] why i wanted to point out the different regions i showed before so you can calculate calculate averages or totals for different g fed
[25:17] regions regions or or different countries for today we're going to focus on our chosen area one and we can examine the data for
[25:36] different quantities quantities we can look at burned area emissions fire counts fire accounts versus emissions emissions today we're going to look at beers near
[25:48] real time emissions and we'll look at look at carbon first so these carbon emissions are what the
[25:57] emissions of everything else is going to be based on by applying the emission factors so we're going to look at
[26:06] 2020 2020 september and the time scale we will get daily and in a line chart we click create chart
[26:24] and we can see the evolution of carbon emissions throughout the month and here if you mouse over it tells you
[26:34] each data point in giga grams carbon you can download these by pressing by clicking this which will bring up a separate tab
[26:50] with these uh quantities area year and these are the day numbers or the days of the year
[27:02] if we want to plot a different quantity but see it in comparison with the one we've just plotted
[27:08] we can add a plot by just saying we want it to show the space here by clicking
[27:13] here here and add a chart and let's say we want to now look at pm 2.5 which might be a little more intuitive
[27:22] than carbon all of our other parameters are set create a chart and now we can see pm 2.5
[27:40] and again this data is also downloadable so this this analysis tool is a really useful resource if you're curious about
[27:49] how how a current season's carbon emissions compare with the previous seasons it's just a really nice intuitive tool
[27:58] to be able to actually view the emissions so going back to our presentation we're next going to talk about the fin
[28:21] fire missions database so the fire inventory from ncar or finn uses modis observations of active fires and land cover to calculate emissions
[28:34] using the following equation that might look a little familiar you'll notice that even though finn uses burned area it does not use the modis
[28:44] burned area product the modis thermal anomalies product has a spatial resolution of one kilometer squared squared when a fire pixel is detected the fin
[28:55] algorithm assumes the burned area of that active fire pixel is one kilometer squared squared exceptions to this are for grassland and
[29:03] savannah fires that are assigned a burned area of 0.75 kilometers squared burned area is also scaled using the
[29:11] modis vegetation continuous fields product product so for example if a pixel is 50 bare soil the burned area will be 0.5
[29:21] kilometers square the fraction of biomass burned is assigned as a function of of the fraction of tree cover from the vcf
[29:30] product bin version 2.2 emissions are available as text files daily at one kilometer squared spatial resolution from 2002 to
[29:44] the present emissions calculated using both modis and vr's fire detections are available from 2012 to 2019 for those users familiar with
[29:58] chemistry transport models the finn website offers emissions of trace gases and aerosols that have been mapped for
[30:05] specific chemical mechanisms used in 3d chemistry transport models namely the mozart iv saprc 99 and chios chem chemical
[30:16] mechanisms mechanisms there are also utilities to grid fin emissions for use in dwarf chem or other global models
[30:25] this plot on the right shows fin fire emissions of carbon monoxide for september 12 2020 gridded to half a
[30:34] degree degree again finn fire emissions are calculated in real time and they're processed as inputs to chemical forecasts run at ncar
[30:44] the national center for environmental research for atmospheric research so next is qfed the quick fire emissions data set or
[30:57] q-fed q-fed is used in the nasa geos forecast system q-fed uses satellite observations of frp from the modis thermal anomalies product
[31:10] to estimate gridded fire emissions globally globally the igbp inpe vegetation classification dataset is used to determine the type of
[31:21] vegetation category select the emission factor and assign the frp to the corresponding q fed vegetation class q-fed this is an important step uses
[31:34] modis aerosol optical depth to calculate and tune biome-dependent emission coefficients and determine their best value by minimizing discrepancies between the
[31:45] modeled and the satellite-derived aod so because of this these scaling coefficients make up for potential weaknesses in the
[31:57] underlying chemical transport model this makes the corrected biomass burning emissions somewhat model dependent because they were developed using geos
[32:09] therefore using q-fed emissions in other models requires caution and an understanding of this aspect of the results
[32:20] q fed emissions are available in near real time in addition to the near real time emissions a longer historical record
[32:28] dataset is also maintained and can be downloaded the website shown here the historical product is updated on a
[32:35] monthly basis and is available from march 2000 to the present key fed products are available at 0.1 by
[32:42] 0.1 degree and quarter degree degree spatial resolution in net cdf formats next next gfas gfas global fire assimilation system or gfas
[32:59] emissions are used in the european center for medium range weather forecasts or ecmwf copernicus atmosphere monitoring service
[33:09] cams forecasts gfas uses a methodology very similar to q-fed q-fed in this equation alpha represents a constant that relates
[33:21] frp frp to dry matter fuel consumption this is taken from an earlier version of g fed these alphas are also a function of
[33:31] biome it should be noted that gfas doesn't use the tuning step to aerosol optical depth that cuvette does
[33:46] daily g-fast emissions are available from 2003 to the present in grid file format format the files themselves contain information
[33:56] on injection height which is derived using a plumerized model frp frp and image gases gases the figure on the right shows chief
[34:08] missions of pm 2.5 for september 2020 for eastern u.s this map was g-wist mapping tool which we'll cover
[34:18] next qis or the global wildfire information system system brings together current and historical fire relevant information on regional
[34:32] and national levels session two introduced this tool and discussed land cover and fuel type here i'm going to briefly walk you
[34:41] through the website and show you how to create a map like the one shown on the previous slide
[34:49] i'm going to click back over so here is the geos website scrolling down there is the current situation viewer
[35:15] and country profiles and data and services services i'm going to first click on the country profile so this has some really nice ready-made
[35:30] maps switching to country overview here here it's focusing on the european continent i'm going to change to north america
[35:49] and it has already selected the united states states but if i scroll down you can see each of
[35:56] these has an arrow that you can click to view the different sub-regions of each country and in our case we're
[36:07] going to look at california and you can see some information about land cover um clicking on the maps
[36:22] you can see some nice pre-made maps for monthly burned area you can view different months and you can change the
[36:29] year here cumulative burned area fire frequency median day of burning down to country charts you can look at how a current year
[36:49] compares with an average over previous years so in this case looking at 2019 as compared with the
[36:57] average of 2002 to 2019 and you can change that here to view only a single year we have yearly burned area and number of
[37:16] fires fires the seasonality of those fires yearly burned area by land cover average monthly burned area and
[37:46] seasonality seasonality monthly burned area versus historical a lot of nice analysis here um average monthly fire size per year
[38:01] and what's nice also about each of these charts is by by mousing over this icon you can either download an image
[38:12] png jpeg svg or pdf download the data in different formats or print um um other data downloads and documentation
[38:25] is available here and if we go going back to the main site you can click on the current situation
[38:45] viewer to see the cool mapping capabilities that this site has so again we're gonna keep going with california
[38:58] the western coast of the us um there are some tools here on the right right clicking here you can change the base
[39:08] map so if we just go to face streets and there are several types of variables available for
[39:24] plotting instead of forecasts here we're going to go to observations um the fire emissions available here are
[39:39] gfas fire emissions so if we go to a custom date range we can go back to september of 2020
[39:50] and let's view cumulative emissions from the first to the 30th and and let's look at emissions of particulate
[40:01] matter so using this we can visualize particulate matter emissions from gfas over this period clicking this sorry the one on the bottom
[40:25] shows the legend uh for for the variables uh plotted i also used the g whis tool earlier
[40:36] to show active fire detections and burned area we can also view those here so if we look
[40:44] look at active fires detected by modis and those detected by viirs and you can see how many more buyers
[40:56] appears to tax and if we also we can also over plot burned area from both modus and beers i'm choosing
[41:04] this because this is only available until the end of 2019. and and i think we need to unclick
[41:13] to do that and these are the burned areas so this is a really is a really neat tool also for
[41:24] visualizing gps emissions um as well as fire danger forecasts lightning forecasts and land cover information going back to our presentation
[41:52] so we've heard about two different methodologies for calculating fire emissions emissions both the burned area and thermal energy
[42:01] techniques suffer from similar uncertainties that deal with the potential omission of fires and the inherent uncertainties in the emission factors
[42:12] the burned area approach also includes uncertainties regarding the type of fuel the estimate of biomass and estimations
[42:20] of the fraction of fuel burned the frp approach includes uncertainties in the estimation of scaling factors and
[42:29] coefficients coefficients used to convert frp to emissions and i just want to also note beers has the much higher spatial resolution
[42:40] compared to modis and detects three to four times the amount of buyers and many of these emission inventories are
[42:47] only just starting to incorporate viirs active buyer detections so how do all of these different emissions data sets compare
[43:01] um in this study by xiaohua pan which is a nice overview of comparing each of these different data
[43:11] sets i i recommend her paper as well as the the references i included for each of the
[43:18] fire emissions inventories shown in the table in the reference table earlier in this study she ran the nasa geos
[43:26] model for one year 2008 using each of the fire emissions inventories listed here this figure shows the global monthly
[43:37] mean organic carbon emissions from fire and the totals are shown in the table on the right all of the inventories show the same
[43:46] general cycle throughout the year but you can see there's quite a lot of variability among these different data
[43:53] sets sets q fed and fear consistently show higher emission than the other inventories both globally and for specific regions not
[44:03] included in this slide this is very likely because they are tuned tuned to match aerosol optical depth
[44:11] observations from modis although in different ways g-fed 4s shows the lowest emissions of all of the data sets even compared to an
[44:23] earlier version of g fed this is due to changes in the combustion calculation and emission factors between
[44:29] versions of g-fed so now in this next section we're going to move from the fire emissions inventories
[44:42] inventories to the models that they're used in to predict air quality operational air quality forecasts are used to provide the public with health
[44:57] alerts alerts this is very important as the world health organization estimates that air pollution accounts for about 4.2 million
[45:06] deaths each year air quality forecasts also provide regional haze advisories for private and commercial aviation inform emergency response and can
[45:18] supplement existing emission control programs programs through identifying scenarios that could benefit from temporary emission reductions reductions research air quality forecasts like from
[45:30] nasa geos are also used to support field campaigns provide a test bed for modeling and assimilation techniques and provide
[45:40] boundary boundary conditions for regional models in this part of the presentation i'm going to talk about air quality
[45:49] forecasts and smoke forecasts as their name suggests air quality forecasts forecast pollutants that are important for air quality like pm
[45:58] 2.5 they include not just fire emissions but emissions from other pollutant sources like power plants or cars
[46:08] aerosol forecasts 10 to 4 cast cast aerosols only and composition forecasts forecast both trace gases and aerosols
[46:19] a smoke forecast can be a component of an air quality forecast or a standalone forecast forecast in a standalone forecast fire emissions
[46:28] are usually the only emission used so the impact of fires can be isolated the first part of this presentation
[46:42] focused on how fire emissions are derived from satellite observations of fire and vegetation but as i mentioned earlier fire
[46:51] emissions themselves are one piece of accurately forecasting the transport of smoke from fires first from session three we learned that
[47:01] active fire detections are primarily from the modis and veer sensors on board polar orbiting satellites like seen in
[47:10] the gift shown here this means that they only get two chances per day to view a fire over a
[47:17] given location if there are clouds or if the fire has been strong enough or large enough to be detected at the time
[47:25] the satellite passes overhead that fire will not be included in the model forecast along those same lines if the satellite
[47:35] observes a fire one day and doesn't the next that doesn't necessarily mean that the fire is not
[47:42] still there the fire could be obscured by cloud cover or thick smoke or again not be strong enough to be detected at
[47:48] that time so models make assumptions about the persistence of a fire or how long a fire lasts to try and account for this
[47:58] and the incorporation of geostationary observations can help with these current two limitations in the absence of direct observations of
[48:09] the height of a plume so i just remember most satellites observe aerosol optical depth which represents the optical
[48:18] thickness of aerosols in the entire atmosphere column so models often make assumptions about the height and vertical profile of the
[48:28] smoke plume some models use the energy of a fire to calculate a smoke plume height others others simply inject all of the smoke into the
[48:38] planetary boundary layer or the atmospheric layer closest to the surface of the earth the altitude of smoke is a very important piece of
[48:49] information when forecasting plume transport transport and developing new new real-time observations of plume height and incorporating those into
[48:58] model forecasts is a current active area of research there are many air quality forecasts available too many to describe in one
[49:12] presentation so i've chosen just to select view to highlight as examples so the first model i'll talk about today
[49:26] is the nasa geosystem the geosystem produces analyses assimilation products and forecasts of weather and air quality using the most
[49:36] current gs system it's maintained by the nasa global modeling and assimilation officer to support nasa's satellite missions and
[49:46] field experiments gmao generates near real-time atmospheric products and distributes them to a broad community of users using their framework for live
[49:56] user invoked data or fluid software and i'll show some examples of that in a little bit two forecasts are currently offered
[50:05] the geos forward processing system or gsfp gsfp forecasts whether aerosols and carbon monoxide monoxide this animation on the right shows geosfp
[50:17] aerosols for december 2019. each type of aerosol is assigned a different color here as shown below the
[50:24] animation animation the reddish color are carbon aerosols that are most often associated with fire emissions emissions you can see the model transporting fire
[50:34] emissions from key fed in eastern australia this is a really cool animation and the entire animation can be found at the
[50:42] link link seen on your screen the gs composition forecast or gscf forecasts both trace gases and aerosols
[50:53] both are available hourly at about 25 kilometer spatial resolution the gsfp forecast assimilates both weather and aerosol satellite
[51:07] observations to issue 10-day forecasts twice daily at 0 and 12-z the incorporation of satellite observations through data assimilation
[51:18] corrects the initial model state and leads to more accurate forecasts the gscf forecast does not assimilate observations
[51:28] observations but instead runs a simulation constrained by the previous day's meteorology from a version of fp that has assimilated data
[51:38] then it forecasts out five days cf is run once a day at 12z and both systems use the key fed fire
[51:47] emissions that i described earlier the nasa fluid website offers a place to see various maps such as datagrams
[52:01] two-dimensional and different vertical layers of gs fp forecast output and a place to download the output itself so you can
[52:09] see here on the left there are options for datagrams weather maps what they call chem maps but that's where the
[52:16] aerosol plots can be found and other other features and then the data access is there on the bottom in various forms
[52:27] so clicking on the chem maps or 3d chem maps bringing it brings you to these pages pages on the chem maps page you can select
[52:35] from different variables to view such as the surface mass or aerosol optical depth of different aerosol components
[52:44] such as dust organic carbon and black carbon you can also choose the forecast time and region to view
[52:54] on the 3d chem maps page you can view different aerosol species or you can choose to be pm 2.5
[53:01] em 10 or total particulate matter at different pressure levels and for those not used to thinking in
[53:08] terms of pressure levels as a reminder pressure decreases with altitude so higher pressures are closer to the surface
[53:18] and on both of these pages you can also animate animate these maps and download these images clicking on the datagrams will show you
[53:31] a forecast profile in time at a given location location so this datagram shows the forecast for washington dc
[53:40] the vertical profile for the given quantity is shown along with the winds and forecast cloud cover there on the
[53:47] top top and if you've chosen an aerosol variable to view the forecast for the speciation is shown there in the
[53:55] middle panel below the vertical profile so going back to our case studies this is a special visualization created
[54:06] by the nasa earth observatory team showing the transport of q-fed fire emissions within the gsfp forecast during the september 2020 fires in the
[54:15] western u.s these plots show the mass of black carbon in the atmospheric column on december 14th 15th and 16th and
[54:26] one interesting aspect of this series of images is the presence of hurricane paulette paulette off the east coast of the us
[54:34] on the 15th in the middle panel the fluke the smoke plume encounters the hurricane and by the 16th the system has
[54:41] moved on and allows that smoke plume to extend further east out over the atlantic going back to the gscf forecast um the
[54:53] cf forecast uses constrained meteorology from the gsfp system along with the gs chem kappancl mechanism geoscam is a community developed global
[55:04] three-dimensional model of atmospheric chemistry and consists of over 250 chemical species and over 700 chemical reactions reactions the movie on the right is just a small
[55:15] snapshot of a longer movie from the nasa science visualization studio showing a lot more species it's pretty
[55:22] great if you want to check it out you can see it at the link on this slide
[55:27] cf output is available every 15 minutes for the surface and this forecast has been run since january of 2008.
[55:40] you can find maps and datagrams of cf output also on fluid the maps include either surface concentrations
[55:50] concentrations of co ozone nitrogen dioxide sulfur dioxide and pm 2.5 for different regions as well as column
[56:00] quantities the ecmwf copernicus atmosphere monitoring surface or cams provides five-day global composition forecasts of aerosols and other
[56:16] pollutants pollutants twice a day at 0 and 12z like geos cams assimilates weather and aerosol observations to constrain the initial
[56:27] model state cams also assimilates satellite observations of carbon monoxide nitrogen dioxide and sulfur dioxide it's available at
[56:39] about 40 kilometer spatial resolution and about 10 kilometer spatial resolution for a select domain over europe europe cams uses the gfas fire emissions i
[56:50] described earlier forecast maps are available on the website an example here is shown on the lower right
[56:59] this map shows the pm 2.5 forecast and different forecast times regions and variables like pm10 as opposed to pm 2.5
[57:11] can be chosen using those grey tabs at the top that are actually on the website website cams forecast visualizations
[57:20] can also be found on the windy.com website so this is a gift taken from twitter actually showing the cams total column
[57:32] carbon monoxide forecast for september 15 2020. you can again see the transport of smoke across the u.s and out over the atlantic
[57:44] and cams actually forecasted this smoke to reach europe just a few days after this so those are two examples of global
[57:57] aerosol and composition forecasts and now we'll take a look at a high resolution regional smoke forecast for
[58:04] the united states the noaa rapid refresh or wrap model is a continental scale assimilation and modeling system operational at nsf or
[58:18] national centers for environmental prediction prediction the wrap domain shown here at that large green square has 13 kilometers spatial resolution and
[58:29] covers north america wrap is complemented by the high resolution resolution three kilometer high resolution rapid refresh or her model
[58:40] which covers smaller geographic domains over the continental u.s and alaska both models are run hourly and the her
[58:50] assimilates radar data every 15 minutes so this this is just a reference table summary summarizing some of what i just
[59:00] described described both systems for fire emissions use both modis and viirs active fire data and they calculate emissions of pm 2.5
[59:11] in a manner very similar to q-fed but no tuning to aod has occurred model output can be accessed at the
[59:20] websites shown at the bottom row of the table her actually offers a pretty nice visualization website for its smoke
[59:33] forecast forecast the layers available to view include forecasts of surface visibility vertically integrated smoke so this means basically the amount of smoke in a
[59:46] 1 meter squared atmospheric column and they also have near surface smoke near surface smoke is shown here as pm
[59:55] 2.5 in units of micrograms per meter cubed cubed fire detections from modis and veers can also be overlaid and in this screenshot
[1:00:06] i selected to view near-surface smoke and active fire detections and you can see see the very detailed plumes forecasted by
[1:00:16] that that very high resolution her model at three kilometers kilometers and you can obviously animate the forecast using the controls on the
[1:00:24] bottom so once again returning to our forecasts of smoke from fires in the western us in september
[1:00:36] 2020 2020 these plots show the vertically integrated smoke forecasts but the wrap on the left and the her on the right
[1:00:45] the her model especially is very detailed because of its high three kilometer spatial resolution and i'll leave this running for just a
[1:00:53] second because if you look closely in california you can actually see the pulses from individual plumes in this in this animation which is
[1:01:03] pretty neat the her smoke and rap smoke forecasts can also be viewed using the university of wisconsin real earth site
[1:01:21] real earth is a visualization tool and app app that animates fire related model output observations and other earth science
[1:01:30] data data here i've chosen their fire detection collection and selected to view fire detections the her near surface smoke forecast
[1:01:42] along with large fire incidents from the u.s forest service i thought i would throw this tool in
[1:01:48] there because not it doesn't only have fire information but other earth science data it's a it's a pretty neat site
[1:01:59] and so this is not a forecast per se but i wanted to show one last mapping tool today
[1:02:07] the environmental protection agency or epa epa air now fire and smoke map this displays real-time information from
[1:02:16] ground monitors has information on fire detection and smoke plume locations and this site is updated every 15 minutes
[1:02:27] um large fire incidents are shown as those little fire icons and come from the us national interagency fire center's
[1:02:36] active incident feed satellite fire detections from modis beers and goes are shown as yellow dots smoke plumes are shown as gray contours
[1:02:48] and are taken from noaa's hazard mapping system system and which detects smoke using goes true color imagery
[1:02:57] this map also displays data from three types of air quality monitors permanent monitors are shown as circles
[1:03:06] temporary monitors are shown as triangles and low-cost sensors are shown as squares and they're colored according to an air
[1:03:15] quality index calculated specifically for pm 2.5 the color definitions are shown here on the lower left and
[1:03:26] and if you click on an individual monitor it will show you the air quality index or you can also choose to view the pm 2.5
[1:03:34] concentration concentration for the past 10 days or so so again this isn't a forecast but i wanted to highlight this really great
[1:03:42] mapping tool uh because it's great for looking at the near real-time state of fires over the u.s and other parts of
[1:03:50] north america so those are all that's the presentation for today um i've put contact information for all of today's trainers
[1:04:04] uh shown here and provided links to the training page the rset website and our social media so
[1:04:10] if you're on twitter you can follow us to stay informed about upcoming trainings and events and and just a little bit of logistics
[1:04:23] for those interested in a certificate of completion completion there will be three homework assignments throughout the course of this six-part
[1:04:30] training training answers are going to be submitted via google form which can be accessed from the training page on the rsa website
[1:04:38] that i showed in the in the previous slide slide and the due date for all three homework
[1:04:42] assignments is june 8th 2021 which is two weeks after the last webinar session and a certificate of completion will be
[1:04:51] awarded to those who attend the live webinars and complete the homework assignment by that june 8th deadline and
[1:04:59] uh and that certificate will be emailed about two months after the completion of the webinar series from the website
[1:05:06] shown here from and that's it thank you and we'll now start the q a portion portion thanks
[1:05:22] okay so now we'll bring up our q a document okay okay so if you have questions now feel free
[1:05:35] to to um still enter them into the q a i'll sort of tackle these just one at a
[1:05:41] time okay is it possible to detect active fires fires through sar imagery for example sentinel-1 sentinel-1 so i believe sar imagery can be used to
[1:05:55] detect burned area but not thermal anomalies associated with active fires fires so in other words um um you know active fires are typically able
[1:06:08] to be detected in near real time whereas burned area is measuring the area burned by a fire
[1:06:19] and so you know just because of that definition tends to lag um um the the ability ability that takes longer than
[1:06:30] detecting an active fire that makes sense um um so i don't know of a i don't know that sentinel one or sorry imagery
[1:06:41] can be used to detect the thermal thermal anomalies from fire on slide 8 you mentioned burned area is
[1:06:50] not available in real time though at a 2 kilometer resolution so it's the thermal anomalies associated with active fires that are
[1:07:01] available at about two kilometers spatial resolution from the geostationary geostationary goes 16 and 17 satellites satellites um
[1:07:12] um it would seem band seven which is the four micron uh would provide an estimate of burned area
[1:07:19] box box so so i think i believe other goes bands and information can be used to calculate
[1:07:27] burned area but i don't believe that this is available in near real time i just want to note viirs data on the
[1:07:39] other hand is very high resolution and looking at the day-to-day progression progression in the viirs active fires is a method
[1:07:50] that's actively being researched um as a method to calculate the change in an area of a fire from day to day
[1:08:02] is frp only for the four micron channel or any other channel so frp is typically used uh using the
[1:08:10] four micron channel that's the primary channel used in detection of an active fire and also um the four micron
[1:08:18] is is not as sensitive to it it's sensitive to both smoldering or lower temperature fire and also flaming fire a little bit
[1:08:27] more sensitive to flaming but so the frp that you calculate from it it um is not as sensitive to
[1:08:37] um if there's a combination of both from a given fire that's another reason for the four micron over another uh channel
[1:08:47] what studies have shown that burning dry vegetation yields the same amount of energy regardless of vegetation type
[1:08:54] can you please provide references sure so here's the kaufman at all paper explaining about um frp and then here is the achoku
[1:09:03] uh charles ochoku and joram kaufman's paper paper um where they establish the relationship between the energy emitted and um
[1:09:13] aerosol emission is there a definition for dry vegetation what is the criteria to be classified as dry vegetation
[1:09:28] um um i mean i'm not sure what to say other than than dry vegetation um um is vegetation without moisture
[1:09:40] um um [Music] [Music] i think to classif like i'm not sure of a criteria used to classify it but
[1:09:49] dry vegetation will be you know for example debris debris on the forest floor or dead grasses and i believe in labs they dehydrate
[1:10:05] fuels fuels in order to calculate emission factors but i don't know of an exact definition or criteria
[1:10:12] i'm sorry i'll see if i can find out more information about that the g fed data captures prescribed fire
[1:10:24] actions and can and can gather prescribed fire data areas emissions etc so the gfe data will include information
[1:10:31] about both burned area and emissions from any fires that have been detected by the satellite datasets that are used
[1:10:39] to to generate the emission data set so if a prescribed fire is large enough to be detected either by the burned area
[1:10:47] product or the modus thermal anomalies product it will be in the g fed 4s emissions database but
[1:10:55] but you know that information is you know spatially aggregated up and reported on a quarter degree by quarter degree grid
[1:11:04] um um so so for for not not on an individual fire basis um so if you wanted to know about
[1:11:14] prescribed fires in particular if you knew generally where they happened you could get information from the g fed
[1:11:21] emissions database how are large burned areas acquired by modus modus and beers respectively oh i think i
[1:11:33] misread this question i thought it was asking about spatial resolution so the modus burned area product is available
[1:11:41] at 500 meters facial resolution just fyi there but um if the if the question is how they're
[1:11:46] calculated calculated um i'll say a little bit about it now but session six i think we'll cover this
[1:11:52] in more detail the the land land burned by a fire will have um different different values of spectral reflectance
[1:12:05] and its changes in those over time that are used to detect the area burned by a fire
[1:12:16] um um question in the case of peatland fires is it is burned peat part of the emission and smoke calculations and the
[1:12:24] presented methods and tools or are these limited to burned above ground vegetation fantastic question and i should have
[1:12:32] included information about that um so for g fed and g fast those fire emissions do include emissions from peat
[1:12:40] fires fires you fed currently does not and basically what that means is if q fed defects detects a fire in a
[1:12:48] region region um say indonesia or you know boreal asia and siberia where peat fires are likely um instead of being assigned an
[1:12:59] emission factor for peat it will be assigned an emission factor according to the biome that it is in this and and be
[1:13:05] associated with the above ground vegetation vegetation so it's improved you know we're working on improvements like that over time incorporating p fire
[1:13:15] emissions emissions um i don't believe finn includes peat emissions in there they don't include it in their list of
[1:13:23] emission factors in their documentation but i know that they're about to release a new um their new documentation for their finn
[1:13:32] version 2.2 i believe um so i could be wrong about that um um exactly well that's a nice thing to say
[1:13:43] i'm worried i'm wondering if there's a possibility in g fed to find out what types of plants we're burning
[1:13:49] so that one can correlate pm 2.5 emissions from grasses or trees okay okay so the the g fed emission files
[1:13:56] themselves do include an estimate of how much carbon is emitted by the different vegetation types and and
[1:14:04] they're listed here so anything finer than that is not available available from g fed but you could take
[1:14:14] um fifa does tell you in general the amount of carbon emitted and so if you have a finer scale
[1:14:25] vegetation data set you could use that that and assign finer scale emission factors if you have them
[1:14:37] to specifically calculate pm2.5 emissions on a finer scale question 10 frp frp is radiation from a very narrow
[1:14:52] wavelength example four micron channel how could frp be used to calculate emissions emissions we do not we don't need the radiation
[1:15:03] from different wavelengths so the the studies linked above and this achoku at all 2005 reference they show a direct relationship between the
[1:15:14] frp and the aerosol emission rate and so the fear emissions database which i apologize i didn't have time to cover
[1:15:23] today today it uses a derived coefficient of a mission mission to convert the frp to emissions they're the process
[1:15:36] a complete description of that emissions database is here at this reference for the fear emissions uh data set
[1:15:48] question 11. why does frp use for micron and not the other channel so again so the four micron wavelength is uh
[1:15:56] sensitive to both flaming and smoldering fires fires um and is the primary active fire detection channel so frp in this channel
[1:16:04] is is less sensitive to any ratio between flaming and smoldering fires how did the gewis classify fire season
[1:16:18] in the case of california during the demo i'm not sure i understand what this question is referring to
[1:16:34] yeah i'm i'm not i'm not sure if that's a question about this session or i know they demonstrated she was in session one
[1:16:44] so oh yeah i'm sorry i'm not i'm not i don't really understand the question um um [Music]
[1:16:53] [Music] in slide 36 comparing comparing total organic carbon emissions from 2008 which one is likely the correct estimate
[1:17:02] so so that's a great question and and which fire emissions data set you choose really depends on
[1:17:12] your application so example here g fed is available over the longest time period period uh from 1997
[1:17:22] to 2016 and in sometime in the near future they'll release uh their g fed version 5. um
[1:17:31] but but that is known to generally underestimate emissions from a fire with respect to other other databases so
[1:17:42] typically you can compensate for that by scaling those emissions up and when you compare compare um um you know frp-based emissions with the
[1:17:52] burned area typically you have to scale g fed up by an order of three or four um
[1:17:59] so if you want a long time period you know g fed is appealing um um and and but if you're running a high resolution
[1:18:11] regional model fin fire missions might be more appropriate they're available at one kilometer resolution um so i think it really depends on
[1:18:23] the scales uh that you're studying do we have correction factors to cater for uncertainties in fire emissions
[1:18:33] using burnt area and thermal techniques um so again you can use you can scale up you know emissions from burned area
[1:18:43] techniques to agree with other observations such as aerosol optical depth depth um and that's where this scaling on the
[1:18:50] order of three or four that i mentioned above comes in so if you put if you run a model with g fed
[1:18:58] uh fire emissions typically you have to increase those fire emissions on the order of three or four times
[1:19:04] in order to match the aerosol optical depth observed from modis um um so those there are there isn't you know one
[1:19:16] correction factor um um to to transfer between the two techniques that any difference between them will likely
[1:19:25] be a result of a number of different factors and certain wouldn't be something like a constant value
[1:19:34] how can the uncertainty of carbon emissions be calculated and which product is the most accurate among the others which product has been
[1:19:41] identified as being the most accurate for tropics fire or is each product discovered to be site specific
[1:19:47] so so again again this is going to depend on your application application um um so so end by the metric with which you
[1:19:58] evaluate it against so in other words if you're running uh if you put a fire emissions data set into a model you know
[1:20:08] what what evaluation what data set are you going to use to evaluate it if you're going to use aerosol optical
[1:20:15] depth depth or arrow net observations then then the fear and the q fed um um emissions databases which have been
[1:20:27] tuned to match aod will be the most accurate if if you're thinking more in terms of ground
[1:20:36] level concentration um um that will that's something that will definitely vary vary um um with by region and with each emissions
[1:20:47] data set and i'm sorry i don't have a an answer as to this one is more accurate in terms of
[1:20:53] um um say pm 2.5 emissions um when you say the satellite only views one location twice a day
[1:21:08] does it mean the satellite could view the earth's surface in 12 hours yes um so depending on the orbit and the
[1:21:17] field of view of the satellite it can view the entire earth or part of the earth earth so viirs views the entire earth every 12
[1:21:26] hours whereas modis has some gaps in the tropics tropics when we're talking about variables like aerosol optical depth
[1:21:35] however you only get data for the sunlit portion of that orbit orbit so if you don't get two measures of aod
[1:21:44] a day you get one um especially the peroxy radicals in the gscf model i am wondering if it is possible to download this data
[1:21:58] as a csv file from individual fires for example i would like to know peroxy peroxides in northern california from
[1:22:05] the 2020 fires so so the gocf model uses q-fed fire emissions um so you could download q-fed and examine
[1:22:20] what species are available from the q fed fire emissions database um um for for the the model forecast which might have more
[1:22:33] detailed um chemical species like seen in in that movie you can download cf output i don't know
[1:22:50] know how detailed the chemical output from grcf is um um i'm going to have to follow up on how
[1:23:00] much of their output they save but um if you want to take a look before i do
[1:23:06] you can go to the websites the fluid website that i showed and and download some cf output and and see what
[1:23:15] variables are available um oh but i but i will say um no no no fire emissions data set that i've
[1:23:30] talked about today uh has fire emissions from individual fires fires um um they're all grid based so you know
[1:23:41] individual fires can be much smaller but then then any they they represent emissions within that grid cell
[1:23:52] what are the most detailed spatial resolution data sets for emissions so the fin fire emissions data set and i should
[1:24:01] specify that i mean globally here um these global fire emissions data sets um so finn has the highest spatial
[1:24:08] resolution resolution of the ones that discussed today and i i believe i don't know of another global
[1:24:14] emissions data set with a higher resolution can can geos detect sulfur hexafluoride so i i am am i'm assuming
[1:24:29] so if this is meant to say goes i don't believe goes measures f sf6 and if it means
[1:24:40] gscf and does it simulate sf6 i'm not sure i can follow up and write a more complete answer
[1:24:56] after um during transfer of smoke and other particles are corresponding lifetimes lifetimes of each particle taken into account for
[1:25:05] example if nox has a shorter lifetime how is that taken into account in models yes it's absolutely taken into account
[1:25:12] so chemical transformation um um in smoke is is an active area of research um um whether that's you know and that'll
[1:25:23] depend on the complexity of of the chemistry within that model for example the aerosolization of particles particles you know the in plume chemistry
[1:25:38] the aging of the aerosols that's all taken into account specific to the sophistication of the chemical mechanism
[1:25:51] is modis's frp information available since 2000 and 2002 by thermal anomaly detection or is it more recent
[1:25:59] information information no i believe modis frp is available uh uh for the entire modus time period paul on you can correct me if i'm wrong
[1:26:15] um um can you separate oh sorry pollen did you have something no i was just saying that is correct
[1:26:22] okay okay okay yeah can you separate prescribed fire data from wildfires or do you treat them equally the
[1:26:33] different types of fires are gathered in the total data that's correct the most we can really distinguish between is by the type of
[1:26:43] vegetation burned and and the other way you might be able to detect some prescribed fire is if um
[1:26:54] you know crop or agricultural fires do tend to be you know purposefully set and so we can
[1:27:00] detect detect uh crop vegetation um you know distinct from say grasses and savannahs versus forested so in that respect
[1:27:13] you could distinguish it but if if you're talking about sort of a set prescribed fire within a forested region
[1:27:20] uh uh or or um um like land use practices no we we can't distinguish between those kinds
[1:27:33] is there any link with the ip ip approach for fire emissions and g s moreover how can we get information in
[1:27:44] regards to other african countries like suzanne's for sudan for fire missions and forests um um [Music] [Music] so if this
[1:27:57] i'm not sure what the first question is asking but the the fire emissions data sets that i've
[1:28:09] talked about today all include information for they all include global information information um um so they'll certainly be
[1:28:21] available for any country in africa um yeah yeah and as far as forecasts uh two of the forecasts i covered
[1:28:35] are also global how do we estimate the emission factors and how do we verify their correctness this is a very good question
[1:28:48] um um so emission factors are calculated either in the laboratory through controlled experiments or they can also be calculated
[1:29:02] through field measurements by actually sampling smoke from active fire plumes uh how that's exactly done i am not
[1:29:14] um an emission factor expert so i can't speak with a lot of authority on that um um as to verifying their correctness
[1:29:25] again um i've basically there are um compilations of emission factors in the literature and uh i can
[1:29:41] after the webinar i can include some references references and and you can see you know both from
[1:29:47] laboratory experiments and from different field measurements that um there is consistency um between these uh different measurement
[1:30:00] methods and places where these measurements are taken um um i'm sorry i can't be sort of more
[1:30:06] specific specific than that um um what is the minimum pixel size that can be taken into consideration
[1:30:16] for forecasting fire emissions um um so the finn fire emissions are the have the highest spatial resolution
[1:30:29] of of all of the fire emissions data sets i've shown here so if you have a forecast model
[1:30:38] um um i would say in theory you can you know put fin fire emissions in if you're
[1:30:44] running at a one kilometer squared resolution and even if you were running at a finer spatial resolution if your
[1:30:51] model was running at a finer spatial resolution you know you could still forecast um it's just that your fire
[1:30:58] emissions would be on that one kilometer squared grid where can i find information on the spatial and temporal resolution of modis
[1:31:11] and viirs um so i get part three has some information on that and um paul and i uh had
[1:31:22] a webinar um on both modis and viirs aerosol aerosol information information [Music] [Music] last year and i can link i can put the
[1:31:31] link link to that here for when this document goes on the training website and it looks like that's all of the
[1:31:42] questions questions thanks everyone so much for coming to the webinar again today and for your great questions
[1:31:50] um um [Music] [Music] hopefully you'll join us next week our next uh our next session starts our post fire
[1:32:00] um um our post fire webinars um so please join us next tuesday and you can see here if uh you wanna
[1:32:10] email us a follow question if i wasn't able to answer your question maybe i misunderstood it please feel free to
[1:32:15] email me or the other trainers and hopefully we will see you back next tuesday thanks everyone you
