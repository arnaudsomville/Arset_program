# Water Quality of Larger Inland Water Bodies, Part 2/3

`https://www.youtube.com/watch?v=XLhi-pUMQi0` · id 110 · 1:31:26 · module 9 — Module 06 — Integrating Remote Sensing into a Water Quality Monitoring Program

[00:05] hello and welcome back to the advanced webinar integrating remote sensing into a water quality monitoring program we are on part two of the webinar series
[00:15] with a theme of water quality of larger inland water bodies my name is sherry palacios and my
[00:21] co-instructor is amita mehta we are excited to have our guest speaker dr daniela gerlin from the wisconsin
[00:28] department of natural resources she will be presenting the work she is doing to monitor water quality in the
[00:34] lakes of the u.s state of wisconsin and she will be on at the end to answer your
[00:38] questions questions we understand that we have a diverse audience of participants we hope that each of you will come away from this
[00:46] series with some new knowledge and skill related to the remote sensing of aquatic systems and how it can complement a
[00:52] larger water quality monitoring program let's get started the objectives of this training are to learn to understand which data products
[01:03] are used for water quality monitoring follow rigorous practices for obtaining and processing aquatic remote sensing data data and to build skills in image processing
[01:14] for water quality monitoring for coastal and inland water bodies using nasa's cdas image processing software last week we focused on coastal systems
[01:26] and this week we are focusing on water quality of larger inland water bodies our plan for today is to review some of
[01:35] the material from part one last week talk about water quality monitoring and freshwater systems give an overview of sensors and data
[01:44] products that are appropriate for freshwater systems provide some examples of water quality monitoring programs and freshwater systems
[01:53] systems and then we'll have our guest speaker dr gerlin from the wisconsin department of natural resources give her presentation
[01:58] titled titled integrating remote sensing into a water quality monitoring program following daniella's presentation amita will demonstrate data access atmosphere
[02:09] correction and processing to level 2 for landsat 8 oli imagery first highlights from part 1. nasa's applied remote sensing training
[02:22] program seeks to increase the use of earth science observations in decision making through training for policy makers environmental managers and other
[02:31] professionals in the public and private sector sector we work to help professionals solve problems on such topics of harmful algal
[02:39] blooms blooms flooding flooding deforestation and wildfires our set strives to provide the community with relevant trainings we are always
[02:49] open to new ideas and suggestions at the end of this course you will be given a survey please be sure to fill in
[02:56] much of the material and direction of this webinar series was guided by the survey responses provided to the most
[03:02] recent advanced water quality training offered in september 2018 please give us your feedback in the survey at the end of the webinar series
[03:11] we want to provide useful webinar or in-person trainings to the community in this table we have provided a rough
[03:19] mapping of which in-situ observations correspond to which satellite observations observations please know that these are not an exact
[03:27] match match it would be important for your water quality monitoring program to validate satellite to in-situ observations
[03:35] to have an understanding of how well a satellite estimates the in-situ value this range of understanding or what we
[03:43] call an uncertainty estimate would then give you a frame of reference for how well the satellite observes the
[03:49] parameter parameter and could guide you in decisions to modify satellite algorithms to more closely fit the water quality parameters
[03:56] in your region also remember that satellite remote sensing is meant to complement an in-situ water quality program
[04:05] not replace it also in the first part we reviewed some current satellite missions that are used for water quality monitoring
[04:15] we are in a golden age of remote sensing for water quality this has left us with a long time series of observations
[04:23] please take a moment to look at each of these satellite missions this is a rich data set to mine to
[04:29] understand current water quality questions questions and to begin to understand how aquatic systems have changed since the beginning
[04:35] of the time series we reviewed a general workflow to use as a guide when developing a program that
[04:44] uses remote sensing this workflow includes identifying your problem problem evaluating if remote sensing can complement your in-situ sampling effort
[04:54] taking the time to choose sensors and appropriate data products for your problem problem building a strategy for coincident
[05:01] in-situ and remote sensing observations and using a parallel effort of in-situ collection coincident with overflight of the imager
[05:10] processing in-situ and imagery samples and comparison of in-situ observations with the estimates of corresponding data products using statistical methods
[05:21] followed by the communication of results to the stakeholder if a program involves the creation of remote sensing algorithms this in-situ
[05:30] validation can be extensive even after the algorithm is developed it's important to remember that ground truthing or sea truthing or water
[05:39] surface truthing in this case is an important part of an ongoing water quality monitoring program this workflow is a general guide and is
[05:49] not meant as a one-size-fits-all approach to incorporating remote sensing measurements into a water quality monitoring program each program will have its unique
[05:59] characteristics we would like to remind you that you if you would like to receive a certificate of completion you have homework due and
[06:09] it's due on june 21st the friday of the third week of the webinar series to answer the questions of the homework
[06:17] you need to complete the part 1 exercise after finishing the exercise follow the above link to the google form
[06:24] for the homework this link is also on the webinar series website let's talk a little bit more about water
[06:33] quality and fresh water systems for example what are some of the goals of monitoring in freshwater systems
[06:42] some goals may be to monitor for cyanobacteria cyanobacteria pathogens like e coli man-made pollutants excess nutrient inputs and water clarity
[06:54] why might one want to monitor for these some examples are to understand impacts to drinking water systems to water
[07:02] available to livestock and other domestic animals impacts to wildlife and to the entire ecosystem ecosystem please take a moment to look at the
[07:12] images along the bottom of this slide on the far left is a colorized scanning electron micrograph of e coli which is
[07:19] found in feces and when present in drinking water can cause severe illness in humans the image to the right of it shows the
[07:28] toxic cyanobacterium microcystis well a cup of microcystis as you see in this image is a rather non-traditional
[07:35] way to represent the cyanohab organism this image shows actual cell densities that can be found in lakes and
[07:41] reservoirs reservoirs even at very low density much lower than you see here microcystis can produce toxins that are
[07:48] hazardous hazardous these toxins can cause liver failure and can kill very quickly the image next to that is one of plastic
[07:56] microbeads we are only now learning how harmful these can be in the environment to humans domestic domesticated animals
[08:04] wildlife and ecosystems and very little has been successfully done with respect to remote sensing of these it's an area of ongoing research
[08:15] next to the microbeads image is an image of a dog swimming in the microcystus bloom this can be quite dangerous to
[08:21] dogs and other domestic animals and wildlife as they groom themselves and the licking of the fur or feathers can
[08:27] be a conduit for the toxin into the animal's system on the right of that birds tend to be
[08:33] less affected by microcystis but they can transport it from one water body to the next what are some typical in-situ
[08:43] observations for monitoring freshwater systems systems a lot depends on what the particular problem is for your region of interest
[08:51] typical observations include chlorophyll concentration concentration water temperature water clarity nutrients metals ph and alkalinity dissolved organic matter
[09:03] phytoplankton taxonomy cyanobacteria indicator species like e coli suspended sediments e coli listed here and plastics which remote sensing data products are
[09:18] relevant for fresh water systems again much depends on what the particular problem is for your region of interest
[09:26] remote sensing data products can include chlorophyll concentration water surface temperature light absorption by cedom diffuse attenuation coefficient or the
[09:36] decay rate of light through the water column column water clarity cyanobacterial index which we'll talk about a little bit more today
[09:45] spectral signatures for particular phytoplankton groups and user-defined algorithms developed for a particular region in part one we reviewed satellite
[09:56] missions that are used for water quality monitoring monitoring which ones of these are best for fresh water systems and why a lot comes down
[10:05] to the issue of resolution spatial temporal and spectral resolution one of the major considerations for freshwater systems is the size of the
[10:16] body of water for large lake systems such as the great lakes in the u.s or lake victoria and
[10:23] africa africa modis and veers are adequate yes they have coarse spatial resolution but they have the freak frequent revisit
[10:32] rate and spectral resolution well suited to dynamic lack of stream systems that may change over the course of hours or
[10:38] days for smaller lakes like the ones our guest speaker dr girlin will describe today the finer spatial resolution
[10:47] afforded by landsat 8 oli sentinel-2 msi or sentinel-3 olci enables sampling of smaller water bodies even with lower spectral resolution data
[11:00] these sensors can still be used to derive meaningful data products for the water monitoring of lake ecosystems
[11:07] dr gerlin's work with wisconsin department of natural resources uses these sensors and a custom built algorithm to understand water quality in
[11:14] lakes of her estate one of the key drivers for monitoring water quality in freshwater systems is to monitor for cyanobacterial harmful
[11:24] algal blooms or cyanohabs in waterways used for drinking water these cyano habs can be quite disruptive and water resource managers are vigilant
[11:34] in the monitoring of their presence why are they so disruptive cyanobacteria are such a problem because they can produce toxins
[11:45] produce blooms of extremely high cell density and so suck up the oxygen and they thrive in warmer temperatures
[11:52] so as climate changes and water temperatures increase cyanobacterial blooms will continue to rise rise cyanobacteria are not always harmful but
[12:02] they can be harmful please take a moment to look at the table below it was adapted from a previous rset
[12:09] webinar from a presentation by richard stump moving from the left column to the right you see a list of culprit cyanobacteria
[12:18] genera genera if it forms colonies or filaments if it forms surface scums and which toxins it might produce
[12:27] this is a lot of information to take in many of these genera are cosmopolitan meaning they can be found globally
[12:36] i'd like to direct your eye to the column titled surface scum why might we wish to highlight that one
[12:44] that column the reason is that surface scums are emergent meaning they ride at the surface of the water and often do not
[12:51] have much water overlying them this means that remote sensing reflectance in the near infrared and shortwave infrared can be exploited in
[13:01] remote sensing algorithms to detect these genera please look at the colony or filament column column whether a genus forms
[13:11] amorphous globules or straw-like bundles even at a microscopic scale can have a big impact on optical back
[13:20] scattering spectra remember remember that scattering is one of the inherent optical properties in the remote sensing reflectance function
[13:28] the difference in globules versus straw bales may be just enough for the spectral signal signal of one genus like
[13:36] microcystus a globule to be different enough from the spectral signature of a famine amazon that the two can be distinguished from each other
[13:47] for example in late systems and i'm just going to call it a flaws in lake systems where a floss
[13:54] always precedes the highly toxic microcystis microcystis the remote sensing observations of aflas could be used to forecast microcystis
[14:03] blooms blooms cyanide bacteria occur naturally and are often not harmful sometimes toxic ones form dangerous blooms some of which can be detected
[14:15] using remote sensing observations it is important to be clear up front satellites cannot detect toxins in fact it is unlikely that the current
[14:29] suite of multi-spectral satellites can effectively discriminate among cyanobacterial genera satellites readily detect cyanobacteria that form surface scums
[14:40] and algorithms that use data in the red and infrared portions of the spectrum are currently in use today
[14:48] some algorithms are able to detect optical features diagnostic of phytoplankton or cyanobacteria these include algorithms for chlorophyll
[14:57] scattering at 709 and 779 nanometers and light absorption by ficocyanin at 620 nanometers nanometers currently in use are a number of
[15:08] algorithms that use the spectral signature of cyanobacteria these work fine without atmosphere correction as they use information about
[15:17] the relative differences in the peaks and troughs of the spectra the algorithm commonly used in the us
[15:24] and europe is the cyanobacteria index or ci ci it was developed for the european space agency's maris sensor it is currently
[15:33] used with the sentinel-3 sensor and has been adapted for modis the cyanobacteria index does not require a surface scum but it can work with it
[15:45] it is less sensitive to sediment and water vapor in the atmosphere the reason for this is that sediment and
[15:52] water vapor and aerosols more strongly affect the spectrum in the blue to green part of the visible
[15:58] spectrum so about 400 to 600 nanometers as you can see in the plot below the algorithm that's using values at
[16:06] around 681 nanometers so a part of the spectrum that is not competing for light with sediments and
[16:13] water vapor or aerosols the ci is an indicator of cell density and it is equivalent to the spectral
[16:21] shape at 681 nanometers please look at the plot below i'd like for you to draw your eye to
[16:28] this region here of the spectrum you see this dashed line i'm going to call that the slope line
[16:35] and this is a vertical line from 681 so this um right here where my cursor is is
[16:40] about 681 nanometers the spectrum that is the darker dotted line is the one of a bloom condition
[16:51] condition it is also the one here that has a higher magnitude of normalized water leaving radiance a different
[16:57] unit of measure that is equivalent is similar to remote sensing reflectance the algorithm works by plotting the
[17:05] slope between 665 nanometers and 709 nanometers nanometers you can see that the dashed line here and an orange arrow denoting the
[17:14] vertical distance from this slope line to the magnitude of the spectrum at 681 nanometers nanometers in this case
[17:23] the spectrum is below the slope line it is negative a negative line indicates a cyanobacterial bloom condition
[17:33] the non-bloom condition the spectrum that you see below with the blue arrow has a positive line at 681.
[17:45] sometimes the most effective algorithms are ones that seem the most obvious like is the case with the ci
[17:52] as a person who develops algorithms i have to confide that this obviousness only seems to emerge after the algorithm
[18:00] is developed a lot of hard work goes into building these and especially to validating them so we may have confidence that they work
[18:12] here you see the cyanobacterial index from a nasa modis aqua image collected on august 11 2018. gray indicates clouds or missing data
[18:24] the scale bar along the left gives a relative amount of cell density this is the southwest corner of lake
[18:32] erie one of the great lakes found along the u.s canada border here you see that there is a high
[18:38] concentration of cyanobacteria in this southwest region sandusky bay in particular which right here where i'm circling with my
[18:50] mouth mouth was a region of high concentrations of cyanobacteria cyanobacteria lake erie is the drinking water source
[18:58] for the people who live along the shore water resource managers are actively monitoring both in-situ stations and
[19:05] remote sensing imagery in the form of the lake erie hab bulletin to determine if they should use the water from the
[19:12] lake lake there are a number of nasa and noaa funded research projects in the lake to improve our understanding of these
[19:19] cyanohabs and also our ability to detect them and forecast their emergence and movement what are some cyanobacterial harmful
[19:31] algal bloom monitoring programs the noaa operational lake erie hat bulletin is issued twice weekly and provides forecasts for where microsister
[19:44] microcystus blooms are likely to occur in lake erie and it's issued twice weekly during the period of the year when cyanobacterial
[19:52] blooms are most likely to occur which is in summer and early autumn like a weather forecast it predicts the
[20:00] severity of the bloom and because it takes into consideration wind conditions and lake currents reports the likelihood of vertical
[20:08] mixing and horizontal transport of the blooms blooms the bulletin provides resources for recreational users to visit to ascertain
[20:17] which beaches are safe for swimming it's a straightforward and effective tool for communicating microcystis bloom conditions to the public as well as
[20:27] water resource managers another water quality monitoring program is the noaa experimental lake erie hab tracker tracker the lake erie hab tracker uses satellite
[20:40] earth observations of cyanobacterial blooms and models the movement of the blooms within the lake using wind observations and modeled
[20:49] current data it predicts the location of cyanohabs in the lake up to five days in advance who uses the hat tracker
[21:06] water resource managers anglers beachgoers and others who may wish to know where the blooms are so they can
[21:13] avoid the areas that are affected the hab tracker provides users with predictions of cell concentration and location and it is an effective tool at
[21:23] quickly communicating where the safest places in the lake are to visit another water quality monitoring program is the noaa great lakes hyperspectral
[21:44] monitoring program this program is intended to observe the presence of cyanobacterial blooms like the others research from this campaign is focused
[21:54] on discriminating among different cyanobacterial groups and diatoms in these optically complex lake waters it's possible because the imagery that they're going
[22:05] to be using once they finish developing the the phytoplankton cyanobacterial discrimination algorithm has enough data in it because it's
[22:13] hyperspectral data this program is an airborne campaign meaning the imagery is collected from an airplane the flights occur regularly throughout
[22:24] the cyanobacteria balloon season of summer and early fall they can occur during sunny conditions or during cloudy conditions because the
[22:33] airplane can fly under the clouds so even on days when the satellite does not capture imagery this program does
[22:42] this program is meant to fill a gap high spectral resolution imagery i already mentioned that it's called
[22:49] hyperspectral hyperspectral imagery or imaging spectroscopy data are collected weekly over lake erie and bi-weekly over saginaw bay and lake
[22:59] huron huron imagery is collected over drinking water intakes intakes as well as other regions the cyanobacteria index is computed
[23:08] using the imagery and a report is submitted to the water utility managers so that they may respond to any bloom
[23:15] events events results are also reported to the u.s epa and the governor of ohio in-situ water measurements include
[23:22] instrument suites on moorings as well as ship-based surveys of whole water samples that coincide with the overflights
[23:30] overflights these in-situ data are made available to the active research community working towards developing algorithms and deploying methods to better to
[23:38] monitor for microcystus blooms this project is working towards building a three-dimensional hab tracker that takes into consideration the horizontal
[23:47] movement of blooms but also the vertical structure of the blooms blooms since these blooms often form surface
[23:53] scums there are periods when deeper water is safe for the intakes for the drinking water a three-dimensional hab tracker would
[24:01] help to determine if a bloom threatens a subsurface water intake there is much promise in this program
[24:07] and over the next couple of years it will be interesting to learn more about how the hyperspectral imagery may reveal
[24:14] more about the taxonomy of the lake's phytoplankton and cyanobacteria finally we have the harmful algal blooms analysis tool
[24:25] the satellite imagery analysis tool provides a screening level analysis to prompt field verification sampling to confirm the status of a suspected
[24:34] cyanobacteria harmful algal bloom and presence of toxic species right now this tool works only in the u.s state of california and some water
[24:43] bodies in oregon and nevada near the border with california it is a data visualization tool that computes the ci
[24:51] cyanobacterial index to estimate the concentration of cyanobacteria cells data are displayed in map form to show the spatial extent of the blooms and is
[25:01] also viewable in long and short timelines to show how concentrations vary over time this data visualization tool enables the
[25:11] user to view imagery in a map view but to also view the data in time series as
[25:15] you see in this image here on the left you can see the circle in the lower left
[25:24] it surrounds the northern part of california california our location of interest within this circle you see an orange
[25:31] square this is the location of the lake of interest in this example clear lake contrary to its namesake clear lake is
[25:39] not clear and has suffered from years of cyanobacteria blooms and you can see this in time series plot in the upper
[25:45] right of the image there's a lot to take in with the display of this tool it is a lot of information for the
[25:53] beginning user we encourage you to explore this tool using the link above think about the imagery that goes into
[26:01] something like this think about the type of ground truth measurements are needed think about how this tool may
[26:07] communicate the results in a more direct manner than it may be right now what are the advantages and
[26:16] disadvantages to using remote sensing for water quality monitoring and fresh water systems advantages include long-time imagery record for time series analysis
[26:28] ongoing commitment from space agencies to continue data collection reliable data for operational early warning and forecasting systems
[26:38] some sensors have spatial resolution appropriate for lakes and imagery is typically freely available and of high quality
[26:48] how about the disadvantages shallow water interference from the bottom that's the real disadvantage in these lake systems
[26:58] water bodies too small for the spatial resolution of sensors a limited number of standard algorithms for these optically complex waters and
[27:07] so a need to develop or customize algorithms for a particular region that can sometimes exceed the skill set of
[27:13] the person who's working with remote sensing data but it's also an opportunity to learn atmospheric correction highly variable systems so they're
[27:23] highly dynamic even on short periods of time that are shorter than the revisit rate of the satellite
[27:28] and ground truthing can be quite costly we have now come to the conclusion of our introduction to part two water
[27:36] quality of a larger inland water bodies lecture lecture we have reviewed the reasons for developing a water quality monitoring
[27:44] program in freshwater systems using remote sensing observations we've discussed the cyanobacteria index data product as a commonly used cyanohab
[27:53] related data product and we've explained how it is calculated finally we have reviewed several water quality monitoring programs that use
[28:02] satellite imagery next up amelia and i are very excited to have dr daniela gerland from the wisconsin
[28:10] department of natural resources give us a guest talk about her work in algorithm development development and monitoring water quality and
[28:18] productivity of small lakes in the state of wisconsin in the u.s dr girlin reached out to us in the last
[28:24] year after participating in an arset water quality webinar she had some ideas about future in-person trainings for her region
[28:32] after describing the extensive water quality monitoring program she is a part of in wisconsin we actually asked her to
[28:39] come and give a guest talk in our next webinar series showit so she asked for training from us but we were so excited
[28:45] about her work we wanted her to come and talk to you so we welcome you dr girlin as our guest
[28:50] speaker we hope our participants on this series get as much out of your talk as we have
[28:55] thank you for volunteering to participate in our webinar series and giving back to the community of water
[29:01] resource managers who wish to learn more about using remote sensing in their programs programs thank you hello my name is daniela girlin and i
[29:16] will present on the an integrating remote sensing into a water quality monitoring program i would like to start out to describe
[29:24] some of the remote sensing challenges we discover in the remote setting of optically complex waters afterwards i would like to
[29:33] describe some of the earth observation centers we currently use at the wisconsin department of natural resources resources and then i would like to describe some
[29:42] of our remote sensing activities i would like to present some details on the the satellite water quality monitoring and
[29:50] the data use for integrated reporting and the data dissemination and i would like to finish with an
[29:56] overview of some of our remote sensing research projects there are many advantages and disadvantages to the remote sensing of
[30:03] water quality and remote sending provides water quality data with a high spatial and temporal resolution for thousands of
[30:10] lakes at a time and this is especially true for the northern part of the state of wisconsin where we actually have two
[30:16] to three thousand lakes and one landsat 8 satellite image remote sensing helps with the evaluation of environmental problems and potential
[30:25] health risks and it provides historical data for studies of trends and water quality quality remote sending provides near real-time
[30:33] data for integration into early warning systems to protect the public from harmful algae blooms there are a number of disadvantages
[30:40] associated with the remote sensing of water quality though lakes and reservoirs are typically optically complex which means that we
[30:49] have a lot of different optically active constituents constituents which concentrations differ and depend of each other we might see interference from the lake
[31:00] bottom bottom we might see dynamic changes in water quality quality which are within a couple of hours for
[31:07] some of the lakes and and within several days for other lakes and remote sanding is limited to a
[31:15] number number small number of water quality parameters of interest it means we can retrieve any water quality parameters which are related to
[31:26] some sort of color in the remotely sensed data remote sensing typically requires a collection of ground trust data for the
[31:35] development of algorithms the earth observation sensors we currently use at service content dnr include include landsat 7 landsat 8
[31:45] sentinel 2 and sentinel 3. we routinely use landsat 7 and landsat 8 um to retrieve the water clarity for the
[31:54] lakes across the state and we use sentinel 2 and sentinels resource for some of our smaller research projects
[32:01] the different satellite sensors come with with their different advantages and disadvantages landsat 7 and landsat 8 have a relatively high spatial
[32:10] resolution of 15 meters they have very wide spectral bands and only a limited number of bands which makes them mostly
[32:17] suitable to estimate overall water quality parameters like the water clarity sentinel 2 has some additional spectral bands which are
[32:28] relevant for the remote sensing of colloquial a concentrations and sentinel 3 has several additional spectral bands which is relevant for the remote sensing
[32:38] of several constituents of interest the disadvantage of sentinel 3 data is the large pixel size of 300 times 300 meters
[32:47] which means the data is only suitable for larger lakes the signal the satellite measures and the signal we're interested in is a
[32:56] remote sensing reflectance so remote sensing reflectance is the ratio of the water leaving gradients the light that comes up from the water
[33:04] surface to the downwind irradiance the light that comes down from the sky so remote sensing reflectance is dependent
[33:11] on the solar senate angle the solar azimuth angle and the wavelengths the remote sensing reflectance is directly related to the absorption and
[33:24] spec scattering in the water column which are represented by a for the absorption coefficient and bb for the
[33:29] back scatting coefficient and the remote sensing reflectance is sensitive to variations in the solar senate angle and
[33:36] the bi-directional properties of the reflectance which is represented by the ratio of f over q the signal we are actually interested in
[33:45] is the absorption by different types of particles represented by a we have a ph for the absorption by phytoplankton
[33:51] which is related to chlorophyll a concentrations concentrations a nap the absorption by non-argo particles acetum the absorption by color
[33:59] dissolved organic matter and a water and c um um idea of the remote sending of water quality is to separate these different
[34:09] absorption coefficient and retrieve them and relate them to the constitutions of interest if we look at a typical reflective
[34:19] spectrum from one of our lakes from lake winnebago winnebago we can see that the different constituents absorb at different
[34:25] wavelengths wavelengths and we have absorption like chlorophylls carotenoids non-algae particles and sedum in the blue spectral region then a
[34:34] very specific absorption maximum of sapphireno phycocyanin at 630 nanometers and one by chlorophyll a at around 670
[34:44] nanometers nanometers and several characteristics get peaks related to scattering by total suspended matters at seven hundred and ten
[34:52] nanometers and eight hundred and twenty nine to one meters this is a spectrum that's very typical for turbid waters with algae blooms and
[35:02] especially the scattering related peak at 820 nanometers is only found in very turbid conditions if you look at the next slide we can see
[35:15] the way the spectrum looks overlaid with the the spectral band locations of several different satellite sensors and we can
[35:22] see that landsat 7 and landsat 8 have very wide spectral bands which means a lot of suspected detail of reflections
[35:29] reflectance spectrum is averaged out sentinel 2a has some additional bands and they're a little more narrow bands
[35:36] four and five and the appropriate spectral regions for the remote sending of chlorophyll a concentrations and when
[35:41] we look at sentinel 3 we see very narrow spectral bands and a very high number of spectral bands we have band number seven
[35:48] and the relevant spectral region for the remote sensing of phycocyanin we have bands eight to ten in the relevant
[35:54] spectral regions for the remote sensing of chlorophyll a and then of course band 11 11 where the tss core scattering peak is
[36:03] the remote sensing activities at service constant dnr includes a systematic retrieval of the water clarity from landsat 7 etm plus and landsat 8 only
[36:12] tis data then the studies of major drivers of lake water quality the interactions and the potential impacts of land use and
[36:20] climate on water clarity and then we concentrate on an increase in earth observation monitoring capabilities through the optical and
[36:28] biogeochemical characterization of lakes in support of algorithm calibration refinement and validation the graph to the right shows the number of satellite
[36:37] retrieve water clarity measurements from 1999 when the project started to 2015 the latest data we currently have
[36:45] is a 2017 data and we retrieve around 7000 to 10 000 average water clarity values for each
[36:54] year year the project started with a research project at the university of wisconsin-madison in 1999 where they first related
[37:05] the the landsat data to um segitip's measurements which were taken on the ground on satellite image acquisition dates and the process has
[37:14] changed little since the wisconsin dnr continued to process the data citizen lake monitoring network volunteers collect executive
[37:23] measurements on satellite image acquisition dates then these landsat images for these states are processed and the measurements are related to the spectral
[37:34] values found in the image there is a multiple linear regression step to relate the satellite and ground
[37:41] truth data and then the same model is applied to the satellite images to derive derive maps of lake water clarity
[37:49] the data is then used for the wisconsin water quality in report to congress and the data is disseminated through
[37:56] different online outlets the example shown is a 2016 satellite retrieval of the water clarity it starts with a pre-processing and mozzarella
[38:07] icing of landsat 7 and 8 images followed by the extraction of your data signatures from these images the next
[38:14] step is the multiple linear regression of field and satellite data followed by the retrieval of the water clarity from
[38:20] landsat images the software packages used for the 2016 data included arcgis 10.41 for desktop nv 5.40 idl 8.60 are for windows and rstudio the
[38:33] software packages change depending on updates with every year of image processing processing the right side of the
[38:40] slideshow c image processing steps in a little more detail and these image processing steps are all performed in nv access point in
[38:49] time time i typically download the landsat collection one level one data and that converts the image digital numbers to
[38:57] top of atmosphere reflectance which is the input product for the currently used cloud and cloud shadow removal algorithm in nv
[39:07] the images are reprojected to this constant transfers marketer which is a standard coordinate system for all the state of wisconsin
[39:15] data products in the next step land and residual clouds are removed through a near-infrared threshold and afterwards
[39:23] shallow waters aquatic vegetation and lake edges are identified and removed through an unsupervised classification in the last step mosaic rasters are
[39:32] built for images which are acquired on the same image acquisition dates which in the case of this content is a mosaic
[39:38] of three of the three images the left of this slide shows one of the image processing steps
[39:44] in more detail it shows removal of edge effects for lake winnebago and this step is performed through an
[39:51] unsupervised classification the little charts show the spectra for the shoreline of lake winnebago which was removed in the step and an algae
[40:00] bloom in lake winnebago which was maintained in the image the areas marked in red in the image of
[40:08] lake winnebago are the areas that were removed through the unsupervised classification and you can see that these areas are mainly
[40:14] the border the areas around clouds which are areas with increased haze and then there is a thin red line at the
[40:22] shoreline and this line actually represents both docks in lake winnebago so it represents mixed pixels of water
[40:29] and boat docks the model for the satellite retrieval of the water clarity is very simple it's still the same one used since 1999
[40:38] and it uses basically a ratio of the blue landsat 8 only burnt over the red landsat 8 all event in 2016 i
[40:49] processed 76 landsat 7 and 8 images i used 11 image mother x for the algorithm development and 608 ground
[40:57] truth measurements for the algorithm development development this effort resulted in 9750 water clarity estimates for 2016 and water clarity estimates means that
[41:09] is the average water clarity for each lake so we don't extract the water clarity for individual stations within a
[41:15] lake we calculate the average water clarity for each lake so these are basically values for 9750 different lakes at different dates
[41:25] and times and so this resulted in 4 500 water bodies so about two measurements for each water
[41:34] body body the average mean abs normalized absolute area was two feet or sixty centimeters most of our lakes had water clarities
[41:44] from about four to sixteen feet this data is then used for the integrated reporting and the integrated reporting is
[41:58] reporting to fulfill the federal requirements for statewide water quality condition reporting and for this water quality standards are
[42:06] used to define goals for water bodies reuse designations use protection and water quality protection and the water quality monitoring data is
[42:14] used to assess the current status of the water body there are general and specific assessments a report combines these two
[42:23] assessments assessments and which results in the title integrated reporting the death incanted users are classified into four
[42:31] categories which are aquatic life recreation public health and welfare and wildlife the general condition assessment include multiple metrics
[42:43] and the carson's traffic state index which is one of the most commonly used indices of lake productivity is one of
[42:49] these metrics this carson traffic state index is calculated calculated from chlorophyll a or psychedeps at the wisconsin dnr which includes the
[42:58] satellite and third segy depths and it is calculated automatically with a programming package the equation for this is shown on the right
[43:08] the calculation of the um um traffic state index in the r programming or in the programming package requires a
[43:16] minimum of three water quality measurements for each summer the data we have is disseminated through the lakes and aquatic invasive species
[43:29] in addition to its use in the integrated reports reports for this i create a water clarity composite for each year to show the
[43:36] average summer water clarity for each lake lake and the um landsat images for this water clarity composite are selected dependent on the
[43:46] accuracy of the satellite water clarity retrieval and the um coverage of the actually actually images after the removal of clouds to
[43:56] reduce the number of image artifacts we can see in the viewer you can see in the screenshot that
[44:03] we are looking at landsat 7 data for this map landsat 7 data is typically more noisy which is caused by the
[44:12] difference in the signal to noise ratio and you can see from the noise within the individual lakes that it is suitable
[44:19] to calculate the average water clarity for a lake but it is less suitable to extract the data for individual stations
[44:30] the second outlet we use to share the data is the wisconsin dnr open data portal portal and you can find the same data sets in
[44:37] the wisconsin dnr open data portal and actually download the data sets and you only have to search for satellite water
[44:45] clarity clarity our remote sensing research project focuses on the development of new earth observation monitoring capabilities and therefore we steve grab and i
[44:59] collected a lot of field data in summer in fall 2014 and 2015. to simulate the spectral bands of
[45:05] different satellites for algorithm development we collected data at 32 lakes in wisconsin we collected the standard water quality
[45:14] data radiometric data and absorption and back scattering data and we share this data if it is requested
[45:20] recently we had some additional field data collections to support different partnerships in summer 2016 and 2018 and
[45:27] we will collect some more field data of the same type in summer 2019 in green bay at the aeronaut or seaside
[45:38] the last slide shows one of our additional projects we are actually currently looking at the remote sensing of the lake superior
[45:46] nearshore and the images retrieval of the total suspended meta concentration in the lake superior nearshore from a
[45:53] landsat image from july 2014 the image was processed with a cc2rcc processor in the asa snap snap software
[46:04] and it shows the distribution of the tsm pretty accurately there was some offset in the magnitude of the data it was a
[46:13] very small offset though and we will process more images to see if we look at any sort of systematic offset there and
[46:21] the objective of this project is to identify the extent of the lake superior neutral region depending on the
[46:30] distribution of tsm and the water temperature in this region thank you for your attention thank you very much dr girl and that was
[46:42] a really interesting talk and i'm excited to see more of the data products and to visit the website that you listed
[46:52] next up i'd like to introduce dr amita mehta who has been my co-instructor on this uh webinar series it's been really
[46:59] wonderful working with her and she has put together a demonstration of landsat uh data landsat 8 oli to download and to
[47:07] process it through atmospheric correction and to derive level 2 products so amita please take it away this is a brief demonstration
[47:22] and the objective is to prepare for an exercise that you will be conducting next week the exercise will focus on comparing
[47:31] landsat derived chlorophyll a concentration with in-situ measurements of the same quantity in selected lakes in wisconsin we will talk about the in-situ data next
[47:42] week week but the demonstration today will include downloading landsat 8 operational lan imager level 1 data using usgs earth
[47:52] explorer explorer and we will focus on a specific tile that is on wisconsin covering small lakes where institute measurements are
[48:01] taken taken next we will install ocean color science software in cdas some of you may already have installed this but if not this is
[48:11] the time to install it and that helps in processing processing level 1 images finally we will convert
[48:18] landsat 8 operational then imager level 1 data to level 2 with derived geophysical quantities and we will also
[48:27] see how to do partial atmospheric correction so these are the steps we'll first start with the usgs earth explorer dr sherry
[48:38] palacios already demonstrated this last week so we will go through this very quickly quickly last week you had picked a box with
[48:46] latitude and longitude in gulf of mexico today we are going to focus on wisconsin and we already know path and row of uh
[48:55] landsat 8 image that had overlapped with institute measurements so we are going to enter this path which
[49:02] is 23 and row which is 30. and then when you say show it shows the location where this is
[49:13] also the in-situ measurements were taken in 2014 where there was overlap with landsat 8 overpass in september
[49:26] 23rd 23rd so we're going to enter this date 2014 september 23rd and then you can select data sets
[49:40] we're going to pick landsat landsat collection level 1 and landsat 8 level 1 data once you select this criteria you can
[49:53] leave other things as default for now and look at results this shows this footprint shows where this image is
[50:02] the location of the image and clicking on the image you can see uh uh level one image and you can see all
[50:10] these small lakes scattered here in wisconsin wisconsin once you have this you can go ahead and download this data
[50:20] you can download this as level one geotiff by clicking here it takes a few minutes all about 10 to
[50:27] 15 minutes sometimes depending on the internet speed to download one tile of landsat 8 data but you can
[50:34] download it which i have already downloaded when you download this file you will get a zip file
[50:47] and by double clicking on it or using an appropriate software you can have all these unzipped file
[50:56] file here so next we are going to go to cdas and we are going to install ssw
[51:08] ssw if you already have ocssw installed you will see all these links highlighted if it is not then you will not have these
[51:16] links highlighted but you will see here update data processors or install data processors and you would click on that
[51:25] once you click on that you will see a number of options for different sensors for which science software can be
[51:31] installed in here we have picked aqua terra and landsat oli by picking this and also you can
[51:40] say clean install so that actually helps in in installing the software in error-free fashion and then you can run this
[51:48] once you run it you will be able to access any of these routines under oc ssw in ocssw we are going to use l2 gen
[52:04] which is level 2 generation that will convert level 1 data to level 2. you have multiple options here that we
[52:13] will see some of them but first thing is to input the file i file here is the
[52:18] file that you just downloaded and unzipped unzipped that you downloaded from usgs explorer this is the unzipped file and
[52:29] the file that you would use as input is mtl mtl txt file click on that it takes a minute but it
[52:41] appears here this is level one data and it automatically fills this output file name which is process data
[52:51] and this is level two format as you can see this is level two now next thing you would do is
[52:58] check get ancillary data these are the ancillary inputs they are used for atmospheric correction so you need
[53:08] them on next look at the products you have multiple products here you can select multiple products we are going to
[53:16] focus on two things here one is these radiances and reflectances and as you can see all the reflectances
[53:26] remote sensing reflectances are there these are all optical um blue green red data you can also have
[53:34] infrared infrared near infrared and short wave introduce all these data on if you like and and next
[53:43] next we're going to look at derived geophysical parameters as i mentioned earlier this particular exercise we will focus on chlorophyll a
[53:52] concentration but you can see that there are other options and at the end of the presentation you have links to go to
[54:00] ocssw and know wall what all these parameters are so so keep everything else as default you can
[54:10] go to processing options and here there are some changes that we have to make for lakes in wisconsin
[54:18] as we mentioned earlier cdas works with ocean color open ocean data mostly and so when you are working
[54:26] with inland lakes which may be small and turbid turbid there are some things that have to be
[54:32] adjusted to use this first thing you will do is go to aer opt this is the aerosol
[54:39] aerosol correction for which we're going to turn off we're going to say no aerosol subtraction subtraction for small turbid lakes sometimes
[54:47] subtraction for aerosol optical properties that gives errors so we're going to turn that off we're going to keep all these
[54:56] parameters as default but go down and turn this cloud mask off this this hilt hilt off and
[55:06] land mask off these masks have resolution which is about 500 meters or so especially land so that masks small lakes so we're going
[55:16] to turn them off for now and use other threshold to to get master land later on once you do that next thing you want to
[55:25] do is go to processing option and here you will pick two this is force all pixels to be processed as
[55:35] ocean ocean this way we make sure that all the small water bodies are appear as water bodies
[55:43] after doing that you can run this you can also explore other these are the thresholds for different parameters that you can
[55:53] change for now we're going to um leave them as default things change with different cases but we're going to keep
[56:01] these options as they are for now here here there's also something to note that these are the coefficients for
[56:12] different parameters and for chlorophyll also also what happens is these are ocean color coefficients but if you have your own
[56:19] coefficients based on other instituted data then you can enter them here and use them to calculate products
[56:27] but we're going to leave everything else as is and then go back and run this i already have run this
[56:37] so i'm going to because when you two things installing ocssw and also running this will take a long time it will be
[56:47] when you process this it may take up to half hour sometimes so you will be doing it
[56:53] between now and next week for the image that you will be working next week so i'm going to cancel this now and
[57:01] i'm going to open the file that i have already processed so this is level 2 data data that was generated by using level 1 data
[57:10] that we downloaded from usgs earth explorer just a few minutes ago once it loads in a few seconds you will
[57:18] see all the rasters here you will see multiple options that we kept in products in ocssw this is error
[57:25] called aerosol optical thickness you see deflectances chlorophyll a this is attenuation coefficient we're going to focus on chlorophyll a
[57:35] concentration so by clicking on that you can get the raster image up here in the main window
[57:50] once the image is loaded you will see that this is lake superior this is lake winnebago and
[57:59] there are small lakes here here everywhere everywhere but we treated all these land pixels also as ocean pixels or water pixels so
[58:09] that's why you see all these what we're going to do now is go to mask manager here
[58:16] and turn on this cloud eyes mask on that that uses a threshold based on near infrared reflectances so because
[58:36] land appears bright compared to all the water bodies it masks land nicely although it says its cloud mask
[58:45] basically we are kind of making sure that only thing we see is water bodies here by masking land
[58:55] using that threshold that is usually used for clouds and so here you can see all these small lakes visible we are
[59:02] going to focus on in-situ data of two lakes in here but for now this is what we wanted to do so this
[59:11] ends the demonstration you will go through these same steps for your homework you can download the homework from our
[59:20] website and it guides you step by step to get an image for first september 2015 for which also we have in-situ data
[59:31] in some legs and then you will go through the same process and get chlorophyll a concentration map for that
[59:38] particular day in that particular tile so that is going to be the homework next week when you come in you will be
[59:47] using that image in cdas you will open the image and then we will do some processing we will get in situ data in
[59:54] here and then compare lenses based chlorophyll a concentration and in-situ data so that is going to be
[1:00:02] the next week but because it depends on your image processing this week your homework is very important
[1:00:10] so that ends today's demonstration this is a homework two and this you will be doing this homework
[1:00:20] in preparation for the exercise that you will be doing next week so the objectives here are first install
[1:00:28] this ocean color software in cdas for processing landsat 8 ole images and that is to convert level 1 to level 2.
[1:00:37] so we'll download just as you saw in the demonstration you will be downloading landsat only level one image for
[1:00:46] a different date than we saw today and then you will also convert that to level two data and then we will do further
[1:00:53] processing next week we are focusing this on again wisconsin but these are two different lakes that we'll be
[1:00:59] looking at than what we saw today in the demo demo this uh homework you will find step-by-step instruction in a document
[1:01:07] which you can download from the webinar website or you can go on our set website and download this document and
[1:01:16] please follow all the steps so that you can have installed ocsswmcdas also you can download landsat image for a particular
[1:01:27] date which is 1st september 2015 and then you convert that that using using ocssw ocssw so next week when you
[1:01:39] come in for the webinar you will have a level two image for a given tile here it's given the
[1:01:47] paths paths and row are given here and this is what you will have so there is nothing
[1:01:55] to submit for your homework this week you just will come back with a corrected level 2 image and then we will work
[1:02:03] further further in class during the webinar session with this data so please follow these steps you can
[1:02:10] download this document from our set website again or from the webinar file section and then we we will work with you next week once
[1:02:22] you have this image so thank you all right thank you amita that was really interesting and i hope our
[1:02:33] participants get a lot out of that demonstration that you just gave next up we're going to open the floor
[1:02:39] for questions from our participants you'll see in the questions area of the browser browser that you're using for the webinar uh a
[1:02:48] box where you can type in your questions and if you haven't already been doing so during the webinar series um and today's
[1:02:55] webinar please do so now we're really interested in being able to answer your questions online will be dr gerlin
[1:03:03] dr amita betta and myself and we look forward to hearing from you thank you uh you guys have provided some really
[1:03:10] great questions and i'm excited we have such an active set of participants it's really cool learning about some of
[1:03:16] your projects as you post them fisheries in indonesia minerals in the salton sea forests forests small lake systems and forest systems
[1:03:26] and and so thank you we really appreciate you guys participating i see here that uh dr betta anita is online now good morning
[1:03:34] amita or afternoon i think where you might be yes hi everyone and um so we're gonna start off here i just a couple of
[1:03:45] administrative things before we have dr gerlin on a couple of people have asked are there going to be step-by-step
[1:03:53] instructions going through the demo and exercise and yes these are provided to you in the handouts and if
[1:03:59] they're not currently in the handouts section here they will be on the website so please go to the website link and
[1:04:06] look for those handouts there if you don't see them here we've taken a site kind of a hybrid approach this time on
[1:04:13] being very general with some of our instructions and being very specific with other sets of instructions um those
[1:04:19] survey questions that you guys answer at the end of the course are really important to us to understand what do
[1:04:23] you guys prefer because we really respond to what you guys want we want to provide trainings that are really useful
[1:04:28] to the community how detailed do you want those instructions to be with the understanding of course that you know
[1:04:34] software changes and so some of those instructions may become a little obsolete over time but the the idea is
[1:04:39] there is we want to provide a service to you that is meaningful um we get a lot of uh
[1:04:45] uh information from our uh participants during the serve or during the surveys and so as i mentioned
[1:04:51] earlier in this presentation uh dr gerlin actually reached out to us as a part of the survey and then it became
[1:04:56] some interviews and more questions and then she ended up becoming a guest speaker because we were so excited about
[1:05:02] the work that she does i have a few questions before we launch into all of this and amita by all means please i'll
[1:05:09] make sure to close my mouth and please jump in and ask questions as well um i want to thank daniela she has given us
[1:05:18] very graciously of the in-situ data that we are going to analyze next week so the image that we just demoed this week we
[1:05:25] downloaded and the one that you will download for your homework we will analyze institute data for those images
[1:05:31] like those image overpass so thanks daniella for yeah thank you daniella it means a lot to our site um so one of
[1:05:41] the questions we have is what was the motivation for this water quality monitoring program that you guys have
[1:05:47] and using remote sensing for it um um okay i think i tried to type it into the
[1:05:56] online document and in wisconsin we have almost 18 000 lakes so it's practically impossible to monitor all of these lakes with
[1:06:04] traditional water sampling water quality monitoring techniques where someone actually has to go to travel to a lake
[1:06:10] and collect water samples and i think that's where the idea for the remote sensing work comes from and
[1:06:16] this data currently supplements your traditional measurements it's used for the identification of trends and water quality and it's used to plan future
[1:06:25] monitoring activities if we see any changes in specific lakes and the idea is that the water clarity
[1:06:31] is a very simple measure of water quality and while it still provides some important information about each lake in
[1:06:38] the state wow wow and how long has it been going on since 1999 the project started with a
[1:06:46] research project at the university of wisconsin-madison from 1999 to 2001 and i think there was a gap of one year
[1:06:54] afterwards and then the wisconsin dnr continue to process the data and the image processing protocols were always
[1:07:02] slightly updated over time and i think the next step is to maybe move the image processing to google earth engine
[1:07:08] oh oh great oh that's cool um and how long have you been a part of the program
[1:07:13] since 2014 oh wow okay nice nice um um do you guys do more than just do you guys do more than this program
[1:07:22] because this program sounds like a lot of work um but i know that when we talked to you guys talked to you a while
[1:07:27] back it sounds like you do so much more and i'm curious what you do this program is actually only a small
[1:07:34] part of my work and we collected steve crap he is currently with the university of wisconsin-madison and steve and i we
[1:07:41] collected data for probably about 24 wisconsin lakes in 2014 and 2015 we collected radiometric measurements on these lakes we collected
[1:07:51] laboratory measurements of the absorption coefficients for these lakes and then standard quality measurements and we intend to use this data to
[1:08:01] develop algorithms for the remote sensing of chlorophyll a and tss in particular and maybe sedum and in addition to this we share the
[1:08:10] data data with partners or people which are interested in the data to use it for global algorithm development
[1:08:18] since it's really much easier for us to use final remote sensing pro products and to process the images os health
[1:08:27] wow that's a lot you guys do a lot so so in 2017 we had a harmful algal bloom
[1:08:35] webinar series and we had a guest speaker from the cyan project that's based in the usa the epa
[1:08:44] agency agency and this guest speaker told us about the program so if our participants are interested in learning more about that i
[1:08:50] think it was during session three or four we had the guest speaker for that and with the type of work that you guys
[1:08:56] do there in wisconsin i was curious are you affiliated with this cyan um project or do you work with them in some way um
[1:09:03] we are not affiliated with the science project we work with samtis in some ways though and we
[1:09:11] actually we tested the cell phone app the the project developed and provided feedback for this and our harmful algebra
[1:09:18] specialist uses the cell phone app from time to time when she receives questions related to specific lakes and we try to integrate the
[1:09:27] products uh provided by the scion project in our current monitoring work and what we're interested in there
[1:09:34] is to calculate the areas of algae blooms and to calculate the intensity and the onset of algae blooms to see
[1:09:42] which lakes across the state out of these eighteen thousand lakes have potentially harmful algae blooms and at
[1:09:48] what times of the year they develop and then we collected some radiometric data and again standard water quality
[1:09:55] data data in summer 2018 and we will share this data with the scion project and some additional projects
[1:10:03] and for their validation efforts do you use volunteers or citizen scientists in the efforts that you guys
[1:10:12] do do yeah they um the for the also or most of the water clarity measurements they are collected
[1:10:19] by by citizen scientists and then some citizen scientists collect additional water chemistry measurements and we had a project
[1:10:28] to collect water samples for the analysis of watercolor and sedum in 2004 13 14 and 15 we didn't have much
[1:10:39] luck with the landsat images for these years in terms of cloud cover so and we might revive this at some
[1:10:46] point in time in the future with the additional sentinel 2 data we have today do you find the tools that you the links
[1:10:54] that you provided do you get feedback from people on the what people who are using those links
[1:10:59] for the tools um your visualization tools i don't really get feedback for them what we did last year was that
[1:11:10] i presented a poster at the wisconsin lakes partnership conference conference in stevens point which is an annual
[1:11:18] conference where people from all aspects of water quality monitoring and volunteers come together and we had some tablets there with us
[1:11:28] and we had people um basically look at the tablets and look at their lakes and people are typically excited to see
[1:11:36] their lake and i always waited for somebody to tell me that the water clarity estimates were way off for this
[1:11:43] leak and people were typically happy and they were either right on or fairly close for the lakes people looked at
[1:11:51] one of the things i really like about the link and the tool that you have is it seems like it's something that our
[1:11:56] participants could go and view it and think about how they might be able to implement it in their region and so we
[1:12:03] were really excited that you provided that information at the end of your talk and what i would tell our participants
[1:12:08] is that to um the talks are part of the video that will be available online and also in the pdfs so if you weren't able
[1:12:16] to write down or type in that link address to please go and visit um dr girl and the links that she provided in
[1:12:22] her presentation um so danielle one of the questions i have is do you use hyperspectral or imaging spectrometry data in your work
[1:12:31] any of these hosts yeah i currently don't use it in my work i used asa eagle data and my work for my
[1:12:37] phd phd and and we currently only use the data that we can get for free so that's the landsat
[1:12:44] data and central data of course and i can recommend to use hyperspectral data if you have access to it
[1:12:52] and i can for the whole full state of wisconsin it makes it a little of a challenge to fly over all
[1:12:58] these lakes and collect hyperspectral aircraft data if you're looking at a river system that might be something
[1:13:05] really you should really want to look at so so okay thank you and then i i know i'm throwing a ton of
[1:13:12] questions and i want to pause for a moment and ask if amita has any questions before i ask one of these last
[1:13:18] ones that i personally have no i think you covered everything sherry if i think of something okay
[1:13:27] okay so another question i have is you're working in these small lake systems and often we get questions from participants
[1:13:33] coming in about using drones or uav or uas uas in their work and um so i'm curious
[1:13:40] because i work in the coastal ocean and i'm looking at large-scale processes so for the type of work that you're doing
[1:13:45] in these smaller lake systems do you use drones in your work or do you know if there's a plan in the future to use
[1:13:51] drones in your region and this question goes to daniella look we may have lost her audio oops sorry i turned my mic off
[1:14:09] yesterday i have two of them anyway anyway i currently use don't use drones in my work work and i haven't looked at their use for a
[1:14:18] while the use of drones comes up from time to time and i will have to check back on the status of the official
[1:14:23] wisconsin and our policies for this so there are a lot of regulations involved if you're a state
[1:14:28] agency agency and for me they're uh they would be applicable for certain projects and we look at specific lakes
[1:14:35] but but i normally look at the lakes in the full state so that is again something where the coverage of drones
[1:14:43] special coverage of drones wouldn't really work for this type of work but i would recognize recommend to use them if
[1:14:50] you you have access to them if your company policy so government policies make it possible to use them and if they work
[1:14:58] for the spatial or if they have spatial coverage works for your areas of interest okay okay um a question came up for you from one
[1:15:09] of our participants and it's question 10 on the document here it's what is the purpose for building of mosaic rasters for
[1:15:18] images from the same image acquisition dates dates um i always combine the um um images from the same image acquisition
[1:15:28] dates which is up to three different images for the same path since there are areas of overlap
[1:15:35] and that way i basically end up with only one water clarity estimate per pixel and instead of two estimates for each pixel
[1:15:44] in the overlapping areas which i would have to average somehow later on and then and later on i actually calculate the
[1:15:52] average water clarities for the full legs so that is very practical at the end end and then we have the advantage sets of
[1:15:59] weather systems in wisconsin typically move from west to east and we have only relatively small differences in the atmospheric
[1:16:06] conditions from north to south so it doesn't really affect the quality of the data in a bad way
[1:16:13] this might be very different for different regions of course okay okay um um so uh instead of me asking you a question i'm
[1:16:22] wondering if you have any words of wisdom or advice for our participants online who are working in inland systems
[1:16:29] on designing or developing or being a part of a water quality monitoring program that uses remote sensing
[1:16:37] like a big picture any advice let's see i would if you're starting out i would possibly keep it simple the water
[1:16:46] clarity is something that you can retrieve from virtually every satellite and it's something that's cheap to measure
[1:16:55] because you only have to provide people who measure in the field with a disk and they can use it again and again
[1:17:01] it's it's so it's much cheaper than any actual water quality analysis we have to send samples to the lab
[1:17:08] i would encourage to engage citizen scientists to collect data on image acquisition dates people in wisconsin are typically very excited to collect
[1:17:19] the satellite data and they make sure they will collect data on the correct day we actually send out a calendar for
[1:17:25] them on which dates the satellites will come over their specific lake and their path so they can look up their path and
[1:17:32] then see the dates for their lake and and then even though i presented the work with two commercial software
[1:17:41] packages there are a lot of free software packages out there that perform basically the same image processing tasks so there are many ways
[1:17:50] you can process the data and come to um high quality results and then let's see i forgot the last thing i
[1:18:01] wanted to say never mind okay okay thank you so much so i'm gonna um give you a break daniella because i'm kind of
[1:18:08] putting you on the hot seat and i didn't really give you a warning before we started today so thank you uh for
[1:18:14] talking to us about this um a question has come in on number two but i'm going to give you a break and i'm
[1:18:19] going to just address some of the other questions that have come in from our participants if you don't mind helping
[1:18:25] us out maybe answering that number two in the document and then i'll come back and ask you after i've addressed some of
[1:18:30] these other questions okay thank you okay so one of the questions that came in was is it possible to use cdas on
[1:18:37] windows os and the answer to that is yes in a limited form you can use it for a lot of the image
[1:18:43] processing tools that we're going to be talking about that we did in part one and that we are going to cover in part
[1:18:48] three three the if you're going to be using the oc ssw processors it's required that you use this additional tool that they've
[1:18:57] just implemented called the cdas ocssw client server configuration and a number of people have put into the questions
[1:19:05] that we're having problems accessing this and we're aware of this and we've contacted the cdas team and
[1:19:10] we're going to work with them on this the data that um the demonstration that amita provided today
[1:19:17] those data will be available to download so you're going to be able to use the data so you're not gonna need to use
[1:19:23] these processors to um to do part three um but we would like for you to to try
[1:19:29] to access this and give it a try and do the homework so don't panic if you don't
[1:19:33] have those data by next week it will be available for you on the website in the processed form so maybe i've preempted
[1:19:40] yes please do your homework but the data actually will be available to you so don't please don't panic
[1:19:46] another question came up um let's see um if we found a difference between field data and remote sensing
[1:19:54] data what's the best solution for it um just to see okay um so this gets at the heart of the question
[1:20:02] of doing validation of in-situ and remote sensing data and i'm really happy to see this question come up because
[1:20:07] anita is covering this in the exercise in part three so please hold on until part three dr girlin here online has
[1:20:15] provided very kindly has provided in-situ data for us to work with to practice trying to do a validation um on
[1:20:23] the data using cdas and also putting that data the institute data into a c-vas format s-e-a-b-a-s-s format so that
[1:20:33] you can do it within the c-d-s software a question came up about using c-das for high spectral resolution
[1:20:45] images images and um so while the webinar series was happening i wasn't sure of the answer of
[1:20:51] this so i sent a text message to my colleague dr vanderwood who works with hyperspectral imagery we work on it
[1:20:58] together and because i wasn't sure if cds has started supporting high spectral resolution imagery and she was told in a
[1:21:06] recent recent hyperspectral workshop that cdas will soon start supporting high spectral imagery high spectral resolution imagery um because i'm still just learning about
[1:21:16] this i want to go to the cdas team and confirm that this is the case that it's
[1:21:21] actually in the release and not the beta and if it's in the gui or is it in the
[1:21:25] command line version only so i will provide an updated answer to this in the online question and answer when i
[1:21:32] complete the answers to this so if it's not in the part one question and answer when you look for this excuse me if it's
[1:21:38] not in part two today's question and answer it will be in the part three question and answer because it may take
[1:21:44] a few days for me to get a response from the cdas team another question came up about using a
[1:21:51] landsat collection one level two data and if it's the data that's available from the usgs earth explorer
[1:21:59] and is it considered inappropriate for water quality monitoring and then we'd like to note that the usgs
[1:22:06] collection of landsat and level 2 data are more valid for the land surface that atmospheric correction for when the
[1:22:12] water surface is done differently using the oc ssw processors and it's better for water quality so we just barely touch on atmospheric
[1:22:22] correction in this webinar series you could do an entire webinar series just on atmospheric correction um and if
[1:22:29] you're really into atmosphere correction it can be kind of fun um to think about the mass and what's going on in the
[1:22:34] atmosphere and the path of the photons and everything but we just kind of uh just kind of provide just an outline or
[1:22:41] a sketch of what's involved with it and so when you deal with coastal systems or offshore systems you have different
[1:22:48] atmospheric components aerosols water vapor relative humidity then you may have over for inland bodies of water so which are
[1:22:56] going to have atmospheric constituents that are comprised of continental sources and so there are considerations that you need to take into
[1:23:04] take into play uh when you do this atmospheric correction so that you are aware of okay what is the what are the
[1:23:10] correct inputs that we're going to use for this atmospheric correction and sometimes you may like with the meta
[1:23:15] just remove the aerosol constituents and remove the aerosol models so that you just are not even going to include that
[1:23:22] part of it so it may seem a little bit subjective and there is a component of it that is
[1:23:27] subjective you you need to know your area and you need to have an understanding of what's in the
[1:23:32] atmosphere and that's possible using information that you can get from the aeronet system that will provide some
[1:23:39] information that can be useful it's a-e-r-o-n-e-t if you're not already familiar with it that you can use when
[1:23:46] you use the ocssw processors you can use information from the aeronet system to provide more detail in the choices that
[1:23:54] you make the parameters that you include in atmosphere correction again we can do a whole webinar series
[1:24:00] on atmospheric correction but i i don't think that that's the a primary objective of our set trainings so perhaps maybe an
[1:24:08] in-person training would be more appropriate like a one-day workshop or two-day two-day um daniella i'd like to check in with
[1:24:15] you to see if you'd like to help us out with that question number two two uh uh what are the main variables that are
[1:24:23] taken in a body of water to apply an adjustment and the correlation with images of oli okay i wasn't really sure about the term
[1:24:33] adjustment adjustment and what we typically collect on landsat image acquisition dates when we in the field are radiometric measurements and
[1:24:40] then water samples and we would use the radiometric measurements to compare them to atmospherically corrected satellite data
[1:24:49] for the dates of interest and that is true for some of our research efforts on small and smaller areas and then
[1:24:56] specific lakes and if you want to keep it really simple to start out with you can collect only psychedeps data
[1:25:03] since it's very cheap and easy to collect collect and then you could add additional constituents of at a later point in time
[1:25:09] tss is something that you can retrieve from landsat 8 data and then i would probably move to central to msi data for
[1:25:18] additional constituents like chlorophyll a a since sentinel 2 would have the spectral bands required for the remote sensing of
[1:25:25] clothing this might look a little different if your legs continually continuously have extremely high chlorophyll a concentrations then you
[1:25:34] might be able to use landsat 8 for the remote sensing off closely so it really depends on your legs
[1:25:41] um um thank you i appreciate you answering that this um as you were talking about sucky depth data and you touched on
[1:25:48] using citizen science and using the cyan app do you use any other like um phone app smartphone apps for measuring water
[1:25:57] surfaces or have you used any of the ones that are out there i know of two but um and three if you include the cyan
[1:26:04] tool tool i know we don't use any of these apps we only use a sign up at the moment okay
[1:26:11] okay yeah there's one that um i don't know if it's still active that will give you information about seki depth
[1:26:17] and um there's another one that will provide an estimate of remote sensing reflectance using the smartphone camera
[1:26:24] so so um i don't know uh if they're both active still or was but um okay so i'm going to address a couple
[1:26:32] more questions that came in and again um we really are excited the participants are so actively asking us
[1:26:40] these questions uh please uh use that question um portion of the webinar control panel but i think we're gonna wrap it up pretty
[1:26:48] soon one of the questions that came in is can we calculate the symmetry using cdas tools and there's a link to a
[1:26:56] youtube video that you can watch on this that will be provided in this document the question and answer document for
[1:27:01] part two and amita i think you are are quickly or maybe it's brock quickly putting in all of these answers here um
[1:27:09] so thanks for finding that youtube link and putting it in there so that'll be available to you
[1:27:14] and then um can we validate results of satellite data if we don't have the in-situ measurements and the answer is
[1:27:21] you need those in-situ data to validate um and if you're going to be working on developing an algorithm you absolutely
[1:27:28] need to have institute data and you actually need to have a lot of data and i think daniella how many institute
[1:27:33] values did you have you told us it was like like i think there's like over 600 in situ
[1:27:38] values or something like that there are actually a lot more values collected some of them are just under clouds so
[1:27:46] and so we can't really use them and i think they're probably more maybe two to three thousand and see
[1:27:55] to water clarity values collected throughout the whole summer and this is by citizen scientist and by different
[1:28:01] dnr monitoring programs and the 600 and something values that i mentioned these were the ones that i actually used for
[1:28:08] the algorithm calibration that's an extensive amount of work um so for a quantitative validation you need those in situ values yeah and
[1:28:18] something to add to that is that a lot of the citizen scientists they actually live at the lake say a lot of retirees
[1:28:24] and they collect these data at their lakes so we try to encourage a lot of locals to participate
[1:28:32] in these efforts yeah that's that's awesome i mean it gets to the heart of citizen science if
[1:28:38] you get the citizens to love and be passionate about their system they'll want to support efforts to maintain it and monitor it
[1:28:45] and something good about that is that citizens actually see that the data products are used for something
[1:28:52] they're used for the integrated reports to congress so before at some point in time i used i received a question
[1:28:59] from somebody and he asked if i would make more than a pretty map when he looked at our online viewers so i could
[1:29:05] actually tell them yes we use this data for important reports and traffic state assessments of their lakes
[1:29:12] wow that is so cool thank you dr gerlin so much for participating in this webinar series um we really couldn't
[1:29:19] have done it without you and we are very grateful so thank you we appreciate it this has come to this
[1:29:26] yeah um so we've come to the end of the questions that we're going to answer during this series and if you'll notice
[1:29:31] we're ending about a half hour early so we'll give back a little time from last week week um
[1:29:36] um so uh we're gonna go ahead and wrap it up we want to remind you that you have
[1:29:40] homework assignments that are due by june 21st the exercise or the demonstration that amita provided for you we want you to download the data
[1:29:48] that you had um that she walked through with you with the earth explorer and we will be meeting again next week
[1:29:55] and we want to remind you that next week we have a very very full day of lecture
[1:30:00] demonstration and exercises and then with the time that is available after we've completed our online demonstrations of the exercises it will
[1:30:09] be a quiet laboratory work time for you to to complete the exercises that's optional you don't have to stay on for
[1:30:15] that but we welcome you to stay on because amita and i will get on and answer questions as as needed so we'll
[1:30:22] we'll do it in incrementally we won't do it constantly throughout the time um again this is one of those things
[1:30:27] that we're kind of testing out different ways of doing things with our set and so we have been really excited to be able
[1:30:34] to have a guest speaker and then the interview on the spot and you guys providing questions for our guest
[1:30:39] speaker we also would like feedback on the materials and how detailed we're providing information materials step by
[1:30:46] step or an overview and we're testing out this idea of this quiet laboratory time if that's something that works well for you we
[1:30:55] like to get feedback so that we can improve our trainings into the future so this concludes part two of our
[1:31:01] webinars of the webinar series of using remote integrating remote sensing into a water quality monitoring program we look
[1:31:09] forward to seeing you online again next week and we really appreciate your enthusiasm and the time that you're
[1:31:14] giving to learn more about using remote sensing for water quality monitoring thank you
