# Hyperspectral Data for Coastal and Ocean Systems, Part 3/3

`https://www.youtube.com/watch?v=L4sGAgQB0a4` · id 92 · 1:42:06 · module 103 — Hyperspectral Data for Land and Coastal Systems (Self-Paced)

[00:01] hi everyone thank you for joining us today my name is juan torres and today i'm joined by my colleagues amber
[00:07] mccollum and zach benson from from the nasa rsa team today we will concentrate on the use of
[00:14] hyperspectral data for assessing coastal systems including some aspects of water quality quality now remember this is an introductory
[00:22] webinar therefore most of the information will be relatively basic but we will augment it with some particular
[00:29] particular case studies based on different coastal ecosystems now remember for this training there are three sessions each being one and a half hours long
[00:44] including the q a sessions and they were on january 19 the 26th and today which is the last section
[00:54] the same material is also presented twice per day at 11 am and 4 pm eastern time to ensure the participation from
[01:02] folks in different parts of the world now note that you only need to attend one session per day
[01:09] you can find all the course materials on the website listed here and also here our email addresses for
[01:16] reference there is only one prerequisite for this training which is an understanding of the basics of remote sensing
[01:29] with our course and those uh concepts listed here also here's a website again if you can where you can find the lecture materials
[01:38] and a link to watch the session recordings and the homework and here's a link also for the fundamentals of remote
[01:45] sensing sensing webinar that we have also available for you now for this series we will have only
[01:57] one homework assignment the link to the homework will be made available later today during this last session
[02:04] and will be due two weeks after today this is on tuesday february the 16th the homework is going to be a google
[02:13] form that you will submit online now if you attend all the sessions and complete the homework by the deadline
[02:20] you will eventually receive a certificate of completion now remember please be patient because it takes several months for us to
[02:27] process and send out these certificates now in session one we saw an overview of hyperspectral data with amber
[02:41] uh how it differs from multispectral some portals where you can access the data data and last week we provided an overview of
[02:49] the use of hyperspectral data for land systems management and today we're going to talk about the use of hyperspectral data for coastal
[02:58] and ocean systems again remember this isn't an introductory webinar and eventually we will talk also about some study cases
[03:08] towards the end my colleague zach benson is going to provide a short demo on how to access and process hyperspectral data
[03:15] for coastal systems now here are the learning objectives for this particular session today you will learn how to identify regions within the
[03:31] electromagnetic spectrum where particular pigments absorb and how this translates to airborne or space-based hyperspectral data you're going to recall
[03:43] the main differences between hyperspectral and multispectral data and we will contrast the use of hyperspectral data across diff diverse
[03:52] coastal ecosystems and then eventually you're gonna be able to apply techniques to access download and display hyperspectral data
[04:03] for causal and ocean systems okay before we talk about hyperspectral data in general i wanted to point out some aspects about
[04:17] the photosynthetic apparatus of photosynthetic organisms and particularly talk a little bit about the different pigments or compounds
[04:25] that are absorbed within the visible range range first as most of you know most most photosynthetic organisms they have
[04:34] chlorophylls chlorophylls depending on the organism they may have chlorophyll a b c c2 etc and these are the main components of the
[04:42] photosynthetic apparatus most of um here in the under on the right we see a graph where where but something some of these pigments
[04:49] absorb absorb you see that the chlorophylls in particular they usually absorb in the blue and the red region of the spectrum
[04:58] this is why for instance we see the plants and most plants are green now there are other pigments uh also
[05:04] associated with some photosynthetic organisms and here are some examples of them if psychobiolosomes for instance they they absorb in completely different regions
[05:14] of the spectrums psychoediting is a pigment that is characteristic of a red algae and it absorbs within the blue mid blue
[05:26] to about the uh yellowish or orange orange part of the spectrum and eventually this is why we see red
[05:33] alias alias red because it emits on the red and then fico fico facocyanin it's a pigment that is
[05:40] characteristic of cyanobacteria and phycocyanin as you see here in the graph absorbs mostly on the green to red part of the spectrum
[05:50] now both of these pigments they are uh they work as like heartbreaking antennas in the photosynthetic apparatus and as i
[05:57] said they capture phones between the green and the red part of this of the spectrum spectrum some of them
[06:05] then there are other pigments associated with uh photosynthetic organisms are the carotenes which are mostly for photo
[06:12] protection protection and some of them are the carotenoids like peridine which is characteristic of corals so santelli
[06:18] inside the corals and beta-carotene and others and there are santo fields like that that something and sia something
[06:26] which also helps uh help in photo protection as well so you see here in the graph where uh typically where most
[06:34] of these pigments absorb in the in the in the visible range and this is going to be key eventually
[06:41] for translating the this information into hyperspectral data when it's collected by different uh sensors now let's take a look at
[06:55] how in-situ data collected with a handheld spectrophotometer in this case a a jr jr 1500 that has 512 spectral bands
[07:05] with a nominal bandwidth of approximately 1.5 nanometers uh shows and it shows differences in the visible spectrum
[07:15] between four typical coral reef components in this case of the caribbean for example we have porades astoyoides
[07:22] which is a monster heat coral an organism which is also a relative of corals paletoa caliber and then for comparison purposes also i
[07:33] included here uh data from red mangroves and also turtle grass seagrass as well this is some of my data it's not
[07:43] published but it's all of us mostly for uh just uh for showing the different different uh uh
[07:50] uh spectra of these day of these organisms and how they how how they show in uh in
[07:56] a in our spectrum um um the differences here uh multiple regions of the of the spectrum between these
[08:04] three components can easily be seen with this type of of data and it shows the advantage of having many data points
[08:12] through the spectrum instead of having three to four discrete points which would be the case for for multi-spectral data
[08:24] now here's again uh amber went through some of these uh in the first session but it's always uh it's a good thing to
[08:31] go back again and kind of refresh our memories the difference is most of some of the differences between hyperspectral
[08:37] and multispectral uh sensors the multispectral sensors have been the norm with satellite sensors in particular but they are limited by the number of
[08:47] spectral bands that can be used on the other hand they have the there's the advantage to some of these missions
[08:54] of the longevity of the data sets associated with them when you think about the landsat series for instance
[09:00] it's been around since about 1972 and the modis series series both in uh aqua and terra they've been
[09:09] around from since uh uh late 1990s or early uh 2000 and uh also they have a fairly high temporal
[09:18] resolution resolution on the order of days two weeks in the case of landsat is uh every 16 days
[09:24] and the case of mode is every one to two days also so there's a lot of data
[09:29] associated with multi-spectral sensors that can be used for both land and coastal and ocean systems on the other
[09:36] hand hyperspectral data so far they're very limited number of satellite-based sensors that are hyperspectral uh we have talked a little bit about
[09:45] hyperion hyperion which is on boar was on board the e01 uh spacecraft and data from hyperion is
[09:53] available from the year 2000 to about 2017 when it was decommissioned now it has hyperion had a 30 meter
[10:01] spatial resolution and 220 vans at 10 nanometers um there are some uh there are mission specific for instance
[10:11] uh the high code hyperspectral imager for the coastal ocean which was on board of the international space station
[10:19] and it had there's limited data available for high cobalt i call uh the most important one the most
[10:26] important things is that hiko was specifically specifically designed for coastal oceans and but there's only about five years of
[10:34] data uh from harco and for specific uh areas also because because it was a collected data on a request based basis
[10:45] now there are uh hyperspectral sensors that are airborne and uh we are also mentioned uh avery's they
[10:52] have the airborne visible infrared imaging spectrometer there's a new version of avarice called the average new generation or average ng
[11:02] and also the prison spectrometer the portable remote imaging spectrometer that has also been flown in some missions particularly some missions
[11:11] related to the coastal ecosystems now lately there's been the development also of hyperspectral cameras for particularly for our man airborne systems or drones
[11:24] that uh it looks promising but there's still a lot of road to to cover there there and and it's still a work in progress
[11:33] now there are uh amber mentioned in particular during the first session the uh couple of upcoming and designated the
[11:39] liver boards and and additional satellite-based sensors sensors particularly particularly two that are uh also related to not only
[11:48] to uh land base for oceans and coastal systems the plankton aerosol cloud and ocean ecosystem or base and also the
[11:58] surface biology and geology or sbt okay okay so here we have here we have the same graph that we saw
[12:14] uh on the left-hand side of the we saw a couple of slides ago um where the data collected in situ with
[12:21] a spectrophotometer and then on the right hand side is the same data set but adjusted to the four landsat 8 bands in
[12:29] the visible range and you see that most of the spectral features features that appear obvious to distinguish
[12:37] particularly these reef components that we mentioned before in the hyperspectral institute data are lost in multi-spectral uh adjusted data
[12:47] so obviously this is just for for illustrative purposes but at least you can see here how different the data might look
[12:55] between between hyperspectral on the left hand side a multi-spectral on the right-hand side from exactly the same
[13:02] targets now there are some considerations when processing uh hyperspectral data that we have to go through through and
[13:15] and for instance even adjacent bands can give you completely different results so it is important to particularly to do an
[13:24] iteratively iterative process to choose which band is the appropriate one depending on the target now also typical atmospheric correction
[13:34] algorithms might need to be modified accordingly depending on the on the sensor sensor um most times people still use some of
[13:43] the uh some of the uh typical atmospheric correctional that is algorithms like uh flash or tafka or
[13:50] atrium or others but still you might need to tweak a little bit there just to to to make it more uh feasible to be
[13:58] used with hyperplate data and for some sensors there might be some additional additional geo rectification that might
[14:07] be required depending on the sensor so for example for haiko speaking about coastal ocean for haiku multiple images of the same target do
[14:19] not necessarily always cover the same identical identical spatial coordinates and images of the same area are acquired
[14:30] at different times during the day or even at different angles due to the iss orbit and repositioning
[14:37] so you might need to do some uh additional geo rectification uh there to for make the the images uh you know
[14:45] useful useful uh also there is and there's the uncertainty with overpass predictions that affects the for instance the
[14:52] deployment of field crews for uh vicarious data collection uh chips and others and this is usually you know
[14:59] pretty costly um similarly for airborne sensors such as average or prism uh the first the field campaigns are usually
[15:10] costly we're talking probably on the order of maybe more than a couple hundred thousand dollars uh for for a field campaign so that's
[15:19] something that you have to take into consideration when particularly when designing the project or budgeting for the project
[15:26] and also there are the typical aircraft issues issues for instance speech role and yaw that affect the image acquisition and might
[15:34] require require additional processing as well now now uh unfortunately due to the usual complexity of coastal waters even with
[15:49] hyperspectral imagery benthic classification in particular can be extremely challenging and it's still limited to the first tens of meters of
[15:57] depth depth even in the clearest waters for for example in tropical islands such as the image that they're seeing here on
[16:05] the right now different regions of the visible spectrum are rapidly attenuated in the first meters particularly in the reds
[16:15] and the same thing even more dramatically happens with the near infrared and uv regions as well now the characterization of deeper
[16:25] communities communities is usually only restricted most to the use of alternate means such as sonars or autonomous underwater vehicles with
[16:36] camera systems because of the limitations of airborne or satellite-based remote sensing imagery now let's see some examples on where
[16:48] hyperspectral data has been used for storing coastal or ocean systems here's an average hyperspectral image collected and in puerto rico back in
[17:03] 2004 in an area known as la palguera and southwest coast of puerto rico before the massive quarter bleaching
[17:11] event of 2005. you can see that even in this image of four meters uh spatial scale features such as seagrass
[17:21] beds which in the mid bottom graph here and sand also also are barely distinguishable without any atmospheric correction despite the
[17:36] shallowestness of the reef lagoon which is in this case about one to two meters deep only also in very shallow waters there's an
[17:44] influence of the of the short water column that it's uh surrounding the bottom surfaces now in this case
[17:55] uh the university of puerto rico particularly by optical oceanography lab team team they used black and white waterproof
[18:03] tarps that they located in different parts of the uh of the reef there and they con then they collected spectral
[18:10] data with the same spectrophotometer that i mentioned before the gerv 1500 for water column correction here it's a very tedious task and it took a
[18:21] lot of manpower hours to do it now here we show the agreement between the average data and the field collected
[18:34] spectral curves particularly in the red region where we can see the absorption of microsoft copic organisms that are in the still in the uh
[18:45] in between between the grains of sun changes in the water column composition can cause the differences between things
[18:53] that we see here between average and the institute data and also the other sensor was not specifically designed for underwater
[19:01] targets this might also be the case of some of these uh or the reason of some of these changes or differences
[19:09] between the in-situ data and the average data now after atmospheric and water column correction the spectral signatures
[19:19] collected by both average and the in-situ spectrogradiometer are much more similar similar to each other other differences such as those
[19:28] associated with the smooth and the smoothness of the curves are also associated uh with the bandwidth differences between both sensors we made
[19:36] up for obvious it's a h-band is 10 nanometers versus for the ger-1500 it's about 1.5 nanometers so the gear has a
[19:45] more smooth curve but in general many spectral features are maintained as you can see here in this uh in these different graphs
[19:59] now during session one amber briefly mentioned mentioned the the nasa funded earth venture coral mission in coral stands for the coral reef
[20:09] airborne laboratory laboratory the goal of coral was to provide critical data and new models needed to analyze the status of coral reefs and to
[20:19] predict their future now coral provided the most extensive pictures to date on the condition of a large portion of the world's coral reef
[20:29] from a uniform a uniform data set the spectral resolution for coral was from about 350 to about
[20:40] 1053 nanometers with bands that were sampled around 3.5 nanometers with the prism hybrid corer corer like they said acquired
[20:54] airborne spectral image data using the portable remote image and spectrometer prism instrument which was installed in a commercial airplane
[21:03] at g4 and in combining with the flights institute data was collected were collected uh to validate the
[21:12] remote also observations now for each reef the spectral image data were processed to provide reef condition described by measure measure maturable
[21:22] quantities of benthic cover of coral algae and sand and then they use additional algorithms to calculate primary productivity and calcification
[21:36] these three condition parameters these parameters were analyzed quantitatively against these about 10 different key biogeophysical parameters using
[21:48] different models and different algorithms to understand the rift conditions today and to predict the rift conditions for the future
[21:55] the case of coral for each square kilometer of reef it generated about 10 10 000 observations observations on benthic cover primary productivity
[22:06] and calcification between 2016 and 2017 coral flew over key uh reef areas in the pacific ocean including hawaii the mariana islands
[22:20] palau and the great barrier reef as you can see from from this survey on the map on the left
[22:27] on the right you can see a coral image from the northwest hawaii where the hyperspectral data was used
[22:34] to create a classification to map the locations particularly of coral algae and sun now the quora research group
[22:49] conducted a series of field campaigns at the study sites in the pacific which included the collection of spectral
[22:56] libraries from the main reef vented components components in water characterization of apparent and enhanced inherent optical properties
[23:06] diver operated video transects collection for benthic cover analysis and measurements of primary productivity with in-situ data loggers
[23:15] all these data were used for calibration and validation of the prism images which in turn were used for benthic mapping of
[23:22] the reef island and regional levels as well as estimation like i said of primary productivity and calcification at
[23:29] different levels now previously we saw a graph with some brief vented components and their spectral similarities or
[23:43] differences differences as well as some of the data collected by the the coral project team in a recent paper by
[23:51] tom bell and colleagues include including some of the co-eis of the coral team they simulated the ability of a
[23:59] space-born space-born hyperspectral sensor to accurately map the fractional cover of coral reef benthic classes under different water
[24:07] quality conditions and depths using a semi-analytical process process the hydrolyte relative transfer model and a multiple end member spectral
[24:19] mixture analysis or mesma to estimate cover cover they obtain best results for shallow waters of less than 3 meters depth for
[24:28] most typical reef water quality conditions and and a proposal that at a depth of more than five meters should only be classified on
[24:39] the only under low chlorophyll and sediment concentrations in short mesma uses multiple class specific representative spectral signatures to
[24:50] model each image pixel and to determine the optical combination of each member n member spectral signature and
[25:00] fractions fractions the technique was developed and tested with average data originally by roberts in the late late 1990s for
[25:10] mapping chaparral environments what has been also been applied to kelps and reef environments by dr bell and dr
[25:18] kavanaugh's group from ucla for a while already in the paper the authors also pointed out the potential advantages of having
[25:27] new hyperspectral satellite-based size systems such as svg or pays for assessing rift changes at multiple spectral and temporal scales
[25:41] now here's a reminder of some of the characteristics of haiko since it was since it was particularly
[25:46] designed for coastal systems haiku was used uh to sample specific coastal regions and 90 to 100 meters
[25:55] with a special resolution with a spectral coverage from 380 to 960 nanometers nanometers with bands that were sampled every 5.7
[26:05] nanometers nanometers the sensor had a very high signal to noise ratio that it is indeed useful to resolve the complexity of the
[26:13] coastal ocean as a demonstrative instrument heiko was assigned to collect only 150 150 50 times 200 kilometers seen per orbit
[26:27] the regions to be collected were determined determined weekly by a scheduling team and the focus was on providing haiku data for
[26:34] scientific research of coastal zones and other regions around the world haico demonstrates coastal products included including water quality water
[26:44] clarity clarity bottom types bathymetry and onshore vegetation maps during its five-year in operation hiker collected over 10 000 scenes from from
[26:56] around the world and this is uh this is something that we showed also on the uh during the first session but it
[27:08] was appropriate to uh we show it here because it's it's a particularly cool uh animation product developed by the coder
[27:17] researchers researchers um here in this animation uh this is a series of images that was particularly corrected over by miura in
[27:27] august 17 and 2013 and it cycles through all 128 hiko channels displaying three at any particular time
[27:39] now the sliders on the right show which channels are represented by their center wavelengths in nanometers were used for
[27:46] the for the red green and blue components of each frame of the animation animation now the image doesn't have any
[27:53] additional uh processing on top of the atmosphere radiances radiances uh uh in this case but it shows uh how you can choose
[28:04] between different bands relatively similar bands but it shows a very different products so it allows you to see how different
[28:13] brands highlight the various components of the ill and of the island ecosystem from land shallow water or quarter
[28:21] components now quite frequently sea grass meadows represent a mix of seagrasses and microalgae microalgae mostly brown algae
[28:35] the spectral limitations of multispectral data do not often provide for the differential differentiation of these shallow water
[28:44] venting components now now show it all in a series of papers in 2013 and 2014 they studied
[28:51] the use of hyco data in particular for distinguishing between cigras and microalgae microalgae areas dominated in the in florida the
[29:00] florida keys the authors found found that the hycobands in particularly in between 665 and 675 and 708 and 713 nanometers regions
[29:16] can be used to distinguish sea grass from macro algae and propose the use of two benthic classification methods
[29:23] namely the slope red and the slope and near infrared for this purpose and the models were compared to other
[29:30] existing classification models such as the the spectral angle mapping or sum or and typical unsupervised iso data
[29:39] classification classification processes processes their models outperform both some and iso data processes particularly in the very shallow waters with an average of
[29:50] 65 percent accuracy now similarly on a on a more recent paper by heidi dearson at all in 2019
[30:00] they used uh one meters spatial resolution hyperspectral data obtained with a prism to map shallow and moderate moderately deep ill
[30:11] grass beds in the tiger and payment of elkhorn slough in monterey bay in california california the group combined the hyperspectral
[30:19] data with a semi-analytical inversion model named hope or hyperspectral optimization processing example example to characterize water column parameters
[30:30] and to show subtle differences in the spectral shape and differentiate between different types of submerged vegetation vegetation particularly we can see the improvement
[30:42] in the benthic reflectance retrieval in the bottom right hand figures here and the agreement collected with with diver collected bent
[30:53] cover data shown by the different color dots now the distinction between coastal plant species like mangrove forests
[31:05] still need a lot of research here's some institute data that i collected in southwest puerto rico uh
[31:12] two years ago still in process and it shows how similar the four uh mangrove species of the
[31:20] caribbean caribbean are are can be spectrally and particularly here in the in the left-hand figure still to some extent areas are heavily
[31:31] impacted by let's say disease or heavy drought period might be more moderately respectfully respectfully different if their canopies their
[31:41] canopies are you know uniformly uniformly impacted now also i wanted to remind you again that last year we conducted a start
[31:50] training which included one whole session on mangrove forest mapping and monitoring monitoring as well as this past november and in
[31:58] november and uh there was another full training training on remote sensing for mangroves in support of the u.n on sustainable
[32:06] development goals so i encourage you guys to watch some of those if you want some more additional information of how
[32:13] to process data for mangrove analysis in particular but anyway mangrove ecosystems they as we know they protect the coastlines from erosion and
[32:26] increase increase and increase the water quality also and surrounding them now continuous monitoring of mangroves is necessary to assess the impacts of
[32:36] silver rice for instance and increasing salinity salinity each pieces of the mangrove forest uh in this case in the
[32:44] the lothian island has a different threshold for these uh environmental parameters so understanding the composition composition uh is important to
[32:54] for conservation efforts here's a study uh by harry roll a recent study until 2020 that used average ng data airborne data
[33:06] in the hopes of creating a species level vegetation classification in the lothian island island in the east coast of india
[33:19] in addition to hyperspectral data they also examined multi-spectral data to compare the target capability of specific vegetation type
[33:30] classifications classifications data was analyzed from the landsat ole and and sentinel-2 sentinel-2 also as well with hyperion and
[33:42] the average ng data now landsat and sentinel perform similarly similarly but with more spectral information rendered by the hyperspectral data
[33:52] hyperion and average perform much better at more specific and more specific classifications classifications and receive higher accuracy scores also
[34:04] now the average ng performed the best and was able to provide more many more species level uh classifications
[34:13] now this is what we should expect from a from a hyperspectral remote sensor the more bands available to capture
[34:20] reflectance the easier it should be to distinguish between different vegetation types performance of average in this case is
[34:28] particularly notable given how complex the the environment in this location is however it is important to note that
[34:36] average ng also has the highest spatial resolution of any of the other sensors and sensors that were used for
[34:42] this study which also contributed to the accuracy as well algal blooms can and cannot be toxic depending on the
[34:54] organisms and bloom hyperspectral data can be particularly useful for detecting specific types of bloom and therefore for monitoring coastal and ocean waters
[35:03] prone to the development of these here's an example of a not necessarily harmful algal uh or planting bloom in
[35:11] this case we see the detection of a bloom of a globally distributed non-toxic non-toxic ciliate ciliate known as mesodineium reuben
[35:21] the ciliate produced instead intense red colored blooms and here on the left hand side side a modest image from
[35:31] from from 2012 shows an elevated chlorophyll a fluorescence patch but due to the limited availability of visible bands of imodis
[35:42] the type of plume cannot be distinguished compared to an e and here we can compare it with to an image of uh
[35:49] of heiko on the same day that shows the typical yellow fluorescence fluorescence of a fico editing which is the main
[35:57] pigment in this particular case the middle photos here show how the mesoderm bloom looks like from a
[36:07] boat and below here is a microscopic photograph of the of the organism mesoderm is a mixotrophic as it enslaves
[36:16] chloroplast from its main food source which is a microscopic algae but can also engulf and process all the
[36:24] microscopic organisms of the pantone community community the graphs here on the right hand side compare the remote sensing reflectance
[36:32] of of modis and hyco and show how the hyco data reveals many peaks and dips uh related to the presence of fico
[36:43] editing editing particularly particularly the peak that is a characteristic around 565 nanometers which cannot be detected by
[36:55] by uh by the modis data the bottom graph uh shows the pigment absorption features here's a yellow
[37:02] fluorescence peak bottom graph which shows a pigment of structural features of these uh this uh organism uh pigments
[37:10] uh and includes uh chlorophylls and other pigments like uh halocentene and phycoedition here for reference is the aes as an pe
[37:21] on the graph in the legend respectively and this is data from heidi dears in also at all from 2015.
[37:32] now here's a data collected by bernardo erol and published a few years ago that shows the same concept but in this
[37:42] case in regards to the concentration of total suspended matter in a reservoir in brazil brazil the graphs on the top are the in-situ
[37:52] spectral spectral hyperspectral data collected with a spectrophotometer and on the bottom graphs show the spectral information collected by landsat ole
[38:03] for the same waypoints on the same date in this case the lack of bands in the near infrared particularly between 700
[38:11] and 850 nanometers does not allow for the use of several spectral features to discriminate between the different
[38:20] sites sites and you see here the difference is particularly between 700 and 800 nanometers which you cannot see
[38:28] with the landsat data now hyperspectral sensors such as hyco and the proposed spd with a fairly high
[38:40] special resolution let's say uh uh 60 to 99 90 meters half and will provides respectively the opportunity to characterize a wide range
[38:52] of watercolor constituents in great detail detail as shown by the high correlation in the all in 2014 paper
[39:01] from a chlorophyll a estimates in the northwest coast of florida florida hyperspectral data can be successfully compared to classic studies
[39:13] performed with multi-spectral sensors and similar or higher special resolutions in this example the authors use an iteratively iterative process
[39:24] using remote sensing reflectance values from the high co bands particularly bands 45 to 61 at 657 to
[39:34] 749 nanometers to assess which bands were most efficient for the retrieval of diverse water quality parameters including
[39:43] chlorophyll a cdom cdom and turbidity or suspended particular matter matter based on the sensitivity of the different wavelengths to these
[39:53] constituents constituents similar processes have already been applied to multi-spectral data from modis and mary's for about a decade
[40:01] or more already but in this case the authors took the advantage of the narrowbands of haiku to come up with a more sensitive
[40:09] algorithm algorithm specific for each of these constituents now now i will leave you with my colleague zac
[40:20] penston who will provide you with a short demo on how to acquire hyperspectral data for coastal oceans and ocean systems
[40:30] and some standard processing that can be performed with typical remote sensing or gis software software back to you sac
[40:41] hello everyone as juan mentioned i'll be walking you through our data access and display demonstration today but first i
[40:47] want to go over some background information before we get started so one of the most useful and
[40:52] comprehensive websites for accessing coastal and ocean remote sensing data is the nasa ocean color web data browser
[40:59] so i'll be going through how to use ocean color web to explore and access data later in the demo
[41:05] but i just wanted to mention that this website doesn't just include hyper spectral data it also includes data from
[41:11] multi-spectral sensors and that's things like modis and viirs and so the data browsers available on ocean color web allow you to search data
[41:20] products at various processing levels and you can also specify a lot of search criteria to narrow down your search
[41:27] results results these search criteria include things like data product type chosen sensor spatial extent and date range
[41:35] um you'll also be able to preview the data to visually inspect for quality and completeness of imagery which includes
[41:40] checking for things like cloud cover that might end up obstructing your imagery and making it not analysis ready
[41:46] and for cloud cover we typically suggest using data with no more than uh 20 or so cloud cover
[41:53] so the link to ocean color web is provided here on the slide for you to try out um some of the data browsers
[41:58] after the demo and to download data from the browser you'll need to register for a nasa earth
[42:06] data account uh you'll be prompted to create that account um or log in if you attempt to
[42:11] download data from the ocean color web browser browser but the link is also provided here for you to the registration page if you want
[42:18] to do that beforehand and this registration is typically pretty quick and you'll need to you'll just need an email to complete
[42:25] the process so not a whole lot of information on your end and once registered you'll be able to
[42:31] directly download data from the browser and so in today's demo we'll be using data from the hyperspectral imager for
[42:42] the coastal ocean or hico mission that we've talked a little bit about in this session and the first session
[42:48] of our hyperspectral trainings and hico was mounted on the international space station and was the first space foreign
[42:54] sensor designed to sample the coastal ocean ocean hico was in operation from 2009 to 2014 and data were collected over 128 bands
[43:04] ranging from 380 to 960 nanometers with a 5.7 meter bandwidth in a variety of oceanic coastal and
[43:12] freshwater areas around the world so heiko's spatial resolution is 90 meters with a standard scene width of 42
[43:19] kilometers and a standard scene length of 192 kilometers the full high code data archive is available online through nasa ocean
[43:27] color web browser and that's kind of what we're going to be going over in this data access demo
[43:34] so hico data are readily available at two processing levels through ocean color web and as you likely remember
[43:40] from the last session a higher processing level indicates greater pre-processing uh conducted on the imagery prior to your downloading it and
[43:47] in the case of hico level 1b products have undergone radiometric correction geolocation and some additional corrections to eliminate
[43:55] image artifacts this data product provides radiance values values and in order to make the data ready for
[44:01] analysis and for the processing atmospheric correction must take place to provide surface reflectance values that filter out the effects of the
[44:07] atmosphere fortunately for hico all level two products available um through this online platform have been run through an atmosphere correction
[44:16] model and contain surface reflectance values values this is really nice because it means you won't have to worry about atmospheric
[44:22] correction with hyco data so level 2 data files also include raster layers which display common assessments of chlorophyll a and light
[44:31] attenuation attenuation which provides a metric for turbidity so working with hiconet cdf files is easiest using cdas
[44:40] this is the software that we're going to be using for the demo but i just want you all to remember that you don't need
[44:45] to download cdas right now you don't need to follow along or anything like that i'm just going to be quickly
[44:50] showing you some of the basic functionalities here on my screen and then if you'd like to explore it
[44:54] later you can definitely do that so cds is a free and comprehensive software package developed by nasa for
[45:00] processing and analyzing remote sensing earth data and cds brings together a variety of processing components into an
[45:07] easy to navigate graphical user interface which is really nice because it means you can kind of just point and
[45:12] click your way through the data rather than bringing together a lot of the tools that um cdas does
[45:18] so the link to download cds is here on the slide and cds can be downloaded in mac windows
[45:23] and linux machines so you shouldn't be limited limited by by whichever computer you have so within cdas you can easily open data
[45:32] products from a variety of nasa sensors reproject data export data as new file types manipulate bands and visualize
[45:38] data data particularly relevant to this training you can display spectral information of each pixel and apply algorithms to
[45:45] derive things like water quality and classified physical features like bottom reflectance uh and bathymetry um so now that you're a little bit more
[45:56] familiar with the tools that we're going to be using i'll go ahead and move on to the demonstration
[46:02] all right so hopefully on my screen you can see the ocean color web website this is available
[46:08] through the link that i provided on one of the previous slides but i'm going to go ahead and walk you
[46:13] through kind of getting to that level one and two data browser um that we'll be using for hiko um so you'll just need
[46:20] to advocate navigate here to uh the data browsers like i mentioned we're using the level one and two data
[46:26] browsers browsers sometimes these things take a little bit of time to load but once you've clicked that link you'll
[46:35] be taken here to the user interface to access kind of a variety of ocean related data so as you can see there's a lot of
[46:42] options here for the types of data that you could potentially use one of the defaults for this data browser is modis
[46:50] it will go ahead and just show you that data kind of here on this example screen of what data is
[46:55] available available but we're going to go ahead and unclick that that um and go ahead and click here for our
[47:00] hico data which is what we're really interested in um that's kind of how you filter by sensor here in ocean color web and then
[47:08] we're going to go here to reconfigure page page and that will just kind of reload everything everything to make it specific for hico
[47:15] it's nice because it shows you kind of all of the places where there's high code data available um here in this map
[47:20] all of the red sections are hika overpasses and we'll zoom in a little bit there so you can take a look
[47:27] um and you can do a lot of clicking through here if you're not necessarily looking for a specific area you just
[47:32] want to explore the data um this is a really nice opportunity to kind of click through and see what's available
[47:37] and if you're just looking for a quick reference to see if there's data available in a specific country or a
[47:42] specific coastal area this is kind of a nice way to do that you can also do things like filtering
[47:49] for date filtering specific months specific years i mean you can do that with some of the links here
[47:57] as i mentioned that's kind of whichever dates you're interested in that doesn't necessarily line up super well with
[48:02] spatial extent all the time you can definitely see what data's available on specific days but i think for the use of this website
[48:10] it's probably better to start filtering by spatial extent just because you're not necessarily going to see a lot of
[48:16] repeat data for every spatial extent so we'll go ahead and pick um an area here in the navigator um
[48:25] there are some uh typically searched areas available here that you can scroll through um you can also specify your
[48:32] study area here just with your long values to get data within whatever spatial extent you're interested in
[48:41] but we're going to go ahead and navigate to to the the maldives so go ahead and select that
[48:49] here and that's just the general area that we're going to be searching and you can click here to find swaths
[48:57] and so a lot of this data since it's already available in the level 2 format it will have certain algorithms kind of
[49:03] pre-run on it for your own use this is currently displaying a classically used chlorophyll algorithm over the data i'm not necessarily the
[49:12] most informative when you're kind of just filtering through data looking to kind of sort through things um so you
[49:17] can go up here to toggle to true color images images um so this will give you kind of a quasi
[49:23] true color image that you can navigate through um it provides things like dates um you can click any of these links for
[49:29] metadata metadata it shows you the spatial reference there down on this globe and we're going to wait a second for it
[49:37] to download these previews are really nice just to kind of get a picture of what's available with the data as you can see
[49:43] in quite a few of these images there's a lot of cloud cover um so we're going to
[49:47] go ahead and select the one that has the least cloud cover um like i mentioned ideally below 20 cloud cover
[49:55] and we're going to go ahead and click on that and that's from october 14th 2010. 2010. and so it'll go ahead and show you two
[50:05] previews of that data the first is chlorophyll um that's popped up here uh so it shows you um kind of that
[50:15] typical typical chlorophyll algorithm applied to the imagery available in the study area so that's kind of a useful metric it's
[50:21] not necessarily calibrated to the specific specific study area that you're working with but it's nice to kind of have those
[50:27] pre-processed uh kind of water quality parameters already ready to go and then you'll also be able to see here
[50:34] the quasi-true color image that i mentioned you can go ahead and do another visual inspection of that a
[50:39] little bit more zoomed in and as we can see this image is pretty free of cloud cover a little cloud cover
[50:45] down here um but certain parts of the image are definitely a little bit better than others others um and how you download data from this
[50:52] platform so we've kind of selected this as our chosen hico scene because you can go ahead and go up here um these two
[50:59] links will provide for you either the level 1b data product um so that's uh the level one product that's radiance
[51:05] values and then you also have this level two product here which is atmospherically corrected and provides those surface reflectance values that we
[51:12] really really want um so we'll go ahead and click on that and this is kind of where your earth
[51:18] data login comes into play i already have have my account logged in and so it will redirect you to this
[51:24] earth data login page and then automatically download that that netcdf file for you um and i i don't think i mentioned this
[51:32] before but all uh data available for hikos in net cdf format um which is really helpful um
[51:40] when we're working with cds it's already loaded with the processing and display data that we need to to view this
[51:49] imagery in kind of the easiest way possible so that's why we're using cbs for this session and so as you can see it takes a little
[51:56] bit of time to download but i will go ahead and toggle us to cds so that we can go ahead
[52:02] and get started looking at this imagery all right so now that we're here in cdas you can see kind of the the graphical
[52:12] user interface here one thing i just wanted to mention is that when you first download cds you're going to want to make sure that
[52:18] you have all of the data processor processors downloaded that you'll be using for data so for example you can go up here to the
[52:25] ocssw tab and then you just want to make sure that you're selecting any a sensor mission data points that you'll
[52:33] be working with so in our case um we would want to click hyco i've already done this so i'm not going to run it or
[52:38] apply apply any of the data processors but this is just something that you'll need to do um so that you can go ahead
[52:44] and start immediately working with the hico data um and i also just want to mention that this is something that's going to look a
[52:50] little bit different depending on what version you have so this is the mac version of cdas so it's going to look a
[52:56] little bit different from the the windows version um as well as the linux version i believe that the windows
[53:02] version is a little bit more complicated you might not necessarily have this graphical way of uh kind of downloading these data
[53:09] drivers um but in the link that we provided in the slides to the cbs download you'll you'll see some
[53:14] instructions there um for how to do that for windows um so i'm going to go ahead and cancel
[53:19] this since i've already done that um and we'll go ahead and import the data point that we downloaded
[53:27] from ocean color web and so this just immediately goes to my downloads folder i'm going to select the netcdf file that
[53:34] i downloaded for the maldives and i'm just going to go ahead and open the product awesome so you'll see here uh one really
[53:44] nice thing about cds is that it kind of lays out everything that's in that file for you
[53:48] um so what we're particularly interested in is the metadata and the rasters that are available through the netcdf
[53:55] so i just want to go ahead and toggle through some of this metadata um so as you can see there are some options here
[54:00] for looking at when the image was captured what date the image was captured i'm kind of the data source um
[54:05] what the processing level is kind of a full gambit of metadata that you might need um to describe this data
[54:11] which is something that's really nice to kind of have right here in front of you and you can kind of scroll through these
[54:18] kind of get more acquainted with the data data you might be familiar with some of this from ocean color web when you're looking
[54:26] at at different data products but this is just a nice listing um for the specific metadata of the the product that you
[54:32] downloaded i mean you can also go here to look at band attributes and this is just a basic listing of
[54:40] uh the wavelengths that are available through heiko um within this data product and as you can see it kind of
[54:45] follows that um pattern of 5.7 nanometer bandwidth that we had mentioned with heiko and then a variety of bands on top of
[54:55] that that so we'll navigate away from metadata here here and then we'll start looking at the raster products that are available um
[55:02] what we're the most interested in here is this surface reflectance rrs but i also wanted to just point out some
[55:08] of the data products that will come with um this net cdf file so you'll see here this is just kind of a classic
[55:15] uh chlorophyll algorithm that's been applied to the image that we downloaded um um and this displays kind of that
[55:23] classical algorithm that's used to to calculate chlorophyll a i mean you can see some of the variation there um
[55:29] same goes for kd 490 which is a metric for light attenuation attenuation and you can just go through and click on
[55:37] each of these a double click will go ahead and display it in cds so that you can explore some of these layers that
[55:41] are available and kd490 is a really good metric for turbidity as well but we're not necessarily going to focus
[55:48] too much on these pre-processed data layers in this demo so we're going to look here at the
[55:55] available bands and there's quite a few as i mentioned but what we're going to do is create an
[56:01] rgb imagery kind of similar to the last session in session two and we created on that rgb image um so as you see we have
[56:08] a lot of choices here for wavelengths um and we're going to go up here here um to the three bass band raster brand
[56:16] to create a rgb image tool and so i already have a profile saved here here but when you go into this create rgb
[56:25] image tool you're going to want to go ahead and select bands and it will have a drop down menu um one
[56:32] nice thing about this is it it automatically displays the wavelengths that are available i mean you'll just
[56:36] scroll through and choose whichever ones you would like to use for your rgb image hi-co is really nice because they have
[56:44] recommended wavelengths for an rgb image which in this case will be 639 nanometers for red 553 nanometers
[56:54] for green and 461 nanometers for blue so those are just the the bands that are suggested through the hico website um to
[57:02] create that rgb image and so once you make those selections um if this is a new profile you're going to
[57:08] want to make sure to click save here and you can just go ahead and give that a name
[57:13] and then it will just save automatically in rgb image profile uh file folder but we're not going to do that because i
[57:20] already have this one saved um i just named it hico rgb and we're going to go ahead and run that
[57:28] so as you'll see here we have a little bit bit better of a true color image as compared
[57:32] to some of those other layers that are made available within the net cdf this is pretty much
[57:39] as close to a true color image as you're going to get with the high co data um
[57:42] and as you can see it shows um a lot of uh the oceanic area around the maldives
[57:47] it shows some of the atolls um so we've got a nice mixture here of open water shallow water with
[57:53] some benthic features and then also some above water features as well and so we're going to use the spectrum view
[58:01] tool tool and with that tool um um sometimes cds will prompt you with these messages just letting you know how
[58:09] things work i mean so in the case of this tool you're going to want to hold the shift key down
[58:13] and it will automatically change the ranges in the plot of the spectrum view to give you a better view of what the plot itself
[58:21] actually looks like so that'll just change the x and y axis limits so we'll go ahead and drag this slightly
[58:29] over here and we'll give it a second oh here we're going to want to change the filter with
[58:34] that first though so we're going to take off some of these layers that it's automatically included there so that we're only looking at a
[58:41] plot of surface reflectance um and that's the rrs value so now that we've changed that filtering option using the
[58:47] filter button we're going to click ok and then we're going to just toggle over the image and that will kind of gather
[58:55] and collect all of that spectrum data so i'm going to go ahead and hit the shift key and that's going to change that that
[59:00] y limit to give me a better view of what the spectrum looks like so we're going to go ahead and toggle kind
[59:06] of around this open water area you can see that has a pretty distinct uh spectral profile um and then we'll
[59:14] toggle over here to look at some of this above ground atoll feature and you can see how that differs as well
[59:20] um this just gives you a nice really quick look at how some of those spectral features will differ
[59:26] um sometimes it can take a second to collect that data and buffer um but we'll just go ahead and give it a
[59:32] second and you can see here as we kind of toggle into these um below surface benthic features
[59:41] we'll get different spectral responses as well and so this is just a really quick and easy way to go ahead and explore through
[59:47] an image to kind of see what type of spectral profiles you can expect from the imagery downloaded
[59:53] downloaded and i think this is a really interesting example too because we've got some very different uh coastal features here where
[59:58] we have open water above ground and then benthic features as well so it's it's nice to see kind of the difference
[1:00:04] between those and then from this work you can kind of get a picture of um what spectral profiles will look like for
[1:00:11] different types of coastal or oceanic cover and with that i think that's pretty much all the time we have for our demo i'm so
[1:00:19] i'm going to go ahead and hand things back over to juan well thank you zach for that great
[1:00:25] present demonstration and here we're going to summarize uh today's session in a couple of bullets so remember that coastal based
[1:00:35] applications for hyperspectral data include include the retrieval of benthic substrates particularly in shallow waters the potential discrimination of
[1:00:47] species based on the spectral signatures and cover of these species but also hyperspectral data can be used
[1:00:56] to analyze water quality at higher spectral um potentially also higher spatial resolutions as well depending on the sensor
[1:01:06] also also we saw through the sax demonstration the how to access uh hyperspectral data particularly from the nasa uh ocean
[1:01:17] color web data portal and here uh also to remind you the the different websites and also we included uh
[1:01:25] included here the website for downloading uh hico data in particular or just for general uh general information about haiko as well
[1:01:35] as the average data portal from the partner such apl also remember that there are upcoming sensors like face
[1:01:46] and the new designated deliverables such as sbg which eventually will provide for new venues for assessing coastal and ocean
[1:01:55] systems systems never attained before so stay tuned for those thanks again for joining us today during this uh final session of this webinar
[1:02:09] series series now we're going to move on to the q a session okay so let's move on to the q a and
[1:02:22] thanks thanks brock from for uh uh putting me out there if you can uh if you can zoom in a little bit on the
[1:02:30] uh uh on the uh document because i my eyes are not what they used to be anymore
[1:02:38] anymore um all right well yeah before we go into this uh thanks everyone for connecting today today a lot of people a lot of
[1:02:46] questions uh came in even before we started uh with the webinars uh sessions that shows uh how interested people are in in
[1:02:57] this particular topic and i thank zac again for for giving us that short briefing uh during the demo so we're
[1:03:04] gonna we're gonna go into some of the uh questions here and um well well we'll see how it goes uh with time also
[1:03:14] and and probably some of them will we're gonna uh uh switch between myself and and zach and maybe uh
[1:03:22] also also so let's go into the uh to the first one it says is there a specific waiting time
[1:03:29] required to get data from haiko ocean color web coral mission so for for uh for the ocean color web in
[1:03:39] particular uh there's there's no wait time for downloading high code data the entire data archive is is available
[1:03:47] remember that haiko in particular was only available for certain number of years so that's something that you have
[1:03:53] to consider when you're doing your your analysis right and and and and you can download the data you
[1:04:02] cannot just download a single image single file or you can do bulk download download options options in the in in the ocean color web in
[1:04:12] particular particular and uh for for some other types of data such as the choral data as mentioned there
[1:04:20] there's i believe uh we can verify with the pi of the project and dr eric hoffberg hoffberg but i believe they're
[1:04:29] they're still in the processing processing coral data it was collected a few years ago but but uh but it's like i mentioned it's
[1:04:40] it's definitely uh you know terabytes of data there uh so it's gonna take a while probably for some of it to eventually become
[1:04:49] available to the general public um all right question two what tool have you used to plot the correlation between high co and
[1:05:01] water quality parameters such as uh it's a ctd ctd salinity durability cdom about the degree of alkalinity ph uh
[1:05:14] salinity uh i'm not gonna go into alkalinity or ph of salinity because quite honestly there's there's only there's very few
[1:05:22] particularly satellite data that covers those those uh those different features and um i'm even less hyperspectral data if
[1:05:32] there's any um but uh but if you're referring to the to a particular uh figure or image on
[1:05:40] the slides uh where there are associated uh studies links to each slide for you to take a look at
[1:05:47] and for instance level 2 hyco data products from nasa include data layers that display chlorophyll a and kd 490
[1:05:56] which is a vertical attenuation coefficient and 490 nanometers which is a metric uh for for turbidity um
[1:06:06] um the the data are derived from derived from from algorithms that are similar to you to those used when when uh deriving
[1:06:14] the same metrics for modis or other multi-spectral uh data they're just they're modified for for for this
[1:06:21] particular some of these particular uh bands the more more specific bands and uh so make sure to to look at those uh case studies and
[1:06:31] uh and if there's a need you can also communicate with also someone did this question and we can provide some some
[1:06:38] links to those studies as well all right how are you how are you able to extract question three how are you
[1:06:46] able to extract the different uh correspective signatures that's a very good question um um uh in this case
[1:06:55] and in my this this was uh the data that i showed was data that i've collected in
[1:07:00] the field over the years and uh and in this case the spectral signatures from corals and other benthic
[1:07:10] components have uh uh we used we with our team using a handheld field spectrophotometer which uh in our case we use a spectra
[1:07:22] vista gear 1500 um which has been around since the late 1990s i i would say but there there are other brands out
[1:07:33] there obviously different prices depending on the on the specifics of the of the instrument this particular data was collected
[1:07:42] underwater the the particularity i would say of the ger 1500 is that you can it has an uh
[1:07:49] uh uh a housing an underwater housing a custom made by the company that you can where you can bring the the instrument
[1:07:57] under water up to about things about 150 feet of water and uh and and then the data you can yeah was
[1:08:08] collected underwater with the spectacular meter as i said [Music] [Music] some data that was not shown here has
[1:08:15] also been collected with the same spectral heliometer that has a fiber optic optics cable and uh for itself for instance you can bring
[1:08:24] the samples coral samples uh uh uh under the you know the proper permissions permissions and uh to let's say an aquarium and then
[1:08:33] you can do you can do the the spectral analysis there uh with them with the with the uh fiber optics cable um
[1:08:41] and then usually it's it's a it's kind of like a standard procedure for this uh data collection techniques to to to have
[1:08:50] a diffuse panel which is a spectral on panel panel um um to that that uh that is that it's useful
[1:08:57] to correct for different atmospheric different changes in the atmospheric or watercolor changes that have may have happened during the
[1:09:04] data collection for the for the for the for this particular aspect of how the elementary takes maybe a second or two to to to to do one
[1:09:13] data collection one one spectacle uh spectrum uh collection uh so there's not a big difference there but if you're
[1:09:20] collecting let's say data over 10 minutes uh and you're disturbing the bottom while you're collecting the data that's something
[1:09:28] that you have to to to take into consideration as well and and the the spectral uh panel in
[1:09:35] particular helps uh with that because it has a a surface that it's a homogeneous surface uh all over the panel
[1:09:46] okay question number four um let's see um um okay uh suck are you are you out there can you
[1:09:57] help with uh number four maybe five since you're more into the demo of the kgs in particular
[1:10:05] yeah sure so so question four is can you tell us more about the conversion of net cdf format
[1:10:10] to other formats like geotiff geotiff so a net cdf file contains uh a lot of variables dimensions attributes um and
[1:10:18] it can also contain um a lot of different layers within that um kind of like we showed in the demo um
[1:10:24] you can have a netcdf file that also includes a layer for say chlorophyll or kd490 um so they're
[1:10:31] kind of a complex data file package and the conversion of net cdf to geotiff requires that the user
[1:10:38] choose which variables and attributes you would like to display so it really kind of depends on what you're
[1:10:42] interested in extracting from that file as to kind of what you'll pull from that cdf and then ultimately
[1:10:50] convert into a geotiff um so there's a couple of different tools that you can use for this conversion
[1:10:56] a couple that uh we're familiar with are envy and sea das i mean in cds in particular since that's kind of the the
[1:11:03] free platform that we're using for this demo um it requires that you complete uh extraction on that net cdf where you're
[1:11:13] extracting the layers and information that you're interested in um and then you'll need to either kind of like reclassify or reproject that
[1:11:20] data um to a spatial reference and then you'll be able to kind of save that as a geotiff so
[1:11:28] there's an export feature within cds that you should in theory be able to use to convert files into geotip format
[1:11:34] there's just a little bit of additional processing that happens before then and you'll notice uh amber's put a
[1:11:40] couple of links here um to some methods of doing this in envy especially um and if you're interested in doing that in
[1:11:46] cds i would encourage you to kind of just explore that export feature um and then you can also do some searching on
[1:11:52] cdas website as well which we have linked in the slides which has a really nice platform where
[1:11:58] you can kind of ask questions about how to use uh cds in general and then we'll go ahead and move to question 5.
[1:12:08] is apparently qgis plug-in for hyperspectral data for example the spectral library tool raster data plotting um are not within the list of
[1:12:16] plug-ins plug-ins is there any other way of getting the plug-in without interference from the qgis system um so how this works in in qgis is
[1:12:24] you'll only have the plug-ins that you've um installed directly within your version of qgis so when you
[1:12:30] do that downloading qgis you'll kind of get like all of the standard tools all of the standard things about qgis um
[1:12:37] but you won't have all of those plugins kind of pre-loaded um so i'm gonna give a really nice screenshot here
[1:12:44] where you'll basically just have to go to the top of your qgis interface click the the plugins tab
[1:12:49] and then you should be able to um open the plugins manager uh do a quick search um for kind of whichever tool you're
[1:12:57] most interested in um say that's the spectral library tool um and kind of once you search that you'll see
[1:13:04] those various plugins populate and then you can go ahead and pick which ones you would like to install and if you look
[1:13:10] down there in the lower right of the screenshot there's an install plug-in button and so once you
[1:13:15] hit that that plug-in will install and cue just for you and then you'll be able to use it within the
[1:13:20] interface interface great thank you zack all right let's go into uh question number six then and uh
[1:13:30] is there a way to get attributes related to hyperspectral features okay so for for hyperspectral uh particularly for aquatic hyperspectral
[1:13:42] data uh they're the their might their their less their freely available spectral libraries are less common however you can use uh hyperspectral
[1:13:55] imagery to identify a variety of bentley water quality features and kind of kind of similar to multi-spectral on the uh the
[1:14:05] algorithms for hyperspectral imagery are used to evaluate water quality chlorophyll turbidity other parameters and uh and benthic cover mapping is
[1:14:18] may also rely on the application of algorithms or even machine learning as with our remote sensing it's always a
[1:14:26] great idea to incorporate nc to field data or field data during your for your study area and this is something
[1:14:32] that we can't stress enough uh particularly for for underwater targets targets the water column and there's i saw a few questions of similar
[1:14:43] questions uh that uh uh uh uh that we're gonna see in a moment uh but but particularly for underwater columns
[1:14:52] uh underwater targets remember that the water column changes almost constantly so that is uh you don't you don't only
[1:15:00] have the the the issue with the atmospheric correction but also the water column correction this is where
[1:15:06] where it becomes really uh really important important to do uh uh to to have the underwater data collected
[1:15:16] either uh at the same time of the satellite or or or aircraft overpass if you're dealing with a with an airborne sensor uh
[1:15:26] but uh if you can't do it at the same time as close as possible to the to the overpass
[1:15:32] usually between within one or two hours of the overpass so that you're sure or at least you're you're you're um you you
[1:15:41] there's a bigger chance of having a similar uh uh water column in the above your if you're if you're
[1:15:51] dealing particularly with benthic uh ecosystems a similar water water column as when the when the satellite went through right
[1:16:02] otherwise you'll be probably comparing two different things and completely different things and it's gonna be much more complicated
[1:16:12] okay uh question number seven then uh you mentioned challenges associated with the drones to collect hyperspectral imagery
[1:16:21] while i'm aware of some challenges i might be interested in hearing what challenges uh you're aware of in
[1:16:28] relation to this application uh probably the ones that i that uh that i mentioned are are probably the ones that this uh that our
[1:16:37] uh participant also knows but uh but there's uh you know on these days uh uh drones are used for for
[1:16:47] collecting data of just about everything um but uh well there are challenges associated uh with uh things like
[1:16:55] platform stability and gear rectification you know the issues with the feature raw uh of the of the platform
[1:17:04] uh whether uh for instance for water targets whether it's pointing as a sun or not if there's sun glint in the image others
[1:17:13] also the sensitivity of the sensors uh flown has been taken into consideration as for instance in a lot of cases we are
[1:17:21] using the you know commercial off the shelf shelf uh uh platforms with what comes with them they usually just come with an rgb
[1:17:29] camera and for for uss in particular there's a number of of new hyperspectral cameras that have been produced but still their
[1:17:40] sensitivity sensitivity particularly for for coaster or underwater targets it's still to be the uh dvd to be determined uh so there is
[1:17:50] there's there's a lot of ground to be covered i would say um just to to make this uh
[1:17:59] uh this uh to to to to to to solve some of these challenges that are associated with usa we're using drones uh for for
[1:18:07] hyperspectral imagery or any other type of imagery for the matter all right uh question number eight how do you know
[1:18:16] when typical atmospheric questions algorithms are not uh suitable so uh ideally and another question came uh later or also ideally
[1:18:26] you will also you will have access to uh field or institute data as i mentioned corrected directly from the eurozone air
[1:18:33] area at the time when or close to the time of the satellite overpass and the data eventually you can use it
[1:18:41] to validate the reflectance or other remotely sense uh parameters uh that that you want to measure measure um there's uh you might be able to find
[1:18:51] freely available data uh in the seabass site and we included the site there the link to the site
[1:19:01] um um there's there's a there was a question about whether uh also there's a you know ec2 uh
[1:19:10] spectral data for some benthic uh uh species in particular that's that's uh uh you can probably look into that the siba
[1:19:19] site site as well which is a repository for for nasa particularly for nasa funded projects projects and and and it might be there
[1:19:31] also again [Music] [Music] if there's from experience if there's an advice that i can give you guys is to if you're able to
[1:19:41] with your you know project if you're able to to get a spectrophotometer or collect your own data
[1:19:46] um um do please do because it's not only going to give you experience on on collecting field data and processing it but also
[1:19:54] also you're you're sure with that data that you're collecting it from from the particular targets that you're
[1:20:00] interested in you might also notice uh that there are image artifacts or high number of missing pixels in in in
[1:20:10] your processed imagery uh uh if particularly if the atmospheric correction was not you know appropriate for for for your data
[1:20:20] okay um yeah i this is this uh number nine was not a questions but i but i definitely wanted
[1:20:27] to include it here and because uh we mentioned pace and we want to thanks uh thank uh uh dr erin uh
[1:20:38] urquhart urquhart uh uh who's the uh applications coordinator for paste and i'm provided this information so if
[1:20:46] you want to learn more about pace in particular and its capabilities and how to get involved with pace applications
[1:20:55] please visit the pace website which is the link is included here here in this in this particular uh
[1:21:03] question so thanks aaron for providing that that particular uh feedback we always appreciate this for from from
[1:21:11] our participants all right question number 10 estimating the absorption maxima for each unfortunate pigments is uh possible by
[1:21:19] calculating the second derivative uh from the reflectance spectrum however there's a shift between the in vitro maximal absorption
[1:21:28] and in vivo absorption for the same pigment so does it access a database to identify the invisible
[1:21:35] wavelength for each photosynthetic pigments from the second derivative fix the the the long uh uh uh the short answer is uh no that i know
[1:21:49] it is very true what the what our participant participant is mentioning uh about the the shift uh in
[1:21:56] chromatography that it's what is known as a as a hypochromic shift where the absorption features of a
[1:22:04] particular pigment change uh during the the the due to the effect of different solvents are used for extracting the pigments whether
[1:22:13] you're using uh methanol or or if you're using acetone or something else and uh um there are there are two books that i i
[1:22:24] highly recommend if you can get a get a hand on them um which i've used over over many years and uh
[1:22:33] and it's one of those that i always refer to when i'm when when particularly when analyzing uh
[1:22:40] hplc high performance epic chromatography data or reflectance data from uh from from from the field in particular
[1:22:50] and uh and and they had the those two books to have a uh an extensive library of
[1:22:58] spectra from particular pigments it's it's their aim are phytoplankton pigments pigments but as i mentioned in the in during the
[1:23:06] presentation you know it's it's it's also applicable to other to other uh uh organisms photosynthetic organisms that have the same pigments
[1:23:15] and chlorophylls carotenoids and others um um it and then and the the book shows the uh uh
[1:23:24] the the uh where these pigments absorb and and how they and in which particular wavelengths i again i highly recommend
[1:23:33] it as a reference and uh and i cannot use it over many years it's the the phytoplankton pigments in
[1:23:40] oceanography book which was edited by royal and there's there are two versions of them two uh two two editions i should
[1:23:47] say um and the and if you can get a hold of both of these i would recommend it because there
[1:23:53] are some pigments that they included in one edition and they didn't include it in the other so uh you have uh you know you have a
[1:24:01] more more more complete uh data set there if you can get uh both of them plus there there's all the other uh
[1:24:10] references uh peer review papers as well on this particular topic can you uh please provide references for water
[1:24:20] column column corrections so yes and i'll make sure that uh that when we when we go the period the the document
[1:24:28] that's gonna eventually gonna come out in the uh on the website to include some of the links to to those uh
[1:24:36] papers that i mentioned there are the classic papers of of uh chomping lee and uh on the classic papers of kendall
[1:24:43] calder and others that have worked on this since the 90s um what are both you know atmospheric
[1:24:52] and water quantum corrections and those are very useful since they provide you know different ways of of assessing water column uh
[1:24:59] correction correction and and they are very specific on the different uh uh the different features and different uh
[1:25:07] components of the water column that affect the uh uh like absorb absorption um also uh uh there is uh how is it called the ocean
[1:25:18] optics book uh uh by court mobley that it's a that is highly recommended it's freely available online
[1:25:26] online as well and i will include the will include the links to the ocean optics uh book
[1:25:32] as well it's it's it's uh it goes from the very basic to to to advance uh different
[1:25:39] different levels uh uh okay uh could you please say something about passive fluorescent housing computers some applications
[1:25:49] so so uh one what i what i'll mention about this is that there's a there's a usual process
[1:25:56] uh uh but it's uh it's very commonly uh used in the in the in the literature which is to calculate the line
[1:26:03] fluorescence height uh which is a relative measure of the amount of radiance that uh leaving the the sea surface uh in the chloro
[1:26:13] particularly in the chlorophyll emission band band and then uses a simple linear fit between two different bands that's 667
[1:26:22] and 744 and 48 nanometers and and it's used to calculate uh fluorescence chlorophyll for instance in in the
[1:26:32] in ocean color and uh and i included the link there as well to with more information uh from the ocean color
[1:26:39] website about particularly about the uh the fluorescence line height okay what model was used to collect nc
[1:26:49] today russian in the slide it was a spectra vista ger 1500 they have a new version version of of this one i think it's called the
[1:26:57] hr hr 512 512 and and and there are a number of others from different companies wow we have used this one
[1:27:08] for about 20 years and i have several purposes the one thing that i can say that i like about
[1:27:14] them it has a pros and cons one thing i can say about it that i like is that it since it comes with a with
[1:27:20] its its underwater housing you can you can bring it with you you know you can do diving
[1:27:25] with it and collect the data uh there as well and there's there's a couple of other other uh
[1:27:33] oh there's uh spectrometers that that they have done similarly um so yeah that's the one we use but
[1:27:40] there are others out there and it obviously depends on your project budget or depends on the on the what are the
[1:27:47] specific sort of the other questions that you have that you want to answer with your with your data collection
[1:27:56] okay uh slide eight spectra is it under water uh corrected from water absorption the spectra was collected under water well that's a good
[1:28:08] question was collected on the water with the with the spectrophotometer that i just mentioned in the underwater housing but then we
[1:28:14] use a spectral on planner to do the correction for uh for the water column in particular and like i said it's a standard process
[1:28:24] uh for uh for this type of data collection uh analysis um um is calibration based on ground truth or
[1:28:34] cross referencing for other sensors yes it can be done with both ideally again as we've mentioned uh and numerous times
[1:28:43] ideally you will calibrate an instrument using ground-based data your ground-based data during the during the satellite or
[1:28:54] aircraft overpass comparison of phil and abby's their water column correction in that case um which i mentioned and this is some this
[1:29:06] is a case that i also mentioned a few months ago when we did the uh remote sensing for coastal ecosystems
[1:29:12] uh webinar the researchers and i actually went a little bit deeper into doing uh into these uh the details of
[1:29:20] watercolor correction during that particular webinar so i encourage you guys to see it if you have the time
[1:29:27] uh in in in this case the researchers at the university of puerto rico the bio-optical oceanography lab they use a
[1:29:34] series of underwater tap tarps uh to collect to correct for water column um this was a you know a relatively shallow
[1:29:43] site site um less than two meters but uh before after when you look at the before and
[1:29:50] after graphs you see how even in the in shallow waters we have relatively clear waters in that
[1:29:57] area still there is an important influence of the of the water column that you have to cons you have to take
[1:30:03] into consideration where you do the analysis analysis particularly for benthic systems okay okay uh uh question 17
[1:30:14] we already went uh over that so how are you able to extract the different coral signatures again with that with that
[1:30:21] aspect of heliometers especially matter [Music] [Music] question 18 what tools would you advise for atmospheric atmospheric correction in
[1:30:34] particular how do you manage the aerosol content which is probably the most variable and hard to determine
[1:30:40] atmospheric constituent yeah that is a quite complicated question i would say and i believe most atmospheric corrections models they incorporate
[1:30:52] atmospheric data from the data imagery was collected to to eliminate some of the influences there related to data variations in aerosols
[1:31:02] however however you may have to explore additional methods to minimize the influence of aerosols in your data
[1:31:11] and you may need to to avoid the use of some pixels uh also that don't uh pass a certain
[1:31:19] quality metric there um um so keep keep an eye on up for for those image artifacts and
[1:31:26] exclude any data that appear you know heavily influenced by by by some atmospheric corrections and the uh
[1:31:36] there's also there's an nc2 field a classic uh instrument that is used uh for for particularly for for aerosol
[1:31:45] collecting data aerosol optical depth and things like that uh is uh it's a microsoft micro tops sound photometer
[1:31:54] and uh uh and is one of those uh instruments that have been used for for years and years in the field to to
[1:32:03] to help uh with the particular with atmospheric correction is the hyperspectral data available for the mina region-free there's a limited
[1:32:15] amount amount of hyperspectral data available for for that particular region um um since all nasa data is available
[1:32:25] freely available you can take a look and uh at the special extent of data and the either
[1:32:31] the ocean color web or earth explorer globus or nasa earth data and see if there's any other type of data available for for
[1:32:41] that particular region um um okay okay i understand that that maybe we can go over a couple more
[1:32:53] and then you know uh because of the for time limitations and but but again we're gonna we're gonna the ones that we we
[1:33:01] don't answer right now we're gonna make sure to answer them in the in the final document document there's a satellite it's not already
[1:33:08] necessarily decommissioned at the exact plant date like for quick quiz cut uh if so how's the decision taken based
[1:33:16] on a set of performance indicators yes it depends on how well the sensor is performing performing and if the data
[1:33:23] are being used by the community uh generally satellite sensors must you know well be underplanted and and generally
[1:33:33] nasa nasa keeps those sensors in operation for as long as the sensor is is working so each sensor likely has a set of their
[1:33:44] own performance indicators and uh and if the data are degraded past a certain threshold threshold then the sensor is eventually
[1:33:54] decommissioned um um okay why do average and in-situ reflectances reflectances diverge more towards a larger wavelength in the visible range it is because
[1:34:06] mostly because of the the influence of of of water of the water itself uh absorption absorption in in those uh in those longer
[1:34:17] wavelengths the red and near infrared reunion in particular since the number of bands are given wavelength range is several times higher
[1:34:30] in hyperspectral section sensors and multispectral multispectral will the response be more noisy comparatively yes and as the wavelength range of this
[1:34:41] which which band decreases the noise usually becomes larger and this is why the signal to the isolator is important
[1:34:49] to consider with with hyperspectral uh data um um okay um [Music] [Music] all right uh question 23
[1:35:02] is it convenient is uh is it convenient if any hands-on training processing of hyperspectral data for any component like seagrasses
[1:35:09] mangrove coral etc do you consider this issue in the the session or future unfortunately we don't have uh any
[1:35:20] training like this plan at the moment but we always definitely want to hear more about what types of trainings you
[1:35:28] guys guys are interested in as more hyperspectral missions are planned and successfully launched i'm sure sure that we're going to look into you know
[1:35:39] holding additional high prospector webinars um if it uh this kind the the this question looks uh probably
[1:35:47] probably it probably be more applicable to let's say an in-person webinar excuse me so whenever uh whenever you know conditions come
[1:36:00] back to normal eventually eventually so this is something that we can take into consideration for particularly for in for a future maybe
[1:36:12] in-person webinar because this is i mean if it's hands-on if if it's actually it's very important to to learn how to
[1:36:21] collect your your in-situ data in particular particular when when in particular if you're going to use it
[1:36:27] for for validation of satellite or urban images images and there's there's there's a number of things that you have to consider you
[1:36:34] know the song angle and the conditions and and uh and a number of other factors um uh yes we wish
[1:36:44] we we we could do those types of trainings in in in some areas but who knows you know who knows then maybe in
[1:36:50] the future it's finger crossed okay probably you can go with this the 24 the last one and they will will
[1:36:58] will do their rest uh uh you know offline uh and then we'll make this available for for the for the benefit of everyone
[1:37:08] are there any recommended uh portable and lab spectrometers for lan applications so the same ones that i
[1:37:15] mentioned in this webinar can also be used used uh uh for land applications um um there's there's there's actually uh asd is one of them
[1:37:28] that comes to mind there are three billions for both for land and an ocean uh ocean optics they they
[1:37:36] they have a smaller less costly version uh which is typically i think this one is you know
[1:37:44] it's quite small it's a few inches small a few inches large and it's connected to at all times to a laptop so it's
[1:37:52] definitely not for bringing underwater the one again that we used the 1500 and its later patients can be used on
[1:38:03] land and underwater targets and like i said there's there's a few of them up there uh it's it's a matter of of your project
[1:38:13] budget and and the the specific uh hypothesis or questions that that you wanna wanna uh answer okay i'm gonna go with uh number 26 and
[1:38:25] then we'll uh call it the day 27 is the same one that uh that we mentioned before about the
[1:38:31] use of drones um um and 28 is same one as pretty much the same one as 26. um the
[1:38:41] different species of cigarettes can they be identified with hyperspectral data i'm in a project monitoring seagrasses in campeche in mexico
[1:38:49] but there isn't very much data besides multispectral most times with sigra species based on my experience it's really really hard to distinguish
[1:38:59] them respectfully they are very extremely similar especially let's say you're comparing talasia versus syringodium or others you know they're very very similar um
[1:39:14] so they they they can be distinguished from some types of microalgae let's say from brown algae or red algae obviously
[1:39:22] because they have completely different pigments pigments with field data but but but when you're considering you know
[1:39:30] hyperspectral data with with a satellite or airborne images and this is also where spatial resolution in particular
[1:39:36] comes into place because uh if they're just you know sparsely sparsely uh located in your area you
[1:39:45] there's going to be most likely the pixel pixel is going to be a mixed pixel uh with both components at the same time
[1:39:52] and then you have to do you know spectral mixing and unmixing analysis and things like that to try to
[1:39:58] separate uh the different components but that's uh that's a little bit beyond the scope of of this webinar
[1:40:07] but uh but those are the things uh to consider generally i would say no seagrasses are extremely extremely
[1:40:14] similar uh in spectral terms and they're they're really really hard to uh to distinguish between them all right um we're a little bit over
[1:40:25] time so uh i wanna first i wanna thank you all for participating in this webinar series um the uh with us uh definitely thank
[1:40:38] our our uh my my colleagues and friends amber and zach for uh for helping with this and uh for uh
[1:40:47] teaching some of the sessions as well and again if you have any questions uh additional questions feel free to email
[1:40:56] amber amber or zac or myself to the uh uh to the emails that are on the on the q a
[1:41:04] document and us and also on the presentation presentation and and i want to thank our the uh the whole team behind the scenes
[1:41:13] uh that are that are actually the ones that do the magic so that we can we can
[1:41:18] give you guys this uh webinar series and and all the others and also our uh our program director anna prados
[1:41:28] as well for for her support and the nasa capacity building program all right well thank you guys and uh i
[1:41:36] hope this has been useful and stay tuned for the next ones there's a few other our webinars out there
[1:41:44] that are uh pending in the next uh in the next months and uh stay tuned for them because a lot of
[1:41:50] different very interesting topics are coming your way all right have a great day great week stay safe
[1:41:58] and take care of yourself
